/**
 * 构建：content/*.json -> dist/dirs.js + dist/content/<dir>.cards.js
 *      检测题拆包：<dir>.quiz.index.js（元数据索引）+ <dir>.quiz.<cat>.js（按分类正文）
 * 用法：
 *   node tools/build.js            构建全部方向
 *   node tools/build.js --dir=KEY  只构建指定方向
 */
const fs = require('fs');
const path = require('path');
const { validateDirs, validateCards, validateQuiz } = require('./validate');
const deep = require('./deep');
const priority = require('./priority');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const DIST = path.join(ROOT, 'dist');
const DIST_CONTENT = path.join(DIST, 'content');
const BANNER = '/* 由 tools/build.js 生成，请勿手改；源文件在 content/ */\n';

const only = (process.argv.find(a => a.startsWith('--dir=')) || '').split('=')[1] || '';
const readJson = f => JSON.parse(fs.readFileSync(f, 'utf8'));

const manifest = readJson(path.join(CONTENT, 'dirs.json'));
const dirsErr = validateDirs(manifest).errs;
if (dirsErr.length) {
  console.error('dirs.json 校验失败：');
  dirsErr.forEach(e => console.error(' - ' + e));
  process.exit(1);
}

fs.mkdirSync(DIST_CONTENT, { recursive: true });
// 清理历史遗留产物：预压缩包（构建不再产出 .gz）与旧的整包检测题（已拆成索引 + 分类包）
fs.readdirSync(DIST_CONTENT)
  .filter(f => f.endsWith('.gz') || /\.quiz\.js$/.test(f))
  .forEach(f => fs.unlinkSync(path.join(DIST_CONTENT, f)));

// 深读产物先构建，这样卡片/检测题能注入「看深读」所需的单元映射
const deepInfo = deep.build({ only, quiet: true });

const outDirs = [];
let failed = !deepInfo.ok;

manifest.dirs.forEach(meta => {
  if (only && meta.key !== only) return;
  const metaSections = new Map(meta.sections.map(s => [s.key, s]));
  const entry = {
    key: meta.key,
    title: meta.title,
    sections: meta.sections.map(s => ({
      key: s.key,
      name: s.name,
      color: s.color || 'accent',
      unitLabel: s.unitLabel || '章',
      showUnitNo: s.showUnitNo !== false,
      badgeFrom: s.badgeFrom || '',
      badgeTo: s.badgeTo || ''
    })),
    counts: { cards: 0, quiz: 0, cardGroups: 0, quizGroups: 0, units: 0, deep: 0, algo: 0, algoTopics: 0, bySection: {} }
  };
  const deepMap = deepInfo.dirs[meta.key] || null;
  const prio = priority.load(meta.key);
  if (prio.errors.length) {
    failed = true;
    console.error(meta.key + '/priority.json 有问题：');
    prio.errors.forEach(e => console.error(' - ' + e));
  }
  if (deepMap) {
    entry.counts.deep = deepMap.counts.units;
    entry.deep = { chapters: deepMap.counts.chapters, units: deepMap.counts.units };
  }
  meta.sections.forEach(s => {
    entry.counts.bySection[s.key] = { cards: 0, quiz: 0, cardGroups: 0, quizGroups: 0, units: 0 };
  });

  const cardsFile = path.join(CONTENT, meta.key, 'cards.json');
  const quizFile = path.join(CONTENT, meta.key, 'quiz.json');

  if (fs.existsSync(cardsFile)) {
    const src = readJson(cardsFile);
    const errs = validateCards(src, { sections: new Set(metaSections.keys()) });
    if (src.dir !== meta.key) errs.push('cards.json 的 dir 与清单不一致: ' + src.dir);
    if (errs.length) {
      failed = true;
      console.error(meta.key + '/cards.json 校验失败：');
      errs.forEach(e => console.error(' - ' + e));
      return;
    }
    const sections = src.sections.map((s, si) => {
      const sm = metaSections.get(s.key);
      const groups = s.groups.map((g, gi) => {
        const cards = g.cards.map(c => {
          const out = Object.assign({}, c, { section: s.key, key: meta.key + '/' + c.id });
          if (deepMap && deepMap.cardToUnit[c.id]) {
            const du = deepMap.cardToUnit[c.id];
            out.deepUnit = du.unit;
            out.deepTitle = du.title;
          }
          return out;
        });
        entry.counts.cards += cards.length;
        entry.counts.bySection[s.key].cards += cards.length;
        return { key: g.key || s.key + '-g' + (gi + 1), name: g.name, cards };
      });
      entry.counts.cardGroups += groups.length;
      entry.counts.bySection[s.key].cardGroups += groups.length;
      return { key: s.key, name: s.name, color: sm.color || 'accent', unitLabel: sm.unitLabel || '章', groups };
    });
    const bundle = { dir: meta.key, sections };
    fs.writeFileSync(
      path.join(DIST_CONTENT, meta.key + '.cards.js'),
      BANNER + 'window.CONTENT=window.CONTENT||{};window.CONTENT["' + meta.key + '"]=window.CONTENT["' + meta.key + '"]||{};window.CONTENT["' + meta.key + '"].cards=' + JSON.stringify(bundle) + ';\n',
      'utf8'
    );
  }

  if (fs.existsSync(quizFile)) {
    const src = readJson(quizFile);
    const errs = validateQuiz(src, { sections: new Set(metaSections.keys()) });
    if (src.dir !== meta.key) errs.push('quiz.json 的 dir 与清单不一致: ' + src.dir);
    if (errs.length) {
      failed = true;
      console.error(meta.key + '/quiz.json 校验失败：');
      errs.forEach(e => console.error(' - ' + e));
      return;
    }
    const groupMap = new Map(src.groups.map(g => [g.key, g]));
    const untagged = [];
    const items = src.items.map(it => {
      const g = groupMap.get(it.cat);
      const section = g.section;
      entry.counts.quiz++;
      entry.counts.bySection[section].quiz++;
      const t = prio.items[it.id];
      if (!t) untagged.push(it.id);
      return Object.assign({}, it, { section, key: meta.key + '/' + it.id }, t ? { p: t.p, pWhy: t.why } : {});
    });
    if (untagged.length) {
      console.warn(meta.key + '/quiz.json 有 ' + untagged.length + ' 道题未打频次标签（页面按「全部」处理）：' + untagged.slice(0, 12).join('、') + (untagged.length > 12 ? ' …' : ''));
    }
    const unitKeys = new Set(src.items.map(it => it.cat + ':' + it.unit));
    entry.counts.units = unitKeys.size;
    entry.counts.quizGroups = src.groups.length;
    src.groups.forEach(g => {
      entry.counts.bySection[g.section].quizGroups++;
      entry.counts.bySection[g.section].units += (g.units ? g.units[1] - g.units[0] + 1 : 0);
    });
    // 拆包：索引（只含筛选/统计要用的元数据，首屏只加载这个）+ 按分类的正文包
    // 索引里不放 q/options/explain/ref，正文在渲染前按分类按需加载并回填到同一条对象上
    const indexItems = items.map(it => ({
      id: it.id,
      cat: it.cat,
      type: it.type,
      section: it.section,
      unit: it.unit,
      unitTitle: it.unitTitle || '',
      diff: it.diff || 1,
      p: it.p || ''
    }));
    const index = { dir: meta.key, groups: src.groups, items: indexItems };
    fs.writeFileSync(
      path.join(DIST_CONTENT, meta.key + '.quiz.index.js'),
      BANNER + 'window.CONTENT=window.CONTENT||{};window.CONTENT["' + meta.key + '"]=window.CONTENT["' + meta.key + '"]||{};window.CONTENT["' + meta.key + '"].quizIndex=' + JSON.stringify(index) + ';\n',
      'utf8'
    );
    src.groups.forEach(g => {
      const list = items.filter(it => it.cat === g.key);
      if (!list.length) return;
      fs.writeFileSync(
        path.join(DIST_CONTENT, meta.key + '.quiz.' + g.key + '.js'),
        BANNER + 'window.CONTENT=window.CONTENT||{};window.CONTENT["' + meta.key + '"]=window.CONTENT["' + meta.key + '"]||{};' +
          'window.CONTENT["' + meta.key + '"].quizCats=window.CONTENT["' + meta.key + '"].quizCats||{};' +
          'window.CONTENT["' + meta.key + '"].quizCats["' + g.key + '"]={items:' + JSON.stringify(list) + '};\n',
        'utf8'
      );
    });

    // 单元索引（体积极小）：供首页「今日队列」定位薄弱单元，无需加载 500KB 题库
    const unitMap = new Map();
    items.forEach(it => {
      const k = it.cat + ':' + it.unit;
      let u = unitMap.get(k);
      if (!u) { u = { section: it.section, unit: it.unit, title: it.unitTitle || '', ids: [] }; unitMap.set(k, u); }
      u.ids.push(it.id);
    });
    fs.writeFileSync(
      path.join(DIST_CONTENT, meta.key + '.unitmap.js'),
      BANNER + 'window.UNITMAP=window.UNITMAP||{};window.UNITMAP["' + meta.key + '"]=' + JSON.stringify(Array.from(unitMap.values())) + ';\n',
      'utf8'
    );
  }

  if (!fs.existsSync(cardsFile) && !fs.existsSync(quizFile)) {
    console.error('方向 ' + meta.key + ' 既没有 cards.json 也没有 quiz.json');
    failed = true;
    return;
  }

  // 算法练习：题目 + 专题，单独一个内容包（页面按需加载）
  const algoFile = path.join(CONTENT, meta.key, 'algo.json');
  if (fs.existsSync(algoFile)) {
    const src = readJson(algoFile);
    const topicKeys = new Set((src.topics || []).map(t => t.key));
    const problems = [];
    (src.items || []).forEach(it => {
      if (!it || typeof it.id !== 'string' || !it.id) problems.push('题目缺少 id');
      else if (!topicKeys.has(it.topic)) problems.push(it.id + ' 的 topic 不在专题清单里：' + it.topic);
      else if (!it.title) problems.push(it.id + ' 缺少标题');
      else if (!it.skeleton) problems.push(it.id + ' 缺少参考实现');
      else if (!Array.isArray(it.pitfalls) || it.pitfalls.length < 2) problems.push(it.id + ' 需要 2 条易错边界');
    });
    if (src.dir !== meta.key) problems.push('algo.json 的 dir 与清单不一致: ' + src.dir);
    if (problems.length) {
      failed = true;
      console.error(meta.key + '/algo.json 校验失败：');
      problems.forEach(p => console.error(' - ' + p));
    } else {
      entry.counts.algo = src.items.length;
      entry.counts.algoTopics = src.topics.length;
      entry.algoTopics = src.topics.map(t => ({ key: t.key, name: t.name, count: src.items.filter(i => i.topic === t.key).length }));
      fs.writeFileSync(
        path.join(DIST_CONTENT, meta.key + '.algo.js'),
        BANNER + 'window.CONTENT=window.CONTENT||{};window.CONTENT["' + meta.key + '"]=window.CONTENT["' + meta.key + '"]||{};' +
          'window.CONTENT["' + meta.key + '"].algo=' + JSON.stringify({ dir: meta.key, topics: src.topics, items: src.items }) + ';\n',
        'utf8'
      );
    }
  }
  outDirs.push(entry);
});

if (failed) process.exit(1);

fs.writeFileSync(path.join(DIST, 'dirs.js'), BANNER + 'window.DIRS=' + JSON.stringify(outDirs) + ';\n', 'utf8');

outDirs.forEach(d => {
  console.log('OK ' + d.key + ' cards=' + d.counts.cards + ' quiz=' + d.counts.quiz + ' cardGroups=' + d.counts.cardGroups + ' quizGroups=' + d.counts.quizGroups + ' units=' + d.counts.units + ' algo=' + d.counts.algo);
});
console.log('-> dist/dirs.js + ' + outDirs.length + ' 组内容包');

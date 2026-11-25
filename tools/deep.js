/**
 * 深读内容管线：content/<dir>/deep.md
 *   -> dist/content/<dir>.deep.index.js     全局索引（章节 + 单元元信息 + 映射）
 *   -> dist/content/<dir>.deep.<chN>.js     章节包（按需加载，含单元正文）
 *   -> dist/deep.manifest.json              源文件 hash 与产物清单，供 --check / pack 使用
 *
 * 用法：
 *   node tools/deep.js                     构建所有含 deep.md 的方向
 *   node tools/deep.js --dir=ue-cpp        只构建一个方向
 *   node tools/deep.js --check             校验站内副本与产物是否一致（不一致退出码 1）
 *   node tools/deep.js --sync <源路径>      复制源文件到 content/<dir>/deep.md 后重建
 *
 * 解析约定（与 深读.md 现有格式绑定，格式变化需同步改这里）：
 *   <a id="chN"></a> 后紧跟 "# 第 N 章 …"            -> 章节
 *   <a id="unit-N"></a> / <a id="ue-unit-NN"></a> 后紧跟 "## …" -> 单元
 *   单元元信息行 "> 来源：… ｜ 速背卡：[N](./速背.md#cpp-01) ｜ 耗时 15 min ｜ 难度 ★★☆"
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const priority = require('./priority');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const DIST = path.join(ROOT, 'dist');
const DIST_CONTENT = path.join(DIST, 'content');
const MANIFEST = path.join(DIST, 'deep.manifest.json');
const BANNER = '/* 由 tools/deep.js 生成，请勿手改；源文件在 content/<dir>/deep.md */\n';
const DAY = 86400000;

const sha256 = buf => crypto.createHash('sha256').update(buf).digest('hex');

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return null; }
}

/* ---------------- 标记扫描 ---------------- */

function scanMarkers(lines) {
  const markers = [];
  let pending = null;
  let fence = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*```/.test(line)) { fence = !fence; continue; }
    if (fence) continue;

    const a = line.match(/^<a id="([^"]+)"><\/a>\s*$/);
    if (a) { pending = a[1]; continue; }
    if (pending && /^#\s+/.test(line)) { markers.push({ type: 'chapter', id: pending, idx: i }); pending = null; continue; }
    if (pending && /^##\s+/.test(line)) { markers.push({ type: 'unit', id: pending, idx: i }); pending = null; continue; }
    // 锚点后不是标题：丢弃，避免把 toc 错配给下一章
    if (pending && line.trim()) pending = null;
  }
  return markers;
}

// 正文区间：标题下一行 → 下一个标记的锚点行之前
function sliceBody(lines, markerIdx, nextMarkerIdx) {
  const end = nextMarkerIdx == null ? lines.length : Math.max(markerIdx + 1, nextMarkerIdx - 1);
  return lines.slice(markerIdx + 1, end);
}

function trimBody(bodyLines) {
  const out = bodyLines.slice();
  while (out.length && !out[0].trim()) out.shift();
  while (out.length) {
    const last = out[out.length - 1].trim();
    if (!last || last === '---' || /^>\s*↑\s*返回/.test(last)) { out.pop(); continue; }
    break;
  }
  return out;
}

/* ---------------- 链接改写（只处理非围栏行） ---------------- */

function anchorToUnit(anchor) {
  let m = anchor.match(/^ue-unit-(\d+)$/);
  if (m) return { section: 'ue', unit: Number(m[1]) };
  m = anchor.match(/^unit-(\d+)$/);
  if (m) return { section: 'cpp', unit: Number(m[1]) };
  return null;
}

function rewriteLinks(md, dirKey) {
  const lines = md.split('\n');
  let fence = false;
  const out = lines.map(line => {
    if (/^\s*```/.test(line)) { fence = !fence; return line; }
    if (fence) return line;
    return line.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (all, text, href) => {
      if (/^https?:/i.test(href)) return all;
      let dest = href;
      const au = href.match(/^#(unit-\d+|ue-unit-\d+)$/);
      if (au) {
        const t = anchorToUnit(au[1]);
        dest = t ? 'deep.html?dir=' + dirKey + '&sec=' + t.section + '&unit=' + t.unit : 'deep.html?dir=' + dirKey;
      } else if (/^#ch\d+$/.test(href)) {
        dest = 'deep.html?dir=' + dirKey + '&chapter=' + href.slice(1);
      } else if (href === '#toc') {
        dest = 'deep.html?dir=' + dirKey;
      } else if (href.indexOf('速背.md') >= 0) {
        const m = href.match(/#(cpp-\d+|ue-q\d+)/);
        dest = m ? 'index.html?dir=' + dirKey + '&card=' + m[1] : 'index.html?dir=' + dirKey;
      } else if (href.indexOf('深读.md') >= 0) {
        const m = href.match(/#(unit-\d+|ue-unit-\d+)/);
        const t = m ? anchorToUnit(m[1]) : null;
        dest = t ? 'deep.html?dir=' + dirKey + '&sec=' + t.section + '&unit=' + t.unit : 'deep.html?dir=' + dirKey;
      } else if (href.indexOf('自测.md') >= 0) {
        dest = 'quiz.html?dir=' + dirKey;
      } else if (href.indexOf('计划.md') >= 0) {
        return text;
      }
      return '[' + text + '](' + dest + ')';
    });
  });
  return out.join('\n');
}

/* ---------------- 单元/章节字段提取 ---------------- */

const BOLD_LABELS = new Set([
  '一句话', '学完能做到', '常见误解', '设计动机', '版本差异', '可观察验证',
  'A 写', 'B 讲', '提示', '事实', '写法', '需求', '误解'
]);

function collectTerms(text) {
  const terms = [];
  const seen = new Set();
  text.split('\n').forEach(line => {
    const re = /\*\*([^*\n]{2,24})\*\*/g;
    let m;
    while ((m = re.exec(line))) {
      const t = m[1].trim();
      if (!t || BOLD_LABELS.has(t) || seen.has(t)) continue;
      seen.add(t);
      terms.push(t);
      if (terms.length >= 40) break;
    }
  });
  return terms;
}

function parseUnit(marker, heading, bodyLines, chapterId, dirKey) {
  const raw = heading.replace(/^##\s+/, '').trim();
  const h = raw.match(/^[DU]\d+\s*·\s*(?:单元\s*(\d+)|Q(\d+))\s+(.+)$/);
  const titleRaw = h ? h[3].trim() : raw;
  const title = titleRaw.replace(/`/g, '').trim();
  const au = anchorToUnit(marker.id) || { section: marker.id.startsWith('ue-') ? 'ue' : 'cpp', unit: 0 };

  const metaLine = bodyLines.find(l => /^>\s*来源：/.test(l)) || '';
  const source = (metaLine.match(/来源：\s*([^｜|\n]+)/) || [])[1] ? (metaLine.match(/来源：\s*([^｜|\n]+)/) || [])[1].trim() : '';
  const cardId = (metaLine.match(/速背\.md#(cpp-\d+|ue-q\d+)/) || [])[1] || '';
  const minutes = Number((metaLine.match(/耗时\s*(\d+)\s*min/) || [])[1] || 0);
  const difficulty = (metaLine.match(/难度\s*([★☆]{1,6})/) || [])[1] || '';

  const oneLine = (bodyLines.join('\n').match(/^\*\*一句话\*\*：\s*(.+)$/m) || [])[1] || '';
  const fullText = bodyLines.join('\n');
  const terms = collectTerms(fullText);

  // 去掉元信息行与「一句话」行，避免正文重复展示
  const body = trimBody(bodyLines.filter(l => {
    if (/^>\s*来源：/.test(l)) return false;
    if (/^\*\*一句话\*\*：/.test(l)) return false;
    return true;
  })).join('\n');

  return {
    id: marker.id,
    section: au.section,
    unit: au.unit,
    chapter: chapterId,
    title,
    titleRaw,
    source,
    cardId,
    minutes,
    difficulty,
    oneLine,
    terms,
    body: rewriteLinks(body, dirKey)
  };
}

function parseDeep(src, dirKey) {
  const lines = src.split(/\r?\n/);
  const markers = scanMarkers(lines);  const chapters = [];
  let cur = null;

  markers.forEach((m, k) => {
    const next = markers[k + 1];
    if (m.type === 'chapter') {
      const heading = lines[m.idx].replace(/^#\s+/, '').trim();
      const no = Number((heading.match(/^第\s*(\d+)\s*章/) || [])[1] || (m.id.match(/^ch(\d+)$/) || [])[1] || 0);
      const name = heading.replace(/^第\s*\d+\s*章\s*·\s*/, '').trim();
      const gross = trimBody(sliceBody(lines, m.idx, next ? next.idx : null));
      const introText = gross.join('\n');
      const quizNos = [];
      const cn = introText.match(/对应题库第\s*([\d、,，\s]+)\s*题/);
      if (cn) cn[1].split(/[、,，\s]+/).forEach(x => { const n = Number(x); if (n > 0) quizNos.push(n); });
      const qr = introText.match(/Q(\d+)\s*[–-]\s*Q(\d+)/);
      if (qr) for (let n = Number(qr[1]); n <= Number(qr[2]); n++) quizNos.push(n);
      cur = {
        id: m.id,
        no,
        title: heading,
        name,
        section: m.id.replace(/^ch/, '') && Number(m.id.replace(/^ch/, '')) <= 5 ? 'cpp' : 'ue',
        intro: rewriteLinks(trimBody(gross).join('\n'), dirKey),
        quizNos: Array.from(new Set(quizNos)),
        units: []
      };
      chapters.push(cur);
      return;
    }
    if (!cur) return; // 首个单元之前的内容（目录）忽略
    const unit = parseUnit(m, lines[m.idx], sliceBody(lines, m.idx, next ? next.idx : null), cur.id, dirKey);
    cur.units.push(unit);
  });

  chapters.forEach(c => { c.unitCount = c.units.length; });
  return chapters;
}

/* ---------------- 映射与缺口 ---------------- */

function checkStructure(lines, chapters) {
  const fatal = [];
  const warns = [];
  const ids = {};
  const dup = [];
  let fence = false;
  lines.forEach(line => {
    if (/^\s*```/.test(line)) { fence = !fence; return; }
    if (fence) return;
    const m = line.match(/^<a id="([^"]+)"><\/a>\s*$/);
    if (m) {
      if (ids[m[1]]) dup.push(m[1]);
      ids[m[1]] = true;
    }
  });
  if (dup.length) fatal.push('锚点重复：' + dup.join('、'));
  if (fence) warns.push('代码围栏未闭合（``` 数量为奇数）');
  const noBody = [];
  const noOne = [];
  chapters.forEach(ch => ch.units.forEach(u => {
    if (!u.body.trim()) noBody.push(u.id);
    if (!u.oneLine) noOne.push(u.id);
  }));
  if (noBody.length) warns.push('单元正文为空：' + noBody.join('、'));
  if (noOne.length) warns.push('单元缺少一句话：' + noOne.join('、'));
  return { fatal, warns, anchors: Object.keys(ids).length };
}

function loadQuizMeta(dirKey) {
  const cards = readJson(path.join(CONTENT, dirKey, 'cards.json'));
  const quiz = readJson(path.join(CONTENT, dirKey, 'quiz.json'));
  const cardIds = new Set();
  if (cards && Array.isArray(cards.sections)) {
    cards.sections.forEach(s => (s.groups || []).forEach(g => (g.cards || []).forEach(c => {
      if (c && c.id) cardIds.add(c.id);
    })));
  }
  const quizCount = {};
  const unitTitle = {};
  if (quiz && Array.isArray(quiz.items)) {
    const catSec = {};
    (quiz.groups || []).forEach(g => { catSec[g.key] = g.section; });
    quiz.items.forEach(it => {
      const sec = it.section || catSec[it.cat] || '';
      const key = sec + '|' + it.unit;
      quizCount[key] = (quizCount[key] || 0) + 1;
      if (!unitTitle[key]) unitTitle[key] = it.unitTitle || '';
    });
  }
  return { cardIds, quizCount, unitTitle };
}

function buildMaps(chapters, dirKey, quizMeta) {
  const cardToUnit = {};
  const unitToCard = {};
  const unitToQuiz = {};
  const missingCards = [];
  const unitsWithoutCard = [];
  const unitsWithoutQuiz = [];
  const usedCards = new Set();

  chapters.forEach(ch => ch.units.forEach(u => {
    const key = u.section + '|' + u.unit;
    unitToQuiz[key] = quizMeta.quizCount[key] || 0;
    if (!unitToQuiz[key]) unitsWithoutQuiz.push(u.id);
    if (u.cardId) {
      if (!quizMeta.cardIds.has(u.cardId)) missingCards.push(u.id + ' → ' + u.cardId);
      else {
        cardToUnit[u.cardId] = { unit: u.unit, section: u.section, chapter: ch.id, title: u.title };
        unitToCard[key] = u.cardId;
        usedCards.add(u.cardId);
      }
    } else {
      unitsWithoutCard.push(u.id);
    }
  }));

  const cardsWithoutUnit = Array.from(quizMeta.cardIds).filter(id => !usedCards.has(id));
  return { cardToUnit, unitToCard, unitToQuiz, missingCards, unitsWithoutCard, unitsWithoutQuiz, cardsWithoutUnit };
}

/* ---------------- 构建 ---------------- */

function scanDirs(only) {
  if (!fs.existsSync(CONTENT)) return [];
  return fs.readdirSync(CONTENT, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)
    .filter(k => (!only || k === only) && fs.existsSync(path.join(CONTENT, k, 'deep.md')));
}

function build(opts) {
  opts = opts || {};
  const quiet = !!opts.quiet;
  const dirs = scanDirs(opts.only || '');
  const result = { ok: true, dirs: {}, gaps: {} };

  if (!dirs.length) {
    if (!quiet) console.log('未找到 content/<dir>/deep.md，跳过深读构建（先运行 node tools/deep.js --sync <源路径>）');
    return result;
  }
  fs.mkdirSync(DIST_CONTENT, { recursive: true });
  const manifest = fs.existsSync(MANIFEST) ? readJson(MANIFEST) : null;
  const man = manifest && manifest.dirs ? manifest : { version: 1, dirs: {} };

  dirs.forEach(dirKey => {
    const srcFile = path.join(CONTENT, dirKey, 'deep.md');
    const buf = fs.readFileSync(srcFile);
    const src = buf.toString('utf8');
    const hash = sha256(buf);
    const st = fs.statSync(srcFile);
    const chapters = parseDeep(src, dirKey);
    const struct = checkStructure(src.split(/\r?\n/), chapters);
    if (struct.fatal.length) {
      result.ok = false;
      struct.fatal.forEach(f => console.error('[' + dirKey + ' 结构错误] ' + f));
    }
    const quizMeta = loadQuizMeta(dirKey);
    const prio = priority.load(dirKey);
    prio.errors.forEach(e => { result.ok = false; console.error('[' + dirKey + ' priority] ' + e); });
    const maps = buildMaps(chapters, dirKey, quizMeta);
    const builtAt = new Date().toISOString();

    // 索引：不含正文
    const index = {
      dir: dirKey,
      source: { file: 'content/' + dirKey + '/deep.md', bytes: buf.length, sha256: hash, mtime: st.mtime.toISOString(), builtAt },
      counts: {
        chapters: chapters.length,
        units: chapters.reduce((a, c) => a + c.units.length, 0),
        cpp: chapters.reduce((a, c) => a + c.units.filter(u => u.section === 'cpp').length, 0),
        ue: chapters.reduce((a, c) => a + c.units.filter(u => u.section === 'ue').length, 0),
        anchors: struct.anchors
      },
      chapters: chapters.map(ch => ({
        id: ch.id,
        no: ch.no,
        title: ch.title,
        name: ch.name,
        section: ch.section,
        unitCount: ch.unitCount,
        quizNos: ch.quizNos,
        units: ch.units.map(u => {
          const t = prio.units[u.section + '|' + u.unit] || {};
          return {
            id: u.id,
            section: u.section,
            unit: u.unit,
            chapter: u.chapter,
            title: u.title,
            oneLine: u.oneLine,
            source: u.source,
            cardId: u.cardId,
            minutes: u.minutes,
            difficulty: u.difficulty,
            quizCount: maps.unitToQuiz[u.section + '|' + u.unit] || 0,
            terms: u.terms,
            p: t.p || '',
            pWhy: t.why || ''
          };
        })
      })),
      gaps: {
        missingCards: maps.missingCards,
        unitsWithoutCard: maps.unitsWithoutCard,
        unitsWithoutQuiz: maps.unitsWithoutQuiz,
        cardsWithoutUnit: maps.cardsWithoutUnit
      }
    };

    const indexFile = path.join(DIST_CONTENT, dirKey + '.deep.index.js');
    fs.writeFileSync(indexFile, BANNER + 'window.DEEP=window.DEEP||{};window.DEEP[' + JSON.stringify(dirKey) + ']=' + JSON.stringify(index) + ';\n', 'utf8');

    const chapterFiles = {};
    chapters.forEach(ch => {
      const pkg = {
        dir: dirKey,
        chapter: { id: ch.id, no: ch.no, title: ch.title, name: ch.name, section: ch.section, intro: ch.intro, quizNos: ch.quizNos },
        units: ch.units.map(u => ({
          id: u.id,
          section: u.section,
          unit: u.unit,
          title: u.title,
          oneLine: u.oneLine,
          source: u.source,
          cardId: u.cardId,
          minutes: u.minutes,
          difficulty: u.difficulty,
          body: u.body
        }))
      };
      const file = dirKey + '.deep.' + ch.id + '.js';
      const out = path.join(DIST_CONTENT, file);
      fs.writeFileSync(out, BANNER + 'window.DEEP_PKG=window.DEEP_PKG||{};window.DEEP_PKG[' + JSON.stringify(dirKey + '|' + ch.id) + ']=' + JSON.stringify(pkg) + ';\n', 'utf8');
      chapterFiles[ch.id] = { file: 'dist/content/' + file, bytes: fs.statSync(out).size, sha256: sha256(fs.readFileSync(out)), units: ch.units.length };
    });

    man.dirs[dirKey] = {
      source: 'content/' + dirKey + '/deep.md',
      bytes: buf.length,
      sha256: hash,
      builtAt,
      index: { file: 'dist/content/' + dirKey + '.deep.index.js', bytes: fs.statSync(indexFile).size, sha256: sha256(fs.readFileSync(indexFile)) },
      chapters: chapterFiles
    };

    result.dirs[dirKey] = {
      cardToUnit: maps.cardToUnit,
      unitToCard: maps.unitToCard,
      unitToQuiz: maps.unitToQuiz,
      counts: index.counts,
      gaps: index.gaps
    };

    if (!quiet) printReport(dirKey, index, man.dirs[dirKey], struct);
  });

  fs.writeFileSync(MANIFEST, JSON.stringify(man, null, 2) + '\n', 'utf8');
  return result;
}

function kb(n) { return (n / 1024).toFixed(1) + ' KB'; }

function printReport(dirKey, index, man, struct) {
  console.log('');
  console.log('深读 ' + dirKey + '：' + index.counts.chapters + ' 章 / ' + index.counts.units + ' 单元（cpp ' +
    index.counts.cpp + ' / ue ' + index.counts.ue + '）· 锚点 ' + index.counts.anchors);
  console.log('  源 ' + man.source + ' · ' + kb(index.source.bytes) + ' · sha256 ' + index.source.sha256.slice(0, 12) +
    ' · 索引 ' + kb(man.index.bytes));
  index.chapters.forEach(ch => {
    const info = man.chapters[ch.id];
    console.log('  ' + (ch.id + '   ').slice(0, 5) + String(ch.unitCount).padStart(3) + ' 单元  ' +
      String(kb(info ? info.bytes : 0)).padStart(10) + '  ' + ch.name);
  });

  const g = index.gaps;
  const lines = [];
  if (g.unitsWithoutCard.length) lines.push('单元无速背卡（不显示「看对应速背卡」）：' + g.unitsWithoutCard.join('、'));
  if (g.missingCards.length) lines.push('单元指向了不存在的速背卡：' + g.missingCards.join('；'));
  if (g.unitsWithoutQuiz.length) lines.push('单元暂无检测题（不显示「做本单元题」）：' + g.unitsWithoutQuiz.join('、'));
  if (g.cardsWithoutUnit.length) lines.push('速背卡无深读（不显示「看深读」）：' + g.cardsWithoutUnit.join('、'));
  if (lines.length) {
    console.log('  [映射缺口]');
    lines.forEach(l => console.log('   - ' + l));
  } else {
    console.log('  [映射缺口] 无');
  }

  if (struct) {
    console.log('  [结构校验] ' + (struct.fatal.length ? '失败 ' + struct.fatal.length + ' 项' : '通过') +
      (struct.warns.length ? '，警告 ' + struct.warns.length + ' 项' : ''));
    struct.fatal.forEach(f => console.log('   ✗ ' + f));
    struct.warns.forEach(w => console.log('   ! ' + w));
  }
}

/* ---------------- 校验 / 同步 ---------------- */

function check(only) {
  const man = fs.existsSync(MANIFEST) ? readJson(MANIFEST) : null;
  const problems = [];
  if (!man || !man.dirs) {
    console.error('[deep --check] 缺少 dist/deep.manifest.json，请先运行 node tools/deep.js');
    return { ok: false, problems: ['缺少 manifest'] };
  }
  const keys = Object.keys(man.dirs).filter(k => !only || k === only);
  if (!keys.length) problems.push('manifest 中没有' + (only ? '方向 ' + only : '任何方向'));
  keys.forEach(k => {
    const m = man.dirs[k];
    const srcFile = path.join(ROOT, m.source);
    if (!fs.existsSync(srcFile)) { problems.push(m.source + ' 不存在'); return; }
    const buf = fs.readFileSync(srcFile);
    const hash = sha256(buf);
    if (hash !== m.sha256) problems.push(m.source + ' 已更新但产物未重建（hash 不一致）');
    const idxFile = path.join(ROOT, m.index.file);
    if (!fs.existsSync(idxFile)) problems.push(m.index.file + ' 缺失');
    else if (m.index.sha256 && sha256(fs.readFileSync(idxFile)) !== m.index.sha256) problems.push(m.index.file + ' 内容与 manifest 不一致');
    Object.keys(m.chapters || {}).forEach(ch => {
      const f = m.chapters[ch].file;
      if (!fs.existsSync(path.join(ROOT, f))) { problems.push(f + ' 缺失（章节 ' + ch + '）'); return; }
      if (m.chapters[ch].sha256 && sha256(fs.readFileSync(path.join(ROOT, f))) !== m.chapters[ch].sha256) {
        problems.push(f + ' 内容与 manifest 不一致（章节 ' + ch + '）');
      }
    });
  });
  if (problems.length) {
    console.error('[deep --check] 发现 ' + problems.length + ' 个问题：');
    problems.forEach(p => console.error(' - ' + p));
    console.error('修复：node tools/deep.js');
    return { ok: false, problems };
  }
  keys.forEach(k => console.log('[deep --check] ' + k + ' OK：源文件 hash 与 ' + (man.dirs[k].chapters ? Object.keys(man.dirs[k].chapters).length : 0) + ' 个章节包一致'));
  return { ok: true, problems: [] };
}

function sync(srcPath, dirKey) {
  if (!srcPath) { console.error('用法：node tools/deep.js --sync "<深读.md 路径>" [--dir=ue-cpp]'); process.exit(1); }
  if (!fs.existsSync(srcPath)) { console.error('源文件不存在：' + srcPath); process.exit(1); }
  const key = dirKey || (fs.existsSync(path.join(CONTENT, 'ue-cpp')) ? 'ue-cpp' : '');
  if (!key) { console.error('无法推断方向，请加 --dir=<方向 key>'); process.exit(1); }
  const destDir = path.join(CONTENT, key);
  fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, 'deep.md');
  fs.copyFileSync(srcPath, dest);
  const buf = fs.readFileSync(dest);
  console.log('已复制 ' + srcPath + ' -> content/' + key + '/deep.md（' + kb(buf.length) + '，sha256 ' + sha256(buf).slice(0, 12) + '）');
  return key;
}

function main() {
  const args = process.argv.slice(2);
  const only = (args.find(a => a.startsWith('--dir=')) || '').split('=')[1] || '';
  const syncIdx = args.indexOf('--sync');
  if (args.includes('--check')) {
    const r = check(only);
    process.exit(r.ok ? 0 : 1);
  }
  if (syncIdx >= 0) {
    const key = sync(args[syncIdx + 1], only);
    const r = build({ only: key });
    process.exit(r.ok ? 0 : 1);
  }
  build({ only });
}

if (require.main === module) main();

module.exports = { build, check, parseDeep, buildMaps, MANIFEST };

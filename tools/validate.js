/**
 * 内容源校验：dirs.json / cards.json / quiz.json。
 * 用法：
 *   node tools/validate.js                 校验 content 下的全部默认文件
 *   node tools/validate.js <file> [...]    校验指定文件（按结构自动识别类型）
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DEFAULTS = [
  path.join(ROOT, 'content', 'dirs.json'),
  path.join(ROOT, 'content', 'ue-cpp', 'cards.json'),
  path.join(ROOT, 'content', 'ue-cpp', 'quiz.json')
];

const isStr = v => typeof v === 'string' && v.trim() !== '';
const isInt = v => typeof v === 'number' && Number.isInteger(v);
const KEY_RE = /^[a-z0-9][a-z0-9-]*$/;

function validateDirs(obj) {
  const errs = [];
  if (!isInt(obj.version)) errs.push('version 必须是整数');
  if (!Array.isArray(obj.dirs) || !obj.dirs.length) { errs.push('dirs 必须是非空数组'); return { errs, meta: {} }; }
  const seen = new Set();
  const meta = {};
  obj.dirs.forEach((d, i) => {
    const at = 'dirs[' + i + ']';
    if (!d || typeof d !== 'object') { errs.push(at + ' 不是对象'); return; }
    if (!KEY_RE.test(d.key || '')) errs.push(at + '.key 非法: ' + d.key);
    if (seen.has(d.key)) errs.push(at + '.key 重复: ' + d.key);
    seen.add(d.key);
    if (!isStr(d.title)) errs.push(at + '.title 缺失');
    if (!Array.isArray(d.sections) || !d.sections.length) errs.push(at + '.sections 必须是非空数组');
    const secKeys = new Set();
    (d.sections || []).forEach((s, j) => {
      const sat = at + '.sections[' + j + ']';
      if (!s || typeof s !== 'object') { errs.push(sat + ' 不是对象'); return; }
      if (!KEY_RE.test(s.key || '')) errs.push(sat + '.key 非法: ' + s.key);
      if (secKeys.has(s.key)) errs.push(sat + '.key 重复: ' + s.key);
      secKeys.add(s.key);
      if (!isStr(s.name)) errs.push(sat + '.name 缺失');
      if (s.color !== undefined && !isStr(s.color)) errs.push(sat + '.color 必须是字符串');
      if (s.unitLabel !== undefined && !isStr(s.unitLabel)) errs.push(sat + '.unitLabel 必须是字符串');
      if (s.showUnitNo !== undefined && typeof s.showUnitNo !== 'boolean') errs.push(sat + '.showUnitNo 必须是布尔值');
      ['badgeFrom', 'badgeTo'].forEach(k => {
        if (s[k] !== undefined && !/^#[0-9a-fA-F]{6}$/.test(s[k])) errs.push(sat + '.' + k + ' 必须是 #rrggbb');
      });
    });
    meta[d.key] = { sections: new Set(secKeys) };
  });
  return { errs, meta };
}

function validateCards(obj, dirMeta) {
  const errs = [];
  if (!isStr(obj.dir)) errs.push('dir 缺失');
  if (!Array.isArray(obj.sections) || !obj.sections.length) { errs.push('sections 必须是非空数组'); return errs; }
  const ids = new Set();
  const secKeys = new Set();
  const allowed = dirMeta && dirMeta.sections;
  obj.sections.forEach((s, i) => {
    const sat = 'sections[' + i + ']';
    if (!s || typeof s !== 'object') { errs.push(sat + ' 不是对象'); return; }
    if (!KEY_RE.test(s.key || '')) errs.push(sat + '.key 非法: ' + s.key);
    if (secKeys.has(s.key)) errs.push(sat + '.key 重复: ' + s.key);
    secKeys.add(s.key);
    if (allowed && !allowed.has(s.key)) errs.push(sat + '.key 未在 dirs.json 中声明: ' + s.key);
    if (!isStr(s.name)) errs.push(sat + '.name 缺失');
    if (!Array.isArray(s.groups) || !s.groups.length) { errs.push(sat + '.groups 必须是非空数组'); return; }
    const groupNames = new Set();
    s.groups.forEach((g, j) => {
      const gat = sat + '.groups[' + j + ']';
      if (!g || typeof g !== 'object') { errs.push(gat + ' 不是对象'); return; }
      if (!isStr(g.name)) errs.push(gat + '.name 缺失');
      if (groupNames.has(g.name)) errs.push(gat + '.name 重复: ' + g.name);
      groupNames.add(g.name);
      if (!Array.isArray(g.cards) || !g.cards.length) { errs.push(gat + '.cards 必须是非空数组'); return; }
      const nos = new Set();
      g.cards.forEach((c, k) => {
        const cat = gat + '.cards[' + k + '](' + (c && c.id) + ')';
        if (!c || typeof c !== 'object') { errs.push(cat + ' 不是对象'); return; }
        if (!isStr(c.id)) errs.push(cat + ' id 缺失');
        if (ids.has(c.id)) errs.push(cat + ' id 重复: ' + c.id);
        ids.add(c.id);
        if (!isInt(c.no) || c.no < 1) errs.push(cat + ' no 必须是正整数');
        if (nos.has(c.no)) errs.push(cat + ' no 在本分区重复: ' + c.no);
        nos.add(c.no);
        ['title', 'q', 'answer'].forEach(f => { if (!isStr(c[f])) errs.push(cat + ' ' + f + ' 缺失'); });
        if (!Array.isArray(c.points) || c.points.some(p => typeof p !== 'string')) errs.push(cat + ' points 必须是字符串数组');
        if (!Array.isArray(c.followups) || c.followups.some(p => typeof p !== 'string')) errs.push(cat + ' followups 必须是字符串数组');
        if (typeof c.deep !== 'string') errs.push(cat + ' deep 必须是字符串');
        if (c.required !== undefined && typeof c.required !== 'boolean') errs.push(cat + ' required 必须是布尔值');
        if ('bank' in c || 'group' in c) errs.push(cat + ' 不应包含 bank/group（已由层级表达）');
      });
    });
  });
  return errs;
}

function validateQuiz(obj, dirMeta) {
  const errs = [];
  if (!isStr(obj.dir)) errs.push('dir 缺失');
  if (!Array.isArray(obj.groups) || !obj.groups.length) { errs.push('groups 必须是非空数组'); return errs; }
  if (!Array.isArray(obj.items) || !obj.items.length) { errs.push('items 必须是非空数组'); return errs; }
  const groupMap = new Map();
  const allowed = dirMeta && dirMeta.sections;
  obj.groups.forEach((g, i) => {
    const at = 'groups[' + i + ']';
    if (!g || typeof g !== 'object') { errs.push(at + ' 不是对象'); return; }
    if (!KEY_RE.test(g.key || '')) errs.push(at + '.key 非法: ' + g.key);
    if (groupMap.has(g.key)) errs.push(at + '.key 重复: ' + g.key);
    if (!isStr(g.section)) errs.push(at + '.section 缺失');
    else if (allowed && !allowed.has(g.section)) errs.push(at + '.section 未在 dirs.json 中声明: ' + g.section);
    if (!isStr(g.name)) errs.push(at + '.name 缺失');
    if (!isStr(g.short)) errs.push(at + '.short 缺失');
    if (g.units !== undefined) {
      if (!Array.isArray(g.units) || g.units.length !== 2 || !g.units.every(isInt) || g.units[0] > g.units[1]) {
        errs.push(at + '.units 必须是 [start, end]');
      }
    }
    groupMap.set(g.key, g);
  });

  const ids = new Set();
  const units = new Set();
  obj.items.forEach((it, i) => {
    const at = 'items[' + i + '](' + (it && it.id) + ')';
    if (!it || typeof it !== 'object') { errs.push(at + ' 不是对象'); return; }
    if (!isStr(it.id)) errs.push(at + ' id 缺失');
    if (ids.has(it.id)) errs.push(at + ' id 重复: ' + it.id);
    ids.add(it.id);
    const g = groupMap.get(it.cat);
    if (!g) errs.push(at + ' cat 未定义: ' + it.cat);
    if (!isInt(it.unit) || it.unit < 1) errs.push(at + ' unit 必须是正整数');
    else {
      units.add(it.cat + ':' + it.unit);
      if (g && g.units && (it.unit < g.units[0] || it.unit > g.units[1])) errs.push(at + ' unit 超出分组区间');
    }
    if (!isStr(it.unitTitle)) errs.push(at + ' unitTitle 缺失');
    if (!['single', 'multi', 'fill', 'code'].includes(it.type)) errs.push(at + ' type 非法');
    if (!isInt(it.diff) || it.diff < 1 || it.diff > 3) errs.push(at + ' diff 必须是 1-3');
    if (!isStr(it.q)) errs.push(at + ' q 缺失');
    if (!isStr(it.explain)) errs.push(at + ' explain 缺失');
    if (it.src !== undefined && typeof it.src !== 'string') errs.push(at + ' src 必须是字符串');
    if (it.type === 'single' || it.type === 'multi') {
      if (!Array.isArray(it.options) || it.options.length < 4 || it.options.length > 6) errs.push(at + ' options 需 4-6 项');
      if (!Array.isArray(it.answer) || !it.answer.length) errs.push(at + ' answer 缺失');
      else {
        it.answer.forEach(k => {
          if (!isInt(k) || k < 0 || k >= (it.options || []).length) errs.push(at + ' answer 下标越界');
        });
        if (it.type === 'single' && it.answer.length !== 1) errs.push(at + ' 单选 answer 只能 1 项');
        if (it.type === 'multi' && it.answer.length < 2) errs.push(at + ' 多选 answer 至少 2 项');
      }
    }
    if (it.type === 'fill') {
      if (!/____/.test(it.q || '')) errs.push(at + ' 填空题干必须包含 ____');
      if (!Array.isArray(it.answer) || !it.answer.length || it.answer.some(a => typeof a !== 'string' || !a.trim())) {
        errs.push(at + ' 填空 answer 必须是非空字符串数组');
      }
    }
    if (it.type === 'code' && !isStr(it.ref)) errs.push(at + ' code 题缺少 ref');
  });
  return errs;
}

function kindOf(obj) {
  if (obj && Array.isArray(obj.dirs)) return 'dirs';
  if (obj && Array.isArray(obj.sections)) return 'cards';
  if (obj && Array.isArray(obj.items)) return 'quiz';
  return null;
}

function main() {
  const files = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULTS;
  const parsed = [];
  files.forEach(f => {
    if (!fs.existsSync(f)) { console.error('文件不存在: ' + f); process.exit(1); }
    try { parsed.push({ file: f, obj: JSON.parse(fs.readFileSync(f, 'utf8')) }); }
    catch (e) { console.error(f + ' 解析失败: ' + e.message); process.exit(1); }
  });

  let dirMetaAll = null;
  let failed = false;
  const dirFile = parsed.find(p => kindOf(p.obj) === 'dirs');
  if (dirFile) {
    const r = validateDirs(dirFile.obj);
    if (report(dirFile.file + ' (dirs)', r.errs)) console.log('  ' + dirFile.file + ' (dirs) OK，' + dirFile.obj.dirs.length + ' 个方向');
    else failed = true;
    dirMetaAll = r.meta;
  }

  parsed.forEach(p => {
    const kind = kindOf(p.obj);
    if (kind === 'dirs') return;
    if (!kind) { console.error(p.file + ' 无法识别结构'); failed = true; return; }
    const dirMeta = dirMetaAll && p.obj.dir ? dirMetaAll[p.obj.dir] : null;
    if (dirMetaAll && p.obj.dir && !dirMeta) {
      console.error(p.file + ' 的 dir 未在 dirs.json 中声明: ' + p.obj.dir);
      failed = true;
      return;
    }
    const errs = kind === 'cards' ? validateCards(p.obj, dirMeta) : validateQuiz(p.obj, dirMeta);
    if (!report(p.file + ' (' + kind + ')', errs)) failed = true;
    else {
      const n = kind === 'cards'
        ? p.obj.sections.reduce((a, s) => a + s.groups.reduce((b, g) => b + g.cards.length, 0), 0)
        : p.obj.items.length;
      console.log('  ' + p.file + ' (' + kind + ') OK，' + n + ' 条');
    }
  });
  process.exit(failed ? 1 : 0);
}

function report(label, errs) {
  if (errs.length) {
    console.error(label + ' 发现 ' + errs.length + ' 个问题：');
    errs.forEach(e => console.error(' - ' + e));
    return false;
  }
  return true;
}

if (require.main === module) main();

module.exports = { validateDirs, validateCards, validateQuiz, kindOf };

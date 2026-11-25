/**
 * 面试频次标签（P0 / P1 / P2）读写。
 *
 * 数据源：content/<dir>/priority.json
 *   { "units": { "cpp|1": { "p": "P0", "why": "…" } },
 *     "items": { "d1-001": { "p": "P0", "why": "…" } } }
 * 单元键是 section|unit，题目键是题目 id。
 *
 * 用法：
 *   node tools/priority.js --checklist            生成 content/<dir>/priority-checklist.md
 *   node tools/priority.js --checklist --dir=ue-cpp
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const DIST_CONTENT = path.join(ROOT, 'dist', 'content');
const LEVELS = ['P0', 'P1', 'P2'];

function normalizeEntry(raw, at) {
  if (!raw || typeof raw !== 'object') return { err: at + ' 不是对象' };
  const p = String(raw.p || '').toUpperCase();
  if (LEVELS.indexOf(p) < 0) return { err: at + ' 的 p 必须是 P0/P1/P2，实际是 ' + raw.p };
  const why = typeof raw.why === 'string' ? raw.why.trim() : '';
  if (!why) return { err: at + ' 缺少 why（一句判断理由）' };
  return { p: p, why: why };
}

/** 读取并校验标签；文件缺失或单条非法都写进 errors，不抛异常 */
function load(dirKey) {
  const out = { units: {}, items: {}, errors: [], counts: { P0: 0, P1: 0, P2: 0 }, itemCounts: { P0: 0, P1: 0, P2: 0 } };
  const file = path.join(CONTENT, dirKey, 'priority.json');
  if (!fs.existsSync(file)) return out;
  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    out.errors.push('priority.json 解析失败: ' + e.message);
    return out;
  }
  ['units', 'items'].forEach(kind => {
    const src = raw && raw[kind];
    if (!src || typeof src !== 'object') return;
    Object.keys(src).forEach(key => {
      const r = normalizeEntry(src[key], kind + '.' + key);
      if (r.err) { out.errors.push(r.err); return; }
      out[kind][key] = r;
      (kind === 'units' ? out.counts : out.itemCounts)[r.p]++;
    });
  });
  return out;
}

function label(p) { return p === 'P0' ? 'P0 必看' : p === 'P1' ? 'P1 有余力' : p === 'P2' ? 'P2 可略' : ''; }

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return null; }
}

function readDist(pkg) {
  const file = path.join(DIST_CONTENT, pkg);
  if (!fs.existsSync(file)) return null;
  const g = {};
  try { new Function('window', fs.readFileSync(file, 'utf8'))(g); } catch (e) { return null; }
  return g;
}

/** 生成人工校准清单（单元 + 题目，按章分组） */
function checklist(dirKey) {
  const prio = load(dirKey);
  const deepWin = readDist(dirKey + '.deep.index.js');
  const quizWin = readDist(dirKey + '.quiz.js');
  const index = deepWin && deepWin.DEEP ? deepWin.DEEP[dirKey] : null;
  const quiz = quizWin && quizWin.CONTENT ? quizWin.CONTENT[dirKey].quiz : null;
  if (!index || !quiz) {
    console.error('缺少 dist 产物，请先运行 node tools/build.js');
    return false;
  }
  const catSec = {};
  (quiz.groups || []).forEach(g => { catSec[g.key] = g.section; });

  const lines = [];
  lines.push('# 面试频次初判清单（可人工校准）');
  lines.push('');
  lines.push('> 数据源 `content/' + dirKey + '/priority.json`。改标签请直接改这个 JSON（`p` 取 P0/P1/P2），改完重新构建并跑 `node tools/priority.js --checklist` 刷新本文件。');
  lines.push('> 当前：单元 ' + Object.keys(prio.units).length + ' 条（P0 ' + prio.counts.P0 + ' / P1 ' + prio.counts.P1 + ' / P2 ' + prio.counts.P2 +
    '），题目 ' + Object.keys(prio.items).length + ' 条（P0 ' + prio.itemCounts.P0 + ' / P1 ' + prio.itemCounts.P1 + ' / P2 ' + prio.itemCounts.P2 + '）。');
  lines.push('');

  index.chapters.forEach(ch => {
    lines.push('## 第 ' + ch.no + ' 章 ' + ch.name);
    lines.push('');
    lines.push('| 单元 | 标签 | 理由 |');
    lines.push('| --- | --- | --- |');
    ch.units.forEach(u => {
      const t = prio.units[u.section + '|' + u.unit] || {};
      lines.push('| ' + u.section + '|' + u.unit + ' ' + u.title + ' | ' + (t.p || '—') + ' | ' + (t.why || '未标注') + ' |');
    });
    lines.push('');
    lines.push('| 题号 | 单元 | 题型 | 标签 | 理由 |');
    lines.push('| --- | --- | --- | --- | --- |');
    quiz.items.filter(it => (catSec[it.cat] || it.section) === ch.section && ch.units.some(u => u.unit === it.unit)).forEach(it => {
      const t = prio.items[it.id] || {};
      lines.push('| ' + it.id + ' | ' + it.unit + ' | ' + it.type + ' | ' + (t.p || '—') + ' | ' + (t.why || '未标注') + ' |');
    });
    lines.push('');
  });

  const out = path.join(CONTENT, dirKey, 'priority-checklist.md');
  fs.writeFileSync(out, lines.join('\n'), 'utf8');
  console.log('清单 -> ' + path.relative(ROOT, out) + '（单元 ' + Object.keys(prio.units).length + ' / 题目 ' + Object.keys(prio.items).length + '）');
  if (prio.errors.length) {
    console.error('标签数据有 ' + prio.errors.length + ' 处问题：');
    prio.errors.forEach(e => console.error(' - ' + e));
    return false;
  }
  return true;
}

const api = { load: load, checklist: checklist, LEVELS: LEVELS, label: label };
module.exports = api;

if (require.main === module) {
  const dir = (process.argv.find(a => a.startsWith('--dir=')) || '').split('=')[1] || 'ue-cpp';
  if (process.argv.indexOf('--checklist') >= 0) process.exit(checklist(dir) ? 0 : 1);
  const p = load(dir);
  console.log(dir, '单元', JSON.stringify(p.counts), '题目', JSON.stringify(p.itemCounts), '错误', p.errors.length);
  process.exit(p.errors.length ? 1 : 0);
}

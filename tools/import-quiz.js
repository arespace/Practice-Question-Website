/**
 * 原始分片合并：把 content/ue-cpp/parts/part*.json 合并为 content/ue-cpp/quiz.json。
 * 规则沿用旧合并脚本（分类、单元、src 锚点、每单元 3 题）。
 * 日常改题请直接编辑 quiz.json；只有重新拆分/重排时才需要跑这个脚本。
 *
 * 用法：node tools/import-quiz.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PARTS = path.join(ROOT, 'content', 'ue-cpp', 'parts');
const OUT = path.join(ROOT, 'content', 'ue-cpp', 'quiz.json');

const GROUPS = [
  { key: 'd1', name: 'D1 · 语言基础①：类型、值与参数传递', short: 'D1 基础①', section: 'cpp', units: [1, 13] },
  { key: 'd2', name: 'D2 · 语言基础②：关键字、转换与命名空间', short: 'D2 基础②', section: 'cpp', units: [14, 26] },
  { key: 'd3', name: 'D3 · 内存与生命周期', short: 'D3 内存', section: 'cpp', units: [27, 40] },
  { key: 'd4', name: 'D4 · 面向对象与对象模型', short: 'D4 面向对象', section: 'cpp', units: [41, 49] },
  { key: 'd5', name: 'D5 · 模板、STL 与并发', short: 'D5 模板/STL', section: 'cpp', units: [50, 54] },
  { key: 'ue1', name: 'UE① · UObject 与 GC', short: 'UE① GC', section: 'ue', units: [1, 8] },
  { key: 'ue2', name: 'UE② · 反射系统', short: 'UE② 反射', section: 'ue', units: [9, 14] },
  { key: 'ue3', name: 'UE③ · 引用类型与智能指针', short: 'UE③ 智能指针', section: 'ue', units: [15, 21] },
  { key: 'ue4', name: 'UE④ · Actor 与 Component 生命周期', short: 'UE④ 生命周期', section: 'ue', units: [22, 28] },
  { key: 'ue5', name: 'UE⑤ · 蓝图与 C++ 互调', short: 'UE⑤ 蓝图互调', section: 'ue', units: [29, 34] },
  { key: 'ue6', name: 'UE⑥ · 委托', short: 'UE⑥ 委托', section: 'ue', units: [35, 40] },
  { key: 'ue7', name: 'UE⑦ · 网络同步', short: 'UE⑦ 网络', section: 'ue', units: [41, 48] },
  { key: 'ue8', name: 'UE⑧ · 性能与内存', short: 'UE⑧ 性能', section: 'ue', units: [49, 55] },
  { key: 'ue9', name: 'UE⑨ · 工程与构建', short: 'UE⑨ 构建', section: 'ue', units: [56, 62] },
  { key: 'ue10', name: 'UE⑩ · 高频踩坑', short: 'UE⑩ 踩坑', section: 'ue', units: [63, 68] }
];

const ERR = [];
const items = [];
const ids = new Set();

const FILES = [];
for (let p = 1; p <= 9; p++) {
  FILES.push('part' + p + '.json');
  FILES.push('part' + p + '-extra.json');
}

FILES.forEach(name => {
  const file = path.join(PARTS, name);
  const tag = name.replace(/\.json$/, '');
  if (!fs.existsSync(file)) { ERR.push('缺少文件 ' + name); return; }
  let arr;
  try { arr = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { ERR.push(tag + ' JSON 解析失败: ' + e.message); return; }
  if (!Array.isArray(arr)) { ERR.push(tag + ' 顶层不是数组'); return; }
  arr.forEach((it, i) => {
    const at = tag + '#' + i + '(' + (it && it.id) + ')';
    if (!it || typeof it !== 'object') { ERR.push(at + ' 不是对象'); return; }
    ['id', 'cat', 'unit', 'unitTitle', 'type', 'q', 'explain'].forEach(k => {
      if (it[k] === undefined || it[k] === null || it[k] === '') ERR.push(at + ' 缺少 ' + k);
    });
    if (!['single', 'multi', 'fill', 'code'].includes(it.type)) ERR.push(at + ' type 非法');
    if (typeof it.diff !== 'number' || it.diff < 1 || it.diff > 3) it.diff = 2;
    if (ids.has(it.id)) ERR.push(at + ' id 重复');
    ids.add(it.id);
    if (it.type === 'single' || it.type === 'multi') {
      if (!Array.isArray(it.options) || it.options.length < 4) ERR.push(at + ' options 不足 4 项');
      if (!Array.isArray(it.answer) || !it.answer.length) ERR.push(at + ' answer 缺失');
      else it.answer.forEach(k => {
        if (typeof k !== 'number' || k < 0 || k >= (it.options || []).length) ERR.push(at + ' answer 下标越界');
      });
    }
    if (it.type === 'fill') {
      if (!/____/.test(it.q || '')) ERR.push(at + ' 填空题缺少 ____');
      if (!Array.isArray(it.answer) || !it.answer.length) ERR.push(at + ' 填空 answer 缺失');
    }
    if (it.type === 'code' && (!it.ref || !String(it.ref).trim())) ERR.push(at + ' code 题缺 ref');
    const meta = GROUPS.find(g => g.key === it.cat);
    if (!meta) ERR.push(at + ' 未知分类 ' + it.cat);
    else it.src = meta.section === 'ue'
      ? '深读.md#ue-unit-' + String(it.unit).padStart(2, '0')
      : '深读.md#unit-' + it.unit;
    items.push(it);
  });
});

// 覆盖率：每单元固定 3 题，且至少 1 道编程 / 代码阅读题
const coverage = [];
GROUPS.forEach(g => {
  for (let u = g.units[0]; u <= g.units[1]; u++) {
    const group = items.filter(it => it.cat === g.key && it.unit === u);
    if (group.length !== 3) coverage.push(g.key + ' 单元 ' + u + ' 有 ' + group.length + ' 题');
    if (!group.some(it => it.type === 'code')) coverage.push(g.key + ' 单元 ' + u + ' 缺编程题');
  }
});
if (coverage.length) ERR.push('覆盖问题: ' + coverage.join('; '));

const order = {};
GROUPS.forEach((g, i) => { order[g.key] = i; });
const tOrder = { single: 0, multi: 1, fill: 2, code: 3 };
items.sort((a, b) => (order[a.cat] - order[b.cat]) || (a.unit - b.unit) || (tOrder[a.type] - tOrder[b.type]));

if (ERR.length) {
  console.error('发现 ' + ERR.length + ' 个问题：');
  ERR.forEach(e => console.error(' - ' + e));
  process.exit(1);
}

const out = {
  dir: 'ue-cpp',
  source: '由 content/ue-cpp/parts/part1..9 合并导入',
  groups: GROUPS.map(g => ({ key: g.key, section: g.section, name: g.name, short: g.short, units: g.units })),
  items
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n', 'utf8');

const byType = { single: 0, multi: 0, fill: 0, code: 0 };
items.forEach(it => byType[it.type]++);
console.log('OK dir=' + out.dir + ' groups=' + out.groups.length + ' items=' + items.length);
console.log('types=' + JSON.stringify(byType));
console.log('-> ' + path.relative(ROOT, OUT));

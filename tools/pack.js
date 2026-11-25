/**
 * 发布打包：把站点运行所需的静态文件按清单复制到 build/site/，再做源/产物比对。
 * 用法：
 *   node tools/pack.js          只生成 build/site
 *   node tools/pack.js --zip    额外打成 build/ue-cpp-quiz.zip（调用 PowerShell Compress-Archive）
 *
 * 设计要点：
 * - 显式白名单，只带运行必需的文件，避免把 content/parts、tools、旧产物一起发布出去。
 * - 每次先清空 build/site，防止删掉的旧文件残留在发布包里。
 * - 逐文件打印字节数 / mtime / sha256 前 10 位，并校验复制后哈希与源一致。
 * - 同时检查 dist 是否比 content 旧（陈旧产物警告），避免发了旧内容。
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'build', 'site');
const ZIP = path.join(ROOT, 'build', 'ue-cpp-quiz.zip');

const FILES = [
  'index.html',
  'quiz.html',
  'deep.html',
  'styles.css',
  'quiz.css',
  'deep.css',
  'app.js',
  'quiz.js',
  'deep.js',
  'markdown.js',
  'store.js',
  'srs.js',
  'boot.js'
];

const sha = buf => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 10);
const mt = f => {
  const d = fs.statSync(f);
  return d.mtime.toISOString().replace('T', ' ').slice(0, 19);
};

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function copyFile(rel) {
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) {
    console.error('缺失文件：' + rel);
    process.exitCode = 1;
    return null;
  }
  const dst = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  const buf = fs.readFileSync(src);
  fs.writeFileSync(dst, buf);
  const srcHash = sha(buf);
  const dstHash = sha(fs.readFileSync(dst));
  const ok = srcHash === dstHash;
  if (!ok) {
    console.error('复制校验失败：' + rel);
    process.exitCode = 1;
  }
  return { rel, size: buf.length, mtime: mt(src), hash: srcHash, ok };
}

function copyDist() {
  const dist = path.join(ROOT, 'dist');
  if (!fs.existsSync(dist)) {
    console.error('缺少 dist/，请先运行 node tools/build.js');
    process.exitCode = 1;
    return [];
  }
  const rows = [];
  (function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) return walk(full);
      rows.push(copyFile(path.relative(ROOT, full).replace(/\\/g, '/')));
    });
  })(dist);
  return rows.filter(Boolean);
}

// dist 是否比 content 旧：比较 dist/content/*.js 与 content/<dir>/*.json 的最大 mtime
function staleWarnings() {
  const warns = [];
  const distContent = path.join(ROOT, 'dist', 'content');
  if (!fs.existsSync(distContent)) return warns;
  fs.readdirSync(distContent).filter(f => /\.(cards|quiz)\.js$/.test(f)).forEach(f => {
    const out = path.join(distContent, f);
    const key = f.replace(/\.(cards|quiz)\.js$/, '');
    const kind = f.indexOf('.cards.js') >= 0 ? 'cards' : 'quiz';
    const src = path.join(ROOT, 'content', key, kind + '.json');
    if (!fs.existsSync(src)) return;
    if (fs.statSync(out).mtimeMs < fs.statSync(src).mtimeMs) {
      warns.push('dist/content/' + f + ' 比 content/' + key + '/' + kind + '.json 旧，建议先 node tools/build.js');
    }
  });

  // 深读：索引是否比 content/<dir>/deep.md 旧
  fs.readdirSync(distContent).filter(f => /\.deep\.index\.js$/.test(f)).forEach(f => {
    const key = f.replace(/\.deep\.index\.js$/, '');
    const src = path.join(ROOT, 'content', key, 'deep.md');
    if (!fs.existsSync(src)) return;
    if (fs.statSync(path.join(distContent, f)).mtimeMs < fs.statSync(src).mtimeMs) {
      warns.push('dist/content/' + f + ' 比 content/' + key + '/deep.md 旧，建议先 node tools/deep.js');
    }
  });
  return warns;
}

function pad(s, n) {
  s = String(s);
  // 中文按 2 显示宽度计算
  const w = [...s].reduce((a, c) => a + (c.charCodeAt(0) > 255 ? 2 : 1), 0);
  return s + ' '.repeat(Math.max(0, n - w));
}

/* ---------- 主流程 ---------- */
rmrf(OUT);
fs.mkdirSync(OUT, { recursive: true });

const rows = FILES.map(copyFile).filter(Boolean).concat(copyDist());

let total = 0;
console.log(pad('文件', 30) + pad('字节', 10) + pad('mtime', 21) + 'sha256');
console.log('-'.repeat(78));
rows.forEach(r => {
  total += r.size;
  console.log(pad(r.rel, 30) + pad(r.size, 10) + pad(r.mtime, 21) + r.hash + (r.ok ? '' : '  ✗'));
});
console.log('-'.repeat(78));
console.log('共 ' + rows.length + ' 个文件，' + (total / 1024).toFixed(1) + ' KB → ' + path.relative(ROOT, OUT));
console.log('产物清单与源文件哈希一致：' + (process.exitCode ? '否' : '是'));

const warns = staleWarnings();
if (warns.length) {
  console.log('\n[警告]');
  warns.forEach(w => console.log(' - ' + w));
}

if (process.argv.includes('--zip')) {
  rmrf(ZIP);
  try {
    execFileSync('powershell', [
      '-NoProfile', '-NonInteractive', '-Command',
      'Compress-Archive -Path "' + path.join(OUT, '*') + '" -DestinationPath "' + ZIP + '" -Force'
    ], { stdio: 'inherit' });
    console.log('ZIP → ' + path.relative(ROOT, ZIP) + '（' + (fs.statSync(ZIP).size / 1024).toFixed(1) + ' KB）');
  } catch (e) {
    console.error('打包 zip 失败：' + e.message);
    process.exitCode = 1;
  }
}

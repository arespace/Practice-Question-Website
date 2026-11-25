/**
 * 一键 release：build → pack（资源版本自动注入）→ 回归 → git tag → push。
 * 线上部署保持手动，本脚本不会调用任何部署命令。
 * 用法：node tools/release.js  [--skip-test]
 */
const fs = require('fs');
const path = require('path');
const { execSync, execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const skipTest = process.argv.includes('--skip-test');

function run(label, cmd) {
  console.log('\n▶ ' + label + '\n  $ ' + cmd);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
}
function git(cmd) {
  return execFileSync('git', cmd.split(' '), { cwd: ROOT }).toString().trim();
}

run('构建内容', 'node tools/build.js');
run('打包产物（含资源版本注入）', 'node tools/pack.js --zip');

const meta = JSON.parse(fs.readFileSync(path.join(ROOT, 'build', 'site', 'version.json'), 'utf8'));
const id = meta.buildId;
const tag = 'deploy-' + id;

if (!skipTest) run('浏览器回归', process.platform === 'win32' ? 'npx.cmd playwright test' : 'npx playwright test');

const dirty = git('status --porcelain');
if (dirty) {
  run('提交源码改动', `git add -A`);
  run('提交', `git commit -m "chore(release): ${id}"`);
} else {
  console.log('\n▶ 无源码改动，跳过提交');
}

const exists = git(`tag -l ${tag}`);
if (exists) {
  console.log('\n▶ tag 已存在：' + tag + '（跳过创建）');
} else {
  run('打 tag', `git tag -a ${tag} -m "release ${id} / ${meta.files} files / ${(meta.bytes / 1024).toFixed(1)} KB"`);
}

run('推送 main', 'git push origin main');
if (!exists) run('推送 tag', `git push origin ${tag}`);

console.log('\n────────────────────────────────────────');
console.log('release 完成');
console.log('  buildId : ' + id);
console.log('  tag     : ' + tag);
console.log('  产物     : build/site（' + meta.files + ' 个文件，' + (meta.bytes / 1024).toFixed(1) + ' KB）');
console.log('  部署     : 未执行（按约定手动）：');
console.log('             trae-deploy deployments create … --type static-web（源目录 build/site/public）');

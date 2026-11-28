/**
 * 静态站点发布（覆盖现有站点）+ 线上核验。
 *
 * 依赖 Trae 部署 CLI（trae-deploy.exe）：
 * - 优先用环境变量 TRAE_DEPLOY_BIN 指定的路径；
 * - 否则自动在 %USERPROFILE%\.trae-cn\plugins\trae-remote-official\deployment\<版本>\skills\deployment\bin\win32-x64\ 下找最新版本。
 *
 * 运行时上下文（project / session）优先取环境变量；缺失时读 tools/deploy.local.json：
 *   { "projectId": "…", "sessionId": "…" }
 * 该文件属本地配置，已在 .gitignore 中忽略。
 *
 * 用法：
 *   node tools/deploy.js            发布 build/site 到现有站点（覆盖），再核验
 *   node tools/deploy.js --verify   只做核验（不发布），用于排查线上版本
 *
 * 由 tools/release.js --deploy 调用时执行完整发布 + 核验。
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'build', 'site');
const LOCAL_CONFIG = path.join(__dirname, 'deploy.local.json');

const SITE_ID = '37luuom4s2dc5un2j4s';
const HOST = 'https://37luuom4s2dc5un2j4s.traesite.cn';
const PAGES = ['index.html', 'quiz.html', 'deep.html'];
const APP_TAGS = '101,289';

/* ---------------- CLI 定位与调用 ---------------- */

function findCli() {
  if (process.env.TRAE_DEPLOY_BIN) {
    if (!fs.existsSync(process.env.TRAE_DEPLOY_BIN)) {
      throw new Error('TRAE_DEPLOY_BIN 指向的文件不存在：' + process.env.TRAE_DEPLOY_BIN);
    }
    return process.env.TRAE_DEPLOY_BIN;
  }
  const base = path.join(os.homedir(), '.trae-cn', 'plugins', 'trae-remote-official', 'deployment');
  if (!fs.existsSync(base)) throw new Error('未找到部署插件目录：' + base);
  const versions = fs.readdirSync(base)
    .filter(v => /^\d+\.\d+\.\d+$/.test(v))
    .sort((a, b) => {
      const pa = a.split('.').map(Number), pb = b.split('.').map(Number);
      for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pb[i] - pa[i];
      return 0;
    });
  for (const v of versions) {
    const p = path.join(base, v, 'skills', 'deployment', 'bin', 'win32-x64', 'trae-deploy.exe');
    if (fs.existsSync(p)) return p;
  }
  throw new Error('部署插件目录下没有找到 trae-deploy.exe');
}

function runtimeEnv() {
  let cfg = {};
  if (fs.existsSync(LOCAL_CONFIG)) {
    try { cfg = JSON.parse(fs.readFileSync(LOCAL_CONFIG, 'utf8')); } catch (e) {
      throw new Error('tools/deploy.local.json 不是合法 JSON：' + e.message);
    }
  }
  const projectId = process.env.TRAE_PROJECT_ID || cfg.projectId;
  const sessionId = process.env.TRAE_CHAT_SESSION_ID || cfg.sessionId;
  if (!projectId || !sessionId) {
    throw new Error([
      '缺少部署运行时上下文（TRAE_PROJECT_ID / TRAE_CHAT_SESSION_ID）。',
      '可在 Trae 会话内运行，或创建 tools/deploy.local.json：',
      '  { "projectId": "<项目id>", "sessionId": "<任意会话id>" }'
    ].join('\n'));
  }
  return { TRAE_PROJECT_ID: projectId, TRAE_CHAT_SESSION_ID: sessionId };
}

function runCli(cli, args, env) {
  let stdout;
  try {
    stdout = execFileSync(cli, args, {
      encoding: 'utf8',
      env: Object.assign({}, process.env, env),
      maxBuffer: 32 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'pipe']
    });
  } catch (e) {
    const out = (e.stdout || '') + (e.stderr || '');
    const parsed = tryParseJson(out);
    const err = parsed && parsed.error ? parsed.error : null;
    throw new Error('部署 CLI 失败：' + args.slice(0, 2).join(' ') +
      (err ? ' → ' + err.code + '：' + err.message : ' → ' + (out.trim() || e.message)));
  }
  const parsed = tryParseJson(stdout);
  if (!parsed) throw new Error('部署 CLI 返回无法解析：' + stdout.slice(0, 300));
  if (parsed.ok === false) {
    throw new Error('部署 CLI 失败：' + (parsed.error ? parsed.error.code + '：' + parsed.error.message : '未知错误'));
  }
  return parsed;
}

function tryParseJson(text) {
  const lines = String(text || '').split(/\r?\n/).filter(Boolean);
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (!line.startsWith('{')) continue;
    try { return JSON.parse(line); } catch (e) { /* 继续向上找 */ }
  }
  return null;
}

/* ---------------- 发布前检查 ---------------- */

function preflight(cli, env) {
  const check = runCli(cli, ['check'], env);
  if (check.data.status !== 'ok') throw new Error('部署运行环境检查未通过：' + JSON.stringify(check.data));
  console.log('  运行环境：ok（credential=' + check.data.credential_type + '，user_scope=' + check.data.user_scope + '）');

  let site = runCli(cli, ['sites', 'get', '--site-id', SITE_ID], env).data;
  if (site.access_policy !== 2) {
    console.log('  站点可见性不是 public，正在切回：' + site.access_policy);
    runCli(cli, ['sites', 'update-config', '--site-id', SITE_ID, '--access-policy', 'public'], env);
    site = runCli(cli, ['sites', 'get', '--site-id', SITE_ID], env).data;
    if (site.access_policy !== 2) throw new Error('切换为 public 失败，当前 access_policy=' + site.access_policy);
  }
  console.log('  站点：' + site.deploy_target_id + '（' + site.site_config.hostname + '，所有人可见）');

  const cur = site.current_deployment;
  if (cur && !cur.ended_at) {
    throw new Error('站点存在进行中的部署（' + cur.deployment_id + '，status=' + cur.status + '），请等待或取消后再发布');
  }
  return site;
}

/* ---------------- 准备上传目录 ---------------- */

function prepareSource() {
  if (!fs.existsSync(path.join(OUT, 'index.html'))) {
    throw new Error('缺少 build/site/index.html，请先运行 node tools/pack.js');
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'trae-deploy-'));
  // 平台源码预检限制嵌套压缩包数量（>3 个 .gz 会报 SOURCE_ARTIFACT_PRECHECK_FAILED），
  // 因此上传时跳过预压缩包；页面会由 loader.js 自动回退到普通 .js。
  let skipped = 0;
  fs.cpSync(OUT, path.join(dir, 'public'), {
    recursive: true,
    filter: (src) => {
      if (!src.endsWith('.gz')) return true;
      skipped++;
      return false;
    }
  });
  if (skipped) console.log('  跳过 ' + skipped + ' 个 .gz 预压缩包（平台限制：嵌套压缩包最多 3 个），页面将回退到普通 .js');
  const configPath = path.join(dir, 'execution-config.json');
  fs.writeFileSync(configPath, '{}\n');
  return {
    dir,
    configPath,
    cleanup() { try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {} }
  };
}

/* ---------------- 线上核验 ---------------- */

async function fetchText(url) {
  const res = await fetch(url, { cache: 'no-store' });
  return { ok: res.ok, status: res.status, text: await res.text() };
}

async function verifyLive(buildId) {
  const expected = buildId || readLocalBuildId();
  let last = '';
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      const v = await fetchText(HOST + '/version.json?t=' + Date.now());
      if (!v.ok) throw new Error('version.json HTTP ' + v.status);
      const meta = JSON.parse(v.text);
      if (meta.buildId !== expected) throw new Error('version.json buildId=' + meta.buildId + '，期望 ' + expected);

      for (const page of PAGES) {
        const r = await fetchText(HOST + '/' + page + '?t=' + Date.now());
        if (!r.ok) throw new Error(page + ' HTTP ' + r.status);
        if (!r.text.includes('content="' + expected + '"')) throw new Error(page + ' 的 build-id 与本地不一致');
      }
      console.log('  线上核验通过：' + PAGES.join(' / ') + ' 可访问，build-id=' + expected + ' 与本地一致');
      return { buildId: expected };
    } catch (e) {
      last = e.message;
      if (attempt < 8) {
        console.log('  等待 CDN 生效（' + attempt + '/8）：' + e.message);
        await new Promise(r => setTimeout(r, 3000));
      }
    }
  }
  throw new Error('线上核验失败：' + last);
}

function readLocalBuildId() {
  const p = path.join(OUT, 'version.json');
  if (!fs.existsSync(p)) throw new Error('缺少 build/site/version.json，请先运行 node tools/pack.js');
  return JSON.parse(fs.readFileSync(p, 'utf8')).buildId;
}

/* ---------------- 主流程 ---------------- */

async function deployAndVerify(args) {
  const opts = args || {};
  const buildId = opts.buildId || readLocalBuildId();
  const cli = findCli();
  const env = runtimeEnv();

  console.log('\n▶ 发布前检查');
  preflight(cli, env);

  console.log('\n▶ 上传 build/site（' + buildId + '）');
  const src = prepareSource();
  let result;
  try {
    const created = runCli(cli, [
      'deployments', 'create',
      '--site-id', SITE_ID,
      '--title', 'Release ' + buildId,
      '--description', 'Static site from d:/work/Interview/ue-cpp-quiz/build/site, build ' + buildId +
        '. Publishes index.html flashcards, quiz.html question bank and deep.html deep reading; public access preserved.',
      '--type', 'static-web',
      '--source-dir', src.dir,
      '--execution-config', src.configPath,
      '--app-tags', APP_TAGS
    ], env);
    const depId = created.data.deployment_id;
    console.log('  已创建部署：' + depId);

    let dep = null;
    for (let i = 0; i < 10; i++) {
      const waited = runCli(cli, ['deployments', 'wait', '--deployment-id', depId], env);
      dep = waited.data.deployment;
      if (waited.data.wait_reason === 'terminal') break;
      await new Promise(r => setTimeout(r, 3000));
    }
    if (!dep || dep.status !== 9) {
      throw new Error('部署未成功：status=' + (dep ? dep.status : 'unknown') +
        (dep && dep.failure ? '，' + JSON.stringify(dep.failure) : ''));
    }
    console.log('  部署完成：' + depId + '（status=9）');

    console.log('\n▶ 线上核验');
    const verified = await verifyLive(buildId);
    result = { deploymentId: depId, buildId: verified.buildId, url: HOST };
    console.log('\n发布成功：' + HOST + '（deployment ' + depId + '，build ' + buildId + '，所有人可见）');
    return result;
  } finally {
    src.cleanup();
  }
}

module.exports = { deployAndVerify, verifyLive, preflight, findCli, runtimeEnv, SITE_ID, HOST };

if (require.main === module) {
  const verifyOnly = process.argv.includes('--verify');
  const task = verifyOnly
    ? (async () => {
        console.log('▶ 只做核验（不发布）：' + HOST);
        const id = await verifyLive();
        console.log('核验通过：build-id=' + id.buildId);
      })()
    : deployAndVerify();
  task.catch(e => {
    console.error('\n[失败] ' + e.message);
    process.exitCode = 1;
  });
}

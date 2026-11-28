/* 用例运行器（classic worker）
 *
 * 在浏览器内用 clang-wasm 把用户代码编译成 WASM，接 WASI 运行时执行，
 * 支持 stdin/stdout。只在本文件里做「编译 + 链接 + 运行」，主线程用
 * RunKit 负责超时与重建 Worker，避免死循环卡死页面。
 */
importScripts('https://unpkg.com/@live-codes/clang-wasm@0.3.0/dist/clang-wasm.global.js');

const CDNS = [
  'https://unpkg.com/@live-codes/clang-wasm@0.3.0/',
  'https://fastly.jsdelivr.net/npm/@live-codes/clang-wasm@0.3.0/',
  'https://gcore.jsdelivr.net/npm/@live-codes/clang-wasm@0.3.0/'
];

let compiler = null;
let loading = null;

function load() {
  if (compiler) return Promise.resolve(compiler);
  if (loading) return loading;
  loading = (async () => {
    let last = null;
    for (const base of CDNS) {
      try {
        const c = await self.clangWasm.createCompiler('cpp', { baseUrl: base + 'assets/' });
        return c;
      } catch (e) { last = e; }
    }
    throw last || new Error('CDN 不可达');
  })();
  loading.then(c => { compiler = c; }, () => {});
  return loading;
}

self.onmessage = async e => {
  const m = e.data || {};
  if (m.type !== 'run') return;
  const started = performance.now();
  try {
    const c = await load();
    if (!compiler) compiler = c;
    const loaded = !!m.wasLoaded;
    const tLoad = performance.now() - started;
    const t0 = performance.now();
    const r = await c.run(String(m.code || ''), String(m.stdin || ''));
    const runMs = Math.round(performance.now() - t0);
    self.postMessage({
      type: 'result',
      id: m.id,
      ok: true,
      loadMs: loaded ? 0 : Math.round(tLoad),
      runMs,
      stdout: String(r.stdout || ''),
      stderr: String(r.stderr || ''),
      exitCode: typeof r.exitCode === 'number' ? r.exitCode : null,
      errors: (r.errors || []).slice(0, 8)
    });
  } catch (err) {
    self.postMessage({
      type: 'result',
      id: m.id,
      ok: false,
      message: String((err && err.message) || err).slice(0, 400)
    });
  }
};

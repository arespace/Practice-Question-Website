/**
 * RunKit：主线程侧的「编译 + 运行」封装。
 *
 * - 所有请求串行执行（同一个 Worker，避免并发抢内存）；
 * - 首次要加载约 28 MB 的 clang-wasm 资产，给 120 秒；加载完成后的单次
 *   运行（含编译链接）默认 8 秒，超时就 terminate Worker 并提示；
 * - Worker 被终止后自动重建，下次运行会重新加载（CLI 里有说明）。
 */
(function () {
  'use strict';

  const LOAD_TIMEOUT = 120000;
  const RUN_TIMEOUT = 8000;

  let worker = null;
  let seq = 0;
  let loaded = false;
  let chain = Promise.resolve();
  let lastLoadMs = 0;

  function ensure() {
    if (worker) return worker;
    worker = new Worker('runner.js');
    return worker;
  }

  function drop() {
    if (worker) {
      try { worker.terminate(); } catch (e) { /* ignore */ }
      worker = null;
    }
    loaded = false;
  }

  function exec(opts) {
    return new Promise(resolve => {
      const w = ensure();
      const id = ++seq;
      const t0 = performance.now();
      const limit = loaded ? (opts.timeoutMs || RUN_TIMEOUT) : LOAD_TIMEOUT;
      let done = false;

      const finish = res => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        if (worker === w) {
          w.onmessage = null;
          w.onerror = null;
        }
        resolve(res);
      };

      const timer = setTimeout(() => {
        drop();
        finish({ ok: false, timeout: true, ms: Math.round(performance.now() - t0) });
      }, limit);

      w.onmessage = e => {
        const d = e.data || {};
        if (d.type !== 'result' || d.id !== id) return;
        if (d.ok && d.loadMs) lastLoadMs = d.loadMs;
        loaded = true;
        finish(Object.assign({ ms: Math.round(performance.now() - t0) }, d));
      };
      w.onerror = () => {
        drop();
        finish({ ok: false, message: '运行器加载失败（CDN 不可达或被浏览器拦截）', ms: Math.round(performance.now() - t0) });
      };
      w.postMessage({ type: 'run', id: id, code: String(opts.code || ''), stdin: String(opts.stdin || ''), wasLoaded: loaded });
    });
  }

  window.RunKit = {
    supported: () => typeof Worker !== 'undefined' && typeof WebAssembly !== 'undefined',
    isLoaded: () => loaded,
    lastLoadMs: () => lastLoadMs,
    run(opts) {
      const p = chain.then(() => exec(opts));
      chain = p.then(() => {}, () => {});
      return p;
    },
    reset: drop
  };
})();

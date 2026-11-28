/**
 * 算法练习页：按专题分组展示题目，支持专题 / 掌握状态 / 必默写筛选，
 * 并且每道题都能进入「白板默写」：只给题面 → 计时手写 → 交卷后逐行对照 +
 * 结构检查（文本规则）+ 可选的 WASM clang 真编译（只查语法/类型错误）。
 *
 * 存储沿用 quiz:v3 的 dir.algo：{ [id]: { mark: 'ok'|'meh', ts } }，旧数据缺字段按空处理。
 */
(function () {
  'use strict';

  function start(ctx) {
    const DIR = ctx.dir;
    const META = ctx.meta || { counts: {} };
    const DATA = ctx.data || {};
    const TOPICS = Array.isArray(DATA.topics) ? DATA.topics : [];
    const ITEMS = Array.isArray(DATA.items) ? DATA.items : [];
    const TOPIC_MAP = {};
    TOPICS.forEach(t => { TOPIC_MAP[t.key] = t; });
    const BY_ID = {};
    ITEMS.forEach(it => { BY_ID[it.id] = it; });

    const $ = id => document.getElementById(id);
    const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    let store = Store.dir(DIR);
    const save = () => Store.save();

    const state = {
      view: 'list',
      topic: 'all',
      mark: 'all',
      must: 'all',
      search: '',
      cur: null
    };

    /* ---------------- 掌握状态 ---------------- */
    function algoDict() {
      if (!store.algo || typeof store.algo !== 'object' || Array.isArray(store.algo)) store.algo = {};
      return store.algo;
    }
    function markOf(id) {
      const m = algoDict()[id];
      return m && (m.mark === 'ok' || m.mark === 'meh') ? m.mark : '';
    }
    function setMark(id, mark) {
      const d = algoDict();
      if (!mark) delete d[id];
      else d[id] = { mark: mark, ts: Date.now() };
      save();
    }
    const MARK_NAME = { ok: '已掌握', meh: '待加强', '': '未练' };

    /* ---------------- 顶部导航 / 侧栏 ---------------- */
    function toast(msg) {
      const el = $('toast');
      if (!el) return;
      el.textContent = msg;
      el.classList.add('show');
      clearTimeout(toast.t);
      toast.t = setTimeout(() => el.classList.remove('show'), 1800);
    }

    function counts() {
      const c = { ok: 0, meh: 0, none: 0 };
      ITEMS.forEach(it => {
        const m = markOf(it.id);
        if (m === 'ok') c.ok++;
        else if (m === 'meh') c.meh++;
        else c.none++;
      });
      return c;
    }

    function paintStats() {
      const c = counts();
      const done = c.ok;
      if ($('algoDone')) $('algoDone').textContent = String(done);
      if ($('algoTodo')) $('algoTodo').textContent = String(ITEMS.length - done);
      if ($('algoProgressText')) $('algoProgressText').textContent = done + ' / ' + ITEMS.length;
      if ($('algoProgressBar')) $('algoProgressBar').style.width = (ITEMS.length ? done / ITEMS.length * 100 : 0) + '%';
      if ($('legendOk')) $('legendOk').textContent = String(c.ok);
      if ($('legendMeh')) $('legendMeh').textContent = String(c.meh);
      if ($('legendNone')) $('legendNone').textContent = String(c.none);
    }

    function paintTopics() {
      const host = $('algoTopics');
      if (!host) return;
      const all = ['<button class="cat-item' + (state.topic === 'all' ? ' active' : '') + '" data-topic="all">' +
        '<span class="cat-name">全部题目</span><span class="cat-num">' + ITEMS.length + '</span></button>'];
      TOPICS.forEach(t => {
        const n = ITEMS.filter(i => i.topic === t.key).length;
        all.push('<button class="cat-item' + (state.topic === t.key ? ' active' : '') + '" data-topic="' + esc(t.key) + '">' +
          '<span class="cat-name">' + esc(t.name) + '</span><span class="cat-num">' + n + '</span></button>');
      });
      host.innerHTML = all.join('');
    }

    function syncChips() {
      document.querySelectorAll('#markFilter .chip').forEach(b => b.classList.toggle('active', b.dataset.mark === state.mark));
      document.querySelectorAll('#mustFilter .chip').forEach(b => b.classList.toggle('active', b.dataset.must === state.must));
      document.querySelectorAll('#algoNav button').forEach(b => b.classList.toggle('active', b.dataset.view === state.view));
    }

    /* ---------------- 列表 ---------------- */
    function matches(it) {
      if (state.topic !== 'all' && it.topic !== state.topic) return false;
      if (state.must === 'must' && !it.must) return false;
      const m = markOf(it.id);
      if (state.mark === 'ok' && m !== 'ok') return false;
      if (state.mark === 'meh' && m !== 'meh') return false;
      if (state.mark === 'none' && m) return false;
      if (state.search) {
        const hay = [it.title, it.no, it.points, it.idea, it.complexity, (it.pitfalls || []).join(' '), it.id].join(' ');
        if (hay.toLowerCase().indexOf(state.search.toLowerCase()) < 0) return false;
      }
      return true;
    }

    function diffName(d) {
      return d >= 3 ? '困难' : d === 2 ? '中等' : '简单';
    }

    function itemCard(it) {
      const t = TOPIC_MAP[it.topic] || { name: it.topic };
      const m = markOf(it.id);
      return [
        '<article class="algo-card" data-id="' + esc(it.id) + '">',
        '<div class="ac-head">',
        '<div class="ac-title"><span class="ac-no">' + esc(it.no) + '</span><h3>' + esc(it.title) + '</h3></div>',
        '<div class="ac-badges">',
        it.must ? '<span class="badge must-badge">必默写</span>' : '',
        '<span class="badge diff-' + (it.diff || 1) + '">' + diffName(it.diff || 1) + '</span>',
        '<span class="badge ghost ac-mark ' + (m || 'none') + '">' + MARK_NAME[m || ''] + '</span>',
        '</div>',
        '</div>',
        '<p class="ac-topic">' + esc(t.name) + '</p>',
        '<p class="ac-points"><b>题面要点</b>' + esc(it.points) + '</p>',
        '<p class="ac-idea"><b>核心思路</b>' + esc(it.idea) + '</p>',
        '<ul class="ac-pitfalls">' + (it.pitfalls || []).map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>',
        '<p class="ac-meta">' + esc(it.complexity || '') + '</p>',
        '<div class="ac-actions">',
        '<button type="button" class="primary-btn small ac-practice" data-id="' + esc(it.id) + '">默写练习</button>',
        '<button type="button" class="chip ac-mark-btn" data-id="' + esc(it.id) + '" data-mark="ok">已掌握</button>',
        '<button type="button" class="chip ac-mark-btn" data-id="' + esc(it.id) + '" data-mark="meh">待加强</button>',
        '</div>',
        '</article>'
      ].join('');
    }

    function renderList() {
      const host = $('algoList');
      if (!host) return;
      host.hidden = state.view !== 'list';
      if (state.view !== 'list') return;
      const list = ITEMS.filter(matches);
      if (!list.length) {
        host.innerHTML = '<div class="card algo-empty">没有符合当前筛选的题目。换个专题或把掌握状态切回「全部」。</div>';
        return;
      }
      const groups = [];
      TOPICS.forEach(t => {
        const arr = list.filter(i => i.topic === t.key);
        if (!arr.length) return;
        groups.push(
          '<section class="algo-group" data-topic="' + esc(t.key) + '">' +
          '<div class="ag-head"><h2>' + esc(t.name) + '</h2><span>' + arr.length + ' 题</span></div>' +
          (t.why ? '<p class="ag-why">为什么练这组：' + esc(t.why) + '</p>' : '') +
          '<div class="ag-cards">' + arr.map(itemCard).join('') + '</div>' +
          '</section>'
        );
      });
      host.innerHTML = groups.join('');
    }

    /* ---------------- 白板默写 ---------------- */
    let timer = null;
    let startAt = 0;

    function tick() {
      const el = $('apClock');
      if (!el) return;
      const s = Math.floor((Date.now() - startAt) / 1000);
      el.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    }
    function startTimer() {
      stopTimer();
      startAt = Date.now();
      tick();
      timer = setInterval(tick, 500);
      const b = $('apTimerBtn');
      if (b) b.textContent = '重新计时';
    }
    function stopTimer() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    function openPractice(id) {
      const it = BY_ID[id];
      if (!it) return;
      state.cur = it;
      state.view = 'practice';
      syncChips();
      if ($('algoList')) $('algoList').hidden = true;
      if ($('algoPractice')) $('algoPractice').hidden = false;
      if ($('apCrumb')) $('apCrumb').textContent = (TOPIC_MAP[it.topic] || {}).name || it.topic;
      if ($('apTitle')) $('apTitle').textContent = it.no + ' · ' + it.title;
      if ($('apDiff')) $('apDiff').textContent = diffName(it.diff || 1);
      if ($('apMust')) $('apMust').hidden = !it.must;
      if ($('apPoints')) {
        $('apPoints').innerHTML = '<p><b>题面要点</b>' + esc(it.points) + '</p>' +
          '<p class="ap-tip">先只看题面，自己写；交卷后再看核心思路、参考实现与易错边界。</p>';
      }
      if ($('apInput')) { $('apInput').value = ''; $('apInput').disabled = false; }
      if ($('apReview')) { $('apReview').hidden = true; $('apReview').innerHTML = ''; }
      if ($('apMark')) $('apMark').hidden = true;
      if ($('apSubmit')) $('apSubmit').disabled = false;
      stopTimer();
      if ($('apClock')) $('apClock').textContent = '00:00';
      if ($('apTimerBtn')) $('apTimerBtn').textContent = '开始计时';
      if ($('algoHint')) $('algoHint').textContent = '默写中：先自己写，交卷后再对照';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closePractice() {
      stopTimer();
      state.view = 'list';
      state.cur = null;
      syncChips();
      if ($('algoPractice')) $('algoPractice').hidden = true;
      if ($('algoList')) $('algoList').hidden = false;
      if ($('algoHint')) $('algoHint').textContent = '点「默写练习」进入白板：只给题面，写完再对照参考实现';
      renderList();
    }

    /* ---- 逐行对照（LCS） ---- */
    function diffLines(a, b) {
      const n = a.length, m = b.length;
      const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
      for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
          dp[i][j] = a[i].trim() === b[j].trim() ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
        }
      }
      const aFlags = new Array(n).fill(false);
      const bFlags = new Array(m).fill(false);
      let i = 0, j = 0, same = 0;
      while (i < n && j < m) {
        if (a[i].trim() === b[j].trim()) { aFlags[i] = bFlags[j] = true; same++; i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
        else j++;
      }
      return { aFlags: aFlags, bFlags: bFlags, same: same, total: Math.max(n, m) };
    }

    function diffCol(title, lines, flags) {
      return '<div class="diff-col"><h5>' + title + '</h5><pre>' +
        lines.map((l, i) => '<span class="dl ' + (flags[i] ? 'same' : 'diff') + '">' + esc(l || ' ') + '</span>').join('\n') +
        '</pre></div>';
    }

    /* ---- 结构检查（文本规则，命中项定位到行） ---- */
    function checkStructure(code) {
      const out = [];
      const lines = String(code || '').split('\n');
      const find = re => { for (let i = 0; i < lines.length; i++) if (re.test(lines[i])) return i; return -1; };
      const has = re => lines.some(l => re.test(l));

      const newArr = find(/\bnew\s+[A-Za-z_][^;\n]*\[/);
      if (newArr >= 0 && !has(/delete\s*\[\s*\]/)) out.push({ line: newArr, msg: '用了 new[]，但没有 delete[] 配对' });
      const newOne = find(/\bnew\s+[A-Za-z_]/);
      if (newOne >= 0 && newArr < 0 && !has(/\bdelete\s+[A-Za-z_]/) && !has(/unique_ptr|make_unique|shared_ptr|placement new|new \(/)) {
        out.push({ line: newOne, msg: '有 new，但没有对应的 delete（或改用智能指针）' });
      }

      const virt = find(/\bvirtual\b/);
      if (virt >= 0 && !has(/virtual\s*~\s*\w+/) && !has(/=\s*0\s*;/)) {
        out.push({ line: virt, msg: '类里有虚函数，但没看到虚析构 virtual ~类名()' });
      }

      const up = find(/\bunique_ptr\s*<[^>]*>\s+\w+\s*=\s*[^;\n]+/);
      if (up >= 0 && !/make_unique|std::move|\.release\(|nullptr/.test(lines[up])) {
        out.push({ line: up, msg: 'unique_ptr 不能拷贝赋值，用 std::move 或 make_unique' });
      }

      const mv = find(/(\w+)\s*\(\s*(?:const\s+)?\w+\s*&&\s*\)|operator\s*=\s*\(\s*(?:const\s+)?\w+\s*&&\s*\)/);
      if (mv >= 0 && !/noexcept/.test(lines[mv])) out.push({ line: mv, msg: '移动构造 / 移动赋值建议标 noexcept' });

      const op = find(/\boperator\s*=\s*\(/);
      if (op >= 0 && !has(/this\s*==\s*&|this\s*!=\s*&|&\s*\w+\s*==\s*this|swap\s*\(/)) {
        out.push({ line: op, msg: '赋值运算符没看到自赋值检查（this == &other 或 copy-and-swap）' });
      }

      for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(/(\w+)\s*\(\s*\1\s*\)/);
        if (m && !/std::move/.test(lines[i]) && i > 0) {
          out.push({ line: i, msg: '初始化列表 ' + m[1] + '(' + m[1] + ') 建议改成 std::move(' + m[1] + ')' });
          break;
        }
      }

      const retRef = lines.findIndex(l => /^\s*(?:const\s+)?[\w:<>]+\s*&\s*\w+\s*\(/.test(l));
      if (retRef >= 0) {
        for (let i = retRef + 1; i < lines.length; i++) {
          const m = lines[i].match(/^\s*return\s+(\w+)\s*;/);
          if (!m) continue;
          const name = m[1];
          const decl = new RegExp('\\b' + name + '\\s*[;=]');
          if (decl.test(lines.slice(retRef + 1, i).join('\n')) && !/static/.test(lines[i])) {
            out.push({ line: i, msg: '可能返回了局部变量的引用：' + name });
          }
          break;
        }
      }
      return out;
    }

    /* ---- WASM clang（与检测题同款：按需加载，只编译不链接） ---- */
    const CLANG_CDN = [
      'https://unpkg.com/@live-codes/clang-wasm@0.3.0/',
      'https://fastly.jsdelivr.net/npm/@live-codes/clang-wasm@0.3.0/',
      'https://gcore.jsdelivr.net/npm/@live-codes/clang-wasm@0.3.0/',
      'https://cdn.jsdelivr.net/npm/@live-codes/clang-wasm@0.3.0/'
    ];
    const CLANG_SIZE = '约 21 MB（clang.wasm 15 MB + sysroot 5.2 MB + 加载器 0.3 MB）';
    const clang = { tc: null, api: null, pending: null, loadMs: 0 };

    function setCompileStatus(html) {
      const st = $('compileStatus');
      if (!st) return;
      st.hidden = false;
      st.innerHTML = html;
    }

    function loadScript(src, timeoutMs) {
      return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        let done = false;
        const t = setTimeout(() => { if (!done) { done = true; s.remove(); reject(new Error('加载超时')); } }, timeoutMs);
        s.src = src;
        s.async = true;
        s.onload = () => { if (done) return; done = true; clearTimeout(t); resolve(); };
        s.onerror = () => { if (done) return; done = true; clearTimeout(t); reject(new Error('加载器脚本请求失败')); };
        document.head.appendChild(s);
      });
    }

    function withTimeout(p, ms, tag) {
      return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error(tag + '超时（' + Math.round(ms / 1000) + 's）')), ms);
        p.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
      });
    }

    function ensureCompiler() {
      if (clang.tc) return Promise.resolve(clang.tc);
      if (clang.pending) return clang.pending;
      const started = performance.now();
      clang.pending = (async () => {
        let last = null;
        try {
          for (let i = 0; i < CLANG_CDN.length; i++) {
            const base = CLANG_CDN[i];
            try {
              if (!window.clangWasmToolchain) await loadScript(base + 'dist/clang-wasm-toolchain.global.js', 20000);
              const api = window.clangWasmToolchain;
              if (!api || !api.createToolchain) throw new Error('加载器未就绪');
              const tc = await withTimeout(api.createToolchain({
                baseUrl: base + 'assets/',
                onProgress: v => setCompileStatus('<p class="compile-note">正在加载编译器资源 ' +
                  Math.round((v || 0) * 100) + '%（' + CLANG_SIZE + '）…</p>')
              }), 90000, '编译器资源加载');
              clang.tc = tc;
              clang.api = api;
              clang.loadMs = performance.now() - started;
              return tc;
            } catch (e) {
              last = e;
              clang.tc = null;
            }
          }
          throw last || new Error('CDN 不可达');
        } finally {
          clang.pending = null;
        }
      })();
      return clang.pending;
    }

    const STD_HEADERS = /^(algorithm|any|array|atomic|bit|bitset|cassert|cctype|chrono|cmath|compare|concepts|cstdarg|cstddef|cstdint|cstdio|cstdlib|cstring|ctime|deque|exception|filesystem|functional|future|initializer_list|iomanip|ios|iosfwd|iostream|istream|iterator|limits|list|map|memory|mutex|new|numbers|numeric|optional|ostream|queue|random|ranges|ratio|regex|set|shared_mutex|span|sstream|stack|stdexcept|string|string_view|system_error|thread|tuple|type_traits|typeinfo|unordered_map|unordered_set|utility|variant|vector)(\.h)?$/;

    function parseDiag(raw) {
      const out = [];
      const re = /^([^\s:]+):(\d+):(\d+):\s*(fatal error|error|warning):\s*(.*)$/;
      const lines = (clang.api && clang.api.compilerDiagnostics)
        ? clang.api.compilerDiagnostics(raw)
        : String(raw || '').replace(/\u001b\[[0-9;]*[A-Za-z]/g, '').split(/\r?\n/);
      lines.forEach(line => {
        const m = line.match(re);
        if (m) {
          const fm = m[5].match(/'([^']+)' file not found/);
          out.push({ line: Number(m[2]), kind: m[4], msg: m[5], external: !!(fm && !STD_HEADERS.test(fm[1])) });
          return;
        }
        const bare = line.match(/^(fatal error|error|warning):\s*(.*)$/);
        if (bare) out.push({ line: 0, kind: bare[1], msg: bare[2], external: false });
      });
      return out;
    }

    function paintCompile(diags, ms, err) {
      const warns = diags.filter(d => d.kind === 'warning');
      const errs = diags.filter(d => d.kind !== 'warning');
      const ext = errs.filter(d => d.external);
      const real = errs.filter(d => !d.external);
      let html = '<p class="compile-note">编译完成：' + ms + ' ms（加载 ' + (clang.loadMs / 1000).toFixed(1) +
        ' s）· 只查语法/类型错误，不链接、不运行。</p>';
      if (!errs.length && !warns.length && err) {
        html += '<p class="compile-note warn">编译器没有正常完成：' + esc(String((err && err.message) || err)) +
          '。本次结果不可用，请看上面的结构检查。</p>';
        setCompileStatus(html);
        return;
      }
      html += real.length
        ? '<ul class="compile-diags">' + real.slice(0, 12).map(d =>
          '<li><b>' + (d.line ? '第 ' + d.line + ' 行' : '编译错误') + '</b> <span>' + esc(d.msg) + '</span></li>').join('') + '</ul>'
        : '<p class="compile-ok">没有发现语法 / 类型错误。</p>';
      if (warns.length) {
        html += '<p class="compile-note">另有 ' + warns.length + ' 条警告（不影响判分），行号：' +
          warns.slice(0, 8).map(w => w.line).join('、') + '</p>';
      }
      if (ext.length) {
        html += '<p class="compile-note">其中 ' + ext.length + ' 条是缺少外部头文件，内置 clang 没有这些头，相关声明无法校验。</p>';
      }
      setCompileStatus(html);
    }

    async function runCompile() {
      const st = $('compileStatus');
      if (!st) return;
      const code = ($('apInput') ? $('apInput').value : '').trim();
      if (!code) { setCompileStatus('<p class="compile-note">先写点代码再编译。</p>'); return; }
      const btn = $('apCompileBtn');
      if (btn) { btn.disabled = true; btn.textContent = '编译器运行中…'; }
      try {
        if (!clang.tc) {
          setCompileStatus('<p class="compile-note">正在按需加载 WASM clang：' + CLANG_SIZE + '，首次通常 5–20 秒，之后走浏览器缓存…</p>');
          await ensureCompiler();
        }
        setCompileStatus('<p class="compile-note">编译器就绪（加载 ' + (clang.loadMs / 1000).toFixed(1) + ' s）· 正在编译…</p>');
        const t = performance.now();
        const cap = await clang.tc.captureCompilerOutput(() => clang.tc.runtime.compile({
          input: 'main.cpp',
          code: code,
          obj: 'main.o',
          language: 'CPP',
          compileArgs: ['-std=gnu++20']
        }));
        paintCompile(parseDiag(cap.raw), Math.round(performance.now() - t), cap.error);
      } catch (e) {
        setCompileStatus('<p class="compile-note warn">WASM 编译器不可用（' + esc(String((e && e.message) || e)) +
          '）：已降级为仅结构检查，上面的文本规则结果仍然有效。</p>');
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = '用 WASM clang 编译查错'; }
      }
    }

    /* ---- 交卷 ---- */
    function submitPractice() {
      const it = state.cur;
      if (!it) return;
      const mine = ($('apInput') ? $('apInput').value : '').replace(/\s+$/, '');
      if (!mine.trim()) { toast('先写点内容再交卷'); return; }
      stopTimer();
      const ref = String(it.skeleton || '').replace(/\s+$/, '');
      const box = $('apReview');
      if (!box) return;
      const a = mine.split('\n');
      const b = ref.split('\n');
      const d = diffLines(a, b);
      const issues = checkStructure(mine);

      box.hidden = false;
      box.innerHTML = [
        '<div class="ap-idea"><p><b>核心思路</b>' + esc(it.idea) + '</p>' +
        '<p><b>易错边界</b></p><ul>' + (it.pitfalls || []).map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' +
        '<p class="ac-meta">' + esc(it.complexity || '') + '</p></div>',
        '<div class="code-diff"><div class="diff-head">参考实现对照 · 相同 <b>' + d.same + '</b> / ' + Math.max(a.length, b.length) + ' 行</div>' +
        '<div class="diff-cols">' + diffCol('你的默写', a, d.aFlags) + diffCol('参考实现', b, d.bFlags) + '</div></div>',
        '<div class="struct-check"><h4>结构检查 · ' + (issues.length ? issues.length + ' 项待确认' : '未发现常见坑') + '</h4>' +
        (issues.length
          ? '<ul>' + issues.map(x => '<li><b>第 ' + (x.line + 1) + ' 行</b> ' + esc(x.msg) + '</li>').join('') + '</ul>'
          : '<p class="weak-tip">文本规则只覆盖常见坑，语法/类型错误需编译器。</p>') +
        '<div class="compile-run"><button type="button" class="ghost-btn small" id="apCompileBtn">用 WASM clang 编译查错</button>' +
        '<span class="weak-tip">按需加载 ' + CLANG_SIZE + '，只查语法/类型错误，不链接不运行</span></div>' +
        '<div class="compile-status" id="compileStatus" hidden></div></div>'
      ].join('');
      if ($('apSubmit')) $('apSubmit').disabled = true;
      if ($('apMark')) $('apMark').hidden = false;
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ---------------- 事件 ---------------- */
    function bind() {
      const menuBtn = $('menuBtn');
      const sidebar = $('sidebar');
      const scrim = $('scrim');
      const closeSidebar = () => { if (sidebar) sidebar.classList.remove('open'); if (scrim) scrim.classList.remove('show'); };
      if (menuBtn) menuBtn.addEventListener('click', () => { if (sidebar) sidebar.classList.toggle('open'); if (scrim) scrim.classList.toggle('show'); });
      if ($('closeBtn')) $('closeBtn').addEventListener('click', closeSidebar);
      if (scrim) scrim.addEventListener('click', closeSidebar);

      const themeBtn = $('themeBtn');
      if (themeBtn) themeBtn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        Store.data.theme = next;
        save();
      });

      const search = $('algoSearch');
      if (search) search.addEventListener('input', () => { state.search = search.value.trim(); renderList(); });

      document.addEventListener('click', e => {
        const t = e.target;
        if (!t || !t.closest) return;

        const cat = t.closest('#algoTopics .cat-item');
        if (cat) {
          state.topic = cat.dataset.topic;
          paintTopics();
          renderList();
          return;
        }
        const mk = t.closest('#markFilter .chip');
        if (mk) { state.mark = mk.dataset.mark; syncChips(); renderList(); return; }
        const mu = t.closest('#mustFilter .chip');
        if (mu) { state.must = mu.dataset.must; syncChips(); renderList(); return; }

        const nav = t.closest('#algoNav button');
        if (nav) {
          if (nav.dataset.view === 'practice') {
            if (!state.cur) { toast('先从列表里选一道题'); return; }
            state.view = 'practice';
            syncChips();
            if ($('algoList')) $('algoList').hidden = true;
            if ($('algoPractice')) $('algoPractice').hidden = false;
          } else {
            closePractice();
          }
          return;
        }

        const go = t.closest('.ac-practice');
        if (go) {
          if (state.view === 'practice') { /* 已经在练习页，直接换题 */ }
          openPractice(go.dataset.id);
          return;
        }
        const mb = t.closest('.ac-mark-btn');
        if (mb) {
          const id = mb.dataset.id;
          const cur = markOf(id);
          setMark(id, cur === mb.dataset.mark ? '' : mb.dataset.mark);
          paintStats();
          renderList();
          return;
        }
        if (t.id === 'apBack') { closePractice(); return; }
        if (t.id === 'apTimerBtn') { startTimer(); return; }
        if (t.id === 'apSubmit') { submitPractice(); return; }
        if (t.id === 'apCompileBtn') { runCompile(); return; }

        const pm = t.closest('#apMark .chip');
        if (pm) {
          if (!state.cur) return;
          setMark(state.cur.id, pm.dataset.mark === 'none' ? '' : pm.dataset.mark);
          paintStats();
          toast(pm.dataset.mark === 'none' ? '已重置为未练' : '已标记：' + MARK_NAME[pm.dataset.mark]);
          return;
        }
      });

      // 输入时开始计时（第一次输入就算开始）
      const input = $('apInput');
      if (input) input.addEventListener('input', () => { if (!timer) startTimer(); });
    }

    /* ---------------- boot ---------------- */
    if ($('algoSub')) {
      $('algoSub').textContent = TOPICS.length + ' 个专题 · ' + ITEMS.length + ' 道题 · 白板默写 + 结构检查 + 编译查错';
    }
    document.documentElement.setAttribute('data-theme', Store.data.theme);
    bind();
    paintTopics();
    syncChips();
    paintStats();
    renderList();
  }

  window.AlgoApp = window.AlgoApp || { start: start };
})();

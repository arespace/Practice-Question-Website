(function () {
  'use strict';

  function start(ctx) {
    const DIR = ctx.dir;
    const DATA = ctx.data;
    const META = ctx.meta || { sections: [], counts: {} };
    const ITEMS = Array.isArray(DATA.items) ? DATA.items : [];
    const GROUPS = Array.isArray(DATA.groups) ? DATA.groups : [];
    const CAT_MAP = {};
    GROUPS.forEach(c => { CAT_MAP[c.key] = c; });
    const SEC_META = {};
    (META.sections || []).forEach(s => { SEC_META[s.key] = s; });

    /* ---------------- 分类包按需加载 ----------------
     * 首屏只加载 <dir>.quiz.index.js（id/cat/type/unit/diff/p 等元数据，筛选、统计、
     * SRS、组卷、位置记忆全都只依赖它）；题干/选项/解析在渲染前按分类加载
     * <dir>.quiz.<cat>.js，并原地回填到索引里的同一条对象上，所以 deck、错题、
     * 统计、导出拿到的仍是同一批对象，不需要重算任何计数。 */
    const BY_ID = {};
    ITEMS.forEach(it => { BY_ID[it.id] = it; });
    const loaded = {};
    const pending = {};
    let allPending = null;

    function catBundleUrl(cat) {
      return 'dist/content/' + DIR + '.quiz.' + cat + '.js';
    }

    function ensureCat(cat) {
      if (!cat || loaded[cat]) return Promise.resolve();
      if (pending[cat]) return pending[cat];
      pending[cat] = window.LoadBundle(catBundleUrl(cat)).then(() => {
        const bag = (window.CONTENT || {})[DIR] || {};
        const pkg = bag.quizCats && bag.quizCats[cat];
        if (!pkg || !Array.isArray(pkg.items)) throw new Error('分类包格式不正确：' + cat);
        pkg.items.forEach(full => {
          const stub = BY_ID[full.id];
          if (stub) Object.assign(stub, full);
        });
        loaded[cat] = true;
      }).then(() => { delete pending[cat]; }, err => { delete pending[cat]; throw err; });
      return pending[cat];
    }

    function ensureCats(cats) {
      return Promise.all(cats.filter(c => c && !loaded[c]).map(ensureCat));
    }

    // 跨全部分类的操作（全文搜索 / 导出复习包）才需要全部正文，按需一次并行拉齐
    function ensureAll() {
      if (!allPending) {
        allPending = ensureCats(GROUPS.map(g => g.key)).then(() => { allPending = null; }, err => { allPending = null; throw err; });
      }
      return allPending;
    }

    function loadedAll(cats) {
      return cats.every(c => !c || loaded[c]);
    }

    // 桌面端 hover 分类时提前取包，点下去基本已经就绪
    function prefetchCat(cat) {
      if (cat && cat !== 'all' && !loaded[cat] && !pending[cat]) ensureCat(cat).catch(() => {});
    }

    // 首屏之后的“闲时预热”：逐个补齐剩余分类包，让切分类/错题本/搜索不再付冷启动网络。
    // 首屏关键路径不受影响；省流模式或 2G 网络下不预热。
    let warmTimer = 0;
    let lastAct = Date.now();
    ['pointerdown', 'keydown', 'wheel'].forEach(ev =>
      document.addEventListener(ev, () => { lastAct = Date.now(); }, { passive: true }));
    function warmAllCats() {
      if (warmTimer) return;
      const conn = navigator.connection || {};
      if (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '')) return;
      warmTimer = setTimeout(step, 500);
      function step() {
        // 用户正在操作时让路，避免后台解析和交互抢主线程
        if (Date.now() - lastAct < 800) { warmTimer = setTimeout(step, 400); return; }
        const next = GROUPS.map(g => g.key).filter(c => !loaded[c] && !pending[c]);
        if (!next.length) { warmTimer = 0; return; }
        Promise.all(next.slice(0, 3).map(c => ensureCat(c).catch(() => {}))).then(() => {
          warmTimer = setTimeout(step, 120);
        });
      }
    }

    // 顺序刷到分类交界前，空闲时预取「下一题」所在的分类包（只提前 1 个）
    let prefetchTimer = 0;
    function schedulePrefetch() {
      if (prefetchTimer) return;
      const run = () => {
        prefetchTimer = 0;
        if (state.view !== 'quiz') return;
        const next = [];
        for (let k = state.idx + 1; k < state.deck.length && next.length < 1; k++) {
          const c = state.deck[k].cat;
          if (c && !loaded[c] && next.indexOf(c) < 0) next.push(c);
        }
        next.forEach(prefetchCat);
      };
      prefetchTimer = window.requestIdleCallback ? window.requestIdleCallback(run, { timeout: 1500 }) : setTimeout(run, 600);
    }


    const TYPE_NAME = { single: '单选', multi: '多选', fill: '填空', code: '编程' };
    const DAY = 86400000;
    const LETTER = 'ABCDEF';
    const todayStr = Store.todayStr;

    /* ---------------- store ---------------- */
    let store = Store.dir(DIR);

    function save() {
      Store.save();
    }

  const state = {
    view: 'quiz',
    cat: 'all',
    type: 'all',
    stat: 'all',
    prio: 'all',
    mode: 'order',
    search: '',
    deck: [],
    idx: 0,
    picked: [],
    answered: false,
    unitFocus: null
  };

  // 组卷配置（仅本次会话有效）
  const build = { count: 20, diff: 'all', types: ['single', 'multi', 'fill', 'code'], limit: 0 };
  // 模考状态（仅本次会话有效，刷新即结束）
  let exam = null;
  let examTimer = null;

  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function inline(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/_{4,}/g, '<span class="blank"></span>');
  }

  function fmt(src) {
    const lines = String(src == null ? '' : src).split('\n');
    const out = [];
    let i = 0;
    while (i < lines.length) {
      if (/^\s*```/.test(lines[i])) {
        i++;
        const buf = [];
        while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        out.push('<pre><code>' + esc(buf.join('\n')) + '</code></pre>');
        continue;
      }
      if (!lines[i].trim()) { i++; continue; }
      out.push('<p>' + inline(lines[i]) + '</p>');
      i++;
    }
    return out.join('');
  }

  function norm(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/[\s\u3000]/g, '')
      .replace(/[。；;，,、'"“”‘’`]/g, '')
      .replace(/／/g, '/');
  }

  function qHtml(it) {
    const q = String(it.q || '');
    if (it.type === 'code' && q.indexOf('```') < 0) {
      const m = q.match(/\n\s*\n/);
      if (m && m.index > 0) {
        const head = q.slice(0, m.index);
        const rest = q.slice(m.index + m[0].length);
        if (/(^|\n)\s*(#include|class\s|struct\s|void\s|virtual\s|int\s|bool\s|float\s|auto\s|TArray|TMap|TObjectPtr|UPROPERTY|UCLASS|UFUNCTION|DECLARE_|if\s*\(|for\s*\(|return\s|\/\/)/.test(rest)) {
          return fmt(head) + '<pre><code>' + esc(rest) + '</code></pre>';
        }
      }
    }
    return fmt(q);
  }

  /* ---------------- helpers ---------------- */
  function recOf(id) { return store.quiz[id] || null; }
  function isRight(id) { const r = recOf(id); return !!(r && r.last === 'right'); }
  // 错题本 = 曾经答错且尚未毕业（连对 2 次才算毕业）
  function isWrong(id) { const r = recOf(id); return !!(r && r.w > 0 && !r.graduated); }
  function isGraduated(id) { const r = recOf(id); return !!(r && r.graduated && r.w > 0); }
  function wrongStreak(id) { const r = recOf(id); return r ? (r.streak || 0) : 0; }
  function isDue(id) {
    const r = recOf(id);
    if (!r) return false;
    if (r.last === 'wrong' && !r.dueAt) return true;
    return !!(r.dueAt && r.dueAt <= Date.now());
  }
  function isFav(id) { return store.quizFav.indexOf(id) >= 0; }
  function catOf(it) {
    return CAT_MAP[it.cat] || { key: it.cat, name: it.cat, short: it.cat, section: it.section || '' };
  }

  function catAccMap() {
    const m = {};
    ITEMS.forEach(it => {
      const c = m[it.cat] || (m[it.cat] = { attempts: 0, wins: 0, done: 0, total: 0, acc: null });
      c.total++;
      const r = recOf(it.id);
      if (!r) return;
      c.done++;
      c.attempts += (r.r || 0) + (r.w || 0);
      c.wins += (r.r || 0);
    });
    Object.keys(m).forEach(k => {
      const c = m[k];
      c.acc = c.attempts ? Math.round(c.wins / c.attempts * 100) : null;
    });
    return m;
  }

  // 按单元聚合正确率：按薄弱点组卷、统计页共用
  function unitAccMap() {
    const m = {};
    ITEMS.forEach(it => {
      const key = it.cat + '|' + it.unit;
      const u = m[key] || (m[key] = {
        cat: it.cat, unit: it.unit, title: it.unitTitle || '',
        attempts: 0, wins: 0, total: 0, done: 0, acc: null
      });
      u.total++;
      const r = recOf(it.id);
      if (!r) return;
      u.done++;
      u.attempts += (r.r || 0) + (r.w || 0);
      u.wins += (r.r || 0);
    });
    Object.keys(m).forEach(k => {
      const u = m[k];
      u.acc = u.attempts ? Math.round(u.wins / u.attempts * 100) : null;
    });
    return m;
  }

  // 按组卷配置挑选：薄弱单元优先，未做过略降权、已毕业略升权
  function pickByConfig(base, includeCode) {
    const acc = unitAccMap();
    return base
      .filter(it => build.types.indexOf(it.type) >= 0 && (includeCode || it.type !== 'code'))
      .filter(it => build.diff === 'all' ||
        (build.diff === 'basic' ? (it.diff || 1) < 3 : (it.diff || 1) >= 3))
      .map(it => {
        const u = acc[it.cat + '|' + it.unit];
        const r = recOf(it.id);
        let score = u && u.acc != null ? u.acc : 55;
        if (!r) score -= 10;
        if (r && isWrong(it.id)) score -= 8;
        if (r && r.graduated) score += 8;
        return { it: it, score: score + Math.random() * 12 };
      })
      .sort((a, b) => a.score - b.score)
      .slice(0, build.count)
      .map(x => x.it);
  }

  function matches(it) {
    if (state.unitFocus && !(it.section === state.unitFocus.sec && it.unit === state.unitFocus.unit)) return false;
    if (state.cat !== 'all' && it.cat !== state.cat) return false;
    if (state.type !== 'all' && it.type !== state.type) return false;
    if (state.prio !== 'all' && it.p !== state.prio) return false;
    if (state.stat === 'todo' && recOf(it.id)) return false;
    if (state.stat === 'wrong' && !isWrong(it.id)) return false;
    if (state.stat === 'right' && !isRight(it.id)) return false;
    if (state.stat === 'due' && !isDue(it.id)) return false;
    if (state.stat === 'fav' && !isFav(it.id)) return false;
    if (state.search) {
      const hay = [it.q, it.unitTitle, it.ref, it.explain, (it.options || []).join(' '), catOf(it).name, it.id]
        .join(' ').toLowerCase();
      if (hay.indexOf(state.search) < 0) return false;
    }
    return true;
  }

  function shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  function buildDeck(keep) {
    const cur = state.deck[state.idx];
    let list = ITEMS.filter(matches);

    if (state.mode === 'wrong') list = list.filter(it => isWrong(it.id));

    if (state.mode === 'review') {
      list = list.filter(it => isDue(it.id))
        .slice()
        .sort((a, b) => (recOf(a.id).dueAt || 0) - (recOf(b.id).dueAt || 0));
    }

    if (state.mode === 'smart') {
      list = pickByConfig(list, true);
    } else if (state.mode === 'random') {
      list = shuffle(list.slice());
    }

    state.deck = list;
    if (keep && cur) {
      const p = list.findIndex(x => x.id === cur.id);
      state.idx = p >= 0 ? p : 0;
    } else {
      state.idx = 0;
    }
    resetAnswer();
  }

  function resetAnswer() {
    state.picked = [];
    state.answered = false;
  }

  function curItem() { return state.deck[state.idx] || null; }

  /* ---------------- 位置 + 筛选记忆（复用 quiz:v3，不升版本） ---------------- */
  let posTimer = null;
  let posFrozen = false; // URL 显式 ?unit= / ?q= 定位期间不覆盖记忆
  function persistPos() {
    const it = curItem();
    if (!it || state.view !== 'quiz' || posFrozen) return;
    store.pos = { id: it.id, idx: state.idx, ts: Date.now() };
    store.filters = { cat: state.cat, prio: state.prio, type: state.type, stat: state.stat };
    clearTimeout(posTimer);
    posTimer = setTimeout(save, 120);
  }

  // 返回 true 表示成功定位；id 找不到时按序号兜底
  function restorePos(p) {
    if (!p) return false;
    let i = typeof p.id === 'string' ? state.deck.findIndex(x => x.id === p.id) : -1;
    if (i < 0 && typeof p.idx === 'number' && p.idx >= 0 && p.idx < state.deck.length) i = p.idx;
    if (i < 0) return false;
    state.idx = i;
    return true;
  }

  let toastTimer = null;
  function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
  }

  /* ---------------- header / sidebar ---------------- */
  function totals() {
    let done = 0, right = 0, wrong = 0, todo = 0, due = 0;
    ITEMS.forEach(it => {
      const r = recOf(it.id);
      if (isDue(it.id)) due++;
      if (!r) { todo++; return; }
      done++;
      if (isWrong(it.id)) wrong++; else right++;
    });
    let attempts = 0, wins = 0;
    Object.keys(store.quiz).forEach(id => {
      const r = store.quiz[id];
      attempts += (r.r || 0) + (r.w || 0);
      wins += (r.r || 0);
    });
    return { done, right, wrong, todo, due, total: ITEMS.length, accuracy: attempts ? Math.round(wins / attempts * 100) : null };
  }

  function renderHeader() {
    const t = totals();
    $('statDone').textContent = t.done;
    $('statAcc').textContent = t.accuracy == null ? '--' : t.accuracy + '%';
    $('statDue').textContent = t.due;
    $('wrongBadge').textContent = t.wrong;
    $('wrongBadge').style.display = t.wrong ? 'inline-block' : 'none';

    const strip = $('dueStrip');
    if (strip) {
      $('dueStripText').textContent = t.due
        ? '今天该复习 ' + t.due + ' 题（间隔到期 + 待回炉错题）'
        : '今天没有到期的题，可以顺序刷或按薄弱点组卷';
      $('dueStripBtn').hidden = !t.due;
      strip.classList.toggle('has-due', !!t.due);
    }
  }

  function renderSidebar() {
    const t = totals();
    const acc = catAccMap();

    $('progressText').textContent = t.done + ' / ' + t.total;
    $('progressBar').style.width = (t.total ? t.done / t.total * 100 : 0) + '%';
    $('legendRight').textContent = t.right;
    $('legendWrong').textContent = t.wrong;
    $('legendTodo').textContent = t.todo;

    $('dailyText').textContent = store.daily.count + ' / ' + store.goal;
    $('dailyBar').style.width = Math.min(100, store.daily.count / store.goal * 100) + '%';
    $('streakDays').textContent = store.streak.days || 0;
    $('dueCount').textContent = t.due;
    $('dueBtn').textContent = t.due ? ('复习 ' + t.due) : '复习';

    const list = $('catList');
    list.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = 'cat-item' + (state.cat === 'all' ? ' active' : '');
    allBtn.innerHTML = '<span class="cat-dot"></span><span class="cat-name">全部分类</span><span class="cat-count">' +
      t.done + '/' + t.total + '</span>';
    allBtn.addEventListener('click', () => { state.cat = 'all'; applyFilter(); });
    list.appendChild(allBtn);

    let lastBank = null;
    GROUPS.forEach(cat => {
      if (cat.section !== lastBank) {
        lastBank = cat.section;
        const sm = SEC_META[cat.section] || { name: cat.section, unitLabel: '章' };
        const n = GROUPS.filter(g => g.section === cat.section).length;
        const label = document.createElement('div');
        label.className = 'group-label';
        label.textContent = sm.name + ' · ' + n + ' ' + (sm.unitLabel || '章');
        list.appendChild(label);
      }
      const items = ITEMS.filter(it => it.cat === cat.key);
      const done = items.filter(it => recOf(it.id)).length;
      const a = acc[cat.key] || { acc: null };
      const p = a.acc == null ? 0 : a.acc;
      const color = a.acc == null ? 'var(--border-strong)' : (a.acc < 60 ? 'var(--no)' : a.acc < 80 ? 'var(--mid)' : 'var(--ok)');
      const btn = document.createElement('button');
      btn.className = 'cat-item' + (state.cat === cat.key ? ' active' : '');
      btn.title = cat.name + (a.acc == null ? ' · 本类未作答' : ' · 本类正确率 ' + a.acc + '%');
      btn.innerHTML = '<span class="cat-ring" style="--p:' + p + ';--rc:' + color + '"><i></i></span>' +
        '<span class="cat-name">' + esc(cat.short || cat.name) + '</span>' +
        '<span class="cat-count">' + done + '/' + items.length + '</span>';
      btn.addEventListener('click', () => { state.cat = cat.key; applyFilter(); });
      btn.addEventListener('pointerenter', () => prefetchCat(cat.key));
      list.appendChild(btn);
    });
  }

  /* ---------------- quiz view ---------------- */
  function renderToolbar() {
    $('deckPos').textContent = state.deck.length ? (state.idx + 1) + ' / ' + state.deck.length : '0 / 0';
    $('prevBtn').disabled = state.idx <= 0;
    $('nextNav').disabled = state.idx >= state.deck.length - 1 || !state.deck.length;
    document.querySelectorAll('#modeSwitch .mode').forEach(b => b.classList.toggle('active', b.dataset.mode === state.mode));
    document.querySelectorAll('#typeFilter .chip').forEach(b => b.classList.toggle('active', b.dataset.type === state.type));
    document.querySelectorAll('#stateFilter .chip').forEach(b => b.classList.toggle('active', b.dataset.state === state.stat));
    document.querySelectorAll('#prioFilter .chip').forEach(b => b.classList.toggle('active', b.dataset.prio === state.prio));
  }

  let renderSeq = 0;
  function renderQuestion() {
    const it = curItem();
    const card = $('quizCard');
    const empty = $('quizEmpty');
    if (!it) {
      renderSeq++;
      card.hidden = true;
      empty.hidden = false;
      $('deckPos').textContent = '0 / 0';
      $('prevBtn').disabled = true;
      $('nextNav').disabled = true;
      return;
    }
    const seq = ++renderSeq;
    // 位置/计数与题干一起上屏：分类包没到位时先不刷新工具栏，避免出现“位置变了题没变”
    const paint = () => {
      if (seq !== renderSeq) return;
      card.hidden = false;
      empty.hidden = true;
      try {
        renderQuestionBody(it);
      } catch (e) {
        brokenQuestion(it, e);
      }
      renderToolbar();
      persistPos();
      if (!it.cat || loaded[it.cat]) schedulePrefetch();
    };
    if (!it.cat || loaded[it.cat]) { paint(); return; }
    ensureCat(it.cat).then(paint).catch(() => {
      if (seq !== renderSeq) return;
      card.hidden = false;
      empty.hidden = true;
      brokenQuestion(it, new Error('分类包加载失败：' + it.cat));
      renderToolbar();
    });
  }

  // 单条内容异常：跳过这一条并提示，翻页与其他题不受影响
  function brokenQuestion(it, err) {
    if (window.ContentAlert) window.ContentAlert.report(it && it.id, err);
    else console.error('[quiz] 题目渲染失败', err);
    $('qCat').textContent = '内容异常';
    $('qCat').className = 'badge';
    $('qCat').style.background = '';
    $('qCatAcc').textContent = '';
    $('qUnit').textContent = '';
    if ($('qPrio')) $('qPrio').hidden = true;
    $('qType').textContent = '—';
    $('qType').className = 'badge';
    $('qDiff').textContent = '';
    $('qText').textContent = '这条题目数据不完整，已跳过显示，翻到下一题即可继续。';
    $('qBody').innerHTML = '';
    $('feedback').hidden = true;
    $('qActions').hidden = true;
  }

  function renderQuestionBody(it) {
    const cat = catOf(it);
    const secKey = cat.section || it.section;
    const sm = SEC_META[secKey] || {};
    $('qCat').textContent = cat.name;
    $('qCat').className = 'badge sec-badge';
    $('qCat').style.background = sm.badgeFrom && sm.badgeTo
      ? 'linear-gradient(135deg,' + sm.badgeFrom + ',' + sm.badgeTo + ')'
      : '';
    const st = catAccMap()[it.cat];
    $('qCatAcc').textContent = st && st.acc != null ? '本类 ' + st.acc + '%' : '本类未作答';
    $('qCatAcc').className = 'badge ghost' + (st && st.acc != null && st.acc < 60 ? ' warn' : '');
    $('qUnit').textContent = sm.showUnitNo === false ? it.unitTitle : ('单元 ' + it.unit + ' · ' + it.unitTitle);
    const qp = $('qPrio');
    if (qp) {
      if (it.p) {
        qp.hidden = false;
        qp.textContent = it.p === 'P0' ? 'P0 必看' : it.p === 'P1' ? 'P1 有余力' : 'P2 可略';
        qp.className = 'badge p-badge ' + it.p.toLowerCase();
        qp.title = it.pWhy || '';
      } else {
        qp.hidden = true;
      }
    }
    $('qType').textContent = TYPE_NAME[it.type] || it.type;
    $('qType').className = 'badge t-' + it.type;
    const d = Math.max(1, Math.min(3, it.diff || 1));
    $('qDiff').textContent = '★'.repeat(d) + '☆'.repeat(3 - d);

    const fav = isFav(it.id);
    $('favBtn').textContent = fav ? '★' : '☆';
    $('favBtn').classList.toggle('on', fav);
    $('favBtn').title = fav ? '取消收藏' : '收藏这道题';

    $('qText').innerHTML = qHtml(it);

    const body = $('qBody');
    body.innerHTML = '';
    $('feedback').hidden = true;
    $('qActions').hidden = false;
    $('submitBtn').hidden = false;
    $('skipBtn').hidden = false;
    $('submitBtn').innerHTML = it.type === 'code' ? '查看参考答案' : '提交答案<kbd>Enter</kbd>';

    if (it.type === 'single' || it.type === 'multi') {
      const wrap = document.createElement('div');
      wrap.className = 'opt-list';
      (it.options || []).forEach((opt, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'opt';
        b.dataset.i = String(i);
        b.innerHTML = '<span class="mark">' + LETTER[i] + '</span><span class="opt-text">' + inline(opt) + '</span>';
        b.addEventListener('click', () => {
          if (state.answered) return;
          if (it.type === 'single') {
            state.picked = [i];
          } else {
            const p = state.picked.indexOf(i);
            if (p >= 0) state.picked.splice(p, 1); else state.picked.push(i);
          }
          syncOptions();
        });
        wrap.appendChild(b);
      });
      body.appendChild(wrap);
    } else if (it.type === 'fill') {
      const row = document.createElement('div');
      row.className = 'fill-row';
      row.innerHTML = '<input class="fill-input" id="fillInput" type="text" autocomplete="off" spellcheck="false" placeholder="填写这个空…" />';
      body.appendChild(row);
      const hint = document.createElement('p');
      hint.className = 'fill-hint';
      hint.textContent = '只填一个空；判分忽略大小写、空格和首尾标点。';
      body.appendChild(hint);
      const inp = row.querySelector('input');
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); submit(); }
      });
      setTimeout(() => inp.focus(), 30);
    } else {
      const wrap = document.createElement('div');
      wrap.className = 'code-wrap';
      wrap.innerHTML = '<div class="code-ln" id="codeLn">1</div>';
      const ta = document.createElement('textarea');
      ta.className = 'code-editor';
      ta.id = 'codeInput';
      ta.placeholder = '可以先在这里写代码或写出你的判断，再看参考答案自评…';
      ta.spellcheck = false;
      ta.value = store.drafts[it.id] || '';
      wrap.appendChild(ta);
      body.appendChild(wrap);
      const tip = document.createElement('p');
      tip.className = 'code-tip';
      tip.textContent = 'Tab 缩进 4 空格 · 代码草稿自动保存 · 编程/代码阅读题对照参考答案后自评。';
      body.appendChild(tip);

      const ln = wrap.querySelector('#codeLn');
      const sync = () => {
        const n = ta.value.split('\n').length;
        if (Number(ln.dataset.n) !== n) {
          ln.dataset.n = n;
          ln.textContent = Array.from({ length: n }, (_, i) => i + 1).join('\n');
        }
        ln.scrollTop = ta.scrollTop;
      };
      let draftTimer = null;
      ta.addEventListener('input', () => {
        sync();
        clearTimeout(draftTimer);
        draftTimer = setTimeout(() => { store.drafts[it.id] = ta.value; save(); }, 350);
      });
      ta.addEventListener('scroll', () => { ln.scrollTop = ta.scrollTop; });
      ta.addEventListener('keydown', e => {
        if (e.key !== 'Tab') return;
        e.preventDefault();
        const s = ta.selectionStart, en = ta.selectionEnd;
        ta.value = ta.value.slice(0, s) + '    ' + ta.value.slice(en);
        ta.selectionStart = ta.selectionEnd = s + 4;
        store.drafts[it.id] = ta.value;
        save();
        sync();
      });
      sync();
    }
  }

  function syncOptions() {
    const it = curItem();
    if (!it) return;
    document.querySelectorAll('#qBody .opt').forEach(b => {
      const i = Number(b.dataset.i);
      b.classList.toggle('sel', state.picked.indexOf(i) >= 0);
    });
  }

  function submit() {
    const it = curItem();
    if (!it || state.answered) return;

    if (it.type === 'code') { showCodeRef(); return; }

    let ok = false;
    let yours = '';

    if (it.type === 'single' || it.type === 'multi') {
      if (!state.picked.length) { toast('先选一个答案'); return; }
      const correct = (it.answer || []).slice().sort((a, b) => a - b);
      const picked = state.picked.slice().sort((a, b) => a - b);
      ok = correct.length === picked.length && correct.every((v, i) => v === picked[i]);
      yours = picked.map(i => LETTER[i]).join('');
    } else if (it.type === 'fill') {
      const el = $('fillInput');
      const v = el ? el.value.trim() : '';
      if (!v) { toast('先填写答案'); el && el.focus(); return; }
      ok = (it.answer || []).some(a => norm(a) === norm(v));
      yours = v;
      if (el) { el.classList.add(ok ? 'ok' : 'no'); el.disabled = true; }
    }

    finish(it, ok, yours);
  }

  // 对比区按自身宽度决定堆叠：容器查询的 JS 兜底，老 WebView 也能正确堆叠
  function fitCodeDiff(box) {
    if (!box) return;
    const apply = () => box.classList.toggle('stack', box.clientWidth < 760);
    apply();
    if (window.ResizeObserver) new ResizeObserver(apply).observe(box);
    else window.addEventListener('resize', apply);
  }

  function showCodeRef() {    const it = curItem();
    const body = $('qBody');
    if ($('selfGrade')) return;

    const ta = $('codeInput');
    const mine = ta ? ta.value : '';
    if (ta) { store.drafts[it.id] = mine; save(); }
    const ref = String(it.ref || '').trim();

    if (mine.trim() && ref) {
      const box = document.createElement('div');
      box.className = 'code-diff';
      const a = mine.replace(/\s+$/, '').split('\n');
      const b = ref.split('\n');
      const d = diffLines(a, b);
      box.innerHTML = '<div class="diff-head">参考答案对比 · 相同 <b>' + d.same + '</b> / ' + Math.max(a.length, b.length) + ' 行</div>' +
        '<div class="diff-cols">' +
        diffCol('你的代码', a, d.aFlags) +
        diffCol('参考答案', b, d.bFlags) +
        '</div>';
      body.appendChild(box);
      fitCodeDiff(box);
    } else {
      const box = document.createElement('div');
      box.className = 'code-ref';
      box.innerHTML = '<h4>参考答案 / 判分要点</h4>' + esc(ref || '（暂无参考答案）');
      body.appendChild(box);
    }

    const grade = document.createElement('div');
    grade.className = 'self-grade';
    grade.id = 'selfGrade';
    grade.innerHTML = '<button type="button" class="sg-ok">我答对了</button><button type="button" class="sg-no">我没答对</button>';
    body.appendChild(grade);
    grade.querySelector('.sg-ok').addEventListener('click', () => finish(it, true, ''));
    grade.querySelector('.sg-no').addEventListener('click', () => finish(it, false, ''));

    $('submitBtn').hidden = true;
    $('skipBtn').hidden = true;
    body.lastChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function diffLines(a, b) {
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        dp[i][j] = a[i].trim() === b[j].trim()
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    const aFlags = new Array(n).fill(false);
    const bFlags = new Array(m).fill(false);
    let i = 0, j = 0, same = 0;
    while (i < n && j < m) {
      if (a[i].trim() === b[j].trim()) {
        aFlags[i] = bFlags[j] = true;
        same++; i++; j++;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) {
        i++;
      } else {
        j++;
      }
    }
    return { aFlags, bFlags, same };
  }

  function diffCol(title, lines, flags) {
    const html = lines.map((l, k) =>
      '<span class="dl' + (flags[k] ? ' same' : '') + '">' + (esc(l) || ' ') + '</span>'
    ).join('');
    return '<div class="diff-col"><h5>' + esc(title) + '</h5><pre>' + html + '</pre></div>';
  }

  function finish(it, ok, yours) {
    state.answered = true;
    record(it.id, ok, yours);
    renderHeader();
    renderSidebar();

    if (it.type === 'single' || it.type === 'multi') {
      document.querySelectorAll('#qBody .opt').forEach(b => {
        const i = Number(b.dataset.i);
        b.disabled = true;
        b.classList.remove('sel');
        if ((it.answer || []).indexOf(i) >= 0) b.classList.add('right');
        else if (state.picked.indexOf(i) >= 0) b.classList.add('wrong');
      });
    }

    const head = $('fbHead');
    head.className = 'fb-head ' + (ok ? 'ok' : 'no');
    head.innerHTML = '<span class="fb-ico">' + (ok ? '✓' : '✗') + '</span>' + fbTitle(it, ok);

    $('fbYours').innerHTML = yours ? '你的答案：<b>' + esc(yours) + '</b>' : '';
    $('fbYours').hidden = !yours;

    const rightText = answerText(it);
    $('fbRight').innerHTML = rightText ? '正确答案：<b>' + esc(rightText) + '</b>' : '';
    $('fbRight').hidden = !rightText;

    $('fbExplain').innerHTML = '<b>解析：</b>' + fmt(it.explain);
    let src = $('fbSrc');
    if (!src) {
      src = document.createElement('div');
      src.id = 'fbSrc';
      src.className = 'fb-src';
      $('feedback').appendChild(src);
    }
    const r = recOf(it.id);
    src.textContent = '来源：' + catOf(it).name + ' · ' + it.unitTitle + (it.src ? '（' + it.src + '）' : '') +
      (r && r.dueAt ? ' · 下次复习：' + new Date(r.dueAt).toLocaleDateString('sv-SE') : '');

    $('feedback').hidden = false;
    $('qActions').hidden = true;
    $('nextBtn').textContent = state.idx >= state.deck.length - 1 ? '本轮完成' : '下一题 →';

    // 与深读单元互链：每道题都能回到对应单元长文
    let deep = $('fbDeep');
    if (!deep) {
      deep = document.createElement('a');
      deep.id = 'fbDeep';
      deep.className = 'deep-link fb-deep';
      $('feedback').appendChild(deep);
    }
    deep.href = 'deep.html?dir=' + encodeURIComponent(DIR) + '&sec=' + encodeURIComponent(it.section) + '&unit=' + it.unit;
    deep.textContent = '看本题长文 · 单元 ' + it.unit + (it.unitTitle ? ' · ' + it.unitTitle : '');

    $('feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // 反馈标题：把“连对 n/2”的毕业进度讲清楚，避免用户以为错题永远留着
  function fbTitle(it, ok) {
    const r = recOf(it.id) || {};
    const prefix = it.type === 'code' ? (ok ? '已自评：掌握' : '已自评：未掌握') : (ok ? '回答正确' : '回答错误');
    if (!ok) return prefix + '，已加入错题本（连对 0/2）';
    if (!(r.w > 0)) return prefix;
    if (r.graduated) return prefix + '，已连对 2 次，移出错题本';
    return prefix + '，连对 ' + (r.streak || 1) + '/2，再答对一次就移出错题本';
  }

  function answerText(it) {
    if (it.type === 'single' || it.type === 'multi') {
      const idx = (it.answer || []).slice().sort((a, b) => a - b);
      return idx.map(i => LETTER[i] + '. ' + stripCode(it.options[i])).join('　');
    }
    if (it.type === 'fill') {
      return (it.answer || []).slice(0, 4).join(' / ');
    }
    return '';
  }

  function stripCode(s) {
    return String(s == null ? '' : s).replace(/`/g, '');
  }

  function record(id, ok, yours) {
    const prev = store.quiz[id] || null;
    const next = SRS.scheduleQuiz(prev, ok, Date.now());
    next.ans = yours || '';
    store.quiz[id] = next;
    Store.bumpDaily(store, null, ok);
    save();
  }

  function go(delta) {
    if (!state.deck.length) return;
    const next = state.idx + delta;
    if (next < 0 || next >= state.deck.length) return;
    state.idx = next;
    resetAnswer();
    renderQuestion();
  }

  /* ---------------- wrong book ---------------- */
  let wrongCat = 'all';
  let wrongType = 'all';
  let showGrad = false;

  function renderWrongFilters() {
    const wrap = $('wrongCatFilter');
    wrap.innerHTML = '';
    const wrongs = ITEMS.filter(it => isWrong(it.id));
    if (wrongCat !== 'all' && !wrongs.some(it => it.cat === wrongCat)) wrongCat = 'all';
    const allBtn = document.createElement('button');
    allBtn.className = 'chip' + (wrongCat === 'all' ? ' active' : '');
    allBtn.textContent = '全部分类';
    allBtn.addEventListener('click', () => { wrongCat = 'all'; renderWrong(); });
    wrap.appendChild(allBtn);
    GROUPS.forEach(cat => {
      const n = wrongs.filter(it => it.cat === cat.key).length;
      if (!n) return;
      const b = document.createElement('button');
      b.className = 'chip' + (wrongCat === cat.key ? ' active' : '');
      b.textContent = (cat.short || cat.name) + ' · ' + n;
      b.title = cat.name;
      b.addEventListener('click', () => { wrongCat = cat.key; renderWrong(); });
      wrap.appendChild(b);
    });
  }

  function renderWrong() {
    // 错题卡要展示题干与解析：只补「包含错题/已毕业题」的分类包，不加载全部
    const need = [];
    Object.keys(store.quiz).forEach(id => {
      const it = BY_ID[id];
      if (!it || need.indexOf(it.cat) >= 0) return;
      if (isWrong(id) || isGraduated(id)) need.push(it.cat);
    });
    if (!loadedAll(need)) {
      renderWrongFilters();
      const list = $('wrongList');
      list.innerHTML = '';
      $('wrongEmpty').hidden = true;
      const tip = document.createElement('p');
      tip.className = 'weak-tip';
      tip.textContent = '正在载入错题内容…';
      list.appendChild(tip);
      ensureCats(need).then(renderWrong).catch(() => toast('错题内容包加载失败'));
      return;
    }
    renderWrongFilters();
    document.querySelectorAll('#wrongTypeFilter .chip').forEach(b => b.classList.toggle('active', b.dataset.type === wrongType));
    const list = $('wrongList');
    list.innerHTML = '';
    let items = ITEMS.filter(it => isWrong(it.id));
    if (wrongCat !== 'all') items = items.filter(it => it.cat === wrongCat);
    if (wrongType !== 'all') items = items.filter(it => it.type === wrongType);
    items.sort((a, b) => {
      const ra = recOf(a.id) || {}, rb = recOf(b.id) || {};
      return (rb.ts || 0) - (ra.ts || 0);
    });
    $('wrongEmpty').hidden = items.length > 0;
    if (wrongCat === 'all' && items.length) {
      GROUPS.forEach(cat => {
        const group = items.filter(it => it.cat === cat.key);
        if (!group.length) return;
        const h = document.createElement('div');
        h.className = 'wrong-group';
        h.innerHTML = '<span>' + esc(cat.name) + '</span><span class="wg-right"><b>' + group.length + ' 题</b>' +
          '<button type="button">练这一类 →</button></span>';
        h.querySelector('button').addEventListener('click', () => jumpCat(cat.key));
        list.appendChild(h);
        group.forEach(it => list.appendChild(wrongCard(it)));
      });
    } else {
      items.forEach(it => list.appendChild(wrongCard(it)));
    }

    // 已毕业归档：记录仍保留，避免用户以为“错题没了 = 记录丢了”
    if (wrongCat === 'all' && wrongType === 'all') {
      const grads = ITEMS.filter(it => isGraduated(it.id));
      if (grads.length) {
        const box = document.createElement('div');
        box.className = 'grad-panel';
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'ghost-btn grad-toggle';
        toggle.textContent = (showGrad ? '收起已毕业 · ' : '查看已毕业 · ') + grads.length + ' 题';
        toggle.addEventListener('click', () => { showGrad = !showGrad; renderWrong(); });
        box.appendChild(toggle);
        if (showGrad) {
          const tip = document.createElement('p');
          tip.className = 'grad-tip';
          tip.textContent = '这些题已连对 2 次（或手动标记掌握），不再出现在错题里；记录仍保留，可随时重新纳入。';
          box.appendChild(tip);
          grads.forEach(it => box.appendChild(gradCard(it)));
        }
        list.appendChild(box);
      }
    }
  }

  // 已毕业卡：只读展示 + 重新纳入
  function gradCard(it) {
    const cat = catOf(it);
    const r = recOf(it.id) || {};
    const card = document.createElement('article');
    card.className = 'wrong-card grad-card';
    const meta = document.createElement('div');
    meta.className = 'wrong-meta';
    const sm = SEC_META[cat.section || it.section] || {};
    const badgeStyle = sm.badgeFrom && sm.badgeTo
      ? ' style="background:linear-gradient(135deg,' + sm.badgeFrom + ',' + sm.badgeTo + ')"'
      : '';
    meta.innerHTML = '<span class="badge sec-badge"' + badgeStyle + '>' + esc(cat.name) + '</span>' +
      '<span class="badge ghost">' + esc(TYPE_NAME[it.type] || it.type) + '</span>' +
      '<span class="badge ghost">错 ' + (r.w || 0) + ' 次</span>' +
      '<span class="badge streak-badge">已毕业</span>';
    card.appendChild(meta);
    const q = document.createElement('div');
    q.className = 'wrong-q';
    q.innerHTML = qHtml(it);
    card.appendChild(q);
    const actions = document.createElement('div');
    actions.className = 'wrong-actions';
    const reopen = document.createElement('button');
    reopen.className = 'redo';
    reopen.textContent = '重新纳入错题本';
    reopen.addEventListener('click', () => {
      const rec = store.quiz[it.id];
      if (rec) {
        rec.graduated = false;
        rec.streak = 0;
        rec.last = 'wrong';
        rec.interval = 1;
        rec.dueAt = Date.now();
        save();
      }
      renderHeader();
      renderSidebar();
      renderWrong();
      toast('已重新纳入错题本');
    });
    actions.appendChild(reopen);
    card.appendChild(actions);
    return card;
  }

  function wrongCard(it) {
    const cat = catOf(it);
    const r = recOf(it.id) || {};
    const card = document.createElement('article');
    card.className = 'wrong-card';

    const meta = document.createElement('div');
    meta.className = 'wrong-meta';
    const sm = SEC_META[cat.section || it.section] || {};
    const badgeStyle = sm.badgeFrom && sm.badgeTo
      ? ' style="background:linear-gradient(135deg,' + sm.badgeFrom + ',' + sm.badgeTo + ')"'
      : '';
    const unitText = sm.showUnitNo === false ? it.unitTitle : ('单元 ' + it.unit);
    meta.innerHTML = '<span class="badge sec-badge"' + badgeStyle + '>' + esc(cat.name) + '</span>' +
      '<span class="badge ghost">' + esc(TYPE_NAME[it.type] || it.type) + '</span>' +
      '<span class="badge ghost">' + esc(unitText) + '</span>' +
      '<span class="badge ghost">错 ' + (r.w || 0) + ' 次</span>' +
      '<span class="badge streak-badge">连对 ' + Math.min(2, r.streak || 0) + '/2</span>';
    card.appendChild(meta);

    const q = document.createElement('div');
    q.className = 'wrong-q';
    q.innerHTML = qHtml(it);
    card.appendChild(q);

    if (r.ans) {
      const mine = document.createElement('div');
      mine.className = 'wrong-line bad';
      mine.innerHTML = '你的答案：<b>' + esc(r.ans) + '</b>';
      card.appendChild(mine);
    }
    const right = answerText(it);
    if (right) {
      const good = document.createElement('div');
      good.className = 'wrong-line good';
      good.innerHTML = '正确答案：<b>' + esc(right) + '</b>';
      card.appendChild(good);
    }
    if (it.ref) {
      const ref = document.createElement('div');
      ref.className = 'wrong-line';
      ref.innerHTML = '参考要点：<b>' + esc(it.ref).replace(/\n/g, '<br>') + '</b>';
      card.appendChild(ref);
    }
    if (it.explain) {
      const exp = document.createElement('div');
      exp.className = 'wrong-exp';
      exp.innerHTML = '解析：' + fmt(it.explain);
      card.appendChild(exp);
    }

    const actions = document.createElement('div');
    actions.className = 'wrong-actions';
    const redo = document.createElement('button');
    redo.className = 'redo';
    redo.textContent = '重做这道';
    redo.addEventListener('click', () => {
      state.cat = it.cat;
      state.type = 'all';
      state.stat = 'all';
      state.mode = 'order';
      setView('quiz');
      const p = state.deck.findIndex(x => x.id === it.id);
      if (p >= 0) { state.idx = p; renderQuestion(); }
      toast('已定位到该题');
    });
    const master = document.createElement('button');
    master.className = 'master';
    master.textContent = '标记已掌握';
    master.addEventListener('click', () => {
      const rec = store.quiz[it.id];
      if (rec) {
        // 手动掌握 = 直接毕业，并排到 7 天后复习
        rec.last = 'right';
        rec.streak = SRS.GRADUATE_STREAK;
        rec.graduated = true;
        rec.interval = 7;
        rec.dueAt = Date.now() + 7 * DAY;
        save();
      }
      renderHeader();
      renderSidebar();
      renderWrong();
      toast('已移出错题本（归档在“已毕业”）');
    });
    actions.appendChild(redo);
    actions.appendChild(master);
    card.appendChild(actions);
    return card;
  }

  /* ---------------- stats ---------------- */
  function jumpCat(key) {
    state.cat = key;
    state.type = 'all';
    state.stat = 'all';
    state.mode = 'order';
    setView('quiz');
    toast('已切换到该分类');
  }

  function renderStats() {
    const body = $('statsBody');
    body.innerHTML = '';

    const t = totals();
    const overview = document.createElement('div');
    overview.className = 'stat-grid';
    overview.innerHTML =
      panel('总览', [
        ['已做 / 总题', t.done + ' / ' + t.total, t.total ? t.done / t.total * 100 : 0],
        ['正确率', t.accuracy == null ? '--' : t.accuracy + '%', t.accuracy == null ? 0 : t.accuracy]
      ]) +
      panel('复习队列', [
        ['今日已练', store.daily.count + ' / ' + store.goal, Math.min(100, store.daily.count / store.goal * 100)],
        ['待复习', String(t.due), t.total ? t.due / t.total * 100 : 0]
      ]);
    body.appendChild(overview);

    /* ---- 学习热力图 / 趋势 / 单元薄弱 / 剩余复习量 ---- */
    body.appendChild(heatmapPanel());
    body.appendChild(trendPanel());
    body.appendChild(unitPanel());
    body.appendChild(duePanel());

    // 跨方向汇总：只读各方向的记录与清单计数，不加载其它方向内容
    const allDirs = Array.isArray(window.DIRS) ? window.DIRS : [];
    if (allDirs.length > 1) {
      const box = document.createElement('div');
      box.className = 'stat-panel';
      box.style.marginTop = '14px';
      let html = '<h3>全部方向</h3>';
      allDirs.forEach(d => {
        const st = Store.data.dirs[d.key] || {};
        const done = Object.keys(st.quiz || {}).length;
        const total = (d.counts && d.counts.quiz) || 0;
        const pct = total ? Math.min(100, done / total * 100) : 0;
        html += '<div class="stat-title-row"><span>' + esc(d.title) +
          ' <small style="color:var(--text-faint)">' + done + ' / ' + total + ' 题</small></span>' +
          '<span class="stat-right"><b>' + (total ? Math.round(done / total * 100) : 0) + '%</b></span></div>' +
          '<div class="stat-bar"><i style="width:' + pct + '%"></i></div>';
      });
      box.innerHTML = html;
      body.appendChild(box);
    }

    const acc = catAccMap();
    const byCat = document.createElement('div');
    byCat.className = 'stat-panel';
    byCat.style.marginTop = '14px';
    byCat.innerHTML = '<h3>按分类 · 薄弱优先</h3>';
    const rows = GROUPS.map(cat => {
      const a = acc[cat.key] || { done: 0, total: 0, acc: null };
      return { cat, items: a.total, done: a.done, acc: a.acc };
    }).sort((x, y) => {
      const xa = x.acc == null ? 101 : x.acc;
      const ya = y.acc == null ? 101 : y.acc;
      return xa - ya;
    });
    rows.forEach(row => byCat.appendChild(statRow(
      row.cat.name,
      row.done + '/' + row.items + ' 题',
      row.acc,
      row.cat.key
    )));
    body.appendChild(byCat);

    const byType = document.createElement('div');
    byType.className = 'stat-panel';
    byType.style.marginTop = '14px';
    byType.innerHTML = '<h3>按题型</h3>';
    ['single', 'multi', 'fill', 'code'].forEach(tp => {
      const items = ITEMS.filter(it => it.type === tp);
      let attempts = 0, wins = 0, done = 0;
      items.forEach(it => {
        const r = recOf(it.id);
        if (!r) return;
        done++;
        attempts += (r.r || 0) + (r.w || 0);
        wins += (r.r || 0);
      });
      byType.appendChild(statRow(TYPE_NAME[tp], done + '/' + items.length + ' 题', attempts ? Math.round(wins / attempts * 100) : null, null));
    });
    body.appendChild(byType);

    const weak = rows.filter(r => r.acc != null).slice(0, 3);
    const tip = document.createElement('div');
    tip.className = 'stat-panel';
    tip.style.marginTop = '14px';
    if (weak.length) {
      tip.innerHTML = '<h3>优先补强</h3><p class="weak-tip">' +
        weak.map(w => '<b>' + esc(w.cat.name) + '</b>（正确率 ' + w.acc + '%，已做 ' + w.done + ' 题）').join('；') +
        '。点对应分类的“去刷题”，或直接用“智能组卷”自动抽弱项题。</p>';
    } else {
      tip.innerHTML = '<h3>优先补强</h3><p class="weak-tip">做过题之后，这里会按正确率从低到高给出补强顺序。</p>';
    }
    body.appendChild(tip);

    function panel(title, rows2) {
      let html = '<div class="stat-panel"><h3>' + title + '</h3>';
      rows2.forEach(([label, value, pct]) => {
        html += '<div class="stat-title-row"><span>' + label + '</span><b>' + value + '</b></div>' +
          '<div class="stat-bar"><i style="width:' + Math.max(0, Math.min(100, pct)) + '%"></i></div>';
      });
      return html + '</div>';
    }
  }

  function statRow(name, sub, acc, catKey) {
    const row = document.createElement('div');
    const pct = acc == null ? 0 : acc;
    const cls = acc == null ? '' : (acc < 60 ? 'low' : (acc < 80 ? 'mid' : ''));
    row.innerHTML = '<div class="stat-title-row"><span>' + esc(name) +
      ' <small style="color:var(--text-faint)">' + esc(sub) + '</small></span>' +
      '<span class="stat-right"><b>' + (acc == null ? '--' : acc + '%') + '</b>' +
      (catKey ? '<button type="button" class="stat-go">去刷题</button>' : '') + '</span></div>' +
      '<div class="stat-bar ' + cls + '"><i style="width:' + pct + '%"></i></div>';
    const go = row.querySelector('.stat-go');
    if (go) go.addEventListener('click', () => jumpCat(catKey));
    return row;
  }

  /* ---- 统计可视化（B6） ---- */

  // 按天索引：历史 + 今天
  function dayStatsMap() {
    const m = {};
    (store.daily.history || []).forEach(h => {
      if (h && typeof h.date === 'string') {
        m[h.date] = { count: h.count || 0, right: h.right || 0, wrong: h.wrong || 0 };
      }
    });
    m[store.daily.date] = {
      count: store.daily.count || 0,
      right: store.daily.right || 0,
      wrong: store.daily.wrong || 0
    };
    return m;
  }

  // 最近 12 周热力图：每列一周（周一起），颜色深度按当日完成量 / 目标
  function heatmapPanel() {
    const m = dayStatsMap();
    const goal = store.goal || 20;
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 83);
    const dow = (start.getDay() + 6) % 7; // 0 = 周一
    start.setDate(start.getDate() - dow);
    const cells = [];
    for (let i = 0; i < 84 + dow; i++) {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      if (d > today) break;
      const key = d.toLocaleDateString('sv-SE');
      const s = m[key];
      const n = s ? s.count : 0;
      const lv = n === 0 ? 0 : n < goal * 0.25 ? 1 : n < goal * 0.5 ? 2 : n < goal ? 3 : 4;
      const tip = key + ' · ' + n + ' 题' + (s && (s.right || s.wrong) ? ' · 对 ' + s.right + ' 错 ' + s.wrong : '');
      cells.push('<i class="hm-cell lv' + lv + '" title="' + tip + '"></i>');
    }
    const wrap = document.createElement('div');
    wrap.className = 'stat-panel';
    wrap.style.marginTop = '14px';
    wrap.innerHTML = '<h3>学习热力图 · 最近 12 周</h3>' +
      '<div class="heatmap">' + cells.join('') + '</div>' +
      '<div class="hm-legend"><span>少</span>' +
      '<i class="hm-cell lv0"></i><i class="hm-cell lv1"></i><i class="hm-cell lv2"></i><i class="hm-cell lv3"></i><i class="hm-cell lv4"></i>' +
      '<span>多</span><em>目标 ' + goal + ' 题/天</em></div>';
    return wrap;
  }

  function trendData(days) {
    const m = dayStatsMap();
    const out = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toLocaleDateString('sv-SE');
      const s = m[key];
      const n = s ? (s.right + s.wrong) : 0;
      out.push({ date: key, n: n, acc: n ? Math.round(s.right / n * 100) : null });
    }
    return out;
  }

  function sparkSvg(list) {
    const w = 300, h = 70, pad = 6;
    const step = list.length > 1 ? (w - 2 * pad) / (list.length - 1) : 0;
    const pts = list.map((d, i) => d.acc == null ? null : [pad + i * step, pad + (100 - d.acc) / 100 * (h - 2 * pad)]);
    const segs = [];
    let buf = [];
    pts.forEach(p => {
      if (p) buf.push(p);
      else if (buf.length) { segs.push(buf); buf = []; }
    });
    if (buf.length) segs.push(buf);
    const paths = segs.map(seg =>
      '<polyline points="' + seg.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ') + '" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>'
    ).join('');
    return '<svg class="spark" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none">' +
      '<line x1="0" y1="' + (h - pad) + '" x2="' + w + '" y2="' + (h - pad) + '" stroke="var(--border)" stroke-width="1"/>' +
      paths + '</svg>';
  }

  function trendPanel() {
    const d7 = trendData(7), d30 = trendData(30);
    const avg = list => {
      const a = list.filter(x => x.acc != null);
      return a.length ? Math.round(a.reduce((s, x) => s + x.acc, 0) / a.length) : null;
    };
    const row = (label, list) =>
      '<div class="trend-row"><div class="trend-label">' + label +
      '<small>有效 ' + list.filter(x => x.acc != null).length + ' 天</small></div>' +
      sparkSvg(list) + '<b>' + (avg(list) == null ? '--' : avg(list) + '%') + '</b></div>';
    const wrap = document.createElement('div');
    wrap.className = 'stat-panel';
    wrap.style.marginTop = '14px';
    wrap.innerHTML = '<h3>正确率趋势</h3>' + row('最近 7 天', d7) + row('最近 30 天', d30) +
      '<p class="trend-tip">按天统计当日对/错；没做题的日子留空，不按 0 分计算。</p>';
    return wrap;
  }

  function unitPanel() {
    const acc = unitAccMap();
    const rows = Object.keys(acc).map(k => acc[k])
      .filter(u => u.attempts > 0)
      .sort((a, b) => a.acc - b.acc)
      .slice(0, 12);
    const wrap = document.createElement('div');
    wrap.className = 'stat-panel';
    wrap.style.marginTop = '14px';
    wrap.innerHTML = '<h3>按单元 · 薄弱优先（TOP 12）</h3>';
    if (!rows.length) {
      const p = document.createElement('p');
      p.className = 'weak-tip';
      p.textContent = '做过题之后，这里会按单元正确率从低到高列出最该补的单元。';
      wrap.appendChild(p);
    } else {
      rows.forEach(u => {
        wrap.appendChild(statRow(u.title || ('单元 ' + u.unit), '已做 ' + u.done + '/' + u.total + ' 题', u.acc, null));
      });
    }
    return wrap;
  }

  function duePanel() {
    const now = Date.now();
    const b = { today: 0, d1: 0, d3: 0, d7: 0, later: 0 };
    Object.keys(store.quiz).forEach(id => {
      const r = store.quiz[id];
      if (!r || !r.dueAt) return;
      const diff = r.dueAt - now;
      if (diff <= 0) b.today++;
      else if (diff <= DAY) b.d1++;
      else if (diff <= 3 * DAY) b.d3++;
      else if (diff <= 7 * DAY) b.d7++;
      else b.later++;
    });
    const max = Math.max(1, b.today, b.d1, b.d3, b.d7, b.later);
    const line = (label, n) =>
      '<div class="stat-title-row"><span>' + label + '</span><b>' + n + ' 题</b></div>' +
      '<div class="stat-bar"><i style="width:' + (n / max * 100) + '%"></i></div>';
    const wrap = document.createElement('div');
    wrap.className = 'stat-panel';
    wrap.style.marginTop = '14px';
    wrap.innerHTML = '<h3>剩余复习量 · 按到期时间</h3>' +
      line('今天到期', b.today) + line('1 天内', b.d1) + line('3 天内', b.d3) +
      line('7 天内', b.d7) + line('更久', b.later) +
      '<p class="trend-tip">答错的题当天到期；答对的题按 1/3/7/30/60 天依次拉长。</p>';
    return wrap;
  }

  /* ---------------- view switch ---------------- */
  function renderAll() {
    if (state.view === 'quiz') renderQuestion();
    if (state.view === 'wrong') renderWrong();
    if (state.view === 'stats') renderStats();
    renderHeader();
    renderSidebar();
  }

  function setView(v) {
    state.view = v;
    $('quizView').hidden = v !== 'quiz';
    $('wrongView').hidden = v !== 'wrong';
    $('statsView').hidden = v !== 'stats';
    $('examView').hidden = v !== 'exam';
    document.querySelectorAll('#topNav button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
    if (v === 'quiz') { buildDeck(true); renderQuestion(); }
    if (v === 'wrong') renderWrong();
    if (v === 'stats') renderStats();
    if (v === 'exam') renderExam();
    renderHeader();
    renderSidebar();
    closeSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openSidebar() { $('sidebar').classList.add('open'); $('scrim').classList.add('show'); }
  function closeSidebar() { $('sidebar').classList.remove('open'); $('scrim').classList.remove('show'); }

  function applyFilter() {
    buildDeck(false);
    if (state.view !== 'quiz') setView('quiz');
    else { renderQuestion(); renderToolbar(); renderHeader(); renderSidebar(); }
    closeSidebar();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = Store.data.theme;
  }

  /* ---------------- data io ---------------- */
  function exportData() {
    const payload = {
      dirs: {}
    };
    payload.dirs[DIR] = {
      quiz: store.quiz,
      quizFav: store.quizFav,
      drafts: store.drafts,
      daily: store.daily,
      streak: store.streak,
      goal: store.goal
    };
    const data = { app: 'quiz', version: 4, dir: DIR, exportedAt: new Date().toISOString(), payload: payload };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uecpp-检测题记录-' + todayStr() + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    toast('记录已导出');
  }

  function importData(file) {
    const fr = new FileReader();
    fr.onload = () => {
      let n = 0;
      try {
        const raw = JSON.parse(String(fr.result));
        const inc = raw && raw.payload ? raw.payload : raw;
        if (!inc || typeof inc !== 'object') throw new Error('bad');

        let records = null, fav = null, daily = null, streak = null;
        if (inc.records && typeof inc.records === 'object') {
          // 旧版导出：payload 就是旧 store
          records = inc.records;
          fav = inc.fav;
          daily = inc.daily;
          streak = inc.streak;
        } else if (inc.dirs && typeof inc.dirs === 'object') {
          const t = inc.dirs[DIR] || inc.dirs[Object.keys(inc.dirs)[0]];
          if (t) {
            records = t.quiz || t.records;
            fav = t.quizFav || t.fav;
            daily = t.daily;
            streak = t.streak;
          }
        }
        if (!records || typeof records !== 'object') throw new Error('bad');

        const known = {};
        ITEMS.forEach(it => { known[it.id] = true; });
        Object.keys(records).forEach(id => {
          if (!known[id]) return;
          const b = records[id];
          if (!b || typeof b !== 'object') return;
          // 旧导出没有毕业字段：按迁移规则补齐，保证错题本口径一致
          if (typeof b.streak !== 'number') b.streak = b.last === 'right' ? 2 : 0;
          if (typeof b.graduated !== 'boolean') b.graduated = b.last === 'right';
          const a = store.quiz[id];
          if (!a || (b.ts || 0) >= (a.ts || 0)) { store.quiz[id] = b; n++; }
        });
        if (Array.isArray(fav)) {
          fav.forEach(id => {
            if (typeof id === 'string' && known[id] && store.quizFav.indexOf(id) < 0) store.quizFav.push(id);
          });
        }
        if (daily && daily.date === todayStr() && typeof daily.count === 'number') {
          store.daily.count = Math.max(store.daily.count, daily.count);
        }
        if (daily && Array.isArray(daily.history)) {
          // 合并历史：同一天以导入的为准，最多保留 90 天
          const byDate = {};
          store.daily.history.concat(daily.history).forEach(h => {
            if (h && typeof h.date === 'string') byDate[h.date] = h;
          });
          store.daily.history = Object.keys(byDate).sort().slice(-90).map(k => byDate[k]);
        }
        if (streak && typeof streak.days === 'number' && streak.days > (store.streak.days || 0)) {
          store.streak = streak;
        }
        save();
        buildDeck(true);
        renderAll();
        toast('已合并导入 ' + n + ' 条记录');
      } catch (err) {
        toast('文件格式不正确');
      }
    };
    fr.readAsText(file);
  }

  /* ---------------- 组卷配置 / 模考 ---------------- */
  function fmtClock(sec) {
    const s = Math.max(0, sec | 0);
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }

  function openBuildPanel(show) {
    $('buildPanel').hidden = !show;
  }

  function startExam() {
    // 模考只取能自动判分的题型，范围跟随当前分类/搜索筛选
    const pool = pickByConfig(ITEMS.filter(matches), false);
    if (!pool.length) { toast('当前筛选下没有可模考的题'); return; }
    // 组卷只用元数据；开考前把抽中题所在的分类包补齐（通常就 1–2 个）
    const need = [];
    pool.forEach(it => { if (it.cat && need.indexOf(it.cat) < 0) need.push(it.cat); });
    if (!loadedAll(need)) {
      toast('正在载入模考题目…');
      ensureCats(need).then(beginExam, () => toast('模考内容包加载失败，请重试'));
      return;
    }
    beginExam();

    function beginExam() {
      const secs = build.limit * 60;
      exam = {
        items: pool,
        picks: {},
        fills: {},
        idx: 0,
        submitted: false,
        startedAt: Date.now(),
        endsAt: secs ? Date.now() + secs * 1000 : 0
      };
      $('examResult').hidden = true;
      $('examResult').innerHTML = '';
      $('examCard').hidden = false;
      $('examTab').hidden = false;
      $('buildPanel').hidden = true;
      setView('exam');
      startExamTimer();
      toast('模考开始 · ' + pool.length + ' 题' + (build.limit ? ' · ' + build.limit + ' 分钟' : ' · 不限时'));
    }
  }

  function startExamTimer() {
    clearInterval(examTimer);
    paintClock();
    examTimer = setInterval(() => {
      if (!exam || exam.submitted) { clearInterval(examTimer); examTimer = null; return; }
      paintClock();
      if (exam.endsAt && Date.now() >= exam.endsAt) finishExam(true);
    }, 1000);
  }

  function paintClock() {
    if (!exam) { $('examClock').textContent = '--:--'; return; }
    const sec = exam.endsAt
      ? Math.max(0, Math.ceil((exam.endsAt - Date.now()) / 1000))
      : Math.floor((Date.now() - exam.startedAt) / 1000);
    $('examClock').textContent = fmtClock(sec);
    $('examClockLabel').textContent = exam.endsAt ? '剩余' : '用时';
    const box = $('examClock').parentNode;
    if (box) box.classList.toggle('danger', !!exam.endsAt && sec <= 60);
  }

  function answeredExam(it) {
    if (!exam) return false;
    if (it.type === 'fill') return !!(exam.fills[it.id] || '').trim();
    return (exam.picks[it.id] || []).length > 0;
  }

  function examAnswerOf(it) {
    if (it.type === 'fill') return (exam.fills[it.id] || '').trim();
    return (exam.picks[it.id] || []).slice().sort((a, b) => a - b).map(i => LETTER[i]).join('');
  }

  function gradeExam(it) {
    if (!answeredExam(it)) return null;
    if (it.type === 'fill') {
      const want = Array.isArray(it.answer) ? it.answer[0] : it.answer;
      return norm(examAnswerOf(it)) === norm(want);
    }
    const want = (Array.isArray(it.answer) ? it.answer : [it.answer]).slice().sort((a, b) => a - b);
    const got = (exam.picks[it.id] || []).slice().sort((a, b) => a - b);
    if (want.length !== got.length) return false;
    for (let i = 0; i < want.length; i++) if (want[i] !== got[i]) return false;
    return true;
  }

  function examGo(d) {
    if (!exam) return;
    const n = exam.idx + d;
    if (n < 0 || n >= exam.items.length) return;
    exam.idx = n;
    renderExam();
  }

  function paintDots() {
    if (!exam) return;
    const host = $('examDots');
    host.innerHTML = '';
    exam.items.forEach((it, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'exam-dot' + (i === exam.idx ? ' cur' : '') + (answeredExam(it) ? ' done' : '');
      b.textContent = i + 1;
      b.addEventListener('click', () => { exam.idx = i; renderExam(); });
      host.appendChild(b);
    });
  }

  function renderExam() {
    if (!exam) {
      $('examCard').hidden = true;
      $('examResult').hidden = false;
      $('examResult').innerHTML = '<p class="er-empty">还没有进行中的模考。去刷题页点“组卷 → 开始模考”。</p>';
      return;
    }
    if (exam.submitted) return; // 成绩单已渲染，不要覆盖
    const it = exam.items[exam.idx];
    if (!it) return;
    const total = exam.items.length;
    $('examPos').textContent = (exam.idx + 1) + ' / ' + total;
    const cat = catOf(it);
    const sm = SEC_META[cat.section || it.section] || {};
    $('examCat').textContent = cat.name;
    $('examCat').style.background = sm.badgeFrom && sm.badgeTo
      ? 'linear-gradient(135deg,' + sm.badgeFrom + ',' + sm.badgeTo + ')' : '';
    $('examUnit').textContent = sm.showUnitNo === false ? it.unitTitle : ('单元 ' + it.unit);
    $('examType').textContent = TYPE_NAME[it.type] || it.type;
    $('examType').className = 'badge t-' + it.type;
    $('examQText').innerHTML = qHtml(it);

    const body = $('examQBody');
    body.innerHTML = '';
    const picked = exam.picks[it.id] || [];
    if (it.type === 'fill') {
      const input = document.createElement('input');
      input.className = 'fill-input';
      input.type = 'text';
      input.placeholder = '输入答案，Enter 进入下一题';
      input.value = exam.fills[it.id] || '';
      input.addEventListener('input', () => { exam.fills[it.id] = input.value; paintDots(); });
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); examGo(1); }
      });
      body.appendChild(input);
    } else {
      const wrap = document.createElement('div');
      wrap.className = 'options';
      (it.options || []).forEach((op, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'option' + (picked.indexOf(i) >= 0 ? ' picked' : '');
        b.innerHTML = '<span class="opt-k">' + LETTER[i] + '</span><span class="opt-t">' + inline(op) + '</span>';
        b.addEventListener('click', () => {
          if (exam.submitted) return;
          const arr = exam.picks[it.id] || (exam.picks[it.id] = []);
          if (it.type === 'multi') {
            const p = arr.indexOf(i);
            if (p >= 0) arr.splice(p, 1); else arr.push(i);
          } else {
            arr.length = 0;
            arr.push(i);
          }
          renderExam();
        });
        wrap.appendChild(b);
      });
      body.appendChild(wrap);
    }
    $('examPrev').disabled = exam.idx <= 0;
    $('examNext').disabled = exam.idx >= total - 1;
    paintDots();
    paintClock();
  }

  function rightAnswerText(it) {
    if (it.type === 'fill') return String(Array.isArray(it.answer) ? it.answer[0] : it.answer);
    return (Array.isArray(it.answer) ? it.answer : [it.answer])
      .slice().sort((a, b) => a - b).map(i => LETTER[i]).join('');
  }

  function finishExam(auto) {
    if (!exam || exam.submitted) return;
    if (!auto && !confirm('现在交卷？未作答的题按错计。')) return;
    exam.submitted = true;
    clearInterval(examTimer);
    examTimer = null;
    let right = 0, wrong = 0, blank = 0;
    exam.items.forEach(it => {
      const res = gradeExam(it);
      if (res === null) { blank++; return; }
      if (res) right++; else wrong++;
      // 只记录已作答的题，未作答不污染 SRS
      record(it.id, res, res ? '' : examAnswerOf(it));
    });
    renderHeader();
    renderSidebar();
    renderExamResult({ right: right, wrong: wrong, blank: blank, auto: !!auto });
    $('examCard').hidden = true;
    $('examResult').hidden = false;
    $('examPos').textContent = exam.items.length + ' / ' + exam.items.length;
  }

  function renderExamResult(st) {
    const total = exam.items.length;
    const score = Math.round(st.right / total * 100);
    const used = Math.max(0, Math.round((Date.now() - exam.startedAt) / 1000));
    const verdict = score >= 85 ? '很稳' : score >= 70 ? '基本过关' : score >= 60 ? '刚过线' : '还需要回炉';
    const rows = exam.items.map((it, i) => {
      const res = gradeExam(it);
      const cls = res === null ? 'blank' : res ? 'ok' : 'no';
      const tag = res === null ? '未答' : res ? '对' : '错';
      const q = String(it.q || '');
      return '<details class="er-item ' + cls + '">' +
        '<summary><span class="er-tag">' + tag + '</span><span class="er-no">' + (i + 1) + '</span>' +
        '<span class="er-q">' + esc(q.slice(0, 60)) + (q.length > 60 ? '…' : '') + '</span></summary>' +
        '<div class="er-body">' + qHtml(it) +
        '<p class="er-line">你的答案：<b>' + esc(examAnswerOf(it) || '未作答') + '</b></p>' +
        '<p class="er-line">正确答案：<b>' + esc(rightAnswerText(it)) + '</b></p></div></details>';
    }).join('');
    $('examResult').innerHTML =
      '<div class="er-head"><h3>模考成绩单</h3>' +
      '<div class="er-score"><b>' + score + '</b><span>分 · ' + verdict + '</span></div>' +
      '<div class="er-meta">共 ' + total + ' 题 · 对 ' + st.right + ' · 错 ' + st.wrong + ' · 未答 ' + st.blank +
      ' · 用时 ' + fmtClock(used) + (st.auto ? ' · 时间到自动交卷' : '') + '</div>' +
      '<div class="er-actions"><button class="primary-btn small" id="examAgain">再考一次</button>' +
      '<button class="ghost-btn small" id="examBack">返回刷题</button></div></div>' +
      '<div class="er-list">' + rows + '</div>';
    $('examAgain').addEventListener('click', () => { exam = null; startExam(); });
    $('examBack').addEventListener('click', () => {
      exam = null;
      $('examTab').hidden = true;
      setView('quiz');
    });
  }

  function quitExam() {
    if (!exam) { $('examTab').hidden = true; setView('quiz'); return; }
    if (!exam.submitted && !confirm('退出后本次模考作答不会保存，确定退出？')) return;
    clearInterval(examTimer);
    examTimer = null;
    exam = null;
    $('examTab').hidden = true;
    $('examResult').hidden = true;
    $('examResult').innerHTML = '';
    $('examCard').hidden = false;
    setView('quiz');
  }

  /* ---------------- events ---------------- */
  $('menuBtn').addEventListener('click', openSidebar);
  $('closeBtn').addEventListener('click', closeSidebar);
  $('scrim').addEventListener('click', closeSidebar);

  $('themeBtn').addEventListener('click', () => {
    Store.data.theme = Store.data.theme === 'light' ? 'dark' : 'light';
    save();
    applyTheme();
  });

  document.querySelectorAll('#topNav button').forEach(b => {
    b.addEventListener('click', () => setView(b.dataset.view));
  });

  document.querySelectorAll('#modeSwitch .mode').forEach(b => {
    b.addEventListener('click', () => {
      state.mode = b.dataset.mode;
      buildDeck(false);
      renderAll();
      if (state.mode === 'wrong' && !state.deck.length) toast('还没有错题，先做几题吧');
      if (state.mode === 'review' && !state.deck.length) toast('复习队列是空的，明天再来看看');
      if (state.mode === 'smart') {
        openBuildPanel(true);
        toast(state.deck.length ? '已按当前配置组卷 · ' + state.deck.length + ' 题' : '当前筛选下没有符合条件的题');
      }
    });
  });

  document.querySelectorAll('#typeFilter .chip').forEach(b => {
    b.addEventListener('click', () => {
      state.type = b.dataset.type;
      applyFilter();
    });
  });

  document.querySelectorAll('#prioFilter .chip').forEach(b => {
    b.addEventListener('click', () => {
      state.prio = b.dataset.prio;
      applyFilter();
    });
  });

  document.querySelectorAll('#stateFilter .chip').forEach(b => {
    b.addEventListener('click', () => {
      state.stat = b.dataset.state;
      applyFilter();
    });
  });

  document.querySelectorAll('#wrongTypeFilter .chip').forEach(b => {
    b.addEventListener('click', () => { wrongType = b.dataset.type; renderWrong(); });
  });

  let searchTimer = null;
  $('quizSearch').addEventListener('input', e => {
    clearTimeout(searchTimer);
    const v = e.target.value.trim().toLowerCase();
    searchTimer = setTimeout(() => {
      state.search = v;
      // 全文搜索要跨全部分类比对题干/选项/解析：先补齐正文再筛
      if (v && !loadedAll(GROUPS.map(g => g.key))) {
        toast('正在载入全部题目用于搜索…');
        ensureAll().then(applyFilter, () => { toast('搜索内容加载失败'); applyFilter(); });
        return;
      }
      applyFilter();
    }, 160);
  });

  $('favBtn').addEventListener('click', () => {
    const it = curItem();
    if (!it) return;
    const i = store.quizFav.indexOf(it.id);
    if (i >= 0) { store.quizFav.splice(i, 1); toast('已取消收藏'); }
    else { store.quizFav.push(it.id); toast('已收藏'); }
    save();
    const fav = i < 0;
    $('favBtn').textContent = fav ? '★' : '☆';
    $('favBtn').classList.toggle('on', fav);
    if (state.stat === 'fav') { buildDeck(true); renderAll(); }
  });

  $('restartBtn').addEventListener('click', () => { buildDeck(false); renderAll(); toast('已重开本轮'); });

  /* ---- 组卷配置 ---- */
  $('buildBtn').addEventListener('click', () => openBuildPanel($('buildPanel').hidden));
  $('bpClose').addEventListener('click', () => openBuildPanel(false));
  $('bpBuild').addEventListener('click', () => {
    state.mode = 'smart';
    document.querySelectorAll('#modeSwitch .mode').forEach(x => x.classList.toggle('active', x.dataset.mode === 'smart'));
    if (state.view !== 'quiz') setView('quiz');
    else { buildDeck(false); renderAll(); }
    openBuildPanel(false);
    toast(state.deck.length ? '已按配置组出 ' + state.deck.length + ' 题' : '当前筛选下没有符合条件的题');
  });
  $('bpExam').addEventListener('click', startExam);
  document.querySelectorAll('#bpCount .chip').forEach(b => {
    b.addEventListener('click', () => {
      build.count = Number(b.dataset.count) || 20;
      document.querySelectorAll('#bpCount .chip').forEach(x => x.classList.toggle('active', x === b));
    });
  });
  document.querySelectorAll('#bpDiff .chip').forEach(b => {
    b.addEventListener('click', () => {
      build.diff = b.dataset.diff;
      document.querySelectorAll('#bpDiff .chip').forEach(x => x.classList.toggle('active', x === b));
    });
  });
  document.querySelectorAll('#bpLimit .chip').forEach(b => {
    b.addEventListener('click', () => {
      build.limit = Number(b.dataset.limit) || 0;
      document.querySelectorAll('#bpLimit .chip').forEach(x => x.classList.toggle('active', x === b));
    });
  });
  document.querySelectorAll('#bpType .chip').forEach(b => {
    b.addEventListener('click', () => {
      const t = b.dataset.type;
      const i = build.types.indexOf(t);
      if (i >= 0) {
        if (build.types.length === 1) { toast('至少保留一种题型'); return; }
        build.types.splice(i, 1);
      } else {
        build.types.push(t);
      }
      b.classList.toggle('active', build.types.indexOf(t) >= 0);
    });
  });

  /* ---- 模考 ---- */
  $('examPrev').addEventListener('click', () => examGo(-1));
  $('examNext').addEventListener('click', () => examGo(1));
  $('examSubmitBtn').addEventListener('click', () => finishExam(false));
  $('examQuitBtn').addEventListener('click', quitExam);
  function startDueReview() {
    state.mode = 'review';
    state.stat = 'all';
    state.type = 'all';
    state.cat = 'all';
    state.search = '';
    $('quizSearch').value = '';
    document.querySelectorAll('#modeSwitch .mode').forEach(x => x.classList.toggle('active', x.dataset.mode === 'review'));
    buildDeck(false);
    setView('quiz');
    if (!state.deck.length) toast('复习队列是空的');
  }
  $('dueBtn').addEventListener('click', startDueReview);
  $('dueStripBtn').addEventListener('click', startDueReview);
  $('submitBtn').addEventListener('click', submit);
  $('skipBtn').addEventListener('click', () => {
    if (state.idx >= state.deck.length - 1) { toast('已经是最后一题'); return; }
    go(1);
  });
  $('nextBtn').addEventListener('click', () => {
    if (state.idx >= state.deck.length - 1) {
      toast('本轮完成，可以切分类或点“重开本轮”');
      return;
    }
    go(1);
  });
  $('prevBtn').addEventListener('click', () => go(-1));
  $('nextNav').addEventListener('click', () => go(1));

  $('exportBtn').addEventListener('click', exportData);
  $('importBtn').addEventListener('click', () => $('importFile').click());
  $('importFile').addEventListener('change', e => {
    const f = e.target.files && e.target.files[0];
    if (f) importData(f);
    e.target.value = '';
  });

  $('resetBtn').addEventListener('click', () => {
    if (!confirm('确定清空「' + (META.title || DIR) + '」的做题记录、收藏、草稿与错题本？')) return;
    store.quiz = {};
    store.quizFav = [];
    store.drafts = {};
    store.daily.date = todayStr();
    store.daily.count = 0;
    store.daily.ids = [];
    store.daily.right = 0;
    store.daily.wrong = 0;
    store.streak = { days: 0, last: '' };
    save();
    buildDeck(false);
    renderAll();
    toast('记录已清空');
  });

  document.addEventListener('keydown', e => {
    if (state.view !== 'quiz') return;
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea';
    if (typing) return;

    const it = curItem();
    if (!it) return;

    if (e.key >= '1' && e.key <= '6' && !state.answered) {
      const i = Number(e.key) - 1;
      if (i < (it.options || []).length) {
        if (it.type === 'single') state.picked = [i];
        else if (it.type === 'multi') {
          const p = state.picked.indexOf(i);
          if (p >= 0) state.picked.splice(p, 1); else state.picked.push(i);
        }
        syncOptions();
        e.preventDefault();
      }
      return;
    }
    if (e.key === 'Enter') {
      if (!state.answered) submit();
      else if (state.idx < state.deck.length - 1) go(1);
      else toast('本轮完成');
      e.preventDefault();
      return;
    }
    if (e.key.toLowerCase() === 'f') { $('favBtn').click(); e.preventDefault(); return; }
    if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
  });

  /* ---------------- boot ---------------- */
    applyTheme();
    const sub = $('bankSub');
    if (sub) {
      const c = META.counts || {};
      sub.textContent = (c.quizGroups || GROUPS.length) + ' 章 · ' + (c.units || 0) + ' 单元 · ' +
        ITEMS.length + ' 题 · 单选 / 多选 / 填空 / 编程';
    }

    // 从深读跳转过来：?unit=N&sec=cpp 只练本单元
    const qp = new URLSearchParams(location.search);
    const focusUnit = Number(qp.get('unit') || 0);
    const focusSec = qp.get('sec') || '';
    if (focusUnit && (focusSec === 'cpp' || focusSec === 'ue')) {
      const pool = ITEMS.filter(it => it.section === focusSec && it.unit === focusUnit);
      const sample = pool[0];
      if (sample) {
        state.unitFocus = { sec: focusSec, unit: focusUnit };
        state.cat = 'all';
        state.type = 'all';
        state.stat = 'all';
        state.mode = 'order';
        state.search = '';
        const strip = $('focusStrip');
        if (strip) {
          strip.hidden = false;
          $('focusText').textContent = '已定位到单元 ' + focusUnit +
            (sample.unitTitle ? ' · ' + sample.unitTitle : '') + '（' + pool.length + ' 题）';
          // 从深读跳来：提供回链，回到原单元
          if (qp.get('from') === 'deep') {
            let back = $('focusBack');
            if (!back) {
              back = document.createElement('a');
              back.id = 'focusBack';
              back.className = 'focus-back';
              strip.insertBefore(back, $('focusClear'));
            }
            back.href = 'deep.html?dir=' + encodeURIComponent(DIR) + '&sec=' + focusSec + '&unit=' + focusUnit;
            back.textContent = '← 回到深读 · 单元 ' + focusUnit;
          }
        }
        const clear = $('focusClear');
        if (clear) {
          clear.addEventListener('click', () => {
            state.unitFocus = null;
            const s = $('focusStrip');
            if (s) s.hidden = true;
            const back = $('focusBack');
            if (back) back.remove();
            try {
              const u = new URL(location.href);
              u.searchParams.delete('unit');
              u.searchParams.delete('sec');
              history.replaceState(null, '', u.pathname + u.search + u.hash);
            } catch (e) { /* file:// 下忽略 */ }
            buildDeck(false);
            renderQuestion();
            renderToolbar();
            renderHeader();
            renderSidebar();
          });
        }
      }
    }
    const focusQ = qp.get('q') || qp.get('item') || '';
    const urlUnit = !!(focusUnit && (focusSec === 'cpp' || focusSec === 'ue'));
    posFrozen = urlUnit || !!focusQ;

    // 还原上次筛选：必须在首次组卷前写回 state；URL 显式定位时不覆盖
    const savedFilters = store.filters ? { cat: store.filters.cat, prio: store.filters.prio, type: store.filters.type, stat: store.filters.stat } : null;
    if (!posFrozen && savedFilters) {
      if (savedFilters.cat === 'all' || GROUPS.some(g => g.key === savedFilters.cat)) state.cat = savedFilters.cat;
      state.prio = savedFilters.prio || 'all';
      state.type = savedFilters.type || 'all';
      state.stat = savedFilters.stat || 'all';
    }
    // 今日队列跳转：?stat=due 等显式状态优先于记忆的筛选
    const urlStat = qp.get('stat');
    if (urlStat && ['todo', 'wrong', 'right', 'due', 'fav', 'all'].includes(urlStat)) state.stat = urlStat;

    // 先快照已存位置：setView 的首次渲染会写入新位置，必须在它之前取
    const savedPos = store.pos ? { id: store.pos.id, idx: store.pos.idx } : null;

    // 定位优先级：URL ?unit= > URL ?q= > 上次位置；先按元数据组卷并定好目标，
    // 只预取首题所在的那个分类包，再一次性上屏（题干与“1 / N”同时出现）
    buildDeck(false);
    if (urlUnit) {
      // URL 指定了单元：保持该单元首题，不做位置恢复
    } else if (focusQ) {
      const p = state.deck.findIndex(x => x.id === focusQ);
      if (p >= 0) state.idx = p;
    } else {
      restorePos(savedPos);
    }
    const warm = curItem();
    const bootView = () => {
      setView('quiz');
      posFrozen = false; // 初始化完成后恢复正常记忆
      warmAllCats(); // 首题上屏后再闲时补其余分类包
    };
    if (warm && warm.cat && !loaded[warm.cat]) ensureCat(warm.cat).then(bootView, bootView);
    else bootView();
  }

  window.QuizApp = { start: start };
})();

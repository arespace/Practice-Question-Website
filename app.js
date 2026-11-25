(function () {
  'use strict';

  function start(ctx) {
    const DIR = ctx.dir;
    const DATA = ctx.data;
    const META = ctx.meta || { sections: [], counts: { bySection: {} } };
    const SECTIONS = Array.isArray(DATA.sections) ? DATA.sections : [];
    const SEC_META = {};
    (META.sections || []).forEach(s => { SEC_META[s.key] = s; });

    const ALL = [];
    SECTIONS.forEach(sec => {
      (sec.groups || []).forEach(group => {
        (group.cards || []).forEach(card => {
          ALL.push(Object.assign({}, card, {
            bank: sec.key,
            group: group.name,
            groupKey: group.key,
            secName: sec.name,
            secColor: sec.color || 'accent'
          }));
        });
      });
    });

    let store = Store.dir(DIR);
    const save = () => Store.save();
    const todayStr = Store.todayStr;

    const state = {
      bank: 'all',
      group: 'all',
      status: 'all',
      mode: 'order',
      search: '',
      deck: [],
      idx: 0,
      revealed: false,
      deepOpen: false
    };

    const $ = id => document.getElementById(id);
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    /* ---------- minimal markdown ---------- */
    function inline(s) {
      let out = esc(s);
      out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
      out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
      out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      return out;
    }

    function md(src) {
      if (!src) return '';
      const lines = src.split('\n');
      const out = [];
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        if (/^\s*```/.test(line)) {
          const buf = [];
          i++;
          while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
          i++;
          out.push('<pre><code>' + esc(buf.join('\n')) + '</code></pre>');
          continue;
        }
        if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
          const cells = r => r.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());
          const head = cells(line);
          i += 2;
          const rows = [];
          while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(cells(lines[i])); i++; }
          out.push('<table><thead><tr>' + head.map(c => '<th>' + inline(c) + '</th>').join('') + '</tr></thead><tbody>' +
            rows.map(r => '<tr>' + r.map(c => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table>');
          continue;
        }
        if (/^\s*[-*]\s+/.test(line)) {
          const items = [];
          while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
            items.push(lines[i].replace(/^\s*[-*]\s+/, ''));
            i++;
          }
          out.push('<ul>' + items.map(t => '<li>' + inline(t) + '</li>').join('') + '</ul>');
          continue;
        }
        if (/^#{2,4}\s+/.test(line)) {
          out.push('<h4>' + inline(line.replace(/^#{2,4}\s+/, '')) + '</h4>');
          i++;
          continue;
        }
        if (!line.trim()) { i++; continue; }
        const buf = [];
        while (i < lines.length && lines[i].trim() && !/^\s*```/.test(lines[i]) && !/^\s*\|/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i]) && !/^#{2,4}\s+/.test(lines[i])) {
          buf.push(lines[i]);
          i++;
        }
        if (!buf.length) { out.push('<p>' + inline(line) + '</p>'); i++; continue; }
        out.push('<p>' + inline(buf.join(' ')) + '</p>');
      }
      return out.join('\n');
    }

    /* ---------- data helpers ---------- */
    function sectionCount(key) {
      const by = (META.counts && META.counts.bySection) || {};
      return by[key] && typeof by[key].cards === 'number' ? by[key].cards : ALL.filter(q => q.bank === key).length;
    }

    function scope() {
      return state.bank === 'all' ? ALL : ALL.filter(q => q.bank === state.bank);
    }

    function markOf(q) {
      const rec = store.cards[q.id];
      return rec && typeof rec.mark === 'number' ? rec.mark : null;
    }

    function dueAtOf(q) {
      const rec = store.cards[q.id];
      return rec && typeof rec.dueAt === 'number' ? rec.dueAt : 0;
    }

    // 到期 = 有记录且 dueAt 已过；待复习不再只看标记 0/1
    function isDue(q) {
      const t = dueAtOf(q);
      return !!t && t <= Date.now();
    }

    function dueCount() {
      return ALL.filter(isDue).length;
    }

    function matches(q) {
      if (state.bank !== 'all' && q.bank !== state.bank) return false;
      if (state.group !== 'all' && (q.bank + '|' + q.groupKey) !== state.group) return false;
      const m = markOf(q);
      if (state.status === 'todo' && m !== null) return false;
      if (state.status === 'review' && !isDue(q)) return false;
      if (state.status === 'mastered' && m !== 2) return false;
      if (state.status === 'fav' && store.cardFav.indexOf(q.id) < 0) return false;
      if (state.search) {
        const s = state.search;
        const hay = [q.title, q.q, q.answer, q.group, (q.points || []).join(' ')].join(' ').toLowerCase();
        if (hay.indexOf(s) < 0) return false;
      }
      return true;
    }

    function buildDeck(keepCurrent) {
      const current = state.deck[state.idx];
      let deck = ALL.filter(matches);
      if (state.mode === 'random') {
        deck = deck.slice();
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
      } else if (state.mode === 'review') {
        deck = deck.filter(isDue);
        deck.sort((a, b) => dueAtOf(a) - dueAtOf(b));
      }
      state.deck = deck;
      if (keepCurrent && current) {
        const pos = deck.findIndex(q => q.id === current.id);
        state.idx = pos >= 0 ? pos : 0;
      } else {
        state.idx = 0;
      }
      state.revealed = false;
      state.deepOpen = false;
    }

    /* ---------- rendering ---------- */
    function renderTabs() {
      const host = $('bankTabs');
      if (!host) return;
      const tabs = [{ key: 'all', name: '全部', count: ALL.length }]
        .concat(SECTIONS.map(s => ({ key: s.key, name: s.name, count: sectionCount(s.key) })));
      host.innerHTML = tabs.map(t =>
        '<button class="bank-tab' + (state.bank === t.key ? ' active' : '') + '" data-bank="' + esc(t.key) + '">' +
        esc(t.name) + '<span>' + t.count + '</span></button>'
      ).join('');
    }

    function renderSidebar() {
      const sc = scope();

      const mastered = sc.filter(q => markOf(q) === 2).length;
      $('progressText').textContent = mastered + ' / ' + sc.length;
      $('progressBar').style.width = (sc.length ? (mastered / sc.length * 100) : 0) + '%';
      $('legendOk').textContent = mastered;
      $('legendMid').textContent = sc.filter(q => markOf(q) === 1).length;
      $('legendNo').textContent = sc.filter(q => markOf(q) === 0).length;

      const groups = [];
      sc.forEach(q => {
        let g = groups.find(x => x.bank === q.bank && x.key === q.groupKey);
        if (!g) {
          g = { bank: q.bank, key: q.groupKey, name: q.group, secName: q.secName, secColor: q.secColor, total: 0, done: 0 };
          groups.push(g);
        }
        g.total++;
        if (markOf(q) === 2) g.done++;
      });

      const list = $('groupList');
      list.innerHTML = '';
      const allBtn = document.createElement('button');
      allBtn.className = 'group-item' + (state.group === 'all' ? ' active' : '');
      allBtn.innerHTML = '<span class="group-dot" style="background:var(--accent)"></span>' +
        '<span class="group-name">全部分组</span><span class="group-count">' + sc.length + '</span>';
      allBtn.addEventListener('click', () => { state.group = 'all'; refresh(); });
      list.appendChild(allBtn);

      let lastBank = null;
      groups.forEach(g => {
        if (g.bank !== lastBank) {
          lastBank = g.bank;
          const label = document.createElement('div');
          label.className = 'group-label';
          label.textContent = g.secName + ' · 答题卡';
          list.appendChild(label);
        }
        const btn = document.createElement('button');
        btn.className = 'group-item' + (state.group === g.bank + '|' + g.key ? ' active' : '');
        btn.title = g.name;
        btn.innerHTML = '<span class="group-dot" style="background:var(--' + esc(g.secColor) + ')"></span>' +
          '<span class="group-name">' + esc(g.name) + '</span>' +
          '<span class="group-count">' + g.done + '/' + g.total + '</span>';
        btn.addEventListener('click', () => { state.group = g.bank + '|' + g.key; refresh(); });
        list.appendChild(btn);
      });
      renderDaily();
    }

    function renderCard() {
      const q = state.deck[state.idx];
      const empty = $('emptyState');
      if (!q) {
        $('card').hidden = true;
        empty.hidden = false;
        $('deckPos').textContent = '0 / 0';
        $('prevBtn').disabled = true;
        $('nextBtn').disabled = true;
        $('dots').innerHTML = '';
        return;
      }
      $('card').hidden = false;
      empty.hidden = true;

      try {
        renderCardBody(q);
      } catch (e) {
        brokenCard(q, e);
      }
    }

    // 单张内容异常：跳过这一张并提示，翻页与其他卡片不受影响
    function brokenCard(q, err) {
      if (window.ContentAlert) window.ContentAlert.report(q && q.id, err);
      else console.error('[cards] 卡片渲染失败', err);
      $('badgeBank').textContent = '内容异常';
      $('badgeBank').className = 'badge';
      $('badgeBank').style.background = '';
      $('badgeGroup').textContent = '';
      $('badgeNo').textContent = '';
      $('badgeReq').hidden = true;
      $('question').textContent = '这张卡片数据不完整，已跳过显示，翻到下一张即可继续。';
      if ($('cardLead')) $('cardLead').hidden = true;
      if (typeof oralBar !== 'undefined' && oralBar) oralBar.hidden = true;
      $('answer').hidden = true;
      $('revealHint').hidden = true;
      $('selfRate').hidden = true;
      $('deckPos').textContent = (state.idx + 1) + ' / ' + state.deck.length;
      $('prevBtn').disabled = state.idx <= 0;
      $('nextBtn').disabled = state.idx >= state.deck.length - 1;
    }

    function renderCardBody(q) {
      const sm = SEC_META[q.bank] || {};
      $('badgeBank').textContent = q.secName;
      $('badgeBank').className = 'badge sec-badge';
      $('badgeBank').style.background = sm.badgeFrom && sm.badgeTo
        ? 'linear-gradient(135deg,' + sm.badgeFrom + ',' + sm.badgeTo + ')'
        : '';
      $('badgeGroup').textContent = q.group;
      $('badgeNo').textContent = '#' + String(q.no).padStart(2, '0');
      const req = $('badgeReq');
      if (typeof q.required === 'boolean') {
        req.hidden = false;
        req.textContent = q.required ? '必背' : '加分项';
        req.className = 'badge req' + (q.required ? '' : ' bonus');
      } else {
        req.hidden = true;
      }

      $('question').textContent = q.q;

      const leadEl = $('cardLead');
      if (leadEl) {
        leadEl.textContent = q.lead || '';
        leadEl.hidden = !q.lead;
      }

      const favOn = store.cardFav.indexOf(q.id) >= 0;
      $('starBtn').textContent = favOn ? '★' : '☆';
      $('starBtn').className = 'star' + (favOn ? ' on' : '');

      $('answerText').innerHTML = inline(q.answer);
      $('points').innerHTML = (q.points || []).map(p => '<span class="point">' + inline(p) + '</span>').join('');
      $('pointsBlock').hidden = !(q.points && q.points.length);
      $('followups').innerHTML = (q.followups || []).map(f => '<li>' + inline(f) + '</li>').join('');
      $('followBlock').hidden = !(q.followups && q.followups.length);

      // 与深读单元互链：构建期已把卡片映射写进 deepUnit
      const dlb = $('deepLinkBlock');
      const dl = $('deepLink');
      if (dlb && dl) {
        if (q.deepUnit) {
          dlb.hidden = false;
          dl.href = 'deep.html?dir=' + encodeURIComponent(DIR) + '&sec=' + encodeURIComponent(q.section) + '&unit=' + q.deepUnit;
          dl.textContent = '看深读 · 单元 ' + q.deepUnit + (q.deepTitle ? ' · ' + q.deepTitle : '');
        } else {
          dlb.hidden = true;
        }
      }

      const hasDeep = !!(q.deep && q.deep.trim());
      $('deepBlock').hidden = !hasDeep;
      if (hasDeep) {
        $('deepBody').innerHTML = md(q.deep);
        $('deepBody').hidden = !state.deepOpen;
        $('deepToggle').setAttribute('aria-expanded', state.deepOpen ? 'true' : 'false');
        $('deepToggle').querySelector('span').textContent = state.deepOpen ? '收起层 B ｜ 深挖' : '展开层 B ｜ 深挖';
      }

      $('answer').hidden = !state.revealed;
      $('revealHint').hidden = state.revealed;
      $('selfRate').hidden = !state.revealed;
      oralSync(q.id);

      const m = markOf(q);
      document.querySelectorAll('.rate').forEach(btn => {
        const v = Number(btn.dataset.mark);
        btn.classList.toggle('current', m === v);
      });

      $('deckPos').textContent = (state.idx + 1) + ' / ' + state.deck.length;
      $('prevBtn').disabled = state.idx <= 0;
      $('nextBtn').disabled = state.idx >= state.deck.length - 1;

      // dots
      const dots = $('dots');
      if (state.deck.length > 60) { dots.innerHTML = ''; }
      else {
        dots.innerHTML = state.deck.map((d, i) => {
          const mm = markOf(d);
          return '<i class="' + (i === state.idx ? 'cur' : (mm === 2 ? 'done' : '')) + '"></i>';
        }).join('');
      }
    }

    function renderHeader() {
      const done = ALL.filter(q => markOf(q) === 2).length;
      const n = dueCount();
      $('statMastered').textContent = done;
      $('statToday').textContent = store.daily.ids.length;
      const sd = $('statDue');
      if (sd) sd.textContent = n;
      const txt = $('cardDueText');
      if (txt) {
        txt.textContent = n
          ? '今天该复习 ' + n + ' 张卡片，按到期时间从早到晚排'
          : '今天没有到期的卡片，按顺序或随机背即可';
        $('cardDueBtn').hidden = !n;
        $('cardDueStrip').classList.toggle('has-due', !!n);
      }
    }

    function renderDaily() {
      const txt = $('cardDailyText');
      if (!txt) return;
      const n = store.daily.ids.length;
      txt.textContent = n + ' / ' + store.goal;
      $('cardDailyBar').style.width = Math.min(100, n / store.goal * 100) + '%';
      $('cardStreak').textContent = store.streak.days || 0;
      $('cardToday').textContent = n;
    }

    /* ---------- 今日队列 / 剩余量估算 / 复习包导出 ---------- */
    let unitMapCache = null;
    function loadUnitMap() {
      if (unitMapCache) return Promise.resolve(unitMapCache);
      if (window.UNITMAP && window.UNITMAP[DIR]) { unitMapCache = window.UNITMAP[DIR]; return Promise.resolve(unitMapCache); }
      return new Promise(resolve => {
        const s = document.createElement('script');
        s.src = 'dist/content/' + DIR + '.unitmap.js';
        s.onload = () => { unitMapCache = (window.UNITMAP || {})[DIR] || []; resolve(unitMapCache); };
        s.onerror = () => { unitMapCache = []; resolve(unitMapCache); };
        document.body.appendChild(s);
      });
    }

    function loadQuizBundle() {
      const bag = window.CONTENT && window.CONTENT[DIR];
      if (bag && bag.quiz) return Promise.resolve(bag.quiz);
      return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'dist/content/' + DIR + '.quiz.js';
        s.onload = () => resolve(((window.CONTENT || {})[DIR] || {}).quiz || { items: [] });
        s.onerror = () => reject(new Error('题库加载失败'));
        document.body.appendChild(s);
      });
    }

    // 到期错题：答错过且未毕业、到期时间已过
    function dueQuizIds() {
      const now = Date.now();
      return Object.keys(store.quiz).filter(id => {
        const r = store.quiz[id];
        return r && r.w > 0 && !r.graduated && (!r.dueAt || r.dueAt <= now);
      });
    }

    function weakUnits(map, n) {
      const rows = map.map(u => {
        let att = 0, win = 0;
        u.ids.forEach(id => {
          const r = store.quiz[id];
          if (!r) return;
          att += (r.r || 0) + (r.w || 0);
          win += (r.r || 0);
        });
        return { u, att, acc: att ? Math.round(win / att * 100) : null };
      }).filter(x => x.att > 0 && x.acc !== null);
      rows.sort((a, b) => a.acc - b.acc || b.att - a.att);
      return rows.slice(0, n);
    }

    function renderQueue() {
      const host = $('todayQueue');
      if (!host) return;
      const dc = dueCount();
      const dq = dueQuizIds().length;
      host.hidden = false;
      $('qCardsNum').textContent = dc;
      $('qWrongNum').textContent = dq;
      $('queueWrong').setAttribute('href', 'quiz.html?dir=' + encodeURIComponent(DIR) + '&stat=due');
      const mins = Math.round(dc * 0.5 + dq * 1.5);
      $('queueEst').textContent = '今天还需约 ' + mins + ' 分钟（估算：卡片 0.5 分/张 + 错题 1.5 分/道）';
      loadUnitMap().then(map => {
        const box = $('qWeakList');
        if (!box) return;
        const weak = weakUnits(map, 3);
        box.innerHTML = weak.length
          ? weak.map(w => '<a href="quiz.html?dir=' + encodeURIComponent(DIR) + '&sec=' + encodeURIComponent(w.u.section) +
              '&unit=' + w.u.unit + '">' + esc(w.u.title || ('单元 ' + w.u.unit)) + ' · ' + w.acc + '%</a>').join('')
          : '<span class="tq-dim">暂无数据，先做几道题</span>';
      });
    }

    function renderBackupHint() {
      const el = $('backupHint');
      if (!el) return;
      const has = Object.keys(store.quiz).length + Object.keys(store.cards).length > 0;
      if (!has) { el.hidden = true; return; }
      if (!store.exportAt) { el.hidden = false; el.textContent = '尚未导出过复习包，建议导出备份'; return; }
      const days = Math.floor((Date.now() - store.exportAt) / 86400000);
      if (days >= 7) { el.hidden = false; el.textContent = '距上次导出 ' + days + ' 天，建议导出备份'; }
      else el.hidden = true;
    }

    function packMarkdown(items) {
      const lines = [];
      const wrong = items.filter(it => { const r = store.quiz[it.id]; return r && r.w > 0 && !r.graduated; });
      const cards = ALL.filter(isDue);
      lines.push('# 复习包 · ' + (META.title || DIR));
      lines.push('');
      lines.push('导出时间：' + new Date().toLocaleString('zh-CN') + '　可直接打印或存入手机笔记。');
      lines.push('');
      lines.push('## 待复习卡片（' + cards.length + '）');
      cards.slice(0, 80).forEach(c => lines.push('- [' + c.group + '] ' + c.title + '（#' + c.id + '）'));
      if (!cards.length) lines.push('- 无');
      lines.push('');
      lines.push('## 错题（' + wrong.length + '）');
      wrong.slice(0, 80).forEach(it => {
        const r = store.quiz[it.id] || {};
        lines.push('### ' + (it.unitTitle ? '[' + it.unitTitle + '] ' : '') + it.id + '　答错 ' + (r.w || 0) + ' 次');
        lines.push('');
        lines.push('> ' + String(it.q || '').replace(/\n+/g, ' ').slice(0, 240));
        lines.push('');
        if (it.answer) lines.push('**答案**：' + String(it.answer).replace(/\n+/g, ' ').slice(0, 240));
        lines.push('');
      });
      if (!wrong.length) lines.push('- 无');
      lines.push('');
      lines.push('## 薄弱单元（正确率升序，最多 5 个）');
      const weak = unitMapCache ? weakUnits(unitMapCache, 5) : [];
      weak.forEach((w, i) => lines.push((i + 1) + '. ' + (w.u.title || ('单元 ' + w.u.unit)) + ' — 正确率 ' + w.acc + '%（' + w.att + ' 次作答）'));
      if (!weak.length) lines.push('- 暂无作答数据');
      lines.push('');
      lines.push('## 今日剩余量（估算）');
      const dc = cards.length, dq = dueQuizIds().length;
      lines.push('- 到期卡片 ' + dc + ' 张 × 0.5 分钟 + 到期错题 ' + dq + ' 道 × 1.5 分钟 ≈ ' +
        Math.round(dc * 0.5 + dq * 1.5) + ' 分钟');
      return lines.join('\n') + '\n';
    }

    async function exportPack() {
      const btn = $('exportBtn');
      if (!btn) return;
      const old = btn.textContent;
      btn.disabled = true;
      btn.textContent = '导出中…';
      try {
        const bag = await loadQuizBundle();
        await loadUnitMap();
        const md = packMarkdown(Array.isArray(bag.items) ? bag.items : []);
        const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'review-pack-' + todayStr() + '.md';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        store.exportAt = Date.now();
        save();
        renderBackupHint();
        toast('复习包已导出');
      } catch (e) {
        toast('导出失败：' + (e && e.message ? e.message : e));
      } finally {
        btn.disabled = false;
        btn.textContent = old;
      }
    }

    function refresh(keepCurrent) {
      buildDeck(keepCurrent !== false);
      renderHeader();
      renderSidebar();
      renderCard();
      renderQueue();
      renderBackupHint();
    }

    /* ---------- actions ---------- */
    let toastTimer = null;
    function toast(msg) {
      const el = $('toast');
      el.textContent = msg;
      el.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => el.classList.remove('show'), 1500);
    }

    function reveal() {
      if (!state.deck[state.idx] || state.revealed) return;
      state.revealed = true;
      renderCard();
    }

    function go(delta) {
      const next = state.idx + delta;
      if (next < 0 || next >= state.deck.length) return;
      state.idx = next;
      state.revealed = false;
      state.deepOpen = false;
      renderCard();
    }

    function setMark(v) {
      const q = state.deck[state.idx];
      if (!q) return;
      store.cards[q.id] = SRS.scheduleCard(store.cards[q.id] || null, v, Date.now());
      Store.bumpDaily(store, q.id, null);
      save();
      renderHeader();
      renderSidebar();
      const label = v === 2 ? '已掌握' : v === 1 ? '标记为模糊' : '加入待复习';
      const rec = store.cards[q.id];
      toast(label + ' · 下次 ' + rec.interval + ' 天后');
      if (state.mode === 'review') {
        state.deck.splice(state.idx, 1);
        if (state.idx >= state.deck.length) state.idx = Math.max(0, state.deck.length - 1);
        state.revealed = false;
        renderCard();
        return;
      }
      setTimeout(() => go(1), 240);
    }

    function toggleFav() {
      const q = state.deck[state.idx];
      if (!q) return;
      const i = store.cardFav.indexOf(q.id);
      if (i >= 0) { store.cardFav.splice(i, 1); toast('已取消收藏'); }
      else { store.cardFav.push(q.id); toast('已收藏'); }
      save();
      renderCard();
      renderSidebar();
    }

    function setMode(mode) {
      state.mode = mode;
      document.querySelectorAll('.mode').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
      if (mode === 'review') { state.status = 'all'; syncChips(); }
      // 进入待复习时从第一张到期卡片开始，保持当前位置会让人以为没排好
      refresh(mode !== 'review');
      if (mode === 'review' && !state.deck.length) toast('暂无待复习题目，继续保持');
      else if (mode === 'random') toast('已打乱顺序');
    }

    function syncChips() {
      document.querySelectorAll('#statusFilter .chip').forEach(c => c.classList.toggle('active', c.dataset.status === state.status));
      document.querySelectorAll('.bank-tab').forEach(t => t.classList.toggle('active', t.dataset.bank === state.bank));
    }

    /* ---------- events ---------- */
    $('revealBtn').addEventListener('click', reveal);
    $('prevBtn').addEventListener('click', () => go(-1));
    $('nextBtn').addEventListener('click', () => go(1));
    $('starBtn').addEventListener('click', toggleFav);
    $('shuffleBtn').addEventListener('click', () => { setMode('random'); state.idx = 0; renderCard(); });
    $('cardDueBtn').addEventListener('click', () => setMode('review'));
    $('deepToggle').addEventListener('click', () => {
      state.deepOpen = !state.deepOpen;
      renderCard();
    });

    document.querySelectorAll('.rate').forEach(btn => {
      btn.addEventListener('click', () => setMark(Number(btn.dataset.mark)));
    });

    document.querySelectorAll('.mode').forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });

    $('bankTabs').addEventListener('click', e => {
      const btn = e.target.closest('.bank-tab');
      if (!btn) return;
      state.bank = btn.dataset.bank;
      state.group = 'all';
      syncChips();
      refresh(false);
    });

    document.querySelectorAll('#statusFilter .chip').forEach(btn => {
      btn.addEventListener('click', () => {
        state.status = btn.dataset.status;
        if (state.status !== 'all' && state.mode === 'review') state.mode = 'order';
        document.querySelectorAll('.mode').forEach(b => b.classList.toggle('active', b.dataset.mode === state.mode));
        syncChips();
        refresh(false);
      });
    });

    let searchTimer = null;
    $('searchInput').addEventListener('input', e => {
      clearTimeout(searchTimer);
      const v = e.target.value.trim().toLowerCase();
      searchTimer = setTimeout(() => { state.search = v; refresh(true); }, 160);
    });

    $('resetBtn').addEventListener('click', () => {
      if (!confirm('确定清空「' + (META.title || DIR) + '」的掌握记录、收藏与今日进度？')) return;
      store.cards = {};
      store.cardFav = [];
      store.daily.date = todayStr();
      store.daily.count = 0;
      store.daily.ids = [];
      store.daily.right = 0;
      store.daily.wrong = 0;
      save();
      refresh(false);
      toast('进度已重置');
    });

    $('themeBtn').addEventListener('click', () => {
      Store.data.theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', Store.data.theme);
      Store.save();
    });

    const sidebar = $('sidebar');
    const scrim = $('scrim');
    const openDrawer = (open) => {
      sidebar.classList.toggle('open', open);
      scrim.classList.toggle('show', open);
    };
    $('menuBtn').addEventListener('click', () => openDrawer(true));
    $('closeBtn').addEventListener('click', () => openDrawer(false));
    scrim.addEventListener('click', () => openDrawer(false));

    document.addEventListener('keydown', e => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); reveal(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === '1') { e.preventDefault(); if (state.revealed) setMark(0); }
      else if (e.key === '2') { e.preventDefault(); if (state.revealed) setMark(1); }
      else if (e.key === '3') { e.preventDefault(); if (state.revealed) setMark(2); }
      else if (e.key.toLowerCase() === 'f') { e.preventDefault(); toggleFav(); }
      else if (e.key.toLowerCase() === 'r') { e.preventDefault(); setMode('random'); }
      else if (e.key === 'Escape') { openDrawer(false); }
    });

    /* ---------- 60 秒口述 + 本地录音（不上传） ---------- */
    const oral = { rec: null, stream: null, timer: null, chunks: [], left: 60, cardId: '', urls: {} };
    const oralBar = $('oralBar');
    const oralBtn = $('oralBtn');
    const oralClock = $('oralClock');
    const oralTrack = $('oralTrack');
    const oralFill = $('oralFill');
    const oralAudio = $('oralAudio');
    const oralClear = $('oralClear');

    function oralSupported() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    }

    function oralPaint() {
      oralClock.textContent = oral.left + 's';
      oralFill.style.width = (oral.left / 60 * 100) + '%';
    }

    function oralStop() {
      if (oral.timer) { clearInterval(oral.timer); oral.timer = null; }
      if (oral.rec && oral.rec.state !== 'inactive') oral.rec.stop();
      oral.rec = null;
      if (oral.stream) {
        oral.stream.getTracks().forEach(t => t.stop());
        oral.stream = null;
      }
    }

    function oralSync(cardId) {
      if (!oralBar) return;
      if (oral.rec && oral.cardId !== cardId) oralStop();
      const recording = !!oral.rec && oral.cardId === cardId;
      oralBar.hidden = !oralSupported();
      oralBtn.textContent = recording ? '■ 停止并回放' : '◉ 60 秒口述';
      oralBtn.classList.toggle('recording', recording);
      oralClock.hidden = !recording;
      oralTrack.hidden = !recording;
      if (!recording) {
        oral.left = 60;
        oralPaint();
      }
      const url = oral.urls[cardId];
      if (url) {
        oralAudio.src = url;
        oralAudio.hidden = false;
        oralClear.hidden = false;
      } else {
        oralAudio.removeAttribute('src');
        oralAudio.hidden = true;
        oralClear.hidden = true;
      }
    }

    async function oralToggle() {
      if (oral.rec) { oralStop(); return; }
      if (!oralSupported()) { toast('当前浏览器不支持录音'); return; }
      try {
        oral.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) {
        toast('拿不到麦克风权限，无法录音');
        return;
      }
      const q = state.deck[state.idx];
      oral.cardId = q ? q.id : '';
      oral.chunks = [];
      const rec = new MediaRecorder(oral.stream);
      oral.rec = rec;
      rec.ondataavailable = e => { if (e.data && e.data.size) oral.chunks.push(e.data); };
      rec.onstop = () => {
        const blob = new Blob(oral.chunks, { type: rec.mimeType || 'audio/webm' });
        oral.chunks = [];
        if (!blob.size) return;
        const old = oral.urls[oral.cardId];
        if (old) URL.revokeObjectURL(old);
        oral.urls[oral.cardId] = URL.createObjectURL(blob);
        const now = state.deck[state.idx];
        if (now && now.id === oral.cardId) oralSync(oral.cardId);
      };
      rec.start();
      oralBtn.textContent = '■ 停止并回放';
      oralBtn.classList.add('recording');
      oralClock.hidden = false;
      oralTrack.hidden = false;
      oral.left = 60;
      oralPaint();
      oral.timer = setInterval(() => {
        oral.left = Math.max(0, oral.left - 1);
        oralPaint();
        if (oral.left <= 0) oralStop();
      }, 1000);
    }

    if (oralBtn) {
      oralBtn.addEventListener('click', oralToggle);
      oralClear.addEventListener('click', () => {
        const q = state.deck[state.idx];
        const id = q ? q.id : '';
        if (oral.urls[id]) {
          URL.revokeObjectURL(oral.urls[id]);
          delete oral.urls[id];
        }
        oralSync(id);
      });
    }

    /* ---------- boot ---------- */
    const brandTitle = $('brandTitle');
    if (brandTitle) brandTitle.textContent = (META.title || DIR) + ' 刷题台';
    const brandSub = $('brandSub');
    if (brandSub) {
      brandSub.textContent = SECTIONS.map(s => sectionCount(s.key) + ' 张 ' + s.name + ' 卡').join(' · ') +
        ' · 口述稿 + 锚点 + 追问';
    }
    document.documentElement.setAttribute('data-theme', Store.data.theme);

    // 从深读/检测题跳转过来：?card=cpp-01 定位到指定卡片
    const params = new URLSearchParams(location.search);
    const focusId = params.get('card');
    const focusCard = focusId ? ALL.filter(c => c.id === focusId)[0] : null;
    if (focusCard) {
      state.bank = focusCard.bank;
      state.group = 'all';
      state.status = 'all';
      state.mode = 'order';
      state.search = '';
      const si = $('searchInput');
      if (si) si.value = '';
    }

    renderTabs();
    syncChips();
    refresh(false);

    // 今日队列：点卡片数直接进入复习模式；导出复习包
    const qCards = $('queueCards');
    if (qCards) qCards.addEventListener('click', e => {
      e.preventDefault();
      if (!dueCount()) { toast('今天没有到期卡片'); return; }
      state.mode = 'review';
      state.status = 'all';
      syncChips();
      refresh(false);
      const stage = document.querySelector('.stage') || document.body;
      stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    const exBtn = $('exportBtn');
    if (exBtn) exBtn.addEventListener('click', exportPack);

    if (focusCard) {
      const i = state.deck.findIndex(c => c.id === focusCard.id);
      if (i >= 0) { state.idx = i; state.revealed = false; renderCard(); }
      const strip = $('focusStrip');
      if (strip) {
        strip.hidden = false;
        $('focusText').textContent = '已定位到速背卡 ' + focusCard.id + ' · ' + focusCard.secName + ' #' + focusCard.no;
        // 从深读跳来：提供回链，落在原单元
        const backUnit = Number(params.get('unit') || 0);
        const backSec = params.get('sec') || '';
        if (params.get('from') === 'deep' && backUnit && (backSec === 'cpp' || backSec === 'ue')) {
          let back = $('focusBack');
          if (!back) {
            back = document.createElement('a');
            back.id = 'focusBack';
            back.className = 'focus-back';
            strip.insertBefore(back, $('focusClear'));
          }
          back.href = 'deep.html?dir=' + encodeURIComponent(DIR) + '&sec=' + backSec + '&unit=' + backUnit;
          back.textContent = '← 回到深读 · 单元 ' + backUnit;
        }
      }
    }
    const focusClear = $('focusClear');
    if (focusClear) {
      focusClear.addEventListener('click', () => {
        const strip = $('focusStrip');
        if (strip) strip.hidden = true;
        const back = $('focusBack');
        if (back) back.remove();
        try {
          const u = new URL(location.href);
          u.searchParams.delete('card');
          history.replaceState(null, '', u.pathname + u.search + u.hash);
        } catch (e) { /* file:// 下忽略 */ }
      });
    }
  }

  window.CardsApp = { start: start };
})();

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
      if (spPanel) spPanel.hidden = true;
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
      speechSync(q);

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
      return window.LoadBundle(
        'dist/content/' + DIR + '.unitmap.js',
        () => !!(window.UNITMAP && window.UNITMAP[DIR])
      ).then(() => {
        unitMapCache = (window.UNITMAP || {})[DIR] || [];
        return unitMapCache;
      }).catch(() => { unitMapCache = []; return unitMapCache; });
    }

    // 复习包要跨全部题目：先取索引，再并行拉全部正文分类包后合并
    function loadQuizBundle() {
      const bag = window.CONTENT && window.CONTENT[DIR];
      const indexP = bag && bag.quizIndex ? Promise.resolve() : window.LoadBundle('dist/content/' + DIR + '.quiz.index.js');
      return indexP.then(() => {
        const b = (window.CONTENT || {})[DIR] || {};
        const index = b.quizIndex;
        if (!index) return { items: [] };
        const cats = (index.groups || []).map(g => g.key);
        const missing = cats.filter(c => !(b.quizCats && b.quizCats[c]));
        return Promise.all(missing.map(c =>
          window.LoadBundle('dist/content/' + DIR + '.quiz.' + c + '.js').catch(() => null)
        )).then(() => {
          const full = {};
          Object.keys(b.quizCats || {}).forEach(c => (b.quizCats[c].items || []).forEach(it => { full[it.id] = it; }));
          return { items: index.items.map(it => Object.assign({}, it, full[it.id] || {})) };
        });
      }).catch(() => ({ items: [] }));
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
      // 算法练习入口：总题数取构建清单，已掌握数读本机记录
      const algoTotal = (META.counts && META.counts.algo) || 0;
      const algoStore = store.algo && typeof store.algo === 'object' ? store.algo : {};
      const algoDone = Object.keys(algoStore).filter(id => algoStore[id] && algoStore[id].mark === 'ok').length;
      if ($('qAlgoNum')) $('qAlgoNum').textContent = algoTotal;
      if ($('qAlgoDone')) $('qAlgoDone').textContent = algoDone;
      if ($('queueAlgo')) $('queueAlgo').setAttribute('href', 'algo.html?dir=' + encodeURIComponent(DIR));
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

      // 口述评分：只列有评分的卡，每卡最近 1-3 条（时间 / 分数 / 出师 / 追问问题），最多 20 张
      const speechRows = Object.keys(store.speech || {}).map(id => {
        const norm = speechNorm(id);
        if (!norm || !norm.layers.length) return null;
        const card = ALL.filter(c => c.id === id)[0];
        return { id, norm, title: (card && card.title) || id };
      }).filter(Boolean).sort((a, b) => (b.norm.ts || 0) - (a.norm.ts || 0));

      lines.push('');
      lines.push('## 口述评分（' + speechRows.length + '）');
      const speechLine = h => [
        h.passed ? '出师' : '未过',
        '主答 ' + (typeof h.score === 'number' ? h.score : 0) + ' 分',
        typeof h.score2 === 'number' ? '追问 ' + h.score2 + ' 分' : ''
      ].filter(Boolean).join(' · ') + '（' + (fmtClock(h.ts) || '无日期') + '）';
      speechRows.slice(0, 20).forEach(row => {
        const hist = row.norm.history;
        if (!hist.length) {
          // 兼容早期单层记录
          const l1 = row.norm.layers[0];
          lines.push('- ' + row.title + '：最新 ' + l1.score + ' 分（' + (fmtDay(row.norm.ts) || '无日期') + '）' +
            (typeof row.norm.prevScore === 'number' ? '，上次 ' + row.norm.prevScore + ' 分' : ''));
          return;
        }
        lines.push('- ' + row.title + '：' + speechLine(hist[0]));
        if (hist[0].followup) lines.push('  - 追问：' + String(hist[0].followup).replace(/\s+/g, ' '));
        hist.slice(1, 3).forEach(h => lines.push('  - 上次：' + speechLine(h)));
      });
      if (!speechRows.length) lines.push('- 暂无口述评分');

      // 深读笔记：把按单元的高亮数组与单元笔记汇总（字段可能为空）
      const markMap = store.deepMarks && typeof store.deepMarks === 'object' ? store.deepMarks : {};
      const noteMap = store.notes && typeof store.notes === 'object' ? store.notes : {};
      const unitIds = [];
      Object.keys(markMap).concat(Object.keys(noteMap)).forEach(u => {
        if (unitIds.indexOf(u) < 0) unitIds.push(u);
      });
      lines.push('');
      lines.push('## 深读笔记（' + unitIds.length + '）');
      unitIds.slice(0, 40).forEach(u => {
        const marks = Array.isArray(markMap[u]) ? markMap[u].filter(Boolean) : [];
        const raw = noteMap[u];
        const text = typeof raw === 'string' ? raw
          : raw && typeof raw.text === 'string' ? raw.text : '';
        const flat = text.replace(/\s+/g, ' ').trim();
        const brief = flat ? flat.slice(0, 40) + (flat.length > 40 ? '…' : '') : '无';
        lines.push('- 单元 ' + u + '：' + marks.length + ' 处高亮；笔记：' + brief);
      });
      if (!unitIds.length) lines.push('- 暂无深读笔记');
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
      if (llmDialog && !llmDialog.hidden) {
        if (e.key === 'Escape') { e.preventDefault(); closeLlm(); }
        return;
      }
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

    /* ---------- 口述转写 + 锚点评分（DeepSeek 直连，key 只存本机） ---------- */
    // 独立 key，避免 key 混进 quiz:v3 随复习包/导出泄露
    const LLM_KEY = 'quiz:llm';
    const LLM_DFT = { baseURL: 'https://api.deepseek.com', model: 'deepseek-chat' };

    function llmRead() {
      let raw = null;
      try { raw = JSON.parse(localStorage.getItem(LLM_KEY) || 'null'); } catch (e) { raw = null; }
      const src = raw && typeof raw === 'object' ? raw : {};
      return {
        key: typeof src.key === 'string' ? src.key.trim() : '',
        baseURL: typeof src.baseURL === 'string' && src.baseURL.trim() ? src.baseURL.trim() : LLM_DFT.baseURL,
        model: typeof src.model === 'string' && src.model.trim() ? src.model.trim() : LLM_DFT.model
      };
    }

    function llmWrite(cfg) {
      try {
        localStorage.setItem(LLM_KEY, JSON.stringify(cfg));
        return true;
      } catch (e) {
        console.error('[llm] 保存评分设置失败', e);
        return false;
      }
    }

    const spPanel = $('speechPanel');
    const spStart = $('speechStartBtn');
    const spStop = $('speechStopBtn');
    const spScoreBtn = $('speechScoreBtn');
    const spLive = $('speechLive');
    const spFallback = $('speechFallback');
    const spNote = $('speechNote');
    const spManual = $('speechManual');
    const spManualBtn = $('speechManualBtn');
    const spError = $('speechError');
    const spResult = $('speechResult');
    const spKeyState = $('speechKeyState');
    const spSteps = $('speechSteps');
    const spTimer = $('speechTimer');
    const spClock = $('speechClock');
    const spTimerFill = $('speechTimerFill');
    const spFollowup = $('speechFollowup');
    const spRules = $('speechRules');
    const spHistoryBtn = $('speechHistoryBtn');
    const spHistory = $('speechHistory');

    // 两层计时（秒）与「出师」阈值：改这里即改界面说明里的数字
    const SPEECH_LIMIT = { 1: 90, 2: 60 };
    const PASS_LINE = { main: 70, follow: 60 };
    const HISTORY_MAX = 10;

    // phase：idle 待开始 / running 计时中 / scoring 评分中 / waiting 主答已评分待追问 / done 本次完成
    const speech = {
      cardId: '', layer: 1, phase: 'idle', text: '', main: null, second: null,
      rec: null, recToken: null, timer: null, left: 90, limit: 90,
      running: false, pendingScore: false, busy: false, historyOpen: false
    };

    function speechCtor() {
      return window.SpeechRecognition || window.webkitSpeechRecognition || null;
    }

    const pad2 = n => (n < 10 ? '0' + n : '' + n);

    function fmtDay(ts) {
      if (!ts) return '';
      const d = new Date(ts);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleDateString('sv-SE');
    }

    function fmtClock(ts) {
      if (!ts) return '—';
      const d = new Date(ts);
      if (isNaN(d.getTime())) return '—';
      return d.toLocaleDateString('sv-SE') + ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes());
    }

    function speechRec(cardId) {
      if (!store.speech || typeof store.speech !== 'object') store.speech = {};
      return store.speech[cardId] || null;
    }

    // 归一化：兼容早期「单层」记录（只有 score），统一成两层结构
    function speechNorm(cardId) {
      const rec = speechRec(cardId);
      if (!rec || typeof rec !== 'object') return null;
      const layers = Array.isArray(rec.layers) ? rec.layers.filter(l => l && typeof l === 'object') : [];
      const history = Array.isArray(rec.history) ? rec.history.filter(h => h && typeof h === 'object') : [];
      if (!layers.length && typeof rec.score === 'number') {
        layers.push({ text: rec.text || '', score: rec.score, verdicts: rec.verdicts || [], advice: rec.advice || '' });
      }
      if (!layers.length) return null;
      return {
        ts: rec.ts || 0,
        passed: !!rec.passed,
        layers,
        history,
        prevPassed: rec.prevPassed,
        prevTs: rec.prevTs || 0,
        prevScore: rec.prevScore
      };
    }

    function spLatestScore(rec) {
      if (!rec) return null;
      if (rec.layers && rec.layers[0] && typeof rec.layers[0].score === 'number') return rec.layers[0].score;
      return typeof rec.score === 'number' ? rec.score : null;
    }

    // 上次对比：优先取 history 里的第 2 条（history[0] 是本次）
    function spPrevOf(rec) {
      if (!rec) return null;
      if (rec.history && rec.history[1]) {
        const h = rec.history[1];
        return { passed: !!h.passed, score: typeof h.score === 'number' ? h.score : null, ts: h.ts || 0 };
      }
      if (typeof rec.prevScore === 'number') return { passed: !!rec.prevPassed, score: rec.prevScore, ts: rec.prevTs || 0 };
      return null;
    }

    function spShowError(msg) {
      if (!spError) return;
      spError.textContent = msg;
      spError.hidden = false;
    }

    function spShowFallback(note) {
      if (!spFallback) return;
      spFallback.hidden = false;
      if (spNote && note) spNote.textContent = note;
    }

    function spPaintKeyState() {
      const cfg = llmRead();
      if (spKeyState) spKeyState.textContent = cfg.key ? 'Key 已配置' : '未配置 Key';
    }

    function spPaintRules() {
      if (!spRules) return;
      spRules.textContent = '出师标准：主答 ≥ ' + PASS_LINE.main + ' 分且无「说错」，追问 ≥ ' +
        PASS_LINE.follow + ' 分；两层都过才算过关。';
    }

    function spPaintTimer() {
      if (!spTimer) return;
      spTimer.hidden = speech.phase !== 'running';
      if (spClock) spClock.textContent = Math.max(0, speech.left) + 's';
      if (spTimerFill) spTimerFill.style.width = (speech.limit ? Math.max(0, speech.left) / speech.limit * 100 : 0) + '%';
    }

    function spPaintSteps() {
      if (!spSteps) return;
      const rec = speechNorm(speech.cardId);
      spSteps.querySelectorAll('span').forEach(el => {
        const n = Number(el.dataset.step);
        el.classList.remove('on', 'done');
        if (n === 1) {
          if (speech.main) el.classList.add('done');
          else if (speech.layer === 1 && (speech.phase === 'running' || speech.phase === 'scoring')) el.classList.add('on');
        } else if (n === 2) {
          if (speech.second) el.classList.add('done');
          else if (speech.main && speech.phase !== 'done') el.classList.add('on');
        } else if (n === 3) {
          if (rec && rec.passed) el.classList.add('done');
          else if (speech.second) el.classList.add('on');
        }
      });
    }

    function spPaintFollowup() {
      if (!spFollowup) return;
      const f = speech.main && speech.main.followup;
      spFollowup.hidden = !f;
      spFollowup.textContent = f ? '追问（第 2 层）：' + f : '';
    }

    function spSyncControls() {
      if (!spPanel) return;
      const running = speech.phase === 'running';
      const locked = running || speech.phase === 'scoring' || speech.busy;
      if (spStart) {
        spStart.disabled = locked;
        spStart.classList.toggle('recording', running);
        spStart.textContent = locked && !speech.busy ? '● 计时中…'
          : speech.busy ? '评分中…'
            : speech.phase === 'done' ? '重新训练（90 秒）'
              : speech.layer === 2 ? '开始追问作答（60 秒）'
                : '开始主答（90 秒）';
      }
      if (spStop) spStop.hidden = !running;
      if (spScoreBtn) {
        spScoreBtn.disabled = locked || !speech.text || speech.phase === 'done';
        spScoreBtn.textContent = '重新评分';
      }
      if (spManualBtn) {
        spManualBtn.textContent = speech.layer === 2 ? '用这段文字给追问作答评分' : '用这段文字给主答评分';
      }
      if (spLive) spLive.hidden = !speech.text;
    }

    const VERDICT_LABEL = { hit: '命中', miss: '遗漏', wrong: '说错' };

    function spVerdictsHtml(verdicts) {
      const list = Array.isArray(verdicts) ? verdicts : [];
      if (!list.length) return '<p class="speech-meta">没有返回逐条判定</p>';
      return '<ul class="speech-verdicts">' + list.map(v => {
        const t = VERDICT_LABEL[v.type] ? v.type : 'miss';
        return '<li class="' + t + '"><b>' + VERDICT_LABEL[t] + '</b><span>' +
          esc(v.anchor || '（未标注锚点）') + (v.note ? '：' + esc(v.note) : '') + '</span></li>';
      }).join('') + '</ul>';
    }

    function spLayerHtml(layer, title) {
      if (!layer) return '';
      return [
        '<div class="speech-layer">',
        '<div class="speech-layer-head"><b>' + esc(title) + '</b>',
        '<span class="speech-layer-score">' + layer.score + '<small>分</small></span></div>',
        spVerdictsHtml(layer.verdicts),
        layer.advice ? '<p class="speech-advice"><b>建议</b>：' + esc(layer.advice) + '</p>' : '',
        layer.followup ? '<p class="speech-followup">追问：' + esc(layer.followup) + '</p>' : '',
        layer.text ? '<details class="speech-text"><summary>本层转写文本</summary><p>' + esc(layer.text) + '</p></details>' : '',
        '</div>'
      ].join('');
    }

    // 结果面板：有存档就显示最近一次完整两层结果，否则显示本次已完成的层
    function spPaintResult(cardId) {
      if (!spResult) return;
      const rec = speechNorm(cardId);
      if (rec) {
        const prev = spPrevOf(rec);
        const cmp = prev
          ? '上次：' + (prev.passed ? '出师' : '未过') + ' · 主答 ' + prev.score + ' 分' +
            (prev.ts ? '（' + fmtDay(prev.ts) + '）' : '')
          : '首次训练';
        spResult.innerHTML = [
          '<div class="speech-score-row">',
          '<span class="speech-pass ' + (rec.passed ? 'ok' : 'no') + '">' + (rec.passed ? '出师' : '未过') + '</span>',
          '<span class="speech-cmp">' + esc(cmp) + (rec.ts ? ' · ' + esc(fmtDay(rec.ts)) : '') + '</span>',
          '</div>',
          spLayerHtml(rec.layers[0], '第 1 层 · 主答'),
          spLayerHtml(rec.layers[1], '第 2 层 · 追问作答')
        ].join('');
        spResult.hidden = false;
        return;
      }
      if (speech.cardId === cardId && speech.main) {
        spResult.innerHTML = [
          '<div class="speech-score-row"><span class="speech-cmp">第 1 层已评分，接着用 60 秒回答追问</span></div>',
          spLayerHtml(speech.main, '第 1 层 · 主答')
        ].join('');
        spResult.hidden = false;
        return;
      }
      spResult.hidden = true;
      spResult.innerHTML = '';
    }

    function spHistVerdicts(verdicts) {
      const groups = { hit: [], miss: [], wrong: [] };
      (Array.isArray(verdicts) ? verdicts : []).forEach(v => {
        const t = v && VERDICT_LABEL[v.type] ? v.type : 'miss';
        if (v && v.anchor) groups[t].push(String(v.anchor));
      });
      const parts = ['hit', 'miss', 'wrong'].filter(t => groups[t].length)
        .map(t => '<b class="' + t + '">' + VERDICT_LABEL[t] + '</b> ' + esc(groups[t].join('、')));
      return parts.length ? parts.join(' · ') : '<span>无逐条判定</span>';
    }

    function spPaintHistory(cardId) {
      if (!spHistory || !spHistoryBtn) return;
      const rec = speechNorm(cardId);
      const list = rec ? rec.history : [];
      spHistoryBtn.hidden = !list.length;
      spHistoryBtn.textContent = '口述历史（' + list.length + '）';
      if (!list.length) {
        spHistory.hidden = true;
        spHistory.innerHTML = '';
        return;
      }
      spHistory.hidden = !speech.historyOpen;
      spHistory.innerHTML = list.map((h, i) => [
        '<div class="speech-hist">',
        '<div class="speech-hist-head">',
        '<span class="speech-pass ' + (h.passed ? 'ok' : 'no') + '">' + (h.passed ? '出师' : '未过') + '</span>',
        '<span class="speech-hist-time">' + esc(fmtClock(h.ts)) + '</span>',
        '<span class="speech-hist-time">主答 ' + (h.score || 0) + ' · 追问 ' + (h.score2 || 0) + '</span>',
        '<button type="button" class="speech-hist-del" data-hist="' + i + '">删除</button>',
        '</div>',
        h.followup ? '<p class="speech-hist-q">追问：' + esc(h.followup) + '</p>' : '',
        '<p class="speech-hist-v">' + spHistVerdicts(h.verdicts) + '</p>',
        '<p class="speech-hist-v">' + spHistVerdicts(h.verdicts2) + '</p>',
        h.text ? '<details><summary>主答转写</summary><p>' + esc(h.text) + '</p></details>' : '',
        h.text2 ? '<details><summary>追问转写</summary><p>' + esc(h.text2) + '</p></details>' : '',
        '</div>'
      ].join('')).join('');
    }

    // 删除单条历史；删空则整条记录移除（入口随之隐藏）
    function spDeleteHistory(idx) {
      const cardId = speech.cardId || (state.deck[state.idx] ? state.deck[state.idx].id : '');
      const rec = speechRec(cardId);
      if (!rec || !Array.isArray(rec.history) || !rec.history[idx]) return;
      rec.history.splice(idx, 1);
      if (!rec.history.length) {
        delete store.speech[cardId];
      } else if (idx === 0) {
        // 删的是最新一条：用新的最新一条重建「最近一次结果」与对比字段
        const h = rec.history[0];
        const old = Array.isArray(rec.layers) ? rec.layers : [];
        rec.ts = h.ts || 0;
        rec.passed = !!h.passed;
        rec.layers = [
          {
            text: h.text || '', score: h.score, verdicts: h.verdicts || [],
            advice: old[0] && old[0].advice ? old[0].advice : '', followup: h.followup || ''
          },
          { text: h.text2 || '', score: h.score2, verdicts: h.verdicts2 || [], advice: old[1] && old[1].advice ? old[1].advice : '' }
        ];
        const np = rec.history[1] || null;
        rec.prevPassed = np ? !!np.passed : null;
        rec.prevScore = np && typeof np.score === 'number' ? np.score : null;
        rec.prevTs = np ? (np.ts || 0) : 0;
      }
      save();
      spPaintHistory(cardId);
      spPaintResult(cardId);
      spPaintSteps();
      toast('已删除这条口述记录');
    }

    function speechSync(q) {
      if (!spPanel) return;
      const cardId = q && q.id ? q.id : '';
      if (!cardId) { speechAbort(); spPanel.hidden = true; return; }
      if (speech.cardId !== cardId) {
        speechAbort();
        speech.cardId = cardId;
        speech.layer = 1;
        speech.phase = 'idle';
        speech.text = '';
        speech.main = null;
        speech.second = null;
        speech.historyOpen = false;
        if (spLive) { spLive.hidden = true; spLive.textContent = ''; }
        if (spManual) spManual.value = '';
        if (spError) { spError.hidden = true; spError.textContent = ''; }
      }
      spPanel.hidden = false;
      if (!speechCtor()) {
        spShowFallback('当前浏览器不支持语音识别（SpeechRecognition），可手动输入走完两层：先主答，再回答追问。');
      }
      spPaintKeyState();
      spPaintRules();
      spPaintFollowup();
      spPaintSteps();
      spSyncControls();
      spPaintTimer();
      spPaintResult(cardId);
      spPaintHistory(cardId);
    }

    // 打断当前层但不评分（切卡片 / 重开时用）
    function speechAbort() {
      speech.running = false;
      speech.pendingScore = false;
      if (speech.timer) { clearInterval(speech.timer); speech.timer = null; }
      const rec = speech.rec;
      speech.rec = null;
      speech.recToken = null;
      if (rec) { try { rec.stop(); } catch (e) { /* 已结束就忽略 */ } }
      if (spStop) spStop.hidden = true;
    }

    // 开始第 1 层（90 秒）或第 2 层（60 秒）：计时 + 识别同时跑
    function spStartLayer(layer) {
      if (speech.busy) return;
      speechAbort();
      speech.layer = layer === 2 ? 2 : 1;
      speech.phase = 'running';
      speech.running = true;
      speech.pendingScore = false;
      speech.text = '';
      speech.limit = SPEECH_LIMIT[speech.layer];
      speech.left = speech.limit;
      if (spError) { spError.hidden = true; spError.textContent = ''; }
      if (spManual) spManual.value = '';
      if (spLive) {
        spLive.hidden = false;
        spLive.textContent = speech.layer === 2
          ? '第 2 层：60 秒回答追问，说完点「提前结束」'
          : '第 1 层：90 秒讲完这道题，说完点「提前结束」';
      }
      speech.timer = setInterval(() => {
        speech.left = Math.max(0, speech.left - 1);
        spPaintTimer();
        if (speech.left <= 0) spEndLayer();
      }, 1000);
      spPaintTimer();
      spPaintSteps();
      spSyncControls();
      spStartRecognition();
    }

    // 计时到点 / 手动「提前结束」：停识别后进入评分
    function spEndLayer() {
      if (!speech.running) return;
      speech.running = false;
      speech.phase = 'scoring';
      if (speech.timer) { clearInterval(speech.timer); speech.timer = null; }
      speech.left = 0;
      speech.pendingScore = true;
      spPaintTimer();
      spSyncControls();
      const rec = speech.rec;
      if (rec) {
        try { rec.stop(); } catch (e) { /* 已结束就忽略 */ }
        // 兜底：个别浏览器 stop 后不触发 onend
        setTimeout(() => { if (speech.pendingScore) spScoreNow(); }, 900);
        return;
      }
      spScoreNow();
    }

    function spScoreNow() {
      if (!speech.pendingScore) return;
      speech.pendingScore = false;
      const layer = speech.layer === 2 ? 2 : 1;
      const manualText = spManual ? spManual.value.trim() : '';
      const text = (speech.text || manualText || '').trim();
      if (!text) {
        speech.phase = layer === 2 && speech.main ? 'waiting' : 'idle';
        spShowFallback(layer === 1
          ? '这一层没有拿到文字，手动输入主答内容后点下面的按钮评分。'
          : '这一层没有拿到文字，手动输入追问作答后点下面的按钮评分。');
        spShowError('这一层没有文字，先手动输入再评分。');
        spSyncControls();
        return;
      }
      speech.text = text;
      runScore(text, layer);
    }

    // 语音识别：只在「结束本层」时把最终文本交给评分，避免逐字抖动反复请求
    function spStartRecognition() {
      const Ctor = speechCtor();
      if (!Ctor) {
        spShowFallback('当前浏览器不支持语音识别，可手动输入这一层的内容，再点下面的按钮评分。');
        return;
      }
      const token = {};
      const layer = speech.layer;
      let rec;
      try { rec = new Ctor(); } catch (e) {
        spShowFallback('语音识别启动失败，可手动输入这一层的内容后评分。');
        spShowError('语音识别启动失败：' + (e && e.message ? e.message : e));
        return;
      }
      let finalText = '';
      speech.rec = rec;
      speech.recToken = token;
      rec.lang = 'zh-CN';
      rec.continuous = true;
      rec.interimResults = true;
      rec.onresult = ev => {
        let fin = '';
        let intr = '';
        for (let i = 0; i < ev.results.length; i++) {
          const r = ev.results[i];
          const t = r && r[0] ? r[0].transcript : '';
          if (r && r.isFinal) fin += t;
          else intr += t;
        }
        if (fin) finalText = fin;
        speech.text = (finalText + intr).trim();
        if (spLive) spLive.innerHTML = esc(finalText) + (intr ? '<span class="interim">' + esc(intr) + '</span>' : '');
        if (spScoreBtn && !speech.running) spScoreBtn.disabled = !speech.text;
      };
      rec.onerror = ev => {
        const code = ev && ev.error ? ev.error : 'unknown';
        if (code === 'aborted') return;
        const REASON = {
          'not-allowed': '麦克风 / 语音识别权限被拒绝',
          'service-not-allowed': '浏览器禁止了语音识别服务',
          'no-speech': '没有识别到语音',
          'audio-capture': '没有可用的麦克风',
          'network': '语音识别需要联网，当前网络不可用'
        };
        const why = REASON[code] || ('错误 ' + code);
        spShowFallback('语音识别不可用（' + why + '），可手动输入这一层的内容后评分。');
        spShowError('语音识别出错：' + why + '，已切换为手动输入。');
      };
      rec.onend = () => {
        if (speech.recToken !== token) return; // 已切卡片 / 已重开这一层
        speech.rec = null;
        speech.recToken = null;
        if (finalText) speech.text = finalText.trim();
        if (spLive && speech.text) spLive.innerHTML = esc(speech.text);
        if (speech.running) {
          // 识别自己先结束（如静音超时），计时还在跑，等计时结束或用户提前结束
          if (spScoreBtn) spScoreBtn.disabled = !speech.text;
          return;
        }
        if (speech.layer === layer && speech.pendingScore) spScoreNow();
      };
      try { rec.start(); } catch (e) {
        speech.rec = null;
        speech.recToken = null;
        spShowFallback('语音识别启动失败，可手动输入这一层的内容后评分。');
        spShowError('语音识别启动失败：' + (e && e.message ? e.message : e));
      }
    }

    // 出师判定：主答 ≥ 阈值且无说错，追问 ≥ 阈值
    function spPassed(main, second) {
      if (!main || !second) return false;
      const hasWrong = (Array.isArray(main.verdicts) ? main.verdicts : []).some(v => v && v.type === 'wrong');
      return main.score >= PASS_LINE.main && !hasWrong && second.score >= PASS_LINE.follow;
    }

    function spSaveRecord(cardId, main, second, passed) {
      const old = speechRec(cardId);
      const now = Date.now();
      const entry = {
        ts: now,
        passed: passed,
        score: main.score,
        score2: second.score,
        followup: main.followup || '',
        text: main.text || '',
        text2: second.text || '',
        verdicts: main.verdicts || [],
        verdicts2: second.verdicts || []
      };
      const hist = [entry].concat(old && Array.isArray(old.history) ? old.history : []).slice(0, HISTORY_MAX);
      if (!store.speech || typeof store.speech !== 'object') store.speech = {};
      store.speech[cardId] = {
        ts: now,
        passed: passed,
        layers: [
          {
            text: entry.text, score: main.score, verdicts: main.verdicts || [],
            advice: main.advice || '', followup: entry.followup
          },
          { text: entry.text2, score: second.score, verdicts: second.verdicts || [], advice: second.advice || '' }
        ],
        history: hist,
        prevPassed: old ? !!old.passed : null,
        prevTs: old ? (old.ts || 0) : 0,
        prevScore: old ? spLatestScore(old) : null
      };
      save();
    }

    function apiUrl(baseURL) {
      const b = String(baseURL || LLM_DFT.baseURL).trim();
      if (/\/chat\/completions$/.test(b)) return b;
      return b.replace(/\/+$/, '') + '/chat/completions';
    }

    // 第 1 层：题干/答案/锚点 → 评分 + 自动生成 1 个追问
    // 第 2 层：题干/答案/锚点/追问/作答 → 评分
    function buildPrompt(q, layer, text, followup) {
      const anchors = (Array.isArray(q.points) ? q.points : [])
        .map(p => String(p).replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 5);
      const fus = (Array.isArray(q.followups) ? q.followups : [])
        .map(f => String(f).replace(/\s+/g, ' ').trim()).filter(Boolean).slice(0, 4);
      const lines = [];
      lines.push('你是严格的 C++ / Unreal C++ 面试口述评分员。只输出 JSON，不要输出任何解释性文字。');
      lines.push('');
      if (q.title) lines.push('【卡片标题】' + q.title);
      lines.push('【题干】' + (q.q || q.title || ''));
      if (q.answer) lines.push('【参考答案】' + String(q.answer).replace(/\s+/g, ' ').slice(0, 900));
      lines.push('【关键词锚点】（逐条判定）');
      if (anchors.length) anchors.forEach((a, i) => lines.push((i + 1) + '. ' + a));
      else lines.push('（cards 未提供锚点，请从参考答案里自行提取 3 条核心锚点判定）');
      if (fus.length) {
        lines.push('【最可能被追问】');
        fus.forEach((f, i) => lines.push((i + 1) + '. ' + f));
      }
      lines.push('');
      if (layer === 2) {
        lines.push('【追问】' + String(followup || '').replace(/\s+/g, ' ').slice(0, 160));
        lines.push('【追问作答转写】');
        lines.push('"""');
        lines.push(String(text || '').slice(0, 3000));
        lines.push('"""');
        lines.push('');
        lines.push('评分要求：');
        lines.push('1. score 为 1-100 的整数：只看这段追问作答是否答准、答全、有没有硬伤，不必要求它复述主答。');
        lines.push('2. verdicts 逐条判定这次作答的关键要点（可参考上面的锚点与参考答案）：答到 type=hit，漏掉 type=miss，说错 type=wrong；anchor 填要点原文，note 一句话说明。');
        lines.push('3. advice 只写一句话，指出这次追问作答最该补的点。');
        lines.push('4. 严格返回：{"score":72,"verdicts":[{"type":"hit","anchor":"引用不可重绑","note":"答到了只读不重绑"}],"advice":"补充一个未定义行为的例子"}');
      } else {
        lines.push('【主答转写】');
        lines.push('"""');
        lines.push(String(text || '').slice(0, 4000));
        lines.push('"""');
        lines.push('');
        lines.push('评分要求：');
        lines.push('1. score 为 1-100 的整数，按锚点覆盖度、准确性、表达结构综合给分；概念说反或明显硬伤要扣分。');
        lines.push('2. verdicts 必须覆盖上面每一条锚点：讲到了 type=hit，没讲到 type=miss，讲错 type=wrong；anchor 填锚点原文，note 用一句话说明判断依据。');
        lines.push('3. advice 只写一句话，针对最该补的那一点，可执行。');
        lines.push('4. followup：基于这张卡生成 1 个最有区分度的追问，一句话中文口语问句（例如「那如果不这样会怎样？」），不要与上面已有的追问重复。');
        lines.push('5. 严格返回：{"score":88,"verdicts":[{"type":"hit","anchor":"拷贝副本","note":"说到了值传递会拷贝"}],"advice":"补一句引用不可重绑","followup":"那如果一个对象很大又必须修改，你会怎么传？"}');
      }
      return lines.join('\n');
    }

    function parseScoreJson(raw, wantFollowup) {
      let s = String(raw == null ? '' : raw).trim();
      s = s.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
      const a = s.indexOf('{');
      const b = s.lastIndexOf('}');
      if (a >= 0 && b > a) s = s.slice(a, b + 1);
      const obj = JSON.parse(s);
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error('不是 JSON 对象');
      const score = Math.round(Number(obj.score));
      if (!isFinite(score) || score < 1 || score > 100) throw new Error('score 不是 1-100 的数字');
      const TYPES = { hit: 1, miss: 1, wrong: 1 };
      const verdicts = (Array.isArray(obj.verdicts) ? obj.verdicts : []).slice(0, 8).map(v => {
        const o = v && typeof v === 'object' ? v : {};
        return {
          type: TYPES[o.type] ? o.type : 'miss',
          anchor: String(o.anchor == null ? '' : o.anchor).slice(0, 120),
          note: String(o.note == null ? '' : o.note).slice(0, 160)
        };
      });
      const out = { score, verdicts, advice: String(obj.advice == null ? '' : obj.advice).slice(0, 200) };
      if (wantFollowup) {
        out.followup = String(obj.followup == null ? '' : obj.followup).replace(/\s+/g, ' ').slice(0, 120).trim();
      }
      return out;
    }

    // 单次 DeepSeek 调用（30 秒超时）；错误信息一律可读，不吞进 console
    async function callLlm(q, layer, text, followup) {
      const cfg = llmRead();
      const ctrl = typeof AbortController === 'function' ? new AbortController() : null;
      const timer = setTimeout(() => { if (ctrl) ctrl.abort(); }, 30000);
      try {
        const res = await fetch(apiUrl(cfg.baseURL), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + cfg.key },
          body: JSON.stringify({
            model: cfg.model,
            messages: [{ role: 'user', content: buildPrompt(q, layer, text, followup) }],
            response_format: { type: 'json_object' },
            temperature: 0.2,
            stream: false
          }),
          signal: ctrl ? ctrl.signal : undefined
        });
        const rawBody = await res.text();
        if (!res.ok) {
          let detail = rawBody.slice(0, 200);
          try {
            const j = JSON.parse(rawBody);
            if (j && j.error && j.error.message) detail = j.error.message;
          } catch (e) { /* 非 JSON 错误体，直接用原文 */ }
          throw new Error('接口返回 HTTP ' + res.status + '：' + detail +
            (res.status === 401 || res.status === 403 ? '（检查 Key 是否填对）' : ''));
        }
        let data;
        try { data = JSON.parse(rawBody); } catch (e) { throw new Error('接口返回的不是 JSON，无法解析'); }
        const content = data && data.choices && data.choices[0] && data.choices[0].message
          ? data.choices[0].message.content : '';
        if (!content) throw new Error('接口没有返回评分内容（choices[0].message.content 为空）');
        try {
          return parseScoreJson(content, layer === 1);
        } catch (e) {
          throw new Error('评分结果解析失败：' + (e && e.message ? e.message : e) +
            '；原始内容：' + String(content).slice(0, 160));
        }
      } catch (e) {
        if (ctrl && ctrl.signal && ctrl.signal.aborted) {
          throw new Error('评分超时（30 秒），请检查网络或接口地址后重试');
        }
        throw e;
      } finally {
        clearTimeout(timer);
      }
    }

    async function runScore(text, layer) {
      const cardId = speech.cardId || (state.deck[state.idx] ? state.deck[state.idx].id : '');
      const q = ALL.filter(c => c.id === cardId)[0];
      if (!q) return;
      const target = layer === 2 ? 2 : 1;
      const body = String(text || '').trim();
      if (!body) { spShowError('先录一段口述，或手动输入内容再评分。'); return; }
      if (target === 2 && !(speech.main && speech.main.followup)) {
        spShowError('第 1 层还没生成追问，先完成 90 秒主答评分。');
        return;
      }
      const cfg = llmRead();
      if (!cfg.key) {
        toast('先填 DeepSeek API Key');
        spShowError('还没填 DeepSeek API Key，填好后再点一次评分。');
        openLlm();
        return;
      }
      if (speech.busy) return;
      speech.busy = true;
      speech.phase = 'scoring';
      speech.text = body;
      if (spError) { spError.hidden = true; spError.textContent = ''; }
      spSyncControls();
      spPaintSteps();
      try {
        const parsed = await callLlm(q, target, body, target === 2 ? speech.main.followup : '');
        const layerData = {
          text: body.slice(0, 4000),
          score: parsed.score,
          verdicts: parsed.verdicts,
          advice: parsed.advice
        };
        if (target === 1) {
          layerData.followup = parsed.followup || '如果换个场景，你刚才这套做法还成立吗？为什么？';
          speech.main = layerData;
          speech.layer = 2;
          speech.phase = 'waiting';
          speech.text = '';
          if (spLive) { spLive.hidden = false; spLive.textContent = layerData.text; }
          spPaintFollowup();
          spPaintSteps();
          spPaintResult(speech.cardId);
          toast('主答 ' + parsed.score + ' 分 · 已生成追问');
        } else {
          speech.second = layerData;
          const passed = spPassed(speech.main, layerData);
          spSaveRecord(cardId, speech.main, layerData, passed);
          speech.phase = 'done';
          spPaintSteps();
          spPaintResult(speech.cardId);
          spPaintHistory(speech.cardId);
          toast((passed ? '出师' : '还没出师') + '：主答 ' + speech.main.score + ' 分 · 追问 ' + parsed.score + ' 分');
        }
      } catch (e) {
        speech.phase = target === 2 && speech.main ? 'waiting' : 'idle';
        spShowError('评分失败：' + (e && e.message ? e.message : String(e)));
      } finally {
        speech.busy = false;
        spSyncControls();
        spPaintSteps();
      }
    }

    /* ---- 设置弹窗 ---- */
    const llmDialog = $('llmDialog');
    function openLlm() {
      if (!llmDialog) return;
      const cfg = llmRead();
      $('llmKey').value = cfg.key;
      $('llmBase').value = cfg.baseURL;
      $('llmModel').value = cfg.model;
      $('llmState').textContent = cfg.key ? '当前已配置 · ' + cfg.model : '当前未配置';
      llmDialog.hidden = false;
      spPaintKeyState();
      $('llmKey').focus();
    }
    function closeLlm() {
      if (llmDialog) llmDialog.hidden = true;
    }

    if (spPanel) {
      spStart.addEventListener('click', () => {
        if (speech.phase === 'running' || speech.busy) return;
        if (speech.phase === 'done') {
          // 重新训练：从第 1 层开始，历史照旧保留
          speech.main = null;
          speech.second = null;
          speech.layer = 1;
          speech.text = '';
        }
        spStartLayer(speech.layer);
      });
      spStop.addEventListener('click', spEndLayer);
      spScoreBtn.addEventListener('click', () => {
        runScore(speech.text || (spManual ? spManual.value : ''), speech.layer);
      });
      spManualBtn.addEventListener('click', () => {
        const v = spManual.value.trim();
        if (!v) { spShowError('先输入或粘贴一段内容再评分。'); return; }
        speech.text = v;
        runScore(v, speech.layer);
      });
      $('speechCfgBtn').addEventListener('click', openLlm);
      if (spHistoryBtn) {
        spHistoryBtn.addEventListener('click', () => {
          speech.historyOpen = !speech.historyOpen;
          spPaintHistory(speech.cardId);
        });
      }
      if (spHistory) {
        spHistory.addEventListener('click', e => {
          const btn = e.target.closest ? e.target.closest('.speech-hist-del') : null;
          if (!btn) return;
          spDeleteHistory(Number(btn.dataset.hist));
        });
      }
    }

    if (llmDialog) {
      $('llmClose').addEventListener('click', closeLlm);
      llmDialog.addEventListener('click', e => { if (e.target === llmDialog) closeLlm(); });
      $('llmSave').addEventListener('click', () => {
        const key = $('llmKey').value.trim();
        const baseURL = $('llmBase').value.trim() || LLM_DFT.baseURL;
        const model = $('llmModel').value.trim() || LLM_DFT.model;
        if (!key) { $('llmState').textContent = '请先填 API Key'; $('llmKey').focus(); return; }
        if (!llmWrite({ key, baseURL, model })) {
          $('llmState').textContent = '保存失败：浏览器存储不可用';
          return;
        }
        spPaintKeyState();
        closeLlm();
        toast('评分设置已保存');
      });
      $('llmClear').addEventListener('click', () => {
        try { localStorage.removeItem(LLM_KEY); } catch (e) { /* 存储不可用时忽略 */ }
        $('llmKey').value = '';
        $('llmState').textContent = '已清除 Key';
        spPaintKeyState();
        toast('已清除 Key');
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

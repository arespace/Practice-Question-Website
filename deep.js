/**
 * 深读页：章节目录 + 单元渲染 + 搜索 + 与速背卡/检测题互链。
 * 内容来自 dist/content/<dir>.deep.index.js（索引）与 <dir>.deep.<chN>.js（章节包，按需加载）。
 */
(function () {
  'use strict';

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const norm = s => String(s == null ? '' : s).toLowerCase().replace(/\s+/g, ' ').trim();

  function start(ctx) {
    const DIR = ctx.dir;
    const META = ctx.meta || { sections: [], counts: {} };
    const INDEX = ctx.index;
    const CHAPTERS = INDEX.chapters || [];
    const SEC_NAME = {};
    (META.sections || []).forEach(s => { SEC_NAME[s.key] = s.name; });

    const article = document.getElementById('deepArticle');
    const emptyEl = document.getElementById('deepEmpty');
    const tocEl = document.getElementById('deepToc');
    const resultsEl = document.getElementById('deepResults');
    const crumbEl = document.getElementById('deepCrumb');
    const posEl = document.getElementById('deepPos');
    const prevBtn = document.getElementById('prevUnit');
    const nextBtn = document.getElementById('nextUnit');
    const searchEl = document.getElementById('deepSearch');
    const footEl = document.getElementById('deepFoot');
    const toastEl = document.getElementById('toast');
    const prioEl = document.getElementById('deepPrio');
    const prioHintEl = document.getElementById('deepPrioHint');

    const byAnchor = {};
    const byKey = {};
    const byChapter = {};
    const flat = [];
    CHAPTERS.forEach(ch => {
      byChapter[ch.id] = ch;
      ch.units.forEach(u => {
        byAnchor[u.id] = u;
        byKey[u.section + '|' + u.unit] = u;
        flat.push(u);
      });
    });
    const secTotal = {};
    flat.forEach(u => { secTotal[u.section] = (secTotal[u.section] || 0) + 1; });

    let cur = { chapterId: null, anchorId: null };
    let prio = '';
    const PRIO_NAME = { P0: 'P0 必看', P1: 'P1 有余力', P2: 'P2 可略' };
    const PRIO_COUNT = { '': 0, P0: 0, P1: 0, P2: 0 };
    flat.forEach(u => { PRIO_COUNT['']++; if (u.p) PRIO_COUNT[u.p]++; });
    function matchPrio(u) { return !prio || u.p === prio; }
    let toastTimer = null;
    function toast(msg) {
      if (!toastEl) return;
      toastEl.textContent = msg;
      toastEl.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800);
    }

    /* ---------------- 已读标记 ---------------- */
    const store = Store.dir(DIR);
    function readState() {
      if (!store.read || typeof store.read !== 'object') store.read = { ids: [], last: null };
      return store.read;
    }
    function isRead(id) { return readState().ids.indexOf(id) >= 0; }
    function readCount(ch) { return ch.units.filter(x => isRead(x.id)).length; }
    function renderResume() {
      const el = document.getElementById('deepResume');
      if (!el) return;
      const last = readState().last;
      const u = last ? byAnchor[last] : null;
      if (!u) { el.hidden = true; return; }
      el.hidden = false;
      el.textContent = '继续上次读到：' + u.title + (isRead(u.id) ? '（已读）' : '');
      el.onclick = () => openUnit(u.id);
    }
    function toggleRead(u) {
      const rs = readState();
      const i = rs.ids.indexOf(u.id);
      if (i >= 0) rs.ids.splice(i, 1);
      else rs.ids.push(u.id);
      rs.last = u.id;
      Store.save();
      renderToc();
      markActive(cur.anchorId);
      if (cur.chapterId) expandChapter(cur.chapterId);
      const btn = document.getElementById('deepReadBtn');
      if (btn) {
        btn.classList.toggle('on', isRead(u.id));
        btn.textContent = isRead(u.id) ? '✓ 已读' : '标为已读';
      }
      renderResume();
      toast(isRead(u.id) ? '已标记已读' : '已取消已读');
    }

    /* ---------------- 章节包加载 ---------------- */
    const pkgCache = {};
    const pkgLoading = {};
    function loadChapter(chId) {
      if (pkgCache[chId]) return Promise.resolve(pkgCache[chId]);
      if (pkgLoading[chId]) return pkgLoading[chId];
      pkgLoading[chId] = window.LoadBundle(
        'dist/content/' + DIR + '.deep.' + chId + '.js',
        () => !!(window.DEEP_PKG || {})[DIR + '|' + chId]
      ).then(() => {
        const pkg = (window.DEEP_PKG || {})[DIR + '|' + chId];
        if (!pkg) throw new Error('章节包格式不正确');
        pkgCache[chId] = pkg;
        return pkg;
      }).catch(e => {
        delete pkgLoading[chId];
        throw e;
      });
      return pkgLoading[chId];
    }

    function report(e) {
      if (window.ContentAlert) window.ContentAlert.report('深读章节', e);
      else console.error('[deep]', e);
    }

    /* ---------------- URL ---------------- */
    function unitUrl(u) {
      return 'deep.html?dir=' + encodeURIComponent(DIR) + '&sec=' + encodeURIComponent(u.section) + '&unit=' + u.unit;
    }
    function chapterUrl(chId) {
      return 'deep.html?dir=' + encodeURIComponent(DIR) + '&chapter=' + encodeURIComponent(chId);
    }
    function updateUrl(unit, chapterId) {
      const url = new URL(location.href);
      url.searchParams.set('dir', DIR);
      if (unit) {
        url.searchParams.set('sec', unit.section);
        url.searchParams.set('unit', String(unit.unit));
        url.searchParams.delete('chapter');
      } else if (chapterId) {
        url.searchParams.delete('sec');
        url.searchParams.delete('unit');
        url.searchParams.set('chapter', chapterId);
      }
      url.hash = '';
      try {
        history.replaceState(null, '', url.pathname + url.search);
      } catch (e) {
        // file:// 等环境不允许改写地址：退回 hash，功能不降级
        if (unit) location.hash = '#' + unit.id;
      }
    }

    /* ---------------- 目录 ---------------- */
    function renderToc() {
      tocEl.innerHTML = '';
      activeEl = null;
      openCh = null;
      CHAPTERS.forEach(ch => {
        const shown = ch.units.filter(matchPrio);
        if (!shown.length) return;
        const row = document.createElement('div');
        row.className = 'deep-ch-row';
        row.dataset.ch = ch.id;

        // 章名：只负责展开/收起，不跳页
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'deep-ch ' + ch.section;
        btn.dataset.ch = ch.id;
        btn.setAttribute('aria-expanded', 'false');
        const rc = shown.filter(x => isRead(x.id)).length;
        btn.innerHTML = '<span class="deep-ch-no">' + ch.no + '</span>' +
          '<span class="deep-ch-name" title="' + esc(ch.title) + '">' + esc(ch.name) + '</span>' +
          '<span class="deep-ch-cnt">' + (rc ? rc + '/' + shown.length : shown.length) + '</span>';
        btn.addEventListener('click', () => toggleChapter(ch.id));

        // 行尾「↗」：进入章节概览页
        const ov = document.createElement('button');
        ov.type = 'button';
        ov.className = 'deep-ch-ov';
        ov.dataset.ch = ch.id;
        ov.title = '查看第 ' + ch.no + ' 章概览';
        ov.setAttribute('aria-label', '查看第 ' + ch.no + ' 章概览');
        ov.textContent = '↗';
        ov.addEventListener('click', e => {
          e.stopPropagation();
          openChapter(ch.id);
        });

        row.appendChild(btn);
        row.appendChild(ov);
        tocEl.appendChild(row);

        const box = document.createElement('div');
        box.className = 'deep-units';
        box.dataset.ch = ch.id;
        box.hidden = true;
        ch.units.filter(matchPrio).forEach(u => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'deep-unit';
          b.dataset.anchor = u.id;
          b.innerHTML = '<span class="deep-unit-no">' + u.unit + '</span>' +
            (u.p ? '<span class="deep-unit-p ' + u.p.toLowerCase() + '">' + u.p + '</span>' : '') +
            '<span class="deep-unit-name" title="' + esc(u.title) + '">' + esc(u.title) + '</span>';
          b.addEventListener('click', () => openUnit(u.id));
          box.appendChild(b);
        });
        tocEl.appendChild(box);
      });
    }

    // 同一时间只展开一章：仅对变化的两章做 DOM 操作
    let openCh = null;
    function setChapterOpen(chId, open) {
      const next = open ? chId : null;
      if (openCh === next) return;
      if (openCh) {
        const b = tocEl.querySelector('.deep-units[data-ch="' + openCh + '"]');
        const h = tocEl.querySelector('.deep-ch[data-ch="' + openCh + '"]');
        const r = tocEl.querySelector('.deep-ch-row[data-ch="' + openCh + '"]');
        if (b) b.hidden = true;
        if (h) { h.classList.remove('active'); h.setAttribute('aria-expanded', 'false'); }
        if (r) r.classList.remove('active');
      }
      if (next) {
        const b = tocEl.querySelector('.deep-units[data-ch="' + next + '"]');
        const h = tocEl.querySelector('.deep-ch[data-ch="' + next + '"]');
        const r = tocEl.querySelector('.deep-ch-row[data-ch="' + next + '"]');
        if (b) b.hidden = false;
        if (h) { h.classList.add('active'); h.setAttribute('aria-expanded', 'true'); }
        if (r) r.classList.add('active');
      }
      openCh = next;
    }

    function expandChapter(chId) { setChapterOpen(chId, true); }

    // 点章名：同一章已展开则收起，否则只展开这一章
    function toggleChapter(chId) {
      const box = tocEl.querySelector('.deep-units[data-ch="' + chId + '"]');
      if (box && !box.hidden) setChapterOpen(chId, false);
      else setChapterOpen(chId, true);
    }

    // 只切换变化的前后两个节点，避免每次翻页遍历 122 个单元
    let activeEl = null;
    function markActive(anchorId) {
      const next = anchorId ? tocEl.querySelector('.deep-unit[data-anchor="' + anchorId + '"]') : null;
      if (activeEl === next) return;
      if (activeEl) activeEl.classList.remove('active');
      if (next) next.classList.add('active');
      activeEl = next;
    }

    /* ---------------- 面试频次筛选 ---------------- */
    function updatePrioHint() {
      if (!prioHintEl) return;
      prioHintEl.textContent = prio
        ? PRIO_NAME[prio] + ' · ' + PRIO_COUNT[prio] + ' 单元' + (prio === 'P0' ? ' · 三天精读范围' : '')
        : '全部 ' + PRIO_COUNT[''] + ' 单元 · P0 ' + PRIO_COUNT.P0 + ' 个';
    }

    function setPrio(p) {
      prio = (p === 'P0' || p === 'P1' || p === 'P2') ? p : '';
      if (prioEl) {
        prioEl.querySelectorAll('.chip').forEach(b => {
          b.classList.toggle('active', (b.dataset.p === 'all' ? '' : b.dataset.p) === prio);
        });
      }
      renderToc();
      markActive(cur.anchorId);
      if (cur.chapterId) expandChapter(cur.chapterId);
      updatePrioHint();
      const url = new URL(location.href);
      if (prio) url.searchParams.set('p', prio);
      else url.searchParams.delete('p');
      try { history.replaceState(null, '', url.pathname + url.search); } catch (e) {}
      if (searchEl && searchEl.value.trim()) runSearch(searchEl.value.trim());
    }

    /* ---------------- 渲染单元 ---------------- */
    function metaChips(u) {
      const parts = [];
      if (u.p) parts.push('<span class="deep-chip prio-' + u.p.toLowerCase() + '">' + PRIO_NAME[u.p] + '</span>');
      parts.push('<span class="deep-chip ' + esc(u.section) + '">' + esc(SEC_NAME[u.section] || u.section) + '</span>');
      const idx = flat.filter(x => x.section === u.section).findIndex(x => x.id === u.id) + 1;
      parts.push('<span class="deep-chip">单元 ' + u.unit + ' / ' + secTotal[u.section] + '（第 ' + idx + ' 个）</span>');
      if (u.difficulty) parts.push('<span class="deep-chip">难度 ' + esc(u.difficulty) + '</span>');
      if (u.minutes) parts.push('<span class="deep-chip">约 ' + u.minutes + ' min</span>');
      if (u.source) parts.push('<span class="deep-chip">来源：' + esc(u.source) + '</span>');
      if (u.cardId) parts.push('<span class="deep-chip">速背卡 ' + esc(u.cardId) + '</span>');
      return parts.join('');
    }

    // 外链带上来源；速背卡链接还需要补 sec/unit，检测题链接本身已有
    function fromDeep(url, u) {
      const hasUnit = url.indexOf('sec=') >= 0 && url.indexOf('unit=') >= 0;
      const tail = hasUnit ? '' : '&sec=' + encodeURIComponent(u.section) + '&unit=' + u.unit;
      return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'from=deep' + tail;
    }

    function renderUnit(u, body) {
      dropNoteEdit();
      hideHlBtn();
      const ch = byChapter[u.chapter] || { no: '', name: '' };
      const quizLink = u.quizCount
        ? '<a class="primary" href="' +
          fromDeep('quiz.html?dir=' + encodeURIComponent(DIR) + '&sec=' + encodeURIComponent(u.section) + '&unit=' + u.unit, u) +
          '">做本单元 ' + u.quizCount + ' 道题</a>'
        : '';
      const cardLink = u.cardId
        ? '<a href="' +
          fromDeep('index.html?dir=' + encodeURIComponent(DIR) + '&card=' + encodeURIComponent(u.cardId), u) +
          '">看对应速背卡</a>'
        : '';
      // 章末追加「下一章」入口，不新增组件
      const ci = CHAPTERS.findIndex(c => c.id === u.chapter);
      const curCh = ci >= 0 ? CHAPTERS[ci] : null;
      const nextCh = ci >= 0 ? CHAPTERS[ci + 1] : null;
      const isChEnd = !!(curCh && curCh.units.length && curCh.units[curCh.units.length - 1].id === u.id);
      const nextChLink = isChEnd && nextCh
        ? '<a href="' + chapterUrl(nextCh.id) + '">下一章 · ' + esc(nextCh.name) + '（' + nextCh.unitCount + ' 单元）</a>'
        : '';
      article.innerHTML =
        '<div class="deep-kicker">第 ' + ch.no + ' 章 · ' + esc(ch.name) + ' ｜ 单元 ' + u.unit + '</div>' +
        '<h1 class="deep-title">' + esc(u.title) + '</h1>' +
        (u.oneLine ? '<p class="deep-oneline">' + esc(u.oneLine) + '</p>' : '') +
        '<div class="deep-meta">' + metaChips(u) + '</div>' +
        '<div class="deep-body">' + window.MD.render(body || '') + '</div>' +
        '<div class="deep-actions">' + quizLink + cardLink +
        '<a href="' + chapterUrl(ch.id) + '" data-chapter="' + esc(ch.id) + '">本章目录</a>' + nextChLink +
        '<button type="button" class="deep-read' + (isRead(u.id) ? ' on' : '') + '" id="deepReadBtn">' +
        (isRead(u.id) ? '✓ 已读' : '标为已读') + '</button></div>' +
        // 正文下方：本单元高亮列表（有高亮时才显示）+ 单元笔记
        '<div class="deep-xsec" id="deepMarks" hidden>' +
        '<div class="deep-xsec-head"><span>本单元高亮</span><span class="deep-xsec-acts">点 × 取消</span></div>' +
        '<ul class="deep-mark-list" id="deepMarkItems"></ul></div>' +
        '<div class="deep-xsec" id="deepNote"></div>';
      article.hidden = false;
      emptyEl.hidden = true;
      const rb = document.getElementById('deepReadBtn');
      if (rb) rb.addEventListener('click', () => toggleRead(u));
      crumbEl.innerHTML = '第 ' + ch.no + ' 章 · <b>' + esc(ch.name) + '</b> ｜ 单元 ' + u.unit;
      crumbEl.title = '第 ' + ch.no + ' 章 · ' + ch.name + ' · 单元 ' + u.unit;
      posEl.textContent = u.unit + ' / ' + secTotal[u.section];
      buildJumpBar(u);
      enhanceBody();
      applyMarks(u.id);
      renderMarkList(u.id);
      renderNote(u.id);
    }

    function renderChapter(ch, intro) {
      dropNoteEdit();
      hideHlBtn();
      const unitLinks = ch.units.map(u =>
        '<a href="' + unitUrl(u) + '" data-anchor="' + esc(u.id) + '"><span>单元 ' + u.unit + '</span>' + esc(u.title) + '</a>'
      ).join('');
      const quizChip = ch.quizNos && ch.quizNos.length
        ? '<span class="deep-chip">本章关联题库 ' + ch.quizNos.length + ' 题</span>' : '';
      article.innerHTML =
        '<div class="deep-kicker">第 ' + ch.no + ' 章</div>' +
        '<h1 class="deep-title">' + esc(ch.title) + '</h1>' +
        '<div class="deep-meta">' +
        '<span class="deep-chip ' + esc(ch.section) + '">' + esc(SEC_NAME[ch.section] || ch.section) + '</span>' +
        '<span class="deep-chip">' + ch.unitCount + ' 单元</span>' + quizChip + '</div>' +
        '<div class="deep-body">' + window.MD.render(intro || '') + '</div>' +
        '<div class="deep-grid">' + unitLinks + '</div>';
      article.hidden = false;
      emptyEl.hidden = true;
      crumbEl.innerHTML = '第 ' + ch.no + ' 章 · <b>' + esc(ch.name) + '</b>';
      crumbEl.title = '第 ' + ch.no + ' 章 · ' + ch.name;
      posEl.textContent = ch.unitCount + ' 单元';
      enhanceBody();
    }

    /* ---------------- 正文增强：跳读条 / 代码折叠 / 表格首列 ---------------- */
    let cleanups = [];
    function clearEnhance() {
      cleanups.forEach(fn => { try { fn(); } catch (e) { /* ignore */ } });
      cleanups = [];
    }

    function buildJumpBar(u) {
      const body = article.querySelector('.deep-body');
      if (!body) return;
      const hs = Array.prototype.slice.call(body.querySelectorAll('h3'));
      if (hs.length < 2) return;
      const bar = document.createElement('div');
      bar.className = 'deep-jump';
      hs.forEach((h, i) => {
        h.id = 'j-' + u.id + '-' + i;
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'deep-jump-chip';
        b.textContent = h.textContent.trim();
        b.addEventListener('click', () => {
          const top = h.getBoundingClientRect().top + window.scrollY - 108;
          window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        });
        bar.appendChild(b);
      });
      article.insertBefore(bar, body);
    }

    function copyText(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      }
      return new Promise((resolve, reject) => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); resolve(); }
        catch (e) { reject(e); }
        finally { document.body.removeChild(ta); }
      });
    }

    function enhanceBody() {
      clearEnhance();

      // 代码块：≥24 行限高，可展开/收起并复制；文本始终留在 DOM 中，Ctrl+F 仍可命中
      article.querySelectorAll('.deep-body pre.md-pre').forEach(pre => {
        const code = pre.querySelector('code');
        if (!code) return;
        const lines = code.textContent.split('\n').length;
        if (lines < 24) return;
        const box = document.createElement('div');
        box.className = 'code-block';
        pre.parentNode.insertBefore(box, pre);
        box.appendChild(pre);
        pre.classList.add('is-foldable');

        const tools = document.createElement('div');
        tools.className = 'code-tools';

        const copy = document.createElement('button');
        copy.type = 'button';
        copy.textContent = '复制';
        copy.addEventListener('click', () => {
          copyText(code.textContent).then(() => {
            copy.textContent = '已复制';
            setTimeout(() => { copy.textContent = '复制'; }, 1200);
          }).catch(() => toast('复制失败，请手动选择'));
        });

        const more = document.createElement('button');
        more.type = 'button';
        more.textContent = '展开全部（' + lines + ' 行）';
        more.addEventListener('click', () => {
          const open = box.classList.toggle('expanded');
          more.textContent = open ? '收起' : '展开全部（' + lines + ' 行）';
        });

        tools.appendChild(copy);
        tools.appendChild(more);
        box.insertBefore(tools, pre);
      });

      // 表格：首列固定，右缘在可横滚时显示渐隐
      // 同一帧内先批量读尺寸、再批量写 class，避免 27 张表逐张强制回流
      const tableBoxes = [];
      article.querySelectorAll('.md-table-wrap').forEach(wrap => {
        if (wrap.parentNode && wrap.parentNode.classList.contains('md-table-box')) return;
        const box = document.createElement('div');
        box.className = 'md-table-box';
        wrap.parentNode.insertBefore(box, wrap);
        box.appendChild(wrap);
        const sync = () => {
          const over = wrap.scrollWidth > wrap.clientWidth + 2;
          const atEnd = wrap.scrollLeft + wrap.clientWidth >= wrap.scrollWidth - 2;
          box.classList.toggle('has-overflow', over && !atEnd);
        };
        wrap.addEventListener('scroll', sync, { passive: true });
        const onResize = () => sync();
        window.addEventListener('resize', onResize);
        cleanups.push(() => window.removeEventListener('resize', onResize));
        tableBoxes.push(sync);
      });
      if (tableBoxes.length) {
        requestAnimationFrame(() => {
          const boxes = Array.from(article.querySelectorAll('.md-table-box'));
          // 读取阶段：一次性触发一次布局
          const flags = boxes.map(box => {
            const wrap = box.firstChild;
            return wrap ? wrap.scrollWidth > wrap.clientWidth + 2 : false;
          });
          // 写入阶段：只改 class，不再读尺寸
          boxes.forEach((box, i) => box.classList.toggle('has-overflow', flags[i]));
        });
      }
    }

    /* ---------------- 划词高亮（store.deepMarks） ---------------- */
    const MARK_MIN = 2;
    const MARK_MAX = 200;
    const NOTE_MAX = 2000;
    const hlBtn = document.getElementById('deepHlBtn');
    let hlRange = null;
    let hlTimer = null;

    function marksDict() {
      if (!store.deepMarks || typeof store.deepMarks !== 'object' || Array.isArray(store.deepMarks)) {
        store.deepMarks = {};
      }
      return store.deepMarks;
    }
    function notesDict() {
      if (!store.notes || typeof store.notes !== 'object' || Array.isArray(store.notes)) {
        store.notes = {};
      }
      return store.notes;
    }
    // 返回 [{ text, i }]，i 是存储数组里的原始下标（删除时定位用）
    function marksOf(unitId) {
      const arr = marksDict()[unitId];
      if (!Array.isArray(arr)) return [];
      const out = [];
      arr.forEach((rec, i) => {
        if (!rec || typeof rec.text !== 'string') return;
        const t = rec.text.trim();
        if (t.length < MARK_MIN) return;
        out.push({ text: t, i: i, ts: rec.ts });
      });
      return out;
    }
    function bodyEl() { return article.querySelector('.deep-body'); }

    function hideHlBtn() {
      hlRange = null;
      if (hlBtn) hlBtn.hidden = true;
    }

    // 选区落在正文内且文本长度够，才浮现按钮
    function syncHlBtn() {
      if (!hlBtn) return;
      const sel = window.getSelection();
      const body = bodyEl();
      if (!sel || sel.isCollapsed || !sel.rangeCount || !body) return hideHlBtn();
      const range = sel.getRangeAt(0);
      if (!body.contains(range.startContainer) || !body.contains(range.endContainer)) return hideHlBtn();
      const text = String(range.toString() || '').trim();
      if (text.length < MARK_MIN) return hideHlBtn();
      hlRange = range.cloneRange();
      hlBtn.hidden = false;
      placeHlBtn(range);
    }

    // 贴在选区末行附近；越界时上下左右都收住，不超出视口
    function placeHlBtn(range) {
      const rects = range.getClientRects();
      let rect = range.getBoundingClientRect();
      for (let i = rects.length - 1; i >= 0; i--) {
        if (rects[i].width || rects[i].height) { rect = rects[i]; break; }
      }
      if (!rect || (!rect.width && !rect.height)) { hideHlBtn(); return; }
      const pad = 8;
      const bw = hlBtn.offsetWidth || 56;
      const bh = hlBtn.offsetHeight || 30;
      let left = rect.left + rect.width / 2 - bw / 2;
      left = Math.min(Math.max(pad, left), Math.max(pad, window.innerWidth - bw - pad));
      let top = rect.bottom + 6;
      if (top + bh > window.innerHeight - pad) top = rect.top - bh - 6; // 下方放不下就翻到选区上方
      top = Math.min(Math.max(pad, top), Math.max(pad, window.innerHeight - bh - pad));
      hlBtn.style.left = Math.round(left) + 'px';
      hlBtn.style.top = Math.round(top) + 'px';
    }

    /* 正文文本节点地图：只处理文本节点，不碰 HTML 结构与转义 */
    function textSegments(body) {
      const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          return node.nodeValue && node.nodeValue.length
            ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const segs = [];
      let full = '';
      let n = walker.nextNode();
      while (n) {
        segs.push({ node: n, start: full.length, end: full.length + n.nodeValue.length });
        full += n.nodeValue;
        n = walker.nextNode();
      }
      return { segs: segs, full: full };
    }

    function unwrapMarks(body) {
      Array.prototype.slice.call(body.querySelectorAll('mark.deep-hl')).forEach(m => {
        const p = m.parentNode;
        if (!p) return;
        while (m.firstChild) p.insertBefore(m.firstChild, m);
        p.removeChild(m);
        p.normalize();
      });
    }

    // 跨文本节点的选区会被拆成多段 mark（同一 data-hl），保证不重排既有结构
    function wrapSegments(segs, start, end, idx) {
      segs.forEach(seg => {
        const s = Math.max(start, seg.start);
        const e = Math.min(end, seg.end);
        if (e <= s) return;
        const node = seg.node;
        if (!node.parentNode) return;
        let mid = node;
        const ls = s - seg.start;
        const want = e - s;
        if (ls > 0) mid = node.splitText(ls);
        if (want < mid.nodeValue.length) mid.splitText(want);
        const mark = document.createElement('mark');
        mark.className = 'deep-hl';
        mark.dataset.hl = String(idx);
        mid.parentNode.insertBefore(mark, mid);
        mark.appendChild(mid);
      });
    }

    // 先清掉旧 mark 再按存储顺序重新包裹「首次出现」，保证刷新/切单元/删除后一致
    function applyMarks(unitId) {
      const body = bodyEl();
      if (!body) return;
      unwrapMarks(body);
      const list = marksOf(unitId);
      if (!list.length) return;
      const map = textSegments(body);
      const taken = [];
      list.forEach(rec => {
        const text = rec.text;
        let from = 0;
        let hit = -1;
        while (from <= map.full.length - text.length) {
          const at = map.full.indexOf(text, from);
          if (at < 0) break;
          const overlap = taken.some(r => at < r.end && at + text.length > r.start);
          if (!overlap) { hit = at; break; }
          from = at + 1;
        }
        if (hit < 0) return; // 正文里找不到（例如改了内容或截断后不再匹配）就跳过本条
        taken.push({ start: hit, end: hit + text.length, idx: rec.i });
      });
      taken.sort((a, b) => b.start - a.start).forEach(r => wrapSegments(map.segs, r.start, r.end, r.idx));
    }

    // 选区落在同一个文本节点内时，就地包 mark（位置准确、不动其它结构）
    function wrapTextNodeRange(range, idx) {
      const sc = range.startContainer;
      if (sc !== range.endContainer || sc.nodeType !== 3 || !sc.parentNode) return false;
      const s = range.startOffset;
      const e = range.endOffset;
      if (e <= s) return false;
      let mid = sc;
      if (s > 0) mid = sc.splitText(s);
      if (e - s < mid.nodeValue.length) mid.splitText(e - s);
      if (!mid.parentNode) return false;
      const mark = document.createElement('mark');
      mark.className = 'deep-hl';
      mark.dataset.hl = String(idx);
      mid.parentNode.insertBefore(mark, mid);
      mark.appendChild(mid);
      return true;
    }

    function addMark() {
      if (!hlRange || !cur.anchorId) return hideHlBtn();
      const unitId = cur.anchorId;
      const range = hlRange.cloneRange();
      const raw = String(hlRange.toString() || '').trim();
      hideHlBtn();
      if (raw.length < MARK_MIN) return;
      const text = raw.length > MARK_MAX ? raw.slice(0, MARK_MAX) : raw;
      const sel = window.getSelection();
      if (sel) sel.removeAllRanges();
      const all = marksDict();
      if (!Array.isArray(all[unitId])) all[unitId] = [];
      const arr = all[unitId];
      const dup = arr.some(rec => rec && typeof rec.text === 'string' && rec.text.trim() === text);
      if (dup) {
        applyMarks(unitId);
        renderMarkList(unitId);
        toast('这段已经标过了');
        return;
      }
      arr.push({ text: text, ts: Date.now() });
      Store.save();
      // 未截断且选区在单个文本节点内：按当前选区就地标黄；否则退回「首次出现」重建
      const inPlace = text.length === raw.length && wrapTextNodeRange(range, arr.length - 1);
      if (!inPlace) applyMarks(unitId);
      renderMarkList(unitId);
      toast('已标黄');
    }

    function removeMark(unitId, idx) {
      const all = marksDict();
      const arr = all[unitId];
      if (!Array.isArray(arr) || idx < 0 || idx >= arr.length) return;
      arr.splice(idx, 1);
      if (!arr.length) delete all[unitId];
      Store.save();
      applyMarks(unitId);
      renderMarkList(unitId);
      toast('已取消高亮');
    }

    function markSummary(t) {
      const s = String(t == null ? '' : t).replace(/\s+/g, ' ').trim();
      return s.length > 60 ? s.slice(0, 60) + '…' : s;
    }

    function renderMarkList(unitId) {
      const box = document.getElementById('deepMarks');
      const ul = document.getElementById('deepMarkItems');
      if (!box || !ul) return;
      const arr = marksOf(unitId);
      ul.innerHTML = '';
      box.hidden = !arr.length;
      if (!arr.length) return;
      arr.forEach(rec => {
        const li = document.createElement('li');
        li.className = 'deep-mark-item';
        const span = document.createElement('span');
        span.className = 'deep-mark-text';
        span.textContent = markSummary(rec.text);
        span.title = rec.text;
        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'deep-mark-del';
        del.dataset.hl = String(rec.i);
        del.setAttribute('aria-label', '删除这条高亮');
        del.textContent = '×';
        del.addEventListener('click', () => removeMark(unitId, rec.i));
        li.appendChild(span);
        li.appendChild(del);
        ul.appendChild(li);
      });
    }

    if (hlBtn) {
      // 按下按钮时不要清掉选区（否则拿不到 hlRange 对应的视觉位置）
      hlBtn.addEventListener('mousedown', e => e.preventDefault());
      hlBtn.addEventListener('touchstart', e => { e.preventDefault(); addMark(); }, { passive: false });
      hlBtn.addEventListener('click', addMark);
    }
    document.addEventListener('selectionchange', () => {
      clearTimeout(hlTimer);
      hlTimer = setTimeout(syncHlBtn, 120);
    });
    // 滚动（含正文内部滚动）/ 点别处 / Esc 都收起浮动按钮
    window.addEventListener('scroll', hideHlBtn, { passive: true, capture: true });
    document.addEventListener('mousedown', e => {
      if (hlBtn && e.target === hlBtn) return;
      hideHlBtn();
    }, true);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') hideHlBtn();
    });

    /* ---------------- 单元笔记（store.notes） ---------------- */
    let noteEditing = false;
    let noteUnitId = null; // 当前编辑中的笔记属于哪个单元（切单元时用它比对草稿）

    function noteOf(unitId) {
      const n = notesDict()[unitId];
      return n && typeof n.text === 'string' ? n.text : '';
    }

    // 切单元/切章节前调用：编辑态的草稿丢弃（有内容差异时轻提示）
    function dropNoteEdit() {
      if (!noteEditing) return;
      noteEditing = false;
      const owner = noteUnitId;
      noteUnitId = null;
      const ta = document.getElementById('deepNoteInput');
      if (!ta || !owner) return;
      const prev = noteOf(owner).trim();
      const now = String(ta.value || '').trim();
      if (now && now !== prev) toast('未保存的笔记已丢弃');
    }

    function noteBtn(label, cls, fn) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'deep-note-btn' + (cls ? ' ' + cls : '');
      b.textContent = label;
      b.addEventListener('click', fn);
      return b;
    }

    function renderNote(unitId) {
      const box = document.getElementById('deepNote');
      if (!box) return;
      box.innerHTML = '';
      const text = noteOf(unitId);

      const head = document.createElement('div');
      head.className = 'deep-xsec-head';
      const title = document.createElement('span');
      title.textContent = '本单元笔记';
      const acts = document.createElement('span');
      acts.className = 'deep-note-acts';
      head.appendChild(title);
      head.appendChild(acts);
      box.appendChild(head);

      const body = document.createElement('div');
      body.className = 'deep-note-body';
      box.appendChild(body);

      if (noteEditing) {
        acts.appendChild(noteBtn('保存', 'primary', () => saveNote(unitId)));
        acts.appendChild(noteBtn('取消', '', () => { noteEditing = false; noteUnitId = null; renderNote(unitId); }));

        const ta = document.createElement('textarea');
        ta.id = 'deepNoteInput';
        ta.className = 'deep-note-input';
        ta.maxLength = NOTE_MAX;
        ta.rows = 4;
        ta.placeholder = '记一句自己的理解 / 真实坑 / 面试讲法…（最多 ' + NOTE_MAX + ' 字）';
        ta.value = text;
        body.appendChild(ta);

        const count = document.createElement('div');
        count.className = 'deep-note-count';
        const sync = () => { count.textContent = ta.value.length + ' / ' + NOTE_MAX; };
        ta.addEventListener('input', sync);
        sync();
        body.appendChild(count);

        setTimeout(() => {
          try {
            ta.focus({ preventScroll: true });
            const end = ta.value.length;
            ta.setSelectionRange(end, end);
          } catch (e) { /* ignore */ }
        }, 0);
        return;
      }

      acts.appendChild(noteBtn(text.trim() ? '编辑' : '写笔记', '', () => {
        noteEditing = true;
        noteUnitId = unitId;
        renderNote(unitId);
      }));
      if (text.trim()) {
        acts.appendChild(noteBtn('删除', 'danger', () => {
          delete notesDict()[unitId];
          Store.save();
          renderNote(unitId);
          toast('笔记已删除');
        }));
      }

      if (text.trim()) {
        // 纯文本按行渲染（textContent 写入，天然转义）
        text.replace(/\r\n?/g, '\n').split('\n').forEach(line => {
          const d = document.createElement('div');
          d.className = 'deep-note-line';
          d.textContent = line || ' ';
          body.appendChild(d);
        });
      } else {
        const p = document.createElement('p');
        p.className = 'deep-note-empty';
        p.textContent = '还没有笔记。读完这一段，用自己的话记一句，下次切回来还能看到。';
        body.appendChild(p);
      }
    }

    function saveNote(unitId) {
      const ta = document.getElementById('deepNoteInput');
      const text = (ta ? String(ta.value) : '').trim().slice(0, NOTE_MAX);
      noteEditing = false;
      noteUnitId = null;
      if (!text) {
        if (notesDict()[unitId]) {
          delete notesDict()[unitId];
          Store.save();
          toast('内容为空，笔记已删除');
        } else {
          toast('内容为空，未保存');
        }
      } else {
        notesDict()[unitId] = { text: text, ts: Date.now() };
        Store.save();
        toast('笔记已保存');
      }
      renderNote(unitId);
    }

    /* ---------------- 打开单元 / 章节 ---------------- */
    function openUnit(anchorId, opts) {
      opts = opts || {};
      const meta = byAnchor[anchorId];
      if (!meta) return;
      loadChapter(meta.chapter).then(pkg => {
        const u = (pkg.units || []).filter(x => x.id === anchorId)[0];
        if (!u) throw new Error('章节包中缺少单元 ' + anchorId);
        cur = { chapterId: meta.chapter, anchorId: anchorId };
        renderUnit(meta, u.body);
        // 只有用户主动打开/跳转才更新「继续上次读到」；页面默认打开首个单元不算
        if (!opts.auto) {
          readState().last = anchorId;
          Store.save();
        }
        renderResume();
        expandChapter(meta.chapter);
        markActive(anchorId);
        if (!opts.silentUrl) updateUrl(meta, null);
        updatePrevNext(anchorId);
        if (!opts.keepSearch) closeResults();
        document.title = '单元 ' + meta.unit + ' · ' + meta.title + ' · 深读';
        if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'auto' });
        closeDrawer();
      }).catch(e => {
        report(e);
        article.innerHTML = '<div class="empty"><h3>这个单元加载失败</h3><p>' + esc(e.message) + '</p></div>';
      });
    }

    function openChapter(chId) {
      const ch = byChapter[chId];
      if (!ch) return;
      loadChapter(chId).then(pkg => {
        cur = { chapterId: chId, anchorId: null };
        renderChapter(ch, pkg.chapter && pkg.chapter.intro);
        expandChapter(chId);
        markActive(null);
        updateUrl(null, chId);
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        closeResults();
        document.title = ch.title + ' · 深读';
        if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'auto' });
        closeDrawer();
      }).catch(e => {
        report(e);
        article.innerHTML = '<div class="empty"><h3>这一章加载失败</h3><p>' + esc(e.message) + '</p></div>';
      });
    }

    function updatePrevNext(anchorId) {
      const i = flat.findIndex(x => x.id === anchorId);
      setNavBtn(prevBtn, i > 0 ? flat[i - 1] : null, 'prev');
      setNavBtn(nextBtn, i >= 0 && i < flat.length - 1 ? flat[i + 1] : null, 'next');
    }

    // 按钮显示目标标题；跨章时带章号，窄屏由 CSS 省略
    function setNavBtn(btn, unit, dir) {
      btn.disabled = !unit;
      btn.dataset.anchor = unit ? unit.id : '';
      const label = dir === 'prev' ? '上一单元' : '下一单元';
      const arrow = dir === 'prev' ? '← ' : '';
      const tail = dir === 'prev' ? '' : ' →';
      if (!unit) {
        btn.innerHTML = arrow + label + tail;
        btn.title = '';
        return;
      }
      const ch = byChapter[unit.chapter] || { no: '' };
      const cross = cur.chapterId && unit.chapter !== cur.chapterId;
      const prefix = cross ? '第 ' + ch.no + ' 章 · ' : '';
      btn.innerHTML = arrow + '<span class="nav-lbl">' + label + '</span>' +
        '<span class="nav-t"> · ' + esc(prefix + unit.title) + '</span>' + tail;
      btn.title = label + '：' + prefix + unit.title;
    }

    /* ---------------- 搜索 ---------------- */
    const searchRows = flat.map(u => ({
      u: u,
      title: norm(u.title),
      one: norm(u.oneLine),
      terms: (u.terms || []).map(norm).join(' '),
      alias: norm([u.cardId, '单元' + u.unit, '第' + u.unit + '单元', u.id].join(' '))
    }));

    function closeResults() {
      resultsEl.hidden = true;
      tocEl.hidden = false;
      searchEl.value = '';
    }

    // 在已转义的文本中包裹命中词；先按原文定位，再分段转义，避免破坏 HTML
    function highlight(text, words) {
      const raw = String(text == null ? '' : text);
      const low = raw.toLowerCase();
      const ranges = [];
      words.forEach(w => {
        if (!w) return;
        let i = low.indexOf(w);
        while (i >= 0) {
          ranges.push([i, i + w.length]);
          i = low.indexOf(w, i + w.length);
        }
      });
      if (!ranges.length) return esc(raw);
      ranges.sort((a, b) => a[0] - b[0]);
      let out = '';
      let pos = 0;
      ranges.forEach(r => {
        if (r[0] < pos) return;
        out += esc(raw.slice(pos, r[0])) + '<mark>' + esc(raw.slice(r[0], r[1])) + '</mark>';
        pos = r[1];
      });
      return out + esc(raw.slice(pos));
    }

    const RES_LIMIT = 30;

    function runSearch(q) {
      const words = norm(q).split(' ').filter(Boolean);
      if (!words.length) { closeResults(); return; }
      const hits = [];
      searchRows.forEach(row => {
        if (!matchPrio(row.u)) return;
        const blob = row.title + ' ' + row.one + ' ' + row.terms + ' ' + row.alias;
        if (!words.every(w => blob.indexOf(w) >= 0)) return;
        let score = 0;
        words.forEach(w => {
          if (row.title.indexOf(w) >= 0) score += 3;
          if (row.alias.indexOf(w) >= 0) score += 2;
          if (row.one.indexOf(w) >= 0) score += 1;
          if (row.terms.indexOf(w) >= 0) score += 1;
        });
        hits.push({ row: row, score: score });
      });
      hits.sort((a, b) => b.score - a.score || flat.indexOf(a.row.u) - flat.indexOf(b.row.u));

      tocEl.hidden = true;
      resultsEl.hidden = false;
      if (!hits.length) {
        resultsEl.innerHTML = '<div class="deep-res-empty">没有命中标题或关键词。<button type="button" class="ghost-btn small" id="searchInChapter">在当前章正文中查找</button></div>';
        const btn = document.getElementById('searchInChapter');
        if (btn) btn.addEventListener('click', () => searchInChapter(words));
        return;
      }

      const groups = [];
      const gmap = {};
      hits.slice(0, RES_LIMIT).forEach(h => {
        const u = h.row.u;
        if (!gmap[u.chapter]) {
          gmap[u.chapter] = { ch: byChapter[u.chapter], rows: [] };
          groups.push(gmap[u.chapter]);
        }
        gmap[u.chapter].rows.push(h.row);
      });

      resultsEl.innerHTML =
        '<div class="deep-res-head">共 ' + hits.length + ' 个结果' +
        (hits.length > RES_LIMIT ? '，显示前 ' + RES_LIMIT : '') + '</div>' +
        groups.map(g =>
          '<div class="deep-res-ch">第 ' + g.ch.no + ' 章 · ' + esc(g.ch.name) + '（' + g.rows.length + '）</div>' +
          g.rows.map(row => {
            const u = row.u;
            return '<button type="button" class="deep-res-item" data-anchor="' + esc(u.id) + '">' +
              '<span class="deep-res-title">' + highlight(u.title, words) + '</span>' +
              '<span class="deep-res-meta">单元 ' + u.unit + (u.cardId ? ' · ' + esc(u.cardId) : '') + '</span>' +
              (u.oneLine ? '<span class="deep-res-one">' + highlight(u.oneLine, words) + '</span>' : '') +
              '</button>';
          }).join('')
        ).join('');
      resultsEl.querySelectorAll('.deep-res-item').forEach(b => {
        b.addEventListener('click', () => openUnit(b.dataset.anchor, { keepSearch: true }));
      });
    }

    function stripMd(s) {
      return String(s || '')
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/[#>*`|_\-]/g, ' ')
        .toLowerCase();
    }

    function searchInChapter(words) {
      const chId = cur.chapterId || (CHAPTERS[0] && CHAPTERS[0].id);
      loadChapter(chId).then(pkg => {
        const hits = (pkg.units || []).filter(u => {
          const text = stripMd(u.title + ' ' + u.body);
          return words.every(w => text.indexOf(w) >= 0);
        });
        if (!hits.length) {
          toast('本章正文也没有找到「' + words.join(' ') + '」');
          return;
        }
        resultsEl.innerHTML = '<div class="deep-res-empty">第 ' + (byChapter[chId] || {}).no + ' 章正文命中 ' + hits.length + ' 个单元：</div>' +
          hits.map(u => '<button type="button" class="deep-res-item" data-anchor="' + esc(u.id) + '">' +
            '<span class="deep-res-title">' + esc(u.title) + '</span>' +
            '<span class="deep-res-meta">单元 ' + u.unit + ' · 正文命中</span></button>').join('');
        resultsEl.querySelectorAll('.deep-res-item').forEach(b => {
          b.addEventListener('click', () => openUnit(b.dataset.anchor, { keepSearch: true }));
        });
      }).catch(e => { report(e); toast('章节包加载失败'); });
    }

    /* ---------------- 交互 ---------------- */
    prevBtn.addEventListener('click', () => { if (prevBtn.dataset.anchor) openUnit(prevBtn.dataset.anchor); });
    nextBtn.addEventListener('click', () => { if (nextBtn.dataset.anchor) openUnit(nextBtn.dataset.anchor); });

    let searchTimer = null;
    searchEl.addEventListener('input', e => {
      clearTimeout(searchTimer);
      const v = e.target.value;
      searchTimer = setTimeout(() => runSearch(v), 140);
    });
    searchEl.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeResults(); searchEl.blur(); }
    });

    article.addEventListener('click', e => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.indexOf('deep.html') === 0) {
        const u = new URL(href, location.href);
        const unit = Number(u.searchParams.get('unit') || 0);
        const sec = u.searchParams.get('sec') || '';
        const chapter = u.searchParams.get('chapter') || '';
        if (unit && byKey[sec + '|' + unit]) {
          e.preventDefault();
          openUnit(byKey[sec + '|' + unit].id);
          return;
        }
        if (chapter && byChapter[chapter]) {
          e.preventDefault();
          openChapter(chapter);
          return;
        }
      }
      if (a.dataset.chapter) {
        e.preventDefault();
        openChapter(a.dataset.chapter);
        return;
      }
      if (a.dataset.anchor) {
        e.preventDefault();
        openUnit(a.dataset.anchor);
      }
    });

    document.addEventListener('keydown', e => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); if (nextBtn.dataset.anchor) openUnit(nextBtn.dataset.anchor); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); if (prevBtn.dataset.anchor) openUnit(prevBtn.dataset.anchor); }
      else if (e.key === 'Home' || e.key === 'End') {
        const ch = cur.chapterId ? byChapter[cur.chapterId] : null;
        if (ch && ch.units.length) {
          e.preventDefault();
          const target = e.key === 'Home' ? ch.units[0] : ch.units[ch.units.length - 1];
          openUnit(target.id);
        }
      }
      else if (e.key === '/') { e.preventDefault(); focusSearch(); }
      else if (e.key === 'Escape') { closeDrawer(); }
    });

    /* ---------------- 侧栏抽屉 / 主题 ---------------- */
    const sidebar = document.getElementById('sidebar');
    const scrim = document.getElementById('scrim');
    function openDrawer(open) {
      if (!sidebar || !scrim) return;
      sidebar.classList.toggle('open', open);
      scrim.classList.toggle('show', open);
      // 窄屏打开抽屉时，把当前章滚到可视区中央
      if (open && window.matchMedia('(max-width: 960px)').matches) {
        setTimeout(() => {
          const row = tocEl.querySelector('.deep-ch-row.active') || tocEl.querySelector('.deep-ch-row');
          if (row) row.scrollIntoView({ block: 'center' });
        }, 220);
      }
    }
    function closeDrawer() { openDrawer(false); }

    function focusSearch() {
      openDrawer(true);
      setTimeout(() => searchEl.focus({ preventScroll: true }), 200);
    }

    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    if (menuBtn) menuBtn.addEventListener('click', () => openDrawer(true));
    if (closeBtn) closeBtn.addEventListener('click', () => openDrawer(false));
    if (scrim) scrim.addEventListener('click', () => openDrawer(false));

    // 窄屏：header 搜索图标直达输入框；面包屑变成章/单元选择器
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) searchBtn.addEventListener('click', () => focusSearch());
    crumbEl.addEventListener('click', () => openDrawer(true));

    document.documentElement.setAttribute('data-theme', Store.data.theme);
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', () => {
      Store.data.theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', Store.data.theme);
      Store.save();
    });

    /* ---------------- 启动 ---------------- */
    const brand = document.getElementById('deepBrand');
    if (brand) brand.textContent = '深读 · ' + (META.title || DIR);
    const sub = document.getElementById('deepSub');
    if (sub) {
      sub.textContent = INDEX.counts.chapters + ' 章 · ' + INDEX.counts.units + ' 单元（C++ ' +
        INDEX.counts.cpp + ' / UE ' + INDEX.counts.ue + '）· 本质 / 实战 / 面试讲法 / 真实坑 / 练习';
    }
    if (footEl) {
      const built = (INDEX.source.builtAt || '').replace('T', ' ').slice(0, 16);
      footEl.innerHTML = '源 ' + esc((INDEX.source.sha256 || '').slice(0, 12)) + '<br />构建 ' + esc(built) +
        '<br />更新源文件后运行 node tools/deep.js --sync';
    }

    if (prioEl) {
      prioEl.addEventListener('click', e => {
        const b = e.target.closest('.chip[data-p]');
        if (!b) return;
        setPrio(b.dataset.p === 'all' ? '' : b.dataset.p);
      });
    }
    setPrio(new URLSearchParams(location.search).get('p') || '');
    renderResume();

    // 路由：?unit=&sec= 优先，其次 ?chapter=，其次 hash，最后第一个单元
    const params = new URLSearchParams(location.search);
    const chapterId = params.get('chapter');
    const unitNo = Number(params.get('unit') || 0);
    const sec = params.get('sec') || '';
    const hash = (location.hash || '').replace('#', '');
    if (chapterId && byChapter[chapterId]) {
      openChapter(chapterId);
    } else if (unitNo) {
      const u = byKey[sec + '|' + unitNo] || byKey['cpp|' + unitNo] || byKey['ue|' + unitNo];
      if (u) openUnit(u.id, { silentUrl: true });
      else if (flat[0]) openUnit(flat[0].id, { auto: true });
    } else if (hash && byAnchor[hash]) {
      openUnit(hash, { silentUrl: true });
    } else if (flat[0]) {
      openUnit(flat[0].id, { auto: true });
    }
  }

  window.DeepApp = { start: start };
})();

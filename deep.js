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

    /* ---------------- 章节包加载 ---------------- */
    const pkgCache = {};
    const pkgLoading = {};
    function loadChapter(chId) {
      if (pkgCache[chId]) return Promise.resolve(pkgCache[chId]);
      if (pkgLoading[chId]) return pkgLoading[chId];
      pkgLoading[chId] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'dist/content/' + DIR + '.deep.' + chId + '.js';
        s.onload = () => {
          const pkg = (window.DEEP_PKG || {})[DIR + '|' + chId];
          if (!pkg) return reject(new Error('章节包格式不正确：' + s.src));
          pkgCache[chId] = pkg;
          resolve(pkg);
        };
        s.onerror = () => reject(new Error('章节包加载失败：' + s.src));
        document.body.appendChild(s);
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
        btn.innerHTML = '<span class="deep-ch-no">' + ch.no + '</span>' +
          '<span class="deep-ch-name" title="' + esc(ch.title) + '">' + esc(ch.name) + '</span>' +
          '<span class="deep-ch-cnt">' + shown.length + '</span>';
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

    function setChapterOpen(chId, open) {
      tocEl.querySelectorAll('.deep-units').forEach(box => {
        box.hidden = open ? box.dataset.ch !== chId : true;
      });
      tocEl.querySelectorAll('.deep-ch').forEach(b => {
        b.classList.toggle('active', open && b.dataset.ch === chId);
        b.setAttribute('aria-expanded', open && b.dataset.ch === chId ? 'true' : 'false');
      });
      tocEl.querySelectorAll('.deep-ch-row').forEach(r => {
        r.classList.toggle('active', open && r.dataset.ch === chId);
      });
    }

    function expandChapter(chId) { setChapterOpen(chId, true); }

    // 点章名：同一章已展开则收起，否则只展开这一章
    function toggleChapter(chId) {
      const box = tocEl.querySelector('.deep-units[data-ch="' + chId + '"]');
      if (box && !box.hidden) setChapterOpen(chId, false);
      else setChapterOpen(chId, true);
    }

    function markActive(anchorId) {
      tocEl.querySelectorAll('.deep-unit').forEach(b => {
        b.classList.toggle('active', b.dataset.anchor === anchorId);
      });
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
        '<a href="' + chapterUrl(ch.id) + '" data-chapter="' + esc(ch.id) + '">本章目录</a>' + nextChLink + '</div>';
      article.hidden = false;
      emptyEl.hidden = true;
      crumbEl.innerHTML = '第 ' + ch.no + ' 章 · <b>' + esc(ch.name) + '</b> ｜ 单元 ' + u.unit;
      crumbEl.title = '第 ' + ch.no + ' 章 · ' + ch.name + ' · 单元 ' + u.unit;
      posEl.textContent = u.unit + ' / ' + secTotal[u.section];
      buildJumpBar(u);
      enhanceBody();
    }

    function renderChapter(ch, intro) {
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
        sync();
      });
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
        expandChapter(meta.chapter);
        markActive(anchorId);
        if (!opts.silentUrl) updateUrl(meta, null);
        updatePrevNext(anchorId);
        if (!opts.keepSearch) closeResults();
        document.title = '单元 ' + meta.unit + ' · ' + meta.title + ' · 深读';
        window.scrollTo({ top: 0, behavior: 'auto' });
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
        window.scrollTo({ top: 0, behavior: 'auto' });
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
      else if (flat[0]) openUnit(flat[0].id);
    } else if (hash && byAnchor[hash]) {
      openUnit(hash, { silentUrl: true });
    } else if (flat[0]) {
      openUnit(flat[0].id);
    }
  }

  window.DeepApp = { start: start };
})();

/**
 * 启动器：解析 ?dir= → 按需加载当前方向的内容包 → 调用对应页面初始化。
 * 页面只加载自己需要的那一种内容（cards 或 quiz），不再整站全量加载。
 */
(function () {
  'use strict';

  const DIRS = Array.isArray(window.DIRS) ? window.DIRS : [];
  const attr = document.body.getAttribute('data-page');
  const page = attr === 'quiz' ? 'quiz' : attr === 'deep' ? 'deep' : 'cards';
  const type = page;

  // 内容异常提示条：单条坏数据只跳过并累计，不让整页白屏
  const ContentAlert = {
    count: 0,
    samples: [],
    report(id, err) {
      this.count++;
      if (this.samples.length < 3 && id) this.samples.push(String(id));
      if (err) console.error('[content] 条目异常：' + id, err);
      this.render();
    },
    render() {
      let el = document.getElementById('contentAlert');
      if (!this.count) { if (el) el.parentNode.removeChild(el); return; }
      if (!el) {
        el = document.createElement('div');
        el.id = 'contentAlert';
        el.className = 'content-alert';
        el.setAttribute('role', 'alert');
        document.body.insertBefore(el, document.body.firstChild);
      }
      const more = this.count > this.samples.length ? ' 等 ' + this.count + ' 条' : '';
      el.innerHTML = '<b>有 ' + this.count + ' 条内容显示异常，已跳过</b>' +
        '<span>' + (this.samples.length ? '（' + this.samples.join('、') + more + '）' : '') +
        ' 建议重新运行 node tools/build.js，或检查内容源文件。</span>' +
        '<button type="button" class="content-alert-close" aria-label="关闭">×</button>';
      el.querySelector('button').addEventListener('click', () => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    }
  };
  window.ContentAlert = ContentAlert;

  if (!DIRS.length) return fail('缺少方向清单 dist/dirs.js，请先运行 node tools/build.js');

  const params = new URLSearchParams(location.search);
  const wanted = params.get('dir');
  const known = DIRS.map(d => d.key);
  let key = wanted && known.indexOf(wanted) >= 0 ? wanted : '';
  if (!key) key = Store.data.lastDir && known.indexOf(Store.data.lastDir) >= 0 ? Store.data.lastDir : DIRS[0].key;
  const meta = DIRS.filter(d => d.key === key)[0];

  Store.setLastDir(key);
  document.title = page === 'quiz'
    ? '检测题 · ' + meta.title + ' 查缺补漏'
    : page === 'deep'
      ? '深读 · ' + meta.title + ' 基础知识'
      : meta.title + ' 刷题台';
  if (wanted !== key) {
    try {
      const url = new URL(location.href);
      url.searchParams.set('dir', key);
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    } catch (e) { /* file:// 下可能不允许改写地址，忽略 */ }
  }

  // 页面内互链带上方向，切换页面不丢上下文
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (/^(index|quiz|deep)\.html(\?.*)?$/.test(href)) {
      a.setAttribute('href', href.replace(/\?.*$/, '') + '?dir=' + encodeURIComponent(key));
    }
  });

  renderDirSwitch();

  if (!meta.counts || !meta.counts[type]) {
    return fail('「' + meta.title + '」暂未提供' + (type === 'cards' ? '速背卡' : type === 'quiz' ? '检测题' : '深读') + '内容。');
  }

  // 深读：先加载全局索引，再由 DeepApp 按章节按需加载正文包
  if (type === 'deep') {
    const file = 'dist/content/' + key + '.deep.index.js';
    window.LoadBundle(file, () => !!(window.DEEP && window.DEEP[key])).then(() => {
      const index = window.DEEP && window.DEEP[key];
      if (!index) return fail('深读索引格式不正确：' + file);
      try {
        if (window.DeepApp) window.DeepApp.start({ dir: key, meta: meta, index: index });
        else fail('深读页面脚本未加载');
      } catch (e) {
        ContentAlert.report('深读初始化', e);
        fail('深读初始化失败：' + (e && e.message ? e.message : e));
      }
    }).catch(() => fail('深读索引加载失败：' + file));
    return;
  }

  // 检测题：先加载元数据索引（首屏只需这一份），正文分类包由 QuizApp 按需加载
  if (type === 'quiz') {
    const file = 'dist/content/' + key + '.quiz.index.js';
    window.LoadBundle(file).then(() => {
      const bag = window.CONTENT && window.CONTENT[key];
      if (!bag || !bag.quizIndex) return fail('内容包格式不正确：' + file);
      try {
        window.QuizApp.start({ dir: key, meta: meta, data: bag.quizIndex });
      } catch (e) {
        ContentAlert.report('页面初始化', e);
        fail('页面初始化失败：' + (e && e.message ? e.message : e));
      }
    }).catch(() => fail('内容包加载失败：' + file));
    return;
  }

  const file = 'dist/content/' + key + '.' + type + '.js';
  window.LoadBundle(file, () => {
    const bag = window.CONTENT && window.CONTENT[key];
    return !!(bag && bag[type]);
  }).then(() => {
    const bag = window.CONTENT && window.CONTENT[key];
    if (!bag || !bag[type]) return fail('内容包格式不正确：' + file);
    const payload = { dir: key, meta: meta, data: bag[type] };
    // 初始化整体兜底：脚本内部抛错时给出提示条，而不是整页空白
    try {
      if (type === 'cards' && window.CardsApp) window.CardsApp.start(payload);
      else if (type === 'quiz' && window.QuizApp) window.QuizApp.start(payload);
      else fail('页面初始化脚本未加载');
    } catch (e) {
      ContentAlert.report('页面初始化', e);
      fail('页面初始化失败：' + (e && e.message ? e.message : e));
    }
  }).catch(() => fail('内容包加载失败：' + file));

  function renderDirSwitch() {
    const host = document.getElementById('dirSwitch');
    if (!host) return;
    if (DIRS.length < 2) { host.hidden = true; return; }
    host.hidden = false;
    const label = document.createElement('label');
    label.className = 'dir-switch';
    label.innerHTML = '<span>方向</span>';
    const sel = document.createElement('select');
    sel.id = 'dirSelect';
    DIRS.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.key;
      opt.textContent = d.title;
      if (d.key === key) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', () => {
      Store.setLastDir(sel.value);
      location.href = (page === 'quiz' ? 'quiz.html' : page === 'deep' ? 'deep.html' : 'index.html') + '?dir=' + encodeURIComponent(sel.value);
    });
    label.appendChild(sel);
    host.appendChild(label);
  }

  function fail(msg) {
    const main = document.getElementById('question') || document.getElementById('qText');
    if (main) main.textContent = msg;
    const toast = document.getElementById('toast');
    if (toast) { toast.textContent = msg; toast.classList.add('show'); }
    console.error('[boot] ' + msg);
  }
})();

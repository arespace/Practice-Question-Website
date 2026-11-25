/**
 * 共享 Markdown 渲染器（零依赖，先转义后解析）。
 * 支持：围栏代码、表格、引用块、有序/无序列表（含一层以上嵌套）、标题、分隔线、段落；
 * 行内支持：行内代码、链接、加粗、斜体。
 * 只用于深读页；速背卡与检测题保留各自原有的轻量渲染，避免回归。
 */
(function () {
  'use strict';

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  function inline(src) {
    let out = esc(src);
    // 行内代码先占位，避免其中内容被后继续处理
    const codes = [];
    out = out.replace(/`([^`]+)`/g, (m, c) => {
      codes.push(c);
      return '\u0000' + (codes.length - 1) + '\u0000';
    });
    // 图片降级为链接文本（当前文档无图片，保留兼容）
    out = out.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '$1');
    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, href) => {
      const ext = /^https?:/i.test(href);
      const attrs = ext ? ' target="_blank" rel="noopener noreferrer"' : '';
      return '<a href="' + href + '"' + attrs + '>' + text + '</a>';
    });
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    out = out.replace(/\u0000(\d+)\u0000/g, (m, i) => '<code>' + codes[Number(i)] + '</code>');
    return out;
  }

  const LIST_RE = /^(\s*)([-*+]|\d+\.)\s+(.*)$/;

  function parseList(lines, start) {
    const first = lines[start].match(LIST_RE);
    const baseIndent = first[1].length;
    const ordered = /^\d+\.$/.test(first[2]);
    const items = [];
    let i = start;

    while (i < lines.length) {
      const m = lines[i].match(LIST_RE);
      if (!m) break;
      const indent = m[1].length;
      if (indent < baseIndent) break;
      if (indent > baseIndent) {
        if (!items.length) break;
        // 嵌套子列表挂到上一个条目
        const sub = parseList(lines, i);
        items[items.length - 1].children.push(sub.html);
        i = sub.next;
        continue;
      }
      if (ordered !== /^\d+\.$/.test(m[2])) break;
      items.push({ text: m[3], children: [] });
      i++;
    }

    const tag = ordered ? 'ol' : 'ul';
    const html = '<' + tag + '>' + items.map(it =>
      '<li>' + inline(it.text) + it.children.join('') + '</li>'
    ).join('') + '</' + tag + '>';
    return { html, next: i };
  }

  function tableCells(row) {
    return row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  }

  function parseTable(lines, start) {
    const head = tableCells(lines[start]);
    const sep = tableCells(lines[start + 1]);
    const align = sep.map(c => {
      const l = c.charAt(0) === ':';
      const r = c.charAt(c.length - 1) === ':';
      if (l && r) return 'center';
      if (r) return 'right';
      return l ? 'left' : '';
    });
    let i = start + 2;
    const rows = [];
    while (i < lines.length && /^\s*\|/.test(lines[i])) { rows.push(tableCells(lines[i])); i++; }

    const cell = (tag, text, idx) => {
      const a = align[idx] ? ' style="text-align:' + align[idx] + '"' : '';
      return '<' + tag + a + '>' + inline(text) + '</' + tag + '>';
    };
    const html = '<div class="md-table-wrap"><table class="md-table"><thead><tr>' +
      head.map((c, k) => cell('th', c, k)).join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map((c, k) => cell('td', c, k)).join('') + '</tr>').join('') +
      '</tbody></table></div>';
    return { html, next: i };
  }

  function render(src) {
    const lines = String(src == null ? '' : src).replace(/\r\n?/g, '\n').split('\n');
    const out = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // 围栏代码
      const fence = line.match(/^\s*```(\S*)\s*$/);
      if (fence) {
        const lang = fence[1];
        const buf = [];
        i++;
        while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        out.push('<pre class="md-pre"><code' + (lang ? ' class="lang-' + esc(lang) + '"' : '') + '>' + esc(buf.join('\n')) + '</code></pre>');
        continue;
      }

      // 表格
      if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
        const t = parseTable(lines, i);
        out.push(t.html);
        i = t.next;
        continue;
      }

      // 标题（正文里主要是 ### / ####；统一映射到 h3 / h4）
      const h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        const lv = Math.min(4, Math.max(2, h[1].length));
        out.push('<h' + lv + '>' + inline(h[2]) + '</h' + lv + '>');
        i++;
        continue;
      }

      // 分隔线
      if (/^\s*---+\s*$/.test(line)) { out.push('<hr />'); i++; continue; }

      // 引用块
      if (/^\s*>\s?/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
          buf.push(lines[i].replace(/^\s*>\s?/, ''));
          i++;
        }
        out.push('<blockquote>' + render(buf.join('\n')) + '</blockquote>');
        continue;
      }

      // 列表
      if (LIST_RE.test(line)) {
        const l = parseList(lines, i);
        out.push(l.html);
        i = l.next;
        continue;
      }

      if (!line.trim()) { i++; continue; }

      // 段落：遇到块级结构即停止
      const buf = [];
      while (i < lines.length && lines[i].trim() &&
        !/^\s*```/.test(lines[i]) && !/^\s*\|/.test(lines[i]) &&
        !LIST_RE.test(lines[i]) && !/^#{1,6}\s+/.test(lines[i]) &&
        !/^\s*>\s?/.test(lines[i]) && !/^\s*---+\s*$/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      if (buf.length) out.push('<p>' + inline(buf.join('\n')) + '</p>');
      else { out.push('<p>' + inline(line) + '</p>'); i++; }
    }

    return out.join('\n');
  }

  window.MD = { render: render, inline: inline };
})();

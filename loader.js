/**
 * 内容包加载器：统一入口，失败时抛出可读错误供调用方兜底。
 * （线上托管不收 .js.gz 预压缩包，这里只做普通 <script> 加载。）
 */
(function () {
  'use strict';

  window.LoadBundle = function (url) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = url;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('脚本加载失败：' + url));
      document.head.appendChild(s);
    });
  };
})();

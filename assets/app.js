/**
 * PcAnalyzer — Pages helper (UI only).
 * Keyword: pc analyzer
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'PcAnalyzer',
    keyword: 'pc analyzer',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.PcAnalyzerUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);

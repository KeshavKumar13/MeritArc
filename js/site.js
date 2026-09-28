(function(){
  let loadingTimer = null;
  let minimumVisibleTimer = null;

  function ensureLoader(){
    let el = document.getElementById('siteLoadingOverlay');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'siteLoadingOverlay';
    el.className = 'site-loading-overlay hidden';
    el.innerHTML = '<div class="site-loading-card"><div class="site-spinner"></div><div id="siteLoadingText">Loading MeritArc…</div></div>';
    if (document.body) document.body.insertBefore(el, document.body.firstChild);
    return el;
  }

  function showLoader(message, immediate){
    const el = ensureLoader();
    if (!el) return;
    if (loadingTimer) clearTimeout(loadingTimer);
    el.querySelector('#siteLoadingText').textContent = message || 'Loading MeritArc…';
    const reveal = () => {
      el.classList.remove('hidden');
      if (minimumVisibleTimer) clearTimeout(minimumVisibleTimer);
      minimumVisibleTimer = setTimeout(() => {}, 260);
    };
    if (immediate) reveal(); else loadingTimer = setTimeout(reveal, 40);
  }

  function hideLoader(){
    if (loadingTimer) { clearTimeout(loadingTimer); loadingTimer = null; }
    const el = document.getElementById('siteLoadingOverlay');
    if (el) el.classList.add('hidden');
  }

  window.showSiteLoading = function(message){ showLoader(message, true); };
  window.hideSiteLoading = hideLoader;

  function normalizeVisibleUnderscores(){
    if (!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.parentElement && !['SCRIPT','STYLE','TEXTAREA','INPUT'].includes(node.parentElement.tagName) && node.nodeValue.includes('_')) nodes.push(node);
    }
    nodes.forEach(n => n.nodeValue = n.nodeValue.replaceAll('_',' '));
  }

  function beginPageLoad(){
    ensureLoader();
    showLoader('Loading MeritArc…', true);
    normalizeVisibleUnderscores();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', beginPageLoad, {once:true});
  } else {
    beginPageLoad();
  }

  window.addEventListener('load', () => {
    hideLoader();
  }, {once:true});

  window.addEventListener('pageshow', hideLoader);
})();

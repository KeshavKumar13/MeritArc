(function(){
  function ensureLoader(){
    if(document.getElementById('siteLoadingOverlay')) return document.getElementById('siteLoadingOverlay');
    const el=document.createElement('div');el.id='siteLoadingOverlay';el.className='site-loading-overlay hidden';el.innerHTML='<div class="site-loading-card"><div class="site-spinner"></div><div id="siteLoadingText">Loading…</div></div>';
    document.body.insertBefore(el,document.body.firstChild);return el;
  }
  window.showSiteLoading=function(message){const el=ensureLoader();el.querySelector('#siteLoadingText').textContent=message||'Loading…';el.classList.remove('hidden');};
  window.hideSiteLoading=function(){const el=document.getElementById('siteLoadingOverlay');if(el) el.classList.add('hidden');};
  document.addEventListener('DOMContentLoaded',function(){
    ensureLoader();hideSiteLoading();
    document.addEventListener('click',function(e){
      const target=e.target.closest('a[href], .nav button, .exam-card, .quick-practice-card');
      if(!target) return;
      const href=target.getAttribute('href')||'';
      if(href.startsWith('mailto:')||href.startsWith('javascript:')) return;
      if(target.closest('#siteLoadingOverlay')) return;
      if(target.classList.contains('secondary') && target.id==='clearLibrarySearch') return;
      showSiteLoading('Loading…');
    },true);
    window.addEventListener('pageshow',hideSiteLoading);
  });
})();
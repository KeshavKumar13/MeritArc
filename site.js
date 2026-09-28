(function(){
  let loadingTimer=null;
  // Apply the initial page loader immediately, before the DOM is ready.
  document.documentElement.classList.add('site-loading');

  function ensureLoader(){
    if(document.getElementById('siteLoadingOverlay')) return document.getElementById('siteLoadingOverlay');
    if(!document.body) return null;
    const el=document.createElement('div');
    el.id='siteLoadingOverlay';
    el.className='site-loading-overlay hidden';
    el.innerHTML='<div class="site-loading-card"><div class="site-spinner"></div><div id="siteLoadingText">Loading…</div></div>';
    document.body.insertBefore(el,document.body.firstChild);
    return el;
  }

  function finishInitialLoad(){
    document.documentElement.classList.remove('site-loading');
    if(loadingTimer){clearTimeout(loadingTimer);loadingTimer=null;}
    const el=document.getElementById('siteLoadingOverlay');
    if(el) el.classList.add('hidden');
  }

  window.showSiteLoading=function(message){
    const el=ensureLoader();
    if(!el) return;
    if(loadingTimer) clearTimeout(loadingTimer);
    el.querySelector('#siteLoadingText').textContent=message||'Loading…';
    el.classList.add('hidden');
    loadingTimer=setTimeout(()=>{el.classList.remove('hidden');loadingTimer=null;},180);
  };

  window.hideSiteLoading=function(){finishInitialLoad();};

  function normalizeVisibleUnderscores(){
    if(!document.body) return;
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[]; let node;
    while(node=walker.nextNode()){
      if(node.parentElement&&!['SCRIPT','STYLE','TEXTAREA','INPUT'].includes(node.parentElement.tagName)&&node.nodeValue.includes('_')) nodes.push(node);
    }
    nodes.forEach(n=>n.nodeValue=n.nodeValue.replaceAll('_',' '));
  }

  document.addEventListener('DOMContentLoaded',function(){
    ensureLoader();
    normalizeVisibleUnderscores();
  });

  window.addEventListener('load',finishInitialLoad,{once:true});
  window.addEventListener('pageshow',finishInitialLoad);

  // Safety fallback so a failed third-party resource can never leave the page covered forever.
  setTimeout(finishInitialLoad,8000);
})();

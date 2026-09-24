(() => {
  const DATA = window.MERITARC_DATA;
  const group = document.body.dataset.group;
  const $ = id => document.getElementById(id);
  const subjects = Object.entries(DATA).filter(([, item]) => item.group === group);
  $('categoryTitle').textContent = group;
  $('categoryDescription').textContent = `Practice ${subjects.length} assessment${subjects.length===1?'':'s'} in this category. Each attempt selects a fresh random set of questions.`;
  $('categoryGrid').innerHTML = subjects.map(([name,item]) => `
    <div class="card subject" data-subject="${escapeHtml(name)}">
      <div class="subject-icon">${escapeHtml(item.icon)}</div>
      <h3>${escapeHtml(name)}</h3>
      <div class="muted">${escapeHtml(item.desc)}</div>
      <span class="tag">10 questions per attempt</span>
    </div>`).join('');
  document.querySelectorAll('.subject').forEach(card => card.addEventListener('click', () => {
    window.location.href = `/?subject=${encodeURIComponent(card.dataset.subject)}#assessment`;
  }));
  $('subjectCount').textContent = `${subjects.length} assessments`;
  function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
})();

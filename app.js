(function(){
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.desktop-nav');
  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
  // Existing source content is inserted as markup so every original skill and timeline entry is retained.
  fetch('content.html').then(r=>r.text()).then(html=>{const doc=new DOMParser().parseFromString(html,'text/html');const skillTarget=document.getElementById('skills-content'),skillSource=doc.getElementById('skills-content');if(skillTarget&&skillSource)skillTarget.innerHTML=skillSource.innerHTML;const timeline=doc.getElementById('timeline-content');if(timeline){timeline.querySelectorAll('.timeline-item').forEach(item=>{const target=item.classList.contains('edu')?document.getElementById('education-list'):document.getElementById('experience-list');target?.append(item);});}document.querySelectorAll('#skills-content .skill-category-card,#experience-list .timeline-item,#education-list .timeline-item').forEach(card=>card.classList.add('reveal'));observe();});
  const observe=()=>{const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.section,.flagship-card,.project-card,.credential-card,.reveal').forEach(el=>{el.classList.add('reveal');io.observe(el)});};
  document.addEventListener('DOMContentLoaded',observe);
})();

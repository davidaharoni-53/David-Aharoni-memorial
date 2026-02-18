/* shared.js – lightbox + nav toggle + scroll reveal */

// ── Scroll reveal ──
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));

  // ── Nav toggle (mobile) ──
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) links.classList.remove('open');
    });
  }

  // ── Lightbox ──
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');
  const lbPrev  = document.getElementById('lb-prev');
  const lbNext  = document.getElementById('lb-next');
  const lbCount = document.getElementById('lb-counter');

  if (!lb) return;

  let items = [], current = 0;

  function openLb(idx) {
    current = idx;
    const img = items[current].querySelector('img');
    lbImg.src = img.src; lbImg.alt = img.alt;
    if (lbCount) lbCount.textContent = `${current + 1} / ${items.length}`;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }
  function step(dir) { openLb((current + dir + items.length) % items.length); }

  function initLightbox() {
    items = Array.from(document.querySelectorAll('.masonry-item, .gallery-item'));
    items.forEach((item, i) => {
      item.addEventListener('click', () => openLb(i));
    });
  }
  initLightbox();

  if (lbClose) lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
  if (lbPrev) lbPrev.addEventListener('click', () => step(-1));
  if (lbNext) lbNext.addEventListener('click', () => step(1));
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') step(-1);
    if (e.key === 'ArrowLeft')  step(1);
  });
});

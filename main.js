/* ============================================================
   DA FONSECA – SOCIEDADE DE ADVOGADOS
   main.js – Comportamentos globais
   ============================================================ */

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ── HAMBURGER MOBILE ── */
const hamburger = document.querySelector('.nav-hamburger');
const drawer    = document.querySelector('.nav-drawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── ACTIVE NAV LINK ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .65s ease, transform .65s ease';
  revealObserver.observe(el);
});

/* ── WHATSAPP FLOAT ── */
// Número já configurado no HTML
// Acionado ao clicar no botão flutuante

/* ── FORMSPREE AJAX SUBMIT ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn    = contactForm.querySelector('button[type="submit"]');
    const status = document.getElementById('form-status');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Mensagem enviada! Retornaremos em breve.';
        status.style.color = '#6dcc8a';
        contactForm.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = 'Erro ao enviar. Por favor, tente novamente ou envie por e-mail.';
      status.style.color = '#e06060';
    }
    btn.disabled = false;
    btn.textContent = 'Enviar Mensagem';
  });
}

/* ── YEAR FOOTER ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

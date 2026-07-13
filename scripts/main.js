// ==========================================================================
// Smooth scroll for in-page anchor links (e.g. Hero CTA buttons, nav links)
// ==========================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMobileNav();
    });
  });
}

// ==========================================================================
// Mobile navigation toggle
// ==========================================================================
function closeMobileNav() {
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('navToggle');
  if (!menu || !toggle) return;
  menu.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}

function initMobileNav() {
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('navToggle');
  if (!menu || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ==========================================================================
// Theme toggle (light / dark), persisted in localStorage
// ==========================================================================
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = stored || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.innerHTML = theme === 'dark'
      ? '<svg class="icon" aria-hidden="true"><use href="#icon-sun"></use></svg>'
      : '<svg class="icon" aria-hidden="true"><use href="#icon-moon"></use></svg>';
  }
}

// ==========================================================================
// Scroll-spy: highlight the nav link for the section in view
// ==========================================================================
function initScrollSpy() {
  const links = document.querySelectorAll('.nav__link');
  const sections = Array.from(links)
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove('is-active'));
        const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('is-active');
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ==========================================================================
// Contact form — builds a mailto: link (static site, no backend)
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      if (note) note.textContent = 'Please fill in all fields before sending.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:amareshsubudhi@gmail.com?subject=${subject}&body=${body}`;

    if (note) note.textContent = 'Opening your email client to send this message…';
  });
}

// ==========================================================================
// Footer year
// ==========================================================================
function initFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initMobileNav();
  initThemeToggle();
  initScrollSpy();
  initContactForm();
  initFooterYear();
});

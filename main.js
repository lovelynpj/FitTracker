// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// Scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animaciones al hacer scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0.1s';
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => { observer.observe(el); });

// ============================================================
// THEME SWITCH — modo claro / oscuro
// ============================================================
(function () {
  const THEME_KEY = 'fittracker_theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }

  // Aplica el tema guardado apenas carga la página
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);

  // Conecta todos los switches de la página
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-switch__checkbox').forEach(checkbox => {
      // checked = oscuro (luna), unchecked = claro (sol)
      checkbox.checked = (localStorage.getItem(THEME_KEY) || 'dark') === 'dark';

      checkbox.addEventListener('change', () => {
        const theme = checkbox.checked ? 'dark' : 'light';
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
        // Sincroniza todos los checkboxes de la misma página
        document.querySelectorAll('.theme-switch__checkbox').forEach(cb => {
          cb.checked = checkbox.checked;
        });
      });
    });
  });
})();

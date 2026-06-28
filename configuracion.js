/* ============================================================
   FitTracker — Configuración del usuario
   Lógica de validación, tema y guardado (sin backend / sin BD)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     Estado "guardado" simulado (en memoria, no localStorage)
  --------------------------------------------------------- */
  const savedState = {
    username: 'Adriel',
    email: 'adriel@fittracker.com',
  };

  const form = document.getElementById('settings-form');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const currentPasswordInput = document.getElementById('current-password');
  const newPasswordInput = document.getElementById('new-password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const usernameHint = document.getElementById('username-hint');
  const emailHint = document.getElementById('email-hint');
  const confirmHint = document.getElementById('confirm-hint');
  const strengthFill = document.getElementById('strength-fill');
  const strengthLabel = document.getElementById('strength-label');
  const themeButtons = document.querySelectorAll('.theme-btn');
  const saveStatus = document.getElementById('save-status');
  const toast = document.getElementById('toast');
  const discardBtn = document.getElementById('discard-btn');

  /* ---------------------------------------------------------
     Helpers de validación
  --------------------------------------------------------- */
  function setHint(el, input, message, type) {
    el.textContent = message || '';
    el.classList.remove('error', 'success');
    input.classList.remove('input-error', 'input-valid');
    if (type === 'error') {
      el.classList.add('error');
      input.classList.add('input-error');
    } else if (type === 'success') {
      el.classList.add('success');
      input.classList.add('input-valid');
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateUsername() {
    const value = usernameInput.value.trim();
    if (value.length === 0) {
      setHint(usernameHint, usernameInput, 'El nombre de usuario no puede estar vacío.', 'error');
      return false;
    }
    if (value.length < 3) {
      setHint(usernameHint, usernameInput, 'Debe tener al menos 3 caracteres.', 'error');
      return false;
    }
    setHint(usernameHint, usernameInput, '', null);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    if (value.length === 0) {
      setHint(emailHint, emailInput, 'El correo no puede estar vacío.', 'error');
      return false;
    }
    if (!isValidEmail(value)) {
      setHint(emailHint, emailInput, 'Ingresá un correo electrónico válido.', 'error');
      return false;
    }
    setHint(emailHint, emailInput, '', null);
    return true;
  }

  function getPasswordStrength(value) {
    if (!value) return { score: 0, label: '' };
    let score = 0;
    if (value.length >= 8) score++;
    if (value.length >= 12) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 1) return { score: 25, label: 'Débil', color: '#ef4444' };
    if (score <= 3) return { score: 60, label: 'Media', color: '#f59e0b' };
    return { score: 100, label: 'Fuerte', color: '#22c55e' };
  }

  function updatePasswordStrength() {
    const value = newPasswordInput.value;
    const { score, label, color } = getPasswordStrength(value);
    strengthFill.style.width = score + '%';
    strengthFill.style.background = color || '#334155';
    strengthLabel.textContent = label;
  }

  function validatePasswords() {
    const current = currentPasswordInput.value;
    const next = newPasswordInput.value;
    const confirm = confirmPasswordInput.value;

    // Si no se intenta cambiar la contraseña, no hay nada que validar
    if (!current && !next && !confirm) {
      setHint(confirmHint, confirmPasswordInput, '', null);
      return true;
    }

    if (next && next.length < 8) {
      setHint(confirmHint, confirmPasswordInput, 'La nueva contraseña debe tener al menos 8 caracteres.', 'error');
      return false;
    }

    if (next !== confirm) {
      setHint(confirmHint, confirmPasswordInput, 'Las contraseñas no coinciden.', 'error');
      return false;
    }

    if (next && !current) {
      setHint(confirmHint, confirmPasswordInput, 'Ingresá tu contraseña actual para confirmar el cambio.', 'error');
      currentPasswordInput.classList.add('input-error');
      return false;
    }

    currentPasswordInput.classList.remove('input-error');
    if (next) {
      setHint(confirmHint, confirmPasswordInput, 'Las contraseñas coinciden.', 'success');
    }
    return true;
  }

  /* ---------------------------------------------------------
     Listeners de validación en tiempo real
  --------------------------------------------------------- */
  usernameInput.addEventListener('input', validateUsername);
  emailInput.addEventListener('input', validateEmail);
  newPasswordInput.addEventListener('input', () => {
    updatePasswordStrength();
    validatePasswords();
  });
  confirmPasswordInput.addEventListener('input', validatePasswords);
  currentPasswordInput.addEventListener('input', validatePasswords);

  /* ---------------------------------------------------------
     Mostrar / ocultar contraseña
  --------------------------------------------------------- */
  document.querySelectorAll('.toggle-pass').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      btn.textContent = isHidden ? '🙈' : '👁️';
    });
  });

  

  /* ---------------------------------------------------------
     Envío del formulario (simulado, sin backend)
  --------------------------------------------------------- */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameOk = validateUsername();
    const emailOk = validateEmail();
    const passwordsOk = validatePasswords();

    if (!usernameOk || !emailOk || !passwordsOk) {
      saveStatus.textContent = 'Revisá los campos marcados antes de guardar.';
      saveStatus.style.color = '#ef4444';
      return;
    }

    // "Guardar" en el estado simulado
    savedState.username = usernameInput.value.trim();
    savedState.email = emailInput.value.trim();

    // Limpiar campos de contraseña tras guardar
    currentPasswordInput.value = '';
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';
    updatePasswordStrength();
    setHint(confirmHint, confirmPasswordInput, '', null);

    // Actualizar nombre visible en el header
    const userNameEl = document.querySelector('.user-name');
    if (userNameEl) userNameEl.textContent = savedState.username;
    const userAvatarEl = document.querySelector('.user-avatar');
    if (userAvatarEl) userAvatarEl.textContent = savedState.username.charAt(0).toUpperCase();

    saveStatus.textContent = '✓ Cambios guardados correctamente.';
    saveStatus.style.color = '#22c55e';

    showToast('Tus cambios se guardaron con éxito 💪');
  });

  /* ---------------------------------------------------------
     Descartar cambios (vuelve al último estado guardado)
  --------------------------------------------------------- */
  discardBtn.addEventListener('click', () => {
    usernameInput.value = savedState.username;
    emailInput.value = savedState.email;
    currentPasswordInput.value = '';
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';
    updatePasswordStrength();

    setHint(usernameHint, usernameInput, '', null);
    setHint(emailHint, emailInput, '', null);
    setHint(confirmHint, confirmPasswordInput, '', null);

    
    saveStatus.textContent = 'Cambios descartados.';
    saveStatus.style.color = '#94a3b8';
  });

  /* ---------------------------------------------------------
     Toast de confirmación
  --------------------------------------------------------- */
  let toastTimeout;
  function showToast(message) {
    clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

});

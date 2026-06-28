// ============================================================
// PESO Y MEDIDAS — gráfico de evolución + registro de peso
// Usa naranja (#f97316) como color de acento, igual que el
// gráfico de "Evolución del peso corporal" en Progreso.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const orange = '#f97316';
  const orangeSoft = 'rgba(249, 115, 22, 0.18)';
  const gridColor = '#1e293b';
  const tickColor = '#64748b';

  Chart.defaults.font.family = "Inter, sans-serif";
  Chart.defaults.font.size = 11;

  // ============================================================
  // DATOS — historial de peso (más antiguo primero)
  // Para conectar datos reales, reemplazá este array.
  // ============================================================
  let weightLog = [
    { date: '2026-05-01', label: '01 may', weight: 79.5 },
    { date: '2026-05-08', label: '08 may', weight: 79.2 },
    { date: '2026-05-15', label: '15 may', weight: 78.8 },
    { date: '2026-05-22', label: '22 may', weight: 78.5 },
    { date: '2026-05-29', label: '29 may', weight: 78.2 },
    { date: '2026-06-05', label: '05 jun', weight: 78.0 }
  ];

  const chartCtx = document.getElementById('bodyWeightChart');
  let weightChart;

  if (chartCtx) {
    weightChart = new Chart(chartCtx, {
      type: 'line',
      data: {
        labels: weightLog.map((entry) => entry.label),
        datasets: [{
          data: weightLog.map((entry) => entry.weight),
          borderColor: orange,
          backgroundColor: orangeSoft,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: orange,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderWidth: 2.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: { color: tickColor }
          },
          y: {
            grid: { color: gridColor, drawBorder: false },
            ticks: { color: tickColor }
          }
        }
      }
    });
  }

  // ============================================================
  // Formatea una fecha "YYYY-MM-DD" a "D mmm YYYY" en español
  // ============================================================
  const monthNames = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

  function formatDateLong(isoDate) {
    const [year, month, day] = isoDate.split('-').map(Number);
    return `${day} ${monthNames[month - 1]} ${year}`;
  }

  function formatDateShort(isoDate) {
    const [year, month, day] = isoDate.split('-').map(Number);
    return `${String(day).padStart(2, '0')} ${monthNames[month - 1]}`;
  }

  // ============================================================
  // Actualiza la card "Último registro" (valor + delta vs inicio)
  // ============================================================
  function updateLastWeightCard() {
    const valueEl = document.getElementById('last-weight-value');
    const deltaEl = document.getElementById('last-weight-delta');

    if (weightLog.length === 0) {
      if (valueEl) valueEl.textContent = '—';
      if (deltaEl) {
        deltaEl.textContent = 'Sin registros';
        deltaEl.classList.remove('up', 'down');
      }
      return;
    }

    const last = weightLog[weightLog.length - 1];
    const first = weightLog[0];
    const diff = +(last.weight - first.weight).toFixed(1);

    if (valueEl) valueEl.textContent = `${last.weight} kg`;

    if (deltaEl) {
      const arrow = diff <= 0 ? '↓' : '↑';
      const cls = diff <= 0 ? 'down' : 'up';
      deltaEl.textContent = `${arrow} ${Math.abs(diff)} kg vs inicio`;
      deltaEl.classList.remove('up', 'down');
      deltaEl.classList.add(cls);
    }
  }

  // ============================================================
  // Reconstruye el historial (más reciente primero), máx 6 cards
  // Cada card tiene un botón circular para borrar ese registro
  // ============================================================
  function renderHistory() {
    const grid = document.getElementById('weight-history-grid');
    if (!grid) return;

    const recent = [...weightLog].reverse().slice(0, 6);

    if (recent.length === 0) {
      grid.innerHTML = `<p class="weight-history-empty">Todavía no hay registros.</p>`;
      return;
    }

    grid.innerHTML = recent.map((entry) => `
      <div class="weight-history-item">
        <button class="weight-history-delete" data-date="${entry.date}" title="Borrar registro" aria-label="Borrar registro">
          <svg class="delete-svgIcon" viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>
        <p class="weight-history-date">${formatDateLong(entry.date)}</p>
        <h4 class="weight-history-value">${entry.weight} kg</h4>
      </div>
    `).join('');

    grid.querySelectorAll('.weight-history-delete').forEach((btn) => {
      btn.addEventListener('click', () => openConfirmModal(btn.dataset.date));
    });
  }

  // ============================================================
  // Modal de confirmación de borrado
  // ============================================================
  const confirmOverlay = document.getElementById('confirm-overlay');
  const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
  let pendingDeleteDate = null;

  function openConfirmModal(dateValue) {
    pendingDeleteDate = dateValue;
    if (confirmOverlay) confirmOverlay.classList.add('is-visible');
  }

  function closeConfirmModal() {
    pendingDeleteDate = null;
    if (confirmOverlay) confirmOverlay.classList.remove('is-visible');
  }

  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener('click', closeConfirmModal);
  }

  if (confirmOverlay) {
    // Cerrar al hacer click fuera de la card del modal
    confirmOverlay.addEventListener('click', (event) => {
      if (event.target === confirmOverlay) closeConfirmModal();
    });
  }

  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
      if (pendingDeleteDate) {
        deleteEntry(pendingDeleteDate);
      }
      closeConfirmModal();
    });
  }

  // Cerrar el modal con la tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeConfirmModal();
  });

  // ============================================================
  // Borra un registro por fecha y refresca gráfico + historial
  // ============================================================
  function deleteEntry(dateValue) {
    weightLog = weightLog.filter((entry) => entry.date !== dateValue);

    if (weightChart) {
      weightChart.data.labels = weightLog.map((entry) => entry.label);
      weightChart.data.datasets[0].data = weightLog.map((entry) => entry.weight);
      weightChart.update();
    }

    updateLastWeightCard();
    renderHistory();
  }

  // ============================================================
  // Registrar nuevo peso: agrega al log, al gráfico y al historial
  // ============================================================
  const registerBtn = document.getElementById('register-weight-btn');
  const dateInput = document.getElementById('weight-date');
  const weightInput = document.getElementById('weight-value');

  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      const dateValue = dateInput ? dateInput.value : '';
      const weightValue = weightInput ? parseFloat(weightInput.value) : NaN;

      if (!dateValue || isNaN(weightValue)) {
        weightInput.focus();
        return;
      }

      // Si ya existe un registro para esa fecha, lo reemplaza
      const existingIndex = weightLog.findIndex((entry) => entry.date === dateValue);
      const newEntry = { date: dateValue, label: formatDateShort(dateValue), weight: weightValue };

      if (existingIndex >= 0) {
        weightLog[existingIndex] = newEntry;
      } else {
        weightLog.push(newEntry);
        weightLog.sort((a, b) => a.date.localeCompare(b.date));
      }

      if (weightChart) {
        weightChart.data.labels = weightLog.map((entry) => entry.label);
        weightChart.data.datasets[0].data = weightLog.map((entry) => entry.weight);
        weightChart.update();
      }

      updateLastWeightCard();
      renderHistory();
    });
  }

  // Estado inicial
  updateLastWeightCard();
  renderHistory();

});
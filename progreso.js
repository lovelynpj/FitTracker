// ============================================================
// PROGRESO — gráficos con Chart.js
// Usa los mismos colores del sistema: violeta de acento #8b5cf6
// para fuerza/volumen, naranja #f97316 para peso corporal.
//
// El toggle Semanal/Mensual cambia:
//  - los datos de "Progreso de fuerza" (por ejercicio elegido)
//  - los datos de "Volumen por sesión"
//  - los datos de "Evolución del peso corporal"
//  - los 4 valores del panel "Comparación"
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const violet = '#8b5cf6';
  const violetSoft = 'rgba(139, 92, 246, 0.18)';
  const violetSoft2 = 'rgba(139, 92, 246, 0.05)';
  const orange = '#f97316';
  const orangeSoft2 = 'rgba(249, 115, 22, 0.03)';
  const gridColor = '#1e293b';
  const tickColor = '#64748b';

  Chart.defaults.font.family = "Inter, sans-serif";
  Chart.defaults.font.size = 11;

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
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
  };

  let currentPeriod = 'semanal'; // 'semanal' | 'mensual'

  // ============================================================
  // DATOS — separados por período (semanal / mensual)
  // Para conectar datos reales, reemplazá estos valores.
  // ============================================================

  // Progreso de fuerza, por ejercicio y por período
  const strengthData = {
    semanal: {
      'Press Banca Plano': { labels: ['26 may', '02 jun', '09 jun', '16 jun', '23 jun'], data: [68, 72, 75, 80, 85] },
      'Sentadilla':        { labels: ['26 may', '02 jun', '09 jun', '16 jun', '23 jun'], data: [90, 95, 100, 102, 110] },
      'Peso Muerto':       { labels: ['26 may', '02 jun', '09 jun', '16 jun', '23 jun'], data: [100, 105, 112, 115, 120] }
    },
    mensual: {
      'Press Banca Plano': { labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'], data: [55, 60, 65, 72, 80, 85] },
      'Sentadilla':        { labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'], data: [75, 80, 88, 95, 102, 110] },
      'Peso Muerto':       { labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'], data: [85, 90, 98, 105, 113, 120] }
    }
  };

  // Volumen por sesión, por período
  const volumeData = {
    semanal: { labels: ['25-28', '05-02', '06-04', '06-09', '06-16', '06-23'], data: [9700, 6900, 7200, 7000, 12640, 8100] },
    mensual: { labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'], data: [28400, 31200, 35600, 38900, 41200, 44800] }
  };

  // Evolución del peso corporal, por período
  const weightData = {
    semanal: { labels: ['25-28', '05-02', '06-04', '06-09', '06-16', '06-23'], data: [81.4, 81.1, 80.8, 80.6, 80.3, 80.1] },
    mensual: { labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'], data: [84, 83.2, 82.5, 81.8, 80.9, 80.1] }
  };

  // Panel "Comparación", por período
  const comparisonData = {
    semanal: {
      entrenamientos: { value: '5', delta: '↑ 67% vs anterior' },
      volumen:        { value: '12.640 kg', delta: '↑ 59% vs anterior' },
      tiempo:         { value: '305 min', delta: '↑ 56% vs anterior' },
      calorias:       { value: '2.180 kcal', delta: '↑ 32% vs anterior' }
    },
    mensual: {
      entrenamientos: { value: '21', delta: '↑ 24% vs anterior' },
      volumen:        { value: '48.350 kg', delta: '↑ 18% vs anterior' },
      tiempo:         { value: '1.260 min', delta: '↑ 15% vs anterior' },
      calorias:       { value: '8.940 kcal', delta: '↑ 21% vs anterior' }
    }
  };

  // ============================================================
  // PROGRESO DE FUERZA
  // ============================================================
  const strengthCtx = document.getElementById('strengthChart');
  const exerciseSelect = document.getElementById('strength-select');
  let strengthChart;

  if (strengthCtx) {
    const firstExercise = exerciseSelect ? exerciseSelect.value : Object.keys(strengthData.semanal)[0];
    const initial = strengthData[currentPeriod][firstExercise] || strengthData[currentPeriod][Object.keys(strengthData[currentPeriod])[0]];

    strengthChart = new Chart(strengthCtx, {
      type: 'line',
      data: {
        labels: initial.labels,
        datasets: [{
          data: initial.data,
          borderColor: violet,
          backgroundColor: violetSoft,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: violet,
          pointRadius: 0,
          pointHoverRadius: 5,
          borderWidth: 2.5
        }]
      },
      options: commonOptions
    });
  }

  function updateStrengthChart() {
    if (!strengthChart) return;
    const selected = exerciseSelect ? exerciseSelect.value : Object.keys(strengthData[currentPeriod])[0];
    const dataset = strengthData[currentPeriod][selected];
    if (!dataset) return;

    strengthChart.data.labels = dataset.labels;
    strengthChart.data.datasets[0].data = dataset.data;
    strengthChart.update();
  }

  if (exerciseSelect) {
    exerciseSelect.addEventListener('change', updateStrengthChart);
  }

  // ============================================================
  // VOLUMEN POR SESIÓN
  // ============================================================
  const volumeCtx = document.getElementById('volumeChart');
  let volumeChart;

  if (volumeCtx) {
    volumeChart = new Chart(volumeCtx, {
      type: 'line',
      data: {
        labels: volumeData[currentPeriod].labels,
        datasets: [{
          data: volumeData[currentPeriod].data,
          borderColor: violet,
          backgroundColor: violetSoft2,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: violet,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderWidth: 2.5
        }]
      },
      options: commonOptions
    });
  }

  function updateVolumeChart() {
    if (!volumeChart) return;
    const dataset = volumeData[currentPeriod];
    volumeChart.data.labels = dataset.labels;
    volumeChart.data.datasets[0].data = dataset.data;
    volumeChart.update();
  }

  // ============================================================
  // EVOLUCIÓN DEL PESO CORPORAL
  // ============================================================
  const weightCtx = document.getElementById('weightChart');
  let weightChart;

  if (weightCtx) {
    weightChart = new Chart(weightCtx, {
      type: 'line',
      data: {
        labels: weightData[currentPeriod].labels,
        datasets: [{
          data: weightData[currentPeriod].data,
          borderColor: orange,
          backgroundColor: orangeSoft2,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: orange,
          pointRadius: 3,
          pointHoverRadius: 5,
          borderWidth: 2.5
        }]
      },
      options: commonOptions
    });
  }

  function updateWeightChart() {
    if (!weightChart) return;
    const dataset = weightData[currentPeriod];
    weightChart.data.labels = dataset.labels;
    weightChart.data.datasets[0].data = dataset.data;
    weightChart.update();
  }

  // ============================================================
  // PANEL "COMPARACIÓN"
  // ============================================================
  function updateComparisonPanel() {
    const data = comparisonData[currentPeriod];
    if (!data) return;

    const setField = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setField('cmp-entrenamientos', data.entrenamientos.value);
    setField('cmp-entrenamientos-delta', data.entrenamientos.delta);

    setField('cmp-volumen', data.volumen.value);
    setField('cmp-volumen-delta', data.volumen.delta);

    setField('cmp-tiempo', data.tiempo.value);
    setField('cmp-tiempo-delta', data.tiempo.delta);

    setField('cmp-calorias', data.calorias.value);
    setField('cmp-calorias-delta', data.calorias.delta);
  }

  // ============================================================
  // TOGGLE SEMANAL / MENSUAL — dispara todas las actualizaciones
  // ============================================================
  document.querySelectorAll('.period-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.period-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const label = btn.textContent.trim().toLowerCase();
      currentPeriod = label === 'mensual' ? 'mensual' : 'semanal';

      updateStrengthChart();
      updateVolumeChart();
      updateWeightChart();
      updateComparisonPanel();
    });
  });

});
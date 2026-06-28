/* ============================================
   FITTRACKER · PERFIL — Lógica
   ============================================ */

const STORAGE_KEY = 'fittracker_perfil_v1';

const RANK_TIERS = [
  { key:'novato',       label:'Novato',       min:0  },
  { key:'principiante',  label:'Principiante', min:15 },
  { key:'intermedio',   label:'Intermedio',   min:32 },
  { key:'avanzado',     label:'Avanzado',     min:50 },
  { key:'experto',      label:'Experto',      min:68 },
  { key:'elite',        label:'Élite',        min:84 },
  { key:'leyenda',      label:'Leyenda',      min:95 },
];

function getRank(progress){
  let r = RANK_TIERS[0];
  for(const t of RANK_TIERS){ if(progress >= t.min) r = t; }
  return r;
}

// ---- Datos demo (semilla) ----
const MUSCLE_SEED = [
  { id:'trapecio',      name:'Trapecio',          area:'back',  progress:38, workouts:24, volume:8200,  weight:62,  freq:'2x/sem', consistency:71,
    routines:['Espalda y Trapecio','Pull Day'], exercises:['Encogimientos con barra','Remo al cuello','Face pull'] },
  { id:'deltoides',     name:'Deltoides',         area:'front', progress:54, workouts:31, volume:11400, weight:38,  freq:'3x/sem', consistency:84,
    routines:['Push Day','Hombros Definidos'], exercises:['Press militar','Elevaciones laterales','Press Arnold'] },
  { id:'pectoral',      name:'Pectoral Mayor',    area:'front', progress:71, workouts:40, volume:18650, weight:84,  freq:'3x/sem', consistency:90,
    routines:['Push Day','Pecho Intenso'], exercises:['Press banca','Aperturas con mancuernas','Press inclinado'] },
  { id:'biceps',        name:'Bíceps',            area:'front', progress:46, workouts:28, volume:6300,  weight:26,  freq:'2x/sem', consistency:66,
    routines:['Pull Day','Brazos'], exercises:['Curl con barra','Curl martillo','Curl concentrado'] },
  { id:'triceps',       name:'Tríceps',           area:'back',  progress:49, workouts:29, volume:7100,  weight:30,  freq:'2x/sem', consistency:69,
    routines:['Push Day','Brazos'], exercises:['Press francés','Extensión en polea','Fondos en banco'] },
  { id:'antebrazos',    name:'Antebrazos',        area:'front', progress:22, workouts:14, volume:2100,  weight:18,  freq:'1x/sem', consistency:40,
    routines:['Agarre y Antebrazo'], exercises:['Curl de muñeca','Farmer carry','Colgado en barra'] },
  { id:'dorsales',      name:'Dorsales',          area:'back',  progress:63, workouts:34, volume:15800, weight:70,  freq:'3x/sem', consistency:82,
    routines:['Pull Day','Espalda Ancha'], exercises:['Dominadas','Jalón al pecho','Remo en T'] },
  { id:'abdominales',   name:'Abdominales',       area:'front', progress:58, workouts:36, volume:3200,  weight:0,   freq:'4x/sem', consistency:88,
    routines:['Core Diario','Abs Intenso'], exercises:['Plancha','Crunch en polea','Elevación de piernas'] },
  { id:'obliquos',      name:'Oblicuos',          area:'front', progress:35, workouts:20, volume:1900,  weight:0,   freq:'2x/sem', consistency:55,
    routines:['Core Diario'], exercises:['Giro ruso','Plancha lateral','Leñador en polea'] },
  { id:'gluteos',       name:'Glúteos',           area:'back',  progress:77, workouts:42, volume:24500, weight:120, freq:'3x/sem', consistency:91,
    routines:['Leg Day','Glúteos y Cadera'], exercises:['Hip thrust','Sentadilla búlgara','Patada de glúteo'] },
  { id:'cuadriceps',    name:'Cuádriceps',        area:'front', progress:82, workouts:44, volume:28900, weight:130, freq:'3x/sem', consistency:93,
    routines:['Leg Day','Piernas Fuertes'], exercises:['Sentadilla','Prensa','Zancadas'] },
  { id:'isquiotibiales',name:'Isquiotibiales',    area:'back',  progress:41, workouts:25, volume:9600,  weight:55,  freq:'2x/sem', consistency:62,
    routines:['Leg Day'], exercises:['Peso muerto rumano','Curl femoral','Buenos días'] },
  { id:'gemelos',       name:'Gemelos',           area:'back',  progress:28, workouts:18, volume:5200,  weight:60,  freq:'2x/sem', consistency:48,
    routines:['Piernas Fuertes'], exercises:['Elevación de talones de pie','Elevación sentado','Salto a la cuerda'] },
  { id:'tibial',        name:'Tibial Anterior',   area:'front', progress:17, workouts:9,  volume:900,   weight:8,   freq:'1x/sem', consistency:30,
    routines:['Prevención de Lesiones'], exercises:['Flexión dorsal con banda','Caminata en talones','Tibia raise'] },
];

const PROFILE_SEED = {
  name:'Pedro Martínez',
  avatar:'https://i.pravatar.cc/160?img=12',
  weight:78, height:178, age:23,
  level:'Intermedio', daysTrained:142, streak:9,
  goals:['Ganar masa muscular','Mejorar resistencia','Reducir grasa al 14%'],
};

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){ /* noop */ }
  const state = { profile: PROFILE_SEED, muscles: MUSCLE_SEED };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}
function saveState(state){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

const state = loadState();

function imc(weightKg, heightCm){
  const h = heightCm/100;
  return (weightKg / (h*h)).toFixed(1);
}

/* ============================================
   RENDER: Perfil
   ============================================ */
function renderProfile(){
  const p = state.profile;
  document.getElementById('pf-avatar').src = p.avatar;
  document.getElementById('pf-name').textContent = p.name;
  document.getElementById('pf-level').textContent = p.level;
  document.getElementById('pf-weight').textContent = p.weight + ' kg';
  document.getElementById('pf-height').textContent = p.height + ' cm';
  document.getElementById('pf-imc').textContent = imc(p.weight, p.height);
  document.getElementById('pf-age').textContent = p.age + ' años';
  document.getElementById('pf-streak').textContent = p.streak;
  document.getElementById('pf-days').textContent = p.daysTrained;
  const goalsEl = document.getElementById('pf-goals');
  goalsEl.innerHTML = p.goals.map(g => `
    <div class="goal-row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
      ${g}
    </div>`).join('');

  const overall = Math.round(state.muscles.reduce((a,m)=>a+m.progress,0)/state.muscles.length);
  document.querySelector('.avatar-ring').style.setProperty('--p', overall);
}

/* ============================================
   RENDER: Stats cards
   ============================================ */
function renderStats(){
  const totalWorkouts = state.muscles.reduce((a,m)=>a+m.workouts,0);
  const totalVolume = state.muscles.reduce((a,m)=>a+m.volume,0);
  const hours = Math.round(totalWorkouts * 0.9);
  const calories = Math.round(totalVolume * 0.12);
  const sorted = [...state.muscles].sort((a,b)=>b.progress-a.progress);
  const top = sorted[0], low = sorted[sorted.length-1];

  const cards = [
    { icon:'flame', value: totalWorkouts, label:'Entrenamientos completados', delta:'+6 esta semana', up:true },
    { icon:'clock', value: hours + 'h', label:'Horas entrenadas', delta:'+3.5h esta semana', up:true },
    { icon:'weight', value: (totalVolume/1000).toFixed(1)+'t', label:'Peso total levantado', delta:'+820kg esta semana', up:true },
    { icon:'bolt', value: calories.toLocaleString('es-AR'), label:'Calorías quemadas', delta:'+1,240 esta semana', up:true },
    { icon:'trend-up', value: top.name, label:'Músculo más trabajado', delta: top.progress+'% de progreso', up:true },
    { icon:'trend-down', value: low.name, label:'Menor progreso', delta: low.progress+'% — reforzar', up:false },
  ];
  const icons = {
    flame:'<path d="M12 2c1 4-3 5-3 9a3 3 0 006 0c0-1-1-2-1-3 2 1 4 3 4 6a6 6 0 11-12 0c0-5 3-7 6-12z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    weight:'<circle cx="12" cy="12" r="3"/><path d="M4 9h2M4 15h2M18 9h2M18 15h2"/><rect x="2" y="7" width="3" height="10" rx="1"/><rect x="19" y="7" width="3" height="10" rx="1"/>',
    bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
    'trend-up':'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    'trend-down':'<path d="M3 7l6 6 4-4 8 8"/><path d="M15 17h6v-6"/>',
  };
  document.getElementById('stats-grid').innerHTML = cards.map(c => `
    <div class="stat-card fade-up">
      <div class="stat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[c.icon]}</svg></div>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
      <div class="stat-delta ${c.up?'up':'down'}">${c.delta}</div>
    </div>`).join('');
}

/* ============================================
   RENDER: Muscle ranking grid
   ============================================ */
function renderMuscleGrid(){
  const grid = document.getElementById('muscle-grid');
  grid.innerHTML = state.muscles.map(m => {
    const rank = getRank(m.progress);
    return `
    <button class="muscle-card rank-${rank.key} fade-up" data-id="${m.id}">
      <div class="muscle-card-top">
        <div>
          <div class="muscle-card-name">${m.name}</div>
          <div class="muscle-card-area">${m.area === 'front' ? 'Frontal' : 'Posterior'}</div>
        </div>
        <span class="rank-badge">${rank.label}</span>
      </div>
      <div class="progress-track"><div class="progress-fill" data-w="${m.progress}"></div></div>
      <div class="muscle-card-foot">
        <span>Progreso</span>
        <b>${m.progress}%</b>
      </div>
    </button>`;
  }).join('');

  grid.querySelectorAll('.muscle-card').forEach(card => {
    card.addEventListener('click', () => openMuscleModal(card.dataset.id));
  });

  // animar barras tras montar en el DOM
  requestAnimationFrame(()=>{
    grid.querySelectorAll('.progress-fill').forEach(el=>{
      el.style.width = el.dataset.w + '%';
    });
  });
}

/* ============================================
   RENDER: Rank scale legend
   ============================================ */
function renderRankScale(){
  document.getElementById('rank-scale').innerHTML = RANK_TIERS.map(t => `
    <span class="rank-badge rank-${t.key}">${t.label}</span>
  `).join('');
}

/* ============================================
   MUSCLE MAP — interacción (SVG front/back)
   ============================================ */
function setupMuscleMap(){
  document.querySelectorAll('.muscle-zone').forEach(zone => {
    zone.addEventListener('click', () => {
      const id = zone.dataset.muscle;
      highlightMuscle(id);
      openMuscleModal(id);
    });
  });
}

function highlightMuscle(id){
  document.querySelectorAll('.muscle-zone').forEach(z => {
    z.classList.toggle('selected', z.dataset.muscle === id);
  });
}

/* ============================================
   MODAL — detalle de músculo
   ============================================ */
let charts = {};

function openMuscleModal(id){
  const m = state.muscles.find(x => x.id === id);
  if(!m) return;
  const rank = getRank(m.progress);

  document.getElementById('modal-title').textContent = m.name;
  document.getElementById('modal-area').textContent = (m.area === 'front' ? 'Zona frontal' : 'Zona posterior');
  const badge = document.getElementById('modal-rank-badge');
  badge.textContent = rank.label;
  badge.className = `rank-badge rank-${rank.key}`;

  document.getElementById('modal-metrics').innerHTML = `
    <div class="metric"><b>${m.progress}%</b><span>Progreso</span></div>
    <div class="metric"><b>${m.workouts}</b><span>Entrenamientos</span></div>
    <div class="metric"><b>${(m.volume/1000).toFixed(1)}t</b><span>Volumen acumulado</span></div>
    <div class="metric"><b>${m.weight}kg</b><span>Peso máx. levantado</span></div>
    <div class="metric"><b>${m.freq}</b><span>Frecuencia</span></div>
    <div class="metric"><b>${m.consistency}%</b><span>Consistencia semanal</span></div>
  `;

  document.getElementById('modal-routines').innerHTML = m.routines.map(r =>
    `<span class="tag">🗂️ ${r}</span>`).join('');
  document.getElementById('modal-exercises').innerHTML = m.exercises.map((e,i) =>
    `<span class="tag"><span class="num">${String(i+1).padStart(2,'0')}</span> ${e}</span>`).join('');

  highlightMuscle(id);

  const overlay = document.getElementById('muscleModal');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
}

function closeMuscleModal(){
  const overlay = document.getElementById('muscleModal');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
}

/* ============================================
   VIEWER TABS (Frente/Espalda, 3D/Mapa)
   ============================================ */
function setupViewerTabs(){
  document.querySelectorAll('[data-side]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-side]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const side = btn.dataset.side;
      document.querySelectorAll('.muscle-map').forEach(svg => {
        svg.classList.toggle('active', svg.dataset.side === side);
      });
    });
  });

  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;
      document.querySelector('.sketchfab-embed-wrapper').style.display = view === '3d' ? 'block' : 'none';
      document.querySelectorAll('.muscle-map').forEach(svg => svg.style.opacity = view === 'map' ? '1' : '0.55');
    });
  });
}

/* ============================================
   CHARTS — Chart.js
   ============================================ */
function renderCharts(){
  const ctx1 = document.getElementById('chart-weekly').getContext('2d');
  const ctx2 = document.getElementById('chart-balance').getContext('2d');

  Chart.defaults.color = '#94a3b8';
  Chart.defaults.font.family = "'Inter', sans-serif";

  charts.weekly = new Chart(ctx1, {
    type:'line',
    data:{
      labels:['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6'],
      datasets:[
        { label:'Esta semana', data:[58,61,65,68,71,74], borderColor:'#22c55e', backgroundColor:'rgba(34,197,94,0.12)', tension:0.4, fill:true, pointRadius:0, borderWidth:2.5 },
        { label:'Mes anterior', data:[50,52,55,57,59,61], borderColor:'#475569', backgroundColor:'transparent', tension:0.4, borderDash:[5,5], pointRadius:0, borderWidth:2 },
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'bottom', labels:{ boxWidth:10, boxHeight:10, usePointStyle:true } } },
      scales:{
        x:{ grid:{ color:'rgba(255,255,255,0.04)' } },
        y:{ grid:{ color:'rgba(255,255,255,0.04)' }, ticks:{ callback:v=>v+'%' } }
      }
    }
  });

  const top5 = [...state.muscles].sort((a,b)=>b.progress-a.progress).slice(0,6);
  charts.balance = new Chart(ctx2, {
    type:'radar',
    data:{
      labels: top5.map(m=>m.name),
      datasets:[{
        label:'Progreso', data: top5.map(m=>m.progress),
        borderColor:'#22c55e', backgroundColor:'rgba(34,197,94,0.18)', pointBackgroundColor:'#4ade80', borderWidth:2,
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false } },
      scales:{
        r:{
          angleLines:{ color:'rgba(255,255,255,0.06)' },
          grid:{ color:'rgba(255,255,255,0.06)' },
          pointLabels:{ color:'#94a3b8', font:{ size:10.5 } },
          ticks:{ display:false },
          suggestedMin:0, suggestedMax:100,
        }
      }
    }
  });
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderStats();
  renderRankScale();
  renderMuscleGrid();
  setupMuscleMap();
  setupViewerTabs();
  renderCharts();

  document.getElementById('modal-close').addEventListener('click', closeMuscleModal);
  document.getElementById('muscleModal').addEventListener('click', (e) => {
    if(e.target.id === 'muscleModal') closeMuscleModal();
  });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeMuscleModal(); });
});
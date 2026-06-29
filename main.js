import { events } from './data.js';

const timeline = document.querySelector('#timeline');
const drawer = document.querySelector('#drawer');
const drawerContent = document.querySelector('#drawer-content');
const closeDrawer = document.querySelector('#close-drawer');
const toggleDensity = document.querySelector('#toggle-density');
const eventCount = document.querySelector('#event-count');
const stage = document.querySelector('#stage');
const stageImage = document.querySelector('#stage-image');
const stageEra = document.querySelector('#stage-era');
const stageDate = document.querySelector('#stage-date');
const stageTitle = document.querySelector('#stage-title');
const stageSummary = document.querySelector('#stage-summary');
const stageDetails = document.querySelector('#stage-details');
const stageWhy = document.querySelector('#stage-why');
const stageIndex = document.querySelector('#stage-index');
const progressFill = document.querySelector('#progress-fill');
const progressLabel = document.querySelector('#progress-label');
const prevEvent = document.querySelector('#prev-event');
const nextEvent = document.querySelector('#next-event');
const readStage = document.querySelector('#read-stage');
const milestoneRail = document.querySelector('#milestone-rail');

const MILESTONES = [
  { id: 'planetary-beginnings', label: 'Origen del planeta', range: '4,57–3,5 Ga', accent: '#ff7a3d', match: e => e.order < 700 },
  { id: 'microbial-earth', label: 'Tierra microbiana', range: '3,5–0,54 Ga', accent: '#22c55e', match: e => e.order >= 700 && e.order < 2100 },
  { id: 'animal-worlds', label: 'Animales y mares', range: '541–390 Ma', accent: '#22d3ee', match: e => e.order >= 2100 && e.order < 2600 },
  { id: 'land-and-dinosaurs', label: 'Tierra firme y dinosaurios', range: '390–66 Ma', accent: '#84cc16', match: e => e.order >= 2600 && e.order < 4400 },
  { id: 'mammals-to-humans', label: 'Mamíferos y homininos', range: '66 Ma–300 ka', accent: '#facc15', match: e => e.order >= 4400 && e.order < 6000 },
  { id: 'sapiens-expansion', label: 'Sapiens global', range: '300–12 ka', accent: '#f59e0b', match: e => e.order >= 6000 && e.order < 7900 },
  { id: 'farming-cities', label: 'Agricultura y ciudades', range: '12.000–3.000 a. p.', accent: '#fb923c', match: e => e.order >= 7900 && e.order < 10300 },
  { id: 'states-networks', label: 'Estados y redes', range: '3000 a. p.–1500', accent: '#a78bfa', match: e => e.order >= 10300 && e.order < 12000 },
  { id: 'modern-acceleration', label: 'Mundo moderno', range: '1500–hoy', accent: '#38bdf8', match: e => e.order >= 12000 }
];

let currentIndex = 0;
let drawerIndex = 0;
let activeMilestoneId = MILESTONES[0].id;
let observer;

const groupedMilestones = MILESTONES.map(milestone => ({
  ...milestone,
  events: events.filter(milestone.match)
})).filter(milestone => milestone.events.length);

function milestoneForIndex(index) {
  return groupedMilestones.find(milestone => milestone.events.some(event => events.indexOf(event) === index)) ?? groupedMilestones[0];
}

function eventMiniCard(event, index) {
  const article = document.createElement('article');
  article.className = 'event-card event-mini-card reveal-card';
  article.dataset.index = index;
  article.style.setProperty('--accent', event.color);
  article.innerHTML = `
    <button class="event-select" type="button" data-index="${index}" aria-label="Seleccionar ${event.title}">
      <span class="event-index">${String(index + 1).padStart(3, '0')}</span>
      <span class="event-line" aria-hidden="true"></span>
      <span class="event-date">${event.dateShort}</span>
    </button>
    <div class="event-body">
      <div class="meta"><span>${event.era}</span><strong>${event.dateShort}</strong></div>
      <p class="type-pill">${event.type}</p>
      <h3>${event.title}</h3>
      <p>${event.summary}</p>
      <div class="event-actions">
        <button type="button" data-id="${event.id}">Leer explicación desarrollada</button>
      </div>
    </div>`;
  return article;
}

function milestonePanel(milestone) {
  const firstIndex = events.indexOf(milestone.events[0]);
  const lastIndex = events.indexOf(milestone.events[milestone.events.length - 1]);
  const section = document.createElement('section');
  section.className = `milestone-panel reveal-card ${milestone.id === activeMilestoneId ? 'open' : ''}`;
  section.dataset.milestone = milestone.id;
  section.style.setProperty('--accent', milestone.accent);
  section.innerHTML = `
    <button class="milestone-summary" type="button" data-milestone="${milestone.id}" aria-expanded="${milestone.id === activeMilestoneId}">
      <span class="milestone-dot" aria-hidden="true"></span>
      <span><strong>${milestone.label}</strong><small>${milestone.range}</small></span>
      <em>${milestone.events.length} eventos</em>
    </button>
    <div class="milestone-events" aria-label="Eventos de ${milestone.label}"></div>`;
  const container = section.querySelector('.milestone-events');
  milestone.events.forEach(event => container.appendChild(eventMiniCard(event, events.indexOf(event))));
  section.querySelector('.milestone-summary').addEventListener('click', () => {
    setActiveMilestone(milestone.id, { scroll: true });
    updateStage(firstIndex, { scroll: false });
  });
  section.dataset.firstIndex = firstIndex;
  section.dataset.lastIndex = lastIndex;
  return section;
}

function renderMilestoneRail() {
  if (!milestoneRail) return;
  milestoneRail.innerHTML = groupedMilestones.map((milestone, i) => `
    <button type="button" class="rail-stop ${milestone.id === activeMilestoneId ? 'active' : ''}" data-rail-milestone="${milestone.id}" style="--accent:${milestone.accent}">
      <span>${String(i + 1).padStart(2, '0')}</span>
      <strong>${milestone.label}</strong>
      <small>${milestone.range}</small>
    </button>`).join('');
}

function setActiveMilestone(milestoneId, { scroll = false } = {}) {
  activeMilestoneId = milestoneId;
  document.querySelectorAll('.milestone-panel').forEach(panel => {
    const open = panel.dataset.milestone === milestoneId;
    panel.classList.toggle('open', open);
    panel.querySelector('.milestone-summary')?.setAttribute('aria-expanded', String(open));
    if (open && scroll) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  renderMilestoneRail();
}

function updateStage(index, { scroll = false } = {}) {
  currentIndex = Math.max(0, Math.min(events.length - 1, index));
  const event = events[currentIndex];
  if (!event || !stage) return;

  const milestone = milestoneForIndex(currentIndex);
  if (milestone.id !== activeMilestoneId) setActiveMilestone(milestone.id);

  stage.classList.remove('stage-enter');
  void stage.offsetWidth;
  stage.classList.add('stage-enter');
  stage.style.setProperty('--accent', event.color);
  stageImage.src = event.image;
  stageImage.alt = `Ilustración de ${event.title}`;
  stageEra.textContent = `${event.type} · ${event.era}`;
  stageDate.textContent = event.date;
  stageTitle.textContent = event.title;
  stageSummary.textContent = event.summary;
  stageDetails.textContent = event.details;
  stageWhy.textContent = event.why;
  stageIndex.textContent = `${String(currentIndex + 1).padStart(3, '0')} / ${events.length}`;
  progressFill.style.width = `${((currentIndex + 1) / events.length) * 100}%`;
  progressLabel.textContent = `${Math.round(((currentIndex + 1) / events.length) * 100)}% del recorrido · ${milestone.label}`;
  prevEvent.disabled = currentIndex === 0;
  nextEvent.disabled = currentIndex === events.length - 1;

  document.querySelectorAll('.event-card.active').forEach(card => card.classList.remove('active'));
  const card = document.querySelector(`.event-card[data-index="${currentIndex}"]`);
  if (card) {
    card.classList.add('active');
    if (scroll) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function openDrawer(index) {
  drawerIndex = Math.max(0, Math.min(events.length - 1, index));
  const event = events[drawerIndex];
  drawerContent.innerHTML = `
    <p class="eyebrow">${event.type} · ${event.era} · ${event.date}</p>
    <h2>${event.title}</h2>
    <img src="${event.image}" alt="Ilustración de ${event.title}" />
    <h3>Qué ocurrió</h3>
    <p>${event.summary}</p>
    <h3>Explicación desarrollada</h3>
    <p>${event.details}</p>
    <h3>Por qué es significativo</h3>
    <p>${event.why}</p>
    <div class="drawer-nav">
      <button type="button" data-drawer-prev ${drawerIndex === 0 ? 'disabled' : ''}>← Evento anterior</button>
      <button type="button" data-drawer-next ${drawerIndex === events.length - 1 ? 'disabled' : ''}>Siguiente evento →</button>
    </div>`;
  drawer.setAttribute('aria-hidden', 'false');
  drawer.classList.add('open');
  updateStage(drawerIndex);
}

function render() {
  if (eventCount) eventCount.textContent = `${events.length} hitos importantes`;
  timeline.innerHTML = '';
  groupedMilestones.forEach(milestone => timeline.appendChild(milestonePanel(milestone)));
  renderMilestoneRail();
  updateStage(0);

  observer?.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));
}

milestoneRail?.addEventListener('click', (e) => {
  const button = e.target.closest('[data-rail-milestone]');
  if (!button) return;
  const milestone = groupedMilestones.find(item => item.id === button.dataset.railMilestone);
  if (!milestone) return;
  setActiveMilestone(milestone.id, { scroll: true });
  updateStage(events.indexOf(milestone.events[0]));
});

timeline.addEventListener('click', (e) => {
  const select = e.target.closest('button[data-index]');
  if (select) {
    updateStage(Number(select.dataset.index), { scroll: false });
    return;
  }
  const button = e.target.closest('button[data-id]');
  if (!button) return;
  const index = events.findIndex(item => item.id === button.dataset.id);
  if (index >= 0) openDrawer(index);
});

prevEvent.addEventListener('click', () => updateStage(currentIndex - 1, { scroll: true }));
nextEvent.addEventListener('click', () => updateStage(currentIndex + 1, { scroll: true }));
readStage.addEventListener('click', () => openDrawer(currentIndex));

closeDrawer.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
});

drawer.addEventListener('click', (e) => {
  if (e.target.closest('[data-drawer-prev]')) openDrawer(drawerIndex - 1);
  if (e.target.closest('[data-drawer-next]')) openDrawer(drawerIndex + 1);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer.click();
  if (!drawer.classList.contains('open') && e.key === 'ArrowRight') updateStage(currentIndex + 1, { scroll: true });
  if (!drawer.classList.contains('open') && e.key === 'ArrowLeft') updateStage(currentIndex - 1, { scroll: true });
});

toggleDensity.addEventListener('click', () => {
  document.body.classList.toggle('compact');
  toggleDensity.textContent = document.body.classList.contains('compact') ? 'Vista visual' : 'Vista compacta';
});

render();

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

let currentIndex = 0;
let drawerIndex = 0;

function eventCard(event, index) {
  const article = document.createElement('article');
  article.className = 'event-card reveal-card';
  article.dataset.index = index;
  article.style.setProperty('--accent', event.color);
  article.innerHTML = `
    <button class="event-select" type="button" data-index="${index}" aria-label="Seleccionar ${event.title}">
      <span class="event-index">${String(index + 1).padStart(3, '0')}</span>
      <span class="event-line" aria-hidden="true"></span>
      <span class="event-date">${event.dateShort}</span>
    </button>
    <div class="image-wrap"><img src="${event.image}" alt="Ilustración de ${event.title}" loading="lazy" /></div>
    <div class="event-body">
      <div class="meta"><span>${event.era}</span><strong>${event.dateShort}</strong></div>
      <p class="type-pill">${event.type}</p>
      <h3>${event.title}</h3>
      <p>${event.summary}</p>
      <button type="button" data-id="${event.id}">Leer explicación desarrollada</button>
    </div>`;
  return article;
}

function updateStage(index, { scroll = false } = {}) {
  currentIndex = Math.max(0, Math.min(events.length - 1, index));
  const event = events[currentIndex];
  if (!event || !stage) return;

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
  progressLabel.textContent = `${Math.round(((currentIndex + 1) / events.length) * 100)}% del recorrido`;
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
  events.forEach((event, index) => timeline.appendChild(eventCard(event, index)));
  updateStage(0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.18 });
  document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));
}

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

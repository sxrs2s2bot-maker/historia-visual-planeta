import { events } from './data.js';

const timeline = document.querySelector('#timeline');
const drawer = document.querySelector('#drawer');
const drawerContent = document.querySelector('#drawer-content');
const closeDrawer = document.querySelector('#close-drawer');
const toggleDensity = document.querySelector('#toggle-density');
const eventCount = document.querySelector('#event-count');

function eventCard(event, index) {
  const article = document.createElement('article');
  article.className = 'event-card';
  article.style.setProperty('--accent', event.color);
  article.innerHTML = `
    <div class="event-index">${String(index + 1).padStart(2, '0')}</div>
    <div class="image-wrap"><img src="${event.image}" alt="Ilustración de ${event.title}" /></div>
    <div class="event-body">
      <div class="meta"><span>${event.era}</span><strong>${event.dateShort}</strong></div>
      <p class="type-pill">${event.type}</p>
      <h3>${event.title}</h3>
      <p>${event.summary}</p>
      <button type="button" data-id="${event.id}">Leer explicación desarrollada</button>
    </div>`;
  return article;
}

function openDrawer(event) {
  drawerContent.innerHTML = `
    <p class="eyebrow">${event.type} · ${event.era} · ${event.date}</p>
    <h2>${event.title}</h2>
    <img src="${event.image}" alt="Ilustración de ${event.title}" />
    <h3>Qué ocurrió</h3>
    <p>${event.summary}</p>
    <h3>Explicación desarrollada</h3>
    <p>${event.details}</p>
    <h3>Por qué es significativo</h3>
    <p>${event.why}</p>`;
  drawer.setAttribute('aria-hidden', 'false');
  drawer.classList.add('open');
}

function render() {
  if (eventCount) eventCount.textContent = `${events.length} hitos importantes`;
  timeline.innerHTML = '';
  events.forEach((event, index) => timeline.appendChild(eventCard(event, index)));
}

timeline.addEventListener('click', (e) => {
  const button = e.target.closest('button[data-id]');
  if (!button) return;
  const event = events.find(item => item.id === button.dataset.id);
  if (event) openDrawer(event);
});

closeDrawer.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer.click();
});

toggleDensity.addEventListener('click', () => {
  document.body.classList.toggle('compact');
  toggleDensity.textContent = document.body.classList.contains('compact') ? 'Vista visual' : 'Vista compacta';
});

render();

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
const mapStatus = document.querySelector('#map-status');
const mapTitle = document.querySelector('#map-title');
const mapDescription = document.querySelector('#map-description');

const MILESTONES = [
  { id: 'planetary-beginnings', label: 'Origen del planeta', range: '4,57–3,5 Ga', accent: '#ff7a3d', match: e => e.order < 500 },
  { id: 'microbial-earth', label: 'Tierra microbiana', range: '3,5–0,54 Ga', accent: '#22c55e', match: e => e.order >= 500 && e.order < 1300 },
  { id: 'animal-worlds', label: 'Animales y mares', range: '541–390 Ma', accent: '#22d3ee', match: e => e.order >= 1300 && e.order < 1800 },
  { id: 'land-and-dinosaurs', label: 'Tierra firme y dinosaurios', range: '390–66 Ma', accent: '#84cc16', match: e => e.order >= 1800 && e.order < 2700 },
  { id: 'mammals-to-humans', label: 'Mamíferos y homininos', range: '66 Ma–300 ka', accent: '#facc15', match: e => e.order >= 2700 && e.order < 3600 },
  { id: 'sapiens-expansion', label: 'Sapiens global', range: '300–12 ka', accent: '#f59e0b', match: e => e.order >= 3600 && e.order < 4800 },
  { id: 'farming-cities', label: 'Agricultura y ciudades', range: '12.000–3.000 a. p.', accent: '#fb923c', match: e => e.order >= 4800 && e.order < 5600 },
  { id: 'states-networks', label: 'Estados y redes', range: '3000 a. p.–1500', accent: '#a78bfa', match: e => e.order >= 5600 && e.order < 6200 },
  { id: 'modern-acceleration', label: 'Mundo moderno', range: '1500–hoy', accent: '#38bdf8', match: e => e.order >= 6200 }
];

const GEO_REGIONS = {
  global: { label: 'Global / planetario', kind: 'global', center: [16, 0], zoom: 1.35, bounds: [[-58, -170], [74, 170]], note: 'Evento de escala planetaria o distribuido globalmente; se resalta el mundo completo.' },
  africa: { label: 'África', center: [3, 20], zoom: 2.6, bounds: [[-35, -18], [37, 52]], note: 'Región africana, clave para el origen y expansión temprana de Homo sapiens.' },
  eastAfrica: { label: 'África oriental', center: [2, 36], zoom: 4.2, bounds: [[-11, 24], [15, 48]], note: 'Área aproximada de África oriental y el Rift, importante en evolución humana temprana.' },
  eurasia: { label: 'Eurasia', center: [44, 65], zoom: 2.1, bounds: [[5, -10], [72, 145]], note: 'Franja euroasiática amplia; varias poblaciones y tecnologías se expanden por esta masa continental.' },
  europe: { label: 'Europa', center: [51, 12], zoom: 3.5, bounds: [[35, -11], [61, 35]], note: 'Zona europea aproximada del evento.' },
  middleEast: { label: 'Creciente Fértil / Próximo Oriente', center: [34, 42], zoom: 4.5, bounds: [[28, 30], [39, 51]], note: 'Creciente Fértil y Próximo Oriente, zona temprana de aldeas, agricultura, escritura y ciudades.' },
  anatolia: { label: 'Anatolia y alta Mesopotamia', center: [38, 39], zoom: 5, bounds: [[35, 29], [42, 45]], note: 'Anatolia y alta Mesopotamia; región aproximada de rituales y aldeas neolíticas.' },
  sahul: { label: 'Sahul: Australia y Nueva Guinea', center: [-20, 134], zoom: 3.4, bounds: [[-45, 110], [0, 155]], note: 'Plataforma de Sahul: Australia, Tasmania y Nueva Guinea durante niveles marinos bajos.' },
  americas: { label: 'Américas', center: [5, -75], zoom: 2, bounds: [[-56, -168], [72, -35]], note: 'Región americana amplia; refleja poblamiento y transformaciones continentales.' },
  china: { label: 'China / Asia oriental', center: [32, 108], zoom: 4, bounds: [[18, 95], [45, 125]], note: 'China y Asia oriental, foco de arroz, papel, pólvora, brújula y tecnologías de impresión.' },
  yangtze: { label: 'Cuenca del Yangtsé', center: [30, 115], zoom: 5, bounds: [[25, 105], [34, 123]], note: 'Cuenca del Yangtsé, una de las zonas tempranas de domesticación del arroz.' },
  mesoamerica: { label: 'Mesoamérica', center: [18, -92], zoom: 5, bounds: [[8, -108], [25, -83]], note: 'Mesoamérica, región central para la domesticación del maíz.' },
  indus: { label: 'Valle del Indo', center: [27, 70], zoom: 5, bounds: [[23, 66], [32, 75]], note: 'Valle del Indo y zonas urbanas relacionadas.' },
  egypt: { label: 'Valle del Nilo / Egipto', center: [27, 31], zoom: 5, bounds: [[22, 25], [32, 36]], note: 'Egipto y valle del Nilo, asociados al estado faraónico y grandes obras coordinadas.' },
  mediterranean: { label: 'Mediterráneo', center: [39, 17], zoom: 4, bounds: [[30, -6], [47, 37]], note: 'Cuenca mediterránea y redes políticas, comerciales o tecnológicas asociadas.' },
  atlantic: { label: 'Atlántico', center: [15, -35], zoom: 3, bounds: [[-35, -85], [55, 20]], note: 'Sistema atlántico: conecta África, Europa y América en intercambios, colonización y esclavitud.' },
  britain: { label: 'Gran Bretaña / Europa noroccidental', center: [54, -2], zoom: 5, bounds: [[49, -8], [59, 3]], note: 'Gran Bretaña y Europa noroccidental, foco de industrialización temprana.' },
  northAmerica: { label: 'Norteamérica', center: [39, -98], zoom: 3.3, bounds: [[24, -125], [50, -66]], note: 'Norteamérica, especialmente redes científicas, industriales y digitales modernas.' },
  lowEarthOrbit: { label: 'Órbita baja terrestre', kind: 'orbit', center: [16, 0], zoom: 1.35, bounds: [[-58, -170], [74, 170]], note: 'No es un país: representa una capa orbital alrededor del planeta.' }
};

const EVENT_REGION = new Map(Object.entries({
  'solar-system-accretion': 'global', 'first-crust-oceans': 'global', 'late-bombardment': 'global', 'prebiotic-chemistry': 'global', 'first-life': 'global', 'anoxygenic-photosynthesis': 'global', 'cyanobacteria': 'global', 'great-oxidation': 'global', 'early-snowball': 'global', 'eukaryotes': 'global', 'sexual-reproduction': 'global', 'complex-multicellularity': 'global', 'cryogenian-snowball': 'global', 'ediacaran-biota': 'global', 'cambrian-explosion': 'global', 'ordovician-radiation': 'global', 'land-plants': 'global', 'jawed-fish': 'global', 'tetrapods': 'global', 'carboniferous-forests': 'global', 'amniotic-egg': 'global', 'permian-extinction': 'global', 'dinosaurs-origin': 'global', 'triassic-jurassic-extinction': 'global', 'first-mammals': 'global', 'flowering-plants': 'global', 'birds-dinosaurs': 'global', 'kpg-extinction': 'global', 'mammal-radiation': 'global', 'primates': 'global', 'apes': 'africa', 'bipedal-hominins': 'eastAfrica', 'stone-tools': 'eastAfrica', 'genus-homo': 'africa', 'out-of-africa-erectus': 'eurasia', 'fire-control': 'eurasia', 'neanderthals-denisovans': 'eurasia', 'homo-sapiens': 'africa', 'symbolic-culture': 'africa',
  'sapiens-out-of-africa': 'africa', 'sahul-colonization': 'sahul', 'upper-paleolithic-art': 'europe', 'dog-domestication': 'eurasia', 'last-glacial-maximum': 'global', 'americas-peopling': 'americas', 'pleistocene-megafauna-losses': 'global', 'younger-dryas': 'global', 'holocene-stability': 'global', 'fertile-crescent-agriculture': 'middleEast', 'independent-agriculture-centers': 'global', 'permanent-villages': 'middleEast', 'pottery-storage': 'eurasia', 'copper-metallurgy': 'middleEast', 'wheel-and-transport': 'middleEast', 'writing-invention': 'middleEast', 'first-cities-states': 'middleEast', 'bronze-age-networks': 'mediterranean', 'iron-age': 'middleEast', 'axial-age-ideas': 'eurasia', 'classical-empires-roads': 'mediterranean', 'paper-knowledge': 'china', 'silk-road-exchanges': 'eurasia', 'islamic-golden-age': 'middleEast', 'black-death': 'eurasia', 'printing-press': 'europe', 'columbian-exchange': 'atlantic', 'scientific-revolution': 'europe', 'fossil-fuel-coal': 'britain', 'industrial-revolution': 'britain', 'darwin-evolution': 'britain', 'germ-theory': 'europe', 'electric-communications': 'northAmerica', 'haber-bosch': 'europe', 'antibiotics': 'europe', 'nuclear-age': 'northAmerica', 'space-age': 'lowEarthOrbit', 'plate-tectonics': 'global', 'digital-revolution': 'northAmerica', 'great-acceleration': 'global', 'climate-change': 'global', 'biodiversity-crisis': 'global', 'genome-sequencing': 'global', 'renewable-transition': 'global', 'artificial-intelligence-age': 'global',
  'coastal-foraging-sapiens': 'africa', 'ochre-workshops': 'africa', 'projectile-technology': 'africa', 'fire-stick-land-management': 'sahul', 'tailored-clothing-needles': 'eurasia', 'venus-figurines': 'europe', 'ice-age-dwellings': 'eurasia', 'fishing-hooks-nets': 'eurasia', 'natufian-sedentism': 'middleEast', 'gobekli-tepe-ritual': 'anatolia', 'domesticated-wheat-barley': 'middleEast', 'goat-sheep-herding': 'middleEast', 'yangtze-rice': 'yangtze', 'maize-domestication': 'mesoamerica', 'early-irrigation-canals': 'middleEast', 'plough-and-traction': 'middleEast', 'woven-textiles': 'middleEast', 'proto-cuneiform-accounting': 'middleEast', 'indus-urban-water': 'indus', 'pyramid-state-labor': 'egypt', 'bronze-chariot-warfare': 'eurasia', 'alphabetic-writing': 'middleEast', 'coinage-markets': 'mediterranean', 'roman-concrete-aqueducts': 'mediterranean', 'paper-making-china': 'china', 'woodblock-printing': 'china', 'gunpowder-weapons': 'china', 'compass-navigation': 'china', 'universities-scholastic-networks': 'europe', 'mechanical-clocks': 'europe', 'portolan-maps': 'mediterranean', 'atlantic-slave-trade-plantations': 'atlantic', 'steam-engine-watt': 'britain', 'smallpox-vaccination': 'britain', 'urban-sanitation': 'europe', 'assembly-line': 'northAmerica', 'transistor': 'northAmerica', 'dna-double-helix': 'britain', 'integrated-circuit-microchip': 'northAmerica', 'arpanet-packet-switching': 'northAmerica', 'personal-computer-gui': 'northAmerica', 'gps-satellite-navigation': 'lowEarthOrbit', 'world-wide-web': 'europe', 'crispr-gene-editing': 'global'
}));

let currentIndex = 0;
let drawerIndex = 0;
let activeMilestoneId = MILESTONES[0].id;
let map;
let mapLayerGroup;
let observer;

const groupedMilestones = MILESTONES.map(milestone => ({
  ...milestone,
  events: events.filter(milestone.match)
})).filter(milestone => milestone.events.length);

function eventGeo(event) {
  const key = EVENT_REGION.get(event.id);
  return key ? GEO_REGIONS[key] : null;
}

function milestoneForIndex(index) {
  return groupedMilestones.find(milestone => milestone.events.some(event => events.indexOf(event) === index)) ?? groupedMilestones[0];
}

function eventMiniCard(event, index) {
  const geo = eventGeo(event);
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
        <button type="button" data-map-index="${index}" ${geo ? '' : 'disabled'}>${geo ? `Ver zona: ${geo.label}` : 'Sin zona concreta'}</button>
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
  updateMap(event);
}

function ensureMap() {
  if (map || !window.L || !document.querySelector('#event-map')) return;
  map = window.L.map('event-map', {
    worldCopyJump: true,
    minZoom: 1,
    maxZoom: 6,
    zoomControl: true,
    attributionControl: true
  }).setView([16, 0], 1.35);
  window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 6,
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  }).addTo(map);
  mapLayerGroup = window.L.layerGroup().addTo(map);
}

function updateMap(event) {
  ensureMap();
  const geo = eventGeo(event);
  if (mapTitle) mapTitle.textContent = geo ? geo.label : 'Sin localización precisa';
  if (mapDescription) mapDescription.textContent = geo ? geo.note : 'Este hito no tiene una zona geográfica concreta fiable o sucede como transición distribuida.';
  if (mapStatus) mapStatus.textContent = geo ? `Mapa dinámico · ${geo.label}` : 'Mapa dinámico · sin región concreta';
  if (!map || !mapLayerGroup) return;
  mapLayerGroup.clearLayers();
  if (!geo) {
    map.setView([16, 0], 1.35);
    return;
  }
  const style = { color: '#facc15', weight: 2, fillColor: '#f97316', fillOpacity: geo.kind === 'global' ? 0.08 : 0.24 };
  if (geo.kind === 'orbit') {
    window.L.circle([0, 0], { radius: 9000000, color: '#7dd3fc', weight: 2, fillOpacity: 0.04 }).addTo(mapLayerGroup);
    window.L.polyline([[0, -170], [18, -110], [0, -45], [-18, 20], [0, 85], [18, 150]], { color: '#facc15', weight: 2, dashArray: '8 8' }).addTo(mapLayerGroup);
  } else {
    window.L.rectangle(geo.bounds, style).addTo(mapLayerGroup);
  }
  window.L.marker(geo.center).addTo(mapLayerGroup).bindPopup(`<strong>${event.title}</strong><br>${geo.label}`);
  if (geo.kind === 'global') {
    map.setView(geo.center, 1.8);
  } else {
    map.fitBounds(geo.bounds, { padding: [26, 26], maxZoom: geo.zoom });
  }
  window.requestAnimationFrame(() => map.invalidateSize());
}

function openDrawer(index) {
  drawerIndex = Math.max(0, Math.min(events.length - 1, index));
  const event = events[drawerIndex];
  const geo = eventGeo(event);
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
    <h3>Zona geográfica</h3>
    <p>${geo ? `${geo.label}. ${geo.note}` : 'No hay una localización concreta única para este hito.'}</p>
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
  ensureMap();

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
  const mapButton = e.target.closest('button[data-map-index]');
  if (mapButton) {
    updateStage(Number(mapButton.dataset.mapIndex), { scroll: false });
    document.querySelector('#geography')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

window.addEventListener('resize', () => map?.invalidateSize());

render();

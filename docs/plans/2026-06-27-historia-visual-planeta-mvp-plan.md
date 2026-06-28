# Plan MVP — Historia Visual del Planeta

## Objetivo

Crear una web app educativa, visual e incremental para recorrer la historia profunda del planeta: desde la formación de la Tierra hasta dinosaurios, extinciones y antecesores humanos.

## Usuario objetivo

Personas curiosas que quieren entender la historia del planeta sin una cronología densa ni una enciclopedia lineal. La experiencia debe sentirse como un viaje visual.

## MVP v1

- Una sola página estática publicable en GitHub Pages.
- 120 hitos de alta relevancia científica y narrativa, evitando una lista demasiado generalista y reduciendo saltos temporales grandes.
- Cada evento incluye fecha aproximada, era, tipo, resumen, explicación desarrollada, por qué importa y orden cronológico validado.
- Imágenes en estilo coherente de museo/paleoarte generadas por IA mediante OpenAI/Codex, con 22 assets distintos y 12 nuevas ilustraciones creadas en la ampliación minuciosa.
- Interacción dinámica: navegador animado evento a evento, línea horizontal de hitos-resumen, despliegue vertical cronológico de eventos relacionados, detalle lateral con navegación interna y vista compacta.
- La sección de mapas se retiró por decisión de producto; la ampliación visual ahora se centra en galerías de imágenes por evento.

## No objetivos de v1

- No cubrir todos los periodos geológicos.
- No añadir login, base de datos ni backend.
- No afirmar precisión absoluta en fechas debatidas: usar rangos y lenguaje prudente.
- No mezclar eventos menores solo por rellenar.

## Arquitectura

- HTML/CSS/JS estático.
- `data.js` como fuente de datos inicial.
- `assets/generated/` para imágenes.
- `scripts/validate.mjs` para verificar estructura de eventos y assets.
- GitHub Pages como despliegue inicial.

## Criterio editorial

Un evento entra si cumple al menos uno:

1. Cambia condiciones planetarias globales.
2. Abre una transición evolutiva mayor.
3. Reorganiza ecosistemas a escala mundial.
4. Es una bisagra narrativa necesaria para entender dinosaurios o humanos.

## Backlog inicial

### v1.1
- Añadir navegación por escala temporal proporcional/logarítmica.
- Añadir glosario: Hádico, Arcaico, Proterozoico, Fanerozoico, Ma, Ga.
- Añadir fuentes/referencias por evento.
- Seguir aumentando cobertura visual específica para eventos que aún comparten imagen, manteniendo el estilo de museo/paleoarte.

### v1.2
- Mantener curaduría estricta al ampliar por capítulos y evitar eventos redundantes.
- Separar capítulos: Tierra primitiva, vida microbiana, animales, dinosaurios, mamíferos, humanos.
- Añadir filtros por era y tipo de evento.

### v2
- Modo narrativo tipo “scroll story”.
- Comparador de escala temporal: edad del planeta vs presencia humana.
- Revisión científica con citas visibles.

## Verificación

- `npm test` debe validar 120 eventos renderizables, textos desarrollados, orden cronológico, existencia de imágenes y al menos 22 imágenes distintas.
- La página debe cargar localmente por servidor estático.
- La URL de GitHub Pages debe responder HTTP 200.

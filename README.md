# Historia Visual del Planeta

Web app educativa en español para recorrer de forma sencilla y visual los hitos más significativos de la historia del planeta.

## URL publicada

https://sxrs2s2bot-maker.github.io/historia-visual-planeta/

## MVP ampliada

- Timeline interactivo con 120 hitos importantes: historia planetaria, evolución biológica, humanidad temprana, agricultura, ciudades, ciencia, industria, crisis climática, genómica e inteligencia artificial.
- Navegador visual animado para avanzar evento a evento, con progreso, controles anterior/siguiente y tarjetas sincronizadas.
- Nueva línea horizontal de 9 hitos-resumen; al abrir un hito, despliega hacia abajo sus eventos relacionados en orden cronológico.
- Mapa mundial dinámico con Leaflet/OpenStreetMap: los eventos con país, región o zona aproximada centran el mapa y dibujan el área sin generar imágenes nuevas.
- 22 imágenes distintas generadas/optimizadas, con 12 nuevas ilustraciones para reducir la reutilización visual.
- Eventos organizados por tipo: geología planetaria, océanos, origen de la vida, metabolismo, clima, animales, plantas, dinosaurios, extinciones, mamíferos, evolución humana, civilizaciones, tecnología y Antropoceno.
- Cada evento contiene:
  - fecha/rango temporal,
  - era,
  - resumen,
  - explicación desarrollada,
  - relevancia histórica/evolutiva.
- Drawer lateral de detalle con textos largos.
- Vista compacta para recorrer rápido.
- Estructura estática preparada para GitHub Pages.

## Criterio editorial

Un evento entra si cumple al menos uno:

1. Cambia condiciones planetarias globales.
2. Abre una transición evolutiva mayor.
3. Reorganiza ecosistemas a escala mundial.
4. Es una bisagra narrativa necesaria para entender dinosaurios o humanos.

## Desarrollo local

```bash
npm test
npm run serve
```

Abrir `http://localhost:4173`.

## Próximos pasos

Ver `docs/plans/2026-06-27-historia-visual-planeta-mvp-plan.md`.

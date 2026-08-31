---
created: 2026-08-31
last_updated: 2026-08-31
---

# proportio — state

Instrumento web: cuadrados que rebotan en horizontal dentro de un marco fijo. Cada impacto contra una pared toca una nota. Cada voz corre a su velocidad o con la velocidad bloqueada a un ratio de una velocidad base.

Fase: mockup de octubre 2025, funcional e incompleto. Movido de `0_draft` a `1_in-progress` el 2026-08-31.

## Decisiones cerradas

| Decisión | Valor |
|----------|-------|
| Relación con PULSUS | Proyecto separado, no un modo dentro de PULSUS |
| Motor compartido | Se extrae cuando haya un tercer consumidor. `VIBE` es el candidato |
| Base viva | `index.html`, copia del mockup `(5)` |
| Mockups anteriores | Los seis en `.archive/` |
| README | Reescrito, sin sección de licencia ni enlace de demo |
| Spec original | `.archive/mvp_app_web_de_polirritmos_sin_backend.md` |
| Rama git | `main`, repo local sin remoto |
| Timing de audio | Programado en `frameStart + tHit`, no en `currentTime` |
| Nombre | `proportio`. Antes `Polyrhythmia` |

## Por qué separado de PULSUS

Un periodo exacto necesita una geometría invariante. PULSUS gira y traslada su polígono, así que no la tiene, y eso es lo que lo hace interesante: el patrón emerge de la física. Aquí no hay física — geometría fija, rebote sin pérdida, ratios puestos a mano.

PULSUS explora lo que produce un sistema. proportio explora cómo suena una aritmética. Fundirlos degrada a los dos.

## Pendientes

- [ ] Licencia. El README anterior declaraba GPL-3.0 sin que exista un archivo `LICENSE`
- [ ] Sin remoto
- [ ] Presets y persistencia, solo, atajos de teclado, limiter. Todo estaba en la spec original y no se implementó

## Timing de audio

`dt` cubre tiempo ya transcurrido, así que el impacto ocurrió en el pasado y `currentTime + tHit` sonaría igualmente inmediato. `loop()` fija `frameStart` al empezar el frame y `step()` programa cada golpe en `frameStart + tHit`.

Cuesta hasta un frame de latencia y a cambio el espaciado relativo entre golpes es exacto: dos voces que impactan en el mismo frame ya no suenan a la vez. Es el mismo compromiso que PULSUS toma con su `frameStart` y su `offset`.

Corregido el 2026-08-31, junto con la ausencia de `F3` en la lista de notas y el `<title>`/`<h1>`, que aún decían "Mockup – Polirritmos Visuales".

## Familia

Hoy no comparte código con PULSUS. Cuando toque el audio, PULSUS ya tiene resueltos `js/audio.js`, `js/scales.js` y `js/instruments.js` con soundfont-player y FluidR3_GM, y su propio `state.md` registra que la lista de 128 GM vino copiada de `MODUS/src/audio.ts`.

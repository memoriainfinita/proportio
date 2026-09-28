# proportio — CLAUDE.md

Instrumento web de polirritmos: cuadrados que rebotan en horizontal dentro de un marco fijo, y cada impacto contra una pared toca una nota.

## Arquitectura

- **Stack:** HTML + CSS + JavaScript vanilla, Web Audio API
- **Entrega:** `index.html` único y autocontenido, estilos y script inline, sin dependencias
- **Persistencia:** solo presets, en localStorage `proportio.presets`
- **Publicación:** GitHub Pages desde `main`, rama tal cual (legacy). Un push a `main` actualiza la web

## Reglas de implementación

- Sin frameworks, sin npm, sin build
- No dividir en varios archivos sin pedirlo
- Los golpes se programan en `frameStart + tHit`, no en `currentTime`. Ver `state.md`
- Los campos de un preset se sanean uno a uno al cargar: un valor fuera de rango en la onda o la nota rompe el audio

## Inicio de sesión

Leer `state.md` antes de cualquier acción: recoge las decisiones cerradas y los pendientes.

## Archivos

- `state.md`: estado y decisiones
- `docs/proportio-demo.png`: captura del README
- `.archive/`: mockups anteriores, README original y spec de partida. Gitignored

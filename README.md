# Polyrhythmia

Squares bounce horizontally inside a resizable frame. Every impact against a wall plays a note.

Each voice can run at its own speed, or lock its speed to a ratio of a base speed. A voice at 3:2 crosses the frame three times for every two crossings of a 1:1 voice, and keeps doing so indefinitely: the frame is fixed and the bounce is perfect, so the period never drifts.

One self-contained HTML file: no server, no build step, no dependencies. Open `index.html` in a browser and press Play.

Sound is synthesised with the Web Audio API — one oscillator per hit, no samples. Audio does not start until you press Play, because browsers require a user gesture first.

Hits are not quantised to the frame. The simulation works out the exact fraction of the frame at which each collision happened and schedules the note at that instant, so two voices landing in the same frame keep their real separation instead of firing together. The cost is up to one frame of latency.

## Per voice

| Control | Range |
| --- | --- |
| Mode | Speed or Ratio |
| Speed | 20–600 px/s, in Speed mode |
| Ratio | `num:den`, each from 1–10 or 12. Speed becomes `base × (num/den)` |
| Initial direction | left or right |
| Height (Y) | anywhere within the frame |
| Note | a fixed list of 22, C3 to C6 |
| Wave | sine, triangle, square, sawtooth |
| Duration | 40–1200 ms |
| Volume, Mute, Colour | |

Voices can be duplicated or deleted. A duplicate keeps every parameter and drops 26 px below the original.

In Speed mode the app still shows a ratio: it searches the available numerators and denominators for the pair closest to `speed / base`. It is a readout, not a constraint — the voice stays free.

## Global

- **Base speed**, 40–600 px/s, with an approximate BPM alongside it: `60 × base / width`, the impacts per minute of a 1:1 voice crossing the frame
- **Stage size**, 200–1400 by 120–800, from the W and H fields or by dragging any of the four corner handles. Resizing changes every period at once, since the period depends on the width
- **Play**, **Pause**, **Stop** (pauses and recentres)
- **Centre**, which returns every voice to the middle without stopping
- **Random**, which rerolls height, direction and colour on every voice, and speed only on those in Speed mode

It opens with two voices: one in Speed mode, and one at 3:2 heading left, square wave, E4.

## Not implemented

The file is a mockup that was never finished. Missing against the spec it was written from:

- **No persistence.** There are no presets and nothing is saved. Closing the tab loses the patch
- **No solo.** Only mute
- **No keyboard shortcuts** and no ARIA labelling
- **No limiter.** Every voice goes straight to a master gain; dense patches can clip

## Related

[PULSUS](../PULSUS) is the sibling project: balls bouncing inside a rotating polygon, where the edge decides the note.

The two are opposites on purpose. In PULSUS the pattern emerges from physics — gravity, friction against spinning walls, a moving figure — and no period is ever exact. Here there is no physics at all: the geometry is fixed, the bounce is lossless, and the ratios are set by hand. One explores what a system produces; the other explores what an arithmetic sounds like.

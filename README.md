# OUTRUN '26 — Three Nights Inside The Grid 🌆

> A synthwave festival landing page that runs entirely on CSS sunset physics.

**OUTRUN '26** is a dependency-free festival landing page wrapped in a
full retrowave scene: a striped neon sun, a perspective grid floor scrolling
toward the viewer, glowing mountain ridges, twinkling stars and a CRT
scanline overlay — **all built with pure CSS**. Vanilla JS only adds scroll
reveals, count-up stats and sun parallax, and disables itself safely if
anything goes wrong.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)]()
[![Build](https://img.shields.io/badge/build-not%20required-brightgreen.svg)]()

<img width="1349" height="3742" alt="image" src="https://github.com/user-attachments/assets/8081a4f3-e584-450d-bc95-c78db614d8f0" />

---

## ✨ Features

- 🌅 **Striped neon sun** — gradient disc with mask-based slats, glow and a
  slow bob animation
- 🛣️ **Scrolling grid floor** — `perspective() + rotateX()` plane with two
  repeating gradients animated toward the horizon, forever
- ⛰️ **Neon mountain ridges** — two `clip-path` silhouettes with
  `drop-shadow` cyan/pink edge glow
- ✨ **Twinkling starfield** — radial-gradient stars with opacity pulse and
  mouse parallax
- 📺 **CRT scanlines** — subtle repeating-gradient overlay for the VHS feel
- 🎞️ **Infinite lineup marquee** — seamless CSS scroll, pauses on hover
- 🔢 **Count-up stats** — 42 artists · 3 nights · 12k ravers per night
- 🎫 **Ticket tiers** — Day / Weekend (gradient-border highlight) / VIP Grid
- 👀 **Scroll reveals** — gated behind `html.js`, content never hides if
  scripts are blocked
- ♿ **Reduced-motion aware** — grid, sun, marquee and reveals all calm down
- 📴 **Offline-ready** — works from `file://` in any modern browser

## 🚀 Quick Start

```bash
git clone https://github.com/AmiARMiess/outrun-26.git
cd outrun-26
open index.html        # double-click works — no server needed
```

Fonts (Audiowide + Inter) load from Google Fonts when online and fall back to
system sans offline. Everything else is fully local.

## 📁 Structure

```
outrun-26/
├── index.html     # background stack + hero, marquee, lineup, nights, tickets, CTA
├── style.css      # tokens, retrowave scene, glass cards, marquee, animations
├── script.js      # nav, reveals, counters, parallax (~70 lines, try/catch-wrapped)
├── README.md      # this file
└── .gitattributes # line-ending + linguist rules
```

## 🧩 Sections

| Section  | Content                                              |
|----------|------------------------------------------------------|
| Hero     | Date badge, chrome headline, count-up stats over the sunset |
| Marquee  | Infinite scrolling artist ticker                     |
| Lineup   | 6 headliner cards with FRI/SAT/SUN neon tags         |
| Nights   | 3 schedule cards + included-extras checklist         |
| Quote    | Press pull-quote with gradient accent                |
| Tickets  | 3 tiers with gradient-border "Best value" plan       |
| CTA      | Glass panel with dual buttons                        |
| Footer   | Auto year + FAQ/safety/press links                   |

## 🎨 Theming

All tokens live in `:root` of `style.css`:

```css
:root{
  --night:#120428;   /* deep violet sky      */
  --ink:#FFEAF7;     /* neon-lit white       */
  --pink:#FF2E97;    /* synthwave magenta    */
  --cyan:#00E5FF;    /* grid cyan            */
  --amber:#FF9E00;   /* sunset amber         */
  --grad:linear-gradient(100deg,var(--pink),var(--amber) 50%,var(--cyan));
}
```

Swap the three neon colors and every gradient, glow, tag, ticket border and
headline highlight follows automatically.

## 🛡️ Graceful Degradation

1. **JS blocked** → reveals never hide content (`html.js` gate); the entire
   retrowave scene, marquee and animations keep running in pure CSS.
2. **No IntersectionObserver** → reveals and counters resolve instantly.
3. **Fonts offline** → system sans keeps layout proportions sane.
4. **Reduced motion** → grid scroll, sun bob, twinkle and marquee freeze
   into a clean static poster.

## ⚙️ Performance

- Zero network requests except optional fonts
- All motion is compositor-friendly (transform / opacity / background-position
  on fixed layers)
- Parallax writes two CSS variables on `mousemove` (passive listener)
- ~70 lines of vanilla JS, fully wrapped in `try/catch`

## 🧑 Browser Support

Any modern browser (Chrome, Edge, Firefox, Safari), including older builds —
no WebGL, no canvas, no modules, no polyfills.

## 📄 License

MIT — free for personal and commercial use.

---

*The grid opens June 19. The sunset won't wait.*

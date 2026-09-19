# The Book of Sake — 酒の書 · 酒之書

A trilingual (English / 日本語 / 繁體中文) reference on Japanese sake.
Eighty-seven pages, a hundred and four drawn figures, a directory of
two hundred and twelve brands, no image files, and no build step required to
read it.

Open `index.html` in a browser, or `bundle.html` for the whole book in one
file. Both work straight from `file://` — no server, no install.

**Edition v0.0.0.1** · built 2026-09-19

**Live:** https://13studio-sudo.github.io/sake/ · **Studio:** [13studio.co](https://13studio.co)

---

## Nineteen files

The whole book is nineteen files. Eighty-seven pages live inside seven data
modules, and there is exactly one HTML page.

    index.html               the only page — hash routing (#glossary, #starters/kimoto)
    bundle.html              the whole book in one self-contained file — generated

    assets/css/base.css      the entire design system
    assets/js/core.js        i18n, block renderer, navigation, search, theme, SAKE.NAV

    data/01-foundations.js   13 pages
    data/02-making.js        15 pages
    data/03-understanding.js 15 pages
    data/04-place.js         12 pages
    data/05-drinking.js      15 pages
    data/06-world.js          7 pages
    data/07-reference.js     10 pages
    data/08-index.js         search, figure, rice and prefecture indexes — generated

    tools/build.js           regenerates data/08-index.js and bundle.html
    tools/check.js           render, language and parity checks
    tools/layoutcheck.js     Playwright overflow check

    README.md  package.json  .gitignore  .nojekyll

`SAKE.NAV` in `assets/js/core.js` is the single source of truth for which
pages exist and in what order. Everything else is derived from it.

## What it covers

| Part | Pages |
| --- | --- |
| Foundations | what sake is, common misconceptions, history, people, women in sake, ritual, poetry, vocabulary, words that do not translate, sake on screen, comparison with other drinks |
| Making | rice, milling, water, kōji, yeast, the brewing process, starters, pressing, the kura and its tools, the tōji and the crew, the brewing year, the arithmetic of one batch, the microbial cast |
| Understanding | categories and law, reading a label, the look of a bottle, styles, numbers and chemistry, flavour chemistry, standards, how sake has been faked, aged sake, sparkling sake, packaging, the characters, the footprint, faults, home brewing |
| Place | terroir, regions A–Z, six regional pages, geographical indications, breweries, brands, a directory of 212 brands with their standing products, cross-indexed by prefecture, by rice and by starter method |
| Drinking | tasting, a twelve-bottle curriculum, temperature and vessels, cups, pairing, buying and storage, reading a brewery's range, what money buys, cocktails and cooking, drinking together, the places you drink it, professional service, five journeys, visiting, alcohol and the body |
| Wider world | the kōji family, shōchū and awamori, lees, mirin, sake outside Japan, sake in Taiwan, competitions |
| Reference | industry and trade, the next twenty years, where people disagree, how people learn it, the whole chronology, reference tables, questions and answers, glossary, every diagram, sources |

## How it is put together

- Each page is a data module — a tree of typed blocks — rendered by
  `assets/js/core.js`. There is no framework and no transpilation; the
  JavaScript is ES5-safe and runs from `file://`.
- Every string is either a plain string (identical in all three languages) or
  `{ en, ja, zh }`. The resolver is `L()` in `core.js`.
- Every figure is a function `svg(lang, L)` that returns SVG, so a diagram is
  redrawn in the reader's language rather than being a picture with English in
  it. Nothing in this repository is an image file.
- Repeating vocabulary — the twelve legal designations, the finishing states,
  forty-odd rice varieties, forty-seven prefectures — is written once in
  `core.js` as `SAKE.GRADE`, `SAKE.GMOD`, `SAKE.RICE` and `SAKE.PREF`, and
  referenced by key from the data. A directory entry says `rice:"yamada"`, not
  three translations of Yamada Nishiki.
- The directory's three cross-indexes — by prefecture, by rice and by starter
  method — are computed from the directory itself by `tools/build.js` and
  written into `data/08-index.js`, so they cannot drift out of step with the
  entries they point at. Adding a brand adds it to every index on the next
  build. Every directory entry is also pushed into the site search, so a brand
  can be found by its kanji, by its romanisation or by the company behind it,
  from anywhere in the book. The histogram of polishing ratios on *Polishing
  the Grain* is drawn from the same data: it is the book measuring itself.
- Language is switched at runtime; nothing reloads. English is the default —
  the browser's own language setting is not consulted — and a reader's choice
  persists per browser. `?lang=en|ja|zh` overrides both.
- Light and dark are switched the same way, from the menu. Light is the
  default and the operating system's preference is not consulted. Figures are
  authored once in the pale palette; the dark theme inverts each colour's
  lightness and keeps its hue, so a diagram is never a second file to maintain.
- Links are authored as `page.html#anchor` and rewritten to `#page/anchor` at
  render time, so the same data module works in `index.html` and in the bundle.

## Build and check

    npm install                 # jsdom and playwright, for the checkers only

    node tools/build.js         # regenerate data/08-index.js and bundle.html
    node tools/check.js         # render + language + parity
    node tools/layoutcheck.js   # every page × 3 languages × desktop and mobile

Pass 1 of `check.js` and all of `layoutcheck.js` must be clean before a
release. The language and parity passes are advisory and carry a small
standing baseline of deliberate findings — Chinese terms quoted inside
Japanese text, and years written as an era in one language and a decade in
another. `layoutcheck.js` takes several minutes.

`VERBOSE=1` on either checker lists every finding rather than the first twelve.

### Adding a page

1. Write the module into the right `data/0N-*.js` file, following the shape of
   any page already in it.
2. Add the page to `SAKE.NAV` in `assets/js/core.js`, in the position you want
   it to appear.
3. Add a `<script src>` line to `index.html` only if you created a new group
   file — otherwise nothing in `index.html` changes.
4. `node tools/build.js && node tools/check.js`

## Design constraints

- Every corner is square. `border-radius: 0` is enforced globally in `base.css`.
- The palette is pale, warm and low-chroma in both themes. No pure black, no
  saturated accents, no shadows, no gradients. Rules are 1px hairlines.
- The scrollbar is drawn, not native. No browser lets a native scrollbar be
  squared — Chromium rounds the thumb, Firefox exposes only a colour, and
  Windows adds arrow buttons — so `base.css` hides the native bar and
  `core.js` draws a 3px square line instead: one fixed element per scrolling
  container, positioned from that container's geometry, draggable, themed
  from the same tokens as everything else. No track, no arrows, no fade.
  The ink is 3px; the element around it is 15px, so the grab target is the
  size of a pointer while the line stays a hairline.
- Figures use the same palette as the page and are legible in monochrome.
- Nothing on a page may depend on colour alone to be understood.
- The whole book is readable on a phone. Below 700px a diagram keeps a legible
  size and scrolls sideways inside its frame rather than shrinking into it.

## Editorial rules

- Three languages are written together, not translated one from another. A
  figure that is wrong is wrong identically in all three.
- Numbers carry their year and their unit, or they are not used.
- A specification is what the house itself publishes. Where it publishes
  nothing, the directory prints an em dash rather than a plausible figure.
  No sake meter value and no acidity appear anywhere in the directory: both
  move from tank to tank, and a figure copied off one bottling misleads.
- Where sources disagree — several dates in sake history do — the disagreement
  is stated rather than resolved.
- Qualitative diagrams say so on their face.

## Hosting

Any static host will serve it. For GitHub Pages: Settings → Pages → Deploy from
a branch → `main` / `/ (root)`. `.nojekyll` is present so nothing is filtered.

Because the book is one document with hash routing, a deep link looks like
`…/#fakes` or `…/#starters/kimoto` rather than `…/fakes.html`.

## Credits

Written, drawn and built by **13STUDIO** with **Claude**.

© 2026 13STUDIO. All rights reserved.
The text and the figures are the work of 13STUDIO; please ask before reusing
them. Compiled from public sources — see the Sources page in the book itself.

Please drink responsibly. Alcohol is for adults of legal drinking age.

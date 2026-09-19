/* =============================================================
   THE BOOK OF SAKE — build
   Regenerates the two generated files:

     data/08-index.js   search index + figure index
     bundle.html        the whole book as one self-contained file

   The page order comes from SAKE.NAV in assets/js/core.js, which is
   the single source of truth for what pages exist and in what order.

       node tools/build.js
   ============================================================= */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const GROUPS = [
  "01-foundations", "02-making", "03-understanding",
  "04-place", "05-drinking", "06-world", "07-reference"
];

const PKG = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
const BUILT = new Date().toISOString().slice(0, 10);

/* ---- shared: read the nav order, then the page data ---------- */

function navGroups() {
  const src = fs.readFileSync(path.join(ROOT, "assets/js/core.js"), "utf8");
  const i = src.indexOf("SAKE.NAV = [");
  const j = src.indexOf("\n  ];", i);
  if (i < 0 || j < 0) throw new Error("could not find SAKE.NAV in core.js");
  return eval(src.slice(i + 11, j + 4).replace(/;\s*$/, ""));
}

function pageOrder() {
  const out = [];
  for (const g of navGroups())
    for (const it of g.items) out.push(it.href.replace(/\.html$/, ""));
  return out;
}

function loadPages() {
  const sandbox = { SAKE: { pages: {} } };
  vm.createContext(sandbox);
  for (const g of GROUPS) {
    const f = path.join(ROOT, "data", g + ".js");
    vm.runInContext(fs.readFileSync(f, "utf8"), sandbox, { filename: f });
  }
  return sandbox.SAKE.pages;
}

const PAGES = pageOrder();
const DATA = loadPages();

const missing = PAGES.filter(p => !DATA[p]);
if (missing.length) {
  console.error("no data module for: " + missing.join(", "));
  process.exit(1);
}
const orphan = Object.keys(DATA).filter(p => PAGES.indexOf(p) < 0);
if (orphan.length) console.warn("data present but not in SAKE.NAV: " + orphan.join(", "));

/* ---- helpers shared by both indexes -------------------------- */

function slug(s) {
  return String(s).toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "").slice(0, 60) || "s";
}
function strip(s) {
  return String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

/* ---- 1. search index ----------------------------------------- */

function triFull(v) {
  if (v == null) return null;
  if (typeof v === "string" || typeof v === "number") {
    const s = strip(v);
    return s ? { en: s, ja: s, zh: s } : null;
  }
  if (typeof v === "object") {
    const en = strip(v.en), ja = strip(v.ja), zh = strip(v.zh);
    if (!en && !ja && !zh) return null;
    return { en: en || ja || zh, ja: ja || en || zh, zh: zh || en || ja };
  }
  return null;
}

/* Anchor per directory entry, assigned in document order so that a
   repeated romanisation (上喜元 and 常きげん are both Jōkigen) gets
   the same numeric suffix core.js gives it at render time.        */
const brandIds = new Map();

function assignIds(items) {
  if (!Array.isArray(items)) return;
  const seen = new Map();
  for (const e of items) {
    if (!e || e.group) continue;
    const base = "b-" + String(e.r || e.jp).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const n = (seen.get(base) || 0) + 1;
    seen.set(base, n);
    brandIds.set(e, n === 1 ? base : base + "-" + n);
  }
}

function walkIds(blocks) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b.t === "brands") { assignIds(b.items); continue; }
    if (b.t === "section") walkIds(b.body);
  }
}

if (DATA.directory) walkIds(DATA.directory.body);

const index = [];

function push(page, anchor, kind, label, extra) {
  const t = triFull(label);
  if (!t) return;
  const e = { p: page, a: anchor || "", k: kind, t: t };
  if (extra) e.j = strip(extra);
  index.push(e);
}

function walkIndex(page, blocks, anchor) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;

    if (b.t === "section") {
      const id = b.id || slug(triFull(b.title) ? triFull(b.title).en : "s");
      push(page, id, "section", b.title, b.jp);
      walkIndex(page, b.body, id);
      continue;
    }
    if (b.t === "h2" || b.t === "h3") {
      const id = b.id || slug(b.text && b.text.en ? b.text.en : (triFull(b.text) || {}).en);
      push(page, id, "heading", b.text, b.jp);
      continue;
    }
    if (b.t === "defs" && Array.isArray(b.items)) {
      for (const it of b.items) push(page, anchor, "term", it.term, it.jp);
      continue;
    }
    if (b.t === "glossary" && Array.isArray(b.items)) {
      for (const g of b.items) push(page, anchor, "term", g.r, g.jp);
      continue;
    }
    if (b.t === "table" && Array.isArray(b.rows)) {
      for (const row of b.rows) {
        if (!row || !row.length) continue;
        if (!triFull(row[0])) continue;
        const jp = row.length > 1 && typeof row[1] === "string" ? row[1] : "";
        push(page, anchor, "row", row[0], /[぀-ヿ一-鿿]/.test(jp) ? jp : "");
      }
      continue;
    }
    if (b.t === "grid" && Array.isArray(b.cells)) {
      for (const c of b.cells) { if (c.h) push(page, anchor, "row", c.h, c.jp); }
      continue;
    }
    if (b.t === "compare" && Array.isArray(b.items)) {
      for (const c of b.items) { push(page, anchor, "row", c.title, c.jp); if (c.body) walkIndex(page, c.body, anchor); }
      continue;
    }
    if (b.t === "steps" && Array.isArray(b.items)) {
      for (const s of b.items) { push(page, anchor, "row", s.title, s.jp); if (s.body) walkIndex(page, s.body, anchor); }
      continue;
    }
    if (b.t === "timeline" && Array.isArray(b.items)) {
      for (const s of b.items) { if (s.title) push(page, anchor, "row", s.title, s.jp); }
      continue;
    }
    if (b.t === "brands" && Array.isArray(b.items)) {
      /* Every house in the directory is findable by its brand in any
         script, by its romanisation, and by the company behind it.  */
      for (const e of b.items) {
        if (!e || e.group) continue;
        const id = brandIds.get(e) || "";
        const label = { en: e.r || e.jp, ja: e.jp, zh: e.jp };
        push(page, id, "brand", label, [e.h, e.hr].filter(Boolean).join(" "));
      }
      continue;
    }
    if (b.t === "panel" && b.body) { walkIndex(page, b.body, anchor); continue; }
  }
}

for (const p of PAGES) {
  push(p, "", "page", DATA[p].title, DATA[p].jp);
  walkIndex(p, DATA[p].body, "");
}

const searchOut = [];
const seenKeys = new Set();
for (const e of index) {
  const k = e.p + "|" + e.a + "|" + e.t.en;
  if (seenKeys.has(k)) continue;
  seenKeys.add(k);
  searchOut.push(e);
}

/* ---- 2. figure index ----------------------------------------- */

function firstSentence(s, max) {
  s = strip(s);
  let m = /^(.{12,}?[。！？])/.exec(s);
  if (!m) m = /^(.{20,}?[.!?])(?:\s|$)/.exec(s);
  let out = m ? m[1] : s;
  if (out.length > max) out = out.slice(0, max - 1).replace(/[\s、,]+$/, "") + "…";
  return out;
}
function triCap(v) {
  if (v == null) return null;
  if (typeof v === "string") { const s = firstSentence(v, 118); return { en: s, ja: s, zh: s }; }
  const en = firstSentence(v.en || "", 118), ja = firstSentence(v.ja || "", 56), zh = firstSentence(v.zh || "", 56);
  if (!en && !ja && !zh) return null;
  return { en: en || ja || zh, ja: ja || en || zh, zh: zh || en || ja };
}

const figs = [];

function walkFigs(page, blocks, state) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b.t === "figure") {
      state.n += 1;
      const c = triCap(b.caption);
      if (c) figs.push({ p: page, n: state.n, c: c });
      continue;
    }
    if (b.t === "section") { walkFigs(page, b.body, state); continue; }
    if (b.t === "panel" && b.body) { walkFigs(page, b.body, state); continue; }
    if (b.t === "compare" && Array.isArray(b.items)) {
      for (const c of b.items) if (c.body) walkFigs(page, c.body, state);
      continue;
    }
    if (b.t === "steps" && Array.isArray(b.items)) {
      for (const s of b.items) if (s.body) walkFigs(page, s.body, state);
      continue;
    }
  }
}

for (const p of PAGES) walkFigs(p, DATA[p].body, { n: 0 });


/* ---- rice cross-index ----------------------------------------
   Every rice variety named in the brand directory, mapped back to
   the houses that brew with it. Derived from the directory data,
   so the two can never drift apart.                              */

const riceUse = new Map();

function collectRice(items) {
  if (!Array.isArray(items)) return;
  for (const e of items) {
    if (!e || e.group || !Array.isArray(e.p)) continue;
    const id = brandIds.get(e);
    for (const pr of e.p) {
      if (!pr || !pr.rice) continue;
      const keys = (typeof pr.rice === "string") ? [pr.rice] : pr.rice;
      for (const k of keys) {
        if (!riceUse.has(k)) riceUse.set(k, new Map());
        riceUse.get(k).set(e.jp, { jp: e.jp, r: e.r, id: id, pref: e.pref });
      }
    }
  }
}

function walkRice(blocks) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b.t === "brands") { collectRice(b.items); continue; }
    if (b.t === "section") walkRice(b.body);
  }
}

if (DATA.directory) walkRice(DATA.directory.body);

/* Prefectures, in the north-to-south order core.js declares them. */
function prefOrder() {
  const src = fs.readFileSync(path.join(ROOT, "assets/js/core.js"), "utf8");
  const i = src.indexOf("var PREF = SAKE.PREF = {");
  const j = src.indexOf("\n  };", i);
  if (i < 0 || j < 0) throw new Error("could not find SAKE.PREF in core.js");
  return [...src.slice(i, j).matchAll(/^\s{4}(\w+)\s*:/gm)].map(m => m[1]);
}

const prefUse = new Map();

function collectPref(items) {
  if (!Array.isArray(items)) return;
  for (const e of items) {
    if (!e || e.group || !e.pref) continue;
    const id = brandIds.get(e);
    if (!prefUse.has(e.pref)) prefUse.set(e.pref, []);
    prefUse.get(e.pref).push({ jp: e.jp, r: e.r, id: id });
  }
}

function walkPref(blocks) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b.t === "brands") { collectPref(b.items); continue; }
    if (b.t === "section") walkPref(b.body);
  }
}

if (DATA.directory) walkPref(DATA.directory.body);

/* ---- starter-method index and the milling distribution -------
   Both are read straight off the directory's products: which houses
   keep a kimoto, yamahai or bodaimoto bottle in the standing range,
   and how the published polishing ratios are actually spread.     */

const METHODS = ["kimoto", "yamahai", "bodai"];
const methodUse = new Map(METHODS.map(m => [m, new Map()]));
const millCount = new Map();
let millTotal = 0, millLow = null, millHigh = null;

function collectMethod(items) {
  if (!Array.isArray(items)) return;
  for (const e of items) {
    if (!e || e.group || !Array.isArray(e.p)) continue;
    const id = brandIds.get(e);
    for (const pr of e.p) {
      if (!pr) continue;
      if (Array.isArray(pr.m)) {
        for (const m of pr.m) {
          if (!methodUse.has(m)) continue;
          methodUse.get(m).set(e.jp, { jp: e.jp, r: e.r, id: id, pref: e.pref });
        }
      }
      if (typeof pr.mill === "string") {
        /* "50%", "50 / 55%" — count every figure the label carries */
        for (const s of pr.mill.match(/\d+(?:\.\d+)?/g) || []) {
          const v = Math.round(parseFloat(s));
          if (!(v > 0 && v <= 100)) continue;
          millCount.set(v, (millCount.get(v) || 0) + 1);
          millTotal += 1;
          const rec = { v: v, jp: e.jp, p: pr.jp };
          if (!millLow || v < millLow.v) millLow = rec;
          if (!millHigh || v > millHigh.v) millHigh = rec;
        }
      }
    }
  }
}

function walkMethod(blocks) {
  if (!Array.isArray(blocks)) return;
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    if (b.t === "brands") { collectMethod(b.items); continue; }
    if (b.t === "section") walkMethod(b.body);
  }
}

if (DATA.directory) walkMethod(DATA.directory.body);

const methodIndex = METHODS
  .map(m => ({ k: m, b: [...methodUse.get(m).values()] }))
  .filter(x => x.b.length);

const millDist = {
  n: millTotal,
  low: millLow,
  high: millHigh,
  bins: [...millCount.entries()].sort((a, b) => a[0] - b[0]).map(([v, n]) => ({ v: v, n: n }))
};

const prefIndex = prefOrder()
  .filter(k => prefUse.has(k))
  .map(k => ({ k: k, b: prefUse.get(k) }));

const riceIndex = [...riceUse.entries()]
  .map(([k, m]) => ({ k: k, b: [...m.values()] }))
  .sort((a, b) => b.b.length - a.b.length || a.k.localeCompare(b.k));

/* ---- write data/08-index.js ---------------------------------- */

const indexFile =
  "/* =============================================================\n" +
  "   Generated by tools/build.js — do not edit.\n" +
  "   The cross-page search index and the index of every figure.\n" +
  "   ============================================================= */\n" +
  "SAKE.searchIndex = " + JSON.stringify(searchOut) + ";\n" +
  "SAKE.FIGINDEX = " + JSON.stringify(figs) + ";\n" +
  "SAKE.RICEINDEX = " + JSON.stringify(riceIndex) + ";\n" +
  "SAKE.PREFINDEX = " + JSON.stringify(prefIndex) + ";\n" +
  "SAKE.METHODINDEX = " + JSON.stringify(methodIndex) + ";\n" +
  "SAKE.MILLDIST = " + JSON.stringify(millDist) + ";\n";

fs.writeFileSync(path.join(ROOT, "data", "08-index.js"), indexFile, "utf8");
console.log("edition: v" + PKG.version + "  built " + BUILT);
console.log(
  "index: " + searchOut.length + " search entries, " + figs.length + " figures, " +
  riceIndex.length + " rice varieties, " + prefIndex.length + " prefectures, " +
  millDist.n + " polishing figures  (" +
  (Buffer.byteLength(indexFile) / 1024).toFixed(0) + " KB)"
);

/* ---- 3. bundle.html ------------------------------------------ */

const css = fs.readFileSync(path.join(ROOT, "assets/css/base.css"), "utf8");
const core = fs.readFileSync(path.join(ROOT, "assets/js/core.js"), "utf8");
const groupSrc = GROUPS.map(g => fs.readFileSync(path.join(ROOT, "data", g + ".js"), "utf8")).join("\n");

const favicon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23FBFAF7'/%3E%3Crect x='6' y='6' width='20' height='20' fill='none' stroke='%237C6B52' stroke-width='1.5'/%3E%3Cpath d='M11 16h10M16 11v10' stroke='%237C6B52' stroke-width='1.5'/%3E%3C/svg%3E";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The Book of Sake — a trilingual reference on Japanese sake: history, brewing, classification, terroir, tasting. English, 日本語, 繁體中文.">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#FBFAF7">
<meta name="generator" content="the-book-of-sake v${PKG.version} \u00b7 built ${BUILT}">
<title>The Book of Sake — 酒の書</title>
<script>(function(){var t="light";try{if(localStorage.getItem("sake.theme")==="dark")t="dark";}catch(e){}
document.documentElement.setAttribute("data-theme",t);})();</script>
<link rel="icon" href="${favicon}">
<style>
${css}
</style>
</head>
<body>
<header class="topbar"><div class="topbar-in"></div></header>
<div class="shell">
  <nav class="rail" aria-label="Sections"></nav>
  <main></main>
  <aside class="toc" aria-label="On this page"></aside>
</div>
<footer class="foot"></footer>

<script>window.SAKE = { bundle: true };</script>
<script>
${core}
</script>
<script>
${indexFile}
</script>
<script>
${groupSrc}
</script>
<script>SAKE.render();</script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, "bundle.html"), html, "utf8");
console.log(
  "bundle.html: " + (Buffer.byteLength(html) / 1024 / 1024).toFixed(2) + " MB, " + PAGES.length + " pages"
);

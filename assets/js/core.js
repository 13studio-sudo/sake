/* =============================================================
   SAKE — core runtime
   i18n resolver + block renderer + navigation + TOC
   Plain ES5-safe browser JS. No build step. Works from file://
   ============================================================= */
(function (global) {
  "use strict";

  var SAKE = global.SAKE = global.SAKE || {};
  SAKE.pages = SAKE.pages || {};
  SAKE.LANGS = ["en", "ja", "zh"];
  SAKE.HTMLLANG = { en: "en", ja: "ja", zh: "zh-Hant" };

  /* ---------------------------------------------------------- */
  /* Language state                                             */
  /* ---------------------------------------------------------- */
  var KEY = "sake.lang";

  function readStored() {
    try { return global.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function writeStored(v) {
    try { global.localStorage.setItem(KEY, v); } catch (e) { /* ignore */ }
  }
  function fromQuery() {
    var m = /[?&]lang=(en|ja|zh)\b/.exec(global.location.search);
    return m ? m[1] : null;
  }
  /* English is the default. The browser's own language setting is
     deliberately not consulted: a reader who wants Japanese or Chinese
     picks it from the menu, and the choice then persists. ?lang= still
     overrides everything, for linking straight into one language. */
  SAKE.lang = fromQuery() || readStored() || "en";
  if (SAKE.LANGS.indexOf(SAKE.lang) < 0) SAKE.lang = "en";

  /* ---------------------------------------------------------- */
  /* Theme state                                                */
  /* ---------------------------------------------------------- */
  var TKEY = "sake.theme";

  function readTheme() {
    try { return global.localStorage.getItem(TKEY); } catch (e) { return null; }
  }
  function writeTheme(v) {
    try { global.localStorage.setItem(TKEY, v); } catch (e) { /* ignore */ }
  }
  /* Light is the default. The operating system's preference is deliberately
     not consulted: the book is designed on pale paper, and a reader who wants
     the dark ground chooses it from the menu. The choice then persists. */
  var storedTheme = readTheme();
  SAKE.theme = (storedTheme === "dark") ? "dark" : "light";

  function applyTheme() {
    if (document.documentElement) {
      document.documentElement.setAttribute("data-theme", SAKE.theme);
    }
  }
  applyTheme();

  SAKE.setTheme = function (t) {
    if (t !== "dark" && t !== "light") return;
    var y = global.scrollY;
    SAKE.theme = t;
    writeTheme(t);
    applyTheme();
    SAKE.render();
    global.scrollTo(0, y);
  };

  /* Figures are authored once, in the pale palette, as hard hex values.
     Rather than maintain a second copy of ninety-odd diagrams, the dark
     theme inverts each colour's lightness and keeps its hue: a warm pale
     fill becomes a warm dark one, near-black ink becomes warm paper, and
     mid-tones stay where they are. Contrast is preserved because the
     transform is monotonic. */
  var darkCache = {};

  function hsl2hex(h, s, l) {
    function hue(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    var r, g, b, q, p;
    if (s === 0) { r = g = b = l; }
    else {
      q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      p = 2 * l - q;
      r = hue(p, q, h + 1 / 3); g = hue(p, q, h); b = hue(p, q, h - 1 / 3);
    }
    function ch(v) {
      var x = Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16);
      return x.length < 2 ? "0" + x : x;
    }
    return "#" + ch(r) + ch(g) + ch(b);
  }

  function darkHex(hex) {
    var key = hex.toLowerCase();
    if (darkCache[key]) return darkCache[key];
    var r = parseInt(hex.substr(1, 2), 16) / 255,
        g = parseInt(hex.substr(3, 2), 16) / 255,
        b = parseInt(hex.substr(5, 2), 16) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    var l = (mx + mn) / 2, d = mx - mn, h = 0, s = 0;
    if (d) {
      s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
      if (mx === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (mx === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h /= 6;
    }
    /* Invert lightness, then compress into the dark theme's range so
       that paper white lands on the page ground rather than pure black. */
    var out = hsl2hex(h, Math.min(s * 0.92, 0.42), 0.055 + (1 - l) * 0.80);
    darkCache[key] = out;
    return out;
  }

  SAKE.themeSvg = function (svg) {
    if (SAKE.theme !== "dark" || typeof svg !== "string") return svg;
    return svg.replace(/#[0-9A-Fa-f]{6}\b/g, darkHex);
  };

  /* Resolve a localised value. Accepts a plain string (identical in all
     languages — proper nouns, numbers) or {en, ja, zh}. */
  function L(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (typeof v === "object") {
      if (v[SAKE.lang] != null) return String(v[SAKE.lang]);
      if (v.en != null) return String(v.en);
      if (v.ja != null) return String(v.ja);
    }
    return "";
  }
  SAKE.L = L;

  /* ---------------------------------------------------------- */
  /* Tiny DOM helpers                                           */
  /* ---------------------------------------------------------- */
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null) continue;
      if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (html != null) n.innerHTML = html;
    return n;
  }
  function slug(s) {
    return String(s).toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "").slice(0, 60) || "s";
  }
  SAKE.el = el;


  /* ---------------------------------------------------------- */
  /* Routing — multi-file by default, hash routing when bundled  */
  /* ---------------------------------------------------------- */
  function parseHash() {
    var h = (global.location.hash || "").replace(/^#/, "");
    if (!h) return { page: "index", anchor: "" };
    var i = h.indexOf("/");
    if (i < 0) return { page: h, anchor: "" };
    return { page: h.slice(0, i), anchor: h.slice(i + 1) };
  }

  SAKE.currentPage = function () {
    if (SAKE.bundle) {
      var r = parseHash();
      return SAKE.pages[r.page] ? r.page : "index";
    }
    var k = document.body.getAttribute("data-page");
    if (k) return k;
    var f = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return f.replace(/\.html$/, "") || "index";
  };

  /* Build an href for a page key plus optional anchor. */
  SAKE.href = function (page, anchor) {
    if (SAKE.bundle) return "#" + page + (anchor ? "/" + anchor : "");
    return page + ".html" + (anchor ? "#" + anchor : "");
  };

  /* Rewrite an authored "page.html#anchor" link for the current mode. */
  function rewriteHref(h) {
    if (!SAKE.bundle || !h) return h;
    if (/^(https?:|mailto:|#)/.test(h)) return h;
    var m = /^([a-z0-9_-]+)\.html(?:#(.*))?$/i.exec(h);
    if (!m) return h;
    return SAKE.href(m[1], m[2] || "");
  }

  function navItem(href) {
    var a, c;
    for (a = 0; a < SAKE.NAV.length; a++) {
      for (c = 0; c < SAKE.NAV[a].items.length; c++) {
        if (SAKE.NAV[a].items[c].href === href) return SAKE.NAV[a].items[c];
      }
    }
    return null;
  }

  function rewriteLinks(root) {
    if (!SAKE.bundle || !root) return;
    var as = root.querySelectorAll("a[href]");
    for (var i = 0; i < as.length; i++) {
      var h = as[i].getAttribute("href");
      var n = rewriteHref(h);
      if (n !== h) as[i].setAttribute("href", n);
    }
  }

  /* ---------------------------------------------------------- */
  /* Block renderer                                             */
  /* ---------------------------------------------------------- */
  var figSeq = 0;

  function cellText(c) {
    if (c == null) return "";
    if (typeof c === "object" && c.t === "chip") {
      return '<span class="chip ' + (c.k || "") + '">' + L(c.text) + "</span>";
    }
    return L(c);
  }


  /* ---------------------------------------------------------- */
  /* Brand directory vocabulary                                 */
  /*                                                            */
  /* Designation, method and rice names are written once here   */
  /* and referenced by key from the directory data, so that a   */
  /* hundred entries do not each carry their own translation of */
  /* the word "junmai daiginjo".                                */
  /* ---------------------------------------------------------- */
  var GRADE = SAKE.GRADE = {
    jd:  { en: "Junmai daiginjō",    ja: "純米大吟醸",   zh: "純米大吟釀" },
    jg:  { en: "Junmai ginjō",       ja: "純米吟醸",     zh: "純米吟釀" },
    tj:  { en: "Tokubetsu junmai",   ja: "特別純米",     zh: "特別純米" },
    j:   { en: "Junmai",             ja: "純米",         zh: "純米" },
    dg:  { en: "Daiginjō",           ja: "大吟醸",       zh: "大吟釀" },
    g:   { en: "Ginjō",              ja: "吟醸",         zh: "吟釀" },
    thj: { en: "Tokubetsu honjōzō",  ja: "特別本醸造",   zh: "特別本釀造" },
    hj:  { en: "Honjōzō",            ja: "本醸造",       zh: "本釀造" },
    f:   { en: "Futsūshu",           ja: "普通酒",       zh: "普通酒" },
    jos: { en: "Jōsen grade",        ja: "上撰",         zh: "上撰" },
    kas: { en: "Kasen grade",        ja: "佳撰",         zh: "佳撰" },
    lq:  { en: "Liqueur",            ja: "リキュール",   zh: "利口酒" },
    nd:  { en: "Undeclared",         ja: "名称なし",     zh: "未標示" }
  };
  var GMOD = SAKE.GMOD = {
    kimoto:  { en: "kimoto",       ja: "生酛",       zh: "生酛" },
    yamahai: { en: "yamahai",      ja: "山廃",       zh: "山廢" },
    bodai:   { en: "bodaimoto",    ja: "菩提酛",     zh: "菩提酛" },
    nama:    { en: "nama",         ja: "生酒",       zh: "生酒" },
    genshu:  { en: "genshu",       ja: "原酒",       zh: "原酒" },
    muroka:  { en: "muroka",       ja: "無濾過",     zh: "無濾過" },
    nigori:  { en: "nigori",       ja: "にごり",     zh: "濁酒" },
    spark:   { en: "sparkling",    ja: "発泡",       zh: "氣泡" },
    shizuku: { en: "shizuku-pressed", ja: "雫取り",  zh: "雫取" },
    aged:    { en: "aged",         ja: "熟成",       zh: "熟成" },
    cup:     { en: "cup",          ja: "カップ",     zh: "杯裝" },
    pack:    { en: "carton",       ja: "紙パック",   zh: "紙盒裝" }
  };
  var RICE = SAKE.RICE = {
    yamada:    { jp: "山田錦",     r: "Yamada Nishiki" },
    yamadaA:   { jp: "山田錦（特A地区）", r: "Yamada Nishiki (Special-A)" },
    omachi:    { jp: "雄町",       r: "Omachi" },
    omachiAk:  { jp: "赤磐雄町",   r: "Akaiwa Omachi" },
    gohyaku:   { jp: "五百万石",   r: "Gohyakumangoku" },
    miyama:    { jp: "美山錦",     r: "Miyama Nishiki" },
    aiyama:    { jp: "愛山",       r: "Aiyama" },
    hattan:    { jp: "八反錦",     r: "Hattan Nishiki" },
    hattanso:  { jp: "八反草",     r: "Hattansō" },
    kameno:    { jp: "亀の尾",     r: "Kame-no-o" },
    dewa33:    { jp: "出羽燦々",   r: "Dewa Sansan" },
    dewanosato:{ jp: "出羽の里",   r: "Dewa-no-sato" },
    kaminoho:  { jp: "神の穂",     r: "Kami-no-ho" },
    hitogokoro:{ jp: "ひとごこち", r: "Hitogokochi" },
    kinmon:    { jp: "金紋錦",     r: "Kinmon Nishiki" },
    homare:    { jp: "誉富士",     r: "Homare Fuji" },
    goriki:    { jp: "強力",       r: "Gōriki" },
    tamasakae: { jp: "玉栄",       r: "Tamasakae" },
    ginfubuki: { jp: "吟吹雪",     r: "Ginfubuki" },
    yumenishiki:{ jp: "兵庫夢錦",  r: "Hyōgo Yumenishiki" },
    akitsuho:  { jp: "秋津穂",     r: "Akitsuho" },
    tsuyuha:   { jp: "露葉風",     r: "Tsuyuhakaze" },
    iwai:      { jp: "祝",         r: "Iwai" },
    hiroshima: { jp: "広島錦",     r: "Hiroshima Nishiki" },
    tosa:      { jp: "土佐錦",     r: "Tosa Nishiki" },
    kazenoko:  { jp: "風鳴子",     r: "Kazenaruko" },
    nishikino: { jp: "錦の雫",     r: "Nishiki-no-shizuku" },
    homase:    { jp: "穂増",       r: "Homase" },
    ibi:       { jp: "揖斐の誉",   r: "Ibi-no-homare" },
    wakamizu:  { jp: "若水",       r: "Wakamizu" },
    fusakogane:{ jp: "ふさこがね", r: "Fusakogane" },
    rakufu:    { jp: "楽風舞",     r: "Rakufumai" },
    isenishiki:{ jp: "伊勢錦",     r: "Ise Nishiki" },
    hitachi:   { jp: "ひたち錦",   r: "Hitachi Nishiki" },
    asahi:     { jp: "朝日",       r: "Asahi" },
    kumamoto:  { jp: "熊本県産米", r: "Kumamoto-grown rice" },
    local:     { jp: "地元産米",   r: "locally grown rice" },
    brewing:   { jp: "酒造好適米", r: "brewing rice" },
    hanafubuki:{ jp: "華吹雪",     r: "Hanafubuki" },
    hohaimai:  { jp: "豊盃米",     r: "Hōhai" },
    yamadaho:  { jp: "山田穂",     r: "Yamadaho" },
    ginotome:  { jp: "ぎんおとめ", r: "Gin-otome" },
    yuinoka:   { jp: "結の香",     r: "Yui-no-ka" },
    ginginga:  { jp: "吟ぎんが",   r: "Gin-ginga" },
    akitakomachi:{ jp: "秋田酒こまち", r: "Akita Sake Komachi" },
    kairyo:    { jp: "改良信交",   r: "Kairyō Shinkō" },
    yukimegami:{ jp: "雪女神",     r: "Yuki Megami" },
    sasanishiki:{ jp: "ササニシキ", r: "Sasanishiki" },
    kuranohana:{ jp: "蔵の華",     r: "Kura-no-hana" },
    hitomebore:{ jp: "ひとめぼれ", r: "Hitomebore" },
    yumenoka:  { jp: "夢の香",     r: "Yume-no-ka" },
    fukunoka:  { jp: "福乃香",     r: "Fuku-no-ka" },
    ryunoko:   { jp: "龍の落とし子", r: "Ryū-no-otoshigo" },
    koshitanrei:{ jp: "越淡麗",    r: "Koshi Tanrei" },
    koshiibuki:{ jp: "こしいぶき", r: "Koshi Ibuki" },
    notohikari:{ jp: "能登ひかり", r: "Noto Hikari" },
    tominoka:  { jp: "富の香",     r: "Tomi-no-ka" },
    ginpu:     { jp: "吟風",       r: "Ginpū" },
    suisei:    { jp: "彗星",       r: "Suisei" },
    kitashizuku:{ jp: "北しずく",  r: "Kita Shizuku" },
    hakutsurun:{ jp: "白鶴錦",     r: "Hakutsuru Nishiki" },
    aikoku:    { jp: "愛国",       r: "Aikoku" },
    misato:    { jp: "美郷錦",     r: "Misato Nishiki" },
    rikuuden:  { jp: "陸羽田",     r: "Rikuuden" },
    yukinosei: { jp: "ゆきの精",   r: "Yuki-no-sei" },
    ipponjime: { jp: "一本〆",     r: "Ipponjime" },
    kairyoomachi:{ jp: "改良雄町", r: "Kairyō Omachi" },
    matsuyama: { jp: "松山三井",   r: "Matsuyama Mii" },
    ooseto:    { jp: "オオセト",   r: "Ōseto" },
    sanuki:    { jp: "さぬきよいまい", r: "Sanuki Yoimai" },
    sagabiyori:{ jp: "さがびより", r: "Saga Biyori" },
    yumeikkon: { jp: "夢一献",     r: "Yume Ikkon" },
    jugemu:    { jp: "壽限無",     r: "Jugemu" },
    nihonbare: { jp: "日本晴",     r: "Nihonbare" },
    hinohikari:{ jp: "ひのひかり", r: "Hinohikari" },
    yumesasara:{ jp: "夢ささら",   r: "Yume Sasara" },
    yumeginga: { jp: "夢吟香",     r: "Yume Ginga" },
    hirohattan:{ jp: "広島八反",   r: "Hiroshima Hattan" },
    nakate:    { jp: "中生新千本", r: "Nakate Shinsenbon" },
    hananishiki:{ jp: "華錦",      r: "Hana Nishiki" },
    domestic:  { jp: "国産米",     r: "domestic rice" },
    hanaomoi:  { jp: "華想い",     r: "Hana-omoi" },
    ginnosei:  { jp: "吟の精",     r: "Gin-no-sei" },
    toyonishiki:{ jp: "トヨニシキ", r: "Toyo Nishiki" },
    dewakirari:{ jp: "出羽きらり", r: "Dewa Kirari" },
    takane:    { jp: "たかね錦",   r: "Takane Nishiki" },
    hyakumangoku:{ jp: "百万石乃白", r: "Hyakumangoku-no-shiro" },
    koshinoshizuku:{ jp: "越の雫", r: "Koshi-no-shizuku" },
    hidahomare:{ jp: "ひだほまれ", r: "Hida Homare" },
    kitanishiki:{ jp: "兵庫北錦",  r: "Hyōgo Kita Nishiki" },
    shikokumai:{ jp: "紫黒米",     r: "purple-black heirloom rice" },
    tajimagoriki:{ jp: "但馬強力", r: "Tajima Gōriki" },
    sakanishiki:{ jp: "佐香錦",    r: "Saka Nishiki" },
    kaminomai: { jp: "神の舞",     r: "Kami-no-mai" },
    senbon:    { jp: "千本錦",     r: "Senbon Nishiki" },
    moeibuki:  { jp: "萌えいぶき", r: "Moe Ibuki" },
    reiho:     { jp: "レイホウ",   r: "Reihō" }
  };

  /* Prefectures, written once. A directory entry names one by    */
  /* key; the Japanese form takes 県, the Chinese 縣.               */
  var PREF = SAKE.PREF = {
    hokkaido:{ en:"Hokkaidō",  ja:"北海道",   zh:"北海道" },
    aomori:  { en:"Aomori",    ja:"青森県",   zh:"青森縣" },
    iwate:   { en:"Iwate",     ja:"岩手県",   zh:"岩手縣" },
    akita:   { en:"Akita",     ja:"秋田県",   zh:"秋田縣" },
    yamagata:{ en:"Yamagata",  ja:"山形県",   zh:"山形縣" },
    miyagi:  { en:"Miyagi",    ja:"宮城県",   zh:"宮城縣" },
    fukushima:{en:"Fukushima", ja:"福島県",   zh:"福島縣" },
    ibaraki: { en:"Ibaraki",   ja:"茨城県",   zh:"茨城縣" },
    tochigi: { en:"Tochigi",   ja:"栃木県",   zh:"栃木縣" },
    gunma:   { en:"Gunma",     ja:"群馬県",   zh:"群馬縣" },
    saitama: { en:"Saitama",   ja:"埼玉県",   zh:"埼玉縣" },
    chiba:   { en:"Chiba",     ja:"千葉県",   zh:"千葉縣" },
    tokyo:   { en:"Tokyo",     ja:"東京都",   zh:"東京都" },
    kanagawa:{ en:"Kanagawa",  ja:"神奈川県", zh:"神奈川縣" },
    niigata: { en:"Niigata",   ja:"新潟県",   zh:"新潟縣" },
    toyama:  { en:"Toyama",    ja:"富山県",   zh:"富山縣" },
    ishikawa:{ en:"Ishikawa",  ja:"石川県",   zh:"石川縣" },
    fukui:   { en:"Fukui",     ja:"福井県",   zh:"福井縣" },
    yamanashi:{en:"Yamanashi", ja:"山梨県",   zh:"山梨縣" },
    nagano:  { en:"Nagano",    ja:"長野県",   zh:"長野縣" },
    gifu:    { en:"Gifu",      ja:"岐阜県",   zh:"岐阜縣" },
    shizuoka:{ en:"Shizuoka",  ja:"静岡県",   zh:"靜岡縣" },
    aichi:   { en:"Aichi",     ja:"愛知県",   zh:"愛知縣" },
    mie:     { en:"Mie",       ja:"三重県",   zh:"三重縣" },
    shiga:   { en:"Shiga",     ja:"滋賀県",   zh:"滋賀縣" },
    kyoto:   { en:"Kyoto",     ja:"京都府",   zh:"京都府" },
    osaka:   { en:"Osaka",     ja:"大阪府",   zh:"大阪府" },
    hyogo:   { en:"Hyōgo",     ja:"兵庫県",   zh:"兵庫縣" },
    nara:    { en:"Nara",      ja:"奈良県",   zh:"奈良縣" },
    wakayama:{ en:"Wakayama",  ja:"和歌山県", zh:"和歌山縣" },
    tottori: { en:"Tottori",   ja:"鳥取県",   zh:"鳥取縣" },
    shimane: { en:"Shimane",   ja:"島根県",   zh:"島根縣" },
    okayama: { en:"Okayama",   ja:"岡山県",   zh:"岡山縣" },
    hiroshima:{en:"Hiroshima", ja:"広島県",   zh:"廣島縣" },
    yamaguchi:{en:"Yamaguchi", ja:"山口県",   zh:"山口縣" },
    tokushima:{en:"Tokushima", ja:"徳島県",   zh:"德島縣" },
    kagawa:  { en:"Kagawa",    ja:"香川県",   zh:"香川縣" },
    ehime:   { en:"Ehime",     ja:"愛媛県",   zh:"愛媛縣" },
    kochi:   { en:"Kōchi",     ja:"高知県",   zh:"高知縣" },
    fukuoka: { en:"Fukuoka",   ja:"福岡県",   zh:"福岡縣" },
    saga:    { en:"Saga",      ja:"佐賀県",   zh:"佐賀縣" },
    nagasaki:{ en:"Nagasaki",  ja:"長崎県",   zh:"長崎縣" },
    kumamoto:{ en:"Kumamoto",  ja:"熊本県",   zh:"熊本縣" },
    oita:    { en:"Ōita",      ja:"大分県",   zh:"大分縣" },
    miyazaki:{ en:"Miyazaki",  ja:"宮崎県",   zh:"宮崎縣" },
    kagoshima:{en:"Kagoshima", ja:"鹿児島県", zh:"鹿兒島縣" },
    okinawa: { en:"Okinawa",   ja:"沖縄県",   zh:"沖繩縣" }
  };

  function prefName(v) {
    if (typeof v === "string" && PREF[v]) return L(PREF[v]);
    return L(v);
  }

  function riceName(k) {
    var v = RICE[k];
    if (!v) return k;
    return SAKE.lang === "en" ? v.r : v.jp;
  }

  function gradeName(p) {
    var out = [], i;
    if (p.g) out.push(L(GRADE[p.g] || { en: p.g, ja: p.g, zh: p.g }));
    if (p.m) for (i = 0; i < p.m.length; i++) {
      out.push(L(GMOD[p.m[i]] || { en: p.m[i], ja: p.m[i], zh: p.m[i] }));
    }
    return out.join(" ");
  }

  /* The designation carries the weight; the starter method and the
     finishing state sit beside it in a quieter hand.              */
  function gradeHtml(p) {
    var g = p.g ? L(GRADE[p.g] || { en: p.g, ja: p.g, zh: p.g }) : "";
    var mods = [], i;
    if (p.m) for (i = 0; i < p.m.length; i++) {
      mods.push(L(GMOD[p.m[i]] || { en: p.m[i], ja: p.m[i], zh: p.m[i] }));
    }
    var html = g ? "<b>" + g + "</b>" : "";
    if (mods.length) html += (html ? " " : "") + '<span class="bp-m">' + mods.join(" ") + "</span>";
    return html || DASH;
  }

  /* An em dash in a spec means the house does not publish the   */
  /* figure, not that we failed to look it up. The page says so. */
  var DASH = '<span class="bp-u">—</span>';

  function specLine(p) {
    var bits = [], rr, rn, i;
    bits.push(gradeHtml(p));
    if (p.rice) {
      rr = (typeof p.rice === "string") ? [p.rice] : p.rice;
      rn = [];
      for (i = 0; i < rr.length; i++) rn.push(riceName(rr[i]));
      bits.push(rn.join(" / "));
    } else bits.push(DASH);
    bits.push(p.mill ? '<span class="num">' + p.mill + "</span>" : DASH);
    return bits.join('<span class="bp-sep">·</span>');
  }

  /* The anchor a rice-index entry links to. tools/build.js derives
     the same string from the same data; keep the two in step.     */
  function brandAnchor(e) {
    return "b-" + String(e.r || e.jp).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  /* Two houses can romanise identically — 上喜元 and 常きげん are
     both Jōkigen. The second one met gets a numeric suffix, and
     tools/build.js walks the same list in the same order, so the
     indexes point at the right entry.                             */
  function uniqueAnchor(base, seen) {
    if (!seen[base]) { seen[base] = 1; return base; }
    seen[base] += 1;
    return base + "-" + seen[base];
  }

  function houseLine(e) {
    if (SAKE.lang === "en" && e.hr) return e.hr + ' <span class="t-jp">' + e.h + "</span>";
    return '<span class="t-jp">' + e.h + "</span>";
  }

  function brandHay(e) {
    var s2 = e.jp + " " + e.r + " " + (e.h || "") + " " + (e.hr || "") + " " +
             prefName(e.pref) + " " + (e.est || "") + " " + L(e.note || ""), i, p;
    if (e.p) for (i = 0; i < e.p.length; i++) {
      p = e.p[i];
      s2 += " " + p.jp + " " + (p.r || "") + " " + gradeName(p) + " " + L(p.d || "");
      if (p.rice) {
        var rr = (typeof p.rice === "string") ? [p.rice] : p.rice;
        for (var q2 = 0; q2 < rr.length; q2++) {
          s2 += " " + (RICE[rr[q2]] ? RICE[rr[q2]].jp + " " + RICE[rr[q2]].r : rr[q2]);
        }
      }
    }
    return s2.toLowerCase();
  }

  function renderBlocks(blocks, host) {
    if (!blocks) return;
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (!b) continue;
      var n = renderBlock(b);
      if (n) host.appendChild(n);
    }
  }

  function renderBlock(b) {
    var t = b.t;

    if (t === "h2" || t === "h3" || t === "h4") {
      var h = el(t, null,
        L(b.text) + (b.jp ? ' <span class="' + (t === "h2" ? "h2-jp" : "t-jp") + '">' + b.jp + "</span>" : ""));
      if (t === "h2") h.setAttribute("data-toc", "2");
      if (t === "h3") h.setAttribute("data-toc", "3");
      h.id = b.id || slug(b.text && b.text.en ? b.text.en : L(b.text));
      return h;
    }

    if (t === "p")     return el("p", null, L(b.text));
    if (t === "lede")  return el("p", { "class": "lede" }, L(b.text));
    if (t === "tiny")  return el("p", { "class": "tiny" }, L(b.text));
    if (t === "html")  { var d = el("div"); d.innerHTML = L(b.text); return d; }
    if (t === "hr")    return el("hr", { "class": "sep" });

    if (t === "ul" || t === "ol") {
      var list = el(t === "ul" ? "ul" : "ol", b.plain ? { "class": "plain" } : null);
      for (var j = 0; j < b.items.length; j++) list.appendChild(el("li", null, L(b.items[j])));
      return list;
    }

    if (t === "defs") {
      var dl = el("dl", { "class": "defs" });
      for (var d2 = 0; d2 < b.items.length; d2++) {
        var it = b.items[d2];
        dl.appendChild(el("dt", null,
          L(it.term) + (it.jp ? ' <span class="t-jp">' + it.jp + "</span>" : "") +
          (it.romaji ? ' <span class="romaji">' + it.romaji + "</span>" : "")));
        dl.appendChild(el("dd", null, L(it.def)));
      }
      return dl;
    }

    if (t === "table") {
      var wrap = el("div", { "class": "tablewrap", "data-hint": L(UI.scrollHint) });
      var tb = el("table");
      if (b.caption) tb.appendChild(el("caption", null, L(b.caption)));
      var thead = el("thead"), tr = el("tr");
      for (var c = 0; c < b.cols.length; c++) {
        tr.appendChild(el("th", (b.numCols && b.numCols.indexOf(c) >= 0) ? { "class": "num" } : null, L(b.cols[c])));
      }
      thead.appendChild(tr); tb.appendChild(thead);
      var tbody = el("tbody");
      for (var r = 0; r < b.rows.length; r++) {
        var row = el("tr");
        for (var q = 0; q < b.rows[r].length; q++) {
          var cls = [];
          if (q === 0 && b.keyCol !== false) cls.push("t-key");
          if (b.jpCols && b.jpCols.indexOf(q) >= 0) cls.push("t-jp");
          if (b.numCols && b.numCols.indexOf(q) >= 0) cls.push("num");
          row.appendChild(el("td", cls.length ? { "class": cls.join(" ") } : null, cellText(b.rows[r][q])));
        }
        tbody.appendChild(row);
      }
      tb.appendChild(tbody); wrap.appendChild(tb);
      return wrap;
    }

    if (t === "panel") {
      var p = el("div", { "class": "panel" + (b.tint ? " tint-" + b.tint : "") });
      if (b.title) p.appendChild(el("h4", null, L(b.title)));
      renderBlocks(b.body, p);
      return p;
    }

    if (t === "note") {
      return el("div", { "class": "note" },
        ((b.label || b.title) ? '<span class="note-label">' + L(b.label || b.title) + "</span>" : "") + L(b.text));
    }

    if (t === "quote") {
      return el("blockquote", null,
        L(b.text) + (b.cite ? "<cite>" + L(b.cite) + "</cite>" : ""));
    }

    if (t === "grid") {
      var g = el("div", { "class": "grid c" + (b.cols || 3) });
      for (var k = 0; k < b.cells.length; k++) {
        var cc = b.cells[k], cell = el("div", { "class": "cell" });
        if (cc.k) cell.appendChild(el("div", { "class": "cell-k" }, L(cc.k)));
        if (cc.v) cell.appendChild(el("div", { "class": "cell-v" }, L(cc.v)));
        if (cc.h) cell.appendChild(el("h4", null, L(cc.h) + (cc.jp ? ' <span class="t-jp">' + cc.jp + "</span>" : "")));
        if (cc.d) cell.appendChild(el("p", null, L(cc.d)));
        if (cc.body) renderBlocks(cc.body, cell);
        g.appendChild(cell);
      }
      return g;
    }

    if (t === "chips") {
      var ch = el("div", { "class": "chips" });
      for (var m = 0; m < b.items.length; m++) {
        var itm = b.items[m];
        ch.appendChild(el("span", { "class": "chip " + (itm.k || "") }, L(itm.text != null ? itm.text : itm)));
      }
      return ch;
    }

    if (t === "figure") {
      var f = el("figure", { id: "fig" + (++figSeq) });
      var fr = el("div", { "class": "figframe", "data-hint": L(UI.scrollHint) });
      fr.innerHTML = SAKE.themeSvg(typeof b.svg === "function" ? b.svg(SAKE.lang, L) : L(b.svg));
      f.appendChild(fr);
      if (b.caption) f.appendChild(el("figcaption", null, L(b.caption)));
      return f;
    }

    if (t === "timeline") {
      var tlw = el("div", { "class": "timeline" });
      for (var ti = 0; ti < b.items.length; ti++) {
        var iv = b.items[ti];
        var row2 = el("div", { "class": "tl-item" });
        var whn = el("div", { "class": "tl-when" });
        whn.appendChild(el("div", { "class": "tl-year" }, L(iv.year)));
        if (iv.era) whn.appendChild(el("div", { "class": "tl-era" },
          L(iv.era) + (iv.eraJp ? '<span class="t-jp">' + iv.eraJp + "</span>" : "")));
        row2.appendChild(whn);
        var bod = el("div", { "class": "tl-body" });
        if (iv.title) bod.appendChild(el("h4", null,
          L(iv.title) + (iv.jp ? ' <span class="t-jp">' + iv.jp + "</span>" : "")));
        if (iv.text) bod.appendChild(el("p", null, L(iv.text)));
        if (iv.body) renderBlocks(iv.body, bod);
        row2.appendChild(bod);
        tlw.appendChild(row2);
      }
      return tlw;
    }

    if (t === "steps") {
      var sw = el("div", { "class": "steps" });
      for (var si = 0; si < b.items.length; si++) {
        var sv = b.items[si];
        var st = el("div", { "class": "step" });
        st.appendChild(el("div", { "class": "step-n" }, sv.n != null ? String(sv.n) : String(si + 1)));
        var sb = el("div", { "class": "step-b" });
        sb.appendChild(el("h4", null,
          L(sv.title) + (sv.jp ? ' <span class="t-jp">' + sv.jp + "</span>" : "") +
          (sv.romaji ? ' <span class="romaji">' + sv.romaji + "</span>" : "")));
        if (sv.meta) sb.appendChild(el("p", { "class": "step-meta" }, L(sv.meta)));
        if (sv.text) sb.appendChild(el("p", null, L(sv.text)));
        if (sv.body) renderBlocks(sv.body, sb);
        st.appendChild(sb);
        sw.appendChild(st);
      }
      return sw;
    }

    if (t === "scale") {
      var sc = el("div", { "class": "scale" });
      if (b.title) sc.appendChild(el("div", { "class": "cell-k" }, L(b.title)));
      var bar = el("div", { "class": "scale-bar" });
      var acc = 0, tot = 0, k2;
      for (k2 = 0; k2 < b.segs.length; k2++) tot += (b.segs[k2].w || 1);
      for (k2 = 0; k2 < b.segs.length; k2++) {
        var sg = b.segs[k2], wpc = (sg.w || 1) / tot * 100;
        var seg = el("div", { "class": "scale-seg", style: "left:" + acc + "%;width:" + wpc + "%;background:" + (sg.fill || "transparent") });
        seg.appendChild(el("span", { "class": "scale-lab" }, L(sg.label)));
        bar.appendChild(seg);
        acc += wpc;
      }
      sc.appendChild(bar);
      var lg = el("div", { "class": "scale-legend" });
      for (k2 = 0; k2 < b.segs.length; k2++) {
        var sg2 = b.segs[k2];
        var lgi = el("span", { "class": "scale-lgi" });
        lgi.appendChild(el("i", { style: "background:" + (sg2.fill || "transparent") }));
        lgi.appendChild(document.createTextNode(L(sg2.label)));
        lg.appendChild(lgi);
      }
      sc.appendChild(lg);
      if (b.ticks) {
        var tk = el("div", { "class": "scale-ticks" });
        for (k2 = 0; k2 < b.ticks.length; k2++) tk.appendChild(el("span", null, L(b.ticks[k2])));
        sc.appendChild(tk);
      }
      if (b.note) sc.appendChild(el("div", { "class": "scale-note" }, L(b.note)));
      return sc;
    }

    if (t === "figindex") {
      var fx = el("div", { "class": "figindex" });
      var list = SAKE.FIGINDEX || [], gi3, cur = null, box = null;
      for (gi3 = 0; gi3 < list.length; gi3++) {
        var e2 = list[gi3];
        if (e2.p !== cur) {
          cur = e2.p;
          box = el("div", { "class": "figindex-group" });
          var nv = navItem(cur + ".html");
          box.appendChild(el("div", { "class": "figindex-page" },
            '<a href="' + cur + '.html">' + (nv ? L(nv.label) : cur) + "</a>" +
            (nv && nv.jp ? ' <span class="t-jp rel-jp">' + nv.jp + "</span>" : "")));
          fx.appendChild(box);
        }
        var li3 = el("div", { "class": "figindex-item" });
        li3.innerHTML = '<a href="' + e2.p + ".html#fig" + e2.n + '">' + L(e2.c) + "</a>";
        box.appendChild(li3);
      }
      rewriteLinks(fx);
      return fx;
    }

    if (t === "related") {
      var rw = el("div", { "class": "related" });
      rw.appendChild(el("div", { "class": "related-h" },
        L(b.title || { en: "Where to go next", ja: "次に読むなら", zh: "接下來讀什麼" })));
      var rl = el("ul", { "class": "related-list" });
      for (var ri = 0; ri < (b.items || []).length; ri++) {
        var rit = b.items[ri], rnav = navItem(rit.href), rli = el("li");
        rli.innerHTML = '<a href="' + rit.href + '">' + (rnav ? L(rnav.label) : rit.href) + "</a>" +
          (rnav && rnav.jp ? ' <span class="t-jp rel-jp">' + rnav.jp + "</span>" : "") +
          '<span class="rel-why">' + L(rit.why) + "</span>";
        rl.appendChild(rli);
      }
      rw.appendChild(rl);
      rewriteLinks(rw);
      return rw;
    }

    if (t === "sitemap") {
      var smw = el("div", { "class": "grid c" + (b.cols || 2) });
      for (var gi2 = 0; gi2 < SAKE.NAV.length; gi2++) {
        var grp = SAKE.NAV[gi2], gcell = el("div", { "class": "cell" });
        gcell.appendChild(el("div", { "class": "cell-k" }, L(grp.group)));
        var ul2 = el("ul", { "class": "plain" });
        for (var gj = 0; gj < grp.items.length; gj++) {
          var itm2 = grp.items[gj];
          var li2 = el("li");
          li2.innerHTML = '<a href="' + itm2.href + '">' + L(itm2.label) + "</a>" +
            (itm2.jp ? ' <span class="t-jp" style="font-size:11.5px;color:var(--ink-4)">' + itm2.jp + "</span>" : "");
          ul2.appendChild(li2);
        }
        gcell.appendChild(ul2);
        smw.appendChild(gcell);
      }
      var ncols = (b.cols || 2);
      while (smw.children.length % ncols !== 0) smw.appendChild(el("div", { "class": "cell" }));
      rewriteLinks(smw);
      return smw;
    }

    if (t === "compare") {
      var cw = el("div", { "class": "compare", style: "grid-template-columns:repeat(" + (b.cols || b.items.length) + ",minmax(0,1fr))" });
      for (var ci = 0; ci < b.items.length; ci++) {
        var cv = b.items[ci], cb2 = el("div");
        cb2.appendChild(el("h4", null, L(cv.title) + (cv.jp ? ' <span class="t-jp">' + cv.jp + "</span>" : "")));
        if (cv.text) cb2.appendChild(el("p", null, L(cv.text)));
        if (cv.body) renderBlocks(cv.body, cb2);
        cw.appendChild(cb2);
      }
      return cw;
    }

    if (t === "glossary") {
      var gw = el("div");
      var filt = el("div", { "class": "gloss-filter" });
      var inp = el("input", { type: "search", "aria-label": "filter" });
      inp.setAttribute("placeholder", L(b.placeholder || { en: "Filter terms…", ja: "用語を絞り込む…", zh: "篩選詞彙…" }));
      var cnt = el("span", { "class": "gloss-count" });
      filt.appendChild(inp); filt.appendChild(cnt);
      gw.appendChild(filt);
      var list = el("div", { "class": "gloss-list" });
      var rows = [];
      for (var gi = 0; gi < b.items.length; gi++) {
        var g = b.items[gi];
        var r2 = el("div", { "class": "gloss-row" });
        r2.appendChild(el("div", { "class": "gloss-term" },
          '<span class="g-r">' + L(g.r) + "</span>" +
          (g.jp ? '<span class="g-j">' + g.jp + "</span>" : "") +
          (g.cat ? '<span class="gloss-cat">' + L(g.cat) + "</span>" : "")));
        r2.appendChild(el("div", { "class": "gloss-def" }, L(g.d)));
        list.appendChild(r2);
        rows.push({ node: r2, hay: (L(g.r) + " " + (g.jp || "") + " " + L(g.d) + " " + L(g.cat || "")).toLowerCase() });
      }
      gw.appendChild(list);
      var apply = function () {
        var q = inp.value.trim().toLowerCase(), n = 0;
        for (var i2 = 0; i2 < rows.length; i2++) {
          var ok = !q || rows[i2].hay.indexOf(q) >= 0;
          rows[i2].node.style.display = ok ? "" : "none";
          if (ok) n++;
        }
        cnt.textContent = n + " / " + rows.length;
      };
      inp.addEventListener("input", apply);
      apply();
      return gw;
    }

    if (t === "brands") {
      var bw = el("div", { "class": "brands" });
      var bEnt = [], bGrp = [], gIdx = -1, binp = null, bcnt = null, bSeen = {};

      if (b.filter !== false) {
        var bf = el("div", { "class": "gloss-filter" });
        binp = el("input", { type: "search", "aria-label": "filter" });
        binp.setAttribute("placeholder", L(b.placeholder || UI.brandFilter));
        bcnt = el("span", { "class": "gloss-count" });
        bf.appendChild(binp); bf.appendChild(bcnt);
        bw.appendChild(bf);
      }

      var blist = el("div", { "class": "brandlist" });
      for (var bi = 0; bi < b.items.length; bi++) {
        var e = b.items[bi];
        if (!e) continue;

        if (e.group) {
          /* In Japanese the label and the kanji gloss are the same
             string; printing both would just repeat it.            */
          var glab = L(e.group);
          var gh = el("h3", { "class": "brandgroup" },
            glab + ((e.jp && e.jp !== glab) ? ' <span class="t-jp">' + e.jp + "</span>" : ""));
          gh.setAttribute("data-toc", "3");
          gh.id = e.id || slug(L(e.group));
          blist.appendChild(gh);
          bGrp.push({ node: gh });
          gIdx = bGrp.length - 1;
          continue;
        }

        var brow = el("div", { "class": "kura" });
        brow.id = uniqueAnchor(brandAnchor(e), bSeen);
        var idc = el("div", { "class": "kura-id" });
        idc.appendChild(el("div", { "class": "bn" },
          '<span class="bn-j">' + e.jp + '</span> <span class="bn-r">' + e.r + "</span>"));
        idc.appendChild(el("div", { "class": "bh" }, houseLine(e)));
        idc.appendChild(el("div", { "class": "bm" },
          "<span>" + prefName(e.pref) + "</span>" +
          '<span class="best num">' + (e.est ? e.est : "—") + "</span>"));
        brow.appendChild(idc);

        var bbody = el("div", { "class": "kura-body" });
        if (e.note) bbody.appendChild(el("p", { "class": "bnote" }, L(e.note)));
        if (e.p && e.p.length) {
          var pl = el("ul", { "class": "bprods" });
          for (var pi = 0; pi < e.p.length; pi++) {
            var pr = e.p[pi];
            pl.appendChild(el("li", null,
              '<span class="bp-n">' + pr.jp +
                (pr.r ? ' <i class="bp-r">' + pr.r + "</i>" : "") + "</span>" +
              '<span class="bp-s">' + specLine(pr) + "</span>" +
              (pr.d ? '<span class="bp-d">' + L(pr.d) + "</span>" : "")));
          }
          bbody.appendChild(pl);
        }
        brow.appendChild(bbody);
        blist.appendChild(brow);
        bEnt.push({ node: brow, g: gIdx, hay: brandHay(e) });
      }
      bw.appendChild(blist);

      if (binp) {
        var bapply = function () {
          var q = binp.value.trim().toLowerCase(), n = 0, i3, counts = [];
          for (i3 = 0; i3 < bGrp.length; i3++) counts[i3] = 0;
          for (i3 = 0; i3 < bEnt.length; i3++) {
            var ok = !q || bEnt[i3].hay.indexOf(q) >= 0;
            bEnt[i3].node.style.display = ok ? "" : "none";
            if (ok) { n++; if (bEnt[i3].g >= 0) counts[bEnt[i3].g]++; }
          }
          for (i3 = 0; i3 < bGrp.length; i3++) {
            bGrp[i3].node.style.display = counts[i3] ? "" : "none";
          }
          bcnt.textContent = n + " / " + bEnt.length;
          if (SAKE.syncScrollbars) SAKE.syncScrollbars();
        };
        binp.addEventListener("input", bapply);
        bapply();
      }
      return bw;
    }

    if (t === "methodindex") {
      var mw = el("div", { "class": "riceidx" });
      var mdata = SAKE.METHODINDEX || [];
      for (var mi = 0; mi < mdata.length; mi++) {
        var mr = mdata[mi];
        var mrow = el("div", { "class": "riceidx-row" });
        var mv = GMOD[mr.k] || { en: mr.k, ja: mr.k, zh: mr.k };
        mrow.appendChild(el("div", { "class": "ri-k" },
          '<span class="ri-j">' + (mv.ja || mr.k) + "</span>" +
          '<span class="ri-r">' + mv.en + "</span>" +
          '<span class="ri-n num">' + mr.b.length + "</span>"));
        var mn = [];
        for (var mb = 0; mb < mr.b.length; mb++) {
          mn.push('<a href="directory.html#' + mr.b[mb].id + '">' + mr.b[mb].jp + "</a>");
        }
        mrow.appendChild(el("div", { "class": "ri-b" }, mn.join('<span class="ri-sep">·</span>')));
        mw.appendChild(mrow);
      }
      rewriteLinks(mw);
      return mw;
    }

    if (t === "prefindex") {
      var pw = el("div", { "class": "riceidx" });
      var pdata = SAKE.PREFINDEX || [];
      for (var pi2 = 0; pi2 < pdata.length; pi2++) {
        var pr2 = pdata[pi2];
        var prow = el("div", { "class": "riceidx-row" });
        var pv = PREF[pr2.k];
        var plabel = pv ? L(pv) : pr2.k;
        prow.appendChild(el("div", { "class": "ri-k" },
          '<span class="ri-j">' + plabel + "</span>" +
          ((SAKE.lang === "en" && pv) ? '<span class="ri-r">' + pv.ja + "</span>" : "") +
          '<span class="ri-n num">' + pr2.b.length + "</span>"));
        var pn = [];
        for (var pb = 0; pb < pr2.b.length; pb++) {
          pn.push('<a href="directory.html#' + pr2.b[pb].id + '">' + pr2.b[pb].jp + "</a>");
        }
        prow.appendChild(el("div", { "class": "ri-b" }, pn.join('<span class="ri-sep">·</span>')));
        pw.appendChild(prow);
      }
      rewriteLinks(pw);
      return pw;
    }

    if (t === "riceindex") {
      var rw2 = el("div", { "class": "riceidx" });
      var data = SAKE.RICEINDEX || [];
      var min = b.min || 1;
      for (var ri = 0; ri < data.length; ri++) {
        var rr2 = data[ri];
        if (rr2.b.length < min) continue;
        var row2 = el("div", { "class": "riceidx-row" });
        var v = RICE[rr2.k];
        row2.appendChild(el("div", { "class": "ri-k" },
          '<span class="ri-j">' + (v ? v.jp : rr2.k) + "</span>" +
          '<span class="ri-r">' + (v ? v.r : "") + "</span>" +
          '<span class="ri-n num">' + rr2.b.length + "</span>"));
        var names = [];
        for (var bi2 = 0; bi2 < rr2.b.length; bi2++) {
          var bb = rr2.b[bi2];
          names.push('<a href="directory.html#' + bb.id + '">' + bb.jp + "</a>");
        }
        row2.appendChild(el("div", { "class": "ri-b" }, names.join('<span class="ri-sep">·</span>')));
        rw2.appendChild(row2);
      }
      rewriteLinks(rw2);
      return rw2;
    }

    if (t === "section") {
      var s = el("section", { "class": "block", id: b.id || slug(L(b.title)) });
      if (b.title) {
        var h2 = el("h2", null, L(b.title) + (b.jp ? ' <span class="h2-jp">' + b.jp + "</span>" : ""));
        h2.setAttribute("data-toc", "2");
        h2.id = (b.id || slug(L(b.title))) + "-h";
        s.appendChild(h2);
      }
      renderBlocks(b.body, s);
      return s;
    }

    return null;
  }
  SAKE.renderBlocks = renderBlocks;

  /* ---------------------------------------------------------- */
  /* Navigation model                                           */
  /* ---------------------------------------------------------- */
  SAKE.NAV = [
    {
      group: { en: "Foundations", ja: "基礎", zh: "基礎" },
      items: [
        { href: "index.html",          jp: "概観",     label: { en: "Overview",            ja: "概観",           zh: "總覽" } },
        { href: "start.html",          jp: "始め方",   label: { en: "Where to Start",      ja: "始め方",         zh: "從何開始" } },
        { href: "myths.html",          jp: "誤解",     label: { en: "What People Get Wrong", ja: "よく誤解されること", zh: "常見的誤解" } },
        { href: "history.html",        jp: "歴史",     label: { en: "History",             ja: "歴史",           zh: "歷史" } },
        { href: "people.html",         jp: "人物",     label: { en: "People",              ja: "人物",           zh: "人物" } },
        { href: "women.html",          jp: "女性と酒", label: { en: "Women and Sake",      ja: "女性と日本酒",   zh: "女性與日本酒" } },
        { href: "culture.html",        jp: "文化",     label: { en: "Culture & Ritual",    ja: "文化と儀礼",     zh: "文化與儀禮" } },
        { href: "shinto.html",         jp: "神事と酒",  label: { en: "Sake and the Gods",   ja: "神と酒",         zh: "神與酒" } },
        { href: "poetry.html",         jp: "詩と酒",    label: { en: "Sake in Poetry",      ja: "詩歌のなかの酒", zh: "詩歌中的酒" } },
        { href: "words.html",          jp: "酒の言葉",  label: { en: "The Words Around the Cup", ja: "杯をめぐる言葉", zh: "圍繞著杯的語言" } },
        { href: "translation.html",    jp: "訳",       label: { en: "Words That Do Not Translate", ja: "訳せない語", zh: "翻譯不過去的詞" } },
        { href: "media.html",          jp: "映像と漫画", label: { en: "On Screen and Page", ja: "画と頁のなかの酒", zh: "銀幕與紙頁上的酒" } },
        { href: "compare.html",        jp: "他の酒と",  label: { en: "Sake & Other Drinks", ja: "他の酒との比較", zh: "與其他酒的比較" } }
      ]
    },
    {
      group: { en: "Making", ja: "造り", zh: "釀造" },
      items: [
        { href: "ingredients.html",    jp: "原料",     label: { en: "Rice & Water",        ja: "米と水",         zh: "米與水" } },
        { href: "rice.html",           jp: "酒米",     label: { en: "Sake Rice",           ja: "酒米",           zh: "酒米" } },
        { href: "milling.html",       jp: "精米",     label: { en: "Polishing the Grain", ja: "精米",           zh: "精米" } },
        { href: "ricepolicy.html",     jp: "米政策と酒", label: { en: "The Politics of the Grain", ja: "米をめぐる政治", zh: "稻米的政治" } },
        { href: "water.html",          jp: "水",       label: { en: "Water",               ja: "水",             zh: "水" } },
        { href: "koji.html",           jp: "麹",       label: { en: "Kōji",                ja: "麹",             zh: "麴" } },
        { href: "yeast.html",          jp: "酵母",     label: { en: "Yeast",               ja: "酵母",           zh: "酵母" } },
        { href: "process.html",        jp: "製造工程", label: { en: "Brewing Process",     ja: "製造工程",       zh: "釀造流程" } },
        { href: "starters.html",       jp: "酒母",     label: { en: "Starter Methods",     ja: "酒母の型",       zh: "酒母工法" } },
        { href: "pressing.html",       jp: "上槽・調整", label: { en: "Pressing & Finishing", ja: "上槽と調整",   zh: "上槽與調整" } },
        { href: "equipment.html",      jp: "蔵と道具", label: { en: "The Kura & Its Tools", ja: "蔵と道具",       zh: "酒藏與器具" } },
        { href: "toji.html",           jp: "杜氏",     label: { en: "Tōji & the Crew",     ja: "杜氏と蔵人",     zh: "杜氏與藏人" } },
        { href: "calendar.html",       jp: "酒造の一年", label: { en: "The Brewing Year",  ja: "酒造の一年",     zh: "釀造的一年" } },
        { href: "batch.html",          jp: "仕込み配合", label: { en: "Arithmetic of a Batch", ja: "一仕込みの算術", zh: "一次仕込的算術" } },
        { href: "microbes.html",       jp: "微生物",   label: { en: "The Microbial Cast",  ja: "微生物の顔ぶれ", zh: "微生物的角色群" } }
      ]
    },
    {
      group: { en: "Understanding", ja: "理解", zh: "理解" },
      items: [
        { href: "classification.html", jp: "分類",     label: { en: "Categories & Law",    ja: "分類と法令",     zh: "分類與法規" } },
        { href: "label.html",          jp: "表示",     label: { en: "Reading a Label",     ja: "表示の読み方",   zh: "酒標判讀" } },
        { href: "design.html",         jp: "意匠",     label: { en: "The Look of a Bottle", ja: "一本の意匠",   zh: "一瓶的意匠" } },
        { href: "styles.html",         jp: "酒質",     label: { en: "Styles & Types",      ja: "酒質と種類",     zh: "酒質與種類" } },
        { href: "numbers.html",        jp: "数値",     label: { en: "Numbers & Chemistry", ja: "成分と数値",     zh: "成分與數值" } },
        { href: "taste.html",          jp: "味の科学", label: { en: "Chemistry of Flavour",ja: "味の科学",       zh: "風味的化學" } },
        { href: "standards.html",      jp: "法令",     label: { en: "Law & Standards",     ja: "法令と基準",     zh: "法規與標準" } },
        { href: "fakes.html",          jp: "偽装",     label: { en: "How Sake Has Been Faked", ja: "偽られてきた酒", zh: "被偽造的酒" } },
        { href: "aging.html",          jp: "熟成酒",   label: { en: "Aged Sake",           ja: "熟成酒",         zh: "熟成酒" } },
        { href: "sparkling.html",      jp: "発泡",     label: { en: "Sparkling Sake",      ja: "発泡清酒",       zh: "氣泡清酒" } },
        { href: "packaging.html",      jp: "容器と包装", label: { en: "Bottles, Cans & Barrels", ja: "瓶・缶・樽",  zh: "瓶、罐與樽" } },
        { href: "kanji.html",          jp: "漢字",     label: { en: "The Characters",      ja: "瓶の上の漢字",   zh: "瓶身上的漢字" } },
        { href: "sustainability.html", jp: "環境と資源", label: { en: "The Footprint",       ja: "酒の足あと",     zh: "清酒的足跡" } },
        { href: "faults.html",         jp: "劣化と欠点", label: { en: "When Sake Goes Wrong", ja: "酒が傷むとき",   zh: "當清酒走壞時" } },
        { href: "homebrew.html",       jp: "自家醸造と法", label: { en: "Making Your Own",   ja: "自分で造ること", zh: "自己動手釀" } }
      ]
    },
    {
      group: { en: "Place", ja: "産地", zh: "產地" },
      items: [
        { href: "terroir.html",        jp: "風土",     label: { en: "Terroir",             ja: "風土",           zh: "風土" } },
        { href: "regions.html",        jp: "産地",     label: { en: "Regions A–Z",         ja: "産地一覧",       zh: "產地一覽" } },
        { href: "region-north.html",   jp: "北日本",   label: { en: "The North",           ja: "北日本",         zh: "北日本" } },
        { href: "region-central.html", jp: "関東・甲信越", label: { en: "Kantō & the Snow Country", ja: "関東と雪国", zh: "關東與雪國" } },
        { href: "region-hokuriku.html", jp: "北陸・東海", label: { en: "Hokuriku & Tōkai",   ja: "北陸と東海",     zh: "北陸與東海" } },
        { href: "region-kinki.html",   jp: "近畿",     label: { en: "Kinki — the Old Heartland", ja: "近畿——古い中心", zh: "近畿——古老的核心" } },
        { href: "region-west.html",    jp: "中国・四国", label: { en: "Chūgoku & Shikoku",  ja: "中国と四国",     zh: "中國地方與四國" } },
        { href: "region-kyushu.html",  jp: "九州・沖縄", label: { en: "Kyūshū & Okinawa",   ja: "九州と沖縄",     zh: "九州與沖繩" } },
        { href: "gi.html",             jp: "地理的表示", label: { en: "Geographical Indications", ja: "地理的表示", zh: "地理標示" } },
        { href: "breweries.html",      jp: "蔵元",     label: { en: "Breweries",           ja: "蔵元",           zh: "酒藏" } },
        { href: "brands.html",         jp: "銘柄",     label: { en: "Brands & Houses",     ja: "銘柄と蔵元",     zh: "品牌與酒藏" } },
        { href: "directory.html",      jp: "名鑑",     label: { en: "A Directory of Brands", ja: "銘柄名鑑",     zh: "品牌名鑑" } }
      ]
    },
    {
      group: { en: "Drinking", ja: "飲む", zh: "品飲" },
      items: [
        { href: "tasting.html",        jp: "利き酒",   label: { en: "Tasting",             ja: "利き酒",         zh: "品評" } },
        { href: "curriculum.html",     jp: "十二本",   label: { en: "Twelve Bottles",      ja: "十二本",         zh: "十二瓶" } },
        { href: "serving.html",        jp: "温度と器", label: { en: "Temperature & Vessels", ja: "温度と器",     zh: "溫度與酒器" } },
        { href: "vessels.html",        jp: "酒器",     label: { en: "Cups & Vessels",      ja: "酒器",           zh: "酒器" } },
        { href: "pairing.html",        jp: "料理との相性", label: { en: "Food Pairing",    ja: "料理との相性",   zh: "餐酒搭配" } },
        { href: "storage.html",        jp: "保存",     label: { en: "Buying & Storage",    ja: "購入と保存",     zh: "選購與保存" } },
        { href: "range.html",          jp: "品揃え",   label: { en: "Reading a Brewery's Range", ja: "蔵の品揃えを読む", zh: "讀懂酒藏的產品線" } },
        { href: "value.html",          jp: "値段と中身", label: { en: "What Money Buys",   ja: "値が買うもの",   zh: "錢買到的是什麼" } },
        { href: "cocktails.html",      jp: "割る・料理", label: { en: "Mixing & Cooking",  ja: "割る・料理する", zh: "調飲與入菜" } },
        { href: "kanpai.html",         jp: "乾杯の作法", label: { en: "Drinking Together",   ja: "共に飲むこと",   zh: "一起喝酒這件事" } },
        { href: "places.html",        jp: "酒場の種類", label: { en: "The Places You Drink It", ja: "酒を飲む場所",   zh: "喝酒的地方" } },
        { href: "service.html",       jp: "店で出す",  label: { en: "Serving It Professionally", ja: "商いとして供する", zh: "作為專業的供酒" } },
        { href: "itineraries.html",   jp: "酒の旅",    label: { en: "Five Journeys",       ja: "五つの旅",       zh: "五段旅程" } },
        { href: "visiting.html",       jp: "蔵を訪ねる", label: { en: "Visiting & Buying", ja: "蔵を訪ねる",     zh: "訪藏與選購" } },
        { href: "health.html",         jp: "酒と身体", label: { en: "Alcohol & the Body",  ja: "酒と身体",       zh: "酒與身體" } }
      ]
    },
    {
      group: { en: "Wider world", ja: "周辺", zh: "周邊" },
      items: [
        { href: "kojifamily.html",     jp: "麹の一族", label: { en: "The Kōji Family",     ja: "麹の一族",       zh: "麴的家族" } },
        { href: "shochu.html",         jp: "焼酎と泡盛", label: { en: "Shōchū & Awamori", ja: "焼酎と泡盛",   zh: "燒酎與泡盛" } },
        { href: "kasu.html",           jp: "酒粕",     label: { en: "Sake Lees",           ja: "酒粕",           zh: "酒粕" } },
        { href: "mirin.html",          jp: "調味料と酒", label: { en: "Mirin & Cooking Alcohols", ja: "みりんと料理の酒", zh: "味醂與料理用酒" } },
        { href: "world.html",          jp: "世界の酒造り", label: { en: "Sake Beyond Japan", ja: "世界の酒造り", zh: "日本以外的釀造" } },
        { href: "taiwan.html",         jp: "台湾",     label: { en: "Sake in Taiwan",      ja: "台湾と日本酒",   zh: "台灣與日本酒" } },
        { href: "competitions.html",   jp: "鑑評会",   label: { en: "Competitions",        ja: "鑑評会",         zh: "鑑評會" } }
      ]
    },
    {
      group: { en: "Reference", ja: "資料", zh: "資料" },
      items: [
        { href: "industry.html",       jp: "産業",     label: { en: "Industry & Trade",    ja: "産業と流通",     zh: "產業與貿易" } },
        { href: "future.html",         jp: "これから", label: { en: "The Next Twenty Years", ja: "これからの二十年", zh: "未來二十年" } },
        { href: "debates.html",        jp: "論争",     label: { en: "Where People Disagree", ja: "論の分かれるところ", zh: "意見分歧之處" } },
        { href: "learning.html",       jp: "修学",     label: { en: "How People Learn It", ja: "人はいかに学ぶか", zh: "人們如何學會它" } },
        { href: "chronology.html",     jp: "年表",     label: { en: "The Whole Chronology", ja: "総年表",        zh: "總年表" } },
        { href: "tables.html",         jp: "早見表",   label: { en: "Reference Tables",    ja: "早見表",         zh: "速查表" } },
        { href: "faq.html",            jp: "問答",     label: { en: "Questions & Answers", ja: "よくある問い",   zh: "常見問答" } },
        { href: "glossary.html",       jp: "用語集",   label: { en: "Glossary",            ja: "用語集",         zh: "詞彙表" } },
        { href: "figures.html",        jp: "図版一覧", label: { en: "Every Diagram",        ja: "図版一覧",       zh: "圖表總覽" } },
        { href: "sources.html",        jp: "出典",     label: { en: "Sources",             ja: "出典",           zh: "資料來源" } }
      ]
    }
  ];

  SAKE.flatNav = function () {
    var out = [];
    for (var i = 0; i < SAKE.NAV.length; i++)
      for (var j = 0; j < SAKE.NAV[i].items.length; j++) out.push(SAKE.NAV[i].items[j]);
    return out;
  };

  /* ---------------------------------------------------------- */
  /* Chrome: topbar, rail, footer, pager                        */
  /* ---------------------------------------------------------- */
  /* The edition this build is. tools/build.js stamps the same
     string into bundle.html, and the colophon shows it, so a file
     found on its own can still say which version it is.          */
  SAKE.EDITION = "0.0.0.1";
  SAKE.BUILT   = "2026-09-19";

  var SITE = SAKE.SITE = {
    name:  { en: "The Book of Sake", ja: "酒の書", zh: "酒之書" },
    mark:  { en: "The Book of Sake", ja: "酒の書", zh: "酒之書" },
    jp:    "酒の書"
  };

  var UI = SAKE.UI = {
    tagline:  { en: "A study of Japanese sake", ja: "日本酒の総合知識", zh: "日本酒的綜合知識" },
    menu:     { en: "Menu", ja: "メニュー", zh: "選單" },
    appearance:{ en: "Appearance", ja: "表示", zh: "顯示" },
    light:    { en: "Light", ja: "明るい", zh: "亮色" },
    dark:     { en: "Dark", ja: "暗い", zh: "暗色" },
    scrollHint:{ en: "Scroll sideways to see all of it", ja: "横にスクロールすると全体が見えます", zh: "左右滑動可看到全部" },
    brandFilter:{ en: "Filter by brand, house, prefecture or rice…", ja: "銘柄・蔵元・県・米で絞り込む…", zh: "以品牌、酒藏、縣或米種篩選…" },
    colophon: { en: "Colophon", ja: "奥付", zh: "版權" },
    closeMenu:{ en: "Close menu", ja: "メニューを閉じる", zh: "關閉選單" },
    language: { en: "Language", ja: "言語", zh: "語言" },
    sections: { en: "Sections", ja: "目次", zh: "章節" },
    contents: { en: "On this page", ja: "目次", zh: "本頁目次" },
    search:   { en: "Search  /", ja: "検索  /", zh: "搜尋  /" },
    noHits:   { en: "No matches.", ja: "該当なし。", zh: "沒有相符項目。" },
    prev:     { en: "Previous", ja: "前へ", zh: "上一頁" },
    next:     { en: "Next", ja: "次へ", zh: "下一頁" },
    footNote: {
      en: "An independent reference. Compiled from public sources — see Sources.",
      ja: "独立した参考資料。公開情報に基づく。出典を参照。",
      zh: "獨立參考資料。依據公開資訊編纂，請參見資料來源。"
    },
    drink: {
      en: "Please drink responsibly. Alcohol is for adults of legal drinking age.",
      ja: "適量を守ってお楽しみください。飲酒は法定年齢に達した成人に限ります。",
      zh: "請適量飲酒。飲酒僅限法定年齡以上之成人。"
    }
  };

  /* ---------------------------------------------------------- */
  /* Cross-page search                                          */
  /* ---------------------------------------------------------- */
  var KINDLABEL = {
    page:    { en: "page",    ja: "頁",   zh: "頁" },
    section: { en: "section", ja: "節",   zh: "節" },
    heading: { en: "section", ja: "節",   zh: "節" },
    term:    { en: "term",    ja: "語",   zh: "詞" },
    brand:   { en: "brand",   ja: "銘柄", zh: "品牌" },
    row:     { en: "entry",   ja: "項",   zh: "項" }
  };
  var KINDRANK = { page: 0, section: 1, heading: 1, brand: 2, term: 2, row: 3 };

  function pageLabel(key) {
    var flat = SAKE.flatNav();
    for (var i = 0; i < flat.length; i++) {
      if (flat[i].href === key + ".html") return L(flat[i].label);
    }
    return key;
  }

  function searchIndex(q) {
    var idx = SAKE.searchIndex || [];
    q = q.trim().toLowerCase();
    if (!q) return [];
    var out = [];
    for (var i = 0; i < idx.length; i++) {
      var e = idx[i];
      var label = (e.t[SAKE.lang] || e.t.en || "");
      var hay = (label + " " + (e.t.en || "") + " " + (e.j || "")).toLowerCase();
      var pos = hay.indexOf(q);
      if (pos < 0) continue;
      var score = (label.toLowerCase().indexOf(q) === 0 ? 0 : (pos === 0 ? 1 : 2)) * 10
                + (KINDRANK[e.k] == null ? 4 : KINDRANK[e.k]);
      out.push({ e: e, label: label, score: score });
    }
    out.sort(function (a, b) { return a.score - b.score || a.label.length - b.label.length; });
    return out.slice(0, 40);
  }

  function buildSearch() {
    var wrap = el("div", { "class": "searchwrap" });
    var inp = el("input", { type: "search", "class": "searchbox", "aria-label": L(UI.search), autocomplete: "off", spellcheck: "false" });
    inp.setAttribute("placeholder", L(UI.search));
    var panel = el("div", { "class": "results", hidden: "hidden" });
    wrap.appendChild(inp);
    wrap.appendChild(panel);

    var hits = [], sel = -1;

    function close() { panel.hidden = true; sel = -1; }

    function draw() {
      panel.innerHTML = "";
      if (!hits.length) {
        panel.appendChild(el("div", { "class": "r-empty" }, L(UI.noHits)));
        panel.hidden = false;
        return;
      }
      for (var i = 0; i < hits.length; i++) {
        var h = hits[i], e = h.e;
        var href = SAKE.href(e.p, e.a);
        var a = el("a", { href: href, "data-i": String(i) },
          '<span class="r-t">' + h.label +
          (e.j ? '<span class="r-j">' + e.j + "</span>" : "") + "</span>" +
          '<span class="r-p">' + pageLabel(e.p) + " · " + L(KINDLABEL[e.k] || KINDLABEL.row) + "</span>");
        panel.appendChild(a);
      }
      panel.hidden = false;
      mark();
    }

    function mark() {
      var links = panel.querySelectorAll("a");
      for (var i = 0; i < links.length; i++) links[i].classList.toggle("sel", i === sel);
      if (sel >= 0 && links[sel] && links[sel].scrollIntoView) links[sel].scrollIntoView({ block: "nearest" });
    }

    inp.addEventListener("input", function () {
      if (!inp.value.trim()) { close(); return; }
      hits = searchIndex(inp.value);
      sel = hits.length ? 0 : -1;
      draw();
    });

    inp.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { inp.value = ""; close(); inp.blur(); return; }
      if (panel.hidden || !hits.length) return;
      if (ev.key === "ArrowDown") { ev.preventDefault(); sel = (sel + 1) % hits.length; mark(); }
      else if (ev.key === "ArrowUp") { ev.preventDefault(); sel = (sel - 1 + hits.length) % hits.length; mark(); }
      else if (ev.key === "Enter") {
        ev.preventDefault();
        var links = panel.querySelectorAll("a");
        if (links[sel]) { close(); inp.blur(); global.location.href = links[sel].getAttribute("href"); }
      }
    });

    inp.addEventListener("blur", function () { setTimeout(close, 160); });
    inp.addEventListener("focus", function () { if (inp.value.trim()) { hits = searchIndex(inp.value); draw(); } });

    return wrap;
  }

  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "/" || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    var t = ev.target, tag = t && t.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || (t && t.isContentEditable)) return;
    var box = document.querySelector(".searchbox");
    if (box) { ev.preventDefault(); box.focus(); }
  });

  var ICON_MENU  = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M1 3.5h14M1 8h14M1 12.5h14"/></svg>';
  var ICON_CLOSE = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/></svg>';

  function buildTopbar() {
    var bar = document.querySelector(".topbar-in");
    if (!bar) return;
    bar.innerHTML = "";

    bar.appendChild(el("a", { "class": "brand", href: SAKE.href("index", "") },
      '<span class="brand-masu" aria-hidden="true"></span>' +
      '<span class="brand-mark">' + L(SITE.mark) + '</span>' +
      (SAKE.lang === "en" ? '<span class="brand-jp">' + SITE.jp + '</span>' : '')));

    bar.appendChild(buildSearch());

    var tog = el("button", {
      "class": "iconbtn menubtn", type: "button",
      "aria-label": L(UI.menu), "aria-expanded": "false", "aria-controls": "sidemenu"
    }, ICON_MENU);
    tog.addEventListener("click", function () { toggleMenu(); });
    bar.appendChild(tog);
  }

  /* ---------------------------------------------------------- */
  /* Side menu — language switch and the full section index      */
  /* ---------------------------------------------------------- */
  function buildSideMenu() {
    var host = document.querySelector(".sidemenu");
    if (!host) {
      host = el("aside", { "class": "sidemenu", id: "sidemenu", "aria-label": L(UI.menu) });
      document.body.appendChild(host);
    }
    host.innerHTML = "";

    var lang = el("div", { "class": "menu-group" });
    lang.appendChild(el("h5", null, L(UI.language)));
    var names = { en: "English", ja: "日本語", zh: "繁體中文" };
    var sub   = { en: "EN", ja: "JA", zh: "ZH-TW" };
    SAKE.LANGS.forEach(function (code) {
      var b = el("button", {
        type: "button", "class": "langrow" + (code === SAKE.lang ? " is-on" : ""),
        "aria-pressed": String(code === SAKE.lang), "data-lang": code
      }, '<span class="langrow-n">' + names[code] + '</span><span class="langrow-c">' + sub[code] + "</span>");
      b.addEventListener("click", function () { SAKE.setLang(code); });
      lang.appendChild(b);
    });
    host.appendChild(lang);

    /* Appearance */
    var ICON_SUN = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' +
      '<circle cx="8" cy="8" r="3.1"/><path d="M8 .9v2M8 13.1v2M.9 8h2M13.1 8h2M3 3l1.4 1.4M11.6 11.6L13 13M13 3l-1.4 1.4M4.4 11.6L3 13"/></svg>';
    var ICON_MOON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">' +
      '<path d="M13.4 9.6A5.7 5.7 0 0 1 6.4 2.6 5.8 5.8 0 1 0 13.4 9.6Z"/></svg>';

    var appear = el("div", { "class": "menu-group" });
    appear.appendChild(el("h5", null, L(UI.appearance)));
    [["light", ICON_SUN, UI.light], ["dark", ICON_MOON, UI.dark]].forEach(function (row) {
      var t = row[0];
      var tb = el("button", {
        type: "button", "class": "themerow" + (t === SAKE.theme ? " is-on" : ""),
        "aria-pressed": String(t === SAKE.theme), "data-theme-set": t
      }, row[1] + '<span class="themerow-n">' + L(row[2]) + "</span>");
      tb.addEventListener("click", function () { SAKE.setTheme(t); });
      appear.appendChild(tb);
    });
    host.appendChild(appear);

    var here = SAKE.currentPage();
    var idx = el("div", { "class": "menu-nav" });
    SAKE.NAV.forEach(function (g) {
      var box = el("div", { "class": "menu-group" });
      box.appendChild(el("h5", null, L(g.group)));
      g.items.forEach(function (it) {
        var key = it.href.replace(/\.html$/, "");
        var a = el("a", { href: SAKE.href(key, "") },
          L(it.label) + (it.jp && SAKE.lang !== "ja" ? '<span class="rail-jp">' + it.jp + "</span>" : ""));
        if (key === here) a.className = "is-active";
        a.addEventListener("click", function () { toggleMenu(false); });
        box.appendChild(a);
      });
      idx.appendChild(box);
    });
    host.appendChild(idx);

    host.appendChild(buildColophon());
  }

  /* ---------------------------------------------------------- */
  /* Colophon — who made it, and where it lives                  */
  /* ---------------------------------------------------------- */
  var CREDIT = {
    en: "Written, drawn and built by 13STUDIO with Claude.",
    ja: "文と図と造りは、13STUDIO と Claude による。",
    zh: "文字、圖表與建構，由 13STUDIO 與 Claude 共同完成。"
  };
  var RIGHTS = {
    en: "© 2026 13STUDIO. All rights reserved.",
    ja: "© 2026 13STUDIO. 無断転載を禁じます。",
    zh: "© 2026 13STUDIO. 版權所有。"
  };

  function buildColophon() {
    var c = el("div", { "class": "colophon" });
    c.appendChild(el("div", { "class": "colo-t" }, L(SITE.name)));
    c.appendChild(el("p", null, L(CREDIT)));
    c.appendChild(el("p", null, L(RIGHTS)));
    c.appendChild(el("p", { "class": "colo-ed" },
      "v" + SAKE.EDITION + " \u00b7 " + SAKE.BUILT));
    var links = el("div", { "class": "colo-links" });
    [["https://13studio.co", "13studio.co"],
     ["https://github.com/13studio-sudo/sake", "github.com/13studio-sudo/sake"]].forEach(function (row) {
      var line = el("div");
      line.appendChild(el("a", {
        href: row[0], target: "_blank", rel: "noopener noreferrer"
      }, row[1]));
      links.appendChild(line);
    });
    c.appendChild(links);
    return c;
  }

  SAKE.menuOpen = false;

  function toggleMenu(force) {
    var host = document.querySelector(".sidemenu");
    var btn = document.querySelector(".menubtn");
    if (!host) return;
    var open = (force === undefined) ? !SAKE.menuOpen : !!force;
    SAKE.menuOpen = open;
    host.classList.toggle("is-open", open);
    if (btn) {
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", L(open ? UI.closeMenu : UI.menu));
      btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    }
    toggleScrim(open);
    if (open) {
      var first = host.querySelector("button, a");
      if (first && first.focus) first.focus();
    } else if (btn && btn.focus) {
      btn.focus();
    }
  }
  SAKE.toggleMenu = toggleMenu;

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && SAKE.menuOpen) toggleMenu(false);
  });

  function toggleScrim(on) {
    var ex = document.querySelector(".scrim");
    if (on && !ex) {
      var sc = el("div", { "class": "scrim" });
      sc.addEventListener("click", function () { toggleMenu(false); });
      document.body.appendChild(sc);
    } else if (!on && ex) {
      ex.parentNode.removeChild(ex);
    }
  }

  function buildRail() {
    var rail = document.querySelector(".rail");
    if (!rail) return;
    rail.innerHTML = "";
    var here = SAKE.currentPage();

    SAKE.NAV.forEach(function (g) {
      var box = el("div", { "class": "rail-group" });
      box.appendChild(el("h5", null, L(g.group)));
      g.items.forEach(function (it) {
        var key = it.href.replace(/\.html$/, "");
        var a = el("a", { href: SAKE.href(key, "") },
          L(it.label) + (it.jp && SAKE.lang !== "ja" ? '<span class="rail-jp">' + it.jp + "</span>" : ""));
        if (key === here) a.className = "is-active";
        box.appendChild(a);
      });
      rail.appendChild(box);
    });
  }

  function buildFooter() {
    var f = document.querySelector(".foot");
    if (!f) return;
    f.innerHTML = '<div class="foot-in wrap">' +
      "<div>" + L(SITE.name) + ' · <span class="jp">日本酒</span> · ' + L(UI.tagline) + "</div>" +
      "<div>" + L(UI.footNote) + "</div>" +
      "<div>" + L(UI.drink) + "</div>" +
      '<div>' + L(RIGHTS) + ' · <a href="https://13studio.co" target="_blank" rel="noopener noreferrer">13studio.co</a>' +
      ' · <a href="https://github.com/13studio-sudo/sake" target="_blank" rel="noopener noreferrer">GitHub</a></div>' +
      "</div>";
  }

  function buildPager() {
    var host = document.querySelector(".pager");
    if (!host) return;
    var flat = SAKE.flatNav();
    var here = SAKE.currentPage();
    var idx = -1;
    for (var i = 0; i < flat.length; i++) if (flat[i].href.replace(/\.html$/, "") === here) idx = i;
    host.innerHTML = "";
    var prev = idx > 0 ? flat[idx - 1] : null;
    var next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
    host.appendChild(prev
      ? el("a", { href: SAKE.href(prev.href.replace(/\.html$/, ""), ""), "class": "prev" }, '<span class="pg-k">' + L(UI.prev) + '</span><span class="pg-t">' + L(prev.label) + "</span>")
      : el("span", { "class": "empty" }, ""));
    host.appendChild(next
      ? el("a", { href: SAKE.href(next.href.replace(/\.html$/, ""), ""), "class": "next" }, '<span class="pg-k">' + L(UI.next) + '</span><span class="pg-t">' + L(next.label) + "</span>")
      : el("span", { "class": "empty" }, ""));
  }

  /* ---------------------------------------------------------- */
  /* Table of contents (right rail)                             */
  /* ---------------------------------------------------------- */
  function buildTOC() {
    var toc = document.querySelector(".toc");
    var main = document.querySelector("main");
    if (!toc || !main) return;
    toc.innerHTML = "";
    var heads = main.querySelectorAll("[data-toc]");
    var shell = document.querySelector(".shell");
    if (!heads.length) {
      toc.style.display = "none";
      if (shell) shell.classList.add("no-toc");
      return;
    }
    toc.style.display = "";
    if (shell) shell.classList.remove("no-toc");
    toc.appendChild(el("h5", null, L(UI.contents)));
    var links = [];
    for (var i = 0; i < heads.length; i++) {
      var h = heads[i];
      if (!h.id) h.id = slug(h.textContent) + "-" + i;
      var clone = h.cloneNode(true);
      var jp = clone.querySelectorAll(".h2-jp, .t-jp, .romaji");
      for (var z = 0; z < jp.length; z++) jp[z].parentNode.removeChild(jp[z]);
      var a = el("a", { href: "#" + h.id, "class": h.getAttribute("data-toc") === "3" ? "lvl3" : "" },
        clone.textContent.replace(/\s+/g, " ").trim());
      toc.appendChild(a);
      links.push({ a: a, h: h });
    }
    if (!("IntersectionObserver" in global)) return;
    var seen = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting; });
      var active = null;
      for (var k = 0; k < links.length; k++) if (seen[links[k].h.id]) { active = links[k]; break; }
      links.forEach(function (l) { l.a.classList.toggle("is-active", l === active); });
    }, { rootMargin: "-70px 0px -72% 0px", threshold: 0 });
    links.forEach(function (l) { io.observe(l.h); });
  }

  /* ---------------------------------------------------------- */
  /* Page bootstrap                                             */
  /* ---------------------------------------------------------- */
  function renderPage() {
    figSeq = 0;
    var key = SAKE.currentPage();
    var page = SAKE.pages[key];
    var main = document.querySelector("main");
    if (!page || !main) return;

    main.innerHTML = "";

    var head = el("header", { "class": "pagehead" });
    if (page.kicker) head.appendChild(el("div", { "class": "kicker" }, L(page.kicker)));
    head.appendChild(el("h1", null, L(page.title)));
    if (page.jp) head.appendChild(el("div", { "class": "sub" }, page.jp));
    if (page.lede) head.appendChild(el("p", { "class": "lede" }, L(page.lede)));
    main.appendChild(head);

    renderBlocks(page.body, main);

    main.appendChild(el("nav", { "class": "pager" }));
    rewriteLinks(main);

    document.title = L(page.title) + " — " + L(SITE.name);
  }

  /* ---------------------------------------------------------- */
  /* Scrollbars                                                 */
  /*                                                            */
  /* No browser lets a native scrollbar be squared — Chromium    */
  /* rounds the thumb, Firefox exposes only a colour, and        */
  /* Windows adds arrow buttons on top. So base.css hides the    */
  /* native bar and this draws one instead: a 3px line, one      */
  /* fixed element per scrolling container, its geometry taken   */
  /* from that container on every scroll and resize.             */
  /* ---------------------------------------------------------- */
  var SB_W = 3;      /* the ink: a 3px line */
  var SB_HIT = 6;    /* transparent margin each side — the grab strip */
  var SB_GAP = 3;    /* space between the ink and the container edge */
  var SB_PAD = 4;    /* space at each end of the run */
  var SB_MIN = 32;   /* shortest the bar is allowed to get */
  var sbars = [];

  function sbMetrics(c, axis) {
    var doc = c === document.documentElement;
    var r, view, pos, size, total;
    if (doc) {
      r = { top: 0, left: 0, right: global.innerWidth, bottom: global.innerHeight };
      view = axis === "v" ? global.innerHeight : global.innerWidth;
      pos = axis === "v" ? (global.pageYOffset || c.scrollTop) : (global.pageXOffset || c.scrollLeft);
      total = axis === "v" ? c.scrollHeight : c.scrollWidth;
    } else {
      r = c.getBoundingClientRect();
      view = axis === "v" ? c.clientHeight : c.clientWidth;
      pos = axis === "v" ? c.scrollTop : c.scrollLeft;
      total = axis === "v" ? c.scrollHeight : c.scrollWidth;
    }
    size = axis === "v" ? (r.bottom - r.top) : (r.right - r.left);
    return { r: r, view: view, pos: pos, total: total, size: size };
  }

  function sbPaint(b) {
    var m = sbMetrics(b.c, b.axis), st = b.el.style;
    /* nothing to scroll, or scrolled out of sight: take the bar away */
    if (m.total - m.view <= 1 || m.size <= 0 ||
        m.r.bottom < 0 || m.r.top > global.innerHeight ||
        m.r.right < 0 || m.r.left > global.innerWidth) {
      st.display = "none";
      return;
    }
    st.display = "block";
    var run = Math.max(0, m.size - SB_PAD * 2);
    var len = Math.max(SB_MIN, Math.round(run * (m.view / m.total)));
    if (len > run) len = run;
    var frac = m.total - m.view > 0 ? m.pos / (m.total - m.view) : 0;
    if (frac < 0) frac = 0;
    if (frac > 1) frac = 1;
    var off = Math.round((run - len) * frac);
    b.run = run; b.len = len;

    /* The element is SB_HIT wider than the ink on each side, so it is
       offset by that much to keep the visible line where it belongs. */
    if (b.axis === "v") {
      st.top = (m.r.top + SB_PAD + off) + "px";
      st.height = len + "px";
      st.left = (m.r.right - SB_GAP - SB_W - SB_HIT) + "px";
    } else {
      st.left = (m.r.left + SB_PAD + off) + "px";
      st.width = len + "px";
      st.top = (m.r.bottom - SB_GAP - SB_W - SB_HIT) + "px";
    }
  }

  function sbPaintAll() {
    for (var i = 0; i < sbars.length; i++) sbPaint(sbars[i]);
  }

  function sbDrag(b) {
    b.el.addEventListener("pointerdown", function (ev) {
      if (ev.button) return;
      ev.preventDefault();
      var m = sbMetrics(b.c, b.axis);
      var start = b.axis === "v" ? ev.clientY : ev.clientX;
      var from = m.pos, span = m.total - m.view, room = b.run - b.len;
      b.el.classList.add("is-drag");
      try { b.el.setPointerCapture(ev.pointerId); } catch (e) { /* ignore */ }

      function move(e2) {
        if (room <= 0) return;
        var now = b.axis === "v" ? e2.clientY : e2.clientX;
        var to = from + ((now - start) / room) * span;
        if (b.c === document.documentElement) {
          if (b.axis === "v") global.scrollTo(0, to); else global.scrollTo(to, 0);
        } else {
          if (b.axis === "v") b.c.scrollTop = to; else b.c.scrollLeft = to;
        }
        sbPaint(b);
      }
      function up(e2) {
        b.el.classList.remove("is-drag");
        try { b.el.releasePointerCapture(e2.pointerId); } catch (e) { /* ignore */ }
        b.el.removeEventListener("pointermove", move);
        b.el.removeEventListener("pointerup", up);
        b.el.removeEventListener("pointercancel", up);
      }
      b.el.addEventListener("pointermove", move);
      b.el.addEventListener("pointerup", up);
      b.el.addEventListener("pointercancel", up);
    });
  }

  function sbAdd(c, axis) {
    if (!c) return;
    var b = {
      c: c, axis: axis, run: 0, len: 0,
      el: el("div", { "class": "sbar sbar-" + axis, "aria-hidden": "true" })
    };
    document.body.appendChild(b.el);
    sbDrag(b);
    sbars.push(b);
    if (c !== document.documentElement) c.addEventListener("scroll", function () { sbPaint(b); });
    sbPaint(b);
  }

  /* Rebuilt after every render, because most of the scrolling
     containers on the page are themselves rebuilt. */
  function sbSync() {
    for (var i = 0; i < sbars.length; i++)
      if (sbars[i].el.parentNode) sbars[i].el.parentNode.removeChild(sbars[i].el);
    sbars = [];
    sbAdd(document.documentElement, "v");
    var sel = [".rail", ".toc", ".sidemenu", ".results"], k, n;
    for (k = 0; k < sel.length; k++) {
      n = document.querySelector(sel[k]);
      if (n) sbAdd(n, "v");
    }
    var wide = document.querySelectorAll("main .figframe, main .tablewrap");
    for (k = 0; k < wide.length; k++) sbAdd(wide[k], "h");
    sbPaintAll();
  }
  SAKE.syncScrollbars = sbSync;

  global.addEventListener("scroll", sbPaintAll, true);
  global.addEventListener("resize", sbPaintAll);

  SAKE.render = function () {
    document.documentElement.lang = SAKE.HTMLLANG[SAKE.lang];
    buildTopbar();
    buildSideMenu();
    buildRail();
    renderPage();
    buildPager();
    buildFooter();
    buildTOC();
    rewriteLinks(document.querySelector(".pager"));
    if (SAKE.menuOpen) toggleMenu(true);
    sbSync();
    if (SAKE.afterRender) { try { SAKE.afterRender(); } catch (e) { /* ignore */ } }
  };

  SAKE.setLang = function (code) {
    if (SAKE.LANGS.indexOf(code) < 0) return;
    var y = global.scrollY;
    SAKE.lang = code;
    writeStored(code);
    SAKE.render();
    global.scrollTo(0, y);
  };

  function onRoute() {
    SAKE.render();
    var r = parseHash();
    if (r.anchor) {
      var target = document.getElementById(r.anchor);
      if (target && target.scrollIntoView) { target.scrollIntoView(); return; }
    }
    global.scrollTo(0, 0);
  }

  if (SAKE.bundle) global.addEventListener("hashchange", onRoute);

  function boot() { if (SAKE.bundle) onRoute(); else SAKE.render(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})(window);

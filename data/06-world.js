/* =============================================================
   THE BOOK OF SAKE — Wider world
   7 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ------------------------------------------ kojifamily */
SAKE.pages["kojifamily"] = {
  kicker: { en: "Wider world · 01", ja: "周辺 · 01", zh: "周邊 · 01" },
  title:  { en: "The Kōji Family", ja: "麹の一族", zh: "麴的家族" },
  jp: "麹菌がつくるもの",
  lede: {
    en: "The UNESCO inscription of 2024 was not for sake. It was for “traditional knowledge and skills of sake-making with kōji mould in Japan” — and the element covers shōchū, awamori and mirin as well, because they are the same technology applied to different ends. Kōji is the through-line of Japanese fermentation: it makes the alcohol, and it also makes the miso, the soy sauce, the vinegar and the mirin that sake is drunk alongside.",
    ja: "二〇二四年のユネスコ登録は、日本酒に対するものではなかった。「日本の伝統的酒造り」——すなわち麹菌を用いた酒造りの知識と技術——に対するものであり、その対象は焼酎・泡盛・みりんにも及ぶ。同じ技術を別の目的に適用したものだからである。麹は日本の発酵を貫く一本の線である。酒を造り、同時に、その酒とともに食される味噌・醤油・酢・みりんをも造る。",
    zh: "2024 年的聯合國教科文組織列名，對象並非日本酒本身，而是「日本以麴菌釀酒的傳統知識與技藝」——其範圍同時涵蓋燒酎、泡盛與味醂，因為它們是同一技術用於不同目的的結果。麴是貫穿日本發酵的一條主線：它釀出酒，也造出與酒同席的味噌、醬油、醋與味醂。"
  },
  body: [
    { t:"section", id:"species",
      title:{ en:"Three moulds", ja:"三つの麹菌", zh:"三種麴菌" }, jp:"黄麹・黒麹・白麹",
      body:[
        { t:"p", text:{
          en:"Japanese fermentation uses three domesticated <em>Aspergillus</em> species, and the choice between them is a choice about climate. The northern one produces no acid and needs cold or lactic protection; the southern two flood their own mash with citric acid and protect themselves.",
          ja:"日本の発酵は三種の家畜化されたアスペルギルス属を用いる。そのいずれを選ぶかは、気候についての選択である。北の一種は酸を作らず、寒さか乳酸による保護を要する。南の二種は自ら醪をクエン酸で満たし、自らを守る。",
          zh:"日本的發酵使用三種被馴化的麴菌屬（Aspergillus），選擇何者其實是關於氣候的選擇。北方那一種不產酸，需要寒冷或乳酸的保護；南方兩種則以檸檬酸淹沒自身的醪，自我防護。" } },
        { t:"compare", cols:3, items:[
          { title:{en:"Yellow kōji",ja:"黄麹",zh:"黃麴"}, jp:"A. oryzae · 黄麹菌",
            text:{en:"The national fungus. Produces no significant organic acid, so a mash made with it is defenceless until lactic acid arrives or is added — which is why sake is brewed in winter and why the starter methods exist. Used for sake, miso, soy sauce, mirin, rice vinegar, amazake, and a growing number of shōchū.",
                  ja:"国菌。有機酸をほとんど生成しないため、これで仕込んだ醪は、乳酸が入り込むか加えられるまで無防備である。日本酒が冬に造られ、酒母法が存在するのはこのためである。日本酒・味噌・醤油・みりん・米酢・甘酒、そして増えつつある焼酎に用いられる。",
                  zh:"國菌。幾乎不產生有機酸，因此以它製成的醪在乳酸到來或被添加之前毫無防禦——這正是日本酒於冬季釀造、以及酒母工法存在的原因。用於日本酒、味噌、醬油、味醂、米醋、甘酒，以及日益增多的燒酎。"} },
          { title:{en:"Black kōji",ja:"黒麹",zh:"黑麴"}, jp:"A. luchuensis · 黒麹菌",
            text:{en:"The Okinawan mould, brought from the Ryukyu trade with Southeast Asia. Produces citric acid in quantity, which drops the mash pH low enough to keep it safe at subtropical temperatures without any cold season at all. Used for awamori and for the more robust shōchū; gives a heavy, sweet-earthy character. Its spores stain everything black, which is why breweries using it look the way they do.",
                  ja:"沖縄の麹菌であり、琉球の東南アジア交易とともに伝わった。クエン酸を大量に生成し、醪のpHを下げることで、寒い季節なしに亜熱帯の温度でも安全に保つ。泡盛と、より力強い焼酎に用いられ、重く甘い土のような性格を与える。胞子はあらゆるものを黒く染める。この菌を用いる蔵の見た目は、そのためである。",
                  zh:"沖繩的麴菌，隨琉球與東南亞的貿易傳入。大量產生檸檬酸，使醪的 pH 降至足以在亞熱帶溫度下安全的水準，完全不需寒冷季節。用於泡盛與較厚重的燒酎，賦予厚實而帶土質甜感的性格。其孢子會把一切染黑——使用它的酒藏之所以是那副模樣，原因在此。"} },
          { title:{en:"White kōji",ja:"白麹",zh:"白麴"}, jp:"A. kawachii · 白麹菌",
            text:{en:"A pale mutant of the black mould, isolated in Kagoshima in 1918 and now the dominant kōji for shōchū. Same citric acid protection, cleaner and lighter in flavour, and it does not stain. Its discovery is the reason shōchū became a mass-market product rather than a regional curiosity.",
                  ja:"黒麹の白色変異株で、一九一八年に鹿児島で分離され、現在は焼酎の主流となっている。クエン酸による保護は同じで、味は清らかで軽く、染色もしない。その発見こそ、焼酎が地方の珍品ではなく大衆的な商品となった理由である。",
                  zh:"黑麴的白色突變株，1918 年於鹿兒島分離而出，如今是燒酎的主流用麴。同樣具檸檬酸保護，風味更潔淨輕盈，且不會染色。它的發現，正是燒酎從地方奇珍變成大眾商品的原因。"} }
        ] },
        { t:"note", label:{en:"One technology, two climates",ja:"一つの技術、二つの気候",zh:"同一技術，兩種氣候"}, text:{
          en:"The whole northern apparatus of sake — winter brewing, the starter methods, the obsession with sterility — exists to solve a problem that black kōji solves biochemically. Both are answers to the same question: how do you keep a warm sugary mash safe? Japan happens to have arrived at both answers, four hundred kilometres apart.",
          ja:"日本酒における北方の装置一式——寒造り、酒母法、無菌への執着——は、黒麹が生化学的に解決している問題を解くために存在する。いずれも同じ問いへの答えである——温かく糖に富む醪を、どうやって安全に保つか。日本は、四百キロを隔てて、その両方の答えにたどり着いた。",
          zh:"日本酒北方的整套裝置——寒造、酒母工法、對無菌的執著——都是為了解決黑麴以生化方式解決的同一個問題。兩者都是對同一提問的回答：如何讓溫暖含糖的醪保持安全？日本恰好在相距四百公里之處，抵達了這兩種答案。" } }
      ]
    },

    { t:"section", id:"drinks",
      title:{ en:"What kōji makes to drink", ja:"麹が造る飲み物", zh:"麴所造的飲品" }, jp:"酒類",
      body:[
        { t:"defs", items:[
          { term:{en:"Shōchū",ja:"焼酎",zh:"燒酎"}, jp:"焼酎 · honkaku shōchū",
            def:{en:"Distilled from a kōji-based mash. Two legal classes: <em>tanshiki</em> (single distillation, also called <em>honkaku</em>) which keeps the raw material's character, and <em>renzoku</em> (continuous column) which is neutral and used for chūhai and for blending. Honkaku shōchū is made in two stages — a rice or barley kōji starter mash, then the main ingredient added — and the main ingredient may be sweet potato, barley, rice, buckwheat, brown sugar, chestnut, sesame or more than fifty other things the law permits. Around 25% alcohol, no ageing requirement, and unlike sake it does not deteriorate.",
                 ja:"麹による醪を蒸留した酒。法的には二種——単式蒸留（本格焼酎とも呼ばれ、原料の個性を残す）と連続式蒸留（中性で、チューハイや割り材に用いる）。本格焼酎は二段で仕込む——米麹または麦麹の一次仕込みののち、主原料を投入する。主原料は芋・麦・米・そば・黒糖・栗・胡麻など、法が認めるものは五十を超える。アルコール分はおよそ25%、熟成の要件はなく、日本酒と違って劣化しない。",
                 zh:"以麴製醪蒸餾而成的酒。法律上分兩類：單式蒸餾（亦稱本格燒酎，保留原料個性）與連續式蒸餾（中性，用於調酒與調配）。本格燒酎採兩段仕込——先以米麴或麥麴製一次醪，再投入主原料；主原料可為番薯、大麥、米、蕎麥、黑糖、栗子、芝麻等法定逾五十種。酒精約 25%，無陳年要求，且與日本酒不同，它不會劣化。"} },
          { term:{en:"Awamori",ja:"泡盛",zh:"泡盛"}, jp:"泡盛 · 古酒（クース）",
            def:{en:"Okinawa's own spirit, and older than shōchū as a documented tradition. Distilled from Thai long-grain indica rice with black kōji, in a single all-kōji mash rather than the two-stage mash used elsewhere — every grain is made into kōji, which is a different and more demanding proposition. Aged in unglazed earthenware, where it becomes <em>kūsu</em>; the traditional practice of topping up older jars from younger ones is a solera in all but name.",
                 ja:"沖縄固有の蒸留酒であり、記録の上では焼酎より古い。タイ産インディカ米と黒麹を用い、他地域の二段仕込みではなく、全量を麹とする一段仕込みで造る。すべての粒を麹にするというのは、別種の、より要求の高い工程である。素焼きの甕で熟成させたものが古酒であり、古い甕に若い酒を注ぎ足していく仕次ぎの慣行は、名前が違うだけのソレラである。",
                 zh:"沖繩自有的蒸餾酒，就文獻而言比燒酎更古老。以泰國長粒秈米與黑麴釀造，採全量製麴的一段式仕込，而非他處的兩段式——每一粒米都製成麴，這是另一種、要求更高的工序。以未上釉的陶甕陳放者稱「古酒」；以年輕之酒補注老甕的「仕次」傳統，實質上就是索雷拉系統。"} },
          { term:{en:"Mirin",ja:"みりん",zh:"味醂"}, jp:"本みりん",
            def:{en:"Glutinous rice and kōji steeped in shōchū instead of water, for sixty days or more. The alcohol prevents fermentation from starting, so the kōji enzymes only saccharify — and keep going, producing an intensely sweet, viscous, amber liquid at around 14% alcohol with no added sugar at all. Structurally it is a sake whose second half was never allowed to happen. In the Edo period it was drunk as a sweet liqueur; it became a seasoning later.",
                 ja:"もち米と麹を、水ではなく焼酎に六十日以上浸す。アルコールが発酵の開始を妨げるため、麹の酵素はひたすら糖化を続け、砂糖を一切加えずに、アルコール分14%前後の濃厚で粘度の高い琥珀色の液体ができる。構造的には、後半が起こることを許されなかった日本酒である。江戸期には甘い飲み物として飲まれ、調味料になったのは後のことである。",
                 zh:"以糯米與麴浸於燒酎而非水中，歷時六十天以上。酒精阻止發酵啟動，麴的酵素只能持續糖化——不加任何糖，便產出酒精約 14%、極甜而黏稠的琥珀色液體。結構上，它是一款「後半段從未被允許發生」的日本酒。江戶時期作為甜味飲品，成為調味料是更晚的事。"} },
          { term:{en:"Amazake",ja:"甘酒",zh:"甘酒"}, jp:"甘酒",
            def:{en:"Rice saccharified by kōji alone, with no yeast. Non-alcoholic, and sweet purely from the glucose the enzymes released — around 20% sugar with nothing added. Sold hot at shrines at New Year and cold in summer, and historically regarded as a summer restorative rather than a winter one; it is a seasonal word for summer in haiku.",
                 ja:"酵母を使わず、麹だけで米を糖化させたもの。ノンアルコールで、甘さは酵素が放出したブドウ糖のみに由来する。何も加えずに糖度は20%前後になる。正月の社頭では温かく、夏には冷やして売られる。歴史的には冬ではなく夏の滋養とされ、俳句では夏の季語である。",
                 zh:"僅以麴糖化米、不用酵母。無酒精，甜味純粹來自酵素釋出的葡萄糖——不加任何東西即可達約 20% 糖度。新年於神社前熱飲，夏日則冰飲；歷史上被視為夏季而非冬季的滋補品，在俳句中是夏天的季語。"} },
          { term:{en:"Kasutori shōchū",ja:"粕取り焼酎",zh:"粕取燒酎"}, jp:"粕取り焼酎",
            def:{en:"Distilled from sake lees rather than from a fresh mash. A by-product turned into a product, historically made by every sake brewery in winter. Retains the aroma of the sake it came from, and is the traditional base for mirin.",
                 ja:"新しい醪ではなく酒粕から蒸留する。副産物を製品に変えたものであり、歴史的にはどの蔵も冬に造っていた。元の酒の香りを残しており、みりんの伝統的な基酒でもある。",
                 zh:"以酒粕而非新醪蒸餾。將副產物轉為產品，歷史上每家酒藏冬季皆製。它保留原酒的香氣，也是味醂傳統的基酒。"} }
        ] }
      ]
    },

    { t:"section", id:"foods",
      title:{ en:"What kōji makes to eat", ja:"麹が造る食べ物", zh:"麴所造的食物" }, jp:"発酵調味料",
      body:[
        { t:"p", text:{
          en:"Japanese cooking is largely a set of variations on one enzymatic process. This matters for sake because it explains the pairing: the umami in a sake and the umami in the food beside it are often produced by the same organism doing the same thing to a different substrate.",
          ja:"日本料理は、大部分において、一つの酵素過程の変奏である。これは相性の問題に直結する。日本酒のうま味と、その傍らにある料理のうま味は、同じ微生物が別の基質に対して同じことを行った結果であることが多いからだ。",
          zh:"日本料理在很大程度上是同一項酵素過程的一系列變奏。這與餐酒搭配直接相關：一款清酒中的旨味，與其旁邊食物中的旨味，往往出自同一種微生物對不同基質做了同一件事。" } },
        { t:"table",
          cols:[{en:"Product",ja:"製品",zh:"製品"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Substrate",ja:"基質",zh:"基質"},{en:"What kōji does",ja:"麹の働き",zh:"麴的作用"}],
          jpCols:[1],
          rows:[
            [{en:"Miso",ja:"味噌",zh:"味噌"},"味噌",{en:"soybeans + rice, barley or soy kōji + salt",ja:"大豆＋米麹・麦麹・豆麹＋塩",zh:"大豆＋米麴、麥麴或豆麴＋鹽"},
             {en:"Proteases break soy protein into amino acids over months to years; amylases give sweetness. The kōji grain used — rice, barley or soybean — defines the regional style.",ja:"プロテアーゼが数か月から数年かけて大豆のたんぱく質をアミノ酸に分解し、アミラーゼが甘みを与える。用いる麹の穀物——米・麦・豆——が地方の型を規定する。",zh:"蛋白酶在數月至數年間將大豆蛋白分解為胺基酸，澱粉酶則帶來甜味。所用麴的穀物——米、麥或豆——決定了地方風格。"}],
            [{en:"Soy sauce",ja:"醤油",zh:"醬油"},"醤油",{en:"soybeans + wheat + salt brine",ja:"大豆＋小麦＋食塩水",zh:"大豆＋小麥＋鹽水"},
             {en:"Kōji is grown on a soy-and-wheat mixture, then submerged in brine for six months to two years while proteases, halophilic lactic bacteria and salt-tolerant yeast work in sequence.",ja:"大豆と小麦の混合物に麹を生やし、食塩水に漬けて半年から二年、プロテアーゼ・耐塩性乳酸菌・耐塩性酵母が順に働く。",zh:"於大豆與小麥的混合物上培養麴，再浸入鹽水中六個月至兩年，由蛋白酶、嗜鹽乳酸菌與耐鹽酵母依序作用。"}],
            [{en:"Rice vinegar",ja:"米酢",zh:"米醋"},"米酢",{en:"rice",ja:"米",zh:"米"},
             {en:"Sake is made first, then acetic acid bacteria oxidise its ethanol to acetic acid. Rice vinegar is, quite literally, sake taken one step further.",ja:"まず酒を造り、次に酢酸菌がそのエタノールを酢酸に酸化する。米酢とは文字どおり、一歩先へ進めた日本酒である。",zh:"先釀成酒，再由醋酸菌把乙醇氧化為醋酸。米醋字面上就是「再往前一步」的日本酒。"}],
            [{en:"Shio-kōji",ja:"塩麹",zh:"鹽麴"},"塩麹",{en:"kōji + salt + water",ja:"麹＋塩＋水",zh:"麴＋鹽＋水"},
             {en:"A simple enzyme paste used as a marinade. Proteases tenderise meat and fish and generate glutamate directly. Revived commercially around 2011 and now a standard kitchen item.",ja:"漬け込みに用いる単純な酵素のペースト。プロテアーゼが肉や魚を柔らかくし、グルタミン酸を直接生み出す。二〇一一年頃に商業的に再発見され、いまや台所の定番である。",zh:"用作醃料的簡易酵素糊。蛋白酶軟化肉與魚，並直接生成麩胺酸。約 2011 年商業復興，如今已是廚房常備品。"}],
            [{en:"Kasuzuke",ja:"粕漬け",zh:"粕漬"},"粕漬け",{en:"sake lees",ja:"酒粕",zh:"酒粕"},
             {en:"Fish and vegetables cured in sake lees. The residual enzymes and alcohol preserve and transform simultaneously — the classic use is for cod, butterfish and uri melon.",ja:"魚や野菜を酒粕に漬けたもの。残存する酵素とアルコールが、保存と変化を同時に行う。鱈・銀鱈・瓜が古典的である。",zh:"以酒粕醃漬魚類與蔬菜。殘留的酵素與酒精同時進行保存與轉化——經典用法是鱈魚、銀鱈與越瓜。"}],
            [{en:"Katsuobushi",ja:"鰹節",zh:"柴魚"},"鰹節",{en:"skipjack tuna",ja:"鰹",zh:"鰹魚"},
             {en:"Not kōji but its relative <em>Aspergillus glaucus</em>, cultivated on dried, smoked bonito over months to drive out remaining moisture and break down fat. The result is the hardest food in the world and the backbone of dashi.",ja:"麹菌ではないが近縁のアスペルギルス・グラウカスを、燻して乾かした鰹に数か月かけて生やし、残る水分を抜き脂肪を分解する。結果として世界で最も硬い食品となり、出汁の柱となる。",zh:"並非麴菌，而是其近親 Aspergillus glaucus，在燻乾的鰹魚上培養數月，逼出殘餘水分並分解脂肪。成品是世上最硬的食品，也是高湯的支柱。"}]
          ] },
        { t:"panel", tint:"koji", title:{en:"Why this matters at the table",ja:"食卓においてこれが意味すること",zh:"這在餐桌上的意義"}, body:[
          { t:"p", text:{
            en:"Dashi, soy sauce, miso and sake all carry free glutamate produced by the same enzymatic route. Wine's usual pairing logic — contrast acid against fat, tannin against protein — has little to work with here, and often reads thin. Sake's logic is addition rather than contrast, which is why it can accompany a whole meal rather than a single course.",
            ja:"出汁も醤油も味噌も日本酒も、同じ酵素の経路によって生じた遊離グルタミン酸をもつ。酸を脂に、タンニンをたんぱく質に対置するというワインの通常の相性の論理は、ここでは働く相手が乏しく、しばしば痩せて感じられる。日本酒の論理は対比ではなく加算であり、だからこそ一皿ではなく食事全体に寄り添える。",
            zh:"高湯、醬油、味噌與日本酒，都帶有經同一酵素路徑生成的游離麩胺酸。葡萄酒慣用的搭配邏輯——以酸對脂、以單寧對蛋白質——在此少有著力點，往往顯得單薄。日本酒的邏輯是相加而非對比，因此它能陪伴整頓餐食，而非單獨一道菜。" } }
        ] }
      ]
    },

{ t:"section", id:"enzymes",
      title:{ en:"What the enzymes actually do", ja:"酵素が実際にしていること", zh:"酵素實際在做什麼" }, jp:"三つの酵素",
      body:[
        { t:"figure",
          caption:{
            en:"One mould, nine products, and the only thing that really changes is which enzyme is allowed to run. The bars show where the emphasis falls, not measured activity — think of them as a drawing of the brewer's intention rather than a laboratory result. Read down the column and the whole of Japanese fermentation sorts itself: the drinks live at the amylase end, where starch becomes sugar and sugar becomes alcohol; the seasonings live at the protease end, where protein becomes amino acid and amino acid becomes savour.",
            ja:"一つの菌、九つの産物。そして本当に変わるのは、どの酵素に働くのを許すかということだけである。棒が示すのは重点の置きどころであって、測られた活性ではない。実験の結果というより、造り手の意図の絵と思っていただきたい。上から下へ読めば、日本の醸しの全体がおのずと整列する——飲みものはアミラーゼの側に住む。そこでは澱粉が糖になり、糖が酒になる。調味料はプロテアーゼの側に住む。そこではたんぱく質がアミノ酸になり、アミノ酸が旨味になる。",
            zh:"一種黴菌，九樣產物，而真正改變的只有一件事：允許哪一種酵素放手去做。長條顯示的是重心所在，而非實測活性——請把它們當作釀造者意圖的圖畫，而不是實驗室的結果。由上而下讀去，整個日本的發酵世界便自行排列妥當：飲品住在澱粉酶那一端，在那裡澱粉化為糖、糖化為酒；調味料住在蛋白酶那一端，在那裡蛋白質化為胺基酸、胺基酸化為旨味。" },
          svg: function (lang, L) {
            var W = 760, H = 418, X0 = 250, X1 = 700, Y0 = 34, RH = 34, BH = 18;
            var rows = [
              { a:93, p:6,  l:1,  jp:"甘酒",    n:{ en:"amazake", ja:"あまざけ", zh:"甘酒" },
                s:{ en:"rice, kōji, heat, ten hours", ja:"米・麹・熱・十時間", zh:"米・麴・熱・十小時" } },
              { a:88, p:10, l:2,  jp:"味醂",    n:{ en:"mirin", ja:"みりん", zh:"味醂" },
                s:{ en:"rice, kōji, shōchū", ja:"米・麹・焼酎", zh:"米・麴・燒酎" } },
              { a:84, p:14, l:2,  jp:"米酢",    n:{ en:"rice vinegar", ja:"こめず", zh:"米醋" },
                s:{ en:"sake, then acetic bacteria", ja:"酒、のちに酢酸菌", zh:"先成酒，再交給醋酸菌" } },
              { a:82, p:16, l:2,  jp:"大吟醸",  n:{ en:"daiginjō", ja:"だいぎんじょう", zh:"大吟釀" },
                s:{ en:"protease held down on purpose", ja:"意図してたんぱく分解を抑える", zh:"刻意壓低蛋白分解" } },
              { a:80, p:18, l:2,  jp:"焼酎・泡盛", n:{ en:"shōchū and awamori", ja:"しょうちゅう・あわもり", zh:"燒酎與泡盛" },
                s:{ en:"black kōji, citric acid", ja:"黒麹・クエン酸", zh:"黑麴・檸檬酸" } },
              { a:70, p:27, l:3,  jp:"生酛純米", n:{ en:"kimoto junmai", ja:"きもとじゅんまい", zh:"生酛純米" },
                s:{ en:"more amino acid, more weight", ja:"アミノ酸が多く、厚い", zh:"胺基酸更多、酒體更厚" } },
              { a:55, p:42, l:3,  jp:"塩麹",    n:{ en:"shio-kōji", ja:"しおこうじ", zh:"鹽麴" }, salt:true,
                s:{ en:"kōji left standing in brine", ja:"塩水に置いた麹", zh:"置於鹽水中的麴" } },
              { a:36, p:57, l:7,  jp:"味噌",    n:{ en:"miso", ja:"みそ", zh:"味噌" }, salt:true,
                s:{ en:"soy, rice kōji, salt, months", ja:"大豆・米麹・塩・数か月", zh:"大豆・米麴・鹽・數月" } },
              { a:24, p:60, l:16, jp:"醤油",    n:{ en:"soy sauce", ja:"しょうゆ", zh:"醬油" }, salt:true,
                s:{ en:"soy and wheat, and years", ja:"大豆と小麦・そして数年", zh:"大豆與小麥・以及數年" } }
            ];
            var cols = [
              { k:"a", c:"#C0AF8E", n:{ en:"amylase · starch to sugar", ja:"アミラーゼ・澱粉から糖へ", zh:"澱粉酶・澱粉化為糖" } },
              { k:"p", c:"#9FB0A6", n:{ en:"protease · protein to amino acid", ja:"プロテアーゼ・たんぱく質からアミノ酸へ", zh:"蛋白酶・蛋白質化為胺基酸" } },
              { k:"l", c:"#8B9BA6", n:{ en:"lipase · fat to fatty acid", ja:"リパーゼ・脂質から脂肪酸へ", zh:"脂肪酶・脂質化為脂肪酸" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j, y, x, seg, r, extra = 0;
            for (i = 0; i < rows.length; i++) {
              r = rows[i];
              if (r.salt && !extra) {
                extra = 16;
                y = Y0 + i * RH + 2;
                s += '<line x1="30" y1="' + y + '" x2="' + (W - 30) + '" y2="' + y + '" stroke="#DED8CB"/>';
                s += '<text x="' + (X0 - 14) + '" y="' + (y + 12) + '" text-anchor="end" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                     (lang === "ja" ? "ここから塩が入る" : lang === "zh" ? "自此加入鹽" : "SALT ENTERS HERE") + '</text>';
              }
              y = Y0 + i * RH + extra;
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 11) + '" text-anchor="end" font-size="12" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 24) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(r.n) + ' · ' + L(r.s) + '</text>';
              x = X0;
              for (j = 0; j < cols.length; j++) {
                seg = r[cols[j].k] / 100 * (X1 - X0);
                s += '<rect x="' + x.toFixed(1) + '" y="' + y + '" width="' + seg.toFixed(1) + '" height="' + BH + '" fill="' + cols[j].c + '"/>';
                x += seg;
              }
              s += '<rect x="' + X0 + '" y="' + y + '" width="' + (X1 - X0) + '" height="' + BH + '" fill="none" stroke="#CDC6B9"/>';
            }
            var KY = Y0 + rows.length * RH + extra + 26;
            for (j = 0; j < cols.length; j++) {
              s += '<rect x="' + (30 + j * 250) + '" y="' + (KY - 9) + '" width="11" height="11" fill="' + cols[j].c + '"/>';
              s += '<text x="' + (47 + j * 250) + '" y="' + KY + '" font-size="9" fill="#8B857C">' + L(cols[j].n) + '</text>';
            }
            s += '<text x="30" y="' + (KY + 24) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "麹室の運び方が、この横の位置を決めるてこである。温かく乾いた速い麹は左へ寄り、低温で湿った長い麹は右へ寄る。"
                  : lang === "zh" ? "麴室的操作方式，就是決定橫向位置的那根槓桿：溫暖乾燥而快速的製麴偏左，低溫潮濕而漫長的製麴偏右。"
                  : "How the kōji room is run is the lever that moves a product along this axis: warm, dry and fast shifts it left; cool, damp and slow shifts it right.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Kōji is a delivery system for three families of enzyme, and which one dominates decides what the product becomes. The same mould, grown differently on different substrates, makes sake, miso, soy sauce and vinegar.",
          ja:"麹とは、三系統の酵素を届ける仕組みである。どれが優勢になるかが、何ができるかを決める。同じ菌が、異なる基質の上で異なるように育てられ、酒にも味噌にも醤油にも酢にもなる。",
          zh:"麴是三大類酵素的輸送系統，而哪一類占主導，就決定了成品是什麼。同一種菌，在不同基質上以不同方式培養，便造就了清酒、味噌、醬油與醋。" } },
        { t:"table",
          cols:[{en:"Enzyme",ja:"酵素",zh:"酵素"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Breaks down",ja:"分解するもの",zh:"分解對象"},{en:"Gives",ja:"生じるもの",zh:"產生"}],
          jpCols:[1],
          rows:[
            [{en:"Amylases",ja:"アミラーゼ",zh:"澱粉酶"},"糖化酵素",
             {en:"Starch",ja:"澱粉",zh:"澱粉"},
             {en:"Glucose — sweetness, and the fuel for fermentation. Dominant in sake and amazake.",ja:"ブドウ糖——甘みであり、発酵の燃料である。日本酒と甘酒で優勢となる。",zh:"葡萄糖——甜味，也是發酵的燃料。在清酒與甘酒中占主導。"}],
            [{en:"Proteases",ja:"プロテアーゼ",zh:"蛋白酶"},"蛋白分解酵素",
             {en:"Protein",ja:"たんぱく質",zh:"蛋白質"},
             {en:"Amino acids — umami, savour and body. Dominant in miso and soy sauce; deliberately restrained in ginjō sake.",ja:"アミノ酸——旨味、こく、厚み。味噌と醤油で優勢となり、吟醸ではあえて抑えられる。",zh:"胺基酸——旨味、鹹鮮與酒體。在味噌與醬油中占主導；在吟釀清酒中則刻意受到抑制。"}],
            [{en:"Lipases",ja:"リパーゼ",zh:"脂肪酶"},"脂肪分解酵素",
             {en:"Fats",ja:"脂質",zh:"脂質"},
             {en:"Fatty acids — aroma precursors, and in excess a suppressor of ginjō esters. Matters most where the substrate is oily, as in soy sauce made with wheat and soybean.",ja:"脂肪酸——香りの前駆体であり、過剰であれば吟醸香のエステルを抑える。小麦と大豆を用いる醤油のように、基質が油分を含む場合に最も効いてくる。",zh:"脂肪酸——香氣前驅物，過量則抑制吟釀酯類。在基質含油時（如以小麥與大豆製作的醬油）影響最大。"}]
          ] },
        { t:"p", text:{
          en:"The brewer's control over which enzymes dominate comes almost entirely from how the kōji room is run: a warm, dry, fast kōji favours amylase and gives a clean sugary result; a cooler, wetter, longer one favours protease and gives more amino acid and more weight. This single lever explains a great deal of the difference between a crisp daiginjō and a broad, savoury kimoto junmai.",
          ja:"どの酵素が優勢になるかを造り手が操るのは、ほぼすべて麹室の運び方による。温かく乾いた、速い麹はアミラーゼに傾き、清らかで糖の多い結果を生む。より低温で湿った、長い麹はプロテアーゼに傾き、アミノ酸と厚みを増す。この一つのてこが、締まった大吟醸と、広く旨味のある生酛純米との違いの多くを説明する。",
          zh:"釀造者對「哪種酵素占上風」的掌控，幾乎全來自麴室的操作方式：溫暖、乾燥、快速的製麴偏向澱粉酶，得到潔淨而多糖的結果；較低溫、較潮濕、時間較長者則偏向蛋白酶，帶來更多胺基酸與重量。這一根槓桿，就解釋了俐落的大吟釀與開闊帶旨味的生酛純米之間的大半差異。" } }
      ]
    },

    { t:"section", id:"amazake",
      title:{ en:"Amazake, and the two things called by that name", ja:"甘酒——同じ名の二つのもの", zh:"甘酒：同名的兩種東西" }, jp:"甘酒",
      body:[
        { t:"compare", cols:2, items:[
          { title:{en:"Kōji amazake",ja:"麹甘酒",zh:"麴甘酒"}, jp:"米と麹だけ",
            text:{en:"Rice and kōji held at about 55–60°C for six to ten hours. The amylases convert starch to glucose and the result is intensely sweet with no sugar added and no alcohol at all — typically 15–20% sugar by weight, all of it made by the mould. Thick, cloudy, faintly grainy, and the version that is drunk as a health food and given to children.",
              ja:"米と麹を55〜60度で六時間から十時間保つ。アミラーゼが澱粉をブドウ糖に変え、砂糖を加えずアルコールも含まないまま、強く甘いものができる。重量比でおおむね15〜20%の糖であり、そのすべてを菌が作る。とろりと濁り、かすかに粒を感じさせる。健康のために飲まれ、子どもにも与えられるのはこちらである。",
              zh:"把米與麴維持在約 55–60°C 六到十小時。澱粉酶將澱粉轉為葡萄糖，於是在不加糖、也完全不含酒精的情況下產生濃烈的甜味——通常重量比 15–20% 為糖，全數由菌所製。濃稠、混濁、略帶顆粒感；作為健康飲品飲用、也給孩童喝的正是這一種。"} },
          { title:{en:"Kasu amazake",ja:"粕甘酒",zh:"粕甘酒"}, jp:"酒粕と砂糖",
            text:{en:"Sake lees dissolved in hot water with added sugar. Quick, cheap, and mildly alcoholic — five to nine per cent alcohol in the lees means the finished drink is not alcohol-free. This is the version sold at winter festivals and shrine grounds, and the reason the two must not be confused.",
              ja:"酒粕を湯に溶き、砂糖を加えたもの。手早く安価だが、粕には5〜9%のアルコールが残るため、仕上がった飲み物も無アルコールではない。冬の祭や社頭で売られるのはこちらであり、二つを混同してはならない理由がここにある。",
              zh:"把酒粕溶於熱水並加糖。快速、便宜，且帶些微酒精——酒粕含 5–9% 酒精，意味著成品並非無酒精。冬季祭典與神社境內販售的正是這一種，而這也是兩者絕不可混淆的理由。"} }
        ] },
        { t:"p", text:{
          en:"Amazake is an old summer drink, not a winter one — it appears as a summer season word in classical poetry, and was sold cold from carts in Edo as a restorative in the heat. The modern association with New Year and with shrine visits is a later inversion. Its recent popularity in Japan rests on the kōji version's profile of glucose, amino acids and B vitamins, which is genuinely close to the composition of a rehydration drink, and which is why it is sometimes called a drinkable drip.",
          ja:"甘酒は本来、冬ではなく夏の飲み物である。古典の詩歌では夏の季語であり、江戸では暑気払いとして屋台から冷やして売られていた。正月や初詣との結びつきは、のちの逆転である。近年の人気は麹甘酒の成分——ブドウ糖、アミノ酸、ビタミンB群——に拠っており、それは経口補水の飲料の組成に実際に近い。「飲む点滴」と呼ばれることがあるのはそのためである。",
          zh:"甘酒本是夏日飲品而非冬日飲品——在古典詩歌中它是夏之季語，江戶時期更以推車冰鎮販售，作為消暑之用。與新年及初詣的關聯，是後來的顛倒。它近年在日本走紅，靠的是麴甘酒的成分組合——葡萄糖、胺基酸與 B 群維生素——確實接近口服補水飲料的組成，這也是它有時被稱為「可以喝的點滴」的原因。" } }
      ]
    },

    { t:"section", id:"kitchen",
      title:{ en:"Kōji in the modern kitchen", ja:"現代の台所の麹", zh:"現代廚房裡的麴" }, jp:"塩麹と世界",
      body:[
        { t:"defs", items:[
          { term:{en:"Shio-kōji",ja:"塩麹",zh:"鹽麴"}, jp:"塩麹", romaji:"shio-kōji",
            def:{en:"Kōji, salt and water left to ferment for a week or two into a thick savoury paste. An old regional preserving medium from Tōhoku that became a nationwide phenomenon around 2011–12 and never entirely went away. Used as a marinade, it tenderises protein and adds glutamate — a natural, slow version of what a commercial tenderiser does chemically.",
              ja:"麹と塩と水を一、二週間発酵させ、とろりとした旨味の塊にしたもの。東北の古い保存の媒体であったが、二〇一一年から一二年にかけて全国的な現象となり、その後も完全には去っていない。漬け床として用いれば、たんぱく質を柔らかくし、グルタミン酸を加える。市販の軟化剤が化学的に行うことの、自然で緩やかな版である。",
              zh:"把麴、鹽與水發酵一到兩週，成為濃稠而帶旨味的糊狀物。原是東北古老的保存介質，於 2011–12 年間成為全國現象，此後也未完全退場。作為醃料使用時，它能軟化蛋白質並增添麩胺酸——是市售嫩肉劑以化學方式所做之事的天然緩慢版本。"} },
          { term:{en:"Shōyu-kōji",ja:"醤油麹",zh:"醬油麴"}, jp:"醤油麹",
            def:{en:"The same idea with soy sauce in place of salt water. Darker, more savoury, and useful anywhere a dish wants depth without more salt.",
              ja:"同じ考え方を、塩水ではなく醤油で行うもの。より濃く旨味が強く、塩を増やさずに奥行きを足したい料理に有用である。",
              zh:"同樣的作法，只是以醬油取代鹽水。顏色更深、旨味更強，適合任何想增添深度卻不想再加鹽的料理。"} },
          { term:{en:"Kōji outside Japan",ja:"日本の外の麹",zh:"日本以外的麴"}, jp:"世界の厨房",
            def:{en:"Since the mid-2010s kōji has become a standard tool in ambitious Western kitchens: curing meat, accelerating charcuterie, making garums from unlikely proteins, and building umami in vegetarian cooking. The technical reason is simple — <em>Aspergillus oryzae</em> is a safe, well-characterised, food-grade protease factory, and nothing in the European tradition does the same job.",
              ja:"二〇一〇年代半ば以降、麹は野心的な西洋の厨房における標準的な道具となった。肉を熟成させ、シャルキュトリを速め、思いがけない蛋白質からガルムを作り、菜食の料理に旨味を組み立てる。技術的な理由は単純である——<em>Aspergillus oryzae</em> は安全でよく特徴づけられた食品用のプロテアーゼ工場であり、ヨーロッパの伝統に同じ仕事をするものは存在しない。",
              zh:"自 2010 年代中期起，麴已成為企圖心強的西方廚房中的標準工具：熟成肉品、加速熟肉製作、以意想不到的蛋白質製作魚醬，並在素食料理中建構旨味。技術理由很單純——<em>Aspergillus oryzae</em> 是一座安全、特性明確、食品級的蛋白酶工廠，而歐洲傳統中沒有任何東西能做同樣的事。"} },
          { term:{en:"Making it at home",ja:"家で作る",zh:"在家製作"}, jp:"入手と扱い",
            def:{en:"Dried rice kōji is sold in vacuum packs, keeps for months in a freezer, and needs only a container and a stable warm temperature. A rice cooker on “keep warm” with the lid ajar holds close enough to 60°C for amazake; shio-kōji needs nothing but a jar on the counter and a daily stir.",
              ja:"乾燥した米麹は真空包装で売られ、冷凍庫で数か月もち、容器と安定した温かさがあればよい。炊飯器を保温にして蓋を少し開けておけば、甘酒に十分な60度前後を保てる。塩麹に必要なのは、台所に置いた瓶と、日に一度かき混ぜることだけである。",
              zh:"乾燥米麴以真空包裝販售，冷凍可保存數月，只需要一個容器與穩定的溫暖環境。電子鍋開保溫、鍋蓋略掀，即可維持接近 60°C，足以做甘酒；鹽麴則只需要一個放在檯面上的罐子，以及每天攪拌一次。"} }
        ] }
      ]
    },

{ t:"section", id:"domesticated",
      title:{ en:"A domesticated organism", ja:"家畜化された生物", zh:"一種被馴化的生物" }, jp:"国菌",
      body:[
        { t:"p", text:{
          en:"Aspergillus oryzae is not a wild fungus that Japan happens to use. It is closer to a crop: a lineage selected over a very long period for traits that suit a brewer and are of no use to a mould in a field, to the point where it can no longer live properly outside human care.",
          ja:"ニホンコウジカビは、日本がたまたま用いている野生の菌ではない。むしろ作物に近い——きわめて長い期間にわたり、造り手に適し、野にあるカビには何の役にも立たぬ形質のために選抜されてきた系統であり、その結果、人の手を離れてはもはやまともに生きられないところまで来ている。",
          zh:"米麴菌並不是日本恰好拿來使用的一種野生真菌。它更接近一種作物：一個在極漫長的時間裡，為了適合釀造者、卻對野地裡的黴菌毫無用處的性狀而被篩選出來的譜系——選到它已無法在脫離人類照料的情況下好好活著。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"The genome", ja:"ゲノム", zh:"基因體" }, jp:"2005年",
            v:{ en:"37 Mb, eight chromosomes", ja:"3700万塩基対・八本の染色体", zh:"3700 萬鹼基對、八條染色體" },
            d:{ en:"Sequenced by a consortium of nineteen Japanese institutions and published in December 2005 — the first genome of a kōji mould, and about twelve thousand genes. It showed an unusually large complement of secreted enzyme genes compared with its wild relatives, which is exactly what a lineage bred for saccharifying rice would be expected to carry.",
              ja:"国内十九機関の共同事業により解読され、平成十七年（2005）十二月に公表された。麹菌として最初のゲノムであり、およそ一万二千の遺伝子を持つ。野生の近縁種に比して分泌酵素の遺伝子が異例に多いことが示された。米を糖化するために育てられた系統が持つと予期される、まさにそのものである。",
              zh:"由日本十九個機構組成的聯合團隊定序，於二〇〇五年十二月發表——這是麴菌的第一個基因體，約有一萬兩千個基因。結果顯示，相較於野生近親，它擁有異常龐大的分泌型酵素基因群——這正是一個為糖化稻米而被培育的譜系所該具備的。" } },
          { k:{ en:"The wild cousin", ja:"野生の従兄弟", zh:"野生的表親" }, jp:"A. flavus",
            v:{ en:"Aflatoxin, and its absence", ja:"アフラトキシンと、その不在", zh:"黃麴毒素，以及它的缺席" },
            d:{ en:"A. oryzae is genetically very close to <em>Aspergillus flavus</em>, a serious agricultural pathogen that produces aflatoxin, one of the most potent natural carcinogens known. The question of whether the kōji mould could do the same was investigated seriously and answered negatively: it does not produce aflatoxin. The leading hypothesis is that A. oryzae is a domesticated, non-toxin-producing lineage of A. flavus — a mould that was, in effect, tamed.",
              ja:"ニホンコウジカビは、アフラトキシン——知られる限り最も強力な天然の発癌物質の一つ——を生産する重大な農業病原菌、Aspergillus flavusと遺伝的にきわめて近い。麹菌が同じことをなしうるかという問いは真剣に調べられ、否と答えられた。アフラトキシンを生産しないのである。有力な仮説は、ニホンコウジカビがA. flavusの家畜化された、毒素を作らない系統であるというものである。事実上、飼い慣らされたカビである。",
              zh:"米麴菌在遺傳上與 Aspergillus flavus 極為接近——後者是一種嚴重的農業病原菌，會產生黃麴毒素，是已知最強效的天然致癌物之一。麴菌是否也會如此，曾被認真研究並得到否定的答案：它不產生黃麴毒素。主流假說是：米麴菌是 A. flavus 被馴化、不產毒素的一支譜系——實質上，是一種被馴服的黴菌。" } },
          { k:{ en:"The national fungus", ja:"国菌", zh:"國菌" }, jp:"2006年10月12日",
            v:{ en:"A formal designation", ja:"正式な認定", zh:"正式認定" },
            d:{ en:"Proposed in 2004 by the Tōhoku University enzymologist Ichijima Eiji and formally recognised by the Brewing Society of Japan on 12 October 2006. No other country has designated a national micro-organism. It is a small thing and a revealing one: it treats a mould as cultural infrastructure rather than as a tool.",
              ja:"平成十六年（2004）に東北大学の酵素学者・一島英治が提唱し、平成十八年（2006）十月十二日に日本醸造学会が正式に認定した。国の微生物を定めた国は他にない。小さなことでありながら、多くを明かす——カビを道具としてではなく、文化の基盤として扱っているのである。",
              zh:"二〇〇四年由東北大學的酵素學者一島英治提議，二〇〇六年十月十二日經日本釀造學會正式認定。沒有其他國家指定過國家級的微生物。這是一件小事，卻很說明問題：它把一種黴菌視為文化基礎設施，而非工具。" } },
          { k:{ en:"What it cannot do", ja:"できないこと", zh:"它做不到的事" }, jp:"限界",
            v:{ en:"It needs us", ja:"人を要する", zh:"它需要我們" },
            d:{ en:"Domesticated strains produce spores poorly, compete badly with wild fungi, and depend on steamed, cooled, humidified substrate prepared by someone else. Left in a field they lose. This is the same bargain wheat and cattle made, and the same one the kōji mould has made with the people who have been propagating it, by hand, for a thousand years.",
              ja:"家畜化された株は胞子の形成が弱く、野生の菌との競争に劣り、誰かが用意した蒸され、冷まされ、湿度を与えられた基質に依存する。野に置かれれば負ける。それは麦や牛が結んだのと同じ取引であり、麹菌が、千年にわたり手ずからそれを継いできた人々と結んだのと同じ取引である。",
              zh:"被馴化的菌株產孢能力弱、與野生真菌競爭時居於劣勢，且仰賴他人備妥的蒸熟、冷卻、加濕基質。放到野地裡，它會輸。這與小麥和牛所簽下的是同一份契約；也是麴菌與那些用雙手繁衍它、繁衍了一千年的人們所簽下的同一份契約。" } }
        ] }
      ] },

    { t:"section", id:"enzymes-detail",
      title:{ en:"The four enzymes that matter", ja:"効く四つの酵素", zh:"真正起作用的四種酵素" }, jp:"酵素の役割",
      body:[
        { t:"p", text:{
          en:"Kōji secretes dozens of enzymes; four of them account for nearly everything the mould contributes to a finished food or drink, and the balance between them is what a kōji maker is actually controlling when adjusting temperature and humidity.",
          ja:"麹は数十の酵素を分泌するが、そのうち四つが、出来上がった食品や飲料へ菌が与えるもののほぼすべてを担う。そしてその均衡こそ、麹を作る者が温度と湿度を加減するとき、実際に制御しているものである。",
          zh:"麴會分泌數十種酵素，其中四種幾乎承擔了這種黴菌對成品食物或飲料的全部貢獻；而製麴者在調整溫度與濕度時，真正在控制的，正是這四者之間的平衡。" } },

        { t:"table",
          cols:[{en:"Enzyme",ja:"酵素",zh:"酵素"},{en:"Japanese",ja:"和名",zh:"日文"},{en:"Acts on",ja:"作用対象",zh:"作用對象"},{en:"Result, and where it matters",ja:"結果と、それが効く場所",zh:"結果，以及在何處起作用"}],
          jpCols:[1],
          rows:[
            [{en:"α-amylase",ja:"α-アミラーゼ",zh:"α-澱粉酶"},"液化酵素",
             {en:"Starch chains, internally",ja:"澱粉の鎖を内側から",zh:"澱粉鏈的內部"},
             {en:"Cuts long starch molecules into shorter fragments, liquefying the mash. Without it a mash stays thick and the second enzyme has nothing to work on. This is the enzyme that makes steamed rice dissolve.",
              ja:"長い澱粉の分子を短い断片へ切り、醪を液化する。これなくして醪は固いままであり、次の酵素は働く相手を持たない。蒸米を溶かすのはこの酵素である。",
              zh:"把長鏈澱粉分子切成較短的片段，使醪液化。少了它，醪會維持濃稠，第二種酵素也就無從作用。讓蒸米溶解的，正是這個酵素。"}],
            [{en:"Glucoamylase",ja:"グルコアミラーゼ",zh:"葡萄糖澱粉酶"},"糖化酵素",
             {en:"Starch fragments, from the ends",ja:"澱粉の断片を末端から",zh:"澱粉片段的末端"},
             {en:"Releases glucose one molecule at a time, and is therefore what actually feeds the yeast. Its slow, steady output is why sake can ferment to twenty per cent: the sugar never accumulates enough to inhibit the yeast, because it is being produced only as fast as the yeast consumes it.",
              ja:"ブドウ糖を一分子ずつ放ち、ゆえに酵母を実際に養うのはこれである。その遅く着実な産出こそが、日本酒が二十パーセントまで発酵しうる理由である。糖が酵母を阻害するほど溜まることがない。酵母が消費するのと同じ速さでしか作られないからである。",
              zh:"一次釋放一個葡萄糖分子，因此真正餵養酵母的就是它。其緩慢而穩定的產出，正是清酒能發酵到二十個百分點的原因：糖永遠累積不到會抑制酵母的濃度，因為它的生成速度只跟得上酵母的消耗速度。"}],
            [{en:"Acid protease",ja:"酸性プロテアーゼ",zh:"酸性蛋白酶"},"蛋白分解酵素",
             {en:"Rice protein",ja:"米のたんぱく質",zh:"米的蛋白質"},
             {en:"Breaks protein into peptides. Essential in miso and soy sauce, where the whole point is protein breakdown; in sake it must be kept in check, because too much of it produces the amino acids that make a sake heavy and coarse. Cold kōji-making favours the amylases over this one, which is the technical basis of ginjō.",
              ja:"たんぱく質をペプチドへ分解する。分解そのものが眼目である味噌と醤油では不可欠であり、日本酒では抑えねばならない。過ぎれば、酒を重く粗くするアミノ酸を生むからである。低温の製麹はこの酵素よりアミラーゼを優先させる。それが吟醸の技術的な基礎である。",
              zh:"把蛋白質分解為胜肽。在味噌與醬油中不可或缺，因為分解蛋白質正是其全部重點；在清酒中則必須加以抑制，因為過量會產生讓酒變得沉重粗糙的胺基酸。低溫製麴會讓澱粉酶勝過這個酵素——那正是吟釀的技術基礎。"}],
            [{en:"Acid carboxypeptidase",ja:"酸性カルボキシペプチダーゼ",zh:"酸性羧肽酶"},"ペプチド分解酵素",
             {en:"Peptides",ja:"ペプチド",zh:"胜肽"},
             {en:"Trims peptides down to free amino acids — glutamate above all. This is the enzyme that puts umami into miso, soy sauce and, in smaller measure, sake. The savoury depth of a low-polished junmai is largely this enzyme's work on protein that a daiginjō had already milled away.",
              ja:"ペプチドを遊離アミノ酸へと削ぎ落とす。何よりグルタミン酸である。味噌と醤油に、そしてより小さな度合いで日本酒に旨味を置くのはこの酵素である。精米歩合の高い純米の旨味の奥行きは、大吟醸ならすでに削り落としていたたんぱく質に対する、この酵素の仕事の産物である。",
              zh:"把胜肽修剪為游離胺基酸——尤以麩胺酸為主。為味噌、醬油，以及在較小程度上為清酒賦予旨味的，就是這個酵素。低精米度純米那份旨味的深度，大半是這個酵素作用於「大吟釀早已磨去的那些蛋白質」的成果。"}]
          ] },

        { t:"panel", title:{ en:"One mould, four foods, four settings", ja:"一つの菌、四つの食品、四つの設定", zh:"一種黴菌，四種食品，四種設定" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Sake</strong> wants amylase and as little protease as it can get away with: cool kōji, short cycle, dry finish.",
                ja:"<strong>日本酒</strong>はアミラーゼを求め、プロテアーゼは可能な限り抑える——低い温度、短い周期、乾いた仕上がり。",
                zh:"<strong>清酒</strong>要的是澱粉酶，而蛋白酶能少則少：低溫麴、短週期、乾燥的收尾。" },
              { en:"<strong>Miso</strong> wants both, with plenty of protease to work on soybean protein over months of salt-slowed maturation.",
                ja:"<strong>味噌</strong>は双方を求める。塩で緩められた数か月の熟成のあいだ、大豆のたんぱく質に働くプロテアーゼが潤沢に要る。",
                zh:"<strong>味噌</strong>兩者都要，並需要充足的蛋白酶，在鹽分減緩的數月熟成中作用於大豆蛋白。" },
              { en:"<strong>Soy sauce</strong> wants protease above everything, and uses a different mould species alongside A. oryzae to get it.",
                ja:"<strong>醤油</strong>は何よりプロテアーゼを求め、そのためにニホンコウジカビと並んで別種の菌をも用いる。",
                zh:"<strong>醬油</strong>最看重蛋白酶，並為此在米麴菌之外並用另一個菌種。" },
              { en:"<strong>Amazake</strong> wants glucoamylase alone, held at around 55–60 °C for several hours — hot enough to run the enzyme fast and to kill everything that would ferment the sugar it makes.",
                ja:"<strong>甘酒</strong>はグルコアミラーゼのみを求め、55〜60℃前後で数時間保たれる。酵素を速く働かせるに十分に熱く、そして作られた糖を発酵させうるすべてを殺すに十分に熱い。",
                zh:"<strong>甘酒</strong>只要葡萄糖澱粉酶，維持在約 55–60 °C 數小時——熱到足以讓酵素快速作用，也熱到足以殺死一切會把它產生的糖拿去發酵的東西。" }
            ] }
          ] }
      ] },

    { t:"related", items:[
      { href:"koji.html", why:{ en:"The same mould as the brewery uses it.", ja:"蔵が用いるままの、同じ麹。", zh:"同一種麴，在酒藏裡的用法。" } },
      { href:"mirin.html", why:{ en:"What the mould does when the yeast is kept out.", ja:"酵母を締め出したとき、麹がなすこと。", zh:"把酵母擋在外面之後，麴會做什麼。" } },
      { href:"shochu.html", why:{ en:"The black and white strains, and why the south needed them.", ja:"黒と白の株と、南がそれを要した理由。", zh:"黑麴與白麴，以及南方為何需要它們。" } },
      { href:"compare.html", why:{ en:"The Chinese and Korean starters, side by side.", ja:"中国と韓国の麹を、並べて。", zh:"中國與韓國的酒麴，並排比較。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- shochu */
SAKE.pages["shochu"] = {
  kicker: { en: "Wider world · 02", ja: "周辺 · 02", zh: "周邊 · 02" },
  title:  { en: "Shōchū and Awamori", ja: "焼酎と泡盛", zh: "燒酎與泡盛" },
  jp: "もう一つの麹の酒",
  lede: {
    en: "Japan has two great kōji drinks, and most writing in English treats only one of them. Shōchū is what happens when the same mould, the same knowledge and often the same crew are pointed at a still instead of a press, and awamori — older than sake as we now make it — is the southern branch that never adopted the northern mould at all. This page is about the other half of the family: how the two are made, why the south had to invent a different kōji, what the four protected regions actually require, and why the oldest continuously aged spirits in Japan are in Okinawa.",
    ja: "日本には二つの偉大な麹の酒があり、英語で書かれたもののほとんどはその一方のみを扱う。焼酎とは、同じ黴と、同じ知と、しばしば同じ組の手が、槽ではなく蒸留器へ向けられたときに起こることである。そして泡盛は——今日われわれが造る形の清酒より古い——北の黴をついぞ採らなかった南の枝である。この頁は一族のもう半分についてである。二つがいかに造られるか、南がなぜ異なる麹を編み出さねばならなかったか、四つの守られた産地が実際に何を求めるか、そして日本において最も長く途切れず熟成されてきた酒がなぜ沖縄にあるのか。",
    zh: "日本有兩種偉大的麴之酒，而多數英文書寫只談其中一種。燒酎，就是當同一種黴、同一套知識、往往還有同一批人手，被指向蒸餾器而非壓搾機時所發生的事；而泡盛——比我們今日所釀形態的清酒更古老——則是那個從未採用北方黴菌的南方分枝。本頁談的是這個家族的另一半：這兩者如何釀造、南方為何必須發明一種不同的麴、四個受保護產地實際上要求什麼，以及為什麼日本持續熟成時間最久的酒在沖繩。"
  },
  body: [

    { t:"section", id:"divide",
      title:{ en:"One mould, two destinations", ja:"一つの黴、二つの行き先", zh:"一種黴，兩個去處" }, jp:"醸造と蒸留",
      body:[
        { t:"p", text:{
          en:"Everything up to the end of fermentation is the same craft. Rice or another starch is steamed, kōji is grown on part of it, the kōji's enzymes convert starch to sugar, yeast converts sugar to alcohol, and a brewer manages temperature for two to three weeks. Sake then goes to a press and stops. Shōchū goes to a still.",
          ja:"醗酵の終わりまでのすべては同じ技である。米あるいは他の澱粉が蒸され、その一部に麹が育てられ、麹の酵素が澱粉を糖に変え、酵母が糖を酒精に変え、そして造り手が二週から三週のあいだ温度を司る。そののち清酒は槽へ行き、そこで止まる。焼酎は蒸留器へ行く。",
          zh:"直到發酵結束為止，兩者是同一門技藝。把米或其他澱粉蒸熟、在其中一部分上培養麴、由麴的酵素把澱粉轉為糖、由酵母把糖轉為酒精，釀酒人管理溫度兩到三週。之後，清酒送去壓搾，然後停下。燒酎則送進蒸餾器。" } },

        { t:"figure",
          caption:{
            en:"The kōji family after fermentation splits. The strain of mould is the first branch and it is not a small one: yellow kōji makes almost no acid of its own, while the black and white strains flood the mash with citric acid.",
            ja:"醗酵ののちに分かれる麹の一族。黴の系統が最初の枝であり、それは小さな枝ではない。黄麹はほとんど自ら酸を生まず、黒と白の系統は醪をクエン酸で満たす。",
            zh:"發酵之後分岔的麴之家族。黴菌的菌系是第一個分枝，而那不是個小分枝：黃麴幾乎不自行產酸，黑麴與白麴則讓醪充滿檸檬酸。" },
          svg: function (lang, L) {
            var W = 760, H = 330;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* root */
            s += '<rect x="24" y="140" width="128" height="46" fill="#EDE5D2" stroke="#CDC6B9"/>';
            s += '<text x="88" y="162" text-anchor="middle" font-size="13" fill="#201E1B">' +
                 (lang === "en" ? "Kōji" : lang === "ja" ? "麹" : "麴") + '</text>';
            s += '<text x="88" y="177" text-anchor="middle" font-size="9.5" fill="#8B857C">Aspergillus</text>';
            var branches = [
              { y: 44, name:{ en:"Yellow kōji", ja:"黄麹", zh:"黃麴" }, sp:"A. oryzae",
                acid:{ en:"almost no acid of its own", ja:"自らはほとんど酸を生まぬ", zh:"自身幾乎不產酸" },
                outs:[ { n:{ en:"Sake", ja:"清酒", zh:"清酒" }, d:{ en:"pressed, not distilled", ja:"搾られ、蒸されぬ", zh:"壓搾，不蒸餾" } },
                       { n:{ en:"Some barley shōchū", ja:"一部の麦焼酎", zh:"部分麥燒酎" }, d:{ en:"light, aromatic", ja:"軽く香り高い", zh:"輕盈芳香" } } ] },
              { y: 152, name:{ en:"White kōji", ja:"白麹", zh:"白麴" }, sp:"A. kawachii",
                acid:{ en:"citric acid, mild", ja:"クエン酸、穏やか", zh:"檸檬酸，溫和" },
                outs:[ { n:{ en:"Most sweet-potato shōchū", ja:"芋焼酎の多く", zh:"多數芋燒酎" }, d:{ en:"clean, sweet, fruity", ja:"清く甘く果実的", zh:"乾淨、帶甜、果香" } },
                       { n:{ en:"Barley and rice shōchū", ja:"麦・米焼酎の多く", zh:"多數麥、米燒酎" }, d:{ en:"today\u2019s mainstream", ja:"今日の主流", zh:"當代主流" } } ] },
              { y: 250, name:{ en:"Black kōji", ja:"黒麹", zh:"黑麴" }, sp:"A. luchuensis",
                acid:{ en:"citric acid, abundant", ja:"クエン酸、豊か", zh:"檸檬酸，豐沛" },
                outs:[ { n:{ en:"Awamori", ja:"泡盛", zh:"泡盛" }, d:{ en:"all-kōji mash, Okinawa", ja:"全麹仕込み、沖縄", zh:"全麴仕込，沖繩" } },
                       { n:{ en:"Robust shōchū", ja:"力強い焼酎", zh:"厚重的燒酎" }, d:{ en:"deeper, heavier", ja:"より深く重い", zh:"更深沉厚重" } } ] }
            ];
            for (var i = 0; i < branches.length; i++) {
              var b = branches[i], y = b.y;
              s += '<path d="M152 163 C 196 163, 196 ' + (y + 23) + ', 232 ' + (y + 23) + '" fill="none" stroke="#B4AC9C"/>';
              s += '<rect x="232" y="' + y + '" width="150" height="46" fill="#F5F3ED" stroke="#CDC6B9"/>';
              s += '<text x="242" y="' + (y + 20) + '" font-size="12.5" fill="#201E1B">' + L(b.name) + '</text>';
              s += '<text x="242" y="' + (y + 35) + '" font-size="9" fill="#8B857C" font-style="italic">' + b.sp + '</text>';
              s += '<text x="392" y="' + (y + 12) + '" font-size="9.5" fill="#7C6B52">' + L(b.acid) + '</text>';
              for (var j = 0; j < b.outs.length; j++) {
                var o = b.outs[j], oy = y - 4 + j * 26;
                s += '<line x1="382" y1="' + (y + 23) + '" x2="' + 470 + '" y2="' + (oy + 22) + '" stroke="#E1DCD2"/>';
                s += '<rect x="' + 468 + '" y="' + (oy + 19) + '" width="5" height="5" fill="#7C6B52"/>';
                s += '<text x="482" y="' + (oy + 26) + '" font-size="11.5" fill="#201E1B">' + L(o.n) + '</text>';
                s += '<text x="' + (W - 18) + '" y="' + (oy + 26) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + L(o.d) + '</text>';
              }
            }
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Kōrui — the industrial column", ja:"甲類——連続式", zh:"甲類——連續式" }, jp:"甲類焼酎", romaji:"kōrui",
            def:{ en:"Distilled repeatedly in a continuous column and legally capped at thirty-six per cent alcohol. The result is deliberately neutral — the point is a clean spirit for highballs, chūhai and infusions rather than a spirit with a flavour of its own. It is enormous by volume and almost invisible in the literature.",
              ja:"連続式の塔で繰り返し蒸され、法により三十六度に上限を置かれる。その結果は意図して中性である。要は、自らの味をもつ酒ではなく、ハイボールや酎ハイや漬け込みのための清らかな酒精である。量においては巨大であり、書きものにおいてはほとんど見えない。",
              zh:"在連續式蒸餾塔中反覆蒸餾，法律上限為三十六度。成品刻意保持中性——重點是給高球、沙瓦與浸泡酒用的乾淨基酒，而不是一款有自己風味的酒。它在銷量上龐大，在文獻中卻幾乎不可見。" } },
          { term:{ en:"Otsurui — the single distillation", ja:"乙類——単式蒸留", zh:"乙類——單式蒸餾" }, jp:"本格焼酎", romaji:"honkaku shōchū",
            def:{ en:"Distilled once in a pot still and capped at forty-five per cent. A single pass carries the character of the raw material through, which is the whole point; the trade name honkaku — \"authentic\" — was adopted precisely to distinguish it from the column spirit. Almost everything discussed on this page is otsurui.",
              ja:"単式の蒸留器で一度蒸され、四十五度に上限を置かれる。一度の通しは原料の性格をそのまま運ぶ。それこそが要である。本格という呼び名は、まさしく塔の酒精と分かつために採られた。この頁で論ぜられるほとんどすべては乙類である。",
              zh:"以壺式蒸餾器單次蒸餾，上限四十五度。單次通過會把原料的個性完整帶過來，而那正是重點；「本格」這個商業名稱之所以被採用，正是為了與塔式基酒區隔。本頁所討論的幾乎一切都屬乙類。" } },
          { term:{ en:"Why the alcohol caps exist", ja:"度数の上限がある理由", zh:"為何存在酒精度上限" }, jp:"酒税法の区分",
            def:{ en:"They are tax boundaries, not quality judgements. The law needs a bright line between a spirit taxed as shōchū and one taxed as a neutral spirit or a liqueur, and the distillation method plus a maximum strength is what draws it. As with sake's special designations, a category that looks like a description of quality is really a description of a tax class.",
              ja:"それらは質の判ではなく税の境である。法は、焼酎として課される酒と、中性の酒精あるいはリキュールとして課される酒とのあいだに明らかな線を要し、蒸留の仕方と度数の上限がそれを引く。清酒の特定名称と同じく、質の記述に見える区分は、実のところ税の階級の記述である。",
              zh:"它們是稅務界線，不是品質判斷。法律需要在「以燒酎課稅的酒」與「以中性酒精或利口酒課稅的酒」之間畫一條明線，而蒸餾方式加上最高酒精度就是那條線。和清酒的特定名稱一樣，一個看起來像品質描述的分類，實際上是稅級的描述。" } }
        ] }
      ] },

    { t:"section", id:"kurokoji",
      title:{ en:"Why the south needed a different mould", ja:"南がなぜ異なる黴を要したか", zh:"南方為何需要一種不同的黴" }, jp:"黒麹と白麹",
      body:[
        { t:"p", text:{
          en:"Sake solves the problem of a defenceless mash with lactic acid — either grown by bacteria over weeks in a kimoto, or poured in from a bottle in the modern method. Both work because northern Japan is cold in winter, and cold buys a slow mash time to acidify. Okinawa and southern Kyūshū are not cold. A mash left open in that climate does not have weeks; it has hours.",
          ja:"清酒は、守りなき醪の問いを乳酸をもって解く。生酛において幾週にわたり菌が育てるか、あるいは今日の法において瓶から注ぎ入れるかである。いずれも働くのは、北の日本が冬に寒いからである。寒さは、遅い醪に酸となる時を買い与える。沖縄と南九州は寒くない。その気候において開かれた醪に週はない。時間があるのみである。",
          zh:"清酒以乳酸解決「毫無防衛的醪」這個問題——或由細菌在生酛中花數週培養出來，或在現代工法裡直接從瓶子倒進去。兩者都能奏效，是因為日本北部的冬天很冷，而寒冷為緩慢的醪買到了酸化所需的時間。沖繩與南九州並不冷。在那樣的氣候裡，一缸敞開的醪沒有數週可用；它只有幾小時。" } },

        { t:"p", text:{
          en:"The southern answer is a mould that makes its own acid. Black kōji floods the mash with citric acid as it grows, dropping the pH far enough and fast enough that nothing unwanted establishes itself. It is the same defensive strategy as kimoto, achieved by a completely different organism, and it is the single most important technical difference between the two halves of the Japanese kōji tradition.",
          ja:"南の答えは、自ら酸を造る黴である。黒麹は育ちながら醪をクエン酸で満たし、望まぬものが根を張らぬだけ深く、速く、酸性度を下げる。それは生酛と同じ守りの策であり、まったく異なる生き物によって成し遂げられている。そしてそれこそ、日本の麹の伝えの二つの半分を分かつ、ただ一つ最も重んじられる技の差である。",
          zh:"南方的答案是一種自己造酸的黴。黑麴在生長的同時讓醪充滿檸檬酸，把 pH 值壓得夠低、夠快，使任何不受歡迎的東西都無法立足。這與生酛是同一套防禦策略，卻由一種完全不同的生物達成；而這正是日本麴傳統這兩半之間，唯一最重要的技術差異。" } },

        { t:"panel", tint:"koji",
          title:{ en:"The white mutant", ja:"白い変異", zh:"那株白色的突變" },
          body:[
            { t:"p", text:{
              en:"In the 1910s and 1920s a tax-office technician named Kawachi Gen'ichirō, working in Kagoshima, isolated and stabilised the black kōji used in Okinawa for use on the mainland, and then found among his cultures a pale mutant that kept the citric acid but was easier to handle and gave a lighter, sweeter spirit. That mutant — white kōji, named for him — is now the dominant strain in shōchū, and the reason most sweet-potato shōchū tastes the way it does. One technician's petri dish set the flavour of a regional industry for a century.",
              ja:"一九一〇年代から二〇年代、鹿児島で働いていた税務の技師、河内源一郎が、沖縄で用いられていた黒麹を分離し本土での使用に安定させ、そののち自らの培養のうちに、クエン酸を保ちながら扱いやすく、より軽く甘い酒を与える淡い変異を見出した。その変異——彼の名を負う白麹——は今や焼酎における支配の系統であり、芋焼酎のほとんどが今の味である理由である。一人の技師の平皿が、一世紀にわたり地方の産業の味を定めた。",
              zh:"一九一〇至二〇年代，在鹿兒島工作的稅務技師河內源一郎，分離並穩定了沖繩所用的黑麴以供本土使用，隨後在自己的培養物中發現一株淡色突變：它保有檸檬酸，卻更好操作，並釀出更輕盈、更甜的酒。那株突變——以他為名的白麴——如今是燒酎界的主流菌系，也是多數芋燒酎嘗起來是那個味道的原因。一位技師的培養皿，決定了一個地方產業一整個世紀的味道。" } }
          ] }
      ] },

{ t:"section", id:"types",
      title:{ en:"What it is made of", ja:"何から造られるか", zh:"用什麼做的" }, jp:"原料",
      body:[
        { t:"p", text:{
          en:"Shōchū is named by its base material, and each material belongs to a place for the ordinary reason that the place grew it. The kōji is almost always made on rice or barley whatever the main ingredient is, because the mould needs a grain to grow on — so a sweet-potato shōchū is rice kōji plus sweet potato, not sweet potato all the way down.",
          ja:"焼酎はその原料によって名づけられ、いずれの原料も、その土地がそれを育てたという当たり前の理由によって土地に属する。主たる原料が何であれ、麹はほとんどつねに米か麦の上に造られる。黴は育つべき穀を要するからである。ゆえに芋焼酎とは、米麹に芋を加えたものであり、最後まで芋であるわけではない。",
          zh:"燒酎以其基底原料命名，而每一種原料屬於某個地方，理由再尋常不過：那個地方種它。不論主原料是什麼，麴幾乎總是做在米或麥上，因為黴需要一種穀物來生長——所以芋燒酎是米麴加上番薯，而不是從頭到尾都是番薯。" } },

        { t:"table",
          caption:{ en:"The main kinds, where they belong, and what they are like", ja:"主な種、その属する地、その姿", zh:"主要種類、所屬產地，以及它們的樣貌" },
          cols:[ { en:"Kind", ja:"種", zh:"種類" }, "",
                 { en:"Home ground", ja:"本場", zh:"主場" },
                 { en:"Character", ja:"性格", zh:"個性" } ],
          jpCols:[1],
          rows:[
            [ { en:"Sweet potato", ja:"芋焼酎", zh:"芋燒酎" }, "芋",
              { en:"Kagoshima, southern Miyazaki", ja:"鹿児島、宮崎南部", zh:"鹿兒島、宮崎南部" },
              { en:"The most distinctive of them all: sweet, floral, faintly earthy, with a body no other base gives. Must be distilled within a day or so of the potatoes being cut, which ties the whole industry to a short autumn season.",
                ja:"すべてのうち最も際立つ。甘く、花めき、かすかに土の香を帯び、他のいかなる原料も与えぬ厚みをもつ。芋が切られてから一日ほどのうちに蒸されねばならず、それが産業全体を短い秋の季に縛る。",
                zh:"所有種類中最有辨識度的：甜、帶花香、隱約的土氣，以及其他任何基底都給不了的酒體。番薯切開後必須在一天左右內蒸餾，這把整個產業綁在一個短促的秋季裡。" } ],
            [ { en:"Barley", ja:"麦焼酎", zh:"麥燒酎" }, "麦",
              { en:"Ōita, Iki (Nagasaki)", ja:"大分、壱岐（長崎）", zh:"大分、壹岐（長崎）" },
              { en:"The gateway: light, clean, faintly toasty, and the easiest of the family for a sake drinker to start with. Ōita's style is very light; Iki's, made with rice kōji at a fixed ratio, is rounder.",
                ja:"入り口である。軽く、清く、かすかに香ばしく、清酒の飲み手が始めるに最も易しい。大分の型はきわめて軽く、定まった比の米麹で造られる壱岐のそれはより丸い。",
                zh:"入門之選：輕盈、乾淨、帶一點烘烤香，是這個家族中最容易讓清酒飲者上手的。大分的風格非常輕；以固定比例米麴釀造的壹岐則更圓潤。" } ],
            [ { en:"Rice", ja:"米焼酎", zh:"米燒酎" }, "米",
              { en:"Kuma basin, Kumamoto", ja:"熊本・球磨盆地", zh:"熊本・球磨盆地" },
              { en:"Closest to sake of anything here, because it is the same raw material distilled. Delicate, grainy, often aged; the local way of drinking it warmed from a flat clay flask is the direct southern cousin of warm sake.",
                ja:"ここにあるいずれよりも清酒に近い。同じ原料が蒸されたものだからである。繊細で、穀の香をもち、しばしば熟成される。平たい土の器から温めて飲む土地の作法は、燗酒の直の南の従兄弟である。",
                zh:"這裡最接近清酒的一種，因為它就是同一種原料被蒸餾。細緻、帶穀香、常經熟成；當地用扁平陶器溫著喝的方式，正是溫酒直系的南方表親。" } ],
            [ { en:"Brown sugar", ja:"黒糖焼酎", zh:"黑糖燒酎" }, "黒糖",
              { en:"Amami islands only", ja:"奄美群島のみ", zh:"僅限奄美群島" },
              { en:"A legal curiosity as well as a drink: brown-sugar shōchū may only be made in the Amami islands, a concession dating from the islands' return to Japanese administration. Made anywhere else the same liquid would be taxed as rum.",
                ja:"飲みものであると同時に法の珍でもある。黒糖焼酎は奄美群島においてのみ造りうる。島々が日本の施政へ復した折の譲りに由来する。他所で造られたならば、同じ液は蒸留酒として課されることとなる。",
                zh:"它既是一種酒，也是一項法律奇觀：黑糖燒酎只能在奄美群島製造，這項特許源自這些島嶼回歸日本施政時的讓步。同樣的液體若在別處製造，就會被當成蘭姆酒課稅。" } ],
            [ { en:"Buckwheat", ja:"そば焼酎", zh:"蕎麥燒酎" }, "蕎麦",
              { en:"Miyazaki highlands", ja:"宮崎の高原", zh:"宮崎高原" },
              { en:"A twentieth-century invention rather than an old tradition, and none the worse for it: dry, nutty, and the natural thing to drink beside soba.",
                ja:"古い伝えではなく二十世紀の発明であり、そのゆえに劣ることはない。辛く、木の実めき、蕎麦のかたわらに飲むに自然なものである。",
                zh:"它是二十世紀的發明而非古老傳統，但絲毫無損：辛口、帶堅果味，是配蕎麥麵時最自然的選擇。" } ],
            [ { en:"Awamori", ja:"泡盛", zh:"泡盛" }, "泡盛",
              { en:"Okinawa", ja:"沖縄", zh:"沖繩" },
              { en:"Its own category. Long-grain Thai indica rice, black kōji, and a mash made entirely of kōji with no separate steamed rice added — the oldest distilling tradition in Japan, and structurally unlike everything above.",
                ja:"それ自体が一つの区分である。長粒のタイ米、黒麹、そして掛米を加えず麹のみで仕込む醪。日本における最も古い蒸留の伝えであり、構えとして上のいずれとも異なる。",
                zh:"它自成一類。長粒的泰國秈米、黑麴，以及完全由麴組成、不另加蒸米的醪——日本最古老的蒸餾傳統，在結構上與上述任何一種都不同。" } ]
          ] }
      ] },

    { t:"section", id:"awamori",
      title:{ en:"Awamori, and the jars", ja:"泡盛と甕", zh:"泡盛與那些甕" }, jp:"泡盛と古酒",
      body:[
        { t:"p", text:{
          en:"Awamori is the oldest distilled spirit in Japan, older than the modern form of sake, and it arrived from the south rather than the north — the Ryūkyū kingdom traded with Siam, and both the still and the long-grain rice came that way. The rice is still Thai indica by preference, not out of nostalgia but because long-grain rice takes black kōji well and holds its shape through an all-kōji mash.",
          ja:"泡盛は日本における最も古い蒸留の酒であり、今日の形の清酒より古く、そして北からではなく南から来た。琉球の王国は暹羅と商いをなし、蒸留器も長粒の米もその道を通って来た。米は今なお好んでタイの秈米である。懐かしさゆえではなく、長粒の米が黒麹をよく受け、全麹の仕込みを通じてその形を保つからである。",
          zh:"泡盛是日本最古老的蒸餾酒，比現代形態的清酒更早，而且它是從南方而非北方傳來的——琉球王國與暹羅通商，蒸餾器與長粒米都是循這條路來的。至今泡盛仍偏好使用泰國秈米，這不是出於懷舊，而是因為長粒米很能承接黑麴，並能在全麴仕込中保持形狀。" } },

        { t:"p", text:{
          en:"The all-kōji mash is the technical signature. Sake and mainland shōchū make kōji on part of the rice and add plain steamed rice for the rest; awamori makes kōji on all of it and ferments that alone. The mash is therefore intensely acidic from the start, ferments cleanly in subtropical heat without refrigeration, and produces a spirit with a texture that thirty years of ageing does interesting things to.",
          ja:"全麹の仕込みこそ技の署名である。清酒と本土の焼酎は米の一部に麹を造り、残りに蒸した米を加える。泡盛はそのすべてに麹を造り、それのみを醗酵させる。ゆえに醪は初めから強く酸性であり、冷やすことなく亜熱帯の熱のなかで清らかに醗酵し、そして三十年の熟成が面白い働きをなす質感の酒を生む。",
          zh:"全麴仕込是它的技術簽名。清酒與本土燒酎在部分米上製麴，其餘加入單純的蒸米；泡盛則在全部的米上製麴，並只讓它發酵。因此醪從一開始就強烈酸化，能在亞熱帶的高溫中不靠冷藏而潔淨地發酵，並產生一種質地——而三十年的熟成會對那種質地做出很有趣的事。" } },

        { t:"defs", items:[
          { term:{ en:"Kūsu — the aged spirit", ja:"古酒（クース）", zh:"古酒（クース）" }, jp:"古酒", romaji:"kūsu",
            def:{ en:"Awamori aged three years or more. Ageing is done in clay jars or, increasingly, in tank, and it does something to awamori that it does to almost no other unoaked spirit: the texture rounds, a vanilla-like sweetness appears without any wood being involved, and the character of the black kōji softens into something closer to a fine aged rum than to any other Japanese drink.",
              ja:"三年以上貯えられた泡盛である。熟成は甕、あるいはますますタンクにおいて行われ、そしてそれは、他のほとんどいかなる樽を用いぬ蒸留酒にもなさぬことを泡盛になす。質感は丸まり、木を一切用いずして香草めいた甘みが現れ、黒麹の性格は、他のいかなる日本の飲みものよりも、良く熟した蒸留酒に近い何かへと和らぐ。",
              zh:"熟成三年以上的泡盛。熟成在陶甕中進行，或日益改用酒槽；而它對泡盛所做的事，是它對幾乎任何其他未過桶烈酒都不會做的：質地變圓潤、在完全沒有木頭參與的情況下出現類似香草的甜味，而黑麴的個性軟化成某種比任何其他日本飲品都更接近優質陳年蘭姆的東西。" } },
          { term:{ en:"Shitsugi — refilling down the row", ja:"仕次ぎ", zh:"仕次" }, jp:"仕次ぎ", romaji:"shitsugi",
            def:{ en:"A household or brewery keeps a row of jars of descending age. Spirit is drawn from the oldest, which is topped up from the next oldest, and so on down the line, with new awamori entering at the young end. Nothing is ever emptied, so the oldest jar contains a fraction of everything ever put into it. It is a solera in all but name, practised in Okinawan homes for generations, and family kūsu older than the war is a real and treasured thing.",
              ja:"家あるいは蔵は、年の下ってゆく甕の列を保つ。酒は最も古い甕から汲まれ、その甕は次に古い甕から満たされ、以下同じく列を下る。新しい泡盛は若い端から入る。いずれの甕も空にされぬゆえ、最も古い甕は、これまでそこに入れられたすべての一部を含む。名を除けばソレラであり、沖縄の家々において幾世代にわたり行われてきた。戦より古い家の古酒は、実在し、そして尊ばれる。",
              zh:"一戶人家或一家酒藏會保有一列年份遞降的酒甕。酒從最老的那甕取出，再由次老的那甕補滿，如此沿著這列往下，新的泡盛則從最年輕的一端進來。沒有任何一甕會被倒空，因此最老的那甕含有曾經放進去的一切的一小部分。除了名字之外它就是索雷拉（solera），在沖繩人家中已行之數代；比戰爭更古老的家藏古酒，是真實存在且被珍視的東西。" } },
          { term:{ en:"The 2015 rule", ja:"二〇一五年の定め", zh:"二〇一五年的規定" }, jp:"古酒表示基準",
            def:{ en:"Until 2015 a bottle could be labelled kūsu if a bare majority — more than half — of its contents were three years old. From 1 August 2015 the whole contents must be, a blend must be labelled with the age of its youngest aged component, and anything containing between ten per cent and all aged spirit must state the percentage. A labelling reform that quietly made a whole category honest.",
              ja:"二〇一五年まで、瓶は、その中身の過半——半ばを超える分——が三年を経ていれば古酒と名乗りえた。二〇一五年八月一日より、中身のすべてがそうでなければならず、調合されたものは、その最も新しい古酒の年数をもって表示され、一割以上を含むものはその割合を述べねばならない。一つの区分を静かに正直にした、表示の改めである。",
              zh:"在二〇一五年之前，只要瓶中內容物有過半——超過一半——滿三年，就可以標示為古酒。自二〇一五年八月一日起，必須全量皆滿三年；調合品必須以其中最年輕的古酒年數標示；而含有一成以上古酒者，必須標明比例。這是一次靜靜地讓一整個類別變誠實的標示改革。" } }
        ] }
      ] },

    { t:"section", id:"gi",
      title:{ en:"The four protected regions", ja:"四つの守られた産地", zh:"四個受保護的產地" }, jp:"焼酎の地理的表示",
      body:[
        { t:"p", text:{
          en:"Long before sake had a single geographical indication, shōchū had four. They were the first Japanese liquor designations to be protected, and they are recognised internationally — which means a bottle labelled with one of these names has met conditions that can be enforced abroad as well as at home.",
          ja:"清酒が一つの地理的表示をもつよりはるかに前に、焼酎は四つをもっていた。それらは守られた最初の日本の酒類の呼称であり、国際に認められている。すなわち、これらの名の一つを掲げる瓶は、内においても外においても行いうる条件を満たしているということである。",
          zh:"早在清酒還沒有任何一個地理標示之前，燒酎就已經有四個。它們是最早受保護的日本酒類名稱，並獲得國際承認——意思是，掛著其中一個名字的酒瓶，所滿足的條件在國內外都可以被執行。" } },

        { t:"table",
          caption:{ en:"What each name actually requires", ja:"それぞれの名が実際に求めるもの", zh:"每一個名字實際上要求什麼" },
          cols:[ { en:"Name", ja:"名", zh:"名稱" },
                 { en:"Where", ja:"地", zh:"產地" },
                 { en:"Base", ja:"原料", zh:"原料" },
                 { en:"The conditions", ja:"条件", zh:"條件" } ],
          jpCols:[0],
          rows:[
            [ "壱岐", { en:"Iki island, Nagasaki", ja:"長崎・壱岐島", zh:"長崎・壹岐島" }, { en:"Barley", ja:"大麦", zh:"大麥" },
              { en:"Barley and rice kōji in a fixed two-to-one ratio, water drawn on the island, and everything from fermentation to bottling done there. The ratio is the distinctive part — it is what gives Iki its rounder body against Ōita's austerity.",
                ja:"大麦と米麹を二対一の定まった比で、島で採られた水を用い、醗酵から瓶詰までのすべてを島で行う。比こそが際立つ部分である。大分の厳しさに対して壱岐に丸みを与えているのはそれである。",
                zh:"大麥與米麴以固定的二比一比例，使用島上取得的水，並且從發酵到裝瓶全都在島上完成。比例正是它的特色所在——這也是壹岐相對於大分的清瘦而顯得圓潤的原因。" } ],
            [ "球磨", { en:"Hitoyoshi–Kuma, Kumamoto", ja:"熊本・人吉球磨", zh:"熊本・人吉球磨" }, { en:"Rice", ja:"米", zh:"米" },
              { en:"Domestic rice, rice kōji, water from the Hitoyoshi basin, and all production within the district. A five-hundred-year tradition in a mountain basin that was effectively closed until modern roads.",
                ja:"国産の米、米麹、人吉盆地の水、そして製造のすべてを郡の内で。近代の道が通るまで事実上閉じていた山の盆地における、五百年の伝えである。",
                zh:"日本產米、米麴、人吉盆地的水，且所有製程都在該區域內完成。這是一個在現代道路開通之前實質上封閉的山間盆地裡，延續五百年的傳統。" } ],
            [ "薩摩", { en:"Kagoshima, mainland districts", ja:"鹿児島（本土の地域）", zh:"鹿兒島（本島各地區）" }, { en:"Sweet potato", ja:"さつまいも", zh:"番薯" },
              { en:"Kagoshima sweet potatoes, Kagoshima water, and production and bottling in the prefecture — with the Amami islands excluded, because they have their own category to protect.",
                ja:"鹿児島のさつまいも、鹿児島の水、そして県内での製造と瓶詰。奄美群島は除かれる。そこには守るべき自らの区分があるからである。",
                zh:"鹿兒島產的番薯、鹿兒島的水，並在縣內製造與裝瓶——奄美群島被排除在外，因為它們有自己需要保護的類別。" } ],
            [ "琉球", { en:"Okinawa", ja:"沖縄", zh:"沖繩" }, { en:"Rice, black kōji", ja:"米・黒麹", zh:"米、黑麴" },
              { en:"Okinawan water and every step from fermentation to bottling in the prefecture. The name protects awamori specifically, which is why the phrase on the bottle is Ryūkyū awamori rather than simply awamori.",
                ja:"沖縄の水と、醗酵から瓶詰までのあらゆる段を県内で。この名はとりわけ泡盛を守る。瓶の上の言葉が単に泡盛ではなく琉球泡盛である理由である。",
                zh:"沖繩的水，以及從發酵到裝瓶的每一個步驟都在縣內完成。這個名稱專門保護泡盛，這也是為什麼瓶身上寫的是「琉球泡盛」而非只是「泡盛」。" } ]
          ] }
      ] },
    { t:"section", id:"still",
      title:{ en:"The two ways to run the still", ja:"蒸留器の二つの走らせ方", zh:"蒸餾器的兩種跑法" }, jp:"常圧と減圧",
      body:[
        { t:"p", text:{
          en:"Two shōchū made from the same barley, by the same house, in the same week, can be so different that a drinker would not place them in the same category — and the difference is neither the raw material nor the kōji but the pressure inside the still. It is the single most consequential technical choice in shōchū, it is almost never explained on an export label, and it is printed in plain Japanese on the back of nearly every domestic bottle.",
          ja:"同じ麦から、同じ家により、同じ週に造られた二つの焼酎が、飲み手には同じ区分に置きえぬほど異なりうる。そしてその違いは原料でも麹でもなく、蒸留器のなかの圧である。焼酎における最も帰結の大きい技の選びであり、輸出用の札にはほとんど説かれず、そして国内のほぼすべての瓶の裏には、平明な日本語で刷られている。",
          zh:"同樣的大麥、同一家酒造、同一個星期做出來的兩支燒酎，可以差異大到飲者不會把它們歸在同一類——而那個差別既不是原料也不是麴，是蒸餾器裡的壓力。這是燒酎中影響最深遠的一項技術選擇，在出口標籤上幾乎從不解釋，卻用平白的日文印在幾乎每一支日本國內瓶裝的背面。" } },

        { t:"figure",
          caption:{
            en:"What survives the journey from pot to bottle, under the two pressures. Drop the pressure in the still and the mash boils at around fifty degrees instead of ninety, and two separate things follow. The heavy, less volatile fraction — the higher alcohols and the oils that give traditional shōchū its weight and its texture — largely stays in the pot. And the compounds that are not extracted at all but <em>created</em> by heat, the roasted and caramel notes, are never formed in the first place, because nothing in the vessel ever gets hot enough to form them. What crosses over is ethanol and the light fruity esters, and that is the whole of it.",
            ja:"釜から瓶までの道を何が生き延びるか、二つの圧のもとで。蒸留器の圧を下げれば、醪は九十度ではなくおよそ五十度で沸き、そこから二つの別々のことが導かれる。重く、揮発しにくい側——伝統的な焼酎に重みと質感を与える高級アルコールと油——は、その多くが釜に残る。そして、取り出されるのではなく熱によって<em>作られる</em>もの、すなわち香ばしさとカラメルの調子は、そもそも生じない。器のうちのいかなるものも、それを生むほど熱くならぬからである。渡ってくるのはエタノールと軽い果実の香りであり、それがすべてである。",
            zh:"在兩種壓力之下，什麼能撐過從釜到瓶的這段路。把蒸餾器裡的壓力降下來，醪就在約五十度而不是九十度沸騰，接著有兩件各自獨立的事發生。較重、較難揮發的那一側——賦予傳統燒酎重量與口感的高級醇與油脂——大部分留在釜裡。而那些不是被萃取出來、而是被熱<em>製造</em>出來的東西，也就是焙香與焦糖的調性，根本不會生成，因為容器裡沒有任何東西熱到足以生成它們。渡過來的是乙醇與輕盈的果香酯，就只有這些。" },
          svg: function (lang, L) {
            var W = 760, H = 306, X0 = 312, X1 = 700;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i;
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "何が渡ってくるか" : lang === "zh" ? "什麼渡得過來" : "WHAT CROSSES OVER") + '</text>';
            s += '<rect x="312" y="56" width="10" height="10" fill="#7C6B52"/>';
            s += '<text x="328" y="65" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "常圧蒸留・約90℃" : lang === "zh" ? "常壓蒸餾・約 90℃" : "atmospheric — near 90 °C") + '</text>';
            s += '<rect x="556" y="56" width="10" height="10" fill="#DED8CB" stroke="#B09E7C"/>';
            s += '<text x="572" y="65" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "減圧蒸留・約50℃" : lang === "zh" ? "減壓蒸餾・約 50℃" : "vacuum — near 50 °C") + '</text>';
            var rows = [
              { a:1.0, v:1.0,
                n:{ en:"Ethanol", ja:"エタノール", zh:"乙醇" },
                d:{ en:"the point of the exercise", ja:"そもそもの目的", zh:"這整件事的目的" } },
              { a:0.55, v:0.85,
                n:{ en:"Light fruity esters", ja:"軽い果実香のエステル", zh:"輕盈的果香酯" },
                d:{ en:"banana, pear, melon — they come over early", ja:"バナナ、洋梨、瓜。早くに渡る", zh:"香蕉、西洋梨、香瓜——它們很早就渡過來" } },
              { a:0.85, v:0.25,
                n:{ en:"Higher alcohols and oils", ja:"高級アルコールと油分", zh:"高級醇與油脂" },
                d:{ en:"the weight, the texture, the earthiness", ja:"重み、舌ざわり、土の調子", zh:"重量、口感、土地的氣味" } },
              { a:0.70, v:0.08,
                n:{ en:"Roast and caramel notes", ja:"香ばしさとカラメルの香", zh:"焙香與焦糖的香氣" },
                d:{ en:"made by the heat itself; they were not there before", ja:"熱そのものが生む。もとは無かったもの", zh:"由熱本身造出；原本並不存在" } }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = 96 + i * 50;
              s += '<text x="30" y="' + (ry - 4) + '" font-size="10.5" fill="#201E1B">' + L(rows[i].n) + '</text>';
              s += '<text x="30" y="' + (ry + 9) + '" font-size="8.5" fill="#A39C91">' + L(rows[i].d) + '</text>';
              s += '<rect x="' + X0 + '" y="' + (ry - 18) + '" width="' + ((X1 - X0) * rows[i].a).toFixed(1) + '" height="14" fill="#7C6B52"/>';
              s += '<rect x="' + X0 + '" y="' + (ry + 2) + '" width="' + ((X1 - X0) * rows[i].v).toFixed(1) + '" height="14" fill="#DED8CB" stroke="#B09E7C"/>';
            }
            s += '<line x1="' + X0 + '" y1="278" x2="' + X1 + '" y2="278" stroke="#E4E0D6"/>';
            s += '<text x="' + X0 + '" y="292" font-size="9" fill="#B4AEA4">' +
                 (lang === "ja" ? "渡らない" : lang === "zh" ? "完全不過來" : "none of it") + '</text>';
            s += '<text x="' + X1 + '" y="292" text-anchor="end" font-size="9" fill="#B4AEA4">' +
                 (lang === "ja" ? "すべて渡る" : lang === "zh" ? "全部過來" : "all of it") + '</text>';
            s += '<text x="30" y="292" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "定性的な図である。" : lang === "zh" ? "此圖為定性描述。" : "Qualitative.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Atmospheric distillation", ja:"常圧蒸留", zh:"常壓蒸餾" }, jp:"常圧蒸留", romaji:"jōatsu jōryū",
            def:{ en:"The still is open to the air and the mash boils at around ninety degrees. Everything volatile enough to travel at that temperature travels, and the heat does its own work on the sugars and amino acids left in the pot, so the spirit arrives carrying the raw material's character amplified rather than edited: sweet potato that smells emphatically of sweet potato, barley that smells roasted, rice that smells of rice. This is what shōchū tasted like for four centuries and what many people mean when they say they do or do not like it.",
              ja:"蒸留器は大気に開かれ、醪はおよそ九十度で沸く。その温度で旅しうるほど揮発するものはすべて旅をし、そして熱は、釜に残る糖とアミノ酸に対して自らの仕事をなす。ゆえに酒は、原料の性格を編むのではなく増幅して運んでくる。甘藷は力を込めて甘藷の匂いをし、麦は香ばしく匂い、米は米の匂いをする。四世紀にわたり焼酎とはこの味であり、好きだ、あるいは好きではないと人が言うとき、その多くが指しているのはこれである。",
              zh:"蒸餾器與空氣相通，醪在約九十度沸騰。凡是揮發到足以在那個溫度旅行的東西都旅行了，而熱本身又對留在釜裡的糖與胺基酸做了它自己的工作；於是蒸出來的酒帶來的是被放大、而不是被編輯過的原料性格：番薯強烈地聞起來就是番薯，大麥聞起來是焙過的，米聞起來就是米。四百年來燒酎就是這個味道，而人們說自己喜歡或不喜歡它的時候，多半指的就是這個。" } },
          { term:{ en:"Vacuum distillation", ja:"減圧蒸留", zh:"減壓蒸餾" }, jp:"減圧蒸留", romaji:"genatsu jōryū",
            def:{ en:"Pump the still down below atmospheric pressure and everything in it boils cooler — the mash at around fifty degrees rather than ninety. The result is a spirit that is clean, light, faintly floral and fruity, with the heavy end and the roasted notes simply absent. It is not a better technique and it is not a worse one; it is a different instrument, and a distiller choosing it is choosing to remove rather than to amplify.",
              ja:"蒸留器を大気圧より下へ引けば、そのなかのすべてがより低く沸く。醪は九十度ではなくおよそ五十度である。結果は、清らかで、軽く、かすかに花のようで果実のような酒であり、重い側と香ばしい調子は端的に無い。優れた技でも劣った技でもない。異なる楽器であり、それを択ぶ造り手は、増幅することではなく取り除くことを択んでいる。",
              zh:"把蒸餾器抽到大氣壓以下，裡面的一切都在更低的溫度沸騰——醪在約五十度而不是九十度。結果是一支乾淨、輕盈、帶著淡淡花果香的酒，重的那一端與焙香的調性乾脆不存在。它不是比較好的技術，也不是比較差的；它是另一件樂器，而選擇它的蒸餾師，選的是「移除」而不是「放大」。" } },
          { term:{ en:"1973, and what followed", ja:"一九七三年と、その後", zh:"一九七三年，以及之後" }, jp:"減圧の普及", romaji:"genatsu no fukyū",
            def:{ en:"Reduced-pressure distillation was first applied to shōchū in 1973, by Kitaya in Fukuoka, with the explicit ambition of making a Japanese spirit that could sit beside Scotch and brandy. Nikaido released a barley shōchū on the method the same year, distillers in the Kuma valley took it up from 1974, and Sanwa Shurui's Iichiko followed in 1979 and became the bottle that carried the style nationally. What the method removed was precisely what had kept barley shōchū a regional drink, and within a generation shōchū shipments inside Japan had passed sake's for the first time.",
              ja:"減圧蒸留が焼酎に初めて用いられたのは一九七三年、福岡の喜多屋においてであり、蘇格蘭の威士忌や白蘭地と並びうる日本の蒸留酒を作るという明らかな志を伴っていた。二階堂は同じ年にこの方法による麦焼酎を世に出し、球磨の造り手たちは一九七四年からこれを取り入れ、三和酒類のいいちこが一九七九年に続いて、この型を全国へ運ぶ一本となった。この方法が取り除いたものこそ、麦焼酎を地方の飲み物に留めていたものであり、一世代のうちに、日本の内における焼酎の出荷は初めて清酒を上回った。",
              zh:"減壓蒸餾第一次被用在燒酎上是一九七三年，由福岡的喜多屋所為，帶著一個明白的企圖：做出一支能與蘇格蘭威士忌、白蘭地並列的日本蒸餾酒。二階堂在同一年推出以此法製作的麥燒酎，球磨谷地的釀造者自一九七四年起採用，三和酒類的「いいちこ」在一九七九年跟上，並成為把這個風格帶向全國的那一支。這個方法拿掉的，正是把麥燒酎困在地方的那些東西；而在一個世代之內，日本國內的燒酎出貨量首次超過了清酒。" } },
          { term:{ en:"The head, the heart and the tail", ja:"初垂れ・中垂れ・末垂れ", zh:"初餾、中餾、末餾" }, jp:"初垂れ", romaji:"hatsudare",
            def:{ en:"A pot still delivers its run in changing composition: the first spirit out is very strong and sharply aromatic, the middle is the body of the thing, and the tail arrives weak and increasingly oily. Most shōchū takes the whole run and blends it, which is part of why a single-distilled spirit tastes of its mash at all. The head is sometimes bottled alone as <em>hanatare</em>, at a strength well above the usual twenty-five per cent, and sold as a seasonal curiosity that is also the clearest lesson available in what distillation does.",
              ja:"単式の蒸留器は、その留出を変わりゆく組成で届ける。初めに出る酒はきわめて強く、鋭く香り、中ほどがその本体であり、末は弱く、次第に油を帯びて来る。焼酎の多くは留出の全体を取って調和させる。単式の酒がそもそも醪の味をするのは、その一端による。初めの部分はハナタレとして単独で瓶詰めされることがあり、常の二十五度をはるかに超える度数で、季節の珍しみとして売られる。それはまた、蒸留が何をなすかについて得られる最も明快な教えでもある。",
              zh:"單式蒸餾器交出的餾出液，組成是一路變化的：最先出來的酒極烈、香氣尖銳，中段是它的本體，末段則越來越弱、也越來越油。多數燒酎會取全段再調和，而單式蒸餾酒之所以嘗得出醪的味道，有一部分原因就在這裡。最前面那一段有時會單獨裝瓶，稱為「ハナタレ」，度數遠高於常見的二十五度，作為季節性的稀奇貨出售——它同時也是關於「蒸餾究竟做了什麼」最清楚的一堂課。" } },
          { term:{ en:"Cutting it with water, twice", ja:"水で二度割る", zh:"用水稀釋，兩次" }, jp:"割水・前割り", romaji:"warimizu, maewari",
            def:{ en:"The spirit leaves the still at something like forty per cent and is cut with water to the twenty-five per cent that most bottles carry — twenty in much of southern Kyūshū, where the lower strength is both a taste and a tax preference. Then it is often cut again at home: <em>maewari</em> is the Kyūshū habit of mixing shōchū and water days before drinking and letting the mixture stand, on the argument that the two need time to settle into each other. Whether or not the chemistry is real, the result is measurably rounder, and a bottle of pre-mixed shōchū in the fridge is the most ordinary domestic sight in Kagoshima.",
              ja:"酒は四十度ほどで蒸留器を出て、水で割られ、多くの瓶が負う二十五度となる。南九州の多くでは二十度であり、その低さは味の好みであると同時に税の好みでもある。のち、家でもう一度割られることが多い。前割りとは、飲む幾日も前に焼酎と水を混ぜ、その混じりを置いておく九州の習いであり、二つは互いに落ち着くための時を要するという言い分に立つ。その化学が実在するか否かはともかく、結果は測りうるほど丸くなる。そして冷蔵庫のなかの前割りの瓶は、鹿児島において最も平凡な家の風景である。",
              zh:"酒以約四十度離開蒸餾器，加水稀釋到多數瓶裝所標示的二十五度——在南九州許多地方是二十度，這個較低的度數既是口味偏好，也是稅務偏好。之後它常常會在家裡再被稀釋一次：「前割り」是九州的習慣，在喝之前好幾天就把燒酎與水調好、然後放著，理由是這兩者需要時間彼此安頓下來。不論這套化學是否真實，結果確實明顯變得更圓；而冰箱裡放著一瓶事先調好的燒酎，是鹿兒島最平常不過的居家景象。" } }
        ] },

        { t:"note", title:{ en:"The parallel a sake drinker will recognise", ja:"日本酒の飲み手が見覚えるはずの相似", zh:"清酒飲者會認出來的那組對照" }, text:{
          en:"Atmospheric against vacuum is the same argument as junmai against ginjō, conducted with a different instrument. One method keeps what the raw material brought and lets the process add to it; the other removes, cools, and lets a narrow band of aromatic compounds stand alone. Both arguments were settled the same way in the same decades — the light style won the market and the full style kept the people who care most — and in both drinks the interesting producers are now the ones who have stopped treating it as an argument at all and run both.",
          ja:"常圧と減圧の対は、純米と吟醸の対と同じ論であり、ただ異なる楽器で行われている。一方の方法は原料がもたらしたものを保ち、工程がそれに加えることを許す。他方は取り除き、冷やし、狭い帯の香りの成分を独り立たせる。いずれの論も、同じ数十年のうちに同じ仕方で決した——軽い型が市場を制し、満ちた型が最も深く気にかける人々を保った——そしていずれの飲み物においても、いま面白い造り手は、それを論として扱うことをやめ、両方を走らせている者たちである。",
          zh:"常壓對減壓，和純米對吟釀是同一場辯論，只是用不同的樂器進行。一種方法保留原料帶來的東西，並讓製程在其上追加；另一種則移除、降溫，讓一段很窄的香氣成分獨自站著。這兩場辯論在同樣的幾十年裡以同樣的方式落幕——輕盈的風格拿下市場，飽滿的風格留住了最在乎的人——而在這兩種酒裡，如今有意思的生產者，都是那些已經不再把它當成一場辯論、兩種都做的人。" } }
      ] },


    { t:"section", id:"drinking",
      title:{ en:"How it is drunk, and why it matters here", ja:"いかに飲まれるか、そしてなぜここで意味をもつか", zh:"怎麼喝，以及為何這件事在此重要" }, jp:"飲み方",
      body:[
        { t:"ul", plain:true, items:[
          { en:"<strong>Oyuwari — cut with hot water.</strong> The default in Kagoshima, and not a dilution so much as a preparation: the hot water goes into the glass first, the shōchū second, and the temperature releases aroma the same way warming does for sake. Six to four is the usual ratio.",
            ja:"<strong>お湯割り。</strong>鹿児島における既定であり、薄めるというより仕立てである。湯が先に器へ入り、焼酎が次に入る。そして温度は、燗が清酒になすのと同じ仕方で香りを解き放つ。六対四が常の比である。",
            zh:"<strong>兌熱水。</strong>鹿兒島的預設喝法，與其說是稀釋，不如說是一道準備工序：熱水先進杯，燒酎後進，而溫度會像溫酒之於清酒一樣把香氣釋放出來。六比四是常見的比例。" },
          { en:"<strong>Maewari — cut the day before.</strong> Mix shōchū and water and leave it a day or more before warming. The two integrate in a way they do not when mixed at the table, and a bar that offers it is telling you something about itself.",
            ja:"<strong>前割り。</strong>焼酎と水を混ぜ、温める前に一日かそれ以上置く。卓で混ぜたときには起こらぬ仕方で両者は馴染む。それを供する店は、自らについて何かを述べている。",
            zh:"<strong>前一天先兌好。</strong>把燒酎與水混合，靜置一天以上再加熱。兩者會以「在桌邊現調做不到」的方式融合；一家提供這種喝法的店，等於在說明它自己是什麼樣的店。" },
          { en:"<strong>Kurojoka.</strong> A flat black clay flask with a handle, used to warm pre-mixed shōchū over a flame. It is the southern equivalent of the tokkuri and the chōshi, and the ritual around it is recognisably the same ritual.",
            ja:"<strong>黒じょか。</strong>取っ手のついた平たい黒い土の器であり、前もって割った焼酎を火にかけて温めるのに用いる。徳利と銚子の南の等価物であり、それを巡る作法は、それと分かる同じ作法である。",
            zh:"<strong>黑千代香。</strong>一只帶柄的扁平黑陶壺，用來把預先兌好的燒酎架在火上溫熱。它是德利與銚子在南方的對應物，而圍繞它的儀節，一望即知是同一套儀節。" },
          { en:"<strong>Straight, for kūsu.</strong> An aged awamori is drunk neat or over one large piece of ice, in a small glass, and treated exactly as one would treat an aged spirit anywhere. Cutting a thirty-year kūsu with water is not wrong, but it is not what the jar was for.",
            ja:"<strong>古酒は生で。</strong>熟成した泡盛は、小さな器で、生のまま、あるいは大きな氷ひとつを入れて飲まれ、いずこの熟成した蒸留酒とも同じように扱われる。三十年の古酒を水で割ることは誤りではないが、甕がそのために在ったのではない。",
            zh:"<strong>古酒喝純的。</strong>熟成的泡盛以小杯純飲，或加一顆大冰塊，處理方式與世界任何地方的陳年烈酒無異。用水兌開一支三十年古酒並不算錯，但那不是那只甕存在的目的。" }
        ] },

        { t:"panel", tint:"wood",
          title:{ en:"Why a sake drinker should care", ja:"清酒の飲み手がなぜ心を向けるべきか", zh:"清酒飲者為何該在意這件事" },
          body:[
            { t:"p", text:{
              en:"Three reasons, all practical. A great many breweries in Kyūshū and the south make both, with the same crew and the same kōji room, so understanding one explains the other. The southern prefectures where sake looks thin on the map are not empty of the craft — they simply pointed it at a still. And in a Japanese bar the two sit side by side on the same list, so a drinker who can order confidently across both has twice the room to move, and a much better chance of finding the right thing to drink after the food is finished.",
              ja:"三つの理由があり、いずれも実際的である。九州と南の多くの蔵は、同じ組と同じ麹室で両方を造る。ゆえに一方を解することは他方を説く。地図の上で清酒が薄く見える南の県は、技において空なのではない。ただそれを蒸留器へ向けただけである。そして日本の酒場において両者は同じ品書きに並んで座る。両方を確かに頼みうる飲み手は、動きうる場を倍にもち、料理が終わったのちに飲むべき正しいものを見出す見込みをはるかに高くもつ。",
              zh:"三個理由，都很實際。九州與南方有非常多酒藏兩者都做，用同一批人手、同一間麴室，因此理解其中一個就能解釋另一個。那些在地圖上清酒看起來稀薄的南方縣份，並非在技藝上空無一物——它們只是把技藝指向了蒸餾器。而在日本的酒場裡，這兩者並列在同一份酒單上；一位能在兩邊都自信點單的飲者，可迴旋的空間加倍，也更有機會在餐食結束之後找到該喝的那一杯。" } }
          ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"kojifamily.html\">The Kōji Family</a> for the mould's other children, <a href=\"compare.html\">Sake &amp; Other Drinks</a> for how it sits against wine, beer and huangjiu, <a href=\"region-kyushu.html\">Kyūshū &amp; Okinawa</a> for the places, <a href=\"starters.html\">Starter Methods</a> for the lactic-acid answer to the same problem, <a href=\"gi.html\">Geographical Indications</a> for the protection framework.",
          ja:"関連——黴の他の子らは<a href=\"kojifamily.html\">麹の一族</a>、葡萄酒・ビール・黄酒との位置は<a href=\"compare.html\">他の酒との比較</a>、土地は<a href=\"region-kyushu.html\">九州と沖縄</a>、同じ問いへの乳酸の答えは<a href=\"starters.html\">酒母の型</a>、守りの枠組みは<a href=\"gi.html\">地理的表示</a>。",
          zh:"相關：這種黴的其他子嗣見<a href=\"kojifamily.html\">麴的家族</a>；它與葡萄酒、啤酒、黃酒的相對位置見<a href=\"compare.html\">與其他酒的比較</a>；產地見<a href=\"region-kyushu.html\">九州與沖繩</a>；同一問題的乳酸解答見<a href=\"starters.html\">酒母工法</a>；保護架構見<a href=\"gi.html\">地理標示</a>。" } }
      ] },

    { t:"related", items:[
      { href:"kojifamily.html", why:{ en:"The moulds it shares with sake, and the one it does not.", ja:"日本酒と分かち合う麹と、分かち合わぬもの。", zh:"它與清酒共用的麴，以及不共用的那一種。" } },
      { href:"region-kyushu.html", why:{ en:"The prefectures it comes from, and why.", ja:"それが生まれる県と、その理由。", zh:"它來自哪些縣，以及為什麼。" } },
      { href:"compare.html", why:{ en:"Where it sits among the world's grain drinks.", ja:"世界の穀物の酒のなかで、それが座る場所。", zh:"在世界各種穀物酒之中，它的位置。" } },
      { href:"health.html", why:{ en:"The strength difference, and what it means per serving.", ja:"度数の違いと、一人前あたりの意味。", zh:"酒精度的差別，以及換算到一份是多少。" } }
    ] }
  ]
};


/* ---- ------------------------------------------------ kasu */
SAKE.pages["kasu"] = {
  kicker: { en: "Wider world · 03", ja: "周辺 · 03", zh: "周邊 · 03" },
  title:  { en: "Sake Lees", ja: "酒粕", zh: "酒粕" },
  jp: "酒粕とその使い道",
  lede: {
    en: "Pressing a mash leaves behind a white cake of undissolved rice, spent kōji and dead yeast: <em>sakekasu</em>, sake lees. A brewery producing a hundred tonnes of sake produces something like a quarter of that weight in lees, and for centuries Japanese cooking has treated it not as waste but as one of the country's most useful preserving and flavouring materials. It pickles vegetables and fish, thickens winter soup, becomes a drink, becomes a spirit, and — because it is roughly a third protein and full of residual enzymes — has a small research literature of its own.",
    ja: "醪を搾ったあとに残るのは、溶けきらなかった米、役目を終えた麹、そして死んだ酵母からなる白い塊である——酒粕。百トンの酒を造る蔵は、その四分の一ほどの重さの粕を生む。そして日本の食は何世紀にもわたり、これを廃棄物としてではなく、この国で最も有用な保存と調味の材料の一つとして扱ってきた。野菜や魚を漬け、冬の汁を厚くし、飲み物になり、蒸留酒になり、そして——およそ三分の一がたんぱく質で、酵素も残っているために——それ自体の研究文献も小さいながら存在する。",
    zh: "榨完醪之後留下的，是一塊由未溶解的米、用畢的麴與死去的酵母構成的白色餅塊——酒粕。一家生產一百噸清酒的酒藏，會產出約其四分之一重量的酒粕。而數個世紀以來，日本料理並未將它視為廢棄物，而是視為這個國家最有用的保存與調味材料之一。它可醃漬蔬菜與魚、使冬日的湯變濃稠、化為飲品、化為蒸餾酒；並且——因其約三分之一為蛋白質且殘留酵素——還擁有屬於自己的一小片研究文獻。"
  },
  body: [

    { t:"section", id:"what",
      title:{ en:"What it is", ja:"何であるか", zh:"它是什麼" }, jp:"組成",
      body:[
        { t:"p", text:{
          en:"Kasu is what the press cloth holds back. Its composition depends entirely on how the sake was made and how hard it was pressed, and the difference between a soft daiginjō lees and a hard futsūshu lees is very large.",
          ja:"酒粕とは、酒袋が留めたものである。その組成は、どう造られ、どれだけ強く搾られたかで決まる。柔らかな大吟醸の粕と、固く搾られた普通酒の粕との差はきわめて大きい。",
          zh:"酒粕就是酒袋所留住的東西。它的組成完全取決於酒是怎麼釀的、又被榨得多用力，而柔軟的大吟釀酒粕與榨得結實的普通酒酒粕之間，差異極大。" } },
        { t:"table",
          cols:[{en:"Form",ja:"形状",zh:"形態"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Comes from",ja:"由来",zh:"來自"},{en:"Best for",ja:"向き",zh:"適合"}],
          jpCols:[1],
          rows:[
            [{en:"Board lees",ja:"板粕",zh:"板粕"},"板粕",
             {en:"A machine press, cut into flat slabs.",ja:"自動圧搾機から、板状に切り出したもの。",zh:"來自自動壓榨機，切成平板狀。"},
             {en:"Grilling, soup, pickling. The everyday form, sold in supermarkets in winter.",ja:"炙る、汁に溶く、漬ける。冬の食料品店に並ぶ日常の形である。",zh:"炙烤、煮湯、醃漬。是冬季超市裡常見的日常形態。"}],
            [{en:"Loose lees",ja:"ばら粕",zh:"散粕"},"ばら粕",
             {en:"A gentler press or a fune; crumbly, wetter, richer.",ja:"槽や穏やかな搾りから。ほろりと崩れ、水分が多く、旨味が濃い。",zh:"來自木槽或較溫和的壓榨；質地鬆散、含水較多、風味更濃。"},
             {en:"Amazake, kasujiru, anything where you want it to dissolve.",ja:"甘酒、粕汁、溶かして使うもの全般。",zh:"甘酒、粕汁，以及任何需要它溶開的用途。"}],
            [{en:"Kneaded lees",ja:"練り粕",zh:"練粕"},"練り粕",
             {en:"Board lees matured and worked smooth, sometimes for months.",ja:"板粕を寝かせ、練り上げたもの。数か月をかけることもある。",zh:"板粕經熟成後揉練至滑順，有時歷時數月。"},
             {en:"Pickling beds — the classic <em>kasuzuke</em> medium.",ja:"漬け床——粕漬けの古典的な媒体である。",zh:"醃漬床——經典的粕漬介質。"}],
            [{en:"Aged lees",ja:"踏込粕",zh:"踏込粕"},"踏込粕",
             {en:"Packed down under weight and left to mature; turns brown and intensely savoury.",ja:"重しをかけて踏み込み、寝かせたもの。褐色に変わり、旨味が強くなる。",zh:"以重物壓實後靜置熟成；轉為褐色，旨味濃烈。"},
             {en:"Nara-zuke and other long pickles; also used as a seasoning in its own right.",ja:"奈良漬などの長期の漬物。それ自体を調味料としても使う。",zh:"奈良漬等長期醃漬物；也可直接作為調味料使用。"}]
          ] },
        { t:"figure",
          caption:{
            en:"The lees ratio is the percentage of the rice that never becomes sake, and it runs the wrong way round from what a yield-minded reader expects: the higher the number, the better the sake. A gentle press stopped early leaves flavour and unconverted starch in the cloth; a hard press takes it out and puts it in the bottle, which is why the most expensive sake in a brewery produces the most expensive lees. The strip beneath is what is in a typical board lees — the proportions move with the press, and every one of them is edible.",
            ja:"粕歩合とは、酒にならなかった米の割合であり、歩留まりを考える読み手の予期とは逆に働く——数が高いほど、酒は良い。穏やかに、早く止めて搾れば、味と未変換の澱粉は袋のなかに残る。強く搾ればそれを取り出して瓶に入れることになる。蔵で最も高い酒が、最も高い粕を生む理由がこれである。下の帯は、ふつうの板粕のなかにあるものである。割合は搾りとともに動き、そのいずれもが食べられる。",
            zh:"粕步合是「從未成為清酒的那部分米」的百分比，而它的方向與講求出酒率的讀者所預期的恰好相反：數字越高，酒越好。溫和、提早停止的壓榨，會把風味與未轉化的澱粉留在酒袋裡；用力壓榨則把它們取出、放進瓶中——這正是為何一家酒藏最貴的酒，會產出最貴的酒粕。下方的色帶是一塊普通板粕裡的成分：比例會隨壓榨方式移動，而其中每一項都可以吃。" },
          svg: function (lang, L) {
            var W = 760, H = 376, X0 = 210, X1 = 700, Y0 = 44, RH = 42, MAX = 50;
            function px(v) { return X0 + v / MAX * (X1 - X0); }
            var rows = [
              { v:20, f:"#E7DFD2", jp:"普通酒", n:{ en:"hard-pressed futsūshu", ja:"強く搾った普通酒", zh:"用力壓榨的普通酒" },
                s:{ en:"squeezed for yield", ja:"歩留まりのために搾る", zh:"為出酒率而榨" } },
              { v:25, f:"#DED0B4", jp:"本醸造", n:{ en:"honjōzō", ja:"ほんじょうぞう", zh:"本釀造" },
                s:{ en:"an ordinary press", ja:"ふつうの搾り", zh:"一般壓榨" } },
              { v:30, f:"#CDBFA2", jp:"純米酒", n:{ en:"junmai", ja:"じゅんまい", zh:"純米酒" },
                s:{ en:"stopped a little earlier", ja:"やや早く止める", zh:"稍早停止" } },
              { v:45, f:"#B09E7C", jp:"大吟醸", n:{ en:"daiginjō", ja:"だいぎんじょう", zh:"大吟釀" },
                s:{ en:"gentle, and stopped early", ja:"穏やかに、早く止める", zh:"溫和，且提早停止" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + rows.length * RH, g, i, y;
            for (g = 10; g <= MAX; g += 10) {
              s += '<line x1="' + px(g) + '" y1="' + (Y0 - 8) + '" x2="' + px(g) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(g) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g + '%</text>';
            }
            for (i = 0; i < rows.length; i++) {
              var r = rows[i]; y = Y0 + i * RH;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 16) + '" text-anchor="end" font-size="12.5" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 29) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(r.n) + ' · ' + L(r.s) + '</text>';
              s += '<rect x="' + X0 + '" y="' + (y + 4) + '" width="' + (px(r.v) - X0) + '" height="22" fill="' + r.f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (px(r.v) + 9) + '" y="' + (y + 19) + '" font-size="11.5" fill="#55504A">' + r.v + '%</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "粕歩合・総米に対する粕の重さ" : lang === "zh" ? "粕步合・酒粕重量占總米之比" : "LEES AS A PERCENTAGE OF THE RICE USED") + '</text>';
            /* composition strip */
            var CY = BOT + 76, CH = 28;
            s += '<line x1="30" y1="' + (CY - 24) + '" x2="' + (W - 30) + '" y2="' + (CY - 24) + '" stroke="#DED8CB"/>';
            s += '<text x="' + (X0 - 16) + '" y="' + (CY + 12) + '" text-anchor="end" font-size="12.5" fill="#201E1B">' +
                 (lang === "ja" ? "板粕の中身" : lang === "zh" ? "板粕的內容" : "inside a board lees") + '</text>';
            s += '<text x="' + (X0 - 16) + '" y="' + (CY + 25) + '" text-anchor="end" font-size="9" fill="#8B857C">' +
                 (lang === "ja" ? "おおよその重量比" : lang === "zh" ? "大致的重量比" : "roughly, by weight") + '</text>';
            var comp = [
              { w:55, f:"#DDE5E8", inside:true, n:{ en:"water 55%", ja:"水分 55%", zh:"水分 55%" } },
              { w:19, f:"#E2D8C6", inside:true, n:{ en:"carbohydrate 19%", ja:"炭水化物 19%", zh:"碳水化合物 19%" } },
              { w:15, f:"#C7CFC2", inside:true, n:{ en:"protein 15%", ja:"たんぱく質 15%", zh:"蛋白質 15%" } },
              { w:8,  f:"#C0AF8E", inside:false, n:{ en:"alcohol 5–9%", ja:"アルコール 5〜9%", zh:"酒精 5–9%" } },
              { w:3,  f:"#B4AC9C", inside:false, n:{ en:"fat, ash, acids", ja:"脂質・灰分・酸", zh:"脂質、灰分、酸" } }
            ];
            var cx = X0, below = 0;
            for (i = 0; i < comp.length; i++) {
              var c = comp[i], cw = c.w / 100 * (X1 - X0);
              s += '<rect x="' + cx.toFixed(1) + '" y="' + CY + '" width="' + cw.toFixed(1) + '" height="' + CH + '" fill="' + c.f + '" stroke="#CDC6B9"/>';
              if (c.inside) {
                s += '<text x="' + (cx + cw / 2).toFixed(1) + '" y="' + (CY + 18) + '" text-anchor="middle" font-size="10" fill="#55504A">' + L(c.n) + '</text>';
              } else {
                var ly = CY + CH + 16 + below * 15, mid = cx + cw / 2, flip = mid > W * 0.82;
                s += '<line x1="' + mid.toFixed(1) + '" y1="' + (CY + CH) + '" x2="' + mid.toFixed(1) + '" y2="' + (ly - 8) + '" stroke="#CDC6B9"/>';
                s += '<text x="' + (mid + (flip ? -6 : 6)).toFixed(1) + '" y="' + ly + '" text-anchor="' + (flip ? "end" : "start") +
                     '" font-size="9.5" fill="#8B857C">' + L(c.n) + '</text>';
                below++;
              }
              cx += cw;
            }
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "粕にアルコールが残るのは、粕甘酒が無アルコールではない理由である。麹甘酒とは別のものであり、混同してはならない。"
                  : lang === "zh" ? "酒粕殘留酒精，正是粕甘酒並非無酒精的原因。它與麴甘酒是兩回事，不可混為一談。"
                  : "The alcohol left in the lees is why kasu amazake is not an alcohol-free drink. It is a different thing from kōji amazake and should not be confused with it.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"grid", cols:3, cells:[
          { k:{en:"Protein",ja:"たんぱく質",zh:"蛋白質"}, v:{en:"about 15%",ja:"およそ15%",zh:"約 15%"} },
          { k:{en:"Alcohol",ja:"アルコール",zh:"酒精"}, v:{en:"5–9%",ja:"5〜9%",zh:"5–9%"} },
          { k:{en:"Yield",ja:"粕歩合",zh:"粕步合"}, v:{en:"20–50% of rice weight",ja:"総米の20〜50%",zh:"總米重的 20–50%"} }
        ] },
        { t:"note", label:{en:"Kasu-buai is a quality signal",ja:"粕歩合は品質の指標である",zh:"粕步合是品質訊號"}, text:{
          en:"The lees ratio — kasu as a percentage of the rice used — is one of the numbers brewers watch most closely. A high ratio means the mash was pressed gently and stopped early, leaving flavour and unconverted starch behind: expensive, and typical of a good daiginjō, where 40% or more is normal. A low ratio means the mash was squeezed hard for maximum yield. Daiginjō lees are therefore both the most delicious and the most expensive, and breweries sell them by the kilo to people who queue.",
          ja:"粕歩合——使った米に対する粕の割合——は、造り手が最も注意して見る数値の一つである。高い粕歩合は、醪を穏やかに、早く止めて搾ったことを意味する。味と未変換の澱粉を残したということであり、費用がかかる。良い大吟醸では40%以上が普通である。低い粕歩合は、歩留まりのために強く搾ったことを意味する。したがって大吟醸の粕は最も美味であり、最も高価でもある。蔵はそれをキロ単位で売り、人は列を作る。",
          zh:"粕步合——酒粕相對於用米量的比例——是釀造者最密切關注的數字之一。比例高，代表醪被溫和地、提早地榨取，留下了風味與未轉化的澱粉：成本高昂，且是優質大吟釀的常態，40% 以上並不罕見。比例低，則代表為求產出率而用力壓榨。因此大吟釀酒粕既最美味也最昂貴，酒藏論公斤販售，而人們會排隊。" } }
      ]
    },

    { t:"section", id:"food",
      title:{ en:"In the kitchen", ja:"台所で", zh:"在廚房裡" }, jp:"料理",
      body:[
        { t:"defs", items:[
          { term:{en:"Kasujiru",ja:"粕汁",zh:"粕汁"}, jp:"粕汁", romaji:"kasujiru",
            def:{en:"A winter soup of root vegetables, konnyaku and salted salmon or pork, thickened with lees dissolved in dashi and finished with miso. Cloudy, warming and faintly alcoholic; a household staple in Kansai and the snow country from December onward.",
              ja:"根菜、蒟蒻、塩鮭や豚を、出汁に溶いた酒粕で厚みをつけ、味噌で仕上げる冬の汁物。濁って身体を温め、かすかに酒の香が残る。関西や雪国では十二月以降、家庭の定番である。",
              zh:"以根莖類蔬菜、蒟蒻與鹽漬鮭魚或豬肉煮成的冬季湯品，用溶於高湯的酒粕增稠，最後以味噌調味。湯色混濁、暖身，並帶著淡淡酒香；自十二月起是關西與雪國的家常定番。"} },
          { term:{en:"Kasuzuke",ja:"粕漬け",zh:"粕漬"}, jp:"粕漬け", romaji:"kasuzuke",
            def:{en:"Burying fish, meat or vegetables in a bed of lees, salt and mirin for days to months. The enzymes still active in the kasu break down protein into amino acids, so the food gains savour as well as keeping — this is a preserving method that improves what it preserves. Silver cod, mackerel and pork loin are the classics.",
              ja:"魚、肉、野菜を、酒粕・塩・味醂の床に数日から数か月埋める。粕に残る酵素がたんぱく質をアミノ酸に分解するため、保存されるだけでなく旨味が増す。保存するものを良くする保存法である。銀鱈、鯖、豚ロースが古典的である。",
              zh:"把魚、肉或蔬菜埋入酒粕、鹽與味醂調成的醃床中數日至數月。酒粕中仍具活性的酵素會將蛋白質分解為胺基酸，因此食材不只得以保存，還增添旨味——這是一種能讓被保存之物變得更好的保存法。銀鱈、鯖魚與豬里肌是經典之選。"} },
          { term:{en:"Narazuke",ja:"奈良漬",zh:"奈良漬"}, jp:"奈良漬", romaji:"narazuke",
            def:{en:"The oldest and most extreme kasuzuke: gourd, cucumber or watermelon rind repacked in fresh lees several times over one to three years, until it is dark amber, dense and strongly alcoholic. Documented in Nara from the eighth century and sold there still.",
              ja:"最も古く、最も徹底した粕漬け。瓜、胡瓜、西瓜の皮などを、一年から三年のあいだに何度も新しい粕に漬け替え、濃い琥珀色の、密で酒気の強いものにする。奈良では八世紀から記録があり、いまも同地で売られている。",
              zh:"最古老也最極致的粕漬：把瓜、黃瓜或西瓜皮在一至三年間數度換入新酒粕重新醃埋，直到呈深琥珀色、質地緻密且酒氣濃烈。奈良自八世紀便有記載，至今仍在當地販售。"} },
          { term:{en:"Amazake from kasu",ja:"粕甘酒",zh:"粕甘酒"}, jp:"粕甘酒",
            def:{en:"Lees dissolved in hot water with sugar. Quick, cheap and mildly alcoholic — distinct from the kōji amazake made by saccharifying rice, which contains no alcohol and no added sugar. Both are called amazake, and confusing them is the commonest error in English writing on the subject.",
              ja:"酒粕を湯に溶き、砂糖を加えたもの。手早く安価で、わずかに酒精を含む。米を糖化して作る麹甘酒——アルコールも加糖もない——とは別物である。どちらも甘酒と呼ばれ、英語で書かれたものではこの二つの混同が最も多い誤りである。",
              zh:"把酒粕溶於熱水並加糖。快速、便宜，且含少量酒精——與以米糖化製成、不含酒精也不加糖的麴甘酒截然不同。兩者都叫甘酒，而混淆這兩者是英文相關寫作中最常見的錯誤。"} },
          { term:{en:"Kasu in baking and dairy",ja:"製菓・乳製品に",zh:"用於烘焙與乳製品"}, jp:"応用",
            def:{en:"Modern uses: kasu in bread dough as a flavouring and a mild leavening aid, in ice cream, in cheesecake, whisked into cream sauces, and as a marinade for chicken. It behaves rather like a mild miso with a yeasty top note.",
              ja:"現代の使い方——パン生地に風味と穏やかな膨らみの助けとして、アイスクリームに、チーズケーキに、クリームソースに溶き込み、鶏の下味に。穏やかな味噌に酵母の香りを重ねたように働く。",
              zh:"現代用法：加入麵團作為風味與溫和的助發材料，用於冰淇淋、起司蛋糕，打入奶油醬中，或作為雞肉的醃料。它的表現有點像帶著酵母香頭韻的溫和味噌。"} }
        ] },
        { t:"panel", title:{en:"Two things to know before cooking with it",ja:"使う前に知っておくべき二つのこと",zh:"下廚前該知道的兩件事"}, tint:"rice",
          body:[{ t:"ul", items:[
            { en:"<strong>It contains alcohol.</strong> Five to nine per cent, and dissolving it in warm soup does not remove all of it. Kasujiru is not suitable for children or for anyone avoiding alcohol unless it has been simmered well and even then not entirely.",ja:"<strong>アルコールを含む。</strong>五から九パーセントであり、温かい汁に溶いてもすべては飛ばない。粕汁は、よく煮ない限り子どもや酒を避ける人には向かず、よく煮てもなお完全ではない。",zh:"<strong>它含有酒精。</strong>五到九%，且溶入熱湯中也無法完全揮發。粕汁除非充分燉煮，否則不適合孩童或需避開酒精者飲用——即使充分燉煮，也仍非全然無酒精。"},
            { en:"<strong>Soften it first.</strong> Board lees are hard. Break them up, cover with a little warm water or dashi, and leave for twenty minutes before whisking; adding a hard slab straight to a soup gives you lumps that never disperse.",ja:"<strong>まず戻すこと。</strong>板粕は固い。細かくほぐし、少量の湯か出汁を注いで二十分ほど置いてから溶く。固いまま汁に入れれば、決して散らない塊が残る。",zh:"<strong>先泡軟。</strong>板粕很硬。把它剝碎，倒入少許溫水或高湯，靜置約二十分鐘後再攪散；直接把硬塊丟進湯裡，會留下永遠化不開的疙瘩。"}
          ] }] }
      ]
    },

    { t:"section", id:"other",
      title:{ en:"Beyond the kitchen", ja:"台所の外へ", zh:"廚房之外" }, jp:"その他の用途",
      body:[
        { t:"defs", items:[
          { term:{en:"Kasutori shōchū",ja:"粕取り焼酎",zh:"粕取燒酎"}, jp:"粕取焼酎", romaji:"kasutori-shōchū",
            def:{en:"Shōchū distilled from sake lees. A genuine old category with a strong, oily, distinctly rice-lees character, historically made in Kyushu and Kansai as a by-product of the brewing season. Not to be confused with the industrial rotgut of the same name sold on the postwar black market, which ruined the word's reputation for a generation.",
              ja:"酒粕を蒸留した焼酎。強く油分を感じさせ、粕の性格がはっきり残る、由緒ある古い種類である。歴史的には九州や関西で、造りの季の副産物として作られた。戦後の闇市で売られた同名の粗悪な酒——それがこの語の評判を一世代のあいだ損なった——とは別物である。",
              zh:"以酒粕蒸餾而成的燒酎。是一個道地的古老類別，酒質強勁、帶油脂感，酒粕的性格清晰可辨；歷史上在九州與關西作為釀造季的副產品製造。切勿與戰後黑市上同名的劣質烈酒混淆——那使這個詞的名聲蒙塵了整整一個世代。"} },
          { term:{en:"Mirin lees",ja:"味醂粕",zh:"味醂粕"}, jp:"こぼれ梅",
            def:{en:"The lees left from making mirin, sweet and pale and known by the lovely name <em>koboreume</em>, “spilled plum blossom”. Eaten as a sweet in its own right.",
              ja:"味醂を造ったあとに残る粕。甘く色が淡く、「こぼれ梅」という美しい名で呼ばれる。それ自体を菓子として食べる。",
              zh:"製作味醂後留下的粕，甘甜而色淺，有個美麗的名字叫「零落梅」（こぼれ梅）。可直接當作甜點食用。"} },
          { term:{en:"Cosmetics",ja:"化粧品",zh:"化妝品"}, jp:"美容",
            def:{en:"An old observation — brewery workers' hands — turned into a large modern product category. Kasu and kōji extracts appear in creams and masks; the marketing claims run well ahead of the evidence, but the underlying compounds (kōji acid, ferulic acid, amino acids) are real and studied.",
              ja:"古くからの観察——蔵人の手——が、現代の大きな製品分野になった。粕や麹の抽出物は化粧水や面膜に用いられる。宣伝は証拠をかなり先回りしているが、根拠となる成分（麹酸、フェルラ酸、アミノ酸）は実在し、研究もされている。",
              zh:"一項古老的觀察——藏人的手——變成了現代龐大的產品類別。酒粕與麴的萃取物出現在乳霜與面膜中；行銷說法遠遠跑在證據之前，但其背後的成分（麴酸、阿魏酸、胺基酸）確實存在，也有研究。"} },
          { term:{en:"Feed and fertiliser",ja:"飼料と肥料",zh:"飼料與肥料"}, jp:"再利用",
            def:{en:"The unglamorous majority use for lees that cannot be sold. Cattle fed on kasu are a small local speciality in several brewing districts, and composted lees return to the rice fields — a genuine loop rather than a marketing one.",
              ja:"売り物にならない粕の、華やかならざる主たる用途。粕を飼料とする牛は、いくつかの酒どころで小さな名物になっており、堆肥化された粕は田へ戻る。宣伝上のではなく、実際の循環である。",
              zh:"賣不掉的酒粕最主要、也最不起眼的用途。以酒粕餵養的牛在數個釀酒區是小型地方名產，而堆肥化的酒粕則回到稻田——這是真正的循環，而非行銷上的循環。"} }
        ] },
        { t:"p", text:{
          en:"There is a straightforward economic point behind all of this. A brewery's lees are produced in a two-month window, in quantity, and must be moved. What happens to them is a decent proxy for how well integrated a brewery is with its town: the ones with a queue at the gate in February and a local pickle maker on contract are, generally, the ones with everything else in order too.",
          ja:"この全体の背後には、率直な経済の話がある。粕は二か月ほどの窓のうちに、まとまった量で生まれ、動かさねばならない。それがどこへ行くかは、その蔵が町とどれだけ結びついているかの、なかなか良い代理指標である。二月に門前に列ができ、地元の漬物屋と契約を結んでいる蔵は、たいてい他のことも整っている。",
          zh:"這一切背後有個直白的經濟事實。酒粕在約兩個月的窗口內大量產生，且必須被移走。它們的去向，是衡量一家酒藏與所在城鎮結合程度的相當不錯的替代指標：二月門前有人排隊、並與在地漬物商簽有契約的酒藏，通常其他方面也都井然有序。" } }
      ]
    },

{ t:"section", id:"recipes",
      title:{ en:"Three things to make with it", ja:"作れるもの三つ", zh:"可以做的三樣東西" }, jp:"作り方",
      body:[
        { t:"p", text:{
          en:"Lees keep for months in a freezer and for weeks in a fridge, and a single 500 g pack goes a long way. These three preparations between them cover most of what kasu is for, and none needs anything unusual.",
          ja:"酒粕は冷凍庫で数か月、冷蔵庫で数週間もち、500グラムの一袋がかなり長く使える。以下の三つで、酒粕の用途のほとんどは覆える。特別なものは何も要らない。",
          zh:"酒粕在冷凍庫可放數月、冷藏可放數週，一包 500 公克能用上很久。以下三種作法已涵蓋酒粕的多數用途，且都不需要任何特殊材料。" } },
        { t:"steps", items:[
          { title:{en:"Kasujiru — winter soup",ja:"粕汁",zh:"粕汁"}, jp:"粕汁",
            meta:{en:"40 minutes · serves four",ja:"四十分・四人分",zh:"四十分鐘・四人份"},
            text:{en:"Break 120 g of lees into a bowl, cover with a ladle of warm dashi and leave twenty minutes, then whisk smooth. Simmer daikon, carrot, konnyaku and thin-sliced pork or salted salmon in 800 ml dashi until tender. Stir in the loosened kasu, then a tablespoon of white miso off the heat. Finish with spring onion. It should be cloudy, thick and faintly sweet; do not boil hard once the kasu is in.",
              ja:"酒粕120グラムをほぐして器に入れ、温かい出汁を玉杓子一杯注いで二十分置き、なめらかに溶く。大根、人参、蒟蒻、薄切りの豚肉か塩鮭を出汁800ミリリットルで柔らかくなるまで煮る。溶いた粕を加え、火を止めてから白味噌を大さじ一杯。仕上げに葱を散らす。濁って厚く、かすかに甘いのが正しい。粕を入れてから強く煮立ててはいけない。",
              zh:"把 120 公克酒粕剝碎放入碗中，倒入一勺溫熱高湯靜置二十分鐘，再攪打至滑順。以 800 毫升高湯將白蘿蔔、紅蘿蔔、蒟蒻與薄片豬肉或鹽漬鮭魚煮至軟。拌入化開的酒粕，離火後再加一大匙白味噌。最後撒上蔥花。成品應混濁、濃稠、微甜；加入酒粕後切勿大滾。"} },
          { title:{en:"Kasuzuke — a pickling bed",ja:"粕漬け",zh:"粕漬"}, jp:"粕床",
            meta:{en:"10 minutes, then 1–7 days",ja:"十分、そののち一日から一週間",zh:"十分鐘，然後一至七天"},
            text:{en:"Work 300 g of lees with 3 tablespoons of mirin and 1 of salt into a smooth paste. Pat fish fillets or pork loin completely dry, salt them lightly, rest an hour, wipe again, then bury them in the paste with a sheet of muslin between fish and bed so it comes out cleanly. One day for a thin fillet, three to five for pork. Scrape off the paste — do not rinse — and grill gently; the residual sugar burns fast.",
              ja:"酒粕300グラムに味醂大さじ三、塩大さじ一を練り込み、なめらかな床にする。魚の切り身か豚ロースの水気を完全に拭き、軽く塩をして一時間おき、もう一度拭いてから、ガーゼを挟んで床に埋める。薄い切り身なら一日、豚なら三日から五日。床は洗わずに拭き取り、弱火で焼く。残った糖はすぐ焦げる。",
              zh:"把 300 公克酒粕與三大匙味醂、一大匙鹽揉成滑順的醃床。將魚片或豬里肌徹底擦乾、輕鹽醃一小時、再次擦乾，然後隔一層紗布埋入醃床中，取出時才乾淨。薄魚片一天，豬肉三到五天。取出後刮除醃床——不要沖水——以小火慢烤；殘糖很快就會焦。"} },
          { title:{en:"Amazake from lees",ja:"粕甘酒",zh:"粕甘酒"}, jp:"粕甘酒",
            meta:{en:"10 minutes",ja:"十分",zh:"十分鐘"},
            text:{en:"Break 100 g of lees into 500 ml of hot water, whisk until dissolved, add sugar to taste — 30 to 50 g — and a pinch of salt, and warm gently without boiling. Grate a little ginger over each cup. Remember that this contains alcohol, unlike the kōji version, so it is not for children or for anyone avoiding it.",
              ja:"酒粕100グラムを湯500ミリリットルに入れて溶き、好みで砂糖30から50グラムと塩ひとつまみを加え、煮立てずに温める。生姜を少し擂って各椀に落とす。麹甘酒と違ってこれにはアルコールが含まれることを忘れないこと。子どもや、酒を避ける人には向かない。",
              zh:"把 100 公克酒粕放入 500 毫升熱水中攪散，依口味加入 30 至 50 公克糖與一小撮鹽，小火加熱但不煮沸。每碗刨入少許薑泥。請記得它與麴甘酒不同，含有酒精，因此不適合孩童或需避免酒精者。"} }
        ] }
      ]
    },

    { t:"section", id:"buying",
      title:{ en:"Buying and keeping lees", ja:"酒粕の入手と保存", zh:"酒粕的選購與保存" }, jp:"入手",
      body:[
        { t:"ul", items:[
          { en:"<strong>It is seasonal.</strong> Lees appear when the pressing does — roughly December to April — and the best of it, from the daiginjō pressings, appears in a narrow window in late winter and sells out. Outside the season you will find frozen or aged stock, which is fine for pickling and soup.",
            ja:"<strong>季節のものである。</strong>粕は搾りとともに現れる——おおむね十二月から四月——そして最上のもの、大吟醸の搾りから出るものは、冬の終わりの短い窓のうちに現れ、売り切れる。季を外れれば、冷凍か寝かせたものが手に入る。漬け床や汁物には十分である。",
            zh:"<strong>它有季節性。</strong>酒粕隨壓榨而出現——大約十二月至四月——而其中最好的、來自大吟釀壓榨的酒粕，只在冬末一小段時間內出現，且會售罄。過了產季，你會買到冷凍或熟成的存貨，用來醃漬與煮湯完全足夠。" },
            { en:"<strong>Buy from the brewery if you can.</strong> Breweries sell lees at the gate, often absurdly cheaply, and it will be fresher and better than anything in a supermarket. Some breweries sell only their daiginjō lees and keep the rest for feed or distillation.",
            ja:"<strong>可能なら蔵で買うこと。</strong>蔵は門前で粕を売っており、しばしば呆れるほど安い。そして食料品店のどれよりも新しく、良い。大吟醸の粕だけを売り、残りを飼料や蒸留に回す蔵もある。",
            zh:"<strong>能到酒藏買就到酒藏買。</strong>酒藏會在藏前販售酒粕，價格常低得離譜，而且比超市任何一款都更新鮮、更好。有些酒藏只賣大吟釀的酒粕，其餘留作飼料或蒸餾。" },
          { en:"<strong>Freeze it in portions.</strong> It freezes and thaws perfectly. Divide a large pack into 100 g pieces, wrap each, and take one out as needed. It will keep a year frozen and lose very little.",
            ja:"<strong>小分けにして冷凍すること。</strong>凍らせても解凍しても問題なく戻る。大きな袋を100グラムずつに分けて包み、必要なだけ取り出す。冷凍で一年もち、失われるものはごくわずかである。",
            zh:"<strong>分裝冷凍。</strong>它可完美冷凍與解凍。把大包分成 100 公克一份、各自包好，需要時取一份。冷凍可放一年，且損失極少。" },
          { en:"<strong>Darkening is not spoilage.</strong> Kasu turns from white to cream to light brown over months as the same Maillard reaction that ages sake works on it. The flavour deepens and becomes more savoury. It is a different ingredient, not a ruined one — <em>fumikomi-kasu</em>, aged lees, is deliberately made this way.",
            ja:"<strong>色が濃くなるのは傷みではない。</strong>粕は数か月のうちに白から乳白へ、そして淡い褐色へ変わる。日本酒を熟成させるのと同じメイラード反応が働くためである。味は深く、旨味を増す。傷んだのではなく、別の素材になったのである。踏込粕は、意図してこの状態に作られる。",
            zh:"<strong>顏色變深不是壞掉。</strong>酒粕會在數月間由白轉乳白、再轉淺褐，因為使清酒熟成的同一種梅納反應也在它身上作用。風味變深、旨味增加。它不是壞了，而是成了另一種材料——「踏込粕」正是刻意做成這個狀態。" }
        ] },
        { t:"tiny", text:{
          en:"One practical note for readers outside Japan: kasu is exported and sold frozen by Japanese grocers and by several online specialists, and a number of non-Japanese breweries now sell their own. It travels well, which is more than can be said for most of what a brewery produces.",
          ja:"日本の外の読み手への実際的な注記を一つ。酒粕は輸出されており、日系の食料品店やいくつかのオンラインの専門店で冷凍で売られている。日本国外の蔵が自前の粕を売っている例も増えた。よく旅をする素材である——蔵が生み出すものの多くについては、そうは言えない。",
          zh:"給日本境外讀者的一項實務提醒：酒粕有出口，日系食品店與數家線上專門店都以冷凍形式販售，日本境外的酒廠也有愈來愈多自售酒粕。它很耐得住長途運送——而酒藏所生產的其他多數東西，可就不是如此了。" } }
      ]
    },

{ t:"section", id:"chemistry",
      title:{ en:"What is actually left in the cake", ja:"粕に残っているもの", zh:"酒粕裡究竟剩下什麼" }, jp:"組成の化学",
      body:[
        { t:"p", text:{
          en:"Lees are the fraction the press could not squeeze into liquid, which means they hold everything in the mash that was solid, everything that was slow to dissolve, and everything alive. Three things in particular explain why kasu behaves the way it does in a kitchen.",
          ja:"粕とは、圧搾機が液体へ絞りきれなかった画分である。つまり醪のうち固形であったもの、溶けるのが遅かったもの、そして生きていたもののすべてを抱えている。とりわけ三つのものが、台所における酒粕の振る舞いを説明する。",
          zh:"酒粕是壓榨機無法擠成液體的那一部分，也就是說，它保有醪中所有固態的、溶解得慢的，以及活著的東西。其中特別是三樣東西，解釋了酒粕在廚房裡為何會有那些表現。" } },

        { t:"defs", items:[
          { term:{ en:"Undissolved starch and protein", ja:"溶けきらなかった澱粉とたんぱく質", zh:"未溶解的澱粉與蛋白質" }, jp:"未溶解物", romaji:"mi-yōkai-butsu",
            def:{ en:"The core of the cake. Rice starch that the kōji enzymes never reached, plus the grain's protein, concentrated by the removal of everything that did dissolve. This is why kasu thickens a soup on its own without flour and why a kasu marinade forms a paste rather than a liquid. The higher the polishing ratio of the sake — that is, the more of the grain that was milled away — the softer and more protein-rich the resulting lees.",
              ja:"粕の核である。麹の酵素が届かなかった米の澱粉、そして溶けたものがすべて取り去られたことで濃縮された米のたんぱく質。粕が小麦粉なしに汁を厚くする理由であり、粕の漬け床が液ではなく練りものになる理由である。酒の精米歩合が低いほど——つまり削られた部分が多いほど——残る粕は柔らかく、たんぱく質に富む。",
              zh:"這是酒粕的核心：麴酵素未及作用的米澱粉，加上因所有可溶物被移除而被濃縮的米蛋白質。這就是為什麼酒粕不加麵粉也能讓湯變稠，也是為什麼酒粕醃床是糊狀而非液狀。清酒的精米步合越低——也就是被磨掉的部分越多——留下的酒粕就越柔軟、蛋白質也越豐富。" } },
          { term:{ en:"Live enzymes", ja:"生きた酵素", zh:"活的酵素" }, jp:"酵素", romaji:"kōso",
            def:{ en:"Kasu from an unpasteurised press carries active amylases and proteases. These are what make a kasu pickling bed work: given time and salt, the enzymes break down the proteins in fish or vegetables into free amino acids, which is a slow savoury transformation and not merely a flavouring. It is also why a kasu bed keeps changing and eventually exhausts itself, and why kasu makes a genuinely effective meat tenderiser.",
              ja:"火入れを経ていない粕は、働く糖化酵素とたんぱく質分解酵素を抱えている。粕床が機能するのはこれによる——時間と塩を与えれば、酵素は魚や野菜のたんぱく質を遊離アミノ酸へ分解する。これは単なる風味づけではなく、緩慢な旨味への変換である。粕床が変わり続け、やがて力尽きる理由でもあり、粕が肉を柔らかくするのに実際よく効く理由でもある。",
              zh:"未經火入的酒粕帶有仍在作用的澱粉酶與蛋白酶。粕床之所以有效，靠的就是它們：只要有時間與鹽，酵素會把魚或蔬菜的蛋白質分解為游離胺基酸——那是一種緩慢的旨味轉化，而不只是調味。這也是粕床會持續變化、最終力竭的原因，以及酒粕確實能有效軟化肉類的原因。" } },
          { term:{ en:"Alcohol", ja:"アルコール", zh:"酒精" }, jp:"残存アルコール", romaji:"zanzon alcohol",
            def:{ en:"Fresh lees typically run somewhere between five and nine per cent alcohol by weight — comparable to beer, held in a paste. This matters practically: kasu amazake made without boiling is an alcoholic drink and should not be given to children or to anyone avoiding alcohol, and a kasu dish served after only brief heating will retain some. Long simmering or grilling drives most of it off, but not instantly and not entirely.",
              ja:"新しい粕は、重量あたりおよそ五から九パーセントのアルコールを含む——ビールに比肩する濃度が、練りもののなかに保たれている。これは実際的に重要である。煮切らずに作った粕の甘酒はアルコール飲料であり、子どもや酒を避ける人に供してはならない。短く加熱しただけの粕料理にも残る。長く煮る、あるいは炙ることでその大半は飛ぶが、瞬時ではなく、また完全でもない。",
              zh:"新鮮酒粕的酒精含量通常在重量的五到九個百分點之間——濃度堪比啤酒，只是被保存在糊狀物裡。這在實務上很重要：未經煮沸的酒粕甘酒是含酒精飲料，不應給兒童或需避免酒精的人飲用；只稍微加熱的酒粕料理也會殘留。長時間熬煮或炙烤能揮發掉大部分，但既非瞬間，也非完全。" } }
        ] },

        { t:"grid", cols:3, cells:[
          { k:{ en:"Soft lees", ja:"柔らかい粕", zh:"柔軟的酒粕" }, jp:"大吟醸粕",
            v:{ en:"From a gentle press", ja:"穏やかな搾りから", zh:"來自溫和的壓榨" },
            d:{ en:"Wetter, paler, sweeter, more aromatic, and higher in residual alcohol. Best where it will not be cooked hard: amazake, dressings, marinades, ice cream.",
              ja:"水分が多く、色は淡く、甘く、香りが高く、残存アルコールも多い。強く加熱しない用途に向く——甘酒、和え衣、漬け込み、アイスクリーム。",
              zh:"含水較多、顏色較淡、較甜、香氣較高，殘留酒精也較多。適合不會重度加熱的用途：甘酒、拌醬、醃漬、冰淇淋。" } },
          { k:{ en:"Hard lees", ja:"固い粕", zh:"結實的酒粕" }, jp:"普通酒粕",
            v:{ en:"From a hard machine press", ja:"強い機械搾りから", zh:"來自強力機械壓榨" },
            d:{ en:"Drier, firmer, more savoury, cheaper, and sold in slabs. The everyday winter material for soup and grilling, and the right choice for a pickling bed that has to hold its shape.",
              ja:"乾いて締まり、旨味が濃く、安く、板状で売られる。汁と炙りのための冬の日常の材料であり、形を保たねばならない漬け床にはこちらが正しい。",
              zh:"較乾、較結實、旨味較濃、較便宜，以板狀販售。這是冬季煮湯與炙烤的日常材料，也是需要維持形狀的醃床的正確選擇。" } },
          { k:{ en:"Aged lees", ja:"熟成した粕", zh:"熟成的酒粕" }, jp:"踏込粕",
            v:{ en:"Months under weight", ja:"重しの下で数か月", zh:"在重物下數月" },
            d:{ en:"Browned by the slow Maillard reaction between the lees' own sugars and amino acids, and intensely savoury. Used for Nara-zuke and, in small quantities, as a seasoning in its own right — a spoonful does what a spoonful of miso does, differently.",
              ja:"粕自身の糖とアミノ酸との緩やかなメイラード反応で褐色に変わり、旨味が強い。奈良漬に用いられ、また少量を調味料そのものとしても使う——匙一杯が、味噌の匙一杯とは別の仕方で、同じ仕事をする。",
              zh:"因酒粕自身的糖與胺基酸緩慢進行梅納反應而轉為褐色，旨味濃烈。用於奈良漬，也可少量直接作為調味料——一匙的作用相當於一匙味噌，只是方式不同。" } }
        ] }
      ] },

    { t:"section", id:"economics",
      title:{ en:"The economics of a by-product", ja:"副産物の経済", zh:"副產物的經濟" }, jp:"粕歩合と経営",
      body:[
        { t:"p", text:{
          en:"Lees are measured by <em>kasu-buai</em>, the lees ratio: the weight of lees expressed as a percentage of the white rice that went in. It is one of the quiet numbers by which a brewery's whole strategy can be read.",
          ja:"粕は粕歩合で測られる——投入した白米に対する粕の重量比である。蔵の戦略全体が読み取れる、目立たぬ数値の一つである。",
          zh:"酒粕以「粕步合」計量：酒粕重量相對於投入白米的百分比。這是能讀出一家酒藏整體策略的、幾個不張揚的數字之一。" } },

        { t:"table",
          cols:[{en:"Lees ratio",ja:"粕歩合",zh:"粕步合"},{en:"Typical of",ja:"典型",zh:"典型情況"},{en:"What it implies",ja:"含意",zh:"意味著什麼"}],
          numCols:[0],
          rows:[
            [{en:"20–25%",ja:"20〜25%",zh:"20–25%"},{en:"Volume futsūshu, pressed hard",ja:"強く搾った普通酒",zh:"強力壓榨的普通酒"},
             {en:"Maximum extraction. Every possible drop has been taken into the sake, which is the correct decision for a low-margin product and produces dry, firm board lees.",
              ja:"抽出を最大化している。ありうる限りの一滴まで酒へ取り込んでおり、薄利の商品としては正しい判断であって、乾いて締まった板粕を生む。",
              zh:"追求最大萃取。能取的每一滴都進了酒裡；對低毛利產品而言這是正確決定，並產出乾而結實的板粕。"}],
            [{en:"30–40%",ja:"30〜40%",zh:"30–40%"},{en:"Junmai and ginjō",ja:"純米・吟醸",zh:"純米與吟釀"},
             {en:"The normal working range for quality sake. The press is stopped before the bitter, coarse final fraction is forced through the cloth.",
              ja:"良質の酒における通常の作業域である。苦く粗い最後の画分が袋を通って押し出される前に、搾りを止める。",
              zh:"優質清酒的常態工作區間。在苦澀粗糙的最後一段被硬擠過酒袋之前，就停止壓榨。"}],
            [{en:"45–55% or more",ja:"45〜55%以上",zh:"45–55% 以上"},{en:"Drip-pressed competition daiginjō",ja:"雫搾りの鑑評会用大吟醸",zh:"雫取的競賽用大吟釀"},
             {en:"Half the rice, or more, leaves as lees. The brewery is deliberately abandoning yield to avoid any pressed-in harshness — which is a large part of why such bottles cost what they do.",
              ja:"米の半分、あるいはそれ以上が粕として出る。搾り込まれた雑味を避けるために、蔵は意図して歩留まりを捨てている。そうした瓶があの価格である理由の大きな部分がこれである。",
              zh:"一半甚至更多的米以酒粕的形式離場。酒藏刻意放棄產率，以避免任何被壓出來的粗澀感——這正是這類酒之所以賣那個價錢的一大原因。"}]
          ] },

        { t:"p", text:{
          en:"The consequence is that lees are not a marginal item. A brewery working at a 35% lees ratio produces, by weight, roughly a third as much kasu as the rice it bought, every season, in a concentrated three-month window. Historically this was sold — to pickle makers, to shōchū distillers, to farmers as feed and fertiliser, and to households in winter. Today the domestic market for kasu has shrunk faster than sake production has, and disposal is a real cost for some breweries, which is why the current interest in kasu as an ingredient for baking, dairy, cosmetics and animal feed is a commercial project as well as a culinary one.",
          ja:"帰結として、粕は些末な品目ではない。粕歩合35%で仕事をする蔵は、毎季、買った米の重量のおよそ三分の一の粕を、三か月に凝縮された期間に生む。歴史的にはこれは売られた——漬物屋へ、焼酎の蒸溜へ、飼料・肥料として農家へ、そして冬の家庭へ。今日、粕の国内市場は日本酒の生産以上に速く縮んでおり、一部の蔵にとって処分は現実の費用である。粕を製菓、乳製品、化粧品、飼料の素材として見直す近年の関心が、料理の企てであると同時に商業の企てでもあるのはそのためである。",
          zh:"其結果是：酒粕並非邊角料。一家以 35% 粕步合作業的酒藏，每一季都會在濃縮於三個月的窗口內，產出約當所購米重三分之一的酒粕。歷史上這些都賣得掉——賣給醃漬業者、燒酎蒸餾廠、作為飼料與肥料賣給農家，以及冬天賣給家庭。如今酒粕的國內市場萎縮得比清酒產量還快，對部分酒藏而言，處理它是一筆真實的成本。因此近年把酒粕重新看作烘焙、乳製品、化妝品與飼料原料的興趣，既是料理上的計畫，也是商業上的計畫。" } },

        { t:"panel", title:{ en:"When to buy it, and how to keep it", ja:"いつ買い、どう保つか", zh:"何時買、怎麼保存" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Season.</strong> Fresh lees appear from roughly December to March and are gone by early summer. Outside that window what is available is either frozen or aged, both of which are perfectly usable but different.",
                ja:"<strong>季節。</strong>新しい粕はおよそ十二月から三月に出回り、初夏には消える。その外の時期に手に入るのは冷凍か熟成のいずれかであり、どちらも十分に使えるが、別のものである。",
                zh:"<strong>季節。</strong>新鮮酒粕大約在十二月至三月上市，入夏前就沒了。這段期間之外能買到的不是冷凍就是熟成品；兩者都完全可用，但性質不同。" },
              { en:"<strong>Freezing.</strong> Lees freeze extremely well and keep for months; the enzymes survive and so does the texture. Divide into flat portions before freezing, because a frozen block is close to impossible to break up.",
                ja:"<strong>冷凍。</strong>粕はきわめてよく凍り、数か月保つ。酵素も食感も生き残る。凍らせる前に平らに小分けすること。凍った塊は割ることがほとんど不可能である。",
                zh:"<strong>冷凍。</strong>酒粕非常耐凍，可放數月；酵素與質地都能留存。冷凍前務必分成扁平小份，因為一整塊凍硬的酒粕幾乎無法弄開。" },
              { en:"<strong>Refrigeration.</strong> In the fridge, wrapped tightly, lees will slowly brown and deepen for months rather than spoil — this is maturation, not decay, and many cooks prefer it after a few weeks. Discard only for mould that is not the white bloom of yeast, or for a sharp sour smell.",
                ja:"<strong>冷蔵。</strong>密に包んで冷蔵すれば、粕は腐るのではなく、数か月かけてゆっくり褐変し深まる。これは劣化ではなく熟成であり、数週を経たものを好む料理人は多い。捨てるべきは、酵母の白い花ではないカビが生えた場合、あるいは鋭い酸臭がする場合のみである。",
                zh:"<strong>冷藏。</strong>密封冷藏的酒粕不會腐壞，而是在數月間緩慢褐變、風味加深——這是熟成而非敗壞，許多廚師更偏好放了幾週的。只有在長出非酵母白霜的黴，或出現尖銳酸臭時才該丟棄。" },
              { en:"<strong>Softening.</strong> Hard board lees dissolve badly if dropped into liquid whole. Tear into pieces, cover with a little of the warm cooking liquid, and leave for ten minutes before whisking — the difference between a smooth kasujiru and a lumpy one is entirely this step.",
                ja:"<strong>ふやかす。</strong>固い板粕を丸のまま液に落とすと、うまく溶けない。ちぎって、温かい煮汁を少し注ぎ、十分置いてから溶く。滑らかな粕汁とだまの粕汁とを分けるのは、まったくこの一手である。",
                zh:"<strong>先泡軟。</strong>整塊硬板粕直接丟進湯裡是化不開的。撕成小塊，澆上少量溫熱的湯汁，靜置十分鐘再攪散——滑順的粕汁與結塊的粕汁，差別全在這一步。" }
            ] }
          ] }
      ] },

    { t:"related", items:[
      { href:"pressing.html", why:{ en:"The step it is produced by.", ja:"それが生まれる段。", zh:"它是在哪一個步驟裡產生的。" } },
      { href:"batch.html", why:{ en:"How much of a batch it actually is.", ja:"一仕込みのうち、実際にどれだけを占めるか。", zh:"它實際上占一批酒的多少。" } },
      { href:"cocktails.html", why:{ en:"The other kitchen use of a brewery's output.", ja:"蔵の産物の、もう一つの台所での用い。", zh:"酒藏產物在廚房裡的另一種用途。" } },
      { href:"sustainability.html", why:{ en:"A by-product that is already fully used.", ja:"すでに余さず用いられている副産物。", zh:"一項已經被完全利用的副產物。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- mirin */
SAKE.pages["mirin"] = {
  kicker: { en: "Wider world · 04", ja: "周辺 · 04", zh: "周邊 · 04" },
  title:  { en: "Mirin and the Cooking Alcohols", ja: "みりんと料理の酒", zh: "味醂與料理用酒" },
  jp: "調味料としての酒",
  lede: {
    en: "There is a bottle in every Japanese kitchen that is made almost exactly like sake and tastes nothing like it, because at one specific moment the brewer stops the process rather than letting it run. Mirin is sake with the fermentation prevented — and the shelf it sits on is one of the clearest examples anywhere of a tax boundary shaping a product. This page is about how mirin is made, why there are three different bottles all claiming to be it, what each actually does in a pan, and how a sweet drink for summer evenings became a cooking ingredient.",
    ja: "日本のいかなる台所にも、清酒とほとんど同じ仕方で造られながら、まったく異なる味をもつ一本がある。ある定まった一瞬において、造り手が進めるのではなく止めるからである。みりんとは、醗酵を妨げられた清酒である。そしてそれが載る棚は、税の境が品を形づくることの、いずこにおいても最も明らかな例の一つである。この頁は、みりんがいかに造られるか、なぜそれを名乗る三つの異なる瓶があるのか、それぞれが鍋のなかで実際に何をなすのか、そして夏の宵の甘い飲みものがいかにして料理の材となったのかについてである。",
    zh: "每一間日本廚房裡都有一瓶東西，它的做法幾乎與清酒一模一樣，嘗起來卻毫不相似——因為在某個特定的時刻，釀造者選擇了停止而非放行。味醂就是「被阻止發酵的清酒」；而它所在的那層貨架，是世界上最清楚不過的「稅務界線塑造產品」的範例之一。本頁談味醂怎麼做、為什麼有三種不同的瓶子都自稱是它、每一種在鍋裡實際做了什麼，以及一種夏夜的甜飲如何變成了一種料理材料。"
  },
  body: [

    { t:"section", id:"what",
      title:{ en:"Sake with the fermentation prevented", ja:"醗酵を妨げられた清酒", zh:"被阻止發酵的清酒" }, jp:"本みりんの造り",
      body:[
        { t:"p", text:{
          en:"Real mirin — hon-mirin — is made from glutinous rice, rice kōji and distilled alcohol, and the elegance of it lies in the order. The kōji's enzymes get to work on the glutinous rice exactly as they would in a sake mash, breaking starch down into glucose. But there is already forty per cent alcohol in the tank, and yeast cannot work in that. So the sugar accumulates and stays. Two to three months later, the liquid is drained: sweet, amber, faintly like an amontillado, and about fourteen per cent alcohol.",
          ja:"真のみりん——本みりん——は、糯米と米麹と蒸留した酒精から造られ、その優雅さは順にある。麹の酵素は、清酒の醪におけるのとまさしく同じように糯米に働きかけ、澱粉をぶどう糖へ砕く。だが槽にはすでに四十度の酒精があり、酵母はそのなかで働きえない。ゆえに糖は積もり、そのまま留まる。二月か三月ののち、液が引かれる。甘く、琥珀色で、かすかに熟した葡萄酒めき、およそ十四度である。",
          zh:"真正的味醂——本味醂——由糯米、米麴與蒸餾酒精製成，而它的優雅之處在於順序。麴的酵素會像在清酒的醪中一樣作用於糯米，把澱粉分解成葡萄糖。但槽裡已經有四十度的酒精，酵母無法在那樣的環境中工作。於是糖累積下來，並留在那裡。兩到三個月之後把液體瀝出：甜、琥珀色、隱約像一款陳年雪莉，酒精度約十四度。" } },

        { t:"p", text:{
          en:"Set that beside a sake mash and the whole family relationship becomes visible. Sake and mirin use the same mould doing the same enzymatic work on the same crop; they differ in whether a yeast is allowed to eat the result. One ferments the sugar into alcohol and aroma. The other locks the sugar in place with alcohol borrowed from elsewhere. It is the same craft, run to a different stopping point.",
          ja:"それを清酒の醪のかたわらに置けば、一族の関わりの全体が見えてくる。清酒とみりんは、同じ作物に対し、同じ黴が同じ酵素の仕事をなす。両者が異なるのは、その結果を酵母が食うことを許されるか否かにおいてである。一方は糖を酒精と香りへ醗酵させる。他方は、他所から借りた酒精をもって糖をその場に閉じ込める。同じ技を、異なる止まり所まで走らせたものである。",
          zh:"把它與清酒的醪並排，整個家族關係就顯現了。清酒與味醂使用同一種黴、對同一種作物做同樣的酵素工作；兩者的差別在於「是否容許酵母去吃掉那個結果」。一個把糖發酵成酒精與香氣，另一個用從別處借來的酒精把糖鎖在原地。同一門技藝，跑到不同的停止點。" } },

        { t:"defs", items:[
          { term:{ en:"Glutinous rice, not table rice", ja:"糯米であり、粳米ではない", zh:"用糯米，不是粳米" }, jp:"もち米",
            def:{ en:"Mirin is made from mochigome, whose starch is almost entirely amylopectin — highly branched, easily broken down, and therefore convertible to glucose faster and more completely than the amylose-rich starch of ordinary rice. The choice is not traditional decoration; it is why mirin can reach an extract content of forty per cent or more where a sake mash would have fermented the sugar away long before.",
              ja:"みりんは糯米から造られる。その澱粉はほとんどすべてがアミロペクチンであり、枝分かれが多く、砕けやすく、ゆえに、アミロースに富む常の米の澱粉より速く、より完全にぶどう糖へ変わりうる。この選びは伝えの飾りではない。清酒の醪ならばとうに糖を醗酵させ去っていたであろうところで、みりんが四十パーセント以上のエキス分に達しうる理由である。",
              zh:"味醂使用糯米，其澱粉幾乎全是支鏈澱粉——高度分支、容易分解，因此比富含直鏈澱粉的一般米更快、更徹底地轉化為葡萄糖。這個選擇不是傳統上的裝飾；它正是為什麼味醂能達到百分之四十以上的糖分萃取值，而清酒的醪早在那之前就已經把糖發酵掉了。" } },
          { term:{ en:"The alcohol that stops the yeast", ja:"酵母を止める酒精", zh:"讓酵母停下的酒精" }, jp:"焼酎・醸造アルコール",
            def:{ en:"Traditionally the alcohol was shōchū, and the best mirin is still made with it; industrially it is usually neutral brewing alcohol. Either way its job is the same: to be present from the beginning at a strength no yeast can survive, so that the enzymes work in an environment where nothing can ferment what they produce.",
              ja:"伝えとしてその酒精は焼酎であり、最も良いみりんは今なおそれで造られる。工業においてはたいてい中性の醸造アルコールである。いずれにせよその務めは同じである。すなわち、いかなる酵母も生き延びえぬ強さで初めから在り、酵素が、それらの生むものを何ものも醗酵させえぬ場において働くようにすることである。",
              zh:"傳統上這個酒精是燒酎，最好的味醂至今仍以它製作；工業生產則通常使用中性的釀造酒精。無論哪一種，它的任務都相同：從一開始就以一種沒有酵母能存活的濃度存在，好讓酵素在「沒有任何東西能發酵它們的產物」的環境中工作。" } },
          { term:{ en:"Kobore-ume — the lees", ja:"こぼれ梅", zh:"こぼれ梅（味醂粕）" }, jp:"味醂粕",
            def:{ en:"Pressing mirin leaves a sweet white cake of spent rice, called kobore-ume — \"spilled plum blossom\", for the way it looks. It is edible, delicious, sold at mirin breweries and almost unknown outside them, and it is the exact counterpart of sake kasu.",
              ja:"みりんを搾れば、甘く白い米の塊が残る。その見た目ゆえに、こぼれ梅と呼ばれる。食べうるものであり、美味であり、みりんの蔵で売られ、その外ではほとんど知られていない。そして酒粕のまさしく対をなすものである。",
              zh:"壓搾味醂之後會留下一塊甜的白色米渣，因其外觀而被稱為「こぼれ梅」——散落的梅花。它可以吃，而且很美味，在味醂酒藏有售，出了那裡幾乎無人知曉；它正是酒粕的對應物。" } }
        ] }
      ] },

    { t:"section", id:"law",
      title:{ en:"Three bottles, one tax line", ja:"三つの瓶、一本の税の線", zh:"三種瓶子，一條稅務界線" }, jp:"表示と課税",
      body:[
        { t:"p", text:{
          en:"Walk to the seasonings aisle of a Japanese supermarket and you will find at least three products that look like mirin, at three different prices. The differences between them are not culinary decisions dressed up as legal ones. They are legal decisions that produced culinary consequences.",
          ja:"日本のスーパーマーケットの調味料の棚へ行けば、みりんに見える少なくとも三つの品を、三つの異なる値で見出す。それらのあいだの差は、法の衣を着せられた料理の決めではない。それらは料理の帰結を生んだ法の決めである。",
          zh:"走到日本超市的調味料區，你會找到至少三種看起來像味醂的產品，標著三種不同的價格。它們之間的差別不是「披著法律外衣的烹飪決定」，而是「產生了烹飪後果的法律決定」。" } },

        { t:"figure",
          caption:{
            en:"The seasonings shelf as a tax diagram. The dashed line is the liquor-tax boundary: anything above it is legally alcohol and pays duty, anything below it is a food. Every product on the shelf is positioned relative to that line rather than to any culinary ideal.",
            ja:"税の図としての調味料の棚。破線は酒税の境である。その上にあるものは法において酒類であり税を払い、下にあるものは食品である。棚の上のいずれの品も、料理の理想に対してではなく、その線に対して置かれている。",
            zh:"作為稅務圖表的調味料貨架。虛線是酒稅界線：線以上者在法律上屬於酒類、須繳稅，線以下者則是食品。貨架上的每一項產品，都是相對於那條線、而非相對於任何烹飪理想而被定位的。" },
          svg: function (lang, L) {
            var W = 740, H = 400, X0 = 96, X1 = W - 40, Y0 = 34, Y1 = H - 86;
            /* x = salt g/100 mL (0 to 3), y = alcohol % (0 to 22) */
            function px(v) { return X0 + (v / 3) * (X1 - X0); }
            function py(v) { return Y1 - (v / 22) * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* untaxed zone wash: salt >= 1.5 OR alcohol < 1 */
            s += '<rect x="' + px(1.5) + '" y="' + Y0 + '" width="' + (X1 - px(1.5)) + '" height="' + (Y1 - Y0) + '" fill="#F0EDE4"/>';
            s += '<rect x="' + X0 + '" y="' + py(1) + '" width="' + (X1 - X0) + '" height="' + (Y1 - py(1)) + '" fill="#F0EDE4"/>';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="none" stroke="#CDC6B9"/>';
            /* the tax boundary */
            s += '<path d="M' + X0 + ' ' + py(1) + ' L' + px(1.5) + ' ' + py(1) + ' L' + px(1.5) + ' ' + Y0 + '" fill="none" stroke="#7C6B52" stroke-dasharray="5 3"/>';
            s += '<text x="' + (px(1.5) + 8) + '" y="' + (Y0 + 14) + '" font-size="10" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "この外は酒税がかからない" : lang === "zh" ? "此線之外不課酒稅" : "outside this line: no liquor tax") + '</text>';
            /* axes */
            var yt = [0, 5, 10, 15, 20];
            for (var i = 0; i < yt.length; i++) {
              s += '<line x1="' + (X0 - 5) + '" y1="' + py(yt[i]) + '" x2="' + X0 + '" y2="' + py(yt[i]) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + (X0 - 10) + '" y="' + (py(yt[i]) + 3.5) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + yt[i] + '</text>';
            }
            var xt = [0, 1, 2, 3];
            for (i = 0; i < xt.length; i++) {
              s += '<line x1="' + px(xt[i]) + '" y1="' + Y1 + '" x2="' + px(xt[i]) + '" y2="' + (Y1 + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + px(xt[i]) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + xt[i] + '</text>';
            }
            s += '<text x="' + (X0 - 10) + '" y="' + (Y0 - 12) + '" text-anchor="end" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "度" : lang === "zh" ? "度" : "% ABV") + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 34) + '" text-anchor="end" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "食塩 g / 100 mL" : lang === "zh" ? "食鹽 g／100 mL" : "SALT, g PER 100 mL") + '</text>';
            var pts = [
              { x:0.0, y:14, a:"start", dy:18, n:{ en:"Hon-mirin", ja:"本みりん", zh:"本味醂" }, d:{ en:"taxed as liquor", ja:"酒類として課税", zh:"以酒類課稅" } },
              { x:0.0, y:15, a:"start", dy:-16, n:{ en:"Ry\u014dri seishu", ja:"料理清酒", zh:"料理清酒" }, d:{ en:"unsalted, taxed", ja:"無塩、課税", zh:"無鹽，課稅" } },
              { x:2.1, y:13, a:"end", dy:0, n:{ en:"Fermented seasoning", ja:"発酵調味料", zh:"發酵調味料" }, d:{ en:"salted, untaxed", ja:"加塩、無税", zh:"加鹽，免稅" } },
              { x:2.4, y:8,  a:"end", dy:0, n:{ en:"Ry\u014drishu", ja:"料理酒", zh:"料理酒" }, d:{ en:"salted cooking sake", ja:"塩を加えた料理の酒", zh:"加鹽的料理用酒" } },
              { x:0.4, y:0.5, a:"start", dy:44, n:{ en:"Mirin-style seasoning", ja:"みりん風調味料", zh:"味醂風調味料" }, d:{ en:"sugar syrup, no ferment", ja:"糖の液、醗酵なし", zh:"糖漿，未發酵" } }
            ];
            for (i = 0; i < pts.length; i++) {
              var p = pts[i], X = px(p.x), Y = py(p.y);
              s += '<rect x="' + (X - 4) + '" y="' + (Y - 4) + '" width="8" height="8" fill="#7C6B52"/>';
              var tx = p.a === "end" ? X - 11 : X + 11;
              s += '<text x="' + tx + '" y="' + (Y - 1 + p.dy) + '" text-anchor="' + p.a + '" font-size="12" fill="#201E1B">' + L(p.n) + '</text>';
              s += '<text x="' + tx + '" y="' + (Y + 13 + p.dy) + '" text-anchor="' + p.a + '" font-size="9.5" fill="#8B857C">' + L(p.d) + '</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"table",
          caption:{ en:"What is actually in each bottle", ja:"いずれの瓶に実際に何があるか", zh:"每一瓶裡實際上是什麼" },
          cols:[ { en:"Product", ja:"品", zh:"產品" }, "",
                 { en:"Alcohol", ja:"酒精", zh:"酒精" },
                 { en:"What it is", ja:"何であるか", zh:"是什麼" } ],
          jpCols:[1],
          rows:[
            [ { en:"Hon-mirin", ja:"本みりん", zh:"本味醂" }, "本みりん", "≈14%",
              { en:"The real thing: glutinous rice, rice kōji and distilled alcohol, brewed and aged. Extract content of forty per cent or more. Legally a liquor, so it carries duty and — until the licensing rules were relaxed — could only be sold by a licensed shop. That single legal fact is why the two imitations below exist.",
                ja:"真のものである。糯米、米麹、蒸留した酒精を醸し、寝かせたもの。エキス分は四十パーセント以上。法において酒類であり、ゆえに税を負い、そして免許の定めが緩められるまでは、免許ある店でしか売りえなかった。その一つの法の事実こそ、以下の二つの模倣が存在する理由である。",
                zh:"真貨：糯米、米麴與蒸餾酒精，經釀造與熟成。糖分萃取值百分之四十以上。法律上屬酒類，因此要課稅，而且在許可規定放寬之前只能由持照店家販售。正是這單一項法律事實，造就了以下兩種仿製品的存在。" } ],
            [ { en:"Fermented seasoning", ja:"発酵調味料", zh:"發酵調味料" }, "みりんタイプ", "8–20%",
              { en:"Brewed like mirin, then salted — at least 1.5 grams per 100 millilitres — so that nobody would drink it. Salt is what takes it out of the liquor tax entirely. It behaves in a pan much like hon-mirin, but the salt is real and has to be subtracted from whatever else you were going to season with.",
                ja:"みりんのように醸し、そののち塩を加える。百ミリリットルあたり一・五グラム以上であり、誰も飲まぬようにである。塩こそが、それを酒税からすっかり外す。鍋のなかでは本みりんによく似て振る舞うが、その塩は実であり、他に加えるつもりであった塩から差し引かれねばならない。",
                zh:"像味醂一樣釀造，然後加鹽——每一百毫升至少一・五公克——好讓沒有人會去喝它。鹽正是把它完全帶出酒稅範圍的關鍵。它在鍋中的表現與本味醂相當接近，但那些鹽是真的，必須從你原本打算另外加的鹽裡扣掉。" } ],
            [ { en:"Mirin-style seasoning", ja:"みりん風調味料", zh:"味醂風調味料" }, "みりん風", "<1%",
              { en:"Not brewed at all: glucose syrup, acidity regulators, flavourings and a trace of alcohol, assembled to taste approximately like mirin. It browns and sweetens, but it cannot do the things alcohol does — no penetration, no firming of proteins, no lifting of odours. Cheap, and legally a food.",
                ja:"まったく醸されていない。ぶどう糖の液、酸味の調整剤、香料、そして痕跡ほどの酒精を、みりんにおおよそ似た味となるよう組み立てたものである。褐色にし甘くするが、酒精のなす事どもはなしえない。染み入ることも、蛋白を締めることも、臭みを引き上げることもない。安く、そして法において食品である。",
                zh:"根本沒有經過釀造：葡萄糖漿、酸度調節劑、香料，以及微量酒精，組合成大致像味醂的味道。它能上色與增甜，但做不到酒精所做的事——不會滲透、不會使蛋白質收緊、不會帶走腥味。便宜，而且在法律上是食品。" } ],
            [ { en:"Ryōrishu", ja:"料理酒", zh:"料理酒" }, "料理酒", "≈13%",
              { en:"Sake with salt added for the same tax reason. Convenient and everywhere, and the salt again has to be counted. For anything delicate it is worth knowing that ordinary drinking sake works better and costs little more.",
                ja:"同じ税の理由で塩を加えられた清酒である。手軽でどこにでもあり、そしてその塩はまた数えられねばならない。繊細なものについては、並の飲む清酒のほうが良く働き、値もさして変わらぬと知っておく値打ちがある。",
                zh:"為了同樣的稅務理由而加鹽的清酒。方便且隨處可見，而那些鹽同樣必須計入。對任何細膩的菜色而言，值得知道：一般拿來喝的清酒表現更好，而且貴不了多少。" } ],
            [ { en:"Ryōri seishu", ja:"料理清酒", zh:"料理清酒" }, "料理清酒", "≈13–15%",
              { en:"Unsalted cooking sake, sold as a liquor and taxed as one. It exists because professional kitchens wanted the performance of drinking sake without the price of a drinking label, and it is the right thing to keep beside the stove.",
                ja:"塩を加えぬ料理の清酒であり、酒類として売られ、そのように課される。玄人の厨房が、飲む酒の札の値なしにその働きを望んだゆえに存在し、そして竈のかたわらに置くべき正しいものである。",
                zh:"不加鹽的料理用清酒，以酒類販售並如此課稅。它之所以存在，是因為專業廚房想要飲用清酒的性能，卻不想付飲用酒標的價錢；而它正是該擺在爐邊的那一瓶。" } ]
          ] }
      ] },

    { t:"section", id:"making",
      title:{ en:"How the sweetness is made", ja:"甘さはどう作られるか", zh:"甜味是怎麼造出來的" }, jp:"製法",
      body:[
        { t:"p", text:{
          en:"Everything about mirin follows from one decision taken at the start: the alcohol goes into the tank first. In sake the alcohol is the product of what happens in the tank; in mirin it is the condition under which anything happens at all. Put roughly forty per cent spirit into a mash of steamed glutinous rice and rice kōji and no yeast can live in it — which means the sugar the kōji makes is never eaten, and simply accumulates until there is nothing left to convert.",
          ja:"みりんのすべては、初めに下される一つの決めごとから導かれる。アルコールが先に槽へ入るということである。清酒においてアルコールは槽で起きることの産物であり、みりんにおいてそれは、そもそも何かが起きるための条件である。蒸したもち米と米麹の仕込みにおよそ四十パーセントの酒を入れれば、そこに酵母は生きられない。すなわち麹が作る糖は食べられることなく、変えるべきものが尽きるまで、ただ積もっていく。",
          zh:"味醂的一切，都出自開頭的一個決定：酒精先進槽。在清酒裡，酒精是槽中所發生之事的產物；在味醂裡，它是「任何事得以發生」的前提。把約四十度的酒倒進蒸糯米與米麴的醪裡，酵母就活不下去——也就是說，麴所造出的糖從來不會被吃掉，只會一直累積，直到再沒有東西可以轉換為止。" } },

        { t:"figure",
          caption:{
            en:"The same two organisms, minus one. A sake tank runs two reactions at once — the kōji's enzymes cutting starch into glucose, the yeast eating the glucose as fast as it appears — which is the multiple parallel fermentation the whole craft is built on. A mirin tank runs only the first half, because the alcohol that would have been the second half is already in the tank. The finished liquids end up at almost the same strength. What separates them is the sugar: about four per cent extract in sake, about forty-five in mirin, and that single difference is the whole of why one is a drink and the other is a seasoning.",
            ja:"同じ二つの生きもの、その一つを欠いたもの。清酒の槽では二つの反応が同時に走る。麹の酵素がデンプンをブドウ糖に切り、酵母がそのブドウ糖を現れるそばから食べる。この技のすべてが立つ並行複発酵である。みりんの槽では前半だけが走る。後半であったはずのアルコールが、すでに槽にあるからである。仕上がった液の度数はほとんど変わらない。分かつのは糖である。清酒のエキス分はおよそ四パーセント、みりんはおよそ四十五パーセントであり、この一つの差こそが、一方が飲み物であり他方が調味料である理由のすべてである。",
            zh:"同樣的兩種生物，少了其中一種。清酒的槽裡同時跑著兩個反應：麴的酵素把澱粉切成葡萄糖，酵母則在葡萄糖一出現就吃掉它——這就是整門技藝所立基的並行複發酵。味醂的槽只跑前半段，因為本該由後半段產生的酒精，早就已經在槽裡了。兩者最後的度數幾乎相同。分開它們的是糖：清酒的萃取物約百分之四，味醂約百分之四十五，而僅僅這一個差別，就是「一個是飲料、一個是調味料」的全部原因。" },
          svg: function (lang, L) {
            var W = 760, H = 392;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j;
            var pan = [
              { x:40, w:328, t:{ en:"SAKE", ja:"清酒", zh:"清酒" }, jp:"並行複発酵",
                inp:[{ en:"steamed rice", ja:"蒸米", zh:"蒸米" }, { en:"rice kōji", ja:"米麹", zh:"米麴" }, { en:"water", ja:"水", zh:"水" }, { en:"yeast", ja:"酵母", zh:"酵母" }],
                rows:[
                  { a:{ en:"starch → glucose", ja:"デンプン → ブドウ糖", zh:"澱粉 → 葡萄糖" }, b:{ en:"kōji enzymes", ja:"麹の酵素", zh:"麴的酵素" }, on:true },
                  { a:{ en:"glucose → alcohol", ja:"ブドウ糖 → アルコール", zh:"葡萄糖 → 酒精" }, b:{ en:"yeast", ja:"酵母", zh:"酵母" }, on:true }
                ],
                foot:{ en:"both at once, in one tank", ja:"一つの槽で、同時に", zh:"在同一個槽裡，同時進行" },
                alc:16, sug:4,
                sugl:"4%" },
              { x:392, w:328, t:{ en:"MIRIN", ja:"本みりん", zh:"本味醂" }, jp:"糖化のみ",
                inp:[{ en:"steamed glutinous rice", ja:"蒸したもち米", zh:"蒸糯米" }, { en:"rice kōji", ja:"米麹", zh:"米麴" }, { en:"shōchū, about 40%", ja:"焼酎 約40度", zh:"燒酎 約40度" }, { en:"— no yeast —", ja:"— 酵母は入れない —", zh:"— 不加酵母 —" }],
                rows:[
                  { a:{ en:"starch → glucose", ja:"デンプン → ブドウ糖", zh:"澱粉 → 葡萄糖" }, b:{ en:"kōji enzymes", ja:"麹の酵素", zh:"麴的酵素" }, on:true },
                  { a:{ en:"protein → amino acids", ja:"タンパク質 → アミノ酸", zh:"蛋白質 → 胺基酸" }, b:{ en:"kōji enzymes", ja:"麹の酵素", zh:"麴的酵素" }, on:true },
                  { a:{ en:"glucose → alcohol", ja:"ブドウ糖 → アルコール", zh:"葡萄糖 → 酒精" }, b:{ en:"nothing does this", ja:"これを行うものがない", zh:"沒有東西做這一步" }, on:false }
                ],
                foot:{ en:"30–40 days, and the sugar stays", ja:"三十〜四十日、糖は残る", zh:"三十至四十天，糖留下來" },
                alc:14, sug:45,
                sugl:"45%" }
            ];
            for (i = 0; i < pan.length; i++) {
              var p = pan[i];
              s += '<text x="' + p.x + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' + L(p.t) + '</text>';
              s += '<text x="' + (p.x + p.w) + '" y="44" text-anchor="end" font-size="10" fill="#8B857C">' + p.jp + '</text>';
              for (j = 0; j < p.inp.length; j++) {
                s += '<text x="' + p.x + '" y="' + (66 + j * 14) + '" font-size="9.5" fill="#6B655C">' + L(p.inp[j]) + '</text>';
              }
              var ty = 130, th = p.rows.length * 30 + 26;
              s += '<rect x="' + p.x + '" y="' + ty + '" width="' + p.w + '" height="' + th + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              for (j = 0; j < p.rows.length; j++) {
                var ry = ty + 26 + j * 30;
                if (p.rows[j].on) {
                  s += '<rect x="' + (p.x + 14) + '" y="' + (ry - 13) + '" width="' + (p.w - 28) + '" height="22" fill="#EDE9E0"/>';
                } else {
                  s += '<rect x="' + (p.x + 14) + '" y="' + (ry - 13) + '" width="' + (p.w - 28) + '" height="22" fill="none" stroke="#DED8CB" stroke-dasharray="3 3"/>';
                }
                s += '<text x="' + (p.x + 24) + '" y="' + (ry + 2) + '" font-size="10" fill="' + (p.rows[j].on ? "#201E1B" : "#B4AEA4") + '">' + L(p.rows[j].a) + '</text>';
                s += '<text x="' + (p.x + p.w - 24) + '" y="' + (ry + 2) + '" text-anchor="end" font-size="8.5" fill="#A39C91">' + L(p.rows[j].b) + '</text>';
              }
              s += '<text x="' + p.x + '" y="' + (ty + th + 16) + '" font-size="9" fill="#A39C91">' + L(p.foot) + '</text>';
            }
            var BY = 304, BX = 140, BW = 200;
            function bar(x0, y0, v, col) { return '<rect x="' + x0 + '" y="' + (y0 - 7) + '" width="' + (v / 50 * BW).toFixed(1) + '" height="14" fill="' + col + '"/>'; }
            s += '<line x1="40" y1="' + (BY - 22) + '" x2="720" y2="' + (BY - 22) + '" stroke="#E4E0D6"/>';
            for (i = 0; i < pan.length; i++) {
              var bx = (i === 0 ? BX : BX + 360);
              s += '<text x="' + (bx - 12) + '" y="' + (BY + 4) + '" text-anchor="end" font-size="9" fill="#8B857C">' +
                   (lang === "ja" ? "アルコール" : lang === "zh" ? "酒精" : "alcohol") + '</text>';
              s += bar(bx, BY, pan[i].alc, "#B09E7C");
              s += '<text x="' + (bx + (pan[i].alc / 50 * BW) + 6).toFixed(1) + '" y="' + (BY + 4) + '" font-size="9" fill="#6B655C">' + pan[i].alc + '%</text>';
              s += '<text x="' + (bx - 12) + '" y="' + (BY + 26) + '" text-anchor="end" font-size="9" fill="#8B857C">' +
                   (lang === "ja" ? "糖・エキス" : lang === "zh" ? "糖／萃取物" : "sugar") + '</text>';
              s += bar(bx, BY + 22, pan[i].sug, "#7C6B52");
              s += '<text x="' + (bx + (pan[i].sug / 50 * BW) + 6).toFixed(1) + '" y="' + (BY + 26) + '" font-size="9" fill="#6B655C">' + L(pan[i].sugl) + '</text>';
            }
            var fn = (lang === "ja" ? ["棒は同じ尺度である。清酒の数字はエキス分であり、その大半が糖である。",
                                       "みりんの糖のおよそ八割はブドウ糖で、残りは麦芽糖、イソマルトース、パノース、より長い糖である。"]
                      : lang === "zh" ? ["所有長條共用同一個尺度。清酒的數字是萃取物，其中大半是糖。",
                                         "味醂的糖約有八成是葡萄糖，其餘為麥芽糖、異麥芽糖、潘糖與更長的寡糖。"]
                      : ["All bars share one scale. Sake's figure is its extract, most of which is sugar.",
                         "About four fifths of mirin's sugar is glucose; the rest is maltose, isomaltose, panose and longer oligosaccharides."]);
            for (i = 0; i < fn.length; i++) s += '<text x="40" y="' + (H - 26 + i * 13) + '" font-size="9.5" fill="#8B857C">' + fn[i] + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"The mash", ja:"仕込み", zh:"仕込（下槽）" }, jp:"仕込み", romaji:"shikomi",
            def:{ en:"Steamed glutinous rice, rice kōji, and shōchū or brewing alcohol at around forty per cent, combined in a tank. There is no added water and no yeast, and the two absences are the entire design. The spirit is simultaneously the solvent the enzymes work in, the preservative that keeps every other organism out, and the alcohol that will still be there at the end — which is why a mirin maker buys distilled spirit as a raw material in a way a sake brewer never does.",
              ja:"蒸したもち米、米麹、そして四十度ほどの焼酎または醸造アルコールを、槽で合わせる。加える水はなく、酵母もない。この二つの不在こそが、この設計のすべてである。その酒は、酵素が働く溶媒であり、他のあらゆる生きものを締め出す保存剤であり、そして終わりまでそこに残るアルコールでもある。みりんの造り手が蒸留酒を原料として買うのは、清酒の蔵が決してしない仕方においてである。",
              zh:"蒸糯米、米麴，以及約四十度的燒酎或釀造酒精，在槽中混合。不加水，也不加酵母；而這兩項「沒有」，就是整個設計本身。那份酒同時是酵素作用的溶劑、是把其他一切生物擋在外面的防腐劑，也是最後仍留在瓶裡的酒精。味醂製造者把蒸餾酒當原料買進——這是清酒酒藏永遠不會做的事。" } },
          { term:{ en:"Saccharification with nothing to eat it", ja:"食べる者のいない糖化", zh:"沒有東西來吃的糖化" }, jp:"糖化", romaji:"tōka",
            def:{ en:"Thirty to forty days for an ordinary mash, and a year or more for traditional makers in Mikawa. Kōji amylase cuts the glutinous rice starch into glucose; kōji protease cuts its protein into amino acids. Both enzymes tolerate the alcohol; yeast does not. Everything that in sake would be an intermediate step is, in mirin, the product.",
              ja:"並の仕込みで三十日から四十日、三河の伝統の造り手では一年以上である。麹のアミラーゼはもち米のデンプンをブドウ糖に切り、麹のプロテアーゼはその蛋白をアミノ酸に切る。いずれの酵素もそのアルコールに耐え、酵母は耐えない。清酒であれば途中の一段であったもののすべてが、みりんにおいては製品である。",
              zh:"一般的醪需要三十到四十天，三河的傳統製造者則要一年以上。麴的澱粉酶把糯米澱粉切成葡萄糖，麴的蛋白酶把它的蛋白質切成胺基酸。這兩種酵素都耐得住酒精，酵母不行。在清酒裡只是中途一站的一切，在味醂裡就是成品。" } },
          { term:{ en:"What is actually dissolved in it", ja:"そこに溶けているもの", zh:"裡面究竟溶著什麼" }, jp:"成分", romaji:"seibun",
            def:{ en:"Sugars come to around forty-five per cent of hon-mirin, of which roughly four fifths is glucose and the rest maltose, isomaltose, panose and longer oligosaccharides — a mixture, not a single sugar, which is why the sweetness reads as layered rather than flat. Alongside them sit amino acids from the broken-down protein, glutamic and aspartic acid prominent among them, and organic acids produced during kōji making: lactic acid highest, then citric, malic, succinic and fumaric.",
              ja:"糖は本みりんのおよそ四十五パーセントに達し、そのおよそ五分の四がブドウ糖、残りが麦芽糖、イソマルトース、パノース、そしてより長い糖である。単一の糖ではなく混じり合いであり、甘さが平らではなく層をなして読まれるのはそのためである。その傍らには、分解された蛋白から来るアミノ酸——なかでもグルタミン酸とアスパラギン酸——が、そして製麹の過程で生じた有機酸が座る。乳酸が最も多く、次いでクエン酸、リンゴ酸、コハク酸、フマル酸である。",
              zh:"糖約占本味醂的百分之四十五，其中約五分之四是葡萄糖，其餘為麥芽糖、異麥芽糖、潘糖與更長的寡糖——那是一組混合物而非單一種糖，所以甜味讀起來是有層次的，而不是平的。與它們並列的，是蛋白質分解而來的胺基酸（其中以麩胺酸與天門冬胺酸最顯著），以及製麴過程中生成的有機酸：乳酸最多，其次是檸檬酸、蘋果酸、琥珀酸與反丁烯二酸。" } },
          { term:{ en:"White kōji, and the fish problem", ja:"白麹と魚の問題", zh:"白麴，與魚腥的問題" }, jp:"白麹", romaji:"shiro-kōji",
            def:{ en:"Mirin made with white kōji — the citric-acid producer that Japanese distillers use for shōchū — comes out markedly higher in citric acid, and that acid is the component doing most of the work when mirin is used to take the odour off fish or offal. If a kitchen uses mirin mainly against strong-smelling protein, the kōji strain on the label is a more useful thing to read than the price.",
              ja:"白麹——焼酎の造り手が用いるクエン酸を生む麹——で造られたみりんは、クエン酸が目立って高く出る。そしてその酸こそ、魚や臓物の匂いを取るためにみりんを用いるとき、仕事の大半をなしている成分である。強く匂う蛋白に対して主にみりんを用いる台所であれば、札に記された麹の種は、値よりも読む値打ちがある。",
              zh:"以白麴——日本蒸餾業者釀燒酎所用、會產檸檬酸的那一種——製作的味醂，檸檬酸含量明顯較高；而當人們用味醂去除魚或內臟的氣味時，做掉大部分工作的正是這種酸。如果一間廚房主要是拿味醂來對付氣味強烈的蛋白質，那麼標籤上的麴種，比價格更值得讀。" } },
          { term:{ en:"Pressing, and the lees nobody throws away", ja:"搾りと、誰も捨てぬ粕", zh:"壓榨，以及沒有人丟掉的酒粕" }, jp:"こぼれ梅", romaji:"kobore-ume",
            def:{ en:"The finished mash is pressed — at traditional houses by hand over about four days — then heat-treated and bottled. What stays in the press is mirin lees, sweet, white and studded with rice grains, and its old name is <em>kobore-ume</em>, spilled plum blossom, for what it looks like. It is eaten as it is, dried as a sweet, mixed into pickles and folded into cakes, and in Mikawa it is sold in the shop beside the bottles.",
              ja:"仕上がった醪は搾られる——伝統の家では四日ほどをかけて手で——のち火入れされ、瓶に詰められる。搾り機に残るのがみりん粕である。甘く、白く、米粒を散らしたそれの古い名は「こぼれ梅」といい、その見た目に由来する。そのまま食べられ、乾かして菓子とされ、漬物に混ぜられ、焼き菓子に折り込まれる。三河では、瓶の傍らの店先で売られている。",
              zh:"熟成完成的醪會被壓榨——傳統酒家以手工進行，約需四天——然後加熱處理、裝瓶。留在榨機裡的是味醂粕：甜的、白的、綴著米粒，它的舊名叫「こぼれ梅」（散落的梅花），源自它的樣子。它可以直接吃、曬乾當成零嘴、拌進漬物、揉進烘焙點心；在三河，它就擺在瓶子旁邊的店頭販售。" } },
          { term:{ en:"Why old mirin is brown", ja:"古いみりんが褐色である理由", zh:"陳年味醂為何是褐色的" }, jp:"熟成", romaji:"jukusei",
            def:{ en:"Because a bottle of mirin contains, in quantity, exactly the two reagents of the Maillard reaction: amino acids and glucose. Time and warmth do the rest. A fresh hon-mirin is pale gold, a three-year one amber, and a long-aged one dark brown and syrupy, tasting of caramel and dried fruit. It is the same chemistry that darkens aged sake, running much faster because there is ten times as much sugar to work with.",
              ja:"みりんの一本には、メイラード反応の二つの試薬——アミノ酸とブドウ糖——が、量をもって揃っているからである。あとは時と温みがなす。新しい本みりんは淡い金、三年のものは琥珀、長く寝かせたものは濃い褐色で粘り、カラメルと干した果実の味がする。古酒を褐色にするのと同じ化学であり、働く糖が十倍あるがゆえに、はるかに速く走る。",
              zh:"因為一瓶味醂裡，大量地同時備齊了梅納反應的兩種試劑：胺基酸與葡萄糖。其餘的，時間與溫度會完成。新的本味醂是淡金色，三年的呈琥珀色，長期熟成的則是深褐而濃稠，帶焦糖與果乾的味道。這與讓古酒轉深的是同一套化學，只是可供反應的糖多了十倍，所以跑得快得多。" } }
        ] },

        { t:"note", title:{ en:"One word of difference", ja:"一語の違い", zh:"只差一個詞" }, text:{
          en:"Sake is <em>heikō fukuhakkō</em>, multiple parallel fermentation: saccharification and fermentation in the same vessel at the same time. Mirin is saccharification with the fermentation taken out. Everything else — the sweetness, the gloss it leaves on grilled fish, the price, the tax bracket, the fact that a bottle opened last winter is still fine — follows from removing one organism from one tank.",
          ja:"清酒は並行複発酵である。糖化と発酵とが、同じ器のうちで同じときに走る。みりんは、そこから発酵を抜いた糖化である。他のすべて——甘さ、焼き魚に残す照り、値、税の区分、去年の冬に開けた一本がいまだ健やかであることまで——は、一つの槽から一つの生きものを取り除いたことから導かれる。",
          zh:"清酒是「並行複發酵」：糖化與發酵在同一個容器裡、同一個時間進行。味醂則是把發酵抽掉之後的糖化。其他的一切——甜味、留在烤魚上的油亮、價格、稅務級距，以及去年冬天開的那一瓶到現在還好好的這件事——全都出自「從一個槽裡拿掉一種生物」。" } }
      ] },

{ t:"section", id:"cook",
      title:{ en:"What it actually does in a pan", ja:"鍋のなかで実際に何をなすか", zh:"它在鍋裡實際做了什麼" }, jp:"みりんの働き",
      body:[
        { t:"p", text:{
          en:"Mirin is usually described as \"sweet cooking sake\", which is true and hides most of what it does. Sweetness is the easiest of its five jobs to replace; the other four are why a dish made with sugar and sake instead is recognisably different.",
          ja:"みりんはたいてい「甘い料理の酒」と述べられる。それは真であり、それがなすことのほとんどを隠している。甘みは、その五つの務めのうち最も替えやすいものである。他の四つこそ、代わりに砂糖と酒で作られた一皿が、それと分かるほど異なる理由である。",
          zh:"味醂通常被描述為「甜的料理酒」，這句話沒錯，卻遮蔽了它所做的大部分事情。甜味是它五項工作中最容易被取代的一項；其餘四項，正是「改用糖加清酒」做出來的菜之所以明顯不同的原因。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Teri — the gloss", ja:"照り", zh:"照（光澤）" }, jp:"照り", romaji:"teri",
            text:{ en:"The glucose and other sugars in mirin form a thin, even film as the liquid reduces, and that film is what gives teriyaki, nimono and glazed fish their shine. Table sugar will sweeten a sauce but will not lacquer it the same way; mirin's mixture of sugars behaves differently on the surface of a hot protein.",
              ja:"みりんのなかのぶどう糖その他の糖は、液が煮詰まるにつれて薄く均な膜を成し、その膜こそが照り焼きと煮物と焼き魚に艶を与える。砂糖は汁を甘くはするが、同じ仕方でそれを漆のようにはせぬ。みりんの糖の混ざりは、熱い蛋白の面の上で異なる振る舞いをする。",
              zh:"味醂中的葡萄糖與其他糖類會在液體收乾時形成一層薄而均勻的膜，而那層膜正是照燒、燉煮與烤魚光亮的來源。砂糖能讓醬汁變甜，卻無法以同樣的方式為它上漆；味醂中糖類的混合，在熱蛋白質表面上的行為並不相同。" } },
          { n:"2", title:{ en:"Nikuzure-bōshi — holding shape", ja:"煮崩れ防止", zh:"防止煮爛" }, jp:"煮崩れ防止",
            text:{ en:"Alcohol and sugar both slow the breakdown of pectin and firm the surface of proteins, so simmered potato, daikon and fish hold their shape instead of dissolving into the broth. This is the reason mirin goes in near the beginning of a simmer rather than at the end, and it is a real, testable difference.",
              ja:"酒精も糖も、ペクチンの崩れを遅らせ、蛋白の面を締める。ゆえに煮た芋、大根、魚は、汁のなかへ溶け去るのではなくその形を保つ。みりんが煮の終わりではなく初めの近くに入る理由であり、そしてそれは実の、試しうる差である。",
              zh:"酒精與糖都會減緩果膠的崩解並使蛋白質表面收緊，因此燉煮的馬鈴薯、白蘿蔔與魚能保持形狀，而不是化進湯裡。這正是味醂在燉煮的開頭附近、而非最後才加入的原因，而且這是一個真實、可驗證的差別。" } },
          { n:"3", title:{ en:"Kusami-keshi — lifting odours", ja:"臭み消し", zh:"去腥" }, jp:"臭み消し",
            text:{ en:"Alcohol is volatile and carries volatile compounds with it as it evaporates, including the amines responsible for the smell of older fish. This is a physical process and the mirin-style seasoning, at under one per cent alcohol, cannot do it at all.",
              ja:"酒精は揮けやすく、揮けるときに揮けやすい物質を伴い去る。古い魚の匂いを負うアミン類を含めてである。これは物理の過程であり、一パーセントに満たぬみりん風調味料には、まったくなしえない。",
              zh:"酒精易揮發，並在蒸發時帶走其他揮發性物質，包括造成不新鮮魚腥味的胺類。這是一個物理過程，而酒精度不到百分之一的味醂風調味料，根本做不到。" } },
          { n:"4", title:{ en:"Shimikomi — carrying flavour in", ja:"染み込み", zh:"入味" }, jp:"浸透",
            text:{ en:"Alcohol penetrates cell walls faster than water and takes dissolved flavour with it, which is why a simmer with mirin tastes seasoned through rather than seasoned on the outside. Restaurants exploit this by adding mirin early and salt late.",
              ja:"酒精は水より速く細胞の壁を通り、溶けた味をともに運ぶ。みりんを用いた煮が、外を味つけされたのではなく中まで味つけされた味をもつ理由である。料理屋はこれを、みりんを早く、塩を遅く加えることで用いる。",
              zh:"酒精比水更快穿透細胞壁，並帶著溶解的風味一起進去，這正是為什麼加了味醂的燉煮嘗起來是「從裡到外都入了味」，而不是只調味在表面。餐廳利用這一點的方式，是早加味醂、晚加鹽。" } },
          { n:"5", title:{ en:"Umami and complexity", ja:"旨みと複雑さ", zh:"旨味與複雜度" }, jp:"旨み",
            text:{ en:"Two or three months of enzymatic work leaves amino acids, peptides and a range of sugars rather than one. That complexity is the part no substitute reproduces, and it is why a good hon-mirin tastes of something on its own and a mirin-style seasoning tastes only of sweet.",
              ja:"二月三月の酵素の仕事は、一つではなくアミノ酸と、ペプチドと、幅のある糖とを残す。その複雑さこそ、いかなる代わりのものも再び生まぬ部分であり、良い本みりんがそれ自体で何かの味をもち、みりん風調味料が甘さのみの味をもつ理由である。",
              zh:"兩三個月的酵素工作留下的是胺基酸、胜肽，以及一整組而非單一種類的糖。那份複雜度正是任何替代品都複製不出來的部分，也是為什麼一瓶好的本味醂本身就嘗得出味道，而味醂風調味料只嘗得到甜。" } }
        ] },

        { t:"note", label:{ en:"Nikiri — burning the alcohol off", ja:"煮切り", zh:"煮切" },
          text:{
            en:"For a dressing, a dipping sauce or anything not going near heat again, mirin is first brought to the boil on its own to drive off the alcohol — nikiri-mirin. The result is sweeter and rounder, and the harsh top note goes. Any recipe that adds raw mirin to a cold sauce and does not mention this step was written by someone who has not tasted the difference.",
            ja:"和え衣、つけ汁、あるいは再び熱に近づかぬものには、みりんはまず単独で沸かされ、酒精を飛ばされる。煮切りみりんである。その結果はより甘く丸く、荒い立ち上がりは去る。冷たい汁に生のみりんを加え、この段に触れぬ献立は、その差を味わったことのない者の書いたものである。",
            zh:"若用於涼拌醬、沾醬，或任何不會再接近熱源的東西，味醂要先單獨煮沸把酒精趕走——這就是「煮切味醂」。結果會更甜、更圓潤，而尖銳的頭段香會消失。任何把生味醂加進冷醬汁、卻沒有提到這一步的食譜，都是出自沒嘗過那個差別的人之手。" } }
      ] },
    { t:"section", id:"taiwan-rice-wine",
      title:{ en:"The same manoeuvre on another island", ja:"別の島における同じ手", zh:"同一招，在另一座島上" }, jp:"台湾の米酒",
      body:[
        { t:"p", text:{
          en:"Taiwan's everyday cooking alcohol is not mirin but <em>mǐjiǔ</em>, rice wine, and it is present in a Taiwanese kitchen the way olive oil is present in an Italian one — in sesame-oil chicken, in three-cup chicken, in ginger duck, in the confinement diet a new mother eats for a month. It is also the subject of the most instructive alcohol-tax story in East Asia, because Taiwan solved the same problem Japan solved with salt, and solved it with a sentence printed on the label instead.",
          ja:"台湾の日々の料理の酒はみりんではなく米酒であり、伊太利亜の台所における橄欖油のように、台湾の台所にある。麻油鶏に、三杯鶏に、薑母鴨に、そして産後の一月に母が食べる月子の膳に。それはまた、東亜において最も教えるところの多い酒税の物語の主でもある。台湾は、日本が塩で解いた同じ問題を、札に刷られた一文で解いたからである。",
          zh:"台灣日常的料理用酒不是味醂，而是米酒；它在台灣廚房裡的地位，就像橄欖油在義大利廚房裡一樣——麻油雞裡有它，三杯雞裡有它，薑母鴨裡有它，產後那一個月的月子餐裡也有它。它同時也是東亞最具啟發性的一段酒稅故事的主角：台灣要解的，是日本用鹽解掉的同一個問題，而台灣用的是印在標籤上的一句話。" } },

        { t:"defs", items:[
          { term:{ en:"Red label", ja:"紅標米酒", zh:"紅標米酒" }, jp:"紅標米酒", romaji:"hóngbiāo mǐjiǔ",
            def:{ en:"A rice distillate, not a brewed wine despite the English name: rice is saccharified and fermented, then distilled, and the result is around twenty per cent alcohol in a 0.6 litre bottle with a red paper label that has looked much the same since the monopoly era began in 1945. It is not a fine product and is not meant to be one. It is the cheapest way to put clean alcohol and a faint rice sweetness into a hot pan, and Taiwanese cooking is built on the assumption that it costs almost nothing.",
              ja:"英語の名にかかわらず醸造酒ではなく、米の蒸留酒である。米を糖化し発酵させ、のち蒸留する。仕上がりは二十度前後で、〇・六リットルの瓶に赤い紙の札を貼る。その札は、専売の時代が始まった一九四五年からほとんど変わらぬ姿をしている。上等な品ではなく、上等であることを目指してもいない。熱した鍋に、清らかなアルコールと微かな米の甘みを入れる最も安い道であり、台湾の料理は、それがほとんど只であるという前提の上に立っている。",
              zh:"儘管英文叫 rice wine，它其實是米的蒸餾酒而不是釀造酒：米經糖化、發酵，然後蒸餾，成品酒精度約二十度，裝在 0.6 公升的瓶子裡，貼著一張自一九四五年專賣時代開始以來幾乎沒變過樣子的紅色紙標。它不是精緻的產品，也不打算是。它是把乾淨的酒精與一絲米的甜味送進熱鍋裡最便宜的途徑，而台灣料理正建立在「它幾乎不要錢」這個前提之上。" } },
          { term:{ en:"What the WTO did to it", ja:"世界貿易機関がそれになしたこと", zh:"WTO 對它做了什麼" }, jp:"二〇〇二年", romaji:"2002",
            def:{ en:"Taiwan acceded to the World Trade Organization on 1 January 2002, the state monopoly ended, and rice wine had to be taxed like any other distilled spirit — at a rate designed for whisky and brandy. Households had seen it coming since 1999 and stockpiled; the Monopoly Bureau rationed sales to two bottles per person per day; queues formed; an ordinary kitchen ingredient became a news story and then a black market. Accounts differ on the exact prices, but the direction is not in dispute: a bottle that had cost pocket change cost several times that within a few years.",
              ja:"台湾は二〇〇二年一月一日に世界貿易機関へ加盟し、専売は終わり、米酒は他のあらゆる蒸留酒と同じく——威士忌や白蘭地のために設けられた率で——課されねばならなくなった。家々は一九九九年からそれを見越して買い溜め、専売局は一人一日二本に売りを限り、列ができ、平凡な台所の材料が報道となり、そして闇の市となった。正確な値については説が分かれるが、向きに争いはない。小銭であった一本が、数年のうちに幾倍にもなった。",
              zh:"台灣於二〇〇二年一月一日加入世界貿易組織，專賣制度終止，米酒必須比照其他蒸餾酒課稅——那是為威士忌與白蘭地設計的稅率。家家戶戶從一九九九年就預見了這件事而開始囤積；公賣局把銷售限制為每人每天兩瓶；隊伍排了起來；一樣平凡的廚房材料變成新聞，接著變成黑市。關於確切價格各方說法不一，但方向沒有爭議：一瓶原本只值零錢的酒，幾年之內貴了好幾倍。" } },
          { term:{ en:"The label that fixed it", ja:"それを直した一行", zh:"修好它的那一行字" }, jp:"料理米酒", romaji:"liàolǐ mǐjiǔ",
            def:{ en:"The answer was a new statutory category. A rice wine of not more than twenty per cent alcohol by volume, whose bottle is marked <em>for cooking use</em>, is taxed at a flat NT$9 per litre. An ordinary rice wine is taxed at NT$2.5 per litre for each degree of alcohol. That is the whole of it, and the arithmetic is worth doing: a 0.6 litre bottle of red-label cooking rice wine at 19.5 % pays about NT$5.4 in duty. The identical liquid taxed as a drink would pay about NT$29 — more than the bottle's whole suggested retail price of NT$27.",
              ja:"答えは新しい法上の区分であった。アルコール分二十パーセント以下で、瓶に<em>料理用</em>と記された米酒は、一リットルにつき九元の定額で課される。並の米酒は、一リットル一度につき二・五元である。それがすべてであり、算術をなす値打ちがある。一九・五度の紅標料理米酒〇・六リットルの瓶が負う税はおよそ五・四元。同じ液を飲み物として課せば、およそ二十九元となる——その瓶の希望小売価格二十七元の全体よりも多い。",
              zh:"答案是一個新的法定類別。酒精濃度不超過百分之二十、瓶上標明<em>料理用</em>的米酒，按每公升新台幣九元的定額課稅；一般米酒則是每公升每一度課新台幣二・五元。全部就是這樣，而這道算術值得算一次：一瓶 0.6 公升、19.5 度的紅標料理米酒，稅約新台幣 5.4 元。同樣的液體若以飲料課稅，稅約 29 元——比這瓶酒 27 元的建議售價整個還要高。" } },
          { term:{ en:"What is in the bottle now", ja:"いま瓶にあるもの", zh:"現在瓶子裡是什麼" }, jp:"純米酒と料理米酒", romaji:"chúnmǐjiǔ, liàolǐ mǐjiǔ",
            def:{ en:"Two products stand where one stood. <em>Hóngbiāo liàolǐ mǐjiǔ</em>, the cooking bottle, is 19.5 %, distilled from rice and then blended with food-grade alcohol to bring it under the twenty per cent ceiling — cheap, clean, and the one in most kitchens. <em>Hóngbiāo chúnmǐjiǔ</em>, pure rice wine, is 22 %, made by fermentation and distillation alone with only the heart of the run taken and several months of rest before sale. The old <em>tèjí hóngbiāo mǐjiǔ</em>, which used the whole run, was discontinued in February 2021 after roughly a century.",
              ja:"一つが立っていた所に、いま二つが立つ。料理の一本である紅標料理米酒は一九・五度であり、米から蒸留したのち食用アルコールを混ぜて二十度の上限の下に収める。安く、清らかで、ほとんどの台所にあるのはこれである。純米の一本である紅標純米酒は二十二度であり、発酵と蒸留のみにより、酒心だけを取り、売りに出す前に数月を休ませる。留出の全体を用いた古い特級紅標米酒は、およそ一世紀を経て、二〇二一年二月に製造を終えた。",
              zh:"從前只有一支，現在站著兩支。料理用的那支「紅標料理米酒」是 19.5 度，以米蒸餾之後再摻食用酒精，把度數壓在百分之二十的上限之下——便宜、乾淨，也是多數廚房裡的那一支。「紅標純米酒」是 22 度，只靠發酵與蒸餾製成，只取酒心，上架前先靜置數個月。使用全段餾出液的舊款「特級紅標米酒」，在約莫一個世紀之後，於二〇二一年二月停產。" } },
          { term:{ en:"The head and the water", ja:"頭と水", zh:"酒頭與酒水" }, jp:"米酒頭・米酒水", romaji:"mǐjiǔtóu, mǐjiǔshuǐ",
            def:{ en:"Two relatives worth knowing. <em>Mǐjiǔtóu</em> is the head of the distillation, stronger and sharper, kept for dishes that want a hard hit of alcohol and for steeping. <em>Mǐjiǔshuǐ</em> is rice wine with the alcohol taken out, sold for the postpartum month in which a Taiwanese mother traditionally drinks no water at all — a use that has no Japanese equivalent and explains why a supermarket here stocks an alcohol-free version of a cooking spirit at all.",
              ja:"知っておく値打ちのある縁者が二つある。米酒頭は蒸留の頭であり、強く鋭く、アルコールの強い一撃を求める料理と、漬け込みのために取っておかれる。米酒水は米酒からアルコールを抜いたもので、台湾の母が伝統として水をまったく飲まぬ産後の一月のために売られている。日本に相当するもののない用いられ方であり、この地の店が、料理の酒のアルコールなしの版をそもそも置いている理由でもある。",
              zh:"有兩位值得認識的親戚。「米酒頭」是蒸餾的頭段，更烈也更嗆，留給需要酒精重擊的菜色與浸泡之用。「米酒水」則是把酒精抽掉的米酒，賣給傳統上整個月不喝水的產後婦女——這種用途在日本沒有對應，也解釋了為什麼這裡的超市會賣一款不含酒精的料理酒。" } }
        ] },

        { t:"note", title:{ en:"Two solutions to one problem", ja:"一つの問いへの二つの解", zh:"同一個問題的兩種解法" }, text:{
          en:"Japan makes its cheap cooking alcohol undrinkable and therefore untaxed by adding salt; Taiwan makes its cheap cooking alcohol untaxed by capping the strength and printing a line on the label. The consequence for a cook is concrete and worth carrying: Taiwanese cooking rice wine brings no salt into the dish, so it behaves in a pan like drinking sake rather than like Japanese <em>ryōrishu</em>, and a recipe written for one is not seasoned like a recipe written for the other. If you keep both bottles, keep the reason for each in mind — the Japanese one is a seasoning that contains salt, the Taiwanese one is an alcohol that contains none.",
          ja:"日本は安い料理の酒に塩を加えて飲めなくし、それゆえ課されぬものとする。台湾は度数に上限を設け、札に一行を刷ることで課されぬものとする。料理する者にとっての帰結は具体であり、携える値打ちがある。台湾の料理米酒は皿に塩を持ち込まない。ゆえに鍋のなかで、日本の料理酒のようにではなく、飲む清酒のようにふるまう。一方のために書かれた献立は、他方のために書かれた献立とは味つけが違う。二つの瓶を置くのであれば、それぞれの理由を心に留められたい。日本のものは塩を含む調味料であり、台湾のものは塩を含まぬ酒である。",
          zh:"日本讓廉價的料理用酒變得不能喝、因而不被課稅，靠的是加鹽；台灣讓廉價的料理用酒不被課稅，靠的是限制度數並在標籤上印一行字。對做菜的人來說，後果很具體，也值得帶著走：台灣的料理米酒不會把鹽帶進菜裡，所以它在鍋中的表現像喝的清酒，而不像日本的料理酒；為其中一種寫的食譜，調味方式和為另一種寫的並不相同。如果你兩種都備著，就把各自的理由記在心裡——日本那瓶是含鹽的調味料，台灣這瓶是不含鹽的酒。" } }
      ] },

    { t:"section", id:"substitute",
      title:{ en:"When you cannot buy it", ja:"手に入らぬとき", zh:"買不到的時候" }, jp:"代用",
      body:[
        { t:"p", text:{
          en:"Outside East Asia hon-mirin is often unavailable, expensive, or sold only in the mirin-style version that is not the same thing. Substitution is possible and it is worth knowing exactly what is being given up, because the missing parts are missing in a predictable order.",
          ja:"東亜の外では、本みりんは手に入らぬか、高いか、あるいは同じものではないみりん風の版でしか売られていないことが多い。代用は可能であり、何が失われるかを正確に知る値打ちがある。欠けるものは、予測のつく順に欠けるからである。",
          zh:"在東亞以外，本味醂經常買不到、很貴，或只買得到那款並不是同一種東西的「味醂風調味料」。代用是可行的，而值得確切知道自己放棄了什麼——因為缺掉的部分，是照著一個可預測的順序缺掉的。" } },

        { t:"ol", items:[
          { en:"<strong>Sake plus sugar is the standard swap.</strong> One tablespoon of mirin is usually replaced by one tablespoon of sake and about a teaspoon of sugar. This gets the two things that matter most — the alcohol, which carries odours off and firms protein, and the sweetness — close enough for almost any braise or glaze.",
            ja:"<strong>清酒に砂糖が標準の置き換えである。</strong>みりん大さじ一は、たいてい清酒大さじ一と砂糖小さじ一ほどで置き換えられる。これにより、最も大切な二つ——匂いを運び去り蛋白を締めるアルコールと、甘さ——は、およそいかなる煮物や照りにも足りるところまで近づく。",
            zh:"<strong>清酒加糖是標準的替換。</strong>一大匙味醂通常可以用一大匙清酒加約一小匙糖來代替。這能把最要緊的兩件事——帶走氣味並使蛋白質收緊的酒精，以及甜味——逼近到幾乎任何燉煮或上醬都夠用的程度。" },
          { en:"<strong>What the swap cannot give you is the gloss.</strong> Teri comes from the oligosaccharides — the maltose, isomaltose and panose that sugar syrup does not contain — so a sake-and-sugar glaze will be sweet and will not shine in the same way. If shine is the point of the dish, reduce the sauce further rather than adding more sugar, which will only make it cloying.",
            ja:"<strong>置き換えが与ええぬのは照りである。</strong>照りは、砂糖の液には含まれぬ麦芽糖、イソマルトース、パノースといった糖の連なりから来る。ゆえに清酒と砂糖の照りは、甘くはあっても、同じようには光らない。皿の眼目が照りであるならば、砂糖を足すのではなく、たれをさらに煮詰めること。足せば、くどくなるだけである。",
            zh:"<strong>這個替換給不了你的，是那層光澤。</strong>照り來自寡糖——麥芽糖、異麥芽糖、潘糖，這些是糖漿裡沒有的——所以清酒加糖做出的醬會甜，卻不會以同樣的方式發亮。如果這道菜的重點就是光澤，那就把醬再收乾一些，而不是加更多糖；加糖只會讓它膩。" },
          { en:"<strong>And it cannot give you the amino acids.</strong> Mirin brings glutamic and aspartic acid into a dish; sugar brings none. A pinch of kombu dashi powder, or a piece of kombu dropped into the braise, does most of that job and costs nothing. Do not reach for soy sauce to fix it, which adds salt and colour you had not budgeted for.",
            ja:"<strong>そしてアミノ酸も与ええない。</strong>みりんは皿にグルタミン酸とアスパラギン酸をもたらし、砂糖は何ももたらさない。昆布だしの粉をひとつまみ、あるいは昆布の一片を煮物に落とすことが、その仕事の大半をなし、費えもない。それを直すために醤油へ手を伸ばさぬこと。見込んでいなかった塩と色を加えることになる。",
            zh:"<strong>它也給不了你胺基酸。</strong>味醂會把麩胺酸與天門冬胺酸帶進菜裡，糖什麼也帶不進來。一小撮昆布高湯粉，或在燉鍋裡丟一片昆布，就能完成這件工作的大半，而且不花錢。不要為了補這一塊而伸手去拿醬油——那會加進你原本沒有算進去的鹽與顏色。" },
          { en:"<strong>Mirin-style seasoning is not a substitute where alcohol is doing work.</strong> Under one per cent alcohol means it cannot lift odours, cannot firm the surface of fish, and has nothing to boil off. Used at the end, off the heat, for sweetness and shine, it is perfectly good. Used at the start of a braise in place of hon-mirin, it simply is not doing the job you think it is doing.",
            ja:"<strong>みりん風調味料は、アルコールが仕事をしている場では代用にならない。</strong>一パーセント未満ということは、匂いを持ち上げえず、魚の表を締めえず、飛ばすものも持たぬということである。火から下ろした最後に、甘みと照りのために用いるならば申し分ない。本みりんの代わりに煮物の初めに用いるならば、それは、こちらが思っている仕事をしていないというだけである。",
            zh:"<strong>在酒精真正在做事的地方，味醂風調味料不是替代品。</strong>酒精低於百分之一，意味著它無法帶走氣味、無法使魚的表面收緊，也沒有什麼可以煮揮發掉。在起鍋前、離火之後用它來增加甜味與光澤，完全沒問題；但若在燉煮一開始就拿它代替本味醂，那它只是沒有在做你以為它在做的那件事。" },
          { en:"<strong>Salted bottles need the recipe adjusted, not just poured.</strong> Fermented seasoning and salted cooking sake carry at least 1.5 grams of salt per hundred millilitres. Two tablespoons is roughly half a gram of salt into the pan before anything else is added. Subtract it from the recipe's salt or the dish will be over-seasoned in a way that is hard to diagnose afterwards.",
            ja:"<strong>塩を含む瓶は、注ぐだけでなく、献立の側を直さねばならない。</strong>発酵調味料と塩を加えた料理酒は、百ミリリットルにつき少なくとも一・五グラムの塩を負っている。大さじ二杯であれば、他の何を加えるより先に、およそ〇・五グラムの塩が鍋に入る。それを献立の塩から差し引くこと。さもなくば、あとから診立てにくい仕方で、皿は味が濃くなる。",
            zh:"<strong>含鹽的瓶子需要調整食譜，而不只是倒進去。</strong>發酵調味料與加鹽的料理酒，每一百毫升至少含一・五公克鹽。兩大匙，就是在加入任何其他東西之前，先有約半公克的鹽進了鍋。請從食譜的鹽量裡把它扣掉，否則這道菜會以一種事後很難診斷的方式偏鹹。" },
          { en:"<strong>Taiwanese cooking rice wine stands in for sake, not for mirin.</strong> It has the alcohol and none of the sugar, so it replaces the <em>ryōrishu</em> in a recipe cleanly and replaces the mirin not at all. Shaoxing wine brings a flavour of its own that will dominate a delicate Japanese braise. Korean <em>matsul</em> is usually a mirin-style seasoning rather than a brewed one, so the bottle has to be read rather than assumed.",
            ja:"<strong>台湾の料理米酒は清酒の代わりであり、みりんの代わりではない。</strong>アルコールを持ち、糖を持たぬがゆえに、献立の料理酒を清らかに置き換え、みりんはまったく置き換えない。紹興酒はそれ自身の味を持ち込み、繊細な日本の煮物ではそれが支配する。韓国のマッスルは醸したものではなくみりん風の調味料であることが多く、瓶は、決めてかからずに読まれねばならない。",
            zh:"<strong>台灣的料理米酒能代替清酒，不能代替味醂。</strong>它有酒精而完全沒有糖，所以能乾淨地取代食譜裡的料理酒，卻完全取代不了味醂。紹興酒帶著自己的味道，在纖細的日式燉煮裡會壓過一切。韓國的「맛술」多半是味醂風調味料而非釀造品，所以那瓶東西要讀過，不能想當然耳。" }
        ] },

        { t:"note", title:{ en:"The one case where there is no substitute", ja:"代用のきかぬ唯一の場", zh:"唯一沒有替代品的情況" }, text:{
          en:"A long, slow simmered dish in which mirin is most of the liquid — <em>tsukudani</em>, a dark braise, a glaze reduced almost to a syrup — is a dish built on mirin's oligosaccharides and amino acids doing chemistry over time, and sugar and sake will not arrive at the same place however long they cook. For everything else the swap is fine; for these, buy the bottle or cook something else.",
          ja:"みりんが液の大半を占める、長く静かな煮物——佃煮、濃い煮しめ、蜜のようになるまで詰めた照り——は、みりんの糖の連なりとアミノ酸が時をかけて化学をなすことの上に立つ皿であり、砂糖と清酒は、いかに長く煮ようと同じ所へは至らない。他のすべてについて置き換えは差し支えない。これらについては、瓶を買うか、別のものを作られたい。",
          zh:"一道長時間慢煮、而味醂占了大部分液體的菜——佃煮、深色的燉煮、收到幾乎成糖漿的照燒醬——是建立在「味醂的寡糖與胺基酸隨時間進行化學反應」之上的，而糖與清酒無論煮多久都到不了同一個地方。其他情況下替換都沒問題；這幾種，請去買那瓶酒，或者改做別的菜。" } }
      ] },


    { t:"section", id:"history",
      title:{ en:"It used to be a drink", ja:"かつては飲みものであった", zh:"它從前是拿來喝的" }, jp:"飲むみりん",
      body:[
        { t:"p", text:{
          en:"Mirin spent most of its history in a glass rather than a pan. In the Edo period it was a sweet, expensive, warming drink, popular in winter and drunk especially by women and by people who did not want the harshness of the sake of the day. Its move to the kitchen is comparatively recent, and it happened for the ordinary reason that refined sugar became cheap and Japanese sake became better.",
          ja:"みりんはその歴史のほとんどを、鍋ではなく杯のなかで過ごした。江戸の世においてそれは甘く、高く、身を温める飲みものであり、冬に好まれ、とりわけ女性と、当時の酒の荒さを望まぬ人々に飲まれた。台所への移りは比べれば新しく、そしてそれが起きたのは、精製された砂糖が安くなり、日本の清酒が良くなったという当たり前の理由による。",
          zh:"味醂的歷史大部分是在杯中、而非鍋裡度過的。江戶時代它是一種甜的、昂貴的、暖身的飲品，冬天大受歡迎，尤其受女性以及不想承受當時清酒粗礪感的人們喜愛。它移居廚房是相對晚近的事，而發生的原因再尋常不過：精製糖變便宜了，而日本的清酒變好了。" } },

        { t:"defs", items:[
          { term:{ en:"Hon-naoshi, or yanagikage", ja:"本直し（柳蔭）", zh:"本直（柳蔭）" }, jp:"本直し・柳蔭", romaji:"hon-naoshi / yanagikage",
            def:{ en:"Mirin cut with shōchū and drunk chilled — the Edo summer drink, called hon-naoshi in the east and yanagikage, \"willow shade\", in Kansai. It survives in rakugo, in a handful of old Osaka shops, and increasingly on the lists of bars that have noticed it is essentially a ready-made cocktail four centuries old.",
              ja:"焼酎で割り、冷やして飲むみりんである。江戸の夏の飲みものであり、東では本直し、上方では柳蔭——柳の蔭——と呼ばれた。落語のなかに、大阪の幾軒かの古い店に、そしてそれが四世紀を経た出来合いの混ぜ酒であることに気づいた酒場の品書きに、ますますそれは生き延びている。",
              zh:"以燒酎兌開、冰鎮飲用的味醂——江戶的夏日飲品，關東稱「本直」，關西稱「柳蔭」。它存活在落語裡、在大阪幾家老店裡，並且愈來愈常出現在那些注意到「它本質上是一杯四百年前的預調雞尾酒」的酒吧酒單上。" } },
          { term:{ en:"Otoso", ja:"お屠蘇", zh:"屠蘇" }, jp:"屠蘇", romaji:"otoso",
            def:{ en:"The spiced new-year drink, made by steeping a packet of medicinal herbs in sake, mirin, or both. It is the one occasion on which most Japanese households still drink mirin, and the sweetness is the point — otoso made with sake alone is a much starker thing.",
              ja:"香を加えた正月の飲みものであり、薬草の包みを清酒か、みりんか、その両方に浸して作られる。ほとんどの日本の家がなおみりんを飲む唯一の折であり、その甘さこそが要である。清酒のみで作られた屠蘇は、はるかに厳しいものである。",
              zh:"加了藥材的新年飲品，把一小包藥草浸在清酒、味醂或兩者中製成。這是多數日本家庭至今仍會喝味醂的唯一場合，而甜味正是重點——只用清酒做的屠蘇要嚴峻得多。" } },
          { term:{ en:"Hōmeishu", ja:"保命酒", zh:"保命酒" }, jp:"保命酒", romaji:"hōmeishu",
            def:{ en:"A medicinal liqueur from Tomonoura in Hiroshima, made since the seventeenth century by steeping a long list of herbs in a mirin base. It was famous enough to be served to foreign envoys, and it is the clearest surviving evidence of the era in which mirin was a luxury beverage rather than a bottle beside the stove.",
              ja:"広島の鞆の浦の薬用の酒であり、十七世紀よりこのかた、長い薬草の名簿をみりんの基に浸して造られてきた。異国の使いに供されるほどに名高く、そしてみりんが竈のかたわらの一本ではなく贅沢な飲みものであった時代の、最も明らかな生き残りの証しである。",
              zh:"來自廣島鞆之浦的藥用酒，自十七世紀以來以味醂為基底浸泡一長串藥草製成。它有名到曾被用來款待外國使節，也是「味醂曾是奢侈飲品而非爐邊一瓶」那個時代最清楚的存留證據。" } }
        ] },

        { t:"panel", tint:"amber",
          title:{ en:"Buying, and keeping it", ja:"買うこと、保つこと", zh:"買它，以及保存它" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Read the ingredient line, not the front.</strong> Real mirin lists glutinous rice, rice kōji and shōchū or brewing alcohol, and very little else. If the list opens with glucose syrup you are holding the imitation.",
                ja:"<strong>表ではなく原材料の行を読まれたい。</strong>真のみりんは、糯米、米麹、焼酎あるいは醸造アルコールを挙げ、他はごく僅かである。行が水飴で始まるならば、手にあるのは模倣である。",
                zh:"<strong>讀成分那一行，不要讀正面。</strong>真正的味醂會列出糯米、米麴，以及燒酎或釀造酒精，其餘極少。如果成分表以葡萄糖漿開頭，你手上拿的是仿製品。" },
              { en:"<strong>Salt is the tell.</strong> Any mirin or cooking sake showing salt on the label is a seasoning that escaped the liquor tax; that is not a fault, but you must subtract its salt from the rest of the seasoning.",
                ja:"<strong>塩が見分けである。</strong>札に塩を示すみりんや料理酒はいずれも、酒税を逃れた調味料である。それは瑕ではないが、その塩を他の味つけから差し引かねばならない。",
                zh:"<strong>鹽是判別的線索。</strong>任何在標籤上出現鹽的味醂或料理酒，都是避開了酒稅的調味料；那不是缺點，但你必須把它的鹽從其餘調味中扣掉。" },
              { en:"<strong>Do not refrigerate hon-mirin.</strong> At fourteen per cent alcohol and forty per cent extract it is stable at room temperature, and the cold can precipitate sugars out of it. The imitation, being a food, does want the fridge once opened.",
                ja:"<strong>本みりんを冷やしてはならぬ。</strong>十四度の酒精と四十パーセントのエキス分をもち、常温で安んじており、冷えは糖を析出させうる。模倣のほうは食品であるゆえ、開けたのちは冷蔵を望む。",
                zh:"<strong>本味醂不要冷藏。</strong>它有十四度的酒精與百分之四十的萃取值，在室溫下穩定，而低溫可能讓糖析出。仿製品因為是食品，開封後反而需要冷藏。" },
              { en:"<strong>An aged hon-mirin is a real thing.</strong> A few breweries sell mirin aged three, five or ten years, dark as soy and thick as syrup. It is expensive, it is not for simmering vegetables, and a spoonful over vanilla ice cream is one of the better arguments for buying it.",
                ja:"<strong>熟成した本みりんは実在する。</strong>三年、五年、十年を経たみりんを売る蔵がいくつかある。醤のように暗く、蜜のように濃い。高く、野菜を煮るためのものではなく、そして乳菓の上に一匙かけることは、それを買う良い理由の一つである。",
                zh:"<strong>陳年本味醂是真實存在的。</strong>有幾家酒藏販售陳放三年、五年、十年的味醂，深如醬油、稠如糖漿。它很貴，不是拿來燉蔬菜的；而在香草冰淇淋上淋一匙，是買它的更好理由之一。" }
            ] }
          ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"kojifamily.html\">The Kōji Family</a> for the other things the mould makes, <a href=\"cocktails.html\">Mixing &amp; Cooking</a> for sake in the kitchen, <a href=\"standards.html\">Law &amp; Standards</a> for the tax categories, <a href=\"kasu.html\">Sake Lees</a> for the counterpart to kobore-ume, <a href=\"culture.html\">Culture &amp; Ritual</a> for otoso.",
          ja:"関連——黴の造る他のものは<a href=\"kojifamily.html\">麹の一族</a>、台所における清酒は<a href=\"cocktails.html\">割る・料理する</a>、税の区分は<a href=\"standards.html\">法令と基準</a>、こぼれ梅の対をなすものは<a href=\"kasu.html\">酒粕</a>、屠蘇は<a href=\"culture.html\">文化と儀礼</a>。",
          zh:"相關：這種黴還做出什麼見<a href=\"kojifamily.html\">麴的家族</a>；廚房裡的清酒見<a href=\"cocktails.html\">調飲與入菜</a>；稅務分類見<a href=\"standards.html\">法規與標準</a>；こぼれ梅的對應物見<a href=\"kasu.html\">酒粕</a>；屠蘇見<a href=\"culture.html\">文化與儀禮</a>。" } }
      ] },

    { t:"related", items:[
      { href:"kojifamily.html", why:{ en:"The mould doing all the work here.", ja:"ここで仕事のすべてをなしている麹。", zh:"在這裡做完所有工作的那種麴。" } },
      { href:"batch.html", why:{ en:"The same arithmetic with the fermentation removed.", ja:"発酵を抜いた、同じ算術。", zh:"把發酵拿掉之後的同一道算術。" } },
      { href:"cocktails.html", why:{ en:"The other bottle a kitchen keeps beside the sake.", ja:"台所が日本酒の傍らに置く、もう一本。", zh:"廚房放在清酒旁邊的另一瓶。" } },
      { href:"taiwan.html", why:{ en:"The island that solved the same tax problem differently.", ja:"同じ税の問いを別の仕方で解いた島。", zh:"用另一種方式解掉同一個稅務問題的那座島。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- world */
SAKE.pages["world"] = {
  kicker: { en: "Wider world · 05", ja: "周辺 · 05", zh: "周邊 · 05" },
  title:  { en: "Sake Beyond Japan", ja: "世界の酒造り", zh: "日本以外的釀造" },
  jp: "海外醸造",
  lede: {
    en: "Sake is now brewed on every inhabited continent. Some of it is made by Japanese companies serving expatriate and restaurant markets, some by people with no connection to Japan at all, working from books, apprenticeships and stubbornness. None of it may be called <em>Nihonshu</em> — that word has been reserved since 2015 — but the constraints these brewers work under are exactly the ones that make the category interesting: local rice, local water, no established supply chain, and no tradition telling them what a sake is supposed to taste like.",
    ja: "日本酒は、いまや人の住むすべての大陸で造られている。日本企業が在留邦人や飲食店向けに造るものもあれば、日本と何のつながりもない人々が、書物と修業と頑固さを頼りに造るものもある。それらはいずれも「日本酒」を名乗れない——この語は二〇一五年以降、保護されている——が、彼らが背負う制約こそ、この領域を面白くしているものである。地元の米、地元の水、確立していない供給網、そして「日本酒とはこういう味であるはずだ」と告げる伝統の不在。",
    zh: "日本酒如今已在每一個有人居住的大陸釀造。有些出自日本企業之手，供應僑民與餐飲市場；有些則由與日本毫無淵源的人所釀，憑藉書本、學徒經歷與一股執拗。它們都不得稱為「日本酒」——此詞自 2015 年起受到保護——但這些釀造者所面對的限制，正是使這個類別引人入勝之處：在地的米、在地的水、尚未建立的供應鏈，以及沒有一個傳統來告訴他們日本酒「應該」是什麼味道。"
  },
  body: [
    { t:"section", id:"constraints",
      title:{ en:"Four hard problems", ja:"四つの難問", zh:"四項難題" }, jp:"制約",
      body:[
        { t:"steps", items:[
          { title:{en:"The rice",ja:"米",zh:"米"},
            text:{en:"Sake rice is not grown at scale outside Japan, and importing it is expensive and slow. Most overseas brewers use domestic medium-grain table rice — Calrose in California, Arkansas long- and medium-grain, Camargue rice in France, Australian and Italian varieties — which has more protein, a smaller or absent chalky core, and different water uptake. Some have begun contracting growers to plant Yamada Nishiki locally, with mixed results: the plant is photoperiod-sensitive and does not simply relocate.",
                  ja:"酒米は日本国外で大規模に栽培されておらず、輸入は高くつき時間もかかる。海外の造り手の多くは自国の中粒の飯米を用いる——カリフォルニアのカルローズ、アーカンソーの中・長粒米、フランスのカマルグ米、豪州やイタリアの品種。いずれもたんぱく質が多く、心白は小さいか存在せず、吸水の挙動も異なる。現地で山田錦を契約栽培し始めた例もあるが、結果はまちまちである。この稲は日長に敏感で、単純に移植できるものではない。",
                  zh:"酒米在日本以外並無大規模栽培，進口既昂貴又費時。多數海外釀造者使用本國的中粒食用米——加州的 Calrose、阿肯色的中長粒米、法國卡馬格米、澳洲與義大利品種——這些米蛋白質較高、心白較小或全無，吸水行為亦不同。已有人開始契作在地種植山田錦，成果不一：此稻對日照長度敏感，無法單純移植。"} },
          { title:{en:"The spores",ja:"種麹",zh:"種麴"},
            text:{en:"Kōji spores come from a handful of Japanese <em>tane-kōji</em> houses, and importing a living fungal culture across a border is a regulatory exercise in itself. Almost every overseas brewery depends on this supply line, which is a quiet point of fragility for the whole global category.",
                  ja:"種麹は日本のごく少数の種麹屋から来るものであり、生きた菌を国境を越えて持ち込むこと自体が規制上の作業である。海外のほぼすべての蔵がこの一本の供給線に依存しており、世界的な広がり全体にとって、静かな脆弱点となっている。",
                  zh:"種麴來自日本少數幾家種麴商，而將活體真菌培養物跨境輸入本身就是一項法規作業。幾乎每一家海外酒藏都依賴這條供應線，這是整個全球類別中一個不張揚的脆弱點。"} },
          { title:{en:"The water",ja:"水",zh:"水"},
            text:{en:"Very hard European or American municipal water will ferment too vigorously and finish coarse; iron above about 0.02 ppm browns the sake and flattens its aroma. Most overseas brewers treat or blend, and a few have sited themselves specifically for a well — the same reasoning that put Nada where it is.",
                  ja:"欧米の非常に硬い水道水は発酵が過剰になり、荒く仕上がる。鉄が約0.02ppmを超えれば着色し、香りは平板になる。海外の造り手の多くは処理や調合を行い、井戸のために立地を選んだ例もある。灘がいまの場所にある理由と同じ論理である。",
                  zh:"歐美極硬的自來水會使發酵過於旺盛、成酒粗糙；鐵含量超過約 0.02 ppm 便會使酒著色、香氣變平。多數海外釀造者會處理或調配水質，少數更專為一口水井而選址——這與灘之所以在灘的理由是同一套邏輯。"} },
          { title:{en:"The category",ja:"区分",zh:"類別"},
            text:{en:"Sake often has no legal category in the country it is brewed in, and gets taxed and labelled as “other fermented beverage”, “rice wine” or, awkwardly, as beer. Retailers do not know where to shelve it. This is a larger obstacle to the growth of overseas sake than any technical problem.",
                  ja:"造られている国に日本酒の法的区分が存在しないことが多く、「その他の醸造酒」「ライスワイン」、あるいは苦しくもビールとして課税・表示される。小売店はどの棚に置けばよいか分からない。海外での日本酒の成長にとって、これはいかなる技術的問題よりも大きな障害である。",
                  zh:"在許多釀造國，清酒沒有法定類別，往往被課稅並標示為「其他釀造酒」「米酒」，甚至尷尬地歸入啤酒。零售商不知該把它放在哪個貨架。就海外清酒的成長而言，這是比任何技術問題都更大的障礙。"} }
        ] },
        { t:"note", label:{en:"Why an export-only licence matters",ja:"輸出用免許が意味すること",zh:"為何出口專用執照重要"}, text:{
          en:"Japan has effectively issued no new domestic seishu manufacturing licences for decades. Since 2021 an export-only licence has been available, and it is how the handful of genuinely new Japanese sake breweries have started. Until then, the only way for an ambitious newcomer to build a brewery from scratch was to build it abroad — which is a substantial part of why the overseas scene exists at all.",
          ja:"日本では、国内向けの清酒製造免許が数十年にわたり事実上交付されていない。二〇二一年以降、輸出向けに限った免許が設けられ、真に新しい日本の蔵はこの枠から生まれている。それ以前、志のある新規参入者がゼロから蔵を建てる唯一の道は、国外に建てることだった。海外の醸造が存在する理由の相当部分は、ここにある。",
          zh:"日本數十年來實質上未再核發面向國內市場的清酒製造執照。2021 年起始有僅供出口的執照，真正新設的日本酒藏皆循此途徑而生。在此之前，有志的新進者要從零建藏，唯一的路就是建在國外——海外釀造圈之所以存在，這是很大一部分原因。" } }
      ]
    },

    { t:"section", id:"where",
      title:{ en:"Where it is brewed", ja:"どこで造られているか", zh:"在何處釀造" }, jp:"各国",
      body:[
        { t:"figure",
          caption:{
            en:"When sake was first brewed in each country, on a broken axis — the left half is sixty years in which almost nothing happened outside Brazil, the right half is thirty in which everything did. The three bands are three different reasons to brew: an immigrant community making its own drink, Japanese companies building plants near their customers, and finally people with no Japanese connection at all deciding this was a thing worth making where they lived. Only the third one is a category becoming international rather than merely exported.",
            ja:"それぞれの国で日本酒が最初に造られた年を、折った軸の上に置いたもの。左の半分はブラジルを除けばほとんど何も起こらなかった六十年であり、右の半分はすべてが起こった三十年である。三つの帯は、造る理由が三つあったことを示す——移民の社会が自らの酒を造ること、日本の会社が客の近くに工場を建てること、そして最後に、日本と何の縁もない人々が、自分の住む場所でこれを造る値打ちがあると決めたことである。区分が単に輸出されるのではなく国際的なものになるのは、三つめだけである。",
            zh:"各國最早釀出清酒的年份，畫在一條折斷的軸上：左半是除巴西之外幾乎什麼都沒發生的六十年，右半則是什麼都發生了的三十年。三段色帶代表三種不同的釀造理由——移民社群為自己釀酒、日本公司在客戶附近設廠，以及最後，一群與日本毫無淵源的人決定：這東西值得在自己居住的地方做出來。只有第三種，才是一個品類真正走向國際，而不只是被出口。" },
          svg: function (lang, L) {
            var W = 760, H = 336, AX = 200, GA = 300, GB = 340;
            function pa(y) { return 60 + (y - 1930) / 60 * 240; }
            function pb(y) { return 340 + (y - 1995) * 12.533; }
            var bands = [
              { x1:60, x2:256, f:"#F2EFE8", n:{ en:"a community brewing for itself", ja:"移民の社会が自らのために造る", zh:"僑民社群為自己而釀" } },
              { x1:256, x2:490, f:"#F8F6F1", n:{ en:"the majors go abroad", ja:"大手が海を渡る", zh:"大廠出海" } },
              { x1:490, x2:720, f:"#F2EFE8", n:{ en:"people with no Japanese connection", ja:"日本と縁のない人々が造る", zh:"與日本無淵源者也開始釀" } }
            ];
            var marks = [
              { x:pa(1935), lane:0, n:{ en:"Brazil", ja:"ブラジル", zh:"巴西" }, y:{ en:"1930s", ja:"一九三〇年代", zh:"1930 年代" } },
              { x:pa(1979), lane:2, n:{ en:"United States", ja:"アメリカ", zh:"美國" }, y:"1979" },
              { x:pb(1998), lane:1, n:{ en:"Australia", ja:"豪州", zh:"澳洲" }, y:{ en:"late 1990s", ja:"一九九〇年代末", zh:"1990 年代末" } },
              { x:pb(2005), lane:3, n:{ en:"Taiwan", ja:"台湾", zh:"臺灣" }, y:{ en:"2000s", ja:"二〇〇〇年代", zh:"2000 年代" } },
              { x:pb(2007), lane:0, n:{ en:"Canada", ja:"カナダ", zh:"加拿大" }, y:"2007" },
              { x:pb(2010), lane:2, n:{ en:"Norway", ja:"ノルウェー", zh:"挪威" }, y:"2010" },
              { x:pb(2015), lane:1, n:{ en:"New Zealand", ja:"ニュージーランド", zh:"紐西蘭" }, y:"2015" },
              { x:pb(2016), lane:3, n:{ en:"United Kingdom", ja:"イギリス", zh:"英國" }, y:"2016" },
              { x:pb(2019), lane:0, n:{ en:"France", ja:"フランス", zh:"法國" }, y:"2019" }
            ];
            var LANE = [96, 138, 246, 288];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i;
            for (i = 0; i < bands.length; i++) {
              var b = bands[i];
              if (b.x1 < GA && b.x2 > GA) {
                s += '<rect x="' + b.x1 + '" y="70" width="' + (GA - b.x1) + '" height="236" fill="' + b.f + '"/>';
                s += '<rect x="' + GB + '" y="70" width="' + (b.x2 - GB) + '" height="236" fill="' + b.f + '"/>';
              } else {
                s += '<rect x="' + b.x1 + '" y="70" width="' + (b.x2 - b.x1) + '" height="236" fill="' + b.f + '"/>';
              }
              s += '<text x="' + ((b.x1 + b.x2) / 2) + '" y="58" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(b.n) + '</text>';
            }
            s += '<line x1="60" y1="' + AX + '" x2="' + GA + '" y2="' + AX + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + GB + '" y1="' + AX + '" x2="720" y2="' + AX + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + (GA + 8) + '" y1="' + (AX - 8) + '" x2="' + (GA + 16) + '" y2="' + (AX + 8) + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + (GA + 22) + '" y1="' + (AX - 8) + '" x2="' + (GA + 30) + '" y2="' + (AX + 8) + '" stroke="#B4AC9C"/>';
            var ta = [1930, 1950, 1970, 1990], tb = [1995, 2005, 2015, 2025], t;
            for (i = 0; i < ta.length; i++) {
              t = pa(ta[i]);
              s += '<line x1="' + t + '" y1="' + AX + '" x2="' + t + '" y2="' + (AX + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + t + '" y="' + (AX + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + ta[i] + '</text>';
            }
            for (i = 0; i < tb.length; i++) {
              t = pb(tb[i]);
              s += '<line x1="' + t + '" y1="' + AX + '" x2="' + t + '" y2="' + (AX + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + t + '" y="' + (AX + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + tb[i] + '</text>';
            }
            for (i = 0; i < marks.length; i++) {
              var m = marks[i], ly = LANE[m.lane], above = m.lane < 2;
              s += '<line x1="' + m.x.toFixed(1) + '" y1="' + (above ? ly + 6 : ly - 20) + '" x2="' + m.x.toFixed(1) + '" y2="' + (above ? AX - 5 : AX + 24) + '" stroke="#CDC6B9"/>';
              s += '<rect x="' + (m.x - 4.5).toFixed(1) + '" y="' + (AX - 4.5) + '" width="9" height="9" fill="#7C6B52"/>';
              s += '<text x="' + m.x.toFixed(1) + '" y="' + (above ? ly : ly - 12) + '" text-anchor="middle" font-size="11.5" fill="#201E1B">' + L(m.n) + '</text>';
              s += '<text x="' + m.x.toFixed(1) + '" y="' + (above ? ly + 13 : ly) + '" text-anchor="middle" font-size="9" fill="#8B857C">' + L(m.y) + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "国ごとの最初の一蔵の年である。国の数ではなく、始まりの年を数えている。"
                  : lang === "zh" ? "標示的是各國第一家酒藏出現的年份，數的是「開始的時間」，而非酒藏的數量。"
                  : "Each mark is the first brewery in that country. The chart counts beginnings, not breweries.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          cols:[{en:"Country",ja:"国",zh:"國家"},{en:"Since",ja:"時期",zh:"起始"},{en:"Character of the scene",ja:"その国の状況",zh:"該地概況"}],
          rows:[
            [{en:"United States",ja:"アメリカ",zh:"美國"},{en:"1979 —",ja:"1979年〜",zh:"1979 年起"},
             {en:"By far the largest overseas producer, and now two distinct industries. Japanese majors — Ozeki in Hollister from 1979, Takara in Berkeley from 1983, Gekkeikan in Folsom from 1989 — brew volume sake from California Calrose for the restaurant trade. Alongside them, a craft movement of two dozen or more small breweries has grown since the 2010s: Brooklyn Kura in New York, Sequoia and Den in the Bay Area, Origami in Arkansas using Arkansas rice, and Moto-i in Minneapolis, which opened as a sake brewpub in 2008. Asahi Shuzō opened Dassai Blue in Hyde Park, New York, in 2023.",
              ja:"海外最大の産地であり、いまや二つの異なる産業が並存する。日本の大手——1979年からホリスターの大関、1983年からバークレーの宝、1989年からフォルサムの月桂冠——がカリフォルニア米で量産し、飲食店市場に供給する。その傍らで、2010年代以降、二十を超える小規模蔵によるクラフトの動きが育った。ニューヨークのブルックリン・クラ、ベイエリアのセコイアやデン、アーカンソー米を用いるアーカンソーのオリガミ、そして2008年に日本酒のブルーパブとして開いたミネアポリスのモトアイ。旭酒造は2023年、ニューヨーク州ハイドパークにDASSAI BLUEを開いた。",
              zh:"海外最大的產地，如今並存著兩種不同的產業。日本大廠——1979 年起於霍利斯特的大關、1983 年起於柏克萊的寶酒造、1989 年起於福爾松的月桂冠——以加州 Calrose 米量產，供應餐飲市場。與之並行的是 2010 年代以來成長的手工釀造運動，已有二十餘家小型酒藏：紐約的 Brooklyn Kura、灣區的 Sequoia 與 Den、以阿肯色米釀造的 Origami，以及 2008 年即以清酒 brewpub 形式開業的明尼亞波利斯 Moto-i。旭酒造於 2023 年在紐約州海德公園開設 DASSAI BLUE。"}],
            [{en:"Canada",ja:"カナダ",zh:"加拿大"},{en:"2007 —",ja:"2007年〜",zh:"2007 年起"},
             {en:"Small and urban. Artisan SakeMaker on Granville Island in Vancouver was the first, followed by Ontario Spring Water Sake in Toronto. Both work with North American rice and emphasise fresh nama styles that cannot be shipped from Japan.",
              ja:"小規模かつ都市型。バンクーバー・グランビルアイランドのアルチザン・サケメーカーが最初で、トロントのオンタリオ・スプリングウォーター・サケが続いた。いずれも北米産の米を用い、日本からは運べない生酒を軸にしている。",
              zh:"規模小且集中於都市。溫哥華 Granville Island 的 Artisan SakeMaker 為最早，其後有多倫多的 Ontario Spring Water Sake。兩者皆使用北美米，並主打無法自日本運送的新鮮生酒。"}],
            [{en:"United Kingdom",ja:"イギリス",zh:"英國"},{en:"2016 —",ja:"2016年〜",zh:"2016 年起"},
             {en:"Kanpai in south London was the first British sake brewery and opened Europe's first sake taproom two years later. A Japanese-founded brewery at Fordham Abbey in Cambridgeshire followed, restoring a Georgian estate as a brewing and cultural site.",
              ja:"ロンドン南部のカンパイが英国初の蔵であり、二年後にヨーロッパ初の日本酒タップルームを開いた。ケンブリッジシャーのフォーダム・アビーには日本人が設立した蔵が続き、ジョージ王朝期の館を醸造と文化の拠点として再生させた。",
              zh:"倫敦南部的 Kanpai 是英國第一家清酒藏，兩年後開設歐洲首間清酒 taproom。其後劍橋郡 Fordham Abbey 出現由日本人創設的酒藏，將一座喬治時代的莊園再生為釀造與文化據點。"}],
            [{en:"France",ja:"フランス",zh:"法國"},{en:"2019 —",ja:"2019年〜",zh:"2019 年起"},
             {en:"WAKAZE built a brewery at Fresnes outside Paris in 2019 using Camargue rice and French water, and framed its output explicitly as a French product rather than an imitation Japanese one — sake finished in wine barrels, sake with herbs, sake for a French table. It is the clearest statement anywhere that the category can be relocated rather than merely exported.",
              ja:"WAKAZEは2019年、パリ郊外フレンヌに蔵を建て、カマルグ米とフランスの水を用いた。その製品を、日本酒の模倣ではなくフランスの産品として明確に位置づけている——ワイン樽で仕上げた酒、ハーブを用いた酒、フランスの食卓のための酒。この区分が輸出されるだけでなく移植されうることの、世界で最も明快な表明である。",
              zh:"WAKAZE 於 2019 年在巴黎近郊 Fresnes 建藏，使用卡馬格米與法國水，並明確將其產品定位為法國產物而非日本酒的仿製——以葡萄酒桶收尾的酒、加入香草的酒、為法國餐桌而釀的酒。這是世上最清晰的一項宣示：這個類別可以被移植，而不只是被出口。"}],
            [{en:"Norway",ja:"ノルウェー",zh:"挪威"},{en:"2010 —",ja:"2010年〜",zh:"2010 年起"},
             {en:"A craft brewery at Grimstad began brewing sake alongside beer in 2010, generally recognised as the first sake brewed in Europe. Cold climate, very soft water, and a brewing culture already comfortable with unusual fermentation.",
              ja:"グリムスタの醸造所が2010年、ビールと並行して日本酒を造り始めた。ヨーロッパで最初の日本酒醸造とされる。寒冷な気候、極めて軟らかい水、そして特殊な発酵に慣れた醸造文化があった。",
              zh:"格里姆斯塔的一家精釀廠於 2010 年開始在啤酒之外釀造清酒，一般認為是歐洲最早的清酒釀造。寒冷氣候、極軟的水，加上一個早已習慣特殊發酵的釀造文化。"}],
            [{en:"Taiwan",ja:"台湾",zh:"台灣"},{en:"2000s —",ja:"2000年代〜",zh:"2000 年代起"},
             {en:"Taiwan has both a colonial-era brewing inheritance and a live contemporary scene. The Wufeng Farmers' Association winery in Taichung brews its <em>Chuwu</em> junmai ginjō and daiginjō from Yiquan aromatic rice grown in Wufeng with spring water from Puli, and has taken medals at European and American competitions since 2010 — a rare case of a rice variety bred for eating being used deliberately, and successfully, at premium level.",
              ja:"台湾には植民地期に由来する醸造の遺産と、現在進行形の動きの双方がある。台中の霧峰農會酒莊は、霧峰産の益全香米と埔里の湧水を用いて純米吟醸・純米大吟醸「初霧」を醸し、2010年以降、欧米のコンクールで受賞を重ねている。食用に育成された品種を意図的に、しかも上位の水準で用いた稀な成功例である。",
              zh:"台灣同時擁有殖民時期的釀造遺產與活躍的當代發展。台中霧峰農會酒莊以霧峰所產益全香米搭配埔里湧泉，釀製「初霧」純米吟釀與純米大吟釀，並自 2010 年起於歐美賽事屢獲獎牌——這是為食用而育成的米種被刻意、且成功地用於高階酒的罕見案例。"}],
            [{en:"Australia · New Zealand",ja:"豪州・ニュージーランド",zh:"澳洲・紐西蘭"},{en:"1990s —",ja:"1990年代〜",zh:"1990 年代起"},
             {en:"A Japanese-backed brewery has operated near Sydney since the late 1990s, using Australian rice. New Zealand's first, at Queenstown, opened in 2015 and works with Southland water and imported and local rice.",
              ja:"シドニー近郊では1990年代末から日本資本の蔵が豪州産米で操業している。ニュージーランド初の蔵は2015年にクイーンズタウンで開き、サウスランドの水と、輸入米および国産米を用いている。",
              zh:"雪梨近郊自 1990 年代末即有日資酒藏以澳洲米營運。紐西蘭第一家於 2015 年在皇后鎮開業，使用南地的水以及進口與在地米。"}],
            [{en:"Brazil",ja:"ブラジル",zh:"巴西"},{en:"1930s —",ja:"1930年代〜",zh:"1930 年代起"},
             {en:"The oldest overseas sake tradition of all, established by the Japanese immigrant community in São Paulo state in the 1930s and continuous ever since — decades before the modern export era, and for a domestic diaspora market rather than an export one.",
              ja:"海外で最も古い日本酒の伝統であり、1930年代にサンパウロ州の日系移民社会によって始められ、以来途切れていない。現代の輸出時代よりも数十年早く、輸出ではなく移民社会の内需のために存在してきた。",
              zh:"海外最古老的清酒傳統，1930 年代由聖保羅州的日裔移民社群創立，此後未曾中斷——比現代出口時代早了數十年，且其市場是僑民內需而非出口。"}],
            [{en:"Elsewhere",ja:"その他",zh:"其他"},{en:"2010s —",ja:"2010年代〜",zh:"2010 年代起"},
             {en:"Spain, Italy, Germany, Poland, Mexico, Vietnam, Thailand, China, South Korea and others now have at least one brewery each. Several are beer breweries that added a sake line; several are one-person operations. The category is growing fastest where craft beer got there first, because the equipment, the retail channel and the audience already exist.",
              ja:"スペイン、イタリア、ドイツ、ポーランド、メキシコ、ベトナム、タイ、中国、韓国などにも、少なくとも一つずつ蔵がある。ビール醸造所が日本酒の系列を加えた例も、一人で営む例も多い。クラフトビールが先に根づいた場所ほど成長が速い。設備も販路も客層も、すでにそこにあるからである。",
              zh:"西班牙、義大利、德國、波蘭、墨西哥、越南、泰國、中國、韓國等地如今至少各有一家酒藏。其中不少是啤酒廠增設清酒產線，也有不少是一人經營。精釀啤酒先行落地之處，此類別成長最快——因為設備、通路與受眾都已就位。"}]
          ] }
      ]
    },

    { t:"section", id:"question",
      title:{ en:"Is it sake?", ja:"それは日本酒か", zh:"那算日本酒嗎" }, jp:"問い",
      body:[
        { t:"p", text:{
          en:"The legal answer is settled and narrow: it is <em>sake</em> and not <em>Nihonshu</em>. The interesting question is the other one — whether a drink made with a different rice, a different water and no inherited assumptions is a diluted version of the thing or a legitimate branch of it.",
          ja:"法的な答えは定まっており、かつ狭い——それは sake であって「日本酒」ではない。面白いのはもう一方の問いである。異なる米、異なる水、受け継いだ前提の不在のもとで造られた酒は、薄まった模造なのか、それとも正統な分枝なのか。",
          zh:"法律上的答案已然確定且狹窄：它是 sake，不是「日本酒」。有趣的是另一個問題——以不同的米、不同的水、且不帶任何承襲前提所釀之酒，究竟是稀釋過的仿製品，還是這一類別的正當分支？" } },
        { t:"compare", cols:2, items:[
          { title:{en:"The case that it is diminished",ja:"薄まったものだという立場",zh:"認為它是稀釋品的立場"},
            text:{en:"Sake's quality depends on a supply chain that took four centuries to build: rice varieties bred for a purpose over a hundred years, tane-kōji houses five centuries old, a national research institute, a yeast library, and a training system that transmits judgement rather than instructions. A brewery working with table rice and a book is not doing the same thing, and the results generally show it.",
                  ja:"日本酒の質は、四世紀をかけて築かれた供給網に依存している——百年かけて目的のために育成された品種、五百年続く種麹屋、国立の研究機関、酵母の系統保存、そして手順ではなく判断を伝える育成制度。飯米と書物で造る蔵は同じことをしているのではなく、結果にもそれは概ね現れる。",
                  zh:"日本酒的品質倚賴一條花了四個世紀建立的供應鏈：歷經百年為特定目的育成的米種、傳承五百年的種麴商、國家級研究機構、酵母菌種庫，以及傳遞判斷而非步驟的養成制度。僅憑食用米與書本釀造的酒藏，做的並不是同一件事，而成果通常也顯示了這一點。"} },
          { title:{en:"The case that it is a branch",ja:"分枝であるという立場",zh:"認為它是分支的立場"},
            text:{en:"Every constraint listed above is also a constraint the Japanese industry has never had to think about. Overseas brewers use unpolished rice because polishing capacity does not exist, ferment warmer because the building is warmer, and sell nama because they can — and some of what comes out is genuinely unlike anything made in Japan. Historically, that is how every drinks category has changed: not from the centre, but from the places that could not follow the rules.",
                  ja:"上に挙げた制約はいずれも、日本の産業が考える必要のなかった制約でもある。海外の造り手は、精米設備がないから磨かない米で造り、建物が暖かいから高い温度で発酵させ、できるから生酒を売る。そこから出てくるものの一部は、日本で造られる何ものとも本当に似ていない。歴史的に、あらゆる酒の区分はそのように変わってきた——中心からではなく、規則に従えなかった場所から。",
                  zh:"上述每一項限制，同時也是日本業界從不需要思考的限制。海外釀造者因為沒有精米設備而使用未精米之米，因為廠房較暖而以較高溫發酵，因為做得到而販售生酒——其成果中有一部分，確實不像日本所釀的任何東西。歷史上，每一個酒類的變革都是這樣發生的：不是來自中心，而是來自那些無法遵守規則的地方。"} }
        ] },
        { t:"note", label:{en:"What to expect in the glass",ja:"杯のなかで予期すべきこと",zh:"杯中可預期之物"}, text:{
          en:"Overseas sake tends to be fresher, cloudier, lower in alcohol, more variable and more often unpasteurised than Japanese sake, because that is what a small brewery selling locally can do best. It also tends to be less polished in both senses. Judge it as a young category rather than against a Japanese daiginjō, and the good examples are very good.",
          ja:"海外の日本酒は、日本のものより新鮮で、濁りがちで、アルコールは低く、振れ幅が大きく、火入れをしていないことが多い。地元で売る小さな蔵に最も向いているのがそれだからである。二つの意味において磨かれていない傾向もある。日本の大吟醸と比べるのではなく、若い区分として評価すれば、良いものは実に良い。",
          zh:"海外清酒相較於日本清酒，通常更新鮮、更混濁、酒精更低、批次差異更大，且更常未經火入——因為那正是小型在地銷售酒藏最擅長之事。它們在兩種意義上也都較不「精緻」。若把它當作一個年輕的類別來評判，而非拿去對比日本大吟釀，那麼其中的佳作確實相當出色。" } }
      ]
    },

{ t:"section", id:"taiwan",
      title:{ en:"Taiwan: a colonial brewing history", ja:"台湾——植民地期の酒造史", zh:"台灣：一段殖民時期的釀造史" }, jp:"台湾の清酒",
      body:[
        { t:"p", text:{
          en:"Taiwan is the one place outside Japan with a continuous, century-long institutional history of sake brewing, and it is rarely discussed in English writing on the subject.",
          ja:"台湾は、日本の外で、清酒醸造の制度的な歴史が一世紀にわたり途切れず続いている唯一の地である。そしてそのことが英語で語られることはほとんどない。",
          zh:"台灣是日本以外唯一擁有連續一世紀清酒釀造制度史的地方，而這件事在英文的相關書寫中鮮少被提及。" } },
        { t:"timeline", items:[
          { year:"1895–1920s", era:{en:"Early colonial",ja:"領台初期",zh:"領臺初期"},
            title:{en:"Japanese brewing arrives",ja:"日本の酒造りの移入",zh:"日式釀造傳入"}, jp:"移入",
            text:{en:"Japanese settlers brought sake brewing with them, and the difficulty was immediate: Taiwan is subtropical, and a winter cold enough for a slow mash does not exist at sea level. Early production relied on ice, imported rice and highland sites.",
              ja:"日本からの移住者が酒造りを持ち込んだが、困難はただちに現れた。台湾は亜熱帯であり、緩やかな醪に足る冬の寒さは平地には存在しない。初期の生産は、氷と、輸入した米と、高地の立地に頼った。",
              zh:"日本移民帶來了清酒釀造，困難也立即浮現：臺灣屬亞熱帶，平地並不存在足以支撐緩慢發酵的寒冬。早期生產仰賴冰、進口米，以及高地廠址。"} },
          { year:"1922", era:{en:"Taishō 11",ja:"大正11年",zh:"大正十一年"},
            title:{en:"The alcohol monopoly",ja:"酒類専売の開始",zh:"酒類專賣開始"}, jp:"専売局",
            text:{en:"The Government-General established a monopoly on alcohol production and sale in Taiwan, consolidating private breweries into state-run plants. This is the origin of the institutional structure that survives today as Taiwan Tobacco and Liquor Corporation.",
              ja:"台湾総督府が酒類の製造と販売を専売とし、民間の酒造を官営の工場へ統合した。今日の台湾菸酒公司へと続く制度の骨格は、ここに始まる。",
              zh:"臺灣總督府實施酒類專賣，將民營酒廠整併為官營工場。今日臺灣菸酒公司所承襲的制度骨架，即源於此。"} },
          { year:"1920s–30s", era:{en:"Shōwa",ja:"昭和",zh:"昭和"},
            title:{en:"Hōrai rice",ja:"蓬萊米",zh:"蓬萊米"}, jp:"蓬萊米",
            text:{en:"The development of <em>hōrai-mai</em>, japonica rice bred to grow in Taiwan, solved the raw-material problem and made local brewing viable at scale. It remains one of the more consequential pieces of colonial agricultural science in East Asia, for reasons well beyond sake.",
              ja:"台湾で育つよう育成されたジャポニカ米、蓬萊米の開発が原料の問題を解き、現地での大規模な醸造を可能にした。酒をはるかに超えた理由から、東アジアにおける植民地期の農学のなかでも影響の大きい成果の一つであり続けている。",
              zh:"為適應臺灣而育成的稉稻「蓬萊米」解決了原料問題，使在地釀造得以規模化。基於遠超清酒的理由，它至今仍是東亞殖民時期農業科學中影響最深遠的成果之一。"} },
          { year:"1945–", era:{en:"Postwar",ja:"戦後",zh:"戰後"},
            title:{en:"Continuity under a new state",ja:"体制は変わり、事業は続く",zh:"政權更迭，事業延續"}, jp:"継続",
            text:{en:"The monopoly passed to the Republic of China administration and continued; sake production continued alongside rice wine, kaoliang and beer. Brands from this lineage are still made and sold in Taiwan, and the technical knowledge never left.",
              ja:"専売は中華民国の統治へ引き継がれ、そのまま続いた。清酒の製造は、米酒、高粱酒、ビールと並んで続けられた。この系譜の銘柄はいまも台湾で造られ売られており、技術の知識が途切れたことはない。",
              zh:"專賣制度移交中華民國政府後延續下來；清酒的生產與米酒、高粱酒、啤酒並行未斷。此一脈絡的品牌至今仍在臺灣製造販售，技術知識也從未流失。"} },
          { year:"2002–", era:{en:"Liberalisation",ja:"自由化",zh:"自由化"},
            title:{en:"Private breweries again",ja:"ふたたび民間へ",zh:"民間酒廠再起"}, jp:"開放",
            text:{en:"Taiwan's accession to the WTO ended the monopoly and opened licensing to private producers. Small craft operations now make sake with Taiwanese rice, and the country is simultaneously one of the more significant per-capita export markets for Japanese sake in Asia.",
              ja:"台湾のWTO加盟により専売は終わり、民間への免許が開かれた。いまでは小規模な造り手が台湾の米で清酒を醸しており、同時に台湾は、アジアにおける日本酒の一人当たり輸出先としても有数の市場である。",
              zh:"臺灣加入 WTO 終結了專賣，並向民間開放釀酒執照。如今已有小型工藝酒廠以臺灣米釀造清酒；同時，臺灣也是亞洲人均進口日本酒最可觀的市場之一。"} }
        ] },
        { t:"note", label:{en:"Why this matters to the wider question",ja:"この事例が広い問いに対して持つ意味",zh:"此例對更大命題的意義"}, text:{
          en:"Taiwan is the strongest available counter-example to the claim that sake needs a Japanese winter. A subtropical island brewed it at industrial scale for decades, by solving the temperature problem with engineering and the rice problem with plant breeding. Every non-Japanese brewery working today is doing a version of the same two things.",
          ja:"台湾は、日本酒に日本の冬が要るという主張に対する、最も強い反例である。亜熱帯の島が、温度の問題を工学で、米の問題を育種で解くことによって、何十年にもわたり工業的な規模でそれを醸してきた。今日活動する日本国外の蔵はどれも、この同じ二つのことの変奏をしている。",
          zh:"對於「清酒需要日本的冬天」這項主張，臺灣是最有力的反例。一座亞熱帶島嶼以工程解決溫度問題、以育種解決稻米問題，數十年來以工業規模釀造清酒。今日所有日本境外的酒廠，做的都是這同樣兩件事的某個版本。" } }
      ]
    },

    { t:"section", id:"whoswho",
      title:{ en:"Who is brewing outside Japan", ja:"日本国外で醸す人々", zh:"日本境外的釀造者" }, jp:"世界の蔵",
      body:[
        { t:"p", text:{
          en:"There are now well over a hundred sake breweries outside Japan, on six continents. Three broad kinds, with quite different aims.",
          ja:"日本の外にある清酒の蔵は、いまや六大陸に百を優に超える。目的の異なる三つの型に大別できる。",
          zh:"如今日本境外的清酒酒廠已遠超一百家，遍及六大洲。可大致分為目標相當不同的三類。" } },
        { t:"grid", cols:3, cells:[
          { h:{en:"Japanese majors abroad",ja:"日本の大手の海外拠点",zh:"日本大廠的海外據點"}, jp:"現地生産",
            d:{en:"Ozeki, Gekkeikan, Takara and others opened plants in California from the 1970s onward, mostly to supply Japanese restaurants without paying freight on water. Large volumes, Californian rice, competent everyday sake.",ja:"大関、月桂冠、宝酒造などが一九七〇年代以降、カリフォルニアに工場を設けた。主として、水に運賃を払わずに日本料理店へ供給するためである。量は大きく、米はカリフォルニア産、酒は日常の水準として十分によい。",zh:"大關、月桂冠、寶酒造等自 1970 年代起在加州設廠，主要是為了供應日本料理餐廳而不必為水付運費。產量大、使用加州米，是稱職的日常清酒。"} },
          { h:{en:"Craft startups",ja:"独立した小規模の造り手",zh:"獨立小型酒廠"}, jp:"クラフト",
            d:{en:"Small independent breweries founded since roughly 2010 in the United States, Canada, France, Norway, the United Kingdom, Spain, Mexico, Australia and elsewhere. Local rice where possible, local water necessarily, and a strong tendency toward junmai, nama and unfiltered styles because those are what a small brewery does well.",ja:"おおむね二〇一〇年以降、米国、カナダ、フランス、ノルウェー、英国、スペイン、メキシコ、オーストラリアなどに生まれた、小さく独立した蔵。可能なら地元の米、必然的に地元の水を使い、純米・生・無濾過へ強く傾く。小さな蔵が得意とするのがそれだからである。",zh:"約自 2010 年起在美國、加拿大、法國、挪威、英國、西班牙、墨西哥、澳洲等地創立的小型獨立酒廠。盡可能用在地米、必然使用在地水，並強烈傾向純米、生酒與無濾過——因為那正是小酒廠擅長的。"} },
          { h:{en:"Japanese houses building abroad",ja:"海外に建てる日本の蔵",zh:"在海外建廠的日本酒藏"}, jp:"進出",
            d:{en:"Established Japanese breweries opening a second kura overseas — in France, the United States, Vietnam and elsewhere — usually with a Japanese tōji and local rice. Partly market access, partly an escape from the domestic licence freeze.",ja:"既存の日本の蔵が、フランス、米国、ベトナムなどに第二の蔵を開く動き。多くは日本人の杜氏と現地の米による。市場への足がかりであると同時に、国内の免許凍結からの逃れ道でもある。",zh:"既有的日本酒藏在法國、美國、越南等地開設第二座酒藏，多半由日籍杜氏搭配在地米。既是為了市場准入，也是為了繞開國內的執照凍結。"} }
        ] },
        { t:"table",
          caption:{en:"A non-exhaustive map",ja:"網羅的ではない地図",zh:"一份不完整的地圖"},
          cols:[{en:"Country",ja:"国",zh:"國家"},{en:"Notes",ja:"注",zh:"備註"}],
          keyCol:true,
          rows:[
            [{en:"United States",ja:"米国",zh:"美國"},
             {en:"The largest non-Japanese production base by far. Californian plants from the Japanese majors, plus a genuine craft scene in Oregon, New York, Texas and elsewhere. American-grown Calrose and Yamada Nishiki are both used.",ja:"日本国外で最大の生産地。日本の大手によるカリフォルニアの工場に加え、オレゴン、ニューヨーク、テキサスなどに本格的なクラフトの潮流がある。米国産のカルローズも山田錦も使われている。",zh:"日本境外規模最大的生產基地。除了日本大廠的加州工場，奧勒岡、紐約、德州等地也有真正的工藝浪潮。美國產的 Calrose 與山田錦皆有使用。"}],
            [{en:"France",ja:"フランス",zh:"法國"},
             {en:"Several breweries including Japanese-founded ventures using Camargue rice. France is also one of the most receptive restaurant markets for sake in Europe, which is not a coincidence.",ja:"カマルグ産の米を用いる、日本人が創業した蔵を含む複数の造り手がある。フランスはまた、欧州で最も日本酒を受け入れている飲食市場の一つであり、それは偶然ではない。",zh:"有數家酒廠，包括由日本人創立、使用卡馬格米的事業。法國同時也是歐洲最能接納清酒的餐飲市場之一，這並非巧合。"}],
            [{en:"Norway · UK · Spain",ja:"ノルウェー・英国・スペイン",zh:"挪威・英國・西班牙"},
             {en:"Small craft producers, mostly junmai and nama, often started by brewers who came from beer. Cold northern water and cold buildings turn out to be a genuine advantage.",ja:"小さなクラフトの造り手が中心で、多くは純米と生。ビールから来た造り手が始めた例が多い。北の冷たい水と冷たい建物は、実際に利点である。",zh:"以小型工藝生產者為主，多做純米與生酒，不少創辦人來自啤酒業。北方的冷水與寒冷建築，確實是一項優勢。"}],
            [{en:"Canada · Australia · Mexico · Brazil",ja:"カナダ・豪州・メキシコ・ブラジル",zh:"加拿大・澳洲・墨西哥・巴西"},
             {en:"Established small producers, several of them a generation old, serving strong local Japanese-restaurant markets and increasingly a domestic audience.",ja:"定着した小規模の造り手があり、一世代を経たものもある。地元の日本料理店の需要に応え、近年は国内の飲み手にも広がりつつある。",zh:"已站穩腳步的小型生產者，其中數家已有一個世代的歷史，服務當地強勁的日式餐飲市場，並日益觸及本地飲者。"}],
            [{en:"China · Vietnam · Korea",ja:"中国・ベトナム・韓国",zh:"中國・越南・韓國"},
             {en:"Both Japanese-invested plants and local ventures. All three countries have their own deep kōji-adjacent brewing traditions, which makes the technical transfer unusually straightforward.",ja:"日本資本の工場も、現地資本の事業もある。三国はいずれも麹に隣接する独自の深い醸造の伝統をもち、そのために技術の移転は異例に容易である。",zh:"既有日資工廠，也有在地事業。這三個國家都擁有自身深厚的、與麴相鄰的釀造傳統，使技術移轉異常順利。"}]
          ] },
        { t:"tiny", text:{
          en:"None of these may be labelled 日本酒, which is reserved by geographical indication for sake made in Japan from Japanese rice. They may be, and are, sold as sake.",
          ja:"これらのいずれも「日本酒」と表示することはできない。この語は、日本国内で国産米を用いて造られた清酒に、地理的表示として留保されている。sakeとして売ることは可能であり、実際にそう売られている。",
          zh:"上述任何一者都不得標示為「日本酒」——該詞以地理標示保留給在日本以日本米釀造的清酒。它們可以、也確實以 sake 的名義販售。" } }
      ]
    },

{ t:"section", id:"map-of-brewing",
      title:{ en:"Where sake is brewed outside Japan", ja:"日本の外で酒が醸される場所", zh:"日本以外釀造清酒的地方" }, jp:"世界の蔵",
      body:[
        { t:"p", text:{
          en:"Sake brewing outside Japan falls into three quite different waves, and confusing them makes the whole picture unreadable. First came Japanese emigrant communities, brewing for themselves from the early twentieth century. Then came Japanese corporations building plants in export markets from the 1980s. Most recently — and most interestingly — came local brewers with no Japanese connection at all, brewing with local rice and local water because they wanted to.",
          ja:"日本の外での酒造りは、三つのまったく異なる波に分かれる。混同すれば、全体の像は読めなくなる。第一に、二十世紀初頭からの、日本からの移民社会が自らのために醸した波。第二に、一九八〇年代以降、日本の企業が輸出市場に工場を建てた波。そして最も新しく、最も興味深いのは、日本と何の縁もない現地の造り手が、そう望んだがゆえに地元の米と水で醸す波である。",
          zh:"日本以外的清酒釀造分為三波性質相當不同的浪潮，混為一談就會讓整幅圖像變得無法閱讀。第一波是二十世紀初起，日本移民社群為自己而釀。第二波是一九八〇年代起，日本企業在出口市場興建工廠。而最新、也最有意思的一波，是與日本毫無淵源的在地釀造者，因為自己想做，而以在地的米與水釀酒。" } },

        { t:"table",
          cols:[{en:"Where",ja:"地域",zh:"地區"},{en:"Since",ja:"開始",zh:"起始"},{en:"Character",ja:"性格",zh:"性格"},{en:"What is interesting about it",ja:"注目すべき点",zh:"有意思之處"}],
          rows:[
            [{en:"Brazil",ja:"ブラジル",zh:"巴西"},{en:"1930s",ja:"一九三〇年代",zh:"一九三〇年代"},
             {en:"Emigrant community",ja:"移民社会",zh:"移民社群"},
             {en:"The oldest continuous sake production outside Japan, serving the world's largest Japanese diaspora. It predates the export boom by half a century and developed largely unnoticed by Japan.",
              ja:"日本の外で最も長く続く酒造りであり、世界最大の日系社会に供してきた。輸出の隆盛より半世紀早く、日本にほとんど気づかれぬまま育った。",
              zh:"日本以外持續最久的清酒生產，服務的是全球最大的日裔社群。它比出口熱潮早了半個世紀，且幾乎在日本無人注意的情況下發展起來。"}],
            [{en:"California",ja:"カリフォルニア",zh:"加州"},{en:"1980s",ja:"一九八〇年代",zh:"一九八〇年代"},
             {en:"Japanese corporate plants",ja:"日本企業の工場",zh:"日本企業的工廠"},
             {en:"Large Japanese houses built breweries near their biggest export market — Takara at Berkeley from the early 1980s, Gekkeikan at Folsom from 1989. Industrial in scale, and the reason inexpensive sake in American restaurants is often domestic.",
              ja:"日本の大手が最大の輸出市場の近くに蔵を建てた——一九八〇年代前半のバークレーの宝、一九八九年のフォルサムの月桂冠。規模は工業的であり、米国の飲食店の安価な酒がしばしば国産である理由である。",
              zh:"日本大廠在其最大出口市場旁興建酒藏——寶酒造自一九八〇年代初於柏克萊，月桂冠自一九八九年於 Folsom。規模是工業級的，這也是美國餐廳裡便宜清酒常常是「本地產」的原因。"}],
            [{en:"Oregon",ja:"オレゴン",zh:"奧勒岡"},{en:"1990s",ja:"一九九〇年代",zh:"一九九〇年代"},
             {en:"Hybrid",ja:"折衷",zh:"混合型"},
             {en:"A brewery founded as an importer that began brewing on the Pacific Northwest's own soft water. An early demonstration that American conditions could produce sake worth drinking on its own terms.",
              ja:"輸入業として始まり、太平洋岸北西部の軟水で醸し始めた蔵。米国の条件が、それ自身の土俵で飲むに値する酒を生みうることの、早い実証である。",
              zh:"一家以進口商起家、後來以太平洋西北地區的軟水開始釀造的酒藏。這是「美國的條件也能釀出以自身標準值得一飲之酒」的早期實證。"}],
            [{en:"Norway",ja:"ノルウェー",zh:"挪威"},{en:"c. 2010",ja:"二〇一〇年頃",zh:"約 2010 年"},
             {en:"Craft brewery crossover",ja:"クラフトビール醸造所からの越境",zh:"精釀啤酒廠的跨界"},
             {en:"A craft beer brewery that added sake, generally cited as the first sake brewed in Europe. The crossover route — a fermentation business adding a new fermentation — turned out to be the commonest way sake reached Western brewers.",
              ja:"クラフトビールの醸造所が酒を加えた例であり、欧州で最初に醸された酒とされることが多い。発酵の事業が新たな発酵を加えるというこの越境の道は、西洋の造り手に酒が届く最も多い経路であることが判明した。",
              zh:"一家精釀啤酒廠增設了清酒生產線，通常被視為歐洲最早釀造的清酒。這條「發酵事業增添一項新發酵」的跨界路徑，後來成為清酒抵達西方釀造者最常見的方式。"}],
            [{en:"New Zealand",ja:"ニュージーランド",zh:"紐西蘭"},{en:"2015",ja:"二〇一五年",zh:"2015 年"},
             {en:"Local start-up",ja:"現地の新興",zh:"在地新創"},
             {en:"A small brewery in the South Island, generally described as the first in New Zealand, using local water and imported and local rice. Sits squarely in the third wave: no corporate parent, no Japanese founder.",
              ja:"南島の小さな蔵で、ニュージーランド初とされる。地元の水と、輸入および現地の米を用いる。第三の波にまさしく属する——親会社もなく、日本人の創業者もいない。",
              zh:"南島的一家小酒藏，一般被稱為紐西蘭第一家，使用在地水源與進口及本地的米。它正屬於第三波：沒有母公司，也沒有日本創辦人。"}],
            [{en:"United Kingdom",ja:"英国",zh:"英國"},{en:"2016 onward",ja:"二〇一六年以降",zh:"2016 年起"},
             {en:"Urban craft and a Japanese-funded estate",ja:"都市のクラフトと、日本資本の蔵",zh:"都市精釀與日資酒藏"},
             {en:"Two very different projects within two years: a small London brewery founded by a British couple who learned the craft in Japan, and a substantial Japanese-funded brewery on an English country estate. The contrast between them is the whole shape of the third wave in one country.",
              ja:"二年のうちに、まったく異なる二つの試みが現れた——日本で技を学んだ英国人夫妻が興したロンドンの小さな蔵と、英国の田園の屋敷に建てられた日本資本の本格的な蔵である。両者の対照は、第三の波の形の全体を一国のうちに示している。",
              zh:"兩年之內出現了兩個截然不同的計畫：一家由在日本學過手藝的英國夫婦創辦的倫敦小酒藏，以及一座建在英格蘭鄉間莊園、由日資興建的正規酒藏。兩者的對比，把第三波的整個形狀濃縮在一個國家裡。"}],
            [{en:"France",ja:"フランス",zh:"法國"},{en:"2019",ja:"二〇一九年",zh:"2019 年"},
             {en:"Japanese founders, French terms",ja:"日本人の創業、フランスの条件",zh:"日籍創辦，法式條件"},
             {en:"A Japanese-founded brewery in the Paris suburbs, brewing with French rice and Paris water and explicitly aiming at the French table rather than at Japanese restaurants. The first significant attempt to design sake for a non-Japanese cuisine from the ground up.",
              ja:"パリ郊外の、日本人が興した蔵。フランスの米とパリの水で醸し、日本料理店ではなくフランスの食卓を明示して目指す。非日本の料理のために、一から酒を設計しようとする最初の本格的な試みである。",
              zh:"位於巴黎近郊、由日本人創辦的酒藏，使用法國的米與巴黎的水釀造，並明確以法國餐桌而非日本料理店為目標。這是第一次認真嘗試從零開始，為非日本料理設計清酒。"}],
            [{en:"New York",ja:"ニューヨーク",zh:"紐約"},{en:"2018, 2023",ja:"二〇一八年、二〇二三年",zh:"2018、2023 年"},
             {en:"Craft, then a major Japanese house",ja:"クラフト、そして日本の大手",zh:"精釀，接著是日本大廠"},
             {en:"A Brooklyn craft sake brewery opened in 2018 and later took investment from a Niigata house; then in September 2023 Asahi Shuzō opened Dassai Blue in Hyde Park, its first brewery outside Japan, a reported eighty-million-dollar project explicitly intended to make sake a local American drink rather than an import.",
              ja:"二〇一八年にブルックリンのクラフトの蔵が開き、のちに新潟の蔵から出資を受けた。そして二〇二三年九月、旭酒造がハイドパークに獺祭ブルーを開いた。日本の外で初の自社の蔵であり、報じられた八千万ドルの事業であって、酒を輸入品ではなく米国の地の飲み物にすることを明示して掲げている。",
              zh:"二〇一八年布魯克林開了一家精釀清酒藏，後來接受了新潟一家酒藏的投資；接著在二〇二三年九月，旭酒造於海德公園開設「獺祭 Blue」，這是它在日本以外的第一座酒藏，據報是八千萬美元的計畫，並明確以「讓清酒成為美國在地飲品而非進口品」為目標。"}]
          ] },

        { t:"panel", title:{ en:"What the third wave has to solve", ja:"第三の波が解くべき問題", zh:"第三波必須解決的問題" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Rice.</strong> Sake rice varieties are Japanese and are grown almost nowhere else at scale, so foreign brewers use table rice — Calrose in the United States, Camargue rice in France, Australian and Arkansas medium grains. Table rice has no shinpaku and more protein, which limits polishing and pushes the sake towards body rather than aroma. Several projects are now growing Yamada Nishiki locally, which is the slow, correct answer.",
                ja:"<strong>米。</strong>酒米の品種は日本のものであり、他所で大規模に栽培されることはほとんどない。ゆえに海外の造り手は食用米を使う——米国のカルローズ、フランスのカマルグ米、豪州やアーカンソーの中粒種。食用米には心白がなく、たんぱく質が多い。精米に限りがあり、酒は香りより厚みへ寄る。いくつかの試みは現地で山田錦を育て始めており、それが遅く、正しい答えである。",
                zh:"<strong>米。</strong>酒米品種是日本的，其他地方幾乎沒有規模化種植，因此海外釀造者使用食用米——美國的 Calrose、法國的卡馬格米、澳洲與阿肯色的中粒種。食用米沒有心白、蛋白質較多，這限制了精米深度，並讓酒偏向酒體而非香氣。已有數個計畫開始在當地種植山田錦——那是緩慢而正確的答案。" },
              { en:"<strong>Kōji spores.</strong> Almost all of the world's tane-kōji comes from a handful of Japanese spore houses, several of them centuries old. A brewery in Oregon or Bordeaux is therefore dependent on a supply chain running from a small workshop in Japan, which is a genuine structural fragility of the whole global category.",
                ja:"<strong>種麹。</strong>世界の種麹のほとんどすべては、日本の数軒のもやし屋から来る。そのいくつかは数百年の歴史を持つ。オレゴンやボルドーの蔵は、日本の小さな工房から伸びる供給の連なりに依存していることになり、これは世界的な区分全体の、真の構造的な脆さである。",
                zh:"<strong>麴的種源。</strong>全世界的種麴幾乎全部來自日本少數幾家「もやし屋」，其中數家已有數百年歷史。因此奧勒岡或波爾多的酒藏，都依賴著一條從日本小工坊延伸出來的供應鏈——這是整個全球性類別真正的結構性脆弱之處。" },
              { en:"<strong>Water.</strong> Unlike rice and spores, water cannot be imported. A brewer in a hard-water city is brewing a Nada-style sake whether they intend to or not, and the soft-water technique that Miura Senzaburō worked out for Hiroshima is directly applicable to a great many places outside Japan.",
                ja:"<strong>水。</strong>米や種麹と異なり、水は輸入できない。硬水の都市の造り手は、意図の有無にかかわらず灘の型の酒を醸している。そして三浦仙三郎が広島のために編み出した軟水醸造法は、日本の外の実に多くの土地にそのまま当てはまる。",
                zh:"<strong>水。</strong>與米和種麴不同，水無法進口。位於硬水城市的釀造者，無論有意與否都在釀灘式的酒；而三浦仙三郎為廣島琢磨出的軟水釀造法，可以直接套用到日本以外的許多地方。" },
              { en:"<strong>Legal identity.</strong> Sake made abroad is legally sake in most jurisdictions but may not be called <em>nihonshu</em>, protected since 2015 for sake made in Japan from Japanese rice. Whether that protection reads as reasonable origin labelling or as a barrier depends largely on which side of it you are brewing.",
                ja:"<strong>法的な身分。</strong>海外で醸された酒は多くの法域で法的に清酒であるが、日本酒とは名乗れない。この語は2015年以降、国産米を用い日本で造られたものに保護されている。この保護が妥当な原産地表示に読めるか、障壁に読めるかは、おおむね自分がその線のどちら側で醸しているかによる。",
                zh:"<strong>法律身分。</strong>在海外釀造的酒，在多數法域中法律上仍是清酒，但不能稱為「日本酒」——這個詞自二〇一五年起僅保護以日本產米、在日本釀造者。這項保護讀來是合理的原產地標示還是一道壁壘，很大程度取決於你在這條線的哪一邊釀酒。" }
            ] }
          ] },

        { t:"quote", text:{
          en:"An industry that spent two decades treating foreign brewing as a threat has discovered that it is the most effective advertisement the drink has ever had. Nobody explains sake to a sceptical customer better than someone brewing it down the road.",
          ja:"二十年にわたり海外での酒造りを脅威として扱ってきた産業は、それがこの飲み物の得た最も有効な広告であったことを見出した。懐疑的な客に酒を説くのに、通りの先でそれを醸している者ほど適した者はいない。",
          zh:"一個花了二十年把海外釀造視為威脅的產業，最終發現那是這種飲品有史以來最有效的廣告。要向持懷疑態度的顧客解釋清酒，沒有人比「就在街尾釀酒的那個人」更有說服力。" } }
      ] },

    { t:"related", items:[
      { href:"region-west.html", why:{ en:"The soft-water method every overseas brewery depends on.", ja:"国外のあらゆる蔵が依る軟水醸造法。", zh:"海外每一家酒藏所仰賴的軟水釀造法。" } },
      { href:"standards.html", why:{ en:"Whether a sake made abroad may be called sake.", ja:"国外で造られた酒を日本酒と呼びうるか。", zh:"在海外釀的酒，能不能叫做日本酒。" } },
      { href:"future.html", why:{ en:"What happens if the category stops being Japanese.", ja:"この区分が日本のものでなくなったとき。", zh:"如果這個類別不再是日本的，會怎麼樣。" } },
      { href:"taiwan.html", why:{ en:"One country's version of the same story.", ja:"同じ物語の、ある一国の版。", zh:"同一個故事的其中一國版本。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- taiwan */
SAKE.pages["taiwan"] = {
  kicker: { en: "Wider world · 06", ja: "周辺 · 06", zh: "周邊 · 06" },
  title:  { en: "Sake in Taiwan", ja: "台湾と日本酒", zh: "台灣與日本酒" },
  jp: "台湾の清酒",
  lede: {
    en: "Taiwan is the only place outside Japan with a century of its own sake history, a state monopoly that inherited the Japanese one and outlived it by half a century, a domestic sake made from a Taiwanese aromatic rice, and a drinking public large enough to sit among Japan's most important export markets. It is also subtropical, which makes almost every practical question — how to store it, what to drink it with, when to drink it warm — different from the Japanese answer. This page is about Taiwan specifically: what is made here, what arrives here, how to buy and keep it in this climate, and what it does with this food.",
    ja: "台湾は、日本の外で唯一、自らの一世紀の酒の歴史を持ち、日本の専売を受け継いでそれを半世紀長く生き延びさせた国家専売を持ち、台湾の香り米から造る自国の清酒を持ち、そして日本の最も重要な輸出先の一角を占めるだけの飲み手を持つ場所である。同時にここは亜熱帯であり、そのために実際上のほとんどすべての問い——どう保存するか、何と飲むか、いつ燗にするか——の答えが、日本のそれとは異なる。このページは台湾そのものについてである。ここで何が造られ、何が届き、この気候でどう買い、どう保ち、この食と何をなすのか。",
    zh: "台灣是日本以外唯一同時具備下列條件的地方：擁有自己長達一個世紀的清酒歷史、擁有一個承接自日本並比它多存續了半世紀的國家專賣、擁有以台灣香米釀成的本土清酒，以及一群足以讓它躋身日本最重要出口市場之列的飲者。同時，這裡是亞熱帶——這使得幾乎所有實務問題（怎麼存放、配什麼喝、什麼時候溫著喝）的答案都與日本不同。本頁專談台灣：這裡釀什麼、進什麼、在這種氣候下如何選購與保存，以及它與這裡的食物能做出什麼。"
  },
  body: [

    { t:"section", id:"monopoly",
      title:{ en:"The monopoly, and the day it ended", ja:"専売と、それが終わった日", zh:"專賣，以及它結束的那一天" }, jp:"公賣局",
      body:[
        { t:"p", text:{
          en:"Taiwan's alcohol industry spent eighty years as an arm of the state. The colonial government established a monopoly bureau in the early 1920s that took over private brewing and distilling; after 1945 the incoming Republic of China administration did not dismantle it but inherited it, as the Taiwan Tobacco and Wine Monopoly Bureau. For most of the twentieth century, therefore, almost nobody in Taiwan could legally make alcohol.",
          ja:"台湾の酒類産業は八十年にわたり国家の一部門であった。植民地政府は一九二〇年代初頭に専売の官署を設け、民間の醸造と蒸留を取り上げた。一九四五年ののち、新たに来た中華民国の行政はこれを解体せず、台湾省菸酒公売局として受け継いだ。ゆえに二十世紀の大半を通じて、台湾でほとんど誰も合法に酒を造ることができなかった。",
          zh:"台灣的酒業有八十年是國家的一個部門。殖民政府在一九二〇年代初設立專賣官署，接管民間的釀造與蒸餾；一九四五年之後，接手的中華民國政府並未拆解它，而是以台灣省菸酒公賣局的形式繼承下來。因此在二十世紀的大部分時間裡，台灣幾乎沒有人能合法製酒。" } },

        { t:"figure",
          caption:{
            en:"One band, and the whole reason this page is short on history and long on the present. For eighty years it was not legal for a private person in Taiwan to make alcohol — the colonial monopoly bureau of 1922 was inherited rather than dismantled in 1945, and it ended only because accession to the World Trade Organization required it. The bracket underneath is the gap between the last privately made sake on the island and the next one: eighty-five years, which is why Taiwan's sake industry has no old houses, no guilds and no inherited house styles, and is instead composed almost entirely of people who started from nothing after 2002.",
            ja:"一本の帯と、この頁が歴史に短く現在に長い理由のすべて。八十年のあいだ、台湾において民間の者が酒を造ることは合法ではなかった。一九二二年の植民地の専売局は、一九四五年に解体されるのではなく継承され、そして終わったのは、世界貿易機関への加盟がそれを要求したからにすぎない。下の括弧は、島で最後に民間の手で造られた酒と、次のそれとの隔たりである——八十五年。台湾の日本酒の産業に古い家も、杜氏の集団も、受け継がれた酒質の型も存在せず、そのほとんどすべてが二〇〇二年以後に無から始めた人々で成り立っている理由が、そこにある。",
            zh:"一條色帶，以及本頁「歷史短、當代長」的全部原因。有八十年的時間，台灣的民間人士製酒並不合法——一九二二年殖民政府的專賣局在一九四五年不是被拆解，而是被繼承下來；它之所以結束，只是因為加入世界貿易組織要求如此。下方的括弧是島上最後一支民間釀造的清酒與下一支之間的間隔：八十五年。這正是為什麼台灣的清酒產業沒有老鋪、沒有杜氏集團、也沒有繼承而來的酒質風格，而幾乎完全由二〇〇二年之後從零開始的人們所組成。" },
          svg: function (lang, L) {
            var W = 760, H = 292, X0 = 60, X1 = 720, A = 1900, B = 2030, BY = 88, BH = 42;
            function px(y) { return X0 + (y - A) / (B - A) * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<rect x="' + X0 + '" y="' + BY + '" width="' + (px(1922) - X0).toFixed(1) + '" height="' + BH + '" fill="#F2EFE8" stroke="#DED8CB"/>';
            s += '<rect x="' + px(1922).toFixed(1) + '" y="' + BY + '" width="' + (px(2002) - px(1922)).toFixed(1) + '" height="' + BH + '" fill="#C0AF8E" stroke="#B4AC9C"/>';
            s += '<rect x="' + px(2002).toFixed(1) + '" y="' + BY + '" width="' + (X1 - px(2002)).toFixed(1) + '" height="' + BH + '" fill="#F2EFE8" stroke="#DED8CB"/>';
            s += '<text x="' + ((px(1922) + px(2002)) / 2).toFixed(1) + '" y="' + (BY + 20) + '" text-anchor="middle" font-size="13" fill="#FBFAF7">' +
                 (lang === "ja" ? "専売——民間の酒造は違法" : lang === "zh" ? "專賣——民間製酒違法" : "the monopoly — private brewing is illegal") + '</text>';
            s += '<text x="' + ((px(1922) + px(2002)) / 2).toFixed(1) + '" y="' + (BY + 35) + '" text-anchor="middle" font-size="10" fill="#EDE5D2">1922 – 2002</text>';
            s += '<text x="' + ((X0 + px(1922)) / 2).toFixed(1) + '" y="' + (BY + 26) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "民間" : lang === "zh" ? "民間" : "private") + '</text>';
            s += '<text x="' + ((px(2002) + X1) / 2).toFixed(1) + '" y="' + (BY + 26) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "再び民間" : lang === "zh" ? "重新開放民間" : "private again") + '</text>';
            /* the four moments */
            var marks = [
              { y:1922, up:true, t:{ en:"the bureau takes over", ja:"専売局が引き取る", zh:"專賣局接管" } },
              { y:1945, up:false, t:{ en:"inherited, not abolished", ja:"廃されず、継がれる", zh:"未廢除，而是被繼承" } },
              { y:2002, up:true, t:{ en:"WTO — the monopoly ends", ja:"WTO加盟・専売の終わり", zh:"加入 WTO・專賣終結" }, an:"end" },
              { y:2007, up:false, t:{ en:"the first private sake", ja:"最初の民間の清酒", zh:"第一支民間清酒" } }
            ];
            var i;
            for (i = 0; i < marks.length; i++) {
              var m = marks[i], x = px(m.y);
              s += '<line x1="' + x.toFixed(1) + '" y1="' + (m.up ? BY - 22 : BY + BH) + '" x2="' + x.toFixed(1) + '" y2="' + (m.up ? BY : BY + BH + 22) + '" stroke="#8B857C"/>';
              s += '<text x="' + (m.an === "end" ? x - 6 : x + 6).toFixed(1) + '" y="' + (m.up ? BY - 26 : BY + BH + 26) + '" text-anchor="' + (m.an === "end" ? "end" : "start") +
                   '" font-size="11" fill="#201E1B">' + m.y + '</text>';
              s += '<text x="' + (m.an === "end" ? x - 6 : x + 6).toFixed(1) + '" y="' + (m.up ? BY - 14 : BY + BH + 38) + '" text-anchor="' + (m.an === "end" ? "end" : "start") +
                   '" font-size="9.5" fill="#8B857C">' + L(m.t) + '</text>';
            }
            /* the gap */
            var GY = 196;
            s += '<line x1="' + px(1922).toFixed(1) + '" y1="' + GY + '" x2="' + px(2007).toFixed(1) + '" y2="' + GY + '" stroke="#7C6B52"/>';
            s += '<line x1="' + px(1922).toFixed(1) + '" y1="' + (GY - 6) + '" x2="' + px(1922).toFixed(1) + '" y2="' + (GY + 6) + '" stroke="#7C6B52"/>';
            s += '<line x1="' + px(2007).toFixed(1) + '" y1="' + (GY - 6) + '" x2="' + px(2007).toFixed(1) + '" y2="' + (GY + 6) + '" stroke="#7C6B52"/>';
            s += '<text x="' + ((px(1922) + px(2007)) / 2).toFixed(1) + '" y="' + (GY + 20) + '" text-anchor="middle" font-size="11.5" fill="#7C6B52">' +
                 (lang === "ja" ? "民間の酒から、次の民間の酒まで——八十五年" : lang === "zh" ? "從上一支民間清酒到下一支——八十五年" : "from the last private sake to the next — eighty-five years") + '</text>';
            /* axis */
            var t;
            for (t = 1900; t <= 2020; t += 20) {
              s += '<line x1="' + px(t).toFixed(1) + '" y1="' + (GY + 36) + '" x2="' + px(t).toFixed(1) + '" y2="' + (GY + 41) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + px(t).toFixed(1) + '" y="' + (GY + 54) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + t + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + (GY + 36) + '" x2="' + X1 + '" y2="' + (GY + 36) + '" stroke="#B4AC9C"/>';
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "官営の工場では専売の間も清酒が造られていた。途切れたのは造ることではなく、民間が造ることである。"
                  : lang === "zh" ? "專賣期間，公營工廠仍在生產清酒。中斷的不是「釀造」，而是「民間釀造」。"
                  : "The state plants went on making sake throughout. What stopped was not brewing, but private brewing.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"timeline", items:[
          { year:"1922", era:{ en:"Colonial", ja:"植民地期", zh:"殖民時期" }, eraJp:"専売の開始",
            title:{ en:"The monopoly bureau takes over", ja:"専売局が引き取る", zh:"專賣局接管" }, jp:"專賣局",
            text:{ en:"Private breweries — including Japanese-run sake breweries that had been operating in Taipei, Taichung and elsewhere — were bought out or closed and their production absorbed into state plants. The rationale was revenue, and it worked: alcohol became one of the colonial administration's largest income sources.",
              ja:"台北や台中などで営まれていた日本人の酒造を含む民間の蔵は、買い上げられるか閉じられ、その生産は官営の工場へ吸収された。理由は税収であり、それは奏功した——酒は植民地行政の最大級の収入源となった。",
              zh:"包括在台北、台中等地營運的日資清酒廠在內的民間酒藏，或被收購或被關閉，生產併入公營工廠。理由是稅收，而它奏效了：酒成為殖民政府最大宗的收入來源之一。" } },
          { year:"1945–", era:{ en:"Postwar", ja:"戦後", zh:"戰後" }, eraJp:"継承",
            title:{ en:"Inherited, not abolished", ja:"廃されず、継がれる", zh:"未被廢除，而是被繼承" }, jp:"公賣局",
            text:{ en:"The structure passed intact to the new administration. Sake production continued in the state plants for a domestic market that still drank it, alongside rice wine, kaoliang and later beer — the same buildings, often the same equipment, under a different flag.",
              ja:"仕組みはそのまま新たな行政へ移った。清酒の製造は、なお飲む国内市場のために官営工場で続き、米酒、高粱酒、のちにビールと並んだ。同じ建物、しばしば同じ設備、旗だけが変わった。",
              zh:"這套結構原封不動地移轉給新政府。清酒的生產在公營工廠中延續，供應仍在飲用它的國內市場，與米酒、高粱酒以及後來的啤酒並列——同樣的廠房、常常是同樣的設備，只是換了一面旗。" } },
          { year:"2002", era:{ en:"WTO", ja:"WTO加盟", zh:"加入 WTO" }, eraJp:"開放",
            title:{ en:"Liberalisation", ja:"自由化", zh:"自由化" }, jp:"開放",
            text:{ en:"Taiwan's accession to the World Trade Organization required the monopoly to end. The bureau was reorganised as a state-owned company competing on the open market, private licences became available for the first time in eighty years, and imported sake entered a market that had never had one. The transition was not painless — the tax reclassification of rice wine, a household cooking staple, produced a genuine price shock — but it is the reason everything else on this page exists.",
              ja:"世界貿易機関への加盟は専売の終了を要求した。公売局は開かれた市場で競う国営会社へ改組され、八十年ぶりに民間の免許が可能となり、輸入の日本酒が、それまで存在しなかった市場に入った。移行は痛みを伴わなかったわけではない——家庭の調理に欠かせぬ米酒の税の区分変更は、真の価格の衝撃を生んだ——が、このページの他のすべてが存在する理由は、そこにある。",
              zh:"台灣加入世界貿易組織要求終結專賣。公賣局改組為在開放市場中競爭的國營公司，民間執照在八十年來首次成為可能，而進口清酒進入了一個從未存在過的市場。這場轉型並非毫無痛楚——米酒（家庭烹調的必需品）的稅制重新分類造成了真實的價格衝擊——但本頁其餘的一切之所以存在，原因正在於此。" } },
          { year:"2005–07", era:{ en:"After", ja:"以後", zh:"其後" }, eraJp:"民間の再開",
            title:{ en:"Private sake returns", ja:"民間の清酒が戻る", zh:"民間清酒回歸" }, jp:"農會酒莊",
            text:{ en:"A farmers' association winery in Wufeng, Taichung, began planning sake production in 2005 and pressed its first sake at the end of 2007 — the first significant private sake made in Taiwan since the monopoly began. Others followed. Eighty-five years after the monopoly closed the private breweries, someone in Taiwan was legally brewing sake again.",
              ja:"台中・霧峰の農会の酒莊が二〇〇五年に清酒の製造を計画し始め、二〇〇七年の末に初めての酒を搾った。専売の始まり以来、台湾で造られた最初の本格的な民間の清酒である。他が続いた。専売が民間の蔵を閉じてから八十五年を経て、台湾で誰かが再び合法に酒を醸していた。",
              zh:"台中霧峰的農會酒莊自二〇〇五年開始籌劃清酒生產，並於二〇〇七年底搾出第一批酒——這是自專賣制度開始以來，台灣所釀的第一批具規模的民間清酒。其後陸續有人跟進。在專賣關閉民間酒藏八十五年之後，台灣終於又有人合法地在釀清酒了。" } }
        ] },

        { t:"note", text:{
          en:"For the colonial-period brewing itself — the companies, the rice, the continuity into the postwar years — see <a href=\"world.html\">Sake Beyond Japan</a>, which covers the history in more detail. This page picks up where that account ends.",
          ja:"植民地期の酒造りそのもの——会社、米、戦後への連続——については、より詳しく扱う<a href=\"world.html\">世界の酒造り</a>を参照。このページはその叙述の終わるところから始まる。",
          zh:"關於殖民時期的釀造本身——公司、稻米、延續到戰後的脈絡——請見有較詳細記述的<a href=\"world.html\">日本以外的釀造</a>。本頁從那段敘述結束之處接手。" } }
      ] },

    { t:"section", id:"huashan",
      title:{ en:"The brewery you have already walked through", ja:"すでに歩いたことのある蔵", zh:"你早已走過的那間酒廠" }, jp:"華山1914",
      body:[
        { t:"p", text:{
          en:"Anyone who has spent a weekend in Taipei has been inside a sake brewery without being told so. The red-brick complex now called Huashan 1914 was built as one, and its history is the whole colonial alcohol story in a single city block.",
          ja:"台北で週末を過ごしたことのある者は誰でも、そうと告げられぬまま日本酒の蔵の中にいたことがある。今日、華山1914と呼ばれる赤煉瓦の一帯はそれとして建てられたのであり、その歴史は、一つの街区に収まった植民地の酒の物語の全体である。",
          zh:"任何在台北度過週末的人，都曾在沒被告知的情況下走進過一間清酒釀造廠。今日被稱作「華山1914」的紅磚建築群，當初正是為此而建，而它的歷史，就是整部殖民地酒業史濃縮在一個街廓之內。" } },
        { t:"timeline", items:[
          { year:"1914", era:"大正3", eraJp:"大正三年", title:{ en:"A private sake brewery opens in Taipei", ja:"台北に民間の酒蔵が開く", zh:"台北開設一家民營清酒廠" }, jp:"芳釀社",
            text:{ en:"Hōjōsha — 芳釀社 — began brewing on the site and put a sake called Butterfly Orchid on the market. It was a Japanese-style brewery in a subtropical city, thirty years before refrigeration made that a reasonable idea, and it is the earliest substantial sake production in Taiwan.",
              ja:"芳醸社がその地で醸し始め、蝴蝶蘭という名の清酒を世に出した。冷却の技がそれを筋の通った考えとする三十年前、亜熱帯の都市における日本式の蔵であり、台湾における最も早い相当な規模の清酒の生産である。",
              zh:"芳釀社在此地開始釀造，並推出名為「蝴蝶蘭」的清酒。這是一家位於亞熱帶城市的日式酒廠，比冷藏技術讓這件事變得合理早了三十年，也是台灣最早具規模的清酒生產。" } },
          { year:"1922", era:"大正11", eraJp:"大正十一年", title:{ en:"The monopoly", ja:"専売", zh:"專賣" }, jp:"專賣局",
            text:{ en:"The colonial government brought alcohol under a state monopoly. Private brewing licences were extinguished, production was consolidated into government plants, and the profit went to the colonial treasury. This is the decision that shaped every subsequent decade of Taiwanese drinking, and it outlived the government that made it by more than half a century.",
              ja:"植民地の政府は酒を国家の専売の下に置いた。民間の醸造の免許は消され、生産は官の工場へ集められ、利は植民地の国庫へ入った。台湾の飲酒のその後のあらゆる十年を形づくった決断であり、それを下した政府より半世紀以上も長く生き延びた。",
              zh:"殖民政府把酒類納入國家專賣。民間釀造執照被取消，生產集中到官營工廠，利潤流入殖民地國庫。這個決定形塑了台灣飲酒此後的每一個十年，而且比做出它的那個政府多活了超過半個世紀。" } },
          { year:"1929", era:"昭和4", eraJp:"昭和四年", title:{ en:"Bought out", ja:"買い上げられる", zh:"被收購" }, jp:"臺北酒工場",
            text:{ en:"The monopoly bureau purchased the Hōjōsha works outright and renamed it the Taipei Alcohol Factory. The same buildings kept making alcohol under three successive administrations, and continued to do so after 1945 under the Republic of China's own monopoly bureau.",
              ja:"専売局は芳醸社の工場をそのまま買い上げ、台北酒工場と改めた。同じ建物が三つの続く政の下で酒を造り続け、一九四五年ののちも中華民国の専売局のもとでそうし続けた。",
              zh:"專賣局將芳釀社的廠房整體收購，改名為臺北酒工場。同一批建築在三個接續的政權之下持續釀酒，並在一九四五年之後，繼續在中華民國的專賣局之下運作。" } },
          { year:"1987", era:"民國76", eraJp:"民国七十六年", title:{ en:"The plant leaves", ja:"工場が去る", zh:"工廠遷離" }, jp:"林口へ移転",
            text:{ en:"Production moved to Linkou and the site was left empty in the middle of a city that had grown around it. It stood vacant, was occupied by artists, was fought over, and from 1999 was formally turned into an arts district and then a creative park. The brick buildings, the chimney and the storage halls are the industrial architecture of alcohol, kept because nobody knocked them down in time.",
              ja:"生産は林口へ移り、その地は、それを取り囲んで育った都市の真中に空のまま残された。空き家であり、芸術家に占められ、争われ、一九九九年より正式に芸文の特区、ついで文創の園区となった。煉瓦の建物と、煙突と、貯蔵の棟は、酒の産業の建築であり、誰も間に合ううちに壊さなかったがゆえに残っている。",
              zh:"生產遷往林口，這片場地被留在一座早已環繞著它長大的城市正中央，成為空屋。它閒置、被藝術家占用、被爭奪，並自一九九九年起正式轉型為藝文特區，繼而成為文創園區。那些磚造建築、煙囪與貯藏棟，是酒業的工業建築，之所以留存，只因為沒有人來得及把它們拆掉。" } }
        ] },
        { t:"note", title:{ en:"And the other survivors", ja:"そして他の生き残り", zh:"以及其他倖存者" }, text:{
          en:"The same period left several other working plants that are still there: a Taipei brewery founded in 1919 that has been making beer on the same site ever since and is among the oldest continuously operating breweries anywhere in East Asia, and the government distilleries at Yilan and Puli, both founded in the 1900s and 1910s, both now running visitor centres alongside production. If you want to see the industrial history of alcohol in Taiwan, it is not in a museum; it is in four addresses that never stopped.",
          ja:"同じ時期は、今もそこにある稼働中の工場をいくつも残した。一九一九年に興り、以来同じ地で麦酒を造り続け、東亜のいずこにおいても最も長く続く醸造所の一つである台北の一つ。そして一九〇〇年代と一九一〇年代に興り、いずれも今は生産と並んで見学の場を営む宜蘭と埔里の官の蒸留所である。台湾における酒の産業の歴史を見たいのであれば、それは博物館にはない。止まらなかった四つの住所にある。",
          zh:"同一時期還留下了幾座至今仍在運作的廠：一座創立於一九一九年的台北酒廠，自此在同一地點持續釀造啤酒，是全東亞持續運作最久的釀造廠之一；以及宜蘭與埔里的官營酒廠，兩者分別創立於一九〇〇與一九一〇年代，如今都在生產之外同時經營參觀設施。若你想看台灣酒業的工業史，它不在博物館裡；它在四個從未停止過的地址上。" } }
      ] },

    { t:"section", id:"made-here",
      title:{ en:"Sake made in Taiwan", ja:"台湾で造られる清酒", zh:"台灣釀造的清酒" }, jp:"国産の酒",
      body:[
        { t:"p", text:{
          en:"Taiwanese sake is a small but genuine category, and it is interesting precisely because it cannot copy Japan. Every one of the four inputs behaves differently here, and the producers have had to make choices a Japanese brewery never faces.",
          ja:"台湾の清酒は小さいが本物の区分であり、日本を写しえないがゆえにこそ興味深い。四つの原料のいずれもがここでは異なる振る舞いをし、造り手は日本の蔵が直面することのない選択を迫られてきた。",
          zh:"台灣清酒是一個規模不大但貨真價實的類別；它之所以有意思，正因為它無法照抄日本。四項原料在這裡的表現全都不同，生產者必須做出日本酒藏從不需要面對的選擇。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"The rice", ja:"米", zh:"米" }, jp:"益全香米",
            v:{ en:"An aromatic table rice", ja:"香りのある食用米", zh:"帶香氣的食用米" },
            d:{ en:"Taiwan grows no sake rice, so the Wufeng brewery uses <em>Yiquan</em> aromatic rice — Taiwan Rice No. 71 — a fragrant eating rice contract-grown for the purpose, with the area expanded from a few hectares to several dozen and organic certification obtained through a university partnership. Table rice has no shinpaku and more protein, which caps how deeply it can be polished and pushes the sake towards body and gentle aroma rather than the high-ester ginjō profile. Using an aromatic variety is a deliberate answer to that constraint rather than a compromise with it.",
              ja:"台湾に酒米はない。ゆえに霧峰の蔵は益全香米——台農71号——を用いる。目的のために契約栽培された香り高い食用米であり、作付は数ヘクタールから数十ヘクタールへ広げられ、大学との連携で有機の認証も得た。食用米には心白がなく、たんぱく質が多い。精米の深さに限りがあり、酒は高エステルの吟醸の型ではなく、厚みと穏やかな香りへ寄る。香り米を選ぶことは、その制約への妥協ではなく、意図された答えである。",
              zh:"台灣不產酒米，因此霧峰的酒藏使用「益全香米」——台農 71 號——一種為此目的契作的芳香食用米；種植面積由數公頃擴大到數十公頃，並透過與大學合作取得有機認證。食用米沒有心白、蛋白質較多，這限制了精米的深度，也讓酒偏向酒體與溫和香氣，而非高酯類的吟釀型。選用香米，是對這項限制刻意給出的答案，而不是與之妥協。" } },
          { k:{ en:"The climate", ja:"気候", zh:"氣候" }, jp:"亜熱帯",
            v:{ en:"No cold season to brew in", ja:"醸すべき寒の季がない", zh:"沒有可供釀造的寒季" },
            d:{ en:"Taiwan has no winter in the brewing sense. Everything that Japanese brewing got for free from a cold building has to be supplied by refrigeration, which means a Taiwanese brewery is structurally a four-season brewery whether it wants to be or not. The upside is that the constraint is now purely a capital cost rather than a geographical impossibility — the same shift that let Shizuoka and Kōchi succeed in Japan.",
              ja:"台湾に、酒造りの意味での冬はない。日本の酒造りが寒い建物から無償で得ていたすべてを、冷却設備が供給せねばならない。すなわち台湾の蔵は、望むと望まざるとにかかわらず、構造的に四季醸造の蔵である。裏を返せば、その制約は今や地理的な不可能ではなく、純粋に設備投資の問題である——静岡や高知が日本で成功しえたのと同じ転換である。",
              zh:"就釀酒的意義而言，台灣沒有冬天。日本釀造從寒冷建築中免費取得的一切，在這裡都必須由冷卻設備提供；也就是說，台灣的酒藏無論願不願意，結構上都是四季釀造的酒藏。反過來說，這項限制如今純粹是資本支出問題，而非地理上的不可能——正是讓靜岡與高知在日本得以成功的同一次轉變。" } },
          { k:{ en:"The training", ja:"技術の来歴", zh:"技術的來歷" }, jp:"新潟へ",
            v:{ en:"Sent to Niigata to learn", ja:"新潟へ学びに", zh:"派往新潟學習" },
            d:{ en:"With no continuous domestic tradition to draw on — the monopoly had absorbed it — the brewers went to Japan for training, in the Wufeng case to Niigata for several months. This is the third-wave pattern seen everywhere outside Japan, and it explains why so much non-Japanese sake reads as a particular Japanese regional style rather than as a national average: it inherits the school its brewer trained in.",
              ja:"頼るべき国内の連続した伝統はない——専売がそれを吸収していた——ゆえに造り手は日本へ学びに行った。霧峰の場合は新潟へ、数か月である。これは日本の外のどこにも見られる第三の波の型であり、日本以外の酒の多くが、国全体の平均ではなく特定の日本の地方の型として読める理由である。造り手が学んだ学派を、そのまま受け継ぐのである。",
              zh:"由於沒有可資憑藉的、連續的本土傳統——那已被專賣吸收殆盡——釀造者只能赴日受訓；霧峰的情況是到新潟待了數月。這是日本以外各地都可見的第三波模式，也解釋了為何許多非日本清酒讀來像是某個特定的日本地方風格，而不是全國平均值：它繼承的是釀造者所受訓的那個學派。" } },
          { k:{ en:"The market", ja:"市場", zh:"市場" }, jp:"競争相手は輸入酒",
            v:{ en:"Competing against imports", ja:"輸入酒との競争", zh:"與進口酒競爭" },
            d:{ en:"A Taiwanese sake is not competing with other Taiwanese sake; it is on a shelf beside imported Japanese sake, at similar prices, in front of drinkers who mostly learned about sake from Japanese bottles. That is a hard position, and it is why the Taiwanese producers have leaned on the arguments they can actually win — local rice, local water, freshness, and the fact that you can visit.",
              ja:"台湾の清酒が競うのは他の台湾の清酒ではない。輸入された日本酒の隣に、近い価格で並び、その前には日本の瓶で日本酒を知った飲み手がいる。厳しい立場であり、台湾の作り手が実際に勝てる論——地の米、地の水、鮮度、そして訪ねられること——に寄りかかってきた理由である。",
              zh:"台灣清酒的競爭對手不是其他台灣清酒，而是與它並排在架上、價格相近的進口日本酒，而面前的飲者多半是透過日本酒瓶認識清酒的。這是艱難的位置，也解釋了為何台灣生產者選擇倚重那些他們真正能贏的論點——在地的米、在地的水、鮮度，以及「你可以親自去參觀」這件事。" } }
        ] }
      ] },

    { t:"section", id:"buying-here",
      title:{ en:"Buying and keeping sake in a subtropical climate", ja:"亜熱帯で買い、保つ", zh:"在亞熱帶氣候中選購與保存" }, jp:"この気候での実務",
      body:[
        { t:"p", text:{
          en:"Almost every piece of Japanese storage advice assumes a cool climate and a cold chain that mostly works. Neither holds automatically here, and the practical consequences are large enough to change what you should buy.",
          ja:"日本の保存についての助言のほとんどすべては、涼しい気候と、おおむね機能する低温流通を前提としている。ここではそのいずれも自動的には成り立たない。そして実際上の帰結は、何を買うべきかを変えるほどに大きい。",
          zh:"日本關於保存的建議，幾乎全都預設了涼爽的氣候與一條大致運作良好的冷鏈。在這裡兩者都不會自動成立，而其實務後果之大，足以改變你該買什麼。" } },

        { t:"ol", items:[
          { en:"<strong>Buy from somewhere refrigerated, and be strict about it.</strong> In a climate that sits above 25 °C for much of the year, a bottle standing on a warm shelf ages several times faster than the same bottle in Niigata. A shop that keeps its ginjō and all of its nama in a chiller is not being fussy; it is doing the one thing that matters most in this climate.",
            ja:"<strong>冷蔵している店で買い、そこは厳しく見ること。</strong>一年の多くを25℃以上で過ごす気候において、暖かい棚に立つ瓶は、新潟の同じ瓶より数倍の速さで老いる。吟醸と生酒のすべてを冷蔵する店は、細かいのではない。この気候で最も効く唯一のことを行っているのである。",
            zh:"<strong>只在有冷藏的地方買，而且要嚴格。</strong>在一年多數時間都高於 25 °C 的氣候裡，站在溫暖貨架上的酒瓶，老化速度是同一支酒在新潟的數倍。把吟釀與所有生酒都放冷藏櫃的店家不是龜毛，而是在做這個氣候下最要緊的那一件事。" },
          { en:"<strong>Treat the last mile as the weak link.</strong> The importer's warehouse and the shop may both be cold, and then the bottle spends forty minutes in a scooter box at street temperature. Carry it home in an insulated bag in summer, get it into the fridge on arrival, and do not leave a case in a car.",
            ja:"<strong>最後の一区間を弱い環と見なすこと。</strong>輸入業者の倉庫も店も冷えていて、そのあと瓶は路上の温度のバイクの箱で四十分を過ごす。夏は保冷の袋で持ち帰り、着いたらすぐ冷蔵し、車に箱を置き去りにしないこと。",
            zh:"<strong>把最後一哩視為最弱的一環。</strong>進口商的倉庫與店家可能都是冷的，然後這支酒在機車箱裡以街道溫度度過四十分鐘。夏天請用保冷袋帶回家，一到家就放冰箱，也別把一箱酒留在車上。" },
          { en:"<strong>Prefer smaller bottles.</strong> A 720 ml bottle finished over a week is a better proposition than a 1.8 L bottle finished over a month, because the second half of the large bottle spends that month oxidising in a warm kitchen. If you do buy the large size, decant it into two smaller bottles filled to the neck on the day you open it.",
            ja:"<strong>小さい瓶を選ぶこと。</strong>一週間で空ける四合瓶は、一か月かけて空ける一升瓶よりよい。後者の後半は、その一か月を暖かい台所で酸化しながら過ごすからである。大きな瓶を買うなら、開けた日に首まで満たした小瓶二本へ移すこと。",
            zh:"<strong>優先選小瓶。</strong>一週喝完的四合瓶，比一個月喝完的一升瓶更划算，因為大瓶的後半段會在溫暖的廚房裡氧化整整一個月。若真要買大瓶，就在開瓶當天分裝到兩支裝到瓶頸的小瓶裡。" },
          { en:"<strong>Read the manufacturing date harder than you would in Japan.</strong> The same eighteen-month-old bottle is a much worse bet here than in a Japanese shop, because those eighteen months were warmer. Recency matters more in a hot climate, and it matters most of all for aromatic ginjō and anything unpasteurised.",
            ja:"<strong>製造年月を、日本にいるとき以上に厳しく読むこと。</strong>同じ十八か月前の瓶は、日本の店にあるそれより、ここではずっと分の悪い賭である。その十八か月がより暖かかったからである。暑い気候では新しさがより重く効き、香り高い吟醸と火入れをしていない酒において最も重く効く。",
            zh:"<strong>比在日本時更嚴格地看製造年月。</strong>同樣是十八個月前的酒，在這裡是比在日本店裡差得多的賭注，因為那十八個月更熱。炎熱氣候下，新鮮度更為關鍵；而對芳香型吟釀與任何未火入的酒而言，尤其如此。" },
          { en:"<strong>Do not write off warm sake because it is hot outside.</strong> Air conditioning has made this a false constraint. A warm kimoto with a braised dish in a cool room is one of the great pairings, and it is available here twelve months a year for the price of turning the air conditioning on.",
            ja:"<strong>外が暑いという理由で燗を捨てないこと。</strong>冷房がこれを見せかけの制約に変えた。涼しい部屋で、煮込みに燗の生酛は最良の組み合わせの一つであり、冷房を入れる代価で、ここでは一年十二か月それが得られる。",
            zh:"<strong>不要因為外面熱就否定溫酒。</strong>空調已經讓這個限制成為假的。在涼爽的房間裡，一杯溫熱的生酛配一道燉菜是最出色的組合之一；只要付出開冷氣的代價，這在這裡一年十二個月都做得到。" }
        ] }
      ] },

    { t:"section", id:"tax",
      title:{ en:"What a bottle costs in Taiwan, and why", ja:"台湾での一本の値と、その理由", zh:"一瓶酒在台灣的價格，以及為什麼" }, jp:"税と価格",
      body:[
        { t:"p", text:{
          en:"A bottle that costs ¥3,000 in Kyoto does not cost the equivalent in Taipei, and the gap is not the importer being greedy. Three separate charges stack before anyone takes a margin, and knowing the arithmetic makes it much easier to tell a fair price from a bad one.",
          ja:"京都で三千円の一本は、台北でそれに相当する額にはならない。その隔たりは輸入者の欲によるものではない。誰かが利を取るより前に、三つの別々の課が積み上がる。その算術を知ることは、公正な値と拙い値とを見分けることをはるかに容易にする。",
          zh:"在京都要價三千日圓的一瓶酒，到台北不會是等值的價格，而這個落差不是進口商貪心。在任何人抽取利潤之前，有三筆各自獨立的費用先疊上去；懂得這套算術，會讓你更容易分辨什麼是合理價、什麼不是。" } },
        { t:"table",
          caption:{ en:"The stack on an imported bottle, in order", ja:"輸入された一本に積まれるもの、順に", zh:"一瓶進口酒上疊加的費用，依序" },
          cols:[{ en:"Charge", ja:"課", zh:"項目" }, { en:"Rate", ja:"率", zh:"稅率" }, { en:"On a 720 mL bottle at 15%", ja:"七百二十ミリリットル・十五度の一本に対し", zh:"以 720 毫升、15 度的一瓶計" }],
          keyCol:0,
          rows:[
            [{ en:"Customs duty", ja:"関税", zh:"關稅" }, { en:"20% of the declared value; it was 40% before liberalisation", ja:"申告価額の二十パーセント。自由化以前は四十パーセントであった", zh:"申報價格的 20%；自由化之前為 40%" },
             { en:"Proportional — on a NT$1,000 bottle, NT$200", ja:"比例する。千元の一本ならば二百元", zh:"按比例計——一瓶新台幣一千元者，為兩百元" }],
            [{ en:"Tobacco and alcohol tax", ja:"菸酒税", zh:"菸酒稅" }, { en:"Sake is taxed as 'other fermented alcohol': NT$7 per litre per degree of alcohol", ja:"清酒は「その他の醸造酒類」として課される。一リットルにつき、アルコール一度あたり七元である", zh:"清酒依「其他釀造酒類」課徵：每公升、每一度酒精新台幣 7 元" },
             { en:"7 × 0.72 × 15 = NT$75.60, regardless of what the bottle cost", ja:"七 × 〇・七二 × 十五 = 七十五・六元。瓶の値がいくらであれ同じである", zh:"7 × 0.72 × 15 ＝ 新台幣 75.6 元，與這瓶酒本身多少錢無關" }],
            [{ en:"Business tax", ja:"営業税", zh:"營業稅" }, { en:"5%, calculated on value plus duty plus alcohol tax", ja:"五パーセント。価額に関税と酒税を加えたものに対して計算される", zh:"5%，以貨價加關稅加菸酒稅為稅基計算" },
             { en:"About NT$64 on the example above", ja:"上の例でおよそ六十四元", zh:"以上例而言約新台幣 64 元" }],
            [{ en:"Cold chain", ja:"冷蔵の輸送", zh:"冷鏈" }, { en:"Not a tax, and often the largest single line", ja:"税ではない。そしてしばしば最も大きな一項である", zh:"這不是稅，卻往往是金額最大的單一項目" },
             { en:"A refrigerated container costs several times a dry one. Any nama that reached Taiwan drinkable came in one, and that cost is in the price whether or not the shop mentions it.", ja:"冷蔵の貨物は乾いた貨物の数倍の費えがかかる。飲みうる状態で台湾に届いた生酒はみなそれで来ており、その費えは、店が触れるか否かにかかわらず値の中にある。", zh:"冷藏貨櫃的成本是一般貨櫃的數倍。任何以可飲狀態抵達台灣的生酒都是這樣運來的，而這筆成本就在價格裡，無論店家有沒有提。" }]
          ] },
        { t:"note", title:{ en:"What the arithmetic tells you", ja:"算術が告げること", zh:"這套算術告訴你的事" }, text:{
          en:"The alcohol tax is a flat charge per litre of alcohol, not a percentage. That means it falls hardest, proportionally, on cheap sake: it adds the same NT$75 to a NT$400 bottle as to a NT$4,000 one. The practical consequence is that inexpensive imported sake is poor value in Taiwan and good sake is closer to fair than people assume — and that the sensible move is to buy fewer, better bottles rather than to look for a bargain in a category where the tax structure has already removed the bargains.",
          ja:"酒税はアルコール一リットルあたりの定額の課であり、百分率ではない。すなわち割合としては安い酒に最も重くかかる。四百元の一本にも四千元の一本にも同じ七十五元を加えるのである。実際の帰結として、安い輸入の清酒は台湾において値打ちに乏しく、良い酒は人が思うより公正に近い。そして賢い動きは、税の構えがすでに掘り出し物を取り除いた区分で掘り出し物を探すことではなく、より少なく、より良い瓶を買うことである。",
          zh:"菸酒稅是按每公升酒精課徵的定額，而非百分比。也就是說，按比例來看它對便宜的酒打擊最重：它對一瓶四百元與一瓶四千元的酒，加上的都是同樣的七十五元。實際的結果是：在台灣，便宜的進口清酒性價比很差，而好酒其實比一般人以為的更接近合理價——而明智的做法，是買更少、更好的酒，而不是在一個稅制早已把便宜貨消滅掉的類別裡尋找便宜貨。" } }
      ] },

    { t:"section", id:"words",
      title:{ en:"The words, in Chinese", ja:"中国語における語", zh:"中文裡的那些詞" }, jp:"用語の注意",
      body:[
        { t:"p", text:{
          en:"Sake vocabulary in Chinese carries a few traps, most of them created by characters that mean one thing in Japanese and another here.",
          ja:"中国語における日本酒の語彙にはいくつかの罠がある。その多くは、日本語とこことで意味の異なる漢字から生じている。",
          zh:"中文裡的清酒詞彙有幾個陷阱，多半來自那些「在日文是一個意思、在這裡是另一個意思」的漢字。" } },

        { t:"table",
          cols:[{en:"Word",ja:"語",zh:"詞"},{en:"In Japan",ja:"日本では",zh:"在日本"},{en:"The trap",ja:"罠",zh:"陷阱"}],
          jpCols:[0],
          rows:[
            ["清酒",
             {en:"The legal category for all sake",ja:"すべての日本酒を含む法的な区分",zh:"涵蓋所有日本酒的法定類別"},
             {en:"In Chinese-speaking markets <em>qīngjiǔ</em> is often used loosely for any clear rice wine including non-Japanese products, and sometimes for the cheap cooking grade specifically. On a Japanese label it is the legal term and means exactly what this site describes.",
              ja:"華語圏では「清酒」が、日本以外の製品を含むあらゆる澄んだ米の酒に広く用いられ、時に安価な料理用の等級を指すこともある。日本のラベルにおいては法令上の語であり、本サイトの記す通りの意味である。",
              zh:"在華語市場，「清酒」常被寬鬆地用來指任何澄清的米酒，包括非日本產品，有時甚至專指廉價的料理等級。但在日本酒標上，它是法律用語，意思正是本站所描述的那樣。"}],
            ["米酒",
             {en:"Not a sake term at all",ja:"日本酒の語ではない",zh:"根本不是清酒的用語"},
             {en:"In Taiwan <em>mǐjiǔ</em> is the distilled or fortified rice spirit used in cooking, a completely different product from sake and much stronger. Asking for <em>mǐjiǔ</em> in a shop will not get you sake.",
              ja:"台湾において米酒は、料理に用いる蒸留または強化された米の酒であり、日本酒とはまったく別の、はるかに強い製品である。店で米酒を求めても日本酒は出てこない。",
              zh:"在台灣，「米酒」是烹調用的蒸餾或強化米酒，與清酒是完全不同的產品，酒精度也高得多。在店裡要「米酒」，不會拿到清酒。"}],
            ["吟釀 / 大吟釀",
             {en:"A legally defined polishing grade",ja:"法に定められた精米の等級",zh:"法定的精米等級"},
             {en:"Widely used in Chinese as a quality adjective, including on products it does not legally apply to. On a Japanese bottle it means 60% or 50% polishing and a slow cold ferment; elsewhere it may mean nothing at all.",
              ja:"中国語では品質の形容として広く用いられ、法的には当てはまらない製品にも付される。日本の瓶においては精米歩合60%または50%と低温長期発酵を意味する。それ以外の場所では、何も意味しないことがある。",
              zh:"在中文裡被廣泛當作品質形容詞使用，甚至用在法律上不適用的產品上。在日本酒瓶上它意味著 60% 或 50% 的精米步合與低溫長期發酵；在別處，它可能什麼都不代表。"}],
            ["純米",
             {en:"Rice, water, kōji, yeast only",ja:"米・水・麹・酵母のみ",zh:"只有米、水、麴、酵母"},
             {en:"Transparent and safe — this one means the same thing everywhere, because the characters say exactly what the rule is. It is the single most reliable word on a bottle for a Chinese reader.",
              ja:"明快で安全である。漢字が規則そのものを述べているため、どこでも同じ意味になる。中国語の読み手にとって、瓶の上で最も信頼できる一語である。",
              zh:"透明而安全——這個詞在哪裡都是同一個意思，因為字面本身就說出了規則。對中文讀者而言，這是酒瓶上最可靠的一個詞。"}],
            ["生酒 / 生貯藏",
             {en:"Unpasteurised, or pasteurised once",ja:"火入れなし、あるいは一度だけ",zh:"未火入，或只火入一次"},
             {en:"The character 生 is doing real work here and is easy to skim past. In this climate it is the single most important thing to notice on a label, because it determines whether the bottle needed a cold chain that may not have existed.",
              ja:"ここでの「生」の字は実際に働いており、読み飛ばしやすい。この気候において、ラベル上で気づくべき最も重要な一点である。存在しなかったかもしれない低温流通を、その瓶が要していたかどうかを決めるからである。",
              zh:"這裡的「生」字是實際起作用的，卻很容易被一眼掠過。在這種氣候下，它是酒標上最該注意的一點，因為它決定了這支酒是否需要一條「可能根本不存在」的冷鏈。"}]
          ] }
      ] },

    { t:"section", id:"taiwanese-table",
      title:{ en:"At a Taiwanese table", ja:"台湾の食卓で", zh:"在台灣的餐桌上" }, jp:"台湾料理と",
      body:[
        { t:"p", text:{
          en:"Taiwanese cooking is unusually well suited to sake, and the reason is structural: it is built on soy, rice wine, sesame oil, garlic, and marine umami, which is very nearly the same flavour vocabulary sake was made for. The pairings below start from that.",
          ja:"台湾の料理は日本酒と異例なほどよく合う。理由は構造的である——醤油、料理酒、胡麻油、大蒜、そして海の旨味の上に建てられており、それは日本酒が向き合うために造られた語彙とほとんど同じである。以下の組み合わせは、そこから始まる。",
          zh:"台灣料理與清酒異常合拍，原因是結構性的：它建立在醬油、料理酒、麻油、蒜與海鮮旨味之上，而這幾乎就是清酒被釀造出來所要面對的同一套風味語彙。以下的搭配即由此出發。" } },

        { t:"table",
          cols:[{en:"Dish",ja:"料理",zh:"菜餚"},{en:"What to pour",ja:"何を注ぐか",zh:"倒什麼酒"},{en:"Why",ja:"理由",zh:"為什麼"}],
          rows:[
            [{en:"Braised pork over rice",ja:"魯肉飯",zh:"滷肉飯"},
             {en:"A warm junmai, or a yamahai at 45 °C",ja:"燗の純米、あるいは45℃の山廃",zh:"溫熱的純米，或 45 °C 的山廢"},
             {en:"Fat, soy and sweetness need acid and warmth, not aroma. This is the pairing that converts people who thought they did not like warm sake.",
              ja:"脂と醤油と甘味が求めるのは香りではなく、酸と温度である。燗が好きでないと思っていた人を変える組み合わせである。",
              zh:"油脂、醬油與甜味需要的是酸與溫度，不是香氣。這是那種能讓「自認不愛溫酒」的人改觀的搭配。"}],
            [{en:"Oyster omelette",ja:"蚵仔煎",zh:"蚵仔煎"},
             {en:"A crisp junmai, well chilled",ja:"締まった純米をよく冷やして",zh:"緊實的純米，充分冰鎮"},
             {en:"Starch, egg and shellfish, with a sweet sauce over it. You want acidity and cold to cut, and no aroma competing with the oysters.",
              ja:"澱粉、卵、貝に甘いソースがかかる。切るための酸と冷たさが要り、牡蠣と競う香りは要らない。",
              zh:"澱粉、蛋與貝類，上面淋著甜醬。你要的是能切開的酸與低溫，不要有香氣去和蚵仔搶戲。"}],
            [{en:"Three-cup chicken",ja:"三杯鶏",zh:"三杯雞"},
             {en:"A robust junmai at room temperature",ja:"骨のある純米を常温で",zh:"結實的純米，常溫"},
             {en:"Sesame oil, soy, rice wine and basil is a big flavour. A delicate ginjō disappears; a full junmai meets it on the same ground, since the dish already contains a rice wine.",
              ja:"胡麻油、醤油、米酒、九層塔は大きな味である。繊細な吟醸は消える。厚みのある純米なら同じ土俵で向き合える。料理そのものが米の酒を含んでいるのだから。",
              zh:"麻油、醬油、米酒與九層塔是很大的味道。纖細的吟釀會消失；飽滿的純米則能在同一個層面上與它相對——畢竟這道菜本身就含有米酒。"}],
            [{en:"Clam and ginger soup",ja:"蛤蜊湯",zh:"蛤蜊湯"},
             {en:"A cool junmai ginjō",ja:"涼冷えの純米吟醸",zh:"微涼的純米吟釀"},
             {en:"Clean, saline, gingery. This is the closest a Taiwanese dish comes to a dashi preparation, and it is the pairing sake was designed for.",
              ja:"清く、塩気があり、生姜が効く。台湾の料理のうち出汁の仕立てに最も近く、日本酒が向き合うために設計された組み合わせである。",
              zh:"乾淨、帶鹹鮮、有薑味。這是台灣料理中最接近日式高湯做法的一道，也正是清酒被設計來面對的搭配。"}],
            [{en:"Beef noodle soup",ja:"牛肉麺",zh:"牛肉麵"},
             {en:"A warm honjōzō",ja:"燗の本醸造",zh:"溫熱的本釀造"},
             {en:"A long-braised, spiced, soy-heavy broth. Warmth matches warmth, and honjōzō's lightness stops the pairing becoming heavy on heavy.",
              ja:"長く煮込んだ、香辛料と醤油の効いた汁である。温かさは温かさに合い、本醸造の軽さが、重さの上に重さを重ねることを防ぐ。",
              zh:"長時間燉煮、帶香料且醬油味重的湯頭。溫配溫；而本釀造的輕盈，避免了重上加重。"}],
            [{en:"Stinky tofu, fermented greens",ja:"臭豆腐・発酵した青菜",zh:"臭豆腐、發酵青菜"},
             {en:"An aged koshu, or a strong yamahai",ja:"熟成した古酒か、力のある山廃",zh:"熟成古酒，或強勁的山廢"},
             {en:"Fermentation meets fermentation. Delicate sake is annihilated; something with its own developed, savoury, slightly funky character meets it as an equal.",
              ja:"発酵が発酵に出会う。繊細な酒は消し飛ぶ。それ自身の熟れた、旨味のある、いくらか癖のある性格を持つ酒であれば、対等に向き合える。",
              zh:"發酵遇上發酵。纖細的酒會被消滅殆盡；而本身帶有熟成、旨味與些許怪香個性的酒，才能與它平起平坐。"}],
            [{en:"Pineapple cake, mochi, red bean",ja:"パイナップルケーキ・餅・小豆",zh:"鳳梨酥、麻糬、紅豆"},
             {en:"Kijōshu, or a sweet nigori",ja:"貴醸酒か甘いにごり",zh:"貴釀酒，或偏甜的濁酒"},
             {en:"A dry sake against something sweeter than itself reads as sour. Match the sweetness or go without.",
              ja:"それより甘いものに辛口の酒を合わせれば、酸っぱく感じられる。甘さを合わせるか、合わせないかである。",
              zh:"辛口酒配比它更甜的東西，會讀來發酸。要嘛把甜度配上去，要嘛就別配。"}]
          ] },

        { t:"note", text:{
          en:"For the general principles behind these, see <a href=\"pairing.html\">Food Pairing</a>; for the temperatures, <a href=\"serving.html\">Temperature &amp; Vessels</a>; for the history this page begins from, <a href=\"world.html\">Sake Beyond Japan</a>.",
          ja:"背後の一般的な原理は<a href=\"pairing.html\">料理との相性</a>、温度は<a href=\"serving.html\">温度と器</a>、このページが始まる前の歴史は<a href=\"world.html\">世界の酒造り</a>を参照。",
          zh:"背後的一般原則見<a href=\"pairing.html\">餐酒搭配</a>；溫度見<a href=\"serving.html\">溫度與酒器</a>；本頁所承接的那段歷史見<a href=\"world.html\">日本以外的釀造</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"world.html", why:{ en:"The same movement in the other producing countries.", ja:"他の生産国における、同じ動き。", zh:"同樣的動向，在其他生產國。" } },
      { href:"history.html", why:{ en:"The colonial period the local industry begins in.", ja:"地の産業が始まる、植民の時代。", zh:"在地產業起步的那個殖民時期。" } },
      { href:"mirin.html", why:{ en:"Taiwan's cooking alcohol, and its tax story.", ja:"台湾の料理の酒と、その税の物語。", zh:"台灣的料理用酒，以及它的稅務故事。" } },
      { href:"kanpai.html", why:{ en:"Drinking customs, compared across the three places.", ja:"三つの地を比べた、飲みの習い。", zh:"三地飲酒習慣的比較。" } }
    ] }
  ]
};


/* ---- ---------------------------------------- competitions */
SAKE.pages["competitions"] = {
  kicker: { en: "Wider world · 07", ja: "周辺 · 07", zh: "周邊 · 07" },
  title:  { en: "Competitions & Awards", ja: "鑑評会と品評会", zh: "鑑評會與競賽" },
  jp: "全国新酒鑑評会からIWCまで",
  lede: {
    en: "Sake is judged more, and more formally, than almost any other drink. The national appraisal has run since 1911 as a government technical exercise rather than a consumer prize, and its influence on how sake tastes is difficult to overstate. Around it has grown a second layer of commercial competitions, some Japanese and some foreign, judged on entirely different criteria. Reading a gold medal correctly means knowing which of these it came from, and what that particular jury was actually looking for.",
    ja: "日本酒は、ほとんどどの飲み物よりも多く、そして正式に審査される。全国新酒鑑評会は一九一一年以来、消費者向けの賞ではなく政府による技術的な取り組みとして続いており、その酒質への影響は誇張しがたいほど大きい。その周囲に、日本のものも外国のものも含め、まったく異なる基準で審査される商業的な品評会の層が育ってきた。金賞を正しく読むとは、それがどこの賞であり、その審査員が実際に何を探していたのかを知ることである。",
    zh: "清酒被評審的次數與正式程度，幾乎超過任何其他飲品。全國新酒鑑評會自 1911 年以來即以政府的技術性事業、而非消費者獎項的形式運作，其對酒質的影響再怎麼強調也不為過。圍繞著它，又長出第二層商業性競賽，有日本的也有外國的，評審標準完全不同。正確解讀一面金牌，意味著知道它出自何處，以及那組評審實際上在尋找什麼。"
  },
  body: [

    { t:"section", id:"national",
      title:{ en:"The Annual Japan Sake Awards", ja:"全国新酒鑑評会", zh:"全國新酒鑑評會" }, jp:"全国新酒鑑評会",
      body:[
        { t:"p", text:{
          en:"Held every year since 1911 by what is now the National Research Institute of Brewing, together with the Japan Sake and Shōchū Makers Association, this is not a marketing exercise. It began as a way for a young tax bureaucracy to raise technical standards across an industry it depended on for revenue, by showing brewers what good looked like and telling them how it was done.",
          ja:"一九一一年以来、現在の酒類総合研究所と日本酒造組合中央会によって毎年開かれてきたこの会は、宣伝のための催しではない。若い税務当局が、歳入を依存する産業の技術水準を底上げするために——良い酒とはどういうものかを示し、どう造るかを伝えるために——始めたものである。",
          zh:"自 1911 年起，由現今的酒類綜合研究所與日本酒造組合中央會每年舉辦，這並非行銷活動。它最初是年輕的稅務體系為了提升自身歲入所倚賴之產業的技術水準而設：向釀造者展示什麼叫好酒，並告訴他們該如何做到。" } },
        { t:"steps", items:[
          { title:{en:"One entry per brewery",ja:"一蔵一点",zh:"一藏一件"}, jp:"出品",
            text:{en:"Each participating brewery submits a single sake from the current brewing year, usually a daiginjō made specifically for the purpose. Around eight hundred entries is typical.",ja:"参加する蔵はその年度の酒を一点だけ出品する。多くはこのために特別に造られた大吟醸である。出品数はおよそ八百点前後が通例である。",zh:"每家參賽酒藏僅提交一件當年度的酒，多半是專為此目的釀造的大吟釀。出品數通常約八百件左右。"} },
          { title:{en:"Blind technical judging",ja:"ブラインドの技術審査",zh:"盲測技術評審"}, jp:"審査",
            text:{en:"Judged by brewing technologists from the national institute and the regional tax bureaux, on defined technical criteria — aroma quality and intensity, clarity, balance, and absence of faults — not on personal preference or food compatibility.",ja:"酒類総合研究所と各国税局の技術者が、定められた技術的な基準——香りの質と強さ、清澄さ、調和、欠点のなさ——に基づいて審査する。個人の好みや料理との相性ではない。",zh:"由酒類綜合研究所與各國稅局的釀造技術人員，依既定的技術標準評審——香氣的品質與強度、澄清度、平衡感、無缺陷——而非個人偏好或佐餐適性。"} },
          { title:{en:"Two tiers of result",ja:"二つの結果",zh:"兩級結果"}, jp:"入賞と金賞",
            text:{en:"Entries that pass the first round are <em>nyūshō</em> (prize-winning); the best of those receive the <em>kinshō</em> gold medal. Typically around a quarter of entries take gold, so it is a standard to be met rather than a fixed number of winners.",ja:"一次を通過したものが入賞、そのなかで優れたものが金賞となる。金賞は例年おおむね出品数の四分の一ほどであり、順位を競うというより、満たすべき水準である。",zh:"通過第一輪者為「入賞」，其中最佳者獲頒「金賞」。金賞通常約占出品數的四分之一，因此它是一個須達到的標準，而非固定名額的排名。"} },
          { title:{en:"A public tasting, then a poster",ja:"公開きき酒会、そして貼り紙",zh:"公開品評會，然後是海報"}, jp:"公開",
            text:{en:"Results are published and the entries shown at a public tasting. A gold medal goes on the brewery's wall, its website and often a sticker on unrelated bottles — which is the point at which a technical exercise turns into marketing.",ja:"結果は公表され、出品酒は公開きき酒会で供される。金賞は蔵の壁とウェブサイトに掲げられ、しばしば関係のない瓶にも貼られる。技術の催しが宣伝へと転じるのは、この一点である。",zh:"結果會公布，出品酒並於公開品評會上供飲。金賞會掛上酒藏的牆面與網站，也常被貼在毫不相干的酒瓶上——技術性活動就在這一點上轉為行銷。"} }
        ] },
        { t:"panel", title:{en:"YK-35, and the convergence problem",ja:"YK-35と収斂の問題",zh:"YK-35 與趨同問題"}, tint:"koji",
          body:[
            { t:"p", text:{
              en:"By the 1980s the winning formula had a nickname: <strong>YK-35</strong> — Yamada Nishiki rice, Kyōkai No. 9 yeast, milled to 35%. A brewery that followed it could reliably medal. Later the K moved to No. 1801, and the aroma went from elegant to emphatic, but the structure of the problem did not change: a single technical standard, judged on aroma intensity in a small sip without food, will select for sake that is spectacular in a sip and not necessarily good over a meal.",
              ja:"一九八〇年代までに、勝つための処方には愛称がついていた——<strong>YK-35</strong>。山田錦、きょうかい九号、精米歩合35%である。これに従えば確実に賞に届いた。のちにKは1801号へ移り、香りは端正から声高へ変わったが、問題の構造は変わっていない。単一の技術基準で、料理なしの小さな一口における香りの強さを審査すれば、一口では見事だが、一食を通じて良いとは限らない酒が選ばれる。",
              zh:"到了 1980 年代，這套致勝配方有了暱稱：<strong>YK-35</strong>——山田錦米、協會九號酵母、精米步合 35%。照著做便能穩定得獎。後來 K 換成 1801 號，香氣從優雅轉為高亢，但問題的結構未變：以單一技術標準、在無食物的一小口中評判香氣強度，必然選出「一口驚豔、未必宜於整餐」的酒。" } },
            { t:"p", text:{
              en:"Everyone in the industry knows this, and the criticism is made openly by brewers who enter every year and win. Several of the most admired houses now enter a sake they actually sell rather than a competition special, and a growing number decline to enter at all. Fukushima's decade of consecutive top gold-medal counts is genuinely impressive, and it is also a demonstration of how effectively a prefecture can train its brewers to hit one particular target.",
              ja:"業界の誰もがこれを承知しており、毎年出品して受賞する造り手自身が公然と批判している。最も評価の高い蔵のいくつかは、いまや出品用の特別な酒ではなく実際に売っている酒を出し、そもそも出品しない蔵も増えている。福島県が金賞数で十年連続の首位を続けたことは真に見事であるが、それは同時に、一つの的を射抜くよう県が造り手を訓練しうる効果の証明でもある。",
              zh:"業界人人皆知此事，而每年參賽並得獎的釀造者本身也公開提出批評。數家最受推崇的酒藏如今送出的是實際販售的酒，而非參賽特製品，也有愈來愈多酒藏乾脆不參加。福島連續十年金賞數居冠確實了不起，但這同時也證明了一個縣可以多有效地訓練釀造者去命中某一個特定標靶。" } }
          ] }
      ]
    },

    { t:"section", id:"others",
      title:{ en:"The other competitions", ja:"その他の品評会", zh:"其他競賽" }, jp:"多様な基準",
      body:[
        { t:"figure",
          caption:{
            en:"The same six events placed on the two axes that actually separate them: who is holding the glass, and whether the thing in it is for sale. Positions are qualitative — read off each competition's own published rules and judging panel, not off any score — and are meant only to show that a medal is an answer to a question, and that the six competitions are asking different questions.",
            ja:"同じ六つの催しを、それらを実際に分ける二つの軸の上に置いたもの——杯を持つのが誰であるか、そしてそのなかのものが売り物であるかどうか、である。位置は定性的であり、各会の公表する規程と審査員の構成から読み取ったものであって、点数によるものではない。示したいのはただ一つ、賞とはある問いへの答えであり、六つの会はそれぞれ違う問いを立てている、ということである。",
            zh:"把同樣這六項賽事，放在真正區分它們的兩條軸上：拿著杯子的是誰，以及杯裡那樣東西是否在賣。位置屬定性判斷——依各賽事自行公布的規章與評審組成讀出，而非依任何分數——其用意只在於指出：獎項是對某個提問的回答，而這六場競賽問的並不是同一個問題。" },
          svg: function (lang, L) {
            var W = 760, H = 376, X0 = 104, X1 = 612, Y0 = 48, Y1 = 316;
            function px(v) { return X0 + v * (X1 - X0); }
            function py(v) { return Y1 - v * (Y1 - Y0); }
            function tw(t, size) { var w = 0, i; for (i = 0; i < t.length; i++) w += (t.charCodeAt(i) > 0x2E80 ? 1.0 : 0.52); return w * size; }
            function lab(x, y, an, txt, size, fill) {
              var w = tw(txt, size), bx = (an === "end" ? x - w : an === "middle" ? x - w / 2 : x);
              return '<rect x="' + (bx - 3) + '" y="' + (y - size * 0.84) + '" width="' + (w + 6) + '" height="' + (size * 1.16) + '" fill="#F8F6F1"/>' +
                     '<text x="' + x + '" y="' + y + '" text-anchor="' + an + '" font-size="' + size + '" fill="' + fill + '">' + txt + '</text>';
            }
            var C = [
              { x:0.05, y:0.93, yr:"1911", dx:12, dy:4, an:"start",
                n:{ en:"Annual Japan Sake Awards", ja:"全国新酒鑑評会", zh:"全國新酒鑑評會" } },
              { x:0.11, y:0.79, yr:{ en:"various", ja:"各年", zh:"不一" }, dx:12, dy:4, an:"start",
                n:{ en:"Regional tax-bureau appraisals", ja:"各国税局の鑑評会", zh:"各國稅局鑑評會" } },
              { x:0.30, y:0.12, yr:"2012", dx:12, dy:4, an:"start",
                n:{ en:"SAKE COMPETITION", ja:"SAKE COMPETITION", zh:"SAKE COMPETITION" } },
              { x:0.42, y:0.38, yr:"2011", dx:-12, dy:4, an:"end",
                n:{ en:"Fine Sake Awards", ja:"ワイングラスでおいしい日本酒アワード", zh:"適合以葡萄酒杯品飲的日本酒大賞" } },
              { x:0.87, y:0.34, yr:"2007", dx:-12, dy:-8, an:"end",
                n:{ en:"IWC Sake", ja:"IWC SAKE部門", zh:"IWC 清酒組" } },
              { x:0.95, y:0.20, yr:"2017", dx:10, dy:12, an:"start",
                n:{ en:"Kura Master", ja:"Kura Master", zh:"Kura Master" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#F8F6F1"/>';
            var g;
            for (g = 0.25; g < 0.99; g += 0.25) {
              s += '<line x1="' + px(g) + '" y1="' + Y0 + '" x2="' + px(g) + '" y2="' + Y1 + '" stroke="' + (g === 0.5 ? "#DED8CB" : "#EEEBE3") + '"/>';
              s += '<line x1="' + X0 + '" y1="' + py(g) + '" x2="' + X1 + '" y2="' + py(g) + '" stroke="' + (g === 0.5 ? "#DED8CB" : "#EEEBE3") + '"/>';
            }
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="none" stroke="#B4AC9C"/>';
            var i;
            for (i = 0; i < C.length; i++) {
              var c = C[i];
              s += '<rect x="' + (px(c.x) - 4.5) + '" y="' + (py(c.y) - 4.5) + '" width="9" height="9" fill="#7C6B52"/>';
              s += lab(px(c.x) + c.dx, py(c.y) + c.dy, c.an, L(c.n), 11, "#201E1B");
              s += lab(px(c.x) + c.dx, py(c.y) + c.dy + 13, c.an, L(c.yr), 9, "#8B857C");
            }
            /* axis captions */
            s += '<text x="' + X0 + '" y="' + (Y1 + 22) + '" font-size="10" fill="#8B857C">← ' +
                 (lang === "ja" ? "国内の醸造技術者が審査" : lang === "zh" ? "由日本釀造技術人員評審" : "judged by Japanese brewing technologists") + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 22) + '" text-anchor="end" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "国際的なワインの舌が審査" : lang === "zh" ? "由國際葡萄酒味覺評審" : "judged by international wine palates") + ' →</text>';
            s += '<text transform="translate(72,' + (Y0 + 62) + ') rotate(-90)" text-anchor="middle" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "出品のために造られた酒 ↑" : lang === "zh" ? "為參賽而釀的酒 ↑" : "made for the competition ↑") + '</text>';
            s += '<text transform="translate(72,' + (Y1 - 62) + ') rotate(-90)" text-anchor="middle" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "↓ 実際に買える酒" : lang === "zh" ? "↓ 買得到的酒" : "↓ a sake you can buy") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "上の帯にある二つは、飲み手が買えぬ酒を審査している。それは欠点ではないが、金賞の貼られた瓶が中身の違うものである理由ではある。"
                  : lang === "zh" ? "上方帶狀區的兩者，評審的是飲者買不到的酒。這並非缺點，卻正是貼著金賞貼紙的酒瓶裡裝的往往是另一款酒的原因。"
                  : "The two along the top judge sake a drinker cannot buy. That is not a flaw in them, but it is why the bottle wearing the gold sticker is usually a different sake from the one that won.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          cols:[{en:"Competition",ja:"品評会",zh:"競賽"},{en:"Since",ja:"開始",zh:"始於"},{en:"Judged by",ja:"審査員",zh:"評審"},{en:"What it selects for",ja:"何を選ぶか",zh:"選出什麼"}],
          rows:[
            [{en:"Annual Japan Sake Awards",ja:"全国新酒鑑評会",zh:"全國新酒鑑評會"},"1911",
             {en:"Japanese brewing technologists",ja:"国内の醸造技術者",zh:"日本釀造技術人員"},
             {en:"Technical perfection in a young daiginjō. The reference standard, and the most gamed.",ja:"若い大吟醸における技術的完成度。基準であり、最も攻略されている賞でもある。",zh:"年輕大吟釀的技術完成度。是基準標準，也是最被鑽研攻略的獎項。"}],
            [{en:"IWC Sake",ja:"IWC SAKE部門",zh:"IWC 清酒組"},"2007",
             {en:"Masters of Wine and international judges",ja:"マスター・オブ・ワインと国際審査員",zh:"葡萄酒大師與國際評審"},
             {en:"Sake judged with wine reflexes — balance, length, food potential — by palates trained outside Japan. The Champion Sake trophy has made small breweries famous overnight.",ja:"ワインの感覚——均衡、余韻、料理との可能性——で、日本の外で訓練された舌が審査する。チャンピオン・サケの受賞は、小さな蔵を一夜にして有名にしてきた。",zh:"以葡萄酒的感官反射——平衡、餘韻、佐餐潛力——由日本以外訓練出的味覺進行評判。冠軍清酒（Champion Sake）獎項曾讓小酒藏一夜成名。"}],
            [{en:"Kura Master",ja:"Kura Master",zh:"Kura Master"},"2017",
             {en:"French sommeliers and chefs",ja:"フランスのソムリエと料理人",zh:"法國侍酒師與廚師"},
             {en:"Sake that works on a French table. Judged entirely by French professionals in Paris, and predictably favours structure and acidity over aroma intensity.",ja:"フランスの食卓で機能する酒。パリでフランスの専門家のみによって審査され、当然ながら香りの強さより骨格と酸を好む。",zh:"能在法國餐桌上發揮的酒。完全由法國專業人士在巴黎評審，也自然地偏好結構與酸度勝過香氣強度。"}],
            [{en:"SAKE COMPETITION",ja:"SAKE COMPETITION",zh:"SAKE COMPETITION"},"2012",
             {en:"Japanese brewers and specialists",ja:"国内の造り手と専門家",zh:"日本釀造者與專家"},
             {en:"Explicitly judges commercially available sake rather than competition specials, in categories including junmai, ginjō, sparkling and koshu. Closer to what a drinker can actually buy.",ja:"出品用の特別な酒ではなく、実際に市販されている酒を審査すると明言する。純米・吟醸・発泡・古酒などの部門を設ける。飲み手が実際に買えるものに近い。",zh:"明確以市售酒而非參賽特製品為評審對象，設有純米、吟釀、氣泡、古酒等部門。更貼近飲者實際買得到的東西。"}],
            [{en:"Fine Sake Awards",ja:"ワイングラスでおいしい日本酒アワード",zh:"適合以葡萄酒杯品飲的日本酒大賞"},"2011",
             {en:"Japanese panel, wine glasses",ja:"国内の審査員、ワイングラス使用",zh:"日本評審，使用葡萄酒杯"},
             {en:"Judged specifically from a wine glass at cool temperature, which selects for aromatic sake and against sake designed to be warmed.",ja:"ワイングラスを用い、冷やした状態で審査する。香りの高い酒が有利であり、燗を前提に造られた酒は不利になる。",zh:"特別以葡萄酒杯、於低溫下評審，因而有利於芳香型清酒，不利於為溫飲而設計的酒。"}],
            [{en:"Regional appraisals",ja:"各国税局の鑑評会",zh:"各國稅局鑑評會"},{en:"various",ja:"各種",zh:"不一"},
             {en:"Regional tax bureaux",ja:"各国税局",zh:"各國稅局"},
             {en:"Preliminary and parallel to the national event, and often more useful to a brewery because the feedback is detailed and local.",ja:"全国大会の前段であり、並行するものでもある。助言が具体的で地域に即しているため、蔵にとってはこちらが有益なことも多い。",zh:"是全國賽的前哨與平行賽事，且因回饋具體且貼近在地，對酒藏往往更有幫助。"}]
          ] },
        { t:"note", label:{en:"How to use a medal",ja:"賞の使い方",zh:"如何運用獎項"}, text:{
          en:"A medal tells you a jury liked one bottle of one sake in one year, judged against one set of criteria without food. That is genuinely informative and it is not the same as “this is a sake you will enjoy tonight”. The most useful reading: a national gold means technically flawless and probably very aromatic; an IWC or Kura Master medal means it survived being judged by people who spend their lives tasting wine; a SAKE COMPETITION medal means you can actually buy the thing that won.",
          ja:"賞が伝えるのは、ある年の、ある一本について、食事を伴わない一組の基準のもとで、審査員がそれを良しとしたということである。これは確かに有益な情報だが、「今夜あなたが楽しめる酒である」ということとは同じでない。最も実用的な読み方はこうだ。全国金賞は技術的に欠点がなく、おそらく非常に華やかであるという意味。IWCやKura Masterの賞は、ワインを利き続けてきた人々の審査に耐えたという意味。SAKE COMPETITIONの賞は、受賞したその品を実際に買えるという意味である。",
          zh:"獎項告訴你的是：某一年、某一瓶酒，在一套不佐餐的標準下獲得評審青睞。這確實提供了有用資訊，但與「這是你今晚會喜歡的酒」並不相同。最實用的讀法是：全國金賞代表技術上無瑕疵、且很可能非常芳香；IWC 或 Kura Master 的獎項代表它通過了畢生品飲葡萄酒者的評審；SAKE COMPETITION 的獎項則代表——得獎的那款你真的買得到。" } }
      ]
    },

    { t:"section", id:"qualifications",
      title:{ en:"Qualifications for drinkers and professionals", ja:"飲み手と職業人の資格", zh:"飲者與從業者的資格" }, jp:"資格制度",
      body:[
        { t:"defs", items:[
          { term:{en:"Sake Diploma",ja:"SAKE DIPLOMA",zh:"SAKE DIPLOMA"}, jp:"日本ソムリエ協会",
            def:{en:"Run by the Japan Sommelier Association since 2017, with an international edition in English. Structured like a wine qualification, examined in theory and blind tasting, and the most widely recognised credential among restaurant professionals outside Japan.",
              ja:"日本ソムリエ協会が二〇一七年から実施し、英語による国際版もある。ワインの資格に倣った構成で、筆記とブラインドの利き酒で試験される。日本国外の飲食業のあいだで最も広く認知された資格である。",
              zh:"由日本侍酒師協會自 2017 年舉辦，並設有英文版國際考試。架構仿照葡萄酒資格，以筆試與盲飲測驗，是日本境外餐飲從業者間認知度最高的證照。"} },
          { term:{en:"Kikizakeshi",ja:"唎酒師",zh:"唎酒師"}, jp:"唎酒師", romaji:"kikizakeshi",
            def:{en:"From the Sake Service Institute, aimed at service staff: how to store, serve, pair and describe sake to a customer. Large numbers hold it, including many outside Japan.",
              ja:"日本酒サービス研究会・酒匠研究会連合会による資格で、提供する側に向けたもの——保管、供し方、料理との合わせ方、そして客への伝え方である。海外を含め、多くの人が保持している。",
              zh:"由日本酒服務研究會（SSI）頒發，針對服務端從業者：如何保存、供飲、搭配，以及向客人描述清酒。持證者眾多，包括許多日本以外的人士。"} },
          { term:{en:"Sake Sommelier / WSET Sake",ja:"WSET SAKE",zh:"WSET 清酒課程"}, jp:"WSET",
            def:{en:"The Wine & Spirit Education Trust runs Level 1 and Level 3 sake awards in English, taught worldwide. Level 3 is a serious qualification with a demanding written and tasting exam.",
              ja:"WSETは英語による日本酒のレベル1およびレベル3の課程を世界各地で開講している。レベル3は筆記と利き酒の双方で高い水準を求める本格的な資格である。",
              zh:"WSET（葡萄酒與烈酒教育基金會）在全球開設英語授課的清酒 Level 1 與 Level 3 課程。Level 3 是一項認真的資格，筆試與品飲測驗皆具難度。"} },
          { term:{en:"Sake-zukuri ginōshi",ja:"酒造技能士",zh:"酒造技能士"}, jp:"国家技能検定",
            def:{en:"The national skills certification for people who actually make sake, examined by the Ministry of Health, Labour and Welfare's trade-skills system. Unlike everything above, it is a manufacturing qualification, not a tasting one.",
              ja:"実際に酒を造る者のための国家技能検定であり、厚生労働省の技能検定制度のもとで試験される。上に挙げたものと異なり、利き酒ではなく製造の資格である。",
              zh:"針對真正釀酒之人的國家技能檢定，由厚生勞動省的技能檢定制度舉辦。與上述各項不同，它是製造資格，而非品飲資格。"} }
        ] },
        { t:"p", text:{
          en:"None of these is required to enjoy sake, and a certificate is not a substitute for having drunk a lot of it attentively. Their real value is a shared vocabulary: two people with the same qualification can describe a sake to each other and expect to be understood, which is exactly what the category has lacked in export markets.",
          ja:"日本酒を楽しむのに、これらのいずれも必要ではない。証書は、多くの酒を注意深く飲んできたことの代わりにはならない。その本当の価値は共有された語彙にある。同じ資格をもつ二人は、互いに酒を語り、通じ合うと期待できる。輸出市場においてこの分野に欠けていたのは、まさにそれである。",
          zh:"享受清酒不需要上述任何一項，而證書也無法取代大量而專注地飲用所累積的經驗。它們真正的價值在於共通的語彙：擁有相同資格的兩個人，可以彼此描述一款酒並期待被理解——而這正是這個品類在出口市場中一直欠缺的東西。" } }
      ]
    },

{ t:"section", id:"judging",
      title:{ en:"How a panel actually scores", ja:"審査は実際にどう行われるか", zh:"評審實際如何評分" }, jp:"官能評価",
      body:[
        { t:"p", text:{
          en:"Sensory judging in Japan is a formal discipline with its own vocabulary, its own glassware and its own scoring conventions. Knowing how it works explains a good deal about why competition results look the way they do.",
          ja:"日本における官能評価は、独自の語彙と、独自の器と、独自の採点の慣習をもつ、形式の定まった技術である。その仕組みを知れば、鑑評会の結果がなぜあの姿になるかの多くが説明される。",
          zh:"日本的感官評鑑是一門形式嚴謹的技藝，擁有自己的語彙、自己的器皿與自己的計分慣例。了解它如何運作，便能大致解釋為何競賽結果會呈現那樣的面貌。" } },
        { t:"steps", items:[
          { title:{en:"The cup",ja:"きき猪口",zh:"品評豬口"}, jp:"蛇の目",
            text:{en:"A 180 ml white porcelain cup with two concentric blue rings painted in the base — the <em>janome</em>, snake's eye. The white ground shows colour truthfully and the blue rings show clarity: a hazy sake blurs the boundary between the rings, and a well-filtered one leaves it sharp. It is a measuring instrument disguised as a cup.",
              ja:"底に二重の青い輪を描いた180ミリリットルの白磁の猪口——蛇の目である。白い地は色を正しく見せ、青い輪は冴えを見せる。濁った酒は輪の境をぼかし、よく濾された酒は境を鋭く残す。器の姿をした計測器である。",
              zh:"一只 180 毫升的白瓷杯，杯底繪有兩圈同心藍環——即「蛇之目」。白色底面如實呈色，藍環則顯示清澈度：混濁的酒會使環的邊界模糊，過濾良好的酒則讓邊界銳利。這是一件偽裝成酒杯的量測儀器。"} },
          { title:{en:"The order",ja:"順序",zh:"順序"}, jp:"手順",
            text:{en:"Colour first, against the white and the rings. Then the upper aroma, taken from above the cup without swirling — sake is not swirled, because the aromatics are volatile and there is no tannin to open up. Then a small sip held and drawn across the tongue with air, then the aroma exhaled through the nose, and then the sake is spat.",
              ja:"まず色を、白い地と輪に対して見る。次に上立ち香を、回さずに猪口の上から取る——日本酒は回さない。香気は揮発しやすく、開かせるべきタンニンもないからである。それから少量を口に含み、空気とともに舌の上に広げ、鼻から抜く含み香を取り、そして吐き出す。",
              zh:"先看色澤，對照白底與藍環。接著自杯口上方取上立香——清酒不搖杯，因為其香氣揮發性高，也沒有需要藉搖杯打開的單寧。然後含入少量，連同空氣在舌面鋪展，再自鼻腔呼出含香，最後吐出。"} },
          { title:{en:"The scale",ja:"評点",zh:"評分"}, jp:"五段階",
            text:{en:"The traditional national scale runs 1 to 5, where <strong>1 is best</strong> and 5 is worst — the reverse of what most foreign tasters expect, and a reliable source of confusion. A half point is available, so 1.5 and 2.5 are common scores. Judges also record specific defects by name rather than only a number.",
              ja:"伝統的な全国の尺度は一から五であり、<strong>一が最良</strong>、五が最も悪い。海外の利き手の予想とは逆であり、混乱の確かな元である。〇・五刻みが認められるため、一・五や二・五はよくある点である。審査員は数値だけでなく、欠点を名で記録する。",
              zh:"傳統的全國評分尺度為 1 至 5，其中 <strong>1 為最佳</strong>、5 為最差——與多數外國品評者的預期相反，也是可靠的混淆來源。可打半分，因此 1.5 與 2.5 是常見分數。評審除了分數之外，也會以名稱記錄具體缺陷。"} },
          { title:{en:"What is being scored",ja:"何が評価されるか",zh:"評的是什麼"}, jp:"評価項目",
            text:{en:"Aroma quality and intensity, taste, and an overall judgement, with faults weighted heavily. Notably absent: food compatibility, value for money, and how the sake behaves warmed. A judge is assessing whether a sake is technically excellent in a small cold sip, which is a narrower question than whether it is a good sake.",
              ja:"香りの質と強さ、味、そして総合の判断であり、欠点は重く見られる。含まれていないものが目を引く——料理との相性、価格に対する価値、そして燗にしたときの振る舞いである。審査員が判じているのは、冷たい一口において技術的に優れているかどうかであり、それは良い酒であるかどうかより狭い問いである。",
              zh:"香氣的品質與強度、味道，以及綜合判斷，其中缺陷占很重的權重。值得注意的是缺席的項目：佐餐適性、性價比，以及溫飲時的表現。評審所判斷的，是它在一小口冰涼酒液中是否技術優異——那是比「這是不是一款好酒」窄得多的問題。"} }
        ] },
        { t:"panel", title:{en:"The vocabulary of a Japanese tasting sheet",ja:"審査表の語彙",zh:"評審表上的語彙"}, tint:"koji",
          body:[
            { t:"chips", items:[
              {text:"上立香"},{text:"含み香"},{text:"味のふくらみ"},{text:"きれ"},{text:"後味"},
              {text:"バランス"},{text:"雑味"},{text:"苦味"},{text:"渋味"},{text:"老香"},{text:"木香"},{text:"つわり香"}
            ] },
            { t:"tiny", text:{
              en:"Upper aroma · retronasal aroma · expansion of flavour · cut or clean finish · aftertaste · balance · coarseness · bitterness · astringency · staleness · woody off-note · buttery off-note. A Japanese sheet describes structure and defects; a Western wine sheet describes fruit and place. The difference is not accidental.",
              ja:"上立香・含み香・味のふくらみ・きれ・後味・バランス・雑味・苦味・渋味・老香・木香・つわり香。日本の審査表は骨格と欠点を述べ、西洋のワインの表は果実と土地を述べる。この違いは偶然ではない。",
              zh:"上立香・含香・味的擴張・收口俐落度・餘味・平衡・雜味・苦味・澀味・老化臭・木質異味・奶油異味。日本的評審表描述結構與缺陷，西方的葡萄酒評審表描述果實與產地。這個差異並非偶然。" } }
          ] }
      ]
    },

    { t:"section", id:"reading",
      title:{ en:"Reading the results honestly", ja:"結果を正直に読む", zh:"誠實地解讀結果" }, jp:"結果の読み方",
      body:[
        { t:"ul", items:[
          { en:"<strong>A gold medal is about one bottle.</strong> The entry was made specifically for the competition, often in a tank of a few hundred litres, and may never be sold. The brewery's commercial sake is a different product from the same building.",
            ja:"<strong>金賞は一本の酒についての評価である。</strong>出品酒は鑑評会のために特別に造られ、しばしば数百リットルの小さなタンクで仕込まれ、売られないことさえある。その蔵の市販酒は、同じ建物から出る別の製品である。",
            zh:"<strong>金賞評的是一瓶酒。</strong>參賽酒是專為競賽而釀，常出自僅數百公升的小槽，甚至可能從不販售。該酒藏的市售酒，是同一棟建築產出的另一種產品。" },
          { en:"<strong>Prefectural gold-medal counts measure training as much as terroir.</strong> A prefecture that runs a brewing academy, shares a house yeast and holds joint tasting sessions will out-medal a prefecture that does none of those, regardless of water or rice.",
            ja:"<strong>県別の金賞数は、風土と同じくらい教育を測っている。</strong>醸造の学校を持ち、県産酵母を共有し、合同のきき酒を行う県は、それらを何もしない県より多く受賞する。水や米にかかわらず、である。",
            zh:"<strong>各縣的金賞數所測量的，教育與風土各占一半。</strong>設有釀造學院、共享縣產酵母、舉辦聯合品評會的縣份，得獎數必定勝過什麼都不做的縣份——無論水與米如何。" },
          { en:"<strong>Not entering is a position, not a failure.</strong> Several highly regarded breweries have stopped entering on the grounds that the target distorts what they want to make. Their absence from the medal list says nothing about their sake.",
            ja:"<strong>出品しないことは、失敗ではなく立場である。</strong>評価の的が自らの造りたいものを歪めるという理由で出品をやめた、評価の高い蔵はいくつもある。受賞一覧に名がないことは、その酒について何も語らない。",
            zh:"<strong>不參賽是一種立場，不是失敗。</strong>有數家備受推崇的酒藏已停止參賽，理由是評選標的會扭曲他們想做的東西。它們不在得獎名單上，並不代表其酒有任何問題。" },
          { en:"<strong>An international medal and a Japanese one mean different things.</strong> A national gold means technically flawless in a cold sip; an IWC or Kura Master medal means it convinced palates trained on wine, in a context closer to a restaurant. Neither is more valid; they answer different questions.",
            ja:"<strong>海外の賞と日本の賞は別のことを意味する。</strong>全国金賞は、冷たい一口において技術的に欠点がないということ。IWCやKura Masterの賞は、ワインで育った舌を、飲食の場に近い文脈で納得させたということである。どちらがより正しいのでもなく、答えている問いが違う。",
            zh:"<strong>國際獎項與日本獎項意義不同。</strong>全國金賞代表在一小口冰涼酒液中技術上無瑕疵；IWC 或 Kura Master 的獎項則代表它說服了以葡萄酒訓練出的味覺，且情境更接近餐廳。兩者無所謂何者更正當；它們回答的是不同的問題。" },
          { en:"<strong>The most useful award to a drinker is the one whose criteria match their own.</strong> If you drink sake with food, at a range of temperatures, look at competitions judged that way. If you want the technical peak of what Japan can make in a given year, look at the national appraisal, and expect it to smell strongly of green apple.",
            ja:"<strong>飲み手にとって最も有用な賞は、その基準が自分の基準と一致する賞である。</strong>料理とともに、幅のある温度で飲むのなら、そのように審査された品評会を見るとよい。ある年に日本が造りうるものの技術的な頂点を知りたいのなら、全国新酒鑑評会を見て、青林檎の強い香りを予期しておくこと。",
            zh:"<strong>對飲者最有用的獎項，是那個標準與自己標準一致的獎項。</strong>若你佐餐飲酒、且會在不同溫度下飲用，就去看以那種方式評審的競賽。若你想知道某一年日本所能達到的技術頂點，就看全國新酒鑑評會，並預期會聞到濃烈的青蘋果香。" }
        ] }
      ]
    },

{ t:"section", id:"international",
      title:{ en:"The competitions outside Japan", ja:"日本の外の品評会", zh:"日本以外的評鑑" }, jp:"海外の賞",
      body:[
        { t:"p", text:{
          en:"Until the 2000s the National New Sake Appraisal was effectively the only competition that mattered, and it judged one thing — technical excellence in a competition-style daiginjō, assessed by Japanese technical experts. Everything since has been an attempt to judge something else: how sake performs with food, in a wine glass, warm, on a Western palate, or in a shop. The list below is the working set a drinker will actually meet on a neck tag.",
          ja:"二〇〇〇年代まで、実質的に意味を持つ品評会は全国新酒鑑評会のみであり、それが判定していたのは一つのこと——鑑評会型の大吟醸における技術的卓越を、日本の技術者が評価するというものであった。以降のすべては、別のものを判定しようとする試みである——料理と合わせたとき、ワイングラスで、燗で、西洋の舌で、あるいは店頭で、日本酒はどう振る舞うのか。以下は、飲み手が実際に首かけの札で出会う実働の一覧である。",
          zh:"直到二〇〇〇年代，全國新酒鑑評會實質上是唯一重要的評鑑，而它評的只有一件事：由日本技術專家評估、競賽型大吟釀的技術卓越度。此後的一切，都是試圖評判別的東西——清酒佐餐時、在葡萄酒杯裡、溫熱時、在西方味覺下，或在店頭陳列時的表現如何。以下是飲者實際會在瓶頸吊牌上遇到的實用清單。" } },

        { t:"table",
          cols:[{en:"Competition",ja:"名称",zh:"名稱"},{en:"Where / from",ja:"場所・開始",zh:"地點與起始"},{en:"Who judges",ja:"審査員",zh:"評審"},{en:"What a medal there actually means",ja:"その賞が実際に意味すること",zh:"該獎項實際的意義"}],
          rows:[
            [{en:"National New Sake Appraisal",ja:"全国新酒鑑評会",zh:"全國新酒鑑評會"},
             {en:"Japan, 1911",ja:"日本、1911年",zh:"日本，1911 年"},
             {en:"Brewing technologists",ja:"醸造の技術者",zh:"釀造技術人員"},
             {en:"A technically flawless new-season daiginjō, judged in a small cup by people trained to find faults. It says almost nothing about whether the brewery's ordinary bottles are good, and nothing at all about drinking with dinner.",
              ja:"欠点を見つけるよう訓練された者が利き猪口で判定した、技術的に瑕疵のない当季の大吟醸である。その蔵の普段の瓶がよいかどうかについてはほとんど何も語らず、食事とともに飲むことについては何も語らない。",
              zh:"由受過找缺點訓練的人以利き猪口評出的、技術上毫無瑕疵的當季大吟釀。它幾乎不能說明這家酒藏的日常酒款好不好，更完全不涉及佐餐飲用。"}],
            [{en:"IWC Sake",ja:"IWC SAKE部門",zh:"IWC 清酒部門"},
             {en:"London, sake added 2007",ja:"ロンドン、SAKE部門は2007年",zh:"倫敦，清酒部門始於 2007 年"},
             {en:"Masters of Wine, sommeliers, buyers",ja:"マスター・オブ・ワイン、ソムリエ、バイヤー",zh:"葡萄酒大師、侍酒師、採購"},
             {en:"Judged blind in classes — junmai, ginjō, daiginjō, koshu, sparkling and more — by a wine trade panel, with Gold winners re-tasted for a Trophy and one overall Champion Sake. The most commercially consequential award for export, because the judges are the people who buy.",
              ja:"純米、吟醸、大吟醸、古酒、発泡など部門ごとに、ワイン業界の審査団が目隠しで判定し、金賞酒は再度試飲されてトロフィー、さらに全体のチャンピオン・サケが選ばれる。輸出において商業的に最も影響の大きい賞である。審査員が買い手そのものだからである。",
              zh:"由葡萄酒業界的評審團依類別——純米、吟釀、大吟釀、古酒、氣泡等——盲飲評選，金賞酒再經複審決定 Trophy，並選出一款總冠軍 Champion Sake。這是對出口最具商業影響力的獎，因為評審本身就是買家。"}],
            [{en:"Kura Master",ja:"Kura Master",zh:"Kura Master"},
             {en:"Paris, 2017",ja:"パリ、2017年",zh:"巴黎，2017 年"},
             {en:"French and European food-service professionals",ja:"フランス・欧州の飲食のプロ",zh:"法國與歐洲的餐飲專業人士"},
             {en:"Explicitly a food-pairing judgement made by a French palate, tasted in wine glasses. A medal here predicts that a bottle will work on a European restaurant list, which is a different question from technical merit.",
              ja:"フランスの舌による、明示的に料理との相性についての判定であり、ワイングラスで試飲される。ここでの受賞は、その瓶が欧州の飲食店の品書きで機能することを予測する。技術的な出来とは別の問いである。",
              zh:"這是明確以法國味覺、以葡萄酒杯進行的「佐餐搭配」評判。在此獲獎預示這支酒能在歐洲餐廳的酒單上發揮作用——這與技術水準是不同的問題。"}],
            [{en:"U.S. National Sake Appraisal",ja:"全米日本酒歓評会",zh:"全美日本酒歡評會"},
             {en:"Honolulu, from 27 September 2001",ja:"ホノルル、2001年9月27日から",zh:"檀香山，自 2001 年 9 月 27 日起"},
             {en:"A mixed Japanese and American panel",ja:"日米混成の審査団",zh:"日美混合評審團"},
             {en:"Modelled on the Japanese appraisal but held in the largest export market, and blind to the point that the judges never see a bottle. It began with 126 entries from 42 breweries and now runs into the hundreds. Its public counterpart, Joy of Sake, pours every single entry — winners and non-winners alike — which makes it unusually honest as a tasting event.",
              ja:"日本の鑑評会に倣いながら、最大の輸出市場で開かれる。審査員が瓶を目にすることのないほど徹底した目隠しで行われる。42蔵126点で始まり、今では数百点に及ぶ。一般公開の対となる催しJoy of Sakeは、受賞・非受賞を問わず出品酒のすべてを注ぐ。試飲会として異例に正直である理由である。",
              zh:"仿照日本的鑑評會，但在最大的出口市場舉行，且盲測徹底到評審完全看不到酒瓶。它以 42 家酒藏、126 件出品起步，如今已達數百件。與之對應的公開活動 Joy of Sake，會把所有出品酒——不論得獎與否——全部倒出來，這使它作為品飲會異常誠實。"}],
            [{en:"SAKE COMPETITION",ja:"SAKE COMPETITION",zh:"SAKE COMPETITION"},
             {en:"Japan, 2012",ja:"日本、2012年",zh:"日本，2012 年"},
             {en:"Brewers and Japanese trade experts",ja:"造り手と日本の業界の専門家",zh:"釀造者與日本業界專家"},
             {en:"Judged blind over several rounds, in classes that include junmai, junmai ginjō, junmai daiginjō, a super-premium class defined by a retail price above ten thousand yen per 720 ml, and a class for traditional-method sake. Notably it judges commercially available bottles rather than competition specials, which makes its results directly actionable in a shop.",
              ja:"数次にわたり目隠しで審査され、部門には純米、純米吟醸、純米大吟醸、720mlあたり小売一万円超で定義される超プレミアム、そして伝統的製法の区分が含まれる。特筆すべきは、鑑評会用の特別な酒ではなく市販の瓶を審査することであり、その結果は店頭で直接使える。",
              zh:"分數輪盲測評審，類別包括純米、純米吟釀、純米大吟釀、以 720 ml 零售價逾一萬日圓定義的超高階類別，以及傳統製法類別。值得注意的是它評的是市售酒款而非競賽專用酒，因此結果能在店頭直接派上用場。"}],
            [{en:"Fine Sake Award",ja:"ワイングラスでおいしい日本酒アワード",zh:"以葡萄酒杯品飲的日本酒大獎"},
             {en:"Japan",ja:"日本",zh:"日本"},
             {en:"Japanese sake professionals",ja:"日本の日本酒の専門家",zh:"日本的清酒專業人士"},
             {en:"Judged specifically in a wine glass, which is a real variable: a wine glass concentrates aroma and rewards a different style from a small cup. Sake that wins here is aromatic sake meant to be smelled.",
              ja:"ワイングラスで審査することを明示する。これは実在の変数である——ワイングラスは香りを集め、猪口とは別の型に報いる。ここで勝つ酒は、嗅がれるための香りある酒である。",
              zh:"明確以葡萄酒杯評審，而這是一個真實的變因：葡萄酒杯會聚攏香氣，獎賞的是與小酒杯不同的風格。在此獲獎的，是為了被聞而存在的芳香型清酒。"}],
            [{en:"National Warmed Sake Contest",ja:"全国燗酒コンテスト",zh:"全國溫酒競賽"},
             {en:"Japan",ja:"日本",zh:"日本"},
             {en:"Warm-sake specialists",ja:"燗酒の専門家",zh:"溫酒的專家"},
             {en:"Judged at specified serving temperatures across several classes. This is the only major competition that tests the question most drinkers actually care about at home in winter, and its winners overlap surprisingly little with the aromatic-ginjō prize lists.",
              ja:"指定された燗の温度で、いくつかの区分に分けて審査される。多くの飲み手が冬の家で実際に気にかける問いを試す、唯一の主要な品評会であり、その受賞酒と香り高い吟醸の受賞一覧との重なりは驚くほど少ない。",
              zh:"在指定的供飲溫度下分數個類別評審。這是唯一測試「多數飲者冬天在家真正在意的問題」的重要評鑑，而其得獎名單與芳香吟釀類獎項的重疊少得驚人。"}],
            [{en:"Milano Sake Challenge and others",ja:"ミラノ・サケ・チャレンジ ほか",zh:"米蘭清酒挑戰賽等"},
             {en:"Milan from 2019; Monaco from 2021",ja:"ミラノ2019年、モナコ2021年",zh:"米蘭 2019 年、摩納哥 2021 年"},
             {en:"Local sommeliers and food professionals",ja:"現地のソムリエと飲食の専門家",zh:"當地侍酒師與餐飲專業人士"},
             {en:"A growing set of national competitions judged by local palates against local food. Individually small; collectively the clearest sign that sake is being assessed abroad on its own terms rather than as an exotic import.",
              ja:"現地の舌が現地の食に照らして判定する、各国の品評会が増えつつある。一つ一つは小さいが、束ねれば、日本酒が海外において異国の輸入品としてではなく、それ自身の条件で評価され始めていることの最も明白な徴である。",
              zh:"由當地味覺、對照當地飲食評判的各國評鑑正在增加。單看規模都不大，合起來卻是最明確的跡象：清酒在海外正以自身的條件被評價，而不再只是異國進口品。"}]
          ] }
      ] },

    { t:"section", id:"reading-medals",
      title:{ en:"Reading a medal on a bottle", ja:"瓶の受賞札を読む", zh:"讀懂瓶上的獎牌" }, jp:"賞の読み方",
      body:[
        { t:"p", text:{
          en:"A gold sticker is a marketing object as much as a judgement, and four questions turn it back into information.",
          ja:"金のシールは判定であると同じくらい販売の道具である。四つの問いが、それを情報へ戻す。",
          zh:"金色貼紙既是評判，也同樣是行銷物件；四個問題能把它還原成資訊。" } },

        { t:"ol", items:[
          { en:"<strong>Which competition, and which year?</strong> A 2019 medal on a 2026 bottle refers to a different liquid. Sake is made annually and the award belongs to the vintage that won it, not to the brand.",
            ja:"<strong>どの品評会の、どの年か。</strong>2026年の瓶に貼られた2019年の受賞は、別の液体を指している。日本酒は毎年造られ、賞はそれを得た年の酒に属するのであって、銘柄に属するのではない。",
            zh:"<strong>哪一場評鑑、哪一年？</strong>貼在 2026 年酒瓶上的 2019 年獎項，指的是另一批酒。清酒逐年釀造，獎項屬於得獎的那一年，而不屬於品牌。" },
          { en:"<strong>Was the winning sake this sake?</strong> The most common sleight of hand in the category. A brewery may win with a competition daiginjō and display the medal across its whole range. Read the small print for the specific product name.",
            ja:"<strong>受賞した酒は、この酒か。</strong>この分野で最もよく見る手品である。蔵は鑑評会用の大吟醸で受賞し、その札を品揃え全体に掲げうる。細かい字で具体的な商品名を確かめること。",
            zh:"<strong>得獎的酒就是這支酒嗎？</strong>這是此領域最常見的障眼法。酒藏可能以競賽用大吟釀得獎，卻把獎牌掛遍全線產品。請看小字裡具體的商品名稱。" },
          { en:"<strong>How many golds were given?</strong> Some competitions award gold to a few per cent of entries; others to a quarter. A gold from a competition that gives out hundreds is a statement that the sake is sound, not that it is exceptional — which is useful information, but different information.",
            ja:"<strong>金賞はいくつ出たのか。</strong>出品の数パーセントに金を与える品評会もあれば、四分の一に与える品評会もある。数百の金を出す品評会の金賞は、その酒が真っ当であるという表明であって、傑出しているという表明ではない。有用な情報ではあるが、別の情報である。",
            zh:"<strong>發出了多少面金牌？</strong>有些評鑑只把金獎給出品的百分之幾，有些則給四分之一。一場發出數百面金牌的評鑑，其金獎陳述的是「這支酒是紮實的」，而不是「它出類拔萃」——那仍是有用的資訊，只是不同的資訊。" },
          { en:"<strong>Does the competition test what you want?</strong> This is the one that matters. If you drink sake warm with food, a wine-glass aroma award is close to irrelevant to you and a warmed-sake medal is worth a great deal. Match the competition to your own use, not to its prestige.",
            ja:"<strong>その品評会は、あなたの求めるものを試しているか。</strong>これが肝心である。料理とともに燗で飲むのなら、ワイングラスの香りの賞はあなたにはほとんど関係がなく、燗酒の受賞は大きな価値を持つ。品評会は、その権威にではなく、自分の用途に合わせて選ぶこと。",
            zh:"<strong>這場評鑑測的是你要的東西嗎？</strong>這才是關鍵。如果你溫著酒配菜喝，那麼葡萄酒杯香氣獎對你幾乎沒有意義，而溫酒類的獎牌則價值極高。要依自己的用途挑選評鑑，而不是依它的名氣。" }
        ] },

        { t:"quote", text:{
          en:"Every competition answers a question. The skill is not in knowing which sake won, but in knowing which question was asked.",
          ja:"どの品評会も一つの問いに答えている。技は、どの酒が勝ったかを知ることにではなく、どの問いが立てられたかを知ることにある。",
          zh:"每一場評鑑都在回答一個問題。真正的本事不在於知道哪支酒得了獎，而在於知道當初問的是哪個問題。" } }
      ] },

    { t:"related", items:[
      { href:"tasting.html", why:{ en:"The same judgement, without the scoresheet.", ja:"採点表のない、同じ判断。", zh:"同樣的判斷，只是沒有評分表。" } },
      { href:"faults.html", why:{ en:"What a judge is looking for first.", ja:"審査員が最初に探すもの。", zh:"評審最先找的是什麼。" } },
      { href:"styles.html", why:{ en:"What a competition sake is, as a style.", ja:"出品酒とは、型として何であるか。", zh:"出品酒作為一種風格，是什麼。" } },
      { href:"industry.html", why:{ en:"What a gold medal is worth, commercially.", ja:"金賞が商いの上で持つ値打ち。", zh:"一面金賞在商業上值多少。" } }
    ] }
  ]
};

/* =============================================================
   THE BOOK OF SAKE — Foundations
   13 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------------- index */
SAKE.pages["index"] = {
  kicker: { en: "Foundations · 01", ja: "基礎 · 01", zh: "基礎 · 01" },
  title:  { en: "Sake", ja: "日本酒", zh: "日本酒" },
  jp: "にほんしゅ · seishu · 清酒",
  lede: {
    en: "Sake is a brewed alcoholic beverage made from rice, water, koji mould and yeast. It is not a spirit and not a wine: it is the product of a fermentation system found nowhere else in the world, in which starch is converted to sugar and sugar to alcohol simultaneously, inside one vessel, by two organisms working in parallel. This reference sets out what sake is, how it is made, how it is classified, where it comes from, and how to read, serve and taste it.",
    ja: "日本酒は、米・水・麹菌・酵母からつくられる醸造酒である。蒸留酒でもワインでもない。デンプンの糖化とアルコール発酵が一つの容器のなかで同時に進む「並行複発酵」という、世界に類例のない発酵形式の産物である。本資料は、日本酒とは何か、いかにして造られ、いかに分類され、どこから来て、どう読み・供し・味わうのかを体系的に示す。",
    zh: "日本酒是以米、水、麴菌與酵母釀成的釀造酒。它既不是蒸餾酒，也不是葡萄酒：它源自世界上獨一無二的發酵形式——澱粉糖化與酒精發酵在同一容器中由兩種微生物同時並行進行，稱為「並行複發酵」。本資料系統性地說明日本酒是什麼、如何釀造、如何分類、產自何處，以及如何判讀、供應與品飲。"
  },
  body: [
    { t:"figure",
      caption:{ en:"Multiple parallel fermentation. Aspergillus oryzae releases enzymes that cut rice starch into glucose; Saccharomyces cerevisiae converts that glucose to ethanol — both at once, in the same tank. Beer separates these steps (mashing, then fermenting); wine skips the first entirely because grapes already contain sugar.",
                ja:"並行複発酵。麹菌（Aspergillus oryzae）の酵素が米のデンプンをブドウ糖に分解し、酵母（Saccharomyces cerevisiae）がそのブドウ糖をエタノールに変える。両者が同一のタンク内で同時に進行する。ビールは両工程を分離し（糖化ののち発酵）、ワインはブドウが既に糖を含むため糖化工程そのものを持たない。",
                zh:"並行複發酵。麴菌（Aspergillus oryzae）分泌酵素將米澱粉切成葡萄糖，酵母（Saccharomyces cerevisiae）再將葡萄糖轉為乙醇——兩者在同一槽中同時進行。啤酒將此二步驟分開（先糖化後發酵），葡萄酒則因果實本身含糖而完全略過糖化。" },
      svg: function(lang, L){
        var w = { starch:{en:"RICE STARCH",ja:"米デンプン",zh:"米澱粉"},
                  glu:{en:"GLUCOSE",ja:"ブドウ糖",zh:"葡萄糖"},
                  eth:{en:"ETHANOL + CO₂",ja:"エタノール＋CO₂",zh:"乙醇＋CO₂"},
                  koji:{en:"koji enzymes",ja:"麹の酵素",zh:"麴菌酵素"},
                  yeast:{en:"yeast",ja:"酵母",zh:"酵母"},
                  tank:{en:"one tank · simultaneous · 18–35 days",ja:"同一のタンク・同時進行・18〜35日",zh:"同一發酵槽・同時進行・18–35 天"},
                  sacc:{en:"saccharification",ja:"糖化",zh:"糖化"},
                  ferm:{en:"alcoholic fermentation",ja:"アルコール発酵",zh:"酒精發酵"} };
        function t(k){ return L(w[k]); }
        return '<svg viewBox="0 0 760 250" role="img" aria-label="Multiple parallel fermentation diagram">'+
        '<rect x="0.5" y="0.5" width="759" height="249" fill="none" stroke="#DFDAD0"/>'+
        '<rect x="34" y="46" width="692" height="140" fill="#F0EDE4" stroke="#CDC6B9"/>'+
        '<text x="380" y="212" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C" letter-spacing="1.6">'+t("tank").toUpperCase()+'</text>'+
        '<rect x="66" y="88" width="140" height="56" fill="#FBFAF7" stroke="#B4AC9C"/>'+
        '<text x="136" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#201E1B" letter-spacing="1">'+t("starch")+'</text>'+
        '<rect x="310" y="88" width="140" height="56" fill="#EDE5D2" stroke="#B4AC9C"/>'+
        '<text x="380" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#201E1B" letter-spacing="1">'+t("glu")+'</text>'+
        '<rect x="554" y="88" width="140" height="56" fill="#E6E2EC" stroke="#B4AC9C"/>'+
        '<text x="624" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#201E1B" letter-spacing="1">'+t("eth")+'</text>'+
        '<path d="M206 116 H302" stroke="#7C6B52" stroke-width="1.2"/><path d="M302 116 l-8 -4 v8 z" fill="#7C6B52"/>'+
        '<path d="M450 116 H546" stroke="#7C6B52" stroke-width="1.2"/><path d="M546 116 l-8 -4 v8 z" fill="#7C6B52"/>'+
        '<text x="254" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("koji")+'</text>'+
        '<text x="254" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#8B857C" letter-spacing="1">'+t("sacc")+'</text>'+
        '<text x="498" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("yeast")+'</text>'+
        '<text x="498" y="137" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#8B857C" letter-spacing="1">'+t("ferm")+'</text>'+
        '<text x="34" y="30" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">'+
        (lang==="en"?"MULTIPLE PARALLEL FERMENTATION":(lang==="ja"?"並行複発酵":"並行複發酵"))+'</text>'+
        '</svg>';
      }
    },

    { t:"section", id:"definition",
      title:{ en:"The legal definition", ja:"法令上の定義", zh:"法規上的定義" }, jp:"清酒の定義",
      body:[
        { t:"p", text:{
          en:"In Japan, sake is a tax category before it is a drink. Article 3 of the Liquor Tax Act (酒税法, <em>Shuzeihō</em>) defines <strong>seishu</strong> (清酒) — the legal term whose everyday names are <em>nihonshu</em> and, in English, sake. To qualify, a product must satisfy three conditions.",
          ja:"日本において「日本酒」はまず税法上の区分である。酒税法第三条は<strong>清酒</strong>を定義しており、日常語の「日本酒」、英語の sake はこれを指す。清酒と認められるには、次の三条件を満たす必要がある。",
          zh:"在日本，日本酒首先是一個稅法上的分類。《酒稅法》第三條定義了<strong>清酒</strong>——日常稱作「日本酒」，英文稱 sake。要符合清酒，必須滿足三項條件。" } },
        { t:"ol", items:[
          { en:"It is made by fermenting <strong>rice, rice kōji and water</strong>, and it is <strong>filtered</strong> (漉す, <em>kosu</em>). The filtration requirement is what separates seishu from <em>doburoku</em>, the unfiltered farmhouse mash.",
            ja:"<strong>米・米麹・水</strong>を原料として発酵させ、<strong>漉す</strong>こと。この「漉す」という要件が、清酒と、濾さない濁醪（どぶろく）とを分ける。",
            zh:"以<strong>米、米麴與水</strong>發酵，並經<strong>過濾</strong>（漉す）。此過濾要件正是清酒與未過濾的濁醪（どぶろく）之分野。" },
          { en:"Permitted additions are limited to a defined list — brewer's distilled alcohol, <em>shōchū</em>, sugars, organic acids, amino-acid salts, <em>sake kasu</em> (lees) and a few others — and their combined weight may not exceed <strong>50% of the weight of the rice</strong> used.",
            ja:"添加が認められる副原料は、醸造アルコール・焼酎・糖類・有機酸・アミノ酸塩・清酒粕などに限定され、その合計重量は<strong>使用した米の重量の50%を超えてはならない</strong>。",
            zh:"可添加的副原料限於釀造酒精、燒酎、糖類、有機酸、胺基酸鹽、清酒粕等特定項目，且其合計重量不得超過<strong>所用米重量的 50%</strong>。" },
          { en:"Alcohol by volume must be <strong>under 22%</strong>. Above that threshold the product is taxed as a liqueur or spirit, not as seishu.",
            ja:"アルコール分は<strong>22度未満</strong>であること。これを超えると清酒ではなくリキュール等として課税される。",
            zh:"酒精濃度須<strong>低於 22%</strong>。超過此門檻者不列為清酒，而以利口酒或其他類別課稅。" } ] },
        { t:"note", label:{en:"Consequence",ja:"帰結",zh:"衍生"}, text:{
          en:"Because the definition names <em>rice kōji</em> specifically, a rice wine made with an amylase enzyme preparation instead of kōji is not seishu. And because the definition contains no geographic clause, sake brewed in Oregon or Kyoto is chemically the same category — which is why the 2015 <strong>“Nihonshu” geographical indication</strong> was created: it reserves the word <em>Nihonshu</em> for sake made in Japan from Japanese-grown rice.",
          ja:"定義が「米麹」を名指ししているため、麹の代わりに酵素剤を用いた米の酒は清酒に当たらない。また定義に産地条項がないため、オレゴンで造られた酒も京都の酒も同じ区分に属する。2015年に<strong>地理的表示「日本酒」</strong>が制定されたのはこのためで、国産米を用い日本国内で製造された清酒のみが「日本酒」を名乗れる。",
          zh:"由於定義明確指名「米麴」，以酵素製劑取代米麴釀成的米酒不屬清酒。又因定義中沒有產地條款，在奧勒岡與在京都釀的酒屬同一類別——這正是 2015 年設立<strong>地理標示「日本酒」</strong>的理由：唯有使用日本產米、於日本國內釀造者方可稱「日本酒」。" } }
      ]
    },

    { t:"section", id:"numbers",
      title:{ en:"Sake in figures", ja:"数字で見る日本酒", zh:"數字中的日本酒" }, jp:"概数",
      body:[
        { t:"grid", cols:4, cells:[
          { k:{en:"Alcohol, typical",ja:"アルコール分",zh:"酒精濃度"}, v:"15–16 %", d:{en:"Undiluted <em>genshu</em> reaches 17–20%; low-alcohol styles start near 5%.",ja:"無加水の原酒は17〜20%、低アルコール型は5%前後から。",zh:"未加水的原酒可達 17–20%；低酒精款則自 5% 起。"} },
          { k:{en:"Fermentation strength",ja:"発酵度",zh:"發酵強度"}, v:"~20 %", d:{en:"Sake mash reaches the highest natural alcohol of any brewed beverage — parallel fermentation keeps sugar low so yeast is never osmotically shocked.",ja:"醪は醸造酒として最高水準のアルコール度に達する。並行複発酵により糖濃度が低く保たれ、酵母が浸透圧障害を受けにくい。",zh:"醪可達釀造酒中最高的天然酒精度——並行複發酵使糖濃度維持低檔，酵母不致受滲透壓衝擊。"} },
          { k:{en:"Active breweries",ja:"稼働蔵数",zh:"營運酒藏"}, v:"~1,100", d:{en:"Around 1,600 hold licences; roughly 1,100–1,200 brew in a given year, down from over 4,000 in 1970.",ja:"免許場は約1,600、実際に製造するのは年におよそ1,100〜1,200場。1970年には4,000場を超えていた。",zh:"持照者約 1,600 家；實際釀造者每年約 1,100–1,200 家，1970 年時曾逾 4,000 家。"} },
          { k:{en:"Sake GIs",ja:"清酒の地理的表示",zh:"清酒地理標示"}, v:"23", d:{en:"From Hakusan (2005) to Kyoto, Tottori and Fukuoka (2025), plus the nationwide “Nihonshu” GI.",ja:"白山（2005年）から京都・鳥取・福岡（2025年）まで。加えて全国区の「日本酒」GI。",zh:"自白山（2005）至京都、鳥取、福岡（2025），另有全國性的「日本酒」GI。"} },
          { k:{en:"Export value",ja:"輸出額",zh:"出口額"}, v:"¥45.9 bn", d:{en:"2025 calendar year, up about 6%; 33,500 kL by volume across 81 countries and territories.",ja:"2025暦年、前年比約6%増。数量33,500kL、輸出先は81か国・地域。",zh:"2025 曆年，年增約 6%；數量 33,500 公秉，銷往 81 個國家與地區。"} },
          { k:{en:"Milling floor",ja:"精米歩合の下限",zh:"精米步合下限"}, v:"7 %", d:{en:"Commercial daiginjō routinely mills to 35–50%. Record attempts have reached 7% — 93% of each grain discarded.",ja:"市販の大吟醸は概ね35〜50%。記録的な挑戦では7%、すなわち粒の93%を削り落とす。",zh:"市售大吟釀多為 35–50%。極端紀錄達 7%，即每粒米削去 93%。"} },
          { k:{en:"Rice varieties",ja:"酒造好適米",zh:"釀酒專用米"}, v:"120+", d:{en:"Officially recognised <em>shuzō-kōtekimai</em>; Yamada Nishiki alone is about a third of all sake-rice tonnage.",ja:"公認の酒造好適米は120種を超える。山田錦だけで作付量のおよそ三分の一を占める。",zh:"官方認定的酒造好適米逾 120 種；單是山田錦即約占釀酒米總量三分之一。"} },
          { k:{en:"UNESCO",ja:"ユネスコ",zh:"聯合國教科文組織"}, v:"2024", d:{en:"“Traditional knowledge and skills of sake-making with kōji mould in Japan” inscribed on the Representative List, 4 December 2024.",ja:"「日本の伝統的酒造り」が2024年12月4日、代表一覧表に記載された。",zh:"「日本傳統麴菌釀酒的知識與技藝」於 2024 年 12 月 4 日列入代表名錄。"} }
        ] }
      ]
    },

    { t:"section", id:"inputs",
      title:{ en:"Five inputs", ja:"五つの要素", zh:"五項要素" }, jp:"米・水・麹・酵母・人",
      body:[
        { t:"p", text:{
          en:"Everything in a bottle of sake comes from five sources. Four are material; the fifth is judgement. Sake has no oak, no fruit, no hops, no adjunct flavouring in the classical styles — which is why small differences in each input are audible in the glass.",
          ja:"一本の日本酒を構成するものは五つに帰着する。四つは物質であり、五つ目は判断である。古典的な酒質には樽香も果実も苦味料も存在しない。だからこそ、各要素のわずかな差が杯のなかで明瞭に響く。",
          zh:"一瓶日本酒的一切，來自五個來源。四項是物質，第五項是判斷。古典酒質中沒有橡木、沒有果實、沒有啤酒花或添加香料——正因如此，每項要素的細微差異都能在杯中聽見。" } },
        { t:"grid", cols:3, cells:[
          { h:{en:"Rice",ja:"米",zh:"米"}, jp:"米", d:{en:"Not table rice. Sake rice has large grains, a low protein and lipid content, and a chalky opaque core (<em>shinpaku</em>) that steam and kōji hyphae can penetrate. The outer layers carry the protein and fat that produce coarse, heavy flavours, so they are milled away.",ja:"食用米ではない。酒米は粒が大きく、たんぱく質と脂質が少なく、中心に白く不透明な心白をもつ。蒸気と麹菌の菌糸はここに入り込む。外層には雑味の元となるたんぱく質・脂質が集まるため、削り取られる。",zh:"並非食用米。酒米粒大、蛋白質與脂質低，中心有白濁的心白，蒸氣與麴菌菌絲得以穿入。外層集中了造成雜味的蛋白質與脂肪，因此被削去。"} },
          { h:{en:"Water",ja:"水",zh:"水"}, jp:"水", d:{en:"Roughly 80% of the finished liquid, and about thirty times the weight of the rice across the whole process. Potassium, phosphorus and magnesium feed the yeast; iron and manganese are the enemy — iron above ~0.02 ppm browns the sake and dulls its aroma.",ja:"完成した液体のおよそ80%を占め、全工程では米の重量の約三十倍を用いる。カリウム・リン・マグネシウムは酵母の栄養となり、鉄とマンガンは大敵である。鉄が約0.02ppmを超えると着色し、香りが鈍る。",zh:"約占成品液體的 80%，全程用水量約為米重的三十倍。鉀、磷、鎂是酵母的養分；鐵與錳則是大敵——鐵超過約 0.02 ppm 便會使酒著色、香氣變鈍。"} },
          { h:{en:"Kōji",ja:"麹",zh:"麴"}, jp:"麹菌", d:{en:"<em>Aspergillus oryzae</em>, Japan's national fungus (<em>kokkin</em>). Grown onto steamed rice over about 48 hours, it secretes α-amylase and glucoamylase to saccharify starch, plus proteases that liberate the amino acids behind umami. “First kōji, second the starter, third the mash.”",ja:"アスペルギルス・オリゼー、日本の国菌。蒸米上でおよそ48時間かけて育て、α-アミラーゼとグルコアミラーゼを分泌してデンプンを糖化し、プロテアーゼでうま味の元となるアミノ酸を遊離させる。「一麹、二酛、三造り」。",zh:"米麴菌（Aspergillus oryzae），日本的「國菌」。於蒸米上培養約 48 小時，分泌 α-澱粉酶與葡萄糖澱粉酶進行糖化，並以蛋白酶釋出構成旨味的胺基酸。「一麴、二酛、三造」。"} },
          { h:{en:"Yeast",ja:"酵母",zh:"酵母"}, jp:"酵母", d:{en:"<em>Saccharomyces cerevisiae</em>, but specific strains: the Brewing Society's Kyōkai numbers, prefectural isolates, flower-derived strains. Yeast decides aroma more than any other single factor — banana (isoamyl acetate) versus apple and melon (ethyl caproate).",ja:"サッカロミセス・セレビシエ。ただし菌株が問題となる。醸造協会のきょうかい酵母、県の分離株、花酵母など。香りを決める最大の単一要因であり、バナナ様（酢酸イソアミル）とリンゴ・メロン様（カプロン酸エチル）を分ける。",zh:"釀酒酵母（Saccharomyces cerevisiae），但關鍵在於菌株：釀造協會的協會酵母、各縣分離株、花酵母等。酵母是決定香氣的最大單一因素——香蕉調（乙酸異戊酯）對比蘋果與哈密瓜調（己酸乙酯）。"} },
          { h:{en:"Hands",ja:"人",zh:"人"}, jp:"杜氏・蔵人", d:{en:"The <em>tōji</em> (master brewer) and the <em>kurabito</em> under them. Every decision that matters — when to stop soaking, how warm to let the kōji run, when the mash is finished — is a judgement made against a moving target, from touch, smell and taste as much as from instruments.",ja:"杜氏とその下の蔵人。浸漬をいつ止めるか、麹をどこまで温度を上げるか、醪をいつ切り上げるか——重要な判断はすべて、動く目標に対して、計器と同じくらい手触り・香り・味によってなされる。",zh:"杜氏（釀造總監）與其下的藏人。所有關鍵決定——何時停止浸漬、麴溫可推到多高、醪何時該停——都是對移動標的所做的判斷，仰賴觸感、氣味與味覺，不亞於儀器。"} },
          { h:{en:"Time & cold",ja:"時と寒さ",zh:"時間與寒冷"}, jp:"寒造り", d:{en:"Not an ingredient but a condition. Classical brewing runs October to March (<em>kanzukuri</em>), when cold air suppresses spoilage organisms and lets fermentation be slowed deliberately — the ginjō method is essentially fermentation held at 8–12 °C for a month.",ja:"原料ではなく条件である。古典的な造りは十月から三月の寒造り。低温が雑菌を抑え、発酵を意図的に遅らせることを可能にする。吟醸造りとは要するに、8〜12℃で一か月間発酵を保つ技法である。",zh:"不是原料，而是條件。古典釀造在十月至三月進行（寒造），低溫抑制雜菌，使發酵得以刻意放緩——吟釀造法本質上就是在 8–12°C 下維持一個月的發酵。"} }
        ] }
      ]
    },

    { t:"section", id:"orientation",
      title:{ en:"How to read this reference", ja:"本資料の使い方", zh:"本資料的使用方式" }, jp:"構成",
      body:[
        { t:"p", text:{
          en:"The sections are ordered the way understanding tends to build, not the way a bottle is encountered. If you are starting from a bottle in your hand, jump to <a href=\"label.html\">Reading a Label</a> and <a href=\"classification.html\">Categories &amp; Law</a> first, then come back.",
          ja:"各章は、瓶に出会う順ではなく、理解が積み上がる順に並べてある。いま手元に一本あるのなら、まず<a href=\"label.html\">表示の読み方</a>と<a href=\"classification.html\">分類と法令</a>に飛び、その後で戻ってくるとよい。",
          zh:"章節依「理解累積的順序」排列，而非「遇見一瓶酒的順序」。若你手上正有一瓶，建議先跳至<a href=\"label.html\">酒標判讀</a>與<a href=\"classification.html\">分類與法規</a>，再回頭閱讀。" } },
        { t:"table", keyCol:true,
          caption:{en:"Site map",ja:"収録内容",zh:"內容地圖"},
          cols:[{en:"Section",ja:"章",zh:"章節"},{en:"What it covers",ja:"内容",zh:"內容"}],
          rows:[
            [{en:"Foundations",ja:"基礎",zh:"基礎"},{en:"What sake is; twelve centuries of documented history; its place in ritual, festival and the year; and how it differs from wine, beer and its East Asian relatives.",ja:"日本酒とは何か。文献に残る十二世紀分の歴史。儀礼・祭事・年中行事のなかでの位置。そしてワイン・ビール・東アジアの近縁の酒との違い。",zh:"日本酒是什麼；十二個世紀的文獻史；它在儀禮、祭典與歲時中的位置；以及它與葡萄酒、啤酒及東亞近親酒類的差異。"}],
            [{en:"Making",ja:"造り",zh:"釀造"},{en:"Rice and water; the biology of kōji and yeast; the full process step by step; the four starter methods; pressing, filtering, pasteurising, ageing.",ja:"米と水。麹と酵母の生物学。全工程の逐次解説。四つの酒母法。上槽・濾過・火入れ・熟成。",zh:"米與水；麴與酵母的生物學；逐步解說的完整流程；四種酒母工法；上槽、過濾、火入、熟成。"}],
            [{en:"Understanding",ja:"理解",zh:"理解"},{en:"The eight legal designations; every term that can appear on a label; stylistic families beyond the legal grid; the numbers on the back label and what they do and do not mean.",ja:"八つの特定名称。ラベルに現れうる全用語。法的区分を超えた酒質の類型。裏ラベルの数値が意味するもの・しないもの。",zh:"八種特定名稱；酒標上可能出現的所有術語；超越法定框架的風格類型；背標數值的意義與其侷限。"}],
            [{en:"Place",ja:"産地",zh:"產地"},{en:"Whether terroir is real in sake; a prefecture-by-prefecture survey; all 23 geographical indications; breweries and brands worth knowing.",ja:"日本酒にテロワールは成立するか。都道府県別の概観。23の地理的表示すべて。知っておくべき蔵元と銘柄。",zh:"日本酒是否存在風土；逐縣概覽；全部 23 個地理標示；值得認識的酒藏與品牌。"}],
            [{en:"Drinking",ja:"飲む",zh:"品飲"},{en:"Formal tasting method; the ten named temperatures; vessels and what they do to aroma; pairing logic; buying, storing and the shelf life of an open bottle.",ja:"官能評価の手順。十段階の温度呼称。器が香りに与える作用。相性の論理。購入・保存・開栓後の寿命。",zh:"正式品評方法；十種溫度名稱；酒器對香氣的作用；搭配邏輯；選購、保存與開瓶後的壽命。"}],
            [{en:"Wider world",ja:"周辺",zh:"周邊"},{en:"What else kōji makes — shōchū, awamori, mirin, miso, soy sauce; and sake brewed outside Japan, from Brooklyn to Taichung.",ja:"麹が造るその他のもの——焼酎・泡盛・みりん・味噌・醤油。そして、ブルックリンから台中まで、日本国外で造られる酒。",zh:"麴所造的其他事物——燒酎、泡盛、味醂、味噌、醬油；以及自布魯克林到台中，於日本以外釀造的清酒。"}],
            [{en:"Reference",ja:"資料",zh:"資料"},{en:"Industry structure and export data; quick-reference tables including the era-year conversion for reading a production date; a working glossary of about 200 terms in three scripts; the sources this reference is built on.",ja:"産業構造と輸出データ。製造年月を読むための和暦西暦対照を含む早見表。三言語約200語の実用用語集。本資料の依拠した出典。",zh:"產業結構與出口數據；含判讀製造年月之年號西元對照的速查表；約 200 條三語詞彙表；本資料所依據的來源。"}]
          ] }
      ]
    },

    { t:"section", id:"misconceptions",
      title:{ en:"Six things that are not true", ja:"広く信じられている六つの誤り", zh:"六個常見的誤解" }, jp:"誤解",
      body:[
        { t:"defs", items:[
          { term:{en:"“Sake is rice wine.”",ja:"「日本酒は米のワインである」",zh:"「日本酒是米做的葡萄酒」"},
            def:{en:"Wine is made from a sugary fruit juice by a single organism. Sake is made from a starchy grain by two organisms working simultaneously. Structurally, sake is closer to beer — and further from beer than beer is from wine, because beer separates saccharification from fermentation and sake does not.",ja:"ワインは糖を含む果汁を単一の微生物が発酵させたものである。日本酒はデンプン質の穀物を二つの微生物が同時に作用させて造る。構造的にはビールに近いが、ビールは糖化と発酵を分離するのに対し日本酒はしない点で、ビールとワインの距離よりも遠い。",zh:"葡萄酒是由單一微生物發酵含糖果汁而成；日本酒則是兩種微生物同時作用於澱粉質穀物。結構上日本酒更接近啤酒——但因啤酒將糖化與發酵分開、日本酒則否，兩者的距離甚至大於啤酒與葡萄酒之間。"} },
          { term:{en:"“Sake should be served hot.”",ja:"「日本酒は熱燗で飲むもの」",zh:"「日本酒該熱著喝」"},
            def:{en:"Warming is one of ten named temperature bands, each with a purpose. Aromatic ginjō is usually destroyed by heat; a robust yamahai junmai is often only fully legible at 45 °C. Temperature is a parameter, not a default.",ja:"燗は十段階の温度帯の一部にすぎず、それぞれに目的がある。香り高い吟醸は加熱で壊れることが多く、骨太な山廃純米は45℃でようやく全容が読める場合もある。温度は既定値ではなく変数である。",zh:"溫熱只是十個溫度名稱之一，各有其目的。香氣型吟釀多半經不起加熱；厚實的山廢純米往往要到 45°C 才完整可讀。溫度是參數，不是預設值。"} },
          { term:{en:"“Added alcohol means cheap sake.”",ja:"「アルコール添加は安酒の証」",zh:"「加了酒精就是廉價酒」"},
            def:{en:"A small measured addition of neutral distilled alcohol at pressing extracts aroma compounds that would otherwise stay in the lees, and tightens the finish. Many gold-medal daiginjō in the national competition are alcohol-added. Bulk <em>sanzōshu</em>, where alcohol and sugar tripled the volume, is a different practice — and was abolished in 2006.",ja:"上槽時に少量の醸造アルコールを加えると、粕に残るはずの香気成分が引き出され、後味が締まる。全国新酒鑑評会の金賞受賞大吟醸には添加酒が多い。アルコールと糖で量を三倍にした三増酒は別の話であり、2006年に廃止された。",zh:"上槽時加入少量中性釀造酒精，可萃取原本會留在酒粕中的香氣成分，並收束尾韻。全國新酒鑑評會的金賞大吟釀多為添加型。以酒精與糖將產量增為三倍的三增酒是另一回事，已於 2006 年廢止。"} },
          { term:{en:"“Junmai is the top grade.”",ja:"「純米が最上級」",zh:"「純米是最高等級」"},
            def:{en:"<em>Junmai</em> is a statement about ingredients, not quality. The eight designations form a grid of two axes — with or without added alcohol, and how far the rice was milled. There is no ranking between the axes.",ja:"純米は品質ではなく原料についての表示である。八つの特定名称は、醸造アルコールの有無と精米歩合という二軸の格子をなす。軸のあいだに優劣はない。",zh:"「純米」是關於原料的陳述，不是品質等級。八種特定名稱構成兩個軸向的方格——有無添加釀造酒精，以及精米步合——軸與軸之間沒有高下。"} },
          { term:{en:"“The Sake Meter Value tells you if it is sweet.”",ja:"「日本酒度で甘辛が分かる」",zh:"「日本酒度可判斷甜辛」"},
            def:{en:"SMV is a density reading. Sugar makes the liquid denser, alcohol makes it lighter, and so do other dissolved solids. A +3 sake with acidity 1.0 tastes sweeter than a −1 sake with acidity 2.0. Read SMV and acidity together or not at all.",ja:"日本酒度は比重の読み値である。糖は液を重くし、アルコールは軽くし、他の溶存成分も影響する。酸度1.0の＋3は、酸度2.0の−1より甘く感じられる。日本酒度は酸度と併せて読むか、まったく読まないかのどちらかである。",zh:"日本酒度是比重讀數。糖使液體變重，酒精使其變輕，其他溶質亦有影響。酸度 1.0 的 +3 會比酸度 2.0 的 −1 嚐起來更甜。日本酒度須與酸度並讀，否則不如不讀。"} },
          { term:{en:"“Sake does not age.”",ja:"「日本酒は熟成しない」",zh:"「日本酒不能陳年」"},
            def:{en:"Most sake is built to be drunk young and does deteriorate. But <em>koshu</em> — deliberately aged three years and beyond — develops amber colour, sherry and dried-fruit notes, and a savoury depth through the Maillard reaction. Edo-period records describe aged sake selling at several times the price of new.",ja:"多くの日本酒は若く飲むことを前提に造られ、実際に劣化する。しかし意図的に三年以上熟成させた古酒は、メイラード反応により琥珀色を帯び、シェリーや乾果の香りと滋味の深さを獲得する。江戸期の記録には、古酒が新酒の数倍で取引されたとある。",zh:"多數日本酒為年輕飲用而造，確實會劣化。但刻意陳放三年以上的古酒，經梅納反應而生琥珀色澤、雪莉與果乾香氣及厚實旨味。江戶時期的記載顯示，古酒售價可達新酒的數倍。"} }
        ] }
      ]
    },

{ t:"section", id:"using",
      title:{ en:"How to use this reference", ja:"本資料の使い方", zh:"如何使用本參考資料" }, jp:"案内",
      body:[
        { t:"p", text:{
          en:"Forty-two pages in three languages, arranged so that each one stands alone but the order means something. There is no need to read it front to back, and four different routes through it make sense depending on what you came for.",
          ja:"三つの言語による四十二の頁を、それぞれが独立して読めるように、しかし順序に意味があるように並べてある。頭から順に読む必要はない。何を求めて来たかによって、四つの異なる道筋が成り立つ。",
          zh:"四十二個頁面、三種語言，編排上讓每一頁都能獨立閱讀，但順序本身也具有意義。無需從頭讀到尾；依你為何而來，有四條不同的路線都說得通。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"If you have never drunk sake",ja:"日本酒を飲んだことがないなら",zh:"若你從未喝過清酒"}, jp:"入口",
            body:[{ t:"ol", items:[
              { en:"<a href=\"start.html\">Where to Start</a> — the eight words that unlock a label, and a first twelve bottles chosen to isolate one variable each.",ja:"<a href=\"start.html\">始め方</a>——酒標を開く八つの語と、それぞれ一つの変数を切り出すよう選ばれた最初の十二本。",zh:"<a href=\"start.html\">從何開始</a>——解開酒標的八個詞，以及各自用來隔離一個變因的最初十二支酒。" },
              { en:"<a href=\"classification.html\">Categories & Law</a> — what junmai, ginjō and the rest actually mean.",ja:"<a href=\"classification.html\">分類と法令</a>——純米や吟醸が実際に何を意味するか。",zh:"<a href=\"classification.html\">分類與法規</a>——純米、吟釀等究竟代表什麼。" },
              { en:"<a href=\"serving.html\">Temperature & Vessels</a> — the single change that alters a bottle most.",ja:"<a href=\"serving.html\">温度と器</a>——一本の酒を最も変える、たった一つの操作。",zh:"<a href=\"serving.html\">溫度與酒器</a>——最能改變一瓶酒的單一操作。" },
              { en:"<a href=\"faq.html\">Questions & Answers</a> — for everything that comes up in the first month.",ja:"<a href=\"faq.html\">よくある問い</a>——最初のひと月に出てくることのすべて。",zh:"<a href=\"faq.html\">常見問答</a>——第一個月裡會冒出來的所有問題。" }
            ] }] },
          { h:{en:"If you want to know how it is made",ja:"造り方を知りたいなら",zh:"若你想知道它如何釀成"}, jp:"技術",
            body:[{ t:"ol", items:[
              { en:"<a href=\"compare.html\">Sake & Other Drinks</a> — why parallel fermentation is the whole story.",ja:"<a href=\"compare.html\">他の酒との比較</a>——並行複発酵こそがすべてである理由。",zh:"<a href=\"compare.html\">與其他酒的比較</a>——並行複發酵為何就是全部關鍵。" },
              { en:"<a href=\"rice.html\">Sake Rice</a>, <a href=\"water.html\">Water</a>, <a href=\"koji.html\">Kōji</a> and <a href=\"yeast.html\">Yeast</a> — the four inputs, one page each.",ja:"<a href=\"rice.html\">酒米</a>、<a href=\"water.html\">水</a>、<a href=\"koji.html\">麹</a>、<a href=\"yeast.html\">酵母</a>——四つの原料に、一頁ずつ。",zh:"<a href=\"rice.html\">酒米</a>、<a href=\"water.html\">水</a>、<a href=\"koji.html\">麴</a>、<a href=\"yeast.html\">酵母</a>——四項原料，各一頁。" },
              { en:"<a href=\"process.html\">Brewing Process</a> and <a href=\"starters.html\">Starter Methods</a> — the season, step by step.",ja:"<a href=\"process.html\">製造工程</a>と<a href=\"starters.html\">酒母の型</a>——一造りを、段階ごとに。",zh:"<a href=\"process.html\">釀造流程</a>與<a href=\"starters.html\">酒母工法</a>——一整季，逐步拆解。" },
              { en:"<a href=\"equipment.html\">The Kura & Its Tools</a> and <a href=\"toji.html\">Tōji & the Crew</a> — the building and the people in it.",ja:"<a href=\"equipment.html\">蔵と道具</a>と<a href=\"toji.html\">杜氏と蔵人</a>——建物と、そのなかの人々。",zh:"<a href=\"equipment.html\">酒藏與器具</a>與<a href=\"toji.html\">杜氏與藏人</a>——建築，以及其中的人。" }
            ] }] },
          { h:{en:"If you are buying, serving or pairing",ja:"買い、供し、合わせるなら",zh:"若你要選購、供飲或搭配"}, jp:"実務",
            body:[{ t:"ol", items:[
              { en:"<a href=\"label.html\">Reading a Label</a> — the law, then the voluntary words that actually tell you something.",ja:"<a href=\"label.html\">表示の読み方</a>——法定の表示、そして実際に何かを語る任意の語。",zh:"<a href=\"label.html\">酒標判讀</a>——先看法定標示，再看真正透露訊息的自願用語。" },
              { en:"<a href=\"storage.html\">Buying & Storage</a> — where the cold chain breaks, and what a good shop looks like.",ja:"<a href=\"storage.html\">購入と保存</a>——冷蔵の連鎖が切れる場所と、良い店の姿。",zh:"<a href=\"storage.html\">選購與保存</a>——冷鏈在何處斷裂，以及好店長什麼樣。" },
              { en:"<a href=\"pairing.html\">Food Pairing</a> — a working table, and the three rules that cover most of it.",ja:"<a href=\"pairing.html\">料理との相性</a>——実用の表と、大半を覆う三つの規則。",zh:"<a href=\"pairing.html\">餐酒搭配</a>——一張實用表格，以及涵蓋大半情況的三條規則。" },
              { en:"<a href=\"visiting.html\">Visiting & Buying</a> — brewery etiquette, the calendar, and the phrases that work.",ja:"<a href=\"visiting.html\">蔵を訪ねる</a>——蔵での作法、暦、そして通じる言い方。",zh:"<a href=\"visiting.html\">訪藏與選購</a>——酒藏禮節、時節，以及管用的語句。" }
            ] }] },
          { h:{en:"If you already know the basics",ja:"基礎を知っているなら",zh:"若你已懂基礎"}, jp:"その先",
            body:[{ t:"ol", items:[
              { en:"<a href=\"terroir.html\">Terroir</a> — the live argument, with the evidence on both sides set out.",ja:"<a href=\"terroir.html\">風土</a>——いまも続く議論と、双方の根拠。",zh:"<a href=\"terroir.html\">風土</a>——仍在進行的爭論，以及雙方的證據。" },
              { en:"<a href=\"aging.html\">Aged Sake</a> and <a href=\"sparkling.html\">Sparkling Sake</a> — the two categories most drinkers have never tried.",ja:"<a href=\"aging.html\">熟成酒</a>と<a href=\"sparkling.html\">発泡清酒</a>——飲み手の多くが試したことのない二つの分野。",zh:"<a href=\"aging.html\">熟成酒</a>與<a href=\"sparkling.html\">氣泡清酒</a>——多數飲者從未嘗試的兩個類別。" },
              { en:"<a href=\"industry.html\">Industry & Trade</a> — why the shelf price is what it is, and who is still brewing.",ja:"<a href=\"industry.html\">産業と流通</a>——棚の値がその値である理由と、いま誰が造っているか。",zh:"<a href=\"industry.html\">產業與貿易</a>——架上價格何以如此，以及還有誰在釀酒。" },
              { en:"<a href=\"glossary.html\">Glossary</a> and <a href=\"tables.html\">Reference Tables</a> — for looking things up rather than reading.",ja:"<a href=\"glossary.html\">用語集</a>と<a href=\"tables.html\">早見表</a>——読むためではなく、調べるために。",zh:"<a href=\"glossary.html\">詞彙表</a>與<a href=\"tables.html\">速查表</a>——用來查閱，而非閱讀。" }
            ] }] }
        ] },
        { t:"note", label:{en:"Three languages, three full texts",ja:"三つの言語、三つの完全な本文",zh:"三種語言，三份完整正文"}, text:{
          en:"Every page exists in full in English, 日本語 and 繁體中文, and none is a summary of another. The switch is in the menu at the top right; your choice is remembered. Japanese technical terms appear in kanji throughout, in all three languages, because those are the words printed on the bottle you will be holding.",
          ja:"すべての頁が英語・日本語・繁体字中国語で完全に存在し、いずれも他の要約ではない。切り替えは右上のメニューにあり、選択は記憶される。日本語の術語は三つの言語すべてにおいて漢字で現れる。それが、あなたが手にしている瓶に刷られている語だからである。",
          zh:"每一頁都以英文、日本語與繁體中文完整存在，沒有任何一種是另一種的摘要。語言切換位於右上角選單中，你的選擇會被記住。日文專業術語在三種語言中皆以漢字呈現，因為那正是印在你手中那瓶酒上的字。" } }
      ]
    },

{ t:"section", id:"map",
      title:{ en:"The whole reference", ja:"全体の見取り図", zh:"全站地圖" }, jp:"目次",
      body:[
        { t:"p", text:{
          en:"Seven groups, and every page in each. Nothing here needs to be read in order — but the four Foundations pages assume nothing, and everything else assumes them.",
          ja:"七つの群と、それぞれのすべてのページ。順に読む必要はない——ただし基礎の各ページは何も前提とせず、それ以外のすべては基礎を前提としている。",
          zh:"七個群組，以及各組中的每一頁。這裡沒有任何內容必須按順序閱讀——但「基礎」各頁不預設任何前提，而其餘一切都以它們為前提。" } },

        { t:"sitemap", cols:2 },

        { t:"grid", cols:3, cells:[
          { k:{ en:"If you are starting", ja:"始めるなら", zh:"若你剛開始" }, jp:"入門",
            v:{ en:"Four pages", ja:"四つのページ", zh:"四頁" },
            d:{ en:"<a href=\"start.html\">Where to Start</a> for the eight words and the first twelve bottles; <a href=\"classification.html\">Categories &amp; Law</a> for what the designations mean; <a href=\"label.html\">Reading a Label</a> to decode a bottle in a shop; <a href=\"serving.html\">Temperature &amp; Vessels</a>, because temperature changes more than anything else you can control.",
              ja:"<a href=\"start.html\">始め方</a>で八つの語と最初の十二本を。<a href=\"classification.html\">分類と法令</a>で特定名称の意味を。<a href=\"label.html\">表示の読み方</a>で店の瓶を読み解くために。そして<a href=\"serving.html\">温度と器</a>——温度は、あなたに制御しうる何よりも多くを変えるからである。",
              zh:"<a href=\"start.html\">從何開始</a>：八個詞與最初的十二支酒；<a href=\"classification.html\">分類與法規</a>：各種名稱的意義；<a href=\"label.html\">酒標判讀</a>：在店裡讀懂一支酒；<a href=\"serving.html\">溫度與酒器</a>——因為溫度改變的東西，比任何你能控制的因素都多。" } },
          { k:{ en:"If you want the science", ja:"科学を求めるなら", zh:"若你想要科學" }, jp:"技術",
            v:{ en:"Five pages", ja:"五つのページ", zh:"五頁" },
            d:{ en:"<a href=\"process.html\">Brewing Process</a> and <a href=\"starters.html\">Starter Methods</a> for the mechanism; <a href=\"koji.html\">Kōji</a> and <a href=\"microbes.html\">The Microbial Cast</a> for the organisms; <a href=\"taste.html\">Chemistry of Flavour</a> for what ends up in the glass and at what concentration.",
              ja:"仕組みは<a href=\"process.html\">製造工程</a>と<a href=\"starters.html\">酒母の型</a>。生物は<a href=\"koji.html\">麹</a>と<a href=\"microbes.html\">微生物の顔ぶれ</a>。杯に何がどれだけの濃度で残るかは<a href=\"taste.html\">味の科学</a>。",
              zh:"機制見<a href=\"process.html\">釀造流程</a>與<a href=\"starters.html\">酒母工法</a>；生物見<a href=\"koji.html\">麴</a>與<a href=\"microbes.html\">微生物的角色群</a>；最終進到杯中的是什麼、濃度多少，見<a href=\"taste.html\">風味的化學</a>。" } },
          { k:{ en:"If you want the argument", ja:"議論を求めるなら", zh:"若你想要論辯" }, jp:"論点",
            v:{ en:"Four pages", ja:"四つのページ", zh:"四頁" },
            d:{ en:"<a href=\"terroir.html\">Terroir</a> for whether place is real; <a href=\"people.html\">People</a> for who changed what; <a href=\"women.html\">Women and Sake</a> for what the record left out; <a href=\"future.html\">The Next Twenty Years</a> for where the numbers point.",
              ja:"土地が実在するかは<a href=\"terroir.html\">風土</a>。誰が何を変えたかは<a href=\"people.html\">人物</a>。記録が落としたものは<a href=\"women.html\">女性と日本酒</a>。数字がどこを指しているかは<a href=\"future.html\">これからの二十年</a>。",
              zh:"「地方」是否真實，見<a href=\"terroir.html\">風土</a>；誰改變了什麼，見<a href=\"people.html\">人物</a>；歷史紀錄漏掉了什麼，見<a href=\"women.html\">女性與日本酒</a>；數字指向何方，見<a href=\"future.html\">未來二十年</a>。" } }
        ] }
      ] },

    { t:"related", items:[
      { href:"start.html", why:{ en:"The shortest path from nothing to a bottle you will actually enjoy.", ja:"何も知らぬところから、実際に楽しめる一本までの最短の道。", zh:"從一無所知到一支你真的會喜歡的酒，最短的一條路。" } },
      { href:"process.html", why:{ en:"What actually happens between a grain of rice and a glass.", ja:"米粒と一杯のあいだに、実際に何が起きるか。", zh:"一粒米與一杯酒之間，究竟發生了什麼。" } },
      { href:"classification.html", why:{ en:"Why the words on the front of the bottle mean what they mean.", ja:"瓶の表の語が、なぜその意味を持つのか。", zh:"瓶身正面那些字，為什麼是那個意思。" } },
      { href:"glossary.html", why:{ en:"Every term on this site, with its kanji and its reading.", ja:"本サイトのすべての語を、漢字と読みとともに。", zh:"本站所有術語，附漢字與讀音。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- start */
SAKE.pages["start"] = {
  kicker: { en: "Foundations · 02", ja: "基礎 · 02", zh: "基礎 · 02" },
  title:  { en: "Where to Start", ja: "始め方", zh: "從何開始" },
  jp: "最初の六本",
  lede: {
    en: "This reference is long and does not need to be read in order. If you have never deliberately tasted sake, the fastest route to understanding it is not more reading — it is six bottles, bought over a few months, tasted in a particular sequence, each one chosen to isolate a single variable. What follows is that sequence, what each bottle is for, and the three exercises that teach more than any chapter here.",
    ja: "本資料は長く、順に読む必要はない。もし意識して日本酒を利いたことがないのであれば、理解への最短の道はさらに読むことではない。数か月かけて買う六本を、決まった順序で、それぞれ一つの変数だけを切り出すように選んで味わうことである。以下はその順序と、各々の狙い、そして本書のどの章よりも多くを教える三つの実習である。",
    zh: "本資料篇幅甚長，且無須依序閱讀。若你從未刻意品嚐過日本酒，理解它最快的途徑不是讀更多，而是在數個月間買下六瓶，依特定順序品飲，每一瓶都為了單獨隔離出一個變數而選。以下即為那個順序、每瓶酒的用意，以及三項比本書任何章節都更能教會你的練習。"
  },
  body: [
    { t:"section", id:"six",
      title:{ en:"Six bottles", ja:"六本", zh:"六瓶" }, jp:"順序",
      body:[
        { t:"p", text:{
          en:"Buy them one or two at a time, not all at once. Each is chosen so that the difference from the one before it has a single cause you can name.",
          ja:"一度に全部ではなく、一本か二本ずつ買う。それぞれは、直前の一本との違いに、名指しできる単一の原因があるように選んである。",
          zh:"一次買一到兩瓶，不要一次買齊。每一瓶的選擇，都是為了讓它與前一瓶的差異，有一個你能指名的單一成因。" } },
        { t:"figure",
          caption:{
            en:"The six bottles as a single experiment. Each step changes exactly one thing from the step before it, so that any difference you taste has a cause you can name — which is the whole method, and the reason the order matters more than the choice of brands. Buy them one or two at a time over a few months rather than all at once: the sequence only works if you can still remember the previous bottle when you open the next.",
            ja:"六本を、一つの実験として。それぞれの段階は、直前の段階からちょうど一つだけを変える。ゆえに、味わって感じるどんな違いにも、名指しできる原因がある——それが方法の全体であり、銘柄の選択より順序のほうが大切である理由である。一度にではなく、数か月かけて一本か二本ずつ買われたい。この順序は、次を開けるときに前の一本をまだ覚えていて初めて働く。",
            zh:"六瓶酒，作為單一的一場實驗。每一步都只比前一步改動恰好一件事，因此你嚐到的任何差異，都有一個你能指名的成因——這就是整套方法，也是為何順序比品牌選擇更重要。請在數個月間一次買一到兩瓶，而不要一次買齊：唯有在你開下一瓶時還記得上一瓶，這個順序才會生效。" },
          svg: function (lang, L) {
            var W = 760, H = 306, BW = 216, BH = 82, GX = 30, X0 = 26, R1 = 52, R2 = 190;
            function wrap(text, cjk, max) {
              var out = [], i;
              if (cjk) { for (i = 0; i < text.length; i += max) out.push(text.slice(i, i + max)); return out; }
              var w = text.split(" "), line = "";
              for (i = 0; i < w.length; i++) {
                if ((line + " " + w[i]).replace(/^ /, "").length > max) { out.push(line); line = w[i]; }
                else line = line ? line + " " + w[i] : w[i];
              }
              if (line) out.push(line);
              return out;
            }
            var cjk = (lang !== "en"), per = cjk ? 14 : 32;
            var b = [
              { e:{ en:"the zero", ja:"零点", zh:"零點" },
                t:{ en:"a junmai ginjō from Niigata or Yamagata", ja:"新潟か山形の純米吟醸", zh:"新潟或山形的純米吟釀" },
                d:{ en:"10–12 °C", ja:"10〜12℃", zh:"10–12 °C" } },
              { e:{ en:"isolates milling", ja:"精米歩合を切り出す", zh:"隔離精米步合" },
                t:{ en:"a junmai from the same prefecture", ja:"同じ県の純米", zh:"同一縣的純米" },
                d:{ en:"15 °C, then again at 45 °C", ja:"15℃、そして45℃で再び", zh:"15 °C，再以 45 °C 重試" } },
              { e:{ en:"isolates added alcohol", ja:"アル添を切り出す", zh:"隔離添加酒精" },
                t:{ en:"a honjōzō, served warm", ja:"本醸造を燗で", zh:"本釀造，溫飲" },
                d:{ en:"40–45 °C", ja:"40〜45℃", zh:"40–45 °C" } },
              { e:{ en:"isolates the starter", ja:"酒母を切り出す", zh:"隔離酒母" },
                t:{ en:"a kimoto or yamahai junmai", ja:"生酛か山廃の純米", zh:"生酛或山廢純米" },
                d:{ en:"15, 40 and 50 °C", ja:"15℃・40℃・50℃", zh:"15、40 與 50 °C" } },
              { e:{ en:"isolates everything after pressing", ja:"上槽以降のすべて", zh:"隔離上槽之後的一切" },
                t:{ en:"a muroka nama genshu", ja:"無濾過生原酒", zh:"無濾過生原酒" },
                d:{ en:"12 °C, and within a fortnight", ja:"12℃、二週間のうちに", zh:"12 °C，兩週內飲畢" } },
              { e:{ en:"isolates time", ja:"時間を切り出す", zh:"隔離時間" },
                t:{ en:"a koshu or a kijōshu", ja:"古酒あるいは貴醸酒", zh:"古酒或貴釀酒" },
                d:{ en:"20 °C, or gently warmed", ja:"20℃、または軽く燗して", zh:"20 °C，或微溫" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, x, y, k;
            for (i = 0; i < b.length; i++) {
              x = X0 + (i % 3) * (BW + GX);
              y = (i < 3 ? R1 : R2);
              s += '<rect x="' + x + '" y="' + y + '" width="' + BW + '" height="' + BH + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<rect x="' + (x + 12) + '" y="' + (y + 10) + '" width="16" height="16" fill="#B09E7C"/>';
              s += '<text x="' + (x + 20) + '" y="' + (y + 22) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#FBFAF7">' + (i + 1) + '</text>';
              s += '<text x="' + (x + 36) + '" y="' + (y + 22) + '" font-size="8.5" letter-spacing="0.8" font-weight="600" fill="#ADA79E">' + L(b[i].e) + '</text>';
              var lines = wrap(L(b[i].t), cjk, per);
              for (k = 0; k < lines.length && k < 2; k++) {
                s += '<text x="' + (x + 12) + '" y="' + (y + 44 + k * 14) + '" font-size="11" fill="#201E1B">' + lines[k] + '</text>';
              }
              s += '<text x="' + (x + 12) + '" y="' + (y + BH - 9) + '" font-size="9" fill="#8B857C">' + L(b[i].d) + '</text>';
              /* arrow to the next */
              if (i % 3 < 2) {
                s += '<line x1="' + (x + BW) + '" y1="' + (y + BH / 2) + '" x2="' + (x + BW + GX - 9) + '" y2="' + (y + BH / 2) + '" stroke="#B4AC9C"/>';
                s += '<path d="M' + (x + BW + GX) + ' ' + (y + BH / 2) + ' L' + (x + BW + GX - 9) + ' ' + (y + BH / 2 - 5) + ' L' + (x + BW + GX - 9) + ' ' + (y + BH / 2 + 5) + ' Z" fill="#B4AC9C"/>';
              }
            }
            /* the wrap from 3 to 4 */
            var RX = X0 + 2 * (BW + GX) + BW, MID = (R1 + BH + R2) / 2;
            s += '<path d="M' + RX + ' ' + (R1 + BH - 16) + ' L' + (RX + 12) + ' ' + (R1 + BH - 16) + ' L' + (RX + 12) + ' ' + MID +
                 ' L' + (X0 - 12) + ' ' + MID + ' L' + (X0 - 12) + ' ' + (R2 + 16) + ' L' + (X0 - 9) + ' ' + (R2 + 16) + '" fill="none" stroke="#DED8CB"/>';
            s += '<path d="M' + X0 + ' ' + (R2 + 16) + ' L' + (X0 - 9) + ' ' + (R2 + 11) + ' L' + (X0 - 9) + ' ' + (R2 + 21) + ' Z" fill="#DED8CB"/>';
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "六本のあいだに変わる変数は五つである。銘柄ではなく、この六つの説明をそのまま酒販店に伝えるとよい。"
                  : lang === "zh" ? "六瓶之間改變的變數只有五個。請直接把這六項描述說給店家聽，而不是指名品牌。"
                  : "Five variables change across six bottles. Ask a shop for these six descriptions rather than for brands.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"steps", items:[
          { title:{en:"A junmai ginjō from Niigata or Yamagata",ja:"新潟か山形の純米吟醸",zh:"新潟或山形的純米吟釀"},
            meta:{en:"the reference point · serve at 10–12 °C",ja:"基準点・10〜12℃で",zh:"基準點・10–12°C 供飲"},
            text:{en:"Start with the style the modern industry is proudest of: clean, aromatic, precise. This is your zero. Note the aroma before you drink — apple, pear, melon — and how short the finish is.",
                  ja:"現代の産業が最も誇る酒質から始める——清く、香り高く、精緻。これがあなたの零点である。飲む前に香りを取る——リンゴ、洋梨、メロン——そして後味の短さを覚えておく。",
                  zh:"從現代產業最引以為傲的風格開始：潔淨、芳香、精確。這是你的零點。飲前先聞香——蘋果、洋梨、哈密瓜——並記住它收尾有多短。"} },
          { title:{en:"A junmai from the same prefecture",ja:"同じ県の純米",zh:"同一縣的純米"},
            meta:{en:"isolates milling · serve at 15 °C and again at 45 °C",ja:"精米歩合を切り出す・15℃と45℃の両方で",zh:"隔離精米步合・分別以 15°C 與 45°C 品飲"},
            text:{en:"Same region, same water, less milling. It will be broader, heavier and less aromatic. Now warm half the glass and taste again: this is where most people first understand what warming does.",
                  ja:"同じ地域、同じ水、精米は浅い。より広く、重く、香りは低いはずである。次にグラスの半分を温めてもう一度味わう。燗が何をするのかを多くの人が初めて理解するのは、この瞬間である。",
                  zh:"同一產區、同一水源，精米較淺。它會更寬、更厚重、香氣更低。接著把半杯溫熱後再嚐一次：多數人第一次真正理解「溫熱做了什麼」，就在這裡。"} },
          { title:{en:"A honjōzō, served warm",ja:"本醸造を燗で",zh:"本釀造，溫飲"},
            meta:{en:"isolates added alcohol · 40–45 °C",ja:"アルコール添加を切り出す・40〜45℃",zh:"隔離添加酒精・40–45°C"},
            text:{en:"The category people are told to avoid. A good honjōzō at 45 °C is tight, dry, and does its job beside food better than either of the first two. If it changes your mind, the eight designations have stopped being a ranking for you — which is the single most useful thing this reference can do.",
                  ja:"避けるように言われがちな区分である。良い本醸造は45℃で締まり、辛く、料理の傍らでは最初の二本のいずれよりもよく働く。これで考えが変わるなら、八つの特定名称はあなたにとって序列ではなくなっている——本資料が果たしうる最も有用な仕事はそれである。",
                  zh:"這是常被勸退的類別。一款好的本釀造在 45°C 下緊實、辛口，佐餐時比前兩瓶都更稱職。若它改變了你的看法，那麼八種特定名稱對你而言已不再是排名——而這正是本資料所能做的最有用的一件事。"} },
          { title:{en:"A kimoto or yamahai junmai",ja:"生酛か山廃の純米",zh:"生酛或山廢純米"},
            meta:{en:"isolates the starter · try 15 °C, 40 °C and 50 °C",ja:"酒母を切り出す・15℃、40℃、50℃で",zh:"隔離酒母・試 15°C、40°C 與 50°C"},
            text:{en:"Higher acid, more savoury depth, something faintly like yoghurt or cured meat underneath. This is the taste of thirty days of bacterial succession, and it is the clearest demonstration that method — not just ingredients — is audible in the glass.",
                  ja:"酸が高く、滋味が深く、その下にヨーグルトや干し肉をかすかに思わせるものがある。これは三十日にわたる細菌の遷移の味であり、原料だけでなく製法が杯のなかで聞き取れることの、最も明快な実証である。",
                  zh:"酸度更高、旨味更深，底下隱約有近似優格或醃肉之物。這是三十天細菌演替的味道，也是「工法——而非僅止於原料——能在杯中被聽見」最明確的證明。"} },
          { title:{en:"A muroka nama genshu",ja:"無濾過生原酒",zh:"無濾過生原酒"},
            meta:{en:"isolates everything after pressing · 12 °C, and drink it within a fortnight",ja:"上槽以降のすべてを切り出す・12℃、二週間以内に",zh:"隔離上槽之後的一切・12°C，兩週內飲畢"},
            text:{en:"Unfiltered, unpasteurised, undiluted — 17 to 19% and completely unguarded. Dense, vivid, sometimes slightly prickly. Leave the bottle open in the fridge and taste it again on day three and day seven: nothing else teaches how fast sake moves.",
                  ja:"濾過も火入れも加水もしていない——17〜19%で、まったく無防備である。濃密で鮮烈、わずかに刺激があることもある。冷蔵庫で開けたまま置き、三日目と七日目にもう一度味わう。日本酒がどれほど速く動くかを、これ以上に教えるものはない。",
                  zh:"不過濾、不火入、不加水——17 至 19%，完全不設防。濃密、鮮明，有時帶點刺激感。把開瓶的酒放在冰箱，第三天與第七天再各嚐一次：沒有別的東西能更清楚地教你日本酒變化得有多快。"} },
          { title:{en:"A koshu, or a kijōshu",ja:"古酒、あるいは貴醸酒",zh:"古酒，或貴釀酒"},
            meta:{en:"isolates time · 20 °C or gently warmed, in a small glass",ja:"時間を切り出す・20℃または軽く燗して、小さなグラスで",zh:"隔離時間・20°C 或微溫，以小杯"},
            text:{en:"Amber, caramel, dried fig, soy. It will not taste like anything in the first five bottles, and it settles the question of whether sake ages. Buy a small format; a little goes a long way.",
                  ja:"琥珀色、カラメル、干し無花果、醤油。最初の五本のどれとも似ていない味であり、日本酒が熟成するかという問いに決着をつける。小さな容量を買うとよい。少量で足りる。",
                  zh:"琥珀色、焦糖、無花果乾、醬油。它不會像前五瓶中的任何一瓶，並且會為「日本酒是否能陳年」這個問題作結。買小容量即可，少量便足夠。"} }
        ] },
        { t:"note", label:{en:"How to buy them",ja:"買い方",zh:"如何購買"}, text:{
          en:"Ask a specialist shop for exactly these six descriptions rather than for brands. A shop that refrigerates its stock will know what you mean and will pick better than a list would; a shop that does not is not the right shop. See <a href=\"storage.html\">Buying &amp; Storage</a>.",
          ja:"銘柄ではなく、この六つの説明をそのまま酒販店に伝えるとよい。冷蔵している店なら意図を理解し、リストよりも良い選択をしてくれる。冷蔵していない店は、そもそも適した店ではない。<a href=\"storage.html\">購入と保存</a>を参照。",
          zh:"向專賣店直接說出這六項描述，而非指名品牌。有冷藏設備的店家會理解你的意思，並挑得比任何清單更好；沒有冷藏的店，本來就不是合適的店。參見<a href=\"storage.html\">選購與保存</a>。" } }
      ]
    },

    { t:"section", id:"exercises",
      title:{ en:"Three exercises", ja:"三つの実習", zh:"三項練習" }, jp:"実習",
      body:[
        { t:"compare", cols:3, items:[
          { title:{en:"One sake, three temperatures",ja:"一本を三つの温度で",zh:"一酒三溫"},
            text:{en:"Pour the same junmai into three glasses: one from the fridge, one at room temperature, one warmed to 45 °C in a water bath. Taste them in that order, then in reverse. You will find at least one bottle you thought you knew is a different drink at 45 °C. This is the single highest-yield thing you can do.",
                  ja:"同じ純米を三つのグラスに注ぐ——冷蔵庫から一つ、常温で一つ、湯煎で45℃にしたものを一つ。この順で、次に逆順で味わう。知っているつもりだった一本が、45℃ではまったく別の飲み物であることに気づくはずである。最も見返りの大きい一つの実習である。",
                  zh:"把同一款純米倒進三只杯子：一杯來自冰箱、一杯常溫、一杯以水浴溫至 45°C。依此順序品飲，再倒過來一次。你會發現至少有一瓶自以為熟悉的酒，在 45°C 下是另一種飲品。這是投報率最高的一項練習。"} },
          { title:{en:"One sake, three vessels",ja:"一本を三つの器で",zh:"一酒三器"},
            text:{en:"The same sake in a wine glass, a small ceramic ochoko and a thick guinomi, all at the same temperature. The wine glass will show aroma the ochoko hides entirely; the guinomi will feel rounder at the lip. Vessels are not decoration.",
                  ja:"同じ酒を、同じ温度で、ワイングラス、小さな陶のお猪口、厚手のぐい呑みに注ぐ。ワイングラスは、お猪口が完全に隠してしまう香りを見せる。ぐい呑みは唇に丸く当たる。器は装飾ではない。",
                  zh:"同一款酒、同一溫度，分別倒入葡萄酒杯、小陶豬口與厚壁豬口。葡萄酒杯會顯出豬口完全藏起的香氣；厚壁豬口則在唇邊觸感更圓。酒器不是裝飾。"} },
          { title:{en:"One sake, seven days",ja:"一本を七日かけて",zh:"一酒七日"},
            text:{en:"Open a bottle, taste a small glass, write two lines. Refrigerate, repeat on days three and seven. A pasteurised junmai will broaden and soften; a nama will change beyond recognition. Nothing else makes it as obvious that a bottle is a moving thing.",
                  ja:"一本を開けて小さなグラスで味わい、二行だけ書き留める。冷蔵し、三日目と七日目に繰り返す。火入れの純米は広がり丸くなり、生酒は見違えるほど変わる。一本の酒が動き続けるものであることを、これほど明白にするものはない。",
                  zh:"開一瓶酒，倒一小杯品嚐，寫下兩行筆記。冷藏後，於第三天與第七天重複。火入的純米會變寬變柔；生酒則會變得認不出來。沒有什麼比這更能讓人明白：一瓶酒是會移動的東西。"} }
        ] },
        { t:"panel", tint:"rice", title:{en:"Two lines is enough",ja:"二行で足りる",zh:"兩行就夠"}, body:[
          { t:"p", text:{
            en:"A useful tasting note does not need vocabulary. Write what it smells of and how long it lasts, in your own words, at the time — sake aroma is volatile and your memory of it is unreliable within minutes. After ten bottles you will have a private vocabulary that works better than a borrowed one, and the eighty-six official descriptors in <a href=\"tasting.html\">Tasting</a> will be a way of checking yourself rather than a script.",
            ja:"役に立つテイスティングノートに語彙は要らない。何の香りがして、どれだけ続くかを、自分の言葉で、その場で書く。日本酒の香りは揮発しやすく、記憶は数分で当てにならなくなる。十本も書けば、借り物より役に立つ自分の語彙ができている。<a href=\"tasting.html\">利き酒</a>にある八十六の公式用語は、台本ではなく自分を点検する手段になる。",
            zh:"有用的品飲筆記不需要詞彙量。當場以自己的話寫下它聞起來像什麼、持續多久——清酒香氣揮發快，數分鐘後記憶便不可靠。寫過十瓶之後，你會擁有一套比借來的更好用的私人語彙，而<a href=\"tasting.html\">品評</a>中那八十六個官方描述詞，將成為自我校準的工具，而非照本宣科的腳本。" } }
        ] }
      ]
    },

    { t:"section", id:"paths",
      title:{ en:"Reading routes", ja:"読む順序", zh:"閱讀路徑" }, jp:"目的別",
      body:[
        { t:"p", text:{
          en:"If you would rather read than buy, four routes through this reference, depending on what you came for.",
          ja:"買うより読みたいのであれば、何を求めて来たかに応じて、本資料には四つの経路がある。",
          zh:"若你寧可先讀而非先買，依你為何而來，本資料有四條路徑。" } },
        { t:"table",
          cols:[{en:"If you want to…",ja:"目的",zh:"若你想…"},{en:"Read, in this order",ja:"この順に読む",zh:"依此順序閱讀"}],
          rows:[
            [{en:"Buy better today",ja:"今日、より良く買う",zh:"今天就買得更好"},
             {en:"<a href=\"label.html\">Reading a Label</a> → <a href=\"classification.html\">Categories &amp; Law</a> → <a href=\"storage.html\">Buying &amp; Storage</a> → <a href=\"tables.html\">Reference Tables</a>",
              ja:"<a href=\"label.html\">表示の読み方</a> → <a href=\"classification.html\">分類と法令</a> → <a href=\"storage.html\">購入と保存</a> → <a href=\"tables.html\">早見表</a>",
              zh:"<a href=\"label.html\">酒標判讀</a> → <a href=\"classification.html\">分類與法規</a> → <a href=\"storage.html\">選購與保存</a> → <a href=\"tables.html\">速查表</a>"}],
            [{en:"Understand how it is made",ja:"造りを理解する",zh:"理解它如何釀成"},
             {en:"<a href=\"ingredients.html\">Rice &amp; Water</a> → <a href=\"koji.html\">Kōji &amp; Yeast</a> → <a href=\"process.html\">Brewing Process</a> → <a href=\"starters.html\">Starter Methods</a> → <a href=\"pressing.html\">Pressing &amp; Finishing</a>",
              ja:"<a href=\"ingredients.html\">米と水</a> → <a href=\"koji.html\">麹と酵母</a> → <a href=\"process.html\">製造工程</a> → <a href=\"starters.html\">酒母の型</a> → <a href=\"pressing.html\">上槽と調整</a>",
              zh:"<a href=\"ingredients.html\">米與水</a> → <a href=\"koji.html\">麴與酵母</a> → <a href=\"process.html\">釀造流程</a> → <a href=\"starters.html\">酒母工法</a> → <a href=\"pressing.html\">上槽與調整</a>"}],
            [{en:"Serve it properly",ja:"きちんと供する",zh:"正確地供飲"},
             {en:"<a href=\"styles.html\">Styles &amp; Types</a> → <a href=\"serving.html\">Temperature &amp; Vessels</a> → <a href=\"pairing.html\">Food Pairing</a> → <a href=\"tasting.html\">Tasting</a>",
              ja:"<a href=\"styles.html\">酒質と種類</a> → <a href=\"serving.html\">温度と器</a> → <a href=\"pairing.html\">料理との相性</a> → <a href=\"tasting.html\">利き酒</a>",
              zh:"<a href=\"styles.html\">酒質與種類</a> → <a href=\"serving.html\">溫度與酒器</a> → <a href=\"pairing.html\">餐酒搭配</a> → <a href=\"tasting.html\">品評</a>"}],
            [{en:"Know where it comes from",ja:"どこから来たかを知る",zh:"了解它從何而來"},
             {en:"<a href=\"history.html\">History</a> → <a href=\"culture.html\">Culture &amp; Ritual</a> → <a href=\"terroir.html\">Terroir</a> → <a href=\"regions.html\">Regions A–Z</a> → <a href=\"gi.html\">Geographical Indications</a>",
              ja:"<a href=\"history.html\">歴史</a> → <a href=\"culture.html\">文化と儀礼</a> → <a href=\"terroir.html\">風土</a> → <a href=\"regions.html\">産地一覧</a> → <a href=\"gi.html\">地理的表示</a>",
              zh:"<a href=\"history.html\">歷史</a> → <a href=\"culture.html\">文化與儀禮</a> → <a href=\"terroir.html\">風土</a> → <a href=\"regions.html\">產地一覽</a> → <a href=\"gi.html\">地理標示</a>"}]
          ] },
        { t:"note", label:{en:"Two shortcuts",ja:"二つの近道",zh:"兩個捷徑"}, text:{
          en:"Press <kbd>/</kbd> anywhere to search across every page in the language you are reading — it matches romaji, kanji and Chinese. And the language buttons at the top right switch the whole reference without reloading or losing your place.",
          ja:"どこでも <kbd>/</kbd> を押せば、読んでいる言語で全頁を横断して検索できる。ローマ字・漢字・中国語のいずれにも一致する。右上の言語ボタンは、再読み込みも現在位置の喪失もなく、資料全体を切り替える。",
          zh:"在任何位置按下 <kbd>/</kbd>，即可以你正在閱讀的語言跨頁搜尋——羅馬拼音、漢字與中文皆可比對。右上角的語言按鈕會切換整份資料，不需重新載入，也不會失去目前位置。" } }
      ]
    },

{ t:"section", id:"mistakes",
      title:{ en:"Five things that go wrong first", ja:"最初につまずく五つのこと", zh:"最先出錯的五件事" }, jp:"よくある失敗",
      body:[
        { t:"ol", items:[
          { en:"<strong>Buying the most expensive bottle in the shop.</strong> A very heavily milled daiginjō is the least representative sake there is: delicate, aromatic, low in savour, and designed to be judged rather than drunk with dinner. Start in the middle of the range, not the top.",
            ja:"<strong>店で最も高い瓶を買う。</strong>高精白の大吟醸は、日本酒のなかで最も代表的でない姿である。繊細で香り高く、旨味が少なく、夕食とともに飲むためというより、評価されるために造られている。棚の頂点ではなく、中ほどから始めること。",
            zh:"<strong>買下店裡最貴的那瓶。</strong>高度精米的大吟釀是最不具代表性的清酒：纖細、芳香、旨味少，且為受評鑑而非佐晚餐而生。請從價位帶的中段開始，而不是頂端。" },
          { en:"<strong>Serving everything ice cold.</strong> Cold flatters aroma and hides everything else. A junmai at fridge temperature is a fraction of the same junmai at 40°C, and the second version is the one that goes with food.",
            ja:"<strong>すべてを冷やしすぎる。</strong>冷たさは香りを引き立て、それ以外のすべてを隠す。冷蔵庫の温度の純米は、40度の同じ純米のごく一部にすぎない。そして料理に添うのは後者である。",
            zh:"<strong>什麼都冰得透心涼。</strong>低溫美化香氣、掩蓋其餘一切。冰箱溫度下的純米，只是同一款純米在 40°C 時的一小部分；而能佐餐的是後者。" },
          { en:"<strong>Keeping an open bottle for a month.</strong> Sake is not spirits. Once opened it changes within days, faster for an aromatic ginjō than for a junmai. Buy 720 ml, not 1.8 litres, until you know how fast you drink.",
            ja:"<strong>開けた瓶を一か月置く。</strong>日本酒は蒸留酒ではない。開ければ数日で変わり、香りの高い吟醸ほど速い。自分がどれだけの速さで飲むか分かるまでは、一升瓶ではなく四合瓶を買うこと。",
            zh:"<strong>開瓶後放上一個月。</strong>清酒不是烈酒。一經開瓶，數日內就會改變，芳香型吟釀又比純米更快。在摸清自己喝多快之前，請買 720 毫升而非 1.8 公升。" },
          { en:"<strong>Judging by the sake meter value alone.</strong> +5 does not reliably mean dry. Acidity, amino acidity, glucose and temperature all move the perception more than SMV does, and a +5 with high acid tastes drier than a +8 without it.",
            ja:"<strong>日本酒度だけで判断する。</strong>+5が必ず辛口を意味するわけではない。酸度、アミノ酸度、ブドウ糖、そして温度のほうが、日本酒度よりも感じ方を動かす。酸の高い+5は、酸のない+8より辛く感じられる。",
            zh:"<strong>只憑日本酒度判斷。</strong>+5 不必然代表辛口。酸度、胺基酸度、葡萄糖與溫度對感受的影響都勝過日本酒度；一款高酸的 +5，嚐起來比低酸的 +8 更辛。" },
          { en:"<strong>Drinking it alone, without food.</strong> Sake is built around umami and is designed to sit beside a meal. A bottle that seems unremarkable on its own will often become obvious the moment there is something salty and savoury next to it.",
            ja:"<strong>料理なしで、それだけを飲む。</strong>日本酒は旨味を軸に組み立てられており、食事の傍らにあるよう設計されている。それだけでは平凡に思えた一本が、塩気と旨味のあるものが隣に置かれた途端、はっきりと分かることは多い。",
            zh:"<strong>不配食物、單獨喝。</strong>清酒以旨味為核心構築，本就是為佐餐而設計。一瓶單喝時顯得平淡的酒，往往在旁邊擺上一道鹹鮮小菜的瞬間就變得清晰起來。" }
        ] }
      ]
    },

    { t:"section", id:"evening",
      title:{ en:"A first evening", ja:"最初の一晩", zh:"第一個晚上" }, jp:"三本と三皿",
      body:[
        { t:"p", text:{
          en:"If you want a single evening that teaches most of what matters, this is it. Three small bottles, three dishes, three temperatures, two hours, and one sheet of paper.",
          ja:"重要なことの大半を一晩で学べる組み立てがあるとすれば、これである。小さな瓶を三本、料理を三皿、温度を三通り、二時間、そして紙を一枚。",
          zh:"若你想用一個晚上學會大部分要緊的事，就是這樣安排：三支小瓶、三道菜、三種溫度、兩個小時，以及一張紙。" } },
        { t:"steps", items:[
          { title:{en:"Buy",ja:"買う",zh:"採買"}, jp:"三本",
            text:{en:"A junmai ginjō (fragrant, modern), a plain junmai (savoury, mid-weight), and a kimoto or yamahai junmai (acidic, structured). 300 ml bottles if you can find them; ask the shop for all three from different prefectures.",
              ja:"純米吟醸（華やかで現代的）、素の純米（旨味があり中庸）、そして生酛か山廃の純米（酸があり骨格がある）。見つかれば300mlの瓶で。三本とも異なる県のものを店に頼むとよい。",
              zh:"一支純米吟釀（芳香、現代）、一支素樸純米（旨味、中等厚度），以及一支生酛或山廢純米（有酸、有骨架）。若找得到就買 300 毫升瓶；請店家從三個不同縣份各挑一支。"} },
          { title:{en:"Cook, or buy, three things",ja:"三皿を作るか買うか",zh:"備妥三道菜"}, jp:"三皿",
            text:{en:"Something raw and clean (sashimi, or a good cheese if not); something fried and salty (tempura, karaage, or crisps); something braised in soy (simmered pork, or a shop-bought stew). These three cover most of the map.",
              ja:"生で清らかなもの（刺身、なければ良いチーズ）、揚げて塩気のあるもの（天ぷら、唐揚げ、あるいは袋菓子）、醤油で煮たもの（豚の角煮、あるいは市販の煮物）。この三つで地図の大半は覆える。",
              zh:"一道生鮮潔淨的（生魚片，若無則以優質起司代替）；一道油炸帶鹹的（天婦羅、炸雞，或洋芋片）；一道醬油燉煮的（滷肉，或市售燉菜）。這三者已涵蓋大半版圖。"} },
          { title:{en:"Taste all three cold, side by side",ja:"まず三本を冷やして並べる",zh:"先三支冰飲並排"}, jp:"10℃",
            text:{en:"Same glasses, 25 ml each, no food yet. Write one line on each: what it smells of, whether it feels sweet or dry, and how long it lasts.",
              ja:"同じ器で、それぞれ25ミリリットル、まだ料理は出さない。一本につき一行を書く——何の香りがするか、甘く感じるか辛く感じるか、どれだけ長く残るか。",
              zh:"用相同的杯子，各倒 25 毫升，先不上菜。每支寫一行：聞起來像什麼、感覺偏甜或偏辛、餘韻多長。"} },
          { title:{en:"Now add the food",ja:"料理を加える",zh:"接著上菜"}, jp:"食中",
            text:{en:"Try each sake against each dish. Nine combinations, three of which will be obviously right and one or two obviously wrong. The wrong ones teach more.",
              ja:"それぞれの酒を、それぞれの皿に合わせてみる。九通りのうち三つは明らかに正しく、一つか二つは明らかに間違っている。学びが大きいのは間違ったほうである。",
              zh:"讓每支酒配每道菜。九種組合中，會有三組明顯合拍，一兩組明顯不合。不合的那些教你更多。"} },
          { title:{en:"Warm the junmai",ja:"純米を燗にする",zh:"把純米溫熱"}, jp:"45℃",
            text:{en:"Stand the bottle in a pan of hot water off the heat until it reaches about 45°C — warm to the wrist, not hot. Retaste it against the braised dish. This is the moment most people's idea of sake changes.",
              ja:"火を止めた湯に瓶を立て、45度ほど——手首に温かく、熱くはない——になるまで置く。煮物に合わせて飲み直す。多くの人の日本酒観が変わるのは、この瞬間である。",
              zh:"把酒瓶立在離火的熱水鍋中，加熱到約 45°C——貼在手腕上是溫的，不是燙的。再配著滷菜重新品嚐。多數人對清酒的認知，就在這一刻改變。"} },
          { title:{en:"Return to the first glass",ja:"最初の一杯に戻る",zh:"回到第一杯"}, jp:"再確認",
            text:{en:"Taste the ginjō again at the end. It will taste different — thinner, or cleaner, or suddenly obvious. Your palate moved, and noticing that is most of what tasting skill is.",
              ja:"最後にもう一度、吟醸を飲む。違って感じられるはずである——痩せて、あるいは清らかに、あるいは急に分かりやすく。舌が動いたのであり、それに気づくことが、利き酒の技のほとんどである。",
              zh:"最後再喝一次那支吟釀。它會嚐起來不同——更單薄、更潔淨，或忽然變得清晰。是你的味覺移動了；能察覺這件事，便是品飲功力的大半。"} }
        ] },
        { t:"note", label:{en:"The ten words that unlock a label",ja:"酒標を開く十の語",zh:"解開酒標的十個詞"}, text:{
          en:"純米 junmai (no added alcohol) · 吟醸 ginjō (milled to 60% or less) · 大吟醸 daiginjō (50% or less) · 本醸造 honjōzō (a little alcohol added) · 生酒 nama (unpasteurised, keep cold) · 原酒 genshu (undiluted, strong) · 無濾過 muroka (no carbon filtration) · 生酛 kimoto and 山廃 yamahai (traditional starters, more acid) · 精米歩合 seimai-buai (the milling percentage). Learn these and you can read the majority of any Japanese sake shelf.",
          ja:"純米（アルコール無添加）・吟醸（精米歩合60%以下）・大吟醸（50%以下）・本醸造（少量のアルコール添加）・生酒（火入れなし、要冷蔵）・原酒（無加水、度数が高い）・無濾過（炭素濾過なし）・生酛と山廃（伝統的な酒母、酸が高い）・精米歩合（削った割合）。これらを覚えれば、日本の酒販店の棚の大半が読める。",
          zh:"純米（未添加酒精）・吟釀（精米 60% 以下）・大吟釀（50% 以下）・本釀造（少量添加酒精）・生酒（未火入，需冷藏）・原酒（未加水，酒精高）・無濾過（未經碳過濾）・生酛與山廢（傳統酒母，酸度較高）・精米步合（研磨後殘留百分比）。記住這些，你就能讀懂日本酒鋪貨架上的絕大部分。" } }
      ]
    },

{ t:"section", id:"eight-words",
      title:{ en:"The eight words that do the work", ja:"効く八語", zh:"真正管用的八個詞" }, jp:"最小限の語彙",
      body:[
        { t:"p", text:{
          en:"Sake vocabulary is large and most of it is optional. If you learn eight terms you can read almost any bottle well enough to buy it deliberately rather than by luck. Everything else can wait until you want it.",
          ja:"日本酒の語彙は大きく、その大半は任意である。八つの語を覚えれば、ほとんどの瓶を、運任せではなく意図をもって選べる程度には読める。残りは、必要になってからでよい。",
          zh:"日本酒的詞彙很龐大，而其中大部分是可有可無的。只要學會八個詞，你就能把幾乎任何一支酒讀懂到「刻意選購」而非「碰運氣」的程度。其餘的，等你想知道時再說。" } },

        { t:"defs", items:[
          { term:{ en:"Junmai", ja:"純米", zh:"純米" }, jp:"純米", romaji:"junmai",
            def:{ en:"Rice, water, kōji, yeast — nothing else. Its absence on a label means a small amount of distilled alcohol was added during brewing, which is a legitimate technique and not a defect. Junmai tends to read fuller and more savoury; the rest is down to the brewery.",
              ja:"米、水、麹、酵母——それだけ。ラベルにこの語がなければ、醸造中に少量の醸造アルコールが加えられている。これは正当な技法であって欠陥ではない。純米は厚く、旨味寄りに読まれることが多いが、あとは蔵次第である。",
              zh:"米、水、麴、酵母——別無其他。酒標上沒有這個詞，代表釀造過程中添加了少量蒸餾酒精；那是正當技法，不是缺陷。純米通常讀來較飽滿、旨味較明顯，其餘則看酒藏。" } },
          { term:{ en:"Ginjō / Daiginjō", ja:"吟醸・大吟醸", zh:"吟釀／大吟釀" }, jp:"吟醸", romaji:"ginjō",
            def:{ en:"Rice polished to 60% or less (50% or less for daiginjō) and fermented cold and slow. Expect aroma — pear, melon, banana — and a lighter body. It is a grade of effort, not a guarantee of pleasure: a plain junmai from a good house often outdrinks a mediocre daiginjō.",
              ja:"精米歩合60%以下（大吟醸は50%以下）で、低温で長く発酵させたもの。香り——洋梨、メロン、バナナ——と軽やかな酒躯を期待してよい。これは手間の等級であって、旨さの保証ではない。よい蔵の素朴な純米が、凡庸な大吟醸を上回ることはしばしばある。",
              zh:"精米步合 60% 以下（大吟釀為 50% 以下），並以低溫長時間發酵。可以期待香氣——洋梨、哈密瓜、香蕉——與較輕盈的酒體。這是「工夫的等級」，不是「好喝的保證」：好酒藏的一支樸素純米，常常勝過平庸的大吟釀。" } },
          { term:{ en:"Honjōzō", ja:"本醸造", zh:"本釀造" }, jp:"本醸造", romaji:"honjōzō",
            def:{ en:"Rice polished to 70% or less with a legally capped, small addition of alcohol. The classic warm-serve style and, in a good house, the best value on the shelf.",
              ja:"精米歩合70%以下、法で上限を定められた少量のアルコール添加。燗の古典であり、よい蔵にあっては棚で最も割のよい酒である。",
              zh:"精米步合 70% 以下，並添加法規設有上限的少量酒精。這是溫飲的經典類型；在好酒藏手上，也是酒架上最划算的一支。" } },
          { term:{ en:"Nama", ja:"生", zh:"生" }, jp:"生", romaji:"nama",
            def:{ en:"Unpasteurised. Fresher, livelier, sometimes slightly gassy; needs the fridge and does not wait. Almost always worth trying when you see it and almost never worth buying to keep.",
              ja:"火入れをしていない。より新鮮で、生き生きとし、時に微かに発泡する。冷蔵が要り、待ってはくれない。見かけたら試す価値はほぼ常にあり、置いておくために買う価値はほぼ常にない。",
              zh:"未經加熱殺菌。更鮮活、更有生氣，有時帶些微氣泡；需要冷藏，而且不等人。看到幾乎都值得一試，但幾乎都不值得買來存放。" } },
          { term:{ en:"Nigori", ja:"にごり", zh:"濁酒" }, jp:"濁り", romaji:"nigori",
            def:{ en:"Cloudy — coarsely filtered so rice solids remain. Ranges from a faint haze to something closer to a milkshake. Sweetness is common but not compulsory; shake or don't, according to the neck label.",
              ja:"濁っている——粗く漉して米の固形分を残したもの。うっすらとした霞から、飲み物というより流動食に近いものまで幅がある。甘口が多いが必ずしもそうではない。振るか振らないかは首かけの指示に従う。",
              zh:"混濁——僅粗濾，保留米的固形物。從淡淡的霧感到近似奶昔的濃稠都有。多半偏甜，但不必然；要不要搖勻，看瓶頸標示。" } },
          { term:{ en:"Nihonshu-do", ja:"日本酒度", zh:"日本酒度" }, jp:"日本酒度", romaji:"nihonshu-do",
            def:{ en:"A density number, printed as a plus or minus. Minus values indicate more residual sugar, plus values less. It is a weak predictor of perceived sweetness on its own — acidity moves the impression at least as much — but as a rough sorting tool between two bottles from the same brewery it works.",
              ja:"比重の数値で、プラスまたはマイナスで表示される。マイナスは残糖が多いこと、プラスは少ないことを示す。単独では甘辛の体感の予測子として弱い——酸度が印象を少なくとも同程度に動かす——が、同じ蔵の二本を仕分ける粗い道具としては働く。",
              zh:"一個以正負號標示的比重數值。負值代表殘糖較多，正值較少。單看它對「甜不甜」的預測力很弱——酸度對感受的影響至少同樣大——但用來粗略區分同一酒藏的兩支酒，它是管用的。" } },
          { term:{ en:"Seimai buai", ja:"精米歩合", zh:"精米步合" }, jp:"精米歩合", romaji:"seimai buai",
            def:{ en:"The percentage of the grain remaining after polishing. 60% means forty per cent of each grain was milled away. Lower usually means cleaner and more aromatic, and always means more expensive.",
              ja:"磨いたあとに残る米の割合。60%とは、一粒の四割が削り取られたということである。低いほど概して清らかで香り高く、そして必ず高価である。",
              zh:"研磨後留下的米粒比例。60% 意謂每一粒米被磨掉了四成。數字越低，通常越乾淨、越有香氣，而且必然越貴。" } },
          { term:{ en:"Kura / Kuramoto", ja:"蔵・蔵元", zh:"藏／藏元" }, jp:"蔵元", romaji:"kuramoto",
            def:{ en:"The brewery, and the brewing house that owns it. The single most useful thing you can learn is not a style but a house: once three bottles from one brewery have pleased you, its whole range is worth trusting more than any category on a label.",
              ja:"蔵、およびそれを営む家。学ぶに最も有用なものは、様式ではなく蔵である。一つの蔵の三本が気に入ったなら、その蔵の品揃え全体は、ラベル上のいかなる分類よりも信頼に値する。",
              zh:"酒藏，以及擁有它的釀造世家。你能學到最有用的東西不是某種類型，而是某一家酒藏：一旦同一家的三支酒都讓你滿意，它的整條產品線就比酒標上任何分類都更值得信任。" } }
        ] }
      ] },

    { t:"section", id:"twelve",
      title:{ en:"A first twelve bottles", ja:"最初の十二本", zh:"最初的十二支" }, jp:"一年の献立",
      body:[
        { t:"p", text:{
          en:"Not a list of products — a list of positions. Buy one bottle from each row, in roughly this order, over however long it takes. Each is chosen to isolate one variable, so that by the end you know what you personally respond to rather than what you have been told to admire. Drink each one twice: once cold on the day you open it, once at room temperature two days later.",
          ja:"銘柄の一覧ではなく、位置の一覧である。各行から一本ずつ、おおむねこの順で、かかるだけの時間をかけて買えばよい。それぞれが一つの変数を切り出すように選んである。終えるころには、褒めるべきと教わったものではなく、自分が実際に反応するものが分かる。どの一本も二度飲むこと——開けた日に冷たいまま一度、二日後に常温でもう一度。",
          zh:"這不是一份商品清單，而是一份「位置」清單。從每一列各買一支，大致依此順序，花多久都行。每一支的選擇都用來隔離一個變因，如此到最後你知道的是自己真正有反應的東西，而不是別人告訴你該欣賞的東西。每支都喝兩次：開瓶當天冰著喝一次，兩天後在室溫下再喝一次。" } },

        { t:"table",
          cols:[{en:"#",ja:"番",zh:"編號"},{en:"Buy",ja:"買うもの",zh:"買什麼"},{en:"What it isolates",ja:"切り出す変数",zh:"隔離的變因"}],
          numCols:[0],
          rows:[
            ["1",{en:"Any junmai from a brewery you can pronounce, below the mid price band",ja:"名を読める蔵の、中位価格帯より下の純米",zh:"任何一家你唸得出名字的酒藏、中價位以下的純米"},
             {en:"Your baseline. Everything afterwards is measured against this.",ja:"基準点。以後のすべてはこれに照らして測られる。",zh:"你的基準點。此後的一切都以它為尺。"}],
            ["2",{en:"A daiginjō from the same brewery",ja:"同じ蔵の大吟醸",zh:"同一家酒藏的大吟釀"},
             {en:"Polishing, holding the house constant. Do you actually prefer it, or only respect it?",ja:"蔵を固定したうえでの精米歩合。あなたは本当に好むのか、それとも敬っているだけか。",zh:"固定酒藏，只變精米步合。你是真的更喜歡它，還是只是敬重它？"}],
            ["3",{en:"A honjōzō, served warm",ja:"本醸造を燗で",zh:"本釀造，溫熱著喝"},
             {en:"Temperature, and the cheap end of the shelf. Many people discover here that they are warm-sake drinkers.",ja:"温度と、棚の安いほう。ここで自分が燗の人間だと気づく者は多い。",zh:"溫度，以及酒架上便宜的那一端。很多人在這裡發現自己其實是溫飲派。"}],
            ["4",{en:"A Niigata junmai ginjō",ja:"新潟の純米吟醸",zh:"新潟的純米吟釀"},
             {en:"The <em>tanrei karakuchi</em> pole: light, dry, quiet.",ja:"淡麗辛口の極——軽く、辛く、静か。",zh:"「淡麗辛口」的一極：輕、辛、安靜。"}],
            ["5",{en:"A kimoto or yamahai junmai",ja:"生酛か山廃の純米",zh:"生酛或山廢的純米"},
             {en:"Acidity and lactic depth. Try it at 45–50 °C; this is the style warmth rewards most.",ja:"酸と乳酸的な奥行き。45〜50℃で試すとよい。燗が最も報いる型である。",zh:"酸度與乳酸的深度。試著加熱到 45–50 °C；這是最能從溫飲中得益的類型。"}],
            ["6",{en:"A nama (unpasteurised), bought cold and drunk within days",ja:"生酒。冷えたものを買い、数日で飲む",zh:"生酒。買冷藏的，幾天內喝完"},
             {en:"Freshness as a flavour in its own right.",ja:"鮮度そのものが一つの味であること。",zh:"「鮮度」本身作為一種味道。"}],
            ["7",{en:"A junmai from Akita, Yamagata or Iwate",ja:"秋田・山形・岩手の純米",zh:"秋田、山形或岩手的純米"},
             {en:"Northern softness — rounder and gentler than Niigata, and a useful correction to the idea that all northern sake is dry.",ja:"北の柔らかさ。新潟より丸く、穏やかである。北の酒はすべて辛口だという思い込みへの、有用な訂正となる。",zh:"北方的柔軟：比新潟更圓、更溫和，也能有效修正「北方的酒都是辛口」這個成見。"}],
            ["8",{en:"Something from Hiroshima, Kōchi, Shizuoka or Fukuoka",ja:"広島・高知・静岡・福岡のいずれか",zh:"廣島、高知、靜岡或福岡的酒"},
             {en:"The west and the soft-water school. This is where the assumption that good sake comes from the snow country breaks.",ja:"西と軟水の系譜。よい酒は雪国から来るという前提が崩れる地点である。",zh:"西部與軟水一系。「好酒來自雪國」這個前提會在這裡瓦解。"}],
            ["9",{en:"A genshu (undiluted)",ja:"原酒",zh:"原酒"},
             {en:"Alcohol concentration, at 17–19%. Learn what it does to texture — and try it over one large ice cube.",ja:"17〜19%というアルコール濃度。それが質感に何をするかを学ぶ。大きな氷一個で割ってみるとよい。",zh:"17–19% 的酒精濃度。學它對口感做了什麼——並試著加一顆大冰塊喝。"}],
            ["10",{en:"A koshu or long-aged sake, even a small bottle",ja:"古酒・熟成酒。小瓶でよい",zh:"古酒或長期熟成酒，小瓶即可"},
             {en:"Time. Expect caramel, mushroom, soy; expect to be divided about it.",ja:"時間。カラメル、茸、醤油を予期せよ。そして評価が割れることを予期せよ。",zh:"時間。預期焦糖、菇類、醬油；也預期自己會對它評價分歧。"}],
            ["11",{en:"A sparkling sake, bottle-fermented if you can find one",ja:"発泡清酒。可能なら瓶内二次発酵のもの",zh:"氣泡清酒；找得到的話選瓶內二次發酵"},
             {en:"Carbonation, and the newest category in the drink.",ja:"炭酸と、この飲み物で最も新しい区分。",zh:"氣泡，以及這種飲品裡最新的一個類別。"}],
            ["12",{en:"The most expensive bottle you are willing to buy, from a brewery whose cheap sake you already like",ja:"安い酒がすでに気に入っている蔵の、買う気になる最も高い一本",zh:"你已經喜歡其平價酒款的那家酒藏，最貴的一支你願意買的酒"},
             {en:"Whether price buys you anything you personally value. The honest answer is often &#8220;a little, and less than the ticket suggests&#8221;.",ja:"価格が、あなた個人にとって価値あるものを買ってくれるかどうか。正直な答えはしばしば「少しは。だが値札が示唆するほどではない」である。",zh:"價格是否買得到你個人真正在意的東西。誠實的答案往往是：「有一點，但沒有價格標示所暗示的那麼多。」"}]
          ] },

        { t:"note", text:{
          en:"Keep one line of notes per bottle: brewery, category, price, and one sentence about what you liked or didn't. Three months of that is worth more than any amount of reading, this site included.",
          ja:"一本につき一行の記録を残すこと——蔵名、区分、価格、そして好んだか否かを一文。三か月のそれは、いかなる量の読書よりも——本サイトを含めて——価値がある。",
          zh:"每支酒留一行筆記：酒藏、類別、價格，以及一句喜歡或不喜歡的理由。三個月的這種筆記，勝過任何份量的閱讀——包括本站。" } }
      ] },

    { t:"section", id:"shop",
      title:{ en:"Buying in a shop with two hundred bottles", ja:"二百本の店で買う", zh:"在有兩百支酒的店裡選酒" }, jp:"実地",
      body:[
        { t:"p", text:{
          en:"The failure mode in a good sake shop is paralysis, and the cure is to arrive with constraints rather than hopes. Three constraints are enough.",
          ja:"よい酒販店での失敗は、決められないことである。その処方は、希望ではなく制約を持って行くことにある。制約は三つで足りる。",
          zh:"在一家好酒鋪裡最常見的失敗是「選不出來」，解方是帶著限制而不是帶著期待走進去。三個限制就夠了。" } },
        { t:"ol", items:[
          { en:"<strong>A budget, said out loud.</strong> Shops stock across a wide range and a stated ceiling immediately removes three quarters of the wall.",
            ja:"<strong>予算を、声に出して言う。</strong>店は広い価格帯を揃えている。上限を告げれば、壁の四分の三はその場で消える。",
            zh:"<strong>把預算說出口。</strong>店家的價格帶很寬，講明上限，牆上四分之三的酒立刻消失。" },
          { en:"<strong>A meal.</strong> &#8220;For grilled mackerel&#8221; or &#8220;for cheese and bread&#8221; is a far better brief than &#8220;something good&#8221;. Pairing is the shopkeeper's native language.",
            ja:"<strong>食事を告げる。</strong>「鯖の塩焼きに」「チーズとパンに」は、「何かよいものを」よりはるかによい注文である。料理との相性は、店主の母語である。",
            zh:"<strong>說出要配什麼菜。</strong>「配鹽烤鯖魚」或「配起司和麵包」，遠比「來支好的」更好用。餐酒搭配是店主的母語。" },
          { en:"<strong>One bottle you liked, or one you didn't.</strong> Either works. A shop can navigate from a fixed point; it cannot navigate from a vacuum.",
            ja:"<strong>気に入った一本、あるいは気に入らなかった一本を挙げる。</strong>どちらでもよい。店は定点からなら航行できるが、真空からは航行できない。",
            zh:"<strong>提一支你喜歡的，或一支你不喜歡的。</strong>兩者都行。店家能從一個定點導航，卻無法從真空中導航。" }
        ] },
        { t:"p", text:{
          en:"Two shelf-reading habits are worth acquiring. First, look for the bottling date (製造年月) rather than a vintage: for most sake, more recent is better, and a bottle that has sat two years in a warm shop under fluorescent light will taste tired whatever it cost. Second, notice whether the shop refrigerates. A shop that keeps its ginjō and all of its nama cold is telling you something about every other bottle it sells.",
          ja:"棚を読む習慣を二つ身につけるとよい。第一に、年号ではなく製造年月を見ること。大半の酒にとって新しいほうがよく、暖かい店の蛍光灯の下で二年置かれた瓶は、値段がいくらであれ疲れた味がする。第二に、その店が冷蔵しているかを見ること。吟醸と生酒のすべてを冷やしている店は、その店が売る他のすべての瓶についても、あなたに何かを告げている。",
          zh:"有兩個讀酒架的習慣值得養成。第一，看製造年月而不是年份：對多數清酒而言越新越好，一支在溫暖店裡日光燈下擺了兩年的酒，不管多少錢喝起來都是疲態。第二，注意這家店有沒有冷藏。一家把吟釀與所有生酒都冰起來的店，等於在向你透露它所賣的其他每一支酒的情況。" } }
      ] },

    { t:"section", id:"ordering",
      title:{ en:"Ordering in a bar, in Japan or out of it", ja:"店で頼む", zh:"在店裡點酒" }, jp:"注文",
      body:[
        { t:"p", text:{
          en:"An izakaya sake list is usually organised by brewery or by prefecture rather than by style, which is unhelpful if you know neither. Four phrases and one habit will get you through almost any list.",
          ja:"居酒屋の日本酒の品書きは、様式ではなく蔵か県で並んでいることが多い。どちらも知らなければ役に立たない。四つの言い方と一つの習慣があれば、たいていの品書きは越えられる。",
          zh:"居酒屋的清酒單通常按酒藏或縣份排列，而不是按風格；如果兩者你都不熟，那就派不上用場。四句話加一個習慣，足以應付幾乎任何一份酒單。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Ask for a flight", ja:"利き酒セット", zh:"點試飲組" }, jp:"飲み比べセット",
            v:"nomikurabe setto",
            d:{ en:"Three small glasses, usually chosen by the house, often the cheapest way to cover ground. Almost every serious sake bar has one even if it is not printed.",
              ja:"小さな杯が三つ。多くは店の見立てで、地歩を稼ぐ最も安上がりな手であることが多い。品書きに載っていなくとも、日本酒に本気の店ならまずある。",
              zh:"三只小杯，通常由店家選配，往往是最便宜的探索方式。就算酒單上沒印，認真做清酒的店幾乎都有。" } },
          { k:{ en:"Name a direction, not a drink", ja:"方向を言う", zh:"說方向，不說酒名" }, jp:"すっきり／濃い",
            v:"sukkiri / koi",
            d:{ en:"<em>Sukkiri</em> (clean, light) and <em>koi</em> (rich, full) are the two words every server understands. <em>Karakuchi</em> (dry) and <em>amakuchi</em> (sweet) are the second pair.",
              ja:"「すっきり」と「濃い」は、どの店員にも通じる二語である。「辛口」「甘口」がその次の対になる。",
              zh:"「すっきり」（清爽輕盈）與「濃い」（濃厚飽滿）是每位店員都懂的兩個詞；其次是「辛口」與「甘口」這一組。" } },
          { k:{ en:"Ask what is best right now", ja:"今いちばんは", zh:"問現在最好的是哪支" }, jp:"今おすすめは",
            v:"ima no osusume",
            d:{ en:"Sake is seasonal in a way wine lists are not: shiboritate in winter, hiyaoroshi in autumn. Asking what has just arrived reliably produces the freshest bottle open in the house.",
              ja:"日本酒は、ワインリストにはない仕方で季節的である——冬の搾りたて、秋のひやおろし。入ったばかりのものを尋ねれば、その店で開いている最も新しい瓶が確実に出てくる。",
              zh:"清酒有一種葡萄酒單所沒有的季節性：冬天的搾りたて、秋天的冷卸。問「剛到什麼」，幾乎必然會端出店裡開著的最新鮮的一支。" } },
          { k:{ en:"Say yes to warm", ja:"燗を頼む", zh:"接受溫飲" }, jp:"お燗で",
            v:"okan de",
            d:{ en:"If a bar has a dedicated warmer and a person who cares about it, order something warm even if you think you don't like it. Warm sake done properly is a different drink from warm sake done in a microwave, and most people's dislike is of the latter.",
              ja:"燗つけの道具と、それを気にかける人のいる店なら、好みでないと思っていても燗を頼むとよい。きちんとつけた燗は、電子レンジの燗とは別の飲み物である。多くの人が嫌っているのは後者である。",
              zh:"如果店裡有專門的溫酒器具，也有一位在意這件事的人，那就算你自認不愛，也點一杯溫的。認真溫過的清酒，和微波爐加熱的清酒是兩種飲料；多數人討厭的是後者。" } }
        ] },
        { t:"p", text:{
          en:"The habit: drink water alongside, in roughly equal volume. In Japanese this is <em>yawaragi-mizu</em>, softening water, and it is standard practice rather than a precaution — it keeps the palate working and makes a long evening possible. See <a href=\"health.html\">Alcohol &amp; the Body</a> for the rest of that argument, and <a href=\"serving.html\">Temperature &amp; Vessels</a> for what warm actually means.",
          ja:"習慣とは、水を、おおむね同量、傍らで飲むことである。日本語ではこれを和らぎ水という。用心ではなく作法である——舌を働かせ続け、長い夜を可能にする。その先の議論は<a href=\"health.html\">酒と身体</a>、燗とは実際に何かは<a href=\"serving.html\">温度と器</a>を参照。",
          zh:"那個習慣是：一邊喝水，份量大致相當。日文稱之為「和らぎ水」，這是常規做法而非防範措施——它讓味覺持續運作，也讓一個長夜成為可能。其餘的討論見<a href=\"health.html\">酒與身體</a>，至於「溫」到底是什麼，見<a href=\"serving.html\">溫度與酒器</a>。" } }
      ] },

    { t:"related", items:[
      { href:"label.html", why:{ en:"The six things on a bottle that are worth reading before you buy.", ja:"買う前に読む値打ちのある、瓶の上の六つ。", zh:"買之前值得看的六件事，都在瓶身上。" } },
      { href:"serving.html", why:{ en:"Temperature changes a sake more than any other single decision.", ja:"温度は他のいかなる一つの決めよりも酒を変える。", zh:"溫度對一支酒的改變，大過任何其他單一決定。" } },
      { href:"styles.html", why:{ en:"The families a bottle can belong to, and what each tastes like.", ja:"一本が属しうる系統と、それぞれの味。", zh:"一支酒可能屬於哪些系統，各自嘗起來如何。" } },
      { href:"faq.html", why:{ en:"The questions everyone asks in their first month, answered plainly.", ja:"最初の一月に誰もが尋ねる問いに、率直に答える。", zh:"每個人在頭一個月都會問的問題，直白回答。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- myths */
SAKE.pages["myths"] = {
  kicker: { en: "Foundations · 03", ja: "基礎 · 03", zh: "基礎 · 03" },
  title:  { en: "What People Get Wrong", ja: "よく誤解されること", zh: "常見的誤解" },
  jp: "誤解",
  lede: {
    en: "Almost everything commonly said about sake in English is half true, and the interesting part is usually the half that is missing. This page takes the fifteen statements you are most likely to hear, says what is actually the case, and — because a belief that survives for fifty years usually had a reason — says where each one came from. Several of them were entirely true in 1975.",
    ja: "英語で日本酒についてよく言われることのほとんどは半ば正しく、そして面白いのは、たいてい欠けているほうの半分である。この頁は、最も耳にしやすい十五の言い分を取り、実際にはどうであるかを述べ、そして——五十年を生き延びた思い込みには、たいてい理由がある——それぞれがどこから来たのかを述べる。そのいくつかは、一九七五年には完全に正しかった。",
    zh: "英文世界裡關於清酒的說法，幾乎每一句都只對一半，而有意思的通常是缺掉的那一半。本頁取出你最可能聽到的十五句話，說明實際情況如何，並且——一個能存活五十年的看法通常是有原因的——說明每一句話是從哪裡來的。其中好幾句，在一九七五年是完全正確的。"
  },
  body: [

    { t:"section", id:"what-it-is",
      title:{ en:"About what it is", ja:"それが何であるかについて", zh:"關於它是什麼" }, jp:"正体",
      body:[
        { t:"grid", cols:1, cells:[
          { k:{ en:"“Sake is rice wine.”", ja:"「日本酒は米のワインである。」", zh:"「清酒是米做的葡萄酒。」" }, jp:"米のワイン",
            v:{ en:"It is brewed from a grain, which makes it structurally a beer — and then it does something neither drink does.", ja:"穀物から醸されるという点では麦酒に近い——そして、そののち、いずれの酒もしないことをする。", zh:"它以穀物釀造，在結構上比較接近啤酒——然後它做了一件另外兩者都不做的事。" },
            d:{ en:"Wine ferments a fruit whose sugar is already sugar. Sake, like beer, starts from starch that has to be cut into sugar first. But beer does that in a separate mashing step and then ferments; sake does both at once, in the same tank, with the mould and the yeast working side by side for a month. It is its own third thing, and the reason the comparison persists is that the result is undistilled, sits near wine strength, and is drunk the way wine is. See <a href=\"compare.html\">Sake &amp; Other Drinks</a>.", ja:"葡萄酒は、糖がすでに糖である果実を醗酵させる。日本酒は麦酒と同じく、まず糖へ切らねばならぬデンプンから始まる。しかし麦酒はそれを別の糖化の段で行い、そののち醗酵させる。日本酒は同じ槽のうちで両方を同時に行い、麹菌と酵母が一月のあいだ並んで働く。それは第三のもの独自であり、この比較が生き延びるのは、結果が蒸留されず、葡萄酒に近い度数に座り、葡萄酒のように飲まれるからである。<a href=\"compare.html\">他の酒との比較</a>を見られたい。", zh:"葡萄酒發酵的是糖本來就已經是糖的水果。清酒和啤酒一樣，起點是必須先被切成糖的澱粉。但啤酒是在一個獨立的糖化步驟裡做完這件事，然後才發酵；清酒則在同一個槽裡同時做這兩件事，麴菌與酵母並肩工作一個月。它是自成一格的第三種東西；而這個比喻之所以歷久不衰，是因為成品未經蒸餾、度數接近葡萄酒，而且喝法也像葡萄酒。請見<a href=\"compare.html\">與其他酒的比較</a>。" } },
          { k:{ en:"“Sake has four ingredients.”", ja:"「日本酒の原料は四つである。」", zh:"「清酒只有四種原料。」" }, jp:"原料四つ",
            v:{ en:"A junmai does. The legal definition of seishu allows a good deal more, up to a ceiling most people have never heard of.", ja:"純米はそうである。清酒の法の定義はそれよりずっと多くを許し、その上限はほとんど誰も聞いたことがない。", zh:"純米酒是。但清酒的法律定義允許的東西多得多，而且有一個幾乎沒人聽過的上限。" },
            d:{ en:"Rice, rice kōji and water are required. Beyond them the liquor tax law permits distilled alcohol, shōchū, glucose and other sugars, organic acids, amino-acid salts, sake itself and sake lees — and caps the whole of that list, by weight, at half the weight of the rice. A junmai uses none of it. A honjōzō uses only the alcohol, and no more than a tenth of the rice weight. Futsūshu is where the rest of the list lives. Lactic acid, incidentally, is added to nearly every starter made by the fast method, which means the four-ingredient sentence is not quite true even of a great deal of junmai.", ja:"米、米麹、水は必須である。それを越えて酒税法は、アルコール、焼酎、ぶどう糖その他の糖類、有機酸、アミノ酸塩、清酒そのもの、そして清酒かすを許し、その一覧の全体を重量において米の重量の半分に抑える。純米はそのいずれも用いない。本醸造はアルコールのみを、米重量の十分の一を超えぬ範囲で用いる。残りの一覧が住むのは普通酒である。なお乳酸は、速醸で建てるほとんどすべての酛に加えられる。すなわち四つの原料という一文は、多くの純米についてすら、厳密には正しくない。", zh:"米、米麴與水是必要的。在此之外，酒稅法還允許：酒精、燒酎、葡萄糖與其他糖類、有機酸、胺基酸鹽、清酒本身，以及酒粕——並且把這整張清單的重量上限，訂在米重量的一半。純米酒完全不用這些。本釀造只用酒精，而且不超過米重量的十分之一。這張清單其餘的部分，住在普通酒裡。順帶一提，乳酸幾乎會被加進每一個以速釀法建立的酒母裡——也就是說，「四種原料」這句話，即使對大量的純米酒而言，也不完全成立。" } }
        ] },

        { t:"figure",
          caption:{
            en:"What the law lets into a bottle of seishu, measured against the weight of the rice. The tall bar is the rice and its kōji, which is the denominator for everything else. The second bar is the statutory ceiling for every other permitted material added together — half the rice weight, which is far more than most drinkers imagine and far more than almost any brewery uses. The mark inside it is the much tighter limit that applies the moment a bottle claims a special designation: added alcohol may not exceed a tenth of the rice weight. And a junmai is the third bar, which is empty.",
            ja:"法が清酒の一本のうちに許すものを、米の重量に対して測ったもの。高い棒は米とその麹であり、他のすべての分母である。二本目の棒は、許された他のあらゆる原料を合わせた法定の上限である。米の重量の半分であり、それはほとんどの飲み手が思うよりはるかに多く、そしてほとんどいかなる蔵が用いるよりもはるかに多い。そのなかの印は、瓶が特定名称を名乗った瞬間に当てはまる、はるかに厳しい制限である。加えるアルコールは米重量の十分の一を超えてはならない。そして純米は三本目の棒であり、それは空である。",
            zh:"法律允許進入一瓶清酒的東西，以米的重量為尺度衡量。最高的那條是米與它的麴，那是其他一切的分母。第二條是所有其他被允許原料加總後的法定上限——米重量的一半，遠比多數飲者所想像的多，也遠比幾乎任何一家酒藏實際使用的多。條內的那個標記，是一瓶酒宣稱特定名稱的那一刻起就適用的、嚴格得多的限制：添加的酒精不得超過米重量的十分之一。而純米是第三條，它是空的。" },
          svg: function (lang, L) {
            var W = 760, H = 290, X0 = 210, X1 = 700, MAX = 110;
            function x(v) { return X0 + v / MAX * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g;
            for (g = 0; g <= 100; g += 25) {
              s += '<line x1="' + x(g).toFixed(1) + '" y1="66" x2="' + x(g).toFixed(1) + '" y2="216" stroke="#EFEDE7"/>';
              s += '<text x="' + x(g).toFixed(1) + '" y="232" text-anchor="middle" font-size="9" fill="#B4AEA4">' + g + '%</text>';
            }
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "米の重量に対する割合" : lang === "zh" ? "以米的重量為基準的比例" : "AS A PERCENTAGE OF THE WEIGHT OF THE RICE") + '</text>';
            var rows = [
              { v:100, c:"#7C6B52", n:{ en:"Rice and rice kōji", ja:"米と米麹", zh:"米與米麴" },
                d:{ en:"required, and the denominator", ja:"必須であり、分母である", zh:"必要，也是分母" } },
              { v:50, c:"#CFC6B2", n:{ en:"Everything else the law allows", ja:"法が許す他のすべて", zh:"法律允許的其他一切" },
                d:{ en:"alcohol, shōchū, sugars, organic acids, amino-acid salts, sake and sake lees", ja:"アルコール、焼酎、糖類、有機酸、アミノ酸塩、清酒、清酒かす", zh:"酒精、燒酎、糖類、有機酸、胺基酸鹽、清酒、酒粕" } },
              { v:0, c:"#F3F1EB", n:{ en:"A junmai", ja:"純米", zh:"純米" },
                d:{ en:"none of it", ja:"そのいずれも用いない", zh:"一樣都不用" } }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = 92 + i * 46;
              if (rows[i].v > 0) {
                s += '<rect x="' + X0 + '" y="' + (ry - 11) + '" width="' + (x(rows[i].v) - X0).toFixed(1) + '" height="22" fill="' + rows[i].c + '"/>';
              } else {
                s += '<rect x="' + X0 + '" y="' + (ry - 11) + '" width="' + (x(50) - X0).toFixed(1) + '" height="22" fill="none" stroke="#DED8CB" stroke-dasharray="3 3"/>';
                s += '<text x="' + (X0 + 12) + '" y="' + (ry + 4) + '" font-size="10" fill="#B4AEA4">' +
                     (lang === "ja" ? "空" : lang === "zh" ? "空的" : "empty") + '</text>';
              }
              if (i === 1) {
                s += '<line x1="' + x(10).toFixed(1) + '" y1="' + (ry - 18) + '" x2="' + x(10).toFixed(1) + '" y2="' + (ry + 11) + '" stroke="#7C6B52"/>';
                s += '<text x="' + (x(10) + 6).toFixed(1) + '" y="' + (ry - 22) + '" font-size="9" fill="#6B655C">' +
                     (lang === "ja" ? "特定名称のアルコール上限 10%" : lang === "zh" ? "特定名稱酒的酒精上限 10%" : "10% — the special-designation alcohol ceiling") + '</text>';
              }
              s += '<text x="30" y="' + (ry - 2) + '" font-size="10.5" fill="#201E1B">' + L(rows[i].n) + '</text>';
              s += '<text x="30" y="' + (ry + 10) + '" font-size="8.5" fill="#A39C91">' + L(rows[i].d) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "五十パーセントの上限は酒税法の清酒の定義による。十パーセントの線は清酒の製法品質表示基準による。"
                  : lang === "zh" ? "百分之五十的上限出自酒稅法對清酒的定義；百分之十那條線出自《清酒之製法品質標示基準》。"
                  : "The 50% ceiling comes from the liquor tax law's definition of seishu; the 10% line comes from the labelling standard.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"grid", cols:1, cells:[
          { k:{ en:"“Nigori is unfiltered sake.”", ja:"「にごりは濾していない酒である。」", zh:"「濁酒是沒有過濾的清酒。」" }, jp:"にごり",
            v:{ en:"It is coarsely filtered. Genuinely unfiltered rice alcohol is doburoku, and doburoku is legally not seishu at all.", ja:"粗く濾したものである。本当に濾していない米の酒はどぶろくであり、どぶろくは法の上でそもそも清酒ではない。", zh:"它是粗濾過的。真正沒有過濾的米酒是濁醪（どぶろく），而濁醪在法律上根本不算清酒。" },
            d:{ en:"The statutory definition of seishu contains the word <em>koshita</em>, strained: something must be passed through a cloth or a mesh for the result to be sake at all. A nigori is pressed through a coarse enough mesh that rice solids come with it, which is a deliberate choice rather than an omission. The distinction matters because it is the single line the law draws between a commercial product and a farmhouse one, and it is why the home-brewing question on this site has the answer it has. See <a href=\"styles.html\">Styles &amp; Types</a> and <a href=\"homebrew.html\">Making Your Own</a>.", ja:"清酒の法の定義には「こしたもの」という語がある。何かが布か網を通されねば、その結果はそもそも日本酒ではない。にごりは、米の固形が通るほど粗い網を通して搾られたものであり、それは省略ではなく意図した択びである。この区別が重みを持つのは、それこそ法が商いの産物と農家の産物とのあいだに引く唯一の線であり、本サイトの自家醸造の問いがあの答えを持つ理由だからである。<a href=\"styles.html\">酒の型</a>と<a href=\"homebrew.html\">自分で造る</a>を見られたい。", zh:"清酒的法定定義裡有「こしたもの（經過濾）」這個詞：必須讓某個東西通過布或網，成品才算得上是清酒。濁酒是用夠粗的網壓濾出來的，所以米的固形物會跟著過來——那是刻意的選擇，不是省略。這個區別之所以重要，因為它正是法律在「商業產品」與「農家產品」之間劃下的唯一一條線，也是本站關於自釀那一題會得到那個答案的原因。請見<a href=\"styles.html\">風格與類型</a>與<a href=\"homebrew.html\">自己釀</a>。" } },
          { k:{ en:"“All sake is Japanese.”", ja:"「日本酒はすべて日本のものである。」", zh:"「所有清酒都是日本的。」" }, jp:"産地",
            v:{ en:"The drink is now brewed in a dozen or more countries. The word for it is the thing that is contested.", ja:"この酒はいま十を超える国で醸されている。争われているのは、その名のほうである。", zh:"這種酒現在在十幾個以上的國家釀造。有爭議的是它的名字。" },
            d:{ en:"Under Japanese rules the geographical indication <em>Nihonshu</em> is reserved for sake made in Japan from Japanese rice, so a bottle brewed in Oregon or Oslo may be sake in English and may not be nihonshu. Whether that distinction survives contact with a generation of drinkers who meet the drink abroad first is one of the open questions of the next twenty years. See <a href=\"world.html\">Sake Beyond Japan</a>.", ja:"日本の規則のもとでは、地理的表示「日本酒」は日本の米から日本で造られた酒に限られる。ゆえにオレゴンやオスロで醸された一本は、英語では sake でありうるが、日本酒ではありえない。この区別が、外国で先にこの酒に出会う世代の飲み手との接触を生き延びるか否かは、これからの二十年の開かれた問いの一つである。<a href=\"world.html\">日本の外の日本酒</a>を見られたい。", zh:"依日本的規則，地理標示「日本酒」保留給在日本、以日本米釀造的酒；因此一支在奧勒岡或奧斯陸釀的酒，在英文裡可以是 sake，卻不能是「日本酒」。這個區別能不能在「先在國外遇見這種酒」的一整個世代面前存活下來，是未來二十年開放的問題之一。請見<a href=\"world.html\">日本以外的清酒</a>。" } }
        ] }
      ] },

    { t:"section", id:"temperature-age",
      title:{ en:"About temperature and age", ja:"温度と齢について", zh:"關於溫度與年紀" }, jp:"温度と齢",
      body:[
        { t:"grid", cols:1, cells:[
          { k:{ en:"“Sake should be served hot.”", ja:"「日本酒は熱くして出すものである。」", zh:"「清酒應該燙熱了喝。」" }, jp:"熱燗",
            v:{ en:"Warming is a real and precise tradition. It suits some sake and destroys others, and the ones it destroys are the ones most often warmed abroad.", ja:"燗は実在し、しかも精緻な伝統である。ある酒には適い、ある酒を壊す。そして壊されるほうこそ、国外で最もよく温められている。", zh:"溫酒是一個真實而且精確的傳統。它適合某些酒、會毀掉另一些；而被毀掉的那些，正是國外最常被拿去加熱的。" },
            d:{ en:"Japanese has separate names for at least six serving temperatures, and a junmai or a kimoto at 40 °C is one of the best things this drink does. An aromatic ginjō at the same temperature loses the aroma it was made for and gains a burn. The belief travelled because what was exported from the 1960s onward was cheap futsūshu, which heat conveniently covers. See <a href=\"serving.html\">Temperature &amp; Vessels</a>.", ja:"日本語は少なくとも六つの供する温度に別々の名を持つ。四十度の純米や生酛は、この飲み物がなしうる最良のものの一つである。同じ温度の香り高い吟醸は、そのために造られた香りを失い、代わりに灼けを得る。この思い込みが旅をしたのは、一九六〇年代以降に輸出されたものが安い普通酒であり、熱がそれを都合よく覆ったからである。<a href=\"serving.html\">温度と器</a>を見られたい。", zh:"日語為至少六種供酒溫度各有名字，而四十度的純米或生酛，是這款酒所能做到最好的事情之一。同樣溫度下的香氣型吟釀，會失去它被釀出來的那股香氣，換來一陣灼燒。這個看法之所以流傳，是因為一九六〇年代之後出口的是廉價普通酒，而加熱正好把它蓋住。請見<a href=\"serving.html\">溫度與酒器</a>。" } },
          { k:{ en:"“Sake doesn't keep.”", ja:"「日本酒は保たない。」", zh:"「清酒放不住。」" }, jp:"保存",
            v:{ en:"A pasteurised junmai, unopened and out of the light, is stable for a year or more and frequently improves. Unpasteurised sake is the exception, and it is the one that travelled.", ja:"火入れした純米は、開けず、光を避ければ一年以上安んじ、しばしば良くなる。生酒は例外であり、そして旅をしたのはそちらである。", zh:"一支經過火入、未開封、避光保存的純米，穩定一年以上，而且常常會變得更好。生酒才是例外——而偏偏旅行的是它。" },
            d:{ en:"Two separate things get collapsed into this sentence. Unpasteurised sake really is fragile and really does need continuous refrigeration. And the date printed on the back is a bottling date, not an expiry, which means a bottle from eighteen months ago looks alarming to anyone reading it as a use-by. Both problems are solved by reading the label properly. See <a href=\"storage.html\">Buying &amp; Storage</a>.", ja:"この一文には二つの別のことが押し込められている。生酒は実際に脆く、実際に絶えざる冷蔵を要する。そして裏に刷られた日付は詰めた日であって期限ではない。ゆえに一年半前の一本は、それを消費期限として読む者には危うく見える。いずれの問いも、札を正しく読むことで解ける。<a href=\"storage.html\">買い方と保存</a>を見られたい。", zh:"這句話把兩件不同的事壓成了一句。生酒確實脆弱，也確實需要全程冷藏。而印在背標上的日期是裝瓶日期，不是有效期限——所以一支一年半前的酒，對把它讀成保存期限的人來說看起來很嚇人。這兩個問題，都靠好好讀標籤就能解決。請見<a href=\"storage.html\">購買與保存</a>。" } },
          { k:{ en:"“Sake must be drunk fresh — older is worse.”", ja:"「日本酒は新しいうちに。古いものは劣る。」", zh:"「清酒要趁新鮮喝，越舊越差。」" }, jp:"熟成",
            v:{ en:"True of aromatic ginjō and of nama. Not true as a general rule, and there is an entire category built on the opposite.", ja:"香り高い吟醸と生については正しい。一般の則としては正しくなく、その逆の上に立つ区分が丸ごと存在する。", zh:"對香氣型吟釀與生酒而言是對的。作為通則並不對，而且有一整個類別正是建立在相反的前提上。" },
            d:{ en:"Koshu — deliberately aged sake — is amber, tastes of caramel and dried fruit and mushroom, and is a recognised style with its own market and its own competitions. What ages well is the opposite of what is fashionable: full-bodied junmai and kimoto, not the delicate aromatics. The rule of thumb is that a sake made to smell of pear should be drunk before the pear goes, and a sake made to taste of rice has time. See <a href=\"aging.html\">Aged Sake</a>.", ja:"古酒——意図して寝かせた酒——は琥珀色であり、カラメルと干した果実と茸の味がし、自らの市場と自らの品評会を持つ確たる型である。よく熟れるものは、流行っているものの逆である。繊細な香りのものではなく、豊かな純米と生酛である。目安はこうである。洋梨の香りのために造られた酒は、その洋梨が消える前に飲むこと。米の味のために造られた酒には、時がある。<a href=\"aging.html\">熟成酒</a>を見られたい。", zh:"古酒——刻意陳放的清酒——是琥珀色的，嘗起來有焦糖、果乾與菇蕈味，是一個有自己的市場與自己的評鑑會的正式風格。陳放得好的，恰恰是流行的反面：厚實的純米與生酛，而不是纖細的香氣型。一個簡單的判準是：為了聞起來像洋梨而釀的酒，要趁那股洋梨還在時喝掉；為了嘗起來像米而釀的酒，有的是時間。請見<a href=\"aging.html\">熟成酒</a>。" } },
          { k:{ en:"“The colder the better.”", ja:"「冷たいほど良い。」", zh:"「越冰越好。」" }, jp:"冷やしすぎ",
            v:{ en:"Cold hides faults, and it hides everything else with them.", ja:"冷たさは欠点を隠し、そしてそれとともに他のすべても隠す。", zh:"低溫會藏住缺點，也會連同其他一切一起藏起來。" },
            d:{ en:"Below about 8 °C most aromatic compounds stop volatilising, which is exactly why a mediocre bottle improves when it is very cold and a good one does not. If you are drinking something you paid for, let the glass come up five degrees and taste it again; if it was better cold, that is useful information about the bottle. See <a href=\"tasting.html\">Tasting</a>.", ja:"およそ八度を下回ると、香りの成分の多くは揮発をやめる。凡庸な一本がよく冷えると良くなり、良い一本がそうならないのは、まさにそのためである。代を払ったものを飲んでいるのであれば、杯を五度ほど上げてもう一度味わわれたい。冷たいほうが良かったのであれば、それはその瓶についての有用な報せである。<a href=\"tasting.html\">利き方</a>を見られたい。", zh:"低於大約八度，多數香氣化合物就停止揮發——這正是為什麼一支平庸的酒冰透了會變好喝，而一支好酒不會。如果你喝的是自己花錢買的，讓杯子回溫個五度再嘗一次；如果冰的比較好喝，那是關於這瓶酒的一條有用情報。請見<a href=\"tasting.html\">品飲</a>。" } }
        ] }
      ] },

    { t:"section", id:"quality",
      title:{ en:"About quality", ja:"良し悪しについて", zh:"關於好壞" }, jp:"品質",
      body:[
        { t:"grid", cols:1, cells:[
          { k:{ en:"“Daiginjō is the best sake.”", ja:"「大吟醸が最上の酒である。」", zh:"「大吟釀是最好的清酒。」" }, jp:"大吟醸",
            v:{ en:"It is the most expensive to make. That is a statement about cost, and the label is honest about it — it is a statement about polishing, not about pleasure.", ja:"それは造るのに最も費えのかかる酒である。それは費用についての言明であり、札はその点について正直である。精米についての言明であって、楽しみについての言明ではない。", zh:"它是製造成本最高的。那是一句關於成本的陳述，而酒標對此很誠實——它說的是精米，不是愉悅。" },
            d:{ en:"The designation is defined by a polishing ratio and nothing else. A daiginjō is lighter, more aromatic and more delicate than the same brewery's junmai, and whether that is better depends entirely on what is on the table. Against grilled fish, a warm kimoto will beat a chilled daiginjō in front of most panels and most people. The premium ladder is a ladder of cost, and the flattest part of the quality curve is above it. See <a href=\"value.html\">What Money Buys</a>.", ja:"この特定名称は精米歩合によってのみ定められ、他の何によっても定められない。大吟醸は同じ蔵の純米より軽く、香り高く、繊細である。それが良いか否かは、卓の上に何があるかにまったく依る。焼いた魚に対しては、温めた生酛が冷やした大吟醸を、多くの審査員と多くの人の前で上回る。上位の梯子とは費用の梯子であり、質の曲線が最も平らなのは、その上である。<a href=\"value.html\">代が買うもの</a>を見られたい。", zh:"這個特定名稱只由精米步合定義，別無其他。大吟釀比同一家酒藏的純米更輕盈、更香、更纖細；而那是不是「更好」，完全取決於桌上擺的是什麼。面對烤魚，一杯溫熱的生酛在多數評審與多數人面前都會贏過冰鎮的大吟釀。高階的階梯是一座成本的階梯，而品質曲線最平的那一段，就在它上面。請見<a href=\"value.html\">錢買到什麼</a>。" } },
          { k:{ en:"“The polishing ratio tells you the quality.”", ja:"「精米歩合が質を告げる。」", zh:"「精米步合告訴你品質。」" }, jp:"精米歩合",
            v:{ en:"It tells you the cost with considerable accuracy and the quality with none.", ja:"それは費用をかなりの正確さで告げ、質については何も告げない。", zh:"它相當準確地告訴你成本，關於品質則什麼也沒說。" },
            d:{ en:"Because the figure is legally required for the special designations, it became the one number everybody compares, and a generation of breweries competed downward on it. The number is real: a 35% bottle genuinely consumed nearly four times the brown rice of a 70% one. But past about 50% the additional refinement is small, the loss of the rice's own character is not, and several serious houses have spent the last decade deliberately polishing less. See <a href=\"milling.html\">Polishing the Grain</a>.", ja:"この数は特定名称について法が求めるものであるがゆえに、誰もが比べる唯一の数となり、一世代の蔵がそれを下へ競った。数そのものは実在する。三十五パーセントの一本は、七十パーセントの一本の四倍近い玄米を実際に費やしている。しかしおよそ五十を過ぎると、増える洗練は小さく、失われる米自身の性格は小さくない。そしていくつもの真面目な家が、この十年、意図して磨かぬ側へ歩いてきた。<a href=\"milling.html\">精米</a>を見られたい。", zh:"因為這個數字是特定名稱酒法定必須標示的，它就變成了所有人拿來比較的那一個數字，而整整一個世代的酒藏往下競賽。這個數字本身是真的：一支 35% 的酒確實耗掉了 70% 那支將近四倍的玄米。但過了大約 50% 之後，增加的精緻度很小，而失去的米自身性格並不小；已有數家認真的酒藏，在過去十年刻意往「磨得少一點」的方向走。請見<a href=\"milling.html\">精米</a>。" } },
          { k:{ en:"“Added alcohol means cheap sake.”", ja:"「アルコール添加は安酒の徴である。」", zh:"「添加酒精代表這是廉價酒。」" }, jp:"アル添",
            v:{ en:"It means one of two completely different things, and the label tells you which.", ja:"それはまったく異なる二つのいずれかを意味し、札がどちらであるかを告げる。", zh:"它代表兩件完全不同的事之一，而酒標會告訴你是哪一件。" },
            d:{ en:"A honjōzō or an alcohol-added daiginjō is limited to a tenth of the rice weight, and at that level the addition is a technique: it draws aroma out of the mash at pressing, lightens the body and makes the sake firmer. Volume futsūshu uses the same permission at a scale that is an extender. The word on the label separates them completely, which is why the argument about additives is really an argument about whether people read labels. See <a href=\"batch.html\">Arithmetic of a Batch</a>.", ja:"本醸造やアルコール添加の大吟醸は米重量の十分の一に限られ、その水準において添加は技である。搾りにおいて醪から香りを引き出し、体を軽くし、酒を締める。量を売る普通酒は、同じ許しを嵩増しの規模で用いる。札の上の語がその二つを完全に分かつ。添加物をめぐる論が、実は人が札を読むか否かをめぐる論である理由がこれである。<a href=\"batch.html\">一仕込みの算術</a>を見られたい。", zh:"本釀造或添加酒精的大吟釀，受限於米重量的十分之一；在那個量級上，添加是一種技術：它在壓榨時把香氣從醪裡拉出來、讓酒體變輕、也讓酒更緊實。走量的普通酒用的是同一條許可，只是規模上等同於增量。酒標上的那個詞把兩者徹底分開——這正是為什麼關於添加物的爭論，實際上是關於人們讀不讀酒標的爭論。請見<a href=\"batch.html\">一次仕込的算術</a>。" } },
          { k:{ en:"“Junmai is the traditional style.”", ja:"「純米こそ伝統の型である。」", zh:"「純米才是傳統的作法。」" }, jp:"柱焼酎",
            v:{ en:"Adding distilled spirit to a mash is documented from the seventeenth century. The category called junmai is a twentieth-century construction.", ja:"醪に蒸留酒を加えることは十七世紀から記録されている。純米という区分は二十世紀の構築物である。", zh:"往醪裡加蒸餾酒，從十七世紀就有記載。而叫做「純米」的這個類別，是二十世紀的建構。" },
            d:{ en:"<em>Hashira-jōchū</em>, pillar shōchū, was added to Edo-period mash to stabilise it and to lift the aroma, for exactly the reasons a honjōzō adds alcohol today. What is genuinely modern is the naming: junmai exists as a legal category because the grading system was abolished in 1992 and something had to replace it. The junmai revival is a real and valuable movement, and it is a movement rather than a survival. See <a href=\"history.html\">History</a>.", ja:"柱焼酎は、江戸の醪に、これを安んじ香りを上げるために加えられた。今日の本醸造がアルコールを加えるのとまったく同じ理由である。真に近代のものは名づけのほうである。純米が法の区分として在るのは、一九九二年に級別が廃され、それに代わる何かが要されたからである。純米の復興は実在し、値打ちのある運動であり、そして生き残りではなく運動である。<a href=\"history.html\">歴史</a>を見られたい。", zh:"「柱燒酎」被加進江戶時代的醪裡，用來讓它穩定、並提起香氣——理由與今天本釀造添加酒精完全相同。真正屬於現代的是命名這件事：純米之所以作為一個法定類別存在，是因為級別制度在一九九二年廢止，必須有東西來取代它。純米的復興是真實而有價值的運動——而它是一場運動，不是一份倖存。請見<a href=\"history.html\">歷史</a>。" } }
        ] }
      ] },

    { t:"section", id:"body",
      title:{ en:"About what it does to you", ja:"体に及ぼすことについて", zh:"關於它對身體做了什麼" }, jp:"体",
      body:[
        { t:"grid", cols:1, cells:[
          { k:{ en:"“Sake is strong.”", ja:"「日本酒は強い。」", zh:"「清酒很烈。」" }, jp:"度数",
            v:{ en:"It sits at wine strength. The serving does not.", ja:"度数は葡萄酒のあたりに座る。一人前の量はそうではない。", zh:"它的濃度落在葡萄酒的位置。它的份量不是。" },
            d:{ en:"Fifteen or sixteen per cent, a little above most wine and far below any spirit. But the customary serving is a gō — 180 mL, the capacity of a masu and of the flask a restaurant brings — and that carries about half again as much pure alcohol as a restaurant glass of wine. Nothing about the liquid is unusually strong; the cup is. See <a href=\"health.html\">Alcohol &amp; the Body</a>.", ja:"十五度か十六度であり、多くの葡萄酒よりわずかに上、いかなる蒸留酒よりもはるかに下である。しかし習いの一人前は一合——百八十ミリリットル、枡の容量であり、店が運んでくる徳利の容量である——であり、それは店で出る葡萄酒の一杯のおよそ一倍半の純アルコールを運ぶ。液に際立って強いところはない。器のほうである。<a href=\"health.html\">酒と体</a>を見られたい。", zh:"十五或十六度，略高於多數葡萄酒，遠低於任何蒸餾酒。但習慣上的一份是一合——一百八十毫升，一個枡的容量，也是餐廳端上來那支德利的容量——所含的純酒精約是餐廳一杯葡萄酒的一倍半。這液體沒有什麼特別烈的地方，是杯子。請見<a href=\"health.html\">酒與身體</a>。" } },
          { k:{ en:"“Sake gives a worse hangover.”", ja:"「日本酒は悪酔いする。」", zh:"「清酒比較容易宿醉。」" }, jp:"悪酔い",
            v:{ en:"There is no good evidence that it does, and there is a very good explanation for why people believe it.", ja:"そうであるという確かな証しはない。そして人がそう信じる理由については、きわめて良い説明がある。", zh:"沒有可靠證據支持這個說法，而人們為什麼會這樣相信，倒是有一個非常合理的解釋。" },
            d:{ en:"Hangover severity tracks the total quantity of alcohol far more strongly than the drink it arrived in. Sake in Japan is frequently the second or third drink of an evening, poured for you by somebody else, in a cup that is refilled before it empties, so the quantity is genuinely hard to track. If you want to test the belief, drink a measured amount of sake and nothing else. This is a topic where honest self-observation beats folklore, and where drinking less is the only intervention that reliably works.", ja:"二日酔いの重さは、それがどの酒で来たかよりも、アルコールの総量にはるかに強く従う。日本において日本酒は、しばしば一夜の二杯目か三杯目であり、他人に注がれ、空になる前に満たされる杯で飲まれる。ゆえに量は実際に追いにくい。この思い込みを試したいのであれば、量を測った日本酒だけを飲まれたい。ここは、言い伝えよりも正直な自己観察が勝つ主題であり、そして確かに効く手立ては、量を減らすことだけである。", zh:"宿醉的嚴重程度，跟「酒精總量」的關聯遠強於「它是以哪一種酒的形式進來的」。在日本，清酒常常是一個晚上的第二攤或第三攤，由別人替你斟，而且杯子在空掉之前就被續滿——所以量真的很難追蹤。如果你想驗證這個說法，就只喝一個量測過份量的清酒、其他什麼都不喝。這是一個誠實的自我觀察勝過民間傳說的題目；而唯一可靠有效的介入，是喝少一點。" } },
          { k:{ en:"“Sake is gluten-free.”", ja:"「日本酒はグルテンを含まない。」", zh:"「清酒不含麩質。」" }, jp:"グルテン",
            v:{ en:"Sake is made from rice, rice kōji and water, none of which contain gluten. That is an ingredient statement, not a certification.", ja:"日本酒は米、米麹、水から造られ、そのいずれもグルテンを含まない。それは原料についての言明であって、認証ではない。", zh:"清酒以米、米麴與水製成，這三樣都不含麩質。那是一句關於原料的陳述，不是一張認證。" },
            d:{ en:"Most bottles carry no gluten claim at all, because Japanese labelling does not require one for a product with no wheat ingredient. Anyone who needs certainty for medical reasons should look for an explicit statement or a certification rather than reasoning from the recipe, and should be aware that a small number of products — some fermented seasonings, some flavoured or blended drinks sold beside sake — are not made the same way.", ja:"ほとんどの瓶はグルテンについて何も謳っていない。小麦の原料を含まぬ製品について、日本の表示はそれを求めないからである。医の理由で確かさを要する者は、献立から推すのではなく、明示の記載か認証を探されたい。そして、日本酒の傍らで売られる調味料や、味をつけた飲料のいくつかは、同じようには造られていないことに留意されたい。", zh:"多數酒瓶上完全沒有關於麩質的標示，因為對不含小麥原料的產品，日本的標示規範並不要求。任何因醫療理由而需要確定答案的人，應該尋找明確的標示或認證，而不是從配方推論；也請留意，擺在清酒旁邊販售的一些發酵調味料與調味飲品，並不是用同一種方式做出來的。" } }
        ] },

        { t:"note", title:{ en:"One that is not a myth", ja:"誤解ではないもの", zh:"有一件事不是誤解" }, text:{
          en:"Drinking less is better for you than drinking more, and no amount of craft, terroir or brewing history changes that. Everything on this site is written for people who have decided to drink; none of it is an argument that they should. If a page here makes something sound worth trying and you would rather not, that is a complete answer, and it is an ordinary one at every table described on this site. See <a href=\"health.html\">Alcohol &amp; the Body</a>.",
          ja:"少なく飲むことは、多く飲むことよりも体に良い。いかなる技も、風土も、醸造の歴史も、それを変えはしない。本サイトのすべては、飲むと決めた人々のために書かれている。そのいずれも、飲むべきであるという論ではない。ここのある頁が何かを試す値打ちのあるもののように聞こえさせ、それでも飲みたくないのであれば、それは完全な答えであり、本サイトに記されたいずれの卓においても平凡な答えである。<a href=\"health.html\">酒と体</a>を見られたい。",
          zh:"喝少一點對你比較好，喝多一點比較不好；再多的工藝、風土或釀造史都不會改變這件事。本站的一切，是為已經決定要喝的人而寫的；其中沒有任何一句是在主張你應該喝。如果這裡的某一頁讓某樣東西聽起來值得一試，而你寧可不要，那就是一個完整的答案，而且在本站描述的每一張餐桌上都再平常不過。請見<a href=\"health.html\">酒與身體</a>。" } }
      ] },

    { t:"related", items:[
      { href:"faq.html", why:{ en:"The same ground as questions rather than corrections.", ja:"同じ範囲を、訂正ではなく問いとして。", zh:"同樣的內容，用問題而不是更正的形式。" } },
      { href:"classification.html", why:{ en:"What the words on the label are legally required to mean.", ja:"札の語が法的に意味せねばならぬこと。", zh:"酒標上的字在法律上必須代表什麼。" } },
      { href:"start.html", why:{ en:"If you would rather build the picture forwards.", ja:"絵を前から組み立てたいのであれば。", zh:"如果你比較想從正面把整幅圖建起來。" } },
      { href:"sources.html", why:{ en:"How to check any of this without taking our word for it.", ja:"これらのいずれも、私たちの言を信じずに確かめる方法。", zh:"不必信我們的說法，自己查證的方法。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- history */
SAKE.pages["history"] = {
  kicker: { en: "Foundations · 04", ja: "基礎 · 04", zh: "基礎 · 04" },
  title:  { en: "History", ja: "歴史", zh: "歷史" },
  jp: "日本酒の歩み · a chronology",
  lede: {
    en: "Sake has been made in the Japanese archipelago for at least two thousand years, but almost everything a modern drinker recognises — clear liquid, polished rice, pure yeast, pasteurisation, the winter brewing season — arrived in identifiable moments that can be dated. What follows is that chronology, from chewed rice to the UNESCO list, with the technical breakthroughs set in their political and economic context.",
    ja: "日本列島で酒が造られてきた歴史は少なくとも二千年に及ぶ。しかし、現代の飲み手が日本酒と認識するもの——澄んだ液体、精白した米、純粋培養酵母、火入れ、冬季の造り——のほぼすべては、年代を特定できる契機とともに現れた。以下は、口噛みの酒からユネスコ登録までの年代記であり、技術的な画期を政治・経済の文脈のなかに置き直したものである。",
    zh: "日本列島釀酒的歷史至少有兩千年，但現代飲者所認得的一切——澄清的液體、精白的米、純粹培養酵母、火入殺菌、冬季釀造季——幾乎都出現在可以標定年代的具體時刻。以下即為這份年表，自口嚼之酒到聯合國教科文組織名錄，並將技術突破放回其政治與經濟脈絡之中。"
  },
  body: [
    { t:"section", id:"beginnings",
      title:{ en:"Before writing", ja:"文字以前", zh:"文字之前" }, jp:"縄文・弥生",
      body:[
        { t:"p", text:{
          en:"Alcohol precedes rice in Japan. Jōmon-period sites have yielded pots with residues consistent with fermented wild fruit — <em>yamabudō</em> grapes among them — and a cluster of vessels at the Sannai-Maruyama site in Aomori has long been read as brewing equipment, though the evidence is circumstantial. What matters is that fermentation was not a foreign import: it was already understood when rice arrived.",
          ja:"日本において酒は米に先行する。縄文期の遺跡からは、山葡萄などの野生果実の発酵痕跡と整合する土器が出土しており、青森・三内丸山遺跡の一群の土器は長く醸造具と読まれてきた——ただし状況証拠にとどまる。重要なのは、発酵が外来の技術ではなかったという点である。米が到来したとき、発酵はすでに理解されていた。",
          zh:"在日本，酒早於米。繩文時期遺址出土的陶器殘留物與野生果實（如山葡萄）發酵相符，青森三內丸山遺址的一組容器長期被解讀為釀造器具，儘管證據屬旁證性質。關鍵在於：發酵並非外來輸入，稻米抵達之時，發酵早已為人所知。" } },
        { t:"p", text:{
          en:"Wet rice cultivation reached Kyushu around the 5th–3rd century BCE and spread north. With it came the raw material for a grain-based alcohol — and the problem that defines all of sake's technical history: grain contains starch, not sugar, and yeast cannot eat starch. Every subsequent advance is a better answer to that one question.",
          ja:"水稲耕作は紀元前五〜三世紀頃に九州へ達し、北上した。それとともに穀物酒の原料が現れ、同時に日本酒の技術史全体を規定する問題が生じた——穀物にあるのはデンプンであって糖ではなく、酵母はデンプンを食べられない。以後のあらゆる進歩は、この一つの問いへのより良い答えである。",
          zh:"水稻栽培約於西元前五至三世紀傳入九州並北上。隨之而來的是穀物酒的原料，以及界定日本酒整部技術史的問題：穀物含的是澱粉而非糖，酵母無法直接利用澱粉。此後每一項進展，都是對這一個問題更好的回答。" } },
        { t:"panel", tint:"rice", title:{en:"The first answer: saliva",ja:"最初の答え——唾液",zh:"最初的答案：唾液"}, body:[
          { t:"p", text:{
            en:"<em>Kuchikamizake</em> (口噛み酒), “chewed-mouth sake”, is the oldest documented method. Rice is chewed and spat into a vessel; ptyalin — salivary amylase — breaks starch into maltose, and airborne wild yeast does the rest. The <em>Ōsumi no Kuni Fudoki</em> (early 8th century) describes villagers gathering to chew rice and water together, leaving the mixture until it “smelled of sake”, then drinking it. The practice was ritual as much as culinary and was, by most accounts, performed by unmarried women — a thread that connects to the sacred women brewers, <em>miko</em>, of shrine tradition.",
            ja:"口噛み酒は、記録に残る最も古い手法である。米を噛んで容器に吐き入れると、唾液アミラーゼ（プチアリン）がデンプンを麦芽糖に分解し、空中の野生酵母が残りを担う。八世紀初頭の『大隅国風土記』には、村人が集まって米と水を噛み、「酒の香りがする」まで置いてから飲んだ、とある。この行為は料理であると同時に儀礼であり、多くの伝えでは未婚の女性が担った——神社伝承の巫女＝聖なる醸し手へとつながる糸である。",
            zh:"口嚼酒（口噛み酒）是有文獻記載最古老的方法。將米咀嚼後吐入容器，唾液澱粉酶把澱粉分解為麥芽糖，空氣中的野生酵母完成其餘。八世紀初的《大隅國風土記》記載村民聚集共嚼米與水，靜置至「發出酒香」後飲用。此舉既是飲食也是儀禮，多數記載指出由未婚女性執行——這條線索連向神社傳統中的巫女，即神聖的釀者。" } }
        ] }
      ]
    },

    { t:"section", id:"ancient",
      title:{ en:"Court and shrine: 700–1200", ja:"宮廷と社寺：700–1200", zh:"宮廷與社寺：700–1200" }, jp:"奈良・平安",
      body:[
        { t:"timeline", items:[
          { year:"c. 713", era:{en:"Nara",ja:"奈良",zh:"奈良"}, eraJp:"奈良時代",
            title:{en:"Ōsumi no Kuni Fudoki records chewed sake",ja:"『大隅国風土記』が口噛み酒を記す",zh:"《大隅國風土記》記載口嚼酒"}, jp:"大隅国風土記",
            text:{en:"The earliest surviving description of a Japanese brewing method — communal chewing, ambient fermentation, immediate consumption.",ja:"日本の醸造法に関する現存最古の記述。共同での咀嚼、常在菌による発酵、即時の飲用。",zh:"現存最早關於日本釀造方法的描述：共同咀嚼、環境發酵、即刻飲用。"} },
          { year:"c. 715", era:{en:"Nara",ja:"奈良",zh:"奈良"}, eraJp:"奈良時代",
            title:{en:"First record of mould-based brewing",ja:"カビによる醸造の初出",zh:"以黴菌釀造的最早記載"}, jp:"播磨国風土記",
            text:{en:"The <em>Harima no Kuni Fudoki</em> notes that steamed rice offered at a shrine grew mould, and that sake was brewed from it. This single sentence is the documentary birth of kōji brewing in Japan — the technique that makes everything else possible.",ja:"『播磨国風土記』は、神社に供えた乾飯にカビが生え、それを用いて酒を醸したと記す。この一文が、日本における麹醸造の文献上の誕生である——以後のすべてを可能にする技術。",zh:"《播磨國風土記》記載供奉神社的乾飯生黴，並以之釀酒。這一句話便是日本麴菌釀造在文獻上的誕生——使此後一切成為可能的技術。"} },
          { year:"689", era:{en:"Asuka",ja:"飛鳥",zh:"飛鳥"}, eraJp:"飛鳥時代",
            title:{en:"The Bureau of Sake is established",ja:"造酒司の設置",zh:"設立造酒司"}, jp:"造酒司（さけのつかさ）",
            text:{en:"An office of the imperial household charged with brewing for court ceremony. Sake becomes an instrument of the state — produced, measured and distributed under administrative rule rather than village custom.",ja:"宮中の儀礼用の酒を醸す令制官司。酒は村落の慣習ではなく行政の管理下で製造・計量・分配される、国家の装置となる。",zh:"隸屬宮內、負責宮廷儀式用酒的官署。酒自此成為國家的工具——在行政規範而非村落習俗下生產、計量與分配。"} },
          { year:"c. 712–720", era:{en:"Nara",ja:"奈良",zh:"奈良"}, eraJp:"奈良時代",
            title:{en:"Sake enters mythology",ja:"神話のなかの酒",zh:"酒進入神話"}, jp:"古事記・日本書紀",
            text:{en:"The <em>Kojiki</em> and <em>Nihon Shoki</em> record Susanoo defeating the eight-headed serpent Yamata-no-Orochi by setting out eight vats of <em>yashiori no sake</em> — sake refined eight times — and killing the beast while it slept. The story fixes sake as a substance of both intoxication and divine agency.",ja:"『古事記』『日本書紀』は、須佐之男命が八塩折之酒（八度醸し重ねた酒）を八つの槽に満たしてヤマタノオロチを酔わせ、眠ったところを斬ったと伝える。この物語は、酒を酩酊の物質であると同時に神威の媒体として定位した。",zh:"《古事記》與《日本書紀》記載須佐之男以八鹽折之酒（重釀八次之酒）盛滿八槽，灌醉八岐大蛇後斬之。此故事將酒定位為兼具醉意與神力的物質。"} },
          { year:"927", era:{en:"Heian",ja:"平安",zh:"平安"}, eraJp:"平安時代",
            title:{en:"Engishiki codifies brewing",ja:"『延喜式』が醸造法を成文化",zh:"《延喜式》將釀法制度化"}, jp:"延喜式",
            text:{en:"The most important technical document of the ancient period. Its brewing chapters specify quantities of rice, kōji and water for a dozen or more named sakes — including <em>goshu</em> for the emperor, sweet <em>reishu</em>, and a repeatedly re-brewed <em>shiori</em> style that anticipates modern <em>kijōshu</em>. Ratios are given precisely enough to reconstruct the recipes.",ja:"古代における最重要の技術文献。醸造の条は、十数種の酒——天皇の御酒、甘い醴酒、繰り返し仕込む「しおり」（現代の貴醸酒を先取りする）など——について、米・麹・水の分量を規定する。比率は再現可能なほど精確に記されている。",zh:"古代最重要的技術文獻。其釀造篇章為十餘種酒——包括天皇御酒、甘甜的醴酒，以及反覆重釀、預示現代貴釀酒的「しおり」——規定了米、麴與水的用量，比例精確到足以復原配方。"} },
          { year:"c. 1000", era:{en:"Heian",ja:"平安",zh:"平安"}, eraJp:"平安時代",
            title:{en:"Clarified sake and the beginnings of filtration",ja:"澄み酒と濾過の始まり",zh:"清酒與過濾之始"}, jp:"清酒・濁酒",
            text:{en:"Court records begin to distinguish <em>sumizake</em> (clear) from <em>nigorizake</em> (cloudy). Straining through cloth or settling in vats separates the liquid from the rice solids. The word <em>seishu</em> — the term still used in Japanese law — enters use in this sense.",ja:"宮廷の記録に澄み酒と濁り酒の区別が現れる。布で漉すか槽で澱を沈めることで、液体と米の固形分を分離した。現在も法令用語である「清酒」の語がこの意味で用いられ始める。",zh:"宮廷記錄開始區分澄酒與濁酒。以布過濾或於槽中沉澱，使液體與米之固形物分離。至今仍為日本法律用語的「清酒」一詞，即在此意義下開始使用。"} }
        ] }
      ]
    },

{ t:"section", id:"temples",
      title:{ en:"The monks: 1200–1600", ja:"僧坊酒の時代：1200–1600", zh:"僧坊酒的時代：1200–1600" }, jp:"僧坊酒",
      body:[
        { t:"p", text:{
          en:"Between the Kamakura and late Muromachi periods, the technical centre of Japanese brewing moved out of the imperial court and into the great Buddhist temples. Temples had what no one else had: literate staff who kept daily records, large landholdings that supplied rice, capital, and a legal position that put them partly outside secular taxation. The sake they produced, <em>sōbōshu</em> (僧坊酒), was the finest in the country for three centuries.",
          ja:"鎌倉から室町後期にかけて、日本の醸造技術の中心は宮廷を離れ、大寺院へ移った。寺院は他が持ち得ないものを備えていた——日誌を書き続ける識字層、米を供給する広大な荘園、資本、そして世俗の課税から部分的に外れる法的地位である。寺院が造った僧坊酒は、三世紀にわたり国内最高の酒だった。",
          zh:"自鎌倉至室町後期，日本釀造技術的中心自宮廷移入大型佛寺。寺院擁有他處所無的條件：能書寫並持續記錄的僧眾、供應稻米的廣大莊園、資本，以及部分免於世俗課稅的法律地位。寺院所釀的僧坊酒，三個世紀間為全國之冠。" } },
        { t:"timeline", items:[
          { year:"1252", era:{en:"Kamakura",ja:"鎌倉",zh:"鎌倉"}, eraJp:"鎌倉時代",
            title:{en:"Prohibition — and a census of jars",ja:"沽酒の禁と酒壺の調査",zh:"禁酒令與酒甕清點"}, jp:"沽酒禁制",
            text:{en:"The Kamakura shogunate bans the sale of sake in Kamakura and orders all brewing jars destroyed except one per household. The order incidentally produced a count: over 37,000 jars in the city. Commercial brewing was already large, urban and taxable — which is why it kept being banned, and kept returning.",ja:"鎌倉幕府は鎌倉での酒の販売を禁じ、各戸一壺を残して酒壺の破却を命じた。この命令は副産物として数値を残す——市中に三万七千余の壺。商業醸造はすでに大規模・都市的・課税対象であった。だからこそ繰り返し禁じられ、繰り返し復活した。",zh:"鎌倉幕府禁止在鎌倉販酒，並下令除每戶留一甕外全數毀棄。此令意外留下數據：城中逾三萬七千甕。商業釀造早已規模龐大、集中都市且可課稅——正因如此才屢禁屢復。"} },
          { year:"c. 1400s", era:{en:"Muromachi",ja:"室町",zh:"室町"}, eraJp:"室町時代",
            title:{en:"Bodaimoto at Shōryakuji",ja:"正暦寺の菩提酛",zh:"正曆寺的菩提酛"}, jp:"菩提山正暦寺",
            text:{en:"Monks at Bodaisan Shōryakuji in Nara develop <em>bodaimoto</em>: raw rice is steeped in water until lactic acid bacteria sour it, producing <em>soyashi-mizu</em>. That acidic water is then used to build the starter, suppressing spoilage organisms while letting yeast thrive. It is the first deliberate use of acidity as a microbial control — the conceptual ancestor of kimoto, yamahai and sokujō alike.",ja:"奈良・菩提山正暦寺の僧が菩提酛を確立する。生米を水に浸けて乳酸菌に酸性化させ、そやし水を得る。この酸性水で酒母を仕込むことで雑菌を抑え、酵母を優占させた。酸を微生物制御として意図的に用いた最初の例であり、生酛・山廃・速醸すべての概念的祖先である。",zh:"奈良菩提山正曆寺的僧人確立菩提酛：將生米浸水，任乳酸菌使其酸化，得「そやし水」。以此酸性水製酒母，可抑制雜菌並使酵母優勢生長。這是刻意以酸度作為微生物控制的首例，也是生酛、山廢與速釀共同的概念祖先。"} },
          { year:"1478–1618", era:{en:"Muromachi",ja:"室町",zh:"室町"}, eraJp:"室町時代",
            title:{en:"The Tamon-in Diary",ja:"『多聞院日記』",zh:"《多聞院日記》"}, jp:"多聞院日記",
            text:{en:"A 140-year daily record kept by monks of Kōfukuji in Nara, and the single richest source for medieval brewing. It documents <em>morohaku</em> (polished rice for both kōji and mash), three-stage mash addition, and — in entries from the 1560s — the heating of finished sake in jars to preserve it. That is pasteurisation, described roughly three centuries before Pasteur.",ja:"奈良・興福寺の僧が百四十年にわたり記した日誌であり、中世醸造の最も豊かな史料である。諸白（麹米・掛米ともに精白）、三段仕込み、そして一五六〇年代の記事には、桶の酒を加熱して保存する記述がある。パスツールに三世紀ほど先行する火入れの記録である。",zh:"奈良興福寺僧人歷時一百四十年的日誌，是中世紀釀造最豐富的史料。其中記載諸白（麴米與掛米皆精白）、三段仕込，以及 1560 年代將成酒於甕中加熱以利保存的條目——這正是火入殺菌，比巴斯德早約三個世紀。"} },
          { year:"1560s", era:{en:"Muromachi",ja:"室町",zh:"室町"}, eraJp:"室町時代",
            title:{en:"Three techniques converge",ja:"三つの技法の合流",zh:"三項技術匯流"}, jp:"諸白・三段仕込み・火入れ",
            text:{en:"<em>Morohaku</em> raises quality by removing bran from all the rice, not just the kōji rice. <em>Sandan-jikomi</em> — building the mash in three additions over four days — keeps yeast concentration high enough to out-compete contaminants at every stage. <em>Hiire</em> stabilises the finished product. With these three, the shape of modern sake is complete; everything after is refinement.",ja:"諸白は麹米だけでなく掛米も精白して品質を高める。三段仕込みは四日かけて三度に分けて仕込むことで、各段階において酵母の濃度を雑菌より高く保つ。火入れは製品を安定させる。この三つをもって現代の日本酒の骨格は完成し、以後はすべて精緻化である。",zh:"諸白使麴米與掛米皆精白，藉此提升品質。三段仕込在四日內分三次投料，使每一階段酵母濃度都足以壓過雜菌。火入則使成品穩定。這三者一旦齊備，現代日本酒的骨架即告完成，此後皆屬精緻化。"} },
          { year:"1580s", era:{en:"Azuchi–Momoyama",ja:"安土桃山",zh:"安土桃山"}, eraJp:"安土桃山時代",
            title:{en:"The temples fall",ja:"寺院の凋落",zh:"寺院的衰落"}, jp:"僧坊酒の終焉",
            text:{en:"Oda Nobunaga's campaigns against the armed monasteries, and the land surveys of Toyotomi Hideyoshi, break the economic base of temple brewing. The knowledge does not disappear — it moves into secular merchant houses in Nara, Itami and Ikeda, which will become the first commercial brewing towns.",ja:"織田信長の寺社勢力への攻撃と、豊臣秀吉の検地が、寺院醸造の経済基盤を破壊する。技術そのものは消えず、奈良・伊丹・池田の商家へ移り、これらが最初の商業醸造の町となる。",zh:"織田信長對武裝寺院的征伐與豐臣秀吉的檢地，摧毀了寺院釀造的經濟基礎。技術本身並未消失，而是轉入奈良、伊丹、池田的商家，這些地方成為最早的商業釀造市鎮。"} }
        ] }
      ]
    },

    { t:"section", id:"edo",
      title:{ en:"Edo: the industry forms", ja:"江戸：産業の成立", zh:"江戶：產業成形" }, jp:"江戸時代",
      body:[
        { t:"p", text:{
          en:"The Edo period (1603–1868) turned brewing into an industry with a supply chain. Edo grew to over a million people with no significant local brewing capacity; the Kansai brewing towns grew to fill that vacuum, shipping sake east by sea. Everything about the modern craft — the winter season, the migrant brewing team, the brewmaster hierarchy, the Nada dominance — is an Edo-period adaptation to that trade.",
          ja:"江戸時代（1603–1868）は、醸造を供給網をもつ産業に変えた。江戸は百万人を超える都市に成長したが、有力な地元醸造をもたなかった。上方の酒造町がその空白を埋めるべく成長し、海路で酒を東へ送った。冬の造り、出稼ぎの蔵人集団、杜氏の階層、灘の優越——現代の技芸を形づくるすべては、この流通への適応である。",
          zh:"江戶時代（1603–1868）將釀造轉為具備供應鏈的產業。江戶成長為逾百萬人的城市，卻缺乏顯著的在地釀造能力；上方（關西）的釀酒市鎮遂填補此空缺，經海路東運。冬季釀造、外地移工組成的藏人團隊、杜氏階層制度、灘的支配地位——現代技藝的一切，都是對這條貿易路線的適應。" } },
        { t:"timeline", items:[
          { year:"1600s", era:{en:"Edo",ja:"江戸",zh:"江戶"}, eraJp:"江戸時代前期",
            title:{en:"Itami, Ikeda and kudari-zake",ja:"伊丹・池田と下り酒",zh:"伊丹、池田與下行酒"}, jp:"下り酒",
            text:{en:"Sake shipped from Kansai down to Edo was called <em>kudarizake</em> — “sake that goes down” — and was prized. Local eastern sake was <em>kudaranai</em>, “not down”; the word survives in modern Japanese meaning worthless. Barrel ships (<em>taru-kaisen</em>) ran the route in as little as a few days; the sea voyage itself was found to improve the sake.",ja:"上方から江戸へ送られた酒は「下り酒」と呼ばれ珍重された。関東の地酒は「下らない」酒であり、この語は現代語で「つまらない」の意として残る。樽廻船は数日でこの航路を走り、航海そのものが酒を良くすると知られた。",zh:"自關西運往江戶的酒稱「下行酒」（下り酒），備受推崇；關東本地酒則是「下らない」（未下行者），此詞在現代日語中留存為「無聊、不值一提」之意。樽迴船最快數日即可跑完航線，而航行本身被發現能改善酒質。"} },
          { year:"1673–1680s", era:{en:"Edo",ja:"江戸",zh:"江戶"}, eraJp:"江戸時代",
            title:{en:"Kanzukuri becomes the rule",ja:"寒造りの制度化",zh:"寒造成為定制"}, jp:"寒造り",
            text:{en:"The shogunate restricts brewing to the winter months, partly to conserve rice and partly because winter sake was demonstrably better. Cold air suppresses lactic and wild-yeast contamination and slows fermentation. The seasonal calendar this created — brewers arriving in October, leaving in March — produced the migrant <em>tōji</em> system.",ja:"幕府は米の節約と、冬の酒が明らかに優れるという理由から、造りを冬季に限った。低温は乳酸菌や野生酵母の汚染を抑え、発酵を緩やかにする。十月に蔵入りし三月に蔵を出るという季節暦がここに生まれ、出稼ぎの杜氏制度を生んだ。",zh:"幕府將釀造限於冬季，一為節省稻米，二因冬釀之酒明顯較優。低溫抑制乳酸菌與野生酵母污染並減緩發酵。由此形成的季節曆——十月入藏、三月離藏——催生了外地移工的杜氏制度。"} },
          { year:"1700s", era:{en:"Edo",ja:"江戸",zh:"江戶"}, eraJp:"江戸時代中期",
            title:{en:"Water-wheel milling and the rise of Nada",ja:"水車精米と灘の台頭",zh:"水車精米與灘的崛起"}, jp:"水車精米",
            text:{en:"Nada's steep rivers off Mount Rokkō drove water-wheels that could mill rice far harder than foot-treading allowed — reportedly to around 80% remaining where hand milling reached 90%. Better-milled rice, a deep-water harbour for the barrel ships, and hard local water made Nada the dominant brewing district by the late 18th century.",ja:"六甲山からの急流が水車を回し、足踏みでは及ばない精白を可能にした——手搗きが九割どまりのところ、八割程度まで削れたとされる。精米の向上、樽廻船の使える良港、硬水の存在が、十八世紀後半には灘を最大の酒造地帯にした。",zh:"六甲山下的急流帶動水車，可將米碾得遠比足踏更深——據載手搗僅及九成，水車可達八成左右。精米改善、可停泊樽迴船的良港，加上當地硬水，使灘於十八世紀後期成為最主要的釀造地帶。"} },
          { year:"1840", era:{en:"Edo",ja:"江戸",zh:"江戶"}, eraJp:"江戸時代後期",
            title:{en:"Miyamizu is identified",ja:"宮水の発見",zh:"宮水的發現"}, jp:"宮水",
            text:{en:"Yamamura Tazaemon VI of Sakura Masamune, running breweries in both Uozaki and Nishinomiya, notices that the same rice, the same team and the same method give better sake at Nishinomiya. By moving variables one at a time he isolates the cause: the well water. <em>Miyamizu</em> — high in potassium and phosphorus, extremely low in iron — becomes the most famous water in Japanese brewing and is still carted to Nada breweries today.",ja:"櫻正宗の六代目・山邑太左衛門は、魚崎と西宮の両方に蔵をもち、同じ米・同じ蔵人・同じ製法でありながら西宮の酒が優れることに気づいた。変数を一つずつ入れ替えて原因を特定する——井戸水である。カリウム・リンに富み鉄が極端に少ない宮水は、日本の醸造で最も名高い水となり、今日も灘の蔵へ運ばれている。",zh:"櫻正宗第六代山邑太左衛門在魚崎與西宮皆設酒藏，發現同米、同人、同法之下西宮所釀更佳。他逐一置換變因，鎖定原因：井水。富含鉀與磷、鐵質極低的「宮水」自此成為日本釀造史上最著名的水，至今仍運往灘的各家酒藏。"} },
          { year:"1800s", era:{en:"Edo",ja:"江戸",zh:"江戶"}, eraJp:"江戸時代後期",
            title:{en:"Kimoto reaches its classical form",ja:"生酛の完成",zh:"生酛的定型"}, jp:"生酛",
            text:{en:"The <em>kimoto</em> starter — rice, kōji and water ground to a paste with poles (<em>yamaoroshi</em>), then left for wild lactic bacteria to acidify before wild yeast takes over — is standardised across Nada. It is slow, cold, physically brutal work, and the songs sung to time the pole strokes are preserved as a genre.",ja:"生酛——米・麹・水を櫂で摺り潰し（山卸）、野生の乳酸菌に酸性化させたのち野生酵母に委ねる酒母——が灘一帯で標準化される。遅く、寒く、肉体的に過酷な作業であり、櫂の拍子を取るために歌われた酛摺唄は一つの歌謡ジャンルとして残る。",zh:"生酛——以櫂棒將米、麴、水磨成糊（山卸），任野生乳酸菌酸化後再由野生酵母接手——在灘一帶標準化。此工序緩慢、寒冷且極耗體力，為配合櫂棒節奏而唱的酛摺唄，至今作為一個歌謠類型保存下來。"} }
        ] },
        { t:"note", label:{en:"Why sea travel improved sake",ja:"海路が酒を良くした理由",zh:"航行為何改善酒質"}, text:{
          en:"Two mechanisms. Barrels of Yoshino cedar gave up aromatic compounds during the voyage — the origin of <em>taruzake</em>. And the constant motion in a warm hold accelerated the maturation reactions that soften a young sake. Edo drinkers preferred the arrived product to the same sake tasted at the brewery gate.",
          ja:"機序は二つ。吉野杉の樽が航海中に香気成分を与えたこと——これが樽酒の起源である。そして温かい船倉での絶えざる揺れが、若い酒を丸くする熟成反応を促進したこと。江戸の飲み手は、蔵先で飲む同じ酒より、着いた酒を好んだ。",
          zh:"機制有二。吉野杉木樽在航行中釋出香氣成分——這正是樽酒的起源。而溫暖船艙中不斷的搖晃，加速了使新酒變柔的熟成反應。江戶的飲者偏好抵達後的酒，勝於在藏前所嚐的同一款酒。" } }
      ]
    },

{ t:"section", id:"meiji",
      title:{ en:"Science arrives: 1868–1930", ja:"科学の到来：1868–1930", zh:"科學到來：1868–1930" }, jp:"明治・大正",
      body:[
        { t:"p", text:{
          en:"The Meiji state needed revenue and got it from sake: by the 1890s the liquor tax supplied roughly a third of all national tax income, briefly exceeding the land tax. That fiscal dependence bought the industry something valuable — the government had a direct financial interest in breweries not failing, and funded the research that turned brewing from craft into applied microbiology.",
          ja:"明治国家は財源を必要とし、それを酒に求めた。一八九〇年代には酒税が国税収入のおよそ三分の一を占め、一時は地租を上回った。この財政的依存は産業に価値あるものをもたらした——政府は蔵が潰れないことに直接の利害をもち、醸造を技芸から応用微生物学へ転換させる研究に資金を投じたのである。",
          zh:"明治政府需要財源，而財源來自酒：至 1890 年代，酒稅約占全國稅收三分之一，一度超越地租。這種財政依賴為產業換來了寶貴之物——政府對酒藏不倒閉具有直接利害，因而出資推動研究，使釀造從技藝轉為應用微生物學。" } },
        { t:"timeline", items:[
          { year:"1871", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"Brewing is deregulated, then taxed",ja:"醸造の自由化と課税",zh:"釀造開放與課稅"}, jp:"清酒濁酒醤油鑑札収与並収税方法規則",
            text:{en:"Anyone may apply for a brewing licence. Roughly 30,000 licences are issued almost overnight. Successive tax increases over the following two decades then bankrupt most of them; by 1900 the count has collapsed. The pattern — open, tax, consolidate — set the industry's structure for a century.",ja:"誰もが醸造免許を申請できるようになり、ほぼ一夜にして約三万の免許が交付された。続く二十年の度重なる増税がその大半を破綻させ、一九〇〇年には激減する。開放し、課税し、集約するというこの型が、以後一世紀の産業構造を規定した。",zh:"任何人皆可申請釀造執照，幾乎一夜之間發出約三萬張。其後二十年間接連加稅使多數破產，至 1900 年家數驟減。開放、課稅、整併——這一模式界定了往後一個世紀的產業結構。"} },
          { year:"1873", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"Sake at the Vienna World Exposition",ja:"ウィーン万国博覧会に出品",zh:"維也納世界博覽會參展"},
            text:{en:"Japan's first official presentation of sake to a Western audience. Export remains negligible for another century, but the framing of sake as a national product dates from here.",ja:"西洋の観衆に対する日本酒の最初の公式な提示。輸出は以後一世紀ほど微々たるものにとどまるが、日本酒を国産品として位置づける枠組みはここに始まる。",zh:"日本首次向西方觀眾正式展示清酒。此後約一個世紀出口量仍微不足道，但將日本酒定位為「國家產品」的框架自此開始。"} },
          { year:"1904", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"National Research Institute of Brewing founded",ja:"醸造試験所の設立",zh:"釀造試驗所設立"}, jp:"醸造試験所（現・酒類総合研究所）",
            text:{en:"A government laboratory dedicated to brewing science, staffed by chemists and microbiologists. Within a decade it will have isolated pure yeast strains, invented two starter methods, and begun a national competition that standardises what “good” means. Few industries anywhere have had a state research arm of this kind.",ja:"化学者と微生物学者を擁する、醸造科学のための国立研究機関。十年のうちに純粋酵母の分離、二つの酒母法の考案、そして「良い酒」の基準を全国的に統一する鑑評会の創設を成し遂げる。これほどの国立研究機関をもった産業は世界的に稀である。",zh:"由化學家與微生物學家組成、專責釀造科學的國立研究機構。十年之內即完成純粹酵母分離、發明兩種酒母工法，並創辦統一「何謂好酒」標準的全國鑑評會。世上少有產業擁有如此規格的國家研究機構。"} },
          { year:"1906", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"Kyōkai yeast No. 1",ja:"きょうかい酵母一号",zh:"協會酵母一號"}, jp:"日本醸造協会",
            text:{en:"The Brewing Society of Japan begins isolating and distributing pure yeast cultures from breweries whose sake had won prizes. No. 1 came from Sakura Masamune in Nada. For the first time a brewer could buy a known organism rather than rely on whatever lived in the rafters.",ja:"日本醸造協会が、受賞蔵から純粋酵母を分離・頒布し始める。一号は灘の櫻正宗由来。蔵人が、梁に棲む何かに頼るのではなく、既知の微生物を購入できるようになった最初の瞬間である。",zh:"日本釀造協會開始自得獎酒藏分離並頒布純粹酵母。一號來自灘的櫻正宗。釀酒者首度得以購買已知的微生物，而不必仰賴棲息於樑上的不明菌種。"} },
          { year:"1909", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"Yamahai",ja:"山廃酛の考案",zh:"山廢酛的發明"}, jp:"山廃酛 · 嘉儀金一郎",
            text:{en:"Kagi Kinichirō at the institute shows that the brutal <em>yamaoroshi</em> pole-grinding of kimoto is unnecessary: if kōji is steeped in water first (<em>mizu-kōji</em>), its enzymes dissolve the rice anyway. “Yamaoroshi abolished” — <em>yamaoroshi haishi</em> — contracts to <em>yamahai</em>. Same wild-lactic principle, a third of the labour.",ja:"醸造試験所の嘉儀金一郎が、生酛の過酷な山卸は不要であることを示す。麹を先に水に浸けて水麹とすれば、その酵素が米を溶かすからである。「山卸廃止」が縮まって「山廃」となった。野生乳酸の原理は同じまま、労力は三分の一になった。",zh:"釀造試驗所的嘉儀金一郎證明生酛中極耗體力的山卸並非必要：只要先將麴浸水成「水麴」，其酵素自會溶解米粒。「山卸廢止」縮寫為「山廢」。野生乳酸的原理不變，勞力減至三分之一。"} },
          { year:"1910", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"Sokujō-moto",ja:"速醸酛の考案",zh:"速釀酛的發明"}, jp:"速醸酛 · 江田鎌治郎",
            text:{en:"Eda Kamajirō proposes adding food-grade lactic acid directly at the start of the starter instead of waiting two weeks for bacteria to make it. Starter time falls from about a month to roughly two weeks, and the risk of a failed batch falls further still. Today around 90% of all sake uses this method.",ja:"江田鎌治郎が、乳酸菌が二週間かけて酸を作るのを待つ代わりに、食品用乳酸を酒母の仕込み時に直接添加することを提案する。酒母の期間は約一か月から二週間程度に短縮され、失敗の危険はそれ以上に低下した。今日、日本酒のおよそ九割がこの方法による。",zh:"江田鎌治郎提出：與其等候乳酸菌花兩週產酸，不如在製酒母之初直接添加食品級乳酸。酒母期由約一個月縮短至兩週左右，失敗風險降幅更大。今日約九成日本酒採用此法。"} },
          { year:"1911", era:{en:"Meiji",ja:"明治",zh:"明治"}, eraJp:"明治時代",
            title:{en:"The first National New Sake Appraising Competition",ja:"第一回全国新酒鑑評会",zh:"首屆全國新酒鑑評會"}, jp:"全国新酒鑑評会",
            text:{en:"An annual blind judging of the season's new sake, still running today and still the most consequential award in the industry. Its criteria — clean, aromatic, faultless — shaped a century of brewing ambition and are the direct cause of the ginjō style's existence.",ja:"その季節の新酒を利き当てる全国規模の審査会。今日まで続き、業界で最も重い賞であり続けている。清く、香り高く、欠点のないという審査基準が、一世紀にわたる造りの志向を形づくり、吟醸という酒質を生んだ直接の原因となった。",zh:"針對當季新酒的全國性評鑑，延續至今，仍是業界最具份量的獎項。其評判標準——潔淨、芳香、無瑕——形塑了一個世紀的釀造志向，並直接催生了吟釀這一酒質。"} },
          { year:"1923", era:{en:"Taishō",ja:"大正",zh:"大正"}, eraJp:"大正時代",
            title:{en:"Enamel tanks replace wooden vats",ja:"琺瑯タンクの導入",zh:"琺瑯槽取代木桶"}, jp:"琺瑯タンク",
            text:{en:"Enamel-lined steel tanks can be sterilised, do not harbour resident bacteria in the grain of the wood, and do not leak. Quality becomes far more consistent and far less haunted — but the microbial character that old cedar vats contributed disappears, which is why a handful of breweries have since revived wooden fermentation deliberately.",ja:"琺瑯引きの鋼製タンクは殺菌でき、木目に菌を棲まわせず、漏れもしない。品質は格段に安定し、蔵付き菌の亡霊も去った——が、古い杉桶が与えていた微生物由来の個性も消えた。近年、少数の蔵が意図的に木桶仕込みを復活させているのはこのためである。",zh:"內襯琺瑯的鋼槽可殺菌、不會在木紋中窩藏常駐菌、也不滲漏。品質因此大為穩定，也不再有「藏付菌」之擾——但老杉桶所賦予的微生物個性也隨之消失。這正是近年少數酒藏刻意復活木桶仕込的原因。"} },
          { year:"1930", era:{en:"Shōwa",ja:"昭和",zh:"昭和"}, eraJp:"昭和初期",
            title:{en:"Kyōkai No. 6, and the vertical mill",ja:"きょうかい六号と竪型精米機",zh:"協會六號與立式精米機"}, jp:"新政・佐竹",
            text:{en:"Yeast No. 6 is isolated from Aramasa in Akita — the oldest Kyōkai strain still in commercial distribution, valued for a strong, clean, restrained fermentation. Three years later Satake's vertical rice-milling machine allows polishing far past what horizontal mills could reach without cracking grain. Between them, these two make the ginjō era possible.",ja:"六号酵母が秋田の新政から分離される。現在も頒布される最古のきょうかい酵母であり、強く、清く、控えめな発酵で評価される。三年後、佐竹の竪型精米機が、横型では砕けてしまう領域まで精白を可能にした。この二つが吟醸の時代を可能にする。",zh:"六號酵母自秋田新政分離而出，是至今仍在流通、最古老的協會酵母，以強健、潔淨、內斂的發酵著稱。三年後，佐竹的立式精米機使精白得以深入橫式碾米機難以企及、否則會碎粒的領域。兩者結合，開啟了吟釀時代的可能。"} }
        ] }
      ]
    },

    { t:"section", id:"war",
      title:{ en:"War, dilution, and the grading system", ja:"戦争・増醸・級別", zh:"戰爭、增釀與級別制度" }, jp:"1940–1992",
      body:[
        { t:"p", text:{
          en:"The most damaging half-century in sake's history begins with rice shortage and ends with a labelling reform. Understanding it explains why an entire generation of Japanese drinkers turned away from sake, and why the word <em>junmai</em> carries the emotional weight it does.",
          ja:"日本酒史上、最も損害の大きい半世紀は米不足に始まり、表示制度の改革に終わる。この経緯を理解することは、なぜ一世代の日本人が日本酒から離れたのか、そしてなぜ「純米」という語がこれほどの重みを帯びるのかを説明する。",
          zh:"日本酒史上損害最深的半個世紀，始於米糧短缺，終於標示制度改革。理解這段歷程，便能說明為何整整一代日本飲者疏遠了日本酒，以及「純米」二字何以承載如此份量。" } },
        { t:"timeline", items:[
          { year:"1940", era:{en:"Shōwa",ja:"昭和",zh:"昭和"}, eraJp:"昭和15年",
            title:{en:"The grading system",ja:"級別制度の導入",zh:"級別制度導入"}, jp:"級別制度",
            text:{en:"Wartime rationing and rampant dilution prompt the state to grade sake for tax purposes. Six grades at first; after 1949, three — <em>tokkyū</em> (special), <em>ikkyū</em> (first), <em>nikyū</em> (second). Grades were awarded on submission to a tasting panel and taxed accordingly, and submission was voluntary. The system measured tax bracket, not quality, but consumers read it as quality.",ja:"戦時の配給と横行する水増しを受け、国家は課税のために酒を格付けする。当初六級、一九四九年以降は特級・一級・二級の三級。級は審査への出品によって与えられ、それに応じて課税された。出品は任意である。制度が測ったのは税区分であって品質ではないが、消費者は品質と読んだ。",zh:"戰時配給與猖獗的摻水促使國家為課稅而將酒分級。最初六級，1949 年後為特級、一級、二級三級。級別由送審品評決定並據以課稅，而送審屬自願。此制度衡量的是稅級而非品質，消費者卻視之為品質。"} },
          { year:"1943–49", era:{en:"Shōwa",ja:"昭和",zh:"昭和"}, eraJp:"昭和18–24年",
            title:{en:"Alcohol addition, then triple-volume sake",ja:"アルコール添加と三倍増醸酒",zh:"添加酒精與三倍增釀酒"}, jp:"三倍増醸酒（三増酒）",
            text:{en:"Rice is desperately scarce. Adding distilled alcohol to the mash stretches the yield; by 1949 the technique has become <em>sanbai zōjōshu</em> — “triple-brewed sake” — in which alcohol, sugar, glucose, acids and amino acids inflate one part of real sake into three parts of saleable liquid. It was legal seishu. At its peak it was around a third of the market.",ja:"米は決定的に不足していた。醪へのアルコール添加は収量を伸ばし、一九四九年にはこの手法が三倍増醸酒となる——アルコール・糖類・水飴・酸・アミノ酸によって、一の酒を三の売り物に膨らませる。これは合法の清酒であった。最盛期には市場の三分の一ほどを占めた。",zh:"稻米極度短缺。向醪中添加蒸餾酒精可拉高產量；至 1949 年，此法演變為「三倍增釀酒」——以酒精、糖類、水飴、酸與胺基酸，將一份真酒膨脹成三份可售液體。它是合法的清酒。全盛時期約占市場三分之一。"} },
          { year:"1973", era:{en:"Shōwa",ja:"昭和",zh:"昭和"}, eraJp:"昭和48年",
            title:{en:"Peak volume",ja:"出荷量のピーク",zh:"出貨量的高峰"}, jp:"177万kL",
            text:{en:"Taxed shipments reach about 1.77 million kilolitres — the all-time high. It is downhill from here: by 2019 the figure is around 460,000 kL, roughly a quarter of the peak, as beer, whisky, wine and <em>chūhai</em> take share and the drinking population shrinks and ages.",ja:"課税移出数量が約百七十七万キロリットルに達する。史上最高である。以後は下降の一途をたどり、二〇一九年には約四十六万キロリットル、ピークのおよそ四分の一まで落ちる。ビール・ウイスキー・ワイン・チューハイに市場を奪われ、飲酒人口は縮小し高齢化した。",zh:"課稅出貨量達約 177 萬公秉，為史上最高。此後一路下滑：至 2019 年約 46 萬公秉，僅約高峰的四分之一。啤酒、威士忌、葡萄酒與調酒（酎ハイ）搶走市占，飲酒人口則萎縮且高齡化。"} },
          { year:"1970s–80s", era:{en:"Shōwa",ja:"昭和",zh:"昭和"}, eraJp:"昭和50年代",
            title:{en:"The jizake movement",ja:"地酒ブーム",zh:"地酒運動"}, jp:"地酒",
            text:{en:"A reaction against national brands and industrial sake. Small regional breweries — <em>jizake</em>, “local sake” — are rediscovered by writers and drinkers looking for character rather than consistency. The movement supplies the audience that will later make ginjō commercially viable.",ja:"全国銘柄と工業的な酒への反動。書き手と飲み手が、均質さではなく個性を求めて地方の小蔵——地酒——を再発見する。この運動が、のちに吟醸を商業的に成立させる読者層＝飲み手を用意した。",zh:"對全國性品牌與工業化酒的反動。作家與飲者為尋求個性而非一致性，重新發現地方小型酒藏——「地酒」。這場運動培養出的受眾，日後使吟釀在商業上得以成立。"} },
          { year:"1980s", era:{en:"Shōwa",ja:"昭和",zh:"昭和"}, eraJp:"昭和後期",
            title:{en:"The ginjō boom",ja:"吟醸ブーム",zh:"吟釀熱潮"}, jp:"吟醸酒",
            text:{en:"Techniques developed for competition entries — extreme milling, low-temperature fermentation, aromatic yeast — reach the retail market. Sake that smells of apple and melon is a genuine novelty, and it recruits drinkers, especially women and younger drinkers, who had written sake off as their father's drink.",ja:"鑑評会出品のために磨かれた技術——極限の精米、低温発酵、高香気酵母——が市販の領域へ出てくる。リンゴやメロンの香りがする日本酒は本物の新奇であり、父親の酒として切り捨てていた層、とりわけ女性と若い飲み手を呼び戻した。",zh:"為鑑評會參賽而磨練的技術——極限精米、低溫發酵、高香氣酵母——進入零售市場。散發蘋果與哈密瓜香氣的日本酒是真正的新鮮事，吸引回那些原本視之為「父輩之酒」的族群，尤其是女性與年輕飲者。"} },
          { year:"1990", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成2年",
            title:{en:"Tokutei meishōshu replaces grades",ja:"特定名称酒制度の施行",zh:"特定名稱酒制度施行"}, jp:"清酒の製法品質表示基準",
            text:{en:"The Labelling Standard for the Manufacturing Method and Quality of Seishu creates the eight designations still in force — junmai, honjōzō, ginjō, daiginjō and their combinations — defined by verifiable facts (milling ratio, kōji ratio, whether alcohol was added) rather than by a tasting panel. This is the single most important consumer-facing reform in sake's modern history.",ja:"「清酒の製法品質表示基準」が、現在も有効な八つの特定名称——純米・本醸造・吟醸・大吟醸とその組合せ——を定める。基準は審査員の判定ではなく、精米歩合・麹歩合・アルコール添加の有無という検証可能な事実に基づく。近代日本酒史における、消費者にとって最も重要な改革である。",zh:"《清酒製法品質標示基準》確立至今仍有效的八種特定名稱——純米、本釀造、吟釀、大吟釀及其組合——依據可查證的事實（精米步合、麴步合、是否添加酒精）而非品評小組的判定。這是近代日本酒史上對消費者最重要的一項改革。"} },
          { year:"1992", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成4年",
            title:{en:"Grades abolished",ja:"級別制度の廃止",zh:"級別制度廢止"},
            text:{en:"The <em>tokkyū / ikkyū / nikyū</em> system is fully withdrawn. Sake ceases to be sold on a state-issued rank.",ja:"特級・一級・二級の制度が完全に撤廃される。国家の与える等級によって酒が売られる時代が終わる。",zh:"特級／一級／二級制度完全撤除。以國家頒定等級販售日本酒的時代告終。"} },
          { year:"2006", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成18年",
            title:{en:"Triple-volume sake is written out of the law",ja:"三増酒が清酒の定義から外れる",zh:"三增酒被排除於清酒定義之外"},
            text:{en:"A revision to the Liquor Tax Act caps permitted additions at 50% of the rice weight, which makes <em>sanbai zōjōshu</em> impossible to sell as seishu. Products of that type are reclassified as <em>liqueur</em>. The category that damaged sake's reputation for sixty years ends by definition.",ja:"酒税法の改正により、副原料の添加量が米重量の50%以下に制限され、三倍増醸酒は清酒として販売できなくなる。同種の製品はリキュール等に区分し直された。六十年にわたり日本酒の評判を損ねた区分が、定義の側から終わる。",zh:"酒稅法修正將可添加副原料上限定為米重量的 50%，使三倍增釀酒無法再以清酒名義販售，同類產品改列利口酒。這個損害日本酒名聲六十年的類別，自定義層面終結。"} }
        ] }
      ]
    },

{ t:"section", id:"contemporary",
      title:{ en:"The contemporary period", ja:"現代", zh:"當代" }, jp:"1990–",
      body:[
        { t:"p", text:{
          en:"Domestic consumption has continued to fall for fifty years, yet by almost every other measure sake is in better condition than at any point since the war. Volume is down; quality, price per litre, export value, stylistic range and international literacy are all up. The industry has shrunk into a premium craft — a transition the whisky and wine worlds would recognise.",
          ja:"国内消費は五十年にわたり落ち続けている。それでも他のほぼすべての指標において、日本酒は戦後のどの時点よりも良好な状態にある。数量は減り、品質・一リットルあたりの単価・輸出額・酒質の幅・国際的な理解度はいずれも上がった。産業はプレミアムな手仕事へと縮小した——ウイスキーやワインの世界が見覚えのある移行である。",
          zh:"國內消費已連續下滑五十年，然而以幾乎所有其他指標衡量，日本酒都處於戰後以來最好的狀態。數量下降，而品質、每公升單價、出口額、風格幅度與國際認知度全面上升。產業已收縮為高端手工業——這是威士忌與葡萄酒世界所熟悉的轉型。" } },
        { t:"timeline", items:[
          { year:"1998–", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成10年代",
            title:{en:"Flower yeasts and prefectural strains",ja:"花酵母と県産酵母",zh:"花酵母與各縣酵母"}, jp:"花酵母・県酵母",
            text:{en:"Tokyo University of Agriculture isolates yeasts from flowers — nadeshiko, begonia, abelia — and prefectural research stations release house strains bred for local rice and local water. Aroma becomes a design decision with dozens of levers rather than a handful.",ja:"東京農業大学がナデシコ・ベゴニア・アベリアなどの花から酵母を分離し、各県の研究機関が地元の米と水に合わせた県産酵母を頒布し始める。香りは、数少ない選択肢ではなく、数十のつまみをもつ設計事項となった。",zh:"東京農業大學自撫子、秋海棠、六道木等花朵分離出酵母，各縣研究機構亦推出配合當地米與水育成的自有菌株。香氣自此成為擁有數十個調節旋鈕的設計決策，而非寥寥數種選項。"} },
          { year:"2005", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成17年",
            title:{en:"The first sake GI: Hakusan",ja:"最初の清酒GI「白山」",zh:"首個清酒 GI：白山"}, jp:"GI白山",
            text:{en:"Ishikawa's Hakusan district becomes the first sake appellation, requiring local water and defined production conditions. Eighteen further sake GIs follow between 2015 and 2025.",ja:"石川県白山地区が最初の清酒の産地呼称となり、地元の水と定められた製造条件を要件とする。二〇一五年から二〇二五年にかけて、さらに多数の清酒GIが続く。",zh:"石川縣白山地區成為首個清酒產地名稱，要求使用當地水源並符合既定生產條件。2015 至 2025 年間陸續有多個清酒 GI 跟進。"} },
          { year:"2013", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成25年",
            title:{en:"Washoku on the UNESCO list",ja:"和食のユネスコ登録",zh:"和食列入教科文組織名錄"}, jp:"和食",
            text:{en:"Japanese cuisine's inscription raises international attention on everything served alongside it. Sake export value begins its sustained climb from this point.",ja:"和食の登録は、それとともに供されるものすべてに国際的な注目を向けさせた。日本酒の輸出額が持続的に伸び始めるのはこの時点からである。",zh:"和食獲列名錄，使一切與之並陳之物受到國際關注。日本酒出口額自此開始持續攀升。"} },
          { year:"2015", era:{en:"Heisei",ja:"平成",zh:"平成"}, eraJp:"平成27年",
            title:{en:"“Nihonshu” becomes a protected term",ja:"「日本酒」が保護される",zh:"「日本酒」成為受保護名稱"}, jp:"GI日本酒",
            text:{en:"A nationwide geographical indication reserves the word <em>Nihonshu</em> for sake brewed in Japan from rice grown in Japan. Sake brewed abroad — of which there is a growing quantity, from Oregon to Norway to Taiwan — remains sake, but not <em>Nihonshu</em>.",ja:"全国区の地理的表示により、「日本酒」の語は、国産米を用い日本国内で製造された清酒に限られることとなった。オレゴンからノルウェー、台湾まで、国外で醸される酒は増えているが、それらは sake ではあっても「日本酒」ではない。",zh:"全國性地理標示將「日本酒」一詞保留給以日本產米、於日本國內釀造的清酒。自奧勒岡、挪威到台灣，海外釀造的酒日益增多，它們仍是 sake，但不是「日本酒」。"} },
          { year:"2020–22", era:{en:"Reiwa",ja:"令和",zh:"令和"}, eraJp:"令和",
            title:{en:"Pandemic shock and the pivot to export",ja:"感染症下の打撃と輸出への転回",zh:"疫情衝擊與轉向出口"},
            text:{en:"Restaurant closure removes the channel through which most premium sake is sold. Breweries respond with direct-to-consumer sales, smaller formats, and a decisive push into overseas markets. Export value nearly doubles across the decade.",ja:"飲食店の休業は、プレミアムな日本酒の主要な販売経路を奪った。蔵は消費者直販、小容量規格、そして海外市場への決定的な進出で応じた。輸出額はこの十年でほぼ倍増する。",zh:"餐飲停業切斷了高端日本酒的主要銷售管道。酒藏以直接面向消費者的銷售、小容量規格，以及果斷進軍海外市場作為回應。出口額在此十年間近乎倍增。"} },
          { year:"2024", era:{en:"Reiwa",ja:"令和",zh:"令和"}, eraJp:"令和6年12月4日",
            title:{en:"UNESCO inscription",ja:"ユネスコ無形文化遺産登録",zh:"聯合國教科文組織列名"}, jp:"日本の伝統的酒造り",
            text:{en:"“Traditional knowledge and skills of sake-making with kōji mould in Japan” is inscribed on the Representative List of the Intangible Cultural Heritage of Humanity at the 19th session of the Committee. The element covers not only sake but shōchū, awamori and mirin — everything made with kōji — and recognises the transmission of the craft through apprenticeship, the role of the tōji, and the social bonds between brewers, farmers and communities.",ja:"「日本の伝統的酒造り」が、第十九回政府間委員会において、人類の無形文化遺産の代表一覧表に記載された。対象は日本酒に限らず、焼酎・泡盛・みりん——麹を用いるすべて——に及び、徒弟制による技の伝承、杜氏の役割、蔵人・農家・地域社会のあいだの結びつきを認めるものである。",zh:"「日本傳統麴菌釀酒的知識與技藝」於第十九屆政府間委員會會議上，列入人類非物質文化遺產代表名錄。此項目不僅涵蓋日本酒，亦包含燒酎、泡盛與味醂——所有使用麴菌者——並肯定師徒制的技藝傳承、杜氏的角色，以及釀者、農民與社群之間的連結。"} },
          { year:"2025", era:{en:"Reiwa",ja:"令和",zh:"令和"}, eraJp:"令和7年",
            title:{en:"Record export, record concentration",ja:"輸出最高額と産地集中",zh:"出口創高與產地集中"},
            text:{en:"Exports reach ¥45.9 billion across 81 countries. Three more GIs are registered — Kyoto, Tottori, Fukuoka — bringing the sake total to 23. Meanwhile the number of active breweries continues to fall by roughly thirty a year.",ja:"輸出は八十一か国・地域に対し四百五十九億円に達する。京都・鳥取・福岡の三つのGIが新たに登録され、清酒のGIは二十三となった。一方で、稼働する蔵の数は年に三十ほどの割合で減り続けている。",zh:"出口達 459 億日圓，銷往 81 個國家與地區。京都、鳥取、福岡三個 GI 新獲註冊，使清酒 GI 總數達 23 個。與此同時，實際營運的酒藏數量仍以每年約三十家的速度減少。"} }
        ] },
        { t:"quote",
          text:{ en:"“Sake is a beverage of grains and water that is deeply rooted in Japanese culture… the practice fosters social cohesion among the craftspeople, farmers and communities involved.”",
                 ja:"「日本酒は、日本文化に深く根ざした穀物と水の酒である……この営みは、職人・農家・関わる地域社会のあいだに社会的結束をもたらす。」",
                 zh:"「日本酒是深植於日本文化、以穀物與水製成的飲品……此一實踐在工匠、農民與相關社群之間促成社會凝聚。」" },
          cite:{ en:"UNESCO, Representative List of the Intangible Cultural Heritage of Humanity, 2024",
                 ja:"ユネスコ 人類の無形文化遺産代表一覧表、2024年",
                 zh:"聯合國教科文組織 人類非物質文化遺產代表名錄，2024 年" } }
      ]
    },

    { t:"section", id:"threads",
      title:{ en:"Four threads worth following", ja:"四つの通奏低音", zh:"四條值得追蹤的線索" }, jp:"通史",
      body:[
        { t:"figure",
          caption:{
            en:"The four threads laid on one axis, with a break at 1600 because almost everything happened after it. Read across and each line is a single unfinished argument: how to acidify a mash, how much of the grain to throw away, whether the microbes should be the building's or the catalogue's, and who is actually the author of the drink. Read down and the columns line up in a way that is not a coincidence — the 1900s cluster is the decade the state built a research institute and a competition, and every thread jumped at once.",
            ja:"四つの通奏低音を一本の軸に置いたもの。一六〇〇年で軸を折ってあるのは、ほとんどすべてがそれ以後に起きたからである。横に読めば、いずれの線も一つの終わらぬ論争である——醪をいかにして酸性にするか、粒をどれだけ捨てるか、微生物は建物のものか目録のものか、そして、この飲みものの著者は実のところ誰か。縦に読めば、列の揃い方が偶然でないことが分かる。一九〇〇年代の塊は、国が試験所と鑑評会を建てた十年であり、そこで四つの線が同時に跳んだ。",
            zh:"四條線索並置於同一條軸上，並在一六〇〇年處折斷——因為幾乎一切都發生在那之後。橫著讀，每一條線都是一場未完的爭論：如何使醪酸化、該丟掉穀粒的多少、微生物該屬於建築還是屬於菌種目錄，以及——這杯酒真正的作者是誰。直著讀，各欄的對齊並非巧合：一九〇〇年代那一叢，正是國家設立試驗所與鑑評會的那十年，於是四條線同時起跳。" },
          svg: function (lang, L) {
            var W = 760, H = 366, GA = 340, GB = 380, AXY = 306;
            function pa(y) { return 170 + (y - 700) * 0.189; }
            function pb(y) { return 380 + (y - 1600) * 0.824; }
            var threads = [
              { y:58, c:"#7E8C78", jp:"酸", n:{ en:"control of acid", ja:"酸の制御", zh:"酸的控制" },
                st:[ { x:pa(1500), t:"菩提酛", d:{ en:"15–16c", ja:"十五〜十六世紀", zh:"十五～十六世紀" } },
                     { x:pb(1650), t:"生酛",   d:{ en:"17c", ja:"十七世紀", zh:"十七世紀" } },
                     { x:pb(1909), t:"山廃・速醸", d:"1909–10" } ] },
              { y:124, c:"#A08F73", jp:"精米", n:{ en:"polishing", ja:"粒を削る", zh:"削去外層" },
                st:[ { x:pa(1550), t:"諸白", d:{ en:"16c", ja:"十六世紀", zh:"十六世紀" } },
                     { x:pb(1700), t:"水車精米", d:{ en:"Edo", ja:"江戸", zh:"江戶" } },
                     { x:pb(1933), t:"竪型精米機", d:"1933" },
                     { x:pb(2015), t:"精米 23%", d:{ en:"2010s", ja:"二〇一〇年代", zh:"2010 年代" } } ] },
              { y:190, c:"#7C8E99", jp:"微生物", n:{ en:"who owns the microbes", ja:"微生物は誰のものか", zh:"微生物屬於誰" },
                span:{ a:170, b:pb(1906), t:"蔵付き", d:{ en:"before 1906", ja:"一九〇六年以前", zh:"1906 年以前" } },
                st:[ { x:pb(1906), t:"純粋培養", d:"1906" },
                     { x:pb(2000), t:"回帰", d:{ en:"1990s –", ja:"一九九〇年代〜", zh:"1990 年代起" } } ] },
              { y:256, c:"#8B857C", jp:"国家", n:{ en:"the state as author", ja:"著者としての国家", zh:"作為作者的國家" },
                st:[ { x:pa(701), t:"造酒司", d:{ en:"8c", ja:"八世紀", zh:"八世紀" } },
                     { x:pb(1880), t:"酒税", d:{ en:"1880s", ja:"明治の酒税", zh:"明治酒稅" }, below:true },
                     { x:pb(1911), t:"鑑評会", d:"1911" },
                     { x:pb(2015), t:"GI", d:"2015" } ] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j;
            for (i = 0; i < threads.length; i++) {
              var th = threads[i], y = th.y;
              s += '<text x="30" y="' + (y - 3) + '" font-size="12.5" fill="#201E1B">' + th.jp + '</text>';
              s += '<text x="30" y="' + (y + 11) + '" font-size="9" fill="#8B857C">' + L(th.n) + '</text>';
              s += '<line x1="170" y1="' + y + '" x2="' + GA + '" y2="' + y + '" stroke="#DED8CB"/>';
              s += '<line x1="' + GB + '" y1="' + y + '" x2="730" y2="' + y + '" stroke="#DED8CB"/>';
              if (th.span) {
                s += '<rect x="' + th.span.a + '" y="' + (y - 5) + '" width="' + (GA - th.span.a) + '" height="10" fill="#E4EAEC"/>';
                s += '<rect x="' + GB + '" y="' + (y - 5) + '" width="' + (th.span.b - GB) + '" height="10" fill="#E4EAEC"/>';
                s += '<text x="450" y="' + (y - 21) + '" text-anchor="middle" font-size="10.5" fill="#4F6672">' + th.span.t + '</text>';
                s += '<text x="450" y="' + (y - 9) + '" text-anchor="middle" font-size="8.5" fill="#8B857C">' + L(th.span.d) + '</text>';
              }
              for (j = 0; j < th.st.length; j++) {
                var p = th.st[j], below = !!p.below;
                s += '<rect x="' + (p.x - 4.5).toFixed(1) + '" y="' + (y - 4.5) + '" width="9" height="9" fill="' + th.c + '"/>';
                s += '<text x="' + p.x.toFixed(1) + '" y="' + (below ? y + 20 : y - 19) + '" text-anchor="middle" font-size="10.5" fill="#201E1B">' + p.t + '</text>';
                s += '<text x="' + p.x.toFixed(1) + '" y="' + (below ? y + 31 : y - 7) + '" text-anchor="middle" font-size="8.5" fill="#8B857C">' + L(p.d) + '</text>';
              }
            }
            /* axis */
            s += '<line x1="170" y1="' + AXY + '" x2="' + GA + '" y2="' + AXY + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + GB + '" y1="' + AXY + '" x2="730" y2="' + AXY + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + (GA + 8) + '" y1="' + (AXY - 8) + '" x2="' + (GA + 16) + '" y2="' + (AXY + 8) + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + (GA + 22) + '" y1="' + (AXY - 8) + '" x2="' + (GA + 30) + '" y2="' + (AXY + 8) + '" stroke="#B4AC9C"/>';
            var ta = [700, 1000, 1300, 1600], tb = [1700, 1800, 1900, 2000];
            for (i = 0; i < ta.length; i++) {
              s += '<line x1="' + pa(ta[i]).toFixed(1) + '" y1="' + AXY + '" x2="' + pa(ta[i]).toFixed(1) + '" y2="' + (AXY + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + pa(ta[i]).toFixed(1) + '" y="' + (AXY + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + ta[i] + '</text>';
            }
            for (i = 0; i < tb.length; i++) {
              s += '<line x1="' + pb(tb[i]).toFixed(1) + '" y1="' + AXY + '" x2="' + pb(tb[i]).toFixed(1) + '" y2="' + (AXY + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + pb(tb[i]).toFixed(1) + '" y="' + (AXY + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + tb[i] + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "年は広く受け入れられている目安であり、いずれの技も一夜にして現れはしなかった。軸は一六〇〇年で折ってある。"
                  : lang === "zh" ? "年份為普遍採用的概略時點，沒有任何一項技術是一夜之間出現的。軸線在一六〇〇年處折斷。"
                  : "The dates are the commonly accepted markers; none of these techniques appeared overnight. The axis is broken at 1600.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"compare", cols:2, items:[
          { title:{en:"Control of acid",ja:"酸の制御",zh:"酸的控制"}, jp:"菩提酛→生酛→山廃→速醸",
            text:{en:"Every starter method in sake's history is an answer to one question: how do you make the mash acidic enough to exclude spoilage organisms before the yeast has made any alcohol? Bodaimoto sours the water first; kimoto and yamahai wait for wild lactic bacteria; sokujō adds the acid directly. The problem never changes; only the elegance of the solution.",ja:"日本酒史のあらゆる酒母法は、一つの問いへの答えである——酵母がまだアルコールを作っていない段階で、いかにして醪を雑菌が生きられないほど酸性にするか。菩提酛は先に水を酸性にし、生酛と山廃は野生の乳酸菌を待ち、速醸は酸を直接加える。問題は変わらず、解の優雅さだけが変わる。",zh:"日本酒史上每一種酒母工法，都是對同一問題的回答：在酵母尚未產生任何酒精之前，如何讓醪酸到足以排除雜菌？菩提酛先使水酸化；生酛與山廢等待野生乳酸菌；速釀則直接加酸。問題始終不變，改變的只是解法的優雅程度。"} },
          { title:{en:"Removing the outside of the grain",ja:"粒の外側を削ること",zh:"削去穀粒的外層"}, jp:"諸白→水車→竪型精米機",
            text:{en:"Protein and lipid concentrate in the outer layers of a rice grain and produce heavy, coarse, quickly-ageing flavours. The entire arc from <em>morohaku</em> in the 1500s to Satake's vertical mill in 1933 to today's 23%-and-below daiginjō is one continuous pursuit of a cleaner grain — and, arguably, one continuous argument about whether cleaner is better.",ja:"たんぱく質と脂質は米粒の外層に集中し、重く粗く、早く老ねる味を生む。一五〇〇年代の諸白から一九三三年の佐竹の竪型精米機、そして今日の精米歩合23%以下の大吟醸に至る弧は、より清らかな米粒を求める一続きの営みであり——同時に、清らかであることが善いのかどうかをめぐる、一続きの論争でもある。",zh:"蛋白質與脂質集中於米粒外層，產生厚重、粗糙、易老化的風味。從 1500 年代的諸白，到 1933 年佐竹的立式精米機，再到今日精米步合 23% 以下的大吟釀，這條弧線是對更潔淨米粒的持續追求——同時也是關於「更潔淨是否更好」的持續辯論。"} },
          { title:{en:"Who owns the microbes",ja:"微生物は誰のものか",zh:"微生物屬於誰"}, jp:"蔵付き→純粋培養→回帰",
            text:{en:"Before 1906 a brewery's character came from whatever lived in its building. After pure-culture yeast, character became a purchasing decision, and sake across Japan converged. The recent revival of house yeasts, wooden vats, and kimoto is a deliberate re-introduction of the uncontrolled — the same argument, played in reverse.",ja:"一九〇六年以前、蔵の個性は建物に棲む微生物に由来した。純粋培養酵母の登場後、個性は購買の選択となり、日本中の酒は収斂した。近年の蔵付き酵母・木桶・生酛の復活は、制御されないものを意図的に呼び戻す試みである——同じ議論を、逆向きに演じている。",zh:"1906 年以前，酒藏的個性來自棲息於建築中的微生物。純粹培養酵母出現後，個性成為採購決策，全日本的酒趨於收斂。近年復活藏付酵母、木桶與生酛，是刻意重新引入不受控之物——同一場辯論，反向重演。"} },
          { title:{en:"The state as author",ja:"著者としての国家",zh:"作為作者的國家"}, jp:"造酒司→酒税→鑑評会→GI",
            text:{en:"Almost nothing about sake is purely artisanal. The Bureau of Sake, the Meiji liquor tax, the National Research Institute, the annual competition, the grading system, the 1990 labelling standard and the GI regime are all state instruments, and each one visibly changed what was in the bottle. Sake is the most legislated drink in the world, and reading its history requires reading its statutes.",ja:"日本酒において、純粋に職人的な事柄はほとんどない。造酒司、明治の酒税、醸造試験所、全国新酒鑑評会、級別制度、一九九〇年の表示基準、そしてGI制度——すべて国家の装置であり、そのいずれもが瓶の中身を目に見えて変えた。日本酒は世界で最も立法された酒であり、その歴史を読むことは、その法令を読むことである。",zh:"日本酒中幾乎沒有純粹屬於工匠的事物。造酒司、明治酒稅、釀造試驗所、全國新酒鑑評會、級別制度、1990 年標示基準與 GI 制度——皆為國家工具，且每一項都明顯改變了瓶中之物。日本酒是世上受立法規範最深的酒，讀它的歷史，就必須讀它的法令。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"chronology.html", why:{ en:"The same story as a single dated line, from rice to the present.", ja:"同じ物語を、米から今日までの一本の年表として。", zh:"同一個故事，化為從稻米到今天的一條年表。" } },
      { href:"people.html", why:{ en:"The named individuals who moved the craft, and what each moved.", ja:"技を動かした名のある人々と、その各々が動かしたもの。", zh:"推動這門技藝的具體人物，以及他們各自推動了什麼。" } },
      { href:"shinto.html", why:{ en:"Where the drink begins: an offering before it was a product.", ja:"この飲み物の始まり。商品である前に、供え物であった。", zh:"這款飲料的起點：在成為商品之前，它是供品。" } },
      { href:"ricepolicy.html", why:{ en:"A century of state decisions about rice, read through the bottle.", ja:"米をめぐる国家の決定の一世紀を、瓶を通して読む。", zh:"一個世紀的國家稻米決策，透過一支酒來讀。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- people */
SAKE.pages["people"] = {
  kicker: { en: "Foundations · 05", ja: "基礎 · 05", zh: "基礎 · 05" },
  title:  { en: "People", ja: "人物", zh: "人物" },
  jp: "酒を変えた人々",
  lede: {
    en: "Sake is made by crews, not by geniuses, and most of the people who made it were never named. But a small number of individuals changed what the drink could be — by noticing that a well in the next town produced better sake, by proving that a step everyone believed essential could simply be skipped, by isolating one yeast out of thousands, by refusing to accept that a warm prefecture could not brew well. This page collects those figures, the dates that can be checked, and a warning about the way brewing history flatters the named few at the expense of the thousands who did the work.",
    ja: "酒は蔵人の集団が造るものであって、天才が造るものではない。そして酒を造ってきた人々の大半は、名を残していない。しかしごく少数の人物が、この飲み物の可能性そのものを変えた——隣町の井戸の水がよい酒を生むと気づき、誰もが不可欠と信じていた工程が実は省けると証明し、数千のなかから一株の酵母を分離し、暖かい県ではよい酒は造れないという通念を拒んだ人々である。このページは、そうした人物と、確認できる年代と、そして酒造史が名を残した少数を過大に語り、実際に働いた数千人を語らない癖への注意とを集める。",
    zh: "清酒是由藏人的團隊釀成的，不是由天才釀成的；而釀過酒的人絕大多數從未留下名字。但確實有極少數的人改變了這種飲品的可能性——有人注意到鄰鎮的一口井能釀出更好的酒，有人證明了眾人視為不可或缺的工序其實可以省略，有人從數千株中分離出一株酵母，有人拒絕接受「溫暖的縣份釀不出好酒」這個成見。本頁收錄這些人物、可查證的年代，以及一則提醒：釀造史往往厚待留名的少數，而虧待了真正做事的數千人。"
  },
  body: [

    { t:"note", text:{
      en:"Dates below are given as they appear in Japanese-language reference sources; where a date is disputed between sources, both are shown. Living figures are described by role and documented achievement only.",
      ja:"以下の年代は日本語の資料に記されたところによる。資料間で異同のあるものは併記した。存命の人物については、役割と記録の残る業績のみを記す。",
      zh:"以下年代依日文資料所載；若各資料說法不一，則並列呈現。在世人物僅記其角色與有紀錄可考的成就。" } },

    { t:"section", id:"before",
      title:{ en:"Before the microscope", ja:"顕微鏡以前", zh:"顯微鏡之前" }, jp:"江戸から明治へ",
      body:[
        { t:"p", text:{
          en:"Edo-period brewing had no cell theory, no thermometer worth the name, and no chemistry. What it had instead was an unusually disciplined empiricism: written brewing records kept over generations, an apprenticeship system that transmitted procedure exactly, and a market — Nada shipping to Edo — that punished failure immediately and expensively. The discoveries of this period were made by merchants and brewery owners, not scientists, and they were made by noticing differences that nobody could yet explain.",
          ja:"江戸期の酒造りには細胞説もなく、名に値する温度計もなく、化学もなかった。あったのは、異様なまでに規律ある経験主義である——代々書き継がれた酒造帳、手順をそのまま伝える徒弟制、そして失敗を即座に、しかも高くつく形で罰する市場（灘から江戸への下り酒）。この時代の発見は、科学者ではなく商人と蔵元によってなされた。そして誰にもまだ説明できない差異に気づくことによってなされた。",
          zh:"江戶時期的釀酒沒有細胞學說，沒有像樣的溫度計，也沒有化學。它有的是一種異常嚴謹的經驗主義：世代書寫累積的酒造帳、原封不動傳遞工序的學徒制，以及一個會立刻且昂貴地懲罰失敗的市場——灘運往江戶的「下り酒」。這個時期的發現由商人與藏元完成，而非科學家；他們的方法，是察覺到當時無人能解釋的差異。" } },

        { t:"defs", items:[
          { term:{ en:"Kōnoike Shinroku", ja:"鴻池新六", zh:"鴻池新六" }, jp:"鴻池新六", romaji:"Kōnoike Shinroku",
            def:{ en:"The clarified-sake legend. The story — told in Itami and repeated everywhere since — is that around the turn of the seventeenth century a disgruntled servant threw ash into a vat of the Kōnoike house's sake, and that the sake, instead of being ruined, cleared. Ash raises pH, precipitates protein and drops out colour; the story is chemically plausible and historically unverifiable, and it is best read as a folk memory of the moment Japan learned to make <em>seishu</em> rather than as a record of one afternoon. The Kōnoike family went on to become one of Osaka's great merchant houses.",
              ja:"清酒誕生伝説の人。伊丹に伝わり、以後いたるところで繰り返されてきた話——十七世紀初頭のころ、恨みを抱いた使用人が鴻池家の酒桶に灰を投げ入れたところ、酒は駄目になるどころか澄んだ、というものである。灰はpHを上げ、たんぱく質を沈殿させ、色を落とす。化学的にはありうる話であり、史料的には確かめようがない。ある午後の記録としてではなく、日本が清酒を得た瞬間の民間の記憶として読むのがよい。鴻池家はのちに大坂を代表する豪商となった。",
              zh:"清酒誕生傳說中的人物。伊丹流傳、其後處處被複述的故事是：十七世紀初，一名心懷不滿的僕役把灰投入鴻池家的酒桶，結果酒非但沒壞，反而澄清了。灰會提高 pH、使蛋白質沉澱並脫色；這個說法在化學上說得通，在史料上則無從查證。與其當作某個下午的實錄，不如視為日本學會釀造「清酒」那一刻的民間記憶。鴻池家日後成為大坂首屈一指的豪商。" } },

          { term:{ en:"Yamamura Tazaemon VI", ja:"六代目 山邑太左衛門", zh:"六代 山邑太左衛門" }, jp:"山邑太左衛門", romaji:"Yamamura Tazaemon",
            def:{ en:"Head of the Sakura Masamune house, and the man who identified <em>miyamizu</em>. Sources give the year as 1837 or 1840. He ran two breweries — one at Nishinomiya, one at Uozaki — and could not understand why the Nishinomiya sake was consistently better. He moved the rice, then the tools, then the entire brewing crew from one to the other; nothing changed. Finally he carted water from the Umenoki well at Nishinomiya to Uozaki by ox, and the Uozaki sake matched. It is the first controlled experiment in Japanese brewing: change one variable at a time until the variable declares itself. The well water he isolated is still the defining resource of the Nada district.",
              ja:"櫻正宗の当主にして、宮水を突きとめた人物。年は資料により天保八年（1837）とも天保十一年（1840）ともされる。彼は西宮と魚崎に蔵を持ち、なぜ西宮の酒だけが常によいのか分からなかった。米を移し、道具を移し、ついには蔵人ごと入れ替えたが、何も変わらない。最後に西宮の梅ノ木井戸の水を牛車で魚崎へ運んだところ、魚崎の酒が並んだ。これは日本の酒造りにおける最初の対照実験である——変数を一つずつ替え、変数のほうから名乗り出るのを待つ。彼が特定した井戸水は、今なお灘という産地を定義する資源であり続けている。",
              zh:"櫻正宗的當家，也是查明「宮水」的人。年份各家資料或作 1837 年，或作 1840 年。他在西宮與魚崎各有一座酒藏，卻始終不明白為何西宮的酒總是比較好。他換了米，換了器具，最後連整批藏人都對調，結果毫無變化。最後他用牛車把西宮梅之木井的水運到魚崎，魚崎的酒便追上了。這是日本釀酒史上第一場對照實驗：一次只換一個變因，直到變因自己現身。他分離出的這口井水，至今仍是灘這個產地的決定性資源。" } },

          { term:{ en:"The Nada shipping houses", ja:"灘の下り酒問屋", zh:"灘的「下り酒」批發商" }, jp:"下り酒", romaji:"kudari-zake",
            def:{ en:"Not one person but a class of them. From the mid-eighteenth century the Nada brewers shipped sake to Edo in <em>tarukaisen</em>, barrel ships, racing each other for the first delivery of the season. The competition was commercial, but its effect was technical: it forced standardisation of vat sizes, of cask capacity, of the brewing calendar, and it made brewing quality a matter of reputation that could be bought and sold. Much of what looks like tradition in sake is in fact the residue of an eighteenth-century logistics problem.",
              ja:"一人ではなく、一つの階層である。十八世紀半ばから、灘の蔵は樽廻船で江戸へ酒を送り、その年の初荷を競った。競争は商業的なものであったが、その効果は技術的であった——桶の寸法、樽の容量、酒造りの暦を標準化させ、酒質を売買可能な評判の問題に変えたのである。日本酒において伝統に見えるものの多くは、実は十八世紀の物流問題の残滓である。",
              zh:"這不是一個人，而是一個階層。自十八世紀中葉起，灘的酒藏以樽迴船將酒運往江戶，競相搶當季首批到貨。競爭是商業性的，效果卻是技術性的：它迫使酒桶尺寸、木樽容量與釀造曆法標準化，並使酒質變成一種可買賣的名聲。日本酒中許多看似傳統的東西，其實是十八世紀物流問題留下的沉澱。" } }
        ] }
      ] },

    { t:"section", id:"meiji",
      title:{ en:"The laboratory generation", ja:"実験室の世代", zh:"實驗室的世代" }, jp:"明治・大正",
      body:[
        { t:"figure",
          caption:{
            en:"Nine lives against one axis. The striking thing is not that these people existed but that six of them were born within thirty years of each other and did their decisive work inside two decades — the shaded band, when the state built a research institute and a national competition and gave a generation of chemists a reason to point their instruments at a drink. Almost everything a modern brewery does was settled by the men in that band. Kawamura, at the far right, is the exception that shows how long the gap was before anyone changed the picture again.",
            ja:"九つの生涯を、一本の軸に当てたもの。驚くべきはこの人々が存在したことではなく、そのうち六人が三十年のうちに生まれ、決定的な仕事を二十年のあいだに成したことである——影をつけた帯、国が試験所と全国の鑑評会を建て、一世代の化学者たちに、飲みものへ器械を向ける理由を与えた時期である。現代の蔵がすることのほとんどすべては、この帯のなかの者たちが定めた。右端の河村は例外であり、そして次に絵が描き替えられるまでの隔たりが、いかに長かったかを示している。",
            zh:"九段人生，放在同一條軸上。令人震動的不是這些人存在過，而是其中六位出生於彼此相距不到三十年之內，並在二十年之間完成了各自的決定性工作——也就是那條加了底色的帶：國家在此時建立了試驗所與全國鑑評會，並給了一整個世代的化學家一個把儀器對準一種飲品的理由。現代酒藏所做的幾乎一切，都由這條帶中的人所奠定。最右邊的河村是例外，也顯示出在有人再次改寫這幅圖景之前，中間隔了多久。" },
          svg: function (lang, L) {
            var W = 760, H = 402, X0 = 180, X1 = 720, A = 1840, B = 2000, Y0 = 78, RH = 30;
            function px(y) { return X0 + (y - A) / (B - A) * (X1 - X0); }
            var people = [
              { n:{ en:"Miura Senzaburō", ja:"三浦仙三郎", zh:"三浦仙三郎" }, jp:"三浦仙三郎", a:1847, b:1908,
                m:[{ y:1898, t:{ en:"the soft-water method, in print", ja:"軟水醸造法、書物に", zh:"軟水釀造法，付梓" } }] },
              { n:{ en:"Eda Kamajirō", ja:"江田鎌治郎", zh:"江田鎌治郎" }, jp:"江田鎌治郎", a:1872, b:1957,
                m:[{ y:1910, t:{ en:"sokujō", ja:"速醸酛", zh:"速釀酛" } }] },
              { n:{ en:"Kagi Kin'ichirō", ja:"嘉儀金一郎", zh:"嘉儀金一郎" }, jp:"嘉儀金一郎", a:1873, b:1945,
                m:[{ y:1909, t:{ en:"yamahai", ja:"山廃酛", zh:"山廢酛" }, up:true }] },
              { n:{ en:"Ikeda Kikunae", ja:"池田菊苗", zh:"池田菊苗" }, jp:"池田菊苗", a:1864, b:1936,
                m:[{ y:1908, t:{ en:"umami named", ja:"うま味と名づける", zh:"為旨味命名" }, up:true }] },
              { n:{ en:"Suzuki Umetarō", ja:"鈴木梅太郎", zh:"鈴木梅太郎" }, jp:"鈴木梅太郎", a:1874, b:1943,
                m:[{ y:1910, t:{ en:"oryzanin", ja:"オリザニン", zh:"米糠素" }, up:true },
                   { y:1921, t:{ en:"synthetic sake patented", ja:"合成清酒の特許", zh:"合成清酒專利" } }] },
              { n:{ en:"Nojiro Kin'ichi", ja:"野白金一", zh:"野白金一" }, jp:"野白金一", a:1876, b:1964,
                m:[{ y:1909, t:{ en:"the Kumamoto institute", ja:"熊本県酒造研究所", zh:"熊本縣酒造研究所" } }] },
              { n:{ en:"Taketsuru Masataka", ja:"竹鶴政孝", zh:"竹鶴政孝" }, jp:"竹鶴政孝", a:1894, b:1979,
                m:[{ y:1918, t:{ en:"sent to Scotland", ja:"スコットランドへ", zh:"被派往蘇格蘭" } }] },
              { n:{ en:"Sakaguchi Kin'ichirō", ja:"坂口謹一郎", zh:"坂口謹一郎" }, jp:"坂口謹一郎", a:1897, b:1994, m:[] },
              { n:{ en:"Kawamura Denbei", ja:"河村伝兵衛", zh:"河村傳兵衛" }, jp:"河村伝兵衛", nodate:true,
                m:[{ y:1986, t:{ en:"Shizuoka takes ten golds", ja:"静岡、金賞十点", zh:"靜岡奪下十面金賞" }, an:"end" }] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + people.length * RH;
            /* the decisive band */
            s += '<rect x="' + px(1904).toFixed(1) + '" y="' + (Y0 - 12) + '" width="' + (px(1911) - px(1904)).toFixed(1) + '" height="' + (BOT - Y0 + 12) + '" fill="#EDE5D2"/>';
            s += '<line x1="' + px(1904).toFixed(1) + '" y1="' + (Y0 - 30) + '" x2="' + px(1904).toFixed(1) + '" y2="' + (Y0 - 12) + '" stroke="#A08F73"/>';
            s += '<text x="' + px(1904).toFixed(1) + '" y="' + (Y0 - 36) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "国が器械を据える・1904–1911" : lang === "zh" ? "國家架起儀器・1904–1911" : "the state builds the apparatus · 1904–1911") + '</text>';
            var t, i, j;
            for (t = 1840; t <= 2000; t += 20) {
              s += '<line x1="' + px(t).toFixed(1) + '" y1="' + (Y0 - 12) + '" x2="' + px(t).toFixed(1) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(t).toFixed(1) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + t + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            for (i = 0; i < people.length; i++) {
              var p = people[i], y = Y0 + i * RH;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 12) + '" text-anchor="end" font-size="11" fill="#201E1B">' + L(p.n) + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 24) + '" text-anchor="end" font-size="9" fill="#8B857C">' + p.jp +
                   (p.nodate ? "" : "  " + p.a + "–" + p.b) + '</text>';
              if (!p.nodate) {
                s += '<rect x="' + px(p.a).toFixed(1) + '" y="' + (y + 6) + '" width="' + (px(p.b) - px(p.a)).toFixed(1) + '" height="9" fill="#DACFB8" stroke="#CDC6B9"/>';
              }
              for (j = 0; j < p.m.length; j++) {
                var mk = p.m[j], mx = px(mk.y);
                s += '<rect x="' + (mx - 4).toFixed(1) + '" y="' + (y + 2.5) + '" width="8" height="16" fill="#7C6B52"/>';
                var lx = (mk.an === "end" ? mx - 10 : mx + 10);
                s += '<text x="' + lx.toFixed(1) + '" y="' + (y + (mk.up ? -2 : 14)) + '" text-anchor="' + (mk.an === "end" ? "end" : "start") +
                     '" font-size="9.5" fill="#55504A">' + mk.y + ' · ' + L(mk.t) + '</text>';
              }
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "河村伝兵衛の生没年は公表された記録に見当たらない。年は本頁に述べたものである。"
                  : lang === "zh" ? "河村傳兵衛的生卒年在公開紀錄中查不到。所標年份即本頁文中所述者。"
                  : "Kawamura Denbei's dates are not in the published record. The years marked are those given on this page.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Between 1900 and 1930 sake was rebuilt on microbiology. The state had an interest: alcohol tax was at times the single largest source of national revenue, and a failed brewing season was a fiscal event. The Ministry of Finance opened the Brewing Experiment Station (醸造試験所) in Tokyo in 1904, and within a decade its staff had invented two starter methods still in use today, put the first national appraisal competition on the calendar, and begun distributing pure yeast cultures to breweries nationwide.",
          ja:"一九〇〇年から一九三〇年にかけて、日本酒は微生物学の上に組み直された。国家には利害があった——酒税は時に国税収入の最大項目であり、造りの失敗は財政上の事件だったのである。大蔵省は明治三十七年（1904）、東京に醸造試験所を開いた。そして十年のうちに、その職員たちは今日なお使われる二つの酒母法を発明し、全国規模の鑑評会を暦に載せ、純粋培養酵母の全国頒布を始めた。",
          zh:"一九〇〇至一九三〇年間，日本酒被重新奠基於微生物學之上。國家對此有其利害：酒稅一度是國家歲入的最大單項來源，一個失敗的釀造季就是一樁財政事件。大藏省於一九〇四年在東京設立釀造試驗所；十年之內，其職員發明了兩種至今仍在使用的酒母法，把全國性的鑑評會排進了年曆，並開始向全國酒藏頒布純粹培養酵母。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Miura Senzaburō", ja:"三浦仙三郎", zh:"三浦仙三郎" }, jp:"三浦仙三郎", romaji:"Miura Senzaburō",
            meta:{ en:"1847–1908 · Akitsu, Hiroshima", ja:"1847–1908・広島県安芸津", zh:"1847–1908・廣島安藝津" },
            text:{ en:"A merchant who bought a brewery in his twenties and spent thirty years failing at it. Akitsu's water is very soft — almost no calcium or magnesium — and soft water starves yeast of the minerals it needs, so his mash would stall, sour, and rot while Nada's hard-water sake succeeded. Rather than move, he made a study of the problem, ran season after season of experiments, and in 1898 published <em>Kaijōhō Jissenroku</em> (改醸法実践録), the practical record of an improved brewing method — the soft-water technique: colder, slower, longer, with more careful kōji and a much more patient fermentation. It is the direct ancestor of ginjō brewing, and Hiroshima's rise to sit alongside Nada and Fushimi begins with it. His motto, four characters carved everywhere in Akitsu, was <em>hyakushi senkai</em>: a hundred trials, a thousand revisions.",
              ja:"二十代で蔵を買い、三十年それに失敗し続けた商人である。安芸津の水は極めて軟らかく——カルシウムもマグネシウムもほとんどない——軟水は酵母から必要なミネラルを奪う。ゆえに彼の醪は止まり、酸敗し、腐造した。灘の硬水の酒が成功している傍らで、である。彼は移らなかった。問題を研究し、季を重ねて実験し、明治三十一年（1898）に『改醸法実践録』を著した。軟水醸造法——低く、遅く、長く、麹をより丁寧に、発酵をはるかに辛抱強く。これは吟醸造りの直接の祖であり、広島が灘・伏見と並ぶに至る道はここから始まる。安芸津のいたるところに刻まれた彼の座右の四字は「百試千改」であった。",
              zh:"一名二十多歲買下酒藏、而後失敗了三十年的商人。安藝津的水極軟——幾乎不含鈣與鎂——而軟水會讓酵母缺乏所需礦物質，於是他的醪停滯、酸敗、腐造，而灘的硬水酒卻一帆風順。他沒有搬走，而是把問題當作研究，一季又一季地實驗，並於一八九八年寫成《改釀法實踐錄》：軟水釀造法——更低溫、更慢、更長，麴要做得更細，發酵要耐心得多。這是吟釀釀造法的直系祖先，廣島得以與灘、伏見並列的路，正由此開始。他那句刻遍安藝津的四字箴言是「百試千改」。" } },

          { n:"2", title:{ en:"Kagi Kin'ichirō", ja:"嘉儀金一郎", zh:"嘉儀金一郎" }, jp:"嘉儀金一郎", romaji:"Kagi Kin'ichirō",
            meta:{ en:"1873–1945 · Brewing Experiment Station", ja:"1873–1945・醸造試験所", zh:"1873–1945・釀造試驗所" },
            text:{ en:"Joined the Brewing Experiment Station in 1904 and asked an impertinent question: is <em>yamaoroshi</em> — the freezing pre-dawn pole-mashing of rice and kōji that defines the kimoto starter — actually necessary? He showed that if water and kōji are combined and left for a few hours before the rice goes in, the kōji's own enzymes dissolve the starch without any mashing at all. He published the result in November 1909 as the <em>First Report on the Abolition of Yamaoroshi</em> (山卸廃止試験第一回報告), with a second report in 1911. The method took its name from the abolition: <em>yamaoroshi haishi moto</em>, contracted to <em>yamahai</em>. He was awarded a silver cup in 1916. It is the rarest kind of discovery — one that removes work without removing character.",
              ja:"明治三十七年（1904）に醸造試験所に入り、不遜な問いを立てた——生酛を生酛たらしめる、あの凍える未明の山卸は、本当に必要なのか。彼は、米を入れる前に水と麹を合わせて数時間置けば、麹自身の酵素が澱粉を溶かし、櫂で摺る必要はまったくないことを示した。明治四十二年（1909）十一月、「山卸廃止試験第一回報告」として発表し、四十四年（1911）に第二回報告を出した。手法の名はその廃止に由来する——山卸廃止酛、縮めて山廃。大正五年（1916）には銀杯を賜っている。これは最も稀な種類の発見である——労働を除いて、個性を除かない発見。",
              zh:"一九〇四年進入釀造試驗所，並提出了一個不客氣的問題：定義生酛的那道「山卸」——在凍寒的黎明前用櫂棒磨碎米與麴——真的必要嗎？他證明：若先把水與麴混合靜置數小時再下米，麴本身的酵素就能溶解澱粉，完全不必研磨。他於一九〇九年十一月發表〈山卸廢止試驗第一回報告〉，一九一一年再發第二回報告。工法之名即來自這項廢止：山卸廢止酛，簡稱山廢。一九一六年他獲頒銀杯。這是最罕見的一類發現——去掉勞動，而不去掉個性。" } },

          { n:"3", title:{ en:"Eda Kamajirō", ja:"江田鎌治郎", zh:"江田鎌治郎" }, jp:"江田鎌治郎", romaji:"Eda Kamajirō",
            meta:{ en:"1872–1957 · Niigata, then the Experiment Station", ja:"1872–1957・新潟から醸造試験所へ", zh:"1872–1957・新潟，後入釀造試驗所" },
            text:{ en:"Born in what is now Jōetsu, Niigata. Where Kagi removed a step from the traditional starter, Eda removed the tradition. His insight was that the entire point of the four-week kimoto ritual is to build up lactic acid, and that lactic acid can simply be added. Announced in 1909 (published the following year), the <em>sokujō-moto</em> or fast starter acidifies the tank on day one, cuts the schedule from roughly a month to about two weeks, and makes the outcome predictable. It is now used for around ninety per cent of all sake made. Adoption was fastest in the north and east and slowest in Hyōgo and Kyoto, where the old houses had least reason to change; the decisive shift came in the 1960s and 70s. Every argument about kimoto versus sokujō is an argument about what was lost in this one substitution.",
              ja:"現在の新潟県上越市に生まれた。嘉儀が伝統的酒母から一工程を除いたのに対し、江田は伝統そのものを除いた。彼の洞察は、四週間の生酛の儀式の眼目はつまるところ乳酸を蓄えることにあり、乳酸ならば単に加えればよい、というものである。明治四十二年（1909）に発表され（翌年公刊）、速醸酛は初日に仕込みを酸性化し、日程をおよそ一か月から二週間ほどに縮め、結果を予測可能にした。現在では全清酒のおよそ九割がこれで造られる。普及は東北・東日本で速く、変える理由の最も乏しかった兵庫・京都の老舗で最も遅かった。決定的な移行は一九六〇〜七〇年代である。生酛か速醸かというあらゆる議論は、この一つの置換で何が失われたのかという議論にほかならない。",
              zh:"生於今新潟縣上越市。嘉儀從傳統酒母中拿掉了一道工序，江田則拿掉了傳統本身。他的洞見是：四週生酛儀式的全部重點，不過是累積乳酸；而乳酸大可直接加進去。速釀酛於一九〇九年發表（翌年刊行），在第一天就把酒槽酸化，把工期從約一個月縮短到約兩週，並使結果可預測。如今約有九成的清酒以此法釀成。普及在東北與東日本最快，在最沒有改變理由的兵庫、京都老鋪最慢；決定性的轉折發生在一九六〇至七〇年代。所有關於生酛與速釀的爭論，說到底都是在爭論這一次替換究竟失去了什麼。" } },

          { n:"4", title:{ en:"Nojiro Kin'ichi", ja:"野白金一", zh:"野白金一" }, jp:"野白金一", romaji:"Nojiro Kin'ichi",
            meta:{ en:"1876–1964 · Kumamoto Sake Research Institute", ja:"1876–1964・熊本県酒造研究所", zh:"1876–1964・熊本縣酒造研究所" },
            text:{ en:"Kumamoto's breweries founded a shared research institute in 1909 and made Nojiro its first technical director. He designed the <em>nojiro-style kōji room</em> — a raised, vented ceiling that lets the kōji room hold heat and shed moisture at the same time — and it became the standard pattern for kōji rooms nationwide. His larger legacy came in 1952, when he isolated and propagated the house yeast of the institute's own brewery, Kōro. Distributed by the Brewing Society of Japan as <strong>Kyōkai No. 9</strong>, that strain became the aromatic engine of the entire ginjō era; for four decades essentially every gold medal at the national appraisal was fermented with it or its descendants. The institute still both researches and brews, which is rare.",
              ja:"熊本の蔵元たちは明治四十二年（1909）に共同の研究所を設立し、野白を初代技師長に迎えた。彼は野白式麹室——室が熱を保ちながら同時に湿気を逃がすための、持ち上げられた通気天井——を設計し、それは全国の麹室の標準型となった。より大きな遺産は昭和二十七年（1952）に来る。研究所自身の蔵「香露」の蔵付き酵母を分離・培養したのである。日本醸造協会から<strong>きょうかい9号</strong>として頒布されたこの株は、吟醸時代全体の香りの機関となった。四十年にわたり、全国新酒鑑評会の金賞は事実上すべてこの株かその後裔で醸されている。研究所は今も研究と醸造の両方を行っており、それは稀なことである。",
              zh:"熊本的酒藏於一九〇九年設立了共同的研究所，並延攬野白出任首任技師長。他設計了「野白式麴室」——抬高並帶通氣的天花，讓麴室能同時保溫與排濕——此後成為全國麴室的標準型制。更大的遺產出現在一九五二年：他分離並培養了研究所自家酒藏「香露」的藏付酵母。這株酵母由日本釀造協會以<strong>協會 9 號</strong>之名頒布，成為整個吟釀時代的香氣引擎；此後四十年，全國新酒鑑評會的金賞幾乎全由它或其後代發酵而成。該研究所至今仍兼營研究與釀造，這相當罕見。" } },

          { n:"5", title:{ en:"Suzuki Umetarō", ja:"鈴木梅太郎", zh:"鈴木梅太郎" }, jp:"鈴木梅太郎", romaji:"Suzuki Umetarō",
            meta:{ en:"1874–1943 · RIKEN", ja:"1874–1943・理化学研究所", zh:"1874–1943・理化學研究所" },
            text:{ en:"The chemist who isolated oryzanin — thiamine, vitamin B<sub>1</sub> — from rice bran in 1910, and who then turned that expertise on sake for reasons of state. After the rice riots of 1918, with sake brewing consuming seven to eight per cent of Japan's annual rice crop, RIKEN set him to making sake without rice. A fermentation route in 1919 produced something undrinkable; a pure-synthesis route, building the drink from alcohol, sugars, amino acids and succinic acid, was patented in 1921 and on the market by 1923. <em>Riken-shu</em> was a commercial success large enough to fund a substantial part of RIKEN's basic research through the 1930s. Its descendant, <em>gōsei seishu</em>, is still legally defined and still sold — and it is why Japanese law had to define what real sake is.",
              ja:"明治四十三年（1910）に米糠からオリザニン——チアミン、ビタミンB<sub>1</sub>——を単離した化学者であり、その知見を国家的理由から酒に向けた人物である。大正七年（1918）の米騒動ののち、酒造りが年間米生産の七〜八パーセントを費やしていたことから、理化学研究所は彼に米を使わない酒を造らせた。大正八年（1919）の発酵法は飲めたものではなかったが、アルコール・糖・アミノ酸・コハク酸から組み立てる純合成法が大正十年（1921）に特許となり、十二年（1923）には市場に出た。理研酒は商業的に成功し、一九三〇年代を通じて理研の基礎研究の相当部分を支えた。その子孫である合成清酒は今も法律に定義され、今も売られている——そして日本の法律が「本物の清酒とは何か」を定義せざるを得なくなった理由でもある。",
              zh:"一九一〇年自米糠中分離出「オリザニン」——硫胺、維生素 B<sub>1</sub>——的化學家；其後又因國家理由把這份專長轉向清酒。一九一八年米騷動之後，由於釀酒消耗了日本年度稻米產量的七至八個百分點，理化學研究所指派他造出不用米的酒。一九一九年的發酵路線做出了難以入口的東西；而以酒精、糖、胺基酸與琥珀酸組建的純合成路線於一九二一年取得專利，一九二三年上市。「理研酒」的商業成功之大，足以在整個一九三〇年代支撐理研相當一部分的基礎研究。其後裔「合成清酒」至今仍有法律定義、仍在販售——這也正是日本法律不得不定義「什麼才是真正的清酒」的原因。" } }
        ] }
      ] },

    { t:"section", id:"postwar",
      title:{ en:"The postwar scientists", ja:"戦後の科学者たち", zh:"戰後的科學家" }, jp:"昭和",
      body:[
        { t:"defs", items:[
          { term:{ en:"Sakaguchi Kin'ichirō", ja:"坂口謹一郎", zh:"坂口謹一郎" }, jp:"坂口謹一郎", romaji:"Sakaguchi Kin'ichirō",
            def:{ en:"1897–1994. Born in Takada, Niigata; professor at Tokyo Imperial University's agriculture faculty and founding director of its Institute of Applied Microbiology; later vice-director of RIKEN. He is the figure who made fermentation science respectable as a discipline in Japan and who insisted, against considerable professional embarrassment, that sake was a subject worth a serious scholar's life. His 1964 book <em>Nihon no Sake</em> — still in print — is the single most influential general account of the drink ever written, and it is written as cultural history as much as chemistry. He received the Order of Culture. A laboratory flask design still bears his name.",
              ja:"1897–1994。新潟県高田に生まれ、東京帝国大学農学部教授、応用微生物研究所の初代所長、のち理化学研究所副理事長。日本において発酵科学を一個の学問として認めさせた人物であり、専門家としての相当な体裁の悪さを押して、酒は真剣な学者が一生を賭けるに値する主題であると主張し続けた人物である。昭和三十九年（1964）の『日本の酒』は——今なお版を重ねている——この飲み物についてこれまでに書かれた最も影響力ある概説であり、化学であると同時に文化史として書かれている。文化勲章を受章。実験用フラスコの一形式には今も彼の名が残る。",
              zh:"1897–1994。生於新潟高田；東京帝國大學農學部教授、應用微生物研究所首任所長，後任理化學研究所副理事長。他讓發酵科學在日本成為一門受尊重的學科，並頂著相當程度的專業尷尬堅持主張：清酒是值得一位嚴肅學者投注一生的主題。他一九六四年的《日本の酒》——至今仍在印行——是關於這種飲品最具影響力的通論著作，既是化學，也是文化史。他獲頒文化勳章。實驗室裡的一款燒瓶至今仍以他為名。" } },

          { term:{ en:"Kawamura Denbei", ja:"河村伝兵衛", zh:"河村傳兵衛" }, jp:"河村伝兵衛", romaji:"Kawamura Denbei",
            def:{ en:"The prefectural researcher who broke the rule that warm places cannot brew. Shizuoka is mild, humid and had no brewing reputation whatever; its sake was a local commodity. Working at the prefecture's industrial research centre, Kawamura developed a family of prefectural yeasts — HD-1 and its siblings — selected not for competition-winning aroma but for clean, low-key, dry fermentation suited to a warm cellar and to eating with food. He then did the harder half of the job: he taught the technique, brewery by brewery, until the prefecture's brewers were working to a shared method. At the 1986 National New Sake Appraisal, Shizuoka took ten gold medals and seven further awards — roughly half the prefecture's breweries at the time. It remains the clearest demonstration in modern sake that regional character is something a region can decide to build.",
              ja:"暖かい土地ではよい酒は造れない、という通念を破った県の研究者である。静岡は温暖で湿潤、酒の名声などまったくなく、その酒は地元の日用品にすぎなかった。県の工業技術センターにあって、河村は県酵母の一族——HD-1とその兄弟株——を育てた。鑑評会向けの華やかな香りのためではなく、暖かい蔵に適し、料理と共に飲むための、清らかで控えめな辛口の発酵のために選抜された酵母である。そして彼は仕事の難しいほうの半分を果たした——蔵を一つずつ回って技術を教え、県内の造り手が共通の方法で仕事をするに至らしめたのである。昭和六十一年（1986）の全国新酒鑑評会で、静岡は金賞十、入賞七を得た。当時の県内蔵元のおよそ半数である。地域の個性とは、地域が意志して築きうるものだということを、現代の日本酒でこれほど明快に示した例はない。",
              zh:"打破「溫暖之地釀不出好酒」這條成規的縣立研究者。靜岡溫和潮濕，全無釀酒名聲，其酒不過是地方日用品。河村在縣工業技術中心工作，培育出一系列縣酵母——HD-1 及其姊妹株——選育的方向不是鑑評會取勝的華麗香氣，而是適合溫暖酒藏、適合佐餐的乾淨、內斂、偏辛的發酵。接著他做了這份工作中較難的一半：一藏一藏地把技術教出去，直到全縣的釀造者以共通的方法工作。一九八六年全國新酒鑑評會，靜岡拿下十面金賞與七項入賞——約占當時全縣酒藏的一半。這仍是現代日本酒中最清楚的一個例證：地域個性是一個地域可以決意去建構的東西。" } },

          { term:{ en:"Taketsuru Masataka", ja:"竹鶴政孝", zh:"竹鶴政孝" }, jp:"竹鶴政孝", romaji:"Taketsuru Masataka",
            def:{ en:"1894–1979. Born into the Taketsuru brewing family of Takehara, Hiroshima — a sake house founded in 1733 that still operates. Trained in chemistry, sent to Scotland by his employer in 1918, he studied at Glasgow, apprenticed in working distilleries, married Rita Cowan, and came home with the notebooks that became Japanese whisky. He built Yamazaki for Kotobukiya, then left in 1934 to found what became Nikka in Hokkaidō. He belongs on a sake page because his career is the clearest proof of a claim made throughout this site: the technical culture of the kura — fermentation management, obsessive record-keeping, seasonal crews — is transferable, and Japan's other drinks industries were largely built by people raised inside it.",
              ja:"1894–1979。広島県竹原の造り酒屋・竹鶴家に生まれた（享保十八年〈1733〉創業、現在も営業している）。化学を修め、大正七年（1918）に勤め先からスコットランドへ送られ、グラスゴーで学び、稼働中の蒸溜所で修業し、リタ・カウンと結婚し、日本のウイスキーとなるノートを携えて帰国した。寿屋のために山崎を建て、昭和九年（1934）に去って、北海道でのちのニッカを興した。彼が日本酒のページに載るべき理由は、その経歴が本サイト全体で述べてきた主張の最も明快な証明だからである——蔵の技術文化（発酵管理、執拗な記録、季節労働の組）は移転可能であり、日本の他の酒類産業はおおむねその中で育った人々によって築かれた。",
              zh:"1894–1979。生於廣島竹原的造酒世家竹鶴家（創業於一七三三年，至今仍在營運）。他修習化學，一九一八年由任職公司派往蘇格蘭，在格拉斯哥求學、於運轉中的蒸餾廠實習，與 Rita Cowan 結婚，帶著日後成為日本威士忌起點的筆記本回國。他為壽屋建造了山崎，一九三四年離開，在北海道創辦了日後的 Nikka。他之所以該出現在一個談清酒的頁面上，是因為他的生涯最清楚地印證了本站反覆提出的一項主張：酒藏的技術文化——發酵管理、近乎偏執的記錄、季節性的工班——是可以移轉的；日本其他酒類產業，大體上正是由在這套文化中長大的人所建立。" } }
        ] }
      ] },

    { t:"section", id:"living",
      title:{ en:"Working lifetimes", ja:"現役の仕事", zh:"仍在進行的生涯" }, jp:"現代",
      body:[
        { t:"p", text:{
          en:"The figures below are living or recently active, and their achievements are documented rather than legendary. They are grouped not by fame but by the different answers they represent to the same question — what does a small brewery do in an industry that has been shrinking since 1973?",
          ja:"以下の人物は存命または近年まで現役であり、その業績は伝説ではなく記録として残る。名声ではなく、同じ問いへの異なる答えとして並べた——一九七三年以来縮み続けてきた業界のなかで、小さな蔵は何をすればよいのか。",
          zh:"以下人物或仍在世，或近年仍活躍，其成就有紀錄可考，而非傳說。他們的排列依據不是名氣，而是他們對同一個問題所給出的不同答案——在一個自一九七三年起持續萎縮的產業裡，一家小酒藏該怎麼辦？" } },

        { t:"compare", cols:2, items:[
          { title:{ en:"Noguchi Naohiko", ja:"農口尚彦", zh:"農口尚彥" }, jp:"農口尚彦",
            text:{ en:"Answer: absolute craft.", ja:"答え——技を極める。", zh:"答案：把手藝做到極致。" },
            body:[
              { t:"p", text:{
                en:"Born 1932 in what is now Noto, Ishikawa, into the Noto tōji tradition; began as a brewery boy at sixteen. Tōji at Kikuhime from 1961 to 1997, then at Shikano Shuzō (Jōkigen) from 1998 to 2012, then at Noguchi Shuzō, and from 2017 at the Noguchi Naohiko Sake Institute built for him in Komatsu. Named a Contemporary Master Craftsman in 2006 and awarded the Yellow Ribbon Medal in 2008. He is associated above all with yamahai — a starter method most of the industry had abandoned as too slow and too risky, which he kept alive and made into a signature of deep, acid-framed, savoury sake. He is past ninety and still brewing.",
                ja:"昭和七年（1932）、現在の石川県能登町に、能登杜氏の伝統のなかに生まれた。十六で蔵入り。菊姫の杜氏を1961年から1997年まで、鹿野酒造（常きげん）を1998年から2012年まで、続いて農口酒造、そして2017年からは小松に彼のために建てられた農口尚彦研究所で醸す。平成十八年（2006）現代の名工、平成二十年（2008）黄綬褒章。何よりも山廃と結びついた名である——業界の大半が遅く危険すぎるとして捨てた酒母法を、彼は生かし続け、深く、酸に支えられ、旨味の濃い酒の署名とした。九十を越えて、なお造っている。",
                zh:"一九三二年生於今石川縣能登町，出身能登杜氏傳統，十六歲入藏。一九六一至一九九七年任菊姬杜氏，一九九八至二〇一二年任鹿野酒造（常喜嫌）杜氏，其後轉往農口酒造，二〇一七年起主持在小松為他而建的「農口尚彥研究所」。二〇〇六年獲選「現代の名工」，二〇〇八年獲頒黃綬褒章。他的名字首先與山廢連在一起——那是產業大多數人因太慢、太冒險而放棄的酒母法，他卻讓它活了下來，並使之成為深沉、以酸為骨架、旨味濃厚之酒的署名。年逾九十，他仍在釀酒。" } }
            ] },

          { title:{ en:"Sakurai Hiroshi", ja:"桜井博志", zh:"櫻井博志" }, jp:"桜井博志",
            text:{ en:"Answer: abolish the seasonal system.", ja:"答え——季節労働の制度を廃す。", zh:"答案：廢除季節性制度。" },
            body:[
              { t:"p", text:{
                en:"Born 1950; took over Asahi Shuzō in the mountains of Yamaguchi in 1984, then the smallest of four breweries in its town. A 1987 diversification into a beer restaurant failed badly enough that his tōji and crew left. Rather than hire another, he rebuilt the brewery around salaried, year-round employees working to written procedure and continuous data — a system with no tōji at all. The Dassai brand launched in 1990, a 23%-polished daiginjō followed in 1992, and a purpose-built four-season brewery opened in 2015. He handed the presidency to his son Kazuhiro in 2016. Dassai is the most divisive success in modern sake: proof to some that the guild system was a constraint rather than a virtue, and to others that something was traded away for consistency.",
                ja:"昭和二十五年（1950）生まれ。昭和五十九年（1984）に山口の山中の旭酒造を継いだ。当時、町に四つあった蔵のうち最小である。昭和六十二年（1987）の地ビールレストランへの多角化は、杜氏と蔵人が去るほどに手ひどく失敗した。彼は次の杜氏を雇う代わりに、通年雇用の社員が文書化された手順と継続的なデータに従って働く体制へ蔵を組み替えた——杜氏のいない蔵である。平成二年（1990）に獺祭を出し、四年（1992）に精米歩合23%の大吟醸、二十七年（2015）に四季醸造専用の蔵を開いた。二十八年（2016）に社長を子息一宏に譲る。獺祭は現代の日本酒における最も評価の割れる成功である——ある者にとっては杜氏制度が美徳ではなく制約であった証明であり、別の者にとっては均質性と引き換えに何かが手放された証拠である。",
                zh:"一九五〇年生。一九八四年接掌山口深山中的旭酒造，當時是鎮上四家酒藏中最小的一家。一九八七年跨足地啤餐廳的多角化慘敗，敗到杜氏與藏人集體離去。他沒有再聘一位杜氏，而是把酒藏改組為由全年受薪員工依書面工序與連續數據作業的體制——一座沒有杜氏的酒藏。獺祭品牌於一九九〇年推出，一九九二年推出精米步合 23% 的大吟釀，二〇一五年啟用專為四季釀造而建的新藏。二〇一六年將社長之位交給兒子一宏。獺祭是現代日本酒中最具爭議的成功：對一些人而言，它證明了杜氏制度是束縛而非美德；對另一些人而言，它證明了為了穩定，有些東西被交換掉了。" } }
            ] }
        ] },

        { t:"compare", cols:2, items:[
          { title:{ en:"Imada Miho", ja:"今田美穂", zh:"今田美穗" }, jp:"今田美穂",
            text:{ en:"Answer: recover what the region lost.", ja:"答え——地域が失ったものを取り戻す。", zh:"答案：找回這片土地失去的東西。" },
            body:[
              { t:"p", text:{
                en:"Born 1961; returned to the family brewery Imada Shuzō Honten in Akitsu, Hiroshima — Miura Senzaburō's town — in 1994, and became its tōji in 2000, one of very few women then holding the post. From 2004 she led the revival of <em>Hattansō</em>, a tall, hard-to-farm Hiroshima rice that had effectively been out of cultivation for a century, and rebuilt the brewery's range around it and around soft-water technique. She was named to the BBC's 100 Women list in 2020, the only Japanese figure that year. Her argument is the terroir argument, made from inside a small brewery: the interesting thing about Hiroshima sake is the specific thing Hiroshima can do that nowhere else can.",
                ja:"昭和三十六年（1961）生まれ。平成六年（1994）に広島県安芸津——三浦仙三郎の町である——の実家の蔵、今田酒造本店に戻り、平成十二年（2000）に杜氏となった。当時、その職にある女性はごく僅かであった。平成十六年（2004）からは八反草の復活を主導する。背が高く作りにくく、事実上一世紀にわたって栽培の途絶えていた広島の米である。彼女はその米と軟水醸造法を軸に蔵の品揃えを組み直した。令和二年（2020）、BBCの「100 Women」に選ばれた。その年の日本人はただ一人である。彼女の主張は風土の主張であり、それを小さな蔵の内側から述べている——広島の酒の面白さは、広島にしかできない具体的な何かにある。",
                zh:"一九六一年生。一九九四年回到廣島安藝津——三浦仙三郎的故鄉——的家族酒藏今田酒造本店，二〇〇〇年出任杜氏，是當時極少數擔任此職的女性之一。自二〇〇四年起，她主導復育「八反草」：一種植株高、難栽培、實際上已中斷栽種近一世紀的廣島酒米，並圍繞這種米與軟水釀造法重建酒藏的產品線。二〇二〇年她入選 BBC「100 Women」，是該年唯一的日本人。她的主張是風土的主張，而且是從一家小酒藏內部提出的：廣島清酒真正有趣之處，在於廣島能做、而別處做不到的那件具體的事。" } }
            ] },

          { title:{ en:"The revivalists", ja:"復古の側", zh:"復古的一派" }, jp:"六号・木桶・生酛",
            text:{ en:"Answer: go backwards on purpose.", ja:"答え——意図して後ろへ歩く。", zh:"答案：刻意往回走。" },
            body:[
              { t:"p", text:{
                en:"A cohort of brewery successors who returned in the 2000s and 2010s and chose constraint as a strategy: no added alcohol, no modern high-aroma yeast, old starters, wooden vats, single-prefecture rice. Aramasa in Akita is the emblematic case — its house yeast is the ancestor of Kyōkai No. 6, isolated there in 1930 and the oldest association strain still in distribution, and the brewery rebuilt its entire range around No. 6, junmai only, and wooden fermentation vessels. The revivalist wager is that in a shrinking market the useful thing is not a cheaper product but an unrepeatable one. Related figures on the modern-prestige side, such as the Takagi family of Jūyondai in Yamagata, took the opposite path from the same premise — extreme selection and scarcity rather than extreme tradition — and arrived at similar scarcity value.",
                ja:"二〇〇〇年代から二〇一〇年代にかけて家業に戻り、制約を戦略として選んだ蔵元後継者たちの一群である。アルコール添加をしない、現代の高香気酵母を使わない、古い酒母、木桶、県内産の米。秋田の新政が象徴的な例である。この蔵の蔵付き酵母は昭和五年（1930）にここで分離されたきょうかい6号の祖であり、現在も頒布される協会株のうち最古のものである。蔵は6号・純米のみ・木桶発酵を軸に全商品を組み直した。復古派の賭けはこうである——縮む市場で有効なのは、より安い商品ではなく、再現できない商品である。現代的な高級路線の側の人物、たとえば山形の十四代の高木家は、同じ前提から逆の道を採り——極端な伝統ではなく極端な選別と希少性を採り——似た希少価値に到達した。",
                zh:"一群在二〇〇〇與二〇一〇年代回到家業、並選擇以「限制」為策略的藏元後繼者：不添加酒精、不用現代高香氣酵母、採用古法酒母、木桶、單一縣產米。秋田的新政是代表性的例子——該藏的藏付酵母正是協會 6 號的祖先，一九三〇年在此分離，是現今仍在頒布的協會酵母中最古老的一株；酒藏並圍繞 6 號、純米、木桶發酵重建了全部產品線。復古派的賭注是：在萎縮的市場裡，有用的不是更便宜的商品，而是無法複製的商品。而現代高端路線的人物，例如山形十四代的高木家，則從相同前提走上相反的路——以極端的選別與稀缺取代極端的傳統——最終抵達了相似的稀缺價值。" } }
            ] }
        ] }
      ] },

    { t:"section", id:"guilds",
      title:{ en:"The named collectives", ja:"名を持つ集団", zh:"有名字的群體" }, jp:"杜氏集団",
      body:[
        { t:"p", text:{
          en:"For most of the modern era the unit of expertise in sake was not a person but a guild: a regional association of seasonal brewing crews who left farming villages in autumn, worked a winter in someone else's brewery, and went home in spring. The guild trained, graded and placed its members, and its reputation was the brewery's guarantee. These are institutions with names, founding dates and appraisal competitions of their own — and their decline is the single largest structural change in postwar brewing labour.",
          ja:"近代の大半を通じて、日本酒における技能の単位は個人ではなく集団であった——秋に農村を出て、他人の蔵で一冬を働き、春に帰る季節労働の組の、地域ごとの協会である。組合は構成員を育て、格付けし、蔵へ送り込んだ。その評判が蔵にとっての保証であった。これらは名を持ち、設立年を持ち、独自の鑑評会まで持つ制度である——そしてその衰退は、戦後の酒造労働における最大の構造変化である。",
          zh:"在近代的大部分時間裡，日本酒的技術單位不是個人，而是行會：由季節性釀造工班組成的地域性協會——他們秋天離開農村，在別人的酒藏工作一整個冬天，春天再回家。行會負責培訓、評級並媒合成員，其聲譽就是酒藏的保證。這些是有名稱、有創立年份、甚至有自己鑑評會的制度——而它們的衰退，是戰後釀酒勞動最大的結構性變化。" } },

        { t:"table",
          cols:[{en:"Guild",ja:"杜氏集団",zh:"杜氏集團"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Home",ja:"本拠",zh:"本據"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[1],
          rows:[
            [{en:"Nanbu",ja:"南部杜氏",zh:"南部杜氏"},"南部杜氏",
             {en:"Iwate — Ishidoriya, Hanamaki",ja:"岩手県花巻市石鳥谷",zh:"岩手縣花卷市石鳥谷"},
             {en:"The largest guild. Organised as a union in 1914 and reconstituted as the present association in 1948; it runs its own self-brewed sake appraisal, whose 100th edition was held in 2019. Membership in the mid-2020s is in the hundreds, of whom well under half hold the rank of tōji.",
              ja:"最大の集団。大正三年（1914）に組合として組織され、昭和二十三年（1948）に現在の協会として再編。独自の自醸清酒鑑評会を運営し、その第百回は平成三十一年（2019）に開かれた。二〇二〇年代半ばの会員は数百人、うち杜氏の資格を持つ者はその半分に満たない。",
              zh:"規模最大的集團。一九一四年組成組合，一九四八年重整為現今的協會；並主辦自家的自釀清酒鑑評會，第一百回於二〇一九年舉行。二〇二〇年代中期會員數以百計，其中具杜氏資格者遠不到半數。"}],
            [{en:"Echigo",ja:"越後杜氏",zh:"越後杜氏"},"越後杜氏",
             {en:"Niigata",ja:"新潟県",zh:"新潟縣"},
             {en:"The guild behind the <em>tanrei karakuchi</em> house style — light, dry, low-aroma — and the reason Niigata reads as a single coherent region on the shelf.",
              ja:"淡麗辛口という県の型——軽く、辛く、香り控えめ——を支えた集団であり、新潟が棚の上で一つのまとまった産地として読める理由である。",
              zh:"「淡麗辛口」這種縣級風格——輕盈、辛口、低香——背後的集團；也是新潟在酒架上讀來像一個完整產地的原因。"}],
            [{en:"Tajima",ja:"但馬杜氏",zh:"但馬杜氏"},"但馬杜氏",
             {en:"Northern Hyōgo",ja:"兵庫県北部",zh:"兵庫縣北部"},
             {en:"The crews who staffed Nada. Hyōgo grew the rice in the south and supplied the labour from the north; the Tajima tōji is the working half of the Nada legend.",
              ja:"灘の蔵を担った組である。兵庫は南で米を作り、北から人を出した。但馬杜氏は灘伝説の、働くほうの半分である。",
              zh:"支撐灘的工班。兵庫在南部種米，在北部出人；但馬杜氏正是灘之傳說中負責幹活的那一半。"}],
            [{en:"Noto",ja:"能登杜氏",zh:"能登杜氏"},"能登杜氏",
             {en:"Ishikawa — the Noto peninsula",ja:"石川県能登半島",zh:"石川縣能登半島"},
             {en:"Small, and disproportionately celebrated; the guild of Noguchi Naohiko and of the four brewers known as the Noto shitennō. Associated with rich, well-structured sake and with the survival of yamahai.",
              ja:"小さく、そして不釣り合いなほど名高い。農口尚彦の集団であり、能登四天王と呼ばれた四人の集団である。厚みと骨格のある酒、そして山廃の存続と結びついている。",
              zh:"規模小，名聲卻大得不成比例；這是農口尚彥的集團，也是被稱為「能登四天王」的四位釀造者的集團。與厚實有骨架的酒，以及山廢的存續密切相關。"}]
          ] },

        { t:"p", text:{
          en:"Every one of these guilds is shrinking, for the reason the whole system is shrinking: the farming villages that supplied winter labour no longer have surplus winter labour, and a brewery that brews all year cannot use a crew that arrives in October and leaves in March. Most breweries now train their own salaried staff, and an increasing number of tōji are the owner. See <a href=\"toji.html\">Tōji &amp; the Crew</a> for the structure of the crew itself.",
          ja:"これらの集団はいずれも縮小している。制度全体が縮小しているのと同じ理由である——冬の労働力を供給した農村に、もはや余剰の冬の労働力はない。そして通年で醸す蔵は、十月に来て三月に帰る組を使えない。今日、多くの蔵は自前の社員を育てており、蔵元自身が杜氏を兼ねる例も増えている。組の構造そのものについては<a href=\"toji.html\">杜氏と蔵人</a>を参照。",
          zh:"這些集團無一不在萎縮，原因和整個制度萎縮的原因相同：曾提供冬季勞動力的農村，已經沒有多餘的冬季勞動力；而全年釀造的酒藏，也用不了一支十月來、三月走的工班。如今多數酒藏自行培訓受薪員工，由藏元本人兼任杜氏的情況也日益增加。關於工班本身的結構，請見<a href=\"toji.html\">杜氏與藏人</a>。" } }
      ] },

    { t:"section", id:"unnamed",
      title:{ en:"The unnamed majority", ja:"名の残らない大多数", zh:"未曾留名的大多數" }, jp:"読み方の注意",
      body:[
        { t:"p", text:{
          en:"A page like this one is a distortion, and it is worth saying so plainly. Brewing is manual, collective and repetitive; a season's sake is the product of a few thousand small correct decisions made mostly at night by people whose names appear in no record. Four categories of person are systematically written out of sake history.",
          ja:"このようなページは一つの歪みであり、それははっきり言っておくに値する。酒造りは手仕事であり、集団的であり、反復である。一季の酒は、大半が夜中に、記録に名の残らぬ人々によって下された数千の小さな正しい判断の産物である。日本酒史からは、四種類の人間が組織的に書き落とされている。",
          zh:"像本頁這樣的內容本身就是一種扭曲，這點值得明說。釀酒是手工的、集體的、重複的；一季的酒，是數千個微小而正確的判斷的產物，而這些判斷多半在夜裡做出，做決定的人不會出現在任何紀錄裡。日本酒的歷史，系統性地漏寫了四類人。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"The kurabito", ja:"蔵人", zh:"藏人" }, jp:"蔵人",
            v:{ en:"The crew", ja:"働き手", zh:"工班" },
            d:{ en:"Steaming, cooling, carrying, stirring, washing. The kōji room in particular runs on three-hourly attention around the clock for two days at a stretch, and no individual in it is identifiable afterwards from the sake. Guild records list ranks; they rarely list people.",
              ja:"蒸し、冷まし、運び、櫂を入れ、洗う。とりわけ麹室は、二日続けて三時間おきの手当てで動く。そこにいた個人を、あとから酒から特定することはできない。組合の記録は役職を記すが、人を記すことは稀である。",
              zh:"蒸米、冷卻、搬運、攪拌、清洗。尤其麴室，得連續兩天每三小時照看一次；事後沒有人能從酒裡辨認出其中任何一個人。行會的紀錄記載職級，卻很少記載人。" } },
          { k:{ en:"The brewery women", ja:"蔵の女性", zh:"酒藏的女性" }, jp:"おかみ",
            v:{ en:"Written out twice", ja:"二重に消される", zh:"被抹去兩次" },
            d:{ en:"A folk taboo, of uncertain age and never universal, held that women should not enter the brewing floor. It coexisted with the plain fact that the brewery household was run by women — accounts, sales, feeding a crew of twenty, and in many houses the actual management of the business. The taboo is essentially gone; the historical erasure it caused is not recoverable.",
              ja:"女性は蔵に入るべからず、という俗信があった。起源の年代は定かでなく、決して普遍的でもなかった。それは、蔵という家が女性によって回されていたという端的な事実と同居していた——帳簿、販売、二十人の賄い、そして多くの家では経営そのもの。禁忌は事実上消えたが、それが生んだ歴史からの消去は取り戻せない。",
              zh:"曾有一種民間禁忌——年代不詳，也從不普遍——認為女性不該踏入釀造場。它與另一項素樸的事實並存：酒藏這個「家」是由女性撐起來的——帳目、銷售、養活二十人的伙食，在許多家甚至包括實際經營。這項禁忌如今大致已消失；但它造成的歷史抹除無法追回。" } },
          { k:{ en:"The rice farmers", ja:"米の生産者", zh:"稻米生產者" }, jp:"契約栽培",
            v:{ en:"Half the raw material", ja:"原料の半分", zh:"原料的一半" },
            d:{ en:"Yamada Nishiki does not grow itself, and the Special A grades of the Hyōgo hills are a farming achievement before they are a brewing one. The murakome system that tied specific villages to specific Nada houses is one of the oldest contract-farming arrangements in Japan; the farmers in it are almost never named on a label.",
              ja:"山田錦は勝手に育つわけではない。兵庫の山あいの特A地区は、酒造りの達成である前に、農の達成である。特定の村と特定の灘の蔵とを結んだ村米制度は、日本で最も古い契約栽培の一つである。そこにいる生産者の名が酒のラベルに載ることは、まずない。",
              zh:"山田錦不會自己長出來；兵庫山區的「特 A 地區」在成為釀造成就之前，先是農業成就。把特定村落與特定灘之酒藏綁在一起的「村米制度」，是日本最古老的契作安排之一；其中的農民，幾乎從不會出現在酒標上。" } },
          { k:{ en:"The trades", ja:"職人", zh:"工匠" }, jp:"桶・麹蓋・杉",
            v:{ en:"Coopers, carpenters, smiths", ja:"桶屋、大工、鍛冶", zh:"桶匠、木匠、鐵匠" },
            d:{ en:"The wooden fermentation vat is a specialised craft with almost no practitioners left, and the current revival of wooden brewing depends on a handful of surviving cooperages. Kōji trays, cedar for taru, the Yoshino cedar barrel trade, straw rope, press cloth — each is a separate dying trade on which the flavour of the finished sake genuinely depends.",
              ja:"木桶は専門の職であり、担い手はほとんど残っていない。現在の木桶仕込みの復活は、生き残った僅かな桶屋に依存している。麹蓋、樽用の杉、吉野杉の樽丸、藁縄、酒袋——そのいずれもが別個の消えゆく職であり、そして出来上がった酒の味は、確かにそれらに依っている。",
              zh:"木桶是一門專門手藝，如今幾乎後繼無人；當前木桶釀造的復興，仰賴的是少數倖存的桶匠工坊。麴蓋、製樽用的杉木、吉野杉的樽丸、稻草繩、酒袋——每一項都是獨立而正在消失的行業，而成酒的風味確實依賴著它們。" } }
        ] },

        { t:"quote", text:{
          en:"The correct way to read the list above is as a list of bottlenecks that one person happened to clear, not as a list of people who made sake.",
          ja:"上の一覧の正しい読み方は、酒を造った人々の一覧としてではなく、たまたま一人の手で解かれた隘路の一覧として、である。",
          zh:"閱讀上面那份名單的正確方式，是把它當作「碰巧由某一個人打通的瓶頸」清單，而不是「造酒的人」的清單。" } }
      ] },

    { t:"section", id:"timeline",
      title:{ en:"Who cleared what, and when", ja:"誰が、何を、いつ", zh:"誰、解決了什麼、何時" }, jp:"年表",
      body:[
        { t:"timeline", items:[
          { year:"c.1600", era:"Keichō", eraJp:"慶長頃",
            title:{ en:"Clarified sake enters legend", ja:"清酒、伝説に入る", zh:"清酒進入傳說" }, jp:"鴻池",
            text:{ en:"The Kōnoike ash story. Whether or not it happened, ash treatment and charcoal filtration are established in Itami by the seventeenth century, and <em>seishu</em> as a category dates from here.",
              ja:"鴻池の灰の話。事の真偽はともかく、十七世紀までに伊丹では灰の使用と炭濾過が定着しており、清酒という範疇はここに始まる。",
              zh:"鴻池的「灰」故事。無論是否真有其事，到十七世紀伊丹已確立使用灰處理與炭過濾，「清酒」作為一個類別即始於此。" } },
          { year:"1837/1840", era:"Tenpō", eraJp:"天保",
            title:{ en:"Miyamizu identified", ja:"宮水の発見", zh:"宮水的發現" }, jp:"山邑太左衛門",
            text:{ en:"Yamamura Tazaemon VI isolates water as the variable behind Nishinomiya's superiority, and Nada's dominance acquires a physical explanation.",
              ja:"六代目山邑太左衛門が、西宮の酒の優位の変数として水を特定する。灘の優位に物理的な説明が与えられた。",
              zh:"六代山邑太左衛門確認水才是西宮之酒勝出的變因，灘的優勢從此有了物理上的解釋。" } },
          { year:"1898", era:"Meiji 31", eraJp:"明治31年",
            title:{ en:"Soft-water brewing published", ja:"軟水醸造法の公刊", zh:"軟水釀造法刊行" }, jp:"三浦仙三郎",
            text:{ en:"<em>Kaijōhō Jissenroku</em>. Cold, slow, patient brewing turns Hiroshima's disadvantage into the technical basis of ginjō.",
              ja:"『改醸法実践録』。低温で、遅く、辛抱強い造りが、広島の不利を吟醸の技術的基礎へと変えた。",
              zh:"《改釀法實踐錄》。低溫、緩慢、有耐性的釀造，把廣島的劣勢轉化為吟釀的技術基礎。" } },
          { year:"1904", era:"Meiji 37", eraJp:"明治37年",
            title:{ en:"The Brewing Experiment Station opens", ja:"醸造試験所の開設", zh:"釀造試驗所開設" }, jp:"大蔵省",
            text:{ en:"The state takes brewing science in hand, for tax reasons. Within seven years it has produced yamahai, sokujō and the national appraisal competition.",
              ja:"国家が税の理由から醸造科学を手中に収める。七年のうちに山廃、速醸、そして全国新酒鑑評会が生まれた。",
              zh:"國家基於稅收理由把釀造科學攬入手中。七年之內，山廢、速釀與全國新酒鑑評會相繼問世。" } },
          { year:"1909", era:"Meiji 42", eraJp:"明治42年",
            title:{ en:"Yamahai and sokujō, the same year", ja:"山廃と速醸、同じ年", zh:"山廢與速釀，同一年" }, jp:"嘉儀・江田",
            text:{ en:"Kagi Kin'ichirō abolishes the pole-mashing; Eda Kamajirō abolishes the wait. One of them saved labour, the other saved a month — and between them they made kimoto a choice rather than a necessity. The Kumamoto Sake Research Institute is founded in the same year.",
              ja:"嘉儀金一郎が山卸を廃し、江田鎌治郎が待つことを廃した。一方は労働を、他方は一か月を節約し、両者は相まって生酛を必然から選択へ変えた。熊本県酒造研究所の設立も同年である。",
              zh:"嘉儀金一郎廢掉了櫂磨，江田鎌治郎廢掉了等待。前者省下勞力，後者省下一個月；兩者合起來，把生酛從必然變成了選項。熊本縣酒造研究所也在同年設立。" } },
          { year:"1921–23", era:"Taishō", eraJp:"大正",
            title:{ en:"Sake without rice", ja:"米を使わぬ酒", zh:"不用米的酒" }, jp:"鈴木梅太郎",
            text:{ en:"Suzuki Umetarō patents synthetic sake in 1921 and it reaches the market in 1923. The category still exists, and it forces the law to define the real thing.",
              ja:"鈴木梅太郎が大正十年（1921）に合成清酒を特許化し、十二年（1923）に市場へ出る。この区分は今も存在し、そして法に「本物」の定義を強いた。",
              zh:"鈴木梅太郎於一九二一年為合成清酒取得專利，一九二三年上市。這個類別至今仍存在，並迫使法律去定義何謂「真品」。" } },
          { year:"1930", era:"Shōwa 5", eraJp:"昭和5年",
            title:{ en:"No. 6 isolated at Aramasa", ja:"新政で6号を分離", zh:"於新政分離出 6 號" }, jp:"きょうかい6号",
            text:{ en:"The oldest association yeast still distributed. Ninety years later the same brewery rebuilds its identity around it.",
              ja:"現在も頒布される協会酵母のうち最古のもの。九十年後、同じ蔵がこの株を軸に自らの輪郭を組み直すことになる。",
              zh:"現今仍在頒布的協會酵母中最古老的一株。九十年後，同一家酒藏又以它為核心重塑了自身的面貌。" } },
          { year:"1952", era:"Shōwa 27", eraJp:"昭和27年",
            title:{ en:"No. 9 isolated at Kōro", ja:"香露で9号を分離", zh:"於香露分離出 9 號" }, jp:"野白金一",
            text:{ en:"Nojiro Kin'ichi's Kumamoto yeast becomes Kyōkai No. 9 and supplies the aroma of the ginjō era.",
              ja:"野白金一の熊本酵母がきょうかい9号となり、吟醸時代の香りを供給する。",
              zh:"野白金一的熊本酵母成為協會 9 號，供給了整個吟釀時代的香氣。" } },
          { year:"1964", era:"Shōwa 39", eraJp:"昭和39年",
            title:{ en:"Sake becomes a subject", ja:"酒が主題になる", zh:"酒成為一門學問" }, jp:"坂口謹一郎",
            text:{ en:"<em>Nihon no Sake</em> is published, and the drink acquires a scholarly literature written for general readers.",
              ja:"『日本の酒』刊行。この飲み物は、一般読者に向けて書かれた学術的な文献を得た。",
              zh:"《日本の酒》出版，這種飲品自此擁有了為一般讀者所寫的學術文獻。" } },
          { year:"1986", era:"Shōwa 61", eraJp:"昭和61年",
            title:{ en:"Shizuoka takes ten golds", ja:"静岡、金賞十", zh:"靜岡拿下十面金賞" }, jp:"河村伝兵衛",
            text:{ en:"A prefecture with no brewing reputation wins on prefectural yeast and a shared method, and regional strategy becomes a live idea everywhere else.",
              ja:"酒の名声を持たなかった県が、県酵母と共通の方法で勝つ。以後、地域戦略はどの県にとっても現実の選択肢となった。",
              zh:"一個毫無釀酒名聲的縣，靠縣酵母與共通方法取勝；此後「地域策略」在各地都成了真實可行的構想。" } },
          { year:"1990–2015", era:"Heisei", eraJp:"平成",
            title:{ en:"Two divergent answers", ja:"二つに分かれた答え", zh:"分岔的兩個答案" }, jp:"獺祭と復古",
            text:{ en:"Dassai launches in 1990 and reaches 23% polishing in 1992, brewing without a tōji and eventually all year; at the same time a revivalist cohort goes the other way, into wooden vats, old starters and no added alcohol. Both are responses to the same shrinking domestic market.",
              ja:"獺祭が平成二年（1990）に出、四年（1992）に精米歩合23%に達する。杜氏を置かず、やがて通年で醸す造りである。同じころ、復古の一群は逆方向へ——木桶、古い酒母、アルコール無添加へ——向かった。いずれも、同じ縮む国内市場への応答である。",
              zh:"獺祭於一九九〇年推出，一九九二年達到 23% 精米步合，不設杜氏，最終全年釀造；與此同時，復古的一群人往相反方向走——木桶、古法酒母、不添加酒精。兩者都是對同一個萎縮的國內市場所做的回應。" } },
          { year:"2020", era:"Reiwa 2", eraJp:"令和2年",
            title:{ en:"A Hiroshima tōji on a world list", ja:"広島の杜氏、世界の名簿へ", zh:"廣島杜氏登上世界名單" }, jp:"今田美穂",
            text:{ en:"Imada Miho is named to the BBC's 100 Women, from the same town as Miura Senzaburō, brewing with a rice her predecessors abandoned.",
              ja:"今田美穂がBBCの「100 Women」に選ばれる。三浦仙三郎と同じ町から、先人が捨てた米で醸しながら。",
              zh:"今田美穗入選 BBC「100 Women」；她來自與三浦仙三郎相同的小鎮，用的是前人棄種的米。" } }
        ] }
      ] },

    { t:"note", text:{
      en:"Cross-references: the technical detail behind each name is on its own page — <a href=\"starters.html\">Starter Methods</a> for kimoto, yamahai and sokujō; <a href=\"yeast.html\">Yeast</a> for the Kyōkai series; <a href=\"water.html\">Water</a> for miyamizu; <a href=\"toji.html\">Tōji &amp; the Crew</a> for the guild system; <a href=\"competitions.html\">Competitions</a> for the appraisal that made several of these reputations.",
      ja:"参照：それぞれの名の背後にある技術的詳細は各ページにある——生酛・山廃・速醸は<a href=\"starters.html\">酒母の型</a>、きょうかい酵母は<a href=\"yeast.html\">酵母</a>、宮水は<a href=\"water.html\">水</a>、杜氏制度は<a href=\"toji.html\">杜氏と蔵人</a>、ここに挙げた評判のいくつかを作った鑑評会は<a href=\"competitions.html\">鑑評会</a>。",
      zh:"交叉參照：每個名字背後的技術細節都有各自的頁面——生酛、山廢、速釀見<a href=\"starters.html\">酒母工法</a>；協會酵母見<a href=\"yeast.html\">酵母</a>；宮水見<a href=\"water.html\">水</a>；杜氏制度見<a href=\"toji.html\">杜氏與藏人</a>；成就了本頁若干聲譽的鑑評會見<a href=\"competitions.html\">鑑評會</a>。" } }
,

    { t:"related", items:[
      { href:"toji.html", why:{ en:"The guild system those individuals worked inside, and how it ended.", ja:"彼らが働いた杜氏の組の仕組みと、その終わり方。", zh:"這些人所置身的杜氏行會制度，以及它如何走到盡頭。" } },
      { href:"women.html", why:{ en:"The half of the history that the guild system wrote out.", ja:"杜氏の仕組みが書き落とした、歴史の半分。", zh:"被行會制度寫掉的那一半歷史。" } },
      { href:"region-west.html", why:{ en:"Miura Senzaburō's soft-water method, where it was worked out.", ja:"三浦仙三郎の軟水醸造法が編み出された場所。", zh:"三浦仙三郎的軟水釀造法，就是在這裡想出來的。" } },
      { href:"history.html", why:{ en:"Where each of these lives sits in the longer line.", ja:"これらの生涯のそれぞれが、より長い線のどこに座るか。", zh:"這些人生各自坐落在那條更長的線上的哪裡。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- women */
SAKE.pages["women"] = {
  kicker: { en: "Foundations · 06", ja: "基礎 · 06", zh: "基礎 · 06" },
  title:  { en: "Women and Sake", ja: "女性と日本酒", zh: "女性與日本酒" },
  jp: "禁忌・帳場・杜氏",
  lede: {
    en: "For most of the modern period a folk prohibition kept women off the brewing floor, while the same women ran the brewery as a business — the accounts, the sales, the household, and in many houses the actual management. The taboo has gone; the erasure it produced in the record has not. This page sets out where the prohibition came from, what it obscured, how it ended, and who is brewing now.",
    ja: "近代の大半を通じて、俗信が女性を蔵の作業場から遠ざけた。その同じ女性たちが、商いとしての蔵を回していた——帳場、販売、家、そして多くの家では経営そのものを。禁忌は消えた。それが記録に生んだ消去は消えていない。このページは、禁忌がどこから来たか、何を覆い隠したか、どのように終わったか、そして今は誰が醸しているのかを記す。",
    zh: "在近代的大部分時間裡，一項民間禁忌把女性擋在釀造現場之外；而同一批女性卻在經營著酒藏這門生意——帳目、銷售、家務，在許多家甚至包括實際的經營。禁忌已經消失，它在歷史紀錄中造成的抹除卻沒有。本頁說明這項禁令從何而來、遮蔽了什麼、如何結束，以及如今是誰在釀酒。"
  },
  body: [

    { t:"section", id:"taboo",
      title:{ en:"Where the prohibition came from", ja:"禁忌の出どころ", zh:"禁令從何而來" }, jp:"女人禁制",
      body:[
        { t:"p", text:{
          en:"The rule that women should not enter a working brewery was never a law, never universal, and never has a single agreed origin. Four explanations circulate, and they are not mutually exclusive — a custom of this kind usually has one practical root and several dignified justifications attached afterwards.",
          ja:"女性が稼働中の蔵に入るべからずという規範は、法であったことも、普遍であったことも、単一の合意された起源を持ったこともない。四つの説明が流布しており、それらは互いに排他的ではない。この種の慣習はたいてい、一つの実際的な根と、あとから付けられたいくつもの体裁のよい正当化を持つ。",
          zh:"「女性不得進入運轉中的酒藏」這條規矩，從來不是法律、從來不普遍，也從來沒有一個公認的單一起源。流傳的解釋有四種，而它們並不互斥——這類習俗通常有一個實際的根源，外加事後附加的數個體面說法。" } },

        { t:"defs", items:[
          { term:{ en:"Contamination", ja:"雑菌", zh:"雜菌" }, jp:"腐造への恐れ", romaji:"fuzō",
            def:{ en:"The explanation brewers themselves most often give. Before sterile technique, a brewery lived in fear of a spoiled tank; women's domestic work centred on pickling and other lactic fermentations, and anyone handling those daily carries lactic acid bacteria on hands and clothing. A ruined season could bankrupt a house. The reasoning is sound as far as it goes — but the same argument applies to any worker who eats nattō, and only women were excluded, so it explains the fear rather than the rule.",
              ja:"蔵人自身が最も多く挙げる説明である。無菌の技術以前、蔵は腐造を恐れて生きていた。女性の家事は漬物をはじめとする乳酸発酵を中心に回り、それを日々扱う者は手と衣に乳酸菌を帯びる。一季の失敗は一軒を潰しえた。理屈としては筋が通る——しかし同じ論は納豆を食べるいかなる働き手にも当てはまり、除かれたのは女性だけである。ゆえにこれは、規範ではなく恐れを説明している。",
              zh:"這是釀造者自己最常給出的解釋。在無菌技術問世之前，酒藏成天擔心整槽腐造；而女性的家務以醃漬等乳酸發酵為中心，天天處理這些的人手上與衣物上都帶著乳酸菌。一季失敗足以讓一個家業破產。這個推理就其自身而言站得住腳——但同樣的論證適用於任何吃納豆的工人，卻只有女性被排除。因此它解釋的是恐懼，而不是規則。" } },
          { term:{ en:"The lodging house", ja:"泊まり込みの現場", zh:"住宿的工地" }, jp:"蔵人の生活", romaji:"kurabito no seikatsu",
            def:{ en:"A winter crew was twenty or thirty men from another prefecture living together in the brewery for five months, sleeping and eating on site. The plainest explanation for excluding women is the same one that produced comparable rules on ships and in mining camps: an employer managing a closed, all-male, live-in workforce and wanting no complications. It is the least romantic account and probably the most load-bearing.",
              ja:"冬の組は、他県から来た二十人三十人の男が五か月にわたり蔵に住み込み、寝食を共にするものであった。女性を排した最も素朴な説明は、船や鉱山の宿舎に同種の規範を生んだのと同じものである——閉じた、男だけの、住み込みの労働力を管理する雇い主が、面倒を望まなかったのである。最もロマンに乏しく、そしておそらく最も重みを担う説明である。",
              zh:"冬季的工班是二三十名來自外縣的男性，在酒藏裡同住五個月，同吃同睡。排除女性最素樸的解釋，與船上和礦場宿舍產生類似規矩的理由相同：雇主要管理一支封閉、清一色男性、住在現場的勞動力，不希望節外生枝。這是最不浪漫的說法，也很可能是承重最多的一個。" } },
          { term:{ en:"Ritual purity", ja:"祭祀の清浄", zh:"祭祀的潔淨" }, jp:"神事", romaji:"shinji",
            def:{ en:"Sake is a ritual substance and a brewery holds shrine observances. Exclusions framed as ritual purity applied to women in many Japanese contexts — certain mountains, certain rites, the sumo ring — and the brewing floor was assimilated to that pattern. This is the most frequently repeated explanation in popular accounts and the hardest to document as an origin rather than a later rationalisation.",
              ja:"酒は祭祀の物であり、蔵は神事を営む。清浄を理由とする排除は、日本の多くの場において女性に適用された——ある種の山、ある種の儀礼、土俵。蔵の作業場もその型に同化された。通俗の記述で最も繰り返される説明であり、起源としてではなく後付けの合理化としてでなく立証することが最も難しい説明でもある。",
              zh:"酒是祭祀之物，酒藏也舉行神事。以「潔淨」為名的排除，在日本許多場合都適用於女性——某些山、某些儀式、相撲的土俵——而釀造現場也被同化進這個模式。這是通俗記述中最常被重複的解釋，也是最難證明它是起源、而非事後合理化的一個。" } },
          { term:{ en:"The jealous deity", ja:"嫉妬する神", zh:"善妒的神" }, jp:"酒の神は女神", romaji:"sake no kami wa megami",
            def:{ en:"A folk story holds that the deity of brewing is female and jealous, and will spoil the sake if another woman enters. It is charming, it is repeated constantly, and it is transparently a story told to justify a rule that already existed. Its persistence is itself informative: a prohibition that needs a legend is one nobody could otherwise defend.",
              ja:"酒の神は女神であり、嫉妬深く、他の女が入れば酒を損なうという民間の話である。愛らしく、絶えず繰り返され、そして見え透いて、すでにあった規範を正当化するために語られた物語である。それが残り続けていること自体が示唆的である——伝説を要する禁忌とは、他の仕方では誰にも擁護できない禁忌である。",
              zh:"民間傳說認為釀酒之神是女性且善妒，若有別的女子進入便會讓酒壞掉。這故事很可愛，也被不斷複述，而且明顯是為了替一條早已存在的規矩找理由而編出來的。它能一直流傳本身就很說明問題：一條需要傳說來支撐的禁令，正是一條原本無人能為之辯護的禁令。" } }
        ] },

        { t:"note", text:{
          en:"It is worth being precise about what the prohibition did and did not cover. It applied to the brewing floor during the season. It did not apply to the brewery as a business, to the shop, to the office, or to the household — and those were substantially women's domain throughout the same period.",
          ja:"禁忌が何に及び、何に及ばなかったかは正確に述べる値打ちがある。それは造りの季における作業場に及んだ。商いとしての蔵、店、帳場、家には及ばなかった——そしてそれらは、同じ時代を通じて実質的に女性の領分であった。",
          zh:"值得把這項禁令涵蓋與不涵蓋的範圍講清楚。它適用於釀造季期間的釀造現場，卻不適用於作為生意的酒藏、店面、帳房或家——而在同一時期，這些領域實質上正是女性的地盤。" } }
      ] },

    { t:"section", id:"okami",
      title:{ en:"The woman who ran the brewery", ja:"蔵を回していた人", zh:"撐起酒藏的那個人" }, jp:"女将",
      body:[
        { t:"p", text:{
          en:"A traditional sake brewery was a household enterprise, and in a household enterprise the division was rarely between working and not working. It was between the floor and everything else — and everything else was very large.",
          ja:"伝統的な蔵は家業であり、家業においては、分かれ目が働くと働かないのあいだにあることは稀である。それは作業場と、それ以外のすべてとのあいだにあった——そしてそれ以外のすべては、きわめて大きかった。",
          zh:"傳統的酒藏是家族事業，而在家族事業裡，分工的界線很少落在「工作」與「不工作」之間。它落在「釀造現場」與「其餘的一切」之間——而其餘的一切非常龐大。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"The books", ja:"帳場", zh:"帳房" }, jp:"経理",
            v:{ en:"Accounts, tax, credit", ja:"会計、税、掛け", zh:"會計、稅務、賒帳" },
            d:{ en:"Sake has been heavily taxed and heavily regulated since the nineteenth century, and a brewery's paperwork is unusually onerous — three overlapping year-counts, volume declarations, licence conditions. In most houses this was the okami's work, and so was the credit relationship with wholesalers, which in a bad season decided whether the brewery survived.",
              ja:"日本酒は十九世紀以来、重く課され、重く規制されてきた。蔵の書類仕事は異例に煩雑である——三つの重なり合う年度、数量の申告、免許の条件。多くの家でこれは女将の仕事であり、問屋との掛けの関係もそうであった。悪い季には、蔵が生き延びるか否かはそこで決まった。",
              zh:"清酒自十九世紀以來就被課以重稅、受到嚴格管制，酒藏的文書工作異常繁重——三套彼此重疊的年度、產量申報、執照條件。在多數家業中，這是女將的工作；與批發商之間的信用關係亦然，而在歉收的年份，酒藏能否存活就取決於此。" } },
          { k:{ en:"Feeding the crew", ja:"賄い", zh:"伙食" }, jp:"食事",
            v:{ en:"Three meals, twenty men, five months", ja:"三食、二十人、五か月", zh:"三餐、二十人、五個月" },
            d:{ en:"A live-in winter crew ate at the brewery, and someone cooked for them around a schedule that ran through the night. This is the job through which women first entered Nada breweries in numbers in the postwar years, when labour was short — and once inside the building for one reason, the categorical exclusion became much harder to maintain.",
              ja:"住み込みの冬の組は蔵で食べ、誰かが、夜を徹して回る日程に合わせて彼らのために炊いた。戦後、人手が足りなかった時期に、女性がまとまった数で灘の蔵へ初めて入ったのはこの仕事によってである。そして一つの理由で建物のなかに入ってしまえば、範疇としての排除を保つことははるかに難しくなった。",
              zh:"住宿的冬季工班在酒藏裡吃飯，而必須有人配合通宵運轉的排程為他們做飯。戰後人力短缺時期，女性正是透過這份工作首次成批進入灘的酒藏——而一旦因為某個理由進了這棟建築，那種一刀切的排除就變得難以維持了。" } },
          { k:{ en:"Selling it", ja:"売る", zh:"販售" }, jp:"商い",
            v:{ en:"Shop, customers, reputation", ja:"店、客、評判", zh:"店面、顧客、名聲" },
            d:{ en:"Many breweries sold directly from a shop at the front of the building, and the person behind that counter was usually the okami. In a trade where reputation is local and personal, the face that customers dealt with year after year was often the one that never appears in the brewery's own written history.",
              ja:"多くの蔵は建物の表の店から直に売り、その帳場に立つのはたいてい女将であった。評判が土地に根ざし、人に根ざす商いにおいて、客が年ごとに向き合った顔は、しばしば、その蔵自身の書かれた歴史には決して現れない顔であった。",
              zh:"許多酒藏就在建築前方的店面直接販售，而站在櫃檯後的通常是女將。在一門聲譽既在地又屬人的生意裡，顧客年復一年打交道的那張臉，往往正是酒藏自己所寫的歷史中從未出現的那張臉。" } },
          { k:{ en:"Deciding", ja:"決める", zh:"作決定" }, jp:"経営",
            v:{ en:"More often than the record shows", ja:"記録が示すより多く", zh:"比紀錄所顯示的更常見" },
            d:{ en:"Where a husband died young, or was absent at war, or was simply less capable, the okami ran the company — and did so under his name, because the licence and the trade register carried it. This is why the historical record of women managing sake breweries is thinner than the reality: the erasure is bureaucratic rather than deliberate, which makes it no easier to reverse.",
              ja:"夫が早く亡くなった場合、戦に出ていた場合、あるいは単に力量に欠けた場合、会社を回したのは女将であった。しかも夫の名において、である。免許も商業の登記も、その名を負っていたからである。女性が蔵を経営した歴史の記録が現実より薄い理由がこれである。消去は意図によるのではなく官僚制によるのであり、そのぶん取り戻すことは容易でない。",
              zh:"當丈夫早逝、出征在外，或單純能力不足時，實際經營公司的是女將——而且是掛在丈夫名下經營的，因為執照與商業登記寫的是他的名字。這正是「女性經營酒藏」的歷史紀錄比現實稀薄的原因：這種抹除源於官僚制度而非刻意為之，而這並不使它更容易被追回。" } }
        ] }
      ] },

    { t:"section", id:"opening",
      title:{ en:"How it ended", ja:"どのように終わったか", zh:"它是怎麼結束的" }, jp:"転換",
      body:[
        { t:"timeline", items:[
          { year:"1950s", era:{ en:"Postwar", ja:"戦後", zh:"戰後" }, eraJp:"人手不足",
            title:{ en:"Women enter the building", ja:"女性が建物に入る", zh:"女性進入這棟建築" }, jp:"賄いから",
            text:{ en:"Labour shortages in the Nada breweries lead to women being hired for cooking and support work. The categorical prohibition survives on paper and starts to erode in practice.",
              ja:"灘の蔵における人手不足から、女性が賄いや補助の仕事に雇われるようになる。範疇としての禁忌は建前として残りつつ、実際には崩れ始める。",
              zh:"灘的酒藏因人力短缺而開始雇用女性擔任伙食與輔助工作。一刀切的禁令在紙面上仍存，實務上卻開始鬆動。" } },
          { year:"1985", era:{ en:"Shōwa 60", ja:"昭和60年", zh:"昭和 60 年" }, eraJp:"均等法",
            title:{ en:"Equal Employment Opportunity Law", ja:"男女雇用機会均等法", zh:"男女雇用機會均等法" }, jp:"制度の転換",
            text:{ en:"Japan's equal employment legislation makes a blanket exclusion from a category of work untenable as employment practice. Brewers cite this as the point at which women moved from the kitchen into brewing roles proper.",
              ja:"雇用の均等に関する立法により、ある種の仕事からの一律の排除は、雇用の慣行として維持しえないものとなる。蔵人はこれを、女性が賄いから造りの職そのものへ移った時点として挙げる。",
              zh:"日本的就業平等立法，使「將某類工作全面排除女性」在雇用實務上難以維持。釀造者們指出，這正是女性從廚房走進真正釀造崗位的轉折點。" } },
          { year:"1990s–2000s", era:{ en:"Heisei", ja:"平成", zh:"平成" }, eraJp:"杜氏へ",
            title:{ en:"The first women tōji", ja:"最初の女性杜氏", zh:"最初的女性杜氏" }, jp:"現場の責任者に",
            text:{ en:"Women begin holding the position of tōji — the person responsible for the whole brewing operation — rather than working within it. Imada Miho became tōji at her family's brewery in Hiroshima in 2000; Chino Mariko at Shusen Kurano in Nagano and Tsuji Maiko at Tsuji Honten in Okayama are among the other early and well-documented cases.",
              ja:"女性が、造りの内側で働くのではなく、造り全体に責任を負う杜氏の職に就き始める。今田美穂は平成十二年（2000）に広島の実家の蔵で杜氏となった。長野・酒千蔵野の千野麻里子、岡山・辻本店の辻麻衣子も、早く、そして記録の確かな例である。",
              zh:"女性開始擔任杜氏——對整個釀造作業負責的人——而不只是在其中工作。今田美穗於二〇〇〇年在廣島的家族酒藏出任杜氏；長野酒千藏野的千野麻里子、岡山辻本店的辻麻衣子，也是早期且有明確紀錄的案例。" } },
          { year:"2020", era:{ en:"Reiwa 2", ja:"令和2年", zh:"令和 2 年" }, eraJp:"国際的評価",
            title:{ en:"International recognition", ja:"国際的な評価", zh:"國際上的認可" }, jp:"BBC 100 Women",
            text:{ en:"Imada Miho is named to the BBC's 100 Women list, the only Japanese figure that year — a woman brewing in Miura Senzaburō's own town, with a rice her predecessors had abandoned.",
              ja:"今田美穂がBBCの「100 Women」に選ばれる。その年の日本人はただ一人であった。三浦仙三郎その人の町で、先人が捨てた米で醸す女性である。",
              zh:"今田美穗入選 BBC「100 Women」，是該年唯一的日本人——一位在三浦仙三郎故鄉釀酒、用著前人棄種之米的女性。" } },
          { year:{ en:"Now", ja:"現在", zh:"現在" }, era:{ en:"Reiwa", ja:"令和", zh:"令和" }, eraJp:"日常に",
            title:{ en:"Unremarkable, in most breweries", ja:"多くの蔵で、当たり前に", zh:"在多數酒藏，已不足為奇" }, jp:"現状",
            text:{ en:"Women now work throughout the industry — as kurabito, as tōji, as brewery owners, as researchers at prefectural institutes, and as the certified tasters and sommeliers who form much of the professional trade. The taboo survives mainly as an anecdote told to visitors, and as a set of practical obstacles that have nothing to do with superstition: physically demanding lifting, night shifts through a five-month season, and premises built long before anyone imagined a mixed workforce.",
              ja:"女性は今や業界の全域で働いている——蔵人として、杜氏として、蔵元として、県の研究機関の研究者として、そして専門の商いの多くを構成する有資格の利き手やソムリエとして。禁忌は主に、訪う者に語られる逸話として残る。そして迷信とは無関係の、いくつもの実際的な障壁として——重い物を扱う体力、五か月にわたる夜勤、そして混成の働き手を誰も想像していなかった時代に建てられた施設。",
              zh:"女性如今在整個產業各處工作——作為藏人、杜氏、藏元、縣立研究機構的研究者，以及構成專業商界大半的持證品評師與侍酒師。禁忌主要只剩下講給訪客聽的軼事，以及一組與迷信毫無關係的實際障礙：需要體力的搬運、長達五個月的夜班，以及在無人想像會有混合性別勞動力的年代所建造的廠房。" } }
        ] }
      ] },

    { t:"section", id:"now",
      title:{ en:"Three careers, and what they show", ja:"三つの歩みと、それが示すもの", zh:"三段職涯，以及它們所顯示的" }, jp:"現在",
      body:[
        { t:"p", text:{
          en:"The general history is above. What it does not convey is how recent this is, and how specific: the women now running brewhouses did not inherit a path, they each assembled one, and the shapes of those three routes are the whole argument in miniature.",
          ja:"一般の歴史は上に記した。それが伝えないのは、これがいかに新しく、いかに個別であるかである。今日、蔵を営む女たちは道を継いだのではない。それぞれが自ら組み立てたのであり、その三つの筋の形は、議論の全体の縮図である。",
          zh:"一般性的歷史已寫在上面。它沒有傳達的是：這一切有多晚近，又有多具體——如今掌管釀造場的女性並不是繼承了一條路，而是各自拼組出一條路，而這三種路徑的形狀，就是整場論證的縮影。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"The daughter who left and came back", ja:"出て、そして戻った娘", zh:"離開又回來的女兒" }, jp:"今田美穂・富久長", romaji:"Imada Miho, Fukuchō", meta:{ en:"Akitsu, Hiroshima", ja:"広島県安芸津", zh:"廣島安藝津" },
            text:{ en:"Eldest daughter of a house founded in 1868 in Akitsu — the village Miura Senzaburō came from, where soft-water brewing was worked out. She read at Meiji University, worked for a department store and then in theatre production in Tokyo, and had no intention of going home. She returned in 1994 when her father was past sixty and her brother had become a doctor, apprenticed under the house tōji from about 1998, and took the post herself in 2002, when women in the job could still be counted. She rebuilt the brewery around Hattansō, an old and difficult local rice nobody else was growing, and in November 2020 became the first person from sake to be named in the BBC's hundred women of the year.",
              ja:"軟水醸造法が編み出された、三浦仙三郎の出た村、安芸津に慶応四年（1868）に興った家の長女である。明治大学に学び、百貨店に、のち東京で舞台の制作に勤め、家へ帰る心づもりはなかった。父が六十を越え、兄が医者となった平成六年（1994）に戻り、平成十年（1998）ごろから蔵の杜氏に就いて学び、平成十四年（2002）に自らその職に就いた。その職にある女がなお数えうる頃である。誰も育てていなかった古く難しい土地の米、八反草を軸に蔵を建て直し、令和二年（2020）十一月、英国放送協会の年の百人の女性に、日本酒から初めて名を挙げられた。",
              zh:"她是一八六八年創立於安藝津的酒藏的長女——安藝津正是三浦仙三郎的故鄉，軟水釀造法在此被摸索出來。她就讀明治大學，先後任職於百貨公司與東京的劇場製作，本無回家的打算。一九九四年，父親年過六十、兄長成了醫生，她因而返鄉，約自一九九八年起隨藏內杜氏學習，並於二〇〇二年親自接下杜氏之職——當時擔任此職的女性仍屈指可數。她以八反草——一種古老、難種、無人再栽的在地米——為核心重建了酒藏，並在二〇二〇年十一月成為第一位以清酒身分入選 BBC 年度百大女性的人。" } },
          { n:2, title:{ en:"The daughter who was next in the room", ja:"室に居合わせた娘", zh:"當時就在現場的女兒" }, jp:"辻麻衣子・御前酒", romaji:"Tsuji Maiko, Gozenshu", meta:{ en:"Katsuyama, Okayama", ja:"岡山県勝山", zh:"岡山勝山" },
            text:{ en:"She joined the family brewery at Katsuyama in 2000, at twenty-three, in a house that had been making sake since the beginning of the nineteenth century. In 2007 the tōji died suddenly and she took the position at thirty, in a Bitchū guild tradition that had never had a woman in the role. What the brewery then did with a young chief was not to play safe: it reconstructed <em>bodaimoto</em>, the medieval temple starter, with a university laboratory, and built a modern range on the oldest method in Japanese brewing.",
              ja:"平成十二年（2000）、二十三で勝山の家の蔵に入った。十九世紀の初めから酒を造ってきた家である。平成十九年（2007）、杜氏が急逝し、彼女は三十でその職に就いた。その役に女を置いたことのない備中杜氏の伝統においてである。若い長を得た蔵がそののちにしたことは、安全に構えることではなかった。大学の研究室とともに中世の寺の酒母である菩提酛を再構し、日本の酒造りで最も古い法の上に現代の品揃えを建てたのである。",
              zh:"二〇〇〇年，二十三歲的她進入勝山的家族酒藏——一家自十九世紀初就開始釀酒的老鋪。二〇〇七年，杜氏驟逝，她在三十歲時接下這個職位，而在備中杜氏的傳統中，這個角色從未由女性擔任。擁有一位年輕負責人之後，這家酒藏所做的並不是求穩：它與大學實驗室合作重建了中世寺院的酒母「菩提酛」，並在日本釀造最古老的方法之上，建立起一整套現代酒款。" } },
          { n:3, title:{ en:"The women whose names are not on the bottle", ja:"瓶に名の載らぬ女たち", zh:"名字不在酒瓶上的女性" }, jp:"蔵人", romaji:"kurabito", meta:{ en:"everywhere", ja:"至る所", zh:"到處" },
            text:{ en:"The two careers above are visible because they end in a title. Far more common, and far less recorded, is the woman who is one of four or five people doing the actual work in a small brewery — running the kōji room, managing the analysis bench, keeping the tank charts — with no title at all and no expectation of one. Breweries that recruit openly now report applications from women at rates that would have been unimaginable in 1990, and the constraint has moved from prohibition to the ordinary ones: the hours, the cold, the seasonal contracts, and the fact that the job is still often described to schoolchildren as a man's.",
              ja:"上の二つの歩みが見えるのは、それが称号に終わるからである。はるかに多く、はるかに記録されぬのは、小さな蔵で実際の仕事をする四人五人のうちの一人である女である。麹室を回し、分析の台を預かり、槽の記録を保ちながら、称号を持たず、また持つことを期されてもいない。開かれた募集を行う蔵は今、一九九〇年には考えられなかった割合で女からの応募を報せる。制約は禁止から、平凡なものへ移った。時間、寒さ、季節の契約、そしてこの仕事が今なお学童にはしばしば男のものとして語られるという事実である。",
              zh:"上述兩段職涯之所以被看見，是因為它們以一個頭銜作結。遠更常見、也遠更少被記錄的，是那位在小型酒藏裡實際做事的四五人之一的女性——掌管麴室、負責分析檯、維護每一槽的紀錄——沒有任何頭銜，也不預期會有。如今公開招募的酒藏回報說，女性應徵的比例在一九九〇年是無法想像的。限制已從「禁止」轉為那些平凡的東西：工時、寒冷、季節性契約，以及這份工作至今仍常被向學童描述為男人的工作這件事。" } }
        ] }
      ] },

    { t:"section", id:"asymmetry",
      title:{ en:"Where the industry is already equal", ja:"すでに等しい場所", zh:"這個產業已經平等的地方" }, jp:"非対称",
      body:[
        { t:"figure",
          caption:{
            en:"The industry has two halves and they are not the same shape. Production is entered through an apprenticeship, and a brewery has one tōji who changes rarely, so the number of openings in a decade is small and the pipeline is slow whatever anyone intends. Everything adjacent to production is entered through an examination that anyone may sit, and those examinations were designed in the 1990s with no inherited gender history attached to them. That difference — not attitude — is most of why one half moved in ten years and the other is moving in generations.",
            ja:"この産業には二つの半分があり、その形は同じでない。造りの側へは徒弟として入る。そして蔵の杜氏は一人であり、代わることは稀である。ゆえに十年のうちに空く席は少なく、誰が何を意図していようと、道筋は遅い。造りの隣の側へは、誰もが受けられる試験を通って入る。そしてそれらの試験は、性別の履歴を何も引き継がぬまま、一九九〇年代に設計された。その違いが——心構えではなく——一方が十年で動き、他方が世代をかけて動いていることの大半を説明する。",
            zh:"這個產業有兩個半邊，而它們的形狀並不相同。釀造那一側要以學徒身分進入，而一家酒藏只有一位杜氏、且鮮少更換，因此十年之內能空出的位置很少；無論任何人抱持什麼意圖，這條管道就是慢。緊鄰釀造的那一側，則是透過任何人都能報考的考試進入，而那些考試是在一九九〇年代設計的，沒有承接任何性別歷史。正是這個差異——而非態度——解釋了為何一邊十年就動了，另一邊卻得以世代計。" },
          svg: function (lang, L) {
            var W = 760, H = 344;
            function wrap(text, cjk, max) {
              var out = [], i;
              if (cjk) { for (i = 0; i < text.length; i += max) out.push(text.slice(i, i + max)); return out; }
              var w = text.split(" "), line = "";
              for (i = 0; i < w.length; i++) {
                if ((line + " " + w[i]).replace(/^ /, "").length > max) { out.push(line); line = w[i]; }
                else line = line ? line + " " + w[i] : w[i];
              }
              if (line) out.push(line);
              return out;
            }
            var cjk = (lang !== "en");
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* the common pool */
            s += '<rect x="170" y="38" width="420" height="34" fill="#EDE5D2" stroke="#DED8CB"/>';
            s += '<text x="380" y="60" text-anchor="middle" font-size="12" fill="#55504A">' +
                 (lang === "ja" ? "日本酒の仕事に就こうとする人々" : lang === "zh" ? "想要進入清酒這一行的人" : "people who want to work in sake") + '</text>';
            var sides = [
              { x:30, slot:16, jp:"造りの側",
                n:{ en:"production", ja:"つくりのがわ", zh:"釀造那一側" },
                gate:[ { en:"entered as an apprentice", ja:"徒弟として入る", zh:"以學徒身分進入" },
                       { en:"one tōji to a brewery", ja:"蔵に杜氏は一人", zh:"一藏只有一位杜氏" },
                       { en:"and they change rarely", ja:"そして代わることは稀", zh:"而且鮮少更換" } ],
                out:"蔵人・杜氏・組合・審査員",
                v:{ en:"still lopsided — and moving in generations", ja:"なお偏っている。動きは世代の速さである", zh:"仍然失衡——而且以世代為單位在移動" } },
              { x:390, slot:128, jp:"その隣の側",
                n:{ en:"everything adjacent", ja:"そのとなりのがわ", zh:"緊鄰的那一側" },
                gate:[ { en:"entered by examination", ja:"試験を通って入る", zh:"透過考試進入" },
                       { en:"anyone may sit it", ja:"誰でも受けられる", zh:"任何人都能報考" },
                       { en:"designed in the 1990s", ja:"一九九〇年代の設計である", zh:"設計於一九九〇年代" } ],
                out:"利き酒・小売・ソムリエ・教育・執筆・輸入",
                v:{ en:"level, or past it — it moved in ten years", ja:"並び、あるいは越えた。十年で動いた", zh:"已然齊平，甚或超越——它十年就動了" } }
            ];
            var i, k, GY = 108, PW = 340;
            for (i = 0; i < sides.length; i++) {
              var v = sides[i], cx = v.x + PW / 2;
              s += '<line x1="380" y1="72" x2="380" y2="88" stroke="#B4AC9C"/>';
              s += '<line x1="380" y1="88" x2="' + cx + '" y2="88" stroke="#B4AC9C"/>';
              s += '<line x1="' + cx + '" y1="88" x2="' + cx + '" y2="' + (GY - 9) + '" stroke="#B4AC9C"/>';
              s += '<path d="M' + cx + ' ' + GY + ' L' + (cx - 5) + ' ' + (GY - 10) + ' L' + (cx + 5) + ' ' + (GY - 10) + ' Z" fill="#B4AC9C"/>';
              /* the wall with its opening */
              s += '<rect x="' + v.x + '" y="' + GY + '" width="' + PW + '" height="44" fill="#DCD6C8" stroke="#B4AC9C"/>';
              s += '<rect x="' + (cx - v.slot / 2) + '" y="' + GY + '" width="' + v.slot + '" height="44" fill="#FBFAF7" stroke="#B4AC9C"/>';
              s += '<text x="' + v.x + '" y="' + (GY - 12) + '" font-size="13" fill="#201E1B">' + v.jp + '</text>';
              s += '<text x="' + (v.x + 92) + '" y="' + (GY - 12) + '" font-size="9" fill="#8B857C">' + L(v.n) + '</text>';
              /* what the gate is made of */
              for (k = 0; k < v.gate.length; k++) {
                s += '<text x="' + (v.x + 14) + '" y="' + (GY + 70 + k * 16) + '" font-size="10.5" fill="#8B857C">· ' + L(v.gate[k]) + '</text>';
              }
              /* the outcome */
              var OY = GY + 124;
              s += '<rect x="' + v.x + '" y="' + OY + '" width="' + PW + '" height="58" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (v.x + 14) + '" y="' + (OY + 22) + '" font-size="11.5" fill="#201E1B">' + v.out + '</text>';
              var ol = wrap(L(v.v), cjk, cjk ? 22 : 44);
              for (k = 0; k < ol.length && k < 2; k++) {
                s += '<text x="' + (v.x + 14) + '" y="' + (OY + 40 + k * 13) + '" font-size="9.5" fill="#8B857C">' + ol[k] + '</text>';
              }
            }
            s += '<text x="30" y="' + (H - 24) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "開口の幅は形の比喩であって、測った数ではない。数えられるのは、蔵に杜氏が一人であるということだけである。"
                  : lang === "zh" ? "開口的寬度是形狀的比喻，不是測得的數字；真正可數的，只有「一藏一杜氏」這件事。"
                  : "The width of each opening is a metaphor for shape, not a measured figure. The only countable thing here is that a brewery has one tōji.") + '</text>';
            s += '<text x="30" y="' + (H - 9) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "女性の飲み手に対する業界の常の答えは、別の商品を作ることであった。低アルコール、甘口、果実、淡い桃色の札。区分そのものが一つの前提を置いている。"
                  : lang === "zh" ? "業界對女性飲者慣常的回應，是另造一種商品：低酒精、偏甜、果味、淡粉色酒標。這個類別本身就預設了某件事。"
                  : "The industry's recurring answer to women drinkers has been a separate product: lower alcohol, sweeter, a pale pink label.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The interesting thing about gender in sake is not that production is still lopsided. It is that everything adjacent to production is not, and the gap between the two halves is much wider than either is from the general economy.",
          ja:"日本酒における性の何が面白いかといえば、造りがなお偏っていることではない。造りに隣り合うすべてがそうではないことであり、その二つの半分の隔たりは、そのいずれと一般の経済との隔たりよりもはるかに広い。",
          zh:"清酒業中性別議題真正有趣之處，不在於生產端仍然失衡，而在於緊鄰生產端的一切都已不失衡——而這兩半之間的落差，比其中任何一半與整體經濟之間的落差都要大得多。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"Still lopsided", ja:"なお偏る側", zh:"仍然失衡的一側" }, jp:"造りの側",
            text:{ en:"The brewhouse, the guild structures, the tōji title, the ownership succession, the industry associations and the competition juries. Change here is real but generational: a brewery has one tōji, changes them rarely, and the pipeline runs through apprenticeship rather than hiring. Every appointment is still individually newsworthy, which is itself the measure.",
              ja:"蔵の内、杜氏集団の構え、杜氏の称号、家の継承、業界の団体、鑑評会の審査である。ここでの変化は実際のものだが、世代のものである。蔵に杜氏は一人であり、稀にしか替わらず、道は雇用ではなく徒弟を通る。任命の一つ一つが今なお個別に報せに値し、それ自体が尺度である。",
              zh:"釀造場內部、杜氏集團的結構、杜氏這個頭銜、家族的繼承、產業公會，以及鑑評會的評審。這裡的改變是真實的，但屬於世代尺度：一家酒藏只有一位杜氏，極少更換，而人才管道走的是師徒制而非招聘。每一次任命至今仍會單獨成為新聞——這件事本身就是一把量尺。" } },
          { title:{ en:"Already level, or past it", ja:"すでに並び、あるいは越えた側", zh:"已然齊平，甚至超越的一側" }, jp:"飲む側と伝える側",
            text:{ en:"Tasting qualifications, sake education, specialist retail, sommellerie, restaurant beverage direction, writing and importing. In these fields women are numerous, senior and often dominant, and the certifications that gate them were designed in the 1990s with no inherited exclusion to overcome. A drinker's first serious encounter with sake in Tokyo, London or Taipei is now more likely than not to be mediated by a woman.",
              ja:"利き酒の資格、日本酒の教育、専門の小売、ソムリエ、料理店の飲み物の采配、書くこと、輸入することである。これらの分野に女は多く、上位にあり、しばしば主である。それらを守る資格は一九九〇年代に設けられ、越えるべき受け継がれた排除を持たなかった。東京でも倫敦でも台北でも、飲み手が日本酒と本気で出会う最初の機会は、今や女を介する方が多い。",
              zh:"品評資格、清酒教育、專業零售、侍酒、餐廳飲品總監、書寫與進口。在這些領域中，女性人數眾多、位居資深，且往往居於主導。而把守這些領域的認證制度是一九九〇年代才設立的，沒有需要克服的繼承性排除。無論在東京、倫敦或台北，一位飲者與清酒的第一次認真相遇，如今由女性居中促成的機率更高。" } }
        ] },
        { t:"note", title:{ en:"The marketing problem", ja:"売り方の問題", zh:"行銷上的問題" }, text:{
          en:"A recurring industry response to women drinkers has been to invent a separate product for them: lower alcohol, sweeter, fruit-flavoured, pale pink label, small bottle. Some of these are good sake and some are not, but the category itself makes an assumption the evidence does not support — women who drink sake seriously drink the same range everyone else does, and the sweet low-alcohol styles sell about equally to men who simply were not being offered them. The safer reading is that the industry discovered an underserved preference and mislabelled it as a demographic.",
          ja:"女の飲み手に対する業界の繰り返される応えは、彼女らのために別の品を作ることであった。度数を下げ、甘くし、果実を効かせ、淡い桃色の札を貼り、瓶を小さくする。その中には良い酒もあり、そうでないものもある。しかし区分そのものが、証の支えぬ前提を置いている。日本酒を本気で飲む女は、他の誰とも同じ幅を飲む。そして甘く度数の低い型は、単にそれを勧められてこなかった男にもほぼ同じだけ売れる。より安全な読みは、業界は満たされていなかった好みを見つけ、それを人口の区分と取り違えて名付けた、というものである。",
          zh:"產業面對女性飲者，反覆出現的回應是為她們發明一種另外的產品：更低的酒精度、更甜、加入果味、淡粉色酒標、小瓶裝。其中有些是好酒，有些不是；但這個類別本身建立在一個證據並不支持的假設上——認真喝清酒的女性，喝的是與所有人相同的完整光譜；而甜味、低酒精的類型，賣給那些只是從未被推薦過它們的男性，銷量也差不多。更穩妥的解讀是：這個產業發現了一種未被滿足的偏好，卻把它誤標成了一個人口族群。" } }
      ] },

    { t:"section", id:"drinkers",
      title:{ en:"On the other side of the counter", ja:"帳場の反対側", zh:"櫃檯的另一邊" }, jp:"飲み手として",
      body:[
        { t:"p", text:{
          en:"The second half of this story is about drinkers rather than makers, and it is commercially the more consequential half. For most of the twentieth century sake was marketed almost exclusively at men, in an idiom of after-work drinking, business entertainment and the warmed cup at a counter. When domestic consumption began its long fall after 1973, that entire framing went down with it.",
          ja:"この物語の後半は、造り手ではなく飲み手についてであり、商いの上ではこちらのほうが帰結が大きい。二十世紀の大半を通じて、日本酒はほとんど男性のみに向けて売られてきた——仕事帰りの酒、接待、カウンターの燗の杯という語法において。一九七三年以降、国内の消費が長い下降を始めたとき、その枠組みの全体もまた共に沈んだ。",
          zh:"這個故事的後半是關於飲者而非釀造者，而在商業上，這後半更為關鍵。二十世紀的大部分時間裡，清酒幾乎只針對男性行銷，其語彙是下班後的酒、商務應酬，以及吧檯前那杯溫熱的酒。當國內消費在一九七三年後開始漫長的下滑時，整套框架也一併沉沒。" } },

        { t:"ul", items:[
          { en:"<strong>The premium turn was partly a gender turn.</strong> The ginjō boom of the 1980s and the jizake movement before it sold sake as something to be chosen and tasted rather than consumed by the flask, and that repositioning brought in drinkers the old framing had never addressed. Wine glasses, smaller bottles, aroma-forward styles and modern label design all belong to the same shift.",
            ja:"<strong>高級路線への転回は、部分的に性別の転回であった。</strong>一九八〇年代の吟醸ブームと、それに先立つ地酒の運動は、日本酒を、徳利で消費するものではなく、選び、味わうものとして売った。その位置づけの変更は、旧来の枠組みが一度も語りかけなかった飲み手を招き入れた。ワイングラス、小さな瓶、香りを前に出した酒質、現代的なラベルの意匠は、いずれも同じ転回に属する。",
            zh:"<strong>高階化的轉向，有一部分是性別的轉向。</strong>一九八〇年代的吟釀熱潮，以及在此之前的地酒運動，把清酒賣成一種「被挑選、被品味」的東西，而不是用德利大口消費的東西；這次重新定位帶進了舊框架從未對之說話的飲者。葡萄酒杯、小瓶裝、以香氣為前鋒的酒質、現代化的酒標設計，都屬於同一次轉向。" },
          { en:"<strong>Sparkling and low-alcohol are the clearest case.</strong> These categories barely existed before the 2000s and were built deliberately for drinkers who found 16% sake heavy and its rituals unwelcoming. They are frequently dismissed as not serious, which is a category error: they are the part of the industry that grew.",
            ja:"<strong>発泡と低アルコールが最も明快な例である。</strong>これらの区分は二〇〇〇年代以前にはほとんど存在せず、16%の酒を重いと感じ、その作法を歓迎されないと感じる飲み手のために意図して作られた。真面目でないとしばしば退けられるが、それは範疇の取り違えである——業界のうち伸びたのは、この部分なのである。",
            zh:"<strong>氣泡與低酒精是最清楚的例子。</strong>這些類別在二〇〇〇年代前幾乎不存在，是刻意為那些覺得 16% 的酒太重、覺得其儀式不友善的飲者而打造的。它們常被斥為「不夠正經」，但那是範疇上的錯誤：整個產業真正成長的，正是這一塊。" },
          { en:"<strong>The professional trade is now substantially women.</strong> The tasting qualifications, the specialist retail sector, sake bars, importers and the writing about sake all include a great many women, in numbers that are not reflected in the historical accounts of the drink. If you learn about sake from a professional today, it is roughly as likely to be from a woman as a man.",
            ja:"<strong>専門の商いは今や実質的に女性を多く含む。</strong>利き酒の資格、専門の小売、日本酒の店、輸入業、そして日本酒についての文章のいずれもが多くの女性を含んでおり、その数はこの飲み物の歴史的な記述には反映されていない。今日、専門家から日本酒を学ぶなら、その相手が女性である見込みは、男性である見込みとおおむね等しい。",
            zh:"<strong>專業界如今有相當比例是女性。</strong>品評資格、專門零售、清酒吧、進口商，以及關於清酒的書寫，都包含大量女性，而其人數在這種飲品的歷史記述中並未被反映。今天你若向專業人士學習清酒，對方是女性的機率大致與是男性相當。" }
        ] },

        { t:"quote", text:{
          en:"The prohibition kept women off the brewing floor for perhaps two centuries. It did not keep them out of the business, out of the trade, or out of the drinking — and the part of the industry that has grown in the last thirty years is the part that finally noticed.",
          ja:"禁忌は、おそらく二世紀にわたり女性を蔵の作業場から遠ざけた。しかし商いからも、流通からも、飲むことからも遠ざけはしなかった——そしてこの三十年に伸びた部分とは、そのことにようやく気づいた部分である。",
          zh:"這項禁令把女性擋在釀造現場之外，大約有兩個世紀。但它並沒有把她們擋在這門生意之外、這個行業之外，或飲酒之外——而過去三十年間真正成長的那一塊，正是終於注意到這件事的那一塊。" } },

        { t:"note", text:{
          en:"For the individuals named here see <a href=\"people.html\">People</a>; for the crew structure the prohibition applied to see <a href=\"toji.html\">Tōji &amp; the Crew</a>; for the market shift see <a href=\"industry.html\">Industry &amp; Trade</a> and <a href=\"future.html\">The Next Twenty Years</a>.",
          ja:"ここに挙げた人物については<a href=\"people.html\">人物</a>、禁忌が適用された組の構造については<a href=\"toji.html\">杜氏と蔵人</a>、市場の転換については<a href=\"industry.html\">産業と流通</a>および<a href=\"future.html\">これからの二十年</a>を参照。",
          zh:"本頁提及的人物見<a href=\"people.html\">人物</a>；禁令所適用的工班結構見<a href=\"toji.html\">杜氏與藏人</a>；市場的轉變見<a href=\"industry.html\">產業與貿易</a>與<a href=\"future.html\">未來二十年</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"toji.html", why:{ en:"The guild the exclusion was built into, and what replaced it.", ja:"排除が組み込まれていた組と、それに代わったもの。", zh:"把排除內建其中的那個行會，以及取代它的東西。" } },
      { href:"people.html", why:{ en:"The wider cast, and where these names sit among them.", ja:"より広い顔ぶれと、これらの名がそのどこに座るか。", zh:"更廣的名單，以及這些名字在其中的位置。" } },
      { href:"industry.html", why:{ en:"Succession, closure and who is left to inherit a kura.", ja:"事業承継、廃業、そして蔵を継ぐ者が誰か。", zh:"事業繼承、歇業，以及還剩下誰能繼承一座酒藏。" } },
      { href:"culture.html", why:{ en:"The ritual and social frame the exclusion was justified by.", ja:"排除が正当化の根拠とした、祭と社会の枠。", zh:"排除所援引的那套祭儀與社會框架。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- culture */
SAKE.pages["culture"] = {
  kicker: { en: "Foundations · 07", ja: "基礎 · 07", zh: "基礎 · 07" },
  title:  { en: "Culture & Ritual", ja: "文化と儀礼", zh: "文化與儀禮" },
  jp: "神事 · 年中行事 · 作法",
  lede: {
    en: "Sake is not only a drink in Japan. It is the substance through which agreements are sealed, marriages made, buildings blessed, ships launched, harvests thanked and gods addressed. Almost every ritual use of alcohol in Japanese life is a use of sake, and the reason is straightforward: sake is made of rice, and rice is the thing the gods were being thanked for in the first place.",
    ja: "日本において日本酒は飲み物であるにとどまらない。契りを結び、婚姻を成し、建物を祓い、船を進水させ、収穫に感謝し、神に語りかけるための物質である。日本の生活における儀礼的な酒の使用は、そのほぼすべてが日本酒の使用であり、理由は単純である——日本酒は米から造られ、そもそも神に感謝されていたのは米だからである。",
    zh: "在日本，日本酒不只是飲品。它是締結契約、成就婚姻、淨化建築、下水新船、感謝收成與向神明言說的媒介。日本生活中對酒的儀禮性使用，幾乎全都是對日本酒的使用；理由很直接——日本酒由米釀成，而神明最初被感謝的正是米。"
  },
  body: [
    { t:"section", id:"shinto",
      title:{ en:"Sake and the kami", ja:"神と酒", zh:"神與酒" }, jp:"神酒",
      body:[
        { t:"p", text:{
          en:"Offerings of sake — <em>omiki</em> (お神酒) — stand on every Shinto altar in Japan, in a pair of white porcelain flasks flanking the offering table. After the ritual the offering is drunk by the participants, a shared meal with the deity called <em>naorai</em> (直会). The logic is not symbolic: the sake has been in the god's presence and now carries something of it.",
          ja:"日本のあらゆる神棚と神前に、お神酒が供えられている。白磁の瓶子が一対、三方の左右に置かれる。祭祀ののち、その供物は参列者によって飲まれる。神とともにする食事、直会である。この論理は象徴ではない——酒は神の前にあり、いまその何かを帯びている。",
          zh:"清酒的供奉——「御神酒」——立於日本每一座神道祭壇之上，以一對白瓷瓶子分列供桌兩側。儀式結束後，供品由參與者飲下，這是與神共食的「直會」。其邏輯並非象徵性的：酒曾置於神前，如今承載了神的某種東西。" } },
        { t:"table",
          caption:{en:"The three great sake shrines",ja:"日本三大酒神神社",zh:"日本三大酒神神社"},
          cols:[{en:"Shrine",ja:"神社",zh:"神社"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Where",ja:"所在",zh:"所在"},{en:"Why",ja:"由縁",zh:"緣由"}],
          jpCols:[1],
          rows:[
            ["Ōmiwa Jinja","大神神社",{en:"Miwa, Nara",ja:"奈良県桜井市三輪",zh:"奈良縣櫻井市三輪"},
             {en:"One of the oldest shrines in Japan, with Mount Miwa itself as the object of worship rather than a building. Its deity Ōmononushi is the god of sake brewing, and its <em>Jōzō Anzen Kigansai</em> — the prayer for safe brewing, held in November — is attended by brewers from across the country. The cedar of Mount Miwa is the origin of the sugidama.",ja:"日本最古級の神社であり、社殿ではなく三輪山そのものを拝する。祭神の大物主大神は酒造りの神であり、十一月の醸造安全祈願祭には全国の蔵元が参列する。杉玉の起源は、この三輪山の杉である。",zh:"日本最古老的神社之一，崇拜對象是三輪山本身而非建築。主祭神大物主大神為釀酒之神，十一月的「釀造安全祈願祭」有全國酒藏前來參拜。杉玉的起源，正是三輪山之杉。"}],
            ["Matsunoo Taisha","松尾大社",{en:"Kyoto",ja:"京都市西京区",zh:"京都市西京區"},
             {en:"Founded in association with the Hata, an immigrant clan credited with advanced brewing technique. The most widely venerated shrine among working brewers; its precinct holds a wall of donated barrels from breweries nationwide, and its spring, the Kame-no-i, is said to improve any sake it is added to.",ja:"高度な醸造技術を伝えたとされる渡来氏族・秦氏と結びついて創建された。現役の蔵元が最も広く崇敬する社であり、境内には全国の蔵から奉納された酒樽が壁をなす。霊泉「亀の井」の水は、加えればいかなる酒も良くすると伝えられる。",zh:"與傳入先進釀造技術的渡來氏族秦氏相關而創建。是現役釀酒者最普遍崇敬的神社，境內有全國酒藏奉納的酒樽築成一牆；靈泉「龜之井」之水，據傳加入任何酒中皆能使之更佳。"}],
            ["Umenomiya Taisha","梅宮大社",{en:"Kyoto",ja:"京都市右京区",zh:"京都市右京區"},
             {en:"Enshrines Sakatoke-no-kami, whose name means literally the deity who dissolves — that is, who ferments — and who is invoked for both brewing and childbirth.",ja:"酒解神を祀る。その名は文字どおり「酒を解く」神、すなわち発酵させる神を意味し、醸造と安産の双方に祈願される。",zh:"祭祀酒解神，其名字面意為「解酒」之神，即使之發酵者，兼被祈求釀造順利與安產。"}]
          ] },
        { t:"panel", tint:"moss", title:{en:"Sugidama — the cedar ball",ja:"杉玉",zh:"杉玉"}, body:[
          { t:"p", text:{
            en:"A sphere of cedar boughs, sometimes a metre across, hung under the eaves of a brewery. A new one goes up green when the season's first sake is pressed, and it browns through the year as the sake in the tanks matures — so a passer-by can read from the street roughly how old the sake inside is. The cedar comes from Mount Miwa's tradition, and the ball is also called <em>sakabayashi</em>, “sake forest”.",
            ja:"杉の枝葉を球状に束ねたもので、直径一メートルに及ぶこともある。蔵の軒に吊るす。その年の新酒を搾ると青いものに掛け替えられ、蔵の酒の熟成とともに一年をかけて茶色く枯れていく。道行く人は、通りから中の酒のおおよその齢を読むことができる。杉は三輪山の伝統に由来し、この球は酒林とも呼ばれる。",
            zh:"以杉樹枝葉束成的球體，有時直徑達一公尺，懸於酒藏屋簷下。當年首批新酒搾出時換上翠綠的新球，隨槽中之酒熟成而在一年間逐漸轉褐——路人自街上便能大致讀出裡頭的酒有多老。杉木源自三輪山的傳統，此球亦稱「酒林」。" } }
        ] }
      ]
    },

    { t:"section", id:"rites",
      title:{ en:"Rites of passage", ja:"人生儀礼", zh:"人生儀禮" }, jp:"儀礼",
      body:[
        { t:"defs", items:[
          { term:{en:"San-san-kudo",ja:"三々九度",zh:"三三九度"}, jp:"三々九度",
            def:{en:"The core of a Shinto wedding. Bride and groom each drink three times from each of three stacked lacquer cups, nine sips in all. Three is auspicious, nine trebly so, and the couple's families then share from the same cups. It is the oldest surviving form of sealing a bond with a shared vessel.",
                 ja:"神前式の核心である。新郎新婦が三重ねの盃それぞれから三度ずつ、合わせて九度口をつける。三は吉数であり、九はその三倍である。続いて両家がその盃を分かち合う。器を共にすることで契りを結ぶ、最も古い形が現存したものである。",
                 zh:"神前婚禮的核心。新郎新娘各自從三只疊放的漆杯中各飲三次，共九口。三為吉數，九則三倍之。隨後兩家親屬共用同一組杯。這是以共用器皿締結盟約最古老而留存至今的形式。"} },
          { term:{en:"Kagami-biraki",ja:"鏡開き",zh:"鏡開"}, jp:"鏡開き",
            def:{en:"Breaking open the round wooden lid of a sake cask with mallets at a celebration — a company founding, a new year, a wedding, a sumo victory. The lid is the <em>kagami</em>, mirror, a Shinto symbol of the divine, and “opening” rather than “breaking” is used because the word for break is inauspicious.",
                 ja:"祝いの席で、酒樽の丸い蓋を木槌で開くこと。会社の創立、新年、婚礼、相撲の優勝など。蓋は「鏡」と呼ばれ、神道において神霊を象徴する。「割る」は忌み言葉であるため、「開く」と言う。",
                 zh:"在慶祝場合以木槌敲開酒樽的圓形木蓋——公司創立、新年、婚禮、相撲勝利等。蓋稱為「鏡」，在神道中象徵神靈；因「破」為忌諱之詞，故稱「開」而不稱「破」。"} },
          { term:{en:"Otoso",ja:"お屠蘇",zh:"屠蘇"}, jp:"お屠蘇",
            def:{en:"Spiced medicinal sake drunk on New Year's morning, infused overnight with a packet of herbs — cinnamon, sansho, rhubarb, bellflower root. The name means roughly “slaughtering the demon of ill health”. Drunk in order from youngest to oldest, so that the young pass their vitality upward.",
                 ja:"元旦の朝に飲む薬酒。桂皮・山椒・大黄・桔梗などを配した屠蘇散を一晩浸して作る。名は「邪気を屠り、魂を蘇らせる」の意とされる。若い者から年長者へと順に飲み、若さの活力を上へ渡す。",
                 zh:"元旦早晨飲用的藥酒，將肉桂、山椒、大黃、桔梗等藥材包浸泡一夜而成。名稱大意為「屠殺病邪、甦醒精神」。飲用順序由年幼至年長，讓年輕者將生氣向上傳遞。"} },
          { term:{en:"Jōtōshiki and jichinsai",ja:"上棟式・地鎮祭",zh:"上棟式與地鎮祭"}, jp:"上棟式 · 地鎮祭",
            def:{en:"Sake is poured on the four corners of a building site before construction begins, and again on the ridge beam when the frame is raised. Both are purification rites; both are still performed on ordinary commercial construction sites in Japan today.",
                 ja:"着工前に敷地の四隅に酒を注ぎ、棟上げの際には棟木にも注ぐ。いずれも清めの儀礼であり、今日の日本において、通常の商業建築の現場でもなお行われている。",
                 zh:"動工前於基地四角灑酒，上梁時再灑於棟木之上。兩者皆為淨化儀禮，至今仍在日本一般商業工地上舉行。"} },
          { term:{en:"Sakazukigoto",ja:"盃事",zh:"盃事"}, jp:"盃事",
            def:{en:"Sealing any formal relationship by drinking from a shared cup — between families, between master and apprentice, and, notoriously, within organised crime. The mechanism is the same in every case: a bond that cannot be undone because it was made physically.",
                 ja:"一つの盃を分かつことで、あらゆる正式な関係を結ぶこと。家と家のあいだ、師と弟子のあいだ、そして悪名高くは任侠の世界において。仕組みはいずれも同じである——身体をもって結ばれたがゆえに、解くことのできない契り。",
                 zh:"以共飲一杯締結任何正式關係——家與家之間、師與徒之間，以及惡名昭彰地，在黑道之中。其機制始終相同：因由身體締結，故不可解除的盟約。"} }
        ] }
      ]
    },

    { t:"section", id:"calendar",
      title:{ en:"The year in sake", ja:"酒の歳時記", zh:"酒的歲時記" }, jp:"年中行事",
      body:[
        { t:"timeline", items:[
          { year:{en:"1 Jan",ja:"一月一日",zh:"1月1日"}, era:{en:"New Year",ja:"正月",zh:"新年"}, eraJp:"正月",
            title:{en:"Otoso",ja:"お屠蘇",zh:"屠蘇"}, jp:"お屠蘇",
            text:{en:"Spiced sake at the family table, youngest first. Shrines also serve omiki to first-visit crowds.",ja:"家の膳で、年少者から順に屠蘇を。神社では初詣の参拝者にお神酒がふるまわれる。",zh:"家中餐桌上飲屠蘇，由年幼者先飲。神社亦向初詣人潮供奉御神酒。"} },
          { year:{en:"Late Jan",ja:"一月下旬",zh:"一月下旬"}, era:{en:"Winter",ja:"冬",zh:"冬"}, eraJp:"冬",
            title:{en:"Kurabiraki",ja:"蔵開き",zh:"藏開"}, jp:"蔵開き",
            text:{en:"Breweries open their doors to the public as the first sake of the season is released. Tastings, cask breaking, and the year's first sugidama.",ja:"その季節の新酒の出荷に合わせ、蔵が門を開く。試飲、鏡開き、そしてその年最初の杉玉。",zh:"隨當季新酒出貨，酒藏開門迎客。試飲、鏡開，以及當年第一顆杉玉。"} },
          { year:{en:"Late Mar",ja:"三月下旬",zh:"三月下旬"}, era:{en:"Spring",ja:"春",zh:"春"}, eraJp:"春",
            title:{en:"Hanami-zake",ja:"花見酒",zh:"花見酒"}, jp:"花見酒",
            text:{en:"Drinking under the cherry blossom — the largest single occasion for sake consumption in the Japanese year, and the reason for pink-labelled spring releases.",ja:"桜の下で飲むこと。日本の一年で日本酒が最も多く飲まれる単一の機会であり、桃色のラベルの春酒が存在する理由でもある。",zh:"在櫻花下飲酒——日本一年中清酒消費量最大的單一場合，也是粉色酒標春酒存在的理由。"} },
          { year:{en:"May",ja:"五月",zh:"五月"}, era:{en:"Spring",ja:"春",zh:"春"}, eraJp:"春",
            title:{en:"The national competition",ja:"全国新酒鑑評会",zh:"全國新酒鑑評會"}, jp:"全国新酒鑑評会",
            text:{en:"Results are announced, gold medals are counted by prefecture, and the announcement is genuine news in brewing districts.",ja:"結果が発表され、金賞の数が県ごとに数えられる。酒どころにおいては、これは実際に報道される出来事である。",zh:"結果公布，各縣金賞數量被逐一計算；在釀酒地區，這是名副其實的新聞。"} },
          { year:{en:"Sep–Oct",ja:"九月〜十月",zh:"九月至十月"}, era:{en:"Autumn",ja:"秋",zh:"秋"}, eraJp:"秋",
            title:{en:"Tsukimi-zake and hiyaoroshi",ja:"月見酒・ひやおろし",zh:"月見酒與冷卸"}, jp:"月見酒",
            text:{en:"Moon-viewing with sake, and the release of the sake that rested through the summer. 1 October is Nihonshu no Hi, Sake Day, marking what was once the start of the brewing year.",ja:"月を見ながら飲むこと、そして夏を越した酒の出荷。十月一日は日本酒の日であり、かつて酒造年度の始まりであった日にあたる。",zh:"賞月飲酒，以及越夏靜置之酒的出貨。10 月 1 日是「日本酒之日」，標記著昔日釀造年度的起點。"} },
          { year:{en:"14 Nov",ja:"十一月十四日",zh:"11月14日"}, era:{en:"Autumn",ja:"秋",zh:"秋"}, eraJp:"秋",
            title:{en:"Prayer for safe brewing",ja:"醸造安全祈願祭",zh:"釀造安全祈願祭"}, jp:"醸造安全祈願祭",
            text:{en:"At Ōmiwa Jinja in Nara. Brewers from across Japan attend as the season begins, and a new sugidama is made and distributed.",ja:"奈良・大神神社にて。造りの始まりに際し全国から蔵元が参列し、新しい杉玉が作られ、配られる。",zh:"於奈良大神神社舉行。釀期之始，全國酒藏前來參列，並製作、分發新的杉玉。"} },
          { year:{en:"Dec",ja:"十二月",zh:"十二月"}, era:{en:"Winter",ja:"冬",zh:"冬"}, eraJp:"冬",
            title:{en:"Shiboritate and yukimi-zake",ja:"しぼりたて・雪見酒",zh:"搾立與雪見酒"}, jp:"雪見酒",
            text:{en:"The year's first pressings reach the market; warmed sake while watching snow is a set poetic image with its own name.",ja:"その年最初の搾りが市場に出る。雪を眺めながらの燗酒は、それ自体に名をもつ定型の詩的な景である。",zh:"當年最早的搾酒進入市場；一邊賞雪一邊飲溫酒，是一個自有其名的定型詩意場景。"} }
        ] }
      ]
    },

    { t:"section", id:"table",
      title:{ en:"At the table", ja:"酒席の作法", zh:"酒席之上" }, jp:"作法",
      body:[
        { t:"ul", items:[
          { en:"<strong>Never pour for yourself.</strong> Fill your neighbour's cup; they will fill yours. Pour with both hands, or with one hand supported by the other, and receive with the cup lifted rather than left on the table.",
            ja:"<strong>手酌をしない。</strong>隣の杯を満たせば、相手が自分の杯を満たす。両手で、あるいは片手を添えて注ぎ、受けるときは杯を卓に置いたままにせず、持ち上げる。",
            zh:"<strong>不為自己斟酒。</strong>為鄰座斟滿，對方會為你斟滿。以雙手、或一手托著另一手斟酒；受酒時應舉杯，而非留在桌上。" },
          { en:"<strong>Wait for the kanpai.</strong> Nobody drinks before the first toast. Glasses are held slightly lower than a senior person's as they touch, which is a small and entirely serious point of etiquette.",
            ja:"<strong>乾杯を待つ。</strong>最初の乾杯の前に飲む者はいない。杯を合わせる際、目上の相手より少し低い位置で合わせる。細かく、しかしまったく本気の作法である。",
            zh:"<strong>等候乾杯。</strong>第一次舉杯之前無人先飲。碰杯時杯緣略低於長輩或上位者，這是細微卻絕對認真的禮節。" },
          { en:"<strong>To stop, leave the cup full.</strong> An empty cup is an invitation. Covering it lightly with a hand is the explicit version.",
            ja:"<strong>やめるときは杯を満たしたままにする。</strong>空の杯は誘いである。手を軽く添えて覆うのは、より明示的な断り方である。",
            zh:"<strong>想停下，就讓杯子保持滿的。</strong>空杯是一種邀請。以手輕覆杯口，則是更明確的表示。" },
          { en:"<strong>Mokkiri.</strong> A glass set inside a wooden masu and filled until it overflows into the box. The overflow is deliberate — a display of generosity — and the correct approach is to sip from the glass before lifting it, then to drink what has collected in the masu.",
            ja:"<strong>もっきり。</strong>枡に置いたグラスに、枡へ溢れるまで注ぐ。溢れさせるのは意図的な、寛容の身振りである。作法としては、まず持ち上げずにグラスに口をつけ、その後、枡に溜まったものを飲む。",
            zh:"<strong>盛切（もっきり）。</strong>將玻璃杯置於木枡中，注酒直至溢入枡內。溢出是刻意的——一種慷慨的表示——正確做法是先不舉杯、就口啜飲，再飲枡中所積之酒。" },
          { en:"<strong>Otsukare-sama.</strong> The first drink after work is a social institution with its own vocabulary, and much of what sake means in Japan today is bound up in that daily hour rather than in any ceremony.",
            ja:"<strong>お疲れさま。</strong>仕事の後の一杯は、それ自体の語彙をもつ社会制度である。今日の日本において日本酒が意味するものの多くは、儀式ではなくこの日々の一時間のなかにある。",
            zh:"<strong>辛苦了。</strong>下班後的第一杯是一項擁有自身語彙的社會制度；今日日本酒在日本所意味的大半，繫於這日常的一小時，而非任何儀式。" }
        ] },
        { t:"quote",
          text:{ en:"“Rather than fret over things beyond knowing, it seems better to drink a cup of murky sake.”",
                 ja:"「験なきものを思はずは一坏の濁れる酒を飲むべくあるらし」",
                 zh:"「與其憂思那不可知之事，不如飲一杯濁酒。」" },
          cite:{ en:"Ōtomo no Tabito, from the thirteen poems in praise of sake, Man'yōshū, 8th century",
                 ja:"大伴旅人「酒を讃むる歌十三首」万葉集・八世紀",
                 zh:"大伴旅人〈讚酒歌十三首〉，《萬葉集》，八世紀" } }
      ]
    },

{ t:"section", id:"arts",
      title:{ en:"Sake in the arts", ja:"文芸のなかの酒", zh:"文藝中的酒" }, jp:"文学・絵画・話芸",
      body:[
        { t:"p", text:{
          en:"Sake has a longer literary record in Japan than almost any other everyday thing, partly because the people who could write were the people who could afford it, and partly because drunkenness is one of the few subjects that Japanese poetry has always been allowed to treat lightly.",
          ja:"日本において、酒ほど長い文学の記録をもつ日常の物はほとんどない。書くことのできた人々が、それを買うことのできた人々でもあったからであり、また酔いというものが、日本の詩歌に軽やかに扱うことを常に許されてきた数少ない主題の一つだからでもある。",
          zh:"在日本，幾乎沒有任何日常之物擁有比酒更悠久的文學紀錄——一部分是因為能書寫的人正是買得起酒的人，另一部分則是因為醉，是日本詩歌向來被允許以輕盈筆調處理的少數主題之一。" } },
        { t:"timeline", items:[
          { year:"c. 730", era:{en:"Nara",ja:"奈良",zh:"奈良"},
            title:{en:"Thirteen poems in praise of sake",ja:"讃酒歌十三首",zh:"讚酒歌十三首"}, jp:"万葉集",
            text:{en:"Ōtomo no Tabito, then governor of Dazaifu, contributes a sequence to the <em>Man'yōshū</em> arguing — half seriously — that a cup of cloudy sake is worth more than any treasure, and that he would rather be a wine jar in the next life than a sage in this one. It is the earliest sustained piece of sake writing in Japanese and it is already funny.",
              ja:"大宰帥であった大伴旅人が『万葉集』に一連の歌を寄せ、半ば本気で説く——濁れる酒の一杯は、いかなる宝にも勝る。来世で賢者となるより、酒壺になりたい、と。日本語による最初のまとまった酒の文であり、すでに可笑しい。",
              zh:"時任大宰帥的大伴旅人為《萬葉集》貢獻了一組歌，半認真地主張：一杯濁酒勝過任何珍寶，而他來世寧可當個酒壺，也不願在此生做聖賢。這是日語中最早成篇的酒之書寫，而且已經很好笑。"} },
          { year:"c. 1000", era:{en:"Heian",ja:"平安",zh:"平安"},
            title:{en:"Court drinking",ja:"宮廷の酒",zh:"宮廷之酒"}, jp:"源氏物語・枕草子",
            text:{en:"Sake in <em>The Tale of Genji</em> and <em>The Pillow Book</em> is a marker of ceremony and of social position, poured at seasonal banquets and passed in formal cup exchanges. The vocabulary of ranked drinking that survives in modern Japanese etiquette begins here.",
              ja:"『源氏物語』や『枕草子』における酒は、儀と身分の標である。季ごとの宴に注がれ、改まった杯のやりとりのなかで回される。現代の作法に残る、序列を伴う酒の語彙は、ここに始まる。",
              zh:"《源氏物語》與《枕草子》中的酒，是儀典與身分的標記，斟於四季宴席，並在正式的杯盞往來中傳遞。現代日本禮儀中殘存的、帶有位階的飲酒語彙，自此開始。"} },
          { year:"1680s", era:{en:"Edo",ja:"江戸",zh:"江戶"},
            title:{en:"Bashō and the drinking poets",ja:"芭蕉と酒の詩人たち",zh:"芭蕉與飲酒的詩人"}, jp:"俳諧",
            text:{en:"Haikai poets treat sake as a seasonal marker in its own right: new sake in autumn, warmed sake in winter, blossom-viewing sake in spring. The season words survive in modern haiku almanacs, which list more than a dozen sake-related terms with fixed seasons attached.",
              ja:"俳諧の詩人たちは酒そのものを季の標として扱う——秋の新酒、冬の燗酒、春の花見酒。これらの季語は現代の歳時記に残り、季を定められた酒に関する語が十を超えて並んでいる。",
              zh:"俳諧詩人把酒本身當作季節的標記：秋之新酒、冬之溫酒、春之花見酒。這些季語留存在現代的歲時記中，其中列有十餘個附著固定季節的與酒相關詞彙。"} },
          { year:"1830s", era:{en:"Edo",ja:"江戸",zh:"江戶"},
            title:{en:"Ukiyo-e and the sake trade",ja:"浮世絵と酒の商い",zh:"浮世繪與酒的商業"}, jp:"浮世絵",
            text:{en:"Hiroshige and his contemporaries paint the Nada cask ships, the sake shops of Edo, and the drinkers under the cherry trees. Some prints were effectively advertising, paid for by brewers whose brand names appear on the barrels — among the earliest branded advertising in Japan.",
              ja:"広重とその同時代の絵師たちは、灘の樽廻船、江戸の酒屋、桜の下の飲み手を描いた。なかには実質的な広告もあり、樽に銘柄名の現れる絵は、蔵の費用で刷られた。日本における最も早い銘柄広告の一つである。",
              zh:"廣重與其同代畫師描繪灘的樽迴船、江戶的酒鋪，以及櫻樹下的飲者。其中有些版畫實為廣告，由酒藏出資，酒樽上印著品牌名——是日本最早的品牌廣告之一。"} },
          { year:"1988–91", era:{en:"Heisei",ja:"平成",zh:"平成"},
            title:{en:"Natsuko no Sake",ja:"夏子の酒",zh:"夏子的酒"}, jp:"漫画",
            text:{en:"Oze Akira's manga about a young woman returning to her family's failing Niigata brewery to revive a lost rice variety. Loosely based on the real revival of Kame no O, it reached an enormous general audience, was made into a television drama, and is credited by many brewers with drawing a generation into the industry.",
              ja:"尾瀬あきらの漫画。傾いた実家の新潟の蔵へ戻り、失われた米の品種を蘇らせようとする若い女性を描く。亀の尾の実際の復活を下敷きにしており、広い読者を得て連続ドラマにもなった。この作品が一世代を業界へ引き入れたと語る造り手は多い。",
              zh:"尾瀨朗的漫畫，描寫一名年輕女性返回家中經營不善的新潟酒藏，試圖復育一個失傳的米種。故事鬆散地取材自龜之尾的真實復育，擁有廣大的一般讀者，並改編為電視劇；許多釀造者認為它把一整個世代引進了這個產業。"} }
        ] },
        { t:"grid", cols:3, cells:[
          { h:{en:"Rakugo",ja:"落語",zh:"落語"}, jp:"話芸",
            d:{en:"Comic storytelling has a whole sub-genre of drunk stories — <em>Nezumi-ana</em>, <em>Ido no Chawan</em>, <em>Shibahama</em> — in which sake is the engine of the plot and the excuse for the moral. The performer mimes drinking with a folded fan, and the gesture is instantly legible to any Japanese audience.",ja:"落語には酔いを扱う一群の噺がある——「鼠穴」「井戸の茶碗」「芝浜」。酒が筋を動かし、教訓の言い訳にもなる。演者は扇子で飲む所作を演じ、その仕草は日本の客にはただちに通じる。",zh:"落語中有一整類醉酒故事——〈鼠穴〉〈井戶之茶碗〉〈芝濱〉——酒既是情節的引擎，也是說教的藉口。表演者以摺扇模擬飲酒的動作，這個手勢對任何日本觀眾都是一望即懂。"} },
          { h:{en:"Film",ja:"映画",zh:"電影"}, jp:"映像",
            d:{en:"Ozu's late films are structurally built around bars and the conversations that happen in them; <em>An Autumn Afternoon</em> is largely a sequence of drinking scenes. More recently <em>The Birth of Saké</em> (2015) documented a full season at Yoshida Shuzōten and did more for foreign interest in sake than any marketing campaign.",ja:"小津の後期作品は、酒場とそこで交わされる会話を構造の軸としている。『秋刀魚の味』はほとんど飲む場面の連なりである。近年では『The Birth of Saké』（二〇一五年）が吉田酒造店の一造りを記録し、いかなる宣伝よりも海外の関心を集めた。",zh:"小津後期作品在結構上圍繞著酒場與其中發生的對話；《秋刀魚之味》幾乎就是一連串飲酒場景。晚近的《The Birth of Saké》（2015）記錄了吉田酒造店的完整一季，為海外對清酒的興趣所做的，勝過任何行銷活動。"} },
          { h:{en:"Ceramics",ja:"陶芸",zh:"陶藝"}, jp:"器",
            d:{en:"The sake cup is one of the few objects a serious Japanese potter will make in quantity, because it is small, sells at an accessible price, and is judged in the hand. A great deal of what is interesting in modern Japanese ceramics can be seen in guinomi and sakazuki before anywhere else.",ja:"酒器は、真剣な陶芸家が数を作る数少ない品の一つである。小さく、手の届く値で売れ、そして手の中で判断されるからである。現代日本の陶芸の面白いところの多くは、どこよりも先に、ぐい呑や盃に現れる。",zh:"酒杯是認真的日本陶藝家會大量製作的少數器物之一：它小巧、售價親民，且是在手中被評判的。現代日本陶藝中許多有趣之處，往往最先出現在豬口與酒盞上。"} }
        ] }
      ]
    },

    { t:"section", id:"society",
      title:{ en:"Drinking as a social instrument", ja:"社会の道具としての酒", zh:"作為社會工具的酒" }, jp:"飲み会と人間関係",
      body:[
        { t:"figure",
          caption:{
            en:"Why the evening has rounds. The structure is not accidental and it is not only Japanese, but Japan has names for each stage of it. The first party is official: the whole section is invited, the seating is by rank, and the most senior person may formally declare that rank is suspended. Each subsequent round is smaller and more self-selected, and the received wisdom is that the useful conversation happens in the later ones. The shape is also the criticism, and the two cannot be separated.",
            ja:"なぜ夜には次があるのか。この構えは偶然ではなく、また日本だけのものでもないが、日本はその各段に名を持っている。一次会は公のものである。部署の全体が招かれ、席は序列により、最も上位の者が序列の停止を改めて宣することもある。以降の会はいずれもより小さく、より自ら選んだ者だけとなり、有用な話は後の会でなされるというのが通り相場である。この形はそのまま批判でもあり、両者は切り離せない。",
            zh:"為什麼一個晚上會有好幾攤。這個結構不是偶然的，也不只發生在日本，但日本為它的每一段都取了名字。一次會是正式的：整個部門受邀，依職級入座，而在場最高位者可能會正式宣布今晚不論尊卑。之後每一攤都更小、更由人自行選擇留下，而流傳的說法是：真正有用的談話發生在後面幾攤。這個形狀本身同時也是對它的批評，兩者無法分開。" },
          svg: function (lang, L) {
            var W = 760, H = 332;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, bl = [
              { x:60, w:190, h:132, jp:"一次会", r:"ichijikai",
                n:{ en:"the first party", ja:"一次会", zh:"一次會" },
                d:[{ en:"the whole section is invited;", ja:"部署の全体が招かれ、", zh:"整個部門都受邀；" },
                   { en:"seating by rank, one opening toast", ja:"席は序列、開きの乾杯は一度", zh:"依職級入座，開場乾杯一次" }] },
              { x:276, w:176, h:88, jp:"二次会", r:"nijikai",
                n:{ en:"the second party", ja:"二次会", zh:"二次會" },
                d:[{ en:"a self-selected subset", ja:"自ら残る者だけが", zh:"自行選擇留下的一部分人" },
                   { en:"moves on to a bar", ja:"次の店へ移る", zh:"轉往下一家店" }] },
              { x:478, w:136, h:52, jp:"三次会", r:"sanjikai",
                n:{ en:"the third party", ja:"三次会", zh:"三次會" },
                d:[{ en:"the fewest, and the latest;", ja:"最も少なく、最も遅い。", zh:"人最少，也最晚；" },
                   { en:"nobody is there by accident", ja:"偶然そこに居る者はない", zh:"沒有人是偶然在場的" }] }
            ];
            s += '<line x1="60" y1="50" x2="250" y2="50" stroke="#C6BCA6"/>';
            s += '<line x1="60" y1="50" x2="60" y2="56" stroke="#C6BCA6"/>';
            s += '<line x1="250" y1="50" x2="250" y2="56" stroke="#C6BCA6"/>';
            s += '<text x="60" y="42" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "無礼講——その夜は序列を解くという宣言。たいていは最も上位の者による。"
                  : lang === "zh" ? "無禮講——宣布今晚不論尊卑，通常由在場最高位者說出口。"
                  : "bureikō — rank suspended for the evening, declared, usually by the most senior person present") + '</text>';
            for (i = 0; i < bl.length; i++) {
              var b = bl[i], cy = 150, top = cy - b.h / 2;
              s += '<rect x="' + b.x + '" y="' + top + '" width="' + b.w + '" height="' + b.h + '" fill="' + (i === 0 ? "#DED8CB" : i === 1 ? "#CFC6B2" : "#B09E7C") + '"/>';
              s += '<text x="' + (b.x + b.w / 2) + '" y="76" text-anchor="middle" font-size="12" fill="#201E1B">' + b.jp + '</text>';
              s += '<text x="' + (b.x + b.w / 2) + '" y="' + (cy + 4) + '" text-anchor="middle" font-size="10" fill="' + (i === 2 ? "#F8F6F1" : "#4A453D") + '">' + b.r + '</text>';
              s += '<text x="' + (b.x + b.w / 2) + '" y="238" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(b.d[0]) + '</text>';
              s += '<text x="' + (b.x + b.w / 2) + '" y="251" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(b.d[1]) + '</text>';
              if (i < 2) {
                var ax = b.x + b.w;
                s += '<line x1="' + (ax + 4) + '" y1="150" x2="' + (ax + 18) + '" y2="150" stroke="#B4AC9C"/>';
                s += '<path d="M' + (ax + 22) + ' 150 L' + (ax + 15) + ' 146 L' + (ax + 15) + ' 154 Z" fill="#B4AC9C"/>';
              }
            }
            s += '<line x1="276" y1="272" x2="614" y2="272" stroke="#C6BCA6"/>';
            s += '<path d="M618 272 L610 268 L610 276 Z" fill="#C6BCA6"/>';
            s += '<text x="276" y="288" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "本当の話はここでなされる、と言われる" : lang === "zh" ? "據說真正有用的話是在這裡說的" : "where the useful conversation is said to happen") + '</text>';
            var fn = (lang === "ja" ? ["批判はこの形そのものに埋め込まれている。後の会ほど集まりは自ら選んだ者だけとなり、",
                                       "遅くまで残れぬ者、あるいは飲まぬ者は、肝心とされる部屋には居ない。"]
                      : lang === "zh" ? ["批評就內建在這個形狀裡：越後面的一攤，成員越是自行篩選出來的；",
                                         "而無法留到很晚的人、或不喝酒的人，就不在那個據說最要緊的房間裡。"]
                      : ["The criticism is built into the shape. The later the round, the more self-selected the group,",
                         "and anyone who cannot stay late — or does not drink — is not in the room that is said to matter."]);
            for (i = 0; i < fn.length; i++) s += '<text x="60" y="' + (H - 26 + i * 13) + '" font-size="9.5" fill="#8B857C">' + fn[i] + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"In Japan, drinking together has done a specific institutional job: it creates a temporary space where the ordinary rules of hierarchy are relaxed and things can be said that could not be said at a desk. That function explains both the warmth of the tradition and the abuses that grew out of it.",
          ja:"日本において、ともに飲むことは特定の制度的な役割を果たしてきた。序列の常の規則が緩められ、机の前では言えないことが言える、一時的な場を作るという役割である。この機能は、この伝統の温かさと、そこから育った弊害の双方を説明する。",
          zh:"在日本，共飲承擔著一項特定的制度性職能：它創造出一個暫時的空間，讓平常的位階規則得以放鬆，讓那些在辦公桌前說不出口的話可以說出來。這項功能同時解釋了這項傳統的溫情，以及由此滋生的弊病。" } },
        { t:"defs", items:[
          { term:{en:"Nominication",ja:"飲みニケーション",zh:"飲み二ケーション"}, jp:"飲みニケーション",
            def:{en:"A portmanteau of <em>nomu</em>, to drink, and “communication”. The idea that real workplace understanding happens after hours over drinks rather than in meetings. Still real, considerably weaker than it was, and increasingly contested by younger workers who would rather go home.",
              ja:"「飲む」と「コミュニケーション」を重ねた造語。職場の本当の理解は会議ではなく、勤務後の酒の席で生まれるという考えである。いまも現実に存在するが、かつてよりかなり弱まり、帰宅を選ぶ若い世代からは異議も多い。",
              zh:"由「飲む」（喝）與「communication」（溝通）合成的詞。意指職場上真正的理解發生在下班後的酒席，而非會議之中。它仍然真實存在，但已比從前弱得多，並愈來愈受到寧可回家的年輕世代質疑。"} },
          { term:{en:"Bureikō",ja:"無礼講",zh:"無禮講"}, jp:"無礼講", romaji:"bureikō",
            def:{en:"An explicit declaration, usually by the most senior person present, that rank is suspended for the evening. It is a genuine social technology and also a trap: the suspension is temporary and asymmetric, and everyone remembers what was said.",
              ja:"その場の最も上位の者が、今宵は序列を措く、と明言すること。実効性のある社会的な仕組みであると同時に、罠でもある。停止は一時的かつ非対称であり、何が言われたかは皆が覚えている。",
              zh:"通常由在場最資深者明確宣布：今晚位階暫時取消。這是一項確有實效的社會技術，同時也是陷阱：這種暫停是短暫且不對稱的，而說過的話人人都記得。"} },
          { term:{en:"Nijikai",ja:"二次会",zh:"二次會"}, jp:"二次会",
            def:{en:"The second party, after the first one ends. Then the third. The structure is not accidental: each round has a smaller and more self-selected group, and the real conversation is understood to happen late.",
              ja:"一次会のあとの二次会。そして三次会。この構造は偶然ではない。回を重ねるごとに人数は減り、残る顔ぶれは自ら選ばれてゆき、本当の話は遅くに交わされるものと解されている。",
              zh:"第一攤結束後的第二攤，然後是第三攤。這個結構並非偶然：每一攤的人數更少、留下的人更是自我篩選而來，而真正的談話被認為發生在深夜。"} },
          { term:{en:"Jōgo and geko",ja:"上戸と下戸",zh:"上戶與下戶"}, jp:"上戸・下戸",
            def:{en:"Someone who can drink and someone who cannot. The words are ancient and entirely neutral in tone: declaring yourself <em>geko</em> is a normal, socially complete answer, and no further explanation is expected. It is one of the more useful phrases a visitor can learn.",
              ja:"飲める人と飲めない人。いずれも古い語で、口調としてはまったく中立である。「下戸です」と名乗ることは普通の、社会的に完結した答えであり、それ以上の説明は求められない。訪れる人が覚えておくと役に立つ言葉の一つである。",
              zh:"能喝的人與不能喝的人。這兩個詞都很古老，語氣上完全中性：自稱「下戶」是一個正常且在社交上自足的回答，無人會要求進一步解釋。這是訪客值得學會的實用詞彙之一。"} },
          { term:{en:"Alcohol harassment",ja:"アルハラ",zh:"酒精騷擾"}, jp:"アルコールハラスメント",
            def:{en:"Pressuring someone to drink, and specifically the <em>ikki</em> chant demanding a glass be downed in one. Campaigns since the 1990s, after a series of student deaths, have made this both socially unacceptable and in some circumstances legally actionable. It is entirely normal now to decline, and a host who insists is the one behaving badly.",
              ja:"飲むことを強いる行為、とりわけ一気飲みを囃す「一気」の掛け声である。学生の死が相次いだのち、一九九〇年代からの啓発により、これは社会的に許されないものとなり、状況によっては法的責任も問われる。いま断ることはまったく普通であり、無作法なのは強いる側である。",
              zh:"逼人喝酒的行為，尤其是要求一口乾盡的「一氣」起鬨。在一連串學生死亡事件後，1990 年代以來的倡議使其在社會上不被接受，某些情況下更可能負法律責任。如今拒絕完全正常，失禮的是那個堅持勸酒的人。"} }
        ] },
        { t:"note", label:{en:"How to decline, politely and finally",ja:"丁寧に、そして決定的に断る",zh:"如何禮貌而堅定地婉拒"}, text:{
          en:"Accept the first pour, raise the cup for the toast, touch it to your lips, and then leave it full. A full cup is the conventional signal that you are done, and it requires no explanation, no apology and no medical history. If pressed, <em>geko na mono de</em> — “I'm afraid I don't drink” — closes the subject. Ordering something else immediately and enthusiastically closes it faster.",
          ja:"最初の一杯は受け、乾杯で杯を掲げ、口をつけ、そのまま満たしたまま置いておく。満たされた杯は「もう結構」の慣用の合図であり、説明も謝罪も、病歴の開示も要らない。なお勧められたら「下戸なもので」で話は終わる。すぐに別の飲み物を、しかも嬉しそうに頼めば、もっと早く終わる。",
          zh:"接受第一次斟酒，舉杯乾杯，讓杯緣碰唇，然後就讓它滿著。滿杯是「我喝夠了」的慣用訊號，不需要解釋、不需要道歉，也不需要交代病史。若對方仍勸，一句「下戸なもので」（不好意思我不喝酒）便能結束話題。若能立刻而熱切地點一杯別的飲料，結束得更快。" } }
      ]
    },

{ t:"section", id:"onstage",
      title:{ en:"Sake on the page and the screen", ja:"紙の上と画面の上の酒", zh:"紙上與螢幕上的酒" }, jp:"文芸と映像",
      body:[
        { t:"p", text:{
          en:"Sake appears in Japanese culture less as a subject than as a setting — the thing being drunk while something else happens. But there is a real body of work in which it is the subject, and it spans thirteen centuries and every register from imperial poetry to comic storytelling to a manga about microbes.",
          ja:"日本の文化において、酒は主題としてよりも場として現れる——何か別のことが起こるかたわらで飲まれているものとして。しかし酒そのものを主題とする作品の系譜もまた確かに存在し、それは十三世紀にわたり、宮廷の歌から落語、そして微生物の漫画までのあらゆる調子に及ぶ。",
          zh:"在日本文化中，清酒與其說是主題，不如說是場景——別的事情正在發生時，被喝著的那個東西。但確實存在一批以它為主題的作品，橫跨十三個世紀，語域從宮廷詩歌到滑稽說書，一路到一部關於微生物的漫畫。" } },

        { t:"defs", items:[
          { term:{ en:"Rakugo", ja:"落語", zh:"落語" }, jp:"酒の噺", romaji:"sake no hanashi",
            def:{ en:"Japan's comic storytelling tradition has a whole shelf of drinking stories, and they are unusually good social history because they turn on drinking behaviour rather than on sake itself. <em>Tameshizake</em> is a wager about how much a labourer can drink; <em>Oyako-zake</em> is a father and son each breaking a promise not to; <em>Neko no sainan</em> is about sake and a fish disappearing at once. The comedy is always about self-deception, which tells you what the culture actually found funny about drinking.",
              ja:"落語には酒の噺が一棚ある。それらは酒そのものではなく酒に関わる振る舞いを軸とするため、社会史としてとりわけ優れている。「試し酒」は人夫がどれだけ飲めるかの賭であり、「親子酒」は父と子が互いに禁を破る話、「猫の災難」は酒と魚が同時に消える話である。可笑しみは常に自己欺瞞にある。この文化が酒の何を可笑しいと見ていたかが、そこに現れている。",
              zh:"日本的滑稽說書傳統裡有整整一架關於酒的段子；由於它們的軸心是飲酒的行為而非酒本身，作為社會史格外出色。〈試し酒〉是一場關於工人能喝多少的賭注；〈親子酒〉是父子各自打破不喝的承諾；〈猫の災難〉則是酒與魚同時消失的故事。笑點永遠落在自欺之上——這說明了這個文化究竟覺得飲酒的哪一面好笑。" } },
          { term:{ en:"Season words", ja:"季語", zh:"季語" }, jp:"俳諧の季語", romaji:"kigo",
            def:{ en:"Sake enters classical poetry through the seasonal-word system that governs haiku. <em>Shinshu</em>, new sake, is an autumn word; <em>nigorizake</em> autumn too; <em>toso</em>, the spiced New Year sake, is a New Year word; <em>kanzake</em> and <em>yukimizake</em> belong to winter. A poet naming a sake is therefore also naming a month, which is a compression that translation almost always loses.",
              ja:"酒は、俳諧を律する季語の体系を通じて古典詩に入る。新酒は秋の季語、濁り酒もまた秋。屠蘇は新年、燗酒と雪見酒は冬に属する。ゆえに酒を詠むことは月を詠むことでもある。訳ではほとんど常に失われる圧縮である。",
              zh:"清酒透過統轄俳句的季語體系進入古典詩。「新酒」是秋之季語，「濁り酒」也是秋；「屠蘇」屬新年，「燗酒」與「雪見酒」屬冬。因此詩人寫下一種酒，同時也就寫下了一個月份——這是翻譯幾乎總會失去的壓縮。" } },
          { term:{ en:"Edo fiction and essays", ja:"江戸の文", zh:"江戶的文章" }, jp:"随筆と浮世草子", romaji:"zuihitsu",
            def:{ en:"Kenkō's fourteenth-century <em>Tsurezuregusa</em> contains one of the most quoted passages in Japanese on drinking — a long, funny, unsparing description of what a drunk person looks like, followed immediately by an admission that a cup on a moonlit night is nonetheless a fine thing. Ihara Saikaku's seventeenth-century fiction is full of the sake trade as commerce: merchants, credit, and the money that Itami and Nada were making.",
              ja:"十四世紀の兼好『徒然草』には、日本語で酒について最も引かれる一節がある——酔った人間がどう見えるかについての長く、可笑しく、容赦のない描写であり、その直後に、月夜の一杯はやはり良いものだと認める。十七世紀の井原西鶴の浮世草子は、商いとしての酒に満ちている——商人、掛け、そして伊丹と灘が生んでいた金である。",
              zh:"十四世紀兼好法師的《徒然草》裡有日文中被引用最多的飲酒段落之一——對醉漢模樣長篇、好笑而不留情面的描寫，緊接著卻承認：月夜下的一杯畢竟是好東西。十七世紀井原西鶴的浮世草子則充滿了作為商業的酒：商人、賒帳，以及伊丹與灘正在賺進的錢。" } },
          { term:{ en:"Manga and television", ja:"漫画とテレビ", zh:"漫畫與電視" }, jp:"現代", romaji:"gendai",
            def:{ en:"<em>Natsuko no Sake</em> (1988–91) is the canonical sake manga: a woman returns to her family brewery to grow a lost rice variety, and it did more to popularise the jizake idea than any amount of marketing. <em>Moyashimon</em>, from 2004, is set at an agricultural university and follows a student who can see microbes with the naked eye — genuinely accurate on kōji and fermentation, and probably the most effective microbiology teaching in Japanese popular culture. Television returns to breweries regularly, most recently in a 2023 morning drama that put the women-in-the-kura question in front of a national audience.",
              ja:"『夏子の酒』（1988–91）は日本酒漫画の正典である。女性が家の蔵に戻り、失われた米を育てる物語であり、地酒という観念の普及に、いかなる広告よりも寄与した。二〇〇四年からの『もやしもん』は農業大学を舞台に、菌が肉眼で見える学生を追う。麹と発酵について真に正確であり、日本の大衆文化における最も有効な微生物学の教育でもあろう。テレビは繰り返し蔵に戻ってくる。近くは二〇二三年の朝の連続ドラマが、蔵における女性の問いを全国の視聴者の前に置いた。",
              zh:"《夏子的酒》（1988–91）是清酒漫畫的正典：一位女性回到家族酒藏，去種一種失傳的米；它對「地酒」概念的普及，貢獻遠勝任何行銷。二〇〇四年起連載的《農大菌物語》以農業大學為舞台，主角是能以肉眼看見微生物的學生；它在麴與發酵上真正準確，大概也是日本大眾文化中最有效的微生物學教育。電視則不斷回到酒藏，最近的一次是二〇二三年的晨間劇，把「女性與酒藏」的問題擺到全國觀眾面前。" } },
          { term:{ en:"Documentary", ja:"記録映画", zh:"紀錄片" }, jp:"ドキュメンタリー", romaji:"documentary",
            def:{ en:"A small documentary tradition has grown up around brewing since the 2010s, mostly following either a single season in one brewery or the spread of sake abroad. They are worth seeking out for one reason that no written account replaces: brewing is physical, communal and largely silent, and film is the only medium that conveys what the work actually looks like.",
              ja:"二〇一〇年代以降、酒造りをめぐる小さな記録映画の系譜が育った。多くは一つの蔵の一季を追うか、海外への広がりを追う。書かれたものが代わりになりえない一つの理由から、探して観る値打ちがある——酒造りは身体的で、集団的で、そして大半が無言である。仕事が実際にどう見えるかを伝えうる媒体は、映像だけである。",
              zh:"自二〇一〇年代起，圍繞釀酒生長出一支小小的紀錄片傳統，多半追蹤一家酒藏的一整季，或清酒向海外的擴散。它們值得去找來看，理由只有一個，而且是任何文字都無法替代的：釀酒是身體性的、集體的，而且大半是沉默的；唯有影像這個媒介，能傳達這份工作實際看起來是什麼樣子。" } }
        ] },

        { t:"quote", text:{
          en:"Nothing in the culture treats sake as a luxury. It is treated as a social technology — for making an agreement binding, a wedding real, a stranger a colleague, or a difficult thing sayable — and every artistic tradition around it is really about what people do once it has done that.",
          ja:"この文化のうちに、酒を贅沢として扱うものはない。扱われているのは社会の技術としてである——約を結ばせ、婚を成立させ、他人を同僚にし、言いにくいことを言えるようにするための。酒をめぐるあらゆる芸術の伝統は、実のところ、それが済んだあとに人が何をするかについてのものである。",
          zh:"這個文化裡沒有任何東西把清酒當作奢侈品。它被當作一種社會技術——用來讓約定具有拘束力、讓婚禮成立、讓陌生人變成同事、讓難以啟齒的事得以出口。而圍繞它的一切藝術傳統，說到底談的都是：在它完成這些之後，人們做了什麼。" } }
      ] },

    { t:"related", items:[
      { href:"shinto.html", why:{ en:"The rites themselves, and where the cup sits inside them.", ja:"祭そのものと、そのなかで杯が座る場所。", zh:"祭儀本身，以及杯子在其中的位置。" } },
      { href:"kanpai.html", why:{ en:"What the table actually does — pouring, toasting, declining.", ja:"卓が実際になすこと——注ぎ、乾杯し、断ること。", zh:"餐桌上實際在做的事——斟酒、敬酒、婉拒。" } },
      { href:"words.html", why:{ en:"The vocabulary all of this is conducted in.", ja:"これらすべてが行われる語彙。", zh:"這一切所使用的那套語彙。" } },
      { href:"calendar.html", why:{ en:"The brewing year the ritual year is fitted around.", ja:"祭の一年が沿わされている、造りの一年。", zh:"祭儀之年所依附的那個釀造之年。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- shinto */
SAKE.pages["shinto"] = {
  kicker: { en: "Foundations · 08", ja: "基礎 · 08", zh: "基礎 · 08" },
  title:  { en: "Sake and the Gods", ja: "神と酒", zh: "神與酒" },
  jp: "神事と酒",
  lede: {
    en: "Sake is not incidentally religious in Japan; it is structurally religious. It is the substance in which the oldest surviving Japanese rite is performed, the thing a shrine gives back to you after it has been offered, the reason a cedar ball hangs over a brewery door, and the liquid in which a marriage is concluded. This page sets out what sake does in Shinto practice — the theology of sharing a drink with a god, the shrines that brewers still visit, the two ceremonial brews the imperial household has made for more than a thousand years, and how much of it a person in Japan actually still does.",
    ja: "日本において酒は偶々宗教的であるのではなく、構えとして宗教的である。それは、今なお生き延びる最も古い日本の儀がそのなかで行われる物質であり、供えられたのち社があなたに返すものであり、蔵の戸口に杉の玉が吊るされる理由であり、婚が結ばれる液である。この頁は、神道の営みにおいて酒が何をなすかを述べる。神と杯を分かつことの神学、造り手が今なお詣でる社、皇室が千年を超えて造り続ける二つの儀の酒、そしてそのうちどれほどを、日本に生きる人が今も実際に行っているか。",
    zh: "在日本，清酒不是偶然地帶有宗教性，而是在結構上就是宗教性的。它是至今仍存續的最古老日本儀式所憑藉的物質，是神社在受供之後回贈給你的東西，是一顆杉玉懸在酒藏門口的理由，也是一樁婚姻於其中締結的液體。本頁鋪陳清酒在神道實踐中所擔負的角色：與神共飲的神學、釀酒人至今仍前往參拜的神社、皇室製作了一千多年的兩種祭儀之酒，以及這一切之中，今日日本人實際上還在做多少。"
  },
  body: [

    { t:"section", id:"naorai",
      title:{ en:"Eating with the god", ja:"神とともに食すること", zh:"與神同食" }, jp:"神人共食",
      body:[
        { t:"p", text:{
          en:"The idea that organises everything below is shinjin kyōshoku — the god and the people eating the same meal. In a Shinto rite, food and drink are set before the kami as shinsen, the kami is invited to partake, and then, crucially, the offerings are taken down and consumed by the people present. Nothing is destroyed. The offering is not a payment; it is an invitation to a shared table.",
          ja:"以下のすべてを組み立てる思想は神人共食である。神と人とが同じ食を摂ることである。神事において、食と飲みは神饌として神の前に置かれ、神は召すことを請われ、そして——ここが要である——供えは下ろされ、居合わせる人々によって食される。何も滅ぼされない。供えは支払いではない。分かたれた卓への招きである。",
          zh:"組織起以下一切的觀念是「神人共食」——神與人吃同一餐。在神道儀式中，食物與飲品作為「神饌」置於神前，邀請神明享用，然後——關鍵在此——供品被撤下，由在場的人們食用。沒有任何東西被銷毀。供奉不是一種支付，而是一場共桌的邀請。" } },

        { t:"p", text:{
          en:"The drinking part of that meal is the naorai, and the sake drunk in it is omiki. Once you have seen this pattern you see it everywhere: the tiny cup pressed on you at a shrine after a prayer, the barrel broken open at an opening ceremony, the three cups exchanged at a wedding, the drink poured on the ground where a house will stand. In each case the sake has been offered first and is being shared afterwards. That is why it cannot be replaced by anything else.",
          ja:"その食のうち飲む部分が直会であり、そこで飲まれる酒が御神酒である。ひとたびこの型を見れば、それはどこにでも見える。祈りののち社であなたに差し出される小さな杯。開きの儀で割られる樽。婚で交わされる三つの杯。家の建つ地に注がれる酒。いずれの場合も、酒はまず供えられ、そののちに分かたれている。ゆえにそれは他の何ものにも置き換えられない。",
          zh:"這一餐中「喝」的部分是「直會」，而其中喝的酒是「御神酒」。一旦你看見這個模式，就會處處看見它：祈願後在神社被塞到你手中的那只小杯、開幕典禮上被敲開的酒樽、婚禮上交換的三只杯、澆在將要蓋房子的那塊地上的酒。每一次，酒都是先被供奉、然後才被分享。這正是為什麼它無法被任何其他東西取代。" } },

        { t:"panel", tint:"moss",
          title:{ en:"Why sake and not something else", ja:"なぜ酒であって他ではないか", zh:"為什麼是酒而不是別的" },
          body:[
            { t:"p", text:{
              en:"Rice is the offering that matters in Japan, and sake is rice in its most concentrated, most transformed and least perishable form. It also has a property no other offering has: it can be divided endlessly without ceasing to be itself. A single cup poured out among forty people is still omiki in every one of the forty cups. For a rite whose whole logic is sharing, that is not a small technical advantage.",
              ja:"日本において重んじられる供えは米であり、酒は米の、最も凝り、最も変じ、最も傷まぬ形である。またそれは、他のいかなる供えも持たぬ性質を持つ。すなわち、自らであることをやめずに限りなく分かちうる。四十人のあいだに注がれた一杯は、その四十の杯のいずれにおいてもなお御神酒である。分かつことをその理屈の全てとする儀にとって、それは小さな技の利ではない。",
              zh:"在日本，真正要緊的供品是米，而清酒是米最濃縮、最經轉化、也最不易腐壞的形態。它還具備其他供品都沒有的一項性質：它可以被無盡地分割，而不停止是它自己。一杯酒分給四十個人，在那四十只杯子裡它每一杯都仍是御神酒。對一個整套邏輯就是「分享」的儀式來說，這絕不是一個微小的技術優勢。" } }
          ] },

        { t:"defs", items:[
          { term:{ en:"Shinsen — the offering", ja:"神饌", zh:"神饌" }, jp:"神饌", romaji:"shinsen",
            def:{ en:"The food and drink set before the kami: rice, sake, water, salt, and then whatever the season and the place provide — fish, fowl, vegetables, fruit, seaweed. Sake is one of the four that are always present, and is placed in a pair of white porcelain flasks called heishi.",
              ja:"神の前に置かれる食と飲みである。米、酒、水、塩。そして季と土地の与えるもの——魚、鳥、野菜、果、海の草。酒はつねに在る四つの一つであり、瓶子と呼ばれる白い一対の器に納められる。",
              zh:"陳設在神前的食物與飲品：米、酒、水、鹽，然後是時令與當地所提供的一切——魚、禽、蔬菜、水果、海藻。清酒是永遠在場的那四樣之一，盛在一對名為「瓶子」的白瓷容器中。" } },
          { term:{ en:"Omiki — the sake itself", ja:"御神酒", zh:"御神酒" }, jp:"御神酒", romaji:"omiki",
            def:{ en:"Sake that has been offered. The word describes a status, not a style: any sake becomes omiki by being placed before the kami, and stops being ordinary sake for as long as the rite lasts. Shrines are given it in quantity by local breweries, which is why a shrine's storehouse and a brewery's relationship with it are often several centuries old.",
              ja:"供えられた酒である。この語は酒質ではなく位を述べる。いかなる酒も神の前に置かれることによって御神酒となり、儀の続くあいだ、並の酒であることをやめる。社は土地の蔵からこれを量をもって贈られる。社の蔵と蔵元との縁が、しばしば数世紀を経ている理由である。",
              zh:"被供奉過的酒。這個詞描述的是一種身分，而不是一種類型：任何清酒只要被置於神前就成為御神酒，並在儀式持續期間停止作為普通的酒。神社會從當地酒藏獲得大量供酒，這正是為什麼神社的庫房與酒藏之間的關係，往往已有數個世紀之久。" } },
          { term:{ en:"Naorai — the coming down", ja:"直会", zh:"直會" }, jp:"直会", romaji:"naorai",
            def:{ en:"The meal after the rite, at which the offerings are eaten and the omiki drunk. Etymologically it is a return to the ordinary — the participants come back down from the ritual state — and in practice it is the point of the whole exercise. A Japanese banquet that begins with a formal toast is running, whether anyone thinks about it or not, on the shape of a naorai.",
              ja:"儀ののちの食であり、供えが食され、御神酒が飲まれる。語源としては常への還り——連なる者が儀の状から下りてくること——であり、実のところ、それこそが営みの要である。改まった乾杯に始まる日本の宴は、誰がそれを思うかによらず、直会の形の上を走っている。",
              zh:"儀式之後的一餐，供品在此被吃掉、御神酒在此被喝掉。就詞源而言，它是回到日常——參與者從儀式狀態中「下來」——而實際上，它才是整件事的重點。一場以正式乾杯開場的日本宴席，不論有沒有人意識到，都跑在「直會」的形狀之上。" } }
        ] }
      ] },

    { t:"section", id:"shrines",
      title:{ en:"The three shrines of brewing", ja:"酒造りの三社", zh:"釀酒的三座神社" }, jp:"酒神神社",
      body:[
        { t:"p", text:{
          en:"Japanese brewers keep a short list of shrines, and the list has been stable for a very long time. Two of them are in Kyoto and one in Nara, and between them they cover the founding myth, the guild and the calendar.",
          ja:"日本の造り手は短い社の名簿を持ち、その名簿はきわめて長いあいだ変わっていない。うち二つは京にあり、一つは奈良にある。三つのあいだで、始まりの神話と、同業の絆と、暦とが覆われている。",
          zh:"日本的釀酒人有一份很短的神社名單，而這份名單已經很長時間沒有變過。其中兩座在京都、一座在奈良；三者之間涵蓋了創始神話、同業紐帶與曆法。" } },

        { t:"table",
          caption:{ en:"Where brewers go, and when", ja:"造り手が詣でる先と、その時", zh:"釀酒人前往之處，以及時間" },
          cols:[ { en:"Shrine", ja:"社", zh:"神社" },
                 { en:"Where", ja:"所在", zh:"所在" },
                 { en:"Deity", ja:"祭神", zh:"祭神" },
                 { en:"The brewing rite", ja:"造りの祭", zh:"釀造之祭" } ],
          jpCols:[0],
          rows:[
            [ "松尾大社", { en:"Nishikyō, Kyoto", ja:"京都・西京", zh:"京都・西京" },
              { en:"Ōyamakui no Kami", ja:"大山咋神", zh:"大山咋神" },
              { en:"Jōu-sai in November, on the first day of the Hare, to ask for a safe brewing season; Chūyū-sai in April, on the middle day of the Rooster, to give thanks that it went well. Founded in 701 and associated with the Hata clan, the continental immigrant lineage credited with bringing brewing technique to the Kyoto basin.",
                ja:"十一月の上の卯の日の上卯祭は、季の造りの安全を請う。四月の中の酉の日の中酉祭は、それが良く運んだことに謝す。大宝元年（七〇一）の創建と伝え、京の盆地に醸しの技をもたらしたとされる渡来の氏族、秦氏と結ばれている。",
                zh:"十一月上卯之日的「上卯祭」，祈求釀造季的平安；四月中酉之日的「中酉祭」，感謝一切順遂。傳創建於七〇一年，並與秦氏——被認為把釀造技術帶進京都盆地的渡來氏族——相連。" } ],
            [ "大神神社", { en:"Sakurai, Nara", ja:"奈良・桜井", zh:"奈良・櫻井" },
              { en:"Ōmononushi no Ōkami, with Takahashi Ikuhi", ja:"大物主大神、および高橋活日命", zh:"大物主大神，以及高橋活日命" },
              { en:"The grand rite for the safety of the new brewing season is held on 14 November. Takahashi Ikuhi, enshrined here, is remembered as the brewer who made sake for the emperor and is treated as the ancestor of the tōji. This is also where the cedar ball comes from: a new one is made and hung at the shrine on that day, and breweries across Japan hang theirs in imitation.",
                ja:"新酒の醸造安全を祈る大祭は十一月十四日に行われる。ここに祀られる高橋活日命は、帝のために酒を醸した者として記憶され、杜氏の祖として遇される。杉玉の出どころもここである。その日に新しい玉が作られ社に掲げられ、日本じゅうの蔵がそれに倣って自らのものを吊るす。",
                zh:"祈求新釀造季平安的大祭於十一月十四日舉行。合祀於此的高橋活日命，被記為曾為天皇釀酒之人，並被奉為杜氏之祖。杉玉的來處也在這裡：那一天在神社製作並掛上新的杉玉，日本各地的酒藏則仿效著掛上自己的。" } ],
            [ "梅宮大社", { en:"Ukyō, Kyoto", ja:"京都・右京", zh:"京都・右京" },
              { en:"Sakatoke no Kami and Sakatoke-ko no Kami", ja:"酒解神・酒解子神", zh:"酒解神・酒解子神" },
              { en:"Keeps the same November and April pattern as Matsuo Taisha. The deity's name means, plainly, the god who unbinds sake — and the shrine is also visited for safe childbirth, which makes it the only one of the three with a substantial non-brewing congregation.",
                ja:"松尾大社と同じ十一月と四月の型を保つ。祭神の名は端的に、酒を解く神を意味する。またこの社は安産のためにも詣でられ、三社のうち造り以外の参詣者を厚く持つ唯一の社である。",
                zh:"維持著與松尾大社相同的十一月與四月節奏。祭神之名直白地就是「解酒之神」。這座神社也因祈求安產而受人參拜，是三者之中唯一擁有大量非釀造相關信眾的一座。" } ]
          ] },

        { t:"note", label:{ en:"The day of the Hare", ja:"卯の日", zh:"卯之日" },
          text:{
            en:"Both Kyoto shrines set their brewing festivals by the sexagenary calendar rather than by a fixed date, which is why the November festival lands on a different day each year. The Hare marks the start of the season and the Rooster its close; the pairing is old enough that nobody involved needs it explained, and it is a small reminder that the brewing year is a ritual year first and a commercial one second.",
            ja:"京の二社はいずれも、造りの祭を定まった日付ではなく干支の暦によって定める。ゆえに十一月の祭は年ごとに異なる日に落ちる。卯は季の始めを、酉はその終わりを標す。この対は、関わる誰にも説かれる必要のないほど古く、そして造りの年がまず儀の年であり、商いの年はその次であることの、小さな覚えである。",
            zh:"京都的兩座神社都以干支曆而非固定日期來定釀造之祭，因此十一月的祭典每年落在不同的日子。卯標示著季節之始，酉標示其終；這個配對古老到不需要向任何相關的人解釋，並且是一個小小的提醒：釀造之年首先是一個儀式之年，其次才是一個商業之年。" } }
      ] },

{ t:"section", id:"imperial",
      title:{ en:"Shiroki and kuroki: the oldest recipe still made", ja:"白酒と黒酒——今なお造られる最も古い方", zh:"白酒與黑酒——至今仍在製作的最古老配方" }, jp:"白酒・黒酒",
      body:[
        { t:"p", text:{
          en:"Twice in the Japanese ritual calendar — every year at the Niiname-sai, and once in a reign at the Daijō-sai that follows an accession — the imperial household offers and drinks two sakes that exist nowhere else. They are called shiroki and kuroki, the white and the black, and they are the oldest continuously produced sake in Japan by a very wide margin.",
          ja:"日本の儀の暦において二度——毎年の新嘗祭において、そして御代に一度、践祚に続く大嘗祭において——皇室は、他のどこにも存在せぬ二つの酒を供え、そして飲む。それらは白酒と黒酒、しろきとくろきと呼ばれ、群を抜いて、日本で最も長く途切れず造られてきた酒である。",
          zh:"在日本的儀式曆中有兩個場合——每年的新嘗祭，以及一代之中僅有一次、繼位之後的大嘗祭——皇室會供奉並飲用兩種別處不存在的酒。它們名為白酒與黑酒（しろき、くろき），並且遙遙領先地，是日本持續製作歷史最悠久的清酒。" } },

        { t:"compare", cols:2, items:[
          { title:{ en:"Shiroki — the white", ja:"白酒——しろき", zh:"白酒——しろき" }, jp:"白酒",
            body:[
              { t:"p", text:{
                en:"Sake brewed from the newly harvested rice of that year and left unfiltered — white, cloudy, thick. It is doburoku in everything but name, which makes it a direct survival of what sake was before pressing and filtration became normal. Nothing is added and nothing is taken away.",
                ja:"その年に穫れた新しい米から醸され、濾されぬまま残された酒である。白く、濁り、厚い。名を除けばどぶろくそのものであり、搾りと濾しが当たり前となるより前の酒が、そのまま生き延びたものである。何も加えられず、何も取り去られない。",
                zh:"以當年新收成的米釀造、且不加過濾——白濁、濃稠。除了名字之外它就是濁酒，因而是「在壓搾與過濾成為常態之前，清酒是什麼樣子」的一份直接存留。什麼都不加，什麼都不取走。" } }
            ] },
          { title:{ en:"Kuroki — the black", ja:"黒酒——くろき", zh:"黑酒——くろき" }, jp:"黒酒",
            body:[
              { t:"p", text:{
                en:"The same white sake with the ash of a plant called kusaki stirred into it, turning it a dark charcoal grey. The archaeology of the pairing is telling: the black brew was once made from black rice, and when black rice stopped being cultivated — from the Heian period onward — the colour was reproduced with ash rather than abandoned. The rite required two colours, so two colours were found.",
                ja:"同じ白い酒に、久佐木と呼ばれる植物の灰を混ぜ入れ、暗い炭の灰色に変えたものである。この対の来歴は多くを語る。黒い酒はかつて黒い米から造られており、黒米が育てられなくなったとき——平安の世よりのち——その色は棄てられるのではなく、灰によって再び作られた。儀が二つの色を要したゆえ、二つの色が見出されたのである。",
                zh:"就是同一種白酒，拌入一種名為「久佐木」的植物灰，使它轉為深炭灰色。這個配對的來歷極具啟示：黑色的酒曾經是用黑米釀的，而當黑米不再被栽種——自平安時代以降——那個顏色不是被放棄，而是用灰重新做了出來。儀式需要兩種顏色，於是兩種顏色就被找了出來。" } }
            ] }
        ] },

        { t:"p", text:{
          en:"It is worth pausing on what that means. A ritual pair whose original logic was two kinds of grain outlived the grain, and the practice adapted its materials in order to keep its form. That is a very good short description of how a great deal of Japanese tradition has actually survived: not by refusing to change, but by changing everything except the shape.",
          ja:"それが何を意味するか、立ち止まる値打ちがある。もとの理屈が二種の穀であった儀の対は、その穀を生き延び、そして営みは、形を保つために材を改めた。それは、日本の伝えの多くが実際にいかに生き延びてきたかの、きわめて良い短い記述である。変わることを拒むことによってではなく、形を除くすべてを変えることによって、である。",
          zh:"值得停下來想想這意味著什麼。一組原本邏輯建立在兩種穀物上的儀式配對，活得比那穀物還久，而這項實踐為了保住它的形式，改換了自己的材料。這是對「日本傳統中有很大一部分究竟是如何存續下來的」一句極好的簡短描述：不是靠拒絕改變，而是靠改變除了形狀以外的一切。" } },

        { t:"note", label:{ en:"Not the doll festival drink", ja:"雛祭りの白酒とは別である", zh:"與女兒節的白酒不同" },
          text:{
            en:"The white sake of the Doll Festival in March is a different thing entirely, and is written with the same characters read differently — shirozake, a sweet white drink made by steeping steamed rice and kōji in shōchū or mirin. Ritual shiroki is a cloudy fermented sake; festival shirozake is a sweet infusion. The overlap of the written form catches almost everybody once.",
            ja:"三月の雛祭りの白酒はまったく別のものであり、同じ字を異なる読みで書く。しろざけ、蒸した米と麹を焼酎や味醂に漬けて造る甘い白い飲みものである。儀の白酒は濁った醸造の酒であり、祭りの白酒は甘い漬け込みである。書かれた形の重なりは、ほとんど誰をも一度は捉える。",
            zh:"三月女兒節的白酒完全是另一回事，寫的是同樣的漢字但讀音不同：しろざけ，一種把蒸米與麴浸泡在燒酎或味醂中做成的甜味白色飲品。祭儀的白酒是混濁的釀造酒；節慶的白酒是甜味的浸泡物。書寫形式的重疊，幾乎每個人都會被騙過一次。" } }
      ] },

    { t:"section", id:"year",
      title:{ en:"The ritual year", ja:"儀の一年", zh:"儀式的一年" }, jp:"祭の暦",
      body:[
        { t:"p", text:{
          en:"The brewing season and the ritual calendar are the same calendar. The rites that matter to a brewery cluster at exactly the two hinges of the year: November, when the new rice is in and the season is about to begin, and April, when the last tank has been pressed.",
          ja:"造りの季と儀の暦は同じ暦である。蔵にとって重んじられる祭は、年の二つの蝶番にきっかり集まる。新しい米が入り、季がまさに始まろうとする十一月と、最後の槽が搾られた四月である。",
          zh:"釀造季與儀式曆是同一份曆。對一家酒藏而言重要的祭典，恰好聚集在一年的兩個樞紐上：新米入庫、釀造季即將開始的十一月，以及最後一槽已經搾完的四月。" } },

        { t:"figure",
          caption:{
            en:"The year as a brewery experiences it. The shaded arc is the cold brewing season; the marks outside it are the rites. Two of the November dates move each year because they are set by the sexagenary calendar rather than the solar one.",
            ja:"蔵が経験するところの一年。網掛けの弧は寒造りの季であり、その外の印は祭である。十一月の日付のうち二つは、太陽の暦ではなく干支の暦によって定まるゆえ、年ごとに動く。",
            zh:"一家酒藏所經歷的一年。網底的弧是寒造的釀造季；弧外的記號是祭典。十一月的日期中有兩個每年都會移動，因為它們依干支曆而非太陽曆決定。" },
          svg: function (lang, L) {
            var W = 780, H = 470, CX = 390, CY = 232, R = 120;
            function ang(m) { return (m / 12) * Math.PI * 2 - Math.PI / 2; }
            function pt(m, r) { var a = ang(m); return [CX + Math.cos(a) * r, CY + Math.sin(a) * r]; }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var p0 = pt(9, R), p1 = pt(16, R), q0 = pt(9, R - 28), q1 = pt(16, R - 28);
            s += '<path d="M' + p0[0] + ' ' + p0[1] +
                 ' A' + R + ' ' + R + ' 0 1 1 ' + p1[0] + ' ' + p1[1] +
                 ' L' + q1[0] + ' ' + q1[1] +
                 ' A' + (R - 28) + ' ' + (R - 28) + ' 0 1 0 ' + q0[0] + ' ' + q0[1] + ' Z" fill="#EDE5D2"/>';
            s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="none" stroke="#CDC6B9"/>';
            s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + (R - 28) + '" fill="none" stroke="#E1DCD2"/>';
            var MN = {
              en: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
              ja: ["一","二","三","四","五","六","七","八","九","十","十一","十二"],
              zh: ["一","二","三","四","五","六","七","八","九","十","十一","十二"]
            };
            var mn = MN[lang] || MN.en;
            for (var m = 0; m < 12; m++) {
              var t0 = pt(m, R - 28), t1 = pt(m, R);
              s += '<line x1="' + t0[0] + '" y1="' + t0[1] + '" x2="' + t1[0] + '" y2="' + t1[1] + '" stroke="#E1DCD2"/>';
              var lp = pt(m + 0.5, R - 14);
              s += '<text x="' + lp[0] + '" y="' + (lp[1] + 3.5) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + mn[m] + '</text>';
            }
            s += '<text x="' + CX + '" y="' + (CY - 4) + '" text-anchor="middle" font-size="12" fill="#55504A">' +
                 (lang === "ja" ? "寒造りの季" : lang === "zh" ? "寒造之季" : "the cold season") + '</text>';
            s += '<text x="' + CX + '" y="' + (CY + 14) + '" text-anchor="middle" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "十月〜四月" : lang === "zh" ? "十月～四月" : "October to April") + '</text>';
            var GL = 252, GR = 528, EL = 244, ER = 536;
            var rites = [
              { m: 10.15, side:"l", ly: 66,  n:{ en:"J\u014du-sai, Matsuo Taisha", ja:"上卯祭・松尾大社", zh:"上卯祭・松尾大社" }, d:{ en:"early Nov \u00b7 for a safe season", ja:"十一月上旬・醸造安全を祈る", zh:"十一月上旬・祈求釀造平安" } },
              { m: 10.45, side:"l", ly: 118, n:{ en:"Grand rite, \u014cmiwa Jinja", ja:"醸造安全祈願大祭・大神神社", zh:"釀造安全祈願大祭・大神神社" }, d:{ en:"14 Nov \u00b7 the new cedar ball", ja:"十一月十四日・新しい杉玉", zh:"十一月十四日・新的杉玉" } },
              { m: 10.75, side:"l", ly: 170, n:{ en:"Niiname-sai", ja:"新嘗祭", zh:"新嘗祭" }, d:{ en:"23 Nov \u00b7 shiroki and kuroki", ja:"十一月二十三日・白酒と黒酒", zh:"十一月二十三日・白酒與黑酒" } },
              { m: 6.5,   side:"l", ly: 404, n:{ en:"Nomikiri", ja:"呑切り", zh:"呑切" }, d:{ en:"summer \u00b7 not a rite, but kept like one", ja:"夏・祭ではないが祭のごとく", zh:"夏・不是祭典，卻被當作祭典來守" } },
              { m: 0.02,  side:"r", ly: 66,  n:{ en:"Hatsum\u014dde", ja:"初詣", zh:"初詣" }, d:{ en:"1 Jan \u00b7 omiki at the shrine gate", ja:"一月一日・社頭の御神酒", zh:"一月一日・神社前的御神酒" } },
              { m: 3.4,   side:"r", ly: 330, n:{ en:"Ch\u016by\u016b-sai, Matsuo Taisha", ja:"中酉祭・松尾大社", zh:"中酉祭・松尾大社" }, d:{ en:"April \u00b7 thanks for the season", ja:"四月・季への謝", zh:"四月・對這一季的感謝" } }
            ];
            for (var i = 0; i < rites.length; i++) {
              var r = rites[i], on = pt(r.m, R), right = r.side === "r";
              var gx = right ? GR : GL, ex = right ? ER : EL;
              s += '<path d="M' + on[0] + ' ' + on[1] + ' L' + gx + ' ' + r.ly + ' L' + ex + ' ' + r.ly + '" fill="none" stroke="#D6CFC2"/>';
              s += '<rect x="' + (on[0] - 3) + '" y="' + (on[1] - 3) + '" width="6" height="6" fill="#7C6B52"/>';
              s += '<text x="' + ex + '" y="' + (r.ly - 3) + '" text-anchor="' + (right ? "start" : "end") + '" font-size="11.5" fill="#201E1B">' + L(r.n) + '</text>';
              s += '<text x="' + ex + '" y="' + (r.ly + 12) + '" text-anchor="' + (right ? "start" : "end") + '" font-size="9.5" fill="#8B857C">' + L(r.d) + '</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"p", text:{
          en:"A brewery's own observance is quieter than any of this and more constant. Most kura keep a small shrine inside the building, usually to the deity of one of the three above, and the tōji makes an offering at the start of the season and at the first pressing. Whether the people involved describe themselves as religious is beside the point; the gesture belongs to the work in the same way that washing the floor does.",
          ja:"蔵自身の営みはこれらのいずれよりも静かであり、より絶えることがない。ほとんどの蔵は建物のなかに小さな神棚を保ち、たいていは上の三社のいずれかの神を祀る。そして杜氏は季の始めと最初の上槽に供えをする。関わる人々が自らを信心深いと述べるか否かは、要ではない。その所作は、床を洗うことと同じ仕方で、仕事に属している。",
          zh:"一家酒藏自己的實踐比以上任何一項都安靜，也更為恆常。多數酒藏會在建築內設一座小神龕，通常祀奉上述三社之一的神明，而杜氏會在釀造季開始與第一次上槽時獻供。相關的人是否自稱有宗教信仰並非重點；那個動作屬於這份工作，就像洗地板屬於它一樣。" } }
      ] },
    { t:"section", id:"myth",
      title:{ en:"The first brewing in the chronicles", ja:"記紀における最初の醸し", zh:"史書裡的第一次釀酒" }, jp:"神話の酒",
      body:[
        { t:"p", text:{
          en:"Two brewings are told in the eighth-century chronicles, and they are opposites. One is a weapon and the other is a celebration, and between them they set the two registers in which Japanese writing about sake has operated ever since — the drink that undoes, and the drink that binds.",
          ja:"八世紀の記紀には二つの醸しが語られ、その二つは相反する。一つは武器であり、一つは祝いである。そしてその二つのあいだに、日本の酒をめぐる書き物がそれ以来働き続けてきた二つの調子——解く酒と、結ぶ酒——が置かれている。",
          zh:"八世紀的史書裡記了兩次釀酒，而這兩次恰好相反：一次是武器，一次是慶賀。這兩者之間，就此劃定了日本關於酒的書寫自那以後一直在其中運作的兩種語域——鬆解的酒，與連結的酒。" } },

        { t:"compare", cols:2, items:[
          { title:{ en:"The sake that was a weapon", ja:"武器であった酒", zh:"作為武器的酒" }, jp:"八塩折之酒",
            text:{ en:"Susanoo has the people of Izumo brew <em>yashiori no sake</em> — sake put back through the mash eight times over — and set it in eight vats at eight gates. The serpent Yamata-no-Orochi drinks a head into each, sleeps, and is cut apart. Every element of the story is a brewing instruction read as a battle plan: the repeated mash is a real technique for raising strength, and the whole scene is the earliest description in Japanese of anyone deliberately making a strong sake for a purpose. Its purpose is to disable.",
              ja:"素戔嗚は出雲の人々に八塩折之酒——醪に八度返した酒——を醸させ、八つの門の八つの槽に据えさせる。八岐大蛇は頭を一つずつ差し入れて飲み、眠り、断たれる。この物語のあらゆる要素は、造りの手順が戦の策として読まれたものである。繰り返す仕込みは度数を上げる実際の技であり、この場の全体は、誰かが目的をもって強い酒を意図して造ったことの、日本における最も早い記述である。その目的は、無力にすることである。",
              zh:"素戔嗚要出雲的人們釀「八鹽折之酒」——把酒反覆回醪八次的酒——並盛在八道門前的八個槽裡。八岐大蛇把八顆頭各伸進一槽喝下，昏睡，然後被斬。這個故事的每一個元素，都是把釀造工序當成作戰計畫來讀：反覆回醪是提高酒度的真實技法，而整個場景，是日本最早一筆「有人為了某個目的刻意釀出一款烈酒」的記述。而那個目的，是讓對方失去行動能力。" } },
          { title:{ en:"The sake that was a celebration", ja:"祝いであった酒", zh:"作為慶賀的酒" }, jp:"天甜酒",
            text:{ en:"In the <em>Nihon Shoki</em>, Konohanasakuya-hime gives birth to three sons, and her father Ōyamatsumi marks it by choosing a sacred paddy — the <em>sanada</em> — and brewing from its rice a sake the text calls <em>ame-no-tamuzake</em>, the sweet sake of heaven. Nothing is defeated and nobody is tricked. Rice is grown for the purpose, sake is made from it, and it is drunk because three children have been born. That is the template for every brewery rite still performed today, and it is why Ōyamatsumi is worshipped as the sake-dissolving god and his daughter as the sake-dissolving child.",
              ja:"『日本書紀』において、木花咲耶姫は三人の子を産み、その父である大山祇は、聖なる田——狭名田——を択び、その米から酒を醸してこれを記す。書はそれを天甜酒と呼ぶ。打ち負かされるものはなく、欺かれる者もない。そのために稲が育てられ、そこから酒が造られ、そして三人の子が生まれたがゆえに飲まれる。それは今日なお行われるあらゆる蔵の祭りの原型であり、大山祇が酒解神として、その娘が酒解子神として祀られる理由でもある。",
              zh:"在《日本書紀》裡，木花咲耶姬產下三子，她的父親大山祇為此擇了一塊神聖的稻田——狹名田——並以那塊田的米釀酒，書中稱之為「天甜酒」。沒有誰被打敗，也沒有誰被騙。為此而種稻，以稻釀酒，並且因為三個孩子誕生而喝掉它。這正是今日所有酒藏祭儀的原型，也是大山祇被奉為「酒解神」、他的女兒被奉為「酒解子神」的緣由。" } }
        ] },

        { t:"note", title:{ en:"A note on the reading", ja:"読みについて", zh:"關於讀法" }, text:{
          en:"The characters written for the celebratory sake and the way they are read differ between manuscripts and between modern editions — <em>ame-no-tamuzake</em> and <em>ame-no-tamukezake</em> are both current, and the second character is given as 甜 or as 舐 depending on the text. Anyone quoting the passage should quote an edition rather than a secondary source, which is the general rule on this site for anything before the ninth century. See <a href=\"sources.html\">Sources &amp; Further Reading</a>.",
          ja:"祝いの酒に当てられる字と、その読みは、写本により、また今日の版により異なる。あまのたむざけとあまのたむけざけはいずれも行われており、二字目は本によって甜とも舐とも記される。この一節を引く者は、二次の資料ではなく版を引かれたい。九世紀より前のすべてについて、本サイトが取る一般の則である。<a href=\"sources.html\">出典と読書案内</a>を見られたい。",
          zh:"用來書寫這款慶賀之酒的漢字及其讀法，在不同抄本與現代校本之間並不一致——あまのたむざけ與あまのたむけざけ都在使用，第二個字依版本作「甜」或作「舐」。引用這段文字的人，應該引版本而不是引二手資料；這是本站對九世紀以前所有材料的通則。請見<a href=\"sources.html\">資料來源與延伸閱讀</a>。" } }
      ] },

    { t:"section", id:"sequence",
      title:{ en:"Where the sake sits in a rite", ja:"祭のなかで酒はどこに座るか", zh:"在一場祭儀裡，酒坐在哪裡" }, jp:"祭式の順",
      body:[
        { t:"p", text:{
          en:"A Shinto rite — a ground-breaking, a brewery's safety prayer, a wedding, a company's new year — has a standard shape, and knowing it makes visible something that is otherwise easy to miss: the sake is physically moved three times, and the last move is the one the whole rite exists for.",
          ja:"神道の祭——地鎮祭、蔵の醸造安全祈願、婚礼、会社の初詣——には定まった形があり、それを知れば、さもなくば見落としやすいものが目に見えるようになる。酒は三度、実際に動かされる。そして最後の一度こそ、祭の全体がそのために在るものである。",
          zh:"一場神道祭儀——動土、酒藏的釀造安全祈願、婚禮、公司的新年參拜——有一個標準的形狀；知道它，就能看見一件原本很容易錯過的事：酒實際上被移動了三次，而最後那一次移動，正是整場祭儀存在的理由。" } },

        { t:"figure",
          caption:{
            en:"The common order, and the sake's place in it. The offering is made early and formally: the flasks go up onto the stand with the rice, salt, water and produce, and they sit before the kami through the prayer and the branch. Then they come down — and that descent is not tidying up. What was offered has been shared in by the kami and is now, in the rite's own logic, charged with that sharing, which is why the last act is to drink it. A rite that stopped at the seventh step would be complete in form and pointless in purpose.",
            ja:"よくある順と、そのなかの酒の位置。供えは早くに、そして改まって行われる。瓶子は米、塩、水、産物とともに案へ上げられ、祝詞と玉串のあいだ、神の前に座る。のちそれは下ろされる——そしてその降下は片づけではない。供えられたものは神に相伴されたのであり、祭そのものの理においては、いまやその相伴を帯びている。最後の行いがそれを飲むことであるのは、そのためである。七つめで止まる祭は、形において完き、目的において無意味であろう。",
            zh:"常見的次序，以及酒在其中的位置。供奉發生得早，而且正式：瓶子連同米、鹽、水與物產一起送上案台，在祝詞與玉串的整段期間坐在神前。然後它們被撤下——而那次下降並不是收拾。被供奉過的東西已由神共享過，在祭儀自身的邏輯裡，它如今帶著那份共享；最後一個動作是把它喝掉，原因就在這裡。一場停在第七步的祭儀，形式上是完整的，目的上則毫無意義。" },
          svg: function (lang, L) {
            var W = 760, H = 286, BX = 28, BW = 84, GAP = 88;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, st = [
              { k:"修祓", r:"shubatsu", g:{ en:"purification", ja:"祓う", zh:"潔淨" }, sake:false },
              { k:"降神", r:"kōshin", g:{ en:"the kami called", ja:"神を招く", zh:"迎神" }, sake:false },
              { k:"献饌", r:"kensen", g:{ en:"offerings set", ja:"供え上げる", zh:"獻供" }, sake:true },
              { k:"祝詞奏上", r:"norito sōjō", g:{ en:"the prayer read", ja:"祝詞を奏す", zh:"誦讀祝詞" }, sake:false },
              { k:"玉串奉奠", r:"tamagushi hōten", g:{ en:"the branch", ja:"玉串を捧ぐ", zh:"獻上玉串" }, sake:false },
              { k:"撤饌", r:"tessen", g:{ en:"taken down", ja:"供えを下ろす", zh:"撤供" }, sake:true },
              { k:"昇神", r:"shōshin", g:{ en:"the kami returns", ja:"神を送る", zh:"送神" }, sake:false },
              { k:"直会", r:"naorai", g:{ en:"drunk together", ja:"共に飲む", zh:"共飲共食" }, sake:true }
            ];
            s += '<text x="' + BX + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "祭式の八段・濃い枠は酒が動く段" : lang === "zh" ? "祭儀的八段・深框者為酒被移動的那幾段" : "EIGHT NAMED STEPS — THE DARK ONES ARE WHERE THE SAKE MOVES") + '</text>';
            for (i = 0; i < st.length; i++) {
              var x = BX + i * GAP;
              s += '<rect x="' + x + '" y="72" width="' + BW + '" height="42" fill="' + (st[i].sake ? "#DED8CB" : "#F3F1EB") + '" stroke="' + (st[i].sake ? "#B09E7C" : "#E4E0D6") + '"/>';
              s += '<text x="' + (x + BW / 2) + '" y="94" text-anchor="middle" font-size="' + (st[i].k.length > 3 ? 11 : 13) + '" fill="#201E1B">' + st[i].k + '</text>';
              s += '<text x="' + (x + BW / 2) + '" y="107" text-anchor="middle" font-size="7.5" fill="#A39C91">' + st[i].r + '</text>';
              s += '<text x="' + (x + BW / 2) + '" y="130" text-anchor="middle" font-size="8.5" fill="#8B857C">' + L(st[i].g) + '</text>';
              if (i < st.length - 1) s += '<path d="M' + (x + BW + 2) + ' 93 L' + (x + BW - 2) + ' 89 L' + (x + BW - 2) + ' 97 Z" fill="#CDC6B9"/>';
            }
            s += '<text x="' + BX + '" y="164" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "酒はどこにあるか" : lang === "zh" ? "酒在哪裡" : "WHERE THE SAKE IS") + '</text>';
            var b1x = BX + 2 * GAP, b1w = (BX + 5 * GAP + BW) - b1x, b2x = BX + 7 * GAP;
            s += '<rect x="' + b1x + '" y="180" width="' + b1w + '" height="18" fill="#CFC6B2"/>';
            s += '<text x="' + (b1x + b1w / 2) + '" y="214" text-anchor="middle" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "三方の上、神の前に" : lang === "zh" ? "在三方之上，神的面前" : "on the stand, before the kami") + '</text>';
            s += '<rect x="' + b2x + '" y="180" width="' + BW + '" height="18" fill="#7C6B52"/>';
            s += '<text x="' + (b2x + BW / 2) + '" y="214" text-anchor="middle" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "人の杯のなかに" : lang === "zh" ? "在人的杯子裡" : "in the cup, shared") + '</text>';
            s += '<text x="' + BX + '" y="246" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "六段目と八段目のあいだ、酒は案を離れて人の手にある。その移りこそ祭が行うことである。"
                  : lang === "zh" ? "在第六段與第八段之間，酒離開案台，來到人的手上；那一次轉移，正是這場祭儀所做的事。"
                  : "Between the sixth step and the eighth, the sake leaves the altar and enters human hands. That transfer is what the rite does.") + '</text>';
            s += '<text x="' + BX + '" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "順と名は社により、また祭により異なる。これは最も広く行われる形である。"
                  : lang === "zh" ? "次序與名稱因神社、因祭別而異；這是流傳最廣的一種形式。"
                  : "Order and names vary by shrine and by rite. This is the commonest shape.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Offering", ja:"献饌", zh:"獻饌" }, jp:"献饌", romaji:"kensen",
            def:{ en:"Food and drink are carried up and set before the kami in a fixed order of precedence: sake first or near first, then rice, then salt and water, then produce of the sea, the mountain and the field. The sake is in white porcelain flasks, uncorked, standing on a plain wooden stand. Nothing is poured and nothing is tasted; the offering is the placement.",
              ja:"食と飲みが運び上げられ、定まった序に従って神の前に据えられる。酒が初め、あるいは初めに近く、次に米、次に塩と水、そして海の幸、山の幸、野の幸である。酒は白い瓶子に入れられ、栓を取られ、素木の案に立つ。注がれるものはなく、味わわれるものもない。供えとは、置くことである。",
              zh:"食物與飲品被捧上，依固定的先後次序陳設於神前：酒最先或近乎最先，其次是米，再來是鹽與水，然後是海產、山產與田產。酒裝在白瓷瓶子裡，拔去封口，立在素木的案台上。沒有人斟，也沒有人嚐；所謂供奉，就是「放上去」這件事。" } },
          { term:{ en:"Withdrawal", ja:"撤饌", zh:"撤饌" }, jp:"撤饌", romaji:"tessen",
            def:{ en:"The same items are carried back down in reverse order. In a small rite this takes seconds and looks like clearing the table; in the logic of the rite it is the moment the offerings change status, from things given to things returned. Everything that follows — the shared cup, the packet of rice handed to each guest at a ground-breaking, the box of confectionery at a wedding — is the distribution of what came back down.",
              ja:"同じものが、逆の序で運び下ろされる。小さな祭では数秒で終わり、卓を片づけているように見える。だが祭の理においては、それこそ供えが位を変える一瞬である。与えられたものから、返されたものへと。以降のすべて——分かち合う杯、地鎮祭で客の一人一人に手渡される米の包み、婚礼の菓子の箱——は、下ろされて戻ったものの分配である。",
              zh:"同樣的東西以相反的次序被捧下來。在一場小型祭儀裡，這只花幾秒鐘，看起來像是在收桌子；但在祭儀的邏輯裡，那正是供品身分改變的一瞬間——從「獻上去的東西」變成「被還回來的東西」。之後的一切——共飲的那一杯、動土典禮上遞給每位來賓的一小包米、婚禮上的一盒和菓子——都是對那些被送下來的東西的分配。" } },
          { term:{ en:"The cup that is not a toast", ja:"乾杯ではない杯", zh:"那不是乾杯的一杯" }, jp:"直会", romaji:"naorai",
            def:{ en:"The naorai is often mistaken by visitors for a reception that happens to follow a ceremony. It is the final act of the ceremony itself, and the sake in the cup is the sake that stood on the stand. This is why the pour is small, why it is drunk rather than sipped and set down, and why nobody says <em>kanpai</em> — a toast is people addressing each other, and this is people finishing something they began with a god.",
              ja:"直会はしばしば、式のあとにたまたま続く宴と、客に取り違えられる。それは式そのものの最後の行いであり、杯にある酒は案に立っていた酒である。注がれる量が少ないのも、口をつけて置くのではなく飲み干されるのも、そして誰も乾杯と言わぬのも、そのためである。乾杯とは人が互いに向かうことであり、これは、人が神とともに始めたものを終えることである。",
              zh:"直會常被訪客誤認成「儀式之後剛好接著的一場餐會」。它其實是儀式本身的最後一個動作，而杯中的酒，就是剛才立在案上的那些酒。斟得少、要喝掉而不是沾一下就放下、以及沒有人喊「乾杯」——原因都在這裡。乾杯是人對著人；而這是人把自己與神一起開始的事情做完。" } }
        ] }
      ] },

    { t:"section", id:"vessels",
      title:{ en:"The vessels of the offering", ja:"供えの器", zh:"供奉用的器" }, jp:"神饌具",
      body:[
        { t:"p", text:{
          en:"The equipment of an offering is deliberately plain, and the plainness is the specification rather than an economy: unglazed or white, undecorated, and in several cases discarded or replaced rather than reused. What matters is that the vessel is new to this use, not that it is fine.",
          ja:"供えの道具は意図して質素であり、その質素さは倹約ではなく規矩である。釉のないもの、あるいは白いもの、飾りのないもの、そしていくつかは用いたのち捨てられるか、取り替えられる。大切なのは、その器がこの用いに対して新しいことであって、上等であることではない。",
          zh:"供奉用的器具刻意樸素，而這份樸素是規格，不是節省：素燒或白色、不加裝飾，其中有幾樣用過就丟棄或更換。要緊的是這件器物「對這次使用而言是新的」，而不是它有多精緻。" } },

        { t:"defs", items:[
          { term:{ en:"Heishi", ja:"瓶子", zh:"瓶子" }, jp:"瓶子", romaji:"heishi",
            def:{ en:"The flask the sake is offered in: white porcelain or unglazed earthenware, narrow-necked, with a lid that is removed for the duration of the offering and replaced afterwards. They stand in pairs, because offerings to the kami are made in pairs wherever the object allows it. The same shape appears on a domestic kamidana in miniature, and the household set is sold with everything else a shelf needs.",
              ja:"酒を供えるための瓶である。白磁か素焼きで、首が細く、供えのあいだは外され、のちに戻される蓋を持つ。対で立つ。神への供えは、物が許す限りどこでも対でなされるからである。同じ形が家の神棚に小さく現れ、家庭の一組は、棚に要する他のすべてとともに売られている。",
              zh:"盛裝供奉之酒的瓶：白瓷或素燒陶，頸細，帶一個在供奉期間取下、之後再蓋回的蓋子。它們成對而立，因為只要器物允許，對神的供奉都是成對進行的。同樣的形制以縮小版出現在家中的神棚上，而家用的一整組，會連同神棚需要的其他一切一起販售。" } },
          { term:{ en:"Sanbō", ja:"三方", zh:"三方" }, jp:"三方", romaji:"sanbō",
            def:{ en:"The low wooden stand everything is set on: a tray on a box-shaped foot pierced on three sides, which is what the name means. It is plain hinoki, unfinished, and the unpierced side faces the kami. It is one of the few objects in Japanese ritual whose correct orientation is determined by a hole rather than by a decoration, and getting it backwards is the commonest visible error at an amateur ground-breaking.",
              ja:"すべてが据えられる低い木の台である。三方に穴の開いた箱の足の上に載る盆であり、名はそれを言う。素の檜で、塗りはなく、穴の開かぬ側が神へ向く。日本の祭具のうち、正しい向きが飾りではなく穴によって定まる数少ないものの一つであり、素人の地鎮祭において最もよく目につく誤りは、これを逆に置くことである。",
              zh:"所有供品擺放其上的矮木台：一個托盤架在箱形的足上，足的三面各開一個孔，名字說的就是這件事。它以素檜木製成、不上漆，沒有開孔的那一面朝向神。在日本的祭具中，它是少數幾件「正確方向由一個孔、而不是由裝飾決定」的器物；而在外行人主持的動土典禮上，最常見的可見錯誤，就是把它擺反了。" } },
          { term:{ en:"Miki-no-kuchi", ja:"神酒口", zh:"神酒口" }, jp:"神酒口", romaji:"miki-no-kuchi",
            def:{ en:"An ornament set into the mouth of each flask, most visibly at New Year: a fan or flame of split bamboo, thin wood or cut paper, standing up out of the neck. It is decorative to look at and is not understood as decoration — it is treated as a <em>yorishiro</em>, a thing a kami may alight on, which is why it stands above the liquid rather than beside it. The designs are strongly regional, and in some districts a particular shape belongs to a particular town.",
              ja:"それぞれの瓶子の口に挿される飾りであり、正月に最もよく目につく。割った竹、薄い木、あるいは切った紙による扇や炎の形が、首から立ち上がる。見た目には飾りであり、飾りとしては解されない。依り代——神が降り立ちうるもの——として扱われるのであり、液の傍らではなく、その上に立つのはそのためである。意匠は地方色が強く、地区によっては、ある形がある町のものである。",
              zh:"插在每支瓶子口上的飾物，在正月時最為顯眼：以剖開的竹、薄木片或剪紙做成的扇形或火焰形，從瓶頸向上立起。它看起來是裝飾，卻不被理解為裝飾——它被當作「依代」，也就是神明可以降臨其上的東西，所以它立在酒液的上方而不是旁邊。它的樣式地方色彩極強，在某些地區，某一種形狀專屬於某一個町。" } },
          { term:{ en:"Kawarake", ja:"かわらけ", zh:"素燒淺杯" }, jp:"土器", romaji:"kawarake",
            def:{ en:"The shallow unglazed earthenware cup used for the shared drink at many rites, including a Shinto wedding. It is cheap, it is fired once, and at some rites it is broken or thrown after use precisely so that it cannot be used again. A vessel that has held the shared cup is not returned to ordinary service, and the cheapness is what makes that affordable.",
              ja:"多くの祭において、また神前の婚礼において、分かち合う一杯に用いられる浅い素焼きの杯である。安く、一度だけ焼かれ、祭によっては用いたのち割られるか投げられる。まさに再び用いられぬためである。分かち合う杯を受けた器は、日常の用へは戻されない。安さこそが、それを可能にしている。",
              zh:"許多祭儀（包括神前婚禮）中用來共飲的那種淺口素燒陶杯。它便宜、只素燒一次，而在某些祭儀中，用過之後會被摔破或擲出——正是為了讓它不能再被使用。盛過共飲之酒的器皿不會回到日常使用；而它的便宜，正是讓這件事負擔得起的原因。" } }
        ] },

        { t:"note", title:{ en:"What the brewery donates", ja:"蔵が納めるもの", zh:"酒藏捐的是什麼" }, text:{
          en:"Most of the sake standing on most stands in Japan on any given day is ordinary commercial seishu, given by a local brewery and carrying its label. Shrines that brew their own are the exception and are listed on this page for that reason. A brewery's donation is not charity and is not advertising in the ordinary sense: the house is the place in the parish that makes the substance the rite requires, and supplying it is the form its membership of the parish takes.",
          ja:"日本のいずれの日にも、ほとんどの案に立っている酒のほとんどは、地の蔵が納め、その札を負った並の清酒である。自ら醸す社は例外であり、この頁に挙げられているのはそのためである。蔵の奉納は施しではなく、また通常の意味での広告でもない。その家は、祭が要する物を作る氏子のうちの場所であり、それを納めることが、氏子であることの形なのである。",
          zh:"在日本，任何一天、任何一座案台上立著的酒，多半是一般的市售清酒，由當地酒藏奉納、貼著自家的標。自釀的神社是例外，本頁列出它們正是因為如此。酒藏的奉納既不是慈善，也不是通常意義上的廣告：這家酒藏是氏子範圍內「製造祭儀所需之物」的那個地方，而奉納，就是它身為氏子這件事所採取的形式。" } }
      ] },


    { t:"section", id:"rites",
      title:{ en:"Sake in the rites of a life", ja:"人の一生の儀のなかの酒", zh:"人生儀式中的酒" }, jp:"人生儀礼",
      body:[
        { t:"steps", items:[
          { n:"—", title:{ en:"San-san-kudo — three cups, three times", ja:"三三九度", zh:"三三九度" }, jp:"三々九度", romaji:"san-san-kudo",
            meta:{ en:"the Shinto wedding", ja:"神前式の婚", zh:"神前式婚禮" },
            text:{ en:"The couple drink from three stacked lacquer cups, three sips from each, nine in all. The smallest cup is drunk first. It is the moment the marriage is concluded — not the exchange of rings, which is a modern addition, and not the vow, but the shared cup. Family members often drink afterwards from the same set, which extends the bond outward from the couple to the two households.",
              ja:"夫婦は三つ重ねの朱の杯から、それぞれ三口ずつ、合わせて九度を飲む。最も小さな杯から始める。婚が結ばれる時はこの瞬間である。指輪の交わしではなく——それは近代の付け足しである——誓いでもなく、分かたれた杯である。親族がのちに同じ組から飲むことも多く、それが絆を夫婦から二つの家へと外へ広げる。",
              zh:"新人自三只相疊的漆杯中飲用，每只三口，合計九次。先飲最小的那只。婚姻是在這一刻締結的——不是交換戒指，那是現代的添加，也不是誓詞，而是那只共享的杯。親族往往隨後也用同一組杯飲用，把這份聯結從新人向外擴展到兩個家。" } },
          { n:"—", title:{ en:"Kagami-biraki — opening the mirror", ja:"鏡開き", zh:"鏡開" }, jp:"鏡開き", romaji:"kagami-biraki",
            meta:{ en:"openings, launches, celebrations", ja:"開業・進水・祝い", zh:"開業、下水、慶典" },
            text:{ en:"A cedar barrel's lid is struck open with wooden mallets and the sake ladled into square masu cups for everyone present. The lid is called the mirror, and it is opened rather than broken, because in Japanese one does not break an auspicious object. It is the naorai pattern applied to a company, a ship or a building.",
              ja:"杉の樽の蓋が木の槌で開かれ、酒は居合わせるすべての人のために枡へ汲まれる。蓋は鏡と呼ばれ、割られるのではなく開かれる。日本語において、めでたい物を割るとは言わぬからである。会社に、船に、建物に当てはめられた直会の型である。",
              zh:"以木槌敲開杉木酒樽的蓋，把酒舀進方形的枡杯，分給在場所有人。蓋子被稱為「鏡」，而且是被「開」而非被「破」，因為在日語裡人不會去「破」一件吉利的東西。這是把直會的模式套用到一間公司、一艘船或一棟建築上。" } },
          { n:"—", title:{ en:"Jichinsai — quieting the ground", ja:"地鎮祭", zh:"地鎮祭" }, jp:"地鎮祭", romaji:"jichinsai",
            meta:{ en:"before building", ja:"建てる前に", zh:"動工之前" },
            text:{ en:"Before a house or a building goes up, a priest sets a small altar on the empty site, offers rice, salt, water and sake to the deity of the land, and pours the sake onto the four corners of the ground. Almost every construction project in Japan still does this, including projects run by people who would describe themselves as entirely secular.",
              ja:"家や建物が建つ前に、神職は空いた地に小さな祭壇を設け、米と塩と水と酒を土地の神に供え、そして酒を地の四隅に注ぐ。日本のほとんどあらゆる建設は今なおこれを行う。自らをまったく世俗と述べるであろう人々の営む工事も含めてである。",
              zh:"在房屋或建築動工之前，神職會在空地上設一座小祭壇，向土地之神供奉米、鹽、水與酒，並把酒澆在地的四個角落。日本幾乎每一項建設工程至今仍會這麼做，包括那些由自認完全世俗的人所主持的工程。" } },
          { n:"—", title:{ en:"Kenpai — the cup raised for the dead", ja:"献杯", zh:"獻杯" }, jp:"献杯", romaji:"kenpai",
            meta:{ en:"funerals and memorials", ja:"葬と法要", zh:"葬禮與法會" },
            text:{ en:"At a funeral meal the cup is not raised in celebration. Someone says kenpai, quietly, and everyone lifts their cup without clinking it and without a shout. The distinction from kanpai is exact and universally understood, and getting it wrong is one of the few real social errors available to a visitor.",
              ja:"葬いの食において杯は祝いのために挙げられない。誰かが静かに献杯と述べ、皆は器を合わせず、声も挙げずに杯を上げる。乾杯との区別は正確であり、あまねく解されている。それを誤ることは、訪れる者に開かれた数少ない真の社交の過ちの一つである。",
              zh:"在喪禮的餐席上，杯不是為慶祝而舉的。有人低聲說出「獻杯」，眾人便舉杯，不碰杯，也不出聲。它與「乾杯」的區別精確而人人皆知，而弄錯它，是訪客可能犯下的少數幾個真正的社交錯誤之一。" } }
        ] },

        { t:"panel", tint:"wood",
          title:{ en:"The wall of barrels", ja:"樽の壁", zh:"酒樽之牆" },
          body:[
            { t:"p", text:{
              en:"At Meiji Jingū in Tokyo, and at a number of other major shrines, visitors pass a stacked wall of straw-wrapped sake barrels — komodaru — donated by breweries from across Japan. They are empty, and they are not decoration: each is a standing offering, and the brewery's name on the straw is a public record of a relationship. At Meiji Jingū the sake wall faces a second wall of Burgundy barrels, given by French wine houses in recognition of the emperor's interest in Western culture, which is either a very odd sight or a very precise one depending on how you look at it.",
              ja:"東京の明治神宮において、そして他のいくつもの大きな社において、訪れる人は藁に包まれた酒樽——菰樽——の積まれた壁の前を通る。それらは空であり、飾りではない。いずれも立てられた供えであり、藁の上の蔵の名は、縁の公の記録である。明治神宮において、その酒の壁は第二の壁と向き合っている。西洋の文化への帝の関心を認めて、仏蘭西の葡萄酒の家々から贈られたブルゴーニュの樽の壁である。それはきわめて奇妙な眺めでもあり、見方によってはきわめて正確な眺めでもある。",
              zh:"在東京的明治神宮，以及其他數座大型神社，訪客會經過一整面堆疊的稻草包裹酒樽——菰樽——由日本各地的酒藏捐贈。它們是空的，而且不是裝飾：每一只都是一份持續存在的供奉，稻草上的酒藏名字則是一份關係的公開紀錄。在明治神宮，這面酒之牆正對著第二面牆：由法國葡萄酒莊所贈的勃艮第酒桶，以表彰這位天皇對西方文化的興趣——那要嘛是一幅極其古怪的景象，要嘛是一幅極其精確的景象，端看你怎麼看。" } }
          ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"culture.html\">Culture &amp; Ritual</a> for the wider social frame, <a href=\"calendar.html\">The Brewing Year</a> for the working calendar these rites sit on, <a href=\"kanpai.html\">Drinking Together</a> for kanpai and kenpai in practice, <a href=\"vessels.html\">Cups &amp; Vessels</a> for the masu, the heishi and the lacquer cups.",
          ja:"関連——より広い社会の枠は<a href=\"culture.html\">文化と儀礼</a>、これらの祭が載る働きの暦は<a href=\"calendar.html\">酒造の一年</a>、乾杯と献杯の実際は<a href=\"kanpai.html\">共に飲むこと</a>、枡・瓶子・朱の杯は<a href=\"vessels.html\">酒器</a>。",
          zh:"相關：更廣的社會框架見<a href=\"culture.html\">文化與儀禮</a>；這些祭典所依附的工作曆見<a href=\"calendar.html\">釀造的一年</a>；乾杯與獻杯的實務見<a href=\"kanpai.html\">一起喝酒這件事</a>；枡、瓶子與漆杯見<a href=\"vessels.html\">酒器</a>。" } }
      ] },

    { t:"related", items:[
      { href:"culture.html", why:{ en:"The same rites seen from the social side rather than the shrine's.", ja:"同じ祭を、社ではなく社会の側から見る。", zh:"同樣的祭儀，從社會這一側、而不是從神社這一側看。" } },
      { href:"history.html", why:{ en:"Where temple and shrine brewing sits in the longer story.", ja:"僧坊酒と社の造りが、より長い物語のどこに座るか。", zh:"僧坊酒與神社釀酒，在更長的故事裡的位置。" } },
      { href:"equipment.html", why:{ en:"The cedar ball, the barrels and the objects the rites use.", ja:"杉玉、樽、そして祭が用いる道具。", zh:"杉玉、酒樽，以及祭儀所使用的器物。" } },
      { href:"poetry.html", why:{ en:"What the same drink does when it stops being an offering.", ja:"同じ酒が供え物であることをやめたとき、何をなすか。", zh:"同一款酒不再是供品之後，它做了什麼。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- poetry */
SAKE.pages["poetry"] = {
  kicker: { en: "Foundations · 09", ja: "基礎 · 09", zh: "基礎 · 09" },
  title:  { en: "Sake in Poetry", ja: "詩歌のなかの酒", zh: "詩歌中的酒" },
  jp: "詩と酒",
  lede: {
    en: "Japanese has been writing about drinking for thirteen hundred years, and it inherited a Chinese vocabulary for it that is older still. The result is that a great deal of what Japanese people say about sake — that it dissolves worry, that it is best drunk alone under a moon, that the cherry blossom and the cup belong together — is not folk wisdom but quotation, often from poems everyone half-remembers and few could name. This page is about where those lines came from.",
    ja: "日本語は千三百年にわたり飲むことについて書いてきた。そしてそのための語彙を、さらに古い中国から受け継いだ。その結果、日本の人が日本酒について語ることの少なからぬ部分——それが憂いを溶かすこと、月の下に独りで飲むのが最も良いこと、桜と杯とが共にあること——は民の知恵ではなく引用であり、しばしば誰もが半ば覚えていて、ほとんど誰も名を挙げられぬ詩からのものである。この頁は、それらの句がどこから来たかについてのものである。",
    zh: "日文書寫飲酒這件事已有一千三百年，而它為此所繼承的漢語詞彙更為古老。其結果是：日本人談論清酒時所說的許多話——酒能溶解憂愁、最好在月下獨飲、櫻花與酒杯本就相屬——並非民間智慧，而是引用，往往出自人人記得一半、卻幾乎沒有人叫得出名字的詩。本頁談的，就是那些句子從何而來。"
  },
  body: [

    { t:"section", id:"manyoshu",
      title:{ en:"Thirteen poems in praise of sake", ja:"酒を讃むる歌十三首", zh:"讚酒歌十三首" }, jp:"万葉集・大伴旅人",
      body:[
        { t:"p", text:{
          en:"The oldest sustained argument about drinking in Japanese literature was written around 730 by a provincial governor in his sixties, posted to Kyūshū, recently widowed, and evidently not in the mood for advice. Ōtomo no Tabito's thirteen linked poems sit in Book Three of the <em>Man'yōshū</em>, and they are less a celebration than a defence — of drinking, against the Buddhist and Confucian seriousness that was arriving from the continent along with everything else.",
          ja:"日本の文学における飲むことについての最も古い持続した論は、七三〇年ごろ、六十を越えた国守によって書かれた。九州へ遣わされ、妻を亡くしたばかりで、そして明らかに助言を受ける気分ではなかった人である。大伴旅人の連なる十三首は『万葉集』巻三に置かれ、それは讃えというより弁である。飲むことの弁であり、他のあらゆるものとともに大陸から到来しつつあった仏と儒の生真面目さに対する弁である。",
          zh:"日本文學中關於飲酒最早的一段持續論述，寫於約七三〇年，作者是一位六十多歲的地方國守——被派往九州、剛喪妻，而且顯然沒有心情接受任何忠告。大伴旅人這十三首相連的歌收在《萬葉集》卷三，與其說是讚頌，不如說是辯護：為飲酒辯護，對抗那些與其他一切事物一同從大陸傳來的佛家與儒家的正經。" } },
        { t:"quote", text:{
          en:"Rather than saying things of no use, it seems better to drink a cup of murky sake.",
          ja:"験なき物を思はずは一坏の濁れる酒を飲むべくあるらし",
          zh:"與其思慮那些無濟於事的事，不如飲一杯濁酒。" }, cite:{ en:"Ōtomo no Tabito, Man'yōshū III:338", ja:"大伴旅人『万葉集』巻三・三三八", zh:"大伴旅人《萬葉集》卷三・三三八" } },
        { t:"p", text:{
          en:"That first poem sets the tone, and the others push further — that a sage of old must have called sake by a good name; that a man who drinks and weeps is better than one who looks wise; that he would rather be a wine jar in his next life, so as to be soaked in sake. Read together they are witty, slightly desperate, and completely modern in their impatience with people who moralise about drinking. They also establish, at the very beginning of written Japanese, a set of associations — sake as the answer to grief, as the enemy of pretension, as the companion of the person who has stopped performing — that Japanese writing has not let go of since.",
          ja:"その最初の一首が調子を定め、他はさらに押し進める。古の聖はきっと酒に良い名を付けたのだと。賢しらに見える者より、飲みて泣く者の方が優れているのだと。来む世には酒壺になりたい、酒に染みていられるようにと。共に読めば、それらは機知に富み、いささか切羽詰まっており、飲むことについて道を説く人々への焦れにおいてまったく現代的である。そしてそれらは、書かれた日本語のまさに始まりにおいて、一組の結びつきを打ち立てた。悲しみへの答えとしての酒、気取りの敵としての酒、演じることをやめた者の伴としての酒である。日本の書きものはそれ以来、これを手放していない。",
          zh:"第一首定下了調子，其餘則推得更遠——古來的聖賢想必給酒起了個好名字；一個喝了酒哭出來的人，勝過一個看起來很有智慧的人；他寧願來世變成一只酒壺，好讓自己浸在酒裡。合起來讀，它們機智、略帶絕望，而且在對那些拿飲酒說教的人失去耐性這一點上，完全是現代的。它們也在書面日語的最開端，確立了一組聯想——酒作為悲傷的解答、作為矯飾的敵人、作為那個不再表演的人的同伴——而此後的日本書寫，再也沒有放下它。" } }
,

        { t:"h3", text:{ en:"All thirteen, in order", ja:"十三首、順に", zh:"十三首，依序" }, id:"thirteen" },
        { t:"figure",
          caption:{
            en:"The thirteen poems as a sequence of moves rather than thirteen separate poems. Read across, the argument does not accumulate so much as circle: it opens by refusing thought, reaches twice for a Chinese authority, turns three times on the man who performs wisdom and will not drink, twice dismisses treasure, and then — having been funny for nine poems — arrives at death and stays there. The last three are not a coda. They are what the first ten were for.",
            ja:"十三首を、十三の別々の歌としてではなく、手の連なりとして見たもの。横に読めば、論は積み上がるというより巡る。思うことを拒んで始まり、二度、漢の典拠へ手を伸ばし、三度、賢しらを装って飲まぬ者へ向き直り、二度、宝を退け、そして——九首のあいだ可笑しくあったのちに——死に至り、そこに留まる。最後の三首は後書きではない。初めの十首は、そのためにあった。",
            zh:"把這十三首看成一連串的「動作」，而不是十三首各自獨立的歌。橫著讀，這段論述與其說是累積，不如說是繞行：它以拒絕思慮開場，兩度向漢籍的權威伸手，三度轉向那個裝作有智慧、卻不肯喝的人，兩度打發掉財寶，然後——在好笑了九首之後——抵達死亡，並停在那裡。最後三首不是尾聲；前面十首就是為了它們而存在的。" },
          svg: function (lang, L) {
            var W = 760, H = 268, X0 = 40, CW = 52.3;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j;
            var cat = [
              { c:"#DED8CB", n:{ en:"drink rather than think", ja:"思うより飲む", zh:"與其思慮，不如喝" } },
              { c:"#B09E7C", n:{ en:"a Chinese authority cited", ja:"漢籍の典拠を引く", zh:"引漢籍的權威" } },
              { c:"#CFC6B2", n:{ en:"against the sober", ja:"賢しら顔に抗う", zh:"針對裝清醒的人" } },
              { c:"#C3CBBE", n:{ en:"against treasure", ja:"宝を退ける", zh:"打發掉財寶" } },
              { c:"#EAE5D9", n:{ en:"plain praise", ja:"ただ讃える", zh:"純粹的讚" } },
              { c:"#8D998C", n:{ en:"mortality", ja:"死", zh:"死" } }
            ];
            var po = [
              { n:338, k:0, g:{ en:["don't","brood"], ja:["思ふより","飲め"], zh:["與其思慮","不如飲"] } },
              { n:339, k:1, g:{ en:["the old","sage"], ja:["古の聖の","名"], zh:["古聖之名"] } },
              { n:340, k:1, g:{ en:["seven","wise men"], ja:["七の賢人"], zh:["七賢所欲"] } },
              { n:341, k:2, g:{ en:["drink and","weep"], ja:["泣く方が","まし"], zh:["飲而泣","勝於言"] } },
              { n:342, k:4, g:{ en:["nothing","beats it"], ja:["何にも","勝る"], zh:["無物能及"] } },
              { n:343, k:4, g:{ en:["be the","jar"], ja:["酒壺に","なりたい"], zh:["願為酒壺"] } },
              { n:344, k:2, g:{ en:["sober and","ugly"], ja:["賢しらは","醜い"], zh:["假賢醜陋"] } },
              { n:345, k:3, g:{ en:["beyond","price"], ja:["価なき","宝より"], zh:["勝於無價","之寶"] } },
              { n:346, k:3, g:{ en:["the night","jewel"], ja:["夜光の","玉より"], zh:["勝於夜光","之珠"] } },
              { n:347, k:4, g:{ en:["the best","pleasure"], ja:["最上の","楽しみ"], zh:["人間至樂"] } },
              { n:348, k:5, g:{ en:["insect","or bird"], ja:["来世は","虫か鳥"], zh:["來世為","蟲為鳥"] } },
              { n:349, k:5, g:{ en:["all things","die"], ja:["生ある","者は死ぬ"], zh:["生者必死"] } },
              { n:350, k:2, g:{ en:["silence","falls short"], ja:["黙して","及ばず"], zh:["默坐不如","飲而泣"] } }
            ];
            s += '<text x="' + X0 + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "十三首・それぞれの手" : lang === "zh" ? "十三首・各自的一手" : "THIRTEEN POEMS, THIRTEEN MOVES") + '</text>';
            s += '<line x1="' + (X0 + CW).toFixed(1) + '" y1="68" x2="' + (X0 + CW * 3 - 4).toFixed(1) + '" y2="68" stroke="#B09E7C"/>';
            s += '<text x="' + (X0 + CW).toFixed(1) + '" y="62" font-size="9" fill="#8B857C">' +
                 (lang === "ja" ? "漢籍への二つの戸" : lang === "zh" ? "通往漢籍的兩道門" : "the two Chinese doors") + '</text>';
            for (i = 0; i < po.length; i++) {
              var cx = X0 + i * CW;
              s += '<rect x="' + cx.toFixed(1) + '" y="90" width="' + (CW - 4).toFixed(1) + '" height="58" fill="' + cat[po[i].k].c + '"/>';
              s += '<text x="' + (cx + (CW - 4) / 2).toFixed(1) + '" y="84" text-anchor="middle" font-size="9.5" fill="#6B655C">' + po[i].n + '</text>';
              var gl = po[i].g[lang] || po[i].g.en;
              for (j = 0; j < gl.length; j++) {
                s += '<text x="' + (cx + (CW - 4) / 2).toFixed(1) + '" y="' + (166 + j * 11) + '" text-anchor="middle" font-size="8" fill="#8B857C">' + gl[j] + '</text>';
              }
            }
            for (i = 0; i < cat.length; i++) {
              var lx = X0 + (i % 3) * 238, ly = 208 + Math.floor(i / 3) * 16;
              s += '<rect x="' + lx + '" y="' + (ly - 8) + '" width="10" height="10" fill="' + cat[i].c + '"/>';
              s += '<text x="' + (lx + 16) + '" y="' + ly + '" font-size="9.5" fill="#6B655C">' + L(cat[i].n) + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "分類は、この頁に訳された十三首そのものから読んだものである。順は万葉集巻三の並びのままである。"
                  : lang === "zh" ? "分類讀自本頁所譯的十三首本身；次序即《萬葉集》卷三的原序。"
                  : "The grouping is read from the thirteen poems as translated on this page; the order is the Man'yōshū's own.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"p", text:{
          en:"They are short enough to give in full, and they are better read as a sequence than as an anthology — the argument escalates, doubles back, gets funnier and then unexpectedly sad. The Japanese below is the standard reading of the text; the third column is what it says.",
          ja:"それらは全てを挙げるに足るほど短く、そして選集としてよりも連なりとして読むほうが良い。論は昂り、引き返し、可笑しくなり、そして思いがけず悲しくなる。以下の日本語は本文の定まった訓みであり、第三の列はそれが述べていることである。",
          zh:"它們短到足以全數列出，而且當作一組序列來讀，會比當成選集來讀更好——論點步步升高、回頭轉折、變得更好笑，然後出人意料地哀傷。以下的日文是這些歌的標準訓讀，第三欄是它們所說的內容。" } },

        { t:"table",
          caption:{ en:"Ōtomo no Tabito, Man'yōshū III: 338–350", ja:"大伴旅人『万葉集』巻三 三三八〜三五〇", zh:"大伴旅人《萬葉集》卷三 三三八～三五〇" },
          cols:[ { en:"No.", ja:"番", zh:"編號" },
                 { en:"The poem", ja:"歌", zh:"原歌" },
                 { en:"What it says", ja:"意", zh:"意思" } ],
          jpCols:[1], numCols:[0],
          rows:[
            [ "338", "験なきものを思はずは一坏の濁れる酒を飲むべくあるらし",
              { en:"Rather than brood on things that come to nothing, better, it seems, to drink a single cup of cloudy sake.",
                ja:"甲斐のないことを思い悩むくらいなら、一杯の濁り酒を飲むほうがよいらしい。",
                zh:"與其苦思那些終究無濟於事的事，看來不如飲下一杯濁酒。" } ],
            [ "339", "酒の名を聖と負せし古の大き聖の言の宜しさ",
              { en:"How well the great sage of old chose his words, who gave sake the name \"the sage\".",
                ja:"酒に聖という名を負わせた、古の大聖のことばのなんと適切なことか。",
                zh:"古時那位大聖賢把酒命名為「聖」——他的用詞多麼恰當。" } ],
            [ "340", "古の七の賢しき人たちも欲りせしものは酒にしあるらし",
              { en:"Even the seven wise men of old, it seems, wanted nothing so much as sake.",
                ja:"古の七人の賢者たちが欲したものも、どうやら酒であったらしい。",
                zh:"就連古時那七位賢人所渴求的，看來也不過就是酒。" } ],
            [ "341", "賢しみと物言ふよりは酒飲みて酔ひ泣きするしまさりたるらし",
              { en:"Better, it seems, to drink and weep in your cups than to talk as though you were wise.",
                ja:"賢しらに物を言うよりは、酒を飲んで酔い泣きするほうが優っているらしい。",
                zh:"與其擺出聰明的樣子說話，看來不如喝了酒、醉了大哭一場。" } ],
            [ "342", "言はむすべ為むすべ知らに極まりて貴きものは酒にしあるらし",
              { en:"Beyond anything one could say or do — the supremely precious thing, it seems, is sake.",
                ja:"言いようも為しようもわからぬほどに、極まって貴いものは酒であるらしい。",
                zh:"說也說不出、做也做不到；到了極處，最可貴的看來就是酒。" } ],
            [ "343", "なかなかに人とあらずは酒壺になりにてしかも酒に染みなむ",
              { en:"Rather than be half a man, let me become a sake jar, and be steeped in sake through and through.",
                ja:"中途半端に人であるよりは、いっそ酒壺になって酒に染まってしまいたい。",
                zh:"與其半吊子地做個人，不如變成一只酒壺，好教自己徹底浸在酒裡。" } ],
            [ "344", "あな醜賢しらをすと酒飲まぬ人をよく見ば猿にかも似む",
              { en:"How ugly. Look closely at a man who puts on wisdom and will not drink — he rather resembles a monkey.",
                ja:"ああ醜い。賢ぶって酒を飲まぬ人をよく見れば、猿にでも似ていよう。",
                zh:"真難看。仔細看看那些裝作有智慧、又不肯喝酒的人——大概像猴子吧。" } ],
            [ "345", "価なき宝といふとも一坏の濁れる酒にあにまさめやも",
              { en:"Call it a treasure beyond price if you like — could it ever surpass a single cup of cloudy sake?",
                ja:"値のつけられぬ宝といっても、一杯の濁り酒に勝ろうか。",
                zh:"就算說它是無價之寶，又怎麼勝得過一杯濁酒？" } ],
            [ "346", "夜光る玉といふとも酒飲みて心を遣るにあにしかめやも",
              { en:"Call it a jewel that shines in the night — can it match drinking sake and letting the heart go free?",
                ja:"夜に光る玉といっても、酒を飲んで心を晴らすことに及ぼうか。",
                zh:"就算說它是夜裡發光的寶珠，又怎麼比得上飲酒、把心放開？" } ],
            [ "347", "世間の遊びの道にたのしきは酔ひ泣きするにあるべかるらし",
              { en:"Of all the ways of taking pleasure in this world, the best, it seems, is to get drunk and weep.",
                ja:"世の中の遊びの道のうちで楽しいのは、酔い泣きすることであるらしい。",
                zh:"世間種種取樂之道裡，最快活的看來就是喝醉了哭一場。" } ],
            [ "348", "この世にし楽しくあらば来む世には虫に鳥にもわれはなりなむ",
              { en:"If I can be happy in this life, then in the next let me be an insect or a bird — I do not mind.",
                ja:"この世で楽しくあれるなら、来世には虫にでも鳥にでもなろう。",
                zh:"只要這一世過得快活，來世要我做蟲做鳥，我也甘願。" } ],
            [ "349", "生まれれば遂にも死ぬるものにあればこの世なる間は楽しくをあらな",
              { en:"Since everything born must in the end die, let me at least be happy while I am here.",
                ja:"生まれた以上は必ず死ぬものなのだから、この世にある間は楽しくあろう。",
                zh:"既然生下來終究是要死的，那麼在這世上的這段時間，就讓我快活吧。" } ],
            [ "350", "黙居りて賢しらするは酒飲みて酔ひ泣きするになほしかずけり",
              { en:"To sit in silence and pretend to wisdom still falls short of drinking sake and weeping in your cups.",
                ja:"黙って賢ぶっているのは、酒を飲んで酔い泣きするのにやはり及ばない。",
                zh:"默默坐著裝作有智慧，終究還是比不上喝了酒、醉了哭一場。" } ]
          ] },

        { t:"panel", tint:"plum",
          title:{ en:"Two Chinese doors in the sequence", ja:"連なりのなかの二つの中国の戸", zh:"這組歌中的兩扇中國之門" },
          body:[
            { t:"p", text:{
              en:"Poems 339 and 340 are not general praise; they are citations, and a reader of Chinese will recognise both immediately. The \"sage\" of 339 comes from a story in the Wei records: under a prohibition on alcohol, drinkers took to calling clear sake \"the sage\" and cloudy sake \"the worthy\" so that they could discuss it without being arrested. The \"seven wise men\" of 340 are the Seven Sages of the Bamboo Grove, the third-century Chinese scholars who withdrew from a dangerous court into drink and conversation.",
              ja:"三三九と三四〇は一般の讃えではない。引用であり、中国語の読み手は両方を直ちにそれと知る。三三九の「聖」は魏の記録の話から来る。酒の禁のもと、飲む者は澄んだ酒を聖人、濁った酒を賢人と呼ぶようになった。捕らえられずにそれを語りうるためである。三四〇の「七の賢しき人」は竹林の七賢であり、危うい朝廷を退いて酒と談論に入った三世紀の中国の士である。",
              zh:"三三九與三四〇不是泛泛的讚頌，而是引用；中文讀者一眼就會認出這兩者。三三九的「聖」出自魏書的一則故事：在禁酒令之下，飲者開始把清酒稱為「聖人」、濁酒稱為「賢人」，好讓自己能談論它而不被逮捕。三四〇的「七位賢人」則是竹林七賢——三世紀那群自危險的朝廷退隱、投入酒與清談的中國士人。" } },
            { t:"p", text:{
              en:"This matters for how the sequence should be read. Tabito is not a rustic celebrating the local drink; he is a senior official in the eighth century, writing in Japanese, deploying Chinese literary authority to defend a position against the Chinese-derived moralism of his own court. The whole argument is conducted inside a borrowed vocabulary and turned against the people who did the borrowing. It is a very sophisticated piece of work, and it is the oldest thing in this section for a reason.",
              ja:"これは連なりがいかに読まれるべきかについて意味をもつ。旅人は土地の酒を讃える田舎人ではない。八世紀の高い官であり、日本語で書き、中国の文の権威を用いて、自らの朝廷における中国由来の道徳主義に抗する立場を守っている。論の全体は借りた語彙の内で行われ、借りた当の人々へ向けられている。きわめて洗練された仕事であり、この章において最も古いものである理由がある。",
              zh:"這一點影響到這組歌該怎麼讀。旅人不是一個讚美家鄉酒的鄉下人；他是八世紀的高階官員，以日語書寫，卻調度中國的文學權威，來為一個立場辯護——對抗的正是他自己朝廷裡那套源自中國的道德主義。整場論述在借來的語彙之內進行，並被轉過來對準了當初借入者。這是一件極為老練的作品，而它之所以是本章最古老的一項，是有理由的。" } }
          ] }
      ] },

    { t:"section", id:"china",
      title:{ en:"The Chinese inheritance", ja:"中国からの受け継ぎ", zh:"來自中國的繼承" }, jp:"漢詩",
      body:[
        { t:"p", text:{
          en:"Every educated Japanese writer until the twentieth century read Chinese poetry as a matter of course, and the drinking poems of the Tang were among the first things memorised. They supplied Japan not with sake — which is a different drink — but with the postures: the recluse with his cup, the friend seen off at a river crossing, the solitary drinker addressing the moon.",
          ja:"二十世紀に至るまで、教育を受けた日本の書き手はみな当然のこととして漢詩を読み、唐の飲酒の詩は最初に暗んじられるものの一つであった。それらが日本に供したのは酒ではない——それは異なる飲み物である——姿勢である。杯を持つ隠者、渡し場で見送られる友、月に語りかける独りの飲み手である。",
          zh:"直到二十世紀之前，每一位受過教育的日本作者都理所當然地讀漢詩，而唐代的飲酒詩是最先被背下來的作品之一。它們供給日本的不是酒——那是另一種飲料——而是姿態：手持酒杯的隱者、在渡口送別的朋友、對月自語的獨飲者。" } },
        { t:"quote", text:{
          en:"Among the flowers, a pot of wine; I drink alone, no friend beside me. I raise my cup to invite the bright moon — with my shadow, we are three.",
          ja:"花間一壺の酒　独り酌みて相親しむ無し　杯を挙げて明月を邀へ　影に対して三人と成る",
          zh:"花間一壺酒，獨酌無相親。舉杯邀明月，對影成三人。" }, cite:{ en:"Li Bai, Drinking Alone under the Moon, 8th century", ja:"李白「月下独酌」八世紀", zh:"李白〈月下獨酌〉，八世紀" } },
        { t:"defs", items:[
          { term:{ en:"Why this poem in particular", ja:"とりわけこの詩である理由", zh:"為何偏偏是這首詩" }, jp:"独酌", romaji:"dokushaku",
            def:{ en:"Because it made solitary drinking respectable. Japanese has a word, <em>dokushaku</em>, that means drinking alone and carries none of the alarm the English phrase does; it means an evening chosen rather than a failure to find company, and the reason it can mean that is a fourteen-hundred-year-old poem in which the drinker's company is the moon and his own shadow. A great deal of Japanese drinking culture — the counter seat, the single small flask, the deliberate quiet — descends from this image.",
              ja:"それが独りで飲むことを立派なものとしたからである。日本語には独酌という語があり、それは独りで飲むことを意味しながら、英語の言い回しが負う警戒をまったく負わない。それは、伴を得られなかったことではなく、選ばれた宵を意味する。そう意味しうる理由は、飲み手の伴が月と自らの影である千四百年前の一篇の詩にある。日本の飲酒の文化の少なからぬ部分——カウンターの席、小さな徳利一本、意図された静けさ——はこの像から下っている。",
              zh:"因為它讓獨飲變得體面。日語裡有「獨酌」一詞，意思是獨自飲酒，卻完全不帶英語同義說法所背負的警戒意味；它指的是一個被選擇的夜晚，而非找不到人作伴的失敗。而它之所以能有這層意思，源自一千四百年前的一首詩——詩中飲者的同伴是月亮與自己的影子。日本飲酒文化中很大一部分——吧檯的座位、一支小小的德利、刻意的安靜——都由這個意象而來。" } },
          { term:{ en:"The translation that became a proverb", ja:"諺となった訳", zh:"變成諺語的譯文" }, jp:"『厄除け詩集』", romaji:"Yakuyoke shishū",
            def:{ en:"In the 1930s the novelist Ibuse Masuji translated a short Tang poem by Yu Wuling, a farewell over a cup of wine, into rough colloquial Japanese. His last line — 'life is nothing but goodbyes' — became one of the most quoted sentences in modern Japanese, detached entirely from the poem and from the fact that it is a translation. It is written on shop signs. It has been a song lyric. Most people who use it do not know it began as a Chinese drinking poem, and that unknowing is exactly how a literary inheritance works.",
              ja:"一九三〇年代、小説家の井伏鱒二が、于武陵の短い唐詩——杯を交わしての別れ——を荒い口語の日本語に訳した。その最後の一行「サヨナラダケガ人生ダ」は、現代日本語において最も引かれる文の一つとなり、詩からも、それが訳であるという事実からも、まったく切り離された。それは店の看板に書かれている。歌詞にもなった。それを用いる人のほとんどは、それが中国の飲酒の詩として始まったことを知らない。そしてその知らなさこそ、文学の受け継ぎが働くありようそのものである。",
              zh:"一九三〇年代，小說家井伏鱒二把于武陵一首簡短的唐詩——一場舉杯的送別——譯成粗口語的日文。他的最後一行「人生只有離別」成為現代日語中最常被引用的句子之一，並且完全脫離了原詩，也脫離了「這是一則譯文」這個事實。它被寫在店招上，成為歌詞。使用它的人多半不知道它最初是一首中國的飲酒詩——而這種「不知道」，正是文學繼承運作的方式。" } }
        ] }
      ] },

    { t:"section", id:"haiku",
      title:{ en:"Sake as a season word", ja:"季語としての酒", zh:"作為季語的酒" }, jp:"俳句と季語",
      body:[
        { t:"p", text:{
          en:"Haiku requires a <em>kigo</em>, a word that fixes the poem in a season, and the standard almanacs of season words include a substantial sake vocabulary. Reading it is a quick way to learn what a pre-industrial year of drinking looked like — and one entry in it will surprise almost everyone.",
          ja:"俳句は季語を要する。詩を季節に留める語である。そして季寄せの標準には、相当な量の酒の語彙が含まれている。それを読むことは、工業以前の飲酒の一年がどのようであったかを手早く知る道であり——そのうちの一項は、ほとんど誰をも驚かせる。",
          zh:"俳句需要「季語」——一個把詩固定在某個季節裡的詞——而標準的季語辭典中，收有相當可觀的一批與酒相關的詞彙。讀它，是快速理解前工業時代一整年飲酒樣貌的方式；而其中有一條，幾乎會讓所有人吃驚。" } },
        { t:"table",
          caption:{ en:"Sake words in the season almanacs", ja:"季寄せに載る酒の語", zh:"季語辭典中的酒之詞" },
          cols:[{ en:"Word", ja:"語", zh:"詞" }, { en:"Season", ja:"季", zh:"季節" }, { en:"What it means, and why then", ja:"意味と、なぜその季なのか", zh:"意義，以及為何屬於那個季節" }],
          jpCols:[0], keyCol:0,
          rows:[
            ["屠蘇", { en:"New Year", ja:"新年", zh:"新年" }, { en:"Spiced medicinal sake drunk on the first days of the year, youngest first, from a stacked set of three lacquer cups. One of the very few Japanese customs where the drinking order is deliberately inverted.", ja:"年の初めの日々に、若い者から順に、三つ重ねの漆の杯で飲む薬用の酒である。飲む順が意図して逆さにされる、日本のきわめて稀な習いの一つである。", zh:"在新年最初幾天飲用的藥用香料酒，由最年幼者先飲，使用三只疊起的漆杯。這是日本極少數刻意把飲用順序倒過來的習俗之一。" }],
            ["花見酒", { en:"Spring", ja:"春", zh:"春" }, { en:"Drinking under the cherry blossom. The blossom is brief and the point of the poem is usually that so is everything else.", ja:"桜の下で飲むこと。花は短く、詩の眼目はたいてい、他のすべてもまた短いということである。", zh:"在櫻花下飲酒。花期短暫，而詩的重點通常是：其他一切也一樣短暫。" }],
            ["甘酒", { en:"Summer", ja:"夏", zh:"夏" }, { en:"The surprise. Amazake is now sold hot at winter shrine festivals, but in the almanacs it is a <em>summer</em> word, because in the Edo period it was drunk cold from street vendors as a restorative in the heat — a sweet, thick, non-alcoholic rice drink full of glucose and amino acids, which is to say a pre-modern sports drink.", ja:"驚きである。甘酒は今日、冬の社の祭で温めて売られるが、季寄せにおいてはそれは夏の語である。江戸において、暑さのなかの気付けとして、道の商いから冷たいまま飲まれたからである。葡萄糖とアミノ酸に富む甘く厚い、酒精を含まぬ米の飲み物——すなわち近代以前の運動の飲料である。", zh:"令人意外的一條。甘酒如今是在冬季的神社祭典上熱熱地販售，但在季語辭典中它是「夏」的季語——因為在江戶時代，它是街頭攤販冷著賣、用來在暑熱中提神的飲品：一種富含葡萄糖與胺基酸、甜而濃稠、不含酒精的米飲，也就是一種前現代的運動飲料。" }],
            ["新酒", { en:"Winter", ja:"冬", zh:"冬" }, { en:"The season's first sake, arriving from about November. Also <em>shinshu</em> in the sense of the new brewing year, and the cue for the cedar ball at the door to be replaced with a green one.", ja:"その季の最初の酒であり、十一月ごろから届く。新しい醸造の年という意味での新酒でもあり、戸口の杉玉が青いものに掛け替えられる合図である。", zh:"當季的第一批酒，約自十一月起送達。它同時也指新的釀造年度，並且是門口的杉玉該換成青綠色那一顆的信號。" }],
            ["濁酒", { en:"Autumn", ja:"秋", zh:"秋" }, { en:"Unstrained, cloudy home-made sake, associated with the harvest and with country life. A season word carrying a whole social class with it.", ja:"漉さぬ濁った手作りの酒であり、収穫と田舎の暮らしと結びついている。一つの階層を丸ごと負う季語である。", zh:"未經過濾、混濁的自釀酒，與收穫及鄉間生活相連。這是一個把一整個社會階層一併帶進來的季語。" }],
            ["月見酒", { en:"Autumn", ja:"秋", zh:"秋" }, { en:"Moon-viewing sake, and the direct Japanese descendant of the Li Bai poem above. The mid-autumn moon is the single most written-about object in East Asian poetry and the cup is almost always in the frame.", ja:"月を見ながらの酒であり、上に引いた李白の詩の日本における直の後裔である。中秋の月は東亜の詩において最も多く書かれた一つの物であり、杯はほとんど常にその枠の内にある。", zh:"賞月時飲的酒，也是上文李白那首詩在日本的直系後裔。中秋之月是東亞詩歌中被書寫最多的單一事物，而酒杯幾乎總在畫面之中。" }]
          ] },
        { t:"quote", text:{
          en:"The sake of an autumn night, seeping cold and clear into the teeth — this is a thing to be drunk quietly.",
          ja:"白玉の歯にしみとほる秋の夜の酒はしづかに飲むべかりけり",
          zh:"秋夜之酒，清冷透入齒間——這是一件該安靜地飲的事。" }, cite:{ en:"Wakayama Bokusui, early 20th century", ja:"若山牧水、二十世紀初頭", zh:"若山牧水，二十世紀初" } }
      ] },

{ t:"section", id:"modern",
      title:{ en:"The modern drinkers", ja:"近代の飲み手たち", zh:"近代的飲者" }, jp:"近現代",
      body:[
        { t:"p", text:{
          en:"Modern Japanese literature has a heavy drinking tradition and a complicated one. Several of its central figures drank destructively and wrote about it, and their work is quoted admiringly in sake marketing in a way that does not always survive reading the biographies. It is worth setting both halves down.",
          ja:"近代の日本の文学は、重く、そして複雑な飲酒の伝統を持つ。その中心にある幾人かは自らを損なうように飲み、それについて書いた。そしてその作は、伝記を読めば必ずしも耐えぬ仕方で、日本酒の売り方において賛嘆とともに引かれる。両の半を書き留めておく値打ちがある。",
          zh:"近代日本文學有一個沉重、且複雜的飲酒傳統。它幾位核心人物以自我毀滅的方式飲酒，並書寫這件事；而他們的作品在清酒的行銷中被讚嘆地引用，那種引用方式往往經不起翻閱他們的傳記。兩邊都值得記下來。" } },
        { t:"defs", items:[
          { term:{ en:"The poet of sake", ja:"酒の歌人", zh:"酒的歌人" }, jp:"若山牧水", romaji:"Wakayama Bokusui",
            def:{ en:"A tanka poet of the early twentieth century who wrote perhaps three hundred poems about sake and is the standard citation whenever a Japanese writer wants to quote poetry on the subject. The poem above — the autumn-night sake that seeps into the teeth, to be drunk quietly — is on bottles, on shop walls and in tasting notes. He is also thought to have drunk something like a litre of sake a day for years, and died at forty-three; the doctor who performed the autopsy is said to have remarked on how well preserved the body was. Both facts are usually printed together, and the second is usually printed as a joke.",
              ja:"二十世紀初頭の歌人であり、おそらく三百首の酒の歌を詠み、日本の書き手がこの主題について詩を引こうとするときの標準の出典である。上に引いた歌——歯にしみとおる秋の夜の酒、静かに飲むべきもの——は瓶に、店の壁に、利き酒の覚え書きに載っている。彼はまた、年にわたり一日に一升に近い酒を飲んだと考えられ、四十三で没した。検死を行った医師が、遺体の保たれ方に感嘆したと伝えられる。二つの事実はたいてい共に刷られ、二つ目はたいてい冗談として刷られる。",
              zh:"二十世紀初的短歌歌人，大約寫了三百首關於酒的歌，是日本作者想引用相關詩句時的標準出處。上文那首——秋夜之酒滲入齒間、該安靜地飲——被印在酒瓶上、店家牆上與品飲筆記裡。他同時被認為連年每天喝下近一升的酒，四十三歲去世；據說進行驗屍的醫師還讚嘆遺體保存得多好。這兩件事通常被一起印出來，而第二件通常被當成笑話印。" } },
          { term:{ en:"The translator", ja:"訳者", zh:"譯者" }, jp:"井伏鱒二", romaji:"Ibuse Masuji",
            def:{ en:"Best known outside Japan for a novel about Hiroshima, and inside it, among other things, for the drinking poems in his <em>Yakuyoke shishū</em> — free, colloquial, deliberately unliterary translations of Tang poetry that gave modern Japanese several of its most quoted lines. He is the clearest demonstration that the Chinese and Japanese drinking traditions are not two traditions.",
              ja:"国外では広島についての小説で最もよく知られ、国内では、他のことに加えて『厄除け詩集』の飲酒の詩によって知られる。自由で、口語で、意図して文学らしくない唐詩の訳であり、現代日本語にその最も引かれる句のいくつかを与えた。中国と日本の飲酒の伝統が二つの伝統ではないことの、最も明快な実証である。",
              zh:"在日本以外，他最為人知的是一部關於廣島的小說；在日本國內，除此之外，他還以《厄除詩集》裡的飲酒詩聞名——那是自由的、口語的、刻意不文學的唐詩翻譯，為現代日語提供了幾則最常被引用的句子。他是「中國與日本的飲酒傳統並非兩個傳統」最清楚的證明。" } },
          { term:{ en:"The difficult ones", ja:"難しい人々", zh:"困難的那些人" }, jp:"太宰治・坂口安吾ほか", romaji:"Dazai Osamu, Sakaguchi Ango",
            def:{ en:"The postwar writers around whom sake romanticism is thickest were, in several cases, people in serious trouble with alcohol and with much else. Their bars are pilgrimage sites and their lines appear on drinks menus. It is possible to admire the writing, to find the bars genuinely moving, and to be clear that what is being commemorated in some of these cases is an illness. This site would rather say that than print the quotation and move on.",
              ja:"日本酒の浪漫が最も濃く取り巻く戦後の書き手たちは、少なからぬ場合、酒と、その他多くのものとにおいて深く難儀していた人々であった。彼らの酒場は巡礼の地であり、その句は飲み物の品書きに現れる。書かれたものを敬い、酒場を真に胸を打つものと感じ、そして同時に、これらのいくつかにおいて記念されているのが病であることを明らかにしておくことはできる。この場所は、引用を刷って先へ進むよりも、そう言っておきたい。",
              zh:"清酒的浪漫想像最濃厚地環繞著的那幾位戰後作家，其中不少人在酒精以及許多其他事情上都陷得很深。他們的酒吧成了朝聖地，他們的句子出現在飲品菜單上。你完全可以敬重那些作品、覺得那些酒吧真的動人，同時也把話說清楚：在其中某些案例裡被紀念的，其實是一種疾病。比起把引言印上去然後翻頁，本站寧願把這句話說出來。" } }
        ] }
      ] },

    { t:"section", id:"names",
      title:{ en:"Brands that are quotations", ja:"引用である銘柄", zh:"本身就是引文的品牌" }, jp:"銘柄と典拠",
      body:[
        { t:"p", text:{
          en:"Because brewery families were literate and their customers were too, a large number of sake brands are not invented words at all but references — to a poem, a Zen phrase, a piece of court music, a mountain. Knowing the source turns a label from a sound into a sentence.",
          ja:"蔵の家が文字を読み、その客もまた読んだがゆえに、少なからぬ日本酒の銘柄は作られた語ではなく、引きである。詩へ、禅の語へ、雅楽の曲へ、山へのそれである。典拠を知ることは、札を音から文へと変える。",
          zh:"由於酒藏家族識字，他們的顧客也識字，因此有相當多的清酒品牌根本不是生造的詞，而是引用——引自一首詩、一句禪語、一支雅樂曲、一座山。知道出處，會讓一張酒標從一個聲音變成一個句子。" } },
        { t:"table",
          caption:{ en:"Where some familiar names come from", ja:"馴染みのある名の出どころ", zh:"一些熟悉的名字從何而來" },
          cols:[{ en:"Name", ja:"銘柄", zh:"品牌" }, { en:"Reading", ja:"読み", zh:"讀音" }, { en:"Source", ja:"典拠", zh:"出處" }],
          jpCols:[0], keyCol:0,
          rows:[
            ["李白", "Rihaku", { en:"The Tang poet, straightforwardly. A Matsue house took the name of the most famous drinker in East Asian literature, and it was reportedly chosen for them by a prime minister who came from the same town.", ja:"素直に、唐の詩人である。松江の一軒が、東亜の文学において最も名高い飲み手の名を取った。同じ町の出である総理大臣が選んだと伝えられる。", zh:"直截了當，就是那位唐代詩人。松江的一家酒藏取了東亞文學中最著名飲者的名字；據說是由一位同鄉的首相為他們選定的。" }],
            ["而今", "Jikon", { en:"A Zen term meaning <em>this present moment</em>, prominent in Dōgen's writing — not the past, not the future, only now. For a brewery that rebuilt itself in one generation it reads as a statement of method rather than a decoration.", ja:"禅の語であり、まさに今この時を意味する。道元の書に際立つ語である。過去でも未来でもなく、ただ今である。一代で自らを建て直した蔵にとって、それは飾りではなく方法の表明として読める。", zh:"一個禪門用語，意為「此時此刻」，在道元的著作中極為重要——不是過去，不是未來，只有現在。對一家在一代之內重建自己的酒藏而言，它讀起來是一則方法的宣示，而非裝飾。" }],
            ["春鶯囀", "Shun'ōten", { en:"The name of a piece of gagaku, the court orchestral music, itself borrowed from Tang China: the warbling of the spring nightingale. A Yamanashi brand carrying a thousand-year-old piece of music as its label.", ja:"雅楽の曲の名であり、それ自体が唐の中国から借りられている。春の鶯の囀りである。千年を経た楽の一曲を札として負う山梨の銘柄である。", zh:"雅樂——宮廷管絃樂——中一支曲子的名稱，而該曲本身借自唐代中國：春日黃鶯的囀鳴。這是一個以一千年前的樂曲作為酒標的山梨品牌。" }],
            ["黒龍", "Kokuryū", { en:"The Kuzuryū river that supplies the brewery's water, read through a different set of characters. A great many brand names are rivers and mountains hiding in plain sight.", ja:"蔵の水を供する九頭竜川を、別の字で読ませたものである。きわめて多くの銘柄の名が、見える所に隠れた川と山である。", zh:"供應該酒藏用水的九頭龍川，以另一組漢字來讀。有非常多的品牌名，就是明擺著卻藏起來的河與山。" }],
            ["醸し人九平次", "Kamoshibito Kuheiji", { en:"'Kuheiji, the person who brews' — the hereditary name every head of that house has taken, with a job description attached. A brand name that is also a signature.", ja:"「醸す人、九平次」。その家の当主が代々名乗ってきた襲名に、務めの記述を添えたものである。署名でもある銘柄の名である。", zh:"「釀酒的人，九平次」——那個家族歷代當家所承襲的名號，再加上一段職務說明。一個同時也是簽名的品牌名。" }],
            ["正宗", "Masamune", { en:"The most reused name in Japanese sake, and the subject of the best story: a nineteenth-century Kyoto brewer took it from a Buddhist term, <em>seishū</em>, which is also how 清酒 is read. It spread so widely that it could not be registered as a trademark when the law arrived, and so it stayed free for everyone.", ja:"日本酒において最も繰り返し用いられる名であり、最も良い話の主題である。十九世紀の京の造り手が、仏の語である清酒——せいしゅう——から取った。それは清酒の読みでもある。あまりに広く広まったため、法が到来したときに商標として登録しえず、ゆえに誰にとっても自由なままとなった。", zh:"日本清酒中被重複使用最多的名字，也是最好的一則故事的主角：十九世紀一位京都釀造者取自佛教用語「正宗（せいしゅう）」，而這也正是「清酒」的讀音。它流傳得太廣，以致商標法到來時無法被註冊，於是就對所有人保持自由。" }]
          ] },
        { t:"tiny", text:{
          en:"More on naming, houses and the trademark story is on <a href=\"brands.html\">Brands &amp; Houses</a>; the characters themselves are read on <a href=\"kanji.html\">The Characters on the Bottle</a>.",
          ja:"名付けと家と商標の話については<a href=\"brands.html\">銘柄と蔵元</a>に、字そのものの読みについては<a href=\"kanji.html\">瓶の上の漢字</a>にある。",
          zh:"關於命名、酒藏與商標的故事見<a href=\"brands.html\">品牌與酒藏</a>；文字本身的解讀見<a href=\"kanji.html\">瓶身上的漢字</a>。" } }
      ] },

    { t:"related", items:[
      { href:"words.html", why:{ en:"The vocabulary the poems draw on, listed and glossed.", ja:"詩が汲む語彙を、一覧と註とともに。", zh:"詩所汲取的語彙，逐條列出並加註。" } },
      { href:"history.html", why:{ en:"The centuries each of these poems was written inside.", ja:"これらの詩が書かれた、それぞれの世紀。", zh:"這些詩各自被寫下的那些世紀。" } },
      { href:"kanji.html", why:{ en:"The characters themselves, and what they were built from.", ja:"文字そのものと、それが何から組まれたか。", zh:"那些字本身，以及它們是用什麼組成的。" } },
      { href:"media.html", why:{ en:"The same subject in the century that had television.", ja:"同じ主題を、テレビのあった世紀において。", zh:"同一個主題，在有電視的那個世紀裡。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- words */
SAKE.pages["words"] = {
  kicker: { en: "Foundations · 10", ja: "基礎 · 10", zh: "基礎 · 10" },
  title:  { en: "The Words Around the Cup", ja: "杯をめぐる言葉", zh: "圍繞著杯的語言" },
  jp: "酒の言葉",
  lede: {
    en: "Japanese has an enormous vocabulary for drinking — for how much you can take, for how you take it, for what happens to you afterwards, and for the exact social register of the occasion. A good deal of it arrived from classical Chinese and is still legible to a reader of Chinese today, sometimes with the same meaning and sometimes with a trap laid in it. This page collects the proverbs, the verbs, the names for drinkers and the phrases you will actually hear at a table, and sets the Japanese beside the Chinese it came from.",
    ja: "日本語は飲むことについて巨きな語彙を持つ。どれほど受けうるか、いかに受けるか、そののち身に何が起こるか、そしてその場の社交の位について。その多くは漢文より来たり、今日の中国語の読み手にもなお読める。時に同じ意で、時に罠を仕掛けられて。この頁は、諺と、動詞と、飲み手の名と、卓で実際に耳にする言い回しとを集め、日本語を、それが来た中国語のかたわらに置く。",
    zh: "日語擁有一套龐大的飲酒詞彙——關於你能喝多少、你怎麼喝、喝完之後你會怎樣，以及那個場合精確的社交層級。其中很大一部分來自古漢語，至今對中文讀者仍然可讀，有時意思相同，有時裡頭埋著陷阱。本頁蒐集諺語、動詞、對飲者的稱呼，以及你在酒桌上真正會聽到的語句，並把日語擺在它所由來的中文旁邊。"
  },
  body: [

    { t:"section", id:"hyakuyaku",
      title:{ en:"The most quoted line, and where it came from", ja:"最も引かれる一句と、その出どころ", zh:"最常被引用的那句話，以及它的來歷" }, jp:"百薬の長",
      body:[
        { t:"p", text:{
          en:"Every drinker in Japan knows sake wa hyakuyaku no chō — sake is the chief of a hundred medicines. It is said cheerfully, usually while pouring, and it is generally understood as folk wisdom about moderate drinking being good for you. Its actual origin is considerably less charming.",
          ja:"日本のいかなる飲み手も、酒は百薬の長を知っている。それは陽気に、たいていは注ぎながら述べられ、おおむね、程よく飲むことは身に良いという民の智慧と解されている。その実の出どころは、はるかに愛らしさに乏しい。",
          zh:"日本每一位飲者都知道「酒は百薬の長」——酒為百藥之長。它總是被愉快地說出來，通常一邊斟酒一邊說，而人們大致把它理解為「適量飲酒有益健康」的民間智慧。它真正的來歷，可就沒那麼可愛了。" } },

        { t:"quote",
          text:{ en:"夫鹽，食肴之將；酒，百藥之長，嘉會之好 — Salt is the general of food; wine is the chief of a hundred medicines and the ornament of a happy gathering.",
            ja:"夫れ塩は食肴の将、酒は百薬の長、嘉会の好——塩は食の将であり、酒は百薬の長であり、めでたき集いの飾りである。",
            zh:"「夫鹽，食肴之將；酒，百藥之長，嘉會之好」——鹽是食物的統帥；酒是百藥之長，也是佳會的美飾。" },
          cite:{ en:"Book of Han, Treatise on Food and Money — from an edict of Wang Mang", ja:"漢書・食貨志——王莽の詔より", zh:"《漢書・食貨志》——出自王莽的詔令" } },

        { t:"p", text:{
          en:"The sentence is from an imperial proclamation establishing state monopolies on salt, iron and alcohol. Wang Mang was not offering health advice; he was explaining why the state should be the only body permitted to sell these three things. The most repeated defence of drinking in East Asia is, at source, a piece of revenue policy — which puts it in exactly the same family as the Japanese law that made home brewing a crime nineteen centuries later.",
          ja:"この一文は、塩と鉄と酒に国の専売を定めた詔から来ている。王莽は健康の助言をしていたのではない。なぜ国のみがこの三つを売ることを許されるべきかを説いていたのである。東アジアにおいて最も繰り返される飲むことの弁護は、その源において歳入の政策の一片である。それは、十九世紀のちに家での醸造を罪とした日本の法と、まさしく同じ一族に属する。",
          zh:"這句話出自一份確立鹽、鐵、酒國家專賣的詔令。王莽並不是在提供健康建議；他是在解釋為什麼只有國家才該被允許販售這三樣東西。東亞最常被複誦的飲酒辯詞，究其根源是一項財政政策——這讓它與十九個世紀之後把家釀定為犯罪的那部日本法律，屬於一模一樣的家族。" } },

        { t:"p", text:{
          en:"Japan noticed. In the fourteenth century Yoshida Kenkō quotes the line in Essays in Idleness and immediately undercuts it: sake may be the chief of a hundred medicines, but every illness begins in it. The pairing is worth keeping. When someone raises the first half at a table, the second half is already part of the saying.",
          ja:"日本はそれに気づいていた。十四世紀、吉田兼好は徒然草においてこの句を引き、直ちにそれを掘り崩す。酒は百薬の長かもしれぬが、万の病は酒よりこそ起これ、と。この対は保つ値打ちがある。誰かが卓で前半を挙げるとき、後半はすでにその言葉の一部である。",
          zh:"日本注意到了這一點。十四世紀，吉田兼好在《徒然草》中引用了這句話，並隨即拆穿它：酒或許是百藥之長，但萬病皆從酒起。這個配對值得記住。當有人在桌上舉出前半句時，後半句早就已經是這句話的一部分了。" } }
      ] },

    { t:"section", id:"proverbs",
      title:{ en:"Proverbs, and their Chinese relatives", ja:"諺と、その中国語の縁者", zh:"諺語，以及它們的中文親戚" }, jp:"諺",
      body:[
        { t:"table",
          caption:{ en:"What Japanese says about drink, and what Chinese says beside it", ja:"日本語が酒について述べること、そのかたわらで中国語が述べること", zh:"日語如何談酒，以及中文在旁邊說了什麼" },
          cols:[ { en:"Japanese", ja:"日本語", zh:"日語" },
                 { en:"Reads as", ja:"読み", zh:"讀音" },
                 { en:"What it means", ja:"意", zh:"意思" },
                 { en:"Chinese counterpart", ja:"中国語の対応", zh:"中文對應" } ],
          jpCols:[0,3],
          rows:[
            [ "酒は本心を現す", "sake wa honshin o arawasu",
              { en:"Drink shows what a person actually thinks. Said approvingly as often as as a warning, and it underwrites a whole social practice: the drinking party as the place where things can finally be said.",
                ja:"酒は人が実に思うところを現す。戒めとして述べられるのと同じほどしばしば、良きこととして述べられ、一つの社交の営みを支えている。すなわち、ものごとがついに述べられうる場としての酒席である。",
                zh:"酒會顯出一個人真正在想什麼。這句話被讚許地說出的次數，不亞於被當成警告；而它支撐著一整套社交實踐：酒席作為「事情終於可以說出口」的場合。" },
              "酒後吐真言" ],
            [ "酒は百薬の長", "sake wa hyakuyaku no chō",
              { en:"See above. Still in daily use, still quoted at the second glass, still originally a tax measure.",
                ja:"上を見られたい。今なお日々用いられ、今なお二杯目で引かれ、そして今なお、もとは税の方策である。",
                zh:"見上文。至今仍在日常使用，至今仍在第二杯時被引用，也至今仍舊源自一項稅收措施。" },
              "酒為百藥之長" ],
            [ "親の意見と冷酒は後で効く", "oya no iken to hiyazake wa ato de kiku",
              { en:"A parent's advice and cold sake both take effect later. One of the best pieces of physiology in any proverb tradition: cold sake goes down easily and the alcohol arrives afterwards.",
                ja:"親の意見も冷酒も、後になって効いてくる。いかなる諺の伝えにおいても最良の生理学の一つである。冷たい酒は容易に下り、酒精は後から届く。",
                zh:"父母的話與冷酒，都是後來才起作用。這是任何諺語傳統中最好的生理學之一：冷酒容易下嚥，而酒精是隨後才到的。" },
              { en:"—", ja:"—", zh:"（無直接對應）" } ],
            [ "御神酒上がらぬ神はない", "omiki agaranu kami wa nai",
              { en:"There is no god who does not accept sake. Deployed as a defence when someone declines to drink, and, as this site's page on Shinto explains, substantially true.",
                ja:"御神酒を召さぬ神はない。誰かが飲むことを辞するときの弁として繰り出され、そしてこの場の神事の頁が説くとおり、おおむね事実である。",
                zh:"沒有不受御神酒的神。當有人推辭不喝時，這句話會被搬出來當擋箭牌；而正如本站神事那一頁所說明的，它大致上是真的。" },
              { en:"—", ja:"—", zh:"（無直接對應）" } ],
            [ "酒に飲まれる", "sake ni nomareru",
              { en:"To be drunk by the sake — the grammatical reversal does the whole work. Not \"he drank too much\" but \"the drink drank him\".",
                ja:"酒に飲まれる。文法の逆転が働きのすべてをなす。「飲みすぎた」ではなく「酒が彼を飲んだ」である。",
                zh:"被酒喝掉——文法上的反轉承擔了全部的表達力。不是「他喝太多了」，而是「酒把他喝了」。" },
              "被酒所困" ],
            [ "酒池肉林", "shuchi-nikurin",
              { en:"A lake of wine and a forest of meat: extravagance to the point of decadence. Both languages use it, both know it comes from the last king of Shang, and in both it is a criticism rather than a compliment.",
                ja:"酒の池と肉の林。頽廃に至る奢りである。両の言葉がこれを用い、両ともに殷の最後の王より来ることを知り、そして両において、それは讃えではなく難じである。",
                zh:"酒池肉林：奢靡到頹廢的地步。兩種語言都用它，都知道它出自商朝末代之君，而在兩者之中，它都是批評而非讚美。" },
              "酒池肉林" ],
            [ "駆けつけ三杯", "kaketsuke sanbai",
              { en:"Three cups for the latecomer. A ritual penalty for arriving after the party has started, still used, mostly in fun, and best treated as a joke you may decline.",
                ja:"遅れて来た者に三杯。宴の始まったのちに着くことへの儀の罰であり、今なお、たいていは戯れとして用いられる。辞してよい冗談として扱うのが最も良い。",
                zh:"遲到者三杯。對在宴會開始之後才到場者的一種儀式性懲罰，至今仍在使用，多半是玩笑性質，最好把它當成一個你可以推掉的玩笑。" },
              "遲到罰三杯" ],
            [ "無礼講", "bureikō",
              { en:"A gathering at which rank is suspended. Announced by the most senior person present, which tells you everything about how suspended it actually is.",
                ja:"位を措く集いである。その場の最も上の人によって宣される。それが実際にどれほど措かれているかについて、それがすべてを告げる。",
                zh:"一場暫時取消位階的聚會。由在場位階最高的人宣布——這一點就把「實際上取消到什麼程度」全都說完了。" },
              { en:"—", ja:"—", zh:"（無直接對應）" } ],
            [ "酒は憂いの玉箒", "sake wa urei no tamahahaki",
              { en:"Sake is the jewelled broom that sweeps away sorrow — a phrase Su Shi used of wine and Japanese poets borrowed wholesale.",
                ja:"酒は憂いを掃う玉の箒である。蘇軾が酒について用い、日本の歌人がそのまま借りた句である。",
                zh:"酒是掃去憂愁的玉帚——蘇軾用來說酒的句子，被日本詩人整句借了過去。" },
              "掃愁帚" ],
            [ "一杯は人酒を飲む、二杯は酒酒を飲む、三杯は酒人を飲む", "ippai wa hito sake o nomu…",
              { en:"At the first cup the person drinks the sake; at the second the sake drinks the sake; at the third the sake drinks the person. A Chinese formulation with a long life in Japan, and the most compact description of an evening ever written.",
                ja:"一杯は人酒を飲み、二杯は酒酒を飲み、三杯は酒人を飲む。中国に由来し日本に長く生きた言い方であり、一夕についてこれまでに書かれた最も短い記述である。",
                zh:"第一杯是人喝酒，第二杯是酒喝酒，第三杯是酒喝人。一個源自中國、在日本活了很久的說法，也是有史以來對一個夜晚最精簡的描述。" },
              "一杯人飲酒，二杯酒飲酒，三杯酒飲人" ]
          ] },

        { t:"note", label:{ en:"A note for readers of Chinese", ja:"中国語の読み手への註", zh:"給中文讀者的一個提醒" },
          text:{
            en:"The shared idioms are genuinely shared — 酒池肉林 means the same thing in Taipei and in Tokyo, and a Japanese speaker who uses it is quoting the same Records of the Grand Historian you are. But the register can differ sharply. 無礼講 has no Chinese equivalent because the social structure it suspends is specific; 駆けつけ三杯 exists in both cultures but is enforced far more seriously in some Chinese drinking contexts than in most Japanese ones.",
            ja:"分かたれた成語は真に分かたれている。酒池肉林は台北においても東京においても同じことを意味し、それを用いる日本語の話し手は、あなたと同じ史記を引いている。だが位は鋭く異なりうる。無礼講に中国語の等価がないのは、それが措く社会の構えが固有のものだからである。駆けつけ三杯は両の文化に存するが、ある中国語の酒席においては、ほとんどの日本の場よりはるかに真剣に課される。",
            zh:"共有的成語是真的共有：酒池肉林在台北與在東京意思相同，而使用它的日語使用者引的是與你同一部《史記》。但語域可能差異極大。「無礼講」沒有中文對應，因為它所暫停的那套社會結構是特有的；「遲到罰三杯」兩種文化都有，但在某些華人酒桌上被執行得遠比多數日本場合認真。" } }
      ] },

{ t:"section", id:"drinkers",
      title:{ en:"Names for the people drinking", ja:"飲む人の名", zh:"對飲者的稱呼" }, jp:"上戸と下戸",
      body:[
        { t:"p", text:{
          en:"Japanese sorts drinkers by capacity with more precision than most languages bother with, and the vocabulary is affectionate rather than judgemental at every point on the scale — including at the bottom, which matters more than it sounds.",
          ja:"日本語は飲み手をその容れうる量によって、ほとんどの言葉が労を割かぬほどの精しさで分ける。そしてその語彙は、目盛りのいずれの点においても、裁きではなく情のものである。最も下の端においてもそうであり、それは聞こえるより重んじられるべきことである。",
          zh:"日語以比多數語言更精細的方式，依酒量把飲者分門別類，而這套語彙在刻度上的每一點都是親暱而非評判的——包括最底端；這件事比聽起來更重要。" } },

        { t:"figure",
          caption:{
            en:"The Japanese scale of drinking capacity, with the nearest Chinese expressions beneath. None of the Japanese terms is an insult; the two at the far right are, if anything, admiring.",
            ja:"日本語における酒量の目盛り。下に最も近い中国語の言い方を添えた。日本語の語のいずれも侮りではない。右の端の二つは、むしろ讃えである。",
            zh:"日語裡的酒量刻度，下方附上最接近的中文說法。日語裡沒有任何一個詞是侮辱；最右邊那兩個若要說，反而是讚嘆。" },
          svg: function (lang, L) {
            var W = 780, H = 154, X0 = 34, X1 = W - 34, Y = 88;
            var items = [
              { p:0.00, ja:"下戸", en:"geko", g:{ en:"does not drink", ja:"まったく飲めぬ", zh:"完全不能喝" }, zh:"滴酒不沾" },
              { p:0.17, ja:"弱い", en:"yowai", g:{ en:"one glass, pink", ja:"一杯で赤くなる", zh:"一杯就臉紅" }, zh:"不勝酒力" },
              { p:0.34, ja:"嗜む", en:"tashinamu", g:{ en:"a careful drinker", ja:"心得て飲む", zh:"淺酌有度" }, zh:"小酌" },
              { p:0.51, ja:"左党", en:"sat\u014d", g:{ en:"fond of a drink", ja:"酒を好む", zh:"愛喝一杯" }, zh:"好杯中物" },
              { p:0.68, ja:"酒豪", en:"shug\u014d", g:{ en:"a real capacity", ja:"真の量を持つ", zh:"酒量真好" }, zh:"海量" },
              { p:0.85, ja:"ザル", en:"zaru", g:{ en:"a colander", ja:"笊。素通り", zh:"竹篩，直接流過" }, zh:"千杯不醉" },
              { p:1.00, ja:"蟒蛇", en:"uwabami", g:{ en:"a python", ja:"大蛇", zh:"蟒蛇" }, zh:"酒國英雄" }
            ];
            function px(p) { return X0 + p * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<defs><linearGradient id="wg" x1="0" y1="0" x2="1" y2="0">' +
                 '<stop offset="0" stop-color="#F0EDE4"/><stop offset="1" stop-color="#C0AF8E"/></linearGradient></defs>';
            s += '<rect x="' + X0 + '" y="' + (Y - 7) + '" width="' + (X1 - X0) + '" height="14" fill="url(#wg)"/>';
            for (var i = 0; i < items.length; i++) {
              var it = items[i], x = px(it.p);
              var anchor = i === 0 ? "start" : (i === items.length - 1 ? "end" : "middle");
              s += '<line x1="' + x + '" y1="' + (Y - 7) + '" x2="' + x + '" y2="' + (Y + 7) + '" stroke="#FBFAF7"/>';
              s += '<rect x="' + (x - 3) + '" y="' + (Y - 3) + '" width="6" height="6" fill="#55504A"/>';
              /* above the bar: the Japanese term */
              s += '<text x="' + x + '" y="' + (Y - 34) + '" text-anchor="' + anchor + '" font-size="15" fill="#201E1B">' + it.ja + '</text>';
              s += '<text x="' + x + '" y="' + (Y - 19) + '" text-anchor="' + anchor + '" font-size="9.5" fill="#8B857C" font-style="italic">' + it.en + '</text>';
              /* below the bar: gloss, then the Chinese */
              s += '<text x="' + x + '" y="' + (Y + 28) + '" text-anchor="' + anchor + '" font-size="10" fill="#55504A">' + L(it.g) + '</text>';
              s += '<text x="' + x + '" y="' + (Y + 46) + '" text-anchor="' + anchor + '" font-size="10.5" fill="#7C6B52">' + it.zh + '</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Jōgo and geko", ja:"上戸と下戸", zh:"上戶與下戶" }, jp:"上戸・下戸", romaji:"jōgo / geko",
            def:{ en:"The standard pair: one who can drink and one who cannot. The traditional explanation traces them to the household ranks of the ancient ritsuryō administration — upper households were permitted more sake at a wedding than lower ones — and while the etymology is folk rather than proven, it is universally repeated and worth knowing for that reason alone. What matters socially is that geko is a neutral statement of fact, not an apology. Saying it once is enough to stop being offered.",
              ja:"標準の対である。飲みうる者と飲みえぬ者。伝えの説きは、これらを古代の律令の家の等級にまで遡らせる。上の戸は婚において下の戸より多くの酒を許された、と。語源としては証されたものではなく民のものであるが、あまねく繰り返されるゆえ、その一事のために知る値打ちがある。社交において重んじられるのは、下戸が詫びではなく、中立の事実の言明であるということである。一度述べれば、勧められることはやむ。",
              zh:"標準的一組：能喝的人與不能喝的人。傳統解釋把它們追溯到古代律令制的戶等——上戶在婚禮上被允許的酒量多於下戶。這個詞源屬於民間說法而非經證實，但因為它被普遍複誦，光憑這一點就值得知道。在社交上要緊的是：「下戶」是一句中性的事實陳述，不是道歉。說一次就足以讓人停止勸酒。" } },
          { term:{ en:"Satō — the left party", ja:"左党", zh:"左黨" }, jp:"左党", romaji:"satō",
            def:{ en:"Someone who prefers drink to sweets, with utō, the right party, as its opposite. The image is a carpenter holding a chisel in the left hand and a mallet in the right — the left hand being the nomi-te, which is also the word for a drinker. It is a pun that has outlived the trade it came from.",
              ja:"甘いものより酒を好む者であり、その対は右党である。像は、鑿を左手に、槌を右手に持つ大工である。左の手は鑿手であり、それは飲み手と同じ音である。それが生まれた生業を生き延びた地口である。",
              zh:"偏愛酒勝過甜食的人，其對面是「右黨」。這個意象來自木匠：左手持鑿、右手持槌——左手是「鑿手」（nomi-te），而那正好與「飲手」同音。這是一個活得比它所出自的行業還久的雙關。" } },
          { term:{ en:"Zaru and waku", ja:"ザルとワク", zh:"竹篩與框" }, jp:"笊・枠", romaji:"zaru / waku",
            def:{ en:"A zaru is a bamboo colander: the drink passes straight through and nothing is retained. A waku is a frame — a colander with the mesh removed, so not even the pretence of resistance. The escalation is affectionate and entirely characteristic of how the language treats capacity: as a comic property rather than a moral one.",
              ja:"笊は竹の籠である。酒はそのまま通り抜け、何も留まらぬ。枠は縁のみである。網を外した笊であり、抗う素振りすら残っていない。この上げ方は情のこもったものであり、この言葉が量をいかに扱うかをまったく特徴づけている。すなわち、徳の性質ではなく、可笑しみの性質として扱うのである。",
              zh:"「笊」是竹篩：酒直接穿過去，什麼也留不住。「枠」是框——一個把網子拆掉的篩子，連抵抗的樣子都不裝了。這種層層加碼是帶著情意的，也完全體現了這套語言如何看待酒量：把它當成一件滑稽的屬性，而不是道德的屬性。" } }
        ] }
      ] },

    { t:"section", id:"other-names",
      title:{ en:"The other names for it", ja:"酒の異名", zh:"酒的別名" }, jp:"異名",
      body:[
        { t:"p", text:{
          en:"Almost none of these are Japanese inventions. They are classical Chinese kennings that arrived with the literature, were adopted wholesale, and are still used in Japanese today — on labels, in brand names, and in the sort of speech a host reaches for when pouring the first cup. Several of them are arguments in miniature: the same liquid is heaven's salary, the broom that sweeps sorrow away, and the drug that makes men mad, depending on who is naming it.",
          ja:"このうち日本の発明はほとんどない。いずれも文とともに渡ってきた漢籍の異名であり、まるごと受け入れられ、今日の日本語においてもなお用いられている——酒標に、銘に、そして最初の一杯を注ぐ主人が手を伸ばす類の言葉に。そのいくつかは小さな論である。同じ液が、天の禄であり、憂いを掃く帚であり、人を狂わせる薬である。名づける者が誰かによって。",
          zh:"這些幾乎沒有一個是日本的發明。它們都是隨著文獻渡海而來的漢語別稱，被整批接收，至今仍活在日語裡——出現在酒標上、品牌名中，以及主人斟第一杯時會伸手取用的那類語言裡。其中有幾個本身就是一場微型辯論：同一種液體，既是上天的俸祿、是掃去憂愁的掃帚，也是使人發狂的藥——端看命名者是誰。" } },

        { t:"table",
          caption:{ en:"Names for sake, and where each came from", ja:"酒の異名と、その出どころ", zh:"酒的別名，及其出處" },
          cols:[{ en:"Name", ja:"異名", zh:"別名" }, { en:"Reading", ja:"読み", zh:"日文讀音" }, { en:"What it says", ja:"言わんとするところ", zh:"它在說什麼" }, { en:"Where from", ja:"出典", zh:"出處" }],
          jpCols:[0],
          rows:[
            ["天之美禄", "てんのびろく",
             { en:"Heaven's fine salary — a thing issued to humanity rather than earned by it.", ja:"天の美しき禄。人が稼いだのではなく、人に給されたものである。", zh:"上天賜下的美好俸祿——不是人賺來的，而是發給人的。" },
             { en:"<em>Hanshu</em>, the Book of Han, in the treatise on food and money: 酒者、天之美祿.", ja:"『漢書』食貨志——「酒者、天之美禄」。", zh:"《漢書・食貨志》：「酒者，天之美祿。」" }],
            ["忘憂物", "ぼうゆうぶつ",
             { en:"The thing that makes you forget your sorrows. Not a claim that the sorrows go away.", ja:"憂いを忘れさせるもの。憂いが去るとは言っていない。", zh:"使你忘卻憂愁之物——但沒有說憂愁會消失。" },
             { en:"Tao Yuanming, fourth century, who wrote of steeping himself in 此忘憂物.", ja:"四世紀の陶淵明。「此の忘憂の物に汎かぶ」と詠んだ。", zh:"四世紀的陶淵明，寫下「汎此忘憂物」。" }],
            ["掃愁帚", "そうしゅうそう",
             { en:"The broom that sweeps sorrow out. Su Shi's, and paired with the next one.", ja:"憂いを掃き出す帚。蘇軾のものであり、次の一つと対をなす。", zh:"把憂愁掃出去的掃帚。出自蘇軾，並與下一個成對。" },
             { en:"Su Shi, eleventh century: 應呼釣詩鉤、亦號掃愁帚.", ja:"十一世紀の蘇軾——「應に釣詩鉤と呼ぶべく、亦た掃愁帚と號す」。", zh:"十一世紀蘇軾：「應呼釣詩鉤，亦號掃愁帚。」" }],
            ["釣詩鉤", "ちょうしこう",
             { en:"The hook you fish poems up with. The most flattering thing anyone has said about drinking.", ja:"詩を釣り上げる鉤。飲むことについて誰かが述べた最も好意的な言葉である。", zh:"用來把詩釣上來的鉤子。這是任何人對飲酒說過最恭維的一句話。" },
             { en:"The same couplet of Su Shi's.", ja:"同じ蘇軾の対句。", zh:"出自蘇軾同一聯。" }],
            ["般若湯", "はんにゃとう",
             { en:"Wisdom-soup. Temple slang, invented so that a monk under a precept against alcohol could ask for some without saying its name.", ja:"智慧の湯。寺の隠語であり、不飲酒戒のもとにある僧が、その名を口にせずに求めうるように作られた。", zh:"般若（智慧）之湯。寺院隱語，為了讓持不飲酒戒的僧人能不說出它的名字而討來一些。" },
             { en:"Japanese Buddhist usage, from <em>prajñā</em>, wisdom. Still current, and still slightly funny.", ja:"日本の仏教の用語。般若＝智慧より。今なお用いられ、今なお少し可笑しい。", zh:"日本佛教用語，取自「般若」（prajñā，智慧）。至今仍在使用，也至今仍有點好笑。" }],
            ["聖人・賢人", "せいじん・けんじん",
             { en:"The sage and the worthy — clear sake and cloudy sake, under a prohibition that made both unnameable.", ja:"聖人と賢人。清酒と濁酒であり、その双方を名指しえなくした禁令のもとでの呼びである。", zh:"聖人與賢人——即清酒與濁酒；在一道讓兩者都不能直呼其名的禁令之下產生。" },
             { en:"<em>Records of the Three Kingdoms</em>, Wei: under Cao Cao's ban, drinkers called the clear one the sage and the murky one the worthy.", ja:"『三国志』魏書。曹操の禁酒令のもと、飲む者は清きを聖人、濁れるを賢人と呼んだ。", zh:"《三國志・魏書》：曹操禁酒期間，飲者稱清者為聖人、濁者為賢人。" }],
            ["狂薬", "きょうやく",
             { en:"The drug that makes men mad. The counter-name, and the one the temperance side of the argument has always used.", ja:"人を狂わせる薬。反対の名であり、禁酒の側が常に用いてきた語である。", zh:"使人發狂的藥。這是反面的名字，也是主張節制的一方一向使用的說法。" },
             { en:"Chinese usage, 酒為狂藥, current in Japanese from the medieval period onward.", ja:"漢語の「酒は狂薬たり」。日本では中世以降に用いられる。", zh:"漢語「酒為狂藥」；日本自中世以降沿用。" }],
            ["竹葉", "ちくよう",
             { en:"Bamboo leaf — from the colour of a good clear wine held up to the light.", ja:"竹の葉。光に透かした良き清酒の色から。", zh:"竹葉——來自一杯好清酒對光舉起時的顏色。" },
             { en:"Chinese poetic usage; survives in the Chinese liquor name 竹葉青.", ja:"漢詩の用語。中国の酒名「竹葉青」に残る。", zh:"漢詩用語；至今留存於中國酒名「竹葉青」。" }],
            ["ささ", "笹",
             { en:"Court women's word for sake, written with the character for bamboo grass. One of the few entries here that is Japanese rather than borrowed.", ja:"女房詞の酒。笹の字を当てる。ここに並ぶもののうち、借りものでなく日本のものである数少ない一つである。", zh:"宮中女官語中的「酒」，以「笹」（小竹）字書寫。這是本表中少數並非借自漢語、而確屬日本的詞之一。" },
             { en:"<em>Nyōbō kotoba</em>, the vocabulary of the women of the imperial household, from the Muromachi period.", ja:"室町期の女房詞——宮中に仕えた女たちの語彙。", zh:"室町時期的「女房詞」——侍奉宮中的女性所用的詞彙。" }],
            ["御神酒", "おみき",
             { en:"The god's sake. Not a euphemism but a category: sake that has been offered, and is drunk afterwards as a share of the offering.", ja:"神の酒。婉曲ではなく区分である。供えられ、そののち御下がりとして分かち飲まれる酒である。", zh:"神的酒。這不是委婉語而是一個類別：已供奉過、其後作為供品的分享而飲用的酒。" },
             { en:"Shintō practice. See <a href=\"shinto.html\">Sake and the Gods</a>.", ja:"神道の習い。<a href=\"shinto.html\">神と酒</a>を参照。", zh:"神道的儀式。見<a href=\"shinto.html\">神與酒</a>。" }]
          ] },

        { t:"panel", tint:"koji",
          title:{ en:"Why a prohibition produces nicknames", ja:"禁令が異名を生む理由", zh:"禁令為何會生出別名" },
          body:[
            { t:"p", text:{
              en:"Two of the entries above — the sage and the worthy, and wisdom-soup — exist for exactly the same reason, eighteen hundred years and a sea apart. When a rule forbids a thing by name, the thing acquires another name, and the new name is understood by everyone who needs to understand it and deniable to everyone else. It is worth noticing that neither euphemism was ever secret. Both are recorded in the literature of the institutions that banned the drinking, which suggests the ban and the nickname were operating as a single arrangement rather than as opponents.",
              ja:"上の二つ——聖人と賢人、そして般若湯——は、千八百年と一つの海を隔てて、まったく同じ理由で在る。規則が或るものをその名によって禁ずるとき、そのものは別の名を得る。そして新しい名は、解する必要のある者すべてに解され、他のすべてに対しては言い逃れうる。いずれの婉曲も秘されてはいなかったことに注意する値打ちがある。双方とも、飲むことを禁じた当の組織の文献に記されている。禁令と異名とは、対立する者としてではなく、一つの取り決めとして働いていたのだろう。",
              zh:"上表中的兩項——聖人與賢人，以及般若湯——存在的理由完全相同，儘管相隔一千八百年與一片海。當規則以某物之名禁止它時，該物就會取得另一個名字；而這個新名字，對所有需要懂的人都是懂的，對其他所有人則都可以否認。值得注意的是，這兩種委婉語都從未真正保密：兩者都被記載在那些禁止飲酒的機構自己的文獻裡——這意味著禁令與別名並非對立的兩造，而是同一套安排的兩面。" } }
          ] }
      ] },

    { t:"section", id:"stages",
      title:{ en:"The six stages, as Japan names them", ja:"酔いの六段", zh:"醉的六個階段" }, jp:"酔いの段階",
      body:[
        { t:"p", text:{
          en:"Japanese has a standard, named, six-step scale for how drunk a person is, and it is not folklore: it is the scale used in public health material, in workplace training and on the back of a good many bottles. Knowing the names is genuinely useful, because the first three are the part of the range anyone is drinking for and the last two are a medical emergency described in polite language.",
          ja:"日本語には、人がどれほど酔っているかについて、名を持つ六段の標準の尺度がある。そしてそれは俗信ではない。公衆衛生の資料に、職場の講習に、そして少なからぬ瓶の裏に用いられている尺度である。名を知ることは実際に有用である。初めの三つは誰もがそのために飲む範囲であり、最後の二つは、礼ある言葉で述べられた医療の緊急事態だからである。",
          zh:"日語有一套具名的六階段標準量表，用來描述一個人醉到什麼程度；而它並非民間傳說，而是公衛資料、職場講習與相當多酒瓶背標上所使用的量表。知道這些名稱確實有用：前三個階段是任何人喝酒所追求的區間，而最後兩個階段，則是以有禮的語言所描述的醫療急症。" } },

        { t:"figure",
          caption:{
            en:"The six named stages against blood alcohol concentration, with the amount of sake that typically produces each. The figures assume a person of about sixty kilograms drinking over roughly half an hour, and they move enormously with body mass, with sex, with food in the stomach and with the enzyme variant a person inherited — which is why a chart like this is a vocabulary lesson rather than a dosing table. The last two bands are not stages of enjoyment; they are the clinical picture of acute alcohol poisoning, and they are on the same axis because that is the honest thing to do.",
            ja:"名を持つ六つの段階を、血中アルコール濃度に対して置き、それぞれを典型的に生じる酒の量を添えたもの。数値はおよそ六十キログラムの人がおよそ三十分かけて飲む場合を前提としており、体重によって、性によって、胃の中の食べものによって、そして受け継いだ酵素の型によって大きく動く。この種の図が投与の表ではなく語彙の課である理由がそこにある。最後の二つの帯は楽しみの段階ではない。急性アルコール中毒の臨床の像であり、同じ軸の上に置いてあるのは、それが正直だからである。",
            zh:"六個具名階段對應血中酒精濃度，並附上通常會造成各階段的清酒量。數值假設一位約六十公斤的人在大約半小時內飲用，而它會隨體重、性別、胃中食物，以及此人所遺傳的酵素型別而大幅變動——這正是為什麼這類圖表是一堂詞彙課，而不是一張劑量表。最後兩段並不是享受的階段，而是急性酒精中毒的臨床樣貌；把它們放在同一條軸上，是因為那樣才誠實。" },
          svg: function (lang, L) {
            var W = 760, H = 378, X0 = 178, X1 = 700, Y0 = 62, RH = 40, MAX = 0.5;
            function px(v) { return X0 + v / MAX * (X1 - X0); }
            var rows = [
              { a:0.02, b:0.04, f:"#EDF1F2", jp:"爽快期", rom:"sōkai-ki",
                n:{ en:"the bright stage", ja:"そうかいき", zh:"爽快期" },
                g:{ en:"under one gō", ja:"一合未満", zh:"未滿一合" },
                d:{ en:"skin flushes, mood lifts, judgement already slightly off", ja:"肌が赤らみ、気が晴れ、判断はすでにわずかに狂う", zh:"皮膚泛紅、心情上揚，判斷已略有偏差" } },
              { a:0.05, b:0.10, f:"#E7DFD2", jp:"ほろ酔い期", rom:"horoyoi-ki",
                n:{ en:"pleasantly tipsy", ja:"ほろよいき", zh:"微醺期" },
                g:{ en:"one to two gō", ja:"一〜二合", zh:"一至二合" },
                d:{ en:"warmth, talk, the reason most people drink at all", ja:"温もり、饒舌。そもそも人が飲む理由である", zh:"溫暖、話多——多數人喝酒的理由本來就在這裡" } },
              { a:0.11, b:0.15, f:"#DACFB8", jp:"酩酊初期", rom:"meitei-shoki",
                n:{ en:"early intoxication", ja:"めいていしょき", zh:"酩酊初期" },
                g:{ en:"three gō", ja:"三合", zh:"三合" },
                d:{ en:"loud, repetitive, unsteady on stairs", ja:"声が大きく、話が繰り返され、階段が危うい", zh:"聲音變大、話語重複、上下樓梯不穩" } },
              { a:0.16, b:0.30, f:"#C0AF8E", jp:"酩酊期", rom:"meitei-ki",
                n:{ en:"intoxication", ja:"めいていき", zh:"酩酊期" },
                g:{ en:"four to six gō", ja:"四〜六合", zh:"四至六合" },
                d:{ en:"double vision, staggering, memory beginning to fail", ja:"ものが二重に見え、千鳥足になり、記憶が欠け始める", zh:"複視、步履蹣跚，記憶開始出現缺口" } },
              { a:0.31, b:0.40, f:"#A08F73", jp:"泥酔期", rom:"deisui-ki",
                n:{ en:"dead drunk", ja:"でいすいき", zh:"泥醉期" },
                g:{ en:"seven gō to a shō", ja:"七合〜一升", zh:"七合至一升" },
                d:{ en:"cannot stand or speak clearly; no memory will be formed", ja:"立てず、言葉も明らかでない。記憶は残らない", zh:"站不住、話說不清；不會形成任何記憶" }, danger:true },
              { a:0.41, b:0.50, f:"#7C6B52", jp:"昏睡期", rom:"konsui-ki",
                n:{ en:"coma", ja:"こんすいき", zh:"昏睡期" },
                g:{ en:"more than a shō", ja:"一升以上", zh:"一升以上" },
                d:{ en:"unrousable; breathing depressed; this kills people every year", ja:"揺すっても起きず、呼吸が抑えられる。毎年、人が死んでいる", zh:"搖不醒、呼吸受抑；每年都有人因此死亡" }, danger:true }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + rows.length * RH, g, i;
            for (g = 0; g <= 5; g++) {
              var gv = g * 0.1;
              s += '<line x1="' + px(gv).toFixed(1) + '" y1="' + (Y0 - 10) + '" x2="' + px(gv).toFixed(1) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(gv).toFixed(1) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + gv.toFixed(1) + '</text>';
            }
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], y = Y0 + i * RH;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 14) + '" text-anchor="end" font-size="12" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 27) + '" text-anchor="end" font-size="8.5" fill="#ADA79E">' + r.rom + ' · ' + L(r.g) + '</text>';
              s += '<rect x="' + px(r.a).toFixed(1) + '" y="' + (y + 3) + '" width="' + (px(r.b) - px(r.a)).toFixed(1) + '" height="22" fill="' + r.f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (r.danger ? (px(r.a) - 9) : (px(r.b) + 9)).toFixed(1) + '" y="' + (y + 18) + '" text-anchor="' + (r.danger ? "end" : "start") +
                   '" font-size="9.5" fill="' + (r.danger ? "#7C6B52" : "#8B857C") + '">' + L(r.d) + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + px(0.31).toFixed(1) + '" y1="' + (Y0 - 22) + '" x2="' + px(0.31).toFixed(1) + '" y2="' + BOT + '" stroke="#7C6B52" stroke-dasharray="5 3"/>';
            s += '<text x="' + (px(0.31) + 8).toFixed(1) + '" y="' + (Y0 - 26) + '" font-size="10" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "ここから先は救急である" : lang === "zh" ? "由此往後是急症" : "past here it is an emergency") + '</text>';
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "血中アルコール濃度・パーセント" : lang === "zh" ? "血中酒精濃度・百分比" : "BLOOD ALCOHOL CONCENTRATION, PER CENT") + '</text>';
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "六十キログラムの人が三十分で飲んだ場合のおおよそである。体重、性、食事、酵素の型で大きく変わる。"
                  : lang === "zh" ? "以六十公斤者於三十分鐘內飲用為前提的概值；會因體重、性別、進食與酵素型別而大幅改變。"
                  : "Approximate, for a sixty-kilogram person drinking over half an hour. Body mass, sex, food and inherited enzymes move it a great deal.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"note", label:{ en:"If someone reaches the last two bands", ja:"最後の二つに至ったなら", zh:"若有人到了最後兩段" }, text:{
          en:"Someone who cannot be roused, whose breathing is slow or irregular, or who is cold and pale, is not sleeping it off — that is acute alcohol poisoning, and it is the reason Japan's universities run an annual campaign about it. The practical instructions given in Japanese first-aid guidance are: do not leave them alone, do not let them lie on their back, keep them warm, and call an ambulance. Nothing about this is culturally specific; it is included here because a page about the vocabulary of drunkenness would be dishonest without the end of the scale in it.",
          ja:"揺すっても起きぬ者、呼吸が遅いか不規則な者、冷たく蒼ざめた者は、酔いを寝て醒ましているのではない。急性アルコール中毒である。日本の大学が毎年これについての啓発を行う理由がそこにある。日本の救急の手引きが示す実際の指示はこうである——一人にしないこと、仰向けに寝かせないこと、温かく保つこと、そして救急車を呼ぶこと。これに文化に固有のものは何もない。ここに記すのは、酔いの語彙についての頁が、尺度の終わりを欠いては不誠実であるからである。",
          zh:"一個搖不醒、呼吸緩慢或不規則、或身體冰冷蒼白的人，並不是在「睡一睡就好」——那是急性酒精中毒，也是日本各大學每年為此進行宣導的原因。日本急救指引給出的實際指示是：不要讓他獨處、不要讓他仰躺、保持身體溫暖，並叫救護車。這其中沒有任何文化特殊性；之所以寫在這裡，是因為一個談論醉酒詞彙的頁面，若略去量表的末端，便不誠實。" } },

        { t:"tiny", text:{
          en:"The scale is the one published by the Alcohol Health and Medical Association and reproduced widely in Japanese public-health material. The sake equivalents are given in gō because that is how the original states them; one gō is 180 millilitres.",
          ja:"この尺度は公益社団法人アルコール健康医学協会が公にし、日本の公衆衛生の資料に広く引かれているものである。酒の量を合で示したのは、原典がそう述べているからである。一合は百八十ミリリットルである。",
          zh:"此量表出自公益社團法人酒精健康醫學協會，並被日本公衛資料廣泛引用。清酒的換算以「合」表示，因為原始出處即如此；一合為一百八十毫升。" } }
      ] },

    { t:"section", id:"yojijukugo",
      title:{ en:"Four characters at a time", ja:"酒の四字熟語", zh:"與酒有關的四字成語" }, jp:"四字熟語",
      body:[
        { t:"p", text:{
          en:"The four-character compound is a form Japanese and Chinese share completely, and the drinking ones travel without translation. A Taiwanese reader meeting these on a Japanese page will recognise every one; the readings differ and the meanings do not.",
          ja:"四字熟語は日本語と中国語が完全に共有する形であり、酒のそれらは訳を要さずに渡る。日本語の頁でこれらに出会う台湾の読み手は、そのすべてを解するであろう。読みは異なり、意は異ならない。",
          zh:"四字成語是日語與中文完全共有的一種形式，而與酒有關的那些，不需翻譯就能通行。台灣讀者在日語頁面上遇見它們時，每一個都認得；讀音不同，意思則毫無二致。" } },

        { t:"defs", items:[
          { term:{ en:"A pool of wine and a forest of meat", ja:"酒池肉林", zh:"酒池肉林" }, jp:"酒池肉林", romaji:"shuchi nikurin",
            def:{ en:"The <em>Records of the Grand Historian</em> describes the last king of Shang filling a pond with wine and hanging meat from the trees around it, and the phrase has meant ruinous excess ever since. It is worth knowing that the Japanese usage has drifted: in modern Japanese it often carries a lurid, specifically sexual connotation that the Chinese original does not, which is a small trap for a reader crossing between the two.",
              ja:"『史記』は殷の最後の王が池を酒で満たし、その周りの樹に肉を懸けたと記す。以来この語は、身を滅ぼす奢りを意味してきた。知っておく値打ちがあるのは、日本語の用法が漂ったことである。現代の日本語では、漢籍の原意にはない、性的で猥雑な含みを帯びることが多い。二つのあいだを渡る読み手にとっての小さな罠である。",
              zh:"《史記》記載殷商末代君王以酒為池、懸肉於周圍樹上，此語自此即意指足以敗亡的奢靡。值得一提的是，日語用法已有漂移：在現代日語中，它常帶有漢語原典所沒有的、明確指向性方面的淫靡意味——這是往返於兩種語言的讀者會遇上的一個小陷阱。" } },
          { term:{ en:"Cups and dishes in disarray", ja:"杯盤狼藉", zh:"杯盤狼藉" }, jp:"杯盤狼藉", romaji:"haiban rōzeki",
            def:{ en:"The state of a table after the party. It comes from a passage in the <em>Records of the Grand Historian</em> in which the jester Chunyu Kun tells his king exactly how much he can drink and under what conditions — a little in front of the king, a great deal among friends with the lamps low — and the phrase preserves the scene it was coined in.",
              ja:"宴ののちの卓の様である。『史記』滑稽列伝の一節に由る。淳于髠が己の飲みうる量と、その条となる場とを王に述べる——王の前では僅か、灯を落とした友のあいだでは大いに——その場面を、この語は保っている。",
              zh:"宴席之後桌面的樣子。出自《史記・滑稽列傳》中的一段：淳于髡向君王細述自己能喝多少、以及在什麼條件下——在君王面前只能少許，在燈火昏暗的朋友之間則能大飲——這句成語保存了它所由來的那個場面。" } },
          { term:{ en:"Facing the wine, one should sing", ja:"対酒当歌", zh:"對酒當歌" }, jp:"対酒当歌", romaji:"taishu tōka",
            def:{ en:"Cao Cao's line, and the opening of one of the most quoted poems in Chinese: facing the wine one should sing, for how long is a human life? It is the source of the register that a great deal of later drinking poetry, Japanese included, is written in — the cup as a place from which mortality is briefly visible and briefly bearable.",
              ja:"曹操の句であり、漢詩のうち最も引かれる一つの冒頭である——酒に対して当に歌うべし、人生幾何ぞ。のちの飲みの詩の多くが、日本のものも含め、そこで書かれる位を定めた出どころである。杯とは、死すべきことがしばし見え、しばし耐えうるものとなる場所である。",
              zh:"曹操之句，也是漢詩中最常被引用的作品之一的開篇：對酒當歌，人生幾何。後世大量飲酒詩——包括日本的——所使用的語域，源頭即在於此：杯子，是一個能短暫看見、也短暫承受得住「人終有一死」的位置。" } },
          { term:{ en:"A wine sack and a rice bag", ja:"酒嚢飯袋", zh:"酒囊飯袋" }, jp:"酒嚢飯袋", romaji:"shunō hantai",
            def:{ en:"A person who does nothing but consume — a container for drink and food and no more. One of the sharpest insults the classical language offers, and entirely intact in both modern languages.",
              ja:"消費するばかりの人である。酒と飯の容れ物であって、それ以上ではない。漢文の差し出す最も鋭い罵りの一つであり、現代の両語においてまったく損なわれていない。",
              zh:"一個除了消耗之外什麼也不做的人——裝酒與裝飯的容器，如此而已。這是古典語言所能提供最鋒利的辱罵之一，而它在現代的兩種語言中都完好無損。" } },
          { term:{ en:"To live drunk and die dreaming", ja:"酔生夢死", zh:"醉生夢死" }, jp:"酔生夢死", romaji:"suisei mushi",
            def:{ en:"A life passed without ever being awake to it. The phrase is Song-dynasty neo-Confucian and was meant severely, as a diagnosis of a wasted existence rather than a description of a good night out — which is how it is still used in both languages, and which is why nobody has ever put it on a bottle.",
              ja:"それに醒めることのないまま過ぎる生である。宋の道学の語であり、厳しく言われた。良き一夜の描写ではなく、費やされた一生の診断としてである。両語において今なおそのように用いられており、誰もこれを瓶に刷らなかった理由でもある。",
              zh:"一生就這麼過去，卻從未對它清醒過。此語出自宋代理學，語氣嚴厲：它是對虛擲一生的診斷，而非對一個愉快夜晚的描述——兩種語言至今都如此使用，這也是為什麼從來沒有人把它印在酒瓶上。" } }
        ] }
      ] },

    { t:"section", id:"three-views",
      title:{ en:"Snow, moon and blossom", ja:"雪月花の酒", zh:"雪月花之酒" }, jp:"季節の飲み方",
      body:[
        { t:"p", text:{
          en:"Three compounds name a way of drinking rather than a drink, and between them they cover the year. Each is the same sake, drunk outdoors, with the point of the occasion in front of you — and the grammar is worth noticing, because in all three the thing being viewed comes first and the sake comes second.",
          ja:"三つの語は、飲みものではなく飲み方に名を与え、三つで一年を覆う。いずれも同じ酒であり、外で、その催しの眼目を前にして飲まれる。そして文法に目を留める値打ちがある。三つとも、見られるものが先に来て、酒が後に来るからである。",
          zh:"三個複合詞命名的不是酒，而是一種飲法；三者合起來覆蓋了一整年。每一種都是同一杯酒，在戶外飲用，眼前擺著這個場合的主角——而它們的構詞值得留意：三者都是被觀看之物在前，酒在後。" } },

        { t:"compare", cols:3, items:[
          { title:{ en:"Blossom-viewing sake", ja:"花見酒", zh:"花見酒" }, jp:"はなみざけ",
            text:{ en:"The loudest of the three and the only one that is a mass event. Sake under cherry blossom is a public occasion with a fixed two-week window, and the drinking is companionable rather than contemplative. The old joke is that nobody at a hanami is looking at the flowers, which has been said in every century since the practice began.",
              ja:"三つのうち最も賑やかであり、唯一の群集の催しである。桜の下の酒は、二週の定まった窓を持つ公の場であり、その飲みは黙想ではなく交わりである。花見で花を見ている者はいないという古い冗談は、この習いの始まって以来、どの世紀にも言われてきた。",
              zh:"三者中最喧鬧的一個，也是唯一屬於群眾的活動。櫻花樹下的酒是一場有著固定兩週窗口的公共場合，而那份飲用是交誼式的，而非沉思式的。「花見時沒有人在看花」這個老笑話，自這個習俗開始以來，每個世紀都有人說。" } },
          { title:{ en:"Moon-viewing sake", ja:"月見酒", zh:"月見酒" }, jp:"つきみざけ",
            text:{ en:"Autumn, and the quietest register of the three. The mid-autumn moon is the occasion, the sake is usually hiyaoroshi — the year's sake released after a summer in tank — and the associated poetry is enormous. This is the one that travels: the same moon, the same festival and much of the same poetry exist across East Asia.",
              ja:"秋であり、三つのうち最も静かな位である。仲秋の月が催しであり、酒はたいていひやおろし——夏を蔵で過ごしたその年の酒——であり、結びつく詩歌は膨大である。渡ってゆくのはこれである。同じ月、同じ節、そして同じ詩歌の多くが、東アジアの各地に在る。",
              zh:"秋天，也是三者中最安靜的語域。中秋之月是這個場合的主角，酒通常是「冷卸」——在酒藏度過一夏之後才出貨的當年酒——而與之相連的詩歌極為龐大。會遠行的是這一個：同一輪月、同一個節慶，以及其中大半相同的詩，遍布整個東亞。" } },
          { title:{ en:"Snow-viewing sake", ja:"雪見酒", zh:"雪見酒" }, jp:"ゆきみざけ",
            text:{ en:"Winter, and the most domestic. Snow-viewing is done from inside a warm room looking out, usually with warmed sake, and the whole point is the contrast between the two sides of the glass. It is also the only one of the three that coincides with the brewing season, which is why the sake in the cup is likely to be the newest thing in the building.",
              ja:"冬であり、最も家の内のものである。雪見は温かな室の内から外を眺めてなされ、酒はたいてい燗であり、その眼目は硝子の両側の対比そのものである。三つのうち唯一、造りの季節と重なるものでもある。杯のなかの酒が、その建物で最も新しいものである見込みが高い理由である。",
              zh:"冬天，也是最居家的一個。雪見是從溫暖的室內向外望，酒通常是溫過的，而整件事的重點，就在於玻璃兩側的對比。它也是三者中唯一與釀造季節重疊的——這正是為什麼杯中的酒，很可能是這棟建築裡最新的東西。" } }
        ] },

        { t:"note", text:{
          en:"<em>Setsugekka</em> — snow, moon and blossom — is itself a set phrase for the beauties of the four seasons, borrowed from a line of Bai Juyi's, and the three drinking compounds are effectively that phrase with a cup added to each term. Japanese does this a great deal: take an existing aesthetic category and attach sake to it, and the result is understood immediately by everyone.",
          ja:"雪月花とは、それ自体が四季の美を指す成語であり、白居易の一句より借りたものである。そして三つの酒の語は、実のところその語の各項に杯を添えたものである。日本語はこれを大いにする。既にある美の範疇を取り、それに酒を付す。結果は直ちに誰にも解される。",
          zh:"「雪月花」本身就是指稱四季之美的成語，借自白居易的一句詩；而這三個飲酒複合詞，實際上就是把那個詞的每一項各配上一只杯子。日語經常這麼做：取一個既有的美學範疇，加上酒，結果立刻人人都懂。" } }
      ] },

    { t:"section", id:"verbs",
      title:{ en:"The verbs", ja:"動詞", zh:"動詞" }, jp:"飲むという語",
      body:[
        { t:"p", text:{
          en:"There are a dozen ways to say \"drink\" in Japanese and the choice is never neutral. The two most useful things to know are that the polite way to describe your own drinking is to understate it, and that the technical verb for tasting sake is not \"taste\" but \"listen\".",
          ja:"日本語には「飲む」と述べる術が十以上あり、その選びは決して中立ではない。知るに最も役立つ二つは、自らの飲みを述べる丁寧な仕方は控えめに述べることであり、そして酒を利くことの専門の動詞は「味わう」ではなく「聞く」であることである。",
          zh:"日語裡有十幾種說「喝」的方式，而這個選擇從來不是中性的。最值得知道的兩件事是：描述自己喝酒時，禮貌的方式是說得保守一點；以及，品評清酒的專業動詞不是「嘗」，而是「聽」。" } },

        { t:"table",
          caption:{ en:"Ways of saying that someone drank", ja:"誰かが飲んだと述べる仕方", zh:"表達「有人喝了」的各種說法" },
          cols:[ { en:"Word", ja:"語", zh:"詞" }, { en:"Reads as", ja:"読み", zh:"讀音" },
                 { en:"Register and use", ja:"位と用い", zh:"語域與用法" } ],
          jpCols:[0],
          rows:[
            [ "飲む", "nomu", { en:"The plain verb. Neutral, universal, and written with the character for drinking generally.", ja:"素の動詞である。中立、普遍、そして飲むこと一般の字で書かれる。", zh:"最基本的動詞。中性、通用，以泛指「飲」的漢字書寫。" } ],
            [ "呑む", "nomu", { en:"The same word written with a character that means to swallow whole. Chosen deliberately by bars and labels for its rougher, more appetitive feel — this is the character on the sign of a place that means business.", ja:"同じ語を、丸ごと呑み込むことを意味する字で書いたものである。酒場や札が、その荒く、より食い気のある感じのために意図して選ぶ。本気の店の看板にある字がこれである。", zh:"同一個詞，但寫成意為「整個吞下」的那個字。酒吧與酒標會刻意選它，取其更粗獷、更帶食慾的感覺——一家來真的的店，招牌上寫的就是這個字。" } ],
            [ "嗜む", "tashinamu", { en:"To take in moderation, with cultivated appreciation. The modest way to say you drink: \"少し嗜みます\" is what a person who drinks rather well says about themselves.", ja:"程よく、素養をもって受けることである。飲むと述べる控えめな仕方であり、「少し嗜みます」とは、かなりよく飲む人が自らについて述べる言い方である。", zh:"有節制地、帶著涵養地享用。這是說自己喝酒的謙遜方式：「少し嗜みます」（略懂一點）正是一個其實很能喝的人對自己的形容。" } ],
            [ "聞く・利く", "kiku", { en:"To listen to, or to be effective. Used for tasting: kikizake, listening to sake. The same verb covers listening to an incense in kōdō, and it carries a specific attitude — the taster is receiving something, not judging it.", ja:"聞くこと、あるいは利くことである。利き酒——酒を聞くこと——に用いる。同じ動詞が香道において香を聞くことをも覆い、そして一つの定まった構えを担う。利く者は何かを受け取っているのであり、裁いているのではない。", zh:"「聽」，或「起作用」。用於品評：利き酒，即「聽酒」。同一個動詞也涵蓋香道中的「聞香」，並承載著一種特定的態度——品評者是在接收某物，而不是在評斷它。" } ],
            [ "呷る", "aoru", { en:"To throw back, to knock it down. Fast, hard, and generally disapproving when applied to another person.", ja:"一気に呷ること、打ち倒すように飲むことである。速く、荒く、そして他の人に用いられたときはおおむね難じである。", zh:"仰頭一飲而盡、灌下去。快、猛，用在別人身上時通常帶著不以為然。" } ],
            [ "きこしめす", "kikoshimesu", { en:"An old honorific for eating, drinking or hearing, now used jokingly for someone who has clearly had a few. The joke works because it is far too grand for the occasion.", ja:"食う、飲む、聞くの古い敬語であり、今は明らかに何杯か重ねた人について戯れに用いる。その戯れが働くのは、それがその場にはあまりに大仰であるからである。", zh:"一個表示吃、喝或聽的古老敬語，如今拿來打趣某個顯然已經喝了幾杯的人。這個玩笑之所以成立，正因為它對那個場合來說太過堂皇。" } ],
            [ "酔う", "you", { en:"To become intoxicated — but also the verb for motion sickness and for being carried away by music or a crowd. Japanese does not reserve a separate word for alcohol; drunkenness is one species of being overwhelmed.", ja:"酔うことである。だがそれは乗り物に酔うことの動詞でもあり、音や人の群れに酔うことの動詞でもある。日本語は酒のために別の語を取り置いてはいない。酔いとは、圧倒されることの一つの種である。", zh:"變得醉——但同一個動詞也用於暈車暈船，以及被音樂或人群所陶醉。日語並沒有為酒精保留一個專門的詞；醉，是「被淹沒」的其中一種。" } ]
          ] },

        { t:"panel", tint:"plum",
          title:{ en:"The phrases you will actually hear", ja:"実際に耳にする言い回し", zh:"你真的會聽到的那些話" },
          body:[
            { t:"defs", items:[
              { term:{ en:"Ikken ikaga", ja:"一献いかが", zh:"一献いかが" }, jp:"一献いかが",
                def:{ en:"\"How about a cup?\" — ikkon is a formal, slightly literary word for one serving of sake, and using it makes the offer courteous rather than casual. The reply, if you want one, is simply to lift your cup.",
                  ja:"「一献いかがですか」。一献は酒一杯を指す改まった、やや文語の語であり、それを用いることは、勧めを気安いものではなく礼あるものにする。受けるならば、答えはただ杯を上げることである。",
                  zh:"「來一杯如何？」——「一献」是指一份酒的正式、略帶文言的說法，用它會讓這個邀請顯得有禮而非隨便。若你想要，回應就只是把杯子舉起來。" } },
              { term:{ en:"Onagare chōdai", ja:"お流れ頂戴", zh:"お流れ頂戴" }, jp:"お流れ頂戴",
                def:{ en:"\"Let me receive the overflow.\" Said when accepting a cup that a senior person has drunk from and passed to you — a genuine honour in a formal setting, and a phrase that instantly marks the speaker as knowing what they are doing.",
                  ja:"「お流れを頂戴します」。目上の人が飲んだ杯を渡されて受けるときに述べる。改まった場においては真の栄誉であり、述べる者が心得ていることを直ちに標す言葉である。",
                  zh:"「請讓我承接您的餘瀝。」在接下一只長輩或上位者飲過並傳給你的杯時說。在正式場合這是真正的榮譽，而這句話會立刻標示出說話者是懂行的。" } },
              { term:{ en:"Tejaku", ja:"手酌", zh:"手酌" }, jp:"手酌",
                def:{ en:"Pouring for yourself. Traditionally slightly rude in company, because the table is supposed to look after each other — and increasingly normal, because the alternative is a constant low-level obligation to watch everyone's cup. Announcing \"tejaku de\" as you pour is a polite way of releasing everyone from the duty.",
                  ja:"自らのために注ぐことである。伝えとしては連れのなかで些か無作法である。卓は互いを見るべきものだからである。そしてますます当たり前となっている。そうでなければ、皆の杯を見続ける絶えざる低い義が生じるからである。注ぎながら「手酌で」と述べることは、その務めから皆を解く礼ある仕方である。",
                  zh:"自己替自己斟。傳統上在有人同席時略嫌失禮，因為酒桌本應互相照應——但它正變得愈來愈常見，因為另一個選項是持續不斷地留意每個人的杯子這種低度義務。一邊倒一邊說一句「手酌で」，是把大家從這份義務中釋放出來的禮貌方式。" } },
              { term:{ en:"Futsukayoi", ja:"二日酔い", zh:"二日醉" }, jp:"二日酔い",
                def:{ en:"Literally the second day's drunkenness — the hangover as a continuation of the drinking rather than a separate event. Chinese says 宿醉, the lodged drunkenness, which makes the same observation with a different metaphor.",
                  ja:"文字どおり二日目の酔いである。二日酔いを、別の出来事ではなく飲みの続きとして捉えている。中国語は宿醉、宿った酔いと述べ、異なる喩えをもって同じ観察をなす。",
                  zh:"字面上是「第二天的醉」——把宿醉視為飲酒的延續，而不是另一件事。中文說「宿醉」，即滯留下來的醉，用不同的比喻做出了同樣的觀察。" } }
            ] }
          ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"kanji.html\">The Characters</a> for the written forms and the false friends, <a href=\"kanpai.html\">Drinking Together</a> for the etiquette these phrases belong to, <a href=\"poetry.html\">Sake in Poetry</a> for the literary register, <a href=\"glossary.html\">Glossary</a> for the technical vocabulary.",
          ja:"関連——書かれた形と偽の友は<a href=\"kanji.html\">瓶の上の漢字</a>、これらの言葉が属する作法は<a href=\"kanpai.html\">共に飲むこと</a>、文の位は<a href=\"poetry.html\">詩歌のなかの酒</a>、技の語彙は<a href=\"glossary.html\">用語集</a>。",
          zh:"相關：書寫形式與假朋友見<a href=\"kanji.html\">瓶身上的漢字</a>；這些語句所屬的禮節見<a href=\"kanpai.html\">一起喝酒這件事</a>；文學語域見<a href=\"poetry.html\">詩歌中的酒</a>；技術詞彙見<a href=\"glossary.html\">詞彙表</a>。" } }
      ] },

    { t:"related", items:[
      { href:"kanji.html", why:{ en:"The characters behind the words, decomposed.", ja:"語の背後の文字を、分解して示す。", zh:"這些詞背後的漢字，逐一拆解。" } },
      { href:"kanpai.html", why:{ en:"The words in use at an actual table.", ja:"実際の卓において用いられる語。", zh:"這些詞在真實餐桌上的用法。" } },
      { href:"glossary.html", why:{ en:"The full alphabetical list, with readings.", ja:"読み付きの完全な五十音順一覧。", zh:"完整的字順總表，附讀音。" } },
      { href:"poetry.html", why:{ en:"The same vocabulary at its most deliberate.", ja:"同じ語彙が最も意識して用いられる場。", zh:"同一套語彙，用得最刻意的地方。" } }
    ] }
  ]
};


/* ---- ----------------------------------------- translation */
SAKE.pages["translation"] = {
  kicker: { en: "Foundations · 11", ja: "基礎 · 11", zh: "基礎 · 11" },
  title:  { en: "Words That Do Not Translate", ja: "訳せない語", zh: "翻譯不過去的詞" },
  jp: "訳",
  lede: {
    en: "This book is written three times over rather than translated once, and the reason is on this page. A handful of the words sake depends on cross into English carrying a claim the Japanese never made; a handful have no English at all and were simply borrowed; and a handful cross into Chinese looking identical, in the same characters, meaning something else. Almost every persistent misunderstanding about sake in English can be traced to one of about a dozen words — and the most damaging of them is the one everyone uses first.",
    ja: "この書は一度訳されたのではなく、三度書かれている。その理由がこの頁にある。日本酒が頼る語のいくつかは、日本語がしたことのない主張を負って英語へ渡る。いくつかは英語をまったく持たず、ただ借りられた。そしていくつかは、同じ漢字のまま、見た目そのままに中国語へ渡り、別のものを意味する。英語における日本酒についての根強い誤解のほとんどすべては、およそ十二の語のいずれかにたどれる——そして最も害の大きいものは、誰もが最初に使う語である。",
    zh: "這本書不是翻譯一次，而是被寫了三次，原因就在本頁。清酒所倚賴的詞當中，有幾個渡進英文時，帶著日文從未提出過的主張；有幾個在英文裡根本不存在，於是就直接被借走；還有幾個以完全相同的漢字渡進中文，看起來一模一樣，意思卻是別的東西。英文世界裡關於清酒的頑固誤解，幾乎全部都能追溯到大約十二個詞的其中之一——而傷害最大的那一個，正是每個人最先用到的那一個。"
  },
  body: [

    { t:"section", id:"modes",
      title:{ en:"Three ways a word fails to cross", ja:"語が渡りそこなう三つの道", zh:"一個詞渡不過去的三種方式" }, jp:"三つの失敗",
      body:[
        { t:"figure",
          caption:{
            en:"One example of each failure mode, with the two destination languages side by side. Note that the failures do not line up: the first word breaks in English and survives in Chinese, the third does the reverse, and the middle one was solved by giving up on translation entirely and lending the Japanese word. Sharing a writing system helps twice as often as it hurts, and when it hurts it hurts silently, because nothing looks wrong.",
            ja:"それぞれの失敗の道の例を一つずつ、二つの行き先の言語を並べて示す。失敗が揃わないことに気をつけられたい。一つ目の語は英語で壊れ、中国語では生き延びる。三つ目は逆である。真ん中のものは、訳すことを完全に諦め、日本語の語を貸すことで解かれた。文字を共にすることは、害するより二倍ほど多く助ける。そして害するときは静かに害する。何も間違って見えないからである。",
            zh:"每一種失敗方式各舉一例，並把兩種目標語言並置。請注意這些失敗並不對齊：第一個詞在英文裡壞掉、在中文裡存活；第三個正好相反；而中間那個，是靠著徹底放棄翻譯、把日文詞借出去才解決的。共用一套文字系統帶來的幫助，大約是它造成傷害的兩倍；而當它造成傷害時，它是安靜地造成的——因為看起來一點問題也沒有。" },
          svg: function (lang, L) {
            var W = 760, H = 320;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var cols = [
              { cx:140, jp:"辛口",
                mode:{ en:"THE WORD EXISTS, AND LIES", ja:"語はあるが、偽る", zh:"詞存在，但說了謊" },
                en1:{ t:"“dry”", ok:false, n:{ en:["implies low","residual sugar"], ja:["残糖が少ないと","含意する"], zh:["暗示殘糖低"] } },
                zh1:{ t:"辛口", ok:true, n:{ en:["same characters,","same sense"], ja:["同じ字、同じ意"], zh:["同樣的字，","同樣的意思"] } },
                v:{ en:"An axis of perception read as a measurement.", ja:"知覚の軸が、計測として読まれる。", zh:"一條感知的軸，被讀成了一個量測值。" } },
              { cx:380, jp:"旨味",
                mode:{ en:"NO WORD EXISTS", ja:"語がない", zh:"沒有這個詞" },
                en1:{ t:"umami", ok:true, n:{ en:["borrowed, not","translated"], ja:["訳さず借りた"], zh:["直接借用，","不翻譯"] } },
                zh1:{ t:"鮮味", ok:true, n:{ en:["a real equivalent","already existed"], ja:["本当の対応語が","あった"], zh:["本來就有","對應的詞"] } },
                v:{ en:"The gap was closed by lending the word.", ja:"語を貸すことで隙が埋まった。", zh:"這個缺口，是靠把詞借出去補上的。" } },
              { cx:620, jp:"米酒",
                mode:{ en:"SAME CHARACTERS, OTHER THING", ja:"同じ字、別の物", zh:"同樣的字，不同的東西" },
                en1:{ t:"“rice wine”", ok:false, n:{ en:["vague, but","harmlessly so"], ja:["曖昧だが害はない"], zh:["含糊，但無害"] } },
                zh1:{ t:"米酒", ok:false, n:{ en:["in Taiwan, a","distilled spirit"], ja:["台湾では蒸留酒"], zh:["在台灣是蒸餾酒"] } },
                v:{ en:"Identical on the page, unrelated in the glass.", ja:"紙の上では同一、杯のなかでは無縁。", zh:"在紙上一模一樣，在杯子裡毫無關係。" } }
            ];
            var i, di;
            for (di = 1; di <= 2; di++)
              s += '<line x1="' + (20 + di * 240) + '" y1="34" x2="' + (20 + di * 240) + '" y2="262" stroke="#F0EDE4"/>';
            for (i = 0; i < cols.length; i++) {
              var c = cols[i], cx = c.cx;
              s += '<text x="' + cx + '" y="34" text-anchor="middle" font-size="9" letter-spacing=".14em" font-weight="600" fill="#ADA79E">' + L(c.mode) + '</text>';
              /* the Japanese term */
              s += '<rect x="' + (cx - 46) + '" y="56" width="92" height="36" fill="#EDE5D2" stroke="#C0AF8E"/>';
              s += '<text x="' + cx + '" y="80" text-anchor="middle" font-size="16" fill="#201E1B">' + c.jp + '</text>';
              /* arrows */
              s += '<path d="M' + cx + ' 92 L' + cx + ' 106 L' + (cx - 58) + ' 106 L' + (cx - 58) + ' 124" fill="none" stroke="#C9C1B4"/>';
              s += '<path d="M' + cx + ' 92 L' + cx + ' 106 L' + (cx + 58) + ' 106 L' + (cx + 58) + ' 124" fill="none" stroke="#C9C1B4"/>';
              s += '<path d="M' + (cx - 62) + ' 124 L' + (cx - 58) + ' 132 L' + (cx - 54) + ' 124 Z" fill="#C9C1B4"/>';
              s += '<path d="M' + (cx + 54) + ' 124 L' + (cx + 58) + ' 132 L' + (cx + 62) + ' 124 Z" fill="#C9C1B4"/>';
              /* destination boxes */
              var dests = [
                { x: cx - 108, lab: "EN", d: c.en1 },
                { x: cx + 8,   lab: "ZH", d: c.zh1 }
              ], k;
              for (k = 0; k < 2; k++) {
                var dd = dests[k], bx = dd.x;
                s += '<rect x="' + bx + '" y="136" width="100" height="44" fill="' + (dd.d.ok ? "#FBFAF7" : "#EFEDE7") + '" stroke="' + (dd.d.ok ? "#CDC6B9" : "#B4AC9C") + '"/>';
                s += '<text x="' + (bx + 8) + '" y="150" font-size="8.5" letter-spacing=".16em" fill="#ADA79E">' + dd.lab + '</text>';
                s += '<text x="' + (bx + 50) + '" y="168" text-anchor="middle" font-size="12.5" fill="#201E1B">' + dd.d.t + '</text>';
                /* a filled square marks a word that does not carry across */
                if (!dd.d.ok) s += '<rect x="' + (bx + 86) + '" y="143" width="7" height="7" fill="#7C6B52"/>';
              }
              for (k = 0; k < 2; k++) {
                /* the note is an array of short lines, so it never runs into
                   the note beside it; L() must not be used on an array. */
                var nl = dests[k].d.n[lang] || dests[k].d.n.en, q;
                for (q = 0; q < nl.length; q++)
                  s += '<text x="' + (dests[k].x + 50) + '" y="' + (194 + q * 11) + '" text-anchor="middle" font-size="8.5" fill="#8B857C">' + nl[q] + '</text>';
              }
              s += '<line x1="' + (cx - 100) + '" y1="222" x2="' + (cx + 100) + '" y2="222" stroke="#E7DFD2"/>';
              s += '<text x="' + cx + '" y="240" text-anchor="middle" font-size="9.5" fill="#7C6B52">' + L(c.v) + '</text>';
            }
            s += '<rect x="20" y="' + (H - 26) + '" width="7" height="7" fill="#7C6B52"/>';
            s += '<text x="34" y="' + (H - 19) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "塗られた四角は、渡りそこなった語である。中国語の欄は台湾の用法による。"
                  : lang === "zh" ? "實心方塊表示這個詞沒有渡過去。中文欄位依台灣的用法。"
                  : "A filled square marks a word that did not carry across. The Chinese column follows Taiwanese usage.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The middle column is the one to learn from. Nobody translated <em>umami</em>; English took the Japanese word whole, and the result is the only one of the three that causes no trouble at all. Translation fails when it half-succeeds — when a word arrives that is close enough to use and wrong enough to mislead — and the safest response to a term with no equivalent is very often to leave it alone.",
          ja:"学ぶべきは真ん中の列である。誰も旨味を訳さなかった。英語は日本語の語をまるごと取り、その結果は三つのうちただ一つ、まったく面倒を起こさない。訳が失敗するのは半ば成功したときである——用いるに足るほど近く、誤らせるに足るほど違う語が届いたときに。対応語のない語への最も安全な応じ方は、しばしば、そのままにしておくことである。",
          zh:"該學的是中間那一欄。沒有人翻譯「旨味」；英文把日文的詞整個拿走，而結果是三者之中唯一完全不惹麻煩的。翻譯出問題的時刻，是它「半成功」的時候——當一個近到足以使用、又錯到足以誤導的詞抵達的時候。面對一個沒有對應詞的術語，最安全的做法往往是：別動它。" } }
      ] },

    { t:"section", id:"karakuchi",
      title:{ en:"The worst one: karakuchi as “dry”", ja:"最悪のもの——辛口を dry と訳すこと", zh:"最糟的那一個：把辛口譯成 dry" }, jp:"辛口",
      body:[
        { t:"p", text:{
          en:"The character 辛 does not mean dry. It means pungent, hot, sharp — it is the character in the word for chilli heat and in the word for salty. <em>Karakuchi</em> is one end of an axis whose other end is <em>amakuchi</em>, sweet-mouthed, and the axis is about how a sake reads, not about how much sugar is in it. English handed it the word “dry”, which in wine means residual sugar below a threshold, and in doing so converted a perception into a measurement.",
          ja:"辛の字は乾いていることを意味しない。それは辛いこと、鋭いことを意味する。唐辛子の辛さの語にあり、塩からいの語にある字である。辛口は、その反対の端を甘口とする軸の一端であり、その軸は、酒がどう読めるかについてのものであって、糖がどれだけ入っているかについてのものではない。英語はそこへ dry の語を渡した。葡萄酒において dry とは、ある閾より下の残糖を意味する。そうすることで、知覚は計測へ変えられた。",
          zh:"「辛」這個字並不表示乾。它的意思是辛辣、刺激、銳利——它是「辣」這個詞裡的字，也是「鹹」這個詞裡的字。辛口是一條軸的一端，另一端是甘口；而這條軸講的是一支酒讀起來如何，不是裡面有多少糖。英文遞給它的詞是 dry，而 dry 在葡萄酒裡指的是低於某個門檻的殘糖——這麼一來，一種感知就被換成了一個量測值。" } },
        { t:"grid", cols:1, cells:[
          { k:{ en:"Why the substitution is not harmless", ja:"なぜその置き換えは無害でないか", zh:"為什麼這個代換並非無害" }, jp:"害",
            v:{ en:"It creates a number to chase, and the number is the wrong one.", ja:"追うべき数を生み、そしてその数は誤っている。", zh:"它製造出一個可以追逐的數字，而那個數字是錯的。" },
            d:{ en:"Once “dry” is the word, a reader looks for the dryness figure, finds the sake meter value, and treats a high positive number as a promise. But sake meter value is a density reading: it moves with every dissolved solid, and it moves the wrong way with alcohol. Acidity, which is not on that axis at all, does more to decide whether a sake reads as dry than the sugar does. Two sakes at +3 with acidity 1.0 and 1.8 are not the same drink, and the second is the one an English speaker will call dry. See <a href=\"numbers.html\">Numbers &amp; Chemistry</a>.",
              ja:"dry の語がひとたび定まれば、読み手は乾きの数を探し、日本酒度を見つけ、大きな正の数を約束として扱う。しかし日本酒度は比重の読みである。溶けたあらゆるものとともに動き、そしてアルコールとは逆の向きに動く。その軸の上にまったく載っていない酸度のほうが、酒が辛く読めるかどうかを、糖より多く決める。日本酒度＋三で酸度一・〇の酒と一・八の酒は同じ飲み物ではなく、英語話者が辛口と呼ぶのは後者である。<a href=\"numbers.html\">数と化学</a>を見られたい。",
              zh:"一旦「dry」成了那個詞，讀者就會去找「乾度」的數字，找到日本酒度，然後把一個大的正值當成一項保證。但日本酒度是比重讀數：它會隨著每一種溶解物移動，而且遇到酒精時往反方向移動。而酸度——它根本不在那條軸上——比糖更能決定一支酒讀起來辛不辛口。同樣是 +3，酸度 1.0 與 1.8 的兩支酒不是同一種飲料，而英語使用者會稱為 dry 的，是後者。請見<a href=\"numbers.html\">數字與化學</a>。" } },
          { k:{ en:"What to say instead", ja:"代わりに何と言うか", zh:"那該怎麼說" }, jp:"言い換え",
            v:{ en:"Say what the sake does, not which end of a scale it sits on.", ja:"尺度のどちらの端にあるかではなく、その酒が何をするかを言う。", zh:"說這支酒做了什麼，而不是它落在量表的哪一端。" },
            d:{ en:"“Clean and firm”, “finishes short”, “no sweetness on the back palate”, “acid carries it away quickly” — all of these say something a drinker can check, and none of them makes a claim about a laboratory figure. When the Japanese word is meant, the honest thing is to use it and gloss it once: <em>karakuchi</em>, a sake that reads taut rather than round. This book does that, which is why <em>karakuchi</em> appears untranslated throughout and <em>tanrei karakuchi</em> is never rendered as “light and dry” without saying what those words are doing.",
              ja:"「清らかで締まっている」「後味が短い」「後口に甘さが残らない」「酸が速く連れ去る」——いずれも飲み手が確かめうることを述べ、いずれも実験室の数について主張しない。日本語の語が意図されているならば、正直なのは、それを用いて一度だけ注を付けることである。辛口——丸くではなく張って読める酒。この書はそうしており、ゆえに辛口は全体を通じて訳されずに現れ、淡麗辛口が、その語が何をしているかを述べずに light and dry と置き換えられることはない。",
              zh:"「乾淨而結實」「尾韻短」「後段沒有甜味」「酸把它快速帶走」——這些都說出了飲者可以驗證的事，而且都沒有對任何實驗室數字提出主張。當真正要說的是那個日文詞時，誠實的做法是直接使用它並註解一次：辛口，一支讀起來緊繃而非圓潤的酒。本書就是這麼做的，所以「辛口」全書都不翻譯，而「淡麗辛口」也絕不會在沒有說明這些詞在做什麼的情況下，被寫成 light and dry。" } }
        ] }
      ] },

    { t:"section", id:"umami",
      title:{ en:"The word English gave up on", ja:"英語が諦めた語", zh:"英文放棄翻譯的那個詞" }, jp:"旨味",
      body:[
        { t:"timeline", items:[
          { year:"1866", jp:"独逸",
            title:{ en:"The compound, without the taste", ja:"味なき化合物", zh:"有化合物，沒有味道" },
            text:{ en:"Glutamic acid is identified by the German chemist Ritthausen. It is a substance in a bottle; nobody has yet argued that it corresponds to a taste of its own.",
              ja:"グルタミン酸が独逸の化学者リットハウゼンによって同定される。それは瓶のなかの物質であり、それが固有の味に対応するとは、まだ誰も論じていない。",
              zh:"麩胺酸由德國化學家里特豪森指認。那是瓶子裡的一種物質；還沒有人主張它對應著一種自己的味道。" } },
          { year:"1908", jp:"昆布",
            title:{ en:"Ikeda names a fifth taste", ja:"池田、第五の味に名を与える", zh:"池田為第五種味道命名" },
            text:{ en:"Ikeda Kikunae determines that the component responsible for the savour of kombu dashi is glutamic acid, and gives the taste a name of his own coining. The chemistry was forty-two years old; what he added was the claim that this was a taste in its own right, separate from sweet, salt, sour and bitter — and a word for it.",
              ja:"池田菊苗が、昆布の出汁のうまさを担う成分がグルタミン酸であると定め、その味に自ら作った名を与える。化学は四十二年を経ていた。彼が加えたのは、これが甘・鹹・酸・苦とは別の、それ自体一つの味であるという主張と——そのための一語であった。",
              zh:"池田菊苗確定昆布高湯之所以鮮美，來自麩胺酸，並為這種味道取了一個自己創造的名字。那個化學已經有四十二年歷史了；他加上去的，是「這是一種獨立於甜、鹹、酸、苦之外的味道」這個主張——以及一個詞。" } },
          { year:"1909", jp:"商品",
            title:{ en:"And a product", ja:"そして商品", zh:"以及一項商品" },
            text:{ en:"Sodium glutamate is commercialised the following year by the Suzuki pharmaceutical business, later Ajinomoto. The word and the product travel together for most of the next century, which is part of why English took a long time to accept the taste as a taste.",
              ja:"翌年、グルタミン酸ナトリウムが鈴木の製薬の事業——のちの味の素——によって商品化される。語と商品は、続く一世紀のほとんどを共に旅した。英語がこの味を一つの味として受け入れるのに長くかかった理由の一端は、そこにある。",
              zh:"隔年，麩胺酸鈉由鈴木的製藥事業——後來的味之素——商品化。在接下來的大半個世紀裡，這個詞與這項商品結伴而行；這也是英文花了很久才把這種味道當成一種味道來接受的原因之一。" } },
          { year:"—", jp:"借用",
            title:{ en:"Borrowed, not translated", ja:"訳されず、借りられた", zh:"被借用，而非翻譯" },
            text:{ en:"When English finally needed the concept it did not build a word; it took Ikeda's. “Savouriness”, “meatiness”, “brothiness” were all tried and all failed, because each of them names an example rather than the category. Chinese did have a native equivalent to hand — <em>xiānwèi</em>, 鮮味 — and used it, which is why the Chinese text of this book says 鮮味 where the English says umami.",
              ja:"英語がついにその概念を必要としたとき、語を作りはせず、池田の語を取った。savouriness、meatiness、brothiness はいずれも試され、いずれも敗れた。そのそれぞれが、範疇ではなく一つの例を名指すからである。中国語には手元に生来の対応語があった——鮮味である——そしてそれを用いた。この書の中国語の本文が、英語が umami と言うところで鮮味と言うのは、そのためである。",
              zh:"當英文終於需要這個概念時，它沒有造一個詞，而是拿走了池田的。savouriness、meatiness、brothiness 都試過，也都失敗了，因為它們各自命名的是一個例子，而不是那個範疇。中文手邊本來就有一個固有的對應詞——鮮味——並且用了它；這也是為什麼本書的中文版在英文說 umami 的地方說「鮮味」。" } }
        ] },
        { t:"tiny", text:{
          en:"A caution this book keeps: the presence of glutamate in sake is real and measurable — it is the amino-acid figure on an analysis sheet — but “umami” as a tasting note is doing two jobs at once, naming a compound and naming an impression, and the two do not track each other closely. A sake high in amino acids may read as heavy rather than savoury.",
          ja:"この書が保つ戒め。日本酒におけるグルタミン酸の存在は実在し、測りうる——分析表のアミノ酸度がそれである——が、利き酒の記としての「旨味」は同時に二つの仕事をしている。化合物を名指すことと、印象を名指すことである。そして二つは近く連れ添わない。アミノ酸度の高い酒は、旨いというより重く読めることがある。",
          zh:"本書持守的一項警覺：清酒中麩胺酸的存在是真實且可量測的——那就是分析表上的胺基酸度——但作為品飲筆記的「旨味」同時在做兩件事：指稱一種化合物，以及指稱一種印象。而這兩者並不緊密同步。一支胺基酸度高的酒，讀起來可能是重，而不是鮮。" } }
      ] },

    { t:"section", id:"aroma",
      title:{ en:"Where Japanese is finer than English", ja:"日本語のほうが細かいところ", zh:"日文比英文更細的地方" }, jp:"香の語",
      body:[
        { t:"p", text:{
          en:"The commonest assumption is that the translation problem runs one way, from a rich foreign vocabulary into a poorer English one. For aroma it runs the other way round as well, and much more sharply: English tasting language has three words for the whole event and Japanese has five, distributed across it in a way that does not map.",
          ja:"最もよくある思い込みは、訳の問題が一方向に走るということである。豊かな異国の語彙から、より貧しい英語へと。香りについては、それは逆向きにも走り、しかもはるかに鋭く走る。英語の利き酒の語はこの出来事の全体に三語を持ち、日本語は五語を持ち、そしてそれらは重なり合わない仕方で配されている。",
          zh:"最常見的假設是，翻譯問題只朝一個方向走：從一種豐富的外語，走向較貧乏的英文。但在香氣這件事上，它也往反方向走，而且更加尖銳：英文的品飲語言用三個詞涵蓋整個過程，日文用五個，而且它們分布的方式無法互相對應。" } },
        { t:"figure",
          caption:{
            en:"One mouthful, read twice. The upper brackets are the Japanese terms, the lower ones the English. The mismatch that matters is on the right: English has a single word, finish, for the region in which Japanese distinguishes the aroma that comes back up after swallowing, the taste left behind, and the length of time anything is left at all. A taster working in English is not being careless; the language has given them one container for three things.",
            ja:"ひと口を、二度読む。上の括りは日本語の語、下は英語である。大事な食い違いは右にある。英語は finish という一語を持ち、日本語はその領域において、嚥下ののちに上がってくる香りと、残される味と、そもそも何かが残っている時の長さとを分かつ。英語で利く者が不注意なのではない。言語が、三つのものに一つの器を与えたのである。",
            zh:"同一口酒，被讀了兩次。上方的括弧是日文詞，下方是英文。真正要緊的錯位在右邊：英文只有 finish 一個詞，而日文在同一個區域裡分辨出嚥下之後回上來的香氣、留下來的味道，以及「究竟還留著什麼」的那段時間長度。用英文品飲的人並不是粗心；是語言只給了他們一個容器，去裝三樣東西。" },
          svg: function (lang, L) {
            var W = 760, H = 390, XA = 120, XB = 730;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var zones = [
              { x:XA, jp:"杯の上", n:{ en:"at the glass", ja:"杯の上", zh:"在杯口" } },
              { x:250, jp:"口のなか", n:{ en:"in the mouth", ja:"口のなか", zh:"在口中" } },
              { x:420, jp:"嚥下", n:{ en:"the swallow", ja:"嚥下", zh:"吞嚥" } },
              { x:480, jp:"そののち", n:{ en:"afterwards", ja:"そののち", zh:"之後" } }
            ], i;
            /* zone guides */
            for (i = 1; i < zones.length; i++)
              s += '<line x1="' + zones[i].x + '" y1="44" x2="' + zones[i].x + '" y2="352" stroke="#F0EDE4"/>';
            /* axis */
            s += '<line x1="' + XA + '" y1="214" x2="' + XB + '" y2="214" stroke="#CDC6B9"/>';
            for (i = 0; i < zones.length; i++) {
              var zx = zones[i].x + (i === zones.length - 1 ? 56 : 22);
              s += '<text x="' + zx + '" y="232" font-size="10.5" fill="#201E1B">' + zones[i].jp + '</text>';
              if (L(zones[i].n) !== zones[i].jp)
                s += '<text x="' + zx + '" y="245" font-size="9" fill="#ADA79E">' + L(zones[i].n) + '</text>';
            }
            function bracket(x1, x2, y, up, jp, n) {
              var d = up ? 6 : -6, o = "";
              o += '<line x1="' + x1 + '" y1="' + y + '" x2="' + x2 + '" y2="' + y + '" stroke="#7C6B52"/>';
              o += '<line x1="' + x1 + '" y1="' + y + '" x2="' + x1 + '" y2="' + (y + d) + '" stroke="#7C6B52"/>';
              o += '<line x1="' + x2 + '" y1="' + y + '" x2="' + x2 + '" y2="' + (y + d) + '" stroke="#7C6B52"/>';
              var g = L(n), lab = (g === jp || !g) ? jp : jp + "  ·  " + g;
              o += '<text x="' + ((x1 + x2) / 2) + '" y="' + (y - 7) + '" text-anchor="middle" font-size="11" fill="#201E1B">' + lab + '</text>';
              return o;
            }
            /* Japanese, above the axis */
            s += bracket(XA, 252, 62, true, "立ち香", { en:"rises from the glass", ja:"", zh:"從杯中升起" });
            s += bracket(250, 424, 92, true, "含み香", { en:"released in the mouth", ja:"", zh:"在口中釋出" });
            s += bracket(416, 508, 122, true, "戻り香", { en:"comes back after swallowing", ja:"", zh:"嚥下後回上來" });
            s += bracket(478, 646, 152, true, "後味", { en:"what is left behind", ja:"", zh:"留下來的東西" });
            s += bracket(478, XB, 182, true, "余韻", { en:"how long anything is left", ja:"", zh:"留了多久" });
            /* English, below the axis */
            s += bracket(XA, 252, 288, false, "nose", { en:"", ja:"立ち香にあたる", zh:"相當於立ち香" });
            s += bracket(250, 470, 318, false, "palate", { en:"", ja:"含み香と味", zh:"含み香與味道" });
            s += bracket(462, XB, 348, false, "finish", { en:"three Japanese terms in one word", ja:"日本語の三語を一語で", zh:"用一個詞裝三個日文詞" });
            s += '<text x="20" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "横の軸は時であり、目盛りは持たない。括りの幅はおおよそのものであり、境は人により動く。"
                  : lang === "zh" ? "橫軸是時間，沒有刻度。括弧的寬度為概略值，界線因人而異。"
                  : "The horizontal axis is time and carries no scale. Bracket widths are approximate and the boundaries move from taster to taster.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"This is not a curiosity. A judging sheet that asks for <em>fukumi-ka</em> and <em>modori-ka</em> separately will collect information that a sheet asking for “palate” and “finish” cannot collect, and a panel trained on the finer vocabulary will notice the difference between a sake that gives everything up in the mouth and one that gives half of it back afterwards. Vocabulary is not decoration; it is the resolution at which a taster is able to perceive.",
          ja:"これは物珍しさではない。含み香と戻り香を別々に問う採点票は、palate と finish を問う票が集めえない知らせを集める。そして細かい語彙で訓練された審査の一団は、口のなかですべてを差し出す酒と、その半ばをのちに返す酒との違いに気づく。語彙は飾りではない。それは、利く者が知覚しうる解像度である。",
          zh:"這不是有趣的小事。一張分別詢問「含み香」與「戻り香」的評分表，能蒐集到一張只問 palate 與 finish 的表所蒐集不到的資訊；而以更細語彙受訓的評審團，會注意到「在口中把一切都交出來的酒」與「有一半在之後才還回來的酒」之間的差別。語彙不是裝飾，它是一位品飲者所能感知的解析度。" } }
      ] },

    { t:"section", id:"back",
      title:{ en:"And the traffic going the other way", ja:"逆向きの往来", zh:"反方向的來往" }, jp:"借用語",
      body:[
        { t:"p", text:{
          en:"Japanese sake talk has been importing English and French words steadily since the 1990s, and each of them arrives carrying assumptions from the industry it came from. That is not a complaint — the loans are useful and mostly deliberate — but it is worth knowing what is inside the box.",
          ja:"日本酒の語り口は一九九〇年代よりずっと、英語と仏語の語を輸入してきた。そのそれぞれが、出てきた業界からの前提を負って届く。これは不平ではない——借用は有用であり、その多くは意図されている——が、箱のなかに何が入っているかを知っておくに値する。",
          zh:"日本的清酒論述自 1990 年代起持續在引進英文與法文的詞，而每一個詞抵達時，都帶著它出身產業的假設。這不是在抱怨——這些借詞很有用，而且多半是刻意引進的——但知道箱子裡裝了什麼，仍然值得。" } },
        { t:"table",
          caption:{ en:"Loans into Japanese sake language", ja:"日本酒の語へ入った借用語", zh:"進入清酒語彙的借詞" },
          cols:[{en:"Loan",ja:"借用語",zh:"借詞"},{en:"From",ja:"出所",zh:"來源"},{en:"What it brings with it",ja:"共に持ち込むもの",zh:"它一併帶進來的東西"}],
          jpCols:[0],
          rows:[
            ["テロワール",
             {en:"French wine",ja:"仏の葡萄酒",zh:"法國葡萄酒"},
             {en:"A claim that place determines character through soil and climate — which for sake is complicated by milling, by the fact that rice is often bought from another prefecture, and by yeast that comes from a national collection. The word is used widely and the site treats it carefully. See <a href=\"terroir.html\">Terroir</a>.",ja:"土と気候を通じて地が性格を定めるという主張。日本酒においてそれは、精米によって、米がしばしば他県から買われることによって、そして酵母が全国の頒布から来ることによって込み入る。語は広く用いられ、本サイトはこれを慎重に扱う。<a href=\"terroir.html\">風土</a>を見られたい。",zh:"一項主張：產地透過土壤與氣候決定了性格。對清酒而言，這件事因精米、因米經常向外縣採買、因酵母來自全國性的頒布體系而變得複雜。這個詞被廣泛使用，本站謹慎處理它。請見<a href=\"terroir.html\">風土</a>。"}],
            ["ヴィンテージ",
             {en:"Wine",ja:"葡萄酒",zh:"葡萄酒"},
             {en:"A year that is meant to matter. Sake has brewing years and they do matter, but the analogy suggests that an older year is a better one, which for most sake is exactly backwards. See <a href=\"aging.html\">Aged Sake</a>.",ja:"意味を持つべき年。日本酒には酒造年度があり、それは意味を持つ。しかしこの喩えは、古い年ほど良いと示唆する。ほとんどの日本酒について、それはちょうど逆である。<a href=\"aging.html\">熟成酒</a>を見られたい。",zh:"一個「應該有意義」的年份。清酒有酒造年度，而且確實有意義；但這個類比暗示著年份越老越好，對多數清酒而言那恰恰是反的。請見<a href=\"aging.html\">熟成酒</a>。"}],
            ["ペアリング",
             {en:"Restaurant service",ja:"料飲の供し方",zh:"餐飲服務"},
             {en:"The idea that a dish and a glass are matched one to one. The older Japanese frame is <em>shokuchūshu</em> — a sake to be drunk through the meal — which is a different proposition and often a better one. See <a href=\"pairing.html\">Food Pairing</a>.",ja:"一皿と一杯が一対一で合わされるという考え。より古い日本の枠は食中酒である——食事を通して飲まれる酒——であり、それは別の、しばしばより良い提案である。<a href=\"pairing.html\">料理との相性</a>を見られたい。",zh:"一道菜與一杯酒一對一相配的概念。更古老的日本框架是「食中酒」——一支從頭喝到尾、貫穿整餐的酒——那是另一種提案，而且往往更好。請見<a href=\"pairing.html\">餐酒搭配</a>。"}],
            ["ソムリエ",
             {en:"French service",ja:"仏の供し方",zh:"法式服務"},
             {en:"A role with a training path and a cellar. Japanese restaurants historically had no equivalent, and the qualifications that now exist were built partly to fill a gap the borrowed word opened up. See <a href=\"learning.html\">How People Learn It</a>.",ja:"修練の道と酒庫とを持つ役。日本の料理屋には歴史的に対応するものがなく、いま存在する資格は、借用語が開けた隙を埋めるために、一部は作られた。<a href=\"learning.html\">人はいかに学ぶか</a>を見られたい。",zh:"一個有養成路徑、也有酒窖的角色。日本餐廳在歷史上並沒有對應的職位，而如今存在的那些資格，有一部分正是為了填補這個借詞所打開的空缺而建立的。請見<a href=\"learning.html\">人們如何學會它</a>。"}],
            ["ドライ",
             {en:"English, via beer",ja:"英語、麦酒を経て",zh:"英文，經由啤酒"},
             {en:"The round trip. English took <em>karakuchi</em> and rendered it “dry”; Japanese then took “dry” back as a katakana marketing word, where it now sits beside 辛口 meaning something slightly different again. A mistranslation that has been re-imported is very hard to undo.",ja:"往復である。英語は辛口を取り dry と置き換えた。日本語はのちに、片仮名の売り文句としてドライを取り戻し、いまそれは辛口の傍らに、またいくらか異なる意味で座っている。再輸入された誤訳は、きわめて解きにくい。",zh:"一趟來回。英文拿走辛口、把它譯成 dry；日文後來又把 dry 當成片假名的行銷用語拿了回去，如今它就坐在「辛口」旁邊，意思又稍微不一樣。一個被重新進口的誤譯，極難拆解。"}]
          ] }
      ] },

    { t:"section", id:"policy",
      title:{ en:"What this book does about it", ja:"この書がそれに対してすること", zh:"本書對此的做法" }, jp:"方針",
      body:[
        { t:"p", text:{
          en:"Three texts written in parallel rather than one translated twice is an expensive way to make a reference, and these are the rules that make it worth the expense.",
          ja:"一つを二度訳すのではなく三つを並べて書くことは、事典を作るには高くつくやり方である。その代を値打ちあるものにする決まりが、以下である。",
          zh:"三份文本並行書寫，而不是把一份翻譯兩次，這是編一本參考書相當昂貴的做法。以下這些規則，是讓這份代價值得的原因。" } },
        { t:"ol", items:[
          { en: "<strong>A term with no equivalent is left in Japanese and glossed once.</strong> <em>Karakuchi</em>, <em>kōji</em>, <em>tōji</em>, <em>nama</em>, <em>kimoto</em>. The gloss is a sentence, not a word, because a word is what got us into this.",
            ja: "<strong>対応語のない語は日本語のまま置き、一度だけ注を付ける。</strong>辛口、麹、杜氏、生、生酛。注は一語ではなく一文である。一語こそが、この事態を招いたものだからである。",
            zh: "<strong>沒有對應詞的術語保留日文，並註解一次。</strong>辛口、麴、杜氏、生、生酛。註解是一個句子，不是一個詞——因為正是「一個詞」把我們帶進了這個局面。" },
          { en: "<strong>A number is never translated into an adjective.</strong> A sake meter value of +8 is written as +8, not as “very dry”, in all three languages. Adjectives are where the meaning leaks.",
            ja: "<strong>数を形容詞へ訳さない。</strong>日本酒度＋八は、三つの言語のいずれにおいても、「非常に辛口」ではなく＋八と書く。意味が漏れるのは形容詞においてである。",
            zh: "<strong>絕不把數字翻譯成形容詞。</strong>日本酒度 +8 在三種語言裡都寫成 +8，而不是「非常辛口」。意義滲漏的地方，就在形容詞。" },
          { en: "<strong>The Chinese text uses Chinese words, not Japanese characters read as Chinese.</strong> Where a Japanese term happens to be legible in Chinese but means something else there, the Chinese text says so rather than passing it through. The traps are set out in <a href=\"taiwan.html\">Sake in Taiwan</a>.",
            ja: "<strong>中国語の本文は、中国語として読まれた日本語の漢字ではなく、中国語の語を用いる。</strong>日本語の語がたまたま中国語で読めてしかも別の意味を持つ場合、中国語の本文はそれを素通りさせず、そう述べる。罠は<a href=\"taiwan.html\">台湾と日本酒</a>に並べてある。",
            zh: "<strong>中文版使用中文的詞，而不是被當成中文讀的日文漢字。</strong>當一個日文術語剛好在中文裡讀得通、意思卻不同時，中文版會直接說明，而不是讓它就這樣過去。那些陷阱列在<a href=\"taiwan.html\">台灣與日本酒</a>。" },
          { en: "<strong>A figure is redrawn, not captioned.</strong> Every diagram on this site is a function that takes a language and returns an image, so a Japanese reader gets a Japanese diagram rather than an English one with a translation underneath. A picture with a foreign language inside it is a picture you have to read twice.",
            ja: "<strong>図は注を付けるのではなく、描き直す。</strong>このサイトのあらゆる図は、言語を受け取って画を返す関数である。ゆえに日本語の読み手は、下に訳の付いた英語の図ではなく、日本語の図を受け取る。異国の語を内に抱えた画は、二度読まねばならぬ画である。",
            zh: "<strong>圖是重畫的，不是加註的。</strong>本站每一張圖都是一個「接收語言、回傳圖像」的函式，所以日文讀者拿到的是一張日文的圖，而不是一張底下附了翻譯的英文圖。一張內部含有外語的圖，是一張你必須讀兩次的圖。" },
          { en: "<strong>When the three texts disagree, the disagreement is a bug.</strong> Two of the checkers in this repository exist for exactly this: one compares the weight of the three versions of every string, the other checks that a year mentioned in two languages is mentioned in the third.",
            ja: "<strong>三つの本文が食い違うとき、その食い違いは不具合である。</strong>この repository の検査のうち二つは、まさしくそのためにある。一つはあらゆる文字列の三つの版の重さを比べ、もう一つは、二つの言語で挙げられた年が三つ目でも挙げられているかを確かめる。",
            zh: "<strong>當三份文本互相牴觸時，那個牴觸就是一個 bug。</strong>這個 repository 裡有兩支檢查程式正是為此而存在：一支比較每個字串三個版本的份量，另一支檢查在兩種語言裡提到的年份，在第三種語言裡是否也提到了。" }
        ] },
        { t:"note", title:{ en:"The limit of the method", ja:"この方法の限り", zh:"這個方法的極限" },
          text:{
            en:"Writing in parallel removes translation errors and does not remove bias. Three texts by the same hand carry the same judgements, the same emphases and the same blind spots in three languages, and the fact that they agree is evidence of nothing except that they were written together. A reader who wants a second opinion should go to the sources rather than to the other two tabs.",
            ja:"並べて書くことは訳の誤りを除くが、偏りを除きはしない。同じ手による三つの本文は、同じ判断と、同じ力点と、同じ死角とを、三つの言語で運ぶ。そして三つが一致するという事実は、共に書かれたということ以外の何の証でもない。別の見方が欲しい読み手は、他の二つの頁ではなく、出典へ行かれたい。",
            zh:"並行書寫消除的是翻譯錯誤，而不是偏見。出自同一隻手的三份文本，會用三種語言載著同樣的判斷、同樣的側重與同樣的盲點；它們彼此一致這件事，除了證明它們是一起寫的之外，什麼都證明不了。想要第二種意見的讀者，該去的是出處，而不是另外兩個語言分頁。" } }
      ] },

    { t:"related", items:[
      { href:"words.html", why:{ en:"The vocabulary itself, rather than the trouble with moving it.", ja:"語彙そのもの。それを移す難ではなく。", zh:"語彙本身，而不是搬運它的麻煩。" } },
      { href:"taiwan.html", why:{ en:"The Chinese traps, set out in full.", ja:"中国語における罠を、洗いざらい。", zh:"中文裡的那些陷阱，完整列出。" } },
      { href:"numbers.html", why:{ en:"Why the sake meter value will not tell you what “dry” means.", ja:"日本酒度が、dry の意味を教えてくれない理由。", zh:"為什麼日本酒度不會告訴你 dry 是什麼意思。" } },
      { href:"tasting.html", why:{ en:"The vocabulary in use, at a glass.", ja:"一杯を前にした、用いられる語彙。", zh:"面對一杯酒時，這套語彙如何被使用。" } },
      { href:"myths.html", why:{ en:"What the mistranslations turned into, once they set.", ja:"誤訳が固まったのち、何になったか。", zh:"那些誤譯定型之後，變成了什麼。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- media */
SAKE.pages["media"] = {
  kicker: { en: "Foundations · 12", ja: "基礎 · 12", zh: "基礎 · 12" },
  title:  { en: "Sake on Screen and Page", ja: "画と頁のなかの酒", zh: "銀幕與紙頁上的酒" },
  jp: "映像と漫画",
  lede: {
    en: "A surprising amount of what the world knows about sake it learned from a comic. Japanese popular culture has produced a small, unusually accurate body of work about brewing — one manga that revived an extinct rice variety, another that made a mould into a cartoon character, two documentaries that carried the subject abroad, and a century of films in which the bar counter does the work that dialogue cannot. This page is about those works, what they got right, and the one plot that almost all of them share.",
    ja: "世界が日本酒について知っていることの驚くほど多くは、漫画から学ばれた。日本の大衆の文化は、造りについての小さく、異例に正確な作品の群れを生んだ。絶えた酒米の品種を蘇らせた一つの漫画、黴を漫画の登場人物にした別の一つ、この主題を海の外へ運んだ二つの記録映画、そして台詞のなしえぬ働きを酒場の台がなす、一世紀の映画である。この頁はそれらの作品と、それらが正しく捉えたものと、そしてそのほとんどすべてが分かちもつ一つの筋についてである。",
    zh: "世界對清酒的認識，有出乎意料多的一部分是從漫畫學來的。日本大眾文化產出了一批不大、卻異常準確的釀造題材作品——一部讓一個絕跡酒米品種復活的漫畫、另一部把一種黴菌變成卡通角色的漫畫、兩部把這個主題帶到海外的紀錄片，以及一整個世紀裡、由吧檯完成對白所無法完成之事的電影。本頁談的就是這些作品、它們說對了什麼，以及它們幾乎全都共享的那一個情節。"
  },
  body: [

    { t:"section", id:"natsuko",
      title:{ en:"The comic that brought a rice back", ja:"米を蘇らせた漫画", zh:"讓一種米復活的漫畫" }, jp:"夏子の酒",
      body:[
        { t:"p", text:{
          en:"Natsuko no Sake ran in Morning from 1988 to 1991, drawn and written by Oze Akira. Its heroine gives up an advertising job in Tokyo and returns to her family's brewery in the Niigata rice country after her brother's death, inheriting his unfinished project: to grow a legendary, almost-extinct brewing rice and make the sake he had described.",
          ja:"『夏子の酒』は一九八八年から一九九一年まで『モーニング』に連載された。作は尾瀬あきらである。主人公は東京の広告の仕事を捨て、兄の死ののち、新潟の米どころにある家の蔵へ帰り、兄の未だ成らぬ企てを継ぐ。すなわち、伝説の、ほとんど絶えた酒米を育て、兄が語った酒を造ることである。",
          zh:"《夏子的酒》一九八八至一九九一年連載於《Morning》，作者尾瀬あきら。女主角在哥哥死後放棄了東京的廣告工作，回到新潟米鄉的家族酒藏，繼承他未竟的計畫：種出一種傳說中、幾近絕跡的釀酒米，釀出他曾描述過的那支酒。" } },

        { t:"p", text:{
          en:"The fictional rice is called Tatsunishiki. The real one is Kameno-o, a nineteenth-century variety that had been abandoned as a brewing rice because it is tall, falls over in wind and is difficult to polish. The brewery Oze researched was Kusumi Shuzō in what is now Nagaoka, which had already begun reviving Kameno-o and sells the result as Kame no O. When the manga became a hit and then an eleven-episode Fuji TV drama in 1994, it did something a comic is not supposed to be able to do: it created national demand for a rice variety, and other breweries started planting it.",
          ja:"作中の米は龍錦と呼ばれる。実の米は亀の尾である。十九世紀の品種であり、丈が高く、風に倒れ、磨きにくいがゆえに、酒米としては棄てられていた。尾瀬が取材した蔵は、今の長岡にある久須美酒造であり、すでに亀の尾の復活に着手し、その成果を亀の翁として売っていた。漫画が当たり、そして一九九四年、十一回のフジテレビの連続劇となったとき、それは漫画になしうるはずのないことをなした。すなわち、一つの米の品種に対する全国の需を生み、他の蔵がそれを植えはじめたのである。",
          zh:"作品中的米叫「龍錦」。真實的那一種是「龜之尾」，一個十九世紀的品種，因為植株高、遇風倒伏、又難以精米，早已被放棄作為酒米。尾瀬所取材的酒藏是位於今日長岡的久須美酒造，該藏當時已著手復育龜之尾，並以「龜之翁」之名販售成果。當這部漫畫走紅、並在一九九四年改編成十一集的富士電視連續劇後，它做到了一件漫畫本不該做得到的事：它為一個米種創造出全國性的需求，而其他酒藏開始種它。" } },

        { t:"panel", tint:"rice",
          title:{ en:"Why this is more than trivia", ja:"これが単なる余話ではない理由", zh:"為什麼這不只是趣聞" },
          body:[
            { t:"p", text:{
              en:"Brewing rice varieties survive only if someone plants them, and someone plants them only if a brewery will buy the crop. That loop had been closing on the old varieties for decades: fewer breweries, safer rice, less risk. A popular story about a woman restoring an abandoned rice reopened the loop by creating demand from the drinking end, and Kameno-o is now grown deliberately in several prefectures and appears on labels as a selling point. It is the clearest case anywhere of fiction changing what is in the field.",
              ja:"酒米の品種は、誰かがそれを植えるときにのみ生き延び、そして誰かがそれを植えるのは、蔵がその収穫を買うときのみである。その輪は数十年にわたり、古い品種の上で閉じつつあった。蔵は減り、米はより安全なものへ、危うさはより少なく。棄てられた米を取り戻す女の物語が広く読まれ、飲む側の端から需を生むことでその輪を再び開いた。そして亀の尾は今、いくつもの県で意図して育てられ、売りの一点として札に現れる。虚構が田にあるものを変えた、どこにおいても最も明らかな例である。",
              zh:"酒米品種只有在有人種它時才存續，而只有在酒藏願意收購時才會有人種。數十年來，那個循環在老品種身上不斷收攏：酒藏變少、改用更安全的米、承擔更少風險。一個關於女子復育被棄之米的故事廣為流傳，從「喝」的那一端創造出需求，重新打開了那個循環；而龜之尾如今在數個縣被刻意栽種，並作為賣點出現在酒標上。這是任何地方都罕見的、虛構作品改變了田裡種什麼的最明確案例。" } }
          ] }
      ] },

    { t:"section", id:"moyashimon",
      title:{ en:"The comic that made a mould a character", ja:"黴を登場人物にした漫画", zh:"把黴菌變成角色的漫畫" }, jp:"もやしもん",
      body:[
        { t:"p", text:{
          en:"Moyashimon, by Ishikawa Masayuki, ran from 2004 to 2013 in Evening and then in Morning Two, with a new series beginning in Afternoon in 2025. Its premise is a single fantastical gift attached to an otherwise realistic agricultural university: the protagonist can see micro-organisms with the naked eye, and they appear to him — and to the reader — as small round cartoon characters with faces.",
          ja:"『もやしもん』は石川雅之の作であり、二〇〇四年から二〇一三年まで『イブニング』に、次いで『モーニング・ツー』に連載され、二〇二五年より『アフタヌーン』にて新たな連なりが始まった。その前提は、それ以外はまったく現実の農業大学に、たった一つの幻想の賜物を結びつけることである。主人公は微生物を肉眼で見ることができ、それらは彼に——そして読者に——顔をもつ小さく丸い漫画の登場人物として現れる。",
          zh:"《農大菌物語》（もやしもん）由石川雅之創作，二〇〇四至二〇一三年連載於《Evening》，其後移至《Morning Two》，並於二〇二五年在《Afternoon》展開新的連載。它的前提是在一所其餘部分完全寫實的農業大學裡，加上唯一一項奇幻設定：主角能以肉眼看見微生物，而牠們在他——以及讀者——眼中，是一個個有臉的小圓形卡通角色。" } },

        { t:"p", text:{
          en:"The protagonist's family runs a moyashi-ya — one of the tiny number of houses that propagate and sell kōji spores, the trade this site's pages on kōji describe. That detail is the whole point of the title, and it is the reason the manga is unusually well informed: Aspergillus oryzae is not background colour in it but a recurring character, and the series explains sake, miso, soy sauce, cheese, natto and the difference between fermentation and rot with a level of accuracy that microbiologists have publicly enjoyed.",
          ja:"主人公の家はもやし屋を営む。麹の胞子を殖やし売る、ごく少数の家の一つであり、この場の麹の頁が述べる生業である。その一事こそ表題の全てであり、この漫画が異例によく通じている理由である。ニホンコウジカビはそこにおいて背景の色ではなく、繰り返し現れる登場人物であり、この連なりは、日本酒、味噌、醤油、乾酪、納豆、そして醗酵と腐りの差を、微生物学者が公に楽しんだほどの正しさをもって説く。",
          zh:"主角家裡經營「もやし屋」——極少數繁殖並販售麴菌孢子的家族之一，也就是本站麴的相關頁面所描述的那門行業。這個細節正是標題的全部意義所在，也是這部漫畫消息異常靈通的原因：米麴菌在其中不是背景色，而是一個反覆出現的角色；這部作品解說清酒、味噌、醬油、乳酪、納豆，以及發酵與腐敗的差別，其準確程度連微生物學者都公開表示欣賞。" } },

        { t:"note", label:{ en:"Where to meet it", ja:"それに出会う場所", zh:"在哪裡遇見它" },
          text:{
            en:"There is an anime series from 2007 and a second from 2012, and a live-action drama from 2010. For a reader outside Japan who wants to understand what kōji actually is and why Japanese fermentation is organised the way it is, the manga remains a more effective introduction than most textbooks, and a considerably funnier one.",
            ja:"二〇〇七年の動画の連なりと、二〇一二年の第二の連なりがあり、二〇一〇年には実写の連続劇がある。麹が実際に何であり、日本の醗酵がなぜそのように組み立てられているのかを解したいと願う日本の外の読み手にとって、この漫画はほとんどの教科書よりなお有効な入り口であり、そしてはるかに可笑しい。",
            zh:"有二〇〇七年的動畫、二〇一二年的第二季，以及二〇一〇年的真人版連續劇。對於一位想弄懂麴到底是什麼、以及日本發酵為何是以那樣的方式組織起來的海外讀者而言，這部漫畫至今仍是比多數教科書更有效的入門，而且有趣得多。" } }
      ] },

    { t:"section", id:"films",
      title:{ en:"On film", ja:"映画において", zh:"在電影裡" }, jp:"映画",
      body:[
        { t:"timeline", items:[
          { year:"1962", era:{ en:"Ozu", ja:"小津", zh:"小津" }, eraJp:"秋刀魚の味",
            title:{ en:"The bar counter as a structural device", ja:"構えとしての酒場の台", zh:"作為結構裝置的吧檯" }, jp:"小津安二郎",
            text:{ en:"Ozu Yasujirō's last film, An Autumn Afternoon, is largely conducted over sake: old classmates in a bar, a father and his friends drinking about a daughter's marriage, the same low camera, the same cups. Ozu uses drinking the way other directors use weather — as the condition under which people can say the thing the plot requires and cannot otherwise reach. Anyone wanting to understand the social function of the Japanese drinking place could do worse than watch his late films in order.",
              ja:"小津安二郎の最後の映画『秋刀魚の味』は、その多くが酒とともに運ばれる。酒場の旧友、娘の縁談について飲む父とその友、同じ低い位置の写し、同じ杯。小津は、他の監督が天候を用いるように飲むことを用いる。すなわち、筋の要する事柄を、他の仕方では届きえぬそれを、人が述べうる条件としてである。日本の酒場の社交の働きを解したいと願う者は、彼の晩年の作を順に見ることに如くはない。",
              zh:"小津安二郎的最後一部電影《秋刀魚之味》，其大部分是在酒中進行的：酒館裡的老同學、為女兒婚事而喝的父親與他的朋友、同樣低角度的攝影機、同樣的酒杯。小津使用「喝酒」的方式，就像其他導演使用天氣——把它當成一種條件，讓人們得以說出情節所需、卻在其他情況下說不出口的話。任何想理解日本酒場社會功能的人，依序看一遍他晚期的作品都不會吃虧。" } },
          { year:"2015", era:{ en:"Documentary", ja:"記録映画", zh:"紀錄片" }, eraJp:"カンパイ！",
            title:{ en:"Kampai! For the Love of Sake", ja:"カンパイ！世界が恋する日本酒", zh:"乾杯！世界戀上日本酒" }, jp:"小西未来 監督",
            text:{ en:"Ninety-five minutes following three people from three directions: Philip Harper, the first non-Japanese tōji, then at Kinoshita Shuzō in Kyoto; Kuji Kōsuke, fifth-generation head of Nanbu Bijin in Iwate, exporting hard in the years after the 2011 earthquake; and John Gauntner, the American writer who did more than anyone to build an English vocabulary for sake. A sequel in 2019 turned the same lens on women in the industry. For most people outside Japan this film was the first time they saw a kura from the inside.",
              ja:"九十五分をかけ、三つの方から来た三人を追う。日本人でない最初の杜氏であり、当時は京都の木下酒造にいたフィリップ・ハーパー。二〇一一年の震災ののちの年に懸命に輸出した、岩手の南部美人の五代目、久慈浩介。そして日本酒のための英語の語彙を築くことに誰よりも尽くした米国の書き手、ジョン・ゴントナー。二〇一九年の続編は、同じ眼差しを業界の女性たちへ向けた。日本の外のほとんどの人にとって、この映画は蔵をその内から見た最初であった。",
              zh:"九十五分鐘，從三個方向追著三個人：菲利普・哈波（Philip Harper），第一位非日籍杜氏，當時任職於京都的木下酒造；久慈浩介，岩手南部美人的第五代，在二〇一一年震災之後的那些年裡奮力拓展出口；以及約翰・岡特納（John Gauntner），這位美國作家為清酒建立英語詞彙的貢獻超過任何人。二〇一九年的續集把同樣的鏡頭轉向業界的女性。對日本以外的多數人來說，這部片是他們第一次從內部看見一座酒藏。" } },
          { year:"2021", era:{ en:"Drama", ja:"劇映画", zh:"劇情片" }, eraJp:"吟ずる者たち",
            title:{ en:"Those Who Brew", ja:"吟ずる者たち", zh:"吟釀者們" }, jp:"油谷誠至 監督",
            text:{ en:"Set in Akitsu in Hiroshima and cutting between the present and the Meiji era, this is the only feature film built around a technical breakthrough in brewing. Its historical strand follows Miura Senzaburō, who failed repeatedly with Hiroshima's soft water, went to Nada to learn, and worked out the soft-water method that made ginjō brewing possible outside the hard-water heartland — the invention that made the whole modern aroma-forward category thinkable.",
              ja:"広島の安芸津を舞台に、現在と明治とを行き来する。造りにおける技の突破を軸に据えた、唯一の劇映画である。その歴史の筋は三浦仙三郎を追う。広島の軟らかい水に幾度も敗れ、灘へ学びに行き、そして軟水醸造法を編み出した人である。硬い水の中心の外で吟醸の造りを可能にした発明であり、今日の香りを前に出す区分の全てを、そもそも考えうるものとしたものである。",
              zh:"以廣島安藝津為舞台，在當代與明治之間來回剪接，這是唯一一部圍繞著釀造技術突破而建構的劇情長片。它的歷史線追隨三浦仙三郎：他一再敗於廣島的軟水，前往灘地學藝，最終摸索出軟水釀造法——正是這項發明，讓吟釀釀造在硬水核心地帶之外成為可能，也讓今日整個前香型類別得以被想像。" } }
        ] }
      ] },

    { t:"section", id:"shelf",
      title:{ en:"The wider shelf", ja:"より広い棚", zh:"更寬的那排書架" }, jp:"漫画一覧",
      body:[
        { t:"figure",
          caption:{
            en:"Everything on this page, on one line. Two things show up that are hard to see from the individual entries. The first is that the serialised comic is the long form here and the film is the short one: Oishinbo has been running for over forty years and Natsuko no Sake, the title that actually changed what was planted in Japan, ran for three. The second is the cluster after 2007, when a sake story stopped being something you only read and started being something adapted, screened and subtitled — which is also, not coincidentally, when the export line began to climb.",
            ja:"この頁のすべてを一本の線に置いたもの。個々の項目からは見えにくい二つのことが現れる。第一に、ここでの長い形は連載漫画であり、短い形は映画である。『美味しんぼ』は四十年を超えて続き、日本で植えられるものを実際に変えた表題である『夏子の酒』は三年で終わった。第二に、二〇〇七年ののちの集まりである。日本酒の物語は、読むだけのものであることをやめ、翻案され、上映され、字幕を付されるものとなった。そしてそれは、偶然ではなく、輸出の線が昇り始めた時期でもある。",
            zh:"把這一頁上的一切放在同一條線上。有兩件從個別條目裡不易看出的事會浮現。其一，在這裡，長篇形式是連載漫畫，而電影是短的：《美味しんぼ》已連載四十多年，而真正改變了日本種什麼米的那部《夏子の酒》只連載了三年。其二，是二〇〇七年之後的那一叢：清酒故事不再只是拿來讀的東西，而開始被改編、被放映、被加上字幕——而這並非巧合地，也正是出口曲線開始攀升的時期。" },
          svg: function (lang, L) {
            var W = 760, H = 318, X0 = 150, X1 = 706;
            function x(y) { return X0 + (y - 1960) / 70 * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, d;
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "頁の上と画面の上の日本酒" : lang === "zh" ? "紙上與銀幕上的清酒" : "SAKE ON THE PAGE AND ON SCREEN") + '</text>';
            for (d = 1960; d <= 2030; d += 10) {
              s += '<line x1="' + x(d).toFixed(1) + '" y1="82" x2="' + x(d).toFixed(1) + '" y2="224" stroke="#EFEDE7"/>';
              s += '<text x="' + x(d).toFixed(1) + '" y="76" text-anchor="middle" font-size="9" fill="#B4AEA4">' + d + '</text>';
            }
            s += '<line x1="' + x(2026).toFixed(1) + '" y1="82" x2="' + x(2026).toFixed(1) + '" y2="224" stroke="#C6BCA6" stroke-dasharray="2 3"/>';
            s += '<text x="30" y="76" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "漫画" : lang === "zh" ? "漫畫" : "MANGA") + '</text>';
            var mg = [
              { jp:"美味しんぼ", r:"Oishinbo", a:1983, b:2026, on:true },
              { jp:"夏子の酒", r:"Natsuko no Sake", a:1988, b:1991, on:false },
              { jp:"もやしもん", r:"Moyashimon", a:2004, b:2013, on:false, b2:[2025, 2026] },
              { jp:"ワカコ酒", r:"Wakako-zake", a:2011, b:2026, on:true }
            ];
            for (i = 0; i < mg.length; i++) {
              var my = 96 + i * 28;
              s += '<rect x="' + x(mg[i].a).toFixed(1) + '" y="' + (my - 6) + '" width="' + (x(mg[i].b) - x(mg[i].a)).toFixed(1) + '" height="12" fill="#B09E7C"/>';
              if (mg[i].b2) s += '<rect x="' + x(mg[i].b2[0]).toFixed(1) + '" y="' + (my - 6) + '" width="' + (x(mg[i].b2[1]) - x(mg[i].b2[0])).toFixed(1) + '" height="12" fill="#CFC6B2"/>';
              if (mg[i].on || mg[i].b2) s += '<path d="M' + (x(2028) + 8).toFixed(1) + ' ' + my + ' L' + x(2028).toFixed(1) + ' ' + (my - 5) + ' L' + x(2028).toFixed(1) + ' ' + (my + 5) + ' Z" fill="#CFC6B2"/>';
              s += '<text x="30" y="' + (my - 1) + '" font-size="10.5" fill="#201E1B">' + mg[i].jp + '</text>';
              s += '<text x="30" y="' + (my + 11) + '" font-size="8.5" fill="#A39C91">' + mg[i].r + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="218" x2="' + X1 + '" y2="218" stroke="#B4AC9C"/>';
            s += '<text x="30" y="222" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "映像" : lang === "zh" ? "影像" : "ON SCREEN") + '</text>';
            var sc = [[1962, 0], [2007, 0], [2010, 1], [2012, 0], [2015, 1], [2019, 0], [2021, 1]];
            for (i = 0; i < sc.length; i++) {
              var sx = x(sc[i][0]), sy = 236 + sc[i][1] * 13;
              s += '<rect x="' + (sx - 2.5).toFixed(1) + '" y="213" width="5" height="10" fill="#7C6B52"/>';
              s += '<line x1="' + sx.toFixed(1) + '" y1="223" x2="' + sx.toFixed(1) + '" y2="' + (sy - 8) + '" stroke="#E4E0D6"/>';
              s += '<text x="' + sx.toFixed(1) + '" y="' + sy + '" text-anchor="middle" font-size="9" fill="#6B655C">' + sc[i][0] + '</text>';
            }
            var key = (lang === "ja" ? ["一九六二 秋刀魚の味（小津）・二〇〇七と二〇一二 もやしもん アニメ・二〇一〇 実写ドラマ",
                                        "二〇一五 カンパイ！世界が恋する日本酒・二〇一九 その続編・二〇二一 吟ずる者たち"]
                       : lang === "zh" ? ["1962 秋刀魚之味（小津）・2007 與 2012 もやしもん動畫・2010 真人劇",
                                          "2015 乾杯！世界戀上日本酒・2019 續集・2021 吟釀者們"]
                       : ["1962 An Autumn Afternoon (Ozu) · 2007 and 2012 Moyashimon anime · 2010 its live-action drama",
                          "2015 Kampai! For the Love of Sake · 2019 its sequel, on women · 2021 Those Who Brew"]);
            for (i = 0; i < key.length; i++) s += '<text x="30" y="' + (272 + i * 14) + '" font-size="9.5" fill="#8B857C">' + key[i] + '</text>';
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "矢は連載が続いていることを示す。薄い帯は『もやしもん』の新シリーズである。"
                  : lang === "zh" ? "箭頭表示仍在連載中；淺色的一段是《もやしもん》的新系列。"
                  : "An arrow means still running. The pale block is the new Moyashimon series.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Beyond the two famous titles there is a small, consistent tradition of Japanese comics about drinking. They divide neatly into two kinds: the ones about making sake, which are almost all family sagas, and the ones about drinking it, which are almost all quiet and episodic and have no plot at all.",
          ja:"名高い二つの表題の外に、飲むことについての日本の漫画の小さく変わらぬ伝えがある。それらは二つの種にきれいに分かれる。造ることについてのものはほとんどすべてが家の年代記であり、飲むことについてのものはほとんどすべてが静かで挿話的であり、筋というものを持たない。",
          zh:"在那兩部知名作品之外，還存在一個關於飲酒的、小而穩定的日本漫畫傳統。它們乾淨俐落地分成兩類：關於「釀」的，幾乎全是家族長篇；關於「喝」的，幾乎全都安靜、片段式，而且根本沒有情節。" } },

        { t:"table",
          caption:{ en:"Comics worth knowing about", ja:"知っておく値打ちのある漫画", zh:"值得認識的漫畫" },
          cols:[ { en:"Title", ja:"表題", zh:"作品" },
                 { en:"Author", ja:"作者", zh:"作者" },
                 { en:"What it is", ja:"何であるか", zh:"是什麼" } ],
          jpCols:[0,1],
          rows:[
            [ "夏子の酒", "尾瀬あきら",
              { en:"The one that mattered. A daughter returns to a Niigata brewery to grow a lost rice, and a real lost rice comes back.",
                ja:"重んじられた一作。娘が失われた米を育てるために新潟の蔵へ帰り、そして実の失われた米が戻ってくる。",
                zh:"最具影響力的那一部。一個女兒回到新潟的酒藏，為的是種出一種失落的米——而現實中一種失落的米真的回來了。" } ],
            [ "奈津の蔵", "尾瀬あきら",
              { en:"The same author going back a generation: the heroine's grandmother, and brewing in the early Shōwa years — the alcohol-addition era seen from inside a kura.",
                ja:"同じ作者が一世代遡る。主人公の祖母と、昭和初期の造りである。アルコール添加の時代を蔵の内から見たものである。",
                zh:"同一位作者往上追一個世代：女主角的祖母，以及昭和初期的釀造——從酒藏內部看見的添加酒精年代。" } ],
            [ "蔵人", "尾瀬あきら",
              { en:"A Japanese-American brewer working as a tōji in Japan. The outsider's-eye framing is unusual and useful, and it puts the crew rather than the family at the centre.",
                ja:"日系米国人の造り手が、日本で杜氏として働く。外からの眼という枠は珍しく、そして役に立つ。それは家ではなく組を中心に置く。",
                zh:"一位日裔美籍釀酒者在日本擔任杜氏。這種「外來者視角」的框架相當罕見且有用，而且它把重心放在班底而非家族上。" } ],
            [ "美味しんぼ", "雁屋哲・花咲アキラ",
              { en:"The great gourmet manga, running since 1983. Its sake chapters are polemical rather than descriptive, and they mattered — see below.",
                ja:"一九八三年より続く偉大な食の漫画である。その日本酒の章は記述ではなく論であり、そしてそれは重みをもった。下を見られたい。",
                zh:"自一九八三年連載至今的偉大美食漫畫。它談清酒的章節是論戰式而非描述式的，而且它們產生了實際影響——見下文。" } ],
            [ "酒のほそ道", "ラズウェル細木",
              { en:"Thirty years of a middle-aged salaryman finding the right drink for the right small dish. No arc, no crisis, and a remarkably reliable education in what Japanese people actually drink and eat together.",
                ja:"三十年にわたり、中年の勤め人が、その小皿に合う一杯を見出し続ける。筋も危機もなく、そして日本の人々が実際に何を共に飲み食いするかについての、驚くほど確かな教育である。",
                zh:"三十年來，一位中年上班族不斷為每一道小菜找到對的那杯酒。沒有主線、沒有危機，卻是一份關於「日本人實際上會一起吃喝什麼」的、可靠得驚人的教育。" } ],
            [ "ワカコ酒", "新久千映",
              { en:"A twenty-six-year-old office worker drinking alone, since 2011. Eight seasons of live-action television have followed, and the cultural effect has been to make solo drinking by a woman entirely unremarkable.",
                ja:"二十六歳の勤め人が一人で飲む。二〇一一年より。実写の連続劇が八期続き、その文化の上の働きは、女性が一人で飲むことをまったく当たり前のものとしたことである。",
                zh:"一位二十六歲的上班族獨自喝酒，自二〇一一年起連載。真人版電視劇已拍到第八季，而它的文化效應，是讓女性獨自飲酒變得完全不值一提。" } ],
            [ "もやしもん", "石川雅之",
              { en:"Microbiology as comedy, and the best popular explanation of kōji in any language.",
                ja:"喜劇としての微生物学であり、いかなる言語においても麹の最良の一般向けの説きである。",
                zh:"以喜劇形式呈現的微生物學，也是任何語言中對麴最好的通俗解說。" } ]
          ] }
      ] },

    { t:"section", id:"oishinbo",
      title:{ en:"The comic that argued about additives", ja:"添加物を論じた漫画", zh:"為添加物爭論的那部漫畫" }, jp:"美味しんぼ",
      body:[
        { t:"p", text:{
          en:"Oishinbo has run in a weekly magazine since 1983 and is built on a device: a newspaper's culinary team is set an impossible brief, and the story is resolved by someone explaining, at length and with feeling, why one version of a food is honest and another is a fraud. Applied to sake in the 1980s, this produced some of the most widely read polemic the drink has ever attracted.",
          ja:"『美味しんぼ』は一九八三年より週刊の誌に連なり、一つの仕掛けの上に建てられている。新聞社の食の組が果たしがたい求めを与えられ、そして物語は、誰かが、長く、情をこめて、ある食の一つの姿がなぜ正直であり、もう一つがなぜ偽りであるかを説くことによって収まる。一九八〇年代に日本酒へ当てはめられたとき、それはこの飲みものがこれまでに引き寄せた、最も広く読まれた論を生んだ。",
          zh:"《美食大挑戰》自一九八三年起在週刊上連載，並建立在一個裝置之上：一家報社的美食小組被交付一項不可能的任務，而故事的解決之道，是由某人長篇且動情地說明為什麼某一種版本的食物是誠實的、另一種是偽物。在一九八〇年代把這套裝置套用到清酒上時，它產生了這種飲品有史以來所吸引到的、最廣為閱讀的論戰。" } },

        { t:"p", text:{
          en:"The target was the sake of the period: mass-produced, alcohol-added, sweetened and acidified, sold on a grade that measured tax rather than quality. The argument made was that sake brewed from rice, water, kōji and yeast alone was the real thing and the rest was adulteration. It was not a subtle position, and by modern standards it was unfair to good honjōzō — but it landed at exactly the moment the jizake movement needed a popular voice, and the manga is widely credited with helping push junmai from a specialist's word into a shopper's word.",
          ja:"標的は当時の酒であった。大量に造られ、酒精を加えられ、甘みと酸を足され、質ではなく税を測る級によって売られていた酒である。なされた論は、米と水と麹と酵母のみから醸された酒こそ真であり、他は混ぜものであるというものであった。それは繊細な立場ではなく、今日の基準からすれば良い本醸造に対して不公平であった。だがそれは、地酒の運動が大衆の声を要していたまさにその時に届き、そしてこの漫画は、純米という語を専門家の言葉から買い手の言葉へ押し出すことを助けたと、広く認められている。",
          zh:"它的標靶是那個年代的清酒：大量生產、添加酒精、加糖加酸，並以一個衡量稅而非品質的等級販售。它提出的論點是：只用米、水、麴與酵母釀成的酒才是真貨，其餘都是摻混。這不是一個細膩的立場，以今日的標準看，它對好的本釀造並不公平——但它恰恰落在地酒運動需要一個大眾聲音的那一刻，而這部漫畫被廣泛認為，幫助把「純米」從專家的詞推成了消費者的詞。" } },

        { t:"note", label:{ en:"Two comics, two mechanisms", ja:"二つの漫画、二つの仕組み", zh:"兩部漫畫，兩種機制" },
          text:{
            en:"Natsuko no Sake changed what was planted by creating demand for a rice. Oishinbo changed what was bought by creating suspicion of a process. The first is a warm story with an agricultural consequence; the second is an argument with a commercial one. Between them they account for most of what the Japanese public believed about sake by the end of the 1990s, which is a remarkable amount of influence for a medium usually discussed as entertainment.",
            ja:"『夏子の酒』は、ある米への需を生むことで植えられるものを変えた。『美味しんぼ』は、ある工程への疑いを生むことで買われるものを変えた。前者は農の帰結をもつ温かな物語であり、後者は商いの帰結をもつ論である。両者を合わせれば、一九九〇年代の終わりまでに日本の世間が日本酒について信じていたことのほとんどが説明される。娯楽として語られるのが常の媒体にしては、目覚ましい量の影響である。",
            zh:"《夏子的酒》透過為一種米創造需求，改變了田裡種什麼。《美食大挑戰》透過對一道工序製造疑慮，改變了人們買什麼。前者是一個帶有農業後果的溫暖故事；後者是一場帶有商業後果的論戰。兩者加起來，就足以解釋到一九九〇年代末為止日本大眾對清酒所相信的大部分內容——對一個通常被當成娛樂來討論的媒介而言，這是相當驚人的影響力。" } }
      ] },

    { t:"section", id:"alone",
      title:{ en:"Drinking alone, on television", ja:"一人で飲むこと、画面の上で", zh:"獨自喝酒，在螢幕上" }, jp:"独酌の物語",
      body:[
        { t:"p", text:{
          en:"The most consequential recent development in this material is not a story about brewing at all. It is a genre in which nothing happens: a person goes into a small restaurant alone, orders carefully, eats, drinks, is briefly and completely happy, and leaves. Wakako-zake has run as a comic since 2011 and as a live-action series across eight seasons; the same shape carries several other long-running programmes.",
          ja:"この領域における近年の最も重みある動きは、造りについての物語ではまったくない。それは何も起こらぬ一つの型である。人が一人で小さな料理屋に入り、注意深く頼み、食い、飲み、束の間まったく幸いであり、そして去る。『ワカコ酒』は二〇一一年より漫画として、そして八期にわたる実写の連なりとして続いてきた。同じ形が、他のいくつもの長く続く番組を担っている。",
          zh:"這批材料裡近年最具後果的發展，根本不是一個關於釀造的故事。它是一種什麼都不發生的類型：一個人獨自走進一家小餐館、仔細地點餐、吃、喝、短暫而徹底地幸福，然後離開。《和歌子酒》自二〇一一年起以漫畫形式連載，並拍出橫跨八季的真人劇集；同樣的形狀也撐起了好幾個長壽節目。" } },

        { t:"p", text:{
          en:"Its importance is social rather than aesthetic. A generation ago a woman drinking alone at a counter would have been conspicuous in most Japanese towns; the genre has been running long enough, and pleasantly enough, that it now reads as ordinary. Anyone who has watched a small izakaya fill up on a weeknight can see the effect: the solo seats at the counter are no longer a male preserve, and a bar that wants that custom now designs for it.",
          ja:"その重みは美よりも社会にある。一世代前ならば、台で一人飲む女性は日本のほとんどの町において人目を引いたであろう。この型は、それが今や当たり前と読まれるだけの長さと心地よさをもって続いてきた。平日の宵に小さな居酒屋が満ちてゆくのを見た者には、その働きが見える。台の一人の席はもはや男の領分ではなく、その客を望む店は今やそれに合わせて設えている。",
          zh:"它的重要性在社會層面而非美學層面。在一個世代之前，一位獨自坐在吧檯喝酒的女性，在日本多數城鎮都會相當醒目；而這個類型已經持續得夠久、也夠令人愉快，久到如今它讀起來就是尋常。任何看過小居酒屋在平日夜晚逐漸坐滿的人，都看得見這個效應：吧檯的單人座不再是男性的專屬地，而想要這種客人的店，如今會為此做設計。" } },

        { t:"quote",
          text:{ en:"A genre in which the entire dramatic question is whether the grilled fish will arrive before the second cup is finished has no business being as good as it is.",
            ja:"劇の問いのすべてが、焼き魚が二杯目の終わる前に来るか否かである型が、これほど良いものである道理はない。",
            zh:"一個「全部的戲劇懸念只在於烤魚會不會在第二杯喝完之前送到」的類型，照理說不該這麼好看。" },
          cite:{ en:"On the quiet drinking genre", ja:"静かな飲みの型について", zh:"關於安靜的飲酒類型" } }
      ] },

    { t:"section", id:"plot",
      title:{ en:"The one plot", ja:"ただ一つの筋", zh:"那一個情節" }, jp:"物語の型",
      body:[
        { t:"p", text:{
          en:"Read or watch enough of this material and a single story emerges with almost no variation. A young person — usually a daughter — has left for the city and built a life there. A parent or a sibling falls ill or dies. She comes back to a brewery she did not want, finds it in trouble, discovers something in its past that she did not know, and decides to stay. Natsuko no Sake is this story. Those Who Brew is this story. So is a good deal of the television drama and the fiction around it.",
          ja:"この種のものを十分に読み、あるいは見れば、ほとんど変わることのない一つの物語が現れる。若い者——たいていは娘である——が町へ出て、そこに生を築いている。親か兄弟が病み、あるいは死ぬ。彼女は望まなかった蔵へ帰り、それが苦境にあるのを見出し、その来し方のなかに自らの知らなかった何かを見出し、そして留まることを決める。『夏子の酒』はこの物語である。『吟ずる者たち』もこの物語である。その周りの連続劇と小説のかなりの部分もまたそうである。",
          zh:"讀夠或看夠這類作品，就會浮現出一個幾乎沒有變化的故事。一個年輕人——通常是女兒——離鄉去了城市，並在那裡建立了生活。父母或手足病倒或去世。她回到一座她原本並不想要的酒藏，發現它陷入困境，在它的過去裡發現某件自己並不知道的事，然後決定留下。《夏子的酒》是這個故事。《吟釀者們》是這個故事。圍繞著它們的許多連續劇與小說也是。" } },

        { t:"compare", cols:2, items:[
          { title:{ en:"Why the plot is true", ja:"その筋が真である理由", zh:"這個情節為何是真的" }, jp:"現実",
            body:[
              { t:"p", text:{
                en:"Because it is what actually happens. Sake breweries are family businesses in the strict sense — the house and the company are the same thing — and the central risk to the whole industry is that a generation does not take over. Depopulation, urban careers and the sheer difficulty of the work mean that the succession decision is the real drama of a very large number of kura, and that the person making it is now, very often, a daughter rather than a son. The fiction is reporting.",
                ja:"それが実際に起きていることだからである。日本酒の蔵は厳密な意味で家の商いであり——家と会社とは同じものである——そして業界全体にとっての中心の危うさは、一つの世代が継がぬことである。人の減り、都会での生業、そして仕事そのものの難しさは、継ぐか否かの決めが、きわめて多くの蔵にとって実の劇であることを意味する。そしてそれを下す人は今や、しばしば息子ではなく娘である。虚構は報道しているのである。",
                zh:"因為那正是實際發生的事。清酒酒藏是嚴格意義上的家族事業——家與公司是同一件東西——而整個產業的核心風險，就是某一代不接手。人口外流、都市裡的職涯，以及這份工作本身的艱難，意味著「接不接手」的決定，對非常大量的酒藏而言就是真正的戲劇；而如今做這個決定的人，往往是女兒而非兒子。虛構作品其實是在做報導。" } }
            ] },
          { title:{ en:"What the plot leaves out", ja:"その筋が落とすもの", zh:"這個情節漏掉了什麼" }, jp:"欠落",
            body:[
              { t:"p", text:{
                en:"The people who actually make the sake. In a succession story the tōji is a wise supporting character and the kurabito are barely present, when in life the crew is where the craft lives and the seasonal-labour system that supplied it collapsed within living memory. The money is missing too: almost nothing in this fiction addresses distribution, allocation, tax, or the fact that a brewery's survival usually turns on a retailer's decision rather than a family's. The result is a body of work that is warm, accurate about agriculture and sentiment, and quiet about the industry.",
                ja:"実際に酒を造る人々である。継承の物語において杜氏は賢い脇の役であり、蔵人はほとんど居合わせない。だが生においては、技が住まうのは組であり、それを供してきた季節労働の仕組みは、今なお記憶に届く年月のうちに崩れた。金もまた欠けている。この虚構のほとんど何も、流通にも、配分にも、税にも、そして蔵の生き残りがたいてい家の決めではなく小売の決めに懸かっているという事実にも触れない。結果として生まれたのは、温かく、農と情については正確であり、そして産業については寡黙な作品の群れである。",
                zh:"真正在釀酒的那些人。在接班故事裡，杜氏是一位睿智的配角，而藏人幾乎不在場；但在現實中，工藝正是活在那個班底之中，而供應這個班底的季節性勞動制度，在仍屬當代人記憶的年月裡就已瓦解。錢也缺席了：這些虛構作品幾乎沒有一部觸及通路、配額、稅，或是「一座酒藏能否活下來，通常取決於零售商而非家族的決定」這個事實。結果是一批溫暖的、在農業與情感上準確的、卻對產業本身保持沉默的作品。" } }
            ] }
        ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"rice.html\">Sake Rice</a> for Kameno-o and its descendants, <a href=\"kojifamily.html\">The Kōji Family</a> for what a moyashi-ya sells, <a href=\"people.html\">People</a> for Miura Senzaburō and the soft-water method, <a href=\"breweries.html\">Breweries</a> for the succession problem in the real world, <a href=\"women.html\">Women and Sake</a> for who is actually taking over.",
          ja:"関連——亀の尾とその子孫は<a href=\"rice.html\">酒米</a>、もやし屋が売るものは<a href=\"kojifamily.html\">麹の一族</a>、三浦仙三郎と軟水醸造法は<a href=\"people.html\">人物</a>、現実における継承の問いは<a href=\"breweries.html\">蔵元</a>、実際に継いでいるのは誰かは<a href=\"women.html\">女性と日本酒</a>。",
          zh:"相關：龜之尾與它的後代見<a href=\"rice.html\">酒米</a>；もやし屋賣的是什麼見<a href=\"kojifamily.html\">麴的家族</a>；三浦仙三郎與軟水釀造法見<a href=\"people.html\">人物</a>；現實世界中的接班問題見<a href=\"breweries.html\">酒藏</a>；實際上是誰在接手見<a href=\"women.html\">女性與日本酒</a>。" } }
      ] },

    { t:"related", items:[
      { href:"rice.html", why:{ en:"Kameno-o, the rice a comic brought back into the fields.", ja:"亀の尾——漫画が田へ戻した米。", zh:"龜之尾——一部漫畫把它送回田裡的米。" } },
      { href:"classification.html", why:{ en:"The additive argument Oishinbo picked, and what the law says.", ja:"『美味しんぼ』が選んだ添加の論と、法が言うこと。", zh:"《美味しんぼ》挑起的添加物之爭，以及法律怎麼說。" } },
      { href:"koji.html", why:{ en:"What Moyashimon is actually explaining, without the jokes.", ja:"『もやしもん』が冗談抜きで説いていること。", zh:"《農大菌物語》拿掉玩笑之後真正在講的東西。" } },
      { href:"culture.html", why:{ en:"The drinking the stories are set inside.", ja:"物語が置かれている、その飲み方。", zh:"這些故事所置身的那種飲酒方式。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- compare */
SAKE.pages["compare"] = {
  kicker: { en: "Foundations · 13", ja: "基礎 · 13", zh: "基礎 · 13" },
  title:  { en: "Sake & Other Drinks", ja: "他の酒との比較", zh: "與其他酒的比較" },
  jp: "発酵の型 · 東アジアの穀物酒",
  lede: {
    en: "Almost every misunderstanding about sake comes from filing it under the wrong heading. It is not a spirit, it is not a wine, and calling it beer misses the one thing that makes it distinctive. The clearest way in is to compare fermentation systems — how the sugar gets there, and who eats it — and then to place sake within the wider family of East Asian grain alcohols it actually belongs to.",
    ja: "日本酒についての誤解のほとんどは、間違った見出しの下に分類することから生じる。蒸留酒ではなく、ワインでもなく、ビールと呼べばその最も際立った特徴を取り逃がす。最も明快な入口は発酵の型を比べること——糖はどこから来て、誰がそれを食べるのか——であり、そのうえで、日本酒が実際に属している東アジアの穀物酒という広い家族のなかに置き直すことである。",
    zh: "關於日本酒的誤解，幾乎都源自把它歸錯了類。它不是蒸餾酒，不是葡萄酒，而稱它為啤酒則錯失了其最鮮明的特徵。最清晰的切入方式是比較發酵系統——糖從何而來、由誰攝取——再把日本酒放回它實際所屬的東亞穀物酒大家族之中。"
  },
  body: [
    { t:"section", id:"systems",
      title:{ en:"Three ways to make alcohol", ja:"アルコールを得る三つの型", zh:"取得酒精的三種方式" }, jp:"発酵の型",
      body:[
        { t:"figure",
          caption:{en:"Wine has sugar already. Beer makes sugar first, then ferments it. Sake does both at once, in one vessel — which is why it reaches an alcohol level neither of the others can.",
                   ja:"ワインには最初から糖がある。ビールはまず糖を作り、それから発酵させる。日本酒は一つの容器のなかで両方を同時に行う。他の二つが到達できないアルコール度に届くのはこのためである。",
                   zh:"葡萄酒本來就有糖。啤酒先造糖，再發酵。日本酒則在同一容器中同時進行兩者——這正是它能達到另外兩者無法企及之酒精度的原因。"},
          svg: function(lang, L){
            var w = {
              wine:{en:"WINE · single fermentation",ja:"ワイン・単発酵",zh:"葡萄酒・單發酵"},
              beer:{en:"BEER · sequential fermentation",ja:"ビール・単行複発酵",zh:"啤酒・單行複發酵"},
              sake:{en:"SAKE · parallel fermentation",ja:"日本酒・並行複発酵",zh:"日本酒・並行複發酵"},
              sug:{en:"sugar",ja:"糖",zh:"糖"},
              sta:{en:"starch",ja:"デンプン",zh:"澱粉"},
              alc:{en:"alcohol",ja:"アルコール",zh:"酒精"},
              malt:{en:"malt enzymes",ja:"麦芽の酵素",zh:"麥芽酵素"},
              koji:{en:"kōji enzymes",ja:"麹の酵素",zh:"麴的酵素"},
              y:{en:"yeast",ja:"酵母",zh:"酵母"},
              one:{en:"one vessel, at the same time",ja:"一つの容器で、同時に",zh:"同一容器，同時進行"},
              sep:{en:"two vessels, one after the other",ja:"二つの容器で、順に",zh:"兩個容器，先後進行"},
              max:{en:"max ≈",ja:"上限 約",zh:"上限 約"}
            };
            function t(k){ return L(w[k]); }
            function box(x,y,ww,label,fill){
              return '<rect x="'+x+'" y="'+y+'" width="'+ww+'" height="34" fill="'+fill+'" stroke="#B4AC9C"/>'+
                     '<text x="'+(x+ww/2)+'" y="'+(y+22)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" fill="#201E1B">'+label+'</text>';
            }
            function arrow(x1,y,x2,label){
              return '<path d="M'+x1+' '+y+' H'+(x2-8)+'" stroke="#7C6B52" stroke-width="1.1"/>'+
                     '<path d="M'+x2+' '+y+' l-8 -4 v8 z" fill="#7C6B52"/>'+
                     '<text x="'+((x1+x2)/2)+'" y="'+(y-8)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#55504A">'+label+'</text>';
            }
            var s='<svg viewBox="0 0 760 340" role="img" aria-label="Three fermentation systems">';
            s+='<rect x="0.5" y="0.5" width="759" height="339" fill="none" stroke="#DFDAD0"/>';
            // wine
            s+='<text x="30" y="38" font-family="Georgia,serif" font-size="12" fill="#55504A" letter-spacing="1.6">'+t("wine")+'</text>';
            s+=box(30,52,140,t("sug"),"#EEE1DF");
            s+=arrow(176,69,300,t("y"));
            s+=box(306,52,140,t("alc"),"#E6E2EC");
            s+='<text x="470" y="74" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C">'+t("max")+' 15 %</text>';
            // beer
            s+='<text x="30" y="140" font-family="Georgia,serif" font-size="12" fill="#55504A" letter-spacing="1.6">'+t("beer")+'</text>';
            s+=box(30,154,120,t("sta"),"#F0EDE4");
            s+=arrow(156,171,250,t("malt"));
            s+=box(256,154,110,t("sug"),"#EDE5D2");
            s+=arrow(372,171,466,t("y"));
            s+=box(472,154,110,t("alc"),"#E6E2EC");
            s+='<text x="600" y="176" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C">'+t("max")+' 8 %</text>';
            s+='<text x="30" y="206" font-family="system-ui,sans-serif" font-size="10" fill="#ADA79E" letter-spacing="1">'+t("sep").toUpperCase()+'</text>';
            // sake
            s+='<text x="30" y="252" font-family="Georgia,serif" font-size="12" fill="#55504A" letter-spacing="1.6">'+t("sake")+'</text>';
            s+='<rect x="24" y="262" width="566" height="56" fill="#F0EDE4" stroke="#CDC6B9"/>';
            s+=box(30,266,120,t("sta"),"#FBFAF7");
            s+=arrow(156,283,250,t("koji"));
            s+=box(256,266,110,t("sug"),"#EDE5D2");
            s+=arrow(372,283,466,t("y"));
            s+=box(472,266,110,t("alc"),"#E6E2EC");
            s+='<text x="600" y="288" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C">'+t("max")+' 20 %</text>';
            s+='<text x="600" y="306" font-family="system-ui,sans-serif" font-size="9.5" fill="#ADA79E">'+t("one")+'</text>';
            s+='</svg>';
            return s;
          }
        },
        { t:"defs", items:[
          { term:{en:"Single fermentation",ja:"単発酵",zh:"單發酵"}, jp:"単発酵",
            def:{en:"The raw material already contains fermentable sugar, so yeast is the only organism involved. Wine, cider, mead, perry. The ceiling is set by how much sugar the fruit had and by the osmotic stress that sugar puts on the yeast at the start — in practice about 15%.",
                 ja:"原料が既に発酵可能な糖を含んでおり、関与する微生物は酵母だけである。ワイン、シードル、蜂蜜酒、ペリー。上限は果実がもっていた糖の量と、その糖が初期に酵母へ与える浸透圧の負荷によって決まる。実際には15%程度である。",
                 zh:"原料本身已含可發酵的糖，因此只有酵母參與。葡萄酒、蘋果酒、蜂蜜酒、梨酒皆屬此類。上限取決於果實原有的糖量，以及該糖在初期對酵母造成的滲透壓負擔——實務上約 15%。"} },
          { term:{en:"Sequential fermentation",ja:"単行複発酵",zh:"單行複發酵"}, jp:"単行複発酵",
            def:{en:"Starch is converted to sugar in one step and fermented in another, in a different vessel. Beer: malted barley is mashed at 60–70 °C until its own enzymes have made a sugary wort, the grain is removed, and only then is yeast pitched. The wort is a sugar solution, so the same osmotic ceiling applies — beer above about 8% is difficult.",
                 ja:"デンプンの糖化と発酵を、別の容器で順に行う。ビールでは、麦芽を60〜70℃で仕込み、自らの酵素が糖液を作るのを待ち、穀物を取り除いてから酵母を加える。麦汁は糖溶液であるから、ワインと同じ浸透圧の上限が働く——8%を超えるビールは難しい。",
                 zh:"澱粉糖化與發酵分別在不同容器中先後進行。啤酒：麥芽在 60–70°C 糖化，直到自身酵素造出含糖麥汁，移去穀物後才投入酵母。麥汁是糖溶液，因此同樣的滲透壓上限適用——超過約 8% 的啤酒並不容易。"} },
          { term:{en:"Parallel fermentation",ja:"並行複発酵",zh:"並行複發酵"}, jp:"並行複発酵",
            def:{en:"Saccharification and fermentation proceed simultaneously in one vessel. Kōji enzymes release glucose only as fast as the yeast consumes it, so the sugar concentration stays low throughout and the yeast is never osmotically stressed. It meets one hostile condition rather than two, and can therefore keep going to 18–20% — the highest natural alcohol of any brewed drink. Sake, and the East Asian grain alcohols related to it.",
                 ja:"糖化と発酵が一つの容器のなかで同時に進む。麹の酵素は、酵母が消費する速度に見合ってのみブドウ糖を放出するため、糖濃度は終始低く保たれ、酵母は浸透圧のストレスを受けない。二つではなく一つの過酷な条件にしか出会わないから、18〜20%まで進むことができる。醸造酒として最高の天然アルコール度である。日本酒と、それに連なる東アジアの穀物酒がこれにあたる。",
                 zh:"糖化與發酵在同一容器中同時進行。麴的酵素僅以酵母消耗的速度釋出葡萄糖，糖濃度全程維持低檔，酵母從不承受滲透壓逆境。它只面對一項而非兩項惡劣條件，因而能推進至 18–20%——釀造酒中最高的天然酒精度。日本酒與其相關的東亞穀物酒即屬此類。"} }
        ] }
      ]
    },

    { t:"section", id:"table",
      title:{ en:"Side by side", ja:"横に並べる", zh:"並列比較" }, jp:"比較表",
      body:[
        { t:"table",
          cols:["",{en:"Sake",ja:"日本酒",zh:"日本酒"},{en:"White wine",ja:"白ワイン",zh:"白酒"},{en:"Beer",ja:"ビール",zh:"啤酒"},{en:"Shōchū",ja:"焼酎",zh:"燒酎"}],
          rows:[
            [{en:"Made by",ja:"造り方",zh:"製法"},{en:"brewing",ja:"醸造",zh:"釀造"},{en:"brewing",ja:"醸造",zh:"釀造"},{en:"brewing",ja:"醸造",zh:"釀造"},{en:"distilling",ja:"蒸留",zh:"蒸餾"}],
            [{en:"Sugar source",ja:"糖の由来",zh:"糖的來源"},{en:"rice starch, via kōji",ja:"米のデンプン、麹による",zh:"米澱粉，經麴轉化"},{en:"grape sugar",ja:"ブドウの糖",zh:"葡萄的糖"},{en:"barley starch, via malt",ja:"大麦のデンプン、麦芽による",zh:"大麥澱粉，經麥芽轉化"},{en:"any — then distilled off",ja:"様々。のち蒸留",zh:"不拘，其後蒸餾"}],
            [{en:"Typical ABV",ja:"標準的な度数",zh:"典型酒精度"},"15–16 %","12–13 %","4–6 %","25 %"],
            [{en:"Acidity",ja:"酸",zh:"酸度"},{en:"low — 1 to 2 g/L equivalent",ja:"低い。1〜2g/L相当",zh:"低——約相當於 1–2 g/L"},{en:"high — 5 to 8 g/L",ja:"高い。5〜8g/L",zh:"高——5–8 g/L"},{en:"low, plus hop bitterness",ja:"低い。加えてホップの苦味",zh:"低，另有啤酒花苦味"},{en:"none",ja:"なし",zh:"無"}],
            [{en:"Tannin",ja:"タンニン",zh:"單寧"},{en:"none",ja:"なし",zh:"無"},{en:"little in white, much in red",ja:"白は少なく、赤は多い",zh:"白酒少，紅酒多"},{en:"none",ja:"なし",zh:"無"},{en:"none",ja:"なし",zh:"無"}],
            [{en:"Amino acids",ja:"アミノ酸",zh:"胺基酸"},{en:"high — the source of umami",ja:"多い。うま味の源",zh:"高——旨味的來源"},{en:"very low",ja:"ごく少ない",zh:"極低"},{en:"moderate",ja:"中程度",zh:"中等"},{en:"none",ja:"なし",zh:"無"}],
            [{en:"Serving range",ja:"供する温度",zh:"供飲溫度"},"5–55 °C","8–14 °C","4–12 °C","0–45 °C"],
            [{en:"Ageing",ja:"熟成",zh:"陳年"},{en:"usually drunk young; koshu ages for decades",ja:"通常は若く飲む。古酒は数十年に及ぶ",zh:"通常年輕即飲；古酒可陳放數十年"},{en:"varies enormously by style",ja:"型により大きく異なる",zh:"因風格差異極大"},{en:"almost always young",ja:"ほぼ常に若いうちに",zh:"幾乎總是趁新飲用"},{en:"stable indefinitely",ja:"事実上無期限に安定",zh:"實質上可無限期穩定"}],
            [{en:"Vintage variation",ja:"作柄の変動",zh:"年份變異"},{en:"deliberately minimised",ja:"意図的に打ち消される",zh:"刻意抹平"},{en:"central to the product",ja:"商品の核心",zh:"產品的核心"},{en:"minimised",ja:"打ち消される",zh:"被抹平"},{en:"irrelevant",ja:"無関係",zh:"無關"}]
          ] },
        { t:"note", label:{en:"The tannin point",ja:"タンニンについて",zh:"關於單寧"}, text:{
          en:"This is the single line in the table that most changes what you can put on the table. Tannin binds to iron and lipids in fish and produces a metallic, fishy off-taste; that is why red wine and raw fish fight. Sake has none at all, which is why it can sit beside oysters, sea urchin, mackerel and ikura — the hardest category in wine pairing — without any argument.",
          ja:"食卓に何を並べられるかを最も変えるのは、この一行である。タンニンは魚の鉄分や脂質と結びつき、金属的な生臭さを生む。赤ワインと生魚が衝突するのはこのためだ。日本酒にはタンニンがまったくない。牡蠣、雲丹、鯖、いくら——ワインの相性において最も難しい領域——と何の摩擦もなく並べられるのはそのためである。",
          zh:"這是表中最能改變「桌上能放什麼」的一行。單寧會與魚的鐵質及脂質結合，產生金屬般的腥味——這正是紅酒與生魚衝突的原因。日本酒完全不含單寧，因此能與生蠔、海膽、鯖魚與鮭魚卵——葡萄酒搭配中最困難的一類——毫無扞格地並陳。" } }
      ]
    },

    { t:"section", id:"family",
      title:{ en:"The East Asian grain family", ja:"東アジアの穀物酒", zh:"東亞穀物酒家族" }, jp:"麹・麯・누룩",
      body:[
        { t:"p", text:{
          en:"Sake is not an isolated invention. It is one member of a family of grain alcohols that stretches from Korea to Vietnam, all of them solving the starch problem with a mould rather than with malt. What separates them is which mould, on what substrate, and whether the resulting drink is filtered, distilled or drunk as it comes.",
          ja:"日本酒は孤立した発明ではない。朝鮮半島からベトナムに至るまで広がる穀物酒の一族の一員であり、いずれもデンプンの問題を麦芽ではなくカビによって解いている。それらを分けるのは、どのカビを、どの基質の上で用いるか、そして得られた酒を漉すか、蒸留するか、そのまま飲むかである。",
          zh:"日本酒不是孤立的發明。它是一個自朝鮮半島延伸至越南的穀物酒家族的一員，這些酒都以黴菌而非麥芽解決澱粉問題。彼此的差別在於：用哪種黴菌、在什麼基質上，以及所得之酒是過濾、蒸餾，還是原樣飲用。" } },
        { t:"table",
          cols:[{en:"Drink",ja:"酒",zh:"酒"},{en:"Characters",ja:"表記",zh:"字"},{en:"Where",ja:"地域",zh:"地區"},{en:"How it differs from sake",ja:"日本酒との違い",zh:"與日本酒的差異"}],
          jpCols:[1],
          rows:[
            [{en:"Huangjiu",ja:"黄酒",zh:"黃酒"},"黄酒 · 紹興酒",{en:"China, especially Zhejiang",ja:"中国、とくに浙江",zh:"中國，尤其浙江"},
             {en:"Made with <em>qū</em> — a brick or cake of raw wheat or rice colonised by a mixed culture of <em>Rhizopus</em>, <em>Aspergillus</em> and yeasts, rather than by a single pure mould on steamed rice. Usually aged for years, often in earthenware, and typically darker, sweeter, more oxidative and more savoury than sake. Shaoxing is the best-known.",
              ja:"麹ではなく麯（きょく）——生の小麦や米を固めて、リゾープス・アスペルギルス・酵母の混合菌叢を繁殖させた塊——を用いる。蒸米に単一の純粋なカビを生やす日本酒とは異なる。多くは数年にわたり甕で熟成され、日本酒より色が濃く、甘く、酸化的で、滋味が強い。紹興酒が最もよく知られる。",
              zh:"使用「麯」——以生小麥或米壓製成塊，繁殖根黴、麴黴與酵母的混合菌群——而非在蒸米上培養單一純種黴菌。多以陶甕陳放數年，通常色深、偏甜、氧化感與旨味都強於日本酒。紹興酒最為知名。"}],
            [{en:"Makgeolli · takju",ja:"マッコリ",zh:"馬格利"},"막걸리 · 濁酒",{en:"Korea",ja:"朝鮮半島",zh:"韓國"},
             {en:"Made with <em>nuruk</em>, a raw-grain starter culture closer to Chinese qū than to Japanese kōji. Left unfiltered and undiluted of its solids, lightly carbonated, 6–8% alcohol, cloudy and tart. The filtered, clarified version is <em>cheongju</em>, which is much closer to sake and shares a common ancestry with it.",
              ja:"日本の麹よりも中国の麯に近い、生穀物の種である麹（ヌルク）を用いる。漉さず固形分を残したまま、軽く発泡し、アルコール6〜8%、白濁して酸味がある。漉して澄ませたものは清酒（チョンジュ）と呼ばれ、日本酒にずっと近く、系譜も共通する。",
              zh:"使用「누룩」（麴），一種以生穀物製成的酒麴，較接近中國的麯而非日本的麴。不過濾、保留固形物，帶輕微氣泡，酒精 6–8%，混濁而帶酸。經過濾澄清者稱「清酒」（청주），與日本酒相近許多，且共有同一系譜。"}],
            [{en:"Shōchū",ja:"焼酎",zh:"燒酎"},"焼酎",{en:"Japan, especially Kyushu",ja:"日本、とくに九州",zh:"日本，尤其九州"},
             {en:"Uses kōji exactly as sake does, then distils the result. Made from sweet potato, barley, rice, buckwheat or brown sugar. Black and white kōji are used rather than yellow, because they produce citric acid, which keeps a warm-climate mash safe. See <a href=\"kojifamily.html\">The Kōji Family</a>.",
              ja:"日本酒とまったく同じく麹を用い、その後に蒸留する。原料は芋・麦・米・そば・黒糖など。黄麹ではなく黒麹・白麹を用いるのは、それらがクエン酸を生成し、温暖な気候の醪を守るからである。<a href=\"kojifamily.html\">麹の一族</a>を参照。",
              zh:"與日本酒完全一樣使用麴，其後加以蒸餾。原料為番薯、大麥、米、蕎麥或黑糖。使用黑麴、白麴而非黃麴，因為它們產生檸檬酸，可保護溫暖氣候下的醪。參見<a href=\"kojifamily.html\">麴的家族</a>。"}],
            [{en:"Awamori",ja:"泡盛",zh:"泡盛"},"泡盛",{en:"Okinawa",ja:"沖縄",zh:"沖繩"},
             {en:"Distilled from Thai long-grain indica rice with black kōji, in a single all-kōji mash rather than the two-stage mash used for shōchū. Aged in earthenware as <em>kūsu</em>; a tradition several centuries old and quite separate from sake.",
              ja:"タイ産のインディカ米と黒麹による蒸留酒。焼酎の二次仕込みではなく、全量を麹とする一段仕込みで造る。甕で熟成させたものは古酒（クース）と呼ばれる。数世紀にわたる、日本酒とはまったく別の伝統である。",
              zh:"以泰國長粒秈米與黑麴蒸餾而成，採全量製麴的一段式仕込，而非燒酎的二段式。以陶甕陳放者稱「古酒」（クース）。這是延續數世紀、與日本酒截然分立的傳統。"}],
            [{en:"Mirin",ja:"みりん",zh:"味醂"},"本みりん",{en:"Japan",ja:"日本",zh:"日本"},
             {en:"Glutinous rice and kōji steeped in shōchū rather than water. The alcohol stops fermentation before it starts, so the kōji enzymes simply saccharify — the result is a sweet, syrupy, 14% seasoning that is structurally a stalled sake. It was drunk as a sweet liqueur in the Edo period.",
              ja:"もち米と麹を、水ではなく焼酎に浸す。アルコールが発酵を始まる前に止めるため、麹の酵素はただ糖化するだけとなる。甘くとろみのある14%の調味料であり、構造的には発酵を止めた日本酒である。江戸期には甘い飲み物として飲まれていた。",
              zh:"以糯米與麴浸於燒酎而非水中。酒精在發酵開始前即予以抑制，麴的酵素只單純進行糖化——成品是甘甜濃稠、酒精 14% 的調味料，結構上等於一款被中止的日本酒。江戶時期曾作為甜味飲品飲用。"}],
            [{en:"Amazake",ja:"甘酒",zh:"甘酒"},"甘酒",{en:"Japan",ja:"日本",zh:"日本"},
             {en:"Rice saccharified by kōji with no yeast at all. Non-alcoholic, intensely sweet from glucose alone with no added sugar. Effectively the first half of sake, stopped before the second half begins.",
              ja:"酵母をまったく用いず、麹だけで米を糖化させたもの。ノンアルコールで、砂糖を加えずブドウ糖のみで強い甘みをもつ。実質的に、日本酒の前半だけを取り出し、後半が始まる前に止めたものである。",
              zh:"完全不用酵母，僅以麴糖化米。無酒精，僅憑葡萄糖便極為甘甜，不加任何糖。實質上就是日本酒的前半段，在後半段開始之前即行停止。"}],
            [{en:"Rice “wine” elsewhere",ja:"各地の米の酒",zh:"各地的米酒"},"米酒 · rượu · tapai",{en:"Southeast Asia",ja:"東南アジア",zh:"東南亞"},
             {en:"Rượu cần in Vietnam, tapai and brem in Indonesia, tuak, chhaang in the Himalaya — mostly <em>Rhizopus</em>-based starters on glutinous rice, often drunk unfiltered and often through a straw from the fermenting jar itself.",
              ja:"ベトナムのルオウ・カン、インドネシアのタパイやブラム、トゥアク、ヒマラヤのチャン——多くはもち米にリゾープス系の種を用い、漉さずに、しばしば発酵中の甕から直接ストローで飲まれる。",
              zh:"越南的 rượu cần、印尼的 tapai 與 brem、tuak，以及喜馬拉雅的 chhaang——多以根黴系酒麴作用於糯米，通常不過濾，且常直接以吸管自發酵甕中吸飲。"}]
          ] },
        { t:"note", label:{en:"On the phrase “rice wine”",ja:"「ライスワイン」という語について",zh:"關於「米酒」一詞"}, text:{
          en:"English has no good word, which is why “rice wine” persists. It is wrong twice over — sake is not made from fruit and does not use a single-fermentation system — and it flattens a whole family of quite different drinks into one label. <em>Sake</em> is the word in English; in Japanese, <em>sake</em> (酒) means alcohol of any kind and the specific word is <em>nihonshu</em> or, in law, <em>seishu</em>.",
          ja:"英語に適切な語がないため、「ライスワイン」が使われ続けている。これは二重に誤っている——日本酒は果実から造られず、単発酵でもない——うえに、まったく異なる酒の一族全体を一つの呼称に押し込めてしまう。英語では sake が語である。日本語の「酒」はあらゆる種類の酒を指し、固有の語は「日本酒」、法令上は「清酒」である。",
          zh:"英語中沒有恰當的詞，因此「rice wine」一直沿用。它兩重皆錯——日本酒既非以果實釀成，也不採單發酵——並把整個差異極大的酒類家族壓成同一個標籤。英語中該用的詞是 sake；而日語的「酒」泛指一切酒類，專有名稱是「日本酒」，法律上則稱「清酒」。" } }
      ]
    },

    { t:"section", id:"wineterms",
      title:{ en:"Reading sake in wine terms", ja:"ワインの語彙で読む", zh:"以葡萄酒的語彙閱讀" }, jp:"翻訳",
      body:[
        { t:"p", text:{
          en:"If wine is the frame you already have, some translations carry across and some do not. These are the ones worth knowing.",
          ja:"すでにワインという枠組みをもっているなら、移し替えられる語とそうでない語がある。知っておく価値のあるものを挙げる。",
          zh:"若你已有葡萄酒的框架，有些概念可以轉譯，有些則不行。以下是值得知道的部分。" } },
        { t:"table",
          cols:[{en:"In wine",ja:"ワインでは",zh:"在葡萄酒中"},{en:"The nearest thing in sake",ja:"日本酒における最も近いもの",zh:"日本酒中最接近者"},{en:"How well it carries",ja:"対応の程度",zh:"對應程度"}],
          rows:[
            [{en:"Grape variety",ja:"ブドウ品種",zh:"葡萄品種"},{en:"Rice variety — Yamada Nishiki, Omachi, Gohyakumangoku",ja:"米の品種——山田錦、雄町、五百万石",zh:"米種——山田錦、雄町、五百萬石"},
             {en:"Partly. The differences are real but far smaller than between Riesling and Syrah, and heavy milling suppresses them further.",ja:"部分的に。差は実在するが、リースリングとシラーの差よりはるかに小さく、深い精米はそれをさらに抑える。",zh:"部分成立。差異真實存在，但遠小於麗絲玲與希哈之別，且深度精米會進一步壓抑它。"}],
            [{en:"Yeast selection",ja:"酵母の選択",zh:"酵母選擇"},{en:"Kyōkai number, prefectural strain, house strain",ja:"きょうかい酵母の番号、県産株、蔵付き株",zh:"協會編號、縣產菌株、自社菌株"},
             {en:"Very well — arguably more consequential in sake than in wine, since yeast is the dominant source of aroma.",ja:"非常によく対応する。香りの主たる源が酵母であるため、ワイン以上に影響が大きいとも言える。",zh:"對應良好——甚至可說在日本酒中比在葡萄酒中更關鍵，因為酵母是香氣的主要來源。"}],
            [{en:"Terroir",ja:"テロワール",zh:"風土"},{en:"Water, climate, guild tradition — see <a href=\"terroir.html\">Terroir</a>",ja:"水、気候、杜氏の伝統——<a href=\"terroir.html\">風土</a>を参照",zh:"水、氣候、杜氏傳統——參見<a href=\"terroir.html\">風土</a>"},
             {en:"Contested. Water and climate carry; soil and site expression largely do not survive milling.",ja:"議論がある。水と気候は対応するが、土壌や区画の表現は精米を越えて残らない。",zh:"有爭議。水與氣候能對應；土壤與地塊的表現多半無法通過精米而留存。"}],
            [{en:"Vintage",ja:"ヴィンテージ",zh:"年份"},{en:"BY, the brewing year",ja:"BY、酒造年度",zh:"BY，釀造年度"},
             {en:"Poorly. Rice quality does vary, but brewers adjust deliberately to cancel it out. Consistency is the stated goal.",ja:"対応しない。米の質は変動するが、造り手はそれを打ち消すよう意図的に調整する。恒常性が目標として掲げられている。",zh:"對應不佳。米質確有變動，但釀造者刻意調整以抵消之。一致性正是明示的目標。"}],
            [{en:"Malolactic fermentation",ja:"マロラクティック発酵",zh:"乳酸發酵"},{en:"Kimoto and yamahai starters",ja:"生酛・山廃の酒母",zh:"生酛與山廢酒母"},
             {en:"Loosely. Both are lactic-bacterial interventions that add savoury depth and change acid character, though the mechanism is quite different.",ja:"緩やかに対応する。いずれも乳酸菌による介入であり、滋味を加え酸の性格を変えるが、機序はかなり異なる。",zh:"寬鬆對應。兩者都是乳酸菌的介入，能增添旨味厚度並改變酸的性格，惟機制相當不同。"}],
            [{en:"Oak",ja:"オーク",zh:"橡木"},{en:"Taruzake — Yoshino cedar",ja:"樽酒——吉野杉",zh:"樽酒——吉野杉"},
             {en:"Not really. Cedar gives resin and green freshness in days, not vanilla and spice over months, and it is used on a small minority of sake.",ja:"あまり対応しない。杉は数か月かけたバニラや香辛料ではなく、数日で樹脂と青さを与える。用いられるのはごく一部の酒に限られる。",zh:"其實不然。杉木在數日內給予樹脂與青綠感，而非數月累積的香草與香料；且僅少數酒使用。"}],
            [{en:"Residual sugar",ja:"残糖",zh:"殘糖"},{en:"Sake meter value and acidity together",ja:"日本酒度と酸度を併せて読む",zh:"日本酒度與酸度並讀"},
             {en:"Only approximately. SMV is a density reading, not a sugar assay — see <a href=\"numbers.html\">Numbers &amp; Chemistry</a>.",ja:"おおよそのみ。日本酒度は比重の読み値であって糖の分析値ではない。<a href=\"numbers.html\">成分と数値</a>を参照。",zh:"僅為近似。日本酒度是比重讀數而非糖分分析——參見<a href=\"numbers.html\">成分與數值</a>。"}],
            [{en:"Decanting",ja:"デカンタージュ",zh:"醒酒"},{en:"Katakuchi, or simply time in the glass",ja:"片口、あるいは杯のなかの時間",zh:"片口，或單純讓酒在杯中靜置"},
             {en:"Well for dense muroka nama genshu, badly for delicate daiginjō, which loses more than it gains.",ja:"濃厚な無濾過生原酒にはよく効き、繊細な大吟醸には逆効果である。得るものより失うものが多い。",zh:"對濃厚的無濾過生原酒有效，對細緻的大吟釀則有害——失去的多於得到的。"}]
          ] }
      ]
    },

{ t:"section", id:"huangjiu",
      title:{ en:"Sake and Chinese huangjiu", ja:"日本酒と中国の黄酒", zh:"日本酒與中國黃酒" }, jp:"黄酒との比較",
      body:[
        { t:"p", text:{
          en:"Huangjiu — Chinese yellow wine, of which Shaoxing is the best-known — is sake's closest relative and its oldest one. Both are grain drinks fermented with a cultivated mould that saccharifies and a yeast that ferments, both do the two steps in one vessel, and the Japanese technique descends from the Chinese one. The differences are all the more interesting for that.",
          ja:"黄酒——紹興酒がその最もよく知られたもの——は、日本酒に最も近い親戚であり、最も古い親戚でもある。いずれも、糖化する培養された菌と、発酵する酵母によって醸される穀物の酒であり、いずれも二つの段階を一つの容器で行い、そして日本の技術は中国のそれに由来する。だからこそ、その違いはいっそう興味深い。",
          zh:"黃酒——紹興酒是其中最為人所知者——是清酒最親近、也最古老的親戚。兩者都是以能糖化的培養菌與能發酵的酵母共同釀成的穀物酒，都在同一容器中完成兩個步驟，而日本的技術正源自中國。也正因如此，兩者的差異才更加耐人尋味。" } },
        { t:"table",
          caption:{en:"Where the two traditions diverge",ja:"二つの伝統が分かれるところ",zh:"兩個傳統的分歧之處"},
          cols:["",{en:"Sake 日本酒",ja:"日本酒",zh:"日本酒"},{en:"Huangjiu 黄酒",ja:"黄酒",zh:"黃酒"}],
          rows:[
            [{en:"Saccharifying agent",ja:"糖化の担い手",zh:"糖化媒介"},
             {en:"<em>Kōji</em> 麹 — a single cultivated species, <em>Aspergillus oryzae</em>, deliberately inoculated onto steamed rice from a purchased spore starter.",ja:"麹——単一の培養種 <em>Aspergillus oryzae</em> を、購入した種麹から蒸米に意図して接種する。",zh:"麴——單一培養菌種 <em>Aspergillus oryzae</em>，以外購的種麴刻意接種於蒸米之上。"},
             {en:"<em>Qū</em> 麴/曲 — a mixed culture on raw wheat or rice, colonised by <em>Rhizopus</em>, <em>Absidia</em>, <em>Aspergillus</em>, wild yeasts and bacteria together, usually without inoculation.",ja:"麴（曲）——生の小麦や米の上の混合培養であり、<em>Rhizopus</em>、<em>Absidia</em>、<em>Aspergillus</em>、野生酵母、細菌が共に住みつく。多くは接種を行わない。",zh:"麴／曲——在生小麥或生米上的混合培養，由根黴、犁頭黴、麴黴、野生酵母與細菌共同定殖，通常不經接種。"}],
            [{en:"Substrate for the culture",ja:"培養の基質",zh:"培養基質"},
             {en:"Steamed, polished rice.",ja:"蒸した精白米。",zh:"蒸熟的精白米。"},
             {en:"Usually raw crushed wheat, pressed into bricks or balls and left to colonise.",ja:"多くは生の砕いた小麦を、塊や餅に固めて自然に菌をつける。",zh:"多為生的碎小麥，壓成磚或球狀後任其自然長菌。"}],
            [{en:"Milling",ja:"精米",zh:"精米"},
             {en:"Central. Removing 30–65% of the grain is the main quality lever.",ja:"中心的である。粒の30〜65%を削ることが、品質の主たるてこである。",zh:"居於核心。削去 30–65% 的米粒是品質的主要槓桿。"},
             {en:"Marginal. Rice is used close to whole; the flavour comes from the qū and from ageing.",ja:"周辺的である。米はほぼ丸ごと用いられ、味は麴と熟成から来る。",zh:"次要。米幾乎整粒使用；風味來自麴與陳放。"}],
            [{en:"Acidity",ja:"酸",zh:"酸度"},
             {en:"Low. Around 1.0–2.0 by the Japanese titration measure; the mash is kept clean.",ja:"低い。日本の滴定でおよそ1.0〜2.0であり、醪は清浄に保たれる。",zh:"低。以日本的滴定法約為 1.0–2.0；醪保持潔淨。"},
             {en:"Higher, and deliberately so. Bacteria in the qū contribute lactic and other acids that are part of the intended flavour.",ja:"高く、しかも意図してそうである。麴中の細菌が乳酸などの酸を与え、それが意図された味の一部である。",zh:"較高，且是刻意如此。麴中的細菌貢獻乳酸與其他酸，那正是預期風味的一部分。"}],
            [{en:"Colour and ageing",ja:"色と熟成",zh:"色澤與陳放"},
             {en:"Pale by design; ageing is a minority practice and the market prizes freshness.",ja:"設計として淡い。熟成は少数派の営みであり、市場は新しさを尊ぶ。",zh:"依設計而呈淺色；陳放屬少數派作法，市場推崇新鮮。"},
             {en:"Amber to brown by design; long ageing is normal and the market prizes it. Fifteen- and twenty-year bottlings are standard products.",ja:"設計として琥珀から褐色である。長い熟成が普通であり、市場はそれを尊ぶ。十五年、二十年の瓶詰めは定番の商品である。",zh:"依設計而呈琥珀至褐色；長期陳放是常態，市場也推崇它。十五年、二十年的酒是常規商品。"}],
            [{en:"Typical strength",ja:"度数",zh:"酒精度"},
             {en:"15–16% after dilution; 18–20% undiluted.",ja:"割水後15〜16%、原酒で18〜20%。",zh:"加水後 15–16%；原酒 18–20%。"},
             {en:"14–18%, often with residual sugar categorised on the label as dry, semi-dry, semi-sweet or sweet.",ja:"14〜18%。残糖により、酒標上で干型・半干型・半甜型・甜型に区分されることが多い。",zh:"14–18%，並常依殘糖在酒標上分為乾型、半乾型、半甜型與甜型。"}],
            [{en:"At the table",ja:"食卓では",zh:"在餐桌上"},
             {en:"Served across 5–55°C; drunk as a beverage in its own right and used lightly in cooking.",ja:"5〜55度の幅で供され、それ自体を飲む酒であり、料理にも軽く用いられる。",zh:"以 5–55°C 供飲；既是獨立飲品，也少量用於烹調。"},
             {en:"Usually warmed, often with ginger or dried plum; also one of the central cooking wines of Chinese cuisine.",ja:"多くは温めて、生姜や話梅を添えて供される。中国料理の中心的な料理酒の一つでもある。",zh:"多半溫飲，常佐薑絲或話梅；同時也是中國料理最核心的料理酒之一。"}]
          ] },
        { t:"p", text:{
          en:"The deepest difference is philosophical rather than technical. Japanese brewing spent four centuries narrowing: one mould species, one yeast strain, one polished grain, a clear liquid, a young drink. Chinese brewing kept the mixed culture, the whole grain, the acidity and the years in the jar. Neither is a failure to become the other; they are two coherent answers to the same problem, and a drinker who knows one has a considerable head start on the other.",
          ja:"最も深い違いは、技術というより思想にある。日本の酒造りは四世紀をかけて絞り込んできた——一つの菌種、一つの酵母株、削られた一粒、澄んだ液、若い酒へ。中国の酒造りは、混合培養と、丸ごとの穀物と、酸と、甕のなかの歳月を保ち続けた。どちらも、他方になり損ねたのではない。同じ問いに対する二つの筋の通った答えであり、一方を知る飲み手は、他方についてもかなりの先行きを持っている。",
          zh:"最深層的差異在於哲學而非技術。日本的釀造花了四個世紀不斷收窄：單一菌種、單一酵母株、削磨過的米粒、清澈的酒液、年輕的酒。中國的釀造則保留了混合培養、完整的穀物、酸度，以及甕中的歲月。兩者都不是「未能成為對方」；它們是對同一道難題的兩個自洽答案，而懂得其一的飲者，在另一者上已擁有相當可觀的起跑優勢。" } }
      ]
    },
    { t:"section", id:"shaoxing",
      title:{ en:"The four Shaoxing wines, and the one that is also a sake", ja:"紹興酒の四つの型と、そのうち日本酒でもあるもの", zh:"紹興酒的四種，以及其中也是清酒的那一種" }, jp:"紹興酒の四型",
      body:[
        { t:"p", text:{
          en:"Huangjiu is not one drink and Shaoxing is not one style. The tradition divides into four types that differ not in grape or vintage but in what was put into the tank instead of water, which is a distinction a sake drinker is unusually well equipped to understand. Ranked by sugar they run from dry to dessert, and the two sweet ones are made by replacing the brewing water with something that already contains alcohol.",
          ja:"黄酒は一つの飲み物ではなく、紹興酒も一つの型ではない。この伝えは四つの型に分かれる。分かつのは葡萄でも年でもなく、水の代わりに槽へ何を入れたかである。それは日本酒の飲み手が、ことのほかよく解しうる区別である。糖により並べれば辛口から食後酒まで至り、甘い二つは、仕込みの水を、すでにアルコールを含む何かに置き換えて造られる。",
          zh:"黃酒不是單一一種酒，紹興酒也不是單一一種風格。這個傳統分成四型，區別它們的不是葡萄或年份，而是「拿什麼代替水放進槽裡」——這正是清酒飲者格外能夠理解的一種區別。依糖分排序，它們從辛口一路走到餐後酒；而甜的那兩種，是把仕込用水換成某種本身就含酒精的東西做出來的。" } },

        { t:"table",
          caption:{ en:"Shaoxing by sweetness class, with the Chinese national standard's sugar bands", ja:"甘辛の等級による紹興酒と、中国の国家標準による糖分の帯", zh:"依甜度分級的紹興酒，附中國國家標準的糖分區間" },
          cols:[ { en:"Type", ja:"型", zh:"類型" }, { en:"Kanji", ja:"表記", zh:"漢字" }, { en:"Sugar, g/L", ja:"糖分 g/L", zh:"糖分 g/L" }, { en:"What replaces the water", ja:"水に代わるもの", zh:"用什麼代替水" } ],
          jpCols:[1], numCols:[2], keyCol:0,
          rows:[
            [ { en:"Yuanhong — dry", ja:"元紅酒・干型", zh:"元紅酒・干型" }, "元紅酒", "< 15",
              { en:"Nothing. Glutinous rice, wheat qū and water, in the classical proportions. This is the base style and the one a Shaoxing brewer would call plain Shaoxing; very little of it leaves China.",
                ja:"何も置き換えない。もち米、麦麹、水を古典の配合で。これが基となる型であり、紹興の造り手が素の紹興酒と呼ぶものである。中国を出るものは、ごくわずかである。",
                zh:"什麼都不換。糯米、麥麴與水，按古典配比。這是基礎款，也是紹興的釀造者口中的「素紹興」；離開中國的量非常少。" } ],
            [ { en:"Jiafan — semi-dry", ja:"加飯酒・半干型", zh:"加飯酒・半干型" }, "加飯酒", "15–40",
              { en:"Still water, but more rice. The name means added rice: roughly a tenth more grain and qū into the same volume, and a longer fermentation. Over nine tenths of the Shaoxing sold in Japan is this.",
                ja:"水のままであるが、米を増す。名は飯を加えると読む。同じ量に対しておよそ一割多い米と麹を入れ、より長く醗酵させる。日本で売られる紹興酒の九割を超えるものがこれである。",
                zh:"水照舊，但米加多。名字的意思就是「加飯」：同樣的容量裡多放約一成的米與麴，發酵也更久。在日本販售的紹興酒，九成以上是這一種。" } ],
            [ { en:"Shanniang — semi-sweet", ja:"善醸酒・半甜型", zh:"善釀酒・半甜型" }, "善醸酒", "40–100",
              { en:"Aged huangjiu, in place of the water. The alcohol already in the liquid stops the yeast early and leaves the sugar behind, which is the whole mechanism.",
                ja:"水の代わりに、寝かせた黄酒を用いる。液にすでにあるアルコールが酵母を早く止め、糖を残す。仕掛けはその全体である。",
                zh:"用陳年黃酒代替水。液體裡原本就有的酒精讓酵母提早停下，把糖留下來——整套機制就是這樣。" } ],
            [ { en:"Xiangxue — sweet", ja:"香雪酒・甜型", zh:"香雪酒・甜型" }, "香雪酒", "> 100",
              { en:"Lees spirit, in place of the water. The distillate made from pressed huangjiu lees goes into the mash instead, which stops fermentation almost at once and leaves a dessert wine at fifteen per cent or above.",
                ja:"水の代わりに、粕取りの蒸留酒を用いる。搾った黄酒の粕から取った酒が醪へ入り、醗酵をほとんど直ちに止め、十五度以上の食後酒を残す。",
                zh:"用酒糟蒸餾出的酒代替水。以壓榨後的黃酒酒糟蒸得的酒進醪，幾乎立刻中止發酵，留下一支十五度以上的餐後酒。" } ]
          ] },

        { t:"note", title:{ en:"The same idea, arrived at twice", ja:"同じ着想に、二度たどり着く", zh:"同一個念頭，被想到兩次" }, text:{
          en:"Shanniang replaces the brewing water with finished wine. So does <a href=\"styles.html\">kijōshu</a>, the Japanese style created at the national brewing institute in 1973 and based on a technique recorded in the tenth-century <em>Engishiki</em>. The two are not versions of each other and there is no need to claim influence in either direction: they are two traditions reaching the same conclusion from the same starting point, which is that if you want sugar left in the glass, the cheapest way to get it is to make the yeast's job impossible before it finishes. Tasted side by side the family resemblance is unmistakable, and a bottle of each is the single most instructive pairing on this page.",
          ja:"善醸酒は仕込みの水を、仕上がった酒に置き換える。<a href=\"styles.html\">貴醸酒</a>もそうである。国の醸造試験所において一九七三年に生まれ、十世紀の『延喜式』に記された技に拠った日本の型である。二つは互いの版ではなく、いずれの向きにも影響を唱える要はない。同じ出発点から同じ結論に至った二つの伝えである。すなわち、杯に糖を残したいのであれば、最も安い道は、酵母がその仕事を終える前にそれを不可能にすることである、という結論である。並べて味わえば血のつながりは紛れもなく、両方を一本ずつ置くことは、この頁において最も多くを教える組合せである。",
          zh:"善釀酒把仕込用水換成釀好的酒。<a href=\"styles.html\">貴釀酒</a>也是——那是一九七三年在日本國立釀造試驗所誕生、依據十世紀《延喜式》所載技法的日本風格。這兩者不是彼此的版本，也沒有必要在任何一個方向上主張誰影響了誰：它們是兩個傳統從同一個起點走到同一個結論——如果你想把糖留在杯子裡，最便宜的辦法就是在酵母做完它的工作之前，讓那件工作變得不可能。並排品飲時，那份血緣關係毫無疑問；各備一瓶，是本頁上最具教學價值的一組搭配。" } },

        { t:"defs", items:[
          { term:{ en:"Wheat qū, not rice kōji", ja:"米麹ではなく麦麹", zh:"麥麴，不是米麴" }, jp:"麦麹", romaji:"mài qū",
            def:{ en:"Shaoxing saccharifies with a brick of crushed raw wheat left to grow a mixed culture of moulds, yeasts and bacteria — not the single inoculated species on steamed rice that a Japanese brewery uses. The consequence reaches the glass directly: a mixed culture produces a wider and less predictable set of flavours, more acid and more of the savoury, soy-adjacent notes that make huangjiu taste to a sake drinker like something that has already been aged.",
              ja:"紹興酒は、砕いた生の小麦の塊に黴と酵母と細菌の混じった培養を育てて糖化する。日本の蔵が用いる、蒸した米の上の単一の接種された種ではない。その帰結は直に杯へ届く。混じった培養は、より広く、より読みにくい味の組を生み、より多くの酸と、醤油に近い旨みの調子を与える。日本酒の飲み手に、黄酒がすでに熟れたもののように感じられるのはそのためである。",
              zh:"紹興酒是靠一塊由碾碎生小麥培養出的、混合了黴菌、酵母與細菌的麴來糖化——不是日本酒藏所用的那種「在蒸米上接種單一菌種」。後果會直接抵達杯子：混合培養產生的風味組更寬、也更難預測，帶更多酸，以及更多接近醬油的鮮味調性——這正是為什麼在清酒飲者嘗來，黃酒像是已經陳放過的東西。" } },
          { term:{ en:"Winter brewing, and the same reason", ja:"冬醸と、その同じ理由", zh:"冬釀，以及同一個理由" }, jp:"冬醸", romaji:"dōng niàng",
            def:{ en:"Traditional Shaoxing is brewed between the beginning of winter and the beginning of spring, on the same reasoning that produced the Japanese <em>kanzukuri</em>: a mixed, uninoculated culture in an open vessel only behaves in the cold. Both traditions built a calendar, a seasonal workforce and a whole vocabulary around a constraint that refrigeration removed, and both kept most of it afterwards.",
              ja:"伝統の紹興酒は、立冬から立春のあいだに醸される。日本の寒造りを生んだのと同じ理屈による。開いた器のなかの、混じり合い、接種されぬ培養は、寒さのうちでしか行儀よくふるまわない。いずれの伝えも、冷蔵が取り除いた制約の周りに暦と季節の働き手と語彙の全体を築き、そしていずれも、そののちその多くを保った。",
              zh:"傳統的紹興酒在立冬到立春之間釀造，理由與造就日本「寒造」的那一套完全相同：一群混合的、未經接種的菌在敞開的容器裡，只有在低溫下才會守規矩。兩個傳統都圍繞著同一個「被冷藏技術取消掉的限制」，建立了曆法、季節性勞動力與一整套語彙；而在冷藏之後，兩者也都把其中大部分保留了下來。" } },
          { term:{ en:"Huadiao, and the daughter's jar", ja:"花雕と、娘の甕", zh:"花雕，與女兒的那一甕" }, jp:"花雕酒", romaji:"huā diāo jiǔ",
            def:{ en:"<em>Huadiao</em> means carved flowers, and refers to jiafan aged in decorated earthenware jars rather than to a separate recipe. The custom behind the name is worth knowing: jars were sealed and buried when a daughter was born and opened at her wedding, which is why the same wine is also called <em>nü'er hong</em>, daughter's red. A sake drinker meeting a twenty-year huadiao for the first time usually reaches for the vocabulary of koshu, and is right to.",
              ja:"花雕とは彫られた花を言い、別の処方ではなく、飾られた陶の甕で寝かせた加飯酒を指す。その名の背後にある習いは知る値打ちがある。娘が生まれたときに甕を封じて埋め、その婚礼に開いた。同じ酒が女児紅とも呼ばれるのはそのためである。二十年の花雕に初めて出会う日本酒の飲み手は、たいてい古酒の語彙へ手を伸ばす。そしてそれは正しい。",
              zh:"「花雕」指的是雕花，說的是裝在有紋飾陶甕中陳放的加飯酒，而不是另一種配方。這個名字背後的習俗值得知道：女兒出生時封甕入土，出嫁時開封——這也是同一種酒又被稱作「女兒紅」的原因。一位第一次遇上二十年花雕的清酒飲者，通常會伸手去拿古酒的那套詞彙；而他是對的。" } }
        ] }
      ] },


    { t:"section", id:"neighbours",
      title:{ en:"The wider neighbourhood", ja:"より広い近隣", zh:"更廣的鄰里" }, jp:"周辺の酒",
      body:[
        { t:"defs", items:[
          { term:{en:"Makgeolli",ja:"マッコリ",zh:"馬格利"}, jp:"韓国・生濁酒",
            def:{en:"Korean unfiltered rice brew, saccharified with <em>nuruk</em> — a wheat starter closer to Chinese qū than to Japanese kōji, again a mixed culture. Typically 6–8% alcohol, cloudy, lightly sparkling and lactic, and usually drunk very fresh. It is what sake would be if it had never been strained and never been standardised.",
              ja:"韓国の漉さない米の酒で、糖化にはヌルクを用いる。これは日本の麹より中国の麴に近い小麦の種であり、やはり混合培養である。多くは6〜8%で、濁り、軽く発泡し、乳酸を帯び、たいてい搾りたてで飲まれる。日本酒が、もし漉されることも標準化されることもなかったならば、こうなっていたであろう姿である。",
              zh:"韓國未過濾的米酒，以「누룩（麴子）」糖化——那是一種比日本麴更接近中國麴的小麥麴種，同樣屬混合培養。通常 6–8% 酒精、混濁、微帶氣泡與乳酸，且多趁極新鮮時飲用。它就是清酒若從未被過濾、也從未被標準化的模樣。"} },
          { term:{en:"Shōchū and awamori",ja:"焼酎と泡盛",zh:"燒酎與泡盛"}, jp:"蒸留酒",
            def:{en:"Japan's distilled spirits, made from a kōji mash and then distilled. Awamori uses black kōji on long-grain Thai rice and is the older tradition, from Okinawa; shōchū uses white or black kōji on barley, sweet potato, rice or buckwheat. They share sake's front half entirely and diverge at the still.",
              ja:"日本の蒸留酒であり、麹による醪を蒸留して造る。泡盛は黒麹をタイ産の長粒米に用いる沖縄の、より古い伝統である。焼酎は白麹や黒麹を、麦、甘藷、米、蕎麦に用いる。日本酒と前半をすべて共有し、蒸留器で分かれる。",
              zh:"日本的蒸餾酒，以麴製醪後再行蒸餾。泡盛以黑麴用於泰國長粒米，是源自沖繩的更古老傳統；燒酎則以白麴或黑麴用於大麥、番薯、米或蕎麥。它們與清酒完全共享前半段流程，在蒸餾器處分道揚鑣。"} },
          { term:{en:"Beer",ja:"ビール",zh:"啤酒"}, jp:"麦芽",
            def:{en:"The other great grain drink, and the useful contrast: beer saccharifies with enzymes the barley makes itself when germinated, in a separate mashing step, then boils the wort with hops and ferments it cool. Two sequential steps, an antimicrobial additive, and a ceiling around 5–8% alcohol. Sake has no boil, no hops and no separate mash — and reaches 20%.",
              ja:"もう一つの偉大な穀物の酒であり、有益な対照である。ビールは、発芽した大麦が自ら作る酵素で、独立した糖化の工程において糖化し、麦汁をホップとともに煮沸してから低温で発酵させる。二つの逐次的な段階、抗菌の添加物、そして5〜8%あたりの上限。日本酒には煮沸もホップも独立した糖化もなく、そして20%に達する。",
              zh:"另一種偉大的穀物酒，也是有用的對照：啤酒以大麥發芽時自行產生的酵素、在獨立的糖化步驟中糖化，接著把麥汁與啤酒花共煮，再低溫發酵。兩個依序進行的步驟、一種抗菌添加物，以及約 5–8% 的酒精上限。清酒沒有煮沸、沒有啤酒花、沒有獨立糖化——而且能達到 20%。"} },
          { term:{en:"Wine",ja:"ワイン",zh:"葡萄酒"}, jp:"果実酒",
            def:{en:"The easiest contrast of all: the sugar is already in the fruit, so there is only one step and the grower's decisions matter more than the maker's. Wine also brings tannin, high acidity and vintage variation — three things sake does not have — and lacks sake's glutamate. This is exactly why the two behave so differently at a table.",
              ja:"最も分かりやすい対照である。糖ははじめから果実のなかにあるため、段階は一つしかなく、造り手より育て手の判断が重い。ワインはまた、タンニン、高い酸、そして作柄の変動をもたらす——日本酒がもたないこの三つを——そして日本酒のグルタミン酸を欠く。二つが食卓でこれほど違う振る舞いをするのは、まさにそのためである。",
              zh:"最容易理解的對照：糖本就在果實裡，因此只有一個步驟，而栽培者的決定比釀造者更關鍵。葡萄酒還帶來單寧、高酸度與年份變異——這三樣清酒都沒有——並缺少清酒的麩胺酸。這正是兩者在餐桌上表現如此不同的原因。"} }
        ] }
      ]
    },

{ t:"section", id:"numeric",
      title:{ en:"Side by side, in numbers", ja:"数値で並べる", zh:"以數值並列" }, jp:"比較表",
      body:[
        { t:"p", text:{
          en:"Descriptive comparison only gets so far. Set the drinks against each other on the measurable axes and the reasons sake behaves as it does at a table stop being a matter of opinion.",
          ja:"記述による比較には限りがある。測りうる軸の上で並べれば、日本酒が食卓でなぜそのように振る舞うのかは、意見の問題であることをやめる。",
          zh:"描述性的比較能走的距離有限。把這些飲品放在可測量的軸線上互相對照，清酒在餐桌上為何如此表現，就不再是見仁見智的問題。" } },

        { t:"table",
          cols:["",{en:"Sake",ja:"日本酒",zh:"清酒"},{en:"Wine",ja:"ワイン",zh:"葡萄酒"},{en:"Beer",ja:"ビール",zh:"啤酒"}],
          rows:[
            [{en:"Fermentation",ja:"発酵の型",zh:"發酵型式"},
             {en:"Parallel — saccharification and fermentation together in one vessel",ja:"並行複発酵。糖化と発酵が一つの容器で同時に",zh:"並行複發酵——糖化與發酵在同一容器中同時進行"},
             {en:"Single — the sugar is already in the fruit",ja:"単発酵。糖は果実にすでにある",zh:"單發酵——糖已存在於果實中"},
             {en:"Sequential — mash first, then ferment",ja:"単行複発酵。糖化を終えてから発酵",zh:"單行複發酵——先糖化，再發酵"}],
            [{en:"Typical strength",ja:"通常のアルコール分",zh:"典型酒精度"},
             {en:"15–16%, up to 20% undiluted",ja:"15〜16%。原酒で20%まで",zh:"15–16%，原酒可達 20%"},
             {en:"11–15%",ja:"11〜15%",zh:"11–15%"},
             {en:"4–6%",ja:"4〜6%",zh:"4–6%"}],
            [{en:"Why that strength is possible",ja:"その強さが可能な理由",zh:"為何能達到那個強度"},
             {en:"Sugar is released only as fast as the yeast consumes it, so it never accumulates enough to inhibit fermentation",ja:"糖は酵母が消費するのと同じ速さでしか放たれず、発酵を阻害するほど溜まらない",zh:"糖的釋出速度只跟得上酵母的消耗，因此永遠累積不到足以抑制發酵的濃度"},
             {en:"Limited by the sugar the grape contained",ja:"葡萄が含んでいた糖に限られる",zh:"受限於葡萄本身所含的糖"},
             {en:"Limited by mash sugar and by yeast tolerance",ja:"麦汁の糖と酵母の耐性に限られる",zh:"受限於麥汁的糖與酵母耐受度"}],
            [{en:"pH",ja:"pH",zh:"pH"},
             {en:"About 4.2–4.6",ja:"およそ4.2〜4.6",zh:"約 4.2–4.6"},
             {en:"About 3.0–3.8",ja:"およそ3.0〜3.8",zh:"約 3.0–3.8"},
             {en:"About 4.0–4.6",ja:"およそ4.0〜4.6",zh:"約 4.0–4.6"}],
            [{en:"Titratable acidity",ja:"酸度",zh:"可滴定酸度"},
             {en:"Low — roughly a third of a white wine's",ja:"低い。白ワインのおよそ三分の一",zh:"低——約為白酒的三分之一"},
             {en:"High, and structural",ja:"高く、構造をなす",zh:"高，且構成骨架"},
             {en:"Low to moderate",ja:"低から中",zh:"低至中等"}],
            [{en:"Tannin",ja:"タンニン",zh:"單寧"},
             {en:"None",ja:"ない",zh:"沒有"},
             {en:"Substantial in red; present in white",ja:"赤に多く、白にもある",zh:"紅酒中大量，白酒中亦有"},
             {en:"Trace polyphenols from hops and malt",ja:"ホップと麦芽由来の微量のポリフェノール",zh:"來自啤酒花與麥芽的微量多酚"}],
            [{en:"Free amino acids",ja:"遊離アミノ酸",zh:"游離胺基酸"},
             {en:"High — the source of its umami and the reason it sits so well with dashi",ja:"多い。旨味の源であり、出汁とよく合う理由である",zh:"高——旨味的來源，也是它與高湯如此合拍的原因"},
             {en:"Low",ja:"少ない",zh:"低"},
             {en:"Low to moderate",ja:"低から中",zh:"低至中等"}],
            [{en:"Added sulphites",ja:"亜硫酸の添加",zh:"添加亞硫酸鹽"},
             {en:"None. Preservation is by pasteurisation instead",ja:"なし。保存は火入れによる",zh:"沒有。保存靠的是火入（加熱殺菌）"},
             {en:"Usual",ja:"通常は加える",zh:"通常會加"},
             {en:"None",ja:"なし",zh:"沒有"}],
            [{en:"Gluten",ja:"グルテン",zh:"麩質"},
             {en:"None — rice, kōji, water",ja:"ない。米、麹、水である",zh:"沒有——米、麴、水"},
             {en:"None",ja:"ない",zh:"沒有"},
             {en:"Yes, from barley or wheat",ja:"ある。大麦や小麦に由来する",zh:"有，來自大麥或小麥"}],
            [{en:"Useful serving range",ja:"意味のある温度域",zh:"有意義的供飲溫度範圍"},
             {en:"5 to 55 °C — the widest of any drink in common use",ja:"5℃から55℃。日常的に飲まれる酒のうち最も広い",zh:"5 至 55 °C——常見飲品中最寬的"},
             {en:"8 to 18 °C",ja:"8℃から18℃",zh:"8 至 18 °C"},
             {en:"3 to 13 °C",ja:"3℃から13℃",zh:"3 至 13 °C"}],
            [{en:"Ageing",ja:"熟成",zh:"熟成"},
             {en:"Most styles are best within a year; a deliberate koshu improves for decades",ja:"多くの型は一年以内が最良。意図された古酒は数十年よくなる",zh:"多數類型一年內最佳；刻意做的古酒可以進步數十年"},
             {en:"Wide, and a central part of the culture",ja:"幅広く、文化の中心をなす",zh:"範圍很廣，且是其文化的核心"},
             {en:"Mostly none; a few strong styles age",ja:"ほとんどない。少数の強い型は熟成する",zh:"多半不適合；少數高酒精類型可陳放"}],
            [{en:"Vintage variation",ja:"年による差",zh:"年份差異"},
             {en:"Real but small — the brewery blends across tanks to suppress it",ja:"実在するが小さい。蔵がタンクをまたいで調合し、抑えている",zh:"真實存在但幅度小——酒藏跨槽調和以抑制它"},
             {en:"Large, and celebrated",ja:"大きく、称えられる",zh:"很大，且被推崇"},
             {en:"Deliberately suppressed",ja:"意図して抑えられる",zh:"被刻意抑制"}]
          ] },

        { t:"p", text:{
          en:"Three rows carry most of the practical consequences. No tannin means sake does not fight protein, bitterness or oily fish, which is why it goes with foods that defeat red wine. Low acidity means it does not clash with vinegar or citrus, but also that it cannot cut through a rich sauce the way a Riesling does — it accompanies rather than contrasts. And the serving range means that a single bottle is really several drinks: the same sake at 10 °C and at 45 °C differs more than two different wines do.",
          ja:"実際上の帰結の大半は三つの行が担っている。タンニンがないということは、日本酒がたんぱく質とも苦味とも脂の乗った魚とも争わないということであり、赤ワインが敗れる料理と合う理由である。酸が低いということは、酢や柑橘と衝突しないということであり、同時に、リースリングのように濃厚なソースを切ることができないということでもある——対比するのではなく寄り添うのである。そして温度域が広いということは、一本が実のところ数種の飲み物であるということである。10℃の同じ酒と45℃の同じ酒の差は、二本の異なるワインの差より大きい。",
          zh:"實務上的後果，大半由三列承載。沒有單寧，意味著清酒不會與蛋白質、苦味或油脂豐厚的魚相爭——這正是它能搭配那些擊敗紅酒之料理的原因。酸度低，意味著它不會與醋或柑橘衝突，但也意味著它無法像麗絲玲那樣切開濃郁的醬汁——它是陪伴，而非對比。而供飲溫度範圍之寬，意味著一支酒其實是好幾種飲料：同一支酒在 10 °C 與 45 °C 之間的差異，大於兩支不同葡萄酒之間的差異。" } }
      ] },

    { t:"related", items:[
      { href:"process.html", why:{ en:"The process the comparison keeps referring back to.", ja:"比較が絶えず立ち返る工程。", zh:"這場比較不斷回頭參照的那道工序。" } },
      { href:"kojifamily.html", why:{ en:"The mould these drinks share, and the ones they do not.", ja:"これらの酒が分かち合う麹と、分かち合わぬもの。", zh:"這些酒共用的那種麴，以及它們不共用的那些。" } },
      { href:"shochu.html", why:{ en:"The closest relative, and the one most often confused with it.", ja:"最も近い縁者であり、最も取り違えられるもの。", zh:"最近的親戚，也是最常被搞混的那一個。" } },
      { href:"world.html", why:{ en:"What happens when the method leaves the country.", ja:"方法が国を出たとき、何が起きるか。", zh:"當這套方法離開日本之後，發生了什麼。" } }
    ] }
  ]
};

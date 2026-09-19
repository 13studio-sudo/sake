/* =============================================================
   THE BOOK OF SAKE — Reference
   10 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- -------------------------------------------- industry */
SAKE.pages["industry"] = {
  kicker: { en: "Reference · 01", ja: "資料 · 01", zh: "資料 · 01" },
  title:  { en: "Industry & Trade", ja: "産業と流通", zh: "產業與貿易" },
  jp: "統計 · 税 · 輸出",
  lede: {
    en: "The sake industry has been shrinking for fifty years and getting better for thirty. Domestic volume is roughly a quarter of its 1973 peak, the number of active breweries has fallen by three quarters since 1970, and yet export value has nearly doubled in a decade, premium categories keep gaining share, and the price per litre keeps rising. Both stories are true at once, and the numbers below show how.",
    ja: "日本酒産業は五十年にわたり縮小し、三十年にわたり良くなり続けている。国内の数量は一九七三年のピークのおよそ四分の一、稼働する蔵の数は一九七〇年から四分の三が失われた。それでいて輸出額は十年でほぼ倍増し、特定名称酒のシェアは上がり続け、一リットルあたりの単価も上がり続けている。二つの物語は同時に真であり、以下の数字はその成り立ちを示す。",
    zh: "日本酒產業已萎縮五十年，也已進步三十年。國內數量約為 1973 年高峰的四分之一，營運中的酒藏自 1970 年以來減少四分之三；然而出口額十年間近乎倍增，特定名稱酒的占比持續上升，每公升單價也持續攀高。這兩個故事同時為真，以下的數字說明其成因。"
  },
  body: [
    { t:"section", id:"volume",
      title:{ en:"Volume", ja:"数量", zh:"數量" }, jp:"生産と消費",
      body:[
        { t:"grid", cols:4, cells:[
          { k:{en:"1973 peak",ja:"1973年ピーク",zh:"1973 年高峰"}, v:"1.77 M kL", d:{en:"Taxed shipments in the peak year — the high-water mark of sake as a mass-market drink.",ja:"ピーク年の課税移出数量。大衆酒としての日本酒の最高到達点。",zh:"高峰年度的課稅出貨量——日本酒作為大眾飲品的最高水位。"} },
          { k:{en:"Recent",ja:"近年",zh:"近年"}, v:"≈ 0.4 M kL", d:{en:"Around a quarter of the peak, and still declining by a few per cent a year.",ja:"ピークのおよそ四分の一。なお年に数パーセントずつ減っている。",zh:"約為高峰的四分之一，且仍以每年數個百分點下滑。"} },
          { k:{en:"Licensed sites",ja:"免許場数",zh:"持照場所"}, v:"≈ 1,600", d:{en:"Holding a seishu licence. Many are dormant, some brew under contract for others.",ja:"清酒製造免許を有する場。休止中のものも多く、他社のために委託醸造を行う場もある。",zh:"持有清酒製造執照者。其中不少已停產，部分則為他人代工釀造。"} },
          { k:{en:"Actually brewing",ja:"実際に製造",zh:"實際釀造"}, v:"≈ 1,100", d:{en:"In a given brewing year. Down from over 4,000 in 1970, and still falling by roughly thirty a year.",ja:"一酒造年度あたり。1970年には4,000を超えていた。なお年に三十ほどの割合で減っている。",zh:"以單一釀造年度計。1970 年時逾 4,000 家，如今仍以每年約三十家的速度減少。"} }
        ] },
        { t:"figure",
          caption:{ en:"Taxed shipments of seishu, 1970–2021, in thousands of kilolitres. Five-yearly figures from the national tax agency's series, with the 1973 peak added. Hover any point for its value.",
            ja:"清酒の課税移出数量、一九七〇年から二〇二一年まで、千キロリットル。国税庁の系列による五年ごとの数値に、一九七三年の頂点を加えた。点に触れれば値が出る。",
            zh:"清酒的課稅移出數量，一九七〇至二〇二一年，單位為千公秉。取自國稅廳統計數列的每五年數值，並加入一九七三年的高峰。將游標移到任一點可顯示數值。" },
          svg: function (lang, L) {
            var D = [[1970,1601],[1973,1766],[1975,1747],[1980,1473],[1985,1355],[1990,1422],
                     [1995,1310],[2000,999],[2005,730],[2010,603],[2015,554],[2019,458],[2021,399]];
            var W = 700, H = 330, ML = 52, MR = 16, MT = 22, MB = 40;
            var x0 = 1968, x1 = 2023, y1max = 1800;
            var PX = function (v) { return ML + (v - x0) / (x1 - x0) * (W - ML - MR); };
            var PY = function (v) { return H - MB - v / y1max * (H - MB - MT); };
            var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
            var o = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" style="font-family:var(--sans)" ' +
                     'aria-label="' + esc(L({ en:"Line chart of sake production volume falling from 1.77 million kilolitres in 1973 to about 0.4 million in 2021",
                                              ja:"日本酒の生産量が一九七三年の百七十七万キロリットルから二〇二一年の約四十万へ落ちる折れ線図",
                                              zh:"清酒產量自一九七三年的一百七十七萬公秉降至二〇二一年約四十萬的折線圖" })) + '">'];

            // horizontal grid, recessive
            for (var g = 0; g <= 1800; g += 600) {
              o.push('<line x1="' + ML + '" y1="' + PY(g) + '" x2="' + (W - MR) + '" y2="' + PY(g) +
                '" stroke="var(--rule)" stroke-width="1"/>');
              o.push('<text x="' + (ML - 9) + '" y="' + (PY(g) + 3.5) + '" text-anchor="end" font-size="10" fill="var(--ink-4)">' + g + '</text>');
            }
            o.push('<text x="' + (ML - 9) + '" y="' + (MT - 8) + '" text-anchor="end" font-size="9" letter-spacing=".12em" fill="var(--ink-4)">' +
              esc(L({ en:"000 kL", ja:"千kL", zh:"千 kL" })) + '</text>');

            // x ticks
            for (var t = 1970; t <= 2020; t += 10) {
              o.push('<line x1="' + PX(t) + '" y1="' + (H - MB) + '" x2="' + PX(t) + '" y2="' + (H - MB + 5) + '" stroke="var(--rule-3)" stroke-width="1"/>');
              o.push('<text x="' + PX(t) + '" y="' + (H - MB + 18) + '" text-anchor="middle" font-size="10" fill="var(--ink-4)">' + t + '</text>');
            }
            o.push('<line x1="' + ML + '" y1="' + (H - MB) + '" x2="' + (W - MR) + '" y2="' + (H - MB) + '" stroke="var(--rule-3)" stroke-width="1"/>');

            // area + line
            var pts = D.map(function (d) { return PX(d[0]) + " " + PY(d[1]); });
            o.push('<path d="M' + PX(D[0][0]) + ' ' + (H - MB) + ' L' + pts.join(" L") + ' L' + PX(D[D.length - 1][0]) + ' ' + (H - MB) + ' Z" fill="var(--h-koji)" opacity="0.75"/>');
            o.push('<polyline points="' + pts.join(" ") + '" fill="none" stroke="var(--accent)" stroke-width="2"/>');

            // points, with native tooltips
            for (var i = 0; i < D.length; i++) {
              o.push('<g><title>' + D[i][0] + " — " + D[i][1].toLocaleString("en-US") + ' 000 kL</title>' +
                '<circle cx="' + PX(D[i][0]) + '" cy="' + PY(D[i][1]) + '" r="8" fill="transparent"/>' +
                '<circle cx="' + PX(D[i][0]) + '" cy="' + PY(D[i][1]) + '" r="3" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/></g>');
            }

            // selective direct labels
            var ann = [
              [1973, 1766, 8, -14, "start", { en:"1973 peak · 1,766", ja:"一九七三年の頂点・1,766", zh:"1973 高峰・1,766" }],
              [1990, 1422, 6, -12, "start", { en:"bubble years", ja:"バブルの年", zh:"泡沫年代" }],
              [2021, 399, -6, -14, "end", { en:"399", ja:"399", zh:"399" }]
            ];
            for (var a = 0; a < ann.length; a++) {
              var q = ann[a];
              o.push('<text x="' + (PX(q[0]) + q[2]) + '" y="' + (PY(q[1]) + q[3]) + '" text-anchor="' + q[4] +
                '" font-size="10.5" fill="var(--ink-2)">' + esc(L(q[5])) + '</text>');
            }
            return o.join("") + "</svg>";
          } },
        { t:"p", text:{
          en:"Two features of the curve are worth naming. The plateau through the 1970s and 1980s is not stability but substitution — beer and shōchū were taking share while sake volume held up on price alone. The small rise around 1990 is the asset bubble, and it is the last time domestic sake volume grew. Everything after 1995 is a straight line down, interrupted only by a sharper fall in 2020 when the restaurant trade closed.",
          ja:"曲線の二つの特徴に名を与えておく値打ちがある。一九七〇年代から八〇年代の高原は安定ではなく置き換えである。麦酒と焼酎が取り分を奪いつつあり、日本酒の量は値のみによって保たれていた。一九九〇年あたりの小さな盛り上がりは資産の泡であり、国内の日本酒の量が伸びた最後の時である。一九九五年より後はすべて一直線の下りであり、飲食の商いが閉じた二〇二〇年のより急な落ち込みによってのみ区切られる。",
          zh:"這條曲線有兩個特徵值得指名。一九七〇至八〇年代的高原不是穩定，而是替代——啤酒與燒酎正在奪走市佔，而清酒的量僅靠價格撐住。一九九〇年前後的小幅上揚是資產泡沫，也是日本國內清酒量最後一次成長。一九九五年之後全是一條直直向下的線，只被二〇二〇年餐飲業停擺時更陡的一段下跌所打斷。" } },
        { t:"note", title:{ en:"What the line does not show", ja:"線が示さぬもの", zh:"這條線沒有顯示的東西" }, text:{
          en:"Almost the whole of that decline is ordinary-grade sake. The premium designations — junmai, ginjō and above — have held roughly flat in absolute volume across the same fifty years and have therefore risen from a rounding error to about a third of what is shipped. A chart of premium volume alone would be close to a horizontal line, and a chart of value rather than volume would fall far less steeply than this one.",
          ja:"その落ち込みのほとんど全体は普通酒である。特定名称——純米、吟醸およびそれ以上——は同じ五十年を通じて絶対の量としてほぼ横ばいを保ち、それゆえ端数から出荷の三分の一ほどへと上がった。高級の量のみの図はほぼ水平の線に近く、量ではなく金額の図は、これよりはるかに緩やかにしか落ちない。",
          zh:"這段下滑幾乎全部來自普通酒。特定名稱酒——純米、吟釀及其以上——在同樣的五十年間，絕對量大致持平，因而從可以忽略不計的零頭，上升到出貨量的約三分之一。若只畫高級酒的量，會接近一條水平線；而若畫的是金額而非數量，跌幅會遠比這張圖平緩。" } },
        { t:"table",
          caption:{en:"Where sake is made and sold",ja:"製造と販売の集中",zh:"生產與銷售的集中"},
          cols:[{en:"Measure",ja:"指標",zh:"指標"},{en:"1st",ja:"一位",zh:"第一"},{en:"2nd",ja:"二位",zh:"第二"},{en:"3rd",ja:"三位",zh:"第三"}],
          rows:[
            [{en:"Breweries",ja:"蔵の数",zh:"酒藏數"},{en:"Niigata ≈ 88",ja:"新潟 約88",zh:"新潟 約 88"},{en:"Nagano ≈ 72",ja:"長野 約72",zh:"長野 約 72"},{en:"Hyōgo ≈ 60",ja:"兵庫 約60",zh:"兵庫 約 60"}],
            [{en:"Sales volume",ja:"販売数量",zh:"銷售量"},{en:"Hyōgo ≈ 107,000 kL",ja:"兵庫 約107,000kL",zh:"兵庫 約 107,000 kL"},{en:"Kyoto ≈ 65,000 kL",ja:"京都 約65,000kL",zh:"京都 約 65,000 kL"},{en:"Niigata ≈ 40,000 kL",ja:"新潟 約40,000kL",zh:"新潟 約 40,000 kL"}],
            [{en:"Gold medals",ja:"金賞受賞数",zh:"金賞數"},{en:"Fukushima",ja:"福島",zh:"福島"},{en:"Yamagata · Niigata",ja:"山形・新潟",zh:"山形・新潟"},{en:"Nagano · Akita",ja:"長野・秋田",zh:"長野・秋田"}]
          ] },
        { t:"note", label:{en:"Two industries in one figure",ja:"一つの数字に二つの産業",zh:"一個數字，兩種產業"}, text:{
          en:"Hyōgo has two-thirds of Niigata's brewery count and almost three times its volume, because Nada's houses are industrial and Niigata's are not. Any statement about “the sake industry” that does not distinguish these two businesses is likely to be wrong about at least one of them.",
          ja:"兵庫は新潟の三分の二ほどの蔵数で、数量は三倍近い。灘の蔵が工業的であり、新潟の蔵がそうでないからである。この二つの事業を区別しない「日本酒業界」についての言明は、少なくともどちらか一方については誤っている可能性が高い。",
          zh:"兵庫的酒藏數約為新潟的三分之二，產量卻近三倍——因為灘的酒藏是工業體，新潟的不是。任何未區分這兩種事業的「日本酒產業」論斷，很可能至少對其中一方是錯的。" } }
      ]
    },

    { t:"section", id:"mix",
      title:{ en:"The premium shift", ja:"上位区分への移行", zh:"高階化的轉移" }, jp:"特定名称酒",
      body:[
        { t:"p", text:{
          en:"The single most important trend in domestic sake is not the decline in volume but the change in mix. Futsūshu is disappearing much faster than sake as a whole; designated sake, and junmai types in particular, are holding or growing against a shrinking total. The industry is converting litres into value.",
          ja:"国内の日本酒における最も重要な趨勢は、数量の減少ではなく構成の変化である。普通酒は全体よりはるかに速く消えつつあり、特定名称酒、とりわけ純米系は、縮小する総量のなかで維持あるいは増加している。産業はリットルを価値へと変換しつつある。",
          zh:"日本國內清酒最重要的趨勢，不是數量下滑，而是結構改變。普通酒消失的速度遠快於整體；特定名稱酒——尤其是純米系——在總量萎縮中維持甚至成長。產業正把公升數轉換為價值。" } },
        { t:"compare", cols:3, items:[
          { title:{en:"Falling fastest",ja:"最も速く減るもの",zh:"下降最快"}, jp:"普通酒",
            text:{en:"Bulk futsūshu in cartons and 1.8 L bottles, sold in supermarkets to an ageing domestic drinker. This is the part of the industry that is genuinely in trouble, and it is most of the volume.",ja:"紙パックや一升瓶で売られる普通酒。高齢化した国内の飲み手にスーパーで売られてきた。本当に苦境にあるのはこの部分であり、そして数量の大半はここにある。",zh:"以紙盒與一升瓶販售的散裝普通酒，在超市賣給高齡化的國內飲者。真正陷入困境的是這一塊，而它正是產量的大宗。"} },
          { title:{en:"Holding",ja:"維持しているもの",zh:"維持不墜"}, jp:"純米・純米吟醸",
            text:{en:"Junmai and junmai ginjō, sold through specialist retailers and restaurants and increasingly abroad. Production of junmai types has risen in absolute terms even as the total fell.",ja:"専門の酒販店と飲食店、そして次第に海外へ売られる純米・純米吟醸。総量が減るなかで、純米系の製造量は絶対値でも増えている。",zh:"透過專賣酒商、餐廳並日益銷往海外的純米與純米吟釀。即使總量下滑，純米系的產量在絕對值上仍在上升。"} },
          { title:{en:"Growing",ja:"伸びているもの",zh:"持續成長"}, jp:"輸出・高付加価値",
            text:{en:"Export, and the highest price bands within Japan. Average export value per litre is around ¥1,368 — roughly 1.8 times what it was a decade earlier, which is a shift in what is being exported, not just in prices.",ja:"輸出と、国内の最上位価格帯。輸出の一リットルあたり平均単価はおよそ1,368円で、十年前の約1.8倍である。これは単なる値上がりではなく、輸出されるものの中身が変わったことを意味する。",zh:"出口，以及日本國內的最高價格帶。出口每公升平均金額約 1,368 日圓，約為十年前的 1.8 倍——這反映的是出口品項的改變，而不只是漲價。"} }
        ] }
      ]
    },

    { t:"section", id:"export",
      title:{ en:"Export", ja:"輸出", zh:"出口" }, jp:"輸出",
      body:[
        { t:"grid", cols:3, cells:[
          { k:{en:"Value, 2025",ja:"2025年 輸出額",zh:"2025 年出口額"}, v:"¥45.9 bn", d:{en:"Up about 6% year on year — a second consecutive year of growth in both value and volume.",ja:"前年比約6%増。金額・数量ともに二年連続の伸び。",zh:"年增約 6%——金額與數量連續第二年成長。"} },
          { k:{en:"Volume, 2025",ja:"2025年 数量",zh:"2025 年數量"}, v:"33,500 kL", d:{en:"Up 8.0%. Around 8% of total production now leaves Japan.",ja:"8.0%増。現在、総製造量のおよそ8%が国外へ出ている。",zh:"增加 8.0%。目前約有 8% 的總產量離開日本。"} },
          { k:{en:"Markets",ja:"輸出先",zh:"市場"}, v:"81", d:{en:"Countries and territories. A decade ago the figure was around fifty.",ja:"か国・地域。十年前はおよそ五十であった。",zh:"個國家與地區。十年前約為五十個。"} }
        ] },
        { t:"table",
          caption:{en:"Principal export markets, 2025",ja:"主な輸出先（2025年）",zh:"主要出口市場（2025 年）"},
          cols:[{en:"Market",ja:"市場",zh:"市場"},{en:"Value",ja:"金額",zh:"金額"},{en:"Direction",ja:"前年比",zh:"年增減"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[1],
          rows:[
            [{en:"China",ja:"中国",zh:"中國"},"¥13.3 bn","+13.9 %",
             {en:"The largest market by value and second by volume, and growing fast — though average price per litre fell, indicating a shift towards mid-range rather than luxury bottles.",ja:"金額で最大、数量で第二位。伸びも速い。ただし一リットルあたりの平均単価は下がっており、高級品から中位価格帯への移行を示している。",zh:"金額最大、數量第二，且成長迅速——惟每公升平均單價下滑，顯示重心自高價轉向中價帶。"}],
            [{en:"United States",ja:"アメリカ",zh:"美國"},"¥11.0 bn","−3.5 %",
             {en:"Still the largest market by volume at around 7,700 kL. A mature market with an established restaurant channel and several domestic sake breweries of its own.",ja:"数量では今なお最大で約7,700kL。飲食店の販路が確立した成熟市場であり、国内にも複数の酒蔵をもつ。",zh:"以數量計仍為最大市場，約 7,700 kL。屬成熟市場，餐飲通路完備，且境內本身亦有數家清酒廠。"}],
            [{en:"Hong Kong",ja:"香港",zh:"香港"},{en:"third",ja:"第三位",zh:"第三"},"—",
             {en:"Historically the highest average price per litre of any market — a re-export hub and a genuine high-end consumption centre at the same time.",ja:"歴史的に一リットルあたり単価が最も高い市場。再輸出の拠点であると同時に、実際の高級消費地でもある。",zh:"歷來每公升單價最高的市場——既是轉口樞紐，也是真正的高端消費中心。"}],
            [{en:"South Korea",ja:"韓国",zh:"韓國"},{en:"record",ja:"過去最高",zh:"歷史新高"},"—",
             {en:"Record levels in both value and volume, driven largely by younger drinkers and by a growing specialist bar scene.",ja:"金額・数量ともに過去最高。若い飲み手と、拡大する専門バーの層が牽引している。",zh:"金額與數量皆創新高，主要由年輕飲者與日益興盛的專賣酒吧圈所帶動。"}],
            [{en:"Taiwan",ja:"台湾",zh:"台灣"},{en:"top five",ja:"上位五市場",zh:"前五大"},"—",
             {en:"One of the most sake-literate markets outside Japan, with a dense retail and restaurant network and strong demand for regional and seasonal releases.",ja:"日本国外で最も日本酒の理解が進んだ市場の一つ。小売と飲食の網が密で、地方の酒や季節限定への需要が強い。",zh:"日本以外對清酒理解最深的市場之一，零售與餐飲網絡密集，對地方酒與季節限定需求強勁。"}],
            [{en:"France",ja:"フランス",zh:"法國"},{en:"record",ja:"過去最高",zh:"歷史新高"},"—",
             {en:"Record value and volume, increasingly on high-end restaurant lists. The European market is small in absolute terms but the highest in prestige.",ja:"金額・数量ともに過去最高。高級レストランのリストへの掲載が増えている。欧州市場は絶対量では小さいが、権威の面では最も高い。",zh:"金額與數量皆創新高，並日益出現在高級餐廳酒單上。歐洲市場絕對量雖小，象徵地位卻最高。"}]
          ] },
        { t:"note", label:{en:"What export changed",ja:"輸出が変えたもの",zh:"出口改變了什麼"}, text:{
          en:"Export is under a tenth of production by volume, but it has changed the industry out of proportion to its size, because it rewards exactly the opposite of what the domestic bulk market rewarded: small volumes, high prices, strong stories, designated categories, and a legible connection to a place. A brewery that reorients towards export ends up making better sake for its domestic customers too.",
          ja:"輸出は数量では製造量の一割に満たないが、その規模に不釣り合いなほど産業を変えた。国内の量販市場が報いてきたものとは正反対のもの——少量、高価格、明瞭な物語、特定名称、そして土地との読み取れる結びつき——に報いるからである。輸出へ舵を切った蔵は、結果として国内の客に対しても、より良い酒を造ることになる。",
          zh:"出口以數量計不到產量的十分之一，卻以與其規模不成比例的力道改變了產業——因為它獎賞的，恰與國內量販市場所獎賞的相反：小批量、高價格、清晰的敘事、特定名稱，以及可讀的地方連結。一家轉向出口的酒藏，最終也會為國內顧客釀出更好的酒。" } }
      ]
    },

    { t:"section", id:"tax",
      title:{ en:"Tax", ja:"酒税", zh:"酒稅" }, jp:"酒税法",
      body:[
        { t:"p", text:{
          en:"Sake exists as a legal category because of tax, and the tax has shaped the drink at every stage of its modern history — the Meiji licensing collapse, the wartime grading system, the alcohol-addition rules, the definition of seishu itself. Rates are set per kilolitre of product, not per unit of alcohol, which produces some striking distortions.",
          ja:"日本酒が法的な区分として存在するのは税のためであり、その税は近代史のあらゆる段階で酒そのものを形づくってきた——明治の免許の崩壊、戦時の級別制度、アルコール添加の規定、そして清酒という定義そのもの。税率は製品の一キロリットル当たりで定められ、純アルコール量当たりではない。そこから顕著な歪みが生じる。",
          zh:"日本酒之所以作為一個法定類別存在，是因為稅；而稅在其近代史的每一階段都形塑了這種酒——明治的執照崩潰、戰時的級別制度、添加酒精的規則，以及清酒定義本身。稅率按產品每公秉課徵，而非按純酒精量，由此產生若干顯著的扭曲。" } },
        { t:"table",
          caption:{en:"Liquor tax rates per kilolitre (from 1 October 2023)",ja:"酒税率（1キロリットル当たり・令和5年10月1日以降）",zh:"酒稅率（每公秉・2023 年 10 月 1 日起）"},
          cols:[{en:"Category",ja:"区分",zh:"類別"},{en:"Rate",ja:"税率",zh:"稅率"},{en:"Typical ABV",ja:"標準的な度数",zh:"典型酒精度"},{en:"Tax per litre of pure alcohol",ja:"純アルコール1L当たり",zh:"每公升純酒精之稅"}],
          numCols:[1,2,3],
          rows:[
            [{en:"Seishu (sake)",ja:"清酒",zh:"清酒"},"¥100,000","15 %","≈ ¥667"],
            [{en:"Wine",ja:"果実酒",zh:"果實酒"},"¥100,000","12 %","≈ ¥833"],
            [{en:"Beer",ja:"ビール",zh:"啤酒"},"¥181,000","5 %","≈ ¥3,620"],
            [{en:"Shōchū (single distillation)",ja:"単式蒸留焼酎",zh:"單式蒸餾燒酎"},"¥200,000","25 %","≈ ¥800"]
          ] },
        { t:"p", text:{
          en:"Sake and wine were brought to the same rate in October 2023, ending a long-standing disparity in wine's favour. Beer remains taxed at nearly five and a half times sake's rate per unit of alcohol — a legacy of the era when beer was the growth category and sake was the incumbent, now inverted.",
          ja:"清酒と果実酒は二〇二三年十月に同率とされ、長らく果実酒に有利だった格差は解消された。ビールは純アルコール当たりで清酒のおよそ五倍半の税率のままである。ビールが成長分野で日本酒が既存勢力であった時代の遺制であり、いまや立場は逆転している。",
          zh:"清酒與果實酒於 2023 年 10 月統一稅率，結束了長期對果實酒有利的差距。啤酒以純酒精計仍為清酒稅率的約五倍半——這是啤酒屬成長類別、日本酒屬既有勢力那個年代的遺產，如今兩者位置已然對調。" } }
      ]
    },

    { t:"section", id:"pressures",
      title:{ en:"Structural pressures", ja:"構造的な課題", zh:"結構性壓力" }, jp:"課題",
      body:[
        { t:"defs", items:[
          { term:{en:"Succession",ja:"事業承継",zh:"事業繼承"},
            def:{en:"Most breweries are family businesses in their fifth to fifteenth generation. The commonest reason for closure is not bankruptcy but the absence of a successor, and the commonest recovery story is a son or daughter returning from a city career.",
                 ja:"多くの蔵は五代から十五代に及ぶ家業である。廃業の最も一般的な理由は破綻ではなく後継者の不在であり、再生の最も一般的な物語は、都市での職を辞して戻ってきた息子や娘である。",
                 zh:"多數酒藏是傳承五至十五代的家族事業。停業最常見的原因不是破產，而是後繼無人；而最常見的復興故事，是子女辭去城市工作返鄉。"} },
          { term:{en:"Labour",ja:"人手",zh:"人力"},
            def:{en:"The seasonal migrant tōji system has effectively ended. Breweries now need year-round staff, which requires year-round production or year-round revenue, which small houses often cannot generate. Automation helps with washing, steaming and pressing but not with kōji.",
                 ja:"季節出稼ぎの杜氏制度は事実上終わった。蔵は通年の従業員を必要とし、それには通年の製造か通年の収入が要る。小さな蔵にはそのいずれも難しい場合が多い。自動化は洗米・蒸き・上槽には有効だが、製麹には及ばない。",
                 zh:"季節性外地杜氏制度實質上已終結。酒藏如今需要全年員工，這要求全年生產或全年營收，而小型酒藏往往兩者皆難。自動化在洗米、蒸米與上槽有效，卻無法取代製麴。"} },
          { term:{en:"Rice supply",ja:"原料米",zh:"原料米供應"},
            def:{en:"Sake rice is a low-yield, high-labour, lodging-prone crop grown by an ageing farming population. Toku-A Yamada Nishiki in particular is contracted years ahead and effectively rationed. Several breweries have responded by farming themselves.",
                 ja:"酒米は収量が低く、手間がかかり、倒伏しやすい作物であり、その担い手は高齢化した農家である。とりわけ特A地区の山田錦は何年も先まで契約が埋まり、事実上の割当となっている。自ら耕作を始めた蔵も複数ある。",
                 zh:"酒米是低產、高工、易倒伏的作物，種植者則是高齡化的農民。特 A 地區的山田錦尤其早已被預約至數年後，形同配給。若干酒藏因而自行下田耕作。"} },
          { term:{en:"Domestic demographics",ja:"国内の人口動態",zh:"國內人口結構"},
            def:{en:"Japan's drinking-age population is shrinking and drinking less. Per-capita alcohol consumption has fallen steadily since the 1990s across every category. No amount of quality improvement reverses this; only export and new occasions do.",
                 ja:"日本の飲酒年齢人口は減少し、飲む量も減っている。一人当たりのアルコール消費量は一九九〇年代以降、あらゆる区分で下がり続けている。品質の向上ではこれを覆せない。輸出と新しい飲用機会だけがそれを担う。",
                 zh:"日本的飲酒年齡人口正在減少，且喝得更少。人均酒精消費自 1990 年代以來在各類別皆持續下滑。任何品質提升都無法逆轉這一點，唯有出口與新的飲用場合能夠。"} },
          { term:{en:"Licensing",ja:"免許",zh:"執照"},
            def:{en:"New seishu manufacturing licences for the domestic market have effectively not been issued for decades, on demand-and-supply grounds. Since 2021 an export-only licence has been available, which is how the handful of genuinely new Japanese sake breweries have started. It is one of the reasons ambitious newcomers have often built abroad instead.",
                 ja:"国内向けの清酒製造免許は、需給調整の観点から数十年にわたり事実上交付されていない。二〇二一年以降、輸出向けに限った免許が設けられ、真に新しい日本の酒蔵はこの枠から生まれている。志のある新規参入者がしばしば国外に蔵を建ててきた理由の一つでもある。",
                 zh:"面向國內市場的清酒製造執照，基於供需調節之由，數十年來實質上未再核發。2021 年起設有僅供出口的執照，真正新設的日本酒藏皆循此途徑而生。這也是有志的新進者往往選擇在海外建廠的原因之一。"} }
        ] }
      ]
    },

{ t:"section", id:"unesco",
      title:{ en:"UNESCO recognition, 2024", ja:"ユネスコ登録（二〇二四年）", zh:"聯合國教科文組織登錄（2024）" }, jp:"伝統的酒造り",
      body:[
        { t:"p", text:{
          en:"On 4 December 2024 in Asunción — 5 December in Japan — UNESCO's intergovernmental committee inscribed <em>Traditional knowledge and skills of sake-making with kōji mould in Japan</em> — 伝統的酒造り — on the Representative List of the Intangible Cultural Heritage of Humanity. It was Japan's twenty-third inscription, and the first since 2022.",
          ja:"二〇二四年十二月四日、アスンシオンにおいて——日本時間では五日——ユネスコの政府間委員会は「伝統的酒造り」——日本における麹菌を用いた伝統的な酒造りの知識と技術——を、人類の無形文化遺産の代表一覧表に記載した。日本にとって二十三件目の記載であり、二〇二二年以来のものであった。",
          zh:"2024 年 12 月 4 日於亞松森——日本時間為 5 日——聯合國教科文組織政府間委員會將「傳統酒造」——日本以麴菌釀酒的傳統知識與技術——列入人類非物質文化遺產代表名錄。這是日本第二十三項登錄，也是自 2022 年以來的首次。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"What it covers",ja:"対象",zh:"涵蓋範圍"},
            body:[{ t:"ul", plain:true, items:[
              { en:"Sake (<em>seishu</em>), shōchū, awamori and hon-mirin.",ja:"清酒、焼酎、泡盛、本みりん。",zh:"清酒、燒酎、泡盛與本味醂。" },
              { en:"The common technical thread: the deliberate cultivation and use of kōji mould.",ja:"共通する技術の軸——麹菌を意図して育て、用いること。",zh:"共通的技術主軸：刻意培養並運用麴菌。" },
              { en:"The regional variation of technique developed over five centuries in response to local climate.",ja:"五世紀にわたり、各地の気候に応じて分化してきた技術の多様性。",zh:"五個世紀以來，因應各地氣候而分化的技法多樣性。" },
              { en:"The knowledge itself — not any product, brand or company.",ja:"知識そのもの。製品でも銘柄でも企業でもない。",zh:"知識本身——不是任何產品、品牌或企業。" }
            ] }] },
          { h:{en:"What it does not do",ja:"できないこと",zh:"它不會做的事"},
            body:[{ t:"ul", plain:true, items:[
              { en:"It confers no legal protection on the word “sake” abroad.",ja:"海外における「sake」という語に法的な保護を与えるものではない。",zh:"它並未在海外賦予「sake」一詞任何法律保護。" },
              { en:"It does not restrict who may brew, or where.",ja:"誰がどこで醸せるかを制限しない。",zh:"它不限制誰能釀酒、也不限制在何處釀。" },
              { en:"It carries no funding attached to it.",ja:"資金が付随するものでもない。",zh:"它也不附帶任何資金。" },
              { en:"It is recognition and attention — which, for a shrinking domestic industry, is not nothing.",ja:"承認と注目である。縮小する国内産業にとって、それは決して小さなものではない。",zh:"它帶來的是認可與關注——對一個萎縮中的國內產業而言，這並非無足輕重。" }
            ] }] }
        ] },
        { t:"p", text:{
          en:"The practical effect has been commercial and diplomatic rather than legal: a surge of foreign press coverage, prefectural tourism campaigns built around brewery visits, and a clear boost to the argument that sake belongs on serious wine lists. The industry's own trade body pushed for the inscription for exactly these reasons and has been candid about it.",
          ja:"実際の効果は法的なものというより、商業的で外交的なものであった。海外報道の急増、蔵の見学を軸とした県の観光施策、そして日本酒が本格的なワインリストに載るべきだという主張への明確な後押しである。業界団体はまさにこの理由で登録を推し、その点を率直に述べてきた。",
          zh:"實際效果與其說是法律性的，不如說是商業與外交性的：海外報導激增、各縣以酒藏參訪為主軸的觀光計畫，以及「清酒該登上正經酒單」這項主張獲得明確助力。業界的行業團體正是基於這些理由推動登錄，並且對此直言不諱。" } }
      ]
    },

    { t:"section", id:"succession",
      title:{ en:"Succession and the licence problem", ja:"事業承継と免許の問題", zh:"事業繼承與執照問題" }, jp:"構造課題",
      body:[
        { t:"p", text:{
          en:"The two hardest structural problems in Japanese sake are not about taste. They are about who takes over a two-hundred-year-old family business, and about a licensing rule that makes it almost impossible for anyone new to start one.",
          ja:"日本酒における最も難しい二つの構造的問題は、味の話ではない。二百年続く家業を誰が継ぐのかという問題と、新規に始めることをほぼ不可能にしている免許の規定の問題である。",
          zh:"日本清酒最棘手的兩個結構性問題與味道無關：一是誰來接手一份延續兩百年的家業，二是一項幾乎讓任何新進者無法開業的執照規定。" } },
        { t:"defs", items:[
          { term:{en:"The licence freeze",ja:"新規免許の抑制",zh:"新照凍結"}, jp:"清酒製造免許",
            def:{en:"Since 1950s-era supply controls, the tax authority has in practice issued essentially no new licences to make sake for the domestic market. A would-be brewer must buy an existing licence with the company attached, which is expensive and rare. The one significant relaxation was the export-only licence created in the 2020 tax reform and available from 2021, under which a new brewery may be licensed if everything it makes is sold abroad.",
              ja:"一九五〇年代の需給調整以来、国税当局は国内向けの清酒製造免許を実質的に新規発給していない。醸したい者は、会社ごと既存の免許を買うほかなく、それは高価で、機会もまれである。唯一の大きな緩和は、二〇二〇年度の税制改正で設けられ二〇二一年から利用できるようになった輸出用の免許である。造ったものをすべて海外で売るならば、新しい蔵にも免許が下りる。",
              zh:"自 1950 年代的供需管制以來，稅務當局實質上未再核發面向國內市場的清酒製造執照。想釀酒者只能連同公司一併買下既有執照，既昂貴又稀有。唯一重大的鬆綁，是 2020 年度稅制改革所設、2021 年起可申請的出口專用執照：只要所產全部外銷，新酒藏即可獲得許可。"} },
          { term:{en:"Succession",ja:"事業承継",zh:"事業繼承"}, jp:"後継者問題",
            def:{en:"A brewery is a family, a building, a licence, a brand and a debt load, and it passes as one object. Where there is no heir, or the heir has a career in Tokyo, the options are sale, closure, or an outside successor — and the number of closures per year has run steadily ahead of the number of revivals for four decades.",
              ja:"蔵とは、家であり、建物であり、免許であり、銘柄であり、負債でもある。そしてそれらは一つの塊として受け継がれる。跡取りがいない、あるいは跡取りが東京で職を得ている場合、選択肢は売却か廃業か、外部からの承継である。そして四十年にわたり、年ごとの廃業の数は復活の数を着実に上回ってきた。",
              zh:"一家酒藏是家族、建築、執照、品牌與負債的總和，且以一整個物件的形式傳承。若無繼承人，或繼承人在東京有自己的事業，選項便是出售、歇業，或外部承接——而四十年來，每年歇業的數量始終穩定地超過復業的數量。"} },
          { term:{en:"Outside capital",ja:"外部資本",zh:"外部資本"}, jp:"M&A・再生",
            def:{en:"A growing pattern: an investor, a chef, a distributor or a group of former employees buys a failing kura and restarts it with a new brand and a new tōji. Sometimes this is straightforward asset-stripping of a licence; sometimes it is the only reason a two-century-old building is still standing. Both happen.",
              ja:"増えつつある型がある。投資家、料理人、流通業者、あるいは元従業員の一団が、傾いた蔵を買い、新しい銘柄と新しい杜氏で再び動かす。免許だけを目当てにした身売りであることもあれば、二世紀を経た建物がいまも建っている唯一の理由であることもある。その双方が起きている。",
              zh:"一種日益普遍的模式：投資人、廚師、通路商，或一群前員工買下經營不善的酒藏，以新品牌與新杜氏重新啟動。有時這不過是為執照而進行的資產剝離；有時它卻是一棟兩百年建築至今仍屹立的唯一原因。兩者都在發生。"} },
          { term:{en:"The apprentice pipeline",ja:"人材の入口",zh:"人才管道"}, jp:"若手の確保",
            def:{en:"Brewing is seasonal, physical, cold, and historically paid on a winter contract. Replacing that with year-round salaried employment is what has actually allowed breweries to recruit graduates — and the ones that have done it are visibly the ones with a future.",
              ja:"酒造りは季節的で、肉体を使い、寒く、歴史的には冬の契約で報酬が支払われてきた。それを通年の給与雇用に置き換えたことが、蔵が新卒を採れるようになった実際の理由である。そしてそれを行った蔵は、目に見えて未来のある蔵である。",
              zh:"釀酒是季節性的、耗費體力的、寒冷的，且歷來以冬季契約計酬。把它換成全年支薪的僱用，才是酒藏得以招募到畢業生的真正原因——而做到這一點的酒藏，明顯就是那些有未來的酒藏。"} }
        ] }
      ]
    },

    { t:"section", id:"channels",
      title:{ en:"How sake reaches a drinker", ja:"酒が飲み手に届くまで", zh:"酒如何抵達飲者" }, jp:"流通経路",
      body:[
        { t:"steps", items:[
          { title:{en:"Brewery",ja:"蔵元",zh:"藏元"}, jp:"製造",
            text:{en:"Sets the price it sells at, and — crucially — decides who is allowed to sell its sake. This is where the tokuyakuten system begins.",ja:"出荷価格を定め、そして決定的なことに、誰に売らせるかを決める。特約店制度はここから始まる。",zh:"訂定出貨價格，並且——關鍵在此——決定誰有資格販售其酒。特約店制度即由此開始。"} },
          { title:{en:"Tokuyakuten",ja:"特約店",zh:"特約店"}, jp:"特約店制度",
            meta:{en:"The distinctive Japanese mechanism",ja:"日本独特の仕組み",zh:"日本特有的機制"},
            text:{en:"A designated retailer with a direct contract. The brewery chooses them for cold storage, staff knowledge and the way they sell; the retailer gets allocation, and often exclusivity in an area. It is why famous brands are not simply available, and why a good shop's shelf is a curated statement rather than a catalogue.",ja:"蔵と直接契約した指定の酒販店である。蔵は冷蔵設備、店員の知識、売り方を見て選び、店は配分と、しばしば地域の独占を得る。名高い銘柄が単純には手に入らない理由であり、良い店の棚が品揃えではなく選び抜かれた主張である理由でもある。",zh:"與酒藏直接簽約的指定零售商。酒藏依冷藏設備、店員知識與販售方式挑選；零售商則獲得配額，並常取得區域獨賣權。這正是名牌酒無法輕易買到的原因，也是好店貨架之所以是一份精選主張、而非一份目錄的原因。"} },
          { title:{en:"Wholesalers",ja:"卸売",zh:"批發"}, jp:"問屋",
            text:{en:"For everything outside the tokuyakuten channel: supermarkets, convenience stores, restaurants at volume, and the whole futsūshu trade. Efficient, essential, and where cold-chain discipline most often lapses.",ja:"特約店の経路の外にあるすべてを担う——スーパーマーケット、コンビニエンスストア、量を扱う飲食店、そして普通酒の商い全体である。効率的で不可欠であり、そして冷蔵の規律が最も緩みやすい場所でもある。",zh:"承擔特約店通路之外的一切：超市、便利商店、大量採購的餐飲店，以及整個普通酒的生意。高效且不可或缺，同時也是冷鏈紀律最常鬆懈之處。"} },
          { title:{en:"Export importers",ja:"輸出・輸入業者",zh:"出口／進口商"}, jp:"輸出",
            text:{en:"A small number of specialist importers in each market, plus a much larger grey trade. The difference between the two is usually a refrigerated container, and it is visible in the glass a year later.",ja:"各市場に少数の専門輸入業者があり、その外にはるかに大きな並行流通がある。両者の違いはたいてい冷蔵コンテナ一つであり、その差は一年後、杯のなかに現れる。",zh:"每個市場都有少數專業進口商，之外還有規模大得多的平行貿易。兩者的差別通常就是一只冷藏貨櫃，而這個差別會在一年後於杯中顯現。"} },
          { title:{en:"Direct sale",ja:"直販",zh:"直售"}, jp:"直販・EC",
            text:{en:"Brewery shops, subscription clubs, crowdfunded releases and online direct sales. Small in volume, large in margin, and increasingly how a new brewery establishes itself without needing a distributor's permission.",ja:"蔵の売店、定期購入、クラウドファンディングによる限定品、そしてオンラインの直販である。量は小さく利幅は大きい。そして新しい蔵が、流通の許しを得ずに自らを立てる手段として、ますます重要になっている。",zh:"酒藏賣店、訂閱制、群眾募資限定款，以及線上直售。量小而利潤高，並日益成為新酒藏無需通路商點頭便能站穩腳步的方式。"} }
        ] },
        { t:"note", label:{en:"Why the shelf price is what it is",ja:"棚の値がその値である理由",zh:"架上價格何以如此"}, text:{
          en:"Japanese sake is, by international comparison, remarkably cheap for the labour and material that go into it. A 720 ml junmai ginjō from a small brewery typically retails in Japan for less than a mid-range bottle of Burgundy, despite three times the handling. That gap is a legacy of a domestic market that spent forty years contracting and competing on price, and closing it — charging what the work is worth — is one of the loudest arguments inside the industry right now.",
          ja:"日本酒は、国際的に比べれば、注がれた労力と原料に対して驚くほど安い。小さな蔵の四合瓶の純米吟醸は、三倍の手間がかかっていながら、日本ではブルゴーニュの中級品より安く売られるのが普通である。この差は、四十年にわたり縮小し価格で競ってきた国内市場の遺産である。そしてこの差を埋めること——仕事に見合う値をつけること——は、いま業界の内部で最も声高に論じられている事柄の一つである。",
          zh:"以國際比較而言，日本清酒相對於其中投入的人力與原料，便宜得驚人。一支小酒藏的 720 毫升純米吟釀，儘管處理工序多上三倍，在日本的零售價通常低於一瓶中價位的勃根地。這道落差是一個歷經四十年萎縮並以價格競爭的國內市場所留下的遺產；而彌合這道落差——為勞動索取相稱的價格——正是當前業界內部最喧騰的爭論之一。" } }
      ]
    },
    { t:"section", id:"money-shape",
      title:{ en:"The shape of the money", ja:"金の形", zh:"金流的形狀" }, jp:"資金の構造",
      body:[
        { t:"p", text:{
          en:"A brewery's financial year does not look like a manufacturer's and does not look like a farm's. It buys its largest input once, in autumn, pays for it close to delivery, converts it into an asset that cannot be sold for months, pays tax on that asset the moment it moves rather than the moment it is paid for, and collects from its customers later still. Nothing on this page explains closures better than that sequence, and almost none of it is visible in the price of a bottle.",
          ja:"蔵の一年の金の流れは、製造業のそれにも、農のそれにも似ていない。最大の仕入れを秋に一度行い、納品に近い時点で支払い、それを幾月も売れぬ資産へ変え、その資産が代を受け取る時ではなく動く時に税を納め、そして客からの回収はさらに後になる。この頁のいずれの記述よりも、この順序こそが廃業をよく説く。そしてそのほとんどは、一本の値のうちに見えない。",
          zh:"一家酒藏的財務年度既不像製造業，也不像農業。它一年只買一次最大宗的原料——在秋天——在接近交貨時付款，把它變成一項好幾個月都賣不掉的資產，並且在那項資產「移動」的那一刻、而不是「收到錢」的那一刻繳稅，而向客戶收款還要更晚。本頁沒有任何一段比這個順序更能解釋歇業；而它幾乎完全不會出現在一瓶酒的價格裡。" } },

        { t:"figure",
          caption:{
            en:"One brewing year, seen as cash rather than as sake. The rice is paid for in the autumn and the money comes back across the following spring and summer, which means a small brewery is carrying the cost of a whole season's production for roughly half a year before the first of it is recovered. The tax band underneath is the part nobody outside the industry pictures: liquor tax is charged when sake leaves the premises, so it falls with every shipment, months before a customer on ordinary terms actually pays. The gap between the two lines is what a brewery borrows against, and it is at its widest in the weeks when the tanks are fullest.",
            ja:"一つの造りの年を、酒ではなく金として見たもの。米の代は秋に支払われ、金は翌春から夏にかけて戻る。すなわち小さな蔵は、一季の生産の費えの全体を、その最初の一部が回収されるまでのおよそ半年にわたって担いでいる。下の帯は、業界の外の誰も思い描かぬ部分である。酒税は酒が場を出るときに課される。ゆえにそれは出荷のたびに落ち、並の条件の客が実際に支払うより幾月も前に落ちる。二本の線のあいだの隔たりこそ、蔵が借り入れる相手であり、そしてそれは槽が最も満ちている週において最も広い。",
            zh:"把一個釀造年看成金流，而不是看成酒。米錢在秋天付出去，錢則要到隔年春夏才陸續回來——也就是說，一家小酒藏要在第一筆回收之前，扛著整整一季生產成本大約半年。下面那條帶是業界之外沒有人會想像的部分：酒稅是在酒離開廠區時課徵的，因此它隨著每一次出貨落下，比按一般帳期付款的客戶實際付錢早了好幾個月。兩條線之間的落差，就是酒藏拿去借款的東西；而它最寬的時候，正是酒槽最滿的那幾週。" },
          svg: function (lang, L) {
            var W = 760, H = 338, X0 = 70, X1 = 700, Y0 = 96, Y1 = 232;
            var months = ["10","11","12","1","2","3","4","5","6","7","8","9"];
            function mx(i) { return X0 + i / 11 * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i;
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一つの造りの年・十月から九月まで" : lang === "zh" ? "一個釀造年・十月到九月" : "ONE BREWING YEAR, OCTOBER TO SEPTEMBER") + '</text>';
            for (i = 0; i < 12; i++) {
              s += '<line x1="' + mx(i).toFixed(1) + '" y1="' + Y0 + '" x2="' + mx(i).toFixed(1) + '" y2="' + (Y1 + 6) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + mx(i).toFixed(1) + '" y="' + (Y1 + 20) + '" text-anchor="middle" font-size="9" fill="#B4AEA4">' + months[i] + '</text>';
            }
            /* money out — rice, big and early */
            var out = [[0,0.86],[1,0.34],[2,0.20],[3,0.18],[4,0.16],[5,0.14],[6,0.12],[7,0.10],[8,0.10],[9,0.10],[10,0.10],[11,0.10]];
            /* money in — sales, late and spread */
            var inc = [[0,0.10],[1,0.14],[2,0.30],[3,0.22],[4,0.24],[5,0.34],[6,0.40],[7,0.42],[8,0.40],[9,0.36],[10,0.34],[11,0.30]];
            function bars(arr, col, off, wdt, lbl) {
              var k, o = "";
              for (k = 0; k < arr.length; k++) {
                var h = arr[k][1] * (Y1 - Y0);
                o += '<rect x="' + (mx(arr[k][0]) + off).toFixed(1) + '" y="' + (Y1 - h).toFixed(1) + '" width="' + wdt + '" height="' + h.toFixed(1) + '" fill="' + col + '"/>';
              }
              return o;
            }
            s += bars(out, "#B09E7C", -19, 18);
            s += bars(inc, "#CFC6B2", 1, 18);
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            s += '<rect x="' + (X0 - 19) + '" y="' + (Y1 + 40) + '" width="18" height="10" fill="#B09E7C"/>';
            s += '<text x="' + (X0 + 4) + '" y="' + (Y1 + 49) + '" font-size="9" fill="#6B655C">' +
                 (lang === "ja" ? "出てゆく金・秋の米が大半" : lang === "zh" ? "流出的錢・大半是秋天的米" : "money out — mostly the autumn rice") + '</text>';
            s += '<rect x="' + (X0 + 250) + '" y="' + (Y1 + 40) + '" width="18" height="10" fill="#CFC6B2"/>';
            s += '<text x="' + (X0 + 274) + '" y="' + (Y1 + 49) + '" font-size="9" fill="#6B655C">' +
                 (lang === "ja" ? "入ってくる金・春から夏へ" : lang === "zh" ? "流入的錢・從春到夏" : "money in — spring into summer") + '</text>';
            s += '<line x1="' + mx(0).toFixed(1) + '" y1="' + (Y0 - 14) + '" x2="' + mx(5).toFixed(1) + '" y2="' + (Y0 - 14) + '" stroke="#8B7355"/>';
            s += '<line x1="' + mx(0).toFixed(1) + '" y1="' + (Y0 - 18) + '" x2="' + mx(0).toFixed(1) + '" y2="' + (Y0 - 10) + '" stroke="#8B7355"/>';
            s += '<line x1="' + mx(5).toFixed(1) + '" y1="' + (Y0 - 18) + '" x2="' + mx(5).toFixed(1) + '" y2="' + (Y0 - 10) + '" stroke="#8B7355"/>';
            s += '<text x="' + ((mx(0) + mx(5)) / 2).toFixed(1) + '" y="' + (Y0 - 22) + '" text-anchor="middle" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "この隔たりを借りる" : lang === "zh" ? "這段落差要靠借款" : "this gap is borrowed") + '</text>';
            s += '<text x="30" y="' + (H - 26) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "図式である。棒の高さは説明のためのものであり、実際の額でも、蔵ごとの実際の割合でもない。"
                  : lang === "zh" ? "此為示意圖：長條的高度只為說明，不是實際金額，也不是任何一家酒藏的真實比例。"
                  : "Schematic. The bar heights are illustrative; they are not amounts and not any brewery's actual proportions.") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "酒税は出荷のたびに生じ、この図では出てゆく金の一部として、売上の回収より前に置かれている。"
                  : lang === "zh" ? "酒稅隨每次出貨產生；在此圖中它被算在流出的錢裡，而且早於銷售款項的回收。"
                  : "Liquor tax arises on each shipment and sits inside money out, ahead of the collection of the sale it belongs to.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"One purchase, once a year", ja:"年に一度の、一つの仕入れ", zh:"一年一次的那一筆採購" }, jp:"米の仕入れ", romaji:"kome no shiire",
            def:{ en:"Rice is a harvest, so a brewery's largest input is bought in a window of weeks rather than as it is needed. A house working on contracted rice has also committed to the quantity a year earlier, when it guessed what it would sell. Both halves of that are risk: the money goes out in one lump, and the quantity was decided before anybody knew what the season would be like.",
              ja:"米は収穫である。ゆえに蔵の最大の仕入れは、要るにつれてではなく、数週の窓のうちに買われる。契約米で働く家は、加えてその数量を一年前に約している。何を売るかを推した時点においてである。そのいずれの半分も危うさである。金は一つの塊で出てゆき、数量は、その季がどうなるかを誰も知らぬうちに決められていた。",
              zh:"米是收成，所以一家酒藏最大的一筆進貨是在幾週的窗口內買進的，而不是隨用隨買。使用契作米的酒藏，更是在一年前就承諾了數量——在它猜測自己會賣掉多少的那個時點。這兩件事各自都是風險：錢是一次一整筆出去的，而數量是在沒有人知道這一季會如何之前就定下的。" } },
          { term:{ en:"The tax arrives before the money does", ja:"税は金より先に来る", zh:"稅來得比錢早" }, jp:"移出課税", romaji:"ishutsu kazei",
            def:{ en:"Liquor tax is charged on sake leaving the licensed premises, not on sake being paid for. The return is monthly and there is an approved deferral available against security, which most breweries use — but the direction of the flow does not change. A brewery selling on ordinary trade terms has financed the state's share of every bottle it shipped before the invoice for that bottle has been settled.",
              ja:"酒税は、代を受け取った酒にではなく、免許を受けた場を出る酒に課される。申告は月ごとであり、担保に対して認められる納期の延長もあって、ほとんどの蔵がそれを用いる。だが流れの向きは変わらない。並の商いの条件で売る蔵は、その瓶の請求が決済される前に、出荷した一本一本について国の取り分を立て替えている。",
              zh:"酒稅是對「離開持照廠區的酒」課徵的，不是對「已經收到錢的酒」。申報按月進行，也有提供擔保後可獲准的延期繳納，多數酒藏都會使用——但金流的方向不變。一家以一般商業帳期銷售的酒藏，是在那瓶酒的貨款結清之前，就先替國家墊了每一瓶酒的稅。" } },
          { term:{ en:"The building is not the expensive part", ja:"高いのは建物ではない", zh:"貴的不是建築" }, jp:"設備", romaji:"setsubi",
            def:{ en:"A kura's buildings are frequently a century old and long since written down to nothing, which is why a balance sheet can look healthier than a cash-flow statement. The weight sits in the things that wear out or must be replaced to keep up: refrigeration, tank jackets, the bottling line, and above all the rice mill — the single most expensive machine in the building and the reason contract milling exists at all.",
              ja:"蔵の建物はしばしば一世紀を経ており、とうに帳簿の上では無に近い。貸借対照表が資金繰り表よりも健やかに見えうる理由がこれである。重みは、摩り減るもの、あるいは遅れぬために替えねばならぬものにある。冷却、タンクの衣、瓶詰めの列、そして何よりも精米機である。建物のうち最も高い一台であり、そもそも委託精米が在る理由である。",
              zh:"酒藏的建築往往有一個世紀之久，帳面上早已折舊到近乎於零——這正是為什麼一張資產負債表可以看起來比現金流量表健康。真正的重量在那些會磨損、或為了跟上而必須更換的東西上：製冷設備、酒槽的冷卻夾套、裝瓶產線，以及最重要的精米機——整棟建築裡最貴的一台機器，也正是委託精米之所以存在的原因。" } },
          { term:{ en:"Stock is the product and the exposure", ja:"在庫は製品であり、同時に危うさである", zh:"庫存既是產品，也是風險敞口" }, jp:"在庫", romaji:"zaiko",
            def:{ en:"Sake in tank is an asset that cost money to make, costs money to hold cold, will be taxed the moment it moves and does not improve indefinitely. Every argument for ageing sake is also an argument for tying up more working capital for longer, which is why koshu is made by houses with either very long horizons or another source of income, and why the phrase <em>we could age more of it</em> is usually followed by a pause.",
              ja:"槽のなかの酒は、造るのに金がかかり、冷やして保つのに金がかかり、動いた瞬間に課され、そして際限なく良くなるわけではない資産である。熟成を説くあらゆる論は、より多くの運転資金をより長く縛る論でもある。古酒を造るのが、きわめて長い眼を持つ家か、他に収入の口を持つ家であるのはそのためであり、「もっと寝かせられればよいのだが」という一文のあとに、たいてい間が置かれるのもそのためである。",
              zh:"槽裡的酒是一項資產：造它花錢、低溫保存它花錢、它一移動就要課稅，而且它並不會無限期地變好。每一個支持陳放的論點，同時也是一個「把更多營運資金綁得更久」的論點。這就是為什麼做古酒的，不是眼光極長的酒藏，就是另有收入來源的酒藏；也是為什麼「其實我們可以多陳一些」這句話後面，通常會跟著一段停頓。" } },
          { term:{ en:"Why the shop and the tour are not a hobby", ja:"店と見学が余技ではない理由", zh:"門市與參觀不是副業玩票" }, jp:"直売", romaji:"chokubai",
            def:{ en:"A tasting counter, a shop, a tour, a summer festival, lees sold by the kilo, amazake, a licensing deal on a cosmetic: all of these are counter-seasonal cash that arrives in the months when the tanks are full and the bank is not, and all of them are paid for immediately rather than in ninety days. Judged as businesses most of them are marginal. Judged as cash flow they are load-bearing.",
              ja:"利き酒の台、直売所、蔵見学、夏の祭り、量り売りの粕、甘酒、化粧品の使用許諾。これらはいずれも、槽が満ち、銀行がそうでない月に届く、季節を逆に走る現金であり、いずれも九十日後ではなくその場で支払われる。事業として量れば、その多くは限界的である。資金繰りとして量れば、それらは荷を受けている柱である。",
              zh:"品飲檯、直賣所、酒藏參觀、夏日祭典、論斤賣的酒粕、甘酒、化妝品的授權合作：這些全都是逆季節的現金——它們在酒槽滿了而銀行帳戶沒滿的那幾個月抵達，而且全都是當場付款，不是九十天後。若當成事業來衡量，它們多半微不足道；若當成金流來衡量，它們是承重的柱子。" } },
          { term:{ en:"The first export order", ja:"最初の輸出の注文", zh:"第一張出口訂單" }, jp:"輸出の運転資金", romaji:"yushutsu no unten shikin",
            def:{ en:"It pays better per litre and it pays later, it requires stock held cold for the weeks the container is at sea, and it usually arrives with a request for labels, documents and a quantity the brewery has not made. For a small house a first export order can consume more working capital in its first year than it returns, which is why the breweries that export successfully are frequently not the smallest ones, and why the ones that do it from a standing start tend to have an importer who pays early.",
              ja:"一リットル当たりではよく払い、そして遅く払う。箱が海にある数週のあいだ、冷やして在庫を保つことを要し、たいてい札と書類と、蔵が造っていない数量の求めを伴って来る。小さな家にとって、最初の輸出の注文は、その一年目において返すよりも多くの運転資金を食いうる。輸出に成功する蔵が最も小さな蔵でないことが多い理由であり、そして何もない所から始める蔵が、早く払う輸入者を持っていることが多い理由である。",
              zh:"它每公升付得比較好，也付得比較晚；它要求在貨櫃漂洋過海的那幾週裡以低溫保存庫存；而且它通常還附帶對標籤、文件，以及一個酒藏根本沒生產過的數量的要求。對小酒藏而言，第一張出口訂單在第一年可能吃掉的營運資金比它帶回來的還多——這就是為什麼成功出口的酒藏往往不是最小的那幾家，也是為什麼從零開始做出口的，通常都有一個「付款很快」的進口商。" } }
        ] },

        { t:"note", title:{ en:"What this explains", ja:"これが説くもの", zh:"這解釋了什麼" }, text:{
          en:"Why a brewery with a good year can still fail; why the wave of closures followed the collapse of bulk purchasing by a year or two rather than immediately; why so many houses stopped brewing while keeping the licence, which costs nothing to hold and is worth something to sell; and why a small kura that has just been discovered by the internet is in more danger than it looks. A sudden trebling of demand is a sudden trebling of the working capital required to meet it, arriving in the same month.",
          ja:"良い年を過ごした蔵がなお倒れうる理由。廃業の波が、桶取引の崩れに直ちにではなく一、二年遅れて続いた理由。多くの家が、持つのに費えがかからず売れば値のつく免許を保ったまま醸すのをやめた理由。そして、いま網の上で見出されたばかりの小さな蔵が、見た目よりも危ういところに在る理由。需要の突然の三倍は、それに応じるための運転資金の突然の三倍であり、同じ月に届く。",
          zh:"這解釋了：為什麼一家有過好年份的酒藏仍然可能倒；為什麼歇業潮是在大量外購崩解之後一兩年、而不是立刻跟上；為什麼那麼多酒藏停止釀造卻保留執照——持有它不花錢，賣掉它卻值錢；以及為什麼一家剛剛被網路發現的小酒藏，處境比看起來更危險。需求突然變成三倍，就是「為了應付它所需的營運資金」突然變成三倍，而且是在同一個月抵達。" } }
      ] },


{ t:"section", id:"price",
      title:{ en:"What the price of a bottle is made of", ja:"一本の価格の中身", zh:"一支酒的價格由什麼構成" }, jp:"原価の構造",
      body:[
        { t:"p", text:{
          en:"Sake is unusually cheap for the labour in it, and understanding why requires taking a bottle apart. The shares below are indicative rather than audited — every brewery's numbers differ — but the shape holds across the industry and it explains several things that otherwise look irrational.",
          ja:"日本酒は、注がれた労働に比してきわめて安い。その理由を理解するには、一本を分解してみる必要がある。以下の割合は監査された数字ではなく目安である——蔵ごとに異なる——が、形は業界を通じて保たれ、そうでなければ不合理に見えるいくつものことを説明する。",
          zh:"相對於其中投入的勞動，清酒便宜得異常；要理解為什麼，必須把一支酒拆開來看。以下的比例是示意而非查核數字——每家酒藏都不同——但這個形狀在整個產業都成立，並能解釋好幾件否則看來不合理的事。" } },

        { t:"table",
          cols:[{en:"Component",ja:"項目",zh:"項目"},{en:"Roughly",ja:"おおよそ",zh:"大約"},{en:"Notes",ja:"備考",zh:"備註"}],
          rows:[
            [{en:"Rice",ja:"原料米",zh:"原料米"},{en:"15–35% of ex-brewery cost",ja:"蔵出し原価の15〜35%",zh:"出廠成本的 15–35%"},
             {en:"The single biggest input, and the one that scales with quality. Contract Yamada Nishiki from a Special A district costs several times ordinary table rice, and a daiginjō throws away half of what it buys before brewing even starts.",
              ja:"最大の投入であり、品質に比例して増える唯一の項目である。特A地区の契約栽培の山田錦は普通の食用米の数倍であり、大吟醸は、造りが始まる前に買ったものの半分を捨てる。",
              zh:"最大的單一投入，也是唯一隨品質等比放大的項目。特 A 地區契作的山田錦價格是一般食用米的數倍，而大吟釀在釀造開始前就已丟掉買來的一半。"}],
            [{en:"Labour",ja:"人件費",zh:"人事費"},{en:"20–35%",ja:"20〜35%",zh:"20–35%"},
             {en:"Brewing is manual, round-the-clock and seasonal. This is the share that has forced the most change: it is why automatic kōji machines exist, why salaried year-round staff replaced seasonal guilds, and why very small breweries close.",
              ja:"酒造りは手仕事であり、昼夜を分かたず、季節的である。最も変化を強いてきたのがこの割合である。自動製麹機がある理由、季節労働の組が通年雇用の社員に置き換わった理由、そしてごく小さな蔵が閉じる理由がこれである。",
              zh:"釀酒是手工的、日夜不停的、季節性的。這個比例逼出了最多的改變：自動製麴機為何存在、季節性行會為何被全年受薪員工取代，以及極小的酒藏為何關門，原因都在此。"}],
            [{en:"Liquor tax",ja:"酒税",zh:"酒稅"},{en:"¥180 per 1.8 L bottle",ja:"一升瓶あたり180円",zh:"每支一升瓶 180 日圓"},
             {en:"Levied on volume, not value, at ¥100,000 per kilolitre for seishu since October 2023 — so ¥180 on an 1.8 L bottle and ¥72 on a 720 ml one, whether the sake costs a thousand yen or twenty thousand. Volume taxation bears far harder on cheap sake, which is one reason the industry has moved upmarket.",
              ja:"価額ではなく数量に課される。清酒は令和五年（2023）十月以降、一キロリットルあたり十万円であり、一升瓶で180円、四合瓶で72円である。酒が千円であろうと二万円であろうと変わらない。従量課税は安い酒にはるかに重くのしかかる。業界が高価格帯へ移った理由の一つである。",
              zh:"依容量而非價值課徵：自二〇二三年十月起，清酒為每公秉十萬日圓，因此一升瓶課 180 日圓、四合瓶課 72 日圓，不論這支酒賣一千還是兩萬日圓。從量課稅對便宜的酒壓力大得多——這是產業轉向高價位的原因之一。"}],
            [{en:"Bottle, label, carton",ja:"瓶・ラベル・箱",zh:"瓶、標、外箱"},{en:"10–20%",ja:"10〜20%",zh:"10–20%"},
             {en:"Non-trivial, and rising. A dark bottle, a printed carton and a paper wrap cost real money, and the collapse of the 1.8 L bottle reuse system removes what used to be a significant saving.",
              ja:"軽視できず、しかも増えつつある。濃色の瓶、印刷された箱、紙の巻きにはそれなりの金がかかる。そして一升瓶の再使用の仕組みの崩れは、かつて相当であった節約を取り去りつつある。",
              zh:"金額不小，而且正在上升。深色瓶、印刷紙箱與紙包都要真金白銀；而一升瓶再使用系統的崩解，正在抹去過去相當可觀的一筆節省。"}],
            [{en:"Distribution margin",ja:"流通のマージン",zh:"流通利潤"},{en:"25–40% of retail",ja:"小売価格の25〜40%",zh:"零售價的 25–40%"},
             {en:"Wholesaler and retailer together. A brewery selling through a specialist retail network gets less per bottle than one selling direct, and in exchange gets cold storage, shelf advocacy and a shop that will explain the sake to a customer — which for a small brewery is worth more than the margin.",
              ja:"問屋と小売の合計である。特約店の網を通じて売る蔵は、直販の蔵より一本あたりの取り分が少ない。その代わりに得るのは、冷蔵、棚での推奨、そして客に酒を説明する店である。小さな蔵にとって、それはマージンより価値がある。",
              zh:"批發商與零售商合計。透過專門店網絡銷售的酒藏，每支酒的所得少於直銷者；換來的是冷藏、貨架上的推薦，以及一家會向顧客解說這支酒的店——對小酒藏而言，這比那點利潤更有價值。"}],
            [{en:"Brewery margin",ja:"蔵の利益",zh:"酒藏利潤"},{en:"Often thin",ja:"多くは薄い",zh:"往往很薄"},
             {en:"What is left. For much of the industry this has been the residual rather than the objective for fifty years, which is why so many closures are orderly retirements rather than bankruptcies: the business was solvent, just not worth a successor's working life.",
              ja:"残ったものである。業界の多くにとって、これは五十年にわたり目的ではなく残余であった。廃業の多くが倒産ではなく整然とした引退である理由である——事業は成り立っていた。ただ、後継者の一生を賭けるに値しなかったのである。",
              zh:"剩下的部分。對產業中的許多人而言，這五十年來它一直是「殘值」而非「目標」——這正是多數歇業是有秩序的退場而非破產的原因：生意撐得下去，只是不值得一個後繼者投入一生。"}]
          ] },

        { t:"panel", title:{ en:"Why a good sake costs what a mediocre wine costs", ja:"よい酒が凡庸なワインと同じ値段である理由", zh:"為何一支好清酒的價格等同一支平庸的葡萄酒" },
          body:[
            { t:"p", text:{
              en:"A junmai daiginjō represents around six months of work: rice contracted a year ahead, milled for two or three days, brewed over a month with round-the-clock attention, then matured, blended, diluted and bottled. In most Western markets it retails for roughly the price of an ordinary bottle of wine. The reasons are structural rather than about quality: the domestic market has been shrinking since 1973 and price competition ran downward for decades; volume taxation removed the incentive to make cheap sake but did nothing to raise prices at the top; and sake has almost no secondary market, no auction culture and no critic-driven price inflation. The industry's response over the last fifteen years — fewer bottles, better bottles, sold further from home — is the only response the arithmetic permits.",
              ja:"純米大吟醸の一本は、およそ半年の仕事を表している——一年前に契約された米、二、三日の精米、昼夜を分かたぬ手当てのもとでの一か月の醸造、そして熟成、調合、加水、瓶詰め。西洋の多くの市場において、その小売価格は普通のワイン一本ほどである。理由は品質ではなく構造にある——国内市場は一九七三年以来縮み、価格競争は数十年にわたり下へ向かった。従量課税は安い酒を造る誘因を取り去ったが、上を押し上げはしなかった。そして日本酒には二次流通も、競売の文化も、批評家による価格の高騰もほとんどない。この十五年の業界の応答——より少なく、より良く、より遠くで売る——は、この算術が許す唯一の応答である。",
              zh:"一支純米大吟釀代表約六個月的工作：一年前就簽約的米、兩三天的碾磨、一整個月日夜照看的釀造，然後是熟成、調和、加水、裝瓶。在多數西方市場，它的零售價大約等同一支普通葡萄酒。原因是結構性的，而非品質問題：國內市場自一九七三年起持續萎縮，價格競爭數十年來一路向下；從量課稅消除了製造廉價酒的誘因，卻沒有把高端價格往上推；而清酒幾乎沒有次級市場、沒有拍賣文化，也沒有評論家帶動的價格膨脹。過去十五年產業的回應——賣得更少、更好、更遠——是這道算術唯一允許的回應。" } }
          ] }
      ] },

    { t:"related", items:[
      { href:"future.html", why:{ en:"The same numbers, projected forward.", ja:"同じ数を、先へ延ばしたもの。", zh:"同樣的數字，往前推。" } },
      { href:"value.html", why:{ en:"Where the money in a bottle goes.", ja:"一本の代の行き先。", zh:"一瓶酒的錢流向哪裡。" } },
      { href:"ricepolicy.html", why:{ en:"The other state system the industry sits inside.", ja:"産業が置かれている、もう一つの国家の仕組み。", zh:"這個產業所置身的另一套國家制度。" } },
      { href:"breweries.html", why:{ en:"The companies the figures are counting.", ja:"数が数えている会社そのもの。", zh:"這些數字所計算的那些公司。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- future */
SAKE.pages["future"] = {
  kicker: { en: "Reference · 02", ja: "資料 · 02", zh: "資料 · 02" },
  title:  { en: "The Next Twenty Years", ja: "これからの二十年", zh: "未來二十年" },
  jp: "課題と見通し",
  lede: {
    en: "Domestic sake production has fallen to roughly a fifth of its 1973 peak and the number of licensed breweries has fallen by more than a third since 1989. Against that, exports have risen for most of the last decade and the average price per litre shipped abroad has roughly doubled in ten years. Neither trend is the whole story, and the pressures that will decide the next twenty years — climate, water, rice, labour, packaging, licensing, and a domestic drinker who is younger and drinks less — are mostly not the ones the industry talks about publicly. This page sets them out with the numbers attached.",
    ja: "国内の清酒生産は昭和四十八年（1973）の頂のおよそ五分の一まで落ち、免許を持つ製造場の数は平成元年（1989）から三分の一以上減った。その一方で輸出はこの十年の大半において伸び、一リットルあたりの輸出単価は十年でおよそ倍になった。いずれの趨勢も物語の全体ではない。そして次の二十年を決める圧力——気候、水、米、人手、容器、免許、そしてより若く、より飲まない国内の飲み手——の多くは、業界が公に語るものではない。このページは、それらを数字とともに並べる。",
    zh: "日本國內的清酒產量已跌至一九七三年高峰的約五分之一，持照製造場的數量自一九八九年以來減少了三分之一以上。相對地，出口在過去十年的大部分時間裡持續成長，而每公升的出口單價十年間大約翻了一倍。這兩個趨勢都不是故事的全貌；而將決定未來二十年的那些壓力——氣候、水、米、人力、容器、執照，以及一群更年輕、也喝得更少的國內飲者——多半不是業界公開談論的那些。本頁把它們連同數字一併攤開。"
  },
  body: [

    { t:"section", id:"shape",
      title:{ en:"The shape of the decline, and of the exception", ja:"衰退の形と、例外の形", zh:"衰退的形狀，以及例外的形狀" }, jp:"数字",
      body:[
        { t:"figure",
          caption:{
            en:"The three headline numbers on one scale. Each is set to 100 in its own base year — which is why they share a starting point — and carried to its most recent figure. Two of the lines fall and one rises, and the industry's whole argument with itself is about whether the rising one can ever be large enough to matter against the falling ones. It cannot, on volume: exports are a single-digit share of what is made. It may, on money: the sake sold abroad is worth roughly twice per litre what it was worth ten years ago.",
            ja:"三つの主要な数を一つの尺度の上に置いたもの。各々をその基準年において一〇〇とし——三本が同じ点から始まるのはそのためである——直近の数字まで引いた。二本が下がり、一本が上がる。この産業が自らと交わす議論のすべては、上がる一本が、下がる二本に対して意味を持つほど大きくなりうるか否かにある。量においては、なりえない。輸出は造られるものの一桁の割合にすぎない。金においては、ありうる。国外で売られる日本酒は、十年前のおよそ倍の価値を一リットルあたりに持つ。",
            zh:"三個主要數字放在同一個尺度上。每一項都以自己的基準年為 100——這就是三條線共用同一個起點的原因——再拉到最近的數字。兩條下降，一條上升；而這個產業與自己的全部爭論，就在於那條上升的線是否可能大到足以抵得上那兩條下降的線。就量而言，不可能：出口只占產量的個位數百分比。就錢而言，或許可以：賣到國外的清酒，每公升的價值大約是十年前的兩倍。" },
          svg: function (lang, L) {
            var W = 760, H = 346, X0 = 168, X1 = 536, Y0 = 58, Y1 = 292;
            function y(v) { return Y1 - v / 200 * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g;
            for (g = 0; g <= 200; g += 50) {
              s += '<line x1="' + X0 + '" y1="' + y(g).toFixed(1) + '" x2="' + X1 + '" y2="' + y(g).toFixed(1) + '" stroke="' + (g === 100 ? "#D8D1C2" : "#EFEDE7") + '"' + (g === 100 ? ' stroke-dasharray="3 3"' : '') + '/>';
              s += '<text x="' + (X0 - 10) + '" y="' + (y(g) + 3.5).toFixed(1) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            var ln = [
              { v:22, c:"#7C6B52",
                a:{ en:"Production, 1973 → 2023", ja:"生産量・一九七三→二〇二三", zh:"生產量・1973 → 2023" },
                b:{ en:"1.77 → 0.39 million kL", ja:"一七七万→三九万キロリットル", zh:"177 萬 → 39 萬公秉" } },
              { v:64, c:"#B09E7C",
                a:{ en:"Breweries, 1989 → 2023", ja:"蔵の数・一九八九→二〇二三", zh:"酒藏數・1989 → 2023" },
                b:{ en:"2,459 → 1,562 licensed", ja:"二四五九→一五六二の免許場", zh:"2,459 → 1,562 家持照" } },
              { v:177, c:"#8D998C",
                a:{ en:"Export price per litre, a decade", ja:"輸出単価・この十年", zh:"每公升出口單價・近十年" },
                b:{ en:"¥771 → ¥1,368 per litre", ja:"一リットル七七一円→一三六八円", zh:"每公升 ¥771 → ¥1,368" } }
            ];
            for (i = 0; i < ln.length; i++) {
              s += '<line x1="' + X0 + '" y1="' + y(100).toFixed(1) + '" x2="' + X1 + '" y2="' + y(ln[i].v).toFixed(1) + '" stroke="' + ln[i].c + '" stroke-width="2"/>';
              s += '<rect x="' + (X1 - 4) + '" y="' + (y(ln[i].v) - 4).toFixed(1) + '" width="8" height="8" fill="' + ln[i].c + '"/>';
              s += '<text x="' + (X1 + 16) + '" y="' + (y(ln[i].v) - 2).toFixed(1) + '" font-size="10" fill="#201E1B">' + L(ln[i].a) + '</text>';
              s += '<text x="' + (X1 + 16) + '" y="' + (y(ln[i].v) + 11).toFixed(1) + '" font-size="9.5" fill="#8B857C">' + L(ln[i].b) + '</text>';
              s += '<text x="' + (X1 - 10) + '" y="' + (y(ln[i].v) + (ln[i].v > 100 ? -10 : 16)).toFixed(1) + '" text-anchor="end" font-size="12" fill="' + ln[i].c + '">' + ln[i].v + '</text>';
            }
            s += '<rect x="' + (X0 - 5) + '" y="' + (y(100) - 5).toFixed(1) + '" width="10" height="10" fill="#F8F6F1" stroke="#8B857C"/>';
            s += '<text x="' + X0 + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "基準年＝一〇〇" : lang === "zh" ? "基準年＝100" : "base year = 100") + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "直近" : lang === "zh" ? "最近一期" : "latest") + '</text>';
            s += '<text x="30" y="40" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "それぞれの基準年を一〇〇とした指数" : lang === "zh" ? "以各自基準年為 100 的指數" : "EACH MEASURE INDEXED TO 100 IN ITS OWN BASE YEAR") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "基準年は三者で異なる。線の傾きは年あたりの変化ではなく、期間全体の変化を示す。"
                  : lang === "zh" ? "三者的基準年並不相同；線的斜率表示的是整段期間的變化，而非逐年變化。"
                  : "The base years differ. The slope shows the change across each period, not a rate per year.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Production", ja:"製成数量", zh:"產量" }, jp:"1973年の頂",
            v:{ en:"about 22% of peak", ja:"頂のおよそ22%", zh:"約為高峰的 22%" },
            d:{ en:"Output peaked in the 1973 brewing year at roughly 1.77 million kilolitres and stood at around 0.39 million in 2023 — a fall of more than seventy per cent across half a century, and one that has never reversed for more than a year at a time.",
              ja:"生産は昭和四十八酒造年度におよそ百七十七万キロリットルで頂に達し、令和五年にはおよそ三十九万キロリットルであった。半世紀で七割を超える減少であり、一年を超えて反転したことは一度もない。",
              zh:"產量在一九七三酒造年度達到約 177 萬公秉的高峰，二〇二三年約為 39 萬公秉——半個世紀內下跌逾七成，且從未有過超過一年的反轉。" } },
          { k:{ en:"Breweries", ja:"製造免許場", zh:"製造免許場" }, jp:"1989→2023",
            v:{ en:"2,459 → 1,562", ja:"2,459→1,562", zh:"2,459 → 1,562" },
            d:{ en:"Licensed sake manufacturing premises fell by around thirty-six per cent between 1989 and 2023, and a substantial number of those still licensed brew little or nothing. Closures cluster in rural areas and are usually succession failures rather than bankruptcies.",
              ja:"清酒の製造免許場は、平成元年から令和五年にかけておよそ三十六パーセント減った。免許を保つもののうち相当数は、ほとんど、あるいはまったく醸していない。廃業は地方に集中し、多くは倒産ではなく後継の不在である。",
              zh:"清酒製造免許場在一九八九至二〇二三年間減少約三十六個百分點，而仍持照者中有相當數量幾乎或完全不釀酒。歇業集中在鄉村地區，且多半不是破產，而是後繼無人。" } },
          { k:{ en:"Exports", ja:"輸出", zh:"出口" }, jp:"2025年",
            v:{ en:"about ¥45.9 bn · 33,500 kL", ja:"約459億円・33,500kL", zh:"約 459 億日圓・33,500 kL" },
            d:{ en:"Sake reached roughly ¥45.9 billion and 33,500 kilolitres in 2025, up about six per cent by value and 8 per cent by volume, shipped to some eighty-one countries and regions. China and the United States are the two largest markets by value.",
              ja:"清酒の輸出は令和七年（2025）におよそ四百五十九億円、三万三千五百キロリットルに達した。金額でおよそ6%、数量で8%の伸びであり、八十一の国と地域へ送られている。金額で最大の市場は中国と米国である。",
              zh:"清酒出口在二〇二五年達約 459 億日圓、33,500 公秉，金額成長約 6%、數量成長約 8%，銷往約八十一個國家與地區。以金額計，最大的兩個市場是中國與美國。" } },
          { k:{ en:"Unit price abroad", ja:"輸出単価", zh:"出口單價" }, jp:"十年で倍",
            v:{ en:"¥771 → ¥1,368 per litre", ja:"1リットル771円→1,368円", zh:"每公升 771 → 1,368 日圓" },
            d:{ en:"The average export price per litre has roughly doubled in a decade. This is the single most important number on the page: the export market is not absorbing surplus cheap sake, it is buying premium sake, and the whole industry strategy of the last fifteen years follows from that fact.",
              ja:"一リットルあたりの輸出単価は十年でおよそ倍になった。このページで最も重要な一つの数字である——輸出市場は余った安い酒を吸収しているのではなく、高価格帯の酒を買っている。この十五年の業界戦略の全体は、この事実から導かれる。",
              zh:"每公升的平均出口單價在十年間大約翻倍。這是本頁最重要的單一數字：出口市場不是在吸收過剩的便宜清酒，而是在購買高價位清酒；過去十五年整個產業的策略，都是從這個事實推導出來的。" } }
        ] },

        { t:"p", text:{
          en:"Two cautions before reading anything into these. First, exports are still a small fraction of total production — a few per cent by volume — so a doubling of exports does not offset a domestic decline of this size, and no plausible export growth will. Second, the value figures are inflated by a weak yen over part of this period; volume growth is the more honest measure, and it is real but modest.",
          ja:"読み取る前に二つの留保がある。第一に、輸出はなお総生産のごく一部——数量で数パーセント——であり、輸出が倍になってもこの規模の国内の減少は相殺されない。ありうるいかなる輸出の伸びによっても相殺されない。第二に、金額の数字は、この期間の一部における円安によって膨らんでいる。より正直な尺度は数量の伸びであり、それは実在するが穏やかである。",
          zh:"在從中解讀任何結論之前，有兩點須先保留。第一，出口至今仍只占總產量的一小部分——以數量計為個位數百分比——因此出口翻倍並不能抵銷這種規模的內需下滑，任何合理的出口成長都做不到。第二，金額數字受這段期間部分時間的日圓貶值所膨脹；數量成長是更誠實的尺度，它確實存在，但幅度溫和。" } }
      ] },

    { t:"section", id:"pressures",
      title:{ en:"Six pressures", ja:"六つの圧力", zh:"六股壓力" }, jp:"課題",
      body:[
        { t:"steps", items:[
          { n:"1", title:{ en:"Heat, and what it does to rice", ja:"暑さと、米への影響", zh:"熱，以及它對米做的事" }, jp:"高温登熟", romaji:"kōon tōjuku",
            meta:{ en:"The most immediate physical threat", ja:"最も差し迫った物理的な脅威", zh:"最迫近的物理威脅" },
            text:{ en:"High temperatures during grain filling produce chalky, white immature grains that crack under milling and dissolve unevenly in the mash. Sake rice is more vulnerable than table rice because it is milled so hard and because the varieties are late-maturing, which puts grain filling squarely in the hottest part of a Japanese late summer. Yamada Nishiki's whole advantage — a large, well-formed starch core in a grain strong enough to survive deep polishing — is exactly the trait heat degrades. Breeders are responding with heat-tolerant sake varieties, and the pipeline is long: a new rice takes a decade or more from cross to release.",
              ja:"登熟期の高温は、白く未熟な粒を生む。それは精米で割れ、醪で不均一に溶ける。酒米は食用米よりも脆い。深く磨かれるからであり、品種が晩生で、登熟が日本の晩夏の最も暑い時期に真っ直ぐ重なるからである。山田錦の利点の全体——深い精米に耐えるだけ強い粒のなかの、大きく形のよい澱粉の芯——こそが、暑さの劣化させる形質である。育種は高温に耐える酒米で応じつつあるが、その道のりは長い。交配から世に出るまで、新しい米には十年かそれ以上を要する。",
              zh:"灌漿期的高溫會產出白堊質、未熟的米粒，這些粒在碾磨時容易碎裂，在醪中溶解不均。酒米比食用米更脆弱，因為它被磨得更深，而且品種晚熟，使灌漿期正好落在日本晚夏最熱的時段。山田錦全部的優勢——一顆強韌到足以承受深度精米的米粒中，那個又大又完整的澱粉核心——恰恰是高溫會破壞的性狀。育種者正以耐熱酒米回應，但這條路很長：一個新品種從雜交到問世要十年以上。" } },
          { n:"2", title:{ en:"Water, which cannot be relocated", ja:"移せない水", zh:"無法搬遷的水" }, jp:"水源", romaji:"suigen",
            meta:{ en:"The one input with no substitute", ja:"代替のない唯一の原料", zh:"唯一沒有替代品的原料" },
            text:{ en:"A brewery uses on the order of twenty to thirty times the weight of its rice in water, and it must come from where the brewery stands. Two things threaten that: reduced snowpack, which is what recharges the soft aquifers of the northern brewing country, and urban development and over-extraction around the older districts, where groundwater levels have been actively managed for decades. Neither is a problem a brewery can solve alone, and both make water the input most exposed to what happens to the surrounding landscape.",
              ja:"蔵は米の重量のおよそ二十倍から三十倍の水を使い、それは蔵の建つ場所から得ねばならない。それを脅かすものが二つある——北の酒どころの軟らかな帯水層を涵養する積雪の減少と、古い産地周辺における都市開発と汲み上げすぎである。後者では地下水位が数十年にわたり積極的に管理されてきた。いずれも一つの蔵だけで解ける問題ではなく、いずれもが、周囲の景観に起こることに水が最もさらされた原料であることを示している。",
              zh:"一家酒藏用水量約為其用米重量的二十至三十倍，而水必須來自酒藏所在之處。有兩件事威脅著它：涵養北方酒鄉軟質含水層的積雪減少，以及舊產區周邊的都市開發與過度抽取——那些地方的地下水位數十年來一直被積極管理。兩者都不是單一酒藏能獨力解決的問題，也都顯示水是最直接暴露於周遭地景變化的原料。" } },
          { n:"3", title:{ en:"Who is going to do the work", ja:"誰が仕事をするのか", zh:"誰來做這份工作" }, jp:"担い手", romaji:"ninaite",
            meta:{ en:"Labour, succession and depopulation", ja:"人手、後継、過疎", zh:"人力、傳承與人口外流" },
            text:{ en:"The seasonal guild system that staffed brewing for three centuries has largely gone, because the farming villages that supplied winter labour no longer have surplus winter labour. What replaced it — salaried year-round staff — works well for a brewery of a certain size and not at all for a very small one. Meanwhile most closures are succession failures: a brewery in a shrinking town with no child willing to take it on is worth less as a business than as a building. Rice farming faces the same arithmetic one step upstream, and the average age of a contract sake-rice farmer is a number the industry does not enjoy discussing.",
              ja:"三世紀にわたり酒造りを担った季節労働の組の制度は、おおむね消えた。冬の労働力を供給した農村に、もはや余剰の冬の労働力がないからである。それに代わったもの——通年雇用の社員——は、ある規模の蔵にはよく働き、ごく小さな蔵にはまったく働かない。一方、廃業の多くは後継の不在である。縮む町にあり、継ぐ意思のある子のいない蔵は、事業としてよりも建物としての価値のほうが高い。米作りは一段上流で同じ算術に直面しており、契約栽培の酒米農家の平均年齢は、業界が論じたがらない数字である。",
              zh:"支撐了三個世紀釀造工作的季節性行會制度大體上已經消失，因為供應冬季勞動力的農村不再有多餘的冬季勞動力。取而代之的——全年受薪員工——對一定規模的酒藏行得通，對極小的酒藏則完全不行。同時，多數歇業都是傳承失敗：一家位於萎縮小鎮、沒有子女願意接手的酒藏，作為建築物的價值高於作為一門生意。稻作在上游一步面臨相同的算術，而契作酒米農戶的平均年齡，是業界不太願意討論的一個數字。" } },
          { n:"4", title:{ en:"The bottle that goes round", ja:"巡る瓶", zh:"循環的酒瓶" }, jp:"一升瓶リユース", romaji:"isshōbin reuse",
            meta:{ en:"An old system under strain", ja:"軋む古い仕組み", zh:"承壓的舊系統" },
            text:{ en:"The 1.8-litre bottle is one of the world's longest-running commercial reuse systems: a standardised bottle, collected by retailers, washed and refilled many times over a working life. It predates modern recycling by generations and is dramatically better than recycling in energy terms. It is also failing, for reasons that have nothing to do with its merits — households buy smaller bottles, liquor retailing has moved to supermarkets and online sellers who do not take bottles back, and the washing plants that made it work are closing. Losing it would be a real environmental step backwards, and preserving it needs a collection network rather than a technology.",
              ja:"一升瓶は、世界で最も長く続く商業的な再使用の仕組みの一つである——規格化された瓶を、小売が回収し、洗って幾度も詰め直す。近代のリサイクルより幾世代も古く、エネルギーの観点ではリサイクルよりはるかに優れている。そしてそれは、自らの美点とは無関係な理由で立ち行かなくなりつつある——家庭は小さな瓶を買い、酒の小売は瓶を引き取らないスーパーとネットへ移り、それを支えてきた洗瓶の工場が閉じてゆく。これを失うことは環境の上で本当の後退であり、守るために要るのは技術ではなく回収の網である。",
              zh:"一升瓶是世界上持續運作最久的商業再使用系統之一：一種規格化的瓶子，由零售商回收、清洗並在其使用壽命內多次重新裝填。它比現代回收制度早了好幾個世代，而且在能源上遠優於回收。它如今卻正在崩解，原因與它的優點毫無關係——家戶改買小瓶、酒類零售轉向不收回空瓶的超市與網路賣家，而支撐這套系統的洗瓶工廠正一家家關閉。失去它會是環境上的實質倒退；要保住它，需要的是一張回收網絡，而不是一項技術。" } },
          { n:"5", title:{ en:"Energy and heat", ja:"エネルギーと熱", zh:"能源與熱" }, jp:"蒸気と冷却", romaji:"jōki to reikyaku",
            meta:{ en:"Steam in, cold out", ja:"蒸気を入れ、冷を出す", zh:"送進蒸氣，取出冷卻" },
            text:{ en:"Brewing is thermally demanding in both directions at once: rice must be steamed, and mash must be chilled and held cold for a month. Four-season brewing multiplies the cooling load, and premium ginjō brewing multiplies it again. Breweries have been quietly working on this for years — heat recovery from boilers, better-insulated cold rooms, solar on large roofs — but the fundamental tension is that the quality strategy the industry has adopted is also the energy-intensive one.",
              ja:"酒造りは、二つの方向で同時に熱を要する。米は蒸さねばならず、醪は冷やし、一か月にわたり冷たく保たねばならない。四季醸造は冷却の負荷を倍加させ、吟醸造りはそれをさらに倍加させる。蔵は何年も静かにこれに取り組んできた——ボイラーからの熱回収、断熱を高めた冷蔵室、広い屋根の太陽光。しかし根本の緊張は、業界が採った品質の戦略が、同時にエネルギーを多く食う戦略でもあるということである。",
              zh:"釀酒在兩個方向上同時對熱有高需求：米必須蒸熟，而醪必須冷卻並維持低溫一個月。四季釀造使冷卻負荷倍增，高階吟釀釀造又再倍增。酒藏多年來一直低調地處理這件事——鍋爐熱回收、隔熱更好的冷藏室、大面積屋頂的太陽能——但根本的張力在於：業界所採取的品質策略，同時也是高耗能的那一條路。" } },
          { n:"6", title:{ en:"Who is allowed to start", ja:"誰が始めてよいのか", zh:"誰被允許開始" }, jp:"免許制度", romaji:"menkyo seido",
            meta:{ en:"The licensing question", ja:"免許をめぐる問い", zh:"執照的問題" },
            text:{ en:"For decades it has been effectively impossible to obtain a new licence to make sake for the domestic market, because licensing takes account of supply and demand in a shrinking category. The result is an industry that can shrink but cannot renew: a brewery can close, but a talented newcomer cannot open one. The first crack was the export-only manufacturing licence introduced in the early 2020s, which lets a new entrant brew for foreign markets; further relaxation has been under active official discussion since. How this is resolved matters more to the shape of sake in 2045 than any question of technique, because it determines whether the next generation of brewers can be new people or only inherited ones.",
              ja:"国内市場向けに酒を造る新規の免許を得ることは、数十年にわたり事実上不可能であった。免許が、縮む区分における需給を考慮するからである。結果として、この産業は縮むことはできても更新することができない——蔵は閉じられるが、才ある新参は開けない。最初の亀裂は二〇二〇年代初頭に導入された輸出用の製造免許であり、新規の参入者が海外市場向けに醸すことを許した。それ以降のさらなる緩和は、公の場で活発に議論されている。これがどう決着するかは、二〇四五年の日本酒の形にとって、いかなる技法の問いよりも重要である。次の世代の造り手が新しい人でありうるのか、相続した人だけでありうるのかを決めるからである。",
              zh:"數十年來，要取得面向國內市場釀造清酒的新執照，實際上是不可能的，因為核照必須考量一個萎縮類別中的供需。結果是一個能縮小卻無法更新的產業：酒藏可以關門，但有才華的新人無法開一家。第一道裂縫是二〇二〇年代初導入的「出口專用製造執照」，讓新進者能為海外市場釀酒；此後進一步的鬆綁一直在官方層面被積極討論。這件事如何收場，對二〇四五年清酒的樣貌，比任何技術問題都更重要——因為它決定了下一代釀造者能不能是新的人，還是只能是繼承的人。" } }
        ] }
      ] },

    { t:"section", id:"scenarios",
      title:{ en:"Three plausible 2045s", ja:"ありうる三つの二〇四五年", zh:"三種可能的二〇四五年" }, jp:"三つの筋",
      body:[
        { t:"p", text:{
          en:"Forecasting a beverage industry twenty years out is mostly a way of being wrong in public. What can be done instead is to set out the three futures that current trends actually support, say what each requires, and name the observable signal that would tell you which one is happening.",
          ja:"飲み物の産業を二十年先まで予見することは、たいてい人前で誤る手立てにすぎない。代わりになしうるのは、今日の趨勢が実際に支える三つの先を並べ、それぞれが何を要するかを述べ、どれが起きつつあるかを告げる目に見える兆しに名を与えることである。",
          zh:"為一個飲料產業預測二十年後，多半只是一種公開出錯的方式。可以做的，是把當前趨勢實際上支持的三種未來攤開來，說明每一種需要什麼條件，並指出能告訴你哪一種正在發生的可觀察訊號。" } },
        { t:"compare", cols:3, items:[
          { title:{ en:"The narrow luxury", ja:"狭い奢侈", zh:"狹窄的奢侈品" }, jp:"高級品化",
            text:{ en:"Domestic volume keeps falling, the surviving breweries move almost entirely into premium, and sake becomes in Japan what single malt whisky became in Scotland — a small, expensive, largely exported category with a strong story and a weak everyday presence at home. Requires: continued export growth, and a willingness to abandon the everyday-drinking market entirely. Signal to watch: the futsūshu share of production. If it goes below a quarter, this has already happened.",
              ja:"国内の量は落ち続け、生き残った蔵はほぼ全き高級へ移り、日本酒は日本において、単一麦芽の威士忌が蘇格蘭においてなったものとなる。小さく、高価で、大半が輸出され、強い物語と、家における弱い日々の存在を持つ区分である。要するもの——輸出の伸びが続くこと、そして日々飲まれる市場をまったく手放す覚悟。見るべき兆し——生産に占める普通酒の割合。四分の一を下回れば、これはすでに起きている。",
              zh:"國內量持續下滑，倖存的酒藏幾乎全面轉向高級品，於是清酒在日本變成單一麥芽威士忌在蘇格蘭所變成的樣子——一個小眾、昂貴、大半外銷的類別，擁有強大的故事，卻在本國日常生活中存在感薄弱。所需條件：出口持續成長，以及徹底放棄日常飲用市場的意願。該觀察的訊號：普通酒占生產的比例。若跌破四分之一，這件事其實已經發生了。" } },
          { title:{ en:"The world category", ja:"世界の区分", zh:"世界性的類別" }, jp:"国際化",
            text:{ en:"Sake stops being a Japanese product with an export line and becomes a drink category made in many countries, the way beer and cider are — Japanese production stabilises at a smaller scale as the reference standard, while volume growth happens in North America, Europe and East Asia under local licences. Requires: brewing knowledge to keep leaving Japan, and the industry not to fight the label question. Signal to watch: the number of breweries outside Japan, and whether any of them wins a major open competition outright.",
              ja:"日本酒は、輸出の一線を持つ日本の産であることをやめ、麦酒や林檎酒がそうであるように、多くの国で造られる飲み物の区分となる。日本の生産は基準としてより小さな規模で落ち着き、量の伸びは北米、欧州、東亜において、その地の免許のもとで起きる。要するもの——醸造の知が日本を出続けること、そして業界が名称の問いと争わぬこと。見るべき兆し——国外の蔵の数と、そのいずれかが主要な公開の品評会をそのまま制するか否か。",
              zh:"清酒不再是一項附帶出口業務的日本產品，而成為一個在許多國家釀造的飲料類別，就像啤酒與蘋果酒那樣——日本的生產以較小的規模穩定下來、作為基準標竿，而量的成長發生在北美、歐洲與東亞，依當地執照進行。所需條件：釀造知識持續走出日本，且產業不與名稱歸屬問題硬碰硬。該觀察的訊號：日本以外的酒藏數量，以及它們之中是否有任何一家在大型公開競賽中奪得首獎。" } },
          { title:{ en:"The regional recovery", ja:"地方の回復", zh:"地方性的復甦" }, jp:"地域回帰",
            text:{ en:"The least discussed and not the least likely. Sake reattaches to place: GI designations do the work they were meant to, regional rice and yeast make regional style legible, brewery tourism becomes a real revenue line, and the small brewery survives as a local institution rather than a national brand. Requires: rural population to stabilise somewhere, and the GI framework to be enforced rather than merely granted. Signal to watch: whether GI-labelled bottles command a measurable premium, or whether the mark stays decorative.",
              ja:"最も語られず、そして最も起こりにくいわけでもない。日本酒は場所へ結び直す。地理的表示は本来の仕事をなし、地の米と酵母が地の型を読めるものとし、蔵の観光が実際の収入の一線となり、小さな蔵は全国の銘柄としてではなく土地の機構として生き残る。要するもの——地方の人口がどこかで下げ止まること、そして地理的表示の枠組みが与えられるだけでなく執行されること。見るべき兆し——地理的表示を負う瓶が測りうる上乗せを得るのか、それとも印が飾りに留まるのか。",
              zh:"最少被談論，卻也不是最不可能的一種。清酒重新繫回土地：地理標示發揮它原本該有的作用，在地的米與酵母讓在地風格變得可讀，酒藏觀光成為真實的收入來源，而小型酒藏以在地機構、而非全國品牌的身分存活下來。所需條件：鄉村人口在某個水準止跌，以及 GI 制度不只是被授予、而是被執行。該觀察的訊號：標有 GI 的酒瓶是否能取得可量測的溢價，還是這個標記終究只是裝飾。" } }
        ] },
        { t:"note", title:{ en:"They are not exclusive", ja:"排他ではない", zh:"它們並不互斥" }, text:{
          en:"The likeliest actual outcome is all three at once in different parts of the industry: a handful of global luxury brands, a growing overseas production base, and a few hundred small houses supported by their own regions. What that composite loses is the middle — the mid-sized regional brewery selling a decent everyday bottle across two or three prefectures, which is precisely the segment that has been closing fastest for forty years.",
          ja:"最もありうる実際の帰結は、産業の異なる部分において三つが同時に起きることである。少数の世界の奢侈の銘柄と、育ちつつある国外の生産の基盤と、自らの地域に支えられた数百の小さな家である。その合わさりが失うのは中間である。二つ三つの県に渡ってまともな日々の一本を売る、中ほどの規模の地方の蔵であり、それこそが四十年にわたり最も速く閉じ続けてきた区分である。",
          zh:"最可能的實際結果，是這三者同時發生在產業的不同部分：少數幾個全球奢侈品牌、一個成長中的海外生產基地，以及數百家由自身地域支撐的小酒藏。這個組合所失去的，是中間層——那些橫跨兩三個縣、賣著一瓶像樣日常酒的中型地方酒藏，而這正是四十年來關閉速度最快的一塊。" } }
      ] },

    { t:"section", id:"watch",
      title:{ en:"What to actually watch", ja:"実際に見るべきもの", zh:"實際上該觀察什麼" }, jp:"指標",
      body:[
        { t:"table",
          caption:{ en:"Six indicators that will tell you what is happening before any commentary does", ja:"いかなる論評よりも先に何が起きているかを告げる六つの指標", zh:"六項比任何評論都更早告訴你正在發生什麼的指標" },
          cols:[{ en:"Indicator", ja:"指標", zh:"指標" }, { en:"Why it is the one to watch", ja:"それを見るべき理由", zh:"為何該看這一項" }],
          keyCol:0,
          rows:[
            [{ en:"Export value per litre", ja:"輸出の一リットル当たり単価", zh:"每公升出口單價" },
             { en:"Export volume can be inflated by cheap bulk shipments. Value per litre says whether the world is buying sake or buying cheap alcohol that happens to be sake, and it is the single number that separates the optimistic reading from the complacent one.", ja:"輸出の量は安い樽での出荷で膨らみうる。一リットル当たりの単価は、世界が日本酒を買っているのか、たまたま日本酒である安い酒を買っているのかを告げる。楽観の読みと安逸の読みを分かつ唯一の数である。", zh:"出口量可以被廉價的散裝出貨灌水。每公升的單價會告訴你，世界買的是清酒，還是恰好是清酒的廉價酒精——這是把樂觀解讀與自滿解讀區分開來的唯一數字。" }],
            [{ en:"Breweries actually brewing", ja:"実際に醸している蔵の数", zh:"實際仍在釀酒的酒藏數" },
             { en:"The licence count overstates the industry badly, because a licence can be held dormant for decades. The number of companies that ran a season this year is the real figure and it is always lower than the headline.", ja:"免許の数は産業を大きく過大に示す。免許は数十年にわたり休ませておきうるからである。今季を走らせた会社の数が実際の数字であり、それは常に見出しの数より少ない。", zh:"執照數量會嚴重高估這個產業，因為一張執照可以休眠數十年。今年真正跑完一個釀造季的公司數，才是真實的數字，而它總是低於檯面上的數字。" }],
            [{ en:"Yamada Nishiki planted area", ja:"山田錦の作付面積", zh:"山田錦栽培面積" },
             { en:"Rice acreage is a forward indicator: it is planted a year before it is brewed and two before it is drunk, and it reflects what breweries have contracted for, which is what they expect to sell. It turns down before production does.", ja:"米の作付面積は先を告げる指標である。醸される一年前、飲まれる二年前に植えられ、蔵が契約したもの——すなわち売れると見込むもの——を映す。生産より先に下を向く。", zh:"稻米栽培面積是一項領先指標：它在釀造的一年前、被喝掉的兩年前就已插秧，並反映酒藏簽下了多少契作——也就是他們預期能賣掉多少。它比生產量更早轉向下行。" }],
            [{ en:"Export-only licences issued", ja:"輸出用製造免許の交付数", zh:"核發的出口用製造執照數" },
             { en:"New entry into brewing was effectively closed for seventy years. The export-only licence is the first door, and how many people walk through it is the clearest measure of whether anyone with capital still believes in this industry.", ja:"酒造への新たな参入は七十年にわたり事実上閉ざされていた。輸出用の免許は最初の戸であり、そこを通る者の数は、資を持つ誰かがこの産業をなお信じているか否かの最も明快な尺度である。", zh:"進入釀造業的新入口實質上關閉了七十年。出口用執照是第一道門，而走進這道門的人數，是「還有沒有握有資本的人相信這個產業」最清楚的量度。" }],
            [{ en:"Average age of a tōji", ja:"杜氏の平均年齢", zh:"杜氏的平均年齡" },
             { en:"A guild whose average age keeps rising is a guild not replacing itself. Where the figure falls — as it has in several prefectures since brewery owners started brewing — the knowledge transfer is working.", ja:"平均の齢が上がり続ける集団は、自らを継がせていない集団である。数字が下がる所——蔵元が自ら醸し始めて以来、いくつかの県でそうなっている——では、知の受け渡しが働いている。", zh:"平均年齡持續上升的行會，是一個沒有在替補自己的行會。而數字下降之處——自從藏元親自釀酒以來，數個縣份已是如此——代表知識的傳承正在運作。" }],
            [{ en:"Refrigerated shelf space abroad", ja:"国外の冷蔵の棚", zh:"海外的冷藏貨架空間" },
             { en:"Unglamorous and decisive. A market where sake sits on a warm shelf next to the soy sauce is a market that will keep producing drinkers who think they dislike sake. Chilled shelf space is the physical precondition for everything else.", ja:"華はなく、決定的である。日本酒が醤油の隣の暖かい棚に座る市場は、自分は日本酒が嫌いだと思う飲み手を生み続ける市場である。冷えた棚は、他のすべての物理的な前提である。", zh:"不光鮮，卻具決定性。一個把清酒擺在醬油旁邊常溫貨架上的市場，會不斷生產出「以為自己討厭清酒」的飲者。冷藏貨架空間，是其他一切的物理前提。" }]
          ] }
      ] },

    { t:"section", id:"counterweights",
      title:{ en:"What is working", ja:"働いているもの", zh:"正在奏效的事" }, jp:"反対の力",
      body:[
        { t:"p", text:{
          en:"A page of pressures gives a misleading picture if it stops there. Several things have gone genuinely right in the last decade, and they are the reason the sensible forecast is a smaller, better, more international industry rather than a disappearing one.",
          ja:"圧力ばかりを並べて終えれば、描かれる像は誤りとなる。この十年、本当にうまくいったことがいくつもあり、それこそが、消えゆく産業ではなく、より小さく、より優れ、より国際的な産業という穏当な見通しの根拠である。",
          zh:"一頁只講壓力就收尾，會給出誤導的圖景。過去十年確實有好幾件事走對了；正是它們，讓合理的預測是一個更小、更好、更國際化的產業，而不是一個正在消失的產業。" } },

        { t:"ul", items:[
          { en:"<strong>Value is rising while volume falls.</strong> The industry is selling less sake for more money, at home and abroad, and premium categories have grown as a share of a shrinking whole. A brewery making a thousand kilolitres of good sake can be healthier than one making five thousand of cheap sake was.",
            ja:"<strong>数量が落ちるなかで価値は上がっている。</strong>業界は、国内でも海外でも、より少ない酒をより高く売っており、縮む全体のなかで高価格帯の占める割合は伸びた。よい酒を千キロリットル造る蔵は、かつて安い酒を五千キロリットル造っていた蔵より健全でありうる。",
            zh:"<strong>數量下滑，價值卻在上升。</strong>業界在國內外都以更高的價格賣出更少的酒，而高價位類別在萎縮的整體中占比提高。一家生產一千公秉好酒的酒藏，可能比過去生產五千公秉便宜酒的酒藏更健康。" },
          { en:"<strong>Recognition has arrived.</strong> Traditional Japanese sake brewing was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in December 2024 — a designation that covers the craft itself rather than any product, and one that has measurable value in export markets where sake still needs explaining.",
            ja:"<strong>認知が到来した。</strong>令和六年（2024）十二月、伝統的酒造りがユネスコの無形文化遺産の代表一覧表に記載された。商品ではなく技そのものを対象とする指定であり、日本酒がなお説明を要する輸出市場において、測りうる価値を持つ。",
            zh:"<strong>認可已經到來。</strong>二〇二四年十二月，「傳統酒造」被列入聯合國教科文組織人類非物質文化遺產代表名錄——這項指定涵蓋的是技藝本身而非任何產品，並在清酒仍需要被解釋的出口市場中具有可衡量的價值。" },
          { en:"<strong>Regional strategy works.</strong> The prefectural yeast programmes, the GI designations and the coordinated regional branding of the last two decades have measurably changed how sake is bought. Shizuoka in the 1980s proved that a region can decide to become a sake region; twenty prefectures have since acted on that.",
            ja:"<strong>地域戦略は働く。</strong>県の酵母事業、地理的表示の指定、この二十年の協調した地域の売り出しは、日本酒の買われ方を測りうるほどに変えた。一九八〇年代の静岡は、地域が酒の産地になると決めうることを証明した。以後、二十の県がそれに倣って動いている。",
            zh:"<strong>地域策略行得通。</strong>縣級酵母計畫、地理標示指定，以及過去二十年協調一致的地域品牌經營，已可測量地改變了清酒被購買的方式。一九八〇年代的靜岡證明了一個地域可以「決定」成為產酒之鄉；此後已有二十個縣依此行動。" },
          { en:"<strong>The craft is being learned again.</strong> Brewing has become a career people choose rather than inherit, including by people with no family connection to it and by a growing number of women; and brewing outside Japan, which the industry once regarded as a threat, has turned out to be the most effective advertisement the drink has ever had.",
            ja:"<strong>技は再び学ばれつつある。</strong>酒造りは、相続するものではなく選ぶ職になった。家に縁のない人々によっても、増えつつある女性たちによっても。そして業界がかつて脅威と見なした日本の外での酒造りは、この飲み物がこれまでに得た最も有効な広告であったことが判明した。",
            zh:"<strong>這門手藝正被重新學習。</strong>釀酒已成為一項被選擇而非被繼承的職業，包括由與此毫無家族淵源的人，以及日益增加的女性所選擇；而業界曾視為威脅的「日本以外的釀造」，結果證明是這種飲品有史以來最有效的廣告。" }
        ] },

        { t:"quote", text:{
          en:"The honest forecast is not collapse and not revival. It is a much smaller industry making much better sake for a much wider world, with the losses falling almost entirely on rural towns that will not get another brewery once this one closes.",
          ja:"正直な見通しは、崩壊でも復興でもない。はるかに小さくなった産業が、はるかに広い世界に向けて、はるかによい酒を造る——そして損失のほとんどすべては、いま閉じれば二度と蔵を持つことのない地方の町に落ちる。",
          zh:"誠實的預測既非崩潰也非復興，而是：一個小得多的產業，為一個廣闊得多的世界，釀出好得多的酒——而損失幾乎全部落在那些一旦這家酒藏關門、就再也不會有第二家的鄉間小鎮身上。" } },

        { t:"note", text:{
          en:"For the industry structure these pressures act on, see <a href=\"industry.html\">Industry &amp; Trade</a>; for the regulatory machinery, see <a href=\"standards.html\">Law &amp; Standards</a>; for what regional designation has actually achieved, see <a href=\"gi.html\">Geographical Indications</a>; for brewing outside Japan, see <a href=\"world.html\">Sake Beyond Japan</a>.",
          ja:"これらの圧力が働く産業の構造は<a href=\"industry.html\">産業と流通</a>、制度の仕組みは<a href=\"standards.html\">法令と基準</a>、地域の指定が実際に何を成したかは<a href=\"gi.html\">地理的表示</a>、日本の外での酒造りは<a href=\"world.html\">世界の酒造り</a>を参照。",
          zh:"這些壓力所作用的產業結構見<a href=\"industry.html\">產業與貿易</a>；法規機制見<a href=\"standards.html\">法規與標準</a>；地域指定實際達成了什麼見<a href=\"gi.html\">地理標示</a>；日本以外的釀造見<a href=\"world.html\">日本以外的釀造</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"industry.html", why:{ en:"The figures the projections are built on.", ja:"予測が立つ、その数字。", zh:"這些推估所立基的數字。" } },
      { href:"sustainability.html", why:{ en:"The physical pressures, costed.", ja:"物理の圧を、費えとして。", zh:"那些物理上的壓力，換算成成本。" } },
      { href:"world.html", why:{ en:"The scenario that happens outside Japan.", ja:"日本の外で起きる筋。", zh:"發生在日本以外的那個情境。" } },
      { href:"gi.html", why:{ en:"The scenario that happens in one valley at a time.", ja:"一つの谷ごとに起きる筋。", zh:"一次發生在一座山谷裡的那個情境。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- debates */
SAKE.pages["debates"] = {
  kicker: { en: "Reference · 03", ja: "資料 · 03", zh: "資料 · 03" },
  title:  { en: "Where People Disagree", ja: "論の分かれるところ", zh: "意見分歧之處" },
  jp: "論争",
  lede: {
    en: "Eight arguments that are live inside the industry, each set out as the strongest case either side would actually make rather than as the version its opponents would give. Several of them are treated on this site as settled in places where they are not, and saying so here is more useful than pretending otherwise. Under each pair is the line both sides accept, which is usually the most informative sentence of the three.",
    ja: "業界のうちでいまなお生きている八つの論を、相手方が述べるであろう形ではなく、それぞれの側が実際に立てる最も強い論として並べた。そのいくつかは、本サイトの他所において、決着していない事柄が決着したかのように扱われている。ここでそう述べるほうが、そうでないふりをするよりも有用である。各々の対の下には、双方が受け入れる一行を置いた。三つのうち最も多くを教えるのは、たいていその一行である。",
    zh: "八個在業界內部仍然活著的爭論，每一個都以該方實際上會提出的最強論證來陳述，而不是以對手轉述的版本。其中有幾個，在本站其他地方被當成已經定案來處理，但它們其實沒有；在這裡把這件事說出來，比假裝不是如此更有用。每一組對立之下，都有一行雙方都接受的話——三者之中，通常就屬它最能教會你東西。"
  },
  body: [

    { t:"figure",
      caption:{
        en:"The eight arguments placed by how settled they are and by how much the answer would change what a reader should buy. The useful quadrant is the top left: questions that are genuinely open and genuinely consequential. The bottom right is where most of the noise is — questions that are substantially settled and that would not change a shopping decision either way, which is exactly the sort of question the internet argues about longest. Nothing here is measured; it is a reading of where the discussion stands, offered so that the eight sections below can be read in order of usefulness rather than in the order they happen to appear.",
        ja:"八つの論を、どれだけ決着しているかと、その答えが読み手の買うものをどれだけ変えるかによって置いたもの。有用なのは左上である。真に開かれており、真に帰結の大きい問いである。右下にあるのが騒がしさの多くである。おおむね決着しており、いずれに転んでも買い物の判断を変えぬ問いであり、まさにそうした問いこそ、網の上で最も長く争われる。ここに測られたものはない。議論がどこに立っているかの読みであり、下の八つの節を、たまたま並んだ順ではなく有用さの順に読めるように差し出したものである。",
        zh:"把這八個爭論，依「它們有多接近定案」以及「答案會多大程度改變讀者該買什麼」放置。有用的是左上角：真正還開放、而且真正有後果的問題。右下角則是大部分噪音之所在——大致已經定案、而且無論倒向哪一邊都不會改變購買決定的問題；而網路上吵得最久的，恰恰就是這一類。這裡沒有任何東西是測量出來的；它是對「討論目前站在哪裡」的一種判讀，提供出來是為了讓下面八節可以按有用程度、而不是按它們碰巧出現的順序來讀。" },
      svg: function (lang, L) {
        var W = 760, H = 372, X0 = 70, X1 = 690, Y0 = 76, Y1 = 296;
        function px(v) { return X0 + v * (X1 - X0); }
        function py(v) { return Y1 - v * (Y1 - Y0); }
        var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
        var i, g;
        s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
             (lang === "ja" ? "八つの論を、決着の度合いと帰結の大きさで置く" : lang === "zh" ? "把八個爭論依「有多定案」與「後果多大」放置" : "THE EIGHT ARGUMENTS, BY HOW SETTLED AND HOW CONSEQUENTIAL") + '</text>';
        for (g = 0.25; g < 1; g += 0.25) {
          s += '<line x1="' + px(g).toFixed(1) + '" y1="' + Y0 + '" x2="' + px(g).toFixed(1) + '" y2="' + Y1 + '" stroke="#EFEDE7"/>';
          s += '<line x1="' + X0 + '" y1="' + py(g).toFixed(1) + '" x2="' + X1 + '" y2="' + py(g).toFixed(1) + '" stroke="#EFEDE7"/>';
        }
        s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + ((X1 - X0) / 2) + '" height="' + ((Y1 - Y0) / 2) + '" fill="#EDEAE1"/>';
        s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
        s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
        s += '<text x="' + (X0 + 8) + '" y="' + (Y0 + 15) + '" font-size="9.5" fill="#A39C91">' +
             (lang === "ja" ? "買うものが変わる" : lang === "zh" ? "會改變你買什麼" : "changes what you should buy") + '</text>';
        s += '<text x="' + (X0 + 8) + '" y="' + (Y1 - 8) + '" font-size="9.5" fill="#A39C91">' +
             (lang === "ja" ? "買うものは変わらない" : lang === "zh" ? "不會改變你買什麼" : "changes nothing you would buy") + '</text>';
        s += '<text x="' + X0 + '" y="' + (Y1 + 18) + '" font-size="9.5" fill="#A39C91">' +
             (lang === "ja" ? "まだ開かれている" : lang === "zh" ? "仍然開放" : "genuinely open") + '</text>';
        s += '<text x="' + X1 + '" y="' + (Y1 + 18) + '" text-anchor="end" font-size="9.5" fill="#A39C91">' +
             (lang === "ja" ? "おおむね決着している" : lang === "zh" ? "大致已定案" : "substantially settled") + '</text>';
        var pts = [
          { x:0.18, y:0.86, a:"end",   n:{ en:"is place real", ja:"土地は実在するか", zh:"地方是真的嗎" } },
          { x:0.30, y:0.62, a:"start", n:{ en:"how far to polish", ja:"どこまで磨くか", zh:"要磨到多深" } },
          { x:0.22, y:0.56, a:"start", n:{ en:"premium or everyday", ja:"上位か日々か", zh:"高階還是日常" } },
          { x:0.52, y:0.74, a:"start", n:{ en:"aromatic yeast", ja:"香り酵母", zh:"香氣酵母" } },
          { x:0.58, y:0.30, a:"start", n:{ en:"sake made abroad", ja:"国外の酒", zh:"海外釀的酒" } },
          { x:0.74, y:0.80, a:"end",   n:{ en:"nama and the cold chain", ja:"生と冷の鎖", zh:"生酒與冷鏈" } },
          { x:0.86, y:0.22, a:"end",   n:{ en:"added alcohol", ja:"アルコール添加", zh:"添加酒精" } },
          { x:0.80, y:0.50, a:"end",   n:{ en:"contract brewing", ja:"桶取引", zh:"委託釀造" } }
        ];
        for (i = 0; i < pts.length; i++) {
          var X = px(pts[i].x), Y = py(pts[i].y);
          s += '<rect x="' + (X - 4).toFixed(1) + '" y="' + (Y - 4).toFixed(1) + '" width="8" height="8" fill="#7C6B52"/>';
          s += '<text x="' + (X + (pts[i].a === "end" ? -10 : 10)).toFixed(1) + '" y="' + (Y + 4).toFixed(1) +
               '" text-anchor="' + pts[i].a + '" font-size="10" fill="#201E1B">' + L(pts[i].n) + '</text>';
        }
        s += '<text x="' + X0 + '" y="' + (H - 26) + '" font-size="9.5" fill="#8B857C">' +
             (lang === "ja" ? "定性的な図である。位置は測られたものではなく、議論の現状の読みである。"
              : lang === "zh" ? "此圖為定性描述：位置不是量出來的，而是對討論現況的判讀。"
              : "Qualitative. The positions are a reading of where the discussion stands, not a measurement.") + '</text>';
        s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
             (lang === "ja" ? "薄く塗られた四半分が、読む値打ちの最も高い八つのうちの三つである。"
              : lang === "zh" ? "淺色的那一象限，是八個之中最值得讀的三個。"
              : "The shaded quadrant holds the three of the eight most worth reading.") + '</text>';
        s += '</svg>';
        return s;
      } },

    { t:"section", id:"place",
      title:{ en:"Whether place is real in sake", ja:"日本酒において土地は実在するか", zh:"在清酒裡，地方是不是真的" }, jp:"土地",
      body:[
        { t:"p", text:{ en:"Every wine culture assumes that where a thing was grown is audible in the glass. Sake is made from a grain that has been polished, washed, soaked and steamed, fermented by a strain chosen from a catalogue at a temperature held to a degree — a process most of which is designed to remove variation rather than to express it. So the question is not whether Japanese regions differ, which they plainly do, but whether what differs is the place or the people.", ja:"いずれの葡萄酒の文化も、それがどこで育ったかが杯において聴こえると前提する。日本酒は、磨かれ、洗われ、浸され、蒸された穀物から、目録から択ばれた株により、一度の精度で保たれた温度で醸される。その工程の多くは、変異を表すためではなく取り除くために組まれている。ゆえに問いは、日本の地方が異なるか否か——それは明らかに異なる——ではなく、異なっているのが土地であるか人であるか、である。", zh:"每一種葡萄酒文化都預設：一樣東西長在哪裡，會在杯子裡被聽見。清酒是以一種經過精磨、洗淨、浸漬、蒸熟的穀物，由目錄上挑出的菌株，在被控制到一度之內的溫度下釀成的——這套流程的大部分，是為了移除變異而不是為了表現變異而設計的。所以問題不是「日本各地是否不同」——它們顯然不同——而是：不同的究竟是地方，還是人。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"Place is real", ja:"土地は実在する", zh:"地方是真的" }, jp:"実在する",
            text:{ en:"Water cannot be moved, and it is twenty to thirty times the weight of the rice: its mineral content sets how fast fermentation starts and therefore what style is even possible, which is why Nada and Hiroshima produced different sake before either had a theory about it. Climate sets the season and the mash temperature a building can actually hold. Rice variety and its growing district measurably change what dissolves. And the state has now examined the question twenty-three times and concluded that the differences were consistent enough to protect by law.", ja:"水は動かしえず、しかも米の重さの二十から三十倍である。その鉱分が発酵の立ち上がりを定め、ゆえにそもそもいかなる型が可能かを定める。灘と広島が、いずれもそれについての理屈を持つより前から異なる酒を生んだのはそのためである。気候は季節を定め、建物が実際に保ちうる醪の温度を定める。米の品種とその産地は、何が溶けるかを測りうるほど変える。そして国はこの問いを二十三度検め、その違いは法によって守るに足るほど一貫していると結論した。", zh:"水無法搬動，而且它的重量是米的二十到三十倍：它的礦物含量決定發酵起步的快慢，因而決定了哪一種風格根本可行——這就是為什麼灘與廣島在雙方都還沒有任何理論之前，就已經釀出不同的酒。氣候決定季節，也決定一棟建築實際上守得住的醪溫。米的品種與它的產地，會以可量測的方式改變「什麼東西溶出來」。而國家至今已經審視這個問題二十三次，並得出結論：這些差異一致到值得用法律保護。" } },
          { title:{ en:"Place is mostly people", ja:"土地の多くは人である", zh:"地方多半是人" }, jp:"人である",
            text:{ en:"Ask a panel to sort twenty bottles by prefecture and it will not do well. Most of what is called prefectural character turns out to be a shared yeast, a shared rice, a technical school teaching one approach, and a handful of houses everyone imitates — all of which travel. A brewery that moves its tōji changes more than one that moves its water source, and the clearest cases of a regional style are traceable to one influential person rather than to a landscape. Naming that honestly is not deflationary: it says the achievement belongs to somebody.", ja:"審査の場に二十本を県ごとに分けさせてみれば、うまくは行かない。県の性格と呼ばれるものの多くは、共有された酵母、共有された米、一つの流儀を教える技術の学校、そして誰もが倣う数軒の家であると判る。そのいずれもが移動する。杜氏を替えた蔵は、水の源を替えた蔵よりも大きく変わる。そして地方の型の最も明快な事例は、風景にではなく、一人の影響力ある人物に遡りうる。それを正直に名指すことは、価値を下げることではない。功績が誰かのものであると述べることである。", zh:"請一組評審把二十支酒按縣份分類，結果不會太好。多數被稱為「縣的性格」的東西，追查下去都是：共用的酵母、共用的米、一所教同一套做法的技術學校，以及幾家人人模仿的酒藏——而這些全都會移動。一家換了杜氏的酒藏，變化會大過一家換了水源的酒藏；而地方風格最清楚的那些案例，都能追溯到某一個有影響力的人，而不是一片風景。誠實地指出這一點並不是在貶低它：它是在說，這份成就屬於某個人。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that the water is local and that the water matters. The disagreement is about whether anything else survives a process built to suppress variation.", ja:"双方が受け入れているのは、水が土地のものであり、そして水が重みを持つということである。争いは、変異を抑えるために組まれた工程を、他の何かが生き延びるか否かにある。", zh:"雙方都接受：水是在地的，而且水很要緊。分歧在於：在一套為了抑制變異而建立的流程中，還有沒有別的東西活得下來。" } }
      ] },

    { t:"section", id:"polish",
      title:{ en:"How far it is worth polishing", ja:"どこまで磨く値打ちがあるか", zh:"磨到多深才值得" }, jp:"精米",
      body:[
        { t:"p", text:{ en:"A competition daiginjō consumes nearly four times the brown rice of an everyday honjōzō for the same bottle, and the figure is printed on the label. The question is where on that curve the gain stops being worth the grain, and whether an industry that competed downward on one number for thirty years was improving its product or mistaking a cost for a quality.", ja:"鑑評会の大吟醸は、同じ一本に対し、日々の本醸造の四倍近い玄米を費やす。そしてその数値は札に刷られている。問いは、その曲線のどこで、得られるものが穀に見合わなくなるかであり、そして三十年にわたり一つの数を下へ競った産業が、その製品を良くしていたのか、費用を質と取り違えていたのかである。", zh:"一支鑑評會等級的大吟釀，為了同樣一瓶酒，要耗掉日常本釀造將近四倍的玄米——而這個數字就印在酒標上。問題是：在那條曲線的哪一點，得到的東西不再值那些穀物；以及一個三十年來就著同一個數字往下競賽的產業，究竟是在改良它的產品，還是把成本錯認成了品質。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"The gain is real all the way down", ja:"下まで得るものは実在する", zh:"一路往下，得到的都是真的" }, jp:"効く",
            text:{ en:"Protein and fat sit in the outer layers of the grain, they produce the heavy and coarse compounds, and removing more of them removes more of those compounds. That is not a marketing claim; it is why the soft-water method and the whole ginjō category became possible. Competitions reward it because judges can taste it. And the cost is disclosed honestly on every bottle, which is more than any other input can say — nobody prints how much the yeast cost.", ja:"蛋白と脂は粒の外側の層に座り、重く粗い成分を生む。より多く取り除けば、その成分もより多く取り除かれる。それは売り文句ではない。軟水醸造法と吟醸という区分の全体が可能になった理由である。品評会がそれに報いるのは、審査員がそれを味わえるからである。そして費用はいずれの瓶にも正直に開示されている。他のいかなる原料もそれを言えない。酵母にいくらかかったかを刷る者はいない。", zh:"蛋白質與脂肪坐落在米粒的外層，它們產生厚重與粗糙的成分；削去更多，就等於削去更多那些成分。這不是行銷話術，而是軟水釀造法與整個吟釀類別得以成立的原因。評鑑會之所以獎勵它，是因為評審嘗得出來。而且成本在每一瓶上都被誠實揭露——這是其他任何一項原料都說不出口的：沒有人會把酵母花了多少錢印上去。" } },
          { title:{ en:"Past fifty per cent it is an arms race", ja:"五十を過ぎれば軍拡である", zh:"過了百分之五十，那是軍備競賽" }, jp:"軍拡",
            text:{ en:"The returns flatten while the grain consumption keeps climbing: the step from seventy to fifty changes the sake more than the step from fifty to thirty-five, and the second step costs far more rice. What the extra polishing reliably produces is a lighter, more aromatic sake that is worse with food and better in a judging booth, which is a description of a selection pressure rather than of an improvement. Several serious houses have spent the last decade deliberately polishing less, and they are not doing it to save money.", ja:"得られるものは平らになり、費やされる穀は昇り続ける。七十から五十への一歩は、五十から三十五への一歩よりも酒を変え、そして第二の一歩ははるかに多くの米を要する。余分な精米が確かに生むのは、料理には劣り、審査の席では優る、より軽く香り高い酒である。それは改良ではなく、択ばれる圧の記述である。いくつもの真面目な家がこの十年、意図して磨かぬ側へ歩いてきた。金を惜しんでそうしているのではない。", zh:"報酬遞減而穀物消耗持續上升：從七成到五成這一步對酒的改變，大過從五成到三成五那一步，而第二步耗掉的米多得多。額外的精米可靠地產出的，是一支更輕、更香、配菜更差、在評審席上更好的酒——那是對「選擇壓力」的描述，不是對「改良」的描述。已有數家認真的酒藏在過去十年刻意少磨一些，而他們不是為了省錢。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that polishing does something physical and that the ratio is a cost figure. Nobody claims it is a quality grade, and every argument here is about where the curve bends.", ja:"双方が受け入れているのは、精米が物理として何かをなすこと、そして歩合が費用の数値であることである。それが品質の等級であると唱える者はない。ここでの論はすべて、曲線がどこで折れるかについてである。", zh:"雙方都接受：精米確實做了物理上的事，而步合是一個成本數字。沒有人主張它是品質等級；這裡的每一個論點，都是關於那條曲線在哪裡轉彎。" } }
      ] },

    { t:"section", id:"yeast",
      title:{ en:"Whether the aromatic style has crowded out the others", ja:"香りの型は他を押しのけたか", zh:"香氣型是不是擠掉了其他風格" }, jp:"香り酵母",
      body:[
        { t:"p", text:{ en:"The smell of green apple and banana that most new drinkers now identify as the smell of good sake is the product of a small number of laboratory strains released since the late 1980s. They brought a generation of people into the category. They also now dominate the premium shelf, and win the competitions that decide what the premium shelf looks like.", ja:"多くの新しい飲み手がいま良い酒の香りとして見分ける、青林檎と芭蕉の匂いは、一九八〇年代末より世に出された少数の実験室の株の産である。それは一世代の人々をこの区分へ連れてきた。そしていまや上位の棚を占め、その棚の姿を定める品評会を制している。", zh:"多數新飲者如今會辨認為「好清酒的味道」的那股青蘋果與香蕉香，是一九八〇年代末以來釋出的少數幾個實驗室菌株的產物。它們把整整一個世代的人帶進了這個類別；而它們如今也占據了高階貨架，並贏下了那些決定高階貨架長什麼樣子的評鑑會。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"It opened the category", ja:"区分を開いた", zh:"它把這個類別打開了" }, jp:"開いた",
            text:{ en:"It is a genuine technical achievement — a specific, reproducible flavour designed and delivered — and it did the one thing the industry needed most, which was to give people who believed they disliked sake a reason to try it again. Nothing about an aromatic yeast prevents a brewery from also making a kimoto, and most of the houses celebrated for the aromatic style make both. Blaming a strain for what competitions reward is blaming the instrument for the tune.", ja:"それは真の技の成果である。定まった、再現しうる味を、設計し、届けた。そしてこの産業が最も要したことをなした。日本酒が好きでないと信じていた人々に、もう一度試す理由を与えたことである。香りの酵母は、その蔵が生酛もまた造ることを妨げない。そして香りの型で称えられる家のほとんどは、両方を造っている。品評会が報いるものについて株を責めるのは、曲について楽器を責めることである。", zh:"它是一項真正的技術成就——一種被設計出來、可重現、也確實交付出來的特定風味——而且它做到了這個產業最需要的一件事：讓那些自認不喜歡清酒的人，有理由再試一次。香氣酵母並不妨礙一家酒藏同時去做生酛，而以香氣風格著稱的酒藏，多數兩種都做。把評鑑會所獎勵的東西怪到某個菌株頭上，等於把一首曲子怪到樂器頭上。" } },
          { title:{ en:"It narrowed the shelf", ja:"棚を狭めた", zh:"它把貨架變窄了" }, jp:"狭めた",
            text:{ en:"A handful of strains now account for a large share of what a shop will sell you above a certain price, judging rewards the same aroma in every prefecture, and a brewery that wants a medal knows exactly what to submit. The result is that the most visible tier of the category has become less regionally various at the same time as the industry has been arguing loudest for terroir, and that a drinker's first impression of premium sake is now a laboratory decision rather than a place or a house.", ja:"少数の株が、ある値より上で店が売るものの大きな割合を占めるに至った。審査はいずれの県においても同じ香りに報い、賞を望む蔵は何を出せばよいかを正確に知っている。結果として、この区分の最も目につく層は地方色を減らし、しかもそれは産業が風土を最も声高に論じてきた時期と重なる。そして上位の酒についての飲み手の第一印象は、土地でも家でもなく、実験室の決めとなった。", zh:"少數幾個菌株，如今占了某個價位以上、店家會賣給你的酒當中很大的比例；評審在每一個縣都獎勵同一種香氣，而想拿牌的酒藏很清楚該送什麼去。結果是：這個類別最顯眼的那一層，地域多樣性反而變少了——而這段時間，恰恰是產業把「風土」喊得最大聲的時候；於是飲者對高階清酒的第一印象，成了一個實驗室的決定，而不是一個地方或一家酒藏。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that the aroma is a decision rather than a property of the rice or the place, and that a drinker who wants something else has to ask for it by name.", ja:"双方が受け入れているのは、その香りが米や土地の性質ではなく一つの決めであること、そして他を望む飲み手は、名を挙げて求めねばならぬことである。", zh:"雙方都接受：那股香氣是一個決定，不是米或地方的性質；而想要別的東西的飲者，必須指名去要。" } }
      ] },

    { t:"section", id:"abroad",
      title:{ en:"Whether sake made outside Japan is sake", ja:"日本の外で造られた酒は日本酒か", zh:"在日本以外釀的酒算不算清酒" }, jp:"国外の酒",
      body:[
        { t:"p", text:{ en:"Sake is now brewed in a dozen or more countries, some of it very well, and the Japanese geographical indication reserves <em>nihonshu</em> for sake made in Japan from Japanese rice. English has no such distinction and no authority to impose one, so the same liquid is sake in one language and not nihonshu in another.", ja:"日本酒はいま十を超える国で醸されており、そのいくつかはきわめてよく醸されている。そして日本の地理的表示は「日本酒」を、日本の米から日本で造られた酒に限る。英語にはそのような区別も、それを課す権限もない。ゆえに同じ液が、ある言語では sake であり、他の言語では日本酒でない。", zh:"清酒如今在十幾個以上的國家釀造，其中有些釀得非常好；而日本的地理標示把「日本酒」保留給在日本、以日本米釀成的酒。英文沒有這樣的區別，也沒有強加這種區別的權力——於是同一種液體，在一種語言裡是 sake，在另一種語言裡不是日本酒。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"The method belongs to everyone", ja:"方法は誰のものでもある", zh:"方法屬於所有人" }, jp:"世界の酒へ",
            text:{ en:"The technique is published, the organisms are sold, and the results have already beaten Japanese entries in open competitions. A category that cannot be made anywhere else cannot become a world drink, and the experience of every other beverage suggests that the origin's prestige rises rather than falls when the style spreads — nobody thinks less of Burgundy because there is pinot noir in Oregon. Protecting the phrase while welcoming the practice is the settled answer everywhere else.", ja:"技は公にされ、生きものは売られ、そして結果はすでに公開の品評会で日本の出品を破っている。他所で造りえぬ区分は、世界の飲み物となりえない。そして他のあらゆる飲み物の経験は、型が広がるとき、産地の威信は下がるのではなく上がることを示している。オレゴンにピノ・ノワールがあるからといって、ブルゴーニュを低く見る者はいない。語を守りつつ実践を迎えることは、他のいずこにおいても決着した答えである。", zh:"技術是公開的，菌種是買得到的，而且成果已經在公開評鑑會上勝過日本的參賽酒。一個別處做不出來的類別，不可能成為世界性的飲料；而所有其他飲料的經驗都顯示，當一種風格擴散開來，原產地的聲望是上升而不是下降——沒有人因為奧勒岡有黑皮諾就看低勃艮第。保護那個詞、同時歡迎那個做法，在其他任何地方都是已經定案的答案。" } },
          { title:{ en:"The word carries the place", ja:"語は土地を負う", zh:"那個詞承載著地方" }, jp:"名を守る",
            text:{ en:"Nihonshu literally means the alcohol of Japan, and the indication exists precisely because the phrase was starting to appear on products with no connection to it. An uncontrolled term invites the cheapest possible entrant to define the category for a market that has not yet formed an opinion, which is what happened to a number of other foods before anyone thought to protect them. The argument is not that foreigners cannot brew; it is that a name is the only asset a small industry has abroad.", ja:"日本酒とは字義において日本の酒であり、その表示が在るのは、まさにその語が、何の関わりもない製品に現れ始めていたからである。統べられぬ語は、まだ意見を形づくっていない市場に対して、最も安い参入者にその区分を定義させる。それは、誰かが守ろうと思い至る前に、他のいくつもの食べ物に起きたことである。論は、外国人が醸しえぬということではない。名こそ、小さな産業が国外に持つ唯一の資産であるということである。", zh:"「日本酒」字面上就是「日本的酒」，而這項標示之所以存在，正是因為這個詞開始出現在與它毫無關係的產品上。一個不受管制的名稱，會讓最廉價的那個進入者，去為一個尚未形成看法的市場定義整個類別——在有人想到要保護之前，這件事已經在好幾種食品上發生過。這個論點不是說外國人不會釀酒，而是說：名字是一個小產業在海外唯一擁有的資產。" } }
        ] },
        { t:"tiny", text:{ en:"Nobody on either side disputes that good sake is now made outside Japan. The disagreement is entirely about the word, which is why it will be settled by trade lawyers rather than by brewers.", ja:"いずれの側も、良い日本酒がいま日本の外で造られていることを争っていない。争いはまったく語についてであり、ゆえにそれは造り手ではなく通商の法律家によって決着する。", zh:"雙方都沒有人否認：好的清酒如今在日本以外被釀造出來。分歧完全是關於那個詞——所以它最後會由貿易律師、而不是由釀酒人來裁定。" } }
      ] },

    { t:"section", id:"nama",
      title:{ en:"Whether unpasteurised sake is worth what it costs to move", ja:"生酒は運ぶ費えに見合うか", zh:"生酒值不值得它的運送代價" }, jp:"生と冷の鎖",
      body:[
        { t:"p", text:{ en:"Nama is a genuinely distinct thing: alive, sharper, more immediate, and gone if it is warm for a week. It is also the format most likely to reach a drinker damaged, and it requires a continuous cold chain from the tank to the glass across whatever distance lies between.", ja:"生酒は真に異なるものである。生きており、鋭く、直截であり、一週も温かければ失われる。それはまた、飲み手のもとへ損なわれて届く見込みの最も高い形であり、そして槽から杯まで、そのあいだに横たわるいかなる距離をも、絶えざる冷の鎖を要する。", zh:"生酒是一種真正獨特的東西：活的、更銳利、更直接，而且只要溫著放一週就沒了。它同時也是最有可能以受損狀態抵達飲者手上的形式；而且它需要一條從酒槽到酒杯、跨越中間任何距離的不間斷冷鏈。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"It is the most alive thing the category makes", ja:"この区分が生む最も生きたもの", zh:"它是這個類別做出來最有生命的東西" }, jp:"生の価値",
            text:{ en:"Pasteurisation is a real intervention with a real cost in aroma and texture, and a drinker who has only met the heated version has not met half of what sake does. The cold chain exists anyway for a great deal of other food, the marginal cost of adding bottles to a refrigerated container is small, and the demand is demonstrably there. Refusing to ship it is choosing the convenience of the supply chain over the quality of the product, which is the argument the industry spent thirty years losing in every other respect.", ja:"火入れは実際の介入であり、香りと質感において実際の費えを伴う。熱されたものしか知らぬ飲み手は、日本酒がなすことの半ばに出会っていない。冷の鎖は、他の多くの食のためにいずれにせよ在る。冷えた箱に瓶を足す限界の費えは小さく、そして求めは確かに在る。それを送らぬことは、製品の質よりも供給の鎖の都合を択ぶことであり、それこそ、他のあらゆる点において産業が三十年をかけて負け続けた論である。", zh:"火入是一項真實的介入，在香氣與口感上有真實的代價；一位只遇過加熱版本的飲者，沒有遇過清酒所能做到的一半。冷鏈本來就為大量其他食品而存在，在冷藏櫃裡多塞幾瓶酒的邊際成本很小，而需求確實存在。拒絕運送它，等於選擇供應鏈的方便勝過產品的品質——而這正是這個產業在其他每一個面向上，花了三十年一路輸掉的那個論點。" } },
          { title:{ en:"It exports an assumption that does not travel", ja:"移らぬ前提を輸出している", zh:"它輸出了一個無法跟著走的前提" }, jp:"鎖の限界",
            text:{ en:"Nama works in Japan because the chain is short, cold and fast, and everybody in it knows what the bottle is. Send the same bottle four thousand miles to a market whose retailers store sake next to the soy sauce and you have not exported a style, you have exported a high probability that somebody's first premium sake tastes of wet cardboard. The emissions of holding a bottle at five degrees across three continents are also not nothing, and they fall on the one part of the footprint the brewery can actually control.", ja:"生酒が日本で働くのは、鎖が短く、冷たく、速く、そこにいる誰もがその瓶が何であるかを知っているからである。同じ瓶を六千キロ先の、小売が日本酒を醤油の隣に置く市場へ送れば、輸出したのは型ではない。誰かの最初の上位の酒が濡れた段ボールの味をする高い確からしさを輸出したのである。三つの大陸にわたり五度で瓶を保つ排出もまた無ではなく、それは足跡のうち、蔵が実際に制しうる唯一の部分に落ちる。", zh:"生酒在日本行得通，是因為那條鏈短、冷、快，而且鏈上每一個人都知道這瓶是什麼。把同一瓶酒送到六千公里外、零售商把清酒擺在醬油旁邊的市場，你輸出的不是一種風格，而是「某個人第一支高階清酒嘗起來像濕紙板」的高機率。跨越三個大陸、把一瓶酒維持在五度的排放也不是零，而且它落在整個碳足跡裡，酒藏真正控制得了的那一部分。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that nama needs continuous refrigeration and that most of the damage happens after the sake has left the brewery. The disagreement is about whether a brewery should ship into a chain it cannot see.", ja:"双方が受け入れているのは、生酒が絶えざる冷蔵を要すること、そして損なわれることの多くが、酒が蔵を出たのちに起きることである。争いは、蔵が見えぬ鎖の先へ送るべきか否かにある。", zh:"雙方都接受：生酒需要不間斷的冷藏，而且多數損害發生在酒離開酒藏之後。分歧在於：酒藏該不該把酒送進一條自己看不見的鏈子裡。" } }
      ] },

    { t:"section", id:"premium",
      title:{ en:"Whether premiumisation saved the category or hollowed it", ja:"上位化は区分を救ったか、抜いたか", zh:"高階化是救了這個類別，還是把它掏空了" }, jp:"上位化",
      body:[
        { t:"p", text:{ en:"Domestic volume has fallen by more than seventy per cent since 1973 and the industry's response was to move up: better rice, lower polishing ratios, cold distribution, higher prices, and an export market that pays roughly twice per litre what it did a decade ago. The sake is unarguably better. Whether the industry is better off is a separate question.", ja:"国内の量は一九七三年以来七割を超えて落ち、産業の応えは上へ移ることであった。より良い米、より低い精米歩合、冷たい流通、より高い値、そして十年前のおよそ二倍を一リットルあたり払う輸出の市場。酒は疑いなく良くなった。産業がより良い立場にあるか否かは、別の問いである。", zh:"國內銷量自一九七三年以來下跌超過七成，而產業的回應是往上走：更好的米、更低的精米步合、冷藏流通、更高的價格，以及一個每公升付出約十年前兩倍價錢的出口市場。酒無疑變好了。至於這個產業是不是也變好了，那是另一個問題。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"It was the only move available", ja:"それが唯一の手であった", zh:"那是唯一可走的一步" }, jp:"唯一の手",
            text:{ en:"When volume is falling and you cannot cut price against a shrinking market, value per litre is the only variable left. Premiumisation raised technical standards across the whole industry, produced the best sake ever made, created a reason for a foreign market to pay attention, and gave a generation of successor brewers something to be ambitious about. The houses that did not move up are, on the whole, the houses that are no longer here.", ja:"量が落ち、縮む市場に対して値を下げえぬとき、残る変数は一リットルあたりの価値だけである。上位化は産業の全体において技の水準を上げ、かつてない最良の酒を生み、外の市場が目を向ける理由を作り、そして後継の一世代に志すべきものを与えた。上へ移らなかった家は、おおむね、もうここにいない家である。", zh:"當銷量在下滑、而你又不可能在一個萎縮的市場裡降價競爭時，每公升的價值就是僅剩的變數。高階化拉高了整個產業的技術水準、產出了有史以來最好的清酒、給了海外市場一個注意它的理由，也給了一整代接班的釀造者一件值得有野心的事。那些沒有往上走的酒藏，大體上，就是現在已經不在的那些。" } },
          { title:{ en:"The middle is what actually disappeared", ja:"実際に消えたのは中間である", zh:"真正消失的是中間" }, jp:"中抜け",
            text:{ en:"What has closed fastest is not the bottom of the market but the middle: the mid-sized regional house selling a decent everyday bottle across two or three prefectures. A category can survive losing its cheapest tier. It cannot easily survive losing the tier that made it a habit, because occasion drinks are bought by people who already have the habit, and nothing on the premium shelf creates one. The export figures are real and they are a single-digit share of what is made.", ja:"最も速く閉じてきたのは市場の底ではなく、中間である。二つ三つの県に渡ってまともな日々の一本を売る、中ほどの規模の地方の家である。区分は、最も安い層を失っても生き延びうる。だが、それを習いとしていた層を失って易々と生き延びはしない。折の酒を買うのは、すでに習いを持つ人々であり、上位の棚にあるもののいずれも、習いを生みはしないからである。輸出の数字は実在し、そしてそれは造られるものの一桁の割合である。", zh:"關門最快的不是市場的底層，而是中層：那些橫跨兩三個縣、賣著一瓶像樣日常酒的中型地方酒藏。一個類別失去最便宜的那一層，還活得下去；但失去「讓它成為習慣」的那一層，就很難活。因為場合用酒是由已經有習慣的人買的，而高階貨架上的任何東西都不會創造習慣。出口數字是真的，而它只占產量的個位數百分比。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that the mid-sized regional brewery is the segment that has closed fastest, and that exports are a small share of volume however large a share of the conversation.", ja:"双方が受け入れているのは、中ほどの規模の地方の蔵こそ最も速く閉じてきた区分であること、そして輸出が、話題に占める割合がいかに大きくとも、量においては小さな割合であることである。", zh:"雙方都接受：中型地方酒藏是關門最快的那一塊；而出口無論在話題裡占多大比重，在數量上都只是一小塊。" } }
      ] },

    { t:"section", id:"aruten",
      title:{ en:"Whether added alcohol is a technique or an extender", ja:"アルコール添加は技か、嵩増しか", zh:"添加酒精是技術，還是增量" }, jp:"アル添",
      body:[
        { t:"p", text:{ en:"The labelling standard permits a special designation to add distilled alcohol up to a tenth of the weight of the white rice. Below that ceiling the addition does specific, describable things. Outside the special designations there is no ceiling of that kind, and the same permission is what produced the wartime practice that tripled volume.", ja:"表示基準は、特定名称酒に対し、白米の重量の十分の一までの蒸留酒の添加を許す。その天井の下において、添加は定まった、述べうることをなす。特定名称の外にはその種の天井はなく、同じ許しこそ、量を三倍にした戦時の慣行を生んだものである。", zh:"標示基準允許特定名稱酒添加不超過白米重量十分之一的蒸餾酒。在那個上限之下，添加做的是具體、可描述的事。而在特定名稱之外沒有那種上限；同樣這條許可，正是戰時把產量變成三倍那套做法的來源。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"At a tenth it is a tool", ja:"十分の一であれば道具である", zh:"在十分之一的量上，它是工具" }, jp:"技である",
            text:{ en:"Added to the finished mash a day before pressing, it pulls aromatic compounds out of the solids, lightens the body, firms the finish and raises the alcohol at the point spoilage is most likely. It is documented from the seventeenth century under the name pillar shōchū, three hundred years before anybody invented the junmai category. Blind panels do not reliably prefer junmai, and a house that makes a good honjōzō is usually making it because it wants that sake, not because it wants the volume.", ja:"搾りの一日前、仕上がった醪へ加えられることで、香りの成分を固形から引き出し、体を軽くし、後味を締め、腐敗の最も危ういその時点でアルコールを上げる。柱焼酎の名で十七世紀から記録されており、それは誰かが純米という区分を編み出す三百年前である。目隠しの審査は純米を確かに好みはせず、良い本醸造を造る家は、たいてい量を望んでではなく、その酒を望んでそうしている。", zh:"在壓榨前一天加進已完成的醪裡，它把香氣成分從固形物中拉出來、讓酒體變輕、讓尾韻更緊實，並且在腐敗風險最高的那個時點提高酒精濃度。它以「柱燒酎」之名自十七世紀就有記載——那比任何人發明「純米」這個類別早了三百年。盲飲評審並不會可靠地偏好純米；而一家做出好本釀造的酒藏，通常是因為它想要那支酒，不是因為它想要那個量。" } },
          { title:{ en:"The ceiling is not what most people have tasted", ja:"多くの人が味わったのは天井の下ではない", zh:"多數人嘗到的並不是那個上限之下的東西" }, jp:"嵩増し",
            text:{ en:"Almost everyone's actual experience of added alcohol is volume futsūshu, where there is no ten per cent line and where the alcohol is joined by sugars and acids. Arguing from the careful three to seven per cent in a good honjōzō, while the category's reputation was set by something else entirely, answers a question nobody asked. And a shopper has exactly one signal — a word on a label — so blurring the distinction between the two uses serves the producer rather than the person paying.", ja:"アルコール添加についてほとんどの人が実際に経験したものは、量を売る普通酒である。そこに十パーセントの線はなく、アルコールには糖類と酸味料が伴う。良い本醸造における慎重な三から七パーセントから論じることは、この区分の評判がまったく別のものによって定められたにもかかわらず、誰も尋ねなかった問いに答えることである。そして買い手が持つ合図はただ一つ、札の上の一語である。ゆえに二つの用いの区別をぼかすことは、代を払う者ではなく造る者に資する。", zh:"幾乎所有人對「添加酒精」的實際經驗，都來自走量的普通酒——那裡沒有百分之十這條線，而且酒精旁邊還跟著糖類與酸味料。拿一支好本釀造裡謹慎的百分之三到七來論證，而這個類別的名聲其實是由完全另一種東西決定的，等於在回答一個沒有人問過的問題。而消費者手上恰好只有一個訊號——酒標上的一個詞；所以模糊這兩種用途之間的區別，服務的是生產者，不是付錢的人。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that the label separates the two cases completely and that the ten per cent ceiling applies only to the special designations. The argument is about what a reader infers, not about what is permitted.", ja:"双方が受け入れているのは、札が二つの場合を完全に分かつこと、そして十パーセントの天井が特定名称にのみ当てはまることである。論は、何が許されているかについてではなく、読み手が何を推すかについてである。", zh:"雙方都接受：酒標把這兩種情況徹底分開，而百分之十的上限只適用於特定名稱酒。爭論的是讀者會推論出什麼，而不是法律允許什麼。" } }
      ] },

    { t:"section", id:"oke",
      title:{ en:"Whether contract brewing was dishonest or simply specialised", ja:"桶取引は不誠実であったか、分業であったか", zh:"委託釀造是不誠實，還是單純的分工" }, jp:"桶取引",
      body:[
        { t:"p", text:{ en:"For most of the twentieth century a large share of the sake sold under famous names was brewed by somebody else and sold in bulk to the house whose label it wore. The practice is legal, has a formal name in tax law, and has never been disclosed on a bottle.", ja:"二十世紀の大半において、名高い名のもとに売られた酒の大きな割合は、他の誰かによって醸され、その札を負う家へまとめて売られていた。この慣行は適法であり、税法上の正式な名を持ち、そして瓶の上で開示されたことは一度もない。", zh:"在二十世紀的大部分時間裡，以知名品牌售出的清酒有很大一部分是別人釀的，再整批賣給掛名的那家酒藏。這個做法合法、在稅法上有正式名稱，而且從來沒有在瓶身上被揭露過。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"It was specialisation, and it kept hundreds of houses alive", ja:"分業であり、数百の家を生かした", zh:"那是分工，而且養活了數百家酒藏" }, jp:"分業",
            text:{ en:"A house that can brew and a house that can sell dividing the work between them is ordinary in every manufacturing industry, and the relationships that worked involved shared technical standards, inspection, advice and a guaranteed offtake. Hundreds of small rural kura existed for decades because somebody reliably bought their whole output, which let them keep a crew, keep a building and keep brewing. They did not experience it as a humiliation; they experienced it as a living.", ja:"醸しうる家と売りうる家が仕事を分かつことは、いずれの製造の産業においても平凡である。そして働いた関わりは、共有された技の基準、検査、助言、そして確かな引き取りを伴っていた。数百の小さな地方の蔵が数十年にわたり在りえたのは、誰かがその産の全体を確かに買ったからであり、それが組を、建物を、造りを保たせた。彼らはそれを屈辱として経験したのではない。生業として経験したのである。", zh:"會釀酒的一家與會賣酒的一家把工作分開，在任何製造業裡都是再平常不過的事；而運作良好的關係，包含共同的技術標準、檢查、指導與保證收購。數百家鄉間小酒藏之所以能存在數十年，正是因為有人可靠地買下它們的全部產出，讓它們留得住班底、留得住建築、也留得住釀造。他們並不是把這件事當成屈辱在經歷，而是當成生計。" } },
          { title:{ en:"The buyer's label said nothing, and the risk was all one way", ja:"札は何も言わず、危うさは一方に偏っていた", zh:"酒標什麼也沒說，而風險全壓在一邊" }, jp:"非対称",
            text:{ en:"A consumer choosing between two famous labels was choosing between two blends of other people's sake and was not told. Large buyers used a position no small seller could refuse to set prices, and when demand fell they cut the bought-in supply first, so a regional brewery could lose its entire revenue in one letter having never been allowed to build a brand. Specialisation is a fair description of the arrangement; it is not a fair description of who carried the risk.", ja:"二つの名高い札のあいだで択ぶ客は、他人の酒の二つの調合のあいだで択んでおり、そう告げられてはいなかった。大きな買い手は、小さな売り手には断りえぬ立場を用いて値を定め、需要が落ちれば買い入れから先に削った。ゆえに地方の蔵は、銘柄を築くことを一度も許されぬまま、一通の手紙で収入の全体を失いえた。分業はこの取り決めの公平な記述である。だが、誰が危うさを担いでいたかについての公平な記述ではない。", zh:"一位在兩個知名品牌之間做選擇的消費者，其實是在兩種「別人的酒的調配」之間做選擇，而且沒有被告知。大買家利用小賣家無法拒絕的地位來訂價；當需求下滑時，他們先砍的是外購——於是一家地方酒藏可能在從未被允許建立品牌的情況下，因為一封信就失去全部收入。「分工」是對這個安排的公平描述，但它不是對「誰承擔了風險」的公平描述。" } }
        ] },
        { t:"tiny", text:{ en:"Both sides accept that the practice was enormous, that it is now much smaller, and that no label has ever disclosed it. Nobody argues that it should be disclosed now, because almost nobody would know what the disclosure meant.", ja:"双方が受け入れているのは、この慣行が巨大であったこと、いまははるかに小さいこと、そしていかなる札もそれを開示したことがないことである。いま開示すべきだと唱える者はいない。その開示が何を意味するかを解する者が、ほとんどいないからである。", zh:"雙方都接受：這個做法曾經規模巨大、如今小得多，而且從來沒有任何酒標揭露過它。也沒有人主張現在應該揭露——因為幾乎沒有人會知道那個揭露是什麼意思。" } }
      ] },

    { t:"related", items:[
      { href:"myths.html", why:{ en:"The questions that are settled, and what people still say about them.", ja:"決着した問いと、それでも人が言い続けること。", zh:"已經有答案的問題，以及人們仍然在說的話。" } },
      { href:"sources.html", why:{ en:"How to work out for yourself which of these can be settled at all.", ja:"これらのうちどれがそもそも決着しうるかを、自ら判じる方法。", zh:"如何自己判斷這些問題之中，哪些根本有可能被裁定。" } },
      { href:"future.html", why:{ en:"The same arguments, projected twenty years forward.", ja:"同じ論を、二十年先へ延ばしたもの。", zh:"同樣的爭論，往前推二十年。" } },
      { href:"classification.html", why:{ en:"The legal definitions several of these turn on.", ja:"これらのいくつかが依って立つ法の定義。", zh:"其中好幾個爭論所依據的法律定義。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- learning */
SAKE.pages["learning"] = {
  kicker: { en: "Reference · 04", ja: "資料 · 04", zh: "資料 · 04" },
  title:  { en: "How People Learn It", ja: "人はいかに学ぶか", zh: "人們如何學會它" },
  jp: "修学",
  lede: {
    en: "Three quite different competences get called “knowing about sake”, and the qualifications that certify them have almost nothing to do with each other. One measures whether you can run a fermentation and is counted in years on a brewery floor. One measures whether your palate and your service are reliable and is counted in hours in a classroom. One measures whether you can research the subject and is counted in degrees. Confusing them is the commonest mistake in the whole field, and it is made in both directions: a brewer is assumed to be a good taster, and a certificate-holder is assumed to know how the sake was made.",
    ja: "「日本酒を知っている」と呼ばれるものには、まったく異なる三つの力があり、それらを認める資格は互いにほとんど関わりを持たない。一つは醗酵を回せるかを測り、蔵の床の上の年数で数えられる。一つは舌と供し方が確かかを測り、教室のなかの時間で数えられる。一つはこの主題を研究できるかを測り、学位で数えられる。これらを取り違えることは、この分野の全体で最もよくある誤りであり、そしてそれは両の向きに犯される——造り手は良い利き手だと思われ、資格の持ち主はその酒がいかに造られたかを知っていると思われる。",
    zh: "有三種相當不同的能力都被稱作「懂日本酒」，而認證它們的資格彼此幾乎毫無關係。一種衡量你能不能把一槽發酵跑完，以在酒藏地板上待過的年數計算。一種衡量你的味覺與服務是否可靠，以在教室裡待過的時數計算。一種衡量你能不能研究這個主題，以學位計算。把它們混為一談，是整個領域裡最常見的錯誤，而且是雙向的：釀酒的人被認為一定很會品飲，而持證的人被認為知道那支酒是怎麼釀的。"
  },
  body: [

    { t:"section", id:"three",
      title:{ en:"Three competences, one word", ja:"三つの力、ひとつの語", zh:"三種能力，一個詞" }, jp:"三つの道",
      body:[
        { t:"figure",
          caption:{
            en:"Every qualification worth naming, placed by what it actually certifies and by how far its recognition reaches. The horizontal axis runs from the hands through the palate to the head; the vertical axis runs from one guild's own training up to a credential that is understood in a wine shop in another country. Almost nothing sits in the middle of both, because almost nothing tries to certify two of these competences at once.",
            ja:"名を挙げるに値するあらゆる資格を、それが実際に何を認めるか、そしてその認めがどこまで届くかによって置いたものである。横の軸は手から舌を経て頭へ走り、縦の軸は一つの集団の内輪の研修から、よその国の酒屋で通じる証まで走る。二つの軸の真ん中にはほとんど何もない。二つの力を同時に認めようとするものが、ほとんどないからである。",
            zh:"每一項值得一提的資格，依「它實際認證什麼」與「它的認可能傳多遠」放置。橫軸從手經過舌頭走到腦；縱軸從一個杜氏集團自家的研修，走到在別的國家的酒商店裡也通用的證書。兩軸的正中央幾乎空無一物，因為幾乎沒有任何一項資格試圖同時認證其中兩種能力。" },
          svg: function (lang, L) {
            var W = 760, H = 396, X0 = 120, X1 = 700, Y0 = 322, Y1 = 58;
            function px(u) { return X0 + u * (X1 - X0); }
            function py(v) { return Y0 - v * (Y0 - Y1); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* guides */
            var gi;
            for (gi = 1; gi <= 2; gi++) {
              s += '<line x1="' + px(gi / 3) + '" y1="' + Y1 + '" x2="' + px(gi / 3) + '" y2="' + Y0 + '" stroke="#F0EDE4"/>';
              s += '<line x1="' + X0 + '" y1="' + py(gi / 3) + '" x2="' + X1 + '" y2="' + py(gi / 3) + '" stroke="#F0EDE4"/>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" stroke="#CDC6B9"/>';
            s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#CDC6B9"/>';
            /* axis labels */
            var xl = [
              { u:0.06, jp:"手", n:{ en:"the hands", ja:"手", zh:"手" } },
              { u:0.5,  jp:"舌", n:{ en:"the palate", ja:"舌", zh:"舌" } },
              { u:0.94, jp:"頭", n:{ en:"the head", ja:"頭", zh:"腦" } }
            ], yl = [
              { v:0.06, jp:"蔵と組合", n:{ en:"one guild", ja:"一つの集団", zh:"單一集團" } },
              { v:0.5,  jp:"国内", n:{ en:"within Japan", ja:"国内", zh:"日本國內" } },
              { v:0.94, jp:"国際", n:{ en:"abroad too", ja:"国の外でも", zh:"國外亦然" } }
            ], i;
            /* In Japanese the gloss and the kanji mark are often the same word;
               drawing both would just repeat it, so the gloss is dropped. */
            function gloss(x, y, anchor, jp, n) {
              var g = L(n);
              if (g === jp) return "";
              return '<text x="' + x + '" y="' + y + '" text-anchor="' + anchor +
                     '" font-size="9.5" fill="#ADA79E">' + g + '</text>';
            }
            for (i = 0; i < 3; i++) {
              s += '<text x="' + px(xl[i].u) + '" y="' + (Y0 + 20) + '" text-anchor="middle" font-size="12" fill="#201E1B">' + xl[i].jp + '</text>';
              s += gloss(px(xl[i].u), Y0 + 34, "middle", xl[i].jp, xl[i].n);
              s += '<text x="' + (X0 - 12) + '" y="' + (py(yl[i].v) - 3) + '" text-anchor="end" font-size="12" fill="#201E1B">' + yl[i].jp + '</text>';
              s += gloss(X0 - 12, py(yl[i].v) + 11, "end", yl[i].jp, yl[i].n);
            }
            var pts = [
              { u:0.07, v:0.10, jp:"杜氏組合の研修", a:"start",
                n:{ en:"guild training", ja:"組合の研修", zh:"集團研修" } },
              { u:0.15, v:0.50, jp:"酒造技能士", a:"start",
                n:{ en:"national trade certificate", ja:"国の技能検定", zh:"國家技能檢定" } },
              { u:0.44, v:0.38, jp:"酒匠", a:"end",
                n:{ en:"tasting specialist", ja:"利きの専門", zh:"品飲專業" } },
              { u:0.53, v:0.34, jp:"唎酒師", a:"start",
                n:{ en:"service qualification, 1991", ja:"供し手の資格・一九九一年", zh:"服務資格・1991 年" } },
              { u:0.62, v:0.62, jp:"SAKE DIPLOMA", a:"start",
                n:{ en:"sommelier association, 2017", ja:"ソムリエ協会・二〇一七年", zh:"侍酒師協會・2017 年" } },
              { u:0.52, v:0.90, jp:"WSET Level 3", a:"end",
                n:{ en:"in English, for the trade", ja:"英語、商いのため", zh:"英語，為業界而設" } },
              { u:0.86, v:0.40, jp:"醸造学の学位", a:"end",
                n:{ en:"a brewing degree", ja:"醸造の学位", zh:"釀造學位" } },
              { u:0.93, v:0.88, jp:"日本酒学", a:"end",
                n:{ en:"Niigata, from 2018", ja:"新潟・二〇一八年から", zh:"新潟，2018 年起" } }
            ];
            for (i = 0; i < pts.length; i++) {
              var p = pts[i], cx = px(p.u), cy = py(p.v);
              s += '<circle cx="' + cx + '" cy="' + cy + '" r="5.5" fill="#FBFAF7" stroke="#7C6B52" stroke-width="1.5"/>';
              var tx = p.a === "end" ? cx - 10 : cx + 10;
              s += '<text x="' + tx + '" y="' + (cy - 1) + '" text-anchor="' + p.a + '" font-size="12" fill="#201E1B">' + p.jp + '</text>';
              if (L(p.n) !== p.jp)
                s += '<text x="' + tx + '" y="' + (cy + 12) + '" text-anchor="' + p.a + '" font-size="9" fill="#8B857C">' + L(p.n) + '</text>';
            }
            s += '<text x="24" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "位置はおおよそのものであり、これは順位ではない。縦の軸は難しさではなく、その証がどこまで通じるかを測っている。"
                  : lang === "zh" ? "位置為概略值，這不是排名。縱軸衡量的不是難度，而是那張證書能通到多遠。"
                  : "Positions are approximate and this is not a ranking. The vertical axis measures how far a credential travels, not how hard it is.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The gap that matters most is the one along the bottom edge. A tōji who has run twenty seasons may hold no certificate at all, because the qualification that would describe what they can do is a trade certificate whose whole purpose is to be unnecessary once everyone in the building already knows. Meanwhile the credentials that travel — the ones printed on a business card in London or Taipei — certify the palate and the service, which is exactly the competence a brewery has the least need of.",
          ja:"最も大事な隔たりは、下の縁に沿ってある。二十の造りを回した杜氏が、証を一つも持たぬということはありうる。その人にできることを述べるであろう資格が、建物のなかの皆がすでに知っているならば要らなくなることを本旨とする、技能の証だからである。一方、旅をする証——ロンドンや台北の名刺に刷られるもの——が認めるのは舌と供し方であり、それはまさしく、蔵が最も必要としない力である。",
          zh:"最要緊的落差在底部那一條邊上。一位跑過二十個造酒季的杜氏，可能一張證書都沒有——因為能描述他所會之事的那項資格，是一張技能證明，而它的整個用意，是在建築物裡每個人都已經知道的時候變得多餘。與此同時，那些會旅行的證書——印在倫敦或台北名片上的那些——認證的是味覺與服務，而那恰恰是酒藏最不需要的能力。" } }
      ] },

    { t:"section", id:"making",
      title:{ en:"Learning to make it", ja:"造ることを学ぶ", zh:"學習釀造" }, jp:"技能",
      body:[
        { t:"p", text:{
          en:"There is a national qualification and almost nobody outside the industry has heard of it. <em>Shuzō ginōshi</em> — the sake-brewing trade certificate — sits inside Japan's general skills-testing system, administered under the Ministry of Health, Labour and Welfare and applied for through a prefectural vocational-ability development association. It is the same machinery that certifies a plasterer or a machinist, and it is the only qualification in this whole page that is gated on years of actual work.",
          ja:"国の資格が存在し、そして業界の外ではほとんど誰も聞いたことがない。酒造技能士——清酒を造る技能の証——は、日本の技能検定の仕組みのうちに座り、厚生労働省のもとで行われ、都道府県の職業能力開発協会を通じて申し込む。左官や機械工を認めるのと同じ仕組みであり、そしてこの頁の全体において、実際の年季を条件とする唯一の資格である。",
          zh:"有一項國家級資格，而業界之外幾乎沒人聽過。酒造技能士——清酒釀造的技能證明——位於日本的技能檢定體系之內，在厚生勞動省之下施行，透過各都道府縣的職業能力開發協會申請。這與認證泥水師傅或機械工是同一套機制，而且是本頁所有資格之中，唯一以實際年資為門檻的。" } },
        { t:"table",
          caption:{ en:"The trade certificate", ja:"技能の証", zh:"技能證明" },
          cols:["",{en:"Grade 2",ja:"二級",zh:"二級"},{en:"Grade 1",ja:"一級",zh:"一級"}],
          keyCol:0,
          rows:[
            [{en:"Practical experience required",ja:"必要な実務経験",zh:"所需實務經驗"},
             {en:"2 years, sometimes waived on the basis of relevant education",ja:"二年。関係する学歴により免ぜられることがある",zh:"2 年；視相關學歷有時可免"},
             {en:"7 years, or 2 years after passing grade 2",ja:"七年、または二級合格後に二年",zh:"7 年，或通過二級後再 2 年"}],
            [{en:"Written paper covers",ja:"学科の範囲",zh:"學科範圍"},
             {en:"Sake manufacturing method · microbes and enzymes · general chemistry · electrics · relevant statutes · safety and hygiene",ja:"清酒製造法・微生物および酵素・化学一般・電気・関係法規・安全衛生",zh:"清酒製造法・微生物與酵素・化學一般・電氣・相關法規・安全衛生"},
             {en:"The same subjects, at depth",ja:"同じ科目を、より深く",zh:"相同科目，更深入"}],
            [{en:"Practical test",ja:"実技",zh:"實技"},
             {en:"Sake manufacturing work",ja:"清酒製造作業",zh:"清酒製造作業"},
             {en:"Sake manufacturing work",ja:"清酒製造作業",zh:"清酒製造作業"}],
            [{en:"Administered by",ja:"実施",zh:"實施單位"},
             {en:"Ministry of Health, Labour and Welfare, through the prefectural associations",ja:"厚生労働省、都道府県協会を通じて",zh:"厚生勞動省，透過各都道府縣協會"},
             {en:"The same",ja:"同じ",zh:"相同"}]
          ] },
        { t:"p", text:{
          en:"Notice what the written paper contains. Electrics, statutes, safety and hygiene are half the syllabus, because the job is running a food factory under a tax licence, not describing aromas. Nothing on that list would help anyone choose a bottle, and that is the point: it is the qualification of someone who has to make the sake exist.",
          ja:"学科の中身に気をつけられたい。電気、法規、安全衛生で範囲の半ばを占める。その仕事は、香りを述べることではなく、税の免許のもとで食品の工場を回すことだからである。その一覧のいずれも、瓶を選ぶ助けにはならない。そしてそれこそが要点である。これは、酒を存在させねばならぬ者の資格である。",
          zh:"請注意學科考的是什麼。電氣、法規、安全衛生佔了一半的範圍，因為這份工作是在稅務執照之下經營一座食品工廠，而不是描述香氣。這張清單上沒有任何一項有助於挑選一瓶酒——而這正是重點：這是「必須讓這支酒存在」的那個人的資格。" } },
        { t:"defs", items:[
          { term:{ en:"The guild's own training", ja:"組合の研修", zh:"集團自己的研修" }, jp:"組合研修",
            def:{ en:"Older than the state system and still running. The larger tōji associations put their members through winter courses, summer study meetings and internal tasting panels, and the certificate at the end is recognised by every brewery that hires from that guild and by nobody else. It is the narrowest credential on the map and, inside its own world, the most trusted.",
              ja:"国の仕組みより古く、いまも続く。大きな杜氏の組合は、冬の講習、夏の研究会、内輪の利き酒会に会員を通す。その終わりの証は、その組合から人を雇うあらゆる蔵に通じ、他の誰にも通じない。図の上で最も狭い証であり、そして自らの世界のうちでは、最も信を置かれる。",
              zh:"比國家制度更古老，而且至今仍在運作。規模較大的杜氏組合讓成員參加冬季講習、夏季研究會與內部品評會，結業時的證明只在那些會從該組合聘人的酒藏之間通用，別處都不通。它是這張圖上最窄的證書，而在它自己的世界裡，也是最被信任的。" } },
          { term:{ en:"University brewing science", ja:"大学の醸造学", zh:"大學的釀造學" }, jp:"醸造科学",
            def:{ en:"The route that produces the industry's researchers and a good share of its modern owner-brewers: a degree in brewing science, most famously at Tokyo University of Agriculture, whose graduates are scattered through every part of this reference. It teaches the microbiology and the chemistry properly and teaches almost nothing about a shovel.",
              ja:"業界の研究者と、近代の蔵元の少なからぬ部分を生む道。醸造科学の学位であり、最もよく知られるのは東京農業大学であって、その卒業生はこの事典のあらゆる部分に散らばっている。微生物学と化学をきちんと教え、そして鋤についてはほとんど何も教えない。",
              zh:"這條路線培養出業界的研究者，以及相當比例的現代藏元：釀造科學的學位，其中最有名的是東京農業大學，其畢業生散布在這本參考書的每一個部分。它把微生物學與化學教得很紮實，而關於鏟子則幾乎什麼都不教。" } },
          { term:{ en:"The association's courses", ja:"協会の講習", zh:"協會的講習" }, jp:"醸造協会",
            def:{ en:"The Brewing Society of Japan runs preparation courses for the written paper, built around past examination questions, and the National Research Institute of Brewing runs technical courses for people already in the industry. Between them they are how a working brewer updates what they know without leaving the job.",
              ja:"日本醸造協会は学科の対策講座を、過去の出題を軸に開く。酒類総合研究所は、すでに業界にある者のための技術の講習を開く。二つの間に、働く造り手が職を離れずに知を改める道がある。",
              zh:"日本釀造協會以歷屆考題為核心開設學科對策講座；酒類綜合研究所則為已在業界的人開設技術講習。兩者加起來，就是一位在職的釀酒人不必離職也能更新所學的途徑。" } }
        ] }
      ] },

    { t:"section", id:"judging",
      title:{ en:"Learning to judge it", ja:"利くことを学ぶ", zh:"學習品評" }, jp:"利き",
      body:[
        { t:"p", text:{
          en:"This is the crowded half of the field, and it is crowded because it is the half that a career can be built on outside a brewery. Four credentials account for nearly all of it, and they differ less in content than in who is speaking to whom.",
          ja:"こちらが混み合った半分であり、混み合うのは、蔵の外で身を立てうる半分だからである。四つの証がそのほとんどすべてを占め、それらが異なるのは中身よりも、誰が誰に語りかけているかにおいてである。",
          zh:"這是這個領域裡擁擠的那一半，之所以擁擠，是因為它是能在酒藏之外撐起一份職業的那一半。四張證書幾乎涵蓋了全部，而它們之間的差異與其說在內容，不如說在於「誰在對誰說話」。" } },
        { t:"compare", cols:2, items:[
          { h:{ en:"Kikisake-shi", ja:"唎酒師", zh:"唎酒師" }, jp:"唎酒師",
            body:[
              { t:"p", text:{
                en:"Created in 1991 by the SSI, a non-profit, and described by it as the world's first qualification for the people who sell and serve sake rather than the people who make it. The first cohort certified 188 people; by 2024 more than fifty thousand held it. The course is built around the four-type aroma-and-flavour classification the SSI itself devised, and around service — temperature, vessel, pairing, how to talk to a customer. The pass rate is around eighty per cent, which tells you honestly what it is: a thorough training with an exam at the end, not a filter.",
                ja:"一九九一年、NPOであるSSIによって作られ、造る者ではなく売り供する者のための、世界で初めての資格であると自ら述べる。最初の期は百八十八名を認めた。二〇二四年には五万人を越える者が持つ。講座はSSIが自ら定めた香味特性別の四分類と、供し方——温度、器、料理との合わせ、客への語りかけ——を軸に組まれる。合格率はおよそ八割であり、それがこの資格の何であるかを正直に告げている。篩ではなく、終わりに試験のついた丁寧な訓練である。",
                zh:"1991 年由非營利組織 SSI 創設，並由其自述為全世界第一個為「販售與提供清酒的人」而非「釀造清酒的人」設立的資格。第一屆認證了 188 人；到 2024 年，持有者已超過五萬。課程以 SSI 自行制定的香味特性四分類為核心，並圍繞服務——溫度、酒器、餐搭、如何與客人交談。合格率約八成，這誠實地說明了它是什麼：一套紮實的訓練，結尾附一場考試，而不是一道篩子。" } }
            ] },
          { h:{ en:"Sakashō", ja:"酒匠", zh:"酒匠" }, jp:"酒匠",
            body:[
              { t:"p", text:{
                en:"The SSI's step above, and a narrower thing: where the kikisake-shi qualification covers service, this one is about the palate. It is taken by people who already hold the first, and the training is largely comparative tasting — discriminating between samples, describing reliably, and reaching the same verdict twice. It is the nearest thing outside a brewery's own bench to a formal sensory training.",
                ja:"SSIのその上の段であり、より狭いものである。唎酒師が供し方を覆うのに対し、こちらは舌についてである。すでに前者を持つ者が取り、その訓練はほとんど比較の利きである。見本を分かち、確かに述べ、二度同じ判に至ること。蔵の分析台の外にあって、正式な官能の訓練に最も近いものである。",
                zh:"SSI 更上一階的資格，也是更窄的一件事：唎酒師涵蓋服務，而這一項關乎味覺。報考者通常已持有前者，訓練內容大半是比較品飲——分辨樣品、可靠地描述、以及兩次得出同樣的判斷。在酒藏自家的分析台之外，它是最接近正式官能訓練的東西。" } }
            ] },
          { h:{ en:"J.S.A. Sake Diploma", ja:"SAKE DIPLOMA", zh:"SAKE DIPLOMA" }, jp:"酒ディプロマ",
            body:[
              { t:"p", text:{
                en:"Launched in 2017 by the Japan Sommelier Association, in the wake of the demand that followed washoku's UNESCO listing. No experience or nationality requirement; you must be twenty. The first stage is a computer-based multiple-choice paper, the second an essay and a tasting. Cumulative passers reached 5,257 by May 2022, and the 2021 pass rate was 44.4 per cent — 970 of 2,183 — against a five-year average near 41. It is the difficult one, and it is difficult in the way a wine examination is difficult: breadth of recall plus blind tasting under time.",
                ja:"二〇一七年、和食のユネスコ登録に続いた需要のなかで、日本ソムリエ協会が始めた。経験も国籍も問わず、二十歳であればよい。一次は計算機による択一、二次は論述と利き酒である。累計の合格者は二〇二二年五月に五千二百五十七名に達し、二〇二一年の合格率は四四・四パーセント——二千百八十三名のうち九百七十名——であった。五年の平均は四一に近い。これが難しいほうであり、その難しさは葡萄酒の試験の難しさと同じ種類である。想起の広さと、時間のうちでの覆い利きである。",
                zh:"2017 年由日本侍酒師協會創設，正值和食登錄 UNESCO 之後需求高漲之際。不限經驗與國籍，滿二十歲即可。第一階段是電腦測驗的選擇題，第二階段是論述與品飲。累計合格者在 2022 年 5 月達到 5,257 人；2021 年合格率為 44.4%——2,183 人中通過 970 人——五年平均接近 41%。這是比較難的那一個，而它難的方式與葡萄酒考試相同：記憶的廣度，加上限時的盲飲。" } }
            ] },
          { h:{ en:"WSET Award in Sake", ja:"WSET の酒の資格", zh:"WSET 的清酒資格" }, jp:"WSET",
            body:[
              { t:"p", text:{
                en:"The one written for readers of English, and the one a buyer abroad is most likely to hold. Levels 1 and 3 exist. Level 3 has two units — production and style in one, tasting method in the other, using WSET's own systematic approach — and is assessed by a closed-book paper of fifty multiple-choice questions plus short written answers, and a blind tasting of two sakes. The stated minimum is 42.25 hours of study of which 16 are taught. That is a precise and modest number, and it is worth holding next to the seven years on the other side of this page.",
                ja:"英語の読み手のために書かれたものであり、国外の買い手が最も持ちうるものである。一級と三級がある。三級は二つの単位を持つ——一方は造りと様式、他方は利きの方法であり、WSETの体系的な手順を用いる——そして評価は、択一五十問と短い記述からなる持ち込み不可の筆記と、二種の覆い利きによる。定められた最小は学習四二・二五時間、うち一六時間が講義である。それは精確で慎ましい数であり、この頁の反対側にある七年の隣に置いて眺めるに値する。",
                zh:"這一項是為英文讀者而寫的，也是海外採購者最可能持有的一張。設有 Level 1 與 Level 3。Level 3 有兩個單元——一個是釀造與風格，另一個是品飲方法，使用 WSET 自己的系統化品飲流程——評量方式為閉書筆試（50 題選擇題加簡答）與兩支清酒的盲飲。規定的最低學習時數為 42.25 小時，其中 16 小時為授課。那是一個精確而謙遜的數字，值得放在本頁另一側那個「七年」旁邊一起看。" } }
            ] }
        ] },
        { t:"figure",
          caption:{
            en:"The two halves of this page do not share a scale, and this figure is drawn to make that impossible to miss. On the left, the minimum time before you may sit the trade certificate, measured in years of work. On the right, the study time a tasting qualification prescribes, measured in hours. The bars are drawn on separate scales — printed on each side — because putting them on one would make the right-hand column invisible. Seven years of brewing is roughly fifteen thousand working hours.",
            ja:"この頁の二つの半分は尺度を共にしない。この図は、それを見落としえぬように描かれている。左は、技能の証を受けうるまでの最小の時であり、働いた年で測る。右は、利きの資格が定める学習の時であり、時間で測る。棒は別々の尺度で描かれ——それぞれの側に刷ってある——一つの尺度に載せれば右の列が見えなくなるからである。七年の造りは、おおよそ一万五千の労働時間にあたる。",
            zh:"本頁的兩個半邊並不共用同一個尺度，而這張圖就是為了讓這件事無法被忽略而畫的。左邊是在可以應考技能證明之前的最短時間，以工作年數計。右邊是品飲資格所規定的學習時間，以小時計。兩側的長條使用各自的尺度——各自標示在該側——因為若放在同一個尺度上，右邊那一欄會完全看不見。七年的釀造，大約是一萬五千個工作小時。" },
          svg: function (lang, L) {
            var W = 760, H = 300, MID = 380;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<line x1="' + MID + '" y1="40" x2="' + MID + '" y2="250" stroke="#E1DCD2"/>';
            /* headings */
            s += '<text x="26" y="34" font-size="10" letter-spacing=".16em" font-weight="600" fill="#8B857C">' +
                 (lang === "ja" ? "年で測るもの" : lang === "zh" ? "以年計的那一邊" : "MEASURED IN YEARS") + '</text>';
            s += '<text x="' + (MID + 26) + '" y="34" font-size="10" letter-spacing=".16em" font-weight="600" fill="#8B857C">' +
                 (lang === "ja" ? "時間で測るもの" : lang === "zh" ? "以小時計的那一邊" : "MEASURED IN HOURS") + '</text>';
            /* left: years, scale 0..8 over 200px starting at x=150 */
            var LX = 150, LW = 200, i;
            var left = [
              { jp:"酒造技能士 二級", v:2, n:{ en:"2 years of work", ja:"働いて二年", zh:"工作 2 年" } },
              { jp:"酒造技能士 一級", v:7, n:{ en:"7 years, or 2 after grade 2", ja:"七年、または二級ののち二年", zh:"7 年，或通過二級後 2 年" } },
              { jp:"日本酒学 修士", v:2, n:{ en:"2 years, from 2022", ja:"二年、二〇二二年から", zh:"2 年，2022 年起" } },
              { jp:"日本酒学 博士", v:3, n:{ en:"3 more, after the master's", ja:"修士ののち、さらに三年", zh:"碩士之後，再 3 年" } }
            ];
            for (i = 0; i < left.length; i++) {
              var y = 74 + i * 44;
              s += '<text x="' + (LX - 12) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + left[i].jp + '</text>';
              s += '<rect x="' + LX + '" y="' + (y - 8) + '" width="' + (left[i].v / 8 * LW) + '" height="14" fill="#DACFB8"/>';
              s += '<text x="' + (LX + 4) + '" y="' + (y + 22) + '" font-size="9" fill="#8B857C">' + L(left[i].n) + '</text>';
            }
            s += '<line x1="' + LX + '" y1="256" x2="' + (LX + LW) + '" y2="256" stroke="#CDC6B9"/>';
            for (i = 0; i <= 8; i += 2) {
              s += '<line x1="' + (LX + i / 8 * LW) + '" y1="256" x2="' + (LX + i / 8 * LW) + '" y2="261" stroke="#CDC6B9"/>';
              s += '<text x="' + (LX + i / 8 * LW) + '" y="274" text-anchor="middle" font-size="9.5" fill="#8B857C">' + i + '</text>';
            }
            s += '<text x="' + (LX + LW / 2) + '" y="290" text-anchor="middle" font-size="9.5" letter-spacing=".1em" fill="#ADA79E">' +
                 (lang === "ja" ? "年" : lang === "zh" ? "年" : "YEARS") + '</text>';
            /* right: hours, scale 0..60 over 150px starting at x=560 */
            var RX = 560, RW = 150;
            var right = [
              { jp:"WSET Level 3", v:42.25, n:{ en:"42.25 h, 16 taught", ja:"四二・二五時間", zh:"42.25 小時" } },
              { jp:"WSET Level 1", v:6, n:{ en:"a single day", ja:"一日ほど", zh:"約一天" }, soft:true },
              { jp:"唎酒師", v:14, n:{ en:"a course of days", ja:"数日の講座", zh:"數日的課程" }, soft:true },
              { jp:"SAKE DIPLOMA", v:0, n:{ en:"self-study, unbounded", ja:"独学・定めなし", zh:"自修，無上限" }, soft:true }
            ];
            for (i = 0; i < right.length; i++) {
              var ry = 74 + i * 44;
              s += '<text x="' + (RX - 12) + '" y="' + (ry + 4) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + right[i].jp + '</text>';
              if (right[i].v > 0)
                s += '<rect x="' + RX + '" y="' + (ry - 8) + '" width="' + (right[i].v / 60 * RW) + '" height="14" fill="' +
                     (right[i].soft ? "#EDE9E0" : "#DACFB8") + '" stroke="' + (right[i].soft ? "#DED8CB" : "none") + '"/>';
              s += '<text x="' + (RX + 4) + '" y="' + (ry + 22) + '" font-size="9" fill="#8B857C">' + L(right[i].n) + '</text>';
            }
            s += '<line x1="' + RX + '" y1="256" x2="' + (RX + RW) + '" y2="256" stroke="#CDC6B9"/>';
            var hv = [0, 20, 40, 60];
            for (i = 0; i < hv.length; i++) {
              s += '<line x1="' + (RX + hv[i] / 60 * RW) + '" y1="256" x2="' + (RX + hv[i] / 60 * RW) + '" y2="261" stroke="#CDC6B9"/>';
              s += '<text x="' + (RX + hv[i] / 60 * RW) + '" y="274" text-anchor="middle" font-size="9.5" fill="#8B857C">' + hv[i] + '</text>';
            }
            s += '<text x="' + (RX + RW / 2) + '" y="290" text-anchor="middle" font-size="9.5" letter-spacing=".1em" fill="#ADA79E">' +
                 (lang === "ja" ? "時間" : lang === "zh" ? "小時" : "HOURS") + '</text>';
            s += '<text x="' + (MID + 26) + '" y="250" font-size="9" fill="#ADA79E">' +
                 (lang === "ja" ? "淡い棒は目安であり、定められた数ではない。" : lang === "zh" ? "淺色長條為概估，並非規定的時數。" : "Pale bars are estimates, not prescribed figures.") + '</text>';
            s += '</svg>';
            return s;
          } }
      ] },

    { t:"section", id:"studying",
      title:{ en:"Learning to study it", ja:"研究することを学ぶ", zh:"學習研究它" }, jp:"日本酒学",
      body:[
        { t:"p", text:{
          en:"The newest of the three routes is also the one that makes the other two legible, because it is the first attempt to treat sake as a field rather than as a trade with a hobby attached. In May 2017 Niigata Prefecture, the Niigata prefectural brewers' association and Niigata University signed an agreement; the university opened a Sake Research Centre in April 2018 and made it a university-wide body in January 2020.",
          ja:"三つの道のうち最も新しいものは、他の二つを読めるようにするものでもある。日本酒を、趣味の付いた稼業としてではなく、一つの学問領域として扱おうとする初めての試みだからである。二〇一七年五月、新潟県と新潟県酒造組合と新潟大学が協定を結び、大学は二〇一八年四月に日本酒学センターを開き、二〇二〇年一月にこれを全学の組織とした。",
          zh:"三條路線中最新的一條，同時也是讓另外兩條變得可讀的那一條——因為它是第一次嘗試把清酒當成一個學術領域，而不是一門附帶著興趣的行業。2017 年 5 月，新潟縣、新潟縣酒造組合與新潟大學簽署協定；大學於 2018 年 4 月成立日本酒學中心，並於 2020 年 1 月將其升格為全校性組織。" } },
        { t:"steps", items:[
          { n:"1", title:{ en:"A subject with three units", ja:"三つの部門を持つ学", zh:"含三個部門的學問" },
            body:[ { t:"p", text:{
              en:"The centre divides the field into brewing, society and culture, and health — which is, in effect, an argument that the interesting questions about sake are not all chemical. That division is unusual and it is the reason the subject can hold an economist and a microbiologist in the same seminar.",
              ja:"センターはこの領域を、醸造、社会・文化、健康に分ける。それは実のところ、日本酒についての面白い問いのすべてが化学のものではない、という主張である。この分け方は珍しく、そしてこの学が経済学者と微生物学者を同じ演習に収めうる理由である。",
              zh:"中心把這個領域分成釀造、社會與文化、健康三個部門——這實際上是一個主張：關於清酒的有趣問題，並不全是化學問題。這種劃分方式並不常見，也正是這門學問能讓一位經濟學者與一位微生物學者坐進同一堂研討課的原因。" } } ] },
          { n:"2", title:{ en:"A brewing licence for research", ja:"研究のための製造免許", zh:"為研究而取得的製造執照" },
            body:[ { t:"p", text:{
              en:"In April 2021 the university obtained a sake manufacturing licence — a genuinely significant step in a country where licences are effectively closed, and one that turns the centre from a place that reads about brewing into a place that can run an experiment and taste the result.",
              ja:"二〇二一年四月、大学は清酒の製造免許を得た。免許が事実上閉じられた国において、これは真に大きな一歩であり、センターを、造りについて読む場所から、実験を回してその結果を味わえる場所へ変えるものである。",
              zh:"2021 年 4 月，這所大學取得了清酒製造執照——在一個執照實質上早已關閉的國家，這是真正重要的一步，它把中心從一個「閱讀釀造」的地方，變成一個能實際跑實驗並品嚐結果的地方。" } } ] },
          { n:"3", title:{ en:"Degrees, and then abroad", ja:"学位、そして国の外へ", zh:"學位，然後走向國外" },
            body:[ { t:"p", text:{
              en:"Undergraduate lectures opened in 2018, a master's track in April 2022 and a doctoral track in April 2023. Exchange agreements followed with Bordeaux in 2019 and UC Davis in May 2020 — which is to say, with the two universities that did this for wine first. The centre describes the subject as the world's first academic field of its kind, which is its own claim and a fair one to record as such.",
              ja:"学部の講義は二〇一八年に開かれ、修士の課程は二〇二二年四月、博士の課程は二〇二三年四月に始まった。交流の協定はボルドーと二〇一九年に、カリフォルニア大学デービス校と二〇二〇年五月に結ばれた。すなわち、葡萄酒について先にこれを行った二つの大学とである。センターはこの学を、その種のものとして世界で初めての学問領域であると述べる。それはセンター自身の主張であり、そのようなものとして記すのが公正である。",
              zh:"大學部講座於 2018 年開課，碩士班於 2022 年 4 月、博士班於 2023 年 4 月開設。交流協定隨後與波爾多（2019 年）及加州大學戴維斯分校（2020 年 5 月）簽訂——也就是說，與那兩所率先為葡萄酒做了同樣事情的大學。中心自述這門學問是世界上第一個同類型的學術領域；那是中心自己的主張，而如實記為「其主張」是公允的。" } } ] }
        ] }
      ] },

    { t:"section", id:"without",
      title:{ en:"Getting good without any of it", ja:"どれも持たずに上達する", zh:"不靠這些也能變好" }, jp:"独学",
      body:[
        { t:"p", text:{
          en:"None of the above is necessary and most good drinkers hold none of it. What the qualifications actually supply is structure and comparison — a syllabus so you do not just drink what you already like, and a room full of samples so you can taste against something. Both can be arranged privately, at less cost, if you are willing to be systematic.",
          ja:"上のいずれも必要ではなく、良い飲み手のほとんどはそのいずれも持たない。資格が実際に与えるのは、筋道と比較である。すでに好きなものばかりを飲まずに済むための課程と、何かに対して味わうための見本の並んだ部屋。いずれも、系統立てる気があるならば、より安く、自ら整えうる。",
          zh:"以上沒有任何一項是必要的，而大多數好的飲者一項也沒有。這些資格真正提供的是結構與比較——一份課程表，讓你不會只喝自己已經喜歡的東西；以及一個擺滿樣品的房間，讓你有東西可以對照著品。只要你願意有系統一點，這兩者都能自己私下、以更低的成本安排出來。" } },
        { t:"ol", items:[
          { en: "<strong>Never taste one bottle alone.</strong> Two bottles that differ in exactly one variable — same brewery, same rice, different polish; or same sake, two temperatures — teach more in an evening than six unrelated bottles teach in a month.",
            ja: "<strong>一本だけで味わわぬこと。</strong>ちょうど一つの変数だけが異なる二本——同じ蔵、同じ米、異なる精米歩合。あるいは同じ酒の二つの温度——は、関わりのない六本が一月かけて教えるより多くを、一夕で教える。",
            zh: "<strong>絕不要單獨品一支酒。</strong>只有一個變數不同的兩支酒——同一家酒藏、同一種米、不同精米步合；或同一支酒的兩個溫度——一個晚上所教的，比六支互不相干的酒花一個月教的還多。" },
          { en: "<strong>Write before you look.</strong> Decide what you think, in writing, and only then read the analysis sheet and the label. Doing it the other way round teaches you to read, not to taste, and the habit is very hard to undo.",
            ja: "<strong>見る前に書くこと。</strong>まず自らの思うところを書きつけ、そののちに分析表と札を読む。逆にすれば、味わうことではなく読むことを学んでしまい、その癖はきわめて解きにくい。",
            zh: "<strong>先寫下來，再去看。</strong>先把你的想法寫下來，然後才去讀分析表與酒標。倒過來做，你學會的是閱讀而不是品飲，而且這個習慣極難改掉。" },
          { en: "<strong>Keep the faults in reach.</strong> A sake that has gone wrong teaches faster than four that are fine. Leave a cheap bottle open on a warm shelf for a fortnight and smell it every few days; you will recognise the same note in a restaurant for the rest of your life.",
            ja: "<strong>欠点を手の届くところに置くこと。</strong>損なわれた酒は、無事な四本より速く教える。安い一本を温かい棚に半月開けたまま置き、数日ごとに嗅ぐ。その香りを、あなたは生涯、店で嗅ぎ分けられる。",
            zh: "<strong>把缺陷留在手邊。</strong>一支壞掉的酒，教得比四支正常的還快。把一支便宜的酒開著放在溫暖的架子上兩週，每隔幾天聞一次；此後你一輩子都能在餐廳裡認出同樣那個氣味。" },
          { en: "<strong>Go in winter.</strong> One morning inside a working kura in January does more for your understanding of the process pages than any amount of reading, because the cold, the smell and the noise are the argument. See <a href=\"visiting.html\">Visiting &amp; Buying</a>.",
            ja: "<strong>冬に行くこと。</strong>一月の働く蔵のなかの一朝は、いかほどの読書よりも、工程の頁の理解を進める。寒さと匂いと音こそが、その論だからである。<a href=\"visiting.html\">蔵を訪ねる</a>を見られたい。",
            zh: "<strong>冬天去一趟。</strong>一月裡在一間運作中的酒藏待一個早上，對你理解製程各頁的幫助，勝過任何份量的閱讀——因為那個冷、那個氣味、那個聲響，本身就是論證。請見<a href=\"visiting.html\">拜訪與採買</a>。" },
          { en: "<strong>Give yourself a syllabus.</strong> Twelve bottles chosen to vary one thing at a time will take you further than three years of drinking whatever was recommended. There is one on this site: <a href=\"curriculum.html\">Twelve Bottles</a>.",
            ja: "<strong>自らに課程を課すこと。</strong>一度に一つだけを変えるように選んだ十二本は、勧められるままに飲む三年よりも遠くへ連れてゆく。この site にも一つある——<a href=\"curriculum.html\">十二本</a>。",
            zh: "<strong>給自己一份課程表。</strong>一次只改變一件事而選出的十二支酒，能把你帶到比「三年來別人推薦什麼就喝什麼」更遠的地方。本站就有一份：<a href=\"curriculum.html\">十二瓶</a>。" }
        ] },
        { t:"note", title:{ en:"What a certificate is for", ja:"証は何のためか", zh:"證書是為了什麼" },
          text:{
            en:"It is worth being clear-eyed. A tasting qualification is chiefly a credential — a way of telling an employer, an importer or a customer that you have been through a known syllabus. That is a real and legitimate use, and it is why almost everyone who holds one works in the trade. If you are not in the trade, the syllabus is the valuable part, and the syllabus is not the thing you have to pay for.",
            ja:"はっきり見ておくに値する。利きの資格は主として証である。雇う者、輸入する者、あるいは客に、知られた課程を通ってきたと告げる手立てである。それは実の、正当な用いられ方であり、持つ者のほとんどが業界にある理由である。業界にないのであれば、値打ちのあるのは課程のほうであり、そして課程は、代を払わねばならぬものではない。",
            zh:"值得把話說清楚。品飲資格主要是一張憑證——一種告訴雇主、進口商或客人「你走過一套已知課程」的方式。那是真實而正當的用途，也是為什麼幾乎每一位持有者都在業界工作。如果你不在業界，有價值的是那套課程，而那套課程並不是你非付錢不可的東西。" } }
      ] },

    { t:"related", items:[
      { href:"curriculum.html", why:{ en:"A syllabus of twelve bottles, free and self-administered.", ja:"十二本の課程。無料で、自ら課すもの。", zh:"一份十二瓶的課程表，免費而且自己執行。" } },
      { href:"tasting.html", why:{ en:"The method these qualifications are teaching.", ja:"これらの資格が教えている方法。", zh:"這些資格所教的那套方法。" } },
      { href:"toji.html", why:{ en:"The people the trade certificate describes.", ja:"技能の証が述べる人々。", zh:"技能證明所描述的那些人。" } },
      { href:"competitions.html", why:{ en:"Where trained palates are put to work in public.", ja:"訓練された舌が公に働く場所。", zh:"受過訓練的味覺在公開場合派上用場的地方。" } },
      { href:"sources.html", why:{ en:"What to read, once you want the primary material.", ja:"一次の資料が欲しくなったときに読むもの。", zh:"當你想要一手材料時該讀什麼。" } }
    ] }
  ]
};


/* ---- ------------------------------------------ chronology */
SAKE.pages["chronology"] = {
  kicker: { en: "Reference · 05", ja: "資料 · 05", zh: "資料 · 05" },
  title:  { en: "The Whole Chronology", ja: "総年表", zh: "總年表" },
  jp: "年表",
  lede: {
    en: "Every dated fact on this site, in one column. The chapters elsewhere follow a subject — rice, law, a region, a technique — and a reader who wants to know what was happening at the same time in the other chapters has to hold several threads at once. This page unpicks them and lays them end to end. The small label beside each year says which thread it belongs to: technique, law and tax, culture, or place. Where a line is compressed here, the page it came from has the argument.",
    ja: "この場にあるすべての日付ある事柄を、一本の列に。他所の章は主題を追う——米、法、ある地、ある技——ゆえに、他の章において同じ時に何が起きていたかを知ろうとする読み手は、幾筋もの糸を同時に握らねばならない。この頁はそれらをほどき、端から端へ並べる。それぞれの年のかたわらの小さな札は、それがいずれの筋に属するかを述べる。技、法と税、文、あるいは地である。ここで縮められた一行については、それが来た頁に論がある。",
    zh: "本站所有帶日期的事實，收在同一欄裡。其他章節各自追隨一個主題——米、法律、某個地區、某項技術——因此想知道「同一時間其他章節裡在發生什麼」的讀者，必須同時抓住好幾條線。本頁把它們拆開，首尾相接地排好。每個年份旁的小標籤說明它屬於哪一條線：技術、法與稅、文化，或地方。凡在此被壓縮的一行，其出處頁面都有完整的論述。"
  },
  body: [

    { t:"section", id:"ancient",
      title:{ en:"Antiquity — to 1185", ja:"古代——一一八五年まで", zh:"上古——至一一八五年" }, jp:"古代",
      body:[
        { t:"figure",
          caption:{
            en:"What this chronology is made of, counted. Each column is a period, each block is one entry below, and the colour is the kind of thing that happened. Two shapes are worth noticing. Technique peaks in Meiji and then all but disappears — not because brewing stopped improving but because the improvements after 1970 are refinements of methods already listed. Law does the opposite: it is a thin line until the 1970s and then becomes the largest single category, which is the honest signature of a drink now governed by labelling standards, tax classes and geographical indications rather than by discoveries. This is a portrait of the record, not of history: it counts what a chronology chose to write down.",
            ja:"この年表が何でできているかを、数えたもの。各列は時代であり、各区画は下の一項目であり、色は起きた事柄の種である。注意に値する形が二つある。技術は明治に頂を持ち、そののちほとんど消える——造りが良くなるのをやめたからではなく、一九七〇年以後の改良が、すでに挙げた方法の細部だからである。法はその逆をゆく。一九七〇年代までは細い線であり、そののち最も大きな単一の類となる。発見ではなく、表示の基準と、税の区分と、地理的表示によって治められる飲みものの、正直な署名である。これは歴史の肖像ではなく、記録の肖像である。年表が書き留めることを選んだものを数えている。",
            zh:"這份年表由什麼構成——數出來看。每一欄是一個時代，每一格是下方的一個條目，顏色則代表發生的事情屬於哪一類。有兩個形狀值得注意。「技術」在明治達到高峰，此後幾乎消失——不是因為釀造停止進步，而是因為一九七〇年以後的改良，都是已列出方法的細部修正。「法規」則恰恰相反：直到一九七〇年代都只是一條細線，此後成為最大的單一類別；這正是一種飲品如今由標示基準、稅制分類與地理標示、而非由發現所治理的誠實印記。這是記錄的肖像，不是歷史的肖像：它數的是一份年表選擇寫下來的東西。" },
          svg: function (lang, L) {
            var W = 760, H = 338, X0 = 120, COLW = 78, BARW = 58, Y0 = 62, Y1 = 268, YMAX = 16;
            function py(v) { return Y1 - v / YMAX * (Y1 - Y0); }
            var cats = [
              { k:"tech", f:"#C0AF8E", n:{ en:"technique", ja:"技術", zh:"技術" } },
              { k:"law",  f:"#8B9BA6", n:{ en:"law and tax", ja:"法と税", zh:"法規與稅" } },
              { k:"cult", f:"#CBB3AC", n:{ en:"culture", ja:"文化", zh:"文化" } },
              { k:"place", f:"#9FB0A6", n:{ en:"place", ja:"地", zh:"地方" } }
            ];
            var cols = [
              { v:{ tech:5, law:5, cult:3, place:2 }, a:{ en:"to 1600", ja:"〜一六〇〇", zh:"至一六〇〇" }, b:{ en:"antiquity & medieval", ja:"古代・中世", zh:"古代與中世" } },
              { v:{ tech:3, law:0, cult:1, place:3 }, a:"1600–1868", b:{ en:"Edo", ja:"江戸", zh:"江戶" } },
              { v:{ tech:7, law:2, cult:2, place:1 }, a:"1868–1912", b:{ en:"Meiji", ja:"明治", zh:"明治" } },
              { v:{ tech:4, law:3, cult:0, place:2 }, a:"1912–1945", b:{ en:"Taishō & war", ja:"大正・戦時", zh:"大正與戰時" } },
              { v:{ tech:4, law:0, cult:1, place:2 }, a:"1945–1970", b:{ en:"postwar", ja:"戦後", zh:"戰後" } },
              { v:{ tech:0, law:3, cult:3, place:3 }, a:"1970–1990", b:{ en:"late Shōwa", ja:"昭和後期", zh:"昭和後期" } },
              { v:{ tech:1, law:7, cult:0, place:1 }, a:"1990–2010", b:{ en:"Heisei", ja:"平成", zh:"平成" } },
              { v:{ tech:0, law:6, cult:2, place:2 }, a:{ en:"2010 –", ja:"二〇一〇〜", zh:"二〇一〇起" }, b:{ en:"now", ja:"現在", zh:"當代" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var kx = 30, i, j;
            for (i = 0; i < cats.length; i++) {
              var lab = L(cats[i].n);
              s += '<rect x="' + kx + '" y="18" width="12" height="12" fill="' + cats[i].f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (kx + 18) + '" y="28" font-size="9.5" fill="#8B857C">' + lab + '</text>';
              kx += 18 + lab.length * (lab.charCodeAt(0) > 0x2E80 ? 9.5 : 5.2) + 24;
            }
            var g;
            for (g = 0; g <= YMAX; g += 4) {
              s += '<line x1="' + (X0 - 20) + '" y1="' + py(g) + '" x2="740" y2="' + py(g) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + (X0 - 28) + '" y="' + (py(g) + 3.5) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            s += '<line x1="' + (X0 - 20) + '" y1="' + Y1 + '" x2="740" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            for (i = 0; i < cols.length; i++) {
              var c = cols[i], cx = X0 + i * COLW + BARW / 2, acc = 0, tot = 0;
              for (j = 0; j < cats.length; j++) tot += c.v[cats[j].k];
              for (j = 0; j < cats.length; j++) {
                var v = c.v[cats[j].k];
                if (!v) continue;
                var h = v / YMAX * (Y1 - Y0);
                s += '<rect x="' + (cx - BARW / 2) + '" y="' + (py(acc + v)).toFixed(1) + '" width="' + BARW + '" height="' + h.toFixed(1) +
                     '" fill="' + cats[j].f + '" stroke="#F5F3ED"/>';
                if (v >= 2) s += '<text x="' + cx + '" y="' + (py(acc + v / 2) + 3.5).toFixed(1) + '" text-anchor="middle" font-size="9.5" fill="#55504A">' + v + '</text>';
                acc += v;
              }
              s += '<text x="' + cx + '" y="' + (py(tot) - 8).toFixed(1) + '" text-anchor="middle" font-size="11" fill="#201E1B">' + tot + '</text>';
              s += '<text x="' + cx + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="10" fill="#201E1B">' + L(c.a) + '</text>';
              s += '<text x="' + cx + '" y="' + (Y1 + 31) + '" text-anchor="middle" font-size="9" fill="#8B857C">' + L(c.b) + '</text>';
            }
            s += '<text x="' + (X0 - 20) + '" y="' + (Y0 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "この頁の項目数・全七十八" : lang === "zh" ? "本頁條目數・共七十八" : "ENTRIES ON THIS PAGE — SEVENTY-EIGHT IN ALL") + '</text>';
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "期間の幅は等しくない。列の高さは出来事の多さではなく、この年表が数え上げた項目の多さである。"
                  : lang === "zh" ? "各時段長度並不相等。欄的高度代表的不是事件的多寡，而是這份年表所收錄的條目數。"
                  : "The periods are not of equal length. A column's height is how many entries this chronology lists, not how much happened.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"timeline", items:[
          { year:{ en:"c. 300 BCE", ja:"紀元前三〇〇年ごろ", zh:"約西元前三〇〇年" }, era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"弥生",
            title:{ en:"Wet rice reaches the archipelago", ja:"水稲、列島に至る", zh:"水稻抵達列島" },
            text:{ en:"Paddy cultivation arrives from the continent. Everything on this page depends on it.", ja:"大陸より水田の耕作が渡る。この頁のすべてはそれに依る。", zh:"水田耕作自大陸傳入。本頁的一切都以此為前提。" } },
          { year:"689", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"飛鳥",
            title:{ en:"The Bureau of Sake", ja:"造酒司の設置", zh:"造酒司設立" },
            text:{ en:"The court establishes a dedicated brewing office — the state takes charge of sake before it taxes it.", ja:"朝廷が造酒司を置く。国は酒に課すより先に、それを司る。", zh:"朝廷設立專責釀酒的官署——國家先掌管清酒，之後才課它的稅。" } },
          { year:{ en:"c. 712–720", ja:"七一二〜七二〇年ごろ", zh:"約七一二～七二〇年" }, era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"奈良",
            title:{ en:"Sake enters mythology", ja:"酒、神話に入る", zh:"酒進入神話" },
            text:{ en:"The Kojiki and Nihon Shoki record the eight-times-brewed sake used to intoxicate the serpent Yamata-no-Orochi.", ja:"古事記と日本書紀が、八岐大蛇を酔わせるために用いられた八塩折之酒を記す。", zh:"《古事記》與《日本書紀》記載了用來灌醉八岐大蛇的「八鹽折之酒」。" } },
          { year:{ en:"c. 713", ja:"七一三年ごろ", zh:"約七一三年" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"奈良",
            title:{ en:"Chewed sake recorded", ja:"口噛みの酒の記録", zh:"口嚼酒的記載" },
            text:{ en:"The Ōsumi gazetteer describes rice chewed and spat into a vessel to ferment — saliva as the saccharifying agent.", ja:"大隅国風土記が、器に噛み入れられて醗酵する米を述べる。唾を糖化の手として。", zh:"《大隅國風土記》描述把米嚼過吐入器中發酵——以唾液作為糖化的媒介。" } },
          { year:{ en:"c. 715", ja:"七一五年ごろ", zh:"約七一五年" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"奈良",
            title:{ en:"The first mould", ja:"最初の黴", zh:"最早的黴" },
            text:{ en:"The Harima gazetteer records sake made from rice that had grown mould — the first written trace of kōji brewing.", ja:"播磨国風土記が、黴の生えた米から造られた酒を記す。麹による造りの、書かれた最初の痕である。", zh:"《播磨國風土記》記載以長了黴的米所釀的酒——這是麴釀造最早的文字痕跡。" } },
          { year:"927", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平安",
            title:{ en:"Engishiki codifies brewing", ja:"延喜式が造りを定める", zh:"《延喜式》規範釀造" },
            text:{ en:"The court's administrative code sets out recipes, quantities and staffing for the imperial brewery — the oldest detailed brewing manual in Japan.", ja:"朝廷の式が、宮中の造りの配合と量と人手を定める。日本における最も古い詳細な造りの書である。", zh:"朝廷的行政法典訂出宮中釀造的配方、數量與人力配置——日本最古老的詳細釀造手冊。" } },
          { year:{ en:"c. 1000", ja:"一〇〇〇年ごろ", zh:"約一〇〇〇年" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"平安",
            title:{ en:"Clarified sake", ja:"澄んだ酒", zh:"澄清的酒" },
            text:{ en:"Straining and settling produce a clear liquid; sumizake begins to separate from the cloudy everyday drink.", ja:"漉しと澱下げが澄んだ液を生む。清酒が濁った日々の飲みものから分かれはじめる。", zh:"過濾與澄清產生出清澈的液體；清酒開始與日常的濁飲分道揚鑣。" } }
        ] }
      ] },

    { t:"section", id:"medieval",
      title:{ en:"The medieval centuries — 1185 to 1600", ja:"中世——一一八五年から一六〇〇年", zh:"中世——一一八五至一六〇〇年" }, jp:"中世",
      body:[
        { t:"timeline", items:[
          { year:"1252", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"鎌倉",
            title:{ en:"Prohibition, and a census of jars", ja:"禁令、そして壺の数え", zh:"禁令，以及一次酒甕普查" },
            text:{ en:"The shogunate bans sale and orders sake jars destroyed — and in counting them leaves the first survey of how much brewing Kamakura actually did.", ja:"幕府が売りを禁じ、酒壺を壊すよう命ずる。そしてそれを数えることで、鎌倉が実際にどれほど醸していたかの最初の調べを残す。", zh:"幕府禁止販售並下令搗毀酒甕——而在清點的過程中，留下了鎌倉實際釀了多少酒的第一份調查。" } },
          { year:{ en:"c. 1400s", ja:"一四〇〇年代", zh:"一四〇〇年代" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"室町",
            title:{ en:"Bodaimoto at Shōryakuji", ja:"正暦寺の菩提酛", zh:"正曆寺的菩提酛" },
            text:{ en:"Temple brewers at Shōryakuji in Nara work out a souring starter that protects the mash — the ancestor of every later starter method.", ja:"奈良の正暦寺の僧の造り手が、醪を守る酸の酒母を編み出す。のちのあらゆる酒母の型の祖である。", zh:"奈良正曆寺的僧侶釀造者摸索出一種能保護醪的酸性酒母——日後所有酒母工法的祖先。" } },
          { year:"1419", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"室町",
            title:{ en:"A kōji monopoly is granted", ja:"麹の座が許される", zh:"麴的專賣權獲頒" },
            text:{ en:"The Kitano shrine guild in Kyoto is given exclusive rights to make and sell kōji — control of the mould is control of the industry.", ja:"京の北野の座が、麹を造り売る独占の権を与えられる。黴を制することは、産を制することである。", zh:"京都北野的座獲頒製造與販售麴的獨佔權——控制了黴，就控制了整個產業。" } },
          { year:"1444", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"室町",
            title:{ en:"The kōji riot", ja:"文安の麹騒動", zh:"文安麴騷動" },
            text:{ en:"Brewers who wanted to make their own kōji fight the monopoly; the guild is broken, and brewing and kōji-making are joined in one trade thereafter.", ja:"自ら麹を造ろうとする造り手が座と争う。座は破れ、以後、造りと麹造りは一つの生業に結ばれる。", zh:"想自行製麴的釀造者與座對抗；座被打破，此後釀造與製麴合為同一門行業。" } },
          { year:"1478–1618", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"室町・桃山",
            title:{ en:"The Tamon-in Diary", ja:"多聞院日記", zh:"《多聞院日記》" },
            text:{ en:"A hundred and forty years of temple diaries record brewing in enough detail to reconstruct it — including pasteurisation, centuries before Pasteur.", ja:"百四十年にわたる寺の日記が、再び組み立てうるほどの精しさで造りを記す。パストゥールに幾世紀も先立つ火入れを含めて。", zh:"長達一百四十年的寺院日記，以足以重建的細節記錄了釀造——包括早於巴斯德數個世紀的火入。" } },
          { year:{ en:"1560s", ja:"一五六〇年代", zh:"一五六〇年代" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"戦国",
            title:{ en:"Three techniques converge", ja:"三つの技が集まる", zh:"三項技術匯聚" },
            text:{ en:"Three-stage mashing, heat treatment and the use of polished rice for both kōji and mash come together, and recognisably modern sake exists.", ja:"三段の仕込み、火の処理、そして麹にも掛にも精げた米を用いること。三つが合わさり、今日それと分かる形の酒が存在する。", zh:"三段仕込、加熱處理，以及麴米與掛米皆使用精白米——三者結合，可辨認為現代形態的清酒於焉存在。" } },
          { year:{ en:"1580s", ja:"一五八〇年代", zh:"一五八〇年代" }, era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"桃山",
            title:{ en:"The temples fall", ja:"寺が倒れる", zh:"寺院倒下" },
            text:{ en:"Warfare and the suppression of temple power end monastic brewing's dominance; the craft passes to merchant towns.", ja:"戦と寺の力の抑えが、僧坊の造りの優位を終わらせる。技は商いの町へ渡る。", zh:"戰亂與對寺院勢力的壓制，終結了僧坊釀造的主導地位；這門技藝轉入商人城鎮。" } },
          { year:"1596", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"慶長",
            title:{ en:"Drinking at the shop", ja:"店で飲むこと", zh:"在店裡喝" },
            text:{ en:"Toshimaya at Kamakura-gashi in Kanda is founded, by tradition — a liquor shop that let customers drink standing, and the seed of the izakaya.", ja:"伝えによれば、神田鎌倉河岸の豊島屋が創業する。客に立って飲ませた酒屋であり、居酒屋の種である。", zh:"依傳統說法，神田鎌倉河岸的豐島屋創業——一家讓客人站著喝的酒鋪，也是居酒屋的種子。" } }
        ] }
      ] },

    { t:"section", id:"edo",
      title:{ en:"Edo — 1600 to 1868", ja:"江戸——一六〇〇年から一八六八年", zh:"江戶——一六〇〇至一八六八年" }, jp:"近世",
      body:[
        { t:"timeline", items:[
          { year:{ en:"1600s", ja:"一六〇〇年代", zh:"一六〇〇年代" }, era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"江戸前期",
            title:{ en:"Itami, Ikeda and the sake that went down", ja:"伊丹・池田と下り酒", zh:"伊丹、池田與「下り酒」" },
            text:{ en:"The Kinki brewing towns supply Edo by sea; kudari-zake — sake that came down from the capital region — becomes the standard of quality.", ja:"近畿の造りの町が海路で江戸を賄う。下り酒——上方より下ってきた酒——が質の基準となる。", zh:"近畿的釀造城鎮循海路供應江戶；「下り酒」——從上方運下來的酒——成為品質的標準。" } },
          { year:"1673–1680s", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"延宝〜貞享",
            title:{ en:"Cold brewing becomes the rule", ja:"寒造りが定めとなる", zh:"寒造成為常規" },
            text:{ en:"Brewing is restricted to the cold months, first by regulation and then by preference; the seasonal brewing year begins.", ja:"造りは寒の月に限られる。初めは定めにより、次いで選びにより。季節の造りの一年が始まる。", zh:"釀造被限制在寒冷月份，起初出於規定，其後出於偏好；季節性的釀造之年就此開始。" } },
          { year:"1697", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"元禄",
            title:{ en:"Aged sake in the record", ja:"熟成酒の記録", zh:"熟成酒的記載" },
            text:{ en:"Honchō Shokkan describes sake kept for years and valued for it — evidence that koshu is old, not a modern invention.", ja:"本朝食鑑が、年を経て貯えられ、そのゆえに尊ばれる酒を述べる。古酒が近代の発明ではなく古いものであることの証しである。", zh:"《本朝食鑑》描述存放多年並因此受重視的酒——證明古酒是古老之物，而非現代發明。" } },
          { year:{ en:"1700s", ja:"一七〇〇年代", zh:"一七〇〇年代" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"江戸中期",
            title:{ en:"Water-wheel milling, and the rise of Nada", ja:"水車精米と灘の興り", zh:"水車精米與灘的興起" },
            text:{ en:"River-driven mills polish rice far beyond what a foot-treadle could, and Nada's combination of water, wind, rice and a port takes the trade.", ja:"川に駆られる水車が、足踏みの及ばぬ深さまで米を磨く。そして水と風と米と港を併せもつ灘が商いを取る。", zh:"由河水驅動的水車把米磨到腳踏臼遠不能及的程度，而兼具水、風、米與港口的灘，奪下了這門生意。" } },
          { year:{ en:"1800s", ja:"一八〇〇年代", zh:"一八〇〇年代" }, era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"江戸後期",
            title:{ en:"Kimoto reaches its classical form", ja:"生酛が古典の形に至る", zh:"生酛達到其古典形態" },
            text:{ en:"The pole-mashing starter is standardised into the method still taught today, and its labour becomes the defining discipline of the brewing crew.", ja:"櫂で摺る酒母が、今なお教えられる型へ定まる。そしてその労が、蔵人の規律を定めるものとなる。", zh:"以櫂搗磨的酒母被標準化成今日仍在傳授的工法，而它的勞動也成為藏人紀律的定義。" } },
          { year:"1837/1840", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"天保",
            title:{ en:"Miyamizu is identified", ja:"宮水の発見", zh:"宮水的發現" },
            text:{ en:"A Nada brewer works out that the difference between two of his breweries is the water, not the crew — the first deliberate identification of a brewing water source.", ja:"灘の造り手が、自らの二つの蔵の差は人ではなく水であると突き止める。造りの水の源を意図して特定した最初である。", zh:"一位灘的釀造者弄清楚了自己兩家酒藏之間的差異在於水而非人手——這是首次刻意指認出一處釀造水源。" } },
          { year:"1859", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"安政",
            title:{ en:"Omachi found in a field", ja:"雄町、田に見出される", zh:"雄町在田間被發現" },
            text:{ en:"A farmer in Okayama notices two unusual ears of rice and saves the seed; the oldest brewing variety still in commercial use begins.", ja:"岡山の農が、二本の異なる穂に気づき種を残す。今なお商いに用いられる最も古い酒米の品種が始まる。", zh:"岡山的一位農民注意到兩支不尋常的稻穗並留了種；至今仍在商業使用的最古老酒米品種就此開始。" } }
        ] }
      ] },

{ t:"section", id:"meiji",
      title:{ en:"Meiji to the war — 1868 to 1945", ja:"明治から戦へ——一八六八年から一九四五年", zh:"明治到戰爭——一八六八至一九四五年" }, jp:"近代",
      body:[
        { t:"timeline", items:[
          { year:"1871", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"明治四年",
            title:{ en:"Brewing is deregulated, then taxed", ja:"造りが解かれ、そして課される", zh:"釀造先鬆綁，然後被課稅" },
            text:{ en:"The old licensing restrictions are lifted and thousands of new breweries open; within a few years the tax follows, and the number begins to fall again.", ja:"古い免許の縛りが解かれ、幾千の新しい蔵が開く。数年のうちに税が続き、その数はふたたび減りはじめる。", zh:"舊有的許可限制被解除，數千家新酒藏開業；沒過幾年稅就跟上，數量又開始下降。" } },
          { year:"1873", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"明治六年",
            title:{ en:"Sake at the Vienna Exposition", ja:"ウィーン万博の酒", zh:"維也納世博上的清酒" },
            text:{ en:"Japan exhibits sake at a world's fair for the first time — the beginning of the export story, a century and a half before it became a business.", ja:"日本が万国博覧会に初めて酒を出す。それが商いとなる一世紀半前の、輸出の物語の始まりである。", zh:"日本首次在世界博覽會上展出清酒——出口故事的開端，比它成為一門生意早了一個半世紀。" } },
          { year:"1876–79", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治九〜十二年",
            title:{ en:"Salicylic acid enters the brewery", ja:"サリチル酸が蔵に入る", zh:"水楊酸進入酒藏" },
            text:{ en:"A chemical preservative is adopted against spoilage and spreads through the industry within a generation. It works, and it takes almost a century to remove.", ja:"腐りに抗する化学の防腐剤が採られ、一世代のうちに業界へ広まる。それは効き、そして取り除くのに一世紀近くを要する。", zh:"為對抗腐敗而採用的化學防腐劑，在一個世代之內遍及全業。它有效，而移除它花了將近一個世紀。" } },
          { year:"1874", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"明治七年",
            title:{ en:"The first sake label", ja:"最初の酒票", zh:"最早的酒票" },
            text:{ en:"Nothing like it existed in the Edo period. The earliest sake labels are woodblock prints on washi pasted to barrels — brewery name, sake name, black ink, nothing else — estimated to begin around this year in northern Mie. Within eight years they have colour, framed borders, cranes and Fuji, and a seal and signature borrowed from Chinese painting.", ja:"江戸にこれに当たるものはない。最も早い酒票は、樽へ貼られた和紙の木版である。蔵の名、酒の名、墨、それだけ。始まりはおおよそこの年、伊勢の北と見積もられる。八年のうちに、色と囲みの枠と鶴と富士を得、漢画から借りた印と落款を得る。", zh:"江戶時代並無類似之物。最早的酒票是貼在酒樽上的和紙木版印刷品——酒藏名、酒名、黑墨，別無其他——估計約始於這一年，出現在三重北部。不到八年，它們便有了色彩、邊框、鶴與富士，以及借自中國繪畫的鈐印與落款。" } },
          { year:"1881", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治十四年",
            title:{ en:"Atkinson sees the rods", ja:"アトキンソン、桿菌を見る", zh:"阿特金森看見桿菌" },
            text:{ en:"A British chemist teaching in Tokyo examines spoiled sake under a microscope and names the enemy as an organism.", ja:"東京で教える英国の化学者が、腐った酒を顕微鏡の下に検め、敵を生き物として名指す。", zh:"一位在東京任教的英國化學家以顯微鏡檢視腐壞的清酒，並把敵人指認為一種生物。" } },
          { year:"1895–1920s", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"明治後期",
            title:{ en:"Japanese brewing goes overseas", ja:"日本の造りが海を渡る", zh:"日本釀造走向海外" },
            text:{ en:"Breweries follow emigration and empire to Hawai‘i, the American west coast, Korea, Manchuria and Taiwan.", ja:"蔵が移民と帝国に従い、ハワイ、米国の西岸、朝鮮、満洲、台湾へ渡る。", zh:"酒藏隨著移民與帝國的腳步，前往夏威夷、美國西岸、朝鮮、滿洲與台灣。" } },
          { year:"1898", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治三十一年",
            title:{ en:"Soft-water brewing published", ja:"軟水醸造法の刊行", zh:"軟水釀造法問世" },
            text:{ en:"Miura Senzaburō of Hiroshima publishes the method that lets soft water make good sake, and takes ginjō brewing out of the hard-water heartland.", ja:"広島の三浦仙三郎が、軟らかい水に良い酒を造らせる法を著し、吟醸の造りを硬水の中心の外へ連れ出す。", zh:"廣島的三浦仙三郎發表了讓軟水也能釀出好酒的方法，把吟釀釀造帶出硬水的核心地帶。" } },
          { year:"1899", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"明治三十二年",
            title:{ en:"Home brewing abolished", ja:"自家用酒の廃止", zh:"自用釀酒遭廢止" },
            text:{ en:"The exemption for brewing for one's own use is removed, and the tax moves to the point of production. Sake tax becomes one of the state's largest revenues.", ja:"自ら飲むために醸すことの除外が取り除かれ、税は製造の点へ移る。酒税は国の最大の歳入の一つとなる。", zh:"為自用而釀的除外規定被取消，稅移到製造環節課徵。酒稅成為國家最大的稅收來源之一。" } },
          { year:"1904", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治三十七年",
            title:{ en:"A national brewing laboratory", ja:"国の醸造試験所", zh:"國家釀造試驗所" },
            text:{ en:"The government founds the brewing research institute. Spoilage, yeast and analysis become national programmes rather than local secrets.", ja:"政府が醸造の試験所を設ける。腐り、酵母、分析は、土地の秘密ではなく国の事業となる。", zh:"政府設立釀造研究機構。腐敗、酵母與分析從地方的祕密，變成國家的計畫。" } },
          { year:"1906", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治三十九年",
            title:{ en:"Kyōkai yeast No. 1", ja:"協会酵母一号", zh:"協會酵母一號" },
            text:{ en:"The brewers' association begins distributing pure-culture yeast; a brewery can now choose its organism instead of inheriting it.", ja:"醸造協会が純粋培養の酵母を配りはじめる。蔵は今や、受け継ぐのではなく自らの生き物を選びうる。", zh:"釀造協會開始配發純種培養酵母；酒藏從此可以選擇自己的菌，而不只是繼承它。" } },
          { year:"1908", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治四十一年",
            title:{ en:"Umami is named", ja:"うま味に名が与えられる", zh:"旨味被命名" },
            text:{ en:"Ikeda Kikunae determines that the savour of kombu dashi comes from glutamic acid and coins a word for the taste. The compound had been identified in Germany in 1866; what Ikeda added was the claim that this was a taste in its own right, and a name. English later took the name rather than translating it, which is why sake tasting notes in every language now use a Japanese word for the thing amino acids do.", ja:"池田菊苗が、昆布の出汁のうまさがグルタミン酸に由来すると定め、その味に一語を作って与える。化合物そのものは一八六六年に独逸で同定されていた。池田が加えたのは、これが一つの味であるという主張と、その名である。英語はのちに、訳すのではなく名のほうを取った。いずれの言語の利き酒の記も、アミノ酸のなすことに日本語の語を用いるのは、そのためである。", zh:"池田菊苗確定昆布高湯的鮮美來自麩胺酸，並為這種味道造了一個詞。這個化合物本身早在 1866 年就已在德國被指認；池田加上去的，是「這是一種獨立的味道」這個主張，以及一個名字。英文後來拿走的是那個名字，而不是翻譯它——這就是為什麼如今各種語言的清酒品飲筆記，講到胺基酸所做的事時，用的都是一個日文詞。" } },
          { year:"1909", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治四十二年",
            title:{ en:"Yamahai — and a laboratory owned by its brewers", ja:"山廃、そして蔵が持つ試験所", zh:"山廢，以及由釀造者共有的試驗所" },
            text:{ en:"The pole-mashing step is shown to be unnecessary, and yamahai is born; in the same year Hiroshima's brewers found their own shared research centre.", ja:"山卸の段が要らぬことが示され、山廃が生まれる。同じ年、広島の造り手が自らの共有の試験の場を設ける。", zh:"山卸這一步被證明並非必要，山廢於焉誕生；同年，廣島的釀造者設立了他們自己共有的研究中心。" } },
          { year:"1910", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"明治四十三年",
            title:{ en:"Sokujō-moto", ja:"速醸酛", zh:"速釀酛" },
            text:{ en:"Adding lactic acid at the start cuts the starter from four weeks to two and removes most of the risk. Nine breweries in ten still use it.", ja:"初めに乳酸を加えることが、酒母を四週から二週へ縮め、危うさのほとんどを取り除く。今なお十の蔵のうち九がこれを用いる。", zh:"一開始就加入乳酸，把酒母從四週縮短到兩週，並移除了大部分風險。至今十家酒藏有九家仍在使用。" } },
          { year:"1911", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"明治四十四年",
            title:{ en:"The first national competition", ja:"第一回全国新酒鑑評会", zh:"第一屆全國新酒鑑評會" },
            text:{ en:"A national appraisal of new sake begins, and with it a century of competitive pressure towards a particular kind of excellence.", ja:"新酒の全国の鑑評が始まり、それとともに、ある定まった卓越へ向かう一世紀の競いの圧が始まる。", zh:"全國性的新酒品評開始，隨之而來的是一整個世紀朝向某一種特定卓越的競爭壓力。" } },
          { year:"1914", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"大正三年",
            title:{ en:"A sake brewery opens in Taipei", ja:"台北に酒蔵が開く", zh:"台北開設酒藏" },
            text:{ en:"Private Japanese-style brewing begins in Taiwan, twenty-eight years before the island's monopoly bureau absorbs it.", ja:"台湾において私の日本式の造りが始まる。島の専売局がそれを吸い上げる二十八年前である。", zh:"日式民營釀造在台灣展開，比島上的專賣局將其吸收早了二十八年。" } },
          { year:"1919", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"大正八年",
            title:{ en:"Nojiro Kin'ichi arrives in Kumamoto", ja:"野白金一、熊本に着く", zh:"野白金一抵達熊本" },
            text:{ en:"The technician who will remake southern brewing takes up his post; the Kumamoto tradition and eventually yeast No. 9 follow from it.", ja:"南の造りを作り替えることとなる技師がその職に就く。熊本の伝えと、やがて九号の酵母がそこから続く。", zh:"那位後來重塑南方釀造的技師就任；熊本的傳統、以及最終的九號酵母，都由此而來。" } },
          { year:"1921–23", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"大正十〜十二年",
            title:{ en:"Sake without rice", ja:"米を用いぬ酒", zh:"不用米的酒" },
            text:{ en:"Synthetic sake is developed at the national institute as a response to rice shortage — a technology that will matter enormously two decades later.", ja:"米の乏しさへの応えとして、国の試験所において合成清酒が編み出される。二十年ののちに巨きな意味をもつ技である。", zh:"合成清酒在國家試驗所被開發出來，作為對米糧短缺的回應——這項技術在二十年後將產生巨大影響。" } },
          { year:"1921", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"大正十年",
            title:{ en:"Sake without rice is patented", ja:"米なき酒に特許", zh:"不用米的酒取得專利" },
            text:{ en:"Two years after the rice riots, the Institute of Physical and Chemical Research patents a method for building a sake-like drink from starch, amino acids and synthesised acids. Brands go on sale in 1923; by 1943, 47 companies are making it. The law will eventually have to define real sake because of it.", ja:"米騒動の二年後、理化学研究所が、デンプンとアミノ酸と合成された酸から酒に似た飲み物を組み立てる製法の特許を取る。一九二三年に銘柄が売りに出、一九四三年には四十七社がこれを造る。やがて法は、これゆえに本物の酒を定義せねばならなくなる。", zh:"米騷動的兩年後，理化學研究所為一種以澱粉、胺基酸與合成酸建構出類清酒飲料的製法取得專利。1923 年品牌上市，到 1943 年有 47 家公司在生產它。法律日後之所以必須定義何謂真正的清酒，正是因為它。" } },
          { year:"1922", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"大正十一年",
            title:{ en:"The Taiwan alcohol monopoly", ja:"台湾の酒類専売", zh:"臺灣的酒類專賣" },
            text:{ en:"Taiwan's colonial government takes alcohol into state monopoly; private brewing on the island ends and does not resume for eighty years.", ja:"台湾の総督府が酒類を専売とする。島における私の造りは終わり、八十年のあいだ戻らない。", zh:"臺灣總督府將酒類收歸專賣；島上的民營釀造就此結束，八十年間不曾恢復。" } },
          { year:"1923", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"大正十二年",
            title:{ en:"Enamel tanks replace wooden vats", ja:"琺瑯タンクが木桶に代わる", zh:"琺瑯槽取代木桶" },
            text:{ en:"Lined steel arrives, and within two decades almost every wooden vat in Japan is gone — along with the resident microbial populations that lived in them.", ja:"内張りされた鋼が現れ、二十年のうちに日本のほとんどあらゆる木桶が消える。そこに住まっていた微生物の群れとともに。", zh:"內襯鋼槽出現，二十年內日本幾乎所有木桶都消失了——連同住在其中的常駐微生物群落。" } },
          { year:"1930", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"昭和五年",
            title:{ en:"No. 6, and the vertical mill", ja:"六号、そして竪型精米機", zh:"六號，以及豎型精米機" },
            text:{ en:"Kyōkai yeast No. 6 is isolated at Aramasa in Akita — the oldest association yeast still in use — and the vertical rice mill makes deep polishing practical.", ja:"秋田の新政において協会六号が分離される。今なお用いられる最も古い協会の酵母である。そして竪型の精米機が深い磨きを実際のものとする。", zh:"協會六號酵母在秋田的新政被分離出來——至今仍在使用的最古老協會酵母——而豎型精米機讓深度精米成為可行。" } },
          { year:"1936", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"昭和十一年",
            title:{ en:"Yamada Nishiki is named", ja:"山田錦、名を得る", zh:"山田錦得名" },
            text:{ en:"Hyōgo names the cross that becomes the reference brewing rice, and remains about a third of all sake rice grown in Japan.", ja:"兵庫が、基準となる酒米となる交配に名を与える。それは今なお日本で育てられる酒米のおよそ三分の一である。", zh:"兵庫為那個日後成為基準酒米的雜交品種命名，而它至今仍約占日本所產酒米的三分之一。" } },
          { year:"1940", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"昭和十五年",
            title:{ en:"The grading system", ja:"級別制度", zh:"級別制度" },
            text:{ en:"Grades are introduced as tax bands — six of them at first, settling to special, first and second class after rationing ends in 1949. Sources disagree on the year: one account dates the first scheme to 1940 with six grades, the National Tax Agency's own history to 1943 with four. For half a century a bottle's grade will say more about its tax than its quality.", ja:"級が税の帯として導入される。初めは六段階であり、一九四九年に配給が終わったのち特級・一級・二級に落ち着く。年について資料は一致しない。ある記述は最初の仕組みを一九四〇年の六段階とし、国税庁自らの史は一九四三年の四段階とする。半世紀のあいだ、瓶の級は質よりも税について多くを語ることとなる。", zh:"等級作為稅級被引入——起初有六級，1949 年配給結束後定型為特級、一級、二級。關於年份，各方說法不一：有一種記載把最初的制度定在 1940 年、分六級，國稅廳自己的歷史則記為 1943 年、分四級。此後半個世紀，一支酒的等級所說明的，關於稅的部分多過關於品質的部分。" } },
          { year:"1943–49", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"昭和十八〜二十四年",
            title:{ en:"Alcohol addition, then triple-volume sake", ja:"アルコール添加、そして三増酒", zh:"添加酒精，然後是三增酒" },
            text:{ en:"Wartime rice shortage makes adding distilled alcohol official policy; by the late 1940s sake can be stretched to three times its volume with alcohol, sugar and acid.", ja:"戦時の米の乏しさが、蒸留の酒精を加えることを公の方策とする。一九四〇年代の終わりには、酒は酒精と糖と酸により三倍の嵩まで伸ばされうる。", zh:"戰時的米糧短缺讓添加蒸餾酒精成為官方政策；到一九四〇年代末，清酒可以靠酒精、糖與酸被稀釋到三倍的量。" } }
        ] }
      ] },

    { t:"section", id:"postwar",
      title:{ en:"Postwar — 1945 to 1990", ja:"戦後——一九四五年から一九九〇年", zh:"戰後——一九四五至一九九〇年" }, jp:"戦後",
      body:[
        { t:"timeline", items:[
          { year:"1945–", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"戦後",
            title:{ en:"Taiwan inherits the monopoly", ja:"台湾、専売を受け継ぐ", zh:"臺灣繼承專賣" },
            text:{ en:"The incoming government keeps the colonial alcohol monopoly rather than dismantling it; Taiwanese sake remains a state product for another half-century.", ja:"新たな政府は植民の酒類専売を解かず、そのまま受け継ぐ。台湾の清酒はさらに半世紀のあいだ国の産物であり続ける。", zh:"接收的政府沒有拆解殖民時期的酒類專賣，而是予以繼承；臺灣的清酒又當了半個世紀的國營產品。" } },
          { year:"1952", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"昭和二十七年",
            title:{ en:"Yeast No. 9 isolated", ja:"九号酵母の分離", zh:"九號酵母的分離" },
            text:{ en:"The Kumamoto yeast that will define ginjō aroma is isolated at Kōro; it is released nationally sixteen years later.", ja:"吟醸の香りを定めることとなる熊本の酵母が香露において分離される。十六年ののち、全国へ放たれる。", zh:"那個日後定義了吟釀香氣的熊本酵母在香露被分離出來；十六年後才向全國釋出。" } },
          { year:"1956", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"昭和三十一年",
            title:{ en:"Mevalonic acid identified", ja:"メバロン酸の同定", zh:"甲羥戊酸的指認" },
            text:{ en:"The growth factor that hiochi bacteria cannot live without is named, and the organism that had ruined breweries for centuries becomes culturable and therefore beatable.", ja:"火落菌がそれなくして生きえぬ生育因子に名が与えられる。幾世紀にわたり蔵を潰してきた生き物は、培いうるものとなり、ゆえに破りうるものとなる。", zh:"火落菌不可或缺的生長因子被命名，而這個數個世紀以來毀掉無數酒藏的生物，變得可培養、因而可被擊敗。" } },
          { year:"1957", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"昭和三十二年",
            title:{ en:"Gohyakumangoku", ja:"五百万石", zh:"五百萬石" },
            text:{ en:"Niigata names a rice for the year its harvest passed five million koku; it becomes the northern counterweight to Yamada Nishiki and the taste of dry, clean sake.", ja:"新潟が、収穫が五百万石を越えた年にちなんで米に名を与える。それは山田錦に対する北の対の錘となり、辛く清い酒の味となる。", zh:"新潟以其收成突破五百萬石的那一年為一種米命名；它成為對抗山田錦的北方砝碼，也成為辛口潔淨風格的滋味。" } },
          { year:"1964", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"昭和三十九年",
            title:{ en:"Sake becomes a subject", ja:"酒が学の対象となる", zh:"清酒成為一門學問" },
            text:{ en:"Serious scholarly and popular writing about sake as a cultural object begins to appear, and the craft acquires a literature.", ja:"文化の対象としての酒についての真剣な学と一般の書きものが現れはじめ、技は文献を得る。", zh:"把清酒當作文化對象的嚴肅學術與大眾書寫開始出現，這門技藝有了自己的文獻。" } },
          { year:"1968", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"昭和四十三年",
            title:{ en:"Kumamoto yeast released nationally", ja:"熊本酵母の全国頒布", zh:"熊本酵母全國配發" },
            text:{ en:"No. 9 goes out to the whole country, and within a decade the aroma of Japanese competition sake changes shape.", ja:"九号が国じゅうへ出てゆき、十年のうちに日本の鑑評会の酒の香りは形を変える。", zh:"九號向全國釋出，十年之內日本鑑評會清酒的香氣就改變了形狀。" } },
          { year:"1969–71", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"昭和四十四〜四十六年",
            title:{ en:"Pasteurisation standardised", ja:"火入れの規格化", zh:"火入的標準化" },
            text:{ en:"Heat treatment settles at around 65 °C for ten minutes or more, and membrane filtration comes in ahead of it.", ja:"熱の処理は六十五度ほどを十分以上に落ち着き、その前に膜の濾過が入ってくる。", zh:"熱處理定於約六十五度、維持十分鐘以上，而膜過濾則被安排在它之前。" } },
          { year:"1971", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"昭和四十六年",
            title:{ en:"Rice production adjustment begins", ja:"生産調整の開始", zh:"生產調整開始" },
            text:{ en:"The state starts paying farmers to grow less rice. Over the following decades the land taken out of staple production is where much of Japan's brewing rice goes.", ja:"国が農に、米をより少なく作ることへ払いはじめる。続く数十年、主食の生産から外された地こそ、日本の酒米の多くが向かう先である。", zh:"國家開始付錢請農民少種稻。在其後數十年間，退出主食生產的那些土地，正是日本許多酒米的去處。" } },
          { year:"1973", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"昭和四十八年",
            title:{ en:"Peak volume — and salicylic acid banned", ja:"生産の頂、そしてサリチル酸の禁止", zh:"產量高峰——以及水楊酸遭禁" },
            text:{ en:"Japanese sake production reaches its all-time high and begins a decline that has not stopped. In the same year the preservative that had held the industry together for a century is prohibited.", ja:"日本酒の生産が史上の頂に達し、今なお止まぬ下りを始める。同じ年、一世紀にわたり業界を支えてきた防腐剤が禁じられる。", zh:"日本酒產量達到歷史高峰，並開始一段至今未止的下滑。同一年，支撐了業界一個世紀的那種防腐劑遭到禁用。" } },
          { year:"1970s–80s", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"昭和後期",
            title:{ en:"The jizake movement", ja:"地酒の運動", zh:"地酒運動" },
            text:{ en:"Small regional breweries and the specialist shops that carried them build an alternative to the national brands, and the modern quality market begins.", ja:"小さな地方の蔵と、それらを扱う専門の店とが、全国の銘柄に代わるものを築く。今日の質の市場が始まる。", zh:"小型地方酒藏與經銷它們的專門店，共同建立起一條有別於全國性品牌的路線，現代的品質市場就此開始。" } },
          { year:"1978", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"昭和五十三年",
            title:{ en:"Miyama Nishiki", ja:"美山錦", zh:"美山錦" },
            text:{ en:"Nagano registers a cold-tolerant brewing rice, and the northern prefectures gain a variety that will actually ripen where they are.", ja:"長野が寒さに耐える酒米を登録し、北の県は、その土地で実際に実る品種を得る。", zh:"長野登記了一個耐寒的酒米品種，北方各縣終於有了一種在它們那裡真的能成熟的米。" } },
          { year:{ en:"1980s", ja:"一九八〇年代", zh:"一九八〇年代" }, era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"昭和後期",
            title:{ en:"The ginjō boom", ja:"吟醸ブーム", zh:"吟釀熱潮" },
            text:{ en:"Aromatic, deeply polished sake moves out of the competition hall and onto shop shelves, and changes what the public thinks sake tastes like.", ja:"香り高く深く磨かれた酒が鑑評会の間から店の棚へ出てゆき、世間が思う酒の味を変える。", zh:"芳香、深度精米的清酒從鑑評會場走上商店貨架，並改變了大眾對「清酒是什麼味道」的認知。" } },
          { year:"1985", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"昭和六十年",
            title:{ en:"Aged sake organises — and the equal employment law", ja:"熟成酒が組織され、そして雇用機会均等法", zh:"熟成酒組織起來——以及雇用機會均等法" },
            text:{ en:"The Long-term Aged Sake Research Society is founded, giving koshu a shared vocabulary; the same year's employment law begins the slow opening of the brewery to women.", ja:"長期熟成酒研究会が設けられ、古酒に共有の語彙が与えられる。同じ年の雇用の法が、蔵の戸を女性へ開く緩やかな歩みを始める。", zh:"長期熟成酒研究會成立，為古酒建立了共通語彙；同年的雇用法則開啟了酒藏向女性緩慢敞開的過程。" } },
          { year:"1986", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"昭和六十一年",
            title:{ en:"Shizuoka takes ten golds", ja:"静岡、金賞十を得る", zh:"靜岡拿下十面金牌" },
            text:{ en:"A prefecture with no brewing reputation wins ten gold medals at the national competition with its own yeast, and proves that a research centre can create a regional style from nothing.", ja:"造りの名を持たぬ県が、自らの酵母をもって全国の鑑評会に金賞十を得る。試験の場が無から地方の酒質を生みうることの証しである。", zh:"一個沒有釀造名聲的縣，靠自家酵母在全國鑑評會拿下十面金牌，證明了一座研究中心能從無到有創造出一種地方風格。" } },
          { year:"1987", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"昭和六十二年",
            title:{ en:"The Taipei plant closes", ja:"台北の工場が去る", zh:"台北的廠關閉" },
            text:{ en:"Taiwan's state sake production ends, and for fifteen years the island has no sake of its own.", ja:"台湾における国の清酒の生産が終わり、十五年のあいだ、島は自らの清酒を持たぬ。", zh:"臺灣的公營清酒生產結束，此後十五年，這座島沒有屬於自己的清酒。" } },
          { year:"1989", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成元年",
            title:{ en:"The Supreme Court upholds the brewing licence", ja:"最高裁、免許制を合憲とする", zh:"最高法院維持釀造許可制" },
            text:{ en:"The doburoku case ends: securing liquor tax revenue is held to justify criminalising home brewing, and the 1899 ban survives its constitutional challenge.", ja:"どぶろく裁判が終わる。酒税の収入を確保することが家での醸造を罪とすることを正当づけるとされ、一八九九年の禁は憲法上の争いを生き延びる。", zh:"濁酒訴訟終結：確保酒稅收入被認定足以正當化把家釀入罪，一八九九年的禁令熬過了它的違憲挑戰。" } }
        ] }
      ] },

{ t:"section", id:"modern",
      title:{ en:"The present era — 1990 onward", ja:"現代——一九九〇年より", zh:"當代——一九九〇年以降" }, jp:"現代",
      body:[
        { t:"timeline", items:[
          { year:"1990", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成二年",
            title:{ en:"Tokutei meishōshu replaces the grades", ja:"特定名称酒が級別に代わる", zh:"特定名稱酒取代級別制" },
            text:{ en:"Honjōzō, junmai, ginjō and daiginjō are defined by how the sake is made rather than by what it pays in tax. The modern label begins here.", ja:"本醸造、純米、吟醸、大吟醸が、税に払うものではなく、いかに造られるかによって定められる。今日の札はここに始まる。", zh:"本釀造、純米、吟釀、大吟釀改以「怎麼釀」而非「繳多少稅」來定義。現代的酒標從這裡開始。" } },
          { year:"1992", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成四年",
            title:{ en:"The grades are abolished", ja:"級別制度の廃止", zh:"級別制度廢止" },
            text:{ en:"Special, first and second class disappear entirely. Fifty-two years of a system that had confused quality with taxation come to an end.", ja:"特級・一級・二級はすっかり消える。質と課税とを混ぜてきた五十二年の仕組みが終わる。", zh:"特級、一級、二級完全消失。一套把品質與課稅混為一談的制度，在五十二年後畫下句點。" } },
          { year:"1994", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成六年",
            title:{ en:"A framework for geographical indications", ja:"地理的表示の枠組み", zh:"地理標示的架構" },
            text:{ en:"Japan puts in place the machinery for protecting place names in liquor. In the same year the television adaptation of Natsuko no Sake reaches a national audience.", ja:"日本が酒類における地の名を守る仕組みを整える。同じ年、『夏子の酒』の映像化が全国の視聴者に届く。", zh:"日本建立起保護酒類產地名稱的機制。同一年，《夏子的酒》的電視改編抵達全國觀眾。" } },
          { year:"1995", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成七年",
            title:{ en:"The food control law is replaced — and Kobe shakes", ja:"食糧管理法の置き換え、そして神戸の揺れ", zh:"糧食管理法遭取代——以及神戶震動" },
            text:{ en:"Rice distribution is freed, making direct contracts between breweries and farmers possible for the first time in half a century. In January the Kobe earthquake destroys much of Nada.", ja:"米の流通が自由とされ、蔵と農との直の契約が半世紀ぶりに可能となる。一月、阪神の地震が灘の多くを壊す。", zh:"稻米流通開放，讓酒藏與農民之間的直接契約在半世紀後首度成為可能。一月，神戶大地震摧毀了灘的大部分。" } },
          { year:"1997", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"平成九年",
            title:{ en:"Dewa Sansan", ja:"出羽燦々", zh:"出羽燦燦" },
            text:{ en:"Yamagata registers its own brewing rice, and the pattern of a prefecture breeding a flagship variety for its own breweries is fully established.", ja:"山形が自らの酒米を登録し、県が自らの蔵のために旗となる品種を育むという型が完全に定まる。", zh:"山形登記了自己的酒米，而「一個縣為自家酒藏育成旗艦品種」的模式就此完全確立。" } },
          { year:"1998", era:{ en:"Technique", ja:"技", zh:"技" }, eraJp:"平成十年",
            title:{ en:"Bottle-fermented sparkling, and flower yeasts", ja:"瓶内二次発酵と花酵母", zh:"瓶內二次發酵與花酵母" },
            text:{ en:"The first commercial bottle-fermented sparkling sake appears; in the same period yeasts isolated from flowers begin to widen the aromatic palette beyond the association strains.", ja:"最初の商いとしての瓶内二次発酵の発泡清酒が現れる。同じころ、花より分離された酵母が、協会の系統を超えて香りの幅を広げはじめる。", zh:"第一支商業化的瓶內二次發酵氣泡清酒問世；同一時期，從花朵中分離出的酵母開始把香氣的光譜拓寬到協會菌株之外。" } },
          { year:"2002", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成十四年",
            title:{ en:"Doburoku zones — and Taiwan liberalises", ja:"どぶろく特区、そして台湾の自由化", zh:"濁酒特區——以及臺灣自由化" },
            text:{ en:"Japan's structural reform zones let farmer-innkeepers brew doburoku without meeting the minimum production floor: the only crack in the 1899 wall. In the same year Taiwan ends its alcohol monopoly.", ja:"日本の構造改革特区が、農家の宿の主に、最低製造数量を満たさずにどぶろくを醸すことを許す。一八九九年の壁に開いた唯一の裂け目である。同じ年、台湾が酒類の専売を終える。", zh:"日本的構造改革特區允許經營民宿的農民在不達最低製造量門檻的情況下釀造濁酒：一八九九年那道牆上唯一的裂縫。同一年，臺灣結束了酒類專賣。" } },
          { year:"2005", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成十七年",
            title:{ en:"The first sake GI: Hakusan", ja:"最初の酒のGI——白山", zh:"第一個清酒 GI——白山" },
            text:{ en:"Hakusan in Ishikawa becomes the first place name protected for sake, twenty-eight years before the term Nihonshu itself is protected.", ja:"石川の白山が、清酒について守られる最初の地の名となる。日本酒という語そのものが守られる二十八年前ではなく、十年前のことである。", zh:"石川的白山成為清酒領域第一個受保護的地名，比「日本酒」這個詞本身受到保護早了十年。" } },
          { year:"2006", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成十八年",
            title:{ en:"Triple-volume sake is written out", ja:"三増酒が法から消える", zh:"三增酒被寫出法律之外" },
            text:{ en:"On 1 May the wartime expedient that had survived fifty-seven years is excluded from the legal definition of seishu: everything other than rice, kōji, water and lees may now weigh at most half the rice. Old-law stock could be blended down until 30 September 2009.", ja:"五月一日、五十七年を生き延びた戦時の間に合わせが清酒の法の定義から外される。米・麹・水・かす以外のすべては、いまや米の重量の半分までしか許されない。旧法の在庫は二〇〇九年九月三十日まで混和して下げることができた。", zh:"5 月 1 日，那個存活了五十七年的戰時權宜之計被排除於清酒的法律定義之外：米、麴、水與酒粕以外的一切，如今至多只能達到米重量的一半。依舊法製造的庫存可混合稀釋至 2009 年 9 月 30 日。" } },
          { year:"2013", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"平成二十五年",
            title:{ en:"Washoku on the UNESCO list", ja:"和食のユネスコ登録", zh:"和食登錄聯合國教科文組織" },
            text:{ en:"Japanese cuisine is inscribed as intangible cultural heritage, and sake acquires an international frame it had not had before.", ja:"和食が無形文化遺産に登録され、日本酒はそれまで持たなかった国際の枠を得る。", zh:"日本料理被列入非物質文化遺產，清酒因此獲得了它先前沒有的國際框架。" } },
          { year:"2015", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成二十七年",
            title:{ en:"\"Nihonshu\" becomes a protected term", ja:"「日本酒」が守られる語となる", zh:"「日本酒」成為受保護的詞" },
            text:{ en:"The word may now be used only for sake made in Japan from Japanese rice. In the same year the documentary Kampai! carries the subject to foreign audiences.", ja:"この語は今や、日本の米を用いて日本で造られた酒にのみ用いうる。同じ年、記録映画『カンパイ！』がこの主題を海の外の観客へ運ぶ。", zh:"這個詞如今只能用於在日本、以日本米釀造的清酒。同年，紀錄片《乾杯！》把這個主題帶給了海外觀眾。" } },
          { year:"2016", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成二十八年",
            title:{ en:"A whole prefecture, and a standard for bubbles", ja:"県まるごと、そして泡の基準", zh:"整個縣，以及氣泡的標準" },
            text:{ en:"Yamagata becomes the first entire prefecture protected as a geographical indication, and the awa-sake standard gives bottle-fermented sparkling sake a definition to be judged against.", ja:"山形が地理的表示として守られる最初の県まるごとの地となり、awa酒の基準が瓶内発酵の発泡清酒に、照らして判ぜられる定義を与える。", zh:"山形成為第一個以整縣為單位受地理標示保護的地區，而 awa 酒標準則給了瓶內發酵氣泡清酒一個可供評判的定義。" } },
          { year:"2018", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"平成三十年",
            title:{ en:"Rice production adjustment ends", ja:"生産調整の終わり", zh:"生產調整終結" },
            text:{ en:"After nearly fifty years the state stops allocating rice production targets, in a countryside whose farmers are mostly past sixty.", ja:"五十年近くののち、国は米の生産の目標を配ることをやめる。農のほとんどが六十を過ぎた田舎においてである。", zh:"將近五十年之後，國家停止分配稻米生產目標——而此時鄉間的農民多數都已年過六十。" } },
          { year:"2019", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"令和元年",
            title:{ en:"Protection abroad", ja:"海の外での守り", zh:"海外的保護" },
            text:{ en:"Japanese geographical indications for sake begin to be recognised under trade agreements, and a place name on a label starts to mean something outside Japan too.", ja:"日本酒の地理的表示が通商の協定のもとに認められはじめ、札の上の地の名は日本の外においても何かを意味しはじめる。", zh:"日本清酒的地理標示開始在貿易協定下獲得承認，酒標上的地名在日本以外也開始具有意義。" } },
          { year:"2020", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"令和二年",
            title:{ en:"The liquor tax on sake begins to fall", ja:"清酒の酒税が下がりはじめる", zh:"清酒的酒稅開始下降" },
            text:{ en:"A long-planned convergence of the alcohol tax rates starts to reduce the duty on seishu, easing a burden that had always fallen hardest on cheap sake.", ja:"長く企てられた酒税の率の収束が、清酒への課税を減らしはじめる。つねに安い酒に最も重くのしかかってきた荷が緩む。", zh:"一項長期規劃的酒稅稅率整合開始調降清酒的稅負，減輕了那份一向對廉價清酒壓得最重的負擔。" } },
          { year:"2020–22", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"令和二〜四年",
            title:{ en:"Pandemic shock, and the pivot to export", ja:"疫の衝撃と輸出への転回", zh:"疫情衝擊，以及轉向出口" },
            text:{ en:"Restaurant closures remove the industry's main channel almost overnight; the response is a hard turn towards export, direct sales and the home market for bottles.", ja:"料理屋の閉じが、ほとんど一夜にして業界の主たる経路を奪う。応えは、輸出と直販と家で飲まれる瓶への強い転回である。", zh:"餐廳歇業幾乎在一夜之間拿走了業界的主要通路；因應之道是猛然轉向出口、直售，以及在家喝的瓶裝市場。" } },
          { year:"2023", era:{ en:"Law", ja:"法", zh:"法" }, eraJp:"令和五年",
            title:{ en:"Seishu duty reaches ¥100,000 per kilolitre", ja:"清酒の酒税、一キロリットル十万円に", zh:"清酒稅降至每公秉十萬日圓" },
            text:{ en:"The rate converges with that on fruit wine — about ¥72 on a 720 ml bottle, whatever the bottle costs.", ja:"率は果実酒のそれと収束する。七百二十ミリリットル一本あたりおよそ七十二円であり、その瓶がいくらであるかによらない。", zh:"稅率與果實酒收斂一致——每支七百二十毫升瓶約七十二日圓，不論那支酒賣多少錢。" } },
          { year:"2024", era:{ en:"Culture", ja:"文", zh:"文" }, eraJp:"令和六年",
            title:{ en:"UNESCO inscription", ja:"ユネスコ登録", zh:"聯合國教科文組織登錄" },
            text:{ en:"Traditional kōji-based brewing knowledge in Japan is inscribed as intangible cultural heritage in its own right — recognition for the craft rather than for the cuisine around it.", ja:"日本における伝統的な麹による酒造りの知が、それ自体として無形文化遺産に登録される。周りの料理ではなく、技そのものへの認めである。", zh:"日本以麴為本的傳統釀造知識，以其自身的名義被列入非物質文化遺產——這是對技藝本身的認可，而非對圍繞著它的料理。" } },
          { year:"2025", era:{ en:"Place", ja:"地", zh:"地" }, eraJp:"令和七年",
            title:{ en:"Record export, record concentration", ja:"記録的な輸出、記録的な集中", zh:"創紀錄的出口，創紀錄的集中" },
            text:{ en:"Exports reach their highest value while the number of breweries continues to fall — the industry's two defining trends running in opposite directions at once.", ja:"輸出はその値において最も高きに達し、その一方で蔵の数は減り続ける。業界を定める二つの流れが、同時に反対の向きへ走っている。", zh:"出口金額創下新高，而酒藏數量卻持續下滑——界定這個產業的兩股趨勢，正同時朝相反方向奔跑。" } }
        ] },

        { t:"note", label:{ en:"How to read this list", ja:"この表の読み方", zh:"如何讀這份表" },
          text:{
            en:"Four patterns are visible once the threads are laid side by side. Technical change clusters in two bursts, around 1900–1930 and again from 1980. Almost every legal change is a tax change wearing different clothes. Culture consistently arrives a decade after the technique that made it possible. And the export story is a hundred and fifty years old, which is worth remembering the next time it is described as new.",
            ja:"糸を並べれば四つの型が見えてくる。技の変化は二つの噴出に集まる。一九〇〇年から一九三〇年ごろと、一九八〇年よりのちである。法の変化のほとんどすべては、異なる衣を着た税の変化である。文はつねに、それを可能にした技の十年のちに現れる。そして輸出の物語は百五十年を経ている。それが次に新しいものとして語られるとき、思い出すに値する。",
            zh:"把幾條線並排放好，就會看見四種模式。技術變革集中在兩次爆發：約一九〇〇至一九三〇年，以及一九八〇年之後。幾乎每一項法律變革，都是換了衣裳的稅制變革。文化總是在使它成為可能的技術出現十年之後才抵達。而出口的故事已有一百五十年之久——下次有人把它說成新鮮事時，這一點值得記起。" } },

        { t:"tiny", text:{
          en:"Every entry above is expanded somewhere else on this site. The main narrative is in <a href=\"history.html\">History</a>; the legal thread in <a href=\"standards.html\">Law &amp; Standards</a> and <a href=\"homebrew.html\">Making Your Own</a>; the technical thread in <a href=\"starters.html\">Starter Methods</a>, <a href=\"yeast.html\">Yeast</a> and <a href=\"faults.html\">When Sake Goes Wrong</a>; the people in <a href=\"people.html\">People</a>; the places in <a href=\"regions.html\">Regions A–Z</a>.",
          ja:"上のいずれの項も、この場のどこかで展べられている。主たる語りは<a href=\"history.html\">歴史</a>、法の筋は<a href=\"standards.html\">法令と基準</a>と<a href=\"homebrew.html\">自分で造ること</a>、技の筋は<a href=\"starters.html\">酒母の型</a>・<a href=\"yeast.html\">酵母</a>・<a href=\"faults.html\">酒が傷むとき</a>、人は<a href=\"people.html\">人物</a>、地は<a href=\"regions.html\">産地一覧</a>。",
          zh:"上表每一則在本站別處都有展開。主要敘事在<a href=\"history.html\">歷史</a>；法律線在<a href=\"standards.html\">法規與標準</a>與<a href=\"homebrew.html\">自己動手釀</a>；技術線在<a href=\"starters.html\">酒母工法</a>、<a href=\"yeast.html\">酵母</a>與<a href=\"faults.html\">當清酒走壞時</a>；人物在<a href=\"people.html\">人物</a>；地方在<a href=\"regions.html\">產地一覽</a>。" } }
      ] },

    { t:"related", items:[
      { href:"history.html", why:{ en:"The same events, told rather than listed.", ja:"同じ出来事を、並べるのではなく語る。", zh:"同樣的事件，用敘述而不是條列。" } },
      { href:"people.html", why:{ en:"The names attached to the dates.", ja:"日付に結びついた名。", zh:"繫在這些日期上的名字。" } },
      { href:"standards.html", why:{ en:"The laws, in the order they were made.", ja:"法を、作られた順に。", zh:"那些法律，依制定順序排列。" } },
      { href:"sources.html", why:{ en:"How to check any date on this page.", ja:"この頁のいかなる日付も確かめる方法。", zh:"如何查證本頁上的任何一個日期。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- tables */
SAKE.pages["tables"] = {
  kicker: { en: "Reference · 06", ja: "資料 · 06", zh: "資料 · 06" },
  title:  { en: "Reference Tables", ja: "早見表", zh: "速查表" },
  jp: "早見表",
  lede: {
    en: "Everything on this page appears somewhere else in longer form. It is collected here for looking up rather than for reading: the designations, the milling ladder, thirty-odd rice varieties, the yeast library, the ten temperatures, the traditional measures, and — the one most people actually need at a shop counter — the Japanese era-year conversion for reading a production date.",
    ja: "本頁の内容はすべて、他所でより詳しく述べている。ここに集めたのは読むためではなく引くためである——特定名称、精米歩合の階梯、三十余の酒米、酵母の一覧、十の温度、伝統的な単位、そして店頭で最も必要とされるもの、すなわち製造年月を読むための和暦西暦対照。",
    zh: "本頁的每一項在別處都有更詳盡的說明。此處收集是為了查閱而非閱讀：特定名稱、精米步合階梯、三十餘種酒米、酵母一覽、十種溫度、傳統計量單位，以及多數人在店頭真正需要的那一項——用以判讀製造年月的日本年號西元對照。"
  },
  body: [
    { t:"section", id:"designations",
      title:{ en:"The eight designations", ja:"八つの特定名称", zh:"八種特定名稱" }, jp:"特定名称",
      body:[
        { t:"table",
          cols:[{en:"Designation",ja:"名称",zh:"名稱"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Milling",ja:"精米歩合",zh:"精米步合"},{en:"Kōji",ja:"麹歩合",zh:"麴步合"},{en:"Added alcohol",ja:"醸造アルコール",zh:"添加酒精"},{en:"Ginjō method",ja:"吟醸造り",zh:"吟釀造"}],
          jpCols:[1], numCols:[2,3],
          rows:[
            [{en:"Junmai Daiginjō",ja:"純米大吟醸酒",zh:"純米大吟釀酒"},"純米大吟醸酒","≤ 50 %","≥ 15 %",{en:"none",ja:"なし",zh:"無"},{en:"required",ja:"必要",zh:"必須"}],
            [{en:"Daiginjō",ja:"大吟醸酒",zh:"大吟釀酒"},"大吟醸酒","≤ 50 %","≥ 15 %","≤ 10 %",{en:"required",ja:"必要",zh:"必須"}],
            [{en:"Junmai Ginjō",ja:"純米吟醸酒",zh:"純米吟釀酒"},"純米吟醸酒","≤ 60 %","≥ 15 %",{en:"none",ja:"なし",zh:"無"},{en:"required",ja:"必要",zh:"必須"}],
            [{en:"Ginjō",ja:"吟醸酒",zh:"吟釀酒"},"吟醸酒","≤ 60 %","≥ 15 %","≤ 10 %",{en:"required",ja:"必要",zh:"必須"}],
            [{en:"Tokubetsu Junmai",ja:"特別純米酒",zh:"特別純米酒"},"特別純米酒",{en:"≤ 60 % or declared method",ja:"60%以下 又は特別な製法",zh:"≤ 60% 或申報製法"},"≥ 15 %",{en:"none",ja:"なし",zh:"無"},"—"],
            [{en:"Tokubetsu Honjōzō",ja:"特別本醸造酒",zh:"特別本釀造酒"},"特別本醸造酒",{en:"≤ 60 % or declared method",ja:"60%以下 又は特別な製法",zh:"≤ 60% 或申報製法"},"≥ 15 %","≤ 10 %","—"],
            [{en:"Junmai",ja:"純米酒",zh:"純米酒"},"純米酒",{en:"no minimum, must be declared",ja:"規定なし・表示は必要",zh:"無下限・須標示"},"≥ 15 %",{en:"none",ja:"なし",zh:"無"},"—"],
            [{en:"Honjōzō",ja:"本醸造酒",zh:"本釀造酒"},"本醸造酒","≤ 70 %","≥ 15 %","≤ 10 %","—"],
            [{en:"Futsūshu",ja:"普通酒",zh:"普通酒"},"普通酒","—","—",{en:"≤ 50 % of rice weight",ja:"米重量の50%以下",zh:"≤ 米重量 50%"},"—"]
          ] },
        { t:"tiny", text:{
          en:"“Added alcohol ≤ 10%” means ten per cent of the weight of the white rice used, not ten per cent of the finished volume. All eight designations additionally require rice inspected at grade 3 or better.",
          ja:"「醸造アルコール10%以下」とは、使用した白米の重量の一割という意味であり、完成品の容量の一割ではない。八つの名称はいずれも、三等以上に格付けされた米であることも要件とする。",
          zh:"「添加酒精 ≤ 10%」指的是所用白米重量的一成，而非成品容量的一成。八種名稱另皆要求使用經檢查評為三等以上的米。" } }
      ]
    },

    { t:"section", id:"milling",
      title:{ en:"Milling ladder", ja:"精米歩合の階梯", zh:"精米步合階梯" }, jp:"精米歩合",
      body:[
        { t:"table",
          cols:[{en:"Remaining",ja:"残存",zh:"殘存"},{en:"Removed",ja:"削り",zh:"削去"},{en:"Where it sits",ja:"位置づけ",zh:"落點"}],
          numCols:[0,1],
          rows:[
            ["90 %","10 %",{en:"Futsūshu; also the level of most pre-modern sake, and of some deliberate low-polish revivals.",ja:"普通酒。前近代の酒の大半もこの水準であり、意図的な低精白の復古もここに入る。",zh:"普通酒；也是多數前近代之酒的水準，以及若干刻意低精米的復古嘗試。"}],
            ["80 %","20 %",{en:"A style in its own right since the 2000s — junmai deliberately under-milled for weight and rice character.",ja:"2000年代以降、それ自体が一つの型となった。厚みと米の性格のために意図的に磨かない純米。",zh:"自 2000 年代起自成一格——為厚度與米之性格而刻意少削的純米。"}],
            ["70 %","30 %",{en:"The honjōzō threshold, and the commonest figure for everyday junmai.",ja:"本醸造の境界であり、日常的な純米で最も多い数値。",zh:"本釀造的門檻，也是日常純米最常見的數值。"}],
            ["60 %","40 %",{en:"The ginjō threshold. Also the tokubetsu threshold.",ja:"吟醸の境界。特別の境界でもある。",zh:"吟釀的門檻，也是「特別」的門檻。"}],
            ["50 %","50 %",{en:"The daiginjō threshold. Half the grain is now rice bran.",ja:"大吟醸の境界。粒の半分が糠になる。",zh:"大吟釀的門檻。半粒米已成米糠。"}],
            ["40 %","60 %",{en:"Common for flagship daiginjō and competition entries.",ja:"看板の大吟醸や鑑評会出品酒に多い。",zh:"旗艦大吟釀與鑑評會參賽酒的常見水準。"}],
            ["35 %","65 %",{en:"About the point where further milling stops changing much that a taster can name.",ja:"これ以上磨いても、利き手が名指しできる変化はほとんど起きなくなる境目。",zh:"大約在此之後，繼續削米已難以造成品評者能指名的變化。"}],
            ["23 %","77 %",{en:"A well-known commercial extreme, reached in the 2010s.",ja:"2010年代に達した、よく知られた商業的な極限。",zh:"2010 年代達成、廣為人知的商業極限。"}],
            ["7 %","93 %",{en:"Record attempts. Ninety-three grains in a hundred discarded, and several weeks of milling.",ja:"記録への挑戦。百粒のうち九十三粒分を捨て、精米に数週間を要する。",zh:"紀錄性的嘗試。每百粒捨去九十三粒之量，精米耗時數週。"}]
          ] }
      ]
    },

    { t:"section", id:"rice",
      title:{ en:"Sake rice varieties", ja:"酒造好適米一覧", zh:"酒造好適米一覽" }, jp:"品種",
      body:[
        { t:"table",
          caption:{en:"Selected varieties, by region of origin",ja:"主な品種（産地別）",zh:"主要品種（依產地）"},
          cols:[{en:"Variety",ja:"品種",zh:"品種"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Origin",ja:"産地",zh:"產地"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[1],
          rows:[
            ["Ginpū","吟風",{en:"Hokkaidō",ja:"北海道",zh:"北海道"},{en:"2000. The variety that made serious Hokkaidō brewing possible.",ja:"2000年。北海道での本格的な造りを可能にした品種。",zh:"2000 年。使北海道正規釀造成為可能的品種。"}],
            ["Suisei","彗星",{en:"Hokkaidō",ja:"北海道",zh:"北海道"},{en:"Lower protein than Ginpū; cleaner, more linear.",ja:"吟風よりたんぱく質が少なく、清らかで直線的。",zh:"蛋白質低於吟風；更潔淨、線條更分明。"}],
            ["Kita-shizuku","きたしずく",{en:"Hokkaidō",ja:"北海道",zh:"北海道"},{en:"Softer and rounder; the newest of the Hokkaidō three.",ja:"柔らかく丸い。北海道三品種のうち最も新しい。",zh:"更柔軟圓潤；北海道三品種中最新者。"}],
            ["Hanafubuki","華吹雪",{en:"Aomori",ja:"青森",zh:"青森"},{en:"Aomori's workhorse; a parent of Dewasansan.",ja:"青森の主力。出羽燦々の親でもある。",zh:"青森的主力品種；亦為出羽燦燦的親本。"}],
            ["Hanaomoi","華想い",{en:"Aomori",ja:"青森",zh:"青森"},{en:"Bred from Yamada Nishiki for the far north; the prefecture's daiginjō rice.",ja:"山田錦を親に北国向けに育成。青森の大吟醸用の米。",zh:"以山田錦為親本、為北國育成；青森的大吟釀用米。"}],
            ["Ginotome","ぎんおとめ",{en:"Iwate",ja:"岩手",zh:"岩手"},{en:"Cold-hardy; used across Nanbu tōji country.",ja:"耐寒性が高く、南部杜氏の地域で広く用いられる。",zh:"耐寒；廣泛使用於南部杜氏所在地區。"}],
            ["Gin-ginga","吟ぎんが",{en:"Iwate",ja:"岩手",zh:"岩手"},{en:"Iwate's ginjō rice, from a Miyama Nishiki line.",ja:"美山錦系から育成された岩手の吟醸用米。",zh:"出自美山錦系的岩手吟釀用米。"}],
            ["Akita Sakekomachi","秋田酒こまち",{en:"Akita",ja:"秋田",zh:"秋田"},{en:"High glucose; soft, wide, gently sweet.",ja:"ブドウ糖が多く、柔らかく幅があり、穏やかに甘い。",zh:"葡萄糖高；柔軟、寬闊、溫和的甜。"}],
            ["Miyama Nishiki","美山錦",{en:"Nagano",ja:"長野",zh:"長野"},{en:"1978, from irradiated Takane Nishiki. Grainy, restrained, exceptionally cold-hardy.",ja:"1978年、たかね錦への放射線照射による。穀物的で控えめ、耐寒性が際立つ。",zh:"1978 年，由高嶺錦輻射誘變而來。帶穀物感、內斂，耐寒性極佳。"}],
            ["Kinmon Nishiki","金紋錦",{en:"Nagano",ja:"長野",zh:"長野"},{en:"A near-extinct Nagano variety revived by a handful of breweries; broad and savoury.",ja:"絶滅寸前だった長野の品種を、少数の蔵が復活させた。広く滋味がある。",zh:"一度近乎絕跡的長野品種，由少數酒藏復育；寬闊而富旨味。"}],
            ["Hitogokochi","ひとごこち",{en:"Nagano",ja:"長野",zh:"長野"},{en:"Easier to grow and mill than Miyama Nishiki; softer in the glass.",ja:"美山錦より栽培も精米も易しく、味は柔らかい。",zh:"較美山錦更易栽培與精米；口感更柔。"}],
            ["Dewasansan","出羽燦々",{en:"Yamagata",ja:"山形",zh:"山形"},{en:"Hanafubuki × Miyama Nishiki. Part of Yamagata's all-local programme.",ja:"華吹雪×美山錦。県産で完結させる山形の計画の一部。",zh:"華吹雪 × 美山錦。山形「全在地化」計畫的一環。"}],
            ["Dewa no Sato","出羽の里",{en:"Yamagata",ja:"山形",zh:"山形"},{en:"Very low protein for a lightly-milled rice; designed to give clean sake at 70%.",ja:"精米を深くしなくてもたんぱく質が少なく、70%でも清らかな酒になるよう設計された。",zh:"在較淺精米下蛋白質仍低；設計目標是在 70% 即能釀出潔淨的酒。"}],
            ["Yuki Megami","雪女神",{en:"Yamagata",ja:"山形",zh:"山形"},{en:"Yamagata's daiginjō rice, released 2017.",ja:"2017年に世に出た山形の大吟醸用米。",zh:"2017 年推出的山形大吟釀用米。"}],
            ["Kame no O","亀の尾",{en:"Yamagata",ja:"山形",zh:"山形"},{en:"Selected c. 1893 from three surviving ears; ancestor of Koshihikari and Sasanishiki. Citrus, high acid, austere.",ja:"1893年頃、残った三本の穂から選抜。コシヒカリ・ササニシキの祖先。柑橘、高い酸、厳しさ。",zh:"約 1893 年自僅存三株稻穗選拔；越光米與笹錦的祖先。柑橘調、高酸、嚴峻。"}],
            ["Kura no Hana","蔵の華",{en:"Miyagi",ja:"宮城",zh:"宮城"},{en:"Miyagi's own; suits the prefecture's restrained, food-first house style.",ja:"宮城の県産米。抑制的で食を第一とする県の酒質に合う。",zh:"宮城的縣產米；契合該縣內斂、以佐餐為先的酒質。"}],
            ["Yume no Ka","夢の香",{en:"Fukushima",ja:"福島",zh:"福島"},{en:"Soft, medium-bodied; usually paired with an aromatic prefectural yeast.",ja:"柔らかく中庸の厚み。県産の高香気酵母と組み合わせることが多い。",zh:"柔軟、中等酒體；多與縣產高香氣酵母搭配。"}],
            ["Watari-bune","渡船",{en:"Ibaraki",ja:"茨城",zh:"茨城"},{en:"An Omachi-derived line, effectively extinct until recovered from a gene bank in the 1980s. A parent of Yamada Nishiki.",ja:"雄町由来の系統。事実上絶滅していたが1980年代に遺伝資源から復活。山田錦の片親。",zh:"源自雄町的系統，實質絕跡至 1980 年代自種原庫復育。山田錦的親本之一。"}],
            ["Sake Musashi","さけ武蔵",{en:"Saitama",ja:"埼玉",zh:"埼玉"},{en:"Saitama's own variety, bred for the prefecture's junmai-leaning breweries.",ja:"純米志向の蔵が多い埼玉の県産品種。",zh:"埼玉的縣產品種，為該縣偏純米路線的酒藏而育成。"}],
            ["Gohyakumangoku","五百万石",{en:"Niigata",ja:"新潟",zh:"新潟"},{en:"1957. Second by area. Small hard core; clean, linear, dry.",ja:"1957年。作付第二位。心白は小さく硬い。清く直線的で辛口。",zh:"1957 年。作付第二。心白小而硬；潔淨、線條分明、辛口。"}],
            ["Koshi Tanrei","越淡麗",{en:"Niigata",ja:"新潟",zh:"新潟"},{en:"2004, Yamada Nishiki × Gohyakumangoku. Niigata clarity with more mid-palate weight.",ja:"2004年、山田錦×五百万石。新潟の清澄さに中盤の厚みを加える。",zh:"2004 年，山田錦 × 五百萬石。兼具新潟的澄澈與更厚的中段。"}],
            ["Wakamizu","若水",{en:"Aichi",ja:"愛知",zh:"愛知"},{en:"The first sake rice bred outside the traditional western heartland; widely grown in Tōkai.",ja:"伝統的な西日本の中心地の外で育成された最初の酒米。東海で広く栽培される。",zh:"最早在傳統西日本核心區之外育成的酒米；於東海地區廣泛栽培。"}],
            ["Yamada Nishiki","山田錦",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},{en:"Crossed 1923, named 1936. About a third of the crop; the Toku-A plots are the most expensive rice in Japan.",ja:"1923年交配、1936年命名。作付の約三分の一。特A地区の米は日本で最も高価。",zh:"1923 年雜交、1936 年命名。約占作付三分之一；特 A 地區之米為日本最昂貴的稻米。"}],
            ["Yamada-ho","山田穂",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},{en:"The mother of Yamada Nishiki; an heirloom, nearly lost and now grown again in small quantity.",ja:"山田錦の母。在来種であり、ほぼ失われたのち少量ながら再び栽培されている。",zh:"山田錦之母；在來種，一度幾近失傳，如今又有少量栽培。"}],
            ["Aiyama","愛山",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},{en:"1949, with Omachi in its ancestry. Very large core, dissolves fast; dense, sweet, high acid.",ja:"1949年、祖先に雄町をもつ。心白が非常に大きく溶けが速い。濃密で甘く、酸が高い。",zh:"1949 年，祖系含雄町。心白極大、溶解快速；濃密、甘美、高酸。"}],
            ["Tamazakae","玉栄",{en:"Shiga · Tottori",ja:"滋賀・鳥取",zh:"滋賀・鳥取"},{en:"Soft-textured, savoury, smooth. The backbone of Shiga brewing.",ja:"柔らかな質感、滋味、滑らかさ。滋賀の造りを支える。",zh:"質地柔軟、富旨味、滑順。滋賀釀造的骨幹。"}],
            ["Omachi","雄町",{en:"Okayama",ja:"岡山",zh:"岡山"},{en:"Found 1859, pure-line selected 1922. The only surviving pre-modern landrace; ancestor of most modern varieties.",ja:"1859年に見出され、1922年に純系分離。現存する唯一の前近代在来種であり、現代品種の多くの祖先。",zh:"1859 年發現、1922 年純系分離。唯一存續的前近代在來種；多數現代品種的祖先。"}],
            ["Gōriki","強力",{en:"Tottori",ja:"鳥取",zh:"鳥取"},{en:"A tall pre-war heirloom, extinct commercially by the 1950s and revived in the 1980s. Broad and firm.",ja:"背の高い戦前の在来種。1950年代には商業的に絶えたが1980年代に復活。広く硬質。",zh:"高稈的戰前在來種，1950 年代商業上絕跡，1980 年代復育。寬闊而結實。"}],
            ["Hattan Nishiki","八反錦",{en:"Hiroshima",ja:"広島",zh:"廣島"},{en:"1970s. Medium-bodied, soft-textured, gently earthy — the rice of Hiroshima's soft-water method.",ja:"1970年代。中庸の厚みと柔らかな質感、穏やかな土の香。広島の軟水醸造の米。",zh:"1970 年代。中等酒體、質地柔軟、帶溫和土氣——廣島軟水釀造之米。"}],
            ["Senbon Nishiki","千本錦",{en:"Hiroshima",ja:"広島",zh:"廣島"},{en:"A Yamada Nishiki cross bred to ripen in Hiroshima's shorter season.",ja:"広島の短い生育期間に合わせて育成された山田錦系。",zh:"為配合廣島較短的生育期而育成的山田錦系品種。"}],
            ["Saito no Shizuku","西都の雫",{en:"Yamaguchi",ja:"山口",zh:"山口"},{en:"Yamaguchi's own; a response to the prefecture's sudden demand for daiginjō-grade rice.",ja:"山口の県産米。大吟醸用米への急激な需要への対応として育成された。",zh:"山口的縣產米；為因應該縣對大吟釀級用米的驟增需求而育成。"}],
            ["Gin no Yume","吟の夢",{en:"Kōchi",ja:"高知",zh:"高知"},{en:"Bred for Kōchi's warm climate and paired with the prefecture's high-ester yeasts.",ja:"温暖な高知の気候に合わせて育成され、県産の高エステル酵母と組み合わされる。",zh:"為高知的溫暖氣候育成，並與該縣的高酯酵母搭配。"}],
            ["Shizuku-hime","しずく媛",{en:"Ehime",ja:"愛媛",zh:"愛媛"},{en:"Ehime's own; soft and food-oriented.",ja:"愛媛の県産米。柔らかく、食に寄り添う。",zh:"愛媛的縣產米；柔軟且以佐餐為取向。"}],
            ["Gin no Sato","吟のさと",{en:"Fukuoka · Kyushu",ja:"福岡・九州",zh:"福岡・九州"},{en:"A Yamada Nishiki descendant bred to stand up in Kyushu conditions.",ja:"九州の条件で倒伏しにくいよう育成された山田錦の後裔。",zh:"為在九州條件下不易倒伏而育成的山田錦後代。"}],
            ["Saga no Hana","さがの華",{en:"Saga",ja:"佐賀",zh:"佐賀"},{en:"Saga's own variety; part of the prefecture's GI production standard.",ja:"佐賀の県産品種。県のGI生産基準にも組み込まれている。",zh:"佐賀的縣產品種；亦納入該縣的 GI 生產基準。"}],
            ["Shinriki","神力",{en:"Kyushu · western Japan",ja:"九州・西日本",zh:"九州・西日本"},{en:"A Meiji-era heirloom once grown across western Japan, now revived by a few breweries.",ja:"明治期に西日本一帯で作られた在来種。現在は少数の蔵が復活させている。",zh:"明治時期曾遍植西日本的在來種，如今由少數酒藏復育。"}],
            ["Table rice",{en:"飯米",ja:"飯米",zh:"飯米"},{en:"nationwide",ja:"全国",zh:"全國"},{en:"Koshihikari, Hitomebore, Akitakomachi and others. Around two-thirds of all rice used for sake, mostly in futsūshu, but used deliberately at premium level by a few houses.",ja:"コシヒカリ、ひとめぼれ、あきたこまち等。日本酒に使われる米のおよそ三分の二を占め、多くは普通酒だが、意図的に上位商品へ用いる蔵も少数ある。",zh:"越光、一見鍾情、秋田小町等。約占釀酒用米的三分之二，多用於普通酒，惟少數酒藏刻意用於高階產品。"}]
          ] }
      ]
    },

    { t:"section", id:"yeast",
      title:{ en:"Yeast library", ja:"酵母一覧", zh:"酵母一覽" }, jp:"酵母",
      body:[
        { t:"table",
          cols:[{en:"Strain",ja:"酵母",zh:"菌株"},{en:"From",ja:"由来",zh:"來源"},{en:"Aroma",ja:"香り",zh:"香氣"},{en:"Acid",ja:"酸",zh:"酸"},{en:"Typical use",ja:"主な用途",zh:"主要用途"}],
          rows:[
            ["No. 6 · 六号",{en:"Aramasa, Akita",ja:"新政（秋田）",zh:"新政（秋田）"},{en:"restrained",ja:"控えめ",zh:"內斂"},{en:"moderate",ja:"中庸",zh:"中等"},{en:"Clean savoury junmai; the oldest strain still distributed.",ja:"清らかで滋味のある純米。現在も頒布される最古の株。",zh:"潔淨而富旨味的純米；至今仍在流通的最古老菌株。"}],
            ["No. 7 · 七号",{en:"Masumi, Nagano",ja:"真澄（長野）",zh:"真澄（長野）"},{en:"isoamyl — banana",ja:"酢酸イソアミル系",zh:"乙酸異戊酯系"},{en:"moderate",ja:"中庸",zh:"中等"},{en:"The industry workhorse for decades; vigorous and dependable.",ja:"数十年にわたる業界の主力。旺盛で確実。",zh:"數十年來的業界主力；發酵旺盛可靠。"}],
            ["No. 9 · 九号",{en:"Kumamoto",ja:"熊本",zh:"熊本"},{en:"high, floral",ja:"高く華やか",zh:"高昂、花香"},{en:"low",ja:"低い",zh:"低"},{en:"The yeast that made competition ginjō possible.",ja:"鑑評会の吟醸を可能にした酵母。",zh:"使鑑評會吟釀成為可能的酵母。"}],
            ["No. 10 · 十号",{en:"Tōhoku (Ogawa)",ja:"東北（小川）",zh:"東北（小川）"},{en:"high, delicate",ja:"高く繊細",zh:"高昂、細緻"},{en:"very low",ja:"非常に低い",zh:"非常低"},{en:"Slow, quiet, high-toned sake.",ja:"遅く、静かで、音域の高い酒。",zh:"緩慢、安靜、音域偏高的酒。"}],
            ["No. 14 · 十四号",{en:"Kanazawa",ja:"金沢",zh:"金澤"},{en:"banana and cream",ja:"バナナとクリーム",zh:"香蕉與奶油"},{en:"low",ja:"低い",zh:"低"},{en:"Well behaved at low temperature.",ja:"低温での挙動が素直。",zh:"低溫下表現溫馴。"}],
            ["No. 1501 · AK-1",{en:"Akita",ja:"秋田",zh:"秋田"},{en:"ethyl caproate — apple",ja:"カプロン酸エチル系",zh:"己酸乙酯系"},{en:"low",ja:"低い",zh:"低"},{en:"Behind many aromatic Tōhoku daiginjō.",ja:"香り高い東北の大吟醸の多くを支える。",zh:"眾多芳香型東北大吟釀的幕後。"}],
            ["No. 1601",{en:"Brewing Society",ja:"日本醸造協会",zh:"日本釀造協會"},{en:"very high caproate",ja:"カプロン酸エチルが非常に高い",zh:"己酸乙酯極高"},{en:"low",ja:"低い",zh:"低"},{en:"The first strain bred explicitly for aroma output.",ja:"香気生成量そのものを目的に育種された最初の株。",zh:"第一個明確為香氣產量而育成的菌株。"}],
            ["No. 1801",{en:"1601 × 9",ja:"1601号×九号",zh:"1601 × 九號"},{en:"both esters, very high",ja:"両系統のエステルが非常に高い",zh:"兩類酯皆極高"},{en:"low",ja:"低い",zh:"低"},{en:"Dominates national competition entries; the reason recent gold medals smell alike.",ja:"全国新酒鑑評会の出品酒を席巻。近年の金賞酒の香りが似通う原因。",zh:"主導全國鑑評會參賽酒；近年金賞酒香氣趨同的原因。"}],
            ["No. 1901",{en:"from 1801",ja:"1801号より育種",zh:"自 1801 育成"},{en:"more isoamyl, less caproate",ja:"酢酸イソアミル寄り",zh:"偏乙酸異戊酯"},{en:"low",ja:"低い",zh:"低"},{en:"Lower urea in the mash than 1801.",ja:"醪中の尿素が1801号より少ない。",zh:"醪中尿素低於 1801。"}],
            ["Foamless · 泡なし",{en:"601, 701, 901, 1001, 1401",ja:"601・701・901・1001・1401",zh:"601、701、901、1001、1401"},{en:"as parent",ja:"親株と同じ",zh:"同親株"},{en:"as parent",ja:"親株と同じ",zh:"同親株"},{en:"Non-foaming mutants; free 20–30% of tank volume.",ja:"泡を作らない変異株。タンク容積の20〜30%を解放する。",zh:"不起泡的突變株；釋出 20–30% 槽容。"}],
            ["Shizuoka NEW-5 · HD-1",{en:"Shizuoka",ja:"静岡",zh:"靜岡"},{en:"restrained, clean",ja:"控えめで清らか",zh:"內斂潔淨"},{en:"low",ja:"低い",zh:"低"},{en:"Defines the Shizuoka house style almost single-handedly.",ja:"静岡の酒質をほぼ単独で規定している。",zh:"幾乎憑一己之力界定了靜岡的酒質風格。"}],
            ["Yamagata KA",{en:"Yamagata",ja:"山形",zh:"山形"},{en:"high, precise",ja:"高く精緻",zh:"高昂、精確"},{en:"low",ja:"低い",zh:"低"},{en:"Part of Yamagata's all-local rice-yeast-kōji programme.",ja:"山形の県産米・酵母・麹による計画の一部。",zh:"山形「縣產米—酵母—麴」計畫的一環。"}],
            ["Fukushima Utsukushima Yume",{en:"Fukushima",ja:"福島",zh:"福島"},{en:"high, clean",ja:"高く清らか",zh:"高昂潔淨"},{en:"low",ja:"低い",zh:"低"},{en:"Behind Fukushima's long run of gold medals.",ja:"福島の金賞受賞の連続を支える。",zh:"支撐福島金賞連霸的幕後。"}],
            ["Kōchi CEL-19 · CEL-24",{en:"Kōchi",ja:"高知",zh:"高知"},{en:"extremely high caproate",ja:"カプロン酸エチルが極めて高い",zh:"己酸乙酯極高"},{en:"high",ja:"高い",zh:"高"},{en:"Low-alcohol, sweet, intensely fruity styles — furthest from the classical profile of any strain in use.",ja:"低アルコールで甘く、強烈に果実的な酒質。現行の酵母のなかで古典的な像から最も遠い。",zh:"低酒精、甘甜、果味濃烈的風格——現行菌株中距古典形象最遠者。"}],
            ["Flower yeasts · 花酵母",{en:"Tokyo Univ. of Agriculture",ja:"東京農業大学",zh:"東京農業大學"},{en:"varies by flower",ja:"花によって異なる",zh:"因花而異"},{en:"varies",ja:"様々",zh:"各異"},{en:"Isolated from nadeshiko, begonia, abelia, marigold, rhododendron and others.",ja:"ナデシコ、ベゴニア、アベリア、マリーゴールド、シャクナゲなどから分離。",zh:"自撫子、秋海棠、六道木、金盞花、杜鵑等分離而得。"}],
            ["House strains · 蔵付き",{en:"the brewery itself",ja:"蔵そのもの",zh:"酒藏本身"},{en:"unpredictable",ja:"予測できない",zh:"難以預測"},{en:"often high",ja:"高いことが多い",zh:"多半偏高"},{en:"Resident wild yeast; used deliberately by a small number of houses.",ja:"蔵付きの野生酵母。少数の蔵が意図的に用いる。",zh:"藏內常駐野生酵母；少數酒藏刻意使用。"}]
          ] }
      ]
    },

    { t:"section", id:"temps",
      title:{ en:"Temperatures", ja:"温度", zh:"溫度" }, jp:"温度呼称",
      body:[
        { t:"table",
          cols:[{en:"°C",ja:"℃",zh:"°C"},{en:"Name",ja:"呼称",zh:"名稱"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Suits",ja:"向く酒",zh:"適合"}],
          numCols:[0], jpCols:[2],
          rows:[
            ["5","Yuki-hie","雪冷え",{en:"sparkling; anything too sweet or too heavy",ja:"発泡性。甘すぎるもの、重すぎるもの",zh:"氣泡酒；過甜或過重者"}],
            ["10","Hana-hie","花冷え",{en:"aromatic ginjō and daiginjō",ja:"香り高い吟醸・大吟醸",zh:"芳香型吟釀與大吟釀"}],
            ["15","Suzu-hie","涼冷え",{en:"junmai ginjō; good nama",ja:"純米吟醸、良質な生酒",zh:"純米吟釀；優質生酒"}],
            ["20","Hiya","冷や",{en:"room temperature — historically means “unheated”",ja:"常温。歴史的には「燗をしていない」の意",zh:"常溫——歷史上意指「未加熱」"}],
            ["30","Hinata-kan","日向燗",{en:"acid begins to soften",ja:"酸が和らぎ始める",zh:"酸度開始柔化"}],
            ["35","Hitohada-kan","人肌燗",{en:"sweetness perception peaks; rice and kōji come forward",ja:"甘味の知覚が最大に。米と麹が前に出る",zh:"甜味感知達峰；米與麴前傾"}],
            ["40","Nuru-kan","ぬる燗",{en:"junmai, kimoto, yamahai at their fullest",ja:"純米・生酛・山廃が最も充実する",zh:"純米、生酛、山廢最為飽滿"}],
            ["45","Jō-kan","上燗",{en:"rich junmai and koshu",ja:"厚みのある純米、古酒",zh:"厚實純米與古酒"}],
            ["50","Atsu-kan","熱燗",{en:"sharp and dry; very savoury food",ja:"鋭く辛い。滋味の強い料理に",zh:"銳利辛口；搭配鮮味濃郁的食物"}],
            ["55+","Tobikiri-kan","飛び切り燗",{en:"robust futsūshu; above 60 °C most character is gone",ja:"骨太な普通酒。60℃を超えると個性の大半は失われる",zh:"厚實普通酒；超過 60°C 個性所剩無幾"}]
          ] }
      ]
    },

    { t:"section", id:"units",
      title:{ en:"Measures and eras", ja:"単位と和暦", zh:"單位與年號" }, jp:"換算",
      body:[
        { t:"figure",
          caption:{
            en:"The ladder of measures, on a scale where every step of ten is the same distance. Five traditional units span four decades from a mouthful to a year's rice, and every one of them is exactly ten of the one before — which is why a 1.8 L bottle is called a shō bottle and a brewery's output is still counted in koku. The bottles actually on a shelf today occupy a narrow part of that range: everything sold is between a tenth of a litre and two litres.",
            ja:"容量の階梯を、十倍ごとに等間隔となる尺度の上に置いたもの。五つの伝統的な単位は、一口から一年分の米まで四桁にわたり、そのいずれもが一つ前の単位のちょうど十倍である。一升瓶が一升瓶と呼ばれ、蔵の生産量がいまも石で数えられるのは、このためである。今日の棚に実際に並ぶ瓶は、その範囲の狭い一部を占めるにすぎない。売られているものはすべて、一リットルの十分の一から二リットルのあいだにある。",
            zh:"容量的階梯，置於每十倍等距的尺度上。五個傳統單位橫跨四個數量級——從一口到一人一年的米——而每一級都恰好是前一級的十倍。這正是 1.8 公升的瓶子被稱作一升瓶、酒藏產量至今仍以石計算的原因。今天實際擺在架上的瓶子只占這個範圍中很窄的一段：所有在售的規格，都落在零點一公升到兩公升之間。" },
          svg: function (lang, L) {
            var W = 760, H = 306, X0 = 62, X1 = 700;
            function x(v) { return X0 + (Math.log(v) / Math.LN10 + 2) / 5 * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, dec = [[0.01, "10 mL"], [0.1, "100 mL"], [1, "1 L"], [10, "10 L"], [100, "100 L"], [1000, "1,000 L"]];
            for (i = 0; i < dec.length; i++) {
              s += '<line x1="' + x(dec[i][0]).toFixed(1) + '" y1="116" x2="' + x(dec[i][0]).toFixed(1) + '" y2="238" stroke="#EFEDE7"/>';
              s += '<text x="' + x(dec[i][0]).toFixed(1) + '" y="252" text-anchor="middle" font-size="9" fill="#B4AEA4">' + dec[i][1] + '</text>';
            }
            s += '<text x="' + X0 + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "伝統的な容量・一段ごとに十倍" : lang === "zh" ? "傳統容量・每級為前一級的十倍" : "TRADITIONAL MEASURES — EACH TEN TIMES THE LAST") + '</text>';
            var un = [
              { v:0.018, k:"勺", r:"shaku", m:"18 mL" },
              { v:0.18,  k:"合", r:"gō",    m:"180 mL" },
              { v:1.8,   k:"升", r:"shō",   m:"1.8 L" },
              { v:18,    k:"斗", r:"to",    m:"18 L" },
              { v:180,   k:"石", r:"koku",  m:"180 L" },
              { v:1000,  k:"kL", r:"kirorittoru", m:"1,000 L" }
            ];
            s += '<line x1="' + X0 + '" y1="120" x2="' + X1 + '" y2="120" stroke="#B4AC9C"/>';
            for (i = 0; i < un.length; i++) {
              var ux = x(un[i].v);
              s += '<rect x="' + (ux - 3.5).toFixed(1) + '" y="116.5" width="7" height="7" fill="#7C6B52"/>';
              s += '<text x="' + ux.toFixed(1) + '" y="86" text-anchor="middle" font-size="' + (i === 5 ? 12 : 16) + '" fill="#201E1B">' + un[i].k + '</text>';
              if (i < 5) s += '<text x="' + ux.toFixed(1) + '" y="99" text-anchor="middle" font-size="9" fill="#8B857C">' + un[i].r + '</text>';
              s += '<text x="' + ux.toFixed(1) + '" y="111" text-anchor="middle" font-size="9.5" fill="#6B655C">' + un[i].m + '</text>';
            }
            for (i = 0; i < un.length - 1; i++) {
              var a = x(un[i].v), b = x(un[i + 1].v), mid = (a + b) / 2;
              s += '<line x1="' + (a + 14).toFixed(1) + '" y1="62" x2="' + (b - 14).toFixed(1) + '" y2="62" stroke="#DED8CB"/>';
              s += '<line x1="' + (a + 14).toFixed(1) + '" y1="58" x2="' + (a + 14).toFixed(1) + '" y2="66" stroke="#DED8CB"/>';
              s += '<line x1="' + (b - 14).toFixed(1) + '" y1="58" x2="' + (b - 14).toFixed(1) + '" y2="66" stroke="#DED8CB"/>';
              s += '<rect x="' + (mid - 15) + '" y="54" width="30" height="16" fill="#F8F6F1"/>';
              s += '<text x="' + mid.toFixed(1) + '" y="66" text-anchor="middle" font-size="10" fill="#8B857C">' + (i === 4 ? "×5.6" : "×10") + '</text>';
            }
            s += '<text x="' + X0 + '" y="152" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "今日の棚に並ぶ瓶" : lang === "zh" ? "今日市售的瓶裝規格" : "BOTTLE SIZES ON SALE TODAY") + '</text>';
            s += '<line x1="' + X0 + '" y1="172" x2="' + X1 + '" y2="172" stroke="#DED8CB"/>';
            var bo = [
              { v:0.18, t:"180 mL · 一合瓶 · ワンカップ" },
              { v:0.3,  t:"300 mL · 三百ミリ" },
              { v:0.72, t:"720 mL · 四合瓶" },
              { v:1.8,  t:"1,800 mL · 一升瓶" }
            ];
            for (i = 0; i < bo.length; i++) {
              var bx = x(bo[i].v), by = 190 + i * 14;
              s += '<rect x="' + (bx - 2.5).toFixed(1) + '" y="169.5" width="5" height="5" fill="#B09E7C"/>';
              s += '<line x1="' + bx.toFixed(1) + '" y1="176" x2="' + bx.toFixed(1) + '" y2="' + (by - 4) + '" stroke="#E4E0D6"/>';
              s += '<line x1="' + bx.toFixed(1) + '" y1="' + (by - 4) + '" x2="' + (bx + 6).toFixed(1) + '" y2="' + (by - 4) + '" stroke="#E4E0D6"/>';
              s += '<text x="' + (bx + 10).toFixed(1) + '" y="' + by + '" font-size="10" fill="#6B655C">' + bo[i].t + '</text>';
            }
            var fn = (lang === "ja" ? ["石は一人が一年に食べる米の量に由来する古い単位であり、蔵の規模はいまもこれで語られる。", "小さな蔵は年に数百石、大きな蔵は数万石を造る。"]
                      : lang === "zh" ? ["石是源自一人一年食米量的古老單位，至今仍用來描述酒藏規模：", "小酒藏一年數百石，大酒藏則以數萬石計。"]
                      : ["The koku began as a year's rice for one person, and breweries are still sized in it —",
                         "a few hundred koku a year for a small house, tens of thousands for a large one."]);
            for (i = 0; i < fn.length; i++) s += '<text x="' + X0 + '" y="' + (H - 26 + i * 13) + '" font-size="9.5" fill="#8B857C">' + fn[i] + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"h3", text:{en:"Traditional volume",ja:"伝統的な容量",zh:"傳統容量"} },
        { t:"table",
          cols:[{en:"Unit",ja:"単位",zh:"單位"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Metric",ja:"メートル法",zh:"公制"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[1], numCols:[2],
          rows:[
            ["shaku","勺","18 mL",{en:"A mouthful. Ten to the gō.",ja:"一口分。十勺で一合。",zh:"約一口之量。十勺為一合。"}],
            ["gō","合","180 mL",{en:"The standard serving. A masu holds one gō, and so does an ochoko set refilled three or four times.",ja:"標準の一人前。枡一杯が一合であり、お猪口を三、四度満たした量にあたる。",zh:"標準的一人份。一枡即一合，約等於豬口斟滿三四次之量。"}],
            ["shō","升","1.8 L",{en:"Ten gō. The isshōbin, the classic large bottle.",ja:"十合。一升瓶という古典的な大瓶の容量。",zh:"十合。即一升瓶，經典的大瓶容量。"}],
            ["to","斗","18 L",{en:"Ten shō. The size of the traditional wooden cask unit.",ja:"十升。伝統的な樽の単位に対応する。",zh:"十升。對應傳統木樽的單位。"}],
            ["koku","石","180 L",{en:"Ten to. Historically the rice needed to feed one person for a year, and still the unit in which brewery scale is discussed.",ja:"十斗。歴史的には一人が一年に食べる米の量であり、いまも蔵の規模を語る単位である。",zh:"十斗。歷史上為一人一年所需之米量，至今仍是談論酒藏規模的單位。"}],
            ["kL","キロリットル","1,000 L",{en:"The unit of national statistics. One kL is about 5.6 koku.",ja:"国の統計で用いる単位。1kLはおよそ5.6石。",zh:"國家統計所用單位。1 公秉約合 5.6 石。"}]
          ] },
        { t:"h3", text:{en:"Bottle sizes",ja:"瓶のサイズ",zh:"瓶裝規格"} },
        { t:"table",
          cols:[{en:"Size",ja:"容量",zh:"容量"},{en:"Name",ja:"呼称",zh:"名稱"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[0], jpCols:[1],
          rows:[
            ["180 mL","一合瓶 · ワンカップ",{en:"Single serving. The one-cup glass was introduced in 1964 and changed how sake was sold in Japan.",ja:"一人前。ワンカップは1964年に登場し、日本での売られ方を変えた。",zh:"單杯份。One Cup 於 1964 年問世，改變了日本清酒的銷售方式。"}],
            ["300 mL","三百ミリ",{en:"Convenience size, increasingly common for premium sake sold to be drunk fresh.",ja:"手頃な容量。新鮮なうちに飲む上位商品でも増えている。",zh:"便利容量；在強調趁鮮飲用的高階酒中日益常見。"}],
            ["720 mL","四合瓶",{en:"Four gō. The standard retail unit today.",ja:"四合。今日の小売の標準単位。",zh:"四合。今日零售的標準單位。"}],
            ["1,800 mL","一升瓶",{en:"Ten gō. Introduced 1901; thick dark glass and little headspace make it the best format for keeping sake.",ja:"十合。1901年に登場。厚い濃色ガラスとヘッドスペースの少なさで、保存に最も優れる。",zh:"十合。1901 年問世；厚實深色玻璃與極小頂隙，最利於保存。"}]
          ] },
        { t:"h3", text:{en:"Japanese era years",ja:"和暦西暦対照",zh:"日本年號西元對照"} },
        { t:"p", text:{
          en:"Production dates on Japanese labels use era years. To convert: add the constant to the era number. <code>令和 + 2018</code>, <code>平成 + 1988</code>, <code>昭和 + 1925</code>, <code>大正 + 1911</code>, <code>明治 + 1867</code>.",
          ja:"日本のラベルの製造年月は和暦で記される。換算は、元号の年数に定数を加える。<code>令和＋2018</code>、<code>平成＋1988</code>、<code>昭和＋1925</code>、<code>大正＋1911</code>、<code>明治＋1867</code>。",
          zh:"日本酒標上的製造年月使用年號紀年。換算方式：年號年數加上常數。<code>令和＋2018</code>、<code>平成＋1988</code>、<code>昭和＋1925</code>、<code>大正＋1911</code>、<code>明治＋1867</code>。" } },
        { t:"table",
          cols:[{en:"Era",ja:"元号",zh:"年號"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Year 1",ja:"元年",zh:"元年"},{en:"Last year",ja:"最終年",zh:"末年"},{en:"Add",ja:"加える数",zh:"加數"}],
          jpCols:[1], numCols:[2,3,4],
          rows:[
            ["Meiji","明治","1868","1912 (45)","+1867"],
            ["Taishō","大正","1912","1926 (15)","+1911"],
            ["Shōwa","昭和","1926","1989 (64)","+1925"],
            ["Heisei","平成","1989","2019 (31)","+1988"],
            ["Reiwa","令和","2019",{en:"current",ja:"現行",zh:"現行"},"+2018"]
          ] },
        { t:"note", label:{en:"Worked example",ja:"例",zh:"範例"}, text:{
          en:"A back label reading 製造年月 令和7年3月 means March 2025 — 7 + 2018. If the same bottle also says 生酒 and 要冷蔵, then in late 2026 it is well past its best. If it says neither, and it is a junmai, it may be better than it was.",
          ja:"裏ラベルに「製造年月 令和7年3月」とあれば、7＋2018で2025年3月である。同じ瓶に「生酒」「要冷蔵」ともあれば、2026年の暮れには盛りを過ぎている。いずれの表示もない純米であれば、当時よりも良くなっている可能性がある。",
          zh:"背標寫著「製造年月 令和7年3月」，即 7＋2018＝2025 年 3 月。若同一瓶另標「生酒」與「要冷藏」，那麼到 2026 年底早已過了最佳狀態；若兩者皆無且為純米，則可能比當時更好。" } }
      ]
    },

{ t:"section", id:"kanji",
      title:{ en:"Label kanji, with readings", ja:"酒標の漢字と読み", zh:"酒標漢字與讀音" }, jp:"表示漢字一覧",
      body:[
        { t:"p", text:{
          en:"The characters that actually appear on Japanese bottles, in the order you are likeliest to meet them. A reader of Chinese will recognise most of the shapes; the readings and the meanings are where the two languages part company.",
          ja:"日本の瓶に実際に現れる文字を、出会う可能性の高い順に並べた。中国語の読み手は字形の多くを見知っているはずである。二つの言語が分かれるのは、読みと意味においてである。",
          zh:"實際出現在日本酒瓶上的字，依你最可能遇見的順序排列。中文讀者對多數字形都不陌生；兩種語言分道揚鑣之處，在於讀音與意義。" } },
        { t:"table",
          caption:{en:"Reading a Japanese sake label character by character",ja:"酒標を一字ずつ読む",zh:"逐字判讀日本酒標"},
          cols:[{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"What it tells you",ja:"意味するところ",zh:"它告訴你什麼"}],
          jpCols:[0],
          rows:[
            ["清酒","seishu",{en:"The legal category. If this word is absent, it is not sake under Japanese law.",ja:"法令上の品目。この語がなければ、日本の法において清酒ではない。",zh:"法定品目。若無此詞，依日本法便不是清酒。"}],
            ["日本酒","nihonshu",{en:"The same drink, and since 2015 a geographical indication reserved for sake brewed in Japan from Japanese rice.",ja:"同じ飲み物であり、二〇一五年以来、国産米を用い日本国内で醸された清酒に留保された地理的表示でもある。",zh:"同一種酒；自 2015 年起亦為地理標示，保留給在日本以國產米釀造的清酒。"}],
            ["純米","junmai",{en:"No distilled alcohol added. Rice, kōji and water only.",ja:"醸造アルコールを添加していない。米・米麹・水のみ。",zh:"未添加蒸餾酒精。僅有米、米麴與水。"}],
            ["吟醸","ginjō",{en:"Milled to 60% or less and brewed cold and slow.",ja:"精米歩合60%以下で、低温で長く醸したもの。",zh:"精米步合 60% 以下，並以低溫長時間釀造。"}],
            ["大吟醸","daiginjō",{en:"Milled to 50% or less.",ja:"精米歩合50%以下。",zh:"精米步合 50% 以下。"}],
            ["本醸造","honjōzō",{en:"A small, deliberate addition of distilled alcohol; milled to 70% or less.",ja:"少量の意図的なアルコール添加。精米歩合70%以下。",zh:"少量而刻意的酒精添加；精米步合 70% 以下。"}],
            ["特別","tokubetsu",{en:"“Special” — a claim the brewery must be able to justify, but which the law does not otherwise define.",ja:"「特別」。蔵が説明できねばならない主張だが、法はそれ以上の定義をしていない。",zh:"「特別」——酒藏必須能提出說明的主張，但法律未再進一步定義。"}],
            ["精米歩合","seimai-buai",{en:"Milling ratio: the percentage of the grain remaining. Lower means more removed.",ja:"精米歩合。粒の残った割合であり、数値が低いほど多く削られている。",zh:"精米步合：米粒殘留的百分比。數字越低代表削去越多。"}],
            ["原酒","genshu",{en:"Undiluted — usually 17–20% alcohol.",ja:"割水をしていない。多くは17〜20%。",zh:"未加水稀釋——通常酒精 17–20%。"}],
            ["生酒","namazake",{en:"Never pasteurised. Requires constant refrigeration.",ja:"一度も火入れをしていない。常に冷蔵を要する。",zh:"完全未經火入。需全程冷藏。"}],
            ["生貯蔵酒","nama-chozo",{en:"Stored unpasteurised, heated once at bottling.",ja:"生のまま貯蔵し、瓶詰め時に一度火入れ。",zh:"以生酒狀態貯藏，裝瓶時火入一次。"}],
            ["生詰酒","nama-zume",{en:"Heated once before storage, bottled without a second heating.",ja:"貯蔵前に一度火入れし、二度目をせずに瓶詰め。",zh:"貯藏前火入一次，裝瓶時不再加熱。"}],
            ["無濾過","muroka",{en:"No activated-carbon filtration. Nothing to do with cloudiness.",ja:"活性炭による濾過をしていない。濁りとは関係がない。",zh:"未經活性碳過濾。與混濁無關。"}],
            ["にごり酒","nigorizake",{en:"Coarsely filtered, so rice solids remain. Still legally seishu.",ja:"目の粗い漉しにより米の固形分が残る。法的にはなお清酒である。",zh:"粗濾使米固形物殘留。法律上仍屬清酒。"}],
            ["おりがらみ","origarami",{en:"Bottled with a little of the fine lees stirred back in.",ja:"細かい澱をいくらか戻して瓶詰めしたもの。",zh:"拌回少許細澱後裝瓶。"}],
            ["中取り","nakadori",{en:"Only the middle fraction of the pressing.",ja:"上槽の中間部分のみを採ったもの。",zh:"僅取上槽的中段。"}],
            ["荒走り","arabashiri",{en:"The first free-run fraction: lively, cloudy, often gassy.",ja:"最初に自然に流れ出る部分。生き生きとして濁り、しばしばガスを含む。",zh:"最初自然流出的部分：活潑、帶濁，常含氣。"}],
            ["袋吊り","fukurozuri",{en:"Drip-pressed under no pressure at all; competition-grade.",ja:"圧をかけずに吊るして滴らせたもの。鑑評会の水準。",zh:"完全不加壓、以懸吊滴取；鑑評會等級。"}],
            ["生酛","kimoto",{en:"The traditional starter, with lactic acid arriving naturally over four weeks.",ja:"伝統的な酒母。乳酸が四週間かけて自然に生じる。",zh:"傳統酒母，乳酸在四週間自然生成。"}],
            ["山廃","yamahai",{en:"Kimoto without the pole-mashing step; same microbiology, less labour.",ja:"山卸を省いた生酛。微生物学は同じで、労力が少ない。",zh:"省去山卸的生酛；微生物學相同，勞力較少。"}],
            ["速醸","sokujō",{en:"The modern starter, with lactic acid added directly. Safe, fast, and what most sake uses.",ja:"乳酸を直接加える近代の酒母。安全で速く、ほとんどの酒がこれを用いる。",zh:"直接添加乳酸的現代酒母。安全、快速，多數清酒都採用。"}],
            ["しぼりたて","shiboritate",{en:"Just pressed — a winter release, sold within weeks.",ja:"搾りたて。冬の出荷で、数週間のうちに売られる。",zh:"剛榨出——冬季出貨，數週內售出。"}],
            ["ひやおろし","hiyaoroshi",{en:"Rested through the summer and shipped in autumn without a second pasteurisation.",ja:"夏を越し、二度目の火入れをせずに秋に出荷する酒。",zh:"越夏後於秋季出貨，不再進行第二次火入。"}],
            ["古酒","koshu",{en:"Aged sake. In the tax sense merely carried over a year; in practice usually three or more.",ja:"熟成した酒。税法上は一年を越したものだが、実際には三年以上を指すことが多い。",zh:"熟成酒。稅法上僅指跨年者，實務上多指三年以上。"}],
            ["原材料名","genzairyō-mei",{en:"Ingredients. “米・米麹” alone means junmai composition.",ja:"原材料名。「米・米麹」のみであれば純米の組成である。",zh:"原材料名。僅列「米・米麹」即為純米組成。"}],
            ["醸造アルコール","jōzō-arukōru",{en:"Added distilled alcohol. “Jōzō” here means distilled, not brewed — a false friend for Chinese readers.",ja:"添加された醸造アルコール。ここでの「醸造」は蒸留を指し、醸すことではない。",zh:"添加的釀造酒精。此處的「釀造」指蒸餾所得，並非釀造——對中文讀者是個假朋友。"}],
            ["製造年月","seizō-nengetsu",{en:"Bottling date. Not a brewing date and not an expiry.",ja:"瓶詰めの年月。造った年月でも賞味期限でもない。",zh:"裝瓶年月。既非釀造年月，也不是保存期限。"}],
            ["醸造年度・BY","jōzō-nendo",{en:"Brewing year, 1 July to 30 June. 令和6BY is the 2024–25 season.",ja:"醸造年度。七月一日から六月三十日まで。令和6BYは二〇二四〜二五年度の造り。",zh:"釀造年度，自 7 月 1 日至 6 月 30 日。令和6BY 即 2024–25 年度。"}],
            ["要冷蔵","yō-reizō",{en:"Must be refrigerated. A statement of fact about the contents, not a suggestion.",ja:"要冷蔵。中身についての事実の記述であり、提案ではない。",zh:"須冷藏。這是關於內容物的事實陳述，而非建議。"}],
            ["日本酒度","nihonshu-do",{en:"Sake meter value — a density reading, not a sweetness measurement.",ja:"日本酒度。甘さではなく比重の測定値である。",zh:"日本酒度——比重讀數，而非甜度的測量。"}],
            ["酸度","sando",{en:"Acidity, typically 1.0–2.0. Read it together with the sake meter value.",ja:"酸度。おおむね1.0〜2.0。日本酒度と併せて読む。",zh:"酸度，通常 1.0–2.0。須與日本酒度一併判讀。"}],
            ["アミノ酸度","amino-sando",{en:"Amino acidity, 0.8–2.0. Body and savour; falls as milling rises.",ja:"アミノ酸度。0.8〜2.0。厚みと旨味を示し、精米が進むほど下がる。",zh:"胺基酸度，0.8–2.0。代表酒體與旨味；隨精米提高而下降。"}],
            ["杜氏","tōji",{en:"The master brewer. If a name follows it, that is the person responsible.",ja:"杜氏。名が続いていれば、それが責任者である。",zh:"杜氏（釀造師）。若其後接人名，那便是負責人。"}],
            ["蔵元","kuramoto",{en:"The owning house — not necessarily the brand name.",ja:"蔵元。銘柄名とは限らない。",zh:"藏元（擁有酒藏的家族）——未必等於品牌名。"}],
            ["限定","gentei",{en:"Limited release. Says nothing about quality by itself.",ja:"限定。それ自体は品質について何も語らない。",zh:"限定。本身不說明品質。"}]
          ] }
      ]
    },

    { t:"section", id:"conversions",
      title:{ en:"Units and conversions", ja:"単位と換算", zh:"單位與換算" }, jp:"尺貫法と現代",
      body:[
        { t:"p", text:{
          en:"Japanese brewing still uses the pre-metric volume units for scale and for tradition, and a reader will meet them on bottles, in brewery interviews and in statistics.",
          ja:"日本の酒造りは、規模を語るときにも伝統においても、いまなお尺貫法の容量の単位を用いる。瓶の上でも、蔵の語りのなかでも、統計のなかでも、読み手はそれに出会う。",
          zh:"日本釀酒在談規模與依循傳統時，仍使用公制之前的容量單位；讀者會在酒瓶上、酒藏訪談中與統計資料裡遇見它們。" } },
        { t:"table",
          cols:[{en:"Unit",ja:"単位",zh:"單位"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Metric",ja:"メートル法",zh:"公制"},{en:"Where you meet it",ja:"出会う場面",zh:"出現場合"}],
          jpCols:[1],
          rows:[
            [{en:"Shaku",ja:"勺",zh:"勺"},"勺","18.04 ml",
             {en:"A mouthful. Rarely used now except in old texts.",ja:"ひと口ほど。いまは古い文献のほかではまれである。",zh:"約一口。如今除古籍外少用。"}],
            [{en:"Gō",ja:"合",zh:"合"},"合","180.4 ml",
             {en:"The standard serving. A tokkuri holds one or two; a rice cooker cup is the same measure.",ja:"標準の一人前。徳利は一合か二合、炊飯器の計量カップも同じ量である。",zh:"標準單份。一支德利裝一至二合；電子鍋的量米杯也是同一單位。"}],
            [{en:"Shō",ja:"升",zh:"升"},"升","1.804 L",
             {en:"Ten gō. The <em>isshōbin</em>, the big 1.8-litre bottle, is one shō.",ja:"十合。一升瓶、すなわち1.8リットルの大瓶が一升である。",zh:"十合。所謂「一升瓶」（1.8 公升大瓶）即為一升。"}],
            [{en:"To",ja:"斗",zh:"斗"},"斗","18.04 L",
             {en:"Ten shō. The size of a traditional carrying cask.",ja:"十升。伝統的な担ぎ樽の大きさである。",zh:"十升。傳統扛運木樽的容量。"}],
            [{en:"Koku",ja:"石",zh:"石"},"石","180.39 L",
             {en:"Ten to, or a hundred isshōbin. The unit of brewery scale: 300 koku is a family, 10,000 is a company.",ja:"十斗、すなわち一升瓶百本。蔵の規模の単位である。三百石なら家族、一万石なら会社である。",zh:"十斗，即一百支一升瓶。酒藏規模的單位：三百石是一個家庭，一萬石是一家公司。"}],
            [{en:"Yon-gō bin",ja:"四合瓶",zh:"四合瓶"},"四合瓶","720 ml",
             {en:"The standard retail bottle, and the right size for anything you will not finish in one sitting.",ja:"小売の標準の瓶。一度で飲み切らないものには、この大きさが正しい。",zh:"零售的標準瓶；凡是不會一次喝完的酒，這個容量最合適。"}],
            [{en:"Isshōbin",ja:"一升瓶",zh:"一升瓶"},"一升瓶","1,800 ml",
             {en:"The large bottle. Cheaper per millilitre, harder to store cold, and a commitment.",ja:"大瓶。ミリリットルあたりは安いが、冷やして保つのは難しく、覚悟が要る。",zh:"大瓶。每毫升較便宜，但冷藏保存不易，且需要一點決心。"}]
          ] },
        { t:"table",
          caption:{en:"Alcohol arithmetic",ja:"アルコールの計算",zh:"酒精換算"},
          cols:[{en:"Serving",ja:"量",zh:"份量"},{en:"At 15%",ja:"15%の場合",zh:"15% 時"},{en:"Roughly equivalent to",ja:"おおよその相当",zh:"大致相當於"}],
          rows:[
            [{en:"One gō, 180 ml",ja:"一合・180ml",zh:"一合・180 ml"},{en:"about 22 g of alcohol",ja:"アルコール約22グラム",zh:"約 22 公克酒精"},
             {en:"Two standard glasses of wine, or a little over a pint of beer.",ja:"ワインの標準的なグラス二杯、あるいはビール中瓶一本強。",zh:"兩標準杯葡萄酒，或略多於一品脫啤酒。"}],
            [{en:"A 720 ml bottle",ja:"四合瓶一本",zh:"一支 720 ml"},{en:"about 86 g",ja:"約86グラム",zh:"約 86 公克"},
             {en:"A full bottle of wine and a half. Shared between two people over a long dinner.",ja:"ワイン一本半。長い夕食を二人で分ける量である。",zh:"一瓶半葡萄酒。適合兩人在一頓長晚餐間分享。"}],
            [{en:"A 1.8 L bottle",ja:"一升瓶一本",zh:"一支 1.8 L"},{en:"about 216 g",ja:"約216グラム",zh:"約 216 公克"},
             {en:"Not a single-occasion quantity for one person under any circumstances.",ja:"いかなる場合でも、一人が一度に飲む量ではない。",zh:"無論在什麼情況下，都不是一個人單次該喝的量。"}]
          ] },
        { t:"tiny", text:{
          en:"Grams of alcohol = volume in ml × ABV% × 0.8 ÷ 100. National low-risk guidelines differ; several now advise that less is better and that alcohol-free days matter as much as weekly totals.",
          ja:"アルコールのグラム数＝容量（ml）×度数（%）×0.8÷100。低危険とされる指針は国により異なり、少ないほど良く、休肝日は週の総量と同じくらい重要だとするものも増えている。",
          zh:"酒精公克數＝容量（ml）× 酒精度（%）× 0.8 ÷ 100。各國的低風險指引不一，且已有多國建議「越少越好」，並認為無酒精日與每週總量同等重要。" } }
      ]
    },

{ t:"section", id:"smv-gravity",
      title:{ en:"Sake meter value and specific gravity", ja:"日本酒度と比重", zh:"日本酒度與比重" }, jp:"換算",
      body:[
        { t:"p", text:{
          en:"The sake meter value is a rescaled specific gravity, not an independent measurement. The relation is exact: <em>nihonshu-do</em> = (1 ÷ d − 1) × 1443, where d is the specific gravity of the sake at 15 °C against water at 4 °C. Rearranged, d = 1443 ÷ (1443 + SMV). Zero is defined as the density of pure water.",
          ja:"日本酒度は独立した測定ではなく、比重を目盛り直したものである。関係は厳密である——日本酒度＝（1÷d−1）×1443。ここでdは、4℃の水に対する15℃における酒の比重である。整理すれば d＝1443÷（1443＋日本酒度）。ゼロは純水の密度として定義される。",
          zh:"日本酒度不是一項獨立的測量，而是比重的重新標度。兩者關係是精確的：日本酒度 =（1 ÷ d − 1）× 1443，其中 d 是清酒在 15 °C 相對於 4 °C 之水的比重。移項後 d = 1443 ÷（1443 + 日本酒度）。零被定義為純水的密度。" } },

        { t:"table",
          caption:{ en:"Nihonshu-do to specific gravity, computed from the defining formula",
            ja:"日本酒度と比重（定義式による計算値）",
            zh:"日本酒度與比重（依定義式計算）" },
          cols:[{en:"SMV",ja:"日本酒度",zh:"日本酒度"},{en:"Specific gravity",ja:"比重",zh:"比重"},{en:"Usually described as",ja:"通常の呼び方",zh:"一般的說法"}],
          numCols:[0,1],
          rows:[
            ["−30","1.02123",{en:"Dessert-sweet; kijōshu territory",ja:"甘露に甘い。貴醸酒の域",zh:"甜如甜點；貴釀酒的區間"}],
            ["−20","1.01405",{en:"Markedly sweet",ja:"はっきりと甘口",zh:"明顯偏甜"}],
            ["−15","1.01050",{en:"Sweet",ja:"甘口",zh:"甜"}],
            ["−10","1.00698",{en:"Sweet",ja:"甘口",zh:"甜"}],
            ["−5","1.00348",{en:"Slightly sweet",ja:"やや甘口",zh:"微甜"}],
            ["−3","1.00208",{en:"Slightly sweet",ja:"やや甘口",zh:"微甜"}],
            ["0","1.00000",{en:"Neutral — the density of water",ja:"中庸。水と同じ密度",zh:"中性——與水同密度"}],
            ["+3","0.99793",{en:"Slightly dry",ja:"やや辛口",zh:"微辛"}],
            ["+5","0.99655",{en:"Dry",ja:"辛口",zh:"辛口"}],
            ["+10","0.99312",{en:"Dry",ja:"辛口",zh:"辛口"}],
            ["+15","0.98971",{en:"Very dry",ja:"大辛口",zh:"極辛口"}],
            ["+20","0.98633",{en:"Very dry",ja:"大辛口",zh:"極辛口"}],
            ["+30","0.97963",{en:"Extremely dry; rare",ja:"極端な辛口。稀である",zh:"極端辛口；罕見"}]
          ] },

        { t:"note", text:{
          en:"Two cautions. Alcohol is lighter than water, so a higher-alcohol sake reads drier on this scale at the same sugar level — a genshu's SMV is not comparable with a diluted sake's. And the descriptions in the third column are conventional rather than perceptual: acidity moves perceived sweetness at least as much as residual sugar does, which is why the sweetness and richness formulas on <a href=\"taste.html\">Chemistry of Flavour</a> use both figures.",
          ja:"二つの留保がある。アルコールは水より軽いから、同じ糖の量でもアルコールの高い酒はこの目盛りで辛く出る。原酒の日本酒度は加水した酒のそれと比較できない。そして第三列の記述は知覚ではなく慣行である。甘辛の体感を動かすのは、残糖と少なくとも同程度に酸度である。<a href=\"taste.html\">味の科学</a>の甘辛度・濃淡度の式が両方の数値を用いるのはそのためである。",
          zh:"兩點須留意。酒精比水輕，因此在相同糖量下，酒精度較高的酒在這條刻度上會顯得更辛——原酒的日本酒度不能與加水酒相比。而第三欄的描述屬慣例而非知覺：影響「甜不甜」感受的，酸度至少與殘糖同等重要，這也是<a href=\"taste.html\">風味的化學</a>中的甘辛度與濃淡度公式同時使用這兩個數值的原因。" } }
      ] },

    { t:"section", id:"style-temp",
      title:{ en:"Style against temperature", ja:"酒質と温度の対照", zh:"酒質對照溫度" }, jp:"適温表",
      body:[
        { t:"table",
          caption:{ en:"Where each style is usually at its best. ● best · ○ works · − avoid",
            ja:"各様式が最もよい温度域。●最良・○可・−避ける",
            zh:"各類型通常表現最好的溫度。● 最佳・○ 可行・− 避免" },
          cols:[{en:"Style",ja:"酒質",zh:"酒質"},{en:"5–10°",ja:"5〜10°",zh:"5–10°"},{en:"12–18°",ja:"12〜18°",zh:"12–18°"},{en:"20° hiya",ja:"20°冷や",zh:"20° 冷や"},{en:"35–40°",ja:"35〜40°",zh:"35–40°"},{en:"45–50°",ja:"45〜50°",zh:"45–50°"},{en:"55°+",ja:"55°以上",zh:"55° 以上"}],
          rows:[
            [{en:"Daiginjō, aromatic",ja:"大吟醸（香り高い）",zh:"大吟釀（芳香型）"},"●","○","−","−","−","−"],
            [{en:"Junmai ginjō",ja:"純米吟醸",zh:"純米吟釀"},"●","●","○","−","−","−"],
            [{en:"Junmai, standard",ja:"純米（標準）",zh:"純米（標準）"},"○","●","●","●","○","−"],
            [{en:"Junmai, low-polish",ja:"純米（低精白）",zh:"純米（低精白）"},"−","○","●","●","●","○"],
            [{en:"Honjōzō",ja:"本醸造",zh:"本釀造"},"○","●","●","●","●","○"],
            [{en:"Kimoto / yamahai",ja:"生酛・山廃",zh:"生酛・山廢"},"−","○","●","●","●","●"],
            [{en:"Nama, unpasteurised",ja:"生酒",zh:"生酒"},"●","●","○","−","−","−"],
            [{en:"Genshu, undiluted",ja:"原酒",zh:"原酒"},"●","●","○","○","○","−"],
            [{en:"Nigori",ja:"にごり",zh:"濁酒"},"●","●","○","○","−","−"],
            [{en:"Sparkling",ja:"発泡",zh:"氣泡"},"●","○","−","−","−","−"],
            [{en:"Koshu, aged",ja:"古酒",zh:"古酒"},"−","○","●","●","●","○"],
            [{en:"Kijōshu",ja:"貴醸酒",zh:"貴釀酒"},"○","●","●","○","−","−"],
            [{en:"Futsūshu",ja:"普通酒",zh:"普通酒"},"○","○","●","●","●","●"]
          ] },

        { t:"note", text:{
          en:"The pattern in the table is a single rule: the more a sake depends on volatile aroma, the colder it wants to be; the more it depends on acid, umami and body, the warmer. Everything else is detail.",
          ja:"この表の型は一つの規則である——揮発する香りに依る酒ほど冷たさを求め、酸と旨味と酒躯に依る酒ほど温かさを求める。残りはすべて細部である。",
          zh:"這張表的規律只有一條：一支酒越依賴揮發性香氣，就越想要低溫；越依賴酸、旨味與酒體，就越想要溫熱。其餘都是細節。" } }
      ] },

    { t:"section", id:"troubleshooting",
      title:{ en:"If it tastes wrong", ja:"味がおかしいとき", zh:"如果喝起來不對勁" }, jp:"原因の切り分け",
      body:[
        { t:"table",
          cols:[{en:"What you notice",ja:"感じたこと",zh:"你注意到的"},{en:"Most likely cause",ja:"最も考えられる原因",zh:"最可能的原因"},{en:"What to do",ja:"対処",zh:"該怎麼辦"}],
          rows:[
            [{en:"Almost no smell at all",ja:"香りがほとんどない",zh:"幾乎沒有香氣"},
             {en:"Served too cold. Below about 8 °C the esters largely stop reaching you.",ja:"冷やしすぎ。およそ8℃を下回ると、エステルはほとんど届かなくなる。",zh:"喝得太冰。低於約 8 °C，酯類大致就傳不到你這裡了。"},
             {en:"Let the glass stand five minutes and taste again. If it is still silent, the bottle is old or was carbon-filtered hard.",ja:"杯を五分置き、もう一度味わう。なお黙っているなら、瓶が古いか、炭を強く当てている。",zh:"讓杯子靜置五分鐘再嚐一次。如果它依然沉默，那就是酒瓶老了，或炭過濾下得太重。"}],
            [{en:"Boiled cabbage, drains, old newspaper",ja:"茹でた葉物、排水、古新聞",zh:"水煮青菜、排水口、舊報紙"},
             {en:"Hineka — oxidation and sulphur compounds from warm or long storage.",ja:"老香。暖かい、あるいは長い保存による酸化と硫黄化合物。",zh:"老香——長期或高溫存放造成的氧化與含硫化合物。"},
             {en:"Not recoverable as a drink. Warm it hard and cook with it; check where the shop keeps its stock before buying there again.",ja:"飲み物としては戻らない。強く燗をつけて料理に使うとよい。次に買う前に、その店が在庫をどこに置いているかを見ること。",zh:"作為飲料已無法挽回。把它加熱後拿去做菜；下次購買前，先看看那家店把庫存放在哪裡。"}],
            [{en:"Burnt rubber, struck match",ja:"焦げたゴム、擦ったマッチ",zh:"燒焦橡膠、剛擦過的火柴"},
             {en:"Light damage. A clear bottle left in daylight can be spoiled in an afternoon.",ja:"日光臭。透明な瓶を日中に置けば、ひと午後で損なわれうる。",zh:"光害。透明瓶在日光下放著，一個下午就可能毀掉。"},
             {en:"Discard. Buy from a shop that keeps bottles in the dark or wrapped, and store yours the same way.",ja:"捨てる。瓶を暗所に置くか紙で巻いている店で買い、家でも同じようにすること。",zh:"倒掉。改向把酒瓶放在暗處或包起來的店家購買，自己也照樣存放。"}],
            [{en:"Cloudy, sharply sour, faintly buttery",ja:"濁り、鋭い酸、微かにバター様",zh:"混濁、尖銳的酸、微微奶油味"},
             {en:"A hiochi infection in an unpasteurised bottle kept warm.",ja:"暖かい場所に置かれた生酒における火落ち。",zh:"未火入的酒被放在溫暖處，遭火落菌感染。"},
             {en:"Discard. Not dangerous, but unpleasant. Nama needs the fridge from the shop to the glass.",ja:"捨てる。危険ではないが不快である。生酒は店から杯まで冷蔵を要する。",zh:"倒掉。不危險，但不好喝。生酒從店裡到杯中都需要冷藏。"}],
            [{en:"Harsh, hot, flat when warmed",ja:"燗にすると荒く、熱く、平板",zh:"加熱後粗糙、灼熱、平板"},
             {en:"Warmed by microwave or direct heat, creating local hot spots.",ja:"電子レンジや直火による加熱。局所の熱点ができている。",zh:"用微波爐或直火加熱，產生了局部熱點。"},
             {en:"Warm the next one in a water bath instead, and stir a ceramic flask once halfway through.",ja:"次は湯煎で温め、陶の徳利なら途中で一度混ぜること。",zh:"下一次改用隔水加熱；若是陶製酒壺，中途攪一下。"}],
            [{en:"Sweet and thin at once",ja:"甘く、しかも薄い",zh:"又甜又薄"},
             {en:"Low acidity. Nothing is holding the sugar up.",ja:"酸度が低い。糖を支えるものがない。",zh:"酸度太低，沒有東西撐住糖。"},
             {en:"Serve it colder, with salt on the table; and next time look for an acidity figure above about 1.5.",ja:"より冷やし、卓に塩を置くとよい。次は酸度1.5以上を目安に探すこと。",zh:"喝得更冰些，桌上備點鹽；下次找酸度約 1.5 以上的酒。"}],
            [{en:"Aggressively bitter at the finish",ja:"後口が強く苦い",zh:"尾韻強烈的苦"},
             {en:"Pressed hard, or an over-dissolved mash. Common in cheap sake and in the last fraction of a pressing.",ja:"強く搾ったか、溶けすぎた醪。安価な酒と、上槽の最後の画分に多い。",zh:"壓榨過重，或醪溶解過度。常見於便宜的酒與壓榨的最後一段。"},
             {en:"Warm it — heat softens perceived bitterness — and pair it with something fatty rather than something delicate.",ja:"燗にする。熱は苦味の知覚を和らげる。繊細な料理ではなく脂のあるものと合わせる。",zh:"加熱——溫度會軟化對苦味的感知——並配油脂多的食物，而非細緻的菜。"}],
            [{en:"Fizzy when it should not be",ja:"泡立つはずのないものが泡立つ",zh:"不該有氣泡卻有氣泡"},
             {en:"Either a deliberate live sake, or refermentation in the bottle. Check the neck label first.",ja:"意図された活性の酒か、瓶内での再発酵か。まず首かけの表示を見ること。",zh:"要嘛是刻意的活性酒，要嘛是在瓶中再度發酵。先看瓶頸的標示。"},
             {en:"If deliberate, chill hard and open slowly over a sink. If not, and it also smells sour, treat it as a hiochi problem.",ja:"意図されたものならよく冷やし、流しの上でゆっくり開ける。そうでなく酸臭もあるなら、火落ちとして扱う。",zh:"若是刻意的，就充分冰鎮並在水槽上方緩慢開瓶。若不是，且同時發酸，就當作火落問題處理。"}],
            [{en:"Tastes like nothing you remember",ja:"覚えているのと違う味",zh:"和你記得的味道不同"},
             {en:"Different bottling year, different tank, or a different temperature from last time. Sake is made annually and blended by tank.",ja:"詰めた年が違う、タンクが違う、あるいは前回と温度が違う。日本酒は年ごとに造られ、タンクごとに調合される。",zh:"裝瓶年份不同、酒槽不同，或這次的溫度與上次不同。清酒逐年釀造，並按槽調和。"},
             {en:"Check the manufacturing date against the last bottle. Year-to-year variation is real and is not a fault.",ja:"前の瓶と製造年月を比べる。年ごとの違いは実在し、欠点ではない。",zh:"把製造年月與上一瓶比對。年份間的差異真實存在，且不是缺陷。"}]
          ] }
      ] },

    { t:"related", items:[
      { href:"numbers.html", why:{ en:"What each of these figures actually measures.", ja:"これらの数が実際に測っているもの。", zh:"這些數字實際上在量什麼。" } },
      { href:"label.html", why:{ en:"Where on a bottle you will meet them.", ja:"瓶のどこでそれらに出会うか。", zh:"你會在瓶身的什麼地方遇到它們。" } },
      { href:"kanji.html", why:{ en:"The characters in these tables, with readings.", ja:"この表の文字を、読みとともに。", zh:"這些表格裡的漢字，附讀音。" } },
      { href:"glossary.html", why:{ en:"The same material as prose, alphabetically.", ja:"同じ材料を、散文として五十音順に。", zh:"同樣的內容，以散文形式依字順排列。" } }
    ] }
  ]
};


/* ---- ------------------------------------------------- faq */
SAKE.pages["faq"] = {
  kicker: { en: "Reference · 07", ja: "資料 · 07", zh: "資料 · 07" },
  title:  { en: "Questions & Answers", ja: "よくある問い", zh: "常見問答" },
  jp: "率直な答え",
  lede: {
    en: "Short, direct answers to the questions that come up most often, with pointers to the pages that treat them properly. Where an answer is genuinely disputed, this page says so rather than picking a side.",
    ja: "最も多く尋ねられる問いへの、短く率直な答えと、それを本格的に扱う頁への案内である。答えが実際に定まっていない事柄については、どちらかに与するのではなく、定まっていないと述べる。",
    zh: "針對最常被提出的問題所給的簡短直接答覆，並附上深入處理該主題之頁面的指引。凡答案確有爭議者，本頁會直說有爭議，而不選邊站。"
  },
  body: [

    { t:"section", id:"basics",
      title:{ en:"What it is", ja:"日本酒とは", zh:"清酒是什麼" }, jp:"基本",
      body:[
        { t:"figure",
          caption:{
            en:"Sake's strength and sake's dose are two different questions, and most of the confusion about how strong it is comes from answering the first when you meant the second. By volume it sits where wine sits, a little above it. But the customary serving is a gō — 180 mL, the capacity of a masu and of the small flask a restaurant brings — and a gō of ordinary sake carries about half again as much pure alcohol as a restaurant glass of wine. Nothing about the drink is unusually strong. The cup is.",
            ja:"日本酒の強さと、日本酒の量とは別の問いであり、その強さをめぐる混乱のほとんどは、後者を尋ねながら前者に答えることから生じる。度数においては葡萄酒のある辺り、そのわずかに上に座る。しかし習いの一人前は一合であり——百八十ミリリットル、枡の容量であり、店が運んでくる小さな徳利の容量である——並の日本酒の一合は、店で出る葡萄酒の一杯のおよそ一倍半の純アルコールを運ぶ。この飲み物に、際立って強いところはない。器のほうが大きいのである。",
            zh:"清酒有多烈，與清酒一次喝多少，是兩個不同的問題；而關於「它有多烈」的混淆，多半來自：你想問的是後者，得到的卻是前者的答案。就濃度而言，它坐在葡萄酒所在的位置，略高一點。但習慣上的一份是「一合」——一百八十毫升，一個枡的容量，也是餐廳端上來那支小德利的容量——而一合普通清酒所含的純酒精，約是餐廳一杯葡萄酒的一倍半。這款酒本身沒有什麼特別烈的地方，是杯子比較大。" },
          svg: function (lang, L) {
            var W = 760, H = 284, A0 = 150, A1 = 428, B0 = 470, B1 = 710, TOP = 72, ROW = 32;
            function ax(v) { return A0 + v / 46 * (A1 - A0); }
            function bx(v) { return B0 + v / 25 * (B1 - B0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g;
            s += '<text x="' + A0 + '" y="48" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "アルコール度数" : lang === "zh" ? "酒精濃度" : "ALCOHOL BY VOLUME") + '</text>';
            s += '<text x="' + B0 + '" y="48" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一人前あたりの純アルコール" : lang === "zh" ? "一份習慣份量中的純酒精" : "PURE ALCOHOL IN ONE SERVING") + '</text>';
            for (g = 0; g <= 40; g += 10) {
              s += '<line x1="' + ax(g).toFixed(1) + '" y1="58" x2="' + ax(g).toFixed(1) + '" y2="222" stroke="#EFEDE7"/>';
              s += '<text x="' + ax(g).toFixed(1) + '" y="238" text-anchor="middle" font-size="9" fill="#B4AEA4">' + g + '%</text>';
            }
            for (g = 0; g <= 20; g += 10) {
              s += '<line x1="' + bx(g).toFixed(1) + '" y1="58" x2="' + bx(g).toFixed(1) + '" y2="222" stroke="#EFEDE7"/>';
              s += '<text x="' + bx(g).toFixed(1) + '" y="238" text-anchor="middle" font-size="9" fill="#B4AEA4">' + g + ' g</text>';
            }
            s += '<line x1="' + bx(20).toFixed(1) + '" y1="58" x2="' + bx(20).toFixed(1) + '" y2="222" stroke="#B09E7C" stroke-dasharray="2 3"/>';
            var rows = [
              { n:{ en:"Beer", ja:"ビール", zh:"啤酒" }, sv:"350 mL", a:[4, 6], core:null, gm:14 },
              { n:{ en:"Wine", ja:"ワイン", zh:"葡萄酒" }, sv:"125 mL", a:[11, 14.5], core:null, gm:13 },
              { n:{ en:"Sake", ja:"日本酒", zh:"日本酒" }, sv:{ en:"180 mL · one gō", ja:"180 mL・一合", zh:"180 mL・一合" }, a:[13, 20], core:[15, 16], gm:21 },
              { n:{ en:"Shōchū", ja:"焼酎", zh:"燒酎" }, sv:"60 mL", a:[20, 25], core:null, gm:12 },
              { n:{ en:"Whisky", ja:"ウイスキー", zh:"威士忌" }, sv:"30 mL", a:[40, 46], core:null, gm:9.5 }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = TOP + i * ROW, r = rows[i];
              s += '<rect x="' + ax(r.a[0]).toFixed(1) + '" y="' + (ry - 7) + '" width="' + (ax(r.a[1]) - ax(r.a[0])).toFixed(1) + '" height="14" fill="#DED8CB"/>';
              if (r.core) s += '<rect x="' + ax(r.core[0]).toFixed(1) + '" y="' + (ry - 7) + '" width="' + (ax(r.core[1]) - ax(r.core[0])).toFixed(1) + '" height="14" fill="#7C6B52"/>';
              s += '<text x="' + (r.a[1] > 30 ? (ax(r.a[0]) - 6).toFixed(1) : (ax(r.a[1]) + 6).toFixed(1)) + '" y="' + (ry + 3) + '" text-anchor="' + (r.a[1] > 30 ? "end" : "start") + '" font-size="9" fill="#A39C91">' + r.a[0] + '–' + r.a[1] + '%</text>';
              s += '<rect x="' + B0 + '" y="' + (ry - 7) + '" width="' + (bx(r.gm) - B0).toFixed(1) + '" height="14" fill="' + (i === 2 ? "#B09E7C" : "#CFC6B2") + '"/>';
              s += '<text x="' + (bx(r.gm) + 6).toFixed(1) + '" y="' + (ry + 3) + '" font-size="9" fill="#6B655C">' + r.gm + ' g</text>';
              s += '<text x="30" y="' + (ry - 1) + '" font-size="10.5" fill="#201E1B">' + L(r.n) + '</text>';
              s += '<text x="30" y="' + (ry + 11) + '" font-size="8.5" fill="#A39C91">' + L(r.sv) + '</text>';
            }
            var fn = (lang === "ja" ? ["グラム数は 容量×度数×0.789 による。日本の公衆衛生の指針は長らく、一日あたり純アルコール約二十グラムを",
                                       "適度な量として述べてきた——並の日本酒であれば、一合でそこに届く。"]
                      : lang === "zh" ? ["公克數＝容量×濃度×0.789。日本的公共衛生指引長期以每日純酒精約二十公克為適量的描述——",
                                         "而一合普通清酒，單靠自己就到了那裡。"]
                      : ["Grams are volume × strength × 0.789. Japanese public-health guidance has long described about 20 g of pure alcohol",
                         "as a moderate amount for a day — which one gō of ordinary sake reaches on its own."]);
            for (i = 0; i < fn.length; i++) s += '<text x="30" y="' + (H - 26 + i * 13) + '" font-size="9.5" fill="#8B857C">' + fn[i] + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"defs", items:[
          { term:{en:"Is sake a wine or a beer?",ja:"日本酒はワインかビールか。",zh:"清酒是葡萄酒還是啤酒？"},
            def:{en:"Technically closer to beer — it is brewed from a grain, and the starch must be converted to sugar first. But it does that conversion at the same time as fermentation, in one vessel, which neither beer nor wine does. It is best treated as its own category rather than forced into either.",
              ja:"技術的にはビールに近い。穀物から醸され、澱粉をまず糖に変えねばならないからである。ただしその変換を、発酵と同時に、一つの容器のなかで行う点は、ビールにもワインにもない。どちらかに押し込むより、独立した分類として扱うのが最も適切である。",
              zh:"技術上更接近啤酒——它以穀物釀造，且澱粉必須先轉為糖。但它是在同一容器中、與發酵同時進行這項轉換，這是啤酒與葡萄酒都沒有的。與其硬塞進任一類，不如視為自成一格。"} },
          { term:{en:"Is it distilled?",ja:"蒸留酒か。",zh:"它是蒸餾酒嗎？"},
            def:{en:"No. Sake is brewed, never distilled. Shōchū and awamori are the distilled Japanese spirits, and are different drinks entirely. Some sake has a small amount of distilled alcohol added — that is not the same as being a spirit.",
              ja:"違う。日本酒は醸造酒であり、蒸留しない。焼酎や泡盛が日本の蒸留酒であり、まったく別の飲み物である。少量の醸造アルコールを加えた日本酒はあるが、それは蒸留酒であることとは別である。",
              zh:"不是。清酒是釀造酒，從不蒸餾。燒酎與泡盛才是日本的蒸餾酒，是完全不同的飲品。有些清酒添加了少量蒸餾酒精——但那與「本身是蒸餾酒」是兩回事。"} },
          { term:{en:"How strong is it?",ja:"度数はどのくらいか。",zh:"酒精度多高？"},
            def:{en:"Usually 15–16%, sometimes 13% for lighter modern styles and 17–20% for undiluted genshu. That is roughly wine strength, and about three times beer.",
              ja:"多くは15〜16%。軽い現代的な酒質では13%前後、無加水の原酒では17〜20%になる。おおむねワインと同程度で、ビールのおよそ三倍である。",
              zh:"通常為 15–16%，較輕盈的現代酒質有時為 13%，未加水的原酒則為 17–20%。大致與葡萄酒相當，約為啤酒的三倍。"} },
          { term:{en:"Is “sake” even the right word?",ja:"「サケ」という語は正しいのか。",zh:"「sake」這個詞用得對嗎？"},
            def:{en:"In Japanese, <em>sake</em> (酒) means alcohol of any kind; the specific drink is <em>nihonshu</em> (日本酒) or, legally, <em>seishu</em> (清酒). In English, Chinese and most other languages “sake” has settled as the name for the specific drink, which is now simply how the word works outside Japan.",
              ja:"日本語で「酒」はあらゆる種類の酒を指し、この特定の飲み物は日本酒、法令上は清酒である。英語や中国語をはじめ多くの言語では「sake」がこの飲み物の名として定着しており、日本の外ではもはやそう機能している。",
              zh:"在日文中，「酒」泛指任何酒類；這款特定飲品叫「日本酒」，法律上稱「清酒」。而在英文、中文及多數其他語言中，「sake」已固定為這款特定飲品的名稱，這就是這個詞在日本之外的實際運作方式。"} },
          { term:{en:"Why is polishing ratio on every label?",ja:"なぜどの酒標にも精米歩合があるのか。",zh:"為何每張酒標上都有精米步合？"},
            def:{en:"Because it is one of the few numbers Japanese law requires for the premium designations, and because it is a real proxy for cost. It is not a quality score: 50% does not mean better than 60%, it means a different sake with more of the grain thrown away.",
              ja:"特定名称酒について法が求める数少ない数値の一つであり、費用の実際的な代理指標でもあるからである。品質の点数ではない。50%が60%より良いという意味ではなく、より多くの粒を捨てた別の酒だという意味である。",
              zh:"因為它是日本法律對特定名稱酒所要求的少數數字之一，也確實是成本的替代指標。它不是品質評分：50% 不代表比 60% 更好，只代表那是一款丟掉更多米粒的不同的酒。"} },
          { term:{en:"Is added alcohol a sign of cheap sake?",ja:"アルコール添加は安酒の徴か。",zh:"添加酒精是廉價酒的標誌嗎？"},
            def:{en:"Not by itself. Large volumes of cheap sake do use it as an extender, but a small, precise addition in a honjōzō or an aruten daiginjō is a technical choice that lifts aroma and sharpens the finish, and many competition sake are made this way. Judge the sake, not the category.",
              ja:"それだけでは徴にならない。安価な大量の酒が嵩増しに用いているのは事実だが、本醸造やアル添の大吟醸における少量で精密な添加は、香りを立て後口を締めるための技術的な選択であり、鑑評会の出品酒の多くもこの方法で造られている。分類ではなく酒そのもので判断すること。",
              zh:"單憑這點不算。大量廉價酒確實以它增量，但本釀造或「アル添」大吟釀中少量而精確的添加，是為了提升香氣、收束尾韻的技術性選擇，許多鑑評會出品酒也是這樣釀成的。請評判那款酒，而非那個類別。"} }
        ] }
      ]
    },

    { t:"section", id:"buying",
      title:{ en:"Buying and keeping", ja:"買うことと保つこと", zh:"選購與保存" }, jp:"購入と保存",
      body:[
        { t:"defs", items:[
          { term:{en:"Does sake go off?",ja:"日本酒は悪くなるか。",zh:"清酒會壞嗎？"},
            def:{en:"It does not spoil in a way that makes you ill, but it deteriorates. Unopened and cool, a pasteurised sake is fine for a year or more; unpasteurised nama needs constant refrigeration and should be drunk within months. An opened bottle is best within a week or two in the fridge, though a robust junmai will take longer and an aged sake will take months.",
              ja:"体を害するかたちで腐ることはないが、劣化はする。未開封で涼しく保てば、火入れした酒は一年以上もつ。生酒は常に冷蔵を要し、数か月のうちに飲むべきである。開栓後は冷蔵で一、二週間が目安だが、骨のある純米はもっともち、熟成酒なら数か月を要さない。",
              zh:"它不會壞到讓你生病，但會劣化。未開封並存放於陰涼處，火入酒可放一年以上；生酒需持續冷藏，應於數月內喝完。開瓶後冷藏以一至兩週為佳，不過結實的純米可撐更久，熟成酒更可放上數月。"} },
          { term:{en:"Should I store bottles lying down?",ja:"瓶は寝かせるべきか。",zh:"酒瓶要平放嗎？"},
            def:{en:"No. Sake bottles stand upright. There is no cork to keep wet, and standing minimises the surface exposed to the air in the neck.",
              ja:"いけない。日本酒の瓶は立てて置く。湿らせておくべきコルクがなく、立てておけば首の部分で空気に触れる面が最も小さくなる。",
              zh:"不要。清酒瓶應直立存放。它沒有需要保持濕潤的軟木塞，而直立可讓瓶頸處接觸空氣的表面積最小。"} },
          { term:{en:"Why has my sake turned yellow?",ja:"酒が黄ばんだのはなぜか。",zh:"我的酒為何變黃了？"},
            def:{en:"Light, heat, or time. A faint straw colour is normal in junmai; a distinct gold or brown in a sake that was pale when you bought it means it has been sitting warm or in the light, and it will smell flat and slightly of cooked vegetables.",
              ja:"光か、熱か、時間である。純米にかすかな麦藁色があるのは正常だが、買ったときは淡かった酒がはっきり金や褐に変わっていれば、暖かい場所か明るい場所に置かれていたということであり、平板で、やや煮た野菜のような匂いがするはずである。",
              zh:"光、熱，或時間。純米帶淡淡麥稈色屬正常；但若一款買來時淺色的酒明顯轉為金黃或褐色，代表它被放在溫暖或明亮之處，聞起來會平板，並帶點煮過的蔬菜味。"} },
          { term:{en:"What is the sediment in the bottom?",ja:"底の澱は何か。",zh:"瓶底的沉澱是什麼？"},
            def:{en:"Fine rice and yeast solids — <em>ori</em>. Harmless, and in an <em>origarami</em> it is deliberate. Stand the bottle upright for a day and pour carefully if you would rather not have it, or swirl it in if you want the extra texture.",
              ja:"細かな米と酵母の固形分、すなわち澱である。無害であり、おりがらみでは意図的に残されている。避けたければ一日立てて置き、静かに注ぐ。厚みが欲しければ、軽く回して混ぜればよい。",
              zh:"細微的米與酵母固形物，即「澱（おり）」。無害，而在「澱がらみ」中更是刻意保留。若不想要，把瓶子直立靜置一天後小心倒出；若想要那份口感，輕輕搖勻即可。"} },
          { term:{en:"Is expensive sake better?",ja:"高い酒は良い酒か。",zh:"貴的清酒比較好嗎？"},
            def:{en:"Up to a point, and then not reliably. Price mostly tracks rice cost and milling, which correlate with refinement rather than with pleasure. Beyond a certain level you are paying for scarcity and allocation. A well-made junmai at a modest price is a better everyday drink than a daiginjō at four times the money.",
              ja:"ある水準までは真であり、その先は当てにならない。値段はおおむね米の費用と精米に連動し、それらは洗練とは相関するが、喜びとは必ずしも相関しない。ある水準を超えれば、支払っているのは希少性と配分である。手頃な値のよくできた純米は、四倍の値の大吟醸より、日々の酒としては優れている。",
              zh:"到某個程度為止是的，再往上就不可靠了。價格主要反映米的成本與精米程度，而這兩者相關的是精緻度，未必是愉悅感。超過某個水準之後，你付的是稀缺性與配額。一款價格適中、釀得好的純米，作為日常之酒勝過四倍價格的大吟釀。"} },
          { term:{en:"What should a beginner buy?",ja:"最初に何を買えばよいか。",zh:"新手該買什麼？"},
            def:{en:"A junmai ginjō from a specialist shop, bottled within the last six months, of about 15%. It is aromatic enough to be interesting, structured enough to go with food, and forgiving of imperfect serving temperature. See <a href=\"start.html\">Where to Start</a> for a six-bottle route through the whole category.",
              ja:"専門店で、直近半年以内に瓶詰めされた、15%前後の純米吟醸。興味を引くだけの香りがあり、料理に添えるだけの骨格があり、供する温度が多少ずれても許してくれる。分野全体を六本でたどる道筋は<a href=\"start.html\">始め方</a>に示した。",
              zh:"在專門店買一瓶半年內裝瓶、約 15% 的純米吟釀。它香氣足以引人入勝、結構足以佐餐，且對不甚精確的供飲溫度相當寬容。以六瓶走遍整個類別的路線，見<a href=\"start.html\">從何開始</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"serving",
      title:{ en:"Serving and drinking", ja:"供し方と飲み方", zh:"供飲與品飲" }, jp:"供し方",
      body:[
        { t:"defs", items:[
          { term:{en:"Should sake be served hot?",ja:"日本酒は温めるべきか。",zh:"清酒該加熱嗎？"},
            def:{en:"Some sake should, some absolutely should not. Junmai, kimoto and yamahai generally improve warmed to 40–50°C; aromatic ginjō and daiginjō are usually damaged by it. The idea that all sake is served hot comes from an era when much of what was exported was poor enough to need hiding.",
              ja:"温めるべき酒もあれば、決して温めてはならない酒もある。純米、生酛、山廃は40〜50度でおおむね良くなり、香りの高い吟醸・大吟醸はたいてい損なわれる。日本酒はすべて熱燗で、という思い込みは、輸出されたものの多くが隠す必要のある品質であった時代に由来する。",
              zh:"有些酒該加熱，有些絕對不該。純米、生酛與山廢在 40–50°C 下通常會變得更好；芳香的吟釀與大吟釀則多半因加熱而受損。「清酒都要熱著喝」的觀念，源自出口品多半品質不佳、需要遮掩的年代。"} },
          { term:{en:"Do I need a special cup?",ja:"専用の器が要るか。",zh:"需要專用酒器嗎？"},
            def:{en:"No. A small white wine glass is the single most useful vessel for modern sake, and a plain white porcelain cup is the standard for assessing it. Everything else — cedar, tin, Bizen, lacquer — changes the drink in specific and interesting ways, but none of it is required.",
              ja:"要らない。現代の日本酒には、小ぶりの白ワイングラスが最も役に立つ器であり、評価には白磁の猪口が標準である。杉、錫、備前、漆——他のすべては酒を特定のかたちで、興味深く変えるが、いずれも必須ではない。",
              zh:"不需要。對現代清酒而言，一只小型白酒杯是最實用的器皿，而評鑑則以素白瓷杯為標準。其餘的——杉木、錫、備前、漆器——都會以特定而有趣的方式改變這杯酒，但沒有一樣是必需的。"} },
          { term:{en:"Is it rude to pour my own?",ja:"手酌は失礼か。",zh:"自己倒酒失禮嗎？"},
            def:{en:"In a formal or hierarchical setting, yes, mildly — the convention is to pour for others and let them pour for you. Among friends nobody minds. Hold the cup up with both hands when someone pours for you; that gesture is the one that matters.",
              ja:"改まった場や上下のある場では、いくらか失礼にあたる。互いに注ぎ合うのが慣わしである。友人どうしなら誰も気にしない。注がれるときは両手で杯を持ち上げること。大切なのはその所作である。",
              zh:"在正式或有上下關係的場合，算是輕微失禮——慣例是為他人斟酒、也讓他人為你斟。朋友之間則無人在意。他人為你斟酒時，請雙手捧杯；真正重要的是這個動作。"} },
          { term:{en:"Can sake be drunk with cheese, or with Western food?",ja:"チーズや洋食と合うか。",zh:"清酒能配起司或西餐嗎？"},
            def:{en:"Yes, and unusually well. Sake has no tannin and low acid, so it does not fight fat or salt the way red wine can. Aged sake with hard cheese, junmai with roast chicken, sparkling sake with fried food — all of these work. See <a href=\"pairing.html\">Food Pairing</a>.",
              ja:"合う。しかも驚くほどよく合う。日本酒にはタンニンがなく酸も低いため、赤ワインのように脂や塩と衝突しない。熟成酒と硬質チーズ、純米と鶏の丸焼き、発泡清酒と揚げ物——いずれも成立する。<a href=\"pairing.html\">料理との相性</a>を参照。",
              zh:"可以，而且好得出奇。清酒沒有單寧、酸度也低，因此不會像紅酒那樣與脂肪或鹽分衝突。熟成酒配硬質起司、純米配烤雞、氣泡清酒配炸物——都成立。參見<a href=\"pairing.html\">餐酒搭配</a>。"} },
          { term:{en:"What does kanpai mean, and when?",ja:"乾杯はいつ言うのか。",zh:"「乾杯」何時說？"},
            def:{en:"“Dry the cup” — the standard toast, said once at the start when everyone has a drink. Unlike its Chinese cognate <em>gānbēi</em>, it does not oblige you to empty the glass. Wait for it before drinking; starting early is the one piece of etiquette people actually notice.",
              ja:"「杯を乾かす」の意で、全員に飲み物が行き渡った最初に一度言う定型の挨拶である。中国語の「乾杯」と異なり、飲み干す義務は伴わない。それを待ってから飲むこと。先に飲み始めることは、人が実際に気づく数少ない作法の一つである。",
              zh:"意為「乾了這杯」，是所有人都拿到酒後、在開始時說一次的標準祝酒詞。與中文的「乾杯」不同，它並不要求你把酒喝光。請等到說完再喝；提早開喝，是少數人們真的會注意到的失禮。"} }
        ] }
      ]
    },

    { t:"section", id:"body",
      title:{ en:"Diet, allergens and the body", ja:"食事制限・アレルギー・身体", zh:"飲食限制、過敏原與身體" }, jp:"身体と成分",
      body:[
        { t:"defs", items:[
          { term:{en:"Is sake gluten-free?",ja:"グルテンフリーか。",zh:"是無麩質的嗎？"},
            def:{en:"Sake is made from rice, water, kōji and yeast, with no wheat, barley or rye, so by ingredient it contains no gluten. Cross-contamination in a facility that also handles other products is the only realistic concern, and anyone with coeliac disease should check with the producer rather than rely on a general statement.",
              ja:"日本酒は米・水・麹・酵母から造られ、小麦も大麦もライ麦も用いないため、原料の上ではグルテンを含まない。現実的な懸念は、他の製品も扱う施設での交差汚染だけである。セリアック病の人は、一般的な説明に頼らず製造者に確認すべきである。",
              zh:"清酒由米、水、麴與酵母製成，不使用小麥、大麥或黑麥，因此就原料而言不含麩質。唯一實際的疑慮是與其他產品共用設施造成的交叉污染；乳糜瀉患者應向生產者確認，而非仰賴一般性說法。"} },
          { term:{en:"Is it vegan?",ja:"ヴィーガンに適するか。",zh:"是純素的嗎？"},
            def:{en:"Almost always. The ingredients are plant and fungal. The one thing to check is fining: a small number of producers have historically used gelatine or egg-derived clarifiers, though activated carbon and filtration are the norm.",
              ja:"ほぼ常にそうである。原料は植物と菌類である。確かめるべき点は清澄剤のみで、歴史的にはゼラチンや卵由来のものを用いた造り手がわずかにある。とはいえ、活性炭と濾過が通例である。",
              zh:"幾乎總是。原料為植物與真菌。唯一需要確認的是澄清劑：歷史上有極少數生產者使用明膠或蛋源澄清劑，不過活性碳與過濾才是常態。"} },
          { term:{en:"Does sake contain sulfites?",ja:"亜硫酸塩を含むか。",zh:"含有亞硫酸鹽嗎？"},
            def:{en:"Sulfites are not added to sake, unlike most wine. Trace amounts can occur naturally from fermentation, but sake is not a sulfite-preserved drink and does not carry a sulfite warning in Japan.",
              ja:"多くのワインと異なり、日本酒に亜硫酸塩は添加されない。発酵に伴い自然に微量生じることはあるが、亜硫酸で保存する酒ではなく、日本では亜硫酸の表示義務もない。",
              zh:"與多數葡萄酒不同，清酒不添加亞硫酸鹽。發酵過程可能自然產生微量，但清酒並非以亞硫酸保存的酒類，在日本也不需標示亞硫酸警語。"} },
          { term:{en:"How many calories?",ja:"熱量はどれほどか。",zh:"熱量多少？"},
            def:{en:"Around 100–110 kcal per 100 ml, most of it from alcohol and a little from residual sugar. A 180 ml <em>ichi-gō</em> serving is roughly 180–200 kcal, comparable to two small glasses of wine.",
              ja:"100ミリリットルあたりおよそ100〜110キロカロリー。その大半はアルコール由来で、残糖からもいくらか来る。一合180ミリリットルでおよそ180〜200キロカロリーであり、ワイン小二杯に相当する。",
              zh:"每 100 毫升約 100–110 大卡，多半來自酒精，少部分來自殘糖。一合（180 毫升）約 180–200 大卡，相當於兩小杯葡萄酒。"} },
          { term:{en:"Does sake cause worse hangovers?",ja:"日本酒は二日酔いがひどいか。",zh:"清酒的宿醉比較嚴重嗎？"},
            def:{en:"There is no good evidence that it does. What is well established is that sake at 15–16% is much stronger than beer and is served in small cups that make quantity hard to track, so people frequently drink more than they intend. Total alcohol and hydration explain the great majority of hangover severity.",
              ja:"そうだという確かな証拠はない。確かなのは、15〜16%の日本酒がビールよりはるかに強く、しかも量の把握しにくい小さな杯で供されるため、意図した以上に飲みやすいということである。二日酔いの重さの大半は、総アルコール量と水分で説明がつく。",
              zh:"沒有可靠證據支持這種說法。確定的是，15–16% 的清酒比啤酒烈得多，且以小杯供飲、難以掌握飲用量，人們因而經常喝得比預期多。宿醉的嚴重程度，絕大部分可由總酒精攝取量與水分狀況解釋。"} },
          { term:{en:"Why do some people flush?",ja:"顔が赤くなるのはなぜか。",zh:"為何有些人會臉紅？"},
            def:{en:"A common genetic variant of the ALDH2 enzyme, found in a large proportion of people of East Asian descent, slows the breakdown of acetaldehyde. Flushing is a signal worth taking seriously rather than drinking through — see <a href=\"health.html\">Alcohol & the Body</a>.",
              ja:"ALDH2という酵素の遺伝的な型の一つが、アセトアルデヒドの分解を遅らせる。東アジアに由来する人々の多くに見られる。紅潮は、押して飲み進めるべき現象ではなく、真剣に受け止めるべき合図である。<a href=\"health.html\">酒と身体</a>を参照。",
              zh:"ALDH2 酵素的一種常見基因變異，在東亞裔族群中占相當比例，會減緩乙醛的分解。臉紅是應當認真看待的訊號，而非硬撐著繼續喝的理由——參見<a href=\"health.html\">酒與身體</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"misc",
      title:{ en:"Things people get wrong", ja:"よくある誤解", zh:"常見誤解" }, jp:"訂正",
      body:[
        { t:"table",
          cols:[{en:"Common claim",ja:"よく言われること",zh:"常見說法"},{en:"What is actually true",ja:"実際",zh:"實際情況"}],
          keyCol:true,
          rows:[
            [{en:"“Sake is rice wine.”",ja:"「日本酒は米のワインである」",zh:"「清酒是米做的葡萄酒。」"},
             {en:"Wine ferments existing sugar; sake must make its sugar from starch first. The process is closer to beer, and the simultaneous conversion is unique to sake.",ja:"ワインは既にある糖を発酵させるが、日本酒はまず澱粉から糖を作らねばならない。工程はビールに近く、同時進行の変換は日本酒に固有である。",zh:"葡萄酒發酵的是既有的糖；清酒必須先從澱粉造糖。其流程更接近啤酒，而同時進行的轉換則為清酒獨有。"}],
            [{en:"“Sake should be drunk hot.”",ja:"「日本酒は熱燗で飲むもの」",zh:"「清酒該熱著喝。」"},
             {en:"Temperature is a per-sake decision with a range of about 5°C to 55°C. Warming a good daiginjō is a waste of it.",ja:"温度はおよそ5度から55度の幅のなかで、酒ごとに決めるものである。良い大吟醸を温めるのは無駄である。",zh:"溫度是逐款決定的事，範圍約在 5°C 到 55°C 之間。把好的大吟釀加熱是一種浪費。"}],
            [{en:"“The more polished, the better.”",ja:"「よく磨いたものほど良い」",zh:"「磨得越多越好。」"},
             {en:"More polishing means cleaner and more aromatic, and also less body, less umami and a higher price. Below about 40% the returns are debatable and some brewers say so publicly.",ja:"磨けば清らかで香りは高くなるが、同時に厚みと旨味は減り、値は上がる。40%を下回るあたりから見返りは議論の余地があり、それを公然と述べる造り手もいる。",zh:"磨得越多，酒越潔淨、越芳香，同時酒體越薄、旨味越少、價格越高。降到約 40% 以下之後，其回報便有爭議，也有釀造者公開這麼說。"}],
            [{en:"“Sake doesn't age.”",ja:"「日本酒は熟成しない」",zh:"「清酒不能陳放。」"},
             {en:"It ages differently from wine and most bottles are not built for it, but deliberate ageing is an old tradition with a modern revival. See <a href=\"aging.html\">Aged Sake</a>.",ja:"ワインとは違うかたちで熟成し、多くの瓶はそのために造られていない。しかし意図した熟成は古い伝統であり、現代に復活している。<a href=\"aging.html\">熟成酒</a>を参照。",zh:"它的陳放方式與葡萄酒不同，且多數酒瓶並非為此而造；但刻意熟成是一項古老傳統，且已在當代復興。參見<a href=\"aging.html\">熟成酒</a>。"}],
            [{en:"“Nigori is unfiltered sake.”",ja:"「にごり酒は無濾過の酒である」",zh:"「濁酒是未過濾的清酒。」"},
             {en:"Nigori is coarsely filtered — legally it must be pressed to count as seishu at all. <em>Muroka</em>, meaning no carbon filtration, is a different word describing a different step.",ja:"にごり酒は粗く濾したものであり、そもそも清酒であるためには法的に搾らねばならない。無濾過とは炭素濾過を行わないことを指す別の語であり、別の工程の話である。",zh:"濁酒是粗濾過的——依法它必須經過壓榨才算清酒。「無濾過」指的是不經活性碳過濾，是描述另一道工序的另一個詞。"}],
            [{en:"“Sake bombs are a Japanese custom.”",ja:"「サケボムは日本の風習である」",zh:"「清酒炸彈是日本習俗。」"},
             {en:"They are not done in Japan and did not originate there. See <a href=\"cocktails.html\">Mixing & Cooking</a>.",ja:"日本では行われておらず、日本に由来もしない。<a href=\"cocktails.html\">割る・混ぜる・料理する</a>を参照。",zh:"日本並不這麼做，也非源自日本。參見<a href=\"cocktails.html\">調飲與入菜</a>。"}],
            [{en:"“Sake is always made from special sake rice.”",ja:"「日本酒は必ず酒米で造られる」",zh:"「清酒一定用專門的酒米釀造。」"},
             {en:"Designated brewing rice is only about a quarter of the rice used. Ordinary eating rice makes a great deal of sake, some of it good. See <a href=\"rice.html\">Sake Rice</a>.",ja:"指定された酒造好適米は、使われる米の四分の一ほどにすぎない。飯米からも多くの酒が造られ、その一部は良い酒である。<a href=\"rice.html\">酒米</a>を参照。",zh:"指定的酒造好適米僅占用米量約四分之一。一般食用米也釀出大量清酒，其中不乏好酒。參見<a href=\"rice.html\">酒米</a>。"}],
            [{en:"“Sake must be drunk within days of opening.”",ja:"「開けたら数日で飲み切らねばならない」",zh:"「開瓶後必須幾天內喝完。」"},
             {en:"A delicate ginjō fades quickly; a junmai will hold a week or two refrigerated, and a koshu will hold months. Recap tightly and keep it cold and upright.",ja:"繊細な吟醸は速く褪せるが、純米は冷蔵で一、二週間、古酒なら数か月もつ。栓をしっかり閉め、冷たく、立てて置くこと。",zh:"纖細的吟釀消退得快；純米冷藏可放一至兩週，古酒則可放數月。請把瓶蓋旋緊，並保持低溫直立存放。"}]
          ] }
      ]
    },

{ t:"section", id:"more-basics",
      title:{ en:"More on what is in the bottle", ja:"瓶の中身について、もう少し", zh:"再談瓶中之物" }, jp:"追補",
      body:[
        { t:"defs", items:[
          { term:{en:"What is the difference between sake and shōchū?",ja:"日本酒と焼酎はどう違うのか。",zh:"清酒與燒酎有何不同？"},
            def:{en:"Sake is brewed and never distilled, at 15–16%. Shōchū is distilled, at 25% and up, and can be made from barley, sweet potato, rice or buckwheat. They share the kōji step and nothing after it. Awamori is the older Okinawan relative, made with black kōji on long-grain Thai rice.",
              ja:"日本酒は醸造酒であり、蒸留しない。度数は15〜16%。焼酎は蒸留酒で25度以上、麦・甘藷・米・蕎麦などから造られる。麹の工程を共有し、その後は何も共有しない。泡盛は沖縄のより古い親戚であり、タイ産の長粒米に黒麹を用いる。",
              zh:"清酒是釀造酒、從不蒸餾，酒精 15–16%。燒酎是蒸餾酒，25% 以上，可用大麥、番薯、米或蕎麥製成。兩者共享製麴這一步，此後便毫無共通。泡盛是沖繩更古老的親戚，以黑麴用於泰國長粒米製成。"} },
          { term:{en:"Is nihonshu the same as “rice wine”?",ja:"日本酒は「ライスワイン」と同じか。",zh:"日本酒等同於「米酒」嗎？"},
            def:{en:"The phrase is common in English and misleading. Wine ferments sugar that is already in the fruit; sake must first convert starch to sugar with a mould. Chinese huangjiu and Korean makgeolli are the genuine relatives, and all three are grain drinks rather than fruit ones.",
              ja:"英語でよく使われる表現だが、誤解を招く。ワインは果実にすでにある糖を発酵させるが、日本酒はまず菌によって澱粉を糖に変えねばならない。真の親戚は中国の黄酒と韓国のマッコリであり、三つとも果実の酒ではなく穀物の酒である。",
              zh:"這個說法在英文中很常見，卻具誤導性。葡萄酒發酵的是果實中既有的糖；清酒必須先以菌把澱粉轉為糖。真正的親戚是中國黃酒與韓國馬格利，三者都是穀物酒而非果實酒。"} },
          { term:{en:"Why is some sake cloudy?",ja:"濁っている酒があるのはなぜか。",zh:"為何有些清酒是混濁的？"},
            def:{en:"Because it was filtered through a coarse mesh so rice solids pass — nigori. It is still legally seishu, because the law only requires that the mash be strained, not that the result be clear. An unstrained mash is doburoku and a different licensed product.",
              ja:"目の粗い漉しを通し、米の固形分を残したからである——にごり酒。法は醪をこすことを求めるだけで、澄んでいることは求めないため、これも法的には清酒である。まったく漉さない醪はどぶろくであり、別に免許された製品である。",
              zh:"因為它以粗網過濾，讓米的固形物通過——即濁酒。它在法律上仍是清酒，因為法律只要求醪須經過濾，並未要求成品必須清澈。完全未過濾的醪則是濁醪，屬另一種持照產品。"} },
          { term:{en:"What is the little bubble on the surface?",ja:"表面の小さな泡は何か。",zh:"表面的小氣泡是什麼？"},
            def:{en:"Residual carbon dioxide from fermentation, common in freshly pressed and unpasteurised sake. It is a sign of youth rather than a fault, it lifts the aroma, and it fades over months. If a bottle fizzes strongly and the label says <em>活性</em>, it is still fermenting — chill it and open it slowly.",
              ja:"発酵から残った炭酸ガスであり、搾りたてや生の酒によく見られる。欠点ではなく若さの徴で、香りを持ち上げ、数か月で抜けていく。強く泡立ち、酒標に「活性」とあれば、それはまだ発酵している。冷やして、ゆっくり開けること。",
              zh:"發酵殘留的二氧化碳，常見於剛榨出的酒與生酒。這是年輕的徵象而非缺陷，能托起香氣，並在數月間消散。若酒瓶氣泡強烈且標示「活性」，代表它仍在發酵——請冰鎮並緩慢開瓶。"} },
          { term:{en:"Does sake have a vintage?",ja:"日本酒に「年」はあるのか。",zh:"清酒有年份嗎？"},
            def:{en:"It has a brewing year (BY, 1 July to 30 June) and a bottling date, but not a vintage in the wine sense, because consistency is the stated goal and brewers adjust deliberately to cancel out crop variation. A few breweries do bottle single years unblended and say so; that is a deliberate exception.",
              ja:"醸造年度（BY、七月一日から六月三十日）と製造年月はあるが、ワインの意味での作柄はない。恒常性が明示された目標であり、造り手は作柄の差を打ち消すよう意図的に調整するからである。単年を調合せずに詰め、そう記す蔵も少数あるが、それは意図された例外である。",
              zh:"它有釀造年度（BY，7 月 1 日至 6 月 30 日）與裝瓶年月，但沒有葡萄酒意義上的年份，因為一致性是既定目標，釀造者會刻意調整以抵消作物差異。少數酒藏確實以單一年度不調和裝瓶並載明——那是刻意為之的例外。"} },
          { term:{en:"Why is there so much variation in bottle size?",ja:"瓶の大きさがまちまちなのはなぜか。",zh:"瓶子大小為何差異這麼大？"},
            def:{en:"The two standards, 720 ml and 1,800 ml, are four <em>gō</em> and one <em>shō</em> — pre-metric Japanese volume units that survived into the modern trade. Smaller 300 ml and 180 ml bottles exist for single servings, and 500 ml and 375 ml are increasingly used for sake designed for a wine list.",
              ja:"標準の二つ、720mlと1,800mlは、四合と一升である。尺貫法の容量の単位が現代の商いに残ったものである。一人前の300mlや180mlの瓶もあり、ワインリストを想定した酒では500mlや375mlも増えている。",
              zh:"兩種標準規格 720 ml 與 1,800 ml，即四合與一升——公制之前的日本容量單位延續到現代商業。也有供單份飲用的 300 ml 與 180 ml，而為酒單設計的酒款則愈來愈多採用 500 ml 與 375 ml。"} }
        ] }
      ]
    },

    { t:"section", id:"practical",
      title:{ en:"Practical situations", ja:"実際の場面", zh:"實際情境" }, jp:"場面別",
      body:[
        { t:"defs", items:[
          { term:{en:"I am ordering for a table of six. What do I do?",ja:"六人の席で頼むとしたら。",zh:"六人一桌，該怎麼點？"},
            def:{en:"Order by the bottle, not the glass, and get two 720 ml bottles that are different from each other rather than one of each of six things. A junmai for the food and a ginjō for the start covers most tables. Ask the staff which of the two they would warm.",
              ja:"杯ではなく瓶で頼み、六種を一本ずつではなく、互いに異なる四合瓶を二本取ること。料理に純米、始まりに吟醸で、たいていの卓は覆える。二本のうちどちらを燗にするか、店に尋ねるとよい。",
              zh:"以瓶為單位點，而非按杯；點兩支互不相同的 720 ml，而不是六款各一。一支純米佐餐、一支吟釀開場，多數餐桌都能應付。問問店員這兩支哪一支他們會加熱。"} },
          { term:{en:"How much should I buy for a dinner party?",ja:"家で人を招くなら、どれだけ買えばよいか。",zh:"辦晚宴該買多少？"},
            def:{en:"Roughly 200 ml per person over a long meal, so a 720 ml bottle serves three or four alongside other drinks. Two different bottles for six people is more interesting than one large one, and leftovers keep better in a smaller bottle.",
              ja:"長い食事で一人あたりおよそ200ミリリットル。したがって四合瓶一本で、他の飲み物と併せて三、四人に足りる。六人なら大瓶一本より、異なる二本のほうが面白く、残りも小さな瓶のほうがよく保つ。",
              zh:"一頓長餐每人約 200 毫升，因此一支 720 ml 搭配其他飲品可供三至四人。六人的話，兩支不同的酒比一支大瓶更有意思，剩下的酒放在小瓶中也保存得更好。"} },
          { term:{en:"The bottle is huge and I live alone.",ja:"一升瓶は大きすぎる。",zh:"一升瓶太大，我一個人住。"},
            def:{en:"Buy 720 ml, or decant an isshōbin into smaller bottles as soon as you open it, filling each to the neck so there is little air. A full, tightly capped small bottle in the fridge holds far better than a half-empty large one.",
              ja:"四合瓶を買うか、一升瓶を開けたらすぐに小瓶へ移し、空気が残らぬよう首まで満たすこと。冷蔵庫のなかでは、しっかり栓をした満杯の小瓶のほうが、半分空いた大瓶よりはるかによく保つ。",
              zh:"買 720 ml，或在開瓶後立刻把一升瓶分裝進小瓶，並裝滿至瓶頸以減少空氣。冰箱裡一支裝滿並旋緊的小瓶，保存效果遠勝一支半空的大瓶。"} },
          { term:{en:"How do I warm sake without special equipment?",ja:"道具なしで燗をつけるには。",zh:"沒有專門器具怎麼溫酒？"},
            def:{en:"Boil a pan of water, take it off the heat, stand the closed bottle or a filled tokkuri in it, and wait two to three minutes. Test on the inside of your wrist: warm, not hot. Never microwave — it heats unevenly and drives off the aroma from the top of the vessel first.",
              ja:"湯を沸かして火を止め、栓をした瓶か酒を満たした徳利を立てて二、三分待つ。手首の内側で確かめる——温かく、熱くはない。電子レンジは避けること。加熱が不均一で、器の上のほうから先に香りを飛ばしてしまう。",
              zh:"把水煮沸後離火，將旋緊的酒瓶或裝滿酒的德利立在其中，等兩到三分鐘。用手腕內側試溫：溫，不燙。切勿用微波爐——加熱不均，且會先把容器上層的香氣趕跑。"} },
          { term:{en:"I have a bottle I was given and no idea what it is.",ja:"もらった一本の素性が分からない。",zh:"別人送的酒，我完全不知道那是什麼。"},
            def:{en:"Look for four things in this order: 純米 or not; a milling percentage; 生 (keep it cold); and the bottling date. Those four place almost any bottle. If the date is more than a year old and it is a ginjō, drink it soon and do not judge the brewery by it.",
              ja:"この順に四つを探すこと。純米か否か、精米歩合、「生」の字（あれば冷蔵）、そして製造年月。この四つでほとんどの瓶は位置づけられる。日付が一年以上前で吟醸であれば、早めに飲み、その蔵をそれで判断しないこと。",
              zh:"依序找四樣東西：是否為純米；精米步合；有無「生」字（有就冷藏）；以及製造年月。這四項幾乎能定位任何一瓶酒。若日期已超過一年且是吟釀，請盡快喝掉，也別以它評斷那家酒藏。"} },
          { term:{en:"Can I take sake as a gift to a Japanese host?",ja:"日本の家庭への手土産に日本酒は適切か。",zh:"可以帶清酒當伴手禮送給日本主人嗎？"},
            def:{en:"Yes, and a bottle from your own region or country is more interesting than a Japanese one they can buy locally. Present it with both hands, and do not expect it to be opened in front of you — that is normal, not a rejection.",
              ja:"よい。むしろ自分の地域や国のものを持参するほうが、その場で買える日本の酒より面白い。両手で差し出すこと。そしてその場で開けられなくても、それは普通のことであり、拒まれたのではない。",
              zh:"可以，而且帶一支來自你自己地區或國家的酒，比帶一支他們就地能買到的日本酒更有意思。請以雙手奉上；若對方沒有當場開瓶，那是常態，並非婉拒。"} },
          { term:{en:"What should I not say to a brewer?",ja:"造り手に言わないほうがよいことは。",zh:"有什麼是不該對釀造者說的？"},
            def:{en:"“It's like wine” is meant as a compliment and rarely lands as one. Nor does asking whether the sake is “premium” — the designations exist precisely so nobody has to answer that. What does work: ask what they changed this year, and why.",
              ja:"「ワインのようだ」は褒め言葉のつもりでも、そう受け取られることはまれである。「高級な酒ですか」も同じである。特定名称という制度は、まさに誰もそれに答えずに済むよう存在している。効くのはこうである——今年は何を変えたのか、そしてなぜか。",
              zh:"「這很像葡萄酒」本意是稱讚，卻鮮少被如此接收；問「這是高級酒嗎」也一樣——特定名稱制度的存在，正是為了讓沒有人需要回答這個問題。真正有效的問法是：今年你改了什麼，為什麼。"} }
        ] }
      ]
    },

{ t:"section", id:"labels-dates",
      title:{ en:"Labels, dates and the words on the back", ja:"ラベル・日付・裏の表示", zh:"酒標、日期與背標上的字" }, jp:"表示について",
      body:[
        { t:"defs", items:[
          { term:{en:"What does BY mean on a label?",ja:"ラベルのBYとは何か。",zh:"酒標上的 BY 是什麼意思？"},
            def:{en:"Brewery year — <em>shuzō nendo</em> — which runs from 1 July to 30 June rather than January to December. A bottle marked 6BY was brewed in the season that began in July of that year. It starts in the dead season so that one brewing campaign falls entirely inside one accounting period.",
              ja:"酒造年度のことである。一月から十二月ではなく、七月一日から翌年六月三十日までを一年とする。6BYと記された瓶は、その年の七月に始まった季に醸されたものである。一つの造りがまるごと一つの会計期間に収まるよう、閑期に始まる。",
              zh:"是「酒造年度」（shuzō nendo），從七月一日到隔年六月三十日，而不是一月到十二月。標示 6BY 的酒，是在該年七月開始的那一季所釀。它從淡季起算，好讓一整個釀造季完整落在同一個會計期間內。"} },
          { term:{en:"Why is there no best-before date?",ja:"なぜ賞味期限がないのか。",zh:"為什麼沒有賞味期限？"},
            def:{en:"Because sake does not become unsafe. At 15% alcohol nothing pathogenic grows in it, so Japanese law requires only the month of bottling. What an old bottle loses is aroma and freshness, not safety — and for a koshu, age is the point rather than the problem.",
              ja:"危険にならないからである。アルコール15%のなかで病原性のものは育たず、法が求めるのは製造年月のみである。古い瓶が失うのは安全ではなく香りと新しさであり、古酒にとって年月は問題ではなく眼目である。",
              zh:"因為清酒不會變得不安全。在 15% 酒精度下不會生長病原體，因此日本法規只要求標示裝瓶月份。老酒失去的是香氣與鮮度，不是安全性；而對古酒而言，年歲是重點而非問題。"} },
          { term:{en:"Nama, nama-chozō, nama-zume — what is the difference?",ja:"生酒、生貯蔵酒、生詰酒の違いは。",zh:"生酒、生貯藏酒、生詰酒有什麼不同？"},
            def:{en:"Sake is normally pasteurised twice, once before storage and once at bottling. <em>Nama</em> skips both and needs the fridge; <em>nama-chozō</em> skips the first and is shelf-stable; <em>nama-zume</em> skips the second, which is what autumn hiyaoroshi is. The three words describe which of the two heatings was omitted, and nothing else.",
              ja:"日本酒は通常、貯蔵前と瓶詰め時の二度火入れされる。生酒は両方を省き冷蔵を要する。生貯蔵酒は一度目を省き、常温で持つ。生詰酒は二度目を省いたもので、秋のひやおろしがこれである。三つの語が記しているのは、二度のうちどちらを省いたかだけである。",
              zh:"清酒通常火入兩次：貯藏前一次、裝瓶時一次。「生酒」兩次都不做，需要冷藏；「生貯藏酒」略過第一次，可常溫保存；「生詰酒」略過第二次，秋季的冷卸就是這一種。這三個詞說的只是「兩次加熱中省了哪一次」，別無其他。"} },
          { term:{en:"Why do some bottles say 要冷蔵 and others not?",ja:"なぜ要冷蔵とある瓶とない瓶があるのか。",zh:"為什麼有些瓶子寫「要冷藏」，有些沒有？"},
            def:{en:"Because storage advice is required only where the product genuinely needs it. Its presence on a nama is meaningful; its absence on a pasteurised bottle is not an omission. A shop that refrigerates everything anyway is simply being careful, which is a good sign.",
              ja:"保存方法の表示は、実際に必要な製品にのみ求められるからである。生酒にそれがあることには意味があり、火入れ酒にないことは不備ではない。すべてを冷蔵している店は用心しているだけであり、それはよい徴である。",
              zh:"因為保存方式只有在產品確實需要時才要求標示。生酒上有它是有意義的；火入酒上沒有並不是漏寫。至於把所有酒都冷藏的店家，只是比較謹慎——那是好跡象。"} },
          { term:{en:"The back label says +5 and 1.4. What are those?",ja:"裏に+5、1.4とある。これは何か。",zh:"背標上寫 +5 和 1.4，那是什麼？"},
            def:{en:"Sake meter value and acidity. The first is a density reading: plus means less residual sugar, minus more. The second is a titration of the organic acids. Read the acidity first — it moves perceived dryness and structure at least as much as the sugar does, and a +5 with acidity 1.9 is a different drink from a +5 with acidity 1.1.",
              ja:"日本酒度と酸度である。前者は比重の読みで、プラスは残糖が少なく、マイナスは多い。後者は有機酸の滴定である。先に読むべきは酸度である。辛さと骨格の体感を、糖と少なくとも同程度に動かすからであり、酸度1.9の+5と酸度1.1の+5は別の飲み物である。",
              zh:"日本酒度與酸度。前者是比重讀數：正號代表殘糖較少，負號較多。後者是有機酸的滴定值。先讀酸度——它對「辛不辛、有沒有骨架」的影響至少不亞於糖；酸度 1.9 的 +5 與酸度 1.1 的 +5，是兩種不同的酒。"} }
        ] }
      ] },

    { t:"section", id:"more-practical",
      title:{ en:"More practical questions", ja:"さらに実際的な問い", zh:"更多實務問題" }, jp:"実務",
      body:[
        { t:"defs", items:[
          { term:{en:"Can I age sake at home?",ja:"家で熟成させられるか。",zh:"我可以在家熟成清酒嗎？"},
            def:{en:"You can, but understand what you are doing. Ageing is Maillard browning plus ester loss, and the rate roughly doubles for every ten degrees warmer. A cupboard at 20 °C will make an amber, caramelised sake in a few years; a fridge will keep a sake nearly unchanged for the same period. Both are legitimate; neither turns a daiginjō into a better daiginjō. Keep it dark and upright either way.",
              ja:"できる。ただし何をしているのかを理解すること。熟成とはメイラードの褐変とエステルの喪失であり、速さは十度ごとにおよそ倍になる。20℃の戸棚は数年で琥珀色の、カラメル様の酒を生み、冷蔵庫は同じ期間ほとんど変えない。いずれも正当だが、いずれも大吟醸をより優れた大吟醸にはしない。どちらにせよ、暗く、立てて置くこと。",
              zh:"可以，但要清楚自己在做什麼。熟成是梅納褐變加上酯類流失，而速率大約每升高十度就加倍。20 °C 的櫥櫃幾年內會做出琥珀色、帶焦糖味的酒；冰箱則會讓同一支酒在相同期間內幾乎不變。兩者都正當，但都不會把大吟釀變成更好的大吟釀。無論哪種，都要避光並直立存放。"} },
          { term:{en:"My daiginjō was less enjoyable than a cheap junmai. Did I do something wrong?",ja:"大吟醸より安い純米のほうが旨かった。何か間違えたか。",zh:"我的大吟釀比便宜的純米還不好喝，是我做錯了什麼嗎？"},
            def:{en:"Probably not. Polishing buys cleanliness and aroma, not pleasure, and below about 50% the returns diminish sharply. If you were drinking with food, or drinking it warm, or drinking it over an hour rather than in ten minutes, the junmai was very likely the better instrument for the job. The designations are a floor, not a ranking of enjoyment.",
              ja:"おそらく間違えていない。精米が買うのは清らかさと香りであって快さではなく、およそ50%を下回れば効果は急速に逓減する。料理とともに飲んだのなら、燗にしたのなら、十分ではなく一時間かけて飲んだのなら、その仕事に向いた道具は純米であった見込みが高い。特定名称は下限であって、楽しさの順位ではない。",
              zh:"多半沒有。精米買到的是乾淨與香氣，不是愉悅；而低於約 50% 之後報酬急遽遞減。如果你是配著菜喝、溫著喝，或是花一小時而非十分鐘慢慢喝，那麼純米很可能才是這份工作對的工具。特定名稱是一道下限，不是「好喝程度」的排名。"} },
          { term:{en:"Why does one sake smell of banana and another of apple?",ja:"バナナの香りとリンゴの香りは何が違うのか。",zh:"為什麼有的清酒是香蕉味，有的是蘋果味？"},
            def:{en:"Two different esters produced by two different yeast strains. Isoamyl acetate reads as banana and pear drop; ethyl caproate reads as green apple and melon. Yeasts differ sharply in which they favour, so a brewery choosing a strain is largely choosing between the two — and the choice is invisible on the label.",
              ja:"異なる酵母株が生む、二つの異なるエステルである。酢酸イソアミルはバナナや洋梨の飴に、カプロン酸エチルは青林檎やメロンに読まれる。酵母はどちらを好むかで大きく分かれるから、蔵が株を選ぶことは、おおむねこの二つの選択である。そしてその選択はラベルに現れない。",
              zh:"是兩種不同酵母株所產生的兩種不同酯類。乙酸異戊酯讀來是香蕉與梨子糖，己酸乙酯讀來是青蘋果與哈密瓜。不同酵母對兩者的偏好差異極大，因此酒藏選擇菌株，大體上就是在這兩者之間選——而這個選擇在酒標上看不見。"} },
          { term:{en:"Which glass should I use?",ja:"どの器を使えばよいか。",zh:"我該用哪種杯子？"},
            def:{en:"For cold aromatic sake, anything with a narrowing mouth — a small wine glass is excellent. For warm sake or a savoury junmai, a heavier ceramic cup, which holds heat and delivers the liquid further back on the tongue. If you want to judge rather than enjoy, use plain white porcelain: colour is one of the things being assessed, and a glaze hides it.",
              ja:"冷やした香りある酒には、口の窄まったもの——小ぶりのワイングラスが優れている。燗や旨味の純米には、熱を保ち、液を舌のより奥へ届ける重い陶の杯を。楽しむのではなく判じたいなら、白磁を用いること。色は評価の対象であり、釉はそれを隠す。",
              zh:"冷飲的芳香型清酒，用任何口部收窄的杯子——小型葡萄酒杯很好。溫飲或旨味型純米，用較重的陶杯，它能保溫並把酒送到舌頭更後方。若你想評判而非享受，就用素白瓷：色澤是評判項目之一，而釉會把它遮住。"} },
          { term:{en:"How do I warm sake in a restaurant that only serves it cold?",ja:"冷やしか出さない店で燗にするには。",zh:"在只供冷酒的餐廳裡，怎麼喝到溫的？"},
            def:{en:"Ask for a bowl or jug of hot water and stand the flask or glass in it for two or three minutes. Most kitchens will oblige, and it is a normal request in Japan. Do not ask them to microwave it: uneven heating is exactly what makes warm sake taste harsh, and it is the reason many people believe they dislike it.",
              ja:"湯を張った器を頼み、徳利か杯を二、三分立てるとよい。多くの店は応じてくれるし、日本では普通の頼みごとである。電子レンジで温めてくれとは頼まないこと。不均一な加熱こそが燗を荒くするものであり、多くの人が燗を嫌いだと思い込んでいる理由である。",
              zh:"請店家給你一碗或一壺熱水，把酒壺或杯子立在裡面兩三分鐘。多數廚房都會照辦，在日本這是很正常的要求。但別請他們用微波爐加熱：受熱不均正是讓溫酒變得粗糙的原因，也是許多人以為自己討厭溫酒的原因。"} },
          { term:{en:"I have a bottle I don't like. What now?",ja:"気に入らない瓶がある。どうするか。",zh:"我有一支不喜歡的酒，該怎麼辦？"},
            def:{en:"Before giving up on it, try it warm and try it with strong food — most sake that seems dull cold is simply being served at the wrong temperature for what it is. If it still does not work, it is better cooking sake than anything sold as cooking sake: keep it by the stove and use it freely.",
              ja:"諦める前に、燗にしてみること、そして味の強い料理と合わせてみること。冷たいと退屈に思える酒の多くは、その酒に合わぬ温度で供されているだけである。それでも駄目なら、料理酒として売られるどんなものよりよい料理酒である。竈の傍らに置き、惜しまず使うとよい。",
              zh:"在放棄之前，先試著溫熱喝，並配重口味的菜——大多數冰著顯得無趣的酒，只是被以不適合它的溫度端上來而已。若還是不行，它也比任何標榜為料理酒的東西都好用：放在爐邊，放手拿來做菜。"} }
        ] }
      ] },

    { t:"section", id:"about-the-craft",
      title:{ en:"About the craft and the people", ja:"技と人について", zh:"關於技藝與人" }, jp:"造りと人",
      body:[
        { t:"defs", items:[
          { term:{en:"Why is there a big brown ball hanging outside the brewery?",ja:"軒の大きな茶色い玉は何か。",zh:"酒藏門口那顆褐色的大球是什麼？"},
            def:{en:"A <em>sugidama</em>: a sphere of cedar sprigs, hung fresh and green when the season's first sake has been pressed and left to brown through the year. A brown one is not neglect — it is the correct state for autumn, and it tells passers-by that the sake inside has been maturing since winter.",
              ja:"杉玉である。その季の初めの酒が搾られたときに、青い新しいものを掲げ、一年をかけて茶に変わってゆく。茶色いのは放置ではない。秋における正しい状態であり、中の酒が冬から熟しつつあることを通りがかりに告げている。",
              zh:"那是「杉玉」：以杉葉紮成的球，在當季第一批酒壓榨完成時掛上新鮮的綠球，並在一年中逐漸轉褐。褐色不是疏於照料——那是秋天的正確狀態，它告訴路人：裡頭的酒自冬天以來一直在熟成。"} },
            { term:{en:"Is it true women were not allowed in breweries?",ja:"女性は蔵に入れなかったというのは本当か。",zh:"女性真的不能進酒藏嗎？"},
            def:{en:"There was a folk prohibition, never a law and never universal, and it is essentially gone. It applied to the brewing floor during the season and not to the business, the shop or the household — which women largely ran. Women now work throughout the industry, including as tōji.",
              ja:"俗信による禁はあったが、法ではなく、普遍でもなく、事実上消えた。それは造りの季における作業場に及び、商い、店、家には及ばなかった。そしてそれらは、おおむね女性が回していた。今日、女性は杜氏を含め業界の全域で働いている。",
              zh:"確實有過民間禁忌，但從不是法律，也不普遍，如今實質上已消失。它適用於釀造季的釀造現場，不適用於生意、店面或家務——而那些大半正是由女性在打理。如今女性在整個產業各處工作，包括擔任杜氏。"} },
          { term:{en:"Why is a mould Japan's national fungus?",ja:"なぜカビが日本の国菌なのか。",zh:"為什麼一種黴菌是日本的國菌？"},
            def:{en:"Because Aspergillus oryzae makes sake, miso, soy sauce, mirin and rice vinegar — effectively the whole savoury base of Japanese cooking. It was formally recognised by the Brewing Society of Japan in 2006. No other country has designated a national micro-organism, which is a small fact that says a good deal.",
              ja:"ニホンコウジカビが、日本酒、味噌、醤油、味醂、米酢——すなわち日本の味の基層のほぼすべてを作るからである。平成十八年（2006）に日本醸造学会が正式に認定した。国の微生物を定めた国は他になく、これは小さいながら多くを語る事実である。",
              zh:"因為米麴菌製造了清酒、味噌、醬油、味醂與米醋——實質上是日本料理鮮味的整個基底。它於二〇〇六年由日本釀造學會正式認定。沒有其他國家指定過國家級微生物；這是一個很小、卻很說明問題的事實。"} },
          { term:{en:"Why do brewers avoid nattō?",ja:"なぜ蔵人は納豆を避けるのか。",zh:"為什麼藏人不吃納豆？"},
            def:{en:"Nattō is made with a bacterium that grows faster than the kōji mould, survives on skin and clothing, and can take over a kōji room. It is the most feared contaminant in a brewery, and many brewers avoid nattō for the whole five-month season. Visitors are asked not to eat it on the morning of a tour.",
              ja:"納豆は、麹菌より速く育ち、肌や衣服の上で生き延び、麹室を乗っ取りうる細菌で作られるからである。蔵で最も恐れられる汚染源であり、五か月の季を通じて納豆を断つ蔵人は多い。見学の朝には、訪う者にも控えるよう求められる。",
              zh:"因為納豆是以一種比麴菌長得更快、能在皮膚與衣物上存活、並可能占領麴室的細菌製成的。它是酒藏最畏懼的污染源，許多藏人整整五個月的釀造季都不碰納豆；訪客也會被要求參訪當天早上別吃。"} },
          { term:{en:"Is sake brewed outside Japan real sake?",ja:"日本の外で醸された酒は本物か。",zh:"在日本以外釀的酒算真的清酒嗎？"},
            def:{en:"It is real sake in every technical sense — the same mould, the same parallel fermentation, often the same yeasts. What it may not legally be called in Japan is <em>nihonshu</em>, a term protected since 2015 for sake made in Japan from Japanese rice. Foreign brewing has turned out to be the most effective advertisement the drink has had.",
              ja:"技術のいかなる意味においても本物の酒である——同じ菌、同じ並行複発酵、しばしば同じ酵母。日本において法的に名乗れないのは日本酒の語であり、これは2015年以降、国産米を用い日本で造られたものに保護されている。海外での酒造りは、この飲み物が得た最も有効な広告であったことが判明した。",
              zh:"就技術的任何意義而言，它都是真正的清酒——同樣的黴菌、同樣的並行複發酵，往往還是同樣的酵母。它在日本法律上不能叫的是「日本酒」，這個詞自二〇一五年起僅保護以日本產米、在日本釀造者。而海外的釀造，結果證明是這種飲品有史以來最有效的廣告。"} }
        ] }
      ] },

    { t:"related", items:[
      { href:"start.html", why:{ en:"The same ground covered in order rather than by question.", ja:"同じ範囲を、問いごとではなく順に。", zh:"同樣的內容，依順序而不是依問題排列。" } },
      { href:"label.html", why:{ en:"The buying questions, answered from the bottle itself.", ja:"買うことの問いに、瓶そのものから答える。", zh:"關於購買的問題，直接從瓶身回答。" } },
      { href:"serving.html", why:{ en:"The serving questions, with the physics attached.", ja:"供することの問いに、物理を添えて。", zh:"關於供酒的問題，附上物理。" } },
      { href:"health.html", why:{ en:"The body questions, with the arithmetic.", ja:"体の問いに、算術を添えて。", zh:"關於身體的問題，附上算術。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- glossary */
SAKE.pages["glossary"] = {
  kicker: { en: "Reference · 08", ja: "資料 · 08", zh: "資料 · 08" },
  title:  { en: "Glossary", ja: "用語集", zh: "詞彙表" },
  jp: "用語集 · 約390語",
  lede: {
    en: "Roughly four hundred terms, with the Japanese as it appears on labels and in breweries. Type in the box to filter — the search matches romaji, kanji, category and definition text in the language currently displayed.",
    ja: "およそ四百語。日本語表記は、ラベルや蔵で実際に使われる形で示した。入力欄に打ち込むと絞り込める。検索はローマ字・漢字・分類、および現在表示中の言語の説明文に対して働く。",
    zh: "約四百個詞條，日文寫法採用酒標與酒藏中實際使用的形式。在輸入框中鍵入即可篩選——搜尋比對羅馬拼音、漢字、分類，以及目前顯示語言的說明文字。"
  },
  body: [
            { t:"figure",
          caption:{
            en:"The glossary counted by category, which is a fair portrait of where the vocabulary actually lives. Process alone is a fifth of it — sake has more named steps than any other fermented drink, and most of them exist because somebody needed to tell an apprentice exactly which of four similar operations to perform tonight. The categories are coloured by which part of the subject they belong to; the long tail on the right is the part of the language a drinker can safely ignore for a year.",
            ja:"用語集を分類ごとに数えたもの。語彙が実際にどこに住んでいるかの、公平な肖像である。工程だけで全体の五分の一を占める——日本酒は他のどの醸造酒よりも名を持つ工程が多く、その多くは、四つの似た作業のうち今夜どれを行うのかを弟子に正確に伝える必要があった者がいたために存在する。分類は、それが主題のどの部分に属するかで色分けしてある。右の長い尾は、飲み手が一年のあいだ安心して無視できる部分の言葉である。",
            zh:"把詞彙表依類別數出來，這是一幅相當公允的肖像，顯示這套語彙實際上住在哪裡。光是「製程」就占了五分之一——清酒擁有的具名工序比任何其他發酵酒都多，而其中大半之所以存在，是因為有人必須明確告訴學徒：四個相似的動作裡，今晚要做的是哪一個。類別依其所屬的主題面向著色；右側那條長尾，是飲者可以安心忽略上一整年的那部分語言。" },
          svg: function (lang, L) {
            var W = 760, H = 348, Y0 = 54, RH = 20, MAX = 82;
            var groups = {
              make:  { f:"#C0AF8E", n:{ en:"making", ja:"造り", zh:"釀造" } },
              read:  { f:"#8B9BA6", n:{ en:"understanding", ja:"理解", zh:"理解" } },
              drink: { f:"#9FB0A6", n:{ en:"drinking", ja:"飲む", zh:"品飲" } },
              world: { f:"#CBB3AC", n:{ en:"its world", ja:"周辺", zh:"周邊" } }
            };
            var rows = [
              { v:82, g:"make",  n:{ en:"Process", ja:"工程", zh:"製程" } },
              { v:35, g:"read",  n:{ en:"Category", ja:"分類", zh:"分類" } },
              { v:29, g:"world", n:{ en:"Culture", ja:"文化", zh:"文化" } },
              { v:26, g:"world", n:{ en:"People", ja:"人物", zh:"人物" } },
              { v:26, g:"drink", n:{ en:"Tasting", ja:"官能", zh:"品評" } },
              { v:22, g:"make",  n:{ en:"Ingredients", ja:"原料", zh:"原料" } },
              { v:22, g:"drink", n:{ en:"Service", ja:"提供", zh:"供飲" } },
              { v:20, g:"make",  n:{ en:"Rice variety", ja:"酒米品種", zh:"酒米品種" } },
              { v:15, g:"read",  n:{ en:"Law", ja:"法令", zh:"法規" } },
              { v:13, g:"drink", n:{ en:"Vessels", ja:"酒器", zh:"酒器" } },
              { v:12, g:"read",  n:{ en:"Numbers", ja:"数値", zh:"數值" } },
              { v:12, g:"read",  n:{ en:"Chemistry", ja:"成分", zh:"成分" } },
              { v:11, g:"make",  n:{ en:"Yeast", ja:"酵母", zh:"酵母" } },
              { v:10, g:"read",  n:{ en:"Faults", ja:"欠点", zh:"缺陷" } },
              { v:9,  g:"make",  n:{ en:"Microbes", ja:"微生物", zh:"微生物" } },
              { v:8,  g:"world", n:{ en:"Trade", ja:"産業", zh:"產業" } },
              { v:8,  g:"world", n:{ en:"History", ja:"歴史", zh:"歷史" } },
              { v:7,  g:"make",  n:{ en:"Equipment", ja:"設備", zh:"設備" } },
              { v:6,  g:"make",  n:{ en:"Kōji", ja:"麹", zh:"麴" } },
              { v:5,  g:"read",  n:{ en:"Styles", ja:"酒質", zh:"酒質" } },
              { v:5,  g:"drink", n:{ en:"Drinks", ja:"酒類", zh:"酒類" } },
              { v:4,  g:"make",  n:{ en:"Water", ja:"水", zh:"水" } },
              { v:3,  g:"make",  n:{ en:"Lees", ja:"酒粕", zh:"酒粕" } },
              { v:2,  g:"world", n:{ en:"Place", ja:"産地", zh:"產地" } },
              { v:2,  g:"make",  n:{ en:"Rice", ja:"米", zh:"米" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var kx = 30, gk = ["make", "read", "drink", "world"], i;
            for (i = 0; i < gk.length; i++) {
              var lab = L(groups[gk[i]].n);
              s += '<rect x="' + kx + '" y="20" width="12" height="12" fill="' + groups[gk[i]].f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (kx + 18) + '" y="30" font-size="9.5" fill="#8B857C">' + lab + '</text>';
              kx += 18 + lab.length * (lab.charCodeAt(0) > 0x2E80 ? 9.5 : 5.2) + 24;
            }
            s += '<text x="730" y="30" text-anchor="end" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "全三百九十四語" : lang === "zh" ? "共三百九十四詞" : "394 TERMS IN ALL") + '</text>';
            var half = 13, j;
            for (i = 0; i < rows.length; i++) {
              var col = i < half ? 0 : 1, r = rows[i];
              var ox = 30 + col * 370, y = Y0 + (i - col * half) * RH;
              var bx = ox + 112, bw = 190;
              s += '<text x="' + (bx - 10) + '" y="' + (y + 11) + '" text-anchor="end" font-size="10" fill="#201E1B">' + L(r.n) + '</text>';
              s += '<rect x="' + bx + '" y="' + (y + 2) + '" width="' + (r.v / MAX * bw).toFixed(1) + '" height="12" fill="' + groups[r.g].f + '"/>';
              s += '<text x="' + (bx + r.v / MAX * bw + 7).toFixed(1) + '" y="' + (y + 11) + '" font-size="9.5" fill="#8B857C">' + r.v + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "数えているのはこの用語集の項目であって、日本語における語の総数ではない。境の引き方は編むうえでの判断である。"
                  : lang === "zh" ? "所數的是本詞彙表的條目，而非日語中詞彙的總數；類別界線如何劃分，是編纂上的判斷。"
                  : "This counts the entries in this glossary, not the words in the language. Where the boundaries fall is an editorial judgement.") + '</text>';
            s += '</svg>';
            return s;
          } },
{ t:"glossary",
      placeholder: { en: "Filter — try “kōji”, “生”, “starter”, “temperature”…", ja: "絞り込み——「麹」「酒母」「温度」など", zh: "篩選——試試「麴」「酒母」「溫度」…" },
      items: [

/* ---------------- INGREDIENTS ---------------- */
{ r:"sakamai", jp:"酒米", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Rice used for sake, whether purpose-bred or table rice pressed into service.",ja:"酒造りに用いる米。酒造専用に育成されたものも、転用された飯米も含む。",zh:"用於釀酒的米，無論是專門育成或轉用的食用米。"} },
{ r:"shuzō-kōtekimai", jp:"酒造好適米", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"“Rice well-suited to brewing” — the officially recognised sake varieties, of which there are over 120. Large-grained, low-protein, with a chalky core.",ja:"酒造りに適した米として公認された品種。百二十を超える。粒が大きく、たんぱく質が少なく、心白をもつ。",zh:"「適於釀造之米」——官方認定的釀酒品種，逾一百二十種。粒大、低蛋白、具心白。"} },
{ r:"shinpaku", jp:"心白", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"The opaque white core of a sake rice grain, where starch granules are loosely packed. Steam and kōji hyphae penetrate here.",ja:"酒米の粒の中心にある白く不透明な部分。デンプン粒が疎に詰まっており、蒸気と麹の菌糸はここへ入り込む。",zh:"酒米粒中心白濁的部分，澱粉粒堆積疏鬆；蒸氣與麴菌菌絲由此深入。"} },
{ r:"seimai-buai", jp:"精米歩合", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Milling ratio: the weight of white rice as a percentage of the brown rice it came from. 60% means 40% has been ground away.",ja:"玄米に対する白米の重量割合。60%とは、40%を削り落としたことを意味する。",zh:"精米步合：白米重量占原糙米的百分比。60% 表示已削去 40%。"} },
{ r:"genmai", jp:"玄米", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Brown rice — the grain as harvested and hulled, before milling.",ja:"籾を取り除いただけの、精米前の米。",zh:"糙米——收成脫殼後、尚未精米的穀粒。"} },
{ r:"hakumai", jp:"白米", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"White rice — the milled grain that actually enters the brewery process.",ja:"精米を終え、実際に仕込みに入る米。",zh:"白米——完成精米、實際進入釀造流程的米。"} },
{ r:"nuka", jp:"糠", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"The bran and flour removed by milling. Sold as an ingredient for pickles, crackers and animal feed.",ja:"精米で削り取られる糠と粉。漬物、煎餅、飼料などの原料として売られる。",zh:"精米所削下的米糠與米粉，作為漬物、米果與飼料的原料出售。"} },
{ r:"kake-mai", jp:"掛米", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"The plain steamed rice added to the mash, as distinct from the portion made into kōji. Around 78–80% of total rice.",ja:"麹にする分を除き、そのまま醪に加える蒸米。総米のおよそ78〜80%。",zh:"直接加入醪中的蒸米，有別於製成麴的部分，約占總米量的 78–80%。"} },
{ r:"kōji-mai", jp:"麹米", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"The portion of steamed rice grown into kōji. At least 15% of total rice for any designated sake.",ja:"麹に仕立てる蒸米。特定名称酒では総米の15%以上。",zh:"用來培養米麴的那部分蒸米。特定名稱酒須占總米量 15% 以上。"} },
{ r:"shikomi-mizu", jp:"仕込み水", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Brewing water. Around 80% of the finished sake, and twenty to thirty times the rice weight across the whole process.",ja:"仕込みに用いる水。完成した酒のおよそ80%を占め、全工程では米の重量の二十〜三十倍を用いる。",zh:"釀造用水。約占成酒的 80%，全程用量為米重的二十至三十倍。"} },
{ r:"miyamizu", jp:"宮水", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"The hard mineral water of Nishinomiya in Hyōgo, identified in 1840. High in potassium, phosphorus and calcium, very low in iron.",ja:"一八四〇年に見出された兵庫県西宮の硬水。カリウム・リン・カルシウムに富み、鉄は極めて少ない。",zh:"1840 年辨識出的兵庫西宮硬水。富含鉀、磷、鈣，鐵質極低。"} },
{ r:"kōdo", jp:"硬度", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Water hardness. Hard water ferments vigorously and finishes dry; soft water ferments gently and finishes round.",ja:"水の硬度。硬水は発酵が旺盛で辛口に、軟水は穏やかに発酵し丸く仕上がる。",zh:"水的硬度。硬水發酵旺盛、成酒偏辛；軟水發酵溫和、成酒圓潤。"} },
{ r:"kōji", jp:"麹", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Steamed rice colonised by <em>Aspergillus oryzae</em>. The enzyme source that converts starch to sugar and protein to amino acids.",ja:"麹菌を繁殖させた蒸米。デンプンを糖に、たんぱく質をアミノ酸に変える酵素の供給源である。",zh:"接種米麴菌並繁殖其上的蒸米。它是把澱粉轉為糖、蛋白質轉為胺基酸的酵素來源。"} },
{ r:"kōji-kin", jp:"麹菌", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"<em>Aspergillus oryzae</em>, designated Japan's national fungus in 2006. Yellow kōji for sake; black and white kōji for shōchū and awamori.",ja:"アスペルギルス・オリゼー。二〇〇六年に国菌と定められた。清酒には黄麹、焼酎・泡盛には黒麹・白麹。",zh:"米麴菌（Aspergillus oryzae），2006 年被定為日本「國菌」。清酒用黃麴，燒酎與泡盛用黑麴、白麴。"} },
{ r:"tane-kōji", jp:"種麹", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Kōji spores, bought from one of a small number of specialist houses, some five centuries old. Sprinkled onto steamed rice at about 100 g per tonne.",ja:"麹の胞子。五百年の歴史をもつものもある少数の種麹屋から購入する。蒸米一トンあたりおよそ100gを振る。",zh:"麴菌孢子，購自少數專業種麴商，其中有些已有五百年歷史。以每噸蒸米約 100 克撒佈。"} },
{ r:"kōbo", jp:"酵母", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Yeast — <em>Saccharomyces cerevisiae</em>, in strains domesticated for extreme ethanol tolerance and high ester production.",ja:"サッカロミセス・セレビシエ。極端なエタノール耐性と高いエステル生成能をもつよう家畜化された菌株。",zh:"酵母——釀酒酵母（Saccharomyces cerevisiae），其菌株經馴化以獲得極端乙醇耐受性與高酯類產量。"} },
{ r:"kyōkai-kōbo", jp:"きょうかい酵母", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Association yeasts, isolated and distributed by the Brewing Society of Japan since 1917 and numbered. No. 6, 7, 9, 1801 are the most consequential.",ja:"一九一七年以降、日本醸造協会が分離・頒布してきた番号付きの酵母。六号・七号・九号・1801号が最も重要である。",zh:"協會酵母，自 1917 年起由日本釀造協會分離頒布並編號。六號、七號、九號、1801 號最具影響力。"} },
{ r:"hana-kōbo", jp:"花酵母", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Yeast isolated from flowers — nadeshiko, begonia, abelia, marigold — mostly by Tokyo University of Agriculture from the 1990s.",ja:"ナデシコ、ベゴニア、アベリア、マリーゴールドなどの花から分離された酵母。多くは一九九〇年代以降、東京農業大学による。",zh:"自撫子、秋海棠、六道木、金盞花等花朵分離的酵母，多為 1990 年代起由東京農業大學所得。"} },
{ r:"kuratsuki-kōbo", jp:"蔵付き酵母", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Resident wild yeast living in a brewery's building, tools and beams. Used deliberately by a small number of houses.",ja:"蔵の建物・道具・梁に棲みついた野生酵母。少数の蔵が意図的に用いる。",zh:"棲息於酒藏建築、器具與樑柱中的常駐野生酵母，僅少數酒藏刻意使用。"} },
{ r:"jōzō-alcohol", jp:"醸造アルコール", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Neutral spirit distilled from starch or sugar sources, usually sugarcane molasses. Capped at 10% of white rice weight in designated sake.",ja:"でんぷん質物または含糖質物を原料に発酵・蒸留した中性アルコール。多くはサトウキビ糖蜜由来。特定名称酒では白米重量の10%以下。",zh:"以澱粉質或含糖原料發酵蒸餾的中性酒精，多來自甘蔗糖蜜。特定名稱酒中上限為白米重量的 10%。"} },
{ r:"nyūsankin", jp:"乳酸菌", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Lactic acid bacteria. In kimoto and yamahai they arrive from the environment; in sokujō the acid is added directly instead.",ja:"乳酸菌。生酛・山廃では環境から入り込み、速醸では代わりに乳酸そのものを添加する。",zh:"乳酸菌。生酛與山廢中它自環境進入；速釀則改為直接添加乳酸。"} },
{ r:"hiochi-kin", jp:"火落菌", cat:{en:"Ingredients",ja:"原料",zh:"原料"},
  d:{en:"Lactobacillus strains adapted to survive in finished sake, tolerating 15–20% alcohol. The reason pasteurisation exists.",ja:"完成した清酒中で生き延びるよう適応した乳酸桿菌。アルコール15〜20%に耐える。火入れという工程が存在する理由である。",zh:"適應於成酒中存活的乳酸桿菌，可耐 15–20% 酒精。火入殺菌之所以存在，正因為它。"} },
{ r:"Yamada Nishiki", jp:"山田錦", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Hyōgo, crossed 1923, named 1936. The dominant sake rice — about a third of the crop — and the benchmark for elegance and reliability.",ja:"兵庫。一九二三年交配、一九三六年命名。作付のおよそ三分の一を占める支配的な酒米であり、端正さと安定性の基準である。",zh:"兵庫，1923 年雜交、1936 年命名。作付量約占三分之一的主導酒米，也是優雅與可靠的基準。"} },
{ r:"Gohyakumangoku", jp:"五百万石", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Niigata, 1957. Second by area. Small hard core, resists deep milling, gives clean linear dry sake.",ja:"新潟、一九五七年。作付第二位。心白は小さく硬く、深い精米には向かないが、清く直線的な辛口の酒になる。",zh:"新潟，1957 年。作付面積第二。心白小而硬，不耐深度精米，釀出潔淨、線條分明的辛口酒。"} },
{ r:"Omachi", jp:"雄町", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Okayama, found 1859. The only major pre-modern landrace still grown, and ancestor of most modern varieties. Wild, earthy, hard to control.",ja:"岡山、一八五九年に見出される。現在も栽培される唯一の主要な在来種であり、現代品種の多くの祖先。野趣があり土のようで、制御が難しい。",zh:"岡山，1859 年發現。唯一仍在栽培的主要前近代在來種，也是多數現代品種的祖先。野性、帶土氣、難以控制。"} },
{ r:"Miyama Nishiki", jp:"美山錦", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Nagano, 1978, from irradiated Takane Nishiki. Exceptionally cold-hardy; grainy, mildly sweet, restrained in aroma.",ja:"長野、一九七八年。たかね錦への放射線照射による。耐寒性が際立ち、穀物的でやや甘く、香りは控えめ。",zh:"長野，1978 年，由高嶺錦經輻射誘變育成。耐寒性極佳；帶穀物感、微甜、香氣內斂。"} },

/* ---------------- PROCESS ---------------- */
{ r:"seimai", jp:"精米", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Milling. Slow work — a daiginjō polish to 35% can take two to three days for one batch.",ja:"米を磨く工程。遅い作業であり、精米歩合35%の大吟醸では一仕込み分に二〜三日を要することもある。",zh:"精米。工序緩慢——大吟釀削至 35% 時，一批可能需時兩到三天。"} },
{ r:"karashi", jp:"枯らし", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Resting milled rice for two to four weeks so internal moisture equalises at 13–14%. Skipping it ruins the soak.",ja:"精米後の米を二〜四週間置き、水分を13〜14%で均一化させること。省けば浸漬が破綻する。",zh:"讓精好的米靜置二至四週，使內部水分均勻至 13–14%。省略則浸漬必敗。"} },
{ r:"senmai", jp:"洗米", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Washing off the flour left by milling. For daiginjō, done in ten-kilogram batches.",ja:"精米で残った粉を洗い落とす工程。大吟醸では十キロ単位で行う。",zh:"洗去精米所留下的米粉。大吟釀以十公斤為單位進行。"} },
{ r:"shinseki", jp:"浸漬", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Soaking, timed to the second for highly milled rice. Target water uptake is 28–33%.",ja:"浸漬。高精白の米では秒単位で計る。吸水率28〜33%が目標。",zh:"浸漬；高度精米者以秒計時。目標吸水率為 28–33%。"} },
{ r:"mushimai", jp:"蒸米", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Steamed rice. Steamed, never boiled — dry steam rises through the bed from below.",ja:"蒸した米。煮るのではなく蒸す。乾いた蒸気が下から米の層を抜けていく。",zh:"蒸米。用蒸不用煮——乾蒸氣自下方穿過米層上升。"} },
{ r:"koshiki", jp:"甑", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The steaming vat, traditionally wooden. Its ceremonial first and last use bracket the brewing season.",ja:"蒸きに用いる桶。伝統的には木製。その最初と最後の使用が、造りの季節を区切る儀礼となる。",zh:"蒸米用的桶，傳統為木製。其首次與最後一次使用，構成釀造季的儀式性起訖。"} },
{ r:"hōrei", jp:"放冷", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Cooling steamed rice — to about 35 °C for kōji, much colder for the mash.",ja:"蒸米を冷ますこと。麹用は35℃程度、掛米はさらに低温まで。",zh:"冷卻蒸米——麴用約降至 35°C，掛米則降得更低。"} },
{ r:"gaikō-nainan", jp:"外硬内軟", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"“Firm outside, soft inside” — the target texture of properly steamed sake rice.",ja:"外は硬く、中は柔らかい。正しく蒸し上がった酒米の目指す状態。",zh:"「外硬內軟」——正確蒸出的酒米所應具備的質地。"} },
{ r:"kōji-muro", jp:"麹室", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The kōji room: a sealed, insulated, usually cedar-lined chamber held at around 30 °C and high humidity.",ja:"麹を造る室。密閉・断熱され、多くは杉板張りで、およそ30℃・高湿度に保たれる。",zh:"製麴之室：密閉隔熱、多以杉木鋪面，維持約 30°C 與高濕度。"} },
{ r:"hikikomi", jp:"引き込み", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Carrying cooled steamed rice into the kōji room — hour zero of a 45–50 hour process.",ja:"冷ました蒸米を麹室へ運び入れること。四十五〜五十時間の工程の起点。",zh:"將冷卻的蒸米搬入麴室——四十五至五十小時流程的起點。"} },
{ r:"tanekiri", jp:"種切り", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Sowing kōji spores over the rice through fine cloth and mixing them in by hand.",ja:"細かい布を通して蒸米に種麹を振り、手で混ぜ込むこと。",zh:"透過細布將種麴撒於米上，並以手拌勻。"} },
{ r:"kirikaeshi", jp:"切り返し", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The first turning, at 10–12 hours, to even out temperature and moisture and break up clumps.",ja:"十〜十二時間目の最初の撹拌。温度と水分を均一にし、固まりをほぐす。",zh:"第 10–12 小時的首次翻拌，用以均勻溫濕度並打散結塊。"} },
{ r:"mori", jp:"盛り", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Dividing the kōji into shallow wooden boxes at 20–24 hours so heat can escape.",ja:"二十〜二十四時間目に、熱を逃がすため麹を浅い木箱に小分けすること。",zh:"於第 20–24 小時將麴分裝入淺木箱，以利散熱。"} },
{ r:"naka-shigoto", jp:"仲仕事", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The middle stirring, around 28–32 hours, releasing heat and moisture by evaporation.",ja:"二十八〜三十二時間目あたりの撹拌。蒸発によって熱と水分を逃がす。",zh:"約第 28–32 小時的翻拌，藉蒸發釋出熱與水氣。"} },
{ r:"shimai-shigoto", jp:"仕舞仕事", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The final intervention, around 34–38 hours. Where the enzyme profile is decided by how high the temperature is allowed to peak.",ja:"三十四〜三十八時間目あたりの最後の手入れ。最高温度をどこまで許すかによって酵素の構成が決まる。",zh:"約第 34–38 小時的最後一次手入。酵素組成取決於容許溫度攀升到多高。"} },
{ r:"dekōji", jp:"出麹", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Taking the finished kōji out to cool and dry, halting growth. It smells of chestnut and dry sweetness.",ja:"出来上がった麹を室から出し、冷まし乾かして生育を止めること。栗のような乾いた甘い香りがする。",zh:"將完成的麴取出冷卻乾燥以停止生長。它散發栗子般的乾爽甜香。"} },
{ r:"tsuki-haze", jp:"突き破精", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Kōji with sparse surface growth but deep patchy penetration. Less protease; used for ginjō.",ja:"表面の菌糸は疎らだが、内部へ点状に深く入り込んだ麹。プロテアーゼが少なく、吟醸に用いる。",zh:"表面菌絲稀疏但呈點狀深入內部的麴。蛋白酶較少，用於吟釀。"} },
{ r:"sō-haze", jp:"総破精", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Kōji with growth over the whole grain and throughout. Maximum enzyme; used for junmai and for kimoto starters.",ja:"粒全体を覆い、内部まで行き渡った麹。酵素量が最大で、純米や生酛の酒母に用いる。",zh:"菌絲覆蓋整粒並貫穿其中的麴。酵素量最大，用於純米與生酛酒母。"} },
{ r:"kōji-buai", jp:"麹歩合", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Kōji rice as a proportion of total rice. Legal minimum 15% for designated sake; usually 20–22% in practice.",ja:"総米に対する麹米の割合。特定名称酒では15%以上が法定、実際には20〜22%が多い。",zh:"麴米占總米量的比例。特定名稱酒法定至少 15%，實務上多為 20–22%。"} },
{ r:"shubo · moto", jp:"酒母・酛", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The yeast starter. A small acidified volume in which yeast is grown to around a hundred million cells per millilitre before the main mash.",ja:"酵母を育てる小さな酸性の仕込み。本仕込みに先立ち、一ミリリットルあたり一億個の桁まで酵母を増やす。",zh:"酒母。在正式仕込之前，於小容量的酸性環境中將酵母培養至每毫升約一億個。"} },
{ r:"sokujō-moto", jp:"速醸酛", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The fast starter: food-grade lactic acid is added at the start. Two weeks; around 90% of all production. Devised 1910.",ja:"食品用乳酸を仕込み時に添加する速い酒母。二週間で仕上がり、全生産のおよそ90%を占める。一九一〇年考案。",zh:"速釀酒母：於製作之初直接添加食品級乳酸。約兩週完成，占全部產量約 90%。1910 年發明。"} },
{ r:"kimoto", jp:"生酛", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The classical starter, relying on ambient lactic bacteria and a microbial succession over about thirty days, with pole-grinding of the mash.",ja:"環境中の乳酸菌と、およそ三十日にわたる微生物の遷移に依拠する古典的な酒母。山卸を伴う。",zh:"古典酒母，仰賴環境乳酸菌與約三十天的微生物演替，並包含以櫂棒磨碎的工序。"} },
{ r:"yamahai", jp:"山廃酛", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Kimoto without the pole-grinding — contraction of <em>yamaoroshi haishi</em>, “yamaoroshi abolished”. Devised 1909.",ja:"山卸を行わない生酛。「山卸廃止」の略。一九〇九年考案。",zh:"不行山卸的生酛，為「山卸廢止」的縮寫。1909 年發明。"} },
{ r:"yamaoroshi", jp:"山卸", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Grinding rice, kōji and water to a paste with wooden poles in shallow tubs, through the night, in the cold.",ja:"半切のなかで、米・麹・水を櫂棒で摺り潰す作業。寒中、夜を徹して行う。",zh:"於淺木桶中以木櫂將米、麴、水磨成糊狀，在嚴寒中通宵進行。"} },
{ r:"motosuri-uta", jp:"酛摺り唄", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The songs sung to time the pole strokes of yamaoroshi. A documented musical genre in their own right.",ja:"山卸の櫂の拍子を取るために歌われた唄。それ自体が記録された歌謡の一ジャンルである。",zh:"為配合山卸櫂棒節奏而唱的歌謠，本身即是有紀錄的歌謠類型。"} },
{ r:"bodaimoto · mizumoto", jp:"菩提酛・水酛", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"A medieval starter in which acidic water is made first and the starter built into it. Developed at Shōryakuji in Nara; revived from the 1990s.",ja:"先に酸性の水を作り、そこへ酒母を仕込む中世の方法。奈良・正暦寺で確立され、一九九〇年代以降に復元された。",zh:"中世紀工法：先製出酸水，再於其中立酒母。由奈良正曆寺確立，1990 年代起復原。"} },
{ r:"soyashi-mizu", jp:"そやし水", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The soured water of bodaimoto, made by steeping raw and steamed rice together for about three days.",ja:"菩提酛の酸性水。生米と蒸米をともに三日ほど水に浸けて作る。",zh:"菩提酛所用的酸水，將生米與蒸米一同浸泡約三天而成。"} },
{ r:"kōon-tōka moto", jp:"高温糖化酒母", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"A starter in which rice and kōji are held at 55–60 °C to saccharify and sterilise, then cooled sharply. About a week.",ja:"米と麹を55〜60℃に保って糖化と殺菌を同時に行い、その後急冷する酒母。所要はおよそ一週間。",zh:"將米與麴保持在 55–60°C 以同時糖化與殺菌，隨後急速降溫的酒母，約需一週。"} },
{ r:"dakidaru", jp:"暖気樽", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"A sealed metal cask of hot water lowered into a starter to warm it.",ja:"酒母を温めるために沈める、湯を詰めた金属製の樽。",zh:"注滿熱水的密封金屬桶，沉入酒母中為其加溫。"} },
{ r:"moromi", jp:"醪", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The main fermenting mash. 18–22 days for ordinary sake, 30–40 for ginjō.",ja:"本仕込みの発酵中の醪。普通の酒で十八〜二十二日、吟醸で三十〜四十日。",zh:"主發酵的醪。一般酒 18–22 天，吟釀 30–40 天。"} },
{ r:"sandan-jikomi", jp:"三段仕込み", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Building the mash in three staged additions over four days so yeast density and acidity are never diluted below safety.",ja:"四日かけて三度に分けて仕込むことで、酵母の密度と酸を安全な水準より下げないようにする方法。",zh:"在四天內分三次投料，使酵母密度與酸度始終不被稀釋至安全線以下。"} },
{ r:"soe · hatsuzoe", jp:"添・初添", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The first mash addition, about one sixth of the total rice, at 12–13 °C.",ja:"最初の仕込み。総米のおよそ六分の一を、12〜13℃で。",zh:"第一段投料，約總米六分之一，於 12–13°C。"} },
{ r:"odori", jp:"踊", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"“The dance” — the second day, when nothing is added and the yeast count doubles. Skipping it is a classic way to lose a tank.",ja:"「踊り」。何も加えない二日目であり、酵母数が倍になる。ここを省くのは一本を失う古典的な方法である。",zh:"「踊」——第二天不投料，酵母數量倍增。省略此步是失去一整槽酒的典型作法。"} },
{ r:"nakazoe", jp:"仲添", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The second mash addition on day three, about one third of the rice, at 9–10 °C.",ja:"三日目の仕込み。総米のおよそ三分の一を、9〜10℃で。",zh:"第三天的第二段投料，約總米三分之一，於 9–10°C。"} },
{ r:"tomezoe", jp:"留添", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The final and largest addition on day four, about half the rice, at 7–8 °C.",ja:"四日目の最後にして最大の仕込み。総米のおよそ半分を、7〜8℃で。",zh:"第四天最後也最大的一段投料，約總米一半，於 7–8°C。"} },
{ r:"yodan", jp:"四段", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"An optional fourth addition of rice, kōji or sweetener late in fermentation, used to adjust sweetness.",ja:"発酵末期に米・麹・糖を加える任意の四段目。甘みの調整に用いる。",zh:"發酵末期選擇性加入米、麴或甜味料的第四段，用以調整甜度。"} },
{ r:"kumimizu-buai", jp:"汲水歩合", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Water as a percentage of total rice weight, typically 110–140%. Higher gives a lighter sake.",ja:"総米重量に対する仕込み水の割合。通常110〜140%で、高いほど軽い酒になる。",zh:"仕込水占總米重量的百分比，通常 110–140%。比例愈高，酒體愈輕。"} },
{ r:"kai-ire", jp:"櫂入れ", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Stirring the mash with a long wooden paddle. Overdoing it strips aroma.",ja:"長い櫂棒で醪を撹拌すること。過度に行えば香りが飛ぶ。",zh:"以長木槳攪動醪。過度攪動會使香氣散失。"} },
{ r:"hin'on", jp:"品温", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Mash temperature. 15–18 °C for ordinary sake, 8–12 °C for ginjō — the most consequential single variable.",ja:"醪の温度。普通の酒で15〜18℃、吟醸で8〜12℃。最も影響の大きい単一の変数である。",zh:"醪的品溫。一般酒 15–18°C，吟釀 8–12°C——最具影響力的單一變數。"} },
{ r:"bōmé", jp:"ボーメ", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Baumé, a density reading roughly proportional to residual sugar, tracked daily. Sake meter value is baumé × −10.",ja:"比重の読み値で、残糖にほぼ比例する。毎日測定する。日本酒度はボーメに−10を掛けたものである。",zh:"波美度，比重讀數，大致與殘糖成正比，每日追蹤。日本酒度即波美度乘以 −10。"} },
{ r:"jōsō", jp:"上槽", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Pressing — separating sake from lees. Legally what makes seishu seishu.",ja:"醪を酒と粕に分ける工程。法的に清酒を清酒たらしめるもの。",zh:"上槽——將酒與酒粕分離。法律上使清酒成為清酒的環節。"} },
{ r:"fune", jp:"槽", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The traditional press: cotton bags of mash stacked in a long trough under a slowly descending lid.",ja:"伝統的な搾り機。木綿の袋に入れた醪を長い槽に積み、蓋をゆっくり下ろして圧をかける。",zh:"傳統壓搾器：將裝醪的棉袋層疊於長槽中，以緩緩下降的槽蓋加壓。"} },
{ r:"yabuta", jp:"藪田式圧搾機", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The modern accordion press with air-bladder filter panels. Fast, closed to air, and used by most of the industry.",ja:"空気袋と濾板を蛇腹状に並べた現代の圧搾機。速く、空気に触れず、業界の大半が用いる。",zh:"以氣囊與濾板排成手風琴狀的現代壓搾機。快速、隔絕空氣，為業界多數所用。"} },
{ r:"fukurozuri · shizuku", jp:"袋吊り・雫", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Hanging bags of mash and collecting only what drips, with no pressure at all. Competition entries and top cuvées.",ja:"醪の袋を吊るし、圧をかけずに滴るものだけを集める方法。鑑評会出品酒と最上位商品に限られる。",zh:"懸吊裝醪的袋，完全不加壓，只收集滴落之液。僅用於鑑評會參賽酒與頂級品項。"} },
{ r:"arabashiri", jp:"荒走り", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The first free-run fraction of the press. Cloudy, gassy, aggressive.",ja:"上槽の最初、自然に流れ出る部分。濁り、ガスを含み、荒々しい。",zh:"上槽最初自然流出的部分。混濁、帶氣、粗獷。"} },
{ r:"nakadori · nakagumi", jp:"中取り・中汲み", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The middle fraction — clear, balanced, complete. A genuine quality signal when printed on a label.",ja:"中間の部分。澄み、均衡がとれ、完成している。ラベルにあれば実質的な品質の合図となる。",zh:"中段酒液——澄澈、均衡、完整。若印於酒標上，確實是品質訊號。"} },
{ r:"seme", jp:"責め", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The final fraction, extracted under full pressure. Coarser and higher in amino acids.",ja:"強い圧をかけて絞り出す最後の部分。粗く、アミノ酸が多い。",zh:"以全力加壓榨出的最後一段。較粗糙，胺基酸較高。"} },
{ r:"sakekasu", jp:"酒粕", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Pressed lees, about 8% alcohol. A food in its own right — kasujiru, kasuzuke, kasutori shōchū, amazake.",ja:"搾り粕。アルコール分は8%ほど。粕汁、粕漬け、粕取り焼酎、甘酒など、それ自体が食材である。",zh:"搾出的酒粕，含約 8% 酒精。本身即是食材——粕汁、粕漬、粕取燒酎、甘酒。"} },
{ r:"ori-biki", jp:"滓引き", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Racking the clear sake off the fine sediment after several days of cold settling.",ja:"低温で数日静置し、細かな澱を沈めたのち上澄みを引き抜くこと。",zh:"經數日低溫靜置使細澱沉降後，抽取上層清澄之酒。"} },
{ r:"roka", jp:"濾過", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Filtration — mesh, membrane, or activated carbon.",ja:"濾過。網、膜、あるいは活性炭による。",zh:"過濾——以濾網、薄膜或活性碳進行。"} },
{ r:"tanso-roka", jp:"炭素濾過", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Activated-carbon filtration, which removes colour and off-aromas along with some desirable compounds. Its absence is <em>muroka</em>.",ja:"活性炭による濾過。色と不快な香りを除くが、望ましい成分も一部除かれる。行わないものが無濾過である。",zh:"活性碳過濾，去除色澤與異味，同時也除去部分理想成分。不進行者即為「無濾過」。"} },
{ r:"hiire", jp:"火入れ", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Pasteurisation at 62–65 °C, killing hiochi bacteria and denaturing kōji enzymes. Standard practice is twice.",ja:"62〜65℃での加熱殺菌。火落菌を殺し、麹の酵素を失活させる。標準では二度行う。",zh:"於 62–65°C 加熱殺菌，殺死火落菌並使麴菌酵素失活。標準作法為兩次。"} },
{ r:"jakan", jp:"蛇管", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Coil pasteurisation — sake pumped through a coiled pipe in hot water.",ja:"湯に沈めた螺旋状の管に酒を通す火入れの方法。",zh:"蛇管火入——讓酒流經浸於熱水中的螺旋管。"} },
{ r:"binkan", jp:"瓶燗", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Bottle pasteurisation: the sealed bottle is heated then crash-cooled, so nothing meets air afterwards. Standard for premium ginjō.",ja:"瓶詰・密栓したものを瓶ごと加熱し急冷する火入れ。加熱後に空気へ触れない。上位の吟醸では標準である。",zh:"瓶燗火入：整瓶密封後加熱再急速冷卻，加熱後不接觸空氣。高階吟釀的標準作法。"} },
{ r:"chozō", jp:"貯蔵", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Maturation in tank or bottle, typically about six months before release.",ja:"タンクまたは瓶での貯蔵。出荷まで通常半年ほど。",zh:"於槽中或瓶中貯藏熟成，出貨前通常約半年。"} },
{ r:"jukusei", jp:"熟成", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Maturation — esterification and slow oxidation knitting a disjointed young sake together.",ja:"熟成。エステル化と緩やかな酸化が、ばらばらな若い酒を縫い合わせる。",zh:"熟成——酯化與緩慢氧化，將分裂的年輕酒縫合起來。"} },
{ r:"warimizu", jp:"割水", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Dilution with brewing water from around 18% to 15–16%. Sake sold without it is genshu.",ja:"仕込み水による加水。およそ18%から15〜16%へ下げる。これを行わないものが原酒である。",zh:"以仕込水稀釋，自約 18% 降至 15–16%。未經此步驟者即為原酒。"} },
{ r:"chōgō", jp:"調合", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Blending across tanks, and sometimes years, to produce consistency. A skill, not an admission of failure.",ja:"タンクを跨ぎ、時には年を跨いで調合し、恒常性を作ること。失敗の告白ではなく技能である。",zh:"跨槽、有時跨年份的調和，以達成一致性。這是技藝，而非失敗的自白。"} },
{ r:"kanzukuri", jp:"寒造り", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Winter brewing, October to March. Mandated by the shogunate in the seventeenth century and still the classical calendar.",ja:"十月から三月の冬季の造り。十七世紀に幕府が定め、今も古典的な暦である。",zh:"冬季釀造，自十月至三月。十七世紀由幕府規定，至今仍是古典的釀造曆。"} },
{ r:"koshiki-okoshi", jp:"甑起こし", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"“Raising the steamer” — the ceremonial first steaming of the season.",ja:"その年の造りにおける最初の蒸きを行う儀礼。",zh:"「甑起」——當季首次蒸米的儀式。"} },
{ r:"koshiki-daoshi", jp:"甑倒し", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"“Laying the steamer down” — the last steaming of the season, and an occasion for celebration.",ja:"その年最後の蒸き。祝われる節目である。",zh:"「甑倒」——當季最後一次蒸米，是值得慶祝的節點。"} },
{ r:"kaizō", jp:"皆造", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The end of the brewing season, when the last tank has been pressed.",ja:"最後のタンクを搾り終え、その年の造りが終わること。",zh:"皆造——最後一槽搾畢，當季釀造結束。"} },
{ r:"kioke jikomi", jp:"木桶仕込み", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Fermenting in wooden vats rather than enamel or stainless steel, reintroducing a resident microflora.",ja:"琺瑯やステンレスではなく木桶で発酵させること。蔵付きの微生物相を呼び戻す。",zh:"以木桶而非琺瑯或不鏽鋼槽發酵，重新引入常駐微生物相。"} },

/* ---------------- PEOPLE ---------------- */
{ r:"tōji", jp:"杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The master brewer, historically a seasonal contractor arriving each autumn with his own team.",ja:"酒造りの最高責任者。歴史的には毎秋、自らの蔵人を率いて来る季節契約の職人であった。",zh:"釀造總監。歷史上是每年秋天帶著自己團隊前來的季節性契約職人。"} },
{ r:"kurabito", jp:"蔵人", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The brewery workers under the tōji, with defined roles — head worker, kōji maker, starter maker, steamer.",ja:"杜氏の下で働く蔵の人々。頭、麹屋、酛屋、釜屋など役割が定まっている。",zh:"杜氏之下的酒藏工作者，各有定職——頭、麴屋、酛屋、釜屋等。"} },
{ r:"kashira", jp:"頭", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The head kurabito, second to the tōji and responsible for the floor.",ja:"蔵人の筆頭。杜氏に次ぐ立場で、現場を統括する。",zh:"藏人之首，地位僅次於杜氏，負責現場統籌。"} },
{ r:"kuramoto", jp:"蔵元", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The brewery owner. Historically distinct from the tōji; today the two roles are often the same person.",ja:"蔵の所有者。歴史的には杜氏と別であったが、今日では同一人物であることが多い。",zh:"酒藏所有人。歷史上與杜氏分屬不同角色，今日則常為同一人。"} },
{ r:"kuramoto-tōji", jp:"蔵元杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"An owner who also brews. The dominant model in serious modern breweries.",ja:"自ら造りを行う蔵元。現代の本格的な蔵では主流の形である。",zh:"親自釀酒的藏元。這是現代認真酒藏的主流模式。"} },
{ r:"ryūha", jp:"流派", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"A tōji guild — Nanbu, Echigo, Tanba, Noto, Tajima — each with distinct techniques and vocabulary.",ja:"杜氏の集団。南部・越後・丹波・能登・但馬など、それぞれ固有の技術と語彙をもつ。",zh:"杜氏流派——南部、越後、丹波、能登、但馬——各有其獨特技術與語彙。"} },

/* ---------------- CATEGORIES ---------------- */
{ r:"seishu", jp:"清酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"The legal category under the Liquor Tax Act: fermented from rice, rice kōji and water, filtered, under 22% alcohol.",ja:"酒税法上の品目。米・米こうじ・水を発酵させ、漉したもので、アルコール分22度未満。",zh:"酒稅法上的法定品目：以米、米麴與水發酵並經過濾，酒精低於 22%。"} },
{ r:"nihonshu", jp:"日本酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"The everyday word for sake, and since 2015 a protected geographical indication reserved for seishu made in Japan from Japanese rice.",ja:"清酒の日常語。二〇一五年以降は、国産米を用い日本国内で製造された清酒に限られる地理的表示でもある。",zh:"清酒的日常稱呼；自 2015 年起亦是受保護的地理標示，限日本產米、日本國內釀造者使用。"} },
{ r:"tokutei meishōshu", jp:"特定名称酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"The eight designations defined by the 1989 labelling standard: junmai, honjōzō, ginjō, daiginjō and their combinations.",ja:"平成元年の表示基準が定める八つの名称。純米・本醸造・吟醸・大吟醸とその組合せ。",zh:"1989 年標示基準所定的八種名稱：純米、本釀造、吟釀、大吟釀及其組合。"} },
{ r:"futsūshu", jp:"普通酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Ordinary sake — everything that qualifies for none of the eight designations. Around two-thirds of all volume.",ja:"八つの特定名称のいずれにも該当しない酒。数量ではおよそ三分の二を占める。",zh:"普通酒——不符合八種特定名稱者。約占總量三分之二。"} },
{ r:"junmai", jp:"純米酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Rice, kōji and water only. No milling requirement since 2004, but the ratio must be declared.",ja:"米・米こうじ・水のみ。平成十六年以降、精米歩合の要件はないが数値の表示は必要。",zh:"僅米、米麴與水。2004 年起無精米步合要件，但仍須標示數值。"} },
{ r:"honjōzō", jp:"本醸造酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Rice milled to 70% or less with a measured alcohol addition of up to 10% of the white rice weight.",ja:"精米歩合70%以下で、白米重量の10%以下の醸造アルコールを添加したもの。",zh:"精米步合 70% 以下，並添加不超過白米重量 10% 的釀造酒精。"} },
{ r:"ginjō", jp:"吟醸酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Milled to 60% or less, made by the ginjō method — long, cold fermentation with characteristic aroma.",ja:"精米歩合60%以下で、吟醸造り——低温長期発酵と固有の香り——によるもの。",zh:"精米步合 60% 以下，並以吟釀造法——低溫長期發酵與固有香氣——釀成。"} },
{ r:"daiginjō", jp:"大吟醸酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Milled to 50% or less by the ginjō method. Aroma and colour must be “particularly good”.",ja:"精米歩合50%以下の吟醸造り。香味・色沢が特に良好であることを要する。",zh:"精米步合 50% 以下的吟釀造。香味與色澤須「特別良好」。"} },
{ r:"tokubetsu", jp:"特別", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"“Special” — milled to 60% or less, or made by a declared special method that must be explained on the label.",ja:"精米歩合60%以下、又は特別な製造方法によるもの。その内容をラベルに説明する必要がある。",zh:"「特別」——精米步合 60% 以下，或以申報之特殊製法釀成，且須於標籤說明其內容。"} },
{ r:"ginjō-zukuri", jp:"吟醸造り", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"The ginjō method: careful preparation, long fermentation at low temperature, and characteristic aroma and colour. The standard's one qualitative requirement.",ja:"吟味して製造し、低温で長期間発酵させ、固有の香味と色沢をもつこと。基準における唯一の定性的要件である。",zh:"吟釀造法：用心備製、低溫長期發酵，並具固有香味與色澤。這是基準中唯一的定性要件。"} },
{ r:"genshu", jp:"原酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Undiluted — no water added after pressing. Typically 17–20% alcohol.",ja:"上槽後に加水していないもの。通常17〜20%。",zh:"原酒——上槽後未加水者，通常 17–20%。"} },
{ r:"namazake", jp:"生酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Never pasteurised. Must be kept refrigerated; changes week by week.",ja:"一度も火入れをしていないもの。冷蔵が必須で、週ごとに変わる。",zh:"完全未火入。必須冷藏，且週週在變。"} },
{ r:"nama-chozōshu", jp:"生貯蔵酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Stored unpasteurised, pasteurised once at bottling.",ja:"生のまま貯蔵し、瓶詰時に一度火入れするもの。",zh:"以生酒狀態貯藏，裝瓶時火入一次。"} },
{ r:"namazumeshu", jp:"生詰酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Pasteurised once after pressing, bottled without a second heating. The classic hiyaoroshi.",ja:"上槽後に一度火入れし、瓶詰時には火入れしないもの。ひやおろしの古典的な形。",zh:"上槽後火入一次，裝瓶時不再加熱。即經典的冷卸。"} },
{ r:"muroka", jp:"無濾過", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"No activated-carbon filtration. Fuller colour, broader aroma, heavier texture.",ja:"活性炭による濾過をしていないもの。色は濃く、香りは広く、質感は重い。",zh:"未經活性碳過濾。色澤更飽滿、香氣更寬、口感更厚。"} },
{ r:"nigorizake", jp:"にごり酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Coarsely filtered so rice solids remain. Still legally seishu, because it is strained.",ja:"目の粗い布で漉し、米の固形分を残したもの。漉している以上、法的には清酒である。",zh:"以粗網過濾、保留米固形物者。因確有過濾，法律上仍屬清酒。"} },
{ r:"origarami", jp:"おりがらみ", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Lightly hazy — fine lees deliberately left in. Creamier and fuller than the clear version.",ja:"細かな滓をあえて残した、わずかに霞んだ酒。澄んだものより丸く厚い。",zh:"刻意保留細澱、略帶霧感者。比澄清版本更綿密飽滿。"} },
{ r:"kijōshu", jp:"貴醸酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Brewed with finished sake replacing part of the water. Dense, sweet, syrupy; ages superbly. Revived in 1973 from an Engishiki-era method.",ja:"仕込み水の一部を完成した清酒に置き換えて醸したもの。濃密で甘くとろみがあり、熟成に強い。一九七三年に延喜式期の技法から復元された。",zh:"以成酒取代部分仕込水釀成。濃密、甘美、帶糖漿感，極耐陳年。1973 年自延喜式時代技法復原。"} },
{ r:"koshu", jp:"古酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Aged sake. Commercially, deliberately matured three years or more; amber, caramel, dried fig, soy.",ja:"熟成した酒。商業的には意図的に三年以上熟成させたもので、琥珀色、カラメル、干し無花果、醤油の香り。",zh:"陳年酒。商業上指刻意熟成三年以上者；呈琥珀色，帶焦糖、無花果乾與醬油香。"} },
{ r:"shinshu", jp:"新酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Sake of the current brewing year.",ja:"当酒造年度の酒。",zh:"當釀造年度所產之酒。"} },
{ r:"taruzake", jp:"樽酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Matured in wooden casks, almost always Yoshino cedar, long enough to carry the wood's aroma.",ja:"木樽——ほぼ吉野杉——で、木の香りが移るまで貯蔵したもの。",zh:"以木樽（幾乎皆為吉野杉）貯藏至帶有木香者。"} },
{ r:"kiippon", jp:"生一本", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"A junmai brewed entirely at a single site owned by the producer. Single origin in the literal sense.",ja:"自社の単一の製造場のみで醸造した純米酒。文字どおりの単一原産地表示。",zh:"完全於生產者自有的單一製造場釀成的純米酒。字面意義上的單一產地。"} },
{ r:"shiboritate", jp:"しぼりたて", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Just pressed and released within weeks. Fresh, often gassy, sometimes almost raw.",ja:"搾りたてで、数週間のうちに出荷されるもの。新鮮で、しばしばガスを含み、時にほとんど生々しい。",zh:"剛搾出並於數週內出貨者。新鮮、常帶氣，有時近乎生猛。"} },
{ r:"hiyaoroshi", jp:"ひやおろし", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Pasteurised once in spring, rested over summer, shipped in autumn without a second heating.",ja:"春に一度火入れし、夏を越して、二度目の火入れをせずに秋に出荷される酒。",zh:"春季火入一次，越夏靜置，秋季不再加熱即出貨。"} },
{ r:"akiagari", jp:"秋あがり", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Sake that has improved over the summer — the quality claim that hiyaoroshi is the shipping form of.",ja:"夏を越して良くなった酒。ひやおろしが出荷の形であるところの、品質についての主張。",zh:"歷經一夏而變得更好的酒——冷卸是其出貨形式，秋上則是其品質主張。"} },
{ r:"doburoku", jp:"どぶろく", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Unfiltered farmhouse mash. Legally not seishu, because it is never strained. Permitted under licence in special zones since 2002.",ja:"漉さない農家の醪。漉さないため法的に清酒ではない。二〇〇二年以降、特区制度により免許を得れば製造できる。",zh:"未過濾的農家醪。因從未過濾，法律上非清酒。自 2002 年起可於特區內領照製造。"} },
{ r:"amazake", jp:"甘酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"A sweet non-alcoholic drink made by saccharifying rice with kōji alone, with no yeast. Also made from sakekasu, in which case it does contain alcohol.",ja:"酵母を使わず、麹だけで米を糖化させた甘い飲み物。酒粕から作る場合はアルコールを含む。",zh:"不使用酵母、僅以麴糖化米所製的無酒精甜飲。以酒粕製作者則含酒精。"} },
{ r:"happōshu", jp:"発泡清酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Sparkling sake — bottle-conditioned, tank-fermented under pressure, or carbonated.",ja:"発泡する清酒。瓶内二次発酵、密閉タンク発酵、あるいは炭酸ガス注入による。",zh:"氣泡清酒——瓶內二次發酵、密閉槽發酵，或注入碳酸。"} },
{ r:"jizake", jp:"地酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"“Local sake” — regional sake as opposed to national brands. The 1970s movement that prepared the audience for ginjō.",ja:"全国銘柄に対する地方の酒。一九七〇年代の運動であり、吟醸の受け手を用意した。",zh:"「地酒」——相對於全國性品牌的地方酒。1970 年代的這場運動，為吟釀培養了受眾。"} },
{ r:"sanbai zōjōshu", jp:"三倍増醸酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"“Triple-brewed sake”: one part real sake inflated to three with alcohol, sugars and acids. Legal from 1949, written out of the seishu definition in 2006.",ja:"一の酒をアルコール・糖類・酸で三に膨らませた酒。一九四九年以降合法であったが、二〇〇六年に清酒の定義から外れた。",zh:"「三倍增釀酒」：以酒精、糖類與酸將一份真酒膨脹為三份。1949 年起合法，2006 年被排除於清酒定義之外。"} },
{ r:"sōbōshu", jp:"僧坊酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Temple sake — the finest sake in Japan from roughly the thirteenth to the sixteenth century.",ja:"寺院で造られた酒。およそ十三世紀から十六世紀にかけて、日本で最も優れた酒であった。",zh:"僧坊酒——約自十三至十六世紀，日本品質最優的酒。"} },
{ r:"morohaku", jp:"諸白", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Both the kōji rice and the mash rice milled, rather than only the kōji rice. A sixteenth-century advance.",ja:"麹米だけでなく掛米も精白すること。十六世紀の進歩である。",zh:"麴米與掛米皆行精白，而非僅精白麴米。這是十六世紀的進展。"} },
{ r:"kudarizake", jp:"下り酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Sake shipped from Kansai down to Edo, and prized. Eastern sake was <em>kudaranai</em> — a word that survives meaning worthless.",ja:"上方から江戸へ送られ珍重された酒。関東の酒は「下らない」と呼ばれ、その語は現代語に残る。",zh:"自關西運往江戶並備受推崇之酒。關東之酒稱「下らない」，此詞留存至今意為「不值一提」。"} },

/* ---------------- NUMBERS ---------------- */
{ r:"nihonshu-do", jp:"日本酒度", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Sake meter value — a specific-gravity reading. Positive reads drier, negative sweeter, but it measures all dissolved solids, not sugar.",ja:"比重の読み値。プラスは辛口寄り、マイナスは甘口寄りだが、測っているのは糖ではなく全溶存固形分である。",zh:"日本酒度——比重讀數。正值偏辛、負值偏甜，但它測的是全部溶質而非糖。"} },
{ r:"sando", jp:"酸度", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Acidity, measured by titration. Typically 1.0–2.0. Higher reads drier and fuller at the same sugar level.",ja:"滴定によって測る総酸量。通常1.0〜2.0。同じ糖分なら、高いほど辛く厚く感じられる。",zh:"酸度，以滴定法測定，通常 1.0–2.0。相同糖分下數值愈高，愈顯辛口與厚實。"} },
{ r:"amino-sando", jp:"アミノ酸度", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Amino acid index, typically 1.0–2.0. Higher means more umami and weight — and faster ageing.",ja:"アミノ酸の指標。通常1.0〜2.0。高いほどうま味と厚みが増し、熟成も速い。",zh:"胺基酸度指標，通常 1.0–2.0。愈高則旨味與厚度愈強，陳化也愈快。"} },
{ r:"alcohol-bun", jp:"アルコール分", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Alcohol by volume. 15–16% standard, 17–20% for genshu, 8–13% for low-alcohol styles.",ja:"アルコール分。標準は15〜16%、原酒は17〜20%、低アルコール型は8〜13%。",zh:"酒精濃度。標準 15–16%，原酒 17–20%，低酒精型 8–13%。"} },
{ r:"ekisu-bun", jp:"エキス分", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Extract — the weight of non-volatile dissolved solids per 100 mL. Around 4–4.5 g in most sake.",ja:"不揮発性の溶存成分の重量（100mL当たり）。多くの酒でおよそ4〜4.5g。",zh:"萃取物——每 100 mL 中不揮發溶質的重量。多數清酒約 4–4.5 克。"} },

/* ---------------- TASTING ---------------- */
{ r:"kikizake", jp:"利き酒・きき酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Formal sake tasting, assessing colour, top note, palate and finish in order.",ja:"色沢・上立ち香・味・後味を順に評価する、正式な官能評価。",zh:"正式的清酒品評，依序評估色澤、上立香、口感與收尾。"} },
{ r:"kiki-jōko", jp:"きき猪口", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"The standard tasting cup: white porcelain, about 180 mL, with two blue rings in the base.",ja:"標準の利き猪口。白磁でおよそ180mL、底に二重の青い輪がある。",zh:"標準品評杯：白瓷，約 180 mL，杯底有兩圈藍環。"} },
{ r:"janome", jp:"蛇の目", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"“Snake's eye” — the concentric blue rings in a tasting cup, used to judge clarity and viscosity.",ja:"利き猪口の底の二重の青い輪。清澄度と粘性を見るためのもの。",zh:"「蛇之目」——品評杯底的同心藍環，用以判斷澄清度與黏度。"} },
{ r:"uwadachi-ka", jp:"上立ち香", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"The top note, smelled from the still surface without swirling.",ja:"回さずに液面から取る香り。",zh:"上立香——不搖杯，自靜止液面所聞的香氣。"} },
{ r:"fukumi-ka", jp:"含み香", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"The retronasal aroma released in the mouth, often quite different from the top note.",ja:"口中で立つ香り。上立ち香とかなり異なることが多い。",zh:"含香——在口中釋出的鼻後香氣，常與上立香相當不同。"} },
{ r:"kire", jp:"キレ", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"“Cut” — the speed and cleanness with which a sake leaves the palate. One of the two central terms in Japanese sake criticism.",ja:"酒が引いていく速さと清らかさ。日本語の日本酒評における中心的な二語の一つ。",zh:"「切れ」——酒離開口腔的速度與潔淨度。日文清酒評論的兩個核心詞之一。"} },
{ r:"fukurami", jp:"ふくらみ", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Fullness, expansion in the mouth — the counterpart to kire.",ja:"口中での広がり、厚み。キレの対語。",zh:"「膨らみ」——在口中的擴張與厚度，與「切れ」相對。"} },
{ r:"tanrei karakuchi", jp:"淡麗辛口", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"“Light and dry” — the Niigata style that dominated Japanese taste in the 1980s.",ja:"新潟の酒質で、一九八〇年代の日本人の嗜好を支配した。",zh:"「淡麗辛口」——主導 1980 年代日本口味的新潟風格。"} },
{ r:"nōjun", jp:"濃醇", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Rich and full-bodied — the opposite pole to tanrei.",ja:"濃く厚い酒質。淡麗の対極。",zh:"「濃醇」——厚實飽滿，與淡麗相對的一極。"} },
{ r:"karakuchi", jp:"辛口", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Dry. Note that it also carries a connotation of sharpness and cutting, not only of low sugar.",ja:"辛口。糖が少ないことだけでなく、鋭さや切れの含意もある。",zh:"辛口。它不僅指糖分低，也帶有銳利與收束的意涵。"} },
{ r:"amakuchi", jp:"甘口", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Sweet. Out of fashion for decades, and returning through modern aromatic styles.",ja:"甘口。数十年にわたり流行から外れていたが、現代の香り高い酒質を通じて戻りつつある。",zh:"甘口。數十年來不合潮流，如今正透過現代芳香風格回歸。"} },
{ r:"umami", jp:"旨味", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Savouriness from amino acids and peptides. Perceived weakly when cold and strongly when warm. Named by Ikeda Kikunae in 1908 after he determined that the savour of kombu dashi is glutamic acid; English borrowed the Japanese word rather than translating it, Chinese used its own — 鮮味.",ja:"アミノ酸とペプチドによる滋味。冷たいと弱く、温かいと強く感じられる。一九〇八年、昆布の出汁のうまさがグルタミン酸であると定めた池田菊苗が名づけた。英語は訳さず日本語の語を借り、中国語は自らの語——鮮味——を用いた。",zh:"旨味——來自胺基酸與胜肽的鮮味。低溫時感知微弱，溫熱時強烈。1908 年由池田菊苗命名，他確定昆布高湯的鮮美來自麩胺酸；英文借用了這個日文詞而未加翻譯，中文則用了自己的詞——鮮味。"} },
{ r:"zatsumi", jp:"雑味", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"“Miscellaneous taste” — coarse, muddy, unresolved flavour, usually from protein and lipid in the outer rice layers.",ja:"粗く濁った、整理されていない味。多くは米の外層のたんぱく質と脂質に由来する。",zh:"雜味——粗糙、混濁、未經整理的味道，多來自米外層的蛋白質與脂質。"} },
{ r:"hine-ka", jp:"老香", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"The stale fault: wet cardboard, boiled cabbage, drains. Mostly dimethyl trisulfide, produced by warm storage.",ja:"劣化臭。濡れた段ボール、茹でたキャベツ、排水。主にジメチルトリスルフィドによる、高温貯蔵の産物。",zh:"老香——陳腐缺陷：濕紙板、煮甘藍、水溝味。主要來自二甲基三硫，由高溫貯藏產生。"} },
{ r:"nikkōshū", jp:"日光臭", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Light-strike: sulfurous notes produced by ultraviolet exposure, sometimes within hours.",ja:"日光臭。紫外線によって生じる硫黄様の匂いで、数時間で生じることもある。",zh:"日光臭：紫外線照射所生的硫味，有時數小時內即發生。"} },
{ r:"ginjō-ka", jp:"吟醸香", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Ginjō aroma — the ester register of banana, apple, melon and pear from isoamyl acetate and ethyl caproate.",ja:"吟醸香。酢酸イソアミルとカプロン酸エチルによる、バナナ・リンゴ・メロン・洋梨のエステル香。",zh:"吟釀香——由乙酸異戊酯與己酸乙酯構成的香蕉、蘋果、哈密瓜與洋梨的酯類香氣。"} },
{ r:"kunshu", jp:"薫酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Fragrant type — high aroma, light body. Ginjō and daiginjō; serve cold in a wine glass.",ja:"香りが高く味は軽い型。吟醸・大吟醸。冷やしてワイングラスで。",zh:"薰酒——高香氣、輕酒體。吟釀與大吟釀；冷飲、用葡萄酒杯。"} },
{ r:"sōshu", jp:"爽酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Light type — low aroma, light body. Honjōzō, light junmai, fresh nama. The most versatile at the table.",ja:"香りも味も軽い型。本醸造、軽快な純米、生酒。食卓で最も汎用性が高い。",zh:"爽酒——低香氣、輕酒體。本釀造、輕快型純米、生酒。餐桌上最百搭。"} },
{ r:"junshu", jp:"醇酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Rich type — low aroma, full body. Junmai, kimoto, yamahai. Rewards warming.",ja:"香りは低く味は濃い型。純米、生酛、山廃。燗に報いる。",zh:"醇酒——低香氣、飽滿酒體。純米、生酛、山廢。溫飲最能回報。"} },
{ r:"jukushu", jp:"熟酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Aged type — high aroma, full body. Koshu and kijōshu; treat as oloroso sherry.",ja:"香りも味も濃い熟成型。古酒・貴醸酒。オロロソ・シェリーと同じ扱いでよい。",zh:"熟酒——高香氣、飽滿酒體。古酒與貴釀酒；可比照 oloroso 雪莉。"} },
{ r:"otokozake", jp:"男酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"“Men's sake” — the dry, firm, hard-water Nada style.",ja:"灘の硬水による、辛口で骨格のある酒質。",zh:"「男酒」——灘的硬水風格，辛口而結構堅實。"} },
{ r:"onnazake", jp:"女酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"“Women's sake” — the silky, mildly sweet, soft-water Fushimi style.",ja:"伏見の軟水による、滑らかでやや甘い酒質。",zh:"「女酒」——伏見的軟水風格，絲滑而微甜。"} },
{ r:"shokuchūshu", jp:"食中酒", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"Sake designed to be drunk with food rather than admired alone. The dominant direction in serious modern brewing.",ja:"単独で鑑賞するのではなく、料理とともに飲むための酒。現代の本格的な造りにおける主流の方向。",zh:"食中酒——為佐餐而非獨自鑑賞而釀的酒。現代認真釀造的主流方向。"} },

/* ---------------- SERVICE ---------------- */
{ r:"kan", jp:"燗", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"Warmed sake, in named bands from 30 °C to above 55 °C.",ja:"温めた酒。30℃から55℃超まで、呼称のある温度帯に分かれる。",zh:"溫過的酒，自 30°C 至 55°C 以上分為若干有名稱的溫度帶。"} },
{ r:"atsukan", jp:"熱燗", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"Hot, about 50 °C. Sharp and dry; sweetness perception falls again at this temperature.",ja:"およそ50℃。鋭く辛く、この温度では甘味の知覚が再び下がる。",zh:"約 50°C。銳利辛口；此溫度下甜味感知再度下降。"} },
{ r:"nurukan", jp:"ぬる燗", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"Lukewarm, about 40 °C. The most useful warming point and usually what “kan” means.",ja:"およそ40℃。最も有用な温度であり、「燗」と言えば普通はこれを指す。",zh:"約 40°C。最實用的溫度，一般說「燗」多指此。"} },
{ r:"hiya", jp:"冷や", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"Room temperature — historically “unheated”, not “chilled”. A common source of confusion.",ja:"常温。歴史的には「冷やした」ではなく「燗をしていない」の意である。混乱の元となる語。",zh:"常溫——歷史上意指「未加熱」而非「冰鎮」。這是常見的混淆來源。"} },
{ r:"reishu", jp:"冷酒", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"Chilled sake, as distinct from <em>hiya</em>. Five named bands from 5 °C to 15 °C.",ja:"冷やした酒。冷やとは区別される。5℃から15℃まで、呼称のある温度帯がある。",zh:"冰鎮的酒，與「冷や」有別。自 5°C 至 15°C 分為數個有名稱的溫度帶。"} },
{ r:"yukihie", jp:"雪冷え", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"“Snow-chilled”, about 5 °C. Aroma is almost entirely suppressed.",ja:"およそ5℃。香りはほぼ完全に抑えられる。",zh:"「雪冷」，約 5°C。香氣幾乎完全被壓抑。"} },
{ r:"hanahie", jp:"花冷え", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"“Blossom-chilled”, about 10 °C. The standard for aromatic ginjō.",ja:"およそ10℃。香り高い吟醸の標準。",zh:"「花冷」，約 10°C。芳香型吟釀的標準溫度。"} },
{ r:"suzuhie", jp:"涼冷え", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"“Cool”, about 15 °C. Where most junmai ginjō is at its best.",ja:"およそ15℃。多くの純米吟醸が最良となる温度。",zh:"「涼冷」，約 15°C。多數純米吟釀在此最佳。"} },
{ r:"ochoko", jp:"お猪口", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"The small ceramic cup, 30–60 mL. Its small size exists so that pouring for others happens often.",ja:"30〜60mLの小さな陶磁の杯。小さいのは、互いに注ぎ合う機会を多くするためである。",zh:"30–60 mL 的小型陶瓷杯。它之所以小，正是為了讓互相斟酒的機會頻繁發生。"} },
{ r:"guinomi", jp:"ぐい呑み", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"A larger cup, 60–120 mL, with thicker walls that hold temperature. The usual choice for warmed junmai.",ja:"60〜120mLの大ぶりの杯。器壁が厚く温度を保つ。燗の純米にはこれが定石。",zh:"較大的杯，60–120 mL，壁厚而保溫。溫飲純米的常用選擇。"} },
{ r:"sakazuki", jp:"盃", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"A wide shallow ceremonial cup, lacquer or ceramic. Designed for ritual rather than tasting.",ja:"広く浅い儀礼用の盃。漆器または陶磁。味わうためではなく儀式のための形。",zh:"寬淺的儀式用杯，漆器或陶瓷。為儀式而非品評所設計。"} },
{ r:"masu", jp:"枡", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"A square cedar box of one gō, originally a rice measure. Its resin aroma overwhelms most sake.",ja:"一合の四角い杉の枡。もとは米を量る器で、その樹脂香は多くの酒を覆ってしまう。",zh:"一合容量的方形杉木盒，原為量米之器。其樹脂香會蓋過多數酒。"} },
{ r:"tokkuri", jp:"徳利", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"The narrow-necked serving flask, and the standard vessel for warming in a water bath.",ja:"首の細い供酒用の瓶。湯煎で燗をつける標準の器でもある。",zh:"細頸供酒壺，也是以水浴溫酒的標準容器。"} },
{ r:"katakuchi", jp:"片口", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"An open lipped pouring bowl. Its large surface area opens a closed sake quickly.",ja:"注ぎ口のある開いた鉢。表面積が大きく、閉じた酒を速く開かせる。",zh:"帶注口的敞口缽。表面積大，能迅速打開封閉的酒。"} },
{ r:"chirori", jp:"ちろり", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"A tall tin or copper warming vessel. Conducts heat fast, so warming takes about a minute.",ja:"錫または銅の背の高い燗器。熱伝導が速く、燗は一分ほどで済む。",zh:"高身的錫或銅製溫酒器。導熱快速，溫酒約一分鐘即可。"} },
{ r:"mokkiri", jp:"もっきり", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"A glass set in a masu and filled until it overflows into the box — a deliberate display of generosity.",ja:"枡に置いたグラスに、枡へ溢れるまで注ぐこと。意図的な寛容の身振りである。",zh:"將玻璃杯置於木枡中，斟至溢入枡內——刻意展現的慷慨姿態。"} },
{ r:"shaku", jp:"酌", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"Pouring for another person. You do not pour for yourself at a Japanese table.",ja:"人に酒を注ぐこと。日本の酒席では手酌をしない。",zh:"為他人斟酒。日本酒席上不為自己斟酒。"} },
{ r:"kanpai", jp:"乾杯", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"The toast. Nobody drinks before it, and glasses are held slightly lower than a senior person's when they touch.",ja:"乾杯。これより前に飲む者はなく、杯を合わせる際は目上より少し低くする。",zh:"乾杯。此前無人先飲，碰杯時杯緣略低於長輩或上位者。"} },
{ r:"gō", jp:"合", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"A traditional measure, 180 mL. Ten gō make one shō.",ja:"伝統的な単位で180mL。十合で一升。",zh:"傳統單位，180 mL。十合為一升。"} },
{ r:"isshōbin", jp:"一升瓶", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"The 1,800 mL bottle, introduced in 1901. Thick dark glass and little headspace make it the best format for keeping sake.",ja:"一九〇一年に登場した1,800mLの瓶。厚い濃色ガラスとヘッドスペースの少なさにより、保存に最も優れる。",zh:"1,800 mL 的瓶，1901 年問世。厚實深色玻璃與極小頂隙，使其成為最利保存的規格。"} },
{ r:"yongōbin", jp:"四合瓶", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"The 720 mL bottle, now the standard retail unit.",ja:"720mLの瓶。現在の小売の標準単位。",zh:"720 mL 的瓶，現今零售的標準單位。"} },

/* ---------------- CULTURE ---------------- */
{ r:"omiki", jp:"お神酒", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Sake offered to the kami, standing on every Shinto altar in a pair of white flasks.",ja:"神に供える酒。白磁の瓶子一対で、あらゆる神前に置かれる。",zh:"獻給神明的酒，以一對白瓷瓶子立於每一座神道祭壇之上。"} },
{ r:"naorai", jp:"直会", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"The shared meal after a ritual, in which the offering is drunk by the participants.",ja:"祭祀ののち、供物を参列者が飲食する行事。",zh:"儀式後的共食，供品由參與者飲用。"} },
{ r:"sugidama · sakabayashi", jp:"杉玉・酒林", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"A ball of cedar boughs hung under a brewery's eaves — green when the new sake is pressed, browning through the year.",ja:"蔵の軒に吊るす杉の葉の玉。新酒を搾ると青く掛け替えられ、一年をかけて茶色く枯れていく。",zh:"懸於酒藏屋簷下的杉葉球——新酒搾出時翠綠，一年間逐漸轉褐。"} },
{ r:"kagami-biraki", jp:"鏡開き", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Breaking open the round lid of a sake cask with mallets at a celebration. The lid is the “mirror”, a Shinto symbol.",ja:"祝いの席で酒樽の丸い蓋を木槌で開くこと。蓋は神道の象徴である「鏡」と呼ばれる。",zh:"慶典中以木槌敲開酒樽圓蓋。蓋稱「鏡」，是神道的象徵。"} },
{ r:"san-san-kudo", jp:"三々九度", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"The wedding rite of three sips from each of three cups, nine in all.",ja:"三重ねの盃それぞれから三度ずつ、計九度口をつける婚礼の儀。",zh:"婚禮儀式：自三只疊杯各飲三次，共九口。"} },
{ r:"otoso", jp:"お屠蘇", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Spiced medicinal sake drunk on New Year's morning, from youngest to oldest.",ja:"元旦の朝に、年少者から順に飲む薬酒。",zh:"元旦早晨飲用的藥酒，自年幼者依序飲起。"} },
{ r:"hanami-zake", jp:"花見酒", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Drinking under the cherry blossom — the largest single occasion for sake in the Japanese year.",ja:"桜の下で飲むこと。日本の一年で日本酒が最も飲まれる機会。",zh:"在櫻花下飲酒——日本一年中清酒消費最大的單一場合。"} },
{ r:"kurabiraki", jp:"蔵開き", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"A brewery open day, held as the first sake of the season is released.",ja:"その季節の新酒の出荷に合わせ、蔵が一般に門を開く日。",zh:"酒藏開放日，配合當季新酒出貨舉行。"} },
{ r:"izakaya", jp:"居酒屋", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"The Japanese drinking establishment, where food exists to accompany the drink rather than the reverse.",ja:"日本の酒場。料理は酒に添うものであって、その逆ではない。",zh:"日本的居酒屋，食物是為佐酒而存在，而非相反。"} },
{ r:"Nihonshu no Hi", jp:"日本酒の日", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Sake Day, 1 October — the date on which the brewing year traditionally began.",ja:"十月一日。かつて酒造年度が始まった日にあたる。",zh:"日本酒之日，10 月 1 日——昔日釀造年度開始之日。"} },
{ r:"shuzō ginōshi", jp:"酒造技能士", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"The national trade certificate for sake brewing, sitting inside Japan's general skills-testing system under the Ministry of Health, Labour and Welfare. Grade 2 needs two years of practical work, grade 1 seven — or two more after grade 2. The written paper covers manufacturing method, microbes and enzymes, general chemistry, electrics, statutes, and safety and hygiene; the practical test is the work itself. It is the only sake qualification gated on years rather than hours.",ja:"清酒を造る技能の国の証であり、厚生労働省のもとの技能検定の仕組みに座る。二級は実務二年、一級は七年——または二級ののち二年を要する。学科は清酒製造法、微生物および酵素、化学一般、電気、関係法規、安全衛生を覆い、実技は作業そのものである。時間ではなく年数を条件とする、唯一の日本酒の資格である。",zh:"清酒釀造的國家技能證明，位於厚生勞動省之下的技能檢定體系內。二級需兩年實務經驗，一級需七年——或通過二級後再兩年。學科涵蓋清酒製造法、微生物與酵素、化學一般、電氣、相關法規、安全衛生；實技考的就是作業本身。它是唯一以年資而非時數為門檻的清酒資格。"} },
{ r:"sakashō", jp:"酒匠", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"The SSI's tasting specialisation, taken by people who already hold the kikizakeshi qualification. Where that one covers service, this one is comparative tasting: discriminating between samples, describing reliably, and reaching the same verdict twice.",ja:"SSIの利きの専門であり、すでに唎酒師を持つ者が取る。唎酒師が供し方を覆うのに対し、こちらは比較の利きである。見本を分かち、確かに述べ、二度同じ判に至ること。",zh:"SSI 的品飲專業資格，由已持有唎酒師者報考。唎酒師涵蓋服務，而這一項是比較品飲：分辨樣品、可靠地描述，以及兩次得出同樣的判斷。"} },
{ r:"SAKE DIPLOMA", jp:"酒ディプロマ", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"The Japan Sommelier Association's sake qualification, launched in 2017. Open to anyone over twenty regardless of nationality or experience: a computer-based multiple-choice first stage, then an essay and a tasting. Cumulative passers reached 5,257 by May 2022; the 2021 pass rate was 44.4%, against a five-year average near 41.",ja:"日本ソムリエ協会の日本酒の資格であり、二〇一七年に始まった。二十歳以上であれば国籍も経験も問わない。一次は計算機による択一、二次は論述と利き酒である。累計の合格者は二〇二二年五月に五千二百五十七名、二〇二一年の合格率は四四・四パーセントで、五年の平均は四一に近い。",zh:"日本侍酒師協會的清酒資格，2017 年開辦。滿二十歲者不限國籍與經驗皆可報考：第一階段為電腦選擇題，第二階段為論述與品飲。累計合格者於 2022 年 5 月達 5,257 人；2021 年合格率 44.4%，五年平均接近 41%。"} },
{ r:"nihonshugaku", jp:"日本酒学", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Sake studies as an academic field, established at Niigata University after a May 2017 agreement with the prefecture and the prefectural brewers' association. The centre opened in April 2018, became a university-wide body in January 2020, obtained a brewing licence for research in April 2021, and added master's and doctoral tracks in 2022 and 2023. It divides the subject into brewing, society and culture, and health.",ja:"学問領域としての日本酒の学。二〇一七年五月の県および県酒造組合との協定を経て、新潟大学に置かれた。センターは二〇一八年四月に開き、二〇二〇年一月に全学の組織となり、二〇二一年四月に研究のための製造免許を得、二〇二二年と二〇二三年に修士と博士の課程を加えた。この学を醸造、社会・文化、健康に分ける。",zh:"作為學術領域的清酒之學，經 2017 年 5 月與新潟縣及縣酒造組合的協定後設於新潟大學。中心於 2018 年 4 月成立，2020 年 1 月升格為全校性組織，2021 年 4 月取得研究用製造執照，並於 2022 與 2023 年增設碩士與博士課程。它把這門學問分為釀造、社會與文化、健康三部分。"} },
{ r:"kikizakeshi", jp:"唎酒師", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"A certification for sake service professionals, covering tasting, temperature, vessels and pairing. Created in 1991 by the SSI and described by it as the first qualification anywhere for the people who sell and serve sake rather than the people who make it; 188 were certified in the first cohort and more than fifty thousand held it by 2024.",ja:"日本酒の提供に関する専門資格。テイスティング、温度、器、相性を扱う。一九九一年にSSIが作り、造る者ではなく売り供する者のための、どこにもなかった初めての資格であると自ら述べる。最初の期は百八十八名、二〇二四年には五万人を越える者が持つ。",zh:"清酒服務專業資格認證，涵蓋品評、溫度、酒器與搭配。1991 年由 SSI 創設，並自述為全世界第一個為「販售與提供清酒的人」而非「釀造清酒的人」設立的資格；第一屆認證 188 人，到 2024 年持有者已超過五萬。"} },
{ r:"zenkoku shinshu kanpyōkai", jp:"全国新酒鑑評会", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"The National New Sake Appraising Competition, held every spring since 1911 and the most consequential award in the industry.",ja:"一九一一年から毎春開かれる全国規模の鑑評会。業界で最も重い賞である。",zh:"全國新酒鑑評會，自 1911 年起每年春季舉辦，是業界最具份量的獎項。"} },

/* ---------------- LAW & TRADE ---------------- */
{ r:"shuzeihō", jp:"酒税法", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The Liquor Tax Act, which defines seishu and every other category of alcoholic beverage in Japan.",ja:"清酒をはじめ、日本のあらゆる酒類の区分を定める法律。",zh:"酒稅法，界定清酒及日本所有其他酒類的分類。"} },
{ r:"seizō-nengetsu", jp:"製造時期", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The production date on a label — the month of bottling, not of brewing, and not an expiry date.",ja:"ラベルの製造時期。瓶詰の年月であって醸造の年月ではなく、賞味期限でもない。",zh:"標籤上的製造時期——裝瓶月份，而非釀造月份，也不是有效期限。"} },
{ r:"BY · shuzō-nendo", jp:"酒造年度", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The brewing year, 1 July to 30 June. BY R6 means the season beginning July 2024.",ja:"七月一日から翌年六月三十日まで。BY令和6年は二〇二四年七月に始まる期を指す。",zh:"釀造年度，7 月 1 日至次年 6 月 30 日。BY 令和 6 年指 2024 年 7 月開始的釀期。"} },
{ r:"chiriteki hyōji · GI", jp:"地理的表示", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"Geographical indication. Twenty-three exist for sake, from Hakusan (2005) to Kyoto, Tottori and Fukuoka (2025).",ja:"地理的表示。清酒では白山（二〇〇五年）から京都・鳥取・福岡（二〇二五年）まで二十三を数える。",zh:"地理標示。清酒共有 23 個，自白山（2005）至京都、鳥取、福岡（2025）。"} },
{ r:"meigara", jp:"銘柄", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The brand name — often different from the company name, and often archaically written.",ja:"銘柄。社名と異なることが多く、古風な表記も多い。",zh:"品牌名——常與公司名不同，且多以古風方式書寫。"} },
{ r:"masamune", jp:"正宗", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The commonest element in sake brand names, borrowed from the swordsmith and reportedly punning on <em>seishu</em>.",ja:"銘柄に最も多く現れる語。刀工の名に由来し、「清酒」との音の掛け合わせとも言われる。",zh:"清酒品牌名中最常見的元素，借自刀匠之名，據說亦與「清酒」諧音。"} },
/* ---------------- RICE VARIETIES ---------------- */
{ r:"Yamada Nishiki", jp:"山田錦", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"The reference brewing rice: Yamadaho × Tankan Watari-bune, named 1936, about a third of all sake rice grown. Broad, clean, mills very hard.",ja:"基準となる酒米。山田穂×短稈渡船、一九三六年命名。作付の約三分の一を占める。広く清らかで、高精白に耐える。",zh:"基準酒米：山田穗 × 短稈渡船，1936 年命名，占酒米種植約三分之一。開闊潔淨，極耐高度精米。"} },
{ r:"Gohyakumangoku", jp:"五百万石", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Niigata's variety, named 1957 when the prefecture's harvest passed five million koku. Light, dry, hard-finishing; the basis of the tanrei style.",ja:"新潟の品種。県の収穫が五百万石を超えた一九五七年に命名。軽く辛く後口が硬い。淡麗の基礎である。",zh:"新潟的品種，1957 年該縣收穫突破五百萬石時命名。輕盈、辛口、收口硬挺；淡麗風格的基礎。"} },
{ r:"Miyama Nishiki", jp:"美山錦", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"A 1978 gamma-ray mutant from Nagano. Cold-tolerant, firm and slightly austere; the rice of the mountains and the north.",ja:"一九七八年、長野で生まれたガンマ線の変異体。耐冷性に優れ、締まってやや厳しい。山と北国の米である。",zh:"1978 年長野育成的伽瑪射線突變體。耐寒、結實而略顯嚴謹；山地與北國之米。"} },
{ r:"Ōmachi", jp:"雄町", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Found in 1859 in Okayama and never crossed since — the ancestor of most modern varieties. Broad, earthy, hard to grow and hard to mill.",ja:"一八五九年に岡山で見出され、以来交配されていない。現代品種の多くの祖である。広く土の香があり、栽培も精米も難しい。",zh:"1859 年於岡山發現，此後未曾雜交——多數現代品種的祖先。開闊帶土氣，難栽培也難研磨。"} },
{ r:"Aiyama", jp:"愛山", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"A very large-grained, very soluble Hyōgo variety giving thick, sweet, almost syrupy sake. Grown in tiny quantity.",ja:"兵庫の品種。粒がきわめて大きくよく溶け、厚く甘く蜜のような酒を生む。生産量はごく少ない。",zh:"兵庫的品種，粒極大且極易溶，釀出厚實甘甜、近乎糖漿般的酒。產量極少。"} },
{ r:"Kame no O", jp:"亀の尾", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Selected in Yamagata in 1893 from three surviving ears; ancestor of Koshihikari. Revived for brewing in the 1980s; sharp and mineral.",ja:"一八九三年、山形で生き残った三本の穂から選抜。コシヒカリの祖にあたる。一九八〇年代に酒造用として復活した。鋭くミネラルを感じさせる。",zh:"1893 年於山形自三支倖存稻穗選出，為越光米的祖先。1980 年代復育供釀造之用；銳利而帶礦物感。"} },
{ r:"Koshi Tanrei", jp:"越淡麗", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Yamada Nishiki × Gohyakumangoku, released by Niigata in 2004 so the prefecture could make daiginjō from its own rice.",ja:"山田錦×五百万石。二〇〇四年に新潟が発表した。自県の米で大吟醸を造るための品種である。",zh:"山田錦 × 五百萬石，新潟於 2004 年推出，使該縣得以用自產米釀造大吟釀。"} },
{ r:"Dewasansan", jp:"出羽燦々", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Yamagata, 1997. Designed so a small brewery could make good ginjō from local rice; used in the certified DEWA33 sake.",ja:"山形、一九九七年。小さな蔵が地元の米で良い吟醸を造れるよう設計された。認証酒「DEWA33」に用いられる。",zh:"山形，1997 年。設計目標是讓小酒藏能以在地米釀出好吟釀；用於認證酒「DEWA33」。"} },
{ r:"Hattan Nishiki", jp:"八反錦", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Hiroshima's variety, bred for its soft water. Gentle, low-acid, round.",ja:"広島の品種。軟水に合わせて育成された。穏やかで酸が低く、丸い。",zh:"廣島的品種，為其軟水而育成。溫和、低酸、圓潤。"} },
{ r:"Ginpū", jp:"吟風", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"The variety that made serious Hokkaidō sake possible, released in 2000. Followed by Suisei and Kita-shizuku.",ja:"二〇〇〇年発表。本格的な北海道の酒を可能にした品種であり、彗星、きたしずくが続いた。",zh:"2000 年推出，使正經的北海道清酒成為可能，其後有彗星與北雫。"} },
{ r:"ippanmai", jp:"一般米", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"Ordinary eating rice used for brewing — about three quarters of the rice that goes into sake, and not automatically inferior.",ja:"酒造りに用いる飯米。酒に入る米のおよそ四分の三を占め、自動的に劣るわけではない。",zh:"用於釀造的一般食用米——約占入酒之米的四分之三，並非自動較差。"} },
{ r:"mura-mai seido", jp:"村米制度", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"The village rice system: direct contracts between Nada breweries and individual Hyōgo villages since 1887, and the origin of the 特A field grading.",ja:"一八八七年以来、灘の蔵と兵庫の村とが直接結んできた契約の仕組み。特A地区という圃場の格付けの起源である。",zh:"村米制度：自 1887 年起，灘的酒藏與兵庫個別村莊直接締約的制度，也是「特A」田區分級的起源。"} },
{ r:"toku-A chiku", jp:"特A地区", cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},
  d:{en:"The top grade of Yamada Nishiki land in Hyōgo, running 特A-a → 特A-b → 特A → A → B → C. Sake's only formal geography of fields.",ja:"兵庫における山田錦の産地の最上級。特A-a→特A-b→特A→A→B→Cと続く。日本酒で唯一の、圃場についての公式な地理である。",zh:"兵庫山田錦產地的最高等級，依序為 特A-a → 特A-b → 特A → A → B → C。這是清酒唯一正式的田區地理分級。"} },
{ r:"karashi", jp:"枯らし", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Resting milled rice for one to three weeks so the heat and moisture gradient left by the mill can equalise before washing.",ja:"精米した米を一週間から三週間休ませ、精米機が残した熱と水分の勾配を洗米前に均すこと。",zh:"讓精米後的米靜置一至三週，使精米機留下的熱與水分梯度在洗米前趨於均勻。"} },

/* ---------------- WATER ---------------- */
{ r:"miyamizu", jp:"宮水", cat:{en:"Water",ja:"水",zh:"水"},
  d:{en:"The hard, phosphate-rich, iron-free groundwater of Nishinomiya, identified in 1840 and piped to Nada breweries ever since.",ja:"西宮の、硬くリン酸に富み鉄を含まない地下水。一八四〇年に見出され、以来灘の蔵へ送られ続けている。",zh:"西宮的硬質地下水，富含磷酸且不含鐵，1840 年被發現，此後持續輸往灘的酒藏。"} },
{ r:"gokōsui", jp:"御香水", cat:{en:"Water",ja:"水",zh:"水"},
  d:{en:"Fushimi's soft water, the counterpart to miyamizu and the basis of the rounder Kyoto style.",ja:"伏見の軟水。宮水の対極であり、丸い京都の酒質の基礎である。",zh:"伏見的軟水，是宮水的對照，也是京都圓潤酒質的基礎。"} },
{ r:"kōdo", jp:"硬度", cat:{en:"Water",ja:"水",zh:"水"},
  d:{en:"Water hardness — combined calcium and magnesium. In sake it acts as a throttle on fermentation speed rather than as a flavour in itself.",ja:"水の硬度。カルシウムとマグネシウムの合計である。日本酒においては味そのものというより、発酵速度の調節弁として働く。",zh:"水的硬度，即鈣與鎂的總和。在清酒中，它與其說是味道本身，不如說是發酵速度的節流閥。"} },
{ r:"nansui jōzōhō", jp:"軟水醸造法", cat:{en:"Water",ja:"水",zh:"水"},
  d:{en:"Miura Senzaburō's 1898 soft-water method: harder steaming, stronger kōji, long cold fermentation. The direct ancestor of ginjō technique.",ja:"三浦仙三郎による一八九八年の軟水醸造法。よく蒸し、強い麹を造り、低温で長く発酵させる。吟醸造りの直系の祖である。",zh:"三浦仙三郎 1898 年的軟水釀造法：蒸得更透、製更強的麴、長時間低溫發酵。吟釀技法的直系祖先。"} },
{ r:"kumimizu-buai", jp:"汲水歩合", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Brewing water as a percentage of total rice, usually around 130%. Higher gives a thinner, faster mash.",ja:"総米に対する仕込水の割合。おおむね130%前後。高いほど醪は薄く速くなる。",zh:"仕込水占總米量的百分比，通常約 130%。比例越高，醪越稀薄、發酵越快。"} },

/* ---------------- YEAST ---------------- */
{ r:"kyōkai kōbo", jp:"きょうかい酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"Yeast distributed by the Brewing Society of Japan since 1906, numbered roughly in order of release. The single largest cause of both rising quality and converging style in the twentieth century.",ja:"一九〇六年以来、日本醸造協会が頒布する酵母。番号はおおむね頒布順である。二十世紀における品質の向上と酒質の収斂の、双方の最大の原因である。",zh:"自 1906 年起由日本釀造協會頒布的酵母，編號大致依頒布順序。這是二十世紀品質提升與風格趨同兩者的最大成因。"} },
{ r:"no. 6 / rokugō", jp:"六号酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"Isolated at Aramasa in Akita in 1930 and the oldest strain still distributed. Quiet, clean, wide and savoury.",ja:"一九三〇年に秋田の新政で分離され、いまも頒布される最古の株。静かで清らか、広く旨味がある。",zh:"1930 年於秋田新政分離，是至今仍在頒布的最古老菌株。安靜、潔淨、開闊而帶旨味。"} },
{ r:"no. 7 / nanagō", jp:"七号酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"From Masumi in Nagano, 1946. The most-used strain in Japan; strong, dependable, moderately fruity.",ja:"一九四六年、長野の真澄より。日本で最も使われる株であり、力強く、頼りになり、果実味は中庸である。",zh:"1946 年出自長野真澄。日本使用最廣的菌株；強勁、可靠、果味中庸。"} },
{ r:"no. 9 / kyūgō", jp:"九号酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"The Kumamoto strain that made modern ginjō possible — low acid, high aroma, elegant. Distributed nationally in 1968.",ja:"現代の吟醸を可能にした熊本の株。低酸、高香、端正。一九六八年に全国頒布。",zh:"讓現代吟釀成為可能的熊本菌株——低酸、高香、優雅。1968 年起全國頒布。"} },
{ r:"no. 1801", jp:"1801号", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"A bred cross giving very high ethyl caproate and low acid; the competition yeast of the current era, and the reason many gold medals smell alike.",ja:"カプロン酸エチルがきわめて高く酸の低い育成株。現代の鑑評会の酵母であり、多くの金賞酒が似た香りをもつ理由である。",zh:"育成雜交株，己酸乙酯極高、酸度低；當代的鑑評會酵母，也是眾多金賞酒氣味相似的原因。"} },
{ r:"awanashi kōbo", jp:"泡なし酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"Non-foaming mutants, released from 1971, numbered with a trailing 01 — 701, 901, 1401. Identical sake, about 20% more tank capacity, and no night foam-scraping.",ja:"一九七一年以降に頒布された泡なしの変異株。末尾に01を付す——701、901、1401。酒は同じで、タンクは二割ほど多く仕込め、夜の泡掻きもいらない。",zh:"自 1971 年起頒布的無泡突變株，編號末尾加 01——701、901、1401。酒質相同，槽容量增加約兩成，也不必夜間刮泡。"} },
{ r:"kuratsuki kōbo", jp:"蔵付き酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"Yeast resident in a brewery's own timbers and tools, allowed to inoculate the starter spontaneously. Risky, slow, and the pre-1906 method.",ja:"蔵の木材や道具に棲みつき、酛に自然に入る酵母。危険で遅く、一九〇六年以前の方法である。",zh:"棲息於酒藏木材與器具中的酵母，任其自然接種於酛。風險高、速度慢，是 1906 年以前的作法。"} },
{ r:"hana-kōbo", jp:"花酵母", cat:{en:"Yeast",ja:"酵母",zh:"酵母"},
  d:{en:"Yeasts isolated from flower nectar by Tokyo University of Agriculture from the 1990s — genuine <em>S. cerevisiae</em> strains with aroma profiles the collection lacks.",ja:"一九九〇年代以降、東京農業大学が花の蜜から分離した酵母。頒布株にはない香気構成をもつ、正真正銘の <em>S. cerevisiae</em> の株である。",zh:"1990 年代起由東京農業大學自花蜜分離的酵母——是道地的 <em>S. cerevisiae</em> 菌株，具備頒布菌株所無的香氣輪廓。"} },
{ r:"kapuron-san echiru", jp:"カプロン酸エチル", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Ethyl caproate — green apple and melon, the dominant ginjō aroma of the modern era. Suppressed by lipids, so heavy milling raises it.",ja:"青林檎と瓜の香り。現代の吟醸香の主役である。脂質に抑えられるため、高精白が高める。",zh:"己酸乙酯——青蘋果與香瓜，是當代吟釀香的主角。會被脂質抑制，因此高度精米能提升它。"} },
{ r:"sakusan isoamiru", jp:"酢酸イソアミル", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Isoamyl acetate — banana and ripe pear. Rises with a cool but well-fed mash; the signature of strain 14.",ja:"バナナと熟した洋梨の香り。低温で栄養の足りた醪で高まる。14号の署名である。",zh:"乙酸異戊酯——香蕉與熟洋梨。在低溫但營養充足的醪中升高；14 號的標誌。"} },
{ r:"DMTS", jp:"ジメチルトリスルフィド", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Dimethyl trisulfide, the compound behind <em>hine-ka</em> — boiled cabbage and gas. The commonest fault in badly stored sake.",ja:"ひね香の正体である化合物。煮た菜やガスの匂い。保管の悪い酒に最も多い欠点である。",zh:"二甲基三硫，是「老化臭」的成因——煮甘藍與瓦斯味。保存不良的清酒中最常見的缺陷。"} },
{ r:"karubamin-san echiru", jp:"カルバミン酸エチル", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Ethyl carbamate, formed slowly from urea and ethanol and regulated in some export markets. Urea-non-producing yeasts were bred to eliminate it.",ja:"尿素とエタノールから徐々に生じ、一部の輸出市場で規制される化合物。これを断つために尿素非生成の酵母が育成された。",zh:"胺基甲酸乙酯，由尿素與乙醇緩慢生成，在部分出口市場受管制。為消除它而育成了尿素非生成型酵母。"} },

/* ---------------- FAULTS ---------------- */
{ r:"hine-ka", jp:"老ね香", cat:{en:"Faults",ja:"欠点",zh:"缺陷"},
  d:{en:"The staling smell of heat- or time-damaged sake: boiled cabbage, wet cardboard, flat caramel.",ja:"熱や時間に傷んだ酒のひね香。煮た菜、湿った段ボール、平たいカラメル。",zh:"因熱或時間而劣化的清酒所發出的老化氣味：煮甘藍、濕紙板、扁平的焦糖味。"} },
{ r:"nikkō-shū", jp:"日光臭", cat:{en:"Faults",ja:"欠点",zh:"缺陷"},
  d:{en:"Light-struck: burnt rubber and struck match, sometimes within hours of UV exposure. The reason sake is bottled in dark glass.",ja:"日光による劣化。焦げたゴムや擦ったマッチの匂いで、紫外線を浴びて数時間で生じることもある。日本酒が濃色の瓶に詰められる理由である。",zh:"日光劣化：燒焦橡膠與劃過的火柴味，暴露於紫外線後有時數小時即生成。這正是清酒使用深色玻璃瓶的原因。"} },
{ r:"tsuwari-ka", jp:"つわり香", cat:{en:"Faults",ja:"欠点",zh:"缺陷"},
  d:{en:"A buttery, butterscotch note from diacetyl produced by lactic bacteria. A brewing fault, now rare.",ja:"乳酸菌の活動によるジアセチル由来の、バターやバタースコッチのような匂い。造りの欠点であり、いまではまれである。",zh:"由乳酸菌產生的雙乙醯所致，帶奶油與太妃糖氣味。屬釀造缺陷，如今罕見。"} },
{ r:"mokka-yō ishū", jp:"木香様異臭", cat:{en:"Faults",ja:"欠点",zh:"缺陷"},
  d:{en:"Pencil-shavings and plywood, from aldehydes formed by oxidation during production. Distinct from the intended cedar aroma of taru-zake.",ja:"鉛筆の削りかすや合板の匂い。製造中の酸化で生じるアルデヒドによる。樽酒の意図された杉の香りとは別物である。",zh:"鉛筆屑與夾板的氣味，源自生產過程中氧化生成的醛類。與樽酒刻意營造的杉木香截然不同。"} },
{ r:"zatsumi", jp:"雑味", cat:{en:"Faults",ja:"欠点",zh:"缺陷"},
  d:{en:"A coarse, muddy, bitter-savoury heaviness from excess amino acids and outer-layer compounds. A choice gone too far rather than spoilage.",ja:"アミノ酸と外層由来成分の過剰による、粗く濁った苦く重い味。腐敗ではなく、判断の行き過ぎである。",zh:"因胺基酸與外層成分過多而生的粗糙、混濁、苦而厚重之感。這是判斷過頭，而非腐敗。"} },
{ r:"hiochi-kin", jp:"火落菌", cat:{en:"Faults",ja:"欠点",zh:"缺陷"},
  d:{en:"Alcohol-tolerant lactobacilli that survive in finished sake, turning it cloudy and sour. Pasteurisation exists to kill them.",ja:"仕上がった酒のなかで生き延び、濁らせ酸っぱくするアルコール耐性の乳酸菌。火入れはこれを殺すために存在する。",zh:"能在成酒中存活的耐酒精乳酸桿菌，使酒混濁發酸。火入正是為殺滅它們而存在。"} },

/* ---------------- PEOPLE & THE KURA ---------------- */
{ r:"kashira", jp:"頭", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The foreman under the tōji: runs the floor, allocates work, keeps the schedule.",ja:"杜氏の下で現場を統べる者。作業を割り振り、日程を保つ。",zh:"杜氏之下的現場工頭：統管作業、分派工作、維持時程。"} },
{ r:"kōji-ya / daishi", jp:"麹屋・大師", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"In charge of the kōji room — the most demanding job in the building and the one that most directly decides the sake's character.",ja:"麹室を預かる者。蔵で最も要求の厳しい職であり、酒質を最も直接に決める職でもある。",zh:"掌管麴室者——藏中要求最嚴苛的職務，也是最直接決定酒質的職務。"} },
{ r:"moto-ya", jp:"酛屋", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"In charge of the yeast starter; in a kimoto house, the person who leads the pole-mashing and the songs that time it.",ja:"酒母を預かる者。生酛の蔵では、櫂入れとそれを計る唄を率いる者である。",zh:"掌管酒母者；在生酛的酒藏中，是帶領搗櫂與計時歌謠的人。"} },
{ r:"san'yaku", jp:"三役", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The three senior posts below the tōji — kashira, kōji-ya and moto-ya — from whom a tōji is normally promoted.",ja:"杜氏の下の三つの上位職——頭・麹屋・酛屋。杜氏は通常このなかから昇る。",zh:"杜氏之下的三個高階職位——頭、麴屋、酛屋——杜氏通常由其中晉升。"} },
{ r:"kuramoto-tōji", jp:"蔵元杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"An owner who brews. Now common among small quality-focused breweries, and the structural reason many changed direction fast in the 1990s.",ja:"自ら醸す当主。品質を志向する小さな蔵では一般的となり、一九九〇年代に多くの蔵が速く方向を変えられた構造的な理由でもある。",zh:"親自釀酒的藏元。如今在注重品質的小型酒藏中相當普遍，也是 1990 年代眾多酒藏能迅速轉向的結構性原因。"} },
{ r:"dekasegi", jp:"出稼ぎ", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"Seasonal migrant labour — the system by which farmers and fishermen brewed sake each winter for four centuries.",ja:"季節の出稼ぎ労働。農民や漁民が四世紀にわたり毎冬、酒を造ってきた仕組みである。",zh:"季節性移工——四個世紀以來農民與漁民每年冬天釀酒所依循的制度。"} },
{ r:"koshiki-taoshi", jp:"甑倒し", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"“Laying down the steamer” — the celebration on the last day the steaming vessel is used, marking the end of the rice work.",ja:"その季に甑を使う最後の日、それを倒して祝うこと。米の仕事の終わりを告げる。",zh:"「放倒甑」——使用甑的最後一天所舉行的慶祝，標誌米作業的結束。"} },
{ r:"kōji-muro", jp:"麹室", cat:{en:"Equipment",ja:"設備",zh:"設備"},
  d:{en:"The insulated cedar-lined room held at 30–35°C for the two days of kōji making; the warmest and cleanest room in a brewery.",ja:"麹造りの二日間、30〜35度に保たれる杉張りの断熱室。蔵で最も温かく、最も清浄な部屋である。",zh:"製麴兩天期間維持 30–35°C 的杉木隔熱室；是酒藏中最溫暖也最潔淨的房間。"} },
{ r:"kōji-buta", jp:"麹蓋", cat:{en:"Equipment",ja:"設備",zh:"設備"},
  d:{en:"Small cedar trays holding about 1.5 kg of kōji each. The finest control available, and the reason someone is awake all night.",ja:"一枚におよそ1.5キロの麹を盛る小さな杉の蓋。最も細かな制御ができ、誰かが一晩中起きている理由でもある。",zh:"每片盛約 1.5 公斤麴的小型杉木盤。可達到最精細的控制，也是有人徹夜不睡的原因。"} },
{ r:"kioke", jp:"木桶", cat:{en:"Equipment",ja:"設備",zh:"設備"},
  d:{en:"A cedar vat bound with bamboo hoops. Universal until the 1930s, now a deliberate minority choice; the coopers who can build them number in the dozens.",ja:"竹の箍で締めた杉の桶。一九三〇年代まで当たり前だったが、いまは意図された少数派の選択である。作れる桶師は数十人しかいない。",zh:"以竹箍束緊的杉木桶。1930 年代前為常態，如今是刻意的少數選擇；能製作它的桶師僅數十人。"} },
{ r:"yuki-muro", jp:"雪室", cat:{en:"Equipment",ja:"設備",zh:"設備"},
  d:{en:"A snow store holding 2–5°C at high humidity through summer with no electricity; used for maturing sake in the snow country.",ja:"冬の雪を詰め、電気を使わずに夏まで2〜5度と高湿度を保つ室。雪国で酒の熟成に用いられる。",zh:"以冬雪填充的貯藏室，不用電即可維持 2–5°C 與高濕度直到夏天；雪國用以熟成清酒。"} },
{ r:"sugidama", jp:"杉玉", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"A ball of cedar boughs hung under a brewery's eaves when the new sake is pressed — green in winter, brown by autumn.",ja:"新酒を搾ったときに軒下へ吊るす杉の葉の玉。冬は青く、秋には茶になる。",zh:"新酒榨出時懸於酒藏屋簷下的杉葉球——冬天翠綠，入秋轉褐。"} },
{ r:"janome no kikichoko", jp:"蛇の目のきき猪口", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"The 180 ml white porcelain tasting cup with two blue rings in the base: the white shows colour, the rings show clarity.",ja:"底に二重の青い輪を描いた180ミリリットルの白磁の猪口。白い地が色を、輪が冴えを示す。",zh:"底部繪有兩圈藍環的 180 毫升白瓷品評杯：白底顯色，藍環顯清澈度。"} },

/* ---------------- AGEING, SPARKLING, LEES ---------------- */
{ r:"jukusei-shu", jp:"熟成酒", cat:{en:"Styles",ja:"酒質",zh:"酒質"},
  d:{en:"Deliberately aged sake. The working definition is three years or more at the brewery with no added sugar; there is no legal one.",ja:"意図して熟成させた酒。実務上の定義は、糖類を加えず蔵で三年以上。法的な定義はない。",zh:"刻意熟成的酒。實務定義為不加糖、於酒藏中熟成三年以上；並無法定定義。"} },
{ r:"tanshoku jukushu", jp:"淡熟", cat:{en:"Styles",ja:"酒質",zh:"酒質"},
  d:{en:"Pale-type aged sake: ginjō held at 0–5°C, barely coloured after ten years, gaining depth without losing elegance.",ja:"淡色熟成。吟醸を0〜5度で保ち、十年を経てもほとんど色づかず、端正さを失わずに奥行きを得る。",zh:"淡色熟成：吟釀於 0–5°C 保存，十年後仍幾乎不著色，在不失優雅的前提下增添深度。"} },
{ r:"nōshoku jukushu", jp:"濃熟", cat:{en:"Styles",ja:"酒質",zh:"酒質"},
  d:{en:"Dark-type aged sake: junmai held at 20–35°C, amber to mahogany in a few years, heavy with caramel and soy.",ja:"濃色熟成。純米を20〜35度で保ち、数年で琥珀から紅褐に至り、カラメルと醤油の重さをもつ。",zh:"濃色熟成：純米於 20–35°C 保存，數年內由琥珀轉紅褐，帶濃重的焦糖與醬油氣息。"} },
{ r:"zōseki-zei", jp:"造石税", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The 1899 production tax, charged at the moment of manufacture. It made ageing financially impossible and killed the practice for two generations.",ja:"一八九九年の造石税。製造の時点で課された。熟成を経済的に不可能にし、その慣習を二世代にわたり絶やした。",zh:"1899 年的造石稅，於製造當下課徵。它使陳放在財務上不可行，並讓這項習慣消失了兩個世代。"} },
{ r:"awasake", jp:"awa酒", cat:{en:"Styles",ja:"酒質",zh:"酒質"},
  d:{en:"Bottle-fermented sparkling sake meeting the Japan Awasake Association's 2016 standard: junmai composition, natural CO₂ only, clear, 10%+ alcohol, 3.5 bar at 20°C.",ja:"awa酒協会の二〇一六年の基準を満たす瓶内二次発酵の発泡清酒。純米の組成、発酵由来のガスのみ、清澄、アルコール10%以上、20度で3.5バール以上。",zh:"符合 awa 酒協會 2016 年標準的瓶內二次發酵氣泡清酒：純米組成、僅限發酵產生的二氧化碳、清澈、酒精 10% 以上、20°C 下 3.5 巴以上。"} },
{ r:"kassei nigori", jp:"活性にごり", cat:{en:"Styles",ja:"酒質",zh:"酒質"},
  d:{en:"Cloudy sake bottled with live yeast and still fermenting. Pressure builds for months; chill hard, keep upright, open slowly over a sink.",ja:"生きた酵母とともに瓶詰めされ、なお発酵している濁り酒。圧は数か月上がり続ける。よく冷やし、立てて、流しの上でゆっくり開けること。",zh:"帶活酵母裝瓶且仍在發酵的濁酒。壓力會持續累積數月；請充分冰鎮、保持直立，並在水槽上方緩慢開瓶。"} },
{ r:"kasu-buai", jp:"粕歩合", cat:{en:"Numbers",ja:"数値",zh:"數值"},
  d:{en:"Sake lees as a percentage of the rice used. Forty per cent or more means a gentle press and a deliberate sacrifice of yield.",ja:"使用した米に対する酒粕の割合。40%以上は、穏やかに搾り、歩留まりを意図して捨てたことを意味する。",zh:"酒粕占用米量的百分比。40% 以上代表溫和壓榨並刻意犧牲產出率。"} },
{ r:"itakasu", jp:"板粕", cat:{en:"Lees",ja:"酒粕",zh:"酒粕"},
  d:{en:"Board lees — flat slabs cut from a machine press. The everyday form, sold in supermarkets from December.",ja:"自動圧搾機から板状に切り出した酒粕。十二月から食料品店に並ぶ日常の形である。",zh:"板粕——自動壓榨機切出的平板狀酒粕。十二月起在超市販售的日常形態。"} },
{ r:"fumikomi-kasu", jp:"踏込粕", cat:{en:"Lees",ja:"酒粕",zh:"酒粕"},
  d:{en:"Aged lees, packed down under weight until brown and intensely savoury. The medium for narazuke.",ja:"重しをかけて踏み込み、褐色になるまで寝かせた粕。奈良漬の床となる。",zh:"以重物壓實並靜置至褐色、旨味濃烈的熟成酒粕。奈良漬的醃床。"} },
{ r:"kasutori-shōchū", jp:"粕取り焼酎", cat:{en:"Drinks",ja:"酒類",zh:"酒類"},
  d:{en:"Shōchū distilled from sake lees — an old Kyushu and Kansai category with a strong, oily, distinctly lees-derived character.",ja:"酒粕を蒸留した焼酎。九州と関西の古い分野であり、強く油分を感じさせ、粕の性格がはっきり残る。",zh:"以酒粕蒸餾的燒酎——九州與關西的古老類別，酒質強勁帶油脂感，酒粕性格鮮明。"} },
{ r:"koboreume", jp:"こぼれ梅", cat:{en:"Lees",ja:"酒粕",zh:"酒粕"},
  d:{en:"“Spilled plum blossom” — the sweet pale lees left from making mirin, eaten as a sweet in its own right.",ja:"味醂を造ったあとに残る、甘く淡い粕。それ自体を菓子として食べる。",zh:"「零落梅」——製作味醂後留下的甘甜淺色酒粕，可直接當甜點食用。"} },

/* ---------------- COMPETITIONS, TRADE, CULTURE ---------------- */
{ r:"daiji", jp:"題字", cat:{en:"Design",ja:"意匠",zh:"設計"},
  d:{en:"The brand name as a piece of calligraphy, written once by a named hand and then reproduced on every label. Sake is nearly the only drinks category where the brand is written rather than set in a typeface; the signature at the foot of the label is there because the writing is treated as a work with an author.",ja:"書として書かれた銘。名のある手が一度書き、以後あらゆる札に複製される。日本酒は、銘が活字で組まれず書かれる、ほとんど唯一の酒の分野である。札の裾の署名があるのは、その書きぶりが作者を持つ作として扱われるからである。",zh:"作為書法作品的品牌名，由一隻有名有姓的手寫下一次，之後複製在每一張酒標上。清酒幾乎是唯一一個品牌名用寫的而非用字體排版的酒類；酒標底部之所以有落款，是因為那份書寫被視為一件有作者的作品。"} },
{ r:"dōbari / katabari / urabari", jp:"胴貼・肩貼・裏貼", cat:{en:"Design",ja:"意匠",zh:"設計"},
  d:{en:"Body, shoulder and back label. The three main printed pieces on a bottle, each changed on a different schedule: the body holds the brand and almost never changes, the shoulder holds the designation and the season, the back holds everything the law requires.",ja:"胴・肩・裏の札。瓶の上の主な三枚の刷り物であり、それぞれ異なる周期で替わる。胴は銘を持ちほとんど変わらず、肩は特定名称と季を持ち、裏は法の求めるすべてを持つ。",zh:"胴標、肩標與背標。瓶身上三件主要印刷物，各依不同週期更換：胴標帶著品牌、幾乎不變；肩標帶著特定名稱與季節；背標帶著法律要求的一切。"} },
{ r:"kubikake", jp:"首掛け", cat:{en:"Design",ja:"意匠",zh:"設計"},
  d:{en:"The neck tag: the temporary piece, carrying a new release, an award, a serving note or a seasonal message. Cheap to print and easy to remove, which is exactly why anything provisional ends up there rather than on the body label.",ja:"首に掛ける札。一時のものを担う刷り物であり、新酒、受賞、飲み方の助言、季の便りが載る。安く刷れて外しやすく、だからこそ暫定のものはみなここへ来て、胴貼には来ない。",zh:"掛在瓶頸上的小卡：臨時性的那一件，承載新酒、得獎、飲用建議或季節訊息。印刷便宜又容易取下——這正是為什麼所有暫時性的東西都跑到這裡，而不是胴標上。"} },
{ r:"shuhyō", jp:"酒票", cat:{en:"Design",ja:"意匠",zh:"設計"},
  d:{en:"The historical word for a sake label. There is no Edo-period equivalent: the form begins in early Meiji as a woodblock print on washi pasted to a barrel, the earliest estimated at around 1874. Within eight years it had acquired colour, framed borders and the full repertoire of auspicious motifs.",ja:"酒の札を指す古い語。江戸にこれに当たるものはない。明治のはじめ、樽へ貼る和紙の木版として始まり、最も早いものはおおよそ一八七四年と見積もられる。八年のうちに、色と囲みの枠と吉祥の意匠の一式を得ていた。",zh:"清酒酒標的舊稱。江戶時代並無對應之物：這個形式始於明治初年，是貼在酒樽上的和紙木版印刷品，最早者估計約在 1874 年。不到八年，它就取得了色彩、邊框，以及整套吉祥圖樣。"} },
{ r:"kanbōin / rakkan", jp:"冠帽印・落款", cat:{en:"Design",ja:"意匠",zh:"設計"},
  d:{en:"A seal at the head of a label and the writer's mark at its foot — both lifted directly from Chinese painting and calligraphy in the 1870s and 1880s, and both still standard. They are the reason a sake label reads like a hanging scroll rather than a package.",ja:"札の頭の印と裾の書き手の徴。いずれも一八七〇年代から一八八〇年代にかけて漢の画と書からそのまま持ち込まれ、いずれもいまなお定石である。日本酒の札が包みではなく掛軸のように読めるのは、この二つによる。",zh:"酒標頂端的鈐印與底部書寫者的落款——兩者都是在 1870 至 1880 年代直接取自中國書畫，而且至今仍是標準做法。它們正是清酒酒標讀起來像掛軸而非包裝的原因。"} },
{ r:"kappan", jp:"活版", cat:{en:"Design",ja:"意匠",zh:"設計"},
  d:{en:"Letterpress: type or a plate pressed into the sheet so the mark has depth you can feel. Slow and costly per unit, and used almost exclusively on small limited runs — which makes its presence on a label a fair proxy for how little of that sake exists.",ja:"活字や版を紙へ押し込み、しるしに指で触れうる深さを与える刷り。遅く一枚あたりが高く、ほとんど少量の限定にのみ用いられる。ゆえに札の上のその存在は、その酒がいかに少ないかのまずまずの代理となる。",zh:"活版印刷：把活字或印版壓進紙裡，讓痕跡帶有摸得到的深度。慢、單位成本高，而且幾乎只用於小批量限定品——因此它出現在酒標上，是「這支酒有多稀少」的一個合理代理指標。"} },
{ r:"zenkoku shinshu kanpyōkai", jp:"全国新酒鑑評会", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"The national appraisal, run since 1911 as a technical exercise rather than a consumer prize. One entry per brewery, judged blind on defined criteria.",ja:"一九一一年以来、消費者向けの賞ではなく技術的な取り組みとして続く全国の鑑評会。一蔵一点、定められた基準でブラインド審査される。",zh:"自 1911 年起舉辦的全國鑑評會，性質為技術性事業而非消費者獎項。一藏一件，依既定標準盲測評審。"} },
{ r:"YK-35", jp:"YK-35", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"The 1980s competition formula — Yamada Nishiki, Kyōkai No. 9, milled to 35% — and shorthand for the convergence a single standard produces.",ja:"一九八〇年代の鑑評会の処方——山田錦、きょうかい九号、精米歩合35%。単一の基準が生む収斂の代名詞でもある。",zh:"1980 年代的鑑評會配方——山田錦、協會九號、精米步合 35%——也是單一標準所造成之趨同的代稱。"} },
{ r:"teiban", jp:"定番", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"The standing range: the products that are on the shelf every month of the year at a price meant for repeat purchase. Unglamorous and the single most informative part of a brewery's lineup, because it has to be the same in a bad rice year as in a good one and because nobody buys it twice for the story.",ja:"定番。年のいずれの月にも棚にあり、再び買われるための値をつけられた品。華はなく、そして蔵の品揃えのうち最も多くを語る部分である。米の悪い年にも良い年にも同じでなければならず、そして物語のために二度買う者はいないからである。",zh:"常態品：全年每個月都在架上、定價是為了回購的產品。不華麗，卻是一家酒藏產品線裡資訊量最大的部分——因為它在米欠收與豐收的年份必須一樣，也因為沒有人會為了故事而買第二次。"} },
{ r:"jikagumi", jp:"直汲み", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Bottled straight from the press without settling or filtering, so the carbon dioxide of fermentation is still dissolved in it. The sake is faintly spritzy for a few weeks and then is not — the one modifier on a label whose effect has an expiry date.",ja:"澱を引かず濾さず、搾り口からそのまま詰める。発酵の炭酸がなお溶けている。その酒は数週のあいだ微かに弾け、そののち弾けない。札の上の修飾のうち、効き目に期限のある唯一のものである。",zh:"直接從壓榨口裝瓶，不靜置、不過濾，發酵的二氧化碳仍溶在裡面。這支酒會微微帶氣幾個星期，然後就不帶了——這是酒標上唯一一個效果有期限的修飾詞。"} },
{ r:"tobin-gakoi", jp:"斗瓶囲い・斗瓶取り", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The free-run drops from a bag-hung pressing caught in eighteen-litre glass jars — <em>tobin</em> — each jar then tasted and kept or blended separately. This is how competition sake is made; a brewery selling it is selling the same lot it would have entered.",ja:"袋吊りの搾りから落ちる雫を、十八リットルの硝子の瓶——斗瓶——に受け、瓶ごとに利いて残すか混ぜるかを別々に決める。鑑評会の酒はこうして造られる。これを売る蔵は、出品したであろうものと同じ仕込を売っている。",zh:"袋吊壓榨滴下的自流酒被收進十八公升的玻璃瓶——斗瓶——裡，每瓶分別品評後再決定留下或混合。鑑評會用的酒就是這樣做的；販售它的酒藏，賣的正是它本來要送去參賽的那一批。"} },
{ r:"tokuyakuten", jp:"特約店", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"A designated retailer with a direct contract with the brewery, chosen for cold storage and knowledge. Why famous brands are not simply available.",ja:"蔵と直接契約した指定の酒販店。冷蔵設備と知識によって選ばれる。名高い銘柄が単純には手に入らない理由である。",zh:"與酒藏直接簽約的指定零售商，依冷藏設備與專業知識挑選。這正是名牌酒無法輕易買到的原因。"} },
{ r:"okegai / okeuri", jp:"桶買い・桶売り", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"The bulk trade in unbranded sake between breweries. Once enormous, much reduced, and the reason brewery count and brand count never match.",ja:"蔵どうしで無銘の酒をタンク単位で売買すること。かつては巨大で、いまは大きく縮んだ。蔵の数と銘柄の数が一致しない理由である。",zh:"酒藏之間以整槽為單位買賣無品牌清酒。曾規模龐大，如今大幅縮減；也是酒藏數與品牌數從不吻合的原因。"} },
{ r:"jizake", jp:"地酒", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"“Local sake” — a marketing category invented in the 1970s to distinguish small regional producers from the national Nada and Fushimi brands.",ja:"その土地の酒。灘や伏見の全国銘柄と小さな地方の造り手を区別するため、一九七〇年代に生まれた売り方の区分である。",zh:"「地酒」——1970 年代為區別地方小型生產者與灘、伏見全國性品牌而創的行銷分類。"} },
{ r:"kurabiraki", jp:"蔵開き", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"A brewery open day, usually in late January when the first sake of the season is released.",ja:"蔵の一般公開。多くは一月下旬、その季の最初の酒が出るころに行われる。",zh:"酒藏開放日，多在一月下旬當季首批新酒出貨時舉行。"} },
{ r:"nominication", jp:"飲みニケーション", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Drinking plus communication: the idea that real workplace understanding happens after hours. Still real, weaker than it was.",ja:"「飲む」と「コミュニケーション」の造語。職場の本当の理解は勤務後に生まれるという考え。いまも現実だが、かつてより弱い。",zh:"「飲」與「溝通」的合成詞：認為職場真正的理解發生在下班後。至今仍真實存在，但已弱於從前。"} },
{ r:"bureikō", jp:"無礼講", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"A declaration, usually by the most senior person, that rank is suspended for the evening. Genuine social technology, and a trap.",ja:"多くは最も上位の者が、今宵は序列を措くと宣すること。実効性のある社会的な仕組みであり、同時に罠でもある。",zh:"通常由最資深者宣布今晚暫停位階。這是確有實效的社會技術，同時也是陷阱。"} },
{ r:"jōgo / geko", jp:"上戸・下戸", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Someone who can drink, and someone who cannot. Both ancient and entirely neutral; declaring yourself geko is a complete answer.",ja:"飲める人と飲めない人。いずれも古く、まったく中立な語である。「下戸です」は完結した答えになる。",zh:"能喝的人與不能喝的人。兩詞都很古老且完全中性；自稱「下戶」是一個自足的回答。"} },
{ r:"aruhara", jp:"アルハラ", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Alcohol harassment — pressuring someone to drink. Socially unacceptable since 1990s campaigns and in some circumstances legally actionable.",ja:"アルコールハラスメント。飲むことを強いる行為であり、一九九〇年代の啓発以来、社会的に許されず、状況によっては法的責任も生じる。",zh:"酒精騷擾——逼人飲酒。自 1990 年代的倡議以來已不為社會所接受，某些情況下更可能負法律責任。"} },
{ r:"yawaragi-mizu", jp:"和らぎ水", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Water drunk alongside sake, glass for glass. Standard in any good bar, and the single most useful thing at a long table.",ja:"酒と交互に飲む水。良い店では当たり前であり、長い席で最も役に立つものである。",zh:"與清酒交替飲用的水。任何好店都視為理所當然，也是長時間席間最有用的一件事。"} },
{ r:"kanzake-shi", jp:"燗酒師", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"A qualification for warming sake — vessel, method and target temperature for a given bottle. A small but serious discipline.",ja:"燗をつけるための資格。ある一本に対する器、方法、目標温度を扱う。小さいが真剣な技術である。",zh:"專為溫酒而設的資格：針對特定酒款的器具、方法與目標溫度。是一門規模不大但認真的技藝。"} },
{ r:"ryōrishu", jp:"料理酒", cat:{en:"Drinks",ja:"酒類",zh:"酒類"},
  d:{en:"Purpose-made cooking sake, usually with 2–3% salt added so it is legally food rather than alcohol. Fine for cooking; season the dish accordingly.",ja:"料理専用の酒。多くは2〜3%の塩を加えることで、法的に酒類ではなく食品となる。料理には十分だが、塩加減をそれに合わせること。",zh:"專為烹調製作的酒，通常加入 2–3% 的鹽，使其法律上屬食品而非酒類。做菜足夠，但須據此調整鹹度。"} },
{ r:"kaijōhō jissenroku", jp:"改醸法実践録", cat:{en:"History",ja:"歴史",zh:"歷史"},
  d:{en:"Miura Senzaburō's 1898 practical record of the soft-water brewing method — the first systematic technical manual of its kind.",ja:"三浦仙三郎による一八九八年の軟水醸造法の実践記録。この種の体系的な技術書として最初のものである。",zh:"三浦仙三郎 1898 年關於軟水釀造法的實踐紀錄——同類系統性技術著作中的第一部。"} },
{ r:"hyakushi senkai", jp:"百試千改", cat:{en:"History",ja:"歴史",zh:"歷史"},
  d:{en:"“A hundred trials, a thousand revisions” — Miura Senzaburō's motto, and the first clear statement of empirical method in Japanese brewing.",ja:"三浦仙三郎の言葉。日本の酒造りにおける経験的方法の最初の明確な表明である。",zh:"「百試千改」——三浦仙三郎的座右銘，也是日本釀酒中經驗方法的第一次明確表述。"} }
,
{ r:"haisen", jp:"盃洗", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"A bowl of water on the table for rinsing a cup before passing it to someone else. Belongs to the older etiquette of sharing one cup around a group.",ja:"杯を人に回す前に濯ぐための、卓上の水の鉢。一つの杯を巡らせる古い作法に属する。",zh:"放在桌上、供傳杯給他人之前涮杯用的水缽。屬於眾人共用一杯的舊式禮儀。"} },
{ r:"morikoboshi · sosogikoboshi", jp:"盛りこぼし・注ぎこぼし", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"The deliberate overflow: a glass set in a masu or on a saucer and filled until it spills. A gesture of generosity, and incidentally more than a measured pour.",ja:"意図された溢れ。枡や受け皿に置いた杯を、こぼれるまで満たす。気前のよさの所作であり、ついでに計った一杯より多い。",zh:"刻意的滿溢：把杯子放在枡或碟上，斟到溢出。這是慷慨的姿態，順帶也比量過的一杯更多。"} },
{ r:"oshaku · tejaku", jp:"お酌・手酌", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Pouring for another, and pouring for oneself. In most Japanese drinking situations you fill your companion's cup; pouring your own is a small signal that the table has relaxed.",ja:"人に注ぐことと、自らに注ぐこと。多くの酒席では相手の杯を満たす。手酌は、その場が寛いだことの小さな合図である。",zh:"為他人斟酒與為自己斟酒。多數日本酒席上是替同伴斟滿；自斟則是這場合已經放鬆下來的小訊號。"} },
{ r:"komo-daru", jp:"菰樽", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"A cedar cask wrapped in a woven straw mat printed with the brand, used for ceremonial barrel-breaking. The wrapping is decorative and protective at once.",ja:"銘柄を刷った菰で包んだ杉の樽。鏡開きに用いられる。菰は装飾であると同時に保護でもある。",zh:"以印有品牌的草蓆包裹的杉木酒樽，用於開鏡儀式。草蓆同時具裝飾與保護作用。"} },
{ r:"kiriko", jp:"切子", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Cut glass, in the Edo and Satsuma traditions. Adds refraction and weight without changing flavour; the conventional summer material.",ja:"江戸切子、薩摩切子の系譜の切子硝子。味を変えずに屈折と重みを加える。慣例として夏の素材である。",zh:"江戶與薩摩傳統的切割玻璃。在不改變風味的前提下增加折射與重量；依慣例是夏季的材質。"} },
{ r:"shikki · urushi", jp:"漆器", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Lacquerware. Wood under many coats of urushi: warm to the touch, almost weightless, and the best insulator among sake vessels, so warm sake stays warm longest in it.",ja:"木地に漆を幾重にも重ねたもの。手に温かく、ほとんど重さがなく、酒器のうち最もよく断熱する。ゆえに燗が最も長く温かい。",zh:"漆器。木胎上塗以多層生漆：觸感溫暖、幾乎無重量，是酒器中最好的隔熱材，因此溫酒在其中保溫最久。"} },
{ r:"suzu", jp:"錫", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Tin. Conducts heat very fast, which makes it the best material for a warming vessel; chemically inert and traditionally credited with rounding off harshness.",ja:"熱をきわめて速く伝えるため、燗の器として最も優れる。化学的に不活性であり、古来、角を取るとされる。",zh:"錫。導熱極快，因此是最好的溫酒器材質；化學性質惰性，自古被認為能磨圓酒的粗糙感。"} },
{ r:"Bizen-yaki", jp:"備前焼", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Unglazed, iron-dark, wood-fired stoneware from Okayama. Its fine porosity is widely claimed to soften a sake's edges — a claim believed more than it is tested.",ja:"岡山の、釉をかけず薪で焼く鉄色の炻器。その細かな多孔質が酒の角を取るとされるが、検証よりも信仰が先んじている。",zh:"岡山出產、不上釉、以柴窯燒成的鐵黑色炻器。其細微多孔性常被認為能磨去酒的稜角——這個說法被相信的程度遠高於被驗證的程度。"} },
{ r:"Hagi-yaki", jp:"萩焼", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Soft, pale Yamaguchi ware with a crazed glaze that stains and changes with use. Collectors speak of a Hagi cup being “raised” over years.",ja:"山口の、柔らかく淡い、貫入の入った器。使ううちに染み、変わってゆく。萩の杯を年をかけて「育てる」と語られる。",zh:"山口出產、質地柔軟、色澤淺淡、帶貫入釉的器物，會隨使用而吃色變化。收藏者會說一只萩燒杯是花了多年「養」出來的。"} },
{ r:"Shino · Oribe", jp:"志野・織部", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Two Mino styles from Gifu: Shino a thick, warm white glaze; Oribe a bold copper green. Both are sixteenth-century tea-ceremony aesthetics applied to drinking vessels.",ja:"岐阜・美濃の二つの様式。志野は厚く温かい白釉、織部は大胆な銅の緑。いずれも十六世紀の茶の美意識が酒器に及んだものである。",zh:"岐阜美濃的兩種樣式：志野是厚實溫暖的白釉，織部是大膽的銅綠。兩者都是十六世紀茶道美學延伸到酒器上的產物。"} },
{ r:"hinoki", jp:"檜", cat:{en:"Vessels",ja:"酒器",zh:"酒器"},
  d:{en:"Japanese cypress, the wood of the masu. Contributes a strong resinous aroma of its own — either the entire point or an intrusion, depending on the drinker.",ja:"枡の木である。それ自身の強い樹脂の香を与える。眼目そのものか、邪魔か、飲み手による。",zh:"日本扁柏，是枡的用材。會貢獻自身強烈的樹脂香氣——這究竟是全部重點還是干擾，端看飲者。"} },
{ r:"kura-iri", jp:"蔵入り", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The crew's arrival at the brewery for the season. Under the guild system this meant leaving home for five months; today it usually means the shift pattern changing.",ja:"造りの季に蔵人が蔵へ入ること。組の制度では五か月家を離れることを意味し、今日は多くの場合、勤務の形が変わることを意味する。",zh:"藏人為當季進入酒藏。在行會制度下這意味著離家五個月；如今通常只意味著班表改變。"} },
{ r:"kanki", jp:"閑期", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"The empty season, roughly July to September: tanks washed and open, the kōji room dried and sterilised, equipment stripped and repaired, and the year's rice contracts negotiated.",ja:"およそ七月から九月の閑散期。タンクは洗って開け放ち、麹室を乾かして殺菌し、道具を分解して直し、その年の米の契約を詰める。",zh:"約七月至九月的淡季：酒槽洗淨敞開、麴室烘乾殺菌、器具拆解修理，並洽談當年的稻米契約。"} },
{ r:"risshun asa-shibori", jp:"立春朝搾り", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"Sake pressed in the small hours of the first day of spring, blessed, and delivered to shops the same day. A modern invention, and a thoroughly enjoyable one.",ja:"立春の未明に搾り、祈祷を受け、その日のうちに店へ届ける酒。現代の発明であり、まことに楽しい。",zh:"在立春當日凌晨壓榨、經祈福後於同日送達店家的酒。這是現代的發明，而且相當令人愉快。"} },
{ r:"natsuzake", jp:"夏酒", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Summer sake: lower alcohol, higher acidity, sometimes sparkling, designed for cold serving in the season when sake sales traditionally collapse.",ja:"夏の酒。低めのアルコール、高めの酸、時に発泡。日本酒の売れ行きが落ちる季節に、冷やして飲むために設計されている。",zh:"夏酒：較低酒精、較高酸度，有時帶氣泡，專為清酒銷售傳統上低迷的季節、供冰鎮飲用而設計。"} },
{ r:"shōsan-kangenkin", jp:"硝酸還元菌", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"Nitrate-reducing bacteria. In a kimoto they convert nitrate in the brewing water to nitrite, which suppresses wild yeast during the vulnerable first days — then die in the acid they helped create.",ja:"生酛において仕込水の硝酸を亜硝酸へ変え、脆い初期の数日、野生酵母を抑える。そののち、自らが生むのを助けた酸によって死ぬ。",zh:"硝酸還原菌。在生酛中把釀造用水的硝酸鹽轉為亞硝酸鹽，在最脆弱的頭幾天壓制野生酵母；隨後死於自己協助生成的酸。"} },
{ r:"yasei-kōbo", jp:"野生酵母", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"Wild yeasts arriving on rice and in air — Pichia, Hansenula and others. They ferment weakly and produce rough, solvent-like flavours; removing them is what a traditional starter is for.",ja:"米や空気とともに来るピキア、ハンゼヌラなどの酵母。発酵は弱く、粗く溶剤めいた味を生む。これを除くことが伝統的な酒母の目的である。",zh:"隨米與空氣進入的野生酵母——畢赤、漢遜等屬。發酵力弱，產生粗糙、帶溶劑感的味道；傳統酒母的目的就是清除它們。"} },
{ r:"sanmaku-kōbo", jp:"産膜酵母", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"Film yeasts. Oxidative yeasts that form a wrinkled white film on a still surface exposed to air, consuming alcohol and producing acetaldehyde. A part-empty open tank is where they appear.",ja:"空気に触れた静かな液面に皺のある白い膜を張る酸化性の酵母。アルコールを消費しアセトアルデヒドを生む。中途半端に空いた開いたタンクに現れる。",zh:"產膜酵母。氧化性酵母，在接觸空氣的靜止液面形成起皺白膜，消耗酒精並產生乙醛。半空又敞開的酒槽是它們出現之處。"} },
{ r:"sakusan-kin", jp:"酢酸菌", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"Acetic acid bacteria, which convert alcohol to acetic acid in the presence of oxygen. Rarely a problem in a working brewery; the reason a half-empty opened bottle eventually smells of vinegar.",ja:"酸素があればアルコールを酢酸に変える。稼働中の蔵で問題になることは稀だが、半分残した開栓済みの瓶がやがて酢の匂いを放つ理由である。",zh:"醋酸菌，在有氧條件下把酒精轉為醋酸。在運作中的酒藏鮮少造成問題；但一支只剩一半的開瓶酒最終會有醋味，原因就是它。"} },
{ r:"hiochi-san", jp:"火落酸", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"“Hiochic acid” — the growth factor hiochi bacteria require, identified in 1956 by Tamura Gakuzō as mevalonic acid, which turned out to be the central precursor of the whole isoprenoid pathway.",ja:"火落菌が要する生育因子。昭和三十一年（1956）に田村学造がメバロン酸と同定した。それはイソプレノイド経路全体の中心的な前駆体であることが判明した。",zh:"「火落酸」——火落菌所需的生長因子，一九五六年由田村学造鑑定為甲羥戊酸；後來證實它是整條類異戊二烯途徑的核心前驅物。"} },
{ r:"fuzō", jp:"腐造", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"Total spoilage of a tank or a season. Before pure cultures and pasteurisation this could bankrupt a brewery, and the word carries the weight of a business failure as much as a technical one.",ja:"タンク、あるいは一季の全損。純粋培養と火入れ以前、これは蔵を潰しえた。語は技術上の失敗と同じだけ商いの破綻の重みを負う。",zh:"整槽或整季的敗壞。在純粹培養與火入問世之前，這足以讓一家酒藏破產；這個詞承載的商業破產份量，不亞於技術失敗。"} },
{ r:"kokkin", jp:"国菌", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"“National fungus.” Aspergillus oryzae was formally recognised as such by the Brewing Society of Japan on 12 October 2006, following a 2004 proposal by the enzymologist Ichijima Eiji. No other country has designated one.",ja:"ニホンコウジカビは、平成十六年（2004）の一島英治の提唱を経て、平成十八年（2006）十月十二日に日本醸造学会が正式に認定した。国の菌を定めた国は他にない。",zh:"「國菌」。米麴菌在二〇〇四年由酵素學者一島英治提議後，於二〇〇六年十月十二日由日本釀造學會正式認定。沒有其他國家指定過國家級真菌。"} },
{ r:"nattō-kin", jp:"納豆菌", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"Bacillus subtilis natto. Grows faster than the kōji mould, survives on skin and clothing and can take over a kōji room — which is why brewers do not eat nattō during the season and visitors are asked not to either.",ja:"麹菌より速く育ち、肌や衣服の上で生き延び、麹室を乗っ取りうる。蔵人が造りの季に納豆を食べず、訪う者にも控えるよう求める理由である。",zh:"納豆菌。生長比麴菌快，能在皮膚與衣物上存活並占領麴室——這正是藏人在釀造季不吃納豆、也請訪客別吃的原因。"} },
{ r:"kuro-kōji-kin", jp:"黒麹菌", cat:{en:"Kōji",ja:"麹",zh:"麴"},
  d:{en:"Black kōji, Aspergillus luchuensis. Produces large amounts of citric acid, which protects a mash in a warm climate — the basis of Okinawan awamori and of much shōchū.",ja:"アスペルギルス・リュウキュウエンシス。クエン酸を多く生み、暖かい気候で醪を守る。沖縄の泡盛と多くの焼酎の基礎である。",zh:"黑麴菌，Aspergillus luchuensis。大量產生檸檬酸以在溫暖氣候下保護醪——這是沖繩泡盛與許多燒酎的基礎。"} },
{ r:"shiro-kōji-kin", jp:"白麹菌", cat:{en:"Kōji",ja:"麹",zh:"麴"},
  d:{en:"White kōji, a mutant of the black mould isolated in the early twentieth century. Easier to handle than black kōji and now the dominant mould in mainland shōchū.",ja:"二十世紀初頭に黒麹から分離された変異株。黒麹より扱いやすく、今日、本土の焼酎の主流である。",zh:"白麴菌，二十世紀初從黑麴中分離出的變異株。比黑麴好處理，如今是日本本土燒酎的主流菌種。"} },
{ r:"nyonin kinsei", jp:"女人禁制", cat:{en:"History",ja:"歴史",zh:"歷史"},
  d:{en:"The folk prohibition on women entering a working brewery. Never a law, never universal, variously explained by contamination fear, live-in male crews, ritual purity or a jealous deity — and gone in practice.",ja:"稼働中の蔵に女性が入ることの俗信による禁。法でも普遍でもなく、雑菌への恐れ、住み込みの男の組、清浄、嫉妬する神など様々に説明され、実際には消えた。",zh:"禁止女性進入運轉中酒藏的民間禁忌。從不是法律，也不普遍；解釋眾說紛紜——怕雜菌污染、住宿的男性工班、祭祀潔淨、善妒之神——而在實務上已經消失。"} },
{ r:"okami", jp:"女将", cat:{en:"History",ja:"歴史",zh:"歷史"},
  d:{en:"The woman of a brewery household: accounts, tax paperwork, credit with wholesalers, the shop counter, feeding a live-in crew, and in many houses the actual management of the business.",ja:"蔵という家の女性。帳場、税の書類、問屋との掛け、店先、住み込みの組の賄い、そして多くの家では経営そのもの。",zh:"酒藏這個「家」的女主人：帳目、稅務文書、與批發商的信用往來、店面櫃檯、供養住宿的工班，在許多家更包括實際的經營。"} },
{ r:"tarukaisen", jp:"樽廻船", cat:{en:"History",ja:"歴史",zh:"歷史"},
  d:{en:"The barrel ships that carried Nada sake to Edo from the eighteenth century, racing for the season's first delivery. The competition standardised vat and cask sizes and made brewing reputation tradeable.",ja:"十八世紀以降、灘の酒を江戸へ運び、その年の初荷を競った船。競争は桶と樽の寸法を標準化し、酒の評判を売買可能なものにした。",zh:"自十八世紀起把灘的酒運往江戶的樽迴船，並競相搶當季首批到貨。這場競爭使酒桶與木樽的尺寸標準化，也讓釀造聲譽變得可以買賣。"} },
{ r:"Nada gogō", jp:"灘五郷", cat:{en:"Place",ja:"産地",zh:"產地"},
  d:{en:"The five brewing districts of Nada, across Kōbe, Nishinomiya and Ashiya. Historically the largest producing area in Japan, and a designated geographical indication since 2018.",ja:"神戸・西宮・芦屋にまたがる灘の五つの郷。歴史的に日本最大の産地であり、2018年から地理的表示に指定されている。",zh:"橫跨神戶、西宮、蘆屋的灘之五鄉。歷史上是日本最大的產區，並自二〇一八年起獲指定為地理標示。"} },
{ r:"kōon tōjuku", jp:"高温登熟", cat:{en:"Rice",ja:"米",zh:"米"},
  d:{en:"High-temperature grain filling. Heat during ripening produces chalky, immature grains that crack under milling and dissolve unevenly — the most immediate way climate change reaches sake.",ja:"登熟期の高温。白く未熟な粒を生み、精米で割れ、醪で不均一に溶ける。気候変動が日本酒に届く最も直接の経路である。",zh:"高溫登熟。成熟期的高溫會產出白堊質的未熟米粒，碾磨時碎裂、在醪中溶解不均——這是氣候變遷最直接影響清酒的途徑。"} },
{ r:"hyōji kijun", jp:"製法品質表示基準", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The 1989 National Tax Agency standard on the manufacturing methods and quality labelling of seishu: the source of the eight special designations and of every regulated optional term on a label.",ja:"平成元年（1989）の国税庁による清酒の製法品質表示基準。八つの特定名称と、ラベル上の規制された任意表示用語のすべての典拠である。",zh:"一九八九年國稅廳頒布的《清酒製法品質標示基準》：八種特定名稱與酒標上所有受規範之任意用語的來源。"} },
{ r:"gōsei seishu", jp:"合成清酒", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"Synthetic sake, built from alcohol, sugars, amino acids and acids rather than brewed. Patented by Suzuki Umetarō in 1921 after the rice shortages of 1918; still a legal category, and the reason the law had to define real sake.",ja:"醸すのではなく、アルコール、糖、アミノ酸、酸から組み立てた酒。大正七年（1918）の米不足を受け、鈴木梅太郎が大正十年（1921）に特許を得た。今なお法的な区分であり、法が本物の清酒を定義せざるをえなくなった理由である。",zh:"合成清酒，以酒精、糖、胺基酸與酸組建而成，而非釀造。鈴木梅太郎於一九二一年取得專利，起因是一九一八年的缺米。至今仍是法定類別，也是法律不得不定義何謂真清酒的原因。"} },
{ r:"kyūbetsu seido", jp:"級別制度", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The abolished state grading system — 特級, 一級, 二級 — assigned by tasting panel for tax purposes and dismantled between 1989 and 1992. The words may no longer be used.",ja:"廃止された国の等級制度。特級・一級・二級を課税のために官能審査で付した。1989年から1992年にかけて解体され、語の使用は認められない。",zh:"已廢除的國家級別制度——特級、一級、二級——由官能審查為課稅目的而評定，於一九八九至一九九二年間解體。這些字詞不得再使用。"} },
{ r:"mukansa nikyū-shu", jp:"無鑑査二級酒", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"“Unassessed second grade”. Under the old grading system, submission to the tax authority's tasting panel was voluntary and unsubmitted sake was second grade by default, at the lowest rate of duty. Breweries began declining assessment on purpose, selling good sake cheaply as second grade and advertising the refusal — which is how the grade on the bottle stopped meaning anything.",ja:"鑑査を受けぬ二級酒。旧い級別制度において、税務当局の審査会への提出は任意であり、提出されなかった酒は既定により二級、すなわち最も低い税率であった。蔵は意図して鑑査を断りはじめ、良い酒を二級として安く売り、その拒みを売りにした——瓶の級が何をも意味しなくなった経緯である。",zh:"「未受鑑查的二級酒」。在舊的級別制度下，送交稅務當局審查會是自願的，未送審的酒依預設即為二級，適用最低稅率。酒藏開始刻意拒絕受審，把好酒當二級便宜賣，並把這個拒絕當成賣點——瓶身上的等級也就因此失去了意義。"} },
{ r:"kingyo-zake", jp:"金魚酒", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"“Goldfish sake” — wartime and immediate postwar sake diluted so far down the distribution chain that a goldfish dropped into it would live. Not a legal term but a period one; it names the abuse that made every later rule about volume and strength necessary.",ja:"金魚を落としても生きるほどに、流通の道々で薄められた戦中戦後の酒。法の語ではなく時代の語である。量と度数についての後のあらゆる規を必要にした不正に、名を与えている。",zh:"「金魚酒」——戰時與戰後初期的酒，在流通鏈上被一路稀釋到把金魚丟進去還能活。這不是法律用語而是時代用語；它為後來一切關於容量與酒精度的規定之所以必要的那樁弊端，命了名。"} },
{ r:"minōzei ishutsu", jp:"未納税移出", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"Tax-deferred transfer between licensed manufacturing premises. Duty attaches when sake leaves the last premises, not the first, which is what makes bulk selling between breweries possible and what makes the tax statistics count a tank once rather than twice.",ja:"免許ある製造場のあいだの、課税を繰り延べた移出。税は最初の場ではなく最後の場を離れるときに掛かる。蔵どうしの桶売りを可能にし、また税の統計が一つの桶を二度ではなく一度だけ数える理由である。",zh:"在有執照的製造場之間、延緩課稅的移出。稅是在酒離開最後一個製造場、而非第一個時才附著；這既讓酒藏之間的整槽買賣成為可能，也是稅務統計把一槽酒只算一次的原因。"} },
{ r:"tsumekae todokede", jp:"詰替届出", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The notification required before sake is moved from one container to another anywhere other than a licensed manufacturing premises or a bonded area: filed with the tax office for that place, two days beforehand, under article 50-2 of the liquor tax law. Written for duty reasons, it also means a refilling operation is either on the record or already in breach.",ja:"免許ある製造場または保税地域以外の場所で酒を器から器へ移す前に要する届出。その場所を管する税務署へ、二日前までに、酒税法第五十条の二により提出する。税のために書かれた条だが、結果として、詰替は記録に載るか、さもなくばすでに違反かのいずれかになる。",zh:"在有執照的製造場或保稅區以外的地方，把酒從一個容器移入另一個容器之前必須提出的申報：依酒稅法第 50 條之 2，於事前兩天向該地點所轄的稅務署提出。這一條是為稅而寫的，但效果是：重新灌裝要不在紀錄上，要不就已經違法。"} },
{ r:"zasshu", jp:"雑酒", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"Miscellaneous liquor — the residual tax category for anything that fits none of the defined ones. Sake-like drinks that exceed the statutory ceiling on added materials land here, which is where triple-increment sake went on 1 May 2006, and they may not be sold as sake.",ja:"定められたいずれの品目にも当てはまらぬものが落ちる、残りの課税区分。添加物の法定の上限を越えた酒に似た飲み物はここへ来る。二〇〇六年五月一日に三増酒が行った先であり、日本酒として売ることはできない。",zh:"雜酒——凡是不屬於任何已定義品目者所落入的剩餘課稅類別。超過添加物法定上限、形似清酒的飲料會落到這裡；2006 年 5 月 1 日三增酒去的就是這裡，而它們不得以日本酒之名銷售。"} },
{ r:"tokusen · jōsen · kasen", jp:"特撰・上撰・佳撰", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"House tiers used by several large breweries — choice, superior, fine. They arrived as the old grades were being abolished and are often read as the grades in disguise. They are not: they are a company's own ranking of its own products, with no legal content whatever.",ja:"いくつかの大手が用いる自社の格。特撰・上撰・佳撰。旧い級が廃される頃に現れ、級の変装としばしば読まれる。そうではない。会社が自社の品を自ら並べたものであり、法的な中身は何もない。",zh:"數家大型酒藏使用的自家分級：特撰、上撰、佳撰。它們出現在舊等級被廢除的時期，常被讀成等級的化身。它們不是：那是公司對自家產品的自我排序，沒有任何法律內容。"} },
{ r:"yushutsu-yō menkyo", jp:"輸出用清酒製造免許", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The export-only manufacturing licence introduced in the early 2020s. The first crack in a licensing regime that had effectively blocked new sake breweries for the domestic market for decades.",ja:"二〇二〇年代初頭に導入された輸出向けの製造免許。数十年にわたり国内市場向けの新規参入を事実上封じてきた免許制度の、最初の亀裂である。",zh:"二〇二〇年代初導入的「出口專用製造執照」。這是數十年來實質封鎖國內市場新設酒藏的核照制度上的第一道裂縫。"} },
{ r:"sotolon", jp:"ソトロン", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"The signature compound of long ageing — curry, fenugreek, walnut, caramel — and the same molecule that defines vin jaune and old sherry. In koshu it is the point rather than the fault.",ja:"長期熟成の署名となる化合物。カレー、フェヌグリーク、胡桃、カラメル。ヴァン・ジョーヌや古いシェリーを定義するのと同じ分子である。古酒においては欠点ではなく眼目である。",zh:"長期熟成的署名化合物——咖哩、葫蘆巴、核桃、焦糖——也正是定義黃酒與陳年雪莉的同一個分子。在古酒中它是重點，而非缺陷。"} },
{ r:"4VG", jp:"4-ビニルグアイアコール", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"4-vinylguaiacol: clove, smoke, medicinal. Familiar from wheat beer, generally unwanted in sake, and one marker of an old or badly stored bottle.",ja:"丁子、燻し、薬の香。小麦のビールで馴染みだが、日本酒では概して望まれず、古い、あるいは保存の悪い瓶の標の一つである。",zh:"4-乙烯基癒創木酚：丁香、煙燻、藥味。在小麥啤酒中常見，在清酒中一般不受歡迎，是酒齡過老或保存不良的指標之一。"} },
{ r:"isoamiru arukōru", jp:"イソアミルアルコール", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Isoamyl alcohol, a higher alcohol from amino acid metabolism. Contributes warmth and body in balance and coarseness in excess; its ratio to isoamyl acetate is a routine quality measure.",ja:"アミノ酸代謝から生じる高級アルコール。均衡のうちにあれば温かみと厚みを、過剰であれば粗さを与える。酢酸イソアミルとの比は日常の品質指標である。",zh:"異戊醇，源自胺基酸代謝的高級醇。份量得宜時帶來溫暖與酒體，過量則帶來粗糙；它與乙酸異戊酯的比值是例行的品質指標。"} },
{ r:"asetoarudehido", jp:"アセトアルデヒド", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Acetaldehyde: bruised apple, sherry, green. An intermediate of fermentation and a product of oxidation; a little is normal in a very young sake, a lot means an unfinished ferment or air.",ja:"傷んだ林檎、シェリー、青さ。発酵の中間体であり酸化の産物でもある。ごく若い酒に少量あるのは正常、多ければ発酵の不完全か空気の混入を示す。",zh:"乙醛：碰傷的蘋果、雪莉、青澀。既是發酵的中間產物，也是氧化的產物；極年輕的酒中有少量屬正常，量大則代表發酵未完成或接觸了空氣。"} },
{ r:"gurutamin-san", jp:"グルタミン酸", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Glutamic acid, the classic umami amino acid. Sake carries far more free amino acid than wine or beer, which is the clearest chemical reason it behaves as it does at a dashi-based table.",ja:"旨味の古典であるアミノ酸。日本酒はワインやビールよりはるかに多くの遊離アミノ酸を含み、出汁の食卓での振る舞いの、最も明快な化学的理由である。",zh:"麩胺酸，經典的旨味胺基酸。清酒所含的游離胺基酸遠多於葡萄酒或啤酒，這是它在以高湯為基底的餐桌上表現如此的最清晰化學原因。"} },
{ r:"merunoijin", jp:"メラノイジン", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"Melanoidins, the brown products of the Maillard reaction between amino acids and sugars. They supply the amber colour and much of the caramel and soy character of an aged sake.",ja:"アミノ酸と糖のメイラード反応が生む褐色の産物。熟成酒の琥珀色と、カラメルや醤油の性格の多くを供給する。",zh:"類黑精，胺基酸與糖之間梅納反應的褐色產物。它提供熟成酒的琥珀色澤，以及大部分的焦糖與醬油調性。"} },
{ r:"Miura Senzaburō", jp:"三浦仙三郎", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"1847–1908, Akitsu, Hiroshima. Developed the soft-water brewing method and published it in 1898 — the technical ancestor of ginjō brewing. His motto was hyakushi senkai.",ja:"1847–1908、広島県安芸津。軟水醸造法を確立し、明治三十一年（1898）に公刊した。吟醸造りの技術的な祖である。座右は百試千改。",zh:"1847–1908，廣島安藝津。確立軟水釀造法並於一八九八年刊行——這是吟釀釀造的技術先祖。他的座右銘是「百試千改」。"} },
{ r:"Kagi Kin'ichirō", jp:"嘉儀金一郎", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"1873–1945. Showed at the Brewing Experiment Station that the pole-mashing step of the kimoto could be omitted, publishing the result in November 1909. The method took its name from the abolition: yamahai.",ja:"1873–1945。醸造試験所において、生酛の山卸を省きうることを示し、明治四十二年（1909）十一月に発表した。手法の名はその廃止に由来する——山廃。",zh:"1873–1945。在釀造試驗所證明生酛的山卸工序可以省略，並於一九〇九年十一月發表。工法之名即來自這項廢止：山廢。"} },
{ r:"Eda Kamajirō", jp:"江田鎌治郎", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"1872–1957. Devised the fast starter by adding lactic acid on day one, announced in 1909 — cutting the starter from about a month to about two weeks. Around ninety per cent of sake is now made this way.",ja:"1872–1957。初日に乳酸を加える速醸酛を考案し、明治四十二年（1909）に発表した。酒母を約一か月から約二週間に縮めた。今日、清酒のおよそ九割がこの方法による。",zh:"1872–1957。發明在第一天加入乳酸的速釀酛，於一九〇九年發表，把酒母從約一個月縮短到約兩週。如今約九成的清酒以此法釀成。"} },
{ r:"Nojiro Kin'ichi", jp:"野白金一", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"1876–1964. First technical director of the Kumamoto Sake Research Institute, designer of the nojiro-style kōji room, and in 1952 the isolator of the yeast distributed as Kyōkai No. 9.",ja:"1876–1964。熊本県酒造研究所の初代技師長。野白式麹室を設計し、昭和二十七年（1952）にきょうかい9号として頒布される酵母を分離した。",zh:"1876–1964。熊本縣酒造研究所首任技師長，野白式麴室的設計者；並於一九五二年分離出日後以協會 9 號頒布的酵母。"} },
{ r:"Sakaguchi Kin'ichirō", jp:"坂口謹一郎", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"1897–1994. The scholar who made fermentation science respectable in Japan and insisted sake was worth serious study. His 1964 book Nihon no Sake remains the most influential general account of the drink.",ja:"1897–1994。日本において発酵科学を一個の学問として認めさせ、酒が真剣な研究に値すると主張し続けた学者。昭和三十九年（1964）の『日本の酒』は今なお最も影響力ある概説である。",zh:"1897–1994。讓發酵科學在日本成為受尊重之學科的學者，並堅持清酒值得認真研究。他一九六四年的《日本の酒》至今仍是最具影響力的通論。"} },
{ r:"Kawamura Denbei", jp:"河村伝兵衛", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The prefectural researcher who developed Shizuoka's yeasts and taught the technique brewery by brewery, culminating in Shizuoka taking ten gold medals at the 1986 national appraisal.",ja:"静岡の県酵母を育て、蔵を一つずつ回って技術を教えた県の研究者。昭和六十一年（1986）の全国新酒鑑評会における静岡の金賞十が、その到達点である。",zh:"培育出靜岡縣酵母、並一藏一藏親自傳授技術的縣立研究者；其成果的頂點，是靜岡在一九八六年全國新酒鑑評會拿下十面金賞。"} },
{ r:"Yamamura Tazaemon", jp:"山邑太左衛門", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The sixth-generation head of Sakura Masamune, who identified miyamizu around 1837–1840 by changing one variable at a time until the water declared itself — the first controlled experiment in Japanese brewing.",ja:"櫻正宗の六代目。天保年間（1837〜1840頃）、変数を一つずつ替え、ついに水が名乗り出るまで試みて宮水を突きとめた。日本の酒造りにおける最初の対照実験である。",zh:"櫻正宗第六代當家。約於一八三七至一八四〇年間，以一次只換一個變因的方式反覆試驗，直到水自己現身，從而查明宮水——這是日本釀酒史上第一場對照實驗。"} },
{ r:"Tamura Gakuzō", jp:"田村学造", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"1924–2002. Identified the hiochi bacteria growth factor as mevalonic acid in 1956 — a question about spoiled sake that led directly into the isoprenoid pathway of general metabolism.",ja:"1924–2002。昭和三十一年（1956）、火落菌の生育因子をメバロン酸と同定した。腐った酒についての問いが、代謝一般のイソプレノイド経路へ直結した例である。",zh:"1924–2002。一九五六年鑑定出火落菌的生長因子為甲羥戊酸——一個關於壞掉的酒的問題，就此直通一般代謝的類異戊二烯途徑。"} },
{ r:"Noguchi Naohiko", jp:"農口尚彦", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"Born 1932, a Noto tōji who brewed at Kikuhime from 1961 to 1997 and has continued into his nineties. Associated above all with keeping yamahai alive when the industry had abandoned it.",ja:"1932年生まれの能登杜氏。1961年から1997年まで菊姫で醸し、九十を越えてなお造り続ける。何より、業界が捨てた山廃を生かし続けたことと結びついた名である。",zh:"一九三二年生的能登杜氏，一九六一至一九九七年在菊姬釀酒，年逾九十仍持續釀造。他的名字首先與「在業界放棄山廢時讓它活下來」連在一起。"} },
{ r:"Imada Miho", jp:"今田美穂", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"Born 1961; tōji at her family's Hiroshima brewery since 2000, revived the Hattansō rice from 2004, and named to the BBC's 100 Women in 2020 — from the same town as Miura Senzaburō.",ja:"1961年生まれ。2000年より広島の実家の蔵で杜氏を務め、2004年から八反草を復活させ、2020年にBBCの「100 Women」に選ばれた。三浦仙三郎と同じ町から。",zh:"一九六一年生；自二〇〇〇年起在廣島的家族酒藏擔任杜氏，二〇〇四年起復育八反草米，並於二〇二〇年入選 BBC「100 Women」——來自與三浦仙三郎相同的小鎮。"} },
{ r:"Nanbu tōji", jp:"南部杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The largest brewing guild, based at Ishidoriya in Hanamaki, Iwate. Organised as a union in 1914 and reconstituted as the present association in 1948; it runs its own self-brewed sake appraisal.",ja:"最大の杜氏集団。岩手県花巻市石鳥谷に本拠を置く。大正三年（1914）に組合として組織され、昭和二十三年（1948）に現在の協会となった。独自の自醸清酒鑑評会を運営する。",zh:"規模最大的杜氏集團，本部設於岩手縣花卷市石鳥谷。一九一四年組成組合，一九四八年重整為現今協會，並主辦自家的自釀清酒鑑評會。"} },
{ r:"Echigo tōji", jp:"越後杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The Niigata guild, and the transmission mechanism behind the tanrei karakuchi house style that makes the prefecture read as one coherent region.",ja:"新潟の杜氏集団であり、県が一つのまとまった産地として読める理由である淡麗辛口の型を伝えた仕組みである。",zh:"新潟的杜氏集團，也是讓該縣讀來像一個完整產地的「淡麗辛口」風格得以傳承的機制。"} },
{ r:"Tajima tōji", jp:"但馬杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The northern Hyōgo guild that staffed the Nada breweries. Hyōgo grew the rice in the south and supplied the labour from the north.",ja:"灘の蔵を担った兵庫北部の杜氏集団。兵庫は南で米を作り、北から人を出した。",zh:"支撐灘之酒藏的兵庫北部杜氏集團。兵庫在南部種米，在北部出人。"} },
{ r:"Noto tōji", jp:"能登杜氏", cat:{en:"People",ja:"人物",zh:"人物"},
  d:{en:"The Ishikawa guild — small, disproportionately celebrated, associated with rich well-structured sake, with yamahai and with the four brewers known as the Noto shitennō.",ja:"石川の杜氏集団。小さく、不釣り合いなほど名高い。厚みと骨格のある酒、山廃、そして能登四天王と呼ばれた四人と結びついている。",zh:"石川的杜氏集團——規模小、名聲卻大得不成比例，與厚實有骨架的酒、山廢，以及被稱為「能登四天王」的四位釀造者相連。"} },
{ r:"kōji-buta hōshiki", jp:"蓋麹法", cat:{en:"Kōji",ja:"麹",zh:"麴"},
  d:{en:"Making kōji in small lidded cedar trays rather than boxes or a machine. The most laborious method, and the only one that qualifies a bottle for the label term tezukuri.",ja:"箱や機械ではなく、小さな杉の蓋で麹を造る方法。最も手のかかる方法であり、瓶に「手造り」の表示を許す唯一の方法である。",zh:"以小型杉木蓋盤而非木箱或機器製麴。這是最耗人力的方法，也是唯一能讓酒瓶取得「手造り」標示資格的做法。"} },
{ r:"jidō seikiku-ki", jp:"自動製麹機", cat:{en:"Kōji",ja:"麹",zh:"麴"},
  d:{en:"An automatic kōji maker: a drum or rotating bed controlling temperature, humidity and turning without a person. Used for volume grades; almost never for a brewery's top range.",ja:"温度、湿度、切り返しを人手なしに制御する円筒あるいは回転床。量産の等級に用いられ、上位の商品に用いられることはまずない。",zh:"自動製麴機：以滾筒或旋轉床控制溫度、濕度與翻拌，無須人力。用於量產等級，幾乎不用於酒藏最高階的產品。"} },
{ r:"enshin bunri-ki", jp:"遠心分離機", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"A centrifuge that separates the mash by spinning rather than squeezing, so no mechanical pressure and no pressed-in bitterness. Very expensive, used by a handful of houses for flagship bottles.",ja:"搾るのではなく回して醪を分離する装置。機械的な圧がかからず、押し込まれた苦味が出ない。きわめて高価で、数蔵が旗艦の瓶に用いる。",zh:"以旋轉而非擠壓來分離醪的離心機，不施加機械壓力，因此不會壓出苦味。造價極高，僅少數酒藏用於旗艦酒款。"} },
{ r:"sāmaru tanku", jp:"サーマルタンク", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"A fermentation tank with a cooling jacket. The single piece of equipment that made cold ginjō fermentation possible outside the snow country, and four-season brewing possible anywhere.",ja:"冷却ジャケットを備えた仕込タンク。雪国の外での低温の吟醸発酵を、そしてどこにおいても四季醸造を可能にした、ただ一つの装置である。",zh:"帶冷卻夾層的發酵槽。正是這一件設備，讓低溫吟釀發酵得以在雪國之外進行，也讓四季釀造得以在任何地方成立。"} },
{ r:"shiki jōzō", jp:"四季醸造", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Four-season brewing: running the brewery all year in temperature-controlled rooms rather than only in winter. Gives even output and year-round staff, and removes the annual rhythm entirely.",ja:"冬だけでなく、温度管理された室で通年醸すこと。均された生産と通年の雇用をもたらし、一年の律動を完全に取り去る。",zh:"四季釀造：在控溫的房間裡全年運轉酒藏，而非只在冬季釀造。它帶來均衡的產出與全年雇用，也徹底取消了一年的節律。"} },
{ r:"isshōbin riyūsu", jp:"一升瓶リユース", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"The reuse system for the 1.8-litre bottle: a standardised bottle collected by retailers, washed and refilled many times. One of the world's longest-running commercial reuse schemes, and now under real strain.",ja:"一升瓶の再使用の仕組み。規格化された瓶を小売が回収し、洗って幾度も詰め直す。世界で最も長く続く商業的な再使用の一つであり、今は本当に軋んでいる。",zh:"一升瓶的再使用系統：規格化的瓶子由零售商回收、清洗並多次重新裝填。這是世界上運作最久的商業再使用機制之一，如今正承受真實的壓力。"} },
{ r:"seizō menkyojō", jp:"製造免許場", cat:{en:"Trade",ja:"産業",zh:"產業"},
  d:{en:"A licensed sake manufacturing premises. Numbers fell from about 2,459 in 1989 to about 1,562 in 2023, and a substantial share of those still licensed brew little or nothing.",ja:"清酒の製造免許を持つ場。平成元年（1989）のおよそ2,459場から令和五年（2023）のおよそ1,562場へ減り、免許を保つもののうち相当数はほとんど醸していない。",zh:"持有清酒製造執照的場所。數量從一九八九年約 2,459 場減至二〇二三年約 1,562 場，而仍持照者中有相當比例幾乎不釀酒。"} },
{ r:"dentōteki sakezukuri", jp:"伝統的酒造り", cat:{en:"Culture",ja:"文化",zh:"文化"},
  d:{en:"“Traditional sake brewing,” inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in December 2024. The designation covers the craft — kōji-based brewing — rather than any product.",ja:"令和六年（2024）十二月、ユネスコ無形文化遺産の代表一覧表に記載された。指定が対象とするのは商品ではなく、麹による酒造りという技そのものである。",zh:"「傳統酒造」，於二〇二四年十二月列入聯合國教科文組織人類非物質文化遺產代表名錄。該指定涵蓋的是技藝本身——以麴釀酒——而非任何產品。"} },
{ r:"amino-carbonyl", jp:"アミノカルボニル反応", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"The Maillard reaction between amino acids and sugars. Very slow at cellar temperature and roughly twice as fast for every ten degrees warmer — which is why storage temperature decides how a sake ages.",ja:"アミノ酸と糖のあいだのメイラード反応。蔵の温度ではきわめて遅く、十度ごとにおよそ倍の速さになる。保存温度が熟成の仕方を決める理由である。",zh:"胺基酸與糖之間的梅納反應。在窖溫下極慢，每升高十度速率約加倍——這正是保存溫度決定一支酒如何熟成的原因。"} },
{ r:"kassei tansan", jp:"活性炭素", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Activated carbon. Strips colour and off-aromas from pressed sake and, if overdone, strips character as well. Muroka on a label means this step was skipped, not that no filtration occurred.",ja:"搾った酒から色と雑味を除く。やり過ぎれば個性も除く。ラベルの「無濾過」は炭濾過を省いた意味であり、濾過を一切していない意味ではない。",zh:"活性碳。從壓榨後的酒中除去色澤與雜味，過度使用則連個性一併除去。酒標上的「無濾過」意指略過此步驟，而非完全未過濾。"} },
{ r:"deferiferikurishin", jp:"デフェリフェリクリシン", cat:{en:"Chemistry",ja:"成分",zh:"成分"},
  d:{en:"A compound produced by the kōji mould that binds iron to form a deep red-brown complex. It is why iron in brewing water must be kept below roughly 0.02 ppm — ten times stricter than drinking water.",ja:"麹菌が生産し、鉄と結合して濃い赤褐色の錯体をつくる化合物。仕込水の鉄をおよそ0.02ppm以下に抑えねばならない理由であり、飲用水の十倍厳しい。",zh:"麴菌所產生、會與鐵結合形成深紅褐色錯合物的化合物。這正是釀造用水的鐵含量必須壓在約 0.02 ppm 以下的原因——比飲用水標準嚴格十倍。"} },
{ r:"nyūsan tenka", jp:"乳酸添加", cat:{en:"Process",ja:"工程",zh:"製程"},
  d:{en:"Adding lactic acid directly to a starter on day one, which is what defines the sokujō method. It replaces an entire ecological succession with a measured addition.",ja:"初日に酒母へ乳酸を直接加えること。速醸酛を定義する操作であり、生態的な遷移の全体を計量された添加に置き換える。",zh:"在第一天直接於酒母中加入乳酸，這正是速釀法的定義性操作。它以一次計量的添加，取代了一整段生態演替。"} },
{ r:"kurazuke", jp:"蔵付き", cat:{en:"Microbes",ja:"微生物",zh:"微生物"},
  d:{en:"The resident microflora of a brewery — in the cedar of the kōji room, the wooden tools, the air. Kyōkai No. 6 and No. 9 were both originally house yeasts, which is evidence that house populations really can differ.",ja:"蔵に住み着いた微生物相。麹室の杉、木の道具、空気のなかにある。きょうかい6号も9号ももとは蔵付きの酵母であり、蔵付きの集団が実際に異なりうる証拠である。",zh:"酒藏常駐的微生物相——存在於麴室的杉木、木製器具與空氣中。協會 6 號與 9 號原本都是藏付酵母，這正是「藏付族群確實可能不同」的證據。"} },
{ r:"tokutei meishōshu hikaku", jp:"三等以上", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The agricultural inspection grade requirement: rice for any special designation must be graded third class or better. One of three conditions applying to all eight designations, alongside a 15% kōji ratio and the alcohol cap.",ja:"特定名称に用いる米は農産物検査で三等以上でなければならない。麹米15%以上、アルコール添加量の上限とともに、八区分すべてに共通する三条件の一つである。",zh:"農產物檢查等級的要求：用於任何特定名稱酒的米，必須評為三等以上。這是適用於全部八個名稱的三項共通條件之一，另兩項是麴米比例 15% 與添加酒精上限。"} },
{ r:"kikizake-choko no aiiro", jp:"蛇の目の藍", cat:{en:"Tasting",ja:"官能",zh:"品評"},
  d:{en:"The two concentric blue rings in the base of an assessment cup. Looking down through the sake at the sharpness of the inner edge measures clarity; the blue-against-white contrast reveals a green or amber cast.",ja:"利き猪口の見込みの藍の二重円。酒越しに内側の縁の鋭さを見て澄み具合を測り、藍と白の対比が緑や琥珀の色調を露わにする。",zh:"品評杯底的兩道同心藍圈。透過酒液俯視內圈邊緣的銳利度可衡量澄清度；藍與白的對比則顯出偏綠或偏琥珀的色調。"} },
{ r:"mizore-zake", jp:"みぞれ酒", cat:{en:"Drinks",ja:"酒類",zh:"酒類"},
  d:{en:"Slush sake: a bottle chilled below freezing point and poured so that it crystallises in the glass. A summer serving style, and a good use for a sake that is not otherwise interesting cold.",ja:"氷点下まで冷やした瓶を注ぎ、杯のなかで結晶させたもの。夏の供し方であり、冷やしても面白みのない酒のよい使い道でもある。",zh:"霙酒：把酒瓶冰到低於冰點，倒出時在杯中結晶。這是夏季的供飲方式，也是冷飲時本來乏味的酒的好去處。"} },
{ r:"kōri-zake", jp:"ロック", cat:{en:"Drinks",ja:"酒類",zh:"酒類"},
  d:{en:"Sake over ice. Works properly only with genshu at 17% or more, where the dilution is part of the design; on a 15% sake it merely waters it down.",ja:"氷で割った酒。17%以上の原酒でのみまともに働く。そこでは加水が設計の一部だからである。15%の酒では、単に薄めるだけである。",zh:"清酒加冰。只有在 17% 以上的原酒上才真正成立，因為稀釋是設計的一部分；用在 15% 的酒上，就只是把它沖淡而已。"} },
{ r:"kanzuke", jp:"燗づけ", cat:{en:"Service",ja:"提供",zh:"供飲"},
  d:{en:"The act of warming sake, and a craft in its own right. A hot-water bath is standard, a tin chirori is the professional's tool, and direct heat or a microwave produces the uneven result most people mistake for warm sake.",ja:"燗をつけること。それ自体が一つの技である。湯煎が標準、錫のちろりが玄人の道具であり、直火や電子レンジは、多くの人が燗と誤解している不均一な結果を生む。",zh:"溫酒這件事本身，也是一門手藝。隔水加熱是標準做法，錫製銚釐是行家的工具；直火或微波則產生那種被多數人誤認為「溫酒」的受熱不均結果。"} },
{ r:"tanrei jukusei", jp:"淡麗熟成", cat:{en:"Category",ja:"分類",zh:"分類"},
  d:{en:"Light aged sake: matured cold, so colour stays pale and aroma deepens quietly. Takes decades to look obviously old, and is the opposite pole from a warm-cellared amber koshu.",ja:"低温で熟成させ、色は淡いまま香りが静かに深まる型。明らかに古く見えるには数十年を要し、温かい蔵で育てた琥珀の古酒とは対極にある。",zh:"淡麗熟成：低溫熟成，色澤保持淺淡而香氣安靜地加深。要看起來明顯有年歲得花數十年，與在溫暖窖中養成的琥珀色古酒恰成兩極。"} },
{ r:"tsūshin hanbai menkyo", jp:"通信販売酒類小売業免許", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The mail-order retail licence. It restricts online sellers to sake from small producers, which is why a large brand is often unavailable online from a specialist and a small one is.",ja:"通信販売の小売免許。取り扱いを小規模の製造者の酒に限るため、大手の銘柄が専門店の通販で扱えず、小さな銘柄が扱えるという事態が生じる。",zh:"郵購零售執照。它把網路賣家可販售的酒限制在小型生產者的產品，因此常出現大品牌在專門店網購買不到、小品牌反而買得到的情形。"} },
{ r:"seishu no teigi", jp:"清酒の定義", cat:{en:"Law",ja:"法令",zh:"法規"},
  d:{en:"The Liquor Tax Act definition: made from rice, kōji and water, filtered, and under 22% alcohol. Everything else in sake law hangs off this sentence.",ja:"酒税法の定義——米、米麹、水を原料として発酵させ、こしたもので、アルコール分22度未満。日本酒の法の他のすべては、この一文に掛かっている。",zh:"酒稅法的定義：以米、米麴與水發酵並經過濾，酒精度未達 22 度。清酒法規中的其他一切，都懸繫於這一句話。"} },
        {r:"koshiki-taoshi",jp:"甑倒し",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"The day the steamer is laid down for the last time in a season — the end of rice cooking, though not yet the end of brewing. Marked with a meal and a headcount.",ja:"その季に甑を最後に倒す日。米を蒸すことの終わりであり、造りの終わりではない。食事と人数の確認をもって印す。",zh:"一季中最後一次把甑放倒的日子——蒸米結束，但釀造尚未結束。以一頓飯與人數清點來標記。"}},
        {r:"kaizō",jp:"皆造",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"The pressing of the last tank; the true end of a brewing season, and the point at which seasonal contracts end.",ja:"最後の槽を搾ること。酒造りの季の真の終わりであり、季節の契約の終わる時である。",zh:"最後一槽的壓榨；一個釀造季真正的終點，也是季節性契約結束的時刻。"}},
        {r:"nomikiri",jp:"呑切り",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"The summer opening of storage tanks for tasting, usually with the head brewer, the owner and often an assessor from the regional tax bureau present. Decides what is blended, released or held.",ja:"夏に貯蔵の槽の呑を開けて利くこと。たいてい杜氏、蔵元、そしてしばしば国税局の鑑定官が立ち会う。何を調合し、出し、留めるかを決める。",zh:"夏季打開貯藏槽出酒栓進行品評，通常由杜氏、藏元，且常有國稅局鑑定官到場。決定哪些調和、出貨或續存。"}},
        {r:"shiki jōzō",jp:"四季醸造",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"Year-round brewing in a refrigerated brewhouse, as against the winter season. Allows permanent staff and continuous release; loses the annual reckoning.",ja:"冬の季に対し、冷やされた蔵で年間を通じて醸すこと。常雇いと絶えざる出荷を許し、年の勘定を失う。",zh:"相對於冬季釀造，在冷藏化的釀造場中全年釀造。可維持長期僱員與持續出貨，但失去年度結算。"}},
        {r:"sōmai",jp:"総米",cat:{en:"Numbers",ja:"数値",zh:"數值"},d:{en:"The total white-rice weight of a single tank, counted after milling. Every other figure in a recipe is a percentage of it.",ja:"精米後に数えた一本の槽の白米の総重量。配合の他のあらゆる数はその百分率である。",zh:"單一槽的白米總重量，於精磨後計算。配方中的其他每一個數字都是它的百分比。"}},
        {r:"kōji-buai",jp:"麹歩合",cat:{en:"Numbers",ja:"数値",zh:"數值"},d:{en:"The share of total rice made into kōji rather than added as plain steamed rice. Legal minimum 15% for special designations; 20–22% typical, higher for kimoto.",ja:"総米のうち、蒸米としてではなく麹とする割合。特定名称の法の下限は十五パーセント、通常は二十から二十二、生酛ではより高い。",zh:"總米中製成麴而非以蒸米加入的比例。特定名稱的法定下限為 15%，通常為 20–22%，生酛更高。"}},
        {r:"kumimizu-buai",jp:"汲水歩合",cat:{en:"Numbers",ja:"数値",zh:"數值"},d:{en:"Brewing water as a percentage of total rice weight, typically 110–140%. Counts only water added to the mash, not the water inside steamed rice.",ja:"総米の重さに対する仕込水の百分率。通常は百十から百四十。醪に加えた水のみを数え、蒸米の内の水は含まない。",zh:"仕込用水占總米重量的百分比，通常為 110–140%。只計加入醪中的水，不含蒸米內部的水分。"}},
        {r:"odori",jp:"踊",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"The pause day between the first and second additions, when nothing is added and the yeast population doubles. Skipping it is the classic way to lose a tank.",ja:"初添と仲添のあいだの、何も加えず酵母の数が倍になる休みの日。これを飛ばすことが槽を失う古典的な道である。",zh:"初添與仲添之間的停歇日，不加任何東西，讓酵母族群倍增。跳過它是損失一整槽的經典途徑。"}},
        {r:"sujiawa",jp:"筋泡",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"Streak foam: the first thin lines of bubbles on a mash a day or two after the last addition.",ja:"留添の一日二日後、醪の面に現れる最初の細い泡の筋。",zh:"筋泡：留添後一兩天，醪面上出現的最初幾道細泡線。"}},
        {r:"takaawa",jp:"高泡",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"High foam: the peak of fermentation, when foam can rise tens of centimetres and climb out of the tank. Requires a collar, and once required a night watch.",ja:"発酵の頂であり、泡が数十センチ立ち上がり槽を溢れうる時。泡笠を要し、かつては夜の見張りを要した。",zh:"高泡：發酵的高峰，泡沫可高出數十公分並爬出酒槽。需要泡笠，過去還需要有人夜間看守。"}},
        {r:"ochiawa · tamaawa",jp:"落泡・玉泡",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"Falling foam and bead foam: the two stages after the peak, as the mash thins and the surface flattens towards <em>ji</em>, bare ground.",ja:"頂の後の二つの段。醪が薄まり、面が平らな地へ向かうにつれて現れる。",zh:"落泡與玉泡：高峰之後的兩個階段，醪逐漸變稀、液面趨於平坦，走向「地」。"}},
        {r:"awanashi kōbo",jp:"泡なし酵母",cat:{en:"Yeast",ja:"酵母",zh:"酵母"},d:{en:"Non-foaming mutants of the Association yeasts, released from the 1960s with an <em>01</em> suffix — No. 601, 701, 901. Allow fuller tanks and no night watch, at the cost of reading a mash by eye.",ja:"一九六〇年代より末尾に〇一を付して出された協会酵母の泡なしの変異株。六〇一号、七〇一号、九〇一号である。槽をより満たしえ夜の見張りを要さぬ代わりに、目で醪を読むことを失う。",zh:"協會酵母的不起泡變異株，自一九六〇年代起以「01」為字尾發布——六〇一號、七〇一號、九〇一號。可讓酒槽裝得更滿、不需夜間看守，代價是失去以肉眼判讀醪的能力。"}},
        {r:"sanmaku kōbo",jp:"産膜酵母",cat:{en:"Faults",ja:"欠点",zh:"缺陷"},d:{en:"Film yeast. Grows as a wrinkled white skin on any sake surface exposed to air, producing a sharp acetaldehyde smell of solvent and glue. The commonest fault in a bottle left open too long.",ja:"空気に触れた酒の面に皺の寄った白い膜として育ち、溶剤と糊のようなアセトアルデヒドの鋭い匂いを生む。長く開けたままの瓶で最もよくある欠点。",zh:"產膜酵母。在任何接觸空氣的酒液表面長成一層皺褶白膜，產生刺鼻的乙醛溶劑與膠水味。是開瓶過久的酒最常見的缺陷。"}},
        {r:"rakusan-kin",jp:"酪酸菌",cat:{en:"Faults",ja:"欠点",zh:"缺陷"},d:{en:"Butyric bacteria. Grow in a stalled or over-warm starter and produce butyric acid — rancid butter and worse. The organism the nitrite step and the lactic acid exist to exclude.",ja:"止まった、あるいは暖かすぎる酒母に育ち、腐れたバターとそれ以上の臭いをもつ酪酸を生む。亜硝酸の段と乳酸が排除するために存在する生き物である。",zh:"酪酸菌。在停滯或過熱的酒母中生長，產生丁酸——酸敗奶油甚至更糟的氣味。亞硝酸這一步與乳酸的存在，正是為了排除這種生物。"}},
        {r:"nikkō-shū",jp:"日光臭",cat:{en:"Faults",ja:"欠点",zh:"缺陷"},d:{en:"Sunstruck smell. Light, especially ultraviolet, breaks down riboflavin and sulphur compounds to give a burnt-rubber or cabbage note. A few hours in a sunlit window is enough.",ja:"光、ことに紫外線がリボフラビンや硫黄の化合物を壊し、焦げたゴムかキャベツの香りを与える。日の差す窓辺の数時間で足りる。",zh:"日光臭。光線、尤其是紫外線，會分解核黃素與含硫化合物，產生燒焦橡膠或甘藍的氣味。在陽光照射的窗邊放幾小時就足夠。"}},
        {r:"kekkyū keisanban",jp:"血球計算板",cat:{en:"Equipment",ja:"設備",zh:"設備"},d:{en:"A ruled counting chamber, invented for blood cells, used to count yeast per millilitre of mash under a microscope. The most informative five minutes of a brewery's day.",ja:"血の細胞を数えるために作られた目盛りのある計算室。顕微鏡下で醪一ミリリットル当たりの酵母を数えるのに用いる。蔵の一日で最も多くを教える五分間。",zh:"帶刻度的計數室，原為計數血球而發明，用於在顯微鏡下計算每毫升醪中的酵母數。是酒藏一天中資訊量最大的五分鐘。"}},
        {r:"tategata seimaiki",jp:"竪型精米機",cat:{en:"Equipment",ja:"設備",zh:"設備"},d:{en:"The vertical friction mill, from the 1930s. Made deep polishing possible and therefore made the ginjō category possible; the limit on speed is heat.",ja:"一九三〇年代からの竪型の摩擦式精米機。深い精米を可能にし、それゆえ吟醸の区分を可能にした。速さの限りは熱である。",zh:"立式摩擦精米機，始於一九三〇年代。它使深度精磨成為可能，因而也使吟釀這個類別成為可能；速度的限制在於熱。"}},
        {r:"henpei seimai",jp:"扁平精米",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"Flat, or shape-preserving, polishing: removing material along the grain's own oval rather than cutting a sphere, so protein and fat go while more starch core stays. A 60% shaped polish can behave like a 50% round one.",ja:"球を切り出すのではなく粒自身の楕円に沿って削る精米。蛋白質と脂質が去り、澱粉の芯がより多く残る。六十パーセントの原形精米は五十パーセントの丸い精米のように振る舞いうる。",zh:"扁平（或原形）精米：順著米粒本身的橢圓形削除，而非削出一個球體，因此蛋白質與脂質被去除，澱粉核心保留更多。60% 的原形精米可以表現得像 50% 的圓形精米。"}},
        {r:"shironuka · akanuka",jp:"白糠・赤糠",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"The bran fractions taken off in milling, collected in order: red bran first, carrying germ and oil; middle fractions to crackers and miso; the last and whitest, near-pure starch, sold as confectionery flour.",ja:"精米で削り取られる糠の画。順に、胚芽と油を負う赤糠、煎餅や味噌へ向かう中糠、そして最後の最も白い、ほぼ純粋な澱粉であり菓子の粉として売られるもの。",zh:"精磨過程中依序削下的米糠餾分：最先是帶胚芽與油脂的赤糠；中段餾分供米果與味噌；最後也最白的一段近乎純澱粉，作為製菓用米粉出售。"}},
        {r:"senryūjū",jp:"千粒重",cat:{en:"Numbers",ja:"数値",zh:"數值"},d:{en:"The weight of a thousand brown-rice grains, around 26–30 g for sake rice against roughly 22 g for table rice. Large grains survive deep polishing better.",ja:"玄米千粒の重さ。酒米で二十六から三十グラム、飯米でおよそ二十二グラム。大きな粒は深い精米によく耐える。",zh:"一千粒糙米的重量，酒米約 26–30 公克，飯米約 22 公克。大粒米更能承受深度精磨。"}},
        {r:"dōware",jp:"胴割れ",cat:{en:"Faults",ja:"欠点",zh:"缺陷"},d:{en:"Internal cracking in a grain dried too fast after harvest — invisible until it shatters in the mill or takes water in seconds instead of a minute.",ja:"収穫後に速く乾かしすぎた粒に生じる内の割れ。精米機で砕けるか、一分でなく数秒で水を吸うまで見えない。",zh:"收穫後乾燥過快在米粒內部產生的裂痕——在它於精米機中碎裂、或在數秒而非一分鐘內吸飽水之前，完全看不出來。"}},
        {r:"kensa tōkyū",jp:"検査等級",cat:{en:"Law",ja:"法令",zh:"法規"},d:{en:"The agricultural inspection grade — 特上, 特等, 一等, 二等, 三等, 規格外 — awarded on appearance, moisture and broken grains. Only rice at grade three or better may be used for the eight special designations.",ja:"見え、水分、砕粒により与えられる農産物検査の等級。特上・特等・一等・二等・三等・規格外。三等以上の米のみが八つの特定名称に用いうる。",zh:"農產物檢查等級——特上、特等、一等、二等、三等、規格外——依外觀、水分與碎粒判定。唯有三等以上的米，才可用於八種特定名稱。"}},
        {r:"keiyaku saibai",jp:"契約栽培",cat:{en:"Trade",ja:"産業",zh:"產業"},d:{en:"Contract growing: a brewery contracts named fields and a named grower for a fixed tonnage of a named variety, usually with agreed fertiliser limits. Solves the farmer's market risk and the brewery's quality risk in one document.",ja:"蔵が名のある田と生産者に、名のある品種を定めた重さで契約すること。たいてい肥の取り決めを伴う。農家の市場の危うさと蔵の品質の危うさを一つの書面で解く。",zh:"契作：酒藏與具名田區、具名生產者就指定品種、指定噸數簽約，通常附帶施肥限制的約定。以一份文件同時解決農民的市場風險與酒藏的品質風險。"}},
        {r:"tane-kōji-ya · moyashi-ya",jp:"種麹屋・もやし屋",cat:{en:"Kōji",ja:"麹",zh:"麴"},d:{en:"The seed-mould houses that supply spores to almost every brewery, miso maker and soy sauce works in Japan. Around seven or ten remain; some names appear in Edo-period manuscripts.",ja:"日本のほとんどあらゆる蔵、味噌屋、醤油屋に胞子を供する種麹の商家。七軒か十軒ほどが残り、いくつかの名は江戸の写本に現れる。",zh:"供應孢子給日本幾乎每一家酒藏、味噌廠與醬油廠的種麴商行。如今僅存七到十家，有些名號可在江戶時期的抄本中找到。"}},
        {r:"mokkai",jp:"木灰",cat:{en:"Kōji",ja:"麹",zh:"麴"},d:{en:"Wood ash, traditionally mixed into rice when culturing seed mould. Raises pH to exclude competitors, supplies potassium for heavy sporulation, and holds grains apart for air — three functions from one cheap material.",ja:"種麹を培うとき伝統的に米に混ぜる灰。pHを上げて競う者を排し、多くの胞子を結ぶためのカリウムを供し、粒を離して空気を通す。一つの安い材から三つの働き。",zh:"木灰，傳統上在培養種麴時拌入米中。提高 pH 以排除競爭者、供應大量結孢所需的鉀，並把米粒撐開以通氣——一種廉價材料的三種功能。"}},
        {r:"kokuji",jp:"国字",cat:{en:"Culture",ja:"文化",zh:"文化"},d:{en:"A character invented in Japan rather than inherited from China. Two belong to brewing: 酛, a contraction of 酒 and 元 for the starter, and 糀, rice plus flower, for kōji grown on rice.",ja:"中国から受け継いだのではなく日本で作られた字。酒造りに属するのは二つ。酒母を指す、酒と元を約めた酛。米の上に育つ麹を指す、米に花の糀。",zh:"在日本創造、而非承襲自中國的漢字。屬於釀造的有兩個：「酛」，由「酒」與「元」縮合而成，指酒母；「糀」，米加花，指培養在米上的麴。"}},
        {r:"rendaku",jp:"連濁",cat:{en:"Culture",ja:"文化",zh:"文化"},d:{en:"The voicing of a native Japanese word's first consonant when it becomes the second half of a compound: <em>sake</em> becomes <em>zake</em> in taruzake, hiyazake, amazake, jizake. Chinese-reading compounds do not do it — 日本酒 stays nihonshu.",ja:"和語が複合の後半となるとき最初の子音が濁ること。樽酒、冷や酒、甘酒、地酒においてさけがざけとなる。漢語の読みの複合は濁らず、日本酒は日本酒のままである。",zh:"當一個和語詞成為複合詞的後半時，其首音濁化：taruzake、hiyazake、amazake、jizake 中的 sake 變成 zake。以漢音構成的複合詞不會如此——日本酒始終是 nihonshu。"}},
        {r:"kenpai",jp:"献杯",cat:{en:"Culture",ja:"文化",zh:"文化"},d:{en:"The word used in place of <em>kanpai</em> at a funeral meal or memorial. Cups are raised but not clinked, the voice is quiet, and there is no applause.",ja:"葬いの席や法要において乾杯に代えて用いる語。杯は掲げるが打ち合わせず、声は静かで、拍手はない。",zh:"在喪禮餐席或法事上取代「乾杯」的用語。舉杯但不碰杯，聲音低沉，也沒有掌聲。"}},
        {r:"dokushaku · banshaku",jp:"独酌・晩酌",cat:{en:"Culture",ja:"文化",zh:"文化"},d:{en:"Drinking alone, and the evening drink at home. Neither carries the alarm the English equivalents do; <em>dokushaku</em> descends from a Tang poem in which the drinker's company is the moon.",ja:"独りで飲むこと、そして家での宵の一杯。いずれも英語の言い回しの負う警戒を負わない。独酌は、飲み手の伴が月である唐詩に遡る。",zh:"獨自飲酒，以及在家的晚間小酌。兩者都不帶英語同義說法所背負的警戒意味；「獨酌」可上溯至一首以月為飲者同伴的唐詩。"}},
        {r:"ikkon",jp:"一献",cat:{en:"Culture",ja:"文化",zh:"文化"},d:{en:"A single formally offered cup, and by extension an invitation to drink — the written register rather than the spoken one.",ja:"改まって差し出される一つの杯。転じて飲みへの誘い。話し言葉ではなく書き言葉の調子である。",zh:"正式奉上的一杯，引申為邀人共飲——屬於書面語體，而非口語。"}},
        {r:"kantō",jp:"冠頭",cat:{en:"Vessels",ja:"酒器",zh:"酒器"},d:{en:"The decorative foil or paper hood over the cap of a gift bottle. Pure ceremony, and the reason a formal bottle looks formal.",ja:"贈答の瓶の栓に被せる箔や紙の飾り。純粋な儀礼であり、改まった瓶が改まって見える理由である。",zh:"套在禮品酒瓶瓶蓋上的箔紙或紙製裝飾罩。純屬儀式性質，也是正式酒瓶看起來正式的原因。"}},
        {r:"shitsugi",jp:"仕次ぎ",cat:{en:"Drinks",ja:"酒類",zh:"酒類"},d:{en:"The topping-up of an awamori jar from a younger jar as it is drawn off — a running blend across decades that is how <em>kūsu</em> is built. Sake has no equivalent institution.",ja:"泡盛の甕を汲み出すたびに若い甕から注ぎ足すこと。古酒を築く、数十年にわたる続く混和である。清酒にこれに当たる制度はない。",zh:"每次自泡盛的酒甕取用後，再以較年輕的甕補注——一種跨越數十年的持續調和，古酒即由此建成。清酒沒有對應的制度。"}},
        {r:"nakaboshi",jp:"中干し",cat:{en:"Rice",ja:"米",zh:"米"},d:{en:"Mid-season drainage of a paddy. Extending it by about a week cuts methane emissions by roughly thirty per cent and has been a national carbon-credit methodology since March 2023.",ja:"水田の中期の落水。およそ一週間延ばすと沼気の排出をおよそ三割減じ、令和五年（2023）三月より国の炭素の証書の方法論となっている。",zh:"稻田的中期排水。延長約一週可減少約三成的甲烷排放，並自二〇二三年三月起成為國家碳權方法論。"}},
        {r:"kōchi hōshiki",jp:"高知方式",cat:{en:"Place",ja:"産地",zh:"產地"},d:{en:"The unusually collaborative arrangement by which Kōchi's breweries share yeast development, analysis and training with the prefectural laboratory and with each other.",ja:"高知の蔵が県の研究所と、また互いと、酵母の開発、分析、教育を分かち合う異例に協同的な仕組み。",zh:"高知的酒藏與縣立研究所、並彼此之間共享酵母開發、分析與培訓的異常協作安排。"}},
        {r:"CEL-24",jp:"CEL-24",cat:{en:"Yeast",ja:"酵母",zh:"酵母"},d:{en:"A Kōchi prefectural yeast released in 1993. Heavy in ethyl caproate and malic acid, ferments weakly, and gives a sweet-sour sake at 13–14% — the opposite of the region's dry tradition.",ja:"平成五年（1993）に高知県が世に出した酵母。カプロン酸エチルと林檎酸に富み、発酵が弱く、十三から十四度の甘酸っぱい酒を与える。地方の辛口の伝統の対極である。",zh:"高知縣於一九九三年推出的酵母。富含己酸乙酯與蘋果酸，發酵力弱，釀出十三至十四度的甜酸型酒——與該地辛口傳統恰恰相反。"}},
        {r:"nansui jōzō-hō",jp:"軟水醸造法",cat:{en:"Process",ja:"工程",zh:"製程"},d:{en:"The soft-water brewing method worked out by Miura Senzaburō in 1897 and published in 1898: lower temperature, longer stages, drier and stronger kōji, patience. The technical basis of almost all brewing in warm, soft-water regions, in Japan and abroad.",ja:"明治三十年（1897）に三浦仙三郎が見出し翌年に世に問うた法。低い温度、長い段階、乾いて強い麹、そして忍耐。日本の内外を問わず、暖かく軟水の地方のほとんどあらゆる酒造りの技術の基である。",zh:"三浦仙三郎於一八九七年摸索出、一八九八年公開發表的軟水釀造法：更低的溫度、更長的階段、更乾更強的麴，以及耐心。它是日本國內外幾乎所有溫暖軟水地區釀造的技術基礎。"}},
        {r:"yashiori no sake",jp:"八塩折之酒",cat:{en:"History",ja:"歴史",zh:"歷史"},d:{en:"The sake brewed and rebrewed eight times with which Susanoo intoxicates the eight-headed serpent in the Yamata no Orochi myth — the earliest description of a strong sake in Japanese writing.",ja:"八岐大蛇の神話において須佐之男が八つ頭の蛇を酔わせる、八度醸し重ねた酒。日本の書きものにおける強い酒の最も早い記述である。",zh:"在八岐大蛇神話中，須佐之男用來灌醉八頭之蛇、反覆釀造八次的酒——日本文獻中對烈性之酒最早的描述。"}},
        {r:"gōriki",jp:"強力",cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},d:{en:"Tottori's heirloom sake rice, bred in the 1920s, abandoned by about 1950 and reconstructed from a handful of seeds in the late 1980s. Tall, hard to dissolve, gives a dense slow-opening sake.",ja:"鳥取の在来の酒米。大正の末に育てられ、昭和二十五年ごろ捨てられ、昭和の終わりに一握りの種から再構された。丈高く溶けにくく、密で開きの遅い酒を与える。",zh:"鳥取的在來酒米，育成於一九二〇年代，約一九五〇年遭放棄，並於一九八〇年代末由一小把種子復原。高稈、難溶，釀出密實而開展緩慢的酒。"}},
        {r:"omachisuto",jp:"オマチスト",cat:{en:"Culture",ja:"文化",zh:"文化"},d:{en:"A drinker who seeks out sake made from Omachi rice. The only pre-modern sake rice with a following organised around the variety rather than a brand.",ja:"雄町の酒を求めて飲む者。銘柄ではなく品種を軸に組まれた信徒を持つ、唯一の近代以前の酒米である。",zh:"專門尋找以雄町米釀造之酒的飲者。雄町是唯一擁有「以品種而非品牌為核心」之追隨者的前近代酒米。"}},
        {r:"Saito no Shizuku",jp:"西都の雫",cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},d:{en:"Yamaguchi's prefectural sake rice, bred from Kokuryōmiyako, released in 2002 and named in 2004 for brewers who could not obtain enough Hyōgo Yamada Nishiki.",ja:"穀良都から育てられた山口の県の酒米。平成十四年（2002）に世に出て平成十六年に名を得た。兵庫の山田錦を十分に得られぬ造り手のための米である。",zh:"山口的縣產酒米，由穀良都選育而來，二〇〇二年問世、二〇〇四年命名，供那些拿不到足夠兵庫山田錦的釀造者使用。"}},
        {r:"Saga no Hana",jp:"さがの華",cat:{en:"Rice variety",ja:"酒米品種",zh:"酒米品種"},d:{en:"Saga's prefectural sake rice, dissolving readily in the mash and part of why the region's style runs sweet.",ja:"佐賀の県の酒米。醪でよく溶け、この地方の型が甘く走る理由の一部である。",zh:"佐賀的縣產酒米，在醪中容易溶解，也是該地風格偏甜的原因之一。"}},
        {r:"Kumamoto kōbo",jp:"熊本酵母",cat:{en:"Yeast",ja:"酵母",zh:"酵母"},d:{en:"The strain isolated at the Kumamoto brewers' research institute in 1952 and distributed nationally from 1968 as Association No. 9. Mild acid, clean floral aroma, reliable vigour; the backbone of competition brewing and of the ginjō boom.",ja:"昭和二十七年（1952）に熊本県酒造研究所で分離され、昭和四十三年（1968）よりきょうかい9号として全国に頒たれた株。穏やかな酸、清らかな花の香り、頼りうる力。鑑評会の酒造りと吟醸の高まりの背骨である。",zh:"一九五二年於熊本縣酒造研究所分離、一九六八年起以協會九號之名向全國頒布的菌株。酸度溫和、香氣乾淨帶花香、發酵力可靠；是鑑評會釀造與吟釀熱潮的骨幹。"}},
        {r:"Nojiro-shiki tenmado",jp:"野白式天窓",cat:{en:"Equipment",ja:"設備",zh:"設備"},d:{en:"A kōji-room ventilation design by Nojiro Kin'ichi, first chief engineer at the Kumamoto institute from 1919, allowing far more precise control of humidity and temperature than a sealed muro.",ja:"大正八年（1919）より熊本県酒造研究所の初代技師長であった野白金一による麹室の換気の設計。閉ざされた室よりはるかに精密な湿度と温度の制御を許した。",zh:"由一九一九年起擔任熊本研究所首任技師長的野白金一所設計的麴室通風構造，能比密閉麴室精確得多地控制濕度與溫度。"}},
        {r:"miki no tsukasa",jp:"造酒司",cat:{en:"History",ja:"歴史",zh:"歷史"},d:{en:"The eighth-century imperial bureau whose entire function was brewing for the court and for state ritual. Its products and recipes are set out in the tenth-century <em>Engishiki</em>.",ja:"朝廷と国の祭のために醸すことのみを務めとした八世紀の役所。その産と処方は十世紀の『延喜式』に示されている。",zh:"八世紀的宮廷官署，其全部職能就是為朝廷與國家祭祀釀酒。其產品與配方載於十世紀的《延喜式》。"}},
        {r:"Amano-zake",jp:"天野酒",cat:{en:"History",ja:"歴史",zh:"歷史"},d:{en:"The temple sake of Kongōji in Kawachi, famous enough in the sixteenth century to be sent as a gift to warlords and named in their letters. One of the great sōbōshu.",ja:"河内の金剛寺の寺の酒。十六世紀、武将への贈り物として送られ書状に名を記されるほど名高かった。偉大な僧坊酒の一つである。",zh:"河內金剛寺的寺院之酒，在十六世紀名聲之盛，足以作為禮物送給武將並被寫進他們的書信。是偉大的僧坊酒之一。"}},
        {r:"gō · shō · to · koku",jp:"合・升・斗・石",cat:{en:"Numbers",ja:"数値",zh:"數值"},d:{en:"The shakkanhō volume ladder: 1 gō = 180 mL, 10 gō = 1 shō = 1.8039 L, 10 shō = 1 to = 18 L, 10 to = 1 koku = 180.39 L. Retired as legal measures in 1959 and still governing every sake bottle on a shelf. Note that the same characters in Chinese use different metric values.",ja:"尺貫法の容量の階梯。一合は百八十ミリリットル、十合は一升で一・八〇三九リットル、十升は一斗で十八リットル、十斗は一石で百八十・三九リットル。昭和三十四年（1959）に法定の計量としては退き、今なお棚のあらゆる瓶を治めている。同じ字が中国語では異なるメートル法の値を持つことに注意。",zh:"尺貫法的容量階梯：一合＝180 毫升，十合＝一升＝1.8039 公升，十升＝一斗＝18 公升，十斗＝一石＝180.39 公升。一九五九年退出法定計量，卻至今仍統治著貨架上的每一個酒瓶。請注意，同樣的字在中文裡對應不同的公制數值。"}},
        {r:"kappu-zake",jp:"カップ酒",cat:{en:"Vessels",ja:"酒器",zh:"酒器"},d:{en:"Single-serve sake in a glass or plastic cup with a peel-off lid, drunk from the container. Conceived from 1960 and launched in 1964 to remove the vessel, the warming and the setting as barriers; now quietly reclaimed by small breweries.",ja:"剥がす蓋のついた硝子か樹脂の杯に入った一杯分の酒。器と燗と場という障壁を取り除くため、昭和三十五年（1960）に構想され昭和三十九年（1964）に世に出た。今は小さな蔵が静かに取り戻しつつある。",zh:"裝在附撕開式封蓋的玻璃或塑膠杯中的單杯清酒，直接就著容器喝。自一九六〇年構思、一九六四年推出，目的是移除器皿、溫酒與場合這三道門檻；如今正被小型酒藏靜靜地收復。"}},
        {r:"ōkan",jp:"王冠",cat:{en:"Vessels",ja:"酒器",zh:"酒器"},d:{en:"The crown cap, standard on the 1.8 L bottle and on sparkling sake. Sake has no cork tradition; the 720 mL bottle usually takes an aluminium screw cap instead.",ja:"一升瓶と発泡清酒に標準の栓。日本酒に栓の伝統はなく、四合瓶はたいていアルミの螺子の栓を受ける。",zh:"皇冠瓶蓋，是一升瓶與氣泡清酒的標準封口。清酒沒有軟木塞的傳統；四合瓶通常改用鋁製螺旋蓋。"}}

      ] },

    { t:"related", items:[
      { href:"kanji.html", why:{ en:"The characters behind the entries.", ja:"項目の背後にある文字。", zh:"這些詞條背後的漢字。" } },
      { href:"tables.html", why:{ en:"The same reference material in table form.", ja:"同じ参照の材料を、表の形で。", zh:"同樣的參考材料，以表格形式呈現。" } },
      { href:"words.html", why:{ en:"The words that are not technical terms.", ja:"術語ではない語。", zh:"那些不是術語的詞。" } },
      { href:"start.html", why:{ en:"Where to begin, if the list is too much at once.", ja:"一度に多すぎるなら、どこから始めるか。", zh:"如果一次太多，該從哪裡開始。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- figures */
SAKE.pages["figures"] = {
  kicker: { en: "Reference · 09", ja: "資料 · 09", zh: "資料 · 09" },
  title:  { en: "Every Diagram", ja: "図版一覧", zh: "圖表總覽" },
  jp: "図版一覧",
  lede: {
    en: "Ninety figures, listed by the page they live on. Every one is drawn rather than photographed, every one is built from the same set of numbers as the text beside it, and several of them exist because the fact they carry could not be stated in a sentence without losing its shape. If you learn better from a picture than from a paragraph, this is the fastest way through the site.",
    ja: "九十の図版を、それが載る頁ごとに並べた。そのいずれもが写されたものではなく描かれたものであり、いずれも傍らの本文と同じ数の組から組み立てられている。そしてそのいくつかは、それが運ぶ事実が、形を失わずに一文へ収まりえなかったがゆえに在る。段落よりも絵からよく学ぶのであれば、これがこのサイトを抜ける最も速い道である。",
    zh: "九十張圖表，依它們所在的頁面排列。每一張都是畫出來的、而不是拍出來的；每一張都與旁邊的文字取自同一組數字；而其中好幾張之所以存在，是因為它們所承載的事實無法在不失去形狀的情況下寫成一句話。如果你從圖裡學得比從段落裡快，這就是穿過本站最快的一條路。"
  },
  body: [
    { t:"figindex" },

    { t:"note", title:{ en:"How they are made", ja:"どう作られているか", zh:"它們是怎麼做出來的" }, text:{
      en:"Each figure is a small function that is handed the current language and returns an SVG, which means the same diagram is redrawn in Japanese or Chinese rather than being a picture with English burnt into it. It also means every figure is text: it can be searched by a browser, read by a screen reader, scaled without blurring and printed at any size. Nothing on this site is an image file.",
      ja:"それぞれの図版は、現在の言語を渡されてSVGを返す小さな関数である。すなわち同じ図が、英語を焼き付けた絵としてではなく、日本語や中国語で描き直される。それはまた、あらゆる図版が文であることを意味する。browserで検索され、読み上げ機に読まれ、ぼやけずに拡大され、いかなる大きさでも刷られうる。このサイトに画像ファイルは一つもない。",
      zh:"每一張圖表都是一個小函式：它接收目前的語言，回傳一段 SVG。也就是說，同一張圖會以日文或中文重新繪製，而不是一張把英文燒死在裡面的圖片。這也意味著每一張圖表都是文字：可以被瀏覽器搜尋、被螢幕閱讀器讀出、放大而不模糊、以任何尺寸列印。本站沒有任何一個圖片檔。" } },

    { t:"related", items:[
      { href:"index.html", why:{ en:"The overview, if you would rather start from the text.", ja:"本文から始めたいのであれば、概観へ。", zh:"如果你比較想從文字開始，請看總覽。" } },
      { href:"tables.html", why:{ en:"The same instinct applied to numbers rather than pictures.", ja:"同じ性向を、絵ではなく数に当てたもの。", zh:"同樣的傾向，用在數字而不是圖上。" } },
      { href:"glossary.html", why:{ en:"And to words.", ja:"そして語に当てたもの。", zh:"以及用在詞上。" } },
      { href:"sources.html", why:{ en:"Where the numbers in them come from.", ja:"そこにある数の出どころ。", zh:"這些圖裡的數字從哪裡來。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- sources */
SAKE.pages["sources"] = {
  kicker: { en: "Reference · 10", ja: "資料 · 10", zh: "資料 · 10" },
  title:  { en: "Sources", ja: "出典", zh: "資料來源" },
  jp: "出典と読書案内",
  lede: {
    en: "This reference is compiled from public documents. Where a figure is given, it comes from one of the primary sources below; where a judgement is offered, it is marked as one. Statistics move — export figures, brewery counts and GI registrations all change annually — so the dates matter, and the official sources are listed first so they can be checked directly.",
    ja: "本資料は公開資料に基づいて編まれている。数値を挙げた箇所は、以下の一次資料のいずれかに拠る。判断を述べた箇所は、そうと分かる形で示した。統計は動く——輸出額、蔵の数、GIの登録は毎年変わる——ゆえに日付が重要であり、直接確認できるよう公的資料を先に挙げる。",
    zh: "本資料依據公開文件編纂。凡列出數值者，皆出自以下一手來源；凡提出判斷者，皆已標明其為判斷。統計會變動——出口數字、酒藏數量與 GI 註冊每年皆有更新——因此日期至關重要，故將官方來源列於最前，以便直接查證。"
  },
  body: [
    { t:"section", id:"official",
      title:{ en:"Official and primary", ja:"公的・一次資料", zh:"官方與一手資料" }, jp:"一次資料",
      body:[
        { t:"defs", items:[
          { term:{en:"National Tax Agency of Japan",ja:"国税庁",zh:"日本國稅廳"}, jp:"国税庁 · nta.go.jp",
            def:{en:"The regulator. Publishes the Liquor Tax Act, the <em>Labelling Standard for the Manufacturing Method and Quality of Seishu</em> (1989), the <em>Labelling Standard on Geographical Indications for Alcoholic Beverages</em> (2015), the individual GI production standards, the annual survey of the seishu manufacturing industry, and the liquor tax rate tables. Source for every legal definition, every designation requirement, the GI list and dates, and the tax figures on this site.",
                 ja:"規制当局。酒税法、「清酒の製法品質表示基準」（平成元年）、「酒類の地理的表示に関する表示基準」（平成二十七年）、各GIの生産基準、清酒製造業の概況、酒税率一覧を公表する。本資料の法的定義、特定名称の要件、GIの一覧と日付、税率はすべてここに拠る。",
                 zh:"主管機關。公布酒稅法、《清酒製法品質標示基準》（1989）、《酒類地理標示相關標示基準》（2015）、各 GI 生產基準、清酒製造業概況，以及酒稅率表。本站所有法律定義、特定名稱要件、GI 清單與日期，以及稅率數字，皆據此。"} },
          { term:{en:"National Research Institute of Brewing",ja:"酒類総合研究所",zh:"酒類綜合研究所"}, jp:"NRIB · 醸造試験所 · nrib.go.jp",
            def:{en:"Founded 1904 as the government brewing laboratory; the institution behind yamahai (1909), sokujō (1910) and the national competition (1911). Publishes the standard sensory-evaluation vocabulary and reference standards, and technical guides to sake production. Source for the tasting vocabulary, the component averages and the process detail here.",
                 ja:"一九〇四年に醸造試験所として設立された国の研究機関。山廃（一九〇九年）、速醸（一九一〇年）、全国新酒鑑評会（一九一一年）はいずれもここに由来する。官能評価用語と標準見本、製造に関する技術資料を公表している。本資料の官能用語、成分平均値、工程の詳細はここに拠る。",
                 zh:"1904 年成立的國家釀造研究機構；山廢（1909）、速釀（1910）與全國新酒鑑評會（1911）皆源自於此。公布標準感官評價詞彙與參照標準，以及釀造技術資料。本站的品評詞彙、成分平均值與製程細節，皆據此。"} },
          { term:{en:"Japan Sake and Shochu Makers Association",ja:"日本酒造組合中央会",zh:"日本酒造組合中央會"}, jp:"JSS · japansake.or.jp",
            def:{en:"The industry body. Publishes production and shipment statistics, export data by market, the GI framework in plain language, and the Sake Day observance. Source for the export and volume figures here.",
                 ja:"業界団体。製造・出荷統計、市場別の輸出データ、GI制度の平易な解説、日本酒の日の制定などを担う。本資料の輸出額と数量はここに拠る。",
                 zh:"產業團體。發布生產與出貨統計、依市場別的出口數據、GI 制度的通俗說明，以及「日本酒之日」的設立。本站的出口與數量數字據此。"} },
          { term:{en:"UNESCO Intangible Cultural Heritage",ja:"ユネスコ無形文化遺産",zh:"聯合國教科文組織非物質文化遺產"}, jp:"ich.unesco.org",
            def:{en:"The 2024 inscription file for “Traditional knowledge and skills of sake-making with kōji mould in Japan”, element 01977, inscribed on the Representative List at the nineteenth session of the Committee on 4 December 2024. Source for the wording quoted in <a href=\"history.html\">History</a>.",
                 ja:"「日本の伝統的酒造り」（要素番号01977）の登録関連文書。第十九回政府間委員会において、二〇二四年十二月四日に代表一覧表へ記載された。<a href=\"history.html\">歴史</a>で引用した文言はここに拠る。",
                 zh:"「日本傳統麴菌釀酒的知識與技藝」（項目編號 01977）的列名文件，於 2024 年 12 月 4 日第十九屆政府間委員會會議列入代表名錄。<a href=\"history.html\">歷史</a>頁所引文字據此。"} },
          { term:{en:"Ministry of Agriculture, Forestry and Fisheries",ja:"農林水産省",zh:"農林水產省"}, jp:"MAFF · maff.go.jp",
            def:{en:"Publishes the annual survey of sake rice demand and production by variety and prefecture, and the Agricultural Products Inspection Act grading system referenced by the designation standard.",
                 ja:"酒造好適米の需要量・生産量を品種別・県別に調査した資料、および特定名称の基準が参照する農産物検査法の等級制度を所管する。",
                 zh:"發布依品種與縣別統計的酒米需求與產量年度調查，並主管特定名稱基準所援引的農產物檢查法等級制度。"} }
        ] }
      ]
    },

    { t:"section", id:"historical",
      title:{ en:"Historical documents", ja:"史料", zh:"史料" }, jp:"史料",
      body:[
        { t:"table",
          cols:[{en:"Document",ja:"文献",zh:"文獻"},{en:"Date",ja:"年代",zh:"年代"},{en:"What it establishes",ja:"確定する事柄",zh:"所確立之事"}],
          numCols:[1],
          rows:[
            [{en:"Ōsumi no Kuni Fudoki",ja:"大隅国風土記",zh:"大隅國風土記"},"c. 713",
             {en:"The earliest surviving description of a Japanese brewing method — communal chewing of rice, ambient fermentation.",ja:"日本の醸造法に関する現存最古の記述。共同での咀嚼と、常在菌による発酵。",zh:"現存最早關於日本釀造方法的記述——共同咀嚼米粒，環境發酵。"}],
            [{en:"Harima no Kuni Fudoki",ja:"播磨国風土記",zh:"播磨國風土記"},"c. 715",
             {en:"The first record of brewing from mould-grown rice — the documentary birth of kōji brewing in Japan.",ja:"カビの生えた米から酒を醸した最初の記録。日本における麹醸造の文献上の誕生。",zh:"以生黴之米釀酒的最早記載——日本麴菌釀造在文獻上的誕生。"}],
            [{en:"Kojiki · Nihon Shoki",ja:"古事記・日本書紀",zh:"古事記・日本書紀"},"712 · 720",
             {en:"Sake in mythology: Susanoo, the eight-headed serpent, and the eight vats of yashiori no sake.",ja:"神話のなかの酒。須佐之男命、八岐大蛇、八塩折之酒の八つの槽。",zh:"神話中的酒：須佐之男、八岐大蛇，以及八槽八鹽折之酒。"}],
            [{en:"Engishiki",ja:"延喜式",zh:"延喜式"},"927",
             {en:"The most important technical document of the ancient period. Specifies rice, kōji and water quantities for a dozen named court sakes, precisely enough to reconstruct.",ja:"古代における最重要の技術文献。十数種の宮廷の酒について、米・麹・水の分量を再現可能なほど精確に定める。",zh:"古代最重要的技術文獻，為十餘種宮廷用酒規定米、麴、水的用量，精確到足以復原。"}],
            [{en:"Tamon-in Nikki",ja:"多聞院日記",zh:"多聞院日記"},"1478–1618",
             {en:"A 140-year daily record kept by monks of Kōfukuji in Nara. Documents morohaku, three-stage mash addition, and — in the 1560s — the heating of finished sake, roughly three centuries before Pasteur.",ja:"奈良・興福寺の僧が百四十年にわたり記した日誌。諸白、三段仕込み、そして一五六〇年代には火入れを記す。パスツールに三世紀ほど先行する。",zh:"奈良興福寺僧人歷時 140 年的日誌。記載諸白、三段仕込，以及 1560 年代成酒的加熱處理——比巴斯德早約三個世紀。"}],
            [{en:"Man'yōshū",ja:"万葉集",zh:"萬葉集"},"c. 759",
             {en:"Ōtomo no Tabito's thirteen poems in praise of sake, quoted in <a href=\"culture.html\">Culture &amp; Ritual</a>.",ja:"大伴旅人「酒を讃むる歌十三首」。<a href=\"culture.html\">文化と儀礼</a>で引用した。",zh:"大伴旅人〈讚酒歌十三首〉，於<a href=\"culture.html\">文化與儀禮</a>頁引用。"}]
          ] }
      ]
    },

    { t:"section", id:"secondary",
      title:{ en:"Where to read further", ja:"さらに読むために", zh:"延伸閱讀" }, jp:"読書案内",
      body:[
        { t:"defs", items:[
          { term:{en:"For the production detail",ja:"製造の詳細について",zh:"關於製程細節"},
            def:{en:"The NRIB's own technical publications are the most reliable, and several are available in English. Beyond them, John Gauntner's writing has been the standard English-language reference for three decades, and the WSET Level 3 Award in Sake study materials are the most systematically organised treatment of production and trade currently available.",
                 ja:"酒類総合研究所の技術資料が最も信頼できる。英語のものも複数ある。それに次いで、ジョン・ゴントナーの著作が三十年にわたり英語圏の標準的な参照であり、WSET Level 3 Award in Sake の教材は、製造と流通について現在最も体系的に整理された内容である。",
                 zh:"酒類綜合研究所自身的技術出版品最為可靠，其中數種有英文版。此外，John Gauntner 的著作三十年來是英語世界的標準參考；WSET Level 3 Award in Sake 的教材，則是目前對生產與貿易最有系統的整理。"} },
          { term:{en:"For the microbiology",ja:"微生物学について",zh:"關於微生物學"},
            def:{en:"The peer-reviewed literature on sake yeast lineage and on <em>Aspergillus oryzae</em> genomics is substantial and mostly open. The 2019 review of sake yeast history, lineage and phenotypic differentiation in <em>Bioscience, Biotechnology, and Biochemistry</em> is a good entry point.",
                 ja:"清酒酵母の系譜とアスペルギルス・オリゼーのゲノムに関する査読論文は豊富で、多くは公開されている。二〇一九年に <em>Bioscience, Biotechnology, and Biochemistry</em> に掲載された清酒酵母の歴史・系統・表現型分化の総説が良い入口である。",
                 zh:"關於清酒酵母譜系與米麴菌基因體的同儕審查文獻相當豐富，多數公開。2019 年刊於 <em>Bioscience, Biotechnology, and Biochemistry</em> 的清酒酵母歷史、譜系與表型分化綜述，是良好的入門。"} },
          { term:{en:"For the regions",ja:"産地について",zh:"關於產區"},
            def:{en:"Each prefecture's sake brewers' association publishes its own material, and the GI control bodies publish their production standards in full. These are the only sources that state what a district actually requires rather than what it is said to be like.",
                 ja:"各県の酒造組合が独自の資料を出しており、GIの管理機関は生産基準の全文を公開している。ある産地が「どのようだと言われているか」ではなく「実際に何を要求しているか」を述べているのは、これらだけである。",
                 zh:"各縣酒造組合皆發行自有資料，GI 管理機關亦公開完整生產基準。唯有這些來源說明一個產區「實際要求什麼」，而非「據說是什麼樣子」。"} },
          { term:{en:"For the numbers",ja:"数値について",zh:"關於數字"},
            def:{en:"Go to the National Tax Agency's own statistics rather than to press summaries. Export figures in particular are widely re-reported with the year, the metric or the currency changed, and the discrepancies are large.",
                 ja:"報道の要約ではなく国税庁の統計そのものに当たること。とりわけ輸出の数値は、年・指標・通貨を取り違えたまま広く再引用されており、その食い違いは小さくない。",
                 zh:"應查閱國稅廳的原始統計，而非新聞摘要。出口數字尤其常被以錯誤的年份、指標或幣別廣泛轉載，落差不小。"} }
        ] }
      ]
    },

    { t:"section", id:"caveats",
      title:{ en:"Caveats", ja:"留保", zh:"保留說明" }, jp:"留保",
      body:[
        { t:"ul", items:[
          { en:"<strong>Figures are as at the most recent published data.</strong> Export values are calendar-year 2025; production and brewery counts are from recent brewing-year surveys and are rounded; the GI list is as at the National Tax Agency's March 2026 publication. All of these move.",
            ja:"<strong>数値は公表された最新のものに基づく。</strong>輸出額は二〇二五暦年、製造量と蔵数は近年の酒造年度調査に基づく概数、GIの一覧は国税庁の二〇二六年三月時点の公表による。いずれも変動する。",
            zh:"<strong>數字依最新公布資料。</strong>出口額為 2025 曆年；產量與酒藏數取自近年釀造年度調查並已四捨五入；GI 清單依國稅廳 2026 年 3 月的公布。以上皆會變動。" },
          { en:"<strong>Brand names are examples, not rankings.</strong> The breweries named throughout are chosen to illustrate a technique, a region or an argument. Their absence from a list means nothing.",
            ja:"<strong>銘柄は例示であって順位ではない。</strong>本資料に挙げた蔵は、技法・産地・論点を説明するために選んだものである。挙がっていないことに意味はない。",
            zh:"<strong>品牌名為舉例，非排名。</strong>文中列出的酒藏，是為說明某項技法、某個產區或某個論點而選；未被列出並不代表任何意義。" },
          { en:"<strong>Where the evidence is contested, this reference says so.</strong> The terroir question, the sensory difference between kimoto and yamahai, and the value of milling below about 35% are all live disagreements among people who know more than any single source does.",
            ja:"<strong>証拠が割れている事柄は、そう明記した。</strong>テロワールの問題、生酛と山廃の官能上の差、精米歩合35%を下回ることの意味——いずれも、一つの資料が知りうる以上を知る人々のあいだで現に議論が続いている。",
            zh:"<strong>證據有爭議之處，本資料已明白標示。</strong>風土問題、生酛與山廢在感官上的差異，以及精米步合低於約 35% 的價值——這些都是知情者之間仍在進行的辯論，其所知超過任何單一來源。" },
          { en:"<strong>Romanisation follows a modified Hepburn system</strong> with long vowels marked, except where a brand or company uses a different spelling of its own name, in which case theirs is used.",
            ja:"<strong>ローマ字表記は長音符を付した修正ヘボン式による。</strong>ただし銘柄や社名が独自の綴りを用いている場合は、それに従った。",
            zh:"<strong>羅馬拼音採用標示長音的修正黑本式</strong>，惟品牌或公司對自身名稱另有慣用拼法者，從其所用。" }
        ] },
        { t:"note", label:{en:"On drinking",ja:"飲酒について",zh:"關於飲酒"}, text:{
          en:"Nothing here is advice to drink. Alcohol carries health risks that rise with consumption, and this reference is written for people who have already decided to drink and would like to understand what they are drinking.",
          ja:"本資料は飲酒を勧めるものではない。アルコールには摂取量とともに増大する健康上の危険があり、これは既に飲むと決めた人が、自分の飲んでいるものを理解するために書かれている。",
          zh:"本資料無意勸酒。酒精帶有隨攝取量增加而上升的健康風險；此處所寫，是為已決定飲酒、並希望理解自己所飲之物的人。" } }
      ]
    },

{ t:"section", id:"reading",
      title:{ en:"Reading in English", ja:"英語で読む", zh:"英文閱讀" }, jp:"英語文献",
      body:[
        { t:"p", text:{
          en:"The English-language literature on sake is small but has improved sharply since about 2010. What follows is what each kind of book is actually good for, rather than a ranking.",
          ja:"日本酒に関する英語の文献は数こそ少ないが、二〇一〇年頃から明らかに良くなっている。以下は順位づけではなく、それぞれの種類の本が実際に何に役立つかである。",
          zh:"關於清酒的英文文獻數量不多，但自約 2010 年起明顯改善。以下並非排名，而是說明每一類書實際上適合用來做什麼。" } },
        { t:"defs", items:[
          { term:{en:"The general introductions",ja:"入門書",zh:"入門書"}, jp:"概説",
            def:{en:"Several good single-volume guides now exist, written by long-resident foreign specialists and by sake educators. They are strongest on categories, labels, serving and pairing, and weakest on production chemistry and on anything requiring Japanese-language primary sources. Read one, then stop reading introductions.",
              ja:"長く日本に住む海外の専門家や日本酒の教育者による、優れた一冊本の案内書がいくつも出ている。分類、表示、供し方、料理との相性に強く、製造の化学や、日本語の一次資料を要する事柄には弱い。一冊読んだら、入門書を読むのはやめること。",
              zh:"目前已有數本優秀的單卷指南，作者多為長住日本的外籍專家與清酒教育者。它們在分類、酒標、供飲與餐搭上最強，在製程化學以及任何需要日文一手資料之處最弱。讀一本就好，之後別再讀入門書。"} },
          { term:{en:"The qualification textbooks",ja:"資格の教本",zh:"認證教材"}, jp:"教本",
            def:{en:"The WSET sake study guides and the Japan Sommelier Association's <em>Sake Diploma</em> textbook are the densest reliable English material available, because they are written to be examined against. Dry, structured, and far more precise than most trade writing.",
              ja:"WSETの日本酒の教材や日本ソムリエ協会のSAKE DIPLOMAの教本は、英語で得られる最も密度の高い信頼できる資料である。試験に問われることを前提に書かれているからである。無味乾燥で構造的、そして業界の文章の多くよりはるかに正確である。",
              zh:"WSET 的清酒教材與日本侍酒師協會的《SAKE DIPLOMA》教本，是英文中密度最高、也最可靠的材料，因為它們是為應付考試而寫。枯燥、結構化，但比多數業界文章精確得多。"} },
          { term:{en:"The technical literature",ja:"技術文献",zh:"技術文獻"}, jp:"学術",
            def:{en:"Journal papers on kōji enzymology, yeast breeding, ethyl carbamate and ester formation are largely in Japanese, but a useful minority appear in English in journals of bioscience and fermentation technology, and the National Research Institute of Brewing publishes English summaries. This is where the actual numbers live.",
              ja:"麹の酵素学、酵母の育種、カルバミン酸エチル、エステル生成に関する論文の多くは日本語だが、有用な一部は生物科学や発酵技術の雑誌に英語で現れ、酒類総合研究所も英語の要旨を公開している。実際の数値があるのはここである。",
              zh:"關於麴的酵素學、酵母育種、胺基甲酸乙酯與酯類生成的論文多為日文，但仍有一部分以英文發表於生物科學與發酵技術期刊，酒類綜合研究所也發布英文摘要。真正的數據就在這裡。"} },
          { term:{en:"The brewery-visit writing",ja:"蔵を訪ねた記録",zh:"造訪酒藏的書寫"}, jp:"紀行",
            def:{en:"Journalism and documentary — <em>The Birth of Saké</em> being the best-known example — is where the human structure of a brewery becomes legible in a way no textbook manages: the hours, the hierarchy, the cold, the exhaustion, and what a season actually costs the people who make it.",
              ja:"報道と記録映画——最もよく知られた例は『The Birth of Saké』である——においてこそ、蔵の人の構造が、いかなる教科書にもできないかたちで読み取れるようになる。時間、序列、寒さ、疲労、そして一造りが造り手に実際に何を支払わせるか。",
              zh:"新聞報導與紀錄片——最著名的例子是《The Birth of Saké》——才是酒藏之人的結構得以被讀懂之處，那是任何教科書都做不到的：工時、位階、寒冷、疲憊，以及一整季實際上讓釀造者付出了什麼。"} }
        ] }
      ]
    },

    { t:"section", id:"chinese",
      title:{ en:"Reading in Chinese", ja:"中国語で読む", zh:"中文閱讀" }, jp:"中国語文献",
      body:[
        { t:"p", text:{
          en:"Traditional-Chinese material on sake has grown substantially, driven by Taiwan's large per-capita consumption and a well-developed specialist retail scene.",
          ja:"日本酒についての繁体字の資料は大きく増えている。台湾の一人当たり消費の多さと、成熟した専門小売の存在がそれを支えている。",
          zh:"繁體中文的清酒資料已大幅增加，其推力來自臺灣可觀的人均消費，以及發展成熟的專門零售體系。" } },
        { t:"ul", items:[
          { en:"<strong>Translated Japanese guides.</strong> Most of the standard Japanese introductions have Traditional-Chinese editions, and they are generally more technically accurate than material written originally in Chinese, because the translation chain preserves the Japanese terminology intact.",
            ja:"<strong>日本語の案内書の翻訳。</strong>日本の標準的な入門書の多くには繁体字版があり、中国語で書き下ろされたものより技術的に正確であることが多い。翻訳の連鎖が日本語の術語をそのまま保つからである。",
            zh:"<strong>日文指南的翻譯本。</strong>多數日本標準入門書都有繁體中文版，且通常比原以中文撰寫的材料在技術上更準確，因為翻譯鏈保留了日文術語的原貌。" },
          { en:"<strong>Terminology is mostly shared.</strong> Because the vocabulary is written in kanji, a Chinese reader can read a Japanese sake label directly — 純米・吟醸・生酒・原酒・精米歩合 all carry over. The traps are the words where the meaning has diverged: 酒 alone means any alcohol in Japanese, 生 means unpasteurised rather than raw, and 醸造 in 醸造アルコール means distilled, not brewed.",
            ja:"<strong>術語の多くは共有されている。</strong>語彙が漢字で書かれているため、中国語の読み手は日本の酒標を直接読める——純米、吟醸、生酒、原酒、精米歩合はそのまま通じる。落とし穴は意味の離れた語である。日本語の「酒」だけならあらゆる酒類を指し、「生」は非加熱を意味して未加工ではなく、「醸造アルコール」の「醸造」は蒸留を指しており、醸すことではない。",
            zh:"<strong>術語大多共通。</strong>由於詞彙以漢字書寫，中文讀者可以直接讀懂日本酒標——純米、吟釀、生酒、原酒、精米步合皆可通用。陷阱在於語意已經分歧的詞：日文的「酒」單用時泛指一切酒類；「生」指未經火入而非生食之生；而「醸造アルコール」中的「醸造」指的是蒸餾所得，並非釀造。" },
          { en:"<strong>Taiwanese retail and bar culture.</strong> Taipei has a dense specialist retail scene with cold storage and knowledgeable staff, and a number of sake bars with unusually deep lists. For a reader in Taiwan this is a faster route to competence than any book.",
            ja:"<strong>台湾の小売と酒場の文化。</strong>台北には冷蔵設備と知識のある店員をもつ専門店が密に存在し、驚くほど品揃えの深い日本酒バーもいくつもある。台湾の読み手にとっては、どんな本よりも速く力がつく道である。",
            zh:"<strong>臺灣的零售與酒吧文化。</strong>臺北有相當密集的專門店，具備冷藏設備與內行店員，也有若干酒單深度驚人的清酒吧。對臺灣讀者而言，這是比任何書都更快累積功力的途徑。" },
          { en:"<strong>Read the Japanese sources where you can.</strong> The National Tax Agency, the National Research Institute of Brewing and the Ministry of Agriculture publish everything that matters, in Japanese, free. A Chinese reader with kanji can get further into these than an English reader can, and machine translation covers the rest.",
            ja:"<strong>可能なかぎり日本語の一次資料を読むこと。</strong>国税庁、酒類総合研究所、農林水産省は重要なものをすべて、日本語で、無償で公開している。漢字を読む中国語の読み手は、英語の読み手よりも深く入っていける。残りは機械翻訳が補う。",
            zh:"<strong>盡可能直接讀日文原始資料。</strong>國稅廳、酒類綜合研究所與農林水產省，把所有重要資料以日文免費公開。懂漢字的中文讀者能比英文讀者深入得多，其餘部分則可交給機器翻譯。" }
        ] }
      ]
    },

    { t:"section", id:"method",
      title:{ en:"How this reference was built", ja:"本資料の作り方", zh:"本參考資料的編成方式" }, jp:"編集方針",
      body:[
        { t:"defs", items:[
          { term:{en:"What is here",ja:"収めたもの",zh:"收錄的內容"}, jp:"方針",
            def:{en:"Definitions and legal thresholds are taken from Japanese statute and National Tax Agency notices. Statistics are attributed to the publishing ministry and the crop or tax year they belong to. Historical claims are dated. Where a claim is disputed within the industry — terroir, the value of very heavy milling, the merits of added alcohol — the dispute is described rather than settled.",
              ja:"定義と法的な閾値は、日本の法令と国税庁の告示に拠る。統計は、公表した省庁と、それが属する産年または年度を明記する。歴史的な記述には年代を付す。業界のなかで争いのある事柄——テロワール、極端な高精白の価値、アルコール添加の是非——については、決着させるのではなく、争いそのものを記述する。",
              zh:"定義與法定門檻取自日本法令與國稅廳公告。統計數據標註發布部會及其所屬的作物年度或年度。歷史陳述均註明年代。凡業界內部尚有爭議者——風土、極高精米的價值、添加酒精的優劣——本文描述爭議本身，而不代為裁定。"} },
          { term:{en:"What is not here",ja:"収めなかったもの",zh:"未收錄的內容"}, jp:"除外",
            def:{en:"Scores, rankings and recommendations of specific bottles to buy. These date within a season, they vary by importer and storage, and they substitute someone else's palate for the reader's. Brands are described for what they are known for, not rated.",
              ja:"点数、順位、そして特定の一本を買えという推奨。これらは一季で古び、輸入業者や保管によって変わり、読み手の舌を他人の舌で置き換えてしまう。銘柄は、評価するのではなく、何で知られているかとして記す。",
              zh:"評分、排名，以及「該買哪一瓶」的推薦。這些在一季之內就過時，會因進口商與保存狀況而異，並以他人的味覺取代讀者自己的味覺。品牌以「以何聞名」來描述，而不加以評分。"} },
          { term:{en:"Known limits",ja:"既知の限界",zh:"已知的侷限"}, jp:"限界",
            def:{en:"Production statistics move by several per cent a year and the figures here are dated to their source year. Brewery counts are approximate because licences, dormant licences and active producers are three different numbers. Sensory descriptions are generalisations across a category and any individual bottle may sit outside them.",
              ja:"生産の統計は年に数パーセント動くため、ここに挙げた数値には出典の年を付している。蔵の数が概数であるのは、免許数、休造中の免許、実際に稼働している造り手が三つの異なる数だからである。官能の記述は分類全体の一般化であり、個々の一本はそこから外れうる。",
              zh:"生產統計每年變動數個百分點，故本文數字均標註來源年度。酒藏數量為概數，因為執照數、休止中的執照與實際運作的生產者是三個不同的數字。感官描述是對整個類別的概括，個別酒瓶完全可能落在其外。"} },
          { term:{en:"On the three languages",ja:"三つの言語について",zh:"關於三種語言"}, jp:"多言語",
            def:{en:"Every page exists in full in English, Japanese and Traditional Chinese; none is a summary of another. Japanese technical terms are given in kanji throughout, including in the English text, because they are the terms the industry actually uses and the reader will meet them on labels regardless of what language they read in.",
              ja:"すべての頁が英語・日本語・繁体字中国語で完全に存在し、いずれも他の要約ではない。日本語の術語は英語の本文を含め、全体を通じて漢字で示す。それが業界の実際に用いる語であり、読み手はどの言語で読んでいようと、酒標の上でそれに出会うからである。",
              zh:"每一頁都以英文、日文與繁體中文完整存在，沒有任何一種是另一種的摘要。日文專業術語在全書（包括英文正文）中一律以漢字呈現，因為那是業界實際使用的詞彙，而讀者無論以何種語言閱讀，都會在酒標上遇見它們。"} }
        ] }
      ]
    },

{ t:"section", id:"primary-register",
      title:{ en:"Registers and official data consulted", ja:"参照した登録と公的データ", zh:"參閱的登錄與官方資料" }, jp:"一次資料",
      body:[
        { t:"p", text:{
          en:"Where this reference gives a date, a threshold, a legal definition or a designation, it has been taken from one of the following rather than from secondary description. Anything that could not be traced to a source of this kind is written with a hedge, and where two sources disagree both figures are given.",
          ja:"本書が年代、基準値、法的定義、指定を記すとき、それは二次的な記述からではなく、以下のいずれかから取られている。この種の典拠にたどり着けなかったものは留保を付して記し、二つの資料が食い違う場合は両方の数字を挙げてある。",
          zh:"本參考書凡給出年代、門檻值、法律定義或指定事項之處，均取自以下來源，而非二手轉述。凡無法追溯到此類來源者，皆以保留語氣書寫；若兩份資料說法不一，則兩個數字並列。" } },

        { t:"defs", items:[
          { term:{ en:"National Tax Agency — labelling standard and GI register", ja:"国税庁——表示基準と地理的表示の登録", zh:"國稅廳——標示基準與地理標示登錄" }, jp:"国税庁", romaji:"Kokuzeichō",
            def:{ en:"The 1989 standard on the manufacturing methods and quality labelling of seishu is the source for every special-designation threshold and every optional labelling term on this site; the agency's published GI register and its periodic GI pamphlet are the source for the designation dates and areas on the Geographical Indications page. The agency also publishes the annual survey of the sake industry, which is where production, brewery counts and shipment figures come from.",
              ja:"清酒の製法品質表示基準（平成元年）は、本サイトのすべての特定名称の要件と、すべての任意表示用語の典拠である。同庁の公表する地理的表示の登録と、随時刊行される地理的表示の小冊子は、地理的表示のページにおける指定日と範囲の典拠である。同庁はまた清酒製造業の実態調査を公表しており、生産量、蔵の数、出荷の数字はそこから来ている。",
              zh:"《清酒製法品質標示基準》（平成元年）是本站所有特定名稱門檻與所有任意標示用語的來源；該廳公布的地理標示登錄與定期發行的 GI 小冊，則是〈地理標示〉頁中指定日期與範圍的來源。該廳並公布清酒製造業實態調查，本站的產量、酒藏數與出貨數字均出自於此。" } },
          { term:{ en:"National Research Institute of Brewing", ja:"酒類総合研究所", zh:"酒類綜合研究所" }, jp:"酒類総合研究所", romaji:"Shurui Sōgō Kenkyūjo",
            def:{ en:"Successor to the Brewing Experiment Station founded in 1904. Its published reports and its historical catalogue are the source for the dates around yamahai and sokujō, and its technical material underlies the aroma-compound and analysis descriptions. It also administers the National New Sake Appraisal, whose format and results are described on the Competitions page.",
              ja:"明治三十七年（1904）に設立された醸造試験所の後身である。その報告と目録は、山廃と速醸をめぐる年代の典拠であり、その技術資料は香気成分と分析の記述の下敷きである。全国新酒鑑評会を主催しており、その形式と結果は鑑評会のページに記した。",
              zh:"一九〇四年設立之釀造試驗所的後身。其發表的報告與歷史目錄，是山廢與速釀相關年代的來源；其技術資料則是本站香氣成分與分析描述的基礎。它也主辦全國新酒鑑評會，其形式與結果記於〈鑑評會〉頁。" } },
          { term:{ en:"Ministry of Agriculture, Forestry and Fisheries", ja:"農林水産省", zh:"農林水產省" }, jp:"農林水産省", romaji:"Nōrin Suisanshō",
            def:{ en:"The source for sake rice: planted area and production by variety, the agricultural inspection grades that the special designations depend on, and the regional documentation of the Yamada Nishiki country in Hyōgo. Rice statistics run on their own year and the two calendars have to be reconciled carefully.",
              ja:"酒米の典拠である——品種別の作付面積と生産量、特定名称が依拠する農産物検査の等級、そして兵庫の山田錦の里についての地域資料。米の統計は独自の年度で動くため、二つの暦は注意して突き合わせねばならない。",
              zh:"酒米資料的來源：各品種的種植面積與產量、特定名稱所依據的農產物檢查等級，以及兵庫山田錦之鄉的地方文獻。稻米統計採用自己的年度，兩套曆必須小心對齊。" } },
          { term:{ en:"Prefectural research institutes", ja:"県の試験研究機関", zh:"各縣試驗研究機構" }, jp:"公設試", romaji:"kōsetsushi",
            def:{ en:"Prefectural industrial technology centres and brewing research institutes publish their own yeast characteristics, their distribution policies and, often, detailed accounts of their own regional programmes. The Shizuoka and Kumamoto material in particular is the source for the yeast histories on the People and Yeast pages.",
              ja:"県の工業技術センターや酒造研究所は、自らの酵母の特性、頒布の方針、そしてしばしば地域の取り組みの詳細な記録を公表している。とりわけ静岡と熊本の資料は、人物と酵母のページにおける酵母の歴史の典拠である。",
              zh:"各縣的工業技術中心與酒造研究所會公布自家酵母的特性、頒布政策，且往往還有該地域計畫的詳細紀錄。其中靜岡與熊本的資料，尤其是〈人物〉與〈酵母〉頁中酵母歷史的來源。" } },
          { term:{ en:"Guild and association publications", ja:"杜氏組合・業界団体の刊行物", zh:"杜氏組合與業界團體的刊物" }, jp:"組合資料", romaji:"kumiai shiryō",
            def:{ en:"The tōji guilds publish their own founding dates, membership figures and appraisal results; the Japan Sake and Shochu Makers Association publishes industry-wide material and runs the export statistics most often quoted. Guild figures are self-reported and should be read as such, but they are the only source for several of them.",
              ja:"杜氏の各組合は自らの設立年、会員数、鑑評会の結果を公表している。日本酒造組合中央会は業界全体の資料を公表し、最もよく引かれる輸出統計を扱う。組合の数字は自己申告であり、そう読むべきものだが、いくつかについてはそれが唯一の典拠である。",
              zh:"各杜氏組合會公布自身的創立年份、會員數與鑑評會結果；日本酒造組合中央會則發布全產業資料，並掌管最常被引用的出口統計。組合的數字屬自行申報，應如此看待，但其中若干項目也只有這一個來源。" } },
          { term:{ en:"Competition organisers", ja:"品評会の主催者", zh:"評鑑主辦單位" }, jp:"品評会", romaji:"hinpyōkai",
            def:{ en:"The International Wine Challenge, Kura Master, the U.S. National Sake Appraisal and SAKE COMPETITION each publish their own founding date, category structure, judging method and results. Founding years and entry counts on the Competitions page are taken from the organisers directly, since third-party accounts of them differ.",
              ja:"インターナショナル・ワイン・チャレンジ、Kura Master、全米日本酒歓評会、SAKE COMPETITIONは、いずれも自らの創設年、部門構成、審査方法、結果を公表している。鑑評会のページの創設年と出品数は主催者から直接取った。第三者による記述は互いに食い違うからである。",
              zh:"International Wine Challenge、Kura Master、全美日本酒歡評會與 SAKE COMPETITION 都各自公布其創辦年份、類別架構、評審方法與結果。〈鑑評會〉頁的創辦年份與出品件數直接取自主辦單位，因為第三方的記述彼此不一。" } }
        ] }
      ] },

    { t:"section", id:"how-to-verify",
      title:{ en:"How to check anything here yourself", ja:"ここに書いたことを自ら確かめるには", zh:"如何自行查證本站內容" }, jp:"検証の手引き",
      body:[
        { t:"figure",
          caption:{
            en:"Four kinds of question, and how far any source can take you on each. The first one is not really a question at all — the standard is published, it is a page long, and reading it ends the argument. The last one cannot be settled by any source whatever, including this one, because the thing being asked about is happening in one person's mouth. Most disagreements about sake are disagreements about which of these four rows a claim belongs in.",
            ja:"四つの種の問いと、いかなる資料もそこまでしか連れて行けぬという境目。第一のものはそもそも問いではない。基準は公にされ、一頁ほどであり、それを読めば議論は終わる。最後のものは、本書を含むいかなる資料によっても決しえない。問われているものが、一人の口のなかで起きているからである。日本酒についての意見の相違のほとんどは、ある主張がこの四つの行のどれに属するかについての相違である。",
            zh:"四種問題，以及任何資料在每一種上最多能帶你走多遠。第一種其實根本不是問題——基準是公開的，篇幅約一頁，讀完爭論就結束了。最後一種則無法被任何資料裁定，包括本站，因為被問的那件事正發生在某一個人的嘴裡。關於清酒的爭執，多數其實是在爭一項主張該歸到這四列的哪一列。" },
          svg: function (lang, L) {
            var W = 760, H = 302, X0 = 250, X1 = 706;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g;
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "答えはどこまで定まるか" : lang === "zh" ? "答案能被定到什麼程度" : "HOW FAR A SOURCE CAN TAKE YOU") + '</text>';
            s += '<text x="' + X0 + '" y="68" font-size="9" fill="#A39C91">' +
                 (lang === "ja" ? "公表された一文で決まる" : lang === "zh" ? "一份公開文本即可定案" : "a published text settles it") + '</text>';
            s += '<text x="' + X1 + '" y="68" text-anchor="end" font-size="9" fill="#A39C91">' +
                 (lang === "ja" ? "誰にも決められない" : lang === "zh" ? "誰也無法定案" : "nobody can settle it") + '</text>';
            for (g = 0; g <= 4; g++) {
              var gx = X0 + g / 4 * (X1 - X0);
              s += '<line x1="' + gx.toFixed(1) + '" y1="76" x2="' + gx.toFixed(1) + '" y2="250" stroke="#EFEDE7"/>';
            }
            var rows = [
              { c:0.95, col:"#7C6B52",
                n:{ en:"A legal or labelling question", ja:"法・表示の問い", zh:"法規或標示的問題" },
                q:{ en:"what junmai means, what may be printed", ja:"純米とは何か、何を刷ってよいか", zh:"純米是什麼、可以印什麼" },
                w:{ en:"the notification itself — short, public, and it ends the matter", ja:"公表された基準そのもの。短く、公であり、それで決まる", zh:"基準原文本身：篇幅短、公開，而且就此定案" } },
              { c:0.74, col:"#B09E7C",
                n:{ en:"A statistical question", ja:"統計の問い", zh:"統計的問題" },
                q:{ en:"how much is made, how many houses are left", ja:"どれだけ造られ、何軒残っているか", zh:"造了多少、還剩幾家" },
                w:{ en:"the published series, read with its year and its unit still attached", ja:"公表された系列を、年と単位を付けたまま読む", zh:"公布的統計序列，連同年份與單位一起讀" } },
              { c:0.42, col:"#CFC6B2",
                n:{ en:"A historical question", ja:"歴史の問い", zh:"歷史的問題" },
                q:{ en:"when something was first done", ja:"それが初めて行われたのはいつか", zh:"某件事第一次是什麼時候做的" },
                w:{ en:"the earliest surviving record, plus who wrote it and how long afterwards", ja:"現存する最も古い記録と、誰がどれだけ後に書いたか", zh:"現存最早的記錄，加上是誰、在多久之後寫的" } },
              { c:0.16, col:"#E0DACC",
                n:{ en:"A question about taste", ja:"味の問い", zh:"味覺的問題" },
                q:{ en:"what it smells of, what it goes with", ja:"何の香りがし、何に合うか", zh:"聞起來像什麼、配什麼" },
                w:{ en:"your own palate against a stated threshold; everyone else is guessing too", ja:"述べられた閾値に対する自らの舌。他の誰もが同じく推している", zh:"你自己的舌頭，對照一個寫明的閾值；其他人也都在猜" } }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = 100 + i * 46;
              s += '<rect x="' + X0 + '" y="' + (ry - 9) + '" width="' + ((X1 - X0)).toFixed(1) + '" height="18" fill="#F3F1EB"/>';
              s += '<rect x="' + X0 + '" y="' + (ry - 9) + '" width="' + ((X1 - X0) * rows[i].c).toFixed(1) + '" height="18" fill="' + rows[i].col + '"/>';
              s += '<text x="30" y="' + (ry - 2) + '" font-size="10.5" fill="#201E1B">' + L(rows[i].n) + '</text>';
              s += '<text x="30" y="' + (ry + 11) + '" font-size="8.5" fill="#A39C91">' + L(rows[i].q) + '</text>';
              s += '<text x="' + X0 + '" y="' + (ry + 24) + '" font-size="9.5" fill="#8B857C">' + L(rows[i].w) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "帯は、本書が正しい見込みを示すものではない。その問いがそもそも決着しうるか否かを示すものである。"
                  : lang === "zh" ? "這些帶子量的不是本站說對的機率，而是這個問題究竟有沒有可能被裁定。"
                  : "The bar is not how likely this site is to be right. It is whether the question can be settled at all.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"This is an independent compilation with no institutional standing, and it should be treated the way you would treat any secondary source: useful for orientation, not authoritative for a decision. Four habits make it easy to check.",
          ja:"本書は、いかなる機関の後ろ盾も持たない独立の編纂物であり、あらゆる二次資料と同じように扱われるべきである——見取り図としては有用だが、判断の典拠としては権威を持たない。四つの習慣が、確かめることを容易にする。",
          zh:"本站是一份沒有任何機構背書的獨立編纂，應以對待任何二手資料的方式看待：用來建立方向感很有用，但不足以作為決策的權威依據。以下四個習慣能讓查證變得容易。" } },

        { t:"ol", items:[
          { en:"<strong>For anything legal, go to the standard, not to a summary.</strong> The special designations, the optional labelling terms and the definition of seishu are all short pieces of published text. If a claim on this site about what a word means contradicts them, they are right and this is wrong.",
            ja:"<strong>法に関わることは、要約ではなく基準そのものに当たること。</strong>特定名称、任意表示用語、清酒の定義は、いずれも短い公表文である。ある語の意味についての本サイトの記述がそれと食い違うなら、正しいのは基準であり、誤っているのは本サイトである。",
            zh:"<strong>凡涉及法規，請直接查基準原文，而非摘要。</strong>特定名稱、任意標示用語與清酒的定義，都是篇幅不長的公開文本。若本站對某個詞語意義的說法與之牴觸，正確的是基準，錯的是本站。" },
          { en:"<strong>For anything statistical, note the year and the unit.</strong> Production is published in kilolitres and brewery scale is quoted in koku; figures move year to year and a number quoted without a year is close to useless. Prefer the most recent published survey over any book.",
            ja:"<strong>統計に関わることは、年と単位を確かめること。</strong>生産量はキロリットルで公表され、蔵の規模は石で語られる。数字は年ごとに動き、年を伴わぬ数字はほとんど役に立たない。いかなる書物よりも、最新の公表調査を採るべきである。",
            zh:"<strong>凡涉及統計，請留意年份與單位。</strong>產量以公秉發布，酒藏規模則以石計；數字逐年變動，沒有年份的數字幾乎沒有用處。任何書籍都不如最新公布的調查可靠。" },
          { en:"<strong>For anything historical, expect disagreement.</strong> Several dates in sake history — the discovery of miyamizu, the origin of clarified sake, the first use of a technique — are attested only in later accounts, and reputable sources give different years. Where this site gives one date for something contested, it is a simplification.",
            ja:"<strong>歴史に関わることは、異同を予期すること。</strong>日本酒史のいくつかの年代——宮水の発見、清酒の起源、ある技法の初出——は後代の記述にのみ現れ、信頼できる資料が異なる年を挙げる。争いのある事柄について本サイトが一つの年を挙げているなら、それは単純化である。",
            zh:"<strong>凡涉及歷史，請預期會有分歧。</strong>清酒史上的若干年代——宮水的發現、清酒的起源、某項技法的首次使用——只見於後世記述，而可靠資料給出的年份互不相同。本站若對有爭議之事只給一個年份，那就是一種簡化。" },
          { en:"<strong>For anything about taste, distrust everyone including this site.</strong> Threshold values vary between individuals, tasting notes are culturally learned, and the confident language of wine and sake writing conceals a great deal of genuine uncertainty. The only reliable instrument is two bottles open at the same time.",
            ja:"<strong>味に関わることは、本サイトを含めた誰をも疑うこと。</strong>閾値は個人によって異なり、テイスティングの語彙は文化的に学ばれたものであり、ワインと日本酒の文章の自信ありげな語り口は、多くの真の不確かさを覆い隠している。信頼できる唯一の器具は、同時に開けた二本の瓶である。",
            zh:"<strong>凡涉及味覺，請懷疑所有人，包括本站。</strong>閾值因人而異，品飲用語是文化習得的，而葡萄酒與清酒書寫那種自信的語氣，掩蓋了大量真實的不確定性。唯一可靠的儀器，是同時打開的兩支酒。" }
        ] },

        { t:"note", text:{
          en:"Corrections are the most useful thing a reader can offer. Where a figure here is wrong, it is wrong in the same way in all three languages, because the three texts are written together rather than translated from one another.",
          ja:"読者が寄せうる最も有用なものは訂正である。ここの数字が誤っているなら、三つの言語すべてにおいて同じ仕方で誤っている。三つの本文は、一方から他方へ訳されたのではなく、ともに書かれているからである。",
          zh:"讀者能提供的最有用的東西是勘誤。本站若有數字錯誤，它會在三種語言中以相同方式錯誤——因為這三種文本是一起寫成的，而非彼此翻譯而來。" } }
      ] },

    { t:"related", items:[
      { href:"standards.html", why:{ en:"The notifications this site cites most often.", ja:"本サイトが最も多く引く告示。", zh:"本站最常引用的那些告示。" } },
      { href:"chronology.html", why:{ en:"The dates that are disputed, and by whom.", ja:"争いのある日付と、誰が争っているか。", zh:"有爭議的日期，以及是誰在爭。" } },
      { href:"industry.html", why:{ en:"The statistical series, and where they are published.", ja:"統計の系列と、それが公表される場所。", zh:"統計序列，以及它們發布的地方。" } },
      { href:"index.html", why:{ en:"Back to the top of the site.", ja:"サイトの頭へ戻る。", zh:"回到本站的最上層。" } }
    ] }
  ]
};

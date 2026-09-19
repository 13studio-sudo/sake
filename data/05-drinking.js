/* =============================================================
   THE BOOK OF SAKE — Drinking
   15 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- --------------------------------------------- tasting */
SAKE.pages["tasting"] = {
  kicker: { en: "Drinking · 01", ja: "飲む · 01", zh: "品飲 · 01" },
  title:  { en: "Tasting", ja: "利き酒", zh: "品評" },
  jp: "きき酒 · 官能評価",
  lede: {
    en: "Japan has an unusually formal apparatus for tasting sake: a standard cup, a standard temperature, a standard vocabulary of eighty-six descriptors with chemical reference standards, and a national competition that has run since 1911. None of it is required to enjoy a drink, but all of it is useful, because it names things that are otherwise hard to hold on to.",
    ja: "日本には、日本酒を利くための異例に整った装置がある——規格化された猪口、規格化された温度、化学的な標準見本を伴う八十六語の評価用語、そして一九一一年から続く全国規模の鑑評会。楽しむためにはそのいずれも必要ではないが、いずれも役に立つ。ほかの仕方では捉えにくいものに名前を与えてくれるからである。",
    zh: "日本擁有一套異常正式的品評裝置：標準酒杯、標準溫度、附有化學參照標準的八十六個描述詞彙，以及自 1911 年延續至今的全國鑑評會。享受一杯酒並不需要這些，但它們都很有用——因為它們為那些原本難以把握之物命了名。"
  },
  body: [
    { t:"section", id:"method",
      title:{ en:"The method", ja:"手順", zh:"方法" }, jp:"きき猪口",
      body:[
        { t:"p", text:{
          en:"The standard vessel is the <em>kiki-jōko</em>: a white porcelain cup of about 180 mL with two concentric blue rings painted in the base — the <em>janome</em>, or “snake's eye”. The white ground shows the sake's true colour; the boundary between blue and white shows its clarity and viscosity, because a hazy or heavy sake blurs the ring's edge.",
          ja:"標準の器はきき猪口である。容量およそ180mLの白磁の猪口で、底に二重の青い輪——蛇の目——が描かれている。白い地は酒の本来の色を示し、青と白の境目は清澄度と粘性を示す。濁った酒や重い酒は、輪の縁を曖昧にするからである。",
          zh:"標準器具是「利き猪口」：約 180 mL 的白瓷杯，杯底繪有兩圈同心藍環——即「蛇之目」。白色底面顯示酒的真實色澤；藍白交界則顯示澄清度與黏度，因為混濁或厚重的酒會使環的邊緣模糊。" } },
        { t:"steps", items:[
          { title:{en:"Colour",ja:"色沢",zh:"色澤"}, jp:"色沢", romaji:"shikitaku",
            text:{en:"Look into the cup from above against the white base. Most modern sake is near-colourless with a faint green or yellow cast; a distinct yellow suggests age, muroka, or high amino acid. Amber to brown means koshu. Haze at the ring edge means suspended solids or, in a clear sake, possible spoilage.",
                  ja:"白い地を背に、上から覗き込む。現代の多くの酒はほぼ無色で、かすかに緑か黄を帯びる。はっきりした黄色は熟成、無濾過、あるいはアミノ酸の多さを示す。琥珀から褐色は古酒である。輪の縁の濁りは浮遊物を、澄んでいるはずの酒であれば劣化の可能性を示す。",
                  zh:"以白色底面為背景，自上方俯視。多數現代清酒近乎無色，帶淡淡的綠或黃調；明顯的黃色暗示陳年、無濾過或高胺基酸。琥珀至褐色即為古酒。環邊出現霧感表示有懸浮物；若本應澄清卻起霧，則可能已劣化。"} },
          { title:{en:"Top note",ja:"上立ち香",zh:"上立香"}, jp:"上立ち香", romaji:"uwadachi-ka",
            text:{en:"Smell the still surface without swirling. Sake is not swirled the way wine is — the aromatics are volatile and delicate, and agitation flattens them within a minute. What you are looking for at this stage is the fruit-and-flower register: apple, melon, banana, pear, white flowers.",
                  ja:"回さずに、静かな液面の香りを取る。日本酒はワインのように回さない。香気成分は揮発しやすく繊細で、揺らせば一分と経たずに平板になる。この段階で探すのは果実と花の音域——リンゴ、メロン、バナナ、洋梨、白い花である。",
                  zh:"不搖杯，直接聞靜止液面的香氣。日本酒不像葡萄酒那樣搖晃——其香氣成分揮發快且細緻，攪動不到一分鐘便會變得平板。此階段要找的是果與花的音域：蘋果、哈密瓜、香蕉、洋梨、白花。"} },
          { title:{en:"Palate",ja:"味",zh:"味"}, jp:"含み香・味",
            text:{en:"Take a small amount and draw air across it. The aroma released inside the mouth — <em>fukumi-ka</em> — is often quite different from the top note, and is where kōji, rice and lees character appear. Assess in order: attack, sweetness, acidity, umami, bitterness, texture, and the balance among them.",
                  ja:"少量を口に含み、空気を通す。口中で立つ香り——含み香——は上立ち香とかなり異なることが多く、麹・米・滓の性格が現れるのはここである。順に評価する——アタック、甘み、酸、うま味、苦み、質感、そしてそれらの均衡。",
                  zh:"含入少量並讓空氣通過。在口中釋出的香氣——「含香」——常與上立香相當不同，麴、米與酒粕的性格正顯現於此。依序評估：入口衝擊、甜、酸、旨味、苦、質地，以及彼此之間的平衡。"} },
          { title:{en:"Finish",ja:"後味・キレ",zh:"餘韻與收尾"}, jp:"キレ", romaji:"kire",
            text:{en:"<em>Kire</em> — literally “cut” — is the speed and cleanness with which the sake leaves. It is one of the two most-used words in Japanese sake criticism, the other being <em>fukumi</em>, fullness. A sake with high kire disappears; one with high fukumi lingers. Neither is better, and the whole regional argument between Niigata and Nada is a disagreement about which to prefer.",
                  ja:"キレとは、酒が引いていく速さと清らかさである。日本語の日本酒評でおそらく最も使われる二語の一つで、もう一つは含み——ふくらみである。キレの良い酒は消え、含みのある酒は残る。優劣はなく、新潟と灘のあいだの地域的な論争は、要するにどちらを好むかの不一致である。",
                  zh:"「切れ」（kire）字面意為「切」，指酒離去的速度與潔淨度。它是日文清酒評論中最常用的兩個詞之一，另一個是「含み」（豐厚）。切れ佳的酒會消失，含み佳的酒會停留。兩者無高下之分；新潟與灘之間的地域之爭，說到底就是偏好哪一者的分歧。"} }
        ] },
        { t:"note", label:{en:"Conditions",ja:"条件",zh:"條件"}, text:{
          en:"Official evaluation is done at about 20 °C, in daylight or neutral light, on a white surface, with palate rinses of water between samples, and — for the national competition — blind. Sake changes so much with temperature that comparing two samples at different temperatures produces no usable information at all.",
          ja:"公式の評価はおよそ20℃、自然光か中性光の下、白い面の上で行い、試料のあいだに水で口をすすぐ。全国新酒鑑評会ではブラインドである。日本酒は温度によってあまりに変わるため、温度の異なる二つの試料を比べても、使える情報は何一つ得られない。",
          zh:"正式評鑑於約 20°C、自然光或中性光下、以白色檯面進行，樣本之間以水漱口；全國鑑評會則為盲測。日本酒隨溫度變化極大，比較兩個溫度不同的樣本，得不到任何可用資訊。" } }
      ]
    },

    { t:"section", id:"vocabulary",
      title:{ en:"The official vocabulary", ja:"評価用語", zh:"官方詞彙" }, jp:"官能評価用語",
      body:[
        { t:"p", text:{
          en:"The National Research Institute of Brewing publishes a standard set of eighty-six terms in sixteen categories, each anchored to a physical reference — forty-three chemical compounds at defined thresholds, and eighteen natural materials such as red rice bran or cedar-aged sake. It is the sake equivalent of the wine aroma kit, but with an unusual emphasis on faults, because the competition system it serves is fundamentally a fault-detection exercise.",
          ja:"酒類総合研究所は、十六の分類に整理された八十六の標準用語を公表しており、そのそれぞれが物理的な標準見本に紐づけられている——閾値を定めた四十三の化学物質と、赤糠や樽貯蔵酒といった十八の自然物である。ワインのアロマキットに相当するが、欠点への比重が異例に大きい。それが仕える鑑評会の制度が、根本において欠点の検出作業だからである。",
          zh:"酒類綜合研究所公布了一套分為十六類、共八十六個標準詞彙，每一個都對應一項實體參照——四十三種設定閾值的化學物質，以及紅糠、樽貯藏酒等十八種天然材料。這相當於葡萄酒的香氣組，但對缺陷的著墨異常之重，因為它所服務的鑑評會制度，本質上是一場缺陷偵測。" } },
        { t:"table",
          cols:[{en:"Group",ja:"分類",zh:"分類"},{en:"Typical terms",ja:"代表的な用語",zh:"代表詞彙"},{en:"Reference",ja:"標準見本",zh:"參照標準"}],
          rows:[
            [{en:"Ginjō and fruit",ja:"吟醸香・果実",zh:"吟釀香與果實"},{en:"banana, apple, pear, melon, ester",ja:"バナナ、リンゴ、洋梨、メロン、エステル",zh:"香蕉、蘋果、洋梨、哈密瓜、酯類"},"isoamyl acetate · ethyl caproate · ethyl acetate"],
            [{en:"Flowers and herbs",ja:"花・草",zh:"花與草"},{en:"white flower, grass, cedar, almond, spice",ja:"白い花、草、杉、アーモンド、香辛料",zh:"白花、青草、杉木、杏仁、香料"},"cedar-aged sake · crushed hazelnut"],
            [{en:"Grain and kōji",ja:"穀物・麹",zh:"穀物與麴"},{en:"rice, bran, steamed rice, kōji",ja:"米、糠、蒸米、麹",zh:"米、糠、蒸米、麴"},"white rice flour · red bran · rice kōji"],
            [{en:"Sweet and caramel",ja:"甘い香り・カラメル",zh:"甜香與焦糖"},{en:"honey, dried fruit, caramel, amazake",ja:"蜂蜜、乾果、カラメル、甘酒",zh:"蜂蜜、果乾、焦糖、甘酒"},"kōji amazake · prune juice · honey"],
            [{en:"Ageing",ja:"熟成・老ね",zh:"熟成與老化"},{en:"aged aroma, oxidised, light-struck",ja:"熟成香、老香、日光臭",zh:"熟成香、老香、日光臭"},"heat-aged sake · UV-exposed sake"],
            [{en:"Sulfur",ja:"硫黄系",zh:"硫化物"},{en:"hydrogen sulfide, mercaptan, DMS",ja:"硫化水素、メルカプタン、DMS",zh:"硫化氫、硫醇、二甲基硫"},"sodium sulfide · ethanethiol · dimethyl sulfide"],
            [{en:"Off-odours",ja:"異臭",zh:"異味"},{en:"rubber, mould, paper, resin",ja:"ゴム、カビ、紙、樹脂",zh:"橡膠、黴、紙、樹脂"},"rubber stopper · trichloroanisole · filter paper"],
            [{en:"Taste",ja:"味",zh:"味"},{en:"sweet, sour, umami, bitter, astringent",ja:"甘味、酸味、うま味、苦味、渋味",zh:"甜、酸、旨、苦、澀"},"glucose · malic acid · tyrosol"]
          ] },
        { t:"panel", tint:"plum", title:{en:"The commonest faults",ja:"よくある欠点",zh:"最常見的缺陷"}, body:[
          { t:"defs", items:[
            { term:{en:"Hine-ka",ja:"老香",zh:"老香"}, jp:"老香",
              def:{en:"Stale, cardboard, cooked cabbage, drains. Mostly dimethyl trisulfide, produced by warm storage. The single most common problem in sake that has travelled badly.",ja:"段ボール、茹でたキャベツ、排水を思わせる古びた匂い。主にジメチルトリスルフィドによるもので、高温貯蔵で生じる。輸送や保管が悪かった酒における最も一般的な問題である。",zh:"陳腐、紙板、煮甘藍、水溝味。主要來自二甲基三硫，由高溫貯藏產生。這是運送或保存不良之酒最常見的問題。"} },
            { term:{en:"Nikkōshū",ja:"日光臭",zh:"日光臭"}, jp:"日光臭",
              def:{en:"The same family of sulfur compounds, produced by ultraviolet light — which is why sake bottles are dark and why a clear-glass bottle under shop lighting is a warning sign. Damage can occur within hours.",ja:"同じ硫黄系の化合物が紫外線によって生じたもの。日本酒の瓶が濃色である理由であり、店の照明の下に置かれた透明瓶が警戒の合図である理由でもある。数時間で生じうる。",zh:"同一類硫化物，由紫外線造成——這正是清酒瓶色深的原因，也是為何店內燈光下的透明瓶是個警訊。損害可能在數小時內發生。"} },
            { term:{en:"Tsuwari-ka",ja:"つわり香",zh:"孕吐香"}, jp:"つわり香",
              def:{en:"A nauseating sweetish-metallic note from acetaldehyde, usually the mark of a fermentation that was interrupted or a mash handled carelessly at pressing.",ja:"アセトアルデヒドによる、甘く金属的で不快な香り。発酵が中断されたか、上槽時の醪の扱いが粗かったことを示すことが多い。",zh:"由乙醛造成、甜膩帶金屬感的令人不適氣味，多半意味著發酵中斷，或上槽時對醪處理粗率。"} },
            { term:{en:"Kōji-shū",ja:"麹臭",zh:"麴臭"}, jp:"麹臭",
              def:{en:"Excessive mouldy or mushroom character from kōji taken too far or run too wet. Not to be confused with the pleasant chestnut-and-sweetness of good kōji.",ja:"製麹を進めすぎたり、水分が多すぎたりしたことによる過剰なカビ臭・きのこ臭。良い麹のもつ栗のような甘い香りと混同してはならない。",zh:"製麴過度或水分過多所致的黴味與菇味過強。不可與優質米麴那種栗子般的甜香混淆。"} }
          ] }
        ] }
      ]
    },

    { t:"section", id:"competitions",
      title:{ en:"Competitions", ja:"鑑評会・コンテスト", zh:"評鑑與競賽" }, jp:"鑑評会",
      body:[
        { t:"defs", items:[
          { term:{en:"National New Sake Appraising Competition",ja:"全国新酒鑑評会",zh:"全國新酒鑑評會"}, jp:"全国新酒鑑評会 · 1911–",
            def:{en:"Run by the National Research Institute of Brewing every spring since 1911, and the most consequential award in the industry. Entries are new sake of the current brewing year, judged blind. The criteria — clean, faultless, aromatic — created the ginjō style and continue to shape it: the entries are essentially technical demonstrations rather than commercial products, often milled far below what any brewery would sell, and increasingly made with the same yeast. Fukushima has led the gold-medal count for many consecutive years.",
                 ja:"一九一一年以来、酒類総合研究所が毎春開催しており、業界で最も重い賞である。出品はその造年度の新酒で、審査はブラインド。清く、欠点がなく、香り高いという基準が吟醸という酒質を生み、いまなおそれを規定し続けている。出品酒は商品というより技術の実演であり、市販では考えられないほど磨かれ、しかも同じ酵母で造られることが増えている。金賞受賞数では福島が長年首位を続けている。",
                 zh:"由酒類綜合研究所自 1911 年起每年春季舉辦，是業界最具份量的獎項。參賽者為當釀造年度的新酒，採盲測評審。其標準——潔淨、無瑕、芳香——催生了吟釀風格並持續形塑之：參賽酒本質上是技術展演而非商品，精米往往遠低於任何酒藏會販售的程度，且使用同一酵母者日益增多。福島已連續多年在金賞數上居首。"} },
          { term:{en:"Sake Competition",ja:"SAKE COMPETITION",zh:"SAKE COMPETITION"},
            def:{en:"A commercial competition judging sake as consumers actually buy it, in categories including junmai, junmai ginjō, junmai daiginjō, sparkling and a “free style” class. Judged by industry professionals and generally regarded as more predictive of what a bottle is like to drink than the national competition.",
                 ja:"消費者が実際に購入する形の商品を審査する民間のコンテスト。純米、純米吟醸、純米大吟醸、発泡、フリースタイルなどの部門をもつ。業界の専門家が審査し、一本の酒が飲んでどうであるかの予測としては、全国新酒鑑評会より信頼できると一般に見なされている。",
                 zh:"以消費者實際購買的商品形態進行評審的商業競賽，設有純米、純米吟釀、純米大吟釀、氣泡與自由風格等組別。由業界專業人士評審，一般認為在預測「這瓶酒喝起來如何」上，比全國新酒鑑評會更可靠。"} },
          { term:{en:"International Wine Challenge — Sake",ja:"IWC SAKE部門",zh:"IWC 清酒部門"}, jp:"IWC",
            def:{en:"The London competition added a sake division in 2007. Its influence on export markets is considerable and its influence in Japan is real but contested — the 2011 trophy for a tiny Saga brewery visibly changed how Kyushu sake was regarded.",
                 ja:"ロンドンの同大会は二〇〇七年にSAKE部門を設けた。輸出市場への影響は大きく、日本国内での影響も実在するが議論もある。二〇一一年、佐賀の極小の蔵がトロフィーを得たことは、九州の酒への見方を目に見えて変えた。",
                 zh:"這項倫敦競賽於 2007 年增設清酒部門。它對出口市場影響顯著，在日本國內的影響則真實但存有爭議——2011 年一家佐賀極小型酒藏奪得大獎，明顯改變了外界對九州清酒的看法。"} },
          { term:{en:"Kikizakeshi",ja:"唎酒師",zh:"唎酒師"}, jp:"唎酒師 · SSI",
            def:{en:"A certification for service professionals administered by the Sake Service Institute, covering tasting, the four-type framework, temperature, vessels and pairing. There is also a <em>Sake Diploma</em> from the Japan Sommelier Association, and the international <em>WSET Level 3 Award in Sake</em>. All three teach compatible material with different emphases: SSI on service, JSA on pairing and analysis, WSET on production and trade.",
                 ja:"日本酒サービス研究会・酒匠研究会連合会（SSI）が認定する、提供の専門職のための資格。テイスティング、四タイプ分類、温度、器、相性を扱う。日本ソムリエ協会のSAKE DIPLOMA、国際的なWSET Level 3 Award in Sake もある。三者は矛盾しない内容を、それぞれ重点を変えて教える——SSIは提供に、JSAは相性と分析に、WSETは製造と流通に重きを置く。",
                 zh:"由日本酒服務研究會（SSI）認證、面向服務業專業人士的資格，涵蓋品評、四類型架構、溫度、酒器與搭配。此外還有日本侍酒師協會的 SAKE DIPLOMA，以及國際性的 WSET Level 3 Award in Sake。三者所教內容彼此相容而重點不同：SSI 側重服務，JSA 側重搭配與分析，WSET 側重生產與貿易。"} }
        ] }
      ]
    },

    { t:"section", id:"practice",
      title:{ en:"Practical advice", ja:"実践", zh:"實務建議" }, jp:"実践",
      body:[
        { t:"ul", items:[
          { en:"<strong>Taste three at once, not one.</strong> A single sake in isolation is almost impossible to characterise; three side by side make each one legible. A junmai, a junmai ginjō and a yamahai from the same prefecture is a good first set.",
            ja:"<strong>一本ではなく三本を同時に。</strong>一本だけを単独で捉えるのはほとんど不可能である。三本を並べれば、そのそれぞれが読めるようになる。同じ県の純米・純米吟醸・山廃を一組にするのがよい出発点である。",
            zh:"<strong>一次品三款，而非一款。</strong>單獨一款酒幾乎無從描述；三款並列，每一款才變得可讀。以同一縣的純米、純米吟釀與山廢為一組，是不錯的起點。" },
          { en:"<strong>Then taste the same one at three temperatures.</strong> Chilled, room temperature and warmed at 45 °C. This single exercise teaches more than any amount of reading, and it will change your mind about at least one bottle you thought you knew.",
            ja:"<strong>次に、同じ一本を三つの温度で。</strong>冷やして、常温で、45℃に燗して。この一つの実験は、どれだけ読むことよりも多くを教え、知っているつもりだった一本についての考えを、少なくとも一つは変える。",
            zh:"<strong>接著，把同一款酒以三種溫度品飲。</strong>冷藏、常溫，以及溫至 45°C。這一項練習所教的，勝過任何閱讀量，而且至少會改變你對某一瓶自以為熟悉之酒的看法。" },
          { en:"<strong>Write it down at the time.</strong> Sake aroma is highly volatile and memory of it is unreliable within minutes, let alone days.",
            ja:"<strong>その場で書き留める。</strong>日本酒の香りは揮発が速く、記憶は数分で当てにならなくなる。数日後は言うまでもない。",
            zh:"<strong>當場記下。</strong>清酒香氣揮發極快，數分鐘後記憶便不可靠，遑論數日之後。" },
          { en:"<strong>Distrust your first impression of anything served too cold.</strong> Below about 8 °C most of what a sake has to say is simply inaudible.",
            ja:"<strong>冷やしすぎたものの第一印象は疑ってよい。</strong>およそ8℃を下回ると、その酒が語ろうとしていることの大半は単に聞こえなくなる。",
            zh:"<strong>對過冷供飲之酒的第一印象，值得懷疑。</strong>低於約 8°C，一款酒想說的話大半根本聽不見。" },
          { en:"<strong>Learn the faults before the virtues.</strong> Recognising hine-ka and light damage will improve your buying more than learning to distinguish nine kinds of melon.",
            ja:"<strong>美点より先に欠点を覚える。</strong>老香と日光臭を見分けられるようになることは、九種類のメロンを言い分けられるようになることよりも、買い物を確実に良くする。",
            zh:"<strong>先學缺陷，再學優點。</strong>能辨識老香與日光臭，對選購的助益遠大於能分辨九種哈密瓜。" }
        ] }
      ]
    },

{ t:"section", id:"faults",
      title:{ en:"Faults and off-flavours", ja:"欠点と異臭", zh:"缺陷與異味" }, jp:"オフフレーバー",
      body:[
        { t:"p", text:{
          en:"Learning the faults is faster than learning the virtues, because there are fewer of them and each has a cause you can name. Most of what a drinker meets in a badly kept bottle is on this list.",
          ja:"美点を覚えるより欠点を覚えるほうが速い。数が少なく、それぞれに名指しできる原因があるからである。粗雑に扱われた瓶で飲み手が出会うものの大半は、この一覧に載っている。",
          zh:"學缺陷比學優點更快，因為缺陷數量較少，而且每一項都有可指名的成因。飲者在保存不良的酒瓶中所遇到的，大多都在這份清單上。" } },
        { t:"table",
          cols:[{en:"Fault",ja:"欠点",zh:"缺陷"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Smells / tastes of",ja:"感じられ方",zh:"氣味或口感"},{en:"Cause",ja:"原因",zh:"成因"}],
          jpCols:[1],
          rows:[
            [{en:"Hine-ka",ja:"ひね香",zh:"老化臭"},"老ね香",
             {en:"Boiled cabbage, gas, wet cardboard, old caramel",ja:"煮た菜、ガス臭、湿った段ボール、古いカラメル",zh:"煮甘藍、瓦斯味、濕紙板、老焦糖"},
             {en:"Heat and time. The main compound is DMTS. The commonest fault in exported sake by a wide margin, and almost always a storage failure rather than a brewing one.",ja:"熱と時間。主たる成分はDMTSである。輸出された酒に見られる欠点として圧倒的に多く、そのほとんどは造りではなく保管の失敗である。",zh:"熱與時間。主要成分為 DMTS。是出口清酒中出現頻率遠高於其他的缺陷，且幾乎總是保存失誤而非釀造失誤。"}],
            [{en:"Nama-hine",ja:"生老ね",zh:"生老化"},"生老ね",
             {en:"Sour milk, wet grain, a flat sharpness",ja:"酸っぱい乳、濡れた穀物、平たい鋭さ",zh:"酸敗乳品、濕穀物、扁平的銳利感"},
             {en:"An unpasteurised sake that has been kept too warm or too long. Live enzymes kept working.",ja:"生酒を暖かく、あるいは長く置きすぎた場合に生じる。生きた酵素が働き続けた結果である。",zh:"生酒被存放得太溫暖或太久。活性酵素持續作用所致。"}],
            [{en:"Nikkō-shū",ja:"日光臭",zh:"日光臭"},"日光臭",
             {en:"Burnt rubber, struck match, cabbage",ja:"焦げたゴム、擦ったマッチ、菜の匂い",zh:"燒焦橡膠、劃過的火柴、甘藍味"},
             {en:"Ultraviolet light on the bottle, sometimes within hours. This is why sake is sold in brown or green glass and stored in the dark.",ja:"瓶に当たった紫外線による。数時間で生じることもある。日本酒が茶や緑の瓶で売られ、暗所に置かれる理由である。",zh:"瓶身受紫外線照射所致，有時數小時即產生。這正是清酒以褐色或綠色玻璃瓶販售並避光存放的原因。"}],
            [{en:"Tsuwari-ka",ja:"つわり香",zh:"つわり香"},"ツワリ香",
             {en:"Buttery, butterscotch, popcorn",ja:"バター、バタースコッチ、ポップコーン",zh:"奶油、太妃糖、爆米花"},
             {en:"Diacetyl from lactic bacteria activity. A brewing fault rather than a storage one; rare in modern sake.",ja:"乳酸菌の活動によるジアセチルである。保管ではなく造りの欠点であり、現代の酒ではまれである。",zh:"乳酸菌活動產生的雙乙醯。屬釀造缺陷而非保存缺陷；現代清酒中相當罕見。"}],
            [{en:"Mokka",ja:"木香",zh:"木香"},"木香様異臭",
             {en:"Pencil shavings, sawdust, plywood",ja:"鉛筆の削りかす、鋸屑、合板",zh:"鉛筆屑、鋸木屑、夾板"},
             {en:"Aldehyde-related, from oxidation during production. A brewing fault, and quite distinct from the deliberate cedar aroma of taru-zake.",ja:"製造中の酸化に伴うアルデヒド由来である。造りの欠点であり、樽酒の意図された杉の香りとはまったく別のものである。",zh:"與生產過程中氧化所生的醛類有關。屬釀造缺陷，與樽酒刻意營造的杉木香截然不同。"}],
            [{en:"Hi-ochi",ja:"火落ち",zh:"火落"},"火落ち",
             {en:"Cloudy, sour, a stale dairy note",ja:"濁り、酸味、古い乳のような匂い",zh:"混濁、發酸、陳腐乳味"},
             {en:"Alcohol-tolerant lactobacilli surviving in the finished sake. Pasteurisation exists to prevent exactly this, so it is now rare — but it is the reason pasteurisation exists.",ja:"アルコール耐性の乳酸菌が仕上がった酒のなかで生き延びた結果である。火入れはまさにこれを防ぐために存在するため、いまではまれである。しかし、火入れが存在する理由そのものである。",zh:"耐酒精的乳酸桿菌在成酒中存活所致。火入正是為防止此事而存在，因此如今罕見——但它正是火入之所以存在的理由。"}],
            [{en:"Zatsumi",ja:"雑味",zh:"雜味"},"雑味",
             {en:"A coarse, muddy, bitter-savoury heaviness with no clear edge",ja:"粗く濁った、苦く重い、輪郭のない厚み",zh:"粗糙混濁、苦而厚重、缺乏輪廓"},
             {en:"Excess amino acids and outer-layer compounds. Not spoilage — a choice about milling and dissolution that has gone too far.",ja:"アミノ酸と外層由来成分の過剰による。腐敗ではなく、精米と溶けについての判断が行き過ぎた結果である。",zh:"胺基酸與外層成分過多所致。不是腐敗，而是關於精米與溶解的判斷走過了頭。"}]
          ] },
        { t:"note", label:{en:"Fault or style?",ja:"欠点か個性か",zh:"缺陷還是風格？"}, text:{
          en:"Several of these sit on a line. A trace of hine in a deliberately aged koshu is character; the same note in a six-month-old ginjō is damage. Wood aroma from a cedar cask is intended; the same family of aldehydes arising from oxidation is not. The test is whether the brewer meant it and whether the rest of the sake supports it — which is why tasting is a judgement rather than a checklist.",
          ja:"これらのいくつかは境界の上にある。意図して寝かせた古酒のわずかなひねは個性であり、半年の吟醸に同じ香りがあれば損傷である。杉樽の木の香りは意図されたものだが、酸化から生じた同じ系統のアルデヒドはそうではない。判定の基準は、造り手がそれを意図したか、そして酒の他の部分がそれを支えているかである。利き酒が点検表ではなく判断である理由がここにある。",
          zh:"其中數項落在界線上。一款刻意熟成的古酒帶一絲老化香是個性；同樣的氣味出現在半年的吟釀上則是損傷。杉木樽帶來的木香是刻意為之；由氧化而生的同一族醛類則不是。判準在於釀造者是否有意為之，以及酒的其餘部分是否支撐得住——這正是品飲是一種判斷而非一份檢查清單的原因。" } }
      ]
    },

    { t:"section", id:"flights",
      title:{ en:"Building a tasting", ja:"利き酒を組み立てる", zh:"組織一場品飲" }, jp:"比較の設計",
      body:[
        { t:"p", text:{
          en:"You learn far more from two sake side by side than from ten in sequence. A good comparison holds everything constant except one variable, and the whole point is to isolate that variable well enough that you can recognise it again alone.",
          ja:"十本を順に飲むより、二本を並べて飲むほうがはるかに多くを学べる。良い比較は、一つの変数を除いてすべてを揃える。要点は、その変数を十分に切り出し、次はそれ一本だけでも見分けられるようにすることである。",
          zh:"兩款酒並排比較，學到的遠多於十款依序品飲。好的比較會固定其他一切、只變動一個變數；重點在於把那個變數切分得夠清楚，使你日後單獨遇上時仍能辨認。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Six comparisons worth doing",ja:"試す価値のある六つの比較",zh:"值得一試的六組比較"}, jp:"二本立て",
            body:[{ t:"ol", items:[
              { en:"<strong>Junmai vs honjōzō</strong> from the same brewery — isolates added alcohol.",ja:"<strong>同じ蔵の純米と本醸造</strong>——アルコール添加を切り出す。",zh:"<strong>同一酒藏的純米與本釀造</strong>——分離出添加酒精的影響。" },
              { en:"<strong>Ginjō vs daiginjō</strong> from the same brewery — isolates milling.",ja:"<strong>同じ蔵の吟醸と大吟醸</strong>——精米歩合を切り出す。",zh:"<strong>同一酒藏的吟釀與大吟釀</strong>——分離出精米步合的影響。" },
              { en:"<strong>Sokujō vs kimoto</strong> junmai — isolates the starter method, the single largest stylistic fork in sake.",ja:"<strong>速醸と生酛の純米</strong>——酒母の型を切り出す。日本酒における最大の様式の分岐である。",zh:"<strong>速釀與生酛的純米</strong>——分離出酒母工法，這是清酒最大的一道風格分岔。" },
              { en:"<strong>Nama vs pasteurised</strong> of the same sake — isolates heat treatment.",ja:"<strong>同じ酒の生と火入れ</strong>——加熱の有無を切り出す。",zh:"<strong>同一款酒的生酒與火入</strong>——分離出加熱處理的影響。" },
              { en:"<strong>Yamada Nishiki vs Ōmachi</strong> from one brewery, same yeast and milling — isolates rice.",ja:"<strong>同じ蔵・同じ酵母・同じ精米の山田錦と雄町</strong>——米を切り出す。",zh:"<strong>同一酒藏、同酵母、同精米的山田錦與雄町</strong>——分離出米的影響。" },
              { en:"<strong>The same sake at 10°C and 45°C</strong> — isolates temperature, and is the cheapest experiment on this list.",ja:"<strong>同じ酒を10度と45度で</strong>——温度を切り出す。この一覧で最も安価な実験である。",zh:"<strong>同一款酒在 10°C 與 45°C</strong>——分離出溫度，也是本表中最便宜的實驗。" }
            ] }] },
          { h:{en:"Practical rules",ja:"実務上の規則",zh:"實務規則"}, jp:"進め方",
            body:[{ t:"ul", plain:true, items:[
              { en:"Pour small — 20 to 30 ml is plenty, and lets you compare four sake on one small bottle.",ja:"少なく注ぐ。20〜30ミリリットルで十分であり、小瓶一本で四種を比べられる。",zh:"少量倒酒——20 至 30 毫升就夠，讓你用一支小瓶比較四款酒。" },
              { en:"Identical glasses, or the comparison is meaningless.",ja:"同じ形の器を使うこと。でなければ比較の意味がない。",zh:"使用相同的酒杯，否則比較毫無意義。" },
              { en:"Lightest and coolest first, then heavier, then warmed.",ja:"軽く冷たいものから始め、重いもの、そして燗へ。",zh:"先輕盈冰涼者，再厚重者，最後溫飲。" },
              { en:"Water and plain rice or bread between. Never anything salty or sweet.",ja:"あいだに水と、飯かパンを。塩味や甘味のあるものは避けること。",zh:"中間喝水並吃白飯或麵包。切勿吃鹹或甜的東西。" },
              { en:"Write one line per sake before you discuss it with anyone.",ja:"誰かと語る前に、一本につき一行を書くこと。",zh:"在與人討論之前，先為每款酒寫下一行。" },
              { en:"Come back to the first one at the end. Your palate has moved.",ja:"最後にもう一度、最初の一本に戻ること。舌は動いている。",zh:"最後回頭再喝第一款。你的味覺已經移動了。" }
            ] }] }
        ] },
        { t:"panel", title:{en:"A tasting note template",ja:"利き酒メモの型",zh:"品飲筆記範本"}, tint:"ash",
          body:[
            { t:"ul", plain:true, items:[
              { en:"<strong>Appearance</strong> — colourless / straw / gold / amber; clear, hazy or cloudy.",ja:"<strong>色</strong>——無色／麦藁／黄金／琥珀。澄明、微濁、濁り。",zh:"<strong>外觀</strong>——無色／麥稈／金黃／琥珀；澄清、微濁或混濁。" },
              { en:"<strong>Aroma</strong> — one fruit, one grain or dairy note, one other. Intensity: quiet, moderate, loud.",ja:"<strong>香り</strong>——果実を一つ、穀物か乳の系を一つ、その他を一つ。強さは、静か・中程度・高い。",zh:"<strong>香氣</strong>——一種果香、一種穀物或乳製香、一種其他。強度：安靜、中等、高揚。" },
              { en:"<strong>Attack</strong> — what arrives first: sweetness, acidity, or savour.",ja:"<strong>入り</strong>——最初に来るもの。甘み、酸、旨味のいずれか。",zh:"<strong>入口</strong>——最先到來的是什麼：甜、酸，或旨味。" },
              { en:"<strong>Body</strong> — thin, medium, full; and whether it feels dry or sweet regardless of the numbers.",ja:"<strong>厚み</strong>——薄い、中程度、厚い。そして数値とは別に、辛く感じるか甘く感じるか。",zh:"<strong>酒體</strong>——單薄、中等、飽滿；以及不論數據如何，它嚐起來偏辛還是偏甜。" },
              { en:"<strong>Finish</strong> — short or long, clean or lingering, and what the last thing you taste is.",ja:"<strong>後口</strong>——短いか長いか、切れるか残るか、そして最後に残る味は何か。",zh:"<strong>收口</strong>——短或長、俐落或綿延，以及最後留下的味道是什麼。" },
              { en:"<strong>Verdict</strong> — one sentence on what you would eat with it, and at what temperature.",ja:"<strong>結び</strong>——何と、どの温度で飲むかを一文で。",zh:"<strong>結論</strong>——用一句話寫下你會配什麼吃、在什麼溫度下喝。" }
            ] }
          ] }
      ]
    },

{ t:"section", id:"physiology",
      title:{ en:"What is actually happening when you taste", ja:"味わうとき、実際に起きていること", zh:"品飲時，實際發生了什麼" }, jp:"感覚の生理",
      body:[
        { t:"figure",
          caption:{
            en:"Two routes to the same receptors. Sniffing the glass sends volatiles up the nostril; holding the sake in the mouth and then breathing out sends warmed volatiles up the back of the throat to the same patch of tissue behind the bridge of the nose. The second route carries far more, because the liquid has been warmed to body temperature and agitated, and it is the one most people never deliberately use. The tongue, meanwhile, is only reporting five things. Everything else in a tasting note arrived through the nose from the inside.",
            ja:"同じ受容体へ至る二つの道。杯を嗅げば揮発成分は鼻孔を昇る。酒を口に含み、そして息を吐けば、温められた揮発成分は喉の奥を通って、鼻梁の裏の同じ組織へ昇る。二つめの道のほうがはるかに多くを運ぶ。液が体温まで温められ、かき混ぜられているからである。そしてそれは、ほとんどの人が意図して使うことのない道である。その間、舌が報せているのは五つだけである。利き酒の覚え書きにあるそれ以外のすべては、内側から鼻を通って届いたものである。",
            zh:"通往同一組受體的兩條路徑。嗅聞杯口，揮發物沿鼻孔上行；把酒含在口中再呼氣，被體溫加熱的揮發物則經喉嚨後方上行，抵達鼻樑背後同一片組織。第二條路徑攜帶的訊息遠多於第一條，因為液體已被加溫到體溫並經過攪動——而它正是多數人從未刻意使用的那一條。與此同時，舌頭回報的只有五件事。品飲筆記上其餘的一切，都是從內側經由鼻子抵達的。" },
          svg: function (lang, L) {
            var W = 760, H = 386;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* the two routes in */
            s += '<rect x="84" y="62" width="266" height="28" fill="#7C8E99"/>';
            s += '<text x="217" y="81" text-anchor="middle" font-size="11.5" fill="#FBFAF7">' +
                 (lang === "ja" ? "嗅覚の受容体" : lang === "zh" ? "嗅覺受體" : "the olfactory receptors") + '</text>';
            var routes = [
              { cx:140, bw:14, c:"#8B9BA6", n:"1",
                src:{ en:"the glass", ja:"杯", zh:"杯" }, jp:"上立ち香",
                at:[ { en:"cool, as poured", ja:"注いだままの温度", zh:"斟出時的溫度" },
                     { en:"still", ja:"動かない", zh:"靜止不動" },
                     { en:"a little reaches you", ja:"届くのは僅か", zh:"抵達的只有少許" } ] },
              { cx:287, bw:46, c:"#A08F73", n:"2",
                src:{ en:"the mouth", ja:"口中", zh:"口中" }, jp:"含み香・戻り香",
                at:[ { en:"warmed to body heat", ja:"体温まで温まる", zh:"被加溫到體溫" },
                     { en:"agitated on the tongue", ja:"舌の上でかき混ぜられる", zh:"在舌上被攪動" },
                     { en:"far more reaches you", ja:"届くのははるかに多い", zh:"抵達的多得多" } ] }
            ];
            var ri, rj;
            for (ri = 0; ri < routes.length; ri++) {
              var rt = routes[ri];
              s += '<rect x="' + (rt.cx - rt.bw / 2) + '" y="102" width="' + rt.bw + '" height="110" fill="' + rt.c + '"/>';
              s += '<path d="M' + (rt.cx - rt.bw / 2 - 9) + ' 102 L' + (rt.cx + rt.bw / 2 + 9) + ' 102 L' + rt.cx + ' 90 Z" fill="' + rt.c + '"/>';
              s += '<rect x="' + (rt.cx - 52) + '" y="212" width="104" height="38" fill="#F2EFE8" stroke="#B4AC9C"/>';
              s += '<text x="' + rt.cx + '" y="230" text-anchor="middle" font-size="12" fill="#201E1B">' + L(rt.src) + '</text>';
              s += '<text x="' + rt.cx + '" y="244" text-anchor="middle" font-size="9" fill="#8B857C">' + rt.jp + '</text>';
              s += '<rect x="' + (rt.cx - 8) + '" y="148" width="16" height="16" fill="#FBFAF7" stroke="#8B857C"/>';
              s += '<text x="' + rt.cx + '" y="160" text-anchor="middle" font-size="10" font-weight="600" fill="#55504A">' + rt.n + '</text>';
              for (rj = 0; rj < rt.at.length; rj++) {
                s += '<text x="' + rt.cx + '" y="' + (270 + rj * 15) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(rt.at[rj]) + '</text>';
              }
            }
            s += '<text x="84" y="' + (62 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "同じ受容体・入り方は二つ" : lang === "zh" ? "同一組受體・兩種進入方式" : "THE SAME RECEPTORS, TWO WAYS IN") + '</text>';
            s += '<text x="217" y="332" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "帯の幅は、届く量のちがいである" : lang === "zh" ? "色帶的寬度，代表抵達量的差異" : "the width of each band is how much actually arrives") + '</text>';
            /* what each organ reports */
            function panel(x, y, w, h, title, sub, items, fill) {
              var o = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              o += '<text x="' + (x + 18) + '" y="' + (y + 26) + '" font-size="12.5" fill="#201E1B">' + title + '</text>';
              o += '<text x="' + (x + w - 18) + '" y="' + (y + 26) + '" text-anchor="end" font-size="9" fill="#8B857C">' + sub + '</text>';
              o += '<line x1="' + x + '" y1="' + (y + 38) + '" x2="' + (x + w) + '" y2="' + (y + 38) + '" stroke="#EFEDE7"/>';
              var cx = x + 18, cy = y + 58, k;
              for (k = 0; k < items.length; k++) {
                var tw = items[k].length * (items[k].charCodeAt(0) > 0x2E80 ? 10.5 : 5.6) + 18;
                if (cx + tw > x + w - 14) { cx = x + 18; cy += 26; }
                o += '<rect x="' + cx + '" y="' + (cy - 13) + '" width="' + tw.toFixed(1) + '" height="20" fill="' + fill + '" stroke="#CDC6B9"/>';
                o += '<text x="' + (cx + tw / 2).toFixed(1) + '" y="' + (cy + 1) + '" text-anchor="middle" font-size="10.5" fill="#55504A">' + items[k] + '</text>';
                cx += tw + 7;
              }
              return o;
            }
            var five = { en:["sweet", "sour", "salty", "bitter", "umami"], ja:["甘味", "酸味", "塩味", "苦味", "旨味"], zh:["甜", "酸", "鹹", "苦", "鮮"] };
            var many = { en:["pear", "banana", "melon", "steamed rice", "mushroom", "caramel", "soy", "cream", "aniseed", "wet stone", "dried fig", "roasted nut"],
                         ja:["洋梨", "バナナ", "メロン", "蒸米", "茸", "カラメル", "醤油", "乳", "茴香", "濡れた石", "乾し無花果", "焙じた実"],
                         zh:["洋梨", "香蕉", "哈密瓜", "蒸米", "菇類", "焦糖", "醬油", "奶香", "茴香", "濕石", "無花果乾", "烘堅果"] };
            s += panel(376, 58, 354, 88,
                       (lang === "ja" ? "舌が報せるもの" : lang === "zh" ? "舌頭回報的" : "what the tongue reports"),
                       (lang === "ja" ? "五つ" : lang === "zh" ? "五種" : "five"),
                       five[lang] || five.en, "#E2D8C6");
            s += panel(376, 162, 354, 182,
                       (lang === "ja" ? "鼻が報せるもの" : lang === "zh" ? "鼻子回報的" : "what the nose reports"),
                       (lang === "ja" ? "その他すべて" : lang === "zh" ? "其餘的一切" : "everything else"),
                       many[lang] || many.en, "#E4EAEC");
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "鼻が詰まれば残るのは左の五つだけである。それが、風邪のときに酒がほとんど無に感じられる理由である。"
                  : lang === "zh" ? "鼻子一塞，剩下的就只有左邊那五種——這就是感冒時一支酒嚐起來幾乎什麼都不剩的原因。"
                  : "With a blocked nose only the five on the left survive, which is why sake tastes like almost nothing when you have a cold.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Most of what people call taste is smell, most of that smell arrives through the back of the throat rather than the nose, and almost everything about the experience is affected by temperature, by the previous mouthful, and by what you were told before you drank. Understanding the mechanics makes a taster far less confident and considerably more accurate.",
          ja:"人が味と呼ぶものの大半は嗅覚であり、その嗅覚の大半は鼻先ではなく喉の奥から届く。そして経験のほとんどすべてが、温度に、直前の一口に、そして飲む前に何を告げられたかに影響される。仕組みを理解することは、利き手をはるかに謙虚にし、そしてかなり正確にする。",
          zh:"人們所謂的「味道」，大部分其實是嗅覺；而那份嗅覺又大多不是從鼻孔、而是從喉嚨後方抵達的。整段體驗幾乎所有面向都受溫度、前一口，以及你在喝之前被告知了什麼所影響。理解這套機制，會讓品飲者自信大減，而準確度大增。" } },

        { t:"defs", items:[
          { term:{ en:"Retronasal olfaction", ja:"戻り香", zh:"鼻後嗅覺" }, jp:"口中香", romaji:"kōchū-kō",
            def:{ en:"The tongue reports five things: sweet, sour, salty, bitter, umami. Everything else — pear, banana, rice, mushroom, caramel — is smelled, and it is smelled from inside, as warmed volatiles travel up from the back of the mouth to the olfactory receptors when you exhale. This is why holding sake in the mouth for a moment and then breathing out through the nose reveals so much more than sniffing the glass, and why a blocked nose flattens a sake to almost nothing.",
              ja:"舌が報せるのは五つである——甘、酸、塩、苦、旨。それ以外のすべて——洋梨、バナナ、米、茸、カラメル——は嗅がれており、しかも内側から嗅がれている。温められた揮発成分が、息を吐くときに口の奥から嗅覚の受容体へ昇るのである。酒を一瞬口に含み、鼻から息を抜くことが、杯を嗅ぐよりはるかに多くを明かす理由であり、鼻が詰まれば酒がほとんど無に平板化する理由でもある。",
              zh:"舌頭回報的只有五件事：甜、酸、鹹、苦、鮮。其餘的一切——洋梨、香蕉、米、菇類、焦糖——都是聞出來的，而且是從內側聞到的：當你呼氣時，被口腔加溫的揮發物會自口腔後方上行至嗅覺受體。這正是為什麼把酒含在口中片刻、再用鼻子呼氣，能揭露的遠比嗅聞杯口更多；也是為什麼鼻塞時，一支酒會被壓平到幾乎什麼也不剩。" } },
          { term:{ en:"Volatility rises with temperature", ja:"揮発は温度とともに増す", zh:"揮發性隨溫度上升" }, jp:"温度と香り", romaji:"ondo to kaori",
            def:{ en:"Every ten degrees roughly doubles the vapour pressure of the aromatic compounds, so a sake at 45 °C releases dramatically more aroma than the same sake at 10 °C — and releases it faster, so it also fades faster. At the same time, warmth suppresses the perception of sweetness slightly, amplifies umami and bitterness, and reduces the perceived sharpness of acid. This is the whole mechanism behind the ten named serving temperatures: they are not tradition, they are a volatility curve with names on it.",
              ja:"およそ十度ごとに香気成分の蒸気圧は倍になる。ゆえに45℃の酒は、同じ酒の10℃のときよりはるかに多くの香りを放ち、しかも速く放つから、速く消えもする。同時に、温かさは甘味の知覚をわずかに抑え、旨味と苦味を強め、酸の鋭さを和らげる。十の名を持つ酒の温度の背後にある仕組みは、これがすべてである——伝統ではなく、名の付いた揮発の曲線なのである。",
              zh:"每升高十度，香氣化合物的蒸氣壓大約加倍；因此 45 °C 的酒所釋放的香氣，遠多於同一支酒在 10 °C 時，且釋放得更快，也因此消散得更快。同時，溫度會略微壓抑甜味的感知、放大旨味與苦味，並降低酸的銳利感。這就是十種有名字的供飲溫度背後的全部機制：它們不是傳統，而是一條被命名的揮發曲線。" } },
          { term:{ en:"Adaptation and fatigue", ja:"順応と疲労", zh:"適應與疲勞" }, jp:"感覚疲労", romaji:"kankaku hirō",
            def:{ en:"An olfactory receptor stops responding to a continuous stimulus within a minute or two — which is why the third sniff of a glass tells you less than the first, and why after twenty samples everything smells the same. Professional panels manage this with short sessions, forced breaks, water, and a strict cap on the number of samples. For a drinker at home the practical rule is that the first three sakes of an evening are the ones you can actually judge.",
              ja:"嗅覚の受容体は、連続する刺激に対して一、二分のうちに応答をやめる。杯の三度目の一嗅ぎが最初より少なくしか語らない理由であり、二十点を過ぎればすべてが同じ匂いに感じられる理由である。専門の審査はこれを、短い時間、強制の休憩、水、そして試料数の厳格な上限によって御する。家で飲む者にとっての実際的な規則は、一晩のうち最初の三本だけが本当に判断できるものである、ということである。",
              zh:"嗅覺受體對持續刺激會在一兩分鐘內停止反應——這正是為什麼第三次嗅聞一杯酒告訴你的比第一次少，也是為什麼喝過二十個樣品後一切聞起來都一樣。專業評審以短時段、強制休息、飲水與嚴格的樣品數上限來管理這件事。對在家飲用的人而言，實用的規則是：一個晚上真正能判斷的，只有最前面三支。" } },
          { term:{ en:"Expectation is an ingredient", ja:"期待もまた原料である", zh:"期待也是一種原料" }, jp:"先入観", romaji:"sennyūkan",
            def:{ en:"Knowing the price, the label or the brewery measurably changes what people report tasting, and the effect is large enough to survive in careful experiments across wine, beer and coffee. It is not a failure of honesty; expectation genuinely alters perception. The only defence is to cover the bottles. This is why every serious competition is blind, and it is a good reason to pour for guests from a jug rather than announcing what they are about to drink.",
              ja:"価格、ラベル、蔵を知ることは、人が味わったと報告する内容を測定可能なほどに変える。その効果は、ワイン、ビール、珈琲にわたる慎重な実験を生き延びるほど大きい。誠実さの欠如ではない。期待は本当に知覚を変えるのである。唯一の防御は瓶を覆うことである。真剣な品評会がすべて目隠しである理由であり、客に注ぐとき、これから飲むものを告げるより片口から注ぐほうがよい、確かな理由でもある。",
              zh:"知道價格、酒標或酒藏，會可測量地改變人們回報自己嚐到了什麼；這個效應大到足以在葡萄酒、啤酒與咖啡的嚴謹實驗中一再重現。這不是誠實與否的問題——期待真的會改變知覺。唯一的防禦是把瓶子遮起來。這正是所有認真的評鑑都採盲測的原因，也是替客人斟酒時，用片口斟出、而非先宣布他們要喝什麼的好理由。" } },
          { term:{ en:"People differ, permanently", ja:"人は恒常的に異なる", zh:"人與人之間存在恆久差異" }, jp:"個人差", romaji:"kojinsa",
            def:{ en:"Detection thresholds for individual compounds vary by orders of magnitude between people, and specific anosmias — being unable to smell one particular molecule while smelling everything else normally — are common. Two people can taste the same sake carefully and honestly and disagree completely, not because one is wrong but because one of them cannot smell the compound the other is describing. A panel of ten exists to average this out; a single expert cannot.",
              ja:"個々の化合物の閾値は人によって桁で異なり、特定の分子だけが嗅げず他はすべて正常に嗅げるという特異的無嗅覚も珍しくない。二人が同じ酒を丁寧に、正直に味わい、まったく食い違うことがある。一方が誤っているからではなく、一方が、他方の語る化合物を嗅げないからである。十人の審査団は、これを平均するために存在する。一人の名人にはそれができない。",
              zh:"不同人對個別化合物的偵測閾值可以相差好幾個數量級，而「特異性嗅覺缺失」——聞不到某一種特定分子，其餘一切卻正常——相當常見。兩個人可以同樣仔細、同樣誠實地品嚐同一支酒，卻完全不同意；不是因為有人錯了，而是因為其中一人聞不到另一人正在描述的那個化合物。十人的評審團正是為了把這一點平均掉而存在；一位專家做不到。" } }
        ] }
      ] },

    { t:"section", id:"exercises",
      title:{ en:"Five exercises that teach more than reading does", ja:"読むより教える五つの練習", zh:"比閱讀更有用的五個練習" }, jp:"訓練",
      body:[
        { t:"p", text:{
          en:"Each of these isolates one variable using bottles and equipment you already have. Done once, they permanently change how you read a label, because you will have felt the difference the label is describing rather than been told about it.",
          ja:"いずれも、すでに手元にある瓶と道具で一つの変数を切り出す。一度行えば、ラベルの読み方は恒久的に変わる。ラベルが記している差を、告げられるのではなく、自ら感じたことになるからである。",
          zh:"以下每一項，都用你已經擁有的酒瓶與器具隔離出一個變因。做過一次，你讀酒標的方式就會永久改變——因為酒標所描述的那個差異，你是親身感受過的，而不是被告知的。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"The temperature ladder", ja:"温度の梯子", zh:"溫度階梯" }, jp:"同一酒・四温度", romaji:"dōitsu-shu, yon-ondo",
            meta:{ en:"One bottle, four glasses", ja:"一本の瓶、四つの杯", zh:"一支酒，四只杯" },
            text:{ en:"Pour four small glasses from the same bottle. Leave one in the fridge, one on the table, warm one in a bowl of hot tap water to about 40 °C and one to about 50 °C. Taste in that order, then back down. Most people are surprised by how much moves — and a substantial minority discover that the sake they thought they disliked was simply being served cold.",
              ja:"同じ瓶から小さな杯を四つ注ぐ。一つは冷蔵庫に、一つは卓に、一つは湯を張った器で40℃ほどに、もう一つは50℃ほどに温める。その順で味わい、そして戻る。動く幅の大きさに多くの人が驚き、そして少なからぬ人が、嫌いだと思っていた酒が、単に冷たく供されていただけだと気づく。",
              zh:"從同一支酒倒出四小杯。一杯放冰箱，一杯放桌上，一杯用熱水盆溫到約 40 °C，一杯溫到約 50 °C。依序品嚐，再倒著喝回來。多數人會對變化幅度之大感到驚訝；而相當一部分人會發現，自己以為不喜歡的那支酒，只是被冰著端上來而已。" } },
          { n:"2", title:{ en:"The dilution test", ja:"加水の試験", zh:"加水測試" }, jp:"割水", romaji:"warimizu",
            meta:{ en:"A genshu, and a jug of water", ja:"原酒と、水差し一つ", zh:"一支原酒與一壺水" },
            text:{ en:"Take a genshu at around 18% and make three glasses: undiluted, diluted with one part water to nine, and one part to five. You are performing the last operation of the brewery yourself, and you will find that the strongest version is not automatically the best — dilution changes the balance of sweetness, alcohol heat and aroma, and the brewery's choice of final strength is a real decision rather than a formality.",
              ja:"18%前後の原酒を取り、三つの杯を作る——そのまま、水一に対し酒九、水一に対し酒五。あなたは蔵の最後の作業を自ら行っている。そして、最も強い版が自動的に最良ではないことに気づくだろう。加水は甘味とアルコールの熱と香りの均衡を変え、最終のアルコール分についての蔵の選択は、形式ではなく実質の判断なのである。",
              zh:"取一支約 18% 的原酒，做出三杯：原液、以一份水兌九份酒、以一份水兌五份酒。你正在親手執行酒藏的最後一道工序；而你會發現，最烈的那一版並不自動是最好的——加水改變了甜味、酒精灼熱感與香氣的平衡，酒藏對最終酒精度的選擇，是實質的判斷而非形式。" } },
          { n:"3", title:{ en:"The oxidation clock", ja:"酸化の時計", zh:"氧化的時鐘" }, jp:"開栓後の変化", romaji:"kaisen-go",
            meta:{ en:"One glass, left standing", ja:"一つの杯を、置いておく", zh:"一只杯，靜置" },
            text:{ en:"Pour two glasses. Drink one immediately; leave the other uncovered on the table and come back to it after an hour, and again after three. You are watching ester hydrolysis and oxidation happen on a timescale you can perceive, and you will afterwards understand exactly why an opened bottle should be recapped and refrigerated rather than merely believing it.",
              ja:"二つの杯に注ぐ。一つは直ちに飲み、もう一つは蓋をせず卓に残し、一時間後に、そして三時間後に戻る。エステルの加水分解と酸化が、知覚しうる時間の尺度で起こるのを見ているのである。そののち、開けた瓶になぜ栓をして冷蔵すべきかを、信じるのではなく理解することになる。",
              zh:"倒兩杯。一杯立刻喝掉；另一杯不加蓋地留在桌上，一小時後回來嚐，三小時後再嚐一次。你正在以可感知的時間尺度觀看酯類水解與氧化的發生；此後你將真正理解——而不只是相信——為什麼開了瓶就該重新封蓋並冷藏。" } },
          { n:"4", title:{ en:"The acid spike", ja:"酸を足す", zh:"加酸實驗" }, jp:"酸度の効果", romaji:"sando",
            meta:{ en:"A neutral sake and a lemon", ja:"素直な酒と、檸檬一つ", zh:"一支平實的酒與一顆檸檬" },
            text:{ en:"Take a plain junmai and add, to one of two glasses, three or four drops of lemon juice — enough to shift the acidity measurably without making it taste of lemon. The spiked glass will read drier, longer and more structured. This is the single fastest way to understand why acidity matters more than the sake meter value, and why a kimoto behaves as it does.",
              ja:"素朴な純米を取り、二つの杯のうち一方に檸檬の汁を三、四滴——檸檬の味にはならず、しかし酸度が測れるほどに動く量を——加える。加えたほうは、より辛口に、より長く、より骨格があるように読まれる。日本酒度より酸度が重要である理由、そして生酛がなぜあのように振る舞うのかを理解する、最も速い方法である。",
              zh:"取一支樸素的純米，在兩杯中的一杯裡滴入三、四滴檸檬汁——足以讓酸度出現可測變化，但不至於嚐出檸檬味。加了酸的那杯會讀來更辛、更悠長、更有骨架。這是理解「為何酸度比日本酒度更重要」以及「生酛為何如此表現」最快的方法。" } },
          { n:"5", title:{ en:"The covered bottle", ja:"覆った瓶", zh:"蓋住的酒瓶" }, jp:"目隠し", romaji:"mekakushi",
            meta:{ en:"Two bottles and a friend", ja:"二本の瓶と、一人の友", zh:"兩支酒與一位朋友" },
            text:{ en:"Have someone else pour two sakes of very different price into unmarked glasses, and write your notes before you learn which is which. Do this once and you will stop trusting your own confident judgements about expensive bottles — which is not a loss. It is the beginning of tasting rather than of reading labels.",
              ja:"価格の大きく異なる二本を、誰かに印のない杯へ注いでもらい、どちらがどちらかを知る前に記録を書く。一度これを行えば、高価な瓶についての自らの自信ある判断を信じるのをやめるだろう。それは損失ではない。ラベルを読むことではなく、味わうことの始まりである。",
              zh:"請別人把價格差距很大的兩支酒倒進沒有標記的杯中，在你得知哪杯是哪支之前先寫下筆記。做過一次，你就不會再信任自己對昂貴酒款那些自信滿滿的判斷——這不是損失，而是「品飲」而非「讀酒標」的開始。" } }
        ] },

        { t:"note", text:{
          en:"For the physical vessel these exercises are performed in, see <a href=\"vessels.html\">Cups &amp; Vessels</a> — the assessment cup exists precisely to hold the vessel constant while everything else varies. For the compounds you are chasing, see <a href=\"taste.html\">Chemistry of Flavour</a>.",
          ja:"これらの練習を行う器そのものについては<a href=\"vessels.html\">酒器</a>を参照。利き猪口は、他のすべてが動くなかで器を一定に保つために存在する。追いかけている化合物については<a href=\"taste.html\">味の科学</a>を参照。",
          zh:"關於進行這些練習所用的器皿本身，見<a href=\"vessels.html\">酒器</a>——品評杯的存在，正是為了在其他一切都變動時，把器皿固定住。至於你正在追索的那些化合物，見<a href=\"taste.html\">風味的化學</a>。" } }
      ] },

    { t:"related", items:[
      { href:"taste.html", why:{ en:"What you are actually smelling, named chemically.", ja:"実際に嗅いでいるものを、化学の名で。", zh:"你實際上聞到的東西，用化學的名字稱呼。" } },
      { href:"faults.html", why:{ en:"What to do when something is wrong.", ja:"何かがおかしいときになすこと。", zh:"當某個地方不對勁時該怎麼辦。" } },
      { href:"serving.html", why:{ en:"The temperature to taste at, and why it matters.", ja:"利くべき温度と、それが重要である理由。", zh:"該在什麼溫度下品飲，以及為何要緊。" } },
      { href:"competitions.html", why:{ en:"How the professionals do it, and what they are judging.", ja:"玄人のやり方と、彼らが判じているもの。", zh:"專業評審怎麼做，以及他們在評什麼。" } }
    ] }
  ]
};


/* ---- ------------------------------------------ curriculum */
SAKE.pages["curriculum"] = {
  kicker: { en: "Drinking · 02", ja: "飲む · 02", zh: "品飲 · 02" },
  title:  { en: "Twelve Bottles", ja: "十二本", zh: "十二瓶" },
  jp: "十二週の献立",
  lede: {
    en: "A way of learning this drink that does not involve reading any more of this site. Twelve weeks, two bottles a week, and in each week exactly one thing is different between them. Tasting two sakes that differ in nine ways teaches you nothing, which is why most people who drink a great deal of sake never learn to taste it. Tasting two that differ in one thing teaches you that thing permanently, and twelve of those is a working palate.",
    ja: "この飲み物を学ぶための、これ以上このサイトを読むことを要さぬ道。十二週、週に二本、そして各週において、その二本のあいだで異なるのはちょうど一つである。九つの点で異なる二つの酒を味わっても何も学べない。多くの酒を飲む人の多くが、ついにそれを利けるようにならぬ理由がこれである。一つの点で異なる二つを味わえば、その一つを永く学ぶ。そしてそれが十二あれば、働く舌になる。",
    zh: "一種學習這款酒的方法，而且不需要你再多讀本站任何一頁。十二週，每週兩瓶，而每一週，這兩瓶之間恰好只有一件事不同。品嘗兩支在九個方面都不同的清酒，什麼也學不到——這正是為什麼許多喝了大量清酒的人，始終沒有學會品它。品嘗兩支只在一件事上不同的酒，會把那一件事永久地教給你；而十二件加起來，就是一副能用的舌頭。"
  },
  body: [

    { t:"section", id:"how",
      title:{ en:"How to run it", ja:"どう進めるか", zh:"怎麼進行" }, jp:"やり方",
      body:[
        { t:"ol", items:[
          { en:"<strong>Buy the pair together, from one shop, on one day.</strong> The whole method depends on the two bottles being comparable in everything you are not testing, and a bottle bought six weeks earlier is not.",
            ja:"<strong>二本は一つの店で、同じ日に、一緒に買うこと。</strong>この方法の全体は、試していないあらゆる点において二本が比べうることに拠る。六週前に買った一本は、そうではない。",
            zh:"<strong>兩瓶要一起買，在同一家店、同一天。</strong>整套方法的成立，取決於這兩瓶在「你沒有在測試的一切」上都可比；六週前買的那一瓶不是。" },
          { en:"<strong>Ask the shop for the pair, not for the bottles.</strong> A good shop will find a better pair than a list can, because they know what is on their own shelf. The sentence to use is: <em>I want two bottles that are the same except for one thing, and the thing is X.</em>",
            ja:"<strong>店には瓶ではなく、組を求めること。</strong>良い店は一覧よりも良い組を見つける。自らの棚にあるものを知っているからである。用いるべき一文はこうである。<em>一点を除いて同じ二本がほしい。その一点はXである。</em>",
            zh:"<strong>向店家要的是「一組」，不是「兩瓶」。</strong>好店家找出來的組合會比清單好，因為他們知道自己架上有什麼。可以用的句子是：<em>我想要兩瓶除了一件事之外都一樣的酒，而那件事是 X。</em>" },
          { en:"<strong>Open both at once, pour both at once, and pour small.</strong> Forty millilitres each. You are not drinking them; you are asking them a question, and a full glass of the first one changes the answer the second one gives.",
            ja:"<strong>同時に開け、同時に注ぎ、少なく注ぐこと。</strong>各四十ミリリットル。飲んでいるのではなく、問うているのである。一本目を満たして飲めば、二本目の答えが変わる。",
            zh:"<strong>同時開瓶、同時倒、而且倒得少。</strong>各四十毫升。你不是在喝它們，你是在對它們提問；而把第一支倒滿喝掉，會改變第二支給你的答案。" },
          { en:"<strong>Write one sentence about each, before you compare them.</strong> The order matters: a note written after the comparison is a note about the comparison, not about the sake, and it will be worthless to you in a year.",
            ja:"<strong>比べる前に、それぞれについて一文を書くこと。</strong>順が重要である。比べたのちに書かれた覚書は、酒についてではなく比較についての覚書であり、一年後の自分にとって無価値である。",
            zh:"<strong>在比較它們之前，先為每一支寫下一句話。</strong>順序很重要：比較之後才寫的筆記，寫的是「那次比較」而不是那支酒；一年之後它對你毫無價值。" },
          { en:"<strong>Then warm what is left of both.</strong> Every week, not only the temperature week. Half of what a sake is only becomes visible at forty degrees, and doing this twelve times will teach you more about warming than the week devoted to it.",
            ja:"<strong>そののち、残りを両方とも温めること。</strong>温度の週だけでなく、毎週である。酒の半ばは四十度においてはじめて見える。これを十二度行えば、燗に充てた一週よりも多くを学ぶ。",
            zh:"<strong>然後把兩支剩下的都溫熱。</strong>每一週都做，不只是溫度那一週。一支酒有一半的內容，要到四十度才會現身；做滿十二次，你學到的關於溫酒的事，會比專門給溫度的那一週還多。" }
        ] },

        { t:"note", title:{ en:"What it costs", ja:"かかる費え", zh:"這要花多少" }, text:{
          en:"Twenty-four bottles over three months. Buy in the junmai and junmai ginjō bands rather than higher: the differences this method is designed to show are all fully visible there, and the expensive end mostly varies the same things by less. If the budget is tight, use 300 mL bottles where you can find them, and split each week's pair with somebody — an argument about what you are both tasting is a faster teacher than either of you alone.",
          ja:"三月にわたり二十四本である。上位ではなく純米と純米吟醸の帯で買われたい。この方法が示すために組まれた違いは、いずれもそこで十分に見える。高い側は、たいてい同じものをより小さく変えているにすぎない。費えが厳しければ、見つかる限り三百ミリリットルの瓶を用い、各週の組を誰かと分かたれたい。互いが何を味わっているかをめぐる議論は、いずれか一人よりも速い師である。",
          zh:"三個月二十四瓶。請在純米與純米吟釀這兩個價格帶買，不要更往上：這套方法要呈現的差異，在那裡全都看得很清楚，而高價端多半只是把同樣的東西變動得更小。如果預算吃緊，能找到 300 毫升瓶就用它，並且把每週的那一組和別人分著喝——兩個人為「我們各自嘗到什麼」爭論一番，比任何一個人獨自品飲學得更快。" } }
      ] },

    { t:"section", id:"weeks",
      title:{ en:"The twelve weeks", ja:"十二の週", zh:"十二週" }, jp:"十二週",
      body:[
        { t:"figure",
          caption:{
            en:"The whole programme as a grid. Ten things can differ between two bottles of sake; each row darkens only the one that is allowed to differ that week, and everything else in the row is held as close to constant as a shop can manage. Two rows break the rule and say so: place cannot be changed without changing the house, and the last week changes everything on purpose. Read down a column and you will see how often each variable is the one under test — polishing gets a week to itself and so does yeast, but treatment, which is the single thing most likely to have ruined somebody's first experience of sake, gets two.",
            ja:"献立の全体を一つの格子として。二本の酒のあいだで異なりうるものは十ある。各行は、その週に異なることを許された一つだけを濃くし、行の他のすべては、店の手の届く限り一定に保たれる。二つの行はこの則を破り、そう明記する。土地は蔵を変えずには変えられず、最後の週は意図してすべてを変える。列を縦に読めば、各々の変数が何度試されるかが見える。精米には一週が与えられ、酵母にも一週が与えられる。しかし処理には二週が与えられている。それは、誰かの日本酒との最初の出会いを損なった見込みが最も高い、ただ一つのものだからである。",
            zh:"整套課程作為一張格子。兩瓶清酒之間可以不同的事情有十件；每一列只把「那一週被允許不同的那一件」塗深，該列的其他一切則盡可能被店家維持在固定狀態。有兩列打破了這條規則，而且明說：地方無法在不換酒藏的情況下更換，而最後一週是刻意把一切都換掉。縱著讀一欄，就能看出每個變數被測試的次數——精米有專屬的一週，酵母也有；但「處理」有兩週，因為那是最有可能毀掉某個人第一次喝清酒經驗的那一件事。" },
          svg: function (lang, L) {
            var W = 760, H = 462, X0 = 178, CW = 47, ROWS = 12, RH = 26, TOP = 96;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j;
            var cols = [
              { en:"house", ja:"蔵", zh:"酒藏" },
              { en:"rice", ja:"米", zh:"米" },
              { en:"polish", ja:"精米", zh:"精米" },
              { en:"starter", ja:"酛", zh:"酒母" },
              { en:"yeast", ja:"酵母", zh:"酵母" },
              { en:"alcohol", ja:"添加", zh:"添加" },
              { en:"treatment", ja:"処理", zh:"處理" },
              { en:"age", ja:"熟成", zh:"熟成" },
              { en:"temp.", ja:"温度", zh:"溫度" },
              { en:"strength", ja:"度数", zh:"度數" }
            ];
            var rows = [
              { n:1,  m:[2],    t:{ en:"polishing", ja:"精米歩合", zh:"精米步合" } },
              { n:2,  m:[0,1],  t:{ en:"place", ja:"土地", zh:"地方" } },
              { n:3,  m:[8],    t:{ en:"temperature", ja:"温度", zh:"溫度" } },
              { n:4,  m:[3],    t:{ en:"the starter", ja:"酛の型", zh:"酒母工法" } },
              { n:5,  m:[5],    t:{ en:"added alcohol", ja:"アル添", zh:"添加酒精" } },
              { n:6,  m:[6],    t:{ en:"pasteurisation", ja:"火入れ", zh:"火入" } },
              { n:7,  m:[6],    t:{ en:"what was filtered out", ja:"濾したもの", zh:"濾掉了什麼" } },
              { n:8,  m:[7],    t:{ en:"age", ja:"齢", zh:"年紀" } },
              { n:9,  m:[1],    t:{ en:"the rice variety", ja:"米の品種", zh:"米的品種" } },
              { n:10, m:[4],    t:{ en:"the yeast", ja:"酵母", zh:"酵母" } },
              { n:11, m:[9],    t:{ en:"dilution", ja:"割水", zh:"割水" } },
              { n:12, m:[0,1,2,3,4,5,6,7,8,9], t:{ en:"everything, blind", ja:"すべて・目隠しで", zh:"全部，盲飲" } }
            ];
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "各週に変えてよい、ただ一つのもの" : lang === "zh" ? "每一週只允許改變的那一件事" : "THE ONE THING EACH WEEK IS ALLOWED TO CHANGE") + '</text>';
            for (j = 0; j < cols.length; j++) {
              var hx = X0 + j * CW + CW / 2;
              s += '<text x="' + hx.toFixed(1) + '" y="' + (TOP - 10) + '" text-anchor="middle" font-size="8.5" fill="#8B857C">' + L(cols[j]) + '</text>';
            }
            for (i = 0; i < ROWS; i++) {
              var ry = TOP + i * RH, r = rows[i];
              s += '<text x="30" y="' + (ry + 17) + '" font-size="10" fill="#A39C91">' + r.n + '</text>';
              s += '<text x="52" y="' + (ry + 17) + '" font-size="10.5" fill="#201E1B">' + L(r.t) + '</text>';
              for (j = 0; j < cols.length; j++) {
                var on = r.m.indexOf(j) >= 0, all = (r.m.length === 10);
                s += '<rect x="' + (X0 + j * CW + 3) + '" y="' + (ry + 4) + '" width="' + (CW - 6) + '" height="' + (RH - 8) + '" fill="' +
                     (on ? (all ? "#CFC6B2" : "#7C6B52") : "#F1EFE9") + '"/>';
              }
            }
            s += '<line x1="' + X0 + '" y1="' + (TOP + ROWS * RH + 2) + '" x2="' + (X0 + cols.length * CW) + '" y2="' + (TOP + ROWS * RH + 2) + '" stroke="#E4E0D6"/>';
            s += '<text x="30" y="' + (H - 26) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "第二週は二つの升目を濃くする。土地を変えれば蔵も変わるからであり、それは正直に記しておく値打ちがある。"
                  : lang === "zh" ? "第二週塗深了兩格：換地方就一定會換酒藏，這一點值得誠實標出來。"
                  : "Week two darkens two cells, because changing the place changes the house, and that is worth marking honestly.") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "第十二週の薄い一行は、そのときにはもう、何が違うかを自ら言い当てられるはずだという意味である。"
                  : lang === "zh" ? "第十二週那一整列較淺，意思是：到那時候，你應該已經能自己說出差別在哪裡了。"
                  : "The pale twelfth row means that by then you should be able to name the difference yourself.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"table",
          caption:{ en:"What to buy, and what it teaches", ja:"何を買い、それが何を教えるか", zh:"買什麼，以及它教你什麼" },
          cols:[ { en:"Week", ja:"週", zh:"週" }, { en:"The pair", ja:"組", zh:"這一組" }, { en:"What you are listening for", ja:"何を聴き取るか", zh:"你要聽的是什麼" } ],
          numCols:[0], keyCol:0,
          rows:[
            [ "1", { en:"One brewery's junmai and the same brewery's junmai daiginjō", ja:"同じ蔵の純米と純米大吟醸", zh:"同一家酒藏的純米與純米大吟釀" },
              { en:"What polishing takes away as well as what it adds. The daiginjō will be lighter and more fragrant; notice what the junmai has that it does not, which is usually the rice itself.", ja:"精米が加えるものだけでなく、奪うもの。大吟醸は軽く香り高いであろう。その大吟醸に無く純米にあるものに気づかれたい。それはたいてい米そのものである。", zh:"精米拿走了什麼，而不只是加上了什麼。大吟釀會更輕、更香；請注意純米有、而它沒有的那個東西——通常就是米本身。" } ],
            [ "2", { en:"The same rice variety from two different prefectures", ja:"同じ品種の米を、二つの県から", zh:"同一種米，來自兩個不同的縣" },
              { en:"Whether place survives the brewing. It sometimes does not, and finding that out honestly is worth more than being told that it does.", ja:"土地が造りを生き延びるか否か。生き延びぬこともあり、それを正直に見出すことは、生き延びると告げられることよりも値打ちがある。", zh:"地方能不能在釀造中存活下來。有時候不能；而誠實地發現這件事，比被告知「可以」更有價值。" } ],
            [ "3", { en:"One bottle, half of it chilled and half of it at 40 °C", ja:"一本を、半分は冷やし、半分は四十度で", zh:"同一瓶，一半冰鎮、一半四十度" },
              { en:"That temperature is not a preference but a control. The same liquid becomes a different drink, and the direction it moves tells you what kind of sake it is.", ja:"温度が好みではなく操作であること。同じ液が別の飲み物となり、その動く向きが、それがどのような酒であるかを告げる。", zh:"溫度不是偏好，而是一個控制項。同樣的液體會變成另一種飲料，而它移動的方向會告訴你它是哪一種酒。" } ],
            [ "4", { en:"A sokujō junmai and a kimoto or yamahai from a similar band", ja:"速醸の純米と、同じ帯の生酛か山廃", zh:"速釀的純米，與同一價格帶的生酛或山廢" },
              { en:"Acid, and what a month of wild lactic bacteria does to a sake's shape. This is the biggest single difference on the list and the one most people notice first.", ja:"酸と、一月の野の乳酸菌が酒の形になすこと。この一覧のうち最も大きな違いであり、多くの人が最初に気づくものである。", zh:"酸，以及一個月的野生乳酸菌對一支酒的形狀做了什麼。這是整份清單上最大的單一差異，也是多數人最先察覺到的。" } ],
            [ "5", { en:"A junmai and a honjōzō from the same brewery", ja:"同じ蔵の純米と本醸造", zh:"同一家酒藏的純米與本釀造" },
              { en:"What a tenth of the rice weight in distilled alcohol actually does. Most people expect to taste the alcohol and instead taste a cleaner finish, which is the point of the argument.", ja:"米重量の十分の一の蒸留酒が実際になすこと。多くの人はアルコールを味わうことを予期し、代わりに清らかな後味を味わう。論の眼目はそこにある。", zh:"米重量十分之一的蒸餾酒實際上做了什麼。多數人預期會嘗到酒精，結果嘗到的是更乾淨的尾韻——而那正是這場爭論的重點。" } ],
            [ "6", { en:"A nama and its pasteurised sibling, same brewery, same grade", ja:"生酒と、その火入れの兄弟。同じ蔵、同じ格", zh:"生酒與它火入過的兄弟，同酒藏、同等級" },
              { en:"What heat does, and what it protects against. Taste them again a fortnight later and the second lesson arrives on its own.", ja:"熱がなすことと、熱が守るもの。二週ののちに再び味わえば、第二の教えが自ずから届く。", zh:"熱做了什麼，以及它防住了什麼。兩週後再嘗一次，第二堂課會自己送上門來。" } ],
            [ "7", { en:"A clear junmai and a nigori or a sparkling from the same house", ja:"澄んだ純米と、同じ家のにごりか発泡", zh:"清澈的純米，與同一家的濁酒或氣泡酒" },
              { en:"That the solids and the gas are texture rather than flavour. A nigori is not a sweeter sake; it is the same sake with something left in it.", ja:"固形と気体が味ではなく質感であること。にごりはより甘い酒ではない。何かを残したままの同じ酒である。", zh:"固形物與氣體是口感、而不是風味。濁酒不是比較甜的清酒，它是同一支酒，只是有東西被留了下來。" } ],
            [ "8", { en:"A current-season junmai and a koshu of three years or more", ja:"今季の純米と、三年以上の古酒", zh:"當季的純米，與三年以上的古酒" },
              { en:"The Maillard reaction, arriving as caramel, dried fruit and mushroom. Also the discovery of whether you like it, which divides people permanently.", ja:"メイラード反応が、カラメル、干した果実、茸として届く。そして、それを好むか否かの発見である。それは人を永く分かつ。", zh:"梅納反應，以焦糖、果乾與菇蕈的形式抵達。同時也會發現你喜不喜歡它——這件事會把人永久地分成兩邊。" } ],
            [ "9", { en:"Yamada Nishiki and Omachi, or Yamada Nishiki and a local variety", ja:"山田錦と雄町、あるいは山田錦と地の品種", zh:"山田錦與雄町，或山田錦與一個在地品種" },
              { en:"Whether a rice variety is audible through everything else. Omachi is the easiest one to hear, which is why it is the one to start with.", ja:"米の品種が、他のすべてを通して聴こえるか否か。雄町が最も聴き取りやすく、ゆえに最初に取るべき品種である。", zh:"米的品種能不能穿過其他一切被聽見。雄町是最容易聽出來的一個，所以從它開始。" } ],
            [ "10", { en:"An aromatic competition-style ginjō and a classic-yeast junmai", ja:"香り高い出品酒型の吟醸と、古典的な酵母の純米", zh:"香氣型出品酒風格的吟釀，與使用古典酵母的純米" },
              { en:"That the smell of green apple and banana is a decision somebody made in a laboratory, not a property of rice. Ask the shop which yeast each uses.", ja:"青林檎と芭蕉の香りが、米の性質ではなく、誰かが実験室で下した決めであること。それぞれどの酵母かを店に尋ねられたい。", zh:"青蘋果與香蕉的香氣，是某個人在實驗室裡做的決定，不是米的性質。請向店家問清楚兩支各用什麼酵母。" } ],
            [ "11", { en:"A genshu and an ordinary bottle at 15%", ja:"原酒と、十五度の並の一本", zh:"原酒，與一支十五度的普通瓶裝" },
              { en:"What the last step of the brewing does. Then dilute the genshu in the glass with a little water and see whether you have just made the second bottle.", ja:"造りの最後の一段がなすこと。のち原酒を杯のなかで少しの水で割り、二本目を今しがた作ったのか否かを見られたい。", zh:"釀造最後一步做了什麼。接著在杯子裡替原酒兌一點水，看看你是不是剛剛做出了第二瓶。" } ],
            [ "12", { en:"Two bottles at very different prices, poured by somebody else", ja:"値の大きく異なる二本を、他人に注いでもらう", zh:"兩支價格差很多的酒，請別人幫你倒" },
              { en:"What you can actually tell, which is the only week that measures you rather than the sake. Most people are right about which is which and wrong about which they prefer.", ja:"自らに実際に判るもの。酒ではなく自らを測る唯一の週である。多くの人は、どちらがどちらかを当て、どちらを好むかを外す。", zh:"你實際上分得出什麼——這是唯一一週量的是你、而不是酒。多數人能猜對哪支是哪支，卻猜錯自己比較喜歡哪一支。" } ]
          ] }
      ] },

    { t:"section", id:"notes",
      title:{ en:"What to write down", ja:"何を書き留めるか", zh:"要記下什麼" }, jp:"記録",
      body:[
        { t:"p", text:{
          en:"Four lines per bottle, in the same order every time. The order is what makes a year of notes comparable; the prose is what makes them worth keeping. Do not use a scoring system — a number records a verdict and forgets the reason, and the reason is the only part you will want later.",
          ja:"一本につき四行を、毎回同じ順で。順こそが一年分の覚書を比べうるものとし、文章こそがそれを取っておく値打ちのあるものとする。点をつける仕組みは用いられたい。数は判定を記し、理由を忘れる。そして後に欲しくなるのは理由だけである。",
          zh:"每支酒四行，每次都用同樣的順序。順序讓一整年的筆記可以互相比較；而文字讓它們值得留著。不要用評分制——數字記下了結論，卻忘掉了理由，而你日後唯一會想要的就是理由。" } },

        { t:"defs", items:[
          { term:{ en:"One. How it arrived", ja:"一。どう来たか", zh:"一、它怎麼來的" }, jp:"温度と器", romaji:"ondo to utsuwa",
            def:{ en:"Temperature and glass, in that order, before anything about the sake itself. You cannot interpret a note a year later without knowing this, and it is the line people skip.",
              ja:"温度と器を、その順で、酒そのものについての何よりも先に。これを知らずして一年後の覚書は読めない。そしてこれこそ、人が飛ばす行である。",
              zh:"溫度與杯子，照這個順序，寫在關於這支酒本身的任何事情之前。不知道這兩項，一年後你讀不懂自己的筆記——而這正是大家會跳過的那一行。" } },
          { term:{ en:"Two. What it smells of, in your own words", ja:"二。何の香りがするか、自らの語で", zh:"二、它聞起來像什麼，用你自己的話" }, jp:"香り", romaji:"kaori",
            def:{ en:"Not the wheel and not the vocabulary you have read. If it smells of the inside of a paper bag, write that. A borrowed word records somebody else's nose; your own word is retrievable because it is attached to a memory you actually have.",
              ja:"香りの輪でも、読んだ語彙でもなく。紙袋の内の匂いがするのであれば、そう書かれたい。借りた語は他人の鼻を記す。自らの語は取り出せる。実際に持っている記憶に結びついているからである。",
              zh:"不要用香氣輪，也不要用你讀來的詞彙。如果它聞起來像紙袋內側，就這麼寫。借來的詞記下的是別人的鼻子；你自己的詞之所以能被取回，是因為它連著一段你真正擁有的記憶。" } },
          { term:{ en:"Three. What it does in the mouth", ja:"三。口のなかで何をなすか", zh:"三、它在嘴裡做了什麼" }, jp:"質感", romaji:"shitsukan",
            def:{ en:"Texture and shape rather than flavour: thin or round, sharp or soft, where it stops. This is the line that improves fastest with practice, and the line that turns out to matter most when you are choosing a bottle for food.",
              ja:"味ではなく質感と形を。細いか丸いか、鋭いか柔らかいか、どこで止まるか。稽古とともに最も速く良くなる行であり、料理のために一本を択ぶとき、最も重みを持つと判る行である。",
              zh:"寫口感與形狀，而不是味道：細瘦或圓潤、銳利或柔軟、它在哪裡停下來。這是練習後進步最快的一行，也是當你要為某道菜挑一瓶酒時，最終最要緊的那一行。" } },
          { term:{ en:"Four. What you would eat with it", ja:"四。何とともに食べるか", zh:"四、你會拿它配什麼" }, jp:"合わせるもの", romaji:"awaseru mono",
            def:{ en:"One dish, and a real one you have eaten. This forces a judgement that the other three lines allow you to avoid, and a year of these lines is a more useful document than a year of tasting notes, because it is about how you actually drink.",
              ja:"一つの料理を、実際に食べたことのあるものを。他の三行が避けさせてくれる判断を、これは強いる。そして一年分のこの行は、一年分の利き酒の覚書よりも有用な記録である。実際にどう飲んでいるかについての記録だからである。",
              zh:"一道菜，而且是你真的吃過的。這一行會逼你做出前三行讓你可以迴避的判斷；而一整年的這一行，會比一整年的品飲筆記更有用——因為它記的是你實際上怎麼喝。" } }
        ] },

        { t:"note", title:{ en:"And when you finish", ja:"そして終えたのち", zh:"而當你做完之後" }, text:{
          en:"Go back to week one and buy the same two bottles again. They will not have changed and you will have, and the size of the gap between the two sets of notes is the only honest measure of whether any of this worked. Most people find that the first week's notes are about aroma and the last week's are about texture, which is what learning to taste actually looks like from the inside.",
          ja:"第一週へ戻り、同じ二本をもう一度買われたい。二本は変わっておらず、変わったのはこちらである。二つの覚書のあいだの隔たりの大きさこそ、これらのいずれかが働いたか否かの唯一正直な尺度である。多くの人は、最初の週の覚書が香りについてであり、最後の週の覚書が質感についてであることに気づく。味わうことを学ぶとは、内側から見れば、まさにそのような姿をしている。",
          zh:"回到第一週，把同樣那兩瓶再買一次。它們沒有變，變的是你；而兩組筆記之間的落差有多大，是「這一切究竟有沒有奏效」唯一誠實的量尺。多數人會發現：第一週的筆記在談香氣，最後一週的筆記在談口感——而從內部看，學會品飲這件事，長的就是這個樣子。" } }
      ] },

    { t:"related", items:[
      { href:"tasting.html", why:{ en:"The method itself, and five shorter exercises.", ja:"方法そのものと、より短い五つの稽古。", zh:"方法本身，以及五個更短的練習。" } },
      { href:"storage.html", why:{ en:"How to keep the second half of each pair alive.", ja:"各々の組の後半を保たせる方法。", zh:"怎麼讓每一組的後半瓶活著。" } },
      { href:"styles.html", why:{ en:"The names for what you will have been tasting.", ja:"味わってきたものの名。", zh:"你一路嘗到的那些東西各叫什麼。" } },
      { href:"value.html", why:{ en:"Why week twelve usually goes the way it goes.", ja:"第十二週がたいていそうなる理由。", zh:"第十二週為什麼通常會是那個結果。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- serving */
SAKE.pages["serving"] = {
  kicker: { en: "Drinking · 03", ja: "飲む · 03", zh: "品飲 · 03" },
  title:  { en: "Temperature & Vessels", ja: "温度と器", zh: "溫度與酒器" },
  jp: "燗と冷や · 酒器",
  lede: {
    en: "Sake is the only common alcoholic drink with a working vocabulary of ten named serving temperatures spanning fifty degrees, and it is the only one where the same bottle is routinely served at 5 °C and at 55 °C by people who both know what they are doing. Temperature is not a matter of preference alone; it changes which compounds you can perceive, and it changes them predictably.",
    ja: "日本酒は、五十度の幅にわたる十の温度呼称を実用の語彙としてもつ唯一の一般的な酒であり、同じ一本が5℃でも55℃でも、いずれも心得た人の手によって供される唯一の酒でもある。温度は好みだけの問題ではない。どの成分を知覚できるかを変え、しかもそれは予測可能な仕方で変わる。",
    zh: "日本酒是唯一擁有橫跨五十度、十個溫度名稱之實用語彙的常見酒類；也是唯一同一瓶酒會被兩位皆懂門道的人分別以 5°C 與 55°C 供飲的酒。溫度不只是偏好問題：它改變你能感知到哪些成分，而且改變的方式是可預測的。"
  },
  body: [
    { t:"section", id:"scale",
      title:{ en:"The ten temperatures", ja:"十の温度", zh:"十種溫度" }, jp:"温度呼称",
      body:[
        { t:"table",
          caption:{en:"Named serving temperatures, from coldest to hottest",ja:"温度呼称——冷たい順",zh:"溫度名稱——由冷至熱"},
          cols:[{en:"Name",ja:"呼称",zh:"名稱"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"°C",ja:"℃",zh:"°C"},{en:"Literally",ja:"字義",zh:"字面義"},{en:"What it does",ja:"作用",zh:"作用"}],
          jpCols:[1], numCols:[2],
          rows:[
            ["Yuki-hie","雪冷え","5",{en:"snow-chilled",ja:"雪冷え",zh:"雪冷"},
             {en:"Aroma is almost entirely suppressed; texture is tight and the finish very short. Useful for a sake that is too sweet or too heavy, and for sparkling. Most sake loses more than it gains here.",ja:"香りはほぼ完全に抑えられ、質感は締まり、後味は極めて短い。甘すぎる酒、重すぎる酒、そして発泡性に有効。多くの酒はここでは得るものより失うもののほうが多い。",zh:"香氣幾乎完全被壓抑，質地緊繃，收尾極短。適合過甜或過厚重的酒，以及氣泡酒。多數清酒在此溫度失去的多於得到的。"}],
            ["Hana-hie","花冷え","10",{en:"blossom-chilled",ja:"花冷え",zh:"花冷"},
             {en:"The standard for aromatic ginjō and daiginjō. Cold enough to keep the ester aromas tight and defined, warm enough that they are still audible.",ja:"香り高い吟醸・大吟醸の標準。エステル香が締まって輪郭を保つには十分に冷たく、なお聞き取れる程度には温かい。",zh:"芳香型吟釀與大吟釀的標準。冷到足以讓酯香保持緊實輪廓，又暖到仍能被察覺。"}],
            ["Suzu-hie","涼冷え","15",{en:"cool",ja:"涼冷え",zh:"涼冷"},
             {en:"Aroma opens noticeably; texture broadens. Where most junmai ginjō is at its best, and where a good nama shows most.",ja:"香りが明らかに開き、質感は広がる。多くの純米吟醸が最良となり、良い生酒が最もよく現れる領域。",zh:"香氣明顯開展，質地變寬。多數純米吟釀在此最佳，好的生酒也在此展現最多。"}],
            ["Hiya","冷や","20",{en:"“cold” — meaning room temperature",ja:"冷や（常温）",zh:"「冷」，實指常溫"},
             {en:"A trap for learners: <em>hiya</em> historically means unheated, not chilled, because before refrigeration room temperature was the cold option. Ask for “hiya” and you may get a room-temperature cup.",ja:"学ぶ者の落とし穴である。冷やとは歴史的に「燗をしていない」の意であって「冷やした」ではない。冷蔵のない時代、常温こそが冷たい側の選択肢だったからである。「冷や」と頼めば常温で出てくることがある。",zh:"學習者的陷阱：「冷や」歷史上意指「未加熱」而非「冰過」，因為在無冷藏的年代，常溫就是偏冷的那個選項。點「冷や」，端上來的可能是常溫的酒。"}],
            ["Hinata-kan","日向燗","30",{en:"sunlit warmth",ja:"日向燗",zh:"向陽之溫"},
             {en:"Barely warm. The point where acidity begins to soften and umami begins to lift, without any sensation of heat.",ja:"かろうじて温かい程度。熱さの感覚を伴わずに、酸が和らぎ始め、うま味が立ち始める地点。",zh:"僅是微溫。此處酸度開始柔化、旨味開始上揚，卻不帶任何熱感。"}],
            ["Hitohada-kan","人肌燗","35",{en:"skin-warm",ja:"人肌燗",zh:"體溫"},
             {en:"Body temperature. Rice and kōji character comes forward strongly; the sake tastes noticeably sweeter than the same liquid cold, because sweetness perception rises with temperature.",ja:"体温と同じ。米と麹の性格が強く前に出る。甘味の知覚は温度とともに上がるため、同じ液体でも冷たいときより明らかに甘く感じられる。",zh:"與體溫相同。米與麴的性格強烈前傾；同一液體嚐起來明顯比冷時更甜，因為甜味感知隨溫度上升。"}],
            ["Nuru-kan","ぬる燗","40",{en:"lukewarm",ja:"ぬる燗",zh:"溫燗"},
             {en:"The single most useful warming point, and the one most often meant when a Japanese drinker says “kan”. Junmai, kimoto and yamahai are usually at their fullest here.",ja:"最も有用な一点であり、日本の飲み手が「燗」と言うとき、多くはこの温度を指す。純米・生酛・山廃は概ねここで最も充実する。",zh:"最實用的單一溫度，也是日本飲者說「燗」時最常指的溫度。純米、生酛與山廢通常在此最為飽滿。"}],
            ["Jō-kan","上燗","45",{en:"upper warm",ja:"上燗",zh:"上燗"},
             {en:"Alcohol becomes perceptible as warmth; aroma expands upward out of the cup. Rich junmai and koshu do well; anything delicate is now in trouble.",ja:"アルコールが温もりとして感じられ始め、香りは杯の上へ広がる。厚みのある純米や古酒は良く、繊細なものはここで破綻し始める。",zh:"酒精開始以溫熱感被察覺，香氣向杯口上方擴散。厚實的純米與古酒表現良好；細緻者則已陷入困境。"}],
            ["Atsu-kan","熱燗","50",{en:"hot",ja:"熱燗",zh:"熱燗"},
             {en:"Sharp and dry. Sweetness perception falls again, acidity reads harder, and the sake becomes bracing rather than comforting. Good for very savoury food and cold weather.",ja:"鋭く辛い。甘味の知覚は再び下がり、酸はより硬く感じられ、酒は寛ぐものというより引き締めるものになる。滋味の強い料理と寒さによく合う。",zh:"銳利而辛。甜味感知再度下降，酸度顯得更硬，酒從撫慰之物轉為提振之物。適合鮮味濃郁的食物與寒冷天氣。"}],
            ["Tobikiri-kan","飛び切り燗","55+",{en:"beyond the limit",ja:"飛び切り燗",zh:"飛切燗"},
             {en:"Very hot, and mostly the province of robust futsūshu and old-fashioned drinking. Above about 60 °C alcohol volatilises fast enough to sting the nose and most of the sake's character is gone.",ja:"非常に熱く、多くは骨太な普通酒と昔ながらの飲み方の領域である。およそ60℃を超えるとアルコールの揮発が速まって鼻を刺し、酒の性格の大半は失われる。",zh:"非常燙，多屬厚實普通酒與舊式飲法的領域。超過約 60°C，酒精揮發快到刺鼻，酒的性格也所剩無幾。"}]
          ] },
        { t:"figure",
          caption:{ en:"The ten named temperatures on one scale. The band between about 18 and 28 °C is where sake is rarely served on purpose — too warm for the cold names, too cool for the warm ones — and it is exactly where a bottle left on a table ends up.",
            ja:"十の名を持つ温度を一つの尺度に置いた。およそ十八度から二十八度の帯は、日本酒が意図して供されることの稀な域である。冷やの名には暖かすぎ、燗の名には涼しすぎる。そしてそこは、卓に置き忘れた瓶がまさに行き着く場所でもある。",
            zh:"把十個具名的溫度放在同一把尺上。約十八至二十八度之間的帶狀區，是清酒很少被刻意供應的區間——對冷飲的名字來說太溫，對溫飲的名字來說又太涼——而那正是一瓶被留在桌上的酒最終會停留的位置。" },
          svg: function (lang, L) {
            var T = [
              [5,  { en:"Yuki-hie",     ja:"雪冷え",   zh:"雪冷" }, "雪冷え",   "c"],
              [10, { en:"Hana-hie",     ja:"花冷え",   zh:"花冷" }, "花冷え",   "c"],
              [15, { en:"Suzu-hie",     ja:"涼冷え",   zh:"涼冷" }, "涼冷え",   "c"],
              [20, { en:"Hiya",         ja:"冷や",     zh:"冷（常溫）" }, "冷や", "m"],
              [30, { en:"Hinata-kan",   ja:"日向燗",   zh:"日向燗" }, "日向燗", "w"],
              [35, { en:"Hitohada-kan", ja:"人肌燗",   zh:"人肌燗" }, "人肌燗", "w"],
              [40, { en:"Nuru-kan",     ja:"ぬる燗",   zh:"溫燗" },   "ぬる燗", "w"],
              [45, { en:"Jō-kan",       ja:"上燗",     zh:"上燗" },   "上燗",   "h"],
              [50, { en:"Atsu-kan",     ja:"熱燗",     zh:"熱燗" },   "熱燗",   "h"],
              [56, { en:"Tobikiri-kan", ja:"飛び切り燗", zh:"飛切燗" }, "飛び切り燗", "h"]
            ];
            var FILL = { c:"var(--h-water)", m:"var(--h-ash)", w:"var(--h-koji)", h:"var(--h-plum)" };
            var W = 440, H = 470, X = 62, BW = 30, TOP = 26, BOT = H - 44;
            var lo = 0, hi = 60;
            var yOf = function (t) { return BOT - (t - lo) / (hi - lo) * (BOT - TOP); };
            var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
            var o = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Sake serving temperature scale" style="font-family:var(--sans)">'];

            // dead band
            o.push('<rect x="' + X + '" y="' + yOf(28) + '" width="' + BW + '" height="' + (yOf(18) - yOf(28)) +
              '" fill="var(--h-ash)" stroke="none"/>');
            // column outline
            o.push('<rect x="' + X + '" y="' + TOP + '" width="' + BW + '" height="' + (BOT - TOP) +
              '" fill="none" stroke="var(--rule-2)" stroke-width="1"/>');

            // axis ticks every 10
            for (var t = 0; t <= 60; t += 10) {
              var y = yOf(t);
              o.push('<line x1="' + (X - 6) + '" y1="' + y + '" x2="' + X + '" y2="' + y + '" stroke="var(--rule-3)" stroke-width="1"/>');
              o.push('<text x="' + (X - 11) + '" y="' + (y + 3.5) + '" text-anchor="end" font-size="10" fill="var(--ink-4)">' + t + '</text>');
            }
            o.push('<text x="' + (X - 11) + '" y="' + (TOP - 10) + '" text-anchor="end" font-size="9.5" fill="var(--ink-4)" letter-spacing=".14em">°C</text>');

            // markers
            for (var i = 0; i < T.length; i++) {
              var v = T[i], yy = yOf(v[0]);
              o.push('<rect x="' + X + '" y="' + (yy - 5) + '" width="' + BW + '" height="10" fill="' + FILL[v[3]] + '" stroke="var(--rule-2)" stroke-width="0.75"/>');
              o.push('<line x1="' + (X + BW) + '" y1="' + yy + '" x2="' + (X + BW + 16) + '" y2="' + yy + '" stroke="var(--rule-2)" stroke-width="1"/>');
              var lab = L(v[1]);
              o.push('<text x="' + (X + BW + 22) + '" y="' + (yy - 1) + '" font-size="12.5" fill="var(--ink)">' + esc(lab) + '</text>');
              if (lang !== "ja") {
                o.push('<text x="' + (X + BW + 22) + '" y="' + (yy + 11) + '" font-size="10" fill="var(--ink-3)" style="font-family:var(--serif)">' + esc(v[2]) + '</text>');
              }
              o.push('<text x="' + (W - 6) + '" y="' + (yy + 3) + '" text-anchor="end" font-size="11" fill="var(--ink-2)">' +
                (v[0] === 56 ? "55+" : v[0]) + ' °C</text>');
            }

            // dead-band label
            var dbY = (yOf(18) + yOf(28)) / 2;
            o.push('<text x="' + (X + BW / 2) + '" y="' + (dbY + 3) + '" text-anchor="middle" font-size="8.5" fill="var(--ink-4)" transform="rotate(-90 ' + (X + BW / 2) + ' ' + dbY + ')">' +
              esc(L({ en:"rarely on purpose", ja:"意図されぬ域", zh:"少有人刻意選擇" })) + '</text>');

            // baseline caption strip
            o.push('<text x="' + X + '" y="' + (H - 16) + '" font-size="10" fill="var(--ink-3)">' +
              esc(L({ en:"cold names below 20 · warm names above 28", ja:"二十度より下は冷やの名、二十八度より上は燗の名", zh:"二十度以下為冷飲之名，二十八度以上為溫飲之名" })) + '</text>');
            return o.join("") + "</svg>";
          } },
        { t:"panel", tint:"amber", title:{en:"How to warm it",ja:"燗のつけ方",zh:"如何溫酒"}, body:[
          { t:"p", text:{
            en:"Fill a <em>tokkuri</em> to about eighty per cent, stand it in a pan of water that has been brought to the boil and taken off the heat, and wait — two to three minutes for nuru-kan, four or five for atsu-kan. The traditional test is to touch the neck of the flask to the inside of your wrist. Never warm sake directly on a flame, and never microwave it: uneven heating drives off the aromatics at the surface while the base is still cold.",
            ja:"徳利に八分目ほど注ぎ、沸騰させてから火を止めた湯に立て、待つ——ぬる燗で二〜三分、熱燗で四〜五分。伝統的な確認法は、徳利の首を手首の内側に当てることである。直火にかけてはならず、電子レンジも避けるべきである。加熱が不均一になり、底が冷たいまま表面の香気だけが飛んでしまう。",
            zh:"將德利注入約八分滿，立於煮沸後離火的熱水中，靜待——溫燗二至三分鐘，熱燗四至五分鐘。傳統的判斷方式是把德利頸部貼在手腕內側。切勿直接以明火加熱，也不要用微波爐：受熱不均會使表層香氣散失，底部卻仍是冷的。" } }
        ] }
      ]
    },

    { t:"section", id:"why",
      title:{ en:"Why temperature changes so much", ja:"温度がこれほど効く理由", zh:"溫度何以影響如此之大" }, jp:"機序",
      body:[
        { t:"ul", items:[
          { en:"<strong>Volatility rises with heat.</strong> Esters leave the liquid faster when warm — which is why a delicate daiginjō warmed to 50 °C smells of very little within a minute, and why a closed, muted junmai opens at 45 °C.",
            ja:"<strong>揮発は熱とともに強まる。</strong>エステルは温かいほど速く液を離れる。繊細な大吟醸を50℃にすると一分でほとんど香らなくなり、閉じてくすんだ純米が45℃で開くのはこのためである。",
            zh:"<strong>揮發性隨溫度上升。</strong>酯類在溫熱時離開液體更快——這正是細緻的大吟釀加熱到 50°C 後一分鐘內便幾乎無香，而封閉沉悶的純米卻能在 45°C 打開的原因。" },
          { en:"<strong>Sweetness perception peaks near body temperature.</strong> The same sugar concentration reads sweetest around 35 °C and less sweet both colder and hotter. A sake that is cloying at 35 °C may be balanced at 10 °C and dry at 50 °C.",
            ja:"<strong>甘味の知覚は体温付近で最大になる。</strong>同じ糖濃度でも、35℃前後で最も甘く感じられ、それより冷たくても熱くても甘さは引く。35℃でくどい酒が、10℃では均衡し、50℃では辛口に感じられることがある。",
            zh:"<strong>甜味感知在體溫附近達到高峰。</strong>相同糖濃度在約 35°C 時最甜，更冷或更熱都會減弱。一款在 35°C 顯得膩口的酒，可能在 10°C 剛好均衡，在 50°C 則嚐來辛口。" },
          { en:"<strong>Acidity reads harder when hot.</strong> Sourness perception increases with temperature, which is why high-acid kimoto can become aggressive above 50 °C and why low-acid sake usually warms better than high-acid sake.",
            ja:"<strong>酸は熱いほど硬く感じられる。</strong>酸味の知覚は温度とともに強まる。高酸度の生酛が50℃を超えると攻撃的になり、低酸度の酒のほうが燗に向くことが多いのはこのためである。",
            zh:"<strong>酸度在高溫時顯得更硬。</strong>酸味感知隨溫度上升，這正是高酸的生酛在超過 50°C 後會變得咄咄逼人、而低酸的酒通常比高酸的酒更耐溫熱的原因。" },
          { en:"<strong>Viscosity falls.</strong> Warm sake feels thinner in the mouth and moves faster across the palate, shortening the finish; cold sake feels denser and lingers. This is purely physical and independent of composition.",
            ja:"<strong>粘性は下がる。</strong>燗酒は口中で薄く感じられ、速く流れ、後味は短くなる。冷たい酒は密度を感じさせ、長く残る。これは純粋に物理的であり、成分とは無関係である。",
            zh:"<strong>黏度下降。</strong>溫酒在口中顯得較薄、流動較快，收尾變短；冷酒則顯得緊密而綿長。這純屬物理現象，與成分無關。" },
          { en:"<strong>Amino acids need heat to speak.</strong> Umami perception is weak when cold. A junmai with amino acid 1.8 is a different and much more interesting drink at 45 °C than at 8 °C — the same is not true of a daiginjō at 1.1.",
            ja:"<strong>アミノ酸は熱を要する。</strong>うま味の知覚は冷たいと弱い。アミノ酸度1.8の純米は、8℃と45℃ではまったく別の、そしてはるかに面白い飲み物である。アミノ酸度1.1の大吟醸には同じことは起こらない。",
            zh:"<strong>胺基酸需要熱才能發聲。</strong>低溫下旨味感知薄弱。胺基酸度 1.8 的純米在 45°C 與 8°C 是兩種飲品，且前者有趣得多；胺基酸度 1.1 的大吟釀則不然。" }
        ] },
        { t:"note", label:{en:"A rule of thumb",ja:"目安",zh:"經驗法則"}, text:{
          en:"Warm what has flavour; chill what has aroma. High amino acid, high acidity, low aroma, junmai, kimoto, yamahai, koshu, futsūshu → warm. High ester aroma, low amino acid, ginjō, daiginjō, nama, sparkling → cold. The interesting cases are the ones in between, and they are worth trying at three temperatures before deciding.",
          ja:"味のあるものは温め、香りのあるものは冷やす。アミノ酸が多く、酸が高く、香りが低いもの——純米、生酛、山廃、古酒、普通酒——は燗へ。エステル香が高く、アミノ酸の少ないもの——吟醸、大吟醸、生酒、発泡——は冷やへ。面白いのはその中間にあるものであり、決める前に三つの温度で試す価値がある。",
          zh:"有味者溫之，有香者冷之。胺基酸高、酸度高、香氣低者——純米、生酛、山廢、古酒、普通酒——溫飲。酯香高、胺基酸低者——吟釀、大吟釀、生酒、氣泡——冷飲。有趣的是介於兩者之間的酒，值得在下判斷前以三種溫度各試一次。" } }
      ]
    },

    { t:"section", id:"vessels",
      title:{ en:"Vessels", ja:"酒器", zh:"酒器" }, jp:"酒器",
      body:[
        { t:"p", text:{
          en:"The vessel is not decoration. Rim diameter decides how much aroma reaches the nose; wall thickness and material decide how fast the sake changes temperature and how it feels against the lip; volume decides the pace of drinking. A daiginjō in a thick ceramic guinomi and the same sake in a tulip glass are two different experiences, and the glass is not automatically the better one.",
          ja:"器は装飾ではない。口径は香りがどれだけ鼻に届くかを決め、器壁の厚さと素材は温度がどれだけ速く変わるか、唇にどう当たるかを決め、容量は飲む速度を決める。同じ大吟醸でも、厚手のぐい呑みとチューリップ型のグラスとでは二つの異なる体験であり、グラスのほうが自動的に良いわけではない。",
          zh:"酒器不是裝飾。口徑決定多少香氣到達鼻腔；壁厚與材質決定酒溫變化的速度與唇觸感受；容量決定飲用的節奏。同一款大吟釀，盛在厚陶豬口與鬱金香杯中是兩種體驗，而玻璃杯並不自動更優。" } },
        { t:"table",
          cols:[{en:"Vessel",ja:"器",zh:"器"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Form",ja:"形",zh:"形制"},{en:"Use",ja:"用途",zh:"用途"}],
          jpCols:[1],
          rows:[
            ["Ochoko","お猪口",{en:"small cup, 30–60 mL, ceramic",ja:"小さな杯、30〜60mL、陶磁",zh:"小杯，30–60 mL，陶瓷"},
             {en:"The default cup. Small volume means it is refilled often — which is the point, because pouring for others is the social mechanism of a Japanese drinking table. Poor at delivering aroma.",ja:"標準の杯。容量が小さく何度も注ぎ足すことになる——それこそが要点であり、互いに注ぎ合うことが日本の酒席の社会的な仕組みだからである。香りを届ける力は弱い。",zh:"最基本的杯子。容量小意味著頻繁斟酒——這正是重點，因為為他人斟酒是日本酒席的社交機制。傳遞香氣的能力不佳。"}],
            ["Guinomi","ぐい呑み",{en:"larger cup, 60–120 mL",ja:"大ぶりの杯、60〜120mL",zh:"較大的杯，60–120 mL"},
             {en:"“Gulp cup”. Thicker walls hold temperature; a wider mouth gives more aroma than an ochoko. The usual choice for warmed junmai, and the form most prized by ceramic collectors.",ja:"「ぐいと呑む」器。厚い器壁が温度を保ち、広い口はお猪口より香りを与える。燗の純米にはこれが定石であり、陶磁の蒐集家が最も重んじる形でもある。",zh:"「一口飲」之杯。壁厚保溫，口徑較寬，香氣勝於豬口。溫飲純米的常用選擇，也是陶瓷收藏者最珍視的器型。"}],
            ["Sakazuki","盃",{en:"wide shallow saucer, lacquer or ceramic",ja:"広く浅い平盃、漆器または陶磁",zh:"寬淺的盤形杯，漆器或陶瓷"},
             {en:"The ceremonial form — weddings, shrine offerings, New Year. Very wide surface area means aroma dissipates quickly and the sake warms fast; it is designed for ritual, not for tasting.",ja:"儀礼の器——婚礼、神事、正月。表面積が非常に広く、香りは速く散り、酒はすぐ温まる。味わうためではなく、儀式のための形である。",zh:"儀禮之器——婚禮、神事、新年。表面積極寬，香氣散逸快、酒溫上升也快；它是為儀式而非品評設計的。"}],
            ["Masu","枡",{en:"square cedar box, one gō (180 mL)",ja:"檜または杉の枡、一合（180mL）",zh:"方形杉木盒，一合（180 mL）"},
             {en:"Originally a rice measure. Cedar contributes a strong resinous aroma that overwhelms most sake, so it is now used mostly for the ceremonial <em>mokkiri</em> pour — a glass inside a masu, filled to overflowing as a gesture of generosity.",ja:"もとは米を量る器である。杉の強い樹脂香が多くの酒を覆ってしまうため、現在は主に儀礼的な「もっきり」——枡に置いたグラスに、寛容の身振りとして溢れるまで注ぐ——に用いられる。",zh:"原為量米之器。杉木強烈的樹脂香會蓋過多數酒，故如今多用於儀式性的「盛切」——杯置於枡中，斟至溢出，作為慷慨的表示。"}],
            ["Tokkuri","徳利",{en:"narrow-necked flask, 180–360 mL",ja:"首の細い瓶、180〜360mL",zh:"細頸酒壺，180–360 mL"},
             {en:"The serving flask, and the standard vessel for warming: the narrow neck slows evaporation while the body sits in hot water. Fill to about 80% so the sake circulates.",ja:"供するための瓶であり、燗の標準の器でもある。首が細いため、胴を湯に浸けているあいだの蒸発が抑えられる。酒が対流するよう、八分目ほどに注ぐ。",zh:"供酒之壺，也是溫酒的標準容器：細頸可在壺身浸於熱水時減緩蒸發。注至約八分滿，讓酒得以對流。"}],
            ["Katakuchi","片口",{en:"open lipped bowl",ja:"注ぎ口のある鉢",zh:"帶注口的敞口缽"},
             {en:"An open pouring bowl. Large surface area opens up a closed or reductive sake quickly — the sake equivalent of a decanter, and genuinely effective on young muroka nama genshu.",ja:"開いた注ぎ器。表面積が大きく、閉じた酒や還元的な酒を速く開かせる。ワインのデカンタに相当し、若い無濾過生原酒には実際に効果がある。",zh:"開放式的注酒缽。表面積大，能迅速打開封閉或還原狀態的酒——相當於葡萄酒的醒酒器，對年輕的無濾過生原酒確實有效。"}],
            ["Chirori","ちろり",{en:"tall metal warming vessel, tin or copper",ja:"背の高い金属の燗器、錫または銅",zh:"高身金屬溫酒器，錫或銅製"},
             {en:"Conducts heat fast and evenly, so warming takes a minute rather than five. Tin is traditionally held to soften sake; whether that is chemistry or ceremony is not settled.",ja:"熱伝導が速く均一で、燗が五分ではなく一分で済む。錫は酒を柔らかくすると伝統的に言われるが、それが化学なのか儀礼なのかは決着していない。",zh:"導熱快速均勻，溫酒只需一分鐘而非五分鐘。錫傳統上被認為能使酒變柔和；那究竟是化學還是儀式，尚無定論。"}],
            ["Wine glass",{en:"ワイングラス",ja:"ワイングラス",zh:"葡萄酒杯"},{en:"tulip bowl, thin rim",ja:"チューリップ型、薄い縁",zh:"鬱金香杯身，薄杯緣"},
             {en:"The best available vessel for aromatic ginjō and daiginjō, and now standard in serious sake bars. A white-wine glass or a small burgundy bowl both work; avoid anything with a very narrow rim, which concentrates alcohol.",ja:"香り高い吟醸・大吟醸には最良の器であり、いまや本格的な日本酒バーの標準である。白ワイン用でも小ぶりのブルゴーニュ型でもよい。縁が極端に狭いものは、アルコールを集めてしまうため避ける。",zh:"芳香型吟釀與大吟釀最理想的器皿，如今已是正統清酒吧的標準配置。白酒杯或小型勃根地杯皆可；避免杯口極窄者，那會使酒精過度集中。"}]
          ] },
        { t:"note", label:{en:"On pouring",ja:"注ぐこと",zh:"關於斟酒"}, text:{
          en:"At a Japanese table you do not pour for yourself. You fill your neighbour's cup and they fill yours — <em>shaku</em> — and the cup is topped up before it empties rather than after. Covering your cup with a hand, or simply leaving it full, is the polite way to stop. None of this is required outside Japan, but it is worth knowing that the small cup exists to make this exchange happen often.",
          ja:"日本の酒席では手酌をしない。隣の杯を満たし、相手が自分の杯を満たす——酌である。杯は空になってからではなく、空になる前に注ぎ足される。手で杯を覆うか、単に満たしたままにしておくことが、丁重に断る作法である。日本の外でこれらが必要なわけではないが、小さな杯が存在する理由が、このやり取りを頻繁に起こすためであることは知っておく価値がある。",
          zh:"在日本的酒席上不為自己斟酒。你為鄰座斟滿，對方為你斟滿——此謂「酌」——且杯子在見底之前而非之後就會被添滿。以手覆杯，或單純讓杯保持滿的狀態，是禮貌的婉拒方式。這些在日本以外並非必須，但值得知道：小杯之所以存在，正是為了讓這種交換頻繁發生。" } }
      ]
    },

{ t:"section", id:"materials",
      title:{ en:"Materials", ja:"素材", zh:"材質" }, jp:"陶・磁・錫・木・硝子",
      body:[
        { t:"p", text:{
          en:"What a cup is made of changes the drink in three measurable ways: how fast heat leaves it, how the rim meets the lip, and — for unglazed ceramics — whether the surface interacts with the liquid at all. Japanese ceramics developed largely in service of tea and sake, and the regional kilns are as much a part of the subject as the breweries.",
          ja:"器の素材は、三つの測りうる仕方で酒を変える——熱がどれだけ速く逃げるか、縁がどう唇に当たるか、そして無釉の陶であれば、表面が液体と作用するかどうか。日本の陶磁は主として茶と酒に仕えて発達しており、各地の窯は蔵と同じくこの主題の一部である。",
          zh:"器皿的材質以三種可測量的方式改變酒：熱散失得多快、杯緣如何觸唇，以及——若為無釉陶器——表面是否與液體產生作用。日本陶瓷主要為茶與酒而發展，各地窯場與酒藏同樣是這個主題的一部分。" } },
        { t:"table",
          cols:[{en:"Material",ja:"素材",zh:"材質"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Behaviour",ja:"性質",zh:"性質"},{en:"Suits",ja:"向く酒",zh:"適合"}],
          jpCols:[1],
          rows:[
            [{en:"White porcelain",ja:"白磁",zh:"白瓷"},"白磁",
             {en:"Thin, hard, non-porous, and neutral. Shows colour truthfully against a white ground — which is why the standard tasting cup is porcelain and nothing else.",ja:"薄く硬く、吸水せず、中立である。白い地に対して色を正しく見せる。標準のきき猪口が磁器で、他ではない理由である。",zh:"薄、硬、不吸水且中性。在白色底面上如實顯色——這正是標準品評杯只用白瓷的原因。"},
             {en:"Anything you are assessing rather than enjoying.",ja:"楽しむためではなく、評価するための酒すべて。",zh:"任何用於評估而非享受的酒。"}],
            [{en:"Bizen ware",ja:"備前焼",zh:"備前燒"},"備前焼",
             {en:"Unglazed, wood-fired, high-iron stoneware from Okayama, fired for a fortnight or more. The surface is minutely porous and slightly abrasive, and drinkers have claimed for centuries that it rounds sake — the plausible mechanism being micro-aeration at the surface rather than anything mystical.",ja:"岡山の無釉・薪窯・鉄分の多い炻器で、二週間以上焼き締める。表面は微細に多孔質でわずかにざらつき、酒を丸くすると何世紀も言われてきた。もっともらしい機序は神秘ではなく、表面での微細な空気接触である。",zh:"岡山的無釉柴燒高鐵炻器，燒製兩週以上。表面呈微孔且略粗糙；飲者數世紀來宣稱它能使酒變圓潤——較合理的機制是表面的微氣接觸，而非任何神祕作用。"},
             {en:"Robust junmai, kimoto, warmed sake.",ja:"骨太な純米、生酛、燗。",zh:"厚實純米、生酛、溫飲。"}],
            [{en:"Hagi ware",ja:"萩焼",zh:"萩燒"},"萩焼",
             {en:"Soft, pale, low-fired stoneware from Yamaguchi with a crazed glaze. It absorbs liquid over years, and the colour of the crazing shifts with use — the celebrated <em>hagi no nanabake</em>, the seven changes. A cup that keeps a record of what has been drunk from it.",ja:"山口の、貫入のある柔らかく淡い低火度の焼き物。年月をかけて液を吸い、貫入の色が使うほどに変わる。名高い「萩の七化け」である。何を注がれてきたかを記録し続ける器である。",zh:"山口的柔軟、色淡、低溫燒成且帶開片的陶器。它會歷經數年吸收液體，開片的顏色隨使用而變——即著名的「萩之七變」。一只會記錄自己被注入過什麼的杯子。"},
             {en:"Warmed sake; a personal cup rather than a tasting one.",ja:"燗酒。評価用ではなく、自分の器として。",zh:"溫飲之酒；屬於個人專用之器，而非品評之器。"}],
            [{en:"Karatsu ware",ja:"唐津焼",zh:"唐津燒"},"唐津焼",
             {en:"Kyushu stoneware, sand-coloured, with an iron-brushed or ash-glazed surface and a deliberately rough, quiet aesthetic. Long paired with sake in the tea tradition, which valued its restraint.",ja:"九州の炻器。砂色で、鉄絵や灰釉の表面をもち、意図的に粗く静かな美意識をもつ。その抑制を尊んだ茶の伝統において、長く酒と組み合わされてきた。",zh:"九州的炻器，呈砂色，表面施鐵繪或灰釉，具刻意粗獷而安靜的美學。因其內斂，在茶道傳統中長期與酒相配。"},
             {en:"Almost anything; a default for the table rather than a specialist.",ja:"ほぼ何にでも。専門的な器ではなく、食卓の定番として。",zh:"幾乎百搭；是餐桌上的常備之器，而非專用器。"}],
            [{en:"Tin",ja:"錫",zh:"錫"},"錫器",
             {en:"Conducts heat very fast, so a tin chirori warms sake in about a minute and a tin cup chills it almost instantly against ice. It is also traditionally held to soften and round the sake; whether that is ion exchange or ceremony has never been settled.",ja:"熱伝導が非常に速く、錫のちろりは一分ほどで燗をつけ、錫の杯は氷に当てればほぼ即座に冷える。伝統的に酒を柔らかく丸くするとも言われるが、それがイオン交換なのか儀礼なのかは決着していない。",zh:"導熱極快，錫製 chirori 約一分鐘即可溫酒，錫杯貼冰則幾乎立即降溫。傳統上亦認為它能使酒柔和圓潤；那究竟是離子交換還是儀式，從無定論。"},
             {en:"Warming and chilling; and anything you want to change temperature quickly.",ja:"燗にも冷やにも。素早く温度を変えたい酒に。",zh:"溫飲與冰飲皆宜；適合任何需要快速改變溫度的酒。"}],
            [{en:"Cedar",ja:"杉",zh:"杉木"},"枡 · 樽",
             {en:"Yoshino cedar gives up resin and green aromatics fast — days in a cask, seconds in a masu. It will dominate any delicate sake completely, which is why the masu is now used ceremonially rather than as a drinking vessel.",ja:"吉野杉は樹脂と青い香りを速く与える——樽で数日、枡なら数秒である。繊細な酒は完全に覆われてしまう。枡が現在、飲むための器ではなく儀礼の器として用いられる理由である。",zh:"吉野杉釋出樹脂與青綠香氣極快——在樽中需數日，在枡中僅需數秒。它會完全壓過任何細緻的酒，這正是枡如今作為儀式之器而非飲器使用的原因。"},
             {en:"Ceremony; or a robust futsūshu that can take it.",ja:"儀礼。あるいはそれに耐える骨太な普通酒。",zh:"儀式場合；或能承受它的厚實普通酒。"}],
            [{en:"Glass",ja:"硝子",zh:"玻璃"},"硝子 · ワイングラス",
             {en:"Neutral, thin-rimmed, and the only material that lets you both see and smell properly. A tulip-bowl wine glass is the best available vessel for aromatic ginjō, and Japanese glassmakers — Edo kiriko among them — now cut sake glasses specifically.",ja:"中立で縁が薄く、見ることと嗅ぐことの双方を正しく可能にする唯一の素材である。チューリップ型のワイングラスは香り高い吟醸に最良の器であり、江戸切子をはじめ日本のガラス工芸も、いまや日本酒専用の器を切り出している。",zh:"中性、杯緣薄，是唯一能同時讓你正確地看與聞的材質。鬱金香形葡萄酒杯是芳香型吟釀最佳的器皿；包括江戶切子在內的日本玻璃工藝，如今也專為清酒切製酒器。"},
             {en:"Ginjō, daiginjō, sparkling, anything cold.",ja:"吟醸、大吟醸、発泡、冷たいものすべて。",zh:"吟釀、大吟釀、氣泡酒，以及一切冷飲。"}],
            [{en:"Lacquer",ja:"漆",zh:"漆器"},"漆器",
             {en:"Warm to the lip, very light, and thermally insulating — a lacquer sakazuki keeps warmed sake warm longer than ceramic. Used for ceremony, New Year and weddings more than for everyday drinking.",ja:"唇に温かく、非常に軽く、断熱性が高い。漆の盃は陶磁より長く燗を保つ。日常より、儀礼・正月・婚礼に用いられる。",zh:"觸唇溫潤、極輕，且具隔熱性——漆製酒盞比陶瓷更能長久保溫。多用於儀禮、新年與婚禮，而非日常飲用。"},
             {en:"Ceremony and warmed sake; New Year, weddings, shrine offerings.",ja:"儀礼と燗酒。正月、婚礼、神前の供え。",zh:"儀禮與溫飲；新年、婚禮、神前供奉。"}]
          ] },
        { t:"note", label:{en:"Caring for unglazed ware",ja:"無釉の器の扱い",zh:"無釉器的照料"}, text:{
          en:"Bizen and other unglazed cups absorb what you put in them. Rinse with water and dry thoroughly; never use detergent, never leave sake standing in one overnight, and never put one in a dishwasher. A cup used only for sake and dried properly will improve for decades. A cup that has held soy sauce is finished.",
          ja:"備前をはじめとする無釉の器は、注いだものを吸う。水で洗って完全に乾かすこと。洗剤を使わず、酒を一晩入れたままにせず、食洗機にも入れない。酒だけに使い、きちんと乾かした器は数十年にわたり良くなる。醤油を入れてしまった器は終わりである。",
          zh:"備前及其他無釉杯會吸收你倒入之物。以清水沖洗並徹底晾乾；切勿使用清潔劑、切勿讓酒在其中過夜、切勿放入洗碗機。只用來盛酒並妥善晾乾的杯子，會在數十年間愈用愈好。裝過醬油的杯子，則就此報廢。" } }
      ]
    },

    { t:"section", id:"warming",
      title:{ en:"Warming, in practice", ja:"燗のつけ方——実際", zh:"溫酒的實作" }, jp:"燗のつけ方",
      body:[
        { t:"steps", items:[
          { title:{en:"Water bath — the standard",ja:"湯煎——標準",zh:"水浴——標準作法"}, jp:"湯煎", romaji:"yusen",
            meta:{en:"2–5 minutes · gentlest and most even",ja:"二〜五分・最も穏やかで均一",zh:"2–5 分鐘・最溫和均勻"},
            text:{en:"Fill a tokkuri to about 80%, stand it in a pan of water brought to the boil and taken off the heat, and wait. The flask should be submerged to the shoulder. Roughly two to three minutes gives nuru-kan, four to five gives atsu-kan, but the only reliable method is to test: touch the neck of the flask to the inside of your wrist, or put a thermometer in it.",
                  ja:"徳利に八分目まで注ぎ、沸騰させて火を止めた湯に、肩まで浸かるように立てて待つ。おおむね二〜三分でぬる燗、四〜五分で熱燗になるが、確実なのは確かめることだけである——徳利の首を手首の内側に当てるか、温度計を差す。",
                  zh:"德利注至約八分滿，立於煮沸後離火的熱水中，浸至瓶肩，靜候。約二至三分鐘為溫燗，四至五分鐘為熱燗；但唯一可靠的方法是實測：把德利頸部貼在手腕內側，或插入溫度計。"} },
          { title:{en:"Tin chirori",ja:"錫のちろり",zh:"錫製 chirori"}, jp:"ちろり",
            meta:{en:"about 1 minute · fastest, most controllable",ja:"約1分・最速で制御しやすい",zh:"約 1 分鐘・最快且最易控制"},
            text:{en:"A tall metal vessel conducts heat many times faster than porcelain, so the sake reaches temperature before its aromatics have had time to leave. Serious sake bars warm to the degree this way, often to a different temperature for each bottle.",
                  ja:"背の高い金属の器は磁器の何倍もの速さで熱を伝えるため、香気が飛ぶ前に目標温度に達する。本格的な日本酒バーはこの方法で一度単位の燗をつけ、しばしば銘柄ごとに温度を変える。",
                  zh:"高身金屬器的導熱速度是瓷器的數倍，酒在香氣散失之前即達到目標溫度。正統的清酒吧以此法精準到「度」，且往往每一瓶各設不同溫度。"} },
          { title:{en:"Direct heat and microwaves — don't",ja:"直火と電子レンジ——避ける",zh:"明火與微波——請勿使用"}, jp:"直火・電子レンジ",
            text:{en:"Both heat unevenly. A microwave drives the top of the flask past 60 °C while the base is still cold, boiling off the aromatics at the surface and leaving the sake stratified; direct flame scorches whatever touches the metal. If a microwave is the only option, heat in short bursts and stir between them — but expect to lose the aroma.",
                  ja:"いずれも加熱が不均一である。電子レンジは、底が冷たいままで上部が60℃を超え、表面の香気を飛ばしたうえ層をつくる。直火は金属に触れた部分を焦がす。電子レンジしか手段がないなら、短く区切って加熱し、そのつど混ぜること。ただし香りは失われると考えたほうがよい。",
                  zh:"兩者受熱皆不均。微波爐會讓瓶口部分超過 60°C，底部卻仍是冷的，表層香氣被煮散且酒液分層；明火則會燒焦接觸金屬之處。若只有微波爐可用，請分次短時加熱並於每次之間攪動——但預期香氣將會流失。"} },
          { title:{en:"Cooling back down",ja:"冷まし戻す",zh:"降溫回復"},
            meta:{en:"an overheated sake does not fully recover",ja:"上げすぎた燗は完全には戻らない",zh:"加熱過度的酒無法完全復原"},
            text:{en:"Volatile aromatics that have left the liquid do not come back. A sake taken to 60 °C and cooled to 45 °C is not the same as one warmed carefully to 45 °C — the body is intact but the top notes are gone. Warm cautiously and go up, rather than overshooting and waiting.",
                  ja:"液を離れた揮発性の香気は戻らない。60℃まで上げてから45℃に冷ました酒は、慎重に45℃へ導いた酒とは別物である。骨格は残るが、上立ち香は失われている。行き過ぎて待つのではなく、控えめに温めて上げていくこと。",
                  zh:"已離開液體的揮發性香氣不會回來。加熱到 60°C 再降至 45°C 的酒，與小心地溫至 45°C 的酒並不相同——酒體仍在，但上層香氣已失。應謹慎地逐步升溫，而非衝過頭再等它降下來。"} }
        ] },
        { t:"panel", tint:"wood", title:{en:"Kanzake-shi",ja:"燗酒師",zh:"燗酒師"}, body:[
          { t:"p", text:{
            en:"Warming sake well is a recognised specialisation with its own certification. A kanzake specialist chooses a target temperature for each bottle by tasting it cold first, warms it in a chirori to the degree, and will often serve the same sake twice at two temperatures so the difference is visible. If you find a bar that does this, everything on this page becomes concrete in an evening.",
            ja:"燗をつけることはそれ自体が認められた専門であり、資格も存在する。燗の専門家は、まず冷やで味わって一本ごとの目標温度を定め、ちろりで一度単位に温め、しばしば同じ酒を二つの温度で供して差を見せる。それを行う店を見つけられれば、本頁のすべては一晩で具体的なものになる。",
            zh:"把酒溫好本身即是一項受認可的專業，並有專屬資格認證。燗酒專家先以冷飲品嚐，為每一瓶定出目標溫度，再以 chirori 精準到「度」加溫，並常將同一款酒以兩種溫度分別供上，讓差異可見。若你找到這樣一家店，本頁的一切都會在一個晚上變得具體。" } }
        ] }
      ]
    },

{ t:"section", id:"physics",
      title:{ en:"The physics of getting it right", ja:"温度を当てるための物理", zh:"把溫度做對的物理" }, jp:"熱の話",
      body:[
        { t:"p", text:{
          en:"Warming sake is a heat-transfer problem with three variables — the source, the vessel and the time — and almost every bad experience of warm sake comes from getting one of them wrong rather than from disliking warm sake.",
          ja:"燗をつけることは、三つの変数——熱源、器、時間——をもつ伝熱の問題である。燗酒の悪い経験のほとんどすべては、燗が嫌いだからではなく、そのうち一つを誤ったことから来る。",
          zh:"溫酒是一個有三個變因的熱傳問題——熱源、器皿、時間。幾乎所有關於溫酒的糟糕經驗，都來自其中一項出了錯，而不是來自不喜歡溫酒。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Use water, not flame", ja:"火ではなく湯を使う", zh:"用水，不用火" }, jp:"湯煎", romaji:"yusen",
            meta:{ en:"Even heat, and a ceiling", ja:"均一な熱と、上限", zh:"均勻的熱，以及一個上限" },
            text:{ en:"A hot-water bath cannot exceed 100 °C and transfers heat evenly across the whole submerged surface, so nothing in the flask ever gets much hotter than anything else. Direct flame and a microwave both do the opposite: they create local hot spots where alcohol and aromatics boil off, leaving the harsh, flat character most people mean when they say they dislike warm sake. The fix is not technique, it is method.",
              ja:"湯煎は百度を超えず、浸かった面の全体に均一に熱を伝えるから、瓶のなかのどこかが他より大きく熱くなることがない。直火と電子レンジはその逆をなす——局所の熱点を作り、そこでアルコールと香りが飛び、燗が嫌いだと言う人の多くが意味している、あの荒く平板な性格を残す。直すべきは腕ではなく方法である。",
              zh:"隔水加熱不會超過 100 °C，並在整個浸沒表面均勻傳熱，因此壺內任何一處都不會比別處熱太多。直火與微波爐正好相反：它們製造局部熱點，讓酒精與香氣在那裡沸散，留下多數人說「討厭溫酒」時所指的那種粗糙平板。要修正的不是手法，而是方法。" } },
          { n:"2", title:{ en:"Metal is fast, ceramic is slow", ja:"金属は速く、陶磁は遅い", zh:"金屬快，陶瓷慢" }, jp:"器の熱伝導", romaji:"netsu-dendō",
            meta:{ en:"The vessel is half the equation", ja:"器が式の半分である", zh:"器皿占了公式的一半" },
            text:{ en:"A tin chirori reaches target in a minute or two and does so evenly; a thick ceramic tokkuri takes several minutes and heats from the outside in, so the sake at the wall is well past target while the centre is still cold. If you are using a ceramic flask, stir it once with a chopstick halfway through — a trivial action that fixes most of the unevenness.",
              ja:"錫のちろりは一、二分で目標に達し、しかも均一である。厚い陶の徳利は数分を要し、外から内へ温まるから、壁際の酒が目標をとうに越えているとき、中心はまだ冷たい。陶の徳利を使うなら、途中で一度、箸で混ぜるとよい。些細な所作が、不均一のほとんどを直す。",
              zh:"錫製銚釐一兩分鐘就能均勻達到目標溫度；厚陶德利要好幾分鐘，且是由外向內加熱，因此貼壁的酒早已超過目標時，中心還是冷的。若用陶製酒壺，中途拿筷子攪一下——一個微不足道的動作，就能修正大部分的不均。" } },
          { n:"3", title:{ en:"Overshoot, then let it fall", ja:"少し越えさせ、落とす", zh:"稍微超過，再讓它降" }, jp:"目標温度", romaji:"mokuhyō ondo",
            meta:{ en:"Serving temperature is not target temperature", ja:"供する温度と目標温度は違う", zh:"供飲溫度不等於目標溫度" },
            text:{ en:"Sake loses two or three degrees between the bath and the first mouthful, and several more over the first few minutes in a thin cup. Aim two or three degrees above where you want it to land, and remember that a warm sake is a moving target: the second cup from the same flask is a different drink from the first, and often a better one.",
              ja:"酒は湯から最初の一口までに二、三度を失い、薄い杯では最初の数分でさらに数度を失う。落としたい温度より二、三度上を狙うとよい。そして燗は動く的である——同じ徳利の二杯目は一杯目とは別の飲み物であり、しばしばそちらのほうがよい。",
              zh:"從熱水中取出到第一口之間，酒會降兩三度；在薄杯裡的最初幾分鐘還會再降幾度。把目標設在你想要落點的上方兩三度。而且要記得：溫酒是個移動的靶——同一壺的第二杯與第一杯是不同的飲料，而且往往更好。" } },
          { n:"4", title:{ en:"Judging without a thermometer", ja:"温度計なしで判じる", zh:"不用溫度計判斷" }, jp:"手で測る", romaji:"te de hakaru",
            meta:{ en:"The neck, the base, the steam", ja:"首、底、湯気", zh:"壺頸、壺底、蒸氣" },
            text:{ en:"Touch the base of the flask with the back of a finger. Faintly warm and you are around body temperature — <em>hitohada</em>, 35 °C. Warm but comfortable to hold is <em>nuru-kan</em>, about 40. Hot enough that you want to let go quickly is <em>jō-kan</em>, about 45. When steam first shows clearly at the neck you are at 50 and climbing, and you should take it out. A thermometer is better; a finger is enough.",
              ja:"指の背で徳利の底に触れる。ほのかに温かければ体温あたり——人肌、35℃である。温かいが持っていられるならぬる燗、およそ40℃。すぐ手を離したくなるほどなら上燗、およそ45℃。首からはっきり湯気が立ち始めたら50℃で、なお上がりつつある。出すべきである。温度計のほうがよいが、指で足りる。",
              zh:"用指背碰觸酒壺底部。微溫，大約是體溫——「人肌」，35 °C。溫熱但仍拿得住，是「溫燗」，約 40 °C。燙到會想趕快放手，是「上燗」，約 45 °C。當壺頸開始明顯冒出蒸氣，就是 50 °C 且還在上升，該把它取出來了。溫度計更好，但一根手指也就夠了。" } }
        ] },

        { t:"panel", title:{ en:"Going the other way", ja:"逆へ向かう", zh:"往另一個方向" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Fridge, not freezer, for anything you care about.</strong> A domestic freezer will take a bottle below sake's freezing point of about −7 °C, and the bottle will crack. Twenty minutes in a bucket of ice and water — not ice alone, which insulates — chills a bottle faster than an hour in a freezer and with no risk.",
                ja:"<strong>大事な一本は冷凍庫ではなく冷蔵庫へ。</strong>家庭用冷凍庫は、およそマイナス7℃という日本酒の氷点を下回らせ、瓶は割れる。氷と水を張った桶に二十分——氷だけでは断熱してしまう——が、冷凍庫の一時間より速く、危険もない。",
                zh:"<strong>在意的酒放冰箱，不要放冷凍庫。</strong>家用冷凍庫會讓酒瓶降到清酒約 −7 °C 的冰點以下，瓶子會裂。用冰加水的桶冰鎮二十分鐘——只放冰塊反而會隔熱——比冷凍庫一小時更快，也沒有風險。" },
              { en:"<strong>Cold suppresses aroma as effectively as heat releases it.</strong> Below about 8 °C a ginjō's esters largely stop reaching you, which is why an over-chilled expensive bottle tastes of very little. Pour it cold, then let the glass sit for five minutes and taste again; the difference is usually startling.",
                ja:"<strong>冷たさは、熱が香りを放つのと同じだけ確実に香りを抑える。</strong>およそ8℃を下回ると吟醸のエステルはほとんど届かなくなる。冷やしすぎた高価な瓶がほとんど何の味もしない理由である。冷たいまま注ぎ、五分置いてもう一度味わうとよい。差はたいてい驚くほどである。",
                zh:"<strong>低溫壓抑香氣的效力，和加熱釋放香氣一樣確實。</strong>低於約 8 °C，吟釀的酯類就大致傳不到你這裡了——這正是一支冰過頭的昂貴酒喝起來幾乎沒味道的原因。倒出來冰著喝一口，讓杯子靜置五分鐘再嚐一次；差別通常令人吃驚。" },
              { en:"<strong>Ice is a serving style, not a mistake — for the right sake.</strong> A genshu at 18% over one large cube is a designed experience: the dilution is doing what the brewery's blending water would otherwise have done. On a 15% sake it is simply watering.",
                ja:"<strong>氷は誤りではなく供し方である——正しい酒に対しては。</strong>18%の原酒を大きな氷ひとつで割るのは設計された経験である。加水が、本来なら蔵の割水が行っていたことをしている。15%の酒では、単に薄めているだけである。",
                zh:"<strong>加冰是一種供飲方式，不是錯誤——前提是酒對。</strong>18% 的原酒配一顆大冰塊，是被設計出來的體驗：稀釋在做的，正是酒藏的割水本來會做的事。用在 15% 的酒上，就只是加水而已。" },
              { en:"<strong>Room temperature is a real category and Japan has a word for it.</strong> <em>Hiya</em> means unheated and unchilled, around 20 °C, and it is where a great many junmai are at their most legible — neither the cold nor the heat is doing anything, so what is left is the sake.",
                ja:"<strong>常温は実在する区分であり、日本語にはその語がある。</strong>「冷や」とは温めも冷やしもしない、およそ20℃のことである。きわめて多くの純米が最も読みやすいのはここである——冷たさも熱さも何もしていないから、残っているのは酒そのものである。",
                zh:"<strong>常溫是一個真實的類別，日文裡有專門的詞。</strong>「冷や」指的是不加熱也不冰鎮、約 20 °C 的狀態；許多純米在此最容易被讀懂——低溫與高溫都沒在作用，剩下的就是酒本身。" }
            ] }
          ] },

        { t:"note", text:{
          en:"For why temperature changes perception at all — volatility, umami, the suppression of sweetness — see <a href=\"tasting.html#physiology\">Tasting</a>. For what the vessel is doing while all this happens, see <a href=\"vessels.html#geometry\">Cups &amp; Vessels</a>.",
          ja:"温度がなぜ知覚を変えるのか——揮発、旨味、甘味の抑制——は<a href=\"tasting.html#physiology\">利き酒</a>を参照。そのあいだ器が何をしているかは<a href=\"vessels.html#geometry\">酒器</a>を参照。",
          zh:"溫度為何會改變知覺——揮發性、旨味、甜味的抑制——見<a href=\"tasting.html#physiology\">品評</a>。這一切發生時器皿在做什麼，見<a href=\"vessels.html#geometry\">酒器</a>。" } }
      ] },

    { t:"related", items:[
      { href:"vessels.html", why:{ en:"The cups and flasks, and what each does.", ja:"杯と徳利、そのそれぞれの働き。", zh:"酒杯與德利，以及它們各自的作用。" } },
      { href:"styles.html", why:{ en:"Which style wants which temperature.", ja:"どの型がどの温度を求めるか。", zh:"哪一種風格想要哪一種溫度。" } },
      { href:"service.html", why:{ en:"The same decisions when somebody is paying for them.", ja:"代を取るときの、同じ決めごと。", zh:"當有人要為此付錢時，同樣的那些決定。" } },
      { href:"taste.html", why:{ en:"What heat does to the compounds themselves.", ja:"熱が成分そのものになすこと。", zh:"熱對這些化合物本身做了什麼。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- vessels */
SAKE.pages["vessels"] = {
  kicker: { en: "Drinking · 04", ja: "飲む · 04", zh: "品飲 · 04" },
  title:  { en: "Cups & Vessels", ja: "酒器", zh: "酒器" },
  jp: "酒器の形と素材",
  lede: {
    en: "Sake is the only major drink whose serving vessel is not standardised, and the range is enormous: a thimble of white porcelain, a rough Bizen bowl, a tin flask, a cedar box, a cut-glass tumbler, a lacquered flat dish held in two hands. This is not decoration. Rim diameter, wall thickness, glaze texture, thermal conductivity and interior colour each measurably change what reaches the drinker, and a brewery's own tasting room uses one specific cup for exactly that reason. This page covers the forms, the materials, the crafts that make them, and what each one does to the sake.",
    ja: "日本酒は、主要な飲み物のうち器の標準化されていない唯一のものであり、その幅は途方もない——白磁の指ぬきほどの猪口、荒い備前の盃、錫の徳利、檜の枡、切子の硝子、両手で受ける漆の平盃。これは装飾ではない。口径、器壁の厚み、釉の肌、熱伝導、そして見込みの色は、いずれも飲み手に届くものを測定可能なほどに変える。蔵の利き酒室がただ一種の猪口を用いるのは、まさにその理由による。このページは、形と、素材と、それを作る工芸と、そしてそれぞれが酒に何をするかを扱う。",
    zh: "清酒是主要飲品中唯一沒有標準化酒器的一種，而其幅度極為龐大：白瓷做的頂針般小杯、粗獷的備前酒盃、錫製酒壺、檜木方枡、切子玻璃杯、雙手捧著的漆器平盃。這不是裝飾。口徑、器壁厚度、釉面質地、導熱性與內壁顏色，每一項都可測量地改變送達飲者的東西；酒藏的品評室之所以只用一種特定的猪口，正是這個原因。本頁涵蓋器形、材質、製作它們的工藝，以及每一種對酒做了什麼。"
  },
  body: [

    { t:"section", id:"forms",
      title:{ en:"The forms", ja:"形", zh:"器形" }, jp:"器の種類",
      body:[
        { t:"p", text:{
          en:"Japanese has a precise vocabulary for drinking vessels, and the distinctions are functional rather than merely polite. The main division is between the cup you drink from and the vessel you pour from, and within each there are forms tied to specific occasions, temperatures and volumes.",
          ja:"日本語には酒器についての精密な語彙があり、その区別は礼儀のためではなく機能のためのものである。大きな分かれ目は、飲む器と注ぐ器のあいだにあり、それぞれのうちに、特定の場と温度と量に結びついた形がある。",
          zh:"日文對酒器有一套精確的詞彙，而這些區分是功能性的，而非只是禮貌性的。最主要的分野在於「用來喝的器」與「用來斟的器」；而各自之中，又有與特定場合、溫度與容量相繫的形制。" } },

        { t:"table",
          cols:[{en:"Vessel",ja:"器",zh:"器"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Capacity",ja:"容量",zh:"容量"},{en:"What it is for",ja:"用途",zh:"用途"}],
          jpCols:[1],
          rows:[
            [{en:"Ochoko",ja:"お猪口",zh:"猪口"},"お猪口",{en:"20–60 ml",ja:"20〜60ml",zh:"20–60 ml"},
             {en:"The small cup of everyday drinking, filled by someone else and emptied in one or two mouthfuls. Its smallness is social: it requires constant refilling, and the refilling is the point.",
              ja:"日常の小さな杯であり、人に注がれ、一口二口で空になる。その小ささは社交的である——絶えず注ぎ足しを要し、そしてその注ぎ足しこそが眼目である。",
              zh:"日常飲用的小杯，由旁人斟滿，一兩口喝完。它的小是社交性的：它需要不斷續斟，而續斟正是重點所在。"}],
            [{en:"Guinomi",ja:"ぐい呑み",zh:"吞杯"},"ぐい呑み",{en:"60–120 ml",ja:"60〜120ml",zh:"60–120 ml"},
             {en:"Larger, heavier, held in the palm; the name means roughly &#8220;gulp it down&#8221;. This is the form most collected and most made by studio potters, because its size gives a maker somewhere to work.",
              ja:"より大きく重く、掌に収まる。名は「ぐいと呑む」に由来する。作家がこしらえ、蒐集されるのは何よりこの形である。その寸法が作り手に仕事の余地を与えるからである。",
              zh:"更大、更沉，握在掌心；名字大致意為「一口吞下」。這是最常被作家陶藝製作、也最常被收藏的器形，因為它的尺寸給了創作者發揮的餘地。"}],
            [{en:"Sakazuki",ja:"盃",zh:"盃"},"盃",{en:"20–90 ml, shallow",ja:"20〜90ml、浅い",zh:"20–90 ml，淺"},
             {en:"A wide, shallow, flat dish on a low foot. The ceremonial form — weddings, New Year, shrine offerings — and, because its surface area is large, the one that gives up aroma fastest and warms fastest in the hand.",
              ja:"低い高台をもつ、広く浅い平らな器。儀礼の形である——婚礼、正月、神への供え。そして表面積が大きいため、香りを最も速く手放し、手のなかで最も速く温まる形でもある。",
              zh:"帶低圈足、寬而淺的平盤形。這是儀禮的形制——婚禮、新年、神前供奉；也因表面積大，是最快釋出香氣、也最快被手溫暖起來的器形。"}],
            [{en:"Janome kikichoko",ja:"蛇の目利き猪口",zh:"蛇目利き猪口"},"蛇の目",{en:"180 ml",ja:"180ml",zh:"180 ml"},
             {en:"The official assessment cup: white porcelain, straight-sided, with two concentric blue rings painted in the bottom. Standard at every judging in Japan. See below.",
              ja:"公式の審査用の器である。白磁、直の胴、見込みに藍の二重円。日本のあらゆる審査で標準とされる。後述する。",
              zh:"官方的評鑑用杯：白瓷、直筒身，杯底繪有兩道同心的藍圈。日本各項評審的標準用器。詳見下文。"}],
            [{en:"Masu",ja:"枡",zh:"枡"},"枡",{en:"180 ml (one gō)",ja:"180ml（一合）",zh:"180 ml（一合）"},
             {en:"A square wooden box, originally a dry measure for rice. Drinking from it is a relatively modern habit and a divisive one — the cedar is a strong flavour. Most commonly used today as a saucer under a glass for the overflow pour.",
              ja:"四角い木の箱であり、もとは米を量る枡である。これで飲む習慣は比較的新しく、また評価が割れる——杉は強い風味である。今日最も多いのは、盛りこぼしのために硝子杯の下に受けとして使う用法である。",
              zh:"方形木盒，原本是量米的量器。用它喝酒是相對晚近的習慣，且評價兩極——杉木的味道很強。如今最常見的用法，是墊在玻璃杯下承接「盛りこぼし」溢出的酒。"}],
            [{en:"Tokkuri",ja:"徳利",zh:"德利"},"徳利",{en:"180–360 ml",ja:"180〜360ml",zh:"180–360 ml"},
             {en:"The narrow-necked flask for warming and pouring. The narrow neck is functional: it slows evaporation while the flask stands in hot water and it controls the pour. Sizes correspond to one and two gō.",
              ja:"燗と注ぎのための、首の細い瓶である。細い首は機能的である——湯に立てているあいだの蒸発を抑え、注ぎを制御する。寸法は一合と二合に対応する。",
              zh:"用於溫酒與斟酒的細頸壺。細頸是有功能的：壺立在熱水中時可減緩揮發，並控制斟酒的流量。尺寸對應一合與二合。"}],
            [{en:"Katakuchi",ja:"片口",zh:"片口"},"片口",{en:"200–500 ml",ja:"200〜500ml",zh:"200–500 ml"},
             {en:"An open bowl with a single lip. Because it is open it aerates and warms toward room temperature, which suits a cold sake that is too tight straight from the fridge. The modern preference for katakuchi over tokkuri in specialist bars is a preference for that aeration.",
              ja:"注ぎ口を一つ持つ開いた鉢である。開いているため空気に触れ、常温へ向かって温まる。冷蔵庫から出したままでは締まりすぎた冷酒に向く。専門店で徳利より片口が好まれる近年の傾向は、この空気との接触への好みである。",
              zh:"帶單一注口的開放式缽。因為是開放的，酒會接觸空氣並朝室溫回溫，適合剛從冰箱取出、過於緊繃的冷酒。近年專門店偏好片口勝過德利，偏好的正是這份與空氣的接觸。"}],
            [{en:"Chirori",ja:"ちろり",zh:"銚釐"},"銚釐",{en:"180–500 ml",ja:"180〜500ml",zh:"180–500 ml"},
             {en:"A tall metal warming vessel with a handle, usually tin, stood directly in the hot-water bath. Metal conducts far faster than ceramic, so a chirori reaches temperature evenly in a fraction of the time — the professional's warming tool.",
              ja:"取っ手のある背の高い金属の燗器であり、多くは錫製で、湯煎に直接立てる。金属は陶磁よりはるかに速く熱を伝えるため、ちろりは短い時間で均一に温度へ達する。玄人の燗の道具である。",
              zh:"帶把手的高身金屬溫酒器，多為錫製，直接立於熱水中溫燙。金屬導熱遠快於陶瓷，因此銚釐能在極短時間內均勻達到目標溫度——這是行家的溫酒工具。"}],
            [{en:"Wine glass",ja:"ワイングラス",zh:"葡萄酒杯"},"ワイングラス",{en:"any",ja:"任意",zh:"不拘"},
             {en:"Not traditional and now unavoidable. A tulip bowl concentrates the esters of an aromatic ginjō in a way no Japanese form does, which is precisely why there is a national competition judged in one. For a warm, savoury junmai it is close to the wrong choice.",
              ja:"伝統的ではないが、今や避けえない。チューリップ型の器は、日本のいかなる形もなしえない仕方で香り高い吟醸のエステルを集める。それを用いて審査する全国の品評会がある理由はまさにそれである。温めた旨味の純米にとっては、ほとんど誤った選択である。",
              zh:"並非傳統，如今卻無法迴避。鬱金香形的杯肚能以任何日本器形都做不到的方式聚攏芳香吟釀的酯類——這正是有一項全國評鑑以它評審的原因。但對一支溫熱、旨味型的純米而言，它幾乎是錯誤的選擇。"}]
          ] },

        { t:"note", text:{
          en:"Two words describe pouring rather than vessels. <em>Shakutori</em> is the act of pouring for another; in most Japanese drinking situations you fill your companion's cup and they fill yours, and pouring your own is a small signal that the group has relaxed. <em>Morikoboshi</em> or <em>sosogikoboshi</em> is the deliberate overflow — a glass set inside a masu or on a saucer and filled until it spills — which is a gesture of generosity in an izakaya and, incidentally, a way of serving rather more than the menu says.",
          ja:"器ではなく注ぐことを指す語が二つある。酌とは他人に注ぐ行いである。日本の多くの酒席では相手の杯を満たし、相手が自分の杯を満たす。手酌は、その場が寛いだことの小さな合図である。盛りこぼし（そそぎこぼし）は意図された溢れである——枡や受け皿に置いた硝子杯を、こぼれるまで満たす。居酒屋における気前のよさの所作であり、ついでに、品書きの表示よりいくらか多く供する方法でもある。",
          zh:"有兩個詞說的是「斟」而非器具。「酌」是為他人斟酒；在日本多數酒席上，你為同伴斟滿，同伴為你斟滿，而自斟（手酌）是這場合已經放鬆下來的小小訊號。「盛りこぼし」或「注ぎこぼし」則是刻意的溢出——玻璃杯放在枡或碟上，斟到滿溢——這在居酒屋是慷慨的姿態，順帶也是一種比菜單所寫供應得更多的方式。" } }
      ] },

    { t:"section", id:"janome",
      title:{ en:"The snake's eye", ja:"蛇の目", zh:"蛇之眼" }, jp:"利き猪口",
      body:[
        { t:"p", text:{
          en:"The one standardised vessel in sake is the assessment cup, and it is worth understanding because everything about it is deliberate.",
          ja:"日本酒において標準化された唯一の器が利き猪口である。そのすべてが意図されているがゆえに、理解する値打ちがある。",
          zh:"清酒中唯一被標準化的器具是利き猪口（品評杯），值得理解，因為它的每一處都是刻意設計的。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"White porcelain", ja:"白磁", zh:"白瓷" }, jp:"白磁",
            v:{ en:"A neutral ground", ja:"中立の地", zh:"中性的底色" },
            d:{ en:"Colour is one of the four things a judge scores, and sake's colour range — water-clear to pale straw to amber — is subtle. Only a pure white interior makes it readable. A glazed stoneware cup, however beautiful, hides it entirely.",
              ja:"色は審査員が採点する四項目の一つであり、日本酒の色域——無色透明から淡い麦藁色、そして琥珀へ——は微妙である。純白の見込みのみがそれを読ませる。釉のかかった陶器の杯は、どれほど美しくとも、色を完全に隠す。",
              zh:"色澤是評審評分的四個項目之一，而清酒的色域——清澈如水、淡稻草色、到琥珀色——十分細微。只有純白的內壁能讓它可讀。上釉的陶器杯無論多美，都會把色澤完全遮蔽。" } },
          { k:{ en:"Two blue rings", ja:"藍の二重円", zh:"兩道藍圈" }, jp:"蛇の目",
            v:{ en:"A clarity gauge", ja:"透明度の物差し", zh:"清澈度的量尺" },
            d:{ en:"Concentric cobalt circles in the base. Looking down through the sake at the sharpness of the inner edge measures clarity and haze; the contrast between the blue and the white reveals a green or amber cast that a plain white bottom would not. It is a purpose-built optical instrument that happens to be a cup.",
              ja:"見込みに描かれた同心の呉須の円。酒を通して内側の縁の鋭さを見ることで、澄み具合と濁りを測る。藍と白の対比は、白一色の底では見えない緑や琥珀の色調を露わにする。たまたま杯の形をした、目的のために作られた光学器具である。",
              zh:"杯底繪有同心的鈷藍圓圈。透過酒液俯視內圈邊緣的銳利程度，可衡量澄清度與混濁；藍與白的對比則會顯出純白杯底看不出的偏綠或偏琥珀的色調。它是一件恰好長成杯子的、為特定目的打造的光學儀器。" } },
          { k:{ en:"180 millilitres", ja:"一合", zh:"一合" }, jp:"一合",
            v:{ en:"Bigger than you think", ja:"思うより大きい", zh:"比你以為的大" },
            d:{ en:"A full gō — far more than anyone drinks from it. The volume gives a large surface for aroma to rise from and enough liquid to judge a colour depth. Judges do not swallow; a national appraisal panel assesses several hundred entries in a session.",
              ja:"一合まるごとであり、そこから実際に飲む量をはるかに超える。この容量は香りの立つ広い面と、色の濃さを判ずるに足る液量を与える。審査員は飲み込まない。全国の鑑評会の審査団は、一度の会で数百点を評価する。",
              zh:"整整一合，遠多於任何人會從中喝掉的量。這個容量提供了讓香氣升起的大面積，以及足以判斷色深的液量。評審不吞嚥；全國鑑評會的評審團一場要評數百件出品。" } },
          { k:{ en:"Straight sides", ja:"直の胴", zh:"直筒杯身" }, jp:"寸胴",
            v:{ en:"Repeatable, not flattering", ja:"再現的であり、美化しない", zh:"可重現，而非討喜" },
            d:{ en:"No tulip taper, because the point is not to make the sake smell as good as possible but to make every sample smell comparable. This is the exact opposite of the wine-glass principle, and both are correct for their purpose.",
              ja:"チューリップの窄まりはない。酒をできるだけよく香らせることが眼目ではなく、すべての試料を比較可能に香らせることが眼目だからである。ワイングラスの原理とは正反対であり、それぞれの目的においてどちらも正しい。",
              zh:"沒有鬱金香形的收口，因為重點不是讓酒盡可能好聞，而是讓每一個樣品的氣味具可比性。這與葡萄酒杯的原理完全相反，而就各自的目的而言，兩者都正確。" } }
        ] }
      ] },

    { t:"section", id:"materials",
      title:{ en:"What the material does", ja:"素材の働き", zh:"材質做了什麼" }, jp:"素材",
      body:[
        { t:"p", text:{
          en:"Material changes three measurable things — how fast heat moves, how the rim meets the lip, and whether the surface is porous — and one unmeasurable one, which is how the object feels in the hand and therefore how attentively it is drunk from.",
          ja:"素材は測りうる三つのもの——熱の移動の速さ、縁と唇の接し方、表面が多孔質かどうか——と、測りえない一つのもの、すなわち手のなかでの感触、ひいてはどれほど心を向けて飲まれるかとを変える。",
          zh:"材質改變三件可測量的事——熱傳遞的速度、杯緣與唇的接觸方式、表面是否多孔——以及一件無法測量的事：這件器物握在手中的感覺，以及因此人們喝它時有多專注。" } },

        { t:"table",
          cols:[{en:"Material",ja:"素材",zh:"材質"},{en:"Japanese",ja:"和名",zh:"日文"},{en:"Behaviour",ja:"振る舞い",zh:"表現"},{en:"Best with",ja:"向く酒",zh:"適合的酒"}],
          jpCols:[1],
          rows:[
            [{en:"Porcelain",ja:"磁器",zh:"瓷器"},"磁器",
             {en:"Thin, hard, non-porous, and a thin rim that almost disappears against the lip. Slow to change temperature. Fires white, which is why it is the assessment material.",
              ja:"薄く、硬く、多孔質でなく、唇に当たってほとんど消える薄い縁を持つ。温度は動きにくい。白く焼き上がるがゆえに、審査の素材となる。",
              zh:"薄、硬、不多孔，杯緣纖薄到貼上嘴唇幾乎不存在。溫度變化慢。燒成白色，因此成為評鑑用材質。"},
             {en:"Anything, and everything delicate. The default correct answer.",ja:"何にでも。繊細な酒のすべてに。既定の正解である。",zh:"什麼都行，尤其是所有纖細的酒。這是預設的正確答案。"}],
            [{en:"Stoneware",ja:"陶器",zh:"陶器"},"陶器",
             {en:"Thicker walls, a heavier rim, an often unglazed or roughly glazed surface. Holds heat longer. Bizen and Shigaraki are fired unglazed and their fine porosity is claimed to soften a sake's edges — a claim widely believed and not well tested.",
              ja:"厚い器壁、重い縁、しばしば無釉あるいは粗い釉の肌。熱を長く保つ。備前や信楽は釉をかけずに焼かれ、その細かな多孔質が酒の角を取るとされる。広く信じられ、そして十分には検証されていない主張である。",
              zh:"器壁較厚、杯緣較重，表面往往無釉或施粗釉。保溫較久。備前與信樂不上釉燒製，其細微的多孔性據說能磨去酒的稜角——這個說法流傳甚廣，卻未經充分檢驗。"},
             {en:"Warm sake; robust junmai; kimoto and yamahai.",ja:"燗、骨のある純米、生酛・山廃。",zh:"溫飲；結實的純米；生酛與山廢。"}],
            [{en:"Tin",ja:"錫",zh:"錫"},"錫",
             {en:"Conducts heat very fast, which makes it the best warming metal and also means a tin cup of cold sake is cold in the hand within seconds. Chemically inert and traditionally credited with rounding off harshness.",
              ja:"熱をきわめて速く伝えるため、燗の金属として最も優れる。同時に、冷酒を注いだ錫の杯は数秒で手に冷たい。化学的に不活性であり、古来、角を取るとされてきた。",
              zh:"導熱極快，因此是最好的溫酒金屬；同時也意味著盛了冷酒的錫杯幾秒內就會在手中變冷。化學性質惰性，自古被認為能磨圓酒的粗糙感。"},
             {en:"Warming vessels above all; also cold genshu, where the chill helps.",ja:"何より燗の器として。冷えが助けになる原酒の冷やしにも。",zh:"首先是溫酒器；也適合冷飲原酒，因為低溫在此有幫助。"}],
            [{en:"Glass",ja:"硝子",zh:"玻璃"},"硝子",
             {en:"Neutral, transparent, and cold to the lip. Cut glass — the Edo and Satsuma <em>kiriko</em> traditions — adds refraction and weight without changing flavour, and is the summer material by convention.",
              ja:"中立で、透明で、唇に冷たい。切子——江戸切子、薩摩切子の系譜——は、味を変えずに屈折と重みを加える。慣例として夏の素材である。",
              zh:"中性、透明，觸唇冰涼。切子——江戶切子與薩摩切子的傳統——在不改變風味的前提下增加折射與重量，並依慣例是夏季的材質。"},
             {en:"Cold sake, sparkling, nama. Anything you want to look at.",ja:"冷酒、発泡、生酒。見て楽しみたい酒すべて。",zh:"冷酒、氣泡酒、生酒。任何你想欣賞其外觀的酒。"}],
            [{en:"Lacquer",ja:"漆器",zh:"漆器"},"漆器",
             {en:"Wood under many coats of urushi. Warm to the touch, almost weightless, and thermally insulating — a lacquer cup keeps warm sake warm longer than anything else. Cannot go in a dishwasher and dislikes prolonged soaking.",
              ja:"幾重にも漆を重ねた木地である。手に温かく、ほとんど重さがなく、断熱する——漆の杯は、何よりも長く燗を温かく保つ。食洗機は使えず、長い浸けおきを嫌う。",
              zh:"木胎上塗以多層生漆。觸感溫暖、幾乎沒有重量，且具隔熱性——漆杯保溫的時間比任何材質都久。不能進洗碗機，也不耐長時間浸泡。"},
             {en:"Warm sake, and ceremonial sakazuki.",ja:"燗、そして儀礼の盃。",zh:"溫飲，以及儀禮用的酒盃。"}],
            [{en:"Wood",ja:"木",zh:"木"},"木",
             {en:"Usually hinoki cypress or cedar, unfinished. Contributes a strong resinous aroma of its own, which is either the entire point or an intrusion depending on the drinker and the sake.",
              ja:"多くは檜あるいは杉の白木である。それ自身の強い樹脂の香を与える。それが眼目そのものであるか、あるいは邪魔であるかは、飲み手と酒による。",
              zh:"通常是未上塗裝的檜木或杉木。會貢獻自身強烈的樹脂香氣——這究竟是全部的重點，還是一種干擾，端看飲者與酒而定。"},
             {en:"Celebration; taru-zake, where the cedar is already the flavour.",ja:"祝いの席。杉の香がすでに味である樽酒に。",zh:"慶典場合；以及杉香本就是風味的樽酒。"}],
            [{en:"Silver and gold",ja:"銀・金",zh:"銀與金"},"銀",
             {en:"Rare, expensive, and thermally similar to tin. Silver is traditionally said to sharpen a sake's outline; whether that is the metal or the ceremony surrounding a silver cup is impossible to separate.",
              ja:"稀で、高価で、熱的には錫に近い。銀は酒の輪郭を鋭くするとされてきた。それが金属によるのか、銀の杯を取り巻く場によるのかは、分かちようがない。",
              zh:"罕見、昂貴，導熱性質接近錫。傳統上認為銀能讓酒的輪廓更銳利；那究竟來自金屬本身，還是來自環繞著銀杯的那份儀式感，無從分辨。"},
             {en:"Occasions.",ja:"晴れの場に。",zh:"重要場合。"}]
          ] }
      ] },

    { t:"section", id:"geometry",
      title:{ en:"Why the shape changes the taste", ja:"形が味を変える理由", zh:"為何器形會改變味道" }, jp:"形状の効果",
      body:[
        { t:"figure",
          caption:{
            en:"Seven vessels in cross-section, drawn to one scale, each holding the amount it is normally filled with. The number above each is the rim diameter in millimetres — the single dimension that decides how much aroma reaches the nose. The bar below is a schematic index of how much of that aroma the shape holds above the liquid rather than letting go: the flat ritual sakazuki keeps almost none, the tulip keeps nearly all. Everything else on this page is a variation on that one trade-off.",
            ja:"七つの器を断面で、同じ縮尺で描き、それぞれ普段満たされる量を入れたもの。上の数はミリメートルで表した口径であり、どれだけの香りが鼻に届くかを決めるただ一つの寸法である。下の棒は、その香りをどれだけ液の上に留めるか——逃がさずにおくか——の模式的な指数である。平らな儀礼の盃はほとんど留めず、チューリップ型はほとんどすべてを留める。このページの他のすべては、この一つの取引の変奏にすぎない。",
            zh:"七只器皿的剖面，以同一比例尺繪出，各自盛著平常會斟到的份量。每只上方的數字是以毫米計的口徑——決定有多少香氣能抵達鼻子的那唯一一個尺寸。下方的長條，是這個器形把香氣留在液面之上（而非任其逸散）程度的示意指數：平坦的儀式用酒盃幾乎留不住，鬱金香杯則幾乎全數留下。本頁其餘的一切，都只是這一項取捨的變奏。" },
          svg: function (lang, L) {
            var W = 760, H = 318, BASE = 196, SC = 0.78, COL = 101, X0 = 34;
            function hw(prof, y) {
              var i, t;
              if (y <= prof[0][1]) return prof[0][0];
              for (i = 1; i < prof.length; i++) {
                if (y <= prof[i][1]) {
                  t = (y - prof[i - 1][1]) / (prof[i][1] - prof[i - 1][1]);
                  return prof[i - 1][0] + t * (prof[i][0] - prof[i - 1][0]);
                }
              }
              return prof[prof.length - 1][0];
            }
            function band(prof, cx, y0, y1) {
              var ys = [y0], i, k, y, d = "";
              for (i = 0; i < prof.length; i++) if (prof[i][1] > y0 && prof[i][1] < y1) ys.push(prof[i][1]);
              ys.push(y1);
              for (k = 0; k < ys.length; k++) { y = ys[k]; d += (k ? " L" : "M") + (cx - hw(prof, y) * SC).toFixed(1) + " " + (BASE - y * SC).toFixed(1); }
              for (k = ys.length - 1; k >= 0; k--) { y = ys[k]; d += " L" + (cx + hw(prof, y) * SC).toFixed(1) + " " + (BASE - y * SC).toFixed(1); }
              return d + " Z";
            }
            var V = [
              { prof:[[16,0],[16,3],[47,22]], y0:0, top:22, liq:12, rim:94, ar:12, glass:false,
                jp:"盃", rom:"sakazuki", g:{ en:"ritual, wide open", ja:"儀礼・広く開く", zh:"儀式・大開口" } },
              { prof:[[15,0],[15,3],[24,40]], y0:0, top:40, liq:26, rim:48, ar:42, glass:false,
                jp:"猪口", rom:"ochoko", g:{ en:"the everyday cup", ja:"日常の一杯", zh:"日常之杯" } },
              { prof:[[21,0],[21,4],[27,50]], y0:0, top:50, liq:32, rim:54, ar:58, glass:false,
                jp:"ぐい呑み", rom:"guinomi", g:{ en:"held in the hand", ja:"手に包む", zh:"握在掌中" } },
              { prof:[[41,0],[41,55]], y0:0, top:55, liq:45, rim:82, ar:22, glass:false, wood:true,
                jp:"枡", rom:"masu", g:{ en:"a measure, not a cup", ja:"器ではなく枡", zh:"量器而非酒杯" } },
              { prof:[[26,0],[26,4],[30,95]], y0:0, top:95, liq:62, rim:60, ar:50, glass:true,
                jp:"コップ", rom:"koppu", g:{ en:"the station cup", ja:"駅の一杯", zh:"車站的那杯" } },
              { prof:[[15,46],[35,74],[35,94],[22,124]], y0:46, top:124, liq:76, rim:44, ar:92, glass:true,
                stem:{ foot:28, h:4, sw:3.5, to:46 },
                jp:"チューリップ", rom:"tulip glass", g:{ en:"for ginjō aroma", ja:"吟醸香のため", zh:"為吟釀香而生" } },
              { prof:[[16,70],[42,106],[42,132],[31,178]], y0:70, top:178, liq:108, rim:62, ar:82, glass:true,
                stem:{ foot:35, h:4, sw:3.5, to:70 },
                jp:"ワイングラス", rom:"wine glass", g:{ en:"borrowed from wine", ja:"葡萄酒からの借り", zh:"向葡萄酒借來" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<line x1="20" y1="' + BASE + '" x2="' + (W - 20) + '" y2="' + BASE + '" stroke="#B4AC9C"/>';
            var i;
            for (i = 0; i < V.length; i++) {
              var v = V[i], cx = X0 + COL * i + COL / 2;
              var body = v.glass ? "#EDF1F2" : (v.wood ? "#E7DFD2" : "#F2EFE8");
              var edge = v.glass ? "#B9C3C8" : "#B4AC9C";
              if (v.stem) {
                s += '<rect x="' + (cx - v.stem.foot * SC) + '" y="' + (BASE - v.stem.h * SC) + '" width="' + (2 * v.stem.foot * SC) +
                     '" height="' + (v.stem.h * SC) + '" fill="' + body + '" stroke="' + edge + '"/>';
                s += '<rect x="' + (cx - v.stem.sw * SC) + '" y="' + (BASE - v.stem.to * SC) + '" width="' + (2 * v.stem.sw * SC) +
                     '" height="' + ((v.stem.to - v.stem.h) * SC) + '" fill="' + body + '" stroke="' + edge + '"/>';
              }
              s += '<path d="' + band(v.prof, cx, v.y0, v.top) + '" fill="' + body + '" stroke="' + edge + '"/>';
              s += '<path d="' + band(v.prof, cx, v.y0, v.liq) + '" fill="#DACFB8" stroke="none"/>';
              s += '<line x1="' + (cx - hw(v.prof, v.liq) * SC) + '" y1="' + (BASE - v.liq * SC) + '" x2="' + (cx + hw(v.prof, v.liq) * SC) +
                   '" y2="' + (BASE - v.liq * SC) + '" stroke="#B4AC9C"/>';
              /* rim dimension */
              var ry = BASE - v.top * SC, rx = hw(v.prof, v.top) * SC;
              s += '<line x1="' + (cx - rx) + '" y1="' + (ry - 12) + '" x2="' + (cx + rx) + '" y2="' + (ry - 12) + '" stroke="#ADA79E"/>';
              s += '<line x1="' + (cx - rx) + '" y1="' + (ry - 16) + '" x2="' + (cx - rx) + '" y2="' + (ry - 8) + '" stroke="#ADA79E"/>';
              s += '<line x1="' + (cx + rx) + '" y1="' + (ry - 16) + '" x2="' + (cx + rx) + '" y2="' + (ry - 8) + '" stroke="#ADA79E"/>';
              s += '<text x="' + cx + '" y="' + (ry - 20) + '" text-anchor="middle" font-size="10" fill="#55504A">' + v.rim + ' mm</text>';
              /* names */
              s += '<text x="' + cx + '" y="' + (BASE + 18) + '" text-anchor="middle" font-size="12" fill="#201E1B">' + v.jp + '</text>';
              s += '<text x="' + cx + '" y="' + (BASE + 31) + '" text-anchor="middle" font-size="9" fill="#8B857C">' + v.rom + '</text>';
              s += '<text x="' + cx + '" y="' + (BASE + 46) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(v.g) + '</text>';
              /* aroma index bar */
              s += '<rect x="' + (cx - 38) + '" y="' + (BASE + 58) + '" width="76" height="8" fill="#EFEDE7"/>';
              s += '<rect x="' + (cx - 38) + '" y="' + (BASE + 58) + '" width="' + (76 * v.ar / 100) + '" height="8" fill="#B09E7C"/>';
              s += '<text x="' + cx + '" y="' + (BASE + 80) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + v.ar + '</text>';
            }
            s += '<text x="20" y="' + (H - 26) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "上＝口径・下＝香りを留める度合い（模式）" : lang === "zh" ? "上＝口徑・下＝留香程度（示意）" : "ABOVE · RIM DIAMETER — BELOW · HOW MUCH AROMA THE SHAPE HOLDS") + '</text>';
            s += '<text x="20" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "枡と盃は、酒を味わうためではなく数え、あるいは捧げるために作られている。器として不出来なのではなく、別の道具なのである。"
                  : lang === "zh" ? "枡與酒盃並非為了品味而造，而是為了計量或奉獻。它們不是拙劣的酒杯，而是另一種器具。"
                  : "The masu and the sakazuki were not built to taste from. They were built to measure with and to offer with. They are not bad cups; they are different tools.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"steps", items:[
          { n:"1", title:{ en:"Rim diameter decides the aroma", ja:"口径が香りを決める", zh:"口徑決定香氣" }, jp:"口径",
            meta:{ en:"Wide releases, narrow concentrates", ja:"広ければ放ち、狭ければ集める", zh:"寬則釋放，窄則聚攏" },
            text:{ en:"A wide, shallow sakazuki presents a large liquid surface to the air and lets volatiles escape freely: aroma is broad, immediate and short-lived. A narrow-mouthed guinomi traps the headspace above the sake and concentrates it, so the first sniff is stronger and lasts. This single variable explains most of the difference between two cups of the same sake.",
              ja:"広く浅い盃は大きな液面を空気に差し出し、揮発成分を自由に逃がす。香りは広く、直ちに立ち、そして短い。口の窄まったぐい呑みは酒の上の空間を閉じ込めて濃くするから、最初の一嗅ぎは強く、長く続く。同じ酒を注いだ二つの杯の差の大半は、この一つの変数で説明がつく。",
              zh:"寬而淺的酒盃把大面積的液面攤給空氣，讓揮發物自由逸散：香氣寬廣、即刻而短暫。口部收窄的吞杯則把酒液上方的空間封住並加以濃縮，因此第一次嗅聞更強、也更持久。同一支酒倒進兩只杯子的差異，大半可用這一個變因解釋。" } },
          { n:"2", title:{ en:"Rim thickness decides the texture", ja:"縁の厚みが質感を決める", zh:"杯緣厚度決定口感" }, jp:"縁",
            meta:{ en:"Thin reads sharp, thick reads soft", ja:"薄ければ鋭く、厚ければ柔らかく", zh:"薄則銳利，厚則柔和" },
            text:{ en:"A thin porcelain rim delivers the liquid in a fast, narrow stream directly onto the front of the tongue, where sweetness and acidity register first; the sake reads crisper. A thick stoneware rim spreads the stream and slows it, spilling the sake further back, where body and umami dominate. Nothing about the liquid has changed.",
              ja:"薄い磁器の縁は、速く細い流れとして舌の前方へ直接に液を届ける。そこでは甘味と酸が先に立つから、酒はより鋭く読まれる。厚い陶器の縁は流れを広げ、遅らせ、より奥へ落とす。そこでは酒躯と旨味が支配する。液そのものは何一つ変わっていない。",
              zh:"薄的瓷杯緣把酒以又快又細的水流直接送到舌前段，那裡先感受到的是甜與酸，於是酒讀來更清爽。厚的陶杯緣則把水流攤開放慢，把酒送得更後面，那裡由酒體與旨味主導。而酒液本身什麼也沒變。" } },
          { n:"3", title:{ en:"Mass and conductivity decide the temperature", ja:"質量と熱伝導が温度を決める", zh:"質量與導熱決定溫度" }, jp:"熱",
            meta:{ en:"The cup is a heat exchanger", ja:"杯は熱交換器である", zh:"杯子是一具熱交換器" },
            text:{ en:"Sake served at 45 °C in a thin porcelain ochoko is meaningfully cooler within a minute; in lacquer it holds. Sake served cold in a heavy stoneware guinomi warms from the palm as you hold it, which is why the fourth mouthful of a cold sake tastes different from the first. Choosing a vessel is choosing a temperature curve, not a temperature.",
              ja:"45℃で供された酒は、薄い磁器の猪口では一分のうちに目に見えて冷める。漆ならば保つ。重い陶器のぐい呑みに注がれた冷酒は、握る掌から温まる。冷酒の四口目が一口目と違う味であるのはそのためである。器を選ぶとは、温度ではなく温度の曲線を選ぶことである。",
              zh:"以 45 °C 供飲的酒，在薄瓷猪口裡一分鐘內就明顯降溫；在漆器裡則能維持。倒進厚重陶製吞杯的冷酒，會被握著它的手掌暖起來——這就是為什麼一杯冷酒的第四口與第一口味道不同。選擇器皿，選的不是溫度，而是一條溫度曲線。" } },
          { n:"4", title:{ en:"Weight and finish decide the attention", ja:"重みと肌が集中を決める", zh:"重量與質感決定專注度" }, jp:"手取り",
            meta:{ en:"The unmeasurable half", ja:"測りえないほうの半分", zh:"無法測量的那一半" },
            text:{ en:"A heavy, textured, slightly irregular cup is picked up more deliberately and drunk from more slowly than a light smooth one, and slow attentive drinking finds more in a sake than fast distracted drinking does. Potters have understood this for four centuries and it is not mysticism — it is the same reason a good knife makes better cooking.",
              ja:"重く、肌があり、わずかに歪んだ杯は、軽く滑らかな杯より意識して取り上げられ、ゆっくりと飲まれる。ゆっくりと心を向けて飲むことは、速く気を散らして飲むことより多くを酒から見出す。陶工は四百年これを解しており、それは神秘ではない——よい包丁がよい料理を生むのと同じ理屈である。",
              zh:"沉重、有肌理、略帶歪斜的杯子，會比輕巧光滑的杯子被更慎重地拿起、更緩慢地飲用；而緩慢專注的飲用，能從一支酒裡找到的東西比匆忙分心的飲用更多。陶工們理解這一點已有四百年，這並非玄學——好刀能做出更好的菜，是同一個道理。" } }
        ] },

        { t:"panel", title:{ en:"A three-vessel kit that covers everything", ja:"すべてを賄う三つの器", zh:"三件式就能應付一切" },
          body:[
            { t:"ol", items:[
              { en:"<strong>A thin white porcelain cup or a small tulip glass</strong> for cold and aromatic sake, and for any time you want to judge rather than simply enjoy.",
                ja:"<strong>薄い白磁の猪口か、小ぶりのチューリップ型の硝子杯</strong>を、冷やして飲む香りある酒に、そして楽しむのではなく判じたいときに。",
                zh:"<strong>一只薄白瓷杯，或一只小型鬱金香玻璃杯</strong>，用於冷飲與芳香型的酒，以及任何你想評判而非單純享受的時候。" },
              { en:"<strong>One heavier ceramic guinomi you actually like holding</strong> for warm sake and for junmai with body. This is the one worth spending money on and worth choosing by hand rather than by picture.",
                ja:"<strong>手に取るのが本当に好きな、少し重い陶のぐい呑みを一つ</strong>、燗と、酒躯のある純米に。金をかける値打ちがあり、写真ではなく手で選ぶ値打ちがあるのはこの一つである。",
                zh:"<strong>一只你真心喜歡握著的、稍重的陶製吞杯</strong>，用於溫飲與有酒體的純米。這是值得花錢、也值得親手挑選而非看照片下單的那一件。" },
              { en:"<strong>A tin chirori or a small ceramic tokkuri</strong> for warming. If you warm sake more than occasionally, tin repays itself immediately in evenness and speed.",
                ja:"<strong>錫のちろり、あるいは小ぶりの陶の徳利</strong>を燗に。たまに以上の頻度で燗をつけるなら、錫は均一さと速さで直ちに元を取る。",
                zh:"<strong>一支錫製銚釐或一只小型陶製德利</strong>用於溫酒。如果你溫酒的頻率不只是偶爾，錫會立刻以均勻與快速回本。" }
            ] },
            { t:"p", text:{
              en:"Everything beyond that is collecting, which is a legitimate and absorbing hobby with several centuries of Japanese ceramics behind it — but it is a separate pleasure from drinking well, and it is worth knowing which one you are doing.",
              ja:"それ以上はすべて蒐集である。数百年の日本の陶磁を背後に持つ、正当で心を奪う趣味であるが、よく飲むこととは別の悦びであり、自分が今どちらをしているのかを知っておくのはよいことである。",
              zh:"再多的就屬於收藏了。那是一項正當而引人入勝的嗜好，背後有數百年的日本陶瓷史——但它與「把酒喝好」是兩種不同的樂趣，知道自己此刻在做的是哪一種，是有益的。" } }
          ] }
      ] },

    { t:"section", id:"modern",
      title:{ en:"What has been added in the last fifty years", ja:"この五十年に加わったもの", zh:"過去五十年間新增的東西" }, jp:"現代の酒器",
      body:[
        { t:"p", text:{
          en:"The traditional forms above are stable and old. Almost everything interesting happening in sake vessels now is happening outside them, driven by two things: the wine glass, and a generation of metalworkers and glassblowers looking for something to make.",
          ja:"上に記した伝統の形は安定しており、古い。日本酒の器において今起きている興味深いことのほとんどは、その外で起きている。二つのものに突き動かされてである。葡萄酒の杯と、作るべき何かを探す金工と硝子吹きの一世代である。",
          zh:"上述傳統器形穩定而古老。如今清酒器皿中真正有趣的事，幾乎都發生在它們之外，由兩股力量推動：葡萄酒杯，以及一整個世代尋找可做之物的金工與玻璃工藝師。" } },
        { t:"defs", items:[
          { term:{ en:"The wine glass", ja:"葡萄酒の杯", zh:"葡萄酒杯" }, jp:"ワイングラス", romaji:"wain gurasu",
            def:{ en:"A tulip bowl on a stem does three things a traditional cup cannot: it collects aroma above the liquid, it lets the drinker swirl, and it keeps a warm hand off a cold drink. For an aromatic ginjō the difference is not subtle — the same sake in an ochoko and in a glass reads as two different products. Glassmakers now market shapes specifically for junmai and for ginjō, and while the marketing outruns the evidence, the general case for a stemmed glass is sound. What a wine glass cannot do is warm sake, hold a mokkiri overflow, or belong to a set that came down from a grandmother.",
              ja:"脚の上の鬱金香の形の椀は、伝統の杯になしえぬ三つのことをなす。液の上に香りを集め、飲み手に回すことを許し、温かい手を冷たい飲み物から遠ざける。香りの高い吟醸において、その違いは微かではない。同じ酒が猪口と杯とで二つの異なる品として読まれる。硝子の作り手は今や純米のため吟醸のためと形を謳い、その謳いは証を追い越しているものの、脚付きの杯を支持する一般の論は堅い。葡萄酒の杯になしえぬのは、燗をつけること、盛り切りの溢れを受けること、そして祖母から下りてきた一組に属することである。",
              zh:"帶柄的鬱金香形杯體能做到三件傳統酒杯做不到的事：在液面之上聚攏香氣、讓飲者搖杯，以及讓溫熱的手遠離冰涼的酒。對一款芳香型吟釀而言，這個差別並不細微——同一款酒在豬口杯與在玻璃杯中，讀起來像兩個不同的產品。玻璃製造商如今會針對純米與吟釀分別行銷不同杯型；儘管行銷跑在證據前面，支持使用高腳杯的一般論據是站得住腳的。葡萄酒杯做不到的事是：溫酒、承接盛切的滿溢，以及成為外婆傳下來那一整組器皿的一員。" } },
          { term:{ en:"Very thin glass", ja:"うすはり", zh:"薄口玻璃" }, jp:"うすはり", romaji:"usuhari",
            def:{ en:"Blown glass with a rim under a millimetre thick, made by a small number of Tokyo workshops that originally blew laboratory glass and light bulbs. The point is entirely tactile: a thin rim delivers liquid to the tongue with almost nothing in between, and the sake reads as lighter and sharper than the same sake from a thick vessel. They are alarming to hold and they break, and the people who own them do not care.",
              ja:"縁の厚みが一ミリを切る吹き硝子であり、もとは実験の硝子や電球を吹いていた東京の少数の工房が作る。狙いはまったく触覚のものである。薄い縁は、ほとんど何も挟まずに液を舌へ届け、酒は厚い器からの同じ酒より軽く鋭く読まれる。持つと不安になり、そして割れる。持ち主はそれを気にしない。",
              zh:"杯口厚度不到一公釐的吹製玻璃，由少數幾家原本吹製實驗玻璃與燈泡的東京工坊製作。它的重點完全在觸感：極薄的杯緣把液體送到舌上時幾乎沒有任何阻隔，同一款酒讀起來比從厚器皿中喝更輕、更銳利。它們拿在手上讓人心驚，而且會破——擁有它們的人並不在意。" } },
          { term:{ en:"Tin", ja:"錫", zh:"錫" }, jp:"錫器", romaji:"suzuki",
            def:{ en:"Tin conducts heat fast, does not rust, does not flavour the liquid, and is soft enough to be bent by hand — a property one Takaoka foundry turned into an entire product line of vessels you shape yourself. A tin cup chills in seconds under cold water and takes a warm bath just as quickly, which makes it the most practical material on this page for anyone who actually changes temperature rather than talking about it. It is also expensive and dents.",
              ja:"錫は熱をよく伝え、錆びず、液に味を移さず、手で曲げうるほど柔らかい。高岡の一つの鋳物の工房は、その性質を、自ら形を変える器の品揃えの全体に変えた。錫の杯は冷水の下で数秒にして冷え、湯の風呂も同じだけ速く受ける。温度について語るのではなく実際に変える者にとって、この頁で最も実際的な材である。また高価であり、凹む。",
              zh:"錫導熱快、不生鏽、不會把味道帶進液體，而且柔軟到可以徒手彎折——高岡的一家鑄造工坊把這個特性變成了一整條「由你自己塑形」的器皿產品線。錫杯在冷水下數秒即涼，放進溫水也同樣快，因此對於真正在改變溫度、而不只是談論溫度的人來說，它是本頁最實用的材料。它同時也昂貴，而且會凹。" } },
          { term:{ en:"Iron", ja:"鉄", zh:"鐵" }, jp:"南部鉄器", romaji:"Nanbu tekki",
            def:{ en:"Cast iron chirori and warming vessels from Iwate, heavy, slow to heat and very slow to lose it — the opposite of tin, and the right choice for holding a temperature at the table rather than reaching one. Iron in contact with sake is a real concern, since iron is the one metal that damages sake badly, so drinking vessels are enamelled or lacquered inside; a bare cast-iron interior is for heating water, not for holding sake.",
              ja:"岩手の鋳鉄のちろりと燗の器であり、重く、温まるのが遅く、そして失うのはきわめて遅い。錫の対極であり、温度に達するためではなく卓でそれを保つための正しい選びである。鉄が酒に触れることは実際の懸念である。鉄は酒をひどく損なう唯一の金属だからであり、ゆえに飲むための器は内を琺瑯か漆で覆う。剥き出しの鋳鉄の内は湯を沸かすためのものであって、酒を容れるためのものではない。",
              zh:"來自岩手的鑄鐵銚子與溫酒器，厚重、升溫慢、散熱更慢——與錫恰恰相反，是「在餐桌上維持溫度」而非「達到溫度」的正確選擇。鐵與清酒接觸是一項真實的顧慮，因為鐵是唯一會嚴重損害清酒的金屬；因此飲用器皿的內部會上琺瑯或塗漆。裸露的鑄鐵內壁是用來煮水的，不是用來盛酒的。" } },
          { term:{ en:"Lacquer", ja:"漆", zh:"漆器" }, jp:"漆器", romaji:"shikki",
            def:{ en:"The oldest luxury material for a sake cup and still the warmest to the lip. Lacquer insulates, so a lacquered cup holds a warm sake much longer than porcelain; it is also silent, weightless, and completely opaque, which means it hides the colour and is therefore no use for judging. Traditional wedding and shrine cups are lacquered for exactly the reasons that make them bad tasting vessels: they are for the ceremony, not the assessment.",
              ja:"日本酒の杯のための最も古い奢侈の材であり、今なお唇に最も温かい。漆は熱を断つゆえに、漆の杯は磁器よりはるかに長く燗を保つ。また音を立てず、重さがなく、まったく光を通さない。すなわち色を隠し、それゆえ判ずるには用をなさない。婚礼と社の杯が漆であるのは、まさにそれらを利き酒の器として拙くしている理由による。それらは儀のためのものであって、判定のためのものではない。",
              zh:"清酒杯最古老的奢侈材料，至今仍是最溫潤於唇的。漆能隔熱，因此漆杯保持溫酒的時間遠長於瓷器；它同時無聲、輕若無物、完全不透光——也就是說它藏起了酒色，因此無法用來評判。婚禮與神社所用的酒杯之所以是漆器，正是基於那些讓它們不適合作為品評器皿的理由：它們是為儀式而存在，不是為評斷。" } }
        ] }
      ] },

    { t:"section", id:"choosing",
      title:{ en:"Three vessels cover everything", ja:"三つの器で足りる", zh:"三個器皿就夠了" }, jp:"最初の一揃い",
      body:[
        { t:"p", text:{
          en:"A collection is a pleasure and not a requirement. If you want the smallest set that handles every sake and every temperature honestly, it is these three, and the total outlay is less than one good bottle.",
          ja:"蒐集は愉しみであり、要件ではない。あらゆる酒とあらゆる温度を正直に扱う最も小さな一揃いを望むなら、それはこの三つであり、要する額の全体は良い一本より少ない。",
          zh:"收藏是樂趣，不是必需。如果你想要一組能誠實應付所有清酒與所有溫度的最小配置，就是這三件，而總花費比一瓶好酒還少。" } },
        { t:"grid", cols:3, cells:[
          { k:{ en:"One", ja:"一", zh:"其一" }, jp:"ワイングラス",
            v:{ en:"A small white-wine glass", ja:"小ぶりの白葡萄酒の杯", zh:"一只小型白酒杯" },
            d:{ en:"For everything cold and everything aromatic, and for any bottle you are trying to understand. It does not need to be a sake-specific glass; a plain tulip of about 250 mL, filled a third, does the whole job.",
              ja:"冷たいものと香りのあるもののすべてに、そして解しようとしているあらゆる瓶に。日本酒のための杯である必要はない。二百五十ミリリットルほどの素直な鬱金香の形を三分の一まで満たせば、仕事の全体を果たす。",
              zh:"用於所有冰涼的酒與所有芳香型的酒，以及任何你想弄懂的一瓶。它不必是清酒專用杯；一只約二百五十毫升的樸素鬱金香形杯，倒三分之一滿，就能完成全部工作。" } },
          { k:{ en:"Two", ja:"二", zh:"其二" }, jp:"白い猪口",
            v:{ en:"A plain white porcelain ochoko", ja:"白磁の素直な猪口", zh:"一只素白瓷豬口" },
            d:{ en:"For warm sake, for a table where people pour for each other, and for the pleasure of the object. White because you can see the colour; unglazed or coloured cups hide exactly what you would want to look at. A janome cup does the same job and adds a colour reference.",
              ja:"燗のために、人が互いに注ぎ合う卓のために、そして物としての愉しみのために。白であるのは色が見えるからである。釉のない杯や色のついた杯は、まさに見たいものを隠す。蛇の目の猪口は同じ仕事をなし、加えて色の基準を与える。",
              zh:"用於溫酒、用於人們彼此斟酒的餐桌，也用於器物本身的樂趣。選白色是因為看得見酒色；無釉或有色的杯子，恰恰藏起了你最想看的東西。蛇目豬口能做同樣的事，還額外提供了一個顏色基準。" } },
          { k:{ en:"Three", ja:"三", zh:"其三" }, jp:"錫か磁器の徳利",
            v:{ en:"A tokkuri you can warm", ja:"燗のつけられる徳利", zh:"一支可以溫的德利" },
            d:{ en:"Tin if you will use it often, porcelain if you want it to be beautiful. Stood in a pan of water off the heat, it takes a bottle from cold to any temperature you want in a few minutes, and it is the only piece here that lets you do the single most rewarding experiment in sake — the same bottle at four temperatures in one sitting.",
              ja:"よく用いるなら錫、美しくあってほしいなら磁器である。火から下ろした鍋の湯に立てれば、数分のうちに一本を冷たさから望むいかなる温度へも運ぶ。日本酒において最も報いのある一つの試み——同じ一本を一度の座で四つの温度に——を許す、ここにある唯一の品である。",
              zh:"若你會常用就選錫，若你希望它好看就選瓷。把它立在離火的一鍋熱水中，幾分鐘內就能把一瓶酒從冰涼帶到你想要的任何溫度；它也是這裡唯一能讓你做成清酒中最有回報的那個實驗的器具——同一瓶酒，一次坐下，四種溫度。" } }
        ] },
        { t:"note", title:{ en:"What not to buy first", ja:"最初に買わぬもの", zh:"不要一開始就買的東西" }, text:{
          en:"A masu, unless you specifically want the mokkiri ritual: cedar dominates a delicate sake completely and the box is hard to drink from cleanly. A gold or silver cup: beautiful, ceremonial, and it tells you nothing. A very small ochoko under 30 mL: it holds a mouthful, so the sake is warming in your hand from the moment it is poured and you spend the evening being refilled instead of tasting.",
          ja:"枡は、盛り切りの儀を殊更に望むのでなければ買わぬこと。杉は繊細な酒を完全に覆い、箱は清らかに飲みにくい。金や銀の杯は、美しく、儀礼のものであり、そして何も教えない。三十ミリリットルに満たぬきわめて小さな猪口は、一口を容れるにすぎず、注がれたその時から酒は手の中で温まり、宵は味わうことにではなく注ぎ足されることに費やされる。",
          zh:"枡——除非你特別想要盛切的儀式感：杉木會完全壓過一款細緻的酒，而且方盒不容易乾淨地就口。金杯或銀杯：美麗、具儀式性，卻什麼也告訴不了你。容量不到三十毫升的極小豬口：它只裝得下一口，酒從被斟下的那一刻起就在你手中回溫，而你整晚都在被斟酒，而不是在品酒。" } }
      ] },

    { t:"section", id:"kilns",
      title:{ en:"Where the vessels come from", ja:"器の産地", zh:"器物的產地" }, jp:"窯と工房",
      body:[
        { t:"p", text:{
          en:"Sake vessels are made in the same kilns and workshops as the rest of Japanese tableware, and the regional traditions are worth knowing because their characters differ so much that choosing a kiln is very nearly choosing a style of drinking.",
          ja:"酒器は、日本の食器一般と同じ窯と工房で作られる。産地ごとの伝統は知る値打ちがある。その性格の差が大きく、窯を選ぶことは、ほとんど飲み方の型を選ぶことに等しいからである。",
          zh:"酒器出自與日本其他餐具相同的窯場與工坊，而各地的傳統值得認識——因為它們的性格差異之大，使得選窯幾乎等同於選擇一種飲酒的方式。" } },

        { t:"chips", items:[
          { text:{ en:"Bizen · 備前 · unglazed, iron-dark, wood-fired", ja:"備前 · 無釉、鉄の色、薪窯", zh:"備前 · 無釉、鐵黑、柴燒" }, k:"wood" },
          { text:{ en:"Hagi · 萩 · soft, pale, crazed glaze that changes with use", ja:"萩 · 柔らかく淡い、使ううちに育つ貫入", zh:"萩 · 柔軟淡雅、隨使用而變化的貫入釉" }, k:"rice" },
          { text:{ en:"Karatsu · 唐津 · earthy, restrained, close to Korean models", ja:"唐津 · 土味、抑制、朝鮮の器に近い", zh:"唐津 · 土味、內斂、近於朝鮮器" }, k:"ash" },
          { text:{ en:"Shino and Oribe · 志野・織部 · Mino, thick white and green", ja:"志野・織部 · 美濃、厚い白と緑", zh:"志野與織部 · 美濃、厚白與綠" }, k:"moss" },
          { text:{ en:"Arita and Kutani · 有田・九谷 · porcelain, painted", ja:"有田・九谷 · 磁器、絵付け", zh:"有田與九谷 · 瓷器、彩繪" }, k:"snow" },
          { text:{ en:"Shigaraki and Tokoname · 信楽・常滑 · coarse, warm, ancient kilns", ja:"信楽・常滑 · 粗く温かい、古窯", zh:"信樂與常滑 · 粗獷溫暖、古窯" }, k:"amber" },
          { text:{ en:"Wajima and Yamanaka · 輪島・山中 · lacquer", ja:"輪島・山中 · 漆", zh:"輪島與山中 · 漆器" }, k:"plum" },
          { text:{ en:"Takaoka and Osaka · 高岡・大阪 · tin and cast metal", ja:"高岡・大阪 · 錫と鋳物", zh:"高岡與大阪 · 錫器與鑄物" }, k:"water" },
          { text:{ en:"Edo and Satsuma kiriko · 江戸・薩摩切子 · cut glass", ja:"江戸・薩摩切子 · 切子硝子", zh:"江戶與薩摩切子 · 切子玻璃" }, k:"yeast" }
        ] },

        { t:"note", text:{
          en:"For which temperature to pour into which of these, see <a href=\"serving.html\">Temperature &amp; Vessels</a>; for the ceremonial vessels and their occasions, see <a href=\"culture.html\">Culture &amp; Ritual</a>; for the assessment cup in use, see <a href=\"tasting.html\">Tasting</a>.",
          ja:"どの温度をどの器に注ぐかは<a href=\"serving.html\">温度と器</a>、儀礼の器とその場については<a href=\"culture.html\">文化と儀礼</a>、利き猪口の実際の使い方は<a href=\"tasting.html\">利き酒</a>を参照。",
          zh:"哪種溫度該倒進哪種器皿，見<a href=\"serving.html\">溫度與酒器</a>；儀禮用器與其場合，見<a href=\"culture.html\">文化與儀禮</a>；品評杯的實際使用，見<a href=\"tasting.html\">品評</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"serving.html", why:{ en:"What to put in each of them, and at what temperature.", ja:"それぞれに何を、どの温度で注ぐか。", zh:"每一種該裝什麼、在什麼溫度下。" } },
      { href:"culture.html", why:{ en:"The vessels that are not for drinking from.", ja:"飲むためではない器。", zh:"那些不是拿來喝的器物。" } },
      { href:"packaging.html", why:{ en:"The containers the sake arrives in.", ja:"酒が届く容器。", zh:"酒是裝在什麼容器裡送來的。" } },
      { href:"kanpai.html", why:{ en:"How the cup is held, filled and received.", ja:"杯をどう持ち、満たし、受けるか。", zh:"杯子怎麼拿、怎麼斟、怎麼接。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- pairing */
SAKE.pages["pairing"] = {
  kicker: { en: "Drinking · 05", ja: "飲む · 05", zh: "品飲 · 05" },
  title:  { en: "Food Pairing", ja: "料理との相性", zh: "餐酒搭配" },
  jp: "食中酒 · 相性",
  lede: {
    en: "Sake is easier to pair than wine and harder to pair badly. It has no tannin, very little residual sugar in most styles, moderate acidity, an unusual quantity of amino acids, and it is the only common drink built to be served across a fifty-degree temperature range. Those four facts explain almost every pairing rule that follows.",
    ja: "日本酒はワインより合わせやすく、外すほうが難しい。タンニンをもたず、大半の酒質で残糖はごくわずか、酸は中庸、アミノ酸は異例に多く、そして五十度の温度幅で供されるよう作られた唯一の一般的な酒である。以下のほぼすべての原則は、この四つの事実から説明できる。",
    zh: "日本酒比葡萄酒更容易搭配，也更難搭壞。它沒有單寧、多數風格殘糖極少、酸度中庸、胺基酸含量異常之高，且是唯一為橫跨五十度溫域供飲而設計的常見酒類。以下幾乎所有搭配原則，都可由這四項事實推導而出。"
  },
  body: [
    { t:"section", id:"principles",
      title:{ en:"Why it works", ja:"なぜ合うのか", zh:"何以奏效" }, jp:"原理",
      body:[
        { t:"defs", items:[
          { term:{en:"No tannin",ja:"タンニンがない",zh:"沒有單寧"},
            def:{en:"Tannin is what makes red wine fight fish. It binds to the fish's iron and lipids and produces a metallic, fishy off-taste. Sake has none, which is why it can sit beside raw fish, sea urchin, oysters and mackerel — the hardest category in all of wine pairing — without any argument at all.",
                 ja:"赤ワインが魚と衝突する原因はタンニンである。魚の鉄分や脂質と結びつき、金属的な生臭さを生む。日本酒にはタンニンがない。生魚、雲丹、牡蠣、鯖——ワインの相性においてもっとも難しい領域——の隣に、何の摩擦もなく置けるのはこのためである。",
                 zh:"單寧正是紅酒與魚衝突的原因：它與魚的鐵質及脂質結合，產生金屬般的腥味。日本酒完全不含單寧，因此能與生魚、海膽、生蠔、鯖魚——葡萄酒搭配中最困難的一類——毫無扞格地並陳。"} },
          { term:{en:"Amino acids meet amino acids",ja:"アミノ酸がアミノ酸に応じる",zh:"胺基酸對上胺基酸"},
            def:{en:"Sake contains substantial free glutamic acid and other amino acids — the same compounds that carry umami in dashi, soy sauce, miso, cured fish and aged cheese. Rather than contrasting with them, sake adds to them, and the combined effect is greater than either alone. This is the single strongest argument for sake with Japanese food, and it works just as well with Parmesan, jamón and mushroom stock.",
                 ja:"日本酒にはグルタミン酸をはじめとする遊離アミノ酸が相当量含まれる。出汁、醤油、味噌、干物、熟成チーズのうま味を担うのと同じ成分である。日本酒はそれらと対比するのではなく加算し、合わさった効果はどちらか一方を上回る。和食と日本酒の最も強い論拠であり、パルミジャーノ、ハモン、きのこの出汁に対しても同じように働く。",
                 zh:"日本酒含有可觀的游離麩胺酸與其他胺基酸——正是高湯、醬油、味噌、乾製魚類與熟成起司中承載旨味的同一批成分。日本酒不與之對比，而是相加，合併效果大於任一單獨者。這是日本酒佐和食最強的論據，而它對帕瑪森、伊比利火腿與菇蕈高湯同樣有效。"} },
          { term:{en:"Temperature as a tuning knob",ja:"温度という調整器",zh:"作為調節旋鈕的溫度"},
            def:{en:"If a pairing is not working, the answer is often not a different bottle but a different temperature. Warming the same sake by fifteen degrees raises its umami, softens its acid and shortens its finish, which converts a mismatch into a match more often than most people expect.",
                 ja:"相性が悪いとき、答えは別の一本ではなく別の温度であることが多い。同じ酒を十五度上げれば、うま味は増し、酸は和らぎ、後味は短くなる。多くの人が思うより高い頻度で、不一致は一致に変わる。",
                 zh:"若搭配不成立，答案往往不是換一瓶，而是換一個溫度。把同一款酒升高十五度，旨味增強、酸度柔化、收尾變短——這比多數人預期得更常把不合變成契合。"} },
          { term:{en:"Moderate everything",ja:"すべてが中庸",zh:"一切適中"},
            def:{en:"Sake sits in the middle of every axis: less acidic than white wine, less sweet than most, less alcoholic than spirits, less bitter than beer. It rarely dominates a dish and rarely disappears under one. The cost of this is that it can be bland with food that is itself bland.",
                 ja:"日本酒はあらゆる軸の中央にある——白ワインより酸は低く、多くのものより甘くなく、蒸留酒より度数は低く、ビールより苦くない。料理を圧することも、料理の下に消えることも稀である。その代償として、それ自体が淡い料理と合わせると平板になりうる。",
                 zh:"日本酒位於每個軸向的中段：酸度低於白酒、甜度低於多數酒、酒精低於烈酒、苦度低於啤酒。它很少壓過一道菜，也很少被一道菜淹沒。代價是：與本身平淡的食物同席時，它可能顯得乏味。"} }
        ] }
      ]
    },

    { t:"section", id:"bytype",
      title:{ en:"By type", ja:"タイプ別", zh:"依類型" }, jp:"四タイプと料理",
      body:[
        { t:"table",
          cols:[{en:"Type",ja:"タイプ",zh:"類型"},{en:"Serve at",ja:"温度",zh:"溫度"},{en:"Works with",ja:"合うもの",zh:"適配"},{en:"Avoid",ja:"避けるもの",zh:"避免"}],
          rows:[
            [{en:"Kunshu — fragrant ginjō",ja:"薫酒（吟醸系）",zh:"薰酒（吟釀系）"},"8–15 °C",
             {en:"Sashimi of white fish, scallop, sea bream; carpaccio; steamed shellfish; salads with citrus; melon and prosciutto; fresh goat's cheese; light tempura with salt.",ja:"白身魚・帆立・鯛の刺身、カルパッチョ、蒸した貝、柑橘のサラダ、生ハムメロン、フレッシュな山羊乳チーズ、塩でいただく軽い天ぷら。",zh:"白肉魚、干貝、鯛魚生魚片；carpaccio；蒸貝類；柑橘沙拉；哈密瓜配生火腿；新鮮山羊起司；沾鹽的清淡天婦羅。"},
             {en:"Anything soy-heavy, anything fried in a heavy batter, anything hot. Strong dashi will bury the aroma.",ja:"醤油の強いもの、重い衣の揚げ物、熱いもの全般。強い出汁は香りを埋めてしまう。",zh:"醬油味重者、厚衣油炸物、任何熱食。濃郁高湯會埋沒其香氣。"}],
            [{en:"Sōshu — light and clean",ja:"爽酒",zh:"爽酒"},"5–15 °C",
             {en:"Almost anything. Sushi, sashimi, tofu, salt-grilled fish, tempura, cold noodles, pickles, oysters, ceviche. The safest choice when the menu is unknown.",ja:"ほぼ何にでも。寿司、刺身、豆腐、塩焼き、天ぷら、冷たい麺、漬物、牡蠣、セビーチェ。献立が分からないときの最も安全な選択。",zh:"幾乎百搭。壽司、生魚片、豆腐、鹽烤魚、天婦羅、冷麵、漬物、生蠔、ceviche。菜單未知時最安全的選擇。"},
             {en:"Very rich braises and hard cheese, which will simply overwhelm it.",ja:"濃厚な煮込みやハードチーズ。単純に押し負ける。",zh:"濃厚燉煮與硬質起司，會直接把它壓垮。"}],
            [{en:"Junshu — rich junmai, kimoto, yamahai",ja:"醇酒（純米・生酛・山廃）",zh:"醇酒（純米・生酛・山廢）"},"20–50 °C",
             {en:"Grilled and braised meat, yakitori with tare, sukiyaki, mushrooms in butter, oden, miso dishes, aged cheese, cured ham, fried chicken, mapo tofu, red-braised pork.",ja:"焼き物と煮込み、タレの焼き鳥、すき焼き、きのこのバター焼き、おでん、味噌料理、熟成チーズ、生ハム、唐揚げ、麻婆豆腐、豚の角煮。",zh:"燒烤與燉煮肉類、醬燒串燒、壽喜燒、奶油炒菇、關東煮、味噌料理、熟成起司、生火腿、炸雞、麻婆豆腐、紅燒肉。"},
             {en:"Delicate raw fish, which it can flatten. Fresh fruit.",ja:"繊細な生魚。押し潰してしまう。生の果物も。",zh:"細緻的生魚，會被它壓平。新鮮水果亦然。"}],
            [{en:"Jukushu — koshu, kijōshu",ja:"熟酒（古酒・貴醸酒）",zh:"熟酒（古酒・貴釀酒）"},"18–45 °C",
             {en:"Chinese red-braised dishes, Peking duck, liver pâté, blue cheese, soy-simmered beef, dark chocolate, dried figs, Christmas cake. Treat it as oloroso sherry.",ja:"中華の紅焼、北京ダック、レバーパテ、青カビチーズ、牛の醤油煮、ダークチョコレート、干し無花果、クリスマスケーキ。オロロソ・シェリーと同じ扱いでよい。",zh:"中式紅燒菜、北京烤鴨、肝醬、藍紋起司、醬燒牛肉、黑巧克力、無花果乾、聖誕蛋糕。可比照 oloroso 雪莉處理。"},
             {en:"Anything subtle. This is not a food-neutral drink.",ja:"繊細なもの全般。これは中立的な食中酒ではない。",zh:"任何細緻之物。這不是一款中性的佐餐酒。"}]
          ] }
      ]
    },

    { t:"section", id:"beyond",
      title:{ en:"Beyond Japanese food", ja:"和食を離れて", zh:"和食之外" }, jp:"広がり",
      body:[
        { t:"p", text:{
          en:"The most interesting pairings are often not Japanese. Sake's combination of umami, low acid and no tannin makes it unusually good with several cuisines that give wine trouble.",
          ja:"最も面白い相性は、しばしば和食の外にある。うま味に富み、酸が低く、タンニンをもたないという組み合わせは、ワインが手を焼くいくつかの料理体系に対して、日本酒を異例に強くしている。",
          zh:"最有趣的搭配往往不在日本料理。旨味豐富、酸度低、無單寧的組合，使日本酒在幾種讓葡萄酒為難的菜系面前異常出色。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Chinese",ja:"中華",zh:"中式"}, jp:"中華",
            d:{en:"Soy, fermented bean, vinegar and Shaoxing all sit in the same umami-and-acid register as sake. Rich junmai warmed to 45 °C with red-braised pork or Sichuan mapo tofu is one of the strongest pairings available to either cuisine. Aged koshu with Peking duck is another.",ja:"醤油、豆豉、酢、紹興酒はいずれも、日本酒と同じうま味と酸の音域にある。45℃に燗した厚みのある純米と豚の角煮、あるいは四川の麻婆豆腐は、両方の料理体系を通じて最も強い相性の一つである。古酒と北京ダックもまた然り。",zh:"醬油、豆豉、醋與紹興酒，都與日本酒處於相同的旨味與酸度音域。溫至 45°C 的厚實純米配紅燒肉或四川麻婆豆腐，是兩種料理體系中最強的搭配之一；陳年古酒配北京烤鴨亦然。"} },
          { h:{en:"Cheese",ja:"チーズ",zh:"起司"}, jp:"チーズ",
            d:{en:"Aged hard cheese is dense in glutamate, exactly like sake, and has no tannin to fight. Comté, Parmigiano and Manchego with junmai; blue cheese with koshu or kijōshu; fresh chèvre with ginjō. Sake handles washed-rind cheeses better than almost any wine.",ja:"熟成したハードチーズはグルタミン酸に富み、日本酒と同じである。争うタンニンもない。コンテ、パルミジャーノ、マンチェゴには純米、青カビには古酒か貴醸酒、フレッシュな山羊乳には吟醸。ウォッシュタイプに対しては、日本酒はほぼどのワインよりもうまく振る舞う。",zh:"熟成硬質起司富含麩胺酸，與日本酒相同，且沒有單寧可與之衝突。孔泰、帕瑪森、曼徹格配純米；藍紋起司配古酒或貴釀酒；新鮮山羊乳酪配吟釀。面對洗浸起司，日本酒的表現幾乎勝過任何葡萄酒。"} },
          { h:{en:"Shellfish and sea urchin",ja:"貝と雲丹",zh:"貝類與海膽"}, jp:"魚介",
            d:{en:"The classic wine problem. Oysters, sea urchin, ikura and mackerel all react badly with tannin and with high alcohol. Cold junmai or a light nama handles them without a fight; a squeeze of citrus completes it.",ja:"ワインにとっての古典的な難問。牡蠣、雲丹、いくら、鯖はいずれもタンニンと高いアルコールに対して悪く反応する。冷やした純米か軽い生酒なら摩擦なく受け止め、柑橘を一絞りすれば完成する。",zh:"葡萄酒的經典難題。生蠔、海膽、鮭魚卵與鯖魚都與單寧及高酒精反應不良。冷飲純米或輕盈的生酒可毫無衝突地承接，再擠一點柑橘即完成。"} },
          { h:{en:"Fried food",ja:"揚げ物",zh:"炸物"}, jp:"揚げ物",
            d:{en:"What is wanted is acid and cut. A dry honjōzō or a high-acid kimoto served cool does for tempura, karaage and croquettes what a good beer does, with more flavour and less bloating.",ja:"求められるのは酸と切れである。冷やした辛口の本醸造や高酸度の生酛は、天ぷら、唐揚げ、コロッケに対して良いビールと同じ働きをする。より味わい深く、より膨満感が少ない。",zh:"需要的是酸度與收束。冷飲的辛口本釀造或高酸生酛，對天婦羅、唐揚與可樂餅所起的作用如同一支好啤酒，卻更有風味且不脹。"} },
          { h:{en:"Dashi and vegetables",ja:"出汁と野菜",zh:"高湯與蔬菜"}, jp:"精進",
            d:{en:"Vegetarian and Buddhist temple cooking is built on dashi, kombu and mushroom — pure umami with almost no fat. Wine tends to taste thin against it; sake matches it exactly, because it is coming from the same chemical direction.",ja:"精進料理は出汁と昆布ときのこの上に築かれている——脂をほとんど伴わない純粋なうま味である。ワインはこれに対して痩せて感じられがちだが、日本酒は正確に合う。化学的に同じ方向から来ているからである。",zh:"素食與寺院料理建立在高湯、昆布與菇蕈之上——幾乎不含脂肪的純粹旨味。葡萄酒面對它常顯單薄；日本酒則精準相合，因為兩者來自相同的化學方向。"} },
          { h:{en:"Desserts",ja:"甘味",zh:"甜點"}, jp:"甘味",
            d:{en:"Only jukushu really works. Kijōshu with dark chocolate, aged koshu with dried fruit and nuts, sweet nigori with fresh strawberries. Dry sake with sugar is one of the few reliably unpleasant combinations in the whole subject.",ja:"実際に成立するのは熟酒だけである。貴醸酒とダークチョコレート、古酒と乾果や木の実、甘いにごりと苺。辛口の日本酒と砂糖は、この主題全体のなかで確実に不快になる数少ない組み合わせの一つである。",zh:"真正成立的只有熟酒。貴釀酒配黑巧克力、陳年古酒配果乾與堅果、甜口濁酒配新鮮草莓。辛口清酒配糖，是整個主題中少數必然令人不快的組合之一。"} }
        ] },
        { t:"note", label:{en:"One rule if you keep only one",ja:"一つだけ覚えるなら",zh:"若只記一條"}, text:{
          en:"Match weight, then adjust with temperature. A light dish wants a light sake; a heavy dish wants a heavy one; and if the balance is still wrong, move the sake ten degrees before you move the bottle.",
          ja:"まず重さを合わせ、次に温度で調整する。軽い料理には軽い酒、重い料理には重い酒。それでも均衡が取れないなら、瓶を替える前に温度を十度動かす。",
          zh:"先對齊份量感，再以溫度微調。清淡的菜配輕盈的酒，厚重的菜配厚實的酒；若平衡仍未到位，換瓶之前先把酒溫調動十度。" } }
      ]
    },

{ t:"section", id:"why",
      title:{ en:"Why sake pairs so widely", ja:"日本酒が広く合う理由", zh:"清酒為何搭配範圍如此之廣" }, jp:"化学的な理由",
      body:[
        { t:"figure",
          caption:{
            en:"The four differences, measured. Three of them are subtractions — sake brings almost no tannin, a fraction of the acid, and none of wine's structural bitterness — and subtractions are what make a drink easy to place beside food. The fourth is the only addition, and it is the important one: several times the free amino acid, which is the same glutamate that carries umami in dashi and soy. A drink that removes the three things that fight food and multiplies the one thing that agrees with it will pair widely, and that is all the mystery there is.",
            ja:"四つの違いを、測って並べたもの。うち三つは引き算である——日本酒はタンニンをほとんど持たず、酸はわずかであり、ワインの骨格をなす苦みも持たない。引き算こそが、飲みものを料理の傍らに置きやすくする。四つめだけが足し算であり、そしてそれが肝心である。遊離アミノ酸が数倍あり、それは出汁と醤油の旨味を担うのと同じグルタミン酸である。料理と争う三つを取り除き、料理と和する一つを増やした飲みものは、広く合う。神秘はそれだけである。",
            zh:"把四項差異量出來並列。其中三項是減法——清酒幾乎不含單寧、酸只有零頭、也沒有葡萄酒那種構成骨架的苦味——而減法正是讓一種飲品容易擺在食物旁邊的原因。第四項是唯一的加法，也是關鍵的那一項：游離胺基酸多出數倍，而那正是高湯與醬油中承載旨味的同一種麩胺酸。一種飲品若移除了與食物作對的三件事，又把與食物相合的那一件放大，它自然搭得廣——所謂的神秘，也就只有這樣。" },
          svg: function (lang, L) {
            var W = 760, H = 458, PW = 340, PH = 178, LX = 84;
            var drinks = {
              sake:  { jp:"日本酒",   f:"#C0AF8E" },
              white: { jp:"白ワイン", f:"#E2D8C6" },
              red:   { jp:"赤ワイン", f:"#CBB3AC" }
            };
            var panels = [
              { t:{ en:"Tannin", ja:"タンニン", zh:"單寧" }, u:{ en:"relative to a red wine", ja:"赤ワインを一とした比", zh:"以紅酒為一的相對值" },
                max:1, ticks:[0, 0.5, 1], fmt:function (v) { return v === 0 ? "0" : v === 1 ? "1" : "0.5"; },
                rows:[ { k:"sake", a:0, b:0.015 }, { k:"white", a:0.03, b:0.12 }, { k:"red", a:0.7, b:1 } ] },
              { t:{ en:"Total acid", ja:"総酸", zh:"總酸" }, u:"g / L",
                max:8, ticks:[0, 2, 4, 6, 8], fmt:function (v) { return String(v); },
                rows:[ { k:"sake", a:1, b:2 }, { k:"white", a:5.5, b:7.5 }, { k:"red", a:4.5, b:6.5 } ] },
              { t:{ en:"Free amino acids", ja:"遊離アミノ酸", zh:"游離胺基酸" }, u:"mg / L",
                max:2600, ticks:[0, 1000, 2000], fmt:function (v) { return v === 0 ? "0" : (v / 1000) + "k"; },
                rows:[ { k:"sake", a:900, b:2500 }, { k:"white", a:300, b:800 }, { k:"red", a:300, b:900 } ] },
              { t:{ en:"Serving temperature", ja:"供する温度", zh:"供飲溫度" }, u:"°C",
                max:60, ticks:[0, 20, 40, 60], fmt:function (v) { return String(v); },
                rows:[ { k:"sake", a:5, b:55 }, { k:"white", a:8, b:13 }, { k:"red", a:15, b:18 } ] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var p, i, j;
            for (p = 0; p < panels.length; p++) {
              var pa = panels[p];
              var ox = 30 + (p % 2) * (PW + 20), oy = 34 + Math.floor(p / 2) * (PH + 24);
              var bx = ox + LX, bw = PW - LX - 18;
              var px = (function (b, w, mx) { return function (v) { return b + v / mx * w; }; })(bx, bw, pa.max);
              s += '<rect x="' + ox + '" y="' + oy + '" width="' + PW + '" height="' + PH + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (ox + 14) + '" y="' + (oy + 24) + '" font-size="12.5" fill="#201E1B">' + L(pa.t) + '</text>';
              s += '<text x="' + (ox + PW - 14) + '" y="' + (oy + 24) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(pa.u) + '</text>';
              s += '<line x1="' + ox + '" y1="' + (oy + 34) + '" x2="' + (ox + PW) + '" y2="' + (oy + 34) + '" stroke="#EFEDE7"/>';
              var by = oy + 56, RH = 34, AX = by + pa.rows.length * RH - 8;
              for (j = 0; j < pa.ticks.length; j++) {
                s += '<line x1="' + px(pa.ticks[j]) + '" y1="' + (by - 12) + '" x2="' + px(pa.ticks[j]) + '" y2="' + AX + '" stroke="#EFEDE7"/>';
                s += '<text x="' + px(pa.ticks[j]) + '" y="' + (AX + 16) + '" text-anchor="middle" font-size="9" fill="#ADA79E">' + pa.fmt(pa.ticks[j]) + '</text>';
              }
              s += '<line x1="' + bx + '" y1="' + AX + '" x2="' + (bx + bw) + '" y2="' + AX + '" stroke="#CDC6B9"/>';
              for (i = 0; i < pa.rows.length; i++) {
                var r = pa.rows[i], d = drinks[r.k], y = by + i * RH;
                s += '<text x="' + (bx - 10) + '" y="' + (y + 13) + '" text-anchor="end" font-size="11" fill="#201E1B">' + d.jp + '</text>';
                var x1 = px(r.a), x2 = px(r.b), wd = Math.max(x2 - x1, 2.5);
                s += '<rect x="' + x1.toFixed(1) + '" y="' + (y + 2) + '" width="' + wd.toFixed(1) + '" height="14" fill="' + d.f + '" stroke="#CDC6B9"/>';
              }
            }
            s += '<text x="30" y="' + (H - 22) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "酸は同じ酸ではない。日本酒のそれは主に乳酸と琥珀酸、ワインのそれは酒石酸とリンゴ酸である。ゆえに酸の面は総量の比較であって、感じ方の比較ではない。"
                  : lang === "zh" ? "酸並非同一種酸：清酒的主要是乳酸與琥珀酸，葡萄酒的則是酒石酸與蘋果酸。因此「總酸」那一格比較的是總量，而非感受。"
                  : "The acids are not the same acids — sake's are chiefly lactic and succinic, wine's tartaric and malic — so that panel compares totals, not sensations.") + '</text>';
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "いずれの幅も市販品に見られる典型であり、規格ではない。個々の一本は容易にこの外へ出る。"
                  : lang === "zh" ? "各項區間都是市售品的典型範圍，而非規格；單獨一支酒很容易落在區間之外。"
                  : "Every range is typical of what is on sale rather than a standard, and an individual bottle steps outside it easily.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Sake's flexibility at the table is not a marketing claim; it follows from four measurable differences between sake and wine, and each of them removes a specific way a drink can clash with food.",
          ja:"食卓における日本酒の柔軟さは宣伝文句ではない。それは日本酒とワインのあいだにある四つの計測可能な違いから導かれ、その一つ一つが、飲み物が料理と衝突する特定の道筋を取り除いている。",
          zh:"清酒在餐桌上的靈活，並非行銷說法；它源自清酒與葡萄酒之間四項可量測的差異，而每一項都消除了飲品與食物衝突的一種特定途徑。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"No tannin",ja:"タンニンがない",zh:"沒有單寧"},
            d:{en:"Tannin is what makes red wine fight oily fish, egg yolk and chilli — it binds with proteins and turns metallic. Sake has essentially none, which is why it can sit beside sashimi, mayonnaise-dressed dishes and Sichuan food without an argument.",ja:"タンニンこそが、赤ワインを脂の乗った魚、卵黄、唐辛子と争わせるものである。たんぱく質と結びつき、金属的な味に転じる。日本酒にはほぼ含まれない。刺身やマヨネーズを用いた料理、四川の料理と諍いなく並べる理由である。",zh:"單寧正是讓紅酒與油脂豐富的魚、蛋黃與辣椒作對的東西——它與蛋白質結合，轉為金屬味。清酒幾乎不含單寧，這正是它能與生魚片、以美乃滋調味的菜餚以及川菜和平共處的原因。"} },
          { h:{en:"Low acid",ja:"酸が低い",zh:"酸度低"},
            d:{en:"Sake's acidity is roughly a third to a half of a white wine's. It therefore does not compete with vinegar, citrus or pickles, all of which are everywhere in Japanese and Chinese cooking.",ja:"日本酒の酸は、白ワインのおよそ三分の一から半分である。したがって酢、柑橘、漬物と競わない。いずれも日本と中国の料理の至るところにある。",zh:"清酒的酸度約為白酒的三分之一到二分之一，因此不會與醋、柑橘或醃漬物競爭——而這三者在日本與中華料理中無所不在。"} },
          { h:{en:"High amino acids",ja:"アミノ酸が多い",zh:"胺基酸含量高"},
            d:{en:"Sake contains several times the free amino acids of wine, and glutamate in particular. That is the same compound that carries umami in dashi, soy and cured ham, so sake amplifies savouriness rather than cutting across it.",ja:"日本酒はワインの数倍の遊離アミノ酸、とりわけグルタミン酸を含む。出汁、醤油、生ハムの旨味を担うのと同じ成分である。ゆえに日本酒は旨味を切るのではなく、増幅する。",zh:"清酒所含的游離胺基酸為葡萄酒的數倍，尤其是麩胺酸——那正是高湯、醬油與生火腿中承載旨味的同一種成分。因此清酒不會切斷鮮味，而是放大它。"} },
          { h:{en:"Temperature range",ja:"温度の幅",zh:"溫度幅度"},
            d:{en:"One bottle can be served across fifty degrees, and the same sake is a different partner cold and warm. No other drink offers this as a pairing variable, and it is the most underused tool at a Japanese table.",ja:"一本の酒を五十度の幅で供することができ、同じ酒が冷やと燗とでは別の相手になる。相性の変数としてこれを提供する飲み物は他になく、日本の食卓で最も使われていない道具である。",zh:"同一瓶酒可在五十度的溫差範圍內供飲，而同一款酒冷飲與溫飲時是不同的搭檔。沒有別的飲品把這一項當作搭配變數，而它正是日本餐桌上最少被運用的工具。"} }
        ] },
        { t:"note", label:{en:"The one real limit",ja:"唯一の実際的な限界",zh:"唯一真正的限制"}, text:{
          en:"Sake has very little acid and no tannin, which means it cannot cut through fat the way a Riesling or a Barolo does. Against something extremely rich and unrelieved — a slab of pork belly with nothing sharp on the plate — sake can feel as if it is joining in rather than cleaning up. The answer is a high-acid kimoto or yamahai, served warm, which is exactly what Japanese food does with such dishes anyway.",
          ja:"日本酒は酸がきわめて少なくタンニンもない。つまり、リースリングやバローロのように脂を切ることができない。極端に濃く、それを和らげるもののない料理——皿の上に酸のない豚バラの塊——に対しては、日本酒は片づけるというより、一緒になって重ねてくるように感じられる。答えは、酸の高い生酛や山廃を燗で、である。そもそも日本の食が、そうした料理に対してしていることそのものである。",
          zh:"清酒酸度極低且無單寧，這意味著它無法像麗絲玲或巴羅洛那樣切開油脂。面對極其濃郁而毫無緩解的東西——一塊盤中別無酸味相佐的五花肉——清酒可能給人「一起加碼」而非「清理現場」之感。答案是高酸度的生酛或山廢，溫飲——而這正是日本料理面對這類菜餚時本來就會做的事。" } }
      ]
    },

    { t:"section", id:"matrix",
      title:{ en:"A working pairing table", ja:"実用の相性表", zh:"實用搭配表" }, jp:"料理から選ぶ",
      body:[
        { t:"table",
          caption:{en:"Start here, then adjust by temperature",ja:"まずここから、次に温度で調整する",zh:"先從這裡開始，再以溫度調整"},
          cols:[{en:"Dish",ja:"料理",zh:"料理"},{en:"Sake",ja:"合わせる酒",zh:"搭配的酒"},{en:"Temperature",ja:"温度",zh:"溫度"},{en:"Why",ja:"理由",zh:"理由"}],
          rows:[
            [{en:"White sashimi, sea bream, squid",ja:"白身の刺身・鯛・烏賊",zh:"白身生魚片、鯛魚、花枝"},
             {en:"Junmai ginjō, Shizuoka or Niigata",ja:"純米吟醸（静岡・新潟）",zh:"純米吟釀（靜岡或新潟）"},{en:"8–12°C",ja:"8〜12℃",zh:"8–12°C"},
             {en:"Delicate flesh needs a sake that does not cover it. Anything with weight will bury the fish.",ja:"繊細な身には、それを覆わない酒が要る。重さのあるものは魚を埋めてしまう。",zh:"細緻的魚肉需要一款不會蓋過它的酒。任何帶重量的酒都會把魚埋沒。"}],
            [{en:"Fatty tuna, mackerel, salmon roe",ja:"大トロ・鯖・いくら",zh:"鮪魚腹、鯖魚、鮭魚卵"},
             {en:"Junmai, or a firm honjōzō",ja:"純米、または締まった本醸造",zh:"純米，或結實的本釀造"},{en:"12–18°C",ja:"12〜18℃",zh:"12–18°C"},
             {en:"Oil and iron need a little body and a little alcohol behind them; a fragile daiginjō vanishes.",ja:"脂と鉄には、いくらかの厚みとアルコールが要る。繊細な大吟醸は消えてしまう。",zh:"油脂與鐵味需要一點酒體與酒精支撐；纖細的大吟釀會就此消失。"}],
            [{en:"Tempura and fried food",ja:"天ぷら・揚げ物",zh:"天婦羅與炸物"},
             {en:"Sparkling sake, or junmai on the rocks",ja:"発泡清酒、あるいは純米のロック",zh:"氣泡清酒，或純米加冰"},{en:"6–10°C",ja:"6〜10℃",zh:"6–10°C"},
             {en:"Carbonation and cold are the only two tools sake has for cutting fat. Use both.",ja:"脂を切るために日本酒が持つ道具は、泡と冷たさの二つだけである。両方を使うこと。",zh:"清酒切油脂的工具只有兩樣：氣泡與低溫。兩樣都用上。"}],
            [{en:"Grilled fish with salt",ja:"焼き魚（塩）",zh:"鹽烤魚"},
             {en:"Junmai, kimoto",ja:"純米・生酛",zh:"純米、生酛"},{en:"40–45°C",ja:"40〜45℃",zh:"40–45°C"},
             {en:"Warmth in the sake meets warmth on the plate; the char and the lactic depth of a kimoto are made for each other.",ja:"酒の温かさが皿の温かさに応じる。焼けた香ばしさと生酛の乳酸の奥行きは、互いのために造られている。",zh:"酒的溫度呼應盤中的溫度；焦香與生酛的乳酸深度，是為彼此而生的。"}],
            [{en:"Sukiyaki, teriyaki, soy braises",ja:"すき焼き・照焼・煮物",zh:"壽喜燒、照燒、醬燒"},
             {en:"Kimoto or yamahai junmai",ja:"生酛・山廃の純米",zh:"生酛或山廢純米"},{en:"45–50°C",ja:"45〜50℃",zh:"45–50°C"},
             {en:"Sugar and soy need acid and structure. This is the pairing that converts people to warm sake.",ja:"砂糖と醤油には酸と骨格が要る。人を燗酒へ改宗させるのは、この組み合わせである。",zh:"糖與醬油需要酸度與結構。這正是讓人改信溫飲清酒的那組搭配。"}],
            [{en:"Oysters",ja:"牡蠣",zh:"生蠔"},
             {en:"Sparkling, or a dry junmai with visible acidity",ja:"発泡、または酸のはっきりした辛口純米",zh:"氣泡酒，或酸度明顯的辛口純米"},{en:"6–10°C",ja:"6〜10℃",zh:"6–10°C"},
             {en:"A famous match. The mineral and the umami reinforce each other; add a squeeze of citrus and it locks in.",ja:"名高い取り合わせ。ミネラルと旨味が互いを強め、柑橘を絞れば定まる。",zh:"著名的組合。礦物感與旨味彼此強化，擠上一點柑橘便定調。"}],
            [{en:"Hard cheese, aged gouda, parmesan",ja:"熟成チーズ・ゴーダ・パルミジャーノ",zh:"硬質起司、陳年高達、帕瑪森"},
             {en:"Koshu, or a rich yamahai",ja:"古酒、または濃い山廃",zh:"古酒，或濃郁的山廢"},{en:"18–40°C",ja:"18〜40℃",zh:"18–40°C"},
             {en:"Both sides are full of amino acids and Maillard character. One of the strongest non-Japanese pairings there is.",ja:"どちらもアミノ酸とメイラードの性格に満ちている。日本料理以外で最も強い取り合わせの一つである。",zh:"雙方都富含胺基酸與梅納反應的性格。這是所有非日式搭配中最強的組合之一。"}],
            [{en:"Roast chicken, pork, duck",ja:"鶏・豚・鴨の焼き物",zh:"烤雞、豬肉、鴨"},
             {en:"Junmai, or a genshu with water",ja:"純米、または原酒を割って",zh:"純米，或加水的原酒"},{en:"15–45°C",ja:"15〜45℃",zh:"15–45°C"},
             {en:"Roast meat has its own Maillard sweetness, which sake meets directly rather than contrasting with.",ja:"焼いた肉にはメイラードの甘みがあり、日本酒はそれに対比するのではなく、直接応じる。",zh:"烤肉自帶梅納反應的甜味，而清酒是直接應和它，而非與之對比。"}],
            [{en:"Sichuan, chilli, mala",ja:"四川料理・辛味・麻辣",zh:"川菜、辣、麻辣"},
             {en:"Slightly sweet junmai, or sparkling",ja:"やや甘口の純米、または発泡",zh:"略甜的純米，或氣泡酒"},{en:"6–10°C",ja:"6〜10℃",zh:"6–10°C"},
             {en:"Sweetness and cold both quiet capsaicin; the absence of tannin means no metallic clash. Avoid high-alcohol genshu, which amplifies the burn.",ja:"甘みと冷たさはいずれもカプサイシンを鎮める。タンニンがないため金属的な衝突も起きない。辛さを増幅する高アルコールの原酒は避けること。",zh:"甜味與低溫都能安撫辣椒素；沒有單寧則不會產生金屬性衝突。避開高酒精的原酒，它會放大灼熱感。"}],
            [{en:"Dumplings, xiaolongbao, gyōza",ja:"餃子・小籠包",zh:"水餃、小籠包、煎餃"},
             {en:"Honjōzō or dry junmai",ja:"本醸造・辛口純米",zh:"本釀造或辛口純米"},{en:"40–45°C",ja:"40〜45℃",zh:"40–45°C"},
             {en:"Warm sake with hot dumplings and vinegar is an unglamorous, extremely reliable combination.",ja:"熱い点心と酢に燗酒。華はないが、きわめて確実な取り合わせである。",zh:"熱點心配醋，再配上溫熱的清酒——不華麗，卻極其可靠。"}],
            [{en:"Red-braised pork, lu wei",ja:"豚の角煮・滷味",zh:"紅燒肉、滷味"},
             {en:"Koshu, or kimoto junmai",ja:"古酒、または生酛純米",zh:"古酒，或生酛純米"},{en:"40–50°C",ja:"40〜50℃",zh:"40–50°C"},
             {en:"Star anise, soy and long cooking need a sake with its own developed savour. A young ginjō is simply out-argued.",ja:"八角と醤油と長い煮込みには、それ自身が熟した旨味をもつ酒が要る。若い吟醸ではただ押し負ける。",zh:"八角、醬油與長時間烹煮，需要一款自身已發展出旨味的酒。年輕的吟釀在此只會被壓過去。"}],
            [{en:"Dark chocolate, dried fruit",ja:"ダークチョコレート・乾果",zh:"黑巧克力、果乾"},
             {en:"Kijōshu or long-aged koshu",ja:"貴醸酒・長期熟成の古酒",zh:"貴釀酒或長期熟成古酒"},{en:"15–20°C",ja:"15〜20℃",zh:"15–20°C"},
             {en:"The only sake styles sweet enough and concentrated enough to survive dessert.",ja:"甘さと濃さにおいて、菓子に耐えうる唯一の酒質である。",zh:"唯一在甜度與濃度上足以撐住甜點的清酒類型。"}]
          ] }
      ]
    },

    { t:"section", id:"hardcases",
      title:{ en:"The difficult cases", ja:"難しい相手", zh:"棘手的對手" }, jp:"苦手を解く",
      body:[
        { t:"defs", items:[
          { term:{en:"Vinegar and pickles",ja:"酢と漬物",zh:"醋與醃漬物"}, jp:"酸",
            def:{en:"Easy for sake and hard for wine. Because sake's own acidity is low, sharp vinegar does not strip it the way it strips a Chardonnay. Sushi rice, sunomono and Chinese black vinegar dishes are all comfortable territory — and a sake with slightly higher acidity of its own does even better.",
              ja:"日本酒には易しく、ワインには難しい相手である。日本酒自身の酸が低いため、鋭い酢がシャルドネを剥ぎ取るようには剥ぎ取らない。すし飯、酢の物、中華の黒酢料理はいずれも得意な領域であり、酸のやや高い酒ならさらに良い。",
              zh:"對清酒容易，對葡萄酒困難。由於清酒本身酸度低，尖銳的醋不會像剝除夏多內那樣剝除它。醋飯、醋物與中式黑醋料理都是舒適區——而酸度稍高的清酒表現更好。"} },
          { term:{en:"Egg",ja:"卵",zh:"蛋"}, jp:"卵黄",
            def:{en:"Egg yolk is a classic wine-killer, turning red wine metallic and flattening most whites. Sake, with no tannin and plenty of glutamate, handles chawanmushi, tamagoyaki and a soft-boiled egg on rice without any difficulty at all.",
              ja:"卵黄はワイン殺しとして知られ、赤ワインを金属的にし、多くの白ワインを平板にする。タンニンを持たず、グルタミン酸に富む日本酒は、茶碗蒸しも卵焼きも、飯にのせた半熟卵も、まったく苦もなく引き受ける。",
              zh:"蛋黃是經典的葡萄酒殺手，會讓紅酒發出金屬味、讓多數白酒變得平板。不含單寧且富含麩胺酸的清酒，面對茶碗蒸、玉子燒與飯上的半熟蛋，完全毫無困難。"} },
          { term:{en:"Coriander, mint, shiso",ja:"香菜・薄荷・紫蘇",zh:"香菜、薄荷、紫蘇"}, jp:"香草",
            def:{en:"Strong green herbs push toward a sake with its own aromatic top note rather than a savoury one — a ginjō with isoamyl acetate character, served cold. A rich warm junmai against a plate of coriander is a genuine clash.",
              ja:"強い青い香草には、旨味の勝った酒より、それ自身の上立ち香をもつ酒が合う——酢酸イソアミルの性格をもつ吟醸を、冷やして。香菜の皿に濃い燗の純米は、本当に衝突する。",
              zh:"氣味強烈的綠色香草，適合搭配自身帶有頂層香氣的酒，而非以旨味為主的酒——即帶乙酸異戊酯性格的吟釀，冰涼供飲。以濃郁的溫熱純米面對一盤香菜，是真正的衝突。"} },
          { term:{en:"Very sweet dishes",ja:"甘い料理",zh:"甜味料理"}, jp:"甘味",
            def:{en:"The general rule holds: the drink must be at least as sweet as the food or it will taste sour and thin. Almost all sake is drier than a dessert, which is why kijōshu and koshu exist as the answer and why an ordinary junmai with cake is a mistake.",
              ja:"一般の法則がそのまま当てはまる。飲み物は料理と同じかそれ以上に甘くなければ、酸っぱく痩せて感じられる。ほとんどの日本酒は菓子より辛い。貴醸酒や古酒が答えとして存在するのはそのためであり、普通の純米に洋菓子を合わせるのが誤りであるのもそのためである。",
              zh:"一般法則在此同樣成立：飲品必須至少與食物一樣甜，否則會嚐起來又酸又薄。幾乎所有清酒都比甜點更辛，這正是貴釀酒與古酒作為解答而存在的原因，也是以普通純米配蛋糕會出錯的原因。"} },
          { term:{en:"Bitter greens and offal",ja:"苦い葉物と内臓",zh:"苦味蔬菜與內臟"}, jp:"苦味",
            def:{en:"Bitterness in food amplifies bitterness in a drink. Avoid a sake that is already showing bitterness from over-milling or hard pressing, and reach for something round and warm — a yamahai at 45°C — which reads the bitterness as depth rather than as a fault.",
              ja:"料理の苦味は、飲み物の苦味を増幅する。削りすぎや強い搾りによって既に苦味の出ている酒は避け、丸く温かいもの——45度の山廃——を選ぶこと。そこでは苦味が欠点ではなく奥行きとして読まれる。",
              zh:"食物中的苦味會放大飲品中的苦味。避開因過度精米或用力壓榨而已顯苦味的酒，改選圓潤而溫熱的——45°C 的山廢——在那裡，苦味會被讀作深度而非缺陷。"} }
        ] },
        { t:"panel", title:{en:"Three rules that cover most of it",ja:"大半を覆う三つの規則",zh:"涵蓋大半情況的三條規則"}, tint:"moss",
          body:[{ t:"ol", items:[
            { en:"<strong>Match weight before you match flavour.</strong> A light dish wants a light sake; a heavy dish wants a heavy one. Almost every failed pairing is a weight mismatch, not a flavour one.",ja:"<strong>味を合わせる前に、重さを合わせること。</strong>軽い料理には軽い酒、重い料理には重い酒。失敗した取り合わせのほとんどは、味ではなく重さの不一致である。",zh:"<strong>先配重量，再配風味。</strong>清淡的菜要清淡的酒，厚重的菜要厚重的酒。幾乎所有失敗的搭配都是重量不合，而非風味不合。"},
            { en:"<strong>If it is not working, change the temperature before you change the bottle.</strong> Warming a sake by fifteen degrees changes it more than switching to a different sake at the same temperature would.",ja:"<strong>うまくいかないなら、瓶を替える前に温度を替えること。</strong>十五度温めることは、同じ温度で別の酒に替えるより大きく変える。",zh:"<strong>若配不起來，先換溫度，再換酒瓶。</strong>把一款酒加熱十五度所帶來的改變，大於在同溫度下換成另一款酒。"},
            { en:"<strong>Regional food with regional sake works more often than it should.</strong> Not because of terroir, but because both evolved in the same kitchens over three hundred years.",ja:"<strong>その土地の料理にその土地の酒は、理屈以上によく合う。</strong>テロワールのためではなく、双方が三百年のあいだ同じ台所で育ったからである。",zh:"<strong>在地菜配在地酒，成功率高得超乎道理。</strong>不是因為風土，而是因為兩者在同一批廚房裡共同演化了三百年。"}
          ] }] }
      ]
    },

{ t:"section", id:"pairing-matrix",
      title:{ en:"A pairing matrix", ja:"相性の一覧表", zh:"搭配對照表" }, jp:"料理×酒質",
      body:[
        { t:"p", text:{
          en:"Sake styles across the top, dish types down the side. The entries are starting points rather than rules — the single most reliable pairing principle in sake is that a moderate sake with moderate food rarely goes wrong, and that the interesting failures happen at the extremes.",
          ja:"横に酒質、縦に料理の型を置いた。項目は規則ではなく出発点である。日本酒における最も確かな一つの原理は、穏やかな酒と穏やかな料理はまず外さないということ、そして興味深い失敗は極端において起こるということである。",
          zh:"橫向是酒質類型，縱向是菜餚類型。表中的內容是起點而非規則——清酒最可靠的單一搭配原則是：溫和的酒配溫和的菜幾乎不會出錯，而有意思的失敗都發生在極端處。" } },

        { t:"table",
          cols:[{en:"Dish",ja:"料理",zh:"菜餚"},{en:"Best with",ja:"よく合う",zh:"最搭"},{en:"Also works",ja:"合う",zh:"也行"},{en:"Avoid",ja:"避ける",zh:"避免"}],
          rows:[
            [{en:"Raw white fish, delicate sashimi",ja:"白身の刺身",zh:"白肉生魚片"},
             {en:"Cold junmai ginjō; a clean daiginjō",ja:"冷やした純米吟醸、清らかな大吟醸",zh:"冰的純米吟釀、乾淨的大吟釀"},
             {en:"A dry honjōzō, chilled",ja:"冷やした辛口の本醸造",zh:"冰鎮的辛口本釀造"},
             {en:"Anything aged, anything warm, anything with heavy umami",ja:"熟成酒、燗、旨味の重い酒",zh:"任何熟成酒、溫飲，或旨味過重的酒"}],
            [{en:"Oily fish — mackerel, sardine, tuna belly",ja:"青魚・脂の乗った魚",zh:"油脂豐厚的魚——鯖魚、沙丁魚、鮪魚腹"},
             {en:"Kimoto or yamahai junmai, warm",ja:"生酛・山廃の純米を燗で",zh:"溫熱的生酛或山廢純米"},
             {en:"A high-acid junmai, cool",ja:"酸の高い純米を涼冷えで",zh:"酸度高的純米，微涼"},
             {en:"Very light, low-acid sake — it disappears entirely",ja:"軽く酸の低い酒。完全に消えてしまう",zh:"極輕、低酸的酒——會完全消失"}],
            [{en:"Shellfish, oysters",ja:"貝・牡蠣",zh:"貝類、生蠔"},
             {en:"Sparkling sake; a crisp junmai",ja:"発泡清酒、締まった純米",zh:"氣泡清酒；緊實的純米"},
             {en:"Nama, very cold",ja:"よく冷やした生酒",zh:"冰透的生酒"},
             {en:"Sake stored badly. Trace iron plus shellfish is the classic metallic-off pairing",ja:"保存の悪い酒。微量の鉄と貝は、金属臭の古典的な組み合わせである",zh:"保存不良的酒。微量的鐵配貝類，是經典的金屬異味組合"}],
            [{en:"Tempura and fried food",ja:"天ぷら・揚げ物",zh:"天婦羅與炸物"},
             {en:"A dry junmai with visible acidity, cool",ja:"酸のはっきりした辛口の純米を涼冷えで",zh:"酸度明顯的辛口純米，微涼"},
             {en:"Sparkling; a highball made with sake",ja:"発泡清酒、日本酒のハイボール",zh:"氣泡清酒；用清酒調的高球"},
             {en:"Sweet, low-acid sake — the fat has nothing to cut through it",ja:"甘く酸の低い酒。脂を切るものがない",zh:"偏甜、低酸的酒——沒有東西能切開油脂"}],
            [{en:"Grilled meat, yakitori with tare",ja:"焼肉・タレの焼き鳥",zh:"燒肉、醬汁烤雞串"},
             {en:"Warm yamahai; a rich genshu",ja:"燗の山廃、濃い原酒",zh:"溫的山廢；濃厚的原酒"},
             {en:"A robust junmai at room temperature",ja:"骨のある純米を常温で",zh:"結實的純米，常溫"},
             {en:"Delicate daiginjō — an expensive way to taste nothing",ja:"繊細な大吟醸。高い金を払って何も味わわない",zh:"纖細的大吟釀——花大錢卻什麼也嚐不到"}],
            [{en:"Cheese, especially hard and aged",ja:"チーズ、とくに硬質・熟成",zh:"起司，尤其是硬質與熟成類"},
             {en:"Koshu; kijōshu; warm kimoto",ja:"古酒、貴醸酒、燗の生酛",zh:"古酒、貴釀酒、溫的生酛"},
             {en:"Genshu over ice",ja:"原酒のロック",zh:"原酒加冰"},
             {en:"Light ginjō with a blue cheese — the cheese wins outright",ja:"軽い吟醸と青カビのチーズ。チーズの完勝である",zh:"清淡吟釀配藍紋起司——起司完勝"}],
            [{en:"Tomato, olive oil, herbs",ja:"トマト・オリーブ油・香草",zh:"番茄、橄欖油、香草"},
             {en:"A high-acid modern junmai, cool",ja:"酸の高い現代的な純米を涼冷えで",zh:"酸度高的現代純米，微涼"},
             {en:"Sparkling; a sake spritz",ja:"発泡清酒、日本酒のスプリッツ",zh:"氣泡清酒；清酒斯普利茲"},
             {en:"Aged sake — the two savoury profiles collide",ja:"熟成酒。二つの旨味の性格が衝突する",zh:"熟成酒——兩種旨味性格會相撞"}],
            [{en:"Chilli heat — Sichuan, Thai, Korean",ja:"辛味——四川・タイ・韓国",zh:"辣味——四川、泰式、韓式"},
             {en:"An off-dry junmai, well chilled; low alcohol",ja:"やや甘口の純米をよく冷やして。低アルコール",zh:"微甜的純米，冰透；低酒精"},
             {en:"Nigori; sake over ice",ja:"にごり、ロック",zh:"濁酒；清酒加冰"},
             {en:"Genshu or anything warm — alcohol and heat amplify each other",ja:"原酒や燗。アルコールと辛味は互いを増幅する",zh:"原酒或任何溫飲——酒精與辣感會彼此放大"}],
            [{en:"Soy-braised and red-cooked dishes",ja:"醤油の煮物・紅焼",zh:"醬燒與紅燒菜"},
             {en:"Warm junmai; yamahai",ja:"燗の純米、山廃",zh:"溫的純米；山廢"},
             {en:"Koshu with the richest of them",ja:"最も濃いものには古酒を",zh:"最濃厚者可配古酒"},
             {en:"Cold aromatic ginjō — the aroma sits awkwardly on top",ja:"冷やした香り高い吟醸。香りが上に浮いて座りが悪い",zh:"冰的芳香吟釀——香氣尷尬地浮在上面"}],
            [{en:"Dashi-based simmered dishes",ja:"出汁の煮物",zh:"高湯燉煮菜"},
             {en:"Almost any junmai, warm or cool",ja:"ほとんどの純米。燗でも冷やでも",zh:"幾乎任何純米，溫飲或微涼皆可"},
             {en:"Tokubetsu honjōzō",ja:"特別本醸造",zh:"特別本釀造"},
             {en:"Nothing, really. This is the pairing sake was built for",ja:"避けるものはほぼない。日本酒はこのために造られた",zh:"其實沒有。清酒本來就是為這種搭配而生的"}],
            [{en:"Desserts and fruit",ja:"甘味・果物",zh:"甜點與水果"},
             {en:"Kijōshu; a sweet nigori",ja:"貴醸酒、甘いにごり",zh:"貴釀酒；偏甜的濁酒"},
             {en:"Sparkling sake with fruit",ja:"果物には発泡清酒",zh:"水果搭氣泡清酒"},
             {en:"Dry sake with anything sweeter than it — it will read sour",ja:"それより甘いものと辛口の酒。酸っぱく感じられる",zh:"辛口酒配比它更甜的東西——會讀來發酸"}]
          ] }
      ] },

    { t:"section", id:"cuisines",
      title:{ en:"Beyond Japanese cooking, cuisine by cuisine", ja:"和食の外、料理ごとに", zh:"日本料理之外，逐一菜系" }, jp:"各国料理と",
      body:[
        { t:"p", text:{
          en:"Sake's usefulness outside Japan comes from what it does not have. It carries no tannin, so it does not fight protein or bitterness; its acidity is roughly a third of a white wine's, so it does not clash with vinegar or citrus; and it is full of free glutamate, so it adds savouriness rather than competing for it. That combination makes it unusually accommodating — but each cuisine has a specific reason it works, and knowing the reason tells you which sake to reach for.",
          ja:"日本の外における日本酒の有用さは、それが持たないものに由来する。タンニンを持たないから、たんぱく質とも苦味とも争わない。酸度は白ワインのおよそ三分の一だから、酢や柑橘と衝突しない。そして遊離グルタミン酸に富むから、旨味を奪い合うのではなく加える。この組み合わせが、異例なほどの寛容さを生む——しかし料理ごとに、それが働く固有の理由がある。理由を知れば、どの酒に手を伸ばすべきかが分かる。",
          zh:"清酒在日本以外之所以好用，來自它「沒有」的東西。它不含單寧，因此不與蛋白質或苦味相爭；它的酸度約為白酒的三分之一，因此不與醋或柑橘衝突；而它富含游離麩胺酸，因此是為料理增添旨味，而非與之爭奪。這組條件使它異常隨和——但每個菜系各有其奏效的具體理由，知道理由，就知道該伸手拿哪一支酒。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"Taiwanese and southern Chinese", ja:"台湾・華南", zh:"台灣與華南" }, jp:"台湾料理",
            v:{ en:"The closest natural fit", ja:"最も自然な相性", zh:"最自然的契合" },
            d:{ en:"Braised pork over rice, oyster omelette, three-cup chicken, radish cake, clam soup: a cuisine built on soy, rice wine, sesame oil, garlic and seafood umami. A warm junmai sits beside almost all of it, because the shared vocabulary is fermented soy plus glutamate. Where a dish is sweet and dark — lu rou fan, red-braised anything — go up in body and warmth; where it is clean and briny — clam and ginger soup, steamed fish — go cool and dry. Sake also does something Taiwanese rice wine cannot: it works cold, which suits the climate.",
              ja:"魯肉飯、蚵仔煎、三杯鶏、蘿蔔糕、蛤蜊湯——醤油、料理酒、胡麻油、大蒜、海の旨味の上に建てられた料理である。燗の純米はそのほとんどの傍らに座る。共有する語彙が、発酵大豆とグルタミン酸だからである。甘く濃い料理——魯肉飯、紅焼のもの——には厚みと温度を上げ、清く塩気のあるもの——蛤蜊と生姜の湯、清蒸魚——には涼しく辛口を。日本酒はまた、台湾の米酒にできないことをする——冷たくても働くのであり、それは気候に適う。",
              zh:"滷肉飯、蚵仔煎、三杯雞、蘿蔔糕、蛤蜊湯：這是一個建立在醬油、料理酒、麻油、蒜與海鮮旨味之上的菜系。溫熱的純米幾乎能陪伴其中的一切，因為共通的語彙就是發酵黃豆加麩胺酸。菜色偏甜偏濃時——滷肉飯、任何紅燒——就往更厚實、更溫熱走；菜色清爽帶鹹鮮時——蛤蜊薑湯、清蒸魚——就往清涼辛口走。清酒還做到了台灣米酒做不到的事：它冰著也好喝，而這正合這裡的氣候。" } },
          { k:{ en:"French", ja:"フランス", zh:"法式" }, jp:"仏料理",
            v:{ en:"Butter and cream", ja:"バターと生クリーム", zh:"奶油與鮮奶油" },
            d:{ en:"Sake's low acidity is a liability against a sharp sauce and an asset against a rich one. Beurre blanc, quenelles, scallops in cream, a chicken in a reduction: a junmai with body and a little warmth sits under them without the acid attack a Chablis brings. Against a vinegary salad or a citrus sauce, sake has nothing to answer with — that is a wine's job.",
              ja:"日本酒の低い酸は、鋭いソースには不利であり、濃厚なソースには有利である。ブール・ブラン、クネル、帆立のクリーム煮、鶏の煮詰めたソース——酒躯があり少し温かい純米は、シャブリの持つ酸の攻めなしに、それらの下に座る。酢のきいたサラダや柑橘のソースには、日本酒には応じるものがない。それはワインの仕事である。",
              zh:"清酒的低酸度，面對尖銳的醬汁是弱點，面對濃郁的醬汁則是優勢。白奶油醬、魚糕丸、奶油干貝、收汁的雞——一支有酒體、略帶溫度的純米能穩穩托在其下，而不帶夏布利那種酸的攻擊性。至於帶醋的沙拉或柑橘醬汁，清酒無以應對——那是葡萄酒的工作。" } },
          { k:{ en:"Italian", ja:"イタリア", zh:"義式" }, jp:"伊料理",
            v:{ en:"Depends entirely on the tomato", ja:"すべてはトマト次第", zh:"完全取決於番茄" },
            d:{ en:"Without tomato — carbonara, cacio e pepe, risotto, seafood pasta with oil and garlic — sake is excellent, and a junmai ginjō with a vongole is a genuinely great pairing rather than a novelty. With a long-cooked tomato sauce, most sake is out-acided and flattened; the exceptions are the modern high-acid junmai now made specifically to hold their own against Western food.",
              ja:"トマトがなければ——カルボナーラ、カチョ・エ・ペペ、リゾット、油と大蒜の魚介のパスタ——日本酒は優れており、ボンゴレと純米吟醸は、物珍しさではなく真に見事な組み合わせである。長く煮たトマトのソースが相手では、多くの酒は酸に負け、平板になる。例外は、西洋の料理に拮抗するために造られるようになった現代の高酸度の純米である。",
              zh:"沒有番茄的時候——卡波納拉、起司黑胡椒麵、燉飯、油蒜海鮮義大利麵——清酒表現出色，而純米吟釀配蛤蜊麵是真正精彩的組合，不是獵奇。遇上長時間熬煮的番茄醬汁，多數清酒會被酸壓過而變得平板；例外是如今專為與西式料理抗衡而釀的現代高酸純米。" } },
          { k:{ en:"Korean", ja:"韓国", zh:"韓式" }, jp:"韓国料理",
            v:{ en:"Fermentation meets fermentation", ja:"発酵と発酵", zh:"發酵遇上發酵" },
            d:{ en:"Kimchi, doenjang and gochujang are all high in glutamate and all assertive. A light sake is simply overrun. What works is either a big warm yamahai, which meets the food on its own terms, or a cold low-alcohol sake used as relief between mouthfuls rather than as a partner. Grilled pork belly with a warm junmai is one of the great cross-cultural pairings.",
              ja:"キムチ、テンジャン、コチュジャンはいずれもグルタミン酸に富み、いずれも押しが強い。軽い酒は単純に押し切られる。効くのは、料理と同じ土俵で向き合う厚い燗の山廃か、あるいは相棒としてではなく一口ごとの息継ぎとして用いる、冷たい低アルコールの酒である。豚バラの網焼きと燗の純米は、国境を越えた組み合わせの白眉の一つである。",
              zh:"泡菜、大醬與辣椒醬都富含麩胺酸，也都個性強烈。清淡的酒會被直接輾過。有效的做法有二：一是厚實的溫熱山廢，以對等的姿態迎上；二是冰涼的低酒精清酒，不當夥伴而當每口之間的喘息。烤五花肉配溫熱純米，是跨文化搭配中最出色的組合之一。" } },
          { k:{ en:"Indian and South-East Asian", ja:"インド・東南アジア", zh:"印度與東南亞" }, jp:"香辛料の料理",
            v:{ en:"Sweetness beats structure", ja:"骨格より甘み", zh:"甜勝過結構" },
            d:{ en:"Capsaicin heat is amplified by alcohol and soothed by sugar, so the useful axis here is not body but residual sweetness and serving temperature. A cold, slightly sweet junmai — or a nigori, or sake cut with soda over ice — works where a fine daiginjō is simply wasted. Coconut, tamarind and lime all sit comfortably beside sake; chilli is the variable to manage.",
              ja:"唐辛子の辛味はアルコールに増幅され、糖に和らげられる。ゆえにここで有用な軸は酒躯ではなく、残糖と供する温度である。冷たくやや甘い純米——あるいはにごり、あるいは炭酸で割ってロックにした酒——は、精緻な大吟醸が単に無駄になる場で働く。ココナッツ、タマリンド、ライムはいずれも日本酒の傍らに心地よく座る。御すべき変数は辛味である。",
              zh:"辣椒素的辣感會被酒精放大、被糖分安撫，因此這裡有用的軸線不是酒體，而是殘糖與供飲溫度。一支冰涼、微甜的純米——或濁酒，或以蘇打稀釋加冰的清酒——能在精緻大吟釀純屬浪費的場合發揮作用。椰奶、羅望子與萊姆都能與清酒和睦共處；要管理的變因是辣度。" } },
          { k:{ en:"Roasts and barbecue", ja:"ロースト・バーベキュー", zh:"燒烤與炙烤" }, jp:"焼いた肉",
            v:{ en:"Char likes age", ja:"焦げは熟成を好む", zh:"焦香喜歡年份" },
            d:{ en:"Maillard products in a crust and Maillard products in an aged sake recognise each other. A koshu with roast pork, a warm yamahai with smoked brisket, a taru-aged sake with anything cooked over wood — these work on a shared chemistry rather than a contrast. It is also the one place a genuinely old sake is easy to introduce to a sceptic.",
              ja:"焼き目のメイラードの産物と、熟成酒のメイラードの産物は互いを認め合う。豚のローストに古酒、燻したブリスケットに燗の山廃、薪で焼いたものに樽酒——これらは対比ではなく、共有する化学の上に働く。そしてここは、本当に古い酒を懐疑的な人に差し出しやすい、唯一の場所でもある。",
              zh:"焦脆表層的梅納產物，與熟成酒中的梅納產物會彼此辨認。烤豬肉配古酒、煙燻牛胸配溫熱山廢、任何以柴火烹調的東西配樽酒——這些是建立在共通化學上，而非對比上。這也是唯一一個能輕鬆把真正的老酒推薦給懷疑者的場合。" } }
        ] },

        { t:"quote", text:{
          en:"When a pairing fails, one of three things has happened: the sake was too delicate for the food, the food was too acidic for the sake, or the sake was served at the wrong temperature. The third is the commonest and the easiest to fix.",
          ja:"組み合わせが失敗したとき、起きていることは三つのうちのいずれかである——酒が料理に対して繊細すぎたか、料理が酒に対して酸っぱすぎたか、酒の温度が誤っていたか。最も多いのは三つ目であり、最も直しやすいのも三つ目である。",
          zh:"當一次搭配失敗時，發生的必是三件事之一：酒對這道菜太纖細、菜對這支酒太酸，或酒的溫度不對。第三種最常見，也最容易修正。" } }
      ] },

    { t:"related", items:[
      { href:"taste.html", why:{ en:"The compounds that make a pairing work or fail.", ja:"組合せを成り立たせ、あるいは壊す成分。", zh:"讓一組搭配成立或失敗的那些成分。" } },
      { href:"styles.html", why:{ en:"The styles the pairings are organised around.", ja:"組合せがそれを軸に組まれている型。", zh:"這些搭配所圍繞的那些風格。" } },
      { href:"serving.html", why:{ en:"Temperature, which changes a pairing more than the dish does.", ja:"料理よりも組合せを変える、温度。", zh:"溫度改變一組搭配的程度，大過菜色本身。" } },
      { href:"cocktails.html", why:{ en:"When the sake is an ingredient rather than a drink.", ja:"酒が飲み物ではなく材料であるとき。", zh:"當清酒是材料、而不是飲料的時候。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- storage */
SAKE.pages["storage"] = {
  kicker: { en: "Drinking · 06", ja: "飲む · 06", zh: "品飲 · 06" },
  title:  { en: "Buying & Storage", ja: "購入と保存", zh: "選購與保存" },
  jp: "選び方 · 保存 · 開栓後",
  lede: {
    en: "More sake is ruined between the brewery and the glass than is ever ruined in the brewery. Sake has no tannin and no significant preservative structure; it is vulnerable to heat, to light and to oxygen, and it deteriorates in ways that are entirely preventable. This page is about what to buy, where from, and what to do with it once it is home.",
    ja: "蔵のなかで損なわれる酒よりも、蔵から杯までのあいだに損なわれる酒のほうがはるかに多い。日本酒はタンニンをもたず、保存性を支える構造ももたない。熱と光と酸素に弱く、その劣化は完全に防ぎうる種類のものである。本頁は、何を、どこで買い、持ち帰ってからどうするかについてである。",
    zh: "在酒藏到酒杯之間毀掉的清酒，遠多於在酒藏內毀掉的。日本酒沒有單寧，也沒有顯著的保存結構；它易受熱、光與氧氣侵害，而這些劣化完全可以預防。本頁談的是：買什麼、去哪裡買，以及帶回家之後該怎麼做。"
  },
  body: [
    { t:"section", id:"buying",
      title:{ en:"Buying", ja:"購入", zh:"選購" }, jp:"選び方",
      body:[
        { t:"steps", items:[
          { title:{en:"Buy from somewhere that refrigerates",ja:"冷蔵している店で買う",zh:"向有冷藏的店家購買"},
            text:{en:"This matters more than the label. A specialist shop that keeps its whole premium range at 5 °C is selling a different product from a supermarket keeping the same bottles under warm lighting. If a shop keeps namazake on an unrefrigerated shelf, do not buy anything there.",
                  ja:"これはラベルより重要である。上位商品をすべて5℃で保管する専門店と、同じ瓶を温かい照明の下に置くスーパーマーケットは、別の商品を売っている。生酒を常温の棚に置いている店では、何も買わないほうがよい。",
                  zh:"這比酒標更重要。將全部高階品項維持在 5°C 的專賣店，與把同樣的瓶子放在溫熱燈光下的超市，賣的是不同的產品。若一家店把生酒放在未冷藏的貨架上，那裡的東西一律不要買。"} },
          { title:{en:"Check the production date, then check what kind of sake it is",ja:"製造年月を見て、次に酒の種類を見る",zh:"先看製造年月，再看酒的種類"},
            text:{en:"For nama, under six months and refrigerated throughout. For pasteurised sake, a year or two is usually fine, and some junmai improves. For anything labelled 生 or 要冷蔵 sitting at room temperature, walk away regardless of the date.",
                  ja:"生酒は半年以内かつ通しで冷蔵されていること。火入れ酒なら一年から二年は概ね問題なく、純米には良くなるものもある。「生」「要冷蔵」と書かれたものが常温に置かれていたら、日付にかかわらず手を出さない。",
                  zh:"生酒須在半年內且全程冷藏。火入酒通常一至兩年無妨，部分純米甚至會變好。凡標示「生」或「要冷藏」卻置於常溫者，無論日期為何都應轉身離開。"} },
          { title:{en:"Prefer smaller bottles until you know",ja:"分かるまでは小さい瓶で",zh:"在摸清之前選小瓶"},
            text:{en:"720 mL rather than 1,800 mL. An isshōbin is better value and better storage, but it is four glasses a night for a week, and an open bottle changes measurably over that time.",
                  ja:"一升瓶ではなく四合瓶を。一升瓶は割安で保存にも優れるが、一晩四杯で一週間かかる量であり、開栓した酒はその間に測定できるほど変化する。",
                  zh:"選 720 mL 而非 1,800 mL。一升瓶較划算也較利保存，但那是每晚四杯、喝上一週的量，而開瓶後的酒在這段時間內會有可測量的變化。"} },
          { title:{en:"Buy the same brewery twice",ja:"同じ蔵を二度買う",zh:"同一家酒藏買兩次"},
            text:{en:"Reading across a brewery's range — its junmai, then its junmai ginjō — teaches more than reading across ten breweries at the same grade. Houses have accents, and one bottle is not enough to hear one.",
                  ja:"一つの蔵の商品を横に読むこと——純米、次に純米吟醸——は、十の蔵の同じ格の酒を読むよりも多くを教える。蔵には訛りがあり、一本ではそれを聞き取れない。",
                  zh:"橫向讀完一家酒藏的產品線——先純米，再純米吟釀——所學的，多過橫讀十家酒藏的同一等級。每家酒藏都有口音，而一瓶不足以聽出來。"} }
        ] }
      ]
    },

    { t:"section", id:"storing",
      title:{ en:"Storing an unopened bottle", ja:"未開栓の保存", zh:"未開瓶的保存" }, jp:"保存",
      body:[
        { t:"figure",
          caption:{
            en:"A schematic of the same bottle stored three ways. The vertical axis is simply how far the sake has moved from what it was on the day it was filled; the horizontal line is the point at which most drinkers would call it changed. The curves are illustrative, not measured — but the ratios between them are the real ones, because the chemistry roughly doubles in rate for every ten degrees.",
            ja:"同じ一本を三通りに貯えた場合の模式図。縦の軸は、満たされた日のそれから酒がどれだけ離れたかにすぎない。横の線は、ほとんどの飲み手がそれを変わったと呼ぶ点である。曲線は測られたものではなく例えである。だが、それらの間の比は実である。化学の速さは十度ごとにおおよそ倍になるからである。",
            zh:"同一支酒以三種方式保存的示意圖。縱軸只是「這支酒離裝瓶那天有多遠」；橫線是多數飲者會說「它變了」的那個點。曲線是示意而非實測——但彼此之間的比例是真實的，因為溫度每上升十度，化學反應速率大約加倍。" },
          svg: function (lang, L) {
            var W = 760, H = 380, X0 = 74, X1 = W - 168, Y0 = 40, Y1 = H - 78;
            var MONTHS = 24;
            function px(m) { return X0 + m / MONTHS * (X1 - X0); }
            function py(v) { return Y1 - v * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            for (var m = 0; m <= MONTHS; m += 6) {
              s += '<line x1="' + px(m) + '" y1="' + Y0 + '" x2="' + px(m) + '" y2="' + Y1 + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(m) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + m + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            /* the "noticeably changed" threshold */
            var TH = 0.55;
            s += '<line x1="' + X0 + '" y1="' + py(TH) + '" x2="' + X1 + '" y2="' + py(TH) + '" stroke="#B4AC9C" stroke-dasharray="5 3"/>';
            s += '<text x="' + px(5.2) + '" y="' + (py(TH) - 7) + '" font-size="10" fill="#7C6B52">' +
                 (lang === "ja" ? "ここで、ほとんどの飲み手が「変わった」と言う" : lang === "zh" ? "到這裡，多數飲者會說「它變了」" : "here, most drinkers would say it has changed") + '</text>';
            var series = [
              { c:"#B09E7C", w:1.8, k:3.2, lab:{ en:"20 °C · a room", ja:"二十度・室内", zh:"二十度・室內" },
                sub:{ en:"crosses at about three months", ja:"およそ三月で越える", zh:"約三個月越線" } },
              { c:"#8B9BA6", w:1.8, k:0.80, lab:{ en:"5 °C · a refrigerator", ja:"五度・冷蔵庫", zh:"五度・冰箱" },
                sub:{ en:"about a year", ja:"およそ一年", zh:"約一年" } },
              { c:"#7C6B52", w:1.8, k:0.40, lab:{ en:"−5 °C · frozen storage", ja:"氷点下五度・氷温貯蔵", zh:"零下五度・冰溫貯藏" },
                sub:{ en:"only at about two years", ja:"およそ二年でようやく", zh:"約兩年才到達" } }
            ];
            function curve(k) {
              var d = "", m2;
              for (m2 = 0; m2 <= MONTHS; m2 += 1) {
                var v = 1 - Math.exp(-k * m2 / 12);
                d += (m2 ? " L" : "M") + px(m2) + " " + py(v);
              }
              return d;
            }
            for (var i = 0; i < series.length; i++) {
              var se = series[i];
              s += '<path d="' + curve(se.k) + '" fill="none" stroke="' + se.c + '" stroke-width="' + se.w + '"/>';
              var endv = 1 - Math.exp(-se.k * MONTHS / 12);
              s += '<line x1="' + X1 + '" y1="' + py(endv) + '" x2="' + (X1 + 10) + '" y2="' + py(endv) + '" stroke="' + se.c + '"/>';
              s += '<text x="' + (X1 + 15) + '" y="' + (py(endv) - 1) + '" font-size="11" fill="#201E1B">' + L(se.lab) + '</text>';
              s += '<text x="' + (X1 + 15) + '" y="' + (py(endv) + 12) + '" font-size="9.5" fill="#8B857C">' + L(se.sub) + '</text>';
              /* mark where it crosses the threshold */
              if (endv > TH) {
                var mc = -Math.log(1 - TH) / se.k * 12;
                s += '<line x1="' + px(mc) + '" y1="' + py(TH) + '" x2="' + px(mc) + '" y2="' + Y1 + '" stroke="' + se.c + '" stroke-dasharray="2 3"/>';
                s += '<rect x="' + (px(mc) - 3) + '" y="' + (py(TH) - 3) + '" width="6" height="6" fill="' + se.c + '"/>';
              }
            }
            s += '<text x="' + X0 + '" y="' + (Y1 + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "貯蔵の月数" : lang === "zh" ? "貯藏月數" : "MONTHS IN STORAGE") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "瓶詰の日からの隔たり ↑" : lang === "zh" ? "與裝瓶當日的距離 ↑" : "DISTANCE FROM THE DAY IT WAS BOTTLED ↑") + '</text>';
            s += '<text x="' + X0 + '" y="' + (H - 14) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "生酒はいずれの線もはるかに急である。火入れをしていない一本については、時の目盛りをおおよそ四分の一にして読まれたい。"
                  : lang === "zh" ? "生酒的每一條線都陡得多。對一支未經火入的酒，請把時間刻度大致除以四來讀。"
                  : "Every line is far steeper for unpasteurised sake. For a nama bottle, read the time axis at roughly a quarter of the scale shown.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          cols:[{en:"Type",ja:"種類",zh:"種類"},{en:"Store at",ja:"保存温度",zh:"保存溫度"},{en:"Drink within",ja:"目安",zh:"建議期限"},{en:"Note",ja:"備考",zh:"備註"}],
          rows:[
            [{en:"Namazake, nama genshu",ja:"生酒・生原酒",zh:"生酒・生原酒"},"−5 to 5 °C",{en:"3–6 months",ja:"三〜六か月",zh:"3–6 個月"},
             {en:"Enzymes are still live. A week at room temperature can noticeably coarsen it; a month can ruin it. Some breweries recommend freezing, which works and does not burst the bottle at 16% alcohol if there is headspace.",ja:"酵素が生きている。常温で一週間置けば目に見えて荒れ、一か月で台無しになりうる。冷凍を勧める蔵もあり、これは有効で、アルコール16%かつヘッドスペースがあれば瓶は割れない。",zh:"酵素仍具活性。常溫放置一週便會明顯變粗糙，一個月可能就毀了。部分酒藏建議冷凍，此法有效；在 16% 酒精且留有頂隙的情況下瓶身不會爆裂。"}],
            [{en:"Ginjō, daiginjō (pasteurised)",ja:"吟醸・大吟醸（火入れ）",zh:"吟釀、大吟釀（火入）"},"5–10 °C",{en:"6–12 months",ja:"六か月〜一年",zh:"6–12 個月"},
             {en:"Aroma esters degrade first and are what you paid for. Refrigerate even though pasteurised sake does not require it.",ja:"最初に劣化するのは香気エステルであり、それこそが代金の対象である。火入れ酒に冷蔵は必須ではないが、それでも冷やす。",zh:"最先劣化的是香氣酯類，而那正是你所付費的部分。即使火入酒不強制冷藏，仍應冷藏。"}],
            [{en:"Junmai, honjōzō (pasteurised)",ja:"純米・本醸造（火入れ）",zh:"純米、本釀造（火入）"},{en:"below 20 °C, dark",ja:"20℃以下・暗所",zh:"20°C 以下、避光"},{en:"1–2 years",ja:"一〜二年",zh:"1–2 年"},
             {en:"The most robust category. A cool dark cupboard is genuinely adequate. Many improve for a year or more.",ja:"最も丈夫な区分。涼しく暗い戸棚で本当に十分である。一年以上、良くなり続けるものも多い。",zh:"最強健的類別。陰涼避光的櫥櫃確實已足夠；許多款在一年以上仍持續變好。"}],
            [{en:"Koshu, kijōshu",ja:"古酒・貴醸酒",zh:"古酒・貴釀酒"},{en:"cool and stable",ja:"涼しく安定した場所",zh:"陰涼且穩定"},{en:"years to decades",ja:"数年から数十年",zh:"數年至數十年"},
             {en:"Already oxidatively developed and far more stable than young sake. Temperature stability matters more than absolute temperature.",ja:"すでに酸化的に発達しており、若い酒よりはるかに安定している。絶対温度より、温度が変動しないことのほうが重要である。",zh:"已完成氧化發展，遠比新酒穩定。溫度的穩定性比絕對溫度更重要。"}]
          ] },
        { t:"panel", tint:"snow", title:{en:"Three enemies",ja:"三つの敵",zh:"三個敵人"}, body:[
          { t:"ul", items:[
            { en:"<strong>Light.</strong> Ultraviolet produces sulfur compounds within hours — the fault brewers call <em>nikkōshū</em>, sunlight-odour. This is why sake bottles are dark green or brown, why premium bottles are often wrapped in paper, and why a clear bottle in a sunny window is being destroyed as you look at it. Fluorescent light does it too, more slowly.",
              ja:"<strong>光。</strong>紫外線は数時間で硫黄化合物を生じさせる——蔵人が日光臭と呼ぶ欠点である。日本酒の瓶が濃緑や褐色である理由、上位商品が紙に包まれている理由、そして日の当たる窓辺の透明瓶が、見ているそばから壊れていっている理由である。蛍光灯でも、より遅くではあるが同じことが起こる。",
              zh:"<strong>光。</strong>紫外線在數小時內即可生成硫化物——釀造者稱之為「日光臭」的缺陷。這正是清酒瓶為深綠或褐色、高階酒常以紙包裹的原因，也是為何陽光窗邊的透明酒瓶在你注視的當下正被摧毀。日光燈同樣會造成此害，只是較慢。" },
            { en:"<strong>Heat.</strong> Every ten degrees roughly doubles the rate of the Maillard reactions that produce <em>hine-ka</em>. A summer in an unairconditioned Japanese apartment will age a bottle several years' worth in the wrong direction.",
              ja:"<strong>熱。</strong>十度上がるごとに、老香を生むメイラード反応の速度はおおよそ倍になる。冷房のない日本の住居で夏を越せば、一本は誤った方向に数年分は歳を取る。",
              zh:"<strong>熱。</strong>每升高十度，產生老香的梅納反應速率約增為兩倍。在沒有空調的日本住宅裡過一個夏天，一瓶酒會朝錯誤方向老去數年的份量。" },
            { en:"<strong>Vibration and smell.</strong> Less important than the other two, but sake picks up ambient odours through the closure over months, and a fridge full of kimchi is a poor cellar.",
              ja:"<strong>振動と匂い。</strong>前の二つほど重要ではないが、日本酒は数か月かけて栓を通して周囲の匂いを取り込む。キムチでいっぱいの冷蔵庫は良い酒蔵ではない。",
              zh:"<strong>震動與氣味。</strong>不如前兩者重要，但清酒會在數月間透過瓶封吸收周遭氣味；塞滿泡菜的冰箱不是好酒窖。" }
          ] }
        ] }
      ]
    },

    { t:"section", id:"opened",
      title:{ en:"After opening", ja:"開栓後", zh:"開瓶之後" }, jp:"開栓後",
      body:[
        { t:"p", text:{
          en:"Sake does not fall off a cliff the way an open bottle of white wine does, but it does change, and the change is faster in the styles that were most delicate to begin with. Recork, refrigerate, and stand the bottle upright — a horizontal bottle exposes more surface to the air in the neck and, unlike wine, sake has no cork to keep moist.",
          ja:"開けた白ワインのように崖から落ちるわけではないが、確かに変化する。そして最も繊細な酒質ほど変化は速い。栓をし直し、冷蔵し、瓶は立てて置く。横に寝かせると首の部分で空気に触れる面積が増えるうえ、ワインと違って湿らせておくべきコルクも存在しない。",
          zh:"日本酒不像開瓶的白酒那樣斷崖式衰退，但它確實會變化，且原本最細緻的風格變化最快。重新封口、冷藏，並將瓶身直立——橫放會讓瓶頸處接觸更多空氣，而且與葡萄酒不同，清酒沒有需要保持濕潤的軟木塞。" } },
        { t:"table",
          cols:[{en:"Type",ja:"種類",zh:"種類"},{en:"Best within",ja:"最良",zh:"最佳期限"},{en:"Still fine for",ja:"許容",zh:"尚可"},{en:"What changes",ja:"変化",zh:"變化"}],
          rows:[
            [{en:"Daiginjō, aromatic ginjō",ja:"大吟醸・香り高い吟醸",zh:"大吟釀、芳香型吟釀"},{en:"2–3 days",ja:"二〜三日",zh:"2–3 天"},{en:"a week",ja:"一週間",zh:"一週"},
             {en:"Aroma flattens first and does not come back. Everything else holds.",ja:"まず香りが平板になり、戻らない。他は保たれる。",zh:"香氣最先變平，且不會回來；其餘部分尚能維持。"}],
            [{en:"Nama, nama genshu",ja:"生酒・生原酒",zh:"生酒・生原酒"},{en:"3–5 days",ja:"三〜五日",zh:"3–5 天"},{en:"2 weeks refrigerated",ja:"冷蔵で二週間",zh:"冷藏兩週"},
             {en:"Changes daily and often interestingly — many namazake are better on day three than on day one. Watch for the point where it turns sour.",ja:"日ごとに変わり、しばしば興味深い方向へ向かう。三日目のほうが初日より良い生酒は多い。酸っぱさに転じる点を見極める。",zh:"每天都在變，且常朝有趣的方向——許多生酒第三天勝過第一天。留意它轉酸的臨界點。"}],
            [{en:"Junmai, honjōzō",ja:"純米・本醸造",zh:"純米、本釀造"},{en:"1–2 weeks",ja:"一〜二週間",zh:"1–2 週"},{en:"a month",ja:"一か月",zh:"一個月"},
             {en:"Broadens and softens. If it tires, warming it to 45 °C usually recovers most of what was lost.",ja:"広がり、丸くなる。疲れてきたら、45℃に燗すれば失われたものの多くは戻る。",zh:"變寬、變柔。若顯疲態，溫至 45°C 通常能挽回大部分失去的東西。"}],
            [{en:"Koshu, kijōshu",ja:"古酒・貴醸酒",zh:"古酒・貴釀酒"},{en:"a month",ja:"一か月",zh:"一個月"},{en:"several months",ja:"数か月",zh:"數個月"},
             {en:"Very stable — it has already been through the oxidative changes that damage young sake.",ja:"極めて安定している。若い酒を損なう酸化的な変化は、すでに通り過ぎている。",zh:"極為穩定——傷害新酒的氧化變化，它早已走過。"}]
          ] },
        { t:"note", label:{en:"Cooking with it",ja:"料理に使う",zh:"用於烹調"}, text:{
          en:"A bottle that has gone past its best is not waste. Sake is a standard Japanese cooking ingredient — it tenderises protein, removes fishy odours, and adds glutamate. Anything that has flattened but not soured is better in a braise than most of what is sold as “cooking sake”, which is salted to avoid liquor duty and should not be used where the salt matters.",
          ja:"盛りを過ぎた一本は無駄ではない。日本酒は和食の基本的な調味料であり、たんぱく質を柔らかくし、生臭みを取り、グルタミン酸を加える。平板になっただけで酸っぱくなっていない酒は、煮物においては市販の「料理酒」の多くより優れている。料理酒は酒税を避けるため加塩されており、塩分が問題になる場面では使えない。",
          zh:"過了適飲期的酒並非浪費。清酒是日本料理的基本材料——軟化蛋白質、去除腥味、增添麩胺酸。只是變平、尚未轉酸的酒，用於燉煮勝過多數市售「料理酒」；後者為規避酒稅而加了鹽，在鹽分關鍵之處不宜使用。" } }
      ]
    },

    { t:"section", id:"faults",
      title:{ en:"Recognising damage", ja:"劣化の見分け方", zh:"辨識劣化" }, jp:"劣化",
      body:[
        { t:"ul", items:[
          { en:"<strong>Colour.</strong> A clear sake that has gone distinctly yellow or brown, when the label says ginjō and the date is recent, has been heat-damaged.",
            ja:"<strong>色。</strong>吟醸と書かれ、日付も新しいのに、はっきり黄色や褐色に変わっているなら、熱による劣化である。",
            zh:"<strong>顏色。</strong>標示吟釀、日期又新，酒色卻明顯轉黃或轉褐者，是受熱劣化。" },
          { en:"<strong>Smell.</strong> Wet cardboard, boiled cabbage, drains, old cooking oil — <em>hine-ka</em>. Struck match or rotten egg — light damage. Nail varnish — usually a fermentation fault rather than storage.",
            ja:"<strong>匂い。</strong>濡れた段ボール、茹でたキャベツ、排水、古い油——老香である。マッチを擦った匂いや腐卵臭——光による劣化。マニキュアの匂い——多くは保存ではなく発酵に由来する欠点。",
            zh:"<strong>氣味。</strong>濕紙板、煮甘藍、水溝、陳油——老香。火柴或臭蛋味——光害。指甲油味——通常是發酵缺陷而非保存問題。" },
          { en:"<strong>Cloudiness in a sake that should be clear.</strong> Possible <em>hiochi</em> bacterial spoilage, particularly in an unpasteurised bottle stored warm. It is not dangerous, but it is over.",
            ja:"<strong>澄んでいるはずの酒の濁り。</strong>火落菌による腐敗の可能性がある。とくに常温で置かれた生酒に多い。危険ではないが、その酒は終わっている。",
            zh:"<strong>本應澄清的酒卻混濁。</strong>可能是火落菌敗壞，尤常見於常溫存放的生酒。它並不危險，但已經完了。" },
          { en:"<strong>Taste.</strong> Flat, papery, bitter at the finish, with the aroma sitting apart from the body. Try warming it to 45 °C before giving up — heat recovers a surprising amount of tired sake, and if it does not, that is the answer.",
            ja:"<strong>味。</strong>平板で、紙のようで、後味に苦みがあり、香りが味と離れている。諦める前に45℃に燗してみるとよい。熱は疲れた酒を驚くほど戻すことがあり、戻らなければそれが答えである。",
            zh:"<strong>味道。</strong>平板、紙味、尾韻帶苦，香氣與酒體各自分離。放棄之前先溫至 45°C 試試——熱能挽回相當多疲憊的酒；若無效，那就是答案。" }
        ] }
      ]
    },

{ t:"section", id:"regimes",
      title:{ en:"What to store where", ja:"どれをどこに置くか", zh:"何者該存放何處" }, jp:"保管の指針",
      body:[
        { t:"p", text:{
          en:"There is no single correct storage temperature for sake, because the categories want different things. The table below is a practical assignment for a household with one fridge and one dark cupboard.",
          ja:"日本酒に唯一正しい保管温度というものはない。種類ごとに求めるものが違うからである。以下は、冷蔵庫が一台と暗い戸棚が一つある家庭を想定した、実際的な割り当てである。",
          zh:"清酒沒有單一正確的保存溫度，因為不同類別各有所求。下表是針對「一台冰箱加一個陰暗櫥櫃」的家庭所做的實用分配。" } },
        { t:"table",
          cols:[{en:"Type",ja:"種類",zh:"類型"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Where",ja:"置き場所",zh:"存放處"},{en:"How long unopened",ja:"未開封で",zh:"未開封可放"}],
          jpCols:[1],
          rows:[
            [{en:"Namazake, all kinds",ja:"生酒全般",zh:"各類生酒"},"生酒",
             {en:"Fridge, 0–5°C, always. Never the door.",ja:"必ず冷蔵、0〜5℃。扉のポケットは不可。",zh:"務必冷藏，0–5°C。切勿放門邊置物架。"},
             {en:"Three to six months, and it is better at three.",ja:"三から六か月。三か月のほうが良い。",zh:"三至六個月，而三個月時更好。"}],
            [{en:"Daiginjō, ginjō",ja:"大吟醸・吟醸",zh:"大吟釀、吟釀"},"吟醸酒",
             {en:"Fridge if there is room, otherwise the coolest dark place you have.",ja:"余地があれば冷蔵、なければ家で最も涼しく暗い場所。",zh:"有空間就冷藏，否則放家中最陰涼黑暗之處。"},
             {en:"Six to twelve months; the aroma fades first.",ja:"半年から一年。まず香りから褪せる。",zh:"六至十二個月；最先消退的是香氣。"}],
            [{en:"Junmai, honjōzō, pasteurised",ja:"純米・本醸造（火入れ）",zh:"純米、本釀造（火入）"},"火入れ酒",
             {en:"A dark cupboard below about 20°C is fine. Away from the cooker.",ja:"20℃を下回る暗い戸棚でよい。コンロから離すこと。",zh:"約 20°C 以下的陰暗櫥櫃即可。遠離爐具。"},
             {en:"A year or more; it will change slowly rather than spoil.",ja:"一年以上。腐るのではなく、ゆっくり変わっていく。",zh:"一年以上；它會緩慢變化，而非腐壞。"}],
            [{en:"Kimoto, yamahai",ja:"生酛・山廃",zh:"生酛、山廢"},"生酛系",
             {en:"Cupboard. These are the most robust sake made and they often improve with a year.",ja:"戸棚でよい。最も頑健な酒であり、一年置いて良くなることも多い。",zh:"櫥櫃即可。這是最強韌的一類酒，放上一年往往更好。"},
             {en:"One to three years without concern.",ja:"一年から三年は案じるに及ばない。",zh:"一至三年無需擔心。"}],
            [{en:"Koshu, aged sake",ja:"古酒・熟成酒",zh:"古酒、熟成酒"},"熟成酒",
             {en:"Cupboard, upright, stable temperature. It has already survived worse than your kitchen.",ja:"戸棚に立てて、温度を一定に。あなたの台所より過酷なものを、すでに越えてきている。",zh:"櫥櫃、直立、溫度穩定。它已經熬過比你廚房更嚴苛的環境。"},
             {en:"Years. This is the point of it.",ja:"何年でも。そのために造られている。",zh:"數年。這正是它的意義所在。"}],
            [{en:"Sparkling, live nigori",ja:"発泡・活性にごり",zh:"氣泡、活性濁酒"},"活性酒",
             {en:"Fridge, upright, and check it is not a bottle that keeps building pressure.",ja:"冷蔵に立てて。圧が上がり続ける瓶でないか確かめること。",zh:"冷藏、直立，並確認它不是那種壓力會持續累積的瓶子。"},
             {en:"Three months, and drink it sooner.",ja:"三か月。それより早く飲むこと。",zh:"三個月，而且應更早喝掉。"}]
          ] },
        { t:"note", label:{en:"The fridge door is the worst place in the house",ja:"冷蔵庫の扉は家で最悪の場所である",zh:"冰箱門是家中最糟的位置"}, text:{
          en:"It is the warmest part of the fridge, it swings through several degrees every time someone opens it, and it shakes. Put sake at the back of a shelf, standing up. If you have a wine fridge, set it to about 5°C for nama and 10–12°C for everything else; sake is happier colder than wine is.",
          ja:"扉は冷蔵庫のなかで最も温かく、誰かが開けるたびに数度も揺れ動き、しかも振動する。酒は棚の奥に、立てて置くこと。ワインセラーがあるなら、生酒には5℃前後、それ以外には10〜12℃を。日本酒はワインより冷たいほうが機嫌がよい。",
          zh:"那是冰箱最溫暖的部位，每次有人開門就會擺盪好幾度，而且會震動。請把酒直立放在層架深處。若你有酒櫃，生酒設約 5°C，其餘設 10–12°C；清酒比葡萄酒更喜歡低溫。" } }
      ]
    },

    { t:"section", id:"chain",
      title:{ en:"The cold chain, and where it breaks", ja:"冷蔵の連鎖と、その切れ目", zh:"冷鏈及其斷點" }, jp:"流通",
      body:[
        { t:"p", text:{
          en:"A bottle of sake passes through four or five hands between the press and your glass, and its condition when it reaches you is decided by the weakest link, not the average. Knowing where the chain typically breaks tells you what to ask and what to avoid.",
          ja:"一本の酒は、搾りからあなたの杯までに四つか五つの手を経る。届いたときの状態を決めるのは平均ではなく、最も弱い環である。連鎖がどこで切れやすいかを知れば、何を尋ね、何を避けるべきかが分かる。",
          zh:"一瓶酒從壓榨到你的杯中，要經過四五雙手，而它抵達時的狀態取決於最弱的一環，而非平均值。知道鏈條通常在哪裡斷裂，就知道該問什麼、該避開什麼。" } },
        { t:"steps", items:[
          { title:{en:"Brewery storage",ja:"蔵の貯蔵",zh:"酒藏貯藏"}, jp:"貯蔵",
            meta:{en:"Usually reliable",ja:"おおむね安心",zh:"通常可靠"},
            text:{en:"Modern breweries hold finished sake in refrigerated tanks or cold rooms and bottle to order where they can. This part of the chain is rarely the problem.",ja:"現代の蔵は、仕上がった酒を冷蔵のタンクや冷蔵庫で保ち、可能なら受注に応じて瓶詰めする。ここが問題になることはまれである。",zh:"現代酒藏以冷藏槽或冷藏室存放成酒，並盡可能依訂單裝瓶。這一環很少出問題。"} },
          { title:{en:"Wholesale and transport",ja:"卸と輸送",zh:"批發與運輸"}, jp:"物流",
            meta:{en:"The commonest failure",ja:"最も多い失敗",zh:"最常見的失誤"},
            text:{en:"A pallet standing on a loading dock in August, or a container crossing the equator without refrigeration, undoes everything upstream of it. Reputable importers ship reefer; the price difference is real and it is why identical bottles cost differently in different shops.",ja:"八月の荷捌き場に置かれたパレット、あるいは冷蔵なしで赤道を越えるコンテナは、その上流のすべてを台無しにする。まともな輸入業者はリーファー（冷蔵コンテナ）を使う。その価格差は実在し、同じ瓶が店によって値の違う理由でもある。",zh:"八月停在裝卸區的一個棧板，或一只未經冷藏便橫越赤道的貨櫃，會毀掉其上游的一切。有信譽的進口商使用冷藏櫃；價差是真實存在的，這也是同一款酒在不同店家價格不同的原因。"} },
          { title:{en:"Retail display",ja:"店頭の陳列",zh:"店頭陳列"}, jp:"店頭",
            meta:{en:"Visible, so check it",ja:"目に見える。確かめること",zh:"看得見，所以請檢查"},
            text:{en:"Bright light, warm rooms, and nama sake on an ordinary shelf. All three are visible from the door, which is why the shop is the easiest link to assess.",ja:"明るい光、暖かい室内、常温の棚に置かれた生酒。この三つは入口から見て取れる。店が最も判断しやすい環である理由である。",zh:"明亮的燈光、溫暖的室內，以及擺在常溫貨架上的生酒。這三者從門口就看得見，這正是店家最容易評估的一環。"} },
          { title:{en:"Your journey home",ja:"持ち帰る道中",zh:"帶回家的路上"}, jp:"持ち帰り",
            meta:{en:"Underrated",ja:"軽視されがち",zh:"常被低估"},
            text:{en:"Two hours in a hot car will do measurable damage to a nama. Buy sake last, ask for an ice pack if the shop offers one, and get it into the fridge when you get home rather than after dinner.",ja:"暑い車内での二時間は、生酒に測定できるほどの損傷を与える。酒は最後に買い、店に保冷剤があれば頼み、帰宅したら夕食のあとではなくすぐに冷蔵庫へ入れること。",zh:"在悶熱的車內待兩小時，會對生酒造成可測量的損傷。把酒留到最後買，若店家提供保冷劑就索取，回家後立刻放進冰箱，而不是等吃完飯再說。"} }
        ] },
        { t:"grid", cols:2, cells:[
          { h:{en:"Questions worth asking a shop",ja:"店に尋ねる価値のある問い",zh:"值得問店家的問題"},
            body:[{ t:"ul", plain:true, items:[
              { en:"Is this stored cold from the brewery?",ja:"蔵から冷蔵で来ていますか。",zh:"這是從酒藏一路冷藏過來的嗎？" },
              { en:"When did this arrive?",ja:"入荷はいつですか。",zh:"這批是什麼時候到的？" },
              { en:"Is this a nama? Does it need to stay cold?",ja:"これは生酒ですか。冷蔵が要りますか。",zh:"這是生酒嗎？需要保持冷藏嗎？" },
              { en:"What would you drink from this shelf this week?",ja:"この棚から、今週なら何を飲みますか。",zh:"這個貨架上，這禮拜你會喝哪一支？" }
            ] }] },
          { h:{en:"Signs a bottle has been mishandled",ja:"扱いが悪かった徴",zh:"曾被不當對待的徵象"},
            body:[{ t:"ul", plain:true, items:[
              { en:"Gold or brown colour in a sake that should be near-clear.",ja:"ほぼ無色のはずの酒に、金や褐の色。",zh:"本應近乎無色的酒卻呈金黃或褐色。" },
              { en:"A flat, cooked, cabbage-like smell (<em>hine-ka</em>).",ja:"平板で、煮えた菜のような匂い——ひね香。",zh:"平板、煮熟、類似甘藍的氣味——即老化臭。" },
              { en:"A bottling date more than a year old on a ginjō.",ja:"吟醸で、製造年月が一年以上前。",zh:"吟釀的製造年月已是一年多以前。" },
              { en:"Dust, faded label print, sun-bleached paper.",ja:"埃、褪せた印刷、日に焼けた紙。",zh:"積灰、印刷褪色、被日曬漂白的紙。" }
            ] }] }
        ] }
      ]
    },

{ t:"section", id:"reactions",
      title:{ en:"What actually goes wrong", ja:"実際に何が起きるのか", zh:"實際上出了什麼問題" }, jp:"劣化の化学",
      body:[
        { t:"p", text:{
          en:"Sake does not spoil in the way food spoils — at 15% alcohol nothing pathogenic grows in it, and an old bottle is not dangerous. What happens instead is that four separate chemical processes run at rates set by temperature, light and oxygen, and they change the drink into something the brewery did not intend. Knowing which of the four you are fighting tells you which precaution actually matters.",
          ja:"日本酒は、食品が腐るような仕方で腐るのではない。アルコール15%のなかで病原性のものは育たず、古い瓶が危険であることはない。代わりに起こるのは、温度と光と酸素によって速さの決まる四つの別々の化学過程であり、それらがこの飲み物を、蔵の意図しなかった何かへと変えていく。四つのうちどれと戦っているのかが分かれば、どの用心が実際に効くのかが分かる。",
          zh:"清酒不會像食物那樣腐壞——在 15% 酒精度下不會生長任何病原體，一支老酒也不危險。真正發生的是四種各自獨立的化學反應，其速率由溫度、光線與氧氣決定；它們把這種飲品變成酒藏並不打算做出來的東西。知道你正在對抗的是其中哪一種，就知道哪項防範措施真正有用。" } },

        { t:"table",
          cols:[{en:"Process",ja:"過程",zh:"過程"},{en:"Driven by",ja:"要因",zh:"驅動因素"},{en:"What you taste",ja:"味に現れるもの",zh:"嚐到什麼"},{en:"How to slow it",ja:"抑え方",zh:"如何減緩"}],
          rows:[
            [{en:"Ester hydrolysis",ja:"エステルの加水分解",zh:"酯類水解"},
             {en:"Time and heat",ja:"時間と熱",zh:"時間與熱"},
             {en:"The fruit goes. The apple and banana of a ginjō are esters in equilibrium with the acids and alcohols they came from, and that equilibrium shifts back with time. Nothing bad appears; the good thing simply leaves.",
              ja:"果実が消える。吟醸の林檎とバナナは、もとの酸とアルコールとの平衡にあるエステルであり、その平衡は時とともに戻ってゆく。悪いものが現れるのではない。よいものが去るだけである。",
              zh:"果香消失。吟釀的蘋果與香蕉香是與其來源的酸和醇處於平衡狀態的酯類，而這個平衡會隨時間逆轉。並沒有壞東西出現，只是好東西離開了。"},
             {en:"Cold, and drink it young. This is the reason a daiginjō has a short window and a junmai does not.",
              ja:"冷やし、若いうちに飲む。大吟醸の窓が短く、純米のそれが短くない理由である。",
              zh:"低溫，並趁年輕喝掉。這正是大吟釀的賞味窗口短、而純米不短的原因。"}],
            [{en:"Maillard browning",ja:"メイラード反応",zh:"梅納反應"},
             {en:"Heat, time, amino acid and sugar content",ja:"熱、時間、アミノ酸と糖の量",zh:"熱、時間、胺基酸與糖含量"},
             {en:"Colour deepens to straw, gold, then amber; flavour moves toward caramel, dried fruit, soy and nuts. In an aged sake this is the entire point; in a fresh junmai ginjō it is damage.",
              ja:"色は麦藁色から金、そして琥珀へ深まり、味はカラメル、乾いた果実、醤油、木の実へ向かう。熟成酒においてはこれこそが眼目であり、若い純米吟醸においては損傷である。",
              zh:"色澤由稻草色轉金、再轉琥珀；風味朝焦糖、果乾、醬油與堅果移動。在熟成酒中這正是全部重點；在一支新鮮的純米吟釀裡，這就是損害。"},
             {en:"Cold. The reaction rate roughly doubles for every ten degrees, so a bottle at 25 °C ages several times faster than one at 5 °C.",
              ja:"冷やす。反応速度は概ね十度ごとに倍になるから、25℃の瓶は5℃の瓶より数倍の速さで老いる。",
              zh:"低溫。反應速率大約每升高十度就加倍，因此 25 °C 下的酒瓶老化速度是 5 °C 下的數倍。"}],
            [{en:"Oxidation and hineka",ja:"酸化と老香",zh:"氧化與老香"},
             {en:"Oxygen, warmth, and sulphur precursors",ja:"酸素、温度、硫黄前駆体",zh:"氧氣、溫度與硫化物前驅物"},
             {en:"The characteristic stale note the industry calls <em>hineka</em>, in which dimethyl trisulfide is a key compound — perceptible at parts per billion and reading as boiled cabbage, drains or old newspaper. Distinct from pleasant maturation and universally regarded as a fault.",
              ja:"業界が老香と呼ぶ独特の劣化香であり、ジメチルトリスルフィドが鍵となる化合物である。十億分の一の単位で知覚され、茹でた葉物、排水、古新聞のように読まれる。好ましい熟成とは別物であり、あまねく欠点とされる。",
              zh:"業界稱為「老香」的特有陳味，其中二甲基三硫醚是關鍵化合物——在十億分之一的濃度就能被察覺，讀來像水煮青菜、排水口或舊報紙。它與令人愉快的熟成截然不同，被普遍視為缺陷。"},
             {en:"Cold, full bottles, minimal headspace, and short storage after opening.",
              ja:"冷やす。瓶は満たし、空気の層を減らし、開栓後は長く置かない。",
              zh:"低溫、把瓶裝滿、減少頂空、開瓶後不要久放。"}],
            [{en:"Light damage",ja:"日光臭",zh:"日光臭"},
             {en:"Ultraviolet and visible light, in hours",ja:"紫外線と可視光。数時間で",zh:"紫外線與可見光，數小時內"},
             {en:"The fastest of the four by a wide margin. Riboflavin in the sake absorbs light and drives reactions that produce sulphurous, burnt-rubber notes; a clear bottle in a sunny window can be noticeably damaged in an afternoon. This is why serious sake is sold in dark glass or wrapped in paper.",
              ja:"四つのうち群を抜いて速い。酒中のリボフラビンが光を吸収し、硫黄めいた、焦げたゴムのような香を生む反応を駆動する。日の当たる窓辺の透明な瓶は、ひと午後で目立って傷みうる。真面目な酒が濃色の瓶に詰められ、あるいは紙に巻かれている理由である。",
              zh:"四者之中快得最多。酒中的核黃素吸收光線，驅動產生硫味與燒焦橡膠氣息的反應；放在有陽光窗邊的透明瓶，一個下午就可能明顯受損。這正是認真的清酒要用深色瓶裝、或以紙包裹的原因。"},
             {en:"Darkness, absolutely. This one precaution is worth more than the other three combined for a bottle in a home.",
              ja:"何よりも暗さ。家庭の瓶にとって、この一つの用心は残る三つを合わせたよりも価値がある。",
              zh:"最重要的是避光。對家中的一支酒而言，這一項防範的價值勝過其他三項的總和。"}]
          ] },

        { t:"panel", title:{ en:"The one microbial risk", ja:"ただ一つの微生物のリスク", zh:"唯一的微生物風險" },
          body:[
            { t:"p", text:{
              en:"<em>Hiochi</em> bacteria are alcohol-tolerant lactobacilli, the only organisms that will grow happily in sake, and pasteurisation exists to kill them. A pasteurised bottle is effectively immune. An unpasteurised nama left warm is not: it can go cloudy, turn sharply sour and develop a buttery diacetyl note over days. It is not dangerous to drink and it is unmistakably unpleasant. This is the entire reason nama sake must be refrigerated and pasteurised sake need not be.",
              ja:"火落菌はアルコールに耐える乳酸菌であり、日本酒のなかで喜んで育つ唯一の生物である。火入れはこれを殺すために存在する。火入れした瓶は事実上これに侵されない。暖かいところに置かれた生酒はそうではない——数日のうちに濁り、鋭く酸敗し、バターのようなダイアセチルの香を帯びうる。飲んで危険ではないが、紛れもなく不快である。生酒が冷蔵を要し、火入れ酒が要さない理由は、まったくこれである。",
              zh:"火落菌是耐酒精的乳酸桿菌，也是唯一能在清酒中愉快生長的生物；火入（加熱殺菌）之所以存在，就是為了殺死它們。經火入的酒瓶實質上免疫；而放在溫暖處的未火入生酒則不然：它可能在數天內變濁、急遽酸敗，並發展出奶油般的雙乙醯氣味。喝了不危險，但明白無誤地令人不快。生酒必須冷藏、火入酒則不必，理由完全在此。" } }
          ] }
      ] },

    { t:"section", id:"after-opening",
      title:{ en:"How long an opened bottle lasts", ja:"開けた瓶はどれだけもつか", zh:"開瓶後能放多久" }, jp:"開栓後",
      body:[
        { t:"p", text:{
          en:"There is no single answer, because the rate depends on the style, the temperature and how much air is left in the bottle. The figures below assume the bottle is recapped and kept in a refrigerator, and they mark the point at which most drinkers would notice a change — not the point at which the sake becomes undrinkable, which is much later.",
          ja:"単一の答えはない。速さは酒質と温度、そして瓶に残る空気の量に依るからである。以下の数字は、栓をして冷蔵庫に置いた場合を前提とし、多くの飲み手が変化に気づく地点を示す。飲めなくなる地点ではない。それはずっと先である。",
          zh:"沒有單一答案，因為速率取決於酒質、溫度以及瓶中殘留多少空氣。以下數字假設酒已重新封蓋並置於冰箱，標示的是多數飲者會察覺到變化的時點——而不是變得不能喝的時點，那要晚得多。" } },

        { t:"table",
          cols:[{en:"Type",ja:"種類",zh:"種類"},{en:"Noticeably changed after",ja:"変化に気づくまで",zh:"多久後可察覺變化"},{en:"Notes",ja:"備考",zh:"備註"}],
          rows:[
            [{en:"Sparkling, bottle-fermented",ja:"瓶内二次発酵の発泡",zh:"瓶內二次發酵氣泡"},{en:"Hours to a day",ja:"数時間から一日",zh:"數小時至一天"},
             {en:"Once the pressure is gone it is gone. Drink it the day you open it.",ja:"圧が抜けたら戻らない。開けた日に飲むこと。",zh:"氣壓一旦散失就回不來了。開瓶當天喝完。"}],
            [{en:"Nama, unpasteurised",ja:"生酒",zh:"生酒"},{en:"2–4 days",ja:"二日から四日",zh:"2–4 天"},
             {en:"The enzymes are still active and the aromatics are the point. Some nama improve for a day and then decline sharply.",ja:"酵素はなお働き、香りこそが眼目である。一日は良くなり、そこから急に落ちる生酒もある。",zh:"酵素仍在作用，而香氣正是重點。有些生酒會先變好一天，然後急轉直下。"}],
            [{en:"Daiginjō and ginjō",ja:"大吟醸・吟醸",zh:"大吟釀與吟釀"},{en:"3–7 days",ja:"三日から七日",zh:"3–7 天"},
             {en:"You are losing esters. It will not be bad; it will be a less interesting version of itself.",ja:"失われているのはエステルである。悪くなるのではない。自らの、より面白くない版になるのである。",zh:"你失去的是酯類。它不會變壞，只會變成一個比較不有趣的自己。"}],
            [{en:"Junmai, pasteurised",ja:"火入れの純米",zh:"火入純米"},{en:"1–3 weeks",ja:"一週から三週",zh:"1–3 週"},
             {en:"Robust. Many junmai actually round out over the first few days after opening, which is worth testing deliberately.",ja:"頑健である。多くの純米は開栓後の数日でむしろ丸くなる。意識して試してみる値打ちがある。",zh:"很耐放。許多純米在開瓶後的最初幾天反而會變得更圓潤，值得刻意試試看。"}],
            [{en:"Honjōzō and futsūshu",ja:"本醸造・普通酒",zh:"本釀造與普通酒"},{en:"2–4 weeks",ja:"二週から四週",zh:"2–4 週"},
             {en:"The most forgiving category. This is the bottle to keep by the stove.",ja:"最も寛容な区分である。竈の傍らに置いておくのはこの瓶である。",zh:"最寬容的類別。放在爐邊備用的就是這一瓶。"}],
            [{en:"Koshu and aged sake",ja:"古酒・熟成酒",zh:"古酒與熟成酒"},{en:"Months",ja:"数か月",zh:"數月"},
             {en:"Already oxidised by design and remarkably stable. A half-bottle of ten-year koshu is still recognisably itself six months later.",ja:"設計上すでに酸化しており、驚くほど安定している。十年の古酒の半分は、半年後もそれと分かるままである。",zh:"依設計本就已氧化，穩定得驚人。一支喝了一半的十年古酒，半年後仍清楚地是它自己。"}]
          ] },

        { t:"grid", cols:2, cells:[
          { k:{ en:"Decant down", ja:"小瓶に移す", zh:"換小瓶" }, jp:"移し替え",
            v:{ en:"The single best trick", ja:"最良の一手", zh:"最有效的一招" },
            d:{ en:"Oxidation is proportional to the air in the bottle, so pouring the remainder of an 1.8-litre bottle into two clean 720 ml bottles, filled to the neck, roughly halves the rate. Keep a couple of empties for exactly this. Screw-cap mineral water bottles work; wash and air-dry them thoroughly.",
              ja:"酸化は瓶の中の空気に比例する。一升瓶の残りを、清潔な四合瓶二本に首まで満たして移せば、速さはおよそ半分になる。そのために空瓶を二本ほど取っておくとよい。栓のできる水の瓶で足りる。よく洗い、しっかり乾かすこと。",
              zh:"氧化與瓶中空氣量成正比，因此把一升瓶剩下的酒倒進兩支乾淨的四合瓶、裝到瓶頸，速率大約可減半。為此留幾支空瓶就行。旋蓋式礦泉水瓶也可以；務必洗淨並徹底晾乾。" } },
          { k:{ en:"Upright, always", ja:"必ず立てて", zh:"永遠直立" }, jp:"立てて保存",
            v:{ en:"Unlike wine", ja:"ワインとは逆", zh:"與葡萄酒相反" },
            d:{ en:"Sake bottles are stored standing. There is no cork to keep wet, and lying a bottle down increases the liquid's contact area with air and with the cap liner. The one place never to store sake is a refrigerator door, where it is warmed and shaken every time the door opens.",
              ja:"日本酒の瓶は立てて保存する。湿らせておくべきコルクはなく、寝かせれば液が空気と栓の内張りに触れる面積が増える。決して置いてはならない場所は冷蔵庫の扉であり、そこでは扉が開くたびに温められ、揺すられる。",
              zh:"清酒瓶要直立存放。沒有需要保持濕潤的軟木塞，而平放會增加酒液與空氣及瓶蓋內襯的接觸面積。絕不該存放清酒的地方是冰箱門，那裡每開一次門就被回溫並晃動一次。" } },
          { k:{ en:"Gas and vacuum", ja:"ガスと真空", zh:"充氣與抽真空" }, jp:"器具",
            v:{ en:"One works, one doesn't", ja:"一方は効き、一方は効かない", zh:"一個有效，一個沒用" },
            d:{ en:"An inert-gas spray (argon or nitrogen) does help, because it displaces the oxygen. A vacuum pump is much less useful: it removes some air but also pulls volatile aromatics out of the sake, which is the opposite of what you want on a ginjō.",
              ja:"不活性ガス（アルゴンや窒素）の噴射は効く。酸素を追い出すからである。真空ポンプははるかに役に立たない。空気をいくらか抜くと同時に、揮発する香りも引き出してしまう。吟醸において、それは望むところの正反対である。",
              zh:"惰性氣體噴罐（氬或氮）確實有幫助，因為它會排開氧氣。真空幫浦則用處小得多：它抽走一些空氣，同時也把揮發性香氣一併抽出——對吟釀而言，這恰恰是你不想要的。" } },
          { k:{ en:"Freezing", ja:"冷凍", zh:"冷凍" }, jp:"冷凍",
            v:{ en:"Works, with care", ja:"できる。ただし注意して", zh:"可行，但要小心" },
            d:{ en:"Sake freezes below about −7 °C, and a frozen bottle will crack. But a domestic freezer at −18 °C will hold a plastic-bottled portion indefinitely and it thaws well; some breweries sell frozen nama commercially for exactly this reason. Slush from a partly frozen bottle — <em>mizore-zake</em> — is also a summer serving style in its own right.",
              ja:"日本酒はおよそマイナス7℃以下で凍り、凍った瓶は割れる。しかしマイナス18℃の家庭用冷凍庫は、樹脂の容器に小分けした酒を無期限に保ち、解凍もよく効く。まさにこの理由で凍らせた生酒を商品として売る蔵もある。半ば凍った瓶から出るシャーベット——みぞれ酒——は、それ自体が夏の供し方でもある。",
              zh:"清酒約在 −7 °C 以下結冰，而結冰的瓶子會裂開。但 −18 °C 的家用冷凍庫可以無限期保存分裝在塑膠容器中的酒，解凍效果也很好；有些酒藏正是基於這個理由把冷凍生酒當商品販售。而半結冰瓶中倒出的冰沙——「霙酒」——本身也是一種夏日的供飲方式。" } }
        ] },

        { t:"note", text:{
          en:"A tired bottle is not a wasted bottle. Sake that has lost its aroma is still perfectly good warmed — heat masks a great deal and rebuilds body — and it is better cooking sake than anything sold as cooking sake. See <a href=\"cocktails.html#kitchen-jobs\">Mixing &amp; Cooking</a>. Throw away only what smells of drains or burnt rubber, which is light damage and cannot be rescued.",
          ja:"疲れた瓶は無駄になった瓶ではない。香りを失った酒は燗にすれば十分によく——熱は多くを覆い、酒躯を建て直す——そして料理酒として売られるどんなものよりよい料理酒である。<a href=\"cocktails.html#kitchen-jobs\">割る・料理する</a>を参照。捨てるべきは、排水や焦げたゴムの匂いのするものだけである。それは光による損傷であり、救えない。",
          zh:"一支疲乏的酒不是浪費掉的酒。失去香氣的清酒溫熱後依然很好喝——加熱能掩蓋許多缺陷並重建酒體——而且它比任何標榜為料理酒的東西都更好用。見<a href=\"cocktails.html#kitchen-jobs\">調飲與入菜</a>。只有聞起來像排水口或燒焦橡膠的才該倒掉，那是光害，無法挽救。" } }
      ] },

    { t:"related", items:[
      { href:"packaging.html", why:{ en:"What the container is doing while you wait.", ja:"待つあいだ、容器がなしていること。", zh:"在你等待的期間，容器正在做什麼。" } },
      { href:"aging.html", why:{ en:"When waiting is the point rather than the risk.", ja:"待つことが危険ではなく目的であるとき。", zh:"當等待是目的、而不是風險的時候。" } },
      { href:"faults.html", why:{ en:"What goes wrong, and how fast.", ja:"何が損なわれ、どれだけ速く進むか。", zh:"會出什麼問題，以及有多快。" } },
      { href:"label.html", why:{ en:"The date on the back, and what it is telling you.", ja:"裏の日付が告げていること。", zh:"背標上的日期在告訴你什麼。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- range */
SAKE.pages["range"] = {
  kicker: { en: "Drinking · 07", ja: "飲む · 07", zh: "品飲 · 07" },
  title:  { en: "Reading a Brewery's Range", ja: "蔵の品揃えを読む", zh: "讀懂一家酒藏的產品線" },
  jp: "品揃え",
  lede: {
    en: "A brewery you have never heard of will have between six and thirty products, and they are not a list — they are a structure, with two axes. One is the designation ladder everyone already knows. The other is the release type: whether a bottle is on the shelf every week of the year, only for one season, only once, or only in shops the brewery has a relationship with. Almost nobody explains the second axis, and it is the one that decides what is actually available to you and what a price means. This page reads a range the way a buyer does.",
    ja: "聞いたこともない蔵にも、六から三十の品がある。そしてそれは一覧ではなく、二つの軸を持つ構えである。一つは誰もが知る特定名称の梯子である。もう一つは出荷の種類である。その瓶が年の毎週棚にあるのか、一つの季にだけあるのか、一度きりなのか、蔵と関わりのある店にだけあるのか。第二の軸を説く者はほとんどいない。そしてそれこそが、実際にあなたが手に入れうるものと、値の意味とを決める軸である。この頁は、買い手が読むように品揃えを読む。",
    zh: "一家你從未聽過的酒藏，會有六到三十款產品；而它們不是一份清單，是一個結構，有兩條軸。一條是人人都已經知道的特定名稱階梯。另一條是出貨類型：這瓶酒是全年每週都在架上、只在某一季出現、只出一次，還是只出現在與酒藏有往來的店裡。幾乎沒有人解釋第二條軸——而它正是決定「你實際上能買到什麼」以及「價格代表什麼意思」的那一條。本頁用買家的方式來讀一條產品線。"
  },
  body: [

    { t:"section", id:"grid",
      title:{ en:"The shape of a range", ja:"品揃えの形", zh:"產品線的形狀" }, jp:"構え",
      body:[
        { t:"figure",
          caption:{
            en:"A typical mid-sized brewery's range on its two real axes. The size of each square says how usual it is to find a product in that cell, not how much of it is made. Read the diagonal: volume lives at the bottom left, in the standing range of the cheaper designations, and attention lives at the top right, in one-off and contracted-retailer bottlings of the expensive ones. A brewery's economics and its reputation are made in two different corners of the same grid, which is most of what makes the business difficult.",
            ja:"中ほどの大きさの蔵の品揃えを、その実の二軸に置いたもの。四角の大きさは、その升に品があることがどれほど普通かを述べるのであって、どれだけ造られているかではない。対角線を読まれたい。量は左下、安い特定名称の定番にある。注目は右上、高いものの一度きりと特約店向けの詰めにある。蔵の勘定とその名声は、同じ格子の異なる二つの隅で作られる。この商いを難しくしているものの多くは、そこにある。",
            zh:"一家中型酒藏的產品線，放在它真正的兩條軸上。每個方塊的大小表示「在那一格裡找到產品有多常見」，而不是產量多少。請讀對角線：產量住在左下角，也就是較便宜特定名稱的常態品；注目住在右上角，也就是昂貴品項的單次出貨與特約店專供。一家酒藏的帳與它的名聲，是在同一張格子的兩個不同角落做出來的——這門生意之所以困難，泰半就在這裡。" },
          svg: function (lang, L) {
            var W = 760, H = 400, GX = 272, CW = 114, GY = 92, RH = 42;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var colsN = [
              { jp:"定番", n:{ en:"standing", ja:"", zh:"常態" } },
              { jp:"季節", n:{ en:"seasonal", ja:"", zh:"季節" } },
              { jp:"限定", n:{ en:"one-off", ja:"", zh:"限定" } },
              { jp:"特約店", n:{ en:"by contract", ja:"", zh:"特約店" } }
            ];
            var rowsN = [
              { jp:"純米大吟醸", v:[2,1,3,3] },
              { jp:"純米吟醸",   v:[3,3,3,3] },
              { jp:"純米",       v:[3,2,2,1] },
              { jp:"本醸造",     v:[3,1,1,0] },
              { jp:"普通酒",     v:[3,0,0,0] }
            ];
            /* the two regions, drawn first so everything sits on top */
            s += '<rect x="' + GX + '" y="' + (GY + 3 * RH) + '" width="' + CW + '" height="' + (2 * RH) + '" fill="#F0EDE4"/>';
            s += '<rect x="' + (GX + 2 * CW) + '" y="' + GY + '" width="' + (2 * CW) + '" height="' + (2 * RH) + '" fill="#F0EDE4"/>';
            var i, j;
            /* grid */
            for (i = 0; i <= 4; i++)
              s += '<line x1="' + (GX + i * CW) + '" y1="' + GY + '" x2="' + (GX + i * CW) + '" y2="' + (GY + 5 * RH) + '" stroke="#E7DFD2"/>';
            for (j = 0; j <= 5; j++)
              s += '<line x1="' + GX + '" y1="' + (GY + j * RH) + '" x2="' + (GX + 4 * CW) + '" y2="' + (GY + j * RH) + '" stroke="#E7DFD2"/>';
            /* headers */
            for (i = 0; i < 4; i++) {
              var hx = GX + i * CW + CW / 2;
              s += '<text x="' + hx + '" y="' + (GY - 22) + '" text-anchor="middle" font-size="12" fill="#201E1B">' + colsN[i].jp + '</text>';
              var g = L(colsN[i].n);
              if (g && g !== colsN[i].jp)
                s += '<text x="' + hx + '" y="' + (GY - 9) + '" text-anchor="middle" font-size="9" letter-spacing=".08em" fill="#ADA79E">' + g + '</text>';
            }
            /* rows */
            for (j = 0; j < 5; j++) {
              var ry = GY + j * RH + RH / 2;
              s += '<text x="' + (GX - 14) + '" y="' + (ry + 4) + '" text-anchor="end" font-size="12" fill="#201E1B">' + rowsN[j].jp + '</text>';
              for (i = 0; i < 4; i++) {
                var p = rowsN[j].v[i];
                if (!p) continue;
                var sd = 8 + p * 6, cxx = GX + i * CW + CW / 2;
                s += '<rect x="' + (cxx - sd / 2) + '" y="' + (ry - sd / 2) + '" width="' + sd + '" height="' + sd + '" fill="#C6BCA6"/>';
              }
            }
            /* region labels */
            s += '<text x="' + (GX + CW / 2) + '" y="' + (GY + 5 * RH + 20) + '" text-anchor="middle" font-size="9.5" fill="#7C6B52">' +
                 (lang === "ja" ? "量はここ" : lang === "zh" ? "產量在這裡" : "the volume is here") + '</text>';
            s += '<text x="' + (GX + 3 * CW) + '" y="' + (GY - 40) + '" text-anchor="middle" font-size="9.5" fill="#7C6B52">' +
                 (lang === "ja" ? "注目はここ" : lang === "zh" ? "注目在這裡" : "the attention is here") + '</text>';
            /* legend */
            var lv = [1, 2, 3], lx = GX, LY = 348;
            s += '<text x="' + (GX - 14) + '" y="' + (LY + 17) + '" text-anchor="end" font-size="9" letter-spacing=".08em" fill="#ADA79E">' +
                 (lang === "ja" ? "普通さ" : lang === "zh" ? "常見程度" : "HOW USUAL") + '</text>';
            for (i = 0; i < lv.length; i++) {
              var ls = 8 + lv[i] * 6;
              s += '<rect x="' + (lx + i * 36) + '" y="' + (LY + (26 - ls) / 2) + '" width="' + ls + '" height="' + ls + '" fill="#C6BCA6"/>';
            }
            s += '<text x="' + (lx + 3 * 36 + 4) + '" y="' + (LY + 17) + '" font-size="9" fill="#ADA79E">' +
                 (lang === "ja" ? "稀 → ほぼ必ず" : lang === "zh" ? "罕見 → 幾乎必有" : "rare → almost always") + '</text>';
            s += '<text x="24" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "これは目安の図であり、測った数ではない。蔵により、とくに小さな蔵では、下の二段がまったくないことがある。"
                  : lang === "zh" ? "這是示意圖，不是量測數據。因藏而異；特別是小型酒藏，下面兩列可能完全不存在。"
                  : "This is a qualitative diagram, not measured data. Ranges vary, and in a small brewery the bottom two rows may be absent altogether.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The bottom-left corner is where a brewery survives and the top-right is where it is talked about, and the two corners have almost no customers in common. That is why a brewery whose name you know from a magazine may have most of its tanks committed to a futsūshu you will never see outside its own prefecture, and why a shop that stocks only the top-right corner of three breweries is showing you a very partial picture of any of them.",
          ja:"左下の隅は蔵が生き延びる場所であり、右上は語られる場所である。そして二つの隅は、客をほとんど共にしない。雑誌で名を知った蔵が、その槽の多くを、県の外では見ることのない普通酒に充てていることがあるのは、そのためである。そして三つの蔵の右上の隅だけを置く店が、そのいずれについても、きわめて偏った絵を見せているのも、そのためである。",
          zh:"左下角是一家酒藏賴以存活的地方，右上角是它被談論的地方，而這兩個角落幾乎沒有共同的客人。這就是為什麼一家你從雜誌上得知其名的酒藏，可能把大部分的槽都投在一款你在它自己的縣以外永遠看不到的普通酒上；也是為什麼一家只進三家酒藏右上角產品的店，對其中任何一家所呈現的，都是一幅極為片面的圖像。" } }
      ] },

    { t:"section", id:"teiban",
      title:{ en:"The standing range", ja:"定番", zh:"常態品" }, jp:"定番",
      body:[
        { t:"p", text:{
          en:"<em>Teiban</em> is the part of the range that is always there: the same product, brewed to the same specification, available every month, priced to be bought without thinking. It is the least glamorous thing a brewery makes and by a wide margin the most informative, for three reasons.",
          ja:"定番は、つねにそこにある部分である。同じ品を、同じ仕様で醸し、いずれの月にもあり、考えずに買える値をつける。蔵の作るもののうち最も華のないものであり、そして大きく引き離して最も多くを語るものである。理由は三つある。",
          zh:"「定番」是產品線裡永遠都在的那一部分：同樣的產品、同樣的規格釀造、每個月都買得到、定價到讓人不必多想就能買。它是一家酒藏所做的東西裡最不華麗的，也大幅領先地是資訊量最大的。理由有三個。" } },
        { t:"ol", items:[
          { en: "<strong>It cannot be a good year.</strong> A one-off release can be the tank that happened to come out beautifully. A standing product has to be the same in a bad rice year as in a good one, which means the brewery has to be able to steer it — and steering is the whole skill.",
            ja: "<strong>それは当たり年ではありえない。</strong>一度きりの出荷は、たまたま美しく上がった槽でありうる。定番の品は、米の悪い年にも良い年にも同じでなければならず、それは蔵がそれを操れねばならないということである。そして操ることこそが、技のすべてである。",
            zh: "<strong>它不可能只是「剛好那年好」。</strong>一次性出貨可能就是剛好釀得漂亮的那一槽。而常態品在米欠收的年份必須和豐收的年份一樣——這意味著酒藏必須能夠掌舵，而掌舵正是全部的技術所在。" },
          { en: "<strong>It is priced for repeat purchase.</strong> Nobody buys a standing junmai twice for the story. If it sells, it sells because someone drank it and bought it again, which is a harder test than any award.",
            ja: "<strong>それは再び買われるための値である。</strong>定番の純米を、物語のために二度買う者はいない。売れているならば、誰かが飲み、また買ったからである。それはいかなる賞よりも厳しい試しである。",
            zh: "<strong>它的定價是為了回購。</strong>沒有人會為了故事而買第二次常態純米。如果它賣得動，是因為有人喝了、然後又買了一次——那是比任何獎項都更嚴苛的檢驗。" },
          { en: "<strong>It is what the brewery actually believes.</strong> A daiginjō is an argument about what the house can do at its limit. The standing junmai is an argument about what it thinks sake should taste like on a Tuesday, which is a much more revealing thing to have an opinion about.",
            ja: "<strong>それは蔵が実際に信じていることである。</strong>大吟醸は、その家が極みにおいて何をなしうるかについての論である。定番の純米は、火曜日の酒はどう味わうべきかについての論であり、意見を持つ対象としては、はるかに多くを明かす。",
            zh: "<strong>它才是酒藏真正相信的東西。</strong>大吟釀是一段關於「這家在極限能做到什麼」的論證。常態純米則是一段關於「星期二的酒該是什麼味道」的論證——而對後者有意見，遠遠更能暴露一個人的底牌。" }
        ] },
        { t:"note", title:{ en:"The practical consequence", ja:"実際上の帰結", zh:"實務上的結果" },
          text:{
            en:"If you are trying a brewery for the first time and can buy one bottle, buy the standing junmai, not the flagship. It costs a third as much, it is representative rather than exceptional, and if you like it everything else in the range will be built on the same foundation. The flagship tells you what the brewery can do on its best day with its best rice, which is interesting and almost useless as a guide to the other eleven bottles.",
            ja:"ある蔵を初めて試し、一本しか買えぬのであれば、旗艦ではなく定番の純米を買われたい。値は三分の一であり、例外ではなく代表であり、そしてそれを好むならば、品揃えの他のすべては同じ土台の上に建っている。旗艦が告げるのは、最良の日に最良の米で蔵が何をなしうるかであって、それは面白く、そして残る十一本の道しるべとしてはほとんど役に立たない。",
            zh:"如果你第一次嘗試一家酒藏、而且只能買一瓶，請買常態純米，不要買旗艦。它的價格只有三分之一，它是代表性的而非例外性的；而如果你喜歡它，這條產品線上其餘的一切都建立在同樣的基礎上。旗艦告訴你的是這家酒藏在最好的日子、用最好的米能做到什麼——那很有趣，但作為其餘十一瓶的指南，幾乎毫無用處。" } }
      ] },

    { t:"section", id:"seasons",
      title:{ en:"The shelf year", ja:"棚の一年", zh:"貨架上的一年" }, jp:"季節品",
      body:[
        { t:"figure",
          caption:{
            en:"When each seasonal name is actually on the shelf. The important thing is the arrow at the bottom: the autumn release was pressed in the previous winter and has been sitting since, so the shelf year and the brewing year are offset by most of a year. Only the standing range is continuous. Everything above it appears, sells out and is gone, which is why a bottle you liked in March may be genuinely unobtainable in July rather than merely out of stock.",
            ja:"季節の名がそれぞれ、実際にいつ棚にあるか。大事なのは下の矢である。秋の出荷は前の冬に搾られ、以後ずっと寝ていた。棚の一年と造りの一年は、年のほとんどの分だけずれている。続いているのは定番だけである。その上にあるものはみな、現れ、売り切れ、消える。三月に気に入った瓶が七月には品切れではなく本当に手に入らないのは、そのためである。",
            zh:"每一個季節名稱實際上在貨架上出現的時間。重點是底下那支箭頭：秋天出貨的酒是在前一個冬天壓榨的，之後就一直靜置著——所以貨架上的一年與釀造的一年，錯開了將近一整年。唯一連續的只有常態品。它上面的一切都會出現、賣完、消失；這就是為什麼你三月喜歡的那瓶酒，到了七月可能是真的買不到，而不只是缺貨。" },
          svg: function (lang, L) {
            var W = 760, H = 344, MX = 158, MW = 570;
            function mx(m) { return MX + (m - 1) / 12 * MW; }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i;
            for (i = 1; i <= 13; i++)
              s += '<line x1="' + mx(i) + '" y1="46" x2="' + mx(i) + '" y2="254" stroke="#F5F3ED"/>';
            var bands = [
              { y:60,  a:11.4, b:14, jp:"しぼりたて・新酒", n:{ en:"straight from the press", ja:"", zh:"剛榨出來的新酒" } },
              { y:96,  a:2.2,  b:4.8, jp:"春酒", n:{ en:"often lightly cloudy, often nama", ja:"", zh:"常帶薄濁、常為生酒" } },
              { y:132, a:5,    b:8.8, jp:"夏酒", n:{ en:"lighter, cooler, sometimes weaker", ja:"", zh:"更輕、更涼，有時度數更低" } },
              { y:168, a:8.8,  b:11.6, jp:"ひやおろし・秋あがり", n:{ en:"one summer of rest, one pasteurisation", ja:"", zh:"靜置一夏，只火入一次" } }
            ];
            for (i = 0; i < bands.length; i++) {
              var bd = bands[i], x1 = mx(bd.a), x2 = mx(Math.min(bd.b, 13));
              s += '<rect x="' + x1 + '" y="' + bd.y + '" width="' + (x2 - x1) + '" height="17" fill="#E4DCCC"/>';
              /* a winter band wraps the year end */
              if (bd.b > 13) s += '<rect x="' + mx(1) + '" y="' + bd.y + '" width="' + (mx(bd.b - 12) - mx(1)) + '" height="17" fill="#E4DCCC"/>';
              s += '<text x="' + (MX - 12) + '" y="' + (bd.y + 12) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + bd.jp + '</text>';
              var g = L(bd.n);
              /* the gloss sits under the row rather than beside the band, so a
                 band that reaches December cannot push it off the page. */
              if (g) s += '<text x="' + (mx(1) + 2) + '" y="' + (bd.y + 30) + '" font-size="9" fill="#8B857C">' + g + '</text>';
            }
            /* the standing range */
            s += '<rect x="' + mx(1) + '" y="220" width="' + MW + '" height="17" fill="#EFEBE1" stroke="#DED8CB"/>';
            s += '<text x="' + (MX - 12) + '" y="232" text-anchor="end" font-size="11.5" fill="#201E1B">定番</text>';
            s += '<text x="' + (mx(1) + 8) + '" y="232" font-size="9" fill="#8B857C">' +
                 (lang === "ja" ? "途切れない" : lang === "zh" ? "不間斷" : "never off the shelf") + '</text>';
            /* axis */
            s += '<line x1="' + mx(1) + '" y1="254" x2="' + mx(13) + '" y2="254" stroke="#CDC6B9"/>';
            for (i = 1; i <= 12; i++)
              s += '<text x="' + ((mx(i) + mx(i + 1)) / 2) + '" y="270" text-anchor="middle" font-size="9.5" fill="#8B857C">' + i + '</text>';
            /* the offset arrow */
            s += '<line x1="' + mx(1.6) + '" y1="300" x2="' + mx(9.4) + '" y2="300" stroke="#A08F73"/>';
            s += '<path d="M' + (mx(9.4) - 7) + ' 296 L' + mx(9.4) + ' 300 L' + (mx(9.4) - 7) + ' 304 Z" fill="#A08F73"/>';
            s += '<line x1="' + mx(1.6) + '" y1="294" x2="' + mx(1.6) + '" y2="306" stroke="#A08F73"/>';
            s += '<text x="' + ((mx(1.6) + mx(9.4)) / 2) + '" y="292" text-anchor="middle" font-size="9.5" fill="#7C6B52">' +
                 (lang === "ja" ? "冬に搾り、秋に出す——同じ酒である"
                  : lang === "zh" ? "冬天壓榨，秋天出貨——是同一支酒"
                  : "pressed in winter, shipped in autumn — the same sake") + '</text>';
            s += '<text x="24" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "月は暦の月であり、酒造年度ではない。境は蔵と地により一月ほど動く。"
                  : lang === "zh" ? "月份是曆月，不是酒造年度。界線因藏、因地而有一個月左右的移動。"
                  : "Months are calendar months, not the brewing year. The boundaries move by about a month from brewery to brewery and north to south.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Seasonal releases are the part of a range most likely to be misread abroad, because by the time a shipment has crossed an ocean and cleared an importer the season on the label is the wrong one. A <em>natsuzake</em> on a shelf in December is not a fault and not a fake; it is a logistics fact, and it does mean the bottle has had six months more than the brewery intended. The same shipment lag is why an autumn release abroad is often better than the same bottle at home: it has had exactly the rest it was designed for, and then some.",
          ja:"季節の出荷は、国の外で最も読み違えられやすい部分である。積荷が海を渡り輸入者を抜ける頃には、札の上の季はもう違う季だからである。十二月の棚の夏酒は欠点でも偽りでもない。それは物流の事実であり、そしてその瓶が蔵の意図した以上に半年を経たということでもある。同じ積荷の遅れゆえに、国の外の秋の出荷は、同じ瓶の国内のものより良いことがしばしばある。設計された休みをちょうど得て、さらにいくらかを得ているからである。",
          zh:"季節出貨是一條產品線裡最容易在海外被誤讀的部分，因為等到一批貨跨過海洋、通過進口商時，酒標上的季節早已不是當下的季節。十二月貨架上的夏酒不是缺陷也不是假貨；那是物流的事實，而且確實意味著這瓶酒比酒藏設想的多放了六個月。也正因為同樣的運輸時差，海外的秋季出貨往往比同一支酒在日本國內更好喝：它剛好得到了被設計好的那段靜置，還多了一些。" } }
      ] },

    { t:"section", id:"limited",
      title:{ en:"What the limited bottlings actually change", ja:"限定の詰めが実際に変えるもの", zh:"限定裝瓶實際上改變了什麼" }, jp:"限定",
      body:[
        { t:"p", text:{
          en:"The third column of the grid is where the modifier words live, and they fall into two groups that look identical on a label: the ones that name a real difference in how the sake was handled, and the ones that name scarcity. Both raise the price. Only one of them changes the liquid.",
          ja:"格子の第三の列は、修飾の語の住む場所である。それらは、札の上では見分けのつかぬ二つの組に分かれる。酒がいかに扱われたかの実の違いを名指すものと、希少さを名指すものとである。いずれも値を上げる。液を変えるのは、そのうち一方だけである。",
          zh:"格子的第三欄是那些修飾詞居住的地方，而它們分成在酒標上看起來一模一樣的兩組：一組指稱的是這支酒在處理方式上的真實差異，另一組指稱的是稀少。兩組都會抬高價格。但只有一組會改變瓶子裡的液體。" } },
        { t:"defs", items:[
          { term:{ en:"Nakadori · nakagumi", ja:"中取り・中汲み", zh:"中取・中汲" }, jp:"中取り",
            def:{ en:"Real. Only the middle third of the pressing is bottled, leaving the first rush and the hard-pressed tail out. It is a genuine selection and it costs the brewery the other two thirds of the tank, which have to be sold as something else. See <a href=\"pressing.html\">Pressing &amp; Finishing</a>.",
              ja:"実である。搾りの真ん中の三分の一のみを詰め、初めの走りと強く搾った末を外す。それは本当の選りであり、蔵にとっては槽の残る三分の二の代を払う。それらは別のものとして売られねばならない。<a href=\"pressing.html\">上槽と調整</a>を見られたい。",
              zh:"真的。只裝壓榨過程中間三分之一的部分，捨去最初衝出來的與最後硬壓出來的。這是一次真正的挑選，代價是酒藏得把槽裡其餘三分之二當成別的東西賣掉。請見<a href=\"pressing.html\">上槽與調整</a>。" } },
          { term:{ en:"Jikagumi", ja:"直汲み", zh:"直汲" }, jp:"直汲み",
            def:{ en:"Real. Bottled straight off the press without settling or filtering, so the dissolved carbon dioxide from fermentation is still in it. The difference is immediate and physical: the sake is faintly spritzy for a few weeks and then is not. This is the one modifier whose effect has an expiry date.",
              ja:"実である。澱を引かず濾さず、搾り口からそのまま詰める。発酵の炭酸がまだ溶けている。違いは即座で物としてのものである。その酒は数週のあいだ微かに弾け、そののち弾けなくなる。効き目に期限のある、唯一の修飾である。",
              zh:"真的。直接從壓榨口裝瓶，不靜置、不過濾，所以發酵產生的二氧化碳還留在裡面。差別是立即而物理性的：這支酒會微微帶氣幾個星期，然後就不帶了。這是唯一一個效果有期限的修飾詞。" } },
          { term:{ en:"Muroka nama genshu", ja:"無濾過生原酒", zh:"無濾過生原酒" }, jp:"無濾過生原酒",
            def:{ en:"Real, three times over: no carbon filtration, no pasteurisation, no dilution. It is also three separate demands on the supply chain, since the bottle now has to stay cold from the brewery to your hand. The style is concentrated and loud, and it is the reason the cold-chain shops in <a href=\"storage.html\">Buying &amp; Storage</a> exist.",
              ja:"実であり、しかも三重に実である。炭素の濾過をせず、火入れをせず、割水をしない。同時にそれは、流通への三つの別々の求めでもある。瓶は蔵からあなたの手まで冷えていなければならない。この様式は濃く、声が大きい。<a href=\"storage.html\">買うことと蔵うこと</a>にある冷たい鎖の店が存在する理由である。",
              zh:"真的，而且是三重的真：不做活性碳過濾、不火入、不加水稀釋。同時它也是對供應鏈的三個獨立要求，因為這瓶酒從此必須從酒藏一路冷到你手上。這個風格濃縮而響亮，也是<a href=\"storage.html\">採買與保存</a>裡那些冷鏈店家存在的原因。" } },
          { term:{ en:"Tobin-gakoi · tobin-dori", ja:"斗瓶囲い・斗瓶取り", zh:"斗瓶圍・斗瓶取" }, jp:"斗瓶",
            def:{ en:"Real, and rare. The free-run drops from a bag-hung pressing are caught in eighteen-litre glass jars — <em>tobin</em> — and each jar is tasted and kept or blended separately. This is how competition sake is made, and a brewery that sells it is selling you the same lot it would have entered. Expect a price that reflects the labour rather than the volume.",
              ja:"実であり、稀である。袋吊りの搾りから落ちる雫を、十八リットルの硝子の瓶——斗瓶——に受け、瓶ごとに利いて、残すか混ぜるかを別々に決める。鑑評会の酒はこうして造られる。それを売る蔵は、出品したであろうものと同じ仕込を売っている。量ではなく手間を映した値を見込まれたい。",
              zh:"真的，而且罕見。袋吊壓榨滴下的自流酒被收進十八公升的玻璃瓶——斗瓶——裡，每一瓶分別品評，再決定留下或混合。鑑評會用的酒就是這樣做出來的；會販售它的酒藏，賣給你的就是它本來要送去參賽的那一批。價格反映的是人工，不是產量，請有心理準備。" } },
          { term:{ en:"Tanitsu tank · lot number", ja:"単一タンク・仕込番号", zh:"單一槽・仕込編號" }, jp:"単一タンク",
            def:{ en:"Half real. Naming the tank is a transparency claim, not a quality claim: it says this bottle was not blended, which is a fact about the process and says nothing about whether the unblended tank is better. Blending exists to make a range consistent, and consistency is a skill. A lot number is most useful as a way to buy the same thing twice.",
              ja:"半ば実である。槽に名を与えるのは透明さの主張であって、質の主張ではない。この瓶は混ぜられていないと述べるのであり、それは工程についての事実であって、混ぜられていない槽のほうが良いかについては何も述べない。調合は品揃えを揃えるためにあり、揃えることは技である。仕込番号が最も役立つのは、同じものを二度買う道としてである。",
              zh:"一半是真的。標出槽號是一項透明度主張，不是品質主張：它說的是「這瓶沒有經過調合」，那是關於製程的事實，卻完全沒說沒調合的那一槽就比較好。調合的存在是為了讓一條產品線保持一致，而一致本身就是一門技術。仕込編號最有用的地方，是讓你能把同樣的東西再買一次。" } },
          { term:{ en:"“Limited to N bottles”", ja:"「限定N本」", zh:"「限定 N 瓶」" }, jp:"限定本数",
            def:{ en:"Not real, in the sense that matters. Every tank is limited to some number of bottles; printing the number turns an ordinary constraint into a claim. It tells you about demand management, not about the sake. This is not dishonest — scarcity is a real thing to communicate — but it belongs in a different column of your reasoning from the four above.",
              ja:"大事な意味においては、実ではない。いかなる槽も、ある本数に限られている。その数を刷ることは、ありふれた制約を主張へ変える。それが告げるのは需要の捌き方であって、酒についてではない。不誠実ではない——希少さは伝えるに足る実のことである——が、あなたの考えのなかでは、上の四つとは別の欄に属する。",
              zh:"在要緊的意義上，不是真的。每一槽酒都限於某個瓶數；把那個數字印出來，是把一個尋常的限制變成一項主張。它告訴你的是需求管理，不是那支酒。這並不算不誠實——稀少確實是值得溝通的真實情況——但在你的思考裡，它屬於與上面四項不同的一欄。" } }
        ] }
      ] },

    { t:"section", id:"channel",
      title:{ en:"The fourth column: bottles you cannot simply buy", ja:"第四の列——ただ買うことのできぬ瓶", zh:"第四欄：不是想買就買得到的酒" }, jp:"特約店",
      body:[
        { t:"p", text:{
          en:"Some products are made available only through <em>tokuyakuten</em> — shops the brewery has an explicit agreement with. The arrangement is old, it is not a marketing device, and it exists because of a problem this whole site keeps running into: a brewery can control everything about a bottle until the moment it leaves, and nothing about it afterwards.",
          ja:"いくつかの品は特約店——蔵が明らかな取り決めを結んだ店——を通じてのみ供される。この取り決めは古く、売りの仕掛けではない。それが存在するのは、このサイトが繰り返し突き当たる問題ゆえである。蔵は、瓶が出てゆく瞬間までそのすべてを操りうるが、そののちは何一つ操りえない。",
          zh:"有些產品只透過「特約店」——與酒藏訂有明確協議的店家——供應。這套安排很古老，不是行銷手段；它之所以存在，是因為這整個網站一再撞上的同一個問題：一家酒藏能掌控一瓶酒的一切，直到它離開的那一刻為止；之後就什麼都掌控不了。" } },
        { t:"compare", cols:2, items:[
          { h:{ en:"What the arrangement guarantees", ja:"この取り決めが保証するもの", zh:"這套安排保證了什麼" }, jp:"得るもの",
            body:[ { t:"ul", items:[
              { en:"Refrigerated storage, which for a nama product is the whole ball game.", ja:"冷蔵での貯蔵。生の品にとってはそれがすべてである。", zh:"冷藏保存；對生酒產品而言，那就是一切。" },
              { en:"Stock that turns, so nothing sits for two years under a fluorescent tube.", ja:"回る在庫。蛍光灯の下で二年寝るものがない。", zh:"會周轉的庫存，不會有東西在日光燈下躺兩年。" },
              { en:"A chain with no unknown links: brewery to shop, with nobody in between.", ja:"知れぬ環のない鎖。蔵から店まで、あいだに誰もいない。", zh:"一條沒有未知環節的鏈：從酒藏到店家，中間沒有別人。" },
              { en:"Someone in the shop who has met the brewer and can tell you what changed this year.", ja:"造り手に会ったことのある者が店にいて、今年何が変わったかを話せる。", zh:"店裡有見過釀造者的人，能告訴你今年有什麼改變。" }
            ] } ] },
          { h:{ en:"What it does not", ja:"保証しないもの", zh:"它沒有保證什麼" }, jp:"得ぬもの",
            body:[ { t:"ul", items:[
              { en:"That the sake is better than the brewery's open-market range. Often it is the same sake in a different cap.", ja:"その酒が、一般に出る品揃えより良いということ。しばしば同じ酒が別の栓で出ている。", zh:"這支酒比酒藏的一般流通品更好。它往往就是同一支酒，換了個瓶蓋。" },
              { en:"That the price is fair. A contracted shop with a scarce brand has very little pressure on it.", ja:"値が公正であるということ。希少な銘を持つ特約店には、ほとんど圧が掛からない。", zh:"價格公道。一家握有稀有品牌的特約店，幾乎不受任何壓力。" },
              { en:"That you can get any. Many contracted allocations go to regulars before they are offered.", ja:"手に入るということ。多くの割当は、店頭に出る前に常連へ回る。", zh:"你買得到。許多特約配額在上架之前就先分給熟客了。" },
              { en:"That the shop is good. The agreement tests storage and turnover, not taste.", ja:"その店が良いということ。取り決めが試すのは貯蔵と回転であって、味ではない。", zh:"這家店很好。協議檢驗的是保存與周轉，不是品味。" }
            ] } ] }
        ] },
        { t:"tiny", text:{
          en:"The honest summary is that the contracted-retailer system solves a storage problem and creates a scarcity problem, and that the second one is now bigger than the first for a handful of brands. For everything else it is simply the reason a good bottle is in good condition.",
          ja:"正直に要約すれば、特約店の仕組みは貯蔵の問題を解き、希少さの問題を生んだ。そしてひと握りの銘については、いま第二の問題のほうが第一より大きい。それ以外のすべてについては、それは単に、良い瓶が良い状態にある理由である。",
          zh:"誠實地總結：特約店制度解決了一個保存問題，也製造了一個稀缺問題；而對少數幾個品牌而言，後者如今已經比前者更嚴重。至於其餘的一切，它單純就是「一瓶好酒狀態良好」的原因。" } }
      ] },

    { t:"section", id:"approach",
      title:{ en:"How to walk into a range you do not know", ja:"知らぬ品揃えへの入り方", zh:"如何走進一條你不認識的產品線" }, jp:"順序",
      body:[
        { t:"ol", items:[
          { en: "<strong>Find the standing junmai and start there.</strong> If the brewery has no standing junmai — only ginjō and above — that itself is information: it is a house aimed at gift and restaurant trade rather than at a table.",
            ja: "<strong>定番の純米を見つけ、そこから始める。</strong>蔵に定番の純米がなく、吟醸以上しかないならば、それ自体が知らせである。それは食卓ではなく、贈答と料理屋の商いへ向けられた家である。",
            zh: "<strong>找到常態純米，從那裡開始。</strong>如果這家酒藏沒有常態純米——只有吟釀以上——那件事本身就是資訊：這是一家瞄準送禮與餐廳通路、而不是瞄準餐桌的酒藏。" },
          { en: "<strong>Then buy the same thing again, in a different season.</strong> A standing product should be recognisably itself in February and August. If it is not, you have learnt something more useful than any tasting note.",
            ja: "<strong>次に、同じものを別の季にもう一度買う。</strong>定番の品は、二月にも八月にも、それと分かるそれであるべきである。そうでないならば、いかなる利き酒の記よりも役に立つことを学んだことになる。",
            zh: "<strong>然後在不同的季節，把同一樣東西再買一次。</strong>一款常態品在二月與八月都應該還認得出是它自己。如果不是，你學到的東西比任何品飲筆記都有用。" },
          { en: "<strong>Only then take a seasonal one.</strong> Now you have a baseline, so the seasonal release tells you what the brewery does when it is allowed to make a point, rather than just tasting like a nice sake.",
            ja: "<strong>そののちに初めて、季節のものを取る。</strong>いまや基準があるのだから、季節の出荷は、良い酒の味がするというだけでなく、主張を許されたときに蔵が何をするかを告げる。",
            zh: "<strong>到這時才拿季節品。</strong>你現在有了基準線，所以季節出貨告訴你的，是這家酒藏在被允許表態時會做什麼，而不只是「喝起來是支不錯的酒」。" },
          { en: "<strong>Leave the flagship until last, or skip it.</strong> It is the least representative bottle in the range and the most expensive, and by the time you want it you will know whether you want it.",
            ja: "<strong>旗艦は最後まで置くか、飛ばす。</strong>それは品揃えのうち最も代表的でなく、最も高い。そしてそれが欲しくなる頃には、それが欲しいかどうか、あなたは知っているだろう。",
            zh: "<strong>旗艦留到最後，或乾脆跳過。</strong>它是整條產品線裡最不具代表性、也最貴的一瓶；而等到你想要它的時候，你自然會知道自己是不是真的想要。" },
          { en: "<strong>Ask the shop what the brewery is known for locally.</strong> The answer is frequently a futsūshu or a honjōzō that never appears in any English writing, and it is frequently the best value in the building.",
            ja: "<strong>その蔵が地元で何で知られているかを店に訊く。</strong>返ってくる答はしばしば、英語のいかなる書き物にも現れぬ普通酒か本醸造であり、そしてしばしば、その建物のなかで最も値打ちがある。",
            zh: "<strong>問店家：這家酒藏在當地是以什麼聞名的。</strong>得到的答案往往是一款從未出現在任何英文書寫裡的普通酒或本釀造——而且往往是整個店裡最划算的那一瓶。" }
        ] }
      ] },

    { t:"related", items:[
      { href:"storage.html", why:{ en:"Where to buy, and how to keep what you bought.", ja:"どこで買い、買ったものをいかに蔵うか。", zh:"去哪裡買，以及買回來之後怎麼保存。" } },
      { href:"calendar.html", why:{ en:"The brewing year that the shelf year is offset from.", ja:"棚の一年がそこからずれている、造りの一年。", zh:"貨架上的一年所偏離的那個釀造年。" } },
      { href:"pressing.html", why:{ en:"What nakadori and jikagumi actually are, at the press.", ja:"中取りと直汲みが、搾りの場で実際に何であるか。", zh:"中取與直汲在壓榨現場究竟是什麼。" } },
      { href:"value.html", why:{ en:"What the price differences across a range are paying for.", ja:"品揃えのなかの値の差が、何に対して払われているか。", zh:"一條產品線裡的價差，究竟付的是什麼錢。" } },
      { href:"brands.html", why:{ en:"How a house comes to have a name in the first place.", ja:"そもそも一つの家がいかにして名を持つに至るか。", zh:"一家酒藏最初是如何擁有一個名字的。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- value */
SAKE.pages["value"] = {
  kicker: { en: "Drinking · 08", ja: "飲む · 08", zh: "品飲 · 08" },
  title:  { en: "What Money Buys", ja: "値が買うもの", zh: "錢買到的是什麼" },
  jp: "値段と中身",
  lede: {
    en: "A 720 ml bottle of sake in Japan costs anywhere from seven hundred yen to fifty thousand, and the difference is not mysterious. Almost all of it is rice, the rice thrown away in polishing, the size of the tank, the number of hours of human attention, and — above a certain point — scarcity rather than craft. This page walks the ladder from bottom to top, says what genuinely changes at each step, says where the curve of return flattens out, and explains why the same bottle costs three times as much once it leaves the country.",
    ja: "日本において七百二十ミリリットルの酒一本は、七百円から五万円までのいずこかである。そしてその差は謎ではない。そのほとんどは米であり、磨きにおいて捨てられた米であり、槽の大きさであり、人の注意が注がれた時間の数であり——そしてある点より上では、手仕事ではなく稀少さである。この頁はその梯子を下から上へ辿り、いずれの段で何が真に変わるかを述べ、返りの曲線がどこで平らになるかを述べ、そして同じ一本が国を出た途端になぜ三倍するのかを説く。",
    zh: "在日本，一支七百二十毫升的清酒從七百日圓到五萬日圓都有，而這個差距並不神祕。它幾乎全都是米、是精米時被丟掉的米、是酒槽的大小、是人為投注的工時——以及超過某個點之後，是稀缺而非工藝。本頁從下到上走一遍這道階梯，說明每一級真正改變了什麼、報酬曲線在哪裡開始變平，並解釋為什麼同一支酒一旦離開日本就要價三倍。"
  },
  body: [

    { t:"section", id:"ladder",
      title:{ en:"The ladder", ja:"梯子", zh:"這道階梯" }, jp:"価格帯",
      body:[
        { t:"p", text:{
          en:"The bands below are Japanese domestic shelf prices for a 720 ml bottle, which is the only place the arithmetic is clean. They overlap heavily, and the overlaps are where the interesting bottles live: a junmai at the top of its band is usually a better drink than a daiginjō at the bottom of its own.",
          ja:"以下の帯は、七百二十ミリリットル一本の日本国内の棚の値である。算術が清らかであるのはそこだけである。帯は大きく重なり合い、その重なりこそ面白い瓶の住まう場所である。自らの帯の上端にある純米は、たいてい、自らの帯の下端にある大吟醸よりも良い飲みものである。",
          zh:"以下的價格帶是七百二十毫升瓶在日本國內的架上價，因為只有在那裡算術才乾淨。它們大幅重疊，而重疊之處正是有趣的酒所居住的地方：一支位於自身價格帶頂端的純米，通常比一支位於自身價格帶底端的大吟釀更好喝。" } },

        { t:"figure",
          caption:{
            en:"Japanese shelf prices for 720 mL, by category, on a logarithmic scale. The marks under the axis are the things that actually appear as you climb: they are what the extra money is buying.",
            ja:"七百二十ミリリットルの日本国内の棚の値を、区分ごとに、対数の目盛りの上に置いたもの。軸の下の印は、登るにつれて実際に現れるものである。それらこそ、余分の金が買っているものである。",
            zh:"七百二十毫升在日本的架上價，依類別排列，繪於對數刻度上。軸線下方的記號是隨著往上爬而真正出現的東西：它們就是多付的錢所買到的。" },
          svg: function (lang, L) {
            var W = 760, H = 400, X0 = 150, X1 = W - 34, Y0 = 34;
            var LO = 700, HI = 20000;
            function px(v) { return X0 + (Math.log(v) - Math.log(LO)) / (Math.log(HI) - Math.log(LO)) * (X1 - X0); }
            var rows = [
              { n:{ en:"Futsūshu", ja:"普通酒", zh:"普通酒" }, a:700, b:1300, f:"#E7DFD2" },
              { n:{ en:"Honjōzō", ja:"本醸造", zh:"本釀造" }, a:1000, b:1800, f:"#E2D8C6" },
              { n:{ en:"Junmai", ja:"純米", zh:"純米" }, a:1200, b:2500, f:"#D8CCB4" },
              { n:{ en:"Junmai ginjō", ja:"純米吟醸", zh:"純米吟釀" }, a:1500, b:3000, f:"#CDBFA2" },
              { n:{ en:"Junmai daiginjō", ja:"純米大吟醸", zh:"純米大吟釀" }, a:2500, b:8000, f:"#C0AF8E" },
              { n:{ en:"Prestige & allocation", ja:"特別品・限定配分", zh:"名品與配額品" }, a:6000, b:20000, f:"#B09E7C" }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var ticks = [700, 1000, 1500, 2000, 3000, 5000, 8000, 12000, 20000];
            var AY = Y0 + rows.length * 40 + 6;
            for (var t = 0; t < ticks.length; t++) {
              s += '<line x1="' + px(ticks[t]) + '" y1="' + (Y0 - 12) + '" x2="' + px(ticks[t]) + '" y2="' + AY + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(ticks[t]) + '" y="' + (AY + 15) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                   (ticks[t] >= 1000 ? (ticks[t] / 1000) + "k" : ticks[t]) + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (Y0 - 20) + '" font-size="9.5" letter-spacing="1.4" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "円 ・ 四合瓶" : lang === "zh" ? "日圓 ・ 四合瓶" : "YEN PER 720 mL") + '</text>';
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], y = Y0 + i * 40;
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 15) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + L(r.n) + '</text>';
              s += '<rect x="' + px(r.a) + '" y="' + y + '" width="' + (px(r.b) - px(r.a)) + '" height="20" fill="' + r.f + '" stroke="#CDC6B9"/>';
            }
            s += '<line x1="' + X0 + '" y1="' + AY + '" x2="' + X1 + '" y2="' + AY + '" stroke="#B4AC9C"/>';
            var notes = [
              { v:1200, ly: AY + 46, n:{ en:"no added alcohol", ja:"アル添が消える", zh:"不再添加酒精" } },
              { v:1800, ly: AY + 74, n:{ en:"named rice, named yeast", ja:"米と酵母が名を持つ", zh:"米與酵母開始有名字" } },
              { v:2600, ly: AY + 102, n:{ en:"50% polish · contract rice", ja:"精米五十・契約栽培", zh:"精米五十・契作米" } },
              { v:5000, ly: AY + 46, n:{ en:"small tanks · hand pressing", ja:"小仕込み・袋吊り", zh:"小槽・袋吊" } },
              { v:11000, ly: AY + 74, n:{ en:"scarcity, not craft", ja:"手仕事ではなく稀少", zh:"稀缺，而非工藝" } }
            ];
            for (var k = 0; k < notes.length; k++) {
              var nt = notes[k], nx = px(nt.v);
              s += '<line x1="' + nx + '" y1="' + AY + '" x2="' + nx + '" y2="' + (nt.ly - 10) + '" stroke="#D6CFC2"/>';
              s += '<rect x="' + (nx - 2.5) + '" y="' + (AY - 2.5) + '" width="5" height="5" fill="#7C6B52"/>';
              s += '<text x="' + nx + '" y="' + nt.ly + '" text-anchor="middle" font-size="10" fill="#55504A">' + L(nt.n) + '</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Under ¥1,300 — the everyday shelf", ja:"千三百円まで——日々の棚", zh:"一千三百日圓以下——日常的貨架" }, jp:"普通酒",
            def:{ en:"Futsūshu: ordinary sake, usually with brewer's alcohol and sometimes sugars and acids, sold in one-litre cartons and 1.8 L bottles as often as in 720s. It is not a lesser drink so much as a different one, and it is where warm sake genuinely belongs — the additions that make it cheap also make it robust to heat. Most of what Japan actually drinks is here.",
              ja:"普通酒である。並の酒であり、たいてい醸造アルコールを、時に糖や酸を含み、七百二十ミリリットル瓶と同じほどしばしば、一リットルの紙容器や一升瓶で売られる。劣った飲みものというよりは異なる飲みものであり、燗酒が真に属する場所である。それを安くする添えものは、同時にそれを熱に強くする。日本が実際に飲んでいるもののほとんどはここにある。",
              zh:"普通酒：一般清酒，通常添加釀造酒精，有時也加糖與酸，用一公升紙盒與一升瓶販售的頻率不亞於七百二十毫升瓶。它與其說是較差的酒，不如說是不同的酒；而它正是溫酒真正該待的地方——讓它變便宜的那些添加物，同時也讓它耐熱。日本實際上喝掉的大部分酒都在這裡。" } },
          { term:{ en:"¥1,300–2,000 — where quality starts being legible", ja:"千三百〜二千円——質が読めはじめる所", zh:"一千三百～二千日圓——品質開始可辨的地方" }, jp:"本醸造・純米",
            def:{ en:"Honjōzō and basic junmai. Here the label starts telling you real things: a named rice, a polishing ratio, a prefecture, sometimes a yeast. The most under-rated band on the whole ladder, and where a good specialist shop earns its keep — the difference between a dull ¥1,600 bottle and an excellent one is entirely a matter of who chose it.",
              ja:"本醸造と基本の純米である。ここより札は実のことを告げはじめる。名を持つ米、精米歩合、県、時に酵母。梯子全体のうち最も過小に見られている帯であり、良い専門店がその働きの値を示す場所である。退屈な千六百円の一本と秀でた千六百円の一本との差は、まったく、誰がそれを選んだかの問題である。",
              zh:"本釀造與基本款純米。從這裡開始，酒標會告訴你真實的東西：有名字的米、精米步合、縣、有時還有酵母。這是整道階梯上最被低估的一段，也是一家好的專門店賺得其存在價值的地方——一支無趣的一千六百日圓與一支出色的一千六百日圓之間的差別，完全在於是誰挑的它。" } },
          { term:{ en:"¥2,000–3,500 — the band most people should live in", ja:"二千〜三千五百円——ほとんどの人が住むべき帯", zh:"二千～三千五百日圓——多數人該定居的價格帶" }, jp:"純米吟醸",
            def:{ en:"Junmai ginjō and good tokubetsu junmai. Contract-grown rice, polishing to fifty-five or sixty per cent, slower and colder fermentation, and — the part that matters most and shows on no label — a small enough tank that the brewer tasted it every day. If you buy only one kind of sake, buy this one.",
              ja:"純米吟醸と良い特別純米である。契約で育てられた米、五十五あるいは六十パーセントまでの磨き、より遅くより冷たい醗酵。そして——最も重んじられ、いかなる札にも現れぬ部分であるが——造り手が毎日それを味わえるだけの小さな槽。ただ一種の酒を買うのであれば、これを買うがよい。",
              zh:"純米吟釀與好的特別純米。契作米、磨到百分之五十五或六十、更慢更冷的發酵，以及——最要緊、卻不會出現在任何酒標上的那一項——一個小到讓釀酒人每天都能嘗一次的槽。如果你只買一種清酒，就買這一種。" } },
          { term:{ en:"¥3,500–6,000 — the daiginjō band", ja:"三千五百〜六千円——大吟醸の帯", zh:"三千五百～六千日圓——大吟釀帶" }, jp:"純米大吟醸",
            def:{ en:"Polishing to fifty per cent and below, which means throwing away more than half the rice you bought. Aroma-forward yeasts, long cold mashes, often hand pressing in cloth bags. Everything here is real and everything here is expensive to do; whether you personally prefer it to the band below is a separate question and the honest answer is often no.",
              ja:"五十パーセント以下までの磨きであり、それは買った米の半ばを超えて捨てることを意味する。香りを前に出す酵母、長く冷たい醪、しばしば布の袋による手の搾り。ここにあるものはすべて実であり、そのすべては行うに高い。あなた自身が下の帯よりこれを好むかどうかは別の問いであり、正直な答えはしばしば否である。",
              zh:"磨到百分之五十以下，意味著把買來的米丟掉一半以上。前香型酵母、漫長的低溫醪，常以布袋手工搾取。這裡的一切都是真的，而這裡的一切做起來都很貴；至於你個人是否偏好它勝過下面那一帶，是另一個問題，而誠實的答案往往是「不」。" } },
          { term:{ en:"Above ¥6,000 — where the reason changes", ja:"六千円より上——理由が変わる所", zh:"六千日圓以上——理由改變的地方" }, jp:"限定・稀少",
            def:{ en:"Something can still be bought at this level — thirty-five per cent polish, a wooden vat, ten years of cellaring, a single tank of Special-A district Yamada Nishiki — but the price is no longer tracking the cost of making it. Above roughly six thousand yen the dominant variable is how many bottles exist and how many people want one. That is a real thing to pay for if you want it. It is not the same thing as quality, and the market above this line is not evidence about what tastes good.",
              ja:"この高さでもなお買われうるものはある——三十五パーセントの磨き、木の桶、十年の貯え、特A地区の山田錦の一槽。だが値はもはや、それを造る費えを追ってはいない。おおよそ六千円より上において支配する変数は、何本が存在し、何人がそれを欲するかである。それは、望むならば支払うに値する実のものである。だがそれは質と同じものではなく、この線より上の市は、何が美味いかについての証しではない。",
              zh:"到了這個高度仍然買得到東西——百分之三十五的精米、木桶、十年的窖藏、特 A 地區山田錦的單一槽次——但價格已經不再追隨製造成本。大約六千日圓以上，主導的變數是「存在多少支」與「多少人想要」。如果你想要，那是一件真實而值得付錢的事。但它與品質不是同一回事，而這條線之上的市場，並不構成關於「什麼好喝」的證據。" } }
        ] }
      ] },

{ t:"section", id:"marginal",
      title:{ en:"What the extra thousand yen actually pays for", ja:"余分の千円が実際に払うもの", zh:"多出來的一千日圓實際上付了什麼" }, jp:"原価の構造",
      body:[
        { t:"p", text:{
          en:"Four things get more expensive as you climb, and only four. Understanding them makes almost every price on a shelf legible, and makes it obvious when a bottle is priced for a reason other than its cost.",
          ja:"登るにつれて高くなるものは四つあり、四つのみである。それらを解すれば、棚の上のほとんどあらゆる値が読めるようになり、一本がその費え以外の理由で値づけられているときに、それが明らかとなる。",
          zh:"隨著往上爬而變貴的東西有四樣，而且只有四樣。理解它們，就能讀懂貨架上幾乎每一個價格，也能一眼看出某支酒是基於成本以外的理由被定價的。" } },

        { t:"grid", cols:2, cells:[
          { h:{ en:"The rice you throw away", ja:"捨てる米", zh:"你丟掉的米" }, jp:"精米歩合",
            d:{ en:"Polishing to 60% means buying 1.67 kg of brown rice for every kilogram brewed; polishing to 35% means buying 2.86 kg. Contract Yamada Nishiki from a Special-A district already costs several times table rice before any of it is removed. This single line explains most of the gap between a junmai and a daiginjō from the same brewery.",
              ja:"六十パーセントまで磨くとは、醸す一キログラムごとに玄米一・六七キログラムを買うことである。三十五パーセントまでならば二・八六キログラムである。特A地区の契約の山田錦は、何かが削られる前からすでに食用米の数倍する。この一行が、同じ蔵の純米と大吟醸との差のほとんどを説く。",
              zh:"磨到百分之六十，意味著每釀一公斤就要買一・六七公斤糙米；磨到百分之三十五則是二・八六公斤。特 A 地區契作的山田錦，在還沒削掉任何東西之前就已是食用米的數倍價。這單獨一行，就解釋了同一家酒藏的純米與大吟釀之間的大部分差距。" } },
          { h:{ en:"The size of the tank", ja:"槽の大きさ", zh:"槽的大小" }, jp:"仕込み規模",
            d:{ en:"A ten-tonne tank and a one-tonne tank need roughly the same number of decisions from the brewer, but the small one spreads that attention over a tenth of the volume. Almost every genuinely fine sake is made in a tank too small to be economic, and the price is that inefficiency made visible.",
              ja:"十トンの槽と一トンの槽は、造り手からおおよそ同じ数の決めを要する。だが小さいほうは、その注意を十分の一の嵩に広げる。真に優れたほとんどあらゆる酒は、採算に合わぬほど小さな槽で造られており、値とはその非効率が目に見えるようになったものである。",
              zh:"一個十噸的槽與一個一噸的槽，需要釀酒人做出的判斷數量大致相同，但小的那個把同樣的注意力攤在十分之一的體積上。幾乎每一支真正出色的清酒，都是在小到不符經濟效益的槽裡釀出來的，而價格就是那份低效被看見的樣子。" } },
          { h:{ en:"Hours of human attention", ja:"人の注意の時間", zh:"人為投注的工時" }, jp:"人件",
            d:{ en:"Hand-made kōji instead of a machine, a forty-day mash instead of twenty-five, pressing in hanging cloth bags instead of a horizontal press, filling and labelling by hand. Each of these is a real cost, each shows in the glass, and none of them scales.",
              ja:"機械ではなく手による麹、二十五日ではなく四十日の醪、横型の圧搾機ではなく吊るした布の袋による搾り、手による瓶詰と貼り。いずれも実の費えであり、いずれも杯に現れ、そしていずれも規模で薄まらない。",
              zh:"用手工製麴而非機器、四十天的醪而非二十五天、以吊掛的布袋搾取而非橫式壓搾機、手工裝瓶與貼標。每一項都是真實的成本，每一項都會在杯中顯現，而且沒有一項能靠規模攤薄。" } },
          { h:{ en:"The cold chain", ja:"冷たさの連なり", zh:"冷鏈" }, jp:"貯蔵と輸送",
            d:{ en:"Refrigerated tanks, refrigerated warehouses, refrigerated trucks and a retailer with a cold room. This is the least glamorous line on the list and probably the one that changes what reaches your glass the most. A bottle that has been cold since the day it was filled is a different bottle.",
              ja:"冷やされた槽、冷やされた蔵、冷やされた車、そして冷蔵室をもつ小売。表のうち最も華のない一行であり、おそらくは、あなたの杯に届くものを最も大きく変える一行である。満たされた日から冷たくあり続けた一本は、別の一本である。",
              zh:"冷藏槽、冷藏倉庫、冷藏卡車，以及一家有冷藏室的零售商。這是清單上最不光鮮的一行，卻很可能是最大幅改變「什麼東西到得了你杯中」的那一行。一支從裝瓶那天起就一直保持低溫的酒，是另一支酒。" } }
        ] },

        { t:"note", label:{ en:"Notice what is not on that list", ja:"表に無いものに気づかれたい", zh:"請注意清單上沒有的東西" },
          text:{
            en:"Not the bottle, not the box, not the calligraphy, not the story on the back label, and not the awards. Those cost money too, but they cost the same money on a bottle that is good and a bottle that is not, which makes them useless as a signal. The four above cannot be faked, and all four leave traces on the label if you know where to look: polishing ratio, rice variety, whether the brewery names its tank or its pressing method, and whether the shop keeps it cold.",
            ja:"瓶でもなく、箱でもなく、書でもなく、裏の札の物語でもなく、賞でもない。それらも金を要するが、良い一本にも良くない一本にも同じ金を要し、ゆえに合図としては用をなさぬ。上の四つは偽りえず、そして見る場所を知るならば、四つとも札に痕を残す。精米歩合、米の品種、蔵が槽や搾りの仕方に名を与えているか、そして店がそれを冷たく保っているか。",
            zh:"不是瓶、不是盒、不是書法、不是背標上的故事，也不是獎項。那些也要花錢，但它們在一支好酒與一支不好的酒上花的是同樣的錢，因而作為訊號毫無用處。上述四項無法造假，而且只要你知道往哪看，四項都會在酒標上留下痕跡：精米步合、米的品種、酒藏是否為它的槽或搾法命名，以及店家有沒有把它冷藏。" } }
      ] },

    { t:"section", id:"flat",
      title:{ en:"Where the curve flattens", ja:"曲線が平らになる所", zh:"曲線變平的地方" }, jp:"逓減",
      body:[
        { t:"p", text:{
          en:"Between seven hundred yen and about two and a half thousand, every additional thousand yen buys a large and audible improvement. Between two and a half thousand and about five, it buys a smaller one that most drinkers can still detect. Above five thousand, the improvement is real but narrow, and it is increasingly an improvement in a specific direction — more aroma, more polish, more refinement — that not everybody wants.",
          ja:"七百円からおよそ二千五百円までのあいだ、加えられる千円ごとに、大きく、聞き取れる良化が買われる。二千五百円からおよそ五千円までのあいだでは、より小さいが、ほとんどの飲み手がなお捉えうる良化が買われる。五千円より上において、良化は実であるが狭く、そしてますます、ある定まった向きへの良化——より多くの香り、より深い磨き、より精緻——となる。それを誰もが望むわけではない。",
          zh:"從七百日圓到大約兩千五百日圓，每多加一千圓都會買到一次巨大且聽得見的提升。從兩千五到大約五千，買到的提升較小，但多數飲者仍然察覺得到。五千以上，提升是真的，但很窄，而且愈來愈是往某個特定方向的提升——更多香氣、更深的精米、更精緻——而那並非人人都想要。" } },

        { t:"quote",
          text:{ en:"The most expensive bottle on a list is almost never the one that best answers the question \"what should we drink with this food, tonight, in this room\". It answers a different question, and the mistake is to think it is the same question with a better answer.",
            ja:"品書きの上の最も高い一本は、「この料理と、今宵、この部屋で、何を飲むべきか」という問いに最も良く答える一本であることは、ほとんどない。それは異なる問いに答えている。そしてそれを、より良い答えを持つ同じ問いだと思うことが誤りである。",
            zh:"酒單上最貴的那一支，幾乎從來都不是最能回答「今晚、在這個房間裡、配這道菜該喝什麼」的那一支。它回答的是另一個問題；而把它當成「同一個問題的更好答案」，正是那個錯誤。" },
          cite:{ en:"The most useful thing to remember in a shop", ja:"店で覚えておくべき最も役立つこと", zh:"在店裡最值得記住的一件事" } },

        { t:"ul", plain:true, items:[
          { en:"<strong>Freshness beats grade.</strong> A junmai bottled two months ago and kept cold will outperform a daiginjō that has spent a year on a warm shelf, every time, and the difference is not close.",
            ja:"<strong>新しさは格に勝つ。</strong>二月前に瓶詰され冷たく保たれた純米は、温い棚で一年を過ごした大吟醸をつねに上回る。そしてその差は僅かではない。",
            zh:"<strong>新鮮勝過等級。</strong>兩個月前裝瓶並保持低溫的純米，每一次都會勝過在溫熱貨架上待了一年的大吟釀，而且差距不小。" },
          { en:"<strong>The shop is a bigger variable than the label.</strong> Two ¥2,000 bottles from a cold specialist and a warm supermarket are not comparable products. Spend your discrimination on where you buy before you spend it on what you buy.",
            ja:"<strong>店は札より大きな変数である。</strong>冷たい専門店と温いスーパーマーケットから来た二本の二千円は、比べうる品ではない。何を買うかに目利きを費やす前に、どこで買うかに費やされたい。",
            zh:"<strong>店家是比酒標更大的變數。</strong>來自冷藏專門店與溫熱超市的兩支兩千日圓，並不是可比較的商品。在把你的鑑別力花在「買什麼」之前，先把它花在「在哪買」。" },
          { en:"<strong>Temperature is free.</strong> Serving the same bottle at three temperatures will teach you more, and cost you less, than moving up one price band.",
            ja:"<strong>温度は無料である。</strong>同じ一本を三つの温度で供することは、価格の帯を一つ上がるより多くを教え、より少なくしか要さない。",
            zh:"<strong>溫度是免費的。</strong>把同一支酒用三種溫度喝過一輪，會比往上跳一個價格帶教會你更多，而且花費更少。" },
          { en:"<strong>Two bottles beat one.</strong> Ten thousand yen spent on four ¥2,500 bottles from four prefectures will build a palate; spent on one ¥10,000 bottle it will build a memory. Both are worth having, but only one of them is a method.",
            ja:"<strong>二本は一本に勝る。</strong>四つの県から来た二千五百円の四本に費やされた一万円は舌を築く。一万円の一本に費やされたそれは記憶を築く。いずれも持つに値するが、方法であるのは一方のみである。",
            zh:"<strong>兩支勝過一支。</strong>一萬日圓花在來自四個縣的四支兩千五，會建立起你的味覺；花在一支一萬圓上，會建立起一段記憶。兩者都值得擁有，但只有其中一個是方法。" }
        ] }
      ] },
    { t:"section", id:"anchor",
      title:{ en:"The thousand-yen anchor", ja:"千円の錨", zh:"一千日圓的錨" }, jp:"価格の記憶",
      body:[
        { t:"p", text:{
          en:"There is a number in the head of every Japanese sake drinker, and it is roughly what a bottle of ordinary sake cost when they started drinking. It has barely moved in thirty years. Almost every commercial difficulty in this industry can be restated as the gap between that number and what the drink now costs to make, and the gap did not open because costs rose. It opened because the sake changed and the number did not.",
          ja:"日本の飲み手のいずれの頭のなかにも一つの数があり、それはおおよそ、その人が飲み始めた頃の並の一本の値である。三十年のあいだ、ほとんど動いていない。この産業の商いの上のほとんどあらゆる難しさは、その数と、いま造るのにかかるものとの隔たりとして言い直しうる。そしてその隔たりは、費えが上がったがゆえに開いたのではない。酒のほうが変わり、数のほうが変わらなかったがゆえに開いたのである。",
          zh:"每一位日本清酒飲者的腦袋裡都有一個數字，那大約是他們開始喝酒時一瓶普通清酒的價格。三十年來，它幾乎沒有動過。這個產業商業面上幾乎所有的困難，都可以重述成「那個數字」與「這款酒如今的製造成本」之間的落差；而這道落差之所以出現，不是因為成本上升，是因為酒變了，而數字沒變。" } },

        { t:"figure",
          caption:{
            en:"The brown rice standing behind one 720 mL bottle, worked out from the mass balance on the Arithmetic of a Batch page. Two things multiply together as the polishing ratio falls. More brown rice has to be bought to leave the same weight of white rice, and then a larger share of that rice leaves the press as lees rather than as sake, because a brewery chasing a delicate daiginjō stops pressing long before the last of it has been forced through the cloth. From an everyday honjōzō to a competition bottle the rice behind the glass multiplies by nearly four, which is not a marketing claim — it is division.",
            ja:"七百二十ミリリットルの一本の背後に立つ玄米を、「一仕込みの算術」の頁の物質収支から割り出したもの。精米歩合が下がるにつれ、二つのものが掛け合わさる。同じ重さの白米を残すために、より多くの玄米を買わねばならぬこと。そして、その米のより大きな割合が、酒としてではなく粕として槽を去ること。繊細な大吟醸を追う蔵は、最後の一滴が布を通して押し出されるはるか手前で搾りを止めるからである。日々の本醸造から鑑評会の一本まで、杯の背後の米は四倍近くに増える。それは売り文句ではない。割り算である。",
            zh:"一支 720 毫升酒瓶背後所站著的玄米量，依「一次仕込的算術」一頁的物質收支推算而得。隨著精米步合下降，有兩件事相乘。要留下同樣重量的白米，必須買進更多玄米；接著，這些米當中有更大的比例是以酒粕、而不是以酒的形式離開酒槽——因為追求纖細大吟釀的酒藏，會在最後一滴被擠過濾布之前很久就停止壓榨。從日常的本釀造到鑑評會等級的一支，杯子背後的米增加了將近四倍。這不是行銷話術，這是除法。" },
          svg: function (lang, L) {
            var W = 760, H = 320, X0 = 250, X1 = 660, TOP = 82, ROW = 40;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g, MAX = 2.0;
            for (g = 0; g <= 2.0; g += 0.5) {
              var gx = X0 + g / MAX * (X1 - X0);
              s += '<line x1="' + gx.toFixed(1) + '" y1="' + (TOP - 16) + '" x2="' + gx.toFixed(1) + '" y2="' + (TOP + ROW * 5 - 24) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + gx.toFixed(1) + '" y="' + (TOP + ROW * 5 - 10) + '" text-anchor="middle" font-size="9" fill="#B4AEA4">' + g.toFixed(1) + '</text>';
            }
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一本の背後の玄米・キログラム" : lang === "zh" ? "一支酒背後的玄米・公斤" : "BROWN RICE BEHIND ONE BOTTLE, IN KILOGRAMS") + '</text>';
            var rows = [
              { p:"70%", k:0.52, n:{ en:"Honjōzō", ja:"本醸造", zh:"本釀造" }, d:{ en:"lees about 22%", ja:"粕歩合およそ22%", zh:"粕步合約 22%" } },
              { p:"60%", k:0.62, n:{ en:"Junmai", ja:"純米", zh:"純米" }, d:{ en:"lees about 25%", ja:"粕歩合およそ25%", zh:"粕步合約 25%" } },
              { p:"50%", k:0.79, n:{ en:"Junmai ginjō", ja:"純米吟醸", zh:"純米吟釀" }, d:{ en:"lees about 35%", ja:"粕歩合およそ35%", zh:"粕步合約 35%" } },
              { p:"40%", k:1.03, n:{ en:"Junmai daiginjō", ja:"純米大吟醸", zh:"純米大吟釀" }, d:{ en:"lees about 42%", ja:"粕歩合およそ42%", zh:"粕步合約 42%" } },
              { p:"23%", k:1.92, n:{ en:"Competition daiginjō", ja:"鑑評会の大吟醸", zh:"鑑評會等級大吟釀" }, d:{ en:"lees about 52%", ja:"粕歩合およそ52%", zh:"粕步合約 52%" } }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = TOP + i * ROW;
              s += '<rect x="' + X0 + '" y="' + (ry - 9) + '" width="' + ((X1 - X0) * rows[i].k / MAX).toFixed(1) + '" height="18" fill="' + (i === 4 ? "#7C6B52" : "#B09E7C") + '"/>';
              s += '<text x="' + (X0 + (X1 - X0) * rows[i].k / MAX + 8).toFixed(1) + '" y="' + (ry + 4) + '" font-size="10" fill="#6B655C">' + rows[i].k.toFixed(2) + ' kg</text>';
              s += '<text x="30" y="' + (ry - 1) + '" font-size="10.5" fill="#201E1B">' + L(rows[i].n) + '</text>';
              s += '<text x="30" y="' + (ry + 11) + '" font-size="8.5" fill="#A39C91">' + rows[i].p + ' · ' + L(rows[i].d) + '</text>';
            }
            s += '<text x="30" y="' + (H - 26) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "白米一千キロ、汲水130%、炭酸ガス約400キロという同じ仕込みから、粕歩合と精米歩合だけを変えて算じた。"
                  : lang === "zh" ? "以白米一千公斤、汲水 130%、二氧化碳約 400 公斤的同一次仕込為基礎，只改動粕步合與精米步合計算而得。"
                  : "Computed from one batch — 1,000 kg white rice, 130% water, about 400 kg of carbon dioxide — varying only the lees ratio and the polishing ratio.") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "度数15%まで割り水したのちの七百二十ミリリットル瓶の本数で割っている。粕歩合は代表値である。"
                  : lang === "zh" ? "再除以稀釋到 15 度之後可裝的 720 毫升瓶數；粕步合取代表值。"
                  : "Divided by the number of 720 mL bottles after dilution to 15%. The lees ratios are representative values.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Where the anchor came from", ja:"錨はどこから来たか", zh:"這個錨從哪裡來" }, jp:"価格の慣性", romaji:"kakaku no kansei",
            def:{ en:"Sake was sold for most of the twentieth century as a commodity by volume, in the 1.8 litre bottle, at a price set largely by the tax class the bottle fell into rather than by what was inside it. Three generations learned a price per litre for something called sake. When the grading system was abolished in 1992 and the industry reorganised itself around designations that describe the making, the prices did not reorganise with them: the new categories were slotted into the old ladder, a few hundred yen apart, as though the difference between them were a matter of finish rather than of quantity of rice.",
              ja:"日本酒は二十世紀の大半において、一升瓶で、量により、そして瓶の中身によってではなく瓶が落ちる税の級によっておおよそ定まる値で、商品として売られてきた。三代が、日本酒と呼ばれるものの一リットルあたりの値を学んだ。一九九二年に級別が廃され、産業が造りを記す特定名称の周りに自らを組み直したとき、値はそれとともには組み直されなかった。新しい区分は古い梯子に、数百円の間隔で嵌め込まれた。あたかもそれらの違いが、米の量ではなく仕上げの事柄であるかのように。",
              zh:"在二十世紀的大部分時間裡，清酒是以一升瓶、按容量出售的商品，價格主要由這瓶酒落在哪個稅級決定，而不是由瓶子裡裝的東西決定。三個世代學會了一個叫做「清酒」的東西每公升值多少。一九九二年級別制度廢止、產業圍繞著描述製法的特定名稱重新組織自己時，價格並沒有跟著重新組織：新的分類被塞進舊的階梯裡，彼此相隔幾百日圓，彷彿它們之間的差別只是完工程度，而不是米的用量。" } },
          { term:{ en:"The margin runs the wrong way", ja:"利は逆を向く", zh:"利潤走的是反方向" }, jp:"逆進する利", romaji:"gyakushin suru ri",
            def:{ en:"Because the rice multiplies faster than the price does, the gross margin on a house's daiginjō is frequently thinner than on the junmai below it, and can be thinner than on the futsūshu below that. This is the fact that explains what would otherwise be puzzling: a brewery that successfully moved its whole range upmarket over twenty years, and whose sake is unarguably better, and whose accounts are no healthier. Premium was a survival strategy against falling volume, not a margin strategy, and the two are regularly confused by people writing about the industry from outside it.",
              ja:"米が値よりも速く増えるがゆえに、ある家の大吟醸の粗利は、その下の純米よりも薄いことが多く、さらにその下の普通酒よりも薄くなりうる。これこそ、さもなくば腑に落ちぬことを説く事実である。二十年をかけて品揃えの全体を上位へ移すことに成功し、その酒は疑いなく良くなり、そして帳簿は少しも健やかでない蔵である。上位化は落ちる量に抗う生存の策であって、利の策ではなかった。そしてこの二つは、産業を外から書く人々によって、しばしば取り違えられる。",
              zh:"因為米增加得比價格快，一家酒藏大吟釀的毛利，往往比它下面那支純米更薄，甚至可能比再下面的普通酒更薄。這個事實解釋了一件否則令人費解的事：一家用二十年成功把整個產品線往上移、酒無疑變得更好、帳面卻一點也沒有更健康的酒藏。高階化是對抗銷量下滑的求生策略，不是利潤策略；而這兩者，經常被從外部書寫這個產業的人搞混。" } },
          { term:{ en:"Why the export price is the interesting one", ja:"輸出の値こそ面白い理由", zh:"為何出口價才是有意思的那個" }, jp:"錨のない市場", romaji:"ikari no nai shijō",
            def:{ en:"A drinker in Taipei, London or New York has no memory of what sake used to cost and no ladder to slot it into, so the bottle is priced against what else is on that shelf — which is wine. That is the entire significance of the doubling in export value per litre over a decade: not that foreigners are generous, but that they are the only customers without the anchor. Every brewery that has found this out has had the same thought in the same order, which is why the export figures rose while the domestic ones did not.",
              ja:"台北、倫敦、紐約の飲み手は、日本酒がかつていくらであったかの記憶を持たず、それを嵌め込む梯子も持たない。ゆえにその瓶は、同じ棚にある他のもの——すなわち葡萄酒——に対して値づけられる。この十年における輸出の一リットル当たり単価の倍増が持つ意味は、その全体がここにある。外国人が気前よいのではなく、彼らこそ錨を持たぬ唯一の客なのである。これを見出した蔵はいずれも同じことを同じ順で考えた。輸出の数字が昇り、国内の数字が昇らなかったのはそのためである。",
              zh:"台北、倫敦或紐約的飲者，對清酒「從前值多少」沒有記憶，也沒有一把可以把它塞進去的階梯；於是這瓶酒是對著同一個貨架上的其他東西定價的——也就是葡萄酒。十年間每公升出口單價翻倍的全部意義就在這裡：不是外國人比較大方，而是他們是唯一沒有那個錨的顧客。每一家發現這件事的酒藏，都以同樣的順序想過同樣的念頭；這正是出口數字上升、而國內數字沒有上升的原因。" } }
        ] },

        { t:"note", title:{ en:"And the counter-argument, which is real", ja:"そして、実際にある反論", zh:"以及一個確實存在的反駁" }, text:{
          en:"The anchor is also the reason sake is one of the few genuinely fine drinks that an ordinary person can buy without thinking about it. A junmai ginjō made with real care sells in Japan for the price of a cinema ticket and a coffee, and that is not only a market failure — it is also the thing that keeps sake a daily drink rather than an occasion drink, and every brewery that has raised prices sharply has had to weigh the second effect against the first. The industry's disagreement about pricing is not a disagreement about arithmetic. It is a disagreement about what sake is for.",
          ja:"錨はまた、日本酒が、普通の人が考えることなしに買いうる真に良い酒の数少ない一つであることの理由でもある。実際に心を尽くして造られた純米吟醸が、日本では映画の切符と珈琲ほどの値で売られている。それは市場の失敗であるだけではない。日本酒を、折の酒ではなく日々の酒として保っているものでもある。値を大きく上げたいずれの蔵も、第二の効きを第一の効きに対して量らねばならなかった。値づけをめぐる業界の不一致は、算術についての不一致ではない。日本酒が何のためにあるのかについての不一致である。",
          zh:"這個錨同時也是清酒之所以是少數幾種「普通人可以不假思索買下」的真正好酒的原因。一支真正用心釀造的純米吟釀，在日本賣一張電影票加一杯咖啡的價錢——那不只是市場失靈，也正是讓清酒維持為日常之酒、而非場合之酒的那件事。每一家大幅漲價的酒藏，都必須拿第二種效果去衡量第一種。業界關於定價的分歧，不是算術上的分歧，是關於「清酒是為了什麼而存在」的分歧。" } }
      ] },

    { t:"section", id:"bands",
      title:{ en:"What each price band actually buys", ja:"その値幅が実際に買っているもの", zh:"每一個價格帶實際上買到什麼" }, jp:"価格帯",
      body:[
        { t:"p", text:{
          en:"Orientation rather than a price list. These are Japanese retail bands for a 720 mL bottle in the mid-2020s, and what changes as you move up them. Outside Japan every band shifts up by roughly two and a half to three times, for the reasons set out further down this page, but the order of what you gain does not change.",
          ja:"値段表ではなく、見取り図である。二〇二〇年代半ばの日本における七百二十ミリリットル瓶の小売の帯と、そこを昇るにつれて何が変わるかである。日本の外では、この頁の後段に記す理由により、いずれの帯もおよそ二倍半から三倍に上がる。しかし、何を得るかの順は変わらない。",
          zh:"這是方位感，不是價目表。以下是二〇二〇年代中期日本境內 720 毫升瓶的零售價格帶，以及往上移動時有什麼在改變。在日本以外，每一個價格帶會因為本頁後文所述的理由整體上移約二點五到三倍，但「你得到什麼」的順序不會改變。" } },

        { t:"table",
          caption:{ en:"Japanese retail, 720 mL, as orientation only", ja:"日本の小売・七百二十ミリリットル・目安として", zh:"日本零售・720 毫升・僅供定位" },
          cols:[ { en:"Band", ja:"帯", zh:"價格帶" }, { en:"Typically", ja:"おおむね", zh:"大致上是" }, { en:"What the money is buying", ja:"その代が買っているもの", zh:"這筆錢買到的是什麼" } ],
          keyCol:0, numCols:[0],
          rows:[
            [ "¥800–1,200", { en:"Futsūshu, entry honjōzō", ja:"普通酒・入門の本醸造", zh:"普通酒、入門本釀造" },
              { en:"Table rice, a polishing ratio of seventy per cent or above, added alcohol, and ambient distribution. Bought to drink with dinner, which is what it is for and what it is good at. Nothing here is a compromise unless you thought you were buying something else.",
                ja:"飯米、七十パーセント以上の精米歩合、アルコール添加、そして常温の流通。夕餉とともに飲むために買われるものであり、そのためにあり、そしてそれを得意とする。別のものを買っているつもりでなかった限り、ここに妥協は一つもない。",
                zh:"飯米、七成以上的精米步合、添加酒精、常溫流通。它是買來配晚飯的，那正是它的用途，也是它擅長的事。除非你以為自己買的是別的東西，否則這裡沒有任何一項是妥協。" } ],
            [ "¥1,200–1,800", { en:"A competent junmai", ja:"まっとうな純米", zh:"一支稱職的純米" },
              { en:"Sixty to seventy per cent, a general-purpose brewing rice, two pasteurisations, and a sake built to be stable on a shelf and to warm well. This is the band the anchor sits in, and the band in which a brewery's honesty is most visible, because there is nowhere to hide behind aroma.",
                ja:"六十から七十パーセント、汎用の醸造用米、二度の火入れ、そして棚で安んじ、燗によく応えるように組まれた酒。錨が座るのはこの帯であり、蔵の誠実さが最もよく見えるのもこの帯である。香りの陰に隠れる場所がないからである。",
                zh:"六成到七成、通用型釀造米、兩次火入，以及一支為了「在貨架上穩定、也溫得好」而組起來的酒。錨就坐在這個價格帶，而這也是一家酒藏的誠實最容易被看見的價格帶——因為這裡沒有香氣可以躲。" } ],
            [ "¥1,800–2,800", { en:"Junmai ginjō", ja:"純米吟醸", zh:"純米吟釀" },
              { en:"Fifty to sixty per cent, often a named rice and a named yeast, frequently one pasteurisation or none, and cold distribution from the brewery onward. This is where the curve is steepest: the largest increase in what is in the glass for the smallest increase in what left the wallet.",
                ja:"五十から六十パーセント、多くは名のある米と名のある酵母、しばしば一度火入れかまったくの生、そして蔵から先は冷たい流通。曲線が最も急なのはここである。財布を出たものの最も小さな増しに対して、杯のなかのものの最も大きな増しが得られる。",
                zh:"五成到六成，常常是有名字的米與有名字的酵母，多半只火入一次或完全不火入，而且從酒藏出去之後全程冷藏。曲線最陡的地方就在這裡：花出去的錢增加得最少，而杯子裡的東西增加得最多。" } ],
            [ "¥2,800–4,500", { en:"Junmai daiginjō", ja:"純米大吟醸", zh:"純米大吟釀" },
              { en:"Forty to fifty per cent, contracted rice from a named district, a small tank, a careful press stopped early, and a sake that will usually reward a wine glass and punish a warm room. Real work, honestly priced, and the point at which most drinkers stop being able to tell what the extra money changed.",
                ja:"四十から五十パーセント、名のある地区からの契約米、小さな槽、早く止められた慎重な搾り、そしてたいてい葡萄酒の器に報い、暖かい部屋を罰する酒。実際の仕事であり、正直に値づけられており、そしてほとんどの飲み手が、増えた代が何を変えたのかを言えなくなる地点である。",
                zh:"四成到五成、來自指定產區的契作米、小槽仕込、提早收手的謹慎壓榨，以及一支通常會回報葡萄酒杯、並且懲罰溫暖房間的酒。真實的工，誠實的價，也是多數飲者開始說不出「多花的錢改變了什麼」的那個點。" } ],
            [ "¥4,500–9,000", { en:"The top of a house's range", ja:"その家の最上位", zh:"一家酒藏的頂端" },
              { en:"Thirty-five per cent or below, the best lot of rice the brewery could contract, drip pressing or a very gentle press, small lots, a box. A real difference exists and it is not large; what is large is the cost of producing it, which is where most of the price has gone.",
                ja:"三十五パーセント以下、蔵が契約しえた最良の米、雫取りかきわめて穏やかな搾り、小さな仕込み、そして箱。実際の違いはあり、そして大きくはない。大きいのはそれを生むための費えであり、値のほとんどはそちらへ行っている。",
                zh:"三成五以下、酒藏所能簽到最好的一批米、雫取或極為輕柔的壓榨、小批次、附盒。實際的差別存在，而且不大；大的是生產它的成本，而價格的大部分正是流到那裡去了。" } ],
            [ { en:"above ¥9,000", ja:"九千円以上", zh:"九千日圓以上" }, { en:"Scarcity", ja:"稀少", zh:"稀少性" },
              { en:"Competition cuvées, long-aged koshu, anniversary bottles, allocated labels bought at second hand. Some of it is extraordinary. Almost none of the price above this line is paying for anything that happened in the brewery, and the section below on the scarcity premium is about what it is paying for instead.",
                ja:"鑑評会の出品酒、長く寝かせた古酒、周年の一本、そして転売で買われる限定流通の銘柄。そのうちいくつかは並外れている。この線より上の値のほとんどは、蔵で起きた何かに対して支払われてはいない。下の稀少の割増の節は、では何に対して支払われているのかについてである。",
                zh:"鑑評會出品酒、長期熟成的古酒、週年紀念瓶，以及在二手市場買到的限量流通品牌。其中有些確實非凡。但這條線以上的價格，幾乎沒有一分是在為酒藏裡發生過的任何事付錢；下面談稀少性溢價的那一節，講的就是它到底在為什麼付錢。" } ]
          ] },

        { t:"note", title:{ en:"If you only remember one line", ja:"一行だけ覚えるなら", zh:"如果只記一行" }, text:{
          en:"The junmai ginjō band is where the money works hardest, in Japan and everywhere else. Below it you are buying a competent everyday drink and should not pay more for it; above it you are buying refinement at a rate that rises much faster than the refinement does. If you are trying to convince somebody who thinks they dislike sake, buy from this band, serve it cold in a wine glass, and then serve them something warm from the band below it.",
          ja:"代が最もよく働くのは純米吟醸の帯であり、それは日本においても、他のいずこにおいてもである。その下ではまっとうな日々の一杯を買っているのであり、それに余分を払うべきではない。その上では、洗練そのものよりもはるかに速く昇る率で洗練を買っている。日本酒が好きでないと思っている誰かを説くつもりであれば、この帯から買い、葡萄酒の器に冷やして出し、そののち、その下の帯から温めたものを出されたい。",
          zh:"錢工作得最賣力的，是純米吟釀這一帶——在日本如此，在其他任何地方也是。低於它，你買的是一杯稱職的日常酒，不該為它多付；高於它，你是在用一個上升速度遠快於精緻度本身的比率買精緻。如果你想說服一個自認不喜歡清酒的人，就從這一帶買，冰鎮後用葡萄酒杯端上去，然後再從下面那一帶端一杯溫的給他。" } }
      ] },


    { t:"section", id:"scarcity",
      title:{ en:"The scarcity premium", ja:"稀少の上乗せ", zh:"稀缺溢價" }, jp:"プレミア価格",
      body:[
        { t:"p", text:{
          en:"A small number of Japanese brands sell, at the brewery, for two or three thousand yen and change hands afterwards for five or ten times that. This is not the brewery's doing — the makers set a normal price and mostly hate what happens next — and it is worth understanding as a market phenomenon rather than as information about the sake.",
          ja:"少数の日本の銘柄は、蔵において二千円か三千円で売られ、そののち五倍か十倍で手を替える。これは蔵の為すところではない。造り手は並の値をつけており、その後に起きることをおおむね嫌っている。そしてこれは、酒についての知らせとしてではなく、市の現象として解される値打ちがある。",
          zh:"有少數日本品牌在酒藏出廠時賣兩、三千日圓，之後卻以五倍或十倍的價格轉手。這不是酒藏做的——製造者訂的是正常價格，而且大多討厭接下來發生的事——並且它值得被理解為一種市場現象，而不是關於這支酒的資訊。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Small production meets national demand", ja:"小さな生産が全国の需に会う", zh:"小產量遇上全國性需求" }, jp:"需給",
            text:{ en:"A brewery making a few hundred kilolitres a year cannot supply a country of a hundred and twenty million, and unlike most industries it usually cannot scale up without changing the thing people want. The shortage is structural, not manufactured.",
              ja:"年に数百キロリットルを造る蔵が、一億二千万の国を賄うことはできぬ。そしてほとんどの産業とは異なり、人々の望むものを変えずに規模を上げることは、たいていできぬ。乏しさは作られたものではなく、構えのものである。",
              zh:"一家年產數百公秉的酒藏無法供應一個一億兩千萬人的國家，而且與多數產業不同，它通常無法在不改變人們所要之物的前提下擴大規模。這種短缺是結構性的，不是製造出來的。" } },
          { n:"2", title:{ en:"Allocation replaces price", ja:"配分が値に代わる", zh:"配額取代價格" }, jp:"特約店配分",
            text:{ en:"Rather than raise the price until demand falls, the brewery allocates its output to contracted specialist retailers who agree to sell at the intended price. This keeps the sake affordable to the people the brewer wants drinking it, and it moves the shortage from the price to the queue.",
              ja:"需が退くまで値を上げるのではなく、蔵は、意図された値で売ることに同意した契約の専門店へ出荷を配る。それは、造り手が飲んでほしいと願う人々にとって酒を手の届くものに保ち、そして乏しさを値から列へ移す。",
              zh:"酒藏不是把價格提高到需求下降為止，而是把產量分配給同意以既定價格銷售的契約專門店。這讓酒對釀酒人希望喝到它的那些人來說仍然負擔得起，同時把短缺從價格轉移到了排隊上。" } },
          { n:"3", title:{ en:"Someone arbitrages the queue", ja:"誰かが列を裁く", zh:"有人對這條隊伍進行套利" }, jp:"転売",
            text:{ en:"Where an official price sits far below what someone will pay, resale appears. The premium that results is a measure of the gap between allocation and demand — nothing more. It says how hard the bottle is to get, not how good it is, and the two are only loosely related.",
              ja:"定めの値が、誰かの支払うであろう額をはるかに下回るところに、転売は現れる。生じる上乗せは、配分と需との隔たりの尺度である。それ以上ではない。それは瓶がいかに手に入りにくいかを述べるのであり、いかに良いかを述べるのではない。両者の結びつきは緩い。",
              zh:"當官方價格遠低於有人願意支付的金額，轉售就會出現。由此產生的溢價，是「配額」與「需求」之間差距的量度——僅此而已。它說的是這支酒有多難買到，不是它有多好，而這兩者只有鬆散的關聯。" } },
          { n:"4", title:{ en:"What to do about it", ja:"それにいかに対するか", zh:"該怎麼辦" }, jp:"買い方",
            text:{ en:"Buy the famous bottle at its shelf price if a shop has it, which happens more often than the internet suggests, and otherwise buy something else. Every prefecture has breweries making sake of the same standard with no queue attached; a specialist shop will name three in a minute if you ask, and asking that question is the single most useful sentence a customer can say.",
              ja:"名高い一本は、店が持っているならばその棚の値で買うがよい。それは網が示唆するよりしばしば起こる。そうでなければ他のものを買うがよい。いずれの県にも、同じ水準の酒を、列を伴わずに造る蔵がある。専門店は尋ねれば一分のうちに三つを挙げる。そしてその問いを尋ねることこそ、客が述べうる最も役に立つ一文である。",
              zh:"如果哪家店有那支名酒，就用架上價買下來——這比網路上顯示的要常發生；否則就買別的。每一個縣都有酒藏在釀造同等水準、卻不附帶隊伍的酒；你一問，專門店一分鐘內就能報出三個名字，而問出那個問題，正是一位顧客能說出的最有用的一句話。" } }
        ] }
      ] },

    { t:"section", id:"export",
      title:{ en:"Why it costs three times as much abroad", ja:"海の外でなぜ三倍するか", zh:"為什麼在國外要價三倍" }, jp:"輸出価格",
      body:[
        { t:"p", text:{
          en:"A bottle that is ¥2,500 in a Tokyo shop is routinely £35, €40 or US$45 in London, Paris or New York, and drinkers reasonably suspect they are being gouged. Mostly they are not. The multiplication is arithmetic, and it happens because each link in the chain takes a percentage of the price it was charged, not of the original.",
          ja:"東京の店で二千五百円の一本は、倫敦、巴里、紐育において当たり前のように三十五ポンド、四十ユーロ、四十五ドルである。飲み手が、自らが吹きかけられていると疑うのはもっともである。だがたいていはそうではない。この掛け算は算術であり、それが起こるのは、連なりのいずれの環も、元の値ではなく、自らが課された値の百分率を取るからである。",
          zh:"一支在東京店裡兩千五百日圓的酒，在倫敦、巴黎或紐約通常要價三十五英鎊、四十歐元或四十五美元，而飲者合理地懷疑自己被敲了竹槓。多數情況下並沒有。這個倍數是算術的結果，之所以發生，是因為鏈上的每一環都是對「自己被收取的價格」抽成，而不是對原始價格抽成。" } },

        { t:"table",
          caption:{ en:"How a ¥2,500 bottle becomes a $45 bottle", ja:"二千五百円の一本が四十五ドルとなるまで", zh:"一支兩千五百日圓的酒如何變成四十五美元" },
          cols:[ { en:"Step", ja:"段", zh:"環節" },
                 { en:"What it adds", ja:"加えるもの", zh:"它加上什麼" },
                 { en:"Why", ja:"理由", zh:"為什麼" } ],
          rows:[
            [ { en:"Brewery to exporter", ja:"蔵から輸出者へ", zh:"酒藏到出口商" },
              { en:"a modest margin", ja:"控えめな利", zh:"一筆不大的利潤" },
              { en:"Export paperwork, label translation, sometimes a different label design entirely for the market.", ja:"輸出の書類、札の翻訳、時にはその市のためのまったく異なる札の意匠。", zh:"出口文件、酒標翻譯，有時是為該市場另行設計的一整套酒標。" } ],
            [ { en:"Refrigerated freight", ja:"冷蔵輸送", zh:"冷藏運輸" },
              { en:"real and unavoidable", ja:"実であり避けえぬ", zh:"真實且不可避免" },
              { en:"A reefer container costs several times a dry one, and a shipper who saves that money is selling you a bottle that has crossed the equator warm.", ja:"冷蔵のコンテナは常のそれの数倍する。そしてその金を惜しむ荷主は、赤道を温いまま越えた一本をあなたに売っている。", zh:"冷藏貨櫃的成本是普通貨櫃的數倍；而省下這筆錢的貨主，賣給你的是一支在溫熱狀態下橫越赤道的酒。" } ],
            [ { en:"Duty and excise", ja:"関税と酒税", zh:"關稅與酒稅" },
              { en:"varies enormously by country", ja:"国によりきわめて大きく異なる", zh:"因國而異，差距極大" },
              { en:"Sake is usually taxed as \"other fermented beverage\" or as wine, at rates set with no thought for it. In some markets this is the single largest addition.", ja:"清酒はたいてい「その他の醸造酒」あるいは葡萄酒として、それを念頭に置かずに定められた率で課される。ある市においては、これが最大の加算である。", zh:"清酒通常被課以「其他釀造酒」或葡萄酒的稅率，而那些稅率的訂定完全沒有考慮到它。在某些市場，這是最大的一筆加項。" } ],
            [ { en:"Importer margin", ja:"輸入者の利", zh:"進口商利潤" },
              { en:"applied to the landed cost", ja:"陸揚げ費用に対して", zh:"對到岸成本抽成" },
              { en:"The importer holds stock, insures it, refrigerates it, and carries the risk of a category most retailers do not understand.", ja:"輸入者は在庫を抱え、それに保険をかけ、冷蔵し、ほとんどの小売が解さぬ区分の危うさを負う。", zh:"進口商囤貨、投保、冷藏，並承擔一個多數零售商並不理解的品類的風險。" } ],
            [ { en:"Distributor margin", ja:"卸の利", zh:"通路商利潤" },
              { en:"applied to the importer's price", ja:"輸入者の値に対して", zh:"對進口商價格抽成" },
              { en:"In markets with a three-tier system this link is legally mandatory and cannot be skipped, whatever anyone thinks of it.", ja:"三層の仕組みをもつ市においては、この環は法によって必須であり、誰がそれをいかに思おうと飛ばしえない。", zh:"在採行三層制的市場，這一環在法律上是強制的，不論任何人怎麼看它，都無法跳過。" } ],
            [ { en:"Retail or restaurant margin", ja:"小売・飲食の利", zh:"零售或餐飲利潤" },
              { en:"applied to everything above", ja:"上のすべてに対して", zh:"對以上一切抽成" },
              { en:"A restaurant multiplies its buying price, so every yen added earlier is multiplied again at the end. This is why the same bottle on a wine list looks absurd next to its shop price.", ja:"料理屋は仕入れの値に掛ける。ゆえに先に加えられたいずれの円も、最後にふたたび掛けられる。同じ一本が品書きの上で、店の値の隣に置くと馬鹿げて見える理由がこれである。", zh:"餐廳是在進貨價上乘倍數，因此先前加上的每一日圓，最後都會再被乘一次。這正是為什麼同一支酒出現在酒單上時，跟它的店頭價擺在一起會顯得荒謬。" } ]
          ] },

        { t:"panel", tint:"snow",
          title:{ en:"What this means when you buy abroad", ja:"海の外で買うとき、これが意味すること", zh:"這對你在國外購買意味著什麼" },
          body:[
            { t:"ul", items:[
              { en:"Buy from an importer who refrigerates. The single largest determinant of what an exported bottle tastes like is whether it was ever warm, and a specialist shop will tell you straight away if you ask.",
                ja:"冷蔵する輸入者から買われたい。輸出された一本がいかなる味であるかを最も大きく定めるのは、それがかつて温くなったか否かである。専門店は、尋ねれば直ちに答える。",
                zh:"向會冷藏的進口商購買。決定一支出口酒嘗起來如何的最大單一因素，是它有沒有曾經變溫過；而專門店只要你一問就會直接告訴你。" },
              { en:"Adjust the ladder, do not abandon it. The bands on this page still work abroad — they are just multiplied. The bottle that would be ¥2,000 in Japan is still the band most people should live in, whatever the local currency says.",
                ja:"梯子を捨てるのではなく、目盛りを合わせられたい。この頁の帯は海の外でも働く。ただ掛けられているだけである。日本で二千円であろう一本は、その土地の通貨が何と述べようと、なおほとんどの人が住むべき帯である。",
                zh:"調整這道階梯，而不是丟掉它。本頁的價格帶在國外依然成立——只是被乘上了倍數。那支在日本會是兩千日圓的酒，不論當地貨幣怎麼標，仍然是多數人該定居的價格帶。" },
              { en:"Local brewing changes the arithmetic. Sake brewed in your own country skips freight, duty and one or two margins, and the best of it now competes on quality rather than only on price. That is the most interesting thing happening to sake outside Japan.",
                ja:"土地での醸造は算術を変える。自らの国で醸された酒は、輸送と関税と一つか二つの利を飛ばす。そしてその最良のものは今や、値のみならず質において競う。それが、日本の外で日本酒に起きている最も面白いことである。",
                zh:"在地釀造改變了這道算術。在你自己國家釀的清酒省掉了運費、關稅與一到兩層利潤，而其中最好的如今已在品質上、而不只是在價格上競爭。那是日本之外的清酒界正在發生的最有趣的事。" }
            ] }
          ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"industry.html\">Industry &amp; Trade</a> for the cost stack and the channels, <a href=\"storage.html\">Buying &amp; Storage</a> for judging a shop, <a href=\"world.html\">Sake Beyond Japan</a> for brewing outside Japan, <a href=\"start.html\">Where to Start</a> for what to actually buy first.",
          ja:"関連——原価の積み上げと流通は<a href=\"industry.html\">産業と流通</a>、店を判ずることは<a href=\"storage.html\">購入と保存</a>、日本の外での醸造は<a href=\"world.html\">世界の酒造り</a>、まず何を買うべきかは<a href=\"start.html\">始め方</a>。",
          zh:"相關：成本結構與通路見<a href=\"industry.html\">產業與貿易</a>；如何判斷一家店見<a href=\"storage.html\">選購與保存</a>；日本以外的釀造見<a href=\"world.html\">日本以外的釀造</a>；第一支該買什麼見<a href=\"start.html\">從何開始</a>。" } }
      ] },

    { t:"related", items:[
      { href:"milling.html", why:{ en:"What the extra polishing actually removes, and how slowly.", ja:"余分な精米が実際に何を取り除き、どれほど遅いか。", zh:"多磨掉的到底是什麼，以及有多慢。" } },
      { href:"batch.html", why:{ en:"The rice arithmetic the prices sit on top of.", ja:"値がその上に座っている、米の算術。", zh:"價格所坐落其上的那道米的算術。" } },
      { href:"industry.html", why:{ en:"Where the money in a bottle actually goes.", ja:"一本の代が実際にどこへ行くか。", zh:"一瓶酒的錢實際上流向哪裡。" } },
      { href:"storage.html", why:{ en:"How not to waste what you paid for.", ja:"払ったものを無駄にせぬ方法。", zh:"怎麼不要浪費掉你付出去的錢。" } }
    ] }
  ]
};


/* ---- ------------------------------------------- cocktails */
SAKE.pages["cocktails"] = {
  kicker: { en: "Drinking · 09", ja: "飲む · 09", zh: "品飲 · 09" },
  title:  { en: "Mixing & Cooking", ja: "割る・混ぜる・料理する", zh: "調飲與入菜" },
  jp: "カクテル・割り方・料理酒",
  lede: {
    en: "Two uses of sake sit outside the reverent tasting-glass tradition and are both far older than it: diluting it, and cooking with it. Japanese drinkers have been mixing sake with hot water, fruit and other drinks for centuries, and every Japanese kitchen has a bottle of it beside the soy sauce for reasons that are chemical rather than sentimental. Neither is a debasement. What is worth avoiding is spending daiginjō money on something that will be buried under lime.",
    ja: "日本酒には、うやうやしい利き猪口の伝統の外にある二つの使い方があり、そのいずれもが、その伝統よりはるかに古い——割ることと、料理に使うことである。日本の飲み手は何世紀にもわたり、酒を湯や果実や他の酒と合わせてきた。そして日本の台所にはどこでも、醤油の隣に酒の瓶がある。理由は情緒ではなく化学である。どちらも堕落ではない。避けるべきなのは、ライムの下に埋もれるものに大吟醸の金を払うことである。",
    zh: "清酒有兩種用法落在恭敬的品飲杯傳統之外，而兩者都比那個傳統古老得多：稀釋它，以及用它入菜。日本的飲者數世紀以來一直把酒兌熱水、兌果物、兌其他酒；而每一個日本廚房的醬油旁邊都有一瓶清酒，理由是化學而非情懷。兩者都不是墮落。真正該避免的，是把大吟釀的錢花在一杯終將被萊姆掩埋的東西上。"
  },
  body: [

    { t:"section", id:"principles",
      title:{ en:"Principles for mixing", ja:"割る際の原則", zh:"調飲的原則" }, jp:"考え方",
      body:[
        { t:"ul", items:[
          { en:"<strong>Mix the sake that is built for it.</strong> A firm junmai or a honjōzō at 15–16% has body, acidity and enough savour to survive dilution. A delicate daiginjō does not — its whole value is a fragile top note, and mixing it destroys exactly what you paid for.",
            ja:"<strong>そのために造られた酒を使うこと。</strong>15〜16%の骨のある純米や本醸造には、割られても残る厚みと酸と旨味がある。繊細な大吟醸にはない。その価値のすべては脆い上立ち香にあり、混ぜればまさに支払った当のものが消える。",
            zh:"<strong>用為此而生的酒。</strong>15–16% 的結實純米或本釀造，具備足以承受稀釋的酒體、酸度與旨味。纖細的大吟釀則沒有——它的全部價值在於脆弱的上層香氣，混合正好毀掉你所付錢購買的東西。" },
          { en:"<strong>Sake brings umami, not just alcohol.</strong> This is what makes it different from vodka or gin in a mixed drink: amino acids and succinic acid give a savoury depth that the rest of the drink can be built around, rather than a neutral base.",
            ja:"<strong>酒はアルコールだけでなく旨味を持ち込む。</strong>混ぜ物においてウォッカやジンと異なるのはここである。アミノ酸とコハク酸が旨味の奥行きを与え、中立の土台ではなく、そのまわりに一杯を組み立てられる核になる。",
            zh:"<strong>清酒帶來的不只是酒精，還有旨味。</strong>這正是它在調飲中與伏特加或琴酒不同之處：胺基酸與琥珀酸提供了鹹鮮的深度，讓整杯酒可以圍繞它建構，而非把它當成中性基底。" },
          { en:"<strong>Its alcohol is low, so treat it as a wine, not a spirit.</strong> A sake cocktail is usually built at wine strength, closer to a spritz than to a martini. Doubling the sake to compensate makes a flabby drink; adding a spirit alongside it usually works better.",
            ja:"<strong>アルコールは低い。蒸留酒ではなくワインとして扱うこと。</strong>日本酒のカクテルはたいていワインの強さで組み立てられ、マティーニよりスプリッツに近い。埋め合わせに酒を倍にすれば締まりのない一杯になる。蒸留酒を少量添えるほうが、たいていうまくいく。",
            zh:"<strong>它酒精度低，請當葡萄酒而非烈酒看待。</strong>清酒調飲通常以葡萄酒的強度來構築，比起馬丁尼更接近 spritz。為補強而把清酒加倍只會做出鬆散的一杯；在旁邊加一點烈酒通常效果更好。" },
          { en:"<strong>Acid and salt help more than sugar.</strong> Sake is already faintly sweet and low in acid. Citrus, shiso, umeboshi, a saline rim or a splash of brine tend to make a sake drink snap into focus; syrup tends to flatten it.",
            ja:"<strong>砂糖より、酸と塩が効く。</strong>日本酒はもともとかすかに甘く、酸が低い。柑橘、紫蘇、梅干し、塩の縁取り、あるいは少量の塩水は、日本酒の一杯の輪郭を立ち上がらせる。シロップは平板にしがちである。",
            zh:"<strong>酸與鹽比糖更有幫助。</strong>清酒本就微甜且低酸。柑橘、紫蘇、梅干、杯緣抹鹽或少許鹽水，往往能讓一杯清酒調飲瞬間聚焦；糖漿則傾向讓它變得平板。" }
        ] }
      ]
    },

    { t:"section", id:"traditional",
      title:{ en:"The traditional dilutions", ja:"伝統的な割り方", zh:"傳統的兌法" }, jp:"割り酒",
      body:[
        { t:"defs", items:[
          { term:{en:"Oyuwari",ja:"お湯割り",zh:"熱水兌"}, jp:"お湯割り", romaji:"oyuwari",
            def:{en:"Sake with hot water, typically seven parts sake to three of water. Common in the north in deep winter, and a genuinely good way to open up a heavy junmai without pushing the alcohol. Pour the water in first, then the sake, so the two mix without stirring.",
              ja:"日本酒を湯で割る。おおむね酒七に湯三。真冬の北国でよく飲まれ、重い純米をアルコールを立てずに開かせる、実によい方法である。先に湯を入れ、あとから酒を注ぐと、かき混ぜずとも混ざる。",
              zh:"清酒兌熱水，一般為酒七比水三。在深冬的北國常見，是讓厚重純米舒展開來而不凸顯酒精的好方法。先倒熱水再注酒，兩者無需攪拌便會混合。"} },
          { term:{en:"Mizuwari and sake rocks",ja:"水割り・ロック",zh:"水割與加冰"}, jp:"水割り・ロック",
            def:{en:"Cold water or a single large ice cube. Works best with genshu at 18–20%, which is what it was designed for; a 15% sake on the rocks becomes thin as the ice melts.",
              ja:"冷水、あるいは大きな氷ひとつ。18〜20%の原酒に最も向き、そもそもそのために生まれた飲み方である。15%の酒を氷で割れば、溶けるにつれて痩せていく。",
              zh:"冷水，或一顆大冰塊。最適合 18–20% 的原酒，這本就是為它而生的喝法；15% 的酒加冰，會隨冰融而變得單薄。"} },
          { term:{en:"Hire-zake",ja:"ひれ酒",zh:"鰭酒"}, jp:"鰭酒", romaji:"hirezake",
            def:{en:"A grilled dried fugu fin steeped in hot sake, covered, then briefly set alight to burn off the raw alcohol. Deeply savoury and smoky, an ancient bar-counter ritual, and one of the few cases where the additive is a fish.",
              ja:"炙った河豚の干した鰭を熱燗に浸し、蓋をして蒸らし、火を点けて酒精を飛ばす。旨味と燻香が深く、古くからの酒場の作法であり、加えるものが魚である稀な例である。",
              zh:"將烤過的河豚乾鰭浸入熱酒中加蓋燜香，再短暫點火燒去生酒精味。鹹鮮而帶煙燻感，是古老的酒場儀式，也是少數以魚作為添加物的例子。"} },
          { term:{en:"Tamago-zake",ja:"卵酒",zh:"蛋酒"}, jp:"卵酒",
            def:{en:"Sake warmed with beaten egg and sugar, drunk as a cold remedy. It is not a medicine, but it is an excellent hot drink and its long survival suggests people knew that.",
              ja:"溶き卵と砂糖を加えて温めた酒。風邪の手当てとして飲まれる。薬ではないが、温かい飲み物としては優れており、長く残ってきたことがそれを示している。",
              zh:"加入蛋液與糖溫熱的清酒，作為感冒時的偏方飲用。它不是藥，但確實是一杯出色的熱飲——它長久流傳這件事本身，就說明了人們明白這一點。"} },
          { term:{en:"Umeshu and fruit steeps",ja:"梅酒・果実酒",zh:"梅酒與果實酒"}, jp:"果実酒",
            def:{en:"Green ume steeped with sugar in sake rather than shōchū gives a softer, rounder plum liqueur. Note that Japanese law restricts home steeping in certain drinks and quantities; the commercial <em>nihonshu-jikomi umeshu</em> category exists precisely because sake-based plum liqueur is worth having.",
              ja:"青梅を砂糖とともに、焼酎ではなく日本酒に漬けると、より柔らかく丸い梅酒になる。日本の法では、家庭での漬け込みに酒類と分量の制限がある点に注意。日本酒仕込みの梅酒という商品分野が存在するのは、まさにそれが持つに値するものだからである。",
              zh:"以清酒而非燒酎浸泡青梅與糖，可得到更柔軟圓潤的梅酒。請注意日本法律對家庭浸泡所用酒類與份量設有限制；市售的「日本酒仕込梅酒」這個品類之所以存在，正因為以清酒為底的梅酒確實值得擁有。"} }
        ] }
      ]
    },

    { t:"section", id:"cocktails",
      title:{ en:"Sake in cocktails", ja:"カクテルとしての日本酒", zh:"作為調酒的清酒" }, jp:"配合",
      body:[
        { t:"p", text:{
          en:"These are proportions rather than recipes — use a junmai or honjōzō of about 15%, and adjust to your bottle. Every one of them is built so the sake is still identifiable in the finished drink.",
          ja:"以下は処方というより配合である。15%前後の純米か本醸造を用い、手元の瓶に合わせて加減すること。いずれも、仕上がった一杯のなかで酒がなお判別できるように組み立ててある。",
          zh:"以下是配比而非食譜——請使用約 15% 的純米或本釀造，並依你手上的酒調整。每一款的設計，都讓清酒在成品中仍然可辨。" } },
        { t:"table",
          cols:[{en:"Drink",ja:"名",zh:"名稱"},{en:"Build",ja:"配合",zh:"配比"},{en:"Note",ja:"注",zh:"備註"}],
          keyCol:true,
          rows:[
            [{en:"Sake & tonic",ja:"サケトニック",zh:"清酒通寧"},
             {en:"60 ml junmai, 90 ml tonic, long ice, lemon peel",ja:"純米60ml／トニック90ml／氷／レモンピール",zh:"純米 60 ml、通寧 90 ml、長冰、檸檬皮"},
             {en:"The simplest thing that works. The quinine bitterness gives the sake the edge it lacks.",ja:"最も単純で、確実に成立する。キニーネの苦みが、酒に欠けている輪郭を与える。",zh:"最簡單而確實成立的一杯。奎寧的苦味補上了清酒欠缺的稜角。"}],
            [{en:"Saketini",ja:"サケティーニ",zh:"清酒馬丁尼"},
             {en:"45 ml gin, 30 ml junmai, stirred, cucumber or shiso",ja:"ジン45ml／純米30ml／ステア／胡瓜か紫蘇",zh:"琴酒 45 ml、純米 30 ml、攪拌，佐小黃瓜或紫蘇"},
             {en:"Sake replaces the vermouth. Drier and cleaner than the original; the botanical gin and the rice are unexpectedly close relatives.",ja:"ヴェルモットの代わりに酒を用いる。原型より辛く清らかで、ボタニカルなジンと米は思いのほか近い親戚である。",zh:"以清酒取代苦艾酒。比原版更辛口潔淨；植物性的琴酒與米，是出乎意料相近的親戚。"}],
            [{en:"Nihonshu highball",ja:"日本酒ハイボール",zh:"日本酒高球"},
             {en:"60 ml genshu, 120 ml soda, heavy ice, yuzu peel",ja:"原酒60ml／炭酸120ml／氷／柚子皮",zh:"原酒 60 ml、蘇打 120 ml、大量冰塊、柚子皮"},
             {en:"Use genshu at 18–20% or it will be watery. The most food-friendly drink on this list.",ja:"18〜20%の原酒でなければ水っぽくなる。この表のなかで最も料理に合わせやすい一杯である。",zh:"務必用 18–20% 的原酒，否則會水感十足。是本表中最宜佐餐的一杯。"}],
            [{en:"Sake spritz",ja:"日本酒スプリッツ",zh:"清酒 Spritz"},
             {en:"60 ml junmai, 30 ml bitter aperitivo, 60 ml soda, orange",ja:"純米60ml／ビター系アペリティーヴォ30ml／炭酸60ml／オレンジ",zh:"純米 60 ml、苦味開胃酒 30 ml、蘇打 60 ml、柳橙"},
             {en:"The umami of the sake and the bitter orange of an Italian aperitivo work better together than either has any right to expect.",ja:"酒の旨味とイタリアのアペリティーヴォのビターオレンジは、双方が期待しうる以上によく合う。",zh:"清酒的旨味與義式開胃酒的苦橙，合得比雙方有理由期待的更好。"}],
            [{en:"Warm sake toddy",ja:"燗のトディー",zh:"溫清酒托迪"},
             {en:"90 ml junmai warmed to 45°C, 15 ml honey-yuzu, hot water to taste",ja:"45度に燗した純米90ml／柚子蜜15ml／湯適量",zh:"加熱至 45°C 的純米 90 ml、蜂蜜柚子 15 ml、熱水適量"},
             {en:"An oyuwari with a sweetener. Kimoto and yamahai sake are best here; their acidity holds up to the honey.",ja:"甘みを加えたお湯割り。生酛や山廃が最も向く。その酸が蜜に負けない。",zh:"加了甜味的熱水兌。生酛與山廢最適合此處，其酸度撐得住蜂蜜。"}],
            [{en:"Kasu flip",ja:"酒粕フリップ",zh:"酒粕 Flip"},
             {en:"45 ml junmai, 15 ml kasu syrup, whole egg, shaken hard",ja:"純米45ml／酒粕シロップ15ml／全卵／強めにシェイク",zh:"純米 45 ml、酒粕糖漿 15 ml、全蛋，用力搖盪"},
             {en:"A modern bar drink using dissolved sake lees. Rich, savoury, and a direct descendant of tamago-zake.",ja:"溶いた酒粕を使う現代のバーの一杯。濃厚で旨味があり、卵酒の直系の子孫である。",zh:"使用溶開酒粕的現代酒吧調飲。濃郁而帶旨味，是蛋酒的直系後裔。"}]
          ] },
        { t:"note", label:{en:"The sake bomb",ja:"サケボム",zh:"清酒炸彈"}, text:{
          en:"Dropping a cup of sake into a glass of beer is not a Japanese tradition and is not done in Japan. It appears to have originated among American servicemen and spread through college bars in the United States. There is nothing wrong with enjoying it — but it is not a piece of Japanese drinking culture, and describing it as one in Japan will be met with polite confusion.",
          ja:"ビールの入ったグラスに酒の杯を落とすのは日本の伝統ではなく、日本で行われてもいない。米国の軍人のあいだで生まれ、大学の酒場を通じて広まったものらしい。楽しむこと自体に問題はない。ただしそれは日本の飲酒文化の一部ではなく、日本でそう説明すれば、丁寧な戸惑いが返ってくる。",
          zh:"把一杯清酒投入啤酒杯中並非日本傳統，在日本也沒有人這麼做。它似乎源自美國軍人之間，再經由美國大學酒吧擴散。享受它本身沒有任何問題——但它並不是日本飲酒文化的一部分，在日本如此宣稱，只會換來禮貌性的困惑。" } }
      ]
    },

    { t:"section", id:"cooking",
      title:{ en:"Cooking with sake", ja:"料理に使う", zh:"入菜使用" }, jp:"料理酒",
      body:[
        { t:"p", text:{
          en:"Sake is in Japanese cooking for four measurable reasons, none of them decorative.",
          ja:"日本料理に酒が入っているのには、計測可能な四つの理由がある。いずれも飾りではない。",
          zh:"清酒進入日本料理有四個可量測的理由，沒有一個是裝飾性的。" } },
        { t:"ol", items:[
          { en:"<strong>It removes off-odours.</strong> Ethanol is volatile and carries fishy and gamey compounds away with it as it evaporates. This is why sake goes into the pan before anything else with fish.",
            ja:"<strong>臭みを取る。</strong>エタノールは揮発性で、蒸発するときに魚や肉の生臭い成分を連れて飛ぶ。魚を扱うとき、何よりも先に酒を鍋に入れるのはこのためである。",
            zh:"<strong>去除異味。</strong>乙醇具揮發性，蒸發時會帶走魚腥與肉羶的化合物。這正是處理魚類時，清酒總是最先下鍋的原因。" },
          { en:"<strong>It tenderises.</strong> Alcohol and the organic acids in sake loosen protein structure, so meat and fish stay softer through cooking.",
            ja:"<strong>柔らかくする。</strong>アルコールと酒に含まれる有機酸がたんぱく質の構造をゆるめ、加熱しても肉や魚が硬くなりにくい。",
            zh:"<strong>使之柔嫩。</strong>酒精與清酒中的有機酸能鬆弛蛋白質結構，使肉與魚在烹調過程中保持柔軟。" },
          { en:"<strong>It carries flavour into the food.</strong> Alcohol dissolves aroma compounds that water cannot, and penetrates food faster than water does, which is why it goes in early rather than late.",
            ja:"<strong>味を食材に運ぶ。</strong>アルコールは水が溶かせない香気成分を溶かし、水より速く食材に浸みる。あとではなく早い段階で加えるのはそのためである。",
            zh:"<strong>把風味帶進食材。</strong>酒精能溶解水無法溶解的香氣成分，且滲入食材比水更快——這正是它要早加而非晚加的原因。" },
          { en:"<strong>It adds umami and a little sweetness.</strong> Amino acids, peptides and residual sugars, all already present. This is the part that cannot be replaced by any other alcohol.",
            ja:"<strong>旨味とわずかな甘みを加える。</strong>アミノ酸、ペプチド、残る糖——いずれもすでにそこにある。他のどんな酒でも置き換えられないのはこの部分である。",
            zh:"<strong>增添旨味與些許甘甜。</strong>胺基酸、胜肽與殘糖，全都本已存在。這是任何其他酒精都無法取代的部分。" }
        ] },
        { t:"grid", cols:2, cells:[
          { h:{en:"Ryōrishu",ja:"料理酒",zh:"料理酒"}, jp:"加塩",
            d:{en:"Purpose-made cooking sake, usually with 2–3% salt added so it is legally food rather than an alcoholic drink and can be sold without a liquor licence and at lower tax. Perfectly good for cooking — but if you use it, salt the dish accordingly, and never drink it.",ja:"料理専用に作られた酒。多くは2〜3%の塩を加えることで、法的に酒類ではなく食品となり、酒販免許なしに、低い税で売られる。料理には十分に良いが、使うなら塩加減をそれに合わせること。そして決して飲まないこと。",zh:"專為烹調製作的酒，通常加入 2–3% 的鹽，使其在法律上屬於食品而非酒類，因而可免酒類執照販售並適用較低稅率。用來做菜完全沒問題——但使用時請據此調整鹹度，且絕不要拿來喝。"} },
          { h:{en:"Drinking sake in the pan",ja:"飲む酒を鍋に",zh:"把飲用清酒下鍋"}, jp:"無塩",
            d:{en:"An unsalted junmai gives a cleaner result and lets you control the seasoning yourself. It does not need to be expensive: a cheap junmai is a better cooking sake than a good daiginjō, whose aroma boils off in seconds and whose price is entirely wasted.",ja:"塩を加えていない純米のほうが清らかに仕上がり、味付けを自分で決められる。高価である必要はない。安い純米は良い大吟醸よりも優れた料理酒である。大吟醸の香りは数秒で飛び、その値はまるごと無駄になる。",zh:"未加鹽的純米能做出更潔淨的成果，也讓你自行掌控調味。不必昂貴：便宜的純米是比高級大吟釀更好的料理酒——大吟釀的香氣數秒即揮發殆盡，其價格完全白費。"} }
        ] },
        { t:"tiny", text:{
          en:"A note on quantities: a tablespoon of sake per portion of fish, two for a braise, a splash into rice before cooking, and a generous pour to deglaze. If you can taste the alcohol in the finished dish, it went in too late.",
          ja:"分量の目安——魚一人前に大さじ一、煮物に大さじ二、飯を炊く前に少量、そして鍋肌を洗うときはたっぷりと。仕上がった料理にアルコールを感じるなら、入れるのが遅すぎたのである。",
          zh:"份量參考：每份魚一大匙，燉煮兩大匙，煮飯前少許，洗鍋（deglaze）時則不吝倒入。若成品嚐得出酒精味，代表加得太晚了。" } }
      ]
    },

{ t:"section", id:"components",
      title:{ en:"Making the components", ja:"素材を作る", zh:"自製材料" }, jp:"シロップと下拵え",
      body:[
        { t:"p", text:{
          en:"Three preparations turn sake and its by-products into bar ingredients. All keep for a week or two refrigerated, and all are more interesting than anything you can buy.",
          ja:"三つの下拵えが、日本酒とその副産物をバーの素材に変える。いずれも冷蔵で一、二週間もち、いずれも買えるどんなものより面白い。",
          zh:"三種備料能把清酒及其副產品變成吧檯素材。三者冷藏皆可放一至兩週，也都比任何買得到的東西更有意思。" } },
        { t:"defs", items:[
          { term:{en:"Kasu syrup",ja:"酒粕シロップ",zh:"酒粕糖漿"}, jp:"酒粕シロップ",
            def:{en:"Whisk 60 g of sake lees into 200 ml of hot water until smooth, add 200 g of sugar, warm to dissolve, then strain through a fine sieve. Thick, cloudy, savoury-sweet and faintly alcoholic. Use 15 ml in a shaken drink where you would otherwise use simple syrup; it brings body and a yeasty depth that no other sweetener does.",
              ja:"酒粕60グラムを湯200ミリリットルに溶き、砂糖200グラムを加えて温めて溶かし、細かい濾し器で漉す。とろりと濁り、旨味を伴う甘さと、かすかな酒精をもつ。シェイクする一杯にシンプルシロップの代わりに15ミリリットル。他のどんな甘味料にもない厚みと酵母の奥行きをもたらす。",
              zh:"把 60 公克酒粕攪入 200 毫升熱水至滑順，加入 200 公克糖，加熱溶解後以細篩過濾。質地濃稠、混濁，甜中帶鹹鮮，並有淡淡酒精感。在搖盪類調飲中以 15 毫升取代糖漿使用；它帶來的酒體與酵母深度，是其他任何甜味劑都給不了的。"} },
          { term:{en:"Kōji syrup",ja:"麹シロップ",zh:"麴糖漿"}, jp:"麹シロップ",
            def:{en:"Kōji amazake, reduced by half over low heat and strained. No sugar is added — the sweetness is all glucose the mould made. Cleaner and less savoury than kasu syrup, and non-alcoholic, which makes it the basis of the best zero-proof drinks on this page.",
              ja:"麹甘酒を弱火で半量まで煮詰め、漉したもの。砂糖は加えない。甘さはすべて、菌が作ったブドウ糖である。酒粕シロップより清らかで旨味は控えめ、そしてアルコールを含まない。本頁で最も良いノンアルコールの一杯の土台となるのはこれである。",
              zh:"把麴甘酒以小火收至一半後過濾。不加糖——甜味全來自菌所製造的葡萄糖。比酒粕糖漿更潔淨、鹹鮮較少，且不含酒精，是本頁最出色的無酒精調飲的基底。"} },
          { term:{en:"Shiso or yuzu cordial",ja:"紫蘇・柚子コーディアル",zh:"紫蘇／柚子糖漿"}, jp:"香りの素",
            def:{en:"Equal weights of sugar and water, brought to a simmer, poured over a large handful of red shiso leaves or the zest of three yuzu, left to cool, then strained. Sake has low acid and few high notes, and a cordial supplies both at once.",
              ja:"砂糖と水を同量、煮立てて、赤紫蘇の葉ひとつかみ、あるいは柚子三個分の皮に注ぎ、冷めるまで置いて漉す。日本酒は酸が低く、高い音域が少ない。コーディアルはその二つを同時に補う。",
              zh:"糖與水等重煮沸，沖入一大把紅紫蘇葉或三顆柚子的皮，靜置放涼後過濾。清酒酸度低、高音域少，而這種糖漿一次補上這兩者。"} }
        ] }
      ]
    },

    { t:"section", id:"zero",
      title:{ en:"Without the alcohol", ja:"アルコールなしで", zh:"不含酒精" }, jp:"ノンアルコール",
      body:[
        { t:"p", text:{
          en:"Japan has a strong non-alcoholic drinking culture, driven partly by an extremely strict drink-driving law, and the kōji family provides better material for it than almost any other tradition.",
          ja:"日本にはノンアルコールの飲酒文化が根づいている。きわめて厳しい飲酒運転の法がその一因である。そして麹の一族は、他のほとんどどの伝統よりも、そのための良い素材を提供する。",
          zh:"日本擁有相當成熟的無酒精飲用文化，其成因之一是極其嚴格的酒駕法規；而麴的家族為此提供的素材，勝過幾乎任何其他傳統。" } },
        { t:"table",
          cols:[{en:"Drink",ja:"名",zh:"名稱"},{en:"Build",ja:"配合",zh:"配比"},{en:"Note",ja:"注",zh:"備註"}],
          keyCol:true,
          rows:[
            [{en:"Amazake soda",ja:"甘酒ソーダ",zh:"甘酒蘇打"},
             {en:"45 ml kōji amazake, 120 ml soda, lemon, plenty of ice",ja:"麹甘酒45ml／炭酸120ml／レモン／氷たっぷり",zh:"麴甘酒 45 ml、蘇打 120 ml、檸檬、大量冰塊"},
             {en:"Cloudy, gently sweet, genuinely refreshing cold. The best zero-proof drink in the Japanese repertoire and almost unknown outside it.",ja:"濁り、穏やかに甘く、冷やせば本当に爽やかである。日本の持ち札のなかで最良のノンアルコールの一杯であり、その外ではほとんど知られていない。",zh:"混濁、溫和甘甜，冰飲時確實爽口。是日本曲目中最出色的無酒精飲品，在其之外卻幾乎無人知曉。"}],
            [{en:"Amazake with ginger",ja:"生姜甘酒",zh:"薑味甘酒"},
             {en:"150 ml kōji amazake warmed, grated ginger, pinch of salt",ja:"麹甘酒150mlを温め／生姜おろし／塩ひとつまみ",zh:"麴甘酒 150 ml 溫熱、薑泥、一小撮鹽"},
             {en:"The winter form. The salt is not optional — it is what stops the sweetness cloying.",ja:"冬の姿である。塩は省けない。甘さがくどくなるのを止めているのがそれである。",zh:"冬季版本。鹽不可省——正是它讓甜味不至於膩口。"}],
            [{en:"Kōji lemonade",ja:"麹レモネード",zh:"麴檸檬水"},
             {en:"30 ml kōji syrup, 25 ml lemon juice, 100 ml water, ice",ja:"麹シロップ30ml／レモン汁25ml／水100ml／氷",zh:"麴糖漿 30 ml、檸檬汁 25 ml、水 100 ml、冰"},
             {en:"The glucose gives a rounder body than sugar syrup does, and the acid keeps it from being heavy.",ja:"ブドウ糖は砂糖のシロップより丸い厚みを与え、酸がそれを重くさせない。",zh:"葡萄糖帶來比糖漿更圓潤的酒體，而酸則讓它不致厚重。"}],
            [{en:"Shio-kōji tonic",ja:"塩麹トニック",zh:"鹽麴通寧"},
             {en:"1 tsp shio-kōji stirred into 150 ml tonic, cucumber ribbon",ja:"塩麹小さじ一／トニック150ml／胡瓜のリボン",zh:"鹽麴 1 小匙拌入 150 ml 通寧、小黃瓜片"},
             {en:"Odd on paper and very good in the glass: saline, bitter and savoury all at once. Strain it if the texture bothers you.",ja:"紙の上では奇妙だが、杯のなかではきわめて良い。塩味と苦味と旨味が同時に来る。質感が気になるなら漉すこと。",zh:"寫在紙上很怪，倒進杯裡卻極好：鹹、苦與鹹鮮同時到位。若在意質地就過濾一下。"}]
          ] },
        { t:"note", label:{en:"Non-alcoholic sake",ja:"ノンアルコール日本酒",zh:"無酒精清酒"}, text:{
          en:"Dealcoholised sake exists and is improving, but it faces a harder problem than dealcoholised wine: sake has no tannin and no strong acid to hold the structure once the ethanol is gone, so what remains can be thin and sweet. The better products in this category tend to be built from the ground up as low-alcohol brews rather than stripped afterwards, and kōji amazake — which was never alcoholic in the first place — remains the more satisfying answer.",
          ja:"脱アルコールの日本酒は存在し、良くなりつつあるが、脱アルコールのワインより難しい問題を抱えている。日本酒にはタンニンも強い酸もなく、エタノールが去ったあとに骨格を保つものがない。残るものは痩せて甘くなりうる。この分野で良い製品は、あとから抜くのではなく、はじめから低アルコールとして設計されたものが多い。そしてそもそもアルコールを含まなかった麹甘酒が、いまなお満たされる答えであり続けている。",
          zh:"去酒精清酒確實存在，且正在進步，但它面對的問題比去酒精葡萄酒更難：清酒沒有單寧、也沒有強酸，乙醇一旦離開便無物支撐結構，剩下的可能既單薄又甜。這個類別中較好的產品，多半是從一開始就設計為低酒精釀造，而非事後抽除；而本來就不含酒精的麴甘酒，仍是更令人滿足的答案。" } }
      ]
    },

{ t:"section", id:"specs",
      title:{ en:"Builds, with measurements", ja:"分量のあるレシピ", zh:"有份量的配方" }, jp:"実際の割合",
      body:[
        { t:"figure",
          caption:{
            en:"The same seven builds drawn to scale, so the arithmetic is visible. Read the sake band and the rule in the note below becomes obvious: where sake stands in for a fortified wine — the negroni, the saketini — it takes a little under half the glass; where it is the base spirit it takes two thirds or more, because at fifteen per cent it cannot carry a drink from a third of the volume the way a spirit can. The percentage at the right is how much of the finished glass is sake, before ice.",
            ja:"同じ七つの配合を縮尺どおりに描いたもの。算術が目に見えるようになる。日本酒の帯を読めば、下の注の規則は自明になる——酒精強化ワインの代わりを務めるとき（ネグローニ、サケティーニ）、日本酒は杯の半分弱を取る。基酒を務めるときは三分の二以上を取る。十五度では、蒸留酒のように容量の三分の一から一杯を支えることができないからである。右の百分率は、氷を入れる前の一杯に占める日本酒の割合である。",
            zh:"同樣這七份配方按比例畫出，算術便看得見了。讀清酒那一段色帶，下方註記中的規則就變得顯而易見——當清酒代替加烈酒（內格羅尼、清酒馬丁尼）時，它占杯中略少於一半；當它擔任基酒時，則占三分之二以上，因為十五度的酒無法像烈酒那樣，用三分之一的容量撐起一整杯。右側的百分比，是加冰之前成品杯中清酒所占的比例。" },
          svg: function (lang, L) {
            var W = 760, H = 376, X0 = 206, X1 = 668, Y0 = 66, RH = 34, MAX = 200;
            function px(v) { return X0 + v / MAX * (X1 - X0); }
            var cats = {
              sake:   { f:"#C0AF8E", n:{ en:"sake", ja:"日本酒", zh:"清酒" } },
              spirit: { f:"#DDE5E8", n:{ en:"spirit", ja:"蒸留酒", zh:"烈酒" } },
              bitter: { f:"#CBB3AC", n:{ en:"bitter", ja:"ビター", zh:"苦味酒" } },
              citrus: { f:"#DCE3D6", n:{ en:"citrus", ja:"柑橘", zh:"柑橘" } },
              sweet:  { f:"#E7DFD2", n:{ en:"sweet", ja:"甘味", zh:"甜味" } },
              soda:   { f:"#EDF1F2", n:{ en:"soda or water", ja:"炭酸・水", zh:"氣泡水或水" } },
              rich:   { f:"#F0E8DA", n:{ en:"egg, butter", ja:"卵・バター", zh:"蛋、奶油" } }
            };
            var order = ["sake", "spirit", "bitter", "citrus", "sweet", "soda", "rich"];
            var drinks = [
              { jp:"日本酒ハイボール", n:{ en:"sake highball", ja:"ハイボール", zh:"清酒高球" },
                p:[["sake", 60], ["soda", 120]] },
              { jp:"サケティーニ", n:{ en:"saketini", ja:"サケティーニ", zh:"清酒馬丁尼" },
                p:[["sake", 30], ["spirit", 45]] },
              { jp:"日本酒スプリッツ", n:{ en:"sake spritz", ja:"スプリッツ", zh:"清酒斯普利茲" },
                p:[["sake", 75], ["bitter", 25], ["soda", 50]] },
              { jp:"柚子サワー", n:{ en:"yuzu sour", ja:"柚子サワー", zh:"柚子沙瓦" },
                p:[["sake", 75], ["citrus", 20], ["sweet", 15]] },
              { jp:"日本酒ネグローニ", n:{ en:"sake negroni", ja:"ネグローニ", zh:"清酒內格羅尼" },
                p:[["sake", 45], ["spirit", 30], ["bitter", 30]] },
              { jp:"粕フリップ", n:{ en:"kasu flip", ja:"粕フリップ", zh:"酒粕蛋蜜" },
                p:[["sake", 60], ["sweet", 20], ["rich", 50]] },
              { jp:"バター燗", n:{ en:"hot buttered sake", ja:"バター燗", zh:"奶油溫清酒" },
                p:[["sake", 120], ["rich", 10]] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* key */
            var kx = 30, i, j;
            for (i = 0; i < order.length; i++) {
              var c = cats[order[i]], lab = L(c.n);
              s += '<rect x="' + kx + '" y="30" width="12" height="12" fill="' + c.f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (kx + 18) + '" y="40" font-size="9.5" fill="#8B857C">' + lab + '</text>';
              kx += 18 + lab.length * (lab.charCodeAt(0) > 0x2E80 ? 9.5 : 5.2) + 22;
            }
            var BOT = Y0 + drinks.length * RH;
            var g;
            for (g = 50; g <= MAX; g += 50) {
              s += '<line x1="' + px(g) + '" y1="' + (Y0 - 8) + '" x2="' + px(g) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(g) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            for (i = 0; i < drinks.length; i++) {
              var d = drinks[i], y = Y0 + i * RH, x = X0, tot = 0, sk = 0;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 14) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + d.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 27) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(d.n) + '</text>';
              for (j = 0; j < d.p.length; j++) { tot += d.p[j][1]; if (d.p[j][0] === "sake") sk = d.p[j][1]; }
              for (j = 0; j < d.p.length; j++) {
                var wpx = d.p[j][1] / MAX * (X1 - X0);
                s += '<rect x="' + x.toFixed(1) + '" y="' + (y + 3) + '" width="' + wpx.toFixed(1) + '" height="20" fill="' + cats[d.p[j][0]].f + '" stroke="#CDC6B9"/>';
                if (wpx > 34) s += '<text x="' + (x + wpx / 2).toFixed(1) + '" y="' + (y + 17) + '" text-anchor="middle" font-size="9" fill="#55504A">' + d.p[j][1] + '</text>';
                x += wpx;
              }
              s += '<text x="' + (X1 + 16) + '" y="' + (y + 17) + '" font-size="11.5" fill="#7C6B52">' + Math.round(sk / tot * 100) + '%</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "ミリリットル・氷を除く" : lang === "zh" ? "毫升・不含冰" : "MILLILITRES, BEFORE ICE") + '</text>';
            s += '<text x="' + (X1 + 16) + '" y="' + (Y0 - 12) + '" font-size="9" letter-spacing="1.1" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "酒の割合" : lang === "zh" ? "清酒占比" : "SAKE") + '</text>';
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "氷の融け水は含んでいない。ステアの一杯でおよそ二割、シェイクなら三割ほど増えると見てよい。"
                  : lang === "zh" ? "未計入冰塊融水。攪拌型約再增兩成，搖盪型約再增三成。"
                  : "Melt-water is not counted: reckon on about a fifth more for a stirred drink and a third more for a shaken one.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Sake is roughly a third the strength of a spirit and carries its own body, acidity and umami, so it cannot simply be substituted volume-for-volume into a classic. These builds are written for a 15% junmai unless stated otherwise; if you are using a genshu at 18%, cut the sake by about a fifth and add that much water or ice.",
          ja:"日本酒は蒸留酒のおよそ三分の一の強さでありながら、それ自身の酒躯と酸と旨味を持つ。ゆえに古典のレシピへ、そのまま同量で置き換えることはできない。以下は断りのない限り15%の純米を前提とする。18%の原酒を使うなら、酒を五分の一ほど減らし、その分を水か氷で補うとよい。",
          zh:"清酒的強度約為烈酒的三分之一，卻自帶酒體、酸度與旨味，因此不能直接以等體積代入經典配方。以下配方除另有說明外，均以 15% 的純米為前提；若使用 18% 的原酒，請把清酒減少約五分之一，並以等量的水或冰補上。" } },

        { t:"table",
          cols:[{en:"Drink",ja:"名",zh:"名稱"},{en:"Build",ja:"配合",zh:"配方"},{en:"Method",ja:"作り方",zh:"做法"},{en:"Which sake",ja:"どの酒で",zh:"用哪種酒"}],
          rows:[
            [{en:"Sake highball",ja:"日本酒ハイボール",zh:"清酒高球"},
             {en:"60 ml sake · 120 ml soda water · lemon peel",ja:"日本酒60ml・炭酸水120ml・レモンの皮",zh:"清酒 60 ml・氣泡水 120 ml・檸檬皮"},
             {en:"Build over a tall glass of ice; add the soda last and stir once, from the bottom, one turn only.",ja:"氷を詰めたタンブラーに直接。炭酸は最後に注ぎ、底から一度だけ、一回転させる。",zh:"直接在裝滿冰的高球杯中建構；氣泡水最後注入，自底部只攪一圈。"},
             {en:"A dry junmai or honjōzō. Aromatic ginjō is wasted here — the bubbles blow the esters off.",ja:"辛口の純米か本醸造。華やかな吟醸はここでは無駄になる。泡がエステルを飛ばしてしまう。",zh:"辛口的純米或本釀造。華麗的吟釀在此浪費了——氣泡會把酯類帶走。"}],
            [{en:"Saketini",ja:"サケティーニ",zh:"清酒馬丁尼"},
             {en:"45 ml gin · 30 ml sake · cucumber ribbon",ja:"ジン45ml・日本酒30ml・胡瓜のリボン",zh:"琴酒 45 ml・清酒 30 ml・小黃瓜片"},
             {en:"Stir with plenty of ice for twenty seconds; strain into a chilled coupe.",ja:"氷を多めに二十秒ステア。冷やしたクープに漉す。",zh:"加足冰攪拌二十秒，濾入冰鎮的碟型杯。"},
             {en:"Sake replaces the vermouth. A junmai with visible acidity does this better than a delicate daiginjō.",ja:"日本酒がベルモットの座に着く。繊細な大吟醸より、酸のはっきりした純米のほうがよく働く。",zh:"清酒取代香艾酒。酸度明顯的純米比纖細的大吟釀更勝任。"}],
            [{en:"Sake spritz",ja:"日本酒スプリッツ",zh:"清酒斯普利茲"},
             {en:"75 ml sake · 25 ml bitter aperitivo · 50 ml soda · orange slice",ja:"日本酒75ml・ビター系アペリティーボ25ml・炭酸50ml・オレンジ",zh:"清酒 75 ml・苦味開胃酒 25 ml・氣泡水 50 ml・柳橙片"},
             {en:"Build in a wine glass over ice.",ja:"ワイングラスに氷を入れて直接組む。",zh:"在葡萄酒杯中加冰直接建構。"},
             {en:"A slightly sweeter junmai stands up to the bitterness better than a bone-dry one.",ja:"やや甘口の純米のほうが、辛口一辺倒より苦味に拮抗する。",zh:"稍帶甜的純米比極辛口更能抗衡苦味。"}],
            [{en:"Yuzu sour",ja:"柚子サワー",zh:"柚子沙瓦"},
             {en:"75 ml sake · 20 ml yuzu juice · 15 ml sugar syrup · pinch of salt",ja:"日本酒75ml・柚子果汁20ml・シロップ15ml・塩ひとつまみ",zh:"清酒 75 ml・柚子汁 20 ml・糖漿 15 ml・鹽少許"},
             {en:"Shake hard with ice, strain over fresh ice.",ja:"氷と強くシェイク、新しい氷に漉して注ぐ。",zh:"加冰用力搖盪，濾入新冰塊中。"},
             {en:"Anything clean. The salt is not optional — it is what stops the drink reading as a soft drink.",ja:"清らかな酒なら何でも。塩は省いてはならない。これがこの一杯を清涼飲料に見せないための要である。",zh:"任何乾淨的酒都行。鹽不是可選項——正是它讓這杯酒不至於喝起來像軟性飲料。"}],
            [{en:"Sake negroni",ja:"日本酒ネグローニ",zh:"清酒內格羅尼"},
             {en:"30 ml gin · 30 ml bitter liqueur · 45 ml junmai · orange peel",ja:"ジン30ml・ビターリキュール30ml・純米45ml・オレンジピール",zh:"琴酒 30 ml・苦味利口酒 30 ml・純米 45 ml・柳橙皮"},
             {en:"Stir over a large cube in a rocks glass.",ja:"大きな氷ひとつを入れたロックグラスでステア。",zh:"在裝有一顆大冰塊的古典杯中攪拌。"},
             {en:"Sake takes the sweet vermouth's place, so a kimoto or yamahai with real acidity carries the structure best.",ja:"日本酒がスイートベルモットの座に着くため、酸のしっかりした生酛・山廃が最も構造を支える。",zh:"清酒接替了甜香艾酒的位置，因此酸度扎實的生酛或山廢最能撐起結構。"}],
            [{en:"Kasu flip",ja:"粕フリップ",zh:"酒粕蛋蜜"},
             {en:"60 ml sake · 20 ml kasu syrup · 1 whole egg · grated nutmeg",ja:"日本酒60ml・酒粕シロップ20ml・全卵1個・ナツメグ",zh:"清酒 60 ml・酒粕糖漿 20 ml・全蛋 1 顆・現磨肉豆蔻"},
             {en:"Shake without ice first for fifteen seconds, then with ice; strain into a small wine glass.",ja:"まず氷なしで十五秒シェイクし、次に氷を入れてシェイク。小ぶりのワイングラスに漉す。",zh:"先不加冰搖盪十五秒，再加冰搖盪；濾入小型葡萄酒杯。"},
             {en:"Any sake. This is a winter drink and a good use for lees that are past their best for cooking.",ja:"どの酒でも。冬の一杯であり、料理には盛りを過ぎた粕のよい使い道である。",zh:"任何清酒皆可。這是一杯冬日飲品，也是那些已過烹調適期之酒粕的好去處。"}],
            [{en:"Amazake lassi",ja:"甘酒ラッシー",zh:"甘酒拉西"},
             {en:"100 ml kōji amazake · 100 ml yoghurt · 40 ml water · lime",ja:"米麹甘酒100ml・ヨーグルト100ml・水40ml・ライム",zh:"米麴甘酒 100 ml・優格 100 ml・水 40 ml・萊姆"},
             {en:"Blend with ice.",ja:"氷とともにブレンドする。",zh:"與冰一同攪打。"},
             {en:"No alcohol at all if the amazake is the kōji kind rather than the lees kind — check which you have.",ja:"甘酒が粕ではなく米麹のものであれば、アルコールは一切ない。どちらかを確かめること。",zh:"若甘酒是米麴製而非酒粕製，則完全不含酒精——請先確認你手上的是哪一種。"}],
            [{en:"Hot buttered sake",ja:"バター燗",zh:"奶油溫清酒"},
             {en:"120 ml sake · 1 tsp butter · 1 tsp honey · pinch of salt",ja:"日本酒120ml・バター小さじ1・蜂蜜小さじ1・塩少々",zh:"清酒 120 ml・奶油 1 小匙・蜂蜜 1 小匙・鹽少許"},
             {en:"Warm the sake to about 50 °C, whisk in the rest off the heat.",ja:"酒を50℃ほどに温め、火から外して残りを混ぜ込む。",zh:"把清酒溫至約 50 °C，離火後把其餘材料攪入。"},
             {en:"A robust junmai or a yamahai. Delicate sake disappears entirely under the butter.",ja:"骨のある純米か山廃。繊細な酒はバターの下で完全に消える。",zh:"結實的純米或山廢。纖細的酒會完全消失在奶油之下。"}]
          ] },

        { t:"note", text:{
          en:"Two rules cover most improvisation. First, sake sits where a fortified wine sits, not where a spirit sits — it will replace vermouth, sherry or a light aperitif almost anywhere, at roughly one and a half times the volume. Second, keep the total dilution lower than you would for a spirit drink: the sake is already 85% water, and a shaken sake drink that is over-diluted has nothing left in it.",
          ja:"即興のほとんどは二つの規則で足りる。第一に、日本酒は蒸留酒の位置ではなく、酒精強化ワインの位置に座る——ベルモット、シェリー、軽いアペリティフのほとんどを、およそ一・五倍の量で置き換えられる。第二に、加水は蒸留酒の一杯よりも少なく抑えること。日本酒はすでに85%が水であり、薄めすぎたシェイクの一杯には、もう何も残らない。",
          zh:"大部分即興只需兩條規則。第一，清酒的位置在加烈酒那裡，而不是烈酒那裡——它幾乎可以在任何地方取代香艾酒、雪莉或清淡的開胃酒，用量約為一點五倍。第二，總稀釋度要低於烈酒調飲：清酒本身已有 85% 是水，一杯過度稀釋的搖盪清酒調飲，裡面就什麼都不剩了。" } }
      ] },

    { t:"section", id:"kitchen-jobs",
      title:{ en:"The four jobs sake does in a pan", ja:"鍋のなかで酒が果たす四つの仕事", zh:"清酒在鍋裡做的四件事" }, jp:"料理酒の働き",
      body:[
        { t:"p", text:{
          en:"Japanese recipes call for sake constantly, and it is not there for flavour in the way wine is in a French one. It does four distinct mechanical jobs, and knowing which one a recipe wants tells you when to add it and how much it matters.",
          ja:"日本の料理は絶えず酒を求めるが、それはフランス料理におけるワインのように風味のためにあるのではない。酒は四つの異なる機械的な仕事をする。あるレシピがどれを求めているかが分かれば、いつ加えるべきか、どれほど重要かが分かる。",
          zh:"日本料理不斷要求加清酒，但它並不像法式料理裡的葡萄酒那樣是為了風味而存在。它做的是四件不同的機械性工作；知道某道食譜要的是哪一件，就知道何時該加、以及它有多重要。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Removing smell", ja:"臭みを消す", zh:"去腥" }, jp:"臭み消し", romaji:"kusami-keshi",
            meta:{ en:"Add early, and let it boil", ja:"早く加え、煮立てる", zh:"早加，並且要煮開" },
            text:{ en:"Fish and meat carry volatile amines. Alcohol dissolves them and then carries them off as it evaporates, which is why the sake in a fish preparation goes in at the start and is boiled rather than simmered gently. This is also why cooking sake is often salted — the salt is a tax device, to make it undrinkable and therefore taxable at a lower rate, but it does no harm in the pan. Real sake works better than salted cooking sake, and the difference is most obvious here.",
              ja:"魚や肉は揮発性のアミン類を帯びる。アルコールはそれを溶かし、蒸発するときに連れ去る。魚の下ごしらえの酒が最初に入れられ、静かに煮るのではなく煮立てられるのはそのためである。料理酒に塩が加えられていることが多いのもここに関わる——塩は税のための仕掛けであり、飲めなくして税率を下げるためのものだが、鍋の中では害はない。本物の酒のほうがよく働き、その差が最も明らかなのがこの用途である。",
              zh:"魚與肉帶有揮發性的胺類。酒精能溶解它們，並在蒸發時一併帶走——這正是處理魚時清酒要一開始就下、而且要煮沸而非慢燉的原因。這也關係到料理酒常加鹽：加鹽是稅務手段，讓它無法飲用因而適用較低稅率，但在鍋裡並無妨害。真正的清酒效果更好，而這個用途上的差別最為明顯。" } },
          { n:"2", title:{ en:"Tenderising", ja:"やわらかくする", zh:"軟化" }, jp:"軟化", romaji:"nanka",
            meta:{ en:"Add before cooking, and wait", ja:"加熱の前に加え、待つ", zh:"加熱前加入，並且要等" },
            text:{ en:"Alcohol and the acids in sake loosen protein structure, and a marinade of sake alone will noticeably soften a tough cut in twenty minutes. Sake lees do this far more strongly because of their residual enzymes. In both cases the effect needs contact time before heat, so a splash added to a hot pan does nothing for texture.",
              ja:"アルコールと酒の酸はたんぱく質の構造を緩め、酒だけの漬け込みでも、硬い部位は二十分で目に見えて柔らかくなる。酒粕は残存する酵素のため、これをはるかに強く行う。いずれも加熱の前に接触の時間を要するから、熱した鍋に振り入れるだけでは食感には何も起こらない。",
              zh:"酒精與清酒中的酸會鬆動蛋白質結構，光用清酒醃二十分鐘，硬部位就會明顯變軟。酒粕因殘留酵素，效果強得多。兩者都需要在加熱前有接觸時間，因此往熱鍋裡淋一圈，對口感毫無作用。" } },
          { n:"3", title:{ en:"Adding umami", ja:"旨味を足す", zh:"補旨味" }, jp:"旨味", romaji:"umami",
            meta:{ en:"Add at any point; it survives", ja:"いつ加えてもよい。残る", zh:"何時加都行；它會留下" },
            text:{ en:"Sake carries free amino acids, succinic acid and peptides that do not evaporate. This is the part of sake's contribution that survives cooking entirely, and it is why a simmered dish made with sake tastes rounder than the same dish made with water plus a splash of vinegar. A junmai contributes more of this than a honjōzō, and lees more again.",
              ja:"日本酒は遊離アミノ酸、コハク酸、ペプチドを含み、これらは蒸発しない。酒の寄与のうち、加熱を完全に生き延びる部分である。酒で作った煮物が、水に酢を少し加えて作ったものより丸く感じられる理由である。純米は本醸造よりこれを多く与え、粕はさらに多く与える。",
              zh:"清酒帶有游離胺基酸、琥珀酸與胜肽，這些都不會揮發。這是清酒的貢獻中能完整挺過加熱的部分，也是用清酒煮的燉物比用水加點醋煮的同一道菜更圓潤的原因。純米貢獻的比本釀造多，酒粕又更多。" } },
          { n:"4", title:{ en:"Glazing", ja:"照りを出す", zh:"上照" }, jp:"照り", romaji:"teri",
            meta:{ en:"Add last, and reduce", ja:"最後に加え、煮詰める", zh:"最後加入，並收汁" },
            text:{ en:"Reduced with soy and sugar or mirin, sake's sugars and amino acids brown together and produce the lacquered shine of teriyaki. Here the sake is a body and a solvent rather than a flavour, and the reduction has to happen fast at the end or the sugars burn. Mirin does more of this work than sake; the classic pairing uses both because they contribute different things.",
              ja:"醤油と砂糖、あるいは味醂とともに煮詰めれば、酒の糖とアミノ酸がともに褐変し、照り焼きの漆のような艶を生む。ここでの酒は風味ではなく、酒躯であり溶媒である。煮詰めは最後に手早く行わねば糖が焦げる。この仕事は味醂のほうが多く担う。古典が両方を用いるのは、両者の寄与が異なるからである。",
              zh:"與醬油、糖或味醂一同收汁時，清酒的糖與胺基酸會一起褐變，產生照燒那種漆器般的光澤。此處清酒扮演的是酒體與溶劑，而非風味；收汁必須在最後快速完成，否則糖會燒焦。這項工作味醂承擔得更多；經典做法兩者並用，因為它們貢獻的東西不同。" } }
        ] },

        { t:"panel", title:{ en:"What to cook with, honestly", ja:"正直なところ、何で作るか", zh:"老實說，該用什麼煮" },
          body:[
            { t:"p", text:{
              en:"An expensive daiginjō in a stew is a waste, because everything you paid for — the esters — leaves in the steam within a minute. But salted cooking sake is a genuinely inferior product, and the gap between it and a cheap drinkable junmai is larger than the price gap. The practical answer is the cheapest sake in your shop that you would be willing to drink warm: usually a futsūshu or a plain honjōzō in a large bottle. Keep it beside the stove, use it freely, and replace it every few months.",
              ja:"高価な大吟醸を煮込みに使うのは無駄である。代価を払った当のもの——エステル——は、一分のうちに湯気とともに去るからである。しかし塩を加えた料理酒は本当に劣った品であり、それと安価で飲める純米との差は、価格の差より大きい。実際的な答えは、燗にして飲んでもよいと思える範囲で店にある最も安い酒——たいていは大瓶の普通酒か素朴な本醸造である。竈の傍らに置き、惜しまず使い、数か月ごとに新しくすること。",
              zh:"把昂貴的大吟釀丟進燉鍋是浪費，因為你付錢買的那些東西——酯類——一分鐘內就隨蒸氣走光了。但加鹽的料理酒確實是次級品，它與一支便宜卻能喝的純米之間的差距，大於價格的差距。務實的答案是：店裡最便宜、但你願意溫熱著喝的那支酒——通常是大瓶裝的普通酒或樸素的本釀造。把它放在爐邊，放手用，每隔幾個月換一瓶。" } }
          ] }
      ] },

    { t:"related", items:[
      { href:"pairing.html", why:{ en:"The same drink beside food rather than inside a glass.", ja:"同じ酒を、器のなかではなく料理の傍らに。", zh:"同一款酒，放在食物旁邊而不是放進調酒杯裡。" } },
      { href:"mirin.html", why:{ en:"Sake's cousin, built for the pan rather than the cup.", ja:"杯ではなく鍋のために組まれた、日本酒の従兄弟。", zh:"清酒的表親，為鍋子而不是為杯子而生。" } },
      { href:"styles.html", why:{ en:"Which styles survive being mixed, and which do not.", ja:"混ぜられて生き残る型と、そうでない型。", zh:"哪些風格經得起調製，哪些經不起。" } },
      { href:"kasu.html", why:{ en:"The other thing a brewery sells to a kitchen.", ja:"蔵が台所へ売る、もう一つのもの。", zh:"酒藏賣給廚房的另一樣東西。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- kanpai */
SAKE.pages["kanpai"] = {
  kicker: { en: "Drinking · 10", ja: "飲む · 10", zh: "品飲 · 10" },
  title:  { en: "Drinking Together", ja: "共に飲むこと", zh: "一起喝酒這件事" },
  jp: "乾杯の作法",
  lede: {
    en: "Japan, Taiwan and China share the two characters 乾杯 and mean substantially different things by them. Getting this wrong is the most common way a visitor causes offence at a table, or drinks far more than they intended. This page sets the three customs side by side — how a toast is called, how you are poured for, how seniority is signalled, and, most usefully, how to decline in each without insulting anyone.",
    ja: "日本、台湾、中国は乾杯という二字を共有し、それによって相当に異なることを意味している。これを誤ることは、訪う者が卓で無礼をなす、あるいは意図したよりはるかに多く飲んでしまう、最もよくある道である。この頁は三つの習いを並べて置く。乾杯がどう掛けられるか、どう注がれるか、上下がどう示されるか、そして最も有用なこととして、それぞれにおいて誰をも辱めることなくいかに断るかである。",
    zh: "日本、台灣與中國共用「乾杯」這兩個字，而它們的意思相當不同。搞錯這一點，是訪客在餐桌上失禮、或喝得遠超過自己本意的最常見途徑。本頁把三種習俗並置：祝酒如何開場、酒如何被斟上、長幼如何被標示，以及最有用的一項——在各自的場合裡，如何在不冒犯任何人的前提下婉拒。"
  },
  body: [

    { t:"section", id:"word",
      title:{ en:"The same two characters", ja:"同じ二字", zh:"同樣的兩個字" }, jp:"乾杯・干杯",
      body:[
        { t:"p", text:{
          en:"The characters mean 'dry the cup'. Whether that instruction is literal is the entire difference.",
          ja:"この二字は「杯を乾かす」を意味する。その指示が字義通りであるか否かが、違いのすべてである。",
          zh:"這兩個字的意思是「把杯子喝乾」。這道指示是否照字面執行，就是全部的差別所在。" } },
        { t:"table",
          caption:{ en:"What 乾杯 asks of you", ja:"乾杯が求めるもの", zh:"「乾杯」對你的要求" },
          cols:["", { en:"Japan", ja:"日本", zh:"日本" }, { en:"Taiwan", ja:"台湾", zh:"台灣" }, { en:"Mainland China", ja:"中国大陸", zh:"中國大陸" }],
          keyCol:0,
          rows:[
            [{ en:"Said as", ja:"言い方", zh:"說法" }, { en:"kanpai 乾杯", ja:"かんぱい・乾杯", zh:"kanpai 乾杯" }, { en:"gānbēi 乾杯; in Taiwanese, <em>hō͘ ta lah</em>", ja:"ガンペイ・乾杯。台湾語ではホータラ", zh:"乾杯；台語「乎乾啦」" }, { en:"gānbēi 干杯", ja:"ガンペイ・干杯", zh:"干杯（簡化字）" }],
            [{ en:"Does it mean empty the glass?", ja:"杯を空けよという意味か", zh:"是否意味著喝乾？" },
             { en:"No. It is a starting signal, said once by the most senior person present, after which everyone sips. Draining the glass is optional and unusual.", ja:"否。始まりの合図であり、その場で最も上位の者が一度言い、その後は皆が口をつける。飲み干すことは任意であり、また稀である。", zh:"不是。它是開場信號，由在場最年長／最資深者說一次，之後大家小啜。喝乾是可選的，而且並不常見。" },
             { en:"Often yes, at a formal banquet, and the glass is shown empty afterwards. At an informal meal it is closer to the Japanese usage. <em>Suíyì</em> 隨意 — 'as you like' — is the standard way of proposing a toast without demanding a full glass.", ja:"改まった宴ではしばしば然りであり、飲み干した杯を見せる。くだけた食事では日本の用法に近い。随意——好きなように——は、満杯を求めずに乾杯を提する標準の言い方である。", zh:"在正式宴席上往往是；喝完後還會把空杯亮出來。在非正式聚餐則接近日本的用法。「隨意」是不要求乾杯、卻仍提杯致意的標準說法。" },
             { en:"Usually yes when said to an individual, and the empty glass is displayed. The same escape phrase, 随意, applies and is widely used.", ja:"個人に向けて言われたときはたいてい然りであり、空の杯が示される。同じ逃げの言葉、随意が当てはまり、広く用いられる。", zh:"當它是對某個人說時通常是，並且會亮出空杯。同樣的緩衝說法「隨意」在此適用且廣泛使用。" }],
            [{ en:"Who initiates", ja:"誰が始めるか", zh:"由誰發起" },
             { en:"One person, once, for the whole table at the start of the meal. Nobody drinks before it.", ja:"一人が、一度、食事の初めに卓の全体のために。それより前に誰も飲まない。", zh:"由一個人、在餐開始時、為全桌說一次。在此之前沒有人喝。" },
             { en:"Once for the table, then repeatedly by individuals throughout the meal — approaching a specific person, raising the glass, and drinking with them.", ja:"卓のために一度、そののち食事を通じて個々に幾度も。特定の人に近づき、杯を掲げ、共に飲むのである。", zh:"先為全桌一次，接著整場飯局中由個人反覆進行——走向某個特定的人、舉杯，然後與他同飲。" },
             { en:"The same, and more insistently: circulating to toast each guest individually is a duty of the host and a courtesy from the guests.", ja:"同じであり、より強く。客の一人一人を回って乾杯することは、主の務めであり、客の礼である。", zh:"相同，而且更為堅持：逐一向每位賓客敬酒，是主人的義務，也是賓客的禮數。" }],
            [{ en:"What is in the glass", ja:"杯の中身", zh:"杯中之物" },
             { en:"Beer at the first toast almost regardless of what follows; sake, shochu, highball, wine afterwards. The first glass is a formality and often barely touched.", ja:"最初の乾杯はその後が何であれほぼ麦酒であり、のちに日本酒、焼酎、ハイボール、葡萄酒となる。最初の一杯は形式であり、しばしばほとんど口をつけられない。", zh:"第一輪敬酒幾乎一律是啤酒，無論之後喝什麼；接著才是清酒、燒酎、highball、葡萄酒。第一杯是形式，往往幾乎沒喝。" },
             { en:"Beer at everyday meals; kaoliang, whisky or brandy at banquets, in small cups precisely because they are drained. Sake appears increasingly and is treated as a wine-like guest at the table rather than the banquet spirit.", ja:"日々の食事には麦酒。宴には高粱酒、威士忌、白蘭地であり、飲み干されるがゆえにこそ小さな杯で供される。日本酒は次第に現れ、宴の酒としてではなく葡萄酒に似た卓の客として扱われる。", zh:"日常聚餐是啤酒；宴席上是高粱、威士忌或白蘭地，正因為要乾杯，所以用小杯。清酒出現得越來越多，並被當成餐桌上類似葡萄酒的客人，而非宴席用的烈酒。" },
             { en:"Baijiu at a formal banquet, in a very small cup for the same reason; beer or wine for lighter occasions.", ja:"改まった宴では白酒であり、同じ理由でごく小さな杯である。軽い場では麦酒か葡萄酒。", zh:"正式宴席是白酒，基於同樣理由用極小的杯；較輕鬆的場合則是啤酒或葡萄酒。" }]
          ] },
        { t:"note", title:{ en:"The single most useful sentence", ja:"最も有用な一文", zh:"最有用的一句話" }, text:{
          en:"If you are in Taipei or on the mainland and someone approaches you with a raised glass, you can say <em>suíyì</em> — 随意 — as you raise yours. It means 'at your own pace', it is entirely polite, it is what people who cannot drink much say to each other, and it converts a drained glass into a sip. There is no equivalent phrase in Japan because the demand is not made in the first place.",
          ja:"台北や大陸において誰かが杯を掲げて近づいてきたなら、自らの杯を掲げながら随意と言えばよい。それは「ご自分の速さで」を意味し、まったく礼にかない、多く飲めぬ者が互いに言い交わす言葉であり、飲み干す一杯を一口に変える。日本にこれに当たる言葉がないのは、そもそもその求めがなされないからである。",
          zh:"若你在台北或中國大陸，有人舉杯朝你走來，你可以一邊舉起自己的杯子一邊說「隨意」。它的意思是「照自己的步調」，完全合乎禮數，是不勝酒力的人彼此之間會說的話，並且能把一整杯變成一小口。日本沒有對應的說法，因為那樣的要求根本不會出現。" } }
      ] },

    { t:"section", id:"pouring",
      title:{ en:"Who pours, and how", ja:"誰がどう注ぐか", zh:"誰來斟，怎麼斟" }, jp:"酌の作法",
      body:[
        { t:"figure",
          caption:{
            en:"The same courtesy, three different shapes across an evening. What the three tables share is that you drink because someone else has poured for you; what they do not share is how often that happens and how much is expected each time. A Japanese table has one toast at the start and then hours of small refills. A formal banquet on the mainland has the host toast the table, then each guest in turn, then each guest rise to return it — and a returned toast is traditionally the whole cup. A guest who arrives with the wrong model in mind is either rude or drunk by the second hour.",
            ja:"同じ礼が、一夜のうちに三つの異なる形をとる。三つの卓に共通するのは、他者が注いでくれたがゆえに飲むということである。共通しないのは、それが何度起こり、そのたびにどれだけが期待されるかである。日本の卓には初めに一度の乾杯があり、そののちは数時間にわたる小さな注ぎ足しが続く。大陸の改まった宴では、主が卓に乾杯し、ついで客の一人一人に向かい、そして客が立って回敬する——回敬は伝統的には杯を干すことである。誤った型を携えて来た客は、無礼であるか、二時間目には酔っているかのいずれかとなる。",
            zh:"同樣的禮節，在一個晚上會呈現三種不同的形狀。三張餐桌共通的是：你之所以喝，是因為別人為你斟了；不共通的是這件事發生的頻率，以及每一次被期待喝掉多少。日本的餐桌開場一次乾杯，之後是數小時的小量續斟。大陸的正式宴席上，主人先敬全桌，再逐一敬每位賓客，然後賓客起身回敬——而回敬在傳統上是整杯乾掉。帶著錯誤模型赴宴的客人，不是失禮，就是在第二個小時就醉了。" },
          svg: function (lang, L) {
            var W = 760, H = 326, X0 = 140, X1 = 586;
            function tx(t) { return X0 + t / 3 * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j;
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一夜のあいだの乾杯の形" : lang === "zh" ? "一個晚上裡乾杯的形狀" : "THE SHAPE OF AN EVENING") + '</text>';
            s += '<text x="606" y="44" font-size="9.5" letter-spacing="1.1" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一度の乾杯とは" : lang === "zh" ? "一次乾杯是多少" : "ONE TOAST IS") + '</text>';
            var rows = [
              { n:{ en:"Japan", ja:"日本", zh:"日本" },
                w:{ en:"a sip", ja:"ひと口", zh:"一口" },
                sip:true, t:[0],
                note:{ en:"one kanpai, then refills as cups empty", ja:"乾杯は一度、あとは空いた杯に注ぎ足す", zh:"乾杯一次，之後隨空隨斟" } },
              { n:{ en:"Taiwan", ja:"台湾", zh:"台灣" },
                w:{ en:"a sip, or the cup", ja:"ひと口、または杯ごと", zh:"一口，或整杯" },
                sip:true, t:[0, 0.45, 0.9, 1.3, 1.75, 2.2],
                note:{ en:"people leave their seats to toast individuals", ja:"席を立って個々に敬酒する", zh:"離座向個別的人敬酒" } },
              { n:{ en:"Mainland China", ja:"中国大陸", zh:"中國大陸" },
                w:{ en:"often the whole cup", ja:"多くは杯を干す", zh:"多半是整杯乾掉" },
                sip:false, t:[0, 0.18, 0.3, 0.42, 0.54, 0.66, 1.0, 1.14, 1.28, 1.42, 1.6, 1.82, 2.1, 2.4],
                note:{ en:"the host toasts each guest, then each guest returns it", ja:"主が客の一人一人に、ついで客が回敬する", zh:"主人逐一敬客，客人再逐一回敬" } }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = 92 + i * 74;
              s += '<rect x="' + X0 + '" y="' + (ry - 6) + '" width="' + (X1 - X0) + '" height="12" fill="#EFEDE7"/>';
              if (rows[i].sip) s += '<rect x="' + X0 + '" y="' + (ry - 3) + '" width="' + (X1 - X0) + '" height="6" fill="#DACFB8"/>';
              for (j = 0; j < rows[i].t.length; j++) {
                s += '<rect x="' + (tx(rows[i].t[j]) - 2).toFixed(1) + '" y="' + (ry - 24) + '" width="4" height="30" fill="#7C6B52"/>';
              }
              s += '<text x="30" y="' + (ry + 2) + '" font-size="11" fill="#201E1B">' + L(rows[i].n) + '</text>';
              s += '<text x="' + X0 + '" y="' + (ry + 24) + '" font-size="9.5" fill="#8B857C">' + L(rows[i].note) + '</text>';
              s += '<text x="606" y="' + (ry + 2) + '" font-size="10" fill="#6B655C">' + L(rows[i].w) + '</text>';
            }
            for (i = 0; i <= 3; i++) {
              s += '<line x1="' + tx(i).toFixed(1) + '" y1="62" x2="' + tx(i).toFixed(1) + '" y2="252" stroke="#E4E0D6"/>';
              s += '<text x="' + tx(i).toFixed(1) + '" y="288" text-anchor="middle" font-size="9" fill="#B4AEA4">' +
                   (lang === "en" ? (i + " h") : (i + (lang === "ja" ? "時間" : "小時"))) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "図式である。乾杯の数と間隔は場によって大きく異なる。図式でないのは形の違いのほうであり、一本の線には一度の乾杯と長い啜り、他の線には十を数える満杯がある。"
                  : lang === "zh" ? "此為示意圖：乾杯的次數與間隔因場合而異極大。不是示意的，是形狀上的差別——一條線上是一次乾杯加長時間的小啜，另一條線上是十幾次整杯。"
                  : "Schematic. Counts and spacing vary enormously by occasion; the difference in shape does not.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"compare", cols:3, items:[
          { title:{ en:"Japan", ja:"日本", zh:"日本" }, jp:"お酌・手酌",
            text:{ en:"You do not pour for yourself. You fill your neighbour's cup; they notice and fill yours. Hold the flask with both hands, or with the right hand supported by the left, and receive with both hands, lifting the cup slightly off the table. A cup left full is a signal that you have finished, and is respected without comment. Pouring for yourself — <em>tejaku</em> — is not rude but reads as slightly solitary, and at a relaxed table people will say so cheerfully and then do it anyway.",
              ja:"自らには注がない。隣の杯を満たせば、相手はそれに気づいて自らの杯を満たす。徳利は両手で、あるいは左手を添えた右手で持ち、受けるときも両手で、杯を卓からわずかに上げる。満たしたままの杯は、もう終わりであるという合図であり、何も言われずに尊重される。手酌は無礼ではないが、いささか孤りに映る。くだけた卓では人は明るくそう言い、そしてそのまま手酌する。",
              zh:"你不為自己斟酒。你把鄰座的杯子斟滿，對方會注意到並斟滿你的。持酒器要用雙手，或以左手扶著右手；接酒時也用雙手，並把杯子略微抬離桌面。留著一杯滿酒，是「我喝完了」的訊號，會被無言地尊重。自斟——「手酌」——並不失禮，但讀起來略帶獨處的意味；在輕鬆的餐桌上，人們會笑著這麼說，然後照樣自斟。" } },
          { title:{ en:"Taiwan", ja:"台湾", zh:"台灣" }, jp:"敬酒",
            text:{ en:"The same reciprocal pouring, plus a mobile element: people leave their seats to toast individuals, and a junior approaching a senior holds the rim of their own glass below the rim of the senior's when the glasses touch. That gesture is the whole hierarchy expressed in two centimetres, it is done without comment, and getting it right is noticed. Refilling a senior's cup before your own is expected; so is using both hands.",
              ja:"同じ互いに注ぎ合う所作に、動く要素が加わる。人は席を立って個々に敬酒し、下の者が上の者に近づくとき、杯を触れ合わせる際に自らの杯の縁を相手の縁より低く保つ。その所作は上下の全体を二センチのうちに言い表すものであり、何も言われずに行われ、正しくできていれば気づかれる。自らのものより先に上の者の杯を満たすことは当然であり、両手を用いることもまた然りである。",
              zh:"同樣是彼此斟酒，另加一個移動的元素：人們會離座去向個別的人敬酒；晚輩走向長輩時，碰杯的瞬間會把自己杯口的高度壓在對方杯口之下。那個動作把整套倫理濃縮在兩公分之內，做的時候沒有人會說破，而做對了會被看見。先斟長輩的杯再斟自己的是理所當然的；用雙手也是。" } },
          { title:{ en:"Mainland China", ja:"中国大陸", zh:"中國大陸" }, jp:"回敬",
            text:{ en:"The most structured of the three. The host toasts the table, then each guest in turn; guests return the toast — <em>huíjìng</em> — individually, ideally in order of seniority, and the seating positions themselves encode rank relative to the door. The lowered-rim gesture is used as in Taiwan. A guest who never rises to return a toast has, in a formal setting, not participated.",
              ja:"三つのうち最も型の定まったものである。主が卓に乾杯し、ついで客の一人一人に。客は個々に回敬し、望ましくは上下の順に行う。そして席の位置そのものが、戸に対する序列を記している。縁を下げる所作は台湾と同じく用いられる。一度も立って回敬しない客は、改まった場においては、加わらなかったことになる。",
              zh:"三者之中最具結構的一種。主人先向全桌敬酒，再逐一向每位賓客敬；賓客則個別回敬，最好依尊卑次序進行，而座位本身就依相對於門的位置編碼了席次高低。壓低杯緣的動作與台灣相同。在正式場合中，一位從未起身回敬的賓客，等於沒有參與。" } }
        ] },
        { t:"note", title:{ en:"What travels and what does not", ja:"移るものと移らぬもの", zh:"哪些會移動，哪些不會" }, text:{
          en:"Pouring for others, using both hands, and deferring to seniority are common to all three and can be carried anywhere in East Asia without error. What does not travel is the pace: a Japanese table's single opening toast followed by hours of sipping, and a banquet's dozen individual full-glass toasts, are different amounts of alcohol by a large multiple, and a guest who applies the wrong model in the wrong place gets into trouble in one direction or the other.",
          ja:"人に注ぐこと、両手を用いること、上位に譲ることは三つのすべてに共通し、東亜のいずこへも誤りなく携えうる。移らぬのは速さである。日本の卓の一度きりの開きの乾杯とそののちの数時間の啜りと、宴の十を数える個々の満杯の乾杯とは、大きな倍数をもって異なる酒量である。誤った型を誤った場に当てはめる客は、いずれかの方向で難儀する。",
          zh:"為他人斟酒、使用雙手、對長者謙讓，這三點三地皆同，可以帶著走遍東亞而不會出錯。不會跟著移動的是節奏：日本餐桌上僅此一次的開場乾杯、其後數小時的小啜，與宴席上十來次個別的整杯乾杯，是相差好幾倍的酒量；把錯誤的模型套用到錯誤的場合，賓客會在其中一個方向上出事。" } }
      ] },

    { t:"section", id:"declining",
      title:{ en:"How to decline, in each place", ja:"それぞれの地での断り方", zh:"在各地如何婉拒" }, jp:"断り方",
      body:[
        { t:"p", text:{
          en:"This is the most practically useful section on the page, and the one most guides omit. Nobody at any of these tables wants a guest to be ill, and every one of these cultures has a well-worn, face-preserving way out. Use it early — the first refusal is easy and the fifth is not.",
          ja:"この頁において最も実際に有用な節であり、そして多くの手引きが省く節である。これらのいずれの卓においても、客が具合を悪くすることを望む者はいない。そしてこれらの文化のいずれもが、面目を保つ、使い込まれた逃げ道を持っている。早く用いられたい。最初の辞退はたやすく、五度目はそうではない。",
          zh:"這是本頁最具實用價值的一節，也是多數指南略過的一節。在這些餐桌上，沒有人希望客人不舒服，而這些文化每一種都有一條被反覆使用、能保住面子的退路。請及早使用它——第一次婉拒很容易，第五次就不是了。" } },
        { t:"grid", cols:3, cells:[
          { k:{ en:"Japan", ja:"日本", zh:"日本" }, jp:"日本",
            v:{ en:"Leave the cup full", ja:"杯を満たしたまま", zh:"讓杯子保持滿的" },
            d:{ en:"Accept the first pour, raise it for the toast, touch it to your lips, and then simply leave it. A full cup cannot be refilled, and nobody will remark on it. If someone insists, covering the cup lightly with your hand is unambiguous and polite. <em>Kuruma de kimashita</em> — 'I came by car' — ends the discussion completely, because drink-driving law in Japan reaches everyone at the table.",
              ja:"最初の一杯を受け、乾杯のために掲げ、唇に触れ、そしてそのまま置いておく。満ちた杯は満たしえず、誰もそれを言い立てない。強く勧める者があれば、手を軽く杯にかざすことは明白であり、また礼にかなう。「車で来ました」は議論を完全に終わらせる。日本の飲酒運転の法は卓の全員に及ぶからである。",
              zh:"接下第一次斟酒，舉杯致意，讓酒碰一下嘴唇，然後就這樣把它放著。滿的杯子無法再斟，也不會有人多說什麼。若有人堅持，以手輕輕覆在杯口是明確而有禮的。「我開車來的」能徹底結束討論，因為日本的酒駕法律會延伸到餐桌上的每一個人。" } },
          { k:{ en:"Taiwan", ja:"台湾", zh:"台灣" }, jp:"台湾",
            v:{ en:"Tea in place of wine", ja:"茶を酒に代えて", zh:"以茶代酒" },
            d:{ en:"<em>Yǐ chá dài jiǔ</em> — 以茶代酒, 'tea in place of wine' — is a complete, formal, entirely acceptable substitution. You raise a cup of tea, perform the toast exactly as you would with alcohol, and the courtesy is fully discharged; there is no loss of face on either side. It is also what many Taiwanese people do for perfectly ordinary reasons. Say <em>suíyì</em> for a small sip, and 以茶代酒 for none at all.",
              ja:"以茶代酒——茶を酒に代える——は、完全で、改まっており、まったく受け入れられる代替である。茶の杯を掲げ、酒とまったく同じように乾杯を行えば、礼は十全に果たされる。いずれの側にも面目の損なわれはない。それはまた、多くの台湾の人がごく平凡な理由で行っていることでもある。少し口をつけるなら随意、まったく飲まぬなら以茶代酒である。",
              zh:"「以茶代酒」是一種完整、正式、完全被接受的替代。你舉起一杯茶，以與飲酒時完全相同的方式敬酒，禮數就已充分完成；雙方都不會失面子。這也是許多台灣人基於再平常不過的理由會做的事。小啜一口說「隨意」，完全不喝就說「以茶代酒」。" } },
          { k:{ en:"Mainland China", ja:"中国大陸", zh:"中國大陸" }, jp:"中国大陸",
            v:{ en:"A stated reason", ja:"理由を述べる", zh:"說出一個理由" },
            d:{ en:"随意 works here too, and 以茶代酒 is understood, but in a formal banquet a stated reason carries more weight than a phrase: driving, medication, an early flight, doctor's orders. Say it once, clearly, to the host rather than to the person toasting you, and it will be relayed and respected. Standing up to make the toast even while drinking tea does most of the social work.",
              ja:"随意はここでも働き、以茶代酒も通じる。しかし改まった宴においては、言葉よりも述べられた理由の方が重い。運転、薬、早い便、医師の言いつけである。一度、はっきりと、乾杯を向けてきた人にではなく主に告げれば、それは伝えられ、尊重される。茶を飲むにせよ立ち上がって乾杯することが、社交の仕事のほとんどを果たす。",
              zh:"「隨意」在此同樣有效，「以茶代酒」也能被理解；但在正式宴席上，一個說出口的理由比一句話術更有分量：開車、服藥、一早的班機、醫囑。清楚地說一次，而且是對主人說、而非對向你敬酒的人說，它就會被傳達並被尊重。即使喝的是茶，站起身來敬酒這個動作，已經完成了社交上大部分的工作。" } }
        ] },
        { t:"note", title:{ en:"And the underlying point", ja:"そして根にあること", zh:"以及根本上的一點" }, text:{
          en:"All three of these cultures have a documented problem with pressured drinking, and all three have been moving away from it — Japan has a word for it, <em>aruhara</em>, alcohol harassment, and has run public campaigns against forced drinking for decades. Nothing on this page is an argument for keeping up. If you would rather not drink at all, that is an ordinary position at a modern table in all three places, and the honest sentence works better than any technique. See <a href=\"health.html\">Alcohol &amp; the Body</a> for the arithmetic.",
          ja:"これら三つの文化はいずれも、強いられた飲酒という記録された問題を抱えており、そしていずれもそこから離れつつある。日本にはそれを指す語がある。アルハラ、すなわちアルコール・ハラスメントであり、飲酒の強要に対する公の運動が数十年にわたり行われてきた。この頁のいずれも、無理をして合わせるための論ではない。まったく飲みたくないのであれば、それは三つの地のいずれの現代の卓においても平凡な立場であり、正直な一文は、いかなる技法よりもよく働く。数の勘定は<a href=\"health.html\">酒と体</a>を見られたい。",
          zh:"這三種文化都存在有據可查的「勸酒壓力」問題，而三者也都在遠離它——日本甚至有一個專門的詞：アルハラ（酒精騷擾），並且數十年來持續推行反強迫飲酒的公共宣導。本頁沒有任何一處是在主張你應該跟上。若你根本不想喝，那在這三地的現代餐桌上都是再平常不過的立場，而一句誠實的話，比任何技巧都管用。計算方式請見<a href=\"health.html\">酒與身體</a>。" } }
      ] },

{ t:"section", id:"occasions",
      title:{ en:"Occasions that change the rules", ja:"作法を変える場", zh:"會改變規則的場合" }, jp:"場面",
      body:[
        { t:"defs", items:[
          { term:{ en:"A memorial, not a celebration", ja:"祝いではない席", zh:"追思，而非慶祝" }, jp:"献杯", romaji:"kenpai",
            def:{ en:"At a Japanese funeral meal or memorial you do not say <em>kanpai</em>. The word used is <em>kenpai</em> — offering the cup — the glasses are raised but not clinked, the voice is quiet, and there is no applause. Saying kanpai at a memorial is among the most conspicuous mistakes a foreign guest can make, and it is entirely avoidable: listen for what the senior person says, and repeat that. The same principle covers everything else on this page.",
              ja:"日本の葬いの席や法要において、乾杯とは言わない。用いる語は献杯である。杯を捧げるのである。杯は掲げられるが打ち合わせず、声は静かであり、拍手はない。法要で乾杯と言うことは、外からの客のなしうる最も目立つ誤りの一つであり、そしてまったく避けうる。上位の者が何と言うかを聞き、それを繰り返せばよい。同じ原理がこの頁の他のすべてを覆う。",
              zh:"在日本的喪禮餐席或法事上，不說「乾杯」。所用的詞是「獻杯」——奉上這一杯——酒杯舉起但不相碰，聲音低沉，也沒有掌聲。在法事上說「乾杯」，是外國賓客所能犯下最顯眼的錯誤之一，而它完全可以避免：聽在場最年長者說什麼，然後跟著說。同樣的原則涵蓋本頁其餘的一切。" } },
          { term:{ en:"The second party", ja:"二次会", zh:"續攤" }, jp:"二次会", romaji:"nijikai",
            def:{ en:"A Japanese evening comes in numbered acts. The first party is structured, seated and paid for by the organisation; the second is looser, often at a different kind of bar, and optional in principle. Declining the second party is easy and normal; declining the first is a bigger act. The rough Taiwanese and Chinese equivalent is 續攤 — moving on — and it works the same way, with the important difference that the person who paid for the first round usually intends to pay for the second as well.",
              ja:"日本の宵は番号を振られた幕として来る。一次会は構えがあり、座り、組織が支払う。二次会はより緩く、しばしば別の種の店であり、原理としては任意である。二次会を辞することはたやすく、また常のことである。一次会を辞することはより大きな行いである。台湾と中国のおおよその相当は續攤——移ること——であり、同じように働く。ただし重要な違いとして、最初の勘定を払った者は、たいてい次の勘定も払うつもりでいる。",
              zh:"日本的夜晚以編號的幕次登場。一次會有結構、有座位、由組織買單；二次會較鬆散，往往換到另一種酒吧，原則上是自由參加。婉拒二次會既容易也正常；婉拒一次會則是更大的動作。台灣與中國大致對應的是「續攤」，運作方式相同，但有一個重要差別：付了第一攤的人，通常也打算付第二攤。" } },
          { term:{ en:"Who pays", ja:"誰が払うか", zh:"誰買單" }, jp:"割り勘と請客", romaji:"warikan / qǐngkè",
            def:{ en:"Japan splits the bill — <em>warikan</em> — as a default, often to the yen, and a senior person may quietly pay more without announcing it. Taiwan and China do not split: one person hosts, and the contest to be that person is real, visible and sometimes physical. A guest who insists on splitting in Taipei is not being fair, they are refusing a gift. The correct move is to lose gracefully and host the next occasion.",
              ja:"日本は勘定を割るのが既定であり、しばしば円の単位まで割る。上位の者が何も言わずに多く払うこともある。台湾と中国は割らない。一人が主となり、その一人であろうとする争いは実際にあり、目に見え、時には身体を伴う。台北で割り勘を主張する客は、公平であろうとしているのではなく、贈り物を拒んでいる。正しい振舞いは潔く負け、次の機会に自らが主となることである。",
              zh:"日本預設是分帳——「割り勘」——常常算到日圓為止，而資深者可能默默多付一些而不聲張。台灣與中國不分帳：由一個人做東，而爭當那個人的競賽是真實的、看得見的，有時甚至是肢體性的。在台北堅持分帳的客人不是在講求公平，而是在拒絕一份禮物。正確的做法是優雅地輸掉，並在下一次做東。" } },
          { term:{ en:"Sake at a Chinese-speaking table", ja:"中国語圏の卓における日本酒", zh:"華語餐桌上的清酒" }, jp:"日本酒の位置", romaji:"nihonshu no ichi",
            def:{ en:"Sake is now common in Taipei, Hong Kong and the mainland cities, and it has arrived into a banquet culture built around small cups of strong spirit. That produces a specific and avoidable failure: sake served in a spirit cup, at banquet pace, treated as something to be drained. At 15% it is not a spirit and will not survive that. Served in a wine glass, poured like wine, and drunk over a meal, it does what it was made to do — and the tea-substitution and 隨意 conventions above work exactly as well for it as for kaoliang.",
              ja:"日本酒は今や台北にも香港にも大陸の都市にも普通にあり、そして強い蒸留酒の小さな杯を軸に築かれた宴の文化のなかへ到着した。それは特定の、そして避けうる失敗を生む。蒸留酒の杯に注がれ、宴の速さで、飲み干すべきものとして扱われる日本酒である。十五度のそれは蒸留酒ではなく、それに耐えない。葡萄酒の杯に注がれ、葡萄酒のように注がれ、食事を通じて飲まれれば、それは造られた通りのことをなす。そして上に述べた以茶代酒と随意の慣いは、高粱酒に対してと同じだけよく、これに対しても働く。",
              zh:"清酒如今在台北、香港與大陸城市都很常見，而它進入的是一個圍繞「小杯烈酒」建立起來的宴席文化。這產生了一種特定而可避免的失敗：清酒被斟進烈酒杯、以宴席的節奏、被當成該一飲而盡的東西。十五度的它不是烈酒，撐不住這樣的喝法。若以葡萄酒杯盛裝、像葡萄酒那樣斟、佐餐慢飲，它就會做出它被造出來要做的事——而上述「以茶代酒」與「隨意」的慣例，對它的效力與對高粱完全相同。" } }
        ] }
      ] },

    { t:"section", id:"phrases",
      title:{ en:"The phrases themselves", ja:"言葉そのもの", zh:"那些話本身" }, jp:"言い回し",
      body:[
        { t:"table",
          caption:{ en:"What to say, and when", ja:"何を、いつ言うか", zh:"該說什麼，何時說" },
          cols:[{ en:"Situation", ja:"場面", zh:"場合" }, { en:"Japanese", ja:"日本語", zh:"日文" }, { en:"Mandarin", ja:"中国語", zh:"華語" }],
          keyCol:0,
          rows:[
            [{ en:"The opening toast", ja:"最初の乾杯", zh:"開場敬酒" }, "乾杯 — kanpai", { en:"乾杯 — gānbēi", ja:"乾杯——ガンペイ", zh:"乾杯" }],
            [{ en:"At a pace of your own", ja:"自分の速さで", zh:"照自己的步調" }, { en:"— (no equivalent; simply sip)", ja:"——（相当する語はない。ただ口をつける）", zh:"—（無對應說法；小啜即可）" }, { en:"隨意 — suíyì", ja:"随意——スイイー", zh:"隨意" }],
            [{ en:"Tea instead of alcohol", ja:"酒に代えて茶を", zh:"以茶代酒" }, { en:"お茶で失礼します", ja:"お茶で失礼します", zh:"お茶で失礼します（請容我以茶）" }, "以茶代酒 — yǐ chá dài jiǔ"],
            [{ en:"I am driving", ja:"運転します", zh:"我要開車" }, "車で来ました — kuruma de kimashita", "我開車 — wǒ kāichē"],
            [{ en:"Thank you for the pour", ja:"注いでもらったとき", zh:"謝謝斟酒" }, "ありがとうございます / どうも", "謝謝 — xièxie"],
            [{ en:"Please, after you", ja:"どうぞお先に", zh:"您先請" }, "どうぞ — dōzo", "您先請 — nín xiān qǐng"],
            [{ en:"At a memorial", ja:"法要の席で", zh:"在追思場合" }, "献杯 — kenpai", { en:"Follow the host; there is no fixed toast", ja:"主に従う。定まった言葉はない", zh:"依主人為準；沒有固定的祝詞" }],
            [{ en:"Toasting an individual", ja:"個人に向けて", zh:"向個人敬酒" }, { en:"— (rare; the table toasts together)", ja:"——（稀である。卓は共に乾杯する）", zh:"—（少見；日本是全桌一起敬）" }, "敬你一杯 — jìng nǐ yī bēi"],
            [{ en:"I have had enough", ja:"もう十分です", zh:"我夠了" }, "もう結構です — mō kekkō desu", "我不能再喝了 — wǒ bù néng zài hē le"],
            [{ en:"It was a good evening", ja:"よい宵だった", zh:"今晚很愉快" }, "ごちそうさまでした", "謝謝招待 — xièxie zhāodài"]
          ] },
        { t:"tiny", text:{
          en:"Brewery-visit and shop phrases are on the <a href=\"visiting.html#phrases\">Visiting &amp; Buying</a> page; the Japanese table customs in fuller detail are under <a href=\"culture.html#table\">Culture &amp; Ritual</a>.",
          ja:"蔵を訪ねるときと店での言い回しは<a href=\"visiting.html#phrases\">蔵を訪ねる</a>の頁に、日本の卓の作法のより詳しい記述は<a href=\"culture.html#table\">文化と儀礼</a>にある。",
          zh:"參訪酒藏與在酒鋪使用的說法見<a href=\"visiting.html#phrases\">造訪與選購</a>一頁；日本餐桌禮節的更完整說明見<a href=\"culture.html#table\">文化與儀禮</a>。" } }
      ] },

{ t:"section", id:"changing",
      title:{ en:"All three are changing", ja:"三つとも変わりつつある", zh:"三者都正在改變" }, jp:"変化",
      body:[
        { t:"p", text:{
          en:"Everything described above is the inherited version. It is still recognisable at a formal dinner and in a company of people over fifty. It is not what a twenty-five-year-old in Tōkyō, Taipei or Seoul does on a Friday, and the gap is widening fast enough that a visitor working from an etiquette guide can end up being the most formal person at the table.",
          ja:"上に述べたすべては受け継がれた型である。改まった食事の席と、五十を越えた人々の集まりにおいては今もそれと分かる。東京や台北やソウルの二十五歳が金曜の夜にすることではなく、その隔たりは、作法の手引きに従う訪問者が卓で最も改まった人になりうるほど速く広がっている。",
          zh:"上述的一切都是承襲下來的版本。在正式的餐宴上、在一群五十歲以上的人之中，它至今仍清晰可辨。但那不是東京、台北或首爾的二十五歲年輕人在星期五晚上會做的事，而這道落差正快速擴大到——一位照著禮儀指南行事的訪客，可能會成為餐桌上最正式的那個人。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Young people are drinking much less", ja:"若い人は大きく飲まなくなった", zh:"年輕人喝得少多了" }, jp:"若者の酒離れ", romaji:"wakamono no sake-banare", meta:{ en:"Japan, Korea, Taiwan", ja:"日本・韓国・台湾", zh:"日本、韓國、台灣" },
            text:{ en:"Across East Asia, per-head alcohol consumption among people in their twenties has fallen sharply over three decades, and the fall is steepest in Japan. The causes are ordinary — smaller disposable incomes, more health awareness, fewer compulsory work drinking occasions, better things to do with an evening — and none of them are reversing. Every argument in this site's <a href=\"future.html\">Next Twenty Years</a> page rests on this one fact.",
              ja:"東亜の全体において、二十代の一人当たりの酒量は三十年で急に落ち、その落ち込みは日本において最も急である。原因は平凡である。使える金が少ないこと、健康への意識が高いこと、強いられる仕事の酒席が減ったこと、宵に他により良いことがあること。そのいずれも逆へは向かっていない。この場所の<a href=\"future.html\">これからの二十年</a>のあらゆる論は、この一つの事実の上に立っている。",
              zh:"在整個東亞，二十多歲人口的人均飲酒量在三十年間急遽下降，而日本的降幅最陡。原因都很平常——可支配所得較少、健康意識提高、被迫參加的工作酒局變少、晚上有更值得做的事——而其中沒有任何一項正在反轉。本站<a href=\"future.html\">未來二十年</a>一頁中的每一個論證，都建立在這個單一事實之上。" } },
          { n:2, title:{ en:"The state noticed, awkwardly", ja:"国が、ばつ悪く気づいた", zh:"國家注意到了，而且很尷尬" }, jp:"サケビバ！", romaji:"Sake Viva!", meta:{ en:"2022", ja:"令和四年", zh:"2022 年" },
            text:{ en:"In 2022 Japan's national tax agency ran a public competition inviting young people to propose ideas for reviving domestic demand for alcohol. Because alcohol duty is a significant revenue line, the tax authority is also the industry's promotion body — a combination explained elsewhere on this site — and the campaign was widely criticised at home as the state encouraging drinking for fiscal reasons while its own health ministry was preparing guidance in the opposite direction. Both things were true at once, and the episode is the clearest illustration of the contradiction the industry now sits inside.",
              ja:"令和四年（2022）、日本の国税庁は、国内の酒類の需要を立て直す案を若い人々から募る公の競技を催した。酒税が歳入の重い一項であるがゆえに、税の当局は同時にこの産業の振興の主体でもある。この場所の他所で説いた組み合わせである。そしてこの催しは国内で広く批判された。国が財政の理由で飲酒を勧める一方、その健康の省が逆の方向の指針を備えつつあったからである。二つは同時に真であり、この一件は、産業が今その内に座している矛盾の最も明快な例である。",
              zh:"二〇二二年，日本國稅廳舉辦了一場公開徵件比賽，邀請年輕人提出振興國內酒類需求的點子。由於酒稅是重要的稅收項目，稅務機關同時也是這個產業的振興主管機關——這個組合已在本站他處說明——而這場活動在國內遭到廣泛批評：國家為了財政理由鼓勵飲酒，而它自己的衛生主管機關卻正在準備方向相反的指引。這兩件事同時為真，而這起事件，正是這個產業如今身處其中的那個矛盾最清楚的寫照。" } },
          { n:3, title:{ en:"The zero-alcohol table", ja:"アルコールのない卓", zh:"沒有酒精的餐桌" }, jp:"ノンアル・微アル", romaji:"non-aru, bi-aru", meta:{ en:"now", ja:"現在", zh:"現在" },
            text:{ en:"The fastest-growing category at a Japanese table is a drink with no alcohol in it. Alcohol-free beer is long established; alcohol-free sake, low-alcohol sake at 5 to 8 per cent, and sparkling amazake are all now made by serious breweries rather than only by industrial ones. What matters socially is that the ritual survives the substitution: the toast still happens, the pouring still happens, the cup is still filled by someone else. It turns out almost none of the custom described on this page actually required the alcohol.",
              ja:"日本の卓において最も速く伸びている区分は、酒精を含まぬ飲み物である。ノンアルコールの麦酒は久しく確立している。ノンアルコールの日本酒、五から八パーセントの低アルコールの日本酒、発泡する甘酒は、いまや工業の会社だけでなく本気の蔵も造る。社交として重いのは、儀礼が置き換えを生き延びるということである。乾杯はなお起こり、酌はなお起こり、杯はなお誰か他の者に満たされる。この頁に述べた習いのほとんどは、実のところ酒精を必要としていなかったのである。",
              zh:"日本餐桌上成長最快的類別，是一種不含酒精的飲料。無酒精啤酒早已確立；無酒精清酒、五至八度的低酒精清酒，以及氣泡甘酒，如今都由認真的酒藏、而不只是工業化廠商在生產。就社交層面而言，重要的是：儀式在這場替換中存活了下來。乾杯照樣進行，斟酒照樣進行，杯子照樣由別人斟滿。事實證明，本頁所描述的習俗，幾乎沒有一項真的需要酒精。" } }
        ] },
        { t:"note", title:{ en:"What this page is for", ja:"この頁が何のためにあるか", zh:"這一頁的用意" }, text:{
          en:"Not to teach anyone to keep up. The customs above are worth knowing because they are the grammar of a table you may be sitting at, and because knowing them makes it much easier to decline gracefully rather than awkwardly. Someone who understands why the cup is being filled can leave it full with a smile and be entirely correct. Someone who does not tends either to drink everything or to refuse in a way that lands badly.",
          ja:"誰かに合わせ続けることを教えるためではない。上の習いを知る値打ちがあるのは、それがあなたの座るかもしれぬ卓の文法だからであり、そしてそれを知ることが、ぎこちなくではなく優雅に断ることをはるかに容易にするからである。なぜ杯が満たされているのかを解する者は、それを満たしたまま微笑んで置いておくことができ、それでまったく正しい。解さぬ者は、すべてを飲むか、拙く着地する仕方で断るかのいずれかに傾く。",
          zh:"不是為了教任何人「跟上」。上述習俗值得認識，是因為它們是你可能正坐在其中的那張餐桌的文法，也因為理解它們會讓「優雅地婉拒」比「尷尬地婉拒」容易得多。一個明白杯子為什麼被斟滿的人，可以微笑著讓它保持滿的，而且完全合乎規矩。不明白的人，則往往不是把一切都喝掉，就是以一種落地很難看的方式拒絕。" } }
      ] },

    { t:"related", items:[
      { href:"culture.html", why:{ en:"The social machinery the table is part of.", ja:"卓がその一部をなす、社交の仕掛け。", zh:"餐桌所隸屬的那套社交機制。" } },
      { href:"health.html", why:{ en:"The arithmetic behind knowing when to stop.", ja:"いつ止めるかを知るための算術。", zh:"知道什麼時候該停下來的那道算術。" } },
      { href:"taiwan.html", why:{ en:"The same courtesies as they are practised in Taiwan.", ja:"台湾において行われる、同じ礼。", zh:"同樣的禮節，在台灣的實行方式。" } },
      { href:"words.html", why:{ en:"The phrases, with readings and when to use them.", ja:"語句を、読みと使いどころとともに。", zh:"那些用語，附讀音與使用時機。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- places */
SAKE.pages["places"] = {
  kicker: { en: "Drinking · 11", ja: "飲む · 11", zh: "品飲 · 11" },
  title:  { en: "The Places You Drink It", ja: "酒を飲む場所", zh: "喝酒的地方" },
  jp: "酒場の種類",
  lede: {
    en: "Japan has an unusually fine-grained vocabulary for drinking places, and the distinctions are not decorative — they tell you what the sake will cost, how it will be poured, whether you may sit, whether you must order food, and whether the person behind the counter chose the bottles themselves. This page is a field guide: where each kind of place came from, what to expect inside, and how to walk into one you have never seen before without getting it wrong.",
    ja: "日本は酒を飲む場所についてきわめて細かな語彙を持ち、その区別は飾りではない。それは、酒がいくらであるか、いかに注がれるか、座れるか、料理を頼まねばならぬか、そして台の向こうの人が自ら瓶を選んだのかを告げる。この頁は野の手引である。それぞれの場所がどこから来たか、なかで何が待つか、そして一度も見たことのない一軒に、誤らずに入るにはどうすればよいか。",
    zh: "日本對「喝酒的地方」擁有異常細緻的語彙，而這些區分並非裝飾——它們告訴你這杯酒會值多少錢、會怎麼被斟出來、你能不能坐下、必不必須點餐，以及櫃檯後面那個人是不是自己挑的那些酒。本頁是一份田野指南：每一種店從何而來、走進去會遇到什麼，以及如何走進一家你從未見過的店而不出錯。"
  },
  body: [

    { t:"section", id:"origin",
      title:{ en:"From the corner of a liquor shop", ja:"酒屋の隅から", zh:"從酒鋪的一個角落開始" }, jp:"居酒の始まり",
      body:[
        { t:"p", text:{
          en:"The Japanese drinking establishment did not begin as a restaurant. It began as a shop. In early Edo, a sake dealer sold by measure into whatever vessel a customer brought, and a customer who did not want to carry it home simply drank it there, standing, at the edge of the shop. Staying to drink was called <em>izake</em> — 居酒, the drinking you do while remaining — and a shop that tolerated it became an <em>izakaya</em>: literally a stay-and-drink shop.",
          ja:"日本の酒場は料理屋として始まったのではない。店として始まったのである。江戸の初め、酒屋は客の持ち来る器へ量って売り、家まで運びたくない客は、そこで、立ったまま、店の端で飲んだ。留まって飲むことは居酒と呼ばれ、それを許す店は居酒屋——文字どおり、居て酒を飲む屋——となった。",
          zh:"日本的酒場並非以餐廳的形式起家，而是以商店的形式。江戶初期，酒鋪按量把酒賣進客人自備的容器裡，而不想把酒帶回家的客人，乾脆就在那裡、站著、在店的一角把它喝掉。留下來喝這件事被稱為「居酒」，而容許這件事的店，就成了「居酒屋」——字面意思就是「留下來喝酒的店」。" } },

        { t:"p", text:{
          en:"The shop most often given the credit is Toshimaya, at Kamakura-gashi in Kanda, whose founding is traditionally dated to 1596. It sold sake cheaply and it grilled tofu with a thick coat of miso — dengaku — to eat standing while you drank. That pairing of a cheap measured pour with one hot thing to eat is the entire seed from which the modern izakaya, the standing bar and the shop-counter drink all grew.",
          ja:"その功をもっとも多く与えられる店は、神田鎌倉河岸の豊島屋であり、その創業は伝えによって一五九六年とされる。安く酒を売り、味噌を厚く塗った豆腐を焼いた——田楽である——飲みながら立って食べるためのものであった。安く量られた一杯と、熱い食べ物一品というその取り合わせこそ、今日の居酒屋も、立ち飲みも、店先の一杯も、そこから育った種のすべてである。",
          zh:"最常被歸功於此的店是神田鎌倉河岸的豐島屋，其創業依傳統說法定在一五九六年。它便宜賣酒，並烤上厚塗味噌的豆腐——田樂——供人站著邊喝邊吃。「便宜的一份量酒」加「一樣熱食」的這個組合，就是現代居酒屋、立飲店與店頭一杯全部從中長出來的那顆種子。" } },

        { t:"grid", cols:3, cells:[
          { k:{ en:"Nawa-noren", ja:"縄のれん", zh:"繩暖簾" }, v:{ en:"The rope curtain", ja:"縄の暖簾", zh:"繩製門簾" },
            d:{ en:"A curtain of hanging rope at the door. Historically the mark of the cheapest and most informal kind of drinking shop, and still used deliberately today by places that want to say so. \"Nawa-noren\" became a byword for the whole category.",
              ja:"戸口に垂らされた縄の暖簾。歴史においては、最も安く最も気安い種の酒場の印であり、今もそう述べたい店が意図して用いる。「縄のれん」はその種全体の代名詞となった。",
              zh:"門口垂掛的繩製門簾。在歷史上是最便宜、最不拘禮的那類酒館的標記，今天仍被想要傳達這件事的店刻意沿用。「繩暖簾」後來成了整個類別的代稱。" } },
          { k:{ en:"Aka-chōchin", ja:"赤提灯", zh:"紅燈籠" }, v:{ en:"The red lantern", ja:"赤い提灯", zh:"紅色燈籠" },
            d:{ en:"A red paper lantern outside the door, lit when the place is open. It is the single most reliable signal in the Japanese street: a red lantern means drink is served, the atmosphere is unbuttoned, and the bill will not frighten you. Like nawa-noren, the word now names the category as well as the object.",
              ja:"戸口の外の赤い紙の提灯。店が開いているときに灯される。日本の街路においてただ一つ最も確かな合図である。赤提灯は、酒が出され、気は寛ぎ、勘定は驚かせぬことを意味する。縄のれんと同じく、この語は今や物であるとともに種の名でもある。",
              zh:"門外的紅色紙燈籠，開店時點亮。它是日本街頭最可靠的單一訊號：紅燈籠意味著有酒、氣氛隨性、帳單不會嚇到你。和繩暖簾一樣，這個詞如今既指那件物品，也指整個類別。" } },
          { k:{ en:"Sugidama", ja:"杉玉", zh:"杉玉" }, v:{ en:"The cedar ball", ja:"杉の玉", zh:"杉木球" },
            d:{ en:"A ball of cedar sprigs hung under the eaves. Strictly it belongs to a brewery — hung green when the new sake is ready, browning as the year turns — but shops and bars hang it too, and where it appears over a doorway it is a claim about sake in particular rather than drink in general.",
              ja:"軒下に吊るされた杉の枝の玉。厳密には蔵のものであり——新酒が成ったときに青く吊られ、年の巡りとともに褐に移る——だが店も酒場もこれを吊る。戸口の上にそれが現れるとき、それは酒一般ではなく、とりわけ日本酒についての主張である。",
              zh:"懸在屋簷下的杉枝球。嚴格說它屬於酒藏——新酒釀成時掛上翠綠的，隨著一年推移轉為褐色——但商店與酒吧也掛。當它出現在門口上方時，那是一句關於日本酒的特定宣稱，而非關於「有酒」的泛稱。" } }
        ] }
      ] },

    { t:"section", id:"taxonomy",
      title:{ en:"A field guide to the kinds", ja:"種類の野の手引", zh:"各種店的田野指南" }, jp:"店の分類",
      body:[
        { t:"p", text:{
          en:"The categories below overlap and shade into one another, and a single street will hold several. What separates them is not decor but three practical questions: is the food or the drink the point, are you expected to stay, and did anyone choose the sake on purpose.",
          ja:"以下の区分は互いに重なり、移ろいあい、一本の通りがそのいくつもを抱える。それらを分かつのは設えではなく、三つの実際の問いである。要は料理か酒か。留まることが求められるか。そして誰かが意図してその酒を選んだのか。",
          zh:"以下的分類彼此重疊、互相過渡，而同一條街上就會有好幾種。真正區分它們的不是裝潢，而是三個實際問題：重點是食物還是酒？你被預期會久留嗎？以及，有沒有人是刻意挑過這些酒的？" } },

        { t:"figure",
          caption:{
            en:"The same venues placed on the two axes that matter. Horizontal: is the kitchen or the bottle list the reason to come. Vertical: how much ceremony the room expects of you.",
            ja:"同じ店々を、意味のある二つの軸の上に置いたもの。横は、来る理由が厨房か酒の品書きか。縦は、その部屋があなたにどれほどの構えを求めるか。",
            zh:"把同一批場所放在兩條真正重要的軸上。橫軸：來訪的理由是廚房，還是酒單。縱軸：這個空間對你要求多少儀節。" },
          svg: function (lang, L) {
            var W = 720, H = 430, L0 = 88, R0 = W - 30, T0 = 34, B0 = H - 52;
            var pts = [
              { x: 0.14, y: 0.93, n:{ en:"Kakuuchi", ja:"角打ち", zh:"角打" }, a:"start" },
              { x: 0.30, y: 0.86, n:{ en:"Tachinomi", ja:"立ち飲み", zh:"立飲" }, a:"start" },
              { x: 0.62, y: 0.90, n:{ en:"Yatai", ja:"屋台", zh:"路邊攤" }, a:"start" },
              { x: 0.74, y: 0.74, n:{ en:"Taishū-sakaba", ja:"大衆酒場", zh:"大眾酒場" }, a:"end" },
              { x: 0.86, y: 0.62, n:{ en:"Izakaya", ja:"居酒屋", zh:"居酒屋" }, a:"end" },
              { x: 0.80, y: 0.34, n:{ en:"Yakitori-ya", ja:"焼き鳥屋", zh:"燒鳥店" }, a:"end" },
              { x: 0.66, y: 0.18, n:{ en:"Koryōri-ya", ja:"小料理屋", zh:"小料理屋" }, a:"end" },
              { x: 0.88, y: 0.08, n:{ en:"Kappō", ja:"割烹", zh:"割烹" }, a:"end" },
              { x: 0.20, y: 0.42, n:{ en:"Nihonshu bar", ja:"日本酒バー", zh:"日本酒吧" }, a:"start" },
              { x: 0.09, y: 0.20, n:{ en:"Sake specialist", ja:"日本酒専門店", zh:"日本酒專門店" }, a:"start" },
              { x: 0.44, y: 0.63, n:{ en:"Soba-ya", ja:"蕎麦屋", zh:"蕎麥麵店" }, a:"end" },
              { x: 0.40, y: 0.78, n:{ en:"Oden-ya", ja:"おでん屋", zh:"關東煮店" }, a:"middle" }
            ];
            function px(v) { return L0 + v * (R0 - L0); }
            function py(v) { return T0 + v * (B0 - T0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* quadrant wash */
            s += '<rect x="' + L0 + '" y="' + T0 + '" width="' + ((R0 - L0) / 2) + '" height="' + ((B0 - T0) / 2) + '" fill="#F0EDE4"/>';
            s += '<rect x="' + (L0 + (R0 - L0) / 2) + '" y="' + (T0 + (B0 - T0) / 2) + '" width="' + ((R0 - L0) / 2) + '" height="' + ((B0 - T0) / 2) + '" fill="#F0EDE4"/>';
            s += '<rect x="' + L0 + '" y="' + T0 + '" width="' + (R0 - L0) + '" height="' + (B0 - T0) + '" fill="none" stroke="#CDC6B9"/>';
            s += '<line x1="' + px(0.5) + '" y1="' + T0 + '" x2="' + px(0.5) + '" y2="' + B0 + '" stroke="#E1DCD2"/>';
            s += '<line x1="' + L0 + '" y1="' + py(0.5) + '" x2="' + R0 + '" y2="' + py(0.5) + '" stroke="#E1DCD2"/>';
            /* axis labels */
            var ax = {
              top: { en: "FORMAL · you are a guest", ja: "改まった——客としての座", zh: "正式——你是賓客" },
              bot: { en: "CASUAL · you are a customer", ja: "気安い——買い手としての座", zh: "隨性——你是顧客" },
              lef: { en: "THE BOTTLE IS THE POINT", ja: "酒が主", zh: "酒是重點" },
              rig: { en: "THE KITCHEN IS THE POINT", ja: "料理が主", zh: "廚房是重點" }
            };
            s += '<text x="' + L0 + '" y="' + (T0 - 12) + '" font-size="9.5" font-weight="600" letter-spacing="1.4" fill="#8B857C">' + L(ax.top) + '</text>';
            s += '<text x="' + L0 + '" y="' + (B0 + 20) + '" font-size="9.5" font-weight="600" letter-spacing="1.4" fill="#8B857C">' + L(ax.bot) + '</text>';
            s += '<text x="' + (L0 - 10) + '" y="' + py(0.5) + '" font-size="9.5" font-weight="600" letter-spacing="1.4" fill="#8B857C" text-anchor="middle" transform="rotate(-90 ' + (L0 - 10) + ' ' + py(0.5) + ')">' + L(ax.lef) + '</text>';
            s += '<text x="' + (R0 + 16) + '" y="' + py(0.5) + '" font-size="9.5" font-weight="600" letter-spacing="1.4" fill="#8B857C" text-anchor="middle" transform="rotate(90 ' + (R0 + 16) + ' ' + py(0.5) + ')">' + L(ax.rig) + '</text>';
            /* points */
            for (var i = 0; i < pts.length; i++) {
              var p = pts[i], X = px(p.x), Y = py(p.y);
              s += '<rect x="' + (X - 3.5) + '" y="' + (Y - 3.5) + '" width="7" height="7" fill="#7C6B52"/>';
              var tx = p.a === "start" ? X + 10 : (p.a === "end" ? X - 10 : X);
              var ty = p.a === "middle" ? Y - 11 : Y + 4;
              s += '<text x="' + tx + '" y="' + ty + '" font-size="11.5" fill="#201E1B" text-anchor="' + p.a + '">' + L(p.n) + '</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"table",
          caption:{ en:"What each kind of place is", ja:"それぞれの店が何であるか", zh:"每一種店是什麼" },
          cols:[ { en:"Place", ja:"店", zh:"店" },
                 "",
                 { en:"What it is", ja:"何であるか", zh:"是什麼" },
                 { en:"How the sake comes", ja:"酒の出方", zh:"酒怎麼上" } ],
          jpCols:[1],
          rows:[
            [ { en:"Izakaya", ja:"居酒屋", zh:"居酒屋" }, "居酒屋",
              { en:"The default. Small dishes, a long menu, tables and a counter, and an atmosphere built for a group staying two hours.", ja:"既定の店である。小皿、長い品書き、卓と台、そして二時間留まる一組のために組まれた空気。", zh:"預設選項。小菜、長長的菜單、桌位與吧檯，以及為一群人待上兩小時而打造的氣氛。" },
              { en:"Usually a short house list, poured by the glass or the 180 mL carafe. Quality is improving fast but variable.", ja:"たいていは短い自家の品書きであり、杯か一合の徳利で注がれる。質は急速に良くなりつつあるが、ばらつく。", zh:"通常是一份簡短的店內酒單，以杯或一合的德利供應。品質正快速提升，但參差不齊。" } ],
            [ { en:"Taishū-sakaba", ja:"大衆酒場", zh:"大眾酒場" }, "大衆酒場",
              { en:"The old people's izakaya: bright light, formica, a menu on strips of paper on the wall, open from the afternoon. Often decades old and beloved for it.", ja:"古い型の酒場である。明るい灯、化粧板の卓、壁の短冊の品書き、午後から開く。しばしば数十年を経ており、そのゆえに愛されている。", zh:"老派的酒場：明亮的燈光、美耐板桌面、貼在牆上的紙條菜單、下午就開門。往往已有數十年歷史，也正因此被人鍾愛。" },
              { en:"Cheap, cold or warm, often from a jug. This is where warm sake survived the decades when nobody else served it.", ja:"安く、冷やか燗か、しばしば大徳利から。誰もそれを出さなかった数十年を、燗酒が生き延びた場所である。", zh:"便宜，冰的或溫的，常常從大壺裡倒出。這裡正是溫酒熬過那段沒有人願意供應它的數十年的地方。" } ],
            [ { en:"Tachinomi", ja:"立ち飲み", zh:"立飲" }, "立ち飲み",
              { en:"Standing only, no reservation, in and out. A counter, a rail, and no chairs by design — the absence of seats is what keeps the prices where they are.", ja:"立つのみ、予約なし、入っては出る。台と手すりがあり、意図して椅子がない。席の無さこそが、値を今の場所に留めている。", zh:"只能站著、不接受訂位、來去自如。一道檯面、一根扶手，並且刻意不設椅子——沒有座位，正是價格得以維持在現在這個位置的原因。" },
              { en:"By the glass, paid as you go or on a tab. Increasingly where the most adventurous sake lists in a city are found.", ja:"杯ごとに、その都度あるいは付けで払う。町で最も冒険的な酒の品書きが見つかる場所として、ますます重んじられている。", zh:"以杯計，隨點隨付或記帳。愈來愈常是一座城市裡最大膽的清酒酒單所在之處。" } ],
            [ { en:"Kakuuchi", ja:"角打ち", zh:"角打" }, "角打ち",
              { en:"Drinking inside a liquor shop, at a corner of the counter, surrounded by the stock. Not a bar: a retailer that lets you open one now.", ja:"酒屋のなか、台の隅で、在庫に囲まれて飲むこと。酒場ではない。今ここで一本を開けさせてくれる小売である。", zh:"在酒鋪內、櫃檯的一角、被庫存包圍著喝。它不是酒吧：它是一家讓你當場開一瓶的零售商。" },
              { en:"Retail price plus a small charge, or retail price flat. The cheapest good sake in Japan is drunk this way.", ja:"小売の値に僅かを足すか、小売の値そのままで。日本で最も安い良い酒は、この仕方で飲まれる。", zh:"零售價再加一點小額費用，或就是零售價。日本最便宜的好酒就是這樣被喝掉的。" } ],
            [ { en:"Nihonshu bar", ja:"日本酒バー", zh:"日本酒吧" }, "日本酒バー",
              { en:"A bar whose subject is sake. Sixty to three hundred bottles, refrigerated, staff who taste, flights and half-measures, small plates rather than a kitchen.", ja:"主題が日本酒である酒場。六十から三百の銘柄、冷蔵され、利く店員がおり、飲み比べと半合があり、厨房ではなく小皿がある。", zh:"以清酒為主題的酒吧。六十到三百款酒、冷藏、會品飲的店員、比較套組與半合份量、小菜而非正式廚房。" },
              { en:"By the glass, by the half-glass, in flights of three, with the temperature chosen deliberately. The best place to learn quickly.", ja:"杯で、半杯で、三つ組の飲み比べで、温度を意図して選んで。速く学ぶには最も良い場所である。", zh:"以杯、以半杯、以三款一組的比較套組供應，並刻意選定溫度。要快速學習，這是最好的地方。" } ],
            [ { en:"Koryōri-ya", ja:"小料理屋", zh:"小料理屋" }, "小料理屋",
              { en:"A tiny counter restaurant, often one cook, a handful of seats, a short daily menu spoken rather than written. Quiet, adult, and not a place to be loud.", ja:"小さな台の料理屋。たいてい料理人は一人、席はいくつか、日ごとの短い品書きは書かれずに語られる。静かで、大人のもので、声を張る場所ではない。", zh:"小小的吧檯餐館，通常只有一位廚師、寥寥數個座位，每日的簡短菜單用說的而非寫的。安靜、成人向，不是喧鬧的地方。" },
              { en:"Chosen by the cook to match what is being served, and often warmed. Ask, and take the recommendation.", ja:"出されるものに合わせて料理人が選び、しばしば燗される。尋ね、そして勧めに従うがよい。", zh:"由廚師依當日菜色挑選，並常會溫過。開口問，然後聽從推薦。" } ],
            [ { en:"Kappō", ja:"割烹", zh:"割烹" }, "割烹",
              { en:"Formal counter dining — the cooking happens in front of you, the courses are set or near-set, the bill is serious. The sake list is chosen with the same care as the food.", ja:"改まった台の食事である。料理は目の前で行われ、献立は定めか、それに近く、勘定は真剣である。酒の品書きは料理と同じ心配りで選ばれている。", zh:"正式的吧檯料理——烹調在你眼前進行，菜色是套餐或接近套餐，帳單相當可觀。酒單以與料理同等的用心挑選。" },
              { en:"Poured for you, often in a glass chosen for the sake, sometimes as a pairing across the meal.", ja:"注がれ、しばしば酒のために選ばれた器で、時には食事を通じた取り合わせとして。", zh:"由店家為你斟上，往往用為該酒挑選的器皿，有時是貫穿整餐的搭配。" } ],
            [ { en:"Soba-ya", ja:"蕎麦屋", zh:"蕎麥麵店" }, "蕎麦屋",
              { en:"A noodle shop, and one of the oldest and best places to drink in Japan. The old custom is to drink for an hour over a few cold dishes and finish with the noodles.", ja:"蕎麦の店であり、日本で最も古く、最も良い飲みの場所の一つである。古い習いは、いくつかの冷たい皿を前に一時間飲み、蕎麦で締めることである。", zh:"一家麵店，也是日本最古老、最好的喝酒場所之一。老習慣是配著幾樣冷盤喝上一小時，最後以蕎麥麵作結。" },
              { en:"A small number of bottles, chosen for the food's austerity: dry, clean, often warm. Ita-wasa and yakimiso alongside.", ja:"少数の銘柄。料理の淡さに合わせて選ばれる。辛く、清く、しばしば燗である。板わさと焼き味噌を添えて。", zh:"酒款不多，依料理的清淡而選：辛口、乾淨，常是溫的。旁邊配上板山葵與烤味噌。" } ],
            [ { en:"Oden-ya", ja:"おでん屋", zh:"關東煮店" }, "おでん屋",
              { en:"One pot, simmering all evening, and a counter around it. A winter institution, and the most direct descendant of the dengaku that started all of this.", ja:"一つの鍋が夕べじゅう煮え、その周りに台がある。冬の制度であり、この全てを始めた田楽の最も直の後裔である。", zh:"一只鍋整晚滾著，圍著它一圈是吧檯。冬天的一項制度，也是開啟這一切的田樂最直接的後裔。" },
              { en:"Warm, almost always. The broth and the warm sake are the same idea served twice.", ja:"ほとんどつねに燗である。出汁と燗酒は、二度供された同じ思想である。", zh:"幾乎永遠是溫的。高湯與溫酒，是同一個想法上了兩次。" } ],
            [ { en:"Yatai", ja:"屋台", zh:"路邊攤" }, "屋台",
              { en:"A street stall with a canvas skirt and eight seats, set up at dusk and gone by morning. Fukuoka has the most famous surviving concentration of them.", ja:"幕を垂らし、八つの席を持つ街の屋台。夕暮れに立ち、朝には消える。福岡に最も名高い、今なお生きた集まりがある。", zh:"一個掛著布幔、有八個座位的街頭攤子，黃昏架起，天亮前撤走。福岡擁有最著名、至今仍存的攤販聚落。" },
              { en:"Whatever the owner keeps under the counter, and none the worse for it.", ja:"主が台の下に置いているもの。そのゆえに劣るということはない。", zh:"就是攤主放在檯面下的那些，而這絲毫無損於它。" } ],
            [ { en:"Sake specialist shop", ja:"日本酒専門店", zh:"日本酒專門店" }, "地酒専門店",
              { en:"A retailer, not a bar — but the most important room in this list. A specialist with cold storage and a tokuyakuten contract is where the good bottles actually live.",
                ja:"酒場ではなく小売である。だがこの表のなかで最も重んじられるべき部屋である。冷蔵を備え特約の契約をもつ専門店こそ、良い瓶が実際に住まう場所である。",
                zh:"它是零售商，不是酒吧——但卻是這份清單裡最重要的一個空間。一家備有冷藏、握有特約店契約的專門店，才是好酒真正住著的地方。" },
              { en:"Not poured at all, unless the shop also runs a kakuuchi counter — which many of the best now do.",
                ja:"注がれはせぬ。店が角打ちの台を併せ持たぬ限りは。もっとも、最も良い店の多くは今それを持つ。",
                zh:"根本不斟——除非這家店同時經營一個角打櫃檯；而如今最好的店裡有不少都這麼做。" } ]
          ] }
      ] },

{ t:"section", id:"kakuuchi",
      title:{ en:"Kakuuchi: drinking in the shop", ja:"角打ち——店のなかで飲む", zh:"角打——在店裡喝" }, jp:"角打ち",
      body:[
        { t:"p", text:{
          en:"Of everything in the list above, kakuuchi is the one most worth going out of your way for, and the one most likely to be missed. It is not a bar. It is a liquor shop — a retailer with a shop licence, shelves of unopened bottles for sale, a fridge, and, somewhere along the counter, a space where you may open one and drink it now.",
          ja:"上の表のいずれにも増して、角打ちこそ道を曲げてでも訪ねる値打ちがあり、そして最も見落とされやすい。それは酒場ではない。酒屋である。小売の免許をもち、売り物の未開の瓶が棚に並び、冷蔵庫があり、そして台のどこかに、今ここで一本を開けて飲んでよい場所がある。",
          zh:"上表所列的一切之中，角打是最值得繞路去的，也是最容易被錯過的。它不是酒吧，而是一家酒鋪——持有零售許可、架上排著待售的未開瓶酒、有冰箱，並且在櫃檯的某一段，有一個你可以當場開一瓶來喝的位置。" } },

        { t:"p", text:{
          en:"The name is usually explained as coming from the corner of a masu — the square wooden measure — from which you drank when a shop poured you one. Whatever the etymology, the practice is firmly associated with Kitakyūshū, and its modern form grew with heavy industry: the Yahata Steel Works opened in 1901, ran round the clock, and produced a large population of men coming off a night shift at eight in the morning who wanted one drink and did not want a restaurant. Liquor shops obliged. The custom travelled to Osaka and then Tokyo with company transfers, and it survives today most densely where it started.",
          ja:"名はふつう、枡——四角い木の量り——の角から説かれる。店が一杯を注いだとき、そこから飲んだのだと。語源が何であれ、この習いは北九州と固く結ばれており、その今の形は重い工業とともに育った。八幡製鉄所は一九〇一年に開き、昼夜を分かたず動き、朝の八時に夜勤を終える多くの男たちを生んだ。彼らは一杯を望み、料理屋を望まなかった。酒屋がそれに応えた。この習いは会社の転勤とともに大阪へ、次いで東京へ渡り、今日なお、始まった場所において最も濃く生きている。",
          zh:"這個名字通常被解釋為來自「枡」——那個方形的木製量器——的角，因為店家倒你一杯時，你就是從那個角喝的。無論詞源如何，這項實踐都與北九州緊密相連，而它的現代形態是伴隨重工業長出來的：八幡製鐵所於一九〇一年開工，日夜不停運轉，造就了一大群早上八點下夜班的男人，他們想喝一杯，卻不想上餐廳。酒鋪回應了這個需求。這個習慣隨著公司調職傳到大阪，再傳到東京，而至今仍在它最初發源的地方最為濃密。" } },

        { t:"panel", tint:"rice",
          title:{ en:"How a kakuuchi works", ja:"角打ちの作法", zh:"角打是怎麼運作的" },
          body:[
            { t:"ul", plain:true, items:[
              { en:"<strong>You pay each time.</strong> Traditionally there is no tab. You order, you pay, you drink; you order again, you pay again. It keeps the arithmetic honest and the visit short.",
                ja:"<strong>その都度払う。</strong>伝えとして付けはない。頼み、払い、飲む。また頼み、また払う。それが算術を正直に、訪れを短く保つ。",
                zh:"<strong>每次都付錢。</strong>傳統上沒有記帳。點、付、喝；再點，再付。這讓帳目誠實，也讓停留簡短。" },
              { en:"<strong>The food is what a shop can sell.</strong> Canned fish, dried squid, nuts, a boiled egg, perhaps a plate of sausage. A shop is not a kitchen and does not pretend to be.",
                ja:"<strong>肴は店が売りうるものである。</strong>缶詰、乾き物、豆、茹で卵、時に腸詰の一皿。店は厨房ではなく、そのふりもしない。",
                zh:"<strong>下酒菜就是一家店賣得出來的東西。</strong>罐頭、乾貨、堅果、水煮蛋，或許一盤香腸。店鋪不是廚房，也不假裝是。" },
              { en:"<strong>The price is the shelf price.</strong> That is the whole point. You are drinking retail, sometimes with a small opening charge, which means a bottle that would cost three times as much in a restaurant costs what it costs in the shop.",
                ja:"<strong>値は棚の値である。</strong>それこそが要である。小売で飲んでいるのであり、時に僅かな開栓の代が加わる。料理屋なら三倍する一本が、店の値のままである。",
                zh:"<strong>價格就是架上的價格。</strong>這正是重點所在。你喝的是零售價，有時再加一點開瓶費；意思是一支在餐廳要價三倍的酒，在這裡就是店裡的價。" },
              { en:"<strong>Greet the shopkeeper first.</strong> Not the other customers. A kakuuchi is somebody's shop, and the regulars will decide about you afterwards.",
                ja:"<strong>まず店の主に挨拶する。</strong>他の客にではない。角打ちは誰かの店であり、常連はあとであなたについて決める。",
                zh:"<strong>先跟店主打招呼。</strong>不是先跟其他客人。角打是某個人的店，常客會在那之後才決定要怎麼看你。" },
              { en:"<strong>Ask if you cannot see the rule.</strong> Every shop has its own — where to stand, how to pay, whether to help yourself from the fridge. Asking is normal; guessing is how you get it wrong.",
                ja:"<strong>掟が見えぬなら尋ねる。</strong>いずれの店も自らの掟をもつ。どこに立つか、いかに払うか、冷蔵庫から自ら取ってよいか。尋ねることは当たり前であり、推し量ることが誤る道である。",
                zh:"<strong>看不出規矩就開口問。</strong>每家店都有自己的一套——站哪裡、怎麼付、能不能自己開冰箱拿。問是正常的；用猜的才是出錯的方式。" }
            ] }
          ] },

        { t:"note", label:{ en:"Why the licence matters", ja:"免許がなぜ関わるか", zh:"為什麼許可有關係" },
          text:{
            en:"A kakuuchi holds a retail licence, not only a restaurant one, and that difference is visible on the shelf: it can sell you a sealed bottle to take home, which a bar cannot. So the natural way to use one is to drink a glass of something you have not tried, decide, and buy the bottle on the way out. No other kind of venue lets you do that.",
            ja:"角打ちは料理屋の許しのみならず小売の免許をもち、その差は棚の上に見える。封じた一本を家へ持ち帰らせることができるのであり、酒場にはそれができぬ。ゆえにこれを用いる自然な仕方は、試したことのないものを一杯飲み、決め、帰りしなに瓶を買うことである。他のいかなる種の店も、それをさせてはくれない。",
            zh:"角打持有的是零售許可，不只是餐飲許可，而這個差別就擺在架上：它可以賣你一支未開封的酒帶回家，酒吧不行。因此使用它最自然的方式是：喝一杯你沒試過的，做出判斷，然後離開時把那支酒買走。沒有任何其他類型的店能讓你這麼做。" } }
      ] },

    { t:"section", id:"tachinomi",
      title:{ en:"Standing up, again", ja:"ふたたび立って飲む", zh:"再一次站著喝" }, jp:"立ち飲みの復活",
      body:[
        { t:"p", text:{
          en:"Standing to drink is where all of this began, and it came back. From the early 2000s the tachinomi spread out of its working-class origins and into city centres, and by now it is one of the most interesting parts of the Japanese drinking landscape — not because standing is pleasant, but because of what removing the chairs does to the economics.",
          ja:"立って飲むことこそすべての始まりであり、そしてそれは戻ってきた。二〇〇〇年代の初めより、立ち飲みは労働の街という出自を離れて都心へ広がり、今や日本の飲みの風景のうち最も面白い部分の一つである。立つことが心地よいからではない。椅子を取り除くことが、算術に何をするかのゆえである。",
          zh:"站著喝正是這一切的起點，而它又回來了。從二〇〇〇年代初開始，立飲店走出它勞動階級的出身、進入市中心，如今已是日本飲酒版圖中最有趣的一塊——不是因為站著舒服，而是因為拿掉椅子這件事對經濟結構做了什麼。" } },

        { t:"grid", cols:2, cells:[
          { h:{ en:"What standing buys the shop", ja:"立つことが店に与えるもの", zh:"站著替店家換來什麼" }, jp:"回転",
            d:{ en:"Two to three times the customers through the same floor area in an evening, and a much shorter average stay. That turnover is what allows a tiny standing bar to keep sixty open bottles moving fast enough that none of them go stale — which is precisely the problem that stops a seated restaurant from carrying an interesting list.",
              ja:"同じ床面積を通る客が一夕に二倍から三倍となり、平均の滞在ははるかに短い。その回転こそが、小さな立ち飲みに六十本の開いた瓶を、いずれも古びぬ速さで動かし続けさせる。それはまさに、座らせる料理屋が面白い品書きを持てぬ理由である問いである。",
              zh:"同樣的樓地板面積，一個晚上能通過兩到三倍的客人，而平均停留時間短得多。正是這樣的翻桌率，讓一家小小的立飲店能把六十支開瓶酒轉得夠快，快到沒有一支會走味——而那恰恰是讓有座位的餐廳無法擁有一份有趣酒單的那個難題。" } },
          { h:{ en:"What standing buys you", ja:"立つことがあなたに与えるもの", zh:"站著替你換來什麼" }, jp:"自由",
            d:{ en:"Permission to leave. No booking, no course, no obligation to fill an evening. You can drink two glasses of something rare, pay, and walk out after twenty-five minutes without anyone thinking it odd — which turns a night out into three or four short visits to different places, and is by some distance the fastest way to learn a city's sake.",
              ja:"去ってよいという許しである。予約なく、献立なく、一夕を埋める義もない。稀なものを二杯飲み、払い、二十五分で出てゆけて、誰もそれを妙とは思わぬ。それは一夜の外出を、異なる場所への三つか四つの短い訪れに変える。そして町の酒を学ぶ、群を抜いて速い道である。",
              zh:"離開的許可。不用訂位、沒有套餐、也沒有把一整晚填滿的義務。你可以喝兩杯稀有的酒、結帳，二十五分鐘後走人，而沒有人會覺得奇怪——這把一個晚上變成對三、四個不同地方的短暫造訪，而且是認識一座城市清酒版圖遠遠最快的方法。" } }
        ] },

        { t:"p", text:{
          en:"The consequence for sake specifically is large. A restaurant with fifty seats and a two-hour sitting cannot justify opening a rare bottle it may not sell out; a standing bar with a fast counter can, and does. If you want to taste something you have only read about, the standing bar is where it will be open.",
          ja:"日本酒にとってその帰結は大きい。五十の席と二時間の座を持つ料理屋は、売り切れぬかもしれぬ稀な一本を開けることを正当化できぬ。速い台をもつ立ち飲みはそれができ、そして実際にする。読んだことしかないものを味わいたいと願うなら、それが開いているのは立ち飲みである。",
          zh:"這對清酒的後果特別大。一家有五十個座位、翻檯兩小時的餐廳，無法為一支可能賣不完的稀有酒開瓶找到理由；一家有著快速吧檯的立飲店可以，而且確實會這麼做。如果你想嘗一款你只在書上讀過的酒，它會是在立飲店裡被打開的。" } }
      ] },

    { t:"section", id:"how",
      title:{ en:"Walking in and ordering", ja:"入って、頼む", zh:"走進去，然後點" }, jp:"入り方",
      body:[
        { t:"steps", items:[
          { n:"1", title:{ en:"Read the outside", ja:"外を読む", zh:"讀門面" }, jp:"店構え",
            text:{ en:"A red lantern and a rope curtain say cheap and cheerful. A plain wooden door with a small ceramic plaque and no menu says expensive and probably by introduction. A plastic food-sample case says a chain, or a place that expects tourists — neither of which is a criticism, but both tell you what to expect. A cedar ball says somebody here cares about sake.",
              ja:"赤提灯と縄のれんは、安く気安いと述べる。品書きのない、小さな陶の札のついた無地の木の戸は、高く、おそらくは紹介によると述べる。食品見本の合成樹脂の箱は、鎖の店か、旅人を待つ店であると述べる。いずれも難ではないが、いずれも何を待つべきかを告げる。杉玉は、ここに日本酒を思う者がいると述べる。",
              zh:"紅燈籠加繩暖簾，說的是便宜而歡快。一扇沒有菜單、只掛著小陶牌的素木門，說的是昂貴，而且多半需要引介。塑膠食品模型櫃說的是連鎖店，或是預期會有觀光客的店——這兩者都不是批評，但都告訴你該期待什麼。杉玉說的是：這裡有人在乎日本酒。" } },
          { n:"2", title:{ en:"Say how many of you there are", ja:"人数を告げる", zh:"報上人數" }, jp:"人数",
            text:{ en:"Hold up fingers if the words are not there. In a small place this is the entire negotiation, and the answer will be a seat or a shake of the head, without offence in either direction.",
              ja:"言葉がなければ指を立てればよい。小さな店においてはこれが交渉の全てであり、答えは席か、首を横に振ることであり、いずれの向きにも角は立たない。",
              zh:"如果語言不通，就比手指。在小店裡，這就是全部的交涉；答案不是一個座位，就是搖搖頭，而任一方向都不帶冒犯。" } },
          { n:"3", title:{ en:"The otōshi is not a scam", ja:"お通しは詐りではない", zh:"お通し不是坑" }, jp:"お通し",
            text:{ en:"A small dish arrives unordered, and a few hundred yen appears on the bill for it. This is the seat charge, in edible form, and it is standard in izakaya. Declining it is possible in some places and awkward in most; treat it as the cover charge it is.",
              ja:"頼まぬ小皿が来て、勘定に数百円が現れる。これは席の代であり、食べうる形をとっている。居酒屋においては当たり前である。断りうる店もあり、ほとんどの店では気まずい。それが実際にそうであるところの席料として扱えばよい。",
              zh:"一小碟你沒點的東西送上來，帳單上因此多出幾百日圓。這就是座位費，只是以可食用的形式出現，在居酒屋是標準做法。有些店可以婉拒，多數店裡會有點尷尬；就把它當成它實際上就是的那個入座費。" } },
          { n:"4", title:{ en:"Order sake by the unit, not the bottle", ja:"瓶ではなく単位で頼む", zh:"以單位點酒，而非以瓶" }, jp:"一合・半合",
            text:{ en:"Ichi-gō is 180 mL, the classic carafe; han-gō is ninety, which many good places now pour and which lets you try three things instead of one. Gurasu — a glass — is usually 90 to 120. Asking for han-gō in a place that offers it is a small signal that you know what you are doing.",
              ja:"一合は百八十ミリリットル、古典の徳利である。半合は九十であり、今や多くの良い店がこれを注ぐ。一つの代わりに三つを試させてくれる。グラスはたいてい九十から百二十である。半合を出す店でそれを頼むことは、心得ているという小さな合図である。",
              zh:"一合是一百八十毫升，經典的德利份量；半合是九十，如今許多好店都會這樣倒，讓你能試三款而不是一款。「グラス」（一杯）通常是九十到一百二十。在有供應半合的店裡點半合，是一個「你懂門道」的小小訊號。" } },
          { n:"5", title:{ en:"Ask the one useful question", ja:"役に立つただ一つの問い", zh:"問那一個有用的問題" }, jp:"おすすめ",
            text:{ en:"Not \"what is good\", which invites the safest answer in the house. Ask what is open now, or what goes with what you have ordered, or — best of all — what the person behind the counter would drink themselves tonight. A place worth being in will answer the third question honestly and enjoy being asked.",
              ja:"「何が良いか」ではない。それは店で最も無難な答えを招く。今開いているものを尋ねよ。あるいは頼んだものに合うものを。あるいは——これが最も良い——台の向こうの人が今宵自ら飲むならば何かを。居るに値する店は、三つめの問いに正直に答え、尋ねられたことを喜ぶ。",
              zh:"別問「哪個好」，那只會招來店裡最保險的答案。問現在開了哪幾支；或問跟你點的菜搭什麼；或者——這是最好的——問櫃檯後面那個人今晚自己會喝什麼。一家值得待的店會誠實回答第三個問題，並且樂於被問。" } },
          { n:"6", title:{ en:"Paying", ja:"払う", zh:"結帳" }, jp:"お会計",
            text:{ en:"In most places you pay at the till on the way out, not at the table. In a kakuuchi you have already paid. Tipping does not exist and attempting it causes confusion rather than pleasure.",
              ja:"ほとんどの店では、卓ではなく、出しなに帳場で払う。角打ちではすでに払っている。心付けは存在せず、試みることは喜びではなく戸惑いを生む。",
              zh:"多數店家是離開時在收銀台結帳，而不是在桌邊。在角打，你早就付過了。小費並不存在，嘗試給小費帶來的是困惑而非喜悅。" } }
        ] },

        { t:"note", label:{ en:"On places that turn you away", ja:"断られる店について", zh:"關於會婉拒你的店" },
          text:{
            en:"A small counter with eight seats may say it is full when it is not, and this is not usually about you being foreign. A room like that runs on the assumption that everyone present can be talked to, and an owner working alone may simply not have the capacity that night. Take the refusal lightly, and go to the standing bar two doors down, which will be delighted to see you.",
            ja:"八席の小さな台は、満ちていなくとも満ちていると述べることがある。それはたいてい、あなたが外の者であることについてではない。そのような部屋は、居合わせる誰とも語りうるという前提の上で動いており、一人で働く主にはその夜その余力がないだけかもしれぬ。断りは軽く受け、二軒先の立ち飲みへ行くがよい。そこはあなたを見て喜ぶ。",
            zh:"一家只有八個座位的小吧檯，可能在還有空位時說客滿，而這通常不是因為你是外國人。那樣的空間運作的前提是「在場的每個人都能被搭話」，而一位獨自工作的店主，那晚可能就是沒有那個餘力。把婉拒看輕些，去兩個門面之外的立飲店，那裡會很高興看到你。" } }
      ] },

    { t:"section", id:"outside",
      title:{ en:"The izakaya as an export", ja:"輸出品としての居酒屋", zh:"作為輸出品的居酒屋" }, jp:"海外の酒場",
      body:[
        { t:"p", text:{
          en:"The izakaya travelled abroad well before good sake did, which is why so many people outside Japan met the room before they met the drink. For twenty years the standard overseas izakaya poured one hot sake and one cold one and put its effort into the food; that has changed sharply in the last decade, and the specialist sake bar now exists in most large cities.",
          ja:"居酒屋は、良い酒よりはるかに早く海を渡った。ゆえに日本の外の多くの人は、飲み物より先にその部屋と出会った。二十年のあいだ、海の外の並の居酒屋は熱い酒を一つと冷たい酒を一つ注ぎ、力は料理に注いだ。この十年でそれは鋭く変わり、日本酒の専門の酒場は今やほとんどの大きな町に存する。",
          zh:"居酒屋遠早於好清酒就出了國，這正是為什麼日本以外有那麼多人，是先認識了這個空間，才認識這種酒。有二十年的時間，海外的標準居酒屋供應一款熱酒與一款冷酒，並把力氣花在料理上；這在過去十年裡急劇改變，如今多數大城市都有了清酒專門酒吧。" } },

        { t:"defs", items:[
          { term:{ en:"Taipei", ja:"台北", zh:"臺北" }, jp:"台北",
            def:{ en:"The densest sake scene outside Japan relative to population, built on a century of continuous familiarity rather than a recent import. Japanese-style izakaya, jōkyū counters and dedicated sake bars all coexist, and the shops carry allocations that would be respectable in Tokyo.",
              ja:"人口に比して日本の外で最も濃い日本酒の場であり、近年の輸入ではなく、一世紀の途切れぬ馴染みの上に建っている。日本風の居酒屋、上級の台、日本酒に専らの酒場が並び立ち、酒販店は東京でも立派とされる配分を抱える。",
              zh:"以人口比例而言，是日本境外最密集的清酒場景，建立在一個世紀不曾中斷的熟悉之上，而非近年的輸入。日式居酒屋、高階吧檯與清酒專門酒吧並存，而店家握有的配額，在東京也算得上體面。" } },
          { term:{ en:"New York and London", ja:"ニューヨークとロンドン", zh:"紐約與倫敦" }, jp:"英米",
            def:{ en:"Where the sake bar is a wine-bar format applied to sake: a long by-the-glass list, a coravin or nitrogen system, staff with certifications, and a serious markup. The lists are often excellent and the temperatures often too cold.",
              ja:"日本酒の酒場が、葡萄酒の酒場の型を日本酒に当てはめた形をとる場所である。長い杯売りの品書き、栓を抜かずに注ぐ器具や窒素の仕組み、資格をもつ店員、そして真剣な上乗せ。品書きはしばしば秀でており、温度はしばしば冷たすぎる。",
              zh:"在這裡，清酒吧是把葡萄酒吧的形式套用到清酒上：長長的單杯酒單、取酒器或氮氣系統、持有證照的店員，以及認真的加價。酒單往往極為出色，而溫度往往太冷。" } },
          { term:{ en:"Paris", ja:"パリ", zh:"巴黎" }, jp:"仏",
            def:{ en:"A distinctive strand, because French sommeliers arrived at sake through wine and brought the gastronomic apparatus with them: decanting, glassware chosen by aroma, and sake placed inside a tasting menu rather than beside it. Some of the most interesting thinking about serving sake with non-Japanese food is happening here.",
              ja:"独自の筋である。仏の給仕人は葡萄酒を通じて日本酒に至り、美食の道具立てを携えてきた。移し替え、香りによって選ばれた器、そして献立の傍らではなくその内に置かれた日本酒である。日本の外の料理と日本酒を合わせることについて、最も面白い考えのいくつかがここで生まれている。",
              zh:"這是一條獨特的支線，因為法國侍酒師是透過葡萄酒抵達清酒的，並把整套美食裝置一併帶來：換瓶醒酒、依香氣挑選的酒器，以及把清酒放進品嘗菜單「之內」而非「旁邊」。關於清酒與非日本料理的搭配，一些最有意思的思考正在這裡發生。" } }
        ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"kanpai.html\">Drinking Together</a> for the etiquette of the table, <a href=\"service.html\">Serving It Professionally</a> for the trade's side of the counter, <a href=\"visiting.html\">Visiting &amp; Buying</a> for breweries and shops, <a href=\"serving.html\">Temperature &amp; Vessels</a> for what to ask for once you are seated.",
          ja:"関連——卓の作法は<a href=\"kanpai.html\">共に飲むこと</a>、台の向こう側は<a href=\"service.html\">商いとして供する</a>、蔵と店は<a href=\"visiting.html\">蔵を訪ねる</a>、座ってから何を頼むかは<a href=\"serving.html\">温度と器</a>。",
          zh:"相關：餐桌上的禮節見<a href=\"kanpai.html\">一起喝酒這件事</a>；櫃檯另一側的視角見<a href=\"service.html\">作為專業的供酒</a>；酒藏與商店見<a href=\"visiting.html\">訪藏與選購</a>；坐下之後該點什麼見<a href=\"serving.html\">溫度與酒器</a>。" } }
      ] },

    { t:"related", items:[
      { href:"visiting.html", why:{ en:"How to find and enter each of these.", ja:"それぞれをどう探し、どう入るか。", zh:"怎麼找到它們，以及怎麼進去。" } },
      { href:"service.html", why:{ en:"The same rooms seen from behind the counter.", ja:"同じ部屋を、台の内側から見る。", zh:"同樣的空間，從吧檯內側看。" } },
      { href:"kanpai.html", why:{ en:"What happens once you are sitting down.", ja:"座ってのちに起きること。", zh:"坐下來之後會發生的事。" } },
      { href:"itineraries.html", why:{ en:"Several of them strung into a route.", ja:"それらをいくつか繋いだ道筋。", zh:"把其中幾個串成一條路線。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- service */
SAKE.pages["service"] = {
  kicker: { en: "Drinking · 12", ja: "飲む · 12", zh: "品飲 · 12" },
  title:  { en: "Serving It Professionally", ja: "商いとして供する", zh: "作為專業的供酒" },
  jp: "店で出す",
  lede: {
    en: "Written for anyone who has to put sake on a list and pour it for money — a restaurant, a bar, a shop with a tasting counter, a hotel. Most sake advice is written for drinkers, and the problems of the trade are different: a list has to earn its shelf space, an open bottle has a clock on it, and a member of staff has to be able to describe a bottle they may never have tasted. The physics is on the <a href=\"serving.html\">Temperature &amp; Vessels</a> page; this is the commerce.",
    ja: "酒を品書きに載せ、代を取って注がねばならぬ者のために書いた。料理店、酒場、利き酒の台を持つ小売、宿である。日本酒についての助言のほとんどは飲み手のために書かれており、商いの問題は異なる。品書きは棚の場所を稼がねばならず、開いた瓶には時計がつき、そして働き手は、味わったことのないかもしれぬ一本を語れねばならない。物理は<a href=\"serving.html\">温度と器</a>の頁にある。ここにあるのは商いである。",
    zh: "本頁是為那些必須把清酒放上酒單、並收錢斟出的人所寫——餐廳、酒吧、設有品飲檯的商店、飯店。多數清酒建議是為飲者而寫的，而業界的問題並不相同：一份酒單必須賺得它所占的貨架空間、一瓶開了的酒身上帶著一個時鐘，而工作人員必須能描述一瓶自己可能從未嚐過的酒。物理原理在<a href=\"serving.html\">溫度與酒器</a>一頁；這裡談的是生意。"
  },
  body: [

    { t:"section", id:"list",
      title:{ en:"Building a list that works", ja:"働く品書きを組む", zh:"設計一份真正管用的酒單" }, jp:"品揃え",
      body:[
        { t:"p", text:{
          en:"The most common mistake is a list of twenty sakes that are all the same sake. Aromatic, chilled, junmai ginjō, 15%, from four different prefectures, priced within twenty per cent of each other. It looks generous and it gives a guest no choice at all.",
          ja:"最も多い誤りは、すべてが同じ酒である二十の酒の品書きである。香り高く、冷やされ、純米吟醸、十五度、四つの異なる県から、互いに二割の内の値で。豊かに見え、そして客に何の選びも与えない。",
          zh:"最常見的錯誤，是一份「二十款清酒其實都是同一款酒」的酒單：芳香型、冰鎮、純米吟釀、十五度，來自四個不同的縣，價格彼此相差不到兩成。它看起來很豐富，實際上沒有給客人任何選擇。" } },
        { t:"defs", items:[
          { term:{ en:"Six positions before twenty labels", ja:"二十の銘柄より先に六つの位置", zh:"在二十個品牌之前，先想六個位置" }, jp:"骨組み", romaji:"honegumi",
            def:{ en:"A list is a set of positions, and the labels fill them. The six that cover almost every request: something light and dry to open with; something aromatic for a guest who wants a wine-like experience; something rich and savoury for food with weight; something with visible acidity — kimoto or yamahai — for anything fatty; something to serve warm, which almost nobody stocks and which will distinguish you immediately; and something sparkling, for the table that would otherwise order Champagne. Six bottles chosen this way outperform twenty chosen by reputation.",
              ja:"品書きとは位置の一組であり、銘柄はそれを埋めるものである。ほとんどあらゆる求めを覆う六つはこうである。始めるための軽く辛いもの。葡萄酒に似た経験を望む客のための香り高いもの。重みのある料理のための厚く旨みのあるもの。脂のあるもののための、目に見える酸を持つもの——生酛か山廃である。燗で出すもの。ほとんど誰も置いておらず、置けば直ちに他と分かたれる。そして発泡するもの。それがなければシャンパーニュを頼むはずの卓のためである。この仕方で選ばれた六本は、評判で選ばれた二十本に勝る。",
              zh:"一份酒單是一組「位置」，而品牌只是用來填滿它們。能涵蓋幾乎所有需求的六個位置是：一款輕盈偏辛、用來開場的；一款芳香型、給想要類葡萄酒體驗的客人；一款厚實鮮味足、配得上有份量的料理；一款帶明顯酸度的——生酛或山廢——用來對付油脂；一款要溫熱供應的，這幾乎沒有人備貨，而備了會立刻讓你與眾不同；以及一款氣泡的，給那些否則就會點香檳的桌次。以這種方式挑出的六瓶，勝過依名氣挑出的二十瓶。" } },
          { term:{ en:"Price the format, not just the bottle", ja:"瓶だけでなく形に値をつける", zh:"為規格定價，而不只是為酒瓶定價" }, jp:"グラス売り", romaji:"gurasu-uri",
            def:{ en:"By-the-glass is where sake is won or lost. A 720 mL bottle yields five 120 mL glasses or eight 90 mL ones, and the second arithmetic is usually the better business and the better guest experience — smaller pours mean a guest tries three sakes instead of committing to one. Price so that a flight of three small glasses costs about the same as one large one, and most tables will take the flight.",
              ja:"杯売りこそ、日本酒が勝ちも負けもする場所である。七百二十ミリリットルの瓶は百二十ミリリットルの杯を五つ、あるいは九十ミリリットルの杯を八つ与える。そして第二の算術がたいてい商いとしても客の経験としても優れている。注ぎが少なければ、客は一つに決める代わりに三つを試す。小さな三杯の組が大きな一杯とほぼ同じ値になるよう定めれば、ほとんどの卓は組を取る。",
              zh:"單杯銷售正是清酒的勝負所在。一瓶七百二十毫升可以倒出五杯一百二十毫升，或八杯九十毫升——而第二種算法通常在生意上與客人體驗上都更好：份量小，客人就會嘗三款，而不是只認定一款。把價格設定成「三小杯的套組約等於一大杯」，那麼多數桌次都會選套組。" } },
          { term:{ en:"The one line a menu needs", ja:"品書きに要る一行", zh:"酒單需要的那一行" }, jp:"書き方", romaji:"kakikata",
            def:{ en:"Not the polishing ratio, the sake meter value and the acidity. Those are for the back of the list. What a guest needs is one sentence in their own language saying what the sake is like and what it goes with — 'dry, mineral, cold, for oysters' does more work than 60% / +5 / 1.4 ever will. Put the technical figures underneath in small type for the people who want them, and never make a guest decode a number to order a drink.",
              ja:"精米歩合でも日本酒度でも酸度でもない。それらは品書きの裏のためのものである。客に要るのは、その酒がどのようであり何に合うかを、その人の言葉で述べる一文である。「辛口、鉱物的、冷やして、牡蠣に」は、六十パーセント・プラス五・一・四が果たしうるよりはるかに多くを果たす。技術の数はそれを望む人のために小さな字で下に置き、飲み物を頼むために客に数を解かせてはならない。",
              zh:"不是精米步合、日本酒度與酸度——那些屬於酒單的背面。客人需要的，是一句用他們自己的語言說明「這酒是什麼樣子、配什麼喝」的話：「辛口、礦物感、冰鎮、配生蠔」所發揮的作用，遠勝過 60% ／ +5 ／ 1.4 所能做到的。技術數據可以用小字放在下方給想看的人；但永遠不要讓客人為了點一杯酒而去破解一組數字。" } }
        ] }
      ] },

    { t:"section", id:"open",
      title:{ en:"The clock on an open bottle", ja:"開いた瓶の時計", zh:"開瓶後的時鐘" }, jp:"開栓後",
      body:[
        { t:"p", text:{
          en:"This is the operational problem that stops most restaurants stocking sake seriously, and it has straightforward answers.",
          ja:"これこそ、ほとんどの料理店が日本酒を本気で置くことをやめさせる運営の問題であり、そしてそれには素直な答えがある。",
          zh:"這正是讓多數餐廳不敢認真備清酒的營運難題，而它其實有直接的解法。" } },
        { t:"figure",
          caption:{
            en:"The clock that decides whether a restaurant can stock sake seriously. The solid part of each bar is the window in which the bottle is still the sake you bought; the pale part is the stretch where it is drinkable but drifting. Note that the order runs opposite to price: the most expensive bottle on the list has the shortest clock, and the yamahai junmai you can pour all week costs a third as much. A by-the-glass programme built the other way round loses money quietly and blames the category.",
            ja:"料理店が日本酒を本気で置けるかどうかを決める時計。各々の棒の濃い部分は、その瓶がなお買ったときの酒である期間であり、淡い部分は、飲めはするが離れてゆく区間である。順序が値段と逆に走ることに注意されたい。品書きで最も高い一本が最も短い時計を持ち、一週間注ぎ続けられる山廃の純米は、その三分の一の値である。逆向きに組まれた杯売りは、静かに損を出し、そして日本酒という区分のせいにする。",
            zh:"這只時鐘，決定了一家餐廳能不能認真備清酒。每條長條的深色部分，是這瓶酒仍然是「你當初買的那款酒」的期間；淺色部分則是還能喝、但正在偏離的區間。請注意順序與價格恰好相反：酒單上最貴的那一瓶，時鐘最短；而可以整週慢慢倒的山廢純米，價格只有三分之一。反過來設計的單杯酒單，會安靜地虧錢，然後怪罪整個品類。" },
          svg: function (lang, L) {
            var W = 760, H = 380, X0 = 210, X1 = 700, Y0 = 56, RH = 42, MAX = 30;
            function px(d) { return X0 + d / MAX * (X1 - X0); }
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
            var rows = [
              { lo:2, hi:3, jp:"生酒", n:{ en:"nama", ja:"なまざけ", zh:"生酒" },
                g:{ en:"everything goes, unpredictably", ja:"すべてが、読みがたく", zh:"全部走掉，且無法預測" } },
              { lo:3, hi:5, jp:"香りの高い吟醸", n:{ en:"aromatic ginjō", ja:"かおりのたかいぎんじょう", zh:"芳香型吟釀" },
                g:{ en:"the aroma, and it goes fast", ja:"香りが、そして速く", zh:"香氣，而且很快" } },
              { lo:7, hi:14, jp:"純米・本醸造", n:{ en:"junmai, honjōzō", ja:"じゅんまい・ほんじょうぞう", zh:"純米、本釀造" },
                g:{ en:"little — often better on day three", ja:"僅か。三日目にはむしろ良い", zh:"很少——第三天往往更好" } },
              { lo:14, hi:28, jp:"生酛・山廃・古酒", n:{ en:"kimoto, yamahai, koshu", ja:"きもと・やまはい・こしゅ", zh:"生酛、山廢、古酒" },
                g:{ en:"nothing the acid cannot carry", ja:"酸が支えきる", zh:"酸度撐得住，什麼都不走" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + rows.length * RH, g, i, k;
            for (g = 7; g <= MAX; g += 7) {
              s += '<line x1="' + px(g).toFixed(1) + '" y1="' + (Y0 - 10) + '" x2="' + px(g).toFixed(1) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(g).toFixed(1) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], y = Y0 + i * RH;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 15) + '" text-anchor="end" font-size="12" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 28) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(r.g) + '</text>';
              s += '<rect x="' + X0 + '" y="' + (y + 4) + '" width="' + (px(r.lo) - X0).toFixed(1) + '" height="20" fill="#C0AF8E" stroke="#B4AC9C"/>';
              s += '<rect x="' + px(r.lo).toFixed(1) + '" y="' + (y + 4) + '" width="' + (px(r.hi) - px(r.lo)).toFixed(1) + '" height="20" fill="#EDE5D2" stroke="#DED8CB"/>';
              s += '<text x="' + (px(r.hi) + 9).toFixed(1) + '" y="' + (y + 18) + '" font-size="10.5" fill="#55504A">' + r.lo + '–' + r.hi + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "開栓からの日数・立てて冷蔵" : lang === "zh" ? "自開瓶起的天數・直立冷藏" : "DAYS AFTER OPENING, REFRIGERATED AND UPRIGHT") + '</text>';
            /* three fixes */
            var FY = BOT + 78, fixes = [
              { jp:"小瓶", t:{ en:"half bottles, so the clock is shorter than the shelf life", ja:"三百ミリの瓶。時計が棚の寿命より短くなる", zh:"改用小瓶，讓時鐘短於保存期限" } },
              { jp:"不活性気体", t:{ en:"argon — the same spray the wine list already owns", ja:"アルゴン。葡萄酒の品書きが既に持つもの", zh:"氬氣——葡萄酒酒單早已有的那一罐" } },
              { jp:"樽", t:{ en:"a keg, for the one you pour most: no air at all", ja:"最も注ぐ一つには樽を。空気に触れない", zh:"倒最多的那款上酒桶：完全不接觸空氣" } }
            ];
            for (i = 0; i < fixes.length; i++) {
              var fx = 30 + i * 244;
              s += '<rect x="' + fx + '" y="' + FY + '" width="226" height="52" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (fx + 14) + '" y="' + (FY + 20) + '" font-size="12" fill="#201E1B">' + fixes[i].jp + '</text>';
              var fl = wrap(L(fixes[i].t), cjk, cjk ? 17 : 34);
              for (k = 0; k < fl.length && k < 2; k++) {
                s += '<text x="' + (fx + 14) + '" y="' + (FY + 34 + k * 13) + '" font-size="9" fill="#8B857C">' + fl[k] + '</text>';
              }
            }
            s += '<text x="30" y="' + (FY - 12) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "時計を止める三つの手当て" : lang === "zh" ? "讓時鐘停下的三個做法" : "THREE WAYS TO STOP THE CLOCK") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{ en:"How long an opened bottle is worth serving", ja:"開けた瓶を供する値打ちのある期間", zh:"一瓶已開封的酒還值得供應多久" },
          cols:[{ en:"Type", ja:"種", zh:"類型" }, { en:"Refrigerated, upright", ja:"立てて冷蔵", zh:"直立冷藏" }, { en:"What goes first", ja:"最初に失われるもの", zh:"最先失去的東西" }],
          keyCol:0,
          rows:[
            [{ en:"Aromatic ginjō", ja:"香りの高い吟醸", zh:"芳香型吟釀" }, { en:"3–5 days", ja:"三〜五日", zh:"3–5 天" },
             { en:"The aroma, and it goes fast. The esters that define the style are volatile and oxidise; a daiginjō a week open is a perfectly nice sake that is no longer the sake you bought. Pour these first and price them to move.", ja:"香りであり、それは速く失われる。この型を定めるエステルは揮発し酸化する。一週間開いた大吟醸は申し分なく良い酒だが、もはや買った酒ではない。これを先に注ぎ、動くよう値をつけられたい。", zh:"香氣，而且消失得很快。定義這種風格的酯類既揮發又易氧化；開了一週的大吟釀仍是一款很不錯的酒，但已經不是你當初買的那款。請優先倒這些，並以能快速賣完的方式定價。" }],
            [{ en:"Junmai, honjōzō", ja:"純米・本醸造", zh:"純米、本釀造" }, { en:"1–2 weeks", ja:"一〜二週", zh:"1–2 週" },
             { en:"Very little, and often it improves for the first few days as the sake opens. These are the workhorses of a by-the-glass programme precisely because they are forgiving.", ja:"ほとんど何も失われず、しばしば最初の数日は酒が開いて良くなる。杯売りの働き者であるのは、まさにそれが寛容だからである。", zh:"損失很少，而且最初幾天往往還會因為酒體展開而變得更好。它們之所以是單杯供應的主力，正是因為它們寬容。" }],
            [{ en:"Kimoto, yamahai, koshu", ja:"生酛・山廃・古酒", zh:"生酛、山廢、古酒" }, { en:"2–4 weeks", ja:"二〜四週", zh:"2–4 週" },
             { en:"Almost nothing. High acidity and developed flavour are exactly the qualities that survive air. A yamahai junmai is the single most robust thing you can put on a by-the-glass list, and it is also the bottle that will still taste right at the end of a slow week.", ja:"ほとんど何も。高い酸と育った味は、まさに空気に耐える性質である。山廃の純米は杯売りの品書きに置きうる最も頑健なものであり、そして動きの鈍い一週の終わりにもなお正しく味わえる一本でもある。", zh:"幾乎沒有損失。高酸度與已展開的風味，正是能扛住空氣的特質。山廢純米是你能放上單杯酒單中最強韌的一款，也是在一個生意清淡的一週結束時，嚐起來依然對味的那一瓶。" }],
            [{ en:"Nama", ja:"生酒", zh:"生酒" }, { en:"2–3 days", ja:"二〜三日", zh:"2–3 天" },
             { en:"Everything, and unpredictably. Unpasteurised sake still contains live enzymes, and once it is open and warming between pours it moves quickly and not always in a good direction. Stock nama only if you will sell the bottle in an evening, or not at all.", ja:"すべてを、そして読みがたく。火入れをしていない酒はなお生きた酵素を含み、開いて注ぐたびに温まれば、速く、そして必ずしも良い方向へではなく動く。一晩で売り切れるのでなければ、生酒は置かぬ方がよい。", zh:"全部，而且無法預測。未經火入的酒仍含有活性酵素；一旦開瓶，並在每次斟酒之間回溫，它就會快速變化，而且不一定往好的方向。除非你能在一個晚上賣完整瓶，否則就別備生酒。" }]
          ] },
        { t:"defs", items:[
          { term:{ en:"Three cheap fixes", ja:"安上がりな三つの手当て", zh:"三個便宜的解法" }, jp:"対策", romaji:"taisaku",
            def:{ en:"Half bottles for anything aromatic, so the clock is shorter than the shelf life. Inert gas — the same argon spray a wine list already owns — which works on sake exactly as it works on wine. And a keg for the one sake you pour most, which removes the problem entirely because the sake never meets air at all. A restaurant that pours a lot of one junmai and cannot justify the waste on the rest should start with a keg and a rack of half bottles.",
              ja:"香りのあるものには三百ミリリットルの瓶を。時計が棚の寿命より短くなる。不活性の気体——葡萄酒の品書きがすでに持っているのと同じアルゴンの噴霧——は、葡萄酒に働くのとまったく同じように日本酒にも働く。そして最も多く注ぐ一つの酒には樽を。酒が空気にまったく触れぬため、問題は丸ごと消える。一つの純米を多く注ぎ、他の損を正当化しえぬ店は、樽と小瓶の棚から始めるとよい。",
              zh:"芳香型的酒改用小瓶裝，讓時鐘比保存期限更短。惰性氣體——葡萄酒酒單早已擁有的那種氬氣噴罐——對清酒的作用與對葡萄酒完全相同。而你倒得最多的那一款酒，就上生啤式酒桶：酒完全不接觸空氣，問題就整個消失了。一家某款純米倒量很大、卻無法為其餘酒款的損耗自圓其說的餐廳，應該從一個酒桶與一排小瓶開始。" } },
          { term:{ en:"Storage is not a nicety", ja:"保存は贅沢ではない", zh:"儲存不是可有可無的講究" }, jp:"保管", romaji:"hokan",
            def:{ en:"Sake needs cold and dark, and a restaurant that stores it behind the bar under lights has already lost the argument before anyone tastes anything. A wine fridge at 5–10 °C is enough for everything except nama, which needs a proper refrigerator. Unopened pasteurised sake keeps for many months in those conditions and for weeks in a warm room, and the difference is the whole reason a guest's first glass tastes as intended.",
              ja:"日本酒は冷たさと暗さを要する。灯の下、酒場の背後にそれを置く店は、誰かが何かを味わうより前にすでに論を失っている。五度から十度の葡萄酒の冷蔵庫は、しかるべき冷蔵庫を要する生酒を除くすべてに足りる。開けていない火入れの酒はその条件で幾月も保ち、暖かい部屋では数週である。その差こそ、客の最初の一杯が意図された通りに味わえる理由の全体である。",
              zh:"清酒需要低溫與避光；一家把它放在吧台後方燈光下的餐廳，在任何人嚐到任何東西之前就已經輸掉了這場論證。一台攝氏五到十度的葡萄酒冰箱，足以應付除生酒之外的一切——生酒需要正規冰箱。未開封的火入酒在那樣的條件下能保存數月，在溫暖房間裡則只有數週；而這個差別，就是客人第一杯酒能如其所應然地好喝的全部理由。" } }
        ] }
      ] },

    { t:"section", id:"supply",
      title:{ en:"Where the bottles actually come from", ja:"瓶はどこから来るのか", zh:"酒瓶究竟從哪裡來" }, jp:"仕入れ",
      body:[
        { t:"p", text:{
          en:"Almost every complaint about sake lists — that they are short, that they are all the same, that the interesting bottles are never available — is a complaint about distribution rather than about taste. A list is bounded, in every country including Japan, by what one or two intermediaries have decided to carry, and the single most useful hour a buyer can spend is with the intermediary rather than with a guidebook.",
          ja:"日本酒の品書きについての苦情のほとんど——短い、どれも同じである、面白い一本は決して手に入らない——は、味についてではなく流通についての苦情である。品書きは、日本を含むいずれの国においても、一つか二つの仲介者が扱うと決めたものによって囲われている。買い手が費やしうる最も有用な一時間は、手引書とではなく、その仲介者とともにある。",
          zh:"幾乎所有對清酒酒單的抱怨——太短、每家都一樣、有意思的那幾支永遠買不到——其實都不是關於味道的抱怨，而是關於通路的抱怨。任何國家（包括日本）的酒單，都被一兩家中間商決定要進什麼所框住；而一位採購能花掉的最有用的一小時，不是花在指南上，是花在那家中間商身上。" } },

        { t:"defs", items:[
          { term:{ en:"The appointed shop", ja:"特約店", zh:"特約店" }, jp:"特約店", romaji:"tokuyakuten",
            def:{ en:"Many breweries with limited output do not sell to whoever asks. They appoint a set of retailers who agree to keep the sake cold, to sell it fresh, and usually not to discount it, and they supply only those shops. The system is why a famous label can be invisible in a supermarket and present in a small shop two streets away, and why a restaurant's first step in Japan is often to find which appointed shop will also supply the trade. A relationship with one good tokuyakuten is worth more than a catalogue.",
              ja:"生産量の限られた蔵の多くは、求める者の誰にでも売るわけではない。冷やして保ち、新しいうちに売り、多くは値を引かぬことに同意した小売の一群を定め、その店にのみ卸す。名高い銘柄が量販店では見えず、二筋向こうの小さな店にはあるのは、この仕組みのためである。そして日本において料理店の第一歩が、業務用にも卸してくれる特約店を探すことになりがちなのも、そのためである。良い特約店との関わりは、目録よりも値打ちがある。",
              zh:"許多產量有限的酒藏並不是誰來要就賣。它們指定一批零售商——這些店同意冷藏保存、趁鮮賣出，通常也同意不削價——並且只供貨給這些店。這套制度說明了為什麼一個知名品牌在量販店裡看不到，卻出現在兩條街外的小店裡；也說明了為什麼在日本，一家餐廳的第一步往往是找出哪家特約店也願意供應業務用。與一家好的特約店建立關係，比一本型錄更有價值。" } },
          { term:{ en:"The wholesaler", ja:"問屋・卸", zh:"批發商" }, jp:"酒類卸", romaji:"shurui oroshi",
            def:{ en:"The other route in Japan, and the only realistic one for a restaurant that wants a hundred lines and a single invoice. A wholesaler's book is broad, its delivery is reliable, and its temperature discipline is variable — which is exactly why the interesting small houses are often not in it. Most working lists in Japan are a wholesaler's spine with two or three appointed-shop bottles laid on top.",
              ja:"日本におけるもう一つの道であり、百の品目と一枚の請求書を望む料理店にとっては唯一現実的な道である。卸の帳面は広く、配送は確かであり、温度の規律にはむらがある——面白い小さな蔵がそこに載っていないのは、まさにそのためである。日本で実際に働いている品書きのほとんどは、卸を背骨とし、その上に特約店の二、三本を載せたものである。",
              zh:"這是日本的另一條路，也是一家想要一百個品項、一張發票的餐廳唯一現實的路。批發商的品項表很廣、配送可靠，而溫度管理則參差不齊——這正是那些有意思的小酒藏往往不在其中的原因。日本多數真正在運作的酒單，都是以批發商為骨幹，再疊上兩三支特約店的酒。" } },
          { term:{ en:"Outside Japan, an importer stands in the way by law", ja:"国外では法が輸入者を挟む", zh:"在日本以外，法律會插進一個進口商" }, jp:"輸入者", romaji:"yunyūsha",
            def:{ en:"In the United States the three-tier system makes it illegal for a restaurant to buy from a producer: everything passes producer → importer/wholesaler → licensed retailer or restaurant, state by state. In the United Kingdom and the European Union an importer handles excise, labelling and customs. In Taiwan alcohol may only be imported by a business licensed under the Tobacco and Alcohol Administration Act. The practical effect is the same everywhere: your list is the intersection of what you want and what somebody has already cleared through customs.",
              ja:"合衆国では三層制により、料理店が造り手から直に買うことは違法である。すべては、造り手から輸入者・卸へ、そして免許を持つ小売か料理店へと、州ごとに渡る。英国と欧州連合では、輸入者が酒税、表示、通関を担う。台湾では、菸酒管理法のもとで免許を得た事業者のみが酒を輸入しうる。実際の結果はいずこも同じである。品書きとは、こちらが望むものと、すでに誰かが通関を終えたものとの重なりである。",
              zh:"在美國，三層制使餐廳直接向生產者採購成為違法：一切都必須經由生產者 → 進口商／批發商 → 持照零售商或餐廳，而且逐州而異。在英國與歐盟，進口商負責酒稅、標示與通關。在台灣，酒類只能由依《菸酒管理法》取得執照的業者進口。實際效果到處都一樣：你的酒單，是「你想要的」與「已經有人替你報完關的」兩者的交集。" } },
          { term:{ en:"Allocation is by relationship, not by price", ja:"配分は値ではなく関わりによる", zh:"配額看的是關係，不是價格" }, jp:"限定流通", romaji:"gentei ryūtsū",
            def:{ en:"A house that makes two thousand koku cannot serve every account that wants it, and it does not auction the difference. Allocation goes to accounts with history, and a new account is usually offered the entry bottle first and the famous one later or never. Buyers who treat the first year as an audition, sell the entry bottle well and report back what happened to it, get the second bottle. Buyers who ask for the famous one on the first call generally do not.",
              ja:"二千石を造る蔵は、望むすべての取引先に応じることはできず、その差を競りにかけもしない。配分は歴史のある取引先へ向かい、新しい取引先にはまず入門の一本が示され、名高い一本は後か、あるいは決して来ない。最初の一年を試しと心得、入門の一本をよく売り、それがどうなったかを報せる買い手は、次の一本を得る。最初の電話で名高い一本を求める買い手は、たいてい得ない。",
              zh:"一家年產兩千石的酒藏，沒辦法滿足每一個想要它的客戶，也不會把差額拿去拍賣。配額給的是有往來歷史的客戶；新客戶通常先拿到入門款，名品則晚一點，或永遠不會有。把第一年當成試用期、把入門款賣好、並回報它後來的下場的買家，會拿到第二支。第一通電話就開口要名品的買家，通常不會。" } },
          { term:{ en:"Ask what the container was", ja:"どの船便であったかを問う", zh:"問清楚是什麼櫃" }, jp:"リーファー", romaji:"rīfā",
            def:{ en:"Sake crossing the equator in an unrefrigerated container can spend weeks at temperatures that would be unacceptable in any shop. Serious importers ship in refrigerated containers and hold stock cold; others do not, and the difference does not appear on any label. One question — was it a reefer, and is the warehouse chilled — sorts the suppliers from whom it is worth listing nama and delicate ginjō from the ones from whom it is not.",
              ja:"冷蔵されない船便で赤道を越える酒は、いかなる店でも許されぬ温度のもとで幾週を過ごしうる。真面目な輸入者は冷蔵の船便で運び、在庫を冷やして保つ。そうでない者もおり、その差はいかなる札にも現れない。問いは一つでよい——リーファーであったか、倉は冷えているか。それが、生や繊細な吟醸を載せる値打ちのある仕入先と、そうでない仕入先とを分ける。",
              zh:"以非冷藏貨櫃越過赤道的清酒，可能連續數週處於任何一家店都不會接受的溫度下。認真的進口商用冷藏櫃運送、並以低溫存貨；有些則不然，而這個差別不會出現在任何一張酒標上。只要問一個問題——是不是冷藏櫃、倉庫有沒有控溫——就能把「值得從他那裡進生酒與纖細吟釀」的供應商，和不值得的分開。" } },
          { term:{ en:"Cases, minimums and the mixed pallet", ja:"箱、最低ロット、混載", zh:"整箱、最低量與混裝" }, jp:"ケース", romaji:"kēsu",
            def:{ en:"A case is usually twelve 720 mL bottles or six 1.8 L bottles, though it varies by supplier, and most distributors set a minimum order below which delivery is not free. This is the quiet reason small restaurants carry six sakes: not lack of interest but the arithmetic of a twelve-bottle commitment to a wine they have not yet sold one glass of. Mixed cases, where a distributor will build one, are the single most useful concession to ask for.",
              ja:"一箱は多くの場合、七百二十ミリリットル瓶十二本か、一升瓶六本である。仕入先によって異なり、そして多くの卸は、それを下回れば配送が無料にならぬ最低の注文を定めている。小さな料理店が六種しか置かぬ静かな理由はこれである。関心の欠如ではなく、まだ一杯も売れていない酒に十二本を約束するという算術である。卸が組んでくれるのであれば、混載の箱こそ、求める値打ちのある唯一最大の譲歩である。",
              zh:"一箱通常是十二支七百二十毫升，或六支一升瓶，各家供應商略有不同；而多數經銷商設有最低訂購量，低於它就不免運。這正是小餐廳只放六款清酒的那個不張揚的理由：不是沒有興趣，而是「為一支還沒賣出過一杯的酒承諾十二瓶」這道算術。如果經銷商願意替你湊，混裝一箱是最值得開口要的一項讓步。" } }
        ] },

        { t:"note", title:{ en:"Why two restaurants in one city have the same list", ja:"一つの町の二軒が同じ品書きを持つ理由", zh:"為什麼同一座城市的兩家餐廳酒單一模一樣" }, text:{
          en:"Because they share a distributor and both ordered from the front of the sales sheet. The sheet is ordered by what moves, which is ordered by what was on last year's sheet. Two questions break the loop: <em>what do you carry that is not on this sheet</em>, and <em>what is sitting in your warehouse that you would like to move</em>. The second question is how small lists acquire bottles that nobody else in town has, usually at a price that makes them profitable.",
          ja:"同じ卸を分かち合い、二軒とも売り出しの表の先頭から注文したからである。その表は動くものの順に並び、動くものは去年の表の順に並んでいる。この輪を断つ問いは二つある。<em>この表に載っていないもので、何を扱っているか</em>。そして<em>倉に眠っていて、動かしたいものは何か</em>。二つめの問いこそ、小さな品書きが、町の誰も持たぬ一本を、しかもたいてい儲けの出る値で手に入れる道である。",
          zh:"因為他們共用同一家經銷商，而且兩家都從銷售表的最前面開始下單。那張表是按「賣得動的」排序的，而「賣得動的」又是按去年那張表排序的。有兩個問題可以打斷這個迴圈：<em>這張表上沒有的，你還有什麼</em>，以及<em>你倉庫裡有什麼是你想出清的</em>。第二個問題，正是小酒單取得全城沒有別家有的酒的方法，而且通常是以一個能賺錢的價格。" } }
      ] },

    { t:"section", id:"margin",
      title:{ en:"The arithmetic of a pour", ja:"一杯の算術", zh:"一杯的算術" }, jp:"原価",
      body:[
        { t:"p", text:{
          en:"Sake is priced badly in most restaurants because it is priced like wine on the bottle and then poured like wine by the glass, and the two do not fit the same bottle sizes. The arithmetic is short enough to do on the back of a delivery note, and doing it once usually changes the list.",
          ja:"多くの料理店で日本酒の値づけが下手なのは、瓶では葡萄酒のように値をつけ、杯では葡萄酒のように注ぐからであり、その二つは同じ瓶の大きさに収まらない。算術は納品書の裏でできるほど短く、一度やってみれば、たいてい品書きが変わる。",
          zh:"多數餐廳把清酒的價格訂壞了，因為他們照葡萄酒的方式為整瓶定價，又照葡萄酒的方式按杯倒——而這兩套並不適用於同樣的瓶裝規格。這道算術短到可以在送貨單背面算完，而算過一次之後，酒單通常就會變。" } },

        { t:"table",
          caption:{ en:"How many glasses a bottle yields, before spillage", ja:"一本から取れる杯数（こぼれを見る前）", zh:"一瓶能倒幾杯（尚未計入損耗）" },
          cols:[ { en:"Bottle", ja:"瓶", zh:"瓶" }, { en:"90 mL", ja:"90 mL", zh:"90 mL" }, { en:"120 mL", ja:"120 mL", zh:"120 mL" }, { en:"150 mL", ja:"150 mL", zh:"150 mL" }, { en:"180 mL · one gō", ja:"180 mL・一合", zh:"180 mL・一合" } ],
          numCols:[1,2,3,4], keyCol:0,
          rows:[
            [ "300 mL", "3", "2", "2", "1" ],
            [ "720 mL", "8", "6", "4", "4" ],
            [ "1,800 mL", "20", "15", "12", "10" ]
          ] },

        { t:"defs", items:[
          { term:{ en:"Pour cost is not bottle cost divided by pours", ja:"原価は瓶の値を杯数で割ったものではない", zh:"單杯成本不是瓶價除以杯數" }, jp:"歩留まり", romaji:"budomari",
            def:{ en:"It is bottle cost divided by the pours you actually <em>sell</em> before the bottle falls off. A 720 mL bottle at 120 mL yields six glasses on paper; if the fourth is the last one sold inside the bottle's window, the real cost per sold glass is the bottle divided by four, a fifty per cent increase that never appears in the costing spreadsheet. Every by-the-glass decision in sake follows from this one number, and it is the reason a slow-selling premium bottle can lose money at a price that looks generous.",
              ja:"それは、瓶が落ちる前に実際に<em>売れた</em>杯数で瓶の値を割ったものである。七百二十ミリリットルを百二十ミリリットルで注げば、帳面の上では六杯である。もしその瓶の窓のうちに売れた最後が四杯目であれば、売れた一杯あたりの実の原価は瓶を四で割ったものであり、五割の増しでありながら、原価表には決して現れない。日本酒の杯売りのあらゆる判断はこの一つの数から導かれ、動きの遅い上位の一本が、気前よく見える値で損を出しうるのもこのためである。",
              zh:"它是瓶價除以「在這瓶酒掉下去之前你真正<em>賣掉</em>的杯數」。一支七百二十毫升以一百二十毫升供應，紙上是六杯；若在這瓶酒的賞味窗內賣出的最後一杯是第四杯，那麼每賣出一杯的真實成本就是瓶價除以四——增加了五成，而這個數字從來不會出現在成本表上。清酒單杯供應的每一個決定都源自這一個數字；一支賣得慢的高階酒之所以會在一個看起來很大方的價格上虧錢，也正是因為它。" } },
          { term:{ en:"The smaller bottle is often the more profitable one", ja:"小さな瓶の方が儲かることが多い", zh:"小瓶往往才是賺錢的那一支" }, jp:"三百ミリ", romaji:"sanbyaku-miri",
            def:{ en:"A 300 mL bottle costs more per millilitre than a 720 and yields only two or three glasses — but it yields them reliably, because it is finished inside a service or two. For anything fragile, anything expensive, and anything you are testing on the list for the first time, the smaller format converts a theoretical six pours into a real two, which is almost always the better number. Several breweries now bottle their best sake in 300 mL precisely for this trade.",
              ja:"三百ミリリットルの瓶は、一ミリリットルあたりでは七百二十より高く、二杯か三杯しか取れない——しかし確かに取れる。一度か二度の営業のうちに空くからである。壊れやすいもの、高いもの、そして品書きで初めて試すものについては、小さな形は帳面の六杯を実の二杯に変える。そしてそれは、ほとんど常に良い数である。今日、いくつもの蔵が最良の酒を三百ミリリットルで詰めているのは、まさにこの商いのためである。",
              zh:"三百毫升瓶每毫升的成本高於七百二十毫升，而且只能倒出兩三杯——但它能可靠地倒出這兩三杯，因為一兩個營業時段就會喝完。對於任何脆弱的、昂貴的、或第一次上單試水溫的酒，小規格把紙上的六杯換成真實的兩杯，而後者幾乎總是比較好的數字。今天已有數家酒藏正是為了這門生意，把自家最好的酒裝進三百毫升瓶。" } },
          { term:{ en:"Three prices, and the middle one sells", ja:"三つの値、そして真ん中が売れる", zh:"三個價格，賣掉的是中間那個" }, jp:"価格帯", romaji:"kakakutai",
            def:{ en:"A by-the-glass list of one price teaches the guest nothing and a list of eight prices paralyses them. Three works: an inexpensive glass that is genuinely good, a middle glass that is the one you want to sell, and an expensive glass that exists mostly to make the middle one look reasonable. The top glass will also sell, to about one table in twenty, and those tables are frequently the ones that come back.",
              ja:"一つの値しかない杯売りは客に何も教えず、八つの値は客を動けなくする。三つは働く。安く、しかも本当に良い一杯。売りたい一杯である真ん中。そして、主として真ん中を穏当に見せるために在る高い一杯である。その高い一杯もまた、二十卓に一卓ほどには売れる。そしてその卓は、しばしば戻ってくる卓である。",
              zh:"只有一個價格的單杯清單教不了客人任何事，八個價格則會讓他們動彈不得。三個剛好：一杯便宜而確實好喝的、一杯你真正想賣的中間價位，以及一杯主要是為了讓中間那杯顯得合理而存在的高價。那支高價的也會賣掉，大約二十桌有一桌；而那些桌子，往往就是會再回來的那些。" } },
          { term:{ en:"Corkage, and what it is really pricing", ja:"持ち込み料が実は何に値をつけているか", zh:"開瓶費實際上在為什麼定價" }, jp:"持ち込み料", romaji:"mochikomi-ryō",
            def:{ en:"A corkage fee prices the glassware, the chilling, the service and the lost sale, in that order of magnitude. For sake it should usually be lower than for wine and stated in a single line, because the guest bringing a bottle of sake to a restaurant is almost always the guest who will also order from the list, and because a restaurant that welcomes them acquires, at no cost, a regular who educates the room.",
              ja:"持ち込み料は、器、冷やし、給仕、そして失われた売りに、その順の大きさで値をつける。日本酒については、たいてい葡萄酒より低く、一行で示されるべきである。日本酒の瓶を携えて料理店に来る客は、ほとんど常に品書きからも頼む客であり、そして彼らを迎える店は、費えなしに、その場を教育する常連を得るからである。",
              zh:"開瓶費依序為酒器、冰鎮、服務，以及那筆失去的銷售定價。就清酒而言，它通常應該低於葡萄酒，並且用一行字寫清楚——因為會帶一瓶清酒來餐廳的客人，幾乎必然也是會從酒單上點酒的客人；而歡迎他們的店家，等於零成本地取得了一位會教育全場的常客。" } }
        ] },

        { t:"note", title:{ en:"A worked example", ja:"計算の例", zh:"一個算過的例子" }, text:{
          en:"A 720 mL junmai ginjō lands at a cost of 2,400 yen. Poured at 120 mL it yields six glasses; at the usual target of a quarter to a third of menu price in cost, that is a glass at 1,200 to 1,600 yen. But suppose the bottle reliably sells four glasses and the fifth and sixth go into the staff meal. Real cost per sold glass is 600 yen, not 400, and the same target price becomes 1,800 to 2,400 — which is probably too much for the list. The fix is not to raise the price. It is to buy that sake in 300 mL, sell two glasses out of it, and put the six-glass arithmetic behind something that actually moves.",
          ja:"七百二十ミリリットルの純米吟醸が、原価二千四百円で入る。百二十ミリリットルで注げば六杯。原価を売値の四分の一から三分の一とする通例の目安に当てれば、一杯千二百円から千六百円である。だがこの瓶が確かに売るのは四杯で、五杯目と六杯目が賄いに回るとしよう。売れた一杯あたりの実の原価は四百円ではなく六百円であり、同じ目安に当てれば千八百円から二千四百円となる——おそらく品書きには高すぎる。直し方は値を上げることではない。その酒を三百ミリリットルで仕入れ、そこから二杯を売り、六杯の算術は実際に動くものの後ろに置くことである。",
          zh:"一支七百二十毫升的純米吟釀，進貨成本兩千四百日圓。以一百二十毫升供應可倒六杯；按成本占售價四分之一到三分之一的常見目標，一杯是一千二到一千六。但假設這瓶酒穩定賣掉的是四杯，第五、第六杯進了員工餐。那麼每賣出一杯的真實成本是六百而非四百，同樣的目標價變成一千八到兩千四——這對酒單來說大概太貴了。解法不是提高售價，而是改用三百毫升進這支酒、從中賣出兩杯，並把「六杯」那套算術留給真正賣得動的酒。" } }
      ] },

    { t:"section", id:"flight",
      title:{ en:"The flight that teaches", ja:"教える利き比べ", zh:"能教會人的品飲組合" }, jp:"利き比べ",
      body:[
        { t:"p", text:{
          en:"A flight is the most efficient selling instrument sake has, because the category's central problem — that most guests have one bad memory of hot cheap sake and no framework to replace it — is solved by contrast rather than by description. Two glasses side by side teach more in thirty seconds than a page of tasting notes, and the guest who has just discovered that two sakes can be nothing like each other is the guest who orders a bottle.",
          ja:"利き比べは、日本酒の持つ最も効率のよい売りの道具である。この区分の中心の問題——ほとんどの客が、熱く安い酒の悪い記憶を一つだけ持ち、それに代わる枠組みを持たぬこと——は、説明ではなく対比によって解かれるからである。並べられた二杯は、利き酒の覚書一頁よりも多くを三十秒で教える。そして、二つの日本酒が似ても似つかぬものでありうると今しがた知った客こそ、一本を頼む客である。",
          zh:"品飲組合是清酒手上最有效率的銷售工具，因為這個類別的核心問題——多數客人只有一段「又熱又廉價的清酒」的壞記憶，而沒有任何可以取代它的框架——是靠對比、而不是靠描述解開的。並排的兩杯酒，三十秒內教會的東西，比一整頁品飲筆記還多；而剛剛發現兩款清酒可以毫不相像的客人，就是會點一整瓶的那位客人。" } },

        { t:"steps", items:[
          { n:1, title:{ en:"Three glasses, not five", ja:"五杯ではなく三杯", zh:"三杯，不是五杯" }, jp:"三種", romaji:"sanshu",
            meta:{ en:"45–60 mL each", ja:"各45〜60 mL", zh:"每杯 45–60 mL" },
            text:{ en:"Three pours of 45 to 60 millilitres come to between 135 and 180 millilitres in total — one gō, or about a large glass of wine — which is a quantity a guest can drink before a main course without any consequence. A five-glass flight at the same pour reaches 300 millilitres, which is most of a 300 mL bottle and, for many guests, the whole evening's drinking. Build the five-glass version for a counter seat and a slow evening; build the three-glass version for everybody else and put it on the food menu, not the drinks list.",
              ja:"四十五から六十ミリリットルを三杯で、合わせて百三十五から百八十ミリリットル——一合、あるいは葡萄酒の大きめの一杯ほどである。これは客が主菜の前に、何の帰結もなく飲みうる量である。同じ注ぎで五杯とすれば三百ミリリットルに達し、それは三百ミリリットル瓶のあらかたであり、多くの客にとってはその夜の酒の全部である。五杯の組は、カウンターの席と長い夜のために作ること。三杯の組はそれ以外のすべてのために作り、酒の品書きではなく料理の品書きに載せること。",
              zh:"三杯各四十五到六十毫升，合計一百三十五到一百八十毫升——一合，大約等於一大杯葡萄酒——這是客人在主菜之前可以喝完而不致有任何後果的量。同樣的份量若做成五杯，就達到三百毫升，那是一支三百毫升瓶的大半，對許多客人來說就是一整晚的酒量。五杯版做給吧檯座與漫長的夜晚；三杯版做給其他所有人，而且要放在料理菜單上，不是酒單上。" } },
          { n:2, title:{ en:"Order them so each one answers the last", ja:"前の一杯に答える順に並べる", zh:"排出讓每一杯回答上一杯的順序" }, jp:"順序", romaji:"junjo",
            meta:{ en:"light, then heavy", ja:"軽きより重きへ", zh:"由輕而重" },
            text:{ en:"Light before heavy, cold before warm, dry before sweet, young before aged, and the aromatic one first rather than last because it will otherwise flatten everything that follows. The warm glass always goes last: a room that has been given warm sake does not willingly go back to cold, and the last glass is the one the guest remembers, so it should be the one you would most like them to order a bottle of.",
              ja:"軽きより重きへ、冷たきより温かきへ、辛きより甘きへ、若きより古きへ。そして香り高い一杯は、後ではなく先に置く。さもなくば、続くすべてを平らにしてしまうからである。温かい一杯は常に最後である。温めた酒を出された座は、進んで冷たきに戻りはしない。そして最後の一杯こそ客の覚えている一杯であるから、それは、一本を頼んでほしいと最も願う一杯であるべきである。",
              zh:"由輕而重、由冷而溫、由辛而甜、由新而陳；而香氣型的那一杯要放在最前面而不是最後，否則它會把後面所有的酒都壓平。溫熱的那一杯永遠放最後：一桌人一旦喝過溫酒，就不會心甘情願回到冷的；而最後一杯正是客人記得的那一杯，所以它應該是你最希望他們整瓶點下去的那一杯。" } },
          { n:3, title:{ en:"One sentence per glass, printed", ja:"一杯に一行、刷って出す", zh:"每杯一句話，印出來" }, jp:"一行", romaji:"ichigyō",
            meta:{ en:"on paper, not from memory", ja:"記憶ではなく紙に", zh:"寫在紙上，不靠記憶" },
            text:{ en:"Give the flight a printed card with one line per glass in the guest's own language: how it arrives, what it feels like, where it is from. A card does three things a server cannot. It survives the server being called away, it lets the guest re-read the line after tasting rather than before, and it removes the burden of memorised description from staff who have twenty other things to hold. Put the brewery's name and the prefecture on it, because that is what the guest will photograph and what they will look for in a shop.",
              ja:"利き比べには、客自身の言葉で一杯につき一行を記した紙を添えること。どう来るか、口でどう感じるか、どこのものか。紙は、給仕にはできぬことを三つなす。給仕が呼ばれて去っても残り、客が味わう前ではなく後にその一行を読み返すことを許し、そして他に二十のことを抱えている働き手から、覚えた説明の重荷を取り除く。蔵の名と県を記すこと。それこそ客が写し取るものであり、店で探すものだからである。",
              zh:"為這組品飲附一張印好的卡片，每一杯用客人自己的語言寫一行：它會怎麼上桌、在口中是什麼感覺、來自哪裡。卡片能做到三件服務生做不到的事：服務生被叫走之後它還在；它讓客人在嚐過之後、而不是之前重讀那一行；而且它把「背誦描述」的負擔，從同時要顧二十件事的工作人員身上拿掉。上面要寫酒藏的名字與縣名，因為那才是客人會拍照的東西，也是他們日後會在店裡找的東西。" } },
          { n:4, title:{ en:"Price it so ordering it is obvious", ja:"頼むのが当然となる値をつける", zh:"訂一個讓人自然會點的價格" }, jp:"値づけ", romaji:"nezuke",
            meta:{ en:"at or below one good glass", ja:"良い一杯と同じか、それ以下", zh:"等於或低於一杯好酒" },
            text:{ en:"A flight priced above the most expensive glass in it will not sell, however good the arithmetic looks; a flight priced at about what one good glass costs will sell to a table that had not intended to drink sake at all. The flight is not where the margin is. The margin is in the bottle the table orders afterwards, and in the fact that a guest who has been taught the category once will order from it for the rest of their life.",
              ja:"そのうちの最も高い一杯より高い値をつけた利き比べは、算術がいかに良く見えようと売れない。良い一杯ほどの値をつけた利き比べは、そもそも日本酒を飲むつもりのなかった卓に売れる。利は利き比べにはない。利は、その卓が後に頼む一本にあり、そして一度この区分を教わった客が、その生涯にわたりそこから頼み続けるという事実にある。",
              zh:"一組定價高於其中最貴那一杯的品飲組合，不管算術看起來多漂亮都賣不掉；而一組定價大約等於一杯好酒的品飲組合，會賣給原本根本沒打算喝清酒的那一桌。利潤不在品飲組合本身。利潤在那一桌之後點的那一瓶，以及一個被教會了這個類別一次的客人，會在往後的一輩子裡持續從這個類別點酒這件事上。" } }
        ] },

        { t:"note", title:{ en:"The three contrasts worth building a flight around", ja:"利き比べを組むに値する三つの対比", zh:"值得拿來組成品飲的三組對比" }, text:{
          en:"<strong>Same brewery, two grades.</strong> The cleanest demonstration of what polishing does, because everything else is held constant. <strong>Same rice, two prefectures.</strong> The cleanest demonstration that place is real. <strong>One glass cold, the same sake warm.</strong> The cheapest flight to build — it is one bottle — and by a distance the most surprising to a guest who believes warm sake is what cheap sake is called.",
          ja:"<strong>同じ蔵の二つの格。</strong>精米が何をなすかの最も清らかな証しである。他のすべてが動かぬからである。<strong>同じ米の二つの県。</strong>土地が実在することの最も清らかな証しである。<strong>同じ酒の、冷たい一杯と温かい一杯。</strong>組むのに最も安い利き比べであり——一本で足りる——そして、燗酒とは安い酒の別名であると信じている客にとって、群を抜いて驚きの大きいものである。",
          zh:"<strong>同一家酒藏，兩個等級。</strong>這是關於精米究竟做了什麼最乾淨的示範，因為其他變數全被固定住了。<strong>同一種米，兩個縣。</strong>這是「地方是真的」最乾淨的示範。<strong>同一支酒，一杯冷的、一杯溫的。</strong>這是組起來最便宜的一組——只需要一瓶——而對一位深信「燗酒」只是「廉價酒」另一種說法的客人來說，它的驚訝程度遙遙領先。" } }
      ] },

{ t:"section", id:"floor",
      title:{ en:"What the floor staff need", ja:"働き手に要るもの", zh:"外場人員需要什麼" }, jp:"接客",
      body:[
        { t:"p", text:{
          en:"Nobody can taste twenty bottles before a shift, and a server who has memorised technical terms will use them at exactly the wrong moment. What actually works is a very short structure that lets someone recommend confidently from almost no knowledge.",
          ja:"勤めの前に二十本を味わえる者はいない。そして技術の語を暗んじた給仕は、まさに誤った時にそれを用いる。実際に働くのは、ほとんど知識がなくとも自信をもって勧めうる、きわめて短い枠組みである。",
          zh:"沒有人能在上班前先嚐過二十瓶酒，而一位背下了技術術語的服務生，會在最不該用的時機把它們搬出來。真正管用的，是一套極短的架構，能讓一個人在幾乎沒有知識的情況下自信地推薦。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Ask what they are eating", ja:"何を食べるかを訊く", zh:"問他們要吃什麼" }, jp:"料理から", romaji:"ryōri kara", meta:{ en:"always first", ja:"必ず最初に", zh:"永遠先問這個" },
            text:{ en:"Not what they usually drink, and certainly not whether they like dry or sweet — most guests answer that question wrongly about themselves. The dish narrows the field faster than any preference question: something raw and delicate wants something cold and clean; something fried or fatty wants acidity; something braised or grilled wants warmth and weight. Recommend from the plate and the hit rate is very high.",
              ja:"いつも何を飲むかではなく、まして辛口か甘口かを好むかどうかでもない。ほとんどの客はその問いに、自らについて誤って答える。皿はいかなる好みの問いよりも速く選びを絞る。生で繊細なものは冷たく清らかなものを求め、揚げたもの脂のあるものは酸を求め、煮たもの焼いたものは温かさと重みを求める。皿から勧めれば、当たる率はきわめて高い。",
              zh:"不是問他們平常喝什麼，更不是問他們喜歡辛口還是甜口——多數客人會對這個關於自己的問題答錯。菜色比任何偏好問題都更快地縮小範圍：生而細緻的菜要冷而乾淨的酒；油炸或油脂重的要酸度；燉煮或燒烤的要溫度與份量。從盤子出發推薦，命中率非常高。" } },
          { n:2, title:{ en:"Say three things, in this order", ja:"三つを、この順に言う", zh:"說三件事，依這個順序" }, jp:"三語", romaji:"sango", meta:{ en:"temperature, texture, place", ja:"温度・質感・産地", zh:"溫度、質地、產地" },
            text:{ en:"How it will arrive — cold, cool, warm. What it feels like in the mouth — light, round, sharp, savoury. Where it is from, in one clause. That is a complete recommendation and it takes eight seconds. Rice variety, yeast number and polishing ratio are answers to questions, not parts of an offer; give them when asked and never before.",
              ja:"どう届くか——冷たく、涼しく、温かく。口の中でどう感じるか——軽く、丸く、鋭く、旨みがあり。どこのものか、一句で。それで勧めは完結し、要するのは八秒である。米の品種、酵母の番号、精米歩合は問いへの答えであって、差し出すものの一部ではない。訊かれたときに与え、決してそれより前には与えない。",
              zh:"它會以什麼溫度上桌——冰、涼、溫。它在口中的感覺——輕、圓、銳、鮮。它來自哪裡，用一個短句帶過。這樣就是一則完整的推薦，只需要八秒。米的品種、酵母編號、精米步合是「問題的答案」，不是「推薦的組成部分」；被問到時再給，絕不主動先講。" } },
          { n:3, title:{ en:"Pour a taste", ja:"一口を注ぐ", zh:"倒一口試喝" }, jp:"試飲", romaji:"shiin", meta:{ en:"the whole argument", ja:"論の全体", zh:"整場論證的關鍵" },
            text:{ en:"Twenty millilitres costs almost nothing and converts more sceptical guests than any amount of description. The category's core problem outside Japan is that people think they know what sake tastes like and are thinking of something warm, harsh and served twenty years ago. A taste ends that argument in one second. Budget for it as marketing rather than as loss.",
              ja:"二十ミリリットルはほとんど何の費えもかからず、いかなる量の説明よりも多くの疑う客を転じさせる。日本の外におけるこの区分の中心の問題は、人々が日本酒の味を知っていると思い込み、そして思い浮かべているのが温かく荒く二十年前に供されたものだということである。一口はその論を一秒で終わらせる。損としてではなく広告として勘定に入れられたい。",
              zh:"二十毫升幾乎不花錢，卻比任何篇幅的說明都更能轉化抱持懷疑的客人。這個品類在日本以外的核心問題是：人們以為自己知道清酒是什麼味道，而他們想到的是二十年前供應的、溫熱而粗糙的東西。一口試飲能在一秒之內結束這場爭論。把它編列為行銷預算，而不是損耗。" } },
          { n:4, title:{ en:"Serve it in a glass", ja:"硝子の杯で出す", zh:"用玻璃杯供應" }, jp:"器", romaji:"utsuwa", meta:{ en:"unless warm", ja:"燗でないかぎり", zh:"除非是溫酒" },
            text:{ en:"A stemmed glass for anything cold, always. It shows the sake's clarity and colour, it collects the aroma, it keeps a warm hand off the liquid, and — the part restaurants underestimate — it tells the guest that this is a serious drink priced like wine rather than a curiosity in a tiny cup. Keep the ceramic for warm service, where it belongs and where it works better.",
              ja:"冷たいものには必ず脚付きの硝子を。酒の澄みと色を見せ、香りを集め、温かい手を液から遠ざけ、そして——店が見くびる部分だが——これは小さな杯の物珍しさではなく、葡萄酒のように値のついた本気の飲み物であると客に告げる。陶磁は燗のために取っておかれたい。そこにこそ属し、そこでこそよく働く。",
              zh:"冷飲一律用高腳玻璃杯。它展示酒的清澈與顏色、聚攏香氣、讓溫熱的手遠離液體，而且——這是餐廳最容易低估的一點——它告訴客人：這是一款定價比照葡萄酒的認真飲品，而不是裝在小杯子裡的獵奇物。陶瓷留給溫酒，那才是它的歸屬，也是它表現最好的地方。" } }
        ] }
      ] },

    { t:"section", id:"warm",
      title:{ en:"Offering warm sake without fear", ja:"燗を恐れずに出す", zh:"無所畏懼地供應溫酒" }, jp:"燗を出す",
      body:[
        { t:"p", text:{
          en:"Almost no restaurant outside Japan offers warm sake, which means any restaurant that does it well has a monopoly on the single most interesting thing this drink can do. It requires one pan, one thermometer and one decision.",
          ja:"日本の外で燗を出す料理店はほとんどない。すなわち、それをよく行う店はいずれも、この飲み物のなしうる最も興味深い一つのことを独占する。要するのは一つの鍋と一つの温度計と一つの決断である。",
          zh:"日本以外幾乎沒有餐廳供應溫酒——這意味著任何把它做好的餐廳，都獨占了這種飲料所能做的最有趣的那一件事。它需要的是一個鍋、一支溫度計，以及一個決定。" } },
        { t:"ol", items:[
          { en:"<strong>Choose the right bottle.</strong> Not everything warms. Junmai, kimoto, yamahai, honjōzō and koshu do; aromatic daiginjō mostly does not, because heat drives off exactly what you paid for. One well-chosen junmai on the list, described as 'best warm', is enough to start.",
            ja:"<strong>正しい一本を選ぶ。</strong>すべてが燗に耐えるわけではない。純米、生酛、山廃、本醸造、古酒は耐える。香りの高い大吟醸はおおむね耐えない。熱が、まさに代を払ったものを飛ばすからである。品書きに「燗が良い」と記した、よく選ばれた純米が一本あれば、始めるには足りる。",
            zh:"<strong>選對那一瓶。</strong>不是每款酒都適合溫。純米、生酛、山廢、本釀造與古酒可以；芳香型大吟釀多半不行，因為加熱正好會趕走你付錢買的那個東西。酒單上有一款精挑細選、註明「溫飲最佳」的純米，就足以起步。" },
          { en:"<strong>Water bath, never a microwave.</strong> Stand the flask in a pan of hot water taken off the heat. A microwave heats unevenly and boils the alcohol out of the middle; the result is the harsh, spirity warm sake that gave the whole category its bad reputation abroad. This is not a matter of authenticity — it is a matter of not ruining it.",
            ja:"<strong>湯煎であり、電子レンジは決して用いない。</strong>火から下ろした鍋の湯に徳利を立てる。電子レンジはむらに温め、中ほどから酒精を沸き立たせる。結果は荒く蒸留酒じみた燗であり、それが国外においてこの区分の全体に悪い評判を与えたものである。これは本物らしさの問題ではない。損なわぬかどうかの問題である。",
            zh:"<strong>用水浴，絕不用微波爐。</strong>把酒器立在離火的一鍋熱水中。微波加熱不均，並把中央的酒精煮沸出來；其結果就是那種粗糙、帶烈酒味的溫酒——正是它讓這整個品類在海外背上了惡名。這不是「正不正宗」的問題，而是「有沒有把它毀掉」的問題。" },
          { en:"<strong>Pick a temperature and name it.</strong> 40 °C for most things. Say so on the menu — 'served at 40 °C' — because a number is a promise and a promise is the difference between a guest ordering warm sake once and ordering it again. A cheap probe thermometer removes all guesswork and pays for itself in a week.",
            ja:"<strong>温度を選び、それに名を与える。</strong>ほとんどのものには四十度。それを品書きに記されたい。「四十度でお出しします」。数は約束であり、約束こそが、客が燗を一度頼むか、また頼むかの差である。安い差し込みの温度計は当て推量をすべて取り除き、一週で元が取れる。",
            zh:"<strong>選定一個溫度，並把它說出來。</strong>多數酒款用四十度。請寫在酒單上——「以四十度供應」——因為一個數字就是一個承諾，而承諾正是「客人只點一次溫酒」與「客人會再點一次」之間的差別。一支便宜的探針溫度計能消除所有猜測，一週之內就能回本。" },
          { en:"<strong>Serve it with the right food.</strong> Warm sake against something grilled, salted, braised, fried or fermented is one of the most persuasive things in gastronomy, and against a delicate raw dish it is simply wrong. Put the warm option next to the right dishes on the menu and it will sell itself.",
            ja:"<strong>正しい料理と共に出す。</strong>焼いたもの、塩をしたもの、煮たもの、揚げたもの、醗酵させたものに対する燗は、食において最も説得力のあるものの一つであり、繊細な生の皿に対しては単に誤りである。品書きにおいて燗の選びを正しい皿の隣に置けば、それは自ら売れる。",
            zh:"<strong>搭配對的食物供應。</strong>溫酒配上燒烤、鹽漬、燉煮、油炸或發酵的食物，是美食學中最具說服力的組合之一；而配上細緻的生食，就只是錯的。在菜單上把溫飲選項放在對的菜色旁邊，它會自己把自己賣掉。" }
        ] },
        { t:"note", title:{ en:"The commercial argument", ja:"商いとしての論", zh:"生意上的論證" }, text:{
          en:"Warm sake solves three restaurant problems at once. It uses junmai and honjōzō, which are the cheapest and most robust things on the list. It has a long open-bottle life. And it is a service ritual a guest watches happen, which is worth more on a bill than any description. A restaurant that pours warm sake well is doing something almost none of its competitors are doing, using its least expensive stock.",
          ja:"燗は料理店の三つの問題を一度に解く。品書きの最も安く最も頑健なものである純米と本醸造を用いる。開けた瓶の寿命が長い。そして客がその場で見る供応の儀礼であり、それはいかなる説明よりも勘定において値打ちがある。燗をよく注ぐ店は、競う相手のほとんど誰もしていないことを、最も安い在庫を用いて行っている。",
          zh:"溫酒一次解決餐廳的三個問題：它用的是酒單上最便宜、最強韌的純米與本釀造；它開瓶後的可用期很長；而且它是一場客人看得見的服務儀式，這在帳單上的價值勝過任何文字說明。一家把溫酒倒得好的餐廳，是用它最便宜的庫存，在做幾乎所有競爭對手都沒在做的事。" } },
        { t:"tiny", text:{
          en:"Related: <a href=\"serving.html\">Temperature &amp; Vessels</a> for the physics, <a href=\"storage.html\">Buying &amp; Storage</a> for the cold chain, <a href=\"pairing.html\">Food Pairing</a> for the matrix.",
          ja:"関連——物理は<a href=\"serving.html\">温度と器</a>、冷蔵の連なりは<a href=\"storage.html\">購入と保存</a>、取り合わせの表は<a href=\"pairing.html\">料理との相性</a>。",
          zh:"相關：物理原理見<a href=\"serving.html\">溫度與酒器</a>；冷鏈見<a href=\"storage.html\">選購與保存</a>；搭配矩陣見<a href=\"pairing.html\">餐酒搭配</a>。" } }
      ] },

    { t:"related", items:[
      { href:"value.html", why:{ en:"What the bottle cost before it reached the list.", ja:"品書きに載る前の、その一本の値。", zh:"那瓶酒在上酒單之前的價格。" } },
      { href:"storage.html", why:{ en:"The clock that starts when the bottle is opened.", ja:"瓶を開けた瞬間に始まる時計。", zh:"開瓶那一刻開始走的那個時鐘。" } },
      { href:"serving.html", why:{ en:"The physics behind the temperature decisions.", ja:"温度をめぐる決めの背後にある物理。", zh:"溫度決定背後的物理。" } },
      { href:"tasting.html", why:{ en:"What to teach the floor, and in what order.", ja:"働き手に何を、どの順で教えるか。", zh:"要教外場人員什麼，以及按什麼順序。" } }
    ] }
  ]
};


/* ---- ----------------------------------------- itineraries */
SAKE.pages["itineraries"] = {
  kicker: { en: "Drinking · 13", ja: "飲む · 13", zh: "品飲 · 13" },
  title:  { en: "Five Journeys", ja: "五つの旅", zh: "五段旅程" },
  jp: "酒の旅",
  lede: {
    en: "The <a href=\"visiting.html\">Visiting</a> page covers how to behave in a brewery and what to ask. This one is the other half: where to actually go. Five routes, each two or three days, each built so that the sake makes sense in the place rather than being a stop on a list — the towns are walkable, the breweries are close together, and there is something to eat that explains the style.",
    ja: "<a href=\"visiting.html\">蔵を訪ねる</a>の頁は、蔵での振舞い方と何を訊くべきかを扱う。この頁はもう一方の半分である。実際にどこへ行くか、である。五つの道筋、それぞれ二日か三日。酒が一覧の一項としてではなくその場所において筋の通るものとなるよう組んだ。町は歩けるほどに小さく、蔵は互いに近く、そして酒質を説き明かす食べ物がある。",
    zh: "<a href=\"visiting.html\">造訪與選購</a>一頁談的是在酒藏裡該如何行止、該問些什麼。本頁是另外一半：實際上該去哪裡。五條路線，每條兩到三天，安排的方式是讓酒在那個地方顯得合情合理，而不是清單上的一個停靠點——城鎮走得完、酒藏彼此相近，而且有能解釋那種酒質的食物。"
  },
  body: [

    { t:"note", title:{ en:"Read this first", ja:"先に読まれたい", zh:"請先讀這段" }, text:{
      en:"Almost no Japanese brewery is a visitor attraction with a ticket desk. Some open a shop and nothing else; some run tours in Japanese only, by appointment, on specific days; some are a family's house with a sign. Book ahead wherever a brewery offers booking, do not turn up in the middle of the season expecting a tour, and never enter a brewery having eaten nattō that morning — the reasons are on the <a href=\"visiting.html#etiquette\">Visiting</a> page and they are serious. Opening arrangements change; treat every route below as a shape rather than a schedule.",
      ja:"日本の蔵のほとんどは、切符売り場のある観光の場ではない。売店だけを開ける蔵もあり、予約により特定の日に日本語のみで案内する蔵もあり、看板の掛かった一家の家である蔵もある。予約を受ける蔵では必ず先に取り、季の最中に案内を期待して現れてはならず、そしてその朝に納豆を食べて蔵へ入ってはならない。理由は<a href=\"visiting.html#etiquette\">蔵を訪ねる</a>の頁にあり、それは真剣なものである。受け入れの取り決めは変わる。以下の道筋は日程ではなく形として扱われたい。",
      zh:"日本的酒藏幾乎沒有一家是設有售票櫃檯的觀光景點。有些只開一間販賣部；有些只以日語、採預約制、在特定日子帶導覽；有些就是一戶掛著招牌的人家。凡是接受預約的酒藏都請事先預約，不要在釀造季正忙時直接上門期待有人導覽，也絕對不要在當天早上吃過納豆之後進入酒藏——理由寫在<a href=\"visiting.html#etiquette\">造訪與選購</a>一頁，而且是認真的。接待方式會變動；以下每條路線都請當成一個形狀，而不是一份行程表。" } },

    { t:"section", id:"nada-fushimi",
      title:{ en:"One — the two capitals", ja:"一——二つの酒都", zh:"其一——兩座酒都" }, jp:"灘と伏見",
      body:[
        { t:"p", text:{
          en:"Kōbe and Kyōto, two days, no car needed, and the best possible introduction to how big this industry actually is. Nada and Fushimi between them still ship close to half of all Japanese sake, and both districts sit at the end of an ordinary suburban train line.",
          ja:"神戸と京都、二日、車は要らない。この産業が実際にどれほど大きいかへの、ありうる最良の入り口である。灘と伏見は今なお日本酒の全体の半ば近くを出荷し、そのいずれの地区も、ありふれた郊外の電車の線の先にある。",
          zh:"神戶與京都，兩天，不需要開車，而且是理解「這個產業實際上有多大」的最佳入門。灘與伏見兩地至今仍出貨接近全日本清酒的一半，而這兩個街區都位在一條再普通不過的近郊電車路線盡頭。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Nada, morning to mid-afternoon", ja:"灘、朝から昼過ぎ", zh:"灘，上午到午後" }, jp:"灘五郷", romaji:"Nada Gogō", meta:{ en:"Kōbe · Hanshin line", ja:"神戸・阪神本線", zh:"神戶・阪神本線" },
            text:{ en:"Several of the large houses keep free museums in preserved wooden brewery buildings, strung along a few stations of one train line so you can do three in a morning. What you are looking at is scale: cypress vats the size of a room, tools for moving tonnes of rice by hand, and photographs of a coastline covered in breweries. Most have a tasting counter and a shop; several charge nothing at all. Finish at the miyamizu well markers near the water.",
              ja:"大きな家のいくつかは、保存された木造の蔵に無料の資料館を構えており、一つの線の数駅に連なるので、朝のうちに三つ回れる。目にするのは規模である。部屋ほどの大きさの槻の槽、米を人の手でトン単位に動かす道具、蔵に覆われた海岸線の写真である。多くは利き酒の台と売店を持ち、いくつかは何も取らない。海に近い宮水の井戸の標で締めるとよい。",
              zh:"幾家大型酒藏在保存下來的木造建築中設有免費的資料館，沿著同一條電車路線的數個車站串成一線，因此一個上午可以走三家。你看到的是「規模」：房間那麼大的木槽、以人力搬動數噸米的工具，以及一整片布滿酒藏的海岸線照片。多數設有品飲檯與販賣部，有幾家完全免費。最後可以走到靠海處的宮水井標作結。" } },
          { n:2, title:{ en:"Kōbe beef, and why", ja:"神戸の牛と、その理由", zh:"神戶牛，以及原因" }, jp:"夕食", romaji:"yūshoku", meta:{ en:"evening", ja:"夕", zh:"傍晚" },
            text:{ en:"Nada sake is dry, firm, high in acidity, built on hard water and traditionally drunk warm. It is one of the very few sakes that stands up to beef, and Kōbe is the place to test that. Order the same bottle cold and then at about 40 °C alongside something grilled and salted; the change is the argument for warm sake in one sitting.",
              ja:"灘の酒は辛く、堅く、酸が高く、硬水の上に建てられ、伝統には燗で飲まれる。牛に耐えるきわめて数少ない酒の一つであり、神戸はそれを試す場所である。同じ一本を冷たいまま、ついで四十度ほどで、焼いて塩をした何かと共に頼まれたい。その変化が、一度の座における燗の論そのものである。",
              zh:"灘的酒辛口、堅實、酸度高，建立在硬水之上，傳統上溫熱飲用。它是極少數能扛得住牛肉的清酒之一，而神戶正是驗證這件事的地方。點同一瓶酒，先冰的、再約四十度的，搭配某樣燒烤過並撒了鹽的東西；那個變化，就是一次坐下就完成的「溫酒論證」。" } },
          { n:3, title:{ en:"Fushimi, the second day", ja:"伏見、二日目", zh:"伏見，第二天" }, jp:"伏見", romaji:"Fushimi", meta:{ en:"Kyōto · Keihan line", ja:"京都・京阪本線", zh:"京都・京阪本線" },
            text:{ en:"Twenty minutes south of central Kyōto and a completely different proposition: soft water, a rounder and gentler sake historically called the feminine one against Nada's masculine, canals, white plaster walls, and a district you can walk end to end in an hour. There is a large brewery museum, a number of small tasting bars, and — this is the point of the day — the chance to drink Nada and Fushimi within twenty-four hours and understand what water does.",
              ja:"京の中心から南へ二十分、まったく異なる提案である。軟水、灘の男酒に対して歴史的に女酒と呼ばれた丸く優しい酒、堀、白い漆喰の壁、そして一時間で端から端まで歩ける地区である。大きな蔵の資料館があり、小さな利き酒の店がいくつもあり、そして——それがこの日の眼目である——灘と伏見を二十四時間のうちに飲み、水が何をなすかを解する機会がある。",
              zh:"從京都市中心往南二十分鐘，是一個截然不同的提案：軟水；相對於灘的「男酒」，歷史上被稱為「女酒」的圓潤柔和之酒；水道、白灰泥牆，以及一個一小時就能從頭走到尾的街區。這裡有一座大型酒藏資料館、若干小型品飲吧，而且——這正是這一天的重點——你有機會在二十四小時內喝到灘與伏見，親身理解水做了什麼。" } }
        ] },
        { t:"tiny", text:{
          en:"Background: <a href=\"region-kinki.html\">Kinki — the Old Heartland</a> and <a href=\"water.html#miyamizu\">Water</a>.",
          ja:"背景——<a href=\"region-kinki.html\">近畿</a>と<a href=\"water.html#miyamizu\">水</a>。",
          zh:"背景閱讀：<a href=\"region-kinki.html\">近畿</a>與<a href=\"water.html#miyamizu\">水</a>。" } }
      ] },

    { t:"section", id:"saijo",
      title:{ en:"Two — the walkable one", ja:"二——歩ける町", zh:"其二——走得完的那一個" }, jp:"西条",
      body:[
        { t:"p", text:{
          en:"If you have one day and want the highest ratio of breweries to walking, this is the answer: seven working houses within a few hundred metres of a station on the main line east of Hiroshima, marked by red-brick chimneys, with the national brewing research institute up the hill.",
          ja:"一日しかなく、歩く距離に対する蔵の数を最も高くしたいのであれば、答えはこれである。広島の東、本線の駅から数百メートルのうちに七軒の稼働する家があり、赤煉瓦の煙突がその印であり、丘の上には国の醸造の研究所がある。",
          zh:"如果你只有一天，又希望「酒藏數量／步行距離」的比值最高，答案就是這裡：在廣島以東本線某個車站的數百公尺範圍內，有七家仍在運作的酒藏，以紅磚煙囪為標記，而山坡上就是國家的釀造研究機構。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"The street", ja:"通り", zh:"那條街" }, jp:"酒蔵通り",
            v:{ en:"Seven houses, one road", ja:"七軒、一本の道", zh:"七家酒藏，一條路" },
            d:{ en:"Namako-kabe lattice walls, brick chimneys, and wells outside several of the gates with a cup beside them — the water is different at each brewery and you are meant to taste them against each other. Most houses have a shop; several have a tasting room; opening days vary and a Monday is a bad bet.",
              ja:"海鼠壁、煉瓦の煙突、そして幾つかの門の外には杯を添えた井戸がある。蔵ごとに水が異なり、互いに比べて味わうためのものである。多くの家は売店を持ち、いくつかは利き酒の間を持つ。開く日は異なり、月曜は分の悪い賭けである。",
              zh:"海鼠牆、磚砌煙囪，以及數個門外附著杯子的水井——每家酒藏的水都不同，而它們就是要讓你互相比較著喝的。多數酒藏設有販賣部，有幾家設有品飲室；營業日各不相同，而星期一是個不太划算的賭注。" } },
          { k:{ en:"The season", ja:"季", zh:"季節" }, jp:"酒まつり",
            v:{ en:"October, if you can", ja:"できれば十月", zh:"可以的話選十月" },
            d:{ en:"The October festival brings a very large crowd and pours sake from breweries across the whole country in one park, which is either the best or the worst possible way to experience the town depending on what you came for. Outside the festival the street is quiet and you can talk to people.",
              ja:"十月の祭はきわめて多くの人を呼び、一つの公園で全国の蔵の酒を注ぐ。何を求めて来たかによって、この町を経験する最良の道でもあり最悪の道でもある。祭の外では通りは静かであり、人と話すことができる。",
              zh:"十月的酒祭會帶來極大的人潮，並在同一座公園裡斟出全國各地酒藏的酒——端看你為什麼而來，這可能是體驗這個小鎮最好的方式，也可能是最糟的。祭典之外，這條街很安靜，你可以和人好好說話。" } },
          { k:{ en:"What to taste for", ja:"何を味わうか", zh:"要嚐什麼" }, jp:"軟水",
            v:{ en:"Softness, deliberately", ja:"意図された柔らかさ", zh:"刻意的柔軟" },
            d:{ en:"Hiroshima's water is soft and its brewing method was invented to make that a virtue. Against a Nada bottle the difference is obvious: broader, rounder, less angular, with the acidity sitting under the flavour rather than in front of it. This is where warm-region brewing was solved, and every non-Japanese brewery is downstream of it.",
              ja:"広島の水は軟らかく、その醸造法は、それを美点とするために生み出された。灘の一本に対して違いは明らかである。より広く、より丸く、角が少なく、酸は味の前ではなく下に座す。ここは暖かい地方の酒造りが解かれた場所であり、日本以外のあらゆる蔵はその流れの下にある。",
              zh:"廣島的水質軟，而它的釀造法正是為了把這件事變成優點而被發明出來的。與一瓶灘的酒相比，差別很明顯：更寬、更圓、稜角更少，酸度坐在風味之下而非之前。這裡是溫暖地區釀造難題被解開的地方，而日本以外的每一間酒藏都在它的下游。" } },
          { k:{ en:"Add a day", ja:"一日足すなら", zh:"若多加一天" }, jp:"広島・宮島",
            v:{ en:"Oysters", ja:"牡蠣", zh:"牡蠣" },
            d:{ en:"Hiroshima is thirty minutes away and is an oyster city. Soft-water junmai with a raw oyster and a squeeze of lemon is one of the most persuasive pairings in Japan, and it costs almost nothing to test.",
              ja:"広島は三十分の距離であり、牡蠣の町である。軟水の純米と生の牡蠣と檸檬の一絞りは、日本において最も説得力のある取り合わせの一つであり、試すのにほとんど何も要らない。",
              zh:"廣島在三十分鐘車程外，是一座牡蠣之城。軟水純米配上生牡蠣與擠一點檸檬，是日本最具說服力的搭配之一，而且要驗證它幾乎不花什麼錢。" } }
        ] },
        { t:"tiny", text:{
          en:"Background: <a href=\"region-west.html#hiroshima\">Chūgoku &amp; Shikoku</a>.",
          ja:"背景——<a href=\"region-west.html#hiroshima\">中国と四国</a>。",
          zh:"背景閱讀：<a href=\"region-west.html#hiroshima\">中國地方與四國</a>。" } }
      ] },

{ t:"section", id:"niigata",
      title:{ en:"Three — the snow country", ja:"三——雪国", zh:"其三——雪國" }, jp:"新潟",
      body:[
        { t:"p", text:{
          en:"Two or three days, and the only route on this page where the weather is part of the point. Go between January and March; the sake makes a different kind of sense when the snow is two metres deep outside the brewery.",
          ja:"二日か三日。この頁において天気そのものが眼目の一部である唯一の道筋である。一月から三月のあいだに行かれたい。蔵の外に雪が二メートル積もっているとき、酒は別種の筋の通り方をする。",
          zh:"兩到三天，也是本頁唯一一條「天氣本身就是重點」的路線。請在一月到三月之間前往；當酒藏外的積雪有兩公尺深時，酒會以另一種方式變得合情合理。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"The station that is a tasting room", ja:"利き酒の間である駅", zh:"本身就是品飲室的車站" }, jp:"越後湯沢", romaji:"Echigo-Yuzawa", meta:{ en:"first stop", ja:"最初の停まり", zh:"第一站" },
            text:{ en:"Inside the shinkansen station at Echigo-Yuzawa there is a hall of coin-operated dispensers pouring small measures from roughly a hundred Niigata breweries. It is not romantic and it is the single most efficient tasting in Japan: an hour and a handful of coins gives you the prefectural style across a hundred houses, and tells you which three you actually want to visit.",
              ja:"越後湯沢の新幹線の駅の内には、新潟のおよそ百の蔵から少量を注ぐ硬貨の器械の並ぶ広間がある。浪漫はない。そして日本で最も効率のよい利き酒である。一時間と一握りの硬貨が、百軒にわたる県の型を与え、実際に訪ねたい三軒を告げる。",
              zh:"在越後湯澤新幹線車站內，有一整廳投幣式的自動酒器，斟出約一百家新潟酒藏的小份量酒。它一點也不浪漫，卻是全日本效率最高的一場品飲：一小時與一把硬幣，就能讓你把橫跨一百家酒藏的縣產風格摸過一遍，並告訴你真正想去拜訪的是哪三家。" } },
          { n:2, title:{ en:"A brewery in the snow", ja:"雪の中の蔵", zh:"雪中的酒藏" }, jp:"蔵見学", romaji:"kura kengaku", meta:{ en:"book ahead", ja:"要予約", zh:"需預約" },
            text:{ en:"Several Niigata houses take visitors, and two or three run genuinely serious tours with a walk through the working brewhouse. What you want to notice is the cold: an unheated tank room in February sits near freezing without any machinery, and the brewer will tell you the mash is running at eight degrees and holding there by itself. Everything this site says about winter brewing is visible in one room.",
              ja:"新潟の家のいくつかは客を受け、二つ三つは稼働する蔵を歩く、真に本気の案内を営む。気づくべきは寒さである。二月の暖房のない仕込蔵は、いかなる機械もなく氷点近くに座しており、造り手は醪が八度で走り、自らそこに留まっていると告げるだろう。この場所が寒造りについて述べたすべてが、一つの部屋のうちに見える。",
              zh:"新潟有數家酒藏接待訪客，其中兩三家會帶你走過運作中的釀造場，導覽相當認真。你該注意的是寒冷：二月裡一間沒有暖氣的仕込藏，不靠任何機械就維持在接近冰點，而釀造者會告訴你醪正跑在八度，並且自己就停在那裡。本站關於寒造所說的一切，都在同一個房間裡看得見。" } },
          { n:3, title:{ en:"Eat what the sake is for", ja:"酒の相手を食べる", zh:"吃這酒是為誰而造的" }, jp:"へぎそば・鮭", romaji:"hegi-soba, sake", meta:{ en:"evening", ja:"夕", zh:"傍晚" },
            text:{ en:"Niigata's <em>tanrei karakuchi</em> — light and dry — is often described as characterless by people who drink it alone. Drink it with the local food it was built for: buckwheat noodles bound with seaweed, salt-cured salmon, mountain vegetables, and rice that is the best in Japan. The sake is designed to get out of the way, and it is only legible when there is something for it to get out of the way of.",
              ja:"新潟の淡麗辛口は、単独で飲む人からしばしば個性がないと言われる。それが造られた相手である土地の食と共に飲まれたい。海藻でつないだ蕎麦、塩引きの鮭、山菜、そして日本で最も良い米である。この酒は退くように設計されており、退くべき相手があって初めて読めるものとなる。",
              zh:"新潟的「淡麗辛口」，常被那些單獨喝它的人形容為沒有個性。請和它原本被設計來搭配的在地食物一起喝：以海藻黏合的蕎麥麵、鹽漬鮭魚、山菜，以及全日本最好的米。這種酒被設計成「讓開」，而唯有當有東西值得它讓開時，它才變得可讀。" } }
        ] },
        { t:"tiny", text:{
          en:"Background: <a href=\"region-central.html#niigata\">Kantō &amp; the Snow Country</a> and <a href=\"region-hokuriku.html#snow\">Hokuriku &amp; Tōkai</a>.",
          ja:"背景——<a href=\"region-central.html#niigata\">関東と雪国</a>と<a href=\"region-hokuriku.html#snow\">北陸と東海</a>。",
          zh:"背景閱讀：<a href=\"region-central.html#niigata\">關東與雪國</a>與<a href=\"region-hokuriku.html#snow\">北陸與東海</a>。" } }
      ] },

    { t:"section", id:"tohoku",
      title:{ en:"Four — the northern arc", ja:"四——北の弧", zh:"其四——北方之弧" }, jp:"東北",
      body:[
        { t:"p", text:{
          en:"Three days and the most rewarding route for anyone who has already drunk enough sake to have opinions. Tōhoku is where the technical centre of gravity moved in the last thirty years, the breweries are small, the towns are quiet, and the welcome is warmer than anywhere on this page.",
          ja:"三日。すでに十分に飲み、意見を持つに至った者にとって最も報いのある道筋である。東北はこの三十年に技術の重心が移った場所であり、蔵は小さく、町は静かで、迎えはこの頁のどこよりも温かい。",
          zh:"三天，也是對「已經喝夠多、開始有自己看法」的人最有回報的一條路線。東北是過去三十年技術重心遷移的所在，酒藏規模小、城鎮安靜，而迎接的熱度也勝過本頁其他任何地方。" } },
        { t:"grid", cols:3, cells:[
          { k:{ en:"Yamagata", ja:"山形", zh:"山形" }, jp:"庄内・村山",
            v:{ en:"The first prefecture GI", ja:"最初の県の地理的表示", zh:"第一個全縣 GI" },
            d:{ en:"A prefecture that decided, collectively and with a laboratory behind it, to be good — the first whole-prefecture geographical indication in the country, prefectural yeasts, a prefectural rice, and a style that runs clean and aromatic without being showy. Base yourself at Tsuruoka or Yamagata city; the food is exceptional and cheap.",
              ja:"実験室を背に、共同で、良くあろうと決めた県である。国で最初の県全域の地理的表示、県の酵母、県の米、そして華美にならずに清らかで香り高い型を持つ。鶴岡か山形市を拠りどころとされたい。食は並外れて良く、そして安い。",
              zh:"一個以實驗室為後盾、集體決定「要做得好」的縣——全國第一個全縣範圍的地理標示、縣產酵母、縣產米，以及一種乾淨芳香卻不張揚的風格。以鶴岡或山形市為據點；食物出色而便宜。" } },
          { k:{ en:"Akita", ja:"秋田", zh:"秋田" }, jp:"秋田",
            v:{ en:"The oldest laboratory", ja:"最も古い試験場", zh:"最古老的試驗場" },
            d:{ en:"A prefectural brewing research station since 1896, a distinctive lightly sweet and low-acid house style, and a group of small houses that have deliberately gone the other way into kimoto and long fermentation. Winter here is severe and the drinking culture is correspondingly committed.",
              ja:"明治二十九年（1896）からの県の醸造の試験場、かすかに甘く酸の低い際立った型、そして意図して逆へ、生酛と長い発酵へ向かった小さな家々の一群。ここの冬は厳しく、飲酒の文化はそれに応じて熱心である。",
              zh:"自一八九六年就設有縣立釀造試驗場，擁有微甜、低酸的鮮明地方風格，以及一群刻意反其道而行、走向生酛與長時間發酵的小酒藏。這裡的冬天嚴酷，而飲酒文化也相應地投入。" } },
          { k:{ en:"Fukushima", ja:"福島", zh:"福島" }, jp:"会津",
            v:{ en:"The recovery", ja:"立ち直り", zh:"復原" },
            d:{ en:"Aizu is a castle town in a mountain basin with a dense cluster of breweries and a serious food culture, and it is the place to understand what a prefecture did with a training school and a decade. Go in winter for the snow and the miso ramen; go in spring for the blossom along the river.",
              ja:"会津は山あいの盆地の城下町であり、蔵が密に集まり、本気の食の文化を持つ。一つの県が学校と十年をもって何をなしたかを解する場所である。雪と味噌拉麺のためには冬に、川沿いの花のためには春に行かれたい。",
              zh:"會津是位於山間盆地的城下町，酒藏密集，飲食文化認真，也是理解「一個縣用一所學校與十年做了什麼」的地方。想要雪與味噌拉麵就冬天去；想要沿河的花就春天去。" } }
        ] },
        { t:"tiny", text:{
          en:"Background: <a href=\"region-north.html\">The North</a>.",
          ja:"背景——<a href=\"region-north.html\">北日本</a>。",
          zh:"背景閱讀：<a href=\"region-north.html\">北日本</a>。" } }
      ] },

    { t:"section", id:"kyushu",
      title:{ en:"Five — the exception", ja:"五——例外", zh:"其五——例外" }, jp:"九州",
      body:[
        { t:"p", text:{
          en:"Two or three days in the one part of Japan where sake is the minority drink — which makes it, perversely, the route that teaches the most about what sake actually is, because everything here is a contrast.",
          ja:"日本酒が少数派の飲み物である日本の唯一の一帯における、二日か三日。それは逆説として、日本酒とは実際に何であるかを最も多く教える道筋である。ここではすべてが対比だからである。",
          zh:"在日本唯一一塊清酒屬於少數飲料的地帶待上兩到三天——而弔詭的是，這反而使它成為最能教會你「清酒究竟是什麼」的一條路線，因為這裡的一切都是對照。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Kashima and the brewery street", ja:"鹿島と酒蔵通り", zh:"鹿島與酒藏街" }, jp:"佐賀・鹿島", romaji:"Saga, Kashima", meta:{ en:"Saga", ja:"佐賀", zh:"佐賀" },
            text:{ en:"A small town whose brewing street was contracting until one of its houses won the world's largest sake competition in 2011. It now holds a brewery-opening weekend in spring that fills the town, and the preserved district can be walked in an afternoon. The sake here is the sweetest regional style in Japan and makes no apology for it — taste it against a Niigata bottle if you have one in your bag.",
              ja:"その酒蔵通りが縮み続けていた小さな町。二〇一一年、その一軒が世界で最も大きな日本酒の品評会を制するまでは。今では春に町を満たす蔵開きの週末を催し、保存された地区は午後のうちに歩ける。ここの酒は日本で最も甘い地方の型であり、それについて弁解しない。鞄に新潟の一本があるなら、それに対して味わわれたい。",
              zh:"一個酒藏街原本持續萎縮的小鎮——直到二〇一一年，其中一家酒藏在世界最大的清酒競賽中奪冠。如今它在春天舉辦擠滿全鎮的酒藏開放週末，而被保存下來的街區一個下午就能走完。這裡的酒是日本最甜的地方風格，而且毫不致歉——如果你包裡有一瓶新潟的酒，請拿來對照著喝。" } },
          { n:2, title:{ en:"Kumamoto, for the yeast", ja:"熊本、酵母のために", zh:"熊本，為了那株酵母" }, jp:"熊本", romaji:"Kumamoto", meta:{ en:"one afternoon", ja:"午後の半日", zh:"半個下午" },
            text:{ en:"The research institute that isolated Association yeast No. 9 still brews its own small quantity of sake, and it is worth buying a bottle simply as a reference: this is what the most influential yeast in modern brewing does when nobody is competing with it. The city is also the gateway to Aso, and the volcanic groundwater is a whole argument in itself.",
              ja:"きょうかい9号を分離した研究所は今も自らの酒を少量醸しており、単に基準として一本買う値打ちがある。現代の醸造において最も影響の大きい酵母が、誰とも競っていないときに何をなすかである。この街はまた阿蘇への入口であり、火山の地下水はそれ自体が一つの論である。",
              zh:"分離出協會九號酵母的研究所至今仍少量釀造自家的酒，值得單純當作基準買一瓶：這就是現代釀造中最具影響力的那株酵母，在無人與之競爭時會做出的東西。這座城市同時是通往阿蘇的門戶，而火山地下水本身就是一整套論證。" } },
          { n:3, title:{ en:"And then stop drinking sake", ja:"そして日本酒をやめる", zh:"然後停止喝清酒" }, jp:"焼酎", romaji:"shōchū", meta:{ en:"the point of the trip", ja:"旅の眼目", zh:"這趟旅程的重點" },
            text:{ en:"Spend the last evening on shōchū instead — barley in the north of the island, rice in the centre, sweet potato in the south — and ask what changed. Same rice in some cases, same kōji genus, same country, a different mould and one pass through a still. Understanding why the south distils is the fastest way to understand why the north does not, and no amount of reading does it as well as a glass of imo-jōchū cut with hot water in Kagoshima.",
              ja:"最後の宵は代わりに焼酎に費やされたい。島の北では麦、中では米、南では甘藷である。そして何が変わったのかを問われたい。場合によっては同じ米、同じ属の麹、同じ国、異なる黴、そして蒸留器を一度通ること。なぜ南が蒸留するのかを解することは、なぜ北がそうしないのかを解する最も速い道であり、いかに読んでも、鹿児島で湯で割った芋焼酎の一杯には及ばない。",
              zh:"最後一晚改喝燒酎——島的北部用麥、中部用米、南部用甘藷——並且問問自己：改變的是什麼。有些情況下是同樣的米、同一屬的麴、同一個國家，卻是不同的黴菌，外加通過蒸餾器一次。理解南方為何蒸餾，是理解北方為何不蒸餾最快的路徑；而讀再多，都比不上在鹿兒島喝一杯以熱水兌開的芋燒酎。" } }
        ] },
        { t:"tiny", text:{
          en:"Background: <a href=\"region-kyushu.html\">Kyūshū &amp; Okinawa</a>.",
          ja:"背景——<a href=\"region-kyushu.html\">九州と沖縄</a>。",
          zh:"背景閱讀：<a href=\"region-kyushu.html\">九州與沖繩</a>。" } }
      ] },

    { t:"section", id:"when",
      title:{ en:"When to go", ja:"いつ行くか", zh:"什麼時候去" }, jp:"季節",
      body:[
        { t:"p", text:{
          en:"Every one of the five routes above works in any month, but they are not equally good in any month, and the reason is that a brewery is a workplace with a season. The single most common mistake a visitor makes is to arrive in January expecting to be shown around: that is the middle of the working season, the tōji has not slept properly in six weeks, and a good many houses simply close their doors to visitors until the pressing is done. The second most common mistake is the opposite one — arriving in July, when the building is clean, quiet, empty and has nothing whatever to show you.",
          ja:"上の五つの道筋はいずれの月にも成り立つが、いずれの月にも等しく良いわけではない。蔵とは季節を持つ仕事場だからである。訪う者が最もよく犯す誤りは、案内されるつもりで一月に着くことである。そこは働きの季節の只中であり、杜氏は六週のあいだまともに眠っておらず、少なからぬ蔵は搾りが終わるまで訪問者に戸を閉ざす。次によくある誤りはその逆である。七月に着くこと。建物は清められ、静かで、空であり、見せるべきものが何一つない。",
          zh:"上述五條路線在任何月份都成立，但並非每個月都同樣好；理由是酒藏是一個有季節的工作場所。訪客最常犯的錯，是一月抵達並期待有人帶你參觀：那正是工作季的正中央，杜氏已經六週沒好好睡過，而相當多的酒藏乾脆閉門謝客，直到搾酒結束為止。第二常見的錯誤剛好相反——七月抵達，此時建築乾淨、安靜、空無一物，也完全沒有東西可以給你看。" } },

        { t:"figure",
          caption:{
            en:"The brewing year, which begins on the first of October and is the axis everything in the trade is counted against. The top band is the season itself, and its dark core is the stretch in which most houses will not take visitors at all — not from unfriendliness but because the kōji room runs on a forty-eight-hour cycle that nobody can step out of. The two bands at the bottom are the weeks worth travelling for: autumn, when the year's sake has just been released and the brewery is preparing rather than fighting, and late winter, when the presses are running and the open days begin.",
            ja:"酒造年度。十月一日に始まり、商いのあらゆる数がそれに対して数えられる軸である。最上の帯は季節そのものであり、その濃い芯は、ほとんどの蔵が訪問者をまったく受けぬ期間である。無愛想ゆえではない。麹室が四十八時間の周期で回っており、誰もそこから抜けられぬからである。下の二つの帯は、旅する値打ちのある週である。秋——その年の酒が出たばかりで、蔵は戦っているのではなく備えている。そして冬の末——槽が動き、蔵開きが始まる。",
            zh:"酒造年度：始於十月一日，也是這門生意裡一切數字所依據的軸線。最上方的色帶是釀造季本身，其深色核心是大多數酒藏完全不接待訪客的區間——不是因為不友善，而是因為麴室以四十八小時為周期運轉，沒有人能中途離開。最下方的兩條色帶，是值得專程前往的那幾週：秋天，當年度的酒剛出、酒藏在準備而非鏖戰；以及冬末，搾酒機運轉、開藏日開始的時候。" },
          svg: function (lang, L) {
            var W = 760, H = 352, X0 = 170, X1 = 722, Y0 = 76, RH = 34;
            function px(m) { return X0 + m / 12 * (X1 - X0); }
            function tw(t, size) { var w = 0, i2; for (i2 = 0; i2 < t.length; i2++) w += (t.charCodeAt(i2) > 0x2E80 ? 1.0 : 0.52); return w * size; }
            var MON = ["10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            var rows = [
              { jp:"造り", n:{ en:"the brewing season", ja:"つくり", zh:"釀造季" },
                seg:[[0, 6]], core:[2, 5], f:"#DACFB8",
                t:{ en:"October to March", ja:"十月から三月", zh:"十月至三月" } },
              { jp:"新酒", n:{ en:"new sake, straight off the press", ja:"しんしゅ・搾りたて", zh:"新酒・剛搾出的酒" },
                seg:[[2, 6]], f:"#C0AF8E",
                t:{ en:"December to March", ja:"十二月から三月", zh:"十二月至三月" } },
              { jp:"蔵開き", n:{ en:"the open days", ja:"くらびらき", zh:"開藏日" },
                seg:[[4, 6]], f:"#B09E7C",
                t:{ en:"February and March, mostly", ja:"多くは二月と三月", zh:"多在二月與三月" } },
              { jp:"ひやおろし", n:{ en:"a summer in tank, then released", ja:"夏を越して出る", zh:"越夏之後才出貨" },
                seg:[[11, 12], [0, 1]], f:"#9FB0A6",
                t:{ en:"September into October", ja:"九月から十月へ", zh:"九月進入十月" } },
              { jp:"夏酒", n:{ en:"summer sake, light and cold", ja:"なつざけ", zh:"夏酒" },
                seg:[[8, 11]], f:"#8B9BA6",
                t:{ en:"June to August", ja:"六月から八月", zh:"六月至八月" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + rows.length * RH, i, j, m;
            for (m = 0; m <= 12; m++) {
              s += '<line x1="' + px(m).toFixed(1) + '" y1="' + (Y0 - 22) + '" x2="' + px(m).toFixed(1) + '" y2="' + (BOT + 54) + '" stroke="#EFEDE7"/>';
            }
            for (m = 0; m < 12; m++) {
              s += '<text x="' + (px(m) + (X1 - X0) / 24).toFixed(1) + '" y="' + (Y0 - 28) + '" text-anchor="middle" font-size="10" fill="' +
                   (m === 0 ? "#7C6B52" : "#8B857C") + '">' + MON[m] + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (Y0 - 46) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "酒造年度・十月一日に始まる" : lang === "zh" ? "酒造年度・始於十月一日" : "THE BREWING YEAR, BEGINNING 1 OCTOBER") + '</text>';
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], y = Y0 + i * RH;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 14) + '" text-anchor="end" font-size="12" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 26) + '" text-anchor="end" font-size="8.5" fill="#ADA79E">' + L(r.t) + '</text>';
              for (j = 0; j < r.seg.length; j++) {
                s += '<rect x="' + px(r.seg[j][0]).toFixed(1) + '" y="' + (y + 2) + '" width="' + (px(r.seg[j][1]) - px(r.seg[j][0])).toFixed(1) +
                     '" height="20" fill="' + r.f + '" stroke="#CDC6B9"/>';
              }
              if (r.core) {
                s += '<rect x="' + px(r.core[0]).toFixed(1) + '" y="' + (y + 2) + '" width="' + (px(r.core[1]) - px(r.core[0])).toFixed(1) +
                     '" height="20" fill="#8B7F68"/>';
                s += '<text x="' + ((px(r.core[0]) + px(r.core[1])) / 2).toFixed(1) + '" y="' + (y + 16) + '" text-anchor="middle" font-size="9" fill="#FBFAF7">' +
                     (lang === "ja" ? "訪問を受けぬ蔵が多い" : lang === "zh" ? "多數酒藏不接待訪客" : "most houses close to visitors") + '</text>';
              }
              var lastEnd = px(r.seg[r.seg.length - 1][1]), firstStart = px(r.seg[0][0]), nm = L(r.n), nw = tw(nm, 9.5);
              if (lastEnd + 9 + nw < W - 24) {
                s += '<text x="' + (lastEnd + 9).toFixed(1) + '" y="' + (y + 16) + '" font-size="9.5" fill="#8B857C">' + nm + '</text>';
              } else {
                s += '<text x="' + (firstStart - 9).toFixed(1) + '" y="' + (y + 16) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + nm + '</text>';
              }
            }
            /* when to travel */
            var TY = BOT + 22;
            s += '<text x="' + (X0 - 16) + '" y="' + (TY + 15) + '" text-anchor="end" font-size="9.5" letter-spacing="1.1" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "行くなら" : lang === "zh" ? "要去的話" : "GO THEN") + '</text>';
            var go = [
              { a:0, b:2, t:{ en:"autumn — hiyaoroshi out, the building preparing", ja:"秋——ひやおろしが出て、蔵は備えている", zh:"秋天——冷卸已出，酒藏正在準備" } },
              { a:4.4, b:6, t:{ en:"late winter — presses running, open days", ja:"冬の末——槽が動き、蔵開き", zh:"冬末——搾酒運轉，開藏日" } }
            ];
            for (i = 0; i < go.length; i++) {
              s += '<rect x="' + px(go[i].a).toFixed(1) + '" y="' + TY + '" width="' + (px(go[i].b) - px(go[i].a)).toFixed(1) +
                   '" height="22" fill="#EDE5D2" stroke="#A08F73"/>';
              s += '<rect x="' + X0 + '" y="' + (TY + 30 + i * 15) + '" width="10" height="10" fill="#EDE5D2" stroke="#A08F73"/>';
              s += '<text x="' + (X0 + 16) + '" y="' + (TY + 39 + i * 15) + '" font-size="9.5" fill="#7C6B52">' + L(go[i].t) + '</text>';
            }
            s += '<line x1="' + px(0).toFixed(1) + '" y1="' + (Y0 - 22) + '" x2="' + px(0).toFixed(1) + '" y2="' + (TY + 22) + '" stroke="#7C6B52"/>';
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "蔵開きの日取りは蔵ごとに決まり、多くは一月ほど前に告げられる。行くと決めたら、その一軒の告知を待つほかない。"
                  : lang === "zh" ? "開藏日由各酒藏自行決定，多半在一個月前才公告；一旦決定要去，就只能等那一家自己發布消息。"
                  : "Open days are set brewery by brewery and usually announced about a month ahead — once you have chosen a house, watch its own notices.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"What to write and when", ja:"いつ、何を書くか", zh:"什麼時候寫信，寫什麼" }, jp:"見学の申し込み", romaji:"kengaku no mōshikomi",
            def:{ en:"Small breweries that take visitors almost always require it to be arranged in advance, and the request is made by e-mail or through a form on the site, in Japanese, two to four weeks ahead. What makes a request succeed is specificity: the date, the number of people, whether anyone is driving, and one sentence saying why this brewery rather than any other. A house that receives a letter mentioning its own rice or its own starter method will find room; a house that receives &#8220;do you do tours?&#8221; often will not reply at all.",
              ja:"訪問を受ける小さな蔵は、ほぼ必ず事前の手配を求める。申し込みは電子郵便か、蔵のウェブの書式から、日本語で、二週から四週前になす。通る申し込みを作るのは具体である——日取り、人数、車の運転をする者があるか、そしてなぜ他ならぬこの蔵なのかを述べる一文。自らの米や自らの酒母法に触れた手紙を受け取った蔵は席を作る。「見学はできますか」を受け取った蔵は、しばしば返事をしない。",
              zh:"接待訪客的小型酒藏幾乎都要求事先安排，申請方式是電子郵件或網站表單，以日文書寫，提前兩到四週。讓一封申請成功的關鍵是具體：日期、人數、是否有人開車，以及一句說明為何是這家而非別家。收到一封提及自家米種或自家酒母工法的信，酒藏會挪出時間；收到「請問可以參觀嗎？」的，往往不會回覆。" } },
          { term:{ en:"The ones that never close", ja:"閉じない場所", zh:"從不關門的地方" }, jp:"資料館・直売所", romaji:"shiryōkan / chokubaijo",
            def:{ en:"Every route above includes at least one place that is open all year and requires no arrangement at all: a brewery museum, a shop attached to a working kura, a station tasting bar, a prefectural sake centre. These are the backbone of a trip planned at short notice or in the wrong month, and they are frequently better than a tour — a museum has time to explain the tools, and a tasting counter will pour you eleven things in an hour that no single brewery could.",
              ja:"上のいずれの道筋にも、年を通して開いており、手配を要さぬ場所が少なくとも一つ含まれる。蔵の資料館、働く蔵に付いた直売所、駅の利き酒処、県の日本酒の館。急に決めた旅、あるいは季節を外した旅の背骨であり、しばしば案内よりも良い。資料館は道具を説く時を持ち、利き酒の台は、どの一蔵にもなしえぬ十一種を一時間で注いでくれる。",
              zh:"上述每條路線都至少包含一處全年開放、且完全不需預約的地方：酒藏資料館、附設於運作中酒藏的直賣所、車站裡的試飲吧、縣立的清酒推廣館。它們是臨時起意或選錯月份時的旅程骨幹，而且往往比導覽更好——資料館有時間解釋器具，而試飲檯能在一小時內給你倒上十一種酒，那是任何單一酒藏都做不到的。" } },
          { term:{ en:"Driving", ja:"車で行くこと", zh:"開車前往" }, jp:"飲酒運転", romaji:"inshu unten",
            def:{ en:"Japan's drink-driving law is among the strictest anywhere and the penalties extend to the people who let you drive, the person who poured, and the person who lent you the car. The legal threshold is 0.15 mg of alcohol per litre of breath, which for most people is reached by a single glass. Every brewery will ask whether anyone in the party is driving, and the designated driver is given tea and a bottle to take home. There is no cultural negotiation available on this point and none should be attempted.",
              ja:"日本の飲酒運転の法は世界でも最も厳しい部類であり、罰は運転させた者、注いだ者、車を貸した者にまで及ぶ。法の基準は呼気一リットルあたり〇・一五ミリグラムであり、多くの人にとってそれは一杯で達する。どの蔵も、一行のなかに運転する者があるかを必ず訊く。運転する者には茶と、持ち帰りの一本が渡される。この一点について文化的な交渉の余地はなく、試みるべきでもない。",
              zh:"日本的酒駕法規是全世界最嚴厲的之一，罰則甚至及於讓你開車的人、替你斟酒的人，以及把車借給你的人。法定門檻是每公升呼氣 0.15 毫克，對多數人而言一杯就會達到。每家酒藏都會詢問同行者中是否有人開車，而負責開車的人會被奉上茶，以及一瓶帶回家的酒。在這一點上沒有任何文化協商的空間，也不該嘗試。" } }
        ] }
      ] },

    { t:"section", id:"taiwan-route",
      title:{ en:"Six — the one you can do at home", ja:"六——家から行ける道筋", zh:"之六——在家門口就能走的一條" }, jp:"台北・台中",
      body:[
        { t:"p", text:{
          en:"This one is here because a large share of the people reading this page are in Taipei, and because Taiwan has an unusually complete sake story to walk through in two days: a colonial-era brewery that is now an arts district, a brewing plant from 1919 still working on its original site, and a contemporary producer making sake from a rice bred for eating. It is not a substitute for Japan. It is a different argument, made in a place where the category had to be rebuilt from nothing after 2002.",
          ja:"これがここに在るのは、この頁を読む人の少なからぬ部分が台北に在るからであり、そして台湾が、二日で歩き通せる異例なほど完備した日本酒の物語を持つからである。いまは芸術の街区となっている植民地期の蔵、一九一九年から同じ場所で今なお働く醸造の工場、そして食用に育てられた米から酒を醸す現代の造り手。日本の代わりではない。二〇〇二年ののち無から建て直さねばならなかった場所でなされた、別の論である。",
          zh:"這條路線之所以在此，是因為閱讀本頁的人有相當高的比例身在臺北，也因為臺灣擁有一個異常完整、兩天就能走完的清酒故事：一座如今已成為藝文園區的殖民時期酒廠、一座自一九一九年起就在原址運作至今的釀造工場，以及一位以食用米釀造清酒的當代生產者。它不是日本的替代品，而是另一套論證——在一個二〇〇二年之後必須從零重建這個品類的地方所提出的論證。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Huashan, half a morning", ja:"華山、午前の半分", zh:"華山，半個上午" }, jp:"華山1914", romaji:"Huashan 1914",
            meta:{ en:"Taipei · open all year, free", ja:"台北・通年、無料", zh:"臺北・全年開放，免費" },
            text:{ en:"The site began in 1914 as Hōjōsha, a private Japanese-style sake brewery in a subtropical city three decades before refrigeration made that a reasonable proposition. The monopoly bureau bought it out in the 1920s, it became the Taipei Alcohol Factory under three successive administrations, production moved to Linkou, and the buildings stood empty until artists occupied them. Walk it as industrial archaeology: the shapes of the buildings are the shapes of a fermentation plant, and the place is legible once you know what you are looking at. Allow two hours and read <a href=\"taiwan.html\">Sake in Taiwan</a> first, because nothing on the site explains this.",
              ja:"この場所は一九一四年、芳醸社として始まった。冷凍設備がそれを理に適う話とする三十年前、亜熱帯の都市における日本式の私営の蔵である。一九二〇年代に専売局が買い上げ、三つの行政のもとで台北酒工場となり、生産は林口へ移り、建物は芸術家が占めるまで空のまま立っていた。産業考古として歩かれたい。建物の形は醗酵の工場の形であり、何を見ているかを知れば、その場所は読める。二時間を見ておき、先に<a href=\"taiwan.html\">台湾と日本酒</a>を読まれたい。現地には何の説明もないからである。",
              zh:"此地始於一九一四年的芳釀社——一座位於亞熱帶城市的日式民營清酒廠，比冷藏設備讓這件事變得合理還早了三十年。專賣局在一九二〇年代將其收購，它在三個政權之下成為臺北酒工場，生產遷往林口，建築則空置到藝術家進駐為止。請把它當作工業考古來走：建築的形狀就是發酵工廠的形狀，而一旦你知道自己在看什麼，這個地方就讀得懂了。請預留兩小時，並先讀<a href=\"taiwan.html\">臺灣與清酒</a>，因為現場對此沒有任何說明。" } },
          { n:"2", title:{ en:"The brewery that never stopped", ja:"止まらなかった工場", zh:"從未停工的那一座" }, jp:"建国啤酒廠", romaji:"Jianguo Beer Factory",
            meta:{ en:"Taipei · founded 1919, still working", ja:"台北・一九一九年創業、今も稼働", zh:"臺北・一九一九年創立，至今仍在運作" },
            text:{ en:"Fifteen minutes away is a brewery founded in 1919 that has been making alcohol on the same site ever since, through the monopoly and out the other side — among the oldest continuously operating breweries in East Asia. It makes beer rather than sake, which is exactly the point: the monopoly did not destroy Taiwan's brewing industry, it redirected it, and the thing it was redirected into is still standing in the middle of Taipei. Access varies; check before going.",
              ja:"十五分のところに、一九一九年に創られ、以来同じ場所で酒を造り続けてきた工場がある。専売を通り抜け、その向こうへ出てきた。東アジアで最も長く連続して操業している醸造所の一つである。造るのは日本酒ではなくビールであり、それこそが要点である。専売は台湾の醸造の産業を滅ぼしたのではなく、向きを変えた。そして向きを変えられた先のものが、台北の真ん中に今も立っている。入れるかどうかは時により異なる。行く前に確かめられたい。",
              zh:"十五分鐘車程之外，有一座創立於一九一九年的酒廠，自此在同一地點持續製酒，穿過專賣制度並從另一端走了出來——是東亞持續營運最久的釀造廠之一。它做的是啤酒而非清酒，而這正是重點：專賣制度並沒有摧毀臺灣的釀造業，而是把它轉了個方向；而被轉向之後的那個東西，至今仍矗立在臺北市中心。是否開放參觀不一，前往前請先確認。" } },
          { n:"3", title:{ en:"Down to Wufeng", ja:"霧峰へ下る", zh:"南下霧峰" }, jp:"霧峰農會酒莊", romaji:"Wufeng",
            meta:{ en:"Taichung · the working producer", ja:"台中・現に造っている造り手", zh:"臺中・真正在釀的生產者" },
            text:{ en:"An hour by high-speed rail and a short taxi ride brings you to the farmers' association winery that pressed the first significant private sake made in Taiwan since 1922. It brews junmai ginjō and daiginjō from Yiquan aromatic rice grown in Wufeng with spring water from Puli — a rice bred for the table, used deliberately and successfully at premium level, which is a thing almost nobody in Japan attempts. Taste it against a Japanese junmai ginjō of similar price and the difference is instructive rather than embarrassing.",
              ja:"高速鉄道で一時間、そこから短く車を拾えば、一九二二年以来台湾で造られた最初の本格的な民間の清酒を搾った農会の酒荘に着く。霧峰に育つ益全香米と埔里の湧水で純米吟醸と大吟醸を醸す。食用に育てられた米を、意図して、しかも上位の水準で用いている。日本でこれを試みる者はほとんどない。似た値の日本の純米吟醸と並べて味わえば、その差は恥ずかしいものではなく、教えるところの多いものである。",
              zh:"高鐵一小時，再搭一小段計程車，就會抵達那座農會酒莊——自一九二二年以來，臺灣第一批具規模的民間清酒就是在這裡搾出的。它以霧峰所產的益全香米與埔里湧泉釀造純米吟釀與大吟釀：一種為食用而育成的米，被刻意、且成功地用在高階酒上，而這是日本幾乎沒有人嘗試的事。把它與價位相近的日本純米吟釀並置品飲，那份差異不會讓人難堪，反而很有啟發。" } },
          { n:"4", title:{ en:"And the shelf at home", ja:"そして家の棚", zh:"以及家裡的那個貨架" }, jp:"買う", romaji:"kau",
            meta:{ en:"Taipei · any evening", ja:"台北・いつの夕べにも", zh:"臺北・任何一個晚上" },
            text:{ en:"Taiwan imports a great deal of Japanese sake and the specialist end of the market is unusually good — refrigerated shelves, staff who have tasted what they sell, and a price structure distorted by the tax treatment rather than by the quality. The practical advice is on <a href=\"taiwan.html\">Sake in Taiwan</a>: buy from somewhere that refrigerates, read the pressing date rather than the label, and treat the department-store basement and the specialist importer as two different businesses, because they are.",
              ja:"台湾は日本の酒を多く輸入しており、専門の側の市場は異例なほど良い。冷蔵の棚、売るものを味わっている店員、そして品質ではなく税の扱いによって歪んだ値の構造。実際の助言は<a href=\"taiwan.html\">台湾と日本酒</a>にある。冷蔵している店で買うこと、札ではなく製造年月を読むこと、そして百貨店の地階と専門の輸入商とを二つの別の商いとして扱うこと。実際に別のものだからである。",
              zh:"臺灣進口了大量日本清酒，而專業端的市場水準異常地好：冷藏貨架、真正嚐過自己所賣之酒的店員，以及一套被稅制、而非被品質所扭曲的價格結構。實務建議見<a href=\"taiwan.html\">臺灣與清酒</a>：在有冷藏的地方買、讀製造年月而不是讀酒標，並且把百貨公司地下樓與專業進口商當成兩門不同的生意看待——因為它們確實是。" } }
        ] },

        { t:"note", text:{
          en:"Opening arrangements at all four change, and two of them are working industrial sites rather than attractions. Check each before travelling. The route is written for two days at a walking pace; done in one it becomes a list, which is the thing the other five routes on this page are constructed to avoid.",
          ja:"四つのいずれも、開いている条は変わる。うち二つは見世物ではなく、現に働く産業の場である。行く前にそれぞれ確かめられたい。この道筋は歩く速さの二日として書いてある。一日でこなせば一覧になる。この頁の他の五つの道筋が、避けるべく組まれているのは、まさにそれである。",
          zh:"這四處的開放方式都會變動，其中兩處是實際運作中的工業場址，而非景點。前往之前請逐一確認。這條路線是以步行速度、兩天的份量所寫；若壓縮成一天，它就變成一張清單——而那正是本頁其餘五條路線刻意要避免的東西。" } }
      ] },

    { t:"section", id:"practical",
      title:{ en:"Practical notes for all five", ja:"五つに共通する実際のこと", zh:"五條路線共通的實務要點" }, jp:"実務",
      body:[
        { t:"ul", items:[
          { en:"<strong>Season.</strong> Brewing runs roughly October to April. Visiting in the season means the building is alive and the crew is busy; visiting outside it means people have time to talk and nothing is happening. Neither is better and the choice is worth making on purpose.",
            ja:"<strong>季節。</strong>酒造りはおおむね十月から四月である。季の内に訪ねれば建物は生きており、蔵人は忙しい。季の外に訪ねれば人には話す時間があり、何も起きていない。どちらが優れているということはなく、この選びは意図してなす値打ちがある。",
            zh:"<strong>季節。</strong>釀造季大致從十月到四月。在季內造訪，建築是活的，藏人很忙；在季外造訪，人們有時間說話，但什麼也沒在發生。兩者沒有優劣，而這個選擇值得刻意去做。" },
          { en:"<strong>Getting bottles home.</strong> Sake cannot go in hand luggage in any quantity, and a 1.8 L bottle will not survive checked baggage without serious packing. Buy 720 mL, buy padded sleeves, and put the bottles in the middle of a suitcase with clothes around them. Some breweries and department stores will ship internationally; almost no small brewery will.",
            ja:"<strong>瓶を持ち帰ること。</strong>日本酒は量として手荷物には入らず、一升瓶は本気の梱包なしに預けた荷を生き延びない。四合瓶を買い、緩衝の袋を買い、衣類に囲ませて鞄の中ほどに入れられたい。国外へ送る蔵や百貨店もあるが、小さな蔵のほとんどは送らない。",
            zh:"<strong>把酒帶回家。</strong>清酒無法以任何數量帶上手提行李，而一升瓶若沒有認真包裝，也撐不過托運。請買四合瓶、買氣泡緩衝套，並把酒瓶放在行李箱正中央、四周用衣物包住。有些酒藏與百貨公司可以國際寄送；小型酒藏幾乎都不行。" },
          { en:"<strong>Language.</strong> Outside the large houses, English is uncommon and nobody minds. A written note naming what you are looking for — a style, a rice, a temperature — works better than a conversation, and the vocabulary is on the <a href=\"visiting.html#phrases\">Visiting</a> and <a href=\"kanji.html\">Characters</a> pages.",
            ja:"<strong>言葉。</strong>大きな家の外では英語は稀であり、誰もそれを気にしない。求めているもの——酒質、米、温度——を書いた紙は会話よりよく働き、その語彙は<a href=\"visiting.html#phrases\">蔵を訪ねる</a>と<a href=\"kanji.html\">瓶の上の漢字</a>の頁にある。",
            zh:"<strong>語言。</strong>在大型酒藏之外，英語並不常見，而且沒有人會介意。一張寫下你在找什麼的紙條——某種風格、某種米、某個溫度——比對話更有效，而所需的詞彙就在<a href=\"visiting.html#phrases\">造訪與選購</a>與<a href=\"kanji.html\">瓶身上的漢字</a>兩頁。" },
          { en:"<strong>Driving.</strong> Do not. Japan's drink-driving law reaches the passenger and the person who poured, the threshold is very low, and every one of these routes works on trains. Where a route needs a car, someone in the group does not drink at all, and that is the normal arrangement rather than a sacrifice.",
            ja:"<strong>運転。</strong>してはならない。日本の飲酒運転の法は同乗者と注いだ者にまで及び、閾はきわめて低く、そしてこれらの道筋はいずれも鉄道で成る。車を要する道筋では、一行の誰かが一切飲まない。それは犠牲ではなく通常の取り決めである。",
            zh:"<strong>開車。</strong>不要。日本的酒駕法律會延伸到同車乘客與斟酒的人，門檻極低，而以上每一條路線都能靠鐵路完成。若某條路線需要車，就由同行的某個人全程滴酒不沾——那是常態安排，不是犧牲。" }
        ] }
      ] },

    { t:"related", items:[
      { href:"visiting.html", why:{ en:"The practical questions each route raises.", ja:"各々の道筋が生む実際の問い。", zh:"每一條路線會帶出的實務問題。" } },
      { href:"places.html", why:{ en:"The kinds of room the routes pass through.", ja:"道筋が通り抜ける部屋の種類。", zh:"這些路線會經過哪些類型的空間。" } },
      { href:"calendar.html", why:{ en:"When to go, if the brewing is the point.", ja:"造りが眼目であるなら、いつ行くか。", zh:"如果重點是釀造，那該什麼時候去。" } },
      { href:"regions.html", why:{ en:"The prefectures each route crosses.", ja:"各々の道筋が横切る県。", zh:"每一條路線會穿過哪些縣。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- visiting */
SAKE.pages["visiting"] = {
  kicker: { en: "Drinking · 14", ja: "飲む · 14", zh: "品飲 · 14" },
  title:  { en: "Visiting & Buying", ja: "蔵を訪ね、酒を買う", zh: "訪藏與選購" },
  jp: "酒蔵・酒販店・酒場",
  lede: {
    en: "Sake rewards going to look at it more than most drinks, partly because so much of what a brewery does is legible on sight — the steam, the cedar room, the smell of the kōji — and partly because a great deal of the best sake in Japan never leaves the prefecture it was made in. This page covers visiting a brewery, finding a shop that stores properly, drinking in the places Japanese people actually drink, and getting bottles home without ruining them.",
    ja: "日本酒は、多くの飲み物にもまして、見に行くことに報いてくれる。蔵の仕事の多くが目で読めるからである——立ち上る蒸気、杉の室、麹の匂い。そして日本で最も良い酒の少なからぬ部分が、造られた県から出ないからでもある。本頁では、蔵を訪ねること、きちんと保管する店を見つけること、日本の人が実際に飲んでいる場所で飲むこと、そして酒を損なわずに持ち帰ることを扱う。",
    zh: "比起多數飲品，清酒更值得親自去看——一部分是因為酒藏所做的許多事都能用眼睛讀懂：蒸氣、杉木室、麴的氣味；另一部分則是因為日本最好的酒有相當比例從不離開它誕生的那個縣。本頁談的是：如何參訪酒藏、如何找到保存得宜的店、如何在日本人真正會去喝酒的地方喝酒，以及如何把酒瓶帶回家而不毀了它。"
  },
  body: [

    { t:"section", id:"brewery",
      title:{ en:"Visiting a brewery", ja:"蔵を訪ねる", zh:"參訪酒藏" }, jp:"酒蔵見学",
      body:[
        { t:"p", text:{
          en:"Most breweries in Japan will show visitors round if asked properly and in advance, and many of the large ones run permanent visitor centres that need no booking at all. The etiquette is straightforward, but two of the rules surprise people.",
          ja:"日本の蔵の多くは、あらかじめ礼を尽くして頼めば案内してくれる。大きな蔵の多くは常設の見学施設をもち、予約すら要らない。作法は難しくないが、そのうち二つは初めての人を驚かせる。",
          zh:"日本多數酒藏只要事先以合宜方式提出請求，都願意帶訪客參觀，許多大型酒藏更設有無需預約的常設參觀設施。禮節並不複雜，但其中兩條會讓人意外。" } },
        { t:"ul", items:[
          { en:"<strong>Do not eat nattō, and say so if you have.</strong> This is the one absolute rule. <em>Bacillus subtilis natto</em> is extraordinarily robust, travels on skin and clothing, and can colonise a kōji room and destroy a season's work. Breweries ask about it seriously; some ask about yoghurt and citrus too. The usual window is twenty-four to forty-eight hours before a visit.",
            ja:"<strong>納豆を食べないこと。食べたなら申告すること。</strong>これだけは絶対の規則である。納豆菌はきわめて頑健で、肌や衣服に付いて移動し、麹室に住み着いて一造りを台無しにしうる。蔵はこれを真剣に尋ねる。ヨーグルトや柑橘について尋ねる蔵もある。目安は見学の二十四時間から四十八時間前からである。",
            zh:"<strong>不要吃納豆；若吃了，請主動說明。</strong>這是唯一的絕對規則。納豆菌極為強韌，能附著於皮膚與衣物移動，並在麴室中定居、毀掉一整季的成果。酒藏會很認真地詢問此事；有些還會問優格與柑橘。一般以參訪前二十四至四十八小時為界。" },
          { en:"<strong>Book, and book in Japanese if you can.</strong> Small breweries are working buildings with four or five people in them during the season. An email a fortnight ahead is normal; turning up unannounced in January is not.",
            ja:"<strong>予約すること。できれば日本語で。</strong>小さな蔵は、造りの季には四、五人が働いている現場である。二週間前の電子メールが普通であり、一月に予告なく訪ねるのは普通ではない。",
            zh:"<strong>請預約，若可能請以日文預約。</strong>小型酒藏在釀造期間是只有四五個人在其中工作的現場。提前兩週寄電子郵件是常態；一月不告而至則不是。" },
          { en:"<strong>No perfume, no strong scent, and clean hands.</strong> You are entering a room where people are smelling for a living.",
            ja:"<strong>香水や強い匂いを避け、手を清めること。</strong>嗅ぐことを仕事にしている人々の部屋に入るのである。",
            zh:"<strong>不要噴香水或帶強烈氣味，並保持雙手潔淨。</strong>你正進入一個以嗅覺為業之人的空間。" },
          { en:"<strong>Go in winter if you want to see brewing, and in summer if you want to talk.</strong> October to March is the season; a summer visit is quieter, emptier and often gets you a longer conversation with the owner.",
            ja:"<strong>造りを見たいなら冬に、話をしたいなら夏に。</strong>十月から三月が造りの季である。夏の訪問は静かで人も少なく、しばしば当主とより長く話せる。",
            zh:"<strong>想看釀造就冬天去，想聊天就夏天去。</strong>十月至三月是釀造期；夏天造訪較安靜、人也少，往往能與藏元聊得更久。" },
          { en:"<strong>Buy something.</strong> A tour is not usually charged for and the shop is how it is paid for. Ask what is only sold at the brewery — there is almost always something.",
            ja:"<strong>何かを買うこと。</strong>見学に料金がかからないことは多く、売店がそれを支えている。蔵でしか売っていないものを尋ねるとよい。たいてい何かしらある。",
            zh:"<strong>買點東西。</strong>參觀多半不收費，而賣店正是支撐它的方式。問問有什麼只在藏內販售——幾乎總會有。" }
        ] },
        { t:"grid", cols:3, cells:[
          { h:{en:"Nada, Kōbe",ja:"灘（神戸）",zh:"灘（神戶）"}, jp:"灘五郷",
            d:{en:"The largest brewing district in Japan and the easiest to visit: several free museums within walking distance of each other along the Hanshin line, most with tasting counters. A half-day, no booking, English signage.",ja:"日本最大の酒どころであり、最も訪ねやすい。阪神沿線に無料の資料館が徒歩圏内で複数あり、多くに試飲所がある。半日、予約不要、英語表示あり。",zh:"日本最大的釀酒區，也最容易造訪：阪神線沿線步行可達之處有數座免費資料館，多附試飲櫃檯。半天可逛完，無需預約，設有英文標示。"} },
          { h:{en:"Fushimi, Kyoto",ja:"伏見（京都）",zh:"伏見（京都）"}, jp:"伏見",
            d:{en:"Soft-water Kyoto, twenty minutes from Kyoto Station. Gekkeikan's Ōkura Memorial Hall is the anchor, and the canal district around it is one of the best-preserved brewing townscapes in Japan.",ja:"軟水の京都。京都駅から二十分。月桂冠大倉記念館が核であり、その周囲の濠川一帯は日本で最もよく残る酒造の町並みの一つである。",zh:"軟水的京都，距京都車站二十分鐘。月桂冠大倉紀念館為核心，周邊的濠川一帶是日本保存最完好的釀酒町景之一。"} },
          { h:{en:"Saijō, Hiroshima",ja:"西条（広島）",zh:"西條（廣島）"}, jp:"西条酒蔵通り",
            d:{en:"Seven breweries on one street with red-brick chimneys and white walls, a short walk from the station, and a large sake festival in October. The home of the soft-water method.",ja:"赤煉瓦の煙突と白壁の蔵が七つ、一本の通りに並ぶ。駅から歩いてすぐで、十月には大きな酒まつりがある。軟水醸造法の故郷である。",zh:"七家酒藏並列於同一條街，紅磚煙囪配白牆，距車站步行即達，十月並有大型酒祭。這裡是軟水釀造法的故鄉。"} }
        ] }
      ]
    },

    { t:"section", id:"shops",
      title:{ en:"Finding a shop that stores properly", ja:"きちんと保管する店を見つける", zh:"找到保存得宜的店" }, jp:"酒販店",
      body:[
        { t:"p", text:{
          en:"Where you buy matters more than what you buy. Sake is fragile, and a superb bottle stored badly is worse than an ordinary bottle stored well. In Japan the specialist shop — <em>jizakeya</em> — is the institution that solves this, and the signs of a good one are easy to read even without any Japanese.",
          ja:"何を買うかより、どこで買うかのほうが重要である。日本酒は脆く、粗雑に保管された名酒は、丁寧に保管された並の酒に劣る。日本ではこれを解決する仕組みが地酒屋という専門店であり、良い店の徴は、日本語がなくとも読み取れる。",
          zh:"在哪裡買，比買什麼更重要。清酒脆弱，一瓶保存不良的絕品，不如一瓶保存得宜的普通酒。在日本，解決此事的體制是專門店——地酒屋——而好店的徵象，即使不懂日文也容易辨讀。" } },
        { t:"compare", cols:2, items:[
          { title:{en:"Signs of a good shop",ja:"良い店の徴",zh:"好店的徵象"}, jp:"見分ける",
            body:[{ t:"ul", plain:true, items:[
              { en:"Refrigerated cabinets, not just shelves — and ginjō and nama inside them.",ja:"棚だけでなく冷蔵ケースがあり、そこに吟醸や生酒が入っている。",zh:"不只有貨架，還有冷藏櫃——且吟釀與生酒放在裡面。" },
              { en:"No direct sunlight anywhere near the bottles.",ja:"瓶の近くに直射日光がない。",zh:"酒瓶附近沒有任何直射陽光。" },
              { en:"Dated bottles, and a stock that visibly changes month to month.",ja:"製造年月の記された瓶が並び、在庫が月ごとに目に見えて変わる。",zh:"酒瓶標有製造年月，且庫存每月明顯更替。" },
              { en:"A small, opinionated range rather than everything from everywhere.",ja:"あらゆる産地の全銘柄ではなく、絞られた、意見のある品揃え。",zh:"品項精簡而有主張，而非什麼產地什麼酒都有。" },
              { en:"Someone behind the counter who asks what you are eating tonight.",ja:"今夜何を食べるのかを尋ねてくれる人が、店に立っている。",zh:"櫃檯後有人會問你今晚要吃什麼。" }
            ] }] },
          { title:{en:"Signs to walk away from",ja:"避けるべき徴",zh:"該轉身離開的徵象"}, jp:"警戒",
            body:[{ t:"ul", plain:true, items:[
              { en:"Dusty bottles standing in a bright window.",ja:"明るい窓辺に埃をかぶって立つ瓶。",zh:"在明亮窗邊積灰站立的酒瓶。" },
              { en:"Nama or unpasteurised sake on an unrefrigerated shelf.",ja:"常温の棚に並ぶ生酒。",zh:"擺在常溫貨架上的生酒。" },
              { en:"Yellowed sake that should be pale, or a gold cast in a young ginjō.",ja:"淡いはずの酒が黄ばんでいる、あるいは若い吟醸に金色の差し色がある。",zh:"本應淺色的酒卻泛黃，或年輕吟釀帶著金色調。" },
              { en:"Famous allocations sold at several times list price with no provenance.",ja:"出所の分からない人気銘柄が、定価の何倍もの値で並んでいる。",zh:"來歷不明的名品配額酒，以定價數倍出售。" }
            ] }] }
        ] },
        { t:"note", label:{en:"The one question that works",ja:"効く一つの問い",zh:"最管用的一個問題"}, text:{
          en:"“What came in this week that you are excited about?” — <em>kongetsu no osusume wa?</em> A specialist shop is a curated collection with a person attached, and asking that question converts a wall of unreadable labels into a recommendation aimed at you. It works in Tokyo, in Taipei, in London and in New York.",
          ja:"「今月のおすすめは？」——専門店とは、人がついた選りすぐりの品揃えである。この問い一つで、読めない酒標の壁が、あなたに向けられた薦めに変わる。東京でも台北でもロンドンでもニューヨークでも通用する。",
          zh:"「這週進了什麼你覺得很棒的？」——專門店是一份附帶著一個人的精選收藏，這個問題能把一整面看不懂的酒標，變成一則專為你而發的推薦。在東京、台北、倫敦、紐約都管用。" } }
      ]
    },

    { t:"section", id:"drinking",
      title:{ en:"Where Japanese people drink", ja:"日本の人が飲む場所", zh:"日本人喝酒的地方" }, jp:"酒場の種類",
      body:[
        { t:"figure",
          caption:{
            en:"Five kinds of room, placed by how broad the list is and how much the place is about the sake rather than the food. The useful thing about the map is the bottom-left to top-right diagonal: as a venue becomes more about the drink it almost always becomes broader too, because a place that has staked its identity on sake has to carry enough of it to justify the claim. The two outlined markers are not bars — you stand at one and you buy at the other — and both are cheaper than anything on the diagonal.",
            ja:"五つの部屋を、品揃えの広さと、その店が料理ではなく酒をどれだけ主としているかによって置いたもの。この図から得られるのは左下から右上への対角である。店が酒を主とするほど、品揃えもまた広くなる。酒に己を賭けた店は、その主張に見合うだけの数を抱えねばならぬからである。輪郭だけの二つは酒場ではない——一方では立ち、他方では買う——そしていずれも、対角上のいかなる店よりも安い。",
            zh:"五種空間，依酒單的廣度、以及這個地方在多大程度上以酒（而非食物）為主軸來定位。這張圖有用的地方在於從左下到右上的那條對角線：一個場所越是以酒為主，它的品項通常也越廣，因為把自身身分押在清酒上的店，必須備足夠的數量來撐起這個宣稱。兩個只有外框的標記並不是酒吧——一個是站著喝，一個是買回去——而且兩者都比對角線上的任何一家便宜。" },
          svg: function (lang, L) {
            var W = 760, H = 392, X0 = 64, X1 = 690, Y0 = 62, Y1 = 250;
            function px(v) { return X0 + v * (X1 - X0); }
            function py(v) { return Y1 - v * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g;
            s += '<text x="' + X0 + '" y="42" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "実際に飲まれている場所" : lang === "zh" ? "人們實際喝酒的地方" : "WHERE PEOPLE ACTUALLY DRINK") + '</text>';
            for (g = 0.25; g < 1; g += 0.25) {
              s += '<line x1="' + px(g).toFixed(1) + '" y1="' + Y0 + '" x2="' + px(g).toFixed(1) + '" y2="' + Y1 + '" stroke="#EFEDE7"/>';
              s += '<line x1="' + X0 + '" y1="' + py(g).toFixed(1) + '" x2="' + X1 + '" y2="' + py(g).toFixed(1) + '" stroke="#EFEDE7"/>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X0 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            s += '<text x="' + (X0 + 8) + '" y="' + (Y0 + 14) + '" font-size="9.5" fill="#A39C91">' +
                 (lang === "ja" ? "酒が目的の店" : lang === "zh" ? "以酒為目的" : "the sake is the point") + '</text>';
            s += '<text x="' + (X0 + 8) + '" y="' + (Y1 - 8) + '" font-size="9.5" fill="#A39C91">' +
                 (lang === "ja" ? "料理が目的の店" : lang === "zh" ? "以料理為目的" : "the food is the point") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y1 + 18) + '" font-size="9.5" fill="#A39C91">' +
                 (lang === "ja" ? "品揃えは短い" : lang === "zh" ? "酒單很短" : "a short list") + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 18) + '" text-anchor="end" font-size="9.5" fill="#A39C91">' +
                 (lang === "ja" ? "数百本" : lang === "zh" ? "數百支" : "hundreds of bottles") + '</text>';
            var pts = [
              { n:1, x:0.34, y:0.20, open:false },
              { n:2, x:0.56, y:0.60, open:true },
              { n:3, x:0.90, y:0.92, open:false },
              { n:4, x:0.44, y:0.94, open:false },
              { n:5, x:0.74, y:0.44, open:true }
            ];
            for (i = 0; i < pts.length; i++) {
              var X = px(pts[i].x), Y = py(pts[i].y);
              s += '<rect x="' + (X - 5).toFixed(1) + '" y="' + (Y - 5).toFixed(1) + '" width="10" height="10" fill="' + (pts[i].open ? "#F8F6F1" : "#7C6B52") + '" stroke="#7C6B52"/>';
              s += '<text x="' + (X + 12).toFixed(1) + '" y="' + (Y + 4).toFixed(1) + '" font-size="11" fill="#6B655C">' + pts[i].n + '</text>';
            }
            var key = [
              { en:"1  Izakaya — food-led, a decent list, and the hours to use it", ja:"1　居酒屋——料理が主。それなりの品揃えと、長く居られる時間", zh:"1　居酒屋——以料理為主，酒單尚可，也有得以慢慢喝的時間" },
              { en:"2  Kakuuchi — standing in a liquor shop, the shop's own stock at shop prices", ja:"2　角打ち——酒屋の隅に立って飲む。店の在庫を店の値で", zh:"2　角打（立飲）——在酒舖角落站著喝，用店裡的庫存、店裡的價格" },
              { en:"3  Sake bar — built around the drink: fifty to two hundred labels, small pours", ja:"3　日本酒バー——酒を軸に組まれた店。五十から二百本を少量ずつ", zh:"3　日本酒吧——圍繞著酒而設：五十到兩百支，小份量供應" },
              { en:"4  Kanzake specialist — everything warmed to the degree, in tin and a water bath", ja:"4　燗酒専門——すべてを一度単位で燗する。錫のちろりと湯煎で", zh:"4　燗酒專門店——一切按溫度加熱，以錫製 chirori 與水浴" },
              { en:"5  Antenna shop — one prefecture's whole range, retail, without going there", ja:"5　アンテナショップ——一県の品揃えを小売で。その地へ行かずに", zh:"5　特產館（antenna shop）——一個縣的完整品項，零售，不必親自前往" }
            ];
            for (i = 0; i < key.length; i++) s += '<text x="' + X0 + '" y="' + (290 + i * 15) + '" font-size="10" fill="#6B655C">' + L(key[i]) + '</text>';
            s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "定性的な図である。輪郭だけの印は、席に着いて飲む店ではないことを示す。"
                  : lang === "zh" ? "此圖為定性描述。只有外框的標記，表示那不是坐下來喝的店。"
                  : "Qualitative. An outlined marker is not a place you sit down to drink.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"defs", items:[
          { term:{en:"Izakaya",ja:"居酒屋",zh:"居酒屋"}, jp:"居酒屋", romaji:"izakaya",
            def:{en:"The default. Small dishes, a long drinks list, and a pace that assumes you will be there for hours. A good one has a sake list organised by prefecture or style and will pour a tasting set of three. Look for a fridge you can see into.",
              ja:"基本の場所。小皿の料理と長い酒の品書きがあり、何時間もいることを前提とした速度で進む。良い店は県別や酒質別に整理された品書きを持ち、三種の飲み比べを出してくれる。中の見える冷蔵庫がある店を選ぶとよい。",
              zh:"最基本的去處。小份料理、長長的酒單，節奏預設你會待上好幾個小時。好的居酒屋會有依縣別或酒質整理的清酒單，並提供三款的比較套組。找一家冰箱看得見內部的店。"} },
          { term:{en:"Kakuuchi",ja:"角打ち",zh:"角打"}, jp:"角打ち", romaji:"kakuuchi",
            def:{en:"Drinking standing up in the corner of a liquor shop, from the shop's own stock, at shop prices. Originally for workers on the way home; now a small revival. The range is often extraordinary and the food is a bag of crisps.",
              ja:"酒販店の一角に立って、店の在庫を店の値段で飲むこと。もとは仕事帰りの人のためのもので、いまささやかに復活している。品揃えはしばしば驚くほどで、肴は袋菓子である。",
              zh:"在酒鋪的角落站著喝，喝的是店裡的庫存，付的是店裡的價格。原本是給下班路上的工人；如今小幅復興。酒的選擇往往驚人，下酒菜則是一包洋芋片。"} },
          { term:{en:"Sake bar / nihonshu bar",ja:"日本酒バー",zh:"日本酒吧"}, jp:"日本酒バー",
            def:{en:"A modern format built around the drink rather than the food: fifty to two hundred bottles, small pours, temperature options, and staff who can talk. The best places to taste widely without buying whole bottles.",
              ja:"料理ではなく酒を軸にした現代的な形式。五十から二百の銘柄、少量の注ぎ、温度の選択、そして語れる人がいる。瓶ごと買わずに幅広く試すには最良の場所である。",
              zh:"以酒而非以菜為核心的現代形式：五十至兩百款酒、小份倒酒、可選溫度，並有能與你交談的店員。想廣泛品嚐而不必整瓶買下，這是最好的地方。"} },
          { term:{en:"Kanzake specialist",ja:"燗酒専門店",zh:"溫酒專門店"}, jp:"燗の店",
            def:{en:"A small and growing category of bars that serve everything warmed, to the degree, using tin chirori and water baths. If you think you dislike warm sake, this is where that opinion goes to die.",
              ja:"すべてを、度数まで指定して燗で供する小さな、しかし増えつつある種類の店。錫のちろりと湯煎を用いる。燗が苦手だと思っているなら、その考えはここで終わる。",
              zh:"一類規模不大但持續增加的酒吧，所有酒都以精確溫度加熱供應，使用錫製 chirori 與水浴。若你自認不喜歡溫飲的清酒，這個想法會在這裡壽終正寢。"} },
          { term:{en:"Antenna shops",ja:"アンテナショップ",zh:"物產館"}, jp:"県のアンテナショップ",
            def:{en:"Each prefecture runs a promotional shop in Tokyo selling its own food and drink. They are the most efficient way in Japan to taste a region's sake without going there, and the staff are often from the prefecture.",
              ja:"各県が東京に置く物産のための店で、自県の食品と酒を売る。その土地へ行かずに地域の酒を試すには、日本で最も効率のよい方法であり、店員はしばしば地元の人である。",
              zh:"各縣在東京設立的推廣商店，販售自縣的食品與酒。這是在日本不必親自前往、卻能嚐到一個地區之酒最有效率的方式，且店員往往就是當地人。"} }
        ] }
      ]
    },

    { t:"section", id:"home",
      title:{ en:"Getting bottles home", ja:"瓶を持ち帰る", zh:"把酒帶回家" }, jp:"持ち帰り",
      body:[
        { t:"ul", items:[
          { en:"<strong>Heat is the enemy, not motion.</strong> Sake does not suffer from being shaken; it suffers from spending six hours in a hot car boot or a sunlit hotel window. Plan the day so the bottle is the last thing you buy.",
            ja:"<strong>敵は熱であって、揺れではない。</strong>日本酒は振られても傷まないが、暑い車のトランクや日の当たるホテルの窓辺で六時間を過ごせば傷む。瓶は、その日の最後に買うよう予定を組むこと。",
            zh:"<strong>敵人是熱，不是搖晃。</strong>清酒不怕被搖晃，怕的是在悶熱的後車廂或日照的旅館窗邊待上六個小時。把行程安排成酒是當天最後才買的東西。" },
          { en:"<strong>Nama sake should not fly unless it flies cold.</strong> Unpasteurised sake needs continuous refrigeration. If you cannot keep it cold from shop to home, buy the pasteurised version and enjoy the nama in Japan.",
            ja:"<strong>生酒は、冷たいまま運べないなら飛行機に乗せないこと。</strong>生酒には継続した冷蔵が要る。店から自宅まで冷たさを保てないなら、火入れの方を買い、生は日本で楽しむこと。",
            zh:"<strong>生酒若無法全程保冷，就別搭飛機。</strong>生酒需要不間斷的冷藏。若你無法從店家到家中都維持低溫，就買火入版本，把生酒留在日本喝完。" },
          { en:"<strong>Check your allowance before you buy, not after.</strong> Duty-free limits on alcohol vary widely — Taiwan allows a modest personal quantity, as do most jurisdictions, and 1.8-litre bottles count fast. Declare honestly; the penalty is worse than the duty.",
            ja:"<strong>買う前に免税の範囲を確かめること。買った後ではなく。</strong>酒の免税枠は国ごとに大きく異なる。台湾も含め多くの国では個人の持ち込み量は控えめであり、一升瓶はすぐに枠を埋める。正直に申告すること。罰は税より重い。",
            zh:"<strong>買之前先確認免稅額度，而不是買完才查。</strong>各地的酒類免稅限額差異很大——台灣如同多數轄區，個人攜帶量並不寬鬆，而一升瓶很快就會用掉額度。誠實申報；罰則比稅金更痛。" },
          { en:"<strong>Wrap for pressure and impact.</strong> Bubble wrap, a wine-bottle sleeve, or the padded bag most Japanese shops will sell you for a few hundred yen. Put the bottle in the middle of the case, upright, surrounded by clothes.",
            ja:"<strong>気圧と衝撃に備えて包むこと。</strong>気泡緩衝材、瓶用の袋、あるいは日本の店が数百円で売っている緩衝袋を使う。瓶は鞄の中央に立てて置き、衣類で囲むこと。",
            zh:"<strong>為氣壓與撞擊做好包裝。</strong>氣泡布、酒瓶保護套，或日本店家幾百日圓就會賣你的緩衝袋。把酒瓶直立放在行李箱正中央，四周以衣物包圍。" },
          { en:"<strong>Consider shipping instead.</strong> Many specialist shops and breweries will ship internationally in temperature-controlled cases. It costs more than the sake sometimes, and for a bottle you actually care about it is the right answer.",
            ja:"<strong>送るという選択もある。</strong>多くの専門店や蔵は、温度管理の箱で海外へ発送してくれる。送料が酒より高くつくこともあるが、本当に大切な一本ならそれが正解である。",
            zh:"<strong>也可以考慮寄送。</strong>許多專門店與酒藏提供恆溫箱國際配送。運費有時比酒本身還貴，但對一瓶你真正在乎的酒而言，這才是正確答案。" }
        ] },
        { t:"panel", title:{en:"A workable three-day sake itinerary",ja:"三日間の実際的な行程",zh:"可行的三日行程"}, tint:"moss",
          body:[{ t:"ol", items:[
            { en:"<strong>Day one, Kōbe.</strong> Nada: two or three brewery museums along the Hanshin line, tasting counters, lunch on Sakagura-dōri. Buy nothing yet.",ja:"<strong>一日目、神戸。</strong>灘——阪神沿線の資料館を二、三か所、試飲所を巡り、酒蔵通りで昼食。まだ何も買わない。",zh:"<strong>第一天，神戶。</strong>灘：沿阪神線走訪兩三座酒藏資料館、試飲櫃檯，並在酒藏通吃午餐。此時先不買酒。"},
            { en:"<strong>Day two, Kyoto.</strong> Fushimi in the morning for the soft-water contrast, then a nihonshu bar in central Kyoto in the evening with a flight of three from prefectures you have never tried.",ja:"<strong>二日目、京都。</strong>午前は伏見で軟水との対比を確かめ、夜は市中の日本酒バーで、試したことのない県の三種の飲み比べを。",zh:"<strong>第二天，京都。</strong>上午到伏見感受軟水的對比，晚上到京都市中心的日本酒吧，點一組來自你從未嘗試過的縣份的三款比較。"},
            { en:"<strong>Day three, one small brewery.</strong> Book ahead, take a train an hour out of the city, and see a working kura with five people in it. Buy there, and buy the thing they only sell at the gate.",ja:"<strong>三日目、小さな蔵を一つ。</strong>予約を取り、都市から一時間の列車に乗り、五人が働く現場の蔵を見る。そこで買い、蔵でしか売らないものを買うこと。",zh:"<strong>第三天，一家小酒藏。</strong>事先預約，搭一小時火車離開城市，看一座只有五個人在其中工作的現役酒藏。在那裡買，並買下只有藏前才販售的那一款。"}
          ] }] }
      ]
    },

{ t:"section", id:"calendar",
      title:{ en:"When to go", ja:"いつ行くか", zh:"何時前往" }, jp:"季節と催し",
      body:[
        { t:"p", text:{
          en:"Sake has a calendar, and a visit timed to it is a different experience from one that is not. The brewing season runs roughly October to April; almost everything worth seeing happens inside it, and almost everything worth drinking is released at its edges.",
          ja:"日本酒には暦があり、それに合わせた訪問と、そうでない訪問とはまるで違う。造りの季はおおむね十月から四月。見る価値のあるもののほとんどはその内側で起き、飲む価値のあるもののほとんどはその縁で出荷される。",
          zh:"清酒有自己的曆法，配合它安排的造訪，與不配合的完全是兩回事。釀造期大約自十月至四月；值得看的幾乎都發生在期間之內，而值得喝的幾乎都在其兩端出貨。" } },
        { t:"table",
          cols:[{en:"When",ja:"時期",zh:"時節"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"What is happening",ja:"起きていること",zh:"正在發生的事"}],
          jpCols:[1],
          rows:[
            [{en:"October–November",ja:"十月〜十一月",zh:"十月～十一月"},"仕込み始め",
             {en:"The season starts. Rice arrives, the kōji room is warmed, the first tanks go in. Quiet, cold, and the best time to see the whole process without a crowd. 14 November brings the brewers' prayer at Ōmiwa Jinja in Nara.",ja:"造りが始まる。米が届き、麹室が温められ、最初のタンクが仕込まれる。静かで寒く、人混みなしに工程の全体を見るには最良の時期である。十一月十四日には奈良の大神神社で醸造安全祈願祭が行われる。",zh:"釀造季開始。米送達、麴室升溫、第一批酒槽下料。安靜、寒冷，是不必人擠人便能看完整套工序的最佳時機。11 月 14 日，奈良的大神神社舉行釀造祈安祭。"}],
            [{en:"December–January",ja:"十二月〜一月",zh:"十二月～一月"},"しぼりたて・蔵開き",
             {en:"The first pressings of the year reach the market as <em>shiboritate</em> — cloudy, gassy, alive. Many breweries hold a <em>kurabiraki</em> open day in late January. This is the peak of the working season and the peak of what is in the shops.",ja:"その年の最初の搾りが「しぼりたて」として市場に出る。濁り、ガスを含み、生きている。多くの蔵は一月下旬に蔵開きを催す。造りの最も忙しい時であり、店に並ぶものが最も良い時でもある。",zh:"當年最早的壓榨以「搾立」之姿上市——帶濁、含氣、活生生的。許多酒藏在一月下旬舉辦「藏開」開放日。這是釀造季最忙碌的高峰，也是店頭商品最精采的時候。"}],
            [{en:"February–March",ja:"二月〜三月",zh:"二月～三月"},"甑倒し",
             {en:"The last steaming of the season, marked by the <em>koshiki-taoshi</em> celebration. Competition entries are pressed around now. Breweries are still busy but the end is visible.",ja:"その季の最後の蒸しが行われ、甑倒しとして祝われる。鑑評会の出品酒が搾られるのもこの頃である。蔵はなお忙しいが、終わりは見えている。",zh:"當季最後一次蒸米，以「甑倒」慶祝。鑑評會的參賽酒也在此時前後上槽。酒藏依然忙碌，但終點已可望見。"}],
            [{en:"Late March",ja:"三月下旬",zh:"三月下旬"},"花見酒",
             {en:"Cherry blossom, and the single largest occasion for sake drinking in the Japanese year. Not a brewery event, but the moment the whole country drinks outdoors.",ja:"桜。日本の一年で、酒を飲む最大の機会である。蔵の行事ではないが、国じゅうが屋外で飲む時である。",zh:"櫻花時節，也是日本一年中飲酒的最大場合。這不是酒藏活動，卻是全國都在戶外飲酒的時刻。"}],
            [{en:"May",ja:"五月",zh:"五月"},"鑑評会",
             {en:"National appraisal results are announced, and a public tasting of the entries is held. For a visitor this is the single densest opportunity in Japan to taste top-tier daiginjō side by side.",ja:"全国新酒鑑評会の結果が発表され、出品酒の公開きき酒会が開かれる。訪れる者にとっては、最上級の大吟醸を並べて味わえる、日本で最も密度の高い機会である。",zh:"全國新酒鑑評會公布結果，並舉辦出品酒的公開品評會。對訪客而言，這是全日本能夠並列品嚐頂級大吟釀密度最高的機會。"}],
            [{en:"September–October",ja:"九月〜十月",zh:"九月～十月"},"ひやおろし",
             {en:"The sake that rested through the summer is released, pasteurised once and shipped without a second heating. Rounder and deeper than the spring version of the same sake, and worth a specific trip. 1 October is Sake Day.",ja:"夏を越した酒が、一度だけ火入れされ、二度目をせずに出荷される。同じ酒の春の姿より丸く深い。この時期を目当てに旅する価値がある。十月一日は日本酒の日である。",zh:"越過夏天的酒被放出，只經一次火入、不再加熱即出貨。比同一款酒的春季版本更圓潤深沉，值得專程一趟。10 月 1 日是日本酒之日。"}],
            [{en:"June–September",ja:"六月〜九月",zh:"六月～九月"},"造りは休み",
             {en:"No brewing at most kura. The building is quiet, sometimes being repaired, and the staff have time — which makes it the best season for a long conversation with the owner and the worst for seeing anything made.",ja:"多くの蔵で造りは休みである。建物は静かで、修繕をしていることもあり、人には時間がある。当主と長く話すには最良の季節であり、何かが造られるのを見るには最悪の季節である。",zh:"多數酒藏停止釀造。建築安靜，有時正在整修，而人手有空——因此這是與藏元長談的最佳季節，也是想看東西被釀出來的最差季節。"}]
          ] }
      ]
    },

    { t:"section", id:"phrases",
      title:{ en:"Useful phrases", ja:"役に立つ言い方", zh:"實用語句" }, jp:"言葉",
      body:[
        { t:"p", text:{
          en:"A shop or a bar will meet you more than halfway if you can open the conversation. These are the ones that do actual work; the reading is given for each.",
          ja:"こちらから口を開けさえすれば、店も酒場も十分に応じてくれる。以下は実際に働く言い方であり、それぞれ読みを添えた。",
          zh:"只要你能開啟對話，店家與酒吧都會迎上大半。以下是真正管用的說法，並附上讀音。" } },
        { t:"table",
          cols:[{en:"Japanese",ja:"日本語",zh:"日文"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"Meaning",ja:"意味",zh:"意思"}],
          jpCols:[0],
          rows:[
            ["おすすめは何ですか","o-susume wa nan desu ka",{en:"What do you recommend? The single most useful sentence in a sake shop.",ja:"何をお勧めしますか。酒販店で最も有用な一文である。",zh:"你推薦什麼？這是酒鋪裡最有用的一句話。"}],
            ["飲み比べできますか","nomikurabe dekimasu ka",{en:"Can I have a tasting set? Most sake bars offer three small pours.",ja:"飲み比べはできますか。多くの日本酒バーは三種の少量の注ぎを用意している。",zh:"可以品飲比較嗎？多數清酒吧都提供三款小份倒酒。"}],
            ["燗にできますか","kan ni dekimasu ka",{en:"Can this be served warm? Asking shows you know what you are doing.",ja:"燗にできますか。これを尋ねることは、分かっていることの証になる。",zh:"這款可以溫飲嗎？問這句就顯示你懂門道。"}],
            ["冷蔵ですか","reizō desu ka",{en:"Is this kept refrigerated? The right question for a nama.",ja:"冷蔵ですか。生酒について尋ねるべき問いである。",zh:"這是冷藏保存的嗎？針對生酒該問的問題。"}],
            ["蔵見学はできますか","kura kengaku wa dekimasu ka",{en:"Is a brewery tour possible? Ask by email, well in advance.",ja:"蔵見学はできますか。電子メールで、十分に前もって尋ねること。",zh:"可以參觀酒藏嗎？請以電子郵件、提前充分詢問。"}],
            ["納豆は食べていません","nattō wa tabete imasen",{en:"I have not eaten nattō. Say this unprompted before entering a kōji room.",ja:"納豆は食べていません。麹室に入る前に、尋ねられる前に伝えること。",zh:"我沒有吃納豆。進入麴室前，不必等對方問就主動說明。"}],
            ["下戸なもので","geko na mono de",{en:"I'm afraid I don't drink. A complete and polite refusal that needs nothing added.",ja:"下戸なもので。何も足す必要のない、完結した丁寧な断り方である。",zh:"不好意思我不喝酒。這是一句完整而禮貌的婉拒，無需再加任何解釋。"}],
            ["和らぎ水をください","yawaragi-mizu o kudasai",{en:"Water alongside the sake, please. Every good bar has it; asking is normal.",ja:"和らぎ水をください。良い店には必ずあり、頼むのは普通のことである。",zh:"請給我和らぎ水（配酒的水）。好店都備有，開口要是很正常的事。"}],
            ["ごちそうさまでした","gochisōsama deshita",{en:"Thank you for the meal — said on leaving, and it covers the drink too.",ja:"ごちそうさまでした。店を出るときに言う。酒についても同じである。",zh:"多謝款待——離開時說，酒也包含在內。"}]
          ] },
        { t:"note", label:{en:"Photographs",ja:"写真",zh:"攝影"}, text:{
          en:"Ask before photographing inside a brewery, and expect the kōji room to be off limits — it is a controlled environment and a camera bag has been in places a kōji room should not meet. Most breweries are happy for you to photograph everything else, and several will point out the shot they think is worth taking.",
          ja:"蔵のなかで写真を撮る前には必ず尋ねること。麹室は撮影不可であることが多い。管理された環境であり、カメラの鞄は、麹室が出会うべきでない場所を通ってきているからである。それ以外はたいてい快く許され、どこを撮るとよいかを教えてくれる蔵も少なくない。",
          zh:"在酒藏內拍照前務必先詢問，並預期麴室不開放——那是受控環境，而相機包去過麴室不該接觸的地方。其餘部分多數酒藏都樂意讓你拍，甚至會指出他們認為值得取景之處。" } }
      ]
    },

{ t:"section", id:"etiquette",
      title:{ en:"Brewery etiquette, including the rule about nattō", ja:"蔵での作法——納豆の禁を含む", zh:"訪藏禮儀，包括納豆的規矩" }, jp:"見学の作法",
      body:[
        { t:"p", text:{
          en:"A working brewery in winter is a food-production site with a live microbial culture in it, not a museum. Most of the etiquette follows from that, and one rule in particular surprises visitors.",
          ja:"冬の稼働中の蔵は、生きた微生物の培養を抱えた食品の製造現場であって、博物館ではない。作法の大半はそこから導かれる。そして一つの規則が、とりわけ訪う者を驚かせる。",
          zh:"冬季運轉中的酒藏，是一個內含活體微生物培養的食品生產現場，而不是博物館。多數禮儀都由此推導而來——其中有一條特別讓訪客吃驚。" } },

        { t:"defs", items:[
          { term:{ en:"No nattō, and no yoghurt", ja:"納豆と乳製品を断つ", zh:"不吃納豆，也不吃優格" }, jp:"納豆菌", romaji:"nattō-kin",
            def:{ en:"Brewers do not eat nattō during the season, and visitors are asked not to eat it on the morning of a visit. The reason is specific: nattō is made with <em>Bacillus subtilis natto</em>, a bacterium that grows faster than the kōji mould, survives on skin and clothing, and can take over a kōji room. It is the single most feared contaminant in a brewery and the prohibition is taken entirely seriously — many brewers avoid nattō for the whole five-month season. Fermented dairy is asked about for the same reason, less strictly.",
              ja:"蔵人は造りの季に納豆を食べず、訪う者もその朝は食べぬよう求められる。理由は具体的である——納豆は納豆菌（Bacillus subtilis natto）で作られる。麹菌より速く育ち、肌や衣服の上で生き延び、麹室を乗っ取りうる細菌である。蔵で最も恐れられる汚染源であり、この禁はまったく真剣に受け止められている。五か月の季を通じて納豆を断つ蔵人は多い。発酵乳製品についても、より緩やかにではあるが同じ理由で問われる。",
              zh:"藏人在釀造季不吃納豆，訪客也會被要求當天早上別吃。理由很具體：納豆是以納豆菌（Bacillus subtilis natto）製成的，這種細菌生長比麴菌快、能在皮膚與衣物上存活，並可能占領整間麴室。它是酒藏中最令人畏懼的污染源，這條禁令被完全認真看待——許多藏人整整五個月的釀造季都不碰納豆。發酵乳製品也基於同樣理由被詢問，只是要求較寬鬆。" } },
          { term:{ en:"No perfume, no scented anything", ja:"香水も香りものも避ける", zh:"不擦香水，不用任何有香的東西" }, jp:"香り", romaji:"kaori",
            def:{ en:"The tasting at the end of a visit is a sensory exercise and the brewers are working by nose all day. Scented cosmetics, hand cream, strong deodorant and heavily fragranced laundry all interfere, and in a small tasting room a single perfumed visitor spoils it for everyone. Ordinary soap in the morning is the whole requirement.",
              ja:"見学の終わりの試飲は感覚の作業であり、蔵人は一日中鼻で仕事をしている。香りのある化粧品、ハンドクリーム、強い制汗剤、香りの強い洗濯洗剤はいずれも妨げとなり、狭い試飲の部屋では、香水をつけた一人が全員の場を損なう。求められているのは、朝に普通の石鹸を使うことだけである。",
              zh:"參訪最後的試飲是一項感官作業，而藏人整天都靠鼻子工作。有香味的化妝品、護手霜、強效止汗劑與香氣濃烈的洗衣精都會造成干擾；在狹小的試飲室裡，一位噴了香水的訪客就足以毀掉所有人的體驗。真正的要求，不過是早上用一般肥皂洗過。" } },
          { term:{ en:"Ask before photographing", ja:"撮る前に尋ねる", zh:"拍照前先問" }, jp:"撮影", romaji:"satsuei",
            def:{ en:"Most breweries allow photography and a few do not, usually in the kōji room, sometimes because a process is proprietary and sometimes because a flash in a dark room startles someone working on a ladder. Ask once at the start and you will get a clear answer for the whole visit.",
              ja:"多くの蔵は撮影を許し、少数は許さない。多くは麹室においてであり、工程が門外不出であるためのこともあれば、暗い室での閃光が梯子の上で働く者を驚かせるためのこともある。初めに一度尋ねれば、見学の全体について明快な答えが得られる。",
              zh:"多數酒藏允許拍照，少數不允許，通常是在麴室；有時因為製程屬機密，有時只是因為暗處的閃光燈會驚嚇到正站在梯子上工作的人。一開始問一次，就能得到適用於整趟參訪的明確答覆。" } },
          { term:{ en:"Touch nothing, and mind the floors", ja:"何も触れず、足元に注意する", zh:"什麼都別碰，並留意腳下" }, jp:"安全", romaji:"anzen",
            def:{ en:"Brewery floors are wet, often sloped for drainage, and sometimes have open tank hatches at floor level. Tanks are deep and their contents are giving off carbon dioxide. Every year there are accidents in food-fermentation facilities involving people leaning into vessels. Stay behind the line the guide draws and do not lean over an open tank to look or to smell.",
              ja:"蔵の床は濡れており、しばしば排水のために傾き、時に床の高さでタンクの口が開いている。タンクは深く、その中身は二酸化炭素を放っている。醸造の現場では毎年、容器に身を乗り出したことによる事故が起きている。案内人が引く線の内側にとどまり、開いたタンクに身を乗り出して覗いたり嗅いだりしないこと。",
              zh:"酒藏的地面是濕的，常為排水而傾斜，有時還有與地面齊平的敞開槽口。酒槽很深，其中的內容物正在釋放二氧化碳。發酵食品現場每年都有人因探身進入容器而發生事故。請待在導覽人員劃出的界線內，不要探身到敞開的酒槽上方去看或去聞。" } },
          { term:{ en:"Buy something, and drink it there", ja:"何かを買い、その場で飲む", zh:"買點東西，並在當場喝" }, jp:"蔵元限定", romaji:"kuramoto gentei",
            def:{ en:"Most breweries sell bottles you cannot get anywhere else — a shiboritate drawn that week, a tank-specific bottling, an unpasteurised version of a familiar label. These are the reason to come. Buy the fresh one, and if the brewery has somewhere to sit, drink some of it on the spot; unpasteurised sake bought at the source and drunk within the hour is a different experience from the same product two weeks later.",
              ja:"多くの蔵は、他のどこでも手に入らない瓶を売っている——その週に搾った搾りたて、特定のタンクの詰め、見慣れた銘柄の生の版。これらこそが訪う理由である。新しいものを買い、腰を下ろせる場所があるなら、そこでいくらか飲むこと。源で買い、一時間のうちに飲む生酒は、同じ商品を二週間後に飲むのとは別の経験である。",
              zh:"多數酒藏販售別處買不到的酒——當週剛搾的搾りたて、特定酒槽的裝瓶、熟悉品牌的生酒版本。這些正是值得跑一趟的理由。買最新鮮的那支；如果酒藏有地方可坐，就當場喝一些。在源頭買下、一小時內喝掉的生酒，和兩週後喝同一款商品，是兩種不同的體驗。" } }
        ] }
      ] },

    { t:"section", id:"festivals",
      title:{ en:"The festivals worth travelling for", ja:"旅する値打ちのある祭り", zh:"值得專程前往的祭典" }, jp:"酒の催し",
      body:[
        { t:"p", text:{
          en:"Brewery tours are quiet and instructive; sake festivals are neither, and they are the fastest way to taste across a hundred breweries in an afternoon. Dates shift year to year and tickets for the larger ones sell out well in advance, so check before booking travel.",
          ja:"蔵の見学は静かで学びが多い。酒の祭りはそのいずれでもなく、そして一日の午後で百の蔵を飲み比べる最も速い方法である。日程は年によって動き、規模の大きいものの切符ははるか前に売り切れる。旅程を決める前に確かめられたい。",
          zh:"酒藏參訪安靜而長知識；酒祭則兩者皆非——但它是在一個下午內橫向試飲上百家酒藏最快的方式。日期逐年變動，規模較大者的門票往往提早售罄，訂行程前請先查證。" } },

        { t:"table",
          cols:[{en:"Event",ja:"催し",zh:"活動"},{en:"Where",ja:"場所",zh:"地點"},{en:"When",ja:"時期",zh:"時間"},{en:"What it is",ja:"内容",zh:"內容"}],
          rows:[
            [{en:"Sake Matsuri",ja:"酒まつり",zh:"酒祭"},{en:"Saijō, Higashi-Hiroshima",ja:"広島県東広島市西条",zh:"廣島縣東廣島市西條"},{en:"October, two days",ja:"十月・二日間",zh:"十月，為期兩天"},
             {en:"The largest sake event in Japan, drawing crowds in the low hundreds of thousands. Its centrepiece is a marquee pouring several hundred sake from breweries across the country, and the town itself — a street of white-walled kura with red-brick chimneys — is one of the three great brewing districts. Come for the town as much as the tent.",
              ja:"日本最大の酒の催しであり、来場は数十万の規模に達する。中心は全国数百銘柄を注ぐ大テントであるが、白壁の蔵と赤煉瓦の煙突が並ぶ町そのものが、三大酒どころの一つである。テントと同じくらい、町のために訪う値打ちがある。",
              zh:"日本規模最大的清酒活動，來客數以數十萬計。核心是一座斟倒全國數百款清酒的大帳篷；而小鎮本身——一整條白牆酒藏與紅磚煙囪的街道——正是三大酒鄉之一。來這裡，為小鎮的理由不亞於為帳篷。"}],
            [{en:"Niigata Sake no Jin",ja:"にいがた酒の陣",zh:"新潟酒之陣"},{en:"Toki Messe, Niigata",ja:"新潟市・朱鷺メッセ",zh:"新潟市・朱鷺 Messe"},{en:"March, two days",ja:"三月・二日間",zh:"三月，為期兩天"},
             {en:"Effectively the entire prefecture in one hall: Niigata has more breweries than any other, and almost all of them pour. The single best way to understand what <em>tanrei karakuchi</em> means, and to discover how much variation exists inside a style that is often described as uniform.",
              ja:"事実上、県のすべてが一つの会場に集う。新潟はどの県より蔵が多く、そのほとんどが注ぐ。淡麗辛口が何を意味するかを理解し、均質と語られがちな型の内側にどれほどの振れ幅があるかを知るための、最良の方法である。",
              zh:"實質上是把整個縣裝進一座場館：新潟的酒藏數量居全國之冠，而幾乎全都會來斟酒。這是理解「淡麗辛口」究竟意味著什麼，並發現一個常被形容為均質的風格內部有多少變化的最佳途徑。"}],
            [{en:"Nada brewery open days",ja:"灘の蔵開き",zh:"灘的酒藏開放日"},{en:"Kōbe and Nishinomiya",ja:"神戸・西宮",zh:"神戶與西宮"},{en:"Late winter and spring",ja:"晩冬から春",zh:"晚冬至春"},
             {en:"The Nada houses open individually rather than as one event, on scattered weekends. Several have permanent museums with free tastings, so Nada is the one district you can visit usefully at any time of year — and it is twenty minutes from central Kōbe.",
              ja:"灘の蔵は一つの催しとしてではなく、それぞれに、散らばった週末に開く。常設の資料館と無料の試飲を持つ蔵もいくつかあり、ゆえに灘は、一年のいつ訪れても意味のある唯一の産地である。そして神戸の中心から二十分である。",
              zh:"灘的各家酒藏並非合辦單一活動，而是各自在分散的週末開放。其中數家設有常設資料館並提供免費試飲，因此灘是一年中任何時候造訪都有收穫的唯一產地——而且距神戶市中心只有二十分鐘。"}],
            [{en:"Fushimi in spring",ja:"伏見の春",zh:"春天的伏見"},{en:"Southern Kyoto",ja:"京都市南部",zh:"京都市南部"},{en:"March to April",ja:"三月から四月",zh:"三月至四月"},
             {en:"A walkable district of black-slatted brewery walls along a canal, with museums, tasting rooms and a river of cherry blossom. The softest, most feminine style in Japanese sake, in the city that most rewards walking.",
              ja:"運河沿いに黒い板塀の蔵が続く、歩ける地区である。資料館、試飲処、そして桜の川。日本酒で最も柔らかく女性的な型が、歩くことに最も報いる都市にある。",
              zh:"沿著運河一路排開的黑板牆酒藏，是個適合步行的街區，有資料館、試飲處與一整條櫻花的河。日本酒中最柔軟、最具女性氣質的風格，落在最值得步行的城市裡。"}],
            [{en:"Craft-sake weeks and city fairs",ja:"都市の日本酒フェア",zh:"城市清酒展"},{en:"Tokyo and Osaka",ja:"東京・大阪",zh:"東京與大阪"},{en:"Spring and early summer",ja:"春から初夏",zh:"春至初夏"},
             {en:"A cluster of large urban tastings, some ticketed by the glass and some all-you-can-taste. Convenient rather than atmospheric, but they put a very wide range in one room and several are aimed squarely at newcomers and at visitors from abroad.",
              ja:"都市の大規模な試飲の一群であり、杯ごとの券のものもあれば、飲み放題のものもある。風情よりも利便であるが、きわめて広い範囲を一室に集める。いくつかは初心者と海外からの客に真っ直ぐ向けられている。",
              zh:"一群大型的都市試飲活動，有的按杯售票，有的是無限暢飲。便利多於情調，但能把極廣的範圍集中在同一個空間裡；其中數場明確以新手與海外訪客為對象。"}],
            [{en:"Kurabiraki at a single brewery",ja:"一つの蔵の蔵開き",zh:"單一酒藏的藏開" },{en:"Anywhere",ja:"全国",zh:"全國各地"},{en:"January to March",ja:"一月から三月",zh:"一月至三月"},
             {en:"The best experience of the five, and the least publicised. A single brewery opens for a day to sell the new season's first pressing, usually with food stalls, usually attended mostly by neighbours. If a brewery you already like holds one, that is the trip to make.",
              ja:"五つのうち最良の経験でありながら、最も告知されない。一つの蔵が一日開き、その季の初搾りを売る。多くは屋台が出て、多くは近隣の人々が集う。すでに好きな蔵がこれを催すなら、行くべきはそれである。",
              zh:"五者之中體驗最好、卻最不張揚的一種。單一酒藏開放一天，販售當季的第一批新酒，通常有小吃攤，來的多半是鄰里街坊。如果你已經喜歡的某家酒藏辦了一場，那就是最該去的那一趟。"}]
          ] },

        { t:"note", text:{
          en:"Practical points for any of these: buy the ticket before travelling, take the train and never a car, eat properly beforehand, use the water station that every event provides, and pace yourself against the fact that a tasting pour at 15% is not a small drink when you have had thirty of them. See <a href=\"health.html\">Alcohol &amp; the Body</a>.",
          ja:"いずれについても実際的な点——切符は旅の前に買い、車ではなく列車で行き、事前にしっかり食べ、どの会場にもある水の場を使い、そして15%の試飲の一杯は、三十杯を数えれば小さな酒ではないという事実に対して歩調を保つこと。<a href=\"health.html\">酒と身体</a>を参照。",
          zh:"以上任何一項的實務要點：出發前先買票、搭電車絕不開車、事先好好吃飯、善用每場活動都會提供的飲水處，並且要記住：一杯 15% 的試飲在你喝到第三十杯時，就不是一小口酒了，請據此掌握節奏。見<a href=\"health.html\">酒與身體</a>。" } }
      ] },

    { t:"related", items:[
      { href:"itineraries.html", why:{ en:"Five routes already worked out.", ja:"すでに組まれた五つの道筋。", zh:"五條已經排好的路線。" } },
      { href:"places.html", why:{ en:"The rooms you will end up in.", ja:"結局そこに行き着く部屋。", zh:"你最後會待著的那些空間。" } },
      { href:"storage.html", why:{ en:"Getting the bottles home without ruining them.", ja:"瓶を損なわずに持ち帰ること。", zh:"把酒帶回家而不毀掉它們。" } },
      { href:"kanpai.html", why:{ en:"What to say, and how to decline.", ja:"何と言うか、そしてどう断るか。", zh:"該說什麼，以及怎麼婉拒。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- health */
SAKE.pages["health"] = {
  kicker: { en: "Drinking · 15", ja: "飲む · 15", zh: "品飲 · 15" },
  title:  { en: "Alcohol & the Body", ja: "酒と身体", zh: "酒與身體" },
  jp: "純アルコール量 · ALDH2 · 和らぎ水",
  lede: {
    en: "Sake is 15–16% alcohol, which is roughly the strength of wine and three times the strength of beer, served in small cups that make it easy to lose count. This page is the arithmetic — how much is actually in a serving, what the Japanese health guidelines say, and one piece of genetics that matters more in East Asia than anywhere else in the world. None of it is medical advice, and none of it is a reason to drink.",
    ja: "日本酒はアルコール分15〜16%、ワインとほぼ同じ強さで、ビールの三倍にあたる。それを、量を見失いやすい小さな杯で飲む。本頁はその算術である——一杯に実際どれだけ入っているのか、日本の健康指針は何を言っているのか、そして世界のどこよりも東アジアで重要な一つの遺伝的事実。医学的助言ではなく、飲む理由でもない。",
    zh: "日本酒的酒精濃度為 15–16%，約與葡萄酒相當，是啤酒的三倍，卻以容易讓人算不清的小杯供飲。本頁談的是這筆算術——一份實際含多少酒精、日本的健康指引怎麼說，以及一項在東亞比世界任何地方都更重要的遺傳事實。以上皆非醫療建議，也都不是飲酒的理由。"
  },
  body: [
    { t:"section", id:"arithmetic",
      title:{ en:"How much is in a cup", ja:"一杯に入っている量", zh:"一杯裡有多少" }, jp:"純アルコール量",
      body:[
        { t:"figure",
          caption:{
            en:"What one drink actually contains, in grams of pure alcohol. The bars are the standard serving of each drink as it is normally poured in Japan; the vertical line is twenty grams, the figure most Japanese guidance uses as a day's moderate amount. Sake's reputation for strength is mostly a matter of the vessel: a gō is a large serving of a drink at fifteen per cent.",
            ja:"一杯が実際に含むものを、純アルコールのグラム数で。棒は日本において常に注がれるそれぞれの飲みものの標準の一杯であり、縦の線は二十グラム、日本のほとんどの指針が一日の程よい量として用いる数である。日本酒が強いという評判は、その多くが器の問題である。一合とは、十五度の飲みものの大きな一杯である。",
            zh:"一杯實際含有多少純酒精，以公克計。長條是各種酒在日本一般斟出的標準份量；縱線是二十公克，也就是日本多數指引所採用的「一日適量」。清酒「烈」的名聲，大半是器皿的問題：一合，是一杯十五度飲品的大份量。" },
          svg: function (lang, L) {
            var W = 760, H = 378, X0 = 236, X1 = W - 116, Y0 = 44, RH = 40, MAX = 26;
            function px(g) { return X0 + g / MAX * (X1 - X0); }
            var rows = [
              { g:21.6, f:"#C0AF8E", n:{ en:"Sake, one gō", ja:"日本酒 一合", zh:"清酒 一合" }, s:{ en:"180 mL at 15%", ja:"百八十ミリリットル・十五度", zh:"180 mL・15%" } },
              { g:20.0, f:"#CDBFA2", n:{ en:"Beer, a large bottle", ja:"ビール 大瓶", zh:"啤酒 大瓶" }, s:{ en:"500 mL at 5%", ja:"五百ミリリットル・五度", zh:"500 mL・5%" } },
              { g:20.6, f:"#DACFB8", n:{ en:"Shōchū, a cup", ja:"焼酎 一杯", zh:"燒酎 一杯" }, s:{ en:"104 mL at 25%", ja:"百四ミリリットル・二十五度", zh:"104 mL・25%" } },
              { g:19.0, f:"#DDE5E8", n:{ en:"Wine, two glasses", ja:"葡萄酒 二杯", zh:"葡萄酒 兩杯" }, s:{ en:"200 mL at 12%", ja:"二百ミリリットル・十二度", zh:"200 mL・12%" } },
              { g:20.4, f:"#E2D8C6", n:{ en:"Whisky, a double", ja:"ウイスキー ダブル", zh:"威士忌 雙份" }, s:{ en:"60 mL at 43%", ja:"六十ミリリットル・四十三度", zh:"60 mL・43%" } },
              { g:10.8, f:"#E7DFD2", n:{ en:"Sake, a half gō", ja:"日本酒 半合", zh:"清酒 半合" }, s:{ en:"90 mL at 15%", ja:"九十ミリリットル・十五度", zh:"90 mL・15%" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + rows.length * RH;
            s += '<line x1="' + px(20) + '" y1="' + (Y0 - 10) + '" x2="' + px(20) + '" y2="' + (BOT + 2) + '" stroke="#7C6B52" stroke-dasharray="5 3"/>';
            s += '<text x="' + (px(20) + 8) + '" y="' + (Y0 - 16) + '" font-size="10" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "純アルコール 二十グラム" : lang === "zh" ? "純酒精 二十公克" : "20 g of pure alcohol") + '</text>';
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], y = Y0 + i * RH;
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 14) + '" text-anchor="end" font-size="12" fill="#201E1B">' + L(r.n) + '</text>';
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 28) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + L(r.s) + '</text>';
              s += '<rect x="' + X0 + '" y="' + (y + 3) + '" width="' + (px(r.g) - X0) + '" height="20" fill="' + r.f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (px(r.g) + 9) + '" y="' + (y + 17) + '" font-size="11" fill="#55504A">' + r.g.toFixed(1) + ' g</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + (BOT + 2) + '" x2="' + X1 + '" y2="' + (BOT + 2) + '" stroke="#B4AC9C"/>';
            for (var g2 = 0; g2 <= 25; g2 += 5) {
              s += '<text x="' + px(g2) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g2 + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "純アルコール グラム" : lang === "zh" ? "純酒精 公克" : "GRAMS OF PURE ALCOHOL") + '</text>';
            s += '<text x="30" y="' + (H - 30) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "計算は容量 × 度数 × 〇・八。"
                  : lang === "zh" ? "計算方式為容量 × 酒精度 × 〇・八。"
                  : "The arithmetic is volume \u00d7 strength \u00d7 0.8.") + '</text>';
            s += '<text x="30" y="' + (H - 14) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "二十グラムは上限ではなく目安であり、体格・性別・体質によって適する量は大きく異なる。"
                  : lang === "zh" ? "二十公克是參考值而非上限；適合的量會因體型、性別與體質而有很大差異。"
                  : "Twenty grams is a reference point rather than a limit; what suits a person varies widely with size, sex and metabolism.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Japan's health ministry asks people to think in grams of pure alcohol rather than in drinks, because “a drink” means nothing across beer, sake and shōchū. The formula is simple: <strong>volume in millilitres × strength as a decimal × 0.8 = grams of pure alcohol</strong>. The 0.8 is the density of ethanol.",
          ja:"厚生労働省は、「一杯」という単位がビール・日本酒・焼酎のあいだで意味をなさないため、純アルコールのグラム数で考えるよう求めている。式は単純である——<strong>量（mL）× 度数（小数）× 0.8 ＝ 純アルコール量（g）</strong>。0.8はエタノールの比重である。",
          zh:"日本厚生勞動省建議以純酒精的公克數思考，而非以「杯」計，因為「一杯」在啤酒、日本酒與燒酎之間毫無共通意義。公式很簡單：<strong>容量（毫升）× 酒精濃度（小數）× 0.8 ＝ 純酒精公克數</strong>。0.8 是乙醇的比重。" } },
        { t:"table",
          caption:{en:"Grams of pure alcohol in a serving",ja:"一杯あたりの純アルコール量",zh:"每份的純酒精公克數"},
          cols:[{en:"Serving",ja:"量",zh:"份量"},{en:"Strength",ja:"度数",zh:"濃度"},{en:"Pure alcohol",ja:"純アルコール",zh:"純酒精"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[1,2],
          rows:[
            [{en:"Sake, one gō (180 mL)",ja:"日本酒 一合（180mL）",zh:"日本酒 一合（180 mL）"},"15 %","≈ 22 g",{en:"The standard single serving in Japan — one masu, one small tokkuri, or three or four ochoko.",ja:"日本における標準の一人前。枡一杯、小徳利一本、あるいはお猪口三〜四杯。",zh:"日本的標準單份：一枡、一小德利，或三到四杯豬口。"}],
            [{en:"Sake, a 720 mL bottle",ja:"日本酒 四合瓶（720mL）",zh:"日本酒 四合瓶（720 mL）"},"15 %","≈ 86 g",{en:"Four gō. Shared between two people over an evening, that is about 43 g each.",ja:"四合。二人で一晩に分ければ一人あたり約43g。",zh:"四合。兩人一晚分飲，各約 43 公克。"}],
            [{en:"Sake genshu, one gō",ja:"原酒 一合",zh:"原酒 一合"},"19 %","≈ 27 g",{en:"An undiluted sake is a quarter stronger than it looks in the same cup.",ja:"原酒は、同じ杯でも見た目より四分の一ほど強い。",zh:"原酒在同一只杯中，實際強度比外觀多出約四分之一。"}],
            [{en:"Beer, 500 mL",ja:"ビール 500mL",zh:"啤酒 500 mL"},"5 %","20 g",{en:"The ministry's own worked example.",ja:"厚生労働省が挙げる例そのもの。",zh:"厚生勞動省所舉的示例本身。"}],
            [{en:"Wine, 150 mL glass",ja:"ワイン グラス150mL",zh:"葡萄酒 150 mL 一杯"},"12 %","≈ 14 g",{en:"A standard restaurant pour.",ja:"飲食店の標準的な一杯。",zh:"餐廳的標準倒酒量。"}],
            [{en:"Shōchū, 90 mL",ja:"焼酎 90mL",zh:"燒酎 90 mL"},"25 %","≈ 18 g",{en:"Usually diluted with hot or cold water, which changes the volume but not the alcohol.",ja:"多くはお湯や水で割るが、それで変わるのは容量であってアルコール量ではない。",zh:"通常以熱水或冷水兌開，改變的是容量而非酒精量。"}]
          ] },
        { t:"note", label:{en:"Why the small cup matters",ja:"小さな杯が問題になる理由",zh:"小杯何以重要"}, text:{
          en:"An ochoko holds 30–60 mL and is refilled by whoever is sitting next to you, often before it is empty. That is the social mechanism of a Japanese table, and it is also the reason people routinely underestimate what they have drunk by a wide margin. If you want to know, count in <em>gō</em> — one tokkuri, one masu, one 180 mL measure — not in cups.",
          ja:"お猪口は30〜60mLで、隣の人が、しばしば空になる前に注ぎ足す。これは日本の酒席の社会的な仕組みであると同時に、人が自分の飲んだ量を大きく見誤る理由でもある。把握したいのなら、杯ではなく合で数えること——徳利一本、枡一杯、180mLの単位で。",
          zh:"豬口容量 30–60 mL，並由鄰座之人斟滿，往往在見底之前就已添滿。這是日本酒席的社交機制，同時也是人們慣常大幅低估自己飲量的原因。若你想知道實際數字，請以「合」計——一德利、一枡、180 mL 的單位——而不要以杯計。" } }
      ]
    },

    { t:"section", id:"guidelines",
      title:{ en:"What the guidelines say", ja:"指針が言っていること", zh:"指引怎麼說" }, jp:"飲酒ガイドライン",
      body:[
        { t:"p", text:{
          en:"Japan's Ministry of Health, Labour and Welfare published its first national drinking guideline in February 2024. It deliberately avoids naming a “safe” amount, because the evidence does not support one; instead it gives thresholds above which the risk of specific conditions is known to rise, and asks people to know their own number.",
          ja:"厚生労働省は二〇二四年二月、初の国としての飲酒ガイドラインを公表した。安全な量を名指しすることは意図的に避けられている。証拠がそれを支持しないからである。代わりに、特定の疾患のリスクが上昇することが知られている閾値を示し、各人が自分の量を把握するよう求めている。",
          zh:"日本厚生勞動省於 2024 年 2 月發布首份全國飲酒指引。它刻意迴避指出「安全」的飲用量，因為證據並不支持這樣的說法；取而代之的是給出已知會使特定疾病風險上升的門檻，並要求每個人掌握自己的數字。" } },
        { t:"grid", cols:3, cells:[
          { k:{en:"Risk rises above",ja:"リスクが上がる量",zh:"風險上升門檻"}, v:{en:"40 g / day, men",ja:"男性 40g／日",zh:"男性 40 g／日"},
            d:{en:"About two gō of sake. Above this, the guideline identifies a raised risk of lifestyle-related disease.",ja:"日本酒でおよそ二合。これを超えると、生活習慣病のリスクが高まるとされる。",zh:"約合日本酒兩合。超過此量，指引認定生活習慣病風險升高。"} },
          { k:{en:"Risk rises above",ja:"リスクが上がる量",zh:"風險上升門檻"}, v:{en:"20 g / day, women",ja:"女性 20g／日",zh:"女性 20 g／日"},
            d:{en:"About one gō. Women metabolise alcohol differently and reach a higher blood concentration from the same dose.",ja:"およそ一合。女性は代謝が異なり、同じ量でも血中濃度が高くなる。",zh:"約合一合。女性代謝方式不同，相同劑量下血中濃度更高。"} },
          { k:{en:"No threshold at all",ja:"閾値が存在しないもの",zh:"完全沒有門檻者"}, v:{en:"some cancers",ja:"一部のがん",zh:"部分癌症"},
            d:{en:"For several cancers the risk curve has no lower safe point — it begins at the first drink. This is why the guideline names thresholds for some conditions and not for others.",ja:"いくつかのがんについては、リスク曲線に安全な下限が存在せず、最初の一杯から始まる。指針が疾患によって閾値を示したり示さなかったりするのはこのためである。",zh:"就數種癌症而言，風險曲線沒有安全下限——自第一杯即開始。這正是指引對某些疾病給出門檻、對另一些則不給的原因。"} }
        ] },
        { t:"p", text:{
          en:"Two further points from the same document are easy to miss and worth stating plainly. Risk is not distributed evenly across a week: the same weekly total taken in one or two sittings is more harmful than the same total spread out. And individual variation is very large — age, body mass, medication, liver condition and genetics all move the line, which is the subject of the next section.",
          ja:"同じ文書のうち、見落とされやすく、はっきり述べる価値のある点が二つある。リスクは一週間のなかで均等に分布しない——同じ週合計でも、一度か二度にまとめて飲むほうが、分散させるより有害である。そして個人差は非常に大きい。年齢、体格、服薬、肝臓の状態、そして遺伝がいずれも境界線を動かす。最後のものが次節の主題である。",
          zh:"同一份文件中另有兩點容易被忽略，值得直言。風險在一週之內並非均勻分布：相同的週總量，集中於一兩次飲用比分散飲用更具傷害。而個體差異極大——年齡、體重、用藥、肝臟狀況與遺傳都會移動那條界線；最後一項正是下一節的主題。" } }
      ]
    },

    { t:"section", id:"metabolism",
      title:{ en:"What the body actually does with it", ja:"体が実際に行うこと", zh:"身體實際上如何處理它" }, jp:"代謝",
      body:[
        { t:"p", text:{
          en:"Ethanol is a small molecule that crosses membranes easily, which is why it reaches the brain within minutes and why nothing you eat or drink alongside it changes the eventual dose. What food does change is the speed of arrival, and speed is most of what people experience as strength.",
          ja:"エタノールは膜を容易に越える小さな分子であり、それゆえ数分のうちに脳へ達し、それゆえ共に食べ飲みするものが最終の量を変えることはない。食が変えるのは到達の速さであり、そして速さこそ、人が強さとして経験するものの大部分である。",
          zh:"乙醇是一個能輕易穿越細胞膜的小分子，因此它能在數分鐘內抵達大腦，也因此你同時吃下或喝下的任何東西都不會改變最終攝入的劑量。食物所改變的是抵達的速度——而速度，正是人們所體驗到的「酒力」的大部分。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Absorption", ja:"吸収", zh:"吸收" }, jp:"吸収", romaji:"kyūshū", meta:{ en:"minutes", ja:"数分", zh:"數分鐘" },
            text:{ en:"About a fifth is absorbed through the stomach wall and the rest through the small intestine. A closed pylorus — that is, a stomach with food in it — slows the passage into the intestine and flattens the peak. This is the entire mechanism behind eating before drinking, and it is a real effect, not folklore. Carbonation and warmth both speed absorption, which is why warmed sake and sparkling sake feel faster than their alcohol content predicts.",
              ja:"およそ五分の一が胃の壁から、残りは小腸から吸収される。閉じた幽門——すなわち食の入った胃——は腸への通りを遅くし、頂を平らにする。飲む前に食べることの機序はその全体であり、これは俗信ではなく実際の効果である。炭酸も温かさもともに吸収を速める。燗酒や発泡の酒が、その度数の予想より速く効くと感じられるのはそのためである。",
              zh:"約五分之一經由胃壁吸收，其餘由小腸吸收。關閉的幽門——也就是裡面有食物的胃——會減緩通往腸道的速度，把血中濃度的高峰壓平。這就是「喝酒前先吃東西」的全部機制，而且它是真實的效應，不是民間傳說。碳酸與溫度都會加速吸收，這正是為什麼溫熱的酒與氣泡清酒，感覺起來比其酒精度所預期的更快上頭。" } },
          { n:2, title:{ en:"Ethanol to acetaldehyde", ja:"エタノールからアセトアルデヒドへ", zh:"乙醇轉為乙醛" }, jp:"ADH", romaji:"ADH", meta:{ en:"liver", ja:"肝臓", zh:"肝臟" },
            text:{ en:"Alcohol dehydrogenase in the liver strips two hydrogens from ethanol, producing acetaldehyde. Acetaldehyde is the toxic one: it is what causes flushing, nausea, headache and the racing pulse, and it is classified as a carcinogen. This step runs at a roughly fixed rate — the enzyme is saturated at very low concentrations — which is why the body clears alcohol at a near-constant speed and why nothing accelerates it.",
              ja:"肝臓のアルコール脱水素酵素がエタノールから水素を二つ奪い、アセトアルデヒドを生む。毒であるのはアセトアルデヒドの方である。顔の紅潮、吐き気、頭痛、脈の速まりを起こすのはこれであり、発癌性物質に分類されている。この段はおおむね一定の速さで進む——酵素はきわめて低い濃度で飽和する——ゆえに体は酒をほぼ一定の速さで処理し、ゆえにそれを速めるものは何もない。",
              zh:"肝臟中的乙醇脫氫酶自乙醇奪去兩個氫，生成乙醛。有毒的是乙醛：造成臉紅、噁心、頭痛與心跳加快的正是它，而它被列為致癌物。這一步以大致固定的速率進行——酵素在極低濃度下就已飽和——這正是為什麼身體以近乎恆定的速度清除酒精，也是為什麼沒有任何東西能加快它。" } },
          { n:3, title:{ en:"Acetaldehyde to acetate", ja:"アセトアルデヒドから酢酸へ", zh:"乙醛轉為乙酸" }, jp:"ALDH2", romaji:"ALDH2", meta:{ en:"the variable step", ja:"個人差の段", zh:"個體差異的一步" },
            text:{ en:"Aldehyde dehydrogenase 2 converts acetaldehyde to harmless acetate. This is the step that differs between people, and the difference is genetic and large — see the section below. Someone with a low-activity variant accumulates acetaldehyde for hours after a single cup.",
              ja:"アルデヒド脱水素酵素2型がアセトアルデヒドを無害な酢酸に変える。人により異なるのはこの段であり、その差は遺伝によるものであって、大きい。下の節を見られたい。活性の低い型を持つ者は、一杯の後、数時間にわたりアセトアルデヒドを溜め込む。",
              zh:"乙醛脫氫酶第二型把乙醛轉換為無害的乙酸。人與人之間有差異的正是這一步，而這個差異源自基因，且差距很大——見下一節。帶有低活性變異型的人，在喝下一杯之後會有數小時持續累積乙醛。" } },
          { n:4, title:{ en:"Acetate to nothing much", ja:"酢酸からほとんど何もないものへ", zh:"乙酸至無" }, jp:"クエン酸回路", romaji:"kuensan kairo", meta:{ en:"about 1 unit/hour", ja:"およそ毎時1ユニット", zh:"約每小時 1 單位" },
            text:{ en:"Acetate enters ordinary metabolism and ends as carbon dioxide and water. The whole chain clears roughly 7 g of pure alcohol per hour for an average adult — about a third of a gō of sake. There is no way to speed this: coffee, exercise, a cold shower and a sauna all change how awake you feel and none of them change your blood alcohol. Only time does.",
              ja:"酢酸は通常の代謝に入り、二酸化炭素と水として終わる。この連なりの全体は、平均的な成人で毎時およそ七グラムの純アルコール——日本酒でおよそ三分の一合——を処理する。これを速める術はない。珈琲も運動も冷たい水浴びも蒸し風呂も、どれだけ目覚めて感じるかを変えるだけで、血中の濃度は変えない。変えるのは時間だけである。",
              zh:"乙酸進入一般代謝，最終成為二氧化碳與水。整條路徑對一般成人而言，每小時約清除七公克純酒精——大約三分之一合的清酒。沒有任何辦法能加速它：咖啡、運動、冷水澡、三溫暖，全都只改變你感覺自己有多清醒，沒有一樣能改變你的血中酒精濃度。唯一能改變的只有時間。" } }
        ] },
        { t:"note", title:{ en:"Two myths worth retiring", ja:"退けるべき二つの俗信", zh:"兩個該退場的迷思" }, text:{
          en:"First: sake does not cause a different or worse hangover than other drinks of the same strength and volume. Ethanol is ethanol; what differs is congener load, sugar, carbonation and — overwhelmingly — how fast it was drunk. Second: the small amount of alcohol lost through breath, sweat and urine is a few percent of the total. The liver does essentially all of the work, at its own pace, whatever else is happening.",
          ja:"第一に、同じ度数と量の他の酒に比べ、日本酒が異なる、あるいはより悪い二日酔いを起こすということはない。エタノールはエタノールである。異なるのは雑成分の量、糖、炭酸、そして——圧倒的に——どれだけ速く飲んだかである。第二に、息と汗と尿から失われる僅かなアルコールは、全体の数パーセントにすぎない。肝臓が仕事のほぼすべてを、他に何が起きていようと、自らの速さで行う。",
          zh:"其一：在相同酒精度與飲用量的前提下，清酒不會造成與其他酒不同、或更嚴重的宿醉。乙醇就是乙醇；有差別的是雜醇等同源物含量、糖、碳酸，以及——影響最大的——喝得多快。其二：經由呼吸、汗水與尿液散失的酒精只占總量的百分之幾。肝臟以自己的速度完成幾乎全部的工作，無論周遭發生什麼。" } }
      ] },

    { t:"section", id:"aldh2",
      title:{ en:"ALDH2 — the East Asian variant", ja:"ALDH2——東アジアの変異", zh:"ALDH2——東亞的變異" }, jp:"アセトアルデヒド",
      body:[
        { t:"p", text:{
          en:"The body metabolises alcohol in two steps. Alcohol dehydrogenase converts ethanol to acetaldehyde, which is toxic and a recognised carcinogen; aldehyde dehydrogenase 2 — ALDH2 — then converts acetaldehyde to harmless acetate. A single point mutation in the <em>ALDH2</em> gene, carried almost exclusively by people of East Asian descent, cripples the second step.",
          ja:"身体はアルコールを二段階で代謝する。アルコール脱水素酵素がエタノールをアセトアルデヒドに変える。これは毒性をもち、発がん性が認められている物質である。次にアルデヒド脱水素酵素2——ALDH2——がアセトアルデヒドを無害な酢酸に変える。ALDH2遺伝子の一点変異は、ほぼ東アジア系の人々にのみ見られ、この第二段階を機能不全にする。",
          zh:"人體以兩個步驟代謝酒精。乙醇脫氫酶把乙醇轉為乙醛，而乙醛具毒性且為公認的致癌物；接著乙醛脫氫酶 2——ALDH2——把乙醛轉為無害的醋酸。ALDH2 基因上的一個點突變幾乎只見於東亞裔人群，它使第二個步驟失能。" } },
        { t:"defs", items:[
          { term:{en:"How common it is",ja:"どれほど一般的か",zh:"有多普遍"},
            def:{en:"Roughly 36% of East Asians carry at least one copy of the deficient allele — something in the order of 540 million people, about 8% of the world. Taiwan has the highest reported prevalence of any population, commonly cited at around 47%; Japan and Korea are somewhat lower. It is essentially absent elsewhere in the world.",
                 ja:"東アジア系のおよそ36%が欠損アリルを少なくとも一つもつ。人数にして五億四千万人規模、世界人口のおよそ8%にあたる。台湾は報告されているなかで最も高く、およそ47%とされることが多い。日本と韓国はやや低い。世界の他の地域にはほぼ存在しない。",
                 zh:"約 36% 的東亞人至少帶有一個缺陷等位基因——人數約在五億四千萬之譜，約占世界人口 8%。台灣是已知盛行率最高的族群，常見引述約為 47%；日本與韓國略低。此變異在世界其他地區幾乎不存在。"} },
          { term:{en:"What it feels like",ja:"どう感じられるか",zh:"感受為何"},
            def:{en:"Acetaldehyde accumulates instead of being cleared. The result is facial flushing, a racing heart, nausea and headache, sometimes after a single small drink. It is commonly called the “Asian flush”, and it is not an allergy or a low tolerance — it is a build-up of a toxic metabolite that the body cannot process.",
                 ja:"アセトアルデヒドが分解されずに蓄積する。顔の紅潮、動悸、吐き気、頭痛が生じ、ごく少量で起こることもある。俗に「アジアンフラッシュ」と呼ばれるが、アレルギーでも耐性の低さでもない。身体が処理できない有毒な代謝産物が溜まっているということである。",
                 zh:"乙醛未被清除而累積，導致臉部潮紅、心悸、噁心與頭痛，有時僅飲一小杯即出現。俗稱「亞洲紅臉」，但它既不是過敏，也不是酒量差——而是身體無法處理的有毒代謝物在體內堆積。"} },
          { term:{en:"Why it matters beyond the evening",ja:"その晩を越えて重要である理由",zh:"為何影響不止於當晚"},
            def:{en:"Carriers who drink regularly face a substantially elevated risk of oesophageal squamous cell carcinoma. Case-control studies put the odds ratio between roughly 4 and 18 depending on intake, and prospective work has found around a twelvefold relative hazard for heterozygous drinkers. Published estimates attribute somewhere between half and two-thirds of the excess oesophageal cancer burden in Japan and Taiwan to this group. The risk is dose-related, and it is not reduced by building up tolerance — tolerance to the flushing does not mean the acetaldehyde has stopped accumulating.",
                 ja:"この変異をもつ人が習慣的に飲酒すると、食道扁平上皮がんのリスクが大幅に上昇する。症例対照研究ではオッズ比がおよそ4〜18、前向き研究ではヘテロ接合の飲酒者で約十二倍の相対危険度が報告されている。日本と台湾における食道がんの超過リスクの半分から三分の二がこの層に帰せられる、という推計もある。リスクは量に依存し、慣れによって減ることはない。紅潮に慣れたことは、アセトアルデヒドが蓄積しなくなったことを意味しない。",
                 zh:"帶有此變異者若規律飲酒，食道鱗狀細胞癌風險將大幅升高。病例對照研究依攝取量給出約 4 至 18 的勝算比，前瞻性研究則發現異型合子飲酒者的相對危害約為十二倍。已發表的估計認為，日本與台灣食道癌超額負擔的一半至三分之二可歸因於此族群。風險與劑量相關，且不會因「習慣了」而降低——對潮紅產生耐受，並不代表乙醛停止累積。"} },
          { term:{en:"What to do with that",ja:"それをどう扱うか",zh:"該如何看待"},
            def:{en:"If you flush, that is information about your own metabolism, not a hurdle to be trained through. The medically straightforward reading is that flushing identifies a group for whom drinking carries markedly higher risk than it does for others, and for whom drinking less has a correspondingly larger benefit. Antihistamines and similar products suppress the visible flush without touching the acetaldehyde, which makes the signal disappear while leaving the risk in place.",
                 ja:"紅潮するのであれば、それは自分の代謝についての情報であって、訓練で乗り越えるべき障壁ではない。医学的に素直な読み方はこうである——紅潮は、飲酒のリスクが他より明らかに高い集団を指し示しており、その集団にとっては飲む量を減らすことの利益も相応に大きい。抗ヒスタミン薬などは見た目の紅潮を抑えるが、アセトアルデヒドには触れない。合図だけを消して、リスクはそのまま残す。",
                 zh:"若你會臉紅，那是關於你自身代謝的資訊，而非需要「練」過去的門檻。醫學上直白的解讀是：潮紅標示出一個飲酒風險明顯高於他人的族群，而該族群減少飲酒所獲得的益處也相應更大。抗組織胺等產品能壓下可見的潮紅，卻完全不觸及乙醛——它讓警訊消失，風險原封不動。"} }
        ] }
      ]
    },

    { t:"section", id:"table",
      title:{ en:"At the table", ja:"酒席で", zh:"在酒席上" }, jp:"和らぎ水",
      body:[
        { t:"defs", items:[
          { term:{en:"Yawaragi-mizu",ja:"和らぎ水",zh:"和らぎ水（緩和之水）"}, jp:"和らぎ水",
            def:{en:"“Softening water” — a glass of plain water served alongside the sake and drunk between cups, ideally in roughly equal quantity. It is a normal part of Japanese service and any decent sake bar will bring it unasked. It slows the pace, reduces dehydration, and clears the palate between one sake and the next, which is also why it matters for tasting.",
                 ja:"日本酒とともに供され、杯のあいだに飲む水。量はおおむね同量が理想とされる。日本の提供において当たり前の一部であり、まともな日本酒バーであれば頼まずとも出てくる。飲む速度を落とし、脱水を和らげ、一本と次の一本のあいだで口をすすぐ。利き酒においても重要なのはそのためである。",
                 zh:"「和らぎ水」——與清酒一同供上、於杯與杯之間飲用的清水，理想上與酒等量。這是日本供飲的常態，像樣的清酒吧不必開口便會端上。它放慢節奏、減輕脫水，並在一款酒與下一款之間清理味蕾——這也是它對品評同樣重要的原因。"} },
          { term:{en:"Food, not after but during",ja:"後ではなく、ともに",zh:"不是之後，而是同時"},
            def:{en:"Alcohol on an empty stomach reaches a substantially higher peak blood concentration than the same amount taken with food, because the stomach empties faster into the small intestine where absorption happens. Sake is a food drink by construction — see <a href=\"pairing.html\">Food Pairing</a> — and drinking it as one is not only more pleasant.",
                 ja:"空腹時のアルコールは、同量を食事とともに摂った場合より血中濃度の頂点が大きく高くなる。胃の内容物が、吸収の起こる小腸へ速く送られるからである。日本酒はその構造からして食中酒であり——<a href=\"pairing.html\">料理との相性</a>を参照——そのように飲むことには、快さ以上の意味がある。",
                 zh:"空腹飲酒所達到的血中濃度峰值，遠高於相同份量隨餐飲用，因為胃排空更快，而吸收發生在小腸。日本酒在構造上就是佐餐之酒——參見<a href=\"pairing.html\">餐酒搭配</a>——如此飲用，意義不僅在於更愉快。"} },
          { term:{en:"Pace, and the refill custom",ja:"速度と、注ぎ足しの慣習",zh:"節奏，與斟酒的習俗"},
            def:{en:"The Japanese custom of topping up a neighbour's cup before it empties is generous and it is also the single hardest thing about keeping track. Leaving the cup full is the accepted way to stop, and no explanation is required. Nobody at a Japanese table will think worse of you for it.",
                 ja:"隣の杯が空になる前に注ぎ足すという日本の慣習は、寛容であると同時に、量を把握するうえで最も厄介なものでもある。杯を満たしたままにしておくのが、断りの作法として受け入れられている。説明は要らない。それで悪く思われることはない。",
                 zh:"在鄰座杯子見底前為其添滿，是日本慷慨的習俗，同時也是掌握飲量最困難的一環。讓杯子保持滿的，是公認的婉拒方式，無須任何解釋。在日本的酒席上，沒有人會因此看輕你。"} },
          { term:{en:"Energy",ja:"エネルギー",zh:"熱量"},
            def:{en:"Sake carries roughly 100 kcal per 100 mL, so about 185 kcal in a gō — comparable to a glass of wine and rather more than a similar volume of beer, because the alcohol itself is the main contributor at about 7 kcal per gram. Residual sugar adds to it in sweeter styles; genshu adds more because of the higher alcohol.",
                 ja:"日本酒は100mLあたりおよそ100kcal、一合でおよそ185kcalである。ワイン一杯と同程度で、同容量のビールよりは多い。アルコール自体が1gあたり約7kcalで主たる寄与をなすためである。甘口では残糖が加わり、原酒はアルコール分が高いぶん多くなる。",
                 zh:"日本酒每 100 mL 約 100 大卡，一合約 185 大卡——與一杯葡萄酒相當，並高於同容量的啤酒，因為主要貢獻來自酒精本身（每公克約 7 大卡）。偏甜的風格另加殘糖；原酒則因酒精較高而更多。"} },
          { term:{en:"Hangover",ja:"二日酔い",zh:"宿醉"},
            def:{en:"The persistent claim that sake causes worse hangovers than other drinks is not well supported. Hangover severity tracks total alcohol consumed, dehydration, sleep disruption and congener content; sake is comparatively low in congeners. What sake does have is a serving format that makes it easy to drink more than intended, which is a sufficient explanation on its own.",
                 ja:"日本酒は他の酒より二日酔いがひどい、という言い分は根拠に乏しい。二日酔いの重さは、総摂取量・脱水・睡眠の乱れ・不純物（コンジナー）の量に従う。日本酒はコンジナーが比較的少ない。日本酒が実際にもっているのは、意図した以上に飲みやすい供し方であり、それだけで十分に説明がつく。",
                 zh:"「日本酒的宿醉比其他酒更嚴重」這一長期說法並無充分根據。宿醉的嚴重程度取決於總攝取量、脫水、睡眠中斷與同源物含量；日本酒的同源物相對偏低。日本酒真正具備的，是一種容易讓人喝過頭的供飲形式——單憑這一點就足以解釋一切。"} }
        ] },
        { t:"panel", tint:"snow", title:{en:"Plainly",ja:"率直に",zh:"直言"}, body:[
          { t:"p", text:{
            en:"This reference exists because sake is worth understanding, not because it is worth drinking more of. Alcohol is a carcinogen and a dependence-forming drug, its risks rise with the amount consumed, and for a large share of people in East Asia they rise faster than average. Understanding sake well is entirely compatible with drinking very little of it — arguably it points that way, since almost everything interesting here is available in a 30 mL pour. If drinking is causing you difficulty, that is worth talking to a doctor about rather than reading around.",
            ja:"本資料が存在するのは、日本酒が理解に値するからであって、より多く飲むに値するからではない。アルコールは発がん性物質であり、依存を形成する薬物であり、そのリスクは量とともに上がる。東アジアの少なからぬ人にとっては、平均より速く上がる。日本酒をよく理解することは、それをごくわずかしか飲まないことと完全に両立する。むしろそちらを指し示していると言ってよい。ここで面白いことのほとんどは、30mLの一杯で味わえるからである。飲酒が困りごとになっているなら、それは読んで回るより、医師に相談するに値することである。",
            zh:"本資料存在，是因為日本酒值得理解，而不是因為它值得多喝。酒精是致癌物，也是會形成依賴的藥物，其風險隨飲量上升；對東亞相當比例的人而言，上升得比平均更快。深入理解日本酒，與極少量飲用完全相容——甚至可以說正指向那個方向，因為此處幾乎所有有趣之處，一份 30 mL 便已足夠領略。倘若飲酒已對你造成困擾，那件事值得與醫師談，而不是靠閱讀繞開。" } }
        ] },
        { t:"tiny", text:{
          en:"Figures from the Ministry of Health, Labour and Welfare's 2024 drinking guideline and from published epidemiology on ALDH2; see <a href=\"sources.html\">Sources</a>. Nothing on this page is medical advice, and it is written for adults of legal drinking age.",
          ja:"数値は厚生労働省の二〇二四年飲酒ガイドラインおよびALDH2に関する公表疫学研究による。<a href=\"sources.html\">出典</a>を参照。本頁のいずれも医学的助言ではなく、法定年齢に達した成人に向けて書かれている。",
          zh:"數據取自厚生勞動省 2024 年飲酒指引，以及關於 ALDH2 的已發表流行病學研究；參見<a href=\"sources.html\">資料來源</a>。本頁內容皆非醫療建議，且係為法定飲酒年齡以上之成人所寫。" } }
      ]
    },

{ t:"section", id:"longterm",
      title:{ en:"Over years, not evenings", ja:"一晩ではなく、年単位で", zh:"以年計，而非以夜計" }, jp:"長期の影響",
      body:[
        { t:"p", text:{
          en:"Everything above this section is about a single evening. The long-run picture is separate, better established, and worth stating plainly rather than leaving as an implication.",
          ja:"ここまでの記述は、一晩についてのものである。長期の像は別のものであり、より確かに分かっており、含みとして残すのではなく率直に述べるに値する。",
          zh:"在此之前的內容談的是單一個夜晚。長期的圖像則是另一回事，它有更確立的證據，也值得直說，而不是留作言外之意。" } },
        { t:"ul", items:[
          { en:"<strong>Risk rises with total intake, not with the drink.</strong> Sake is not more or less harmful than wine, beer or spirits at the same quantity of ethanol. What matters is grams of alcohol per week, and 180 ml of sake at 15% contains roughly 22 grams — comparable to two standard glasses of wine.",
            ja:"<strong>危険は飲み物の種類ではなく、総量とともに高まる。</strong>同じエタノール量であれば、日本酒がワインやビールや蒸留酒より有害だということも、その逆もない。重要なのは週あたりのアルコールのグラム数であり、15%の日本酒180ミリリットルにはおよそ22グラムが含まれる。ワインの標準的なグラス二杯に相当する。",
            zh:"<strong>風險隨總攝取量而升高，與酒種無關。</strong>在乙醇量相同的前提下，清酒既不比葡萄酒、啤酒或烈酒更有害，也不會更安全。關鍵是每週的酒精公克數；15% 的清酒 180 毫升約含 22 公克，相當於兩標準杯葡萄酒。" },
          { en:"<strong>There is no established threshold below which alcohol carries no risk.</strong> National guidelines differ — some give weekly limits, some advise less is better and none is best — but the direction of the evidence over the last decade has been consistently toward lower recommended amounts, not higher.",
            ja:"<strong>これ以下なら危険がないという、確立された閾値は存在しない。</strong>各国の指針は異なり、週あたりの上限を示すものもあれば、少ないほど良く、飲まないのが最善と説くものもある。ただしこの十年、証拠の向かう方向は一貫して、推奨量をより低くする側にある。",
            zh:"<strong>並不存在一個「低於此量便無風險」的既定門檻。</strong>各國指引不一——有些給出每週上限，有些則主張越少越好、不喝最好——但過去十年間，證據的方向始終一致地指向調降建議量，而非調升。" },
          { en:"<strong>The ALDH2 variant compounds the risk.</strong> People who flush are exposed to more acetaldehyde for longer per drink, and the association with oesophageal cancer in flushers who drink regularly is well documented in East Asian populations. Flushing is information, not an inconvenience to push through.",
            ja:"<strong>ALDH2の型は危険を重ねる。</strong>顔が赤くなる人は、一杯あたりより多くのアセトアルデヒドに、より長くさらされる。日常的に飲む紅潮者における食道がんとの関連は、東アジアの集団においてよく記録されている。紅潮は情報であって、押して通り抜けるべき不便ではない。",
            zh:"<strong>ALDH2 變異會疊加風險。</strong>會臉紅的人每喝一杯都暴露於更多、且更久的乙醛之中；在東亞族群中，經常飲酒的臉紅者與食道癌的關聯已有充分記載。臉紅是資訊，不是該硬撐過去的不便。" },
          { en:"<strong>Frequency matters as much as quantity.</strong> Alcohol-free days are the single most useful pattern change most drinkers can make, and are the specific advice in most national guidance including Japan's.",
            ja:"<strong>量と同じくらい、頻度が重要である。</strong>休肝日を設けることは、多くの飲み手にとって最も有益な習慣の変更であり、日本を含む各国の指針が具体的に勧めていることでもある。",
            zh:"<strong>頻率與份量同等重要。</strong>設置無酒精的日子，是多數飲者所能做出的最有效的習慣調整，也是包括日本在內多數國家指引中的具體建議。" },
          { en:"<strong>Tolerance is not protection.</strong> Being able to drink more without feeling it means the behavioural feedback has weakened, not that the exposure has. This is a common and understandable misreading.",
            ja:"<strong>強いことは守りではない。</strong>より多く飲んでも感じないということは、行動上の手がかりが弱まったのであって、曝露が減ったのではない。よくある、そして無理からぬ読み違えである。",
            zh:"<strong>酒量好不等於受到保護。</strong>能喝更多卻沒感覺，代表行為上的回饋訊號變弱了，而不是暴露量變少了。這是常見且情有可原的誤讀。" }
        ] },
        { t:"note", label:{en:"Where a reference like this stops",ja:"この種の資料が止まるべきところ",zh:"這類參考資料應止步之處"}, text:{
          en:"This page can set out arithmetic and mechanism. It cannot tell you what is right for you, and it is not medical advice. If you are worried about your own drinking or someone else's, that is a conversation to have with a doctor or a support service rather than with a website about brewing — and it is a reasonable thing to want, not an admission of anything.",
          ja:"この頁ができるのは、計算と機序を示すことまでである。あなたにとって何が正しいかを告げることはできず、これは医学的な助言ではない。自分自身、あるいは誰かの飲み方が気にかかるのであれば、それは醸造についてのウェブサイトとではなく、医師や支援の窓口と交わすべき対話である。そしてそれを望むことは真っ当なことであって、何かを認めることではない。",
          zh:"本頁能做的，是列出算式與機制。它無法告訴你什麼對你而言是對的，也不構成醫療建議。若你擔心自己或他人的飲酒狀況，那是該與醫師或支持服務進行的對話，而非與一個談釀造的網站——而想要這樣做是合情合理的，不代表承認了任何事。" } }
      ]
    },

    { t:"section", id:"law",
      title:{ en:"Rules that reach the drinker", ja:"飲む者に及ぶ規則", zh:"觸及飲用者的規則" }, jp:"法と規則",
      body:[
        { t:"p", text:{
          en:"The legal framework around brewing is set out under <a href=\"standards.html#drinking-law\">Standards &amp; Law</a>. Four points from it bear directly on how much a person ends up drinking, and they are worth having as numbers rather than as impressions.",
          ja:"酒造りをめぐる法の枠組みは<a href=\"standards.html#drinking-law\">基準と法</a>に示した。そのうち四点は、人が結局どれだけ飲むことになるかに直に関わる。印象ではなく数として持っておく値打ちがある。",
          zh:"圍繞釀造的法律框架已在<a href=\"standards.html#drinking-law\">標準與法規</a>中說明。其中有四點直接關係到一個人最終會喝多少，值得以數字而非印象的形式記住。" } },
        { t:"defs", items:[
          { term:{ en:"Twenty, not eighteen", ja:"十八ではなく二十", zh:"二十歲，而非十八歲" }, jp:"二十歳未満", romaji:"hatachi miman",
            def:{ en:"Japan lowered the age of majority from twenty to eighteen on 1 April 2022 — but deliberately left drinking and smoking at twenty, and renamed the 1922 statute accordingly. An eighteen-year-old in Japan can sign a contract and marry and cannot legally be served sake. Retailers and restaurants carry the liability, not only the drinker.",
              ja:"日本は令和四年（2022）四月一日、成年の年齢を二十歳から十八歳へ引き下げた。しかし飲酒と喫煙は意図して二十歳に留め、大正十一年（1922）の法の名をそれに合わせて改めた。日本の十八歳は契約を結び婚姻することができ、そして酒を供されることは法において許されない。責めを負うのは飲む者だけでなく、売る店と飲食の店である。",
              zh:"日本於二〇二二年四月一日將成年年齡由二十歲下修為十八歲——但刻意將飲酒與吸菸維持在二十歲，並據此更改了一九二二年該法律的名稱。在日本，十八歲的人可以簽約、可以結婚，卻不能合法地被供應清酒。承擔責任的不只是飲用者，還包括零售商與餐飲業者。" } },
          { term:{ en:"Driving", ja:"運転", zh:"駕駛" }, jp:"飲酒運転", romaji:"inshu unten",
            def:{ en:"The offence threshold is 0.15 mg of alcohol per litre of breath — well under one gō for most people, and reachable the morning after. A more serious offence, judged by observable impairment rather than by a number, carries up to five years' imprisonment or a fine of up to one million yen; the lower offence up to three years or five hundred thousand yen. Since 2007 the law also punishes whoever lent the car, whoever poured the drink, and whoever got in the passenger seat. In practice this means that in Japan a driver does not drink at all, and nobody at the table suggests otherwise.",
              ja:"違反の閾は呼気一リットルあたりアルコール〇・一五ミリグラムであり、ほとんどの人にとって一合をはるかに下回り、翌朝にも達しうる。数値ではなく目に見える酩酊によって判じられるより重い罪は、五年以下の拘禁刑または百万円以下の罰金を負う。軽い方は三年以下または五十万円以下である。平成十九年（2007）より、法は車を貸した者、酒を注いだ者、助手席に乗った者をも罰する。実際には、日本において運転する者は一切飲まず、卓の誰もそれ以外を勧めない、ということを意味する。",
              zh:"違規門檻是每公升呼氣中含酒精 0.15 毫克——對多數人而言遠低於一合的量，而且隔天早上仍可能達到。較重的罪名以可觀察到的醉態而非數值來認定，可處五年以下拘禁刑或一百萬日圓以下罰金；較輕者則為三年以下或五十萬日圓以下。自二〇〇七年起，法律同時處罰借出車輛者、斟酒者，以及坐上副駕駛座的人。實務上，這意味著在日本，駕駛者滴酒不沾，而餐桌上也沒有人會提出相反的建議。" } },
          { term:{ en:"What goes on the bottle", ja:"瓶に記されるもの", zh:"標示在酒瓶上的東西" }, jp:"純アルコール量表示", romaji:"jun-arukōru-ryō hyōji",
            def:{ en:"The 2024 national guideline pushed the industry towards printing pure alcohol content in grams on the label, alongside the percentage. It is voluntary, and adoption is uneven, but it is the single most useful number on a bottle for anyone trying to manage intake — the percentage alone tells you nothing without the volume, and few people do that multiplication in their heads at the table.",
              ja:"二〇二四年の国のガイドラインは、度数の百分率と並べて純アルコール量をグラムで札に記すよう、業界を促した。任意であり、広がりは一様ではないが、摂る量を管理しようとする者にとって、瓶の上で最も有用な唯一の数である。百分率だけでは容量なしに何も告げず、卓においてその掛け算を頭の中で行う者は少ない。",
              zh:"二〇二四年的國家指引推動業界在標籤上於百分比酒精度之外，同時以公克標示純酒精含量。這屬自願性質，採用程度不一，但對任何想管理攝取量的人來說，它是酒瓶上最有用的一個數字——單看百分比，若沒有容量便毫無意義，而在餐桌上很少有人會在腦中做那道乘法。" } },
          { term:{ en:"Alcohol-free and low", ja:"ノンアルコールと低アルコール", zh:"無酒精與低酒精" }, jp:"ノンアル・低アル", romaji:"non-aru, tei-aru",
            def:{ en:"Under Japanese tax law anything at or above 1% alcohol by volume is an alcoholic beverage; below that it is a soft drink and can be sold anywhere. That single line explains why the alcohol-free category clusters at 0.00% and 0.5% rather than at 1.5% or 2%, and why low-alcohol sake — the 8 to 12% category that has grown quickly since the 2010s — is still taxed and licensed exactly like ordinary sake.",
              ja:"日本の酒税法において、アルコール分一パーセント以上のものはすべて酒類であり、それ未満は清涼飲料としてどこでも売りうる。この一本の線が、ノンアルコールの区分が一・五や二ではなく〇・〇〇や〇・五に集まる理由であり、二〇一〇年代から速やかに伸びた八から十二パーセントの低アルコールの酒が、なお普通の清酒とまったく同じに課税され免許されている理由である。",
              zh:"依日本酒稅法，酒精濃度達百分之一以上者即屬酒類；低於此則視為清涼飲料，可在任何地方販售。這一條界線就解釋了為何無酒精類產品集中在 0.00% 與 0.5%，而不是 1.5% 或 2%；也解釋了為何自二〇一〇年代起快速成長的八至十二度低酒精清酒，在課稅與執照上仍完全比照一般清酒。" } }
        ] }
      ] },

    { t:"section", id:"practical",
      title:{ en:"Two practical matters", ja:"実際的な二つのこと", zh:"兩件實務事項" }, jp:"運転と低アルコール",
      body:[
        { t:"grid", cols:2, cells:[
          { h:{en:"Driving in Japan",ja:"日本での運転",zh:"在日本開車"}, jp:"飲酒運転",
            body:[{ t:"p", text:{
              en:"Japan's drink-driving law is far stricter than most visitors expect, and is enforced. The legal threshold is very low, penalties include imprisonment, and — this is the part that surprises people — the driver is not the only one liable. Serving alcohol to someone you know will drive, riding in the car, or lending the vehicle all carry penalties of their own. In practice: if anyone in the group is driving, they do not drink at all, and nobody offers.",
              ja:"日本の飲酒運転に関する法は、多くの訪問者が思うよりはるかに厳しく、実際に執行される。基準値はきわめて低く、罰則には懲役が含まれ、そして——人を驚かせるのはこの点だが——責任を負うのは運転者だけではない。運転すると知りながら酒を供すること、その車に同乗すること、車を貸すことにも、それぞれ罰則がある。実際には、一行のうち誰かが運転するのであれば、その人は一滴も飲まず、誰も勧めない。",
              zh:"日本的酒駕法規遠比多數旅客想像的嚴格，且確實執行。法定門檻極低，罰則包含徒刑；而最令人意外的是——負責的不只是駕駛。明知對方要開車仍供酒、搭乘該車輛、出借車輛，都各自附帶罰則。實務上：只要同行者中有人要開車，那個人就滴酒不沾，也沒有人會勸酒。" } }] },
          { h:{en:"Low- and no-alcohol options",ja:"低アルコールとノンアルコール",zh:"低酒精與無酒精選項"}, jp:"選択肢",
            body:[{ t:"p", text:{
              en:"Japan has an unusually good range of them, because the drink-driving law created a real market. Non-alcoholic beer is universally available and generally good; low-alcohol sake at 5–8% is a growing category made by stopping fermentation early rather than by dilution; kōji amazake contains no alcohol at all and is a genuinely satisfying warm drink; and asking for tea or barley tea in a drinking setting is entirely unremarkable. Declining a drink in Japan needs no explanation, and the polite formula is simply that you are a <em>geko</em>.",
              ja:"日本にはその選択肢が驚くほど豊富にある。飲酒運転の法が実際の市場を作ったからである。ノンアルコールビールはどこでも手に入り、おおむね良い。5〜8%の低アルコールの日本酒は、薄めるのではなく発酵を早く止めて造られる伸びている分野である。麹甘酒にはアルコールがまったく含まれず、温かい飲み物として十分に満たされる。酒の席で茶や麦茶を頼むことは、まったく普通のことである。日本で酒を断るのに説明は要らず、丁寧な言い方は「下戸なもので」の一言である。",
              zh:"日本在這方面的選擇異常豐富，因為酒駕法規催生了真實的市場。無酒精啤酒隨處可得且品質普遍不錯；5–8% 的低酒精清酒是成長中的類別，作法是提早中止發酵而非稀釋；麴甘酒完全不含酒精，且是一杯真正令人滿足的熱飲；而在飲酒場合點茶或麥茶，也完全不足為奇。在日本婉拒飲酒無需解釋，禮貌的說法就只是一句「下戶」。" } }] }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"kanpai.html", why:{ en:"The table where most of this arithmetic actually applies.", ja:"この算術が実際に当てはまる卓。", zh:"這道算術真正派上用場的餐桌。" } },
      { href:"faq.html", why:{ en:"The strength question, answered with the serving size attached.", ja:"度数の問いに、一人前の量を添えて答える。", zh:"關於酒精度的問題，連同「一份是多少」一起回答。" } },
      { href:"numbers.html", why:{ en:"Where the alcohol figure on a label comes from.", ja:"札のアルコール度数の出どころ。", zh:"酒標上的酒精度數從哪裡來。" } },
      { href:"service.html", why:{ en:"The professional side of not over-serving people.", ja:"飲ませすぎぬことの、商いの側。", zh:"不要讓客人喝過量這件事的專業面。" } }
    ] }
  ]
};

/* =============================================================
   THE BOOK OF SAKE — Place
   11 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- --------------------------------------------- terroir */
SAKE.pages["terroir"] = {
  kicker: { en: "Place · 01", ja: "産地 · 01", zh: "產地 · 01" },
  title:  { en: "Terroir", ja: "風土", zh: "風土" },
  jp: "土地は酒に現れるか",
  lede: {
    en: "Whether sake has terroir is a live argument, and both sides have good evidence. Sake is made from a grain that is deliberately stripped of most of its outer layers, fermented by a purchased organism, at a temperature the brewer sets, in a stainless tank — four facts that seem to erase place entirely. And yet Nada and Fushimi, twenty-five kilometres apart, have produced recognisably different sake for two hundred years, and the reason is well understood. This page sets out where place genuinely enters, and where the claim is marketing.",
    ja: "日本酒にテロワールがあるかどうかは、いまも決着していない議論であり、双方に相応の根拠がある。日本酒は、外層の大半を意図的に削り取った穀物を、購入した微生物で、造り手が設定した温度において、ステンレスのタンクで発酵させて造る——この四つの事実は、土地というものを完全に消し去るように見える。それでいて、二十五キロしか離れていない灘と伏見は、二百年にわたり明らかに異なる酒を生んできた。その理由もよく分かっている。本頁は、土地が本当に入り込むのはどこか、そしてどこからが宣伝なのかを示す。",
    zh: "日本酒是否有風土，是一場仍在進行的辯論，而雙方都握有充分證據。日本酒是以刻意削去大部分外層的穀物，用外購的微生物，在釀造者設定的溫度下，於不鏽鋼槽中發酵而成——這四項事實看似把「地方」徹底抹除。然而相距僅二十五公里的灘與伏見，兩百年來持續產出明顯不同的酒，其原因也早已為人所知。本頁說明「地方」真正介入之處，以及哪些說法只是行銷。"
  },
  body: [
    { t:"section", id:"case-against",
      title:{ en:"The case against", ja:"否定の論拠", zh:"反方論據" }, jp:"反論",
      body:[
        { t:"ul", items:[
          { en:"<strong>The rice is not local.</strong> Yamada Nishiki from Hyōgo is brewed in every prefecture in Japan. A brewery in Kōchi using Hyōgo rice, a commercial yeast and its own water is claiming place on the basis of one ingredient out of three.",
            ja:"<strong>米は土地のものではない。</strong>兵庫の山田錦は日本のあらゆる県で醸されている。兵庫の米、市販の酵母、自社の水を使う高知の蔵は、三つの原料のうち一つだけを根拠に土地を語っていることになる。",
            zh:"<strong>米並非在地的。</strong>兵庫的山田錦在日本每一個縣都被拿來釀酒。一家使用兵庫米、市售酵母與自家水的高知酒藏，是憑三項原料中的一項在主張地方性。" },
          { en:"<strong>Milling removes the part that would carry site expression.</strong> Whatever a soil contributes to a grain — minerals, protein profile, trace compounds — is concentrated in the outer layers, and daiginjō throws away half the grain or more.",
            ja:"<strong>精米は、産地の個性を担うはずの部分を取り除く。</strong>土壌が穀物に与えるもの——ミネラル、たんぱく質の構成、微量成分——は外層に集中しており、大吟醸は粒の半分以上を捨てる。",
            zh:"<strong>精米削去了本可承載產地表現的部分。</strong>土壤賦予穀物的一切——礦物質、蛋白質組成、微量成分——都集中於外層，而大吟釀捨棄了半粒米以上。" },
          { en:"<strong>The yeast is a catalogue item.</strong> Two breweries a thousand kilometres apart using No. 1801 will produce two sakes that smell more like each other than like their neighbours using No. 9.",
            ja:"<strong>酵母は頒布品である。</strong>千キロ離れた二つの蔵が1801号を使えば、九号を使う隣の蔵よりも、互いによく似た香りの酒になる。",
            zh:"<strong>酵母是目錄上的品項。</strong>相距千公里的兩家酒藏若都用 1801 號，釀出的酒彼此氣味的相似度，會高於各自使用九號的鄰居。" },
          { en:"<strong>Every important variable is under human control.</strong> Fermentation temperature, milling ratio, kōji ratio, water treatment, blending, dilution — a brewer can decide to make a light dry sake in a region famous for rich ones, and will succeed.",
            ja:"<strong>重要な変数はすべて人の管理下にある。</strong>発酵温度、精米歩合、麹歩合、水処理、調合、割水——濃醇な酒で名高い産地で軽く辛い酒を造ろうと決めれば、造り手はそれを成し遂げる。",
            zh:"<strong>所有關鍵變數都在人的掌控之中。</strong>發酵溫度、精米步合、麴步合、水處理、調和、割水——釀造者若決定在以濃醇聞名的產區釀出輕盈辛口的酒，他會成功。" },
          { en:"<strong>There is no vintage variation of the wine kind.</strong> Rice quality varies year to year, but brewers adjust soak times and mash temperatures precisely to cancel that variation out. Consistency is the explicit goal.",
            ja:"<strong>ワイン的な作柄の変動が存在しない。</strong>米の品質は年ごとに変わるが、造り手は浸漬時間や醪の温度を精密に調整してその変動を打ち消す。恒常性が明示された目標である。",
            zh:"<strong>不存在葡萄酒式的年份變異。</strong>米質逐年不同，但釀造者會精確調整浸漬時間與醪溫以抵消差異。一致性正是明確的目標。" }
        ] }
      ]
    },

    { t:"section", id:"case-for",
      title:{ en:"The case for", ja:"肯定の論拠", zh:"正方論據" }, jp:"擁護",
      body:[
        { t:"ul", items:[
          { en:"<strong>Water cannot be moved.</strong> It is 80% of the bottle, and its mineral profile decides how vigorously the mash ferments and how dry it finishes. This is not a subtle effect: Nada's hard miyamizu and Fushimi's soft gokōsui produce two schools of sake twenty-five kilometres apart, using the same rice and the same techniques.",
            ja:"<strong>水は動かせない。</strong>瓶の八割を占め、そのミネラル構成が醪の発酵の勢いと仕上がりの辛さを決める。微妙な効果ではない——灘の硬い宮水と伏見の軟らかい御香水は、同じ米・同じ技法を用いながら、二十五キロの距離に二つの流派を生んだ。",
            zh:"<strong>水搬不走。</strong>它占瓶中八成，其礦物組成決定醪發酵的強度與成酒的辛度。這不是細微的效應：灘的硬質宮水與伏見的軟質御香水，在使用相同米與相同技法的情況下，於二十五公里之隔造就了兩個流派。" },
          { en:"<strong>Climate is not optional.</strong> A brewery in Niigata brewing in February works in ambient air near zero; one in Kōchi works at ten degrees warmer. Fermentation control is much cheaper and more stable in the cold, and the entire <em>tanrei</em> style of the snow country is downstream of that fact.",
            ja:"<strong>気候は選択できない。</strong>二月の新潟の蔵は氷点近い外気のなかで働き、高知の蔵は十度高い環境で働く。低温のほうが発酵の制御ははるかに安価で安定し、雪国の淡麗という酒質のすべては、この事実の下流にある。",
            zh:"<strong>氣候不是選項。</strong>二月的新潟酒藏在接近零度的外氣中工作，高知的酒藏則高上十度。低溫下的發酵控制便宜得多也穩定得多，而雪國「淡麗」的整套酒質，都在這個事實的下游。" },
          { en:"<strong>Rice is increasingly local.</strong> Since the 1980s almost every prefecture has bred its own varieties, and many now contract specific fields. Dewasansan in Yamagata, Ginpū in Hokkaidō, Koshi Tanrei in Niigata — these exist precisely to make the rice a local variable again.",
            ja:"<strong>米は次第に土地のものになりつつある。</strong>一九八〇年代以降、ほぼすべての県が独自の品種を育成し、いまでは特定の圃場と契約する蔵も多い。山形の出羽燦々、北海道の吟風、新潟の越淡麗——これらは、米を再び土地の変数にするために存在している。",
            zh:"<strong>米正日益在地化。</strong>1980 年代以來，幾乎每個縣都育成了自己的品種，如今許多酒藏更契作特定田區。山形的出羽燦燦、北海道的吟風、新潟的越淡麗——它們的存在，正是為了讓米重新成為在地的變數。" },
          { en:"<strong>Yeast is increasingly local too.</strong> Prefectural research stations release house strains bred against local rice and water; some breweries use resident wild yeast from their own buildings. The convergence caused by Kyōkai strains is being deliberately reversed.",
            ja:"<strong>酵母もまた土地のものになりつつある。</strong>各県の研究機関は、地元の米と水に合わせて育成した県産株を頒布し、蔵によっては自らの建物に棲む蔵付き酵母を用いる。きょうかい酵母がもたらした収斂は、意図的に押し戻されつつある。",
            zh:"<strong>酵母同樣日益在地化。</strong>各縣研究機構推出針對在地米與水育成的自有菌株，部分酒藏更使用棲息於自家建築中的藏付野生酵母。協會酵母所造成的趨同，正被刻意逆轉。" },
          { en:"<strong>Human transmission is a form of place.</strong> The tōji guilds — Nanbu, Echigo, Tanba, Noto — carried distinct techniques for centuries, and their footprints are still legible on the map. If a Burgundian would accept that a village's way of doing things is part of its terroir, the same argument applies here.",
            ja:"<strong>人の伝承もまた土地の一形態である。</strong>南部・越後・丹波・能登といった杜氏集団は、何世紀にもわたり固有の技術を運び、その足跡はいまも地図の上に読み取れる。ブルゴーニュの人が、村のやり方をテロワールの一部と認めるのであれば、同じ論法がここにも当てはまる。",
            zh:"<strong>人的傳承本身即是一種地方。</strong>南部、越後、丹波、能登等杜氏集團數世紀來各自傳遞獨特技法，其足跡至今仍可在地圖上辨讀。若勃根地人願意承認一個村莊的作法屬於其風土的一部分，同樣的論證在此亦成立。" }
        ] },
        { t:"quote",
          text:{en:"“Sake has no terroir, only <em>kura</em>-roir.”",ja:"「日本酒にテロワールはない。あるのは蔵ロワールだけだ。」",zh:"「日本酒沒有風土（terroir），只有藏土（kura-roir）。」"},
          cite:{en:"a formulation common in the English-language sake trade",ja:"英語圏の日本酒業界でよく言われる言い方",zh:"英語圈日本酒業界常見的說法"} }
      ]
    },

    { t:"section", id:"resolution",
      title:{ en:"A workable position", ja:"実務的な結論", zh:"一個可行的立場" }, jp:"整理",
      body:[
        { t:"p", text:{
          en:"The disagreement mostly dissolves once you separate two different claims. The strong claim — that a specific field expresses itself in the glass the way a Burgundy climat does — is not currently supported by evidence, and the milling argument alone makes it implausible. The weak claim — that geography constrains what a brewery can easily do, and that those constraints have produced durable regional styles — is simply true, and is more consequential in practice than the strong claim would be.",
          ja:"この対立は、二つの異なる主張を分けてしまえばおおむね解消する。強い主張——特定の圃場が、ブルゴーニュのクリマのように杯のなかで自らを表現する——は、現在のところ証拠に支えられておらず、精米という一点だけでも成立しがたい。弱い主張——地理が、蔵が容易になしうることを制約し、その制約が持続的な地域様式を生んできた——は端的に真であり、実務上は強い主張よりも意味が大きい。",
          zh:"一旦把兩種不同的主張分開，這場爭論大致就消解了。強主張——某一特定田區會如勃根地的 climat 那樣在杯中表達自身——目前並無證據支持，單憑精米一項理由便已難以成立。弱主張——地理限制了一家酒藏容易做到的事，而這些限制造就了持久的地域風格——則單純為真，且在實務上比強主張更具意義。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Where place genuinely enters",ja:"土地が本当に入り込むところ",zh:"地方真正介入之處"},
            body:[
              { t:"ul", plain:true, items:[
                { en:"Water — mineral profile, and it cannot be moved.",ja:"水——ミネラル構成。そして動かせないこと。",zh:"水——礦物組成，且無法搬移。" },
                { en:"Winter temperature — how cheap it is to ferment cold.",ja:"冬の気温——低温発酵にかかる費用。",zh:"冬季氣溫——低溫發酵的成本高低。" },
                { en:"Humidity — how the kōji room behaves.",ja:"湿度——麹室の挙動。",zh:"濕度——麴室的表現。" },
                { en:"Which rice varieties will actually ripen there.",ja:"その土地で実際に実る米の品種。",zh:"哪些米種真能在當地成熟。" },
                { en:"Local cuisine — what the sake is expected to sit beside.",ja:"郷土の食——その酒が何と並ぶことを期待されるか。",zh:"當地飲食——這款酒被期待與什麼並陳。" },
                { en:"The tōji tradition the brewery inherited.",ja:"蔵が受け継いだ杜氏の系譜。",zh:"酒藏所承襲的杜氏傳統。" }
              ] }
            ] },
          { h:{en:"Where the claim is thin",ja:"主張が薄いところ",zh:"主張薄弱之處"},
            body:[
              { t:"ul", plain:true, items:[
                { en:"Soil type in a grain milled to 40%.",ja:"精米歩合40%の米における土壌型。",zh:"精米步合 40% 的米中的土壤型態。" },
                { en:"“Vintage” where consistency is the stated goal.",ja:"恒常性を目標に掲げる造りにおける「作柄」。",zh:"以一致性為既定目標的釀造中的「年份」。" },
                { en:"Slope and aspect, which affect ripening but are erased by milling and blending.",ja:"斜面と方位——登熟には影響するが、精米と調合によって消される。",zh:"坡度與坡向——影響成熟，卻被精米與調和抹去。" },
                { en:"Any regional claim resting on a purchased catalogue yeast.",ja:"頒布酵母に依拠したあらゆる地域性の主張。",zh:"任何建立在外購目錄酵母上的地域性主張。" }
              ] }
            ] }
        ] }
      ]
    },

    { t:"section", id:"axes",
      title:{ en:"The axes that actually sort Japan", ja:"日本を実際に分けている軸", zh:"真正區分日本各地的軸線" }, jp:"地理の軸",
      body:[
        { t:"figure",
          caption:{
            en:"The two axes that do most of the sorting, with the districts placed against each other. Positions are relative rather than measured. The two classical style names sit in opposite corners — and the pale arrow is refrigeration, which since the 1970s has been quietly flattening the vertical axis by letting a warm prefecture buy the cold that a northern one gets for nothing.",
            ja:"最も多くを分けている二つの軸と、その上に互いに対して置かれた地区。位置は測られたものではなく相対のものである。二つの古典の酒質の名は対の隅にある。そして淡い矢は冷却設備である。それは一九七〇年代よりこのかた、温かい県が、北の県のただで得る寒さを買えるようにすることによって、縦の軸を静かに平らにしてきた。",
            zh:"承擔最多分類工作的兩條軸線，以及各產地在其上的相對位置。位置為相對而非實測。兩個古典風格名稱分居對角——而那道淡色箭頭是冷卻設備：自一九七〇年代以來，它讓溫暖的縣份得以「買下」北方縣份免費取得的寒冷，因而悄悄地把縱軸壓平。" },
          svg: function (lang, L) {
            var W = 760, H = 400, X0 = 96, X1 = W - 40, Y0 = 40, Y1 = H - 74;
            function px(v) { return X0 + v * (X1 - X0); }
            function py(v) { return Y1 - v * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#FBFAF7" stroke="#CDC6B9"/>';
            /* refrigeration arrow: pulls warm places up the cold axis */
            s += '<path d="M' + px(0.62) + ' ' + py(0.20) + ' L' + px(0.62) + ' ' + py(0.74) + '" stroke="#F0EDE4" stroke-width="26" stroke-linecap="butt" fill="none"/>';
            s += '<text x="' + px(0.645) + '" y="' + py(0.50) + '" font-size="10" fill="#B09E7C">' +
                 (lang === "ja" ? "冷却設備がこの向きへ引く" : lang === "zh" ? "冷卻設備把人往這個方向拉" : "refrigeration pulls this way") + '</text>';
            var pts = [
              { x:0.08, y:0.30, a:"start", n:{ en:"Hiroshima", ja:"広島", zh:"廣島" } },
              { x:0.22, y:0.26, a:"start", n:{ en:"Fushimi", ja:"伏見", zh:"伏見" } },
              { x:0.30, y:0.40, a:"start", n:{ en:"Shizuoka", ja:"静岡", zh:"靜岡" } },
              { x:0.36, y:0.16, a:"start", n:{ en:"Kōchi", ja:"高知", zh:"高知" } },
              { x:0.50, y:0.10, a:"start", n:{ en:"Fukuoka", ja:"福岡", zh:"福岡" } },
              { x:0.90, y:0.34, a:"end",   n:{ en:"Nada", ja:"灘", zh:"灘" } },
              { x:0.14, y:0.92, a:"start", n:{ en:"Niigata", ja:"新潟", zh:"新潟" } },
              { x:0.24, y:0.96, a:"start", n:{ en:"Akita", ja:"秋田", zh:"秋田" } },
              { x:0.30, y:0.76, a:"start", n:{ en:"Noto", ja:"能登", zh:"能登" } },
              { x:0.48, y:0.86, a:"start", n:{ en:"Nagano", ja:"長野", zh:"長野" } }
            ];
            for (var i = 0; i < pts.length; i++) {
              var p = pts[i], X = px(p.x), Y = py(p.y);
              s += '<rect x="' + (X - 4) + '" y="' + (Y - 4) + '" width="8" height="8" fill="#7C6B52"/>';
              var tx = p.a === "end" ? X - 11 : X + 11;
              s += '<text x="' + tx + '" y="' + (Y + 4) + '" text-anchor="' + p.a + '" font-size="12" fill="#201E1B">' + L(p.n) + '</text>';
            }
            /* the two classical style corners */
            s += '<text x="' + (X1 - 14) + '" y="' + (py(0.20)) + '" text-anchor="end" font-size="15" fill="#B4AC9C">男酒</text>';
            s += '<text x="' + (X1 - 14) + '" y="' + (py(0.20) + 15) + '" text-anchor="end" font-size="9.5" fill="#C5BDB0">' +
                 (lang === "ja" ? "硬水・締まった辛口" : lang === "zh" ? "硬水・結實辛口" : "hard water, firm and dry") + '</text>';
            s += '<text x="' + (X0 + 14) + '" y="' + (py(0.14)) + '" font-size="15" fill="#B4AC9C">女酒</text>';
            s += '<text x="' + (X0 + 14) + '" y="' + (py(0.14) + 15) + '" font-size="9.5" fill="#C5BDB0">' +
                 (lang === "ja" ? "軟水・丸く柔らか" : lang === "zh" ? "軟水・圓潤柔軟" : "soft water, round and gentle") + '</text>';
            /* axes */
            s += '<text x="' + X0 + '" y="' + (Y1 + 26) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "← 軟水　　　　仕込み水の硬度　　　　硬水 →"
                  : lang === "zh" ? "← 軟水　　　　釀造用水硬度　　　　硬水 →"
                  : "← SOFTER      BREWING WATER      HARDER →") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "冬の寒さ ↑" : lang === "zh" ? "冬季寒冷 ↑" : "COLDER WINTER ↑") + '</text>';
            s += '<text x="' + X0 + '" y="' + (H - 14) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "水は動かせず、寒さは買える。この図の縦の軸だけが、金で購いうる軸である。"
                  : lang === "zh" ? "水搬不動，寒冷卻買得到。這張圖上只有縱軸是能用錢買下的那一條。"
                  : "Water cannot be moved; cold can be bought. Of the two axes here, only the vertical one is for sale.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"compare", cols:2, items:[
          { title:{en:"North / south",ja:"南北",zh:"南北"}, jp:"寒暖",
            text:{en:"Colder in the north means longer, cooler fermentation is easy and cheap; warmer in the south means it must be engineered. Broadly, northern sake is lighter and cleaner, southern sake fuller and sweeter — though refrigeration has weakened this considerably since the 1970s.",ja:"北ほど寒く、低温で長い発酵が容易かつ安価になる。南ほど暖かく、それを設備で作り出さねばならない。おおまかに、北の酒は軽く清らかで、南の酒は厚く甘い。ただし一九七〇年代以降、冷却設備がこの差をかなり弱めている。",zh:"愈北愈冷，長時間低溫發酵既容易又便宜；愈南愈暖，則必須以設備營造。大體而言，北方的酒較輕盈潔淨，南方的酒較飽滿甘甜——不過自 1970 年代以來，冷卻設備已大幅削弱此一差異。"} },
          { title:{en:"Sea of Japan / Pacific",ja:"日本海側／太平洋側",zh:"日本海側／太平洋側"}, jp:"表日本・裏日本",
            text:{en:"The Sea of Japan coast takes heavy winter snow, which means soft filtered snowmelt water and reliably cold, humid brewing conditions. The Pacific side is drier and sunnier in winter. Niigata, Akita and Ishikawa on one side; Shizuoka, Ibaraki and Chiba on the other.",ja:"日本海側は冬に大量の雪を受ける。すなわち、軟らかく濾された雪解け水と、確実に冷たく湿った造りの条件である。太平洋側は冬に乾き、晴れる。新潟・秋田・石川と、静岡・茨城・千葉。",zh:"日本海側冬季降雪厚重，意味著柔軟、經過濾的雪融水，以及穩定寒冷且潮濕的釀造條件。太平洋側冬季則乾燥晴朗。一側是新潟、秋田、石川；另一側是靜岡、茨城、千葉。"} },
          { title:{en:"Hard water / soft water",ja:"硬水／軟水",zh:"硬水／軟水"}, jp:"水質",
            text:{en:"The sharpest single divider. Hard water ferments vigorously and finishes dry — Nada, and the <em>otokozake</em> tradition. Soft water ferments gently and finishes round — Fushimi, Hiroshima, most of the north. Hiroshima's soft-water method of 1898 exists because soft water made brewing there nearly impossible until someone solved it.",ja:"最も鋭い単一の分割線。硬水は旺盛に発酵し辛口に仕上がる——灘と男酒の伝統。軟水は穏やかに発酵し丸く仕上がる——伏見、広島、北の大半。一八九八年の広島の軟水醸造法が存在するのは、軟水ゆえにこの地での酒造りがほぼ不可能であり、誰かがそれを解いたからである。",zh:"最鮮明的單一分界。硬水發酵旺盛、成酒偏辛——灘與「男酒」傳統。軟水發酵溫和、成酒圓潤——伏見、廣島與北方多數地區。1898 年廣島軟水釀造法之所以存在，正因軟水一度使當地釀酒近乎不可能，直到有人解決了它。"} },
          { title:{en:"Consumer market / export market",ja:"内需向け／輸出向け",zh:"內需市場／出口市場"}, jp:"市場",
            text:{en:"A twenty-first-century axis that now cuts across all the others. Sake built for Tokyo restaurants, for prefectural domestic consumption, and for New York or Hong Kong are three different products, and many breweries make all three. It is arguably a stronger predictor of style today than latitude.",ja:"二十一世紀の軸であり、いまや他のすべてを横断している。東京の飲食店に向けた酒、県内消費に向けた酒、ニューヨークや香港に向けた酒は三つの異なる製品であり、その三つすべてを造る蔵も多い。今日、酒質の予測因子としては緯度より強いとさえ言える。",zh:"這是二十一世紀的軸線，如今橫貫其他所有軸線。為東京餐廳、為縣內消費、為紐約或香港所釀的酒，是三種不同的產品，而許多酒藏三者兼做。就今日而言，它作為風格預測因子的力道，甚至強過緯度。"} }
        ] }
      ]
    },

{ t:"section", id:"evidence",
      title:{ en:"What the evidence actually supports", ja:"証拠が実際に支えているもの", zh:"證據實際支持的是什麼" }, jp:"検証",
      body:[
        { t:"p", text:{
          en:"It is worth separating claims by how well they are evidenced, because the sake trade tends to present all of them at the same volume.",
          ja:"主張は、その裏づけの強さによって分けておく価値がある。日本酒の商いは、それらすべてを同じ声の大きさで語りがちだからである。",
          zh:"值得依證據強度把各種主張分開，因為清酒業界往往以同樣的音量講述所有主張。" } },
        { t:"table",
          cols:[{en:"Claim",ja:"主張",zh:"主張"},{en:"Support",ja:"裏づけ",zh:"支持度"},{en:"Comment",ja:"注",zh:"說明"}],
          rows:[
            [{en:"Water chemistry changes the finished sake",ja:"水質が仕上がりを変える",zh:"水質改變成酒"},
             {en:"Strong",ja:"強い",zh:"強"},
             {en:"Demonstrable, mechanistic and reproducible. Calcium and phosphate levels change fermentation rate and attenuation, and the Nada–Fushimi contrast has been documented for two centuries.",ja:"実証可能で、機序があり、再現もできる。カルシウムとリン酸の量が発酵の速度と発酵度を変え、灘と伏見の対比は二世紀にわたり記録されている。",zh:"可實證、有機制、可重現。鈣與磷酸的含量會改變發酵速度與發酵度，而灘與伏見的對比已有兩百年的紀錄。"}],
            [{en:"Ambient winter temperature shapes regional style",ja:"冬の気温が地域様式を形づくる",zh:"冬季氣溫形塑地域風格"},
             {en:"Strong",ja:"強い",zh:"強"},
             {en:"Historically decisive, though refrigeration has weakened it since about 1960. What remains is a difference in cost and margin for error rather than in possibility.",ja:"歴史的には決定的であった。ただし一九六〇年頃以降、冷却設備がその力を弱めている。いま残るのは、可能性の差ではなく、費用と許容誤差の差である。",zh:"歷史上具決定性，不過自約 1960 年起，冷卻設備削弱了它。如今殘留的是成本與容錯空間的差異，而非可能與否的差異。"}],
            [{en:"Rice variety changes the sake",ja:"米の品種が酒を変える",zh:"米種改變酒"},
             {en:"Moderate to strong",ja:"中程度から強い",zh:"中至強"},
             {en:"Well attested in controlled comparisons where everything else is held constant — an Ōmachi and a Gohyakumangoku from the same brewery, same yeast, same milling, are audibly different. Whether that is <em>place</em> or <em>genetics</em> is the open question.",ja:"他の条件を揃えた比較ではよく確かめられている。同じ蔵、同じ酵母、同じ精米で造った雄町と五百万石は、はっきり違う。それが土地なのか遺伝なのかが、開かれた問いである。",zh:"在其他條件固定的對照比較中已獲充分證實——同一酒藏、同一酵母、同一精米步合的雄町與五百萬石，差異清楚可辨。至於那究竟是「地方」還是「基因」，才是未決的問題。"}],
            [{en:"Field of origin is tasteable in the finished sake",ja:"圃場の違いが酒から分かる",zh:"田區差異能從成酒中嚐出"},
             {en:"Weak",ja:"弱い",zh:"弱"},
             {en:"No published blind evidence that trained tasters can identify special-A districts from the finished daiginjō. The price premium reflects the behaviour of the rice in the mash, which is a different claim.",ja:"訓練された利き手が、仕上がった大吟醸から特A地区を言い当てられるという盲検の報告はない。価格の上乗せが反映しているのは醪における米の振る舞いであり、それは別の主張である。",zh:"沒有已發表的盲測證據顯示，受訓的品評者能從成品大吟釀辨識出特A地區。價格溢價反映的是米在醪中的表現，那是另一回事。"}],
            [{en:"House microflora make a brewery's sake distinctive",ja:"蔵付きの微生物が蔵の個性をつくる",zh:"藏付微生物造就酒藏個性"},
             {en:"Contested",ja:"議論中",zh:"仍有爭議"},
             {en:"Plausible and demonstrable where wild yeast or wooden vats are actually used; largely irrelevant where the brewery pitches a catalogue strain into a sterilised steel tank, which is most of the industry.",ja:"野生酵母や木桶が実際に使われている場では、もっともらしく、実証もできる。頒布株を滅菌したステンレスのタンクに入れる——業界の大半がそうである——場では、ほぼ関係がない。",zh:"在真正使用野生酵母或木桶之處，這說法合理且可實證；在把頒布菌株投入已滅菌不鏽鋼槽的場合（亦即業界大多數），則幾乎無關。"}]
          ] },
        { t:"p", text:{
          en:"A useful way to hold all this: sake's sense of place is real but it lives at the level of the district and the house rather than the field. It is carried by water, climate, breeding programmes and inherited technique, and it is chosen and maintained by people rather than expressed passively by soil. That is a different kind of terroir from wine's, and calling it by another name — <em>kura</em>-roir — is not a joke so much as an accurate correction.",
          ja:"これらすべてを収める有益な見方はこうである。日本酒における土地の感覚は実在するが、それは圃場ではなく、地区と蔵の水準に宿る。水、気候、育種の事業、受け継がれた技術によって運ばれ、土壌が受動的に表現するのではなく、人が選び、保つものである。それはワインのテロワールとは種類の異なるものであり、別の名——蔵ロワール——で呼ぶことは、冗談というより正確な訂正である。",
          zh:"一種有用的統整方式是：清酒的地方感確實存在，但它棲身於「地區」與「酒藏」的層級，而非「田區」。它由水、氣候、育種計畫與承襲的技法所承載，是由人所選擇並維持的，而非由土壤被動表達。這與葡萄酒的風土是不同種類的東西；用另一個名字稱呼它——「藏土」（kura-roir）——與其說是玩笑，不如說是準確的更正。" } }
      ]
    },

    { t:"section", id:"climate",
      title:{ en:"Climate change is rewriting the map", ja:"気候変動が地図を書き換えている", zh:"氣候變遷正在改寫地圖" }, jp:"温暖化の影響",
      body:[
        { t:"p", text:{
          en:"Whatever one concludes about terroir in principle, the geography of Japanese sake is being altered in practice, and faster than the argument about it is being settled. Three effects are already visible.",
          ja:"原理としてのテロワールについてどう結論するにせよ、日本酒の地理は実際に変わりつつある。しかも、その議論が決着するより速く。三つの影響がすでに目に見えている。",
          zh:"無論人們對風土在原理上作何結論，日本清酒的地理正在實際改變，而且改變的速度快過那場爭論的收束。三項效應已然可見。" } },
        { t:"steps", items:[
          { title:{en:"Chalky grain",ja:"白未熟粒",zh:"白未熟粒"}, jp:"高温登熟障害",
            text:{en:"High night-time temperatures during the ripening period cause the grain to fill unevenly, producing chalky white immature grains that are downgraded at inspection and behave badly in a mash. This is now a routine problem in hot years across western Japan, and it hits brewing rice harder than eating rice because brewing rice ripens later.",
              ja:"登熟期の夜温が高いと粒の充実が不均一になり、白く未熟な粒が生じる。検査で等級を落とし、醪では悪く振る舞う。西日本では暑い年の通例の問題となっており、晩生である酒米は飯米より強く影響を受ける。",
              zh:"登熟期夜間高溫會使米粒充實不均，產生白色未熟粒，在檢查時被降級，且在醪中表現不佳。這在西日本已成為炎熱年份的常態問題，而晚熟的酒米受害更甚於食用米。"} },
          { title:{en:"Varieties moving north",ja:"品種の北上",zh:"品種北移"}, jp:"産地の移動",
            text:{en:"Yamada Nishiki is now grown commercially far outside its traditional range, and Hokkaidō — which could not reliably ripen a brewing variety at all until the 1990s — now has three of its own and a growing reputation. The historical association between a variety and a prefecture is loosening.",
              ja:"山田錦はいまや伝統的な適地をはるかに超えて商業栽培されており、一九九〇年代まで酒米を確実に実らせられなかった北海道は、独自の品種を三つ持ち、評価を高めつつある。品種と県との歴史的な結びつきは緩みつつある。",
              zh:"山田錦如今已在其傳統適作區之外進行商業栽培，而直到 1990 年代都無法穩定使酒米成熟的北海道，現已擁有三個自有品種且聲譽日隆。品種與縣份之間的歷史連結正在鬆動。"} },
          { title:{en:"Warmer winters, higher costs",ja:"暖冬と費用の上昇",zh:"暖冬與成本上升"}, jp:"醸造環境",
            text:{en:"The traditional brewing season depends on ambient cold. Warmer Decembers mean more refrigeration, more energy cost, and a narrowing of the natural advantage that snow-country breweries have held for centuries. It is a quiet erosion of exactly the mechanism that produced regional style in the first place.",
              ja:"伝統的な造りの季は外気の寒さに依存している。暖かい十二月は、より多くの冷却と、より高いエネルギー費用を意味し、雪国の蔵が何世紀も保ってきた自然の優位を狭めていく。地域様式を生んだまさにその機序が、静かに削られているのである。",
              zh:"傳統釀造季倚賴外氣的寒冷。更溫暖的十二月意味著更多冷卻、更高能源成本，並逐步侵蝕雪國酒藏數世紀以來的天然優勢。這正是對那個最初造就地域風格之機制的靜默侵蝕。"} },
          { title:{en:"Breeding as adaptation",ja:"育種による適応",zh:"以育種因應"}, jp:"耐暑性品種",
            text:{en:"Prefectural stations are now breeding explicitly for heat tolerance and late-season stability, which means the next generation of regional varieties will be shaped by climate as much as by taste. In a sense this is terroir working exactly as claimed — place forcing a response — just not the romantic version.",
              ja:"各県の試験場はいま、耐暑性と登熟後期の安定性を明示的な目標として育種している。次の世代の県産品種は、味と同じくらい気候によって形づくられるということである。ある意味でこれは、テロワールが言われるとおりに働いている姿——土地が応答を強いる姿——である。情緒的な意味においてではないが。",
              zh:"各縣試驗場如今明確以耐熱性與登熟後期穩定性為育種目標，這意味著下一代的縣產品種將由氣候與風味同等地形塑。從某種意義上說，這正是風土如其所宣稱地在運作——地方迫使人做出回應——只是不是那個浪漫版本。"} }
        ] }
      ]
    },

{ t:"section", id:"channels",
      title:{ en:"The six channels place actually travels through", ja:"風土が通る六つの経路", zh:"風土實際流經的六條通道" }, jp:"因果の道筋",
      body:[
        { t:"p", text:{
          en:"The argument for and against sake terroir gets nowhere while it is conducted in the abstract. It becomes tractable the moment it is broken into the specific physical and social channels by which a location could influence what ends up in the bottle. There are six, they are of very unequal strength, and only two of them are geological in the way the wine word implies.",
          ja:"日本酒の風土をめぐる賛否は、抽象のままで争われるかぎり進まない。それが扱えるものになるのは、ある土地が瓶の中身に影響を及ぼしうる具体的な物理的・社会的経路に分解された瞬間である。経路は六つあり、強さは大きく不揃いであり、ワインの語が含意するような地質的なものは、そのうち二つにすぎない。",
          zh:"關於清酒風土的正反爭論，只要停留在抽象層次就寸步難行；一旦拆解成「某個地點可能藉以影響瓶中之物」的具體物理與社會通道，它就變得可處理了。這樣的通道有六條，強弱極不均等，而其中真正符合葡萄酒用語所暗示之「地質性」的，只有兩條。" } },

        { t:"table",
          cols:[{en:"Channel",ja:"経路",zh:"通道"},{en:"Mechanism",ja:"機序",zh:"機制"},{en:"Strength",ja:"強さ",zh:"強度"},{en:"Can a brewery override it?",ja:"蔵は覆せるか",zh:"酒藏能否推翻它？"}],
          rows:[
            [{en:"Water chemistry",ja:"水の化学",zh:"水的化學"},
             {en:"Hardness, potassium, phosphorus, and above all iron and manganese, which act directly on yeast vigour and on colour and staling.",ja:"硬度、カリウム、リン、そして何より鉄とマンガン。酵母の勢い、色、そして老香に直接作用する。",zh:"硬度、鉀、磷，尤其是鐵與錳，直接影響酵母活力、色澤與老化。"},
             {en:"Strong",ja:"強い",zh:"強"},
             {en:"Partly. Iron can be filtered out; hardness can be adjusted. But no brewery in Japan buys its brewing water in, and the local aquifer is what it is.",ja:"部分的に。鉄は除去でき、硬度は調整できる。しかし日本のどの蔵も仕込水を買ってはおらず、地下の水はあるがままである。",zh:"部分可以。鐵可濾除，硬度可調整。但日本沒有任何酒藏是外購釀造用水的，地下水就是那個樣子。"}],
            [{en:"Winter temperature",ja:"冬の気温",zh:"冬季氣溫"},
             {en:"Cellar temperature sets the fermentation curve, and a cold region can hold a long low fermentation without machinery.",ja:"蔵の温度が発酵曲線を決める。寒冷地は機械なしに低温長期発酵を保てる。",zh:"酒藏溫度決定發酵曲線；寒冷地區不靠設備就能維持長時間低溫發酵。"},
             {en:"Historically decisive, now weak",ja:"歴史的には決定的、現在は弱い",zh:"歷史上具決定性，如今很弱"},
             {en:"Yes. Refrigeration removed this constraint almost entirely, which is why Shizuoka and Kōchi can now win.",ja:"覆せる。冷却設備がこの制約をほぼ完全に取り除いた。静岡や高知が勝てるようになった理由である。",zh:"可以。冷卻設備幾乎完全消除了這項限制，這正是靜岡與高知如今能夠獲勝的原因。"}],
            [{en:"Rice supply",ja:"米の供給",zh:"米的供給"},
             {en:"Which varieties grow within reach, and on what contract terms. A Hyōgo brewery's access to Special A Yamada Nishiki is a genuinely local asset.",ja:"どの品種が手の届く範囲で育ち、どのような契約条件で入るか。兵庫の蔵が特A地区の山田錦に手が届くことは、真に地域的な資産である。",zh:"哪些品種能在可及範圍內種植、以什麼契約條件取得。兵庫酒藏能取得特 A 地區的山田錦，是一項真正在地的資產。"},
             {en:"Strong, and increasingly tradeable",ja:"強い。ただし取引可能性が増している",zh:"強，但可交易性日增"},
             {en:"Yes, at a price. Yamada Nishiki ships nationwide, which is precisely the objection to rice-based terroir claims.",ja:"金を出せば覆せる。山田錦は全国に流通する。米を根拠とする風土論への反論は、まさにこの点である。",zh:"付得起錢就可以。山田錦行銷全國——這正是以米為據的風土論所遭遇的反駁。"}],
            [{en:"Yeast",ja:"酵母",zh:"酵母"},
             {en:"Prefectural yeast programmes are now the most visible regional signature: Shizuoka's HD-1, Akita's AK-1, Yamagata's KA, Kōchi's CEL series.",ja:"県の酵母事業は、今日最も目に見える地域の署名である——静岡のHD-1、秋田のAK-1、山形のKA、高知のCEL系。",zh:"縣級酵母計畫如今是最顯眼的地域署名：靜岡的 HD-1、秋田的 AK-1、山形的 KA、高知的 CEL 系列。"},
             {en:"Strong but administrative",ja:"強いが、行政的である",zh:"強，但屬行政性質"},
             {en:"No, by policy. Most prefectural strains are distributed only to breweries in that prefecture — a deliberately constructed terroir rather than a discovered one.",ja:"政策上、覆せない。県の株の多くは県内の蔵にのみ頒布される。発見された風土ではなく、意図して構築された風土である。",zh:"依政策不可。多數縣級酵母只頒布給該縣酒藏——這是刻意建構的風土，而非被發現的風土。"}],
            [{en:"Technique lineage",ja:"技術の系譜",zh:"技術的系譜"},
             {en:"Which guild staffed the region's breweries, and what that guild taught. Niigata's dryness and Hiroshima's soft-water school are transmitted knowledge, not geology.",ja:"どの杜氏集団がその地域の蔵を担い、何を教えたか。新潟の辛口も広島の軟水の系譜も、地質ではなく伝承された知識である。",zh:"是哪個杜氏集團支撐了該地區的酒藏，又教了什麼。新潟的辛口與廣島的軟水一系，都是傳承的知識，而非地質。"},
             {en:"Very strong",ja:"きわめて強い",zh:"非常強"},
             {en:"In principle yes; in practice this is the stickiest channel of all, because it is embodied in people who stay put.",ja:"原理上は覆せる。しかし実際には、これが最も粘着的な経路である。留まる人間のうちに宿るからである。",zh:"原則上可以；實際上這是最黏著的一條通道，因為它寄寓於留在原地的人身上。"}],
            [{en:"Market and food",ja:"市場と食",zh:"市場與飲食"},
             {en:"Sake was made to be drunk with what the region eats. Coastal Kōchi's dryness answers a diet of raw fish and heavy drinking; Kyoto's softness answers kaiseki.",ja:"酒はその地の食と共に飲まれるために造られた。高知の辛口は生魚と大酒の食生活への答えであり、京都の柔らかさは懐石への答えである。",zh:"酒是為了配當地的飲食而釀的。沿海高知的辛口回應的是生魚與豪飲的生活，京都的柔軟回應的則是懷石。"},
             {en:"Strong, and self-reinforcing",ja:"強く、自己強化的である",zh:"強，且會自我強化"},
             {en:"Only by abandoning the local market, which is what export-oriented breweries have effectively done.",ja:"地元市場を捨てることによってのみ。輸出志向の蔵が事実上行ってきたのはそれである。",zh:"唯有放棄在地市場才行——而這正是外銷導向的酒藏實際上所做的。"}]
          ] },

        { t:"p", text:{
          en:"Read down the last column and the shape of the honest answer appears. Two channels — water and technique lineage — resist a brewery's will; two more — yeast and market — are regional but by administrative or commercial choice rather than by nature; and two — temperature and rice — have been substantially dissolved by refrigeration and by a national rice market. Sake terroir is real, then, but it is roughly one third geology and two thirds institution.",
          ja:"最後の列を縦に読めば、正直な答えの形が現れる。二つの経路——水と技術の系譜——は蔵の意志に抗う。さらに二つ——酵母と市場——は地域的ではあるが、自然によってではなく行政的・商業的な選択による。そして二つ——温度と米——は、冷却設備と全国的な米市場によって大きく溶解した。日本酒の風土は実在する。ただしそれは、おおむね三分の一が地質であり、三分の二が制度である。",
          zh:"把最後一欄由上往下讀，誠實答案的輪廓就浮現了。兩條通道——水與技術系譜——抗拒酒藏的意志；另兩條——酵母與市場——雖屬地域性，卻出於行政或商業選擇而非自然；還有兩條——溫度與米——已被冷卻設備與全國性稻米市場大幅溶解。因此，清酒的風土是真實的，但它大約三分之一是地質，三分之二是制度。" } }
      ] },

    { t:"section", id:"specialA",
      title:{ en:"The one place with a plot-level claim", ja:"区画の議論が成り立つ唯一の場所", zh:"唯一能談到「地塊」的地方" }, jp:"特A地区",
      body:[
        { t:"p", text:{
          en:"If anywhere in sake supports the fine-grained claim that a specific slope produces measurably better raw material, it is the Yamada Nishiki country in the Hyōgo hills inland of Kōbe — the districts around Yokawa, Tōjō and Yashiro, in what is now Miki and Katō. Hyōgo's rice grading has for decades placed these fields in a <strong>Special A</strong> class, a rank above the ordinary A of good Yamada Nishiki country, and the grade attaches to villages and in places to individual blocks of paddy.",
          ja:"ある特定の斜面が測定可能なほどよい原料を生むという細かい主張が日本酒において成り立つ場所があるとすれば、それは神戸の内陸、兵庫の山あいの山田錦の里である——現在の三木市・加東市の、吉川、東条、社のあたり。兵庫の酒米の格付けは、数十年にわたりこれらの圃場を<strong>特A地区</strong>としてきた。良質の山田錦の産地である通常のA地区の上の格であり、その等級は村に、場所によっては個々の田の区画に付される。",
          zh:"如果清酒界有哪個地方支持「某一片特定坡地能產出可測量地更優原料」這種細緻主張，那就是神戶內陸、兵庫山間的山田錦之鄉——今三木市與加東市境內，吉川、東條、社一帶。數十年來，兵庫的酒米評級把這些田區列為<strong>特 A 地區</strong>，高於優質山田錦產地的一般 A 級；而這個等級是掛在村落上的，某些地方甚至掛到個別田塊。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"Clay soils", ja:"粘土質", zh:"黏質土" }, jp:"土壌",
            v:{ en:"Water-holding, mineral-rich", ja:"保水性と養分", zh:"保水且富含礦物" },
            d:{ en:"The valley soils are heavy clay derived from weathered granite and volcanic material, holding water and potassium well. Yamada Nishiki is a late-maturing, tall variety that lodges easily and rewards steady moisture rather than a flush of nitrogen.",
              ja:"谷の土壌は、風化した花崗岩や火山性の物質に由来する重い粘土質で、水とカリウムをよく保つ。山田錦は晩生で背が高く倒れやすい品種であり、窒素の一時的な多さよりも、安定した水分に報いる。",
              zh:"谷地土壤是由風化花崗岩與火山物質形成的厚重黏土，保水與保鉀能力佳。山田錦是晚熟、植株高、易倒伏的品種，它回報的是穩定的水分，而非一時充裕的氮。" } },
          { k:{ en:"Day–night swing", ja:"日較差", zh:"日夜溫差" }, jp:"寒暖差",
            v:{ en:"Basin topography", ja:"盆地地形", zh:"盆地地形" },
            d:{ en:"Enclosed valleys cool sharply at night in late summer. The resulting temperature difference during grain filling is the standard explanation for the large, well-formed <em>shinpaku</em> — the opaque starch core — that makes the variety so easy to polish deeply.",
              ja:"閉じた谷は晩夏の夜に強く冷える。登熟期のこの寒暖差が、大きく形のよい心白——白濁した澱粉の芯——を生むという説明が通例であり、それがこの品種を深く磨きやすくしている。",
              zh:"封閉的谷地在晚夏夜間急遽降溫。灌漿期的這種溫差，是山田錦能形成又大又完整之「心白」——不透明的澱粉核心——的標準解釋，也讓這個品種特別耐得住深度研磨。" } },
          { k:{ en:"Murakome", ja:"村米制度", zh:"村米制度" }, jp:"村米",
            v:{ en:"Contract since the 1880s", ja:"明治期以来の契約", zh:"自明治期以來的契作" },
            d:{ en:"Specific villages have supplied specific Nada houses under continuous named contracts since the late nineteenth century — one of Japan's oldest contract-farming systems. It ties a brewery to a place far more tightly than any label claim, and it means the farmer, not only the brewer, has a century of accumulated knowledge of that field.",
              ja:"特定の村が特定の灘の蔵に、十九世紀末以来、名を明示した契約のもとで供給し続けてきた。日本で最も古い契約栽培の一つである。それはいかなるラベル表示よりも強く蔵を土地に結びつけ、そして造り手だけでなく作り手のほうにも、その田についての一世紀分の蓄積があることを意味する。",
              zh:"自十九世紀末起，特定村落便以具名的持續契約供應特定的灘之酒藏，是日本最古老的契作制度之一。它把酒藏與土地綁得比任何酒標宣稱都緊，也意味著累積了一世紀田間知識的不只是釀酒的人，還有種田的人。" } },
          { k:{ en:"The caveat", ja:"留保", zh:"保留" }, jp:"注意",
            v:{ en:"Grading is not blind", ja:"等級は盲検ではない", zh:"評級並非盲測" },
            d:{ en:"The Special A designation is made by a body with an interest in the value of Hyōgo rice, on criteria that include cultivation history as well as measured grain quality. The correlation between grade and price is very strong; the independent evidence that a Special A field produces better sake than a good A field, holding brewery and technique constant, is thinner than the price difference suggests.",
              ja:"特A地区の指定は、兵庫の米の価値に利害を持つ機関により、測定される品質だけでなく栽培の履歴も含む基準で行われる。等級と価格の相関はきわめて強い。しかし、蔵と技術を固定したうえで特A地区の田が良好なA地区の田よりよい酒を生むという独立の証拠は、価格差が示唆するほど厚くはない。",
              zh:"特 A 地區的認定，由對兵庫米價值有切身利害的機構作出，其標準除實測穀質外也包含栽培沿革。等級與價格的相關性極強；但在固定酒藏與技術的前提下，證明特 A 田塊能釀出比優良 A 級田更好之酒的獨立證據，卻沒有價差所暗示的那麼厚實。" } }
        ] }
      ] },

    { t:"section", id:"testing",
      title:{ en:"Testing the claim at your own table", ja:"自分の卓で検証する", zh:"在自家餐桌上驗證" }, jp:"検証の手順",
      body:[
        { t:"p", text:{
          en:"Terroir claims in sake are unusually testable by an amateur, because breweries routinely release bottles that hold several variables constant. Three comparisons, each assemblable from an ordinary specialist shop, will tell you more than any amount of argument.",
          ja:"日本酒における風土の主張は、素人にも珍しく検証しやすい。蔵が、いくつかの変数を固定した瓶を日常的に出しているからである。普通の専門店で組める三つの比較は、いかなる量の議論よりも多くを語る。",
          zh:"清酒的風土主張，對外行人來說異常地容易驗證，因為酒藏經常推出「固定若干變因」的酒款。以下三組比較都能在一般專門店裡湊齊，而它們能告訴你的，比任何份量的爭論都多。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Same rice, different prefecture", ja:"同じ米、違う県", zh:"同一種米，不同縣份" }, jp:"米を固定する",
            meta:{ en:"Isolates: everything except the rice", ja:"切り出すもの——米以外のすべて", zh:"隔離：米以外的一切" },
            text:{ en:"Two junmai ginjō, both 100% Yamada Nishiki, both polished to around 50–55%, from breweries in two distant prefectures. If terroir means anything at all, these should differ audibly — and the difference you hear is the sum of water, yeast, technique and house intention, not the rice, which is held constant. Most tasters find the difference large. That result counts against rice-centred terroir and in favour of everything else.",
              ja:"純米吟醸を二本。ともに山田錦100%、精米歩合はともに50〜55%前後、離れた二県の蔵のもの。風土に何ほどかの意味があるなら、両者は明瞭に違うはずである。そして聞き取れる差は、水・酵母・技術・蔵の意志の総和であって、米ではない。米は固定されている。多くの人が差を大きいと感じる。この結果は、米中心の風土論に不利であり、それ以外のすべてに有利である。",
              zh:"兩支純米吟釀，都是 100% 山田錦，精米步合都在 50–55% 左右，來自相距遙遠的兩個縣的酒藏。如果風土有任何意義，這兩支就該有明顯差異；而你聽見的差異，是水、酵母、技術與酒藏意志的總和，不是米——米被固定住了。多數人會覺得差異很大。這個結果不利於以米為中心的風土論，而有利於其他一切。" } },
          { n:"2", title:{ en:"Same brewery, different rice", ja:"同じ蔵、違う米", zh:"同一酒藏，不同米" }, jp:"蔵を固定する",
            meta:{ en:"Isolates: the rice variety", ja:"切り出すもの——米の品種", zh:"隔離：米的品種" },
            text:{ en:"Many breweries release the same specification in Yamada Nishiki and in a local variety — Omachi, Gohyakumangoku, Miyama Nishiki, Hattan Nishiki. Here the water, the yeast, the crew and the intention are all constant and only the grain changes. The differences are usually real but smaller than in the first test: Omachi broader and earthier, Gohyakumangoku cleaner and tighter. This is the honest size of the rice effect.",
              ja:"同一の仕様を山田錦と地元品種——雄町、五百万石、美山錦、八反錦——で出す蔵は多い。ここでは水も酵母も蔵人も意志も一定であり、変わるのは粒だけである。差は通常、実在するが第一の試験より小さい。雄町はより広く土の香を帯び、五百万石はより清く締まる。これが米の効果の、正直な大きさである。",
              zh:"許多酒藏會以相同規格分別推出山田錦與在地品種——雄町、五百萬石、美山錦、八反錦。此時水、酵母、工班與意志皆固定，改變的只有米粒。差異通常真實存在，但小於第一項測試：雄町較寬廣、帶土氣，五百萬石較乾淨、較緊實。這就是「米的效應」誠實的大小。" } },
          { n:"3", title:{ en:"Same prefecture, five breweries", ja:"同じ県、五つの蔵", zh:"同一縣份，五家酒藏" }, jp:"地域を固定する",
            meta:{ en:"Isolates: whether a region has a house style", ja:"切り出すもの——地域に型があるか", zh:"隔離：一個地域是否有共通風格" },
            text:{ en:"Five junmai from five breweries in one prefecture, drunk blind against three from elsewhere. The question is not whether you can name the prefecture — you cannot — but whether the five hang together as a family against the three. For Niigata and for Shizuoka they usually do, and that is a prefectural yeast and a prefectural school talking. For a large, geologically varied prefecture with no such programme, they usually do not, and that is the honest answer for most of Japan.",
              ja:"一県の五蔵の純米を五本、他県の三本と混ぜて目隠しで飲む。問うべきは、県名を当てられるかではない——当てられない——五本が三本に対して一族としてまとまるかである。新潟と静岡ではたいていまとまる。これは県の酵母と県の学派が語っているのである。そうした事業を持たない、地質的にも多様な大きな県では、たいていまとまらない。それが日本の大部分についての正直な答えである。",
              zh:"取同一縣五家酒藏的五支純米，與別處的三支混在一起盲飲。要問的不是你能否說出縣名——你說不出——而是那五支能否作為一個家族與另外三支區隔開來。新潟與靜岡通常可以，那是縣酵母與縣級學派在說話。至於沒有這類計畫、幅員大且地質多樣的縣，通常不行——而這正是日本大部分地區的誠實答案。" } }
        ] },

        { t:"quote", text:{
          en:"Terroir in sake is less a claim about the ground than a claim about how tightly a place has coupled its water, its yeast, its teachers and its dinner table. Where that coupling is tight, the region is audible in the glass. Where it is loose, the brewery is.",
          ja:"日本酒における風土とは、土地についての主張であるよりも、ある場所が自らの水と酵母と師と食卓とをどれだけ強く結びつけてきたかについての主張である。結びつきが強いところでは、地域が杯の中で聞こえる。緩いところでは、聞こえるのは蔵である。",
          zh:"清酒的風土，與其說是關於土地的主張，不如說是關於一個地方把水、酵母、師承與餐桌耦合得多緊的主張。耦合緊密之處，杯中聽得見地域；耦合鬆散之處，聽見的是酒藏。" } }
      ] },

    { t:"related", items:[
      { href:"water.html", why:{ en:"The input that genuinely cannot be moved.", ja:"本当に動かしえぬ唯一の原料。", zh:"真正無法被移動的那一項原料。" } },
      { href:"rice.html", why:{ en:"The input that can be, and increasingly is.", ja:"動かしうる原料であり、実際に動きつつあるもの。", zh:"可以被移動、而且正在被移動的那一項。" } },
      { href:"gi.html", why:{ en:"The legal machinery for making place mean something.", ja:"土地に意味を持たせるための法の仕掛け。", zh:"讓「地方」產生意義的那套法律機制。" } },
      { href:"regions.html", why:{ en:"Every prefecture, with what it is known for.", ja:"すべての県と、それぞれ何で知られるか。", zh:"每一個縣，以及它們各自以什麼聞名。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- regions */
SAKE.pages["regions"] = {
  kicker: { en: "Place · 02", ja: "産地 · 02", zh: "產地 · 02" },
  title:  { en: "Regions A–Z", ja: "産地一覧", zh: "產地一覽" },
  jp: "四十七都道府県",
  lede: {
    en: "Sake is brewed in all forty-seven prefectures, though the distribution is extremely uneven: three prefectures account for close to half of all volume, and one prefecture has more breweries than the whole of Kyushu. What follows is the geography — first the eight regions, then every prefecture with its water, its climate, its house style and the names most likely to reach an export shelf.",
    ja: "日本酒は四十七都道府県すべてで造られているが、分布は極端に偏っている。三県で総量の半分近くを占め、一県だけで九州全体より多くの蔵をもつ。以下はその地理である——まず八つの地方、次に各都道府県について、水、気候、酒質の型、そして輸出の棚に届く可能性の高い銘柄を挙げる。",
    zh: "日本酒在全部四十七個都道府縣皆有釀造，但分布極不平均：三個縣即占總量近半，而單一個縣的酒藏數量便多過整個九州。以下即為這份地理——先是八大地方，再逐一列出各都道府縣的水、氣候、酒質風格，以及最可能出現在出口貨架上的名字。"
  },
  body: [
    { t:"section", id:"scale",
      title:{ en:"Scale and concentration", ja:"規模と集中", zh:"規模與集中" }, jp:"集中",
      body:[
        { t:"grid", cols:3, cells:[
          { k:{en:"Most breweries",ja:"蔵の数",zh:"酒藏最多"}, v:{en:"Niigata",ja:"新潟",zh:"新潟"}, d:{en:"Around 88 licensed sites — more than any other prefecture, and more than double the national average. Nagano is second with about 72.",ja:"約88場。他のどの県よりも多く、全国平均の倍以上。長野が約72場で続く。",zh:"約 88 家持照場所——多於任何其他縣，且逾全國平均的兩倍。長野以約 72 家居次。"} },
          { k:{en:"Most volume",ja:"生産量",zh:"產量最大"}, v:{en:"Hyōgo",ja:"兵庫",zh:"兵庫"}, d:{en:"Around 107,000 kL shipped — roughly a third of national output, from a comparatively small number of very large houses at Nada. Kyoto is second, Niigata third.",ja:"出荷量は約107,000kL。全国のおよそ三分の一を、灘のごく少数の巨大な蔵が担う。京都が二位、新潟が三位。",zh:"出貨量約 107,000 公秉——約占全國三分之一，來自灘地區數量不多但規模極大的酒藏。京都居次，新潟第三。"} },
          { k:{en:"Concentration",ja:"寡占",zh:"集中度"}, v:"≈ 48 %", d:{en:"Hyōgo, Kyoto and Niigata together account for close to half of all domestic sales volume. The remaining 44 prefectures share the rest.",ja:"兵庫・京都・新潟の三県で、国内販売数量の半分近くを占める。残りを44の道府県が分け合う。",zh:"兵庫、京都、新潟三縣合計約占國內銷售量的一半。其餘由 44 個道府縣分享。"} }
        ] },
        { t:"note", label:{en:"Two different industries",ja:"二つの産業",zh:"兩種產業"}, text:{
          en:"The volume figures and the brewery-count figures describe almost different businesses. Nada and Fushimi are industrial operations shipping bulk futsūshu nationwide; Niigata and Nagano are dense clusters of small houses making mostly designated sake for regional and specialist markets. A ranking by prestige would look different again, and would be led by Yamagata, Akita, Fukushima and Yamaguchi.",
          ja:"生産量の順位と蔵数の順位は、ほとんど別の産業を描いている。灘と伏見は普通酒を全国に供給する工業的な事業体であり、新潟と長野は、地域と専門市場に向けて主に特定名称酒を造る小さな蔵の密集地である。評判による順位はさらに別の姿になり、山形・秋田・福島・山口が先頭に立つだろう。",
          zh:"產量排名與酒藏數排名描述的幾乎是兩種不同的產業。灘與伏見是向全國供應散裝普通酒的工業體；新潟與長野則是為地方與專業市場釀造特定名稱酒的小型酒藏密集區。若以聲望排名，樣貌又將不同，領先者會是山形、秋田、福島與山口。" } }
      ]
    },

    { t:"section", id:"eight",
      title:{ en:"The eight regions", ja:"八つの地方", zh:"八大地方" }, jp:"地方",
      body:[
        { t:"compare", cols:2, items:[
          { title:{en:"Hokkaidō",ja:"北海道",zh:"北海道"}, jp:"北海道",
            text:{en:"The newest serious sake region. Rice could not reliably ripen this far north until cold-hardy varieties — Ginpū, Suisei, Kita-shizuku — arrived from 2000 onward. Extremely cold winters make low-temperature fermentation nearly free. Clean, brisk, faintly sweet; a small number of ambitious houses.",ja:"最も新しい本格的な産地。北緯がこれほど高い土地では、二〇〇〇年以降に吟風・彗星・きたしずくといった耐寒品種が現れるまで、米が安定して実らなかった。極寒の冬は低温発酵をほぼ無償にする。清く、きびきびとして、ほのかに甘い。志の高い蔵が少数。",zh:"最新興的正規產區。在耐寒品種——吟風、彗星、北之雫——於 2000 年後出現之前，稻米難以在如此高緯度穩定成熟。極寒的冬季使低溫發酵幾乎不需成本。潔淨、俐落、微甜；有少數志向遠大的酒藏。"} },
          { title:{en:"Tōhoku",ja:"東北",zh:"東北"}, jp:"東北",
            text:{en:"The six northern prefectures, and by common consent the most consistently exciting part of Japan for premium sake since the 1990s. Deep snow, soft water, cold winters, dedicated prefectural rice and yeast programmes, and the Nanbu tōji guild. Yamagata, Akita and Fukushima in particular have organised themselves around ginjō quality with unusual seriousness.",ja:"北の六県。一九九〇年代以降、上位の日本酒において日本で最も一貫して刺激的な地域だというのが大方の一致である。深い雪、軟水、寒い冬、県主導の米と酵母の計画、そして南部杜氏。とりわけ山形・秋田・福島は、吟醸の品質を軸に並外れて真剣に組織化してきた。",zh:"北方六縣。自 1990 年代以來，普遍被認為是日本高階清酒最持續令人振奮的區域。深雪、軟水、寒冬、縣層級的米與酵母計畫，以及南部杜氏。尤以山形、秋田、福島三縣，環繞吟釀品質進行了異常認真的組織化。"} },
          { title:{en:"Kantō",ja:"関東",zh:"關東"}, jp:"関東",
            text:{en:"Tokyo and its six surrounding prefectures. Historically the market rather than the source — Edo drank sake shipped from Kansai — and even now this is the region with the largest consumption and comparatively modest production. But Tochigi and Ibaraki have produced several of the most talked-about modern breweries.",ja:"東京とその周囲の六県。歴史的には産地ではなく市場であり——江戸は上方から送られる酒を飲んだ——今日でも消費が最も大きく、生産は比較的控えめな地域である。ただし栃木と茨城からは、現代で最も語られる蔵がいくつも出ている。",zh:"東京與周邊六縣。歷史上是市場而非產地——江戶飲的是自關西運來的酒——即使今日，此區仍是消費量最大、產量相對有限之地。惟栃木與茨城孕育了數家當代最受討論的酒藏。"} },
          { title:{en:"Chūbu & Hokuriku",ja:"中部・北陸",zh:"中部・北陸"}, jp:"中部・北陸",
            text:{en:"The most varied region: Niigata's snow-country clarity, Ishikawa's yamahai tradition, Nagano's altitude, Shizuoka's restrained Pacific style, Aichi and Gifu's older sweeter houses. Between them, Niigata and Nagano hold about a seventh of all Japanese breweries.",ja:"最も多様な地域である——新潟の雪国の清澄さ、石川の山廃の伝統、長野の標高、静岡の抑制された太平洋岸の型、愛知と岐阜の古く甘い蔵。新潟と長野の二県だけで、日本の蔵のおよそ七分の一を占める。",zh:"最為多樣的區域：新潟雪國的澄澈、石川的山廢傳統、長野的海拔、靜岡內斂的太平洋風格、愛知與岐阜較古老而偏甜的酒藏。單是新潟與長野兩縣，即擁有日本約七分之一的酒藏。"} },
          { title:{en:"Kansai",ja:"近畿",zh:"近畿"}, jp:"近畿",
            text:{en:"Where sake became an industry. Nara invented kōji brewing and bodaimoto; Itami and Ikeda were the first commercial brewing towns; Nada and Fushimi became and remain the two largest production districts in Japan. Hard water and soft water twenty-five kilometres apart; the country's most important rice-growing district behind them in Harima.",ja:"日本酒が産業になった場所。奈良が麹による醸造と菩提酛を生み、伊丹と池田が最初の商業酒造町となり、灘と伏見が日本最大の二大産地となって今日に至る。二十五キロを隔てて硬水と軟水があり、その背後の播磨には国内で最も重要な酒米の産地がある。",zh:"日本酒成為產業之地。奈良創出麴菌釀造與菩提酛；伊丹與池田是最早的商業釀造市鎮；灘與伏見則成為並持續是日本最大的兩個產區。相距二十五公里的硬水與軟水；其後方的播磨，則是全國最重要的酒米產地。"} },
          { title:{en:"Chūgoku",ja:"中国",zh:"中國地方"}, jp:"中国",
            text:{en:"Hiroshima's soft water and its 1898 brewing method; Okayama's Omachi, the last surviving pre-modern rice; Shimane and Tottori's small, traditional, increasingly kimoto-inclined houses; and Yamaguchi, transformed in one generation by a single brewery's export success.",ja:"広島の軟水と一八九八年の醸造法。岡山の雄町、唯一生き残った前近代の米。島根と鳥取の、小さく伝統的で、近年ますます生酛に傾く蔵。そして山口——一つの蔵の輸出の成功によって一世代で姿を変えた県。",zh:"廣島的軟水與 1898 年的釀造法；岡山的雄町，唯一存續的前近代米種；島根與鳥取小型、傳統、日益傾向生酛的酒藏；以及山口——因單一酒藏的出口成功而在一代人之內徹底改變的縣。"} },
          { title:{en:"Shikoku",ja:"四国",zh:"四國"}, jp:"四国",
            text:{en:"Small in output, distinct in character. Kōchi is the outlier: dry, high-acid, brisk sake made for a drinking culture that treats volume as a virtue, and a prefectural yeast programme responsible for some of the most floral sake in Japan.",ja:"生産量は小さいが、性格は明瞭である。高知は例外的な存在で、辛口・高酸度・きびきびとした酒質は、量を美徳とする飲酒文化に合わせたものであり、県の酵母計画は日本で最も華やかな香りの酒のいくつかを生んでいる。",zh:"產量小，性格鮮明。高知是異數：辛口、高酸、俐落的酒質，配合一種視「量」為美德的飲酒文化；而該縣的酵母計畫，孕育出日本香氣最華麗的幾款酒。"} },
          { title:{en:"Kyushu & Okinawa",ja:"九州・沖縄",zh:"九州・沖繩"}, jp:"九州・沖縄",
            text:{en:"Shōchū country. Sake brewing survives in strength only in the north — Fukuoka, Saga, Nagasaki, Kumamoto — where it is traditionally fuller and sweeter than the national norm, though Saga's Nabeshima and Fukuoka's rice programme have changed the picture considerably. Okinawa makes awamori, distilled from long-grain rice with black kōji, and is a different tradition entirely.",ja:"焼酎の国である。清酒の造りが力をもって残るのは北部——福岡・佐賀・長崎・熊本——に限られ、伝統的には全国平均より厚く甘い。ただし佐賀の鍋島や福岡の酒米計画が、この構図をかなり変えた。沖縄は長粒米と黒麹による蒸留酒、泡盛の土地であり、まったく別の伝統に属する。",zh:"燒酎的國度。清酒釀造僅在北部——福岡、佐賀、長崎、熊本——維持相當規模，傳統上比全國平均更厚實甘甜，惟佐賀的鍋島與福岡的酒米計畫已大幅改變此一圖景。沖繩製作以長粒米與黑麴蒸餾的泡盛，屬於完全不同的傳統。"} }
        ] }
      ]
    },

    { t:"section", id:"prefectures",
      title:{ en:"Prefecture by prefecture", ja:"都道府県別", zh:"逐縣一覽" }, jp:"四十七",
      body:[
        { t:"tiny", text:{
          en:"Brand names are given in kanji with romanisation, and are examples of what a prefecture is known for rather than any kind of ranking. Where a brewery's company name differs from its brand, the brand is given.",
          ja:"銘柄は漢字と読みで示す。順位ではなく、その県が何で知られているかの例である。社名と銘柄が異なる場合は銘柄を挙げた。",
          zh:"品牌以漢字與羅馬拼音並列，僅為該縣所以聞名之例，並非任何排名。若酒藏公司名與品牌名不同，此處列出品牌名。" } },
        { t:"table",
          caption:{en:"Northern Japan — Hokkaidō and Tōhoku",ja:"北日本——北海道・東北",zh:"北日本——北海道與東北"},
          cols:[{en:"Prefecture",ja:"都道府県",zh:"都道府縣"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Character",ja:"特徴",zh:"特徵"},{en:"Names to know",ja:"主な銘柄",zh:"值得認識的名字"}],
          jpCols:[1],
          rows:[
            [{en:"Hokkaidō",ja:"北海道",zh:"北海道"},"北海道",
             {en:"Very cold, very clean. Local varieties Ginpū, Suisei and Kita-shizuku made serious brewing possible only after 2000.",ja:"極寒で、極めて清らか。吟風・彗星・きたしずくといった道産品種により、本格的な酒造りは二〇〇〇年以降にようやく可能になった。",zh:"極寒、極潔淨。吟風、彗星、北之雫等在地品種，使正規釀造在 2000 年後才成為可能。"},
             "国稀 Kunimare · 男山 Otokoyama · 上川大雪 Kamikawa-Taisetsu"],
            [{en:"Aomori",ja:"青森",zh:"青森"},"青森",
             {en:"Soft water off the Hakkōda range; the prefectural rice Hanaomoi. Clean and rather firm. GI since 2025.",ja:"八甲田山系の軟水と、県産米の華想い。清らかで、やや硬質。二〇二五年にGI登録。",zh:"源自八甲田山系的軟水，以及縣產米華想。潔淨而略顯堅實。2025 年獲 GI。"},
             "田酒 Denshu · 陸奥八仙 Mutsu Hassen · 豊盃 Hōhai"],
            [{en:"Iwate",ja:"岩手",zh:"岩手"},"岩手",
             {en:"Home of the Nanbu tōji, Japan's largest brewmaster guild. Clean, aromatic, technically exacting. GI since 2023.",ja:"日本最大の杜氏集団、南部杜氏の本拠。清く、香りが立ち、技術的に厳密。二〇二三年にGI登録。",zh:"日本最大杜氏團體「南部杜氏」的根據地。潔淨、芳香、技術嚴謹。2023 年獲 GI。"},
             "南部美人 Nanbu Bijin · 赤武 AKABU · あさ開 Asabiraki"],
            [{en:"Miyagi",ja:"宮城",zh:"宮城"},"宮城",
             {en:"A prefecture that formally committed to junmai in the 1980s. Restrained, food-first, notably low-key aromatics.",ja:"一九八〇年代に純米志向を公式に打ち出した県。抑制的で、食を第一に考え、香りは際立って控えめ。",zh:"1980 年代正式宣示純米路線的縣。內斂、以佐餐為先、香氣格外低調。"},
             "浦霞 Urakasumi · 日高見 Hitakami · 伯楽星 Hakurakusei"],
            [{en:"Akita",ja:"秋田",zh:"秋田"},"秋田",
             {en:"Long, cold fermentations and a strong scientific tradition; the source of Kyōkai No. 6 and of the AK-1 yeast. Soft, wide, gently sweet.",ja:"低温長期発酵と強い科学的伝統。きょうかい六号とAK-1酵母の出自。柔らかく、幅があり、穏やかに甘い。",zh:"低溫長期發酵與深厚的科學傳統；協會六號與 AK-1 酵母的出處。柔軟、寬闊、溫和的甜。"},
             "新政 Aramasa · 山本 Yamamoto · 雪の茅舎 Yuki no Bōsha"],
            [{en:"Yamagata",ja:"山形",zh:"山形"},"山形",
             {en:"The first prefecture-wide sake GI (2016) and arguably the most organised quality programme in Japan — local rice, local yeast, collective tasting. Aromatic and precise.",ja:"最初の県単位の清酒GI（二〇一六年）であり、県産米・県産酵母・共同の官能評価という、日本でおそらく最も組織化された品質計画をもつ。香り高く、精緻。",zh:"首個全縣範圍的清酒 GI（2016），並擁有日本可能最有組織的品質計畫——縣產米、縣產酵母、集體品評。芳香而精確。"},
             "十四代 Jūyondai · 出羽桜 Dewazakura · 楯野川 Tatenokawa"],
            [{en:"Fukushima",ja:"福島",zh:"福島"},"福島",
             {en:"For many consecutive years the leading prefecture by gold medals at the national competition. Soft water, a strong prefectural training academy, and a range from ultra-clean modern to austere kimoto.",ja:"全国新酒鑑評会の金賞受賞数で長年首位を続ける県。軟水、県の強力な技術者育成機関、そして極めて清澄な現代型から厳格な生酛まで幅広い。",zh:"連續多年在全國新酒鑑評會金賞數上居首的縣。軟水、強而有力的縣立技術養成機構，風格自極致潔淨的現代型到嚴謹的生酛皆有。"},
             "飛露喜 Hiroki · 写楽 Sharaku · 大七 Daishichi"]
          ] },

        { t:"table",
          caption:{en:"Kantō and Kōshin",ja:"関東・甲信",zh:"關東與甲信"},
          cols:[{en:"Prefecture",ja:"都道府県",zh:"都道府縣"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Character",ja:"特徴",zh:"特徵"},{en:"Names to know",ja:"主な銘柄",zh:"值得認識的名字"}],
          jpCols:[1],
          rows:[
            [{en:"Ibaraki",ja:"茨城",zh:"茨城"},"茨城",
             {en:"Where the heirloom rice Watari-bune was revived from a gene bank in the 1980s.",ja:"一九八〇年代に遺伝資源保存機関から在来品種「渡船」が復活させられた地。",zh:"1980 年代自種原庫復育在來種「渡船」之地。"},
             "渡舟 Watari-bune · 来福 Raifuku · 郷乃譽 Sato no Homare"],
            [{en:"Tochigi",ja:"栃木",zh:"栃木"},"栃木",
             {en:"One of the most dynamic prefectures of the last twenty years, with a strong young-brewer network and a taste for high acidity.",ja:"この二十年で最も活気のある県の一つ。若手の造り手の連携が強く、高い酸を好む。",zh:"過去二十年最具活力的縣之一，年輕釀造者網絡強大，偏好高酸度。"},
             "鳳凰美田 Hōō Biden · 仙禽 Senkin · 澤姫 Sawahime"],
            [{en:"Gunma",ja:"群馬",zh:"群馬"},"群馬",
             {en:"Snowmelt off the Mikuni range; the Tone-Numata district holds a GI of its own.",ja:"三国山脈からの雪解け水。利根沼田地区は独自のGIをもつ。",zh:"來自三國山脈的雪融水；利根沼田地區擁有自己的 GI。"},
             "水芭蕉 Mizubashō · 群馬泉 Gunma-Izumi · 尾瀬の雪どけ Oze no Yukidoke"],
            [{en:"Saitama",ja:"埼玉",zh:"埼玉"},"埼玉",
             {en:"Home of the brewery that in 1987 became the first in modern Japan to go 100% junmai.",ja:"一九八七年、現代日本で最初に全量純米に踏み切った蔵の地。",zh:"1987 年成為現代日本首家全量轉為純米之酒藏的所在地。"},
             "神亀 Shinkame · 花陽浴 Hanaaba · 鏡山 Kagamiyama"],
            [{en:"Chiba",ja:"千葉",zh:"千葉"},"千葉",
             {en:"Coastal, mild, historically a supplier to Edo. Some strikingly unorthodox houses.",ja:"海に面し温暖で、歴史的には江戸への供給地。際立って異端の蔵もある。",zh:"臨海、氣候溫和，歷史上是江戶的供應地。亦有幾家格外離經叛道的酒藏。"},
             "甲子 Kinoene · 木戸泉 Kidoizumi · 寒菊 Kankiku"],
            [{en:"Tokyo",ja:"東京",zh:"東京"},"東京",
             {en:"Around ten breweries survive, mostly in the western Tama valley, using Chichibu-Okutama groundwater.",ja:"およそ十の蔵が残り、その多くは西の多摩の谷筋で、秩父奥多摩の地下水を用いる。",zh:"約十家酒藏留存，多位於西側多摩溪谷，使用秩父奧多摩的地下水。"},
             "澤乃井 Sawanoi · 嘉泉 Kasen · 屋守 Okunokami"],
            [{en:"Kanagawa",ja:"神奈川",zh:"神奈川"},"神奈川",
             {en:"Tanzawa mountain water; a small but serious scene with an emphasis on local rice contracts.",ja:"丹沢の水。小さいが真剣な産地であり、契約栽培米を重んじる。",zh:"丹澤山水；規模雖小卻認真，重視在地契作米。"},
             "泉橋 Izumibashi · 隆 Ryū · 丹沢山 Tanzawasan"],
            [{en:"Yamanashi",ja:"山梨",zh:"山梨"},"山梨",
             {en:"Both a sake GI and a wine GI. Southern-Alps meltwater, and a notable sparkling-sake specialist.",ja:"清酒とぶどう酒の双方のGIをもつ。南アルプスの雪解け水と、発泡清酒で知られる蔵がある。",zh:"同時擁有清酒與葡萄酒 GI。南阿爾卑斯的融雪水，並有一家以氣泡清酒著稱的酒藏。"},
             "七賢 Shichiken · 春鶯囀 Shun'ōten"],
            [{en:"Nagano",ja:"長野",zh:"長野"},"長野",
             {en:"Second-highest brewery count in Japan. High altitude, cold nights, the local rice Miyama Nishiki and Kinmon Nishiki, and Kyōkai No. 7's home brewery.",ja:"蔵の数は全国第二位。標高が高く夜は冷え、県産米は美山錦と金紋錦。きょうかい七号の出自の蔵もここにある。",zh:"酒藏數量全國第二。海拔高、夜間寒冷，縣產米為美山錦與金紋錦；協會七號的出處酒藏亦在此。"},
             "真澄 Masumi · 大信州 Daishinshū · 信州亀齢 Shinshū Kirei"]
          ] },

        { t:"table",
          caption:{en:"Hokuriku and Tōkai",ja:"北陸・東海",zh:"北陸與東海"},
          cols:[{en:"Prefecture",ja:"都道府県",zh:"都道府縣"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Character",ja:"特徴",zh:"特徵"},{en:"Names to know",ja:"主な銘柄",zh:"值得認識的名字"}],
          jpCols:[1],
          rows:[
            [{en:"Niigata",ja:"新潟",zh:"新潟"},"新潟",
             {en:"The most breweries in Japan, the home of Gohyakumangoku and of the <em>tanrei karakuchi</em> school — light, dry, exceptionally clean. Snowmelt water, Echigo tōji, GI since 2022.",ja:"蔵の数は全国最多。五百万石の産地であり、淡麗辛口——軽く、辛く、際立って清らか——の本場。雪解けの水、越後杜氏、二〇二二年GI登録。",zh:"酒藏數量全國最多，五百萬石的產地，也是淡麗辛口——輕盈、辛口、格外潔淨——的原鄉。雪融水、越後杜氏，2022 年獲 GI。"},
             "久保田 Kubota · 八海山 Hakkaisan · 越乃寒梅 Koshi no Kanbai · 〆張鶴 Shimeharitsuru"],
            [{en:"Toyama",ja:"富山",zh:"富山"},"富山",
             {en:"Water off the Tateyama range, extremely soft. Sake tends to be delicate, precise and quietly aromatic.",ja:"立山連峰の水は極めて軟らかい。酒質は繊細で精確、香りは静かに立つ。",zh:"源自立山連峰的水，極為柔軟。酒質細緻精確，香氣安靜地展開。"},
             "満寿泉 Masuizumi · 羽根屋 Haneya · 勝駒 Katsukoma"],
            [{en:"Ishikawa",ja:"石川",zh:"石川"},"石川",
             {en:"Home of the Noto tōji guild and of Japan's first sake GI, Hakusan (2005). Strongly associated with yamahai and kimoto: full, acidic, umami-driven.",ja:"能登杜氏の本拠であり、日本初の清酒GI「白山」（二〇〇五年）の地。山廃・生酛との結びつきが強く、厚く、酸があり、うま味が前に出る。",zh:"能登杜氏的根據地，也是日本首個清酒 GI「白山」（2005）之地。與山廢、生酛連結深厚：厚實、有酸度、旨味鮮明。"},
             "菊姫 Kikuhime · 天狗舞 Tengumai · 手取川 Tedorigawa"],
            [{en:"Fukui",ja:"福井",zh:"福井"},"福井",
             {en:"Small, cold and precise, with a strong record in export markets and at competitions.",ja:"小さく、寒く、精確。輸出市場と鑑評会の双方で実績がある。",zh:"規模小、氣候寒冷、風格精確；在出口市場與評鑑會上皆有佳績。"},
             "黒龍 Kokuryū · 梵 Born · 白岳仙 Hakugakusen"],
            [{en:"Gifu",ja:"岐阜",zh:"岐阜"},"岐阜",
             {en:"Mountainous and divided: the Hida highlands in the north brew very cold, the southern plain very differently. Takayama has been a GI district since 2005.",ja:"山がちで、南北に分かれる。北の飛騨は寒冷のなかで造り、南の平野はまったく異なる。高山は二〇〇五年以来のGI産地である。",zh:"多山且南北分明：北部飛驒高地在嚴寒中釀造，南部平原則截然不同。高山自 2005 年即為 GI 產區。"},
             "醴泉 Reisen · 蓬莱 Hōrai · 百十郎 Hyakujūrō"],
            [{en:"Shizuoka",ja:"静岡",zh:"靜岡"},"静岡",
             {en:"Defined almost entirely by its prefectural yeast series, released from the 1980s. Restrained, low-aroma, extremely clean; the antithesis of competition ginjō. GI since 2023.",ja:"一九八〇年代以降に頒布された県産酵母の系列によって、ほぼ全面的に規定される。抑制的で香りは低く、極めて清らか。鑑評会型の吟醸の対極にある。二〇二三年GI登録。",zh:"幾乎完全由 1980 年代起發布的縣產酵母系列所界定。內斂、低香氣、極度潔淨；是鑑評會型吟釀的反面。2023 年獲 GI。"},
             "磯自慢 Isojiman · 開運 Kaiun · 初亀 Hatsukame"],
            [{en:"Aichi",ja:"愛知",zh:"愛知"},"愛知",
             {en:"Historically a large producer of sweeter sake for the Nagoya market; now also the base of one of the most internationally-minded modern breweries.",ja:"歴史的には名古屋の市場に向けた甘口の大産地。現在は、最も国際志向の強い現代の蔵の一つの本拠でもある。",zh:"歷史上是為名古屋市場生產甜口酒的大產區；如今也是最具國際視野的現代酒藏之一的基地。"},
             "醸し人九平次 Kuheiji · 蓬莱泉 Hōraisen · 二兎 Nito"],
            [{en:"Mie",ja:"三重",zh:"三重"},"三重",
             {en:"Ise shrine country and a long tradition of sacred brewing; GI since 2020. Two of the most sought-after modern brands in Japan are here.",ja:"伊勢神宮の地であり、長い神事の醸造の伝統をもつ。二〇二〇年GI登録。日本で最も入手困難な現代の銘柄のうち二つがここにある。",zh:"伊勢神宮之地，擁有悠久的神事釀造傳統；2020 年獲 GI。日本最一瓶難求的兩個當代品牌坐落於此。"},
             "而今 Jikon · 作 Zaku · 瀧自慢 Takijiman"]
          ] },

        { t:"table",
          caption:{en:"Kansai",ja:"近畿",zh:"近畿"},
          cols:[{en:"Prefecture",ja:"都道府県",zh:"都道府縣"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Character",ja:"特徴",zh:"特徵"},{en:"Names to know",ja:"主な銘柄",zh:"值得認識的名字"}],
          jpCols:[1],
          rows:[
            [{en:"Shiga",ja:"滋賀",zh:"滋賀"},"滋賀",
             {en:"Lake Biwa's watershed, several of Japan's oldest surviving breweries, and the Tamazakae rice. GI since 2022.",ja:"琵琶湖の集水域。日本有数の古い蔵が現存し、酒米は玉栄。二〇二二年GI登録。",zh:"琵琶湖流域，數家日本現存最古老的酒藏，酒米為玉榮。2022 年獲 GI。"},
             "七本鎗 Shichihonyari · 松の司 Matsu no Tsukasa · 不老泉 Fusōsen"],
            [{en:"Kyoto",ja:"京都",zh:"京都"},"京都",
             {en:"Fushimi: soft <em>gokōsui</em> water, the <em>onnazake</em> tradition — silky, mildly sweet, rounded — and the second-largest production volume in Japan. GI since 2025.",ja:"伏見。軟らかい御香水と女酒の伝統——滑らかで、やや甘く、丸い——そして日本第二位の生産量。二〇二五年GI登録。",zh:"伏見：柔軟的御香水、「女酒」傳統——絲滑、微甜、圓潤——以及日本第二大的產量。2025 年獲 GI。"},
             "月桂冠 Gekkeikan · 玉乃光 Tamanohikari · 澤屋まつもと Sawaya Matsumoto"],
            [{en:"Osaka",ja:"大阪",zh:"大阪"},"大阪",
             {en:"Ikeda was one of the earliest commercial brewing towns; a handful of houses remain, including a notable organic-farming estate.",ja:"池田は最も早い商業酒造町の一つ。少数の蔵が残り、有機栽培で知られる蔵もある。",zh:"池田是最早的商業釀造市鎮之一；少數酒藏留存，其中包含一家以有機農法著稱者。"},
             "秋鹿 Akishika · 呉春 Gohshun"],
            [{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},"兵庫",
             {en:"The largest producing prefecture by far. Nada's hard miyamizu and the <em>otokozake</em> tradition; the Harima plain behind it grows the world's best Yamada Nishiki. Three separate GIs.",ja:"生産量では他を大きく引き離す首位。灘の硬い宮水と男酒の伝統。背後の播磨平野は世界最良の山田錦を産する。三つのGIをもつ。",zh:"產量遙遙領先的第一大縣。灘的硬質宮水與「男酒」傳統；其後方的播磨平原生產世界最佳的山田錦。擁有三個獨立 GI。"},
             "白鶴 Hakutsuru · 菊正宗 Kiku-Masamune · 剣菱 Kenbishi · 龍力 Tatsuriki"],
            [{en:"Nara",ja:"奈良",zh:"奈良"},"奈良",
             {en:"Where kōji brewing, bodaimoto and morohaku were all first recorded. Small output now, but historically the most important place in the entire subject.",ja:"麹による醸造、菩提酛、諸白のいずれもが最初に記録された地。現在の生産量は小さいが、この主題全体において歴史的に最も重要な場所である。",zh:"麴菌釀造、菩提酛與諸白皆最早見於記載之地。如今產量不大，但在整個主題的歷史上，是最重要的地方。"},
             "風の森 Kaze no Mori · 春鹿 Harushika · 篠峯 Shinomine"],
            [{en:"Wakayama",ja:"和歌山",zh:"和歌山"},"和歌山",
             {en:"Warm and coastal; also holds Japan's only umeshu GI.",ja:"温暖な海沿い。日本で唯一の梅酒のGIをもつ地でもある。",zh:"溫暖臨海；亦擁有日本唯一的梅酒 GI。"},
             "黒牛 Kuroushi · 紀土 KID · 車坂 Kurumazaka"]
          ] },

        { t:"table",
          caption:{en:"Chūgoku, Shikoku, Kyushu and Okinawa",ja:"中国・四国・九州・沖縄",zh:"中國地方、四國、九州與沖繩"},
          cols:[{en:"Prefecture",ja:"都道府県",zh:"都道府縣"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Character",ja:"特徴",zh:"特徵"},{en:"Names to know",ja:"主な銘柄",zh:"值得認識的名字"}],
          jpCols:[1],
          rows:[
            [{en:"Tottori",ja:"鳥取",zh:"鳥取"},"鳥取",
             {en:"Small, mountainous, and increasingly identified with kimoto, wooden vats and native rice. GI since 2025.",ja:"小さく山がちで、近年は生酛・木桶・在来品種との結びつきが強い。二〇二五年GI登録。",zh:"面積小、多山，近年與生酛、木桶及在來米種的連結日深。2025 年獲 GI。"},
             "諏訪泉 Suwaizumi · 日置桜 Hiokizakura · 千代むすび Chiyomusubi"],
            [{en:"Shimane",ja:"島根",zh:"島根"},"島根",
             {en:"Izumo, the mythological birthplace of sake. Traditionally rich and slightly sweet; a small number of uncompromising houses.",ja:"出雲——神話における酒の発祥地。伝統的に厚くやや甘い。妥協しない少数の蔵がある。",zh:"出雲——神話中酒的發源地。傳統上厚實而略甜；有少數毫不妥協的酒藏。"},
             "王祿 Ōroku · 李白 Rihaku · 天穏 Ten'on"],
            [{en:"Okayama",ja:"岡山",zh:"岡山"},"岡山",
             {en:"Grows around 90% of all Omachi, the last pre-modern rice variety in commercial use. Sake tends to be broad, earthy and generous.",ja:"商業的に用いられる最後の前近代品種、雄町のおよそ九割を産する。酒質は広く、土の香をもち、豊か。",zh:"生產約九成的雄町——商業上仍在使用的最後一個前近代品種。酒質寬闊、帶土氣、豐厚。"},
             "酒一筋 Sakehitosuji · 御前酒 Gozenshu · 竹林 Chikurin"],
            [{en:"Hiroshima",ja:"広島",zh:"廣島"},"広島",
             {en:"Very soft water, and the 1898 soft-water brewing method that is the technical ancestor of ginjō. Saijō is one of Japan's three great brewing towns; GI since 2005.",ja:"極めて軟らかい水と、吟醸の技術的祖先である一八九八年の軟水醸造法。西条は日本三大酒どころの一つであり、二〇〇五年GI登録。",zh:"極軟的水，以及作為吟釀技術祖先的 1898 年軟水釀造法。西條是日本三大酒鄉之一；2005 年獲 GI。"},
             "賀茂鶴 Kamotsuru · 賀茂泉 Kamoizumi · 富久長 Fukuchō"],
            [{en:"Yamaguchi",ja:"山口",zh:"山口"},"山口",
             {en:"Transformed within one generation by the export success of a single brewery. Now strongly associated with very highly milled, fruit-forward junmai daiginjō. Hagi has its own GI.",ja:"一つの蔵の輸出の成功によって一世代で姿を変えた県。いまは高精白・果実味主導の純米大吟醸との結びつきが強い。萩は独自のGIをもつ。",zh:"因單一酒藏的出口成功而在一代人之內改觀。如今與高度精米、果味主導的純米大吟釀連結緊密。萩擁有自己的 GI。"},
             "獺祭 Dassai · 東洋美人 Tōyō Bijin · 雁木 Gangi · 貴 Taka"],
            [{en:"Tokushima",ja:"徳島",zh:"德島"},"徳島",
             {en:"Warm, wet and mountainous. A very small industry with a reputation out of proportion to its size, built on idiosyncratic, high-acid, fruit-forward brewing that ignores the national style entirely.",ja:"温暖多雨で山がち。規模に比して評判の大きい、ごく小さな産地である。全国的な型を一切気にしない、独特で酸が高く果実味の強い造りによる。",zh:"溫暖多雨且多山。產業規模極小，名聲卻遠超其體量——建立在完全無視全國風格、奇特而高酸、果味突出的釀造之上。"},
             "三芳菊 Miyoshikiku · 芳水 Hōsui · 鳴門鯛 Narutotai"],
            [{en:"Kagawa",ja:"香川",zh:"香川"},"香川",
             {en:"The smallest prefecture in Japan, and traditional in temper. Full-bodied yamahai and long-aged junmai rather than aromatic ginjō.",ja:"日本で最も面積の小さい県であり、気風は伝統的。香り高い吟醸ではなく、厚みのある山廃と長期熟成の純米。",zh:"日本面積最小的縣，性格傳統。以厚實的山廢與長期熟成的純米為主，而非芳香型吟釀。"},
             "悦凱陣 Yorokobi Gaijin · 川鶴 Kawatsuru · 綾菊 Ayakiku"],
            [{en:"Ehime",ja:"愛媛",zh:"愛媛"},"愛媛",
             {en:"Facing the Seto Inland Sea, with its own rice varieties Shizuku-hime and Matsuyama Mii. Soft, food-oriented, built around the local fish.",ja:"瀬戸内海に面し、しずく媛・松山三井という県産米をもつ。柔らかく食に寄り添い、地の魚に合わせて造られる。",zh:"面向瀨戶內海，擁有自有米種「Shizuku 姬」與松山三井。柔軟、佐餐取向，圍繞在地魚鮮而釀。"},
             "石鎚 Ishizuchi · 賀儀屋 Kagiya · 梅錦 Umenishiki"],
            [{en:"Kōchi",ja:"高知",zh:"高知"},"高知",
             {en:"The driest sake in Japan by tradition, made for a drinking culture of long convivial sessions — and, since the 1990s, a prefectural yeast programme producing some of its most floral.",ja:"伝統的に日本で最も辛口の酒。長く賑やかに飲む文化に合わせて造られた。一方で一九九〇年代以降、県の酵母計画は日本で最も華やかな香りの酒も生んでいる。",zh:"傳統上日本最辛口的酒，配合長時間熱鬧共飲的文化而釀；而自 1990 年代起，該縣的酵母計畫也產出了日本香氣最華麗的幾款酒。"},
             "酔鯨 Suigei · 亀泉 Kameizumi · 文佳人 Bunkajin · 司牡丹 Tsukasabotan"],
            [{en:"Fukuoka",ja:"福岡",zh:"福岡"},"福岡",
             {en:"The largest sake producer in Kyushu and a significant grower of Yamada Nishiki outside Hyōgo. GI since 2025.",ja:"九州最大の清酒産地であり、兵庫県外における山田錦の重要な産地でもある。二〇二五年GI登録。",zh:"九州最大的清酒產地，也是兵庫以外重要的山田錦產區。2025 年獲 GI。"},
             "田中六五 Tanaka 65 · 三井の寿 Mii no Kotobuki · 若波 Wakanami"],
            [{en:"Saga",ja:"佐賀",zh:"佐賀"},"佐賀",
             {en:"Traditionally the sweetest and fullest sake in Japan; one modern brewery here reset expectations for the whole of Kyushu. GI since 2021.",ja:"伝統的に日本で最も甘く厚い酒質。ここの現代の一蔵が、九州全体への期待を書き換えた。二〇二一年GI登録。",zh:"傳統上是日本最甜、最厚實的酒；此地一家現代酒藏改寫了外界對整個九州的期待。2021 年獲 GI。"},
             "鍋島 Nabeshima · 東一 Azumaichi · 七田 Shichida"],
            [{en:"Nagasaki",ja:"長崎",zh:"長崎"},"長崎",
             {en:"Japan's window on foreign trade for two and a half centuries, and still the most outward-looking of the Kyushu brewing prefectures. Islands, terraced rice, and a handful of small houses.",ja:"二世紀半にわたり対外交易の窓口であり、九州の酒どころのなかで今も最も外に開いている。島々と棚田、そして少数の小さな蔵。",zh:"兩個半世紀來日本對外貿易的窗口，至今仍是九州釀酒諸縣中最為外向者。島嶼、梯田，以及少數幾家小型酒藏。"},
             "六十餘洲 Rokujūyoshū · 福鶴 Fukutsuru · 杵の川 Kinokawa"],
            [{en:"Kumamoto",ja:"熊本",zh:"熊本"},"熊本",
             {en:"Technically the most important prefecture in Kyushu: its prefectural sake research institute isolated Kyōkai No. 9, the yeast that made competition ginjō possible and dominated Japanese brewing for thirty years. Also the home of <em>kome-jōchū</em> from the Kuma valley.",ja:"技術的には九州で最も重要な県である。熊本県酒造研究所が分離した九号酵母が、鑑評会の吟醸を可能にし、三十年にわたり日本の造りを支配した。球磨の米焼酎の地でもある。",zh:"就技術而言是九州最重要的縣：其縣立酒造研究所分離出九號酵母，使鑑評會吟釀成為可能，並主導日本釀造三十年。亦是球磨米燒酎的故鄉。"},
             "香露 Kōro · 花の香 Hana no Ka · 瑞鷹 Zuiyō"],
            [{en:"Ōita",ja:"大分",zh:"大分"},"大分",
             {en:"Barley shōchū country with a persistent sake minority. Traditionally rich and sweet; several houses have moved decisively towards drier, cleaner styles since the 2000s.",ja:"麦焼酎の地でありながら、清酒の造りが少数ながら続いている。伝統的には厚く甘いが、二〇〇〇年代以降、辛口で清らかな方向へ明確に舵を切った蔵が複数ある。",zh:"大麥燒酎的地盤，清酒仍以少數之姿延續。傳統上厚實甘甜，惟自 2000 年代起已有數家酒藏果斷轉向更辛口潔淨的風格。"},
             "西の関 Nishi no Seki · ちえびじん Chiebijin · 鷹来屋 Takakiya"],
            [{en:"Miyazaki",ja:"宮崎",zh:"宮崎"},"宮崎",
             {en:"Overwhelmingly shōchū — sweet potato, barley and buckwheat — with sake surviving in a single significant house. Warm, sunny and about as far from the classical brewing climate as Japan gets.",ja:"圧倒的に焼酎の県である——芋・麦・そば。清酒は有力な一蔵に残る。温暖で日照に恵まれ、古典的な造りの気候からは日本で最も遠い部類にある。",zh:"壓倒性地屬於燒酎——番薯、大麥與蕎麥——清酒僅存於一家重要酒藏。溫暖多陽，就日本而言，離古典釀造氣候幾乎最遠。"},
             "千徳 Sentoku"],
            [{en:"Kagoshima",ja:"鹿児島",zh:"鹿兒島"},"鹿児島",
             {en:"The heartland of sweet-potato shōchū, and for most of the modern period a prefecture with no sake brewing at all. That changed recently: an established shōchū house began brewing sake in the late 2010s, using modern refrigeration to do in Kagoshima what its climate had always forbidden.",ja:"芋焼酎の中心地であり、近代の大半を通じて清酒の造りがまったく存在しなかった県である。近年それが変わった。老舗の焼酎蔵が二〇一〇年代後半に清酒の醸造を始め、冷却設備によって、気候がこれまで許さなかったことを鹿児島で行っている。",zh:"番薯燒酎的核心地帶，且在近代大半時期完全沒有清酒釀造。這在近年改變了：一家老牌燒酎酒藏於 2010 年代後期開始釀造清酒，藉現代冷卻設備，在鹿兒島做成氣候一向不允許之事。"},
             "天賦 Tenbu"],
            [{en:"Okinawa",ja:"沖縄",zh:"沖繩"},"沖縄",
             {en:"A different tradition entirely. Awamori is distilled from Thai long-grain indica rice with black kōji, in a single all-kōji mash, and aged in unglazed earthenware as <em>kūsu</em>. A single sake brewery exists on the islands; everything else here is awamori. See <a href=\"kojifamily.html\">The Kōji Family</a>.",ja:"まったく別の伝統である。泡盛はタイ産インディカ米と黒麹を用い、全量を麹とする一段仕込みで蒸留し、素焼きの甕で古酒として熟成させる。島には清酒の蔵が一つあるが、それ以外はすべて泡盛である。<a href=\"kojifamily.html\">麹の一族</a>を参照。",zh:"這是完全不同的傳統。泡盛以泰國長粒秈米與黑麴、採全量製麴的一段式仕込蒸餾而成，並於未上釉陶甕中陳放為「古酒」。島上有一家清酒藏，其餘皆為泡盛。參見<a href=\"kojifamily.html\">麴的家族</a>。"},
             "— 泡盛 awamori —"]
          ] }
      ]
    },

{ t:"section", id:"map",
      title:{ en:"The map, schematically", ja:"模式図としての地図", zh:"示意地圖" }, jp:"都道府県タイル図",
      body:[
        { t:"p", text:{
          en:"Japan's forty-seven prefectures, arranged as a tile grid rather than a coastline, and coloured by the brewing school each belongs to. A schematic map keeps every prefecture the same size, which is the honest way to show a distribution that has nothing to do with land area — Hyōgo and Niigata make more sake than Hokkaidō despite being a fraction of its size.",
          ja:"日本の四十七都道府県を、海岸線ではなくタイルの格子として並べ、それぞれが属する醸造の流派で色分けした。模式図はすべての県を同じ大きさに保つ。土地の面積とは無関係な分布を示すには、それが正直なやり方である——兵庫と新潟は、北海道のごく一部の広さでありながら、それより多くの酒を造っている。",
          zh:"日本的四十七個都道府縣，以方格瓷磚而非海岸線排列，並依各自所屬的釀造流派上色。示意地圖讓每個縣的大小相同，而這正是呈現一項與土地面積無關之分布的誠實方式——兵庫與新潟的面積只是北海道的一小部分，產酒量卻更多。" } },
        { t:"figure",
          caption:{ en:"The forty-seven prefectures as a tile grid, grouped by brewing school. North is up; Okinawa is placed at bottom left as it conventionally is on Japanese maps.",
                    ja:"四十七都道府県をタイルの格子として、醸造の流派ごとに配した図。上が北であり、沖縄は日本の地図の慣例どおり左下に置いた。",
                    zh:"以方格排列的四十七個都道府縣，依釀造流派分組。上方為北；沖繩依日本地圖慣例置於左下。" },
          svg: function(lang, L){
            var P = [
              // x, y, kanji, romaji, group
              [11,0,"北海道","Hokkaidō","snow"],
              [11,1,"青森","Aomori","snow"],
              [10,2,"秋田","Akita","snow"],   [11,2,"岩手","Iwate","yeast"],
              [10,3,"山形","Yamagata","snow"],[11,3,"宮城","Miyagi","yeast"],
              [10,4,"新潟","Niigata","snow"], [11,4,"福島","Fukushima","yeast"],
              [8,5,"石川","Ishikawa","snow"], [9,5,"富山","Toyama","snow"],
              [10,5,"群馬","Gunma","rice"],   [11,5,"栃木","Tochigi","rice"], [12,5,"茨城","Ibaraki","rice"],
              [8,6,"福井","Fukui","snow"],    [9,6,"岐阜","Gifu","rice"],
              [10,6,"長野","Nagano","snow"],  [11,6,"埼玉","Saitama","rice"], [12,6,"千葉","Chiba","rice"],
              [4,7,"島根","Shimane","moss"],  [5,7,"鳥取","Tottori","moss"],
              [6,7,"兵庫","Hyōgo","amber"],   [7,7,"京都","Kyōto","amber"],   [8,7,"滋賀","Shiga","amber"],
              [9,7,"愛知","Aichi","rice"],    [10,7,"山梨","Yamanashi","rice"],[11,7,"東京","Tōkyō","rice"],
              [3,8,"山口","Yamaguchi","moss"],[4,8,"広島","Hiroshima","moss"],[5,8,"岡山","Okayama","moss"],
              [6,8,"大阪","Ōsaka","amber"],   [7,8,"奈良","Nara","amber"],    [8,8,"三重","Mie","amber"],
              [9,8,"静岡","Shizuoka","rice"], [10,8,"神奈川","Kanagawa","rice"],
              [1,9,"長崎","Nagasaki","plum"], [2,9,"佐賀","Saga","plum"],     [3,9,"福岡","Fukuoka","plum"],
              [4,9,"愛媛","Ehime","water"],   [5,9,"香川","Kagawa","water"],  [6,9,"徳島","Tokushima","water"],
              [7,9,"和歌山","Wakayama","amber"],
              [1,10,"熊本","Kumamoto","plum"],[2,10,"大分","Ōita","plum"],    [4,10,"高知","Kōchi","water"],
              [1,11,"鹿児島","Kagoshima","plum"],[2,11,"宮崎","Miyazaki","plum"],
              [0,12,"沖縄","Okinawa","plum"]
            ];
            var FILL = { snow:"var(--h-snow)", yeast:"var(--h-yeast)", rice:"var(--h-rice)",
                         amber:"var(--h-amber)", moss:"var(--h-moss)", water:"var(--h-water)",
                         plum:"var(--h-plum)" };
            var LEG = [
              ["snow",  {en:"Snow country — tanrei",   ja:"雪国——淡麗",       zh:"雪國——淡麗"}],
              ["yeast", {en:"Tōhoku — fragrant, soft", ja:"東北——華やか・柔らか", zh:"東北——芳香柔軟"}],
              ["rice",  {en:"Kantō & Tōkai",           ja:"関東・東海",       zh:"關東與東海"}],
              ["amber", {en:"Kansai — hard water",     ja:"関西——硬水",       zh:"關西——硬水"}],
              ["moss",  {en:"Chūgoku — soft water",    ja:"中国——軟水",       zh:"中國地方——軟水"}],
              ["water", {en:"Shikoku",                 ja:"四国",             zh:"四國"}],
              ["plum",  {en:"Kyūshū & Okinawa — shōchū country", ja:"九州・沖縄——焼酎の国", zh:"九州與沖繩——燒酎之地"}]
            ];
            var TW = 48, TH = 36, GX = 3, GY = 3;
            var W = 13 * (TW + GX), H = 13 * (TH + GY) + 96;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" ' +
                    'aria-label="Tile map of the forty-seven prefectures of Japan" ' +
                    'style="font-family:var(--sans)">';
            for (var i = 0; i < P.length; i++) {
              var p = P[i], x = p[0] * (TW + GX), y = p[1] * (TH + GY);
              var ZH = { "広島":"廣島", "徳島":"德島", "静岡":"靜岡", "鹿児島":"鹿兒島", "沖縄":"沖繩" };
              var label = (lang === "en") ? p[3] : ((lang === "zh" && ZH[p[2]]) ? ZH[p[2]] : p[2]);
              var size = label.length > 8 ? 8.5 : (label.length > 4 ? 9.5 : (lang === "en" ? 10 : 12));
              s += '<rect x="' + x + '" y="' + y + '" width="' + TW + '" height="' + TH + '" ' +
                   'fill="' + FILL[p[4]] + '" stroke="var(--rule-2)" stroke-width="0.75"/>';
              s += '<text x="' + (x + TW / 2) + '" y="' + (y + TH / 2 + 4) + '" text-anchor="middle" ' +
                   'font-size="' + size + '" fill="var(--ink-2)" letter-spacing="0.02em">' + label + '</text>';
            }
            var ly = 13 * (TH + GY) + 18, lx = 0;
            for (var k = 0; k < LEG.length; k++) {
              if (k === 4) { ly += 26; lx = 0; }
              s += '<rect x="' + lx + '" y="' + (ly - 9) + '" width="12" height="12" ' +
                   'fill="' + FILL[LEG[k][0]] + '" stroke="var(--rule-2)" stroke-width="0.75"/>';
              var t = L(LEG[k][1]);
              s += '<text x="' + (lx + 18) + '" y="' + ly + '" font-size="10.5" fill="var(--ink-3)">' + t + '</text>';
              lx += 22 + t.length * (lang === "en" ? 5.6 : 11);
            }
            return s + '</svg>';
          } },
        { t:"p", text:{
          en:"Each part of the grid has a chapter of its own: <a href=\"region-north.html\">The North</a>, <a href=\"region-central.html\">Kantō &amp; the Snow Country</a>, <a href=\"region-hokuriku.html\">Hokuriku &amp; Tōkai</a>, <a href=\"region-kinki.html\">Kinki</a>, <a href=\"region-west.html\">Chūgoku &amp; Shikoku</a>, <a href=\"region-kyushu.html\">Kyūshū &amp; Okinawa</a>. The colour groups above and the chapter boundaries are close but not identical — the chapters follow administrative regions so that a reader can find a prefecture, while the colours follow brewing practice, and the two disagree most around Niigata, Nagano and Mie.",
          ja:"格子のそれぞれの部分に一つの章がある。<a href=\"region-north.html\">北日本</a>、<a href=\"region-central.html\">関東と雪国</a>、<a href=\"region-hokuriku.html\">北陸と東海</a>、<a href=\"region-kinki.html\">近畿</a>、<a href=\"region-west.html\">中国と四国</a>、<a href=\"region-kyushu.html\">九州と沖縄</a>である。上の色の群と章の境は近いが同一ではない。章は読み手が県を探しうるよう行政の地方に従い、色は醸造の実際に従う。二つが最も食い違うのは新潟、長野、三重のあたりである。",
          zh:"格子的每一個部分都有自己的一章：<a href=\"region-north.html\">北日本</a>、<a href=\"region-central.html\">關東與雪國</a>、<a href=\"region-hokuriku.html\">北陸與東海</a>、<a href=\"region-kinki.html\">近畿</a>、<a href=\"region-west.html\">中國地方與四國</a>、<a href=\"region-kyushu.html\">九州與沖繩</a>。上方的顏色分組與章節的界線相近但不完全相同——章節依行政區劃分，好讓讀者找得到某個縣；顏色則依釀造實務劃分，而兩者分歧最大的地方，是新潟、長野與三重一帶。" } },
        { t:"note", label:{en:"What the colours are and are not",ja:"色が示すもの、示さぬもの",zh:"顏色代表什麼、不代表什麼"}, text:{
          en:"The groupings are conventional shorthand for water, climate and inherited technique, not a classification anyone enforces. Every group contains breweries that make the opposite of what the group implies, and a modern brewery with refrigeration can aim at any style from anywhere. Read the map as a description of what each region has historically found easy, not as a prediction about any particular bottle.",
          ja:"この区分は、水と気候と受け継がれた技術についての慣用的な略記であり、誰かが強制する分類ではない。どの群にも、その群が含意するものと正反対の酒を造る蔵がある。冷却設備をもつ現代の蔵は、どこからでもどんな酒質をも目指しうる。この地図は、それぞれの地域が歴史的に何を容易としてきたかの記述として読むべきであり、個々の一本についての予言として読むべきではない。",
          zh:"這些分組是關於水、氣候與承襲技法的慣用簡記，並非任何人強制執行的分類。每一組之中都有酒藏釀出與該組意涵完全相反的酒；而擁有冷卻設備的現代酒藏，身在何處都能瞄準任何風格。請把這張地圖讀作「各地區歷史上覺得容易做什麼」的描述，而非對某一瓶酒的預測。" } }
      ]
    },

    { t:"related", items:[
      { href:"terroir.html", why:{ en:"Whether the differences between them are real.", ja:"それらの違いが実在するか否か。", zh:"它們之間的差異是不是真的。" } },
      { href:"gi.html", why:{ en:"The ones that have been formalised, and how.", ja:"そのうち制度化されたものと、その仕方。", zh:"其中哪些已經被制度化，以及怎麼制度化的。" } },
      { href:"itineraries.html", why:{ en:"How to see several of them in one trip.", ja:"一度の旅でいくつかを見る方法。", zh:"如何在一趟旅程裡看到其中幾個。" } },
      { href:"breweries.html", why:{ en:"The named houses inside each of them.", ja:"その各々のうちにある、名のある蔵。", zh:"每一個地方裡那些有名字的酒藏。" } }
    ] }
  ]
};


/* ---- ---------------------------------------- region-north */
SAKE.pages["region-north"] = {
  kicker: { en: "Place · 03", ja: "産地 · 03", zh: "產地 · 03" },
  title:  { en: "The North", ja: "北日本", zh: "北日本" },
  jp: "北海道・東北",
  lede: {
    en: "Hokkaidō and the six Tōhoku prefectures are the coldest brewing country in Japan and, in the last forty years, the most consistently decorated. The region shares deep snow, soft snowmelt water, late harvests and a shortage of the classic sake rices — and it has answered that shortage by breeding its own, prefecture by prefecture, more systematically than anywhere else. This page takes each of the seven in turn: the water, the rice, the yeast, the guild, the house style, and what to look for.",
    ja: "北海道と東北六県は日本で最も寒い酒どころであり、この四十年で最も安定して評価されてきた地域でもある。共有するのは深い雪、軟らかな雪解け水、遅い収穫、そして古典的な酒米の不足である。そしてこの地域は、その不足に対し、他のどこよりも体系的に、県ごとに自らの米を育てることで応えてきた。このページは七つを順に扱う——水、米、酵母、杜氏集団、酒質の型、そして何を探すべきか。",
    zh: "北海道與東北六縣是日本最寒冷的釀酒地帶，也是過去四十年間獲獎最穩定的地區。這裡共有的是厚雪、柔軟的融雪水、較晚的收成，以及經典酒米的匱乏——而這個地區對此的回應，是比任何地方都更有系統地、一縣一縣培育出自己的米。本頁依序處理這七個地方：水、米、酵母、杜氏集團、酒質風格，以及該找什麼。"
  },
  body: [

    { t:"section", id:"common",
      title:{ en:"What the north has in common", ja:"北が共有するもの", zh:"北方共有的東西" }, jp:"共通点",
      body:[
        { t:"figure",
          caption:{
            en:"Seven prefectures, seven rices, and a single decade. Because Yamada Nishiki will not ripen reliably this far north, every northern prefecture ran its own breeding programme through the 1990s, and the results arrived within a few years of one another. Where the line is drawn, it runs from the first cross to the year the variety was adopted; a breeding programme of this kind takes ten to fifteen years, which means the decisions behind this chart were taken in the mid-1980s, when almost nobody outside Japan was drinking premium sake at all.",
            ja:"七つの県、七つの米、そして一つの十年。山田錦がここまで北では安定して実らないため、北の各県は一九九〇年代を通じてそれぞれの育種の事業を進め、その成果は数年のうちに相次いで現れた。線の引かれているものは、最初の交配からその品種が採用された年までを示す。この種の育種には十年から十五年を要する。つまり、この図の背後にある決断は一九八〇年代半ばに下されたのであり、その頃、日本の外で上等な日本酒を飲んでいる者はほとんどいなかった。",
            zh:"七個縣、七種米，以及同一個十年。由於山田錦在這麼北的地方無法穩定成熟，北方各縣在整個一九九〇年代各自推動自己的育種計畫，而成果在數年之內相繼出現。有畫出線段者，是從最初的雜交到該品種被採用的那一年；這類育種計畫需要十到十五年——也就是說，這張圖背後的決定是在一九八〇年代中期下的，而當時，日本以外幾乎沒有人在喝高級清酒。" },
          svg: function (lang, L) {
            var W = 760, H = 370, X0 = 300, X1 = 712, Y0 = 74, RH = 32, A = 1984, B = 2008;
            function px(y) { return X0 + (y - A) / (B - A) * (X1 - X0); }
            var rows = [
              { pref:"山形", rice:"出羽燦々", rom:"Dewasansan", cross:1985, year:1997 },
              { pref:"宮城", rice:"蔵の華", rom:"Kura no Hana", year:1997 },
              { pref:"岩手", rice:"吟ぎんが", rom:"Ginginga", cross:1991, year:1998 },
              { pref:"北海道", rice:"吟風", rom:"Ginpū", year:2000 },
              { pref:"福島", rice:"夢の香", rom:"Yume no Ka", cross:1991, year:2000 },
              { pref:"秋田", rice:"秋田酒こまち", rom:"Akita Sake Komachi", year:2001 },
              { pref:"青森", rice:"華想い", rom:"Hanaomoi", year:2006 }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + rows.length * RH, t, i;
            for (t = 1985; t <= 2005; t += 5) {
              s += '<line x1="' + px(t).toFixed(1) + '" y1="' + (Y0 - 10) + '" x2="' + px(t).toFixed(1) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(t).toFixed(1) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + t + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], y = Y0 + i * RH;
              s += '<text x="' + (X0 - 20) + '" y="' + (y + 12) + '" text-anchor="end" font-size="12" fill="#201E1B">' + r.pref + ' · ' + r.rice + '</text>';
              s += '<text x="' + (X0 - 20) + '" y="' + (y + 25) + '" text-anchor="end" font-size="9" fill="#8B857C">' + r.rom + '</text>';
              if (r.cross) {
                s += '<line x1="' + px(r.cross).toFixed(1) + '" y1="' + (y + 12) + '" x2="' + px(r.year).toFixed(1) + '" y2="' + (y + 12) + '" stroke="#CDC6B9" stroke-width="2"/>';
                s += '<rect x="' + (px(r.cross) - 2.5).toFixed(1) + '" y="' + (y + 8) + '" width="5" height="8" fill="#CDC6B9"/>';
                s += '<text x="' + (px(r.cross) - 8).toFixed(1) + '" y="' + (y + 16) + '" text-anchor="end" font-size="9" fill="#ADA79E">' + r.cross + '</text>';
              }
              s += '<rect x="' + (px(r.year) - 5).toFixed(1) + '" y="' + (y + 7) + '" width="10" height="10" fill="#B09E7C"/>';
              s += '<text x="' + (px(r.year) + 12).toFixed(1) + '" y="' + (y + 16) + '" font-size="10.5" fill="#55504A">' + r.year + '</text>';
            }
            s += '<text x="' + (X0 - 20) + '" y="' + (Y0 - 16) + '" text-anchor="end" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "県と、その米" : lang === "zh" ? "縣，與它的米" : "PREFECTURE AND ITS RICE") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 16) + '" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "最初の交配から、採用の年へ" : lang === "zh" ? "自最初雜交，至被採用之年" : "FROM THE FIRST CROSS TO THE YEAR IT WAS ADOPTED") + '</text>';
            s += '<text x="30" y="' + (H - 24) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "年の根拠は県により異なる——品種登録、奨励品種への採用、育成の完了。いずれもその米が公に存在したと言える最初の年である。"
                  : lang === "zh" ? "年份的依據因縣而異——品種登記、列入獎勵品種、育成完成。三者都代表該品種在公開紀錄上首次存在的那一年。"
                  : "The basis differs by prefecture — variety registration, adoption onto the recommended list, or completion of breeding.") + '</text>';
            s += '<text x="30" y="' + (H - 9) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "交配の年が記されていない米については、公表された記録に見当たらなかったというにすぎない。"
                  : lang === "zh" ? "未標示雜交年份者，只是表示公開紀錄中查不到，並非沒有。"
                  : "Each is the first year the rice existed publicly; where no cross year is drawn, it was not in the published record.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Water", ja:"水", zh:"水" }, jp:"雪解けの軟水",
            v:{ en:"Soft, and abundant", ja:"軟らかく、豊かに", zh:"軟，而且充沛" },
            d:{ en:"Deep snowpack on the Ōu and Dewa ranges recharges soft aquifers across the whole region. Soft water ferments slowly and gently, which is the technical basis of the rounder, gentler northern style — and the reason Tōhoku sake reads differently from Niigata's despite a comparable climate.",
              ja:"奥羽・出羽の山々の厚い積雪が、地域全体の軟らかな帯水層を涵養する。軟水は緩やかに、穏やかに発酵し、それが北のより丸く穏やかな型の技術的な基礎である。気候の近い新潟と東北の酒が異なって読まれる理由でもある。",
              zh:"奧羽與出羽山脈的厚實積雪，涵養了整個地區的軟質含水層。軟水發酵得緩慢而溫和，這正是北方那種較圓潤、較柔和風格的技術基礎——也是東北清酒儘管氣候與新潟相近、讀來卻不同的原因。" } },
          { k:{ en:"Cold", ja:"寒さ", zh:"寒冷" }, jp:"寒造りの本場",
            v:{ en:"A free ginjō ferment", ja:"無償の吟醸発酵", zh:"免費的吟釀發酵" },
            d:{ en:"Everything the ginjō method needs — low temperature held steadily for a month, low airborne microbial load — the northern winter supplies without machinery. It is the oldest advantage in Japanese brewing and the one refrigeration has most thoroughly cancelled, which is why the north has had to compete on rice and yeast instead.",
              ja:"吟醸造りが求めるもののすべて——一か月にわたり安定して保たれる低温、空中の雑菌の少なさ——を、北の冬は機械なしに供給する。日本の酒造りにおいて最も古い優位であり、冷却設備が最も徹底して打ち消した優位でもある。北が代わりに米と酵母で競わねばならなくなった理由である。",
              zh:"吟釀工法所需要的一切——連續一個月穩定維持的低溫、空氣中稀少的雜菌——北方的冬天不靠機器就能提供。這是日本釀酒最古老的優勢，也是被冷卻設備抵銷得最徹底的優勢；這正是北方不得不改以米與酵母來競爭的原因。" } },
          { k:{ en:"Bred rice", ja:"育てた米", zh:"育成的米" }, jp:"県産酒米",
            v:{ en:"Every prefecture has its own", ja:"どの県も自前を持つ", zh:"每個縣都有自己的" },
            d:{ en:"Yamada Nishiki will not ripen reliably this far north, so each prefecture has bred its own sake rice — Dewasansan in Yamagata, Akita Sake Komachi, Ginginga in Iwate, Kura no Hana in Miyagi, Ginpū in Hokkaidō. These programmes, mostly from the 1990s onward, are the single clearest case of regional identity being deliberately manufactured rather than inherited.",
              ja:"山田錦はここまで北では安定して実らない。ゆえに各県が自らの酒米を育ててきた——山形の出羽燦々、秋田酒こまち、岩手の吟ぎんが、宮城の蔵の華、北海道の吟風。多くは一九九〇年代以降のこれらの事業は、地域の輪郭が受け継がれたのではなく意図して製造されたことの、最も明快な例である。",
              zh:"山田錦在這麼北的地方無法穩定成熟，因此各縣都育出了自己的酒米——山形的出羽燦燦、秋田酒小町、岩手的吟銀河、宮城的藏之華、北海道的吟風。這些多半始於一九九〇年代之後的計畫，是「地域身分被刻意製造而非繼承」最清楚的例證。" } },
          { k:{ en:"Guilds", ja:"杜氏集団", zh:"杜氏集團" }, jp:"南部・山内",
            v:{ en:"Nanbu and Yamauchi", ja:"南部と山内", zh:"南部與山內" },
            d:{ en:"The Nanbu guild of Iwate is the largest in Japan and staffed breweries far beyond its home prefecture; Akita's Yamauchi guild is smaller and more local. Between them they set the technical vocabulary of northern brewing, and the modern owner-brewer generation in the region mostly learned from someone who learned in one of the two.",
              ja:"岩手の南部杜氏は日本最大の集団であり、本拠をはるかに越えて蔵を担った。秋田の山内杜氏はより小さく、より土着である。両者が北の酒造りの技術的な語彙を定め、この地域の現代の蔵元杜氏の世代は、その多くが、二つのいずれかで学んだ者から学んでいる。",
              zh:"岩手的南部杜氏是日本規模最大的集團，所支撐的酒藏遠超出本縣；秋田的山內杜氏規模較小、也更在地。兩者共同奠定了北方釀造的技術語彙，而本地區當代的藏元杜氏世代，多半師承於在這兩者之一學過藝的人。" } }
        ] }
      ] },

    { t:"section", id:"hokkaido",
      title:{ en:"Hokkaidō", ja:"北海道", zh:"北海道" }, jp:"北海道",
      body:[
        { t:"p", text:{
          en:"Japan's northernmost brewing country, and until recently its least regarded — not for want of cold or clean water, but for want of rice that would ripen. Hokkaidō's whole modern sake story is a plant-breeding story.",
          ja:"日本最北の酒どころであり、近年まで最も評価されなかった土地でもある。寒さや清らかな水が足りなかったのではなく、実る米が足りなかったのである。北海道の現代の酒の物語の全体は、育種の物語である。",
          zh:"日本最北的釀酒之地，直到晚近仍是最不受重視的——不是因為缺少寒冷或潔淨的水，而是因為缺少能夠成熟的米。北海道現代清酒的整個故事，就是一則育種的故事。" } },
        { t:"defs", items:[
          { term:{ en:"Water and climate", ja:"水と気候", zh:"水與氣候" }, jp:"雪と伏流水", romaji:"yuki to fukuryūsui",
            def:{ en:"Snowmelt filtered through volcanic ground, generally soft and very clean, with a winter long and cold enough that temperature control is a matter of keeping the mash warm enough rather than cool enough. Several breweries use a <em>yuki-muro</em>, a snow store, for cold maturation through the summer.",
              ja:"火山質の地を通って濾された雪解け水であり、おおむね軟らかく、きわめて清らかである。冬は長く寒く、温度管理はむしろ醪を冷やしすぎないための管理となる。夏を越す低温貯蔵に雪室を用いる蔵もいくつかある。",
              zh:"經火山地層過濾的融雪水，普遍偏軟且極為潔淨；冬季漫長寒冷，以致溫控的課題反而是「別讓醪太冷」而非「別太熱」。有數家酒藏利用「雪室」進行夏季的低溫熟成。" } },
          { term:{ en:"The rice problem, solved", ja:"米の問題、解決", zh:"米的難題，解決了" }, jp:"吟風・彗星・きたしずく", romaji:"Ginpū, Suisei, Kita-shizuku",
            def:{ en:"Before 2000 Hokkaidō had no sake rice of its own and imported from Honshū. Ginpū was released around the turn of the century, Suisei in the mid-2000s and Kita-shizuku in the mid-2010s, each bred for the short northern season. Serious Hokkaidō sake is essentially a twenty-first-century phenomenon, and the reason is these three names.",
              ja:"二〇〇〇年以前、北海道に自前の酒米はなく、本州から移入していた。吟風は世紀の変わり目ごろ、彗星は二〇〇〇年代半ば、きたしずくは二〇一〇年代半ばに世に出た。いずれも北の短い季節のために育てられている。本格的な北海道の酒が実質的に二十一世紀の現象である理由は、この三つの名にある。",
              zh:"二〇〇〇年以前，北海道沒有自己的酒米，須自本州調入。吟風於世紀之交前後問世，彗星在二〇〇〇年代中期，北之雫在二〇一〇年代中期，各自為北方短暫的生長季而育成。正規的北海道清酒實質上是二十一世紀的現象，原因就在這三個名字。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"男山・国稀・上川大雪", romaji:"Otokoyama, Kunimare, Kamikawa Taisetsu",
            def:{ en:"Otokoyama at Asahikawa is the long-established international name, with a museum and a decades-long record at overseas competitions. Kunimare at Mashike is Japan's northernmost brewery, a herring-boom town business that survived the herring. Kamikawa Taisetsu, founded in the mid-2010s, is one of the very few genuinely new sake breweries in modern Japan and exists because the licensing arithmetic worked out in a place with almost no competition.",
              ja:"旭川の男山は古くからの国際的な名であり、資料館を持ち、海外の品評会で数十年の記録を持つ。増毛の国稀は日本最北の蔵であり、鰊景気の町の商いが鰊のあとも生き延びたものである。二〇一〇年代半ばに創業した上川大雪は、現代の日本でまことに稀な新設の清酒の蔵であり、競合のほとんどない土地で免許の算術が成り立ったがゆえに存在する。",
              zh:"旭川的男山是歷史悠久的國際名字，設有資料館，並在海外評鑑上有數十年的紀錄。增毛的國稀是日本最北的酒藏，一門在鯡魚榮景中誕生、並在鯡魚之後倖存下來的生意。二〇一〇年代中期創業的上川大雪，是現代日本極為罕見的新設清酒藏，它之所以存在，是因為在一個幾乎沒有競爭的地方，執照的算術剛好行得通。" } }
        ] }
      ] },

    { t:"section", id:"aomori",
      title:{ en:"Aomori", ja:"青森", zh:"青森" }, jp:"青森県",
      body:[
        { t:"defs", items:[
          { term:{ en:"Water and climate", ja:"水と気候", zh:"水與氣候" }, jp:"白神・八甲田", romaji:"Shirakami, Hakkōda",
            def:{ en:"Some of the heaviest snowfall in Japan, and water from the Shirakami beech forest and the Hakkōda massif — soft, low in iron, and available in quantity. The cold is severe enough that the brewing season effectively runs itself.",
              ja:"日本有数の豪雪と、白神のブナの森および八甲田の山塊からの水——軟らかく、鉄が少なく、量に恵まれる。寒さは厳しく、造りの季は事実上ひとりでに回る。",
              zh:"日本數一數二的豪雪，以及來自白神山地山毛櫸林與八甲田山塊的水——軟、含鐵低、水量充沛。寒冷之嚴峻，使釀造季幾乎能自己運轉起來。" } },
          { term:{ en:"Rice and yeast", ja:"米と酵母", zh:"米與酵母" }, jp:"華吹雪・華想い", romaji:"Hanafubuki, Hanaomoi",
            def:{ en:"Hanafubuki is the workhorse, Hanaomoi the high-polish variety bred for daiginjō, and the prefecture also maintains its own yeast programme. Aomori was designated a geographical indication for sake in 2025, one of the most recent additions to the register.",
              ja:"華吹雪が主力、華想いは大吟醸のために育てられた高精白向きの品種であり、県は独自の酵母事業も維持している。青森は二〇二五年に清酒の地理的表示に指定された。登録のうち最も新しいものの一つである。",
              zh:"華吹雪是主力品種，華想則是為大吟釀而育、適合高精白的品種；本縣同時維持自有的酵母計畫。青森於二〇二五年獲指定為清酒地理標示，是登錄中最新的幾個之一。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"田酒・豊盃・陸奥八仙", romaji:"Denshu, Hōhai, Mutsu Hassen",
            def:{ en:"Denshu — “rice-field sake” — declared in the 1970s that it would make junmai only, at a time when that was an eccentric position, and became one of the founding names of the jizake movement. Hōhai grows its own eponymous rice variety, which almost nobody else uses. Mutsu Hassen at Hachinohe is the modern, food-facing end of the prefecture.",
              ja:"田酒——田の酒——は一九七〇年代に純米のみを造ると宣言した。当時それは風変わりな立場であり、そして地酒運動の礎の名の一つとなった。豊盃は同名の米を自ら育て、それを用いる者は他にほとんどいない。八戸の陸奥八仙は、この県の現代的で、食に向かう側である。",
              zh:"田酒——「田裡的酒」——在一九七〇年代宣示只做純米，當時這是相當特立獨行的立場，而它也成為地酒運動的奠基名字之一。豐盃自行栽培同名的米種，幾乎沒有別家在用。八戶的陸奧八仙，則是這個縣現代、面向餐桌的那一端。" } }
        ] }
      ] },

    { t:"section", id:"iwate",
      title:{ en:"Iwate", ja:"岩手", zh:"岩手" }, jp:"岩手県",
      body:[
        { t:"defs", items:[
          { term:{ en:"The guild's home ground", ja:"杜氏集団の本拠", zh:"杜氏集團的本據" }, jp:"南部杜氏", romaji:"Nanbu tōji",
            def:{ en:"Ishidoriya in Hanamaki is the headquarters of the Nanbu guild, the largest in Japan — organised as a union in 1914, reconstituted as the present association in 1948, and running its own self-brewed sake appraisal whose hundredth edition was held in 2019. For most of the twentieth century Nanbu tōji staffed breweries in a dozen prefectures, which means Iwate exported technique long before it exported sake.",
              ja:"花巻の石鳥谷は、日本最大の集団である南部杜氏の本拠である。大正三年（1914）に組合として組織され、昭和二十三年（1948）に現在の協会として再編され、独自の自醸清酒鑑評会を運営する。その第百回は平成三十一年（2019）に開かれた。二十世紀の大半を通じて南部杜氏は十数県の蔵を担った。岩手は酒を輸出するはるか以前から、技を輸出していたのである。",
              zh:"花卷的石鳥谷是日本規模最大之南部杜氏集團的本部——一九一四年組成組合，一九四八年重整為現今協會，並主辦自家的自釀清酒鑑評會，第一百回於二〇一九年舉行。二十世紀的大部分時間裡，南部杜氏支撐著十幾個縣的酒藏；這意味著岩手輸出技術，遠早於它輸出清酒。" } },
          { term:{ en:"Water and rice", ja:"水と米", zh:"水與米" }, jp:"吟ぎんが・結の香", romaji:"Ginginga, Yui no Ka",
            def:{ en:"Water from the Kitakami river system and the Hayachine massif. Ginginga is the everyday prefectural sake rice and Yui no Ka the premium one, bred for deep polishing. Iwate was designated a geographical indication in 2023.",
              ja:"北上川水系と早池峰の山塊からの水。吟ぎんがが県の日常の酒米、結の香が深い精米のために育てられた上位の品種である。岩手は二〇二三年に地理的表示に指定された。",
              zh:"水來自北上川水系與早池峰山塊。吟銀河是本縣日常的酒米，結之香則是為深度精米而育的高階品種。岩手於二〇二三年獲指定為地理標示。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"南部美人・AKABU・酔仙", romaji:"Nanbu Bijin, AKABU, Suisen",
            def:{ en:"Nanbu Bijin at Ninohe is among the most export-minded breweries in Japan and an early adopter of a formal vegan certification. AKABU and Suisen are both rebuilding stories: their coastal towns were destroyed by the 2011 tsunami, and both breweries were re-established inland or on new ground. Iwate is the prefecture where the industry's fragility and its stubbornness are most visible in the same place.",
              ja:"二戸の南部美人は日本で最も輸出に意識的な蔵の一つであり、公式なヴィーガン認証を早くから取った。AKABUと酔仙はいずれも再建の物語である。海沿いの町は二〇一一年の津波に破壊され、両蔵は内陸に、あるいは新たな地に建て直された。この産業の脆さと頑固さが同じ場所で最もよく見える県が、岩手である。",
              zh:"二戶的南部美人是日本最具出口意識的酒藏之一，也很早就取得了正式的純素認證。AKABU 與醉仙都是重建的故事：它們所在的沿海城鎮毀於二〇一一年的海嘯，兩家酒藏分別在內陸或新的土地上重新建立。在岩手，這個產業的脆弱與固執，在同一個地方看得最清楚。" } }
        ] }
      ] },

    { t:"section", id:"miyagi",
      title:{ en:"Miyagi", ja:"宮城", zh:"宮城" }, jp:"宮城県",
      body:[
        { t:"defs", items:[
          { term:{ en:"The prefecture that chose junmai", ja:"純米を選んだ県", zh:"選擇了純米的縣" }, jp:"純米酒の県", romaji:"junmaishu no ken",
            def:{ en:"In the 1980s Miyagi's breweries collectively committed to making only designated sake, with junmai at the centre — a declaration made at a moment when triple-volume sake was still legal and cheap sake still dominated. It was a bet on quality over volume a decade before the industry generally made it, and it gave the prefecture a coherent identity that survives today.",
              ja:"一九八〇年代、宮城の蔵は特定名称酒のみを造ることを共同で決め、純米をその中心に据えた。三倍増醸酒がなお合法であり、安価な酒がなお支配していた時期の宣言である。業界一般がそれを行う十年前に、量より質へ賭けたのであり、そこから生まれた県としての一貫した輪郭は、今日まで残っている。",
              zh:"一九八〇年代，宮城的酒藏集體承諾只做特定名稱酒，並以純米為核心——這項宣示做出時，三倍增釀酒仍屬合法，廉價酒仍占主導。這是比整個產業早了十年、押注品質而非數量的決定，也讓這個縣獲得了延續至今的一貫身分。" } },
          { term:{ en:"Water, rice, yeast", ja:"水・米・酵母", zh:"水、米、酵母" }, jp:"蔵の華", romaji:"Kura no Hana",
            def:{ en:"Water from the Zaō and Kurikoma volcanoes. Kura no Hana is the prefectural sake rice, and Miyagi also gave the industry Kyōkai No. 12, isolated from a Shiogama brewery. Sasanishiki, the famous Miyagi eating rice, is used by some brewers as a deliberately non-standard choice.",
              ja:"蔵王と栗駒の火山からの水。県の酒米は蔵の華であり、宮城はまた塩竈の蔵から分離されたきょうかい12号を業界に与えた。宮城の名高い食用米ササニシキを、あえて標準から外れた選択として用いる造り手もいる。",
              zh:"水來自藏王與栗駒火山。縣產酒米是藏之華；宮城也為業界貢獻了自鹽釜某酒藏分離出的協會 12 號。宮城著名的食用米笹錦，則被部分釀造者當作刻意偏離標準的選擇來使用。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"浦霞・一ノ蔵・伯楽星", romaji:"Urakasumi, Ichinokura, Hakurakusei",
            def:{ en:"Urakasumi at Shiogama is the old prestige name and the source of Kyōkai No. 12. Ichinokura was formed in 1973 by four breweries merging rather than closing — a rare structural answer to the industry's decline. Hakurakusei's stated aim, the ultimate sake to drink with food, is one of the clearest brand positions anywhere in the category.",
              ja:"塩竈の浦霞は古くからの名門であり、きょうかい12号の出どころである。一ノ蔵は昭和四十八年（1973）に、閉じるのではなく四つの蔵が合併して生まれた。産業の衰退に対する稀な構造的な答えである。伯楽星の掲げる「究極の食中酒」という目標は、この分野のどこを見ても最も明快なブランドの立ち位置の一つである。",
              zh:"鹽釜的浦霞是老牌名門，也是協會 12 號的出處。一之藏於一九七三年由四家酒藏合併而非關門而成立——這是面對產業衰退時罕見的結構性解答。伯樂星所標舉的「究極佐餐酒」目標，是這個領域中最清晰的品牌定位之一。" } }
        ] }
      ] },

    { t:"section", id:"akita",
      title:{ en:"Akita", ja:"秋田", zh:"秋田" }, jp:"秋田県",
      body:[
        { t:"defs", items:[
          { term:{ en:"Water and climate", ja:"水と気候", zh:"水與氣候" }, jp:"白神・鳥海", romaji:"Shirakami, Chōkai",
            def:{ en:"Extremely soft water from the Shirakami and Chōkai ranges, and one of the snowiest climates in Japan. Akita's traditional style is fuller and softer than Niigata's — the same cold, but much softer water and a different guild.",
              ja:"白神と鳥海の山々からのきわめて軟らかな水と、日本有数の豪雪。秋田の伝統的な型は新潟より厚く柔らかい。同じ寒さでありながら、水がはるかに軟らかく、杜氏集団が異なるのである。",
              zh:"來自白神與鳥海山脈的極軟水質，以及日本數一數二的多雪氣候。秋田的傳統風格比新潟更飽滿柔軟——同樣的寒冷，但水軟得多，杜氏集團也不同。" } },
          { term:{ en:"Rice and yeast", ja:"米と酵母", zh:"米與酵母" }, jp:"秋田酒こまち・AK-1", romaji:"Akita Sake Komachi, AK-1",
            def:{ en:"Akita Sake Komachi is the prefectural rice; AK-1 is the prefectural yeast, released in the 1990s and one of the strains that defined the aromatic style of that decade. The combination is deliberate: a prefecture designing both halves of its own signature.",
              ja:"県の米は秋田酒こまち、県の酵母はAK-1であり、一九九〇年代に世に出て、その十年の香り高い型を定義した株の一つである。組み合わせは意図されている——県が自らの署名の両半分を設計しているのである。",
              zh:"縣產米是秋田酒小町；縣產酵母是 AK-1，於一九九〇年代問世，是定義了那個十年芳香風格的菌株之一。這組配對是刻意的：一個縣同時設計了自身署名的兩個半邊。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"新政・飛良泉・雪の茅舎", romaji:"Aramasa, Hiraizumi, Yuki no Bosha",
            def:{ en:"Aramasa in Akita city is where Kyōkai No. 6 was isolated in 1930, and the brewery has since rebuilt its entire range around that yeast, all-junmai brewing and wooden vats — the emblematic revivalist house. Hiraizumi at Nikaho, founded in the late fifteenth century, is among the oldest breweries in Japan and a yamahai specialist. Yuki no Bosha is the quiet, precise counterweight to both.",
              ja:"秋田市の新政は、昭和五年（1930）にきょうかい6号が分離された蔵であり、以後その酵母と全量純米、木桶を軸に品揃えの全体を組み直した。復古派を象徴する蔵である。にかほの飛良泉は十五世紀末の創業で、日本で最も古い蔵の一つであり、山廃の名手である。雪の茅舎は、その双方に対する静かで精緻な対の重しである。",
              zh:"秋田市的新政是一九三〇年分離出協會 6 號之處，此後圍繞這株酵母、全量純米與木桶重建了整條產品線——復古派的象徵性酒藏。仁賀保的飛良泉創業於十五世紀末，是日本最古老的酒藏之一，也是山廢的能手。雪之茅舍則是對這兩者安靜而精確的配重。" } }
        ] }
      ] },

    { t:"section", id:"yamagata",
      title:{ en:"Yamagata", ja:"山形", zh:"山形" }, jp:"山形県",
      body:[
        { t:"defs", items:[
          { term:{ en:"The first whole-prefecture GI", ja:"最初の県全域の地理的表示", zh:"第一個全縣範圍的 GI" }, jp:"GI山形", romaji:"GI Yamagata",
            def:{ en:"Yamagata was designated a geographical indication for sake in 2016 — the first time an entire prefecture was granted one, and the model for the wave of prefectural GIs that followed. The designation was possible because the prefecture already had what a GI requires: a shared rice, a shared yeast, a shared technical standard and a body willing to enforce it.",
              ja:"山形は二〇一六年に清酒の地理的表示に指定された。県全域が指定された最初の例であり、以後の県単位の地理的表示の波の範型となった。指定が可能であったのは、県がすでに地理的表示の要するものを持っていたからである——共有された米、共有された酵母、共有された技術の基準、そしてそれを担保する意思を持つ組織。",
              zh:"山形於二〇一六年獲指定為清酒地理標示——這是首次有一整個縣獲得此資格，也成為其後那波縣級 GI 的範本。之所以可行，是因為這個縣已經具備 GI 所要求的東西：共通的米、共通的酵母、共通的技術標準，以及一個願意執行它的組織。" } },
          { term:{ en:"Rice and yeast", ja:"米と酵母", zh:"米與酵母" }, jp:"出羽燦々・雪女神", romaji:"Dewasansan, Yuki Megami",
            def:{ en:"Dewasansan, released in the 1990s, was the prefecture's first fully home-bred sake rice; Yuki Megami followed as a high-polish variety aimed squarely at daiginjō. The prefectural yeast programme runs alongside, and a Yamagata sake made with Yamagata rice, Yamagata yeast and Yamagata water is a formal category rather than a marketing phrase.",
              ja:"一九九〇年代に世に出た出羽燦々は、県が完全に自ら育てた最初の酒米である。雪女神が高精白の品種として続き、まっすぐ大吟醸を狙う。県の酵母事業がそれと並走し、山形の米・山形の酵母・山形の水で造られた山形の酒は、宣伝の文句ではなく正式な区分である。",
              zh:"一九九〇年代問世的出羽燦燦，是本縣第一款完全自主育成的酒米；其後的雪女神則是直指大吟釀的高精白品種。縣級酵母計畫與之並行；而以山形的米、山形的酵母、山形的水釀成的山形之酒，是一個正式的類別，不是行銷用語。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"十四代・出羽桜・楯野川", romaji:"Jūyondai, Dewazakura, Tatenokawa",
            def:{ en:"Jūyondai is the most sought-after and least obtainable name in modern sake, and largely responsible for the current shape of the collector market. Dewazakura's ginjō, launched in 1980, was one of the first widely available ginjō in Japan and did more than any single product to bring the category to ordinary drinkers. Tatenokawa took the opposite kind of decision in 2010, converting its entire production to junmai daiginjō.",
              ja:"十四代は現代の日本酒において最も求められ、最も手に入らない名であり、今日の蒐集の市場の形の多くを負っている。一九八〇年に世に出た出羽桜の吟醸は、日本で広く手に入る最初の吟醸の一つであり、この区分を普通の飲み手にもたらしたことにおいて、いかなる単一の商品よりも大きな働きをした。楯野川は二〇一〇年に逆の種類の決断を下し、全生産を純米大吟醸に切り替えた。",
              zh:"十四代是現代日本酒中最受追捧、也最難買到的名字，如今收藏市場的形狀大半要歸因於它。出羽櫻於一九八〇年推出的吟釀，是日本最早能廣泛買到的吟釀之一，在把這個類別帶給一般飲者這件事上，貢獻超過任何單一產品。楯野川則在二〇一〇年做了相反性質的決定：把全部產量轉為純米大吟釀。" } }
        ] }
      ] },

    { t:"section", id:"fukushima",
      title:{ en:"Fukushima", ja:"福島", zh:"福島" }, jp:"福島県",
      body:[
        { t:"defs", items:[
          { term:{ en:"The training programme", ja:"人を育てる仕組み", zh:"培育人的機制" }, jp:"清酒アカデミー", romaji:"seishu academy",
            def:{ en:"Fukushima's prefectural sake academy, founded in the early 1990s, trains brewers over a multi-year course, and the prefecture has since led the country in gold medals at the national appraisal for more consecutive years than any other. This is the clearest available evidence that regional quality is a function of institutions rather than of geography: Fukushima did not acquire better water in 1992, it acquired a school.",
              ja:"一九九〇年代初頭に設けられた福島県の清酒アカデミーは、複数年の課程で造り手を育てる。以後この県は、全国新酒鑑評会の金賞数において、他のどの県より長い連続の期間、首位を保ってきた。地域の質が地理ではなく制度の関数であることの、最も明快な証拠である。福島は一九九二年によりよい水を得たのではない。学校を得たのである。",
              zh:"福島縣的清酒學院創設於一九九〇年代初，以跨年度課程培訓釀造者；此後這個縣在全國新酒鑑評會金賞數上連續居冠的年數，超過任何其他縣。這是「地域品質取決於制度而非地理」最清楚的現成證據：福島並不是在一九九二年得到了更好的水，而是得到了一所學校。" } },
          { term:{ en:"Three landscapes in one prefecture", ja:"一県のうちの三つの風土", zh:"一縣之中的三種風土" }, jp:"会津・中通り・浜通り", romaji:"Aizu, Nakadōri, Hamadōri",
            def:{ en:"Fukushima is unusually varied: the Aizu basin is deep-snow, soft-water country with the highest concentration of breweries; Nakadōri is the central corridor; Hamadōri is the warmer coast. Two of the recent geographical indications — Kitakata and Minami-Aizu, both designated in 2024 — are sub-prefectural, which is a return to the older, tighter idea of what a GI should cover.",
              ja:"福島は異例に多様である。会津の盆地は豪雪と軟水の地であり、蔵の密度が最も高い。中通りは中央の回廊、浜通りは温暖な海岸である。近年の地理的表示のうち二つ——いずれも二〇二四年指定の喜多方と南会津——は県より小さい単位であり、地理的表示が何を覆うべきかについての、より古く、より狭い観念への回帰である。",
              zh:"福島異常多樣：會津盆地是豪雪與軟水之地，酒藏密度最高；中通是中央走廊；濱通則是較溫暖的海岸。近年的地理標示中有兩個——皆於二〇二四年指定的喜多方與南會津——是次縣級的單位，這代表回到了「GI 該涵蓋多大範圍」這個更早、也更緊的觀念。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"飛露喜・写楽・大七", romaji:"Hiroki, Sharaku, Daishichi",
            def:{ en:"Hiroki, from a small Aizu brewery, is one of the defining successes of the successor generation. Sharaku at Aizu-Wakamatsu is the other. Daishichi at Nihonmatsu is something else entirely: a house that has brewed kimoto exclusively for generations and treats the method as a philosophical position rather than a revival.",
              ja:"会津の小さな蔵から出た飛露喜は、後継世代を定義する成功の一つである。会津若松の写楽がもう一つである。二本松の大七はまったく別種である——代々生酛のみを醸し、その方法を復古ではなく思想上の立場として扱う蔵である。",
              zh:"出自會津一家小酒藏的飛露喜，是定義了後繼世代的成功案例之一；會津若松的寫樂是另一個。二本松的大七則完全是另一回事：一家世代只釀生酛的酒藏，並把這套工法視為一種思想立場，而非復古。" } }
        ] }
      ] },

    { t:"section", id:"rise",
      title:{ en:"How the north got good", ja:"北がいかにして良くなったか", zh:"北方是怎麼變好的" }, jp:"東北の台頭",
      body:[
        { t:"p", text:{
          en:"For most of the modern era Tōhoku was where the labour came from, not where the reputation was. The region supplied the Nanbu guild that brewed other people's sake all over Japan, and its own bottles were sold locally and cheaply. That reversed within about thirty years, and it reversed for reasons that can be named.",
          ja:"近代のほとんどを通じて、東北は労働の出どころであって、名声のある場所ではなかった。この地方は日本中で他人の酒を醸した南部杜氏を供し、自らの瓶は地元で安く売られた。それは三十年ほどのうちに逆転し、そしてその逆転には名を挙げうる理由がある。",
          zh:"在近代的大部分時間裡，東北是勞動力的來源地，而不是聲譽的所在地。這個地區供應了在全日本為別人釀酒的南部杜氏，而它自己的酒瓶則在當地廉價出售。這在大約三十年間逆轉了，而這場逆轉有可以指名道姓的理由。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Prefectural laboratories, early", ja:"県の試験場、早くから", zh:"縣立試驗場，很早就有" }, jp:"秋田県醸造試験場", romaji:"Akita-ken jōzō shikenjō", meta:{ en:"1896", ja:"明治二十九年", zh:"1896 年" },
            text:{ en:"Akita set up a prefectural brewing research station in 1896 — eight years before the national Brewing Experiment Station existed in Tokyo, and generally described as the first of its kind run by a prefecture rather than by the state. A cold, poor, rice-growing region decided that brewing was an industry worth having a laboratory for, and it was right about a century before that became the standard view.",
              ja:"秋田は明治二十九年（1896）に県の醸造の試験場を設けた。東京に国の醸造試験所が存在するより八年早く、国ではなく県が営むものとしては最初のものと広く言われる。寒く、貧しく、米を作る地方が、酒造りは実験室を持つ値打ちのある産業だと決めた。それが標準の見方となるおよそ一世紀前に、正しかったのである。",
              zh:"秋田於一八九六年設立了縣立釀造試驗場——比東京的國立釀造試驗所早了八年，並普遍被描述為第一個由縣而非由國家經營的同類機構。一個寒冷、貧困、種稻的地區判定釀酒是一項值得為它設一座實驗室的產業——而在這個判斷成為主流看法之前，它已經對了大約一個世紀。" } },
          { n:2, title:{ en:"Teaching instead of guarding", ja:"守るのではなく教える", zh:"教學而非守密" }, jp:"清酒アカデミー", romaji:"Seishu Akademī", meta:{ en:"1992–", ja:"平成四年—", zh:"1992 年—" },
            text:{ en:"Fukushima founded a three-year vocational school for young brewery staff in 1992, at a moment when the guild system that used to transmit technique was visibly failing. It teaches the sons and daughters of brewery families alongside employees from competing houses, in the same room, from the same syllabus. Several prefectures have since copied the model; Niigata's is older and Fukushima's is the one most often credited with a measurable result.",
              ja:"福島は平成四年（1992）、若い蔵人のための三年の職業の学校を設けた。技を伝えてきた杜氏の仕組みが目に見えて綻びつつあった時である。蔵の家の息子と娘を、競う家の従業員と共に、同じ部屋で、同じ課程で教える。いくつもの県がその後この型を写した。新潟のものはより古く、そして測りうる結果を挙げたと最もよく言われるのは福島のものである。",
              zh:"福島於一九九二年為年輕藏人設立了一所三年制的職業學校，那正是傳承技術的杜氏制度明顯失靈的時刻。它讓酒藏家族的子女與競爭對手酒藏的員工，在同一間教室、依同一份課綱一起學習。此後有數個縣仿效了這個模式；新潟的更早，而最常被認為做出可量測成果的，是福島的。" } },
          { n:3, title:{ en:"The scoreboard", ja:"記録", zh:"成績板" }, jp:"全国新酒鑑評会", romaji:"zenkoku shinshu kanpyōkai", meta:{ en:"2010s–", ja:"二〇一〇年代—", zh:"二〇一〇年代—" },
            text:{ en:"Fukushima has finished top of the prefectures by gold medals at the National New Sake Appraisal about a dozen times, including an unbroken run through the 2010s that no other prefecture has matched, and it has continued to place at or near the top since. Yamagata, Akita, Miyagi and Iwate all sit far above what their size would predict. Competition results are a narrow measure and this site says so elsewhere; but a region that was not in the conversation in 1985 now supplies a disproportionate share of the medals, and that is a real change rather than a marketing claim.",
              ja:"福島は全国新酒鑑評会の金賞数において都道府県の首位を十度あまり占め、そのなかには他のどの県も並びえていない二〇一〇年代を通じた途切れぬ連なりがある。そしてその後も首位かその近くに在り続けている。山形、秋田、宮城、岩手はいずれも、その大きさから予想されるよりはるかに上にある。鑑評会の結果は狭い尺度であり、この場所は他所でそう述べている。しかし一九八五年には話に上らなかった地方が、今や不釣り合いな割合の賞を供している。それは売り文句ではなく実際の変化である。",
              zh:"福島在全國新酒鑑評會的金賞數上約有十二次名列各都道府縣之首，其中包括一段貫穿二〇一〇年代、無人能及的不間斷連霸，此後也持續位居首位或接近首位。山形、秋田、宮城與岩手，全都遠高於其規模所應預期的水準。競賽成績是一把狹窄的尺，本站在別處也這麼說；但一個在一九八五年還不在話題中的地區，如今供應了不成比例的獎項——這是真實的改變，不是行銷說詞。" } }
        ] }
      ] },

    { t:"section", id:"2011",
      title:{ en:"March 2011", ja:"二〇一一年三月", zh:"二〇一一年三月" }, jp:"東日本大震災",
      body:[
        { t:"p", text:{
          en:"The Tōhoku earthquake and tsunami struck on 11 March 2011, at the end of the brewing season, when every tank in the region was either fermenting or in storage. It is not possible to write about sake in the north without it.",
          ja:"東北の地震と津波は平成二十三年（2011）三月十一日、酒造りの季の終わりに襲った。地方のあらゆる槽が、醗酵しているか、貯蔵されているかであった時である。それに触れずに北の酒について書くことはできない。",
          zh:"東北大地震與海嘯發生於二〇一一年三月十一日，正值釀造季的尾聲，當時該地區的每一槽酒不是在發酵，就是在貯藏。談論北方的清酒，不可能繞過它。" } },
        { t:"ul", items:[
          { en:"<strong>The physical loss.</strong> Breweries on the Iwate, Miyagi and Fukushima coasts were destroyed outright by the tsunami; further inland, tanks split, buildings cracked, and long power cuts stopped cooling in the middle of a fermentation. Several houses lost an entire year of production, and a few lost their premises, their records and their house microflora together.",
            ja:"<strong>物としての喪失。</strong>岩手、宮城、福島の沿岸の蔵は津波に丸ごと壊された。より内陸では槽が裂け、建物が割れ、長い停電が醗酵の最中に冷却を止めた。少なからぬ家が一年の生産の全体を失い、いくつかは建物と記録と蔵付きの微生物相とを共に失った。",
            zh:"<strong>實體的損失。</strong>岩手、宮城與福島沿海的酒藏被海嘯徹底摧毀；更內陸處，酒槽裂開、建築龜裂，而長時間停電讓冷卻在發酵中途停擺。有數家酒藏失去了整整一年的產量，也有幾家連同廠房、紀錄與藏內微生物相一併失去。" },
          { en:"<strong>The reputational loss.</strong> After the nuclear accident, Fukushima sake faced import bans, retailer withdrawals and consumer avoidance far beyond anything the testing supported. Every tank has been screened for radioactivity since; the results have been published continuously and have been at or below detection limits for many years. The reputational damage nonetheless outlasted the measurable damage by a long way, which is the usual pattern and is worth stating plainly.",
            ja:"<strong>評判の喪失。</strong>原子力の事故ののち、福島の酒は、検査の支えるものをはるかに越えた輸入の禁止と、小売の引き上げと、消費者の忌避に直面した。以来あらゆる槽が放射能について調べられている。結果は絶えず公にされ、長年にわたり検出の限りかそれ以下である。それでも評判の損なわれは、測りうる損なわれよりはるかに長く残った。それは常の型であり、率直に述べておく値打ちがある。",
            zh:"<strong>聲譽的損失。</strong>核事故之後，福島清酒面對的進口禁令、通路下架與消費者迴避，遠遠超出檢驗結果所能支持的程度。此後每一槽酒都接受放射性檢測；結果持續公開，多年來都處於或低於偵測極限。儘管如此，聲譽上的傷害仍遠遠比可量測的傷害持續得更久——這是常見的模式，值得直說。" },
          { en:"<strong>What was done about it.</strong> The prefecture's answer was not a campaign but a decade of technical work and competition results, using the one measure nobody could argue with. The gold medals described above are, in the plainest terms, what recovery looked like when the argument could not be won any other way.",
            ja:"<strong>それに対してなされたこと。</strong>県の答えは運動ではなく、十年にわたる技術の仕事と鑑評会の結果であった。誰も争いえぬ唯一の尺度を用いてである。上に記した金賞は、最も率直に言えば、他のいかなる仕方でも論を勝ちえぬときの立ち直りの姿である。",
            zh:"<strong>對此做了什麼。</strong>該縣的回應不是一場宣傳戰，而是長達十年的技術工作與競賽成績——動用了那把沒有人能反駁的尺。上文所述的金賞，用最直白的話說，就是當這場爭論無法以其他任何方式取勝時，「復原」看起來的樣子。" }
        ] },
        { t:"note", title:{ en:"If you buy one bottle from this chapter", ja:"この章から一本買うなら", zh:"若你只從本章買一瓶" }, text:{
          en:"Buy something from the Fukushima coast or from Iwate's Rikuzentakata and Ōfunato area. Not out of sympathy — the sake is very good and does not need the story — but because these are small houses that rebuilt in places where rebuilding was not obviously worth it, and the ordinary commercial fact of somebody buying the bottle is the thing that made it possible.",
          ja:"福島の沿岸か、岩手の陸前高田・大船渡のあたりのものを買われたい。同情からではない。酒は非常に良く、物語を要しない。そうではなく、それらは、建て直すことが明らかに割に合うとは言えぬ場所で建て直した小さな家々であり、誰かが瓶を買うという平凡な商いの事実こそが、それを可能にしたものだからである。",
          zh:"買一瓶來自福島沿海，或岩手陸前高田、大船渡一帶的酒。不是出於同情——那些酒非常好，並不需要故事——而是因為這些是在「重建顯然划不來」的地方重建起來的小酒藏，而「有人買下這瓶酒」這件再平凡不過的商業事實，正是讓重建成為可能的東西。" } }
      ] },

    { t:"section", id:"drinking-north",
      title:{ en:"Drinking the north", ja:"北を飲む", zh:"喝北方" }, jp:"手引き",
      body:[
        { t:"ul", items:[
          { en:"<strong>If you want to understand the region in three bottles:</strong> a Yamagata junmai ginjō made with Dewasansan, an Akita kimoto or yamahai, and a Fukushima junmai from an Aizu brewery. Between them they cover the prefectural-rice argument, the traditional-starter argument and the institutional-training argument.",
            ja:"<strong>三本でこの地域を理解したいなら</strong>——出羽燦々の山形の純米吟醸、秋田の生酛か山廃、そして会津の蔵の福島の純米。三本で、県産米の論点、伝統的な酒母の論点、そして制度による育成の論点が覆われる。",
            zh:"<strong>若想用三支酒理解這個地區：</strong>一支以出羽燦燦釀成的山形純米吟釀、一支秋田的生酛或山廢，以及一支來自會津酒藏的福島純米。三者合起來，涵蓋了縣產米、傳統酒母與制度性培訓這三個論點。" },
          { en:"<strong>Serve northern junmai warmer than you think.</strong> Soft water and a fuller amino acid profile mean much of this region's sake is at its best between 40 and 50 °C, and a great deal of it is served far too cold outside Japan because the aromatic ginjō reputation travels ahead of the actual bottles.",
            ja:"<strong>北の純米は、思うより温かく供すること。</strong>軟水と厚いアミノ酸の性格ゆえに、この地域の酒の多くは40℃から50℃で最良である。そして日本の外では、香り高い吟醸という評判が実際の瓶に先んじて届くために、その多くが冷たすぎる状態で供されている。",
            zh:"<strong>北方的純米，要比你以為的更溫。</strong>軟水加上較厚的胺基酸組成，意味著這個地區的許多酒在 40 至 50 °C 之間最好；而在日本以外，由於「芳香吟釀」的名聲跑在實際酒款前面，很多這類酒被端上來時都太冰了。" },
          { en:"<strong>Look for the prefectural rice on the label.</strong> Dewasansan, Akita Sake Komachi, Ginginga, Kura no Hana, Hanaomoi, Ginpū: each of these names tells you the brewery chose to work inside its region's own programme rather than buy Yamada Nishiki, which is a real statement about what it is trying to do.",
            ja:"<strong>ラベルの県産米を探すこと。</strong>出羽燦々、秋田酒こまち、吟ぎんが、蔵の華、華想い、吟風——いずれの名も、その蔵が山田錦を買うのではなく、地域自身の事業の内側で仕事をすることを選んだと告げている。それは、何をなそうとしているかについての実質的な表明である。",
            zh:"<strong>在酒標上找縣產米。</strong>出羽燦燦、秋田酒小町、吟銀河、藏之華、華想、吟風——這些名字每一個都在告訴你：這家酒藏選擇在自己地域的計畫內部工作，而不是去買山田錦；那是一項關於「它想做什麼」的實質表態。" }
        ] },

        { t:"note", text:{
          en:"For the compact table of all forty-seven prefectures, see <a href=\"regions.html\">Regions A–Z</a>; for the guilds named here, <a href=\"toji.html\">Tōji &amp; the Crew</a>; for the designations, <a href=\"gi.html\">Geographical Indications</a>.",
          ja:"四十七都道府県の一覧表は<a href=\"regions.html\">産地一覧</a>、ここに挙げた杜氏集団は<a href=\"toji.html\">杜氏と蔵人</a>、地理的表示は<a href=\"gi.html\">地理的表示</a>を参照。",
          zh:"四十七都道府縣的簡表見<a href=\"regions.html\">產地一覽</a>；本頁提及的杜氏集團見<a href=\"toji.html\">杜氏與藏人</a>；地理標示見<a href=\"gi.html\">地理標示</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"regions.html", why:{ en:"The same prefectures in the national index.", ja:"同じ県を、全国の索引のなかで。", zh:"同樣這些縣，放在全國索引裡。" } },
      { href:"rice.html", why:{ en:"The northern rices, and the years they were bred.", ja:"北の米と、それが育成された年。", zh:"北方的那些米，以及它們育成的年份。" } },
      { href:"terroir.html", why:{ en:"Cold as an ingredient rather than a hardship.", ja:"苦難ではなく原料としての寒さ。", zh:"把寒冷當成原料，而不是當成苦難。" } },
      { href:"competitions.html", why:{ en:"Where the northern prefectures sit in the gold-medal counts.", ja:"金賞の数において、北の県が座る場所。", zh:"在金賞數量上，北方各縣的位置。" } }
    ] }
  ]
};


/* ---- -------------------------------------- region-central */
SAKE.pages["region-central"] = {
  kicker: { en: "Place · 04", ja: "産地 · 04", zh: "產地 · 04" },
  title:  { en: "Kantō & the Snow Country", ja: "関東と雪国", zh: "關東與雪國" },
  jp: "関東・甲信越",
  lede: {
    en: "Two quite different brewing worlds sit next to each other here. West of the mountains is the snow country — Niigata and Nagano, the two prefectures with more breweries than any others in Japan, cold, soft-watered, and organised around prefecture-wide programmes. East of them is the Kantō plain: close to the largest drinking market in the world, short of snow, and home to a scattering of small breweries that have survived by being unusual rather than by being regional. This page covers ten prefectures, with the two largest taken in the most detail.",
    ja: "ここでは、まったく異なる二つの酒の世界が隣り合っている。山の西は雪国である——新潟と長野、日本のどこよりも蔵の多い二県であり、寒く、水は軟らかく、県全体の事業を軸に組織されている。その東は関東平野である——世界最大の飲酒市場に近く、雪に乏しく、地域的であることによってではなく風変わりであることによって生き延びてきた小さな蔵が散在する。このページは十の都県を扱い、最も大きな二県を最も詳しく取り上げる。",
    zh: "在這裡，兩個相當不同的釀酒世界比鄰而居。山的西邊是雪國——新潟與長野，是日本酒藏數量最多的兩個縣，寒冷、水軟，並圍繞著全縣性的計畫加以組織。它們的東邊則是關東平原：緊鄰世界最大的飲酒市場、少雪，散布著一些靠「與眾不同」而非「地域性」存活下來的小酒藏。本頁涵蓋十個都縣，其中最大的兩縣著墨最多。"
  },
  body: [

    { t:"section", id:"niigata",
      title:{ en:"Niigata", ja:"新潟", zh:"新潟" }, jp:"新潟県",
      body:[
        { t:"p", text:{
          en:"More breweries than any other prefecture, third by volume, and the only region in Japan whose house style is a phrase every drinker knows. Niigata is what a prefecture looks like when it decides collectively what its sake is going to taste like and then builds the institutions to enforce it.",
          ja:"蔵の数はどの県より多く、生産量は三位、そして県としての酒質の型が、どの飲み手も知る一句になっている日本で唯一の産地である。新潟とは、県が自らの酒の味を共同で決め、それを担保する制度を築いたとき、県がどう見えるかである。",
          zh:"酒藏數量居全國之冠，產量第三，也是日本唯一「縣級酒質風格」被濃縮成一句人人皆知之語的產地。新潟展示的是：當一個縣集體決定自己的酒該是什麼味道、並建立起制度來確保它時，這個縣會長成什麼樣子。" } },
        { t:"defs", items:[
          { term:{ en:"Tanrei karakuchi", ja:"淡麗辛口", zh:"淡麗辛口" }, jp:"淡麗辛口", romaji:"tanrei karakuchi",
            def:{ en:"Light, dry, clean, low in aroma and quick to finish. The style is usually explained by the snow and the soft water, but the honest explanation is a guild and a market: the Echigo tōji taught it, and it suits the region's food and its heavy-drinking culture. It became a national idea in the 1970s and 80s, and for two decades “Niigata” on a label was a sufficient description of what was inside.",
              ja:"軽く、辛く、清らかで、香りは低く、切れが速い。この型は雪と軟水で説明されるのが通例だが、正直な説明は集団と市場である——越後杜氏がそれを教え、そしてそれはこの地の食と、よく飲む文化に適っていた。一九七〇年代から八〇年代に全国的な観念となり、二十年にわたり、ラベルの「新潟」の二字は中身の十分な記述であった。",
              zh:"輕、辛、乾淨、香氣低、收尾快。這種風格通常以雪與軟水來解釋，但誠實的解釋是行會與市場：越後杜氏教出了它，而它也契合這片土地的飲食與豪飲文化。它在一九七〇至八〇年代成為全國性的概念；有二十年之久，酒標上的「新潟」二字就足以描述瓶中之物。" } },
          { term:{ en:"The rice", ja:"米", zh:"米" }, jp:"五百万石・越淡麗", romaji:"Gohyakumangoku, Koshi Tanrei",
            def:{ en:"Gohyakumangoku, bred in Niigata and named in the 1950s for the prefecture's rice production reaching five million koku, is the second most planted sake rice in Japan and the technical basis of the tanrei style: it dissolves cleanly and gives little residual body. Koshi Tanrei, released in the 2000s, is a cross of Yamada Nishiki and Gohyakumangoku bred to give the prefecture a rice that could take deep polishing without importing Hyōgo grain.",
              ja:"五百万石は新潟で育成され、県の米生産が五百万石に達したことにちなんで一九五〇年代に命名された。日本で二番目に多く作付けされる酒米であり、淡麗の型の技術的な基礎である——清らかに溶け、残る厚みが少ない。二〇〇〇年代に世に出た越淡麗は山田錦と五百万石の交配であり、兵庫の米を移入せずに深い精米に耐える米を県に与えるために育てられた。",
              zh:"五百萬石在新潟育成，並於一九五〇年代因該縣稻米產量達到五百萬石而得名；它是日本種植面積第二大的酒米，也是淡麗風格的技術基礎——溶解得乾淨，殘留的酒體很少。二〇〇〇年代問世的越淡麗，是山田錦與五百萬石的雜交種，育成目的是讓本縣擁有一款無須自兵庫調米、也能承受深度精米的米。" } },
          { term:{ en:"The school", ja:"学校", zh:"學校" }, jp:"新潟清酒学校", romaji:"Niigata seishu gakkō",
            def:{ en:"Niigata's brewers' association founded a sake school in the mid-1980s, teaching a multi-year course to working brewery staff. Together with Fukushima's later academy it is the clearest institutional answer to the collapse of the guild apprenticeship, and it is the mechanism by which a prefecture-wide style survives the retirement of the generation that created it.",
              ja:"新潟の酒造組合は一九八〇年代半ばに清酒学校を設け、現に蔵で働く者に複数年の課程を教える。のちの福島のアカデミーとともに、組の徒弟制の崩壊に対する最も明快な制度的な答えであり、県全体の型が、それを作った世代の引退を越えて生き延びる仕組みである。",
              zh:"新潟的酒造組合在一九八〇年代中期設立了清酒學校，為在職的酒藏人員開設跨年度課程。它與後來福島的學院一起，是對行會學徒制崩解最清楚的制度性回應，也是讓全縣風格得以撐過「創造它的那一代退休」的機制。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"越乃寒梅・久保田・八海山", romaji:"Koshi no Kanbai, Kubota, Hakkaisan",
            def:{ en:"Koshi no Kanbai made jizake a national idea in the 1970s — a small brewery's sake that people queued for, at a moment when sake was assumed to be an industrial product. Kubota, launched in the 1980s, took that idea and built a range around it with deliberately plain naming. Hakkaisan is the third of the trio and the most consistently available abroad. Behind them are roughly eighty-five other breweries, many of them tiny, and the prefecture's annual tasting in March is the only practical way to meet them.",
              ja:"越乃寒梅は一九七〇年代に地酒を全国的な観念にした。日本酒が工業製品と見なされていた時期に、人が行列をなした小さな蔵の酒である。一九八〇年代に出た久保田はその観念を受け、意図して飾らない名で品揃えを組み立てた。八海山が三つ目であり、海外で最も安定して手に入る。その背後におよそ八十五の蔵があり、その多くはごく小さい。三月の県の試飲会が、それらに出会う唯一の実際的な方法である。",
              zh:"越乃寒梅在一九七〇年代讓「地酒」成為全國性的概念——在清酒被視為工業產品的年代，一家小酒藏的酒竟讓人排隊。一九八〇年代推出的久保田承接了這個概念，並以刻意樸素的命名建立起產品線。八海山是這三者中的第三個，也是在海外最穩定買得到的。它們背後還有約八十五家酒藏，其中許多極小；每年三月的全縣試飲會，是認識它們唯一實際可行的方式。" } }
        ] },
        { t:"note", text:{
          en:"Niigata was designated a geographical indication for sake in 2022. Worth knowing before you generalise: the prefecture is large and its southern mountain districts, its northern coast and the island of Sado are not the same place, and a decade of successor-generation brewers has been quietly widening the style well beyond the phrase it is known for.",
          ja:"新潟は二〇二二年に清酒の地理的表示に指定された。一般化する前に知っておくとよいことがある——県は広く、南の山あい、北の海岸、佐渡は同じ場所ではない。そして十年にわたり、後継世代の造り手は、この県が知られている一句をはるかに越えて、静かに型を広げてきた。",
          zh:"新潟於二〇二二年獲指定為清酒地理標示。在下結論之前值得知道：這個縣幅員遼闊，南部山區、北部海岸與佐渡島並不是同一個地方；而十年來，後繼世代的釀造者一直在安靜地把風格拓寬到遠超那句代表語之外。" } }
      ] },

    { t:"section", id:"nagano",
      title:{ en:"Nagano", ja:"長野", zh:"長野" }, jp:"長野県",
      body:[
        { t:"defs", items:[
          { term:{ en:"Altitude instead of latitude", ja:"緯度ではなく標高", zh:"以海拔代替緯度" }, jp:"高地の寒さ", romaji:"kōchi no samusa",
            def:{ en:"Nagano is landlocked and mountainous, and it gets its brewing cold from height rather than from the north. Breweries sit in a series of separate basins — Suwa, Saku, Matsumoto, the Kiso valley, the Chikuma river — each with its own water, which is why a prefecture with the second-highest brewery count has no single house style. Nagano was designated a geographical indication in 2021 and the town of Shinano-Ōmachi received its own, sub-prefectural designation in 2023.",
              ja:"長野は海に接せず、山がちであり、酒造りの寒さを北からではなく高さから得ている。蔵は諏訪、佐久、松本、木曽谷、千曲川と、いくつもの別々の盆地に分かれて座り、それぞれが自らの水を持つ。蔵の数が全国二位でありながら単一の県の型を持たない理由である。長野は二〇二一年に地理的表示に指定され、信濃大町は二〇二三年に県より小さい単位で独自の指定を得た。",
              zh:"長野不臨海且多山，其釀造所需的寒冷來自海拔而非緯度。酒藏散布在數個彼此獨立的盆地——諏訪、佐久、松本、木曾谷、千曲川——各有各的水源；這正是這個酒藏數量全國第二的縣，卻沒有單一縣級風格的原因。長野於二〇二一年獲指定為地理標示，信濃大町則於二〇二三年取得次縣級的獨立指定。" } },
          { term:{ en:"Miyama Nishiki", ja:"美山錦", zh:"美山錦" }, jp:"美山錦", romaji:"Miyama Nishiki",
            def:{ en:"Bred in Nagano in the 1970s and now the third most planted sake rice in Japan, grown far beyond the prefecture and especially throughout Tōhoku. It tolerates cold and altitude, gives a crisp, slightly hard-edged sake, and is the single most successful piece of sake-rice breeding to come out of a cold region. A great deal of northern sake is drinking Nagano's plant breeding.",
              ja:"一九七〇年代に長野で育成され、今日、日本で三番目に多く作付けされる酒米である。県をはるかに越えて、とりわけ東北の全域で作られる。寒さと標高に耐え、締まって、わずかに硬い縁を持つ酒を生む。寒冷地から出た酒米の育種として、最も成功した一つである。北の酒の多くは、長野の育種を飲んでいるのである。",
              zh:"一九七〇年代在長野育成，如今是日本種植面積第三大的酒米，種植範圍遠超本縣，尤其遍布整個東北。它耐寒、耐高海拔，釀出的酒清爽且帶些微硬朗的稜角，是寒冷地區所產出最成功的一項酒米育種。許多北方的清酒，喝的其實是長野的育種成果。" } },
          { term:{ en:"Kyōkai No. 7", ja:"きょうかい7号", zh:"協會 7 號" }, jp:"真澄", romaji:"Masumi",
            def:{ en:"The most widely used sake yeast in history was isolated in 1946 from Masumi at Suwa, and for decades it was the default strain of Japanese brewing — reliable, balanced, moderate in aroma, and the backbone of the industry before the high-ester strains arrived. Nagano's contribution to sake is therefore not a style but two of its most-used inputs, a rice and a yeast, both used far more outside the prefecture than in it.",
              ja:"史上最も広く用いられた清酒酵母は、昭和二十一年（1946）に諏訪の真澄から分離された。数十年にわたり日本の酒造りの既定の株であった——安定し、均衡がとれ、香りは中庸で、高エステルの株が現れる以前の産業の背骨である。ゆえに長野の日本酒への寄与は型ではなく、最も多く使われる二つの原料——米と酵母——であり、そのいずれもが県内よりはるかに県外で使われている。",
              zh:"史上使用最廣的清酒酵母，於一九四六年自諏訪的真澄分離出來；此後數十年間，它是日本釀造的預設菌株——可靠、均衡、香氣中庸，是高酯類菌株出現之前整個產業的脊梁。因此長野對日本酒的貢獻不是一種風格，而是兩項最常被使用的原料——一款米與一株酵母——而兩者在縣外的使用量都遠超縣內。" } }
        ] }
      ] },

    { t:"section", id:"yamanashi",
      title:{ en:"Yamanashi", ja:"山梨", zh:"山梨" }, jp:"山梨県",
      body:[
        { t:"p", text:{
          en:"Small in sake terms and unusual in structure: Yamanashi holds geographical indications for both sake and wine, and the same mountain groundwater supplies a well-known whisky distillery a short distance away. It is the clearest place in Japan to see one water source support three completely different drinks, and the sake side is dominated by soft Fuji and Southern Alps groundwater, gentle fermentation and — at one Hakushu brewery in particular — a serious commitment to bottle-fermented sparkling sake.",
          ja:"日本酒としては小さく、構造としては珍しい。山梨は清酒とワインの双方で地理的表示を持ち、同じ山の地下水が、少し離れた場所でよく知られたウイスキーの蒸溜所を支えている。一つの水源が三つのまったく異なる酒を支えるさまを見るのに、日本で最も明快な土地である。酒の側は富士と南アルプスの軟らかな地下水、穏やかな発酵、そして——とりわけ白州の一蔵において——瓶内二次発酵の発泡清酒への本格的な取り組みに彩られている。",
          zh:"就清酒而言規模不大，結構卻很特別：山梨同時擁有清酒與葡萄酒的地理標示，而同一片山地地下水，在不遠處還支撐著一座知名的威士忌蒸餾廠。這是日本最能清楚看見「一個水源支撐三種完全不同酒類」的地方。清酒這一側則由富士與南阿爾卑斯的軟質地下水、溫和的發酵，以及——尤其在白州的一家酒藏——對瓶內二次發酵氣泡清酒的認真投入所定義。" } }
      ] },

    { t:"section", id:"nagano-nac",
      title:{ en:"Nagano invented the appellation", ja:"長野が呼称を発明した", zh:"長野發明了原產地呼稱" }, jp:"原産地呼称管理制度",
      body:[
        { t:"p", text:{
          en:"Thirteen years before the national geographical-indication scheme reached sake, one prefecture built its own — and did it because the national government would not.",
          ja:"国の地理的表示の制度が日本酒に及ぶ十三年前、一つの県が自らのそれを築いた。国がそうしなかったがゆえにである。",
          zh:"在全國性的地理標示制度觸及清酒的十三年前，有一個縣自行建立了一套——而它之所以這麼做，正是因為中央政府不做。" } },
        { t:"defs", items:[
          { term:{ en:"What it is", ja:"それが何であるか", zh:"它是什麼" }, jp:"長野県原産地呼称管理制度", romaji:"Nagano-ken gensanchi koshō kanri seido",
            def:{ en:"Established on 2 October 2002 by the prefectural governor, and covering — in the order they were added — wine, sake, rice, shochu and cider. To carry the mark, a product must be made from raw materials grown in Nagano, made in Nagano, and pass two separate examinations: a documentary audit of origin and method, and a blind sensory panel. Sake and shochu tastings have been chaired by an essayist and critic; the wine panel by a competition-winning sommelier.",
              ja:"平成十四年（2002）十月二日に県知事によって設けられ、加えられた順に、ワイン、日本酒、米、焼酎、シードルを覆う。印を負うには、品は長野で育った原料から、長野で造られ、二つの別々の審査を通らねばならない。産地と製法の書類の審査と、目隠しの官能の審査である。日本酒と焼酎の審査は随筆家であり批評家である者が、ワインの審査は競技に勝ったソムリエが率いてきた。",
              zh:"由縣知事於二〇〇二年十月二日設立，依納入順序涵蓋葡萄酒、清酒、米、燒酎與蘋果酒。要掛上這個標記，產品必須以長野種植的原料、在長野製造，並通過兩道各自獨立的審查：產地與製法的書面查核，以及盲評的感官審查。清酒與燒酎的品評由一位隨筆家兼評論家主持，葡萄酒品評則由一位競賽出身的侍酒師主持。" } },
          { term:{ en:"Why it matters", ja:"それが重要な理由", zh:"它為何重要" }, jp:"官能審査", romaji:"kannō shinsa",
            def:{ en:"The national GI scheme certifies process and origin — where the rice came from, where the water came from, what the method was. It does not taste anything. Nagano's system does: a bottle can meet every origin requirement and still be refused the mark because the panel did not think it was good enough. That is the European appellation model, and it is the only place in Japanese drinks regulation where quality, as judged by a palate, is a legal condition.",
              ja:"国の地理的表示の制度は工程と産地を証する。米がどこから来たか、水がどこから来たか、いかなる法によったかである。それは何も味わわない。長野の仕組みは味わう。ある瓶は産地の要件をことごとく満たしながら、審査の者が十分に良いと思わなかったがゆえに印を拒まれうる。それは欧州の呼称の型であり、日本の飲み物の規制において、舌によって判じられた品質が法の条件である唯一の場所である。",
              zh:"全國性的 GI 制度認證的是製程與產地——米從哪來、水從哪來、用了什麼方法。它不品嚐任何東西。長野的制度會：一瓶酒可以滿足所有產地要求，卻仍因評審認為不夠好而被拒絕授予標記。這正是歐洲的原產地呼稱模式，也是日本酒類法規中唯一一處把「由舌頭判定的品質」列為法定條件的地方。" } },
          { term:{ en:"And then the national one arrived", ja:"そして国のものが来た", zh:"然後全國性的制度來了" }, jp:"GI長野", romaji:"GI Nagano",
            def:{ en:"Nagano was later designated a national geographical indication as well, so the prefecture now runs two overlapping marks with different logics — one certifying that the sake is from here, the other that a panel thought it was good. Neither has replaced the other, which tells you something about how hard it is to retire a system that people have learned to read.",
              ja:"長野はのちに国の地理的表示にも指定され、県は今、異なる論理を持つ二つの重なる印を運んでいる。一つはこの酒がここのものであることを証し、もう一つは審査の者がそれを良いと思ったことを証する。いずれも他方を置き換えていない。人が読み方を覚えた仕組みを退けることがいかに難しいかを、それは物語る。",
              zh:"長野後來也被指定為全國性的地理標示，於是這個縣如今同時運作著兩個邏輯不同、彼此重疊的標記：一個證明這酒來自這裡，另一個證明評審認為它好。兩者都沒有取代對方——這件事告訴你，要淘汰一個人們已經學會解讀的制度有多困難。" } }
        ] }
      ] },

    { t:"section", id:"yamanashi-detail",
      title:{ en:"One aquifer, three drinks", ja:"一つの水脈、三つの酒", zh:"一道水脈，三種酒" }, jp:"山梨の水",
      body:[
        { t:"figure",
          caption:{
            en:"Yamanashi has very few sake breweries and an outsized place in Japanese drinks, and the reason is one line of hydrology. Snowmelt off the Southern Alps arrives as water that is very soft, very low in iron and stable through the year — which is not a coincidence of three industries but the same specification arrived at three times. A whisky distillery chose its site for exactly the qualities a sake brewer would have chosen, and a wine district had already settled a valley of the same water fifty years before that. Very little else in Japan puts the three side by side on one aquifer.",
            ja:"山梨には日本酒の蔵がごく少なく、それでいて日本の酒のなかで不釣り合いなほど大きな位置を占める。理由は一本の水文である。南アルプスの雪解けは、きわめて軟らかく、鉄がきわめて少なく、年を通じて安定した水として到る。それは三つの産業の偶然ではなく、同じ仕様に三度たどり着いたということである。ウイスキーの蒸溜所は、酒の造り手が選んだであろうまさにその性質ゆえに土地を選び、葡萄酒の産地はその五十年前に、同じ水の谷にすでに落ち着いていた。三つを一つの帯水層の上に並べる場所は、日本にほとんどない。",
            zh:"山梨的清酒酒藏極少，卻在日本的酒類版圖中占據不成比例的位置，而理由是一條水文線。南阿爾卑斯的融雪抵達時，是極軟、含鐵極低、全年穩定的水——這並非三個產業的巧合，而是同一份規格被獨立達成了三次。威士忌蒸餾所選址時看中的，正是釀清酒者也會挑選的那些水質；而葡萄酒產區早在五十年前，就已在同一種水的山谷中落腳。在日本，幾乎沒有別的地方能把三者並列在同一個含水層之上。" },
          svg: function (lang, L) {
            var W = 760, H = 332;
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
            /* the range */
            s += '<path d="M60 150 L120 96 L176 128 L246 62 L318 118 L390 84 L452 132 L520 70 L590 124 L646 100 L700 150 Z" fill="#DCD6C8" stroke="#B4AC9C"/>';
            s += '<path d="M246 62 L228 79 L264 79 Z" fill="#F5F3ED"/>';
            s += '<path d="M520 70 L504 85 L536 85 Z" fill="#F5F3ED"/>';
            s += '<path d="M390 84 L376 97 L404 97 Z" fill="#F5F3ED"/>';
            s += '<text x="380" y="40" text-anchor="middle" font-size="11.5" fill="#201E1B">' +
                 (lang === "ja" ? "南アルプスの雪解け水" : lang === "zh" ? "南阿爾卑斯的融雪水" : "snowmelt off the Southern Alps") + '</text>';
            /* the aquifer */
            s += '<rect x="60" y="158" width="640" height="32" fill="#DDE5E8" stroke="#B9C3C8"/>';
            s += '<text x="380" y="179" text-anchor="middle" font-size="12" fill="#4F6672">' +
                 (lang === "ja" ? "軟らかく・鉄が少なく・年を通じて安定" : lang === "zh" ? "極軟・含鐵極低・全年穩定" : "very soft · very low in iron · stable all year") + '</text>';
            /* three drinks */
            var boxes = [
              { cx:190, jp:"日本酒", n:{ en:"sake", ja:"にほんしゅ", zh:"清酒" },
                t:{ en:"few breweries, but the same water", ja:"蔵は少ない。水は同じである", zh:"酒藏不多，但水是同一種" } },
              { cx:380, jp:"葡萄酒", n:{ en:"wine", ja:"ぶどうしゅ", zh:"葡萄酒" },
                t:{ en:"Japan's oldest, at Katsunuma from the 1870s, with the Kōshū grape", ja:"日本最古。一八七〇年代の勝沼と甲州葡萄", zh:"日本最早，一八七〇年代的勝沼與甲州葡萄" } },
              { cx:570, jp:"ウイスキー", n:{ en:"whisky", ja:"ウヰスキー", zh:"威士忌" },
                t:{ en:"a distillery in the forest at Hakushu, sited for the water", ja:"白州の森の蒸溜所。水ゆえに選ばれた", zh:"白州森林中的蒸餾所，為水而選址" } }
            ];
            var i, k, BY = 228, BW = 180, BHh = 72;
            for (i = 0; i < boxes.length; i++) {
              var b = boxes[i];
              s += '<line x1="' + b.cx + '" y1="190" x2="' + b.cx + '" y2="' + (BY - 9) + '" stroke="#B9C3C8" stroke-width="1.6"/>';
              s += '<path d="M' + b.cx + ' ' + BY + ' L' + (b.cx - 5) + ' ' + (BY - 10) + ' L' + (b.cx + 5) + ' ' + (BY - 10) + ' Z" fill="#B9C3C8"/>';
              s += '<rect x="' + (b.cx - BW / 2) + '" y="' + BY + '" width="' + BW + '" height="' + BHh + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (b.cx - BW / 2 + 14) + '" y="' + (BY + 24) + '" font-size="14" fill="#201E1B">' + b.jp + '</text>';
              s += '<text x="' + (b.cx + BW / 2 - 14) + '" y="' + (BY + 24) + '" text-anchor="end" font-size="9" fill="#ADA79E">' + L(b.n) + '</text>';
              var tl = wrap(L(b.t), cjk, cjk ? 15 : 30);
              for (k = 0; k < tl.length && k < 3; k++) {
                s += '<text x="' + (b.cx - BW / 2 + 14) + '" y="' + (BY + 42 + k * 13) + '" font-size="9" fill="#8B857C">' + tl[k] + '</text>';
              }
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "三つの産業は一世紀にわたり同じ水文に拠ってきた。そして互いにそう言い合ったことは、ほとんどない。"
                  : lang === "zh" ? "三個產業倚靠同一套水文已有一個世紀，而彼此之間幾乎從未如此言明。"
                  : "The three industries have drawn on the same hydrology for a century, and have almost never said so to one another.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Yamanashi has very few sake breweries and an outsized place in Japanese drinks, because it is the one prefecture where sake, wine and whisky are all made seriously from the same mountains.",
          ja:"山梨は清酒の蔵をきわめて少ししか持たず、それでいて日本の酒において不釣り合いに大きな位置を占める。同じ山々から清酒と葡萄酒と威士忌のすべてが本気で造られる唯一の県だからである。",
          zh:"山梨的清酒酒藏極少，卻在日本酒類世界中占據了不成比例的位置——因為它是唯一一個清酒、葡萄酒與威士忌全都認真地取自同一片山脈的縣。" } },
        { t:"grid", cols:3, cells:[
          { k:{ en:"Wine", ja:"葡萄酒", zh:"葡萄酒" }, jp:"勝沼・甲州",
            v:{ en:"Japan's oldest", ja:"日本で最も古い", zh:"日本最古老的" },
            d:{ en:"Commercial winemaking in Japan begins at Katsunuma in the 1870s, and the Kōshū grape — a pale, thin-skinned variety that has been grown here for centuries and is genetically part <em>Vitis vinifera</em> — is the only Japanese wine grape with an international reputation. Kōshū wine and good sake have a great deal in common: low aromatic intensity, high acidity of a quiet kind, and a job to do beside food rather than in front of it.",
              ja:"日本の商いとしての葡萄酒造りは一八七〇年代の勝沼に始まる。そして甲州——ここで幾世紀にわたり育てられ、遺伝の一部が<em>ヴィティス・ヴィニフェラ</em>である、淡く皮の薄い品種——は、国際の評判を持つ唯一の日本の葡萄である。甲州の葡萄酒と良い日本酒には共通するところが多い。香りの強さの低さ、静かな種の高い酸、そして料理の前ではなく傍らでなすべき務めである。",
              zh:"日本商業化的葡萄酒釀造始於一八七〇年代的勝沼，而甲州葡萄——一種在此栽培數百年、基因上部分屬於歐洲種葡萄的淡色薄皮品種——是唯一具有國際聲譽的日本葡萄。甲州葡萄酒與好清酒有許多共通之處：香氣強度低、帶有安靜性質的高酸度，以及「站在料理旁邊而非前面」的任務。" } },
          { k:{ en:"Whisky", ja:"威士忌", zh:"威士忌" }, jp:"白州",
            v:{ en:"Soft water again", ja:"またも軟水", zh:"又是軟水" },
            d:{ en:"A major distillery sits in the forest at Hakushu on the Southern Alps snowmelt, chosen for exactly the water qualities a sake brewer would choose — very soft, very low in iron, stable year-round. The Japanese whisky and Japanese sake industries have been drawing on the same hydrology, and increasingly on the same tourism, for a century.",
              ja:"南アルプスの雪解けの上、白州の森に大きな蒸留所が座す。日本酒の造り手が選ぶのとまさに同じ水の性質——きわめて軟らかく、鉄がきわめて少なく、年を通じて安定していること——によって選ばれた場所である。日本の威士忌と日本の清酒の産業は、一世紀にわたり同じ水文に、そして次第に同じ観光にも依ってきた。",
              zh:"一座大型蒸餾廠座落在白州的森林中，取用南阿爾卑斯的融雪水，其選址理由正是清酒釀造者會選的那些水質特性——極軟、含鐵極低、全年穩定。日本威士忌與日本清酒產業，一個世紀以來一直取用同一套水文，並且日益共享同一批觀光客。" } },
          { k:{ en:"Sake", ja:"清酒", zh:"清酒" }, jp:"七賢・春鶯囀",
            v:{ en:"Few, and specific", ja:"少なく、そして際立つ", zh:"少，而且鮮明" },
            d:{ en:"Around ten breweries, of which the best known sits at Hakushu on the same water as the distillery and has built much of its modern identity on sparkling sake — bottle-fermented, disgorged, made with a wine technique and sold in a wine idiom. In a prefecture where the neighbours make wine and whisky, the sake brewery ended up borrowing from both, which is a fair description of what a regional identity actually is.",
              ja:"およそ十の蔵があり、最も名高いものは蒸留所と同じ水の上、白州に座し、その現代の姿の多くを発泡清酒の上に築いてきた。瓶内で醗酵させ、澱を抜き、葡萄酒の技で造り、葡萄酒の語法で売られるものである。隣人が葡萄酒と威士忌を造る県において、清酒の蔵はその双方から借りることとなった。地方の個性とは実際に何であるかの、適切な記述である。",
              zh:"約有十家酒藏，其中最知名者座落於白州，與蒸餾廠取用同一道水源，並把自身的現代形象大半建立在氣泡清酒之上——瓶內發酵、除渣，以葡萄酒的技術製作，並以葡萄酒的語彙販售。在一個鄰居們釀葡萄酒與威士忌的縣裡，這家清酒藏最終向兩者借用——而這恰是「地方個性」實際上是什麼的貼切描述。" } }
        ] }
      ] },

    { t:"section", id:"kanto",
      title:{ en:"The Kantō plain", ja:"関東平野", zh:"關東平原" }, jp:"関東の七都県",
      body:[
        { t:"p", text:{
          en:"Kantō's breweries brew beside the largest concentration of drinkers on earth, and almost none of them are famous for a regional style. What they have instead is idiosyncrasy: this is where you find the oldest brewery in Japan, the first postwar all-junmai brewery, a house brewing without added yeast at all, and a brewery growing its own rice in a Tokyo commuter town.",
          ja:"関東の蔵は、地上で最も飲み手の密集した場所のかたわらで醸しており、そのほとんどは地域の型で知られていない。代わりに持っているのは独自性である——日本最古の蔵、戦後最初の全量純米の蔵、酵母を添加せずに醸す家、そして東京の通勤圏の町で自ら米を育てる蔵が、ここにある。",
          zh:"關東的酒藏在地球上飲者最密集之處旁邊釀酒，而它們幾乎沒有一家以某種地域風格聞名。它們擁有的是「特立獨行」：日本最古老的酒藏、戰後第一家全量純米的酒藏、一家完全不添加酵母釀造的酒家，以及一家在東京通勤城鎮裡自己種米的酒藏，都在這裡。" } },

        { t:"defs", items:[
          { term:{ en:"Ibaraki", ja:"茨城", zh:"茨城" }, jp:"茨城県", romaji:"Ibaraki",
            def:{ en:"Home to the brewery most often cited as the oldest continuously operating sake house in Japan, with a founding traditionally dated to the twelfth century — a claim that, whatever its precise standing, marks the outer edge of how far back commercial brewing families can be traced. Ibaraki is also where the flower-yeast programme has been most enthusiastically taken up, isolating brewing yeasts from the flowers of nadeshiko, sunflower and others.",
              ja:"日本で最も古くから続く酒の家としてしばしば挙げられる蔵がある。創業は伝統的に十二世紀とされ、その主張の厳密な位置づけはともかく、商いとしての酒造の家系がどこまで遡りうるかの外縁を示している。茨城はまた、花酵母の事業が最も熱心に受け入れられた土地でもあり、撫子や向日葵などの花から醸造用の酵母を分離している。",
              zh:"日本最常被稱為「持續營運最久之清酒世家」的酒藏就在這裡，其創業依傳統上溯至十二世紀——無論這項說法的確切地位如何，它標示出商業釀酒家族可被追溯的最外緣。茨城也是「花酵母」計畫被最熱切採納的地方，從撫子、向日葵等花朵中分離出釀造用酵母。" } },
          { term:{ en:"Tochigi", ja:"栃木", zh:"栃木" }, jp:"栃木県", romaji:"Tochigi",
            def:{ en:"Water from Nikkō and Nasu, a prefectural sake rice, a prefectural yeast, and — unusually — a prefectural brewing qualification established in the 2000s, the Shimotsuke tōji certification, which is a modern replacement for guild rank. Tochigi is also where the most explicit single-vineyard argument in Japanese sake is being made, by a brewery working only with rice grown within a few kilometres of its own well and brewing it with traditional starters.",
              ja:"日光と那須の水、県の酒米、県の酵母、そして——珍しいことに——二〇〇〇年代に設けられた県の醸造の資格、下野杜氏の認定がある。組の位階に代わる現代の仕組みである。栃木はまた、日本酒における最も明示的な単一圃場の主張がなされている土地でもある。自らの井戸から数キロのうちに育った米だけを用い、伝統的な酒母で醸す蔵によってである。",
              zh:"日光與那須的水、縣產酒米、縣產酵母，以及——相當罕見地——一項於二〇〇〇年代設立的縣級釀造資格「下野杜氏」認定，作為行會位階的現代替代品。栃木也是日本酒中最明確的「單一田塊」主張被提出之處：一家酒藏只使用自家水井方圓數公里內所種的米，並以傳統酒母釀造。" } },
          { term:{ en:"Gunma", ja:"群馬", zh:"群馬" }, jp:"群馬県", romaji:"Gunma",
            def:{ en:"Mountain water from the Tone headwaters and the Akagi massif. The Tone-Numata district received a geographical indication in 2021 — a compact, sub-prefectural designation of the older kind, covering a district rather than a whole administrative unit, and one of the clearer cases where the boundary follows a watershed.",
              ja:"利根の源流と赤城の山塊からの山の水。利根沼田は二〇二一年に地理的表示を得た。行政単位の全体ではなく一地区を覆う、古い型の小さな指定であり、境界が分水嶺に従う、より明快な例の一つである。",
              zh:"來自利根川源頭與赤城山塊的山泉。利根沼田於二〇二一年取得地理標示——這是舊型態的、範圍緊湊的次縣級指定，涵蓋的是一個地區而非整個行政單位，也是邊界依循分水嶺劃定的較清楚案例之一。" } },
          { term:{ en:"Saitama", ja:"埼玉", zh:"埼玉" }, jp:"埼玉県", romaji:"Saitama",
            def:{ en:"Saitama holds a genuine landmark: in the late 1980s a brewery here became the first in postwar Japan to convert its entire production to junmai, at a time when alcohol addition was near-universal and the decision was commercially close to reckless. Most of the all-junmai houses that followed, in every prefecture, are downstream of that decision.",
              ja:"埼玉には本物の里程標がある。一九八〇年代末、ここの一蔵が戦後の日本で初めて全生産を純米に切り替えた。アルコール添加がほぼ普遍であり、その決断が商いとしてほとんど無謀であった時期のことである。以後、どの県においても現れた全量純米の蔵の多くは、この決断の下流にある。",
              zh:"埼玉有一個真正的里程碑：一九八〇年代末，這裡的一家酒藏成為戰後日本第一家把全部產量轉為純米的酒藏——當時添加酒精幾乎是普遍做法，這個決定在商業上近乎魯莽。此後在各縣陸續出現的全量純米酒藏，多半都位於這個決定的下游。" } },
          { term:{ en:"Chiba", ja:"千葉", zh:"千葉" }, jp:"千葉県", romaji:"Chiba",
            def:{ en:"The prefecture of deliberate awkwardness. One house here brews with no added yeast, no added lactic acid and no filtration, using bodaimoto and kimoto and whatever population lives in its building; another has brewed a high-temperature yamahai of its own devising since the 1950s and matures sake for decades. Neither is a revival marketing exercise; both have been doing it long enough to have simply outlasted the fashion.",
              ja:"意図された不器用さの県である。ここの一家は酵母も乳酸も加えず、濾過もせず、菩提酛と生酛と、建物に住む集団のみで醸す。別の一家は一九五〇年代から独自の高温山廃を醸し、酒を数十年寝かせる。いずれも復古を売る企てではない。いずれも、流行を単に生き延びるだけの年月、それを続けてきた。",
              zh:"這是一個「刻意笨拙」的縣。這裡有一家酒藏不加酵母、不加乳酸、不過濾，只用菩提酛、生酛，以及棲息在自家建築中的菌群釀酒；另一家則自一九五〇年代起釀造自創的高溫山廢，並讓酒熟成數十年。兩者都不是把復古當行銷的操作；它們持續這麼做的時間，早已長到足以熬過任何一波流行。" } },
          { term:{ en:"Tokyo", ja:"東京", zh:"東京" }, jp:"東京都", romaji:"Tōkyō",
            def:{ en:"Tokyo still brews. About ten breweries survive, almost all of them in the western Tama valley, drawing groundwater from the Okutama mountains — including one founded in the early eighteenth century that now runs a riverside garden and tasting rooms, and is the easiest working sake brewery in Japan to reach from an international airport. The Izu islands, administratively part of Tokyo, hold a shōchū geographical indication designated in 2024.",
              ja:"東京は今も醸している。およそ十の蔵が残り、そのほとんどは西の多摩の谷にあり、奥多摩の山々の地下水を汲む。十八世紀初頭の創業で、今日は川辺の庭と試飲処を営む蔵もあり、国際空港から最も行きやすい稼働中の酒蔵である。行政上は東京の一部である伊豆諸島は、二〇二四年に指定された焼酎の地理的表示を持つ。",
              zh:"東京仍在釀酒。約有十家酒藏留存，幾乎全在西邊的多摩谷地，汲取奧多摩山區的地下水；其中一家創業於十八世紀初，如今經營著河畔庭園與試飲空間，是全日本從國際機場最容易抵達的運轉中酒藏。行政上屬於東京的伊豆群島，則擁有一項二〇二四年指定的燒酎地理標示。" } },
          { term:{ en:"Kanagawa", ja:"神奈川", zh:"神奈川" }, jp:"神奈川県", romaji:"Kanagawa",
            def:{ en:"A handful of breweries drawing on Tanzawa and Hakone water. The prefecture's most interesting position is agricultural: at least one brewery here describes itself as a cultivating brewery, growing a substantial share of its own rice in the paddies around the building — a rare arrangement in an industry where rice is normally contracted from farmers who never meet the brewer.",
              ja:"丹沢と箱根の水を汲む、数えるほどの蔵がある。この県の最も興味深い立場は農にある——ここの少なくとも一蔵は自らを栽培醸造蔵と称し、建物の周りの田で自らの米の相当な割合を育てている。米が、造り手と会うことのない農家から契約で調達されるのが常であるこの産業において、稀な仕組みである。",
              zh:"少數幾家酒藏汲取丹澤與箱根的水。這個縣最有意思的位置在農業面：這裡至少有一家酒藏自稱「栽培釀造藏」，在建築周圍的水田裡種出自家所需相當比例的米——在一個「米通常向從未見過釀造者的農家契作」的產業裡，這是罕見的安排。" } }
        ] },

        { t:"note", text:{
          en:"The pattern across Kantō is worth stating plainly: proximity to the market removes the need to be regional, and what fills the gap is a strong individual position. If you are looking for the arguments about sake rather than the styles, this is the most concentrated place in Japan to find them. For the compact table of all forty-seven prefectures see <a href=\"regions.html\">Regions A–Z</a>.",
          ja:"関東を貫く型ははっきり述べる値打ちがある——市場に近いことが地域的である必要を取り去り、その空隙を埋めるのが強い個の立場である。型ではなく日本酒をめぐる議論を探しているなら、日本でそれが最も密に見つかる場所がここである。四十七都道府県の一覧表は<a href=\"regions.html\">産地一覧</a>を参照。",
          zh:"貫穿關東的模式值得明說：靠近市場消除了「必須具有地域性」的需要，而填補這個空缺的，是強烈的個人立場。如果你找的是關於清酒的種種論辯而非風格，這裡是全日本論辯最密集之處。四十七都道府縣的簡表見<a href=\"regions.html\">產地一覽</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"regions.html", why:{ en:"The same prefectures in the national index.", ja:"同じ県を、全国の索引のなかで。", zh:"同樣這些縣，放在全國索引裡。" } },
      { href:"gi.html", why:{ en:"Nagano's appellation, and the ones that followed it.", ja:"長野の原産地呼称と、それに続いたもの。", zh:"長野的原產地呼稱制度，以及跟隨它的那些。" } },
      { href:"water.html", why:{ en:"Snowmelt, and what it does and does not carry.", ja:"雪解けの水が運ぶもの、運ばぬもの。", zh:"融雪水帶來什麼，又沒有帶來什麼。" } },
      { href:"styles.html", why:{ en:"Tanrei karakuchi, and what the phrase actually promises.", ja:"淡麗辛口という語が実際に約するもの。", zh:"「淡麗辛口」這個詞實際上承諾了什麼。" } }
    ] }
  ]
};


/* ---- ------------------------------------- region-hokuriku */
SAKE.pages["region-hokuriku"] = {
  kicker: { en: "Place · 05", ja: "産地 · 05", zh: "產地 · 05" },
  title:  { en: "Hokuriku & Tōkai", ja: "北陸と東海", zh: "北陸與東海" },
  jp: "北陸・東海",
  lede: {
    en: "A band of prefectures running from the snow of the Sea of Japan coast to the mild Pacific side, and containing the two most instructive counter-examples in Japanese sake: Ishikawa, where the country's first geographical indication was granted and where the most famous surviving guild works, and Shizuoka, which had no brewing reputation at all until a prefectural researcher gave it one in the 1980s. Between them sit Toyama, Fukui, Gifu, Aichi and Mie — quieter, but between them responsible for a very large share of the rice and the mirin the rest of the industry uses.",
    ja: "日本海側の雪から太平洋側の温暖まで走る一帯であり、日本酒において最も示唆に富む二つの反例を含んでいる——最初の地理的表示が与えられ、最も名高い杜氏集団がなお働く石川と、一九八〇年代に県の研究者が与えるまで酒の名声をまったく持たなかった静岡である。そのあいだに富山、福井、岐阜、愛知、三重が座る。より静かではあるが、業界の他が用いる米と味醂の非常に大きな部分を、これらが担っている。",
    zh: "這是一條從日本海側的雪一路延伸到太平洋側溫和氣候的縣份帶，並包含日本酒中最具啟發性的兩個反例：石川——全國第一個地理標示在此授予，最負盛名的現存杜氏集團也在此工作；以及靜岡——在一九八〇年代由一位縣立研究者賦予它聲譽之前，它完全沒有釀酒名聲。兩者之間坐落著富山、福井、岐阜、愛知與三重——較為安靜，卻共同供應了業界其餘部分所用之米與味醂中極大的一部分。"
  },
  body: [

    { t:"section", id:"ishikawa",
      title:{ en:"Ishikawa", ja:"石川", zh:"石川" }, jp:"石川県",
      body:[
        { t:"defs", items:[
          { term:{ en:"The first GI", ja:"最初の地理的表示", zh:"第一個 GI" }, jp:"GI白山", romaji:"GI Hakusan",
            def:{ en:"Hakusan, designated in 2005, was the first geographical indication granted to a sake anywhere in Japan — a decade before the national <em>Nihonshu</em> designation and eleven years before the first whole prefecture. It covers a small area around the city of Hakusan on the snowmelt water of the mountain, and its standards were revised in 2025. Everything the GI scheme has since become, for better and worse, started here as a tight, watershed-shaped designation.",
              ja:"平成十七年（2005）指定の白山は、日本において清酒に与えられた最初の地理的表示である。国としての「日本酒」の指定より十年、県全域の最初の指定より十一年早い。山の雪解け水の上にある白山市周辺の小さな範囲を覆い、その基準は二〇二五年に改められた。地理的表示の制度がその後なったもののすべては、良くも悪くも、分水嶺の形をした締まった指定として、ここから始まった。",
              zh:"二〇〇五年指定的白山，是日本第一個授予清酒的地理標示——比全國性的「日本酒」指定早十年，比第一個全縣範圍的指定早十一年。它涵蓋以白山融雪水為基礎、環繞白山市的一小片區域，其標準於二〇二五年修訂。GI 制度日後所變成的一切，無論好壞，都是從這裡開始的——一個緊湊、依分水嶺劃定的指定。" } },
          { term:{ en:"The Noto guild", ja:"能登杜氏", zh:"能登杜氏" }, jp:"能登杜氏", romaji:"Noto tōji",
            def:{ en:"Small, and disproportionately celebrated. The Noto guild is associated with rich, well-structured, acid-framed sake and above all with keeping yamahai alive through the decades when the rest of the industry had abandoned it as too slow and too risky. Its four most celebrated brewers were known collectively as the Noto shitennō, and its most famous living member has been brewing for more than seventy years.",
              ja:"小さく、そして不釣り合いなほど名高い。能登杜氏は厚く、骨格があり、酸に支えられた酒と結びつき、何よりも、業界の他が遅く危険すぎるとして捨てた数十年を通じて山廃を生かし続けたことと結びついている。最も名高い四人は能登四天王と総称され、存命の最も名高い一人は七十年を越えて醸し続けている。",
              zh:"規模小，名聲卻大得不成比例。能登杜氏與厚實、有骨架、以酸為框架的酒緊密相連，尤其與「在產業其餘部分因太慢太冒險而放棄山廢的那數十年間，讓它活下來」這件事相連。其中最負盛名的四人被合稱為「能登四天王」，而仍在世的最知名者，已釀酒逾七十年。" } },
          { term:{ en:"January 2024", ja:"二〇二四年一月", zh:"二〇二四年一月" }, jp:"能登半島地震", romaji:"Noto hantō jishin",
            def:{ en:"The Noto peninsula earthquake at the start of 2024 damaged or destroyed a number of breweries on the peninsula, in a region where breweries are often the oldest and largest buildings in a small town. Several have rebuilt, several have brewed in borrowed premises elsewhere in the prefecture, and some have not resumed. It is the most recent reminder that a brewery is a physical building with a resident microflora, and that neither is easily replaced.",
              ja:"二〇二四年の初めの能登半島地震は、半島の少なからぬ蔵を損ない、あるいは失わせた。蔵が小さな町の最も古く最も大きな建物であることの多い地域においてである。建て直した蔵もあり、県内の他所の施設を借りて醸した蔵もあり、再開していない蔵もある。蔵とは住み着いた微生物相をもつ物理的な建物であり、そのいずれもたやすくは替えられないという、最も新しい記憶である。",
              zh:"二〇二四年年初的能登半島地震，損毀或摧毀了半島上為數不少的酒藏；而在這個地區，酒藏往往是小鎮上最古老、最大的建築。有些已重建，有些借用縣內他處的設施釀酒，也有些尚未恢復。這是最近的一次提醒：酒藏是一棟帶有常駐微生物相的實體建築，而兩者都不容易替代。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"菊姫・天狗舞・農口尚彦研究所", romaji:"Kikuhime, Tengumai, Noguchi Naohiko Kenkyūjo",
            def:{ en:"Kikuhime, in the Hakusan GI area, is the long-maturation house — contract Yamada Nishiki from Hyōgo, aged for years, deliberately out of step with the fresh-and-fragrant fashion. Tengumai is the yamahai signature. The Noguchi Naohiko Sake Institute at Komatsu, opened in 2017, was built around one brewer who was already past eighty, which is either a monument or a working brewery depending on how you look at it — and it is both.",
              ja:"白山の地理的表示の域にある菊姫は長期熟成の家である。兵庫の契約栽培の山田錦を用い、年を重ねて寝かせ、新鮮で香り高い流行から意図して外れている。天狗舞は山廃の署名である。二〇一七年に開いた小松の農口尚彦研究所は、すでに八十を越えていた一人の造り手を軸に建てられた。見方によって記念碑でもあり稼働中の蔵でもある——そして実際にはその双方である。",
              zh:"位於白山 GI 區內的菊姬是長期熟成之家——使用兵庫契作的山田錦，陳放多年，刻意與「新鮮芳香」的潮流錯開。天狗舞是山廢的署名。二〇一七年開設於小松的農口尚彥研究所，是圍繞一位當時已年逾八十的釀造者而建的；端看你怎麼看，它既是紀念碑也是運轉中的酒藏——而事實上兩者皆是。" } }
        ] }
      ] },

    { t:"section", id:"shizuoka",
      title:{ en:"Shizuoka", ja:"静岡", zh:"靜岡" }, jp:"静岡県",
      body:[
        { t:"p", text:{
          en:"The most important counter-example in modern sake. Shizuoka is mild, humid and coastal — every condition traditional brewing regarded as a disadvantage — and had no reputation whatever until the 1980s. What changed was not the climate.",
          ja:"現代の日本酒における最も重要な反例である。静岡は温暖で、湿潤で、海に面している——伝統的な酒造りが不利と見なしたあらゆる条件である——そして一九八〇年代まで、まったく評判を持たなかった。変わったのは気候ではない。",
          zh:"這是現代日本酒中最重要的反例。靜岡溫和、潮濕、臨海——每一項條件在傳統釀造眼中都是劣勢——而且直到一九八〇年代都毫無聲譽可言。改變的並不是氣候。" } },
        { t:"defs", items:[
          { term:{ en:"What actually changed", ja:"実際に変わったもの", zh:"真正改變的東西" }, jp:"静岡酵母", romaji:"Shizuoka kōbo",
            def:{ en:"A researcher at the prefectural industrial technology centre developed a family of prefectural yeasts — HD-1 and its siblings — selected not for competition-winning aroma but for clean, low-key, dry fermentation suited to a warm cellar and to drinking with food. He then taught the technique brewery by brewery until the prefecture's brewers were working to a shared method. At the 1986 National New Sake Appraisal, Shizuoka took ten gold medals and seven further awards — roughly half the prefecture's breweries at the time.",
              ja:"県の工業技術センターの研究者が、県の酵母の一族——HD-1とその兄弟株——を育てた。鑑評会向けの華やかな香りのためではなく、暖かい蔵に適し、料理と共に飲むための清らかで控えめな辛口の発酵のために選抜されたものである。そして彼は蔵を一つずつ回って技術を教え、県内の造り手が共通の方法で仕事をするに至らしめた。昭和六十一年（1986）の全国新酒鑑評会で、静岡は金賞十、入賞七を得た。当時の県内蔵元のおよそ半数である。",
              zh:"縣工業技術中心的一位研究者培育出一系列縣產酵母——HD-1 及其姊妹株——其選育方向不是鑑評會取勝的華麗香氣，而是適合溫暖酒藏、適合佐餐的乾淨、內斂、偏辛的發酵。接著他一藏一藏地傳授技術，直到全縣的釀造者以共通的方法工作。一九八六年全國新酒鑑評會，靜岡拿下十面金賞與七項入賞——約占當時全縣酒藏的一半。" } },
          { term:{ en:"Water and rice", ja:"水と米", zh:"水與米" }, jp:"富士山伏流水・誉富士", romaji:"Fuji fukuryūsui, Homare Fuji",
            def:{ en:"Groundwater filtered through the basalt of Mount Fuji and the Southern Alps, soft and famously stable in temperature and volume year-round. Homare Fuji is the prefectural sake rice, bred in the 2000s from a Yamada Nishiki line adapted to Shizuoka conditions. Shizuoka was designated a geographical indication in 2023.",
              ja:"富士と南アルプスの玄武岩に濾された地下水であり、軟らかく、水温も湧出量も年間を通じて安定していることで知られる。誉富士は県の酒米であり、二〇〇〇年代に山田錦の系統から静岡の条件に合わせて育てられた。静岡は二〇二三年に地理的表示に指定された。",
              zh:"經富士山與南阿爾卑斯玄武岩過濾的地下水，質軟，且以全年水溫與湧量穩定著稱。譽富士是縣產酒米，於二〇〇〇年代由山田錦系統選育、適應靜岡的條件。靜岡於二〇二三年獲指定為地理標示。" } },
          { term:{ en:"The style", ja:"酒質の型", zh:"酒質風格" }, jp:"食を先に立てる", romaji:"shoku wo saki ni tateru",
            def:{ en:"Quiet, clean, dry, and built to sit under food rather than in front of it — a deliberate refusal of the aromatic ginjō arms race that was happening everywhere else in the same decade. Shizuoka is the prefecture to reach for when someone says all modern sake smells of banana, and it is the clearest demonstration in Japan that a region can decide to become a sake region.",
              ja:"静かで、清らかで、辛口であり、料理の前に立つのではなく下に座るよう造られている。同じ十年に他のどこでも起きていた香りの軍拡競争への、意図された拒否である。現代の日本酒はどれもバナナの匂いがすると誰かが言うとき、手を伸ばすべきは静岡である。そして地域が酒の産地になると決めうることの、日本で最も明快な実証でもある。",
              zh:"安靜、乾淨、偏辛，並且被設計成坐在料理之下而非站在它之前——這是對同一個十年間在別處四處上演的芳香吟釀軍備競賽，所做的刻意拒絕。當有人說「現代清酒都是香蕉味」時，該伸手去拿的就是靜岡。它也是日本最清楚的實證：一個地域可以決定成為產酒之鄉。" } }
        ] }
      ] },

    { t:"section", id:"snow",
      title:{ en:"Snow as an ingredient", ja:"材としての雪", zh:"作為原料的雪" }, jp:"雪と酒",
      body:[
        { t:"figure",
          caption:{
            en:"Two or three metres of snow, and what a brewery does with it. Three of these four are the reasons snow country brews well, and only the first is the one people name — the cold. The damp matters as much and is almost never mentioned, because damp cold and dry cold are completely different things to work in. The fourth is the oldest refrigeration in Japan. The band underneath is the part of the arrangement that does not appear in any romantic account of snow-country sake, and it arrives in the same weeks as the brewing season.",
            ja:"二、三メートルの雪と、蔵がそれで何をするか。この四つのうち三つは雪国がよく醸す理由であり、人が名を挙げるのは最初の一つ——寒さ——だけである。湿りは同じだけ大切でありながら、ほとんど語られない。湿った寒さと乾いた寒さは、そのなかで働くには全く別のものだからである。四つめは日本で最も古い冷蔵である。下の帯は、雪国の酒についてのいかなる情緒的な話にも現れない部分であり、そしてそれは、造りの季節と同じ数週のうちに来る。",
            zh:"兩三公尺的雪，以及一家酒藏拿它來做什麼。這四項中有三項是雪國能釀出好酒的理由，而人們會提到的只有第一項——寒冷。潮濕同樣重要，卻幾乎從不被提起，因為對在其中工作的人而言，濕冷與乾冷是完全不同的兩回事。第四項則是日本最古老的冷藏。下方那條帶，是任何關於雪國清酒的浪漫敘述中都不會出現的部分——而它，正好和釀造季節在同樣那幾週抵達。" },
          svg: function (lang, L) {
            var W = 760, H = 322;
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
            /* the snow */
            s += '<rect x="30" y="40" width="700" height="38" fill="#EDF1F2" stroke="#B9C3C8"/>';
            var f;
            for (f = 0; f < 26; f++) {
              var fx = 44 + f * 27, fy = 48 + (f % 3) * 9;
              s += '<rect x="' + fx + '" y="' + fy + '" width="4" height="4" fill="#B9C3C8"/>';
            }
            s += '<rect x="250" y="48" width="260" height="22" fill="#EDF1F2"/>';
            s += '<text x="380" y="63" text-anchor="middle" font-size="12" fill="#4F6672">' +
                 (lang === "ja" ? "二、三メートルの雪" : lang === "zh" ? "兩三公尺的雪" : "two or three metres of snow") + '</text>';
            var gifts = [
              { jp:"寒さ", n:{ en:"cold", ja:"さむさ", zh:"寒冷" },
                t:{ en:"a cellar near freezing for four months: a 35-day mash at 8–10 °C, no refrigeration",
                    ja:"四か月、氷点近くの蔵。冷却装置なしで8〜10℃の醪を三十五日",
                    zh:"四個月接近冰點的酒藏：不靠冷卻設備，醪就能在 8–10 °C 走三十五天" } },
              { jp:"湿り", n:{ en:"damp", ja:"しめり", zh:"潮濕" },
                t:{ en:"damp cold, not dry: rice loses water evenly and the kōji room does not fight the air",
                    ja:"乾いた寒さではなく湿った寒さ。米は均しく水を失い、麹室は空気と争わない",
                    zh:"是濕冷而非乾冷：米均勻失水，麴室也不必與空氣對抗" } },
              { jp:"水", n:{ en:"water", ja:"みず", zh:"水" },
                t:{ en:"soft, and late — snowmelt arrives through the year rather than in one flush",
                    ja:"軟らかく、遅い。雪解けは一度にではなく年を通して届く",
                    zh:"軟，而且來得晚——融雪全年緩緩抵達，而非一次湧出" } },
              { jp:"雪室", n:{ en:"a snow room", ja:"ゆきむろ", zh:"雪室" },
                t:{ en:"packed snow holds 0–2 °C for months at no energy cost at all",
                    ja:"詰めた雪は零から二度を、何か月も費えなしに保つ",
                    zh:"壓實的雪能以零能源成本維持 0–2 °C 數月" } }
            ];
            var i, k, BY = 116, BH = 84;
            for (i = 0; i < gifts.length; i++) {
              var gx = 30 + i * 176, cx = gx + 82;
              s += '<line x1="' + cx + '" y1="78" x2="' + cx + '" y2="' + (BY - 9) + '" stroke="#B9C3C8"/>';
              s += '<path d="M' + cx + ' ' + BY + ' L' + (cx - 5) + ' ' + (BY - 10) + ' L' + (cx + 5) + ' ' + (BY - 10) + ' Z" fill="#B9C3C8"/>';
              s += '<rect x="' + gx + '" y="' + BY + '" width="164" height="' + BH + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (gx + 12) + '" y="' + (BY + 24) + '" font-size="14" fill="#201E1B">' + gifts[i].jp + '</text>';
              s += '<text x="' + (gx + 152) + '" y="' + (BY + 24) + '" text-anchor="end" font-size="8.5" fill="#ADA79E">' + L(gifts[i].n) + '</text>';
              var gl = wrap(L(gifts[i].t), cjk, cjk ? 13 : 26);
              for (k = 0; k < gl.length && k < 4; k++) {
                s += '<text x="' + (gx + 12) + '" y="' + (BY + 42 + k * 12.5) + '" font-size="8.5" fill="#8B857C">' + gl[k] + '</text>';
              }
            }
            /* the bill */
            var CY = BY + BH + 26;
            s += '<rect x="30" y="' + CY + '" width="700" height="60" fill="#F2EFE8" stroke="#DED8CB"/>';
            s += '<text x="44" y="' + (CY + 24) + '" font-size="14" fill="#201E1B">代償</text>';
            s += '<text x="44" y="' + (CY + 41) + '" font-size="8.5" fill="#ADA79E">' +
                 (lang === "ja" ? "そして代償" : lang === "zh" ? "以及代價" : "and the bill") + '</text>';
            var bt = (lang === "ja" ? "道を閉ざし、屋根を潰し、小さな蔵を数週にわたり客から切り離す。しかも、季節のなかでそれが最も響く時期にである。酒を良くするその天候が、商いを脆くする。"
                      : lang === "zh" ? "它封閉道路、壓垮屋頂，把一家小酒藏與它的客戶隔絕數週——而且正好在這一季最要緊的時刻。讓酒變好的那個天候，也讓生意變得脆弱。"
                      : "It closes roads, collapses roofs, and cuts a small brewery off from its customers for weeks — at the point in the season when that matters most. The weather that makes the sake good makes the business fragile.");
            var bl = wrap(bt, cjk, cjk ? 40 : 96);
            for (k = 0; k < bl.length && k < 3; k++) {
              s += '<text x="130" y="' + (CY + 24 + k * 14) + '" font-size="10" fill="#8B857C">' + bl[k] + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "雪は原料ではない。だが、原料に対してすることのほとんどを、雪がしている。"
                  : lang === "zh" ? "雪不是原料，但原料所受到的處置，大半是雪做的。"
                  : "Snow is not an ingredient, but most of what happens to the ingredients is done by snow.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The Sea of Japan coast from Toyama to Fukui takes some of the heaviest snowfall of any inhabited place on earth — winds crossing a warm sea, hitting a cold mountain wall, and unloading two or three metres onto towns that carry on working underneath it. Every part of brewing here is shaped by that, and not only by the cold.",
          ja:"富山から福井に至る日本海の沿岸は、人の住む地上のいずこにも劣らぬ豪雪を受ける。暖かい海を渡った風が冷たい山の壁に当たり、二メートル三メートルを、その下で働き続ける町へ降ろすのである。ここでの酒造りのあらゆる部分がそれに形づくられており、そして寒さのみによってではない。",
          zh:"從富山到福井的日本海沿岸，承受著地球上有人居住之地數一數二的豪雪——風越過溫暖的海面，撞上冰冷的山牆，把兩三公尺的雪卸在仍在其下運作的城鎮上。這裡釀酒的每一個環節都被它塑形，而且不只是因為寒冷。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Cold", ja:"寒さ", zh:"寒冷" }, jp:"寒造り",
            v:{ en:"The obvious one", ja:"明らかなもの", zh:"顯而易見的那一項" },
            d:{ en:"A cellar that sits near freezing for four months lets a brewer run a mash at 8 to 10 °C for thirty-five days without spending anything on refrigeration. That is the whole basis of winter brewing and it is why the industry moved north and west as soon as transport allowed.",
              ja:"四か月にわたり氷点近くに座る蔵は、冷却に何を費やすことなく、八度から十度の醪を三十五日走らせることを許す。それが寒造りの基のすべてであり、運びが許すやいなや産業が北へ西へ移った理由である。",
              zh:"一座連續四個月維持在近冰點的酒藏，能讓釀造者以攝氏八到十度跑上三十五天的醪，而完全不必為冷卻花錢。這就是寒造的全部基礎，也是運輸條件一允許、產業就往北往西移動的原因。" } },
          { k:{ en:"Humidity", ja:"湿り", zh:"濕度" }, jp:"湿度",
            v:{ en:"The unobvious one", ja:"明らかでないもの", zh:"不那麼明顯的那一項" },
            d:{ en:"Snow country is cold and damp, not cold and dry. Damp cold is much easier to brew in than dry cold: rice does not lose water unevenly on the cooling table, the kōji room does not fight the air, and a wooden building does not shrink and crack. Breweries in cold dry climates abroad routinely discover this the expensive way.",
              ja:"雪国は寒く湿っており、寒く乾いてはいない。湿った寒さは乾いた寒さよりはるかに醸しやすい。放冷の台で米がむらに水を失わず、麹室が空気と争わず、木の建物が縮んで割れることもない。国外の寒く乾いた気候の蔵は、決まって高い代価を払ってこれを知る。",
              zh:"雪國是又冷又濕，而非又冷又乾。濕冷比乾冷好釀得多：米在放冷台上不會不均勻失水、麴室不必與空氣搏鬥、木造建築也不會收縮龜裂。位於寒冷乾燥氣候的海外酒藏，往往是以高昂代價才學到這件事。" } },
          { k:{ en:"Water", ja:"水", zh:"水" }, jp:"融雪水",
            v:{ en:"Soft, and late", ja:"軟らかく、そして遅れて来る", zh:"質軟，而且遲到" },
            d:{ en:"Snowmelt filtered through granite and volcanic rock is very soft and very low in iron. It also arrives on a delay of years rather than weeks — what falls this winter emerges from the spring long after — which is why brewers here talk about water in decades and are unusually alarmed by anything that changes the mountain.",
              ja:"花崗岩と火山の岩に濾された雪解けの水はきわめて軟らかく、鉄がきわめて少ない。またそれは週ではなく年の遅れをもって届く。この冬に降ったものが泉から出るのははるか後のことである。ゆえにここの造り手は水を十年の単位で語り、山を変えるものに対して並外れて警戒する。",
              zh:"經花崗岩與火山岩過濾的融雪水質極軟，含鐵量極低。它抵達的延遲以年、而非以週計——今冬落下的雪，要很久之後才從泉眼湧出。這就是為什麼此地的釀造者以「十年」為單位談論水，並對任何改變山體的事情格外警覺。" } },
          { k:{ en:"Storage", ja:"貯蔵", zh:"貯藏" }, jp:"雪室・雪中貯蔵",
            v:{ en:"A cellar made of weather", ja:"天気でできた蔵", zh:"用天氣蓋成的酒窖" },
            d:{ en:"Packed snow holds a stable zero to two degrees for months at no energy cost, and several houses store bottles in a snow room or bury them in a drift until summer. It is partly showmanship and partly the cheapest cold storage ever devised; the sake comes out with the slow, rounded profile of anything held very cold for a long time.",
              ja:"締めた雪は零度から二度を数か月にわたり、何の力も費やさずに保つ。瓶を雪室に納め、あるいは夏まで雪の吹き溜まりに埋める家がいくつかある。半ばは見せ物であり、半ばはこれまで考案された最も安い冷蔵である。酒は、長く強く冷やされたものすべてが持つ、遅く丸い姿で出てくる。",
              zh:"壓實的雪能在零至攝氏二度之間穩定維持數月，且不耗任何能源；有幾家酒藏會把酒瓶存放在雪室，或直接埋進雪堆裡直到夏天。這一半是表演，一半是有史以來最便宜的冷藏方式；取出的酒帶著任何被長時間低溫保存之物所具有的、緩慢而圓潤的樣貌。" } }
        ] },
        { t:"note", title:{ en:"And the cost", ja:"そして代価", zh:"以及代價" }, text:{
          en:"Snow is not free. It closes roads, collapses roofs, cuts a small brewery off from its own customers for weeks, and makes the whole logistics of the brewing season fragile at exactly the point it matters most. The same weather that makes the sake good makes the business hard, which is a fair summary of most of rural Japan.",
          ja:"雪は無償ではない。道を閉ざし、屋根を潰し、小さな蔵をその客から幾週も断ち、酒造りの季節の物流の全体を、最も重い時点においてこそ脆くする。酒を良くする同じ天気が商いを難しくする。それは日本の地方のほとんどの適切な要約である。",
          zh:"雪並不免費。它封路、壓垮屋頂、把小酒藏與自己的客戶隔絕數週，並在最要緊的時刻讓整個釀造季的物流變得脆弱。讓酒變好的同一種天氣，讓生意變難——這句話恰好也是日本大部分鄉村的寫照。" } }
      ] },

    { t:"section", id:"firsts",
      title:{ en:"Four bottles that moved something", ja:"何かを動かした四本", zh:"推動了什麼的四瓶酒" }, jp:"四つの銘柄",
      body:[
        { t:"p", text:{
          en:"This band of prefectures has produced an unusual number of bottles that changed the industry's assumptions rather than merely selling well.",
          ja:"この一帯の県は、単によく売れたのではなく業界の前提を変えた瓶を、異例なほど多く生んできた。",
          zh:"這一帶的縣份，產出了異常多「改變了產業預設」而非僅僅暢銷的酒。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"The first daiginjō you could buy", ja:"買える最初の大吟醸", zh:"第一瓶買得到的大吟釀" }, jp:"黒龍「龍」・福井", romaji:"Kokuryū Ryū, Fukui", meta:{ en:"1975", ja:"昭和五十年", zh:"1975 年" },
            text:{ en:"Daiginjō existed before 1975, but only as the sake breweries made for the national competition and did not sell — a few tanks a year, given away or kept. Kokuryū at Eiheiji put one in a bottle, priced it as a luxury, and sold it. The idea that the very top of what a brewery could do should be available to the public rather than to a jury is now so normal that it takes an effort to see it as a decision, and it was made here.",
              ja:"大吟醸は昭和五十年（1975）より前にも存在したが、蔵が全国の鑑評会のために造り、売らなかった酒としてのみであった。年に数本の槽であり、贈られるか、保たれるかであった。永平寺の黒龍はそれを瓶に入れ、奢侈として値を付け、売った。蔵のなしうる最上のものが、審査員にではなく世に開かれるべきだという考えは、今やあまりに当たり前であって、それを決断として見るには努力を要する。そしてそれはここで下された。",
              zh:"大吟釀在一九七五年之前就已存在，但僅僅是酒藏為全國鑑評會而釀、並不販售的那種酒——一年幾槽，送人或自留。永平寺的黑龍把它裝進瓶子、以奢侈品定價，然後賣了出去。「一家酒藏所能做到的最高水準，應該向公眾而非向評審開放」這個想法，如今尋常到需要費力才能把它看成一個決斷——而這個決斷正是在這裡做出的。" } },
          { n:2, title:{ en:"The house that went to Burgundy", ja:"ブルゴーニュへ行った家", zh:"去了勃艮第的酒藏" }, jp:"醸し人九平次・愛知", romaji:"Kamoshibito Kuheiji, Aichi", meta:{ en:"Nagoya", ja:"名古屋", zh:"名古屋" },
            text:{ en:"An old Nagoya house whose heads have all been called Kuheiji, which reinvented itself in the 1990s around a wine-shaped argument: that sake should be discussed in terms of the field it came from. It got itself onto the list of a three-star restaurant in Paris, then took the argument to its conclusion — planting its own Yamada Nishiki in Hyōgo, and acquiring a domaine in Burgundy, so that the same company now makes both sake in Japan and wine in France. Whatever one thinks of the framing, no other brewery has tested it so literally.",
              ja:"当主が代々九平治を名乗る名古屋の古い家であり、一九九〇年代に、葡萄酒の形をした論を軸に自らを作り直した。日本酒はそれの来た田によって語られるべきだという論である。巴里の三つ星の店の品書きに載り、ついでその論を結末まで運んだ。兵庫に自らの山田錦を植え、ブルゴーニュにドメーヌを得て、同じ会社が今や日本で酒を、仏蘭西で葡萄酒を造る。その枠組みをどう思うにせよ、これほど文字通りにそれを試した蔵は他にない。",
              zh:"一家歷代當家皆名為「九平治」的名古屋老鋪，在一九九〇年代圍繞一個葡萄酒式的論點重塑自己：清酒應該以它所來自的那塊田來討論。它讓自己進入巴黎某家三星餐廳的酒單，接著把這個論點推到底——在兵庫種下自家的山田錦，並在勃艮第取得一座酒莊，使同一家公司如今在日本釀清酒、在法國釀葡萄酒。無論你怎麼看待這套框架，沒有第二家酒藏如此字面地檢驗過它。" } },
          { n:3, title:{ en:"The bottle you cannot buy", ja:"買えない瓶", zh:"買不到的那瓶酒" }, jp:"而今・三重", romaji:"Jikon, Mie", meta:{ en:"Nabari", ja:"名張", zh:"名張" },
            text:{ en:"A very small house in Nabari whose sake became, through the 2010s, the most sought-after allocation in Japan — sold only through a short list of shops, in quantities that never met demand, and resold at multiples. It is the clearest case of a phenomenon this site tries to be honest about: scarcity is a real quality signal and also a self-reinforcing one, and past a certain point the price is measuring the queue rather than the sake. The sake, for what it is worth, is genuinely excellent.",
              ja:"名張のごく小さな家であり、その酒は二〇一〇年代を通じて日本で最も求められる配分となった。短い一覧の店を通してのみ売られ、需要に決して届かぬ量で、幾倍にも転売された。この場所が正直であろうとする現象の最も明快な例である。稀少さは実際の品質の兆しであり、同時に自らを強める兆しでもある。ある点を越えれば、値は酒ではなく行列を測っている。念のために言えば、酒そのものは本当に見事である。",
              zh:"名張的一家極小酒藏，其酒在二〇一〇年代間成為全日本最搶手的配額——只透過一份很短的店家名單販售，數量從未滿足需求，並以數倍價格被轉賣。它是本站試圖誠實面對的一種現象最清楚的案例：稀缺性既是真實的品質訊號，也是一個自我強化的訊號；過了某個點之後，價格量的是隊伍，而不是酒。順帶一提，那酒本身確實出色。" } },
          { n:4, title:{ en:"The summit bottles", ja:"サミットの酒", zh:"高峰會上的酒" }, jp:"作・半蔵・瀧自慢・三重", romaji:"Zaku, Hanzō, Takijiman, Mie", meta:{ en:"2016", ja:"平成二十八年", zh:"2016 年" },
            text:{ en:"When the G7 met at Ise-Shima in 2016 the sake poured was entirely local: Zaku from Suzuka at the first working lunch, Hanzō from Iga at the working dinner, Takijiman from Nabari at the second lunch. Three small Mie houses, none of them famous outside Japan at the time, all three permanently harder to buy afterwards. It is the clearest demonstration available of how much a single evening of visibility is worth to a small brewery, and of how arbitrary that distribution of luck is.",
              ja:"平成二十八年（2016）、主要国首脳会議が伊勢志摩で開かれたとき、注がれた酒はことごとく地元のものであった。最初の昼の作業の食事に鈴鹿の作、夜の作業の食事に伊賀の半蔵、二日目の昼に名張の瀧自慢である。当時いずれも日本の外では知られていなかった三重の小さな三軒であり、三軒ともその後は永く買いにくくなった。一夜の可視性が小さな蔵にとってどれほどの値打ちを持つか、そしてその運の配りがいかに恣意的であるかの、得られる最も明快な実証である。",
              zh:"二〇一六年 G7 於伊勢志摩召開時，所斟的酒全是在地產：第一天工作午宴用鈴鹿的「作」，工作晚宴用伊賀的「半藏」，第二天午宴用名張的「瀧自慢」。三家三重的小酒藏，當時在日本以外都無人知曉，事後三家都變得長期難買。這是關於「一個晚上的曝光對一家小酒藏值多少」以及「這份運氣的分配有多任意」，所能取得的最清楚實證。" } }
        ] }
      ] },

    { t:"section", id:"rest",
      title:{ en:"Toyama, Fukui, Gifu, Aichi, Mie", ja:"富山・福井・岐阜・愛知・三重", zh:"富山、福井、岐阜、愛知、三重" }, jp:"五県",
      body:[
        { t:"defs", items:[
          { term:{ en:"Toyama", ja:"富山", zh:"富山" }, jp:"富山県", romaji:"Toyama",
            def:{ en:"A narrow plain between the Tateyama range and a deep bay, with snowmelt water that is soft, cold and abundant to an almost excessive degree. The fishing is exceptional and the sake is built to go with it: clean, cool-serving, and increasingly adventurous — Toyama breweries were early into both bottle-fermented sparkling sake and long tank maturation, which is an unusual combination for a small prefecture.",
              ja:"立山連峰と深い湾のあいだの狭い平野であり、雪解けの水は軟らかく、冷たく、ほとんど過剰なほどに豊かである。漁は格別であり、酒はそれに合わせて造られている——清らかで、冷やして供し、そしてますます冒険的である。富山の蔵は瓶内二次発酵の発泡清酒にも長期のタンク熟成にも早くから入っており、小さな県としては珍しい組み合わせである。",
              zh:"立山連峰與深邃海灣之間的狹長平原，融雪水軟、冷，且充沛到近乎過剩。漁獲極為出色，而酒也是為此而釀：乾淨、宜冷飲，並且越來越勇於嘗試——富山的酒藏很早就同時投入瓶內二次發酵氣泡清酒與長期槽中熟成，對一個小縣而言是不尋常的組合。" } },
          { term:{ en:"Fukui", ja:"福井", zh:"福井" }, jp:"福井県", romaji:"Fukui",
            def:{ en:"One of the largest producers of Gohyakumangoku rice, which means Fukui feeds a great deal of brewing outside its own borders. Its own sake tends to precision rather than power, and its best-known house takes its name from an old name of the great river that runs past it. Water from the Hakusan system and the Kuzuryū river; a strongly Buddhist landscape, with the Sōtō Zen head temple a short distance from one of the prefecture's most celebrated breweries.",
              ja:"五百万石の最大級の産地であり、すなわち福井は自らの境界の外の酒造りを大いに養っている。自らの酒は力よりも精緻に傾き、最もよく知られた蔵は、かたわらを流れる大河の古名を名としている。水は白山系と九頭竜川。仏教の色濃い風景であり、曹洞宗の大本山が、県で最も名高い蔵の一つから程近い。",
              zh:"五百萬石米最大的產地之一，也就是說，福井大量餵養著自身邊界之外的釀造活動。它自己的酒偏向精準而非力量，而最知名的酒藏以流經旁側那條大河的古名為名。水源來自白山水系與九頭龍川；這是一片佛教色彩濃厚的地景，曹洞宗大本山就在該縣最著名的酒藏之一不遠處。" } },
          { term:{ en:"Gifu", ja:"岐阜", zh:"岐阜" }, jp:"岐阜県", romaji:"Gifu",
            def:{ en:"Two prefectures in one: the Hida mountains in the north, cold and remote, and the Mino plain in the south. Hida Homare is the local sake rice. Gifu is where you find some of the driest sake in Japan — one Mino house has built a reputation over generations on a level of dryness that most breweries would regard as a fault — and the Hida towns are among the most rewarding brewery visits in the country simply because so little has been rebuilt.",
              ja:"一県のうちに二つの県がある。北の飛騨の山は寒く隔たり、南は美濃の平野である。地元の酒米はひだほまれ。岐阜は日本で最も辛い酒のいくつかが見つかる場所であり——美濃の一家は、多くの蔵なら欠点と見なす辛さの水準の上に、代々をかけて評判を築いてきた——飛騨の町は、建て替えられたものがあまりに少ないという理由だけで、国内で最も報いの大きい蔵の訪問先の一つである。",
              zh:"一縣之中有兩個縣：北邊是飛驒山區，寒冷偏遠；南邊是美濃平原。當地酒米為飛驒譽。岐阜是日本最辛口的一些酒的所在——美濃的一戶人家世代以一種「多數酒藏會視為缺陷」的辛口程度建立起聲譽——而飛驒的小鎮，僅僅因為被改建的部分太少，就成了全國最值得造訪的酒藏地區之一。" } },
          { term:{ en:"Aichi", ja:"愛知", zh:"愛知" }, jp:"愛知県", romaji:"Aichi",
            def:{ en:"Industrial, wealthy and mostly known for other things — but Aichi holds two positions that matter. It is the traditional home of high-quality <em>hon-mirin</em>, brewed slowly from glutinous rice, kōji and shōchū in the Mikawa district, which is a kōji product of real culinary importance. And a Nagoya brewery has spent two decades arguing that sake should be understood in the vocabulary of fine wine, to the point of acquiring vineyards in France and farming its own rice in Hyōgo — the most fully worked-out version of that argument anywhere in the industry.",
              ja:"工業的で、豊かで、そのほとんどは別のことで知られている。しかし愛知は効く立場を二つ持つ。三河の地は、もち米と麹と焼酎から時間をかけて醸す上質な本味醂の伝統的な本拠であり、これは料理において真に重要な麹の産物である。そして名古屋の一蔵は二十年にわたり、日本酒は上質なワインの語彙で理解されるべきだと論じてきた。フランスに畑を得、兵庫で自ら米を作るまでに、である。この産業のどこを見ても、その主張が最も徹底して展開された形である。",
              zh:"工業化、富庶，而且主要以其他事物聞名——但愛知握有兩個要緊的位置。三河地區是優質「本味醂」的傳統本據，以糯米、麴與燒酎慢慢釀成，是一項在料理上真正重要的麴製品。另外，名古屋的一家酒藏花了二十年主張：清酒應該以優質葡萄酒的語彙來理解——甚至為此在法國取得葡萄園、在兵庫自種稻米。這是整個產業中，這項主張被推展得最徹底的版本。" } },
          { term:{ en:"Mie", ja:"三重", zh:"三重" }, jp:"三重県", romaji:"Mie",
            def:{ en:"Designated a geographical indication in 2020, and the prefecture with the sharpest recent rise in reputation. Water from the Suzuka range, a prefectural sake rice, and two breweries whose names are now among the hardest to find on a Japanese shelf — one a Zen expression meaning <em>now, this instant</em>, the other served to visiting heads of government at a summit held in the prefecture in 2016. Mie is also the home of Ise, where the shrine's brewing observances are among the oldest continuously performed in Japan.",
              ja:"二〇二〇年に地理的表示に指定され、近年最も鋭く評価を上げた県である。鈴鹿山系の水、県の酒米、そして今日、日本の棚で最も見つけにくい部類の名を持つ二つの蔵——一つは「今このとき」を意味する禅語、もう一つは二〇一六年に県内で開かれた首脳会議で各国首脳に供された。三重はまた伊勢の地であり、そこの神宮の醸造に関わる祭祀は、日本で最も長く続けられているものの一つである。",
              zh:"二〇二〇年獲指定為地理標示，也是近年聲譽上升最陡的縣。鈴鹿山系的水、縣產酒米，以及兩家如今在日本酒架上最難找到的名字——其一是意為「當下此刻」的禪語，其二曾在二〇一六年於該縣舉行的高峰會上供予各國元首。三重也是伊勢的所在，那裡神宮的釀造相關祭儀，是日本持續舉行最久的祭祀之一。" } }
        ] },

        { t:"note", text:{
          en:"The through-line of this region is that reputation is made rather than inherited. Ishikawa's came from a guild, Shizuoka's from a laboratory, Aichi's from an argument, Mie's from a generation of successors. Four different mechanisms, all of them recent, none of them geological. See <a href=\"terroir.html#channels\">Terroir</a> for why that matters, and <a href=\"regions.html\">Regions A–Z</a> for the compact table.",
          ja:"この地域を貫く筋は、評判が受け継がれるのではなく作られるということである。石川のそれは集団から、静岡のそれは実験室から、愛知のそれは主張から、三重のそれは後継の世代から来た。四つの異なる仕組みであり、いずれも新しく、いずれも地質的ではない。なぜそれが効くかは<a href=\"terroir.html#channels\">風土</a>、一覧表は<a href=\"regions.html\">産地一覧</a>を参照。",
          zh:"貫穿這個地區的主線是：聲譽是被製造出來的，而非繼承而來。石川的聲譽來自一個行會，靜岡的來自一間實驗室，愛知的來自一項主張，三重的來自一整代後繼者。四種不同的機制，全都是晚近的，也全都與地質無關。這為何重要見<a href=\"terroir.html#channels\">風土</a>；簡表見<a href=\"regions.html\">產地一覽</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"regions.html", why:{ en:"The same prefectures in the national index.", ja:"同じ県を、全国の索引のなかで。", zh:"同樣這些縣，放在全國索引裡。" } },
      { href:"brands.html", why:{ en:"The houses these prefectures are known by.", ja:"これらの県が知られる、その蔵の名。", zh:"這些縣是靠哪些酒藏的名字被認識的。" } },
      { href:"yeast.html", why:{ en:"Shizuoka's yeasts, and what they were bred to do.", ja:"静岡の酵母と、それが何のために育成されたか。", zh:"靜岡的酵母，以及它們是為了什麼而育成的。" } },
      { href:"value.html", why:{ en:"Why the bottle you cannot buy costs what it costs.", ja:"買えぬ一本が、その値である理由。", zh:"那支買不到的酒，為什麼是那個價格。" } }
    ] }
  ]
};


/* ---- ---------------------------------------- region-kinki */
SAKE.pages["region-kinki"] = {
  kicker: { en: "Place · 06", ja: "産地 · 06", zh: "產地 · 06" },
  title:  { en: "Kinki — the Old Heartland", ja: "近畿——古い中心", zh: "近畿——古老的核心" },
  jp: "近畿",
  lede: {
    en: "Everything that made sake what it is happened here. Clarified sake was worked out in the temples of Nara and the merchant towns of Itami and Ikeda; the industrial scale of Nada and the soft-water counter-tradition of Fushimi were both established before the nineteenth century; Miyamizu was identified on this coast; and roughly a third of all the sake made in Japan is still made in one prefecture of this region. Kinki is where the arguments started, and where the largest and the oldest are both still operating.",
    ja: "日本酒を今あるものにしたことのすべては、ここで起きた。清酒は奈良の寺と伊丹・池田の商人の町で編み出された。灘の工業的な規模と伏見の軟水の対抗する伝統は、いずれも十九世紀以前に確立していた。宮水はこの海岸で特定された。そして日本で造られる酒のおよそ三分の一は、今なおこの地域の一県で造られている。近畿とは議論の始まった場所であり、最も大きなものと最も古いものが、いずれも今なお動いている場所である。",
    zh: "使清酒成為今日模樣的一切，都發生在這裡。澄清的清酒是在奈良的寺院與伊丹、池田的商人城鎮中琢磨出來的；灘的工業規模與伏見的軟水對抗傳統，都在十九世紀之前就已確立；宮水在這片海岸被查明；而日本所釀的清酒中，約有三分之一至今仍出自這個地區的一個縣。近畿是爭論的起點，也是最大者與最古老者至今仍在運轉之處。"
  },
  body: [

    { t:"section", id:"hyogo",
      title:{ en:"Hyōgo", ja:"兵庫", zh:"兵庫" }, jp:"兵庫県",
      body:[
        { t:"p", text:{
          en:"The largest sake prefecture in Japan by a wide margin — roughly a third of national volume — and the only one that is simultaneously the country's most industrial producer, the source of its best rice and the holder of three separate geographical indications.",
          ja:"日本最大の酒どころであり、その差は大きい——全国のおよそ三分の一である。そして最も工業的な生産者であり、最良の米の産地であり、三つの別々の地理的表示を持つ、唯一の県でもある。",
          zh:"以極大差距居日本清酒之首的縣——約占全國產量三分之一——同時也是全國最工業化的生產者、最優質酒米的產地，以及唯一持有三個獨立地理標示的縣。" } },
        { t:"defs", items:[
          { term:{ en:"Nada Gogō", ja:"灘五郷", zh:"灘五鄉" }, jp:"灘五郷", romaji:"Nada Gogō",
            def:{ en:"Five brewing districts across Kōbe, Nishinomiya and Ashiya, designated a geographical indication in 2018 with revised standards in 2020. Nada's advantages were assembled between the seventeenth and nineteenth centuries and are almost all logistical: mineral-rich Miyamizu, water-wheel milling on the fast rivers off Mount Rokkō, Tajima brewing crews from the north of the prefecture, and a harbour from which barrel ships raced to Edo. The house style — dry, firm, muscular, the <em>otokozake</em> — follows from the hard water rather than from any philosophy.",
              ja:"神戸・西宮・芦屋にまたがる五つの郷であり、二〇一八年に地理的表示に指定され、二〇二〇年に基準が改められた。灘の優位は十七世紀から十九世紀にかけて組み立てられ、そのほとんどすべては物流的である——ミネラルに富む宮水、六甲から落ちる急流の水車精米、県北からの但馬の蔵人、そして江戸へ樽廻船が競った港。酒質の型——辛く、締まり、力強い男酒——は思想からではなく硬水から導かれる。",
              zh:"橫跨神戶、西宮、蘆屋的五個釀造郷，二〇一八年獲指定為地理標示，二〇二〇年修訂標準。灘的優勢是在十七至十九世紀間組裝起來的，且幾乎全是物流性的：富含礦物的宮水、六甲山急流上的水車精米、來自縣北的但馬工班，以及樽迴船競相駛向江戶的港口。其酒質風格——辛口、結實、強健的「男酒」——來自硬水，而非任何理念。" } },
          { term:{ en:"The rice country", ja:"米の里", zh:"米之鄉" }, jp:"特A地区", romaji:"toku-A chiku",
            def:{ en:"Inland of Kōbe, in the hills around Miki and Katō, is the Yamada Nishiki country — the only place in sake with a plot-level quality claim, graded Special A by the prefecture, and tied to specific Nada houses by the <em>murakome</em> contract system since the late nineteenth century. The rice is shipped nationwide, which is precisely the objection to rice-based terroir arguments, but the farming knowledge and the contracts stay here.",
              ja:"神戸の内陸、三木と加東のあたりの丘が山田錦の里である。日本酒において唯一、区画の水準の質の主張が成り立つ土地であり、県により特A地区と格付けされ、十九世紀末以来、村米制度によって特定の灘の蔵と結ばれてきた。米は全国へ出荷される。米を根拠とする風土論への反論はまさにそこにあるが、農の知識と契約はここに留まる。",
              zh:"神戶內陸、三木與加東一帶的丘陵，就是山田錦之鄉——清酒界唯一能提出「地塊層級品質主張」的地方，由縣評為特 A 地區，並自十九世紀末起透過「村米制度」與特定的灘之酒藏綁定。米行銷全國，這正是以米為據之風土論所遭遇的反駁；但農耕知識與契約留在這裡。" } },
          { term:{ en:"Harima and Itami", ja:"播磨と伊丹", zh:"播磨與伊丹" }, jp:"はりま・伊丹", romaji:"Harima, Itami",
            def:{ en:"Two more designations in the same prefecture. Harima, designated in 2020, is the rice country's own GI — an argument that the place growing the grain should be able to claim the sake too. Itami, designated in 2024, is the older claim: this is where clarified sake was commercialised in the Edo period, before Nada overtook it, and the designation is essentially a recognition of primacy rather than of current scale.",
              ja:"同じ県のうちのさらに二つの指定である。二〇二〇年指定のはりまは米の里そのものの地理的表示であり、粒を育てる土地が酒をも名乗りうるという主張である。二〇二四年指定の伊丹はより古い主張である——ここは江戸期に清酒が商品として確立した地であり、灘がそれを追い越す以前の中心であった。この指定は、現在の規模ではなく先んじたことの承認である。",
              zh:"同一個縣裡的另外兩項指定。二〇二〇年指定的播磨，是米之鄉自身的 GI——主張種出穀粒的地方也應該能主張這款酒。二〇二四年指定的伊丹則是更古老的主張：這裡是江戶時期清酒被商品化之處，早於灘取而代之；這項指定實質上是對「先發」的承認，而非對當前規模的承認。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"剣菱ほか", romaji:"Kenbishi, and others",
            def:{ en:"The Nada majors are household names in Japan and account for a great deal of what Japanese people actually drink. Kenbishi is the interesting outlier among them: a house using one of the oldest continuously used marks in Japanese commerce, which has deliberately kept its style unchanged rather than chasing ginjō, and does not state a polishing ratio on the grounds that it is not what the sake is about. In Harima, the smaller houses are where the prefecture's rice is used at home rather than exported.",
              ja:"灘の大手は日本では誰もが知る名であり、日本人が実際に飲むものの大きな部分を占める。そのうち興味深い例外が剣菱である。日本の商いで最も古くから使われ続けている標の一つを掲げ、吟醸を追わず意図して酒質を変えず、精米歩合は自らの酒の眼目ではないとして表示しない。はりまにおいては、県の米が移出されずに地元で使われるのは、より小さな蔵においてである。",
              zh:"灘的大廠在日本是家喻戶曉的名字，並構成了日本人實際飲用之酒的很大一部分。其中值得注意的異數是劍菱：它使用日本商業史上持續使用最久的標記之一，刻意不追逐吟釀、不改變酒質，並且不標示精米步合——理由是那不是這支酒的重點。至於在播磨，讓縣產米留在本地使用而非外運的，是那些較小的酒藏。" } }
        ] }
      ] },

    { t:"section", id:"nada-after",
      title:{ en:"What happened to Nada", ja:"灘に起きたこと", zh:"灘所發生的事" }, jp:"灘の百年",
      body:[
        { t:"figure",
          caption:{
            en:"Why the largest brewing region in Japanese history stopped being the centre of the subject. Nada did not decline through incompetence or complacency: it held four advantages at once, no other region had all four, and every one of them was an advantage over geography rather than over craft. Technology is very good at cancelling advantages over geography. What remains — the water, the rice district behind it, the scale, the research departments — is considerable, and it is the reason a quarter of all Japanese sake still comes from a ten-kilometre strip of coast.",
            ja:"日本の歴史において最大の酒どころが、なぜ主題の中心であることをやめたのか。灘は無能や慢心によって衰えたのではない。四つの優位を同時に握っており、四つすべてを持つ地域は他になく、そしてそのいずれもが、技ではなく地理に対する優位であった。地理に対する優位を打ち消すことにかけて、技術はきわめて優れている。残ったもの——水、その背後の米どころ、規模、研究の部門——は相当なものであり、日本酒の四分の一がなお十キロの海岸から出てくる理由である。",
            zh:"日本歷史上最大的釀造地區，為何不再是這門主題的中心。灘並非因無能或自滿而衰退：它同時握有四項優勢，沒有別的地區四者兼具——而其中每一項，都是對「地理」而非對「技藝」的優勢。而技術最擅長的，正是抵銷地理上的優勢。留下來的東西——水、其背後的米鄉、規模、研究部門——依然可觀，這也是為何全日本四分之一的清酒，至今仍出自一段十公里長的海岸。" },
          svg: function (lang, L) {
            var W = 760, H = 364, LX = 40, LW = 292, RX = 404, RW = 292, Y0 = 62, RH = 56;
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
            var pairs = [
              { ajp:"水車精米", a:{ en:"milling capacity nobody inland could match", ja:"内陸の真似のできぬ精米の力", zh:"內陸無法企及的精米能力" },
                bjp:"電動精米機", b:{ en:"milling stops being a place", ja:"精米が場所でなくなる", zh:"精米不再取決於地點" } },
              { ajp:"六甲颪", a:{ en:"a cold wind off the mountain, every winter", ja:"山から吹き下ろす冬の寒風", zh:"每年冬天自山上吹下的寒風" },
                bjp:"冷却設備", b:{ en:"the cold becomes optional", ja:"寒さが任意になる", zh:"寒冷變成可選項" } },
              { ajp:"樽廻船", a:{ en:"barrel ships reaching Edo in days", ja:"数日で江戸へ着く樽廻船", zh:"數日即抵江戶的樽迴船" },
                bjp:"鉄道と車", b:{ en:"the harbour becomes ordinary", ja:"港が並のものになる", zh:"港口變得平凡" } },
              { ajp:"宮水", a:{ en:"hard mineral water found nowhere else", ja:"他にない硬水のミネラル", zh:"別處沒有的硬水礦物質" },
                bjp:"水質調整", b:{ en:"the minerals can go in anywhere", ja:"ミネラルはどこにでも加えうる", zh:"礦物質可在任何地方添加" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<text x="' + LX + '" y="' + (Y0 - 20) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "四つの優位" : lang === "zh" ? "四項優勢" : "FOUR ADVANTAGES AT ONCE") + '</text>';
            s += '<text x="' + RX + '" y="' + (Y0 - 20) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "それを打ち消したもの" : lang === "zh" ? "抵銷它的東西" : "AND WHAT CANCELLED EACH") + '</text>';
            var i, k;
            for (i = 0; i < pairs.length; i++) {
              var p = pairs[i], y = Y0 + i * RH;
              s += '<rect x="' + LX + '" y="' + y + '" width="' + LW + '" height="' + (RH - 12) + '" fill="#EDE5D2" stroke="#DED8CB"/>';
              s += '<text x="' + (LX + 14) + '" y="' + (y + 20) + '" font-size="13" fill="#201E1B">' + p.ajp + '</text>';
              s += '<text x="' + (LX + 14) + '" y="' + (y + 34) + '" font-size="9.5" fill="#8B857C">' + L(p.a) + '</text>';
              s += '<line x1="' + (LX + LW + 8) + '" y1="' + (y + 22) + '" x2="' + (RX - 12) + '" y2="' + (y + 22) + '" stroke="#B4AC9C"/>';
              s += '<path d="M' + RX + ' ' + (y + 22) + ' L' + (RX - 10) + ' ' + (y + 17) + ' L' + (RX - 10) + ' ' + (y + 27) + ' Z" fill="#B4AC9C"/>';
              s += '<rect x="' + RX + '" y="' + y + '" width="' + RW + '" height="' + (RH - 12) + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (RX + 14) + '" y="' + (y + 20) + '" font-size="13" fill="#201E1B">' + p.bjp + '</text>';
              s += '<text x="' + (RX + 14) + '" y="' + (y + 34) + '" font-size="9.5" fill="#8B857C">' + L(p.b) + '</text>';
            }
            /* and then the market turned */
            var BY = Y0 + pairs.length * RH + 8;
            s += '<rect x="' + LX + '" y="' + BY + '" width="' + (RX + RW - LX) + '" height="52" fill="#F2EFE8" stroke="#DED8CB"/>';
            s += '<text x="' + (LX + 14) + '" y="' + (BY + 20) + '" font-size="13" fill="#201E1B">地酒への転回</text>';
            var bt = (lang === "ja" ? "そして市場そのものが転じた。小さく地のものであることが求められるものとなり、全国の銘柄とは、新しい嗜好が自らを定義するために対置したものそのものであった。"
                      : lang === "zh" ? "接著，市場本身也轉向了：小而在地成為飲者想要的東西，而全國性品牌，正是新口味用來界定自己的那個對照物。"
                      : "Then the market itself turned: small and regional became what drinkers wanted, and a national brand was exactly what the new taste defined itself against.");
            var bl = wrap(bt, cjk, cjk ? 46 : 108);
            for (k = 0; k < bl.length && k < 2; k++) {
              s += '<text x="' + (LX + 122) + '" y="' + (BY + 20 + k * 14) + '" font-size="10" fill="#8B857C">' + bl[k] + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "四つのうち三つは、江戸の頃にはすでに他のどこにもなかった。技術がそれを均すのに、二世代を要しなかった。"
                  : lang === "zh" ? "四項之中有三項，在江戶時期便是別處沒有的；而技術把它們抹平，用不到兩個世代。"
                  : "Three of the four were unavailable anywhere else in the Edo period. Technology took less than two generations to level them.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"For three hundred years Nada was not a region among others; it was the industry. Understanding how it stopped being that is more instructive than any amount of description of what it makes now.",
          ja:"三百年にわたり、灘は数ある地方の一つではなかった。それが産業そのものであった。それがそうであることをやめた経緯を解することは、今それが何を造っているかについてのいかなる記述よりも多くを教える。",
          zh:"有三百年之久，灘不是眾多產區之一；它就是這個產業本身。理解它如何不再是那樣，比任何關於「它現在做什麼」的描述都更有啟發。" } },
        { t:"timeline", items:[
          { year:"1700s", era:"江戸中期", eraJp:"江戸中期", title:{ en:"Four advantages at once", ja:"四つの利が同時に", zh:"四項優勢同時具備" }, jp:"下り酒",
            text:{ en:"Hard mineral water; a cold wind coming down off the Rokkō range; fast mountain streams that turned water wheels for milling, giving Nada a polishing capacity nobody inland could match; and a harbour from which barrel ships ran the sake to Edo in a few days. No other region had all four. By the early nineteenth century Nada was supplying an enormous share of the capital's sake, and 'sake that came down' from Kansai simply meant good sake.",
              ja:"硬い鉱の水。六甲の連なりから吹き下ろす寒い風。精米の水車を回す急な山の流れ——内陸の誰にも並びえぬ精米の力を灘に与えたもの。そして数日で酒を江戸へ運ぶ樽廻船の出る港。この四つを揃えた地方は他になかった。十九世紀の初めには灘は都の酒の途方もない部分を供しており、上方から「下った」酒とは、単に良い酒を意味した。",
              zh:"硬質的礦物水；自六甲山脈吹落的寒風；驅動精米水車的湍急山溪——這給了灘一種內陸無人能及的精米能力；以及一座能讓樽迴船數日內把酒送抵江戶的港口。沒有第二個產區同時擁有這四項。到十九世紀初，灘供應了首都極大比例的酒，而從上方「下來」的酒，就直接等於好酒的意思。" } },
          { year:"1900s", era:"明治・大正", eraJp:"明治・大正", title:{ en:"Industrialisation, and the loss of the edge", ja:"工業化と、利の失われ", zh:"工業化，以及優勢的流失" }, jp:"機械化",
            text:{ en:"Every one of the four advantages was neutralised by technology. Electric mills made water wheels irrelevant; refrigeration made the wind optional; rail and then trucks made the harbour ordinary; and the analysis of miyamizu meant its minerals could be added to any water anywhere. Nada's response was scale — it industrialised earlier and harder than anywhere else, and became the home of the very large brewery rather than the very good one.",
              ja:"四つの利のいずれもが技術によって打ち消された。電動の精米機は水車を無用にし、冷却は風を任意にし、鉄道と、のちの貨物車は港を平凡にし、そして宮水の分析は、その鉱をいずこの水にも加えうることを意味した。灘の応えは規模であった。他のどこよりも早く強く工業化し、きわめて良い蔵ではなく、きわめて大きな蔵の郷となった。",
              zh:"這四項優勢，每一項都被技術抵銷了。電動精米機讓水車失去意義；冷卻設備讓風變成可有可無；鐵路、繼而卡車讓港口變得平凡；而宮水的成分分析，意味著它的礦物質可以被添加到任何地方的任何水中。灘的回應是規模——它比任何地方都更早、更徹底地工業化，並成為「極大型酒藏」而非「極優秀酒藏」的家鄉。" } },
          { year:"1975–", era:"昭和後期", eraJp:"昭和後期", title:{ en:"The ji-zake reversal", ja:"地酒の逆転", zh:"地酒帶來的逆轉" }, jp:"地酒ブーム",
            text:{ en:"When drinkers began to prefer small and regional, Nada's defining strength became its defining problem. The national brands it had built were exactly what the new market defined itself against. Nada still ships an enormous volume — a quarter or so of all Japanese sake — and almost none of the conversation.",
              ja:"飲み手が小さく地のものを好み始めたとき、灘を灘たらしめていた強みが、灘を灘たらしめる問題となった。築き上げた全国の銘柄こそ、新しい市場が自らをそれに対して定めた当のものであった。灘は今なお途方もない量——日本酒の全体のおよそ四分の一——を出荷し、そして語りのほとんどを出荷しない。",
              zh:"當飲者開始偏好小而在地的東西時，灘的定義性優勢就變成了它的定義性問題。它一手打造的全國性品牌，恰恰是新市場用來定義自身的對照物。灘至今仍出貨極大的量——約占全日本清酒的四分之一——卻幾乎不出貨任何話題。" } },
          { year:"1995", era:"平成7", eraJp:"平成七年", title:{ en:"The earthquake", ja:"地震", zh:"地震" }, jp:"阪神・淡路大震災",
            text:{ en:"The Great Hanshin earthquake of January 1995 struck the Nada coast directly. Old timber and plaster brewery buildings — the ones with the house microflora, the ones that had stood since the Edo period — came down or burned; tanks ruptured; the district lost a large part of its physical heritage in a morning. The rebuilding was mostly in concrete and steel, which is safer, works better, and is not the same building. Several houses used the moment to reopen as museums alongside working plants, which is why the Nada brewery district a visitor sees today is a reconstruction of a place rather than the place.",
              ja:"平成七年（1995）一月の阪神・淡路大震災は灘の海岸を直に襲った。古い木と漆喰の蔵——蔵付きの微生物相を宿し、江戸から立ち続けてきたもの——は倒れ、あるいは焼けた。槽は裂けた。地区は一朝にしてその物としての遺産の大きな部分を失った。建て直しはおおむね鉄筋と鋼であり、それはより安全で、よりよく働き、そして同じ建物ではない。いくつかの家はこの機に、稼働する工場と並べて資料館として開いた。訪う者が今日見る灘の酒蔵の一帯が、その場所そのものではなくその場所の再構である理由である。",
              zh:"一九九五年一月的阪神淡路大地震正面襲擊灘的海岸線。老舊的木造與灰泥酒藏建築——那些棲居著藏內微生物相、自江戶時代就矗立至今的建築——倒塌或焚毀；酒槽破裂；這個街區在一個上午之內失去了大部分實體遺產。重建大多採用鋼筋混凝土，更安全、運作更好，卻不是同一棟建築。有幾家酒藏藉此機會，在運作中的廠房旁重新開設為資料館——這正是為什麼今日訪客所見的灘酒藏街區，是一個地方的重建，而不是那個地方本身。" } }
        ] },
        { t:"note", title:{ en:"Why the giants matter anyway", ja:"それでも大手が重要な理由", zh:"為何大廠仍然重要" }, text:{
          en:"It is easy, on a site like this one, to write about small breweries and let the large ones stand for everything the reader is meant to move past. That is not honest. The large Nada and Fushimi houses fund most of the industry's research, employ most of its trained technologists, keep the analytical standards and the yeast banks running, supply the ordinary sake that is most people's first and most frequent experience of the drink, and have carried the export market for thirty years. A specialist's disdain for them is a luxury paid for by their infrastructure.",
          ja:"このような場所においては、小さな蔵について書き、大きな蔵を、読み手が乗り越えるべきすべての代わりに立たせておくのはたやすい。それは正直ではない。灘と伏見の大きな家は、産業の研究のほとんどを支え、訓練された技術者のほとんどを雇い、分析の基準と酵母の保管を回し続け、ほとんどの人にとって最初でありまた最も頻繁である普通の酒を供し、三十年にわたり輸出の市場を担ってきた。専門家がそれらを侮ることは、それらの基盤によって支払われた贅沢である。",
          zh:"在這樣一個網站上，很容易只寫小酒藏，並讓大廠代表讀者理應超越的一切。那並不誠實。灘與伏見的大型酒藏，資助了產業大部分的研究、僱用了大部分受過訓練的技術人員、維持著分析標準與酵母庫的運作、供應著多數人第一次也最常喝到的那種普通酒，並在三十年間扛起了出口市場。專家對它們的輕視，是由它們的基礎設施所支付的一種奢侈。" } }
      ] },

    { t:"section", id:"kyoto",
      title:{ en:"Kyōto", ja:"京都", zh:"京都" }, jp:"京都府",
      body:[
        { t:"defs", items:[
          { term:{ en:"Fushimi", ja:"伏見", zh:"伏見" }, jp:"伏見", romaji:"Fushimi",
            def:{ en:"Second only to Nada by volume, and its opposite in almost every respect. Fushimi's groundwater is soft and mineral-poor, so fermentation is slower and the sake rounder and gentler — the <em>onnazake</em> to Nada's otokozake, an opposition Japanese drinkers have used for centuries. The district is walkable, canal-lined and dense with museums and tasting rooms, and it is the single easiest place in Japan for a visitor to understand what a brewing district is. Kyoto was designated a geographical indication in 2025.",
              ja:"生産量で灘に次ぎ、そしてほとんどあらゆる点でその対極にある。伏見の地下水は軟らかくミネラルに乏しく、発酵は緩く、酒はより丸く穏やかである——灘の男酒に対する女酒であり、日本の飲み手が何世紀も用いてきた対比である。この地区は歩けるうえ運河が走り、資料館と試飲処が密にあり、訪う者が酒どころとは何かを理解するのに日本で最も易しい場所である。京都は二〇二五年に地理的表示に指定された。",
              zh:"產量僅次於灘，而在幾乎每個面向上都與之相反。伏見的地下水軟且礦物質稀少，因此發酵較慢，酒也更圓潤溫和——相對於灘的「男酒」，這是「女酒」，一組日本飲者沿用數百年的對照。這個街區適合步行、運河穿行，資料館與試飲空間密集，是全日本最容易讓訪客理解「什麼是釀酒之鄉」的地方。京都於二〇二五年獲指定為地理標示。" } },
          { term:{ en:"Two Kyotos", ja:"二つの京都", zh:"兩個京都" }, jp:"伏見と丹後", romaji:"Fushimi to Tango",
            def:{ en:"The prefecture reaches from the old capital to the Sea of Japan, and the northern Tango coast is a different world — cold, remote, and home to the brewery where an Englishman became the first non-Japanese tōji in 2007 after more than a decade working his way up through a Japanese brewing crew. That appointment did more to make brewing legible to a foreign audience than any amount of export marketing.",
              ja:"府は旧都から日本海まで届き、北の丹後の海岸は別の世界である——寒く、隔たり、そして二〇〇七年に、日本の蔵人の組で十年以上を積み上げた英国人が、日本人以外で初めて杜氏となった蔵がある。その就任は、いかなる量の輸出の宣伝よりも、酒造りを海外の読者に読めるものにした。",
              zh:"這個府從舊都一路延伸到日本海，而北部的丹後海岸是另一個世界——寒冷、偏遠，並且是二〇〇七年一位英國人在日本工班中一路做了十多年之後、成為首位非日籍杜氏的那家酒藏所在。這項任命讓釀酒對海外讀者變得可讀，其效果超過任何份量的出口行銷。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"月桂冠ほか", romaji:"Gekkeikan, and others",
            def:{ en:"Gekkeikan, founded in the seventeenth century, took a Western victor's-wreath name in the early twentieth as it modernised, and now brews in California as well as Fushimi. Beyond the majors, Fushimi holds several houses of real interest — one has been making cloudy and lightly sparkling sake since the 1960s, decades before either category existed commercially, and is a reminder that the modern sparkling boom has a long and mostly forgotten prehistory.",
              ja:"十七世紀創業の月桂冠は、二十世紀初頭の近代化のなかで西洋の勝者の環の名を採り、今日は伏見のみならずカリフォルニアでも醸す。大手のほかにも伏見には真に興味深い蔵がいくつかある。一蔵は一九六〇年代からにごりと微発泡の酒を造っており、いずれの区分も商業的に存在するよりはるか以前である。現代の発泡の隆盛には、長く、そしてほとんど忘れられた前史があることの証しである。",
              zh:"創業於十七世紀的月桂冠，在二十世紀初現代化的過程中採用了西方勝利花環之名，如今除伏見外也在加州釀酒。大廠之外，伏見還有數家真正有意思的酒藏——其中一家自一九六〇年代起就在做濁酒與微氣泡酒，比這兩個類別在商業上出現早了數十年；這提醒我們：當代氣泡酒的興盛，有一段漫長且幾乎被遺忘的前史。" } }
        ] }
      ] },

    { t:"section", id:"nara",
      title:{ en:"Nara", ja:"奈良", zh:"奈良" }, jp:"奈良県",
      body:[
        { t:"p", text:{
          en:"Small in volume and enormous in significance. Nara has the strongest claim to being where sake as we know it was worked out, and it is the only prefecture where you can visit both the shrine that stands at the origin of the craft's mythology and the temple where its most important surviving medieval technique was reconstructed.",
          ja:"生産量は小さく、意味は巨大である。奈良は、今日知られる形の日本酒が編み出された地であるという最も強い主張を持ち、この技の神話の起点に立つ社と、中世の最も重要な技法が再構成された寺との双方を訪ねられる唯一の県である。",
          zh:"產量小，意義卻極大。奈良對「我們今日所知的清酒是在此琢磨成形」擁有最強的主張，也是唯一一個既能造訪這門技藝神話起點的神社、又能造訪其最重要中世技法被重建之寺院的縣。" } },
        { t:"defs", items:[
          { term:{ en:"The temple brewing", ja:"僧坊酒", zh:"僧坊酒" }, jp:"菩提酛・諸白", romaji:"bodaimoto, morohaku",
            def:{ en:"The medieval temples of Nara developed the techniques that define modern sake: polished rice for both the kōji and the mash, multi-stage addition, pasteurisation, and the bodaimoto starter. The bodaimoto method — steeping raw rice until it sours, then brewing with the acidified water — was reconstructed from temple records in the 1990s at the temple where much of it was first developed, and is now brewed each year by a small group of breweries. It is history put back into production rather than displayed.",
              ja:"奈良の中世の寺は、現代の日本酒を定義する技法を育てた——麹にも掛にも精白した米を用いる諸白、段仕込み、火入れ、そして菩提酛である。菩提酛——生米を漬けて酸っぱくし、その酸性の水で仕込む——は、その多くが最初に育まれた寺において一九九〇年代に寺の記録から再構成され、今日、少数の蔵が毎年醸している。展示ではなく、生産へ戻された歴史である。",
              zh:"奈良的中世寺院發展出了定義現代清酒的技法：麴米與掛米皆用精白米的「諸白」、分段投料、火入，以及菩提酛。菩提酛——把生米浸到發酸，再以這酸性的水釀造——於一九九〇年代在其多數工法最初孕育的那座寺院裡，依寺方紀錄重建，如今每年由少數幾家酒藏釀造。這是被放回生產、而非被陳列的歷史。" } },
          { term:{ en:"The shrine", ja:"社", zh:"神社" }, jp:"三輪", romaji:"Miwa",
            def:{ en:"Miwa, at the foot of Mount Miwa, is the shrine most closely associated with brewing in Japanese myth, and the cedar ball hung outside breweries across the country is traditionally said to originate here. Whether or not the origin story holds, it is the reason a brewery in Akita or Kōchi hangs a piece of Nara's mountain over its door every winter.",
              ja:"三輪山の麓の社は、日本の神話において酒造りと最も深く結びついた社であり、全国の蔵の軒に吊るされる杉玉は、伝統的にここに始まるとされる。起源の話が成り立つか否かはともかく、秋田や高知の蔵が毎冬、奈良の山の一部を戸口に掲げる理由はそこにある。",
              zh:"位於三輪山腳的神社，是日本神話中與釀酒關聯最深的神社；全國酒藏門口所懸掛的杉玉，傳統上被認為源自於此。無論這則起源說是否成立，秋田或高知的酒藏之所以每年冬天在門楣掛上一塊奈良之山，理由就在這裡。" } },
          { term:{ en:"What is brewed now", ja:"今、醸されているもの", zh:"如今在釀什麼" }, jp:"風の森ほか", romaji:"Kaze no Mori, and others",
            def:{ en:"Nara today is disproportionately experimental for its size. One house has built its whole range on sake that is never pasteurised and never diluted, bottled with its own dissolved carbon dioxide still in it and polished far less than fashion would suggest; another works almost entirely with the revived medieval starters. If you want to taste the argument that sake was more interesting before the twentieth century standardised it, Nara is where that argument is being made in bottles.",
              ja:"今日の奈良は、その規模に比して不釣り合いに実験的である。ある家は、火入れも加水もせず、自らの炭酸をなお含んだまま詰め、流行が示唆するよりはるかに磨かぬ酒の上に、品揃えの全体を築いた。別の家はほとんど専ら、復活した中世の酒母で仕事をする。二十世紀が標準化する以前の日本酒のほうが面白かったという主張を味わいたいなら、その主張が瓶で述べられているのは奈良である。",
              zh:"今日的奈良，就其規模而言實驗性高得不成比例。有一家把整條產品線建立在「從不火入、從不加水、裝瓶時仍保留自身溶解二氧化碳、且精米程度遠低於流行」的酒之上；另一家則幾乎完全以復活的中世酒母工作。如果你想品嚐「二十世紀標準化之前的清酒更有意思」這個主張，那麼它正是在奈良以酒瓶的形式被提出的。" } }
        ] }
      ] },

    { t:"section", id:"court",
      title:{ en:"The state brewery", ja:"官の酒", zh:"官釀" }, jp:"造酒司と僧坊酒",
      body:[
        { t:"p", text:{
          en:"Before there were breweries there were two institutions that brewed: the imperial court and the great temples. Both were in this region, and between them they invented most of what a brewery still does.",
          ja:"蔵がある前に、醸す二つの機構があった。朝廷と大寺である。いずれもこの地方にあり、その二つの間で、蔵が今なお行うことのほとんどが生み出された。",
          zh:"在酒藏出現之前，有兩個機構在釀酒：朝廷與大寺院。兩者都位於這個地區，而它們之間發明了酒藏至今仍在做的大部分事情。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"The Bureau of Sake", ja:"造酒司", zh:"造酒司" }, jp:"造酒司 · みきのつかさ",
            text:{ en:"The eighth-century state had a government office whose entire function was brewing for the court and for state ritual, staffed by hereditary specialists. Its output is set out in the tenth-century <em>Engishiki</em>, which lists more than a dozen distinct products with their recipes, ingredient quantities and intended uses — the earliest written brewing specifications in Japan, and detailed enough that modern brewers have reconstructed several of them. Everything in the document is a court product; none of it was sold.",
              ja:"八世紀の国家は、朝廷と国の祭のために醸すことのみを務めとする役所を持ち、世襲の専門の者が勤めた。その産は十世紀の『延喜式』に示され、十を越える別々の品を、その処方と材の量と用途とともに列している。日本における最も早い書かれた酒造の仕様であり、現代の造り手がそのいくつかを再現しうるほど詳しい。文書のすべては朝廷の品であり、そのいずれも売られなかった。",
              zh:"八世紀的國家設有一個官署，其全部職能就是為朝廷與國家祭祀釀酒，由世襲的專門人員任職。它的產品載於十世紀的《延喜式》，列出十餘種不同的製品，附有配方、原料用量與用途——這是日本最早的成文釀造規格，詳細到現代釀造者已能復原其中數種。文件中的一切都是宮廷用品，沒有任何一項對外販售。" } },
          { title:{ en:"The temple brewers", ja:"僧坊酒", zh:"僧坊酒" }, jp:"僧坊酒 · そうぼうしゅ",
            text:{ en:"From the Kamakura period the great temples became the technical leaders, because they had literate staff, capital, storage, security, and a legal position outside ordinary taxation. Shōryakuji in Nara developed the bodaimoto starter and the multi-stage addition; Kongōji in Kawachi made Amano-zake, which was famous enough to be sent as a gift to warlords and named in their letters. Temple sake was clear, strong, made from polished rice on both sides of the mash, and pasteurised — all of it centuries before Europe. The Sengoku wars and then Hideyoshi's and Ieyasu's control of the temples ended it, and the technique passed to the merchant brewers of Itami and Nada.",
              ja:"鎌倉より、大寺が技術の先頭となった。文字を読む人と、資と、蔵と、守りと、通常の課税の外にある法の位置を持っていたからである。奈良の正暦寺は菩提酛と段仕込みを育て、河内の金剛寺は天野酒を造った。それは武将への贈り物として送られ、その書状に名を記されるほど名高かった。寺の酒は澄み、強く、醪の双方に磨いた米を用い、そして火入れされていた。そのすべてが欧州より数世紀早い。戦国の乱と、ついで秀吉と家康の寺への支配がそれを終わらせ、技は伊丹と灘の商人の造り手へ渡った。",
              zh:"自鎌倉時代起，大寺院成為技術的領導者，因為它們擁有識字的人員、資本、倉儲、防衛，以及在一般課稅之外的法律地位。奈良的正曆寺發展出菩提酛與多段投料；河內的金剛寺釀造天野酒，其名聲之盛，足以作為禮物送給武將並被寫進他們的書信中。寺院之酒澄清、酒精度高、醪的兩側都使用精磨過的米，並且經過加熱處理——這一切都比歐洲早了數個世紀。戰國之亂、繼而豐臣秀吉與德川家康對寺院的控制終結了它，而技術則傳到了伊丹與灘的商人釀造者手中。" } }
        ] },
        { t:"tiny", text:{
          en:"The full chronology is on the <a href=\"history.html\">History</a> page; what belongs here is the geography. Every one of these institutions was within about eighty kilometres of every other, in the same handful of valleys, over about eight hundred years.",
          ja:"年代の全体は<a href=\"history.html\">歴史</a>の頁にある。ここに属するのは地理である。これらの機構のいずれもが、互いにおよそ八十キロの内、同じいくつかの谷において、およそ八百年にわたって在った。",
          zh:"完整的年代序列見<a href=\"history.html\">歷史</a>一頁；屬於這裡的是地理。這些機構彼此都在大約八十公里的範圍之內，位於同樣的那幾條谷地中，前後綿延約八百年。" } }
      ] },

    { t:"section", id:"shiga-osaka-wakayama",
      title:{ en:"Shiga, Ōsaka, Wakayama", ja:"滋賀・大阪・和歌山", zh:"滋賀、大阪、和歌山" }, jp:"三府県",
      body:[
        { t:"defs", items:[
          { term:{ en:"Shiga", ja:"滋賀", zh:"滋賀" }, jp:"滋賀県", romaji:"Shiga",
            def:{ en:"Lake Biwa at the centre, mountains on both sides, and water from the Suzuka and Hira ranges. Designated a geographical indication in 2022. Shiga's position on the old road between Kyoto and the east made it a brewing corridor for centuries, and one of its houses — founded in the sixteenth century in a northern lakeside town — has become one of the most visible advocates of wooden-vat brewing and of contracting rice from farmers within sight of the brewery.",
              ja:"中心に琵琶湖、両側に山、そして鈴鹿と比良の山系からの水。二〇二二年に地理的表示に指定された。京と東国を結ぶ旧道の上という滋賀の位置は、この地を数世紀にわたる酒の回廊とした。北の湖畔の町で十六世紀に創業した一蔵は、木桶仕込みと、蔵から見える範囲の農家との契約栽培の、最も目立つ提唱者の一つとなっている。",
              zh:"中央是琵琶湖，兩側是山，水來自鈴鹿與比良山系。二〇二二年獲指定為地理標示。滋賀位於連結京都與東國的古道上，數百年來因此成為釀酒的走廊；其中一家於十六世紀創業於北部湖畔小鎮的酒藏，如今是木桶釀造以及「向酒藏視野可及範圍內的農家契作」最鮮明的倡議者之一。" } },
          { term:{ en:"Ōsaka", ja:"大阪", zh:"大阪" }, jp:"大阪府", romaji:"Ōsaka",
            def:{ en:"Ikeda, on the northern edge of the city, was one of the two towns — with Itami just across the prefectural line — where commercial clarified sake was established in the Edo period, before Nada's harbour advantage overtook both. Modern Ōsaka brewing is small, and its most interesting position is agricultural: a brewery in the northern hills grows its own rice organically, brews only junmai, and has done so for long enough that the position is a practice rather than a statement.",
              ja:"市の北の縁の池田は、府県境の向こうの伊丹とともに、江戸期に商いとしての清酒が確立した二つの町の一つである。灘の港の優位が両者を追い越す以前のことである。現代の大阪の酒造りは小さく、その最も興味深い立場は農にある——北の丘の一蔵は自ら有機で米を育て、純米のみを醸し、そしてそれを、その立場が表明ではなく実践となるだけの年月続けてきた。",
              zh:"位於市區北緣的池田，與府縣界另一側的伊丹一起，是江戶時期商業化澄清清酒得以確立的兩個城鎮之一——那是在灘的港口優勢超越兩者之前。現代大阪的釀酒規模不大，其最有意思的位置在農業面：北部丘陵的一家酒藏自行有機種稻、只釀純米，而且持續得夠久，久到這個立場已成為一種實踐而非宣言。" } },
          { term:{ en:"Wakayama", ja:"和歌山", zh:"和歌山" }, jp:"和歌山県", romaji:"Wakayama",
            def:{ en:"Warm, mountainous and better known for fruit than for rice — which is why its geographical indication, designated in 2020, is for plum liqueur rather than for sake: plum wine made in Wakayama from Wakayama plums, the only entry in its category and the clearest case of a GI protecting an agricultural product through the drink made from it. The prefecture's sake breweries are small, food-facing and increasingly export-minded, and the Kino river and the Kōya mountain groundwater supply them.",
              ja:"温暖で山がちであり、米より果実で知られる。二〇二〇年指定の地理的表示が清酒ではなく梅酒であるのはそのためである——和歌山の梅を用い和歌山で造る梅酒であり、その区分で唯一の登録、そして地理的表示が、そこから造られる酒を通じて農産物を守る最も明快な例である。県の清酒の蔵は小さく、食に向かい、輸出への意識を強めている。紀の川と高野の山の地下水がそれらを支える。",
              zh:"溫暖多山，以水果而非稻米聞名——這正是為什麼它二〇二〇年獲指定的地理標示是梅酒而非清酒：以和歌山的梅、在和歌山釀造的梅酒，是該類別中唯一的登錄，也是「地理標示透過所釀之酒保護農產品」最清楚的例子。這個縣的清酒藏規模小、面向餐桌，且出口意識日增；紀之川與高野山的地下水供養著它們。" } }
        ] },

        { t:"note", text:{
          en:"Kinki is where the industry's two extremes live side by side: the largest producers in Japan and the smallest experimental houses, often within an hour of each other. If you want to understand how a single drink can support both, this is the region to travel in. See <a href=\"history.html\">History</a> for how the heartland came to be one, and <a href=\"regions.html\">Regions A–Z</a> for the compact table.",
          ja:"近畿は、この産業の両極が隣り合って住む場所である——日本最大の生産者と、最も小さな実験的な家とが、しばしば互いに一時間のうちにある。一つの飲み物がなぜその双方を支えうるかを理解したいなら、旅すべき地域はここである。この中心がいかにして中心となったかは<a href=\"history.html\">歴史</a>、一覧表は<a href=\"regions.html\">産地一覧</a>を参照。",
          zh:"近畿是這個產業的兩個極端並肩而居之處：日本最大的生產者與最小的實驗性酒家，往往彼此相距不到一小時。若想理解一種飲品如何能同時支撐兩者，這就是該去旅行的地區。這個核心如何成為核心，見<a href=\"history.html\">歷史</a>；簡表見<a href=\"regions.html\">產地一覽</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"regions.html", why:{ en:"The same prefectures in the national index.", ja:"同じ県を、全国の索引のなかで。", zh:"同樣這些縣，放在全國索引裡。" } },
      { href:"water.html", why:{ en:"Miyamizu, in detail.", ja:"宮水を、詳しく。", zh:"宮水，詳細版。" } },
      { href:"history.html", why:{ en:"Why the industry's centre ended up here.", ja:"産業の中心がここに落ち着いた理由。", zh:"為什麼這個產業的中心最後落在這裡。" } },
      { href:"rice.html", why:{ en:"Yamada Nishiki, and the districts graded for it.", ja:"山田錦と、そのために格付けされた地区。", zh:"山田錦，以及為它而分級的那些地區。" } }
    ] }
  ]
};


/* ---- ----------------------------------------- region-west */
SAKE.pages["region-west"] = {
  kicker: { en: "Place · 07", ja: "産地 · 07", zh: "產地 · 07" },
  title:  { en: "Chūgoku & Shikoku", ja: "中国と四国", zh: "中國地方與四國" },
  jp: "中国・四国",
  lede: {
    en: "The western end of Honshū and the island below it. This is where the soft-water problem was solved and where the modern brewing profession keeps its central laboratory; where the oldest surviving named sake rice still grows; where the country's most exported brand came out of a mountain village with no brewing reputation at all; and where the mythology places the first sake ever brewed. Nine prefectures, five of them facing the Inland Sea, all of them warmer than the brewing textbooks would prefer.",
    ja: "本州の西の端と、その下の島である。ここは軟水の問題が解かれた場所であり、近代の醸造の職がその中央の研究所を置く場所であり、現存する最も古い名のある酒米がなお育つ場所であり、最も輸出される銘柄が酒の名声をまったく持たない山あいの村から出た場所であり、そして神話が最初に醸された酒を置く場所である。九つの県、そのうち五つが瀬戸内海に面し、そのすべてが醸造の教科書の好むより暖かい。",
    zh: "本州的西端，以及其下方的島。這裡是軟水難題被解開的地方，是近代釀造專業設置其中央研究所的地方，是現存最古老的具名酒米仍在生長的地方，是外銷最廣的品牌從一個毫無釀酒名聲的山村中誕生的地方，也是神話安放「最初被釀出的酒」的地方。九個縣，其中五個面向瀨戶內海，而它們全都比釀造教科書所偏好的更溫暖。"
  },
  body: [

    { t:"p", text:{
      en:"Two currents run through this chapter. The first is technical: warm-region brewing, and the century of work it took to make soft water and mild winters produce sake that could stand beside Nada's. The second is commercial: this is the part of Japan where the export boom actually reshaped who brews what, most visibly in Yamaguchi.",
      ja:"この章には二つの流れが通っている。一つは技術のものである。暖かい地方の酒造りと、軟水と穏やかな冬に灘と並びうる酒を生ませるために要した一世紀の仕事である。もう一つは商いのものである。ここは輸出の高まりが誰が何を醸すかを実際に組み替えた日本の一部であり、それは山口において最も目に見える。",
      zh:"本章有兩股潮流貫穿。第一股是技術性的：溫暖地區的釀造，以及要讓軟水與溫和冬季釀出足以與灘並列之酒，所耗費的整整一個世紀的工作。第二股是商業性的：這裡是日本境內出口熱潮真正重塑了「誰釀什麼」的地帶，而這在山口最為顯眼。" } },

    { t:"section", id:"hiroshima",
      title:{ en:"Hiroshima", ja:"広島", zh:"廣島" }, jp:"広島県",
      body:[
        { t:"figure",
          caption:{
            en:"Why Hiroshima had to invent something. Nada's water carries the potassium and phosphate that yeast and kōji mould feed on, so a mash there starts fast and finishes early. The same schedule run on Hiroshima's soft water underfeeds everything: the mash starts slowly, stops partway, and then spoils, which is what happened to Miura Senzaburō repeatedly before 1897. His answer was not to add anything to the water. It was to change the clock — lower temperatures, every stage extended, a drier and stronger kōji to carry a sluggish mash — and to accept a longer, cooler, gentler fermentation as the thing itself rather than as a compromise.",
            ja:"広島がなにかを編み出さねばならなかった理由。灘の水は、酵母と麹菌が糧とするカリウムと燐酸を運ぶ。ゆえにそこの醪は速く始まり、早く終わる。同じ日程を広島の軟らかい水で走らせれば、すべてが飢える。醪は遅く始まり、途中で止まり、そして腐る。明治三十年より前、三浦仙三郎に幾度も起きたことである。彼の答えは、水に何かを加えることではなかった。時計を変えることであった——より低い温度、長く取られたすべての段階、鈍い醪を支える乾いた強い麹——そして、長く、冷たく、穏やかな発酵を、妥協としてではなくそれ自体として受け入れることであった。",
            zh:"廣島為什麼非得發明點什麼。灘的水帶有酵母與麴菌賴以為食的鉀與磷酸鹽，所以那裡的醪起步快、結束早。同一套日程放到廣島的軟水上，一切都吃不飽：醪起步遲緩，中途停下，然後腐敗——這正是一八九七年之前一再發生在三浦仙三郎身上的事。他的答案不是往水裡加東西，而是改變時鐘——更低的溫度、每一個階段都拉長、把麴做得更乾更強以承載遲鈍的醪——並且把一段更長、更冷、更溫柔的發酵當成目的本身，而不是一種妥協。" },
          svg: function (lang, L) {
            var W = 760, H = 334, X0 = 60, X1 = 520, Y0 = 70, Y1 = 250;
            function x(d) { return X0 + d / 36 * (X1 - X0); }
            function y(v) { return Y1 - v / 100 * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g, d;
            s += '<text x="' + X0 + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "軟水の地が一から始め直さねばならなかった理由" : lang === "zh" ? "軟水之地為何必須從頭來過" : "WHY A SOFT-WATER REGION HAD TO START AGAIN") + '</text>';
            for (g = 0; g <= 100; g += 25) s += '<line x1="' + X0 + '" y1="' + y(g).toFixed(1) + '" x2="' + X1 + '" y2="' + y(g).toFixed(1) + '" stroke="#EFEDE7"/>';
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            function path(pts) { var k, dd = ""; for (k = 0; k < pts.length; k++) dd += (k ? " L" : "M") + x(pts[k][0]).toFixed(1) + " " + y(pts[k][1]).toFixed(1); return dd; }
            s += '<path d="' + path([[0,0],[3,15],[6,40],[10,70],[14,88],[18,97],[20,100]]) + '" fill="none" stroke="#CDC6B9" stroke-width="2" stroke-dasharray="4 3"/>';
            s += '<path d="' + path([[0,0],[3,8],[6,20],[9,30],[12,35],[16,37],[20,37]]) + '" fill="none" stroke="#B09E7C" stroke-width="2"/>';
            s += '<path d="' + path([[0,0],[4,8],[8,20],[12,38],[17,58],[22,76],[27,90],[32,98],[36,100]]) + '" fill="none" stroke="#7C6B52" stroke-width="2"/>';
            var ex = x(20), ey = y(37);
            s += '<line x1="' + (ex - 5).toFixed(1) + '" y1="' + (ey - 5).toFixed(1) + '" x2="' + (ex + 5).toFixed(1) + '" y2="' + (ey + 5).toFixed(1) + '" stroke="#8B7355" stroke-width="1.6"/>';
            s += '<line x1="' + (ex + 5).toFixed(1) + '" y1="' + (ey - 5).toFixed(1) + '" x2="' + (ex - 5).toFixed(1) + '" y2="' + (ey + 5).toFixed(1) + '" stroke="#8B7355" stroke-width="1.6"/>';
            var lb = [
              { x:150, y:104, c:"#A39C91", a:{ en:"Nada's method in Nada's water", ja:"灘の方法を灘の水で", zh:"灘的方法用在灘的水上" }, b:{ en:"fast, and early to finish", ja:"速く始まり、早く終わる", zh:"起步快，結束早" } },
              { x:300, y:142, c:"#7C6B52", a:{ en:"the soft-water method", ja:"軟水醸造法", zh:"軟水釀造法" }, b:{ en:"colder, longer, and it finishes", ja:"より冷たく、より長く、そして終わる", zh:"更冷、更長，而且能走完" } },
              { x:325, y:182, c:"#B09E7C", a:{ en:"Nada's method in Hiroshima's water", ja:"灘の方法を広島の水で", zh:"灘的方法用在廣島的水上" }, b:{ en:"it stalls, and then it spoils", ja:"止まり、そして腐る", zh:"停滯，然後腐敗" } }
            ];
            for (i = 0; i < lb.length; i++) {
              s += '<text x="' + lb[i].x + '" y="' + lb[i].y + '" font-size="10" fill="' + lb[i].c + '">' + L(lb[i].a) + '</text>';
              s += '<text x="' + lb[i].x + '" y="' + (lb[i].y + 13) + '" font-size="9" fill="#A39C91">' + L(lb[i].b) + '</text>';
            }
            s += '<text x="' + (X0 + 6) + '" y="' + (Y0 + 14) + '" font-size="9" fill="#A39C91">' +
                 (lang === "ja" ? "発酵がどこまで進んだか" : lang === "zh" ? "發酵進行到什麼程度" : "how far the fermentation has gone") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y1 + 18) + '" font-size="9" fill="#A39C91">' +
                 (lang === "ja" ? "仕込みの始まり" : lang === "zh" ? "仕込開始" : "the mash begins") + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 18) + '" text-anchor="end" font-size="9" fill="#A39C91">' +
                 (lang === "ja" ? "灘よりも遅い終わり" : lang === "zh" ? "比灘更晚才結束" : "and finishes, later than in Nada") + '</text>';
            s += '<rect x="546" y="' + Y0 + '" width="184" height="' + (Y1 - Y0) + '" fill="#F8F6F1" stroke="#DED8CB"/>';
            s += '<text x="562" y="' + (Y0 + 22) + '" font-size="10.5" fill="#201E1B">' +
                 (lang === "ja" ? "三浦が変えたもの・一八九七" : lang === "zh" ? "三浦改變了什麼・1897" : "what Miura changed, 1897") + '</text>';
            var lv = [
              [{ en:"lower temperature", ja:"より低い温度で", zh:"以更低的溫度" }, { en:"at every stage", ja:"あらゆる段階を", zh:"每一個階段" }],
              [{ en:"every stage longer", ja:"段階を長く取る", zh:"把每個階段拉長" }, { en:"nothing is hurried", ja:"急がせるものはない", zh:"沒有一步是趕出來的" }],
              [{ en:"a drier, stronger kōji", ja:"乾いた強い麹", zh:"更乾、更強的麴" }, { en:"to carry a sluggish mash", ja:"鈍い醪を支えるために", zh:"用來承載遲鈍的醪" }],
              [{ en:"patience", ja:"待つこと", zh:"耐心" }, { en:"published 1898", ja:"明治三十一年に公にする", zh:"一八九八年公開" }]
            ];
            for (i = 0; i < lv.length; i++) {
              var ly = Y0 + 50 + i * 38;
              s += '<rect x="562" y="' + (ly - 9) + '" width="4" height="4" fill="#B09E7C"/>';
              s += '<text x="574" y="' + (ly - 5) + '" font-size="9.5" fill="#4A453D">' + L(lv[i][0]) + '</text>';
              s += '<text x="574" y="' + (ly + 8) + '" font-size="9" fill="#A39C91">' + L(lv[i][1]) + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "曲線は図式である。形と順は記されたとおりであり、日数と到達度は目盛られていない。"
                  : lang === "zh" ? "曲線為示意：形狀與先後如文獻所述，但天數與進度並未按實際刻度繪製。"
                  : "The curves are schematic: the shapes and their order are as recorded, the days and heights are not to scale.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"If one prefecture had to be called the technical capital of Japanese sake, it would be this one — not because it brews the most, but because two things happened here that everything else depends on. Soft-water brewing was invented in Hiroshima, and the national brewing research institute now sits in Higashi-Hiroshima, ten minutes' walk from a street of working breweries.",
          ja:"もし一つの県を日本酒の技術の首都と呼ばねばならないとすれば、それはここである。最も多く醸すからではなく、他のすべてが依って立つ二つのことがここで起きたからである。軟水醸造法は広島で生まれ、国の醸造の研究所は今、稼働する蔵の並ぶ通りから歩いて十分の東広島にある。",
          zh:"如果必須指定一個縣為日本酒的技術之都，那會是這裡——不是因為它釀得最多，而是因為其他一切所倚賴的兩件事都發生在此。軟水釀造法誕生於廣島，而國家的釀造研究機構如今就座落在東廣島，距離一條有酒藏仍在運作的街道只需步行十分鐘。" } },
        { t:"defs", items:[
          { term:{ en:"The soft-water method", ja:"軟水醸造法", zh:"軟水釀造法" }, jp:"軟水醸造法", romaji:"nansui jōzō-hō",
            def:{ en:"Hiroshima's groundwater is soft — low in the potassium and phosphate that yeast and kōji mould feed on — so fermentation started slowly, stalled, and spoiled when brewers copied Nada's methods. Miura Senzaburō worked out the answer in 1897 and published it in 1898: work at lower temperature, extend every stage, make the kōji drier and stronger so it can carry a sluggish mash, and be patient. The result was not merely adequate sake but a different and softer style. Every warm, soft-water region in Japan brews on his framework, and so, indirectly, does every brewery abroad.",
              ja:"広島の地下水は軟らかい——酵母と麹菌が糧とするカリウムや燐酸に乏しい——ゆえに灘の方法を写すと、発酵は遅く始まり、止まり、腐った。三浦仙三郎は明治三十年（1897）にその答えを見出し、翌明治三十一年に世に問うた。より低い温度で働き、すべての段階を長くとり、鈍い醪を支えられるよう麹を乾かし強く造り、そして待つ。結果は単に足りる酒ではなく、異なる、より柔らかな型であった。日本の暖かく軟水の地方はすべて彼の枠組みの上で醸しており、間接的には、国外のあらゆる蔵もそうである。",
              zh:"廣島的地下水偏軟——缺乏酵母與麴菌賴以為食的鉀與磷酸鹽——因此當釀造者照抄灘的方法時，發酵起步遲緩、中途停滯、終至腐敗。三浦仙三郎於一八九七年找出解答，並在一八九八年公開發表：以更低的溫度作業、把每一個階段拉長、把麴做得更乾更強以承載遲鈍的醪，然後耐心等待。其結果不只是「勉強及格」的酒，而是一種不同的、更柔軟的風格。日本所有溫暖而水質偏軟的地區都建立在他的框架上釀酒；間接地說，海外的每一間酒藏也是。" } },
          { term:{ en:"Saijō", ja:"西条", zh:"西條" }, jp:"西条酒蔵通り", romaji:"Saijō sakagura-dōri",
            def:{ en:"One of the three towns Japan calls a sake capital, alongside Nada and Fushimi, and by far the most walkable: eight houses in the brewers' association, seven of them on or beside a single street, marked by red-brick chimneys and white namako-kabe lattice walls. Its water is Mount Ryūō snowmelt that has taken ten to fifteen years to filter through the Saijō strata, and each brewery's well sits at a different depth and hardness. The Sake Matsuri each October, running since 1990, draws over two hundred thousand people across two days.",
              ja:"灘・伏見と並んで日本が酒都と呼ぶ三つの町の一つであり、そのうち群を抜いて歩きやすい。酒造組合に八軒、そのうち七軒が一本の通りの上か傍らにあり、赤煉瓦の煙突と白い海鼠壁がその印である。水は龍王山の雪解けが西条の地層を十年から十五年かけて濾したものであり、蔵ごとの井戸は深さも硬度も異なる。平成二年（1990）から続く十月の酒まつりは、二日で二十万を越える人を集める。",
              zh:"日本稱之為酒都的三個城鎮之一，與灘、伏見並列，而且遠比另兩者適合步行：酒造組合共八家，其中七家就位於同一條街上或街旁，以紅磚煙囪與白色海鼠牆為標記。其水是龍王山的融雪，花了十至十五年穿過西條的地層過濾而成，而每一家酒藏的水井深度與硬度都不相同。自一九九〇年起、每年十月舉辦的酒祭，兩天內吸引超過二十萬人。" } },
          { term:{ en:"The national institute", ja:"酒類総合研究所", zh:"酒類綜合研究所" }, jp:"酒類総合研究所", romaji:"Shurui Sōgō Kenkyūjo",
            def:{ en:"Founded in Tokyo in 1904 as the Brewing Experiment Station, moved to Higashi-Hiroshima in 1995, and reconstituted as the National Research Institute of Brewing in 2001. It is the descendant of the laboratory that isolated the Association yeasts, standardised the analytical methods every brewery uses, and has run the National New Sake Appraisal since 1911. That the country's brewing laboratory sits in Hiroshima rather than in Hyōgo or Kyoto is a fair summary of where the technical centre of gravity moved.",
              ja:"明治三十七年（1904）に醸造試験所として東京に生まれ、平成七年（1995）に東広島へ移り、平成十三年（2001）に独立行政法人酒類総合研究所となった。協会酵母を分離し、あらゆる蔵の用いる分析法を定め、明治四十四年（1911）から全国新酒鑑評会を営んできた実験室の後裔である。国の醸造の実験室が兵庫でも京都でもなく広島に座しているという事実は、技術の重心がどこへ移ったかの適切な要約である。",
              zh:"一九〇四年以「釀造試驗所」之名創立於東京，一九九五年遷至東廣島，二〇〇一年改組為獨立行政法人酒類綜合研究所。它是那個實驗室的後裔——分離出協會酵母、制定每一間酒藏所使用的分析方法，並自一九一一年起主辦全國新酒鑑評會。國家的釀造實驗室座落在廣島而非兵庫或京都，這件事本身，就是技術重心遷徙方向的恰當摘要。" } },
          { term:{ en:"Rice and names", ja:"米と名", zh:"米與名字" }, jp:"八反錦・千本錦", romaji:"Hattan Nishiki, Senbon Nishiki",
            def:{ en:"Hattan Nishiki is the prefecture's own line, descended from a Hattan strain recorded in the nineteenth century, giving a lean and slightly firm sake. Senbon Nishiki, released in the 1990s, is a Yamada Nishiki cross bred to ripen and stand up in Hiroshima's conditions. Names to know: Kamoizumi, the pioneer of undiluted <em>genshu</em> and of amber, rice-forward sake; Kamotsuru, whose Daiginjō Gold was poured at a 2014 state dinner in Tokyo; Fukubijin; Hakubotan; and, from the coast, Ugo no Tsuki.",
              ja:"八反錦は県自身の系統であり、十九世紀に記録された八反の株に遡り、痩せてやや硬い酒を与える。千本錦は一九九〇年代に出た山田錦の交配であり、広島の条件で実り立つよう育てられた。知っておく名は、原酒と、米を前に出した琥珀の酒の先駆である賀茂泉。二〇一四年の東京での公式晩餐に注がれた大吟醸ゴールドを持つ賀茂鶴。福美人。白牡丹。そして海沿いからは雨後の月。",
              zh:"八反錦是本縣自有的系統，可上溯至十九世紀記載的八反株系，釀出精瘦而略顯堅實的酒。千本錦於一九九〇年代問世，是為適應廣島條件、能順利成熟站穩而選育的山田錦雜交系。值得認識的名字：賀茂泉，原酒與「以米為前景」的琥珀色酒的先驅；賀茂鶴，其大吟釀 Gold 曾在二〇一四年東京的一場國宴上被斟出；福美人；白牡丹；以及來自海邊的雨後之月。" } }
        ] },
        { t:"note", title:{ en:"Why this matters outside Japan", ja:"国外において重要な理由", zh:"為何這在日本以外也重要" }, text:{
          en:"Almost every country that now brews sake — the United States, France, Norway, Australia, Vietnam, Taiwan — has soft water and a mild climate. Nada's hard-water, cold-winter playbook does not transfer. Miura's does. The technical lineage of most non-Japanese sake runs back through Hiroshima, whether or not the brewer knows it.",
          ja:"今日、酒を醸すほとんどの国——合衆国、フランス、ノルウェー、豪州、越南、台湾——は軟水と穏やかな気候を持つ。灘の硬水と寒冬の手引きは移らない。三浦のものは移る。日本以外のほとんどの酒の技術の系譜は、造り手が知るか否かにかかわらず、広島を通って遡る。",
          zh:"如今釀造清酒的國家幾乎都——美國、法國、挪威、澳洲、越南、台灣——擁有軟水與溫和氣候。灘的硬水、寒冬那套手冊無法移植；三浦的可以。日本以外絕大多數清酒的技術譜系，無論釀造者是否知情，都可以回溯到廣島。" } }
      ] },

    { t:"section", id:"yamaguchi",
      title:{ en:"Yamaguchi", ja:"山口", zh:"山口" }, jp:"山口県",
      body:[
        { t:"p", text:{
          en:"The clearest single case in Japan of a prefecture reordered by one brewery. Yamaguchi had no particular sake reputation; it had a shrinking number of small houses serving a shrinking local market. Then a brewery in a mountain valley in Iwakuni stopped making anything except junmai daiginjō, and the arithmetic of the whole prefecture changed.",
          ja:"一つの蔵によって県が組み替えられた、日本で最も明快な事例である。山口はこれといった酒の名声を持たなかった。縮む地元の市場に仕える、数を減らす小さな家々があるだけであった。やがて岩国の山あいの谷にある一軒が純米大吟醸以外を造ることをやめ、県全体の算術が変わった。",
          zh:"這是日本境內最清楚的一個案例：一整個縣被一家酒藏重新排序。山口原本沒有特別的清酒聲譽；它只有一批數量遞減的小酒藏，服務著一個同樣遞減的在地市場。然後，岩國山谷中的一家酒藏停止生產純米大吟釀以外的任何東西，於是整個縣的算術改變了。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"A house with nothing to lose", ja:"失うもののない家", zh:"一無可失的酒藏" }, jp:"旭酒造", romaji:"Asahi Shuzō", meta:{ en:"1980s", ja:"一九八〇年代", zh:"一九八〇年代" },
            text:{ en:"Asahi Shuzō, in the Shimagō valley of Iwakuni, was the fourth of four breweries in its own town and losing money. A failed side venture in restaurants and beer nearly ended it; the tōji and the seasonal crew left. What remained was a president with no brewing guild to inherit and no local market worth defending, which is a description of a disaster and also of a free hand.",
              ja:"岩国の周東の谷にある旭酒造は、自らの町の四軒のうち四番目であり、損を出していた。飲食と地ビールの副業の失敗が、あやうくそれを終わらせた。杜氏と季節の蔵人は去った。残ったのは、継ぐべき杜氏集団も、守るに値する地元の市場も持たない社長であった。それは災厄の記述であり、同時に自由な手の記述でもある。",
              zh:"位於岩國周東谷地的旭酒造，是自己鎮上四家酒藏中的第四家，而且在虧損。一項餐飲與地啤的副業失敗，幾乎結束了它；杜氏與季節性藏人相繼離去。留下來的，是一位沒有杜氏集團可繼承、也沒有值得防守的在地市場的社長——這既是一場災難的描述，也是一雙自由之手的描述。" } },
          { n:2, title:{ en:"Only the top grade", ja:"最上の格だけ", zh:"只做最高等級" }, jp:"純米大吟醸のみ", romaji:"junmai daiginjō nomi", meta:{ en:"1990s–", ja:"一九九〇年代—", zh:"一九九〇年代—" },
            text:{ en:"The decision was to make nothing else: no futsūshu, no honjōzō, no local table sake. Yamada Nishiki only, polished hard, sold by polishing ratio as the product name. Without a tōji, brewing was rebuilt around measurement — temperature logging, data on every tank, a year-round refrigerated brewhouse rather than a winter season. Whether that counts as heresy or as method is the argument the industry has been having ever since.",
              ja:"何も他を造らないという決断であった。普通酒も、本醸造も、地元の食中酒もない。山田錦のみを、高く磨き、精米歩合を商品の名として売る。杜氏を持たぬまま、酒造りは計測を軸に建て直された。温度の記録、槽ごとの数値、冬の季節ではなく年間を通じた冷蔵の蔵である。それを異端と数えるか方法と数えるかが、業界がそれ以来続けている議論である。",
              zh:"其決斷是：不做別的。沒有普通酒、沒有本釀造、沒有在地佐餐酒。只用山田錦，高度精磨，並以精米步合作為商品名稱來販售。在沒有杜氏的情況下，釀造被圍繞「量測」重建：溫度紀錄、每一槽的數據、以及全年冷藏的釀造廠房而非冬季一季。這究竟該算異端還是算方法，正是業界自那時起爭論至今的題目。" } },
          { n:3, title:{ en:"Export as the home market", ja:"輸出を本国市場とする", zh:"把出口當作本國市場" }, jp:"輸出", romaji:"yushutsu", meta:{ en:"2000s–", ja:"二〇〇〇年代—", zh:"二〇〇〇年代—" },
            text:{ en:"Because there was no local trade to protect, the brewery sold outward: Tokyo first, then Paris, New York, Hong Kong, Taipei. It became the sake that people who do not otherwise drink sake have heard of, opened a shop and later a brewing operation abroad, and made polishing ratio a globally legible number. It also made the prefecture a destination for Yamada Nishiki contracts that used to go entirely to Hyōgo.",
              ja:"守るべき地元の商いがなかったがゆえに、蔵は外へ売った。まず東京、次いで巴里、紐育、香港、台北である。それは、ふだん日本酒を飲まない人々が名を知る酒となり、国外に店を、のちに醸造の拠点を開き、精米歩合を世界に読める数にした。同時に、かつてすべて兵庫へ向かっていた山田錦の契約が、この県へも向かうようにした。",
              zh:"正因為沒有需要保護的在地生意，這家酒藏選擇向外賣：先是東京，然後是巴黎、紐約、香港、台北。它成了「平常不喝清酒的人也聽過」的那款清酒，在海外開了店、後來又設了釀造據點，並讓精米步合成為一個全球都能讀懂的數字。它同時也讓山田錦的契作——過去幾乎全部流向兵庫——開始流向這個縣。" } },
          { n:4, title:{ en:"What the prefecture became", ja:"県がなったもの", zh:"這個縣後來的樣子" }, jp:"県全体", romaji:"ken zentai", meta:{ en:"now", ja:"現在", zh:"現在" },
            text:{ en:"Yamaguchi now has a cluster of houses working in a modern, aromatic, precisely fermented idiom — Tōyō Bijin at Hagi, Gangi, Ki, Wakamusume — and a prefectural sake rice, Saito no Shizuku, bred from Kokuryōmiyako and released in 2002 and named in 2004 for brewers who could not get enough Hyōgo Yamada Nishiki. In 2024 the prefecture harvested some 2,400 tonnes of Yamada Nishiki against about 195 tonnes of Saito no Shizuku. The GI Hagi, designated in 2021, covers Hagi city and the town of Abu.",
              ja:"山口は今、現代的で、香り高く、精緻に発酵させる語法で働く家の群れを持つ——萩の東洋美人、雁木、貴、若娘である。そして県の酒米、西都の雫を持つ。穀良都から育てられ、平成十四年（2002）に世に出て平成十六年（2004）に名を得た、兵庫の山田錦を十分に得られぬ造り手のための米である。令和六年（2024）、県は山田錦およそ二千四百トンに対し、西都の雫を約百九十五トン収めた。平成三十三年にあたる二〇二一年に指定されたGI萩は、萩市と阿武町を覆う。",
              zh:"山口如今擁有一群以現代、芳香、精準發酵的語彙工作的酒藏——萩的東洋美人、雁木、貴、若娘——以及一款縣產酒米「西都之雫」：由穀良都選育而來，二〇〇二年開始流通、二〇〇四年命名，為的是那些拿不到足夠兵庫山田錦的釀造者。二〇二四年，全縣收穫約二千四百噸山田錦，相對於約一百九十五噸的西都之雫。二〇二一年指定的 GI 萩，涵蓋萩市與阿武町。" } }
        ] },
        { t:"note", title:{ en:"The honest objection", ja:"正直な反論", zh:"誠實的反對意見" }, text:{
          en:"Not everyone regards the Yamaguchi model as good news. Polishing to 23 percent discards more than three-quarters of the grain; a brewery that brews year-round in a refrigerated building has severed the link between sake and season that the rest of this site keeps describing; and a single brand's demand for Yamada Nishiki bids the price up for everyone else. All of that is true, and so is the fact that the same brewery is a large part of why sake is drunk in cities that had never heard of it in 1990.",
          ja:"誰もが山口の型を良い報せと見るわけではない。二割三分まで磨けば粒の四分の三以上を捨てることになる。冷蔵された建物で年間を通じて醸す蔵は、この場所が語り続けてきた酒と季節の結びつきを断っている。そして一つの銘柄の山田錦への需要は、他のすべての者にとっての価格を押し上げる。それらはみな真である。同時に、一九九〇年には名を聞いたこともなかった都市で今日、酒が飲まれている理由の大きな部分が同じ蔵にあることも真である。",
          zh:"並非所有人都把山口模式視為好消息。精磨到百分之二十三，等於丟棄超過四分之三的米粒；一間在冷藏建築中全年釀造的酒藏，切斷了本站不斷描述的酒與季節之間的連結；而單一品牌對山田錦的需求，會把價格推高給所有其他人。這些全是事實。同時也是事實的是：一九九〇年還沒聽過清酒的城市裡，今天有人在喝清酒，其中很大一部分原因正是同一家酒藏。" } }
      ] },

{ t:"section", id:"okayama",
      title:{ en:"Okayama", ja:"岡山", zh:"岡山" }, jp:"岡山県",
      body:[
        { t:"p", text:{
          en:"One prefecture, one rice, and a lesson in what happens when a variety is nearly allowed to die. Omachi is the oldest sake rice still grown under its own name, and roughly nine tenths of it comes from Okayama.",
          ja:"一つの県、一つの米、そして一つの品種がほとんど絶えるに任されたときに何が起きるかの教えである。雄町は自らの名のまま今も育つ最も古い酒米であり、そのおよそ十分の九が岡山から来る。",
          zh:"一個縣、一種米，以及一堂關於「當一個品種幾乎被放任死去時會發生什麼」的課。雄町是至今仍以自身之名被種植的最古老酒米，而其中約十分之九來自岡山。" } },
        { t:"timeline", items:[
          { year:"1859", era:"安政六", eraJp:"安政六年", title:{ en:"Found in a field", ja:"田で見出される", zh:"在田裡被發現" }, jp:"雄町",
            text:{ en:"A farmer of Omachi village, in what is now Okayama city, is said to have brought back two ears of an unusual tall rice from a trip to the Mount Daisen area and grown them on. The variety was called Nihon-sō at first and took the village's name in 1866; a pure line was selected in 1922. It is the ancestor, directly or at one remove, of Yamada Nishiki and Gohyakumangoku both.",
              ja:"今の岡山市にあたる雄町村の農夫が、大山あたりへの旅から見慣れぬ丈高い稲の二本の穂を持ち帰り、育てたと伝えられる。品種は初め二本草と呼ばれ、慶応二年（1866）に村の名を得た。純系は大正十一年（1922）に選ばれた。直接に、あるいは一代を挟んで、山田錦と五百万石の双方の祖である。",
              zh:"據傳，位於今日岡山市的雄町村的一位農夫，從大山一帶的旅途中帶回兩支不尋常的高稈稻穗，並將其種植下去。這個品種最初被稱為「二本草」，一八六六年取得村名；純系於一九二二年選出。無論是直接或隔一代，它都是山田錦與五百萬石兩者的祖先。" } },
          { year:"1900s", era:"明治後期", eraJp:"明治後期", title:{ en:"The competition rice", ja:"鑑評会の米", zh:"鑑評會之米" }, jp:"全盛",
            text:{ en:"For the first half of the twentieth century Omachi was the rice you used if you intended to win. Its enormous shinpaku and soft, readily dissolving grain made it the standard for the new ginjō competitions, and it was planted across western Japan.",
              ja:"二十世紀の前半、勝つつもりであれば用いるべき米は雄町であった。その巨きな心白と、軟らかく容易に溶ける粒は、新しい吟醸の鑑評会の標準とならしめ、西日本一帯に植えられた。",
              zh:"在二十世紀的前半，若你打算得獎，該用的米就是雄町。它巨大的心白與柔軟、易溶的米粒，使它成為新興吟釀鑑評會的標準，並被廣植於西日本各地。" } },
          { year:"1960s", era:"昭和", eraJp:"昭和", title:{ en:"Almost gone", ja:"ほとんど絶える", zh:"幾乎消失" }, jp:"幻の米",
            text:{ en:"Omachi grows to over one and a half metres, lodges in wind and rain, ripens late and takes disease easily. As agriculture mechanised and shorter, safer varieties arrived, planting collapsed to a few hectares. The nickname it carries today — the phantom rice — dates from this period, and was not affectionate.",
              ja:"雄町は一メートル半を越えて伸び、風雨に倒れ、遅く実り、病を受けやすい。農が機械化され、より短く安全な品種が現れると、作付けは数ヘクタールにまで崩れた。今日それが負う渾名——幻の米——はこの時期のものであり、愛情から出たものではなかった。",
              zh:"雄町可長到一公尺半以上，遇風雨易倒伏，成熟晚，且易感病害。隨著農業機械化、更矮更安全的品種出現，種植面積崩落到僅剩數公頃。它今日所背負的綽號——夢幻之米——正出自這個時期，而且並非出於疼愛。" } },
          { year:"1970s–", era:"昭和後期", eraJp:"昭和後期", title:{ en:"Brought back", ja:"戻される", zh:"被找回來" }, jp:"復活",
            text:{ en:"Okayama growers and a small number of brewers rebuilt the seed stock and the acreage deliberately, and the ji-zake movement gave them a market that valued difficulty. Today Okayama supplies about nine tenths of the national crop, with small quantities in Hiroshima, Fukuoka and Kagawa.",
              ja:"岡山の生産者と少数の造り手が、種と作付面積を意図して建て直し、地酒の運動が難しさを尊ぶ市場を与えた。今日、岡山は国内の収穫のおよそ十分の九を供し、広島、福岡、香川に少量がある。",
              zh:"岡山的生產者與少數釀造者刻意重建了種原與栽培面積，而地酒運動則給了他們一個看重「困難」的市場。今日岡山供應全國收成的約十分之九，廣島、福岡與香川則有少量。" } },
          { year:"2000s–", era:"平成", eraJp:"平成", title:{ en:"A cult of its own", ja:"それ自身の信徒", zh:"自成一派的信徒" }, jp:"オマチスト",
            text:{ en:"Drinkers who seek out Omachi bottlings call themselves <em>omachisuto</em>, and an annual summit brings brewers using the rice together. It is now the only pre-modern sake rice with a following organised around the variety rather than around a brand.",
              ja:"雄町の酒を求めて飲む者はみずからをオマチストと呼び、この米を用いる造り手が集まる年一度の会がある。今や、銘柄ではなく品種を軸に組まれた信徒を持つ、唯一の近代以前の酒米である。",
              zh:"專門尋找雄町酒款的飲者自稱「雄町主義者」，每年還有一場把使用此米的釀造者聚在一起的高峰會。它如今是唯一一種擁有「以品種而非以品牌為核心」之追隨者的前近代酒米。" } }
        ] },
        { t:"defs", items:[
          { term:{ en:"What it tastes like", ja:"味わい", zh:"風味" }, jp:"雄町の味", romaji:"Omachi no aji",
            def:{ en:"Broader and rounder than Yamada Nishiki, with more visible sweetness, a wilder and more mineral middle, and a tail that is sometimes described as earthy or as smelling of the field. It dissolves so readily that the mash needs restraining rather than encouraging — the opposite of most brewers' instincts, which is part of why it is respected.",
              ja:"山田錦より広く丸く、甘みがより見え、中盤はより野生的で鉱物質であり、余韻は土のようだ、田の匂いがするなどと言われることがある。あまりに容易に溶けるため、醪は励ますより抑える必要がある。ほとんどの造り手の本能と逆であり、それが敬われる理由の一部である。",
              zh:"比山田錦更寬、更圓，甜味更外顯，中段更野性、更帶礦物感，尾韻有時被形容為土質的、或帶有田野的氣味。它溶解得太容易，以致醪需要被抑制而非被鼓勵——這與多數釀造者的本能相反，而這正是它受敬重的部分原因。" } },
          { term:{ en:"Akaiwa Omachi", ja:"赤磐雄町", zh:"赤磐雄町" }, jp:"赤磐雄町", romaji:"Akaiwa Omachi",
            def:{ en:"The most sought-after growing area, in the hills north-east of Okayama city, on the alluvial soils that produced the original crop. Bottles carrying the district name on the label are the Omachi equivalent of a Special A village on a Yamada Nishiki bottle.",
              ja:"最も求められる産地であり、岡山市の北東の丘、もとの作を生んだ沖積の土の上にある。地区の名を札に載せた瓶は、山田錦の瓶における特A地区の村に相当する。",
              zh:"最受追捧的產地，位於岡山市東北方的丘陵、產出最初那批稻作的沖積土上。標籤上載明此地區名稱的酒瓶，在雄町世界裡相當於山田錦酒瓶上的特 A 地區村名。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"岡山の蔵", romaji:"Okayama no kura",
            def:{ en:"Kamikokoro, whose entire range is built on the rice; Gozenshu, the Tsuyama house that revived bodaimoto brewing with a university laboratory and is run by a family whose brewing chief is a woman; Sakehitosuji; and Tsuji Honten, the Katsuyama house whose <em>omachi</em> bottlings and cotton-print bottle wraps helped define what a regional premium brand could look like.",
              ja:"品揃えのすべてをこの米の上に建てる嘉美心。大学の研究室とともに菩提酛を蘇らせ、女性が醸造の長を務める家が営む津山の御前酒。酒一筋。そして、その雄町の酒と手拭い柄の瓶装が、地方の高級銘柄のあり方を形づくることを助けた勝山の辻本店。",
              zh:"嘉美心，其全部產品線都建立在這款米上；御前酒，這家津山的酒藏與大學實驗室合作復活了菩提酛，並由一個以女性擔任釀造負責人的家族經營；酒一筋；以及辻本店，這家勝山的酒藏，其雄町酒款與棉布印花瓶裝，協助定義了「地方高級品牌」可以是什麼樣子。" } }
        ] }
      ] },

    { t:"section", id:"sanin",
      title:{ en:"Shimane & Tottori", ja:"島根と鳥取", zh:"島根與鳥取" }, jp:"山陰",
      body:[
        { t:"p", text:{
          en:"The San'in coast — the Sea of Japan side of western Honshū, cold and grey in winter, sparsely populated, and the part of the country where sake and the gods are least separable.",
          ja:"山陰の海岸——西日本の日本海側であり、冬は寒く灰色で、人は疎らであり、そして酒と神が最も分かちがたい国の一部である。",
          zh:"山陰海岸——西日本的日本海側，冬季寒冷灰暗、人口稀疏，也是這個國家裡酒與神明最難以分離的一塊土地。" } },
        { t:"defs", items:[
          { term:{ en:"Shimane — the origin claim", ja:"島根——発祥の主張", zh:"島根——起源之說" }, jp:"日本酒発祥の地", romaji:"nihonshu hasshō no chi",
            def:{ en:"Two texts anchor it. In the myth of Yamata no Orochi, Susanoo defeats the eight-headed serpent by setting out <em>yashiori no sake</em> — sake brewed and rebrewed eight times — in eight vats. And the eighth-century <em>Izumo no Kuni Fudoki</em> records the gods gathering at Saka to brew sake and feast for a hundred and eighty days. Saka Shrine, also called Matsuo Shrine, still holds a brewing licence and serves a cloudy sake at its festival on 13 October.",
              ja:"二つの文がそれを繋ぎ止めている。八岐大蛇の神話において、須佐之男は八塩折之酒——八度醸し重ねた酒——を八つの槽に据えて八つ頭の蛇を討つ。そして八世紀の『出雲国風土記』は、神々が佐香に集い酒を醸して百八十日の宴を張ったと記す。松尾神社とも呼ばれる佐香神社は今も酒造の免許を保ち、十月十三日の祭に濁り酒を供する。",
              zh:"有兩部文獻把這個說法錨定住。在八岐大蛇的神話中，須佐之男擺出八鹽折之酒——反覆釀造八次的酒——盛於八個槽中，藉此擊敗八頭之蛇。而八世紀的《出雲國風土記》記載：諸神聚於佐香釀酒，設宴一百八十日。又稱松尾神社的佐香神社至今仍持有釀造執照，並在十月十三日的祭典上供出濁酒。" } },
          { term:{ en:"Shimane — the sake", ja:"島根——酒", zh:"島根——酒" }, jp:"島根の酒", romaji:"Shimane no sake",
            def:{ en:"Traditionally sweeter and fuller than the national mean, because Izumo cooking is sweet and because the region kept its own taste through the dry-sake decades. The prefectural rice varieties are Saka Nishiki, named after the shrine, and Kan no Mai. Names to know: Ri Jūsei, the Matsue house that is one of the loudest voices for kimoto and for sake as food; Kaiun no Izumo, Fuji no Yume, and the Tsuwano houses in the south.",
              ja:"伝統的に全国の平均より甘く厚い。出雲の料理が甘いからであり、辛口の数十年を通じて地域が自らの好みを保ったからである。県の米は、神社にちなむ佐香錦と神の舞である。知っておく名は、酛と食の酒の最も大きな声の一つである松江の李白、出雲の開運、富士の夢、そして南の津和野の家々。",
              zh:"傳統上比全國平均更甜、更厚實——因為出雲料理偏甜，也因為這個地區在「辛口的數十年」間保住了自己的口味。縣產米品種為以神社為名的佐香錦，以及神之舞。值得認識的名字：松江的李白，是為生酛與「酒即食物」發聲最響亮者之一；出雲的開運、富士之夢，以及南部津和野的酒藏。" } },
          { term:{ en:"Tottori — Gōriki", ja:"鳥取——強力", zh:"鳥取——強力" }, jp:"強力", romaji:"Gōriki",
            def:{ en:"The prefecture's own heirloom rice, bred in the 1920s, abandoned by 1950 and reconstructed from a handful of seeds held at the prefectural station in the late 1980s. It is tall, hard to grow, hard to dissolve, and gives a dense, slow-opening sake with a firm mineral spine — the opposite of Omachi in the mash, though both are museum pieces returned to work.",
              ja:"県自身の在来の米であり、大正の末に育てられ、昭和二十五年ごろには捨てられ、昭和の終わりに県の試験場に残る一握りの種から再構された。丈高く、育てにくく、溶けにくく、堅い鉱物の背をもつ密で開きの遅い酒を与える。醪においては雄町の対極だが、双方とも仕事に戻された博物館の品である。",
              zh:"本縣自有的在來米，育成於一九二〇年代，到一九五〇年前後遭到放棄，並在一九八〇年代末由縣立試驗場保存的一小把種子重新復原。它高稈、難種、難溶，釀出的酒密實、開展緩慢，帶有堅實的礦物骨幹——在醪中是雄町的反面，儘管兩者都是被送回工作崗位的博物館藏品。" } },
          { term:{ en:"Tottori — GI and guild", ja:"鳥取——地理的表示と杜氏", zh:"鳥取——GI 與杜氏" }, jp:"GI鳥取・因幡杜氏", romaji:"GI Tottori, Inaba tōji",
            def:{ en:"Tottori was designated a prefecture-wide geographical indication on 1 October 2025, one of the newest on the register. The Inaba guild, once one of the larger tōji associations, is now very small. Names to know: Takaisami, Suwaizumi, Chiyomusubi.",
              ja:"鳥取は二〇二五年十月一日に県全域の地理的表示に指定された。台帳の中で最も新しいものの一つである。かつて大きな杜氏の組合の一つであった因幡杜氏は、今はごく小さい。知っておく名は、鷹勇、諏訪泉、千代むすび。",
              zh:"鳥取於二〇二五年十月一日獲指定為全縣範圍的地理標示，是登記簿上最新的幾個之一。因幡杜氏曾是規模較大的杜氏組合之一，如今已非常小。值得認識的名字：鷹勇、諏訪泉、千代結。" } }
        ] }
      ] },

{ t:"section", id:"shikoku",
      title:{ en:"Shikoku", ja:"四国", zh:"四國" }, jp:"四国",
      body:[
        { t:"p", text:{
          en:"The smallest of the four main islands, cut in half by a mountain range: an Inland Sea side that is dry, sunny and mild, and a Pacific side that takes the typhoons and some of the heaviest rainfall in Japan. Four prefectures, fewer than sixty breweries between them, and one of them — Kōchi — with a drinking culture so distinct that it has its own vocabulary and its own vessels.",
          ja:"四つの主な島のうち最も小さく、山脈に二つに切られている。乾いて日当たりよく穏やかな瀬戸内の側と、台風と日本で最も多い部類の雨を受ける太平洋の側である。四つの県、その全体で六十に満たない蔵、そしてそのうちの一つ——高知——は、独自の語彙と独自の器を持つほど際立った飲酒の文化を持つ。",
          zh:"四大島中最小的一個，被一道山脈切成兩半：瀨戶內海側乾燥、日照充足、氣候溫和；太平洋側則承受颱風與全日本數一數二的豪雨。四個縣，加起來不到六十家酒藏，而其中之一——高知——擁有一種鮮明到自成語彙、自成酒器的飲酒文化。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Tokushima", ja:"徳島", zh:"德島" }, jp:"徳島県",
            v:{ en:"Rice first, sake second", ja:"まず米、次に酒", zh:"先有米，後有酒" },
            d:{ en:"Tokushima's larger contribution to sake is agricultural: the Yoshino river basin grows Yamada Nishiki in quantity, sold as Awa Yamada Nishiki, and much of it leaves the prefecture. What is brewed at home is small in volume and unusually varied — Miyoshikiku is one of the most deliberately unruly houses in Japan, making sweet, sour, high-aroma, sometimes deeply strange sake that a competition judge would fail and a wine drinker often loves; Narutotai bottles a nama genshu with a bottle-cap crown seal, sold as if it were beer. The prefecture also grows sudachi, whose juice in a chilled cup of dry sake is a local habit worth copying.",
              ja:"徳島の酒への大きな寄与は農のものである。吉野川の流域は山田錦を量産し、阿波山田錦として売られ、その多くは県を出る。地元で醸されるものは量として小さく、異例に多様である。三芳菊は日本で最も意図して行儀の悪い家の一つであり、甘く、酸っぱく、香り高く、時に深く奇妙な酒を造る。鑑評会の審査員なら落とし、葡萄酒の飲み手はしばしば愛する酒である。鳴門鯛は王冠で栓をした生原酒を、麦酒のごとくに瓶詰めする。県はまた酢橘を育てる。冷えた辛口の杯にその汁を搾るのは、真似る値打ちのある土地の習いである。",
              zh:"德島對清酒更大的貢獻在於農業：吉野川流域大量種植山田錦，以「阿波山田錦」之名出售，其中多數運出縣外。在地釀造的量小，卻異常多樣——三芳菊是日本最刻意不守規矩的酒藏之一，釀出甜的、酸的、高香的、有時深深怪異的酒，鑑評會的評審會判它不及格，而葡萄酒飲者往往深愛；鳴門鯛把生原酒以王冠瓶蓋封裝出售，彷彿那是啤酒。本縣也種植酢橘，把它的汁擠進一杯冰涼的辛口酒裡，是值得模仿的地方習慣。" } },
          { k:{ en:"Kagawa", ja:"香川", zh:"香川" }, jp:"香川県",
            v:{ en:"The shrine and the noodle", ja:"社と麺", zh:"神社與麵" },
            d:{ en:"Japan's smallest prefecture, and the driest — reservoirs everywhere, because rain is scarce. Its brewing sits under Konpira, the great sailors' shrine at Kotohira, where pilgrims have been buying sake for four hundred years; Kinryō still brews at the foot of the steps and keeps a museum in its old brewhouse. Nearby, Marukin's Yorokobi Gaijin is the opposite proposition: small, high-acid, often aged, sold through a handful of shops, and one of the cult names of the ji-zake era. The prefectural rice is Ōseto, with the newer Sanuki Yoimai beside it; the food to drink with is udon, and the local answer is something dry and light enough not to argue with broth.",
              ja:"日本で最も小さく、最も乾いた県である。雨が乏しいゆえに溜池が至る所にある。その酒造りは、琴平の海の民の大社、金刀比羅宮の下に座す。参る者が四百年にわたり酒を買ってきた場所である。金陵は今も石段の麓で醸し、古い蔵に資料館を置く。近くの丸尾の悦凱陣は逆の提案である。小さく、酸が高く、しばしば熟成し、数えるほどの店を通して売られ、地酒の時代の信徒を持つ名の一つである。県の米はオオセトであり、その傍らに新しいさぬきよいまいがある。共に飲むべき食は饂飩であり、土地の答えは出汁と争わぬほど辛く軽いものである。",
              zh:"日本最小的縣，也是最乾旱的——到處都是水庫，因為雨水稀少。它的釀造座落在琴平的金刀比羅宮之下，那是航海者的大神社，四百年來參拜者一直在此買酒；金陵至今仍在石階腳下釀造，並在舊釀造場設有資料館。附近丸尾的悅凱陣則是相反的提案：規模小、酸度高、常經熟成、僅透過少數幾家酒鋪販售，是地酒時代的信徒級名字之一。縣產米為 Ōseto，旁邊還有較新的讚岐好米；該搭配的食物是烏龍麵，而在地的答案是一款辛而輕、不會和高湯爭吵的酒。" } },
          { k:{ en:"Ehime", ja:"愛媛", zh:"愛媛" }, jp:"愛媛県",
            v:{ en:"Two coasts, two waters", ja:"二つの海、二つの水", zh:"兩片海，兩種水" },
            d:{ en:"Ehime faces the calm Inland Sea in the north and the open Uwa Sea in the west, and its sake divides roughly the same way: gentler and rounder around Matsuyama, firmer and drier towards the Nanyo coast, with the granite water off Mount Ishizuchi — the highest peak in western Japan — feeding several of the best-regarded houses. Matsuyama Mii was the workhorse rice for decades; Shizuku-hime is the modern prefectural variety selected from it. Names to know: Ishizuchi, Umenishiki, Kagiya, Kawakame, Yamatan Masamune. It is a seafood prefecture, and the sake is built accordingly.",
              ja:"愛媛は北に穏やかな瀬戸内海、西に開けた宇和海を向き、その酒もおおよそ同じように分かれる。松山のあたりはより優しく丸く、南予の海に向かうにつれて堅く辛くなる。西日本の最高峰、石鎚山の花崗岩の水が、最も評価される家のいくつかを養う。松山三井は数十年にわたり働き者の米であった。しずく媛はそこから選ばれた現代の県の品種である。知っておく名は、石鎚、梅錦、賀儀屋、川亀、山丹正宗。海の幸の県であり、酒はそれに応じて造られる。",
              zh:"愛媛北面平靜的瀨戶內海、西臨開闊的宇和海，其酒也大致依此分野：松山一帶更柔和圓潤，往南予海岸則更堅實、更辛口；西日本最高峰石鎚山的花崗岩水質，滋養了數家最受推崇的酒藏。松山三井數十年來一直是主力米種；「雫媛」則是由它選育出的現代縣產品種。值得認識的名字：石鎚、梅錦、賀儀屋、川龜、山丹正宗。這是一個海產之縣，而酒也依此而造。" } },
          { k:{ en:"Kōchi", ja:"高知", zh:"高知" }, jp:"高知県",
            v:{ en:"The drinking prefecture", ja:"飲む県", zh:"喝酒的縣" },
            d:{ en:"Kōchi drinks more, and more publicly, than anywhere else in Japan, and its sake was built for that: dry, light-bodied, low in residual sugar, made to be poured repeatedly across a long table of raw and seared bonito. The style has a name — <em>tanrei karakuchi</em> in its southern form — and a set of customs and vessels to go with it. Then in 1993 the prefectural laboratory released two yeasts that pointed in exactly the opposite direction, and the prefecture turned out to be able to hold both.",
              ja:"高知は日本のどこよりも多く、そしてより人前で飲む。その酒はそのために造られた。辛く、軽く、糖の残りが少なく、生と炙りの鰹の並ぶ長い卓を越えて何度も注がれるためのものである。この型には名があり——その南の形における淡麗辛口である——それに伴う習いと器の一式がある。やがて平成五年（1993）、県の研究所が正反対を指す二つの酵母を世に出し、県はその双方を抱えうることが明らかになった。",
              zh:"高知喝得比日本任何地方都多，也更公開，而它的酒正是為此而造：辛口、酒體輕、殘糖低，為的是在一張擺滿生鰹與炙燒鰹魚的長桌上被反覆斟出。這種風格有名字——其南方型態即「淡麗辛口」——並帶著一整套相應的習俗與酒器。然後在一九九三年，縣立研究所推出了兩種指向完全相反方向的酵母，而事實證明，這個縣能夠同時容納兩者。" } }
        ] },
        { t:"h3", text:{ en:"Kōchi in detail", ja:"高知を詳しく", zh:"高知細看" } },
        { t:"defs", items:[
          { term:{ en:"The cups you cannot put down", ja:"置けない杯", zh:"放不下的杯子" }, jp:"可杯・べく杯", romaji:"bekuhai",
            def:{ en:"A Kōchi drinking game uses a set of cups with no foot — one shaped like a Tengu mask with a long nose, one like an <em>okame</em> face, one a hyōtan gourd — which cannot be set down until they are empty. A spinning top is thrown; where it points decides which cup you take and therefore how much you must drink. The custom is old, still practised at banquets, and is the clearest illustration anywhere in Japan of sake as a social machine rather than a beverage.",
              ja:"高知の酒の遊びは、底のない杯の一式を用いる。長い鼻の天狗の面のもの、おかめの顔のもの、瓢箪のものであり、空にするまで置くことができない。独楽を回し、指す先がどの杯を取るか、したがってどれだけ飲まねばならぬかを決める。古い習いであり、今も宴で行われ、日本のどこにおいてよりも明快に、酒が飲み物ではなく社交の機械であることを示す。",
              zh:"高知的一種飲酒遊戲使用一組沒有底座的杯子——一只做成長鼻天狗面具狀、一只做成阿龜臉、一只是葫蘆形——在喝乾之前無法放下。轉動陀螺，它所指的方向決定你拿哪一只杯、因而決定你必須喝多少。這習俗古老，至今仍在宴席上進行，也是全日本最清楚的一個例證：酒是一部社交的機器，而不只是一種飲料。" } },
          { term:{ en:"CEL-19 and CEL-24", ja:"CEL-19とCEL-24", zh:"CEL-19 與 CEL-24" }, jp:"高知酵母", romaji:"Kōchi kōbo",
            def:{ en:"Both released by the Kōchi Prefectural Industrial Technology Center in 1993. CEL-19 gives crisp apple-like acidity; CEL-24 produces roughly twice the fruit ester load of its sibling, heavy on ethyl caproate — pineapple and melon — together with a great deal of malic acid, and it ferments so weakly that the finished sake often lands at 13 to 14 percent alcohol rather than 15 or 16. The result is sweet-sour, low-strength and instantly recognisable, and it made the driest prefecture in Japan the source of one of its most fruit-forward styles. Kameizumi's CEL-24 bottling is the reference example.",
              ja:"いずれも平成五年（1993）に高知県工業技術センターが世に出した。CEL-19は林檎のような切れのある酸を与える。CEL-24は兄弟株のおよそ二倍の果実のエステルを生み、カプロン酸エチル——鳳梨と甜瓜——に富み、加えて林檎酸を多く生じ、発酵が弱いために出来上がりはしばしば十五度や十六度でなく十三度から十四度に落ち着く。結果は甘酸っぱく、度数が低く、一口で分かる。そして日本で最も辛口の県を、最も果実に寄った型の一つの源とした。亀泉のCEL-24の酒がその基準となる例である。",
              zh:"兩者都由高知縣工業技術中心於一九九三年推出。CEL-19 帶來爽脆的蘋果般酸度；CEL-24 產生的果實酯約為其姊妹株的兩倍，富含己酸乙酯——鳳梨與哈密瓜——並同時生成大量蘋果酸，且發酵力弱，使成品往往落在酒精度十三至十四度而非十五、十六度。結果是甜酸、低度數、一入口即可辨識，並讓日本最辛口的縣成為最偏果實風格之一的源頭。龜泉的 CEL-24 酒款是其標準範例。" } },
          { term:{ en:"The Kōchi method", ja:"高知方式", zh:"高知方式" }, jp:"高知方式", romaji:"Kōchi hōshiki",
            def:{ en:"Kōchi's eighteen or so breweries work with the prefectural laboratory and with each other to an unusual degree — shared yeast development, shared analysis, shared training, and a public willingness to say so. In an industry where technique was historically a guild secret, a small prefecture treating its breweries as a single research community is a model that other prefectures have since copied. The prefectural sake rice, Gin no Yume, came out of the same arrangement.",
              ja:"高知の十八ほどの蔵は、県の研究所と、また互いと、異例の度合いで働く。酵母の開発を分かち、分析を分かち、教育を分かち、そしてそう言うことを憚らない。技が歴史的に組合の秘密であった業界において、小さな県が自らの蔵を一つの研究の共同体として扱うことは、他の県がその後写してきた型である。県の酒米、吟の夢も同じ仕組みから出た。",
              zh:"高知的十八家左右的酒藏，與縣立研究所、也彼此之間，以異常的程度協作——共同開發酵母、共享分析、共同培訓，並且公開樂於承認這一點。在一個技術歷來屬於同業公會祕密的產業裡，一個小縣把自己的酒藏當成單一研究共同體來對待，是一種其後被其他縣份仿效的模式。縣產酒米「吟之夢」也出自同一套安排。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"高知の蔵", romaji:"Kōchi no kura",
            def:{ en:"Tosatsuru, the largest and the definition of the dry style; Suigei — the name means drunken whale, after a nineteenth-century lord — built for eating; Kameizumi for the CEL-24 school; Tsukasa Botan, whose Funaguchi and whose long association with the writer Shiba Ryōtarō made it the literary bottle; Bijōfu and Bunkajin among the smaller houses.",
              ja:"最も大きく、辛口の型の定義である土佐鶴。十九世紀の殿にちなむ名——酔うた鯨——を持ち、食のために造られた酔鯨。CEL-24の学派の亀泉。船口と、司馬遼太郎との長い縁が文学の瓶たらしめた司牡丹。より小さな家からは美丈夫と文佳人。",
              zh:"土佐鶴，規模最大，也是辛口風格的定義；醉鯨——名字意為喝醉的鯨魚，取自一位十九世紀藩主——為佐餐而造；龜泉，CEL-24 一派；司牡丹，其槽口酒與同司馬遼太郎的長久淵源，使它成為文學的酒瓶；較小的酒藏中則有美丈夫與文佳人。" } }
        ] }
      ] },

    { t:"section", id:"read",
      title:{ en:"How to read this region", ja:"この地方の読み方", zh:"如何閱讀這個地區" }, jp:"読み方",
      body:[
        { t:"compare", cols:2, items:[
          { title:{ en:"The Inland Sea side", ja:"瀬戸内の側", zh:"瀨戶內側" }, jp:"山陽・北四国",
            text:{ en:"Mild, sunny, low rainfall, soft water, and a cuisine of small white fish, citrus and noodles. The sake is generally lighter and cleaner, and Miura's soft-water framework is the shared technical inheritance. Hiroshima, Okayama, Kagawa, Ehime and the Yamaguchi coast all belong here.",
              ja:"穏やかで、日当たりよく、雨が少なく、水は軟らかく、そして小さな白身の魚と柑橘と麺の食がある。酒はおおむねより軽く清らかであり、三浦の軟水の枠組みが共有された技術の遺産である。広島、岡山、香川、愛媛、そして山口の海沿いはみなここに属する。",
              zh:"溫和、日照充足、雨量少、水質軟，並有一套以小型白肉魚、柑橘與麵食構成的飲食。酒普遍更輕、更乾淨，而三浦的軟水框架是共有的技術遺產。廣島、岡山、香川、愛媛與山口沿海都屬於此處。" } },
          { title:{ en:"The outer coasts", ja:"外の海岸", zh:"外側海岸" }, jp:"山陰・南四国",
            text:{ en:"The Sea of Japan in the north, the open Pacific in the south: colder or wetter, more weather, older customs, smaller markets. Shimane and Tottori keep sweeter, denser, more archaic sake and a mythology to match; Kōchi keeps the driest sake in the country and the loudest table. Both are places where the local drinking culture, rather than the export market, still sets the style.",
              ja:"北は日本海、南は開けた太平洋である。より寒く、あるいはより濡れ、天候が多く、習いが古く、市場が小さい。島根と鳥取はより甘く、より密で、より古風な酒と、それに見合う神話を保つ。高知は国で最も辛い酒と最も賑やかな卓を保つ。いずれも、輸出の市場ではなく土地の飲酒の文化が今なお型を定める場所である。",
              zh:"北面日本海，南臨開闊的太平洋：更冷或更濕、天氣更多、習俗更古老、市場更小。島根與鳥取保有更甜、更密、更古風的酒，以及與之相稱的神話；高知則保有全國最辛口的酒與最喧鬧的餐桌。兩者都是「至今仍由在地飲酒文化、而非出口市場決定風格」的地方。" } }
        ] },
        { t:"tiny", text:{
          en:"Continue west to Kyūshū, or return to the regional index.",
          ja:"さらに西へ進んで九州へ、あるいは産地の一覧へ戻る。",
          zh:"繼續向西前往九州，或返回產地一覽。" } }
      ] },

    { t:"related", items:[
      { href:"regions.html", why:{ en:"The same prefectures in the national index.", ja:"同じ県を、全国の索引のなかで。", zh:"同樣這些縣，放在全國索引裡。" } },
      { href:"people.html", why:{ en:"Miura Senzaburō, and the others who changed the craft.", ja:"三浦仙三郎と、技を変えた他の人々。", zh:"三浦仙三郎，以及其他改變了這門技藝的人。" } },
      { href:"world.html", why:{ en:"Why every brewery outside Japan is downstream of Hiroshima.", ja:"日本の外のあらゆる蔵が広島の下流にある理由。", zh:"為什麼日本以外的每一家酒藏，都在廣島的下游。" } },
      { href:"value.html", why:{ en:"Yamaguchi, and one brewery's effect on a whole prefecture.", ja:"山口と、一つの蔵が県全体に及ぼした効き。", zh:"山口，以及一家酒藏對整個縣的影響。" } }
    ] }
  ]
};


/* ---- --------------------------------------- region-kyushu */
SAKE.pages["region-kyushu"] = {
  kicker: { en: "Place · 08", ja: "産地 · 08", zh: "產地 · 08" },
  title:  { en: "Kyūshū & Okinawa", ja: "九州と沖縄", zh: "九州與沖繩" },
  jp: "九州・沖縄",
  lede: {
    en: "The one part of Japan where sake is the minority drink. Kyūshū is shochu country — barley in the north, rice in the centre, sweet potato in the south, and in Okinawa a distilled spirit made with a different species of mould entirely. And yet the yeast that made modern ginjō possible was isolated in Kumamoto, the sweetest and most distinctive regional style in Japan is Saga's, and a prefecture that had not brewed sake for four decades started again in the 2010s. The exception proves more than the rule does.",
    ja: "日本で酒が少数派の飲み物である唯一の一帯である。九州は焼酎の国であり、北は麦、中は米、南は甘藷、そして沖縄ではまったく別の種の黴を用いた蒸留酒が造られる。それでいて、現代の吟醸を可能にした酵母は熊本で分離され、日本で最も甘く最も際立った地方の型は佐賀のものであり、四十年にわたり酒を醸さなかった県が二〇一〇年代に再び醸し始めた。例外は規則よりも多くを証す。",
    zh: "這是日本境內唯一一塊清酒屬於少數飲料的地帶。九州是燒酎之國——北部用麥、中部用米、南部用甘藷；而在沖繩，蒸餾酒是用一種完全不同的黴菌所製。然而，使現代吟釀成為可能的那株酵母是在熊本分離出來的；日本最甜、最具辨識度的地方風格屬於佐賀；而一個四十年不曾釀造清酒的縣，在二〇一〇年代重新開始釀酒。例外所證明的，比規則更多。"
  },
  body: [

    { t:"section", id:"why-shochu",
      title:{ en:"Why the south distils", ja:"南が蒸留する理由", zh:"南方為何蒸餾" }, jp:"焼酎の国",
      body:[
        { t:"figure",
          caption:{
            en:"The most useful map of Japanese fermentation is not a map at all but a line between two moulds. North and east of it, a mould that makes very little acid, and a mash that can only be held safely by cold; south and west of it, a mould that floods the mash with citric acid and holds spoilage off by acidity alone, which is exactly what a warm-climate fermentation needs. The elegant part is that the same citric acid a shōchū maker depends on is precisely what a sake drinker would call a fault. Four conditions push the south this way and they compound; none of them is arbitrary.",
            ja:"日本の醸しについて最も役に立つ地図は、地図ではなく、二つの麹のあいだの一本の線である。その北と東には、酸をほとんど作らぬ麹と、寒さによってしか安全に保てぬ醪がある。南と西には、醪をクエン酸で満たし、酸だけで腐敗を退ける麹がある。暑い土地の発酵が必要とするのは、まさにそれである。優美なのは、焼酎の造り手が頼るそのクエン酸こそ、日本酒の飲み手であれば欠点と呼ぶものだという点である。四つの条件が南をこちらへ押し、そしてそれらは重なり合う。どれ一つとして恣意ではない。",
            zh:"關於日本發酵，最有用的地圖其實不是地圖，而是兩種麴之間的一條線。線的北與東，是一種幾乎不產酸的黴菌，以及只能靠低溫才能安全維持的醪；線的南與西，則是一種以檸檬酸淹沒醪、僅憑酸度就擋住腐敗的黴菌——而這正是溫熱氣候的發酵所需要的。精妙之處在於：燒酎製造者所倚賴的那份檸檬酸，恰恰是清酒飲者會稱之為缺陷的東西。有四項條件把南方推向這一邊，而且它們彼此疊加；沒有一項是偶然。" },
          svg: function (lang, L) {
            var W = 760, H = 402;
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
            var cjk = (lang !== "en"), s = '';
            s += '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var PY = 58, PH = 176;
            s += '<text x="380" y="42" text-anchor="middle" font-size="10" letter-spacing="1.2" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "麹の線" : lang === "zh" ? "麴的分界線" : "THE MOULD LINE") + '</text>';
            s += '<line x1="380" y1="' + (PY - 8) + '" x2="380" y2="' + (PY + PH + 8) + '" stroke="#A08F73" stroke-dasharray="6 4"/>';
            var sides = [
              { x:30, w:332, f:"#EDE5D2", jp:"黄麹",
                sci:{ en:"Aspergillus oryzae", ja:"ニホンコウジカビ", zh:"米麴菌" },
                where:{ en:"north and east of the line", ja:"線の北と東", zh:"線的北方與東方" },
                a:{ en:"makes very little acid", ja:"酸をほとんど作らない", zh:"幾乎不產酸" },
                b:{ en:"so the mash can only be held safely by cold — twenty to forty days of it", ja:"ゆえに醪は寒さによってしか安全に保てない。二十日から四十日の寒さである", zh:"因此醪只能靠低溫才能安全維持——而且要維持二十到四十天" },
                p:"清酒", pn:{ en:"brewed, and drunk as it is", ja:"醸して、そのまま飲む", zh:"釀成，並就這樣喝" } },
              { x:398, w:332, f:"#E4EAEC", jp:"黒麹・白麹",
                sci:{ en:"A. luchuensis and its white mutant", ja:"アワモリコウジカビと白色変異株", zh:"泡盛麴菌及其白色變異株" },
                where:{ en:"south and west of the line", ja:"線の南と西", zh:"線的南方與西方" },
                a:{ en:"floods the mash with citric acid", ja:"醪をクエン酸で満たす", zh:"以檸檬酸淹沒整槽醪" },
                b:{ en:"so spoilage is held off by acidity alone, and the warmth stops mattering", ja:"ゆえに腐敗は酸だけで退けられ、暑さは問題でなくなる", zh:"因此僅靠酸度就能擋住腐敗，溫熱也就不再是問題" },
                p:"焼酎・泡盛", pn:{ en:"distilled", ja:"蒸留する", zh:"蒸餾" } }
            ];
            var i, k;
            for (i = 0; i < sides.length; i++) {
              var v = sides[i];
              s += '<rect x="' + v.x + '" y="' + PY + '" width="' + v.w + '" height="' + PH + '" fill="' + v.f + '" stroke="#DED8CB"/>';
              s += '<text x="' + (v.x + 18) + '" y="' + (PY + 28) + '" font-size="17" fill="#201E1B">' + v.jp + '</text>';
              s += '<text x="' + (v.x + v.w - 18) + '" y="' + (PY + 28) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(v.where) + '</text>';
              s += '<text x="' + (v.x + 18) + '" y="' + (PY + 44) + '" font-size="9.5" font-style="italic" fill="#8B857C">' + L(v.sci) + '</text>';
              s += '<line x1="' + v.x + '" y1="' + (PY + 56) + '" x2="' + (v.x + v.w) + '" y2="' + (PY + 56) + '" stroke="#DED8CB"/>';
              s += '<text x="' + (v.x + 18) + '" y="' + (PY + 78) + '" font-size="12" fill="#201E1B">' + L(v.a) + '</text>';
              var bl = wrap(L(v.b), cjk, cjk ? 24 : 48);
              for (k = 0; k < bl.length && k < 3; k++) {
                s += '<text x="' + (v.x + 18) + '" y="' + (PY + 98 + k * 14) + '" font-size="9.5" fill="#8B857C">' + bl[k] + '</text>';
              }
              s += '<rect x="' + (v.x + 18) + '" y="' + (PY + 138) + '" width="' + (v.w - 36) + '" height="30" fill="#FBFAF7" stroke="#DED8CB"/>';
              s += '<text x="' + (v.x + 30) + '" y="' + (PY + 158) + '" font-size="14" fill="#201E1B">' + v.p + '</text>';
              s += '<text x="' + (v.x + v.w - 30) + '" y="' + (PY + 158) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + L(v.pn) + '</text>';
            }
            /* four conditions */
            var CY = PY + PH + 34, conds = [
              { jp:"熱", t:{ en:"a sake mash spoils in warmth; a southern winter is not cold enough", ja:"醪は暑さで腐る。南の冬は、十分に長く十分に寒くはない", zh:"醪在溫暖中會壞；南方的冬天不夠冷、也不夠久" } },
              { jp:"麹", t:{ en:"a mould that supplies acid instead of asking for cold", ja:"寒さを求める代わりに酸を供する麹", zh:"一種以「供酸」取代「要冷」的黴菌" } },
              { jp:"作物", t:{ en:"sweet potato from 1705, and barley — neither brews, both distil", ja:"一七〇五年頃の甘藷、そして麦。醸せぬが、蒸留はできる", zh:"約一七〇五年的番薯，以及大麥：都釀不成，卻都很適合蒸餾" } },
              { jp:"交易", t:{ en:"distilling came from the south; the oldest trace is 1559", ja:"蒸留は南から来た。最古の記録は一五五九年、鹿児島の落書きである", zh:"蒸餾自南方傳入；最早的文字痕跡是一五五九年鹿兒島的塗鴉" } }
            ];
            s += '<text x="30" y="' + (CY - 10) + '" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "重なり合う四つの条件" : lang === "zh" ? "四項彼此疊加的條件" : "FOUR CONDITIONS, AND THEY COMPOUND") + '</text>';
            for (i = 0; i < conds.length; i++) {
              var cx = 30 + i * 176;
              s += '<rect x="' + cx + '" y="' + CY + '" width="164" height="76" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (cx + 12) + '" y="' + (CY + 22) + '" font-size="14" fill="#201E1B">' + conds[i].jp + '</text>';
              var cl = wrap(L(conds[i].t), cjk, cjk ? 13 : 26);
              for (k = 0; k < cl.length && k < 3; k++) {
                s += '<text x="' + (cx + 12) + '" y="' + (CY + 38 + k * 12.5) + '" font-size="8.5" fill="#8B857C">' + cl[k] + '</text>';
              }
            }
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "クエン酸は、焼酎の造り手が頼るものであり、日本酒の飲み手が欠点と呼ぶものである。同じ一つの分子が、線のどちら側かで名を変える。"
                  : lang === "zh" ? "檸檬酸是燒酎製造者所倚賴的東西，也是清酒飲者會稱為缺陷的東西：同一個分子，在線的兩側換了名字。"
                  : "Citric acid is what a shōchū maker depends on and what a sake drinker would call a fault — one molecule, two names.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Nothing about this is arbitrary. Four conditions push southern Japan away from brewing and towards distilling, and they compound.",
          ja:"ここに恣意的なものは何もない。四つの条件が南日本を醸造から遠ざけ蒸留へ向かわせ、それらは重なり合う。",
          zh:"這裡沒有任何一點是任意的。四項條件把南日本從釀造推向蒸餾，而它們彼此疊加。" } },
        { t:"ol", items:[
          { en:"<strong>Heat.</strong> A sake mash spoils in warmth. Before refrigeration, a southern winter was simply not cold enough for long enough to run a twenty-to-forty-day fermentation safely.",
            ja:"<strong>暑さ。</strong>醪は暖かさの中で腐る。冷却の技の前、南の冬は二十日から四十日の発酵を安全に営むには、単純に十分に寒くもなく、十分に長くもなかった。",
            zh:"<strong>熱。</strong>醪在溫暖中會腐敗。在冷藏技術之前，南方的冬天根本不夠冷、也不夠長，無法安全地進行二十到四十天的發酵。" },
          { en:"<strong>A different mould.</strong> The south has long used black kōji, <em>Aspergillus luchuensis</em>, which floods the mash with citric acid and holds spoilage bacteria off by acidity alone. That is exactly what a warm-climate fermentation needs — and citric acid is also exactly what a sake drinker does not want in the glass, so the mash it protects is one destined for a still.",
            ja:"<strong>別の黴。</strong>南は長く黒麹、<em>アスペルギルス・ルチュエンシス</em>を用いてきた。醪を枸櫞酸で満たし、酸のみで腐敗の細菌を退ける黴である。それは暖かい気候の発酵が必要とするものそのものであり——そして枸櫞酸は、酒の飲み手が杯の中に望まぬものそのものでもある。ゆえにそれが守る醪は、蒸留器へ向かう定めのものである。",
            zh:"<strong>不同的黴菌。</strong>南方長期使用黑麴，即<em>琉球麴菌</em>，它讓醪充滿檸檬酸，僅憑酸度就把腐敗細菌擋在外面。這正是溫暖氣候的發酵所需要的——而檸檬酸也正是清酒飲者不希望出現在杯中的東西。因此，被它保護的那缸醪，命定要送進蒸餾器。" },
          { en:"<strong>The crop.</strong> Sweet potato arrived in Satsuma around 1705 and grows where rice struggles, on volcanic ash soils that hold little water. Barley does the same in the north. Neither can be brewed into a clear rice wine; both distil beautifully.",
            ja:"<strong>作物。</strong>甘藷は宝永二年（1705）ごろ薩摩に伝わり、米が難儀する場所、水を保たぬ火山灰の土に育つ。北では麦が同じことをする。いずれも澄んだ米の酒に醸すことはできず、いずれも見事に蒸留される。",
            zh:"<strong>作物。</strong>甘藷約在一七〇五年傳入薩摩，能生長在稻米難以立足的地方——保水力差的火山灰土壤。麥在北部扮演同樣的角色。兩者都無法釀成清澈的米酒，兩者都極適合蒸餾。" },
          { en:"<strong>Trade.</strong> Distilling reached Japan from the south — through the Ryukyu kingdom's trade with Siam and the Chinese coast — and Kyūshū had it first. The oldest surviving written reference to shochu in Japan is graffiti left by two carpenters on a shrine in Kagoshima in 1559, complaining that the priest was too stingy to give them any.",
            ja:"<strong>商い。</strong>蒸留は南から日本へ届いた。琉球王国の暹羅や中国沿岸との商いを通じてであり、九州が最初にそれを得た。日本における焼酎への現存する最も古い記述は、永禄二年（1559）に鹿児島の社に二人の大工が残した落書きであり、神主が吝嗇で一杯もくれなかったと零している。",
            zh:"<strong>貿易。</strong>蒸餾技術是從南方傳入日本的——經由琉球王國與暹羅及中國沿海的貿易——而九州最先取得它。日本現存最早提及燒酎的文字，是一五五九年兩名木匠留在鹿兒島某神社上的塗鴉，抱怨神主太吝嗇，一杯也不肯給他們。" }
        ] },
        { t:"note", title:{ en:"Two moulds, one country", ja:"二つの黴、一つの国", zh:"兩種黴，一個國家" }, text:{
          en:"The mould line is the single most useful map of Japanese fermentation. North and east of it, <em>Aspergillus oryzae</em>, yellow kōji, low acid, brewed and drunk as sake. South and west of it, <em>A. luchuensis</em> and its white mutant <em>A. luchuensis</em> mut. <em>kawachii</em>, high citric acid, fermented once and distilled. Everything else in this chapter follows from that line.",
          ja:"黴の線は、日本の醸しの最も有用な一枚の地図である。その北と東では、黄麹の<em>アスペルギルス・オリゼー</em>が、酸低く、酒として醸され飲まれる。その南と西では、<em>ルチュエンシス</em>とその白い変異株である河内菌が、枸櫞酸高く、一度発酵させて蒸留される。この章の他のすべては、その線から導かれる。",
          zh:"黴菌的分界線，是理解日本發酵最有用的一張地圖。線的北方與東方，是黃麴菌<em>米麴菌</em>，酸度低，被釀成清酒並飲用。線的南方與西方，是<em>琉球麴菌</em>及其白色變異株河內菌，檸檬酸高，發酵一次後即行蒸餾。本章其餘的一切，都由這條線推導而出。" } }
      ] },

    { t:"section", id:"kumamoto",
      title:{ en:"Kumamoto", ja:"熊本", zh:"熊本" }, jp:"熊本県",
      body:[
        { t:"p", text:{
          en:"A prefecture with very few sake breweries, which nevertheless supplied the single most consequential organism in modern Japanese brewing. If you have ever drunk a ginjō with a clean, restrained, apple-and-pear aroma and low acidity, you have drunk the descendant of a yeast that was pulled out of one tank in Kumamoto.",
          ja:"清酒の蔵をきわめて少ししか持たぬ県でありながら、近代日本の酒造りにおいて最も帰結の大きい一つの生き物を供した。清らかで控えめな林檎と梨の香りと低い酸を持つ吟醸を飲んだことがあるなら、熊本の一つの槽から取り出された酵母の末裔を飲んだことになる。",
          zh:"這是一個清酒酒藏極少的縣，卻供應了近代日本釀造中影響最深遠的那一個生物體。如果你曾喝過一杯帶著乾淨、內斂的蘋果與梨香、酸度偏低的吟釀，那你喝到的就是從熊本某一槽中取出的那株酵母的後裔。" } },
        { t:"timeline", items:[
          { year:"1909", era:"明治42", eraJp:"明治四十二年", title:{ en:"A laboratory owned by its brewers", ja:"造り手の持つ実験室", zh:"由釀造者共同持有的實驗室" }, jp:"熊本県酒造研究所",
            text:{ en:"Breweries across the prefecture put up the money to found a shared research institute — not a government laboratory but a co-operative one, established because Kumamoto's sake at the time was poor and its brewers knew it. It incorporated as a company in 1918 and built the brewhouse that still makes its sake, Kōro, in 1922.",
              ja:"県内の蔵元が資を出し合い、共有の研究所を立てた。官の実験室ではなく協同のものである。当時の熊本の酒が拙く、造り手たち自身がそれを知っていたがゆえに設けられた。大正七年（1918）に株式会社となり、今も自らの酒、香露を造る蔵を大正十一年（1922）に建てた。",
              zh:"全縣的酒藏共同出資，創立了一所共有的研究機構——不是官方實驗室，而是合作性質的；之所以設立，是因為當時熊本的酒不好，而釀造者自己也知道。它於一九一八年改組為株式會社，並於一九二二年建起至今仍在釀造其酒「香露」的釀造場。" } },
          { year:"1919", era:"大正8", eraJp:"大正八年", title:{ en:"Nojiro Kin'ichi arrives", ja:"野白金一が来る", zh:"野白金一到來" }, jp:"初代技師長",
            text:{ en:"A Tottori man who had been giving technical guidance to breweries from the Kumamoto tax bureau became the institute's first chief engineer. He is remembered for the Nojiro skylight — a ventilation design for the kōji room that let brewers control humidity and temperature far more precisely than the old sealed muro — and for a body of practical work on kōji making that the whole industry absorbed.",
              ja:"熊本の税務監督局から蔵に技術の指導を与えていた鳥取の人が、研究所の初代技師長となった。彼は野白式天窓——古い閉ざされた室よりはるかに精密に湿度と温度を制しうる麹室の換気の設計——と、業界全体が吸収した麹造りの実際の仕事の集積によって記憶されている。",
              zh:"一位來自鳥取、原本在熊本稅務監督局向酒藏提供技術指導的人，成為該研究所的首任技師長。他因「野白式天窗」——一種讓釀造者能比舊式密閉麴室精確得多地控制濕度與溫度的麴室通風設計——以及一整套被全業界吸收的製麴實務工作而被記住。" } },
          { year:"1952", era:"昭和27", eraJp:"昭和二十七年", title:{ en:"The yeast is isolated", ja:"酵母が分離される", zh:"酵母被分離" }, jp:"熊本酵母",
            text:{ en:"The institute isolated a single strain from its own house yeast population. Its distinguishing properties were mild acid production and a clean, floral, non-aggressive aroma, together with reliable fermentation vigour — the combination that lets a brewer make the sake they intended rather than the sake the yeast wanted.",
              ja:"研究所は自らの蔵付きの酵母の群れから一つの株を分離した。その際立った性質は、穏やかな酸の生成と、清らかで花のような、押しつけがましくない香り、そして頼りうる発酵の力であった。造り手が、酵母の望む酒ではなく、意図した酒を造ることを可能にする組み合わせである。",
              zh:"研究所從自家藏內的酵母族群中分離出單一菌株。它的特出性質是酸生成溫和、香氣乾淨、帶花香且不具侵略性，同時發酵力可靠——正是這個組合，讓釀造者能釀出自己想要的酒，而不是酵母想要的酒。" } },
          { year:"1968", era:"昭和43", eraJp:"昭和四十三年", title:{ en:"Released to the country", ja:"国へ頒たれる", zh:"向全國頒布" }, jp:"きょうかい9号",
            text:{ en:"The Brewing Society of Japan adopted it as Association Yeast No. 9 and began national distribution. Within two decades it and its non-foaming variant were the backbone of competition brewing, and the ginjō boom of the 1980s ran on it. Every later aroma yeast is measured against what No. 9 does.",
              ja:"日本醸造協会がこれをきょうかい9号として採り、全国への頒布を始めた。二十年のうちに、これとその泡なしの変異株は鑑評会の酒造りの背骨となり、一九八〇年代の吟醸の高まりはこれの上を走った。のちのあらゆる香りの酵母は、9号のなすことに照らして測られる。",
              zh:"日本釀造協會將其採用為協會酵母九號，並開始向全國頒布。二十年之內，它與其不起泡變異株成為鑑評會釀造的骨幹，一九八〇年代的吟釀熱潮就跑在它之上。此後每一株香氣酵母，都要對照九號的表現來衡量。" } }
        ] },
        { t:"defs", items:[
          { term:{ en:"Kōro", ja:"香露", zh:"香露" }, jp:"香露", romaji:"Kōro",
            def:{ en:"The institute's own sake, and one of the odder objects in the industry: a brand made by a research body owned by its competitors. It is brewed in small quantity, is not easy to find outside Kumamoto, and is worth seeking out precisely because it is the reference sake for the yeast — a clean, quiet, slightly old-fashioned ginjō that shows what No. 9 does when nobody is trying to win anything with it.",
              ja:"研究所自身の酒であり、業界において奇妙な物の一つである。競争相手たちが所有する研究の組織が造る銘柄である。少量しか醸されず、熊本の外では容易に見つからず、まさにこの酵母の基準となる酒であるがゆえに探す値打ちがある。誰も何かに勝とうとしていないときに9号が何をなすかを示す、清らかで静かな、やや古風な吟醸である。",
              zh:"研究所自己的酒，也是業界較為奇特的存在之一：一個由「競爭者共同持有的研究機構」所釀造的品牌。它產量小，在熊本以外不易找到，而值得尋覓的理由正在於它是這株酵母的基準酒——一款乾淨、安靜、略帶舊派風味的吟釀，展示了在沒有人試圖用它去贏得什麼時，九號會做出什麼。" } },
          { term:{ en:"Names to know", ja:"知っておく名", zh:"值得認識的名字" }, jp:"熊本の蔵", romaji:"Kumamoto no kura",
            def:{ en:"Reizan, from the Aso caldera, on volcanic groundwater; Chiyonosono, an early and unbending advocate of junmai at a time when almost nobody was making it; Zuiyō, one of the oldest houses in the prefecture, which also makes shochu; Hanamurasaki. The 2016 Kumamoto earthquakes damaged several of them, and the recovery took years.",
              ja:"阿蘇の外輪山から、火山の地下水の上に立つ霊山。ほとんど誰も造っていなかった頃の純米の早く頑なな主唱者であった千代の園。県内で最も古い家の一つであり焼酎も造る瑞鷹。花紫。平成二十八年（2016）の熊本地震はそのいくつかを損ない、立ち直りには年を要した。",
              zh:"來自阿蘇火山口、立於火山地下水之上的靈山；千代之園，在幾乎沒有人釀純米的年代就早早而堅定地倡議純米；瑞鷹，縣內最古老的酒藏之一，同時也釀燒酎；花紫。二〇一六年的熊本地震損毀了其中數家，復原花了數年。" } }
        ] }
      ] },

{ t:"section", id:"saga",
      title:{ en:"Saga", ja:"佐賀", zh:"佐賀" }, jp:"佐賀県",
      body:[
        { t:"p", text:{
          en:"The sweetest regional style in Japan, and the least apologetic about it. While the rest of the country spent forty years chasing <em>tanrei karakuchi</em> — light and dry — Saga went on making sake with visible sugar, low-key acid and a thick, glycerol-ish texture, and then discovered that the world liked it.",
          ja:"日本で最も甘い地方の型であり、それについて最も弁解しない。国の他が四十年をかけて淡麗辛口を追ったあいだ、佐賀は目に見える糖と控えめな酸と、厚く滑らかな質感をもつ酒を造り続け、やがて世界がそれを好むことを知った。",
          zh:"日本最甜的地方風格，也是最不為此致歉的一種。當全國其餘部分花了四十年追逐「淡麗辛口」——輕盈而乾——佐賀持續釀造帶著明顯甜味、低調酸度與厚實近乎甘油質地的酒，然後才發現，世界喜歡這種酒。" } },
        { t:"defs", items:[
          { term:{ en:"Why sweet", ja:"なぜ甘いか", zh:"為何偏甜" }, jp:"甘口の理由", romaji:"amakuchi no riyū",
            def:{ en:"Three reinforcing reasons. The cooking is sweet — Kyūshū soy sauce and Saga's own dishes carry far more sugar than Kantō's, and a dry sake tastes sour beside them. The water off the Sefuri and Tara ranges is soft, which gives a rounder, slower fermentation. And the prefectural rice, Saga no Hana, dissolves readily in the mash, releasing glucose faster than the yeast consumes it. Style, cuisine and agronomy pointing the same way is what a regional identity actually looks like.",
              ja:"互いを支える三つの理由がある。食が甘い。九州の醤油と佐賀の料理は関東のそれよりはるかに多くの糖を負い、辛口の酒はその傍らでは酸っぱく感じられる。脊振と多良の山の水は軟らかく、より丸く遅い発酵を与える。そして県の米、さがの華は醪で容易に溶け、酵母が消費するより速く葡萄糖を放つ。酒質と食と農学が同じ方角を指すこと、それが地方の個性の実際の姿である。",
              zh:"三個彼此加強的理由。飲食偏甜——九州的醬油與佐賀的菜餚含糖量遠高於關東，辛口的酒擺在旁邊會顯得酸。脊振與多良山系的水質軟，帶來更圓潤、更緩慢的發酵。而縣產米「佐賀之華」在醪中容易溶解，釋出葡萄糖的速度快過酵母消耗的速度。酒質、飲食與農學指向同一個方向——這才是地方個性真正的樣子。" } },
          { term:{ en:"Hagakure yeasts", ja:"はがくれ酵母", zh:"葉隱酵母" }, jp:"佐賀はがくれ酵母", romaji:"Saga Hagakure kōbo",
            def:{ en:"The prefectural yeast family, named after the eighteenth-century Saga text <em>Hagakure</em>. Selected to give green-apple and melon aromatics while keeping the body and sweetness the region wants rather than the lean fermentation most competition yeasts produce. It is one of the clearest cases of a prefecture breeding a yeast to defend a taste rather than to win a medal.",
              ja:"県の酵母の一族であり、十八世紀の佐賀の書『葉隠』にちなむ。多くの鑑評会向けの酵母が生む痩せた発酵ではなく、この地方の望む厚みと甘みを保ちながら、青林檎と甜瓜の香りを与えるよう選ばれた。賞を取るためではなく味を守るために県が酵母を育てた、最も明快な例の一つである。",
              zh:"縣產酵母家族，以十八世紀佐賀的著作《葉隱》為名。其選育方向是在保有本地所要的酒體與甜味的前提下帶來青蘋果與哈密瓜的香氣，而非多數鑑評會酵母所產生的精瘦發酵。這是「一個縣為守住某種味道、而非為奪牌而育種酵母」最清楚的案例之一。" } },
          { term:{ en:"Kashima, 2011", ja:"鹿島、二〇一一年", zh:"鹿島，二〇一一年" }, jp:"鍋島", romaji:"Nabeshima",
            def:{ en:"Fukuchiyo Shuzō, a very small house in the town of Kashima, won Champion Sake at the International Wine Challenge in London in 2011 with a daiginjō under the Nabeshima name. The effect on a town whose brewing street had been contracting for decades was immediate and permanent: an annual brewery-opening weekend, a preserved townscape district, and a queue for allocations that has not gone away. It remains the clearest single demonstration that an international award can rewrite a small Japanese town's economy.",
              ja:"鹿島の町のごく小さな家である富久千代酒造が、平成二十三年（2011）、倫敦の国際葡萄酒品評会で鍋島の名の大吟醸によりチャンピオン・サケを得た。数十年にわたり縮んでいた酒蔵通りを持つ町への影響は、即座であり、そして永続した。年一度の蔵開きの週末、保存された町並みの地区、そして今も消えぬ配分の待ち行列である。国際の賞が日本の小さな町の経済を書き換えうることの、最も明快な一つの実証であり続けている。",
              zh:"鹿島鎮上一家極小的酒藏——富久千代酒造——於二〇一一年在倫敦的國際葡萄酒挑戰賽上，以「鍋島」之名的大吟釀奪得 Champion Sake。對一個酒藏街已萎縮數十年的小鎮而言，其效應立竿見影且持久：每年一度的酒藏開放週末、被保存下來的傳統街區，以及一條至今未曾消失的配額排隊人龍。它至今仍是「一個國際獎項可以改寫日本小鎮經濟」最清楚的單一實證。" } },
          { term:{ en:"GI Saga", ja:"GI佐賀", zh:"GI 佐賀" }, jp:"GI佐賀", romaji:"GI Saga",
            def:{ en:"Designated on 14 June 2021, the first sake geographical indication in Kyūshū and one of the earliest whole-prefecture designations anywhere. Given how coherent the local style already was, the GI documents an identity rather than inventing one. Names beyond Nabeshima: Azumaichi, the reference for the classical Saga style; Tenzan and its Shichida label; Tenpuku, which ferments with yeasts isolated from flowers; Banrei; Mitsutake.",
              ja:"令和三年（2021）六月十四日に指定された。九州で最初の清酒の地理的表示であり、県全域の指定としても最も早いものの一つである。地元の型がすでに整っていたことを思えば、この地理的表示は個性を作るのではなく記録している。鍋島の他の名は、古典的な佐賀の型の基準である東一。天山とその七田の銘。花から分離した酵母で発酵させる天吹。万齢。光武。",
              zh:"二〇二一年六月十四日指定，是九州第一個清酒地理標示，也是全縣範圍指定中最早的幾個之一。考慮到在地風格早已成形，這個 GI 是在記錄一種身分，而非發明一種身分。鍋島之外的名字：東一，古典佐賀風格的基準；天山及其「七田」酒標；天吹，以從花朵分離出的酵母發酵；萬齡；光武。" } }
        ] }
      ] },

    { t:"section", id:"fukuoka",
      title:{ en:"Fukuoka", ja:"福岡", zh:"福岡" }, jp:"福岡県",
      body:[
        { t:"p", text:{
          en:"The largest sake prefecture in Kyūshū by a wide margin, and the one that behaves most like a mainland brewing region: a serious Yamada Nishiki crop, a dense cluster of breweries in one river town, and a style that runs drier and firmer than its neighbours'.",
          ja:"九州で群を抜いて最も大きな清酒の県であり、本土の醸造の地方に最も似た振舞いをする県である。本気の山田錦の作、一つの川の町に密に集まる蔵、そして隣県より辛く堅い酒質である。",
          zh:"九州規模遙遙領先的清酒大縣，也是行為最像本州釀造地區的一個：認真的山田錦收成、集中於一座河畔小鎮的密集酒藏群，以及比鄰縣更辛、更堅實的風格。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Rice", ja:"米", zh:"米" }, jp:"山田錦・夢一献",
            v:{ en:"A real growing prefecture", ja:"実際の産米県", zh:"真正的產米縣" },
            d:{ en:"Fukuoka is one of the few prefectures outside Hyōgo that grows Yamada Nishiki at scale — the Itoshima and Asakura districts in particular — and it is routinely among the top handful nationally, though the ranking below Hyōgo shifts from year to year with Okayama and Yamaguchi. The prefecture also has its own varieties, Yume Ikkon and Ginnosato, bred for the local climate.",
              ja:"福岡は兵庫の外で山田錦を規模をもって育てる数少ない県の一つであり——ことに糸島と朝倉の地区である——全国の上位の数県に常にあるが、兵庫の下の順位は岡山や山口との間で年ごとに動く。県はまた、地元の気候のために育てられた夢一献と吟のさとという自らの品種を持つ。",
              zh:"福岡是兵庫以外少數幾個具規模種植山田錦的縣之一——尤以糸島與朝倉地區為然——並且長年位居全國前幾名，儘管兵庫以下的排序會隨年份在岡山與山口之間變動。本縣也有自己的品種：夢一獻與吟之里，為在地氣候而育成。" } },
          { k:{ en:"Jōjima", ja:"城島", zh:"城島" }, jp:"城島酒蔵びらき",
            v:{ en:"A brewing town on the Chikugo", ja:"筑後川の酒の町", zh:"筑後川畔的酒鎮" },
            d:{ en:"Kurume's Jōjima district on the Chikugo river once held dozens of breweries and still holds a working cluster of them, close enough together to walk. Its brewery-opening weekend in February is one of the largest sake events in western Japan. The river gave it both the water and the transport, which is the usual reason a brewing town is where it is.",
              ja:"筑後川に臨む久留米の城島の地区は、かつて数十の蔵を抱え、今も歩いて回れるほど近い稼働する群れを抱えている。二月の蔵開きの週末は、西日本で最も大きな酒の催しの一つである。川が水と運びの双方を与えた。酒の町がその場所にある理由は、たいていそれである。",
              zh:"久留米面向筑後川的城島地區，過去曾有數十家酒藏，如今仍保有一群仍在運作、彼此近到可以步行走完的酒藏。二月的酒藏開放週末，是西日本規模最大的清酒活動之一。河流同時給了它水與運輸——一座釀酒小鎮之所以在那個位置，理由通常就是這個。" } },
          { k:{ en:"Style", ja:"酒質", zh:"酒質" }, jp:"淡麗やや辛",
            v:{ en:"Drier than its neighbours", ja:"隣県より辛い", zh:"比鄰縣更辛" },
            d:{ en:"Fukuoka generally runs lighter and drier than Saga or Kumamoto — a city prefecture with a ramen-and-motsunabe food culture and a large restaurant trade, which rewards sake that can be poured all evening. The modern houses have pushed it further towards clarity and aromatics without abandoning the dryness.",
              ja:"福岡はおおむね佐賀や熊本より軽く辛い。ラーメンともつ鍋の食の文化と大きな飲食の商いを持つ都市の県であり、それは一晩を通じて注ぎ続けられる酒に報いる。現代の家々は、辛さを捨てずに、それをさらに透明さと香りの方へ押し進めてきた。",
              zh:"福岡整體比佐賀或熊本更輕、更辛——這是一個擁有拉麵與內臟鍋飲食文化、餐飲業龐大的都市型縣份，而這樣的環境會獎勵那種能整晚斟下去的酒。現代的酒藏在不放棄辛口的前提下，把它進一步推向清透與香氣。" } },
          { k:{ en:"Names", ja:"名", zh:"名字" }, jp:"銘柄",
            v:{ en:"Where to start", ja:"始めるべき所", zh:"從哪裡開始" },
            d:{ en:"Niwa no Uguisu and Wakanami for the modern aromatic school; Shigemasu and Mii no Kotobuki for the classical; Kitaya, which took Champion Sake at the International Wine Challenge in 2013, two years after Saga's Nabeshima; Shiraito, which still presses with a wooden hanegi beam; and Komagura, built entirely around long ageing and food, which is the one most likely to change what someone thinks sake can be. GI Fukuoka was designated on 1 October 2025.",
              ja:"現代の香りの学派には庭のうぐいすと若波。古典には繁桝と三井の寿。佐賀の鍋島の二年後、平成二十五年（2013）に国際葡萄酒品評会でチャンピオン・サケを得た喜多屋。今も木の撥ね木で搾る白糸。そして、長期の熟成と食のみを軸に建てられた独楽蔵。酒とは何でありうるかについての考えを最も変えうるのは、この最後の一つである。GI福岡は二〇二五年十月一日に指定された。",
              zh:"現代芳香派可看庭之鶯與若波；古典派可看繁桝與三井之壽；喜多屋在佐賀鍋島奪冠兩年後、於二〇一三年拿下國際葡萄酒挑戰賽的 Champion Sake；白糸至今仍以木製撥木壓榨；而完全圍繞長期熟成與佐餐而建的獨樂藏，則最可能改變一個人對「清酒可以是什麼」的想像。GI 福岡於二〇二五年十月一日指定。" } }
        ] }
      ] },

{ t:"section", id:"rest",
      title:{ en:"Nagasaki, Ōita, Miyazaki, Kagoshima", ja:"長崎・大分・宮崎・鹿児島", zh:"長崎、大分、宮崎、鹿兒島" }, jp:"四県",
      body:[
        { t:"defs", items:[
          { term:{ en:"Nagasaki", ja:"長崎", zh:"長崎" }, jp:"長崎県", romaji:"Nagasaki-ken",
            def:{ en:"Two things to carry away. First, the island of Iki is generally held to be the birthplace of barley shochu, and Iki was one of the three original spirits geographical indications granted in 1995. Second, the sugar road: for two centuries Nagasaki was the only port through which sugar legally entered Japan, and it moved inland along the Nagasaki Kaidō through Saga and into Fukuoka. That road is why the food of northern Kyūshū is sweet, and therefore part of why its sake is. Sake houses are few — Rokujūyoshū, Kinokawa — but the prefecture explains its neighbours.",
              ja:"持ち帰るべきことが二つある。第一に、壱岐の島は麦焼酎の発祥の地と広く見なされ、壱岐は平成七年（1995）に与えられた最初の三つの蒸留酒の地理的表示の一つであった。第二に、砂糖の道である。二百年にわたり長崎は砂糖が合法に日本へ入る唯一の港であり、それは長崎街道に沿って佐賀を抜け福岡へと内陸へ動いた。その道こそ、北九州の食が甘い理由であり、したがってその酒が甘い理由の一部でもある。清酒の家は少ない——六十餘洲、杵の川——が、この県は隣県を説き明かす。",
              zh:"有兩件事值得帶走。其一，壹岐島普遍被視為麥燒酎的發祥地，而壹岐是一九九五年授予的最初三個蒸餾酒地理標示之一。其二，是「砂糖之路」：兩百年間，長崎是砂糖唯一合法進入日本的港口，而它沿著長崎街道往內陸移動，穿過佐賀進入福岡。這條路正是北九州飲食偏甜的原因，因而也是其酒偏甜的部分原因。清酒酒藏很少——六十餘洲、杵之川——但這個縣解釋了它的鄰居。" } },
          { term:{ en:"Ōita", ja:"大分", zh:"大分" }, jp:"大分県", romaji:"Ōita-ken",
            def:{ en:"The home of industrial barley shochu — the two brands that made <em>mugi-jōchū</em> a national drink in the 1980s are both from here — and, quietly, of some very good sake. Nishi no Seki at Kunisaki is the classical house, dry and structured; Chiebijin, a small family brewery at Kitsuki, took a top prize at the Kura Master competition in Paris in 2018 and is the modern one. Ōita also has hot springs in quantity, and a local habit of drinking sake after a bath that is worth taking seriously.",
              ja:"産業としての麦焼酎の郷であり——一九八〇年代に麦焼酎を全国の飲み物とした二つの銘柄はいずれもここのものである——そして静かに、きわめて良い清酒の郷でもある。国東の西の関は古典の家であり、辛く骨格がある。杵築の小さな家族の蔵ちえびじんは、平成三十年（2018）に巴里のクラマスターで最上の賞を得た現代の一つである。大分はまた温泉を数多く持ち、湯の後に酒を飲む土地の習いは、真面目に受け取る値打ちがある。",
              zh:"工業化麥燒酎的故鄉——一九八〇年代讓麥燒酎成為全國性飲品的兩個品牌都出自這裡——同時，也安靜地是一些相當出色的清酒的故鄉。國東的西之關是古典派，辛口而有骨架；杵築的小型家族酒藏「智惠美人」於二〇一八年在巴黎的 Kura Master 競賽奪得最高獎項，是現代派的代表。大分還擁有大量溫泉，而當地泡湯後飲酒的習慣，值得認真對待。" } },
          { term:{ en:"Miyazaki", ja:"宮崎", zh:"宮崎" }, jp:"宮崎県", romaji:"Miyazaki-ken",
            def:{ en:"The largest shochu-producing prefecture in Japan by volume in most recent years, and the one where sake has retreated furthest: Sentoku, at Nobeoka, is the prefecture's best known and for a long stretch its only sake brewery. That a prefecture of a million people can support one sake brewery and dozens of distilleries is the clearest single measure of how thoroughly the mould line divides the country.",
              ja:"近年の多くの年において量として日本最大の焼酎の県であり、清酒が最も遠くまで退いた県である。延岡の千徳は、県で最もよく知られ、長きにわたり唯一の清酒の蔵であった。百万の人を抱える県が一つの清酒の蔵と数十の蒸留所を支えうるということは、黴の線がこの国をいかに徹底して分けているかの、最も明快な一つの尺度である。",
              zh:"近年多數年份中，宮崎是日本產量最大的燒酎縣，也是清酒退得最遠的縣：延岡的千德是全縣最知名、且很長一段時間內唯一的清酒酒藏。一個擁有百萬人口的縣能支撐一家清酒酒藏與數十家蒸餾廠，這是「黴菌分界線把這個國家分得多麼徹底」最清楚的單一量度。" } },
          { term:{ en:"Kagoshima", ja:"鹿児島", zh:"鹿兒島" }, jp:"鹿児島県", romaji:"Kagoshima-ken",
            def:{ en:"For roughly four decades, Kagoshima had no sake brewery at all — the last one closed, and sweet-potato shochu, protected since 2005 by the Satsuma geographical indication, held the whole prefecture. Then in the 2010s two established shochu houses began brewing sake as well: Nishi Shuzō's Tenbu and Hamada Shuzō's Sasshū Masamune. They did it with imported expertise, modern refrigeration, and no local guild tradition whatever — the Yamaguchi playbook applied to a prefecture that had forgotten how. It is the most recent proof that climate is now a budget line rather than a boundary.",
              ja:"およそ四十年にわたり、鹿児島には清酒の蔵が一つもなかった。最後の一軒が閉じ、平成十七年（2005）から薩摩の地理的表示に守られる芋焼酎が県の全体を占めた。やがて二〇一〇年代、二つの確立した焼酎の家が清酒も醸し始めた。西酒造の天賦と濵田酒造の薩州正宗である。彼らは外から招いた技と、現代の冷却と、まったくの杜氏の伝統の不在のもとでそれを行った。忘れてしまった県に適用された山口の手引きである。気候が今や境界ではなく予算の一項目であることの、最も新しい証しである。",
              zh:"約有四十年之久，鹿兒島完全沒有清酒酒藏——最後一家關閉後，自二〇〇五年起受薩摩地理標示保護的甘藷燒酎佔據了整個縣。然後在二〇一〇年代，兩家老牌燒酎酒藏也開始釀造清酒：西酒造的「天賦」與濱田酒造的「薩州正宗」。他們憑藉外來的技術、現代冷藏設備，以及完全沒有在地杜氏傳統的條件完成了這件事——這是山口那套手冊，被套用在一個已經遺忘如何釀酒的縣。它是最新的證明：氣候如今是一筆預算，而不再是一道邊界。" } }
        ] }
      ] },

    { t:"section", id:"okinawa",
      title:{ en:"Okinawa", ja:"沖縄", zh:"沖繩" }, jp:"沖縄県",
      body:[
        { t:"p", text:{
          en:"Okinawa does not brew sake and never has. What it makes is awamori, which is worth a section here because it is the closest living relative of sake's technology and the clearest demonstration of what changes when you swap one organism for another.",
          ja:"沖縄は清酒を醸さず、かつて醸したこともない。造るのは泡盛である。ここに一節を割く値打ちがあるのは、それが酒の技術の最も近い現存する血縁であり、一つの生き物を別のものに替えたときに何が変わるかの最も明快な実証だからである。",
          zh:"沖繩不釀清酒，過去也從未釀過。它所製造的是泡盛，而它值得在此佔一節，因為它是清酒技術最近的在世血親，也是「當你把一種生物換成另一種時會改變什麼」最清楚的實證。" } },
        { t:"table",
          caption:{ en:"Three rice fermentations compared", ja:"三つの米の醸しの比較", zh:"三種米發酵的比較" },
          cols:["", { en:"Sake", ja:"清酒", zh:"清酒" }, { en:"Rice shochu", ja:"米焼酎", zh:"米燒酎" }, { en:"Awamori", ja:"泡盛", zh:"泡盛" }],
          keyCol:0,
          rows:[
            [{ en:"Mould", ja:"麹菌", zh:"麴菌" }, { en:"A. oryzae, yellow", ja:"黄麹菌", zh:"黃麴菌" }, { en:"White or black", ja:"白麹・黒麹", zh:"白麴或黑麴" }, { en:"A. luchuensis, black, always", ja:"黒麹菌のみ", zh:"僅用黑麴菌" }],
            [{ en:"Rice", ja:"米", zh:"米" }, { en:"Japonica, polished", ja:"精白した粳米", zh:"精磨的粳米" }, { en:"Japonica", ja:"粳米", zh:"粳米" }, { en:"Long-grain indica, mostly Thai", ja:"長粒のインディカ、主に泰国産", zh:"長粒秈米，多為泰國產" }],
            [{ en:"Kōji share of the rice", ja:"麹の割合", zh:"麴的比例" }, { en:"About one fifth", ja:"およそ五分の一", zh:"約五分之一" }, { en:"Kōji plus a main mash", ja:"麹に主原料を加える", zh:"麴加上主原料" }, { en:"All of it — every grain is kōji", ja:"全量——すべての粒が麹", zh:"全部——每一粒都是麴" }],
            [{ en:"Acid protection", ja:"酸による保護", zh:"以酸保護" }, { en:"Lactic acid, in the starter", ja:"酛の乳酸", zh:"酒母中的乳酸" }, { en:"Citric acid", ja:"枸櫞酸", zh:"檸檬酸" }, { en:"Citric acid, from the mould", ja:"黴の生む枸櫞酸", zh:"由黴菌生成的檸檬酸" }],
            [{ en:"Fermentation", ja:"発酵", zh:"發酵" }, { en:"Three-stage addition over four days", ja:"四日にわたる三段仕込み", zh:"四天內的三段式投料" }, { en:"Two stages", ja:"二次仕込み", zh:"二段式" }, { en:"One stage, all at once", ja:"全麹の一次仕込み", zh:"全麴一段，一次到位" }],
            [{ en:"Finish", ja:"仕上げ", zh:"完成" }, { en:"Pressed, filtered, pasteurised", ja:"搾り、濾し、火入れ", zh:"壓榨、過濾、火入" }, { en:"Distilled once", ja:"単式蒸留", zh:"單式蒸餾一次" }, { en:"Distilled once, then aged", ja:"単式蒸留ののち熟成", zh:"單式蒸餾一次，之後熟成" }],
            [{ en:"Strength", ja:"度数", zh:"酒精度" }, { en:"15–17%", ja:"十五〜十七度", zh:"15–17%" }, { en:"25%", ja:"二十五度", zh:"25%" }, { en:"30–43%, up to 60%", ja:"三十〜四十三度、最高六十度", zh:"30–43%，最高 60%" }]
          ] },
        { t:"defs", items:[
          { term:{ en:"Kūsu", ja:"古酒", zh:"古酒" }, jp:"古酒", romaji:"kūsu",
            def:{ en:"Awamori aged three years or more, traditionally in unglazed clay jars, and traditionally topped up from a younger jar as it is drawn off — a running blend across decades, called <em>shitsugi</em>. Jars a century old survived in some families until 1945; almost all were destroyed in the battle for Okinawa, and the rebuilding of the prefecture's aged stock began from nearly nothing. Sake has no equivalent institution, and the contrast says a good deal about what distillation buys you.",
              ja:"三年以上寝かせた泡盛であり、伝統には釉のない甕に、そして汲み出すごとに若い甕から注ぎ足して保たれる。仕次ぎと呼ばれる、数十年にわたる続く混和である。一世紀を経た甕が一九四五年まで幾つかの家に残っていたが、沖縄戦でほとんどすべてが失われ、県の古酒の蓄えの建て直しはほぼ無から始まった。清酒にこれに当たる制度はなく、その対比は、蒸留が何を購うかについて多くを語る。",
              zh:"熟成三年以上的泡盛，傳統上存放於未上釉的陶甕中，並在每次取用後由較年輕的甕補注——一種跨越數十年的持續調和，稱為「仕次」。有些家族的百年老甕一直保存到一九四五年；沖繩戰役中幾乎全數毀損，全縣古酒庫存的重建，幾乎是從零開始。清酒沒有與此對應的制度，而這個對比，說明了蒸餾究竟為你買到了什麼。" } },
          { term:{ en:"Ryukyu Awamori", ja:"琉球泡盛", zh:"琉球泡盛" }, jp:"GI琉球", romaji:"GI Ryūkyū",
            def:{ en:"Designated a geographical indication in 1995, in the same first round as Iki and Kuma shochu and ten years before Satsuma — and, for that matter, a decade before the first sake GI. The spirits side of the industry got its origin protections first, which is a small but telling fact about which drinks Japan considered locally rooted enough to need defending.",
              ja:"平成七年（1995）に地理的表示に指定された。壱岐、球磨の焼酎と同じ最初の一巡であり、薩摩より十年早く、さらに言えば最初の清酒の地理的表示より十年早い。産業の蒸留の側が先に原産地の保護を得たという事実は、小さいが、日本がどの酒を守るに足るほど土地に根ざしていると考えたかについて多くを語る。",
              zh:"一九九五年獲指定為地理標示，與壹岐、球磨燒酎同屬第一批，比薩摩早十年——而且，比第一個清酒 GI 也早了十年。產業中蒸餾這一側先取得了原產地保護，這是一個雖小卻具說明力的事實：它顯示日本認為哪些酒「夠在地」到需要被保護。" } }
        ] }
      ] },

    { t:"section", id:"close",
      title:{ en:"What the south teaches", ja:"南が教えること", zh:"南方所教的事" }, jp:"結び",
      body:[
        { t:"p", text:{
          en:"Every generalisation about Japanese sake that this site makes elsewhere — that it is a winter drink, that it needs cold and hard water, that a region's style follows its climate — is testable here, because here the climate said no and people found four different answers. Kyūshū distilled. Kumamoto built a laboratory. Saga leaned into the sweetness the heat produced instead of fighting it. Kagoshima bought refrigeration and started over. Only the last of those is available to a brewery anywhere in the world; the other three had to be invented on the spot.",
          ja:"この場所が他所でなす日本酒についてのあらゆる一般化——冬の飲み物であること、寒さと硬い水を要すること、地方の型がその気候に従うこと——は、ここで試すことができる。ここでは気候が否と言い、人は四つの異なる答えを見つけたからである。九州は蒸留した。熊本は実験室を建てた。佐賀は暑さの生む甘さと戦う代わりにそれに寄りかかった。鹿児島は冷却を買って始めからやり直した。この四つのうち最後のものだけが世界のどこの蔵にも手に入る。他の三つは、その場で発明されねばならなかった。",
          zh:"本站在別處對日本酒所做的每一項通則——它是冬季的飲料、它需要寒冷與硬水、一個地區的風格追隨其氣候——都可以在這裡被檢驗，因為在這裡，氣候說了不，而人們找到了四種不同的答案。九州選擇蒸餾。熊本蓋了一座實驗室。佐賀不與熱所生的甜對抗，反而順勢倚靠它。鹿兒島買下冷藏設備，從頭再來。這四者之中，只有最後一項是世界任何地方的酒藏都能取得的；其餘三項，都必須在當地被發明出來。" } },
        { t:"tiny", text:{
          en:"Return to the regional index, or read the terroir page for the underlying argument about place.",
          ja:"産地の一覧へ戻る、あるいは場所についての基となる議論のために風土の頁を読む。",
          zh:"返回產地一覽，或閱讀風土一頁，了解關於「地方」的根本論證。" } }
      ] },

    { t:"related", items:[
      { href:"regions.html", why:{ en:"The same prefectures in the national index.", ja:"同じ県を、全国の索引のなかで。", zh:"同樣這些縣，放在全國索引裡。" } },
      { href:"shochu.html", why:{ en:"The drink that occupies most of these prefectures.", ja:"これらの県の多くを占める飲み物。", zh:"占據這些縣大部分版圖的那種酒。" } },
      { href:"kojifamily.html", why:{ en:"The black and white moulds the south uses.", ja:"南が用いる黒と白の麹。", zh:"南方所使用的黑麴與白麴。" } },
      { href:"water.html", why:{ en:"Why brewing this far south is a thermal problem.", ja:"これほど南で醸すことが熱の問題である理由。", zh:"為什麼在這麼南的地方釀酒，是一個熱的問題。" } }
    ] }
  ]
};


/* ---- -------------------------------------------------- gi */
SAKE.pages["gi"] = {
  kicker: { en: "Place · 09", ja: "産地 · 09", zh: "產地 · 09" },
  title:  { en: "Geographical Indications", ja: "地理的表示", zh: "地理標示" },
  jp: "GI · 酒類の地理的表示",
  lede: {
    en: "Japan protects sake origins the way France protects wine origins, but the system is young, thin and moving fast. The legal instrument is the Labelling Standard on Geographical Indications for Alcoholic Beverages, issued by the National Tax Agency in 2015 under the liquor tax framework. Twenty-three sake GIs now exist, from a single district of two thousand hectares to the entire country.",
    ja: "日本はワインの原産地をフランスが守るのと同じ仕方で日本酒の産地を保護している。ただし制度は若く、薄く、そして速く動いている。法的な根拠は、二〇一五年に国税庁が酒税の保全に関する枠組みのもとで告示した「酒類の地理的表示に関する表示基準」である。清酒のGIは現在二十三を数え、二千ヘクタール足らずの一地区から、国全体に及ぶものまである。",
    zh: "日本以類似法國保護葡萄酒產地的方式保護日本酒產地，惟此制度年輕、稀薄，且變動迅速。法律依據是國稅廳於 2015 年在酒稅保全架構下公告的《酒類地理標示相關標示基準》。清酒 GI 目前共有 23 個，範圍自不足兩千公頃的單一地區，到涵蓋全國者皆有。"
  },
  body: [
    { t:"section", id:"how",
      title:{ en:"How a sake GI works", ja:"清酒GIの仕組み", zh:"清酒 GI 的運作" }, jp:"制度",
      body:[
        { t:"p", text:{
          en:"A GI is not a quality award and it is not owned by anyone. It is a set of production rules attached to a place, administered by a local control body — usually the district's brewers' association — which verifies compliance batch by batch before the name may be used.",
          ja:"GIは品質賞ではなく、誰かの所有物でもない。ある土地に結びつけられた製造規則の束であり、通常はその地の酒造組合である管理機関が運営し、名称の使用に先立ち、製品ごとに適合を確認する。",
          zh:"GI 不是品質獎項，也不屬於任何人所有。它是一組附著於某個地方的生產規則，由在地管理機關（通常是該區的酒造組合）執行，在名稱得以使用之前逐批查核合規。" } },
        { t:"steps", items:[
          { title:{en:"A defined area",ja:"産地の範囲",zh:"產地範圍"},
            text:{en:"Drawn on a map, down to municipal boundaries. All production steps that define the character — at minimum fermentation and pressing — must happen inside it. Some standards also require the water to come from within the area.",ja:"地図上に、市町村界の水準まで明確に線を引く。酒質を規定する工程——少なくとも発酵と上槽——はその内側で行わねばならない。仕込み水を域内から得ることを求める基準もある。",zh:"在地圖上劃定，細至市町村界線。界定酒質的製程——至少包括發酵與上槽——必須在其內部進行。部分標準另要求仕込水須取自區域內。"} },
          { title:{en:"Raw material rules",ja:"原料の要件",zh:"原料要件"},
            text:{en:"Every sake GI requires Japanese-grown rice. Many require a proportion — sometimes all — to be grown within the prefecture or the district itself. Some name permitted varieties; some name permitted yeasts.",ja:"清酒のGIはいずれも国産米を要件とする。多くは一定割合——時には全量——を県内あるいは当該地区内で栽培することを求める。使用できる品種を指定するもの、酵母を指定するものもある。",zh:"每一個清酒 GI 都要求使用日本產米。許多要求一定比例——有時是全部——須產自該縣或該地區。部分明定可用品種，部分明定可用酵母。"} },
          { title:{en:"Production method",ja:"製法の要件",zh:"製法要件"},
            text:{en:"Typically the sake must qualify as seishu under the Liquor Tax Act and often must additionally meet a designation standard — some GIs permit only junmai-type sake, some set a maximum milling ratio, some forbid added sugars entirely.",ja:"通常、酒税法上の清酒であることに加え、特定名称の基準を満たすことを求めるものが多い。純米系に限るGI、精米歩合の上限を定めるGI、糖類の添加を一切認めないGIがある。",zh:"通常須符合酒稅法上的清酒定義，且多半另須符合特定名稱標準——有些 GI 只准純米系，有些設定精米步合上限，有些完全禁止添加糖類。"} },
          { title:{en:"Assessment",ja:"確認",zh:"查核"},
            text:{en:"The control body runs both an analytical check and a blind sensory panel. A sake that meets every written rule but does not display the district's character can be refused. This is the part of the system that most resembles a European appellation and the part that is hardest to run consistently.",ja:"管理機関は分析検査とブラインドの官能検査の双方を行う。書かれた規則をすべて満たしていても、その産地の特性を示さない酒は認められないことがある。制度のなかでヨーロッパの原産地呼称に最も近い部分であり、同時に、一貫して運用することが最も難しい部分でもある。",zh:"管理機關同時進行分析檢驗與盲測感官評審。即使符合所有成文規則，若未展現該產地的特性，仍可能不予認可。這是整個制度中最接近歐洲法定產區之處，也是最難維持一致運作之處。"} }
        ] },
        { t:"panel", tint:"koji", title:{en:"GI “Nihonshu” — the country-wide one",ja:"GI「日本酒」——国全体のGI",zh:"GI「日本酒」——全國性的一個"}, body:[
          { t:"p", text:{
            en:"Registered 25 December 2015, this is not a regional appellation but a national one. It reserves the word <em>Nihonshu</em> for seishu brewed in Japan from rice grown in Japan. Sake brewed anywhere else — and there is a growing quantity, in the United States, France, Norway, Spain, Taiwan, Vietnam and elsewhere — remains legally sake, but may not be called <em>Nihonshu</em>. It is the sake equivalent of protecting the word “Scotch”, and it exists because the general definition of seishu contains no geographic clause at all.",
            ja:"二〇一五年十二月二十五日登録。これは地方の呼称ではなく、国の呼称である。「日本酒」の語を、国産米を用い日本国内で製造された清酒に限定する。それ以外の場所で醸された酒——アメリカ、フランス、ノルウェー、スペイン、台湾、ベトナムなどで増えつつある——は法的に sake ではあるが、「日本酒」を名乗れない。「スコッチ」という語を守るのと同じことであり、清酒一般の定義には産地条項がまったく存在しないために設けられた。",
            zh:"2015 年 12 月 25 日註冊。這不是地方性名稱，而是國家級名稱。它把「日本酒」一詞保留給以日本產米、於日本國內釀造的清酒。在其他地方釀造者——美國、法國、挪威、西班牙、台灣、越南等地數量正在增加——法律上仍是 sake，但不得稱為「日本酒」。這相當於保護「Scotch」一詞，其設立的理由是：清酒的一般定義中根本沒有任何產地條款。" } }
        ] }
      ]
    },

    { t:"section", id:"list",
      title:{ en:"The twenty-three", ja:"二十三の清酒GI", zh:"二十三個清酒 GI" }, jp:"一覧",
      body:[
        { t:"figure",
          caption:{
            en:"Every sake GI, in the order it was registered. Hakusan sat alone for ten years because it was granted under an older wine-and-spirits notice before the current framework existed; the national 日本酒 indication in 2015 and Yamagata a year later set the two patterns everything since has followed. The curve then does what a new administrative instrument usually does once the first few applicants show it can be done — it goes nearly vertical. Note the shape of the bar underneath: a majority of these are whole prefectures, which is a political unit rather than a growing region, and that is the standing criticism of the scheme.",
            ja:"清酒のGIのすべてを、登録された順に。白山が十年のあいだ独りであったのは、それが現行の制度の前、酒類に関する古い告示のもとで認められたからである。二〇一五年の国の表示「日本酒」と、その一年後の山形が、以後のすべてが従う二つの型を定めた。曲線はそののち、新しい行政の道具が最初の数者によって「できる」と示されたときに常なすことをする——ほぼ垂直になるのである。下の帯の形に注意されたい。その過半は県まるごとであり、県とは産地ではなく政の単位である。この仕組みに対する変わらぬ批判は、そこにある。",
            zh:"所有清酒 GI，依註冊先後排列。白山之所以獨自存在了十年，是因為它是在現行制度出現之前、依較舊的酒類告示所核可的；二〇一五年的國家級表示「日本酒」與一年後的山形，確立了此後一切所遵循的兩種模式。接著這條曲線做了新行政工具在最初幾位申請者證明「這事做得到」之後通常會做的事——它幾乎變成垂直。請注意下方那條長帶的形狀：其中過半是整個縣，而縣是政治單位而非產區——這正是外界對此制度始終如一的批評。" },
          svg: function (lang, L) {
            var W = 760, H = 396, X0 = 90, X1 = 700, Y0 = 56, Y1 = 272, YMAX = 24;
            var Y_A = 2005, Y_B = 2026;
            function px(y) { return X0 + (y - Y_A) / (Y_B - Y_A) * (X1 - X0); }
            function py(v) { return Y1 - v / YMAX * (Y1 - Y0); }
            var C = { n:"#7C6B52", p:"#C0AF8E", d:"#9FB0A6" };
            var reg = [
              [2005.96, "d"], [2015.96, "n"], [2016.96, "p"], [2018.46, "d"], [2020.21, "d"], [2020.46, "p"],
              [2021.05, "d"], [2021.21, "d"], [2021.29, "p"], [2021.46, "p"], [2021.46, "p"], [2022.13, "p"],
              [2022.29, "p"], [2023.46, "d"], [2023.71, "p"], [2023.87, "p"], [2024.63, "d"], [2024.87, "d"],
              [2024.96, "d"], [2025.46, "p"], [2025.79, "p"], [2025.79, "p"], [2025.79, "p"]
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* the decade alone */
            s += '<rect x="' + px(2005.96).toFixed(1) + '" y="' + Y0 + '" width="' + (px(2015.96) - px(2005.96)).toFixed(1) +
                 '" height="' + (Y1 - Y0) + '" fill="#F2EFE8"/>';
            s += '<text x="' + ((px(2005.96) + px(2015.96)) / 2).toFixed(1) + '" y="' + (Y0 + 18) + '" text-anchor="middle" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "十年、GIは一つ、制度はまだない" : lang === "zh" ? "十年間只有一個 GI，制度尚未存在" : "ten years, one GI, and no framework") + '</text>';
            var g;
            for (g = 0; g <= YMAX; g += 5) {
              s += '<line x1="' + X0 + '" y1="' + py(g) + '" x2="' + X1 + '" y2="' + py(g) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + (X0 - 10) + '" y="' + (py(g) + 3.5) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            var t;
            for (t = 2005; t <= 2025; t += 5) {
              s += '<line x1="' + px(t).toFixed(1) + '" y1="' + Y1 + '" x2="' + px(t).toFixed(1) + '" y2="' + (Y1 + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + px(t).toFixed(1) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + t + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            /* the step curve */
            var d = "M" + X0 + " " + py(0), i;
            for (i = 0; i < reg.length; i++) {
              d += " L" + px(reg[i][0]).toFixed(1) + " " + py(i).toFixed(1);
              d += " L" + px(reg[i][0]).toFixed(1) + " " + py(i + 1).toFixed(1);
            }
            d += " L" + px(Y_B).toFixed(1) + " " + py(reg.length).toFixed(1);
            s += '<path d="' + d + '" fill="none" stroke="#8B857C" stroke-width="1.6"/>';
            for (i = 0; i < reg.length; i++) {
              s += '<rect x="' + (px(reg[i][0]) - 3.5).toFixed(1) + '" y="' + (py(i + 1) - 3.5).toFixed(1) +
                   '" width="7" height="7" fill="' + C[reg[i][1]] + '"/>';
            }
            /* the three that set the pattern */
            s += '<text x="' + (px(2005.96) + 10).toFixed(1) + '" y="' + (py(1) - 7).toFixed(1) + '" font-size="10.5" fill="#201E1B">白山 2005</text>';
            s += '<text x="' + (px(2015.96) - 9).toFixed(1) + '" y="' + (py(2) - 8).toFixed(1) + '" text-anchor="end" font-size="10.5" fill="#201E1B">日本酒 2015</text>';
            s += '<text x="' + (px(2016.96) + 10).toFixed(1) + '" y="' + (py(3) - 4).toFixed(1) + '" font-size="10.5" fill="#201E1B">山形 2016</text>';
            s += '<text x="' + (px(2025.79) + 12).toFixed(1) + '" y="' + (py(23) + 4).toFixed(1) + '" font-size="13" fill="#201E1B">23</text>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "登録されたGIの累計" : lang === "zh" ? "累計註冊 GI 數" : "GIs REGISTERED, CUMULATIVE") + '</text>';
            /* what kind of place each one is */
            var SY = 314, cats = [
              { k:"n", n:1,  t:{ en:"all of Japan", ja:"日本全国", zh:"全日本" } },
              { k:"p", n:13, t:{ en:"a whole prefecture", ja:"県まるごと", zh:"整個縣" } },
              { k:"d", n:9,  t:{ en:"a city or district", ja:"市・地区", zh:"市或地區" } }
            ];
            var cx = X0, j;
            for (j = 0; j < cats.length; j++) {
              var cw = cats[j].n / 23 * (X1 - X0);
              s += '<rect x="' + cx.toFixed(1) + '" y="' + SY + '" width="' + cw.toFixed(1) + '" height="24" fill="' + C[cats[j].k] + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (cx + cw / 2).toFixed(1) + '" y="' + (SY + 42) + '" text-anchor="middle" font-size="10" fill="#201E1B">' + cats[j].n + ' · ' + L(cats[j].t) + '</text>';
              cx += cw;
            }
            s += '<text x="' + (X0 - 10) + '" y="' + (SY + 16) + '" text-anchor="end" font-size="9" letter-spacing="1.1" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "範囲" : lang === "zh" ? "範圍" : "SCOPE") + '</text>';
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "国税庁の登録日による。同じ月の登録は並べて描いてある。"
                  : lang === "zh" ? "依國稅廳的註冊日期繪製；同月註冊者並列呈現。"
                  : "By National Tax Agency registration date; registrations in the same month are drawn side by side.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{en:"Registered sake geographical indications (National Tax Agency)",ja:"登録された清酒の地理的表示（国税庁）",zh:"已註冊之清酒地理標示（國稅廳）"},
          cols:[{en:"GI",ja:"GI",zh:"GI"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Where",ja:"所在",zh:"所在"},{en:"Registered",ja:"登録",zh:"註冊"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[1], numCols:[3],
          rows:[
            [{en:"Nihonshu",ja:"日本酒",zh:"日本酒"},"日本酒",{en:"all of Japan",ja:"日本全国",zh:"全日本"},"2015-12-25",
             {en:"Japanese rice, brewed in Japan. The national appellation.",ja:"国産米、日本国内での製造。国の呼称。",zh:"日本產米、於日本國內釀造。國家級名稱。"}],
            [{en:"Hakusan",ja:"白山",zh:"白山"},"白山",{en:"Hakusan, Ishikawa",ja:"石川県白山市",zh:"石川縣白山市"},"2005-12-22",
             {en:"The first sake GI, ten years before the framework existed. Standard revised 2025.",ja:"最初の清酒GI。制度の成立より十年早い。二〇二五年に基準改定。",zh:"最早的清酒 GI，比制度本身早了十年。標準於 2025 年修訂。"}],
            [{en:"Yamagata",ja:"山形",zh:"山形"},"山形",{en:"Yamagata Prefecture",ja:"山形県",zh:"山形縣"},"2016-12-16",
             {en:"The first whole-prefecture sake GI, and the model most later ones follow.",ja:"最初の県単位の清酒GIであり、以後の多くが範とした型。",zh:"首個以全縣為範圍的清酒 GI，也是此後多數 GI 效法的範本。"}],
            [{en:"Nada-Gogō",ja:"灘五郷",zh:"灘五鄉"},"灘五郷",{en:"Kobe, Nishinomiya, Ashiya — Hyōgo",ja:"兵庫県神戸・西宮・芦屋",zh:"兵庫縣神戶、西宮、蘆屋"},"2018-06-28",
             {en:"Five brewing villages along a ten-kilometre coastal strip; miyamizu and Yamada Nishiki. Revised 2020.",ja:"約十キロの海岸沿いに並ぶ五つの郷。宮水と山田錦。二〇二〇年改定。",zh:"沿約十公里海岸線分布的五個釀造聚落；宮水與山田錦。2020 年修訂。"}],
            [{en:"Harima",ja:"はりま",zh:"播磨"},"はりま",{en:"south-west Hyōgo",ja:"兵庫県南西部",zh:"兵庫縣西南部"},"2020-03-16",
             {en:"The rice-growing hinterland behind Nada, including the Toku-A Yamada Nishiki districts.",ja:"灘の背後にある米どころ。山田錦の特A地区を含む。",zh:"灘背後的產米腹地，含山田錦特 A 地區。"}],
            [{en:"Mie",ja:"三重",zh:"三重"},"三重",{en:"Mie Prefecture",ja:"三重県",zh:"三重縣"},"2020-06-19",
             {en:"Ise, and a long shrine-brewing tradition.",ja:"伊勢と、長い神社醸造の伝統。",zh:"伊勢，以及悠久的神社釀造傳統。"}],
            [{en:"Tone-Numata",ja:"利根沼田",zh:"利根沼田"},"利根沼田",{en:"northern Gunma",ja:"群馬県北部",zh:"群馬縣北部"},"2021-01-22",
             {en:"A small mountain district; snowmelt water off the Mikuni range.",ja:"小さな山間の地区。三国山脈からの雪解け水。",zh:"小型山間地區；來自三國山脈的雪融水。"}],
            [{en:"Hagi",ja:"萩",zh:"萩"},"萩",{en:"Hagi, Yamaguchi",ja:"山口県萩市",zh:"山口縣萩市"},"2021-03-30",
             {en:"A castle town on the Japan Sea coast; junmai-only standard.",ja:"日本海に面した城下町。純米に限る基準。",zh:"面向日本海的城下町；標準限定純米。"}],
            [{en:"Yamanashi",ja:"山梨",zh:"山梨"},"山梨",{en:"Yamanashi Prefecture",ja:"山梨県",zh:"山梨縣"},"2021-04-28",
             {en:"Also a wine GI — one of very few places in Japan holding both.",ja:"ぶどう酒のGIでもある。両方をもつ日本でごく少数の地の一つ。",zh:"同時也是葡萄酒 GI——日本極少數兩者兼具的產地之一。"}],
            [{en:"Saga",ja:"佐賀",zh:"佐賀"},"佐賀",{en:"Saga Prefecture",ja:"佐賀県",zh:"佐賀縣"},"2021-06-14",
             {en:"Kyushu; historically sweeter and fuller than the national norm.",ja:"九州。歴史的に全国平均より甘く厚い酒質。",zh:"九州；歷史上比全國平均更甜、更厚實。"}],
            [{en:"Nagano",ja:"長野",zh:"長野"},"長野",{en:"Nagano Prefecture",ja:"長野県",zh:"長野縣"},"2021-06-30",
             {en:"The second-largest brewery count in Japan; high altitude, cold winters.",ja:"蔵の数は全国第二位。標高が高く、冬は寒い。",zh:"酒藏數量全國第二；海拔高、冬季嚴寒。"}],
            [{en:"Niigata",ja:"新潟",zh:"新潟"},"新潟",{en:"Niigata Prefecture",ja:"新潟県",zh:"新潟縣"},"2022-02-07",
             {en:"The largest brewery count in Japan and the home of <em>tanrei karakuchi</em>.",ja:"蔵の数は全国最多。淡麗辛口の本場。",zh:"酒藏數量全國最多，也是淡麗辛口的原鄉。"}],
            [{en:"Shiga",ja:"滋賀",zh:"滋賀"},"滋賀",{en:"Shiga Prefecture",ja:"滋賀県",zh:"滋賀縣"},"2022-04-13",
             {en:"Lake Biwa's watershed; several of Japan's oldest breweries.",ja:"琵琶湖の集水域。日本有数の古い蔵がいくつもある。",zh:"琵琶湖流域；擁有數家日本最古老的酒藏。"}],
            [{en:"Shinano-Ōmachi",ja:"信濃大町",zh:"信濃大町"},"信濃大町",{en:"Ōmachi, Nagano",ja:"長野県大町市",zh:"長野縣大町市"},"2023-06-30",
             {en:"A sub-district inside GI Nagano — the first nested sake GI.",ja:"GI長野の内側にある小区分。清酒として初の入れ子構造。",zh:"位於 GI 長野內部的次區域——清酒首例的巢狀 GI。"}],
            [{en:"Iwate",ja:"岩手",zh:"岩手"},"岩手",{en:"Iwate Prefecture",ja:"岩手県",zh:"岩手縣"},"2023-09-25",
             {en:"Home of the Nanbu Tōji guild, the largest brewmaster association in Japan.",ja:"日本最大の杜氏集団、南部杜氏の本拠。",zh:"日本最大杜氏團體「南部杜氏」的根據地。"}],
            [{en:"Shizuoka",ja:"静岡",zh:"靜岡"},"静岡",{en:"Shizuoka Prefecture",ja:"静岡県",zh:"靜岡縣"},"2023-11-30",
             {en:"Defined by the prefectural yeast series and a notably restrained house style.",ja:"県産酵母の系列と、際立って端正な酒質によって規定される。",zh:"由該縣酵母系列與明顯內斂的酒質風格所界定。"}],
            [{en:"Minami-Aizu",ja:"南会津",zh:"南會津"},"南会津",{en:"southern Fukushima",ja:"福島県南部",zh:"福島縣南部"},"2024-08-30",
             {en:"Deep-snow mountain country.",ja:"豪雪の山国。",zh:"豪雪的山地。"}],
            [{en:"Itami",ja:"伊丹",zh:"伊丹"},"伊丹",{en:"Itami, Hyōgo",ja:"兵庫県伊丹市",zh:"兵庫縣伊丹市"},"2024-11-29",
             {en:"The Edo-period brewing town that preceded Nada, and the claimed birthplace of clear sake at commercial scale.",ja:"灘に先立つ江戸期の酒造町であり、商業規模での清酒発祥を称する地。",zh:"早於灘的江戶時期釀造市鎮，自稱商業規模清酒的發源地。"}],
            [{en:"Kitakata",ja:"喜多方",zh:"喜多方"},"喜多方",{en:"Kitakata, Fukushima",ja:"福島県喜多方市",zh:"福島縣喜多方市"},"2024-12-20",
             {en:"A storehouse town in the Aizu basin.",ja:"会津盆地の蔵の町。",zh:"位於會津盆地的藏之町。"}],
            [{en:"Aomori",ja:"青森",zh:"青森"},"青森",{en:"Aomori Prefecture",ja:"青森県",zh:"青森縣"},"2025-06-20",
             {en:"The northern end of Honshu; Hanaomoi and Mahoroba Shizuku rice.",ja:"本州最北端。華想い、まほろば酒25などの県産米。",zh:"本州最北端；華想、Mahoroba 等縣產米。"}],
            [{en:"Kyoto",ja:"京都",zh:"京都"},"京都",{en:"Kyoto Prefecture",ja:"京都府",zh:"京都府"},"2025-10-01",
             {en:"Includes Fushimi, the second-largest brewing district in Japan by volume.",ja:"日本第二位の生産量をもつ伏見を含む。",zh:"包含伏見——以產量計為日本第二大釀造區。"}],
            [{en:"Tottori",ja:"鳥取",zh:"鳥取"},"鳥取",{en:"Tottori Prefecture",ja:"鳥取県",zh:"鳥取縣"},"2025-10-01",
             {en:"Small, mountainous, and increasingly associated with kimoto and wooden-vat brewing.",ja:"小さく、山がちで、近年は生酛や木桶仕込みとの結びつきが強い。",zh:"面積小、多山，近年與生酛及木桶仕込的連結日益緊密。"}],
            [{en:"Fukuoka",ja:"福岡",zh:"福岡"},"福岡",{en:"Fukuoka Prefecture",ja:"福岡県",zh:"福岡縣"},"2025-10-01",
             {en:"Northern Kyushu; Yamada Nishiki grown at scale outside Hyōgo.",ja:"北部九州。兵庫県外で山田錦を大規模に栽培する地。",zh:"北九州；兵庫以外大規模種植山田錦之地。"}]
          ] },
        { t:"tiny", text:{
          en:"Dates as registered by the National Tax Agency; several standards have been subsequently revised. Alcoholic-beverage GIs also exist for shōchū (Iki, Kuma, Satsuma, Ryūkyū, Tokyo Shima-zake), wine (Yamanashi, Hokkaidō, Yamagata, Nagano, Osaka) and Wakayama umeshu.",
          ja:"日付は国税庁の登録日。その後、基準が改定されたものもある。酒類の地理的表示には、焼酎（壱岐・球磨・薩摩・琉球・東京島酒）、ぶどう酒（山梨・北海道・山形・長野・大阪）、和歌山梅酒もある。",
          zh:"日期為國稅廳註冊日；部分標準其後曾修訂。酒類地理標示尚包含燒酎（壹岐、球磨、薩摩、琉球、東京島酒）、葡萄酒（山梨、北海道、山形、長野、大阪）與和歌山梅酒。" } }
      ]
    },

    { t:"section", id:"limits",
      title:{ en:"What the system does and does not do", ja:"制度の射程", zh:"制度的效力與界線" }, jp:"限界",
      body:[
        { t:"compare", cols:2, items:[
          { title:{en:"What it does",ja:"できること",zh:"它能做到的"},
            body:[
              { t:"ul", items:[
                { en:"Stops a producer outside the district using the district's name.",ja:"域外の造り手がその地名を用いることを止める。",zh:"阻止區外生產者使用該地名。" },
                { en:"Forces a written, public, auditable production standard where none existed.",ja:"存在しなかった製造基準を、成文化し、公開し、監査可能にする。",zh:"在原本沒有標準之處，強制建立成文、公開、可稽核的生產基準。" },
                { en:"Creates a body with a reason to run collective sensory assessment — often the first time a district has tasted itself systematically.",ja:"集団としての官能検査を行う理由をもつ組織をつくる。産地が自らを体系的に利くのは、これが初めてであることが多い。",zh:"催生出一個有理由進行集體感官評鑑的組織——這往往是一個產區首次有系統地品評自身。" },
                { en:"Gives smaller districts a reason to organise at all.",ja:"小さな産地に、そもそも組織化する理由を与える。",zh:"讓較小的產區有了組織起來的理由。" }
              ] }
            ] },
          { title:{en:"What it does not do",ja:"できないこと",zh:"它做不到的"},
            body:[
              { t:"ul", items:[
                { en:"Guarantee quality. A GI sake can be dull; a non-GI sake from the same street can be superb. Many of Japan's most admired breweries do not participate.",ja:"品質を保証すること。GIの酒が凡庸なこともあり、同じ通りの非GIの酒が卓越していることもある。日本で最も評価の高い蔵の多くは参加していない。",zh:"保證品質。GI 酒可能平庸，同一條街上的非 GI 酒可能出色。日本最受推崇的酒藏中，許多並未參與。" },
                { en:"Establish terroir. Most standards regulate ingredients and process, not soil, slope or climate — see <a href=\"terroir.html\">Terroir</a>.",ja:"テロワールを確立すること。多くの基準が定めるのは原料と工程であって、土壌でも斜面でも気候でもない——<a href=\"terroir.html\">風土</a>を参照。",zh:"確立風土。多數標準規範的是原料與製程，而非土壤、坡度或氣候——參見<a href=\"terroir.html\">風土</a>。" },
                { en:"Require single origin of the rice. Most GIs regulate where the sake is brewed far more tightly than where the rice grew.",ja:"米の単一産地を要求すること。多くのGIは、米の産地よりも醸造地をはるかに厳しく定めている。",zh:"要求米的單一產地。多數 GI 對「在何處釀造」的規範，遠比「米產自何處」嚴格。" },
                { en:"Mean much to consumers yet. Recognition outside the trade is low, and there is no equivalent of the familiar European appellation hierarchy.",ja:"消費者に多くを意味すること。業界の外での認知は低く、ヨーロッパの原産地呼称の階層に相当するものも存在しない。",zh:"對消費者產生足夠意義。業界之外的認知度仍低，也沒有相當於歐洲法定產區階層的架構。" }
              ] }
            ] }
        ] }
      ]
    },

{ t:"section", id:"vs-appellation",
      title:{ en:"Compared with a European appellation", ja:"欧州の原産地呼称との比較", zh:"與歐洲原產地名稱制度的比較" }, jp:"制度の比較",
      body:[
        { t:"p", text:{
          en:"Sake GIs borrow the legal machinery of European appellations and use it to protect something different. Setting the two side by side shows what a sake GI can and cannot be.",
          ja:"日本酒の地理的表示は、欧州の原産地呼称の法的な仕組みを借りながら、それを別のものを守るために用いている。二つを並べれば、日本酒のGIが何でありうるか、何ではありえないかが見えてくる。",
          zh:"清酒的地理標示借用了歐洲原產地名稱制度的法律機制，卻用它來保護不同的東西。把兩者並置，便能看出清酒 GI 能是什麼、又不能是什麼。" } },
        { t:"table",
          cols:["",{en:"European appellation",ja:"欧州の原産地呼称",zh:"歐洲原產地名稱"},{en:"Japanese sake GI",ja:"日本酒の地理的表示",zh:"日本清酒 GI"}],
          rows:[
            [{en:"What is bounded",ja:"何が区切られるか",zh:"劃定的對象"},
             {en:"The vineyard. The grapes must be grown inside the line, and often on named parcels within it.",ja:"畑である。葡萄はその線の内側で、しばしば名のある区画で栽培されねばならない。",zh:"葡萄園。葡萄必須種在界線之內，且常需種於其中具名的地塊。"},
             {en:"The brewery. The steps that define character must happen inside the line; the rice frequently comes from elsewhere in Japan.",ja:"蔵である。酒質を定める工程が線の内側で行われねばならない。米は日本の他所から来ることも多い。",zh:"酒藏。決定酒質的工序必須在界線內完成；米則常來自日本其他地方。"}],
            [{en:"Grape or rice variety",ja:"品種の指定",zh:"品種指定"},
             {en:"Usually strictly prescribed — a list of permitted varieties, sometimes one.",ja:"多くは厳密に定められる。許される品種の一覧があり、一品種のみのこともある。",zh:"通常有嚴格規定——列出許可品種，有時只准一種。"},
             {en:"Rarely prescribed by variety. Most GIs require Japanese rice and some require local rice, but few name the variety.",ja:"品種で定めることはまれである。多くのGIは国産米を求め、一部は地元産を求めるが、品種名まで指定するものは少ない。",zh:"鮮少以品種規定。多數 GI 要求使用國產米，部分要求在地米，但少有指名品種者。"}],
            [{en:"Yield limits",ja:"収量制限",zh:"產量限制"},
             {en:"Central. Hectolitres per hectare is one of the main quality levers.",ja:"中心的である。ヘクタールあたりの収量は主要な品質のてこの一つである。",zh:"居於核心。每公頃公石數是主要的品質槓桿之一。"},
             {en:"Absent. There is no equivalent concept, because the rice is bought rather than grown by the producer.",ja:"存在しない。米は造り手が育てるのではなく買うものであるため、対応する概念がない。",zh:"不存在。由於米是購入而非由生產者栽種，並無對應概念。"}],
            [{en:"Method rules",ja:"製法の規定",zh:"製法規定"},
             {en:"Detailed and sometimes ancient — pressing, ageing, minimum alcohol, permitted additions.",ja:"詳細であり、時に古い——圧搾、熟成、最低アルコール分、許される添加物。",zh:"詳細且有時相當古老——壓榨、陳放、最低酒精度、許可添加物。"},
             {en:"Detailed and modern. Usually requires seishu status, often a designated category, sometimes junmai only.",ja:"詳細で、そして現代的である。清酒であることを求め、しばしば特定名称を、時に純米のみを要求する。",zh:"詳細且現代。通常要求符合清酒資格，常指定特定名稱，有時僅限純米。"}],
            [{en:"Sensory approval",ja:"官能検査",zh:"感官審查"},
             {en:"Present in most systems, and often perfunctory in practice.",ja:"多くの制度に存在するが、実務上は形式的であることも多い。",zh:"多數制度中皆有，但實務上常流於形式。"},
             {en:"Present and taken seriously: a blind panel can reject a sake that meets every written rule.",ja:"存在し、真剣に扱われる。書かれた規定をすべて満たした酒でも、ブラインドの審査で不合格になりうる。",zh:"存在且受到認真對待：即使符合所有書面規定，仍可能在盲測小組中被否決。"}],
            [{en:"Age of the system",ja:"制度の年齢",zh:"制度年資"},
             {en:"A century old, built on centuries of custom.",ja:"一世紀の歴史をもち、何世紀もの慣習の上に築かれている。",zh:"已有一世紀歷史，並建立在數世紀的慣例之上。"},
             {en:"The framework dates from 1994 and the first sake GI from 2005; most were registered after 2016. It is a young system still deciding what it is for.",ja:"枠組みは一九九四年、最初の清酒のGIは二〇〇五年に遡り、その多くは二〇一六年以降の登録である。何のための制度かをなお定めつつある、若い仕組みである。",zh:"框架始於 1994 年，第一個清酒 GI 為 2005 年，多數則在 2016 年之後登錄。這是一套仍在確認自身用途的年輕制度。"}]
          ] }
      ]
    },

    { t:"section", id:"enforcement",
      title:{ en:"What protection actually buys", ja:"保護が実際にもたらすもの", zh:"保護實際帶來什麼" }, jp:"実効性",
      body:[
        { t:"ul", items:[
          { en:"<strong>Inside Japan, a legal monopoly on the name.</strong> Only sake meeting the standard may use the GI on a label, and misuse is an offence under the Liquor Business Association Act. This is real and it is enforced.",
            ja:"<strong>日本国内では、名称の法的な独占である。</strong>基準を満たした酒だけが酒標にGIを用いることができ、その濫用は酒類業組合法上の違反となる。これは実在し、執行されている。",
            zh:"<strong>在日本境內，這是對名稱的法律獨占。</strong>唯有符合標準的酒才能在酒標上使用該 GI，濫用即構成《酒類業組合法》上的違法行為。這是真實存在且會被執行的。" },
          { en:"<strong>Abroad, protection follows trade agreements.</strong> The EU–Japan Economic Partnership Agreement, in force since 2019, includes mutual recognition of geographical indications, which is why Japanese sake GIs are protected across the European Union and European names are protected in Japan. Other markets are covered patchily or not at all.",
            ja:"<strong>海外では、保護は通商協定に従う。</strong>二〇一九年に発効した日EU経済連携協定は地理的表示の相互承認を含み、日本酒のGIが欧州連合の全域で保護され、欧州の名称が日本で保護されるのはそのためである。他の市場での保護はまだらであるか、まったく存在しない。",
            zh:"<strong>在海外，保護取決於貿易協定。</strong>2019 年生效的日歐經濟夥伴協定納入了地理標示的相互承認，因此日本清酒的 GI 在整個歐盟受到保護，歐洲的名稱在日本亦然。其他市場的保護則零散，甚至完全沒有。" },
          { en:"<strong>Nothing about quality is guaranteed.</strong> A GI certifies origin and method, and a blind panel checks for faults. It does not certify that the sake is good, and there are excellent sake made a hundred metres outside a GI boundary by breweries who never applied.",
            ja:"<strong>品質については何も保証されない。</strong>GIが証するのは産地と製法であり、ブラインドの審査が確かめるのは欠点の有無である。その酒が良いことを証するものではない。GIの境界の百メートル外で、申請もしなかった蔵が造る優れた酒は存在する。",
            zh:"<strong>品質完全不受保證。</strong>GI 證明的是產地與製法，盲測小組檢查的是有無缺陷。它並不證明這款酒好喝；在 GI 邊界外一百公尺處，也有從未申請的酒藏釀出絕佳的酒。" },
          { en:"<strong>The main practical value is a shared story.</strong> A GI gives a group of breweries in one district a reason to meet, a common standard to argue about, and a single name to put in front of a foreign buyer. Several of the newer GIs were driven as much by that as by any legal need.",
            ja:"<strong>実際の価値の中心は、共有された物語である。</strong>GIは、一つの土地の蔵に、集まる理由と、議論すべき共通の基準と、海外の買い手の前に置く一つの名を与える。新しいGIのいくつかは、法的な必要と同じくらい、その動機によって進められた。",
            zh:"<strong>主要的實務價值是一個共有的故事。</strong>GI 給予同一地區的酒藏一個聚會的理由、一套可供爭論的共同標準，以及一個可以擺在外國買家面前的名字。若干較新的 GI，其推動力來自這一點的程度，不亞於任何法律上的需要。" }
        ] },
        { t:"note", label:{en:"Why a great brewery might not have one",ja:"優れた蔵がGIを持たない理由",zh:"優秀酒藏為何可能沒有 GI"}, text:{
          en:"Applying costs money and time, the standard is set collectively so it constrains what a member may make, and a brewery with an established brand gains nothing from adding a district name most buyers have never heard of. Several of the most admired houses in Japan sit inside a GI area and do not use it. Absence of a GI on a label carries no information at all.",
          ja:"申請には費用と時間がかかり、基準は共同で定められるため、加盟する蔵が造れるものを縛る。そして確立した銘柄をもつ蔵にとって、買い手のほとんどが聞いたこともない地区名を足すことに利はない。日本で最も評価の高い蔵のいくつかは、GIの区域内にありながらそれを用いていない。酒標にGIがないことは、何の情報も持たない。",
          zh:"申請耗費金錢與時間，標準是集體制定的，因而限制了會員能釀什麼；而對已有穩固品牌的酒藏而言，加上一個多數買家從未聽過的地區名毫無好處。日本若干最受推崇的酒藏就位於某個 GI 區域內，卻不使用它。酒標上沒有 GI，不代表任何訊息。" } }
      ]
    },

{ t:"section", id:"full-list",
      title:{ en:"Every sake GI, in order of designation", ja:"清酒の地理的表示、指定順", zh:"所有清酒 GI，依指定順序" }, jp:"一覧",
      body:[
        { t:"p", text:{
          en:"The list below is the National Tax Agency's register of designated geographical indications for <em>seishu</em>, in the order they were granted. It is worth reading as a chronology rather than as a directory: nothing happened for a decade after the first designation, then the pace accelerated sharply after 2020, and the recent entries are overwhelmingly whole prefectures rather than single towns. That shift is the story of the scheme.",
          ja:"以下は国税庁による清酒の地理的表示の登録であり、指定された順に並べてある。名簿としてよりも年代記として読む値打ちがある——最初の指定ののち十年は何も起こらず、二〇二〇年以降に歩みが急に速まり、近年の登録は圧倒的に、一つの町ではなく県全体である。この移り変わりこそが、この制度の物語である。",
          zh:"以下是國稅廳所登記的清酒地理標示，依核准先後排列。與其當成名錄，不如當成一份編年史來讀：第一件指定之後十年毫無動靜，二〇二〇年以後步調陡然加快，而近年的登錄壓倒性地是整個縣，而非單一城鎮。這個轉變，正是這套制度的故事。" } },

        { t:"table",
          caption:{ en:"Designated GIs for seishu, as registered by the National Tax Agency (March 2026)",
            ja:"清酒の地理的表示・国税庁登録（2026年3月時点）",
            zh:"清酒地理標示・國稅廳登錄（2026 年 3 月時點）" },
          cols:[{en:"GI",ja:"名称",zh:"名稱"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Area",ja:"範囲",zh:"範圍"},{en:"Designated",ja:"指定",zh:"指定日"}],
          jpCols:[1],
          rows:[
            [{en:"Hakusan",ja:"白山",zh:"白山"},"白山",{en:"Hakusan city, Ishikawa",ja:"石川県白山市",zh:"石川縣白山市"},{en:"22 Dec 2005",ja:"2005年12月22日",zh:"2005年12月22日"}],
            [{en:"Nihonshu",ja:"日本酒",zh:"日本酒"},"日本酒",{en:"All of Japan",ja:"日本全国",zh:"日本全國"},{en:"25 Dec 2015",ja:"2015年12月25日",zh:"2015年12月25日"}],
            [{en:"Yamagata",ja:"山形",zh:"山形"},"山形",{en:"Yamagata prefecture",ja:"山形県",zh:"山形縣"},{en:"16 Dec 2016",ja:"2016年12月16日",zh:"2016年12月16日"}],
            [{en:"Nada Gogō",ja:"灘五郷",zh:"灘五鄉"},"灘五郷",{en:"Kōbe, Nishinomiya and Ashiya, Hyōgo",ja:"兵庫県神戸・西宮・芦屋",zh:"兵庫縣神戶、西宮、蘆屋"},{en:"28 Jun 2018",ja:"2018年6月28日",zh:"2018年6月28日"}],
            [{en:"Harima",ja:"はりま",zh:"播磨"},"はりま",{en:"The Harima region, Hyōgo",ja:"兵庫県播磨地域",zh:"兵庫縣播磨地區"},{en:"16 Mar 2020",ja:"2020年3月16日",zh:"2020年3月16日"}],
            [{en:"Mie",ja:"三重",zh:"三重"},"三重",{en:"Mie prefecture",ja:"三重県",zh:"三重縣"},{en:"19 Jun 2020",ja:"2020年6月19日",zh:"2020年6月19日"}],
            [{en:"Tone-Numata",ja:"利根沼田",zh:"利根沼田"},"利根沼田",{en:"Numata and district, Gunma",ja:"群馬県沼田市ほか",zh:"群馬縣沼田市等"},{en:"22 Jan 2021",ja:"2021年1月22日",zh:"2021年1月22日"}],
            [{en:"Hagi",ja:"萩",zh:"萩"},"萩",{en:"Hagi city and Abu, Yamaguchi",ja:"山口県萩市・阿武町",zh:"山口縣萩市、阿武町"},{en:"30 Mar 2021",ja:"2021年3月30日",zh:"2021年3月30日"}],
            [{en:"Yamanashi",ja:"山梨",zh:"山梨"},"山梨",{en:"Yamanashi prefecture",ja:"山梨県",zh:"山梨縣"},{en:"28 Apr 2021",ja:"2021年4月28日",zh:"2021年4月28日"}],
            [{en:"Saga",ja:"佐賀",zh:"佐賀"},"佐賀",{en:"Saga prefecture",ja:"佐賀県",zh:"佐賀縣"},{en:"14 Jun 2021",ja:"2021年6月14日",zh:"2021年6月14日"}],
            [{en:"Nagano",ja:"長野",zh:"長野"},"長野",{en:"Nagano prefecture",ja:"長野県",zh:"長野縣"},{en:"30 Jun 2021",ja:"2021年6月30日",zh:"2021年6月30日"}],
            [{en:"Niigata",ja:"新潟",zh:"新潟"},"新潟",{en:"Niigata prefecture",ja:"新潟県",zh:"新潟縣"},{en:"7 Feb 2022",ja:"2022年2月7日",zh:"2022年2月7日"}],
            [{en:"Shiga",ja:"滋賀",zh:"滋賀"},"滋賀",{en:"Shiga prefecture",ja:"滋賀県",zh:"滋賀縣"},{en:"13 Apr 2022",ja:"2022年4月13日",zh:"2022年4月13日"}],
            [{en:"Shinano-Ōmachi",ja:"信濃大町",zh:"信濃大町"},"信濃大町",{en:"Ōmachi city, Nagano",ja:"長野県大町市",zh:"長野縣大町市"},{en:"30 Jun 2023",ja:"2023年6月30日",zh:"2023年6月30日"}],
            [{en:"Iwate",ja:"岩手",zh:"岩手"},"岩手",{en:"Iwate prefecture",ja:"岩手県",zh:"岩手縣"},{en:"25 Sep 2023",ja:"2023年9月25日",zh:"2023年9月25日"}],
            [{en:"Shizuoka",ja:"静岡",zh:"靜岡"},"静岡",{en:"Shizuoka prefecture",ja:"静岡県",zh:"靜岡縣"},{en:"30 Nov 2023",ja:"2023年11月30日",zh:"2023年11月30日"}],
            [{en:"Minami-Aizu",ja:"南会津",zh:"南會津"},"南会津",{en:"Minami-Aizu, Fukushima",ja:"福島県南会津",zh:"福島縣南會津"},{en:"30 Aug 2024",ja:"2024年8月30日",zh:"2024年8月30日"}],
            [{en:"Itami",ja:"伊丹",zh:"伊丹"},"伊丹",{en:"Itami city, Hyōgo",ja:"兵庫県伊丹市",zh:"兵庫縣伊丹市"},{en:"29 Nov 2024",ja:"2024年11月29日",zh:"2024年11月29日"}],
            [{en:"Kitakata",ja:"喜多方",zh:"喜多方"},"喜多方",{en:"Kitakata city, Fukushima",ja:"福島県喜多方市",zh:"福島縣喜多方市"},{en:"20 Dec 2024",ja:"2024年12月20日",zh:"2024年12月20日"}],
            [{en:"Aomori",ja:"青森",zh:"青森"},"青森",{en:"Aomori prefecture",ja:"青森県",zh:"青森縣"},{en:"20 Jun 2025",ja:"2025年6月20日",zh:"2025年6月20日"}],
            [{en:"Kyōto",ja:"京都",zh:"京都"},"京都",{en:"Kyoto prefecture",ja:"京都府",zh:"京都府"},{en:"1 Oct 2025",ja:"2025年10月1日",zh:"2025年10月1日"}],
            [{en:"Tottori",ja:"鳥取",zh:"鳥取"},"鳥取",{en:"Tottori prefecture",ja:"鳥取県",zh:"鳥取縣"},{en:"1 Oct 2025",ja:"2025年10月1日",zh:"2025年10月1日"}],
            [{en:"Fukuoka",ja:"福岡",zh:"福岡"},"福岡",{en:"Fukuoka prefecture",ja:"福岡県",zh:"福岡縣"},{en:"1 Oct 2025",ja:"2025年10月1日",zh:"2025年10月1日"}]
          ] },

        { t:"note", text:{
          en:"Registrations are revised as well as granted — the Hakusan and Nada Gogō standards have both been amended since designation — and new designations continue to arrive. Treat the list as current to the NTA's March 2026 register and check the agency's published list for anything later.",
          ja:"登録は与えられるだけでなく改正もされる——白山と灘五郷の基準はいずれも指定後に改められている——そして新たな指定は今も続いている。この一覧は国税庁の2026年3月時点の登録に基づくものとして扱い、それ以降については同庁の公表一覧を確かめられたい。",
          zh:"登錄不只會核准，也會修訂——白山與灘五鄉的標準在指定後都曾修改——而新的指定仍持續出現。請將此表視為國稅廳 2026 年 3 月登錄的現況，之後的變動請查閱該廳公布的清單。" } }
      ] },

    { t:"section", id:"other-categories",
      title:{ en:"The other drinks in the register", ja:"登録にある他の酒", zh:"登錄中的其他酒類" }, jp:"清酒以外",
      body:[
        { t:"p", text:{
          en:"Sake is not the only category the scheme covers, and the other entries are useful context — particularly the shōchū GIs, which are far older and were the model.",
          ja:"この制度が及ぶのは清酒だけではない。他の登録は有用な文脈を与える。とりわけ焼酎の地理的表示ははるかに古く、そしてその範型であった。",
          zh:"這套制度涵蓋的不只清酒，其他登錄項目提供了有用的脈絡——尤其是燒酎的地理標示，它們歷史久遠得多，而且正是後來的範本。" } },

        { t:"table",
          cols:[{en:"GI",ja:"名称",zh:"名稱"},{en:"Category",ja:"品目",zh:"品目"},{en:"Designated",ja:"指定",zh:"指定"},{en:"Note",ja:"備考",zh:"備註"}],
          rows:[
            [{en:"Iki",ja:"壱岐",zh:"壹岐"},{en:"Barley shōchū",ja:"麦焼酎",zh:"麥燒酎"},{en:"30 Jun 1995",ja:"1995年6月30日",zh:"1995年6月30日"},
             {en:"One of the three founding designations of 1995, all of them shōchū and awamori. Japan's GI system for drinks begins here, a full decade before any sake was registered.",
              ja:"1995年の三つの最初の指定の一つであり、いずれも焼酎と泡盛である。日本の酒類の地理的表示制度はここに始まる。清酒の登録より丸十年早い。",
              zh:"一九九五年三件創始指定之一，全都是燒酎與泡盛。日本酒類的地理標示制度自此開始，比任何清酒的登錄早了整整十年。"}],
            [{en:"Kuma",ja:"球磨",zh:"球磨"},{en:"Rice shōchū",ja:"米焼酎",zh:"米燒酎"},{en:"30 Jun 1995",ja:"1995年6月30日",zh:"1995年6月30日"},
             {en:"Kumamoto. Rice shōchū made in the Kuma river basin — a rice spirit, and therefore the closest relation to sake in the register.",
              ja:"熊本。球磨川流域で造られる米焼酎であり、それゆえ登録のうちで清酒に最も近い縁者である。",
              zh:"熊本。於球磨川流域釀造的米燒酎——一種以米為原料的蒸餾酒，因此是登錄中與清酒血緣最近的一員。"}],
            [{en:"Ryūkyū",ja:"琉球",zh:"琉球"},{en:"Awamori",ja:"泡盛",zh:"泡盛"},{en:"30 Jun 1995",ja:"1995年6月30日",zh:"1995年6月30日"},
             {en:"Okinawa. Made with black kōji on whole long-grain Thai rice, and by a single-stage rather than parallel fermentation — a genuinely different tradition that shares only the mould.",
              ja:"沖縄。黒麹を用い、タイ産の長粒米を全量麹にし、並行複発酵ではなく全麹仕込みで醸す。麹だけを共有する、まことに別の伝統である。",
              zh:"沖繩。以黑麴、泰國長粒米全量製麴，並採單段而非並行複發酵——這是一個只共享「麴」的、真正不同的傳統。"}],
            [{en:"Satsuma",ja:"薩摩",zh:"薩摩"},{en:"Sweet-potato shōchū",ja:"芋焼酎",zh:"芋燒酎"},{en:"22 Dec 2005",ja:"2005年12月22日",zh:"2005年12月22日"},
             {en:"Kagoshima. Designated on the same day as Hakusan, the first sake GI — the two categories entered the modern scheme together.",
              ja:"鹿児島。最初の清酒の地理的表示である白山と同日の指定であり、二つの区分は同時に現代の制度へ入った。",
              zh:"鹿兒島。與第一個清酒 GI「白山」同日指定——這兩個類別是一起進入現代制度的。"}],
            [{en:"Tōkyō Shima-zake",ja:"東京島酒",zh:"東京島酒"},{en:"Shōchū",ja:"焼酎",zh:"燒酎"},{en:"13 Mar 2024",ja:"2024年3月13日",zh:"2024年3月13日"},
             {en:"The Izu islands. A reminder that the scheme is still adding categories as well as places.",
              ja:"伊豆諸島。この制度が場所だけでなく区分をも今なお加えつつあることの証しである。",
              zh:"伊豆群島。這提醒我們：這套制度至今仍在增加的不只是地方，還有類別。"}],
            [{en:"Wakayama Umeshu",ja:"和歌山梅酒",zh:"和歌山梅酒"},{en:"Other liquors",ja:"その他の酒類",zh:"其他酒類"},{en:"7 Sep 2020",ja:"2020年9月7日",zh:"2020年9月7日"},
             {en:"Plum liqueur made in Wakayama from Wakayama plums. The only entry in its category, and the clearest case of a GI protecting an agricultural product through the drink made from it.",
              ja:"和歌山産の梅を用い和歌山で造られる梅酒である。その区分で唯一の登録であり、地理的表示が、そこから造られる酒を通じて農産物を守る最も明快な例である。",
              zh:"以和歌山產的梅、在和歌山釀造的梅酒。它是該類別中唯一的登錄，也是「地理標示透過所釀之酒來保護農產品」最清楚的例子。"}],
            [{en:"Yamanashi, Hokkaidō, Nagano, Yamagata, Ōsaka",ja:"山梨・北海道・長野・山形・大阪",zh:"山梨、北海道、長野、山形、大阪"},{en:"Wine",ja:"ぶどう酒",zh:"葡萄酒"},{en:"2013–2021",ja:"2013〜2021年",zh:"2013–2021年"},
             {en:"Japan's wine GIs. Several prefectures now hold a GI for both wine and sake — Yamagata, Yamanashi and Nagano among them — which makes them a natural laboratory for comparing how the two industries use the same instrument.",
              ja:"日本のワインの地理的表示である。いくつかの県は今やワインと清酒の双方で地理的表示を持つ——山形、山梨、長野など——ゆえに、二つの産業が同じ制度をどう使うかを比べる自然の実験室となっている。",
              zh:"日本的葡萄酒地理標示。有數個縣如今同時持有葡萄酒與清酒的 GI——山形、山梨、長野等——因而成為比較兩個產業如何運用同一套工具的天然實驗室。"}]
          ] },

        { t:"p", text:{
          en:"Two structural observations follow from the table as a whole. First, the accelerating pace after 2020 is not a coincidence: it follows both the pandemic collapse in domestic sales, which made export and differentiation urgent, and a National Tax Agency that actively encouraged prefectural applications. Second, a prefecture-wide GI is a much weaker geographical claim than a town-wide one — Niigata and Nagano are large and geologically varied — and the scheme has therefore drifted from certifying a place toward certifying an administratively agreed standard. Whether that is a dilution or a sensible adaptation to how sake is actually made is the live argument about the system.",
          ja:"表全体から二つの構造的な観察が導かれる。第一に、二〇二〇年以降の加速は偶然ではない。それは、輸出と差別化を切迫させた国内需要のパンデミックによる崩落と、県からの申請を積極的に促した国税庁の双方に続いている。第二に、県全域の地理的表示は町単位のそれよりはるかに弱い地理の主張である——新潟も長野も広く、地質的にも多様である——ゆえに制度は、場所を証することから、行政的に合意された基準を証することへと漂流してきた。それが希釈であるのか、日本酒が実際に造られる仕方への賢明な適応であるのかが、この制度をめぐる現在の争点である。",
          zh:"從整張表可以導出兩點結構性觀察。第一，二〇二〇年後的加速並非偶然：它同時跟隨著疫情造成的國內銷售崩跌——這讓出口與差異化變得迫切——以及積極鼓勵各縣提出申請的國稅廳。第二，全縣範圍的 GI 是比全鎮範圍弱得多的地理主張——新潟與長野幅員遼闊、地質多樣——因此這套制度已從「證明一個地方」漂移為「證明一套行政上議定的標準」。這究竟是稀釋，還是對清酒實際釀造方式的合理調適，正是關於這套制度的當前爭論。" } }
      ] },

    { t:"related", items:[
      { href:"terroir.html", why:{ en:"What a geographical indication is trying to protect.", ja:"地理的表示が守ろうとしているもの。", zh:"地理標示究竟想保護什麼。" } },
      { href:"standards.html", why:{ en:"The legal instrument itself, and who administers it.", ja:"法の道具そのものと、それを司る者。", zh:"這項法律工具本身，以及由誰主管。" } },
      { href:"regions.html", why:{ en:"The prefectures, designated and not.", ja:"指定された県と、されていない県。", zh:"被指定的縣，與沒有被指定的縣。" } },
      { href:"future.html", why:{ en:"Whether the mark will be enforced or stay decorative.", ja:"この印が執行されるのか、飾りに留まるのか。", zh:"這個標記會被執行，還是只是裝飾。" } }
    ] }
  ]
};


/* ---- ------------------------------------------- breweries */
SAKE.pages["breweries"] = {
  kicker: { en: "Place · 10", ja: "産地 · 10", zh: "產地 · 10" },
  title:  { en: "Breweries & Brands", ja: "蔵元と銘柄", zh: "酒藏與品牌" },
  jp: "蔵元 · 銘柄",
  lede: {
    en: "About 1,100 breweries are still brewing in a given year, down from over four thousand in 1970. Between the five industrial houses that make most of the volume and the single-family kura making three hundred bottles of one label, they have almost nothing in common except the law. This page sorts them: the very old, the very large, and the ones that changed what sake is expected to be.",
    ja: "実際に製造している蔵は年におよそ千百。一九七〇年には四千を超えていた。数量の大半を担う五つの工業的な蔵と、一つの銘柄を三百本だけ造る家族の蔵とのあいだには、法令以外にほとんど共通点がない。本頁はそれらを整理する——極めて古い蔵、極めて大きい蔵、そして日本酒に期待されるものを変えた蔵。",
    zh: "每年仍在釀造的酒藏約有 1,100 家，遠低於 1970 年的四千餘家。承擔多數產量的五家工業級酒藏，與只釀三百瓶單一品牌的家族酒藏之間，除了法律之外幾無共通之處。本頁加以整理：極古老者、極大者，以及那些改變了「日本酒該是什麼」的酒藏。"
  },
  body: [
    { t:"section", id:"oldest",
      title:{ en:"The oldest", ja:"最も古い蔵", zh:"最古老者" }, jp:"老舗",
      body:[
        { t:"p", text:{
          en:"Japan has an unusual density of very old companies, and sake breweries are among the oldest of them. These are family businesses that have passed through the Kamakura shogunate, the Sengoku wars, the Meiji Restoration, two world wars and the post-war collapse of the market, and are still brewing.",
          ja:"日本には極めて古い企業が異例の密度で存在し、酒蔵はそのなかでも最も古い部類に属する。鎌倉幕府、戦国の戦乱、明治維新、二度の世界大戦、そして戦後の市場の崩壊をくぐり抜け、いまも酒を造り続けている家業である。",
          zh:"日本擁有異常密集的超高齡企業，而酒藏正是其中最古老的一群。這些家族事業歷經鎌倉幕府、戰國亂世、明治維新、兩次世界大戰與戰後市場崩壞，至今仍在釀酒。" } },
        { t:"table",
          cols:[{en:"Brewery",ja:"蔵",zh:"酒藏"},{en:"Founded",ja:"創業",zh:"創業"},{en:"Where",ja:"所在",zh:"所在"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[1],
          rows:[
            ["須藤本家 Sudō Honke","1141",{en:"Ibaraki",ja:"茨城",zh:"茨城"},
             {en:"Fifty-five generations of one family and one of the oldest continuously operating businesses in the world. The estate's oak grove is protected — the family motto holds that sake, rice, water and trees are one thing. Brand: 郷乃譽.",ja:"一家五十五代にわたり、世界で最も長く続く企業の一つ。屋敷林の樫は保護されている——酒・米・水・木は一体である、という家訓による。銘柄は郷乃譽。",zh:"同一家族傳承五十五代，是世上持續營運最久的企業之一。宅邸的橡樹林受到保護——家訓認為酒、米、水、樹本為一體。品牌：鄉乃譽。"}],
            ["飛良泉本舗 Hiraizumi Honpo","1487",{en:"Akita",ja:"秋田",zh:"秋田"},
             {en:"A Sea of Japan port brewery, and one of the strongholds of yamahai in Tōhoku.",ja:"日本海の港町の蔵であり、東北における山廃の拠点の一つ。",zh:"日本海港町的酒藏，也是東北山廢工法的據點之一。"}],
            ["剣菱酒造 Kenbishi","1505",{en:"Hyōgo — Nada",ja:"兵庫・灘",zh:"兵庫・灘"},
             {en:"Publishes no milling ratios and enters no competitions, on the stated grounds that consistency of taste, not specification, is the product. Uses only its own wooden tools and its own coopers.",ja:"精米歩合を公表せず、鑑評会にも出さない。製品とは規格ではなく味の一貫性である、という立場を明言している。道具はすべて自社の木製で、桶職人も自前である。",zh:"不公布精米步合、不參加評鑑會，明言其產品是「味道的一致性」而非規格。所有器具皆為自製木器，並自養桶匠。"}],
            ["山路酒造 Yamaji","1532",{en:"Shiga",ja:"滋賀",zh:"滋賀"},
             {en:"A tiny house in northern Shiga, still family-run.",ja:"滋賀県北部の極小の蔵。今も家族経営。",zh:"位於滋賀北部的極小型酒藏，至今仍為家族經營。"}],
            ["吉乃川 Yoshinogawa","1548",{en:"Niigata",ja:"新潟",zh:"新潟"},
             {en:"The oldest brewery in Niigata, the prefecture with the most breweries in Japan.",ja:"蔵の数が全国最多の新潟県における、最も古い蔵。",zh:"位於酒藏數量全國最多的新潟縣，是該縣最古老的酒藏。"}],
            ["小西酒造 Konishi","1550",{en:"Hyōgo — Itami",ja:"兵庫・伊丹",zh:"兵庫・伊丹"},
             {en:"Of Itami, the brewing town that preceded Nada. Brand: 白雪.",ja:"灘に先立つ酒造町、伊丹の蔵。銘柄は白雪。",zh:"位於早於灘的釀造市鎮伊丹。品牌：白雪。"}],
            ["櫻正宗 Sakura Masamune","1625",{en:"Hyōgo — Nada",ja:"兵庫・灘",zh:"兵庫・灘"},
             {en:"The house that identified miyamizu in 1840 and supplied the yeast that became Kyōkai No. 1. Two of the most consequential events in sake's technical history happened here.",ja:"一八四〇年に宮水を見出し、きょうかい一号となる酵母を提供した蔵。日本酒の技術史における最も重大な出来事のうち二つが、ここで起きた。",zh:"1840 年辨識出宮水，並提供了後來成為協會一號的酵母。日本酒技術史上最關鍵的兩件事，都發生於此。"}],
            ["月桂冠 Gekkeikan","1637",{en:"Kyoto — Fushimi",ja:"京都・伏見",zh:"京都・伏見"},
             {en:"Founded as a small Fushimi shop; now one of the largest sake companies in the world, with a research laboratory and a brewery in California operating since 1989.",ja:"伏見の小さな店として創業し、いまや世界最大級の清酒企業。研究所をもち、一九八九年からカリフォルニアでも醸造している。",zh:"以伏見的一家小店起家，如今是世上最大的清酒企業之一，擁有研究所，並自 1989 年起在加州設廠釀造。"}]
          ] }
      ]
    },

    { t:"section", id:"largest",
      title:{ en:"The largest", ja:"最も大きい蔵", zh:"規模最大者" }, jp:"大手",
      body:[
        { t:"p", text:{
          en:"Five companies, four of them in Hyōgo and Kyoto, account for a substantial share of all sake sold in Japan. Their business is mostly futsūshu in cartons and large bottles for supermarkets, and they are almost invisible in specialist bars and export markets — an inversion that surprises most people coming to sake from wine.",
          ja:"五社——うち四社は兵庫と京都にある——が、日本で売られる清酒の相当な割合を占める。その事業の中心は、スーパーマーケット向けの紙パックと大瓶の普通酒であり、専門店や輸出市場ではほとんど姿を見せない。ワインから日本酒に来た人の多くが驚く逆転である。",
          zh:"五家公司——其中四家位於兵庫與京都——占據日本清酒銷售的相當比例。其主力業務是供應超市的紙盒裝與大瓶普通酒，在專賣酒吧與出口市場中卻幾乎不見蹤影——這種倒置往往令從葡萄酒轉來的人感到意外。" } },
        { t:"table",
          cols:[{en:"Company",ja:"社名",zh:"公司"},{en:"Founded",ja:"創業",zh:"創業"},{en:"Base",ja:"本拠",zh:"據點"},{en:"Note",ja:"備考",zh:"備註"}],
          numCols:[1],
          rows:[
            ["白鶴酒造 Hakutsuru","1743",{en:"Nada, Hyōgo",ja:"兵庫・灘",zh:"兵庫・灘"},
             {en:"The largest sake company in Japan by sales. Also runs its own rice-breeding programme and revived the extinct Yamada-ho variety.",ja:"売上高で国内最大の清酒企業。自社で酒米の育種も行い、絶えていた山田穂を復活させた。",zh:"以營業額計為日本最大的清酒企業。亦自行進行酒米育種，並復育了已絕跡的山田穗。"}],
            ["月桂冠 Gekkeikan","1637",{en:"Fushimi, Kyoto",ja:"京都・伏見",zh:"京都・伏見"},
             {en:"Second by sales; the most internationally recognised sake name and the operator of the oldest overseas sake brewery of scale.",ja:"売上高で第二位。国際的に最も知られた清酒の名であり、規模のある最古の海外醸造所を運営する。",zh:"營業額第二；國際上知名度最高的清酒名字，並經營歷史最悠久的具規模海外酒廠。"}],
            ["宝酒造 Takara","1842",{en:"Kyoto",ja:"京都",zh:"京都"},
             {en:"A diversified drinks group — shōchū, mirin, chūhai, seasonings — with 松竹梅 as its sake brand.",ja:"焼酎・みりん・チューハイ・調味料まで手がける総合酒類企業。清酒銘柄は松竹梅。",zh:"多角化的酒類集團——燒酎、味醂、調酒、調味料——清酒品牌為松竹梅。"}],
            ["大関 Ōzeki","1711",{en:"Nishinomiya, Hyōgo",ja:"兵庫・西宮",zh:"兵庫・西宮"},
             {en:"Invented the <em>one-cup</em> single-serve glass in 1964, which changed how sake was sold in Japan more than any product before or since.",ja:"一九六四年にワンカップを発明した。日本における清酒の売られ方を、前後のどの製品よりも大きく変えた。",zh:"1964 年發明單杯裝（One Cup），對日本清酒銷售方式的改變，超過此前此後任何一項產品。"}],
            ["日本盛 Nihon Sakari","1889",{en:"Nishinomiya, Hyōgo",ja:"兵庫・西宮",zh:"兵庫・西宮"},
             {en:"Another Nada-district major, with a significant cosmetics business derived from sake lees and kōji.",ja:"灘のもう一つの大手。酒粕と麹に由来する化粧品事業も大きい。",zh:"灘地區另一家大廠，並擁有源自酒粕與米麴的可觀化妝品事業。"}],
            ["菊正宗 Kiku-Masamune","1659",{en:"Nada, Hyōgo",ja:"兵庫・灘",zh:"兵庫・灘"},
             {en:"Large, old, and unusually committed to dry kimoto honjōzō as its core product rather than as a specialty.",ja:"大きく、古く、そして辛口の生酛本醸造を、特別な商品ではなく主力として据えている点で異例である。",zh:"規模大、歷史久，且異乎尋常地以辛口生酛本釀造作為主力產品，而非特殊品項。"}]
          ] }
      ]
    },

    { t:"section", id:"modern",
      title:{ en:"Houses that changed the argument", ja:"議論を変えた蔵", zh:"改變了論述的酒藏" }, jp:"現代",
      body:[
        { t:"p", text:{
          en:"A short list of breweries whose influence exceeds their size — each of which made a case, in bottles, that the rest of the industry then had to answer.",
          ja:"規模を超えた影響力をもつ蔵の短い一覧。いずれも、瓶をもって一つの主張を示し、業界の他が答えざるを得なくなった蔵である。",
          zh:"以下是一份影響力遠超其規模的酒藏名單——每一家都以瓶中之物提出了一個主張，迫使業界其餘者必須回應。" } },
        { t:"defs", items:[
          { term:{en:"Aramasa",ja:"新政",zh:"新政"}, jp:"新政酒造 · 秋田 · 1852",
            def:{en:"The brewery from which Kyōkai No. 6 was isolated in 1930. Since Satō Yūsuke took over in 2007 it has eliminated added alcohol, added lactic acid, purchased yeast other than No. 6, and non-Akita rice, moved entirely to kimoto starters by 2015, and returned to wooden vats. The most argued-about brewery in Japan, and the clearest single statement that the twentieth century's technical settlement was a choice rather than a necessity.",
                 ja:"一九三〇年にきょうかい六号が分離された蔵。二〇〇七年に佐藤祐輔が継いで以降、醸造アルコール、乳酸添加、六号以外の購入酵母、秋田県産以外の米をすべて排し、二〇一五年までに全量を生酛とし、木桶へ回帰した。日本で最も議論される蔵であり、二十世紀の技術的な決着が必然ではなく選択であったことの、最も明快な単独の主張である。",
                 zh:"1930 年分離出協會六號的酒藏。自 2007 年佐藤祐輔接手以來，已全面排除釀造酒精、添加乳酸、六號以外的外購酵母，以及非秋田產米，並於 2015 年前全量改為生酛，回歸木桶。這是日本最受爭論的酒藏，也是「二十世紀的技術定局是一種選擇而非必然」這一命題最清晰的單一主張。"} },
          { term:{en:"Dassai / Asahi Shuzō",ja:"獺祭・旭酒造",zh:"獺祭・旭酒造"}, jp:"旭酒造 · 山口 · 1948",
            def:{en:"A failing rural brewery that abandoned futsūshu entirely, dismissed the seasonal tōji system in favour of year-round data-driven production, milled harder than anyone thought sensible, and built an export business that reshaped how sake is perceived outside Japan. Now brews in New York as well. Widely imitated and widely resented; either way, the most consequential commercial event in modern sake.",
                 ja:"経営に窮した地方の蔵が、普通酒を全廃し、季節雇用の杜氏制度をやめて通年・データ主導の製造に切り替え、正気の沙汰と思われていた以上に米を磨き、日本国外での日本酒の見え方を変えてしまう輸出事業を築いた。現在はニューヨークでも醸造している。広く模倣され、広く反発もされている。いずれにせよ、現代日本酒における最も大きな商業的事件である。",
                 zh:"一家瀕臨失敗的鄉間酒藏，徹底放棄普通酒，廢除季節性杜氏制度，改採全年、數據導向的生產，把米磨到眾人認為不合理的程度，並建立起改變海外對日本酒認知的出口事業。現亦於紐約釀造。既被廣泛模仿，也招致廣泛反感；無論如何，這是現代日本酒最具影響力的商業事件。"} },
          { term:{en:"Jūyondai / Takagi Shuzō",ja:"十四代・高木酒造",zh:"十四代・高木酒造"}, jp:"高木酒造 · 山形 · 1615",
            def:{en:"In the early 1990s, when the industry equated quality with dryness, Takagi Akitsuna released a sake that was fruity, aromatic and unashamedly sweet. It sold out immediately and has never stopped selling out. Almost every modern aromatic junmai daiginjō in Japan is downstream of that decision.",
                 ja:"一九九〇年代初頭、業界が品質を辛口と同一視していた時期に、高木顕統は果実味があり、香り高く、堂々と甘い酒を世に出した。即座に売り切れ、以後も売り切れ続けている。日本の現代的な香り高い純米大吟醸のほぼすべては、この決断の下流にある。",
                 zh:"1990 年代初，當業界把品質等同於辛口時，高木顯統推出了一款果味十足、香氣飽滿且毫不掩飾其甜的酒。它立刻售罄，此後從未停止售罄。今日日本幾乎每一款芳香型純米大吟釀，都在那個決定的下游。"} },
          { term:{en:"Daishichi",ja:"大七",zh:"大七"}, jp:"大七酒造 · 福島 · 1752",
            def:{en:"Made kimoto its entire identity when the method was considered obsolete, and developed <em>chōseki</em> flat milling — grinding along the grain's shape rather than into a sphere — to remove protein more efficiently at a given ratio. Proof that the classical method could be pushed forward rather than merely preserved.",
                 ja:"生酛が時代遅れとされていた時期に、それを蔵の全アイデンティティとした。さらに超扁平精米——粒を球にせず、その形に沿って削る——を開発し、同じ精米歩合でより効率よくたんぱく質を除く道を開いた。古典的な手法が保存されるだけでなく前進しうることの証明である。",
                 zh:"在生酛被視為過時之際，將其定為酒藏的全部身分；並開發「超扁平精米」——順著米粒形狀而非磨成球體研磨——以在相同精米步合下更有效去除蛋白質。這證明古典工法不只能被保存，還能被推進。"} },
          { term:{en:"Kuheiji / Banjō Jōzō",ja:"醸し人九平次・萬乗醸造",zh:"釀人九平次・萬乘釀造"}, jp:"萬乗醸造 · 愛知 · 1647",
            def:{en:"Took sake into French restaurants in the 2000s, farms its own rice in Hyōgo, and also owns a wine estate in Burgundy. The clearest articulation of the argument that sake should be understood as agriculture and read on wine's terms.",
                 ja:"二〇〇〇年代にフランスのレストランへ日本酒を持ち込み、兵庫で自ら酒米を栽培し、ブルゴーニュにワインのドメーヌももつ。日本酒を農業として理解し、ワインの語彙で読むべきだという主張の、最も明確な表現である。",
                 zh:"2000 年代將日本酒帶進法國餐廳，在兵庫自耕酒米，並在勃根地擁有酒莊。這是「日本酒應被視為農業、並以葡萄酒的語彙來閱讀」這一主張最清晰的表述。"} },
          { term:{en:"Terada Honke",ja:"寺田本家",zh:"寺田本家"}, jp:"寺田本家 · 千葉 · 1673",
            def:{en:"Brews with no added yeast, no added lactic acid, unpolished or barely polished rice, natural farming and wooden vats. The results are cloudy, sour, alive and utterly unlike commercial sake. The far end of the spectrum from Dassai, and a reference point for the natural-wine-adjacent audience.",
                 ja:"酵母も乳酸も添加せず、無精白あるいはごく浅い精白の米を用い、自然栽培と木桶で醸す。出来上がるものは濁り、酸っぱく、生きており、商業的な日本酒とはまったく似ていない。獺祭の対極にあり、自然派ワインに近い層にとっての参照点である。",
                 zh:"不添加酵母、不添加乳酸，使用未精米或僅微精米的米，以自然農法與木桶釀造。成品混濁、帶酸、活躍，與商業日本酒毫不相似。它位於獺祭的另一極端，也是親近自然派葡萄酒之受眾的參照點。"} },
          { term:{en:"Kikuhime",ja:"菊姫",zh:"菊姬"}, jp:"菊姫合資会社 · 石川 · 1570s",
            def:{en:"Buys Toku-A Yamada Nishiki on long-term contracts, ages its sake for years before release, and built the modern reputation of yamahai as a premium rather than a rustic category.",
                 ja:"特A地区の山田錦を長期契約で買い付け、出荷まで数年寝かせる。山廃を素朴な区分ではなく上位の区分として位置づける、現代的な評価を築いた蔵である。",zh:"以長期契約收購特 A 地區的山田錦，並將酒陳放數年才出貨；確立了山廢作為高階而非樸素類別的現代聲譽。"} },
          { term:{en:"Isojiman",ja:"磯自慢",zh:"磯自慢"}, jp:"磯自慢酒造 · 静岡 · 1830",
            def:{en:"The definitive expression of the Shizuoka school: restrained aroma, faultless cleanliness, nothing raised above anything else. Served at the 2008 G8 summit in Tōyako, which introduced the style to a lot of people at once.",
                 ja:"静岡型の決定的な表現——香りは抑制され、清澄さに欠点がなく、何一つ突出しない。二〇〇八年の洞爺湖サミットで供され、この酒質を一挙に多くの人へ知らしめた。",
                 zh:"靜岡風格的決定性表現：香氣內斂、潔淨無瑕、無一元素凌駕其他。曾於 2008 年洞爺湖 G8 高峰會供飲，使這種風格一舉為眾人所知。"} },
          { term:{en:"Nabeshima / Fukuchiyo Shuzō",ja:"鍋島・富久千代酒造",zh:"鍋島・富久千代酒造"}, jp:"富久千代酒造 · 佐賀 · 1925",
            def:{en:"A very small Kyushu brewery that won the trophy for the world's best sake at the International Wine Challenge in 2011, upending the assumption that Kyushu could not make first-rank sake and triggering a regional revaluation.",
                 ja:"二〇一一年、インターナショナル・ワイン・チャレンジで世界最優秀の栄誉を得た九州の極小の蔵。九州では一級の日本酒は造れないという前提を覆し、地域全体の再評価を促した。",
                 zh:"一家九州的極小型酒藏，於 2011 年在國際葡萄酒挑戰賽奪得世界最佳清酒獎，推翻了「九州釀不出一流清酒」的假設，並引發整個區域的重新評價。"} }
        ] }
      ]
    },

    { t:"section", id:"building",
      title:{ en:"What a brewery is, as a building", ja:"建物としての蔵", zh:"作為建築的酒藏" }, jp:"蔵という建物",
      body:[
        { t:"p", text:{
          en:"Old sake breweries across Japan look alike, and not because of style. The plan follows the material: rice enters high and dry, and everything after that runs downhill, because moving a tonne of wet rice or a tonne of mash by hand is the labour you most want to avoid.",
          ja:"日本各地の古い酒蔵は互いに似ている。意匠のためではない。間取りが材に従うからである。米は高く乾いた所から入り、その後のすべては下へ流れる。濡れた米一トンや醪一トンを人の手で動かすことこそ、最も避けたい労だからである。",
          zh:"日本各地的老酒藏彼此相像，原因不在樣式，而在於平面配置服從材料：米從高處、乾燥的地方進入，此後的一切都往下走——因為以人力搬動一噸濕米或一噸醪，正是最想避免的勞動。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Top floor", ja:"最上階", zh:"最上層" }, jp:"精米・白米貯蔵",
            v:{ en:"Milling and rice store", ja:"精米と米の蔵", zh:"精米與米倉" },
            d:{ en:"Dry, ventilated, and as far as possible from steam. Modern breweries often mill off site or in a separate building entirely, because a milling machine runs for two or three days per batch and shakes the structure.",
              ja:"乾いて、風が通り、蒸気からできるかぎり遠い。現代の蔵はしばしば外部で、あるいはまったく別の建物で精米する。精米機は一枚につき二日三日回り続け、建物を揺らすからである。",
              zh:"乾燥、通風，並盡可能遠離蒸氣。現代酒藏往往在場外或另一棟建築中精米，因為精米機每批要連續運轉兩三天，並會使建築震動。" } },
          { k:{ en:"The steam floor", ja:"蒸しの階", zh:"蒸米層" }, jp:"釜場・甑",
            v:{ en:"Boiler, koshiki, cooling", ja:"釜と甑と放冷", zh:"鍋爐、甑與放冷" },
            d:{ en:"The hottest and wettest room, which is why it sits under a high roof with vents in it. In old breweries the steam escaped through a lantern in the ridge; in new ones a hood and a fan do the same job less beautifully.",
              ja:"最も熱く最も濡れる部屋であり、それゆえ換気の口をもつ高い屋根の下に据えられる。古い蔵では棟の越屋根から蒸気が抜けた。新しい蔵では覆いと送風機が同じ仕事をより美しくなく行う。",
              zh:"最熱也最潮濕的房間，因此設在帶有通氣口的高屋頂之下。老酒藏的蒸氣從屋脊上的越屋根散出；新酒藏則以罩子與風扇完成同樣的工作，只是不那麼好看。" } },
          { k:{ en:"The warm room", ja:"暖かい部屋", zh:"溫暖的房間" }, jp:"麹室",
            v:{ en:"The kōji room", ja:"麹室", zh:"麴室" },
            d:{ en:"A cedar-lined box inside the building, insulated on all six sides. It is often the only part of an old brewery that has been completely rebuilt in the last fifty years, because insulation and hygiene standards moved and the room is small enough to replace.",
              ja:"建物の内にある杉張りの箱であり、六面すべてを断たれている。古い蔵において、この五十年のうちに完全に建て直された唯一の部分であることが多い。断熱と衛生の基準が動き、そして部屋は建て替えうるほど小さいからである。",
              zh:"建築內部一個內襯杉木的盒子，六面皆做隔熱。它往往是老酒藏中過去五十年間唯一被完全重建的部分——因為隔熱與衛生標準改變了，而這個房間又小到足以整個更換。" } },
          { k:{ en:"The cold floor", ja:"寒い階", zh:"低溫層" }, jp:"仕込蔵",
            v:{ en:"Tanks", ja:"仕込みの槽", zh:"仕込槽" },
            d:{ en:"Thick walls, small windows, often half below ground level, and in the north sometimes packed with snow. Tanks were wooden until the 1930s, are enamelled steel or stainless now, and are usually sunk into a raised floor so the brewer works at the rim rather than up a ladder.",
              ja:"厚い壁、小さな窓、しばしば半ば地に沈み、北国では時に雪に埋もれる。槽は昭和の初めまで木であり、今は琺瑯かステンレスであって、たいてい上げ床に沈められ、造り手は梯子を登るのではなく縁に立って働く。",
              zh:"厚牆、小窗，常有一半埋在地面以下，在北國有時被雪覆蓋。酒槽在一九三〇年代之前是木製的，如今是琺瑯鋼或不鏽鋼，而且通常沉入抬高的地板中，讓釀造者站在槽緣工作，而不必爬梯子。" } },
          { k:{ en:"Ground level", ja:"地の階", zh:"地面層" }, jp:"槽場・瓶詰",
            v:{ en:"Pressing and bottling", ja:"上槽と瓶詰", zh:"壓榨與裝瓶" },
            d:{ en:"Where the sake becomes a liquid you can move in a hose, and therefore where the building stops mattering and the machinery starts. Almost every brewery's newest building is this one.",
              ja:"酒が管で動かしうる液となる場所であり、したがって建物が意味を失い機械が始まる場所である。ほとんどの蔵において最も新しい建物はこれである。",
              zh:"在這裡，酒變成可以用管線輸送的液體，因此也是建築不再重要、機械開始接手的地方。幾乎每一家酒藏最新的建築都是這一棟。" } },
          { k:{ en:"Outside", ja:"外", zh:"外部" }, jp:"煙突・海鼠壁・杉玉",
            v:{ en:"The signals", ja:"合図", zh:"外顯的訊號" },
            d:{ en:"A brick chimney from the coal-fired boiler era, kept long after the boiler changed; namako-kabe lattice plaster, which is fireproofing before it is decoration; and a cedar ball at the door that goes up green when the new sake is ready and browns through the year. Around a hundred and fifty brewery buildings are on the national register of tangible cultural properties.",
              ja:"石炭焚きの釜の時代の煉瓦の煙突は、釜が替わったのちも長く残される。海鼠壁の漆喰は、装飾である前に火除けである。そして戸口の杉の玉は、新酒が仕上がると青く掲げられ、年を通じて茶に枯れる。およそ百五十の蔵の建物が国の登録有形文化財に載っている。",
              zh:"燃煤鍋爐時代留下的磚砌煙囪，在鍋爐更換之後仍長久保留；海鼠牆的灰泥格紋，首先是防火，其次才是裝飾；門口的杉玉在新酒完成時掛上，青綠一片，並在一年之中逐漸轉褐。約有一百五十棟酒藏建築登錄於國家有形文化財名冊。" } }
        ] },
        { t:"note", title:{ en:"The building is part of the recipe", ja:"建物も配合のうち", zh:"建築也是配方的一部分" }, text:{
          en:"A brewery accumulates a resident microflora — in the timber, the plaster, the floor drains, the wooden tools — and brewers who have moved into new premises routinely report that the sake changed and took years to come back. This is not mysticism; it is the reason the loss of a brewery building in a fire or an earthquake is not repaired by buying new tanks.",
          ja:"蔵は住み着いた微生物相を溜める。梁に、漆喰に、床の溝に、木の道具に、である。新しい建物へ移った造り手は、酒が変わり、戻るのに年を要したと述べるのが常である。これは神秘ではない。火事や地震で蔵の建物を失うことが、新しい槽を買うことでは償われぬ理由である。",
          zh:"酒藏會累積出常駐的微生物相——在木料裡、灰泥裡、地面排水溝裡、木製工具裡。搬入新建築的釀造者，往往報告說酒的味道變了，而且要花上數年才回得來。這不是神祕主義；這正是為什麼一場火災或地震奪走一棟酒藏建築後，買新槽並不能把它修復回來。" } }
      ] },

    { t:"section", id:"structure",
      title:{ en:"Who actually makes the sake", ja:"誰が造っているのか", zh:"究竟是誰在釀酒" }, jp:"杜氏と蔵人",
      body:[
        { t:"p", text:{
          en:"Until the late twentieth century a brewery owner (<em>kuramoto</em>) rarely brewed. Production was contracted to a <em>tōji</em>, a master brewer who arrived each autumn with his own team of <em>kurabito</em>, lived in the brewery for the season, and left in March. The tōji belonged to a guild — a <em>ryūha</em> — with its own techniques, its own vocabulary and its own songs.",
          ja:"二十世紀後半まで、蔵元自身が酒を造ることは稀であった。製造は杜氏に委ねられ、杜氏は毎秋、自らの蔵人を率いて現れ、造りの季節を蔵に住み込み、三月に去った。杜氏は流派に属し、流派はそれぞれ固有の技術と語彙と歌をもっていた。",
          zh:"直到二十世紀後期，酒藏主人（藏元）本人很少親自釀酒。生產委託給杜氏——一位每年秋天帶著自己的藏人團隊前來、整個釀期住在酒藏、三月離去的釀造總監。杜氏隸屬於流派，各流派有其獨特的技術、語彙與歌謠。" } },
        { t:"table",
          cols:[{en:"Guild",ja:"流派",zh:"流派"},{en:"Kanji",ja:"表記",zh:"漢字"},{en:"Base",ja:"本拠",zh:"據點"},{en:"Associated with",ja:"特徴",zh:"相關特徵"}],
          jpCols:[1],
          rows:[
            [{en:"Nanbu tōji",ja:"南部杜氏",zh:"南部杜氏"},"南部杜氏",{en:"Iwate",ja:"岩手",zh:"岩手"},
             {en:"The largest guild in Japan, with members working nationwide. Associated with clean, aromatic, technically exacting sake and with rigorous internal training.",ja:"日本最大の流派であり、構成員は全国の蔵で働く。清く香り高い、技術的に厳密な酒質と、厳格な内部教育で知られる。",zh:"日本最大的流派，成員遍及全國酒藏。以潔淨芳香、技術嚴謹的酒質與嚴格的內部訓練著稱。"}],
            [{en:"Echigo tōji",ja:"越後杜氏",zh:"越後杜氏"},"越後杜氏",{en:"Niigata",ja:"新潟",zh:"新潟"},
             {en:"Perfected brewing in deep-snow conditions and defined the <em>tanrei karakuchi</em> style — light, dry, low in aroma, exceptionally clean.",ja:"豪雪の条件下での造りを完成させ、淡麗辛口——軽く、辛く、香りは低く、際立って清らか——という酒質を規定した。",zh:"完善了豪雪條件下的釀造，並界定了淡麗辛口的風格——輕盈、辛口、低香氣、格外潔淨。"}],
            [{en:"Tanba tōji",ja:"丹波杜氏",zh:"丹波杜氏"},"丹波杜氏",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},
             {en:"Supplied Nada for centuries. Associated with hard-water brewing, robust structure and the kimoto and yamahai traditions.",ja:"何世紀にもわたり灘を支えた。硬水での造り、力強い骨格、生酛・山廃の伝統と結びつく。",zh:"數世紀來供應灘地區。與硬水釀造、強健結構，以及生酛、山廢傳統相連。"}],
            [{en:"Noto tōji",ja:"能登杜氏",zh:"能登杜氏"},"能登杜氏",{en:"Ishikawa",ja:"石川",zh:"石川"},
             {en:"Known for full-bodied, umami-driven sake and for the yamahai method as a house signature rather than a revival.",ja:"厚みがありうま味の前に出る酒質と、復活ではなく本来の型としての山廃で知られる。",zh:"以厚實、旨味鮮明的酒質，以及作為本家風格（而非復古）的山廢工法著稱。"}],
            [{en:"Tajima tōji",ja:"但馬杜氏",zh:"但馬杜氏"},"但馬杜氏",{en:"northern Hyōgo",ja:"兵庫県北部",zh:"兵庫北部"},
             {en:"The other Hyōgo guild, historically supplying both Nada and the San'in coast.",ja:"兵庫のもう一つの流派。歴史的に灘と山陰の双方へ人を送った。",zh:"兵庫的另一個流派，歷史上同時向灘與山陰海岸輸送人力。"}]
          ] },
        { t:"p", text:{
          en:"That system is now largely gone. Seasonal migration collapsed with rural depopulation and year-round employment; the average tōji is elderly; and in most serious breweries today the owner's son or daughter has trained in brewing science and runs production themselves as <em>kuramoto-tōji</em>. The guilds survive as training and certification bodies, and the UNESCO inscription of 2024 was written substantially around the transmission problem they represent.",
          ja:"この体制はいまや大きく失われた。出稼ぎは農村の人口減少と通年雇用の広がりによって成り立たなくなり、杜氏の平均年齢は高い。今日、本格的な蔵の多くでは、蔵元の息子や娘が醸造学を修め、自ら蔵元杜氏として製造を担う。流派は教育と認定の機関として存続しており、二〇二四年のユネスコ登録は、そこにある伝承の問題を軸に書かれている。",
          zh:"這套體系如今大半消失。季節性遷徙因農村人口外流與全年雇用而難以為繼；杜氏平均年齡偏高；今日多數認真的酒藏中，藏元的兒女已修習釀造科學，親自以「藏元杜氏」身分掌管生產。流派則以訓練與認證機構的形式存續，而 2024 年的聯合國教科文組織列名，正是大幅圍繞著它們所代表的傳承問題而書寫。" } }
      ]
    },
    { t:"section", id:"oke",
      title:{ en:"The trade in sake between breweries", ja:"蔵と蔵のあいだの酒の取引", zh:"酒藏與酒藏之間的酒交易" }, jp:"桶売り・桶買い",
      body:[
        { t:"p", text:{
          en:"For most of the twentieth century a great deal of the sake sold under famous names was not brewed by the houses whose names were on it. Small breweries made it and sold it in bulk, by the tank, to large ones who blended it into their own product. The practice has a name on each side of the transaction — <em>okeuri</em> if you are selling, <em>okegai</em> if you are buying — and understanding it explains more about the present shape of the industry than almost anything else on this page.",
          ja:"二十世紀の大半において、名高い名のもとに売られた酒の多くは、その名を負う家が醸したものではなかった。小さな蔵がそれを造り、桶ごと、まとめて大きな蔵へ売り、大きな蔵はそれを自らの製品へ調合した。この慣行には取引の両側にそれぞれ名がある。売る側からは桶売り、買う側からは桶買いである。そしてこれを解することは、この頁の他のほとんど何よりも、今日の産業の形を説き明かす。",
          zh:"在二十世紀的大部分時間裡，以知名品牌售出的清酒，有很大一部分並不是由掛名的那家酒藏釀的。小酒藏釀好之後，整槽整槽地大量賣給大酒藏，大酒藏再把它調進自家的產品裡。這個做法在交易的兩端各有一個名字：賣方叫「桶売り」，買方叫「桶買い」；而理解它，比本頁上幾乎任何其他內容都更能解釋今日這個產業的形狀。" } },

        { t:"defs", items:[
          { term:{ en:"An untaxed transfer", ja:"未納税移出", zh:"未納稅移出" }, jp:"未納税移出", romaji:"minōzei ishutsu",
            def:{ en:"The transaction has a formal name in tax law, and the name explains the mechanics. Liquor tax falls at the point sake leaves a licensed manufacturing site for sale; sake moving from one licensed site to another has not yet reached that point, so it moves untaxed and the tax falls later on the house that bottles it. This is why the practice is legal, ordinary and invisible: nothing in the tax treatment marks the bottle, and the label shows the bottler as the manufacturer.",
              ja:"この取引には税法の上での正式な名があり、その名が仕組みを説く。酒税は、酒が売るために免許を受けた製造場を出る時点でかかる。免許場から免許場へ動く酒はまだその時点に達しておらず、ゆえに税を納めぬまま動き、税はのちに詰める家にかかる。この慣行が適法であり、平凡であり、そして目に見えぬ理由がこれである。税の扱いのうちに瓶を標すものは何もなく、札は詰めた者を製造者として示す。",
              zh:"這筆交易在稅法上有一個正式名稱，而這個名稱說明了它的機制。酒稅是在酒為了販售而離開持照製造場的那一刻課徵的；從一個持照場所移動到另一個持照場所的酒還沒到那個時點，因此可以未納稅移出，稅之後落在裝瓶的那一家身上。這就是為什麼這個做法合法、平常，而且看不見：稅務處理上沒有任何東西會在瓶身留下記號，而酒標顯示的製造者是裝瓶者。" } },
          { term:{ en:"Why it existed at all", ja:"そもそもなぜ在ったか", zh:"它為什麼會存在" }, jp:"生産枠", romaji:"seisan waku",
            def:{ en:"Two reasons, three centuries apart. In the Edo period a famous house that could sell more than it could make bought the difference rather than building another kura. From 1937 the state imposed production quotas on individual breweries, which meant a house with demand and a capped licence had no other way to meet it. The habit outlived the quota, and by the high-growth decades a large Nada or Fushimi brand might be drawing on dozens of regional breweries at once — one long-established Nada house is reported to have traded with about sixty.",
              ja:"三世紀を隔てた二つの理由がある。江戸期には、造りうる以上に売りうる名高い家が、もう一つの蔵を建てるのではなく、その差を買った。昭和十二年からは、国が個々の蔵に生産の枠を課した。需要を持ち、免許に上限を負う家には、それを満たす他の道がなかった。習いは枠より長く生き、高度成長の数十年には、灘や伏見の大きな銘柄が、一度に数十の地方の蔵から引いていることもありえた。灘のある老舗はおよそ六十の蔵と取引していたと伝えられる。",
              zh:"兩個理由，相隔三個世紀。江戶時期，一家賣得比自己釀得多的名門，不去蓋另一座酒藏，而是把差額買進來。自昭和十二年（1937）起，國家對個別酒藏課以生產配額；一家有需求卻被執照上限綁住的酒藏，沒有別的辦法滿足它。這個習慣活得比配額更久；到了高度成長的那幾十年，一個灘或伏見的大品牌可能同時向數十家地方酒藏取酒——據稱灘的一家老字號曾與大約六十家酒藏往來。" } },
          { term:{ en:"What it did for the small brewery", ja:"小さな蔵にとって何であったか", zh:"它對小酒藏意味著什麼" }, jp:"販路", romaji:"hanro",
            def:{ en:"It solved, at a stroke, the two problems a small rural kura could not solve for itself: a sales channel and a cash flow. A house with a contract knew before the season began how much it would sell and at what price, could keep a seasonal crew employed, and never had to think about a brand, a label, a distributor or a customer. Several generations of brewers spent their whole working lives making sake that was drunk under somebody else's name, and thought nothing of it, because the alternative was not a brand of their own — it was no sales at all.",
              ja:"それは、地方の小さな蔵が自らでは解きえぬ二つの問い——販路と資金繰り——を一挙に解いた。契約を持つ家は、造りの始まる前から、どれだけをいくらで売るかを知り、季節の組を雇い続けることができ、銘柄も、札も、卸も、客も考えずに済んだ。幾世代もの造り手が、その働きの生涯を、他人の名で飲まれる酒を造ることに費やし、そして何とも思わなかった。代わりにあったのは自らの銘柄ではなく、売りが一切ないことであったからである。",
              zh:"它一舉解決了鄉間小酒藏自己解決不了的兩個問題：通路與現金流。有契約的酒藏在釀造季開始之前就知道自己會賣掉多少、以什麼價格，可以持續雇用季節性班底，而且完全不必去想品牌、酒標、經銷商或顧客。好幾個世代的釀造者，把整個工作生涯花在釀造「用別人的名字被喝掉」的酒上，而且不以為意——因為另一個選項不是「擁有自己的品牌」，而是「完全沒有生意」。" } },
          { term:{ en:"And what happened when it stopped", ja:"そして、それが止んだとき", zh:"而當它停下來的時候" }, jp:"取引の終焉", romaji:"torihiki no shūen",
            def:{ en:"When national volume began its long fall after 1973, the large houses cut their bought-in supply before they cut their own production, because the bought-in supply was the variable cost. A regional brewery could therefore lose its entire revenue in a single letter, having never built a brand, a distributor relationship or a customer list. The closures of the 1980s and 1990s are substantially this, and so is the opposite: the wave of small houses that suddenly appeared with brands of their own in those same decades were not new companies. They were old ones that had just been forced to learn a second trade.",
              ja:"一九七三年ののち、全国の量が長い下りを始めたとき、大きな家は自らの生産を削る前に、買い入れを削った。買い入れこそ変動する費えであったからである。ゆえに地方の蔵は、銘柄も卸との関わりも客の名簿も築かぬまま、一通の手紙で収入の全体を失いえた。一九八〇年代と九〇年代の廃業は、その多くがこれである。そしてその逆もまた然りである。同じ数十年に、自らの銘柄を携えて突然現れた小さな家々は、新しい会社ではなかった。それは、二つめの商いを学ばざるをえなくなった古い会社であった。",
              zh:"一九七三年之後全國銷量開始長期下滑時，大酒藏在削減自家生產之前，先削減了外購——因為外購才是那筆可變成本。於是一家地方酒藏可能因為一封信就失去全部收入，而它從未建立過品牌、經銷關係或客戶名單。一九八〇與九〇年代的歇業潮，很大一部分就是這件事；而它的反面也是：在同樣那幾十年裡帶著自有品牌突然出現的那些小酒藏，並不是新公司，而是被迫學會第二門生意的老公司。" } },
          { term:{ en:"How it is regarded now", ja:"いま、それはどう見られているか", zh:"現在人們怎麼看它" }, jp:"評価", romaji:"hyōka",
            def:{ en:"Badly, and not entirely fairly. The criticism is that a consumer buying a famous label was not told, and that large buyers used their position to set prices a small seller could not refuse. Both are true. The defence, made most openly by houses that still buy, is that a well-run relationship involves shared technical standards, inspections, advice and a guaranteed offtake, and that specialisation between a house that can brew and a house that can sell is not in itself dishonest. What is not in dispute is that the practice is far smaller than it was, and that the bottle in front of you is now much more likely than it was in 1970 to have been made where it says it was.",
              ja:"芳しくなく、そしてまったく公平にでもない。批判はこうである。名高い札を買う客は告げられなかったこと。そして大きな買い手が、その立場を用いて、小さな売り手には断りえぬ値を定めたこと。いずれも真である。弁護は、いまなお買う家々によって最も率直に述べられている。よく営まれた関わりは、共有された技の基準、検査、助言、そして確かな引き取りを伴うこと。醸しうる家と売りうる家とのあいだの分業は、それ自体としては不誠実ではないこと。争いのないのは、この慣行が往時よりはるかに小さくなったこと、そして目の前の一本が、一九七〇年の一本よりもずっと高い見込みで、そこに記された場所で造られていることである。",
              zh:"評價不好，而且並不完全公平。批評是：買下知名酒標的消費者沒有被告知；而大買家利用自身地位，訂出小賣家無法拒絕的價格。兩者都是真的。辯護則由至今仍在採購的酒藏說得最坦白：一段經營良好的關係包含共同的技術標準、檢查、指導與保證收購；而「會釀酒的一家」與「會賣酒的一家」之間的分工，本身並不等於不誠實。沒有爭議的是：這個做法已經遠比從前小，而擺在你面前的這一瓶，比起一九七〇年的那一瓶，有高得多的機率確實產自它所標示的地方。" } }
        ] },

        { t:"note", title:{ en:"How to tell, if you want to", ja:"知りたければ、どう見分けるか", zh:"如果你想知道，怎麼看" }, text:{
          en:"You mostly cannot, from the bottle, and that is the honest answer. The label names the manufacturer, which is the entity that bottled and paid the tax. What you can do is read the address rather than the brand: the line that gives a company name and a place is the line that tells you where the sake left a licensed site, and a brand whose address is a city-centre office rather than a brewing town is worth a question. Beyond that, ask. A brewery that makes everything it sells will say so immediately, and a house that buys some of its volume is now more likely to explain the arrangement than to deny it.",
          ja:"瓶からは、たいてい分からない。それが正直な答えである。札は製造者を挙げ、それは詰めて税を納めた主体である。なしうるのは、銘柄ではなく所在地を読むことである。会社の名と場所を挙げる行こそ、その酒が免許場を出た場所を告げる行であり、造りの町ではなく市中の事務所を所在地とする銘柄は、一つ問う値打ちがある。それを越えたければ、尋ねられたい。売るもののすべてを自ら造る蔵は直ちにそう述べる。そして量の一部を買う家は、いまや、それを否むよりも仕組みを説くほうが多い。",
          zh:"多數情況下，你從瓶子上看不出來——這是誠實的答案。酒標標示的是製造者，也就是裝瓶並繳稅的那個主體。你能做的是讀地址而不是讀品牌：寫著公司名稱與地點的那一行，才是告訴你這支酒從哪一個持照場所離開的那一行；而一個地址是市中心辦公室、而非釀造小鎮的品牌，值得問一句。再往下，就直接問吧。一家所賣皆為自釀的酒藏會立刻這麼說；而一家外購部分產量的酒藏，如今比較可能向你解釋這個安排，而不是否認它。" } }
      ] },


{ t:"section", id:"scale",
      title:{ en:"The shape of the industry", ja:"産業の形", zh:"產業的形貌" }, jp:"規模の分布",
      body:[
        { t:"figure",
          caption:{
            en:"The four scales of brewery on one axis. The scale is logarithmic because it has to be: the distance from the smallest house to the largest company is a factor of several thousand, and on a straight axis the first three bands would be a single line at the left edge. Every band on this chart is called a sake brewery, holds the same licence, and is written about in the same sentence — which is worth remembering whenever a statement is made about what &#8220;sake breweries&#8221; are doing.",
            ja:"四つの規模の蔵を、一本の軸の上に置いたもの。目盛りが対数であるのは、そうせざるをえないからである。最も小さな家と最も大きな会社との隔たりは数千倍であり、等間隔の軸では、初めの三つの帯は左端の一本の線になってしまう。この図のどの帯もみな「酒蔵」と呼ばれ、同じ免許を持ち、同じ一文のなかで語られる。「酒蔵は」と何かが言われるたび、思い出す値打ちのあることである。",
            zh:"四種規模的酒藏，放在同一條軸上。刻度必須是對數的：最小的家庭與最大的公司之間相差數千倍，若用等距軸，前三段色帶會擠成左緣的一條線。這張圖上的每一段都叫做「酒藏」，持有同樣的執照，也被寫進同一個句子裡——每當有人說「酒藏如何如何」時，這一點都值得記起。" },
          svg: function (lang, L) {
            var W = 760, H = 348, X0 = 176, X1 = 700, Y0 = 82, RH = 48;
            var LO = 1, HI = 6;
            function px(k) { return X0 + (Math.log(k) / Math.LN10 - LO) / (HI - LO) * (X1 - X0); }
            var bands = [
              { a:30, b:300, f:"#E7DFD2", jp:"極小", n:{ en:"micro", ja:"ごくちいさい", zh:"極小" },
                p:{ en:"2–5 people", ja:"二〜五人", zh:"2–5 人" }, d:{ en:"a family", ja:"一つの家族", zh:"一個家庭" } },
              { a:300, b:1000, f:"#DACFB8", jp:"小規模", n:{ en:"small", ja:"しょうきぼ", zh:"小型" },
                p:{ en:"5–15", ja:"五〜十五人", zh:"5–15 人" }, d:{ en:"the jizake house", ja:"地酒の蔵", zh:"地酒藏" } },
              { a:1000, b:10000, f:"#CDBFA2", jp:"中規模", n:{ en:"medium", ja:"ちゅうきぼ", zh:"中型" },
                p:{ en:"15–60", ja:"十五〜六十人", zh:"15–60 人" }, d:{ en:"a company", ja:"会社である", zh:"一家公司" } },
              { a:10000, b:700000, f:"#C0AF8E", open:true, jp:"大手", n:{ en:"large", ja:"おおて", zh:"大型" },
                p:{ en:"100+", ja:"百人以上", zh:"100 人以上" }, d:{ en:"industrial, all year", ja:"工業的・四季醸造", zh:"工業規模・四季釀造" } }
            ];
            var KOKU = ["10", "100", "1,000", "10,000", "100,000", "1,000,000"];
            var BOTL = { en:["1k", "10k", "100k", "1M", "10M", "100M"],
                         ja:["一千", "一万", "十万", "百万", "一千万", "一億"],
                         zh:["一千", "一萬", "十萬", "百萬", "一千萬", "一億"] };
            var bl = BOTL[lang] || BOTL.en;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var BOT = Y0 + bands.length * RH, e, k;
            /* gridlines, the koku axis below and the bottle axis above */
            for (e = LO; e <= HI; e++) {
              k = Math.pow(10, e);
              s += '<line x1="' + px(k) + '" y1="' + (Y0 - 22) + '" x2="' + px(k) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(k) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + KOKU[e - LO] + '</text>';
              s += '<text x="' + px(k) + '" y="' + (Y0 - 30) + '" text-anchor="middle" font-size="9.5" fill="#ADA79E">' + bl[e - LO] + '</text>';
            }
            var i, y;
            for (i = 0; i < bands.length; i++) {
              var b = bands[i];
              y = Y0 + i * RH;
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 18) + '" text-anchor="end" font-size="13" fill="#201E1B">' + b.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 32) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(b.n) + ' · ' + L(b.d) + '</text>';
              var x1 = px(b.a), x2 = px(b.b), ty = y + 6, h = 22;
              s += '<rect x="' + x1.toFixed(1) + '" y="' + ty + '" width="' + (x2 - x1).toFixed(1) + '" height="' + h + '" fill="' + b.f + '" stroke="#CDC6B9"/>';
              if (b.open) {
                s += '<path d="M' + x2.toFixed(1) + ' ' + ty + ' L' + (x2 + 13).toFixed(1) + ' ' + (ty + h / 2) + ' L' + x2.toFixed(1) + ' ' + (ty + h) + ' Z" fill="' + b.f + '"/>';
              }
              s += '<text x="' + (x1 + 8) + '" y="' + (ty + 15) + '" font-size="10.5" fill="#55504A">' + L(b.p) + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + X0 + '" y1="' + (Y0 - 22) + '" x2="' + X1 + '" y2="' + (Y0 - 22) + '" stroke="#DED8CB"/>';
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "年間生産量・石（対数）" : lang === "zh" ? "年產量・石（對數刻度）" : "ANNUAL OUTPUT IN KOKU, LOG SCALE") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 46) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "同じものを一升瓶の本数で（一石＝百本）" : lang === "zh" ? "同一件事，以一升瓶計（一石＝一百支）" : "THE SAME THING IN 1.8 L BOTTLES — ONE KOKU IS A HUNDRED OF THEM") + '</text>';
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "蔵の総数がおよそ千百とも千六百とも言われるのは、一方が免許を、他方が一月に実際に米を蒸している建物を数えているからである。"
                  : lang === "zh" ? "酒藏總數之所以有約一千一百與約一千六百兩種說法，是因為一方數的是執照，另一方數的是一月裡真正有人在蒸米的建築。"
                  : "Counts of about 1,100 and of about 1,600 breweries are both right: one counts licences, the other counts buildings where somebody still steams rice.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"“Brewery” covers an enormous range, from a family of four making three hundred koku to a company employing hundreds. The distribution is heavily skewed: a small number of large producers make most of the volume, and a very large number of small ones make most of the interest.",
          ja:"「蔵」という語は、三百石を造る四人の家族から、数百人を雇う会社まで、途方もない幅を覆っている。その分布は大きく偏っており、少数の大きな造り手が量の大半を担い、きわめて多数の小さな造り手が、面白さの大半を担っている。",
          zh:"「酒藏」一詞涵蓋的範圍極大，從四人家庭釀三百石，到僱用數百人的公司都有。其分布高度傾斜：少數大型生產者製造了大部分產量，而為數極多的小型生產者，則製造了大部分的趣味。" } },
        { t:"table",
          cols:[{en:"Scale",ja:"規模",zh:"規模"},{en:"Annual output",ja:"年間生産量",zh:"年產量"},{en:"People",ja:"人数",zh:"人數"},{en:"What it means in practice",ja:"実際の意味",zh:"實際上代表什麼"}],
          rows:[
            [{en:"Micro",ja:"極小",zh:"極小"},{en:"under 300 koku (~54 kL)",ja:"三百石未満（約54kL）",zh:"未滿三百石（約 54 kL）"},{en:"2–5",ja:"2〜5人",zh:"2–5 人"},
             {en:"A family. The owner brews, everyone does everything, and the whole year's output could fit in two shipping containers. Sells locally and through a handful of specialist shops.",ja:"家族である。当主が造り、皆が何でもやる。一年の生産量はコンテナ二本に収まる。地元と、数えるほどの専門店で売る。",zh:"一個家庭。藏元親自釀酒，人人身兼多職，全年產量兩個貨櫃就裝得下。在地銷售，並透過寥寥數家專門店出貨。"}],
            [{en:"Small",ja:"小規模",zh:"小型"},{en:"300–1,000 koku",ja:"三百〜千石",zh:"三百～一千石"},{en:"5–15",ja:"5〜15人",zh:"5–15 人"},
             {en:"The classic quality-focused jizake brewery. Usually a kuramoto-tōji or a salaried tōji, a defined house style, and national distribution through designated retailers. This is where most of the celebrated brands sit.",ja:"品質を志向する地酒蔵の典型である。蔵元杜氏か社員杜氏、明確な自社の酒質、そして特約店を通じた全国流通。名高い銘柄の多くはここにある。",zh:"注重品質的地酒藏典型。多為藏元杜氏或社員杜氏，具明確的自家酒質，並透過特約店進行全國流通。多數知名品牌都位於此區間。"}],
            [{en:"Medium",ja:"中規模",zh:"中型"},{en:"1,000–10,000 koku",ja:"千〜一万石",zh:"一千～一萬石"},{en:"15–60",ja:"15〜60人",zh:"15–60 人"},
             {en:"A real company with a sales department, a bottling line and usually several brands at different price points. Often the prefecture's leading producer and a significant local employer.",ja:"営業部門と瓶詰めの生産ラインを備え、価格帯の異なる複数の銘柄を持つ、れっきとした会社である。県を代表する造り手であり、地域の重要な雇用先であることも多い。",zh:"具備業務部門、裝瓶產線，且通常擁有數個不同價位品牌的正規公司。往往是該縣的代表性生產者，也是地方重要的雇主。"}],
            [{en:"Large",ja:"大手",zh:"大型"},{en:"over 10,000 koku",ja:"一万石超",zh:"逾一萬石"},{en:"100+",ja:"100人以上",zh:"100 人以上"},
             {en:"Industrial scale, year-round brewing, a research department, national advertising, and an export arm. A handful of these account for a very large share of what Japan actually drinks.",ja:"工業的な規模、四季醸造、研究部門、全国的な広告、そして輸出の部署。日本が実際に飲んでいるものの大きな割合を、この数社が担っている。",zh:"工業規模、四季釀造、研究部門、全國性廣告，以及出口部門。日本人實際所喝的酒，有相當高的比例出自這寥寥數家。"}]
          ] },
        { t:"grid", cols:3, cells:[
          { k:{en:"One koku",ja:"一石",zh:"一石"}, v:"180.39 L" },
          { k:{en:"…in bottles",ja:"一升瓶に換算",zh:"換算為一升瓶"}, v:{en:"100 × 1.8 L",ja:"一升瓶100本",zh:"一升瓶 100 支"} },
          { k:{en:"A micro brewery's year",ja:"極小の蔵の一年",zh:"極小酒藏的一年"}, v:{en:"~30,000 bottles",ja:"約三万本",zh:"約三萬支"} }
        ] },
        { t:"note", label:{en:"Why brewery counts disagree",ja:"蔵の数が一致しない理由",zh:"酒藏數為何各說各話"}, text:{
          en:"You will see the number of Japanese sake breweries given as anything from around 1,100 to around 1,600, and both can be correct. The tax authority counts <em>licences</em>; many licences are held by companies that no longer brew, either dormant or having their sake made under contract elsewhere. The number of buildings where somebody actually steams rice in January is considerably smaller than the number of licences, and neither figure is wrong — they are counting different things.",
          ja:"日本の清酒の蔵の数は、およそ千百とも、およそ千六百とも記される。そのどちらも正しくありうる。税務当局が数えているのは免許であり、その多くはすでに造っていない会社が保持している。休造しているか、他所に委託して自社の酒を造らせているのである。一月に実際に誰かが米を蒸している建物の数は、免許の数よりかなり少ない。どちらの数字も誤りではない。数えているものが違うのである。",
          zh:"你會看到日本清酒酒藏數被寫成從約一千一百到約一千六百不等，而兩者都可能正確。稅務當局計算的是「執照」；許多執照由已不再釀酒的公司持有，或休止、或委由他處代釀。一月裡真正有人在蒸米的建築數量，遠少於執照數。兩個數字都沒錯——它們數的是不同的東西。" } }
      ]
    },

    { t:"section", id:"family",
      title:{ en:"How a house continues", ja:"家が続く仕組み", zh:"一個家如何延續" }, jp:"継承",
      body:[
        { t:"p", text:{
          en:"A brewery that has run for three hundred years has solved a problem most businesses never have to face: what to do when the generation in charge has no competent heir. Japan's answer, used continuously since the Edo period and still used now, is to make one.",
          ja:"三百年続いた蔵は、ほとんどの商いが向き合わずに済む問いを解いてきた。当代に器量のある跡取りがいないとき、どうするか、である。江戸から今日まで絶えず用いられてきた日本の答えは、跡取りを作ることである。",
          zh:"一家運作了三百年的酒藏，解決了多數企業從不必面對的問題：當掌權的這一代沒有稱職的繼承人時該怎麼辦。日本的答案——自江戶時代起持續使用、至今仍在使用——是：造一個出來。" } },
        { t:"defs", items:[
          { term:{ en:"The adopted heir", ja:"婿養子", zh:"婿養子" }, jp:"婿養子", romaji:"muko-yōshi",
            def:{ en:"A capable young man marries the daughter of the house, is adopted as a son, takes the family name, and inherits the business. Japan adopts more adults than almost any country in the world, and the overwhelming majority of those adoptions are of grown men for exactly this purpose. The effect on old family firms is that the leadership is selected as well as inherited — the eldest son competes with an outsider chosen on merit, and quite often loses. A striking share of Japan's oldest surviving businesses have run this way for centuries.",
              ja:"器量のある若者が家の娘と婚し、子として迎えられ、家の名を継ぎ、商いを継ぐ。日本は世界のほとんどどの国よりも多くの成人を養子に迎え、その圧倒的多数は、まさにこの目的のための成人の男である。古い家の商いへの効果は、頭が継がれるだけでなく選ばれもすることである。長男は器量で選ばれた外の者と競い、しばしば敗れる。日本の最も古く生き残った商いの少なからぬ部分が、幾世紀にわたりこの仕組みで営まれてきた。",
              zh:"一名有才幹的年輕男子娶了家中的女兒，被收為養子，改從家族姓氏，並繼承事業。日本收養成年人的數量幾乎超過世界上任何國家，而其中絕大多數正是為了這個目的收養成年男子。它對老字號家族企業的效果是：領導者不只是被繼承，也是被挑選出來的——長子必須與一位依才幹選出的外人競爭，而且往往落敗。日本現存最古老的企業中，有相當高的比例，數百年來都是這樣運作的。" } },
          { term:{ en:"Counting generations", ja:"代を数える", zh:"世代的計數" }, jp:"○代目", romaji:"nan-daime",
            def:{ en:"Breweries state their generation the way other companies state a founding year: the eighteenth-generation head, the twenty-sixth. The count runs by household headship, not by blood, so an adopted heir is a full generation and nobody regards this as a footnote. Many houses also carry a hereditary personal name — every head becomes Kihei, or Zen'emon, on succeeding — which is why the same name appears in brewery records for four hundred years.",
              ja:"蔵は他の会社が創業の年を言うように代を言う。十八代目当主、二十六代目、というふうにである。数えは血ではなく家督によるので、婿養子も一代であり、誰もそれを注釈と見なさない。多くの家は襲名をも負う。当主となる者は皆、喜兵衛、あるいは善右衛門となる。同じ名が四百年にわたり蔵の記録に現れるのはそのためである。",
              zh:"酒藏陳述自家的世代，就像其他公司陳述創業年份：第十八代當家、第二十六代。世代以戶主身分而非血緣計算，因此養子繼承人算完整的一代，而且沒有人把這件事當成附註。許多家族還承襲名號——每一位當家繼位後都成為喜兵衛，或善右衛門——這正是為什麼同一個名字會在酒藏的紀錄裡連續出現四百年。" } },
          { term:{ en:"The brewer-owner", ja:"蔵元杜氏", zh:"藏元杜氏" }, jp:"蔵元杜氏", romaji:"kuramoto tōji",
            def:{ en:"For most of the modern period the owner did not brew: he ran the business and hired a tōji and a seasonal crew. Since the 1990s that has reversed at the premium end. The heir goes to a brewing course at Tokyo University of Agriculture or the Hiroshima institute, works a season somewhere else, comes home and takes the kōji room himself. This is the single biggest structural change in how sake is made, and it explains why so many notable modern brands date from a specific succession year.",
              ja:"近代のほとんどを通じて、蔵元は醸さなかった。商いを営み、杜氏と季節の蔵人を雇ったのである。一九九〇年代より、高級の側でそれが逆転した。跡取りは東京農大か広島の研究所の講座へ行き、他所で一季働き、帰って自ら麹室を持つ。酒の造られ方における最も大きな構造の変化であり、現代の名だたる銘柄の多くが特定の代替わりの年から始まる理由でもある。",
              zh:"在近代的大部分時間裡，藏元本人並不釀酒：他經營生意，僱用杜氏與季節性藏人。自一九九〇年代起，這在高級酒的一端反轉了。繼承人前往東京農業大學或廣島的研究機構修習釀造課程，到別處做一季，然後回家親自接掌麴室。這是清酒製造方式上最大的一項結構性變化，也解釋了為何如此多當代知名品牌，都可以追溯到某一個特定的接班年份。" } },
          { term:{ en:"The other businesses", ja:"もう一つの商い", zh:"另外的生意" }, jp:"兼業", romaji:"kengyō",
            def:{ en:"Very few old houses have only ever made sake. The same family typically also made soy sauce, miso or vinegar — the same organism, the same building, the same winter — and often traded rice, ran a transport business, or held farmland. Several of Japan's large food companies began as sake breweries. When a brewery survives a bad century, the reason is frequently that it was not only a brewery.",
              ja:"酒のみを造ってきた古い家はごく少ない。同じ家はたいてい醤油や味噌や酢をも造った。同じ生き物、同じ建物、同じ冬である。そして米を商い、運送を営み、田を持つことも多かった。日本の大きな食の会社のいくつかは酒蔵として始まっている。蔵が悪い一世紀を生き延びたとき、その理由はしばしば、それが蔵だけではなかったことにある。",
              zh:"只做過清酒的老字號極少。同一個家族通常也做醬油、味噌或醋——同樣的生物、同樣的建築、同樣的冬天——並且往往兼營米糧買賣、運輸業，或持有農地。日本幾家大型食品公司都是從酒藏起家的。當一家酒藏挺過了糟糕的一個世紀，理由往往是：它並不只是一家酒藏。" } }
        ] }
      ] },

    { t:"section", id:"year",
      title:{ en:"A brewery's year outside the brewing", ja:"造り以外の一年", zh:"釀造之外的一年" }, jp:"通年の仕事",
      body:[
        { t:"p", text:{
          en:"The brewing season is six months. The other six are not a holiday, and what happens in them decides a great deal about whether the brewery still exists in twenty years.",
          ja:"造りの季は半年である。残りの半年は休みではなく、そのあいだに起きることが、二十年後にその蔵がまだ存在しているかどうかの多くを決める。",
          zh:"釀造季是半年。另外半年並不是假期，而其間發生的事，大幅決定了這家酒藏二十年後是否依然存在。" } },
        { t:"steps", items:[
          { title:{en:"Spring — shipping and results",ja:"春——出荷と結果",zh:"春——出貨與成績"}, jp:"四月〜五月",
            text:{en:"The season's sake is bottled and shipped, the competition entry is submitted and judged, and the accounts for the year are closed. Equipment is stripped, cleaned and repaired.",
              ja:"その季の酒を瓶詰めして出荷し、鑑評会に出品して審査を受け、年度の決算を締める。設備は解体され、洗われ、修繕される。",
              zh:"當季的酒完成裝瓶出貨，參賽酒送出並接受評審，年度帳目結清。設備則被拆解、清洗與維修。"} },
          { title:{en:"Early summer — rice contracts",ja:"初夏——米の契約",zh:"初夏——米的契約"}, jp:"六月",
            text:{en:"Next season's rice is agreed with farmers before the crop is grown, often at a fixed price and volume. A brewery that gets this wrong will be short of its best rice fifteen months later, and there is no market to buy it from.",
              ja:"翌季の米を、作付けの前に農家と取り決める。多くは数量も価格も固定である。ここを誤った蔵は、十五か月後に最良の米を欠く。買い足せる市場は存在しない。",
              zh:"下一季的米在作物種下之前便與農家議定，多為固定價格與數量。在這一步出錯的酒藏，十五個月後就會缺少最好的米，而市場上根本買不到補。"} },
          { title:{en:"Summer — selling, and the buildings",ja:"夏——売ることと建物",zh:"夏——販售與建築"}, jp:"七月〜八月",
            text:{en:"Sales trips, tastings, importers, events, and the annual argument about price. Meanwhile the buildings get the work they cannot get in winter: roofs, drains, tank linings, the cold room.",
              ja:"営業の旅、きき酒会、輸入業者との商談、催事、そして毎年の価格をめぐる議論。そのあいだ建物は、冬にはできない手当てを受ける——屋根、排水、タンクの内張り、冷蔵室。",
              zh:"業務出差、品評會、與進口商洽談、活動，以及每年關於價格的爭論。與此同時，建築也接受冬天無法進行的整修：屋頂、排水、酒槽內襯、冷藏室。"} },
          { title:{en:"Early autumn — hiyaoroshi and hiring",ja:"初秋——ひやおろしと人",zh:"初秋——冷卸與招人"}, jp:"九月",
            text:{en:"The summer-rested sake is released, which is both a product and a signal that the year is turning. Staff for the season are confirmed; in the old system this was when the tōji's crew was assembled.",
              ja:"夏を越した酒を出荷する。それは商品であると同時に、年が巡ったという合図でもある。季の人手が確定する。かつての仕組みでは、杜氏が蔵人を集めるのがこの時であった。",
              zh:"越夏的酒出貨，那既是商品，也是年輪轉動的訊號。當季人手在此確定；在舊制度中，這正是杜氏召集班底的時候。"} },
          { title:{en:"October — it starts again",ja:"十月——ふたたび始まる",zh:"十月——再度開始"}, jp:"十月",
            text:{en:"Rice arrives, the mill runs, the kōji room is warmed and sterilised, and the first tank goes in. From here until spring, nobody has a weekend.",
              ja:"米が届き、精米機が回り、麹室が温められ清められ、最初のタンクが仕込まれる。ここから春まで、誰にも週末はない。",
              zh:"米送達、精米機開動、麴室升溫並消毒，第一槽下料。從此刻直到春天，沒有人有週末。"} }
        ] }
      ]
    },

    { t:"related", items:[
      { href:"brands.html", why:{ en:"The names on the bottles these houses make.", ja:"これらの家が造る瓶の上の名。", zh:"這些酒藏所造的酒瓶上的名字。" } },
      { href:"industry.html", why:{ en:"How many are left, and what is happening to the rest.", ja:"いくつ残り、残りに何が起きているか。", zh:"還剩下幾家，以及其餘的正在發生什麼事。" } },
      { href:"visiting.html", why:{ en:"How to get inside one.", ja:"そのうちの一つに入る方法。", zh:"怎麼進到其中一家裡面去。" } },
      { href:"equipment.html", why:{ en:"What you would see inside if you did.", ja:"入ったなら何が目に入るか。", zh:"真的進去了，會看到什麼。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- brands */
SAKE.pages["brands"] = {
  kicker: { en: "Place · 11", ja: "産地 · 11", zh: "產地 · 11" },
  title:  { en: "Brands & Houses", ja: "銘柄と蔵元", zh: "品牌與酒藏" },
  jp: "銘柄をたどる",
  lede: {
    en: "A brewery and a brand are not the same thing, and in Japan they are frequently not even the same name. Asahi Shuzō makes Dassai; Takagi Shuzō makes Jūyondai; Aramasa Shuzō makes Aramasa. Some houses run one brand and some run six, aimed at different markets and price points. This page is a working map of the names an English- or Chinese-reading drinker is most likely to meet: the historic giants, the modern reputational houses, the cult allocations, and what each is actually known for. It is not a ranking, and it is deliberately not a shopping list.",
    ja: "蔵と銘柄は同じものではなく、日本ではしばしば名前すら一致しない。旭酒造は獺祭を、高木酒造は十四代を、新政酒造は新政を造る。銘柄を一つだけ持つ蔵もあれば、市場も価格帯も異なる六つの銘柄を持つ蔵もある。本頁は、英語や中国語で日本酒に触れる飲み手が出会う可能性の最も高い名前の実用的な地図である——歴史ある大手、現代に評価を築いた蔵、入手困難な人気銘柄、そしてそれぞれが実際に何で知られているか。順位づけではないし、意図して買い物リストにもしていない。",
    zh: "酒藏與品牌並非同一回事，在日本甚至常連名字都不同。旭酒造釀獺祭，高木酒造釀十四代，新政酒造釀新政。有的酒藏只有一個品牌，有的則擁有六個，各自對應不同市場與價位。本頁是一份實用地圖，列出以英文或中文閱讀的飲者最可能遇見的名字：歷史悠久的大廠、當代建立聲譽的酒藏、一瓶難求的名品，以及各自真正以什麼聞名。這不是排名，也刻意不是一份購物清單。"
  },
  body: [

    { t:"section", id:"vocabulary",
      title:{ en:"Brewery, brand, house", ja:"蔵・銘柄・家", zh:"酒藏、品牌、家業" }, jp:"用語",
      body:[
        { t:"defs", items:[
          { term:{en:"Kuramoto",ja:"蔵元",zh:"藏元"}, jp:"蔵元", romaji:"kuramoto",
            def:{en:"The owning house — usually a family, often the same family for three or four centuries. The kuramoto owns the licence, the buildings and the brand, and traditionally did not brew: that was the tōji's job. Many modern kuramoto now brew themselves, which is one of the biggest structural changes of the last forty years.",
              ja:"所有する家であり、たいていは一族、しばしば三、四世紀にわたって同じ一族である。蔵元は免許・建物・銘柄を所有するが、伝統的には自ら造りはしなかった。それは杜氏の仕事だったからである。いまでは自ら醸す蔵元が多く、これはこの四十年で最も大きな構造変化の一つである。",
              zh:"擁有酒藏的家族，通常是同一家族傳承三、四個世紀。藏元擁有執照、建築與品牌，但傳統上並不親自釀酒——那是杜氏的工作。如今許多現代藏元親自釀造，這是過去四十年間最重大的結構性變化之一。"} },
          { term:{en:"Meigara",ja:"銘柄",zh:"銘柄"}, jp:"銘柄", romaji:"meigara",
            def:{en:"The brand name printed largest on the label. Historically chosen for auspicious meaning — <em>masamune</em> (righteous ancestry), <em>tsuru</em> (crane), <em>kiku</em> (chrysanthemum) — which is why so many old brands share syllables. A single kura may hold several, typically an everyday brand, a premium brand, and sometimes a separate export brand.",
              ja:"酒標に最も大きく刷られた銘の名。歴史的には吉祥の意で選ばれた——正宗、鶴、菊——ゆえに古い銘柄には同じ語が繰り返し現れる。一つの蔵が複数を持つことも多く、通常は日常向け、上級、そして輸出専用の銘柄が分かれている。",
              zh:"酒標上印得最大的品牌名。歷史上多取吉祥之意——正宗、鶴、菊——因此老品牌之間常共用相同字詞。一家酒藏可能同時擁有數個品牌，通常分為日常款、高階款，有時還有專供出口的品牌。"} },
          { term:{en:"Jizake",ja:"地酒",zh:"地酒"}, jp:"地酒", romaji:"jizake",
            def:{en:"Literally “local sake”, and in practice a marketing category invented in the 1970s to distinguish small regional producers from the national brands of Nada and Fushimi. The jizake boom made it possible for a brewery in a village of two thousand people to sell in Tokyo, and reshaped the industry.",
              ja:"文字どおりには「その土地の酒」だが、実際には、灘や伏見の全国銘柄と小さな地方の造り手を区別するために一九七〇年代に生まれた売り方の区分である。地酒ブームは、人口二千の村の蔵が東京で売ることを可能にし、業界の形を変えた。",
              zh:"字面意為「當地的酒」，實際上是 1970 年代為區別灘、伏見的全國性品牌與地方小型生產者而創造的行銷分類。地酒風潮讓一個兩千人村莊裡的酒藏得以在東京販售，並重塑了整個產業。"} },
          { term:{en:"Okegai",ja:"桶買い",zh:"桶買"}, jp:"桶買い・桶売り",
            def:{en:"The wholesale trade in bulk sake between breweries: a large house buys unbranded sake by the tank from small ones and bottles it under its own name. Once enormous — much of the volume of the biggest brands in the 1970s — and much reduced today, but not gone. It is the main reason brewery count and brand count have never matched.",
              ja:"蔵どうしのあいだで行われる、無銘の酒をタンク単位で売買する取引。大手が小さな蔵からまとめて買い、自社の名で瓶詰めする。かつては巨大な規模で——一九七〇年代の最大手銘柄の量の多くがこれだった——現在はずっと縮んだが、消えてはいない。蔵の数と銘柄の数が一致したことがない主な理由である。",
              zh:"酒藏之間以整槽為單位買賣無品牌清酒的批發交易：大廠向小廠成槽收購，再以自家名義裝瓶。這曾是巨大的規模——1970 年代最大品牌的產量多半如此而來——如今大幅萎縮，但並未消失。這正是酒藏數與品牌數從未吻合的主因。"} }
        ] },
        { t:"note", label:{en:"Reading a name",ja:"名前の読み方",zh:"名字的讀法"}, text:{
          en:"Brand names are usually two or three kanji and rarely translate usefully. <em>Masamune</em> (正宗) appears in dozens of brands because a Kyoto brewer in the 1840s punned on <em>seishu</em>, the legal word for sake; the reading stuck and everyone copied it. <em>Dassai</em> (獺祭) means “otter festival”, a literary allusion to an otter laying out its catch — and to a Meiji poet who wrote surrounded by scattered books. Nothing about the name tells you what is in the bottle.",
          ja:"銘柄名はたいてい漢字二字か三字で、有益に訳せることはまれである。「正宗」が数十の銘柄に現れるのは、一八四〇年代の京都の造り手が、酒の法律上の呼び名である「清酒（せいしゅ）」に掛けた洒落に由来する。その読みが定着し、皆が真似た。「獺祭」は獺が獲物を並べる姿を指す故事であり、書物を散らかして詩を書いた明治の歌人にも通じる。名前は、瓶の中身については何も語らない。",
          zh:"品牌名多為二至三個漢字，鮮少能有意義地翻譯。「正宗」出現在數十個品牌中，源於 1840 年代一位京都釀造者拿清酒的法定名稱「清酒（せいしゅ）」開的諧音玩笑；此讀法流傳開來，眾人競相模仿。「獺祭」意為「水獺的祭典」，典出水獺陳列漁獲之貌，亦呼應一位在滿地散書中寫作的明治歌人。名字本身，對瓶中之物毫無透露。" } }
      ]
    },

    { t:"section", id:"historic",
      title:{ en:"The historic houses", ja:"歴史ある大手", zh:"歷史悠久的大廠" }, jp:"灘・伏見",
      body:[
        { t:"p", text:{
          en:"These are the names on the shelves of every Japanese supermarket, most of them founded in the seventeenth or eighteenth century and industrialised in the twentieth. They are frequently dismissed by enthusiasts and should not be: several make outstanding premium sake alongside their volume lines, and the technical research departments of the biggest have driven much of what the whole industry knows.",
          ja:"日本のあらゆるスーパーマーケットの棚に並ぶ名である。多くは十七、十八世紀に創業し、二十世紀に工業化した。愛好家に軽んじられがちだが、そうすべきではない。量産の製品と並んで、卓越した上級酒を造っている蔵がいくつもあり、最大手の技術研究部門は、業界全体が知る事柄の多くを生み出してきた。",
          zh:"這些是每一家日本超市貨架上都有的名字，多創業於十七、十八世紀，並在二十世紀工業化。愛好者常對它們不屑一顧，但不應如此：其中數家在量產線之外亦釀造出色的高階酒，而最大廠的技術研究部門，更推動了整個業界所知的大部分知識。" } },
        { t:"table",
          cols:[{en:"Brand",ja:"銘柄",zh:"品牌"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"House · place",ja:"蔵元・所在",zh:"藏元・所在"},{en:"Known for",ja:"知られていること",zh:"以何聞名"}],
          jpCols:[1],
          rows:[
            ["Hakutsuru","白鶴",{en:"Hakutsuru Shuzō · Nada, Hyōgo (1743)",ja:"白鶴酒造・灘（1743）",zh:"白鶴酒造・灘（1743）"},
             {en:"Japan's largest producer by volume. Clean, dry Nada house style; also runs a serious research programme and a restored wooden-brewery museum.",ja:"生産量で日本最大。清らかで辛い灘の酒質。本格的な研究部門と、復元された木造蔵の資料館を持つ。",zh:"以產量計為日本最大。潔淨辛口的灘系酒質；同時擁有正規的研究部門與一座復原的木造酒藏博物館。"}],
            ["Gekkeikan","月桂冠",{en:"Gekkeikan · Fushimi, Kyoto (1637)",ja:"月桂冠・伏見（1637）",zh:"月桂冠・伏見（1637）"},
             {en:"The Fushimi soft-water style, and the industry's most consequential research laboratory — pasteurisation studies, preservative-free bottling in 1911, and much of the modern understanding of kōji enzymes.",ja:"伏見の軟水の酒質と、業界で最も影響の大きい研究所。火入れの研究、一九一一年の防腐剤なし瓶詰、そして麹酵素に関する現代的理解の多くがここから出た。",zh:"伏見軟水風格，以及業界影響最深遠的研究所——火入研究、1911 年的無防腐劑裝瓶，以及現代對麴酵素理解的大部分成果。"}],
            ["Ozeki","大関",{en:"Ozeki · Nada (1711)",ja:"大関・灘（1711）",zh:"大關・灘（1711）"},
             {en:"Invented the one-cup format in 1964, which changed how sake is sold everywhere. Also the first Japanese brewery to brew in the United States.",ja:"一九六四年にワンカップを発明し、日本酒の売られ方を世界的に変えた。米国で醸造を始めた最初の日本の蔵でもある。",zh:"1964 年發明杯裝（One Cup）形式，改變了全世界清酒的販售方式。也是第一家在美國釀酒的日本酒藏。"}],
            ["Kiku-Masamune","菊正宗",{en:"Kiku-Masamune · Nada (1659)",ja:"菊正宗・灘（1659）",zh:"菊正宗・灘（1659）"},
             {en:"The most stubbornly dry of the big Nada houses, and one of the very few large producers still making a large proportion of its sake by the kimoto method.",ja:"灘の大手のなかで最も頑固に辛口であり、生酛による酒を高い比率で造り続けている数少ない大手の一つ。",zh:"灘系大廠中最固執地走辛口路線者，也是極少數仍以生酛法釀造大比例產品的大型生產者之一。"}],
            ["Sawanotsuru","澤の鶴",{en:"Sawanotsuru · Nada (1717)",ja:"澤の鶴・灘（1717）",zh:"澤之鶴・灘（1717）"},
             {en:"A rice-merchant house before it was a brewery, and still unusually rice-focused. Maintains a preserved Edo-period kura as a museum.",ja:"蔵になる前は米屋であり、いまも米への傾きが際立つ。江戸期の蔵を資料館として保存している。",zh:"成為酒藏之前是米商，至今仍格外重視米。並保存一座江戶時期的酒藏作為資料館。"}],
            ["Shirayuki","白雪",{en:"Konishi Shuzō · Itami, Hyōgo (1550)",ja:"小西酒造・伊丹（1550）",zh:"小西酒造・伊丹（1550）"},
             {en:"From Itami, the district that invented clear sake before Nada eclipsed it. One of the oldest continuously operating breweries in Japan.",ja:"灘に取って代わられる前に清酒を生んだ伊丹の蔵。日本で最も長く操業を続ける蔵の一つ。",zh:"來自伊丹——在被灘取代之前發明清澈之酒的地區。是日本持續營業最久的酒藏之一。"}],
            ["Kubota","久保田",{en:"Asahi Shuzō · Nagaoka, Niigata (1830)",ja:"朝日酒造・長岡（1830）",zh:"朝日酒造・長岡（1830）"},
             {en:"The brand that defined <em>tanrei karakuchi</em> for a generation when it launched in 1985, and made Niigata a byword for clean dry sake. Not to be confused with the Yamaguchi house of the same name that makes Dassai.",ja:"一九八五年の発売で一世代にわたり淡麗辛口を定義し、新潟を清らかで辛い酒の代名詞にした銘柄。獺祭を造る同名の山口の蔵とは別である。",zh:"1985 年推出後為一整個世代定義了「淡麗辛口」，並使新潟成為潔淨辛口酒的代名詞。切勿與釀造獺祭的同名山口酒藏混淆。"}],
            ["Hakkaisan","八海山",{en:"Hakkaisan Shuzō · Minamiuonuma, Niigata (1922)",ja:"八海醸造・南魚沼（1922）",zh:"八海釀造・南魚沼（1922）"},
             {en:"Snow-country Niigata at its most disciplined: restrained, clean, food-first. Also runs a snow-cooled storage warehouse and a large kōji-products business.",ja:"雪国新潟の最も律された姿——控えめで清らか、食を先に置く。雪室貯蔵と大きな麹製品事業も営む。",zh:"雪國新潟最為自律的一面：內斂、潔淨、以佐餐為先。同時經營雪室貯藏設施與規模不小的麴製品事業。"}]
          ] }
      ]
    },

    { t:"section", id:"modern",
      title:{ en:"The modern reputational houses", ja:"現代に評価を築いた蔵", zh:"當代建立聲譽的酒藏" }, jp:"現代の名蔵",
      body:[
        { t:"p", text:{
          en:"Since the 1980s a second tier of names has come to define what serious drinkers mean by good sake. Almost all are small, almost all are family-run, and almost all are cases of a young heir taking over a failing brewery and refusing to make cheap sake.",
          ja:"一九八〇年代以降、真剣な飲み手が「良い酒」と言うときに指すものを定義する、第二の名前の層が現れた。そのほとんどは小さく、ほとんどが家族経営であり、そしてほとんどが、傾いた蔵を継いだ若い当主が安い酒を造ることを拒んだ結果である。",
          zh:"1980 年代以來，出現了第二層名字，定義了認真的飲者所謂的「好酒」。它們幾乎都規模不大、幾乎都是家族經營，也幾乎都是同一種故事：年輕的繼承人接下經營不善的酒藏，並拒絕再釀廉價酒。" } },
        { t:"table",
          cols:[{en:"Brand",ja:"銘柄",zh:"品牌"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"House · place",ja:"蔵元・所在",zh:"藏元・所在"},{en:"Known for",ja:"知られていること",zh:"以何聞名"}],
          jpCols:[1],
          rows:[
            ["Dassai","獺祭",{en:"Asahi Shuzō · Iwakuni, Yamaguchi",ja:"旭酒造・岩国（山口）",zh:"旭酒造・岩國（山口）"},
             {en:"Junmai daiginjō only, no tōji, year-round brewing in a temperature-controlled tower, and relentless data. Polarising and enormously successful; the single most recognised sake brand outside Japan.",ja:"純米大吟醸のみ、杜氏を置かず、温度管理された高層の蔵で四季醸造し、徹底してデータを取る。賛否を呼びつつ大成功を収めた、日本国外で最も知られた銘柄である。",zh:"只做純米大吟釀、不設杜氏、在恆溫高樓中四季釀造，並徹底以數據為本。評價兩極卻極為成功；是日本境外辨識度最高的清酒品牌。"}],
            ["Jūyondai","十四代",{en:"Takagi Shuzō · Murayama, Yamagata",ja:"高木酒造・村山（山形）",zh:"高木酒造・村山（山形）"},
             {en:"The sake that turned the market from dry to fragrant-and-sweet in the 1990s, and the most sought-after allocation in Japan. Almost impossible to buy at list price; frequently counterfeited.",ja:"一九九〇年代に市場を辛口から芳醇旨口へ転じさせた酒であり、日本で最も入手困難な銘柄。定価で買うことはほぼ不可能で、贋作も多い。",zh:"1990 年代把市場從辛口扭轉為芳香旨口的那款酒，也是日本最一瓶難求的配額品。幾乎不可能以定價購得，且常有仿冒。"}],
            ["Kokuryū","黒龍",{en:"Kokuryū Shuzō · Eiheiji, Fukui",ja:"黒龍酒造・永平寺（福井）",zh:"黑龍酒造・永平寺（福井）"},
             {en:"Released Japan's first modern daiginjō for retail sale in 1975, when the category existed only in competition. Precise, restrained, and quietly ambitious.",ja:"一九七五年、大吟醸がまだ鑑評会のなかにしか存在しなかった時代に、日本で最初の市販大吟醸を世に出した。精緻で控えめ、そして静かに野心的である。",zh:"1975 年推出日本第一款市售的現代大吟釀，當時這個類別只存在於鑑評會中。精準、內斂，且懷有安靜的野心。"}],
            ["Isojiman","磯自慢",{en:"Isojiman Shuzō · Yaizu, Shizuoka",ja:"磯自慢酒造・焼津（静岡）",zh:"磯自慢酒造・燒津（靜岡）"},
             {en:"Shizuoka elegance taken to its limit: quiet, clean, exact, built to sit beside fish. Served at the 2008 G8 summit dinner, which did its reputation no harm.",ja:"静岡の端正さを極限まで押し進めた酒——静かで清らかで正確、魚に寄り添うために造られている。二〇〇八年の主要国首脳会議の晩餐に供され、その評価を高めた。",zh:"把靜岡的優雅推到極致：安靜、潔淨、精確，為佐魚而生。曾用於 2008 年八大工業國高峰會晚宴，聲譽因而更盛。"}],
            ["Aramasa","新政",{en:"Aramasa Shuzō · Akita City",ja:"新政酒造・秋田市",zh:"新政酒造・秋田市"},
             {en:"Home of Kyōkai yeast No. 6, and since 2012 a total reinvention: junmai only, No. 6 only, Akita rice only, no added alcohol, and a return to wooden vats and kimoto. The most influential small brewery of its generation.",ja:"きょうかい六号酵母の生家であり、二〇一二年以降は徹底した作り替えを行った——純米のみ、六号のみ、秋田県産米のみ、アルコール添加なし、そして木桶と生酛への回帰。同世代で最も影響力のある小さな蔵である。",zh:"協會六號酵母的發源地，並自 2012 年起徹底重塑：只做純米、只用六號、只用秋田米、不添加酒精，並回歸木桶與生酛。是同世代最具影響力的小型酒藏。"}],
            ["Nabeshima","鍋島",{en:"Fukuchiyo Shuzō · Kashima, Saga",ja:"富久千代酒造・鹿島（佐賀）",zh:"富久千代酒造・鹿島（佐賀）"},
             {en:"A tiny Kyushu brewery that won the IWC Champion Sake trophy in 2011 and rewrote what southern Japan was assumed to be capable of.",ja:"二〇一一年にIWCのチャンピオン・サケを獲得し、九州の造りに期待されていた限界を書き換えた、ごく小さな蔵。",zh:"一家極小的九州酒藏，2011 年奪得 IWC 冠軍清酒獎，改寫了外界對日本南方釀造能力的想像。"}],
            ["Hiroki","飛露喜",{en:"Hiroki Shuzō · Aizu, Fukushima",ja:"廣木酒造・会津（福島）",zh:"廣木酒造・會津（福島）"},
             {en:"The brewery credited with starting the modern taste for unfiltered, undiluted, unpasteurised junmai; the template for a whole generation of Tōhoku sake.",ja:"無濾過・無加水・生の純米という現代の嗜好を始めたとされる蔵であり、東北の一世代の酒の雛型となった。",zh:"被認為開創了當代對無濾過、原酒、生酒純米之偏好的酒藏；也是整整一代東北清酒的範本。"}],
            ["Jikon","而今",{en:"Kiyasho Shuzō · Nabari, Mie",ja:"木屋正酒造・名張（三重）",zh:"木屋正酒造・名張（三重）"},
             {en:"A one-man revival of a brewery that had nearly stopped; intensely fruity, very low-production, and among the hardest bottles in Japan to find.",ja:"ほぼ止まりかけていた蔵を一人で立て直した銘柄。強く果実的で、生産量はきわめて少なく、日本で最も見つけにくい瓶の一つである。",zh:"由一人重振一家幾近停產的酒藏；果味濃郁、產量極少，是日本最難尋得的酒瓶之一。"}],
            ["Denshu","田酒",{en:"Nishida Shuzōten · Aomori",ja:"西田酒造店・青森",zh:"西田酒造店・青森"},
             {en:"Named to mean “rice-field sake”, and made without added alcohol since 1974 — an early and pointed statement when almost nobody else was doing it.",ja:"「田の酒」を意味する名をもち、一九七四年以来アルコール無添加を貫く。誰もそうしていなかった時代の、早く鋭い意思表示であった。",zh:"名字意為「田之酒」，自 1974 年起即不添加酒精——在幾乎無人如此的年代，這是一項既早且尖銳的宣示。"}],
            ["Kamoshibito Kuheiji","醸し人九平次",{en:"Banjō Jōzō · Nagoya, Aichi",ja:"萬乗醸造・名古屋（愛知）",zh:"萬乘釀造・名古屋（愛知）"},
             {en:"Built its reputation in Paris restaurants before Japan noticed; the house also farms its own rice in Hyōgo and owns a Burgundy domaine.",ja:"日本が気づく前にパリの料理店で評価を築いた。兵庫で自ら米を作り、ブルゴーニュにドメーヌも所有する。",zh:"在日本注意到之前，先於巴黎的餐廳建立聲譽；該藏亦在兵庫自耕稻米，並在勃根地擁有一座酒莊。"}],
            ["Kaze no Mori","風の森",{en:"Yucho Shuzō · Gose, Nara",ja:"油長酒造・御所（奈良）",zh:"油長酒造・御所（奈良）"},
             {en:"Unpasteurised, undiluted and lightly sparkling as standard, made in the prefecture where clear sake was invented. A working argument that fresh sake is a different drink.",ja:"生・無加水・微発泡を基本とし、清酒が生まれた県で造られる。搾りたての酒は別の飲み物である、という実践的な主張である。",zh:"以生酒、原酒、微氣泡為常態，產於清酒誕生之縣。這是一項以實作提出的主張：新鮮的酒是另一種飲品。"}],
            ["Tedorigawa","手取川",{en:"Yoshida Shuzōten · Hakusan, Ishikawa",ja:"吉田酒造店・白山（石川）",zh:"吉田酒造店・白山（石川）"},
             {en:"Noto-tōji tradition in a modern frame; widely known abroad through the documentary <em>The Birth of Saké</em>.",ja:"能登杜氏の伝統を現代の枠組みで受け継ぐ。記録映画『The Birth of Saké』を通じて海外でも広く知られる。",zh:"以現代框架承接能登杜氏傳統；因紀錄片《The Birth of Saké》而廣為海外所知。"}]
          ] },
        { t:"note", label:{en:"Why you may not find these",ja:"見つからないことがある理由",zh:"為何你可能找不到"}, text:{
          en:"Several of the brands above are allocated rather than sold: the brewery decides which shops may carry them, in what quantity, and often forbids online resale. A shop that stocks Jūyondai has usually earned it over a decade of relationship. If you see a famous allocation on a foreign website at four times list price, you are looking at grey-market stock that may have spent a summer in a warm container.",
          ja:"上に挙げた銘柄のいくつかは、売られるというより配分される。どの酒販店が、どれだけ扱えるかを蔵が決め、しばしばネットでの転売を禁じる。十四代を置く店は、たいてい十年の関係を積み上げてそれを得ている。名高い銘柄が海外のサイトに定価の四倍で出ていたなら、それは並行流通の在庫であり、夏を暖かいコンテナで過ごしたかもしれない品である。",
          zh:"上述數個品牌與其說是販售，不如說是配額：由酒藏決定哪些店家可以販賣、可賣多少，並常禁止網路轉售。有十四代的店家，通常是經過十年關係經營才取得資格。若你在外國網站上看到知名配額品以定價四倍出售，那是平行水貨，且可能在溫熱的貨櫃裡度過了一個夏天。" } }
      ]
    },

    { t:"section", id:"reading",
      title:{ en:"How to read a brand you have never met", ja:"知らない銘柄の読み方", zh:"如何判讀陌生品牌" }, jp:"手がかり",
      body:[
        { t:"p", text:{
          en:"There are roughly 1,100 breweries and several thousand brands. Most of what you will encounter in a good shop will be unfamiliar, and that is the point. Four questions will tell you more than the brand name does.",
          ja:"蔵はおよそ千百、銘柄は数千に及ぶ。良い酒販店で出会うものの大半は見知らぬ名前であり、それこそが良いのである。四つの問いが、銘柄名よりも多くを教えてくれる。",
          zh:"日本約有一千一百家酒藏、數千個品牌。你在好酒鋪裡遇到的多半是陌生的名字，而這正是重點所在。四個問題能告訴你的，比品牌名多得多。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Which prefecture?",ja:"どの県か",zh:"哪一縣？"},
            d:{en:"It sets the water, the climate and the likely house style. Niigata, Shizuoka and Kōchi lean dry and clean; Yamagata, Fukushima and Akita lean fragrant and soft; Hyōgo and Hiroshima have their own long-established schools.",ja:"水、気候、そしてありうる酒質が決まる。新潟・静岡・高知は辛く清らかに、山形・福島・秋田は華やかで柔らかに傾く。兵庫と広島には独自の確立した流派がある。",zh:"它決定了水、氣候與可能的酒質走向。新潟、靜岡、高知偏辛口潔淨；山形、福島、秋田偏芳香柔軟；兵庫與廣島則各有長久確立的流派。"} },
          { h:{en:"Junmai or not, and what milling?",ja:"純米か否か、精米歩合は",zh:"是否純米？精米幾何？"},
            d:{en:"Together these place the sake on the map of categories far more reliably than the name. A junmai ginjō at 55% from a small kura is a known quantity even when the brand is not.",ja:"この二つが揃えば、名前よりはるかに確実に、その酒を分類の地図の上に置ける。小さな蔵の精米歩合55%の純米吟醸は、銘柄を知らなくても、性格の見当がつく。",zh:"這兩項合起來，比名字更可靠地把酒定位在分類地圖上。一家小酒藏、精米步合 55% 的純米吟釀，即使品牌陌生，性格也大致可知。"} },
          { h:{en:"How big is the brewery?",ja:"蔵の規模は",zh:"酒藏規模多大？"},
            d:{en:"A house making 300 koku a year and one making 300,000 are different businesses with different aims. Neither is automatically better; they are answering different questions.",ja:"年産三百石の家と三十万石の会社は、目的の異なる別の事業である。どちらが自動的に優れているわけでもない。異なる問いに答えているのである。",zh:"年產三百石的家業與三十萬石的公司，是目標不同的兩種事業。誰也不會自動地更好；它們回答的是不同的問題。"} },
          { h:{en:"Who does the shop recommend?",ja:"店は何を勧めるか",zh:"店家推薦什麼？"},
            d:{en:"A specialist sake shop that stores cold and turns stock quickly is worth more than any brand knowledge you can acquire. Ask what arrived this month.",ja:"冷蔵で保管し、在庫の回転が速い専門の酒販店は、身につけうるどんな銘柄の知識よりも価値がある。今月何が入ったかを尋ねること。",zh:"一家冷藏保存、庫存周轉快的清酒專門店，比你所能累積的任何品牌知識都更有價值。問問這個月進了什麼。"} }
        ] },
        { t:"p", text:{
          en:"One last caution about brand worship. The allocation brands are excellent, but the correlation between price paid at resale and pleasure delivered is weak, and a hundred breweries you have never heard of make sake as good as the famous ones for a third of the money. The reason to learn the famous names is to have a shared vocabulary, not to build a shopping list.",
          ja:"銘柄崇拝について、最後に一つ注意を。入手困難な銘柄は確かに優れているが、転売価格と得られる喜びの相関は弱く、聞いたこともない百の蔵が、有名銘柄と同じくらい良い酒を三分の一の値で造っている。有名な名を覚える理由は、共有できる語彙を持つためであって、買い物リストを作るためではない。",
          zh:"最後對品牌崇拜提一句提醒。配額品牌確實優秀，但轉售價格與所獲愉悅之間的相關性很弱，而上百家你從未聽過的酒藏，正以三分之一的價格釀出與名牌同樣好的酒。記住這些名字的理由，是為了擁有共通的語彙，而不是為了列出一張購物清單。" } }
      ]
    },

{ t:"section", id:"naming",
      title:{ en:"How a sake name is built", ja:"銘柄名の作られ方", zh:"酒名是怎麼造出來的" }, jp:"命名の型",
      body:[
        { t:"figure",
          caption:{
            en:"When each pattern is at its strongest. The six families do not replace one another — every one of them is still in use — but each has a period in which it is the obvious thing to call a new brand, and that is what the solid bands mark. The practical use of the chart is backwards: given a name you have never seen, the pattern it belongs to narrows down the kind of house that chose it and, roughly, the decade in which the choice was made.",
            ja:"それぞれの型が最も強く働く時期。六つの系統は互いを置き換えるものではなく——そのいずれもがいまなお用いられている——しかし各々に、新しい銘柄をそう名づけるのが当然となる時期がある。濃い帯が示すのはそれである。この図の実用は逆向きにある。見たことのない名に出会ったとき、それが属する型は、その名を選んだ蔵の性格と、選ばれたおおよその年代とを絞り込む。",
            zh:"每一種模式最強勢的時期。這六個系統並不互相取代——每一種至今都仍在使用——但每一種都有一段時期，在那段時期裡用它來命名一個新品牌是理所當然的事，深色帶標示的就是這個。這張圖的實際用法是反過來的：遇到一個沒見過的名字，它所屬的模式能幫你縮小選擇它的酒藏是什麼性格，以及大致是哪個年代做的選擇。" },
          svg: function (lang, L) {
            var W = 760, H = 324, X0 = 176, X1 = 730, TOP = 70, BOT = 274;
            function x(y) { var t = y <= 1868 ? (y - 1600) / 268 * 0.28 : 0.28 + (y - 1868) / 162 * 0.72; return X0 + t * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, ticks = [[1600, "1600"], [1750, "1750"], [1868, "1868"], [1920, "1920"], [1970, "1970"], [2000, "2000"], [2025, "2025"]];
            for (i = 0; i < ticks.length; i++) {
              s += '<line x1="' + x(ticks[i][0]).toFixed(1) + '" y1="' + TOP + '" x2="' + x(ticks[i][0]).toFixed(1) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + x(ticks[i][0]).toFixed(1) + '" y="' + (BOT + 16) + '" text-anchor="middle" font-size="9" fill="#B4AEA4">' + ticks[i][1] + '</text>';
            }
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "六つの命名の型・濃い帯はその型が最も選ばれる時期" : lang === "zh" ? "六種命名模式・深色帶為該模式最常被選用的時期" : "SIX NAMING PATTERNS — SOLID WHERE THE PATTERN IS THE OBVIOUS CHOICE") + '</text>';
            var rows = [
              { n:{ en:"Auspicious words", ja:"瑞祥", zh:"吉祥語" }, ex:"鶴・亀・松・寿・宝", a:1600, b:2025, da:1600, db:1935 },
              { n:{ en:"Masamune", ja:"正宗", zh:"正宗" }, ex:"櫻正宗・菊正宗", a:1800, b:2025, da:1840, db:1925 },
              { n:{ en:"The house itself", ja:"家名", zh:"家名" }, ex:"久保田・田酒・飛露喜", a:1600, b:2025, da:1975, db:2025 },
              { n:{ en:"Place", ja:"地名", zh:"地名" }, ex:"八海山・賀茂鶴・出羽桜", a:1600, b:2025, da:1972, db:2025 },
              { n:{ en:"Nature and season", ja:"自然・季節", zh:"自然與季節" }, ex:"越乃寒梅・雨後の月", a:1880, b:2025, da:1965, db:2025 },
              { n:{ en:"Literary and Zen", ja:"文学・禅語", zh:"文學與禪語" }, ex:"而今・十四代・写楽", a:1975, b:2025, da:1992, db:2025 }
            ];
            for (i = 0; i < rows.length; i++) {
              var ry = 92 + i * 32;
              s += '<rect x="' + x(rows[i].a).toFixed(1) + '" y="' + (ry - 7) + '" width="' + (x(rows[i].b) - x(rows[i].a)).toFixed(1) + '" height="14" fill="#EDE9E0"/>';
              s += '<rect x="' + x(rows[i].da).toFixed(1) + '" y="' + (ry - 7) + '" width="' + (x(rows[i].db) - x(rows[i].da)).toFixed(1) + '" height="14" fill="#B09E7C"/>';
              s += '<text x="30" y="' + (ry - 1) + '" font-size="10.5" fill="#201E1B">' + L(rows[i].n) + '</text>';
              s += '<text x="30" y="' + (ry + 12) + '" font-size="9" fill="#A39C91">' + rows[i].ex + '</text>';
            }
            var marks = [
              { y:1868, t:{ en:"Meiji", ja:"明治", zh:"明治" } },
              { y:1975, t:{ en:"jizake boom", ja:"地酒ブーム", zh:"地酒風潮" } },
              { y:1995, t:{ en:"successors", ja:"後継世代", zh:"後繼世代" } }
            ];
            for (i = 0; i < marks.length; i++) {
              var mx = x(marks[i].y);
              s += '<line x1="' + mx.toFixed(1) + '" y1="62" x2="' + mx.toFixed(1) + '" y2="' + BOT + '" stroke="#C6BCA6" stroke-dasharray="2 3"/>';
              s += '<text x="' + (mx + (i === 1 ? -5 : 5)).toFixed(1) + '" y="59" text-anchor="' + (i === 1 ? "end" : "start") + '" font-size="9" fill="#8B857C">' + L(marks[i].t) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "定性的な図である。帯は銘柄数の集計ではなく、記述された傾向を読んだものにすぎない。"
                  : lang === "zh" ? "此圖為定性描述：帶狀區間並非品牌數量的統計，而是對上述傾向的一種判讀。"
                  : "Qualitative. The bands read the tendency described above; they are not a count of brands.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Sake brand names are not arbitrary. Almost all of them fall into one of six patterns, and once the patterns are visible a shelf of unfamiliar kanji becomes readable — you can usually tell, from the name alone, roughly when a brand was created and what kind of house created it.",
          ja:"日本酒の銘柄名は恣意的ではない。そのほとんどは六つの型のいずれかに収まり、型が見えるようになれば、見慣れぬ漢字の並ぶ棚は読めるものになる。名だけから、その銘柄がおおよそいつ生まれ、どのような蔵が生んだかは、たいてい判る。",
          zh:"日本酒的品牌名不是隨意取的。它們幾乎都落入六種模式之一；一旦看出模式，一整排陌生漢字的酒架就變得可讀——單憑名字，你通常就能判斷這個品牌大約誕生於何時、出自什麼樣的酒藏。" } },

        { t:"table",
          cols:[{en:"Pattern",ja:"型",zh:"模式"},{en:"Examples",ja:"例",zh:"例"},{en:"What it signals",ja:"何を示すか",zh:"傳達什麼"}],
          jpCols:[1],
          rows:[
            [{en:"Auspicious words",ja:"瑞祥",zh:"吉祥語"},"鶴・亀・松・寿・宝・福",
             {en:"Cranes, turtles, pines, longevity, treasure. The default register of Edo and Meiji naming and still the commonest pattern among the big Nada and Fushimi houses. A name in this family almost always signals an old, large, mainstream producer.",
              ja:"鶴、亀、松、寿、宝、福。江戸から明治にかけての命名の標準的な調子であり、灘・伏見の大手において今なお最も多い型である。この系統の名は、ほぼ常に古く大きな主流の蔵を示す。",
              zh:"鶴、龜、松、壽、寶、福。這是江戶到明治命名的標準語域，至今仍是灘與伏見大廠中最常見的模式。屬於這一系的名字，幾乎必然指向歷史悠久、規模大的主流生產者。"}],
            [{en:"Place",ja:"地名",zh:"地名"},"八海山・賀茂鶴・出羽桜",
             {en:"A mountain, a river, an old province, a district. Common in every era and especially strong after the 1970s <em>jizake</em> boom, when the point of a brand became precisely that it was from somewhere.",
              ja:"山、川、旧国名、地区。どの時代にも多いが、一九七〇年代の地酒ブーム以降とりわけ強い。銘柄の眼目が、まさにどこかの土地のものであることになったからである。",
              zh:"山、河、舊國名、地區。各時代都常見，一九七〇年代地酒風潮之後尤其鮮明——因為那時品牌的重點，正是「它來自某個地方」。"}],
            [{en:"The house itself",ja:"家名",zh:"家名"},"久保田・田酒・飛露喜",
             {en:"The founding family's surname or shop name, sometimes hidden in a phonetic pun. These read as statements of accountability: the family is signing the bottle.",
              ja:"創業家の姓や屋号であり、時に音の遊びのなかに隠される。これらは責任の表明として読める——家が瓶に署名しているのである。",
              zh:"創業家族的姓氏或商號，有時藏在諧音的字面遊戲裡。這類名字讀來像是一種擔保聲明：家族在酒瓶上簽了名。"}],
            [{en:"Literary and Zen",ja:"文学・禅語",zh:"文學與禪語"},"而今・十四代・写楽",
             {en:"A classical phrase, a Buddhist term, a reference to a woodblock artist. Overwhelmingly a post-1990 pattern, and a reliable marker of a successor generation repositioning a family brewery for a national market.",
              ja:"古典の一句、仏教語、浮世絵師への言及。圧倒的に一九九〇年代以降の型であり、後継世代が家業の蔵を全国市場に向けて置き直したことの確かな標である。",
              zh:"古典語句、佛教用語、對浮世繪師的指涉。這壓倒性地是一九九〇年之後的模式，也是後繼世代把家族酒藏重新定位向全國市場的可靠標記。"}],
            [{en:"Nature and season",ja:"自然・季節",zh:"自然與季節"},"越乃寒梅・雨後の月・雪の茅舎",
             {en:"Plum in the cold, the moon after rain, a snow-covered hut. Evocative rather than boastful, and characteristic of houses that want to be read as quiet and precise.",
              ja:"寒中の梅、雨上がりの月、雪の茅舎。誇るのではなく喚起する名であり、静かで精緻に読まれたい蔵に特徴的である。",
              zh:"寒中之梅、雨後之月、覆雪的茅舍。這類名字重在喚起而非誇耀，是那些希望被讀作安靜而精確的酒藏的特徵。"}],
            [{en:"Masamune",ja:"正宗",zh:"正宗"},"櫻正宗・菊正宗・大山正宗",
             {en:"A category of its own. The suffix is said to derive from a Buddhist phrase whose Sino-Japanese reading, <em>seishū</em>, puns on 清酒 — and it spread so widely in the nineteenth century that it could never be monopolised as a trademark. Hundreds of breweries use it. It is the closest thing sake has to a generic quality word embedded in a name.",
              ja:"それ自体で一つの区分をなす。この接尾辞は、その音読み「セイシュウ」が清酒に通じる仏教語に由来するとされ、十九世紀に広まりすぎて商標として独占されえなくなった。数百の蔵が用いる。日本酒の名のなかに埋め込まれた、一般的な品質の語に最も近いものである。",
              zh:"它自成一個類別。此後綴據說源自一句佛教用語，其漢音讀法「セイシュウ」與「清酒」諧音；十九世紀流傳過廣，以致無法被獨占為商標。數百家酒藏都在使用。這是日本酒名字中最接近「內建通用品質詞」的東西。"}]
          ] }
      ] },

    { t:"section", id:"decoded",
      title:{ en:"Names decoded", ja:"銘柄名の読解", zh:"酒名解讀" }, jp:"名の意味",
      body:[
        { t:"p", text:{
          en:"A selection of names an English-speaking drinker is likely to meet, with what the characters actually say. Meanings are given as the producers and standard references explain them; several are deliberately layered and the reading below is the common one rather than the only one.",
          ja:"英語圏の飲み手が出会いやすい名を選び、その文字が実際に何を言っているかを添えた。意味は作り手および標準的な資料の説明によるものであり、いくつかは意図的に多層であって、以下の読みは唯一のものではなく通行のものである。",
          zh:"以下挑選英語圈飲者較可能遇到的酒名，並說明那些字面實際上在說什麼。釋義依生產者與標準資料的說法；其中數個刻意具備多層意涵，此處給的是通行的解讀，而非唯一的解讀。" } },

        { t:"table",
          cols:[{en:"Brand",ja:"銘柄",zh:"品牌"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Prefecture",ja:"県",zh:"縣"},{en:"What the name says",ja:"名の意味",zh:"名字的意思"}],
          jpCols:[1],
          rows:[
            [{en:"Dassai",ja:"獺祭",zh:"獺祭"},"獺祭",{en:"Yamaguchi",ja:"山口",zh:"山口"},
             {en:"&#8220;Otter festival&#8221;: a classical image of an otter laying its catch out on the bank as if making an offering, used in Chinese and Japanese letters for a scholar surrounded by scattered books. It also echoes Osogoe, the name of the valley the brewery stands in.",
              ja:"獺が獲物を岸に並べる、供物のようなその姿を指す古い語で、漢籍・和文では書物を散らかした学者の謂いにも用いられる。蔵の建つ谷の名、獺越にも掛かる。",
              zh:"「獺祭」是水獺把捕獲的魚排列在岸上、彷彿陳設供品的古典意象，在漢文與和文中也用來形容書籍散置四周的學者。同時也呼應酒藏所在山谷之名「獺越」。"}],
            [{en:"Jūyondai",ja:"十四代",zh:"十四代"},"十四代",{en:"Yamagata",ja:"山形",zh:"山形"},
             {en:"&#8220;The fourteenth generation&#8221;. Launched in the 1990s by the young successor of a long family line; the name is a statement about inheritance and about being the one who now decides.",
              ja:"十四代目の意。長く続く家の若い後継者が一九九〇年代に立ち上げた銘柄であり、名は継承についての、そして今決めるのは自分であるという表明である。",
              zh:"意為「第十四代」。由一個綿長家系的年輕後繼者於一九九〇年代推出；這個名字既是關於繼承的宣示，也是關於「如今由我決定」的宣示。"}],
            [{en:"Jikon",ja:"而今",zh:"而今"},"而今",{en:"Mie",ja:"三重",zh:"三重"},
             {en:"A Zen expression: <em>now, this instant</em> — neither the past nor the future. A characteristic modern literary name, and a mission statement about brewing for the present drinker.",
              ja:"禅語で、過去でも未来でもない「今このとき」の意。現代の文学的な命名の典型であり、今の飲み手のために醸すという表明でもある。",
              zh:"禪語，意為「此刻、當下」——既非過去也非未來。這是現代文學式命名的典型，也是一句「為當下的飲者而釀」的宣言。"}],
            [{en:"Hiroki",ja:"飛露喜",zh:"飛露喜"},"飛露喜",{en:"Fukushima",ja:"福島",zh:"福島"},
             {en:"A phonetic writing of the family name Hiroki using characters meaning &#8220;fly&#8221;, &#8220;dew&#8221; and &#8220;joy&#8221; — the family name carried openly, and dressed.",
              ja:"家名ひろきの音に、飛・露・喜の字を当てたもの。家の名を掲げ、そして装ったのである。",
              zh:"以「飛」「露」「喜」三字寫出家名 Hiroki 的讀音——把家族之名公開地掛出來，並加以妝點。"}],
            [{en:"Aramasa",ja:"新政",zh:"新政"},"新政",{en:"Akita",ja:"秋田",zh:"秋田"},
             {en:"&#8220;New government&#8221; — from a Meiji Restoration slogan. Fittingly, the brewery that revived the oldest surviving association yeast and rebuilt itself around wooden vats carries a name about starting again.",
              ja:"「新政厚徳」に由来する、新しい政の意。現存する最古の協会酵母を復活させ、木桶を軸に自らを組み直した蔵が、やり直しについての名を負っているのは似つかわしい。",
              zh:"意為「新的政治」，出自明治維新的口號。這家復活了現存最古老協會酵母、並圍繞木桶重建自身的酒藏，背負著一個關於「重新開始」的名字，相當貼切。"}],
            [{en:"Kubota",ja:"久保田",zh:"久保田"},"久保田",{en:"Niigata",ja:"新潟",zh:"新潟"},
             {en:"The founding shop name of the house. A deliberately plain, unornamented choice for a range that helped define the light, dry Niigata style in the 1980s.",
              ja:"創業時の屋号である。一九八〇年代に新潟の淡麗辛口を定義づけた品揃えにふさわしい、意図して飾らない選択である。",
              zh:"這是酒藏創業時的商號。對於一個在一九八〇年代協助定義了新潟淡麗辛口風格的產品線而言，這是刻意樸素、不加雕飾的選擇。"}],
            [{en:"Koshi no Kanbai",ja:"越乃寒梅",zh:"越乃寒梅"},"越乃寒梅",{en:"Niigata",ja:"新潟",zh:"新潟"},
             {en:"&#8220;The cold plum of Koshi&#8221; — Koshi being the classical name for the Hokuriku coast. The plum flowers in the snow: the brand that made <em>jizake</em> a national idea in the 1970s.",
              ja:"越（北陸の古名）の、寒中に咲く梅。雪の中に花を開く梅であり、一九七〇年代に地酒を全国的な観念にした銘柄である。",
              zh:"「越」是北陸沿海的古名，意即「越地寒梅」。梅在雪中開花——這正是在一九七〇年代讓「地酒」成為全國性概念的品牌。"}],
            [{en:"Denshu",ja:"田酒",zh:"田酒"},"田酒",{en:"Aomori",ja:"青森",zh:"青森"},
             {en:"&#8220;Rice-field sake&#8221;. Adopted in the 1970s as a declaration that the brewery would make only junmai — sake from the field, with nothing added — at a time when that was an eccentric position.",
              ja:"田の酒。純米のみを造るという宣言として一九七〇年代に掲げられた——田から来たもののみで、何も加えない。当時それは風変わりな立場であった。",
              zh:"意為「田裡的酒」。一九七〇年代採用此名，是一種宣示：本藏只做純米——來自田地、別無添加。在當時，這是一個相當特立獨行的立場。"}],
            [{en:"Kokuryū",ja:"黒龍",zh:"黑龍"},"黒龍",{en:"Fukui",ja:"福井",zh:"福井"},
             {en:"&#8220;Black dragon&#8221;, from an old name of the great river that runs past the brewery. A river name doing duty as a mythic one.",
              ja:"黒い龍。蔵のかたわらを流れる大河の古名に由来する。川の名が神話の名を兼ねている。",
              zh:"意為「黑龍」，源自流經酒藏旁那條大河的舊名。一個河川之名同時扮演了神話之名。"}],
            [{en:"Isojiman",ja:"磯自慢",zh:"磯自慢"},"磯自慢",{en:"Shizuoka",ja:"静岡",zh:"靜岡"},
             {en:"&#8220;The pride of the rocky shore&#8221;. A fishing-port brewery naming itself after its coast, and one of the houses that carried Shizuoka's reputation in the 1980s.",
              ja:"磯の誇り。漁港の蔵が自らの海岸を名としたものであり、一九八〇年代に静岡の評判を担った蔵の一つである。",
              zh:"意為「岩岸的驕傲」。一家漁港的酒藏以自家海岸為名，也是一九八〇年代扛起靜岡聲譽的酒藏之一。"}],
            [{en:"Suigei",ja:"酔鯨",zh:"醉鯨"},"酔鯨",{en:"Kōchi",ja:"高知",zh:"高知"},
             {en:"&#8220;Drunken whale&#8221;, after the self-given sobriquet of a nineteenth-century lord of Tosa who called himself the drunken lord of the whale sea. Kōchi's drinking culture, condensed into two characters.",
              ja:"酔える鯨。自らを鯨海酔侯と号した十九世紀の土佐の藩主の号に由来する。高知の酒の文化が二文字に凝縮されている。",
              zh:"意為「喝醉的鯨」，取自十九世紀土佐藩主自號「鯨海醉侯」。高知的飲酒文化，濃縮在兩個字裡。"}],
            [{en:"Tengumai",ja:"天狗舞",zh:"天狗舞"},"天狗舞",{en:"Ishikawa",ja:"石川",zh:"石川"},
             {en:"&#8220;The dance of the tengu&#8221;, the long-nosed mountain spirit. A yamahai house whose name promises something wilder than a clean modern ginjō, and delivers it.",
              ja:"天狗の舞。山廃の蔵であり、その名は清澄な現代の吟醸よりも荒々しい何かを約束し、そして果たす。",
              zh:"意為「天狗之舞」，天狗是長鼻的山中精怪。這是一家山廢酒藏，名字承諾了某種比乾淨的現代吟釀更野性的東西，而它確實做到了。"}],
            [{en:"Kikuhime",ja:"菊姫",zh:"菊姬"},"菊姫",{en:"Ishikawa",ja:"石川",zh:"石川"},
             {en:"&#8220;Chrysanthemum princess&#8221;. The house where Noguchi Naohiko brewed for thirty-six years, and long associated with Yamada Nishiki grown under Hyōgo contract and with long maturation.",
              ja:"菊の姫。農口尚彦が三十六年にわたり醸した蔵であり、兵庫の契約栽培の山田錦と長期熟成に長く結びついてきた。",
              zh:"意為「菊之姬」。農口尚彥在此釀酒三十六年；這家酒藏長期以來與兵庫契作的山田錦及長期熟成緊密相連。"}],
            [{en:"Hakurakusei",ja:"伯楽星",zh:"伯樂星"},"伯楽星",{en:"Miyagi",ja:"宮城",zh:"宮城"},
             {en:"Named for a star associated with a legendary judge of horses. The brewery's stated aim — the ultimate sake to drink with food — is one of the clearest brand positions in modern sake.",
              ja:"名馬を見抜いたという伝説の人物にゆかりの星に因む。「究極の食中酒」という蔵の掲げる目標は、現代の日本酒で最も明快なブランドの立ち位置の一つである。",
              zh:"取自與傳說中相馬名家有關的一顆星。這家酒藏標舉的目標——「究極的佐餐酒」——是現代日本酒中最清晰的品牌定位之一。"}],
            [{en:"Kenbishi",ja:"剣菱",zh:"劍菱"},"剣菱",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},
             {en:"&#8220;Sword and rhombus&#8221; — the mark itself, a geometric device used as a brand long before modern trademark law. Among the oldest continuously used sake marks in Japan, and a house that has deliberately kept its style unchanged rather than chasing ginjō.",
              ja:"剣と菱、すなわち標そのもの。近代の商標法をはるかに遡って用いられてきた幾何の意匠である。日本で最も古くから使われ続けている酒の標の一つであり、吟醸を追わず、意図して酒質を変えずにきた蔵である。",
              zh:"意為「劍與菱」——也就是那個標記本身，一個遠早於現代商標法就被用作品牌的幾何圖形。它是日本持續使用最久的清酒標記之一；這家酒藏刻意不追逐吟釀，保持酒質不變。"}],
            [{en:"Gekkeikan",ja:"月桂冠",zh:"月桂冠"},"月桂冠",{en:"Kyoto",ja:"京都",zh:"京都"},
             {en:"&#8220;Laurel crown&#8221; — the victor's wreath, adopted in the early twentieth century as the house modernised. A Western symbol taken up at exactly the moment Japanese industry was courting international exhibitions.",
              ja:"月桂樹の冠、すなわち勝者の環である。蔵が近代化するなかで二十世紀初頭に採られた。日本の産業が万国博覧会に向き合っていた、まさにその時期に取り入れられた西洋の象徴である。",
              zh:"意為「月桂冠」——勝利者的花環，於二十世紀初酒藏現代化時採用。這是一個西方象徵，被引入的時機，恰是日本產業積極參與國際博覽會之際。"}]
          ] }
      ] },

    { t:"section", id:"architecture",
      title:{ en:"One brewery, several brands", ja:"一つの蔵、いくつもの銘柄", zh:"一家酒藏，數個品牌" }, jp:"銘柄構成",
      body:[
        { t:"p", text:{
          en:"A brewery's name and its brand name are usually different, and a single brewery often carries two or three brands at different price points, sometimes aimed at completely different buyers. Understanding the architecture makes shopping considerably easier.",
          ja:"蔵の社名と銘柄名はたいてい別であり、一つの蔵が価格帯の異なる二つ三つの銘柄を持ち、時にはまったく別の買い手に向けていることも多い。この構成を理解すれば、買い物はかなり楽になる。",
          zh:"酒藏的公司名與品牌名通常不同，而一家酒藏往往同時經營兩三個不同價位的品牌，有時針對完全不同的買家。理解這套架構，買酒會輕鬆許多。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"The local brand", ja:"地元銘柄", zh:"在地品牌" }, jp:"地元向け",
            v:{ en:"Sold within an hour's drive", ja:"車で一時間の圏内", zh:"車程一小時內販售" },
            d:{ en:"Often the older name, often futsūshu and honjōzō, sold in 1.8-litre bottles to people who have drunk it for forty years. It is rarely exported, rarely written about, and frequently the best value the brewery makes.",
              ja:"多くは古いほうの名で、普通酒と本醸造が中心、一升瓶で、四十年飲み続けている人々に売られる。輸出されることは稀で、語られることも稀で、そしてしばしばその蔵で最も割のよい酒である。",
              zh:"通常是比較老的那個名字，以普通酒與本釀造為主，以一升瓶賣給喝了四十年的人。它很少出口、很少被書寫，卻經常是這家酒藏最划算的酒。" } },
          { k:{ en:"The national brand", ja:"全国銘柄", zh:"全國品牌" }, jp:"全国向け",
            v:{ en:"The name in the magazines", ja:"雑誌に載る名", zh:"上雜誌的那個名字" },
            d:{ en:"Usually launched by a successor generation, usually all-junmai or ginjō-led, usually in 720 ml bottles with modern design, and sold through a controlled list of specialist retailers rather than to anyone who asks. This is the brand that carries the brewery's reputation.",
              ja:"多くは後継世代が立ち上げ、多くは全量純米か吟醸を軸に、多くは現代的な意匠の四合瓶で、誰にでも卸すのではなく限られた特約店を通じて売られる。蔵の評判を担うのはこの銘柄である。",
              zh:"通常由後繼世代推出，通常以全純米或吟釀為主軸，通常是設計現代的四合瓶，並透過受控的特約店名單販售，而非來者不拒。扛起酒藏聲譽的，就是這個品牌。" } },
          { k:{ en:"Contract brewing", ja:"桶売り・委託", zh:"桶賣與委託" }, jp:"桶取引",
            v:{ en:"Made here, sold as something else", ja:"ここで造り、別の名で売る", zh:"在此釀造，以他名販售" },
            d:{ en:"A brewery may sell bulk sake to another company, which bottles it under its own label. The practice sustained many small breweries through the twentieth century and is much reduced today. The maker's name on the back label is how you detect it.",
              ja:"蔵は他社に酒を桶単位で売り、その会社が自社の名で瓶詰めすることがある。この慣行は二十世紀を通じて多くの小さな蔵を支え、今日では大きく減った。裏ラベルの製造者名が、それを見分ける手がかりである。",
              zh:"酒藏可能以整桶為單位把酒賣給另一家公司，由對方以自家品牌裝瓶。這種做法在二十世紀支撐了許多小酒藏，如今已大幅減少。背標上的製造者名稱，就是辨識它的線索。" } },
          { k:{ en:"Retailer exclusives", ja:"特約店限定", zh:"特約店限定" }, jp:"別誂・限定",
            v:{ en:"Same sake, different label", ja:"同じ酒、違うラベル", zh:"同樣的酒，不同的標" },
            d:{ en:"A shop commissions a specific tank, or a specific specification, and sells it under a sub-name. Sometimes this is a genuinely different sake; sometimes it is the standard product with a different label. Asking the shop directly usually gets an honest answer.",
              ja:"店が特定のタンク、あるいは特定の仕様を誂え、副名を付けて売る。それが本当に別の酒であることもあれば、標準品のラベル違いであることもある。店に直接尋ねれば、たいてい正直な答えが返る。",
              zh:"店家指定某一槽、或某個規格訂製，並以副品牌名販售。有時那確實是不同的酒，有時只是標準品換了張標。直接問店家，通常會得到誠實的回答。" } }
        ] },

        { t:"note", text:{
          en:"For how to identify the maker behind a label, see <a href=\"label.html\">Reading a Label</a>; for the structure of the industry these brands sit in, see <a href=\"industry.html\">Industry &amp; Trade</a>; for the people who built several of the names above, see <a href=\"people.html\">People</a>.",
          ja:"ラベルの背後の造り手を見分ける方法は<a href=\"label.html\">表示の読み方</a>、これらの銘柄が置かれた産業の構造は<a href=\"industry.html\">産業と流通</a>、上に挙げた名のいくつかを築いた人々は<a href=\"people.html\">人物</a>を参照。",
          zh:"如何辨識酒標背後的製造者，見<a href=\"label.html\">酒標判讀</a>；這些品牌所處的產業結構，見<a href=\"industry.html\">產業與貿易</a>；打造出上述若干名字的人，見<a href=\"people.html\">人物</a>。" } }
      ] },

    { t:"related", items:[
      { href:"label.html", why:{ en:"The rest of what the front of a bottle is saying.", ja:"瓶の表が言っている、その他のこと。", zh:"瓶身正面還在說的其他事情。" } },
      { href:"kanji.html", why:{ en:"The characters these names are built from.", ja:"これらの名が組まれている文字。", zh:"這些名字是用哪些字組成的。" } },
      { href:"breweries.html", why:{ en:"The houses behind the names.", ja:"名の背後にある家。", zh:"名字背後的那些酒藏。" } },
      { href:"value.html", why:{ en:"Why some of these names cost what they cost.", ja:"これらの名のいくつかが、その値である理由。", zh:"為什麼其中某些名字要那個價錢。" } }
    ] }
  ]
};

SAKE.pages["directory"] = {
  kicker: { en: "Place · 12", ja: "産地 · 12", zh: "產地 · 12" },
  title:  { en: "A Directory of Brands", ja: "銘柄名鑑", zh: "品牌名鑑" },
  jp: "全国銘柄名鑑",
  lede: {
    en: "The page before this one explains how brands and houses relate to each other. This one is the list. It runs from Hokkaidō to Kyūshū, gives each brand its house, its prefecture and the year the house began, says in a sentence what the house is actually known for, and then sets out the standing bottles — the ones a shop is expected to have, not the allocations that sell out in a morning — with the designation, the rice and the polishing ratio the brewery itself publishes. It is not a ranking and not a shopping list. It is the reference you want open when a label in front of you carries a name you have never seen.",
    ja: "前の頁は、銘柄と蔵元がたがいにどう関わるかを説いた。この頁はその一覧である。北海道から九州まで、銘柄ごとに蔵元・所在県・創業年を挙げ、その蔵が実際に何で知られているかを一文で述べ、そのうえで定番の酒——朝のうちに売り切れる限定品ではなく、店に置かれていることが期待される瓶——を、特定名称・原料米・精米歩合とともに並べる。数値はいずれも蔵自身が公表しているものである。順位ではなく、買い物の指示でもない。見知らぬ名の貼られた瓶が目の前にあるとき、開いておきたい参照表である。",
    zh: "前一頁說明品牌與酒藏之間的關係，本頁則是那份清單。它自北海道排到九州，逐一列出品牌所屬的酒藏、所在縣份與創業年份，以一句話說明該酒藏實際以什麼聞名，接著列出常態商品——店家應當備有的瓶裝酒，而非一個早上就售罄的限量品——並附上特定名稱、原料米與精米步合。這些數字皆為酒藏自行公布者。這不是排名，也不是購物清單。當眼前那張酒標上寫著你從未見過的名字時，這就是你會想翻開的那一頁。"
  },
  body: [

    { t:"section", id:"howtoread",
      title:{ en:"How to read an entry", ja:"記載の読み方", zh:"條目的讀法" }, jp:"凡例",
      body:[
        { t:"defs", items:[
          { term:{en:"The left column",ja:"左の欄",zh:"左欄"}, jp:"銘柄・蔵元",
            def:{en:"Brand in kanji, then its reading. Below it the brewing company that owns it — these are frequently different names, and the company name is what appears in small type on the back label. Below that the prefecture and the year the house dates itself from. A founding year is what the house claims; several of the oldest are traditions rather than documents, and the page on breweries says which.",
              ja:"上に銘柄の漢字と読み。その下に、それを所有する醸造会社——両者はしばしば別の名であり、裏ラベルに小さく刷られるのは会社名のほうである。さらにその下に所在県と、その蔵が創業と称する年。創業年は蔵の自称であって、最も古い部類のいくつかは文書ではなく言い伝えに基づく。どれがそうかは蔵元の頁に記した。",
              zh:"上方是品牌漢字與讀音。其下是擁有該品牌的釀造公司——兩者常是不同的名字，而背標上以小字印出的正是公司名。再下方是所在縣份，以及該酒藏自稱的創業年份。創業年是酒藏自己的說法；其中最古老的幾家憑的是傳說而非文書，哪幾家如此，已記於酒藏那一頁。"} },
          { term:{en:"The specification line",ja:"仕様の行",zh:"規格那一行"}, jp:"特定名称・米・精米歩合",
            def:{en:"Designation, then rice, then polishing ratio, in that order and separated by a dot. The designation is the legal category — see <a href=\"classification.html\">Categories &amp; Law</a> — with the starter method or the finishing state added where the house makes a point of it. The polishing ratio is the percentage of each grain left after milling, so a smaller number means more rice thrown away.",
              ja:"特定名称、原料米、精米歩合の順に、中黒で区切って並べる。特定名称は法律上の区分であり——<a href=\"classification.html\">特定名称と法</a>を参照——蔵が強調する場合には酒母の造り方や仕上げの状態を添えた。精米歩合は磨いたあとに残る粒の割合であるから、数字が小さいほど多く削っていることになる。",
              zh:"依序為特定名稱、原料米、精米步合，以中點分隔。特定名稱是法律上的分類——見<a href=\"classification.html\">分類與法規</a>——若酒藏特別強調，則附上酒母做法或最終狀態。精米步合是磨過之後每粒米所剩的比例，因此數字愈小，削去的愈多。"} },
          { term:{en:"Two figures",ja:"二つの数字",zh:"兩個數字"}, jp:"麹米・掛米",
            def:{en:"A ratio written as two numbers means the kōji rice and the mash rice were milled differently — the first figure is the kōji rice, which is usually polished further because it is the rice the mould has to penetrate. Most houses mill both the same and print one figure; a house that prints two is telling you it did the extra work.",
              ja:"二つの数字で書かれた歩合は、麹米と掛米を別々に磨いたことを意味する。前の数字が麹米で、黴が入り込まねばならぬ米であるから、たいていはより深く磨かれる。多くの蔵は両者を同じに磨いて一つの数字を刷る。二つ刷る蔵は、その手間をかけたと告げているのである。",
              zh:"以兩個數字寫成的步合，表示麴米與掛米分開磨過——前一個數字是麴米，因為那是黴菌必須穿入的米，通常磨得更深。多數酒藏兩者磨得相同，只印一個數字；印出兩個數字的酒藏，是在告訴你它多花了那道工。"} },
          { term:{en:"An em dash",ja:"ダッシュ",zh:"破折號"}, jp:"—",
            def:{en:"Means no published figure was found for that bottle. Sometimes that is because nobody prints it; often it is because the house declines to, on principle: several respected houses decline to print a polishing ratio on principle, and a few print no designation at all. Kenbishi is the clearest case — it varies its milling every year to hold the taste steady, and says so.",
              ja:"その瓶について、公表された数値が見当たらなかったことを意味する。誰も刷っていないという場合もあるが、多くは蔵が信念として刷らないという場合である。信念として精米歩合を刷らない蔵はいくつもあり、特定名称そのものを名乗らない蔵も少数ある。剣菱がもっとも明快な例で、味を一定に保つために毎年磨きを変えると自ら述べている。",
              zh:"表示查不到那一瓶的公開數值。有時是因為根本無人印出，但更多時候，是酒藏基於理念不印：有數家受敬重的酒藏基於理念不印精米步合，少數幾家甚至不標示特定名稱。劍菱是最明白的例子——它為了讓味道保持一致而逐年調整磨米程度，並且明說如此。"} },
          { term:{en:"What is not here",ja:"載せていないもの",zh:"未列入的東西"}, jp:"日本酒度・酸度",
            def:{en:"No sake meter value and no acidity. Both are printed on many back labels, both move from tank to tank and year to year, and a figure copied from one bottling and read as if it described the brand would mislead more than it informs. <a href=\"numbers.html\">Numbers &amp; Chemistry</a> explains what they mean and why.",
              ja:"日本酒度も酸度も載せていない。どちらも多くの裏ラベルに刷られているが、どちらもタンクごと年ごとに動く。ある一本の数字を写し取り、それが銘柄そのものを表すかのように読めば、伝わるものより誤解のほうが多くなる。意味と理由は<a href=\"numbers.html\">成分と数値</a>に述べた。",
              zh:"不列日本酒度，也不列酸度。兩者都印在許多背標上，但也都逐槽逐年變動；把某一瓶的數字抄下來，當作那個品牌的寫照去讀，造成的誤會會多過帶來的理解。其意義與原因，已在<a href=\"numbers.html\">成分與數值</a>說明。"} }
        ] },
        { t:"note", label:{en:"On completeness",ja:"網羅について",zh:"關於完整性"}, text:{
          en:"There are about twelve hundred brewing companies in Japan and several thousand brands. No printed list is complete and this one does not pretend to be. What it tries to be is representative: the volume houses whose bottles are in every supermarket, the prefectural flagships, the modern houses that changed how the rest of the industry thinks, and the small allocated names that a specialist shop will mention within five minutes of being asked. Where a prefecture brews almost no sake, the regional pages say so rather than this one padding itself out.",
          ja:"日本には醸造会社がおよそ千二百、銘柄は数千ある。網羅した一覧などというものは印刷物には存在せず、この頁もそれを装わない。目指したのは代表性である——あらゆるスーパーの棚にある量産の蔵、県を代表する銘柄、業界のものの考え方を変えた現代の蔵、そして専門店に尋ねれば五分のうちに名の挙がる小さな限定銘柄。ほとんど清酒を造らない県については、この頁が水増しするのではなく、産地の各頁に記した。",
          zh:"日本約有一千二百家釀造公司、數千個品牌。印刷品裡不存在真正完整的清單，本頁也不假裝是。它試圖做到的是具代表性：每家超市貨架上都有的量產酒藏、代表各縣的招牌品牌、改變了整個業界思考方式的當代酒藏，以及專門店被問起後五分鐘內就會提到的小型限量名字。至於幾乎不釀清酒的縣份，由產地各頁說明，而非讓本頁自行灌水。" } }
      ]
    },

    { t:"section", id:"list",
      title:{ en:"The directory", ja:"名鑑", zh:"名鑑" }, jp:"一覧",
      body:[

      { t:"brands", items:[

/* ============================================================ */
/* 1 — Hokkaidō and Tōhoku                                      */
/* ============================================================ */

        { group:{ en:"Hokkaidō & Tōhoku", ja:"北海道・東北", zh:"北海道與東北" }, jp:"北日本", id:"g-north" },

        { jp:"男山", r:"Otokoyama", h:"男山", hr:"Otokoyama", pref:"hokkaido", est:"1899",
          note:{ en:"An Asahikawa house that in 1968 formally took over the name, seal and brewing lineage of an Itami brand of the same name whose sake had been supplied to the shogunate. Its junmai daiginjō has taken a medal at a Brussels competition every year since 1977.",
            ja:"旭川の蔵で、一九六八年に、将軍家に納められていた同名の伊丹の銘柄から、その名と印と造りの系譜を正式に引き継いだ。純米大吟醸は一九七七年以来、ブリュッセルの品評で毎年賞を受けている。",
            zh:"旭川的一家酒藏，1968 年正式承接了同名的伊丹品牌之名號、印記與釀造血脈——那個品牌的酒曾進奉幕府。其純米大吟釀自 1977 年起，年年於布魯塞爾的評鑑中獲獎。" },
          p:[
            { jp:"男山 生酛純米", g:"tj", m:["kimoto"], mill:"60%" },
            { jp:"男山 生酛本醸造", g:"thj", m:["kimoto"], mill:"60%" },
            { jp:"男山 純米大吟醸", g:"jd", rice:"yamada", mill:"38%" }
          ] },

        { jp:"国稀", r:"Kunimare", h:"国稀酒造", hr:"Kunimare Shuzō", pref:"hokkaido", est:"1882",
          note:{ en:"Began as a kimono merchant on the Sea of Japan coast and turned to brewing; it is the northernmost sake brewery in Japan, drawing water off the Shokanbetsu range and working in a dry style.",
            ja:"日本海側で呉服を商っていた家が醸造に転じた蔵で、日本最北の酒蔵である。暑寒別の山から来る水を使い、辛口で通す。",
            zh:"原是日本海沿岸的和服商，其後轉為釀酒；它是日本最北端的酒藏，取用暑寒別山系的水，走辛口路線。" },
          p:[
            { jp:"国稀 特別純米酒", g:"tj", rice:"yamada" },
            { jp:"国稀 純米 吟風", g:"j", rice:"ginpu" },
            { jp:"国稀 大吟醸", g:"dg", rice:"yamada", mill:"35%" }
          ] },

        { jp:"北の錦", r:"Kita no Nishiki", h:"小林酒造", hr:"Kobayashi Shuzō", pref:"hokkaido", est:"1878",
          note:{ en:"Founded in what is now the Susukino district of Sapporo by a brewer from Niigata, and moved out to Kuriyama in 1900. Among the oldest houses on the island, and a heavy user of the two rice varieties Hokkaidō bred for itself.",
            ja:"新潟から来た造り手が、いまの札幌・すすきのにあたる地で創業し、一九〇〇年に栗山へ移った。島でもっとも古い部類の蔵であり、北海道が自前で育てた二つの酒米を多く使う。",
            zh:"由一位來自新潟的釀造者，在今日札幌薄野一帶創業，1900 年遷往栗山。它是島上最古老的酒藏之一，並大量使用北海道自行育成的兩種酒米。" },
          p:[
            { jp:"北の錦 雪梟", g:"tj", rice:"suisei", mill:"55%" },
            { jp:"まる田 特別純米", g:"tj", rice:"ginpu", mill:"50%" },
            { jp:"北の錦 暖簾ラベル", g:"jd", rice:"suisei", mill:"45%" },
            { jp:"北の錦 雪心", g:"jd", rice:["suisei","ginpu"], mill:"35%" }
          ] },

        { jp:"二世古", r:"Niseko", h:"二世古酒造", hr:"Niseko Shuzō", pref:"hokkaido", est:"1916",
          note:{ en:"A Kutchan house under the mountain, fermenting at low temperature in the snow and brewing chiefly with the three Hokkaidō varieties — Ginpū, Suisei and Kita Shizuku — rather than importing rice from the south.",
            ja:"山の麓、倶知安の蔵である。雪のなかで低温に発酵させ、南から米を運ばせるのではなく、吟風・彗星・北しずくという北海道の三品種を主に用いる。",
            zh:"山腳下俱知安的一家酒藏，在雪中低溫發酵，並主要使用吟風、彗星、北雫這三種北海道米，而非自南方運米而來。" },
          p:[
            { jp:"二世古 黄ラベル", g:"tj", rice:"ginpu", mill:"60%" },
            { jp:"二世古 グリーンラベル", g:"j", m:["kimoto"], rice:"kitashizuku", mill:"60%" },
            { jp:"二世古 赤ラベル", g:"jg", rice:"suisei", mill:"50%" },
            { jp:"二世古 純米大吟醸原酒", g:"jd", m:["genshu"], rice:"suisei", mill:"40%" }
          ] },

        { jp:"上川大雪", r:"Kamikawa Taisetsu", h:"上川大雪酒造", hr:"Kamikawa Taisetsu Shuzō", pref:"hokkaido", est:"2016",
          note:{ en:"The first sake brewery built in Hokkaidō in some twenty years: a failing Mie company's licence was moved north in 2016 and a new kura raised at Kamikawa, with satellite breweries at Obihiro and Hakodate since. Proof that the map is not fixed.",
            ja:"二十年ほどのあいだ北海道に建てられた初めての酒蔵である。二〇一六年、行き詰まった三重の会社の免許を北へ移し、上川に新しい蔵を建てた。以後、帯広と函館にも蔵を開いた。地図は固定されていないことの証しである。",
            zh:"約二十年來北海道新建的第一家酒藏：2016 年將一家經營困難的三重公司的執照北移，在上川蓋起新藏，其後又於帶廣與函館設立分藏。這證明了地圖並非固定不變。" },
          p:[
            { jp:"上川大雪 特別純米 彗星", g:"tj", rice:"suisei", mill:"60%" },
            { jp:"上川大雪 純米吟醸 彗星", g:"jg", rice:"suisei", mill:"50%" },
            { jp:"上川大雪 純米大吟醸 彗星", g:"jd", rice:"suisei", mill:"40%" }
          ] },

        { jp:"田酒", r:"Denshu", h:"西田酒造店", hr:"Nishida Shuzōten", pref:"aomori", est:"1878",
          note:{ en:"Turned its whole output over to junmai in the early 1970s, when almost nobody was doing that, and named the brand for the decision: the character for rice paddy in front of the character for sake. One of the houses that made the all-junmai argument respectable.",
            ja:"一九七〇年代のはじめ、まだほとんど誰もそうしていなかった時期に全量を純米に切り替え、その決断をそのまま銘柄の名にした。酒の字の前に田の字を置いたのである。全量純米という主張を真面目に受け取らせた蔵の一つ。",
            zh:"在 1970 年代初期、幾乎無人如此做的時候，把全部產量轉為純米，並直接以這個決定命名品牌：在「酒」字之前放上「田」字。它是讓「全量純米」這個主張被認真看待的酒藏之一。" } ,
          p:[
            { jp:"田酒 特別純米酒", g:"tj", rice:"hanafubuki", mill:"55%" },
            { jp:"田酒 山廃仕込 特別純米", g:"tj", m:["yamahai"], rice:"hanafubuki", mill:"55%" },
            { jp:"田酒 純米吟醸 山田錦", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"田酒 純米大吟醸 四割五分", g:"jd", rice:"yamada", mill:"45%" }
          ] },

        { jp:"豊盃", r:"Hōhai", h:"三浦酒造", hr:"Miura Shuzō", pref:"aomori", est:"1930",
          note:{ en:"A small Hirosaki house that brews largely with Hōhai, a rice bred in Aomori and grown almost nowhere else, so the brand and the grain carry the same name. Production is deliberately small and the bottles are allocated.",
            ja:"弘前の小さな蔵で、青森で育成され他所ではほとんど作られていない酒米「豊盃」を主に用いる。銘柄と米が同じ名を負っているわけである。仕込みの量は意図して小さく、瓶は特約店に配分される。",
            zh:"弘前的一家小酒藏，主要使用青森育成、他處幾乎不種的酒米「豐盃」，因此品牌與米同名。產量刻意維持得小，酒瓶採配額供應。" } ,
          p:[
            { jp:"豊盃 純米吟醸 豊盃米", g:"jg", rice:"hohaimai", mill:"55%" },
            { jp:"豊盃 特別純米酒", g:"tj", rice:"hohaimai", mill:"55 / 60%" },
            { jp:"豊盃 純米大吟醸 山田穂", g:"jd", rice:"yamadaho", mill:"50%" },
            { jp:"豊盃 つるし酒", g:"jd", rice:"yamada", mill:"39%" }
          ] },

        { jp:"陸奥八仙", r:"Mutsu Hassen", h:"八戸酒造", hr:"Hachinohe Shuzō", pref:"aomori", est:"1740",
          note:{ en:"In the harbour quarter of Hachinohe, brewing only with Aomori rice, Aomori yeast and water from the Kanisawa spring. The old Mutsu Otokoyama label runs beside the newer Hassen one.",
            ja:"八戸の港町にあり、青森の米、青森の酵母、蟹沢の湧水だけで醸す。古い陸奥男山の銘柄が、新しい八仙と並んで走っている。",
            zh:"位於八戶的港町一帶，只以青森的米、青森的酵母與蟹澤的湧泉釀造。舊的陸奧男山品牌，與較新的八仙並行不悖。" },
          p:[
            { jp:"陸奥八仙 赤ラベル", g:"tj", mill:"55 / 60%" },
            { jp:"陸奥八仙 黒ラベル", g:"jg", mill:"55%" },
            { jp:"陸奥八仙 華想い50", g:"jd", rice:"hanaomoi", mill:"50%" },
            { jp:"陸奥八仙 華想い40", g:"jd", rice:"hanaomoi", mill:"40%" }
          ] },

        { jp:"鳩正宗", r:"Hato Masamune", h:"鳩正宗", hr:"Hato Masamune", pref:"aomori", est:"1899",
          note:{ en:"Named for a white dove that settled in the kura and was kept as its guardian. A Towada house working mostly with Hanafubuki, the rice Aomori bred for itself.",
            ja:"蔵に棲みついて守り神とされた白い鳩にちなむ名である。十和田の蔵で、主に青森が自前で育てた華吹雪を用いる。",
            zh:"名字取自一隻停駐於藏內、被奉為守護神的白鴿。這是十和田的一家酒藏，主要使用青森自行育成的華吹雪。" },
          p:[
            { jp:"鳩正宗 純米大吟醸 華吹雪", g:"jd", rice:"hanafubuki", mill:"50%" },
            { jp:"鳩正宗 八甲田おろし", g:"dg", rice:"hanafubuki" }
          ] },

        { jp:"南部美人", r:"Nanbu Bijin", h:"南部美人", hr:"Nanbu Bijin", pref:"iwate", est:"1902",
          note:{ en:"Among the most export-minded houses in the country: early to halal certification, early to serious overseas distribution, and a persistent voice for sake abroad. Named for the Nanbu tōji tradition of the region it sits in.",
            ja:"国内でもっとも輸出に意識を向けてきた蔵の一つで、ハラール認証にも海外の本格的な流通にも早く、外に向かって日本酒を語りつづけてきた。名は、この地の南部杜氏の伝統に由来する。",
            zh:"國內最具出口意識的酒藏之一：很早取得清真認證，也很早建立正式的海外通路，並持續在國外為日本酒發聲。名字取自其所在地的南部杜氏傳統。" } ,
          p:[
            { jp:"南部美人 特別純米酒", g:"tj", rice:"ginotome", mill:"55%" },
            { jp:"南部美人 純米吟醸", g:"jg", rice:"ginotome", mill:"50%" },
            { jp:"南部美人 純米大吟醸 結の香", g:"jd", rice:"yuinoka" }
          ] },

        { jp:"AKABU", r:"Akabu", h:"赤武酒造", hr:"Akabu Shuzō", pref:"iwate", est:"1896",
          note:{ en:"The brewery on the Sanriku coast was destroyed by the tsunami of March 2011. It rebuilt inland at Morioka, and the son of the house — then still a student — came home to brew. The new brand is written in Latin letters for that reason.",
            ja:"三陸の海沿いにあった蔵は二〇一一年三月の津波で失われた。内陸の盛岡に建て直し、当時まだ学生だった家の息子が戻って醸すことになった。新しい銘柄がローマ字で書かれるのは、そのためである。",
            zh:"位於三陸海岸的酒藏在 2011 年 3 月的海嘯中毀去。它在內陸的盛岡重建，而當時還是學生的家中之子回來釀酒。新品牌以羅馬字書寫，正是為此。" } ,
          p:[
            { jp:"AKABU 純米酒", g:"j", rice:"ginginga", mill:"60%" },
            { jp:"AKABU 純米吟醸", g:"jg", rice:"ginginga", mill:"50%" },
            { jp:"AKABU 純米大吟醸", g:"jd", rice:"ginginga", mill:"40%" }
          ] },

        { jp:"新政", r:"Aramasa", h:"新政酒造", hr:"Aramasa Shuzō", pref:"akita", est:"1852",
          note:{ en:"The house where Association yeast No. 6 was isolated in 1930, and the house that now uses no other. All junmai, all No. 6, all Akita rice, no added lactic acid, and wooden vats brought back for part of the range — the most thoroughly argued programme of any modern brewery.",
            ja:"一九三〇年に協会六号酵母が分離された蔵であり、いまは他の酵母を一切使わない蔵でもある。全量純米、全量六号、全量秋田県産米、乳酸添加なし、一部には木桶を戻した——現代の蔵のうちで、もっとも徹底して筋の通った方針である。",
            zh:"協會六號酵母於 1930 年在此分離出來，而如今這家酒藏也不再使用任何其他酵母。全量純米、全量六號、全量秋田縣產米、不添加乳酸，部分品項並恢復木桶——在當代酒藏之中，這是最徹底且最有論理的一套主張。" } ,
          p:[
            { jp:"新政 No.6 R-type", g:"j", m:["kimoto","nama","genshu"], mill:"65%",
              d:{ en:"Akita brewing rice; the house does not name the variety.", ja:"秋田県産の酒造好適米。品種は蔵が明かしていない。", zh:"秋田縣產酒造好適米；酒藏並未公開品種。" } },
            { jp:"新政 No.6 S-type", g:"jg", m:["kimoto","nama","genshu"], mill:"55%" },
            { jp:"新政 No.6 X-type", g:"jd", m:["kimoto","nama","genshu"], mill:"40%" },
            { jp:"新政 エクリュ", g:"j", m:["kimoto"], rice:"akitakomachi", mill:"40 / 60%" }
          ] },

        { jp:"山本", r:"Yamamoto", h:"山本酒造店", hr:"Yamamoto Shuzōten", pref:"akita", est:"1901",
          note:{ en:"A small house in the far north of Akita that draws its water from the Shirakami mountains, a beech forest listed by UNESCO. The owner brews himself and puts his own surname on the label, which is rarer in sake than it sounds.",
            ja:"秋田の北の端にある小さな蔵で、世界遺産に登録されたブナの森、白神山地の水を使う。当主が自ら醸し、自らの姓をそのまま酒標に掲げている。これは日本酒では聞こえるほど当たり前のことではない。",
            zh:"位於秋田極北的小型酒藏，取水自列入世界遺產的山毛櫸森林白神山地。當主親自釀酒，並把自己的姓氏直接放上酒標——在清酒界，這比聽起來要罕見得多。" } ,
          p:[
            { jp:"山本 ピュアブラック", g:"jg", rice:"akitakomachi", mill:"55%" },
            { jp:"山本 ミッドナイトブルー", g:"jg", rice:"akitakomachi", mill:"50%" },
            { jp:"山本 ストロベリーレッド", g:"jg", rice:"akitakomachi", mill:"50%" },
            { jp:"山本 ターコイズブルー", g:"jg", rice:"kairyo", mill:"55%" }
          ] },

        { jp:"雪の茅舎", r:"Yuki no Bōsha", h:"齋彌酒造店", hr:"Saiya Shuzōten", pref:"akita", est:"1902",
          note:{ en:"Built on a slope, so that rice enters at the top and finished sake leaves at the bottom and nothing has to be pumped uphill. The house is known for a policy of not stirring the mash, not filtering with charcoal and not adding water.",
            ja:"斜面に建てられており、米は上から入り、できた酒は下から出る。汲み上げる必要がどこにもない。櫂入れをせず、炭で濾さず、加水もしないという方針で知られる蔵である。",
            zh:"整座酒藏建在斜坡上，米自上方進入，釀成的酒自下方出去，任何東西都不必往上抽送。這家酒藏以三不聞名：不櫂入、不用活性炭過濾、不加水。" } ,
          p:[
            { jp:"雪の茅舎 純米吟醸", g:"jg", rice:["yamada","akitakomachi"], mill:"55%" },
            { jp:"雪の茅舎 山廃純米", g:"j", m:["yamahai"], rice:["yamada","akitakomachi"], mill:"65%" },
            { jp:"雪の茅舎 山廃純米大吟醸", g:"jd", m:["yamahai"], rice:"yamada", mill:"45%" }
          ] },

        { jp:"飛良泉", r:"Hiraizumi", h:"飛良泉本舗", hr:"Hiraizumi Honpo", pref:"akita", est:"1487",
          note:{ en:"One of the three oldest brewing companies in Japan by its own dating, and a house that has kept to the yamahai starter for most of its range rather than following the ginjō fashion of the 1980s.",
            ja:"自らの数え方によれば、日本で三番目までに古い醸造会社の一つであり、一九八〇年代の吟醸の流行を追わず、品揃えの多くを山廃の酒母で通してきた蔵である。",
            zh:"依其自身的計算，是日本最古老的三家釀造公司之一；而且沒有追隨 1980 年代的吟釀風潮，產品線大半仍堅持以山廢酒母釀造。" } ,
          p:[
            { jp:"飛良泉 山廃純米酒", g:"tj", m:["yamahai"], rice:["miyama","akitakomachi"], mill:"60%" },
            { jp:"飛良泉 山廃本仕込", g:"thj", m:["yamahai"], rice:"brewing", mill:"60%" },
            { jp:"飛良泉 室町蔵", g:"jg", rice:"brewing", mill:"40%" },
            { jp:"飛良泉 欅蔵", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"両関", r:"Ryōzeki", h:"両関酒造", hr:"Ryōzeki Shuzō", pref:"akita", est:"1874",
          note:{ en:"A Yuzawa house whose main building and four storehouses were the first registered cultural properties in Akita and are still in use. Its Hanamura line was developed with technical help from the head of Takagi Shuzō, which is how an old volume house acquired a cult label.",
            ja:"湯沢の蔵で、主屋と四棟の蔵は秋田で最初の登録有形文化財であり、いまも使われている。花邑は高木酒造の当主の技術指導を受けて立ち上げられた系列で、古い量産の蔵が人気銘柄を得た経緯がそこにある。",
            zh:"湯澤的一家酒藏，其主屋與四座倉庫是秋田最早的登錄有形文化財，且至今仍在使用。「花邑」系列是在高木酒造當主的技術指導下開發的——一家老牌量產酒藏就此擁有了一個搶手品牌。" },
          p:[
            { jp:"花邑 純米 陸羽田", g:"j", rice:"rikuuden", mill:"55%" },
            { jp:"花邑 純米吟醸 美郷錦", g:"jg", rice:"misato", mill:"50%" },
            { jp:"花邑 純米吟醸 雄町", g:"jg", rice:"omachi", mill:"50%" },
            { jp:"花邑 純米吟醸 出羽燦々", g:"jg", rice:"dewa33", mill:"50%" }
          ] },

        { jp:"高清水", r:"Takashimizu", h:"秋田酒類製造", hr:"Akita Shurui Seizō", pref:"akita", est:"1944",
          note:{ en:"Formed in 1944 by the wartime consolidation of twenty-four Akita producers, and named in 1947 by a public competition that drew more than five thousand entries. One of the largest houses outside Nada and Fushimi.",
            ja:"一九四四年、戦時の企業整備で秋田の二十四の造り手が一つにまとめられて生まれた。名は一九四七年の公募で選ばれ、五千通を超える応募があった。灘と伏見の外では最大級の蔵である。",
            zh:"1944 年因戰時企業整併，由秋田二十四家生產者合併而成；名字取自 1947 年的公開徵名，收到超過五千件投稿。它是灘、伏見以外規模最大的酒藏之一。" },
          p:[
            { jp:"高清水 上撰本醸造", g:"hj", mill:"60%" },
            { jp:"高清水 本醸造", g:"hj", mill:"65%" },
            { jp:"高清水 純米大吟醸", g:"jd", rice:"akitakomachi", mill:"45%" }
          ] },

        { jp:"一白水成", r:"Ippaku Suisei", h:"福禄寿酒造", hr:"Fukurokuju Shuzō", pref:"akita", est:"1688",
          note:{ en:"An old Gojōme house that launched this brand only in 2006, on the plainest possible premise: white rice and water, and nothing said about either that is not true.",
            ja:"五城目の古い蔵が、二〇〇六年になってようやく立ち上げた銘柄である。前提はこの上なく素っ気ない——白い米と水、そしてそのどちらについても、真でないことは言わない。",
            zh:"五城目的一家老酒藏，直到 2006 年才推出這個品牌，前提樸素到不能再樸素：白米與水，而關於這兩者，不說任何不真實的話。" },
          p:[
            { jp:"一白水成 特別純米酒", g:"tj", rice:["ginnosei","akitakomachi"], mill:"55 / 58%" },
            { jp:"一白水成 純米吟醸 美山錦", g:"jg", rice:"miyama", mill:"50%" },
            { jp:"一白水成 純米吟醸 山田錦", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"一白水成 純米吟醸 愛山", g:"jg", rice:"aiyama", mill:"50%" }
          ] },

        { jp:"春霞", r:"Harukasumi", h:"栗林酒造店", hr:"Kuribayashi Shuzōten", pref:"akita", est:"1874",
          note:{ en:"Took up Misato Nishiki, a rice bred in Akita and grown by few, until it accounted for the great majority of what the house brews. Colour-coded labels stand in for designations.",
            ja:"秋田で育成され、作る者の少ない美郷錦を取り上げ、やがて蔵の仕込みの大半をそれが占めるに至った。特定名称の代わりに、色で分けた酒標が立っている。",
            zh:"採用了秋田育成、種植者寥寥的美鄉錦，最終讓它占去酒藏釀造量的絕大部分。以顏色區分的酒標，取代了特定名稱。" },
          p:[
            { jp:"春霞 赤ラベル", g:"j", rice:"misato" },
            { jp:"春霞 緑ラベル", g:"jg", rice:"misato", mill:"50%" },
            { jp:"春霞 木の葉ラベル 美郷錦80", g:"j", rice:"misato", mill:"80%" }
          ] },

        { jp:"ゆきの美人", r:"Yuki no Bijin", h:"秋田醸造", hr:"Akita Jōzō", pref:"akita", est:"1919",
          note:{ en:"About six hundred koku a year from a building in Akita city with no room to expand, brewing junmai only and brewing it all year — which is how a very small kura keeps its stock fresh.",
            ja:"広がる余地のない秋田市の建物で、年に六百石ほどを造る。純米のみを、年を通して醸す。ごく小さな蔵が酒を新しいまま保つ方法がこれである。",
            zh:"在秋田市一棟無處擴建的建築裡，年產約六百石；只釀純米，且全年釀造——這正是一家極小的酒藏讓存酒保持新鮮的方法。" },
          p:[
            { jp:"ゆきの美人 純米", g:"j", mill:"60%" },
            { jp:"ゆきの美人 純米吟醸", g:"jg", mill:"55%" },
            { jp:"ゆきの美人 純米大吟醸", g:"jd", rice:"akitakomachi", mill:"45%" }
          ] },

        { jp:"十四代", r:"Jūyondai", h:"高木酒造", hr:"Takagi Shuzō", pref:"yamagata", est:"1615",
          note:{ en:"The brand that turned the market toward aroma and sweetness in the mid-1990s and has been the hardest bottle in Japan to buy ever since. The house also bred its own rice varieties, of which Ryū no Otoshigo is the best known.",
            ja:"一九九〇年代なかばに市場を香りと甘みのほうへ向き直らせた銘柄であり、以来ずっと日本でもっとも手に入りにくい瓶でありつづけている。蔵は独自の酒米も育成しており、龍の落とし子がもっとも知られている。",
            zh:"這個品牌在 1990 年代中期把市場的方向轉向香氣與甜味，此後一直是日本最難買到的一瓶酒。該酒藏也自行育成酒米，其中以「龍の落とし子」最為人知。" } ,
          p:[
            { jp:"十四代 本丸", g:"thj", rice:"miyama", mill:"55%",
              d:{ en:"The entry bottle, and the one people queue for.", ja:"入口の一本であり、人が列をなすのもこれである。", zh:"入門的一瓶，也正是人們排隊要買的那一瓶。" } },
            { jp:"十四代 中取り純米", g:"j", m:["muroka"], rice:"miyama", mill:"55%" },
            { jp:"十四代 龍の落とし子", g:"jg", rice:"ryunoko", mill:"50%",
              d:{ en:"Brewed with a rice variety the brewery bred itself.", ja:"蔵が自ら育成した品種で醸す。", zh:"以酒藏自行育成的米種釀造。" } }
          ] },

        { jp:"出羽桜", r:"Dewazakura", h:"出羽桜酒造", hr:"Dewazakura Shuzō", pref:"yamagata", est:"1892",
          note:{ en:"Put a ginjō on ordinary shop shelves at an ordinary price in 1980, when ginjō was something breweries made for competitions and kept. Much of what the category became in the following decade follows from that one bottle.",
            ja:"吟醸が、蔵が鑑評会のために造ってしまい込んでおくものであった一九八〇年に、吟醸をふつうの店の棚にふつうの値で置いた。この区分がその後の十年でなったものの多くは、この一本から始まっている。",
            zh:"1980 年，當吟釀還是酒藏為評鑑會而釀、釀了就收起來的東西時，它把吟釀放上一般店家的貨架、標上一般的價格。這個類別在其後十年間所成為的模樣，多半源自那一瓶。" } ,
          p:[
            { jp:"出羽桜 桜花吟醸酒", g:"g", mill:"50%",
              d:{ en:"The bottle that put ginjō on ordinary shelves in 1980.", ja:"一九八〇年に吟醸をふつうの棚に置いた一本。", zh:"1980 年把吟釀放上一般貨架的那一瓶。" } },
            { jp:"出羽桜 出羽燦々誕生記念", g:"jg", m:["nama"], rice:"dewa33", mill:"50%" },
            { jp:"出羽桜 雪女神 四割八分", g:"jd", rice:"yukimegami", mill:"48%" },
            { jp:"出羽桜 大吟醸 山田錦", g:"dg", rice:"yamada", mill:"48%" }
          ] },

        { jp:"楯野川", r:"Tatenokawa", h:"楯の川酒造", hr:"Tate no Kawa Shuzō", pref:"yamagata", est:"1832",
          note:{ en:"Converted its entire production to junmai daiginjō in 2010 — not a premium line above an ordinary one, but the whole house at that grade, which almost no brewery of its size had attempted.",
            ja:"二〇一〇年に全製品を純米大吟醸に切り替えた。並の酒の上に上級の系列を置いたのではなく、蔵ごとその等級にしたのであり、同じ規模の蔵でこれを試みた例はほとんどない。",
            zh:"2010 年將全部產品轉為純米大吟釀——不是在普通酒之上另設高階系列，而是整家酒藏都做到那個等級，同等規模的酒藏幾乎無人嘗試過。" } ,
          p:[
            { jp:"楯野川 清流", g:"jd", rice:"dewa33", mill:"50%" },
            { jp:"楯野川 本流辛口", g:"jd", rice:"dewa33", mill:"50%" },
            { jp:"楯野川 主流 山田錦", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"くどき上手", r:"Kudoki Jōzu", h:"亀の井酒造", hr:"Kamenoi Shuzō", pref:"yamagata", est:"1875",
          note:{ en:"A brand name that means, roughly, good at persuasion, with labels quoting ukiyo-e beauties. The house works largely at ginjō grade and is closely associated with Dewa Sansan, the rice Yamagata bred for itself.",
            ja:"銘柄の名はおおよそ「口説き上手」の意で、酒標には浮世絵の美人が引かれている。蔵は主に吟醸の等級で仕事をし、山形が自前で育てた酒米、出羽燦々と深く結びついている。",
            zh:"品牌名大致是「擅長說服」之意，酒標上引用浮世繪美人圖。這家酒藏主要在吟釀等級上作業，並與山形自行育成的酒米「出羽燦燦」關係密切。" } ,
          p:[
            { jp:"くどき上手 純米大吟醸", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"くどき上手 純米吟醸", g:"jg", rice:"miyama", mill:"50%" },
            { jp:"くどき上手 大吟醸", g:"dg", rice:"yamada", mill:"35%" }
          ] },

        { jp:"上喜元", r:"Jōkigen", h:"酒田酒造", hr:"Sakata Shuzō", pref:"yamagata", est:"1946",
          note:{ en:"A Sakata house with an unusually wide bench of rice varieties and yeasts, released as a long run of small parallel bottlings rather than a tidy three-tier lineup. Much respected by specialist retailers for consistency.",
            ja:"酒田の蔵で、扱う酒米と酵母の幅が異常に広く、整った三段の品揃えではなく、小さな並行の仕込みを長く連ねる形で出す。仕上がりの安定ぶりで特約店の信頼が厚い。",
            zh:"酒田的一家酒藏，所用的酒米與酵母種類廣得異乎尋常，出貨方式不是整齊的三階產品線，而是一長串小批量的平行釀造。其品質的穩定，深受專門店敬重。" } ,
          p:[
            { jp:"上喜元 出羽燦々 四割", g:"jd", rice:"dewa33", mill:"40%" },
            { jp:"上喜元 出羽燦々 純米吟醸", g:"jg", rice:"dewa33", mill:"50%" },
            { jp:"上喜元 出羽の里 純米", g:"j", rice:"dewanosato", mill:"80%" }
          ] },

        { jp:"山形正宗", r:"Yamagata Masamune", h:"水戸部酒造", hr:"Mitobe Shuzō", pref:"yamagata", est:"1898",
          note:{ en:"Stopped using brewing alcohol altogether in 2010 and set up its own farming company in 2018, which now grows about a third of the rice it uses. A house moving steadily toward its own fields.",
            ja:"二〇一〇年に醸造アルコールの使用をすべてやめ、二〇一八年には自前の農業法人を立ち上げた。いまは用いる米の三分の一ほどをそこで育てている。自らの田へと着実に歩を進めている蔵である。",
            zh:"2010 年完全停用釀造酒精，2018 年又成立自家的農業法人，如今所用的米約有三分之一出自那裡。這是一家穩步走向自有田區的酒藏。" },
          p:[
            { jp:"山形正宗 稲造", g:"j", rice:"dewa33" },
            { jp:"山形正宗 純米吟醸 亀ノ尾", g:"jg", rice:"kameno", mill:"50%" },
            { jp:"山形正宗 秋津山田錦50", g:"jg", rice:"yamada", mill:"50%" }
          ] },

        { jp:"東光", r:"Tōkō", h:"小嶋総本店", hr:"Kojima Sōhonten", pref:"yamagata", est:"1597",
          note:{ en:"Sake purveyor to the Yonezawa domain from 1597, and among the oldest houses in Tōhoku; the twenty-fourth generation of the family runs it now.",
            ja:"一五九七年より米沢藩の御用酒屋を務めた、東北でも最も古い部類の蔵である。いまは同じ家の二十四代目が営んでいる。",
            zh:"自 1597 年起擔任米澤藩的御用酒屋，是東北最古老的酒藏之一；如今由同一家族的第二十四代經營。" },
          p:[
            { jp:"東光 純米", g:"j", mill:"60%" },
            { jp:"東光 純米吟醸 出羽燦々", g:"jg", rice:"dewa33", mill:"55%" },
            { jp:"東光 純米大吟醸 山田錦", g:"jd", rice:"yamada", mill:"45%" },
            { jp:"東光 純米大吟醸 雪女神", g:"jd", rice:"yukimegami", mill:"45%" }
          ] },

        { jp:"白露垂珠", r:"Hakuro Suishu", h:"竹の露", hr:"Take no Tsuyu", pref:"yamagata", est:"1858",
          note:{ en:"Moved in 1923 into a brewery tied to the shrines of Dewa Sanzan, and brews on the Shōnai plain entirely with rice from it. Its name means dew hanging as a bead of white.",
            ja:"一九二三年、出羽三山の社に連なる蔵へ移り、庄内平野で、その平野の米だけで醸す。名は、白い珠となって垂れる露を意味する。",
            zh:"1923 年遷入一座與出羽三山神社相連的酒藏，在莊內平原上，只以這片平原的米釀造。名字意為垂落如白珠的露水。" },
          p:[
            { jp:"白露垂珠 純米吟醸 美山錦55", g:"jg", rice:"miyama", mill:"55%" },
            { jp:"白露垂珠 出羽きらり44", g:"jd", rice:"dewakirari", mill:"44%" },
            { jp:"白露垂珠 出羽燦々39", g:"jd", rice:"dewa33", mill:"39%" },
            { jp:"白露垂珠 雪女神33", g:"dg", rice:"yukimegami", mill:"33%" }
          ] },

        { jp:"米鶴", r:"Yonetsuru", h:"米鶴酒造", hr:"Yonetsuru Shuzō", pref:"yamagata", est:"1704",
          note:{ en:"Purveyor to the Uesugi of Yonezawa, in the Okitama basin where the rice is grown within sight of the kura, and a long-standing supporter of Yamagata's own varieties.",
            ja:"米沢の上杉家の御用を務めた蔵であり、置賜の盆地にあって、米は蔵から見える範囲で育つ。山形の自前の品種を長く支えてきた。",
            zh:"曾任米澤上杉家的御用酒藏，位於置賜盆地，用米就長在酒藏看得見的範圍內；長年支持山形自有的米種。" },
          p:[
            { jp:"米鶴 純米吟醸 出羽燦々", g:"jg", rice:"dewa33", mill:"60%" },
            { jp:"米鶴 純米 磨き五割 瓶囲い", g:"j", mill:"50%" },
            { jp:"米鶴 雪女神 磨き35", g:"jd", rice:"yukimegami", mill:"35%" }
          ] },

        { jp:"浦霞", r:"Urakasumi", h:"佐浦", hr:"Saura", pref:"miyagi", est:"1724",
          note:{ en:"The house from which Association yeast No. 12 was isolated, and a steady presence in Shiogama for three centuries. Its sake is supplied to Shiogama Shrine, which is how the house began.",
            ja:"協会十二号酵母が分離された蔵であり、塩竈で三世紀にわたって揺るがずに続いてきた。酒は塩竈神社に納められており、そもそも蔵はそこから始まった。",
            zh:"協會十二號酵母自此分離而出，三個世紀以來一直是鹽竈當地不動的存在。其酒供奉於鹽竈神社，而這家酒藏最初正是由此而起。" } ,
          p:[
            { jp:"浦霞 純米酒", g:"j", mill:"65%" },
            { jp:"浦霞 禅", g:"jg", mill:"50%" },
            { jp:"浦霞 生一本", g:"tj", rice:"sasanishiki", mill:"60%" }
          ] },

        { jp:"伯楽星", r:"Hakurakusei", h:"新澤醸造店", hr:"Niizawa Jōzōten", pref:"miyagi", est:"1873",
          note:{ en:"Built its name on the idea of the ultimate sake to drink with food — deliberately quiet, low in aroma, designed to disappear behind the dish. The brewery moved to Kawasaki after the 2011 earthquake destroyed the original building.",
            ja:"「究極の食中酒」という考えで名を築いた。意図して物静かで、香りを低く抑え、料理のうしろに退くように設計されている。蔵は二〇一一年の地震で建物を失い、川崎町へ移った。",
            zh:"以「究極的佐餐酒」這個想法建立名聲——刻意安靜、香氣壓低，設計成隱身於菜餚之後。原本的建築在 2011 年的地震中毀損，酒藏因而遷往川崎町。" } ,
          p:[
            { jp:"伯楽星 特別純米", g:"tj", mill:"60%" },
            { jp:"伯楽星 純米吟醸", g:"jg", mill:"55%" },
            { jp:"伯楽星 東条秋津 山田錦", g:"jd", rice:"yamadaA", mill:"29%" }
          ] },

        { jp:"日高見", r:"Hitakami", h:"平孝酒造", hr:"Hirakō Shuzō", pref:"miyagi", est:"1861",
          note:{ en:"An Ishinomaki house that has aimed its sake squarely at fish, and at raw fish in particular, in a port town where that is not an abstract claim. It kept brewing after the 2011 tsunami reached the town.",
            ja:"石巻の蔵で、酒の狙いをまっすぐ魚に、とりわけ生の魚に定めてきた。港町においては、それは抽象的な物言いではない。二〇一一年の津波が町に達したあとも、造りを続けた。",
            zh:"石卷的一家酒藏，把酒的目標直直對準魚，尤其是生魚；在一座港町裡，這並非抽象的說法。2011 年海嘯襲及該町之後，它仍持續釀造。" } ,
          p:[
            { jp:"日高見 弥助", g:"jg", rice:"kuranohana", mill:"50%",
              d:{ en:"Named for the sushi apprentice in the old rakugo story.", ja:"落語に出る鮨屋の小僧の名を負う。", zh:"名字取自落語中那名壽司店學徒。" } },
            { jp:"日高見 兵庫山田錦", g:"j", rice:"yamada", mill:"60%" },
            { jp:"日高見 超辛口純米", g:"j", rice:"hitomebore", mill:"60%" },
            { jp:"日高見 助六", g:"jd", mill:"45%" }
          ] },

        { jp:"一ノ蔵", r:"Ichinokura", h:"一ノ蔵", hr:"Ichinokura", pref:"miyagi", est:"1973",
          note:{ en:"Formed in 1973 when four small Miyagi houses merged rather than close one by one, which makes it young as a company and old as a set of practices. It also made the first commercial low-alcohol sparkling sake to reach a mass market.",
            ja:"一九七三年、宮城の小さな四つの蔵が、一つずつ潰れていくのではなく合併して生まれた。会社としては若く、技としては古いという成り立ちである。大衆の市場に届いた最初の低アルコール発泡清酒を世に出したのもこの蔵である。",
            zh:"1973 年由宮城四家小酒藏合併而成——與其一家家關門，不如合為一家；因此它作為公司很年輕，作為一套技藝卻很老。第一款進入大眾市場的商業低酒精氣泡清酒，也出自這裡。" } ,
          p:[
            { jp:"一ノ蔵 特別純米 辛口", g:"tj", mill:"60%" },
            { jp:"一ノ蔵 無鑑査本醸造 辛口", g:"hj", mill:"65%",
              d:{ en:"Named for the grading system the house refused to enter.", ja:"蔵が受けることを拒んだ級別制度にちなむ名。", zh:"名字取自這家酒藏拒絕參加的那套級別制度。" } },
            { jp:"一ノ蔵 純米吟醸 蔵の華", g:"jg", rice:"kuranohana", mill:"50%" }
          ] },

        { jp:"阿部勘", r:"Abekan", h:"阿部勘酒造店", hr:"Abekan Shuzōten", pref:"miyagi", est:"1716",
          note:{ en:"Granted brewing rights by the Date domain in 1716 and appointed to supply the offering sake of Shiogama Shrine, which it still does. Its sake is built for the raw fish landed a few streets away.",
            ja:"一七一六年に伊達藩から酒造の株を許され、塩竈の社に納める御神酒の御用を受けた。いまもそれを続けている。酒は、数筋先に揚がる生の魚のために組まれている。",
            zh:"1716 年獲伊達藩許可釀酒，並受命供奉鹽竈神社的御神酒，至今仍然如此。它的酒，是為幾條街外卸下的生魚而構築的。" },
          p:[
            { jp:"阿部勘 純米辛口", g:"j" },
            { jp:"阿部勘 純米吟醸 蔵の華", g:"jg", rice:"kuranohana" },
            { jp:"阿部勘 純米吟醸 亀の尾", g:"jg", rice:"kameno" },
            { jp:"阿部勘 純米大吟醸 白鶴錦", g:"jd", rice:"hakutsurun", mill:"45%" }
          ] },

        { jp:"乾坤一", r:"Kenkon'ichi", h:"大沼酒造店", hr:"Ōnuma Shuzōten", pref:"miyagi", est:"1712",
          note:{ en:"Brewed under another name until 1870, when the first governor of Miyagi tasted it and renamed it the finest under heaven and earth. Works with Sasanishiki and with the heirloom varieties Kame-no-o, Jinriki and Aikoku.",
            ja:"一八七〇年まで別の名で醸していたが、宮城の初代県令がこれを味わい、天地の間で最も善きものの意の名を与えた。ササニシキと、亀の尾・神力・愛国といった古い品種を扱う。",
            zh:"直到 1870 年都以另一個名字釀造，當時宮城首任縣令品嚐之後，為它取了「天地之間至善」之意的名字。所用的是笹錦，以及龜之尾、神力、愛國等古老品種。" },
          p:[
            { jp:"乾坤一 特別純米辛口", g:"tj" },
            { jp:"乾坤一 純米酒 愛国", g:"j", rice:"aikoku" },
            { jp:"乾坤一 超辛口 純米吟醸原酒", g:"jg", m:["genshu"] },
            { jp:"乾坤一 純米大吟醸 雄町", g:"jd", rice:"omachi", mill:"40%" }
          ] },

        { jp:"墨廼江", r:"Suminoe", h:"墨廼江酒造", hr:"Suminoe Shuzō", pref:"miyagi", est:"1845",
          note:{ en:"Founded by an Ishinomaki dealer in marine products and grain, and named for a deity of safety at sea. It buys only brewing-grade rice and works toward a clean, unshowy style.",
            ja:"石巻で海産物と穀物を商っていた家が起こした蔵で、名は航海の安全を守る神に由来する。米は酒造好適米のみを買い、澄んで飾らない酒質を目指す。",
            zh:"由石卷一家經營海產與穀物的商家所創，名字源自守護航海平安的神祇。用米只採酒造好適米，追求潔淨而不張揚的酒質。" },
          p:[
            { jp:"墨廼江 特別純米", g:"tj", rice:["gohyaku","kuranohana"] },
            { jp:"墨廼江 純米吟醸 蔵の華", g:"jg", rice:"kuranohana" },
            { jp:"墨廼江 純米大吟醸 谷風", g:"jd", rice:"yamada" },
            { jp:"墨廼江 PREMIUM365", g:"jd", rice:"yamada", mill:"36.5%" }
          ] },

        { jp:"宮寒梅", r:"Miya Kanbai", h:"寒梅酒造", hr:"Kanbai Shuzō", pref:"miyagi", est:"1918",
          note:{ en:"A cultivating brewery that grows much of its own rice, and one that had to rebuild after the 2011 earthquake took the kura apart around it.",
            ja:"米の多くを自ら育てる栽培醸造の蔵であり、二〇一一年の地震が蔵を周囲から崩したのち、建て直さねばならなかった蔵でもある。",
            zh:"一家自種大部分用米的栽培釀造酒藏；2011 年的地震把酒藏從四周震垮之後，它不得不重建。" },
          p:[
            { jp:"宮寒梅 純米吟醸", g:"jg", mill:"55%" },
            { jp:"宮寒梅 純米大吟醸", g:"jd", mill:"45%" },
            { jp:"宮寒梅 純米大吟醸 贅撰", g:"jd", mill:"40%" }
          ] },

        { jp:"綿屋", r:"Wataya", h:"金の井酒造", hr:"Kanenoi Shuzō", pref:"miyagi", est:"1915",
          note:{ en:"Works to a single phrase — sake that belongs in the middle of a meal — under a Nanbu tōji, and names its plainest bottle after the paddies of Ichihasama where its rice grows.",
            ja:"「食仲酒」という一語のために、南部杜氏のもとで仕事をする。最も素朴な一本には、米の育つ一迫の田の名を付けている。",
            zh:"在南部杜氏之下，為「食仲酒」這一個詞而工作；最樸素的那一瓶，以其用米生長之地一迫的田為名。" },
          p:[
            { jp:"綿屋 いちはさまのお米", g:"j", rice:"toyonishiki", mill:"65%" },
            { jp:"綿屋 純米大吟醸 美山錦", g:"jd", rice:"miyama", mill:"45%" },
            { jp:"綿屋 純米大吟醸 雄町", g:"jd", rice:"omachi", mill:"50%" },
            { jp:"綿屋 純米大吟醸 山田錦45", g:"jd", rice:"yamada", mill:"45%" }
          ] },

        { jp:"飛露喜", r:"Hiroki", h:"廣木酒造本店", hr:"Hiroki Shuzō Honten", pref:"fukushima", est:"",
          note:{ en:"A house that was close to closing when the young successor took over in the late 1990s and rebuilt it around a single unfiltered junmai. The recovery is one of the stories the modern trade tells itself most often.",
            ja:"一九九〇年代の終わりに若い後継者が跡を継いだとき、蔵は閉じる寸前だった。彼は一本の無濾過純米を軸に建て直した。この立ち直りは、現代の業界が最もよく語り継ぐ話の一つである。",
            zh:"1990 年代末，年輕的繼承者接手時，這家酒藏已瀕臨關門；他以一款無濾過純米為軸重新把它建立起來。這段翻身，是當代業界最常被反覆傳述的故事之一。" } ,
          p:[
            { jp:"飛露喜 黒ラベル", g:"jg", rice:["yamada","gohyaku"], mill:"40 / 50%" },
            { jp:"飛露喜 特別純米 無ろ過生原酒", g:"tj", m:["muroka","nama","genshu"], rice:["yamada","gohyaku","fukunoka"], mill:"50 / 55%",
              d:{ en:"The bottle the house was rebuilt around.", ja:"蔵を建て直す軸となった一本。", zh:"這家酒藏賴以重建的那一瓶。" } },
            { jp:"飛露喜 純米大吟醸", g:"jd", rice:"yamada", mill:"40 / 50%" }
          ] },

        { jp:"写楽", r:"Sharaku", h:"宮泉銘醸", hr:"Miyaizumi Meijō", pref:"fukushima", est:"1955",
          note:{ en:"Named for the ukiyo-e portraitist who worked for ten months and vanished. Based inside the castle town of Aizu-Wakamatsu, and one of the brands most responsible for Fukushima's run of national gold medals after 2011.",
            ja:"十か月だけ働いて姿を消した浮世絵の似顔絵師にちなむ名である。会津若松の城下にあり、二〇一一年以降の福島の金賞の連続を支えた銘柄の一つである。",
            zh:"名字取自那位只工作了十個月便消失的浮世繪肖像畫師。位於會津若松的城下町，也是 2011 年之後福島連年奪得全國金賞的主要功臣品牌之一。" } ,
          p:[
            { jp:"写楽 純米酒", g:"j", rice:"yumenoka", mill:"60%" },
            { jp:"写楽 純米吟醸", g:"jg", rice:"gohyaku", mill:"50%" }
          ] },

        { jp:"大七", r:"Daishichi", h:"大七酒造", hr:"Daishichi Shuzō", pref:"fukushima", est:"1752",
          note:{ en:"Brews everything by the kimoto starter — the oldest surviving method, in which the lactic acid is grown rather than added — and has done so without interruption. It also developed a flat-milling machine that shapes the grain to its own contour.",
            ja:"すべてを生酛の酒母で造る。乳酸を加えるのではなく育てる、現存する最も古い方法であり、これを一度も中断していない。米を粒の形に沿って削る扁平精米の機械を開発したのもこの蔵である。",
            zh:"全部以生酛酒母釀造——那是現存最古老的做法，乳酸靠培養而非添加——而且從未中斷。它也開發出扁平精米機，依米粒本身的輪廓來削磨。" } ,
          p:[
            { jp:"大七 純米生酛", g:"j", m:["kimoto"], rice:"gohyaku", mill:"69%",
              d:{ en:"Milled flat, to the contour of the grain rather than to a sphere.", ja:"球ではなく粒の輪郭に沿って扁平に磨く。", zh:"以扁平方式磨米，順著米粒輪廓而非磨成球形。" } },
            { jp:"大七 皆伝", g:"jg", m:["kimoto"], rice:"gohyaku", mill:"58%" },
            { jp:"大七 箕輪門", g:"jd", m:["kimoto"], rice:"yamada", mill:"50%" }
          ] },

        { jp:"会津娘", r:"Aizu Musume", h:"高橋庄作酒造店", hr:"Takahashi Shōsaku Shuzōten", pref:"fukushima", est:"1875",
          note:{ en:"Works to a stated idea of soil — rice grown in named plots near the brewery, bottled separately, so that the difference between two fields is something a drinker can taste rather than read about.",
            ja:"「土産土法」という言葉を掲げて仕事をする。蔵の近くの、名の付いた田で穫れた米を別々に仕込み、別々に瓶詰めする。二枚の田の違いを、読むのではなく飲んで知ることができるようにである。",
            zh:"以「土產土法」的想法行事——在酒藏附近有名字的田區種米，分別釀造、分別裝瓶，好讓兩塊田之間的差異成為飲者可以嚐到、而不只是讀到的東西。" } ,
          p:[
            { jp:"会津娘 純米大吟醸", g:"jd", rice:"yamada", mill:"45%" },
            { jp:"会津娘 純米酒", g:"j", rice:"gohyaku", mill:"55%" },
            { jp:"会津娘 特別本醸造", g:"thj", rice:"gohyaku", mill:"60%" }
          ] },

/* ============================================================ */
/* 2 — Kantō and Kōshin'etsu                                    */
/* ============================================================ */

        { jp:"天明", r:"Tenmei", h:"曙酒造", hr:"Akebono Shuzō", pref:"fukushima", est:"1904",
          note:{ en:"Unusually, three consecutive generations of women have served as this house's tōji; the present brewer took over from his mother in 2011, at twenty-seven. Aizu rice, and a range that changes through the year.",
            ja:"この蔵では、三代続けて女性が杜氏を務めてきた。いまの造り手は二〇一一年、二十七歳で母から引き継いだ。会津の米を使い、品揃えは年を通じて移っていく。",
            zh:"這家酒藏罕見地連續三代由女性擔任杜氏；現任釀造者於 2011 年、二十七歲時自母親手中接下。用的是會津的米，產品線隨著一年而變換。" },
          p:[
            { jp:"月白の天明", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"天明 ちょいリッチ47", g:"jd", rice:["yamada","yumenoka"], mill:"47%" },
            { jp:"天明 bange 夢の香", g:"jd", rice:"yumenoka" },
            { jp:"天明 bange 五百万石", g:"jd", rice:"gohyaku" }
          ] },

        { jp:"廣戸川", r:"Hirotogawa", h:"松崎酒造", hr:"Matsuzaki Shuzō", pref:"fukushima", est:"1892",
          note:{ en:"Started by a kōji maker who went into brewing, and named for the old name of the river beside it. The whole range is built on Yume-no-ka, the rice Fukushima bred for itself, and on well water from the property.",
            ja:"麹を商っていた者が醸造に移って始めた蔵で、名はかたわらを流れる川の古い呼び名に由来する。品揃えのすべてが、福島が自前で育てた夢の香と、敷地の井戸水の上に成り立っている。",
            zh:"由一位原本做麴的人轉入釀造而創立，名字取自流經旁側那條河的舊稱。整條產品線都建立在福島自行育成的「夢之香」與自家腹地的井水之上。" },
          p:[
            { jp:"廣戸川 純米にごり生酒", g:"j", m:["nigori","nama"], rice:"yumenoka", mill:"60%" },
            { jp:"廣戸川 特別純米", g:"tj", rice:"yumenoka", mill:"55%" },
            { jp:"廣戸川 純米吟醸", g:"jg", rice:"yumenoka", mill:"50%" },
            { jp:"廣戸川 純米大吟醸", g:"jd", rice:"yumenoka", mill:"40%" }
          ] },

        { jp:"榮川", r:"Eisen", h:"榮川酒造", hr:"Eisen Shuzō", pref:"fukushima", est:"1869",
          note:{ en:"Moved out of central Aizu-Wakamatsu to Bandai in 1989 to reach better water — the Ryūgasawa spring, later listed among Japan's hundred waters. Few houses have relocated for that reason alone.",
            ja:"よりよい水を得るために、一九八九年に会津若松の中心から磐梯へ移った。のちに名水百選に選ばれる龍ヶ沢の湧水である。水のためだけに蔵を動かした例は多くない。",
            zh:"為了取得更好的水，1989 年從會津若松市中心遷往磐梯——那就是後來入選名水百選的龍之澤湧泉。單單為了水而搬遷酒藏的例子並不多。" },
          p:[
            { jp:"榮川 特別純米酒", g:"tj", rice:"yamada", mill:"58%" },
            { jp:"榮川 純米吟醸", g:"jg", mill:"60%" },
            { jp:"榮川 山廃純米吟醸原酒 亀の尾", g:"jg", m:["yamahai","genshu"], rice:"kameno" },
            { jp:"榮川 純米大吟醸", g:"jd" }
          ] },

        { group:{ en:"Kantō & Kōshin'etsu", ja:"関東・甲信越", zh:"關東與甲信越" }, jp:"関東・甲信越", id:"g-kanto" },

        { jp:"仙禽", r:"Senkin", h:"せんきん", hr:"Senkin", pref:"tochigi", est:"1806",
          note:{ en:"Argues for what it calls a return to Edo: kimoto starters, heirloom rice, no added acid, no charcoal, and rice grown within the same watershed that supplies the brewing water. One of the most imitated small houses of the last fifteen years.",
            ja:"みずから「江戸返り」と呼ぶ主張を掲げる。生酛の酒母、古い品種の米、酸の添加なし、炭濾過なし、そして仕込み水と同じ水系で穫れた米。この十五年で最も真似された小さな蔵の一つである。",
            zh:"提出他們稱為「江戶返り」的主張：生酛酒母、古老品種的米、不添加酸、不用活性炭，而且米種在供應釀造用水的同一水系之內。它是近十五年來最常被模仿的小型酒藏之一。" },
          p:[
            { jp:"仙禽 モダン 壱式", r:"Modern", g:"nd", m:["kimoto"], rice:"yamada" },
            { jp:"仙禽 クラシック 零式", r:"Classic", g:"nd", m:["kimoto"], rice:"kameno" },
            { jp:"仙禽 オーガニック ナチュール", r:"Organic Nature", g:"nd", m:["kimoto"], rice:"kameno",
              d:{ en:"The organically farmed line the house treats as its statement of intent.", ja:"有機栽培の系列で、蔵はこれを自らの意思表示として扱っている。", zh:"有機栽培的系列，酒藏視之為自身理念的宣示。" } }
          ] },

        { jp:"鳳凰美田", r:"Hōō Biden", h:"小林酒造", hr:"Kobayashi Shuzō", pref:"tochigi", est:"1872",
          note:{ en:"Brews with groundwater off the Nikkō mountains and built a national following on openly fruity, aromatic ginjō — the style that the export market and the younger domestic drinker both reach for first.",
            ja:"日光の山から来る地下水で仕込み、はっきりと果実を思わせる香り高い吟醸で全国の支持を得た。輸出の市場でも、国内の若い飲み手でも、まず手の伸びる型である。",
            zh:"以日光山系的地下水釀造，並以明白帶果香、香氣鮮明的吟釀贏得全國性的支持——這正是出口市場與國內年輕飲者都會先伸手去拿的那一型。" },
          p:[
            { jp:"鳳凰美田 五割磨き 生酒", g:"jd", m:["nama"], rice:"yamada", mill:"50%" },
            { jp:"Black Phoenix", g:"jg", m:["muroka","nama"], rice:"aiyama" },
            { jp:"鳳凰美田 剱 辛口", g:"j" }
          ] },

        { jp:"惣誉", r:"Sōhomare", h:"惣誉酒造", hr:"Sōhomare Shuzō", pref:"tochigi", est:"1872",
          note:{ en:"Began as an outpost of a Shiga house, and is unusual now for blending aged batches by taste rather than releasing each tank as it comes. About nine bottles in ten are drunk inside Tochigi.",
            ja:"滋賀の蔵の出店として始まった。いまでは、タンクごとにそのまま出すのではなく、熟成させた酒を味で調合して出すという珍しい流儀を取る。瓶の十本のうち九本ほどは栃木の内で飲まれる。",
            zh:"起初是滋賀某酒藏的分支。如今它採取一種罕見的做法：不把每一槽照原樣出貨，而是把熟成過的酒依味道調合。大約每十瓶中有九瓶在栃木縣內被喝掉。" },
          p:[
            { jp:"惣誉 りんどう 純米吟醸", g:"jg", rice:"gohyaku" },
            { jp:"惣誉 夢ささら 生酛", g:"tj", m:["kimoto"], rice:"yumesasara", mill:"60%" }
          ] },

        { jp:"旭興", r:"Kyokkō", h:"渡邉酒造", hr:"Watanabe Shuzō", pref:"tochigi", est:"",
          note:{ en:"A very small Ōtawara house of about seven hundred koku a year that sells almost entirely within the prefecture, and puts its country sake alongside experimental kimoto milled to extremes.",
            ja:"年に七百石ほどの、大田原のごく小さな蔵である。ほとんどを県内で売り、素朴な地の酒のかたわらに、極端に磨いた生酛の試作を置く。",
            zh:"大田原的一家極小酒藏，年產約七百石，幾乎全數在縣內售出；在質樸的鄉土酒之旁，同時擺著磨到極端的生酛試作。" },
          p:[
            { jp:"旭興 特別純米 辛口", g:"tj", rice:["yamada","hitogokoro"], mill:"48 / 60%" },
            { jp:"旭興 純米吟醸", g:"jg", rice:"yamada", mill:"50%" }
          ] },

        { jp:"来福", r:"Raifuku", h:"来福酒造", hr:"Raifuku Shuzō", pref:"ibaraki", est:"1716",
          note:{ en:"The house that made flower yeasts a commercial proposition — strains isolated from cherry, chrysanthemum, nadeshiko and others, each giving a different aromatic signature — alongside a conventional range at very high polish.",
            ja:"花酵母を商品として成り立たせた蔵である。桜、菊、撫子などから分離した酵母がそれぞれ別の香りの印を与える。並行して、きわめてよく磨いた通常の品揃えも持つ。",
            zh:"這家酒藏讓花酵母成為真正可商品化的做法——自櫻、菊、撫子等花朵分離出的酵母，各自帶來不同的香氣印記——同時也保有一條精磨度極高的常規產品線。" },
          p:[
            { jp:"来福 招き猫", g:"jg", rice:"local", mill:"60%" },
            { jp:"来福 愛山", g:"jd", rice:"aiyama", mill:"40%" },
            { jp:"来福 超辛口 ひたち錦", g:"jg", rice:"hitachi", mill:"55%" },
            { jp:"来福 月下美人", g:"jg", rice:"yamada", mill:"50%",
              d:{ en:"Brewed with a yeast isolated from the night-blooming cereus.", ja:"月下美人の花から分離した酵母で醸す。", zh:"以自曇花分離出的酵母釀造。" } }
          ] },

        { jp:"結ゆい", r:"Musubi Yui", h:"結城酒造", hr:"Yūki Shuzō", pref:"ibaraki", est:"1594",
          note:{ en:"Its Edo-period storehouses were registered cultural properties until a boiler fire destroyed two of them in 2022; the house has been rebuilding since. The brand is brewed by the owner's wife, who came to it from outside the trade.",
            ja:"江戸期の蔵は登録有形文化財であったが、二〇二二年の罐の火災で二棟を失い、以来、建て直しが続いている。銘柄を醸すのは、業界の外から入ってきた当主の妻である。",
            zh:"其江戶時期的倉庫原為登錄有形文化財，2022 年一場鍋爐火災燒毀了其中兩棟，此後一直在重建。釀造這個品牌的，是從業界之外進來的當主之妻。" },
          p:[
            { jp:"結ゆい 特別純米", g:"tj", rice:"omachiAk", mill:"60%" },
            { jp:"結ゆい 純米吟醸", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"結ゆい 純米大吟醸", g:"jd", rice:"omachiAk", mill:"38%" }
          ] },

        { jp:"群馬泉", r:"Gunma Izumi", h:"島岡酒造", hr:"Shimaoka Shuzō", pref:"gunma", est:"1863",
          note:{ en:"Holds to kimoto and yamahai starters raised on the lactic bacteria resident in the building, and aims the result at daily drinking rather than at competition judges. A house that the ginjō boom simply went past.",
            ja:"蔵に棲みついた乳酸菌で育てる生酛・山廃の酒母を守り、その酒を鑑評会の審査員ではなく日々の晩酌に向ける。吟醸ブームがただ素通りしていった蔵である。",
            zh:"堅守以酒藏內常駐乳酸菌培養的生酛與山廢酒母，並把成品對準日常晚酌，而非評鑑會的評審。吟釀風潮就這樣從它身旁逕自走過。" },
          p:[
            { jp:"群馬泉 山廃純米", g:"j", m:["yamahai"], rice:"wakamizu", mill:"60%" },
            { jp:"群馬泉 純米吟醸", g:"jg", rice:"wakamizu", mill:"50%" },
            { jp:"群馬泉 大吟醸", g:"dg", rice:"yamada", mill:"35%" },
            { jp:"群馬泉 本醸造", g:"hj", rice:"wakamizu", mill:"60%" }
          ] },

        { jp:"神亀", r:"Shinkame", h:"神亀酒造", hr:"Shinkame Shuzō", pref:"saitama", est:"",
          note:{ en:"The first brewery of any size in the postwar era to put its entire output into junmai, in 1987, when the argument was still regarded as eccentric. Much of the all-junmai movement that followed traces back to this house. It also cellars its sake for years before release.",
            ja:"戦後、全量を純米にした最初のまとまった規模の蔵である。一九八七年、この主張がまだ変わり者の言い分と見られていた頃のことだった。その後の全量純米の流れの多くは、この蔵にたどり着く。出荷まで数年寝かせることでも知られる。",
            zh:"戰後第一家具一定規模、將全部產量轉為純米的酒藏，時為 1987 年，當時這個主張還被視為怪癖。其後的全量純米運動，多半可追溯到這家酒藏。它也以出貨前先窖藏數年而聞名。" },
          p:[
            { jp:"神亀 純米酒", g:"j" },
            { jp:"神亀 純米吟醸", g:"jg" },
            { jp:"ひこ孫 純米大吟醸", r:"Hikomago", g:"jd",
              d:{ en:"The sister label, released only after long cellaring.", ja:"姉妹銘柄で、長く寝かせてから出す。", zh:"姊妹品牌，長期窖藏後才出貨。" } }
          ] },

        { jp:"甲子", r:"Kinoene", h:"飯沼本家", hr:"Iinuma Honke", pref:"chiba", est:"",
          note:{ en:"One of the larger and older houses in Chiba, with a wide seasonal range built around direct-from-the-press bottling, and a brewery site that doubles as a public destination outside Tokyo.",
            ja:"千葉では大きく古いほうの蔵で、直汲みを軸にした季節ごとの幅広い品揃えを持つ。蔵そのものが、東京の外の訪ねる場所にもなっている。",
            zh:"千葉規模較大、歷史較久的酒藏之一，產品線隨季節鋪陳，以「直汲」裝瓶為軸；酒藏本身也兼作東京近郊的一處參訪地。" },
          p:[
            { jp:"甲子 直汲み 生原酒", g:"jd", m:["nama","genshu"], rice:["yamada","fusakogane"], mill:"50%" },
            { jp:"甲子 チバカラ", g:"j" }
          ] },

        { jp:"澤乃井", r:"Sawanoi", h:"小澤酒造", hr:"Ozawa Shuzō", pref:"tokyo", est:"1702",
          note:{ en:"Draws its water from a spring reached by a tunnel driven a hundred and forty metres into the rock, in the Okutama valley an hour from Shinjuku. The largest of Tokyo's surviving breweries and the one most people have actually visited.",
            ja:"新宿から一時間の奥多摩の谷で、岩盤に百四十メートル掘り進んだ横穴の湧き水を汲む。東京に残る蔵のうち最も大きく、実際に訪れた人がいちばん多い蔵でもある。",
            zh:"在距新宿一小時的奧多摩溪谷，取用一條鑿入岩盤一百四十公尺的橫坑所湧出的泉水。它是東京僅存酒藏中規模最大的一家，也是最多人真正去過的一家。" },
          p:[
            { jp:"澤乃井 大吟醸 凰", g:"dg", m:["genshu"], rice:"yamadaA", mill:"35%" },
            { jp:"澤乃井 生酛 武陽", g:"jd", m:["kimoto"] },
            { jp:"澤乃井 特別純米", g:"tj" }
          ] },

        { jp:"いづみ橋", r:"Izumibashi", h:"泉橋酒造", hr:"Izumibashi Shuzō", pref:"kanagawa", est:"1857",
          note:{ en:"Calls itself a cultivating brewery and means it: it grows the large majority of the rice it brews, on the plain around Ebina, which almost no house of its size does. Its dragonfly labels mark the different fields and varieties.",
            ja:"みずから「栽培醸造蔵」と称し、その言葉どおり、仕込む米の大半を海老名の平地で自ら育てている。同じ規模の蔵でこれをする例はほとんどない。とんぼの酒標が、田と品種の違いを示す。",
            zh:"自稱「栽培釀造藏」，而且名副其實：它在海老名一帶的平原上自種絕大部分釀酒用米，同等規模的酒藏幾乎無人如此。蜻蜓圖案的酒標用來標示不同的田區與品種。" },
          p:[
            { jp:"いづみ橋 恵 海老名耕地", g:"j", rice:"yamada", mill:"80%" },
            { jp:"いづみ橋 恵 青ラベル", g:"jg" },
            { jp:"いづみ橋 とんぼラベル 楽風舞", g:"jd", rice:"rakufu" }
          ] },

        { jp:"天青", r:"Tensei", h:"熊澤酒造", hr:"Kumazawa Shuzō", pref:"kanagawa", est:"1872",
          note:{ en:"The last brewery left on the Shōnan coast, and one that kept itself alive by becoming a place as much as a producer — a restaurant, a bakery and a craft beer brewery share the site with the kura.",
            ja:"湘南の海沿いに残る最後の蔵であり、造り手であると同時に場所になることで生き延びた。料理屋とパン屋と地ビールの醸造所が、蔵と同じ敷地に並んでいる。",
            zh:"湘南海岸僅存的最後一家酒藏，它靠著同時成為一個「地方」而非只是生產者而活了下來——餐廳、麵包坊與精釀啤酒廠，與酒藏共處同一片腹地。" },
          p:[
            { jp:"天青 純米", g:"j", rice:"gohyaku" },
            { jp:"天青 特別純米", g:"tj", rice:"gohyaku" },
            { jp:"天青 純米吟醸", g:"jg", rice:"yamada", mill:"50%" }
          ] },

        { jp:"真澄", r:"Masumi", h:"宮坂醸造", hr:"Miyasaka Jōzō", pref:"nagano", est:"1662",
          note:{ en:"The house where Association yeast No. 7 was isolated in 1946 — for decades the most widely used strain in Japan, and still the default for a great deal of ginjō. Sits beside the Suwa shrine that gave it its name.",
            ja:"一九四六年に協会七号酵母が分離された蔵である。数十年にわたり日本でもっとも広く使われた酵母であり、いまも多くの吟醸の標準であり続けている。名の由来となった諏訪の社のかたわらに建つ。",
            zh:"協會七號酵母於 1946 年在此分離而出——數十年間它是日本使用最廣的酵母，至今仍是許多吟釀的預設選擇。酒藏就座落在賦予它名字的諏訪神社旁。" },
          p:[
            { jp:"真澄 真朱", r:"Arakane", g:"jg", mill:"55%" },
            { jp:"真澄 山花", r:"Sanka", g:"jd", rice:"yamada", mill:"45%" },
            { jp:"真澄 七號", r:"Nanagō", g:"jd", rice:"local", mill:"40%",
              d:{ en:"Named for the yeast this brewery gave the industry.", ja:"この蔵が業界に贈った酵母の名を負う。", zh:"以這家酒藏獻給業界的那株酵母為名。" } },
            { jp:"真澄 奥伝寒造り", g:"j", mill:"70%" }
          ] },

        { jp:"七笑", r:"Nanawarai", h:"七笑酒造", hr:"Nanawarai Shuzō", pref:"nagano", est:"",
          note:{ en:"A Kiso valley house that aims for what it calls umakuchi — a savoury fullness that refuses the usual dry-or-sweet question — and works mostly with Miyama Nishiki grown in the same mountains.",
            ja:"木曽谷の蔵で、辛口か甘口かという問いをはねつける「旨口」を目指す。米は多くを、同じ山で穫れた美山錦に負っている。",
            zh:"木曾谷的一家酒藏，追求他們所稱的「旨口」——一種拒絕辛口或甘口這種老問題的鮮味厚度——用米大半來自同一片山中所產的美山錦。" },
          p:[
            { jp:"七笑 純米酒", g:"j", rice:"miyama", mill:"60%" },
            { jp:"七笑 特別純米酒", g:"tj" },
            { jp:"七笑 純米吟醸酒", g:"jg" }
          ] },

        { jp:"大信州", r:"Daishinshū", h:"大信州酒造", hr:"Daishinshū Shuzō", pref:"nagano", est:"",
          note:{ en:"Contracts the whole of its rice crop — Hitogokochi and Kinmon Nishiki, both bred in Nagano — from named growers, and has consolidated its brewing into a single modern facility near Matsumoto.",
            ja:"仕込む米のすべて——いずれも長野で育成されたひとごこちと金紋錦——を、名の分かる作り手との契約でまかなう。造りは松本近くの一つの新しい施設にまとめた。",
            zh:"所有釀造用米——皆為長野育成的「ひとごこち」與金紋錦——都向具名的種植者契作，並已把釀造集中到松本附近一座新的設施。" },
          p:[
            { jp:"大信州 特別純米", g:"tj", rice:["hitogokoro","kinmon"] },
            { jp:"大信州 手造りの優雅さ", g:"nd" }
          ] },

        { jp:"信州亀齢", r:"Shinshū Kirei", h:"岡崎酒造", hr:"Okazaki Shuzō", pref:"nagano", est:"1665",
          note:{ en:"A very small house in the old post town of Ueda, run by one of the few women brewing as tōji at her own family's kura, releasing an unusually wide set of single-variety bottlings for its size.",
            ja:"上田の古い宿場町にあるごく小さな蔵で、自家の蔵で杜氏として醸す数少ない女性の一人が率いる。その規模にしては、単一品種の仕込みの種類が異例に多い。",
            zh:"位於上田舊宿場町的一家極小酒藏，由少數幾位在自家酒藏擔任杜氏的女性之一主持；以其規模而言，單一品種的品項多得異乎尋常。" },
          p:[
            { jp:"信州亀齢 ひとごこち", g:"j", rice:"hitogokoro", mill:"70%" },
            { jp:"信州亀齢 美山錦", g:"jg", m:["muroka","nama","genshu"], rice:"miyama", mill:"39%" },
            { jp:"信州亀齢 金紋錦", g:"jd", rice:"kinmon", mill:"39%" },
            { jp:"信州亀齢 山田錦", g:"jg", m:["muroka","nama","genshu"], rice:"yamada", mill:"55%" }
          ] },

        { jp:"七賢", r:"Shichiken", h:"山梨銘醸", hr:"Yamanashi Meijō", pref:"yamanashi", est:"1750",
          note:{ en:"Sits on an underground river fed by the Southern Alps, and has put a great deal of work into bottle-fermented sparkling sake and into finishing sake in used whisky casks — two of the routes the industry is currently testing for export.",
            ja:"南アルプスが養う伏流水の上に建つ。瓶内発酵の発泡清酒と、ウイスキーの古樽での後熟に多くの力を注いできた。いずれも業界がいま輸出に向けて試している道である。",
            zh:"座落在南阿爾卑斯所涵養的伏流水之上，並在瓶內發酵的氣泡清酒與威士忌舊桶後熟這兩件事上投入甚多——這正是業界目前為出口所試驗的兩條路。" },
          p:[
            { jp:"七賢 絹の味", g:"jd" },
            { jp:"七賢 天鵞絨の味", g:"jg" },
            { jp:"七賢 風凛美山", g:"j" }
          ] },

/* ============================================================ */
/* 3 — Hokuriku                                                 */
/* ============================================================ */

        { group:{ en:"Niigata & Hokuriku", ja:"新潟・北陸", zh:"新潟與北陸" }, jp:"北陸", id:"g-hokuriku" },

        { jp:"久保田", r:"Kubota", h:"朝日酒造", hr:"Asahi Shuzō", pref:"niigata", est:"1830",
          note:{ en:"Launched in 1985 as a deliberate corrective to the sweet, heavy sake of the period, and became the brand that taught the country the word tanrei — light, clean, cut. Its tiers are named in a single series rather than by designation.",
            ja:"一九八五年、当時の甘く重い酒への意識的な是正として世に出され、「淡麗」という語を国じゅうに覚えさせた銘柄となった。等級は特定名称ではなく、一つながりの名の系列で呼ばれる。",
            zh:"1985 年推出，作為對當時甜而厚重的酒的一種刻意矯正，並成為讓全國記住「淡麗」一詞的品牌。其分級不以特定名稱稱呼，而是自成一套名字的系列。" } ,
          p:[
            { jp:"久保田 百寿", g:"thj", rice:"gohyaku", mill:"60%" },
            { jp:"久保田 千寿", g:"jg", rice:"gohyaku", mill:"50 / 55%" },
            { jp:"久保田 紅寿", g:"jg", rice:"gohyaku", mill:"55%" },
            { jp:"久保田 碧寿", g:"jd", m:["yamahai"], rice:"gohyaku", mill:"50%" },
            { jp:"久保田 萬寿", g:"jd", rice:"gohyaku", mill:"50 / 33%" }
          ] },

        { jp:"八海山", r:"Hakkaisan", h:"八海醸造", hr:"Hakkai Jōzō", pref:"niigata", est:"1922",
          note:{ en:"Built a national business on the idea that the everyday bottle should be made to the standard of the special one, and sells far more of its ordinary-grade sake than of anything premium. Snow-country water, and a snow-cooled warehouse to age it in.",
            ja:"日常の一本を特別な一本の基準で造るという考えで全国の商いを築き、上級品よりもはるかに多くの普通酒を売っている。雪国の水と、寝かせるための雪室を持つ。",
            zh:"以「日常的那一瓶也要用特別那一瓶的標準來做」建立起全國性的生意，而其普通酒的銷量遠高於任何高階品項。用的是雪國的水，並以雪室來貯藏熟成。" } ,
          p:[
            { jp:"清酒 八海山", g:"f", rice:"gohyaku", mill:"60%",
              d:{ en:"The everyday bottle, and by far the house's largest seller.", ja:"日常の一本であり、蔵の売上の大半を占める。", zh:"日常的那一瓶，也是這家酒藏銷量最大的產品。" } },
            { jp:"八海山 特別本醸造", g:"thj", rice:"gohyaku", mill:"55%" },
            { jp:"八海山 純米大吟醸", g:"jd", rice:["yamada","gohyaku","miyama"], mill:"45%" }
          ] },

        { jp:"越乃寒梅", r:"Koshi no Kanbai", h:"石本酒造", hr:"Ishimoto Shuzō", pref:"niigata", est:"1907",
          note:{ en:"The bottle that started the jizake boom. In the late 1960s a Tokyo magazine called it a phantom sake, the phrase stuck, and a small Niigata house became the first regional brand anyone queued for.",
            ja:"地酒ブームの発端となった一本である。一九六〇年代の終わりに東京の雑誌がこれを「幻の酒」と呼び、その言葉が定着して、新潟の小さな蔵は人が列をなす最初の地方銘柄となった。",
            zh:"揭開地酒風潮序幕的那一瓶。1960 年代末，東京一家雜誌稱它為「幻之酒」，這個說法從此固定下來，一家新潟小酒藏於是成為第一個讓人排隊的地方品牌。" } ,
          p:[
            { jp:"越乃寒梅 特撰", g:"g", rice:"yamada", mill:"50%" },
            { jp:"越乃寒梅 灑", g:"jg", rice:["gohyaku","yamada"], mill:"55%" },
            { jp:"越乃寒梅 無垢", g:"jd", rice:"yamada", mill:"48%" }
          ] },

        { jp:"〆張鶴", r:"Shimeharitsuru", h:"宮尾酒造", hr:"Miyao Shuzō", pref:"niigata", est:"1819",
          note:{ en:"A Murakami house at the northern edge of the prefecture, quietly consistent for two centuries, and one of the reference points for what Niigata sake is supposed to taste like.",
            ja:"県の北の端、村上の蔵である。二世紀にわたって静かに変わらず、新潟の酒はどう味わうべきものかを測る基準の一つとなっている。",
            zh:"位於新潟縣北端村上的一家酒藏，兩個世紀以來安靜而穩定，也是判斷「新潟的酒該是什麼味道」的基準之一。" } ,
          p:[
            { jp:"〆張鶴 月", g:"hj", mill:"55 / 60%" },
            { jp:"〆張鶴 雪", g:"thj", mill:"55%" },
            { jp:"〆張鶴 純", g:"jg", rice:"gohyaku", mill:"50%" },
            { jp:"〆張鶴 純米吟醸 山田錦", g:"jg", rice:"yamada", mill:"50%" }
          ] },

        { jp:"雪中梅", r:"Setchūbai", h:"丸山酒造場", hr:"Maruyama Shuzōjō", pref:"niigata", est:"1897",
          note:{ en:"Unusual in Niigata for being frankly soft and slightly sweet rather than dry, which is why it is often named in the same breath as the dry houses and then contrasted with them.",
            ja:"新潟にあって辛口ではなく、はっきりと柔らかく、やや甘い。辛口の蔵と一息に並べて名を挙げられ、そのうえで対比される理由がそこにある。",
            zh:"在新潟顯得特別：不走辛口，而是明確地柔和、略帶甜味。正因如此，人們常把它和那些辛口酒藏並列，再拿來對照。" } ,
          p:[
            { jp:"雪中梅 普通酒", g:"f", rice:["gohyaku","koshiibuki"], mill:"68%" },
            { jp:"雪中梅 本醸造", g:"hj", rice:["gohyaku","yamada"], mill:"63%" },
            { jp:"雪中梅 美守", g:"jg", rice:["koshitanrei","gohyaku"], mill:"50%" }
          ] },

        { jp:"上善如水", r:"Jōzen Mizu no Gotoshi", h:"白瀧酒造", hr:"Shirataki Shuzō", pref:"niigata", est:"1855",
          note:{ en:"Took its name from a line of Laozi — the highest good is like water — and in 1990 aimed a deliberately light, low-aroma sake in a frosted bottle at people who did not drink sake. It worked, and was widely copied.",
            ja:"名は老子の一句「上善如水」に由来する。一九九〇年、意図して軽く香りの低い酒を、すりガラスの瓶で、日本酒を飲まない人に向けて出した。それは当たり、広く真似された。",
            zh:"名字取自老子「上善若水」一語。1990 年，它以霧面玻璃瓶，把一款刻意輕盈、低香氣的酒推向原本不喝清酒的人。這一招奏效，並被廣泛模仿。" } ,
          p:[
            { jp:"上善如水 純米吟醸", g:"jg", mill:"55%" },
            { jp:"上善如水 純米大吟醸", g:"jd", mill:"45%" }
          ] },

        { jp:"鶴齢", r:"Kakurei", h:"青木酒造", hr:"Aoki Shuzō", pref:"niigata", est:"1717",
          note:{ en:"In Shiozawa, deep in the snow country of Minami-Uonuma, where the rice outside the door is the rice in the tank. Known for fuller-bodied sake than the prefecture's reputation would suggest.",
            ja:"南魚沼の雪深い塩沢にあり、戸の外の米がそのままタンクの米になる。県の評判から思われるよりも、厚みのある酒で知られる。",
            zh:"位於南魚沼雪深的鹽澤，門外的米就是槽裡的米。它以比這個縣的名聲所暗示的更厚實的酒體聞名。" } ,
          p:[
            { jp:"鶴齢 純米酒", g:"j", rice:["koshitanrei","gohyaku"], mill:"70%" },
            { jp:"鶴齢 純米吟醸", g:"jg", rice:"koshitanrei", mill:"55%" },
            { jp:"鶴齢 純米大吟醸", g:"jd", rice:"yamadaA", mill:"37%" }
          ] },

        { jp:"荷札酒", r:"Nifudazake", h:"加茂錦酒造", hr:"Kamonishiki Shuzō", pref:"niigata", est:"1893",
          note:{ en:"An old house given a second life when a successor still in his twenties launched a new brand in the 2010s, with luggage-tag labels naming the rice and the lot. Now one of the most sought-after names in the prefecture.",
            ja:"二〇一〇年代、まだ二十代の後継者が新しい銘柄を立ち上げたことで、古い蔵が二度目の生を得た。荷札を模した酒標に米とロットの名が記される。いまや県内でもっとも求められる名の一つである。",
            zh:"一家老酒藏因為一位還在二十多歲的繼承者在 2010 年代推出新品牌而獲得第二次生命；酒標做成行李吊牌的模樣，上頭寫著米種與批次。如今它是縣內最搶手的名字之一。" } ,
          p:[
            { jp:"荷札酒 槽場汲み", g:"jd", rice:"gohyaku", mill:"50%" },
            { jp:"荷札酒 備前朝日", g:"jd", rice:"asahi", mill:"50%" }
          ] },

        { jp:"村祐", r:"Murayū", h:"村祐酒造", hr:"Murayū Shuzō", pref:"niigata", est:"1948",
          note:{ en:"A tiny house that went the opposite way from the rest of Niigata, making sake of a frank, sugary sweetness and declining to print designations on the label at all.",
            ja:"新潟の他とは逆の方へ進んだごく小さな蔵で、率直に砂糖のような甘みを持つ酒を造り、酒標に特定名称をいっさい刷らない。",
            zh:"一家與新潟其餘酒藏背道而馳的極小酒藏，做的是坦率、近乎砂糖般甜美的酒，並且完全不在酒標上印特定名稱。" } ,
          p:[
            { jp:"村祐 茜ラベル", g:"jg", m:["nama","genshu"],
              d:{ en:"The house publishes no rice variety and no polishing ratio for any bottle.", ja:"この蔵はどの瓶についても原料米も精米歩合も公表していない。", zh:"這家酒藏對任何一瓶酒都不公布原料米與精米步合。" } },
            { jp:"村祐 常盤ラベル", g:"jd", m:["nama"] },
            { jp:"村祐 夏美燗", g:"tj" }
          ] },

        { jp:"麒麟山", r:"Kirinzan", h:"麒麟山酒造", hr:"Kirinzan Shuzō", pref:"niigata", est:"1843",
          note:{ en:"Deep in the Aga valley, and a house that treats tanrei karakuchi as a duty to its own town rather than a market position. It grows part of its rice locally and works on the forest that holds its water.",
            ja:"阿賀の谷の奥にある蔵で、淡麗辛口を市場での立ち位置ではなく、自らの町への務めとして扱う。米の一部を地元で育て、水を蓄える森の手入れにも関わる。",
            zh:"位於阿賀溪谷深處的酒藏，把「淡麗辛口」視為對自身鄉土的責任，而非市場定位。它在當地自種部分用米，也參與涵養水源的森林維護。" },
          p:[
            { jp:"麒麟山 伝統辛口", g:"f", rice:["gohyaku","koshiibuki"], mill:"65%" },
            { jp:"麒麟山 やわらか", g:"j", rice:"koshitanrei" },
            { jp:"麒麟山 金雲母", g:"jg", rice:"gohyaku", mill:"55%" }
          ] },

        { jp:"越乃景虎", r:"Koshi no Kagetora", h:"諸橋酒造", hr:"Morohashi Shuzō", pref:"niigata", est:"1847",
          note:{ en:"Named for the warlord Uesugi Kenshin, who spent his youth in Tochio under that name. Brews with water from the Dōdō-no-mori spring, one of the hundred waters, which is soft even by Niigata standards.",
            ja:"若き日を栃尾でその名で過ごした上杉謙信にちなむ。名水百選の杜々の森の湧水で仕込む。新潟の尺度でみても、なお軟らかい水である。",
            zh:"名字取自年少時曾以此名在栃尾度過的上杉謙信。以名水百選之一的杜杜之森湧泉釀造——即便以新潟的標準來看，那水也算極軟。" },
          p:[
            { jp:"越乃景虎 名水仕込 特別純米", g:"tj", rice:["gohyaku","yukinosei"], mill:"52%" },
            { jp:"越乃景虎 越淡麗 純米吟醸", g:"jg", rice:"koshitanrei", mill:"55%" },
            { jp:"越乃景虎 純米大吟醸", g:"jd", rice:["yamada","koshitanrei"], mill:"38%" }
          ] },

        { jp:"緑川", r:"Midorikawa", h:"緑川酒造", hr:"Midorikawa Shuzō", pref:"niigata", est:"1884",
          note:{ en:"Keeps no shop and no public sales site, limits its distribution deliberately, and answers almost nothing. What it does is ferment cold and then keep the result cold for a long time.",
            ja:"店も公の販売の頁も持たず、流通を意図して絞り、ほとんど何も答えない。していることは、低温で発酵させ、そののち長く低温で置くことである。",
            zh:"既無門市，也無公開販售的網頁，刻意限制流通，且幾乎什麼都不回應。它所做的，就是低溫發酵，然後長時間低溫存放。" },
          p:[
            { jp:"緑川 純米酒", g:"j", mill:"60%" },
            { jp:"緑川 純米吟醸", g:"jg", mill:"55%" },
            { jp:"緑川 大吟醸", g:"dg", rice:"yamada", mill:"40%" }
          ] },

        { jp:"高千代", r:"Takachiyo", h:"髙千代酒造", hr:"Takachiyo Shuzō", pref:"niigata", est:"1868",
          note:{ en:"Contracts its rice from eight named growers in Minami-Uonuma, including Ipponjime, a variety it holds itself, and mills most of the range to the same ratio so the rice rather than the milling does the talking.",
            ja:"南魚沼の八人の名の分かる作り手と契約して米を得る。自ら持つ品種、一本〆もその一つである。品揃えの多くを同じ歩合に磨き、磨きではなく米に語らせる。",
            zh:"向南魚沼八位具名的種植者契作用米，其中包括它自己持有的品種「一本〆」。產品線多半磨到相同步合，讓說話的是米而不是磨米。" },
          p:[
            { jp:"高千代 一本〆48", g:"jd", rice:"ipponjime", mill:"48%" },
            { jp:"高千代 魚沼産山田錦45", g:"jd", rice:"yamada", mill:"45%" },
            { jp:"高千代 アクアマリン", g:"jg", rice:"yamada" }
          ] },

        { jp:"大洋盛", r:"Taiyōzakari", h:"大洋酒造", hr:"Taiyō Shuzō", pref:"niigata", est:"1945",
          note:{ en:"A Murakami house of about twenty people, brewing from rice grown in the same town. Its Shiun line is sold only in Murakami and is followed by a local club that exists to drink it.",
            ja:"二十人ほどの村上の蔵で、同じ町で穫れた米から醸す。紫雲の系列は村上でしか売られず、それを飲むためにある地元の会がこれを追いかけている。",
            zh:"村上一家約二十人的酒藏，以同一個町所產的米釀造。「紫雲」系列只在村上販售，並有一個為了喝它而存在的在地同好會跟隨著它。" },
          p:[
            { jp:"紫雲 大洋盛", g:"f", rice:"gohyaku", mill:"55%" },
            { jp:"紫雲 大洋盛 純米吟醸", g:"jg", rice:"koshitanrei", mill:"55%" },
            { jp:"紫雲 大洋盛 うすにごり本生", g:"jd", m:["nigori","nama"], rice:"koshitanrei", mill:"50%" }
          ] },

        { jp:"鶴の友", r:"Tsuru no Tomo", h:"樋木酒造", hr:"Hiki Shuzō", pref:"niigata", est:"1832",
          note:{ en:"Enters no competitions, publishes no rice variety and no polishing ratio, and keeps the old grade names on the labels. Almost all of it is drunk in Niigata city.",
            ja:"鑑評会には出ず、原料米も精米歩合も公にせず、酒標には古い等級の名をそのまま残す。そのほとんどが新潟市のうちで飲まれている。",
            zh:"不參加評鑑會，不公布原料米與精米步合，酒標上仍留著舊時的等級名稱。它幾乎全部在新潟市內被喝掉。" },
          p:[
            { jp:"鶴の友 上白", g:"f" },
            { jp:"鶴の友 別撰", g:"hj" },
            { jp:"鶴の友 純米", g:"j" },
            { jp:"鶴の友 上々の諸白", g:"dg" }
          ] },

        { jp:"越の誉", r:"Koshi no Homare", h:"原酒造", hr:"Hara Shuzō", pref:"niigata", est:"1814",
          note:{ en:"A Kashiwazaki house that lost buildings to the town fire of 1911 and again to the Chūetsu offshore earthquake of 2007, and rebuilt after each.",
            ja:"柏崎の蔵で、一九一一年の町の大火で、また二〇〇七年の中越沖地震で建物を失い、そのたびに建て直した。",
            zh:"柏崎的一家酒藏，先後在 1911 年的市街大火與 2007 年的中越沖地震中失去建築，並在每一次之後重建。" },
          p:[
            { jp:"越の誉 特別純米酒", g:"tj", rice:"takane", mill:"60%" },
            { jp:"越の誉 純米大吟醸", g:"jd", rice:"takane", mill:"50%" }
          ] },

        { jp:"菊姫", r:"Kikuhime", h:"菊姫", hr:"Kikuhime", pref:"ishikawa", est:"1570",
          note:{ en:"Has bought its Yamada Nishiki from the same Special-A villages in Hyōgo for decades, brews a great deal of yamahai, and cellars sake for years — a house that argues against the fashion for freshness.",
            ja:"兵庫の同じ特A地区の村から、何十年も山田錦を買いつづけてきた。山廃を多く醸し、酒を何年も寝かせる。鮮度をよしとする流行に、正面から異を唱える蔵である。",
            zh:"數十年來一直向兵庫同幾個特 A 地區的村落採購山田錦，大量釀造山廢，並讓酒窖藏數年——這是一家正面反對「以新鮮為尚」風潮的酒藏。" } ,
          p:[
            { jp:"菊姫 山廃純米", g:"j", m:["yamahai"], rice:"yamadaA", mill:"70%" },
            { jp:"菊姫 特撰純米", g:"j", rice:"yamadaA", mill:"65%" },
            { jp:"菊姫 大吟醸", g:"dg", rice:"yamadaA", mill:"50%" }
          ] },

        { jp:"天狗舞", r:"Tengumai", h:"車多酒造", hr:"Shata Shuzō", pref:"ishikawa", est:"1823",
          note:{ en:"The house that made yamahai a style people ask for by name rather than a technicality: deep amber colour, high acidity, and a body that carries warming better than most.",
            ja:"山廃を、技術用語ではなく人が名指しで求める酒質にした蔵である。深い琥珀の色、高い酸、そして燗に多くの酒よりよく耐える骨格。",
            zh:"這家酒藏讓山廢從一個技術名詞變成人們會指名索取的風格：深琥珀色、高酸度，以及比多數酒更能承受溫熱的酒體。" } ,
          p:[
            { jp:"天狗舞 山廃仕込純米酒", g:"j", m:["yamahai"], rice:"gohyaku", mill:"60%" },
            { jp:"天狗舞 山廃純米大吟醸", g:"jd", m:["yamahai"], rice:"yamadaA", mill:"48%" },
            { jp:"天狗舞 純米大吟醸 50", g:"jd", rice:"yamadaA", mill:"50%" }
          ] },

        { jp:"手取川", r:"Tedorigawa", h:"吉田酒造店", hr:"Yoshida Shuzōten", pref:"ishikawa", est:"",
          note:{ en:"Named for the river whose alluvial fan it sits on, and one of the Ishikawa houses that carried the Nōto tōji tradition through the years when that guild was shrinking fastest.",
            ja:"蔵が載る扇状地をつくった川の名を負う。能登杜氏の組合がもっとも速く縮んでいた年月に、その伝統を担いつづけた石川の蔵の一つである。",
            zh:"以造出其所在沖積扇的那條河為名，也是在能登杜氏這個組合萎縮得最快的那些年裡，仍撐住這項傳統的石川酒藏之一。" } ,
          p:[
            { jp:"手取川 本流 本醸造", g:"hj", rice:"gohyaku", mill:"65%" },
            { jp:"手取川 山廃仕込 純米吟醸", g:"jg", m:["yamahai"], rice:["yamada","gohyaku"], mill:"50 / 60%" },
            { jp:"手取川 本流 純米大吟醸", g:"jd", rice:"yamada", mill:"45%" },
            { jp:"手取川 名流 大吟醸", g:"dg", rice:"yamada", mill:"40%" }
          ] },

        { jp:"遊穂", r:"Yūho", h:"御祖酒造", hr:"Mioya Shuzō", pref:"ishikawa", est:"1897",
          note:{ en:"A small Nōto peninsula house making food-led sake of firm acidity under a woman owner-brewer. The peninsula's breweries were hit hard by the earthquake of January 2024.",
            ja:"能登半島の小さな蔵で、女性の当主が自ら醸し、酸のしっかりした食中の酒を造る。半島の蔵は二〇二四年一月の地震で大きな打撃を受けた。",
            zh:"能登半島上的一家小酒藏，由女性當主親自釀造，做的是酸度紮實的佐餐酒。半島上的酒藏在 2024 年 1 月的地震中受創甚重。" } ,
          p:[
            { jp:"遊穂 純米酒", g:"j", rice:["gohyaku","notohikari"], mill:"60 / 55%" },
            { jp:"遊穂 山田錦・美山錦 55", g:"jg", rice:["yamada","miyama"], mill:"55%" }
          ] },

        { jp:"農口尚彦研究所", r:"Noguchi Naohiko Kenkyūjo", h:"農口尚彦研究所", hr:"Noguchi Naohiko Sake Institute", pref:"ishikawa", est:"2017",
          note:{ en:"Built in 2017 around one man: Noguchi Naohiko, the yamahai tōji who had already retired twice, brewing again at over eighty so that what he knows could be watched and written down. The name says research institute and means it.",
            ja:"二〇一七年、一人の人のために建てられた蔵である。すでに二度引退していた山廃の杜氏、農口尚彦が、八十を越えてふたたび醸した。その知が見られ、書き留められるようにするためである。名が研究所と言うのは、そのままの意味である。",
            zh:"2017 年為一個人而建的酒藏：已經兩度退休的山廢杜氏農口尚彥，八十餘歲再度釀酒，好讓他所知的一切能被觀看、被記錄下來。名字裡的「研究所」三字，就是字面上的意思。" },
          p:[
            { jp:"農口尚彦研究所 本醸造", g:"hj", rice:"gohyaku", mill:"60%" },
            { jp:"農口尚彦研究所 純米酒", g:"j", rice:"gohyaku", mill:"60%" },
            { jp:"農口尚彦研究所 山廃純米", g:"j", m:["yamahai"], rice:"gohyaku", mill:"65%" },
            { jp:"農口尚彦研究所 純米大吟醸", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"宗玄", r:"Sōgen", h:"宗玄酒造", hr:"Sōgen Shuzō", pref:"ishikawa", est:"1768",
          note:{ en:"The oldest house in Oku-Noto, founded by a family descended from a Noto lord who fled a siege in 1577. Since 2011 it has aged its sake inside a disused railway tunnel, which is above the reach of a tsunami.",
            ja:"奥能登で最も古い蔵であり、一五七七年の落城から逃れた能登の領主の末裔にあたる家が起こした。二〇一一年からは、廃線の隧道のなかで酒を寝かせている。津波の届かぬ高さにあるからである。",
            zh:"奧能登最古老的酒藏，創立者是 1577 年城破後逃出的能登領主之後裔。自 2011 年起，它在一條廢棄的鐵路隧道中窖藏酒——那個高度，海嘯搆不著。" },
          p:[
            { jp:"宗玄 漲 特別本醸造", g:"thj", rice:["yamada","gohyaku"], mill:"60%" },
            { jp:"宗玄 山田錦 無濾過生原酒", g:"j", m:["muroka","nama","genshu"], rice:"yamada", mill:"65%" },
            { jp:"宗玄 玄心", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"加賀鳶", r:"Kagatobi", h:"福光屋", hr:"Fukumitsuya", pref:"ishikawa", est:"1625",
          note:{ en:"The oldest brewery in Kanazawa, contracting its rice since 1960 and brewing nothing but junmai since 2001 — an early and complete conversion for a house of its size.",
            ja:"金沢で最も古い蔵である。一九六〇年から米を契約栽培に切り替え、二〇〇一年からは純米しか造っていない。この規模の蔵としては、早く、そして徹底した転換であった。",
            zh:"金澤最古老的酒藏，自 1960 年起契作用米，2001 年起只釀純米——以這個規模的酒藏而言，這是既早又徹底的一次轉換。" },
          p:[
            { jp:"加賀鳶 純米大吟醸46 百万石乃白", g:"jd", rice:"hyakumangoku", mill:"46%" },
            { jp:"加賀鳶 いかづち", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"加賀鳶 吉祥", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"加賀鳶 いかづち 一閃", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"常きげん", r:"Jōkigen", h:"鹿野酒造", hr:"Kano Shuzō", pref:"ishikawa", est:"1819",
          note:{ en:"Under Hakusan in Kaga, working chiefly in yamahai; the brand name comes from a harvest-festival verse written by the fourth generation of the family.",
            ja:"加賀の白山の下にあり、主に山廃で仕事をする。銘柄の名は、四代目が詠んだ収穫の祭の歌に由来する。",
            zh:"位於加賀白山之下，主要以山廢作業；品牌名出自第四代所詠的一首豐收祭歌。" },
          p:[
            { jp:"常きげん 純米酒", g:"j", rice:"gohyaku", mill:"60%" },
            { jp:"常きげん まぼろしの加賀の庄", g:"tj", rice:"yamada", mill:"60%" },
            { jp:"常きげん 山廃大吟醸", g:"dg", m:["yamahai"], rice:"yamada", mill:"40%" },
            { jp:"常きげん 吟醸王国", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"満寿泉", r:"Masuizumi", h:"桝田酒造店", hr:"Masuda Shuzōten", pref:"toyama", est:"1893",
          note:{ en:"In the old harbour quarter of Toyama, and one of the first houses anywhere to sell daiginjō as a commercial product rather than an exhibition piece. Also an early experimenter with cask ageing.",
            ja:"富山の古い港町の一角にあり、大吟醸を出品用ではなく商品として売った最初の蔵の一つである。樽での熟成にも早くから手をつけた。",
            zh:"位於富山舊港町一隅，是最早把大吟釀當作商品、而非參賽展示品來販售的酒藏之一。它也很早就嘗試以木桶熟成。" } ,
          p:[
            { jp:"満寿泉 寿 大吟醸", g:"dg", rice:"yamada", mill:"50%" },
            { jp:"満寿泉 寿 純米大吟醸", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"立山", r:"Tateyama", h:"立山酒造", hr:"Tateyama Shuzō", pref:"toyama", est:"1830",
          note:{ en:"The prefecture's volume house, named for the mountain range that supplies its water, and the bottle most Toyama households actually keep in the kitchen.",
            ja:"県を代表する量の蔵であり、仕込み水を与える山脈の名を負う。富山の家の台所に実際に置かれているのは、たいていこの瓶である。",
            zh:"富山縣的量產代表酒藏，以供應其釀造用水的那道山脈為名；富山人家廚房裡實際擺著的，多半就是這一瓶。" } ,
          p:[
            { jp:"立山 本醸造", g:"hj", rice:["gohyaku","dewa33"], mill:"63%" },
            { jp:"立山 特別本醸造", g:"thj", mill:"59%" },
            { jp:"立山 純米吟醸", g:"jg", rice:["yamada","gohyaku"], mill:"59%" }
          ] },

        { jp:"羽根屋", r:"Haneya", h:"富美菊酒造", hr:"Fumigiku Shuzō", pref:"toyama", est:"1916",
          note:{ en:"Brews every tank to ginjō standard, including the cheapest, and works in very small batches all year rather than in a winter season. A house that reorganised itself completely and quite recently.",
            ja:"いちばん安いものも含め、すべてのタンクを吟醸の基準で仕込み、冬の一季ではなく年を通じてごく小さな仕込みを重ねる。ごく最近、自らを全面的に組み替えた蔵である。",
            zh:"每一槽都以吟釀的標準釀造，最便宜的也不例外；並且不按冬季一季作業，而是全年以極小批量反覆釀製。這是一家在相當晚近才把自己徹底重組過的酒藏。" } ,
          p:[
            { jp:"羽根屋 煌火", g:"jg", m:["nama"], rice:"gohyaku", mill:"60%" },
            { jp:"羽根屋 富の香", g:"jg", rice:"tominoka", mill:"60%" },
            { jp:"羽根屋 翼 純米大吟醸 50", g:"jd", rice:"gohyaku", mill:"50%" },
            { jp:"羽根屋 大吟醸", g:"dg", rice:"yamada", mill:"40%" }
          ] },

        { jp:"勝駒", r:"Katsukoma", h:"清都酒造場", hr:"Kiyoto Shuzōjō", pref:"toyama", est:"1906",
          note:{ en:"Five brewers, no shop at the brewery, and no attempt to be found. It is poured in Takaoka izakaya and is close to unbuyable at retail — a house whose scarcity is a consequence rather than a strategy.",
            ja:"造り手は五人、蔵に店はなく、見つけてもらおうという気配もない。高岡の居酒屋で注がれ、店頭ではまず買えない。その稀少さは、戦略ではなく結果である。",
            zh:"五名釀造者，酒藏不設門市，也無意讓人找到。它在高岡的居酒屋裡被斟出，在零售端幾乎買不到——其稀少是結果，而非策略。" },
          p:[
            { jp:"勝駒 本仕込", g:"thj", rice:"gohyaku", mill:"55%" },
            { jp:"勝駒 純米酒", g:"j", rice:"gohyaku", mill:"50%" },
            { jp:"勝駒 純米吟醸", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"勝駒 大吟醸", g:"dg", rice:"yamada", mill:"40%" }
          ] },

        { jp:"黒龍", r:"Kokuryū", h:"黒龍酒造", hr:"Kokuryū Shuzō", pref:"fukui", est:"1804",
          note:{ en:"Put a daiginjō on general sale in 1975, before the category was a category, and has stayed at the top of the Fukui trade since. Its Ishidaya bottling is one of the few sake released with a price of its own order.",
            ja:"大吟醸という区分がまだ区分でなかった一九七五年に、大吟醸を一般に売り出し、以来ずっと福井の商いの頂にある。石田屋は、それ自体が別の価格帯に属する数少ない酒の一つである。",
            zh:"1975 年，在「大吟釀」還不成其為一個類別之前，就把大吟釀公開發售，此後一直居福井業界之首。其「石田屋」是少數幾款自成一個價格層級的清酒之一。" } ,
          p:[
            { jp:"黒龍 いっちょらい", g:"jg", rice:"gohyaku", mill:"55%" },
            { jp:"黒龍 純米大吟醸 五百万石", g:"jd", rice:"gohyaku", mill:"50%" },
            { jp:"黒龍 石田屋", g:"jd", rice:"yamadaA", mill:"35%",
              d:{ en:"Released in fixed quantity once a year.", ja:"年に一度、数を限って出される。", zh:"每年限量發售一次。" } },
            { jp:"黒龍 二左衛門", g:"jd", rice:"yamadaA", mill:"35%" }
          ] },

        { jp:"梵", r:"Born", h:"加藤吉平商店", hr:"Katō Kichibee Shōten", pref:"fukui", est:"1860",
          note:{ en:"Brews nothing below junmai daiginjō, holds its sake at below-zero temperatures for a year or more before release, and is poured at Japanese state functions abroad more often than any other brand.",
            ja:"純米大吟醸より下は造らず、出荷までの一年以上を氷点下で寝かせる。国外の公式の場で日本の側が注ぐ酒として、どの銘柄より多く使われている。",
            zh:"不釀低於純米大吟釀的酒，出貨前先在零度以下貯藏一年以上；在海外的日本官方場合中，它被斟出的次數多過任何其他品牌。" } ,
          p:[
            { jp:"梵 純米55", g:"j", rice:["yamadaA","gohyaku"], mill:"55%" },
            { jp:"梵 特撰 純米大吟醸", g:"jd", rice:"yamadaA", mill:"38%" },
            { jp:"梵 団", g:"jd", rice:"yamadaA", mill:"20%" }
          ] },

/* ============================================================ */
/* 4 — Tōkai                                                    */
/* ============================================================ */

        { jp:"常山", r:"Jōzan", h:"常山酒造", hr:"Jōzan Shuzō", pref:"fukui", est:"1804",
          note:{ en:"The family were merchants in the port of Mikuni and then money-changers to the domain before they began brewing. Now in its ninth generation, working toward the dry Echizen manner with the umami left in.",
            ja:"家はもと三国の港の商人であり、のち藩の両替を務めてから醸造に入った。いまは九代目にあたり、旨みを残したまま越前の辛口へ向かっている。",
            zh:"這個家族原是三國港的商人，其後擔任藩的錢莊，才進入釀造業。如今傳至第九代，朝著保留旨味的越前辛口而行。" },
          p:[
            { jp:"常山 純米辛口 超", g:"j", rice:"gohyaku" },
            { jp:"常山 玄達 改", g:"jg", rice:"gohyaku" },
            { jp:"常山 芳醇辛口 極", g:"jd", rice:"gohyaku", mill:"50%" }
          ] },

        { jp:"白岳仙", r:"Hakugakusen", h:"安本酒造", hr:"Yasumoto Shuzō", pref:"fukui", est:"1853",
          note:{ en:"Ten buildings on the property, one of them from 1889, are registered cultural properties. The brand was relaunched in 2001 on rice grown entirely within Fukui — a small house choosing a narrow ground to stand on.",
            ja:"敷地の十棟が登録有形文化財であり、うち一棟は一八八九年のものである。銘柄は二〇〇一年、福井の内で穫れた米だけで立て直された。小さな蔵が、狭い足場をあえて選んだのである。",
            zh:"腹地內有十棟建築是登錄有形文化財，其中一棟建於 1889 年。這個品牌於 2001 年以全數產自福井的米重新出發——一家小酒藏，刻意選擇了一塊狹窄的立足之地。" },
          p:[
            { jp:"白岳仙 辛口純米 真紅", g:"j", rice:"gohyaku", mill:"55 / 65%" },
            { jp:"白岳仙 純米吟醸 白練", g:"jg", rice:"gohyaku", mill:"55 / 58%" },
            { jp:"白岳仙 純米大吟醸 黒鉄", g:"jd", rice:"gohyaku", mill:"50%" }
          ] },

        { jp:"一本義", r:"Ippongi", h:"一本義久保本店", hr:"Ippongi Kubo Honten", pref:"fukui", est:"1902",
          note:{ en:"In Katsuyama, in the snow at the foot of the Hakusan range, and one of the houses that took up Koshi-no-shizuku, the sake rice bred for Fukui, for a second label of its own.",
            ja:"白山の麓、雪の中の勝山にある。福井のために育成された酒米、越の雫を取り上げ、別の銘柄を立てた蔵の一つである。",
            zh:"位於白山山腳、雪中的勝山；它是採用為福井育成的酒米「越之雫」並另立一個品牌的酒藏之一。" },
          p:[
            { jp:"伝心 辛爽系", g:"jg", rice:"koshinoshizuku", mill:"58%" },
            { jp:"伝心 凜", g:"jd", rice:"koshinoshizuku", mill:"45%" }
          ] },

        { jp:"花垣", r:"Hanagaki", h:"南部酒造場", hr:"Nanbu Shuzōjō", pref:"fukui", est:"1901",
          note:{ en:"A tea and hardware merchant since 1733 that turned to brewing in 1901 after a run of fires through the town of Ōno, and named the sake for cherry blossom.",
            ja:"一七三三年から茶と金物を商っていた家が、大野の町を続けて襲った火事ののち、一九〇一年に醸造へ転じ、酒に桜の名を与えた。",
            zh:"自 1733 年起經營茶與五金的商家，在大野町接連遭遇火災之後，於 1901 年轉入釀造，並以櫻花為酒命名。" },
          p:[
            { jp:"花垣 超辛純米", g:"j", mill:"60%" },
            { jp:"花垣 純米吟醸55%", g:"jg", rice:"brewing", mill:"55%" },
            { jp:"花垣 棚田米 純米大吟醸", g:"jd", rice:"gohyaku", mill:"50%" }
          ] },

        { group:{ en:"Tōkai", ja:"東海", zh:"東海" }, jp:"東海", id:"g-tokai" },

        { jp:"而今", r:"Jikon", h:"木屋正酒造", hr:"Kiyashō Shuzō", pref:"mie", est:"1818",
          note:{ en:"Sold under an older name until 2005, when the successor launched a new brand meaning this present moment. Within a few years it had become one of the two or three hardest bottles in Japan to find on a shelf.",
            ja:"二〇〇五年まで古い名で売っていたが、後継者が「いまこの瞬間」を意味する新しい銘柄を立てた。数年のうちに、日本で棚に見つけることのもっとも難しい二つ三つの瓶の一つになった。",
            zh:"直到 2005 年都以舊名販售，其後繼承者推出了意為「此時此刻」的新品牌。不過幾年，它便成為全日本貨架上最難尋得的兩三瓶酒之一。" },
          p:[
            { jp:"而今 特別純米", g:"tj" },
            { jp:"而今 三重山田錦", g:"jg", rice:"yamada",
              d:{ en:"Released both unpasteurised and pasteurised; the rice is grown in Mie.", ja:"生と火入れの双方で出る。米は三重で穫れたもの。", zh:"生酒與火入版本皆有；米產於三重。" } },
            { jp:"而今 特上雄町", g:"jd", rice:"omachi", mill:"35%" },
            { jp:"而今 簗瀬", g:"dg" }
          ] },

        { jp:"作", r:"Zaku", h:"清水清三郎商店", hr:"Shimizu Seizaburō Shōten", pref:"mie", est:"",
          note:{ en:"A Suzuka house whose lineup is organised as a long tiered series, each tier carrying its own poetic name rather than a designation, and polished to a uniformly modern, clean profile. Served at the 2016 Ise-Shima summit.",
            ja:"鈴鹿の蔵で、品揃えは長い段階の系列として組まれ、それぞれの段が特定名称ではなく詩的な名を負う。酒質は一様に現代的で澄んでいる。二〇一六年の伊勢志摩の会議で供された。",
            zh:"鈴鹿的一家酒藏，產品線編成一長串分層系列，每一層各有自己的詩意名字而非特定名稱，酒質則一致地現代而澄澈。曾在 2016 年伊勢志摩的會議中供應。" },
          p:[
            { jp:"作 恵乃智", g:"jg" },
            { jp:"作 陽山一滴水", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"田光", r:"Tabika", h:"早川酒造", hr:"Hayakawa Shuzō", pref:"mie", est:"",
          note:{ en:"A Komono house brewing junmai only and pressing everything in bags, which is slow and wasteful and gives a clearer result. Rice and water both come from within the same valley.",
            ja:"菰野の蔵で、純米のみを醸し、すべてを袋で搾る。時間がかかり歩留まりも落ちるが、澄んだ酒になる。米も水も、同じ谷のうちから来る。",
            zh:"菰野的一家酒藏，只釀純米，並且全部以酒袋壓榨——費時且耗損大，但成酒更為澄澈。米與水都來自同一座山谷之內。" },
          p:[
            { jp:"田光 純米吟醸 雄町", g:"jg", rice:"omachi" },
            { jp:"田光 純米大吟醸 山田錦40", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"瀧自慢", r:"Takijiman", h:"瀧自慢酒造", hr:"Takijiman Shuzō", pref:"mie", est:"",
          note:{ en:"About six hundred koku a year, nine people, and water from the forty-eight waterfalls at Akame. It states its aim as sake one person would drink again, which is not the same aim as sake that wins prizes.",
            ja:"年に六百石ほど、人は九人、水は赤目の四十八滝から来る。掲げる目標は、一人の人が繰り返し飲みたくなる酒であって、賞を獲る酒とは同じではない。",
            zh:"年產約六百石，九個人，水來自赤目四十八瀑。它揭示的目標是「讓一個人願意一再飲用的酒」——那與能得獎的酒，並不是同一個目標。" },
          p:[
            { jp:"瀧自慢 純米大吟醸", g:"jd", rice:"local" },
            { jp:"瀧自慢 匠35", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"半蔵", r:"Hanzō", h:"大田酒造", hr:"Ōta Shuzō", pref:"mie", est:"1892",
          note:{ en:"In the Iga basin, and named for the Iga-born retainer whose name is now attached to every ninja in fiction. Its tōji since 2019 is a daughter of the house, the seventh generation.",
            ja:"伊賀の盆地にあり、いまでは物語のあらゆる忍者に付けられている、伊賀に生まれた家臣の名を負う。二〇一九年からの杜氏は、家の娘であり七代目にあたる。",
            zh:"位於伊賀盆地，名字取自那位出身伊賀的家臣——如今小說裡的每一個忍者都掛著他的名字。自 2019 年起的杜氏，是這個家的女兒，也是第七代。" },
          p:[
            { jp:"半蔵 赤ラベル", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"半蔵 純米大吟醸 神の穂", g:"jd", rice:"kaminoho", mill:"50%" },
            { jp:"半蔵 磨き40", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"醸し人九平次", r:"Kamoshibito Kuheiji", h:"萬乗醸造", hr:"Banjō Jōzō", pref:"aichi", est:"1647",
          note:{ en:"Treats sake the way a Burgundy estate treats wine: contracted fields the brewery farms itself in Hyōgo, bottlings named for the plot, and a domaine of its own in Burgundy. It sold into Paris before it sold into much of Japan.",
            ja:"ブルゴーニュの生産者が葡萄酒を扱うように酒を扱う。兵庫に蔵が自ら耕す契約の田を持ち、その区画の名で瓶詰めし、ブルゴーニュにも自前の畑を構えた。日本の多くの土地より先に、パリで売れた蔵である。",
            zh:"以勃艮第酒莊對待葡萄酒的方式對待清酒：在兵庫擁有酒藏親自耕作的契作田，以田區之名裝瓶，並在勃艮第置有自己的莊園。它先賣進巴黎，才賣進日本大半地方。" },
          p:[
            { jp:"醸し人九平次 山田錦", r:"EAU DU DÉSIR", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"醸し人九平次 雄町", r:"SAUVAGE", g:"jd", rice:"omachi", mill:"50%" },
            { jp:"醸し人九平次 別誂", g:"jd", rice:"yamada", mill:"35%" },
            { jp:"黒田庄に生まれて", g:"jd", rice:"yamada", mill:"50%",
              d:{ en:"From the brewery's own fields at Kurodashō in Hyōgo.", ja:"兵庫・黒田庄にある蔵自身の田から。", zh:"出自酒藏在兵庫黑田庄的自有田區。" } }
          ] },

        { jp:"蓬莱泉", r:"Hōraisen", h:"関谷醸造", hr:"Sekiya Jōzō", pref:"aichi", est:"1864",
          note:{ en:"The largest premium house in Aichi, in the hills at Shinshiro, with a colour-coded everyday range beneath a small number of celebrated daiginjō that are released on a fixed schedule and sell out against it.",
            ja:"愛知で最大の上級の蔵で、新城の山あいにある。色で分けた日常の品揃えの上に、時期を定めて出され、その時期のうちに売り切れる少数の名高い大吟醸を置く。",
            zh:"愛知規模最大的高階酒藏，位於新城的山間；在以顏色分級的日常產品線之上，另有少數幾款名聲響亮的大吟釀，按固定時程出貨，並在該時程內售罄。" },
          p:[
            { jp:"蓬莱泉 可。", g:"tj" },
            { jp:"蓬莱泉 和", g:"jg" },
            { jp:"蓬莱泉 美", g:"jd" },
            { jp:"蓬莱泉 空", g:"jd",
              d:{ en:"The boxed flagship, allocated rather than stocked.", ja:"箱入りの看板であり、常備ではなく配分される。", zh:"裝盒的招牌品項，採配額供應而非常備。" } }
          ] },

        { jp:"義侠", r:"Gikyō", h:"山忠本家酒造", hr:"Yamachū Honke Shuzō", pref:"aichi", est:"",
          note:{ en:"Labels most of its range by the polishing ratio alone rather than by designation, buys only top-grade Yamada Nishiki from the Tōjō district of Hyōgo, and draws water from two hundred and fifty metres down.",
            ja:"品揃えの多くを特定名称ではなく精米歩合そのもので名乗る。米は兵庫・東条の最上等級の山田錦のみを買い、水は地下二百五十メートルから汲む。",
            zh:"產品線大半不以特定名稱、而以精米步合本身為名。米只採購兵庫東條最高等級的山田錦，水則汲自地下二百五十公尺。" },
          p:[
            { jp:"義侠 六〇%", g:"j", m:["genshu"], rice:"yamada", mill:"60%" },
            { jp:"義侠 四〇% 特別栽培米", g:"jg", m:["genshu"], rice:"yamada", mill:"40%" },
            { jp:"義侠 三〇%", g:"jg", m:["genshu"], rice:"yamada", mill:"30%" },
            { jp:"義侠 えにし", g:"tj", m:["aged"], rice:"yamada",
              d:{ en:"Held three years before release.", ja:"三年寝かせてから出す。", zh:"窖藏三年後才出貨。" } }
          ] },

        { jp:"長珍", r:"Chōchin", h:"長珍酒造", hr:"Chōchin Shuzō", pref:"aichi", est:"1868",
          note:{ en:"Renamed itself from the family shop name to a word meaning long treasured, and brews a thick, savoury sake made for the table and for warming, using hard groundwater and the cold wind off Ibuki.",
            ja:"家の屋号から「長く珍重される」意の名へ改め、硬い地下水と伊吹おろしの寒風で、食卓と燗のための厚く旨い酒を醸す。",
            zh:"從家族商號改名為意指「長久被珍視」的名字，並以硬質地下水與伊吹山吹下的寒風，釀出厚實而鮮美、為餐桌與溫熱而生的酒。" },
          p:[
            { jp:"長珍 特別純米 GOLD", g:"tj", rice:"yumeginga", mill:"60%" },
            { jp:"長珍 純米吟醸 山田錦", g:"jg", rice:"yamada", mill:"50 / 55%" }
          ] },

        { jp:"開運", r:"Kaiun", h:"土井酒造場", hr:"Doi Shuzōjō", pref:"shizuoka", est:"1872",
          note:{ en:"Mills all its own rice on site, works in the Nōto tōji line, and helped define the restrained Shizuoka ginjō style of the 1980s — fragrant without being loud, and made to sit beside food.",
            ja:"米の精白をすべて自らの蔵で行い、能登杜氏の系譜に連なる。香りはあるが声高ではなく、料理のかたわらに置かれるための酒——一九八〇年代の静岡吟醸の抑制の効いた型を形づくった蔵の一つである。",
            zh:"所有的精米都在自家酒藏內完成，承襲能登杜氏一系；香氣有而不喧，是為了擺在菜餚旁而做的酒——它是形塑 1980 年代靜岡吟釀那種節制風格的酒藏之一。" },
          p:[
            { jp:"開運 純米大吟醸", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"開運 山田錦", g:"jg", rice:"yamadaA", mill:"50%" },
            { jp:"開運 特別純米", g:"tj" }
          ] },

        { jp:"磯自慢", r:"Isojiman", h:"磯自慢酒造", hr:"Isojiman Shuzō", pref:"shizuoka", est:"1830",
          note:{ en:"A Yaizu house regarded as the most exacting in the prefecture, buying Yamada Nishiki only from the Special-A ground at Tōjō and milling the kōji rice and the mash rice to different ratios. Poured at the 2008 Tōyako summit.",
            ja:"焼津の蔵で、県内でもっとも厳格と目される。山田錦は東条の特A地区からのみ買い、麹米と掛米を別々の歩合に磨く。二〇〇八年の洞爺湖の会議で供された。",
            zh:"燒津的一家酒藏，被視為縣內最為嚴謹者；山田錦只採購自東條的特 A 地帶，且麴米與掛米分別磨到不同的步合。曾在 2008 年洞爺湖的會議中供應。" },
          p:[
            { jp:"磯自慢 山田錦", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"磯自慢 特A地区東条産", g:"jg", rice:"yamadaA", mill:"50–55%" },
            { jp:"磯自慢 大吟醸純米", g:"jd", rice:"yamada", mill:"45%" }
          ] },

        { jp:"志太泉", r:"Shidaizumi", h:"志太泉酒造", hr:"Shidaizumi Shuzō", pref:"shizuoka", est:"1882",
          note:{ en:"A Fujieda family house that stopped brewing during the war and started again in 1954. It works with very soft local water and the prefecture's own yeasts, toward a gentle sake meant to be drunk with a meal.",
            ja:"藤枝の家族の蔵で、戦時に造りを止め、一九五四年に再び始めた。きわめて軟らかい地元の水と県の酵母で、食事とともに飲むための穏やかな酒を目指す。",
            zh:"藤枝的一家家族酒藏，戰時停釀，1954 年重新開始。以極軟的當地水質與本縣自有酵母，做一款供人配飯而飲的溫和之酒。" },
          p:[
            { jp:"志太泉 純米吟醸 山田錦", g:"jg", rice:"yamada" },
            { jp:"志太泉 純米酒", g:"j" },
            { jp:"開龍 朝比奈山田錦", g:"j", m:["genshu"], rice:"yamada", mill:"70%" }
          ] },

        { jp:"白隠正宗", r:"Hakuin Masamune", h:"高嶋酒造", hr:"Takashima Shuzō", pref:"shizuoka", est:"1804",
          note:{ en:"A small Numazu house named for the Zen master born in the same town, and one of the strongest advocates for Homare Fuji, the sake rice Shizuoka bred for itself. Aims squarely at warm sake.",
            ja:"沼津の小さな蔵で、同じ町に生まれた禅僧の名を負う。静岡が自前で育てた酒米、誉富士のもっとも熱心な擁護者の一つであり、狙いはまっすぐ燗に向いている。",
            zh:"沼津的一家小酒藏，以出生於同一座町的禪僧為名，也是靜岡自行育成的酒米「譽富士」最熱切的支持者之一；其目標直指溫熱後飲用。" },
          p:[
            { jp:"白隠正宗 純米大吟醸", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"白隠正宗 純米吟醸", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"白隠正宗 誉富士", g:"tj", rice:"homare", mill:"60%" },
            { jp:"白隠正宗 辛口純米", g:"j", rice:"homare", mill:"65%" }
          ] },

        { jp:"喜久醉", r:"Kikuyoi", h:"青島酒造", hr:"Aoshima Shuzō", pref:"shizuoka", est:"1868",
          note:{ en:"Brewed by a former finance man who came home to the kura, with its top bottlings made from rice a single farmer, Matsushita Akihiro, grows without chemicals a few kilometres away.",
            ja:"金融の仕事から蔵へ戻った当主が醸す。上位の酒は、数キロ先で松下明弘という一人の農家が農薬を使わずに育てた米で造られる。",
            zh:"由一位從金融業回到酒藏的當主釀造；其高階酒款，用的是幾公里外一位名叫松下明弘的農家不施藥所種出的米。" },
          p:[
            { jp:"喜久醉 特別本醸造", g:"thj" },
            { jp:"喜久醉 特別純米", g:"tj" },
            { jp:"喜久醉 松下米50", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"喜久醉 松下米40", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"正雪", r:"Shōsetsu", h:"神沢川酒造場", hr:"Kanzawagawa Shuzōjō", pref:"shizuoka", est:"1912",
          note:{ en:"Founded by foresters and silk farmers who moved to Yui specifically for the water, and named for a local swordsman and schoolmaster who plotted against the shogunate and lost.",
            ja:"山と蚕を業としていた者が、水のためだけに由比へ移って興した蔵である。名は、幕府に謀りごとを企て、敗れたこの地の剣客にして塾頭に由来する。",
            zh:"由原本以林業與養蠶為生的人，單為了水而遷居由比所創立。名字取自當地一位劍客兼塾頭——他謀劃對抗幕府，而後失敗。" },
          p:[
            { jp:"正雪 辛口純米 誉富士", g:"j", rice:"homare", mill:"60%" },
            { jp:"正雪 特別純米 備前雄町", g:"tj", rice:"omachi", mill:"45%" },
            { jp:"正雪 純米大吟醸 天満月", g:"jd", rice:"ginginga", mill:"50%" }
          ] },

        { jp:"初亀", r:"Hatsukame", h:"初亀醸造", hr:"Hatsukame Jōzō", pref:"shizuoka", est:"1636",
          note:{ en:"The oldest brewery still working in Shizuoka, founded below Sunpu castle in 1636 and moved out to Okabe in 1876. It publishes very little about itself, and always has.",
            ja:"静岡でいまも動いている最も古い蔵である。一六三六年、駿府城の下で創業し、一八七六年に岡部へ移った。自らについてはほとんど何も公にせず、昔からそうである。",
            zh:"靜岡至今仍在運作的最古老酒藏，1636 年創業於駿府城下，1876 年遷往岡部。它對自身幾乎不作公開說明，且向來如此。" } },

        { jp:"三千盛", r:"Michisakari", h:"三千盛", hr:"Michisakari", pref:"gifu", est:"",
          note:{ en:"Stayed dry all the way through the postwar decades when the rest of the country was sweetening, which cost it sales at the time and made its name later. Long the house sushi counters reach for.",
            ja:"戦後、国じゅうが甘くなっていった数十年のあいだ、辛口のまま通した。当時は売上を損ない、のちに名をもたらした。鮨の台が長く手を伸ばしてきた蔵である。",
            zh:"戰後全國口味轉甜的那數十年間，它始終維持辛口；當時因此損失銷量，日後卻因此得名。長久以來，這是壽司檯會伸手去拿的一家。" },
          p:[
            { jp:"三千盛 特級酒", g:"nd", mill:"50%",
              d:{ en:"Carries a grade name from the old classification the law abolished.", ja:"法が廃した旧い級別の名を、いまも負っている。", zh:"仍沿用法律早已廢止的舊級別名稱。" } },
            { jp:"三千盛 純米大吟醸", g:"jd" }
          ] },

        { jp:"小左衛門", r:"Kozaemon", h:"中島醸造", hr:"Nakashima Jōzō", pref:"gifu", est:"1702",
          note:{ en:"Turned toward special-designation sake in 1997 after three centuries of ordinary production, and moved to brewing all year round in 2018 so that nothing sits in the warehouse waiting for a season.",
            ja:"三世紀にわたる並の酒造りののち、一九九七年に特定名称酒へ舵を切り、二〇一八年には四季醸造に移った。季節を待って蔵に眠る酒をなくすためである。",
            zh:"在三個世紀的普通酒生產之後，於 1997 年轉向特定名稱酒，並在 2018 年改為四季釀造，讓酒不必在倉裡等待季節。" },
          p:[
            { jp:"小左衛門 瑞ノ盞", g:"jd", rice:["aiyama","yamada"], mill:"40%" },
            { jp:"小左衛門 備前雄町", g:"jg", rice:"omachi", mill:"55%" },
            { jp:"小左衛門 信濃美山錦", g:"tj", rice:"miyama", mill:"55%" },
            { jp:"小左衛門 播州山田錦", g:"j", rice:"yamada", mill:"65%" }
          ] },

        { jp:"射美", r:"Ibi", h:"杉原酒造", hr:"Sugihara Shuzō", pref:"gifu", est:"1892",
          note:{ en:"Describes itself as the smallest brewery in Japan, and brews with a rice variety developed with farmers in its own valley and grown nowhere else. Everything is allocated; almost nothing reaches a shop shelf.",
            ja:"みずから日本一小さな蔵と称し、自らの谷の農家とともに育てた、他所では作られていない品種の米で醸す。すべてが配分であり、店の棚に届くものはほとんどない。",
            zh:"自稱是日本最小的酒藏，以與自家山谷農家共同育成、他處並不種植的米種釀酒。所有酒都採配額，幾乎沒有一瓶會出現在店頭貨架上。" },
          p:[
            { jp:"射美 特別純米", g:"tj", rice:"ibi" },
            { jp:"射美 純米吟醸", g:"jg", rice:"ibi" }
          ] },

/* ============================================================ */
/* 5 — Kinki                                                    */
/* ============================================================ */

        { jp:"天領", r:"Tenryō", h:"天領酒造", hr:"Tenryō Shuzō", pref:"gifu", est:"1680",
          note:{ en:"In Gero, in the Hida mountains, milling its own rice; the name refers to the land the shogunate held directly, which this district was.",
            ja:"飛騨の山中、下呂にあり、米は自ら精白する。名は幕府が直に治めた土地を指す語であり、この地がまさにそれであった。",
            zh:"位於飛驒山中的下呂，自行精米；名字指的是幕府直轄的領地，而此地正是如此。" },
          p:[
            { jp:"天領 特別純米 飛切り", g:"tj", rice:"hidahomare" },
            { jp:"天領 純米吟醸 ひだほまれ", g:"jg", rice:"hidahomare", mill:"50%" },
            { jp:"天領 天禄拝領", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"竹雀", r:"Takesuzume", h:"大塚酒造", hr:"Ōtsuka Shuzō", pref:"gifu", est:"1886",
          note:{ en:"Nearly closed around 1990 and brought back by the sixth generation, who took it to kimoto and yamahai at low polish — a small house that chose the slow road on the way back up.",
            ja:"一九九〇年前後に閉じかけ、六代目が引き戻した。生酛と山廃へ、磨きは浅く。立て直しの道に、あえて遅い方を選んだ小さな蔵である。",
            zh:"1990 年前後幾乎歇業，由第六代把它拉了回來，轉向生酛與山廢、淺磨米——一家小酒藏，在回復的路上刻意選了慢的那一條。" },
          p:[
            { jp:"竹雀 生もと純米 岐阜県産山田錦", g:"j", m:["kimoto"], rice:"yamada", mill:"70%" },
            { jp:"竹雀 山廃純米 雄町70", g:"j", m:["yamahai"], rice:"omachi", mill:"70%" }
          ] },

        { group:{ en:"Kinki", ja:"近畿", zh:"近畿" }, jp:"近畿", id:"g-kinki" },

        { jp:"白鶴", r:"Hakutsuru", h:"白鶴酒造", hr:"Hakutsuru Shuzō", pref:"hyogo", est:"1743",
          note:{ en:"The largest sake producer in Japan by volume, in Nada. Its everyday bottles are in every supermarket in the country; it also keeps a research programme and a restored wooden brewery open to visitors.",
            ja:"灘にある、量で日本最大の清酒の造り手である。日常の瓶は国じゅうのあらゆるスーパーの棚にあり、研究の部門と、公開された復元の木造蔵も併せ持つ。",
            zh:"位於灘，以產量計為日本最大的清酒生產者。其日常瓶裝酒遍佈全國每一家超市；此外也設有研究部門，以及一座對外開放的復原木造酒藏。" },
          p:[
            { jp:"上撰 白鶴", g:"hj",
              d:{ en:"The everyday grade, distributed nationally in bottle, carton and cup.", ja:"日常の等級で、瓶・紙パック・カップで全国に流通する。", zh:"日常等級，以瓶裝、紙盒與杯裝行銷全國。" } },
            { jp:"白鶴 山田錦 サケパック", g:"jos", m:["pack"], rice:"yamada" },
            { jp:"白鶴 大吟醸", g:"dg", mill:"50%" },
            { jp:"白鶴 純米大吟醸", g:"jd", mill:"50%" }
          ] },

        { jp:"菊正宗", r:"Kikumasamune", h:"菊正宗酒造", hr:"Kikumasamune Shuzō", pref:"hyogo", est:"1659",
          note:{ en:"Converted its whole everyday range back to the kimoto starter by 2009 — a large industrial house choosing the slowest traditional method for its cheapest product, which is the opposite of what usually happens.",
            ja:"二〇〇九年までに日常の品揃えをすべて生酛の酒母に戻した。大きな工業の蔵が、最も安い商品にこそ最も手間のかかる古法を選んだわけで、ふつうに起きることの逆である。",
            zh:"至 2009 年止，已把日常產品線全數改回生酛酒母——一家大型工業酒藏，偏偏為最便宜的商品選用最費工的古法，與通常會發生的事情正好相反。" },
          p:[
            { jp:"上撰 生酛 本醸造", g:"hj", m:["kimoto"],
              d:{ en:"The dry everyday bottle the house is known for, sold nationally.", ja:"この蔵の名を負う日常の辛口の一本で、全国で売られる。", zh:"這家酒藏賴以成名的日常辛口酒，全國販售。" } },
            { jp:"上撰 生酛純米", g:"j", m:["kimoto"] },
            { jp:"嘉宝 純米大吟醸", g:"jd", rice:"yamadaA", mill:"38%" }
          ] },

        { jp:"大関", r:"Ōzeki", h:"大関", hr:"Ōzeki", pref:"hyogo", est:"1711",
          note:{ en:"Invented the one-cup format in 1964, launching it on the opening day of the Tokyo Olympics. A single-serve glass with a printed lid turned sake into something you could buy at a station kiosk.",
            ja:"一九六四年、東京の五輪の開会の日にワンカップを世に出した。印刷された蓋の付いた一人分のガラスが、日本酒を駅の売店で買えるものに変えた。",
            zh:"1964 年推出杯裝酒，發售日正是東京奧運開幕當天。一只印著蓋膜、一人份量的玻璃杯，讓清酒變成可以在車站小賣店買到的東西。" },
          p:[
            { jp:"ワンカップ大関", g:"f", m:["cup"],
              d:{ en:"The original cup sake, on sale continuously since 1964.", ja:"最初のカップ酒であり、一九六四年から途切れず売られている。", zh:"最初的杯裝酒，自 1964 年起持續販售至今。" } },
            { jp:"大関 純米大吟醸", g:"jd" },
            { jp:"十段仕込 純米大吟醸", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"日本盛", r:"Nihonsakari", h:"日本盛", hr:"Nihonsakari", pref:"hyogo", est:"1889",
          note:{ en:"A Nishinomiya house that put sake into PET bottles in 1980 — light, unbreakable, resealable, and resented by purists ever since, though it is why sake travels on trains.",
            ja:"西宮の蔵で、一九八〇年に日本酒をペットボトルに入れた。軽く、割れず、栓を締め直せるもので、以来ずっと純粋主義者に嫌われているが、酒が列車で運ばれるのはこれゆえである。",
            zh:"西宮的一家酒藏，1980 年把清酒裝進寶特瓶——輕、不碎、可重新旋緊，此後一直為純粹主義者所不喜，但清酒能被帶上火車，正因如此。" },
          p:[
            { jp:"日本盛 上撰", g:"jos" },
            { jp:"サカリカップ", g:"jos", m:["cup"] },
            { jp:"日本盛 山田錦 生酒", g:"jd", m:["nama"], rice:"yamada" }
          ] },

        { jp:"沢の鶴", r:"Sawanotsuru", h:"沢の鶴", hr:"Sawanotsuru", pref:"hyogo", est:"1717",
          note:{ en:"Began as a rice merchant and brewed as a sideline, which is the usual Nada story. It opened Japan's first public brewery museum in 1978; the building was destroyed in the 1995 earthquake and rebuilt.",
            ja:"米屋として始まり、副業として醸した。灘ではよくある成り立ちである。一九七八年に日本で最初の一般公開の酒蔵資料館を開いたが、建物は一九九五年の地震で倒れ、建て直された。",
            zh:"起家於米商，釀酒是副業——這是灘地典型的來歷。1978 年開設了日本第一座對外公開的酒藏資料館；該建築在 1995 年地震中倒塌，其後重建。" },
          p:[
            { jp:"沢の鶴 上撰", g:"hj", mill:"70%" },
            { jp:"沢の鶴 特別純米 山田錦", g:"tj", rice:"yamada" },
            { jp:"瑞兆 純米大吟醸", g:"jd" }
          ] },

        { jp:"剣菱", r:"Kenbishi", h:"剣菱酒造", hr:"Kenbishi Shuzō", pref:"hyogo", est:"1505",
          note:{ en:"Prints neither polishing ratio nor rice variety nor designation, on the stated grounds that it changes the milling every year in order to keep the taste the same. The mark has been in continuous use for five centuries.",
            ja:"精米歩合も原料米も特定名称も刷らない。味を同じに保つために毎年磨きを変えるから、というのがその言い分である。この印は五世紀にわたって使われつづけている。",
            zh:"不印精米步合、不印原料米、不印特定名稱，理由是：為了讓味道維持不變，它每年都在調整磨米程度。這個標記已連續使用五個世紀。" },
          p:[
            { jp:"黒松剣菱", g:"nd",
              d:{ en:"The main line, and the bottle most people mean by the name.", ja:"中心の系列であり、人がこの名で思い浮かべる一本である。", zh:"主力產品線，也是多數人提到這個名字時所指的那一瓶。" } },
            { jp:"瑞穂黒松剣菱", g:"nd" },
            { jp:"瑞祥黒松剣菱", g:"nd" }
          ] },

        { jp:"福寿", r:"Fukuju", h:"神戸酒心館", hr:"Kōbe Shushinkan", pref:"hyogo", est:"1751",
          note:{ en:"A small Nada house by the standards of its neighbours, and the one poured at the Nobel banquet in Stockholm — which is how a great many people outside Japan first met the name.",
            ja:"隣り合う蔵の尺度で言えば小さな灘の蔵であり、ストックホルムのノーベルの晩餐で供される酒でもある。日本の外の多くの人が、この名を最初に知ったのはそこからである。",
            zh:"以其鄰居的尺度而言，這是一家小型的灘地酒藏，也是在斯德哥爾摩諾貝爾晚宴上斟出的那一款——日本以外的許多人，正是由此初識這個名字。" },
          p:[
            { jp:"福寿 純米吟醸", g:"jg",
              d:{ en:"The bottle served at the Nobel Prize banquet.", ja:"ノーベル賞の晩餐で供される一本。", zh:"諾貝爾獎晚宴上所供應的那一瓶。" } },
            { jp:"福寿 超特選 純米酒", g:"j", rice:"yamada" },
            { jp:"福寿 大吟醸", g:"dg" }
          ] },

        { jp:"龍力", r:"Tatsuriki", h:"本田商店", hr:"Honda Shōten", pref:"hyogo", est:"1921",
          note:{ en:"Brews only with brewing-grade rice since 1992, almost all of it Yamada Nishiki from the Special-A villages, and bottles separate cuvées from separate districts — an argument that the ground the rice grew on is tastable.",
            ja:"一九九二年以来、酒造好適米のみで醸す。そのほとんどが特A地区の山田錦であり、地区ごとに分けて瓶詰めする。米の育った土地は味に出るという主張である。",
            zh:"自 1992 年起只以酒造好適米釀造，其中絕大多數是特 A 地區的山田錦，並依地區分別裝瓶——這是一種主張：米生長的土地，是嚐得出來的。" },
          p:[
            { jp:"米のささやき YK-35", g:"dg", rice:"yamadaA", mill:"35%" },
            { jp:"龍力 秋津", g:"jd", rice:"yamadaA", mill:"35%" },
            { jp:"秋津雲海 特別純米", g:"tj", m:["kimoto"], rice:"yamada", mill:"65%" },
            { jp:"龍力 テロワール", g:"tj", rice:"yamada", mill:"65%",
              d:{ en:"One bottling per district — Yashiro, Tōjō, Yokawa.", ja:"地区ごとに一本——社、東条、吉川。", zh:"每個地區各一瓶——社、東條、吉川。" } }
          ] },

        { jp:"奥播磨", r:"Okuharima", h:"下村酒造店", hr:"Shimomura Shuzōten", pref:"hyogo", est:"1884",
          note:{ en:"Brews junmai only, refuses most mechanisation on the stated principle that no skill exceeds the hand, and sells through specialist retailers rather than into general distribution.",
            ja:"純米のみを醸し、手に勝る技はないという家訓を掲げて機械化の多くを拒み、一般の流通ではなく特約店を通して売る。",
            zh:"只釀純米，並以「沒有任何技巧勝過手」的家訓為由拒絕大部分機械化，且透過特約店而非一般通路販售。" },
          p:[
            { jp:"奥播磨 田", g:"jd", rice:"yamada", mill:"38%" },
            { jp:"奥播磨 袋しぼり", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"奥播磨 御神酒 雫", g:"jd", m:["yamahai","shizuku"], rice:"yumenishiki", mill:"50%" },
            { jp:"奥播磨 純米", g:"j", rice:"yumenishiki", mill:"60%" }
          ] },

        { jp:"富久錦", r:"Fukunishiki", h:"富久錦", hr:"Fukunishiki", pref:"hyogo", est:"1839",
          note:{ en:"Declared in 1987 that it would brew junmai only, completed the change by 1992, and since 1996 has used rice grown in its own town of Kasai and nowhere else.",
            ja:"一九八七年に純米のみを醸すと宣し、一九九二年に切り替えを終えた。一九九六年からは、米は加西の町のものだけを使っている。",
            zh:"1987 年宣告只釀純米，1992 年完成轉換；自 1996 年起，用米僅限於自家所在的加西町，別處一概不用。" },
          p:[
            { jp:"純米 富久錦", g:"j", rice:"local" },
            { jp:"特別純米 山田錦", g:"tj", rice:"yamada" },
            { jp:"播州古式 生酛純米", g:"j", m:["kimoto"] },
            { jp:"瑞福 純米大吟醸", g:"jd" }
          ] },

        { jp:"白鷹", r:"Hakutaka", h:"白鷹", hr:"Hakutaka", pref:"hyogo", est:"1862",
          note:{ en:"Has supplied the sake offered daily at Ise Jingū since 1924; the house's own accounts of how the appointment came about differ, citing either a priest with ties to both Ise and Hirota, or the enthronement banquet of the Taishō emperor.",
            ja:"一九二四年より、伊勢神宮に日々供えられる御料酒を納めている。その御用がいかにして定まったかについては蔵自身の説明も分かれ、伊勢と広田の双方に縁のある神職を挙げるものもあれば、大正の大嘗の宴を挙げるものもある。",
            zh:"自 1924 年起供應伊勢神宮每日奉獻的御料酒；至於這項任命如何而來，連酒藏自身的說法也不一致——有的提到一位與伊勢、廣田兩邊都有淵源的神職，有的則提到大正天皇的即位大典宴席。" },
          p:[
            { jp:"金松白鷹", g:"tj", rice:"yamada", mill:"70%" },
            { jp:"黒松白鷹 生もと本醸造", g:"hj", m:["kimoto"] },
            { jp:"極上白鷹 大吟醸純米", g:"jd", rice:"yamadaA", mill:"50%" }
          ] },

        { jp:"竹泉", r:"Chikusen", h:"田治米", hr:"Tajime", pref:"hyogo", est:"1702",
          note:{ en:"Three centuries in Asago, in the north of the prefecture where the mist sits in the valley, brewing with rice grown in the same district.",
            ja:"県の北、谷に霧の沈む朝来で三世紀を重ねた蔵であり、同じ地域で育った米で仕込む。",
            zh:"在縣境北部、霧氣沉在谷中的朝來，已歷三個世紀；用的是同一地區所產的米。" },
          p:[
            { jp:"竹泉 醇辛 純米", g:"j", rice:["yamada","gohyaku"], mill:"60%" },
            { jp:"竹泉 純", g:"jg", rice:"gohyaku", mill:"55%" },
            { jp:"竹泉 幸の鳥", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"播州一献", r:"Banshū Ikkon", h:"山陽盃酒造", hr:"Sanyōhai Shuzō", pref:"hyogo", est:"1837",
          note:{ en:"Brews only with Hyōgo rice — the prefecture that supplies half the country's Yamada Nishiki keeping some of it at home — including the local Yumenishiki and Aiyama.",
            ja:"兵庫の米だけで醸す。国じゅうの山田錦の半ばを供給する県が、その一部を自らの手元に残しているわけである。地元の夢錦や愛山も用いる。",
            zh:"只以兵庫的米釀造——這個供應全國半數山田錦的縣份，把其中一部分留在了自己手上；所用也包括在地的夢錦與愛山。" },
          p:[
            { jp:"播州一献 楓の雫", g:"j", rice:"yumenishiki", mill:"60%" },
            { jp:"播州一献 山廃", g:"j", m:["yamahai"], rice:"aiyama", mill:"65%" },
            { jp:"播州一献 山田錦35", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"小鼓", r:"Kotsuzumi", h:"西山酒造場", hr:"Nishiyama Shuzōjō", pref:"hyogo", est:"1849",
          note:{ en:"Founded by brewers of the Tanba guild, one of the three great tōji schools, in the hills the guild came from. Its 1896 brewhouse was restored after the floods of 2014.",
            ja:"三大杜氏の一つ、丹波杜氏の造り手が、その組合の出た山あいで興した蔵である。一八九六年の蔵は、二〇一四年の水害ののちに修復された。",
            zh:"由三大杜氏流派之一的丹波杜氏的釀造者，在該流派所出的山間所創。其建於 1896 年的釀造場，在 2014 年水災之後修復。" },
          p:[
            { jp:"小鼓 純米吟醸", g:"jg", mill:"58%" },
            { jp:"路上有花 桃花", g:"jd", rice:"kitanishiki", mill:"50%" },
            { jp:"路上有花 黒牡丹", g:"jd", rice:"tajimagoriki", mill:"50%" }
          ] },

        { jp:"月桂冠", r:"Gekkeikan", h:"月桂冠", hr:"Gekkeikan", pref:"kyoto", est:"1637",
          note:{ en:"The Fushimi giant, and the industry's most consequential laboratory: pasteurisation studies, preservative-free bottling in 1911, and a great deal of what is known about kōji enzymes came out of this company.",
            ja:"伏見の巨人であり、業界でもっとも影響の大きい研究所でもある。火入れの研究、一九一一年の防腐剤なしの瓶詰、そして麹の酵素について知られていることの多くが、この会社から出た。",
            zh:"伏見的巨人，也是業界影響最深遠的研究單位：火入研究、1911 年的無防腐劑裝瓶，以及關於麴酵素的大部分知識，都出自這家公司。" },
          p:[
            { jp:"月桂冠 上撰", g:"jos",
              d:{ en:"The everyday grade, in bottle, carton and cup.", ja:"日常の等級で、瓶・紙パック・カップで出る。", zh:"日常等級，有瓶裝、紙盒與杯裝。" } },
            { jp:"月桂冠 佳撰", g:"kas" },
            { jp:"月桂冠 山田錦純米", g:"j", rice:"yamada" },
            { jp:"月桂冠 純米大吟醸", g:"jd" }
          ] },

        { jp:"松竹梅", r:"Shōchikubai", h:"宝酒造", hr:"Takara Shuzō", pref:"kyoto", est:"1842",
          note:{ en:"Pine, bamboo and plum — the three auspicious plants — and one of the two or three best-known everyday sake names in Japan, sold at every grade from carton to boxed daiginjō.",
            ja:"松と竹と梅、三つの吉祥の草木の名である。日本でもっともよく知られた日常の酒の名の二つ三つのうちに入り、紙パックから箱入りの大吟醸まで、あらゆる等級で売られる。",
            zh:"松、竹、梅——三種吉祥的草木——是日本最廣為人知的日常清酒名字之二三，從紙盒裝到盒裝大吟釀，各個等級皆有販售。" },
          p:[
            { jp:"佳撰 松竹梅", g:"kas" },
            { jp:"上撰 松竹梅", g:"jos",
              d:{ en:"Brewed with a yeast resident in the company's own brewery.", ja:"自社の蔵に棲む酵母で醸す。", zh:"以自家酒藏中常駐的酵母釀造。" } },
            { jp:"松竹梅 天", g:"nd", m:["pack"] },
            { jp:"特撰 松竹梅 大吟醸", g:"dg", mill:"50%" }
          ] },

        { jp:"黄桜", r:"Kizakura", h:"黄桜", hr:"Kizakura", pref:"kyoto", est:"1925",
          note:{ en:"The Fushimi house that discovered television. Its kappa mascot — a river imp drawn by a cartoonist — ran in advertisements for decades and is better known in Japan than most brand marks in any category.",
            ja:"テレビを見つけた伏見の蔵である。漫画家の描いた河童の看板は何十年も広告に流れ、日本ではどの分野の商標よりよく知られている部類に入る。",
            zh:"發現了電視的伏見酒藏。由漫畫家繪製的河童吉祥物在廣告中出現了數十年，在日本比多數行業的商標都更為人所知。" },
          p:[
            { jp:"かっぱ缶 純米吟醸", g:"jg", m:["cup"] },
            { jp:"黄桜 山廃 特別純米 山田錦", g:"tj", m:["yamahai"], rice:"yamada", mill:"65%" }
          ] },

        { jp:"玉乃光", r:"Tamanohikari", h:"玉乃光酒造", hr:"Tamanohikari Shuzō", pref:"kyoto", est:"1673",
          note:{ en:"Went back to all-rice sake in 1964, a decade before anyone else thought it commercially sane, and raised its whole junmai range to ginjō milling in 1980. It brews no futsūshu and adds no alcohol at all.",
            ja:"一九六四年、ほかの誰もそれを商いとして正気とは思わなかった十年前に、米だけの酒に戻った。一九八〇年には純米の品揃え全体を吟醸の磨きに上げた。普通酒は造らず、アルコールは一滴も加えない。",
            zh:"1964 年就回到全以米釀的酒，比任何人認為這在商業上說得通還早了十年；1980 年更把整條純米產品線提升到吟釀的磨米程度。它不釀普通酒，也完全不添加酒精。" },
          p:[
            { jp:"玉乃光 酒魂", g:"jg",
              d:{ en:"The house's standing everyday bottle, at ginjō grade.", ja:"蔵の定番の日常の一本であり、等級は吟醸である。", zh:"酒藏的常態日常酒款，等級為吟釀。" } },
            { jp:"玉乃光 播州久米産山田錦", g:"jd", rice:"yamadaA", mill:"39%" },
            { jp:"有機 GREEN 山田錦", g:"jg", rice:"yamada" }
          ] },

        { jp:"英勲", r:"Eikun", h:"齊藤酒造", hr:"Saitō Shuzō", pref:"kyoto", est:"1895",
          note:{ en:"A Fushimi house working in the soft-water manner the district is known for, and the most persistent champion of Iwai, the sake rice bred in Kyoto and nearly lost before the prefecture revived it.",
            ja:"伏見の名を負う軟水の造りで仕事をする蔵であり、京都で育成され、府が復活させるまで失われかけていた酒米、祝のもっとも粘り強い擁護者である。",
            zh:"以伏見著稱的軟水釀法作業的酒藏，也是京都育成、一度幾乎失傳、後由京都府復育的酒米「祝」最堅持的推廣者。" },
          p:[
            { jp:"英勲 京の珀", g:"hj" },
            { jp:"英勲 大鷹", g:"tj" },
            { jp:"井筒屋伊兵衛 祝 三割五分", g:"jd", rice:"iwai", mill:"35%" },
            { jp:"英勲 古都千年", g:"jg" }
          ] },

        { jp:"玉川", r:"Tamagawa", h:"木下酒造", hr:"Kinoshita Shuzō", pref:"kyoto", est:"1842",
          note:{ en:"Its tōji since 2007 is Philip Harper, who qualified as a Nanbu tōji in 2001 and is the first person from outside Japan to hold a brewery's top post. He was given full charge on arrival and began at once to ferment without added yeast.",
            ja:"二〇〇七年からの杜氏はフィリップ・ハーパーであり、二〇〇一年に南部杜氏の資格を得た、日本の外から来て蔵の頭に立った最初の人である。着任と同時に造りの全権を与えられ、ただちに酵母を添加しない仕込みを始めた。",
            zh:"自 2007 年起的杜氏是 Philip Harper——他於 2001 年取得南部杜氏資格，是第一位來自日本以外、擔任酒藏最高職位的人。上任之初即獲授釀造全權，並立刻開始不添加酵母的釀製。" },
          p:[
            { jp:"玉川 自然仕込 山廃純米 白ラベル", g:"j", m:["yamahai","muroka","nama","genshu"], rice:"kitanishiki", mill:"66%",
              d:{ en:"Fermented on whatever yeast lives in the building.", ja:"蔵に棲む酵母だけで発酵させる。", zh:"僅靠棲於藏中的酵母發酵。" } },
            { jp:"玉川 Ice Breaker", g:"jg", m:["nama","genshu"], rice:"nihonbare", mill:"60%" },
            { jp:"玉川 特別純米酒", g:"tj" }
          ] },

        { jp:"澤屋まつもと", r:"Sawaya Matsumoto", h:"松本酒造", hr:"Matsumoto Shuzō", pref:"kyoto", est:"1791",
          note:{ en:"Moved to its present ground on the Shin-Takase river in 1922; the Taishō brewhouse, the brick store and the chimney were listed as industrial heritage in 2007 and are among the most photographed buildings in Fushimi.",
            ja:"一九二二年に新高瀬川沿いの現在の地へ移った。大正期の仕込み蔵、煉瓦の倉、そして煙突は二〇〇七年に近代化産業遺産に認定され、伏見でもっとも写真に撮られる建物の一つである。",
            zh:"1922 年遷至新高瀨川畔的現址；其大正時期的釀造場、磚造倉庫與煙囪於 2007 年獲認定為近代化產業遺產，也是伏見最常被拍攝的建築之一。" },
          p:[
            { jp:"澤屋まつもと 純米", g:"j", rice:"gohyaku", mill:"65%" },
            { jp:"澤屋まつもと 守破離", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"澤屋まつもと Ultra", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"蒼空", r:"Sōkū", h:"藤岡酒造", hr:"Fujioka Shuzō", pref:"kyoto", est:"1902",
          note:{ en:"Stopped brewing altogether in the 1990s and started again in 2002 at a very small scale, junmai only, with a glass-walled brewhouse a visitor can sit beside with a glass in hand.",
            ja:"一九九〇年代にいったん造りを止め、二〇〇二年にごく小さな規模で再び始めた。純米のみで、硝子越しに仕込みを見ながら一杯を傾けられる蔵である。",
            zh:"1990 年代曾完全停釀，2002 年以極小的規模重新開始；只釀純米，並設有一面玻璃牆，訪客可以端著一杯酒坐在旁邊看著釀造。" },
          p:[
            { jp:"蒼空 純米 美山錦", g:"j", rice:"miyama", mill:"60%" },
            { jp:"蒼空 純米大吟醸 山田錦", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"蒼空 純米大吟醸 愛山", g:"jd", rice:"aiyama", mill:"50%" }
          ] },

        { jp:"伊根満開", r:"Ine Mankai", h:"向井酒造", hr:"Mukai Shuzō", pref:"kyoto", est:"1754",
          note:{ en:"On the boat-house shore at Ine, with Kyoto's first woman tōji at its head since 1999. Its red sake is brewed from an heirloom purple-black rice barely milled at all, and came out of her university research.",
            ja:"伊根の舟屋の岸にあり、一九九九年より京都で最初の女性杜氏が頭に立つ。その赤い酒は、ほとんど磨かない古代の紫黒米から醸され、彼女の大学での研究から生まれた。",
            zh:"位於伊根舟屋的岸邊，自 1999 年起由京都第一位女性杜氏主持。其紅色的酒以幾乎不磨的古代紫黑米釀成，源自她在大學時的研究。" },
          p:[
            { jp:"伊根満開", g:"j", rice:"shikokumai", mill:"97%" },
            { jp:"伊根満開 生にごり", g:"j", m:["nama","nigori"], mill:"97%" }
          ] },

        { jp:"招德", r:"Shōtoku", h:"招德酒造", hr:"Shōtoku Shuzō", pref:"kyoto", est:"1645",
          note:{ en:"Brewing in Kyoto since 1645, merged with three other Fushimi houses under wartime consolidation in 1943, and has brewed junmai only since the 1960s — early, for that decision.",
            ja:"一六四五年から京で醸し、一九四三年の企業整備で伏見の三蔵と一つになった。純米のみを造るようになったのは一九六〇年代で、この決断としては早い。",
            zh:"自 1645 年起在京都釀造，1943 年因戰時企業整併而與伏見另外三家酒藏合為一家；自 1960 年代起只釀純米——就這個決定而言，算是很早。" },
          p:[
            { jp:"招德 純米酒", g:"j", mill:"70%" },
            { jp:"招德 純米吟醸 祝", g:"jg", rice:"iwai", mill:"60%" },
            { jp:"招德 純米大吟醸", g:"jd", rice:"yamada", mill:"35%" }
          ] },

        { jp:"秋鹿", r:"Akishika", h:"秋鹿酒造", hr:"Akishika Shuzō", pref:"osaka", est:"1886",
          note:{ en:"Farms its own Yamada Nishiki on the hills of northern Osaka and brews junmai only, with low-protein rice and a deliberate preference for sake that gains rather than loses over years in the bottle.",
            ja:"大阪の北の丘で自ら山田錦を育て、純米のみを醸す。蛋白の少ない米を用い、瓶の中で年を経て失うのではなく得ていく酒を、はっきりと好む。",
            zh:"在大阪北部丘陵自種山田錦，且只釀純米；使用低蛋白的米，並明確偏好那種在瓶中隨年份增益、而非衰減的酒。" },
          p:[
            { jp:"秋鹿 山廃純米 山田錦", g:"j", m:["yamahai"], rice:"yamada", mill:"70%" },
            { jp:"秋鹿 千秋", g:"j" }
          ] },

        { jp:"天野酒", r:"Amanozake", h:"西條", hr:"Saijō", pref:"osaka", est:"1718",
          note:{ en:"Revived in 1946 a name that belonged to a medieval temple brewery at Kongō-ji — one of the sōbo-shu houses where much of the technique of modern sake was first written down.",
            ja:"一九四六年、金剛寺の中世の寺院醸造に属した名を復活させた。現代の酒の技の多くが最初に書き記された僧坊酒の蔵の一つである。",
            zh:"1946 年復興了一個屬於金剛寺中世紀寺院釀造的名字——那是最早把現代清酒技術記載下來的僧坊酒酒藏之一。" },
          p:[
            { jp:"天野酒 本醸造", g:"hj" },
            { jp:"天野酒 かもなん", g:"f" },
            { jp:"天野酒 天游", g:"jd", rice:"yamadaA" },
            { jp:"天野酒 大吟醸", g:"dg", rice:"yamadaA" }
          ] },

        { jp:"呉春", r:"Goshun", h:"呉春", hr:"Goshun", pref:"osaka", est:"1701",
          note:{ en:"One of two breweries left in Ikeda, which had thirty-eight in the mid-Edo period. It keeps a deliberately short list of bottles, sells locally, and is spoken of with reverence in Osaka and barely known outside it.",
            ja:"江戸の中ごろに三十八あった池田で、いま残る二つの蔵の一つである。瓶の数を意図して少なく保ち、地元に売り、大阪では敬意をもって語られ、外ではほとんど知られていない。",
            zh:"江戶中期曾有三十八家酒藏的池田，如今只剩兩家，這是其中之一。它刻意把品項維持得極少，在地販售；在大阪為人敬重地談論，出了大阪則幾乎無人知曉。" },
          p:[
            { jp:"呉春 池田酒", g:"f", rice:"gohyaku", mill:"68%" },
            { jp:"呉春 本丸", g:"hj", rice:["asahi","hattan"], mill:"65%" },
            { jp:"呉春 特吟", g:"nd", rice:"omachiAk", mill:"50%" },
            { jp:"呉春 大吟醸", g:"dg", rice:"omachiAk", mill:"40%" }
          ] },

        { jp:"風の森", r:"Kaze no Mori", h:"油長酒造", hr:"Yuchō Shuzō", pref:"nara", est:"1719",
          note:{ en:"Sells almost everything unpasteurised, undiluted and unfiltered, and names each bottle by rice and polishing ratio in a single code. The house was an oil merchant before it was a brewery, which is what its name means.",
            ja:"ほとんどすべてを生で、加水せず、濾さずに売り、一本ごとの名を米と精米歩合の符号で付ける。蔵はもと油の商人であり、それが屋号の意味である。",
            zh:"幾乎所有酒都以不火入、不加水、不過濾的狀態出貨，每一瓶的名字都由米種與精米步合組成一組編號。這家酒藏原本是油商，其字號正是此意。" },
          p:[
            { jp:"風の森 秋津穂 657", g:"j", m:["muroka","nama","genshu"], rice:"akitsuho", mill:"65%" },
            { jp:"風の森 露葉風 507", g:"jg", m:["muroka","nama","genshu"], rice:"tsuyuha", mill:"50%" },
            { jp:"風の森 山田錦 807", g:"j", m:["muroka","nama","genshu"], rice:"yamada", mill:"80%" }
          ] },

        { jp:"春鹿", r:"Harushika", h:"今西清兵衛商店", hr:"Imanishi Seibee Shōten", pref:"nara", est:"1884",
          note:{ en:"In Naramachi, a few streets from the deer park, and named for them: the Kasuga deities are said to have arrived riding a deer. Exports to more than a dozen countries and is best known abroad for its very dry junmai.",
            ja:"奈良町の、鹿の公園から数筋の場所にあり、その鹿にちなむ名である。春日の神は鹿に乗って来たとされる。十を超える国へ輸出し、外ではとりわけ超辛口の純米で知られる。",
            zh:"位於奈良町，距鹿苑數條街，名字正取自那些鹿：相傳春日之神乘鹿而來。外銷十餘國，在海外尤以其超辛口純米聞名。" },
          p:[
            { jp:"春鹿 純米大吟醸", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"春鹿 超辛口", g:"j" },
            { jp:"春鹿 純米吟醸 生酒", g:"jg", m:["nama"] }
          ] },

        { jp:"篠峯", r:"Shinomine", h:"千代酒造", hr:"Chiyo Shuzō", pref:"nara", est:"1873",
          note:{ en:"Runs two labels from Gose, and works through an unusually wide bench of heirloom rice varieties at polishing ratios from the very fine to the deliberately coarse, so that the grain stays legible.",
            ja:"御所から二つの銘柄を出し、古い品種の米を異例に幅広く扱う。精米歩合はごく細かいものから、あえて粗いものまで及び、米そのものが読み取れるようにしてある。",
            zh:"自御所推出兩個品牌，所用的古老米種廣得異乎尋常；精米步合從極細到刻意粗磨都有，好讓米本身仍然讀得出來。" },
          p:[
            { jp:"篠峯 純米超辛", g:"j", rice:"yamada" },
            { jp:"篠峯 凛々 純米吟醸", g:"jg", rice:"omachi" },
            { jp:"篠峯 田圃ラベル 山田錦", g:"j", rice:"yamada", mill:"77%" }
          ] },

        { jp:"睡龍", r:"Suiryū", h:"久保本家酒造", hr:"Kubo Honke Shuzō", pref:"nara", est:"",
          note:{ en:"Brews kimoto junmai and then leaves it alone for years before selling it, on the argument that a kimoto is not finished when it is pressed. Its companion label is an unfiltered cloudy sake made the same way.",
            ja:"生酛の純米を醸し、搾った時点では生酛は仕上がっていないという考えから、売るまでに何年も置く。対になる銘柄は、同じ造りの無濾過の濁り酒である。",
            zh:"釀造生酛純米，並在出售前擱置數年——理由是：生酛在壓榨的那一刻並未完成。與之成對的品牌，是以同樣做法釀成的無濾過濁酒。" },
          p:[
            { jp:"睡龍 特別純米", g:"tj", rice:["gohyaku","nihonbare"], mill:"60 / 55%" },
            { jp:"睡龍 熟成生酛", g:"j", m:["kimoto","aged"], rice:["yamada","nihonbare"], mill:"65 / 60%" }
          ] },

        { jp:"大倉", r:"Ōkura", h:"大倉本家", hr:"Ōkura Honke", pref:"nara", est:"",
          note:{ en:"Works in yamahai and in mizumoto, the older Nara starter, with Hinohikari the house grows itself, and sells a cloudy doburoku-style sake alongside the clear range.",
            ja:"山廃と、奈良のより古い酒母である水酛で仕事をし、米は自ら育てたひのひかりを用いる。澄んだ酒と並んで、濁った酒も売る。",
            zh:"以山廢與奈良更古老的酒母「水酛」作業，用米是自家栽培的越光系品種日之光；在清澈的酒之外，也販售濁酒。" },
          p:[
            { jp:"大倉 山廃純米 陽の光", g:"j", m:["yamahai"], rice:"hinohikari", mill:"70%" },
            { jp:"大倉 特別純米", g:"tj" }
          ] },

        { jp:"梅乃宿", r:"Umenoyado", h:"梅乃宿酒造", hr:"Umenoyado Shuzō", pref:"nara", est:"1893",
          note:{ en:"Known at home as much for its fruit liqueurs as for its sake, which is a route more Nara houses have taken than the trade likes to admit, and it sells abroad on both.",
            ja:"国内では酒と同じくらい果実の酒で知られている。業界が認めたがる以上に多くの奈良の蔵が採ってきた道であり、この蔵は外へも両方で売っている。",
            zh:"在國內，它因果實利口酒而聞名的程度不亞於清酒——這是比業界願意承認的更多奈良酒藏所走的路；而它向海外販售的，也是兩者兼有。" },
          p:[
            { jp:"梅乃宿 純米酒", g:"j", mill:"70%" },
            { jp:"梅乃宿 純米 雄町90", g:"j", rice:"omachi", mill:"90%" },
            { jp:"梅乃宿 純米大吟醸 山田錦", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"七本鎗", r:"Shichihonyari", h:"冨田酒造", hr:"Tomita Shuzō", pref:"shiga", est:"1534",
          note:{ en:"Among the five oldest brewing companies in Japan, named for the seven spearmen of a battle fought nearby in 1583. Its main building, of 1744, is a registered cultural property.",
            ja:"日本で最も古い五つの醸造会社のうちに入る。一五八三年、近くで戦われた合戦の七人の槍にちなむ名である。一七四四年の主屋は登録有形文化財である。",
            zh:"名列日本最古老的五家釀造公司之一，名字取自 1583 年在附近所打的一場戰役中的七名槍手。其建於 1744 年的主屋是登錄有形文化財。" },
          p:[
            { jp:"七本鎗 純米大吟醸 山田錦", g:"jd", rice:"yamada", mill:"35%" },
            { jp:"七本鎗 純米 玉栄", g:"j", rice:"tamasakae" },
            { jp:"七本鎗 純米 吟吹雪", g:"j", rice:"ginfubuki" }
          ] },

        { jp:"松の司", r:"Matsu no Tsukasa", h:"松瀬酒造", hr:"Matsuse Shuzō", pref:"shiga", est:"1860",
          note:{ en:"Built entirely on Yamada Nishiki grown in its own town of Ryūō, including an organically farmed line, and bottles the same rice at ratios from thirty-five to sixty-five so the milling can be compared directly.",
            ja:"すべてを、自らの町である竜王で穫れた山田錦の上に築いており、有機栽培の系列も持つ。同じ米を三十五から六十五までの歩合で瓶詰めし、磨きの違いをそのまま比べられるようにしてある。",
            zh:"整家酒藏都建立在自家所在的龍王町所產山田錦之上，並設有有機栽培的系列；同一種米以三十五到六十五的步合分別裝瓶，好讓磨米程度可以直接相互比較。" },
          p:[
            { jp:"松の司 竜王山田錦", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"松の司 AZOLLA 35", g:"jd", rice:"yamada", mill:"35%",
              d:{ en:"From fields farmed with azolla instead of herbicide.", ja:"除草剤の代わりに浮草を用いた田から。", zh:"來自以滿江紅取代除草劑的田區。" } },
            { jp:"松の司 純米吟醸", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"松の司 純米酒", g:"j", rice:"local", mill:"65%" }
          ] },

        { jp:"喜楽長", r:"Kirakuchō", h:"喜多酒造", hr:"Kita Shuzō", pref:"shiga", est:"1820",
          note:{ en:"On the Kōtō plain east of the lake, with a name chosen to wish the drinker joy and long life. A steady gold medallist at the national appraisal through the first two decades of this century.",
            ja:"湖の東、湖東の平野にあり、飲む人の喜びと長寿を願って選ばれた名を負う。今世紀の最初の二十年を通じて、全国新酒鑑評会で堅実に金賞を重ねてきた。",
            zh:"位於湖東平原，名字是為祝願飲者喜樂長壽而取。在本世紀最初的二十年間，於全國新酒鑑評會上穩定地累積金賞。" },
          p:[
            { jp:"喜楽長 辛口純米酒", g:"j" },
            { jp:"喜楽長 辛口純米吟醸", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"喜楽長 敬いし", g:"dg" }
          ] },

        { jp:"不老泉", r:"Furōsen", h:"上原酒造", hr:"Uehara Shuzō", pref:"shiga", est:"1862",
          note:{ en:"Everything is yamahai, the yeast is whatever settles in the room, and the pressing is done over three days in a wooden box under a counterweighted beam — the slowest surviving method, kept because it is gentler.",
            ja:"すべてが山廃であり、酵母は蔵に舞い降りたものに任せ、搾りは三日かけて木槽を天秤で押す。現存する最も遅い方法であり、より穏やかであるがゆえに守られている。",
            zh:"一切皆為山廢，酵母交給落在藏內的野生菌株，壓榨則以天秤壓木槽、耗時三日完成——那是現存最慢的方法，之所以保留，是因為它更溫柔。" },
          p:[
            { jp:"不老泉 山廃 純米吟醸 中汲み", g:"jg", m:["yamahai"], rice:"yamada", mill:"55%" },
            { jp:"不老泉 山廃 純米大吟醸 木桶仕込", g:"jd", m:["yamahai"], rice:"tamasakae", mill:"55%" }
          ] },

        { jp:"黒牛", r:"Kuroushi", h:"名手酒造店", hr:"Nate Shuzōten", pref:"wakayama", est:"1866",
          note:{ en:"In Kainan, with its own milling floor on site, and a name taken from a place that appears in the eighth-century Man'yōshū — one of the oldest attestations any brand can claim.",
            ja:"海南にあり、精米の場を自らの敷地に持つ。名は八世紀の万葉集に現れる地名から採られており、銘柄が主張しうる最も古い典拠の一つである。",
            zh:"位於海南，自家腹地內設有精米場；名字取自八世紀《萬葉集》中出現的地名——這是任何品牌所能主張的最古老出處之一。" },
          p:[
            { jp:"黒牛 純米吟醸", g:"jg", rice:"yamada" },
            { jp:"しぼりたて黒牛", g:"g", m:["nama"], rice:"brewing" },
            { jp:"黒牛 大吟醸 一掴", g:"dg", rice:"yamada" }
          ] },

        { jp:"紀土", r:"KID", h:"平和酒造", hr:"Heiwa Shuzō", pref:"wakayama", est:"1928",
          note:{ en:"Founded on the grounds of a former temple, and named for the founder's wish — argued before the Diet — to brew in a time of peace. Now one of the most visible young houses in western Japan.",
            ja:"かつての寺の境内に創業し、名は、国会で主張された創業者の願い——平和な時代に醸したいという願いに由来する。いま西日本でもっとも目につく若い蔵の一つである。",
            zh:"創業於一座舊寺的院內，名字源自創辦人曾在國會上陳述的願望——在和平的時代裡釀酒。如今是西日本最受矚目的年輕酒藏之一。" },
          p:[
            { jp:"紀土 山田錦 50", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"紀土 無量山", g:"jd", mill:"25%" }
          ] },

/* ============================================================ */
/* 6 — Chūgoku and Shikoku                                      */
/* ============================================================ */

        { group:{ en:"Chūgoku & Shikoku", ja:"中国・四国", zh:"中國地方與四國" }, jp:"中国・四国", id:"g-west" },

        { jp:"獺祭", r:"Dassai", h:"旭酒造", hr:"Asahi Shuzō", pref:"yamaguchi", est:"1948",
          note:{ en:"Dropped every grade below junmai daiginjō in 1984, dispensed with a tōji and with the winter season, and brews year round on instrument readings. The best-selling premium sake in the world, and the most argued about.",
            ja:"一九八四年に純米大吟醸より下の等級をすべて捨て、杜氏も冬の一季も置かず、計器の数値に拠って年じゅう醸す。世界でもっとも売れている上級の日本酒であり、もっとも議論される酒でもある。",
            zh:"1984 年捨棄了純米大吟釀以下的所有等級，既不設杜氏也不分冬季，全年依儀器讀數釀造。它是全世界最暢銷的高階清酒，也是最受爭議的一款。" },
          p:[
            { jp:"獺祭 磨き二割三分", g:"jd", rice:"yamada", mill:"23%",
              d:{ en:"Among the most heavily milled sake sold anywhere.", ja:"世に売られる酒のうちで、最も深く磨かれた部類に入る。", zh:"是市面上磨得最深的清酒之一。" } },
            { jp:"獺祭 磨き三割九分", g:"jd", rice:"yamada", mill:"39%" },
            { jp:"獺祭 純米大吟醸 45", g:"jd", rice:"yamada", mill:"45%" },
            { jp:"DASSAI BLUE Type 50", g:"jd", rice:"yamada", mill:"50%",
              d:{ en:"Brewed at the company's own brewery in New York State.", ja:"ニューヨーク州にある自社の蔵で醸される。", zh:"於該公司位於紐約州的自有酒藏釀造。" } }
          ] },

        { jp:"雁木", r:"Gangi", h:"八百新酒造", hr:"Yaoshin Shuzō", pref:"yamaguchi", est:"1877",
          note:{ en:"Named for the stepped stone landings on the Nishiki river where rice was once unloaded from boats at the brewery door. All junmai, all unfiltered, and made with water soft enough to shape the whole house style.",
            ja:"錦川の、かつて蔵の戸口に舟から米を揚げた石段の名を負う。全量純米、全量無濾過であり、蔵の酒質そのものを決めるほど軟らかい水で仕込む。",
            zh:"名字取自錦川畔那些石砌階梯碼頭——昔日米就從船上卸在酒藏門口。全量純米、全量無濾過，用的水軟到足以決定整家酒藏的風格。" },
          p:[
            { jp:"雁木 ひやおろし 純米吟醸", g:"jg", rice:["yamada","nishikino"], mill:"50%" },
            { jp:"雁木 ひやおろし 純米", g:"j", rice:["yamada","nishikino"], mill:"60%" },
            { jp:"雁木 light 純米原酒", g:"j", m:["genshu"], rice:"yamada", mill:"60%" }
          ] },

        { jp:"貴", r:"Taka", h:"永山本家酒造場", hr:"Nagayama Honke Shuzōjō", pref:"yamaguchi", est:"1888",
          note:{ en:"Set up a farming company of its own in 2019 so that the same people grow the rice in summer and brew it in winter. Works with medium-hard water, which is rare enough in Japan to be part of the identity.",
            ja:"二〇一九年に自前の農業会社を立ち上げ、夏に米を育てる者が冬にそれを醸すようにした。中硬水で仕込むが、これは日本では珍しく、蔵の性格の一部になっている。",
            zh:"2019 年成立自家的農業公司，讓夏天種米的人就是冬天釀酒的人。所用的是中硬水，這在日本罕見到足以構成其身分的一部分。" },
          p:[
            { jp:"貴 山田錦 50", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"貴 山田錦 55", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"貴 雄町 50", g:"jg", rice:"omachi", mill:"50%" },
            { jp:"貴 特別純米 60", g:"tj", mill:"60%" }
          ] },

        { jp:"東洋美人", r:"Tōyō Bijin", h:"澄川酒造場", hr:"Sumikawa Shuzōjō", pref:"yamaguchi", est:"1921",
          note:{ en:"A Hagi house working from the premise that rice is a crop of a particular place, not an ingredient — and rebuilt after a 2013 flood buried the kura, with help from other breweries including its neighbours.",
            ja:"米は材料ではなく、ある土地の作物であるという前提から仕事をする萩の蔵である。二〇一三年の豪雨で蔵が埋もれたのち、近隣を含む他の蔵の手を借りて建て直した。",
            zh:"萩的一家酒藏，從「米不是原料，而是某個地方的作物」這個前提出發。2013 年豪雨將酒藏掩埋之後，它靠著包括鄰近同業在內的其他酒藏之助而重建。" },
          p:[
            { jp:"東洋美人 純米吟醸 山田錦", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"東洋美人 醇道一途 雄町", g:"jg", rice:"omachi" }
          ] },

        { jp:"賀茂鶴", r:"Kamotsuru", h:"賀茂鶴酒造", hr:"Kamotsuru Shuzō", pref:"hiroshima", est:"1873",
          note:{ en:"Installed the first motor-driven milling machine in the country in 1898, and put a daiginjō on general sale in 1958 — one of the bottles that made the category commercial before it had a legal name.",
            ja:"一八九八年に国内で最初の動力の精米機を据え、一九五八年には大吟醸を一般に売り出した。この区分が法律上の名を得る前に、それを商いとして成り立たせた一本である。",
            zh:"1898 年裝設了全國第一部動力精米機，1958 年更把大吟釀公開發售——在這個類別擁有法定名稱之前，正是這一瓶讓它成為生意。" },
          p:[
            { jp:"特製ゴールド賀茂鶴", g:"dg",
              d:{ en:"On sale since 1958, with gold leaf in the bottle.", ja:"一九五八年以来売られており、瓶には金箔が入る。", zh:"自 1958 年起販售，瓶中放有金箔。" } },
            { jp:"賀茂鶴 広島錦", g:"jd", rice:"hiroshima", mill:"50%" },
            { jp:"賀茂鶴 大吟峰", g:"jd", rice:"yamada" }
          ] },

        { jp:"竹鶴", r:"Taketsuru", h:"竹鶴酒造", hr:"Taketsuru Shuzō", pref:"hiroshima", est:"1733",
          note:{ en:"The house where the founder of Japanese whisky was born and raised. It brews almost everything by kimoto, at low polish, in a robust style made for warming — the opposite of the prevailing fashion.",
            ja:"日本の洋酒の礎を築いた人が生まれ育った家である。ほとんどすべてを生酛で、磨きを浅く、燗のための骨太な酒質に造る。いまの流行とは正反対である。",
            zh:"奠定日本威士忌基礎的那個人，就在這戶人家出生長大。它幾乎全以生酛釀造，磨米淺，酒體粗壯而為溫熱而生——與當前的流行正好相反。" },
          p:[
            { jp:"竹鶴 純米", g:"j", m:["kimoto"] },
            { jp:"竹鶴 秘傳 純米にごり酒", g:"j", m:["kimoto","nigori"] }
          ] },

        { jp:"富久長", r:"Fukuchō", h:"今田酒造本店", hr:"Imada Shuzō Honten", pref:"hiroshima", est:"1868",
          note:{ en:"Run by one of the best-known women tōji in Japan, and the house that brought back Hattansō, a Hiroshima rice that had all but disappeared. It brews without fixing on published specifications.",
            ja:"日本でもっとも知られた女性杜氏の一人が率いる蔵であり、ほぼ絶えていた広島の米、八反草を呼び戻した蔵でもある。公表される数値に縛られずに醸す。",
            zh:"由日本最知名的女性杜氏之一主持，也是讓幾乎絕跡的廣島米種「八反草」重新復生的酒藏。釀造時不受公布數據所拘。" },
          p:[
            { jp:"富久長 妙花風 八反草", g:"jd", rice:"hattanso" },
            { jp:"富久長 八反草 純米吟醸", g:"jg", rice:"hattanso" },
            { jp:"富久長 山田錦 純米吟醸", g:"jg", rice:"yamada" }
          ] },

        { jp:"宝剣", r:"Hōken", h:"宝剣酒造", hr:"Hōken Shuzō", pref:"hiroshima", est:"1872",
          note:{ en:"A Kure house drawing on a spring under its own floor, and an early adopter of the yeast Hiroshima bred for itself. Small, and spoken of in the prefecture as its proof that soft-water brewing still has range.",
            ja:"呉の蔵で、自らの床の下の湧き水を汲む。広島が自前で育てた酵母を早くから使った。小さな蔵だが、県内では軟水の造りにまだ幅があることの証しとして語られる。",
            zh:"吳市的一家酒藏，汲取自家地板下的湧泉，並很早就採用廣島自行育成的酵母。規模不大，但在縣內被視為軟水釀造仍具廣度的明證。" },
          p:[
            { jp:"宝剣 廣島八反錦", g:"jg", rice:"hattan", mill:"55%" },
            { jp:"宝剣 廣島夢酵母", g:"j",
              d:{ en:"Brewed with the prefecture's own Yume yeast.", ja:"県が育てた夢酵母で醸す。", zh:"以廣島縣自育的「夢」酵母釀造。" } }
          ] },

        { jp:"賀茂泉", r:"Kamoizumi", h:"賀茂泉酒造", hr:"Kamoizumi Shuzō", pref:"hiroshima", est:"1912",
          note:{ en:"Among the first houses in the postwar era to return to junmai, and one that does not filter with charcoal — which is why its sake is visibly golden where most is water-clear.",
            ja:"戦後、純米に戻った最も早い部類の蔵であり、炭で濾さない蔵でもある。多くの酒が水のように澄んでいるなかで、この酒が目に見えて黄金色であるのはそのためである。",
            zh:"戰後最早回歸純米的酒藏之一，也是不以活性炭過濾的酒藏。當多數酒都澄澈如水時，它的酒之所以呈現明顯的金黃，原因正在於此。" },
          p:[
            { jp:"賀茂泉 一", g:"j", rice:"domestic", mill:"75%" },
            { jp:"賀茂泉 造賀", g:"j", rice:"yamada", mill:"70%" },
            { jp:"賀茂泉 朱泉本仕込", g:"jg", rice:["hirohattan","nakate"], mill:"60%" },
            { jp:"賀茂泉 壽", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"誠鏡", r:"Seikyō", h:"中尾醸造", hr:"Nakao Jōzō", pref:"hiroshima", est:"1871",
          note:{ en:"A Takehara house that isolated a yeast from an apple in the 1930s and has used it since, which is a rarer thing than the flower-yeast breweries that came decades after.",
            ja:"竹原の蔵で、一九三〇年代に林檎から酵母を分離し、以来それを使いつづけている。数十年のちに現れた花酵母の蔵よりも、なお珍しい例である。",
            zh:"竹原的一家酒藏，1930 年代自蘋果分離出酵母，此後一直沿用——比起數十年後才出現的花酵母酒藏，這更為罕見。" },
          p:[
            { jp:"誠鏡 竹原しまや", g:"g", m:["nama"], rice:["hattan","nakate"], mill:"60%" },
            { jp:"誠鏡 手造り 純米酒", g:"j", mill:"58%" },
            { jp:"誠鏡 特別純米 雄町", g:"tj", rice:"omachi", mill:"58%" }
          ] },

        { jp:"酔心", r:"Suishin", h:"酔心山根本店", hr:"Suishin Yamane Honten", pref:"hiroshima", est:"1860",
          note:{ en:"Built on water so soft the house made a slogan of it, and long associated with the painter Yokoyama Taikan, who is said to have taken little else.",
            ja:"軟らかいことを標語にするほどの水の上に築かれた蔵であり、これよりほかをほとんど口にしなかったと伝えられる画家、横山大観と長く結びついている。",
            zh:"建立在軟到足以拿來當標語的水之上；並長年與畫家橫山大觀連在一起——據說他幾乎不喝別的。" },
          p:[
            { jp:"醉心 軟水の辛口", g:"j" },
            { jp:"醉心 稲穂", g:"jg", mill:"60%" },
            { jp:"醉心 生地 名誉醉心", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"龍勢", r:"Ryūsei", h:"藤井酒造", hr:"Fujii Shuzō", pref:"hiroshima", est:"1863",
          note:{ en:"Founded in Takehara because of the water there, and one of the Hiroshima houses that went back to kimoto while the rest of the prefecture was perfecting soft-water ginjō.",
            ja:"水のゆえに竹原で興った蔵であり、県の他が軟水吟醸を磨き上げているあいだに、生酛へ戻った広島の蔵の一つである。",
            zh:"因水而創立於竹原；當縣內其他酒藏正把軟水吟釀琢磨到極致時，它是少數回頭走向生酛的廣島酒藏之一。" },
          p:[
            { jp:"龍勢 和みの辛口", g:"j", m:["kimoto"], rice:"hattan", mill:"60%" },
            { jp:"龍勢 白ラベル", g:"jg" },
            { jp:"龍勢 黒ラベル", g:"jd" }
          ] },

        { jp:"亀齢", r:"Kirei", h:"亀齢酒造", hr:"Kirei Shuzō", pref:"hiroshima", est:"1898",
          note:{ en:"In Saijō, among the brewery chimneys, and dry in a district that made its name on softness. Not to be confused with the Nagano house of the same characters.",
            ja:"酒蔵の煙突の並ぶ西条にあり、柔らかさで名を成した土地にあって辛口を通す。同じ字を書く長野の蔵と混同してはならない。",
            zh:"位於酒藏煙囪林立的西條，在一個以柔和成名的地方堅持辛口。不可與寫著同樣漢字的長野那家酒藏混為一談。" },
          p:[
            { jp:"亀齢 辛口純米八拾", g:"j", rice:"nakate", mill:"80%" },
            { jp:"亀齢 特別純米 生原酒", g:"tj", m:["nama","genshu"], rice:"senbon", mill:"60%" },
            { jp:"亀齢 純米吟醸", g:"jg", rice:"moeibuki" }
          ] },

        { jp:"酒一筋", r:"Sakehitosuji", h:"利守酒造", hr:"Toshimori Shuzō", pref:"okayama", est:"1868",
          note:{ en:"Rebuilt Omachi from near-extinction. In the 1970s the variety had almost gone; this Bizen house grew it again on its own fields and made the case for it until the rest of the country followed.",
            ja:"絶滅寸前の雄町を建て直した蔵である。一九七〇年代、この品種はほとんど消えていた。備前のこの蔵が自らの田で再び育て、国じゅうが追うまで、その価値を説きつづけた。",
            zh:"把幾近滅絕的雄町重新建立起來的酒藏。1970 年代這個品種幾乎消失，備前的這家酒藏在自家田裡重新種植，並持續為它辯護，直到全國跟上。" },
          p:[
            { jp:"赤磐雄町 ゴールド", g:"jd", rice:"omachiAk", mill:"38%" },
            { jp:"酒一筋 純米", g:"j", rice:"omachi" }
          ] },

        { jp:"御前酒", r:"Gozenshu", h:"辻本店", hr:"Tsuji Honten", pref:"okayama", est:"1804",
          note:{ en:"Brews entirely with Omachi, and revived bodaimoto — the medieval temple starter, older than kimoto — as a working method rather than a demonstration. Its tōji is a woman of the owning family.",
            ja:"すべてを雄町で醸し、生酛よりさらに古い中世の寺の酒母、菩提酛を、実演ではなく実用の方法として復活させた。杜氏は蔵元の家の女性である。",
            zh:"全部以雄町釀造，並復興了比生酛更古老的中世寺院酒母「菩提酛」——不是作為示範，而是作為實際可用的方法。其杜氏是藏元家族的女性。" },
          p:[
            { jp:"御前酒 雄町日和", g:"j", m:["bodai","muroka","nama"], rice:"omachi" },
            { jp:"GOZENSHU 9 (NINE)", g:"jg", rice:"omachi" }
          ] },

        { jp:"櫻室町", r:"Sakura Muromachi", h:"室町酒造", hr:"Muromachi Shuzō", pref:"okayama", est:"1688",
          note:{ en:"Calls itself the oldest house in Okayama and brews very nearly everything from Omachi, the variety the prefecture has grown since 1859 and now supplies to the rest of the country.",
            ja:"岡山で最も古い蔵を名乗り、ほとんどすべてを雄町で醸す。一八五九年からこの県が育て、いまは国じゅうへ供している品種である。",
            zh:"自稱是岡山最古老的酒藏，幾乎全部以雄町釀造——那是這個縣自 1859 年種植至今、如今供應全國的品種。" },
          p:[
            { jp:"櫻室町 雄町 純米80", g:"j", rice:"omachi", mill:"80%" },
            { jp:"櫻室町 備前幻", g:"jg", rice:"omachi" },
            { jp:"櫻室町 ゴールド雄町米の里", g:"jd", rice:"omachi", mill:"40%" }
          ] },

        { jp:"王祿", r:"Ōroku", h:"王祿酒造", hr:"Ōroku Shuzō", pref:"shimane", est:"1872",
          note:{ en:"Holds that sake is alive, and refuses to let retailers who cannot keep it cold sell it. Junmai only, mostly unpasteurised, and rice grown in the same district as the brewery.",
            ja:"酒は生きものであるという立場を取り、冷やして置けない小売には売らない。純米のみで、多くは生のまま、米は蔵と同じ東出雲の地で穫れたものである。",
            zh:"主張酒是活的，並拒絕賣給無法低溫保存的零售商。只釀純米，多數不火入，米也產自與酒藏同一處的東出雲。" },
          p:[
            { jp:"たけちゃん", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"王祿 純米大吟醸 五割", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"王祿 八十八", g:"j", rice:"yamada", mill:"80%" }
          ] },

        { jp:"李白", r:"Rihaku", h:"李白酒造", hr:"Rihaku Shuzō", pref:"shimane", est:"1882",
          note:{ en:"Named for the Tang poet who wrote most famously about drinking, and one of the earliest Japanese houses to build a real export business — its English-labelled bottle preceded most of the category abroad.",
            ja:"酒について最もよく知られた詩を書いた唐の詩人にちなむ名である。日本の蔵のうちで、本格的な輸出の商いを早くに築いた一つであり、英語の酒標の一本は、海外のこの分野の多くに先んじた。",
            zh:"名字取自那位寫下最著名飲酒詩篇的唐代詩人。它是日本最早真正建立出口生意的酒藏之一，其英文酒標的酒款，比海外這個品類的多數都要早。" },
          p:[
            { jp:"李白 WANDERING POET", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"李白 両人對酌", g:"jd" }
          ] },

        { jp:"天穏", r:"Ten'on", h:"板倉酒造", hr:"Itakura Shuzō", pref:"shimane", est:"1871",
          note:{ en:"Takes the sake offered at shrines as its model — quiet, clear, without a raised voice — and has worked in kimoto and yamahai for more than a decade in a prefecture whose own mythology puts sake at the beginning.",
            ja:"社に供えられる御神酒を手本に取り、静かで澄み、声を張らない酒を目指す。神話が酒をその始まりに置く県にあって、十年以上にわたり生酛と山廃で仕事をしてきた。",
            zh:"以供奉於神社的御神酒為範本——安靜、清澈、不提高聲量；在一個神話把酒放在起點的縣份裡，它已以生酛與山廢作業十餘年。" },
          p:[
            { jp:"天穏 純米", g:"j", mill:"70%" },
            { jp:"天穏 純米大吟醸 改良雄町", g:"jd", rice:"kairyoomachi", mill:"50%" }
          ] },

        { jp:"月山", r:"Gassan", h:"吉田酒造", hr:"Yoshida Shuzō", pref:"shimane", est:"1743",
          note:{ en:"Licensed under the Hirose domain in 1743, and brewing with water of a hardness near zero — soft enough that the house treats it as the defining constraint rather than an advantage.",
            ja:"一七四三年に広瀬藩の免許を得た蔵であり、硬度がほとんど零に近い水で仕込む。蔵はこれを利点ではなく、造りを規定する制約として扱うほど軟らかい。",
            zh:"1743 年取得廣瀨藩的執照，並以硬度近乎零的水釀造——軟到這家酒藏把它視為決定釀造方式的限制，而非優勢。" },
          p:[
            { jp:"月山 芳醇辛口純米", g:"j", rice:"gohyaku", mill:"70%" },
            { jp:"月山 特別純米", g:"tj", rice:["gohyaku","kaminomai"], mill:"60%" },
            { jp:"月山 純米吟醸 佐香錦", g:"jg", rice:"sakanishiki", mill:"55%" }
          ] },

        { jp:"出雲富士", r:"Izumo Fuji", h:"富士酒造", hr:"Fuji Shuzō", pref:"shimane", est:"1939",
          note:{ en:"Steams in a kettle, makes its kōji by hand and presses in a wooden fune, in the province whose own myth puts the first brewing of sake at the beginning of the story.",
            ja:"釜で蒸し、麹を手で造り、木槽で搾る。その神話が、酒の最初の醸造を物語の始まりに置いている国においてである。",
            zh:"以釜蒸米、以手製麴、以木槽壓榨——而這片土地的神話，正把酒的第一次釀造放在故事的開端。" },
          p:[
            { jp:"出雲富士 純米", g:"j", rice:"yamada", mill:"60 / 70%" },
            { jp:"出雲富士 超辛口 青ラベル", g:"jg", rice:"sakanishiki", mill:"55%" },
            { jp:"出雲富士 五百万石 無ろ過生原酒", g:"jg", m:["muroka","nama","genshu"], rice:"gohyaku" }
          ] },

        { jp:"十旭日", r:"Jūji Asahi", h:"旭日酒造", hr:"Asahi Shuzō", pref:"shimane", est:"1869",
          note:{ en:"A small Izumo house working in kimoto, and one of the few where a woman has held the assistant tōji's post for long enough to shape the whole range.",
            ja:"出雲の小さな蔵で、生酛で仕事をする。女性が杜氏補佐の職に長く在り、品揃えの全体を形づくるに至った数少ない蔵の一つである。",
            zh:"出雲的一家小酒藏，以生酛作業；也是少數幾家由女性長期擔任杜氏助手、久到足以形塑整條產品線的酒藏。" },
          p:[
            { jp:"十旭日 純米酒 五百万石", g:"j", rice:"gohyaku", mill:"70%" },
            { jp:"十旭日 純米大吟醸 山田錦45", g:"jd", rice:"yamada", mill:"45%" }
          ] },

        { jp:"日置桜", r:"Hiokizakura", h:"山根酒造場", hr:"Yamane Shuzōjō", pref:"tottori", est:"",
          note:{ en:"Closed to visitors on hygiene grounds, contracts every grain from named growers, and revived Gōriki, a tall prewar Tottori rice that no modern farmer would plant without being asked.",
            ja:"衛生を理由に見学を受けず、米の一粒までを名の分かる作り手との契約でまかない、戦前の鳥取の丈高い品種、強力を復活させた。頼まれなければ現代の農家が植えるはずのない米である。",
            zh:"以衛生為由不接受參觀，每一粒米都向具名的種植者契作，並復育了戰前鳥取的高稈品種「強力」——若無人相求，現代農家絕不會種的米。" },
          p:[
            { jp:"日置桜 強力 純米大吟醸", g:"jd", rice:"goriki", mill:"45%" },
            { jp:"日置桜 伝承強力", g:"jg", rice:"goriki", mill:"60%" },
            { jp:"日置桜 特醸純米", g:"j", rice:"omachi", mill:"60%" },
            { jp:"日置桜 純米酒", g:"j", rice:"tamasakae", mill:"70%" }
          ] },

        { jp:"鷹勇", r:"Takaisami", h:"大谷酒造", hr:"Ōtani Shuzō", pref:"tottori", est:"1872",
          note:{ en:"Mills its own rice, and grows Gōriki under contract — the tall prewar Tottori variety that had to be brought back from almost nothing before anyone could brew with it again.",
            ja:"米は自ら精白し、強力を契約で育てる。戦前の鳥取の丈高い品種であり、ふたたび醸せるようになるまで、ほとんど無のところから戻さねばならなかった米である。",
            zh:"自行精米，並以契作栽培強力——那是戰前鳥取的高稈品種，必須從幾近於無之處復育回來，人們才能再度用它釀酒。" },
          p:[
            { jp:"鷹勇 純米吟醸 強力", g:"jg", rice:"goriki" },
            { jp:"鷹勇 純米大吟醸", g:"jd", rice:"yamada" }
          ] },

        { jp:"千代むすび", r:"Chiyomusubi", h:"千代むすび酒造", hr:"Chiyomusubi Shuzō", pref:"tottori", est:"1865",
          note:{ en:"In the port town of Sakaiminato, aiming at a rich savoury style rather than a light one, holding organic certification, and exporting more than most houses of its size.",
            ja:"境港の港町にあり、軽さではなく濃醇な旨口を狙う。有機の認証を持ち、同じ規模の蔵よりも多く輸出している。",
            zh:"位於境港這座港町，追求濃醇旨口而非清淡；持有有機認證，出口量也高於同等規模的酒藏。" },
          p:[
            { jp:"千代むすび 純米", g:"j", rice:"gohyaku" },
            { jp:"千代むすび 特別純米", g:"tj", rice:"gohyaku" },
            { jp:"千代むすび 強力50", g:"jd", rice:"goriki", mill:"50%" },
            { jp:"千代むすび 強力30", g:"jd", rice:"goriki", mill:"30%" }
          ] },

        { jp:"辨天娘", r:"Bentenmusume", h:"太田酒造場", hr:"Ōta Shuzōjō", pref:"tottori", est:"1909",
          note:{ en:"Junmai only, all of it from contracted local growers, and made to be warmed — the house prints the grower's name and the year on the label, which almost nobody else does.",
            ja:"純米のみを、すべて地元の契約栽培の米で造り、燗のために仕上げる。酒標に作り手の名と年を刷る蔵は、ほかにほとんどない。",
            zh:"只釀純米，全部用當地契作的米，並且是為溫熱而做的酒。在酒標上印出種植者姓名與年份的酒藏，幾乎再無他家。" },
          p:[
            { jp:"辨天娘 生酛 強力", g:"j", m:["kimoto"], rice:"goriki", mill:"75%" },
            { jp:"辨天娘 純米吟醸", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"辨天娘 純米大吟醸", g:"jd", rice:"yamada", mill:"45%" }
          ] },

        { jp:"美丈夫", r:"Bijōfu", h:"濵川商店", hr:"Hamakawa Shōten", pref:"kochi", est:"",
          note:{ en:"A small house in Tano on the Pacific coast of Kōchi, known for pushing milling further than almost anyone — down to a quarter of the grain — while keeping the result drinkable with food.",
            ja:"高知の太平洋岸、田野の小さな蔵である。粒の四分の一にまで、ほとんど誰よりも深く磨くことで知られ、それでいて料理とともに飲める酒に仕上げる。",
            zh:"位於高知太平洋岸田野町的一家小酒藏，以把磨米推得比幾乎任何人都深——磨到只剩四分之一——而聞名，卻仍讓成品能配著菜喝。" },
          p:[
            { jp:"美丈夫 純米大吟醸", g:"jd", rice:"yamadaA", mill:"25%" },
            { jp:"美丈夫 特別純米酒", g:"tj" }
          ] },

        { jp:"酔鯨", r:"Suigei", h:"酔鯨酒造", hr:"Suigei Shuzō", pref:"kochi", est:"1872",
          note:{ en:"Named for a lord of Tosa who called himself the drunken whale. Kōchi drinks more than any other prefecture, and this house builds its sake for the long table rather than the single glass.",
            ja:"みずからを「鯨海酔侯」と号した土佐の殿にちなむ名である。高知はどの県よりよく飲む土地であり、この蔵は一杯のためではなく、長い食卓のために酒を組み立てる。",
            zh:"名字取自那位自號「鯨海醉侯」的土佐藩主。高知比任何一縣都更能喝，而這家酒藏所釀的酒，是為一整桌長席、而非單獨一杯而設計的。" },
          p:[
            { jp:"酔鯨 純米酒 八反錦 60", g:"j", rice:"hattan", mill:"60%" },
            { jp:"酔鯨 純米大吟醸 弥", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"酔鯨 純米大吟醸 万", g:"jd", rice:"yamada", mill:"30%" }
          ] },

        { jp:"亀泉", r:"Kameizumi", h:"亀泉酒造", hr:"Kameizumi Shuzō", pref:"kochi", est:"1897",
          note:{ en:"Made its name with a yeast the prefecture developed, which gives an aroma so plainly of ripe fruit that people new to sake often refuse to believe there is nothing added.",
            ja:"県が育てた酵母で名を成した。熟れた果実そのものと言うほかない香りが立ち、日本酒に不慣れな人はしばしば、何も加えていないと言われても信じない。",
            zh:"以高知縣自行開發的酵母打出名號；那股香氣鮮明得只能說是熟果，初接觸清酒的人往往不肯相信其中什麼也沒添加。" },
          p:[
            { jp:"亀泉 CEL-24", g:"jg", m:["genshu"], rice:"hattan", mill:"50%" },
            { jp:"亀泉 特別純米", g:"tj", rice:"tosa", mill:"60%" },
            { jp:"亀泉 貴賓", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"KAMEIZUMI Perle", g:"jg", m:["spark"], rice:["hattan","kazenoko"], mill:"55%",
              d:{ en:"Fermented a second time in the bottle.", ja:"瓶の中で二度目の発酵をさせる。", zh:"在瓶中進行第二次發酵。" } }
          ] },

        { jp:"文佳人", r:"Bunkajin", h:"アリサワ酒造", hr:"Arisawa Shuzō", pref:"kochi", est:"1887",
          note:{ en:"Small batches, three days of pressing in a wooden fune, and bottles held at five below zero until they ship. A house whose whole method is aimed at keeping the sake still.",
            ja:"小さく仕込み、木槽で三日かけて搾り、出荷までを氷点下五度で置く。その方法のすべてが、酒を動かさずに保つことに向けられている蔵である。",
            zh:"小批量釀造，以木槽耗時三日壓榨，裝瓶後在零下五度存放至出貨。這家酒藏的整套方法，都是為了讓酒保持靜止。" },
          p:[
            { jp:"文佳人 辛口純米", g:"j", rice:"matsuyama", mill:"55%" },
            { jp:"文佳人 純米大吟醸", g:"jd", rice:"yamada" }
          ] },

        { jp:"司牡丹", r:"Tsukasabotan", h:"司牡丹酒造", hr:"Tsukasabotan Shuzō", pref:"kochi", est:"1603",
          note:{ en:"Founded at Sakawa in 1603 as the sake purveyor to a retainer who came into Tosa with the new lord, which makes it one of the oldest houses still working anywhere in Japan.",
            ja:"一六〇三年、新しい領主とともに土佐に入った家臣の御用酒屋として佐川に興った。日本のどこを見ても、いまなお動いている最も古い蔵の一つである。",
            zh:"1603 年於佐川創立，擔任隨新領主一同入主土佐的一位家臣的御用酒屋；放眼日本，它是至今仍在運作的最古老酒藏之一。" },
          p:[
            { jp:"司牡丹 豊麗 純米酒", g:"j" },
            { jp:"司牡丹 超辛口純米 長宗我部", g:"j" },
            { jp:"司牡丹 深尾", g:"jd", m:["genshu"], rice:"yamada", mill:"35%" }
          ] },

        { jp:"土佐鶴", r:"Tosatsuru", h:"土佐鶴酒造", hr:"Tosatsuru Shuzō", pref:"kochi", est:"1773",
          note:{ en:"The largest house in a prefecture that drinks more than any other, and the one whose dry style most people mean when they say Tosa sake.",
            ja:"どの県よりもよく飲む土地で最も大きな蔵であり、人が土佐の酒と言うとき思い浮かべる辛口は、たいていこの蔵のものである。",
            zh:"在一個比任何一縣都更能喝的地方，它是規模最大的酒藏；人們說到「土佐的酒」時所想的那種辛口，多半就是它。" },
          p:[
            { jp:"土佐鶴 純米酒", g:"j", mill:"65%" },
            { jp:"土佐鶴 豊穣 純米吟醸", g:"jg", rice:"yamada", mill:"55%" },
            { jp:"土佐鶴 純米大吟醸", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"石鎚", r:"Ishizuchi", h:"石鎚酒造", hr:"Ishizuchi Shuzō", pref:"ehime", est:"1920",
          note:{ en:"Works to a single stated aim — sake that comes alive with food — and names its ginjō bottlings after the rice rather than the grade, so the lineup reads as a set of comparisons.",
            ja:"「食中に活きる酒」という一つの掲げた目的のために仕事をし、吟醸の一本ごとに等級ではなく米の名を付ける。品揃えがそのまま比較の並びとして読める。",
            zh:"為一個明確揭示的目標而作業——「在餐中活起來的酒」——並以米種而非等級為吟釀命名，使整條產品線讀來就是一組對照。" },
          p:[
            { jp:"石鎚 山田錦 50", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"石鎚 備前雄町 50", g:"jg", rice:"omachi", mill:"50%" },
            { jp:"石鎚 愛山 50", g:"jg", rice:"aiyama", mill:"50%" }
          ] },

        { jp:"梅錦", r:"Umenishiki", h:"梅錦山川", hr:"Umenishiki Yamakawa", pref:"ehime", est:"1872",
          note:{ en:"Mechanised the work that is only labour and kept hands on the work that decides quality — an explicit division that most houses make without stating it, and that this one states.",
            ja:"ただの労働にすぎない仕事は機械に任せ、品質を決める仕事には手を残す。多くの蔵が口に出さずに行っている線引きを、この蔵ははっきりと述べている。",
            zh:"把純粹是勞力的工作交給機械，把決定品質的工作留在手上——多數酒藏默默在做的這道劃分，這家酒藏把它明白說了出來。" },
          p:[
            { jp:"梅錦 純米吟醸 光久", g:"jg", rice:["yamada","hattan"], mill:"55%" },
            { jp:"梅錦 純米大吟醸", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"悦凱陣", r:"Yorokobi Gaijin", h:"丸尾本店", hr:"Maruo Honten", pref:"kagawa", est:"1885",
          note:{ en:"Still steams rice in wooden baskets over an iron kettle, and puts nothing through charcoal. A house whose sake divides opinion more sharply than almost any other, and is defended fiercely by those who like it.",
            ja:"いまも鉄の釜の上、木の甑で米を蒸し、炭には一切通さない。その酒は他のどの蔵よりも意見を鋭く分け、好む者は激しくこれを擁護する。",
            zh:"至今仍以鐵釜上的木甑蒸米，且完全不經活性炭。這家酒藏的酒比幾乎任何一家都更能把人的意見劃開，而喜歡它的人會極力為它辯護。" },
          p:[
            { jp:"凱陣", g:"j",
              d:{ en:"Unfiltered, and never passed through charcoal.", ja:"無濾過であり、炭には通さない。", zh:"無濾過，且不經活性炭。" } },
            { jp:"悦凱陣 燕石", g:"jd" }
          ] },

        { jp:"川鶴", r:"Kawatsuru", h:"川鶴酒造", hr:"Kawatsuru Shuzō", pref:"kagawa", est:"1891",
          note:{ en:"Founded by an indigo merchant, and one of the few houses working with Ōseto and Sanuki Yoimai — two rice varieties grown in Kagawa and almost nowhere else.",
            ja:"藍を商っていた者が起こした蔵であり、オオセトとさぬきよいまいという、香川でしか作られていないに等しい二つの酒米を扱う数少ない蔵の一つである。",
            zh:"由一位藍染商人所創，也是少數使用「オオセト」與「讚岐好米」這兩種幾乎只在香川種植的酒米的酒藏之一。" },
          p:[
            { jp:"川鶴 純米 オオセト", g:"j", rice:"ooseto" },
            { jp:"川鶴 純米 さぬきよいまい", g:"j", rice:"sanuki" },
            { jp:"川鶴 純米大吟醸", g:"jd", rice:"domestic", mill:"50%" }
          ] },

        { jp:"鳴門鯛", r:"Narutodai", h:"本家松浦酒造場", hr:"Honke Matsuura Shuzōjō", pref:"tokushima", est:"1804",
          note:{ en:"Named for the sea bream taken in the Naruto strait, and a house that has kept a substantial citrus liqueur business beside its sake — sudachi being a Tokushima crop before it was a garnish.",
            ja:"鳴門の瀬戸で獲れる鯛にちなむ名である。酒と並んで柑橘の酒の商いを大きく保ってきた蔵でもある。すだちは添え物である前に、徳島の作物であった。",
            zh:"名字取自鳴門海峽所捕的鯛魚；除清酒之外，它也一直保有可觀的柑橘利口酒生意——酢橘在成為配菜之前，本來就是德島的作物。" },
          p:[
            { jp:"鳴門鯛 純米大吟醸 寿", g:"jd", rice:"yamada", mill:"40%" },
            { jp:"鳴門鯛 純米大吟醸 巴", g:"jd" }
          ] },

/* ============================================================ */
/* 7 — Kyūshū                                                   */
/* ============================================================ */

        { jp:"三芳菊", r:"Miyoshikiku", h:"三芳菊酒造", hr:"Miyoshikiku Shuzō", pref:"tokushima", est:"1889",
          note:{ en:"Openly fruity, openly aromatic, and wrapped in labels by artists that look nothing like a sake bottle — a house that decided the category's visual conventions were not obligatory.",
            ja:"あからさまに果実を思わせ、あからさまに香り高く、酒瓶にはおよそ見えない絵描きの酒標をまとう。この分野の見た目の約束事は守らねばならぬものではないと決めた蔵である。",
            zh:"果香鮮明、香氣張揚，並裹著藝術家設計、看起來完全不像清酒瓶的酒標——這家酒藏認定，這個品類在視覺上的成規並非非守不可。" },
          p:[
            { jp:"三芳菊 純米大吟醸 山田錦50", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"三芳菊 特別純米 直汲み", g:"tj", rice:"yamada" }
          ] },

        { group:{ en:"Kyūshū", ja:"九州", zh:"九州" }, jp:"九州", id:"g-kyushu" },

        { jp:"鍋島", r:"Nabeshima", h:"富久千代酒造", hr:"Fukuchiyo Shuzō", pref:"saga", est:"",
          note:{ en:"A small Kashima house that won champion sake at the International Wine Challenge in 2011 and has been difficult to buy ever since. It was, shortly before, a brewery contemplating closure.",
            ja:"鹿島の小さな蔵で、二〇一一年に国際的な酒の品評で最優秀を獲り、以来ずっと手に入りにくい。その少し前まで、閉じることを考えていた蔵である。",
            zh:"鹿島的一家小酒藏，2011 年在國際葡萄酒競賽中奪得最高榮譽，此後一直難以買到。而在那之前不久，它還是一家正考慮關門的酒藏。" },
          p:[
            { jp:"鍋島 純米吟醸 山田錦", g:"jg", rice:"yamada", mill:"50%" },
            { jp:"鍋島 純米大吟醸 山田錦", g:"jd", rice:"yamada", mill:"35%" },
            { jp:"鍋島 赤磐雄町", g:"jd", rice:"omachiAk" }
          ] },

        { jp:"七田", r:"Shichida", h:"天山酒造", hr:"Tenzan Shuzō", pref:"saga", est:"1875",
          note:{ en:"The specialist-only line of an older Ogi house, launched in 2001, all junmai, and known for bottlings milled deliberately little — three-quarters of the grain left on — so the rice is not polished out of the flavour.",
            ja:"小城の古い蔵が二〇〇一年に立ち上げた特約店限定の系列で、全量純米である。粒の四分の三を残す、あえて浅い磨きの一本で知られる。米の味を磨き落としてしまわないためである。",
            zh:"小城一家老酒藏於 2001 年推出的特約店限定產品線，全量純米；以刻意淺磨、保留四分之三米粒的酒款聞名——為的是不把米的味道磨掉。" },
          p:[
            { jp:"七田 雄町 50", g:"jg", rice:"omachi", mill:"50%" },
            { jp:"七田 七割五分磨き 山田錦", g:"j", rice:"yamada", mill:"75%" },
            { jp:"七田 七割五分磨き 愛山", g:"j", rice:"aiyama", mill:"75%" }
          ] },

        { jp:"東一", r:"Azumaichi", h:"五町田酒造", hr:"Gochōda Shuzō", pref:"saga", est:"1922",
          note:{ en:"Grows its own Yamada Nishiki, which very few houses do, and aims at a sake whose five tastes are balanced rather than at one that leads with aroma.",
            ja:"山田錦を自ら育てる。これをする蔵はごく少ない。香りで押す酒ではなく、五つの味が釣り合った酒を目指す。",
            zh:"自行栽培山田錦——這麼做的酒藏極少；追求的是五味均衡的酒，而非以香氣取勝的酒。" },
          p:[
            { jp:"東一 純米 山田錦", g:"j", rice:"yamada", mill:"64%" },
            { jp:"東一 純米大吟醸", g:"jd", rice:"yamada", mill:"39%" }
          ] },

        { jp:"天吹", r:"Amabuki", h:"天吹酒造", hr:"Amabuki Shuzō", pref:"saga", est:"1704",
          note:{ en:"Brews with yeasts isolated from flowers — strawberry blossom, rose, marigold, abelia — each giving a different aroma, and several of its buildings are more than a century old and registered.",
            ja:"花から分離した酵母で醸す。苺の花、薔薇、マリーゴールド、アベリア——それぞれが別の香りを与える。百年を越える建物のいくつかは登録有形文化財である。",
            zh:"以自花朵分離的酵母釀造——草莓花、玫瑰、金盞花、六道木——各自帶來不同的香氣；其數棟逾百年的建築已登錄為文化財。" },
          p:[
            { jp:"天吹 純米大吟醸50", g:"jd", rice:"sagabiyori", mill:"50%" },
            { jp:"天吹 純米吟醸 雄町 生", g:"jg", m:["nama"], rice:"omachi" }
          ] },

        { jp:"香露", r:"Kōro", h:"熊本県酒造研究所", hr:"Kumamoto-ken Shuzō Kenkyūjo", pref:"kumamoto", est:"1909",
          note:{ en:"Both a brewery and the prefecture's research institute, and the place Association yeast No. 9 came from — the strain that made modern ginjō possible and is still the one most often reached for.",
            ja:"蔵であると同時に県の研究所でもあり、協会九号酵母の出どころである。現代の吟醸を可能にし、いまも最もよく手の伸びる酵母である。",
            zh:"既是酒藏也是熊本縣的研究所，更是協會九號酵母的出處——正是這株酵母讓現代吟釀成為可能，至今仍是最常被取用的一株。" },
          p:[
            { jp:"香露 大吟醸", g:"dg", rice:"yamada", mill:"38%" },
            { jp:"香露 特別純米", g:"tj", rice:"yamada", mill:"58%" },
            { jp:"香露 純米酒", g:"j", rice:"kumamoto", mill:"65%" }
          ] },

        { jp:"花の香", r:"Hana no Ka", h:"花の香酒造", hr:"Hana no Ka Shuzō", pref:"kumamoto", est:"1902",
          note:{ en:"Works to a stated idea it calls ubusuna — the ground one is born from. It has brought back Homase, an Edo-period Kumamoto rice, and bottles it separately from its Yamada Nishiki.",
            ja:"みずから「産土」と呼ぶ考えに沿って仕事をする。江戸期の熊本の米、穂増を呼び戻し、山田錦とは別に瓶詰めしている。",
            zh:"依循他們稱為「產土」的想法行事。它復育了江戶時期的熊本米種「穗增」，並與山田錦分開裝瓶。" },
          p:[
            { jp:"花の香 桜花", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"産土 穂増", g:"j", rice:"homase" },
            { jp:"産土 山田錦", g:"j", rice:"yamada" }
          ] },

        { jp:"千代の園", r:"Chiyonosono", h:"千代の園酒造", hr:"Chiyonosono Shuzō", pref:"kumamoto", est:"1896",
          note:{ en:"A Yamaga house that makes clear sake, shōchū, liqueurs and akazake — the sweet red sake Kumamoto has drunk at New Year for centuries and which is now used chiefly as a cooking wine.",
            ja:"山鹿の蔵で、清酒と焼酎と混成酒、そして赤酒を造る。赤酒は、熊本が幾世紀にもわたり正月に飲んできた甘い赤い酒で、いまは主に料理に使われる。",
            zh:"山鹿的一家酒藏，釀造清酒、燒酎、混成酒，以及赤酒——那是熊本數百年來在新年飲用的甜味紅酒，如今主要作為料理用酒。" },
          p:[
            { jp:"千代の園 朱盃 純米酒", g:"j", rice:"domestic", mill:"65%" },
            { jp:"千代の園 朱盃 純米大吟醸", g:"jd" }
          ] },

        { jp:"瑞鷹", r:"Zuiyō", h:"瑞鷹", hr:"Zuiyō", pref:"kumamoto", est:"1867",
          note:{ en:"Moved from Kumamoto's traditional red sake to clear sake after consulting brewers from Tanba, and was among the houses involved in the work that produced the Kumamoto yeast.",
            ja:"丹波の造り手に教えを請うて、熊本の伝統の赤酒から清酒へ移った。熊本酵母を生んだ仕事に関わった蔵の一つでもある。",
            zh:"在向丹波的釀造者請益之後，從熊本傳統的赤酒轉向清酒；它也是參與了催生熊本酵母那項工作的酒藏之一。" },
          p:[
            { jp:"瑞鷹 芳醇純米酒", g:"j", rice:"hananishiki", mill:"65%" },
            { jp:"瑞鷹 純米大吟醸 金", g:"jd", rice:"yamada", mill:"38%" },
            { jp:"瑞鷹 雫取り YK35", g:"dg", m:["shizuku"], rice:"yamada", mill:"35%" }
          ] },

        { jp:"三井の寿", r:"Mii no Kotobuki", h:"井上合名会社", hr:"Inoue Gōmei", pref:"fukuoka", est:"1922",
          note:{ en:"Nearly all junmai for more than thirty-five years, in a prefecture better known for rice than for sake, and with labels that have quietly become collectable in their own right.",
            ja:"三十五年以上にわたってほぼ全量が純米であり、酒よりも米で知られる県にある。酒標そのものが、いつのまにか集める対象になっている。",
            zh:"三十五年以上幾乎全為純米，所在的縣份以米聞名更甚於以酒聞名；而其酒標本身，不知不覺間也成了被收藏的對象。" },
          p:[
            { jp:"三井の寿 純米大吟醸", g:"jd" },
            { jp:"三井の寿 +14 辛口", g:"jg" },
            { jp:"美田 大辛口 山廃純米", g:"j", m:["yamahai"] }
          ] },

        { jp:"繁桝", r:"Shigemasu", h:"高橋商店", hr:"Takahashi Shōten", pref:"fukuoka", est:"1717",
          note:{ en:"Three centuries in Yame, a town otherwise known for tea and for lanterns, and a house that attributes its food-friendliness to how it makes its kōji rather than to how it mills.",
            ja:"茶と灯籠で知られる八女の町で三世紀を重ねた蔵であり、食との相性の理由を、磨きではなく麹の造り方に帰している。",
            zh:"在以茶與燈籠聞名的八女町已歷三個世紀；這家酒藏把自己與食物相合的緣由，歸於製麴的方式而非磨米。" },
          p:[
            { jp:"繁桝 純米大吟醸50", g:"jd", rice:"yamada", mill:"50%" },
            { jp:"繁桝 純米大吟醸40", g:"jd", rice:"yamada", mill:"40%" }
          ] },

        { jp:"庭のうぐいす", r:"Niwa no Uguisu", h:"山口酒造場", hr:"Yamaguchi Shuzōjō", pref:"fukuoka", est:"1832",
          note:{ en:"Named after a bush warbler said to have drunk from the spring in the courtyard. The house aims low on aroma and gentle on umami, for sake that can be drunk every evening rather than admired.",
            ja:"庭の湧水を飲みに来たという鶯にちなむ名である。香りを低く、旨みを穏やかに取り、感心されるためではなく、毎晩飲まれるための酒を目指す。",
            zh:"名字取自據說曾來庭中湧泉飲水的黃鶯。這家酒藏刻意壓低香氣、放柔旨味，做的是每晚都能喝、而非供人讚嘆的酒。" },
          p:[
            { jp:"庭のうぐいす 特別純米", g:"tj", mill:"60%" },
            { jp:"庭のうぐいす 純米吟醸", g:"jg", rice:"domestic", mill:"50%" }
          ] },

        { jp:"杜の蔵", r:"Mori no Kura", h:"杜の蔵", hr:"Mori no Kura", pref:"fukuoka", est:"",
          note:{ en:"Junmai only, rice contracted from growers in the same district, and soft water drawn from beneath the brewery floor. A Kurume house that also distils shōchū from its own lees.",
            ja:"純米のみを醸し、米は同じ地区の作り手との契約で得て、水は蔵の床の下から汲む。自らの酒粕から焼酎を蒸留する久留米の蔵でもある。",
            zh:"只釀純米，用米向同一地區的種植者契作，水則汲自酒藏地板之下。這家久留米的酒藏，也以自家酒粕蒸餾燒酎。" },
          p:[
            { jp:"杜の蔵 辛口純米酒", g:"j", rice:"yumeikkon", mill:"70%" },
            { jp:"杜の蔵 純米酒", g:"j", rice:"yumeikkon" },
            { jp:"杜の蔵 颯", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"若波", r:"Wakanami", h:"若波酒造", hr:"Wakanami Shuzō", pref:"fukuoka", est:"1922",
          note:{ en:"Named for the young waves of the Chikugo river beside it, and run by a small team of siblings — the brewer, the tōji and the seller being three people from one family.",
            ja:"かたわらを流れる筑後川の若い波にちなむ名である。営むのは兄弟姉妹の小さな組で、造る者、杜氏、売る者が一つの家の三人である。",
            zh:"名字取自流經旁側的筑後川那些年輕的浪。經營者是一組兄弟姊妹的小團隊——釀造者、杜氏與銷售者，是同一個家裡的三個人。" },
          p:[
            { jp:"若波 純米酒", g:"j", rice:"jugemu", mill:"65%" },
            { jp:"若波 純米吟醸 東条山田錦", g:"jg", rice:"yamadaA", mill:"55%" }
          ] },

        { jp:"旭菊", r:"Asahigiku", h:"旭菊酒造", hr:"Asahigiku Shuzō", pref:"fukuoka", est:"1900",
          note:{ en:"A Kurume house that grows some of its own Yamada Nishiki and contracts the rest without pesticide from Itoshima, and aims squarely at sake to be warmed.",
            ja:"久留米の蔵で、山田錦の一部を自ら育て、残りを糸島の無農薬の契約栽培でまかなう。狙いはまっすぐ燗の酒に向いている。",
            zh:"久留米的一家酒藏，自種部分山田錦，其餘向糸島的無農藥契作取得；其目標直指溫熱後飲用的酒。" },
          p:[
            { jp:"旭菊 大地 特別純米", g:"tj", rice:"yamada", mill:"60%" },
            { jp:"旭菊 綾花 特別純米", g:"tj", mill:"60%" },
            { jp:"旭菊 大地 純米吟醸", g:"jg", rice:"yamada" }
          ] },

        { jp:"六十餘洲", r:"Rokujūyoshū", h:"今里酒造", hr:"Imazato Shuzō", pref:"nagasaki", est:"1772",
          note:{ en:"Brewing without a break since 1772 in Hasami, a town otherwise known for porcelain. The brand name is an old word for the whole of Japan, counted as sixty-odd provinces.",
            ja:"磁器で知られる波佐見の町で、一七七二年から絶えることなく醸してきた。銘柄の名は、六十あまりの国と数えた日本全体を指す古い言葉である。",
            zh:"在以瓷器聞名的波佐見町，自 1772 年起不曾間斷地釀造。品牌名是一個舊詞，指以六十餘國計數的整個日本。" },
          p:[
            { jp:"六十餘洲 大吟醸", g:"dg", mill:"38%" },
            { jp:"六十餘洲 本醸造", g:"hj" }
          ] },

        { jp:"福田", r:"Fukuda", h:"福田酒造", hr:"Fukuda Shuzō", pref:"nagasaki", est:"1688",
          note:{ en:"On the Hirado peninsula, where Japan's first foreign trade came ashore, brewing since 1688 and keeping two older brand names beside the newer one that carries the family's own.",
            ja:"日本の外との交易が最初に陸へ上がった平戸の半島にあり、一六八八年から醸してきた。家の名を負う新しい銘柄のかたわらに、古い二つの銘柄を残している。",
            zh:"位於日本最早對外貿易登陸之地平戶半島，自 1688 年起釀造；在冠上家族之名的新品牌之外，仍保留著兩個更舊的品牌。" },
          p:[
            { jp:"福田 特別純米", g:"tj", rice:["yamada","reiho"], mill:"60%" },
            { jp:"福田 純米大吟醸 幸", g:"jd", rice:"yamada", mill:"50%" }
          ] },

        { jp:"西の関", r:"Nishi no Seki", h:"萱島酒造", hr:"Kayashima Shuzō", pref:"oita", est:"1873",
          note:{ en:"The name declares it the foremost sake of western Japan, which the second generation chose in the Meiji period and the house has been living up to since. Built on balancing the tastes rather than leading with one.",
            ja:"名はみずからを西日本一の酒と宣するもので、明治期に二代目が選び、以来その名に応えてきた。一つの味で押すのではなく、諸味を釣り合わせることの上に築かれている。",
            zh:"這個名字宣稱自己是西日本第一的酒，由第二代於明治年間所取，此後便一直努力名副其實。它建立在諸味的均衡之上，而非以單一味道取勝。" },
          p:[
            { jp:"西の関 大吟醸 滴酒", g:"dg", m:["shizuku"] },
            { jp:"西の関 美吟", g:"jg" },
            { jp:"西の関 手造り純米酒", g:"j" }
          ] },

        { jp:"鷹来屋", r:"Takakiya", h:"浜嶋酒造", hr:"Hamashima Shuzō", pref:"oita", est:"1889",
          note:{ en:"The fifth generation started this hand-made line in 1997, on rice grown within the Ogata district, in a prefecture where nearly every other brewery had turned to shōchū.",
            ja:"五代目が一九九七年に、緒方の地で育った米を用いて、この手造りの系列を始めた。他のほとんどの蔵が焼酎へ移ってしまった県においてである。",
            zh:"第五代於 1997 年以緒方一帶所產的米，開啟了這條手工製的產品線——而在這個縣裡，其餘幾乎每一家酒藏都已轉向燒酎。" },
          p:[
            { jp:"鷹来屋 特別純米 山廃", g:"tj", m:["yamahai"] },
            { jp:"鷹来屋 純米吟醸 雄町 生もと", g:"jg", m:["kimoto"], rice:["omachi","yamada"], mill:"50 / 55%" },
            { jp:"鷹来屋 純米大吟醸", g:"jd" }
          ] }

      ] }
    ] },

    { t:"section", id:"bypref",
      title:{ en:"The same list, read by prefecture", ja:"県から引く", zh:"由縣索藏" }, jp:"県別索引",
      body:[
        { t:"p", text:{
          en:"Forty-four of the forty-seven prefectures appear below; the three that do not are in the note further down. The order is the one Japan uses for itself, from Hokkaidō at the top to Kyūshū at the bottom, so the list doubles as a rough map. What it will not tell you is how many breweries a prefecture actually has — Niigata alone has about eighty — only which of them this directory has room for.",
          ja:"四十七のうち四十四の県が以下に現れる。現れない三つについては、さらに下の注に記した。並びは日本が自らのために用いる順、すなわち上の北海道から下の九州までであり、この一覧はそのまま粗い地図にもなっている。ただし、その県に実際いくつ蔵があるかは、これでは分からない——新潟だけでおよそ八十ある——分かるのは、本名鑑が収めえたのはどれか、ということだけである。",
          zh:"四十七縣之中有四十四個出現在下方；未出現的三個，記於再下方的注中。排序採用日本自身慣用的順序，自最上方的北海道到最下方的九州，因此這份清單同時也是一張粗略的地圖。但它不會告訴你某一縣究竟有多少家酒藏——光是新潟就約有八十家——它只告訴你，本名鑑容納得下的是哪幾家。" } },
        { t:"prefindex" }
      ] },

    { t:"section", id:"byrice",
      title:{ en:"The same list, read by rice", ja:"米から引く", zh:"由米索藏" }, jp:"品種索引",
      body:[
        { t:"p", text:{
          en:"Turn the directory the other way round and it answers a different question: not what does this house make, but who makes anything from this grain. The count beside each variety is the number of houses in this directory with a standing bottle of it, and every name is a link back into the entry above.",
          ja:"名鑑を裏返せば、別の問いに答えることになる。この蔵は何を造るか、ではなく、この米から何かを造っているのは誰か、である。品種のかたわらの数は、本名鑑のうちその米の定番を持つ蔵の数であり、名はすべて上の記載へ戻る手がかりになっている。",
          zh:"把名鑑翻轉過來，它回答的就是另一個問題：不是「這家酒藏做什麼」，而是「有誰用這種米做出了什麼」。品種旁的數字，是本名鑑中擁有該米常態商品的酒藏數量，而每一個名字都是回到上方條目的連結。" } },
        { t:"note", label:{ en:"What the counts show", ja:"数が示すもの", zh:"數字顯示了什麼" }, text:{
          en:"Yamada Nishiki appears in a hundred and two of these houses — more than all other varieties put together. That is not a defect in the sample; it is the actual shape of the industry, and it is why the pages on <a href=\"rice.html\">Sake Rice</a> and on <a href=\"terroir.html\">Terroir</a> both spend so long on one grain bred in Hyōgo in 1936. Read the long tail instead: the varieties with one or two names beside them are the ones a prefecture revived, or bred, or kept alive on its own.",
          ja:"山田錦は、これらの蔵のうち百二に現れる。他のすべての品種を合わせたよりも多い。これは標本の偏りではなく、産業の実際の形である。<a href=\"rice.html\">酒米</a>と<a href=\"terroir.html\">風土</a>の頁が、一九三六年に兵庫で育成された一つの米にあれほど紙幅を割くのは、そのためである。むしろ長い裾を読むとよい。名が一つ二つしか並ばない品種こそ、ある県が復活させ、育成し、あるいは自力で生かしてきた米である。",
          zh:"山田錦出現在這些酒藏中的一百零二家——比其他所有品種加起來還多。這不是取樣的偏差，而是這個產業的實際形狀；<a href=\"rice.html\">酒米</a>與<a href=\"terroir.html\">風土</a>兩頁之所以在 1936 年育成於兵庫的這一種米上著墨如此之多，原因正在於此。不妨反過來讀那條長尾：旁邊只列著一兩個名字的品種，才是某個縣復育、育成，或憑一己之力保住的米。" } },
        { t:"riceindex" }
      ] },

    { t:"section", id:"bymethod",
      title:{ en:"The same list, read by starter", ja:"酒母から引く", zh:"由酒母索藏" }, jp:"酒母索引",
      body:[
        { t:"p", text:{
          en:"Almost every sake made today begins with a starter that has lactic acid poured into it, because that is quick and it is safe. The houses below keep at least one standing bottle made the older way, with the acid grown rather than added — which takes twice as long and can fail. The list is short on purpose: it is short in the world too.",
          ja:"今日つくられるほとんどすべての酒は、乳酸を注ぎ入れた酒母から始まる。速く、そして安全だからである。下に挙げる蔵は、酸を加えるのではなく育てる古いやり方の定番を、少なくとも一本は持っている。倍の時日がかかり、失敗しうる方法である。この一覧が短いのは意図してのことではない——世のなかでも短いのである。",
          zh:"今日釀造的幾乎每一款酒，都從一個注入乳酸的酒母開始，因為那既快又安全。下方這些酒藏，至少有一款常態商品是以更古老的做法釀成——酸靠培養而非添加，耗時加倍，而且可能失敗。這份清單之所以短，並非刻意：它在現實世界裡也同樣短。" } },
        { t:"methodindex" },
        { t:"note", text:{
          en:"What the starters are, and why growing the acid takes a month rather than a fortnight, is on <a href=\"starters.html\">Starter Methods</a>. A bottle can of course be brewed this way without the house printing it on the label, so read this as a list of who says so, not a list of who does.",
          ja:"酒母とは何であり、酸を育てるのになぜ二週間ではなく一月を要するのかは<a href=\"starters.html\">酒母</a>に記した。むろん、蔵が酒標に刷らずにこの方法で仕込むことはありうる。これは、そうしていると述べている蔵の一覧であって、そうしている蔵の一覧ではない。",
          zh:"酒母是什麼，以及為何培養乳酸需要一個月而非兩週，記於<a href=\"starters.html\">酒母</a>。當然，酒藏也可能以此法釀造卻未印在酒標上。因此請把這份清單讀作「這麼說的酒藏」，而非「這麼做的酒藏」。" } }
      ] },

    { t:"note", label:{ en:"South of here", ja:"ここより南", zh:"再往南" }, text:{
      en:"Miyazaki, Kagoshima and Okinawa are left out of the last group not by oversight. Kagoshima has no sake brewery at all and has had none for a century; Miyazaki has a handful; Okinawa brews awamori, which is a different drink with a different history. <a href=\"region-kyushu.html\">Kyūshū &amp; Okinawa</a> explains why the line falls where it does, and <a href=\"shochu.html\">Shōchū &amp; Awamori</a> covers what is made there instead.",
      ja:"宮崎、鹿児島、沖縄が最後の群から外れているのは、見落としではない。鹿児島には清酒の蔵が一つもなく、一世紀にわたって存在しない。宮崎にはごくわずかある。沖縄が醸すのは泡盛であり、それは別の歴史を持つ別の酒である。線がなぜそこに引かれるかは<a href=\"region-kyushu.html\">九州と沖縄</a>に、その代わりに何が造られているかは<a href=\"shochu.html\">焼酎と泡盛</a>に記した。",
      zh:"宮崎、鹿兒島與沖繩之所以不在最後一組之內，並非疏漏。鹿兒島一家清酒酒藏也沒有，且已一個世紀如此；宮崎只有寥寥數家；沖繩釀的是泡盛，那是另一種有著另一段歷史的酒。這條線為何畫在此處，見<a href=\"region-kyushu.html\">九州與沖繩</a>；那裡改為釀造什麼，見<a href=\"shochu.html\">燒酎與泡盛</a>。" } },

    { t:"related", items:[
      { href:"brands.html", why:{ en:"What a brand is, and why it is not the brewery.", ja:"銘柄とは何であり、なぜ蔵と同じではないのか。", zh:"品牌是什麼，以及它為何不等於酒藏。" } },
      { href:"range.html", why:{ en:"How to read one house's lineup from top to bottom.", ja:"一つの蔵の品揃えを上から下まで読む方法。", zh:"如何從上到下讀懂一家酒藏的產品線。" } },
      { href:"regions.html", why:{ en:"The prefectures these houses sit in, one by one.", ja:"これらの蔵が置かれた県を、一つずつ。", zh:"這些酒藏所在的縣份，逐一列出。" } },
      { href:"label.html", why:{ en:"Finding the maker's name on the back of the bottle.", ja:"瓶の裏で造り手の名を見つける。", zh:"在瓶身背面找出製造者的名字。" } }
    ] }
  ]
};

/* =============================================================
   THE BOOK OF SAKE — Understanding
   15 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- -------------------------------------- classification */
SAKE.pages["classification"] = {
  kicker: { en: "Understanding · 01", ja: "理解 · 01", zh: "理解 · 01" },
  title:  { en: "Categories & Law", ja: "分類と法令", zh: "分類與法規" },
  jp: "特定名称酒 · tokutei meishōshu",
  lede: {
    en: "Japanese sake is classified by a labelling standard issued by the National Tax Agency in November 1989 and in force since April 1990. It defines eight <strong>special designations</strong> — <em>tokutei meishōshu</em> — using only verifiable facts: how far the rice was milled, what proportion of the rice was made into kōji, and whether distilled alcohol was added. No tasting panel is involved. Everything outside those eight is <em>futsūshu</em>, ordinary sake, which is still around two-thirds of all volume produced.",
    ja: "日本酒の分類は、平成元年十一月に国税庁が告示し、平成二年四月から施行されている「清酒の製法品質表示基準」による。この基準は八つの<strong>特定名称</strong>を、検証可能な事実——精米歩合、麹米の使用割合、醸造アルコールの添加の有無——のみによって定義する。審査員は関与しない。この八つに当てはまらないものはすべて普通酒であり、なお製造量のおよそ三分の二を占める。",
    zh: "日本酒的分類依據國稅廳於 1989 年 11 月公告、1990 年 4 月施行的《清酒製法品質標示基準》。此基準以八種<strong>特定名稱</strong>（特定名稱酒）為架構，僅依可查證的事實界定：米削去多少、多少比例的米製成米麴，以及是否添加釀造酒精。過程中沒有品評小組介入。不符合這八種者一律為普通酒，其產量至今仍約占總量的三分之二。"
  },
  body: [
    { t:"section", id:"axes",
      title:{ en:"Two axes, eight names", ja:"二つの軸と八つの名", zh:"兩個軸向，八個名稱" }, jp:"二軸構造",
      body:[
        { t:"p", text:{
          en:"The eight designations are not a ladder. They are a grid. One axis asks whether distilled alcohol was added at pressing; the other asks how far the rice was milled. Reading them as a ranking — the most common mistake in sake — makes the system incomprehensible; reading them as coordinates makes it trivial.",
          ja:"八つの特定名称は梯子ではなく、格子である。一方の軸は上槽時に醸造アルコールを添加したか否かを問い、他方の軸は精米歩合を問う。これを序列として読むこと——日本酒における最も一般的な誤り——は制度を不可解にし、座標として読めば自明にする。",
          zh:"八種特定名稱不是階梯，而是方格。一軸問的是上槽時是否添加釀造酒精，另一軸問的是米削到什麼程度。把它們讀成排名——這是關於日本酒最常見的誤解——會使制度變得難以理解；讀成座標，則一目了然。" } },

        { t:"figure",
          caption:{
            en:"The eight special designations as a grid. Down the page: how far the rice was polished and whether the ginjō method was used. Across: whether distilled alcohol was added. Anything that fails every row falls out of the system entirely and is sold as futsūshu.",
            ja:"八つの特定名称を格子として。縦は、米がどこまで磨かれたか、そして吟醸造りが用いられたか。横は、蒸留した酒精が加えられたか否か。いずれの行も満たさぬものは仕組みからすっかり外れ、普通酒として売られる。",
            zh:"把八種特定名稱畫成一張格子。縱向：米磨到什麼程度，以及是否採用吟釀造。橫向：有沒有添加蒸餾酒精。任何一行都不符合的，就完全落在這套制度之外，以普通酒販售。" },
          svg: function (lang, L) {
            var W = 760, H = 400, X = 214, CW = 246, TOP = 66, RH = 62;
            var heads = [
              { en: "Distilled alcohol added", ja: "醸造アルコール添加あり", zh: "有添加釀造酒精" },
              { en: "Rice, kōji and water only", ja: "米・麹・水のみ", zh: "只有米、麴與水" }
            ];
            var rows = [
              { c:{ en:"polished to 50% or less,\nginjō method", ja:"精米歩合五十以下・吟醸造り", zh:"精米步合五十以下・吟釀造" },
                a:{ n:"大吟醸酒", r:"daiginjō-shu" }, b:{ n:"純米大吟醸酒", r:"junmai daiginjō-shu" } },
              { c:{ en:"polished to 60% or less,\nginjō method", ja:"精米歩合六十以下・吟醸造り", zh:"精米步合六十以下・吟釀造" },
                a:{ n:"吟醸酒", r:"ginjō-shu" }, b:{ n:"純米吟醸酒", r:"junmai ginjō-shu" } },
              { c:{ en:"60% or less, or a\nspecial method declared", ja:"六十以下、あるいは特別な製造法の明示", zh:"六十以下，或標明特別製法" },
                a:{ n:"特別本醸造酒", r:"tokubetsu honjōzō-shu" }, b:{ n:"特別純米酒", r:"tokubetsu junmai-shu" } },
              { c:{ en:"70% or less (added-alcohol side only)", ja:"七十以下（添加のある側のみ）", zh:"七十以下（僅限有添加的一側）" },
                a:{ n:"本醸造酒", r:"honjōzō-shu" }, b:{ n:"純米酒", r:"junmai-shu" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            for (var h = 0; h < 2; h++) {
              var hx = X + h * CW;
              s += '<rect x="' + hx + '" y="' + (TOP - 42) + '" width="' + (CW - 8) + '" height="34" fill="' + (h ? "#EDE5D2" : "#E9ECEE") + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (hx + (CW - 8) / 2) + '" y="' + (TOP - 20) + '" text-anchor="middle" font-size="11" fill="#201E1B">' + L(heads[h]) + '</text>';
            }
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], y = TOP + i * RH;
              var lines = L(r.c).split("\n");
              for (var k = 0; k < lines.length; k++) {
                s += '<text x="' + (X - 16) + '" y="' + (y + 26 + (k - (lines.length - 1) / 2) * 14) + '" text-anchor="end" font-size="10.5" fill="#55504A">' + lines[k] + '</text>';
              }
              var cells = [r.a, r.b];
              for (var c = 0; c < 2; c++) {
                var cx = X + c * CW, dim = (i === 3 && c === 1);
                s += '<rect x="' + cx + '" y="' + y + '" width="' + (CW - 8) + '" height="' + (RH - 10) + '" fill="' + (c ? "#F5F3ED" : "#FBFAF7") + '" stroke="#CDC6B9"/>';
                s += '<text x="' + (cx + 14) + '" y="' + (y + 24) + '" font-size="14" fill="#201E1B">' + cells[c].n + '</text>';
                s += '<text x="' + (cx + 14) + '" y="' + (y + 40) + '" font-size="9.5" font-style="italic" fill="#8B857C">' + cells[c].r + '</text>';
                if (dim) s += '<text x="' + (cx + CW - 22) + '" y="' + (y + 40) + '" text-anchor="end" font-size="9" fill="#ADA79E">' +
                  (lang === "ja" ? "精米歩合の定めなし" : lang === "zh" ? "無精米步合要件" : "no polishing requirement") + '</text>';
              }
            }
            var by = TOP + 4 * RH + 6;
            s += '<rect x="' + X + '" y="' + by + '" width="' + (2 * CW - 8) + '" height="' + (RH - 18) + '" fill="#EFEDE7" stroke="#E1DCD2" stroke-dasharray="4 3"/>';
            s += '<text x="' + (X + 14) + '" y="' + (by + 20) + '" font-size="13" fill="#55504A">普通酒</text>';
            s += '<text x="' + (X + 76) + '" y="' + (by + 20) + '" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "上のいずれの条件も満たさぬもの。国内の生産量のおよそ三分の二である。"
                  : lang === "zh" ? "不符合上述任一條件者。約占日本國內產量的三分之二。"
                  : "meets none of the rows above — and is about two-thirds of what Japan makes") + '</text>';
            s += '<text x="' + (X - 16) + '" y="' + (by + 20) + '" text-anchor="end" font-size="10.5" fill="#8B857C">' +
                 (lang === "ja" ? "何も満たさぬとき" : lang === "zh" ? "什麼都不符合時" : "if nothing above is met") + '</text>';
            /* the two constants */
            s += '<text x="' + X + '" y="' + (H - 14) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "いずれの名も、麹歩合十五パーセント以上と、三等以上の検査を受けた米を要する。"
                  : lang === "zh" ? "以上每一個名稱，都要求麴步合百分之十五以上，且用米須經檢驗達三等以上。"
                  : "every name above also requires a kōji ratio of at least 15% and rice graded third class or better") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"html", text:{
          en:'<div class="matrix"><table><caption>The tokutei meishōshu grid</caption><thead><tr><th class="axis">Milling &nbsp;↓&nbsp; / &nbsp;Alcohol &nbsp;→</th><th>Rice, kōji and water only <span class="t-jp">純米系</span></th><th>+ brewer&rsquo;s alcohol, ≤10% of rice weight <span class="t-jp">アル添系</span></th></tr></thead><tbody><tr><td class="t-key">≤ 50% remaining<br><span class="muted">at least half the grain removed</span></td><td class="mx"><strong>Junmai Daiginjō</strong><span class="t-jp">純米大吟醸酒</span><span class="mx-d">Ginjō method required; aroma and colour must be &ldquo;particularly good&rdquo;.</span></td><td class="mx"><strong>Daiginjō</strong><span class="t-jp">大吟醸酒</span><span class="mx-d">Same milling; a measured alcohol addition to lift aroma and tighten the finish.</span></td></tr><tr><td class="t-key">≤ 60% remaining</td><td class="mx"><strong>Junmai Ginjō</strong><span class="t-jp">純米吟醸酒</span><span class="mx-d">Ginjō method required — slow, cold fermentation.</span></td><td class="mx"><strong>Ginjō</strong><span class="t-jp">吟醸酒</span><span class="mx-d">Ginjō method required.</span></td></tr><tr><td class="t-key">≤ 60% remaining <em>or</em> a declared special method</td><td class="mx"><strong>Tokubetsu Junmai</strong><span class="t-jp">特別純米酒</span><span class="mx-d">&ldquo;Special&rdquo; must be explained on the label — a rice variety, a starter method, wooden vats.</span></td><td class="mx"><strong>Tokubetsu Honjōzō</strong><span class="t-jp">特別本醸造酒</span><span class="mx-d">As above, on the alcohol-added side.</span></td></tr><tr><td class="t-key">≤ 70% remaining</td><td class="mx"><strong>—</strong><span class="mx-d">Junmai has had no milling requirement since the 2004 revision, but the actual ratio must still be printed.</span></td><td class="mx"><strong>Honjōzō</strong><span class="t-jp">本醸造酒</span><span class="mx-d">The entry point on the alcohol-added axis.</span></td></tr><tr><td class="t-key">No requirement</td><td class="mx"><strong>Junmai</strong><span class="t-jp">純米酒</span><span class="mx-d">Rice, kōji and water only. Milling ratio must be declared.</span></td><td class="mx"><strong>Futsūshu</strong><span class="t-jp">普通酒</span><span class="mx-d">Not a designation — simply everything that qualifies for none of the eight.</span></td></tr></tbody></table></div>',
          ja:'<div class="matrix"><table><caption>特定名称酒の二軸</caption><thead><tr><th class="axis">精米歩合 ↓ ／ アルコール →</th><th>米・米こうじ・水のみ <span class="t-jp">純米系</span></th><th>醸造アルコール添加（白米重量の10%以下） <span class="t-jp">アル添系</span></th></tr></thead><tbody><tr><td class="t-key">50%以下<br><span class="muted">粒の半分以上を削る</span></td><td class="mx"><strong>純米大吟醸酒</strong><span class="mx-d">吟醸造り。香味・色沢が特に良好であること。</span></td><td class="mx"><strong>大吟醸酒</strong><span class="mx-d">同じ精米歩合。香りを引き出し後味を締めるための計量された添加。</span></td></tr><tr><td class="t-key">60%以下</td><td class="mx"><strong>純米吟醸酒</strong><span class="mx-d">吟醸造り。低温での長期発酵。</span></td><td class="mx"><strong>吟醸酒</strong><span class="mx-d">吟醸造りであること。</span></td></tr><tr><td class="t-key">60%以下 又は 特別な製造方法</td><td class="mx"><strong>特別純米酒</strong><span class="mx-d">「特別」の内容をラベルに説明すること——米の品種、酒母の型、木桶仕込みなど。</span></td><td class="mx"><strong>特別本醸造酒</strong><span class="mx-d">アル添側における同上。</span></td></tr><tr><td class="t-key">70%以下</td><td class="mx"><strong>—</strong><span class="mx-d">純米酒は平成16年の改正以降、精米歩合の要件をもたない。ただし実際の数値の表示は必要。</span></td><td class="mx"><strong>本醸造酒</strong><span class="mx-d">アル添軸の入口。</span></td></tr><tr><td class="t-key">規定なし</td><td class="mx"><strong>純米酒</strong><span class="mx-d">米・米こうじ・水のみ。精米歩合の表示は必要。</span></td><td class="mx"><strong>普通酒</strong><span class="mx-d">特定名称ではない。八つのいずれにも該当しないもの、というだけの区分。</span></td></tr></tbody></table></div>',
          zh:'<div class="matrix"><table><caption>特定名稱酒的兩軸</caption><thead><tr><th class="axis">精米步合 ↓ ／ 酒精 →</th><th>僅米、米麴與水 <span class="t-jp">純米系</span></th><th>添加釀造酒精，≤ 白米重量 10% <span class="t-jp">アル添系</span></th></tr></thead><tbody><tr><td class="t-key">≤ 50%<br><span class="muted">削去半粒以上</span></td><td class="mx"><strong>純米大吟釀</strong><span class="t-jp">純米大吟醸酒</span><span class="mx-d">須為吟釀造；香味與色澤須「特別良好」。</span></td><td class="mx"><strong>大吟釀</strong><span class="t-jp">大吟醸酒</span><span class="mx-d">同等精米；以計量的添加提香並收束尾韻。</span></td></tr><tr><td class="t-key">≤ 60%</td><td class="mx"><strong>純米吟釀</strong><span class="t-jp">純米吟醸酒</span><span class="mx-d">須為吟釀造——低溫長期發酵。</span></td><td class="mx"><strong>吟釀</strong><span class="t-jp">吟醸酒</span><span class="mx-d">須為吟釀造。</span></td></tr><tr><td class="t-key">≤ 60% 或 申報之特別製法</td><td class="mx"><strong>特別純米</strong><span class="t-jp">特別純米酒</span><span class="mx-d">「特別」之內容須於標籤說明——米種、酒母工法、木桶仕込等。</span></td><td class="mx"><strong>特別本釀造</strong><span class="t-jp">特別本醸造酒</span><span class="mx-d">添加軸上的同類。</span></td></tr><tr><td class="t-key">≤ 70%</td><td class="mx"><strong>—</strong><span class="mx-d">純米自 2004 年修正後已無精米步合要件，惟仍須標示實際數值。</span></td><td class="mx"><strong>本釀造</strong><span class="t-jp">本醸造酒</span><span class="mx-d">添加軸的入門級。</span></td></tr><tr><td class="t-key">無規定</td><td class="mx"><strong>純米</strong><span class="t-jp">純米酒</span><span class="mx-d">僅米、米麴與水。須標示精米步合。</span></td><td class="mx"><strong>普通酒</strong><span class="t-jp">普通酒</span><span class="mx-d">並非特定名稱，只是「八者皆不符」的剩餘類別。</span></td></tr></tbody></table></div>'
        } },
        { t:"note", label:{en:"Reading the ratio",ja:"数値の読み方",zh:"數值的讀法"}, text:{
          en:"A milling ratio of 60% means 60% of each grain <em>remains</em> and 40% has been ground away. Lower numbers mean more milling. This is the reverse of how “polishing percentage” is often explained in English, and it is the single most common source of confusion.",
          ja:"精米歩合60%とは、粒の60%が<em>残っている</em>ことを指し、40%を削り落としたことを意味する。数字が小さいほどよく磨かれている。英語で “polishing percentage” を説明する際にしばしば逆に語られており、混乱の最大の源である。",
          zh:"精米步合 60% 指的是每粒米<em>剩下</em> 60%，削去了 40%。數字愈小，削得愈多。這與英文常見的 polishing percentage 說法恰好相反，也是最常見的混淆來源。" } }
      ]
    },

    { t:"section", id:"requirements",
      title:{ en:"The four conditions", ja:"四つの共通要件", zh:"四項共同要件" }, jp:"共通要件",
      body:[
        { t:"p", text:{
          en:"Every one of the eight designations must satisfy four conditions. Fail any one and the sake is legally <em>futsūshu</em>, no matter how it tastes or what it cost to make.",
          ja:"八つの特定名称はいずれも、四つの要件をすべて満たさなければならない。一つでも欠ければ、味がどうであれ、造りにいくらかけていようと、法的には普通酒である。",
          zh:"八種特定名稱皆須同時滿足四項要件。任一不符，無論風味如何、造價多高，法律上都是普通酒。" } },
        { t:"steps", items:[
          { title:{en:"Rice grade: third class or better",ja:"米の等級：三等以上",zh:"米的等級：三等以上"}, jp:"三等以上の玄米",
            meta:{en:"Agricultural Products Inspection Act",ja:"農産物検査法",zh:"農產物檢查法"},
            text:{en:"The brown rice used must be inspected and graded third class or better, or judged equivalent. This excludes off-grade rice (<em>tōgai-mai</em>), and is why some highly-regarded sake made from uninspected heirloom or contract-grown rice is sold as futsūshu despite being made to daiginjō standards.",
                  ja:"使用する玄米は、農産物検査法により三等以上に格付けされたもの、又はこれに相当するものでなければならない。等外米は除かれる。検査を受けていない在来品種や契約栽培米で造られた高評価の酒が、大吟醸の基準で造られていながら普通酒として売られるのはこのためである。",
                  zh:"所用糙米須經檢查並評為三等以上，或經認定為同等。等外米因此被排除。這也是為何某些以未受檢的在來品種或契作米釀成、實際依大吟釀標準製作的高評價酒，只能以普通酒販售。"} },
          { title:{en:"Kōji rice ratio at least 15%",ja:"麹米使用割合 15%以上",zh:"麴米使用比例 ≥ 15%"}, jp:"麹歩合",
            meta:{en:"weight of kōji rice ÷ total rice weight",ja:"麹米の重量 ÷ 総米重量",zh:"麴米重量 ÷ 總米重量"},
            text:{en:"At least fifteen parts in a hundred of all rice used must be made into kōji. This is the least discussed and arguably the most important requirement: it guarantees enough enzyme to saccharify properly and enough amino acid to give the sake body. Industrial futsūshu can go well below 15% and compensate with purchased enzyme preparations.",
                  ja:"使用する総米の百分の十五以上を麹にしなければならない。最も語られず、おそらく最も重要な要件である——十分な糖化力と、酒に厚みを与えるだけのアミノ酸を保証する。工業的な普通酒は15%を大きく下回り、市販の酵素剤で補うことができる。",
                  zh:"所用總米量中至少 15% 須製成米麴。這是最少被討論、卻可能最關鍵的要件：它保證足夠的糖化力，以及賦予酒體厚度的胺基酸。工業化普通酒可遠低於 15%，並以外購酵素製劑補足。"} },
          { title:{en:"A declared milling ratio",ja:"精米歩合の表示",zh:"標示精米步合"}, jp:"精米歩合",
            meta:{en:"weight of white rice ÷ weight of brown rice",ja:"白米の重量 ÷ 玄米の重量",zh:"白米重量 ÷ 糙米重量"},
            text:{en:"Any bottle carrying a designation must print the actual ratio. Note that the requirement to <em>print</em> it survives even where there is no requirement to <em>reach</em> a particular figure — junmai, since 2004, has no minimum, but must still declare what it did.",
                  ja:"特定名称を名乗る瓶には、実際の数値を表示しなければならない。特定の数値に<em>達する</em>要件がない場合でも、<em>表示する</em>義務は残る点に注意——純米酒は2004年以降、下限をもたないが、実際の数値の表示は必要である。",
                  zh:"凡標示特定名稱的酒瓶都必須印出實際數值。請注意，即使沒有「須達到」某一數值的要求，「須標示」的義務仍然存在——純米自 2004 年起無下限，但仍須申報實際數值。"} },
          { title:{en:"Added alcohol capped at 10% of white rice weight",ja:"醸造アルコールは白米重量の10%以下",zh:"添加酒精 ≤ 白米重量的 10%"}, jp:"醸造アルコール",
            meta:{en:"applies to the four alcohol-added designations only",ja:"アル添の四名称にのみ適用",zh:"僅適用於四種添加型名稱"},
            text:{en:"Brewer's alcohol is neutral spirit distilled from starch or sugar sources — in practice usually sugarcane molasses — diluted to about 30% before use. For a designated sake the addition is capped at a tenth of the white rice weight, roughly a tenth of what the general seishu definition would allow. Purpose: to draw aroma compounds into the liquid at pressing and to sharpen the finish, not to increase volume.",
                  ja:"醸造アルコールは、でんぷん質物又は含糖質物を原料として発酵・蒸留した中性のアルコールであり、実際にはサトウキビ糖蜜由来が多い。使用前に30%程度に希釈される。特定名称酒では添加量が白米重量の十分の一に制限され、清酒一般の定義が許す量のおよそ十分の一である。目的は上槽時に香気成分を液側へ引き出し、後味を締めることであって、量を増やすことではない。",
                  zh:"釀造酒精是以澱粉質或含糖質原料發酵蒸餾而得的中性酒精，實務上多來自甘蔗糖蜜，使用前稀釋至約 30%。特定名稱酒的添加量上限為白米重量的十分之一，約為清酒一般定義所允許量的十分之一。其目的在於上槽時將香氣成分萃取至液體並收束尾韻，而非增加產量。"} }
        ] },
        { t:"note", label:{en:"On the word ginjō",ja:"「吟醸」という語について",zh:"關於「吟釀」一詞"}, text:{
          en:"The four ginjō designations carry an additional, deliberately unquantified requirement: the sake must be made by <em>ginjō-zukuri</em> — brewed with particular care, fermented long at low temperature, having its characteristic aroma and good colour. This is the one place where the standard admits a qualitative judgement, and it is why a heavily-milled sake fermented warm and fast may not legally call itself ginjō.",
          ja:"吟醸系の四名称には、意図的に数値化されていない追加要件がある——「吟醸造り」、すなわち吟味して製造した清酒であり、低温で長期間発酵させ、固有の香味と良好な色沢を有すること。基準が定性的判断を認める唯一の箇所であり、よく磨いた米を高温で急速に発酵させた酒が法的に吟醸を名乗れない理由である。",
          zh:"四種吟釀系名稱另有一項刻意不予量化的要件：須為「吟釀造」——特別用心釀製、低溫長期發酵，並具備固有香味與良好色澤。這是整份基準中唯一容許定性判斷之處，也是為何高度精米卻以高溫快速發酵的酒，在法律上不能自稱吟釀。" } }
      ]
    },

    { t:"section", id:"futsushu",
      title:{ en:"Futsūshu: the two-thirds nobody discusses", ja:"普通酒——語られない三分の二", zh:"普通酒：無人談論的三分之二" }, jp:"普通酒",
      body:[
        { t:"p", text:{
          en:"Roughly two-thirds of all sake made in Japan carries no designation at all. <em>Futsūshu</em> is not a legal category with requirements; it is the residue — everything that does not qualify. It may use off-grade rice, less than 15% kōji, purchased enzymes, sugars, acids and amino-acid salts, and up to 50% of the rice weight in added alcohol.",
          ja:"日本で造られる清酒のおよそ三分の二は、特定名称をもたない。普通酒は要件をもつ法的区分ではなく、残余である——該当しないものすべて。等外米、15%未満の麹歩合、市販酵素剤、糖類・酸味料・アミノ酸塩、そして米重量の50%までのアルコール添加が可能である。",
          zh:"日本所釀清酒中約三分之二完全不帶特定名稱。普通酒不是一個有要件的法定類別，而是剩餘者——所有不符合條件的酒。它可使用等外米、低於 15% 的麴步合、外購酵素製劑、糖類、酸味料與胺基酸鹽，以及至多相當於米重 50% 的添加酒精。" } },
        { t:"p", text:{
          en:"That is the ceiling, not the norm. A great deal of futsūshu is honest, competent, warm-served everyday sake made by serious breweries who reserve the designations for their premium range — and much of the best value in Japan sits here. But because the label tells you almost nothing, futsūshu is the one part of the market where the brewery's own reputation is the only available signal.",
          ja:"それは上限であって常態ではない。普通酒の多くは、特定名称を上位の商品に留保している真面目な蔵が造る、誠実で確かな、燗にして日常に供される酒である。日本で最も値打ちのある酒の相当部分はここにある。ただしラベルがほとんど何も語らないため、普通酒は、蔵の評判だけが唯一の手がかりとなる領域でもある。",
          zh:"那是上限，不是常態。許多普通酒是認真的酒藏所釀、誠實而扎實、溫熱後日常飲用的酒，他們把特定名稱留給高階產品線；日本許多性價比最高的酒正落在此處。但由於標籤幾乎不透露任何資訊，普通酒也是市場上唯一只能仰賴酒藏自身聲譽作為判準的區塊。" } },
        { t:"grid", cols:3, cells:[
          { k:{en:"Share of volume",ja:"数量シェア",zh:"數量占比"}, v:"≈ 65 %", d:{en:"Futsūshu remains the majority of litres shipped, though its share falls every year.",ja:"出荷リットル数では依然として過半を占めるが、そのシェアは毎年下がっている。",zh:"以出貨公升數計仍為多數，惟占比逐年下降。"} },
          { k:{en:"Share of value",ja:"金額シェア",zh:"金額占比"}, v:"≈ 45 %", d:{en:"Designated sake commands far higher prices per litre, so the value split is much closer to even.",ja:"特定名称酒は一リットルあたりの単価がはるかに高いため、金額ベースではほぼ拮抗する。",zh:"特定名稱酒每公升單價高出許多，因此金額分布接近對半。"} },
          { k:{en:"Direction",ja:"趨勢",zh:"趨勢"}, v:{en:"falling",ja:"減少",zh:"下降"}, d:{en:"Junmai-type production has grown against a shrinking total; the industry is converting volume into value.",ja:"総量が縮小するなかで純米系の製造量は伸びている。産業は数量を価値へ転換しつつある。",zh:"在總量萎縮之際，純米型產量卻在成長；產業正將數量轉換為價值。"} }
        ] }
      ]
    },

    { t:"section", id:"labelstandard",
      title:{ en:"What must, may and may not appear", ja:"必要・任意・禁止", zh:"必載、任意與禁止" }, jp:"表示事項",
      body:[
        { t:"h3", text:{en:"Mandatory",ja:"必要記載事項",zh:"必要記載事項"} },
        { t:"table",
          cols:[{en:"Item",ja:"項目",zh:"項目"},{en:"On the label",ja:"表記",zh:"日文"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[1],
          rows:[
            [{en:"Category",ja:"品目",zh:"品目"},"清酒 / 日本酒",{en:"The legal product name. “Nihonshu” may be used only for sake meeting the nationwide GI.",ja:"法令上の品目名。「日本酒」の表示は全国区GIの要件を満たすものに限られる。",zh:"法定品目名稱。「日本酒」僅限符合全國性 GI 者使用。"}],
            [{en:"Ingredients",ja:"原材料名",zh:"原材料名"},"原材料名",{en:"In descending order of weight: 米（国産）, 米こうじ（国産米）, 醸造アルコール, and so on.",ja:"重量順に表示：米（国産）、米こうじ（国産米）、醸造アルコール等。",zh:"依重量遞減排列：米（國產）、米麴（國產米）、釀造酒精等。"}],
            [{en:"Alcohol content",ja:"アルコール分",zh:"酒精濃度"},"アルコール分",{en:"To the nearest degree, as a figure or a one-degree range.",ja:"1度単位。度数又は1度幅の範囲で表示。",zh:"以 1 度為單位，標示度數或一度區間。"}],
            [{en:"Volume",ja:"内容量",zh:"內容量"},"内容量",{en:"720 mL and 1,800 mL (<em>isshōbin</em>) are the two classic formats.",ja:"720mLと1,800mL（一升瓶）が古典的な二規格。",zh:"720 mL 與 1,800 mL（一升瓶）為兩種經典規格。"}],
            [{en:"Production date",ja:"製造時期",zh:"製造時期"},"製造時期",{en:"The month of bottling — not of brewing, and not an expiry date. Sake has no legal shelf-life.",ja:"瓶詰の時期であって醸造の時期ではなく、賞味期限でもない。清酒に法定の消費期限はない。",zh:"指裝瓶時期，而非釀造時期，也不是有效期限。清酒沒有法定保存期限。"}],
            [{en:"Producer and address",ja:"製造者名・所在地",zh:"製造者名稱與地址"},"製造者",{en:"For contract-brewed sake, the actual brewing site must be identifiable.",ja:"委託醸造の場合、実際の製造場が特定できる必要がある。",zh:"委託釀造者，其實際釀造場所須可辨識。"}],
            [{en:"Storage warning",ja:"保存又は飲用上の注意事項",zh:"保存或飲用注意事項"},"要冷蔵",{en:"Required where the product needs refrigeration — in practice, all unpasteurised <em>namazake</em>.",ja:"冷蔵を要する製品に必要。実務上、火入れをしていない生酒すべて。",zh:"需冷藏之產品必載。實務上即所有未經火入的生酒。"}],
            [{en:"Under-20 warning",ja:"未成年者の飲酒防止表示",zh:"未成年飲酒警語"},"20歳未満の者の飲酒は法律で禁止されている",{en:"Required on all alcoholic beverages sold in Japan.",ja:"日本国内で販売されるすべての酒類に必要。",zh:"於日本境內販售的所有酒類皆須標示。"}],
            [{en:"Designation and milling ratio",ja:"特定名称と精米歩合",zh:"特定名稱與精米步合"},"純米大吟醸酒 · 精米歩合40%",{en:"Claiming a designation is optional — but once claimed, the milling ratio must also be printed.",ja:"特定名称を名乗るか否かは任意。ただし名乗る場合は精米歩合の表示も必要。",zh:"是否標示特定名稱屬自願；一旦標示，則須同時印出精米步合。"}]
          ] },

        { t:"h3", text:{en:"Optional, and legally defined",ja:"任意記載事項（定義あり）",zh:"任意記載事項（有法定定義）"} },
        { t:"p", text:{
          en:"These terms may be used only if the sake actually satisfies their definition. They are the most useful words on a Japanese label, because each one names a concrete production decision.",
          ja:"以下の用語は、その定義を実際に満たす場合にのみ用いることができる。いずれも具体的な製造上の選択を指すため、日本語ラベルのなかで最も有用な語群である。",
          zh:"以下用語僅在酒確實符合其定義時方可使用。它們是日文酒標上最有用的詞彙，因為每一個都指向一項具體的製程決策。" } },
        { t:"defs", items:[
          { term:{en:"Genshu",ja:"原酒",zh:"原酒"}, jp:"原酒", def:{en:"No water added after pressing. Typically 17–20% alcohol against the usual 15–16%. The sake is not stronger by design; it simply has not been brought down.",ja:"上槽後に加水調整をしていないもの。通常15〜16%に対し、おおむね17〜20%。強く造ったのではなく、下げていないだけである。",zh:"上槽後未加水調整者。相對於一般 15–16%，通常為 17–20%。並非刻意釀得更烈，而只是沒有被稀釋。"} },
          { term:{en:"Namazake",ja:"生酒",zh:"生酒"}, jp:"生酒", def:{en:"Never pasteurised at any point. Enzymes and surviving microbes remain active, so the sake must be kept cold and changes quickly. Fresh, vivid, sometimes faintly effervescent when very young.",ja:"一度も火入れをしていないもの。酵素も残存微生物も活性のままであるため、冷蔵が必須で、変化が速い。若いうちは新鮮・鮮烈で、わずかに発泡することもある。",zh:"完全未經火入者。酵素與殘存微生物仍具活性，故須冷藏且變化迅速。極新鮮時鮮明活潑，偶帶些許氣泡感。"} },
          { term:{en:"Nama-chozōshu",ja:"生貯蔵酒",zh:"生貯藏酒"}, jp:"生貯蔵酒", def:{en:"Stored unpasteurised through maturation, then pasteurised once at bottling. Keeps much of nama freshness with far better stability.",ja:"火入れをせずに貯蔵し、瓶詰時に一度だけ火入れする。生の新鮮さを多く残しつつ、安定性は格段に高い。",zh:"以未火入狀態貯藏熟成，裝瓶時才火入一次。保留大部分生酒的鮮度，穩定性則好得多。"} },
          { term:{en:"Namazumeshu",ja:"生詰酒",zh:"生詰酒"}, jp:"生詰酒", def:{en:"Pasteurised once immediately after pressing, matured over summer, then bottled without a second pasteurisation. The classic form of autumn <em>hiyaoroshi</em>.",ja:"上槽直後に一度火入れして夏を越し、瓶詰時には火入れをしない。秋の「ひやおろし」の古典的な形。",zh:"上槽後隨即火入一次，越夏熟成後裝瓶時不再火入。秋季「冷卸」（ひやおろし）的經典形式。"} },
          { term:{en:"Taruzake",ja:"樽酒",zh:"樽酒"}, jp:"樽酒", def:{en:"Matured in wooden casks — almost always Yoshino cedar — long enough to carry the wood's aroma. The term describes the aroma transfer, not merely storage in wood.",ja:"木樽（ほぼ吉野杉）で貯蔵し、木の香りを付けたもの。単に木に入れたことではなく、香りの移行を指す語である。",zh:"以木樽（幾乎皆為吉野杉）貯藏至帶有木香者。此詞指的是香氣的轉移，而非僅僅存放於木器中。"} },
          { term:{en:"Kiippon",ja:"生一本",zh:"生一本"}, jp:"生一本", def:{en:"A junmai brewed entirely at a single site belonging to the producer — no blending in of sake bought from elsewhere. A guarantee of single origin in the literal sense.",ja:"自社の単一の製造場のみで醸造した純米酒。他所から購入した酒を混ぜていないことの保証であり、文字どおりの単一原産地表示である。",zh:"完全在生產者自有的單一製造場釀成的純米酒——不摻入外購之酒。字面意義上的單一產地保證。"} },
          { term:{en:"Shinshu / koshu",ja:"新酒・古酒",zh:"新酒・古酒"}, jp:"新酒 / 古酒", def:{en:"<em>Shinshu</em> is sake of the current brewing year; <em>koshu</em> is sake held over into a later year. Note that “koshu” as used commercially for deliberately long-aged sake — three years and beyond — is a trade convention rather than a statutory definition.",ja:"新酒は当造年度の酒、古酒は年を越した酒。なお、意図的な長期熟成（三年以上）を指す商業上の「古酒」は、法令上の定義ではなく業界の慣行である。",zh:"新酒指當釀造年度之酒，古酒指跨年存放者。須注意，商業上用以指稱刻意長期熟成（三年以上）的「古酒」屬業界慣例，並非法定定義。"} }
        ] },

        { t:"h3", text:{en:"Prohibited",ja:"表示禁止事項",zh:"禁止標示事項"} },
        { t:"ul", items:[
          { en:"Any of the eight designations, or a term resembling one, on sake that does not qualify — including <em>junmai</em> on anything containing added alcohol.",
            ja:"要件を満たさない清酒に、八つの特定名称又はこれに類似する用語を用いること。醸造アルコールを含むものへの「純米」の表示を含む。",
            zh:"於不符要件的清酒上使用八種特定名稱或近似用語，包括在含添加酒精者上標示「純米」。" },
          { en:"Superlatives and absolute quality claims — “best in Japan”, “finest”, “supreme” — and terms implying an official endorsement that has not been given.",
            ja:"「日本一」「最高」「絶対」等の最上級表現、及び受けていない官公庁等の推奨を示唆する表示。",
            zh:"「日本第一」「最高」「絕對」等最高級表述，以及暗示未曾獲得的官方推薦之用語。" },
          { en:"Place names suggesting an origin the sake does not have, including the names of protected GI districts.",
            ja:"実際の産地と異なる地名の表示。保護されたGI地域名を含む。",
            zh:"暗示非其實際來源的地名，包括受保護的 GI 產區名稱。" },
          { en:"The abolished grade names <em>tokkyū</em>, <em>ikkyū</em> and <em>nikyū</em>, which no longer exist in law.",
            ja:"廃止された「特級」「一級」「二級」の等級表示。法令上もはや存在しない。",
            zh:"已廢止的「特級」「一級」「二級」等級標示——法律上已不復存在。" }
        ] }
      ]
    },

    { t:"section", id:"outside",
      title:{ en:"Categories the law does not govern", ja:"法が定めない区分", zh:"法規未涵蓋的分類" }, jp:"法定外の区分",
      body:[
        { t:"p", text:{
          en:"Many of the words a shop uses to organise its shelves have no statutory definition at all. They are still meaningful — they describe real production choices — but nothing compels a producer to use them consistently.",
          ja:"酒販店が棚を整理するために使う語の多くには、法令上の定義がない。それでも意味はある——実在する製造上の選択を指しているからだ。ただし、造り手に一貫した使用を強いるものは何もない。",
          zh:"酒商用來整理貨架的許多詞彙，在法律上完全沒有定義。它們仍具意義——因為指涉真實的製程選擇——但沒有任何規定要求生產者一致地使用它們。" } },
        { t:"table",
          cols:[{en:"Term",ja:"用語",zh:"用語"},{en:"Japanese",ja:"表記",zh:"日文"},{en:"What it actually means",ja:"実際の意味",zh:"實際意義"}],
          jpCols:[1],
          rows:[
            [{en:"Muroka",ja:"無濾過",zh:"無濾過"},"無濾過",{en:"No activated-carbon filtration after pressing. Colour is fuller, aroma broader, texture heavier. Coarse mesh filtration still happens.",ja:"上槽後に活性炭素による濾過をしていないもの。色は濃く、香りは広く、質感は重い。粗い濾過は行われている。",zh:"上槽後未經活性碳過濾。色澤更飽滿、香氣更寬、口感更厚重。粗濾仍會進行。"}],
            [{en:"Nigorizake",ja:"にごり酒",zh:"濁酒"},"にごり酒",{en:"Pressed through a coarse mesh so rice solids remain. Legally still seishu because it is filtered — the distinction from <em>doburoku</em> is the act of straining, not the clarity of the result.",ja:"目の粗い布で漉し、米の固形分を残したもの。漉している以上は法的に清酒である。どぶろくとの違いは、結果の澄み具合ではなく漉すという行為にある。",zh:"以粗網過濾、保留米之固形物者。因確有過濾，法律上仍屬清酒；與濁醪的分野在於「過濾」此一行為，而非成品的澄清度。"}],
            [{en:"Kijōshu",ja:"貴醸酒",zh:"貴釀酒"},"貴醸酒",{en:"Finished sake replaces some of the water in the final mash addition. Yeast is inhibited by the alcohol already present, so much sugar survives. Dense, sweet, syrupy; ages superbly. Revived in 1973 from an Engishiki-era method.",ja:"仕込みの最終段の水の一部を、完成した清酒で置き換える。既存のアルコールが酵母を抑えるため糖が多く残る。濃密で甘く、とろみがあり、熟成に極めて強い。延喜式期の技法を1973年に復活させたもの。",zh:"以成酒取代最終段仕込中的部分水。既存酒精抑制酵母，因而留下大量糖分。濃稠、甘美、帶糖漿質地，極耐陳年。1973 年自延喜式時代的技法復原而來。"}],
            [{en:"Sparkling",ja:"発泡性",zh:"氣泡"},"発泡清酒",{en:"Three routes: bottle-conditioned secondary fermentation, in-tank fermentation under pressure, or injected CO₂. Alcohol ranges from about 5% to full strength.",ja:"経路は三つ——瓶内二次発酵、密閉タンク内発酵、炭酸ガス注入。アルコール分は5%程度から通常度数まで。",zh:"三種途徑：瓶內二次發酵、密閉槽內發酵，或注入二氧化碳。酒精自約 5% 至正常度數不等。"}],
            [{en:"Kimoto / yamahai",ja:"生酛・山廃",zh:"生酛・山廢"},"生酛 / 山廃",{en:"Starter methods relying on ambient lactic acid bacteria rather than added lactic acid. Not designations, but production facts usually declared prominently.",ja:"乳酸添加によらず、環境中の乳酸菌に依拠する酒母法。特定名称ではないが、通常は目立つ形で明示される製造上の事実である。",zh:"仰賴環境乳酸菌而非添加乳酸的酒母工法。並非特定名稱，但通常會被醒目標示的製程事實。"}],
            [{en:"Ki-oke jikomi",ja:"木桶仕込み",zh:"木桶仕込"},"木桶仕込み",{en:"Fermented in wooden vats rather than enamel or stainless steel. Reintroduces a resident microflora and a slower thermal response; a deliberate return to pre-1923 conditions.",ja:"琺瑯やステンレスではなく木桶で発酵させること。蔵付きの微生物相と、温度変化の緩やかさを呼び戻す。1923年以前の条件への意図的な回帰である。",zh:"以木桶而非琺瑯或不鏽鋼槽發酵。重新引入常駐微生物相與較遲緩的溫度反應；是對 1923 年以前條件的刻意回歸。"}],
            [{en:"Shizuku / fukurodzuri",ja:"雫・袋吊り",zh:"雫・袋吊"},"雫取り / 袋吊り",{en:"The mash is hung in bags and only free-run liquid is collected, with no pressure at all. Reserved for competition entries and top cuvées. See <a href=\"pressing.html\">Pressing &amp; Finishing</a>.",ja:"醪を袋に入れて吊るし、圧力をかけずに滴り落ちる液のみを集める。鑑評会出品酒や最上位の商品に限られる。<a href=\"pressing.html\">上槽と調整</a>を参照。",zh:"將醪裝袋懸吊，完全不加壓，只收集自然滴落的液體。僅用於鑑評會參賽酒與頂級品項。參見<a href=\"pressing.html\">上槽與調整</a>。"}]
          ] }
      ]
    },

{ t:"section", id:"what-it-hides",
      title:{ en:"What a designation does not tell you", ja:"特定名称が語らないこと", zh:"特定名稱不會告訴你的事" }, jp:"分類の限界",
      body:[
        { t:"p", text:{
          en:"The eight special designations encode exactly two variables: how much of the grain was milled away, and whether distilled alcohol was added. That is a remarkably thin description of a drink, and almost everything that distinguishes one bottle from another is outside it.",
          ja:"八つの特定名称が符号化しているのは、正確に二つの変数のみである——粒がどれだけ削られたか、そして醸造アルコールが加えられたか否か。飲み物の記述としては驚くほど薄く、ある瓶を他から分かつもののほとんどすべては、その外にある。",
          zh:"八種特定名稱編碼的其實只有兩個變因：米粒被磨掉了多少，以及是否添加了蒸餾酒精。作為對一種飲品的描述，這薄得驚人；而區分一支酒與另一支酒的幾乎一切，都落在這之外。" } },

        { t:"table",
          cols:[{en:"Variable",ja:"変数",zh:"變因"},{en:"In the designation?",ja:"名称に含まれるか",zh:"包含在名稱中嗎"},{en:"How much it matters",ja:"どれだけ効くか",zh:"影響有多大"}],
          rows:[
            [{en:"Polishing ratio",ja:"精米歩合",zh:"精米步合"},{en:"Yes",ja:"含まれる",zh:"是"},
             {en:"Real, and smaller than the price difference implies. Below about 50% the returns diminish sharply, and a well-made 60% junmai routinely outdrinks a mediocre 35% daiginjō.",
              ja:"実在するが、価格差が示唆するより小さい。およそ50%を下回ると効果は急激に逓減し、よく造られた60%の純米が凡庸な35%の大吟醸を上回ることは日常的である。",
              zh:"影響真實存在，但小於價差所暗示的程度。低於約 50% 之後報酬急遽遞減，一支做得好的 60% 純米，時常勝過平庸的 35% 大吟釀。"}],
            [{en:"Alcohol addition",ja:"アルコール添加",zh:"添加酒精"},{en:"Yes",ja:"含まれる",zh:"是"},
             {en:"Real, and widely misread. A capped addition lifts aroma and lightens the body; it is a technique, not a cost-cutting measure, and most competition gold medals go to alcohol-added daiginjō.",
              ja:"実在するが、広く誤読されている。上限内の添加は香りを持ち上げ、酒躯を軽くする。原価を下げる手ではなく技法であり、鑑評会の金賞の多くはアル添の大吟醸に与えられている。",
              zh:"影響真實存在，卻被廣泛誤讀。有上限的添加會提香、讓酒體變輕；那是技法而非降低成本的手段，而且鑑評會的金賞多半頒給添加酒精的大吟釀。"}],
            [{en:"Starter method",ja:"酒母の型",zh:"酒母工法"},{en:"No",ja:"含まれない",zh:"否"},
             {en:"Very large. Kimoto or yamahai versus sokujō changes acidity, structure and how the sake behaves warm, more than a fifteen-point difference in polishing does.",
              ja:"きわめて大きい。生酛・山廃と速醸の別は、酸、骨格、燗での振る舞いを変える。精米歩合の十五ポイントの差より大きく変える。",
              zh:"影響非常大。生酛或山廢對比速釀，會改變酸度、結構與溫飲時的表現，其幅度大於精米步合相差十五個百分點。"}],
            [{en:"Yeast",ja:"酵母",zh:"酵母"},{en:"No",ja:"含まれない",zh:"否"},
             {en:"Very large. The choice between a high-ester strain and a quiet one is most of what a drinker perceives as the sake's aroma, and none of it appears in the designation.",
              ja:"きわめて大きい。高エステルの株か静かな株かの選択が、飲み手の知覚する香りの大半であり、そのいずれも名称には現れない。",
              zh:"影響非常大。選擇高酯類菌株還是安靜的菌株，決定了飲者所感知之香氣的大半；而這一切都不出現在名稱中。"}],
            [{en:"Water",ja:"水",zh:"水"},{en:"No",ja:"含まれない",zh:"否"},
             {en:"Large, and invisible. Hard water gives a firm, dry fermentation; soft water a slow, round one. Two junmai ginjō with identical labels can sit at opposite ends of this axis.",
              ja:"大きく、そして目に見えない。硬水は締まった辛口の発酵を、軟水は緩く丸い発酵を与える。同一のラベルを持つ二本の純米吟醸が、この軸の両端に位置しうる。",
              zh:"影響大，卻看不見。硬水給出結實、偏辛的發酵，軟水給出緩慢、圓潤的發酵。兩支酒標完全相同的純米吟釀，可能分處這條軸線的兩端。"}],
            [{en:"Pressing method",ja:"上槽の方法",zh:"上槽方式"},{en:"No",ja:"含まれない",zh:"否"},
             {en:"Moderate. A drip-pressed bottle and a machine-pressed one from the same tank differ audibly, and only a voluntary label term will tell you which you have.",
              ja:"中程度。同じタンクの雫搾りと機械搾りは明瞭に異なるが、それを告げるのは任意の表示用語だけである。",
              zh:"影響中等。同一槽酒的雫取與機器壓榨版本差異明顯，但唯有自願標示的用語才會告訴你手上是哪一種。"}],
            [{en:"Age and storage",ja:"熟成と保存",zh:"熟成與保存"},{en:"No",ja:"含まれない",zh:"否"},
             {en:"Potentially decisive. A daiginjō stored warm for two years is a worse drink than a futsūshu bottled last month, and the designation says nothing about either.",
              ja:"時に決定的である。二年暖かい場所に置かれた大吟醸は、先月詰められた普通酒より劣った飲み物であり、名称はそのいずれについても何も語らない。",
              zh:"有時具決定性。一支在溫暖環境放了兩年的大吟釀，會比上個月才裝瓶的普通酒更難喝；而名稱對兩者都隻字未提。"}],
            [{en:"Intended temperature",ja:"想定される温度",zh:"設想的飲用溫度"},{en:"No",ja:"含まれない",zh:"否"},
             {en:"Large. A sake built for 45 °C and one built for 10 °C are different products, and neither the designation nor usually the label distinguishes them. Asking the shop is the only reliable route.",
              ja:"大きい。45℃のために造られた酒と10℃のために造られた酒は別の商品であり、名称も、通常はラベルも、両者を区別しない。確かな道は店に尋ねることだけである。",
              zh:"影響大。為 45 °C 而釀的酒與為 10 °C 而釀的酒是兩種產品，而名稱、通常連酒標，都不加以區分。唯一可靠的方法是問店家。"}]
          ] },

        { t:"note", text:{
          en:"The practical conclusion is not that the designations are useless — they are the most reliable thing on a label and they are legally enforced. It is that they are a floor rather than a description. Use them to rule things out, then use the brewery, the voluntary terms and the shopkeeper to choose.",
          ja:"実際的な結論は、特定名称が無用だということではない。ラベル上で最も信頼でき、法的に担保されている。そうではなく、それらは記述ではなく下限だということである。除外するために用い、選ぶためには蔵と任意表示と店主を用いるとよい。",
          zh:"實際的結論不是「特定名稱沒有用」——它是酒標上最可靠的東西，且受法律強制。而是：它們是一道下限，不是一份描述。用它們來排除選項，再用酒藏、自願標示與店主來做選擇。" } }
      ] },

    { t:"section", id:"decision",
      title:{ en:"A decision path in a shop", ja:"店での判断の道筋", zh:"在店裡的判斷路徑" }, jp:"選び方",
      body:[
        { t:"p", text:{
          en:"Given all of that, here is the order that actually works when you are standing in front of two hundred bottles with ten minutes.",
          ja:"以上を踏まえたうえで、二百本の前に十分だけ立っているときに実際に働く順序は、以下である。",
          zh:"考慮上述一切之後，當你只有十分鐘、站在兩百支酒面前時，真正管用的順序如下。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Decide the temperature first", ja:"まず温度を決める", zh:"先決定溫度" }, jp:"温度", romaji:"ondo",
            meta:{ en:"This eliminates half the wall", ja:"これで壁の半分が消える", zh:"這能刷掉半面牆" },
            text:{ en:"If you intend to drink it cold, you are shopping in the ginjō and nama half of the shop. If you intend to warm it, you are shopping among junmai, honjōzō, kimoto and yamahai, and an expensive daiginjō is actively the wrong purchase. Nothing else narrows the field as fast.",
              ja:"冷やして飲むつもりなら、探すべきは吟醸と生酒の側である。燗にするつもりなら、純米、本醸造、生酛、山廃のあいだであり、高価な大吟醸は積極的に誤った買い物である。これほど速く選択肢を狭める問いは他にない。",
              zh:"如果打算冰著喝，你要找的是店裡吟釀與生酒的那一半；如果打算溫熱著喝，你要找的是純米、本釀造、生酛與山廢，而昂貴的大吟釀正是錯誤的選擇。沒有別的問題能這麼快縮小範圍。" } },
          { n:"2", title:{ en:"Set a ceiling, out loud", ja:"上限を声に出す", zh:"把上限說出口" }, jp:"予算", romaji:"yosan",
            meta:{ en:"Then ignore the category above it", ja:"それより上の区分は見ない", zh:"然後別再看它之上的類別" },
            text:{ en:"The designation ladder tracks price closely, so a stated budget effectively selects the designation for you. Below the mid band you are choosing between honjōzō and junmai; above it, between ginjō and daiginjō. Neither range is better; they are different trade-offs.",
              ja:"名称の階梯は価格とよく相関するから、予算を告げれば、名称は事実上そちらが選んでくれる。中位より下では本醸造と純米のあいだ、上では吟醸と大吟醸のあいだの選択となる。いずれの帯が優れているのでもない。取引の内容が異なるだけである。",
              zh:"名稱的階梯與價格高度相關，因此說出預算，等於替你選好了名稱。中價位以下是在本釀造與純米之間選；以上則是在吟釀與大吟釀之間選。兩個區間沒有優劣，只是權衡不同。" } },
          { n:"3", title:{ en:"Read the back label, not the front", ja:"表ではなく裏を読む", zh:"讀背標，不是正面" }, jp:"裏ラベル", romaji:"ura-label",
            meta:{ en:"Ingredients and date", ja:"原材料と製造年月", zh:"原材料與製造年月" },
            text:{ en:"Two lines carry most of the remaining information: the ingredient list, which tells you whether alcohol or anything else was added, and the manufacturing date. A bottle more than about eighteen months old that is not a koshu is a bottle the shop has failed to sell, and usually one that has been sitting warm.",
              ja:"残る情報の大半は二行が担う——添加の有無を告げる原材料名と、製造年月である。古酒でないのに十八か月ほどを超えた瓶は、店が売り損ねた瓶であり、たいてい暖かい場所に置かれてきた瓶でもある。",
              zh:"其餘資訊大半由兩行承載：告訴你是否有添加物的原材料欄，以及製造年月。一支不是古酒、卻已超過約十八個月的酒，是店家沒賣掉的酒，而且通常也是一直被放在溫暖處的酒。" } },
          { n:"4", title:{ en:"Then ask a person", ja:"そして人に尋ねる", zh:"然後問人" }, jp:"店主に", romaji:"tenshu ni",
            meta:{ en:"Everything the label omits", ja:"ラベルが省いたすべて", zh:"酒標省略的一切" },
            text:{ en:"Starter method, yeast, water, intended temperature, whether the brewery is any good this year: none of it is on the bottle and all of it is in the shopkeeper's head. Give them the meal, the budget and one bottle you have liked, and the remaining choice is theirs to make better than yours.",
              ja:"酒母の型、酵母、水、想定される温度、その蔵が今年よい出来かどうか——いずれも瓶にはなく、いずれも店主の頭のなかにある。料理と予算と、気に入った一本を告げれば、残りの選択は、あなたより店主のほうがうまく行える。",
              zh:"酒母工法、酵母、水、設想的飲用溫度、這家酒藏今年狀況好不好——這些瓶身上都沒有，卻全在店主腦子裡。告訴他們要配什麼菜、預算多少，以及一支你喜歡過的酒，剩下的選擇由他們來做，會比你自己做得更好。" } }
        ] }
      ] },

    { t:"related", items:[
      { href:"label.html", why:{ en:"The same rules as they appear on an actual bottle.", ja:"同じ規則を、実際の瓶の上に現れるままに。", zh:"同樣的規則，出現在一支真實酒瓶上的樣子。" } },
      { href:"standards.html", why:{ en:"The notifications and statutes the categories come from.", ja:"区分の出どころである告示と法。", zh:"這些分類的出處：告示與法律。" } },
      { href:"milling.html", why:{ en:"The number the whole ladder is built on.", ja:"この梯子の全体が立つ一つの数。", zh:"整座階梯所立基的那一個數字。" } },
      { href:"styles.html", why:{ en:"The categories the law does not name, and drinkers do.", ja:"法が名づけず、飲み手が名づける区分。", zh:"法律沒有命名、而飲者有命名的那些類型。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- label */
SAKE.pages["label"] = {
  kicker: { en: "Understanding · 02", ja: "理解 · 02", zh: "理解 · 02" },
  title:  { en: "Reading a Label", ja: "表示の読み方", zh: "酒標判讀" },
  jp: "ラベル · 表 · 裏",
  lede: {
    en: "A Japanese sake label carries more verifiable information than almost any wine label — designation, milling ratio, rice variety, yeast strain, pressing fraction, pasteurisation history, sometimes the exact fermentation dates. Almost none of it is in English. This page is a working key: what to look for, in what order, and which characters to recognise.",
    ja: "日本酒のラベルは、ほとんどのワインラベルよりも多くの検証可能な情報を載せている——特定名称、精米歩合、使用米、酵母、搾りの部位、火入れの履歴、時には発酵の日付まで。そのほとんどは英語では書かれていない。本頁はその実用的な鍵である——何を、どの順で見るか、そしてどの文字を見分けるか。",
    zh: "日本酒的酒標所載可查證資訊，比幾乎任何葡萄酒標都多——特定名稱、精米步合、使用米種、酵母菌株、搾取段別、火入履歷，有時甚至包括確切的發酵日期。而這些幾乎都不是英文。本頁是一份實用的鑰匙：該看什麼、依什麼順序看，以及該認得哪些字。"
  },
  body: [
    { t:"section", id:"order",
      title:{ en:"Four questions, in order", ja:"四つの問い、その順序", zh:"四個問題，依序而問" }, jp:"読む順",
      body:[
        { t:"steps", items:[
          { title:{en:"Is it fresh, and does it need to be?",ja:"新しいか。新しくある必要があるか",zh:"它新鮮嗎？它需要新鮮嗎？"},
            meta:{en:"製造年月 · 要冷蔵 · 生",ja:"製造年月・要冷蔵・生",zh:"製造年月・要冷藏・生"},
            text:{en:"Find the production date first. If the label also says 生 (nama) or 要冷蔵 (refrigerate), the sake is unpasteurised and the date matters enormously — three months is fine, a year on a warm shelf is not. If neither appears, the sake is pasteurised and a date two years old is not in itself a problem.",
                  ja:"まず製造年月を探す。ラベルに「生」または「要冷蔵」とあれば、それは火入れをしていない酒であり、日付の重みは決定的である——三か月なら問題ないが、常温の棚で一年は問題である。いずれもなければ火入れ済みであり、二年前の日付それ自体は問題ではない。",
                  zh:"先找製造年月。若標籤同時寫著「生」或「要冷藏」，表示未經火入，日期就極其關鍵——三個月無妨，在常溫貨架上放一年則不然。若兩者皆無，表示已火入，兩年前的日期本身並不構成問題。"} },
          { title:{en:"What is the designation?",ja:"特定名称は何か",zh:"特定名稱為何？"},
            meta:{en:"純米 · 吟醸 · 大吟醸 · 本醸造",ja:"純米・吟醸・大吟醸・本醸造",zh:"純米・吟釀・大吟釀・本釀造"},
            text:{en:"This tells you whether alcohol was added and roughly how far the rice was milled — the two axes of the legal grid. If no designation appears anywhere, it is futsūshu, and the label will tell you very little more.",
                  ja:"これによって、醸造アルコールが添加されているか、そして米がおおよそどこまで磨かれているかが分かる——法定の格子をなす二つの軸である。どこにも特定名称がなければ普通酒であり、ラベルからこれ以上分かることはほとんどない。",
                  zh:"它告訴你是否添加了釀造酒精，以及米大致削到什麼程度——即法定方格的兩個軸向。若任何處都不見特定名稱，那就是普通酒，標籤能再告訴你的東西極其有限。"} },
          { title:{en:"What was done at pressing and after?",ja:"上槽以降に何をしたか",zh:"上槽之後做了什麼？"},
            meta:{en:"無濾過 · 原酒 · 中取り · 一回火入れ",ja:"無濾過・原酒・中取り・一回火入れ",zh:"無濾過・原酒・中取・一回火入"},
            text:{en:"These are the words that predict texture and weight far better than the designation does. <em>Muroka nama genshu</em> — unfiltered, unpasteurised, undiluted — is a specific and consistent style: dense, vivid, 17–19% alcohol, and it will taste nothing like the same brewery's standard bottling.",
                  ja:"酒の質感と重みを、特定名称よりもはるかによく予告する語群である。「無濾過生原酒」——濾過せず、火入れせず、加水せず——は具体的で一貫した酒質を指す。濃密で鮮烈、アルコール17〜19%であり、同じ蔵の標準品とはまるで違う味がする。",
                  zh:"這些詞對口感與厚度的預測力，遠勝於特定名稱。「無濾過生原酒」——不過濾、不火入、不加水——是一種具體而一致的風格：濃密、鮮明、酒精 17–19%，嚐起來與同一酒藏的標準品完全不同。"} },
          { title:{en:"What are the raw materials?",ja:"原料は何か",zh:"原料為何？"},
            meta:{en:"使用米 · 精米歩合 · 使用酵母",ja:"使用米・精米歩合・使用酵母",zh:"使用米・精米步合・使用酵母"},
            text:{en:"Rice variety and yeast strain, usually on the back. These are the strongest single predictors of aroma and structure once you know a few of them — a 1801 yeast will smell of apple whatever else is happening, and an Omachi will have weight whatever the milling ratio says.",
                  ja:"使用米と酵母は、多くの場合裏ラベルにある。いくつか覚えてしまえば、香りと骨格を予測する最も強い単一の手がかりとなる——1801号酵母なら他が何であれリンゴの香りがするし、雄町なら精米歩合が何であれ厚みがある。",
                  zh:"米種與酵母，通常印在背標。一旦記住幾種，它們就是香氣與結構最強的單一預測指標——用 1801 號酵母，無論其他如何都會有蘋果香；用雄町，無論精米步合如何都會有厚度。"} }
        ] }
      ]
    },

    { t:"section", id:"characters",
      title:{ en:"Characters worth knowing", ja:"覚えておきたい文字", zh:"值得認得的字" }, jp:"用字",
      body:[
        { t:"h3", text:{en:"Designations",ja:"特定名称",zh:"特定名稱"} },
        { t:"table",
          cols:[{en:"On the label",ja:"表記",zh:"標示"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"Means",ja:"意味",zh:"意義"}],
          jpCols:[0],
          rows:[
            ["純米","junmai",{en:"Rice, kōji and water only. No added alcohol.",ja:"米・米こうじ・水のみ。醸造アルコール無添加。",zh:"僅米、米麴與水。未添加釀造酒精。"}],
            ["本醸造","honjōzō",{en:"A measured alcohol addition; rice milled to 70% or less.",ja:"計量された醸造アルコール添加。精米歩合70%以下。",zh:"經計量的釀造酒精添加；精米步合 70% 以下。"}],
            ["吟醸","ginjō",{en:"Milled to 60% or less, fermented long and cold.",ja:"精米歩合60%以下、低温長期発酵。",zh:"精米步合 60% 以下，低溫長期發酵。"}],
            ["大吟醸","daiginjō",{en:"Milled to 50% or less.",ja:"精米歩合50%以下。",zh:"精米步合 50% 以下。"}],
            ["特別","tokubetsu",{en:"“Special” — a declared method or extra milling; the reason must be stated.",ja:"「特別」——特別な製造方法か、さらなる精米。理由の表示が必要。",zh:"「特別」——申報之特殊製法或更深精米；須說明理由。"}],
            ["普通酒","futsūshu",{en:"No designation. Rarely printed; usually simply absent.",ja:"特定名称なし。表示されることは少なく、通常は単に何も書かれていない。",zh:"無特定名稱。少有明印，通常只是什麼都不寫。"}]
          ] },
        { t:"h3", text:{en:"Production and handling",ja:"製法と扱い",zh:"製法與處理"} },
        { t:"table",
          cols:[{en:"On the label",ja:"表記",zh:"標示"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"Means",ja:"意味",zh:"意義"}],
          jpCols:[0],
          rows:[
            ["生酒 · 生","namazake",{en:"Never pasteurised. Keep cold, drink soon.",ja:"一度も火入れをしていない。冷蔵し、早く飲む。",zh:"完全未火入。須冷藏、盡早飲用。"}],
            ["生貯蔵酒","nama-chozōshu",{en:"Stored raw, pasteurised once at bottling.",ja:"生のまま貯蔵し、瓶詰時に一度火入れ。",zh:"以生酒狀態貯藏，裝瓶時火入一次。"}],
            ["生詰酒","namazumeshu",{en:"Pasteurised once after pressing, bottled without a second heating.",ja:"上槽後に一度火入れし、瓶詰時には火入れせず。",zh:"上槽後火入一次，裝瓶時不再加熱。"}],
            ["原酒","genshu",{en:"Undiluted. Usually 17–20%.",ja:"加水していない。通常17〜20%。",zh:"未加水。通常 17–20%。"}],
            ["無濾過","muroka",{en:"No carbon filtration. Fuller colour, broader flavour.",ja:"炭素濾過をしていない。色は濃く、味は広い。",zh:"未經活性碳過濾。色澤更深，風味更寬。"}],
            ["しぼりたて","shiboritate",{en:"Just pressed. Released within weeks; fresh and often gassy.",ja:"搾りたて。数週間で出荷され、新鮮でガスを含むことが多い。",zh:"剛搾出。數週內出貨，鮮活且常帶氣。"}],
            ["中取り · 中汲み","nakadori · nakagumi",{en:"The middle fraction of the press — the cleanest and best-balanced.",ja:"上槽の中間部分——最も清く、最も均衡がとれている。",zh:"上槽的中段——最潔淨、最均衡。"}],
            ["荒走り","arabashiri",{en:"The first free run — cloudy, sharp, high-toned.",ja:"最初に自然に流れ出る部分——濁り、鋭く、音域が高い。",zh:"最初自然流出的部分——混濁、銳利、音域高。"}],
            ["袋吊り · 雫","fukurozuri · shizuku",{en:"Drip-collected without pressure. Top cuvées only.",ja:"圧をかけず滴りを集めたもの。最上位の商品に限られる。",zh:"不加壓、僅收集滴落之液。僅限頂級品項。"}],
            ["直汲み","jikagumi",{en:"Taken straight from the press into the bottle, keeping dissolved CO₂.",ja:"槽口から直接瓶に汲み、溶存炭酸を残したもの。",zh:"自搾機直接汲入瓶中，保留溶存二氧化碳。"}],
            ["おりがらみ","origarami",{en:"Fine lees deliberately left in. Slightly hazy, creamy.",ja:"細かな滓をあえて残したもの。わずかに霞み、まろやか。",zh:"刻意保留細澱。略帶霧感，口感綿密。"}],
            ["生酛 · 山廃","kimoto · yamahai",{en:"Ambient-lactic starter methods. Higher acid, more savoury depth.",ja:"野生の乳酸菌による酒母法。酸が高く、滋味が深い。",zh:"以野生乳酸菌製作酒母的工法。酸度較高，旨味更深。"}],
            ["木桶仕込","kioke jikomi",{en:"Fermented in wooden vats.",ja:"木桶で仕込んだもの。",zh:"以木桶仕込發酵。"}],
            ["ひやおろし · 秋あがり","hiyaoroshi · akiagari",{en:"Pasteurised once in spring, rested over summer, released in autumn.",ja:"春に一度火入れし、夏を越して秋に出荷されるもの。",zh:"春季火入一次，越夏靜置，秋季出貨。"}],
            ["長期熟成 · 古酒","chōki jukusei · koshu",{en:"Deliberately aged, three years or more.",ja:"意図的に三年以上熟成させたもの。",zh:"刻意陳放三年以上者。"}],
            ["貴醸酒","kijōshu",{en:"Brewed with sake in place of some of the water. Sweet and dense.",ja:"仕込み水の一部を清酒に置き換えて醸したもの。甘く濃密。",zh:"以清酒取代部分仕込水釀成。甘美濃密。"}],
            ["にごり","nigori",{en:"Coarsely filtered, rice solids left in.",ja:"粗く漉し、米の固形分を残したもの。",zh:"粗濾，保留米之固形物。"}],
            ["発泡 · スパークリング","happō · sparkling",{en:"Carbonated, by bottle fermentation or otherwise.",ja:"瓶内発酵などにより炭酸を含むもの。",zh:"含碳酸者，以瓶內發酵或其他方式製成。"}]
          ] },
        { t:"h3", text:{en:"Data fields on the back",ja:"裏ラベルの項目",zh:"背標欄位"} },
        { t:"table",
          cols:[{en:"Field",ja:"項目",zh:"欄位"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"What it tells you",ja:"読み取れること",zh:"可讀出的資訊"}],
          jpCols:[0],
          rows:[
            ["原材料名","genzairyō-mei",{en:"Ingredients. If 醸造アルコール appears, alcohol was added; if only 米・米こうじ, it is junmai-type.",ja:"原材料。「醸造アルコール」があれば添加あり、「米・米こうじ」のみなら純米系。",zh:"原料。若出現「釀造酒精」即為添加型；若僅「米・米麴」則屬純米系。"}],
            ["精米歩合","seimai-buai",{en:"Percentage of the grain remaining. Lower = more milled.",ja:"米粒の残存割合。数字が小さいほどよく磨かれている。",zh:"米粒殘存比例。數字愈小＝削得愈多。"}],
            ["アルコール分","alcohol-bun",{en:"ABV. 15–16% is standard; 17%+ suggests genshu.",ja:"アルコール分。15〜16%が標準、17%以上なら原酒の可能性。",zh:"酒精濃度。15–16% 為標準；17% 以上多屬原酒。"}],
            ["日本酒度","nihonshudo",{en:"Sake meter value. Positive is drier, negative is sweeter — but read it with acidity.",ja:"日本酒度。プラスは辛口寄り、マイナスは甘口寄り。ただし酸度と併せて読むこと。",zh:"日本酒度。正值偏辛、負值偏甜——但須與酸度並讀。"}],
            ["酸度","sando",{en:"Acidity, typically 1.0–2.0. Higher reads drier and fuller at the same sugar level.",ja:"酸度。通常1.0〜2.0。同じ糖分なら、高いほど辛く厚く感じられる。",zh:"酸度，通常 1.0–2.0。相同糖分下，數值愈高愈顯辛口與厚實。"}],
            ["アミノ酸度","amino-sando",{en:"Amino acid index, typically 1.0–2.0. Higher means more umami and weight, and faster ageing.",ja:"アミノ酸度。通常1.0〜2.0。高いほどうま味と厚みが増し、熟成も速い。",zh:"胺基酸度，通常 1.0–2.0。愈高則旨味與厚度愈強，陳化也愈快。"}],
            ["使用米","shiyō-mai",{en:"Rice variety, sometimes split into kōji rice and mash rice with different varieties and ratios.",ja:"使用米。麹米と掛米で品種や精米歩合を分けて記すこともある。",zh:"使用米。有時分列麴米與掛米，品種與比例各異。"}],
            ["使用酵母","shiyō-kōbo",{en:"Yeast strain — a Kyōkai number, a prefectural code, or a house strain.",ja:"使用酵母。きょうかい酵母の番号、県の記号、または自社株。",zh:"使用酵母——協會編號、縣別代號，或自社菌株。"}],
            ["製造年月","seizō-nengetsu",{en:"Bottling month, in Japanese era years: 令和7年3月 = March 2025. Not an expiry date.",ja:"瓶詰の年月。和暦で記される（令和7年3月＝2025年3月）。賞味期限ではない。",zh:"裝瓶年月，以日本年號記載：令和 7 年 3 月＝2025 年 3 月。並非有效期限。"}],
            ["酒造年度 · BY","shuzō-nendo",{en:"Brewing year, 1 July to 30 June. BY R6 = the season starting July 2024.",ja:"酒造年度。七月一日から翌年六月三十日まで。BY令和6年＝2024年7月開始の期。",zh:"釀造年度，7 月 1 日至次年 6 月 30 日。BY 令和 6 年＝2024 年 7 月開始的釀期。"}]
          ] }
      ]
    },

    { t:"section", id:"brandnames",
      title:{ en:"Brand names", ja:"銘柄", zh:"品牌名" }, jp:"銘柄の読み",
      body:[
        { t:"p", text:{
          en:"The largest characters on the front are the brand — the <em>meigara</em> — and they are usually the hardest thing on the bottle to read, because brand names favour archaic readings, old character forms and deliberate ambiguity. A few recurring elements make many of them guessable.",
          ja:"表ラベルで最も大きい文字は銘柄であり、そして瓶のなかで最も読みにくいものであることが多い。銘柄は古風な読み、旧字体、意図的な多義性を好むからである。いくつか繰り返し現れる要素を知っておけば、多くは見当がつく。",
          zh:"正面最大的字是品牌名（銘柄），而它往往是整瓶酒上最難讀的部分——因為品牌名偏好古音、舊字形與刻意的歧義。認得幾個反覆出現的元素，多數便可推想。" } },
        { t:"table",
          cols:[{en:"Element",ja:"要素",zh:"元素"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[0],
          rows:[
            ["正宗","masamune",{en:"The single most common element in sake brand names, borrowed from the swordsmith and reportedly punning on 清酒 (<em>seishu</em>). Sakura Masamune, Kiku-Masamune, Kenbishi's neighbours — dozens use it.",ja:"銘柄に最も多く現れる要素。刀工の名に由来し、「清酒（せいしゅ）」との音の掛け合わせとも言われる。櫻正宗、菊正宗をはじめ、無数の蔵が用いる。",zh:"日本酒品牌名中最常見的元素，借自刀匠之名，據說亦與「清酒」諧音雙關。櫻正宗、菊正宗等，數十家酒藏皆用之。"}],
            ["鶴 · 亀","tsuru · kame",{en:"Crane and turtle — longevity. Kamotsuru, Hakutsuru, Manotsuru.",ja:"鶴と亀——長寿の象徴。賀茂鶴、白鶴、真野鶴。",zh:"鶴與龜——長壽的象徵。賀茂鶴、白鶴、真野鶴。"}],
            ["泉 · 清","izumi · kiyo",{en:"Spring, clarity — a claim about the water. Hakurakusei, Izumibashi.",ja:"泉、清——水についての表明。伯楽星、泉橋。",zh:"泉、清——關於水的宣示。伯樂星、泉橋。"}],
            ["山 · 川 · 峰","yama · kawa · mine",{en:"Mountain, river, peak — usually the actual local landform. Kokuryū (“black dragon”) is a river.",ja:"山、川、峰——多くは実在の地形。黒龍は川の名である。",zh:"山、川、峰——多為當地實際地貌。黑龍即為一條河川之名。"}],
            ["菊 · 桜 · 梅","kiku · sakura · ume",{en:"Chrysanthemum, cherry, plum. Seasonal and imperial associations.",ja:"菊、桜、梅。季節と皇室にまつわる連想。",zh:"菊、櫻、梅。與季節及皇室相關的聯想。"}],
            ["天 · 神 · 龍","ten · kami/shin · ryū",{en:"Heaven, deity, dragon. Often shrine-derived. Note that 龍 is read <em>ryū</em> or <em>ryō</em> depending on the house.",ja:"天、神、龍。神社に由来することが多い。「龍」は蔵によって「りゅう」とも「りょう」とも読む。",zh:"天、神、龍。多源自神社。「龍」依酒藏不同，可讀作 ryū 或 ryō。"}],
            ["一 · 大 · 万","ichi · dai · man",{en:"Numerals used for grandeur. 十四代 (<em>Jūyondai</em>, “fourteenth generation”) names the head of the family.",ja:"数字による大きさの表現。「十四代」は当主の代数を指す。",zh:"以數字表達宏大。「十四代」指的是家族第十四代當主。"}]
          ] },
        { t:"note", label:{en:"A caution",ja:"注意",zh:"提醒"}, text:{
          en:"A brewery's company name and its brand name are frequently different, and one company may run several unrelated brands at different price points. Asahi Shuzō of Yamaguchi makes Dassai; Asahi Shuzō of Niigata makes Kubota. They are unrelated companies with the same name.",
          ja:"蔵の社名と銘柄はしばしば異なり、一社が価格帯の異なる複数の無関係な銘柄をもつこともある。山口の旭酒造は獺祭を、新潟の朝日酒造は久保田を造る。同名だが無関係の会社である。",
          zh:"酒藏的公司名與品牌名往往不同，一家公司也可能經營數個定價不同、彼此無關的品牌。山口的旭酒造釀「獺祭」，新潟的朝日酒造釀「久保田」——兩者同名但毫無關係。" } }
      ]
    },

    { t:"section", id:"pitfalls",
      title:{ en:"What the label will not tell you", ja:"ラベルが語らないこと", zh:"酒標不會告訴你的事" }, jp:"限界",
      body:[
        { t:"ul", items:[
          { en:"<strong>How old the sake actually is.</strong> The production date is the bottling date. A sake pressed in January, matured for eighteen months and bottled in July shows July.",
            ja:"<strong>酒が実際に何歳か。</strong>製造年月は瓶詰の年月である。一月に搾り、十八か月熟成させ、七月に瓶詰した酒は七月と表示される。",
            zh:"<strong>酒實際的年齡。</strong>製造年月是裝瓶日期。一月搾出、熟成十八個月、七月裝瓶的酒，標的是七月。" },
          { en:"<strong>Whether it was contract-brewed.</strong> The producer's address must be identifiable, but a brand may be brewed under contract at another company's site, which the label does not have to announce in plain language.",
            ja:"<strong>委託醸造かどうか。</strong>製造者の所在地は特定できねばならないが、他社の製造場での委託醸造であることを平易な言葉で告げる義務はない。",
            zh:"<strong>是否為委託釀造。</strong>製造者地址須可辨識，但品牌可能在他家公司的場所委託釀造，而標籤沒有義務以白話說明。" },
          { en:"<strong>How it was stored between the brewery and the shop.</strong> This is often the single largest variable in what ends up in the glass, and nothing on the bottle records it.",
            ja:"<strong>蔵から店までどう保管されたか。</strong>杯の中身を左右する最大の変数であることが多いにもかかわらず、瓶にはその記録がない。",
            zh:"<strong>自酒藏到店舖之間如何保存。</strong>這往往是決定杯中之物的最大變數，而瓶上不留任何紀錄。" },
          { en:"<strong>Whether the numbers are current.</strong> SMV and acidity are often printed from a standing house specification rather than measured on that particular batch.",
            ja:"<strong>数値がその瓶のものか。</strong>日本酒度や酸度は、そのロットを測った値ではなく、定番の社内規格値が刷られていることが多い。",
            zh:"<strong>數值是否即時。</strong>日本酒度與酸度往往印自既定的自社規格值，而非該批次的實測結果。" },
          { en:"<strong>How it will taste.</strong> Everything above narrows the field. None of it substitutes for opening the bottle.",
            ja:"<strong>どんな味がするか。</strong>以上のすべては範囲を絞るにすぎない。いずれも、栓を開けることの代わりにはならない。",
            zh:"<strong>它嚐起來如何。</strong>以上一切只是縮小範圍。沒有任何一項能取代打開瓶子。" }
        ] }
      ]
    },

{ t:"section", id:"mandatory",
      title:{ en:"What the law requires", ja:"法が求める表示", zh:"法律要求的標示" }, jp:"法定表示事項",
      body:[
        { t:"p", text:{
          en:"Japanese labelling rules for sake come from the Liquor Tax Act and the Fair Competition Code for sake. Everything below must appear somewhere on the bottle; everything else on the label is voluntary and is the brewery talking to you.",
          ja:"日本酒の表示は、酒税法と清酒の公正競争規約に基づく。以下はすべて瓶のどこかに記されねばならない。それ以外の表示はすべて任意であり、蔵があなたに語りかけている部分である。",
          zh:"日本清酒的標示規範源自酒稅法與清酒的公正競爭規約。以下各項都必須出現在瓶身某處；標籤上的其餘一切皆為自願標示，是酒藏在對你說話。" } },
        { t:"table",
          cols:[{en:"Required item",ja:"必須事項",zh:"必要項目"},{en:"Kanji",ja:"表記",zh:"表記"},{en:"Notes",ja:"注",zh:"備註"}],
          jpCols:[1],
          rows:[
            [{en:"Product category",ja:"品目",zh:"品目"},"清酒 / 日本酒",
             {en:"Must say <em>seishu</em> or <em>nihonshu</em>. If it says neither, it is legally something else — a liqueur, a “sake-based beverage”, or a foreign product.",ja:"「清酒」または「日本酒」と記さねばならない。いずれもなければ、法的には別のもの——リキュール、酒類混成飲料、あるいは外国製品である。",zh:"必須標明「清酒」或「日本酒」。若兩者皆無，法律上它就是別的東西——利口酒、清酒基底飲料，或外國產品。"}],
            [{en:"Alcohol content",ja:"アルコール分",zh:"酒精度"},"アルコール分",
             {en:"As a percentage, usually to one decimal or as a range (“15度以上16度未満”).",ja:"百分率で記す。小数第一位まで、あるいは「15度以上16度未満」のような範囲で示される。",zh:"以百分比表示，通常精確到小數一位，或以區間標示（如「15度以上16度未満」）。"}],
            [{en:"Volume",ja:"内容量",zh:"內容量"},"内容量",
             {en:"720 ml (四合瓶) and 1,800 ml (一升瓶) are the two standard sizes; 300 ml and 180 ml are common for single servings.",ja:"720ml（四合瓶）と1,800ml（一升瓶）が標準の二つ。一杯分としては300mlや180mlも多い。",zh:"720 ml（四合瓶）與 1,800 ml（一升瓶）為兩種標準規格；單杯份則常見 300 ml 與 180 ml。"}],
            [{en:"Ingredients",ja:"原材料名",zh:"原材料名"},"原材料名",
             {en:"“米・米麹” means junmai in composition. “米・米麹・醸造アルコール” means alcohol was added. Anything further — sugars, acids, amino acids — puts the sake in the futsūshu category.",ja:"「米・米麹」であれば組成として純米である。「米・米麹・醸造アルコール」はアルコール添加を意味する。それ以上——糖類、酸味料、アミノ酸——が並べば、その酒は普通酒である。",zh:"「米・米麹」代表組成上為純米。「米・米麹・醸造アルコール」代表添加了酒精。若還列出更多——糖類、酸味料、胺基酸——那這款酒便屬普通酒。"}],
            [{en:"Producer and address",ja:"製造者名・所在地",zh:"製造者與地址"},"製造者",
             {en:"The company that made it, not necessarily the brand owner. Worth checking when a brand and a brewery have different names.",ja:"造った会社であり、銘柄の持ち主とは限らない。銘柄と蔵の名が異なる場合は確かめる価値がある。",zh:"實際製造的公司，未必是品牌持有者。當品牌與酒藏名稱不同時，值得查看。"}],
            [{en:"Date of manufacture",ja:"製造年月",zh:"製造年月"},"製造年月",
             {en:"The bottling date, not the brewing date and not an expiry. This is the single most useful number on the bottle for judging freshness.",ja:"瓶詰めの年月であり、造った年月でも賞味期限でもない。新しさを判断するうえで、瓶の上で最も有用な数値である。",zh:"裝瓶年月，既非釀造年月，也不是保存期限。這是瓶身上判斷新鮮度最有用的數字。"}],
            [{en:"Under-20 warning",ja:"未成年者飲酒禁止",zh:"未成年禁飲警語"},"20歳未満の飲酒は法律で禁止",
             {en:"Required on every alcoholic product sold in Japan.",ja:"日本で売られるすべての酒類に義務づけられる。",zh:"在日本銷售的所有酒類產品皆須標示。"}],
            [{en:"Pregnancy advisory",ja:"妊産婦への注意",zh:"孕婦警語"},"妊娠中や授乳期の飲酒は…",
             {en:"A standard advisory line, also required.",ja:"定型の注意書きであり、これも義務である。",zh:"標準警語，同樣為義務標示。"}],
            [{en:"Storage instruction",ja:"保存方法",zh:"保存方法"},"要冷蔵",
             {en:"Required where the sake needs refrigeration — that is, for nama. “要冷蔵” on a label is a factual statement about the contents, not a suggestion.",ja:"冷蔵を要する酒、すなわち生酒には義務づけられる。酒標の「要冷蔵」は中身についての事実の記述であって、提案ではない。",zh:"需冷藏的酒（即生酒）必須標示。酒標上的「要冷藏」是關於內容物的事實陳述，而非建議。"}]
          ] },
        { t:"note", label:{en:"“Nihonshu” is a protected term",ja:"「日本酒」は保護された表示である",zh:"「日本酒」是受保護的用語"}, text:{
          en:"Since 2015 the word 日本酒 has been a geographical indication in Japan: it may only be used for seishu made in Japan from domestically grown rice. Sake brewed in the United States, Norway or Taiwan may be excellent and may be legally sold as sake, but it may not be labelled 日本酒. This is one of the few places where the labelling rules do real work at the border.",
          ja:"二〇一五年以来、「日本酒」は日本における地理的表示である。国内産の米を用いて日本国内で造られた清酒にのみ用いることができる。米国やノルウェーや台湾で醸された酒は、優れていることもあり、sakeとして合法に売られもするが、「日本酒」と表示することはできない。表示の規定が国境で実際に働いている数少ない場面の一つである。",
          zh:"自 2015 年起，「日本酒」在日本是一項地理標示：僅能用於在日本國內以國產米釀造的清酒。在美國、挪威或台灣釀造的酒可能極為出色，也可合法以 sake 名義販售，但不得標示為「日本酒」。這是標示規範在國界上真正發揮作用的少數場合之一。" } }
      ]
    },

    { t:"section", id:"voluntary",
      title:{ en:"The voluntary terms, decoded", ja:"任意表示の読み解き", zh:"自願標示的解讀" }, jp:"任意表示",
      body:[
        { t:"p", text:{
          en:"Most of the interesting words on a Japanese label are not regulated at all. They describe a decision the brewer made, and once you know what each one means, the label becomes a specification.",
          ja:"日本の酒標に並ぶ興味深い語の大半は、まったく規制されていない。それらは造り手の下した判断を述べている。それぞれの意味が分かれば、酒標は仕様書になる。",
          zh:"日本酒標上多數有趣的詞彙其實完全不受規範。它們描述的是釀造者所做的決定；一旦知道每個詞的意思，酒標就變成一份規格書。" } },
        { t:"table",
          caption:{en:"What each term tells you about the process",ja:"それぞれの語が製造について伝えること",zh:"每個詞彙透露的製程資訊"},
          cols:[{en:"Term",ja:"語",zh:"詞彙"},{en:"Reading",ja:"読み",zh:"讀音"},{en:"Means",ja:"意味",zh:"意義"}],
          jpCols:[0],
          rows:[
            ["無濾過","muroka",{en:"No activated-carbon filtration. Fuller, sometimes faintly coloured, more of everything including any flaws.",ja:"活性炭による濾過をしていない。厚みがあり、わずかに色を帯びることもあり、欠点も含めてすべてが多い。",zh:"未經活性碳過濾。更飽滿，有時略帶顏色，一切（包括缺陷）都更多。"}],
            ["原酒","genshu",{en:"Undiluted. Usually 17–20%; concentrated, and excellent over a single large ice cube.",ja:"割水をしていない。多くは17〜20%で、凝縮しており、大きな氷ひとつを入れて飲むのに向く。",zh:"未加水稀釋。多為 17–20%，濃縮，非常適合加一顆大冰塊飲用。"}],
            ["生酒","namazake",{en:"Never pasteurised. Fresh, lively, fragile; refrigerate always.",ja:"一度も火入れをしていない。新鮮で生き生きとし、そして脆い。必ず冷蔵すること。",zh:"完全未經火入。新鮮、生動、脆弱；務必冷藏。"}],
            ["生貯蔵酒","nama-chozo",{en:"Stored unpasteurised, pasteurised once at bottling. Freshness with more stability.",ja:"生のまま貯蔵し、瓶詰め時に一度だけ火入れする。新鮮さと安定を兼ねる。",zh:"以生酒狀態貯藏，裝瓶時火入一次。兼具新鮮與較高的穩定性。"}],
            ["生詰酒","nama-zume",{en:"Pasteurised once before storage, bottled without a second. The hiyaoroshi method.",ja:"貯蔵前に一度だけ火入れし、二度目をせずに瓶詰めする。ひやおろしの方式である。",zh:"貯藏前火入一次，裝瓶時不再火入。即冷卸的作法。"}],
            ["中取り・中汲み","nakadori",{en:"Only the middle fraction of the pressing, the most balanced part. A statement of selectivity and yield sacrificed.",ja:"上槽の中間部分だけを取る。最も均衡のとれた部分である。選び取ることと歩留まりを捨てることの宣言である。",zh:"只取上槽的中段，最為均衡的部分。是一種對「精選」與「犧牲產出率」的宣示。"}],
            ["荒走り","arabashiri",{en:"The first free-run fraction: cloudy, lively, slightly rough and often gassy.",ja:"最初に自然に流れ出る部分。濁りがあり、生き生きとして、やや粗く、しばしばガスを含む。",zh:"最初自然流出的部分：帶濁、生動、略顯粗獷，且常含氣。"}],
            ["袋吊り・雫取り","fukurozuri",{en:"Drip-pressed with no pressure at all. Very low yield; competition-grade.",ja:"圧をかけず、吊るして滴らせる。歩留まりはきわめて低く、鑑評会の水準である。",zh:"完全不加壓、以懸吊滴取。產出率極低，屬鑑評會等級。"}],
            ["おりがらみ","origarami",{en:"Bottled with fine lees left in. Slightly cloudy, textured, often lightly sparkling.",ja:"細かい澱を残して瓶詰めする。わずかに濁り、質感があり、しばしば軽く発泡する。",zh:"保留細澱裝瓶。略帶混濁、有口感，且常微帶氣泡。"}],
            ["直汲み","jikagumi",{en:"Drawn straight from the tank into the bottle without settling or adjustment. As close to the tank room as a bottle gets.",ja:"タンクから直接、澱を引かず調整もせずに瓶へ汲む。瓶で得られる限り、仕込蔵に最も近い姿である。",zh:"直接自槽中汲入瓶中，不靜置、不調整。是酒瓶所能達到、最接近仕込酒藏的狀態。"}],
            ["瓶囲い・瓶貯蔵","binkakoi",{en:"Matured in bottle rather than in tank, usually cold. Slower, more even development.",ja:"タンクではなく瓶で、多くは低温で熟成させる。より遅く、より均一に育つ。",zh:"在瓶中而非槽中熟成，通常低溫進行。發展更緩慢、也更均勻。"}],
            ["一回火入れ","ikkai-hiire",{en:"Pasteurised once instead of the usual twice. A middle path between nama freshness and stability.",ja:"通常二回の火入れを一回だけにする。生の新鮮さと安定との中道である。",zh:"僅火入一次，而非慣常的兩次。是生酒新鮮度與穩定性之間的中道。"}],
            ["しぼりたて","shiboritate",{en:"Just pressed. A winter release, sold within weeks, often with visible gas.",ja:"搾りたて。冬の出荷で、数週間のうちに売られ、しばしばガスを感じる。",zh:"剛榨出。冬季出貨，數週內售出，常可感受到氣泡。"}],
            ["限定・数量限定","gentei",{en:"Limited release. Says nothing about quality on its own, but usually marks something the brewery is trying out.",ja:"限定品。それ自体は品質について何も語らないが、たいていは蔵が試みている何かを示す。",zh:"限定品。本身不說明品質，但通常標示著酒藏正在嘗試的某項事物。"}]
          ] },
        { t:"panel", title:{en:"A worked example",ja:"読み方の実例",zh:"實例判讀"}, tint:"rice",
          body:[
            { t:"p", text:{
              en:"<strong>純米吟醸 無濾過生原酒 中取り 山田錦 55% 令和6BY</strong> — a junmai ginjō, unfiltered, unpasteurised and undiluted, made only from the middle fraction of the press, from Yamada Nishiki milled to 55%, brewed in the 2024–25 season. Expect 17% alcohol or so, a full aromatic nose, real texture, and a requirement to keep it cold and drink it within a few months.",
              ja:"<strong>純米吟醸 無濾過生原酒 中取り 山田錦 55% 令和6BY</strong>——純米吟醸で、炭素濾過をせず、火入れをせず、割水もせず、上槽の中間部分のみを用い、55%まで削った山田錦から、令和六酒造年度に醸された酒である。アルコールは17%前後、香りは十分に高く、質感があり、冷蔵と数か月以内の消費を要する。",
              zh:"<strong>純米吟醸 無濾過生原酒 中取り 山田錦 55% 令和6BY</strong>——純米吟釀，未經活性碳過濾、未火入、未加水，僅取上槽中段，使用精米至 55% 的山田錦，於令和六釀造年度所釀。可預期酒精約 17%、香氣飽滿、口感扎實，且需冷藏並在數月內喝完。" } }
          ] }
      ]
    },

{ t:"section", id:"annotated",
      title:{ en:"A label, annotated", ja:"ラベルの注釈", zh:"逐項標註的酒標" }, jp:"表と裏",
      body:[
        { t:"p", text:{
          en:"Japanese sake carries its information across two labels. The front is design and identity: brand, designation, sometimes a rice variety, sometimes nothing else at all. The back is the statutory panel, and it is where every fact lives. The diagram below is a generic layout with the brand slot left as a placeholder; almost every bottle you pick up will be a variation on it.",
          ja:"日本酒は二枚のラベルに情報を分けて負う。表は意匠と輪郭である——銘柄、特定名称、時に米の品種、時にそれ以外は何もない。裏は法定の表示欄であり、事実はすべてそこに住む。以下の図は一般的な配置であり、銘柄の枠は置き換えのままにしてある。手に取るほとんどの瓶は、これの変奏である。",
          zh:"日本酒把資訊分載在兩張酒標上。正面是設計與身分：品牌、特定名稱，有時是米的品種，有時什麼別的都沒有。背面是法定標示欄，所有事實都住在那裡。下圖是通用版型，品牌欄位保留為佔位；你拿起的幾乎每一支酒瓶，都是它的變奏。" } },

        { t:"figure",
          caption:{
            en:"Front label and statutory back panel, with the ten elements numbered. The numbers correspond to the list below.",
            ja:"表ラベルと裏の法定表示欄。十の要素に番号を振ってある。番号は下の一覧に対応する。",
            zh:"正面酒標與背面法定標示欄，十個元素均已編號。編號對應下方清單。" },
          svg: function(lang, L){
            var s = '<svg viewBox="0 0 900 496" role="img" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit">';
            function num(x, y, n){
              return '<circle cx="' + x + '" cy="' + y + '" r="11" fill="var(--ink)"/>' +
                     '<text x="' + x + '" y="' + (y + 4) + '" font-size="12" fill="var(--paper)" text-anchor="middle" font-weight="600">' + n + '</text>';
            }
            function lead(x1, y1, x2, y2){
              return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="var(--rule-3)" stroke-width="1"/>';
            }
            // ---- front label ----
            s += '<rect x="86" y="60" width="250" height="400" fill="var(--paper-2)" stroke="var(--rule-2)" stroke-width="1.5"/>';
            s += '<text x="211" y="96" font-size="11" fill="var(--ink-4)" text-anchor="middle" letter-spacing="0.2em">' +
                 L({ en:"FRONT", ja:"表ラベル", zh:"正面" }) + '</text>';
            s += '<text x="211" y="200" font-size="42" fill="var(--ink)" text-anchor="middle" font-family="serif">銘柄名</text>';
            s += '<text x="211" y="228" font-size="11" fill="var(--ink-3)" text-anchor="middle" letter-spacing="0.18em">BRAND</text>';
            s += '<line x1="126" y1="256" x2="296" y2="256" stroke="var(--rule-2)"/>';
            s += '<text x="211" y="292" font-size="21" fill="var(--ink)" text-anchor="middle" font-family="serif">純米大吟醸</text>';
            s += '<text x="211" y="330" font-size="15" fill="var(--ink-2)" text-anchor="middle" font-family="serif">山田錦　精米歩合45%</text>';
            s += '<text x="211" y="366" font-size="14" fill="var(--ink-2)" text-anchor="middle" font-family="serif">無濾過生原酒</text>';
            s += '<line x1="126" y1="396" x2="296" y2="396" stroke="var(--rule-2)"/>';
            s += '<text x="211" y="426" font-size="13" fill="var(--ink-3)" text-anchor="middle" font-family="serif">〇〇酒造株式会社</text>';
            s += num(64, 200, 1) + lead(75, 200, 110, 200);
            s += num(64, 292, 2) + lead(75, 292, 128, 292);
            s += num(64, 330, 3) + lead(75, 330, 120, 330);
            s += num(64, 366, 4) + lead(75, 366, 132, 366);
            // ---- back label ----
            var bx = 452, by = 60, bw = 366, bh = 400;
            s += '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + bh + '" fill="var(--paper-2)" stroke="var(--rule-2)" stroke-width="1.5"/>';
            s += '<text x="' + (bx + bw / 2) + '" y="' + (by + 36) + '" font-size="11" fill="var(--ink-4)" text-anchor="middle" letter-spacing="0.2em">' +
                 L({ en:"BACK — STATUTORY PANEL", ja:"裏ラベル・法定表示欄", zh:"背標・法定標示欄" }) + '</text>';
            var rows = [
              ["品目", "清酒", 5],
              ["原材料名", "米（国産）、米こうじ（国産米）", 6],
              ["精米歩合", "45%", 0],
              ["アルコール分", "16度", 7],
              ["内容量", "720ml", 8],
              ["製造年月", "2026.04", 9],
              ["製造者", "〇〇酒造株式会社　△△県〇〇市…", 10]
            ];
            var ry = by + 62, rh = 40, i;
            for (i = 0; i < rows.length; i++) {
              var y = ry + i * rh;
              s += '<line x1="' + (bx + 16) + '" y1="' + (y + rh - 8) + '" x2="' + (bx + bw - 16) + '" y2="' + (y + rh - 8) + '" stroke="var(--rule)"/>';
              s += '<text x="' + (bx + 24) + '" y="' + (y + 20) + '" font-size="13" fill="var(--ink-3)" font-family="serif">' + rows[i][0] + '</text>';
              s += '<text x="' + (bx + 140) + '" y="' + (y + 20) + '" font-size="13" fill="var(--ink)" font-family="serif">' + rows[i][1] + '</text>';
              if (rows[i][2]) {
                s += num(bx + bw + 26, y + 15, rows[i][2]) + lead(bx + bw + 15, y + 15, bx + bw - 2, y + 15);
              }
            }
            s += '<rect x="' + (bx + 20) + '" y="' + (by + bh - 46) + '" width="' + (bw - 40) + '" height="28" fill="none" stroke="var(--rule-2)" stroke-dasharray="3 3"/>';
            s += '<text x="' + (bx + bw / 2) + '" y="' + (by + bh - 27) + '" font-size="12" fill="var(--ink-2)" text-anchor="middle" font-family="serif">20歳未満の者の飲酒は法律で禁止されています</text>';
            s += '</svg>';
            return s;
          } },

        { t:"ol", items:[
          { en:"<strong>The brand.</strong> Usually the largest thing on the bottle and often the only thing in a Western catalogue. It is not the company name — see item 10 — and one company may carry several brands. Learning brands rather than categories is how most drinkers eventually navigate.",
            ja:"<strong>銘柄。</strong>多くは瓶で最も大きく、西洋の目録ではしばしばこれだけが載る。会社名ではない——第十項を見よ——そして一社が複数の銘柄を負うこともある。多くの飲み手が最終的に頼るのは、分類ではなく銘柄である。",
            zh:"<strong>品牌。</strong>通常是瓶身上最大的元素，在西方的酒單上往往也是唯一被列出的資訊。它不是公司名——見第 10 項——而一家公司可能擁有數個品牌。多數飲者最終賴以辨識的，是品牌而非分類。" },
          { en:"<strong>The special designation.</strong> One of the eight legally defined names, or absent, in which case the sake is futsūshu. This is the single most information-dense phrase on a bottle: it fixes the polishing ratio, whether alcohol was added, and roughly what the brewery was aiming for.",
            ja:"<strong>特定名称。</strong>法に定められた八つの名のいずれか、あるいは記載なし——その場合は普通酒である。瓶の上で最も情報の密な一語であり、精米歩合と、アルコール添加の有無と、蔵がおおむね何を目指したかを定める。",
            zh:"<strong>特定名稱。</strong>八個法定名稱之一，或者沒有——沒有就代表這是普通酒。這是瓶身上資訊密度最高的一組字：它同時決定了精米步合、是否添加酒精，以及酒藏大致想做什麼。" },
          { en:"<strong>Rice variety and polishing ratio.</strong> The variety may be named only if it is at least half the rice used, and the percentage must be shown. Polishing is compulsory for a special designation and optional otherwise, though most breweries state it anyway.",
            ja:"<strong>米の品種と精米歩合。</strong>品種を挙げうるのは、使用した米の半分以上を占める場合に限り、その割合も示さねばならない。精米歩合は特定名称では義務であり、それ以外では任意だが、多くの蔵はいずれにせよ記す。",
            zh:"<strong>米的品種與精米步合。</strong>品種只有在占所用米一半以上時才能標示，並須註明比例。精米步合對特定名稱酒是義務標示，其餘為任意，不過多數酒藏無論如何都會寫。" },
          { en:"<strong>Process terms.</strong> <em>Muroka</em> (no carbon filtration), <em>nama</em> (unpasteurised), <em>genshu</em> (undiluted) and their combinations. Each is a defined term and each tells you something concrete about handling — this particular combination needs a refrigerator and a short shelf life.",
            ja:"<strong>製法の用語。</strong>無濾過（炭濾過をしない）、生（火入れをしない）、原酒（加水しない）とその組み合わせ。いずれも定義された語であり、いずれも扱いについて具体的なことを告げる——この組み合わせは冷蔵を要し、賞味の期間は短い。",
            zh:"<strong>製程用語。</strong>無濾過（未經炭過濾）、生（未經火入）、原酒（未加水）及其組合。每一個都是有定義的術語，也都在具體地告訴你該怎麼處理——這個特定組合需要冷藏，且賞味期短。" },
          { en:"<strong>The category.</strong> <em>Seishu</em> is the legal designation; <em>nihonshu</em> may also appear but only for sake made in Japan from Japanese rice. If this line says anything else — <em>sonota no jōzōshu</em>, <em>liqueur</em> — something has been added that takes the drink outside the definition.",
            ja:"<strong>品目。</strong>法的な区分は清酒であり、日本酒の語も現れうるが、それは国産米を用い日本で造られた酒に限る。この行に他の語——その他の醸造酒、リキュール——があれば、定義の外へ出る何かが加えられている。",
            zh:"<strong>品目。</strong>法定類別是「清酒」；「日本酒」也可能出現，但僅限以日本產米、在日本釀造者。如果這一行寫的是別的——「その他の醸造酒」、「リキュール」——就代表加了什麼，使它超出了定義。" },
          { en:"<strong>Ingredients.</strong> Listed by weight with the country of origin of the rice. The presence or absence of <em>jōzō alcohol</em> here is the most informative single fact on the label; anything beyond rice, kōji and alcohol — sugars, acids — indicates futsūshu at the cheaper end.",
            ja:"<strong>原材料名。</strong>重量順に、米の原産国を付して記される。ここに醸造アルコールがあるかないかは、ラベル上で最も情報量の多い一事実である。米・麹・アルコール以外のもの——糖類、酸味料——があれば、安価な普通酒である。",
            zh:"<strong>原材料名。</strong>依重量順序列出，並註明米的原產國。這裡有沒有「醸造アルコール」，是酒標上資訊量最大的單一事實；若出現米、麴、酒精以外的東西——糖類、酸味料——就代表這是價格較低的普通酒。" },
          { en:"<strong>Alcoholic strength.</strong> Stated in degrees, which are volume per cent, with a tolerance of one degree either way. Most sake sits at 15 or 16; a genshu will show 17 to 19, and a low-alcohol product 8 to 13.",
            ja:"<strong>アルコール分。</strong>度で表され、これは容量パーセントであり、上下一度の許容がある。多くの酒は15度か16度、原酒は17から19度、低アルコールの商品は8から13度を示す。",
            zh:"<strong>酒精分。</strong>以「度」表示，即體積百分比，上下各有 1 度的容許值。多數清酒為 15 或 16 度；原酒會是 17 至 19 度，低酒精產品則是 8 至 13 度。" },
          { en:"<strong>Volume.</strong> 720 ml or 1800 ml in almost every case, both being metric roundings of pre-metric measures. Smaller bottles at 300 ml and 180 ml exist and are the sensible way to try something unfamiliar.",
            ja:"<strong>内容量。</strong>ほとんどの場合720mlか1800mlであり、いずれも尺貫法の容量をメートル法で丸めたものである。300mlや180mlの小瓶もあり、見慣れぬものを試すには賢明な選択である。",
            zh:"<strong>內容量。</strong>幾乎都是 720 ml 或 1800 ml，兩者都是公制之前度量的取整。也有 300 ml 與 180 ml 的小瓶，是嘗試陌生酒款時明智的選擇。" },
          { en:"<strong>Date of manufacture.</strong> The month of bottling — not brewing, and not an expiry date. Sake carries no legal best-before because it does not become unsafe. For most bottles, more recent is better; for koshu it is beside the point.",
            ja:"<strong>製造年月。</strong>瓶詰めの月であり、醸造の月でもなければ期限でもない。危険にはならないため、日本酒に法定の賞味期限はない。多くの瓶にとって新しいほどよく、古酒にとっては関わりのないことである。",
            zh:"<strong>製造年月。</strong>裝瓶的月份——不是釀造月份，也不是有效期限。清酒沒有法定賞味期限，因為它不會變得危險。對多數酒而言越新越好；對古酒而言，這一項無關緊要。" },
          { en:"<strong>Maker and address.</strong> The company that actually made it. If a different company bottled or sold it, both appear — which is how contract-brewed and merchant-labelled products can be identified. This line, not the brand, is what tells you where the sake is from.",
            ja:"<strong>製造者と所在地。</strong>実際に造った会社である。別の会社が詰め、あるいは売った場合は双方が載る。桶取引や問屋の銘柄が見分けられるのはこれによる。その酒がどこのものかを告げるのは、銘柄ではなくこの行である。",
            zh:"<strong>製造者與地址。</strong>實際釀造它的公司。若由另一家公司裝瓶或販售，則兩方都會列出——委託釀造與批發商自有品牌之所以能辨識，靠的就是這裡。告訴你這支酒來自何處的，是這一行，不是品牌。" }
        ] },

        { t:"note", title:{ en:"The date rule changed in 2023", ja:"日付の規則は二〇二三年に変わった", zh:"日期的規則在 2023 年變了" }, text:{
          en:"Until the end of 2022 the bottling date was a compulsory item on every bottle of seishu. An amendment to the labelling standard made in July 2022 and effective from 1 January 2023 moved it from the required list to the optional one, aligning the rule with the international food-labelling convention that a date should suit the product. In practice almost every brewery still prints 製造年月, some have moved to a shipping date instead, and a small number now print nothing. The practical consequences are two: a bottle with no date is not necessarily an old bottle, and where a date does appear it is worth reading the words beside it rather than assuming what it counts.",
          ja:"二〇二二年の末まで、瓶詰めの年月は清酒のすべての瓶における必要記載事項であった。二〇二二年七月に行われ、二〇二三年一月一日から施行された表示基準の改正は、それを必要記載事項から任意記載事項へ移した。日付は商品の特性に応じるべきであるという、食品表示の国際的な考え方に沿わせたものである。実際には、ほとんどの蔵はなお「製造年月」を刷り、いくつかは代わりに出荷の時期を刷り、そして少数は何も刷らない。実際の帰結は二つである。日付のない瓶が必ずしも古い瓶ではないこと。そして日付がある場合は、それが何を数えているかを決めてかからず、傍らの語を読む値打ちがあること。",
          zh:"到 2022 年底為止，裝瓶年月是每一瓶清酒的必要標示事項。2022 年 7 月修正、自 2023 年 1 月 1 日施行的標示基準，把它從必要記載事項移到任意記載事項，使規則與「日期應依商品特性而定」的國際食品標示慣例一致。實務上，絕大多數酒藏仍然印「製造年月」，有些改印出貨時期，少數則什麼都不印。實際後果有兩個：沒有日期的酒瓶不一定是老酒；而當日期確實存在時，值得讀一讀它旁邊的字，而不是逕自假定它在數什麼。" } },

        { t:"note", text:{
          en:"The dashed box at the foot of the back label is the compulsory under-20 warning. Two things that look compulsory but are not: the pregnancy advisory, which is an industry undertaking, and storage advice, which is required only where the product genuinely needs it — so <em>yō-reizō</em> on a nama is meaningful and its absence on a pasteurised bottle is not an omission.",
          ja:"裏ラベルの下の破線の枠は、義務である二十歳未満の飲酒禁止の表示である。義務のように見えて義務でないものが二つある——妊産婦への注意喚起は業界の自主基準であり、保存方法は、実際に必要な製品にのみ求められる。ゆえに生酒の要冷蔵には意味があり、火入れ酒にそれがないことは不備ではない。",
          zh:"背標下方的虛線框是強制標示的「未滿 20 歲禁止飲酒」警語。有兩樣東西看似強制其實不然：孕產婦警語屬業界自主規範；保存方式則只有在產品確實需要時才要求標示——因此生酒上的「要冷藏」是有意義的，而火入酒上沒有它並不是漏寫。" } }
      ] },

    { t:"related", items:[
      { href:"classification.html", why:{ en:"What each designation on the front legally requires.", ja:"表の各特定名称が法的に求めるもの。", zh:"正標上每一個特定名稱在法律上要求什麼。" } },
      { href:"numbers.html", why:{ en:"The back-label figures, and which of them matter.", ja:"裏ラベルの数字と、そのうち意味のあるもの。", zh:"背標上的數字，以及哪些是真的有意義的。" } },
      { href:"kanji.html", why:{ en:"Every character that appears on a label, with readings.", ja:"札に現れるあらゆる文字を、読みとともに。", zh:"酒標上會出現的每一個字，附讀音。" } },
      { href:"storage.html", why:{ en:"The date on the back, and what it does and does not mean.", ja:"裏の日付が意味すること、しないこと。", zh:"背標上的日期意味著什麼，以及不意味著什麼。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- design */
SAKE.pages["design"] = {
  kicker: { en: "Understanding · 03", ja: "理解 · 03", zh: "理解 · 03" },
  title:  { en: "The Look of a Bottle", ja: "一本の意匠", zh: "一瓶的意匠" },
  jp: "意匠",
  lede: {
    en: "Reading a Label says what the writing on a bottle is legally obliged to mean. This page is about everything else: the brush that wrote the name, the paper it was printed on, the century and a half of changing composition behind the rectangle, and why a bottle costing ¥1,200 and a bottle costing ¥12,000 so often look almost identical. Sake is nearly the only drinks category in which the brand name is normally handwritten rather than set in a typeface, and that single fact explains most of what a shelf looks like.",
    ja: "「札を読む」の頁は、瓶の上の文字が法において意味せねばならぬことを述べる。この頁はそれ以外のすべてについてである。名を書いた筆、それが刷られた紙、その長方形の背後にある一世紀半の構図の移り変わり、そしてなぜ千二百円の瓶と一万二千円の瓶がしばしばほとんど同じ見た目をしているのか。日本酒は、銘が活字で組まれるのではなく手で書かれるのを常とする、ほとんど唯一の酒の分野である。棚の見た目のほとんどは、その一事から説明がつく。",
    zh: "〈判讀酒標〉那一頁講的是瓶身上的文字在法律上必須代表什麼。本頁講的是其餘的一切：寫下那個名字的毛筆、它被印在什麼紙上、那個長方形背後一個半世紀的構圖變遷，以及為什麼一瓶一千二百圓與一瓶一萬二千圓的酒，外觀常常幾乎一模一樣。清酒幾乎是唯一一個品牌名通常由手寫而非以字體排版的酒類；貨架看起來是那個樣子，多半就由這一件事說明。"
  },
  body: [

    { t:"section", id:"anatomy",
      title:{ en:"What is actually stuck to the glass", ja:"硝子に貼られているもの", zh:"貼在玻璃上的東西" }, jp:"構成",
      body:[
        { t:"figure",
          caption:{
            en:"A 720 mL bottle with its dress named. Six separate printed pieces is normal and none of them is decorative in the sense of being optional: each one carries a different class of information and is changed on a different schedule. The body label holds the brand and almost never changes; the shoulder label holds the thing that changes every season; the back label holds the law.",
            ja:"七二〇ミリリットルの瓶と、その装いの名。刷り物が六枚に分かれているのは常のことであり、そのいずれも、なくてよいという意味では飾りではない。それぞれが異なる種類の知らせを担い、異なる周期で刷り替えられる。胴貼は銘を持ち、ほとんど変わらない。肩貼は季ごとに変わるものを持つ。裏貼は法を持つ。",
            zh:"一支 720 毫升的瓶子，以及它身上各件衣裝的名字。分成六件獨立的印刷物是常態，而且沒有任何一件是「可有可無」意義下的裝飾：每一件承載不同類別的訊息，也依不同的週期更換。胴貼帶著品牌，幾乎不變；肩貼帶著每一季會變的東西；裏貼帶著法律。" },
          svg: function (lang, L) {
            var W = 760, H = 406, CX = 200;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* bottle */
            s += '<path d="M187 52 L187 116 C187 132 161 138 161 156 L161 336 L239 336 L239 156 C239 138 213 132 213 116 L213 52 Z" ' +
                 'fill="#F2EFE8" stroke="#B4AC9C"/>';
            /* cap */
            s += '<rect x="184" y="34" width="32" height="20" fill="#7C6B52"/>';
            /* neck tag */
            s += '<rect x="215" y="98" width="38" height="26" fill="#FBFAF7" stroke="#B4AC9C"/>';
            s += '<line x1="213" y1="104" x2="215" y2="104" stroke="#B4AC9C"/>';
            /* shoulder label */
            s += '<rect x="163" y="162" width="74" height="20" fill="#E7DFD2" stroke="#B4AC9C"/>';
            /* body label */
            s += '<rect x="166" y="196" width="68" height="94" fill="#FBFAF7" stroke="#8B857C"/>';
            s += '<text x="200" y="240" text-anchor="middle" font-size="22" fill="#201E1B" font-family="serif">酒</text>';
            s += '<rect x="188" y="204" width="10" height="10" fill="none" stroke="#B09E7C"/>';
            s += '<rect x="192" y="266" width="9" height="12" fill="#B09E7C"/>';
            /* back label, shown as a dashed ghost to the left */
            s += '<rect x="108" y="206" width="44" height="72" fill="#F5F3ED" stroke="#B4AC9C" stroke-dasharray="3 3"/>';
            for (var q = 0; q < 7; q++)
              s += '<line x1="114" y1="' + (216 + q * 9) + '" x2="146" y2="' + (216 + q * 9) + '" stroke="#CDC6B9"/>';
            s += '<line x1="152" y1="242" x2="166" y2="242" stroke="#CDC6B9" stroke-dasharray="2 2"/>';

            var rows = [
              { y:46,  jp:"王冠・キャップシール", from:[216,44],
                n:{ en:"Cap and cap seal", ja:"栓と封", zh:"瓶蓋與封籤" },
                d:{ en:"Tamper evidence, and on scarce brands a serial number.", ja:"開封の跡を残すためのもの。希少な銘では連番が入る。", zh:"用來留下開封痕跡；稀有品牌上會印流水編號。" } },
              { y:104, jp:"首掛け", from:[253,110],
                n:{ en:"Neck tag", ja:"ネックタグ", zh:"掛頸小卡" },
                d:{ en:"The temporary one: a new release, an award, a serving note.", ja:"一時のもの。新酒、受賞、飲み方の助言。", zh:"臨時性的那一張：新酒、得獎、飲用建議。" } },
              { y:162, jp:"肩貼", from:[237,172],
                n:{ en:"Shoulder label", ja:"かたばり", zh:"肩標" },
                d:{ en:"What changes: the designation, the rice, the season, the lot.", ja:"変わるもの。特定名称、米、季、仕込番号。", zh:"會變動的東西：特定名稱、米、季節、批次。" } },
              { y:220, jp:"胴貼", from:[234,236],
                n:{ en:"Body label", ja:"どうばり", zh:"胴標" },
                d:{ en:"The brand name, usually brush-written, usually unchanged for decades.", ja:"銘。たいてい筆で書かれ、たいてい数十年変わらない。", zh:"品牌名，通常是手寫毛筆字，通常數十年不變。" } },
              { y:278, jp:"裏貼", from:[152,290], under:true,
                n:{ en:"Back label", ja:"うらばり", zh:"背標" },
                d:{ en:"Where the law lives: maker, premises, volume, strength, materials.", ja:"法の住む場所。製造者、製造場、内容量、度数、原材料。", zh:"法律所在之處：製造者、製造場、容量、酒精度、原料。" } },
              { y:336, jp:"蔵印・落款", from:[234,272],
                n:{ en:"Seal and signature", ja:"印と署名", zh:"印章與落款" },
                d:{ en:"Borrowed from Chinese painting: a seal above, the writer's mark below.", ja:"漢画から借りたもの。上に冠帽印、下に落款。", zh:"借自中國繪畫：上方鈐印，下方落款。" } }
            ];
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], X = 322, d;
              if (r.under) {
                d = 'M' + r.from[0] + ' ' + r.from[1] + ' L' + r.from[0] + ' 350 L' + (X - 14) + ' 350 L' +
                    (X - 14) + ' ' + (r.y - 4) + ' L' + (X - 4) + ' ' + (r.y - 4);
              } else {
                d = 'M' + r.from[0] + ' ' + r.from[1] + ' L' + (X - 14) + ' ' + r.from[1] +
                    ' L' + (X - 14) + ' ' + (r.y - 4) + ' L' + (X - 4) + ' ' + (r.y - 4);
              }
              s += '<path d="' + d + '" fill="none" stroke="#DED8CB"/>';
              s += '<text x="' + X + '" y="' + r.y + '" font-size="12.5" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + X + '" y="' + (r.y + 15) + '" font-size="9.5" letter-spacing=".08em" fill="#ADA79E">' + L(r.n) + '</text>';
              s += '<text x="' + X + '" y="' + (r.y + 30) + '" font-size="10" fill="#8B857C">' + L(r.d) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "裏貼は破線で示した。瓶の向こう側にあるからである。一升瓶では首掛けと化粧箱がさらに加わることが多い。"
                  : lang === "zh" ? "裏貼以虛線表示，因為它在瓶子的另一面。一升瓶通常還會多出掛頸卡與外盒。"
                  : "The back label is dashed because it is on the far side of the glass. A 1.8 L bottle usually adds a neck tag and a box on top of all this.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The division of labour matters more than it looks. A brewery that puts the designation on the shoulder rather than the body can change from junmai ginjō to junmai daiginjō without reprinting the expensive piece; a brewery that integrates everything into one label has committed to a single product and will pay for that decision every time anything changes. Read a bottle with three separate printed pieces as a flexible system and a bottle with one as a statement.",
          ja:"仕事の分担は、見た目以上に意味を持つ。特定名称を胴ではなく肩に置く蔵は、高価なほうを刷り直さずに純米吟醸から純米大吟醸へ変えられる。すべてを一枚に収めた蔵は、一つの品に賭けたのであり、何かが変わるたびにその決断の代を払う。刷り物が三枚に分かれた瓶は融通のきく仕組みとして、一枚の瓶は宣言として読まれたい。",
          zh:"這種分工的意義比外表看起來更大。把特定名稱放在肩標而不是胴標上的酒藏，可以在不重印昂貴那一張的情況下，從純米吟釀改為純米大吟釀；把一切整合在單一張酒標上的酒藏，則是押在一款產品上，每次有任何變動都要為這個決定付出代價。看到分成三張印刷物的瓶子，把它讀成一套有彈性的系統；看到只有一張的，把它讀成一種宣言。" } }
      ] },

    { t:"section", id:"history",
      title:{ en:"A hundred and fifty years of one rectangle", ja:"ひとつの長方形の百五十年", zh:"一個長方形的一百五十年" }, jp:"変遷",
      body:[
        { t:"figure",
          caption:{
            en:"Seven schematic front labels, one per era. These are diagrams of composition, not copies of any real label: the point is where the weight sits, how much of the rectangle is given to the name, and what surrounds it. The remarkable thing about the sequence is that it ends almost where it began — a plain rectangle with a name on it — after a full circuit through ornament, colour, photography and back.",
            ja:"時代ごとに一枚ずつ、七枚の模式的な胴貼。これは構図の図であって、実在する札の写しではない。要は、重心がどこにあるか、長方形のどれだけが名に与えられているか、その周りに何があるか、である。この並びの目を引くところは、装飾と色と写真を一巡したのち、ほとんど始まりと同じ場所——名の載った素の長方形——に終わっていることである。",
            zh:"七張示意性的胴標，每個時代一張。這些是構圖的圖解，不是任何真實酒標的複製：重點在於重心落在哪裡、長方形有多少面積讓給了名字，以及名字周圍有什麼。這個序列引人注目之處在於，它繞了裝飾、色彩、攝影一整圈之後，幾乎回到了起點——一個印著名字的素面長方形。" },
          svg: function (lang, L) {
            var W = 760, H = 264, Y = 44, BW = 88, BH = 120, GAP = 104, X0 = 26;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var tags = [
              { y:"1874", t:{ en:"plain",   ja:"素",   zh:"素" } },
              { y:"1880s", t:{ en:"ornate", ja:"絢爛", zh:"絢爛" } },
              { y:"1920s", t:{ en:"nouveau",ja:"新芸", zh:"新藝" } },
              { y:"1960s", t:{ en:"dense",  ja:"稠密", zh:"稠密" } },
              { y:"1975", t:{ en:"western", ja:"洋風", zh:"洋風" } },
              { y:"1995", t:{ en:"white",   ja:"白",   zh:"白" } },
              { y:"now",  t:{ en:"designed",ja:"設計", zh:"設計" } }
            ];
            function frame(x, fill) {
              return '<rect x="' + x + '" y="' + Y + '" width="' + BW + '" height="' + BH + '" fill="' + fill + '" stroke="#B4AC9C"/>';
            }
            function name(x, size, y) {
              /* the brand name, drawn as a vertical stack of strokes */
              var o = "", cx = x + BW / 2, k;
              for (k = 0; k < 3; k++)
                o += '<rect x="' + (cx - size / 2) + '" y="' + (y + k * (size + 4)) + '" width="' + size + '" height="' + size + '" fill="#4A453D"/>';
              return o;
            }
            var x, i;
            /* 1 — 1874: washi, black name only */
            x = X0 + 0 * GAP;
            s += frame(x, "#F5F2E6") + name(x, 16, Y + 26);
            /* 2 — 1880s: ornate frame, motif, seal above and signature below */
            x = X0 + 1 * GAP;
            s += frame(x, "#F1EBD8");
            s += '<rect x="' + (x + 5) + '" y="' + (Y + 5) + '" width="' + (BW - 10) + '" height="' + (BH - 10) + '" fill="none" stroke="#C0AF8E"/>';
            s += '<rect x="' + (x + 9) + '" y="' + (Y + 9) + '" width="' + (BW - 18) + '" height="' + (BH - 18) + '" fill="none" stroke="#DACB9E"/>';
            s += '<circle cx="' + (x + 22) + '" cy="' + (Y + 34) + '" r="11" fill="#E3D3AC"/>';
            s += '<circle cx="' + (x + 68) + '" cy="' + (Y + 92) + '" r="9" fill="#E3D3AC"/>';
            s += name(x, 14, Y + 30);
            s += '<rect x="' + (x + BW / 2 - 5) + '" y="' + (Y + 14) + '" width="10" height="10" fill="#B08A55"/>';
            s += '<rect x="' + (x + BW / 2 - 4) + '" y="' + (Y + 96) + '" width="8" height="11" fill="#B08A55"/>';
            /* 3 — 1920s: art nouveau — a curved band */
            x = X0 + 2 * GAP;
            s += frame(x, "#EDE9E0");
            s += '<path d="M' + x + ' ' + (Y + 34) + ' C' + (x + 26) + ' ' + (Y + 8) + ', ' + (x + 62) + ' ' + (Y + 58) + ', ' + (x + BW) + ' ' + (Y + 26) + ' L' + (x + BW) + ' ' + Y + ' L' + x + ' ' + Y + ' Z" fill="#DDE1D6"/>';
            s += '<path d="M' + x + ' ' + (Y + BH - 30) + ' C' + (x + 30) + ' ' + (Y + BH - 6) + ', ' + (x + 60) + ' ' + (Y + BH - 48) + ', ' + (x + BW) + ' ' + (Y + BH - 22) + ' L' + (x + BW) + ' ' + (Y + BH) + ' L' + x + ' ' + (Y + BH) + ' Z" fill="#DDE1D6"/>';
            s += name(x, 14, Y + 34);
            /* 4 — 1960s: dense, full colour, every field filled */
            x = X0 + 3 * GAP;
            s += frame(x, "#EADCC1");
            s += '<rect x="' + (x + 4) + '" y="' + (Y + 4) + '" width="' + (BW - 8) + '" height="18" fill="#C7B89A"/>';
            s += '<rect x="' + (x + 4) + '" y="' + (Y + BH - 26) + '" width="' + (BW - 8) + '" height="22" fill="#C7B89A"/>';
            s += '<circle cx="' + (x + 18) + '" cy="' + (Y + 44) + '" r="9" fill="#CBAE79"/>';
            s += '<circle cx="' + (x + 70) + '" cy="' + (Y + 44) + '" r="9" fill="#CBAE79"/>';
            s += name(x, 16, Y + 32);
            for (i = 0; i < 3; i++)
              s += '<rect x="' + (x + 14) + '" y="' + (Y + BH - 22 + i * 6) + '" width="' + (BW - 28) + '" height="2" fill="#F5F2EA"/>';
            /* 5 — 1975: the western experiment — a photograph block and horizontal type */
            x = X0 + 4 * GAP;
            s += frame(x, "#FBFAF7");
            s += '<rect x="' + (x + 8) + '" y="' + (Y + 10) + '" width="' + (BW - 16) + '" height="46" fill="#C5BDB0"/>';
            s += '<path d="M' + (x + 8) + ' ' + (Y + 56) + ' L' + (x + 32) + ' ' + (Y + 30) + ' L' + (x + 52) + ' ' + (Y + 56) + ' Z" fill="#A8A08C"/>';
            for (i = 0; i < 4; i++)
              s += '<rect x="' + (x + 12) + '" y="' + (Y + 68 + i * 11) + '" width="' + (BW - 24 - i * 9) + '" height="4" fill="#B6B0A6"/>';
            /* 6 — 1995: white, vertical brush name, one line of designation */
            x = X0 + 5 * GAP;
            s += frame(x, "#FCFBF8");
            s += name(x, 18, Y + 20);
            s += '<rect x="' + (x + BW / 2 - 22) + '" y="' + (Y + 98) + '" width="44" height="4" fill="#8B857C"/>';
            /* 7 — now: deliberate design — asymmetric field, one mark, generous air */
            x = X0 + 6 * GAP;
            s += frame(x, "#F6F4EE");
            s += '<rect x="' + x + '" y="' + Y + '" width="26" height="' + BH + '" fill="#E4DCCC"/>';
            s += '<rect x="' + (x + 38) + '" y="' + (Y + 22) + '" width="16" height="16" fill="#4A453D"/>';
            s += '<rect x="' + (x + 38) + '" y="' + (Y + 46) + '" width="16" height="16" fill="#4A453D"/>';
            s += '<rect x="' + (x + 38) + '" y="' + (Y + 88) + '" width="34" height="3" fill="#B09E7C"/>';
            /* years and tags */
            for (i = 0; i < 7; i++) {
              var bx = X0 + i * GAP + BW / 2;
              s += '<text x="' + bx + '" y="' + (Y + BH + 22) + '" text-anchor="middle" font-size="11" fill="#201E1B">' +
                   (tags[i].y === "now" ? (lang === "ja" ? "現在" : lang === "zh" ? "現在" : "now") : tags[i].y) + '</text>';
              s += '<text x="' + bx + '" y="' + (Y + BH + 37) + '" text-anchor="middle" font-size="9.5" letter-spacing=".1em" fill="#ADA79E">' + L(tags[i].t) + '</text>';
            }
            s += '<text x="26" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "模式図であり、実在の札の写しではない。年は、その構図が広く行われた時期のおおよその中心である。"
                  : lang === "zh" ? "示意圖，並非真實酒標的複製。年份是該構圖廣為流行時期的大致中心點。"
                  : "Schematic. Not copies of real labels. The years are the approximate centre of each composition's currency, not its invention.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"timeline", items:[
          { year:"1874", jp:"酒票",
            title:{ en:"The label appears", ja:"札が現れる", zh:"酒標的出現" },
            text:{ en:"There is no Edo-period equivalent. The sake label — <em>shuhyō</em> — begins in early Meiji as a woodblock print pasted onto a barrel, black ink on washi, carrying the brewery's name and the sake's name and nothing else. The estimate for the earliest is around 1874, in northern Mie.",
              ja:"江戸にこれに当たるものはない。酒票——札——は、明治のはじめに、樽へ貼られる木版の刷り物として始まる。和紙に墨、蔵の名と酒の名、それだけである。最も早いものはおおよそ明治七年、伊勢の北と見積もられている。",
              zh:"江戶時代並無對應之物。酒票——酒標——始於明治初年，是貼在酒樽上的木版印刷品，和紙上以黑墨印著酒藏名與酒名，別無其他。最早者估計約在明治七年（1874），出現於三重北部。" } },
          { year:"1874—1882", jp:"絢爛期",
            title:{ en:"Eight glorious years", ja:"絢爛の八年", zh:"絢爛的八年" },
            text:{ en:"Colour arrives almost immediately, and then everything else: framed borders, cherry and chrysanthemum and peony, cranes and tortoises, Fuji. The block-cutters graded single petals and overlaid colour blocks for depth. Two conventions were lifted straight from Chinese painting and calligraphy — a seal at the top and the artist's mark at the foot — which is why a sake label still reads like a hanging scroll rather than a package.",
              ja:"色はほとんどすぐに来て、そののち他のすべてが来る。囲みの枠、桜と菊と牡丹、鶴と亀、富士。彫師は一枚の花弁に暈しを入れ、色版を重ねて奥行をつくった。二つの約束事が漢の画と書からそのまま持ち込まれた——上に冠帽印、下に落款である。日本酒の札がいまも包みではなく掛軸のように読めるのは、そのためである。",
              zh:"色彩幾乎立刻就來了，接著是其餘的一切：邊框、櫻與菊與牡丹、鶴與龜、富士。刻版師在單片花瓣上做暈色，疊印色版以造出深度。有兩項慣例直接取自中國書畫——上方鈐印、下方落款——這就是為什麼一張清酒酒標至今讀起來像一幅掛軸，而不像一件包裝。" } },
          { year:"1900s—1940s", jp:"洋と戦",
            title:{ en:"Nouveau, then war", ja:"新芸術、そして戦", zh:"新藝術，然後是戰爭" },
            text:{ en:"Modern printing replaces the block in mid-Meiji. Art Nouveau curves arrive in the Taishō years and sit, without apparent discomfort, beside the brush name. Militarist motifs follow in the late 1930s. Through all of it the composition is stable: a bordered field, a vertical name in the middle, ornament around the edge.",
              ja:"明治の半ばに近代の印刷が版を置き換える。大正にアール・ヌーヴォーの曲線が来て、筆の名の傍らに、見たところ何の不都合もなく座る。一九三〇年代の終わりには戦の意匠が続く。そのすべてを通して構図は安定している。枠取られた地、真ん中に縦の名、縁に飾り。",
              zh:"明治中期，近代印刷取代了木版。大正年間新藝術的曲線來到，與毛筆字的名字並置，看起來毫無違和。1930 年代末，軍國主義的圖樣接續而來。在這一切之中，構圖始終穩定：一塊有邊框的版面、正中一行直書的名字、四周的裝飾。" } },
          { year:"1960s—1973", jp:"昭和の絵",
            title:{ en:"Peak consumption, peak ornament", ja:"消費の頂、飾りの頂", zh:"消費的頂點，裝飾的頂點" },
            text:{ en:"Sake production peaks in 1973 and so does the density of the label: full colour, banded top and bottom, a grade mark, medals, a slogan, every field occupied. It is the look most people abroad still picture when they picture a sake bottle, and it has been out of fashion in Japan for forty years.",
              ja:"清酒の生産は一九七三年に頂を打ち、札の密度もまたそうである。総天然色、上下に帯、級の印、賞牌、標語、空きのない紙面。国外の人がいまも日本酒の瓶を思い描くときに思い描くのはこの見た目であり、そして日本では四十年前から流行らない。",
              zh:"清酒產量在 1973 年達到頂峰，酒標的密度也是：全彩、上下有色帶、等級標記、獎牌、標語，版面上沒有一處留白。這正是海外的人至今想像一瓶清酒時所想像的樣子——而它在日本已經退流行四十年了。" } },
          { year:"c. 1975", jp:"試みと失敗",
            title:{ en:"The panic rebrand", ja:"慌てての衣替え", zh:"慌張的換裝" },
            text:{ en:"Faced with whisky advertising and a collapsing share, breweries tried to look like something else: Western layouts, photographs, horizontal type, casual illustration. It did not work, and the reason given at the time is the one still worth hearing — the trade could see it was a costume rather than a change in the sake.",
              ja:"洋酒の広告と崩れてゆく分け前を前に、蔵は別の何かに見せようとした。西洋の割付、写真、横組、気安い絵。それは効かなかった。当時挙げられた理由は、いまも聞くに値する——それが酒の変化ではなく衣裳であることを、商いの側が見抜いていた。",
              zh:"面對威士忌的廣告攻勢與不斷萎縮的市占，酒藏試圖讓自己看起來像別的東西：西式版面、照片、橫排字、輕鬆的插畫。它沒有奏效；而當時給出的理由至今仍值得一聽——業界看得出來那是一套戲服，而不是酒本身的改變。" } },
          { year:"1990s", jp:"白い札",
            title:{ en:"White paper, black brush", ja:"白い紙、黒い筆", zh:"白紙、黑筆" },
            text:{ en:"The ginjō boom produces the opposite move, and this one works. A young generation with genuinely better sake strips the label to white paper, a vertical brush name and the special designation, and lets the absence of ornament do the arguing. <em>Jūyondai</em>, launched by Takagi Akitsuna in 1995, is the emblem of it — its logo written by the calligrapher Iwasaki Chōfū. Within a decade the white label is the default for anything premium.",
              ja:"吟醸の興隆は逆の手を生み、そしてこちらは効いた。実際に良い酒を持った若い世代が、札を白い紙と縦の筆の名と特定名称まで削ぎ、飾りのないことに語らせる。一九九五年に高木顕統が世に出した十四代がその象徴であり、その題字は書家・岩崎潮風の筆による。十年のうちに、白い札は上等なものの既定になる。",
              zh:"吟釀熱潮催生了相反的一步，而這一步奏效了。手上真的有更好的酒的年輕一代，把酒標削減成白紙、一行直書的毛筆字與特定名稱，讓「沒有裝飾」這件事本身去說話。1995 年由高木顯統推出的十四代是其象徵，題字出自書法家岩崎潮風之手。不到十年，白色酒標成了高階品項的預設值。" } },
          { year:"2000s—", jp:"設計の帰還",
            title:{ en:"Design comes back on purpose", ja:"設計が意図して戻る", zh:"設計有意識地回來" },
            text:{ en:"The white label works until everyone has one, at which point it stops saying anything. The current move is a deliberate return to designed labels — asymmetric fields, restrained pattern taken from old textile or treasure motifs, one mark instead of six, a single strong colour per line — made by breweries rather than by the printer's catalogue, and often with an eye to a reader who cannot read the kanji at all.",
              ja:"白い札は、皆が持つまでは効く。皆が持った時点で、それは何も言わなくなる。いまの手は、設計された札への意図した回帰である。非対称の地、古い織や宝尽くしから取った控えめな文様、六つではなく一つの印、一つの系統に一つの強い色。印刷屋の見本帳ではなく蔵が決め、しばしば漢字を読めぬ読み手を見据えている。",
              zh:"白色酒標一直有效，直到每個人都有一張為止——到那一刻，它就什麼都不再說了。當下的做法是有意識地回到「被設計過」的酒標：不對稱的版面、取自舊織品或寶盡紋樣的克制圖案、以一個記號取代六個、每條產品線一種強烈的色彩。這些由酒藏自己決定，而不是從印刷廠的樣本冊裡挑，而且往往是為了一個完全看不懂漢字的讀者而設計。" } }
        ] }
      ] },

    { t:"section", id:"brush",
      title:{ en:"The name is written, not set", ja:"名は組まれず、書かれる", zh:"名字是寫的，不是排的" }, jp:"題字",
      body:[
        { t:"p", text:{
          en:"Nearly every other drinks category sets its brand name in a typeface. Sake, with very few exceptions, does not: the name on the body label is <em>daiji</em>, a piece of calligraphy, written once by a named hand and then reproduced. Often the same hand for a century; sometimes the founder's, sometimes a professional calligrapher's, occasionally a local priest's or a customer's. The signature at the foot of the label is there because the writing is regarded as a work with an author.",
          ja:"他のほとんどあらゆる酒の分野は、銘を活字で組む。日本酒は、ごく僅かな例を除いてそうしない。胴貼の上の名は題字であり、書であり、名のある手によって一度書かれ、そののち複製される。しばしば一世紀にわたって同じ手により、あるときは創業者の、あるときは書家の、ときに土地の僧や客の手による。札の裾の署名がそこにあるのは、その書きぶりが作者を持つ作として扱われているからである。",
          zh:"幾乎其他每一個酒類都以字體排出自己的品牌名。清酒除了極少數例外之外並不如此：胴標上的名字是「題字」，是一件書法作品，由一隻有名有姓的手寫下一次，之後複製使用。往往一個世紀都是同一隻手；有時是創業者的、有時是書法家的，偶爾是當地僧侶或客人的。酒標底部之所以有落款，是因為那份書寫被視為一件有作者的作品。" } },
        { t:"grid", cols:1, cells:[
          { k:{ en:"Why writing rather than type", ja:"なぜ活字ではなく書か", zh:"為什麼是手寫而不是排版" }, jp:"手と活字",
            v:{ en:"A typeface is a licence anyone can buy. A brush stroke is not.", ja:"書体は誰もが買える許諾である。筆の一画はそうではない。", zh:"字體是誰都能買到的授權。一筆一畫不是。" },
            d:{ en:"The practical argument is that a brush name cannot be typed by a competitor, cannot be approximated by a shop's shelf talker, and stays recognisable at the size a bottle is seen from across a room. The cultural argument is older: the name of a sake is treated the way the name of a temple gate or a shop curtain is treated, as something a person writes for that place. Both arguments point the same way, which is why the convention has survived three complete changes of printing technology.",
              ja:"実際上の理由は、筆の名が競う者に打ち出せず、店の棚札に似せられず、そして部屋の向こうから瓶を見る大きさでなお見分けがつくことである。文化の理由はより古い。日本酒の名は、寺の門や店の暖簾の名が扱われるように、ある人がその場のために書くものとして扱われる。二つの理由は同じ向きを指す。この約束事が印刷技術の三度の全面的な交代を生き延びたのは、そのためである。",
              zh:"實務上的理由是：毛筆字的名字無法被競爭者敲打出來，無法被店家的貨架小卡近似模仿，而且在「隔著一個房間看一瓶酒」的尺寸下依然可辨。文化上的理由更古老：清酒的名字被當成寺門或店家暖簾上的名字來對待——是某個人為那個場所所寫的東西。兩個理由指向同一個方向；這也是為什麼這個慣例熬過了三次完整的印刷技術更迭。" } },
          { k:{ en:"The five scripts, and what each one claims", ja:"五体と、それぞれの主張", zh:"五種書體，以及各自的主張" }, jp:"書体",
            v:{ en:"Seal, clerical, regular, running, cursive — a range from archaic to fluent.", ja:"篆・隷・楷・行・草——古めかしいものから流れるものまでの幅。", zh:"篆、隸、楷、行、草——從古拙到流暢的一道光譜。" },
            d:{ en:"<em>Tensho</em>, seal script, is the oldest and least legible and is used almost entirely for the seal itself. <em>Reisho</em>, clerical, is broad and stable and reads as old and serious. <em>Kaisho</em>, regular, is the school-textbook hand: clear, neutral, safe. <em>Gyōsho</em>, running, is where most brand names sit — fluent but still readable. <em>Sōsho</em>, cursive, is the most expressive and the least legible, and a brewery using it is telling you that recognising the shape matters more than reading the word. That last sentence is also, in effect, a statement about who the bottle is for.",
              ja:"篆書は最も古く最も読みにくく、ほとんど印そのもののためにのみ用いられる。隷書は幅が広く安定し、古く重々しく読める。楷書は手本の手であり、明らかで、中立で、安全である。行書は多くの銘が座る場所であり、流れながらなお読める。草書は最も表情が豊かで最も読みにくく、それを用いる蔵は、語を読むことより形を見分けることのほうが大事だとあなたに告げている。その最後の一文は、実のところ、その瓶が誰のためのものかについての表明でもある。",
              zh:"篆書最古老也最難辨讀，幾乎只用在印章本身。隸書寬闊穩定，讀起來古老而莊重。楷書是教科書上的那隻手：清晰、中性、安全。行書是多數品牌名所在之處——流暢但仍可讀。草書最富表情也最難辨讀；使用它的酒藏是在告訴你，認出那個形狀比讀出那個詞更重要。而最後這句話，實際上也是一種關於「這瓶酒是給誰的」的宣示。" } },
          { k:{ en:"A brand name decided by trademark law", ja:"商標法が決めた銘", zh:"由商標法決定的品牌名" }, jp:"十四代",
            v:{ en:"The most famous name in modern sake exists in that form because the other three were refused.", ja:"現代の日本酒で最も知られた名が、その形であるのは、他の三つが認められなかったからである。", zh:"現代清酒最有名的那個名字之所以長成那個樣子，是因為另外三個沒被核准。" },
            d:{ en:"Takagi Akitsuna filed <em>Jūsandai</em>, <em>Jūyondai</em>, <em>Jūgodai</em> and <em>Jūrokudai</em> — thirteenth through sixteenth generation. Bare numerals are generally not registrable as trademarks, and only <em>Jūyondai</em> came through. The name that became the most sought-after in the country, and the white label that reset the entire visual convention of premium sake, are both downstream of a registry decision. Design constraints usually are.",
              ja:"高木顕統は十三代・十四代・十五代・十六代を出願した。数字のみの標は通常登録されえず、通ったのは十四代のみであった。国で最も求められる名となったものも、上等な酒の見た目の約束事をそっくり置き換えた白い札も、ともに登録官の判断の下流にある。意匠の制約とは、たいていそういうものである。",
              zh:"高木顯統當年申請了十三代、十四代、十五代、十六代。純數字通常無法註冊為商標，最後只有「十四代」通過。那個成為全國最受追逐的名字，以及那張重置了高階清酒整套視覺慣例的白色酒標，兩者都位於一個註冊審查決定的下游。設計上的限制，通常就是這麼來的。" } }
        ] }
      ] },

    { t:"section", id:"craft",
      title:{ en:"Paper, press, and the ice bucket", ja:"紙、刷り、そして氷の桶", zh:"紙、印刷，以及冰桶" }, jp:"物性",
      body:[
        { t:"p", text:{
          en:"A sake label has a harder physical life than most packaging. It goes onto cold glass, sits in a refrigerator, comes out and sweats, and — for a bottle opened at a table — spends an hour in an ice bucket being handled with wet hands. Everything attractive about a label has to survive that, which is the quiet reason many of the most beautiful ones are on bottles that were never meant to be chilled.",
          ja:"日本酒の札は、ほとんどの包みより厳しい物としての一生を送る。冷たい硝子に貼られ、冷蔵庫に座り、出されて汗をかき、そして卓で開けられる瓶ならば、濡れた手で扱われながら一時間を氷の桶で過ごす。札の美しいところはすべてそれを生き延びねばならない。最も美しいものの多くが、そもそも冷やす気のない瓶に貼られているのは、その静かな理由による。",
          zh:"清酒酒標的物理生命比多數包裝都嚴苛。它被貼上冰冷的玻璃、待在冷藏庫裡、拿出來之後開始出汗；而如果是在餐桌上開的瓶子，它還要在冰桶裡被濕手拿捏一個小時。酒標上一切好看的東西都必須熬過這些——這正是為什麼許多最漂亮的酒標，都貼在原本就不打算冰鎮的瓶子上。" } },
        { t:"defs", items:[
          { term:{ en:"Washi", ja:"和紙", zh:"和紙" }, jp:"和紙",
            def:{ en:"The traditional stock, and still the premium one: long fibres, a soft deckle edge, a surface that takes ink without gloss. It is expensive, it wrinkles when wet, and it is the single most reliable signal that a brewery decided the bottle would be looked at rather than chilled hard. Machine-made imitation washi is very common and looks identical until it is wet.",
              ja:"伝統の紙であり、いまも上等の紙である。長い繊維、柔らかな耳、艶なく墨を受ける肌。値が張り、濡れれば皺み、そして蔵がこの瓶を強く冷やすものではなく見られるものと決めた、最も確かな徴である。機械漉きの和紙風は非常に多く、濡れるまでは見分けがつかない。",
              zh:"傳統用紙，至今仍是高級用紙：長纖維、柔軟的毛邊、不反光地吃墨的表面。它昂貴、遇濕會皺，而且是「酒藏認定這瓶酒是用來看的、而不是用來冰鎮的」最可靠的單一訊號。機器抄造的仿和紙非常普遍，在沒沾濕之前看起來一模一樣。" } },
          { term:{ en:"Letterpress", ja:"活版", zh:"活版" }, jp:"活版",
            def:{ en:"Type or a plate pressed into the sheet so that the mark has depth you can feel. Slow, costly per unit, and the only printing method whose quality is legible in a photograph taken at an angle. It is used almost exclusively on small limited runs, which makes its presence a fair proxy for the size of the lot.",
              ja:"活字や版を紙へ押し込み、しるしに指で触れうる深さを与える。遅く、一枚あたりが高く、斜めから撮った写真においてなお品質の読める唯一の印刷法である。ほとんど少量の限定にのみ用いられ、ゆえにその存在は仕込の大きさのまずまずの代理となる。",
              zh:"把活字或印版壓進紙裡，讓痕跡帶有摸得到的深度。慢、單位成本高，而且是唯一一種在斜角拍攝的照片裡仍能讀出品質的印刷方式。它幾乎只用在小批量限定品上，因此它的存在是「這批酒有多少量」的一個合理代理指標。" } },
          { term:{ en:"Foil and emboss", ja:"箔押し・空押し", zh:"燙箔與壓凸" }, jp:"箔",
            def:{ en:"Gold or silver foil and blind embossing are the traditional way of making a label expensive without making it louder. Both survive water well, which is why they outlived most of the other Shōwa decorations. Foil on a modern label is usually a deliberate quotation of the older style rather than an inheritance of it.",
              ja:"金銀の箔と空押しは、札を騒がしくすることなく高価にする伝統の手である。いずれも水によく耐える。他の昭和の飾りの多くより長く生き延びたのは、そのためである。現代の札の上の箔は、たいてい古い様式の継承ではなく、意図した引用である。",
              zh:"金銀燙箔與素壓凸，是讓酒標變貴而不變吵的傳統手法。兩者都很耐水，這也是它們比昭和時代其他裝飾活得更久的原因。現代酒標上的燙箔，通常是對舊樣式的刻意引用，而不是延續。" } },
          { term:{ en:"Direct print on glass", ja:"瓶への直刷り", zh:"直接印在瓶身上" }, jp:"直刷り",
            def:{ en:"Screen printing or ceramic-fired decoration applied to the bottle itself. There is nothing to peel, nothing to wrinkle, and nothing to soak off — which is the objection as well as the advantage, since label collecting is a real practice and a directly printed bottle cannot take part in it.",
              ja:"シルクスクリーンや焼付けの加飾を瓶そのものに施す。剥がれるものも、皺むものも、剥がして取るものもない——それは利であると同時に難でもある。札を集めることは実際に行われている営みであり、直刷りの瓶はそれに加われない。",
              zh:"以網版印刷或燒附加飾直接施加在瓶身上。沒有東西會剝落、起皺，也沒有東西可以泡下來——這既是優點也是反對理由，因為蒐集酒標是一項真實存在的活動，而直印的瓶子無法參與其中。" } },
          { term:{ en:"In-house printing", ja:"自社印刷", zh:"自家印刷" }, jp:"内製",
            def:{ en:"A small but growing number of breweries have brought label printing inside. The interesting consequence is not cost but latency: a label ordered from a printer is a decision made months before the sake is bottled, while a label printed in the building is a decision made in the same week. That difference is what makes single-tank releases and seasonal variants practical at all.",
              ja:"札の印刷を内に取り込む蔵が、少数ながら増えている。面白い帰結は費用ではなく遅れである。印刷屋へ頼む札は、酒が瓶詰めされる数月前に下される決断であり、建物のなかで刷る札は、同じ週に下される決断である。一本の槽ごとの出荷や季ごとの変化が現実に成り立つのは、その差による。",
              zh:"把酒標印刷拉進自家的酒藏數量不多但正在增加。有趣的後果不是成本而是延遲：向印刷廠訂的酒標，是在裝瓶前好幾個月就做下的決定；在自家建築裡印的酒標，則是同一週內做的決定。單槽出貨與季節限定之所以在現實中行得通，靠的正是這個差別。" } }
        ] }
      ] },

    { t:"section", id:"export",
      title:{ en:"The label that leaves the country", ja:"国を出る札", zh:"要出國的酒標" }, jp:"輸出",
      body:[
        { t:"p", text:{
          en:"An exported bottle carries at least three layers of obligation that a domestic bottle does not: whatever Japan requires, whatever the destination requires, and whatever the importer's own compliance department has decided to add. The third is usually the one that ruins the design, because it arrives as an adhesive strip applied after the bottle has left the brewery and lands wherever there is room.",
          ja:"輸出される瓶は、国内の瓶が負わぬ少なくとも三層の義務を帯びる。日本が求めるもの、届け先が求めるもの、そして輸入者自身の法務が加えると決めたもの。意匠を壊すのはたいてい三つ目である。それは瓶が蔵を出たのちに貼られる糊つきの帯として来て、空いている場所へ着地するからである。",
          zh:"一支出口的瓶子，比國內販售的瓶子至少多背三層義務：日本要求的、目的地要求的，以及進口商自家法務部門決定加上去的。毀掉設計的通常是第三層——因為它是在瓶子離開酒藏之後才貼上的黏性標籤，而且落在哪裡全看哪裡還有空位。" } },
        { t:"table",
          caption:{ en:"Three layers on one bottle", ja:"一本の上の三つの層", zh:"同一瓶上的三個層次" },
          cols:[{en:"Layer",ja:"層",zh:"層"},{en:"Set by",ja:"定めるもの",zh:"由誰決定"},{en:"Typically carries",ja:"たいてい載るもの",zh:"通常承載"},{en:"Design freedom",ja:"意匠の自由",zh:"設計自由度"}],
          rows:[
            [{en:"Japanese",ja:"日本",zh:"日本"},
             {en:"Liquor tax law and the business association law",ja:"酒税法と酒類業組合法",zh:"酒稅法與酒類業組合法"},
             {en:"Category, maker, premises, volume, strength band, and the mandatory drinking warnings",ja:"品目、製造者、製造場、内容量、度数の幅、飲酒に関する必要表示",zh:"品目、製造者、製造場、容量、酒精度區間，以及必要的飲酒警語"},
             {en:"Position and type are free; wording is not",ja:"位置と書体は自由、文言は自由でない",zh:"位置與字體自由，文字內容不自由"}],
            [{en:"Destination",ja:"届け先",zh:"目的地"},
             {en:"The importing country",ja:"輸入する国",zh:"進口國"},
             {en:"Allergen and additive declarations, government health warnings, country of origin, importer of record, sometimes a standard drinks figure",ja:"アレルゲンと添加物の表示、政府の健康に関する警告、原産国、輸入者、時に純アルコール量",zh:"過敏原與添加物標示、政府健康警語、原產國、進口商，有時還有純酒精量"},
             {en:"Wording and minimum type size are usually fixed by statute",ja:"文言と最小の級数は、たいてい法で定まる",zh:"文字內容與最小字級通常由法規固定"}],
            [{en:"Importer",ja:"輸入者",zh:"進口商"},
             {en:"The company bringing it in",ja:"持ち込む会社",zh:"引進它的公司"},
             {en:"Its own logo, a lot code, a barcode, an English tasting note, occasionally a rating",ja:"自社の標、ロット番号、バーコード、英語の味の記、時に点数",zh:"自家標誌、批號、條碼、英文品飲筆記，偶爾還有評分"},
             {en:"Applied after the fact, often over the original design",ja:"事後に貼られ、しばしば元の意匠の上に重なる",zh:"事後才貼上，經常蓋在原本的設計上"}]
          ] },
        { t:"p", text:{
          en:"There is a fourth problem that no regulation causes. A reader who cannot read kanji cannot use the most information-dense object on the bottle, and the brush name — the whole point of the front label — becomes a shape rather than a word. The industry's response has been the standard export back label developed with the tax agency's involvement, which prescribes a fixed set of fields in a fixed order: aroma and flavour, taste profile, serving temperature, storage temperature, foods to pair, place of origin, plus the brewery's and the product's story. It is a good piece of information design and it solves the back of the bottle. The front remains a shape, and the better answer there has been to give a range a distinctive mark or colour that works with no reading at all.",
          ja:"規制の生まぬ第四の問題がある。漢字を読めぬ読み手は、瓶の上で最も情報の詰まったものを使えず、筆の名——胴貼の眼目そのもの——は語ではなく形になる。業界の答は、税の当局が関わって作られた輸出用の標準的裏ラベルであり、定まった項目を定まった順に指定する。香りと味わい、味の輪郭、飲用温度、保管温度、合わせる料理、産地、加えて蔵の物語と品の物語である。それは良い情報設計であり、瓶の裏を解く。表はなお形のままであり、そこでのより良い答は、一つの系統に、読まずとも働く固有の印か色を与えることであった。",
          zh:"還有第四個問題，不是任何法規造成的。看不懂漢字的讀者，無法使用瓶身上資訊密度最高的那個物件；而毛筆字的名字——正面酒標的全部重點——變成了一個形狀，而不是一個詞。業界的回應是在稅務當局參與下開發的出口用標準背標，它規定了一組固定欄位與固定順序：香氣與風味、味道輪廓、飲用溫度、保存溫度、搭配食物、產地，再加上酒藏的故事與產品的故事。那是一份不錯的資訊設計，而且解決了瓶子的背面。正面依然是一個形狀；而在那裡更好的答案，一直是給一條產品線一個完全不需要閱讀就能運作的獨特記號或顏色。" } }
      ] },

    { t:"section", id:"read",
      title:{ en:"Reading a bottle as design", ja:"意匠として一本を読む", zh:"把一瓶酒當成設計來讀" }, jp:"読み方",
      body:[
        { t:"ol", items:[
          { en:"<strong>How many separate printed pieces?</strong> Three or more means a flexible system built to carry many products; one means a single committed object, and usually a smaller brewery or a flagship.",
            ja:"<strong>刷り物は何枚に分かれているか。</strong>三枚以上は、多くの品を担うために組まれた融通のきく仕組みである。一枚は、賭けられた一つの物であり、たいてい小さな蔵か、旗艦である。",
            zh:"<strong>分成幾張獨立的印刷物？</strong>三張以上代表這是一套為承載多款產品而建立的彈性系統；只有一張代表這是一個押上去的單一物件，通常出自較小的酒藏，或者是旗艦品。" },
          { en:"<strong>How much of the rectangle is the name?</strong> Above about half, the label is arguing from confidence. Below about a fifth, it is arguing from information — and will usually have a lot of it.",
            ja:"<strong>長方形のどれだけが名か。</strong>半ばを超えれば、その札は自信から論じている。五分の一を下れば、知らせから論じており、たいていそれを多く持っている。",
            zh:"<strong>名字佔了長方形多少面積？</strong>超過一半左右，這張酒標是從自信出發在論證；低於五分之一左右，它是從資訊出發——而且通常資訊很多。" },
          { en:"<strong>Is the paper wet-safe?</strong> Washi and uncoated stock say the brewery expects the bottle to be looked at; coated or synthetic stock says it expects an ice bucket. Neither is better, but they are aimed at different rooms.",
            ja:"<strong>紙は濡れに耐えるか。</strong>和紙や非塗工の紙は、蔵がその瓶を見られるものと見込んだことを語る。塗工や合成の紙は、氷の桶を見込んだことを語る。優劣ではなく、狙う部屋が違う。",
            zh:"<strong>紙耐不耐濕？</strong>和紙與非塗佈紙說明酒藏預期這瓶酒會被端詳；塗佈紙或合成紙說明它預期的是冰桶。兩者無優劣，只是瞄準的房間不同。" },
          { en:"<strong>Where does the designation sit?</strong> On the shoulder or the neck, it is a variable in a system. Integrated into the main composition, it is part of the identity and the brewery has decided this product will not change.",
            ja:"<strong>特定名称はどこに座るか。</strong>肩や首にあれば、それは仕組みのなかの変数である。主の構図に組み込まれていれば、それは正体の一部であり、蔵はこの品が変わらぬと決めている。",
            zh:"<strong>特定名稱放在哪裡？</strong>放在肩標或頸標上，它就是系統裡的一個變數；被整合進主構圖裡，它就是身分的一部分，代表酒藏已經決定這款產品不會改變。" },
          { en:"<strong>Does anything on it work without reading?</strong> A colour, a rule, a mark, a proportion. If nothing does, the bottle was designed for a domestic shelf, and there is no criticism in that — most bottles were.",
            ja:"<strong>読まずに働くものが何かあるか。</strong>色、罫、印、比。何もなければ、その瓶は国内の棚のために設計されたのであり、そこに非難はない。ほとんどの瓶がそうである。",
            zh:"<strong>上面有任何東西是不必閱讀就能運作的嗎？</strong>一個顏色、一條線、一個記號、一種比例。如果沒有，那這瓶酒是為國內貨架設計的——這沒什麼好指責的，多數瓶子都是。" }
        ] },
        { t:"note", title:{ en:"One thing the label cannot do", ja:"札にできぬこと", zh:"酒標做不到的一件事" },
          text:{
            en:"None of this predicts the sake. A brewery that redesigns its labels has redesigned its labels. The visual language is a reliable guide to who a bottle is aimed at, when its identity was last thought about, and how large the lot probably is — and it is no guide whatever to what is inside, which is the one thing a label has never been able to carry.",
            ja:"これらのいずれも酒を予言しない。札を作り替えた蔵は、札を作り替えたのである。見た目の言語は、その瓶が誰に向けられているか、その正体が最後にいつ考え直されたか、そして仕込がおそらくどれほどの大きさかについては確かな導きであり——そして中身については何の導きでもない。それは札が一度も担いえたことのない、唯一のものである。",
            zh:"以上沒有任何一項能預測酒本身。一家重新設計酒標的酒藏，重新設計的就只是它的酒標。這套視覺語言可以可靠地指出：這瓶酒瞄準的是誰、它的身分最近一次被重新思考是什麼時候、這批量大概有多大——而對於裡面裝的是什麼，它毫無指引作用。那正是酒標從來無法承載的唯一一件事。" } }
      ] },

    { t:"related", items:[
      { href:"label.html", why:{ en:"The same rectangle read for what it is obliged to say.", ja:"同じ長方形を、言わねばならぬことの側から読む。", zh:"同一個長方形，從「它必須說什麼」那一面來讀。" } },
      { href:"packaging.html", why:{ en:"The container the label is stuck to, and why it is that size.", ja:"札が貼られる器と、なぜその大きさなのか。", zh:"酒標貼附的容器，以及它為什麼是那個大小。" } },
      { href:"kanji.html", why:{ en:"The characters themselves, stroke by stroke.", ja:"文字そのものを、一画ずつ。", zh:"那些文字本身，一筆一畫。" } },
      { href:"brands.html", why:{ en:"Whose name is on the front, and what a brand is here.", ja:"表に誰の名があるのか、そしてここで銘とは何か。", zh:"正面是誰的名字，以及在這裡「品牌」是什麼。" } },
      { href:"world.html", why:{ en:"What happens to all of this outside Japan.", ja:"国の外で、これらすべてに何が起きるか。", zh:"這一切在日本以外會發生什麼事。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- styles */
SAKE.pages["styles"] = {
  kicker: { en: "Understanding · 04", ja: "理解 · 04", zh: "理解 · 04" },
  title:  { en: "Styles & Types", ja: "酒質と種類", zh: "酒質與種類" },
  jp: "四タイプ · 季節 · 特殊仕込み",
  lede: {
    en: "The legal designations describe how a sake was made. They do not describe what it is like to drink, and two junmai ginjō can have almost nothing in common. The most useful practical framework is the four-type scheme used by Japanese sommelier training, which sorts sake on two axes — how aromatic, and how full — and it maps far better onto serving temperature, glassware and food than the legal grid does.",
    ja: "特定名称は、その酒がどう造られたかを述べている。飲んだときにどうであるかを述べてはおらず、二本の純米吟醸に共通点がほとんどないこともある。実用上最も有用な枠組みは、日本の唎酒師の教育で用いられる四タイプ分類である。香りの高さと味の濃さという二軸で酒を分けるこの分類は、法定の格子よりもはるかによく、供する温度・器・料理に対応する。",
    zh: "特定名稱描述的是一款酒如何被釀造，卻不描述飲用時的感受；兩款純米吟釀可能幾乎毫無共通之處。實務上最有用的架構，是日本唎酒師訓練所採用的四類型分類——以香氣高低與味道濃淡兩軸區分——它與飲用溫度、酒器與料理的對應，遠勝於法定方格。"
  },
  body: [
    { t:"section", id:"four",
      title:{ en:"The four types", ja:"四つのタイプ", zh:"四種類型" }, jp:"薫酒 · 爽酒 · 醇酒 · 熟酒",
      body:[
        { t:"figure",
          caption:{en:"Two axes: aroma intensity on the vertical, flavour weight on the horizontal. Every sake sits somewhere on this plane, and the four names are the four quadrants.",
                   ja:"二つの軸——縦軸に香りの強さ、横軸に味の濃さ。すべての酒はこの平面のどこかにあり、四つの名は四つの象限である。",
                   zh:"兩個軸向：縱軸為香氣強度，橫軸為風味厚度。每一款酒都落在這個平面上的某處，而這四個名稱即是四個象限。"},
          svg: function(lang, L){
            var w = {
              kun:{en:"KUNSHU · fragrant",ja:"薫酒・香り高い",zh:"薰酒・馥郁"},
              so:{en:"SŌSHU · light",ja:"爽酒・軽快",zh:"爽酒・輕快"},
              jun:{en:"JUNSHU · rich",ja:"醇酒・コクがある",zh:"醇酒・醇厚"},
              juku:{en:"JUKUSHU · aged",ja:"熟酒・熟成",zh:"熟酒・陳年"},
              ax:{en:"flavour weight →",ja:"味の濃さ →",zh:"風味厚度 →"},
              ay:{en:"aroma intensity →",ja:"香りの強さ →",zh:"香氣強度 →"},
              k1:{en:"daiginjō · junmai daiginjō",ja:"大吟醸・純米大吟醸",zh:"大吟釀・純米大吟釀"},
              s1:{en:"honjōzō · light junmai · nama",ja:"本醸造・軽快な純米・生酒",zh:"本釀造・輕快純米・生酒"},
              j1:{en:"junmai · kimoto · yamahai",ja:"純米・生酛・山廃",zh:"純米・生酛・山廢"},
              u1:{en:"koshu · kijōshu",ja:"古酒・貴醸酒",zh:"古酒・貴釀酒"}
            };
            function t(k){ return L(w[k]); }
            var s='<svg viewBox="0 0 760 400" role="img" aria-label="Four sake types quadrant">';
            s+='<rect x="90.5" y="30.5" width="580" height="300" fill="none" stroke="#CDC6B9"/>';
            s+='<rect x="90" y="30" width="290" height="150" fill="#EDE5D2"/>';
            s+='<rect x="380" y="30" width="290" height="150" fill="#EEE1DF"/>';
            s+='<rect x="90" y="180" width="290" height="150" fill="#E0E7E9"/>';
            s+='<rect x="380" y="180" width="290" height="150" fill="#E0E6DB"/>';
            s+='<line x1="380" y1="30" x2="380" y2="330" stroke="#B4AC9C"/>';
            s+='<line x1="90" y1="180" x2="670" y2="180" stroke="#B4AC9C"/>';
            function box(x,y,title,sub){
              return '<text x="'+x+'" y="'+y+'" font-family="Georgia,serif" font-size="15" fill="#201E1B" letter-spacing="1.2">'+title+'</text>'+
                     '<text x="'+x+'" y="'+(y+20)+'" font-family="system-ui,sans-serif" font-size="11" fill="#55504A">'+sub+'</text>';
            }
            s+=box(112,66,t("kun"),t("k1"));
            s+=box(402,66,t("juku"),t("u1"));
            s+=box(112,216,t("so"),t("s1"));
            s+=box(402,216,t("jun"),t("j1"));
            s+='<text x="90" y="360" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C" letter-spacing="1.4">'+t("ax").toUpperCase()+'</text>';
            s+='<text x="90" y="20" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C" letter-spacing="1.4">'+t("ay").toUpperCase()+'</text>';
            s+='</svg>';
            return s;
          }
        },
        { t:"grid", cols:2, cells:[
          { h:{en:"Kunshu — fragrant",ja:"薫酒",zh:"薰酒"}, jp:"薫酒",
            d:{en:"High aroma, light body. Ginjō and daiginjō, especially with modern ester-forward yeasts. Serve cold, 8–15 °C, in a wine glass — a small ochoko traps nothing and wastes the whole point. Pairs with delicate, clean food: white fish, shellfish, salad, fruit. Heat destroys it.",
               ja:"香りが高く、味は軽い。吟醸・大吟醸、とりわけ現代の高エステル酵母を用いたもの。8〜15℃で冷やし、ワイングラスで供する。小さなお猪口では香りが立たず、この酒の要点そのものが失われる。白身魚・貝・サラダ・果物など、繊細で清らかな料理と合う。加熱すれば壊れる。",
               zh:"香氣高昂、酒體輕盈。吟釀與大吟釀，尤其使用現代高酯酵母者。以 8–15°C 冷飲，用葡萄酒杯——小豬口留不住香氣，等於浪費了它的全部意義。搭配細緻潔淨的食物：白肉魚、貝類、沙拉、水果。加熱會摧毀它。"} },
          { h:{en:"Sōshu — light and clean",ja:"爽酒",zh:"爽酒"}, jp:"爽酒",
            d:{en:"Low aroma, light body. Honjōzō, light junmai, most fresh nama, and the Niigata <em>tanrei karakuchi</em> school. Serve cold to cool, 5–15 °C. The most versatile category at the table and the most forgiving: it steps aside for food rather than competing with it.",
               ja:"香りは控えめ、味は軽い。本醸造、軽快な純米、多くの生酒、そして新潟の淡麗辛口の系譜。5〜15℃で冷やして供する。食卓において最も汎用性が高く、最も寛容な区分である——料理と競わず、一歩下がる。",
               zh:"香氣低調、酒體輕盈。本釀造、輕快型純米、多數生酒，以及新潟的淡麗辛口一派。以 5–15°C 冷飲。餐桌上最百搭、也最寬容的類別：它為料理讓路，而不與之競爭。"} },
          { h:{en:"Junshu — rich",ja:"醇酒",zh:"醇酒"}, jp:"醇酒",
            d:{en:"Low aroma, full body. Junmai, kimoto, yamahai, most futsūshu worth drinking. This is the category that rewards warming: 40–50 °C opens the umami and softens the acid. Pairs with everything savoury — grilled meat, braises, mushrooms, aged cheese, fried food.",
               ja:"香りは控えめ、味は濃い。純米、生酛、山廃、そして飲むに値する普通酒の多く。燗に報いる区分である——40〜50℃でうま味が開き、酸が丸くなる。焼肉・煮込み・きのこ・熟成チーズ・揚げ物など、あらゆる滋味のある料理と合う。",
               zh:"香氣低調、酒體飽滿。純米、生酛、山廢，以及多數值得一飲的普通酒。這是最能回報溫熱的類別：40–50°C 打開旨味並柔化酸度。搭配一切鮮香之物——燒肉、燉煮、菇蕈、熟成起司、油炸物。"} },
          { h:{en:"Jukushu — aged",ja:"熟酒",zh:"熟酒"}, jp:"熟酒",
            d:{en:"High aroma, full body. Koshu, kijōshu, deliberately matured sake. Amber to brown, smelling of caramel, dried fig, soy and walnut. Serve at room temperature or warm, in a small glass, and treat it as you would an oloroso sherry or a tawny port. Pairs with chocolate, blue cheese, liver, Chinese red-braised dishes.",
               ja:"香りが高く、味も濃い。古酒、貴醸酒、意図的に熟成させた酒。琥珀から褐色を帯び、カラメル・干し無花果・醤油・胡桃の香りをもつ。常温か燗で、小さなグラスに。オロロソ・シェリーやトウニー・ポートに対するのと同じ扱いをすればよい。チョコレート、青カビチーズ、レバー、中華の紅焼と合う。",
               zh:"香氣高昂、酒體飽滿。古酒、貴釀酒，以及刻意熟成之酒。呈琥珀至褐色，散發焦糖、無花果乾、醬油與核桃香。以常溫或溫熱、小杯供飲，可比照 oloroso 雪莉或 tawny 波特處理。搭配巧克力、藍紋起司、肝臟與中式紅燒菜。"} }
        ] }
      ]
    },

    { t:"section", id:"seasonal",
      title:{ en:"The seasonal cycle", ja:"季節の酒", zh:"季節之酒" }, jp:"四季",
      body:[
        { t:"timeline", items:[
          { year:{en:"Nov–Feb",ja:"十一月〜二月",zh:"十一月至二月"}, era:{en:"Winter",ja:"冬",zh:"冬"}, eraJp:"冬",
            title:{en:"Shiboritate · Arabashiri · Shinshu",ja:"しぼりたて・荒走り・新酒",zh:"搾立・荒走・新酒"}, jp:"新酒",
            text:{en:"Straight from the press, often unpasteurised and undiluted. Cloudy, gassy, bracing, sometimes almost raw. This is sake at its most vivid and least composed, and it will not taste the same in three months.",ja:"槽から直に。多くは火入れも加水もしていない。濁り、ガスを含み、引き締まり、時にほとんど生々しい。日本酒が最も鮮烈で、最も整っていない姿である。三か月後には同じ味ではない。",zh:"直接來自搾機，多半未火入亦未加水。混濁、帶氣、凜冽，有時近乎生猛。這是日本酒最鮮明、也最未經整理的樣貌，三個月後便不再是同一個味道。"} },
          { year:{en:"Mar–May",ja:"三月〜五月",zh:"三月至五月"}, era:{en:"Spring",ja:"春",zh:"春"}, eraJp:"春",
            title:{en:"Haruzake · nama releases",ja:"春酒・生酒",zh:"春酒・生酒"}, jp:"春酒",
            text:{en:"Pink-labelled, often lightly sparkling or nigori, marketed for cherry-blossom viewing. Also the main season for nama-chozō and for the first releases of the year's junmai. Lighter and softer than winter's new sake.",ja:"桜の花見に合わせた桃色のラベル、微発泡やにごりも多い。生貯蔵酒の主な季節であり、その年の純米が最初に出る時期でもある。冬の新酒より軽く柔らかい。",zh:"粉色酒標，常為微氣泡或濁酒，主打賞櫻。也是生貯藏酒的主要季節，以及當年純米最早出貨的時期。比冬季新酒更輕、更柔。"} },
          { year:{en:"Jun–Aug",ja:"六月〜八月",zh:"六月至八月"}, era:{en:"Summer",ja:"夏",zh:"夏"}, eraJp:"夏",
            title:{en:"Natsuzake",ja:"夏酒",zh:"夏酒"}, jp:"夏酒",
            text:{en:"A recent commercial invention and a good one: low alcohol, high acid, served very cold or on ice, sometimes sparkling. Blue and white labels. An attempt to give sake a hot-weather occasion, which it historically lacked.",ja:"近年の商業的な発明であり、良い発明である——低アルコール、高酸度、よく冷やすか氷を入れて、時に発泡。青と白のラベル。歴史的に欠けていた「暑い季節の場面」を日本酒に与えようとする試みである。",zh:"近年的商業發明，且是好的發明：低酒精、高酸度，極冷飲用或加冰，有時帶氣泡。藍白色酒標。這是為日本酒創造「炎熱季節場合」的嘗試——那正是它歷史上所欠缺的。"} },
          { year:{en:"Sep–Oct",ja:"九月〜十月",zh:"九月至十月"}, era:{en:"Autumn",ja:"秋",zh:"秋"}, eraJp:"秋",
            title:{en:"Hiyaoroshi · Akiagari",ja:"ひやおろし・秋あがり",zh:"冷卸・秋上"}, jp:"ひやおろし",
            text:{en:"Sake pasteurised once in spring, rested through the summer, and shipped in autumn without a second heating. The rest has rounded it: the acid has softened, the aroma has settled into the body. For many drinkers this is the best moment in a sake's life.",ja:"春に一度火入れし、夏のあいだ寝かせ、二度目の火入れをせずに秋に出荷する酒。この休息が酒を丸くする——酸は和らぎ、香りは味に落ち着く。多くの飲み手にとって、これが酒の一生で最も良い瞬間である。",zh:"春季火入一次、經一夏靜置、秋季不再加熱即出貨的酒。這段休息使它變得圓潤：酸度柔化，香氣沉入酒體。對許多飲者而言，這是一款酒一生中最好的時刻。"} }
        ] }
      ]
    },

    { t:"section", id:"special",
      title:{ en:"Special constructions", ja:"特殊な仕込み", zh:"特殊釀法" }, jp:"貴醸酒 · 古酒 · 発泡 · 樽",
      body:[
        { t:"defs", items:[
          { term:{en:"Kijōshu",ja:"貴醸酒",zh:"貴釀酒"}, jp:"貴醸酒",
            def:{en:"Finished sake replaces part of the water at the third mash addition. The yeast, already swimming in alcohol, cannot ferment out the sugar, and the result is dense and sweet — often SMV −30 or lower — with a syrupy texture and enormous ageing potential. The method appears in the <em>Engishiki</em> of 927 and was reconstructed by the National Research Institute of Brewing in 1973.",
                 ja:"三段目の仕込みで、水の一部を完成した清酒に置き換える。既にアルコールのなかにいる酵母は糖を発酵しきれず、濃密で甘い酒——日本酒度−30以下も珍しくない——がとろみのある質感とともに生まれ、熟成の潜在力は極めて大きい。技法は九二七年の『延喜式』に現れ、一九七三年に醸造試験所によって再構成された。",
                 zh:"於第三段仕込時以成酒取代部分水。已浸於酒精中的酵母無法把糖發酵完，成品濃密甘美——日本酒度 −30 以下並不罕見——帶糖漿般質地，陳年潛力極大。此法見於西元 927 年的《延喜式》，1973 年由釀造試驗所復原。"} },
          { term:{en:"Koshu",ja:"古酒",zh:"古酒"}, jp:"長期熟成酒",
            def:{en:"Deliberately aged three years and beyond, sometimes for decades. Colour moves from straw to amber to mahogany; aroma develops caramel, dried fig, soy, mushroom and walnut through Maillard reactions between amino acids and residual sugars. Junmai with high amino acid ages fastest and furthest; a highly-milled daiginjō has less to work with and often simply fades. Warm storage accelerates everything, cold storage preserves freshness — breweries choose one or the other deliberately.",
                 ja:"三年以上、時に数十年にわたり意図的に熟成させたもの。色は麦藁から琥珀、そしてマホガニーへ移る。アミノ酸と残糖のあいだのメイラード反応により、カラメル・干し無花果・醤油・きのこ・胡桃の香りが育つ。アミノ酸の多い純米が最も速く、最も遠くまで熟成する。高精白の大吟醸は素材が乏しく、単に痩せていくことが多い。高温貯蔵はすべてを加速し、低温貯蔵は新鮮さを保つ。蔵はどちらかを意図して選ぶ。",
                 zh:"刻意陳放三年以上，有時達數十年。色澤自麥稈色轉琥珀、再轉桃花心木色；經胺基酸與殘糖的梅納反應，發展出焦糖、無花果乾、醬油、菇蕈與核桃香。胺基酸高的純米陳化最快也最深遠；高度精米的大吟釀可用之物較少，往往只是漸漸凋萎。高溫貯藏加速一切，低溫貯藏保存鮮度——酒藏會刻意擇一。"} },
          { term:{en:"Sparkling sake",ja:"発泡清酒",zh:"氣泡清酒"}, jp:"発泡清酒 · awa酒",
            def:{en:"Three routes. Bottle-conditioned secondary fermentation gives the finest, most persistent bead and a yeasty complexity, and is the basis of the <em>awa</em> sake standard, which additionally requires clarity, 100% rice, natural carbonation and a minimum pressure. Tank fermentation under pressure is cheaper and cleaner. Injected CO₂ is cheapest and gives a coarse, short-lived bubble. Alcohol ranges from about 5% for the sweet, cloudy commercial styles to full strength for the serious ones.",
                 ja:"経路は三つ。瓶内二次発酵は最も細かく持続する泡と酵母由来の複雑さをもたらし、awa酒の基準の基礎でもある（同基準はさらに、透明であること、原料は米のみ、自然発泡であること、一定以上の内圧を求める）。密閉タンク発酵は安価で清澄。炭酸ガス注入は最も安く、泡は粗く短命である。アルコール分は、甘く白濁した商業的な型で5%程度から、本格的なものでは通常度数まで。",
                 zh:"三種途徑。瓶內二次發酵帶來最細緻持久的氣泡與酵母帶來的複雜度，也是 awa 酒標準的基礎（該標準另要求澄清、100% 米製、自然發泡並達一定壓力）。密閉槽發酵較便宜且潔淨。注入二氧化碳最廉價，氣泡粗且短命。酒精自甘甜混濁的商業型約 5%，到正統款的正常度數不等。"} },
          { term:{en:"Taruzake",ja:"樽酒",zh:"樽酒"}, jp:"樽酒",
            def:{en:"Matured in Yoshino cedar casks for days rather than months — cedar gives up its aroma fast, and a week is often enough. The resin note is bright, green and slightly medicinal, quite unlike oak. Historically an accident of shipping to Edo; now a deliberate style, and the sake broken open with mallets at a <em>kagami-biraki</em> ceremony.",
                 ja:"吉野杉の樽で、月ではなく日の単位で熟成させる。杉は香りを速く与えるため、一週間で足りることが多い。樹脂香は明るく青く、わずかに薬品的で、オークとはまったく異なる。もとは江戸への輸送の副産物であったが、いまは意図された酒質であり、鏡開きで槌で割られるのもこの酒である。",
                 zh:"以吉野杉木樽熟成，以「天」而非「月」為單位——杉木釋香甚快，一週往往已足。其樹脂調明亮、青綠、略帶藥感，與橡木截然不同。原是運往江戶途中的副產物，如今是刻意為之的風格，也正是鏡開儀式上以木槌敲開的那種酒。"} },
          { term:{en:"Low-alcohol and dessert sake",ja:"低アルコール酒・デザート酒",zh:"低酒精與甜點酒"}, jp:"低アルコール",
            def:{en:"Made by stopping fermentation early, brewing at very high water ratios, or blending. Typically 5–13% and often high in acid to keep the balance. A growing category, driven by younger drinkers, export markets and the same forces that produced low-alcohol beer and wine.",
                 ja:"発酵を早く止める、汲水を大幅に増やす、あるいは調合による。おおむね5〜13%で、均衡を保つため酸を高くとることが多い。若い飲み手、輸出市場、そして低アルコールのビールやワインを生んだのと同じ力によって拡大している区分である。",
                 zh:"作法為提早停止發酵、以極高汲水比例釀造，或進行調和。通常 5–13%，並常以較高酸度維持平衡。這是一個成長中的類別，推動力來自年輕飲者、出口市場，以及催生低酒精啤酒與葡萄酒的同一批力量。"} },
          { term:{en:"Doburoku",ja:"どぶろく",zh:"濁醪"}, jp:"どぶろく",
            def:{en:"The unfiltered farmhouse mash — legally <em>not</em> seishu, because it is never strained. Home production is illegal in Japan, but licensed doburoku has been permitted in designated special zones since 2002, and it has become a small rural revival movement. Thick, sour, alive, and much closer to what most people drank for most of Japanese history.",
                 ja:"漉さない、農家の醪そのもの。一度も漉さないため、法的には清酒ではない。日本では自家製造は違法だが、二〇〇二年以降、特区制度により免許を得たどぶろくが認められ、農村の小さな復興運動となっている。濃く、酸っぱく、生きており、日本史の大半のあいだ多くの人が飲んでいたものにずっと近い。",
                 zh:"未經過濾的農家醪——因從未過濾，法律上並非清酒。日本禁止自家釀造，但自 2002 年起，特區制度容許領照的濁醪，並形成一場小規模的鄉村復興運動。濃稠、帶酸、活著，且遠比清酒更接近日本史上多數時期多數人所飲之物。"} }
        ] }
      ]
    },

    { t:"section", id:"movements",
      title:{ en:"Contemporary movements", ja:"現代の潮流", zh:"當代潮流" }, jp:"現代",
      body:[
        { t:"compare", cols:2, items:[
          { title:{en:"The return of the wild",ja:"野生への回帰",zh:"回歸野性"}, jp:"生酛・木桶・蔵付き酵母",
            text:{en:"A visible group of breweries has abandoned added lactic acid, purchased yeast and enamel tanks in favour of kimoto starters, wooden vats and house microflora. The results are higher in acid, more variable between batches, and far more expensive to make. The argument is that a century of standardisation removed the very thing that made sake worth studying.",
                  ja:"少なからぬ蔵が、乳酸添加・購入酵母・琺瑯タンクを捨て、生酛・木桶・蔵付きの菌叢へ向かっている。結果は酸が高く、仕込みごとの振れ幅が大きく、造るのにはるかに費用がかかる。彼らの主張はこうである——一世紀にわたる標準化は、日本酒を研究に値するものにしていたまさにそのものを取り去った。",
                  zh:"一批引人注目的酒藏放棄了添加乳酸、外購酵母與琺瑯槽，轉向生酛酒母、木桶與自藏菌相。成果是酸度更高、批次差異更大、製作成本高得多。其論點是：一個世紀的標準化，正好抹去了使日本酒值得研究的那個東西。"} },
          { title:{en:"Sake designed for the table",ja:"食卓のための設計",zh:"為餐桌而設計"}, jp:"食中酒",
            text:{en:"A reaction against competition-driven aroma. <em>Shokuchūshu</em> — sake meant to be drunk with food rather than admired alone — favours moderate aroma, clear acid and a short finish. It is the dominant direction in serious domestic brewing, and the direct opposite of what wins gold medals.",
                  ja:"鑑評会主導の香り偏重への反動。食中酒——単独で鑑賞するのではなく料理とともに飲むための酒——は、控えめな香り、明瞭な酸、短い余韻を志向する。国内の本格的な造りにおける支配的な方向であり、金賞を取る酒とは正反対である。",
                  zh:"對鑑評會導向之香氣崇拜的反動。「食中酒」——為佐餐而非獨自鑑賞而釀的酒——追求適中的香氣、清晰的酸度與短促的收尾。這是日本國內認真釀造的主流方向，恰與奪金賞之酒背道而馳。"} },
          { title:{en:"Sake made outside Japan",ja:"国外の酒",zh:"日本以外的釀造"}, jp:"海外醸造",
            text:{en:"Breweries now operate in the United States, Canada, France, Norway, Spain, Australia, Vietnam, Taiwan, China and elsewhere, some run by Japanese kura, some entirely independent. They may not use the term <em>Nihonshu</em>, and they face real constraints — local rice, local water, no established supply of kōji spores — which is precisely what makes the category interesting.",
                  ja:"現在、酒蔵はアメリカ、カナダ、フランス、ノルウェー、スペイン、オーストラリア、ベトナム、台湾、中国などで操業しており、日本の蔵によるものも、完全に独立したものもある。「日本酒」の語は用いられず、現実の制約——地元の米、地元の水、種麹の供給が確立していないこと——に直面している。まさにその点が、この区分を興味深いものにしている。",
                  zh:"如今美國、加拿大、法國、挪威、西班牙、澳洲、越南、台灣、中國等地皆有酒藏營運，有的由日本酒藏經營，有的完全獨立。它們不得使用「日本酒」一詞，並面臨真實的限制——在地米、在地水、種麴供應尚未建立——而這正是此類別引人入勝之處。"} },
          { title:{en:"Single-vineyard thinking",ja:"単一圃場という発想",zh:"單一田區的思考"}, jp:"テロワール志向",
            text:{en:"Breweries increasingly name the field, the farmer and the harvest year, and bottle single-rice, single-plot, single-tank lots. Whether sake has terroir in the wine sense is genuinely contested — see <a href=\"terroir.html\">Terroir</a> — but the commercial and cultural direction is unmistakable.",
                  ja:"圃場名・生産者名・収穫年を明記し、単一の米・単一の圃場・単一のタンクで瓶詰する蔵が増えている。日本酒にワインと同じ意味でのテロワールがあるかどうかは本当に議論の分かれるところだが——<a href=\"terroir.html\">風土</a>を参照——商業的・文化的な方向性は紛れもない。",
                  zh:"愈來愈多酒藏標明田區、農民與收成年份，並以單一米種、單一田區、單一酒槽裝瓶。日本酒是否具有葡萄酒意義上的風土，確實仍有爭議——參見<a href=\"terroir.html\">風土</a>——但商業與文化上的方向已毋庸置疑。"} }
        ] }
      ]
    },

{ t:"section", id:"clarity",
      title:{ en:"The clarity spectrum", ja:"澄みと濁りの幅", zh:"澄濁的光譜" }, jp:"濾過と濁り",
      body:[
        { t:"p", text:{
          en:"Two separate decisions produce what looks like one axis. The first is how coarsely the mash was separated from the solids; the second is whether the pressed sake was filtered through activated carbon afterwards. They are often confused, and they do completely different things.",
          ja:"見かけ上は一つの軸に見えるものが、二つの別々の判断から生まれている。第一は、醪と固形分をどれだけ粗く分けたか。第二は、搾ったのちに活性炭で濾したかどうかである。この二つはしばしば混同されるが、まったく異なる働きをする。",
          zh:"看似同一條軸線的東西，其實出自兩個獨立的決定。其一是醪與固形物分離得多粗；其二是榨出後是否再經活性碳過濾。兩者常被混淆，作用卻完全不同。" } },
        { t:"table",
          cols:[{en:"Term",ja:"語",zh:"詞彙"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"What it is",ja:"内容",zh:"內容"}],
          jpCols:[1],
          rows:[
            [{en:"Doburoku",ja:"どぶろく",zh:"濁醪"},"濁酒",
             {en:"Unpressed mash. Legally <em>not</em> seishu at all, because seishu must be strained; it is licensed as a separate category and made in small quantities, often at shrines and under special-zone permits.",ja:"搾らない醪そのもの。清酒は漉さねばならないため、法的には清酒ではない。別の分類として免許され、神社や特区の許可のもとで少量造られることが多い。",zh:"未經壓榨的醪。因清酒必須經過濾，它在法律上根本不算清酒；屬另一類別的執照，多在神社或特區許可下少量製造。"}],
            [{en:"Nigorizake",ja:"にごり酒",zh:"濁酒（にごり）"},"濁り酒",
             {en:"Pressed through a coarse mesh so rice solids pass. Legally seishu. Ranges from thin and milky to thick enough to stand a spoon in.",ja:"目の粗い布や網で漉し、米の固形分を通したもの。法的には清酒である。薄く乳白のものから、匙が立つほど濃いものまで幅がある。",zh:"以粗網過濾、讓米固形物通過。法律上仍屬清酒。濃稠度從稀薄乳白到能立起湯匙者皆有。"}],
            [{en:"Usunigori",ja:"うすにごり",zh:"薄濁"},"薄濁り",
             {en:"Lightly hazy — a veil rather than a cloud. Texture without weight.",ja:"わずかに霞んだ状態。雲ではなく薄衣である。重さのない質感を与える。",zh:"輕微朦朧——是一層薄紗而非雲霧。帶來質地卻不增重量。"}],
            [{en:"Origarami",ja:"おりがらみ",zh:"帶澱"},"澱絡み",
             {en:"Clear sake bottled with a little of the fine settled lees stirred back in. Common on fresh winter releases, often lightly sparkling.",ja:"澄んだ酒に、沈んだ細かな澱をいくらか戻して瓶詰めしたもの。冬の新酒に多く、しばしば軽く発泡する。",zh:"在清澈的酒中拌回少許沉降的細澱後裝瓶。常見於冬季新酒，且常帶輕微氣泡。"}],
            [{en:"Muroka",ja:"無濾過",zh:"無濾過"},"無濾過",
             {en:"No activated-carbon filtration. Nothing to do with cloudiness — a muroka sake is usually perfectly clear, just faintly golden and fuller in flavour, because the carbon that would have stripped colour and rough edges was never used.",ja:"活性炭による濾過をしていないこと。濁りとは関係がない。無濾過の酒はたいてい澄んでおり、ただわずかに黄金を帯び、味は厚い。色と角を削り取るはずの炭が、そもそも使われていないからである。",zh:"未經活性碳過濾。與混濁無關——無濾過的酒通常十分清澈，只是略帶金黃、風味更飽滿，因為本該削去顏色與稜角的活性碳從未被使用。"}],
            [{en:"Sumizake",ja:"澄み酒",zh:"清澄之酒"},"清酒",
             {en:"The default: pressed, settled, filtered, clear. What the word <em>seishu</em> literally means, and the technical achievement that separated Japanese sake from every other rice drink in Asia in the sixteenth century.",ja:"既定の姿——搾り、澱を引き、濾し、澄ませたもの。「清酒」という語が文字どおり意味するものであり、十六世紀に日本酒をアジアの他の米の酒すべてから分けた技術的達成である。",zh:"預設狀態：壓榨、沉降、過濾、澄清。這正是「清酒」二字的字面意義，也是十六世紀讓日本酒與亞洲其他所有米酒分道揚鑣的技術成就。"}]
          ] },
        { t:"note", label:{en:"Serving nigori",ja:"にごり酒の供し方",zh:"濁酒的供飲"}, text:{
          en:"The lees settle. Whether to stir them back in is a real choice: gently inverted, a nigori is uniform and sweet; poured off the top first, it gives you a clear aperitif and then a thicker second glass. Some breweries print instructions. If the bottle is a live nigori still fermenting, treat it as a pressurised container — chill it hard, keep it upright and open it slowly over a sink.",
          ja:"澱は沈む。それを戻すかどうかは、実際の選択である。静かに上下を返せば、にごりは均一で甘くなる。上澄みから注げば、まず澄んだ食前酒が得られ、次の一杯が濃くなる。指示を刷り込んでいる蔵もある。まだ発酵している活性にごりであれば、それは加圧された容器である——よく冷やし、立てたまま、流しの上でゆっくり開けること。",
          zh:"澱會沉降。要不要把它拌回去是一個真實的選擇：輕輕倒轉，濁酒便均勻而甘甜；先倒上層清液，則先得到一杯清澈的餐前酒，第二杯再濃厚。有些酒藏會把說明印在瓶上。若那是仍在發酵的活性濁酒，請把它當作加壓容器對待——徹底冰鎮、保持直立，並在水槽上方緩慢開瓶。" } }
      ]
    },

    { t:"section", id:"strength",
      title:{ en:"Strength as a style choice", ja:"度数という選択", zh:"作為風格選擇的酒精度" }, jp:"原酒と低アルコール",
      body:[
        { t:"compare", cols:3, items:[
          { title:{en:"Genshu",ja:"原酒",zh:"原酒"}, jp:"17–20%",
            text:{en:"Undiluted. Everything is more concentrated — sweetness, acid, savour and heat. Best cold, over a single large ice cube, or cut with a splash of water at the table, which is a perfectly respectable thing to do and what genshu was historically for.",ja:"割水をしていない。甘み、酸、旨味、そして熱——すべてが凝縮している。冷やして、大きな氷ひとつを入れて、あるいは卓上で水を少し差して飲むのがよい。それは十分に真っ当な作法であり、歴史的に原酒はそのためのものであった。",zh:"未加水稀釋。甜、酸、旨味與灼熱感——一切都更濃縮。最好冰飲、加一顆大冰塊，或在餐桌上兌一點水；那是完全體面的做法，也是原酒歷來的用途。"} },
          { title:{en:"Standard",ja:"標準",zh:"標準"}, jp:"15–16%",
            text:{en:"The default, reached by adding brewing water after pressing. Fifteen per cent is not a natural landing point — it is a deliberate target, chosen because it is where sake balances best against Japanese food and where the historical tax bands sat.",ja:"既定の姿であり、上槽後に仕込水を加えて到達する。十五パーセントは自然に落ち着く点ではなく、意図された目標である。日本の食に対して最も均衡がとれ、かつ歴史的な税の区分がそこにあったために選ばれた。",zh:"預設狀態，靠上槽後加入仕込水達成。十五%並非自然的落點，而是刻意設定的目標：因為那是清酒與日本料理最平衡之處，也是歷史上稅率級距所在。"} },
          { title:{en:"Low alcohol",ja:"低アルコール",zh:"低酒精"}, jp:"5–13%",
            text:{en:"A fast-growing modern category, made by stopping fermentation early or by brewing to a lower target rather than by watering down a finished sake — the difference is audible. Often slightly sweet and lightly sparkling, and aimed squarely at drinkers who find 16% too much at lunch.",ja:"急速に伸びている現代の分類。仕上がった酒を薄めるのではなく、発酵を早く止めるか、低い目標で仕込むことで造られる。その違いは飲めば分かる。やや甘く軽い発泡を伴うことが多く、昼食に16%は強すぎると感じる飲み手に真っ直ぐ向けられている。",zh:"快速成長的現代類別，作法是提早中止發酵或以較低目標釀造，而非把成酒兌水——差別喝得出來。多半略甜並帶輕微氣泡，明確鎖定那些覺得午餐時 16% 太強的飲者。"} }
        ] }
      ]
    },

    { t:"section", id:"frontier",
      title:{ en:"The frontier", ja:"辺境", zh:"前沿" }, jp:"現在進行形の実験",
      body:[
        { t:"p", text:{
          en:"Sake is in an unusually experimental decade, driven by a shrinking domestic market that rewards distinctiveness and an export market with no fixed expectations. Some of this will last and some will not, but all of it is being made and sold now.",
          ja:"日本酒はいま、異例なほど実験的な十年のなかにある。個性に報いる縮小した国内市場と、固定した期待をもたない輸出市場とが、それを駆り立てている。残るものもあれば残らぬものもあるだろうが、いずれもいま造られ、売られている。",
          zh:"清酒正處於一個異常實驗性的十年，其推力來自一個獎勵獨特性的萎縮國內市場，以及一個尚無既定期待的出口市場。其中有些會留下、有些不會，但它們此刻都在被釀造與販售。" } },
        { t:"ul", items:[
          { en:"<strong>Wooden vats again.</strong> A deliberate return to cedar fermentation after seventy years of stainless steel, accepting variation as the price of character. The constraint is not demand but coopers: the number of craftsmen who can build a <em>kioke</em> is very small, and several breweries have funded apprenticeships to keep the trade alive.",
            ja:"<strong>ふたたび木桶。</strong>七十年のステンレスののち、意図して杉の桶へ戻る動きである。個性の代償として変動を受け入れる。制約は需要ではなく桶師である。木桶を作れる職人はきわめて少なく、その技を絶やさぬために弟子入りの費用を負担している蔵もある。",
            zh:"<strong>木桶再起。</strong>在七十年的不鏽鋼之後，刻意回歸杉木桶發酵，以接受變異作為換取個性的代價。限制不在需求而在桶師：能造木桶的匠人極少，數家酒藏已出資支持學徒制以延續這門技藝。" },
          { en:"<strong>Bodaimoto revived.</strong> The medieval temple starter, reconstructed from documents in Nara from 1996 onward and now made by a growing group of breweries. It gives a wild, lactic, faintly sour sake that tastes genuinely unlike anything else in the modern category.",
            ja:"<strong>菩提酛の復活。</strong>中世の寺の酒母を、一九九六年以降、奈良で文献から再構成したものである。いまでは造る蔵が増えつつある。野性的で乳酸的、かすかに酸のある酒になり、現代の分類のなかで他に似たもののない味がする。",
            zh:"<strong>菩提酛復育。</strong>中世寺院的酒母，自 1996 年起在奈良依文獻重建，如今釀造它的酒藏日益增加。它產出野性、帶乳酸、微酸的酒，嚐起來與現代類別中的任何東西都真的不同。" },
          { en:"<strong>Cask finishing.</strong> Sake matured in used whisky, sherry or wine barrels. Legally still seishu if nothing is added, stylistically a hybrid, and commercially aimed at spirits drinkers. Divisive, and some of it is very good.",
            ja:"<strong>樽での後熟。</strong>使用済みのウイスキー、シェリー、ワインの樽で寝かせる。何も加えなければ法的にはなお清酒であり、様式としては雑種であり、商業的には蒸留酒の飲み手に向けられている。賛否は分かれ、そして良いものもある。",
            zh:"<strong>桶陳收尾。</strong>在威士忌、雪莉或葡萄酒的舊桶中熟成。若未添加任何東西，法律上仍是清酒；風格上是混血兒；商業上鎖定烈酒飲者。評價兩極，其中有些非常出色。" },
          { en:"<strong>Milling in both directions.</strong> At one extreme, competitive polishing below 20%, which some brewers argue is now marketing rather than craft; at the other, deliberate high-ratio brewing at 80% or 90%, arguing that the outer grain carries flavour worth keeping if you can manage it.",
            ja:"<strong>精米は両方向へ。</strong>一方の極には20%を下回る競い合いがあり、それはもはや技ではなく宣伝だと説く造り手もいる。もう一方の極には、精米歩合80%や90%での意図的な造りがある。外層にも、御しうるならば残す価値のある味がある、という主張である。",
            zh:"<strong>精米朝兩個方向走。</strong>一端是削到 20% 以下的競賽，有釀造者主張那已是行銷而非工藝；另一端則是刻意以 80% 或 90% 的高步合釀造，主張只要駕馭得住，米的外層也帶著值得保留的風味。" },
          { en:"<strong>Uncommon rice.</strong> Revived pre-war landraces, table rice grown by a named farmer, single-field bottlings, and in a few cases rice the brewery grows itself. All of it is an argument about place, made through the one ingredient that can be moved.",
            ja:"<strong>珍しい米。</strong>戦前の在来種の復活、名を挙げた農家の飯米、単一圃場の瓶詰め、そして数例では蔵が自ら作る米。いずれも、動かすことのできる唯一の原料を通じてなされる、土地についての主張である。",
            zh:"<strong>不尋常的米。</strong>復育的戰前在來種、由具名農家栽培的食用米、單一田區裝瓶，以及少數由酒藏自耕的米。這一切都是透過那個唯一可以搬動的原料，所提出的關於「地方」的主張。" },
          { en:"<strong>Sake designed for the glass, not the cup.</strong> Lower alcohol, higher acidity, restrained sweetness, bottled at 375 ml or 500 ml with a cork or a crown cap. Explicitly built to sit on a wine list, and to be finished by two people over dinner.",
            ja:"<strong>猪口ではなくグラスのための酒。</strong>アルコールは低く、酸は高く、甘みは控えめで、375mlや500mlの瓶にコルクや王冠で詰められる。ワインリストに載り、二人で夕食のあいだに飲み切ることを、明示して想定している。",
            zh:"<strong>為酒杯而非豬口設計的酒。</strong>更低的酒精、更高的酸度、克制的甜味，裝在 375 或 500 毫升的瓶中，以軟木塞或皇冠蓋封口。明確地為登上酒單而設計，並預設由兩人在一頓晚餐間喝完。" }
        ] }
      ]
    },

{ t:"section", id:"vanished",
      title:{ en:"Styles that vanished, and two that came back", ja:"消えた型と、戻ってきた二つ", zh:"消失的類型，以及回來的兩種" }, jp:"失われた酒",
      body:[
        { t:"p", text:{
          en:"The categories on a modern shelf are a survivors' list. Several styles that were once ordinary have gone entirely, usually for one of three reasons: tax law reclassified them out of existence, wartime rationing killed them, or clarified sake simply outcompeted them. A couple have come back, and one never quite went away.",
          ja:"今日の棚に並ぶ区分は、生き残りの一覧である。かつて当たり前であったいくつもの型がまるごと消えた。理由はおおむね三つのいずれかである——税法が分類の外へ追いやったか、戦時の統制が殺したか、あるいは澄んだ酒に単純に負けたか。いくつかは戻ってきており、一つはついに消えきらなかった。",
          zh:"現代酒架上的分類，是一份倖存者名單。好幾種曾經稀鬆平常的類型已完全消失，原因通常是三者之一：稅法把它們重新分類到不存在、戰時配給殺死了它們，或它們單純輸給了澄清的清酒。有幾種回來了，而有一種始終沒有真正消失。" } },

        { t:"defs", items:[
          { term:{ en:"Hashira-jōchū", ja:"柱焼酎", zh:"柱燒酎" }, jp:"柱焼酎", romaji:"hashira-jōchū",
            def:{ en:"The Edo-period practice of adding a measure of shōchū to the mash before pressing. It is described in seventeenth-century brewing manuals, and it was done for preservation: alcohol above a certain level stops a mash spoiling on a warm autumn night or in transit to Edo. It also lightened the sake and lifted its aroma. This is the direct ancestor of modern alcohol addition — which means that <em>aruten</em>, routinely described as a twentieth-century economy measure, is in fact a three-hundred-year-old preservation technique with a modern legal cap on it.",
              ja:"上槽の前に醪へ焼酎を加える、江戸期の技法である。十七世紀の酒造書に記され、保存のために行われた——ある水準を超えるアルコールは、暖かい秋の夜や江戸への輸送のあいだの腐敗を止める。同時に酒を軽くし、香りを立てた。これが現代のアルコール添加の直接の祖である。すなわち、二十世紀の節約策として語られがちなアル添は、実のところ三百年の歴史をもつ保存技法に、現代の法的上限を課したものである。",
              zh:"江戶時期在上槽前把一定量燒酎加入醪中的做法。十七世紀的釀酒書中已有記載，其目的是保存：酒精超過某個水平，就能阻止醪在溫暖的秋夜或運往江戶的途中敗壞。它同時也讓酒變輕、香氣提升。這正是現代添加酒精的直系祖先——換言之，常被說成二十世紀節約手段的「アル添」，其實是一項有三百年歷史的保存技法，只是加上了現代的法定上限。" } },
          { term:{ en:"Akazake and the ash sakes", ja:"赤酒と灰持酒", zh:"赤酒與灰持酒" }, jp:"灰持酒", romaji:"akumochi-zake",
            def:{ en:"Before pasteurisation, wood ash stirred into the finished sake raised its pH, precipitated protein and stopped it souring — the same chemistry that produced clarified sake in Itami, used here as a preservative in its own right. The result is amber to reddish and slightly sweet. Kumamoto's <em>akazake</em> was the domain's official sake under the Hosokawa lords, protected by a ban on rival production, and it survived until wartime prohibition; Shimane's <em>jidenshu</em> is a parallel case revived in recent decades. The ash puts these drinks outside the legal definition of seishu, so they are taxed and labelled as something else — and they survive today mostly as New Year ceremonial sake and as a prized cooking liquor.",
              ja:"火入れ以前、出来上がった酒に木灰を加えることはpHを上げ、たんぱく質を沈殿させ、酸敗を止めた。伊丹に清酒を生んだのと同じ化学が、ここでは保存そのもののために用いられている。得られる酒は琥珀から赤みを帯び、やや甘い。熊本の赤酒は細川家のもとで御国酒であり、他の酒の製造を禁じて守られ、戦時の禁止まで生き延びた。島根の地伝酒は並行する例であり、近年に復活した。灰はこれらを清酒の法的定義の外へ置くため、別の区分として課税され表示される。今日それらは主に、正月の儀礼の酒として、そして料理人に重んじられる調理の酒として残っている。",
              zh:"在火入問世之前，把木灰拌入成酒可提高 pH、使蛋白質沉澱並阻止酸敗——與在伊丹造就清酒的是同一套化學，只是在這裡直接被當作保存手段。成品呈琥珀至偏紅色，略帶甜味。熊本的「赤酒」在細川家治下是藩的御用酒，並以禁止他酒生產加以保護，一直存續到戰時遭禁；島根的「地傳酒」是平行的例子，近數十年間獲得復興。灰使這些酒落在清酒的法律定義之外，因而以其他類別課稅與標示——如今它們主要以新年儀禮之酒，以及廚師珍視的烹調用酒的形式留存。" } },
          { term:{ en:"Sanbai zōjōshu", ja:"三倍増醸酒", zh:"三倍增釀酒" }, jp:"三増酒", romaji:"sanzō-shu",
            def:{ en:"The most consequential vanished category. Faced with wartime and postwar rice shortages, breweries were permitted to extend a mash with alcohol, sugar, acid and amino acids to roughly three times its original volume. It kept the industry alive and it taught a generation what sake tasted like — which is a large part of why so many Japanese people over sixty say they do not like sake. The category was progressively restricted and finally written out of the law in 2006. Almost nothing else explains the shape of the modern market as directly.",
              ja:"消えた区分のうち最も帰結の大きいものである。戦中戦後の米不足に直面し、蔵は醪をアルコール、糖、酸、アミノ酸で元のおよそ三倍の量まで増やすことを許された。それは産業を生かし、そして一世代に日本酒とはこういう味だと教えた。六十を越えた日本人に日本酒は好きでないと言う者が多い理由の、大きな部分がこれである。この区分は次第に制限され、平成十八年（2006）についに法から消えた。現代の市場の形をこれほど直接に説明するものは、他にほとんどない。",
              zh:"消失的類別中後果最重大的一個。面對戰時與戰後的缺米，酒藏獲准以酒精、糖、酸與胺基酸把醪擴充到原體積的約三倍。它讓產業活了下來，也教會了整整一個世代「清酒是這個味道」——這正是許多六十歲以上的日本人說自己不喜歡清酒的一大原因。這個類別逐步受限，並終於在二〇〇六年從法律中被刪除。幾乎沒有別的東西，能如此直接地解釋現代市場的形狀。" } },
          { term:{ en:"Nerizake and shirozake", ja:"練酒と白酒", zh:"練酒與白酒" }, jp:"練酒・白酒", romaji:"nerizake / shirozake",
            def:{ en:"Two thick, sweet, unfiltered rice drinks that were once widespread and are now confined to specific occasions. <em>Nerizake</em>, a northern-Kyūshū speciality, is ground so fine it pours like cream. <em>Shirozake</em> — steamed rice and kōji steeped in mirin or shōchū — is the drink of the Girls' Day festival in March, and is essentially the last widely surviving example of a whole family of sweet, undistilled, unfiltered rice drinks that predate clarified sake.",
              ja:"かつて広く飲まれ、今は特定の場に限られる、濃く甘い漉さない米の飲み物が二つある。北九州の練酒は、擂り潰されて生クリームのように注がれる。白酒——蒸米と麹を味醂や焼酎に漬けたもの——は三月の雛祭の飲み物であり、清酒に先立つ、甘く、蒸留せず、漉さない米の飲み物の一族のうち、広く生き残った事実上最後の例である。",
              zh:"兩種曾經普及、如今只限於特定場合的濃稠甜味未過濾米飲。北九州的「練酒」被磨得極細，倒出來像鮮奶油。「白酒」——蒸米與麴浸泡於味醂或燒酎中——是三月女兒節的飲品，實質上是先於清酒的那一整族「甜、不蒸餾、不過濾的米飲」中，最後一個仍廣泛留存的例子。" } },
          { term:{ en:"Kijōshu, revived", ja:"貴醸酒、復活したもの", zh:"貴釀酒，被復活的" }, jp:"貴醸酒", romaji:"kijōshu",
            def:{ en:"Brewing with sake in place of some of the water is described in the <em>Engishiki</em> of the tenth century as <em>shiori</em>, then disappears for a thousand years. It was reconstructed in the 1970s at the national brewing research institute, and the modern result is a dense, sweet, amber sake that ages superbly and pairs with cheese and dessert. It is the clearest case of a style recovered from a text rather than from a surviving practice.",
              ja:"水の一部に代えて酒で仕込むことは、十世紀の『延喜式』に「しおり」として記され、そののち千年にわたり消える。一九七〇年代に国の醸造の研究機関で再構成され、現代の成果は濃く甘い琥珀の酒であり、熟成に見事に耐え、チーズや甘味とよく合う。生き残った慣行からではなく、文献から回復された型の、最も明快な例である。",
              zh:"以酒代替部分水來釀造，見於十世紀《延喜式》中的「しおり」，其後消失了一千年。它在一九七〇年代由國家釀造研究機構重建，現代成品是一種濃稠、甘甜、琥珀色的酒，極耐熟成，並與起司和甜點相配。這是「從文獻而非從存續的技法中被復原」的類型，最清楚的一個例子。" } },
          { term:{ en:"Bodaimoto, revived", ja:"菩提酛、復活したもの", zh:"菩提酛，被復活的" }, jp:"菩提酛", romaji:"bodaimoto",
            def:{ en:"The medieval temple starter, in which raw rice is steeped in water until it sours and the resulting acidic <em>soyashi-mizu</em> becomes the brewing liquid. It was superseded by kimoto and vanished as a working method. Reconstructed from temple records in the 1990s at Shōryakuji in Nara — the temple where much of it was first developed — and now brewed by a small group of breweries each year. It is history brought back into production rather than displayed.",
              ja:"中世の寺の酒母である。生米を水に漬けて酸っぱくなるまで置き、生じた酸性のそやし水を仕込みの水とする。生酛に取って代わられ、実働の方法としては消えた。一九九〇年代、その多くが最初に育まれた奈良の正暦寺において寺の記録から再構成され、今日、少数の蔵が毎年醸している。展示ではなく、生産へ戻された歴史である。",
              zh:"中世寺院的酒母：把生米浸在水中直到發酸，所得的酸性「そやし水」再作為釀造用水。它被生酛取代，作為實用工法而消失。一九九〇年代在奈良正曆寺——其大部分工法最初孕育之處——依寺方紀錄重建，如今每年由少數幾家酒藏釀造。這是被帶回生產、而非被陳列的歷史。" } }
        ] },

        { t:"quote", text:{
          en:"Two of these came back because someone read a document and tried it. That is a useful thing to know about a drink that is often described as unchanging: most of what looks like unbroken tradition is a reconstruction, and most of what was actually unbroken has been quietly abandoned.",
          ja:"このうち二つは、誰かが文献を読み、試したがゆえに戻ってきた。変わらぬものとして語られがちなこの飲み物について、知っておくとよいことである——途切れぬ伝統に見えるものの多くは再構成であり、実際に途切れなかったものの多くは、静かに捨てられている。",
          zh:"其中兩種之所以回來，是因為有人讀了一份文獻並動手試了。對於一種常被描述為「一成不變」的飲品，這是值得知道的事：看似不曾中斷的傳統，多半是重建；而真正不曾中斷的東西，多半已被靜靜地放棄。" } }
      ] },

    { t:"related", items:[
      { href:"classification.html", why:{ en:"The legal categories these sit across rather than inside.", ja:"これらが内にではなく跨いで座る、法の区分。", zh:"這些風格橫跨、而不是坐落其中的法定分類。" } },
      { href:"serving.html", why:{ en:"The temperature each of these styles wants.", ja:"これらの型のそれぞれが求める温度。", zh:"每一種風格各自想要的溫度。" } },
      { href:"pairing.html", why:{ en:"What to put beside each of them.", ja:"それぞれの傍らに置くもの。", zh:"該把什麼擺在它們各自旁邊。" } },
      { href:"tasting.html", why:{ en:"How to tell them apart with a glass in front of you.", ja:"杯を前にして、それらを見分ける方法。", zh:"杯子擺在面前時，怎麼分辨它們。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- numbers */
SAKE.pages["numbers"] = {
  kicker: { en: "Understanding · 05", ja: "理解 · 05", zh: "理解 · 05" },
  title:  { en: "Numbers & Chemistry", ja: "成分と数値", zh: "成分與數值" },
  jp: "日本酒度 · 酸度 · アミノ酸度",
  lede: {
    en: "Sake is the only drink in common circulation whose bottles routinely carry laboratory measurements. The figures are real, standardised and comparable — and they are also systematically misread, because the most famous of them measures density rather than sweetness. This page sets out what each number is, what it correlates with, and where it fails.",
    ja: "日本酒は、市中に流通する飲み物のなかで、瓶に分析値が当然のように記されている唯一のものである。数値は実測であり、標準化されており、比較可能である——そして同時に、体系的に誤読されている。最も有名な数値が、甘さではなく比重を測っているからである。本頁は、それぞれの数値が何であり、何と相関し、どこで破綻するかを示す。",
    zh: "日本酒是市面上唯一在酒瓶上例行標示實驗室測值的飲品。這些數字是實測、標準化且可比較的——同時也被系統性地誤讀，因為其中最著名的一項量的是密度而非甜度。本頁說明每個數值是什麼、與什麼相關，以及在何處失效。"
  },
  body: [
    { t:"section", id:"smv",
      title:{ en:"Sake meter value", ja:"日本酒度", zh:"日本酒度" }, jp:"日本酒度 · nihonshudo",
      body:[
        { t:"p", text:{
          en:"The sake meter value is a specific-gravity reading taken with a hydrometer calibrated so that pure water at 4 °C reads zero. Sugar is denser than water and pushes the reading negative; ethanol is lighter than water and pushes it positive. It is straightforwardly the baumé reading multiplied by −10.",
          ja:"日本酒度は、4℃の純水を0とするよう較正された浮ひょうによる比重の読み値である。糖は水より重く読みを負に振り、エタノールは水より軽く読みを正に振る。単純に、ボーメの値に−10を掛けたものである。",
          zh:"日本酒度是以比重計測得的讀數，其校準使 4°C 純水為零。糖比水重，會把讀數推向負值；乙醇比水輕，會把讀數推向正值。它就是波美度乘以 −10。" } },
        { t:"scale",
          title:{en:"The conventional scale",ja:"慣用的な目盛",zh:"慣用刻度"},
          segs:[
            { w:1, fill:"#EEE1DF", label:{en:"−6 and below · very sweet",ja:"−6以下・大甘口",zh:"−6 以下・大甘口"} },
            { w:1, fill:"#F0EDE4", label:{en:"−5 to −3 · sweet",ja:"−5〜−3・甘口",zh:"−5 至 −3・甘口"} },
            { w:1, fill:"#F5F3ED", label:{en:"−2 to +2 · neutral",ja:"−2〜+2・中口",zh:"−2 至 +2・中口"} },
            { w:1, fill:"#E9ECEE", label:{en:"+3 to +5 · dry",ja:"+3〜+5・辛口",zh:"+3 至 +5・辛口"} },
            { w:1, fill:"#E0E7E9", label:{en:"+6 and above · very dry",ja:"+6以上・大辛口",zh:"+6 以上・大辛口"} }
          ],
          ticks:["−10","−5","0","+5","+10"],
          note:{ en:"The national average sits between about +3 and +5. Extremes exist: kijōshu and dessert styles can reach −40 or beyond; a few super-dry sakes are labelled +15 and higher.",
                 ja:"全国平均はおおむね+3から+5のあいだにある。極端な例も存在する——貴醸酒やデザート型は−40を超えることがあり、超辛口を謳う酒には+15以上のものもある。",
                 zh:"全國平均約在 +3 至 +5 之間。極端者亦存在：貴釀酒與甜點型可達 −40 甚至更低；少數超辛口酒則標示 +15 以上。" } },
        { t:"panel", tint:"snow", title:{en:"Why it misleads",ja:"誤読される理由",zh:"何以誤導"}, body:[
          { t:"ul", items:[
            { en:"<strong>It measures all dissolved solids, not sugar.</strong> Amino acids, organic acids, glycerol and peptides are also denser than water. A sake heavy in amino acids reads lower — sweeter — without containing more sugar.",
              ja:"<strong>糖ではなく全溶存固形分を測っている。</strong>アミノ酸・有機酸・グリセロール・ペプチドもまた水より重い。アミノ酸に富む酒は、糖が多くなくとも低い値——すなわち甘口寄り——を示す。",
              zh:"<strong>它測的是全部溶質，而非糖。</strong>胺基酸、有機酸、甘油與胜肽同樣比水重。胺基酸豐富的酒讀數會偏低——看似偏甜——而其含糖量並未增加。" },
            { en:"<strong>Alcohol pushes it the other way.</strong> A genshu at 19% will read drier than the same sake diluted to 15%, even though the sugar per litre is higher in the genshu.",
              ja:"<strong>アルコールは逆方向に押す。</strong>19%の原酒は、同じ酒を15%に加水したものより辛い値を示す。一リットルあたりの糖分は原酒のほうが多いにもかかわらずである。",
              zh:"<strong>酒精把它推向反方向。</strong>19% 的原酒讀數會比同一款酒稀釋至 15% 更辛，儘管每公升的糖分其實原酒更高。" },
            { en:"<strong>Acidity dominates perception.</strong> Two sakes at +3 with acidity 1.0 and 1.8 taste, respectively, sweet and dry. Acidity is the stronger signal for how the sake will actually read on the palate.",
              ja:"<strong>知覚を支配するのは酸である。</strong>同じ+3でも、酸度1.0と1.8の二本は、それぞれ甘口と辛口に感じられる。口中での印象を予測する手がかりとしては、酸度のほうが強い。",
              zh:"<strong>感知由酸度主導。</strong>同為 +3 但酸度分別為 1.0 與 1.8 的兩款酒，嚐起來分別是甜與辛。要預測入口的實際印象，酸度是更強的訊號。" }
          ] }
        ] },
        { t:"p", text:{
          en:"A more honest instrument exists. The <em>karakuchi</em> index proposed in 2004 uses measured glucose minus acidity: at or below 0.2 g/100 mL the sake reads dry, 0.3–1.0 medium dry, 1.1–1.8 medium sweet, 1.9 and above sweet. It is rarely printed, because it requires an actual sugar assay rather than a hydrometer.",
          ja:"より正直な指標も存在する。二〇〇四年に提案された辛口指数は、実測のグルコース値から酸度を引く——0.2g/100mL以下で辛口、0.3〜1.0でやや辛口、1.1〜1.8でやや甘口、1.9以上で甘口。浮ひょうではなく実際の糖分析を要するため、印字されることは稀である。",
          zh:"更誠實的指標是存在的。2004 年提出的辛口指數以實測葡萄糖減去酸度：0.2 g/100 mL 以下為辛口，0.3–1.0 為中辛，1.1–1.8 為中甘，1.9 以上為甘口。因需實際糖分分析而非比重計，故少見於標籤。" } }
      ]
    },

    { t:"section", id:"acidity",
      title:{ en:"Acidity and amino acids", ja:"酸度とアミノ酸度", zh:"酸度與胺基酸度" }, jp:"酸度 · アミノ酸度",
      body:[
        { t:"figure",
          caption:{
            en:"The two numbers that appear on almost every analysis, plotted against each other. Sake meter value runs left to right from sweet to dry; acidity runs bottom to top from light to full. Neither number means much alone; together they place a bottle usefully. Positions are indicative of a style, not of any particular producer.",
            ja:"ほとんどあらゆる分析に現れる二つの数を、互いに対して描いたもの。日本酒度は左から右へ、甘から辛へ走る。酸度は下から上へ、淡から濃へ走る。いずれの数も単独では多くを意味せぬが、合わせれば一本を役立つ仕方で位置づける。位置は酒質の目安であり、いずれかの造り手のものではない。",
            zh:"幾乎每一份分析表上都會出現的兩個數字，彼此對照繪出。日本酒度由左至右，從甜走向辛；酸度由下至上，從淡走向濃。任何一個數字單獨看都說明不了多少，但兩者合起來就能把一支酒有用地定位。圖上的位置代表一種風格的概略位置，而非任何特定生產者。" },
          svg: function (lang, L) {
            var W = 760, H = 430, X0 = 92, X1 = W - 40, Y0 = 40, Y1 = H - 76;
            var SLO = -10, SHI = 12, ALO = 0.8, AHI = 2.2;
            function px(v) { return X0 + (v - SLO) / (SHI - SLO) * (X1 - X0); }
            function py(v) { return Y1 - (v - ALO) / (AHI - ALO) * (Y1 - Y0); }
            var CX = px(3), CY = py(1.4);
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#FBFAF7" stroke="#CDC6B9"/>';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (CX - X0) + '" height="' + (CY - Y0) + '" fill="#F0EDE4"/>';
            s += '<rect x="' + CX + '" y="' + CY + '" width="' + (X1 - CX) + '" height="' + (Y1 - CY) + '" fill="#F0EDE4"/>';
            s += '<line x1="' + CX + '" y1="' + Y0 + '" x2="' + CX + '" y2="' + Y1 + '" stroke="#CDC6B9"/>';
            s += '<line x1="' + X0 + '" y1="' + CY + '" x2="' + X1 + '" y2="' + CY + '" stroke="#CDC6B9"/>';
            /* quadrant names */
            var q = [
              { x: X0 + 14, y: Y0 + 22, a:"start", jp:"濃醇甘口", n:{ en:"rich and sweet", ja:"のうじゅん あまくち", zh:"濃醇甘口" } },
              { x: X1 - 14, y: Y0 + 22, a:"end", jp:"濃醇辛口", n:{ en:"rich and dry", ja:"のうじゅん からくち", zh:"濃醇辛口" } },
              { x: X0 + 14, y: Y1 - 28, a:"start", jp:"淡麗甘口", n:{ en:"light and sweet", ja:"たんれい あまくち", zh:"淡麗甘口" } },
              { x: X1 - 14, y: Y1 - 28, a:"end", jp:"淡麗辛口", n:{ en:"light and dry", ja:"たんれい からくち", zh:"淡麗辛口" } }
            ];
            for (var i = 0; i < q.length; i++) {
              s += '<text x="' + q[i].x + '" y="' + q[i].y + '" text-anchor="' + q[i].a + '" font-size="14" fill="#B4AC9C">' + q[i].jp + '</text>';
              s += '<text x="' + q[i].x + '" y="' + (q[i].y + 15) + '" text-anchor="' + q[i].a + '" font-size="9.5" fill="#C5BDB0">' + L(q[i].n) + '</text>';
            }
            /* axis ticks */
            var st = [-10, -5, 0, 5, 10];
            for (i = 0; i < st.length; i++) {
              s += '<line x1="' + px(st[i]) + '" y1="' + Y1 + '" x2="' + px(st[i]) + '" y2="' + (Y1 + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + px(st[i]) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + (st[i] > 0 ? "+" + st[i] : st[i]) + '</text>';
            }
            var at = [1.0, 1.4, 1.8, 2.2];
            for (i = 0; i < at.length; i++) {
              s += '<line x1="' + (X0 - 5) + '" y1="' + py(at[i]) + '" x2="' + X0 + '" y2="' + py(at[i]) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + (X0 - 10) + '" y="' + (py(at[i]) + 3.5) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + at[i].toFixed(1) + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (Y1 + 38) + '" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "← 甘口　　日本酒度　　辛口 →" : lang === "zh" ? "← 甘口　　日本酒度　　辛口 →" : "← SWEETER      SAKE METER VALUE      DRIER →") + '</text>';
            s += '<text x="' + (X0 - 10) + '" y="' + (Y0 - 14) + '" text-anchor="end" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "酸度 ↑" : lang === "zh" ? "酸度 ↑" : "ACIDITY ↑") + '</text>';
            /* style markers */
            var pts = [
              { s:8.0, a:1.05, a2:"end", n:{ en:"Niigata tanrei karakuchi", ja:"新潟の淡麗辛口", zh:"新潟的淡麗辛口" } },
              { s:4.5, a:1.30, a2:"start", n:{ en:"Aromatic junmai daiginj\u014d", ja:"香り高い純米大吟醸", zh:"芳香型純米大吟釀" } },
              { s:1.5, a:1.90, a2:"start", n:{ en:"Kimoto / yamahai junmai", ja:"生酛・山廃の純米", zh:"生酛／山廢純米" } },
              { s:3.0, a:1.55, a2:"start", n:{ en:"Long-aged koshu", ja:"長期熟成の古酒", zh:"長期熟成古酒" } },
              { s:-4.0, a:1.75, a2:"start", n:{ en:"Deliberately sweet junmai", ja:"意図された甘口の純米", zh:"刻意做甜的純米" } },
              { s:1.5, a:1.15, a2:"end", n:{ en:"Ordinary futs\u016bshu", ja:"並の普通酒", zh:"一般普通酒" } }
            ];
            for (i = 0; i < pts.length; i++) {
              var p = pts[i], X = px(p.s), Y = py(p.a);
              s += '<rect x="' + (X - 4) + '" y="' + (Y - 4) + '" width="8" height="8" fill="#7C6B52"/>';
              var tx = p.a2 === "end" ? X - 11 : X + 11;
              s += '<text x="' + tx + '" y="' + (Y + 4) + '" text-anchor="' + p.a2 + '" font-size="11.5" fill="#201E1B">' + L(p.n) + '</text>';
            }
            s += '<text x="' + X1 + '" y="' + (Y1 + 38) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "貴醸酒はこの図の遥か左、日本酒度マイナス四十のあたり"
                  : lang === "zh" ? "貴釀酒遠在本圖左方，日本酒度約負四十"
                  : "kij\u014dshu sits far to the left, around \u221240") + '</text>';
            s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "日本酒度は比重の目盛りであり、甘さの目盛りではない。酸とアミノ酸と温度が、いずれもその読みを覆しうる。"
                  : lang === "zh" ? "日本酒度是比重的刻度，不是甜度的刻度。酸、胺基酸與溫度，任何一項都可能推翻它的讀數。"
                  : "Sake meter value is a density scale, not a sweetness scale: acid, amino acids and temperature can each overturn what it seems to say.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"defs", items:[
          { term:{en:"Acidity",ja:"酸度",zh:"酸度"}, jp:"酸度", romaji:"sando",
            def:{en:"The volume in millilitres of 0.1 mol/L sodium hydroxide needed to neutralise 10 mL of sake. It is a measure of total acid, not of pH. Typical range 1.0–2.0, centred around 1.4–1.6; kimoto and yamahai often exceed 2.0, and some modern high-acid styles reach 3 or more. Higher acidity reads as dryness, structure and length; lower reads as softness and, past a point, flabbiness.",
                 ja:"清酒10mLを中和するのに要する0.1mol/L水酸化ナトリウムのミリリットル数。pHではなく総酸量の指標である。通常は1.0〜2.0、中心は1.4〜1.6。生酛・山廃では2.0を超えることが多く、現代の高酸系では3以上に達するものもある。酸度が高ければ辛さ・骨格・余韻として、低ければ柔らかさとして、そしてある点を越えれば緩さとして現れる。",
                 zh:"中和 10 mL 清酒所需 0.1 mol/L 氫氧化鈉的毫升數。它衡量的是總酸量，而非 pH。通常介於 1.0–2.0，中心值約 1.4–1.6；生酛與山廢常超過 2.0，某些現代高酸風格可達 3 以上。酸度高則呈現辛口、結構與餘韻；酸度低則呈現柔軟，過低則顯鬆散。"} },
          { term:{en:"The acids themselves",ja:"酸の内訳",zh:"酸的組成"}, jp:"乳酸・コハク酸・リンゴ酸・クエン酸",
            def:{en:"Lactic acid is usually the largest fraction and reads soft and rounded. Succinic acid gives the distinctive savoury-bitter depth many people identify as “sake-like”. Malic acid is sharp and green-apple; some modern strains are bred to over-produce it. Citric acid is rare in sake but central to shōchū kōji. Pyruvic and acetic acids above threshold are faults.",
                 ja:"乳酸が最も多いことが通例で、柔らかく丸い印象を与える。コハク酸は、多くの人が「日本酒らしい」と感じる独特の旨苦い深みをもたらす。リンゴ酸は鋭く青リンゴ的であり、これを多く生成するよう育種された現代の菌株もある。クエン酸は日本酒には稀だが焼酎の麹では中心的である。ピルビン酸と酢酸は閾値を超えれば欠点となる。",
                 zh:"乳酸通常占比最大，呈現柔軟圓潤的印象。琥珀酸帶來許多人視為「日本酒感」的鮮苦厚度。蘋果酸銳利、帶青蘋果調，部分現代菌株即為大量生成它而育成。檸檬酸在日本酒中罕見，卻是燒酎麴的核心。丙酮酸與醋酸一旦超過閾值即屬缺陷。"} },
          { term:{en:"Amino acid index",ja:"アミノ酸度",zh:"胺基酸度"}, jp:"アミノ酸度", romaji:"amino-sando",
            def:{en:"Measured by formol titration and reported on a similar scale to acidity: typically 1.0–2.0. Amino acids come from rice protein broken down by kōji proteases, so the figure tracks kōji ratio, milling ratio and mash temperature. High values give umami, weight and a savoury finish — and also age the sake faster, since amino acids drive the Maillard browning that makes koshu.",
                 ja:"ホルモール滴定により測り、酸度と似た尺度で報告される。通常は1.0〜2.0。アミノ酸は麹のプロテアーゼが米のたんぱく質を分解して生じるため、この数値は麹歩合・精米歩合・醪の温度を反映する。高い値はうま味・厚み・滋味のある後味を与え、同時に熟成を速める。古酒を作るメイラード褐変を駆動するのがアミノ酸だからである。",
                 zh:"以福馬林滴定法測定，並以與酸度相近的尺度報告，通常為 1.0–2.0。胺基酸源自麴菌蛋白酶分解米蛋白，故此數值反映麴步合、精米步合與醪溫。數值高則帶來旨味、厚度與鮮味尾韻——同時也加速陳化，因為驅動梅納褐變、造就古酒的正是胺基酸。"} },
          { term:{en:"Alcohol",ja:"アルコール分",zh:"酒精濃度"}, jp:"アルコール分",
            def:{en:"Standard 15–16%. Genshu 17–20%. Low-alcohol styles 8–13%, made either by stopping fermentation early or by brewing at high water ratios. The mash almost always reaches 17–19% regardless; what varies is how much water is added afterwards.",
                 ja:"標準は15〜16%、原酒は17〜20%。低アルコール型は8〜13%で、発酵を早く止めるか、汲水を多くして醸す。醪はいずれにせよほぼ常に17〜19%に達する。異なるのは、その後どれだけ加水するかである。",
                 zh:"標準為 15–16%，原酒為 17–20%。低酒精風格為 8–13%，作法為提早停止發酵或以高汲水比例釀造。無論如何，醪幾乎總會達到 17–19%；差別在於其後加了多少水。"} }
        ] },
        { t:"table",
          caption:{en:"National average components by category (National Tax Agency)",ja:"カテゴリー別の全国平均成分（国税庁）",zh:"各類別全國平均成分（國稅廳）"},
          cols:[{en:"Category",ja:"区分",zh:"類別"},{en:"Alcohol %",ja:"アルコール分 %",zh:"酒精 %"},{en:"SMV",ja:"日本酒度",zh:"日本酒度"},{en:"Extract",ja:"エキス分",zh:"萃取物"},{en:"Acidity",ja:"酸度",zh:"酸度"},{en:"Amino acid",ja:"アミノ酸度",zh:"胺基酸度"}],
          numCols:[1,2,3,4,5],
          rows:[
            [{en:"Futsūshu",ja:"普通酒",zh:"普通酒"},"15.39","+3.8","4.50","1.18","1.28"],
            [{en:"Honjōzō",ja:"本醸造酒",zh:"本釀造酒"},"15.54","+5.1","4.31","1.27","1.39"],
            [{en:"Junmai",ja:"純米酒",zh:"純米酒"},"15.46","+4.1","4.47","1.49","1.54"],
            [{en:"Ginjō",ja:"吟醸酒",zh:"吟釀酒"},"15.91","+4.4","4.54","1.32","1.27"]
          ] },
        { t:"note", label:{en:"Reading the table",ja:"表の読み方",zh:"表格判讀"}, text:{
          en:"Two things stand out. Junmai runs highest in both acidity and amino acids — no added alcohol means nothing dilutes the compounds the rice and kōji produced. Ginjō runs lowest in amino acids despite similar acidity, because deep milling removes the protein those amino acids would have come from. That single pair of facts explains most of the stylistic difference between the two families.",
          ja:"注目すべきは二点である。純米は酸度もアミノ酸度も最も高い——醸造アルコールを加えないということは、米と麹が生んだ成分を薄めるものがないということである。吟醸は酸度が同程度でありながらアミノ酸度は最も低い。深い精米が、そのアミノ酸の元となるたんぱく質を取り除いているからである。この一組の事実が、二つの系統のあいだの酒質の差の大半を説明する。",
          zh:"有兩點值得注意。純米在酸度與胺基酸度上皆最高——不添加釀造酒精，意味著沒有東西去稀釋米與麴所生成的成分。吟釀在酸度相近的情況下胺基酸度最低，因為深度精米移除了這些胺基酸的來源蛋白質。這一組事實，便解釋了兩大系統之間絕大部分的風格差異。" } }
      ]
    },

    { t:"section", id:"aroma",
      title:{ en:"Aroma compounds", ja:"香気成分", zh:"香氣成分" }, jp:"エステル · 高級アルコール · 熟成香",
      body:[
        { t:"table",
          cols:[{en:"Compound",ja:"成分",zh:"成分"},{en:"Smells of",ja:"香りの印象",zh:"氣味印象"},{en:"Where it comes from",ja:"由来",zh:"來源"}],
          rows:[
            [{en:"Isoamyl acetate",ja:"酢酸イソアミル",zh:"乙酸異戊酯"},{en:"banana, pear, ripe melon",ja:"バナナ、洋梨、熟したメロン",zh:"香蕉、洋梨、熟哈密瓜"},{en:"yeast, favoured by moderately cool fermentation; Nos. 7, 14, 1801, 1901",ja:"酵母。やや低温の発酵で増える。七号・十四号・1801号・1901号",zh:"酵母；於稍低溫發酵中增加。七號、十四號、1801、1901"}],
            [{en:"Ethyl caproate",ja:"カプロン酸エチル",zh:"己酸乙酯"},{en:"green apple, muscat, pineapple",ja:"青リンゴ、マスカット、パイナップル",zh:"青蘋果、麝香葡萄、鳳梨"},{en:"yeast, favoured by very cold long fermentation; Nos. 9, 1601, 1801 and cerulenin-resistant strains",ja:"酵母。極低温長期発酵で増える。九号・1601号・1801号、セルレニン耐性株",zh:"酵母；於極低溫長期發酵中增加。九號、1601、1801 與耐塞魯烯素菌株"}],
            [{en:"Isoamyl alcohol",ja:"イソアミルアルコール",zh:"異戊醇"},{en:"solvent, nail varnish, hot alcohol",ja:"溶剤、マニキュア、アルコールの熱さ",zh:"溶劑、指甲油、酒精的灼熱感"},{en:"a fusel alcohol; high when fermentation runs warm or the mash is nutrient-stressed",ja:"高級アルコールの一種。発酵温度が高い場合や、醪の栄養が偏る場合に増える",zh:"高級醇之一；發酵溫度偏高或醪養分失衡時增加"}],
            [{en:"Ethyl acetate",ja:"酢酸エチル",zh:"乙酸乙酯"},{en:"pear drops at low levels; glue and vinegar above threshold",ja:"低濃度では洋梨のドロップ、閾値を超えれば接着剤と酢",zh:"低濃度為梨糖果香；超過閾值則為膠水與醋味"},{en:"yeast and, in excess, acetic bacteria — a contamination marker",ja:"酵母。過剰であれば酢酸菌による汚染の指標",zh:"酵母；過量則為醋酸菌污染的指標"}],
            [{en:"4-Vinylguaiacol",ja:"4-ビニルグアイアコール",zh:"4-乙烯基癒創木酚"},{en:"clove, smoke, medicinal",ja:"丁子、燻香、薬品香",zh:"丁香、煙燻、藥味"},{en:"kōji ferulic acid esterase acting on the grain; usually treated as a fault",ja:"麹のフェルラ酸エステラーゼが穀物に作用して生じる。通常は欠点として扱われる",zh:"麴菌阿魏酸酯酶作用於穀物而生；通常視為缺陷"}],
            [{en:"Dimethyl trisulfide",ja:"ジメチルトリスルフィド",zh:"二甲基三硫"},{en:"boiled cabbage, drains",ja:"茹でたキャベツ、排水",zh:"煮過的甘藍、水溝味"},{en:"light exposure and ageing at temperature — the classic <em>nikkōshū</em> fault",ja:"光と高温での劣化。典型的な日光臭",zh:"光照與高溫劣化——典型的日光臭"}],
            [{en:"Sotolon",ja:"ソトロン",zh:"葫蘆巴內酯"},{en:"caramel, curry, dried fruit, walnut",ja:"カラメル、カレー、乾果、胡桃",zh:"焦糖、咖哩、果乾、核桃"},{en:"long maturation; the signature of koshu and of oxidative ageing",ja:"長期熟成。古酒と酸化熟成の標識",zh:"長期熟成；古酒與氧化陳年的標記"}],
            [{en:"Furfural, HMF",ja:"フルフラール・HMF",zh:"糠醛、HMF"},{en:"toast, almond, burnt sugar",ja:"トースト、アーモンド、焦がした砂糖",zh:"烤麵包、杏仁、焦糖"},{en:"Maillard reaction between amino acids and sugars over time and heat",ja:"アミノ酸と糖のあいだで時間と熱により進むメイラード反応",zh:"胺基酸與糖在時間與熱作用下的梅納反應"}]
          ] },
        { t:"note", label:{en:"Ageing markers",ja:"老香",zh:"老化標記"}, text:{
          en:"Brewers distinguish <em>hine-ka</em> — the stale, cardboard-and-cooked-vegetable smell of sake that has degraded badly, driven largely by dimethyl trisulfide — from <em>jukusei-ka</em>, the caramel and dried-fruit character of sake that has aged well. Both are products of time; the difference is temperature, light and oxygen exposure along the way.",
          ja:"蔵人は老香（ひねか）——段ボールや煮た野菜を思わせる、劣化した酒の匂いで、主にジメチルトリスルフィドによる——と、熟成香——よく熟れた酒のカラメルと乾果の性格——を区別する。いずれも時間の産物であり、違いはその間の温度・光・酸素への曝露にある。",
          zh:"釀造者區分「老香」（hineka）——嚴重劣化的酒所帶紙板與煮蔬菜般的陳味，主要來自二甲基三硫——與「熟成香」——陳化良好的酒所具的焦糖與果乾性格。兩者皆為時間的產物，差別在於過程中的溫度、光線與氧氣暴露。" } }
      ]
    },

{ t:"section", id:"aminosando",
      title:{ en:"Amino acid content", ja:"アミノ酸度", zh:"胺基酸度" }, jp:"アミノ酸度",
      body:[
        { t:"p", text:{
          en:"The third number on a brewery's analysis sheet, after sake meter value and acidity, and the one that most directly describes what a drinker would call body. It is measured the same way as acidity — by titration — and reported on a similar scale.",
          ja:"日本酒度と酸度に続いて分析表に並ぶ三つ目の数値であり、飲み手が「厚み」と呼ぶものを最も直接に言い表す。酸度と同じく滴定によって測られ、似た尺度で報告される。",
          zh:"這是酒藏分析表上繼日本酒度與酸度之後的第三個數字，也是最直接描述飲者所謂「酒體」的一項。它與酸度以相同方式（滴定）測得，並以類似的尺度呈現。" } },
        { t:"table",
          cols:[{en:"Amino acidity",ja:"アミノ酸度",zh:"胺基酸度"},{en:"Reads as",ja:"印象",zh:"感受"},{en:"Typical of",ja:"典型",zh:"典型"}],
          numCols:[0],
          rows:[
            ["0.8–1.0",{en:"Very clean, almost austere; short finish",ja:"きわめて清らか、やや厳しく、後口は短い",zh:"極潔淨、近乎嚴謹；收口短"},
             {en:"Daiginjō, heavily milled sake",ja:"大吟醸、高精白の酒",zh:"大吟釀、高度精米的酒"}],
            ["1.1–1.5",{en:"Balanced; savour present but not dominant",ja:"均衡。旨味はあるが支配的ではない",zh:"平衡；旨味存在但不喧賓奪主"},
             {en:"Most junmai and ginjō",ja:"多くの純米・吟醸",zh:"多數純米與吟釀"}],
            ["1.6–2.0",{en:"Full, savoury, mouth-filling; long finish",ja:"厚く旨味に富み、口中を満たす。後口は長い",zh:"飽滿、鹹鮮、充盈口腔；收口悠長"},
             {en:"Kimoto, yamahai, low-milled junmai",ja:"生酛、山廃、低精白の純米",zh:"生酛、山廢、低精米純米"}],
            ["2.0+",{en:"Heavy, sometimes coarse (<em>zatsumi</em>) if unsupported",ja:"重く、支えがなければ雑味に転じる",zh:"厚重，若無支撐則轉為雜味"},
             {en:"Aged sake, kijōshu, some futsūshu",ja:"熟成酒、貴醸酒、一部の普通酒",zh:"熟成酒、貴釀酒、部分普通酒"}]
          ] },
        { t:"p", text:{
          en:"Amino acidity comes from protein in the rice, so it falls as milling rises — which is the mechanism behind the whole daiginjō aesthetic. It is worth noticing that “clean” and “thin” are the same measurement seen from two attitudes, and that a sake at 0.9 will taste hollow with a rich dish and exquisite with white fish.",
          ja:"アミノ酸度は米のたんぱく質に由来するため、精米が進むほど下がる。大吟醸という美学の全体を成り立たせている機序がこれである。「清らか」と「痩せている」が、二つの態度から見た同じ測定値であること、そして0.9の酒が濃い料理には空虚に、白身の魚には絶妙に感じられることは、注目に値する。",
          zh:"胺基酸度來自米中的蛋白質，因此隨精米程度提高而下降——這正是整套大吟釀美學背後的機制。值得注意的是：「潔淨」與「單薄」是同一個測定值從兩種態度看去的結果；一款 0.9 的酒配濃郁料理會顯空洞，配白身魚卻精妙非凡。" } }
      ]
    },

    { t:"section", id:"sheet",
      title:{ en:"Reading a full analysis sheet", ja:"分析表を読む", zh:"判讀完整分析表" }, jp:"成分表",
      body:[
        { t:"p", text:{
          en:"Specialist shops and brewery websites often publish a full set of figures. Here is what each line means and what range is normal.",
          ja:"専門の酒販店や蔵のウェブサイトは、しばしば一揃いの数値を公開している。各項目が何を意味し、どの範囲が普通かを示す。",
          zh:"專門酒鋪與酒藏網站常會公布一整組數據。以下說明每一行的意義，以及何謂正常範圍。" } },
        { t:"table",
          cols:[{en:"Line",ja:"項目",zh:"項目"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Normal range",ja:"通常の範囲",zh:"常見範圍"},{en:"What it tells you",ja:"読み取れること",zh:"可讀出的訊息"}],
          jpCols:[1],
          rows:[
            [{en:"Alcohol",ja:"アルコール分",zh:"酒精度"},"アルコール分","13–20%",
             {en:"Below 15% suggests a deliberately light modern style or a low-alcohol product; 17% or more usually means genshu, undiluted.",ja:"15%未満なら意図して軽く造られた現代的な酒か低アルコール製品。17%以上はたいてい無加水の原酒である。",zh:"低於 15% 多半是刻意輕盈的現代酒質或低酒精產品；17% 以上通常代表未加水的原酒。"}],
            [{en:"Sake meter value",ja:"日本酒度",zh:"日本酒度"},"日本酒度","−5 to +12",
             {en:"A density measurement, not a sweetness measurement. Negative is denser (usually sweeter), positive is lighter (usually drier). Read it together with acidity or it will mislead you.",ja:"甘さではなく比重の測定である。負は重く（多くは甘く）、正は軽い（多くは辛い）。酸度と併せて読まねば誤らせる。",zh:"這是比重的測定，不是甜度的測定。負值較重（通常較甜），正值較輕（通常較辛）。必須與酸度一併判讀，否則會被誤導。"}],
            [{en:"Acidity",ja:"酸度",zh:"酸度"},"酸度","1.0–2.0",
             {en:"Millilitres of standard alkali needed to neutralise 10 ml. Higher acidity makes the same SMV taste drier and gives the sake structure for food and for warming.",ja:"10ミリリットルを中和するのに要する標準アルカリのミリリットル数。酸が高いほど、同じ日本酒度でも辛く感じられ、料理と燗に耐える骨格が生まれる。",zh:"中和 10 毫升所需標準鹼液的毫升數。酸度越高，同樣的日本酒度嚐起來越辛，並賦予酒佐餐與溫飲所需的結構。"}],
            [{en:"Amino acidity",ja:"アミノ酸度",zh:"胺基酸度"},"アミノ酸度","0.8–2.0",
             {en:"Body and savour. Falls as milling rises.",ja:"厚みと旨味。精米が進むほど下がる。",zh:"酒體與旨味。隨精米程度提高而下降。"}],
            [{en:"Polishing ratio",ja:"精米歩合",zh:"精米步合"},"精米歩合","23–75%",
             {en:"The percentage of the grain remaining. Legally required for the premium designations.",ja:"粒の残った割合。特定名称酒では表示が義務づけられる。",zh:"米粒殘留的百分比。特定名稱酒依法必須標示。"}],
            [{en:"Rice variety",ja:"使用米",zh:"使用米"},"原料米","—",
             {en:"Sometimes split into kōji rice and mash rice, which may be different varieties.",ja:"麹米と掛米に分けて記されることがあり、品種が異なる場合もある。",zh:"有時分列麴米與掛米，兩者品種可能不同。"}],
            [{en:"Yeast",ja:"使用酵母",zh:"使用酵母"},"酵母","—",
             {en:"A four-digit number means a modern bred strain; a prefectural name means a local one; silence often means No. 7 or a house strain.",ja:"四桁の番号は近代の育成株、県名なら県産株、記載がなければ七号か蔵の株であることが多い。",zh:"四位數編號代表現代育成株；標示縣名代表在地菌株；未標示則多半是七號或自家菌株。"}],
            [{en:"Brewing year",ja:"醸造年度",zh:"釀造年度"},"BY","—",
             {en:"1 July to 30 June. 令和6BY means the 2024–25 season. Distinct from the bottling date.",ja:"七月一日から六月三十日まで。令和6BYは二〇二四〜二五年度の造りを指す。製造年月とは別である。",zh:"自 7 月 1 日至 6 月 30 日。令和6BY 指 2024–25 年度所釀。與裝瓶年月不同。"}],
            [{en:"Bottling date",ja:"製造年月",zh:"製造年月"},"製造年月","—",
             {en:"On almost every bottle, though no longer legally required since January 2023. It is a bottling date, not a brewing date and not an expiry. For a nama, treat anything more than six months old with caution.",ja:"ほぼすべての瓶にあるが、二〇二三年一月より表示の義務ではなくなった。これは瓶詰めの年月であり、造った年月でも賞味期限でもない。生酒なら、半年を超えたものは慎重に扱うこと。",zh:"幾乎每瓶都有，但自 2023 年 1 月起已不再是法定必須標示。它是裝瓶年月，既非釀造年月，也不是有效期限。若是生酒，超過半年者請謹慎看待。"}],
            [{en:"Glucose",ja:"ブドウ糖",zh:"葡萄糖"},"ブドウ糖","1–6%",
             {en:"Rarely published but the honest measure of sweetness. Where a brewery gives it, it beats SMV for predicting how sweet the sake actually tastes.",ja:"公開されることは少ないが、甘さについては正直な指標である。示している蔵があれば、実際の甘さの予測においては日本酒度に勝る。",zh:"鮮少公布，卻是甜度最誠實的指標。若酒藏願意提供，它在預測實際甜度上勝過日本酒度。"}]
          ] }
      ]
    },

    { t:"section", id:"production",
      title:{ en:"Numbers from inside the brewery", ja:"蔵の内側の数値", zh:"酒藏內部的數字" }, jp:"製造の数値",
      body:[
        { t:"p", text:{
          en:"These do not appear on labels, but they turn up constantly in brewery interviews and technical writing, and knowing them makes that material readable.",
          ja:"これらは酒標には現れないが、蔵の語りや技術的な文章には絶えず出てくる。知っていれば、そうした資料が読めるようになる。",
          zh:"這些數字不會出現在酒標上，卻不斷出現在酒藏訪談與技術文獻中；知道它們，那些材料才讀得懂。" } },
        { t:"defs", items:[
          { term:{en:"Kōji ratio",ja:"麹歩合",zh:"麴步合"}, jp:"麹歩合", romaji:"kōji-buai",
            def:{en:"Kōji rice as a percentage of total rice. Legally at least 15% for the premium designations; 20–22% is normal, and higher ratios give more enzyme, more sugar and a richer sake. A brewer raising the kōji ratio is choosing sweetness and body.",
              ja:"総米に対する麹米の割合。特定名称酒では15%以上が法定であり、20〜22%が普通である。高いほど酵素も糖も増え、酒は濃くなる。麹歩合を上げる造り手は、甘さと厚みを選んでいる。",
              zh:"麴米占總米量的百分比。特定名稱酒依法至少 15%，一般為 20–22%；比例越高，酵素越多、糖越多，酒也越濃厚。提高麴步合的釀造者，選擇的是甜度與酒體。"} },
          { term:{en:"Water ratio",ja:"汲水歩合",zh:"汲水步合"}, jp:"汲水歩合", romaji:"kumimizu-buai",
            def:{en:"Brewing water as a percentage of total rice, typically around 130%. Higher gives a thinner, faster mash; lower concentrates everything and raises the risk of a stuck fermentation.",
              ja:"総米に対する仕込水の割合で、おおむね130%前後。高ければ醪は薄く速くなり、低ければすべてが濃縮され、発酵停止の危険が高まる。",
              zh:"仕込水占總米量的百分比，通常約 130%。比例高則醪較稀、發酵較快；比例低則一切濃縮，發酵停滯的風險升高。"} },
          { term:{en:"Lees ratio",ja:"粕歩合",zh:"粕步合"}, jp:"粕歩合", romaji:"kasu-buai",
            def:{en:"Sake lees as a percentage of rice used. Twenty per cent is a hard press for yield; forty per cent or more means a gentle press and a deliberate sacrifice of volume, and is one of the truest signals of a brewery's priorities.",
              ja:"使用した米に対する酒粕の割合。20%なら歩留まりを取った強い搾り、40%以上なら穏やかに搾り、量を意図して捨てたということである。蔵の優先順位を最も正直に示す指標の一つである。",
              zh:"酒粕占用米量的百分比。20% 代表為求產出率的用力壓榨；40% 以上則代表溫和壓榨、刻意犧牲產量，是最能誠實顯示一家酒藏優先順序的指標之一。"} },
          { term:{en:"Alcohol addition limit",ja:"アルコール添加の上限",zh:"酒精添加上限"}, jp:"10%",
            def:{en:"For a tokutei meishōshu, added distilled alcohol may not exceed 10% of the weight of the white rice used. That is a genuine constraint: a honjōzō gets a small technical addition, not a large dilution. Futsūshu has no such cap.",
              ja:"特定名称酒では、添加する醸造アルコールは白米の重量の10%を超えてはならない。これは実効的な制約である。本醸造の添加は少量の技術的なものであって、大量の薄めではない。普通酒にこの上限はない。",
              zh:"特定名稱酒所添加的釀造酒精，不得超過所用白米重量的 10%。這是實質的限制：本釀造的添加是少量的技術性添加，而非大量稀釋。普通酒則無此上限。"} },
          { term:{en:"Koku",ja:"石",zh:"石"}, jp:"石", romaji:"koku",
            def:{en:"The traditional volume unit still used for brewery scale: one koku is 180.39 litres, or a hundred <em>isshōbin</em> bottles. A very small brewery makes 300 koku a year; a large one makes hundreds of thousands.",
              ja:"蔵の規模を語る際にいまも使われる伝統的な容量の単位。一石は180.39リットル、すなわち一升瓶百本である。ごく小さな蔵は年に三百石、大きな蔵は数十万石を造る。",
              zh:"至今仍用來描述酒藏規模的傳統容量單位：一石為 180.39 公升，即一百瓶一升瓶。極小的酒藏年產三百石，大廠則產數十萬石。"} }
        ] },
        { t:"note", label:{en:"The numbers are a starting point, not a verdict",ja:"数値は出発点であり、判決ではない",zh:"數字是起點，不是判決"}, text:{
          en:"Two sake with identical analysis sheets can taste entirely different, because none of these figures captures aroma, texture, the shape of the finish, or how the sake behaves at 45°C. Use the numbers to predict which shelf to look at and what temperature to try first; use your own palate for everything after that.",
          ja:"分析表がまったく同じ二本の酒が、まるで違う味であることはある。これらの数値のいずれも、香り、質感、後口の形、そして45度でどう振る舞うかを捉えていないからである。数値は、どの棚を見るか、まずどの温度を試すかを予測するために使い、その先はすべて自分の舌で判断すること。",
          zh:"兩款分析表完全相同的酒，嚐起來可能截然不同，因為這些數字沒有任何一項能捕捉香氣、質地、收口的形狀，或這款酒在 45°C 下的表現。用數字來預測該看哪個貨架、該先試什麼溫度；此後的一切，交給自己的味覺。" } }
      ]
    },

{ t:"section", id:"units",
      title:{ en:"The old units, and where they still bite", ja:"古い単位と、それが今なお効く場所", zh:"舊單位，以及它們至今仍發揮作用之處" }, jp:"尺貫法",
      body:[
        { t:"p", text:{
          en:"Japan went metric for trade in 1959, but sake is still measured in the pre-metric <em>shakkanhō</em> system almost everywhere it matters: bottle sizes, cup sizes, brewery capacity, tax statistics and the vocabulary of a bar order. The conversions are worth having, because they explain several things that otherwise look arbitrary.",
          ja:"日本は一九五九年に取引を計量法へ移したが、日本酒は、意味のあるほとんどの場面で今なお尺貫法で測られている——瓶の寸法、杯の寸法、蔵の規模、税の統計、そして店での注文の語彙。換算を手元に置く値打ちはある。そうでなければ恣意的に見えるいくつものことが、それで説明できるからである。",
          zh:"日本於一九五九年在交易上改用公制，但在幾乎所有要緊的場合，清酒仍以公制之前的「尺貫法」計量：瓶的容量、杯的容量、酒藏產能、稅務統計，以及在酒吧點單的用語。這些換算值得記下，因為它們能解釋好幾件否則看來毫無道理的事。" } },

        { t:"table",
          cols:[{en:"Unit",ja:"単位",zh:"單位"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Metric",ja:"メートル法",zh:"公制"},{en:"Where you meet it",ja:"出会う場所",zh:"會在哪裡遇到"}],
          jpCols:[1],
          rows:[
            [{en:"Shaku",ja:"勺",zh:"勺"},"勺",{en:"18.039 ml",ja:"18.039ml",zh:"18.039 ml"},
             {en:"A tenth of a gō. Effectively obsolete, but it survives in the size of a very small cup and in old recipes.",ja:"一合の十分の一。事実上使われないが、ごく小さな杯の寸法と古い書き物に残る。",zh:"一合的十分之一。實際上已不使用，但仍存於極小酒杯的容量與舊食譜中。"}],
            [{en:"Gō",ja:"合",zh:"合"},"合",{en:"180.39 ml",ja:"180.39ml",zh:"180.39 ml"},
             {en:"The single most important unit in sake. It is one serving, it is the capacity of a standard tokkuri, it is the size of the assessment cup, and it is what a bar means when it lists a price by the <em>ichi-gō</em>.",ja:"日本酒において最も重要な単位である。一人前であり、標準の徳利の容量であり、利き猪口の寸法であり、店が一合いくらと記すときの一合である。",zh:"清酒中最重要的單位。它是一人份、是標準德利的容量、是品評杯的容量，也是店家標示「一合多少錢」時所指的量。"}],
            [{en:"Shō",ja:"升",zh:"升"},"升",{en:"1.8039 L",ja:"1.8039L",zh:"1.8039 L"},
             {en:"Ten gō, and the reason the big bottle is 1.8 litres. The <em>isshōbin</em> is the standard trade unit and remains the cheapest way to buy sake by volume.",ja:"十合であり、大瓶が1.8リットルである理由である。一升瓶は取引の標準単位であり、容量あたり最も安く買う方法であり続けている。",zh:"十合，也是大瓶為 1.8 公升的原因。一升瓶是交易的標準單位，至今仍是以容量計最便宜的購買方式。"}],
            [{en:"To",ja:"斗",zh:"斗"},"斗",{en:"18.039 L",ja:"18.039L",zh:"18.039 L"},
             {en:"Ten shō. Survives mainly in the names of vessels — a <em>yontodaru</em> is a four-<em>to</em> cask — and in the ceremonial barrels broken open at celebrations.",ja:"十升。主に器の名に残る——四斗樽は四斗の樽である——ほか、祝いの席で鏡開きされる樽に残る。",zh:"十升。主要留存於容器的名稱中——「四斗樽」即四斗容量的木樽——以及慶典上被開鏡的酒樽。"}],
            [{en:"Koku",ja:"石",zh:"石"},"石",{en:"180.39 L",ja:"180.39L",zh:"180.39 L"},
             {en:"A hundred shō, and the unit in which brewery scale is still described. A brewery's <em>sekisū</em> is its annual output in koku; a small kura may make a few hundred, a regional name a few thousand, a major house hundreds of thousands. Historically it was also the measure of a rice field's yield and therefore of a domain's wealth, which is why the word carries so much weight.",ja:"百升であり、蔵の規模が今なお語られる単位である。石数とはその蔵の年間の生産量を石で表したものであり、小さな蔵は数百、地方の銘柄は数千、大手は数十万に及ぶ。歴史的には田の収量、ひいては藩の富の尺度でもあった。この語がこれほど重みを持つ理由である。",zh:"一百升，也是至今仍用來描述酒藏規模的單位。酒藏的「石數」即其年產量以石計；小酒藏可能數百石，地方名牌數千石，大廠則達數十萬石。歷史上它也是稻田產量、進而是藩國財富的尺度——這正是這個字如此有份量的原因。"}],
            [{en:"Kilolitre",ja:"キロリットル",zh:"公秉"},"kL",{en:"1000 L ≈ 5.54 koku",ja:"1000L ≒ 5.54石",zh:"1000 L ≈ 5.54 石"},
             {en:"The unit of official statistics and of tax. National production, prefectural output and export volumes are all published in kilolitres, so converting between kL and koku is a routine chore when reading about the industry.",ja:"公式統計と税の単位である。全国生産量、県別出荷量、輸出量はいずれもキロリットルで公表されるから、この産業について読む際、kLと石の換算は日常の手間となる。",zh:"官方統計與稅制的單位。全國產量、各縣出貨量與出口量都以公秉發布，因此閱讀產業資料時，在 kL 與石之間換算是家常便飯。"}]
          ] },

        { t:"panel", title:{ en:"Two bottles, one system", ja:"二つの瓶、一つの体系", zh:"兩種瓶，一套體系" },
          body:[
            { t:"p", text:{
              en:"The two standard bottle sizes are the <em>isshōbin</em> at 1.8 litres and the <em>yongōbin</em> at 720 ml. Both are metric roundings of shakkanhō volumes: one shō is 1.8039 L and four gō is 721.56 ml, and the bottles were standardised at the convenient round figures. This is why a Japanese sake bottle is 720 ml where a wine bottle is 750 — not a smaller pour by design, but the residue of a different arithmetic. In practice the 720 ml bottle holds four servings and the 1.8 L bottle holds ten.",
              ja:"標準の瓶の寸法は二つ——1.8リットルの一升瓶と、720mlの四合瓶である。いずれも尺貫法の容量をメートル法で丸めたものである。一升は1.8039L、四合は721.56mlであり、瓶は都合のよい丸い数字で標準化された。日本酒の瓶がワインの750mlに対して720mlである理由はこれである。意図して少なく注ぐのではなく、別の算術の名残なのである。実際には、四合瓶は四人前、一升瓶は十人前を容れる。",
              zh:"兩種標準瓶容量分別是 1.8 公升的一升瓶與 720 ml 的四合瓶。兩者都是尺貫法容量的公制取整：一升為 1.8039 L，四合為 721.56 ml，而瓶身就以方便的整數標準化了。這正是日本酒瓶為 720 ml、而葡萄酒瓶為 750 ml 的原因——不是刻意少倒，而是另一套算術留下的殘餘。實務上，四合瓶裝四人份，一升瓶裝十人份。" } }
          ] }
      ] },

    { t:"section", id:"two-sheets",
      title:{ en:"Two sakes, side by side", ja:"二本を並べて読む", zh:"兩支酒並排閱讀" }, jp:"読み比べ",
      body:[
        { t:"p", text:{
          en:"Numbers become useful only in comparison. Below are two plausible analysis sets with almost the same sake meter value — the figure most drinkers reach for first — and almost nothing else in common. Reading them against each other is the best demonstration of why SMV alone is a poor guide.",
          ja:"数値は比較においてのみ有用になる。以下は、ほぼ同じ日本酒度——多くの飲み手が真っ先に手を伸ばす数値——を持ちながら、他にほとんど共通点のない、ありうる二つの分析値である。互いに照らして読むことは、日本酒度だけでは頼りにならぬ理由の最良の証明である。",
          zh:"數值只有在比較中才變得有用。以下是兩組看似合理的分析數據，它們的日本酒度——多數飲者最先查看的數字——幾乎相同，其餘卻幾乎毫無共通之處。把它們相互對照著讀，是「單看日本酒度是差勁指南」的最佳證明。" } },

        { t:"table",
          cols:[{en:"Measure",ja:"項目",zh:"項目"},{en:"Sake A",ja:"A",zh:"A"},{en:"Sake B",ja:"B",zh:"B"},{en:"What the difference does",ja:"差が生むもの",zh:"差異造成什麼"}],
          rows:[
            [{en:"Nihonshu-do",ja:"日本酒度",zh:"日本酒度"},"+3.0","+3.5",
             {en:"Effectively identical. On this figure alone the two are the same sake — and they are not remotely.",ja:"事実上同じである。この数値だけを見れば二つは同じ酒であり——実際にはまるで違う。",zh:"實質上相同。單看這個數字，兩者是同一支酒——而它們一點也不像。"}],
            [{en:"Acidity",ja:"酸度",zh:"酸度"},"1.2","1.9",
             {en:"The decisive difference. B has more than half again as much acid, which will read as both drier and more structured despite the near-identical SMV, and which is what lets it take warming and stand up to strong food.",ja:"決定的な差である。Bは酸が五割以上多く、ほぼ同じ日本酒度にもかかわらず、より辛口にも、より骨格があるようにも読まれる。燗に耐え、味の強い料理に拮抗できるのはそのためである。",zh:"決定性的差異。B 的酸量多出一半以上，儘管日本酒度幾乎相同，它讀來會更辛也更有骨架；這也讓它能承受加溫、並與重口味料理抗衡。"}],
            [{en:"Amino acidity",ja:"アミノ酸度",zh:"胺基酸度"},"1.0","1.8",
             {en:"A is lean and clean; B has substantially more savoury weight. This figure and the one above together tell you far more than the SMV does.",ja:"Aは痩せて清らかであり、Bはるかに旨味の重みがある。この項目と上の項目とを合わせれば、日本酒度よりはるかに多くが分かる。",zh:"A 精瘦而乾淨，B 則有明顯更多的旨味重量。這一項與上一項合起來，能告訴你的遠比日本酒度多。"}],
            [{en:"Alcohol",ja:"アルコール分",zh:"酒精度"},"15.5%","17.5%",
             {en:"B is undiluted or nearly so. Higher alcohol carries more aroma but also more heat and more perceived body — and it is why B will take an ice cube without collapsing.",ja:"Bは原酒か、それに近い。アルコールが高ければ香りをより多く運ぶが、熱さも、感じられる厚みも増す。Bが氷一つに崩れない理由である。",zh:"B 是原酒或接近原酒。較高的酒精承載更多香氣，但也帶來更多灼熱感與更明顯的酒體——這也是 B 加一顆冰塊也不會垮掉的原因。"}],
            [{en:"Polishing",ja:"精米歩合",zh:"精米步合"},"45%","70%",
             {en:"A is a daiginjō; B is not trying to be. Most of B's amino acid comes from the protein A has milled away.",ja:"Aは大吟醸であり、Bはそれを目指してもいない。Bのアミノ酸の多くは、Aが削り落としたたんぱく質に由来する。",zh:"A 是大吟釀，B 根本無意成為大吟釀。B 的胺基酸大半來自 A 已磨去的那些蛋白質。"}],
            [{en:"Starter",ja:"酒母",zh:"酒母"},{en:"Sokujō",ja:"速醸",zh:"速釀"},{en:"Kimoto",ja:"生酛",zh:"生酛"},
             {en:"The origin of B's acid profile, which is lactic and layered rather than the single clean note of an added-acid starter.",ja:"Bの酸の性格の出どころである。加えられた酸の単一で清らかな一音ではなく、乳酸的で層をなす。",zh:"這是 B 之酸性格的來源：乳酸而有層次，而非添加乳酸之酒母那種單一乾淨的音。"}],
            [{en:"Best served",ja:"適温",zh:"適飲溫度"},{en:"10–12 °C",ja:"10〜12℃",zh:"10–12 °C"},{en:"45–50 °C",ja:"45〜50℃",zh:"45–50 °C"},
             {en:"The practical conclusion. Serve A cold in a small glass and it sings; warm it and you destroy it. Serve B cold and it seems clumsy; warm it and it becomes what it was made to be.",ja:"実際的な結論である。Aは冷やして小さな杯で歌い、温めれば壊れる。Bは冷たいままでは不器用に見え、温めれば、そうあるべく造られたものになる。",zh:"實際的結論。A 冰著用小杯喝會歌唱，加熱則會毀掉它；B 冰著喝顯得笨拙，溫熱後才成為它被釀造出來想成為的樣子。"}]
          ] },

        { t:"quote", text:{
          en:"Read acidity before sweetness, and read amino acidity before either. The sake meter value tells you about the sugar that is left; the other two tell you what the sake will do in your mouth.",
          ja:"甘辛より先に酸度を読み、そのいずれよりも先にアミノ酸度を読むこと。日本酒度が語るのは残った糖についてであり、他の二つが語るのは、その酒が口のなかで何をするかである。",
          zh:"先讀酸度再讀甜度，而在兩者之前先讀胺基酸度。日本酒度告訴你的是殘留的糖；另外兩個告訴你的，是這支酒在你口中會做什麼。" } }
      ] },

    { t:"related", items:[
      { href:"taste.html", why:{ en:"What the figures are standing in for, chemically.", ja:"その数が化学において代理しているもの。", zh:"這些數字在化學上代表的是什麼。" } },
      { href:"label.html", why:{ en:"Where on the bottle each figure appears.", ja:"各々の数が瓶のどこに現れるか。", zh:"每一個數字出現在瓶身的什麼位置。" } },
      { href:"tables.html", why:{ en:"The conversions and the worked SMV arithmetic.", ja:"換算と、日本酒度の算術の実例。", zh:"換算表，以及日本酒度的實際算式。" } },
      { href:"batch.html", why:{ en:"The numbers a brewer moves, rather than the ones printed.", ja:"刷られた数ではなく、造り手が動かす数。", zh:"釀酒者實際會動的數字，而不是印出來的那些。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- taste */
SAKE.pages["taste"] = {
  kicker: { en: "Understanding · 06", ja: "理解 · 06", zh: "理解 · 06" },
  title:  { en: "The Chemistry of Flavour", ja: "味の科学", zh: "風味的化學" },
  jp: "五味・有機酸・温度と知覚",
  lede: {
    en: "The reference tables tell you what is measured; this page is about what that turns into on the tongue. Sake is unusual among drinks in that four of the five basic tastes are present in meaningful quantity, that most of its acidity is made by the yeast rather than supplied by the fruit, and that a single serving decision — temperature — can move the perceived balance further than switching to a different bottle would. What follows is how those pieces fit together.",
    ja: "早見表は何が測られているかを教える。本頁が扱うのは、それが舌の上で何になるかである。日本酒は飲み物のなかでも珍しく、五つの基本味のうち四つが意味のある量で存在し、酸の大半は果実から来るのではなく酵母が作り、そして供する側の一つの判断——温度——が、別の瓶に持ち替えるよりも大きく、感じられる均衡を動かす。以下は、それらがどう噛み合っているかである。",
    zh: "速查表告訴你測到了什麼；本頁談的是那些數值在舌上化為什麼。清酒在飲品中相當特別：五種基本味中有四種以有意義的量存在；它的酸大半由酵母製造而非隨果實而來；而供飲端的單一決定——溫度——所能移動的感知平衡，甚至勝過換一瓶酒。以下說明這些部分如何彼此契合。"
  },
  body: [

    { t:"section", id:"five",
      title:{ en:"The five tastes in a glass of sake", ja:"一杯の酒における五味", zh:"一杯清酒中的五味" }, jp:"五味",
      body:[
        { t:"table",
          cols:[{en:"Taste",ja:"味",zh:"味"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Comes from",ja:"由来",zh:"來源"},{en:"How it behaves",ja:"振る舞い",zh:"表現"}],
          jpCols:[1],
          rows:[
            [{en:"Sweet",ja:"甘味",zh:"甜"},"甘味",
             {en:"Residual glucose, typically 1–6%; also glycerol and some amino acids",ja:"残存するブドウ糖（おおむね1〜6%）、グリセロール、一部のアミノ酸",zh:"殘留葡萄糖（通常 1–6%）、甘油，以及部分胺基酸"},
             {en:"The single largest driver of how a sake is described, and the one the sake meter value tries and often fails to predict. Perceived sweetness rises sharply with temperature up to about body heat.",ja:"その酒がどう語られるかを最も大きく左右し、日本酒度が予測しようとしてしばしば外すものである。感じられる甘さは、体温あたりまで温度とともに急に上がる。",zh:"最能左右一款酒被如何描述的因素，也是日本酒度試圖預測卻經常失準的東西。感知到的甜度會隨溫度急劇上升，直到接近體溫。"}],
            [{en:"Sour",ja:"酸味",zh:"酸"},"酸味",
             {en:"Succinic, malic, lactic and citric acid, almost all made by the yeast",ja:"コハク酸、リンゴ酸、乳酸、クエン酸。そのほぼすべてを酵母が作る",zh:"琥珀酸、蘋果酸、乳酸與檸檬酸，幾乎全由酵母製造"},
             {en:"Provides the structure that lets a sake stand up to food and to warming. Low by wine standards — a third to a half — which is why sake does not fight vinegar or citrus.",ja:"料理と燗に耐える骨格を与える。ワインの基準では低く、三分の一から半分ほどである。日本酒が酢や柑橘と争わない理由がこれである。",zh:"提供讓酒能佐餐、耐溫飲的結構。以葡萄酒標準衡量偏低——約三分之一到二分之一——這正是清酒不與醋或柑橘作對的原因。"}],
            [{en:"Umami",ja:"旨味",zh:"旨味"},"旨味",
             {en:"Free amino acids, peptides and nucleotides released as the rice dissolves",ja:"米が溶けるにつれて放たれる遊離アミノ酸、ペプチド、核酸",zh:"隨米溶解而釋出的游離胺基酸、胜肽與核苷酸"},
             {en:"Sake carries several times the free amino acids of wine. This is the taste that makes it a food drink, and the one that heavy milling deliberately removes.",ja:"日本酒はワインの数倍の遊離アミノ酸をもつ。これを食中酒たらしめている味であり、高精白が意図して取り除く味でもある。",zh:"清酒的游離胺基酸為葡萄酒的數倍。這正是使它成為佐餐之酒的味道，也是高度精米刻意去除的味道。"}],
            [{en:"Bitter",ja:"苦味",zh:"苦"},"苦味",
             {en:"Peptides, higher alcohols, and compounds from the outer layers of the grain",ja:"ペプチド、高級アルコール、粒の外層に由来する成分",zh:"胜肽、高級醇，以及來自米粒外層的成分"},
             {en:"In trace amounts it gives definition and a clean finish; in quantity it is the coarseness called <em>zatsumi</em>. Warming suppresses it noticeably, which is part of why kimoto improves at 45°C.",ja:"微量であれば輪郭と清らかな後口を与えるが、多ければ雑味と呼ばれる粗さになる。温めると目立って抑えられる。生酛が45度で良くなる理由の一部である。",zh:"微量時提供輪廓與潔淨的收口；過量則成為所謂「雜味」的粗糙。加熱能明顯抑制它，這也是生酛在 45°C 下更好的原因之一。"}],
            [{en:"Salty",ja:"塩味",zh:"鹹"},"塩味",
             {en:"Trace minerals from the brewing water",ja:"仕込水由来の微量のミネラル",zh:"來自仕込水的微量礦物質"},
             {en:"Present but below any useful threshold in finished sake. The exception is cooking sake, which has salt added so it can be sold as food rather than alcohol.",ja:"存在はするが、仕上がった酒では意味のある閾値を下回る。例外は料理酒であり、酒類ではなく食品として売るために塩が加えられている。",zh:"雖然存在，但在成酒中低於任何有意義的閾值。例外是料理酒——為了能以食品而非酒類販售而加了鹽。"}]
          ] },
        { t:"note", label:{en:"Four out of five is unusual",ja:"五つのうち四つは珍しい",zh:"五味中占四味相當罕見"}, text:{
          en:"Most drinks lead on one or two tastes. Beer is bitter and lightly sweet; wine is sour and sometimes sweet, with tannin as a texture rather than a taste. Sake carries sweetness, acidity, umami and a controlled bitterness at once, in a low-tannin, low-acid matrix. That combination is why it sits beside so many foods, and also why it is hard to describe with a vocabulary borrowed from wine.",
          ja:"多くの飲み物は一つか二つの味を前に出す。ビールは苦く、わずかに甘い。ワインは酸っぱく、時に甘く、タンニンは味というより質感である。日本酒は、タンニンが少なく酸も低い母体のなかで、甘味・酸味・旨味・制御された苦味を同時に担う。これほど多くの料理と並べるのはその組み合わせのためであり、ワインから借りた語彙では描きにくいのも、同じ理由による。",
          zh:"多數飲品只以一兩種味道為主。啤酒是苦兼微甜；葡萄酒是酸、有時帶甜，而單寧與其說是味道，不如說是質地。清酒則在低單寧、低酸的基底中，同時承載甜、酸、旨味與受控的苦。這個組合正是它能與如此多樣食物並陳的原因，也正是它難以用借自葡萄酒的語彙描述的原因。" } }
      ]
    },

    { t:"section", id:"acids",
      title:{ en:"The four acids", ja:"四つの酸", zh:"四種酸" }, jp:"有機酸",
      body:[
        { t:"p", text:{
          en:"Total acidity on an analysis sheet is a single number, but it is a sum of four quite different acids, and the proportions matter more than the total. Which acids dominate is decided by the yeast strain and by the starter method.",
          ja:"分析表の酸度は一つの数値だが、それは性格の異なる四つの酸の合計であり、比率のほうが総量より重要である。どの酸が優勢になるかは、酵母の株と酒母の型が決める。",
          zh:"分析表上的酸度是單一數字，實則是四種性格迥異之酸的總和，而比例比總量更重要。哪一種酸占上風，取決於酵母菌株與酒母工法。" } },
        { t:"defs", items:[
          { term:{en:"Succinic acid",ja:"コハク酸",zh:"琥珀酸"}, jp:"コハク酸",
            def:{en:"The characteristic acid of sake and the largest component of its acidity, made by the yeast. It is the same acid that gives shellfish and aged cheese their savoury depth, and it reads as much as umami as it does as sourness. If a sake tastes “like sake” rather than like a light wine, this is a large part of why.",
              ja:"日本酒に特有の酸であり、その酸度の最大の成分である。酵母が作る。貝や熟成チーズに旨味の奥行きを与えるのと同じ酸であり、酸味というより旨味として感じられる部分が大きい。ある酒が軽いワインではなく「日本酒の味」がするとすれば、その大きな理由はこれである。",
              zh:"清酒的特徵酸，也是其酸度中占比最大者，由酵母製造。它與賦予貝類及熟成起司鹹鮮深度的是同一種酸，被感知為旨味的成分不亞於酸味。若一款酒嚐起來「像清酒」而非像清爽的白酒，這正是主要原因之一。"} },
          { term:{en:"Malic acid",ja:"リンゴ酸",zh:"蘋果酸"}, jp:"リンゴ酸",
            def:{en:"Sharp, bright, apple-like. Low in most sake, but some modern yeasts are bred to overproduce it deliberately, giving a white-wine acidity that is unmistakable and increasingly fashionable for food-first and low-alcohol styles.",
              ja:"鋭く明るい、林檎のような酸。多くの日本酒では低いが、これを多く出すよう意図して育成された現代の酵母があり、まぎれもない白ワイン的な酸をもたらす。食中酒や低アルコールの酒質で近年好まれている。",
              zh:"銳利、明亮、帶蘋果感。多數清酒中含量低，但有些現代酵母被刻意育成以大量生成它，帶來一望即知的白酒式酸度，在佐餐型與低酒精酒款中日益流行。"} },
          { term:{en:"Lactic acid",ja:"乳酸",zh:"乳酸"}, jp:"乳酸",
            def:{en:"Soft, round, dairy-like. Added directly in a sokujō starter and produced by bacteria in a kimoto one — and it is the kimoto version, arriving with the peptides and amino acids the bacteria made alongside it, that gives kimoto sake its recognisable depth.",
              ja:"柔らかく丸い、乳のような酸。速醸酛では直接加えられ、生酛では細菌が生む。そして生酛のそれが——細菌が同時に作ったペプチドやアミノ酸を伴って——生酛の酒に、それと分かる奥行きを与えている。",
              zh:"柔軟、圓潤、帶乳感。在速釀酛中直接添加，在生酛中則由細菌生成——而正是生酛的那一種，連同細菌同時製造的胜肽與胺基酸，賦予生酛之酒那份可辨識的深度。"} },
          { term:{en:"Citric acid",ja:"クエン酸",zh:"檸檬酸"}, jp:"クエン酸",
            def:{en:"Present only in traces in ordinary sake, because yellow kōji barely makes it. It is the defining acid of <em>white</em> kōji, used in shōchū, and a handful of breweries now brew sake with white kōji specifically for the sharp citrus acidity it brings.",
              ja:"通常の日本酒には微量しか含まれない。黄麹はほとんど作らないからである。焼酎に用いる白麹の特徴的な酸であり、その鋭い柑橘の酸を目当てに、白麹で清酒を醸す蔵も少数ながら現れている。",
              zh:"在一般清酒中僅有微量，因為黃麴幾乎不製造它。它是燒酎所用白麴的特徵酸；如今已有少數酒藏專為其銳利的柑橘酸度，改以白麴釀造清酒。"} }
        ] }
      ]
    },

    { t:"section", id:"formulas",
      title:{ en:"Two formulas that do better than SMV alone", ja:"日本酒度だけより良い二つの式", zh:"勝過單看日本酒度的兩道公式" }, jp:"甘辛度と濃淡度",
      body:[
        { t:"p", text:{
          en:"Because sake meter value on its own predicts perceived sweetness badly, Japanese brewing research produced two derived indices that combine it with acidity. They are not on labels, but a shop or a brewery website that publishes both SMV and acidity gives you everything you need to calculate them.",
          ja:"日本酒度だけでは感じられる甘さをうまく予測できないため、日本の醸造の研究は、それを酸度と組み合わせた二つの指標を生んだ。酒標には載らないが、日本酒度と酸度の双方を公開している店や蔵のウェブサイトがあれば、計算に必要なものはすべて揃う。",
          zh:"由於單憑日本酒度難以預測感知甜度，日本的釀造研究提出了兩個結合酸度的衍生指標。它們不會出現在酒標上，但只要店家或酒藏網站同時公布日本酒度與酸度，計算所需的一切便已齊備。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Sweetness index",ja:"甘辛度",zh:"甘辛度"}, jp:"甘辛度",
            body:[
              { t:"html", text:'<p style="font-family:var(--serif);font-size:1.05rem;line-height:1.7;background:var(--paper-2);border:1px solid var(--rule);padding:14px 16px;">甘辛度 = 193593 ÷ (1443 + 日本酒度) − 1.16 × 酸度 − 132.57</p>' },
              { t:"p", text:{
                en:"Higher is sweeter, lower is drier, and zero is roughly neutral. The point of the formula is the middle term: every additional unit of acidity shifts the sake more than a full point of SMV does, which is why a +5 with acidity 1.8 tastes drier than a +8 with acidity 1.1.",
                ja:"値が高いほど甘く、低いほど辛く、零がおおよそ中庸である。この式の要点は中央の項にある。酸度が一単位増えるごとに、日本酒度一点分より大きく酒が動く。酸度1.8の+5が、酸度1.1の+8より辛く感じられる理由である。",
                zh:"數值越高越甜、越低越辛，零約為中性。這道公式的重點在中間那一項：酸度每增加一個單位，對酒的移動幅度都大於日本酒度整整一點——這正是酸度 1.8 的 +5 嚐起來比酸度 1.1 的 +8 更辛的原因。" } }
            ] },
          { h:{en:"Richness index",ja:"濃淡度",zh:"濃淡度"}, jp:"濃淡度",
            body:[
              { t:"html", text:'<p style="font-family:var(--serif);font-size:1.05rem;line-height:1.7;background:var(--paper-2);border:1px solid var(--rule);padding:14px 16px;">濃淡度 = 94545 ÷ (1443 + 日本酒度) + 1.88 × 酸度 − 68.54</p>' },
              { t:"p", text:{
                en:"Higher is richer and fuller (<em>nōjun</em>), lower is lighter and cleaner (<em>tanrei</em>). Note that acidity is added here rather than subtracted: acid makes a sake taste drier and fuller at the same time, which is exactly why kimoto and yamahai read as substantial without reading as sweet.",
                ja:"値が高いほど濃醇、低いほど淡麗である。ここでは酸度が引かれるのではなく足されている点に注意したい。酸は酒を、辛くすると同時に厚くする。生酛や山廃が、甘くはないのに実質を伴って感じられるのは、まさにこのためである。",
                zh:"數值越高越濃醇，越低越淡麗。請注意此處酸度是相加而非相減：酸能讓一款酒同時嚐起來更辛也更飽滿——這正是生酛與山廢明明不甜，卻讓人覺得厚實的原因。" } }
            ] }
        ] },
        { t:"figure",
          caption:{
            en:"The two formulas plotted as a plane. The horizontal axis is sake meter value, the vertical axis is acidity, and the two lines are the places where each index equals zero — the sweet/dry divide and the light/rich divide. Between them they cut the plane into the four descriptions the trade actually uses. The five points are the worked examples in the table above; note that the kimoto and the futsūshu share an SMV of +3 and land in different quadrants entirely, which is the whole argument for not reading SMV alone.",
            ja:"二つの式を平面として描いたもの。横の軸は日本酒度、縦の軸は酸度であり、二本の線はそれぞれの指標が零となる場所——甘辛の境と、濃淡の境である。両者は平面を、業界が実際に用いる四つの言い方に切り分ける。五つの点は上の表の計算例である。生酛と普通酒はともに日本酒度＋三でありながら、まったく異なる象限に落ちる。日本酒度だけを読んではならぬという主張の全体が、そこにある。",
            zh:"把兩道公式畫成一個平面。橫軸是日本酒度，縱軸是酸度，兩條線分別是各指標等於零之處——甘辛的分界與濃淡的分界。兩者合起來，把平面切成業界實際使用的四種說法。五個點是上表的計算範例；請注意生酛與普通酒同樣是日本酒度 +3，卻落在完全不同的象限——「不能只看日本酒度」這整個論點，就在這裡。" },
          svg: function (lang, L) {
            var W = 760, H = 452, X0 = 88, X1 = 640, Y0 = 54, Y1 = 330;
            var S0 = -16, S1 = 12, A0 = 0.7, A1 = 2.6;
            function tw(t, size) { var w = 0, i; for (i = 0; i < t.length; i++) w += (t.charCodeAt(i) > 0x2E80 ? 1.0 : 0.52); return w * size; }
            function lab(x, y, an, txt, size, fill) {
              var w = tw(txt, size), bx = (an === "end" ? x - w : an === "middle" ? x - w / 2 : x);
              return '<rect x="' + (bx - 3) + '" y="' + (y - size * 0.84) + '" width="' + (w + 6) + '" height="' + (size * 1.16) + '" fill="#F8F6F1"/>' +
                     '<text x="' + x + '" y="' + y + '" text-anchor="' + an + '" font-size="' + size + '" fill="' + fill + '">' + txt + '</text>';
            }
            function px(v) { return X0 + (v - S0) / (S1 - S0) * (X1 - X0); }
            function py(v) { return Y1 - (v - A0) / (A1 - A0) * (Y1 - Y0); }
            function sweetA(S) { return (193593 / (1443 + S) - 132.57) / 1.16; }
            function richA(S)  { return (68.54 - 94545 / (1443 + S)) / 1.88; }
            function line(f, col, dash) {
              var d = "", started = false, S, A;
              for (S = S0; S <= S1 + 0.001; S += 0.25) {
                A = f(S);
                if (A < A0 || A > A1) { started = false; continue; }
                d += (started ? " L" : "M") + px(S).toFixed(1) + " " + py(A).toFixed(1);
                started = true;
              }
              return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="1.8"' +
                     (dash ? ' stroke-dasharray="' + dash + '"' : '') + '/>';
            }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#F8F6F1"/>';
            var t;
            for (t = -15; t <= 10; t += 5) {
              s += '<line x1="' + px(t) + '" y1="' + Y0 + '" x2="' + px(t) + '" y2="' + Y1 + '" stroke="#EEEBE3"/>';
              s += '<text x="' + px(t) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                   (t > 0 ? "+" + t : t) + '</text>';
            }
            var a;
            for (a = 1.0; a <= 2.61; a += 0.4) {
              s += '<line x1="' + X0 + '" y1="' + py(a) + '" x2="' + X1 + '" y2="' + py(a) + '" stroke="#EEEBE3"/>';
              s += '<text x="' + (X0 - 8) + '" y="' + (py(a) + 3.5) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + a.toFixed(1) + '</text>';
            }
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="none" stroke="#B4AC9C"/>';
            /* the two zero contours */
            s += line(sweetA, "#B09E7C", "");
            s += line(richA, "#8B9BA6", "6 4");
            /* quadrant names */
            var quads = [
              { S:-12, A:2.05, n:{ en:"sweet · rich", ja:"甘口・濃醇", zh:"甘口・濃醇" }, r:"amakuchi · nōjun" },
              { S:-10, A:1.05, n:{ en:"sweet · light", ja:"甘口・淡麗", zh:"甘口・淡麗" }, r:"amakuchi · tanrei" },
              { S:7,   A:2.32, n:{ en:"dry · rich", ja:"辛口・濃醇", zh:"辛口・濃醇" }, r:"karakuchi · nōjun" },
              { S:9,   A:0.86, n:{ en:"dry · light", ja:"辛口・淡麗", zh:"辛口・淡麗" }, r:"karakuchi · tanrei" }
            ];
            var i;
            for (i = 0; i < quads.length; i++) {
              s += lab(px(quads[i].S), py(quads[i].A), "middle", L(quads[i].n), 12.5, "#8B857C");
              s += lab(px(quads[i].S), py(quads[i].A) + 13, "middle", quads[i].r, 9, "#B6B0A6");
            }
            /* the worked examples */
            var pts = [
              { S:3,  A:1.2, dx:0,   dy:-14, an:"middle", n:{ en:"everyday futsūshu", ja:"日常の普通酒", zh:"日常普通酒" } },
              { S:8,  A:1.1, dx:-10, dy:17,  an:"end",    n:{ en:"Niigata tanrei", ja:"新潟の淡麗", zh:"新潟淡麗" } },
              { S:-5, A:1.6, dx:-9,  dy:4,   an:"end",    n:{ en:"fruity junmai", ja:"華やかな純米", zh:"芳香純米" } },
              { S:3,  A:1.9, dx:9,   dy:4,   an:"start",  n:{ en:"kimoto junmai", ja:"生酛純米", zh:"生酛純米" } }
            ];
            for (i = 0; i < pts.length; i++) {
              var p = pts[i];
              s += '<rect x="' + (px(p.S) - 4) + '" y="' + (py(p.A) - 4) + '" width="8" height="8" fill="#55504A"/>';
              s += lab(px(p.S) + p.dx, py(p.A) + p.dy, p.an, L(p.n), 11, "#201E1B");
            }
            /* kijōshu, off the chart */
            s += '<line x1="' + (X0 + 2) + '" y1="' + py(2.4) + '" x2="' + (X0 + 30) + '" y2="' + py(2.4) + '" stroke="#55504A"/>';
            s += '<path d="M' + (X0 + 2) + ' ' + py(2.4) + ' L' + (X0 + 10) + ' ' + (py(2.4) - 4) + ' L' + (X0 + 10) + ' ' + (py(2.4) + 4) + ' Z" fill="#55504A"/>';
            s += lab(X0 + 36, py(2.4) + 4, "start",
                     (lang === "ja" ? "熟成貴醸酒は −40 の彼方" : lang === "zh" ? "熟成貴釀酒遠在 −40 之外" : "aged kijōshu, far off at −40"), 10.5, "#55504A");
            /* axis captions */
            s += '<text x="' + X0 + '" y="' + (Y0 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "酸度 ↑" : lang === "zh" ? "酸度 ↑" : "ACIDITY ↑") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y1 + 40) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "日本酒度 →" : lang === "zh" ? "日本酒度 →" : "SAKE METER VALUE →") + '</text>';
            /* key */
            var ky = Y1 + 64;
            s += '<line x1="' + X0 + '" y1="' + (ky - 4) + '" x2="' + (X0 + 22) + '" y2="' + (ky - 4) + '" stroke="#B09E7C" stroke-width="2.2"/>';
            s += '<text x="' + (X0 + 30) + '" y="' + ky + '" font-size="11" fill="#201E1B">' +
                 (lang === "ja" ? "甘辛度 ＝ 0 ・甘いか辛いかの境" : lang === "zh" ? "甘辛度 ＝ 0・甜與辛的分界" : "sweetness index = 0 · the sweet/dry divide") + '</text>';
            s += '<line x1="' + X0 + '" y1="' + (ky + 18 - 4) + '" x2="' + (X0 + 22) + '" y2="' + (ky + 18 - 4) + '" stroke="#8B9BA6" stroke-width="2.2" stroke-dasharray="6 4"/>';
            s += '<text x="' + (X0 + 30) + '" y="' + (ky + 18) + '" font-size="11" fill="#201E1B">' +
                 (lang === "ja" ? "濃淡度 ＝ 0 ・濃いか淡いかの境" : lang === "zh" ? "濃淡度 ＝ 0・濃與淡的分界" : "richness index = 0 · the light/rich divide") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "両線が交わるのは日本酒度およそ −二・三、酸度およそ一・五五の一点である。そこが、二つの式のいう中庸である。"
                  : lang === "zh" ? "兩線相交於日本酒度約 −二・三、酸度約一・五五的一點；那就是這兩道公式所謂的「中庸」。"
                  : "The two lines cross at about −2.3 SMV and 1.55 acidity. That single point is what the pair of formulas calls neutral.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{en:"Worked examples",ja:"計算例",zh:"計算範例"},
          cols:[{en:"Sake",ja:"酒",zh:"酒"},{en:"SMV",ja:"日本酒度",zh:"日本酒度"},{en:"Acidity",ja:"酸度",zh:"酸度"},{en:"Sweetness",ja:"甘辛度",zh:"甘辛度"},{en:"Richness",ja:"濃淡度",zh:"濃淡度"},{en:"Reads as",ja:"印象",zh:"感受"}],
          numCols:[1,2,3,4],
          rows:[
            [{en:"Everyday futsūshu",ja:"日常の普通酒",zh:"日常普通酒"},"+3","1.2","−0.08","−0.90",
             {en:"Neutral and light — deliberately unremarkable",ja:"中庸で軽い。意図して目立たない",zh:"中性而輕盈——刻意不張揚"}],
            [{en:"Niigata tanrei",ja:"新潟の淡麗",zh:"新潟淡麗"},"+8","1.1","−0.43","−1.31",
             {en:"Dry and light — the classic",ja:"辛く軽い。典型である",zh:"辛而輕盈——經典款"}],
            [{en:"Modern fruity junmai",ja:"現代の華やかな純米",zh:"現代芳香純米"},"−5","1.6","+0.20","+0.22",
             {en:"Gently sweet, medium-bodied",ja:"穏やかに甘く、中程度の厚み",zh:"溫和微甜，酒體中等"}],
            [{en:"Kimoto junmai",ja:"生酛純米",zh:"生酛純米"},"+3","1.9","−0.89","+0.42",
             {en:"Dry <em>and</em> full — the combination acid makes possible",ja:"辛く、しかも厚い。酸が可能にする組み合わせである",zh:"既辛且厚——這是酸所造就的組合"}],
            [{en:"Aged kijōshu",ja:"熟成貴醸酒",zh:"熟成貴釀酒"},"−40","2.4","+2.63","+3.36",
             {en:"Sweet and very rich",ja:"甘く、きわめて濃い",zh:"甘甜且極為濃郁"}]
          ] },
        { t:"tiny", text:{
          en:"The two indices come from Japanese brewing research of the 1970s and are widely reproduced in the trade. Treat them as a better first guess than SMV alone, not as a substitute for tasting: neither accounts for amino acidity, glucose measured directly, temperature, or the presence of dissolved CO₂.",
          ja:"この二つの指標は一九七〇年代の日本の醸造研究に由来し、業界で広く引かれている。日本酒度だけよりは良い最初の見当として扱い、利き酒の代わりにはしないこと。いずれもアミノ酸度、直接測ったブドウ糖、温度、そして溶存する炭酸ガスを勘定に入れていない。",
          zh:"這兩個指標源自 1970 年代日本的釀造研究，在業界廣為引用。請把它們當作比單看日本酒度更好的初步判斷，而非品飲的替代品：兩者都未計入胺基酸度、直接測得的葡萄糖、溫度，以及溶存的二氧化碳。" } }
      ]
    },

    { t:"section", id:"temperature",
      title:{ en:"Why temperature changes the taste", ja:"温度が味を変える理由", zh:"溫度為何改變味道" }, jp:"知覚の生理",
      body:[
        { t:"p", text:{
          en:"Warming a sake does not change its chemistry in any meaningful way over the minutes involved. What changes is the taster: human taste and smell respond differently at different temperatures, and the response is not uniform across the five tastes. This is why the same bottle is two different drinks at 10°C and 45°C.",
          ja:"数分のあいだ酒を温めても、その化学組成が意味のあるかたちで変わるわけではない。変わるのは味わう側である。人の味覚と嗅覚は温度によって異なる反応を示し、その反応は五味のあいだで一様ではない。同じ一本が10度と45度で二つの異なる飲み物になるのは、そのためである。",
          zh:"在數分鐘的加熱過程中，酒的化學組成並不會發生任何有意義的改變。改變的是品嚐者：人的味覺與嗅覺在不同溫度下反應不同，而這些反應在五味之間並不一致。這正是同一瓶酒在 10°C 與 45°C 時成為兩種不同飲品的原因。" } },
        { t:"table",
          cols:[{en:"What",ja:"対象",zh:"對象"},{en:"Cold, 5–12°C",ja:"冷やして 5〜12℃",zh:"冰涼 5–12°C"},{en:"Warm, 40–50°C",ja:"燗 40〜50℃",zh:"溫熱 40–50°C"}],
          rows:[
            [{en:"Sweetness",ja:"甘味",zh:"甜味"},
             {en:"Suppressed. A sweet sake can read as merely soft.",ja:"抑えられる。甘い酒がただ柔らかいだけに感じられうる。",zh:"受抑。甜口的酒可能只顯得柔軟。"},
             {en:"Amplified — sensitivity to sugars peaks near body temperature. A −2 sake becomes obviously sweet.",ja:"増幅される。糖への感度は体温付近で最大になる。日本酒度−2の酒がはっきり甘くなる。",zh:"被放大——對糖的敏感度在接近體溫時達到高峰。日本酒度 −2 的酒會明顯轉甜。"}],
            [{en:"Acidity",ja:"酸味",zh:"酸味"},
             {en:"Prominent and refreshing; it defines the finish.",ja:"前に出て、爽やかに働く。後口を決める。",zh:"突出而清爽；它定義了收口。"},
             {en:"Softer and more integrated, reading as structure rather than as sharpness.",ja:"柔らかく溶け込み、鋭さではなく骨格として感じられる。",zh:"更柔軟、更融合，被感知為結構而非銳利。"}],
            [{en:"Umami",ja:"旨味",zh:"旨味"},
             {en:"Muted. This is why a savoury junmai can seem thin straight from the fridge.",ja:"鈍る。旨味のある純米が、冷蔵庫から出したては痩せて感じられる理由である。",zh:"變得沉悶。這正是帶旨味的純米剛從冰箱取出時會顯得單薄的原因。"},
             {en:"Opened up and broadened. The single largest gain from warming, and the reason kimoto rewards it most.",ja:"開き、広がる。燗による最大の利得であり、生酛が最も報いる理由である。",zh:"打開並擴展。這是加熱最大的收穫，也是生酛最能因此受益的原因。"}],
            [{en:"Bitterness",ja:"苦味",zh:"苦味"},
             {en:"More noticeable, and any roughness is exposed.",ja:"目立ち、粗さがあれば露わになる。",zh:"更為明顯，任何粗糙都會被暴露。"},
             {en:"Reduced. Warming forgives a sake with edges — and flatters a poor one, which is the historical reason for the practice's bad reputation abroad.",ja:"和らぐ。燗は角のある酒を許し、そして質の低い酒をも良く見せる。この習慣が海外で評判を落とした歴史的な理由である。",zh:"減弱。加熱寬待有稜角的酒——也會美化劣質的酒，這正是這種喝法在海外名聲不佳的歷史成因。"}],
            [{en:"Aroma",ja:"香り",zh:"香氣"},
             {en:"Contained and precise; delicate esters survive.",ja:"収まりよく精確で、繊細なエステルは残る。",zh:"收斂而精確；纖細的酯類得以留存。"},
             {en:"Volatile and expansive — good for savoury, Maillard and lactic notes, destructive for a fragile ginjō top note.",ja:"揮発し、広がる。旨味やメイラード、乳酸の香りには良いが、繊細な吟醸の上立ち香には破壊的である。",zh:"揮發而開展——有利於旨味、梅納與乳酸系香氣，卻會摧毀纖細吟釀的上層香。"}],
            [{en:"Alcohol",ja:"アルコール",zh:"酒精"},
             {en:"Recedes; a genshu at 19% can feel deceptively easy.",ja:"退く。19%の原酒が、油断させるほど飲みやすく感じられる。",zh:"退居其次；19% 的原酒可能給人容易入口的錯覺。"},
             {en:"Forward and warming. Part of the pleasure, and a reason to pace warmed sake carefully.",ja:"前に出て、身体を温める。楽しみの一部であり、燗酒の速度に注意すべき理由でもある。",zh:"往前推進並帶來暖意。這是樂趣的一部分，也是溫飲時應留意節奏的理由。"}]
          ] },
        { t:"note", label:{en:"The practical consequence",ja:"実際上の帰結",zh:"實務上的結論"}, text:{
          en:"If a sake seems thin, warm it before you conclude anything. If it seems clumsy or sweet, chill it. Between 5°C and 50°C you have a wider range of adjustment than the difference between two bottles from the same brewery, and it costs nothing. This is the single most underused tool available to anyone drinking sake at home.",
          ja:"痩せて感じられるなら、結論を出す前に温めること。もたついて甘く感じられるなら、冷やすこと。5度から50度のあいだにある調整の幅は、同じ蔵の二本の差より広く、しかも費用はかからない。家で日本酒を飲む人にとって、最も使われていない道具がこれである。",
          zh:"若一款酒顯得單薄，先加熱再下結論；若顯得笨拙或過甜，就冰鎮它。5°C 到 50°C 之間的調整幅度，比同一酒藏兩瓶酒之間的差異還大，而且不花一毛錢。對任何在家飲用清酒的人來說，這是最少被運用的工具。" } }
      ]
    },

    { t:"section", id:"texture",
      title:{ en:"Texture, and the things that are not tastes", ja:"質感——味ではないもの", zh:"質地：那些不是味道的東西" }, jp:"口当たり",
      body:[
        { t:"defs", items:[
          { term:{en:"Viscosity",ja:"粘性",zh:"黏度"}, jp:"とろみ",
            def:{en:"Sake carries glycerol and residual polysaccharides from the dissolved rice, and both add a perceptible weight in the mouth that has nothing to do with sweetness. A genshu at 19% feels thicker than a 15% sake of identical sugar content, because ethanol itself is viscous.",
              ja:"日本酒は、溶けた米に由来するグリセロールと多糖を含み、そのいずれもが、甘さとは無関係な重みを口中に加える。19%の原酒が、糖分の等しい15%の酒より厚く感じられるのは、エタノールそのものが粘性をもつからである。",
              zh:"清酒含有來自溶解米粒的甘油與殘留多醣，兩者都在口中增添與甜味無關的可感重量。19% 的原酒之所以比含糖量相同的 15% 酒更厚，是因為乙醇本身就具黏性。"} },
          { term:{en:"Dissolved CO₂",ja:"溶存炭酸ガス",zh:"溶存二氧化碳"}, jp:"微発泡",
            def:{en:"A freshly pressed or nama sake often carries a little carbon dioxide left from fermentation. It is felt as a prickle, and it also physically lifts aroma out of the glass and slightly increases perceived acidity. Sake that seems startlingly lively in January and merely pleasant in June has usually just lost its gas.",
              ja:"搾りたてや生の酒は、発酵から残った炭酸ガスをいくらか含むことが多い。舌に微かな刺激として感じられ、香りを杯から物理的に持ち上げ、感じられる酸味もわずかに高める。一月には驚くほど生き生きとしていた酒が六月にはただ心地よいだけになるのは、たいていガスが抜けただけである。",
              zh:"剛榨出的酒或生酒常帶有發酵殘留的少量二氧化碳。它被感知為輕微的刺激，並在物理上把香氣托出杯口，同時略微提高感知到的酸度。一月時活潑得驚人、六月時卻只是宜人的酒，多半只是氣跑掉了。"} },
          { term:{en:"Astringency",ja:"渋味",zh:"澀味"}, jp:"渋味",
            def:{en:"Sake has essentially no tannin, so what is described as astringency is usually a peptide-derived drying sensation, or the tactile effect of high alcohol. It is a texture rather than a taste, and — unlike in wine — it is almost always unwanted.",
              ja:"日本酒にはタンニンがほとんどないため、渋味と呼ばれるものはたいてい、ペプチド由来の乾く感覚か、高いアルコールの触覚的な効果である。味というより質感であり、ワインと違って、ほぼ常に望まれない。",
              zh:"清酒幾乎不含單寧，因此被稱作澀味者，多半是源自胜肽的乾澀感，或高酒精帶來的觸覺效應。它是質地而非味道，且與葡萄酒不同，幾乎總是不受歡迎。"} },
          { term:{en:"Kire",ja:"きれ",zh:"收口"}, jp:"きれ",
            def:{en:"The most-used word in Japanese sake description and the hardest to translate: the speed and cleanness with which a sake leaves the palate. High acidity, low residual sugar and low amino acidity all increase it. A sake with <em>kire</em> makes you want the next mouthful; one without it fills you up.",
              ja:"日本酒を語る際に最も多く使われ、最も訳しにくい語。酒が口から退いていく速さと清らかさである。高い酸、低い残糖、低いアミノ酸度がいずれもこれを高める。きれのある酒は次の一口を求めさせ、きれのない酒は人を満たしてしまう。",
              zh:"日本清酒描述中最常用、也最難翻譯的詞：酒離開口腔的速度與潔淨程度。高酸、低殘糖與低胺基酸度都會提升它。有「きれ」的酒讓你想再喝一口；沒有的則讓你覺得飽。"} }
        ] },
        { t:"p", text:{
          en:"Between them, these four explain most of the gap between an analysis sheet and an experience. Two sake with identical numbers can differ completely in weight, prickle and finish, and those are the qualities a drinker actually notices first. The numbers narrow the field; the texture decides whether you pour a second glass.",
          ja:"この四つで、分析表と体験とのあいだの隔たりの大半は説明がつく。数値の等しい二本が、重み、刺激、後口においてまるで違うことはありうる。そして飲み手が実際に最初に気づくのは、その性質である。数値は候補を絞り、質感が二杯目を注ぐかどうかを決める。",
          zh:"這四項合起來，便解釋了分析表與實際體驗之間的大半落差。兩款數據相同的酒，在重量、刺激感與收口上可能完全不同——而飲者最先注意到的，正是這些性質。數字縮小了選擇範圍，質地則決定你會不會倒第二杯。" } }
      ]
    },

{ t:"section", id:"aroma-compounds",
      title:{ en:"The aroma compounds, and how little of them there is", ja:"香気成分と、その僅かさ", zh:"香氣成分，以及它們有多稀少" }, jp:"香気成分",
      body:[
        { t:"p", text:{
          en:"Almost everything a drinker calls the smell of a sake is carried by compounds present at parts per million or less. Two esters do most of the work in a ginjō, a handful of alcohols and aldehydes fill in the background, and one sulphur compound at parts per billion can ruin the whole thing. The interesting number in the table below is not the concentration but the ratio between concentration and threshold — how far above the point of detection a compound sits.",
          ja:"飲み手が酒の香りと呼ぶもののほとんどは、百万分率かそれ以下で存在する化合物によって運ばれている。吟醸においては二つのエステルが仕事の大半を担い、数種のアルコールとアルデヒドが背景を埋め、そして十億分率の硫黄化合物一つが全体を台無しにしうる。下の表で興味深い数字は濃度ではなく、濃度と閾値との比である——ある化合物が、検知の点からどれだけ上にあるか。",
          zh:"飲者所謂「一支酒的香氣」，幾乎全由濃度在百萬分之一或更低的化合物承載。在吟釀中，兩種酯類承擔了大部分工作，少數幾種醇類與醛類填補背景，而一種濃度僅十億分之一的硫化物就足以毀掉一切。下表中值得玩味的數字不是濃度，而是濃度與閾值之比——一個化合物高出可偵測點多少。" } },

        { t:"table",
          cols:[{en:"Compound",ja:"化合物",zh:"化合物"},{en:"Japanese",ja:"和名",zh:"日文"},{en:"Smells of",ja:"香り",zh:"氣味"},{en:"Where it comes from",ja:"由来",zh:"來源"}],
          jpCols:[1],
          rows:[
            [{en:"Ethyl caproate",ja:"カプロン酸エチル",zh:"己酸乙酯"},"カプロン酸エチル",
             {en:"Green apple, melon, pear",ja:"青林檎、メロン、洋梨",zh:"青蘋果、哈密瓜、洋梨"},
             {en:"Produced by the yeast, and the compound the whole ginjō programme was built around. Kyōkai No. 9 and its descendants, and later the 1801-type strains, are selected for producing a great deal of it. Its detection threshold is low enough that a fraction of a milligram per litre is already conspicuous.",
              ja:"酵母が生む。吟醸という計画全体が、この化合物を軸に組み立てられた。きょうかい9号とその後裔、のちの1801系の株は、これを多く生むことによって選抜されている。閾値は低く、一リットルあたり一ミリグラムに満たぬ量ですでに際立つ。",
              zh:"由酵母產生，整個吟釀計畫正是圍繞這個化合物建立起來的。協會 9 號及其後代、以及後來的 1801 系酵母，都是因為能大量產生它而被選育。它的偵測閾值低到每公升不到一毫克就已相當醒目。"}],
            [{en:"Isoamyl acetate",ja:"酢酸イソアミル",zh:"乙酸異戊酯"},"酢酸イソアミル",
             {en:"Banana, pear drop",ja:"バナナ、洋梨の飴",zh:"香蕉、梨子糖"},
             {en:"The other great ginjō ester, and the older of the two aesthetics. Yeasts differ sharply in which of the two they favour, and a brewery's choice of strain is largely a choice between apple and banana.",
              ja:"もう一つの偉大な吟醸のエステルであり、二つの美学のうち古いほうである。酵母はどちらを好むかで大きく分かれ、蔵の株の選択は、おおむね林檎かバナナかの選択である。",
              zh:"另一種偉大的吟釀酯類，也是兩種美學中較老的一種。不同酵母對兩者的偏好差異極大，而酒藏選擇酵母，很大程度上就是在選蘋果還是香蕉。"}],
            [{en:"Ethyl acetate",ja:"酢酸エチル",zh:"乙酸乙酯"},"酢酸エチル",
             {en:"Solvent, nail varnish, at high levels",ja:"高濃度では溶剤、除光液",zh:"高濃度時像溶劑、去光水"},
             {en:"Present in every fermented drink. At low levels it lifts and freshens; above a certain point it is a fault, and it is one of the standard things a judging panel is trained to catch.",
              ja:"あらゆる発酵飲料に存在する。低濃度では香りを持ち上げ、爽やかにする。ある点を越えれば欠点であり、審査員が捉えるよう訓練される標準的な項目の一つである。",
              zh:"每一種發酵飲品中都有。低濃度時提香、增添清新感；超過某個點就是缺陷，也是評審受訓要抓出來的標準項目之一。"}],
            [{en:"Isoamyl alcohol",ja:"イソアミルアルコール",zh:"異戊醇"},"イソアミルアルコール",
             {en:"Warm, spirituous, faintly solvent",ja:"温かく、蒸留酒めいた、僅かに溶剤",zh:"溫熱、烈酒感、略帶溶劑味"},
             {en:"A higher alcohol — a fusel — produced from amino acid metabolism. Contributes body and warmth in balance, coarseness in excess. Its ratio to isoamyl acetate is a routine quality measurement.",
              ja:"アミノ酸代謝から生じる高級アルコール、いわゆるフーゼルである。均衡のうちにあれば酒躯と温かみを与え、過剰であれば粗さを与える。酢酸イソアミルとの比は、日常的な品質の指標である。",
              zh:"由胺基酸代謝產生的高級醇，即所謂雜醇油。份量得宜時帶來酒體與溫暖感，過量則帶來粗糙。它與乙酸異戊酯的比值是例行的品質指標。"}],
            [{en:"Acetaldehyde",ja:"アセトアルデヒド",zh:"乙醛"},"アセトアルデヒド",
             {en:"Bruised apple, sherry, green",ja:"傷んだ林檎、シェリー、青さ",zh:"碰傷的蘋果、雪莉、青澀"},
             {en:"An intermediate of fermentation and also a product of oxidation. A little is normal in a very young sake; a lot indicates either an unfinished ferment or air.",
              ja:"発酵の中間体であり、酸化の産物でもある。ごく若い酒に少量あるのは正常であり、多ければ発酵の不完全か、空気の混入を示す。",
              zh:"既是發酵的中間產物，也是氧化的產物。極年輕的酒中有少量屬正常；量大則代表發酵未完成，或接觸了空氣。"}],
            [{en:"4-vinylguaiacol",ja:"4-ビニルグアイアコール",zh:"4-乙烯基癒創木酚"},"4VG",
             {en:"Clove, smoke, medicinal",ja:"丁子、燻し、薬",zh:"丁香、煙燻、藥味"},
             {en:"Familiar from wheat beer. In sake it is generally unwanted and is one of the markers of an old or badly stored bottle, though a trace can read as complexity in an aged style.",
              ja:"小麦のビールで馴染みのものである。日本酒では概して望まれず、古い、あるいは保存の悪い瓶の標の一つである。もっとも熟成の型では、痕跡量が複雑さとして読まれることもある。",
              zh:"在小麥啤酒中很常見。在清酒中一般不受歡迎，是酒齡過老或保存不良的指標之一；不過在熟成類型中，微量有時會被讀作複雜度。"}],
            [{en:"Dimethyl trisulfide",ja:"ジメチルトリスルフィド",zh:"二甲基三硫醚"},"DMTS",
             {en:"Boiled cabbage, drains",ja:"茹でた葉物、排水",zh:"水煮青菜、排水口"},
             {en:"The key compound of <em>hineka</em>, the stale note of a badly kept bottle. Detectable at a few parts per billion — that is, at roughly a thousandth of the concentration at which a ginjō ester is conspicuous. Very small amounts of the wrong thing outrank large amounts of the right thing.",
              ja:"老香——保存の悪い瓶の劣化香——の鍵となる化合物である。十億分の数の単位で知覚される。すなわち、吟醸のエステルが際立つ濃度のおよそ千分の一である。誤ったものの極めて少量は、正しいものの大量に勝る。",
              zh:"「老香」——保存不良的酒瓶那種陳味——的關鍵化合物。在十億分之幾的濃度就能被察覺，也就是吟釀酯類醒目濃度的約千分之一。錯誤東西的極少量，壓得過正確東西的大量。"}],
            [{en:"Sotolon",ja:"ソトロン",zh:"葫蘆巴內酯"},"ソトロン",
             {en:"Curry, fenugreek, caramel, walnut",ja:"カレー、フェヌグリーク、カラメル、胡桃",zh:"咖哩、葫蘆巴、焦糖、核桃"},
             {en:"The signature of long ageing, and the same compound that defines vin jaune and old sherry. In koshu it is the point rather than the problem — which is a good illustration that there is no such thing as an intrinsically good or bad aroma compound, only one that is or is not wanted here.",
              ja:"長期熟成の署名であり、ヴァン・ジョーヌや古いシェリーを定義するのと同じ化合物である。古酒においては問題ではなく眼目である。本質的によい香気成分、悪い香気成分などというものはなく、ここで望まれるか望まれないかがあるだけだということの、よい例である。",
              zh:"長期熟成的署名，也正是定義黃酒（vin jaune）與陳年雪莉的同一個化合物。在古酒中它是重點而非問題——這很好地說明了：世上沒有本質上好或壞的香氣成分，只有在此處被不被需要的成分。"}]
          ] },

        { t:"note", text:{
          en:"Detection thresholds vary widely between individuals and are strongly affected by temperature and by what is in the glass alongside. Published threshold figures should be read as orders of magnitude, not as constants — which is one reason a tasting panel uses many judges rather than one very good one.",
          ja:"閾値は個人差が大きく、温度と、杯のなかで隣り合うものとに強く影響される。公表された閾値の数字は定数ではなく桁として読むべきである。審査が、きわめて優れた一人ではなく多くの審査員を用いる理由の一つがこれである。",
          zh:"偵測閾值因人而異，且深受溫度與杯中其他成分的影響。公開發表的閾值數字應被讀作數量級，而非常數——這也是評審採用多位評審而非一位極優秀評審的原因之一。" } }
      ] },

    { t:"section", id:"amino",
      title:{ en:"Amino acids and umami", ja:"アミノ酸と旨味", zh:"胺基酸與旨味" }, jp:"アミノ酸",
      body:[
        { t:"p", text:{
          en:"Sake contains far more free amino acid than wine or beer, and this is the single clearest chemical explanation for why it behaves differently at the table. The amino acids come from rice protein broken down by the kōji's proteases; the amino acid index on an analysis sheet is a titration measuring roughly how much of it there is, and the varieties present decide whether that reads as savoury depth or as heaviness.",
          ja:"日本酒はワインやビールよりはるかに多くの遊離アミノ酸を含み、これが、食卓での振る舞いが異なることの最も明快な化学的説明である。アミノ酸は、麹のたんぱく質分解酵素によって分解された米のたんぱく質に由来する。分析表のアミノ酸度は、その総量をおおよそ測る滴定であり、そしてどの種類が存在するかが、それが旨味の奥行きとして読まれるか、重さとして読まれるかを決める。",
          zh:"清酒所含的游離胺基酸遠多於葡萄酒或啤酒，這是它在餐桌上表現不同的最清晰化學解釋。這些胺基酸來自被麴的蛋白酶分解的米蛋白；分析表上的「胺基酸度」是一項滴定，粗略測量其總量，而其中存在哪些種類，則決定了它讀來是旨味的深度，還是沉重。" } },

        { t:"table",
          cols:[{en:"Amino acid",ja:"アミノ酸",zh:"胺基酸"},{en:"Tastes",ja:"味",zh:"味道"},{en:"Role in sake",ja:"日本酒での役割",zh:"在清酒中的角色"}],
          rows:[
            [{en:"Glutamic acid",ja:"グルタミン酸",zh:"麩胺酸"},{en:"Umami",ja:"旨味",zh:"旨味"},
             {en:"The classic savoury amino acid, and the one that makes sake so unusually good with dashi-based cooking — the two are pushing in the same direction rather than competing.",
              ja:"旨味の古典であり、日本酒が出汁の料理に異例なほどよく合う理由である。両者は競うのではなく、同じ方向へ押している。",
              zh:"旨味的經典代表，也是清酒與以高湯為基底的料理異常合拍的原因——兩者是往同一方向推，而非彼此競爭。"}],
            [{en:"Alanine",ja:"アラニン",zh:"丙胺酸"},{en:"Sweet",ja:"甘い",zh:"甜"},
             {en:"Usually the most abundant amino acid in sake. Contributes a soft sweetness that is not sugar, and is a large part of why a bone-dry sake can still read as gentle.",
              ja:"日本酒において最も多いアミノ酸であることが多い。糖ではない柔らかな甘さを与え、辛口の酒がなお穏やかに読まれる理由の大きな部分である。",
              zh:"通常是清酒中含量最高的胺基酸。帶來一種並非來自糖的柔和甜味，也是辛口酒仍能讀來溫和的一大原因。"}],
            [{en:"Arginine",ja:"アルギニン",zh:"精胺酸"},{en:"Bitter, faintly sweet",ja:"苦く、僅かに甘い",zh:"苦，略帶甜"},
             {en:"Abundant, and a precursor in some off-flavour pathways during storage. Its level is one thing a brewery watches when a sake is intended to be kept.",
              ja:"多く含まれ、貯蔵中の一部の劣化経路の前駆体でもある。寝かせる予定の酒について、蔵が見る値の一つである。",
              zh:"含量豐富，同時也是貯藏期間某些異味生成路徑的前驅物。若一支酒打算存放，其含量是酒藏會留意的指標之一。"}],
            [{en:"Leucine and valine",ja:"ロイシン・バリン",zh:"白胺酸與纈胺酸"},{en:"Bitter",ja:"苦い",zh:"苦"},
             {en:"Branched-chain amino acids, and the raw material for the higher alcohols above. Bitterness in the right amount is structure; in excess it is the coarse edge of an over-dissolved mash.",
              ja:"分岐鎖アミノ酸であり、前述の高級アルコールの原料でもある。適量の苦味は骨格であり、過剰であれば溶けすぎた醪の粗い角である。",
              zh:"支鏈胺基酸，也是前述高級醇的原料。適量的苦味是結構；過量則是溶解過度之醪的粗糙稜角。"}],
            [{en:"Proline",ja:"プロリン",zh:"脯胺酸"},{en:"Faintly sweet",ja:"僅かに甘い",zh:"微甜"},
             {en:"Increases with more protein-rich rice and less polishing, which is one mechanism by which a low-polish junmai reads fuller than a daiginjō made from the same variety.",
              ja:"たんぱく質の多い米、精米歩合の高い酒で増える。同じ品種から造られた大吟醸より、あまり磨かぬ純米が厚く読まれる仕組みの一つである。",
              zh:"隨著米蛋白質含量提高與精米步合放寬而增加；這正是同一品種所釀、低精米度的純米讀來比大吟釀更飽滿的機制之一。"}],
            [{en:"Peptides",ja:"ペプチド",zh:"胜肽"},{en:"Body, mouthfeel",ja:"厚み、口当たり",zh:"厚度、口感"},
             {en:"Short protein fragments rather than single amino acids. They contribute viscosity and a coating quality that is felt rather than tasted, and they are much reduced by heavy polishing and by carbon filtration.",
              ja:"単一のアミノ酸ではなく、短いたんぱく質の断片である。粘性と、味わうというより感じられる被膜のような質を与える。強い精米と炭濾過によって大きく減る。",
              zh:"是短的蛋白質片段而非單一胺基酸。它們貢獻黏度與一種「被感覺到而非被嚐到」的包覆感，並會因深度精米與炭過濾而大幅減少。"}]
          ] },

        { t:"grid", cols:2, cells:[
          { k:{ en:"Low amino acidity", ja:"アミノ酸度が低い", zh:"胺基酸度低" }, jp:"1.0前後",
            v:{ en:"Clean, short, precise", ja:"清く、短く、精緻", zh:"乾淨、短促、精準" },
            d:{ en:"Typical of daiginjō and of the Niigata style: heavy polishing removes the protein that would have become amino acid, and cold fermentation limits protease activity. The result is a sake that gets out of the way of food but has less to say on its own.",
              ja:"大吟醸と新潟の型に典型的である。強い精米はアミノ酸となるはずのたんぱく質を除き、低温発酵はたんぱく質分解酵素の働きを抑える。結果として、料理の邪魔をしないが、単独では語ることの少ない酒となる。",
              zh:"大吟釀與新潟風格的典型：深度精米移除了本會轉為胺基酸的蛋白質，低溫發酵又限制了蛋白酶的活性。結果是一支不會擋在料理前面、但獨飲時話語較少的酒。" } },
          { k:{ en:"High amino acidity", ja:"アミノ酸度が高い", zh:"胺基酸度高" }, jp:"1.8以上",
            v:{ en:"Broad, savoury, warming", ja:"広く、旨味が濃く、燗向き", zh:"寬廣、旨味濃、宜溫飲" },
            d:{ en:"Typical of kimoto, yamahai, low-polish junmai and aged sake. More to chew on, better with strong food, and much better warm — heat amplifies umami perception while suppressing the perception of sweetness, which is why these are the styles that reward a warmer.",
              ja:"生酛、山廃、精米歩合の高い純米、そして熟成酒に典型的である。噛みごたえがあり、味の強い料理に合い、そして燗ではるかによい。熱は旨味の知覚を強め、甘味の知覚を抑えるからであり、これらが燗に報いる型である理由である。",
              zh:"生酛、山廢、低精米度純米與熟成酒的典型。更有嚼頭，配重口味料理更好，溫熱後好得多——加熱會放大旨味的感知並抑制甜味的感知，這正是這些類型能從溫酒中獲益的原因。" } }
        ] }
      ] },

    { t:"related", items:[
      { href:"numbers.html", why:{ en:"The same compounds reduced to the figures on a label.", ja:"同じ成分を、札の数字へ還元したもの。", zh:"同樣的成分，被化約成酒標上的數字。" } },
      { href:"tasting.html", why:{ en:"How to find these compounds in an actual glass.", ja:"実際の杯のなかでこれらを見出す方法。", zh:"如何在一杯真實的酒裡找到這些成分。" } },
      { href:"yeast.html", why:{ en:"Which organism makes which of these smells.", ja:"どの生きものがどの香りを生むか。", zh:"哪一個生物造出哪一種氣味。" } },
      { href:"faults.html", why:{ en:"The same chemistry when it goes the wrong way.", ja:"同じ化学が誤った向きへ進んだとき。", zh:"同一套化學走錯方向的時候。" } }
    ] }
  ]
};


/* ---- ------------------------------------------- standards */
SAKE.pages["standards"] = {
  kicker: { en: "Understanding · 07", ja: "理解 · 07", zh: "理解 · 07" },
  title:  { en: "Law & Standards", ja: "法令と基準", zh: "法規與標準" },
  jp: "酒税法・表示基準・免許",
  lede: {
    en: "Almost every word on a Japanese sake label is there because a statute or a notification put it there, and the boundaries of the category — what may be called sake, what may be called junmai, who may make it and what it is taxed at — are drawn far more sharply in Japan than in most drinks-producing countries. This page sets out the actual instruments: the Liquor Tax Act's definition, the labelling standard of 1989 that created the premium designations, the tax rates, the licensing regime, and the geographical-indication framework.",
    ja: "日本酒の酒標に並ぶ語のほとんどは、法律か告示がそこに置いたから存在している。そしてこの分野の境界——何を清酒と呼びうるか、何を純米と呼びうるか、誰が造りうるか、いくら課されるか——は、多くの酒類生産国よりもはるかに鋭く引かれている。本頁は、その実際の条文を示す。酒税法の定義、特定名称を生んだ一九八九年の表示基準、税率、免許の仕組み、そして地理的表示の枠組みである。",
    zh: "日本酒標上幾乎每一個字，都是因為某條法律或某項告示把它放在那裡；而這個類別的界線——什麼可稱為清酒、什麼可稱為純米、誰可以釀造、課徵多少稅——在日本劃得比多數釀酒國家都要鋒利得多。本頁陳述實際的法制工具：酒稅法的定義、催生特定名稱的 1989 年標示基準、稅率、執照制度，以及地理標示框架。"
  },
  body: [

    { t:"section", id:"definition",
      title:{ en:"What sake legally is", ja:"清酒の法的定義", zh:"清酒的法律定義" }, jp:"酒税法第三条",
      body:[
        { t:"p", text:{
          en:"Article 3 of the Liquor Tax Act defines <em>seishu</em> in three limbs. Every commercial sake in Japan falls under one of them, and anything that does not is legally some other drink — usually a liqueur, and taxed differently.",
          ja:"酒税法第三条は、清酒を三つの号に分けて定義する。日本の市販の酒はすべてそのいずれかに当たり、当たらないものは法的に別の酒類——多くはリキュール——であり、課税も異なる。",
          zh:"酒稅法第三條分三款定義「清酒」。日本所有市售清酒都落在其中之一；不符者在法律上便是另一種酒類——通常是利口酒，課稅方式也不同。" } },
        { t:"ol", items:[
          { en:"<strong>Rice, rice kōji and water,</strong> fermented and <em>strained</em>. This is the pure case, and the word “strained” (こしたもの) is load-bearing: an unpressed mash is not sake at all but <em>doburoku</em>, a separate licensed category.",
            ja:"<strong>米、米こうじ、水</strong>を原料として発酵させ、<em>こした</em>もの。これが純粋な場合であり、「こしたもの」という語が要である。搾らない醪は清酒ではなく、別に免許されるどぶろくである。",
            zh:"<strong>以米、米麴與水</strong>發酵並<em>經過濾</em>者。這是最純粹的情形，而「經過濾（こしたもの）」一詞承載了關鍵意義：未經壓榨的醪根本不是清酒，而是另需執照的「濁醪（どぶろく）」。" },
          { en:"<strong>Rice, rice kōji, water and specified additional items</strong> — distilled alcohol, sugars, acids, amino acids, sake lees — fermented and strained, provided the combined weight of those additions does not exceed 50% of the weight of the rice. This limb is what makes futsūshu legal.",
            ja:"<strong>米、米こうじ、水、および政令で定める物品</strong>——醸造アルコール、糖類、酸味料、アミノ酸、清酒かす——を原料として発酵させ、こしたもの。ただしそれら物品の重量の合計が米の重量の100分の50を超えないこと。普通酒が合法である根拠がこの号である。",
            zh:"<strong>以米、米麴、水及政令所定物品</strong>——釀造酒精、糖類、酸味料、胺基酸、酒粕——發酵並過濾者，但所加物品重量合計不得超過米重的 50%。普通酒之所以合法，依據即在此款。" },
          { en:"<strong>Sake with sake lees added, then strained.</strong> The narrow third case.",
            ja:"<strong>清酒に清酒かすを加えて、こしたもの。</strong>狭い第三の場合である。",
            zh:"<strong>於清酒中加入酒粕後再過濾者。</strong>這是範圍狹窄的第三種情形。" }
        ] },
        { t:"grid", cols:3, cells:[
          { k:{en:"Alcohol ceiling",ja:"アルコール分の上限",zh:"酒精上限"}, v:{en:"under 22%",ja:"22度未満",zh:"未滿 22%"} },
          { k:{en:"Must be",ja:"要件",zh:"必要條件"}, v:{en:"strained · こしたもの",ja:"こしたもの",zh:"須經過濾"} },
          { k:{en:"Rice must be",ja:"米は",zh:"米須為"}, v:{en:"Japanese-grown for 日本酒",ja:"「日本酒」は国産米",zh:"標示「日本酒」者須為國產米"} }
        ] },
        { t:"note", label:{en:"Where a sake stops being sake",ja:"清酒でなくなるところ",zh:"清酒不再是清酒之處"}, text:{
          en:"Add fruit, herbs or extra sugar beyond the permitted list and the product becomes a liqueur, taxed at a different rate and unable to use the word 清酒. This is why a yuzu sake, a sparkling sake sweetened after fermentation, or a sake infused with anything is legally a different animal — and why AWA SAKE's rule that the carbonation must come from fermentation alone is not merely an aesthetic preference but the only way the drink stays seishu.",
          ja:"許された品目を超えて果実や香草や糖を加えれば、その製品はリキュールとなり、税率も変わり、「清酒」の語を用いることができない。柚子の酒、発酵後に甘みを加えた発泡酒、何かを漬け込んだ酒が法的に別の生き物である理由であり、AWA SAKEの「炭酸は発酵由来のみ」という規定が、単なる美意識ではなく、その飲み物が清酒であり続ける唯一の道である理由でもある。",
          zh:"若添加水果、香草或超出許可清單的糖分，該產品便成為利口酒，稅率不同，且不得使用「清酒」一詞。這正是柚子酒、發酵後加甜的氣泡酒，或任何浸泡了東西的酒在法律上屬另一種存在的原因；也是 AWA SAKE「二氧化碳僅能來自發酵」這條規定不只是美學偏好、而是該飲品得以維持清酒身分的唯一途徑。" } }
      ]
    },

    { t:"section", id:"labelling",
      title:{ en:"The labelling standard of 1989", ja:"平成元年の表示基準", zh:"1989 年的標示基準" }, jp:"清酒の製法品質表示基準",
      body:[
        { t:"p", text:{
          en:"The eight premium designations — junmai through junmai daiginjō — are not in the Liquor Tax Act. They come from a National Tax Agency notification issued in 1989 and in force from April 1990, which replaced the old first-, second- and third-class grading system abolished in 1992. That single document is the reason a modern label is readable at all.",
          ja:"純米から純米大吟醸までの八つの特定名称は、酒税法にはない。一九八九年に国税庁が出し、一九九〇年四月から施行された告示に由来する。これは一九九二年に廃止された一級・二級・特級の級別制度に代わるものであった。現代の酒標がそもそも読めるのは、この一つの文書のためである。",
          zh:"從純米到純米大吟釀這八種特定名稱，並不在酒稅法之中。它們出自國稅廳 1989 年發布、1990 年 4 月施行的告示，用以取代 1992 年廢止的特級／一級／二級分級制度。現代酒標之所以可讀，正是因為這一份文件。" } },
        { t:"table",
          caption:{en:"What the notification actually requires",ja:"告示が実際に求めていること",zh:"該告示實際的要求"},
          cols:[{en:"Requirement",ja:"要件",zh:"要件"},{en:"Detail",ja:"内容",zh:"內容"}],
          keyCol:true,
          rows:[
            [{en:"Rice grade",ja:"米の等級",zh:"米的等級"},
             {en:"Third class or better under the Agricultural Products Inspection Act. Uninspected rice, however good, disqualifies a sake from every premium designation.",ja:"農産物検査法により三等以上であること。検査を受けていない米は、どれほど良くとも、すべての特定名称から外れる。",zh:"須依《農產物檢查法》評為三等以上。未經檢查的米，無論多好，都會使該酒喪失所有特定名稱資格。"}],
            [{en:"Kōji ratio",ja:"麹歩合",zh:"麴步合"},
             {en:"At least 15% of the total rice must be kōji rice. This is the quiet floor under every designation and the reason a cheap sake cannot simply use less kōji.",ja:"総米の15%以上が麹米であること。すべての特定名称の下にある静かな床であり、安い酒が単に麹を減らすことのできない理由である。",zh:"總米量中至少 15% 須為麴米。這是所有特定名稱底下那道安靜的底線，也是廉價酒無法單靠減少用麴來省成本的原因。"}],
            [{en:"Milling ratio",ja:"精米歩合",zh:"精米步合"},
             {en:"70% or less for honjōzō, 60% or less for ginjō and tokubetsu, 50% or less for daiginjō. Junmai alone has no milling floor since a 2004 revision — before that it required 70%.",ja:"本醸造は70%以下、吟醸と特別は60%以下、大吟醸は50%以下。純米だけは二〇〇四年の改正以降、精米歩合の下限がない。それ以前は70%以下が要件であった。",zh:"本釀造 70% 以下，吟釀與特別 60% 以下，大吟釀 50% 以下。唯獨純米自 2004 年修訂後不再設精米步合下限——在此之前要求 70% 以下。"}],
            [{en:"Added alcohol",ja:"醸造アルコール",zh:"釀造酒精"},
             {en:"For the non-junmai designations, no more than 10% of the weight of the white rice used. Futsūshu has no such cap, which is the substantive difference between the two worlds.",ja:"純米以外の特定名称では、白米の重量の10%を超えないこと。普通酒にこの上限はない。二つの世界を実質的に分けているのはこの点である。",zh:"非純米類的特定名稱，添加量不得超過所用白米重量的 10%。普通酒無此上限——這才是兩個世界之間實質性的分野。"}],
            [{en:"Ginjō method",ja:"吟醸造り",zh:"吟釀造"},
             {en:"Ginjō and daiginjō must additionally be made by the ginjō method — low temperature, long fermentation — and show the character it produces. This is the one requirement that is not a number, and it is why the designation is a claim about process rather than only about milling.",ja:"吟醸と大吟醸はさらに、吟醸造り——低温で長期の発酵——によること、そしてそれによる固有の香味を有することを要する。数値でない唯一の要件であり、この名称が精米だけでなく製法についての主張である理由である。",zh:"吟釀與大吟釀還須以吟釀造法——低溫長期發酵——製成，並具備由此而生的香味特徵。這是唯一一項非數值的要求，也是該名稱不只關乎精米、更是對製法之主張的原因。"}],
            [{en:"Tokubetsu",ja:"特別",zh:"特別"},
             {en:"“Special” requires either 60% milling or another explicable distinction, which must be stated on the label. In practice it is the loosest term in the system.",ja:"「特別」は、精米歩合60%以下であるか、あるいは説明のできる別の特徴を要し、それを酒標に記さねばならない。実務上、この制度のなかで最も緩い語である。",zh:"「特別」須為精米步合 60% 以下，或具備其他可說明的差異，並須於酒標載明。實務上，它是這套制度中最寬鬆的用語。"}],
            [{en:"Prohibited claims",ja:"禁止される表示",zh:"禁止的標示"},
             {en:"Superlatives implying an official ranking — “finest”, “first class”, “top grade” — are prohibited, as are the abolished class names. Awards may be stated but must identify the competition and the year.",ja:"公的な順位を示唆する最上級——「最高」「第一」「特級」など——および廃止された級別の名称は禁じられる。受賞は記せるが、大会名と年を明示せねばならない。",zh:"暗示官方排名的最高級用語——「最高」「第一」「特級」等——以及已廢止的級別名稱，均予禁止。得獎可以標示，但必須載明賽事名稱與年份。"}]
          ] },
        { t:"p", text:{
          en:"The same notification governs the optional terms: 原酒, 生酒, 生貯蔵酒, 生詰酒, 樽酒 and 生一本 each have a definition that a brewery must meet before printing the word. Terms invented since — 無濾過, 中取り, 直汲み, おりがらみ — are not defined anywhere, and are governed only by the general prohibition on misleading representation.",
          ja:"同じ告示は任意の表示も規律する。原酒、生酒、生貯蔵酒、生詰酒、樽酒、生一本には、それぞれ定義があり、蔵はそれを満たさねばその語を刷ることができない。その後に生まれた語——無濾過、中取り、直汲み、おりがらみ——はどこにも定義されておらず、誤認を招く表示の一般的な禁止によってのみ規律される。",
          zh:"同一份告示也規範自願標示：原酒、生酒、生貯藏酒、生詰酒、樽酒與生一本各有定義，酒藏須符合方能印上該詞。其後出現的用語——無濾過、中取、直汲、澱がらみ——則未在任何法規中定義，僅受「不得為誤導性標示」的一般性禁止所規範。" } }
      ]
    },

    { t:"section", id:"tax",
      title:{ en:"Tax", ja:"酒税", zh:"酒稅" }, jp:"税率",
      body:[
        { t:"p", text:{
          en:"Japanese liquor tax is levied by volume, at a rate set by category. Sake's rate was cut and wine's raised until the two met, as part of a long programme to remove the distortions that different rates for similar drinks had created.",
          ja:"日本の酒税は、酒類の区分ごとに定められた税率で、容量に応じて課される。清酒の税率は引き下げられ、果実酒の税率は引き上げられて、両者は一致した。似た酒に異なる税率を課すことが生んだ歪みを取り除く、長い計画の一部である。",
          zh:"日本的酒稅依容量課徵，稅率按酒類別訂定。清酒稅率被調降、果實酒稅率被調升，直到兩者一致——這是一項長期計畫的一環，旨在消除對相似酒類課以不同稅率所造成的扭曲。" } },
        { t:"table",
          caption:{en:"Rates per kilolitre, 1 October 2023 – 30 September 2026",ja:"1キロリットルあたりの税率（令和5年10月1日〜令和8年9月30日）",zh:"每公秉稅率（2023 年 10 月 1 日至 2026 年 9 月 30 日）"},
          cols:[{en:"Category",ja:"区分",zh:"類別"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Rate",ja:"税率",zh:"稅率"},{en:"Per 720 ml",ja:"四合瓶あたり",zh:"每 720 ml"}],
          jpCols:[1],
          rows:[
            [{en:"Sake",ja:"清酒",zh:"清酒"},"清酒","¥100,000","¥72"],
            [{en:"Wine",ja:"果実酒",zh:"果實酒"},"果実酒","¥100,000","¥72"],
            [{en:"Beer",ja:"ビール",zh:"啤酒"},"ビール","¥181,000","¥130"],
            [{en:"Liqueur, under 13%",ja:"リキュール（13度未満）",zh:"利口酒（13 度未滿）"},"リキュール","¥120,000","¥86"],
            [{en:"Single-distilled shōchū",ja:"単式蒸留焼酎",zh:"單式蒸餾燒酎"},"焼酎乙類","¥200,000","¥144"],
            [{en:"Whisky and spirits, 37% and over",ja:"ウイスキー・スピリッツ（37度以上）",zh:"威士忌與烈酒（37 度以上）"},"ウイスキー","¥370,000 +",{en:"¥266 +",ja:"¥266〜",zh:"¥266 起"}]
          ] },
        { t:"grid", cols:2, cells:[
          { h:{en:"Volume, not strength",ja:"度数ではなく容量",zh:"依容量而非酒精度"},
            body:[{ t:"p", text:{
              en:"Sake is taxed per litre regardless of alcohol content, unlike spirits, whose rate climbs with each degree. A 19% genshu therefore carries exactly the same tax as a 13% low-alcohol sake — which quietly removes any fiscal penalty on strength, and is one reason undiluted genshu has become a normal commercial product rather than a curiosity.",
              ja:"清酒は、度数に関わらず容量に応じて課税される。度数ごとに税率が上がる蒸留酒とは異なる。したがって19%の原酒は13%の低アルコール酒とまったく同じ税を負う。強さに対する税の罰が存在しないということであり、無加水の原酒が珍品ではなく普通の商品となった理由の一つである。",
              zh:"清酒不論酒精度一律依公升課稅，與稅率隨度數遞增的烈酒不同。因此 19% 的原酒與 13% 的低酒精清酒承擔完全相同的稅——這等於在酒精強度上不設任何財稅懲罰，也是原酒得以從稀奇之物變成常規商品的原因之一。" } }] },
          { h:{en:"Why it is a small share of the price",ja:"価格に占める割合が小さい理由",zh:"為何它在價格中占比很小"},
            body:[{ t:"p", text:{
              en:"At ¥72 on a 720 ml bottle, tax is a large fraction of the price of a cheap sake and a trivial one on a premium bottle. The rate is the same on both, so the tax system is regressive in effect within the category — a fact that has shaped what Japanese breweries found profitable to make for most of the twentieth century.",
              ja:"四合瓶で72円という額は、安い酒の価格の大きな割合を占め、上級の酒ではごくわずかである。税率はどちらも同じであるから、この分野の内部では税は実質的に逆進的である。二十世紀の大半を通じて、日本の蔵にとって何を造ることが利益になるかを形づくってきた事実である。",
              zh:"720 ml 酒瓶課稅 72 日圓，對廉價酒而言占價格頗大比重，對高階酒則微不足道。兩者稅率相同，因此在這個類別內部，稅制在效果上是累退的——這個事實在二十世紀的大半時間裡，形塑了日本酒藏認為釀什麼才有利可圖。" } }] }
        ] }
      ]
    },

    { t:"section", id:"licensing",
      title:{ en:"Licensing", ja:"免許", zh:"執照" }, jp:"製造免許と販売免許",
      body:[
        { t:"defs", items:[
          { term:{en:"Manufacturing licence",ja:"酒類製造免許",zh:"酒類製造執照"}, jp:"製造免許",
            def:{en:"Granted per premises and per category, with a minimum annual production volume attached. For seishu aimed at the domestic market the tax authority has in practice granted essentially no new licences for decades, on supply-and-demand grounds. A would-be brewer must therefore buy a company that already holds one.",
              ja:"製造場ごと、酒類の区分ごとに与えられ、最低製造数量が付される。国内向けの清酒については、需給の調整を理由に、税務当局は数十年にわたり実質的に新規の免許を与えていない。したがって醸したい者は、既に免許をもつ会社を買うほかない。",
              zh:"依製造場所與酒類別分別核發，並附最低年產量要求。就面向國內市場的清酒而言，稅務當局數十年來基於供需調節，實質上未再核發新照。因此想釀酒者只能買下已持有執照的公司。"} },
          { term:{en:"Export-only licence",ja:"輸出用清酒製造免許",zh:"出口專用製造執照"}, jp:"2020年度改正",
            def:{en:"Created in the 2020 tax reform and available from 2021: a new brewery may be licensed provided everything it makes is sold abroad. It is the only route into sake brewing in Japan that does not require buying an existing company, and a handful of genuinely new breweries have started on it.",
              ja:"二〇二〇年度の税制改正で創設され、二〇二一年から利用できる。造ったものをすべて海外で売るのであれば、新しい蔵にも免許が与えられる。既存の会社を買わずに日本で清酒を醸しはじめられる唯一の道であり、これによって始まった新しい蔵が数えるほどある。",
              zh:"於 2020 年度稅制改革中創設、2021 年起可申請：只要所產全部外銷，新酒藏即可獲得執照。這是在日本不必買下既有公司便能進入清酒釀造的唯一途徑，已有數家真正的新酒藏循此起步。"} },
          { term:{en:"Retail licence",ja:"酒類販売業免許",zh:"酒類販售執照"}, jp:"販売免許",
            def:{en:"Required to sell alcohol at all, and separately for general retail, wholesale and online sale across prefectures. It is why a brewery's own shop, its distributor and a website each need their own paperwork.",
              ja:"酒類を売るために必要であり、一般小売、卸売、そして県を越える通信販売でそれぞれ別に要る。蔵の売店も、卸も、ウェブサイトも、それぞれ独自の書類を要する理由である。",
              zh:"販售酒類必須持有，且一般零售、批發與跨縣網路販售各需分別申請。這正是酒藏自營店、經銷商與網站各自都需要一套文件的原因。"} },
          { term:{en:"Doburoku special zones",ja:"どぶろく特区",zh:"濁醪特區"}, jp:"構造改革特区",
            def:{en:"A structural-reform exception from 2002 allowing farmers running accommodation or restaurants in designated rural zones to make unstrained doburoku for service on their own premises, without meeting the normal minimum volume. A small but real crack in an otherwise closed system.",
              ja:"二〇〇二年の構造改革特区による例外。指定された地域で宿や飲食店を営む農業者が、通常の最低製造数量を満たさずに、自らの施設で供するためのどぶろくを造ることを認める。閉じた制度に開いた、小さいが確かな裂け目である。",
              zh:"源自 2002 年構造改革特區的例外規定：在指定的鄉村區域經營住宿或餐飲的農業者，可不受一般最低產量限制，釀造供自家場所提供的未過濾濁醪。這是一個封閉制度上雖小卻真實的裂縫。"} }
        ] }
      ]
    },

    { t:"section", id:"gi-framework",
      title:{ en:"Geographical indications", ja:"地理的表示", zh:"地理標示" }, jp:"GI制度",
      body:[
        { t:"p", text:{
          en:"Japan's GI framework for alcoholic drinks sits under the Liquor Business Association Act rather than the agricultural GI law, and is administered by the National Tax Agency. A registered GI is a set of production rules attached to a place name, enforceable as a labelling offence.",
          ja:"日本における酒類の地理的表示の枠組みは、農産物のGI法ではなく酒類業組合法の下に置かれ、国税庁が所管する。登録されたGIとは、地名に結びついた生産の規定であり、表示に関する違反として執行されうる。",
          zh:"日本酒類的地理標示框架設於《酒類業組合法》之下（而非農產品 GI 法），由國稅廳主管。已登錄的 GI 是一組附著於地名的生產規則，違反者可作為標示違規予以取締。" } },
        { t:"timeline", items:[
          { year:"1994", era:{en:"Heisei 6",ja:"平成6年",zh:"平成六年"},
            title:{en:"The framework",ja:"枠組みの創設",zh:"框架創設"}, jp:"表示基準",
            text:{en:"A labelling standard for geographical indications on alcoholic drinks is issued, creating the mechanism.",ja:"酒類の地理的表示に関する表示基準が定められ、仕組みが生まれる。",zh:"訂定酒類地理標示的標示基準，機制自此成形。"} },
          { year:"2005", era:{en:"Heisei 17",ja:"平成17年",zh:"平成十七年"},
            title:{en:"The first sake GI",ja:"最初の清酒のGI",zh:"首個清酒 GI"}, jp:"白山",
            text:{en:"Hakusan in Ishikawa becomes the first registered sake GI — a decade before the framework was overhauled and long before anyone else applied.",ja:"石川の白山が最初の登録となる。枠組みが刷新される十年前、他の誰かが申請するよりはるか以前のことであった。",zh:"石川的白山成為首個登錄的清酒 GI——比框架翻修早了十年，也遠早於任何其他申請者。"} },
          { year:"2015", era:{en:"Heisei 27",ja:"平成27年",zh:"平成二十七年"},
            title:{en:"GI “Nihonshu”",ja:"GI「日本酒」",zh:"GI「日本酒」"}, jp:"国全体のGI",
            text:{en:"The word 日本酒 is registered as a country-wide geographical indication on 25 December, reserving it for seishu made in Japan from Japanese-grown rice.",ja:"十二月二十五日、「日本酒」が国全体を範囲とする地理的表示として登録され、国産米を用いて日本国内で造られた清酒に留保される。",zh:"12 月 25 日，「日本酒」登錄為涵蓋全國的地理標示，保留給在日本以國產米釀造的清酒。"} },
          { year:"2016", era:{en:"Heisei 28",ja:"平成28年",zh:"平成二十八年"},
            title:{en:"The first whole prefecture",ja:"最初の県単位",zh:"首個全縣範圍"}, jp:"山形",
            text:{en:"Yamagata is registered as the first prefecture-wide sake GI, and becomes the model most later applications follow.",ja:"山形が県全域を範囲とする最初の清酒のGIとして登録され、以後の申請の多くが倣う雛型となる。",zh:"山形登錄為首個以全縣為範圍的清酒 GI，並成為此後多數申請所仿效的範本。"} },
          { year:"2019", era:{en:"Reiwa 1",ja:"令和元年",zh:"令和元年"},
            title:{en:"Protection abroad",ja:"海外での保護",zh:"海外保護"}, jp:"日EU・EPA",
            text:{en:"The Japan–EU Economic Partnership Agreement enters into force with mutual recognition of geographical indications, extending protection for Japanese sake GIs across the European Union.",ja:"日EU経済連携協定が発効し、地理的表示の相互承認により、日本の清酒のGIの保護が欧州連合の全域へ及ぶ。",zh:"日歐經濟夥伴協定生效，透過地理標示相互承認，將日本清酒 GI 的保護延伸至整個歐盟。"} }
        ] },
        { t:"note", label:{en:"Two other rules worth knowing",ja:"知っておくべき二つの規定",zh:"另外兩項值得知道的規定"}, text:{
          en:"First, drinking age: Japanese law prohibits alcohol to anyone under twenty, and every label must carry the warning. Second, the fair competition code — an industry self-regulation approved under competition law — governs advertising and comparative claims, and is the reason Japanese sake marketing is noticeably more restrained than wine marketing elsewhere.",
          ja:"第一に飲酒年齢。日本の法は二十歳未満の飲酒を禁じ、すべての酒標に注意表示を求める。第二に公正競争規約——競争法の下で認定された業界の自主規制——が広告と比較表示を規律しており、日本酒の宣伝が他所のワインの宣伝より目立って抑制的である理由となっている。",
          zh:"其一是飲酒年齡：日本法律禁止未滿二十歲者飲酒，且每張酒標都必須載明警語。其二是公正競爭規約——依競爭法認可的業界自律規範——規範廣告與比較性宣稱，這正是日本清酒的行銷明顯比他處葡萄酒行銷更為節制的原因。" } }
      ]
    },

{ t:"section", id:"mandatory",
      title:{ en:"What must be on the bottle", ja:"瓶に必ず載るもの", zh:"瓶身上必須有的東西" }, jp:"必要記載事項",
      body:[
        { t:"p", text:{
          en:"Two separate bodies of rule govern a sake label. The National Tax Agency's labelling standard covers what the drink is; food law covers what a consumer needs to know about any packaged foodstuff. In practice they overlap, and the result is a small fixed set of items that must appear on every bottle sold in Japan, plus a much longer list of things a brewery may say only if it is true.",
          ja:"日本酒のラベルは、二系統の規則に支配されている。国税庁の表示基準は、その酒が何であるかを扱う。食品法は、包装された食品について消費者が知るべきことを扱う。実際には両者は重なり合い、その結果、日本国内で売られるすべての瓶に必ず載る小さな定型の一群と、真である場合にのみ言ってよい、はるかに長い一覧とが生じる。",
          zh:"日本酒的酒標受兩套規則管轄：國稅廳的表示基準規範「這是什麼酒」，食品法規範「消費者對任何包裝食品應知的事」。實務上兩者重疊，結果就是：在日本境內販售的每一支酒瓶上，都有一組固定而簡短的必載事項，以及一份長得多的、「屬實才能寫」的清單。" } },

        { t:"table",
          cols:[{en:"Item",ja:"項目",zh:"項目"},{en:"Japanese",ja:"表記",zh:"日文"},{en:"Note",ja:"備考",zh:"備註"}],
          jpCols:[1],
          rows:[
            [{en:"The word for the category",ja:"品目",zh:"品目"},"清酒 / 日本酒",
             {en:"Legally the category is <em>seishu</em>. <em>Nihonshu</em> may also be used, but since 2015 only for sake made in Japan from Japanese rice.",
              ja:"法律上の品目は清酒である。日本酒の語も用いうるが、2015年以降は国産米を用いて日本国内で製造されたものに限る。",
              zh:"法律上的品目是「清酒」。「日本酒」一詞亦可使用，但自 2015 年起僅限以日本產米、在日本國內釀造者。"}],
            [{en:"Alcoholic strength",ja:"アルコール分",zh:"酒精分"},"アルコール分 15度",
             {en:"Stated in degrees, which are volume per cent. A stated figure carries a tolerance of one degree in either direction.",
              ja:"度で表示され、これは容量パーセントである。表示値には上下1度の許容がある。",
              zh:"以「度」標示，即體積百分比。標示值上下各有 1 度的容許範圍。"}],
            [{en:"Ingredients",ja:"原材料名",zh:"原材料名"},"米（国産）、米こうじ（国産米）、醸造アルコール",
             {en:"Listed in descending order by weight, with the country of origin of the rice. The presence or absence of <em>醸造アルコール</em> here is the single most informative thing on a label.",
              ja:"重量順に、米の原産国を付して列記する。ここに醸造アルコールがあるかないかは、ラベル上で最も情報量の多い一点である。",
              zh:"依重量由多至少列出，並註明米的原產國。這裡有沒有「醸造アルコール」，是整張酒標上資訊量最大的一點。"}],
            [{en:"Volume",ja:"内容量",zh:"內容量"},"720ml / 1800ml",
             {en:"The two standard sizes are the <em>yongōbin</em> (720 ml) and the <em>isshōbin</em> (1.8 L), both descended from pre-metric measures.",
              ja:"標準の二寸法は四合瓶（720ml）と一升瓶（1800ml）であり、いずれも尺貫法の名残である。",
              zh:"兩種標準容量是四合瓶（720 ml）與一升瓶（1.8 L），皆源自公制之前的度量。"}],
            [{en:"Date of manufacture",ja:"製造年月",zh:"製造年月"},"製造年月 2026.04",
             {en:"Compulsory until the end of 2022 and optional since; in practice it is still on nearly every bottle. The month of bottling, not of brewing and not an expiry — sake carries no legal best-before date because it does not become unsafe, it becomes tired.",
              ja:"二〇二二年末までは義務であり、以降は任意である。実際にはなお、ほぼすべての瓶に載っている。瓶詰めの月であって、醸造の月でも、賞味期限でもない。日本酒に法定の期限表示はない。危険になるのではなく、疲れるからである。",
              zh:"到 2022 年底為止是強制標示，之後改為任意；實務上它仍然出現在幾乎每一瓶上。這是裝瓶的月份，不是釀造月份，也不是有效期限——清酒沒有法定賞味期限，因為它不會變得危險，只會變得疲乏。"}],
            [{en:"Brewery name and address",ja:"製造者名・所在地",zh:"製造者名稱與地址"},"製造者 ○○酒造株式会社",
             {en:"Where sake is bottled by someone other than its maker, both parties appear, which is how contract-brewed and merchant-labelled products can be identified.",
              ja:"製造者と異なる者が詰めた場合は双方が載る。桶取引や問屋銘柄が判別できるのはこれによる。",
              zh:"若裝瓶者非釀造者，則兩方都須列出；委託釀造與批發商自有品牌之所以能辨識，靠的就是這一點。"}],
            [{en:"Under-20 warning",ja:"20歳未満の者の飲酒禁止の表示",zh:"未滿 20 歲禁止飲酒的標示"},"20歳未満の者の飲酒は法律で禁止されています",
             {en:"Compulsory. The wording changed from 未成年者 to 20歳未満の者 when Japan's age of majority fell to 18 in April 2022 while the drinking age stayed at 20.",
              ja:"義務表示である。2022年4月に成年年齢が18歳に下がった一方、飲酒は20歳のまま据え置かれたため、文言が「未成年者」から「20歳未満の者」に改められた。",
              zh:"屬強制標示。二〇二二年四月日本成年年齡下修為 18 歲，但飲酒年齡仍維持 20 歲，因此文字由「未成年者」改為「20歳未満の者」。"}]
          ] },

        { t:"p", text:{
          en:"Two further items appear so consistently that they read as compulsory but are not. A pregnancy warning is an industry self-regulatory undertaking rather than a statute. And storage advice — 要冷蔵, refrigerate — is required only where the product actually needs it, which is why its presence on a bottle of nama is meaningful and its absence on a pasteurised bottle is not a lapse.",
          ja:"さらに二つ、義務のように見えて義務でないものがある。妊産婦への注意喚起は、法令ではなく業界の自主基準による。そして保存方法——要冷蔵——は、実際に必要な製品にのみ求められる。生酒の瓶にそれがあることに意味があり、火入れ酒の瓶にないことは不備ではない、というのはそのためである。",
          zh:"另有兩項出現得太過一致，以致看起來像強制規定，其實不是。孕產婦警語屬於業界自主規範，而非法令。而保存方式——「要冷藏」——只有在產品確實需要時才要求標示；因此生酒瓶上有它是有意義的，火入酒瓶上沒有它也不是疏漏。" } }
      ] },

    { t:"section", id:"optional",
      title:{ en:"Claims a brewery may make, and may not", ja:"言ってよいこと、いけないこと", zh:"可以說與不可以說的話" }, jp:"任意記載事項と禁止表示",
      body:[
        { t:"p", text:{
          en:"The 1989 standard's more interesting half is the list of optional claims. Each is a term the brewery may print only on satisfying a defined condition — which is what makes them worth reading, since an unregulated marketing word tells you nothing and these tell you something specific.",
          ja:"平成元年（1989）の基準の、より興味深い半分は任意記載事項の一覧である。いずれも、定められた条件を満たす場合にのみ印刷しうる語である——だからこそ読む価値がある。規制のない宣伝文句は何も語らないが、これらは何か具体的なことを語る。",
          zh:"一九八九年基準中比較有意思的那一半，是任意記載事項的清單。每一個詞都必須符合明確條件才能印上去——正因如此才值得閱讀：不受規範的行銷用語什麼也沒說，而這些詞說的是具體的事。" } },

        { t:"table",
          cols:[{en:"Term",ja:"用語",zh:"用語"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Condition for use",ja:"使用の条件",zh:"使用條件"}],
          jpCols:[1],
          rows:[
            [{en:"Genshu",ja:"原酒",zh:"原酒"},"原酒",
             {en:"No water added after pressing, apart from an adjustment of less than one degree of alcohol.",ja:"上槽後に加水しないもの。アルコール分1度未満の調整を除く。",zh:"上槽後不加水者；酒精度未達 1 度的調整不在此限。"}],
            [{en:"Nama-zake",ja:"生酒",zh:"生酒"},"生酒",
             {en:"Never pasteurised at any stage.",ja:"一度も火入れをしていないもの。",zh:"任何階段皆未經火入（加熱殺菌）者。"}],
            [{en:"Nama-chozō",ja:"生貯蔵酒",zh:"生貯藏酒"},"生貯蔵酒",
             {en:"Stored unpasteurised and pasteurised once at bottling. A different drink from nama, and often confused with it.",ja:"火入れせずに貯蔵し、瓶詰め時に一度だけ火入れしたもの。生酒とは別の酒であり、しばしば混同される。",zh:"未經火入即入槽貯藏，裝瓶時才火入一次。與生酒是不同的酒，卻常被混為一談。"}],
            [{en:"Nama-zume",ja:"生詰酒",zh:"生詰酒"},"生詰酒",
             {en:"Pasteurised once before storage and bottled without a second pasteurisation. Autumn <em>hiyaoroshi</em> is normally this.",ja:"貯蔵前に一度火入れし、瓶詰め時には火入れしないもの。秋のひやおろしは通常これである。",zh:"貯藏前火入一次，裝瓶時不再火入。秋季的「冷卸」通常屬此類。"}],
            [{en:"Ki-ippon",ja:"生一本",zh:"生一本"},"生一本",
             {en:"A junmai brewed entirely at a single brewery of the maker. Not a synonym for pure or unblended in any looser sense.",ja:"自社の単一の製造場のみで醸した純米酒。純粋、無混和といった緩い意味の同義語ではない。",zh:"完全在製造者自家單一酒藏釀成的純米酒。並非「純粹」或「未混和」等寬鬆語意的同義詞。"}],
            [{en:"Taru-zake",ja:"樽酒",zh:"樽酒"},"樽酒",
             {en:"Matured in wood and bottled from it, so that the cedar is a deliberate flavour.",ja:"木樽で貯蔵し、そこから瓶詰めしたもの。杉の香が意図された味である。",zh:"以木樽貯藏並自其中裝瓶者，杉木香是刻意的風味。"}],
            [{en:"Rice variety",ja:"原料米の品種名",zh:"原料米品種名"},"山田錦100%",
             {en:"May be stated only if that variety is at least 50% of the rice used, with the percentage shown.",ja:"使用した米の50%以上を占める場合にのみ、その割合とともに表示しうる。",zh:"僅在該品種占所用米 50% 以上時方可標示，並須註明比例。"}],
            [{en:"Place of production",ja:"清酒の産地名",zh:"清酒產地名"},"灘・伏見",
             {en:"May be stated only where the whole of the brewing took place there. A place name that is merely the brewery's address is a different claim.",ja:"醸造の全部がその地で行われた場合にのみ表示しうる。単に蔵の所在地を指す地名は、別種の表示である。",zh:"僅在全部釀造程序都在該地完成時方可標示。單純表示酒藏所在地的地名，屬於另一種宣稱。"}],
            [{en:"Years of storage",ja:"貯蔵年数",zh:"貯藏年數"},"三年貯蔵",
             {en:"Counted in whole years and stated for the youngest component of a blend.",ja:"満年で数え、混和の場合は最も若い酒に合わせて表示する。",zh:"以整年計算；若為調和酒，則以其中最年輕的一款為準標示。"}],
            [{en:"Hand-made",ja:"手造り",zh:"手造"},"手造り",
             {en:"Permitted only for sake made by traditional manual methods, with kōji made in the <em>kōji-buta</em> lidded-tray manner. It is a claim about the kōji room above all.",ja:"伝統的な手作業により、麹蓋による製麹を行って造られた酒にのみ許される。何よりも麹室についての表示である。",zh:"僅限以傳統手工方式釀造、且以「麴蓋」製麴者方可使用。它首先是一項關於麴室的宣稱。"}]
          ] },

        { t:"panel", title:{ en:"Forbidden and restricted wording", ja:"禁止・制限される表示", zh:"禁止與受限的用語" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Superlatives of rank.</strong> 最高, 第一, 代表 and similar absolute claims of supremacy are not permitted, because they cannot be substantiated and because they imitate the abolished grading system.",
                ja:"<strong>順位の最上級。</strong>最高、第一、代表といった絶対的優越の表示は認められない。実証しえず、また廃止された級別制度を模するからである。",
                zh:"<strong>排名式的最高級用語。</strong>「最高」「第一」「代表」等絕對優越的宣稱不被允許：既無從證實，也模仿了已廢止的級別制度。" },
              { en:"<strong>The old grades.</strong> 特級, 一級, 二級 were state grades assigned by tasting panel for tax purposes. The system was dismantled between 1989 and 1992 and the words may not be used; the modern <em>tokutei meishōshu</em> categories replaced them, and are defined by ingredients and polishing rather than by anyone's opinion.",
                ja:"<strong>旧級別。</strong>特級・一級・二級は、課税のために官能審査で付された国の等級である。制度は1989年から1992年にかけて解体され、語の使用は認められない。現行の特定名称酒がこれに代わり、誰かの意見ではなく原料と精米歩合によって定義される。",
                zh:"<strong>舊級別。</strong>「特級」「一級」「二級」是為課稅目的、由官能審查評定的國家等級。該制度於一九八九至一九九二年間廢除，這些字詞不得使用；取而代之的是現行的「特定名稱酒」，其定義依原料與精米步合，而非任何人的意見。" },
              { en:"<strong>Health claims.</strong> An alcoholic drink may not be presented as beneficial to health. Statements about amino acids, kōji enzymes or skin are policed under food-labelling and advertising rules regardless of whether the underlying research exists.",
                ja:"<strong>健康表示。</strong>酒類を健康によいものとして示すことはできない。アミノ酸、麹の酵素、肌についての言明は、その根拠となる研究の有無にかかわらず、食品表示および広告の規則の下で規制される。",
                zh:"<strong>健康宣稱。</strong>酒類不得被呈現為有益健康。關於胺基酸、麴酵素或皮膚的說法，無論背後是否有研究支持，都受食品標示與廣告規則管制。" },
              { en:"<strong>Advertising to the young.</strong> A body of industry self-regulation restricts casting, placement and timing of alcohol advertising — no models who appear under 25, no advertising in media aimed at minors, and standard prominence rules for the drinking-age warning.",
                ja:"<strong>若年層への広告。</strong>業界の自主基準は、酒類広告の出演者・掲出・時間帯を制限する——25歳未満に見える出演者を用いない、未成年者向け媒体に出稿しない、飲酒年齢の注意表示について定められた目立たせ方に従う。",
                zh:"<strong>對年輕族群的廣告。</strong>一套業界自主規範限制了酒類廣告的演出者、投放與時段——不得使用看起來未滿 25 歲的模特兒、不得於針對未成年者的媒體投放，並須依規定凸顯飲酒年齡警語。" }
            ] }
          ] }
      ] },

    { t:"section", id:"tokutei",
      title:{ en:"The eight special designations, exactly", ja:"特定名称の八区分、正確に", zh:"八種特定名稱，精確定義" }, jp:"特定名称酒の要件",
      body:[
        { t:"p", text:{
          en:"The categories every guide repeats are defined in one table in the 1989 standard, and the definitions are stricter than the popular summary. Three conditions apply to all eight: the rice must be graded third-class or better under the agricultural inspection system, at least 15% of the total rice weight must be kōji rice, and — where alcohol is added — the addition may not exceed 10% of the weight of the white rice used.",
          ja:"どの入門書も繰り返す区分は、1989年の基準の一枚の表に定義されている。そしてその定義は、通俗的な要約より厳しい。八区分すべてに共通する条件は三つ——農産物検査法による三等以上の玄米であること、麹米の使用割合が総米の15%以上であること、そしてアルコールを添加する場合、その量が白米重量の10%を超えないこと。",
          zh:"每本入門書都會複述的那些分類，其實定義在一九八九年基準的一張表裡，而且比通俗的摘要嚴格得多。八個類別共通的條件有三：米須依農產物檢查法評為三等以上；麴米使用比例須達總米重的 15% 以上；若添加酒精，其重量不得超過所用白米重量的 10%。" } },

        { t:"figure",
          caption:{
            en:"The whole of the 1989 designation table as a grid. Two questions decide almost everything — how far the rice was polished, and whether distilled alcohol was added within the legal cap — and the eight names fall out of the answers. The small print in a cell is the extra condition that name carries: the ginjō names additionally require ginjō-zukuri, the long cold fermentation, and the tokubetsu names require the brewery to say on the label what the special method was. Anything that fails a box falls into the last column.",
            ja:"一九八九年の特定名称の表の全体を、一枚の格子にしたもの。ほとんどすべては二つの問いで決まる——米をどこまで磨いたか、そして醸造アルコールを法の上限のうちで加えたかどうか。八つの名は、その答えから落ちてくる。升のなかの小さな文字は、その名が伴う追加の条件である。吟醸の名はさらに吟醸造り、すなわち低温長期の発酵を要し、特別の名は、その特別な製法が何であるかを蔵が酒標に記すことを要する。どこかの升を外れたものは、最後の列に落ちる。",
            zh:"把一九八九年特定名稱表的全部內容化為一張格子。幾乎一切都由兩個問題決定——米磨到多細，以及是否在法定上限內添加了釀造酒精——八個名稱便從答案中落下。格內的小字是該名稱附帶的額外條件：吟釀系另須採「吟釀造」，即低溫長期發酵；「特別」系則要求酒藏在酒標上說明特別製法為何。任何未能符合某一格者，都落入最後一欄。" },
          svg: function (lang, L) {
            var W = 760, H = 406, X0 = 140, CW = 196, GAP = 2, Y0 = 78, RH = 68;
            var cols = [
              { f:"#F2EFE8", h:{ en:"rice, kōji and water only", ja:"米・米麹・水のみ", zh:"僅米、米麴與水" },
                s:{ en:"no distilled alcohol", ja:"醸造アルコールを加えない", zh:"不添加釀造酒精" } },
              { f:"#F6F4EE", h:{ en:"alcohol added, within the cap", ja:"アル添・上限のうち", zh:"添加酒精，在上限內" },
                s:{ en:"≤10% of the white rice weight", ja:"白米重量の10%以下", zh:"白米重量的 10% 以下" } },
              { f:"#FAF9F5", h:{ en:"anything past that", ja:"それを超えるもの", zh:"超出者" },
                s:{ en:"more alcohol, sugars, low-grade rice", ja:"アル添過多・糖類・等外米", zh:"酒精過量、糖類、等外米" } }
            ];
            var rows = [
              { lab:{ en:"polished to 50%", ja:"精米歩合 50%以下", zh:"精米步合 50% 以下" }, n:"50",
                c:[ { t:"純米大吟醸酒", x:{ en:"+ ginjō-zukuri", ja:"＋吟醸造り", zh:"＋吟釀造" } },
                    { t:"大吟醸酒", x:{ en:"+ ginjō-zukuri", ja:"＋吟醸造り", zh:"＋吟釀造" } },
                    { t:"普通酒", dim:true } ] },
              { lab:{ en:"polished to 60%", ja:"精米歩合 60%以下", zh:"精米步合 60% 以下" }, n:"60",
                c:[ { t:"純米吟醸酒", t2:"特別純米酒", x:{ en:"ginjō-zukuri, or a stated method", ja:"吟醸造り、または特別な製法の明示", zh:"吟釀造，或明示特別製法" } },
                    { t:"吟醸酒", t2:"特別本醸造酒", x:{ en:"ginjō-zukuri, or a stated method", ja:"吟醸造り、または特別な製法の明示", zh:"吟釀造，或明示特別製法" } },
                    { t:"普通酒", dim:true } ] },
              { lab:{ en:"polished to 70%", ja:"精米歩合 70%以下", zh:"精米步合 70% 以下" }, n:"70",
                c:[ { t:"純米酒" }, { t:"本醸造酒" }, { t:"普通酒", dim:true } ] },
              { lab:{ en:"no numeric limit", ja:"精米歩合の規定なし", zh:"無精米步合規定" }, n:"—",
                c:[ { t:"純米酒", x:{ en:"the limit was dropped in 2004", ja:"要件は2004年に撤廃", zh:"該要件於二〇〇四年取消" } },
                    { t:"普通酒", dim:true }, { t:"普通酒", dim:true } ] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j, x, y;
            for (j = 0; j < cols.length; j++) {
              x = X0 + j * (CW + GAP);
              s += '<text x="' + (x + CW / 2) + '" y="' + (Y0 - 26) + '" text-anchor="middle" font-size="11" fill="#201E1B">' + L(cols[j].h) + '</text>';
              s += '<text x="' + (x + CW / 2) + '" y="' + (Y0 - 12) + '" text-anchor="middle" font-size="9" fill="#8B857C">' + L(cols[j].s) + '</text>';
            }
            for (i = 0; i < rows.length; i++) {
              y = Y0 + i * RH;
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 26) + '" text-anchor="end" font-size="10.5" fill="#201E1B">' + L(rows[i].lab) + '</text>';
              s += '<text x="' + (X0 - 14) + '" y="' + (y + 41) + '" text-anchor="end" font-size="16" fill="#DED8CB">' + rows[i].n + '</text>';
              for (j = 0; j < cols.length; j++) {
                x = X0 + j * (CW + GAP);
                var c = rows[i].c[j];
                s += '<rect x="' + x + '" y="' + y + '" width="' + CW + '" height="' + (RH - GAP) + '" fill="' + (c.dim ? cols[2].f : cols[j].f) + '" stroke="#DED8CB"/>';
                var ty = c.t2 ? y + 24 : (c.x ? y + 28 : y + 38);
                s += '<text x="' + (x + CW / 2) + '" y="' + ty + '" text-anchor="middle" font-size="14" fill="' + (c.dim ? "#ADA79E" : "#201E1B") + '">' + c.t + '</text>';
                if (c.t2) s += '<text x="' + (x + CW / 2) + '" y="' + (ty + 19) + '" text-anchor="middle" font-size="13" fill="#55504A">' + c.t2 + '</text>';
                if (c.x) s += '<text x="' + (x + CW / 2) + '" y="' + (y + RH - 14) + '" text-anchor="middle" font-size="8.5" fill="#8B857C">' + L(c.x) + '</text>';
              }
            }
            var BY = Y0 + rows.length * RH + 20;
            s += '<text x="30" y="' + BY + '" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "八区分すべてに共通する条件" : lang === "zh" ? "八類共通條件" : "TRUE OF ALL EIGHT") + '</text>';
            var conds = [
              { en:"rice graded third class or better", ja:"三等以上の玄米", zh:"米須三等以上" },
              { en:"kōji rice at least 15% of the total", ja:"麹米が総米の15%以上", zh:"麴米占總米 15% 以上" },
              { en:"the polishing figure on the label", ja:"精米歩合の実数を表示", zh:"酒標須標示實際精米步合" }
            ];
            for (i = 0; i < conds.length; i++) {
              s += '<text x="' + (196 + i * 188) + '" y="' + BY + '" font-size="9.5" fill="#8B857C">· ' + L(conds[i]) + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "最後の列は欠陥の区分ではない。日本で飲まれる酒のおよそ三分の二がそこにある。"
                  : lang === "zh" ? "最後一欄並非缺陷類別。日本人所飲的酒約有三分之二就在那裡。"
                  : "The last column is not a defect category. About two thirds of what Japan drinks is in it.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          cols:[{en:"Designation",ja:"特定名称",zh:"特定名稱"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Polishing",ja:"精米歩合",zh:"精米步合"},{en:"Added alcohol",ja:"アル添",zh:"添加酒精"},{en:"Other",ja:"その他",zh:"其他"}],
          jpCols:[1],
          rows:[
            [{en:"Junmai",ja:"純米酒",zh:"純米酒"},"純米酒",{en:"No numeric limit",ja:"規定なし",zh:"無數值規定"},{en:"None",ja:"なし",zh:"無"},
             {en:"The polishing requirement was removed in 2004; before that it was 70% or less. Breweries must still state the actual figure.",ja:"精米歩合の要件は2004年に撤廃された。それ以前は70%以下であった。実際の数値の表示義務は残る。",zh:"精米步合的要求已於二〇〇四年取消，此前為 70% 以下。實際數值仍須標示。"}],
            [{en:"Tokubetsu junmai",ja:"特別純米酒",zh:"特別純米酒"},"特別純米酒",{en:"60% or less, or a stated special method",ja:"60%以下、または特別な製造方法の明示",zh:"60% 以下，或明示特別製法"},{en:"None",ja:"なし",zh:"無"},
             {en:"&#8220;Special&#8221; must be explained on the label — it is not a free adjective.",ja:"「特別」の理由をラベルに説明しなければならない。自由な形容詞ではない。",zh:"「特別」的理由必須在酒標上說明，它不是可自由使用的形容詞。"}],
            [{en:"Junmai ginjō",ja:"純米吟醸酒",zh:"純米吟釀酒"},"純米吟醸酒",{en:"60% or less",ja:"60%以下",zh:"60% 以下"},{en:"None",ja:"なし",zh:"無"},
             {en:"Must also be made by <em>ginjō-zukuri</em> — low-temperature, extended fermentation — and be judged of good quality and aroma.",ja:"あわせて吟醸造り——低温で長期の発酵——によること、そして固有の香味と色沢が良好であることを要する。",zh:"另須以「吟釀造」——低溫長期發酵——製成，且香味與色澤良好。"}],
            [{en:"Junmai daiginjō",ja:"純米大吟醸酒",zh:"純米大吟釀酒"},"純米大吟醸酒",{en:"50% or less",ja:"50%以下",zh:"50% 以下"},{en:"None",ja:"なし",zh:"無"},
             {en:"Ginjō-zukuri, and judged especially good.",ja:"吟醸造りであり、特に良好と認められること。",zh:"須為吟釀造，且被認定為特別良好。"}],
            [{en:"Honjōzō",ja:"本醸造酒",zh:"本釀造酒"},"本醸造酒",{en:"70% or less",ja:"70%以下",zh:"70% 以下"},{en:"≤10% of white rice weight",ja:"白米重量の10%以下",zh:"白米重量的 10% 以下"},
             {en:"The alcohol cap is what separates honjōzō from futsūshu, which has no cap of this kind.",ja:"このアルコールの上限が、本醸造と普通酒とを分かつ。普通酒にこの種の上限はない。",zh:"這條酒精上限正是本釀造與普通酒的分界；普通酒沒有這類上限。"}],
            [{en:"Tokubetsu honjōzō",ja:"特別本醸造酒",zh:"特別本釀造酒"},"特別本醸造酒",{en:"60% or less, or a stated special method",ja:"60%以下、または特別な製造方法の明示",zh:"60% 以下，或明示特別製法"},{en:"≤10%",ja:"10%以下",zh:"10% 以下"},
             {en:"Same explanation requirement as tokubetsu junmai.",ja:"特別純米酒と同じ説明義務がある。",zh:"與特別純米酒相同的說明義務。"}],
            [{en:"Ginjō",ja:"吟醸酒",zh:"吟釀酒"},"吟醸酒",{en:"60% or less",ja:"60%以下",zh:"60% 以下"},{en:"≤10%",ja:"10%以下",zh:"10% 以下"},
             {en:"Identical to junmai ginjō but for the addition. Often the better buy at a competition-level house.",ja:"アル添を除けば純米吟醸と同一である。鑑評会に出す蔵では、しばしばこちらのほうが買い得である。",zh:"除了添加酒精之外，與純米吟釀相同。在會參賽的酒藏，這一款往往更划算。"}],
            [{en:"Daiginjō",ja:"大吟醸酒",zh:"大吟釀酒"},"大吟醸酒",{en:"50% or less",ja:"50%以下",zh:"50% 以下"},{en:"≤10%",ja:"10%以下",zh:"10% 以下"},
             {en:"The competition style. Most gold medals at the national appraisal are alcohol-added daiginjō, not junmai daiginjō.",ja:"鑑評会の型である。全国新酒鑑評会の金賞の多くは、純米大吟醸ではなくアル添の大吟醸である。",zh:"這是鑑評會的類型。全國新酒鑑評會的金賞多為添加酒精的大吟釀，而非純米大吟釀。"}]
          ] },

        { t:"note", text:{
          en:"Anything failing all eight is <em>futsūshu</em>, ordinary sake, which is roughly two thirds of what Japan drinks and is not a defect category. See <a href=\"classification.html\">Categories &amp; Law</a> for how these interact in practice, and <a href=\"label.html\">Reading a Label</a> for where each item physically appears.",
          ja:"八つのいずれにも当たらないものが普通酒である。日本で飲まれる酒のおよそ三分の二を占め、欠陥の区分ではない。実際にどう働くかは<a href=\"classification.html\">分類と法令</a>、各項目が瓶のどこに載るかは<a href=\"label.html\">表示の読み方</a>を参照。",
          zh:"八者皆不符合的即為「普通酒」，約占日本人所飲的三分之二，並非缺陷類別。實務上如何互動見<a href=\"classification.html\">分類與法規</a>；各項目實際印在瓶身何處見<a href=\"label.html\">酒標判讀</a>。" } }
      ] },

    { t:"section", id:"drinking-law",
      title:{ en:"Rules on drinking, not on brewing", ja:"造りではなく飲むことの法", zh:"關於飲用而非釀造的法規" }, jp:"飲酒に関する法",
      body:[
        { t:"defs", items:[
          { term:{ en:"The drinking age is twenty", ja:"飲酒は二十歳から", zh:"飲酒年齡為二十歲" }, jp:"二十歳未満飲酒禁止法", romaji:"nijussai-miman inshu kinshi-hō",
            def:{ en:"Japan's prohibition on drinking below the age of twenty dates from 1922 and survived the 2022 reduction of the age of majority to eighteen; the statute was renamed rather than relaxed. Liability falls on the adult and on the seller as much as on the drinker: a parent, guardian or licensee who knowingly permits it commits an offence, and retailers are required to verify age.",
              ja:"二十歳未満の飲酒の禁止は大正十一年（1922）に遡り、2022年の成年年齢の十八歳への引下げを経ても存続した。法は緩和されたのではなく、名称を改められたのである。責任は飲む者と同じく、大人と販売者にも及ぶ——親権者・監督者・営業者がそれと知って許せば違反であり、小売業者には年齢確認の義務がある。",
              zh:"日本禁止未滿二十歲飲酒的規定始於一九二二年，並在二〇二二年成年年齡下修為十八歲後仍然存續；該法只是改了名稱，並未放寬。責任不只落在飲用者身上，也落在成年人與販售者身上：親權人、監督者或營業者明知而允許即構成違法，零售業者則負有年齡確認義務。" } },
          { term:{ en:"Driving after any drink", ja:"飲酒運転", zh:"酒後駕車" }, jp:"道路交通法", romaji:"dōro kōtsū-hō",
            def:{ en:"Japan's threshold is low and its penalties are severe. The offence of driving with alcohol present begins at 0.15 mg per litre of breath, and a more serious offence applies where driving ability is impaired at all. Since 2007 the law also reaches the people around the driver: supplying the alcohol, providing the vehicle, or riding as a passenger knowing the driver has drunk are separately punishable. The practical consequence in a brewery town is that designated drivers and station taxis are simply assumed.",
              ja:"日本の基準値は低く、罰は重い。呼気1リットルにつき0.15mgから酒気帯び運転が成立し、正常な運転ができないおそれがある場合はより重い酒酔い運転となる。2007年以降、法は運転者の周囲にも及ぶ——酒類の提供、車両の提供、飲酒を知りながらの同乗が、それぞれ別に処罰される。酒の町における実際上の帰結は、運転を担う者と駅からのタクシーが、単に前提とされていることである。",
              zh:"日本的門檻低而罰則重。呼氣每公升 0.15 毫克即構成「酒氣帶駕駛」，若已影響正常駕駛能力則構成更重的「酒醉駕駛」。自二〇〇七年起，法律亦及於駕駛人周邊：提供酒類、提供車輛，或明知對方已飲酒仍搭乘，均分別受罰。在酒藏之鄉的實際結果是：指定駕駛與車站計程車，被視為理所當然。" } },
          { term:{ en:"Home brewing is illegal", ja:"自家醸造は違法", zh:"自釀為違法" }, jp:"無免許製造", romaji:"mumenkyo seizō",
            def:{ en:"Producing any beverage above one per cent alcohol without a licence is an offence under the Liquor Tax Act, and unlike in much of the world there is no domestic-consumption exemption. The rule is a nineteenth-century revenue measure — home brewing was a major untaxed competitor to licensed breweries — and it has had the lasting cultural effect of making brewing a wholly professional activity in Japan. The <a href=\"standards.html#licensing\">special zones</a> for doburoku are the narrow exception.",
              ja:"アルコール分1%以上の飲料を免許なく製造することは酒税法上の違反であり、世界の多くの地域と異なり自家消費の例外はない。この規定は十九世紀の税収策である——自家醸造は免許を持つ蔵にとって、課税されない有力な競争相手であった——そして日本において酒造りを完全に職業的な行為とする、長く続く文化的効果をもたらした。どぶろくの<a href=\"standards.html#licensing\">特区</a>が、その狭い例外である。",
              zh:"未取得執照而製造酒精濃度 1% 以上的飲料，依酒稅法即屬違法；且與世界許多地區不同，日本沒有「自用免責」的例外。這條規定源自十九世紀的稅收考量——自釀曾是持照酒藏強勁而不繳稅的競爭者——並產生了持久的文化效果：在日本，釀酒完全是一項專業行為。濁酒的<a href=\"standards.html#licensing\">特區</a>是那個狹窄的例外。" } }
        ] }
      ] },

    { t:"related", items:[
      { href:"classification.html", why:{ en:"The categories those statutes define.", ja:"その法が定める区分。", zh:"那些法規所定義的分類。" } },
      { href:"label.html", why:{ en:"What the standards require to be printed, and where.", ja:"基準が刷ることを求めるものと、その場所。", zh:"這些基準要求印出什麼，以及印在哪裡。" } },
      { href:"ricepolicy.html", why:{ en:"The agricultural law that has to be satisfied first.", ja:"先に満たされねばならぬ農の法。", zh:"必須先被滿足的那套農業法。" } },
      { href:"sources.html", why:{ en:"How to read the notifications themselves.", ja:"告示そのものを読むための手引き。", zh:"如何直接去讀那些告示原文。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- fakes */
SAKE.pages["fakes"] = {
  kicker: { en: "Understanding · 08", ja: "理解 · 08", zh: "理解 · 08" },
  title:  { en: "How Sake Has Been Faked", ja: "偽られてきた酒", zh: "被偽造的酒" },
  jp: "偽装",
  lede: {
    en: "Every clause in the modern labelling standard is a scar. Something was done, enough people noticed, and a line was written. This page runs the other way round from the law pages: it starts with what was actually done — watering the bottle on its way down the trade, tripling the tank with alcohol and sugar, wearing a grade that meant nothing, selling another brewery's sake under your own name, brewing in a country the label never mentions, refilling an empty bottle with something cheaper — and then says what the law did about it, and how long it took. The lag is usually decades.",
    ja: "いまの表示基準の条文は、どれも傷痕である。何かが行われ、気づく者が足るほどに増え、そして一行が書かれた。この頁は法の頁とは逆の向きに走る。まず実際に行われたことから始める——商いを下るあいだに瓶へ水を足すこと、アルコールと糖で桶を三倍にすること、意味を失った級を纏うこと、他蔵の酒を自らの名で売ること、札の語らぬ国で醸すこと、空いた瓶に安いものを詰め直すこと——そののち、法がそれに対して何をしたか、そしてそれに何年かかったかを述べる。その遅れは、たいてい数十年である。",
    zh: "現行標示基準裡的每一條，都是一道疤。有人做了某件事，注意到的人多到足夠，於是寫下了一行字。本頁的走向與法規各頁相反：先從實際被做過的事開始——在流通途中往瓶裡摻水、用酒精與糖把一槽變成三槽、掛著一個早已失去意義的等級、把別家酒藏的酒用自己的名字賣出、在酒標從未提及的國度裡釀造、把空瓶重新灌進更便宜的東西——然後才說法律對此做了什麼，以及花了多久。那個時間差，通常以數十年計。"
  },
  body: [

    { t:"section", id:"lag",
      title:{ en:"The distance between the act and the rule", ja:"行いと法とのあいだ", zh:"行為與法規之間的距離" }, jp:"遅れ",
      body:[
        { t:"figure",
          caption:{
            en:"Four things that were done to sake, drawn against the years they were done in. The bar begins roughly when the practice became widespread and ends at the year it stopped being possible; the note under each bar says what stopped it. Only three of the four were stopped by a rule. The first was stopped by rice coming back.",
            ja:"酒に対して行われた四つのことを、それが行われた年に対して描いたもの。棒はその慣行が広まったおおよその年に始まり、それが不可能になった年に終わる。棒の下の記は、何がそれを止めたかを述べる。四つのうち法が止めたのは三つである。最初のものを止めたのは、米が戻ってきたことであった。",
            zh:"四件曾經對酒做過的事，畫在它們發生的年份之上。橫條大致始於該做法開始普遍的年份，終於它不再可能的那一年；每條下方的註記說明是什麼終結了它。四者之中只有三者是被法規終結的。第一項的終結者，是米回來了。" },
          svg: function (lang, L) {
            var W = 760, H = 356, X0 = 200, Y0 = 1935, Y1 = 2030, SPAN = 510;
            function x(y) { return X0 + (y - Y0) * (SPAN / (Y1 - Y0)); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var rows = [
              { y:66, jp:"金魚酒", from:1937, to:1949,
                n:{ en:"Watering it down the trade", ja:"商いを下りながらの水増し", zh:"沿著流通環節摻水" },
                e:{ en:"Ended when rice returned — no rule was written", ja:"米が戻って終わった——法は書かれなかった", zh:"米回來之後就結束了——並沒有寫下任何法規" } },
              { y:124, jp:"級別制度", from:1943, to:1992,
                n:{ en:"A grade that said nothing", ja:"何も語らぬ級", zh:"什麼都沒說的等級" },
                e:{ en:"Abolished 1992; special designations took over", ja:"一九九二年に廃止、特定名称が代わる", zh:"1992 年廢止，由特定名稱取代" } },
              { y:182, jp:"三倍増醸酒", from:1949, to:2006,
                n:{ en:"One tank sold as three", ja:"一の桶を三として売る", zh:"一槽當成三槽賣" },
                e:{ en:"Pushed out of the seishu category, 1 May 2006", ja:"二〇〇六年五月一日、清酒の外へ", zh:"2006 年 5 月 1 日被推出清酒的範疇" } },
              { y:240, jp:"日本酒の名", from:1990, to:2015,
                n:{ en:"Foreign-made sake called nihonshu", ja:"外国産の清酒が日本酒を名乗る", zh:"外國製造的清酒自稱日本酒" },
                e:{ en:"Closed by the GI “Nihonshu”, 25 Dec 2015", ja:"二〇一五年、地理的表示「日本酒」が閉じる", zh:"2015 年 GI「日本酒」封閉此路" } }
            ];
            /* axis */
            var ticks = [1940, 1960, 1980, 2000, 2020], i;
            s += '<line x1="' + X0 + '" y1="300" x2="' + x(2030) + '" y2="300" stroke="#E7DFD2"/>';
            for (i = 0; i < ticks.length; i++) {
              s += '<line x1="' + x(ticks[i]) + '" y1="46" x2="' + x(ticks[i]) + '" y2="300" stroke="#F0EDE4"/>';
              s += '<text x="' + x(ticks[i]) + '" y="316" text-anchor="middle" font-size="10" fill="#8B857C">' + ticks[i] + '</text>';
            }
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], xa = x(r.from), xb = x(r.to), yrs = r.to - r.from;
              s += '<text x="186" y="' + (r.y + 4) + '" text-anchor="end" font-size="12.5" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="186" y="' + (r.y + 18) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + L(r.n) + '</text>';
              s += '<rect x="' + xa + '" y="' + (r.y - 8) + '" width="' + (xb - xa) + '" height="15" fill="#E4DCCC"/>';
              s += '<line x1="' + xb + '" y1="' + (r.y - 13) + '" x2="' + xb + '" y2="' + (r.y + 12) + '" stroke="#7C6B52" stroke-width="1.5"/>';
              s += '<text x="' + (xb + 7) + '" y="' + (r.y + 4) + '" font-size="10" fill="#7C6B52">' +
                   (lang === "en" ? yrs + " years" : yrs + (lang === "ja" ? "年" : "年")) + '</text>';
              s += '<text x="' + xa + '" y="' + (r.y + 27) + '" font-size="9.5" fill="#8B857C">' + L(r.e) + '</text>';
            }
            s += '<text x="20" y="' + (H - 18) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "始まりの年はおおよそのものである。四本目は、外国産の清酒がいつから日本酒を名乗りはじめたかに確たる年がないため、とりわけ粗い。"
                  : lang === "zh" ? "起始年份為概略值。第四條尤其粗略，因為外國製清酒究竟從哪一年開始自稱日本酒，並沒有確定的年份。"
                  : "Start years are approximate. The fourth is especially rough: there is no firm year at which foreign-made sake began calling itself nihonshu.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Read that figure as the shape of the whole page. Nothing on it was secret at the time. The tripled tank was printed in the tax statistics; the grade that said nothing was awarded by a government panel; the foreign-made bottle was on a shelf in Tokyo. What took decades was not discovery but the decision that it mattered enough to legislate — and in each case the decision arrived only once a part of the industry had something to gain from the rule.",
          ja:"この図を、頁全体の形として読まれたい。そこにあるもののいずれも、当時は秘密ではなかった。三倍にされた桶は税の統計に印字され、何も語らぬ級は政府の審査会が与え、外国産の瓶は東京の棚にあった。数十年を要したのは発見ではなく、法を書くに足るほど重大だという判断のほうである——そしてそのいずれにおいても、判断が届いたのは、業界の一部がその法から得るものを持ってからであった。",
          zh:"請把這張圖當作整頁的形狀來讀。圖上沒有任何一件事在當時是祕密。被變成三倍的酒槽印在稅務統計裡；什麼都沒說的等級由政府審查會授予；外國製造的瓶子就擺在東京的貨架上。花掉數十年的不是發現，而是「這件事重要到值得立法」這個判斷——而且每一次，這個判斷都是在產業裡有一部分人能從該法規中獲益之後，才終於抵達。" } },
        { t:"note", title:{ en:"What this page is not", ja:"この頁でないもの", zh:"本頁不是什麼" },
          text:{
            en:"It is not a list of breweries that were caught. Individual cases are handled by the Consumer Affairs Agency and the tax office and are poorly documented in English; naming a company for something settled twenty years ago adds nothing a reader can use. What is useful, and what is here, is the mechanism: how each kind of falsehood was possible, what made it profitable, and which sentence of which statute now stands in the way.",
            ja:"摘発された蔵の一覧ではない。個々の事件は消費者庁と税務署が扱い、英語では記録が乏しい。二十年前に決着した事柄で会社名を挙げても、読み手の使えるものは何も増えない。有用なのは、そしてここにあるのは、仕組みのほうである。それぞれの偽りがいかにして可能であったか、何がそれを儲かるものにしたか、そしていまどの法のどの一文がその前に立っているか。",
            zh:"它不是一份被查獲酒藏的名單。個別案件由消費者廳與稅務署處理，英文紀錄也相當稀少；為了二十年前已經了結的事而點名某家公司，並不會為讀者增加任何可用的東西。有用的、也是本頁所寫的，是機制：每一種偽造為何可能、是什麼讓它有利可圖，以及如今是哪一部法律的哪一句話擋在前面。" } }
      ] },

    { t:"section", id:"water",
      title:{ en:"Water, all the way down", ja:"どこまでも水", zh:"一路摻水" }, jp:"金魚酒",
      body:[
        { t:"p", text:{
          en:"The oldest way to make more sake is to add water to the sake you already have, and for most of the twentieth century the structure of the trade made that easy. Sake left the brewery, went to a wholesaler, went to a retailer, and was poured for a drinker. At every one of those handovers the container was opened. From about 1937, and badly after 1943, water was added at each of them.",
          ja:"酒を増やす最も古い法は、すでにある酒に水を足すことであり、二十世紀のほとんどを通じて、商いの構えはそれを容易にしていた。酒は蔵を出て、問屋へ行き、小売へ行き、飲み手へ注がれた。その受け渡しのいずれにおいても、器は開かれた。おおよそ一九三七年から、そして一九四三年ののちはひどく、そのそれぞれで水が足された。",
          zh:"要讓酒變多，最古老的方法就是往已有的酒裡加水；而在二十世紀的大部分時間裡，這門生意的結構讓這件事變得非常容易。酒離開酒藏，進到批發商，再到零售店，最後倒給飲者。在每一次交接時，容器都會被打開。大約從 1937 年起，1943 年之後尤其嚴重，每一個環節都被加了水。" } },
        { t:"panel", title:{ en:"Kingyo-zake", ja:"金魚酒", zh:"金魚酒" }, jp:"金魚酒",
          body:[
            { t:"p", text:{
              en:"The period had a name for the result: <em>kingyo-zake</em>, goldfish sake — thin enough that a goldfish dropped into it would swim. The word is a joke, but it is also a measurement: a goldfish will not survive long above a few per cent alcohol, so the name claims a bottle diluted most of the way to water. It is the only unit of strength in this whole reference that is a living animal.",
              ja:"その時代は、その結果に名を持っていた。金魚酒である——落とされた金魚が泳ぐほどに薄い。この語は洒落であるが、同時に計測でもある。金魚は数パーセントのアルコールの上では長く生きられぬのだから、その名は、ほとんど水にまで薄められた瓶を主張している。この事典の全体において、生きた動物である唯一の度数の単位である。",
              zh:"那個年代替這樣的結果取了名字：金魚酒——稀薄到把一條金魚丟進去牠還能游。這個詞是玩笑，但同時也是一種量測：金魚在超過百分之幾的酒精裡活不久，因此這個名字主張的是一瓶被稀釋到幾乎接近水的酒。它是這整本參考書裡，唯一一個以活體動物為單位的酒精度。" } },
            { t:"p", text:{
              en:"Two things made it profitable rather than merely possible. Rice for brewing was rationed, so the volume a brewery could legally make was capped and any extra volume had to come from somewhere else. And duty was assessed on the sake as it left the taxed point, by grade and by volume; water added downstream of that point multiplied the goods without multiplying the tax. The incentive ran the whole length of the chain, which is why the dilution did too.",
              ja:"それを単に可能なだけでなく儲かるものにしたのは、二つのことである。醸造用の米は配給され、蔵が法のうちで造りうる量には上限があった。ゆえに余の量はどこか他から来ねばならなかった。そして税は、課税の点を離れる時の酒に、級と量とによって課された。その点より下流で足された水は、税を増やすことなく品を増やした。誘因は鎖の全長に走っており、ゆえに希釈もまたそうであった。",
              zh:"有兩件事讓它不只是可能，而且有利可圖。釀造用米實施配給，酒藏在法律上能生產的量有上限，多出來的量必須從別處來。而酒稅是在酒離開課稅點時，依等級與容量課徵的；在那一點的下游加水，會讓貨品變多而稅金不變。誘因貫穿了整條鏈的長度——稀釋也因此貫穿了整條鏈。" } }
          ] },
        { t:"p", text:{
          en:"Nothing was legislated against it. It ended because rice came back: rationing was lifted in stages from 1949, the volume a brewery could make stopped being the binding constraint, and a diluted bottle stopped being worth the trouble. That is the uncomfortable lesson of the first bar in the figure above — the abuse that was never outlawed is also the only one that disappeared completely.",
          ja:"それに対して法は書かれなかった。終わったのは米が戻ったからである。配給は一九四九年より段を追って解かれ、蔵が造りうる量は縛る条件でなくなり、薄められた瓶は手間に値しなくなった。それが上の図の一本目の、居心地の悪い教えである——一度も禁じられなかった不正が、完全に消えた唯一のものでもある。",
          zh:"對此並沒有立法。它之所以結束，是因為米回來了：配給自 1949 年起分階段解除，酒藏能生產的量不再是那個束縛住一切的條件，一瓶被稀釋的酒也就不再值得那個麻煩。這是上圖第一條橫條裡令人不安的教訓——那個從未被明文禁止的不當行為，同時也是唯一一個徹底消失的。" } },
        { t:"note", title:{ en:"Adding water is not the offence", ja:"加水そのものは罪ではない", zh:"加水本身並不是罪" },
          text:{
            en:"Almost every bottle you will ever buy has had water added. A finished mash presses out at around seventeen or eighteen per cent alcohol and is cut to fifteen before bottling, which is a deliberate act of dilution performed by the brewer, declared on the ingredient line, taxed at the resulting volume, and named on the label when it is <em>not</em> done — that is what <em>genshu</em> means. The offence was never the water. It was the water added after the point at which anyone was counting.",
            ja:"あなたが買うであろうほとんどすべての瓶には、水が加えられている。醪は十七、八度ほどで搾り上がり、瓶詰の前に十五度へ割られる。それは造り手の行う意図された希釈であり、原材料の行に記され、その結果の量に課税され、そしてそれが行われぬときにこそ札に名が載る——原酒とはそれである。罪であったのは水ではない。誰も数えなくなった点より後に足された水である。",
            zh:"你買到的幾乎每一瓶酒都加過水。醪壓榨出來時大約十七、十八度，裝瓶前被調降到十五度；那是釀造者刻意執行的稀釋，寫在原料欄上，按最終容量課稅，而且是在「沒有這麼做」的時候才會被標在酒標上——那就是原酒的意思。罪從來不是水。罪是在已經沒有人計數的那一點之後，才被加進去的水。" } }
      ] },

    { t:"section", id:"stretch",
      title:{ en:"One tank sold as three", ja:"一の桶を三として", zh:"一槽賣成三槽" }, jp:"増醸",
      body:[
        { t:"p", text:{
          en:"The second method is more interesting than the first, because it was invented in a laboratory, adopted by the state, and legal for fifty-seven years. If water alone is too obvious, you can add alcohol to carry the strength back up, sugar to carry the body back up, and acid to carry the sourness back up — and what comes out is thin, sweetish, and unmistakably sake-shaped.",
          ja:"第二の法は第一よりも興味深い。実験室で生まれ、国に採られ、五十七年のあいだ合法であったからである。水だけでは露骨に過ぎるならば、アルコールを足して度数を戻し、糖を足して体を戻し、酸を足して酸味を戻せばよい——出てくるのは薄く、やや甘く、そして紛れもなく酒の形をしたものである。",
          zh:"第二種方法比第一種有意思，因為它誕生於實驗室、被國家採納，並且合法了五十七年。如果單純加水太明顯，那就再加酒精把度數拉回來、加糖把酒體拉回來、加酸把酸味拉回來——出來的東西稀薄、微甜，而且不折不扣是清酒的形狀。" } },
        { t:"timeline", items:[
          { year:"1919—1943", jp:"理研酒",
            title:{ en:"Synthetic sake", ja:"合成清酒", zh:"合成清酒" },
            text:{ en:"A year after the rice riots of 1918, Suzuki Umetarō sets his laboratory at the Institute of Physical and Chemical Research to making a sake with no rice in it. The institute patents a method in 1921, the first brands go on sale in 1923, and in 1930 the two halves of the problem — a fermentation route from starch and amino acids, and an economical synthesis of succinic acid for the sour backbone — are combined into the Riken method. It works. By 1943, 47 companies were making it in 52 plants under more than thirty brand names, upwards of 760,000 koku a year.",
              ja:"一九一八年の米騒動の翌年、鈴木梅太郎は理化学研究所の自らの研究室に、米を用いぬ酒を造らせる。研究所は一九二一年に製法の特許を取り、一九二三年に最初の銘柄が売りに出、そして一九三〇年、問題の二つの半分——デンプンとアミノ酸からの醗酵の道筋と、酸の骨格をなすコハク酸の安価な合成——が理研式醗酵法へと合わされる。それは働いた。一九四三年には四十七社が五十二の工場で、三十を越える銘のもとにこれを造り、年に七十六万石を上回った。",
              zh:"1918 年米騷動的次年，鈴木梅太郎讓他在理化學研究所的實驗室著手製造一種不含米的酒。研究所於 1921 年取得製法專利，1923 年最初的品牌上市；1930 年，問題的兩半——從澱粉與胺基酸出發的發酵路線，以及作為酸味骨架的琥珀酸的低成本合成——被合併成理研式發酵法。它成功了。到 1943 年，47 家公司在 52 座工廠、以超過三十個品牌名生產它，年產超過 76 萬石。" } },
          { year:"1949", jp:"三増",
            title:{ en:"Triple-increment brewing", ja:"三倍増醸", zh:"三倍增釀" },
            text:{ en:"The same chemistry is turned on real sake rather than used instead of it. Under Ministry of Finance guidance, alcohol, glucose and acidulants are added to a finished mash in quantities that roughly triple its volume while keeping it inside the legal definition of seishu. It is not a loophole; it is policy, in a country that has just lost a war and has no rice to spare.",
              ja:"同じ化学が、酒の代わりではなく、本物の酒に向けられる。大蔵省の指導のもと、アルコール、ぶどう糖、酸味料が仕上がった醪へ加えられ、その量をおおよそ三倍にしながら、なお清酒の法の定義のうちに留める。それは抜け道ではない。戦に負けたばかりで、余す米を持たぬ国における、政策である。",
              zh:"同樣的化學不再是取代清酒，而是被用在真正的清酒上。在大藏省的指導下，酒精、葡萄糖與酸味料被加進已完成的醪裡，份量大致讓容量變成三倍，同時仍留在清酒的法律定義之內。這不是漏洞；這是政策——出自一個剛剛戰敗、沒有多餘米糧的國家。" } },
          { year:"2006", jp:"五月一日",
            title:{ en:"The ceiling", ja:"上限", zh:"上限" },
            text:{ en:"The liquor tax law is rewritten. Everything other than rice, rice kōji, water and sake lees may together weigh no more than half the weight of the rice, and the drink must be under twenty-two per cent alcohol. Anything over the line is no longer seishu but <em>zasshu</em>, miscellaneous liquor, and may not be sold as sake. Stock made under the old law could be blended down until 30 September 2009. Triple-increment sake has not legally existed since.",
              ja:"酒税法が書き改められる。米、米麹、水、清酒かす以外のすべては、合わせて米の重量の半分を越えてはならず、アルコール分は二十二度未満でなければならない。線を越えたものはもはや清酒ではなく雑酒であり、日本酒として売ることはできない。旧法のもとで造られた在庫は、二〇〇九年九月三十日まで混和して下げることが許された。三増酒は以後、法的に存在しない。",
              zh:"酒稅法被改寫。米、米麴、水與酒粕以外的一切，合計重量不得超過米重量的一半，且酒精度必須低於二十二度。越線者不再是清酒，而是雜酒，不得以日本酒之名銷售。依舊法製造的庫存可混合稀釋至 2009 年 9 月 30 日為止。此後，三增酒在法律上不再存在。" } }
        ] },
        { t:"p", text:{
          en:"Two things are worth holding onto. The first is that added alcohol did not go away in 2006 and is not the same thing as triple-increment brewing: a honjōzō adds distilled alcohol at up to a tenth of the rice weight, deliberately, for aroma and for a drier finish, and has done so since long before the war. The second is that the ceiling is still generous. Half the rice weight, in a futsūshu, is a great deal of material that is not rice. It is simply no longer three times as much.",
          ja:"二つのことを手放さずにおきたい。第一に、加えるアルコールは二〇〇六年に消えたのではなく、三倍増醸と同じものでもない。本醸造は米重量の十分の一までの醸造アルコールを、香りのため、そして締まった後味のために、意図して加える。戦のはるか以前からそうしてきた。第二に、上限はなお寛い。普通酒における米重量の半分とは、米ならざる物としては相当の量である。ただ、もはや三倍ではないというだけである。",
          zh:"有兩件事值得記住。第一，添加酒精並沒有在 2006 年消失，而且它與三倍增釀並不是同一回事：本釀造會刻意添加最多達米重量十分之一的釀造酒精，為的是香氣與更俐落的尾韻，而且遠在戰前就是如此。第二，那個上限仍然寬鬆。在普通酒裡，米重量的一半，就非米原料而言是相當大的量。只是它不再是三倍了。" } }
      ] },

    { t:"section", id:"grades",
      title:{ en:"A grade that said nothing", ja:"何も語らぬ級", zh:"什麼都沒說的等級" }, jp:"級別",
      body:[
        { t:"p", text:{
          en:"From the war until 1992 every bottle of sake in Japan carried a government grade: <em>tokkyū</em>, <em>ikkyū</em>, <em>nikyū</em> — special, first, second. Sources disagree on the beginning. One account has the system starting in 1940 with six grades, to ration a rice market disordered by the war in China; the National Tax Agency's own history dates it to 1943 with four. Both agree it settled into three after rationing ended in 1949, and both agree on how it worked: a tasting panel convened by the tax authority assessed submitted samples, and each grade carried its own rate of duty, rising with the grade.",
          ja:"戦の時から一九九二年まで、日本のすべての瓶は国の級を帯びていた。特級、一級、二級である。始まりについて、資料は一致しない。ある記述は、日中の戦に乱された米の市場を配するため、一九四〇年に六段階で始まったとする。国税庁自らの史は、一九四三年に四段階としている。いずれも、一九四九年に配給が終わったのち三段階に落ち着いたことでは一致し、そしていかに働いたかでも一致する。税の当局が招集した審査会が提出された見本を鑑定し、級ごとに異なる酒税の率が、級が上がるにつれて上がっていった。",
          zh:"從戰時到 1992 年，日本的每一瓶酒都掛著政府給的等級：特級、一級、二級。關於起點，各方說法不一。有一種記載說這套制度始於 1940 年、分六級，用來配給被中日戰爭攪亂的米市；國稅廳自己的歷史則記為 1943 年、分四級。雙方都同意，1949 年配給結束後它定型為三級；雙方也都同意它如何運作：稅務當局召集的審查會鑑定送審的樣本，而每一個等級各有自己的酒稅稅率，等級愈高，稅率愈高。" } },
        { t:"figure",
          caption:{
            en:"Why the grade system destroyed itself. Submission to the panel was voluntary, and a sake that was never submitted was second grade by default — at the second-grade rate of duty. So a brewery with a sake it was proud of had a choice: put it up for judgement, accept whatever grade came back, and pay the higher duty; or decline, sell it as second grade, and price it honestly. Enough houses took the second route, and marketed the refusal, that the grade on the bottle stopped predicting anything at all.",
            ja:"級別制度がみずから壊れた理由。審査への提出は任意であり、提出されなかった酒は既定により二級——二級の税率であった。ゆえに誇るべき酒を持つ蔵には選びがあった。裁きに出し、返ってきた級を受け入れ、高い税を納めるか。あるいは断り、二級として売り、正直な値をつけるか。後者を取り、その拒みを売りにする蔵が足るほどに増え、瓶の上の級は何をも予言しなくなった。",
            zh:"等級制度為何自我毀滅。送審是自願的，而從未送審的酒依預設就是二級——適用二級稅率。於是，握有一支自豪的酒的酒藏面臨選擇：送去受審、接受回傳的任何等級、繳較高的稅；或者拒絕，以二級販售，誠實定價。選擇後者、並且把這個拒絕當成賣點的酒藏多到一定程度，瓶身上的等級便完全失去了預測力。" },
          svg: function (lang, L) {
            var W = 760, H = 322;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            function box(x0, y0, w, h, fill) {
              return '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="' + fill + '" stroke="#DCD5C8"/>';
            }
            /* top */
            s += box(300, 26, 160, 32, "#F5F2EA");
            s += '<text x="380" y="46" text-anchor="middle" font-size="12" fill="#201E1B">' +
                 (lang === "ja" ? "仕上がった一本" : lang === "zh" ? "一支釀好的酒" : "One finished sake") + '</text>';
            s += '<path d="M380 58 L380 74 L250 74 L250 100" fill="none" stroke="#C9C1B4"/>';
            s += '<path d="M380 58 L380 74 L566 74 L566 100" fill="none" stroke="#C9C1B4"/>';
            s += '<path d="M246 100 L250 108 L254 100 Z" fill="#C9C1B4"/><path d="M562 100 L566 108 L570 100 Z" fill="#C9C1B4"/>';
            s += '<text x="244" y="90" text-anchor="end" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "鑑査に出す" : lang === "zh" ? "送審" : "submitted") + '</text>';
            s += '<text x="574" y="90" font-size="10" fill="#8B857C">' +
                 (lang === "ja" ? "出さない" : lang === "zh" ? "不送審" : "not submitted") + '</text>';
            /* left column: three grades */
            var gr = [
              { jp:"特級", y:112, t:{ en:"highest duty", ja:"税率いちばん高い", zh:"稅率最高" } },
              { jp:"一級", y:164, t:{ en:"middle duty", ja:"税率なかほど", zh:"稅率居中" } },
              { jp:"二級", y:216, t:{ en:"lowest duty", ja:"税率いちばん低い", zh:"稅率最低" } }
            ];
            for (var i = 0; i < gr.length; i++) {
              s += box(150, gr[i].y, 200, 40, i === 2 ? "#EFEBE1" : "#FBFAF7");
              s += '<text x="166" y="' + (gr[i].y + 25) + '" font-size="13" fill="#201E1B">' + gr[i].jp + '</text>';
              s += '<text x="334" y="' + (gr[i].y + 25) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + L(gr[i].t) + '</text>';
            }
            /* right: unassessed */
            s += box(430, 112, 270, 40, "#EFEBE1");
            s += '<text x="446" y="137" font-size="13" fill="#201E1B">無鑑査二級酒</text>';
            s += '<text x="684" y="137" text-anchor="end" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "税率いちばん低い" : lang === "zh" ? "稅率最低" : "lowest duty") + '</text>';
            var lines = lang === "ja"
              ? ["品質がどうであれ、審査を受けぬ酒はここへ落ちる。",
                 "ゆえに蔵は、良い酒をわざと二級として売ることができた。",
                 "一ノ蔵はその本醸造に、まさに「無鑑査」と名づけて売った。"]
              : lang === "zh"
              ? ["無論品質如何，未受審查的酒都會落到這裡。",
                 "於是酒藏可以刻意把好酒當成二級來賣。",
                 "一之藏甚至直接把自家本釀造命名為「無鑑査」出售。"]
              : ["Whatever its quality, an unassessed sake landed here.",
                 "So a house could sell a good sake as second grade on purpose,",
                 "and Ichinokura sold a honjōzō named, precisely, Mukansa."];
            for (i = 0; i < lines.length; i++)
              s += '<text x="430" y="' + (180 + i * 17) + '" font-size="10.5" fill="#201E1B">' + lines[i] + '</text>';
            s += '<line x1="430" y1="240" x2="700" y2="240" stroke="#E7DFD2"/>';
            s += '<text x="430" y="260" font-size="10.5" fill="#7C6B52">' +
                 (lang === "ja" ? "一九九二年、制度は廃された。" : lang === "zh" ? "1992 年，制度被廢止。" : "The system was abolished in 1992.") + '</text>';
            s += '<text x="20" y="' + (H - 18) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "税率の差の大きさは年により変わったため、ここでは順のみを示す。"
                  : lang === "zh" ? "各級稅率的差距逐年變動，此處僅表示高低順序。"
                  : "The size of the gap between the rates changed from year to year; only the order is shown here.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"The replacement is the system on every bottle today, and its design is a direct answer to what went wrong. The labelling standard issued in November 1989 and phased in from 1990 defines the eight special designations by method and by measurement — polishing ratio, kōji rice ratio, whether distilled alcohol was added and how much. Not one of them is a judgement of quality. You cannot decline to have milled your rice to fifty per cent, and no panel has to agree that the result is good. The state got out of the business of saying which sake is better, and has stayed out of it since.",
          ja:"それに代わったものが、今日すべての瓶にある制度であり、その設計は、何が壊れたかへの直な答である。一九八九年十一月に告示され、一九九〇年から段を追って入った表示基準は、八つの特定名称を製法と計測によって定める。精米歩合、麹米の使用割合、醸造アルコールを加えたか、どれほど加えたか。そのいずれも、質の裁きではない。米を五割まで磨いたことを断ることはできず、その結果が良いと審査会が認める必要もない。国は、どの酒が優れているかを言う商いから降り、以後そこへ戻っていない。",
          zh:"取而代之的，就是今天每一瓶酒上的那套制度，而它的設計正是對當初出了什麼問題的直接回答。1989 年 11 月公告、1990 年起分階段實施的標示基準，以製法與量測來定義八種特定名稱：精米步合、麴米使用比例、是否添加釀造酒精、添加多少。其中沒有任何一項是對品質的評斷。你無法「拒絕」把米磨到五成，也不需要任何審查會同意結果好喝。國家退出了「判定哪支酒比較好」這門生意，此後也沒有再回去。" } },
        { t:"tiny", text:{
          en:"One survival: the words <em>tokusen</em>, <em>jōsen</em> and <em>kasen</em> — choice, superior, fine — appear on some large-house bottles as house tiers, and are sometimes read as the old grades in disguise. They are not. They are a brewery's own ranking of its own products, with no legal content whatever.",
          ja:"ひとつの遺り。特撰、上撰、佳撰の語は、いくつかの大手の瓶に自社の格として現れ、旧い級の変装と読まれることがある。そうではない。それは蔵が自社の品を自ら並べたものであり、法的な中身は何もない。",
          zh:"有一項遺留：特撰、上撰、佳撰這幾個詞出現在部分大廠的瓶身上，作為自家的分級，有時會被讀成舊等級的化身。它們不是。那是酒藏對自家產品的自我排序，沒有任何法律內容。" } }
      ] },

    { t:"section", id:"whose",
      title:{ en:"Whose sake is in the bottle", ja:"誰の酒が入っているか", zh:"瓶裡是誰的酒" }, jp:"桶買い",
      body:[
        { t:"p", text:{
          en:"A brewery may sell finished sake in bulk to another brewery, which bottles it under its own brand. This is <em>okegai</em> and <em>okeuri</em>, buying and selling by the tank, and in the 1970s it accounted for a large share of the volume behind the biggest names in the country. It moves between licensed premises under a tax-deferred transfer, so no duty is paid until the bottle leaves the second house. There is nothing illegal about any of it, and there never has been.",
          ja:"蔵は仕上がった酒をまとめて他の蔵へ売ることができ、買った蔵はそれを自社の銘で瓶詰めする。これが桶買い・桶売り、桶の単位での売買であり、一九七〇年代には国で最も大きな銘柄の背後にある量の、大きな割合を占めた。免許のある製造場のあいだを未納税で移出するため、二つ目の蔵を瓶が離れるまで税は納められない。そのいずれにも違法はなく、かつて一度もなかった。",
          zh:"一家酒藏可以把釀好的酒整槽賣給另一家酒藏，由後者用自己的品牌裝瓶。這就是桶買與桶賣，以槽為單位的買賣；1970 年代，全國最大幾個品牌背後的酒量，有很大一部分來自於此。它在有執照的製造場之間以未納稅方式移出，因此在瓶子離開第二家酒藏之前都不需繳稅。這一切沒有任何違法之處，從來都沒有。" } },
        { t:"p", text:{
          en:"What made it a question of honesty was that nothing on the bottle said so. The mandatory items are set by the liquor business association law: the category, the maker's name, the address of the manufacturing premises, the volume, and the alcohol strength expressed as a one-degree band — “not less than 15 and less than 16 degrees”. The maker of record is the house that finished and bottled it. Where the liquid was fermented is not a mandatory item, and the address of the premises may lawfully be printed as a registered code rather than a place.",
          ja:"それを正直さの問いにしたのは、瓶の上にそう書かれていなかったことである。必ず記すべき事項は酒類業組合法が定める。品目、製造者の氏名または名称、製造場の所在地、内容量、そして一度刻みの幅で示すアルコール分——「十五度以上十六度未満」。記録上の製造者は、仕上げて詰めた蔵である。その液がどこで醗酵したかは必記の事項ではなく、製造場の所在地は、地名ではなく登録された記号として印すことが法的に許されている。",
          zh:"讓它成為誠實與否的問題的，是瓶子上什麼都沒說。必須標示的項目由酒類業組合法規定：品目、製造者姓名或名稱、製造場所在地、內容量，以及以一度為區間表示的酒精度——「十五度以上、未滿十六度」。登記在案的製造者，是完成並裝瓶的那一家。酒液是在哪裡發酵的並非必標項目；而製造場的所在地，依法可以印成一組登記的代號，而不是一個地名。" } },
        { t:"defs", items:[
          { term:{ en:"Untaxed transfer", ja:"未納税移出", zh:"未納稅移出" }, jp:"未納税移出",
            def:{ en:"The mechanism that makes bulk trade possible: sake may move from one licensed manufacturing premises to another without duty being assessed, because duty attaches when it leaves the last one. It is the same mechanism a brewery uses to move its own sake between its own sites, and it is not a loophole — but it is why the tax records, which are the most reliable numbers in the industry, count a tank once rather than twice.",
              ja:"まとめての取引を可能にする仕組み。酒は免許ある製造場から他の製造場へ、課税されぬまま移すことができる。税は最後の場を離れる時に掛かるからである。蔵が自社の場のあいだで自社の酒を動かすのと同じ仕組みであり、抜け道ではない——しかしそれこそが、この業界で最も信ずべき数である税の記録が、一つの桶を二度ではなく一度だけ数える理由である。",
              zh:"讓整槽交易得以成立的機制：酒可以從一個有執照的製造場移往另一個製造場而不課稅，因為稅是在它離開最後一個製造場時才附著。這與酒藏在自家不同廠區之間搬運自家酒所用的是同一個機制，它不是漏洞——但這也正是為什麼，業界最可靠的數字、也就是稅務紀錄，把一槽酒算一次而不是兩次。" } },
          { term:{ en:"The brand count problem", ja:"銘柄数の問題", zh:"品牌數量的問題" }, jp:"銘柄と蔵",
            def:{ en:"Because bulk trade is invisible on the label, the number of brands on a shelf has never matched the number of breweries in the country, and the gap has always run in the same direction: more brands than makers. A reader who wants to know who actually brewed a given bottle has, in the general case, no way to find out from the bottle.",
              ja:"まとめての取引が札の上で見えぬがゆえに、棚の上の銘柄の数は、国の蔵の数と一致したことがない。そしてその差はつねに同じ向きに走る——造り手より銘柄のほうが多い。ある一本を実際に誰が醸したかを知りたい読み手には、一般には、瓶から知る術がない。",
              zh:"由於整槽交易在酒標上是看不見的，貨架上的品牌數量從來不曾等於全國酒藏的數量，而且差距永遠朝同一個方向：品牌多於製造者。想知道某一瓶究竟是誰釀的讀者，在一般情況下，沒有辦法從瓶子本身得知。" } }
        ] },
        { t:"p", text:{
          en:"The trade has shrunk a great deal since its peak, less from regulation than from the collapse of the volume market that needed it. What changed the culture was disclosure by choice: from the 1980s a stream of writing on regional sake made the practice widely known, and small breweries that did their own brewing start to end began saying so, because it had become worth saying. Transparency here is a marketing position rather than a legal requirement, which is a weaker guarantee than most drinkers assume.",
          ja:"その取引は最盛期よりずっと縮んだが、それは規制よりも、それを必要とした量の市場が潰れたことによる。文化を変えたのは、選びによる開示であった。一九八〇年代より、地酒についての書き物の流れがこの慣行を広く知らしめ、始めから終いまで自ら醸す小さな蔵が、そう言うようになった。言うに値するものになったからである。ここでの透明さは法の要求ではなく売りの立場であり、それはほとんどの飲み手が思うより弱い保証である。",
          zh:"這樁生意自高峰以來已大幅萎縮，原因與其說是法規，不如說是需要它的那個大宗市場本身垮了。真正改變文化的，是出於選擇的揭露：1980 年代起，一連串關於地酒的書寫讓這個做法廣為人知，而那些從頭到尾自己釀酒的小酒藏開始明說，因為那件事變得值得說了。這裡的透明是一種行銷立場，而不是法律要求——那是一個比多數飲者所以為的更弱的保證。" } }
      ] },

    { t:"section", id:"where",
      title:{ en:"Made where, from whose rice", ja:"どこで、誰の米で", zh:"在哪裡、用誰的米" }, jp:"産地",
      body:[
        { t:"p", text:{
          en:"Until the end of 2015 the word <em>nihonshu</em> had no legal boundary. Seishu was defined by method in the tax law, and anything meeting that definition could be called nihonshu wherever it was brewed and from whatever rice — including sake brewed outside Japan and shipped in, and sake brewed in Japan from imported rice. Both existed, and on a shelf neither was distinguishable from the other.",
          ja:"二〇一五年の終わりまで、日本酒という語には法の境がなかった。清酒は酒税法において製法で定められ、その定義に適うものは、どこで醸されようと、いかなる米からであろうと、日本酒と名乗ることができた——国外で醸されて運び込まれた清酒も、国内で輸入米から醸された清酒も含めて。いずれも存在し、棚の上では互いに見分けがつかなかった。",
          zh:"直到 2015 年底，「日本酒」這個詞都沒有法律上的邊界。清酒在酒稅法中是以製法定義的，任何符合該定義的東西，無論在哪裡釀造、用什麼米釀造，都可以叫做日本酒——包括在日本境外釀好再運進來的清酒，以及在日本境內以進口米釀造的清酒。兩者都存在，而在貨架上，它們彼此無從分辨。" } },
        { t:"panel", title:{ en:"GI “Nihonshu”, 25 December 2015", ja:"地理的表示「日本酒」、二〇一五年十二月二十五日", zh:"GI「日本酒」，2015 年 12 月 25 日" }, jp:"日本酒",
          body:[
            { t:"p", text:{
              en:"The National Tax Agency designated <em>Nihonshu</em> as a geographical indication with two conditions and no others: the rice must all be Japanese-grown, and the brewing must take place in Japan. A sake that fails either may still be seishu, and may still be called sake, but may not be called nihonshu. It is the only case in the world where a country has taken its own name for its own drink and turned it into a protected origin.",
              ja:"国税庁は「日本酒」を地理的表示に指定した。条件は二つ、それ以外にはない。米はすべて国内産でなければならず、醸造は日本国内で行われなければならない。いずれかを欠く酒はなお清酒でありうるし、なお sake と呼びうるが、日本酒と名乗ることはできない。国が、自らの酒に対する自らの名を取り、それを保護される原産地に変えた、世界で唯一の例である。",
              zh:"國稅廳把「日本酒」指定為地理標示，條件只有兩項、別無其他：米必須全部為日本國產，釀造必須在日本國內進行。不符合其中任一項的酒仍然可以是清酒、仍然可以叫做 sake，但不能自稱日本酒。這是全世界唯一一個國家把自己對自家酒的稱呼，轉化為受保護原產地的例子。" } },
            { t:"p", text:{
              en:"Notice what it does not do. <em>Sake</em> in a Latin alphabet is a category word, not an indication of origin, and a brewery in Oregon or Taipei may use it freely — correctly, in fact, since what they are making is sake. The GI binds the Japanese word inside Japan and in the jurisdictions that recognise it by agreement. Everything outside that runs on trademark law, which protects a brand name and not a category.",
              ja:"それが何をしないかに気をつけられたい。ラテン文字の sake は種別の語であって原産地の表示ではなく、オレゴンや台北の蔵はそれを自由に用いてよい——実のところ、正しく用いている。彼らが造っているのは sake だからである。地理的表示が縛るのは、日本国内における日本語の語と、協定によりそれを認める法域とにおいてである。その外のすべては商標法の上を走り、商標法が守るのは銘であって種別ではない。",
              zh:"請注意它「沒有」做到什麼。拉丁字母的 sake 是一個品類詞，而不是原產地標示，奧勒岡或台北的酒廠可以自由使用它——而且事實上用得正確，因為他們做的就是 sake。這個 GI 約束的是日本國內的那個日語詞，以及透過協定承認它的法域。其餘一切都跑在商標法上，而商標法保護的是品牌名，不是品類。" } }
          ] },
        { t:"p", text:{
          en:"Twenty-three sake GIs existed as of March 2026, of which <em>Nihonshu</em> is the only national one; the rest are prefectures and districts, from Hakusan in 2005 to Kyoto, Tottori and Fukuoka on 1 October 2025. Each carries a production standard — rice, water, process, and a sensory examination — and unlike a special designation, a GI is checked by a body that can refuse you. See <a href=\"gi.html\">Geographical Indications</a> for the full list and what each one requires.",
          ja:"二〇二六年三月の時点で清酒の地理的表示は二十三あり、そのうち全国を範囲とするのは「日本酒」のみである。残りは県と地区であり、二〇〇五年の白山から、二〇二五年十月一日の京都・鳥取・福岡まで及ぶ。いずれも生産の基準を持つ——米、水、工程、そして官能検査である——そして特定名称と異なり、地理的表示は、拒むことのできる機関によって確かめられる。一覧とそれぞれの要件については<a href=\"gi.html\">地理的表示</a>を見られたい。",
          zh:"截至 2026 年 3 月，清酒的地理標示共有 23 件，其中只有「日本酒」是全國範圍；其餘是縣與地區，從 2005 年的白山，到 2025 年 10 月 1 日的京都、鳥取與福岡。每一件都帶有生產基準——米、水、製程，以及官能檢查——而且與特定名稱不同，GI 是由一個「可以拒絕你」的機構來查核的。完整清單與各自的要件，請見<a href=\"gi.html\">地理標示</a>。" } }
      ] },

    { t:"section", id:"bottle",
      title:{ en:"The bottle, refilled", ja:"詰め替えられた瓶", zh:"被重新灌裝的瓶子" }, jp:"詰替",
      body:[
        { t:"p", text:{
          en:"The last method needs no brewery at all. Buy an empty bottle of something expensive, fill it with something cheap, and sell the label. It is the oldest fraud in every drinks category and sake is not exempt; reports of it cluster where a brand is scarce, expensive and exported — which describes exactly the handful of names that a first-time buyer abroad is most likely to have heard of.",
          ja:"最後の法には、蔵すら要らない。高いものの空き瓶を買い、安いものを詰め、札を売る。あらゆる酒の分野における最も古い詐りであり、日本酒も例外ではない。その報せは、銘が希少で、高価で、輸出されている場所に集まる——それはまさしく、国外で初めて買う者が名を聞いたことのある、ひと握りの銘柄の説明である。",
          zh:"最後一種方法完全不需要酒藏。買一個昂貴品項的空瓶，灌進便宜的東西，然後把酒標賣掉。這是每一個酒類品項裡最古老的詐欺，清酒也不例外；相關報導集中在那些稀有、昂貴且外銷的品牌身上——而那正好就是海外初次購買者最可能聽過的那幾個名字。" } },
        { t:"p", text:{
          en:"Inside Japan the practice is constrained in a way that surprises people: moving sake from one container into another, anywhere other than a licensed manufacturing premises or a bonded area, requires a notification to the tax office with jurisdiction over the place it will happen, filed two days beforehand. That is Article 50-2 of the liquor tax law. It exists for duty reasons rather than authenticity ones, but the effect is that a legitimate refilling operation leaves a paper trail and an illegitimate one is already in breach before anyone looks at what went into the bottle.",
          ja:"国内において、この行いは人の意表を突く仕方で縛られている。免許ある製造場または保税地域以外のいかなる場所であれ、酒を器から器へ移そうとする者は、それが行われる場所を管する税務署へ、二日前までに届け出なければならない。酒税法第五十条の二である。それは真正のためではなく税のためにあるが、結果として、正当な詰替は紙の跡を残し、不当なそれは、瓶に何が入ったかを誰かが見るより前に、すでに違反している。",
          zh:"在日本國內，這個行為受到的約束會讓人意外：在有執照的製造場或保稅區以外的任何地方，把酒從一個容器移到另一個容器，都必須在事前兩天，向該地點所轄的稅務署提出申報。這是酒稅法第 50 條之 2。它的存在是為了稅，而不是為了真偽，但效果是：正當的重新灌裝會留下紙本軌跡，而不正當的那種，在任何人檢視瓶裡裝了什麼之前，就已經違法了。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Copied labels", ja:"写された札", zh:"被複製的酒標" }, jp:"模倣ラベル",
            v:{ en:"The cheapest attack and the commonest.", ja:"最も安く、最も多い手口。", zh:"成本最低、也最常見的手法。" },
            d:{ en:"Sake labels are paper, printed in small runs, with few of the security features a spirits producer would use. The industry's answers have been serialised neck seals, tamper-evident caps and holograms on the brands most often copied, plus — for a handful of houses — a contracted-retailer system that keeps the whole chain from brewery to shop inside a known set of names.",
              ja:"日本酒の札は紙であり、少量ずつ刷られ、蒸留酒の造り手が用いるような偽造防止の仕掛けはほとんど持たない。業界の答は、最も多く写される銘への連番の首掛け、開封の跡の残る栓、ホログラムであり、加えて——ひと握りの蔵にとっては——蔵から店までの鎖の全体を、知れた名の集まりのうちに保つ特約店の仕組みである。",
              zh:"清酒的酒標是紙，小批量印刷，幾乎沒有烈酒生產者會用的那些防偽設計。業界的對策是：在最常被複製的品牌上使用流水編號的頸封、開封留痕的瓶蓋與雷射標籤；再加上——對少數幾家酒藏而言——一套特約店制度，把從酒藏到店家的整條鏈留在一組已知的名字之內。" } },
          { k:{ en:"Trademark squatting", ja:"冒認商標", zh:"搶註商標" }, jp:"冒認出願",
            v:{ en:"Losing your own name in someone else's market.", ja:"他人の市場で自らの名を失うこと。", zh:"在別人的市場裡失去自己的名字。" },
            d:{ en:"Trademarks are registered country by country, and in most of them the first to file wins rather than the first to use. A brewery that exports before registering can find its own brand already owned in the destination market, sometimes by a former distributor. It is not counterfeiting in the usual sense — the squatter may hold a perfectly valid registration — which is exactly what makes it expensive to undo.",
              ja:"商標は国ごとに登録され、その多くにおいては、先に用いた者ではなく先に出した者が勝つ。登録より先に輸出した蔵は、自らの銘が向かう先の市場ですでに他人のものになっているのを見いだすことがある。時にはかつての取引先によって。通常の意味での偽造ではない——出した者は全く有効な登録を持ちうる——そしてそれこそが、覆すのに高くつく理由である。",
              zh:"商標是逐國登記的，而在大多數國家，勝出的是先申請者而非先使用者。一家在登記之前就先出口的酒藏，可能會發現自己的品牌在目的地市場早已屬於別人，有時還是從前的經銷商。這在通常意義上並不是仿冒——搶註者可能握有完全有效的註冊——而這正是它難以推翻、代價高昂的原因。" } }
        ] },
        { t:"tiny", text:{
          en:"There is also a laboratory answer. The trace-element and isotope signature of the water a sake was brewed with, and of the rice, is characteristic enough that an analytical profile can distinguish a bottle's claimed origin from its actual one. It is slow and expensive and is used for disputes rather than for shelves, but it means that, for the first time, the question “was this brewed where it says” has an answer that does not depend on paperwork.",
          ja:"実験室の答もある。ある酒が醸された水の、そして米の、微量元素と同位体の徴は、分析による輪郭が、瓶の主張する産地と実際のそれとを分かちうるほどに固有である。それは遅く、高くつき、棚のためではなく争いのために用いられるが、しかしそれは、「これは札の言う場所で醸されたか」という問いが、初めて、書類に依らぬ答を持つことを意味する。",
          zh:"還有一個實驗室的答案。一支酒所用的水、以及米的微量元素與同位素特徵，其獨特程度足以讓分析輪廓區分出一瓶酒「宣稱的產地」與「實際的產地」。這種方法慢而昂貴，用於爭議而非貨架，但它意味著：「這支酒真的在標示的地方釀造嗎」這個問題，第一次有了不依賴文件的答案。" } }
      ] },

    { t:"section", id:"check",
      title:{ en:"What you can actually check", ja:"実際に確かめられること", zh:"你真正能查證的" }, jp:"確認",
      body:[
        { t:"p", text:{
          en:"The practical conclusion of all of the above is uncomfortable and worth stating plainly: on a sake label, the items that are tightly constrained by law describe inputs, and the items that most drinkers read as signals of quality are constrained by nothing at all.",
          ja:"以上のすべての実際上の結論は居心地が悪く、率直に述べるに値する。日本酒の札において、法に固く縛られた事項は原料と工程を述べ、そしてほとんどの飲み手が質の徴として読む事項は、何にも縛られていない。",
          zh:"以上一切的實務結論並不舒服，但值得直說：在清酒的酒標上，被法律緊緊約束的項目描述的是投入，而多數飲者當成品質訊號來讀的那些項目，什麼約束都沒有。" } },
        { t:"table",
          caption:{ en:"Label items by how hard they are to falsify", ja:"偽りにくさで並べた札の事項", zh:"依造假難度排列的酒標項目" },
          cols:[{en:"On the label",ja:"札の上の事項",zh:"酒標上的項目"},{en:"Bound by",ja:"縛るもの",zh:"約束來源"},{en:"What it is worth",ja:"どれほど頼れるか",zh:"它的可靠程度"}],
          jpCols:[0],
          rows:[
            ["清酒 ・ 日本酒",
             {en:"Tax law; GI since 2015",ja:"酒税法、二〇一五年以降は地理的表示",zh:"酒稅法；2015 年起加上 GI"},
             {en:"Hard. Seishu is a statutory recipe and nihonshu additionally requires Japanese rice and Japanese brewing.",ja:"固い。清酒は法定の処方であり、日本酒はさらに国内産米と国内での醸造を要する。",zh:"很硬。清酒是法定配方，而日本酒還額外要求日本國產米與在日本釀造。"}],
            ["特定名称",
             {en:"Labelling standard, 1989",ja:"一九八九年の表示基準",zh:"1989 年的標示基準"},
             {en:"Hard. Method and measurement, verifiable from the brewery's own production records.",ja:"固い。製法と計測であり、蔵の製造記録から確かめうる。",zh:"很硬。是製法與量測，可由酒藏自身的生產紀錄查證。"}],
            ["精米歩合",
             {en:"Mandatory when a designation is claimed",ja:"特定名称を名乗るときは必記",zh:"宣稱特定名稱時為必標"},
             {en:"Hard, but only meaningful alongside the designation. A futsūshu need not state it at all.",ja:"固いが、特定名称と並べてのみ意味を持つ。普通酒は記す必要がない。",zh:"很硬，但只有與特定名稱並置時才有意義。普通酒完全不必標示。"}],
            ["原材料名",
             {en:"Mandatory",ja:"必記",zh:"必標"},
             {en:"Hard. The presence or absence of 醸造アルコール is the single most informative line on most bottles.",ja:"固い。醸造アルコールの有無は、ほとんどの瓶において最も多くを語る一行である。",zh:"很硬。「釀造酒精」的有無，是多數瓶身上資訊量最大的一行。"}],
            ["アルコール分",
             {en:"Mandatory, as a one-degree band",ja:"必記、一度刻みの幅で",zh:"必標，以一度為區間"},
             {en:"Hard, but coarse by design: “15度以上16度未満” is a range, not a measurement.",ja:"固いが、設計上粗い。「十五度以上十六度未満」は幅であって計測ではない。",zh:"很硬，但設計上就是粗的：「十五度以上、未滿十六度」是一個區間，不是一個量測值。"}],
            ["製造者 ・ 製造場",
             {en:"Mandatory; premises may be a code",ja:"必記、製造場は記号でもよい",zh:"必標；製造場可以是代號"},
             {en:"Medium. It names who bottled it, not necessarily who fermented it, and the address may be a registered symbol.",ja:"中ほど。詰めた者を名指すが、醗酵させた者とは限らず、所在地は登録された記号でありうる。",zh:"中等。它指出的是誰裝的瓶，不一定是誰發酵的；而且地址可以是一組登記代號。"}],
            ["製造年月",
             {en:"Optional since 1 January 2023",ja:"二〇二三年一月一日より任意",zh:"2023 年 1 月 1 日起為任意標示"},
             {en:"Weak, and now often absent. It never meant the brewing date — it meant the bottling date.",ja:"弱く、いまはしばしば無い。醸した日を意味したことは一度もない。詰めた日である。",zh:"弱，而且現在常常不見。它從來就不是釀造日期——它是裝瓶日期。"}],
            ["日本酒度 ・ 酸度",
             {en:"Voluntary",ja:"任意",zh:"任意"},
             {en:"Weak as a guarantee, useful as information. No method is prescribed and no one audits the figure.",ja:"保証としては弱く、情報としては有用。方法は定められておらず、その数を誰も監査しない。",zh:"作為保證很弱，作為資訊很有用。並未規定測定方法，也沒有人稽核那個數字。"}],
            ["幻の ・ 限定 ・ 大吟醸仕込",
             {en:"Nothing",ja:"何もない",zh:"沒有"},
             {en:"None. Marketing language, with the partial exception of terms the standard specifically forbids.",ja:"無い。売りの言葉である。ただし表示基準が名指しで禁ずる語だけは別である。",zh:"沒有。這是行銷語言；唯一的部分例外，是標示基準指名禁止的那些用語。"}]
          ] },
        { t:"p", text:{
          en:"That is not a counsel of despair. It is a reading instruction. Everything in the top half of the table is worth trusting and is in a fixed place on every bottle; everything in the bottom half is worth reading and worth discounting. And the strongest single guarantee available to a buyer is not on the label at all — it is the shop. A retailer who stores sake cold, turns stock quickly and buys from breweries directly is warranting the part of a bottle's history that no statute reaches.",
          ja:"それは絶望の勧めではない。読み方の指示である。表の上半にあるものはいずれも信ずるに値し、いずれの瓶においても定まった場所にある。下半にあるものはいずれも読むに値し、そして割り引くに値する。そして買い手に与えられる最も強い保証は、そもそも札の上にはない——店である。冷やして蔵し、在庫を早く回し、蔵から直に仕入れる小売は、いかなる法も届かぬ一本の来歴の部分を保証している。",
          zh:"這不是勸人絕望，而是一份閱讀指示。表格上半部的每一項都值得信任，而且在每一瓶酒上都位於固定的位置；下半部的每一項都值得讀，也值得打折。而一位買家能取得的最強保證，根本不在酒標上——而是店。一家把清酒冷藏、庫存周轉快、直接向酒藏進貨的零售商，正在為一瓶酒的來歷中那個任何法規都觸及不到的部分做擔保。" } }
      ] },

    { t:"related", items:[
      { href:"standards.html", why:{ en:"The same law read forwards, as rules rather than as scars.", ja:"同じ法を前から、傷痕ではなく規として読む。", zh:"同一套法律從正面讀，當成規則而不是疤。" } },
      { href:"label.html", why:{ en:"Where each of those items physically sits on a bottle.", ja:"それらの事項が瓶のどこに載っているか。", zh:"那些項目實際上位在瓶身的哪裡。" } },
      { href:"classification.html", why:{ en:"What the eight special designations require, exactly.", ja:"八つの特定名称が正確に何を要するか。", zh:"八種特定名稱究竟各自要求什麼。" } },
      { href:"history.html", why:{ en:"The same century told as brewing rather than as fraud.", ja:"同じ世紀を、偽りではなく造りとして語ったもの。", zh:"同一個世紀，用釀造而不是詐欺來講。" } },
      { href:"industry.html", why:{ en:"The trade structure that made bulk selling rational.", ja:"桶売りを理に適わせた商いの構え。", zh:"讓整槽販售變得合理的產業結構。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- aging */
SAKE.pages["aging"] = {
  kicker: { en: "Understanding · 09", ja: "理解 · 09", zh: "理解 · 09" },
  title:  { en: "Aged Sake", ja: "熟成酒", zh: "熟成酒" },
  jp: "古酒・長期熟成酒",
  lede: {
    en: "Almost everything written about sake tells you to drink it young, and for the great majority of bottles that is right. But sake was aged routinely before the Meiji era, the practice was killed by a tax rule rather than by taste, and a determined minority of breweries have spent fifty years bringing it back. Aged sake — <em>koshu</em> — turns amber, loses its fruit, and develops something closer to sherry, dried fruit, soy and mushroom. It is a genuinely different drink, it goes with food that fresh sake cannot touch, and it is the least understood corner of the category.",
    ja: "日本酒について書かれたもののほとんどは、若いうちに飲めと説く。大多数の瓶についてはそれが正しい。しかし明治以前、酒は当たり前に寝かされていた。その慣習を殺したのは味覚ではなく税の規定であり、以来五十年をかけて、少数の意志ある蔵がそれを取り戻してきた。熟成した酒——古酒——は琥珀に色づき、果実の香を失い、シェリー、乾果、醤油、茸に近いものを育てる。まぎれもなく別の飲み物であり、若い酒では手の届かない料理に寄り添い、そしてこの分野で最も理解されていない一角である。",
    zh: "關於清酒的文字幾乎都告訴你要趁年輕喝，而對絕大多數酒瓶而言這是對的。但在明治之前，清酒本是常態性地陳放；扼殺這項習慣的是稅制規定，而非味覺。此後五十年間，一小群意志堅定的酒藏將它帶了回來。熟成之酒——古酒——轉為琥珀色，失去果香，發展出近似雪莉酒、乾果、醬油與菇蕈的風味。它是真正不同的一種飲品，能搭配新鮮清酒無從企及的料理，也是這個類別中最不為人理解的一隅。"
  },
  body: [

    { t:"section", id:"history",
      title:{ en:"Why aged sake almost disappeared", ja:"古酒がほぼ消えた理由", zh:"古酒何以幾乎消失" }, jp:"税と慣習",
      body:[
        { t:"p", text:{
          en:"Aged sake is well documented from the Kamakura period onward. Temple brewing records, Edo merchant ledgers and the <em>Honchō Shokkan</em> of 1697 all describe sake held for three years or more and sold at a multiple of the fresh price. Then in 1899 the Meiji government moved the alcohol tax from the point of sale to the point of production — the <em>zōseki-zei</em>. From that day a brewery paid tax on sake the moment it was made, whether it sold it or not.",
          ja:"古酒は鎌倉期以降、よく記録されている。寺院の造酒の記録、江戸の商家の帳簿、そして一六九七年の『本朝食鑑』は、いずれも三年以上寝かせ、新酒の何倍もの値で売られた酒を記している。ところが一八九九年、明治政府は酒税を販売時課税から製造時課税——造石税——へ移した。その日から蔵は、売れようが売れまいが、造った瞬間に税を払うことになった。",
          zh:"古酒自鎌倉時代以降便有充分記載。寺院的釀酒紀錄、江戶商家的帳簿，以及 1697 年的《本朝食鑑》，都描述了陳放三年以上、以新酒數倍價格出售的酒。然而 1899 年，明治政府將酒稅從銷售時課徵改為生產時課徵——即造石稅。從那天起，酒藏無論賣不賣得掉，都得在釀成的當下繳稅。" } },
        { t:"p", text:{
          en:"The consequence was immediate and total. Holding stock for three years meant paying tax three years before revenue, in an industry with thin margins and no cheap credit. Ageing stopped almost overnight, and within two generations the whole vocabulary for it had been forgotten. The production tax was finally abolished in 1944, but by then a national taste for fresh, clear, young sake was fixed, and the wartime and postwar era had other problems.",
          ja:"帰結は即座であり、徹底していた。三年の在庫を抱えることは、収入より三年早く税を払うことを意味する。利幅が薄く安価な信用もない業界においてはなおさらである。熟成は一夜にして止まり、二世代のうちにその語彙のすべてが忘れられた。造石税が廃止されるのは一九四四年だが、その頃には新しく澄んだ若い酒を好む国民的な嗜好が固まっており、戦中戦後には別の問題があった。",
          zh:"後果立即而徹底。囤放三年庫存，意味著要比收入早三年繳稅；在一個利潤微薄且缺乏低價信貸的產業中更是如此。陳放幾乎在一夜之間停止，兩個世代之內，相關的整套語彙都已被遺忘。造石稅終於在 1944 年廢止，但那時偏好清新、澄澈、年輕之酒的全國性口味已然固定，而戰時與戰後另有其他難題。" } },
        { t:"timeline", items:[
          { year:"1697", era:{en:"Genroku 10",ja:"元禄10年",zh:"元祿十年"},
            title:{en:"Aged sake in the record",ja:"記録のなかの古酒",zh:"文獻中的古酒"}, jp:"本朝食鑑",
            text:{en:"The <em>Honchō Shokkan</em>, an encyclopaedia of Japanese foods, describes three-year sake as superior and notes the prices it commands.",ja:"日本の食物を集めた『本朝食鑑』が、三年の酒を上等とし、その値についても記している。",zh:"日本食物百科《本朝食鑑》記載三年之酒為上品，並提及其售價。"} },
          { year:"1899", era:{en:"Meiji 32",ja:"明治32年",zh:"明治三十二年"},
            title:{en:"The production tax",ja:"造石税",zh:"造石稅"}, jp:"造石税",
            text:{en:"Tax charged on sake at the moment of manufacture rather than sale. Ageing becomes financially impossible for almost every brewery in Japan.",ja:"販売時ではなく製造時に課税されるようになる。日本のほぼすべての蔵にとって、熟成は経済的に不可能となる。",zh:"改於製造時而非銷售時課稅。對日本幾乎所有酒藏而言，陳放在財務上成為不可能。"} },
          { year:"1944", era:{en:"Shōwa 19",ja:"昭和19年",zh:"昭和十九年"},
            title:{en:"Repeal, too late",ja:"廃止、しかし遅すぎた",zh:"廢止，卻已太遲"}, jp:"蔵出税へ",
            text:{en:"Tax moves to the point of shipment. The legal obstacle is gone, but the knowledge and the market are not there to use it.",ja:"課税は蔵出しの時点へ移る。法的な障害は消えたが、それを使うための知識も市場も残っていなかった。",zh:"課稅改至出貨時點。法律障礙已除，但可資運用的知識與市場都已不在。"} },
          { year:"1985", era:{en:"Shōwa 60",ja:"昭和60年",zh:"昭和六十年"},
            title:{en:"The Long-term Aged Sake Research Society",ja:"長期熟成酒研究会",zh:"長期熟成酒研究會"}, jp:"長熟研",
            text:{en:"A group of breweries forms to research, define and promote aged sake. It sets the working definition still used: sake matured for three years or more at the brewery, with no added sugar.",ja:"熟成酒を研究し、定義し、広めるために蔵元が集まる。いまも使われる実務上の定義——糖類を加えず、蔵で三年以上熟成させた清酒——を定めた。",zh:"一群酒藏共同成立，以研究、定義並推廣熟成酒。它訂下至今仍在使用的實務定義：不添加糖類、於酒藏中熟成三年以上的清酒。"} }
        ] }
      ]
    },

    { t:"section", id:"chemistry",
      title:{ en:"What happens over the years", ja:"歳月のなかで起きること", zh:"歲月中發生的事" }, jp:"熟成の化学",
      body:[
        { t:"figure",
          caption:{
            en:"The same sake, kept three ways, drawn as the colour it would be at each point. Colour is the one part of ageing you can see without opening the bottle, and it tracks the Maillard reaction closely enough to be useful: the warm row reaches in three years a shade the cold row will not reach in twenty. The swatches are an illustration of the published descriptions, not a measurement — real bottles vary with amino content, with how much sugar was left, and with how well the cap was sealed.",
            ja:"同じ酒を三通りに置いたとき、それぞれの時点で帯びているであろう色を描いたもの。色は、瓶を開けずに見ることのできる熟成の唯一の部分であり、そしてメイラード反応をよく追っているから役に立つ。高温の列が三年で届く色に、低温の列は二十年かけても届かない。色見本は公表された記述を絵にしたものであって、測定ではない。実際の瓶は、アミノ酸の量によって、残された糖の量によって、そして栓の締まり具合によって異なる。",
            zh:"同一支酒以三種方式保存，畫出它在各個時點應有的顏色。色澤是不開瓶就能看見的唯一一部分熟成，而它與梅納反應的關聯緊密到足以派上用場：高溫那一列三年就抵達的色調，低溫那一列二十年也到不了。色塊是把公開記述畫成圖，而非實測——真實的酒瓶會因胺基酸含量、殘糖多寡與瓶蓋密封程度而不同。" },
          svg: function (lang, L) {
            var W = 760, H = 344, X0 = 204, CW = 78, GAP = 8, Y0 = 54, RH = 78, SH = 54;
            var years = ["0", "1", "3", "5", "10", "20"];
            var regimes = [
              { jp:"氷温熟成", t:"0–5 °C",
                n:{ en:"cold store", ja:"低温貯蔵", zh:"低溫貯藏" },
                e:{ en:"pale at twenty years", ja:"二十年でなお淡い", zh:"二十年後仍淺" },
                c:["#F7F5EC","#F5F2E6","#F1EDDC","#EDE8D2","#E7E0C4","#DFD5B2"] },
              { jp:"中間熟成", t:"10–15 °C",
                n:{ en:"cellar", ja:"常温貯蔵", zh:"常溫貯藏" },
                e:{ en:"the classic middle path", ja:"古典的な中道", zh:"經典的中間路線" },
                c:["#F7F5EC","#F1EBD8","#E7DCBC","#DACB9E","#C9B27C","#B0935C"] },
              { jp:"濃色熟成", t:"20–35 °C",
                n:{ en:"warm store", ja:"高温貯蔵", zh:"高溫貯藏" },
                e:{ en:"a technique, not neglect", ja:"放置ではなく技術", zh:"是技術，不是放任" },
                c:["#F7F5EC","#E3D3AC","#CBAE79","#B08A55","#8E6A3C","#6B4B2A"] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j, x, y;
            for (j = 0; j < years.length; j++) {
              x = X0 + j * (CW + GAP);
              s += '<text x="' + (x + CW / 2) + '" y="' + (Y0 - 12) + '" text-anchor="middle" font-size="11" fill="#55504A">' + years[j] + '</text>';
            }
            s += '<text x="' + (X0 + 6 * (CW + GAP) - GAP + 10) + '" y="' + (Y0 - 12) + '" font-size="9.5" fill="#ADA79E">' +
                 (lang === "ja" ? "年" : lang === "zh" ? "年" : "years") + '</text>';
            for (i = 0; i < regimes.length; i++) {
              y = Y0 + i * RH;
              var r = regimes[i];
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 16) + '" text-anchor="end" font-size="12.5" fill="#201E1B">' + r.jp + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 30) + '" text-anchor="end" font-size="10" fill="#8B857C">' + L(r.n) + ' · ' + r.t + '</text>';
              s += '<text x="' + (X0 - 16) + '" y="' + (y + 44) + '" text-anchor="end" font-size="9" fill="#ADA79E">' + L(r.e) + '</text>';
              for (j = 0; j < years.length; j++) {
                x = X0 + j * (CW + GAP);
                s += '<rect x="' + x + '" y="' + y + '" width="' + CW + '" height="' + SH + '" fill="' + r.c[j] + '" stroke="#CDC6B9"/>';
              }
            }
            /* the colour vocabulary */
            var voc = [
              { c:"#F1EDDC", jp:"麦藁", n:{ en:"straw", ja:"むぎわら", zh:"麥稈色" } },
              { c:"#DACB9E", jp:"黄金", n:{ en:"gold", ja:"こがね", zh:"金黃" } },
              { c:"#B08A55", jp:"琥珀", n:{ en:"amber", ja:"こはく", zh:"琥珀" } },
              { c:"#6B4B2A", jp:"紅褐", n:{ en:"mahogany", ja:"こうかつ", zh:"紅褐" } }
            ];
            var VY = Y0 + 3 * RH + 12;
            s += '<text x="30" y="' + VY + '" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "色の言葉" : lang === "zh" ? "顏色的語彙" : "THE WORDS FOR IT") + '</text>';
            for (i = 0; i < voc.length; i++) {
              x = 150 + i * 150;
              s += '<rect x="' + x + '" y="' + (VY - 11) + '" width="14" height="14" fill="' + voc[i].c + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (x + 21) + '" y="' + VY + '" font-size="11" fill="#201E1B">' + voc[i].jp + '</text>';
              s += '<text x="' + (x + 21 + (voc[i].jp.length * 11) + 6) + '" y="' + VY + '" font-size="9" fill="#8B857C">' + L(voc[i].n) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "熟成のはやさを決めるのは温度だけではない。アミノ酸に富む純米は清らかな大吟醸より遠くまで行き、そして戻ってはこない。"
                  : lang === "zh" ? "決定熟成速度的不只是溫度。富含胺基酸的純米會比潔淨的大吟釀走得更遠——而且回不來了。"
                  : "Temperature is not the only lever. An amino-rich junmai travels further than a clean daiginjō, and it does not travel back.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"Ageing sake is not oxidation in the wine sense — a sealed bottle of sake has very little oxygen in it. The dominant reaction is the Maillard reaction between amino acids and residual sugars, which is why sake ages so much faster and so much more dramatically than white wine, and why an amino-rich junmai ages further than a clean daiginjō.",
          ja:"日本酒の熟成は、ワインの意味での酸化ではない。密栓された瓶のなかに酸素はごくわずかしかない。主たる反応は、アミノ酸と残存する糖とのあいだのメイラード反応である。白ワインよりはるかに速く、はるかに劇的に変化する理由も、アミノ酸に富む純米が清らかな大吟醸より遠くまで熟成する理由も、ここにある。",
          zh:"清酒的熟成並非葡萄酒意義上的氧化——密封的酒瓶中含氧極少。主導反應是胺基酸與殘糖之間的梅納反應；這正是清酒比白酒變化更快、更劇烈的原因，也是富含胺基酸的純米比潔淨的大吟釀能走得更遠的原因。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"What is lost",ja:"失われるもの",zh:"失去的"},
            body:[{ t:"ul", plain:true, items:[
              { en:"Ethyl caproate and isoamyl acetate — the fruit — drop away first, usually within a year.",ja:"カプロン酸エチルと酢酸イソアミル——果実香——が真っ先に、たいてい一年のうちに落ちる。",zh:"己酸乙酯與乙酸異戊酯——果香——最先流失，通常一年之內。" },
              { en:"The sharp, slightly green edge of a young sake softens and then disappears.",ja:"若い酒の鋭くわずかに青い角が、丸くなり、やがて消える。",zh:"年輕清酒銳利而略帶青澀的稜角逐漸圓潤，終至消失。" },
              { en:"Clarity of colour: sake goes straw, then gold, then amber, then mahogany.",ja:"色の澄明さ。麦藁色から黄金へ、琥珀へ、そして紅褐へ。",zh:"色澤的澄清度：由麥稈色轉金黃、轉琥珀、終至紅褐。" }
            ] }] },
          { h:{en:"What is gained",ja:"得られるもの",zh:"獲得的"},
            body:[{ t:"ul", plain:true, items:[
              { en:"Maillard products: caramel, dried fig, roasted nut, soy, dried mushroom.",ja:"メイラード反応の産物——カラメル、乾いた無花果、焙じた木の実、醤油、乾し椎茸。",zh:"梅納反應的產物：焦糖、無花果乾、烘堅果、醬油、乾香菇。" },
              { en:"Sotolon, the compound behind the sweet-savoury note in sherry and aged sake alike.",ja:"ソトロン——シェリーにも熟成酒にも共通する、甘く旨い香りの正体。",zh:"葫蘆巴內酯（sotolon）：雪莉酒與熟成酒中那股甘鹹氣息的成因。" },
              { en:"Weight and viscosity in the mouth; a long, savoury finish.",ja:"口中の重みと粘性、そして長く旨みの残る後口。",zh:"口中的重量與黏稠感；悠長而帶旨味的收口。" },
              { en:"A capacity to stand up to strong food that fresh sake simply lacks.",ja:"若い酒には端的に欠けている、強い料理に拮抗する力。",zh:"能與濃味料理抗衡的力量——這是新鮮清酒根本不具備的。" }
            ] }] }
        ] },
        { t:"table",
          caption:{en:"Temperature decides everything",ja:"温度がすべてを決める",zh:"溫度決定一切"},
          cols:[{en:"Regime",ja:"貯蔵",zh:"貯藏"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Result",ja:"結果",zh:"結果"}],
          jpCols:[1],
          rows:[
            [{en:"Cold, 0–5°C",ja:"低温 0〜5℃",zh:"低溫 0–5°C"},"氷温熟成",
             {en:"Very slow. Colour stays pale, fruit fades gently, texture rounds. A daiginjō held ten years this way can taste like a very fine, very quiet young sake with extra depth. This is <em>tanshoku jukushu</em> — pale aged sake.",ja:"きわめて緩やか。色は淡いままで、果実香は穏やかに褪せ、質感は丸くなる。この方法で十年置いた大吟醸は、奥行きを加えたきわめて精緻で静かな若い酒のように感じられる。これが淡色熟成酒である。",zh:"極為緩慢。色澤維持淺淡，果香溫和消退，質地趨圓。以此法陳放十年的大吟釀，嚐來像一款添了深度、極為精緻而安靜的年輕酒。此即「淡色熟成酒」。"}],
            [{en:"Cellar, 10–15°C",ja:"常温 10〜15℃",zh:"常溫 10–15°C"},"中間熟成",
             {en:"The classic middle path: gold colour, dried fruit and nut, still recognisably sake. Most three- to ten-year koshu on the market.",ja:"古典的な中道。黄金の色、乾果と木の実、なお日本酒と分かる姿。市場にある三年から十年の古酒の大半がこれである。",zh:"經典的中間路線：金黃色澤、乾果與堅果，仍清楚可辨為清酒。市面上三至十年的古酒多屬此類。"}],
            [{en:"Warm, 20–35°C",ja:"高温 20〜35℃",zh:"高溫 20–35°C"},"濃色熟成",
             {en:"Deliberately accelerated. Deep amber to brown in a few years, heavy soy-and-caramel character. This is <em>nōshoku jukushu</em>, and it is a technique, not neglect — the temperature is held and monitored.",ja:"意図的に加速させる。数年で深い琥珀から褐色に至り、醤油とカラメルの重い性格を帯びる。これが濃色熟成酒であり、放置ではなく技術である——温度は保たれ、監視されている。",zh:"刻意加速。數年內即由深琥珀轉為褐色，帶有濃重的醬油與焦糖性格。此即「濃色熟成酒」，是技術而非放任——溫度受到維持與監控。"}]
          ] }
      ]
    },

    { t:"section", id:"buying",
      title:{ en:"Buying, keeping and serving it", ja:"買い方・置き方・供し方", zh:"選購、保存與供飲" }, jp:"実務",
      body:[
        { t:"defs", items:[
          { term:{en:"Koshu",ja:"古酒",zh:"古酒"}, jp:"古酒", romaji:"koshu",
            def:{en:"Loosely, any sake deliberately aged. The Long-term Aged Sake Research Society's working definition is three years or more of maturation at the brewery with no added sugar. There is no legal definition, so the term is used loosely on labels.",
              ja:"広く、意図して熟成させた酒を指す。長期熟成酒研究会の実務上の定義は、糖類を加えず蔵で三年以上熟成させたもの。法的な定義はないため、酒標では緩やかに使われる。",
              zh:"廣義指任何刻意熟成的酒。長期熟成酒研究會的實務定義為：不添加糖類、於酒藏熟成三年以上。因無法定定義，酒標上的用法相當寬鬆。"} },
          { term:{en:"Hi-ire vs nama",ja:"火入れと生",zh:"火入與生"}, jp:"貯蔵前提",
            def:{en:"Only pasteurised sake ages predictably. An unpasteurised sake left for years does not become koshu; it becomes a different and usually unpleasant thing, because live enzymes and surviving bacteria keep working.",
              ja:"予測どおりに熟成するのは火入れした酒だけである。生酒を数年置いても古酒にはならない。酵素と生き残った菌が働き続けるため、別の、たいていは好ましくないものになる。",
              zh:"只有經火入的酒才會可預期地熟成。生酒放置數年不會變成古酒；由於酵素與存活的菌持續作用，它會變成另一種、且通常不討喜的東西。"} },
          { term:{en:"Taru-jukusei",ja:"樽熟成",zh:"樽熟成"}, jp:"樽熟成",
            def:{en:"Ageing in cedar casks, as all sake once was. Cedar gives its aroma up in days rather than years, so casks are used as a seasoning stage — often a few days to a few weeks — rather than as a maturation vessel. A handful of breweries now also experiment with used whisky and sherry casks, which is legally sake but stylistically something else.",
              ja:"かつてすべての酒がそうであったように、杉の樽で寝かせること。杉は年ではなく日の単位で香りを与えるため、樽は熟成の器というより味付けの工程——数日から数週間——として使われる。使用済みのウイスキー樽やシェリー樽を試す蔵も少数あり、法的には清酒だが、様式としては別の何かである。",
              zh:"如同從前所有清酒那樣，在杉木樽中陳放。杉木賦香以日計而非以年計，因此木樽被當作調味工序（多為數日至數週）而非熟成容器。少數酒藏也開始試用威士忌與雪莉舊桶，其產品法律上仍是清酒，風格上卻已是另一回事。"} }
        ] },
        { t:"panel", title:{en:"Serving aged sake",ja:"熟成酒の供し方",zh:"熟成酒的供飲"}, tint:"amber",
          body:[
            { t:"ul", items:[
              { en:"<strong>Temperature.</strong> Room temperature or gently warmed, 18–40°C. Cold shuts an aged sake down completely; heat opens the Maillard aromas the way it does with a fine oloroso.",ja:"<strong>温度。</strong>常温か、穏やかな燗で18〜40度。冷やすと熟成酒は完全に閉じる。熱は、上等なオロロソにそうするように、メイラードの香りを開かせる。",zh:"<strong>溫度。</strong>常溫或溫和加熱，18–40°C。冰涼會讓熟成酒完全封閉；熱度則如同對待優質 oloroso 那樣，打開梅納香氣。" },
              { en:"<strong>Glass.</strong> A small tulip or a brandy balloon. The aromas are the point, and a flat sakazuki throws them away.",ja:"<strong>器。</strong>小ぶりのチューリップ型か、ブランデーグラス。要は香りであり、平たい盃はそれを捨ててしまう。",zh:"<strong>酒器。</strong>小型鬱金香杯或白蘭地杯。香氣才是重點，而平淺的酒盞會把它丟掉。" },
              { en:"<strong>Quantity.</strong> Thirty millilitres is a serving. These are concentrated, and an open bottle keeps for months rather than days.",ja:"<strong>量。</strong>三十ミリリットルで一杯である。凝縮しており、開けた瓶は日ではなく月の単位でもつ。",zh:"<strong>份量。</strong>三十毫升即為一份。它們相當濃縮，開瓶後可存放數月而非數日。" },
              { en:"<strong>Food.</strong> Aged cheese, dried persimmon, char siu, foie gras, mole, Chinese red-braised dishes, chocolate. Everything fresh sake cannot carry.",ja:"<strong>料理。</strong>熟成チーズ、干柿、叉焼、フォアグラ、モレ、中華の紅焼、そしてチョコレート。若い酒が支えきれないもののすべて。",zh:"<strong>食物。</strong>熟成起司、柿餅、叉燒、鵝肝、墨西哥 mole 醬、中式紅燒菜、巧克力。全都是新鮮清酒撐不住的東西。" }
            ] }
          ] },
        { t:"note", label:{en:"Ageing at home",ja:"家で寝かせる",zh:"在家陳放"}, text:{
          en:"It is worth trying, and the entry cost is one extra bottle. Buy two of a pasteurised junmai or junmai ginjō with visible acidity, drink one now, put the other upright in a dark cupboard at a steady temperature — a wine fridge at 12°C is ideal, a cool north-facing cupboard is acceptable, a kitchen above the oven is not — and open it in three years. Do not try this with a nama, and do not try it with a fragile daiginjō bought for its aroma.",
          ja:"試してみる価値はあり、入り口の費用は瓶一本の追加にすぎない。酸のはっきりした火入れの純米か純米吟醸を二本買い、一本をいま飲み、もう一本を暗く温度の一定した戸棚に立てて置く——摂氏十二度のワインセラーが理想、北向きの涼しい戸棚なら許容、オーブンの上の棚は不可である——そして三年後に開ける。生酒でこれを試してはいけないし、香りを目当てに買った繊細な大吟醸でも試さないこと。",
          zh:"值得一試，入門成本不過多買一瓶。挑一款酸度明顯、經火入的純米或純米吟釀買兩瓶，一瓶現在喝掉，另一瓶直立放在陰暗、溫度穩定的櫃中——12°C 的酒櫃最理想，朝北的陰涼櫥櫃可以接受，烤箱上方的櫥櫃則不行——三年後開瓶。不要拿生酒做這件事，也不要拿為香氣而買的纖細大吟釀來試。" } }
      ]
    },

    { t:"section", id:"related",
      title:{ en:"Neighbouring styles", ja:"隣接する様式", zh:"鄰近的類型" }, jp:"近縁",
      body:[
        { t:"defs", items:[
          { term:{en:"Kijōshu",ja:"貴醸酒",zh:"貴釀酒"}, jp:"貴醸酒", romaji:"kijōshu",
            def:{en:"Sake brewed with sake in place of some of the water at the final addition. Developed at the National Research Institute of Brewing in 1973 as a modern reconstruction of a Heian-period court method, it is intensely sweet and viscous, and it ages superbly — a ten-year kijōshu is one of the great dessert wines of the world by any reasonable standard.",
              ja:"仕込みの最後に、水の一部に代えて酒を用いて醸す酒。一九七三年に国税庁醸造試験所で、平安期の宮廷の製法を現代に再構成して開発された。強く甘く粘性があり、熟成に見事に応える。十年の貴醸酒は、どんな妥当な尺度で見ても世界の偉大なデザートワインの一つである。",
              zh:"在最後一段仕込時，以酒代替部分水釀成的酒。1973 年於國稅廳釀造試驗所開發，是對平安時期宮廷製法的現代重構。極甜且黏稠，並極耐熟成——一款十年的貴釀酒，依任何合理標準衡量，都堪稱世界偉大的甜酒之一。"} },
          { term:{en:"Hiyaoroshi",ja:"ひやおろし",zh:"冷卸"}, jp:"冷卸", romaji:"hiyaoroshi",
            def:{en:"Sake pasteurised once in spring, held over the summer, and shipped in autumn without a second pasteurisation. Six months of maturation, not three years — but the same principle at a scale most drinkers already accept.",
              ja:"春に一度だけ火入れし、夏を越させ、秋に二度目の火入れをせずに出荷する酒。三年ではなく半年の熟成だが、原理は同じであり、多くの飲み手がすでに受け入れている尺度である。",
              zh:"春天只火入一次，過完夏天後於秋季不再火入即出貨的酒。熟成期是半年而非三年，但原理相同，且多數飲者早已接受這個尺度。"} },
          { term:{en:"Shinshu vs koshu labelling",ja:"新酒と古酒の表示",zh:"新酒與古酒的標示"}, jp:"表示",
            def:{en:"A brewing year (BY) runs from 1 July to 30 June, and a bottle labelled 令和6BY was made in that year's season. Sake sold in the same BY is <em>shinshu</em>; sake carried over one year is <em>koshu</em> in the tax sense — which is a much weaker claim than the aged sake this page is about. Read the two uses of the word carefully.",
              ja:"酒造年度は七月一日から六月三十日までで、「令和6BY」と記された瓶はその年度の造りである。同じ年度内に売られる酒が新酒であり、一年を越したものは税法上の古酒となる。本頁が扱う熟成酒よりはるかに弱い意味である。この語の二つの用法は、注意して読み分けること。",
              zh:"釀造年度（BY）自 7 月 1 日至 6 月 30 日，標示「令和6BY」的酒即為該年度所釀。於同一年度內售出者為新酒；跨過一年者在稅法意義上即為古酒——這比本頁所談的熟成酒是弱得多的說法。請仔細分辨這個詞的兩種用法。"} }
        ] }
      ]
    },

{ t:"section", id:"types",
      title:{ en:"A taxonomy of aged sake", ja:"熟成酒の分類", zh:"熟成酒的分類" }, jp:"型と年数",
      body:[
        { t:"p", text:{
          en:"“Koshu” covers a range wide enough to be unhelpful without a further division. The Long-term Aged Sake Research Society's own three-way split by colour and intensity is the most useful working scheme, and it maps directly onto storage temperature.",
          ja:"「古酒」という語は、さらに分けなければ役に立たないほど広い範囲を覆っている。長期熟成酒研究会自身による、色と濃さによる三分は最も実用的な枠組みであり、それは貯蔵温度に直接対応している。",
          zh:"「古酒」一詞涵蓋的範圍太廣，若不再細分便難以派上用場。長期熟成酒研究會自身依色澤與濃度所做的三分法，是最實用的架構，且與貯藏溫度直接對應。" } },
        { t:"table",
          cols:[{en:"Type",ja:"型",zh:"類型"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Base sake",ja:"元になる酒",zh:"基底酒"},{en:"Colour & character",ja:"色と性格",zh:"色澤與性格"}],
          jpCols:[1],
          rows:[
            [{en:"Pale type",ja:"淡熟タイプ",zh:"淡熟型"},"淡熟",
             {en:"Ginjō and daiginjō, stored at 0–5°C",ja:"吟醸・大吟醸を0〜5℃で貯蔵",zh:"吟釀、大吟釀，於 0–5°C 貯藏"},
             {en:"Barely coloured after ten years. The fruit softens into something like dried pear and honey, the texture rounds, and the whole thing gains a quiet weight it did not have young. The most expensive and the least obviously “aged”.",ja:"十年を経てもほとんど色づかない。果実の香りは干し洋梨や蜂蜜のようなものへ和らぎ、質感は丸みを帯び、若い頃にはなかった静かな重みを得る。最も高価であり、最も「熟成した」と見えにくい。",zh:"歷經十年仍幾乎不著色。果香柔化為近似洋梨乾與蜂蜜的氣息，質地趨圓，並獲得年輕時所無的安靜重量。最昂貴，也最不像「陳年」。"}],
            [{en:"Medium type",ja:"中間タイプ",zh:"中間型"},"中間",
             {en:"Junmai and honjōzō, at cellar temperature",ja:"純米・本醸造を常温で",zh:"純米、本釀造，於常溫"},
             {en:"Straw to gold. Dried fruit, roasted nut, a little soy. Still legibly sake, and the easiest entry point — most three- to eight-year koshu on the market is here.",ja:"麦藁色から黄金へ。乾果、焙じた木の実、わずかな醤油。なお日本酒と分かる姿であり、最も入りやすい。市場にある三年から八年の古酒の多くはここに属する。",zh:"麥稈色至金黃。乾果、烘堅果，一絲醬油。仍清楚可辨為清酒，也是最容易入門之處——市面上三至八年的古酒多半屬此。"}],
            [{en:"Dark type",ja:"濃熟タイプ",zh:"濃熟型"},"濃熟",
             {en:"Junmai, often low-milled, at 20–35°C",ja:"純米、多くは低精白を20〜35℃で",zh:"純米（多為低精米），於 20–35°C"},
             {en:"Amber to mahogany within a few years. Caramel, dried fig, soy, dried shiitake, sometimes leather. Closest to an oloroso sherry or a tawny, and the version most likely to change a sceptic's mind at a table with strong food on it.",ja:"数年で琥珀から紅褐へ。カラメル、乾いた無花果、醤油、乾し椎茸、時に革。オロロソやトーニーに最も近く、濃い料理の並ぶ卓で、懐疑的な人の考えを最も変えやすいのがこれである。",zh:"數年內即由琥珀轉為紅褐。焦糖、無花果乾、醬油、乾香菇，有時帶皮革。最接近 oloroso 雪莉或 tawny 波特；在擺著濃味料理的餐桌上，最可能扭轉懷疑者想法的就是它。"}],
            [{en:"Kijōshu, aged",ja:"熟成貴醸酒",zh:"熟成貴釀酒"},"貴醸酒",
             {en:"Sake brewed with sake, then aged",ja:"酒で仕込んだ酒を熟成させたもの",zh:"以酒仕込之酒，再行熟成"},
             {en:"Deep amber, syrupy, and genuinely sweet — 100 g/L of residual sugar or more is normal. Ten- and twenty-year bottlings exist and are among the most remarkable sweet wines made anywhere.",ja:"深い琥珀色で、とろりとして、まぎれもなく甘い。残糖は1リットルあたり100グラム以上が普通である。十年、二十年の瓶詰めが存在し、世界のどこで造られる甘口酒とも並ぶ稀有なものである。",zh:"深琥珀色、糖漿般黏稠，且確實甘甜——殘糖每公升 100 公克以上是常態。十年、二十年的酒款確實存在，堪與世界任何產地的甜酒並列。"}],
            [{en:"Taru-aged",ja:"樽熟成",zh:"樽熟成"},"樽酒",
             {en:"Any sake given time in wood",ja:"木に触れさせたあらゆる酒",zh:"任何接觸過木材的酒"},
             {en:"Cedar gives its aroma in days, not years, so this is a seasoning rather than a maturation. Whisky- and sherry-cask finishes are a separate modern experiment and behave quite differently.",ja:"杉は年ではなく日の単位で香りを与えるため、これは熟成というより味付けである。ウイスキーやシェリーの樽での後熟は別の現代的な試みであり、振る舞いもかなり異なる。",zh:"杉木賦香以日計而非以年計，因此這是調味而非熟成。威士忌桶與雪莉桶的收尾則是另一項現代實驗，表現也相當不同。"}]
          ] }
      ]
    },

    { t:"section", id:"choosing",
      title:{ en:"Buying aged sake without being fooled", ja:"熟成酒を買うときの注意", zh:"選購熟成酒而不受騙" }, jp:"見分け方",
      body:[
        { t:"p", text:{
          en:"An amber sake can be a twenty-year masterpiece or a two-year-old ginjō that spent a summer in a shop window. Since both look identical, the only defence is the paperwork and the shop.",
          ja:"琥珀色の酒は、二十年の傑作であることもあれば、店の窓辺で夏を越した二年の吟醸であることもある。見た目は同じであるから、頼れるのは表示と店だけである。",
          zh:"一款琥珀色的酒，可能是二十年的傑作，也可能是在店面櫥窗裡過了一個夏天的兩年吟釀。既然外觀相同，唯一的防線就是標示與店家。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Good signs",ja:"良い徴",zh:"好的徵象"},
            body:[{ t:"ul", plain:true, items:[
              { en:"The brewing year (BY) is stated, not just a vague “aged”.",ja:"漠然と「熟成」ではなく、醸造年度（BY）が明記されている。",zh:"明確標示釀造年度（BY），而非只寫模糊的「熟成」。" },
              { en:"The storage regime is described — cold, cellar or warm.",ja:"貯蔵の方法が記されている——低温か常温か高温か。",zh:"說明了貯藏方式——低溫、常溫或高溫。" },
              { en:"It is a junmai, or at least clearly pasteurised. Aged nama is a mistake, not a style.",ja:"純米であるか、少なくとも火入れが明らかである。熟成した生酒は様式ではなく失敗である。",zh:"是純米，或至少明確經過火入。陳放的生酒是失誤，不是風格。" },
              { en:"The brewery sells it as a named product, not as old stock cleared at a discount.",ja:"蔵が名前のある商品として売っており、値引きした古い在庫として出しているのではない。",zh:"酒藏將它作為具名商品販售，而非折價清出的舊庫存。" }
            ] }] },
          { h:{en:"Warning signs",ja:"警戒すべき徴",zh:"警訊"},
            body:[{ t:"ul", plain:true, items:[
              { en:"A gold or brown colour on a bottle labelled ginjō or daiginjō with a recent date.",ja:"最近の日付の吟醸・大吟醸の瓶に、金や褐色がある。",zh:"標示為吟釀或大吟釀、日期又不遠的酒瓶，卻呈金黃或褐色。" },
              { en:"No date at all, and no explanation of what was aged or how.",ja:"日付がまったくなく、何をどう熟成させたかの説明もない。",zh:"完全沒有日期，也沒有說明陳放了什麼、如何陳放。" },
              { en:"A dusty bottle in a bright shop being sold as “vintage”.",ja:"明るい店で埃をかぶった瓶が「ヴィンテージ」として売られている。",zh:"明亮店面中積灰的酒瓶，被當作「陳年」販售。" },
              { en:"A smell of wet cardboard or boiled vegetable rather than caramel and dried fruit. That is hine, not maturity.",ja:"カラメルや乾果ではなく、湿った段ボールや煮た野菜の匂いがする。それは熟成ではなくひねである。",zh:"聞到的是濕紙板或煮蔬菜味，而非焦糖與乾果。那是老化臭，不是熟成。" }
            ] }] }
        ] },
        { t:"note", label:{en:"Starting cheaply",ja:"安く始める",zh:"從便宜處開始"}, text:{
          en:"Aged sake is not necessarily expensive. A three-year junmai from a brewery that ages as a matter of course often costs no more than the fresh version, and several large houses sell a warm-aged dark-type sake in a plain bottle for very little. That is the right place to find out whether you like the style at all, before spending on a twenty-year bottling.",
          ja:"熟成酒が必ずしも高価なわけではない。当たり前に寝かせている蔵の三年の純米は、新酒と変わらぬ値であることが多く、大手のいくつかは高温熟成の濃熟酒を素っ気ない瓶でごく安く売っている。二十年の一本に金を使う前に、そもそもこの様式が好きかどうかを確かめるには、そこが正しい入口である。",
          zh:"熟成酒未必昂貴。一家把陳放視為常態的酒藏，其三年純米往往與新酒同價；數家大廠也以樸素酒瓶極便宜地販售高溫熟成的濃熟型清酒。在為一支二十年的酒掏錢之前，那才是確認自己究竟喜不喜歡這種風格的正確入口。" } }
      ]
    },

{ t:"section", id:"aging-chemistry",
      title:{ en:"What ageing actually is, chemically", ja:"熟成とは化学的に何か", zh:"熟成在化學上究竟是什麼" }, jp:"熟成の化学",
      body:[
        { t:"p", text:{
          en:"Ageing sake is not one process but three running at once, at rates that depend almost entirely on temperature. Understanding which of the three a given bottle has been subjected to explains most of the enormous difference between a graceful twenty-year koshu and a bottle that has simply gone off.",
          ja:"日本酒の熟成は一つの過程ではなく、三つが同時に走るものであり、その速さはほとんど温度のみに依る。ある瓶がそのうちどれを被ってきたのかが分かれば、優美な二十年の古酒と、単に駄目になった瓶とのあいだの巨大な差の大半が説明できる。",
          zh:"清酒的熟成不是一個過程，而是三個同時進行的過程，其速率幾乎完全取決於溫度。搞清楚某一支酒經歷的是其中哪一種，就能解釋一支優雅的二十年古酒與一支單純壞掉的酒之間，那巨大差異的絕大部分。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Maillard reactions", ja:"メイラード反応", zh:"梅納反應" }, jp:"アミノカルボニル反応", romaji:"amino-carbonyl",
            meta:{ en:"Amino acid + sugar → colour and body", ja:"アミノ酸＋糖 → 色と厚み", zh:"胺基酸＋糖 → 色澤與厚度" },
            text:{ en:"The same family of reactions that browns bread crust and roasted meat, running very slowly in a bottle at cellar temperature. Sake is unusually rich in both reactants — free amino acids from broken-down rice protein, and residual glucose from the kōji — so it browns faster than wine does. The products are melanoidins, which supply the amber colour and a great deal of the caramel, dried-fruit and soy character. This is the reaction an aged-sake producer wants, and it is the reason kijōshu and other sweeter, amino-rich sake age most rewardingly.",
              ja:"パンの皮や焼いた肉を褐変させるのと同じ一族の反応が、蔵の温度の瓶のなかで、きわめてゆっくりと進む。日本酒は二つの反応物——分解された米のたんぱく質に由来する遊離アミノ酸と、麹に由来する残存グルコース——のいずれにも異例なほど富むから、ワインより速く褐変する。生じるのはメラノイジンであり、琥珀の色と、カラメル、乾いた果実、醤油の性格の多くを供給する。熟成酒の作り手が求めるのはこの反応であり、貴醸酒をはじめとする甘くアミノ酸に富む酒が最もよく熟成する理由でもある。",
              zh:"與麵包外皮和烤肉褐變同一族的反應，在窖溫下的酒瓶中極其緩慢地進行。清酒對兩種反應物都異常豐富——來自分解米蛋白的游離胺基酸，以及來自麴的殘留葡萄糖——因此褐變得比葡萄酒快。生成物是類黑精，提供琥珀色澤，以及大量的焦糖、果乾與醬油調性。這正是熟成酒生產者想要的反應，也是貴釀酒等偏甜、富含胺基酸的酒最能從熟成中獲益的原因。" } },
          { n:"2", title:{ en:"Ester equilibrium", ja:"エステルの平衡", zh:"酯類的平衡" }, jp:"加水分解と生成", romaji:"kasui-bunkai",
            meta:{ en:"The fruit leaves, other things arrive", ja:"果実は去り、別のものが来る", zh:"果香離去，別的東西到來" },
            text:{ en:"The ginjō esters — ethyl caproate, isoamyl acetate — sit in equilibrium with the acids and alcohols they were made from, and in a bottle that equilibrium shifts back toward hydrolysis. Meanwhile slower esterification produces heavier, less volatile esters. The net effect is that the top notes of a young aromatic sake are simply gone after a few years, replaced by something lower and rounder. A daiginjō does not age into a better daiginjō; it ages into a different drink, and whether that is a gain is a matter of taste.",
              ja:"吟醸のエステル——カプロン酸エチル、酢酸イソアミル——は、それを構成した酸とアルコールとの平衡にあり、瓶のなかでその平衡は加水分解の側へ戻る。かたわらで、より緩やかなエステル化が、重く揮発しにくいエステルを生む。結果として、若く香り高い酒の上澄みの香りは数年で単純に消え、より低く丸い何かに置き換わる。大吟醸はより優れた大吟醸へは熟さない。別の飲み物へ熟すのであり、それが得であるかどうかは好みの問題である。",
              zh:"吟釀的酯類——己酸乙酯、乙酸異戊酯——與其生成來源的酸和醇處於平衡；在瓶中，這個平衡會朝水解的方向回移。與此同時，較慢的酯化反應會生成更重、更不易揮發的酯。淨效果是：一支年輕芳香型清酒的上層香氣在數年後就單純地消失了，取而代之的是更低沉、更圓潤的東西。大吟釀不會熟成為更好的大吟釀，而是熟成為另一種飲料；那算不算收穫，是個人口味的問題。" } },
          { n:"3", title:{ en:"Sulphur chemistry", ja:"硫黄の化学", zh:"硫的化學" }, jp:"含硫化合物", romaji:"ganryū kagōbutsu",
            meta:{ en:"Where ageing goes wrong", ja:"熟成が誤る場所", zh:"熟成出錯之處" },
            text:{ en:"The same warmth that drives the pleasant reactions also drives the unpleasant ones, and the boundary between mature and stale sits largely in sulphur compounds — dimethyl trisulfide above all, perceptible at parts per billion and reading as boiled vegetable or drains. This is why aged sake is a deliberate production decision rather than something that happens to a forgotten bottle: producers control temperature, oxygen and the starting composition specifically to favour the first two reactions over the third. A bottle aged by accident in a warm cupboard usually gets all three.",
              ja:"好ましい反応を駆動するのと同じ温かさが、好ましくない反応をも駆動する。そして熟成と老ねとの境界は、大部分が硫黄化合物にある——何よりジメチルトリスルフィドであり、十億分率で知覚され、茹でた野菜や排水として読まれる。熟成酒が、忘れられた瓶に起こることではなく、意図された製造上の決定である理由がこれである。作り手は、第三の反応より初めの二つを優先させるために、温度と酸素と初期の組成を制御する。暖かい戸棚で偶然に年を経た瓶は、たいてい三つとも得ることになる。",
              zh:"驅動宜人反應的那份溫度，同樣驅動著不宜人的反應；而「熟成」與「老敗」的界線，大半落在含硫化合物上——尤其是二甲基三硫醚，濃度在十億分之一即可察覺，讀來像水煮蔬菜或排水口。這正是為什麼熟成酒是一項刻意的生產決策，而不是一支被遺忘的酒自然發生的事：生產者專門控制溫度、氧氣與初始組成，讓前兩種反應勝過第三種。而在溫暖櫥櫃裡意外放老的酒，通常三種都得到了。" } }
        ] },

        { t:"table",
          cols:[{en:"Kept at",ja:"保存温度",zh:"保存溫度"},{en:"After five years",ja:"五年後",zh:"五年後"},{en:"Character",ja:"性格",zh:"性格"}],
          rows:[
            [{en:"−5 to 0 °C",ja:"−5〜0℃",zh:"−5 至 0 °C"},
             {en:"Barely changed",ja:"ほとんど変わらない",zh:"幾乎沒有變化"},
             {en:"Effectively suspended. Used for keeping nama and for holding competition bottles, not for making koshu.",ja:"事実上停止している。生酒の保管や鑑評会用の瓶の保持に用いられ、古酒を造るためではない。",zh:"實質上被凍結。用於保存生酒與存放競賽酒款，而非用來製作古酒。"}],
            [{en:"5 to 10 °C",ja:"5〜10℃",zh:"5 至 10 °C"},
             {en:"Slow, pale maturation",ja:"緩やかで淡い熟成",zh:"緩慢而淡的熟成"},
             {en:"Colour still light, aroma quietly deepening. The route to a <em>tanrei jukusei</em> — a light aged style that keeps its clarity. Takes decades to become obviously old.",ja:"色はなお淡く、香りは静かに深まる。淡麗熟成——澄明さを保つ軽やかな熟成の型——への道であり、明らかに古くなるには数十年を要する。",zh:"色澤仍淺，香氣安靜地加深。這是通往「淡麗熟成」——保有清澈感的輕盈熟成類型——的路徑，要明顯顯出年歲得花上數十年。"}],
            [{en:"15 to 20 °C",ja:"15〜20℃",zh:"15 至 20 °C"},
             {en:"Amber, caramel, clearly aged",ja:"琥珀、カラメル、明らかに熟成",zh:"琥珀、焦糖，明顯熟成"},
             {en:"The classic cellar range for producing koshu on purpose. Maillard products accumulate steadily and the sake becomes recognisably an aged sake within about five years.",ja:"意図して古酒を造るための古典的な蔵の温度域である。メイラードの産物が着実に蓄積し、およそ五年で紛れもない熟成酒となる。",zh:"這是刻意生產古酒的經典窖藏溫度區間。梅納反應產物穩定累積，約五年內就會成為明確可辨的熟成酒。"}],
            [{en:"25 °C and above",ja:"25℃以上",zh:"25 °C 以上"},
             {en:"Dark and often faulty",ja:"濃く、しばしば欠点を帯びる",zh:"色深，且常帶缺陷"},
             {en:"Very fast change, but the sulphur route runs fast too. Some producers use a deliberate warm period to accelerate colour and body, then drop the temperature — but an ordinary bottle forgotten in a warm room usually reaches hineka before it reaches complexity.",ja:"変化は速いが、硫黄の道もまた速い。色と厚みを速めるために意図して温かい期間を設ける作り手もあり、そののち温度を下げる。しかし暖かい部屋で忘れられた普通の瓶は、複雑さに達する前に老香へ達するのが常である。",zh:"變化非常快，但走向硫化物的路徑也一樣快。有些生產者會刻意設一段高溫期以加速色澤與酒體的發展，之後再降溫；但一支被遺忘在溫暖房間裡的普通酒，通常在抵達複雜度之前就先抵達了老香。"}]
          ] }
      ] },

    { t:"section", id:"vessel",
      title:{ en:"What it is aged in", ja:"何のなかで熟成させるか", zh:"在什麼容器裡熟成" }, jp:"貯蔵容器",
      body:[
        { t:"compare", cols:3, items:[
          { title:{ en:"Tank", ja:"タンク", zh:"酒槽" }, jp:"タンク貯蔵",
            text:{ en:"Enamel or stainless, in bulk.", ja:"ホーローかステンレスで、大量に。", zh:"琺瑯或不鏽鋼，大量貯藏。" },
            body:[
              { t:"p", text:{
                en:"The standard route. Bulk storage is inert and controllable, and the sake can be blended before bottling to a consistent house profile. The trade-off is oxygen management: a partly emptied tank has a large headspace, and breweries either keep tanks full, blanket them, or accept some oxidation as part of the style.",
                ja:"標準の道である。大量貯蔵は不活性で制御しやすく、瓶詰め前に調合して蔵の一貫した型に整えられる。代償は酸素の管理である——一部を抜いたタンクは大きな空間を抱える。蔵はタンクを満たしておくか、ガスで覆うか、あるいは若干の酸化を型の一部として受け入れる。",
                zh:"標準路徑。大量貯藏惰性且易於控制，且可在裝瓶前調和成穩定的酒藏風格。代價是氧氣管理：抽走一部分的酒槽會留下很大的頂空，酒藏或者把槽裝滿、或者充氣覆蓋、或者接受一定程度的氧化作為風格的一部分。" } }
            ] },
          { title:{ en:"Bottle", ja:"瓶", zh:"酒瓶" }, jp:"瓶貯蔵",
            text:{ en:"Sealed, small, individual.", ja:"密栓、小容量、個別。", zh:"密封、小容量、個別。" },
            body:[
              { t:"p", text:{
                en:"Slower and gentler, because the headspace is tiny and fixed. Bottle-aged sake keeps more of its original structure and develops more slowly than the same sake in tank. It is also the only honest way to sell a vintage, since every bottle has had the same history. The cost is warehouse space held for years against no revenue, which is why bottle-aged koshu is expensive.",
                ja:"より遅く、より穏やかである。空間が小さく、一定であるからである。瓶で熟成させた酒は、もとの骨格をより多く保ち、同じ酒をタンクで熟成させた場合より緩やかに育つ。すべての瓶が同じ来歴を持つがゆえに、年号を正直に売りうる唯一の方法でもある。代償は、収入のないまま何年も倉庫を占めることであり、瓶熟成の古酒が高価である理由である。",
                zh:"更慢也更溫和，因為頂空既小又固定。瓶陳的清酒保留更多原有結構，發展速度也比同一支酒在槽中慢。由於每一瓶的經歷都相同，這也是誠實販售年份的唯一方式。代價是倉儲空間被無收益地占用多年——這正是瓶陳古酒昂貴的原因。" } }
            ] },
          { title:{ en:"Wood", ja:"木", zh:"木製容器" }, jp:"樽・木桶",
            text:{ en:"Cedar, and lately other woods.", ja:"杉、そして近年は他の木も。", zh:"杉木，近年也有其他木材。" },
            body:[
              { t:"p", text:{
                en:"Cedar contributes strongly and quickly — a few days in a taru is enough to mark a sake — so wood is a flavouring step measured in days, not a maturation vessel measured in years. A small number of producers now age sake in used whisky, sherry or wine casks, which is legally still seishu provided nothing is added, and which produces something that divides opinion sharply.",
                ja:"杉は強く、そして速く効く——樽に数日置けば酒に印が付く——ゆえに木は、年で測る熟成の容器ではなく、日で測る香り付けの工程である。近年、使用済みのウイスキー、シェリー、ワインの樽で熟成させる作り手が少数ながらおり、何も加えぬ限り法的にはなお清酒である。評価は鋭く分かれる。",
                zh:"杉木的作用又強又快——在樽中放幾天就足以在酒上留下印記——因此木材是一道以「天」計的賦香工序，而不是以「年」計的熟成容器。近年有少數生產者以用過的威士忌、雪莉或葡萄酒桶熟成清酒；只要沒有添加物，法律上仍是清酒，而成品的評價則兩極分明。" } }
            ] }
        ] },

        { t:"note", text:{
          en:"A practical consequence for a buyer: a bottle labelled with a number of years may have spent them in tank and been bottled recently, or spent them in that bottle. The first is far commoner. Neither is dishonest, but they taste different, and a producer who bottle-ages will almost always say so.",
          ja:"買い手にとっての実際的な帰結——年数の記された瓶は、その年月をタンクで過ごしてつい最近詰められたのかもしれず、あるいはその瓶のなかで過ごしたのかもしれない。前者のほうがはるかに多い。いずれも不誠実ではないが、味は異なる。そして瓶熟成させた作り手は、ほぼ必ずそう明記する。",
          zh:"對買家的實際意涵：標示年數的酒瓶，可能是在酒槽中度過那些年、最近才裝瓶，也可能是在那支瓶子裡度過的。前者常見得多。兩者都不算不誠實，但味道不同；而採取瓶陳的生產者，幾乎一定會註明。" } }
      ] },

    { t:"related", items:[
      { href:"storage.html", why:{ en:"How to keep a bottle you intend to age.", ja:"寝かせるつもりの一本をどう保つか。", zh:"打算陳放的那瓶酒，該怎麼保存。" } },
      { href:"taste.html", why:{ en:"The Maillard chemistry that makes koshu what it is.", ja:"古酒を古酒たらしめるメイラードの化学。", zh:"讓古酒之所以是古酒的梅納化學。" } },
      { href:"mirin.html", why:{ en:"The same reaction running ten times faster.", ja:"同じ反応が十倍の速さで走る場合。", zh:"同一個反應以十倍速度進行的情況。" } },
      { href:"value.html", why:{ en:"What waiting costs, and who pays for it.", ja:"待つことの費えと、それを払う者。", zh:"等待的成本，以及由誰來付。" } }
    ] }
  ]
};


/* ---- ------------------------------------------- sparkling */
SAKE.pages["sparkling"] = {
  kicker: { en: "Understanding · 10", ja: "理解 · 10", zh: "理解 · 10" },
  title:  { en: "Sparkling Sake", ja: "発泡清酒", zh: "氣泡清酒" },
  jp: "スパークリング日本酒とAWA SAKE",
  lede: {
    en: "Sake has always had bubbles in it at some stage — a mash at full fermentation is violently effervescent, and sake drawn straight from the tank fizzes. What is new is bottling that deliberately. Since the 1990s Japanese breweries have built a sparkling category from almost nothing, ranging from cloudy, low-alcohol, sweet party bottles to bone-dry, bottle-fermented sake at champagne pressure with a formal standard behind it. The category matters out of proportion to its volume, because it is the one form of sake that people who do not drink sake will accept a glass of.",
    ja: "日本酒は、どこかの段階で必ず泡を含んできた。発酵の盛りの醪は激しく泡立ち、タンクから直に汲んだ酒は舌の上で弾ける。新しいのは、それを意図して瓶に詰めることである。一九九〇年代以降、日本の蔵はほとんど無から発泡酒の分野を築いてきた。濁って軽く甘い祝いの瓶から、正式な規格を背負い、シャンパンと同じ圧を持つ瓶内二次発酵の辛口まで幅がある。この分野は、その量に見合わぬほど重要である。日本酒を飲まない人が、一杯だけは受け取ってくれる唯一の姿だからである。",
    zh: "清酒在某個階段裡總是帶著氣泡——發酵旺盛的醪劇烈冒泡，直接自槽中汲取的酒也會在舌上跳動。新的是把這件事刻意裝進瓶裡。1990 年代以來，日本酒藏幾乎從無到有地建立起氣泡清酒這個類別，範圍從混濁、低酒精、甜口的派對酒瓶，到具備正式規格、以香檳壓力進行瓶內二次發酵的極辛口酒。這個類別的重要性遠超其產量，因為它是唯一一種連不喝清酒的人也願意接下一杯的清酒形式。"
  },
  body: [

    { t:"section", id:"methods",
      title:{ en:"Four ways to get bubbles into a bottle", ja:"泡を瓶に入れる四つの方法", zh:"讓氣泡進入酒瓶的四種方法" }, jp:"製法",
      body:[
        { t:"p", text:{
          en:"The method decides almost everything about the result — how fine the bead is, how long it lasts, how sweet the sake is, and whether it needs to be opened over a sink.",
          ja:"製法が結果のほとんどを決める——泡の細かさ、その持続、酒の甘さ、そして流しの上で開けねばならないかどうかまで。",
          zh:"製法幾乎決定了一切結果——氣泡的細緻度、持續時間、酒的甜度，以及是否得在水槽上方開瓶。" } },
        { t:"steps", items:[
          { n:"1", title:{en:"Secondary fermentation in the bottle",ja:"瓶内二次発酵",zh:"瓶內二次發酵"}, jp:"瓶内二次発酵",
            meta:{en:"The serious method",ja:"本格的な方法",zh:"正統作法"},
            text:{en:"Live yeast and residual sugar are sealed into the bottle and fermentation finishes there, exactly as in champagne. The bead is fine and persistent and the sake usually finishes dry, because the yeast eats everything. Whether the lees are removed by disgorging or left in decides whether the bottle is clear or cloudy. This is expensive, slow, and the only method that produces real pressure with real integration.",
              ja:"生きた酵母と残糖を瓶に封じ、発酵をそのなかで終わらせる。シャンパンとまったく同じである。泡は細かく長く続き、酵母が糖を食い尽くすため、たいてい辛口に仕上がる。澱を動瓶・除去するか残すかで、澄んだ瓶になるか濁った瓶になるかが決まる。費用がかかり、時間もかかるが、本当の圧と本当の一体感を生む唯一の方法である。",
              zh:"將活酵母與殘糖封入瓶中，讓發酵在瓶內完成，與香檳完全相同。氣泡細緻且持久，且因酵母把糖吃盡，成酒多半偏辛。是否以除渣（disgorging）去除酒渣，決定了酒瓶清澈或混濁。此法昂貴、耗時，卻是唯一能造就真正壓力與真正融合的方法。"} },
          { n:"2", title:{en:"Fermentation stopped in tank, then bottled under pressure",ja:"タンク内発酵を止めて加圧瓶詰",zh:"槽內發酵中止後加壓裝瓶"}, jp:"タンク法",
            meta:{en:"The Charmat equivalent",ja:"シャルマ方式に相当",zh:"相當於查瑪法"},
            text:{en:"The mash is filtered or chilled to stop fermentation with sugar and CO₂ still present, then bottled cold under counter-pressure. Cleaner and cheaper to control than bottle fermentation, and it allows a sweeter finished sake. Most mid-priced sparkling sake is made this way.",
              ja:"糖と炭酸ガスを残したまま、濾過または冷却で発酵を止め、低温・背圧の下で瓶詰めする。瓶内発酵より制御が容易で安価であり、甘さを残した仕上がりも可能になる。中価格帯の発泡清酒の多くはこの方法による。",
              zh:"在糖與二氧化碳仍存在時，以過濾或降溫中止發酵，再於低溫、反壓條件下裝瓶。比瓶內發酵更易控制、成本更低，也能保留較甜的口感。中價位的氣泡清酒多以此法製成。"} },
          { n:"3", title:{en:"Carbonation",ja:"炭酸ガス注入",zh:"注入二氧化碳"}, jp:"ガス注入",
            meta:{en:"Fast and honest if declared",ja:"表示すれば速く正直",zh:"若如實標示則快速而誠實"},
            text:{en:"CO₂ dissolved into finished sake, as with soda water. Coarse, large bubbles that dissipate quickly, but cheap and reproducible, and perfectly reasonable at the price. Japanese labelling requires this to be declared as <em>炭酸ガス含有</em>.",
              ja:"炭酸水と同じように、仕上がった酒に二酸化炭素を溶かし込む。泡は粗く大きく、すぐに抜けるが、安価で再現性があり、その価格帯では十分に理にかなっている。日本の表示制度では「炭酸ガス含有」と記すことが求められる。",
              zh:"如同蘇打水一般，將二氧化碳溶入成酒。氣泡粗大、消散快，但價廉且可重現，就其價位而言完全合理。日本標示規定必須註明「炭酸ガス含有」。"} },
          { n:"4", title:{en:"Live, unfiltered, still fermenting",ja:"活性にごり",zh:"活性濁酒"}, jp:"活性にごり酒",
            meta:{en:"Open with care",ja:"開栓注意",zh:"開瓶請小心"},
            text:{en:"Cloudy sake bottled with live yeast and no attempt to stop it. Pressure continues to build in the bottle for months, which is why these carry warning labels, are shipped cold, and should be opened slowly over a sink with the bottle upright and cold. The reward is a fresh, yeasty, lively drink that tastes like the tank room.",
              ja:"生きた酵母とともに、止めることなく瓶詰めされた濁り酒。圧は瓶のなかで数か月にわたり上がり続ける。注意書きが貼られ、冷蔵で流通し、冷やしたまま立てて、流しの上でゆっくり開けねばならないのはそのためである。報酬は、仕込蔵の空気そのままの、新鮮で酵母香のある生き生きとした酒である。",
              zh:"帶著活酵母、未加中止便裝瓶的濁酒。瓶內壓力會持續累積數月，因此貼有警語、以冷藏配送，並須在冰涼、直立的狀態下於水槽上方緩慢開瓶。回報是一杯新鮮、帶酵母香、生氣勃勃、嚐來如同仕込酒藏空氣的酒。"} }
        ] }
      ]
    },

    { t:"section", id:"awasake",
      title:{ en:"The AWA SAKE standard", ja:"AWA SAKEの規格", zh:"AWA SAKE 規格" }, jp:"awa酒協会",
      body:[
        { t:"figure",
          caption:{
            en:"Pressure at 20 °C, which is the one number that separates these drinks from each other. The dashed line is the AWA SAKE minimum of 3.5 bar, and placing it against the reference drinks below shows what the association was aiming at: not the gentle prickle of a tank-method sake but something a sommelier would recognise as a proper mousse. The live nigori bar has an open end because a bottle of it does not stop — the pressure keeps climbing in the fridge, which is why the label tells you to open it over a sink.",
            ja:"二十度における圧。これらの飲みものを互いに分かつ、ただ一つの数である。破線はAWA SAKEの下限、3.5バールである。それを下段の比較対象に並べれば、協会が何を狙ったのかが見える——タンク法のやさしい微発泡ではなく、ソムリエが正しい泡と認めるものである。活性にごりの棒の右端が開いているのは、その瓶が止まらないからである。冷蔵庫のなかでも圧は上がり続ける。酒標が流しの上で開けよと告げる理由である。",
            zh:"二十度下的壓力——這是把這些飲品彼此分開的唯一數字。虛線是 AWA SAKE 的下限 3.5 巴；把它與下段的參照飲品並列，便能看出協會瞄準的是什麼：不是槽內法那種輕柔的細刺，而是侍酒師會認可為「像樣泡沫」的東西。活性濁酒那一條右端是開口的，因為那樣一支瓶子不會停下來——壓力在冰箱裡仍持續攀升，這正是酒標要你在水槽上方開瓶的原因。" },
          svg: function (lang, L) {
            var W = 760, H = 392, X0 = 236, X1 = 690, Y0 = 44, RH = 32, BARMAX = 7;
            function px(b) { return X0 + b / BARMAX * (X1 - X0); }
            var sakes = [
              { a:1.0, b:2.5, f:"#E7DFD2", n:{ en:"Carbonated", ja:"炭酸ガス注入", zh:"注入二氧化碳" },
                s:{ en:"gas dissolved into finished sake", ja:"仕上がった酒に溶かす", zh:"溶入成酒" } },
              { a:1.5, b:3.0, f:"#E2D8C6", n:{ en:"Stopped in tank", ja:"タンク法", zh:"槽內中止法" },
                s:{ en:"bottled cold under counter-pressure", ja:"低温・背圧で瓶詰", zh:"低溫反壓裝瓶" } },
              { a:2.0, b:4.0, f:"#DACFB8", n:{ en:"Bottle-fermented", ja:"瓶内二次発酵", zh:"瓶內二次發酵" },
                s:{ en:"outside the AWA standard", ja:"規格の外にあるもの", zh:"未取得規格認定" } },
              { a:3.5, b:5.5, f:"#C0AF8E", n:{ en:"AWA SAKE", ja:"AWA SAKE", zh:"AWA SAKE" },
                s:{ en:"clear, fermentation gas only", ja:"清澄・発酵由来のみ", zh:"清澈・僅發酵氣體" } },
              { a:1.5, b:6.2, f:"#CDBFA2", open:true, n:{ en:"Live nigori", ja:"活性にごり", zh:"活性濁酒" },
                s:{ en:"still fermenting, still rising", ja:"なお発酵中・なお上がる", zh:"仍在發酵・仍在上升" } }
            ];
            var refs = [
              { a:2.2, b:2.8, n:{ en:"Beer", ja:"ビール", zh:"啤酒" } },
              { a:3.0, b:3.5, n:{ en:"Prosecco", ja:"プロセッコ", zh:"普羅賽克" } },
              { a:5.0, b:6.0, n:{ en:"Champagne", ja:"シャンパン", zh:"香檳" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var DIV = Y0 + sakes.length * RH + 8, RY = DIV + 14, BOT = RY + refs.length * RH;
            var g;
            for (g = 1; g <= BARMAX; g++) {
              s += '<line x1="' + px(g) + '" y1="' + (Y0 - 8) + '" x2="' + px(g) + '" y2="' + BOT + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(g) + '" y="' + (BOT + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            /* AWA threshold */
            s += '<line x1="' + px(3.5) + '" y1="' + (Y0 - 16) + '" x2="' + px(3.5) + '" y2="' + BOT + '" stroke="#7C6B52" stroke-dasharray="5 3"/>';
            s += '<text x="' + (px(3.5) + 7) + '" y="' + (Y0 - 20) + '" font-size="10" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "AWA SAKE の下限 3.5 バール" : lang === "zh" ? "AWA SAKE 下限 3.5 巴" : "AWA SAKE minimum, 3.5 bar") + '</text>';
            function row(r, y, sub, fill) {
              var o = "";
              o += '<text x="' + (X0 - 14) + '" y="' + (y + (sub ? 12 : 16)) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + L(r.n) + '</text>';
              if (sub) o += '<text x="' + (X0 - 14) + '" y="' + (y + 25) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(r.s) + '</text>';
              var x1 = px(r.a), x2 = px(r.b), h = 16, ty = y + 5;
              o += '<rect x="' + x1 + '" y="' + ty + '" width="' + (x2 - x1) + '" height="' + h + '" fill="' + fill + '" stroke="#CDC6B9"/>';
              if (r.open) {
                o += '<rect x="' + x2 + '" y="' + ty + '" width="14" height="' + h + '" fill="#F2EFE8"/>';
                o += '<path d="M' + (x2 + 2) + ' ' + ty + ' L' + (x2 + 14) + ' ' + (ty + h / 2) + ' L' + (x2 + 2) + ' ' + (ty + h) + ' Z" fill="' + fill + '"/>';
              }
              o += '<text x="' + (x2 + (r.open ? 20 : 7)) + '" y="' + (ty + 12) + '" font-size="9.5" fill="#8B857C">' +
                   r.a.toFixed(1) + '–' + (r.open ? "?" : r.b.toFixed(1)) + '</text>';
              return o;
            }
            var i;
            for (i = 0; i < sakes.length; i++) s += row(sakes[i], Y0 + i * RH, true, sakes[i].f);
            s += '<line x1="30" y1="' + DIV + '" x2="' + (W - 30) + '" y2="' + DIV + '" stroke="#DED8CB"/>';
            s += '<text x="' + (X0 - 14) + '" y="' + (DIV + 12) + '" text-anchor="end" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "比べるために" : lang === "zh" ? "供比較" : "FOR COMPARISON") + '</text>';
            for (i = 0; i < refs.length; i++) s += row(refs[i], RY + i * RH, false, "#DDE5E8");
            s += '<line x1="' + X0 + '" y1="' + BOT + '" x2="' + X1 + '" y2="' + BOT + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (BOT + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "二十度におけるガス圧・バール" : lang === "zh" ? "二十度下的氣體壓力・巴" : "GAS PRESSURE AT 20 °C, BAR") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "一バールはおよそ一気圧である。範囲は市販品に見られる典型であり、規格の値ではない。定めのある数はAWA SAKEの3.5バールだけである。"
                  : lang === "zh" ? "一巴約等於一個大氣壓。各區間是市售品的典型範圍，而非法定值；唯一有明文規定的數字，是 AWA SAKE 的 3.5 巴。"
                  : "One bar is about one atmosphere. These ranges are typical of what is on sale; the only number here written into a rule is AWA SAKE's 3.5 bar.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"In November 2016 a group of breweries founded the Japan Awasake Association to give bottle-fermented sparkling sake a defensible definition — partly for quality, and explicitly to give sake something to put on a fine-dining wine list next to champagne. The standard is short and strict, and compliance is verified by two outside laboratories rather than by the members.",
          ja:"二〇一六年十一月、蔵元の一団が一般社団法人awa酒協会を設立した。瓶内二次発酵の発泡清酒に、擁護しうる定義を与えるためである。品質のためであると同時に、シャンパンと並ぶ高級飲食店のワインリストに載せるものを日本酒に用意するため、という目的も明言されていた。規格は短く厳しく、適合は会員ではなく二つの外部機関によって検証される。",
          zh:"2016 年 11 月，一群酒藏成立了一般社團法人 awa 酒協會，為瓶內二次發酵的氣泡清酒建立一套站得住腳的定義——一部分為了品質，另一部分則明確是為了讓清酒有東西能與香檳並列於高級餐廳的酒單上。規格簡短而嚴格，且合規與否由兩家外部機構、而非會員本身驗證。" } },
        { t:"table",
          caption:{en:"The six criteria",ja:"六つの基準",zh:"六項基準"},
          cols:[{en:"#",ja:"項",zh:"項"},{en:"Requirement",ja:"要件",zh:"要件"}],
          rows:[
            ["1",{en:"Made only from rice, rice kōji and water — that is, junmai in composition, with no added alcohol.",ja:"米・米麹・水のみで造ること。すなわち組成として純米であり、アルコール添加をしない。",zh:"僅以米、米麴與水製成——亦即組成上為純米，不添加酒精。"}],
            ["2",{en:"The rice must be domestically produced and graded third class or better under the Agricultural Products Inspection Act.",ja:"米は国産で、農産物検査法により三等以上に格付けされていること。",zh:"米須為國產，並依《農產物檢查法》評為三等以上。"}],
            ["3",{en:"The carbon dioxide must come from fermentation alone. Injected gas disqualifies.",ja:"炭酸ガスは発酵由来のみであること。注入したガスは不可。",zh:"二氧化碳僅能來自發酵。注入氣體者不予認定。"}],
            ["4",{en:"The sake must be clear and transparent, and must show a single continuous stream of bubbles when poured.",ja:"外観は清澄透明であり、注いだときに一条の泡が立ち上ること。",zh:"外觀須清澈透明，倒出時應呈現一道連續上升的氣泡串。"}],
            ["5",{en:"Alcohol of 10% or more.",ja:"アルコール分10%以上であること。",zh:"酒精濃度須達 10% 以上。"}],
            ["6",{en:"Gas pressure of at least 3.5 bar (0.35 MPa) measured at 20°C.",ja:"20℃において3.5バール（0.35メガパスカル）以上のガス圧を有すること。",zh:"於 20°C 下測得的氣體壓力須達 3.5 巴（0.35 MPa）以上。"}]
          ] },
        { t:"grid", cols:3, cells:[
          { k:{en:"Founded",ja:"設立",zh:"成立"}, v:"2016.11" },
          { k:{en:"Minimum pressure",ja:"最低ガス圧",zh:"最低壓力"}, v:"3.5 bar @ 20°C" },
          { k:{en:"Verification",ja:"検証",zh:"驗證"}, v:{en:"two external labs",ja:"外部機関二か所",zh:"兩家外部機構"} }
        ] },
        { t:"p", text:{
          en:"Requirement 4 is the demanding one. Making a sake ferment a second time in the bottle is straightforward; getting it clear afterwards means riddling and disgorging bottles of a liquid far more protein-rich and haze-prone than wine, and several member breweries spent years failing before they succeeded. The pressure figure in requirement 6 is roughly that of champagne — around five to six bar is a typical champagne, so 3.5 bar is a firm mousse rather than a gentle prickle.",
          ja:"要求の厳しさが際立つのは第四項である。瓶のなかで二度目の発酵を起こさせること自体は難しくない。難しいのは、その後で清澄にすることである。ワインよりはるかにたんぱく質に富み濁りやすい液体の瓶を、動瓶し、澱を抜かねばならない。加盟する蔵のいくつかは、成功するまでに何年も失敗を重ねた。第六項の圧はおおよそシャンパンに近い。典型的なシャンパンが五から六バールであるから、3.5バールはやさしい微発泡ではなく、しっかりとした泡立ちである。",
          zh:"第四項才是嚴苛之處。要讓酒在瓶中二次發酵並不困難；困難的是之後把它弄清澈——那意味著要對一種蛋白質遠比葡萄酒豐富、也更易生濁的液體進行轉瓶與除渣。數家會員酒藏歷經多年失敗才告成功。第六項的壓力大致接近香檳：典型香檳約為五至六巴，因此 3.5 巴代表的是紮實的泡沫，而非輕柔的細刺感。" } }
      ]
    },

    { t:"section", id:"drinking",
      title:{ en:"Choosing and serving", ja:"選び方と供し方", zh:"選擇與供飲" }, jp:"実務",
      body:[
        { t:"compare", cols:3, items:[
          { title:{en:"Sweet cloudy, 5–8%",ja:"甘口にごり 5〜8%",zh:"甜口濁酒 5–8%"}, jp:"入門",
            text:{en:"Low alcohol, milky, often around 100 g/L of sugar. Very easy to like and the usual first sake for someone who thinks they dislike sake. Serve very cold in a flute; treat as an aperitif or with fruit desserts. Short shelf life — buy fresh.",ja:"低アルコールで乳白色、糖分はしばしば1リットルあたり100グラム前後。好かれやすく、日本酒が苦手だと思っている人の最初の一杯によく選ばれる。よく冷やしてフルートで供し、食前酒か果物の菓子に合わせる。日持ちしないので、新しいものを買うこと。",zh:"低酒精、乳白色，糖分常在每公升 100 公克上下。極易入口，常是自認不喜歡清酒者的第一杯。冰透後以笛型杯供飲，作為餐前酒或搭配水果甜點。保存期短——請買新鮮的。"} },
          { title:{en:"Dry bottle-fermented, 11–14%",ja:"辛口瓶内二次発酵 11〜14%",zh:"辛口瓶內二次發酵 11–14%"}, jp:"食中",
            text:{en:"The AWA SAKE register. Fine bead, low sugar, a yeasty autolytic note from lees contact. This is what goes on a wine list and stands up to oysters, tempura, fried chicken and cured ham. Serve at 6–10°C in a white-wine glass, not a flute — the aromas need room.",ja:"AWA SAKEの領域。泡は細かく糖は低く、澱との接触による酵母的な香りをもつ。ワインリストに載り、牡蠣、天ぷら、揚げ鶏、生ハムに拮抗するのはこれである。フルートではなく白ワイン用のグラスで6〜10度に供する。香りには空間が要る。",zh:"AWA SAKE 的領域。氣泡細緻、糖分低，並帶有與酒渣接觸而來的酵母自解香。這正是能列上酒單、並與生蠔、天婦羅、炸雞與生火腿抗衡的類型。以 6–10°C、用白酒杯而非笛型杯供飲——香氣需要空間。"} },
          { title:{en:"Live nigori, 12–17%",ja:"活性にごり 12〜17%",zh:"活性濁酒 12–17%"}, jp:"要注意",
            text:{en:"Still fermenting, still gaining pressure, and capable of emptying itself across a kitchen. Chill hard for a day, keep upright, loosen the cap a fraction at a time over a sink, and expect to spend five minutes on it. Worth every second.",ja:"いまだ発酵し、圧を上げ続けており、台所じゅうに中身をぶちまける力がある。丸一日しっかり冷やし、立てて置き、流しの上で栓を少しずつ緩め、五分をかけるつもりで臨むこと。その五分に見合う価値がある。",zh:"仍在發酵、壓力持續上升，有能力把自己噴滿整個廚房。先徹底冰鎮一天、保持直立，在水槽上方一點一點鬆開瓶蓋，並預期要花上五分鐘。這五分鐘物有所值。"} }
        ] },
        { t:"note", label:{en:"Why sparkling sake matters commercially",ja:"発泡清酒が商業的に重要な理由",zh:"氣泡清酒為何在商業上重要"}, text:{
          en:"Sparkling sake is a small share of production and a much larger share of new drinkers. It arrives at the table at the moment a meal begins, it needs no explanation of milling ratios or designations, and it is the only sake format that reads as celebratory to a Western or Chinese consumer without any prior knowledge. Breweries that would never describe themselves as marketers are quite clear-eyed about this.",
          ja:"発泡清酒は生産量ではわずかな割合だが、新しい飲み手のなかでははるかに大きな割合を占める。食事が始まるまさにその瞬間に卓へ届き、精米歩合や特定名称の説明を要さず、予備知識のない欧米や中華圏の消費者にも祝いの酒として読み取れる唯一の日本酒の形である。自らを売り手だとは決して言わない蔵も、この点については冷静に理解している。",
          zh:"氣泡清酒在產量中占比很小，在新飲者中的占比卻大得多。它在一頓飯開始的當下上桌，不需要解釋精米步合或特定名稱，也是唯一一種無需任何先備知識、便能讓西方或華人消費者讀作「慶祝之酒」的清酒形式。那些絕不會自稱行銷者的酒藏，對這一點看得非常清楚。" } }
      ]
    },

{ t:"section", id:"history",
      title:{ en:"How the category was built", ja:"分野の成り立ち", zh:"這個類別如何被建立" }, jp:"歴史",
      body:[
        { t:"p", text:{
          en:"Sparkling sake is almost entirely a creation of the last thirty years. There was no tradition to revive — bubbles in sake had always been a sign of a bottle that had not finished fermenting — so every part of the category had to be invented, in public, by breweries taking a commercial risk.",
          ja:"発泡清酒は、そのほとんどがこの三十年の産物である。よみがえらせるべき伝統はなかった。日本酒の泡はつねに、発酵を終えていない瓶の徴だったからである。したがってこの分野のすべては、商業的な危険を負った蔵によって、人目のもとで発明されねばならなかった。",
          zh:"氣泡清酒幾乎完全是過去三十年的產物。沒有什麼傳統可供復興——清酒中的氣泡向來是「這瓶酒還沒發酵完」的徵象——因此這個類別的每一部分，都得由承擔商業風險的酒藏在眾目睽睽之下發明出來。" } },
        { t:"timeline", items:[
          { year:"1998", era:{en:"Heisei 10",ja:"平成10年",zh:"平成十年"},
            title:{en:"The first commercial bottle-fermented sake",ja:"最初の市販瓶内二次発酵酒",zh:"首款市售瓶內二次發酵清酒"}, jp:"すず音",
            text:{en:"Ichinokura in Miyagi released a low-alcohol, cloudy, bottle-fermented sparkling sake after years of development. At around 5% alcohol and gently sweet, it was designed explicitly for people who did not drink sake, and it worked: it created the market it was aimed at.",
              ja:"宮城の一ノ蔵が、長い開発を経て、低アルコールで濁った瓶内二次発酵の発泡清酒を世に出した。アルコールは5%前後、穏やかに甘く、日本酒を飲まない人に向けて明確に設計されていた。そしてそれは成功した——狙った市場を、それ自身が作り出したのである。",
              zh:"宮城的一之藏在多年研發後推出低酒精、混濁、瓶內二次發酵的氣泡清酒。酒精約 5%、口感柔甜，明確為不喝清酒的人而設計；而它成功了：它創造出了自己所瞄準的市場。"} },
          { year:"2008", era:{en:"Heisei 20",ja:"平成20年",zh:"平成二十年"},
            title:{en:"Clear, dry, champagne-pressure",ja:"澄んだ辛口、シャンパンの圧",zh:"清澈、辛口、香檳壓力"}, jp:"水芭蕉ピュア",
            text:{en:"Nagai Shuzō in Gunma released a fully clear bottle-fermented sake at high pressure, disgorged like champagne. This was the technical proof that the difficult version was possible: a sake with a fine persistent bead and no cloudiness at all.",
              ja:"群馬の永井酒造が、シャンパンのように澱を抜き、高い圧をもつ完全に澄んだ瓶内二次発酵の酒を発表した。難しいほうの姿——細かく持続する泡をもち、まったく濁りのない酒——が可能であることの、技術的な証明であった。",
              zh:"群馬的永井酒造推出如香檳般除渣、具高壓且完全清澈的瓶內二次發酵清酒。這是技術上的證明：那個困難的版本是可行的——氣泡細緻持久，且毫無混濁。"} },
          { year:"2016", era:{en:"Heisei 28",ja:"平成28年",zh:"平成二十八年"},
            title:{en:"A standard, and a name",ja:"規格と名",zh:"規格與名稱"}, jp:"awa酒協会",
            text:{en:"The Japan Awasake Association was founded by a group of breweries to define AWA SAKE and police the definition through outside laboratories. The point was to make the category defensible on an international wine list rather than to police it domestically.",
              ja:"AWA SAKEを定義し、外部の機関を通じてその定義を守るために、蔵元の一団がawa酒協会を設立した。狙いは国内の取り締まりではなく、国際的なワインリストの上でこの分野を擁護しうるものにすることであった。",
              zh:"一群酒藏成立 awa 酒協會，以定義 AWA SAKE，並透過外部機構監督此定義。其目的不在於管制國內，而在於讓這個類別能在國際酒單上站得住腳。"} },
          { year:"2020s", era:{en:"Reiwa",ja:"令和",zh:"令和"},
            title:{en:"Everyone has one",ja:"どの蔵にも一本ある",zh:"人人都有一支"}, jp:"定着",
            text:{en:"Sparkling is now a standard item in a mid-sized brewery's range, alongside the junmai and the ginjō. Tank-carbonated versions cover the everyday price point; bottle-fermented ones cover the top. The category is small in volume and disproportionately large in how many new drinkers it brings in.",
              ja:"いまや発泡は、純米や吟醸と並び、中規模の蔵の品揃えに当たり前に並ぶ一品となった。タンクで炭酸を含ませたものが日常の価格帯を、瓶内二次発酵のものが最上位を担う。量としては小さく、新しい飲み手を連れてくる力としては不釣り合いに大きい分野である。",
              zh:"如今氣泡酒已是中型酒藏產品線中的常規品項，與純米、吟釀並列。槽內加氣的版本負責日常價位，瓶內二次發酵的版本負責頂端。這個類別產量不大，但在吸引新飲者方面的貢獻卻大得不成比例。"} }
        ] }
      ]
    },

    { t:"section", id:"technique",
      title:{ en:"The technical problem", ja:"技術的な難所", zh:"技術上的難處" }, jp:"清澄と圧",
      body:[
        { t:"p", text:{
          en:"Making sake fizz is easy. Making it fizz, stay clear, and stay legally sake at the same time is what took two decades, and the reason is that sake is not wine.",
          ja:"日本酒を発泡させること自体は難しくない。発泡させ、澄ませ、しかも法的に清酒であり続けさせること——これに二十年を要した。理由は、日本酒がワインではないからである。",
          zh:"讓清酒起泡並不難。難的是讓它同時起泡、保持清澈，並在法律上仍是清酒——這耗費了二十年，原因在於清酒不是葡萄酒。" } },
        { t:"ul", items:[
          { en:"<strong>Nothing may be added.</strong> Champagne's <em>liqueur de tirage</em> and <em>dosage</em> are sugar solutions added to the bottle. Add sugar to sake and it is no longer seishu under Japanese law, so the second fermentation must run on residual sugar the sake already contains — which means stopping the first fermentation at exactly the right point, months earlier.",
            ja:"<strong>何も加えてはならない。</strong>シャンパンのティラージュやドサージュは、瓶に加える糖の溶液である。日本酒に糖を加えれば、法的にもはや清酒ではない。したがって二次発酵は、その酒がすでに含んでいる残糖で進めねばならない。それは数か月前、一次発酵をまさに正しい点で止めておくことを意味する。",
            zh:"<strong>不得添加任何東西。</strong>香檳的 tirage 與 dosage 都是加入瓶中的糖液。若在清酒中加糖，依日本法它便不再是清酒；因此二次發酵必須仰賴酒中原有的殘糖——這意味著在數月之前，就得把第一次發酵停在恰恰正確的那一點。" },
          { en:"<strong>Sake is far more prone to haze than wine.</strong> It carries more protein and more fine solids, and the fining agents a winemaker would reach for are either unavailable or would change the sake. Getting a bottle-fermented sake to disgorge clear is a materials problem, not a procedure problem.",
            ja:"<strong>日本酒はワインよりはるかに濁りやすい。</strong>たんぱく質も微細な固形分も多く、ワイン造りが手を伸ばす清澄剤は、使えないか、あるいは酒を変えてしまう。瓶内二次発酵の酒を澄んだまま澱抜きすることは、手順の問題ではなく素材の問題である。",
            zh:"<strong>清酒遠比葡萄酒容易生濁。</strong>它含有更多蛋白質與細微固形物，而釀酒師慣用的澄清劑要不是無法使用，就是會改變酒質。要讓瓶內二次發酵的清酒除渣後仍澄澈，這是材料問題，而非程序問題。" },
          { en:"<strong>Pressure and alcohol fight each other.</strong> Yeast working in a sealed bottle is under both alcohol stress and rising CO₂ pressure, and above a certain point it stops. Reaching 3.5 bar while ending above 10% alcohol requires a yeast selected for exactly this and a starting sugar figure calculated to the gram.",
            ja:"<strong>圧とアルコールは互いに逆らう。</strong>密栓した瓶のなかで働く酵母は、アルコールと上昇する炭酸ガスの圧の双方に晒され、ある点を超えれば止まる。アルコール10%以上を保ちながら3.5バールへ達するには、まさにそのために選ばれた酵母と、グラム単位で計算された開始時の糖が要る。",
            zh:"<strong>壓力與酒精彼此對抗。</strong>在密封瓶中工作的酵母同時承受酒精壓力與不斷升高的二氧化碳壓力，超過某一點便會停止。要在酒精維持 10% 以上的同時達到 3.5 巴，需要專為此挑選的酵母，以及計算到公克的起始糖量。" },
          { en:"<strong>Bottles fail.</strong> Champagne bottles are engineered for six bar and sake bottles historically were not. A serious sparkling programme means buying proper pressure bottles, crown caps or wire cages, and accepting that some will still break in the cellar.",
            ja:"<strong>瓶は割れる。</strong>シャンパンの瓶は六バールに耐えるよう設計されているが、日本酒の瓶は歴史的にそうではなかった。本格的に発泡に取り組むとは、耐圧の瓶と王冠や針金の口金を買い、それでも貯蔵庫でいくつかは割れると受け入れることである。",
            zh:"<strong>瓶子會爆。</strong>香檳瓶是為六巴而設計，清酒瓶歷來則不是。認真投入氣泡酒，意味著採購真正的耐壓瓶、皇冠蓋或鐵絲籠，並接受仍會有一些在酒窖裡碎裂。" }
        ] },
        { t:"note", label:{en:"Reading a sparkling label",ja:"発泡酒の表示を読む",zh:"判讀氣泡酒的標示"}, text:{
          en:"<strong>炭酸ガス含有</strong> means gas was injected — legal, declared, and the cheapest method. <strong>瓶内二次発酵</strong> means bottle-fermented. <strong>活性にごり</strong> means it is still alive and under building pressure. The AWA SAKE mark means all six criteria have been verified externally. If none of these appears, the sake is either tank-method or lightly gassy from being bottled young, and the latter is usually a virtue rather than a claim.",
          ja:"<strong>炭酸ガス含有</strong>はガスを注入したことを意味する。合法で、表示され、最も安価な方法である。<strong>瓶内二次発酵</strong>は瓶のなかで発酵させたということ。<strong>活性にごり</strong>はいまも生きており、圧が上がり続けているということである。AWA SAKEの標は、六つの基準が外部で確認されたことを意味する。いずれの表示もなければ、それはタンク方式か、若く瓶詰めしたことによる微発泡である。そして後者はたいてい、謳い文句ではなく美点である。",
          zh:"<strong>炭酸ガス含有</strong>代表注入了氣體——合法、已標示，也是最便宜的方法。<strong>瓶内二次発酵</strong>代表在瓶中發酵。<strong>活性にごり</strong>代表它仍活著、壓力仍在累積。AWA SAKE 標章代表六項基準皆經外部驗證。若以上皆無，那麼它要不是槽內加氣法，就是因年輕裝瓶而帶微氣——而後者通常是優點，而非宣傳話術。" } }
      ]
    },

{ t:"section", id:"routes-compared",
      title:{ en:"The routes to bubbles, compared", ja:"泡へ至る道の比較", zh:"通往氣泡的路徑比較" }, jp:"方式の比較",
      body:[
        { t:"p", text:{
          en:"Every sparkling sake gets its gas one of four ways, and the choice determines pressure, clarity, alcohol, price and how the bottle behaves when you open it. The differences are large enough that &#8220;sparkling sake&#8221; is not really one category.",
          ja:"発泡清酒はいずれも、四つのうちのいずれかの仕方でガスを得る。その選択が、圧力、澄み具合、アルコール、価格、そして開栓時の振る舞いを決める。差は大きく、「発泡清酒」は実のところ一つの区分ではない。",
          zh:"每一款氣泡清酒的氣體都來自四種方式之一，而這個選擇決定了壓力、澄清度、酒精、價格，以及開瓶時的表現。差異之大，使得「氣泡清酒」其實不能算是一個類別。" } },

        { t:"table",
          cols:[{en:"Route",ja:"方式",zh:"方式"},{en:"Japanese",ja:"表記",zh:"日文"},{en:"Pressure",ja:"圧力",zh:"壓力"},{en:"Typical ABV",ja:"アルコール",zh:"典型酒精度"},{en:"What you get",ja:"得られるもの",zh:"得到什麼"}],
          jpCols:[1],
          rows:[
            [{en:"Bottle refermentation",ja:"瓶内二次発酵",zh:"瓶內二次發酵"},"瓶内二次発酵",
             {en:"High — several atmospheres",ja:"高い。数気圧",zh:"高——數個大氣壓"},
             {en:"11–14%",ja:"11〜14%",zh:"11–14%"},
             {en:"Fine, persistent bead and real fermentation complexity. Unless the yeast is removed by disgorging, the bottle is cloudy and the sediment moves when handled. This is the route the premium producers take, and it is the only one that behaves like Champagne in the glass.",
              ja:"細かく持続する泡と、発酵に由来する本物の複雑さ。澱を抜く工程を経なければ瓶は濁り、扱えば澱が動く。高級品の作り手が採る道であり、杯の中でシャンパーニュのように振る舞う唯一の方式である。",
              zh:"氣泡細緻而持久，並帶有真正源自發酵的複雜度。除非以除渣（吐泥）去除酵母，否則酒液混濁，一經搬動酒渣便會翻起。這是高階生產者採取的路徑，也是唯一在杯中表現得像香檳的方式。"}],
            [{en:"Live nigori",ja:"活性にごり",zh:"活性濁酒"},"活性にごり",
             {en:"Variable and often high",ja:"不定。しばしば高い",zh:"不定，且往往偏高"},
             {en:"12–17%",ja:"12〜17%",zh:"12–17%"},
             {en:"Bottled while still fermenting, unpasteurised, with rice solids and live yeast. Cloudy, yeasty, sometimes fiercely gassy, and genuinely alive — pressure keeps rising in the bottle, which is why these are shipped cold and often have a vented cap. The most exciting and least predictable category in sake.",
              ja:"発酵の途中で詰め、火入れせず、米の固形分と生きた酵母を含む。濁り、酵母の香を帯び、時に激しく発泡し、そして本当に生きている——瓶の中で圧は上がり続ける。冷蔵で流通し、ガス抜きの栓を持つことが多いのはそのためである。日本酒で最も刺激的で、最も予測のつかない区分である。",
              zh:"在仍在發酵時裝瓶，不經火入，含有米的固形物與活酵母。混濁、帶酵母香，有時氣勢猛烈，而且是真的活著——瓶內壓力持續上升，因此這類酒以冷藏配送，且常配備排氣瓶蓋。這是清酒中最刺激、也最難預測的類別。"}],
            [{en:"Injected gas",ja:"炭酸ガス注入",zh:"注入二氧化碳"},"ガス充填",
             {en:"Set by the machine",ja:"機械が決める",zh:"由機器設定"},
             {en:"5–8% commonly",ja:"多くは5〜8%",zh:"多為 5–8%"},
             {en:"Clean, cheap, consistent and clear. Usually a low-alcohol, sweeter, mass-market product aimed at people who do not otherwise drink sake — and, on its own terms, often perfectly pleasant. The bead is coarser and dies faster.",
              ja:"清澄で、安く、均質である。多くは低アルコールでやや甘く、普段は日本酒を飲まない層に向けた量販品であり——その土俵で言えば、しばしば十分に感じがよい。泡は粗く、早く消える。",
              zh:"乾淨、便宜、穩定且澄清。通常是低酒精、偏甜的大眾市場產品，針對平常不喝清酒的人——就其設定而言，往往相當討喜。氣泡較粗，也消失得較快。"}],
            [{en:"Retained ferment gas",ja:"微発泡（自然残存）",zh:"微氣泡（自然殘留）"},"微発泡",
             {en:"Low — a prickle",ja:"低い。舌に触れる程度",zh:"低——舌尖的刺激感"},
             {en:"14–16%",ja:"14〜16%",zh:"14–16%"},
             {en:"Not a sparkling sake at all, strictly, but an ordinary nama bottled early enough that a little dissolved carbon dioxide from the main ferment survives. It reads as freshness rather than as fizz, and it fades within days of opening.",
              ja:"厳密には発泡清酒ではなく、主発酵由来の炭酸ガスが少し残るほど早く詰められた普通の生酒である。泡というより鮮度として感じられ、開栓後は数日で消える。",
              zh:"嚴格說並非氣泡清酒，而是裝瓶夠早、主發酵殘留的少量二氧化碳得以留存的一般生酒。它讀起來是鮮度而非氣泡，開瓶後幾天內就會消散。"}]
          ] },

        { t:"scale", title:{ en:"Roughly where the pressure sits", ja:"圧力のおおよその位置", zh:"壓力大致落在何處" },
          segs:[
            { label:{en:"Micro-fizz",ja:"微発泡",zh:"微氣泡"}, w:14, fill:"var(--h-snow)" },
            { label:{en:"Gas-injected",ja:"ガス充填",zh:"注氣"}, w:20, fill:"var(--h-water)" },
            { label:{en:"Live nigori",ja:"活性にごり",zh:"活性濁酒"}, w:30, fill:"var(--h-rice)" },
            { label:{en:"Bottle-fermented",ja:"瓶内二次発酵",zh:"瓶內二次發酵"}, w:36, fill:"var(--h-amber)" }
          ],
          ticks:["0","1","2","3+ atm"],
          note:{ en:"Indicative only. Bottle-fermented sparkling sake made to the association standard is pressurised comparably to sparkling wine; live nigori is unregulated and can exceed it.",
            ja:"目安である。協会基準による瓶内二次発酵の発泡清酒は、スパークリングワインと同程度の圧を持つ。活性にごりに基準はなく、それを超えることもある。",
            zh:"僅供參考。依協會標準製作的瓶內二次發酵氣泡清酒，壓力與氣泡酒相當；活性濁酒沒有規範，可能超過。" } }
      ] },

    { t:"section", id:"labelreading",
      title:{ en:"Reading a sparkling label", ja:"発泡酒のラベルを読む", zh:"讀懂氣泡酒的酒標" }, jp:"表示",
      body:[
        { t:"p", text:{
          en:"There is no legal category called sparkling sake, which means the label has to be read for clues rather than for a badge. Three things tell you what is in the bottle.",
          ja:"発泡清酒という法的な区分は存在しない。ゆえにラベルは、認証を探すのではなく手がかりとして読まねばならない。瓶の中身を告げるものは三つある。",
          zh:"法律上並沒有「氣泡清酒」這個類別，因此讀酒標得靠線索，而不是找標章。有三樣東西會告訴你瓶裡是什麼。" } },

        { t:"defs", items:[
          { term:{ en:"The品目 line", ja:"品目の欄", zh:"品目欄" }, jp:"清酒／その他の醸造酒／リキュール", romaji:"seishu / sonota / liqueur",
            def:{ en:"If it says 清酒 the contents meet the legal definition of sake. If it says その他の醸造酒 or リキュール, something has taken it outside that definition — most often added sugar or fruit, sometimes an alcohol level or an ingredient the seishu definition does not permit. Neither is a mark against the drink, but the second means you are not, legally speaking, drinking sake.",
              ja:"清酒とあれば、中身は法的な清酒の定義を満たす。その他の醸造酒、あるいはリキュールとあれば、何かがその定義の外へ出ている——多くは糖や果実の添加、時にアルコール分や、清酒の定義が許さない原料である。いずれもその酒への非難ではないが、後者は、法的に言えば清酒を飲んでいないということである。",
              zh:"若寫「清酒」，內容物即符合清酒的法律定義。若寫「その他の醸造酒」或「リキュール」，代表有什麼超出了該定義——多半是加糖或加果實，有時是酒精度或清酒定義所不許的原料。兩者都不構成對這款酒的貶低，但後者意味著：就法律而言，你喝的不是清酒。" } },
          { term:{ en:"Gas language", ja:"ガスの表記", zh:"氣體的表記" }, jp:"瓶内二次発酵／炭酸ガス含有", romaji:"binnai niji hakkō",
            def:{ en:"瓶内二次発酵 means a second fermentation happened in this bottle. 炭酸ガス含有 or 発泡性 without that phrase usually means the gas was added. Producers who ferment in the bottle say so, because it is the expensive route; silence on the point is itself informative.",
              ja:"瓶内二次発酵とあれば、この瓶の中で二次発酵が起きている。その語のない炭酸ガス含有や発泡性は、通常ガスが加えられたことを意味する。瓶内発酵させた作り手はそう明記する。高くつく道だからである。この点についての沈黙は、それ自体が情報である。",
              zh:"寫「瓶内二次発酵」代表二次發酵是在這支瓶子裡完成的。若只寫「炭酸ガス含有」或「発泡性」而沒有那句話，通常代表氣體是後加的。做瓶內發酵的生產者一定會寫出來，因為那是昂貴的路徑；在這一點上的沉默，本身就是資訊。" } },
          { term:{ en:"Handling instructions", ja:"取扱いの指示", zh:"操作指示" }, jp:"要冷蔵・開栓注意", romaji:"yō reizō / kaisen chūi",
            def:{ en:"開栓注意 — take care on opening — is not boilerplate. On a live nigori it means the bottle is under real and unknown pressure and the contents will climb out if you rush. Combined with 要冷蔵 it identifies the unpasteurised, still-fermenting bottles, which are the ones worth buying cold and drinking soon.",
              ja:"開栓注意は決まり文句ではない。活性にごりにおいては、瓶が現実の、そして未知の圧を持ち、急げば中身が這い上がってくるという意味である。要冷蔵と併記されていれば、火入れせずなお発酵中の瓶であり、冷えたものを買って早く飲む価値のある瓶である。",
              zh:"「開栓注意」不是罐頭文字。在活性濁酒上，它意味著瓶內有真實而未知的壓力，操之過急內容物就會爬出來。若同時標註「要冷蔵」，那就是未經火入、仍在發酵的瓶子——正是值得買冷藏品並儘早喝掉的那種。" } }
        ] },

        { t:"panel", title:{ en:"Opening an active bottle without losing half of it", ja:"活性の瓶を半分こぼさずに開ける", zh:"開活性酒瓶而不損失一半" },
          body:[
            { t:"ol", items:[
              { en:"Chill it hard and leave it upright for several hours. Cold liquid holds gas; an upright bottle keeps the sediment off the neck.",
                ja:"よく冷やし、数時間は立てて置く。冷えた液はガスを抱え、立てた瓶は澱を首から遠ざける。",
                zh:"充分冰鎮，並直立靜置數小時。低溫的液體能留住氣體，直立則讓酒渣遠離瓶頸。" },
              { en:"Open it over a sink, with a glass already poured out and waiting.",
                ja:"流しの上で開ける。杯はあらかじめ用意しておく。",
                zh:"在水槽上方開瓶，並事先備好要斟入的酒杯。" },
              { en:"Loosen the cap a fraction, let the hiss run, and re-tighten. Repeat five or six times over a minute. Each release drops the pressure a little without disturbing the sediment.",
                ja:"栓をわずかに緩め、音が収まるのを待ち、また締める。一分ほどの間に五、六度繰り返す。一度ごとに、澱を乱さずに圧が少しずつ下がる。",
                zh:"把瓶蓋鬆開一點點，讓氣聲跑完，再旋緊。一分鐘內重複五、六次。每一次釋放都在不擾動酒渣的情況下略微降壓。" },
              { en:"If foam starts climbing, close it and wait. It will subside. Never shake, never warm it to &#8220;calm it down&#8221;, and never open one that has been in a bag on a train.",
                ja:"泡が上がり始めたら閉めて待つ。必ず収まる。振ってはならず、落ち着かせようとして温めてはならず、電車の鞄に入っていた瓶を開けてはならない。",
                zh:"如果泡沫開始往上爬，就關上等待，它會退下去。切勿搖晃，切勿為了「讓它平靜」而加溫，也切勿開一支剛在電車上被裝在袋子裡晃過的酒。" },
              { en:"Pour the first glass clear off the top, then decide whether to roll the bottle gently to fold the lees back in. Both versions are legitimate and they taste quite different.",
                ja:"最初の一杯は上澄みを注ぎ、そのうえで、瓶を静かに転がして澱を戻すかを決める。どちらも正当であり、味はかなり違う。",
                zh:"第一杯先倒上層清澈的部分，然後再決定要不要輕輕滾動瓶身把酒渣拌回去。兩種喝法都成立，味道差別不小。" }
            ] }
          ] }
      ] },

    { t:"section", id:"world-context",
      title:{ en:"Against the world's other sparkling drinks", ja:"世界の他の発泡酒と較べて", zh:"與世界其他氣泡酒相比" }, jp:"比較",
      body:[
        { t:"compare", cols:3, items:[
          { title:{ en:"Champagne method", ja:"シャンパーニュ方式", zh:"香檳法" }, jp:"瓶内二次発酵",
            text:{ en:"Same principle, harder problem.", ja:"原理は同じ、問題はより難しい。", zh:"原理相同，問題更難。" },
            body:[
              { t:"p", text:{
                en:"Both add sugar and yeast to a finished base and ferment it in the sealed bottle. The difference is that wine arrives at the process already clear, whereas sake must be pressed and settled first, and any residual kōji enzyme will keep working on starch and shift the sugar balance during the second ferment. Riddling and disgorging work on sake, but the sediment is finer and the yield loss is higher.",
                ja:"いずれも、出来上がった原酒に糖と酵母を加え、密栓した瓶で発酵させる。違いは、ワインがすでに澄んだ状態でこの工程に入るのに対し、日本酒は先に搾って澱を落とさねばならず、また麹の酵素が残れば澱粉に働き続け、二次発酵中に糖の均衡を動かすことである。動瓶と澱抜きは日本酒でも機能するが、澱はより細かく、歩留まりの損失は大きい。",
                zh:"兩者都是在完成的基酒中加入糖與酵母，於密封瓶中發酵。差別在於葡萄酒進入這道工序時已經澄清，而清酒必須先壓榨、沉降；且若殘留麴酵素，它會持續作用於澱粉，在二次發酵期間改變糖的平衡。轉瓶與除渣在清酒上同樣可行，但酒渣更細，損耗率也更高。" } }
            ] },
          { title:{ en:"Pét-nat", ja:"ペティヤン・ナチュレル", zh:"Pét-nat" }, jp:"活性にごり",
            text:{ en:"The closest cousin.", ja:"最も近い親類。", zh:"最接近的親戚。" },
            body:[
              { t:"p", text:{
                en:"A live nigori is structurally a pét-nat: bottled mid-ferment, unfiltered, cloudy, unpredictable, and prized for exactly that. Both categories ask the drinker to accept variation between bottles as part of the deal, and both have gained an audience for reasons that are as much cultural as sensory.",
                ja:"活性にごりは構造上ペティヤン・ナチュレルである——発酵の途中で詰め、濾さず、濁り、予測がつかず、そしてまさにそれゆえに貴ばれる。いずれの区分も、瓶ごとの差を取引の一部として受け入れることを飲み手に求め、いずれも、官能的であると同じくらい文化的な理由で聴衆を得た。",
                zh:"活性濁酒在結構上就是 pét-nat：發酵途中裝瓶、不過濾、混濁、難以預測，而且正因如此才受推崇。兩個類別都要求飲者把瓶與瓶之間的差異當作交易的一部分接受下來；而兩者贏得擁護者的理由，文化成分不亞於感官成分。" } }
            ] },
          { title:{ en:"Tank method", ja:"シャルマ方式", zh:"大槽法" }, jp:"タンク二次発酵",
            text:{ en:"Rare in sake, and instructive.", ja:"日本酒では稀で、示唆に富む。", zh:"清酒中罕見，卻具啟發性。" },
            body:[
              { t:"p", text:{
                en:"Prosecco's second fermentation happens in a pressurised tank and the wine is filtered under pressure into the bottle, which is cheaper than bottle fermentation and gives a clear result. Almost nobody does this with sake, and the reason is revealing: the volumes are too small to justify the plant. Sake's sparkling category is shaped less by what is technically possible than by how small its producers are.",
                ja:"プロセッコの二次発酵は加圧タンクで行われ、加圧下で濾過して瓶へ詰める。瓶内発酵より安く、澄んだ結果を得る。日本酒でこれを行う者はほとんどいない。その理由は示唆的である——設備を正当化するには量が小さすぎるのである。日本酒の発泡の区分を形づくっているのは、技術的な可能性よりも、その作り手たちの小ささである。",
                zh:"Prosecco 的二次發酵在加壓槽中進行，並在加壓狀態下過濾裝瓶，比瓶內發酵便宜且成品澄清。幾乎沒有人以此法做清酒，原因很說明問題：產量太小，撐不起這套設備。清酒的氣泡類別，與其說是由技術可能性塑造的，不如說是由其生產者的規模之小所塑造的。" } }
            ] }
        ] },

        { t:"note", text:{
          en:"For the fermentation chemistry these routes share, see <a href=\"process.html\">Brewing Process</a>; for what pressure and cold do to aroma perception, see <a href=\"serving.html\">Temperature &amp; Vessels</a>.",
          ja:"これらの道が共有する発酵の化学は<a href=\"process.html\">製造工程</a>を、圧と冷たさが香りの知覚に及ぼす作用は<a href=\"serving.html\">温度と器</a>を参照。",
          zh:"這些路徑共通的發酵化學見<a href=\"process.html\">釀造流程</a>；壓力與低溫如何影響香氣感知，見<a href=\"serving.html\">溫度與酒器</a>。" } }
      ] },

    { t:"related", items:[
      { href:"process.html", why:{ en:"The fermentation the bubbles are left over from.", ja:"泡がそこから残された発酵。", zh:"泡泡是從哪一段發酵留下來的。" } },
      { href:"styles.html", why:{ en:"The other things a nigori or a nama is doing.", ja:"にごりや生がなしている他のこと。", zh:"濁酒與生酒還在做的其他事情。" } },
      { href:"storage.html", why:{ en:"Why a live bottle is the one most likely to be ruined.", ja:"生きた一本が最も損なわれやすい理由。", zh:"為什麼活著的那一瓶最容易被毀掉。" } },
      { href:"serving.html", why:{ en:"The glass and the temperature these want.", ja:"これらが求める器と温度。", zh:"它們想要的杯子與溫度。" } }
    ] }
  ]
};


/* ---- ------------------------------------------- packaging */
SAKE.pages["packaging"] = {
  kicker: { en: "Understanding · 11", ja: "理解 · 11", zh: "理解 · 11" },
  title:  { en: "Bottles, Cans & Barrels", ja: "瓶・缶・樽", zh: "瓶、罐與樽" },
  jp: "容器と包装",
  lede: {
    en: "Sake is sold in a set of sizes that make no sense in metric and perfect sense in a measuring system abolished in 1959. The bottle on the shelf is a survival of the shakkanhō, the cup in the convenience store was designed in 1963 to solve a marketing problem, and the barrel outside the shrine is not a container at all. Packaging is where the industry's history is most visible and least remarked on.",
    ja: "日本酒は、メートル法では意味をなさず、一九五九年に廃された計量の体系においては完全に筋の通る、一組の大きさで売られている。棚の瓶は尺貫法の生き残りであり、コンビニの杯は一九六三年に売り方の問題を解くために設計されたものであり、社の前の樽はそもそも容器ではない。包装は、この産業の歴史が最も目に見え、そして最も語られない場所である。",
    zh: "清酒以一組在公制中毫無道理、在一九五九年被廢止的計量體系中卻完全合理的容量出售。貨架上的瓶子是尺貫法的遺存，便利商店裡的杯裝是一九六三年為解決行銷問題而設計的，而神社前的酒樽根本不是容器。包裝，是這個產業的歷史最顯眼、卻最少被談論的地方。"
  },
  body: [

    { t:"section", id:"measures",
      title:{ en:"The measures behind the sizes", ja:"大きさの背後の尺度", zh:"容量背後的度量" }, jp:"尺貫法",
      body:[
        { t:"p", text:{
          en:"Every sake volume you will meet is a multiple or a fraction of the <em>gō</em>, a unit of about 180 millilitres fixed in the seventeenth century and formally retired as a legal measure in 1959. It did not go away. It survives in the size of a rice cooker cup, in the way a restaurant sells sake, and in every bottle on the shelf.",
          ja:"出会うあらゆる日本酒の容量は、合の倍数か分数である。合はおよそ百八十ミリリットルの単位であり、十七世紀に定められ、昭和三十四年（1959）に法定の計量としては正式に退いた。それは消えなかった。炊飯の合升に、料理屋の酒の売り方に、そして棚のあらゆる瓶に生き残っている。",
          zh:"你會遇到的每一個清酒容量，都是「合」的倍數或分數。合約為一百八十毫升，於十七世紀確立，並在一九五九年正式退出法定計量。但它並沒有消失：它活在電鍋量米杯的大小裡、活在餐廳賣酒的方式裡，也活在貨架上的每一個瓶子裡。" } },
        { t:"table",
          caption:{ en:"The shakkanhō volume ladder, and what still uses it", ja:"尺貫法の容量の階梯と、今なおそれを用いるもの", zh:"尺貫法的容量階梯，以及至今仍在使用它的事物" },
          cols:[{ en:"Unit", ja:"単位", zh:"單位" }, { en:"Kanji", ja:"漢字", zh:"漢字" }, { en:"Metric", ja:"メートル法", zh:"公制" }, { en:"Where you still meet it", ja:"今も出会う場所", zh:"你至今仍會遇到它的地方" }],
          numCols:[2], keyCol:0,
          rows:[
            [{ en:"shaku", ja:"しゃく", zh:"勺" }, "勺", "18 mL", { en:"A tasting pour at a competition; the smallest ochoko.", ja:"鑑評会の利き猪口一杯、最も小さな猪口。", zh:"鑑評會的一口品飲量；最小的豬口杯。" }],
            [{ en:"gō", ja:"ごう", zh:"合" }, "合", "180 mL", { en:"The standard restaurant serve — <em>ichi-gō</em>, one tokkuri. Also the rice cooker cup, and the unit in which alcohol intake is counted in Japanese health advice.", ja:"料理屋の標準の一杯——一合、徳利一本である。炊飯の合升でもあり、日本の健康の助言において酒量を数える単位でもある。", zh:"餐廳的標準供應量——一合，即一支德利。它同時也是電鍋的量米杯，以及日本健康建議中計算飲酒量的單位。" }],
            [{ en:"shō", ja:"しょう", zh:"升" }, "升", "1.8039 L", { en:"The isshōbin — the big bottle. Ten gō.", ja:"一升瓶、すなわち大瓶である。十合。", zh:"一升瓶——大瓶。十合。" }],
            [{ en:"to", ja:"と", zh:"斗" }, "斗", "18 L", { en:"A small barrel; the unit brewers use when talking about tank volumes in traditional terms.", ja:"小さな樽。造り手が槽の容量を伝統の言い方で語るときの単位である。", zh:"小型酒樽；釀造者以傳統說法談論槽容量時所用的單位。" }],
            [{ en:"koku", ja:"こく", zh:"石" }, "石", "180.39 L", { en:"The unit a brewery's annual output is still quoted in, and the same unit in which a feudal domain's wealth was measured in rice. A thousand-koku brewery makes about 180,000 litres a year.", ja:"蔵の年間の生産が今なお示される単位であり、藩の豊かさが米で測られたのと同じ単位である。千石の蔵は年におよそ十八万リットルを造る。", zh:"至今仍用來標示酒藏年產量的單位，也是過去以稻米衡量藩國財富時所用的同一單位。一家「千石」規模的酒藏，年產約十八萬公升。" }]
          ] },
        { t:"defs", items:[
          { term:{ en:"Why the bottle is 1.8 litres", ja:"瓶が一・八リットルである理由", zh:"為何瓶身是一點八公升" }, jp:"一升瓶", romaji:"isshōbin",
            def:{ en:"Until the Meiji period sake was sold from a cask into whatever vessel the customer brought, which made short measure and quiet dilution easy and common. Glass bottles standardised to exactly one shō appeared around 1901, and Gekkeikan in Fushimi set up a bottling plant at the end of that decade. The bottle was, first of all, an anti-fraud device: a sealed, fixed, verifiable volume. The taste for it as a container came second.",
              ja:"明治まで、酒は樽から客の持参した器へ量り売りされた。それは目減りと静かな水増しを容易にし、また常のことでもあった。ちょうど一升に規格化された硝子の瓶は明治三十四年（1901）ごろに現れ、伏見の月桂冠はその十年の終わりに瓶詰の工場を設けた。瓶はまず何より不正を防ぐ道具であった。封じられ、定められ、確かめうる容量である。容器としての好みは二の次であった。",
              zh:"直到明治時期，清酒都是從酒桶秤量倒進客人自備的容器裡，這使得短斤少兩與暗中摻水既容易又普遍。規格化為恰好一升的玻璃瓶約在一九〇一年出現，伏見的月桂冠則在那個十年的末尾設立了裝瓶工廠。瓶子首先是一種防弊裝置：一個密封、固定、可查驗的容量。把它當作容器來喜愛，是後來的事。" } },
          { term:{ en:"And why 720 mL", ja:"そして七百二十ミリリットルの理由", zh:"以及為何是七百二十毫升" }, jp:"四合瓶", romaji:"yongōbin",
            def:{ en:"Four gō — two fifths of the big bottle. It became the dominant premium format as households shrank and as sake moved from a daily staple bought by the crate to an occasional bottle chosen for itself. It also sits close enough to the 750 mL wine bottle that it fits wine shelving, wine gift boxes and wine shipping cases, which is not a coincidence any more.",
              ja:"四合、すなわち大瓶の五分の二である。世帯が小さくなり、酒が箱で買う日々の常備品から、それ自体のために選ばれる時折の一本へ移るにつれ、これが高級の主たる形となった。また七百五十ミリリットルの葡萄酒の瓶に十分近いため、葡萄酒の棚にも、葡萄酒の化粧箱にも、葡萄酒の輸送の函にも収まる。これはもはや偶然ではない。",
              zh:"四合——大瓶的五分之二。隨著家庭規模縮小，以及清酒從整箱採買的日常必需品，轉為為其自身而挑選的偶爾一瓶，這個規格成為高級酒的主流。它同時也與七百五十毫升的葡萄酒瓶足夠接近，因此能放進葡萄酒貨架、葡萄酒禮盒與葡萄酒運輸箱——而這如今已不再是巧合。" } }
        ] }
      ] },

    { t:"section", id:"formats",
      title:{ en:"Every format, and what it is for", ja:"すべての形と、その用途", zh:"每一種規格及其用途" }, jp:"容器の種類",
      body:[
        { t:"figure",
          caption:{
            en:"The standard containers, drawn to the same scale. The two on the left are the traditional measures the trade still runs on; the wine bottle at the right is there because 720 and 750 millilitres are close enough to be confused and far enough apart to matter on a shelf and in a case.",
            ja:"標準の容器を、同じ縮尺で描いたもの。左の二つは商いがなお拠って立つ伝えの量であり、右の葡萄酒の瓶がそこに在るのは、七百二十と七百五十ミリリットルが、取り違えるほど近く、そして棚と箱の上では効くほど離れているからである。",
            zh:"標準容器，以同一比例尺繪出。左邊兩者是這門生意至今仍賴以運作的傳統計量；右邊那支葡萄酒瓶之所以在場，是因為七百二十與七百五十毫升近到會被搞混，卻又遠到在貨架上與箱子裡足以造成差別。" },
          svg: function (lang, L) {
            var W = 760, H = 380, BASE = 300, SC = 0.62;
            var bottles = [
              { h:395, d:105, ml:1800, jp:"一升瓶", f:"#CDBFA2",
                n:{ en:"isshōbin", ja:"いっしょうびん", zh:"一升瓶" },
                d2:{ en:"the trade's unit", ja:"商いの単位", zh:"這門生意的單位" } },
              { h:300, d:72,  ml:720,  jp:"四合瓶", f:"#DACFB8",
                n:{ en:"yongōbin", ja:"しごうびん", zh:"四合瓶" },
                d2:{ en:"the retail default", ja:"小売の既定", zh:"零售的預設" } },
              { h:238, d:62,  ml:300,  jp:"三百", f:"#E2D8C6",
                n:{ en:"sanbyaku", ja:"さんびゃく", zh:"三百毫升" },
                d2:{ en:"for one evening", ja:"一夕のため", zh:"為了一個晚上" } },
              { h:118, d:60,  ml:180,  jp:"カップ", f:"#E7DFD2",
                n:{ en:"one gō", ja:"一合", zh:"一合" },
                d2:{ en:"a station platform", ja:"駅のホーム", zh:"車站月台" } },
              { h:300, d:76,  ml:750,  jp:"", f:"#DDE5E8",
                n:{ en:"wine, 750", ja:"葡萄酒 750", zh:"葡萄酒 750" },
                d2:{ en:"for comparison", ja:"比べのために", zh:"供比較" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<line x1="30" y1="' + BASE + '" x2="' + (W - 30) + '" y2="' + BASE + '" stroke="#B4AC9C"/>';
            var x = 74;
            for (var i = 0; i < bottles.length; i++) {
              var b = bottles[i];
              var hh = b.h * SC, dd = b.d * SC;
              var neckW = Math.max(11, dd * 0.30), neckH = hh * (b.ml === 180 ? 0.16 : 0.30), shoulder = hh * 0.10;
              var bodyH = hh - neckH - shoulder;
              var cx = x + dd / 2, top = BASE - hh;
              if (i === 4) { x += 34; cx = x + dd / 2; }
              /* body */
              s += '<rect x="' + x + '" y="' + (BASE - bodyH) + '" width="' + dd + '" height="' + bodyH + '" fill="' + b.f + '" stroke="#B4AC9C"/>';
              /* shoulder: straight-sided trapezoid, no curves */
              s += '<path d="M' + x + ' ' + (BASE - bodyH) + ' L' + (cx - neckW / 2) + ' ' + (BASE - bodyH - shoulder) +
                   ' L' + (cx + neckW / 2) + ' ' + (BASE - bodyH - shoulder) + ' L' + (x + dd) + ' ' + (BASE - bodyH) + ' Z" fill="' + b.f + '" stroke="#B4AC9C"/>';
              /* neck */
              s += '<rect x="' + (cx - neckW / 2) + '" y="' + top + '" width="' + neckW + '" height="' + (neckH + 1) + '" fill="' + b.f + '" stroke="#B4AC9C"/>';
              /* labels */
              s += '<text x="' + cx + '" y="' + (top - 26) + '" text-anchor="middle" font-size="15" fill="#201E1B">' + b.ml + '</text>';
              s += '<text x="' + cx + '" y="' + (top - 13) + '" text-anchor="middle" font-size="9" fill="#8B857C">mL</text>';
              if (b.jp) s += '<text x="' + cx + '" y="' + (BASE + 20) + '" text-anchor="middle" font-size="13" fill="#201E1B">' + b.jp + '</text>';
              s += '<text x="' + cx + '" y="' + (BASE + (b.jp ? 35 : 20)) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(b.n) + '</text>';
              s += '<text x="' + cx + '" y="' + (BASE + (b.jp ? 49 : 34)) + '" text-anchor="middle" font-size="9.5" fill="#ADA79E">' + L(b.d2) + '</text>';
              x += dd + 60;
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "一升は十合であり、四合瓶はその十分の四である。いずれの数も尺貫法から来ており、公制へ改まった今なお残っている。"
                  : lang === "zh" ? "一升為十合，四合瓶即其十分之四。這些數字都來自尺貫法，即使改用公制之後仍然留存。"
                  : "One shō is ten gō, and the 720 bottle is four of them. Both numbers come from the old measures and survived the switch to metric intact.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{ en:"Sake packaging formats in current use", ja:"現在用いられている日本酒の容器", zh:"目前使用中的清酒包裝規格" },
          cols:[{ en:"Format", ja:"容器", zh:"容器" }, { en:"Volume", ja:"容量", zh:"容量" }, { en:"What it is really for", ja:"実際の用途", zh:"實際用途" }],
          keyCol:0,
          rows:[
            [{ en:"Isshōbin", ja:"一升瓶", zh:"一升瓶" }, "1,800 mL", { en:"Restaurants, izakaya, households that drink regularly, and any brewery that wants to signal that its sake is for drinking rather than for display. Cheapest per millilitre. Returnable. Too big to finish quickly, which matters for nama.", ja:"料理屋、居酒屋、常に飲む家、そして自らの酒が飾るためではなく飲むためのものであると示したい蔵。ミリリットル当たり最も安い。返却できる。速く飲み切るには大きすぎ、それは生酒において問題となる。", zh:"餐廳、居酒屋、經常飲酒的家庭，以及任何想表明自家酒是拿來喝、而非拿來陳列的酒藏。每毫升成本最低。可回收再用。體積太大而難以快速喝完——這對生酒是個問題。" }],
            [{ en:"Yongōbin", ja:"四合瓶", zh:"四合瓶" }, "720 mL", { en:"The premium default. Almost every daiginjō and every export bottle. Small enough to finish inside a week once opened.", ja:"高級の既定である。ほとんどの大吟醸と、輸出のほぼすべての瓶。一度開けても一週のうちに飲み切れる大きさである。", zh:"高級酒的預設規格。幾乎所有大吟釀與所有出口酒瓶。開瓶後小到能在一週內喝完。" }],
            [{ en:"Half bottle", ja:"三百ミリリットル瓶", zh:"三百毫升瓶" }, "300 mL", { en:"Tasting sets, gift assortments, hotel minibars, and increasingly the format in which small breweries let people try something expensive.", ja:"利き酒の組、贈答の詰め合わせ、宿の冷蔵庫、そして小さな蔵が高価なものを試させる形として次第に増えている。", zh:"品飲組合、禮盒、飯店迷你吧，並且越來越常成為小型酒藏讓人試喝昂貴酒款的形式。" }],
            [{ en:"Cup sake", ja:"カップ酒", zh:"杯裝酒" }, "180–200 mL", { en:"Glass or plastic cup with a peel-off lid, drunk from the container. Trains, festivals, convenience stores, riversides. See below.", ja:"剥がす蓋のついた硝子か樹脂の杯であり、そのまま飲む。汽車、祭、コンビニ、河原である。下に述べる。", zh:"帶撕開式封蓋的玻璃或塑膠杯，直接就著容器喝。火車、祭典、便利商店、河邊。詳見下文。" }],
            [{ en:"Can", ja:"缶", zh:"罐裝" }, "180–300 mL", { en:"Light, unbreakable, completely lightproof, and stackable — objectively the best small container for sake and still fighting a perception that canned drinks are cheap. Used heavily for sparkling and low-alcohol styles and for aircraft and stadium sales.", ja:"軽く、割れず、光を完全に遮り、積める。客観には日本酒の小さな容器として最良でありながら、缶の飲み物は安いという見方となお戦っている。発泡や低アルコールの型、機内や競技場の販売に多く用いられる。", zh:"輕、不易破、完全遮光、可堆疊——客觀而言是清酒最好的小型容器，卻仍在與「罐裝飲料等於便宜」的印象搏鬥。大量用於氣泡與低酒精類型，以及機上與體育場的販售。" }],
            [{ en:"Paper carton", ja:"紙パック", zh:"紙盒" }, "900 mL – 3 L", { en:"The volume end of the market: light, cheap to ship, lightproof, and collapsible. A very large share of ordinary-grade sake by volume is sold this way, and almost none of it is discussed.", ja:"量の側の市場である。軽く、運びが安く、光を通さず、畳める。普通酒の量としてきわめて大きな部分がこの形で売られており、そしてそのほとんどは語られない。", zh:"市場中走量的那一端：輕、運費低、遮光、可壓扁。以容量計，普通酒中極大的一部分是以此形式售出的，而其中幾乎沒有一款被討論。" }],
            [{ en:"Bag in box", ja:"バッグ・イン・ボックス", zh:"盒中袋" }, "3–20 L", { en:"Restaurant and institutional supply, and the format most likely to grow: the bag collapses as it empties, so the sake never meets air. Technically the best storage of any format on this list.", ja:"料理屋と施設への供給であり、最も伸びうる形である。袋は空くにつれ縮み、酒は空気に触れない。この表のどの形よりも技術的には優れた保存である。", zh:"供應餐廳與機構使用，也是最可能成長的形式：袋子隨著酒被取用而塌縮，因此酒始終不接觸空氣。就技術而言，是這份清單上保存性最佳的形式。" }],
            [{ en:"Keg", ja:"樽・ケグ", zh:"桶／keg" }, "18–20 L", { en:"Stainless kegs on a dispense line, used by sake bars in Japan and increasingly by restaurants abroad, where the alternative is opening a bottle that will sit half-full for a fortnight.", ja:"注出の管につないだステンレスの樽であり、日本の酒場で、そして国外の料理店でも次第に用いられる。代わりの手立てが、半分残ったまま二週間置かれる瓶を開けることであるからである。", zh:"接上出酒管線的不鏽鋼桶，日本的清酒吧使用，海外餐廳也日益採用——因為另一個選項是開一瓶接下來兩週都只剩半瓶的酒。" }],
            [{ en:"Wooden barrel", ja:"樽", zh:"木樽" }, "18–72 L", { en:"For taruzake, where the cedar is an ingredient rather than a container, and for ceremonial komodaru. See below.", ja:"樽酒のためのものであり、そこでは杉は容器ではなく材料である。そして儀礼の菰樽のためのものである。下に述べる。", zh:"用於樽酒——在那裡，杉木是原料而非容器——以及儀式用的菰樽。詳見下文。" }]
          ] }
      ] },

    { t:"section", id:"cup",
      title:{ en:"The cup", ja:"杯", zh:"杯裝" }, jp:"カップ酒",
      body:[
        { t:"p", text:{
          en:"In 1960 a brewery in Nada started asking why young people were not drinking sake. The answers it arrived at were that sake required a vessel, required warming, required a setting, and required knowing something — four barriers that beer did not have. The product it launched in 1964 removed all four at once.",
          ja:"昭和三十五年（1960）、灘の一つの蔵が、なぜ若い人が日本酒を飲まないのかを問い始めた。辿り着いた答えは、日本酒は器を要し、燗を要し、場を要し、そして何かを知っていることを要する、というものであった。麦酒の持たぬ四つの障壁である。昭和三十九年（1964）に世に出た品は、その四つを一度に取り除いた。",
          zh:"一九六〇年，灘的一家酒藏開始追問：為什麼年輕人不喝清酒。它得到的答案是：清酒需要器皿、需要溫熱、需要場合，還需要你懂一點什麼——這是啤酒沒有的四道門檻。它在一九六四年推出的產品，一次移除了這四道門檻。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"The idea", ja:"着想", zh:"構想" }, jp:"1960–63", romaji:"", meta:{ en:"1960–1963", ja:"昭和35〜38年", zh:"1960–1963" },
            text:{ en:"The concept was a single serve of sake in a glass you drink from and throw away, sold cold from a shop rather than warmed in a restaurant. Management approved commercialisation in 1963 and outside designers settled the form and the name.",
              ja:"着想は、そこから直に飲んで捨てる硝子に、一杯分の酒を入れるというものであった。料理屋で燗をされるのではなく、店で冷えたまま売られる。昭和三十八年（1963）に商品化が決まり、外部の意匠家が形と名を定めた。",
              zh:"構想是：把一人份的清酒裝進一個可以直接就口、喝完即丟的玻璃杯，冷藏販售於商店，而不是在餐廳裡溫熱後端出。一九六三年管理層批准商品化，並由外部設計者確定了造型與名稱。" } },
          { n:2, title:{ en:"Launch", ja:"発売", zh:"上市" }, jp:"1964", romaji:"", meta:{ en:"1964, 180 mL", ja:"昭和三十九年、百八十ミリリットル", zh:"1964 年，180 毫升" },
            text:{ en:"One Cup Ozeki went on sale in the year of the Tokyo Olympics — a moment when a great deal of Japanese consumer design was being reconsidered for a country that suddenly had visitors and television. The cup was exactly one gō, the lid peeled off, and the glass was printed rather than labelled.",
              ja:"ワンカップ大関は東京五輪の年に売り出された。にわかに客と放送を得た国のために、日本の消費の意匠の多くが問い直されていた時である。杯はちょうど一合、蓋は剥がされ、硝子は札ではなく印刷されていた。",
              zh:"One Cup 大關在東京奧運那一年上市——當時，日本的許多消費品設計，正為一個突然擁有訪客與電視的國家而被重新思考。杯子恰好是一合，蓋子可撕開，玻璃上是直接印刷而非貼標。" } },
          { n:3, title:{ en:"The lid, three times", ja:"蓋、三度", zh:"蓋子，三次改版" }, jp:"1965 / 1970 / 1989", romaji:"", meta:{ en:"1965, 1970, 1989", ja:"昭和40年・45年・平成元年", zh:"1965、1970、1989" },
            text:{ en:"A poly cap in 1965, a tear-off in 1970, a pull-up in 1989. Three redesigns of a lid is an unglamorous history, and it is most of why the format worked: a container you cannot open on a moving train is not a container for a moving train.",
              ja:"昭和四十年（1965）にポリ蓋、昭和四十五年（1970）に引き剥がす蓋、平成元年（1989）に引き上げる蓋。蓋の三度の設計変更は華のない歴史であり、そしてこの形が成った理由の大部分である。揺れる汽車の中で開けられぬ容器は、揺れる汽車のための容器ではない。",
              zh:"一九六五年是塑膠蓋，一九七〇年是撕開式，一九八九年是上拉式。一個蓋子的三次改版是毫不光鮮的歷史，卻是這個規格之所以成功的主要原因：在行進的火車上打不開的容器，就不是為行進的火車而設計的容器。" } },
          { n:4, title:{ en:"What it became", ja:"それがなったもの", zh:"它後來成為什麼" }, jp:"国民酒", romaji:"kokumin-shu", meta:{ en:"1979 award; 60 years in 2024", ja:"昭和54年受賞、令和六年に六十年", zh:"1979 年獲獎；2024 年滿六十年" },
            text:{ en:"The Brewing Society gave the format an award in 1979 for what it had done for sake consumption. Cup sake became the drink of long-distance trains, of standing bars, of festivals and of riverbanks, and also the drink that premium brewers spent thirty years distancing themselves from. Since the 2010s it has been quietly reclaimed: small breweries now issue single-serve cups of good junmai with designed labels, on the reasoning that the objection was never to the container.",
              ja:"醸造協会は昭和五十四年（1979）、日本酒の消費に果たした働きに対しこの形に賞を贈った。カップ酒は長距離の汽車の、立ち飲みの、祭の、河原の飲み物となり、そして同時に、高級の造り手が三十年をかけて距離を置いた飲み物ともなった。二〇一〇年代より、それは静かに取り戻されつつある。小さな蔵が意匠された札とともに良い純米の一杯の杯を出すようになった。反発はそもそも容器に対するものではなかった、という理路である。",
              zh:"釀造協會於一九七九年為這個規格頒獎，表彰它對清酒消費的貢獻。杯裝酒成了長途列車、立飲酒吧、祭典與河岸邊的飲料，同時也成了高級釀造者花三十年刻意保持距離的東西。自二〇一〇年代起，它被靜靜地收復回來：小型酒藏開始推出設計過標籤的單杯優質純米，理由是——當初被排斥的從來不是這個容器。" } }
        ] }
      ] },

{ t:"section", id:"glass",
      title:{ en:"Glass, light and closures", ja:"硝子と光と栓", zh:"玻璃、光線與封口" }, jp:"瓶と栓",
      body:[
        { t:"defs", items:[
          { term:{ en:"Why the bottle is dark", ja:"瓶が暗い理由", zh:"瓶身為何是深色" }, jp:"日光臭", romaji:"nikkō-shū",
            def:{ en:"Sake is more light-sensitive than almost any other drink. Ultraviolet and even strong visible light break down riboflavin and sulphur-containing compounds and produce a distinct fault — <em>nikkō-shū</em>, sunstruck smell, closer to burnt rubber or cabbage than to anything pleasant. A few hours in a sunlit shop window is enough. Brown and dark green glass block most of the damaging range; clear and pale blue glass block almost none, which is why a clear bottle is always either wrapped in paper, boxed, or a gamble the brewery has decided to take for the look of it.",
              ja:"日本酒は、ほとんどどの飲み物よりも光に弱い。紫外線と、強ければ可視の光もまた、リボフラビンや硫黄を含む化合物を壊し、はっきりとした欠点を生む。日光臭であり、快いものよりは焦げたゴムかキャベツに近い。日の差す店先の窓辺で数時間あれば足りる。茶と濃い緑の硝子は害のある範囲のほとんどを遮る。透明と淡い青の硝子はほとんど遮らない。ゆえに透明な瓶は必ず、紙に巻かれているか、箱に入っているか、あるいは見た目のために蔵が引き受けた賭けである。",
              zh:"清酒對光的敏感程度幾乎超過任何其他飲料。紫外線、甚至強烈的可見光，都會分解核黃素與含硫化合物，產生一種明確的缺陷——「日光臭」，那氣味比較接近燒焦的橡膠或甘藍，而非任何令人愉快的東西。在陽光照射的店面櫥窗裡放上幾小時就足夠了。褐色與深綠色玻璃能擋掉大部分具破壞性的波段；透明與淡藍色玻璃幾乎什麼都擋不住——這正是為什麼透明瓶總是要麼裹上紙、要麼裝進盒子，要麼就是酒藏為了外觀而決定承擔的一場賭注。" } },
          { term:{ en:"The paper wrap", ja:"紙巻き", zh:"包紙" }, jp:"瓶巻紙", romaji:"bin makigami",
            def:{ en:"The single sheet of paper wound round a bottle is doing three jobs: blocking light, protecting the label in transit, and carrying the brewery's larger design. Removing it in the shop to photograph the label and then leaving it off is a small, common and entirely avoidable act of damage.",
              ja:"瓶に巻かれた一枚の紙は三つの仕事をしている。光を遮ること、運びのあいだ札を守ること、そして蔵のより大きな意匠を負うことである。店で札を写すために外し、そのまま外しておくことは、小さく、よくあり、そしてまったく避けうる損なわしである。",
              zh:"纏在瓶身上的那一張紙同時做三件事：遮光、在運送途中保護酒標，以及承載酒藏更完整的設計。在店裡為了拍酒標而把它拆下、然後就這樣不裝回去，是一種微小、常見、而且完全可以避免的損害。" } },
          { term:{ en:"Closures", ja:"栓", zh:"封口" }, jp:"王冠・スクリュー・冠頭", romaji:"ōkan, sukuryū, kantō",
            def:{ en:"Sake has no cork tradition. The isshōbin takes a crown cap; the yongōbin usually takes an aluminium screw cap, which is airtight, resealable and cheap, and which the industry adopted long before the wine world stopped arguing about it. Over the cap on a gift bottle sits the <em>kantō</em>, a decorative hood of foil or paper — pure ceremony, and the reason a formal bottle looks formal. Sparkling sake, which holds real pressure, uses a champagne cork and wire or a crown cap.",
              ja:"日本酒に栓の伝統はない。一升瓶は王冠を、四合瓶はたいていアルミの螺子の栓を受ける。それは気密で、閉め直すことができ、安い。業界は、葡萄酒の世界がそれを論じ終えるよりはるか以前にこれを採った。贈答の瓶では栓の上に冠頭が載る。箔か紙の飾りの被りであり、純粋な儀礼であって、改まった瓶が改まって見える理由である。実際に圧を抱える発泡清酒は、シャンパンの栓と針金か、王冠を用いる。",
              zh:"清酒沒有軟木塞的傳統。一升瓶用皇冠蓋；四合瓶通常用鋁製螺旋蓋——氣密、可重新封閉、便宜，而且這個產業早在葡萄酒界還在為此爭論之前就採用了它。禮品瓶的瓶蓋之上會加一個「冠頭」，那是箔或紙製的裝飾罩，純屬儀式性質，也是正式酒瓶看起來正式的原因。實際承受壓力的氣泡清酒，則使用香檳軟木塞加鐵絲，或皇冠蓋。" } },
          { term:{ en:"What the bottle cannot fix", ja:"瓶に直せぬもの", zh:"瓶子解決不了的事" }, jp:"温度", romaji:"ondo",
            def:{ en:"No glass colour and no closure protects against warmth. A pasteurised sake wants a cool dark place; an unpasteurised one wants a refrigerator from the brewery to the glass, and every hour it spends outside one is spent. The packaging decisions on this page are about light, oxygen and cost; temperature is a separate argument, made under <a href=\"storage.html\">Buying &amp; Storage</a>.",
              ja:"硝子の色も栓も、暖かさからは守らない。火入れした酒は涼しく暗い場所を求める。生の酒は蔵から杯まで冷蔵を求め、その外で過ごす一時間ごとが費やされる。この頁の包装の判断は光と酸素と費えについてのものである。温度は別の議論であり、<a href=\"storage.html\">購入と保存</a>で述べる。",
              zh:"沒有任何玻璃顏色或封口能抵禦溫暖。經火入的酒需要陰涼避光之處；未經火入的酒則需要從酒藏到酒杯全程冷藏，而它在冷藏之外度過的每一小時都是消耗。本頁的包裝決策談的是光、氧與成本；溫度是另一場論證，見<a href=\"storage.html\">選購與保存</a>。" } }
        ] }
      ] },

    { t:"section", id:"returnable",
      title:{ en:"The bottle that goes back", ja:"戻る瓶", zh:"會回去的瓶子" }, jp:"リターナブル瓶",
      body:[
        { t:"p", text:{
          en:"The isshōbin is one of the oldest and largest reusable-container systems anywhere in the world, and it has been running quietly since before the word recycling existed in Japanese.",
          ja:"一升瓶は、世界のどこにおいても最も古く最も大きい再使用の容器の仕組みの一つであり、そして日本語に再資源化という語が存在するより前から、静かに営まれてきた。",
          zh:"一升瓶是全世界最古老、規模也最大的可重複使用容器體系之一，而且早在日語裡出現「回收再利用」這個詞之前，它就已經安靜地運轉著。" } },
        { t:"grid", cols:3, cells:[
          { k:{ en:"How it works", ja:"仕組み", zh:"運作方式" }, jp:"回収",
            v:{ en:"Deposit and route", ja:"預り金と回収路", zh:"押金與回收路線" },
            d:{ en:"The bottle carries a deposit. The drinker returns it to the liquor shop, a bottle merchant collects, washes and inspects, and it goes back to a brewery — not necessarily the one it came from, because the bottle is standardised. It is refilled many times before the glass is finally crushed and remelted.",
              ja:"瓶には預り金がついている。飲み手はそれを酒屋へ返し、びん商が集め、洗い、検め、蔵へ戻す。瓶は規格化されているため、必ずしも出てきた蔵とは限らない。硝子が最後に砕かれ溶かし直されるまで、それは幾度も詰め直される。",
              zh:"瓶子附帶押金。飲用者把它退回酒鋪，瓶商前來收集、清洗、檢驗，然後送回酒藏——不一定是它出來的那一家，因為瓶子是規格統一的。在玻璃最終被壓碎重熔之前，它會被反覆填裝許多次。" } },
          { k:{ en:"Why it is standardised", ja:"規格化の理由", zh:"為何規格統一" }, jp:"共有規格",
            v:{ en:"A shared pool", ja:"共有の在庫", zh:"共用的瓶池" },
            d:{ en:"Because breweries agreed on one bottle shape, the entire industry shares a single pool of glass. That is why sake bottles from different houses look identical below the label, and why a brewery that adopts a distinctive bottle steps outside the system and has to buy new glass every time.",
              ja:"蔵が一つの瓶の形に合意したがゆえに、産業の全体が一つの硝子の在庫を共有している。異なる家の酒の瓶が札の下では同一に見える理由であり、際立った瓶を採る蔵はこの仕組みの外へ出て、そのたび新しい硝子を買わねばならぬ理由である。",
              zh:"正因為各家酒藏就單一瓶型達成共識，整個產業共享同一批玻璃瓶池。這就是為什麼不同酒藏的清酒瓶在酒標之下看起來一模一樣，也是為什麼採用獨特瓶型的酒藏等於走出了這個體系，每一次都得買新玻璃。" } },
          { k:{ en:"Why it is shrinking", ja:"縮む理由", zh:"為何在萎縮" }, jp:"流通の変化",
            v:{ en:"The shop disappeared", ja:"酒屋が消えた", zh:"酒鋪消失了" },
            d:{ en:"The system depends on a local liquor shop that will take the empty back. As sake moved to supermarkets and convenience stores, which have no space and no interest in handling used glass, return rates fell and the number of bottle merchants fell with them. The environmental case for the isshōbin is stronger than it has ever been, and the retail structure that made it work is mostly gone.",
              ja:"この仕組みは、空き瓶を引き取る町の酒屋に依っている。日本酒が、使われた硝子を扱う場所も関心も持たぬ量販店とコンビニへ移るにつれ、回収の率は落ち、びん商の数もそれとともに落ちた。一升瓶を支持する環境の論はかつてなく強く、そしてそれを働かせていた小売の構造はおおむね失われた。",
              zh:"這套體系依賴一家願意收回空瓶的在地酒鋪。隨著清酒轉往超市與便利商店——它們既沒有空間、也沒有興趣處理用過的玻璃瓶——回收率下降，瓶商的數量也隨之減少。支持一升瓶的環境論據比以往任何時候都更強，而讓它得以運作的零售結構卻大半已經消失。" } }
        ] }
      ] },

    { t:"section", id:"taru",
      title:{ en:"Barrels", ja:"樽", zh:"酒樽" }, jp:"樽酒と菰樽",
      body:[
        { t:"defs", items:[
          { term:{ en:"Taruzake", ja:"樽酒", zh:"樽酒" }, jp:"樽酒", romaji:"taruzake",
            def:{ en:"Sake stored in a cedar barrel long enough to take the wood's aroma — a few days to a couple of weeks, not months; Japanese cedar gives its scent quickly and would dominate everything if left. Until the nineteenth century all sake travelled in cedar and everybody's sake tasted faintly of it, so what reads now as a special style is in fact the recovery of the ordinary flavour of pre-industrial sake. It is served cool, and it is the one sake that goes with grilled and smoked food without argument.",
              ja:"杉の樽に、木の香りを取るに足るだけ収めた酒である。数日から二週ほどであって、数か月ではない。杉は香りを速やかに与え、置けばすべてを覆ってしまう。十九世紀まで酒はすべて杉に乗って旅し、誰の酒もかすかにその香りがした。ゆえに今では特別な型と読まれるものは、実のところ、工業以前の酒の平常の味の回復である。冷やして供され、焼いたもの燻したものと争わずに合う唯一の酒である。",
              zh:"存放在杉木樽中、時間長到足以吸取木香的酒——數天到兩週左右，而非數月；日本杉很快就會釋出香氣，若久放便會壓過一切。直到十九世紀，所有的清酒都是裝在杉木容器裡運送的，每個人的酒都帶著淡淡的杉香。因此，今日被讀作特殊風格的東西，其實是前工業時代清酒日常風味的復原。它冷飲，也是唯一能毫無爭議地搭配燒烤與煙燻食物的清酒。" } },
          { term:{ en:"Komodaru", ja:"菰樽", zh:"菰樽" }, jp:"菰樽", romaji:"komodaru",
            def:{ en:"The straw-wrapped, brightly printed barrel stacked outside shrines and shops. Almost all of them are empty: they are votive offerings from breweries to a shrine, and advertising, and a display object. The full ones appear at weddings, ship launches, company foundings and campaign victories, where the lid is broken open with wooden mallets.",
              ja:"菰に包まれ鮮やかに刷られた樽であり、社や店の外に積まれている。そのほとんどは空である。蔵から社への奉納であり、広告であり、飾りの物である。中身のあるものは婚礼、進水、創業、選挙の勝利に現れ、そこでは木槌で蓋が割り開かれる。",
              zh:"以稻草包裹、印刷鮮豔的酒樽，堆疊在神社與店家門外。它們幾乎都是空的：那是酒藏獻給神社的奉納品，是廣告，也是陳列物。裝滿的那些會出現在婚禮、船隻下水、公司創立與選舉勝利的場合，在那裡，樽蓋會被木槌敲開。" } },
          { term:{ en:"Kagami-biraki", ja:"鏡開き", zh:"鏡開" }, jp:"鏡開き", romaji:"kagami-biraki",
            def:{ en:"The lid of a barrel is called the mirror. Breaking it open is a formal act performed by several people striking together, and the word used is <em>hiraki</em>, opening — never <em>wari</em>, breaking, because a breaking word at a celebration is bad form. The sake is then served in square cedar masu. It is the loudest and most public thing sake does, and it is a ceremony about a container, not about a drink.",
              ja:"樽の蓋は鏡と呼ばれる。それを割り開くことは、数人が揃って打つ改まった所作であり、用いる語は開きであって、割りではない。祝いの席で割るという語は不作法だからである。酒はそののち杉の枡に注がれる。日本酒のなす最も大きく最も人前の事柄であり、そしてそれは飲み物についてではなく容器についての儀礼である。",
              zh:"酒樽的蓋子被稱為「鏡」。敲開它是一項正式的動作，由數人一同揮槌完成，所用的詞是「開」而非「破」——因為在慶典場合說「破」是失禮的。酒隨後倒進方形的杉木枡中飲用。這是清酒所做的最響亮、最公開的一件事，而且它是一場關於容器、而非關於飲料的儀式。" } }
        ] },
        { t:"note", title:{ en:"A caution", ja:"注意", zh:"提醒" }, text:{
          en:"Barrel-aged sake in oak — as opposed to cedar — exists, is legal, and is usually classified out of the special designations because the wood contributes colour. It is a small, deliberate category, and it should not be confused with taruzake, which is a different wood doing a different thing over a much shorter time.",
          ja:"杉ではなく樫の樽で寝かせた酒は存在し、法にかない、そして木が色を与えるため、たいてい特定名称の外に分類される。小さく、意図された区分であり、樽酒と取り違えてはならない。樽酒は異なる木が、はるかに短い時間で、異なる仕事をするものである。",
          zh:"以橡木——而非杉木——桶陳的清酒確實存在，也合法，並且通常因木材賦予顏色而被排除在特定名稱之外。那是一個小而刻意的類別，不應與樽酒混淆：樽酒是另一種木材，在短得多的時間裡，做著另一件事。" } }
      ] },

    { t:"section", id:"export",
      title:{ en:"Packaging for export", ja:"輸出のための包装", zh:"為出口而做的包裝" }, jp:"輸出",
      body:[
        { t:"ul", items:[
          { en:"<strong>720 mL wins abroad.</strong> It fits wine logistics end to end — cases, shelves, gift boxes, duty calculations — and importers who also carry wine will take it without redesigning anything. The isshōbin barely travels.",
            ja:"<strong>国外では七百二十ミリリットルが勝つ。</strong>それは葡萄酒の物流に端から端まで収まる。函、棚、化粧箱、関税の計算である。葡萄酒も扱う輸入者は、何も設計し直さずにそれを受け入れる。一升瓶はほとんど旅をしない。",
            zh:"<strong>在海外，七百二十毫升勝出。</strong>它從頭到尾都能嵌進葡萄酒的物流體系——外箱、貨架、禮盒、關稅計算——同時經營葡萄酒的進口商不必重新設計任何東西就能接手。一升瓶幾乎不出遠門。" },
          { en:"<strong>The label doubles.</strong> Importing countries require their own mandatory statements — alcohol content in the local format, allergen and sulphite declarations where they apply, importer name and address, government warnings, sometimes a translated ingredient list. This is why an export bottle carries a back label the domestic one does not, and why a small brewery's first export order is mostly a paperwork exercise.",
            ja:"<strong>札は二重になる。</strong>輸入する国はそれぞれの必須の表示を求める。その地の書き方による度数、当てはまる場合の食物過敏原と亜硫酸の表示、輸入者の名と所在、政府の警告、時には訳した原材料の一覧である。輸出の瓶が国内のものにはない裏の札を負う理由であり、小さな蔵の最初の輸出の注文がおおむね書類の作業である理由でもある。",
            zh:"<strong>酒標會變成兩張。</strong>進口國各自要求自己的強制標示：以當地格式表示的酒精濃度、適用時的過敏原與亞硫酸鹽聲明、進口商名稱與地址、政府警語，有時還有翻譯過的原料清單。這就是為什麼出口酒瓶會多出一張國內版沒有的背標，也是為什麼一家小酒藏的第一筆出口訂單，大半是文書作業。" },
          { en:"<strong>Temperature is the whole game.</strong> A container crossing the Pacific in an unrefrigerated box passes through equatorial heat; a reefer container costs more and is the difference between sake arriving and sake arriving cooked. Any bottle of nama that reached another continent came in a reefer, and the ones that did not are the reason some people think they dislike sake.",
            ja:"<strong>温度がすべてである。</strong>冷やされぬ函で太平洋を渡る貨物は赤道の熱を抜ける。冷凍の貨物は高くつき、それが酒が届くことと酒が煮えて届くことの差である。別の大陸に達した生酒の瓶はみな冷凍の貨物で来ており、そうでなかったものは、ある人々が自分は日本酒が嫌いだと思っている理由である。",
            zh:"<strong>溫度就是一切。</strong>一只未經冷藏的貨櫃橫渡太平洋，會穿過赤道的高溫；冷藏貨櫃成本更高，而它正是「酒抵達」與「酒被煮熟後抵達」之間的差別。任何抵達另一個大洲的生酒，都是搭冷藏櫃來的；那些不是的，正是某些人以為自己討厭清酒的原因。" },
          { en:"<strong>Small formats are growing.</strong> Cans and 300 mL bottles ship well, break less, and let a bar or an airline pour sake by the glass without opening something that will oxidise. Several export-focused producers now lead with a can, which would have been commercially unthinkable in 2005.",
            ja:"<strong>小さな形が伸びている。</strong>缶と三百ミリリットルの瓶はよく運ばれ、割れにくく、酒場や航空が、酸化してゆくものを開けることなく杯で注ぐことを許す。輸出に向く造り手のいくつかは今や缶を先頭に立てる。二〇〇五年には商いとして考えられぬことであった。",
            zh:"<strong>小容量規格正在成長。</strong>罐裝與三百毫升瓶適合運輸、破損率低，並讓酒吧或航空公司能以單杯供應清酒，而不必打開一瓶接下來會持續氧化的酒。數家以出口為主的生產者如今以罐裝作為主打——這在二〇〇五年是商業上難以想像的事。" }
        ] },
        { t:"tiny", text:{
          en:"Related: <a href=\"label.html\">Reading a Label</a>, <a href=\"storage.html\">Buying &amp; Storage</a>, <a href=\"world.html\">Sake Outside Japan</a>.",
          ja:"関連——<a href=\"label.html\">表示の読み方</a>、<a href=\"storage.html\">購入と保存</a>、<a href=\"world.html\">国外の日本酒</a>。",
          zh:"相關：<a href=\"label.html\">酒標判讀</a>、<a href=\"storage.html\">選購與保存</a>、<a href=\"world.html\">日本以外的清酒</a>。" } }
      ] },

    { t:"related", items:[
      { href:"storage.html", why:{ en:"What each container does to the sake inside it.", ja:"各々の容器が中の酒になすこと。", zh:"每一種容器對裡面的酒做了什麼。" } },
      { href:"sustainability.html", why:{ en:"The same containers ranked by what they cost.", ja:"同じ容器を、その費えによって並べる。", zh:"同樣這些容器，依它們的代價排序。" } },
      { href:"vessels.html", why:{ en:"What it is poured into once the container is open.", ja:"容器が開いたのち、何に注がれるか。", zh:"容器打開之後，酒被倒進什麼裡。" } },
      { href:"tables.html", why:{ en:"The bottle sizes, and the measures behind them.", ja:"瓶の大きさと、その背後の単位。", zh:"瓶裝規格，以及它們背後的度量單位。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- kanji */
SAKE.pages["kanji"] = {
  kicker: { en: "Understanding · 12", ja: "理解 · 12", zh: "理解 · 12" },
  title:  { en: "The Characters on the Bottle", ja: "瓶の上の漢字", zh: "瓶身上的漢字" },
  jp: "漢字",
  lede: {
    en: "Almost everything printed on a sake bottle is written in characters that are three thousand years old and were not designed for Japanese. Two of them were invented in Japan specifically for brewing. Several mean something different to a reader in Taipei than to a reader in Kyoto, and one of the commonest words on a label will actively mislead a Chinese reader. This page is a reading guide for the writing itself.",
    ja: "日本酒の瓶に刷られたもののほとんどは、三千年を経た、そして日本語のために設計されたのではない文字で書かれている。そのうち二つは、酒造りのためにこそ日本で作られた。いくつかは台北の読み手と京都の読み手とで異なる意味を持ち、札の上で最もよく見る語の一つは、中国語の読み手を積極的に誤らせる。この頁は、書かれたもの自体のための読みの案内である。",
    zh: "清酒瓶上印的幾乎每一樣東西，都是以三千年歷史、且原本並非為日語而設計的文字寫成的。其中兩個字是日本專為釀酒而造的。有幾個字對台北的讀者與京都的讀者意義不同，而酒標上最常見的詞之一，會主動誤導中文讀者。本頁是一份針對「文字本身」的閱讀指南。"
  },
  body: [

    { t:"section", id:"you",
      title:{ en:"酉 — the jar that holds them all", ja:"酉——すべてを容れる壺", zh:"酉——盛裝一切的酒壺" }, jp:"酉偏",
      body:[
        { t:"p", text:{
          en:"The character 酉 is a picture of a narrow-necked jar with a swelling body, drawn on oracle bones more than three thousand years ago. It has since been borrowed for the tenth earthly branch and for the hour of the rooster, but its original job was to mean a vessel of fermented liquid — and it is still doing that job as the left-hand element of almost every word in this subject. Learn the shape and a whole vocabulary becomes readable at a glance, in Japanese and in Chinese alike.",
          ja:"酉という文字は、括れた首と膨らんだ胴を持つ壺の絵であり、三千年より前の甲骨に描かれた。のちに十二支の十番目と、酉の刻とに借りられたが、もとの仕事は醸された液の器を意味することであった。そしてそれは、この主題のほとんどあらゆる語の左の要素として、今なおその仕事を続けている。この形を覚えれば、語彙の一つの全体が、日本語においても中国語においても、一目で読めるようになる。",
          zh:"「酉」這個字，是一只細頸鼓腹之壺的圖畫，三千多年前就刻在甲骨上。它後來被借去表示十二地支的第十位與酉時，但它最初的工作是表示「盛裝發酵液體的器皿」——而作為本主題中幾乎每一個詞的左偏旁，它至今仍在做著這份工作。學會這個形狀，一整套詞彙便能在日文與中文裡一眼讀通。" } },
        { t:"figure",
          caption:{
            en:"The jar and its descendants. 酉 was drawn on oracle bones as a narrow-necked vessel with a swelling body and horizontal bands, and it has been the semantic element for fermented liquid ever since; the right-hand half of each character below is usually phonetic rather than meaningful, so the jar is doing all the work. Two of these were made in Japan — 酛 for the starter, and 醂 for soaking persimmons — and one, 酌, is transparent enough to read without being taught: a jar and a ladle, which is exactly what pouring for someone is.",
            ja:"壺と、その裔たち。酉は、括れた首と膨らんだ胴と横の帯を持つ器として甲骨に描かれ、以来ずっと、醸された液を表す意符であり続けてきた。下に並ぶ字の右半分は、意味ではなく多くが音を担う。つまり働いているのは壺のほうである。このうち二つは日本で作られた——酒母の酛と、柿を晒す醂である。そして一つ、酌は、教わらずとも読めるほどに透けている。壺と柄杓——人に注ぐとは、まさにそのことである。",
            zh:"酒壺，與它的後裔。「酉」在甲骨上被畫成一只細頸、鼓腹、帶橫紋的容器，自此便一直是表示「發酵液體」的意符；下列各字的右半多半表音而非表義，因此真正在工作的是那只壺。其中兩個字造於日本——表示酒母的「酛」，以及用於漤柿的「醂」。而其中一個字「酌」透明到不必人教便能讀懂：一只壺加一把杓——為人斟酒，正是這回事。" },
          svg: function (lang, L) {
            var W = 760, H = 452;
            var SERIF = '"Spectral","Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif TC","Songti TC",serif';
            var fam = [
              { c:"酒", d:"氵＋酉", r:"sake · shu", m:{ en:"drink — in Japan, usually this", ja:"酒。日本ではたいていこの酒", zh:"酒；在日本通常就指這種酒" } },
              { c:"醸", d:"酉＋襄", r:"kamosu · jō", m:{ en:"to brew; to bring a mood about", ja:"醸す。雰囲気を生じさせる", zh:"釀；也指「醞釀」氛圍" } },
              { c:"酵", d:"酉＋孝", r:"kō", m:{ en:"leaven — yeast and enzyme", ja:"酵。酵母と酵素", zh:"酵——酵母、酵素" } },
              { c:"酛", d:"酉＋元", r:"moto", m:{ en:"the starter — made in Japan", ja:"酒母。日本で作られた字", zh:"酒母——日本所造之字" } },
              { c:"醪", d:"酉＋翏", r:"moromi", m:{ en:"the mash, solids and all", ja:"醪。固形分ごと", zh:"醪，連同固形物" } },
              { c:"酸", d:"酉＋夋", r:"san · sui", m:{ en:"acid, sour — the label number", ja:"酸。裏の札の数値", zh:"酸——背標上的那個數值" } },
              { c:"酢", d:"酉＋乍", r:"su · saku", m:{ en:"vinegar — Chinese writes 醋", ja:"酢。中国語は醋と書く", zh:"醋（日文寫作「酢」）" } },
              { c:"醤", d:"將＋酉", r:"hishio · shō", m:{ en:"paste, sauce — 醤油", ja:"醤。醤油の醤", zh:"醬——醬油之醬" } },
              { c:"酔", d:"酉＋卒", r:"you · sui", m:{ en:"to become drunk", ja:"酔う", zh:"醉" } },
              { c:"酌", d:"酉＋勺", r:"shaku", m:{ en:"to pour for someone else", ja:"酌む。壺と柄杓", zh:"斟酒——一壺一杓" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* the jar */
            var J = "#E7DFD2", E = "#A08F73";
            s += '<rect x="108" y="54" width="44" height="9" fill="' + J + '" stroke="' + E + '"/>';
            s += '<rect x="114" y="63" width="32" height="20" fill="' + J + '" stroke="' + E + '"/>';
            s += '<path d="M114 83 L146 83 L176 104 L84 104 Z" fill="' + J + '" stroke="' + E + '"/>';
            s += '<path d="M84 104 L176 104 L176 150 L160 174 L100 174 L84 150 Z" fill="' + J + '" stroke="' + E + '"/>';
            s += '<line x1="88" y1="120" x2="172" y2="120" stroke="' + E + '"/>';
            s += '<line x1="86" y1="138" x2="174" y2="138" stroke="' + E + '"/>';
            s += '<text x="130" y="196" text-anchor="middle" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "甲骨・三千年前" : lang === "zh" ? "甲骨文・三千年前" : "oracle bone, 3,000 years ago") + '</text>';
            /* arrow down to the character */
            s += '<line x1="130" y1="206" x2="130" y2="222" stroke="#B4AC9C"/>';
            s += '<path d="M130 230 L124 220 L136 220 Z" fill="#B4AC9C"/>';
            s += '<text x="130" y="304" text-anchor="middle" font-size="66" font-family=\'' + SERIF + '\' fill="#201E1B">酉</text>';
            s += '<text x="130" y="326" text-anchor="middle" font-size="10.5" fill="#55504A">' +
                 (lang === "ja" ? "とり・ユウ" : lang === "zh" ? "yǒu・酉部" : "yū · the jar radical") + '</text>';
            s += '<text x="130" y="342" text-anchor="middle" font-size="9" fill="#8B857C">' +
                 (lang === "ja" ? "醸された液の器" : lang === "zh" ? "盛裝發酵液的器皿" : "a vessel of fermented liquid") + '</text>';
            /* spine */
            s += '<line x1="212" y1="60" x2="212" y2="418" stroke="#DED8CB"/>';
            /* the family */
            var CW = 238, CH = 68, GX = 250, GY = 46, i;
            for (i = 0; i < fam.length; i++) {
              var f = fam[i];
              var col = Math.floor(i / 5), row = i % 5;
              var x = GX + col * (CW + 14), y = GY + row * (CH + 6);
              if (col === 0) s += '<line x1="212" y1="' + (y + CH / 2) + '" x2="' + x + '" y2="' + (y + CH / 2) + '" stroke="#DED8CB"/>';
              s += '<rect x="' + x + '" y="' + y + '" width="' + CW + '" height="' + CH + '" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<text x="' + (x + 34) + '" y="' + (y + 44) + '" text-anchor="middle" font-size="32" font-family=\'' + SERIF + '\' fill="#201E1B">' + f.c + '</text>';
              s += '<text x="' + (x + 34) + '" y="' + (y + 60) + '" text-anchor="middle" font-size="9" fill="#ADA79E">' + f.d + '</text>';
              s += '<text x="' + (x + 68) + '" y="' + (y + 26) + '" font-size="9.5" fill="#8B857C">' + f.r + '</text>';
              s += '<text x="' + (x + 68) + '" y="' + (y + 44) + '" font-size="10" fill="#201E1B">' + L(f.m) + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "酉はのちに十二支の十番目と酉の刻に借りられたが、酒の語のなかでは、いまも壺のままである。"
                  : lang === "zh" ? "「酉」後來被借去表示十二地支的第十位與酉時，但在與酒有關的字裡，它至今仍是那只壺。"
                  : "酉 was later borrowed for the tenth earthly branch and the hour of the rooster, but inside the words for drink it is still a jar.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"table",
          caption:{ en:"The 酉 family, as it appears in sake", ja:"日本酒に現れる酉偏の一族", zh:"清酒中出現的酉部字族" },
          cols:[{ en:"Character", ja:"字", zh:"字" }, { en:"Japanese reading", ja:"読み", zh:"日文讀音" }, { en:"What it means", ja:"意味", zh:"字義" }, { en:"Where you meet it", ja:"出会う場所", zh:"你會在哪裡遇到它" }],
          jpCols:[0], keyCol:0,
          rows:[
            ["酒", "さけ・しゅ", { en:"Alcohol; in Japanese usage, very often sake specifically", ja:"酒。日本語の用法ではしばしば日本酒そのもの", zh:"酒；在日語用法中，往往特指日本酒" },
             { en:"清酒, 日本酒, 原酒, 生酒, 樽酒 — everywhere", ja:"清酒、日本酒、原酒、生酒、樽酒——至る所", zh:"清酒、日本酒、原酒、生酒、樽酒——無所不在" }],
            ["醸", "かも-す・ジョウ", { en:"To brew, to ferment; also, figuratively, to bring a mood about", ja:"醸す。転じて雰囲気を生じさせる", zh:"釀造、發酵；引申亦指「醞釀」出某種氛圍" },
             { en:"吟醸, 大吟醸, 本醸造, 醸造アルコール. The old form 釀 still appears in brand names and in Chinese.", ja:"吟醸・大吟醸・本醸造・醸造アルコール。旧字の釀は銘柄や中国語になお現れる。", zh:"吟釀、大吟釀、本釀造、釀造酒精。舊字形「釀」仍見於品牌名與中文。" }],
            ["酵", "コウ", { en:"Fermentation, leaven", ja:"酵。醗酵のもと", zh:"發酵、酵" },
             { en:"酵母 yeast, 酵素 enzyme — two words that carry most of the microbiology on this site.", ja:"酵母、酵素。この場所の微生物学の大半を負う二語。", zh:"酵母、酵素——這兩個詞承載了本站大部分的微生物學。" }],
            ["酛", "もと", { en:"The starter — a character invented in Japan for exactly this", ja:"酒母。まさにこのために日本で作られた字", zh:"酒母——一個日本專為此而造的字" },
             { en:"生酛, 山廃酛, 速醸酛. See below.", ja:"生酛・山廃酛・速醸酛。下に述べる。", zh:"生酛、山廢酛、速釀酛。詳見下文。" }],
            ["醪", "もろみ", { en:"The main mash — unfiltered fermenting liquid with the solids still in it", ja:"醪。固形分を含んだまま醗酵する液", zh:"醪——仍含固形物、正在發酵的液體" },
             { en:"醪, 醪取り. The same character is used for the unfiltered mash in soy sauce and shochu.", ja:"醪、醪取り。同じ字が醤油や焼酎の醪にも用いられる。", zh:"醪、醪取。同一個字也用於醬油與燒酎的醪。" }],
            ["酸", "サン・す-い", { en:"Acid; sour", ja:"酸。すっぱい", zh:"酸" },
             { en:"酸度 acidity, 乳酸 lactic acid, 有機酸 organic acids — the number on the back label.", ja:"酸度、乳酸、有機酸——裏の札の数値。", zh:"酸度、乳酸、有機酸——背標上的那個數值。" }],
            ["酢", "す・サク", { en:"Vinegar", ja:"酢", zh:"醋（日文用此字）" },
             { en:"A brewing by-product and a sister industry; many old breweries make both. Note that Chinese writes vinegar 醋, not 酢.", ja:"酒造の副次であり姉妹の産業でもある。多くの古い蔵は双方を造る。中国語は酢ではなく醋と書くことに注意。", zh:"釀酒的副產物，也是姊妹產業；許多老酒藏兩者兼做。請注意中文寫作「醋」而非「酢」。" }],
            ["醤", "ひしお・ショウ", { en:"Fermented paste or sauce", ja:"醤。醗酵した醤やたれ", zh:"醬（日文新字形）" },
             { en:"醤油 soy sauce — the other great kōji product, and the other business of half the breweries in Kyūshū. Chinese and older Japanese write 醬.", ja:"醤油——もう一つの偉大な麹の産であり、九州の蔵の半ばのもう一つの商いである。中国語と古い日本語は醬と書く。", zh:"醬油——另一項偉大的麴製品，也是九州半數酒藏的另一門生意。中文與較舊的日文寫作「醬」。" }],
            ["酔", "よ-う・スイ", { en:"To become drunk", ja:"酔う", zh:"醉（日文新字形）" },
             { en:"酔鯨 and other brand names; 悪酔い a bad drunk; 酩酊 severe intoxication. Chinese writes 醉.", ja:"酔鯨などの銘柄、悪酔い、酩酊。中国語は醉と書く。", zh:"醉鯨等品牌名；悪酔い（宿醉不適）；酩酊（爛醉）。中文寫作「醉」。" }],
            ["酌", "く-む・シャク", { en:"To pour for someone", ja:"酌む。人に注ぐ", zh:"斟酒" },
             { en:"お酌 the act of pouring for another, 晩酌 the evening drink at home, 独酌 drinking alone. The etiquette of sake lives in this character.", ja:"お酌、晩酌、独酌。日本酒の作法はこの字に宿る。", zh:"お酌（為他人斟酒）、晚酌（在家的晚間小酌）、獨酌。清酒的禮節就住在這個字裡。" }],
            ["醴", "あまざけ・レイ", { en:"Sweet, lightly or unfermented rice drink", ja:"醴。甘酒", zh:"醴——甘甜、發酵度低或未發酵的米飲" },
             { en:"An archaic character for amazake, and the word used in the very oldest Japanese records of rice drink — the <em>Nihon Shoki</em> and the fudoki.", ja:"甘酒の古い字であり、米の飲み物についての日本の最も古い記録——『日本書紀』や風土記——に用いられた語である。", zh:"甘酒的古字，也是日本最古老的米飲記載——《日本書紀》與風土記——所使用的詞。" }],
            ["醂", "あわ-す・さわ-す", { en:"To steep so as to remove astringency", ja:"醂す。渋を抜く", zh:"以浸漬去除澀味" },
             { en:"味醂 mirin — sweet cooking sake, and a kōji product made with shōchū rather than water.", ja:"味醂。甘い料理の酒であり、水ではなく焼酎で仕込む麹の産である。", zh:"味醂——甜味的料理酒，是以燒酎而非水仕込的麴製品。" }],
            ["醒", "さ-める・セイ", { en:"To sober up, to wake", ja:"醒める", zh:"醒（酒醒）" },
             { en:"覚醒 and 醒める; the character that describes the other end of the evening.", ja:"覚醒、醒める。宵のもう一方の端を述べる字である。", zh:"覺醒、醒——描述一個夜晚另一端的那個字。" }],
            ["配", "くば-る・ハイ", { en:"To distribute, to arrange — originally jars set out in order", ja:"配る。もとは並べ置かれた壺", zh:"分配、安排——原意是依序排開的酒壺" },
             { en:"仕込み配合 the recipe, 配分 the split between stages. The 酉 in it is why a word about arrangement is written with a wine jar.", ja:"仕込み配合、配分。並べることについての語が酒壺で書かれる理由が、この中の酉である。", zh:"仕込配合（配方）、配分（各階段的分配）。一個關於「安排」的詞之所以用酒壺來寫，原因就在其中的「酉」。" }]
          ] },
        { t:"note", title:{ en:"One more, without the jar", ja:"壺を持たぬもう一つ", zh:"另一個，沒有酒壺" }, text:{
          en:"麹 — kōji — is the exception: it is built on 麥, wheat, because the technology came to Japan from a Chinese tradition in which the mould was grown on wheat. Japan grows it on rice. The mismatch between the character and the practice is a thousand years old and nobody has ever fixed it.",
          ja:"麹——こうじ——は例外である。それは麥の上に建てられている。技術が、黴を麦の上に育てる中国の伝統から日本へ来たからである。日本はそれを米の上に育てる。字と実際との食い違いは千年を経ており、誰もそれを直したことがない。",
          zh:"「麴」是例外：它建立在「麥」之上，因為這項技術傳入日本時，所依循的中國傳統是把黴菌培養在麥子上。日本則把它培養在米上。這個字與實務之間的落差已有千年之久，而從來沒有人去修正它。" } }
      ] },

    { t:"section", id:"kokuji",
      title:{ en:"Two characters Japan made for itself", ja:"日本が自ら作った二つの字", zh:"日本自造的兩個字" }, jp:"国字",
      body:[
        { t:"p", text:{
          en:"A <em>kokuji</em> is a character invented in Japan rather than inherited from China. There are a few hundred, mostly for fish, plants and farm tools. Two of them belong to this subject, and both were made because the Chinese script had no word for a thing Japanese brewers did every day.",
          ja:"国字とは、中国から受け継いだのではなく日本で作られた字である。数百があり、その多くは魚と草木と農具のためのものである。そのうち二つがこの主題に属し、いずれも、日本の造り手が日々行うことに漢字が語を持たなかったがゆえに作られた。",
          zh:"「國字」是在日本創造、而非承襲自中國的漢字。這樣的字有數百個，多半用於魚類、植物與農具。其中兩個屬於本主題，而且兩者的產生，都是因為漢字裡沒有一個詞能對應日本釀造者每天在做的事。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"酛 — moto", ja:"酛——もと", zh:"酛——moto" }, jp:"酒母",
            text:{ en:"A contraction: the left half of 酒 and the whole of 元, origin — literally 'the origin of the sake'. It writes in one character what would otherwise take two, 酒母, and it exists because the starter is a distinct object in Japanese brewing that needed its own name. It sits outside the two main JIS character levels and outside the everyday-use list, so it is a character most Japanese people first meet on a bottle of kimoto.",
              ja:"縮約である。酒の左半と、元の全体——文字通り「酒の元」である。ほかであれば二字を要する酒母を一字で書き、日本の酒造りにおいて酒母が自らの名を要する独立した物であるがゆえに存在する。JISの主な二つの水準の外、常用漢字の外にあり、ゆえにほとんどの日本人がこの字に最初に出会うのは生酛の瓶の上である。",
              zh:"這是一個縮合字：「酒」的左半，加上完整的「元」——字面即「酒之元」。它以一個字寫出本來需要兩個字的「酒母」，而它之所以存在，是因為在日本的釀造中，酒母是一個需要自己名字的獨立事物。它落在 JIS 兩個主要層級之外，也不在常用漢字之內，因此多數日本人第一次遇見這個字，是在一瓶生酛的酒標上。" } },
          { title:{ en:"糀 — kōji", ja:"糀——こうじ", zh:"糀——kōji" }, jp:"米の花",
            text:{ en:"Rice, 米, plus flower, 花: the mould blooming white on the grain, seen as a flowering. It is a Japanese coinage for kōji grown specifically on rice, as against 麹, the inherited character that carries wheat in it. Breweries and miso makers use whichever suits the image they want; 糀 reads as warmer, older and more domestic, and turns up on packaging aimed at cooks rather than brewers.",
              ja:"米に花である。粒の上に白く咲く黴を、花と見たのである。麦を負う受け継がれた字である麹に対し、まさに米の上に育てられた麹のための日本の造語である。蔵と味噌の造り手は、望む像に合う方を用いる。糀はより温かく、より古く、より家のものと読まれ、造り手ではなく料理する者に向けた包装に現れる。",
              zh:"米，加上花：黴菌在米粒上白白綻放，被看成一次開花。相對於承襲而來、字中帶「麥」的「麴」，這是日本為「特別培養在米上的麴」所造的字。酒藏與味噌製造者會依自己想要的形象擇一使用；「糀」讀起來更溫暖、更古樸、更具家常感，常出現在面向料理者而非釀造者的包裝上。" } }
        ] }
      ] },

    { t:"section", id:"numbers",
      title:{ en:"Numbers and years", ja:"数と年", zh:"數字與年份" }, jp:"数字と年号",
      body:[
        { t:"p", text:{
          en:"Bottling dates, tank numbers, polishing ratios and brewery generations are all written in kanji at least as often as in Arabic numerals, and the year is usually not the year you think it is.",
          ja:"瓶詰の日、槽の番号、精米歩合、蔵の代は、いずれも算用数字と少なくとも同じだけの頻度で漢数字で書かれ、そして年はたいてい、あなたが思う年ではない。",
          zh:"裝瓶日期、槽號、精米步合與酒藏世代，用漢數字書寫的頻率至少與阿拉伯數字一樣高，而年份通常不是你以為的那個年份。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"The digits", ja:"数字", zh:"數字" }, jp:"一二三四五六七八九十",
            v:{ en:"Read right through", ja:"そのまま読む", zh:"直接讀下去" },
            d:{ en:"一二三四五六七八九十 for one to ten, then 百 hundred, 千 thousand, 万 ten thousand. Twenty-three is 二十三. A polishing ratio of 三割五分 means three tenths and five hundredths removed — that is, 35% polished away, leaving 65%; a bottle that says 二割三分 has had 77% removed and is a 23% ratio. This fractional reading, in tenths and hundredths, is the one that trips people most.",
              ja:"一から十までは一二三四五六七八九十、そして百、千、万である。二十三は二十三と書く。三割五分の精米は、十分の三と百分の五を削るという意味であり、すなわち三十五パーセントを削って六十五を残す。二割三分と記す瓶は七十七パーセントを削っており、精米歩合は二十三である。この十分率・百分率による読みが、最も人を躓かせる。",
              zh:"一到十寫作一二三四五六七八九十，接著是百、千、萬。二十三就寫作「二十三」。精米「三割五分」意指削去十分之三又百分之五，也就是磨掉 35%、留下 65%；標示「二割三分」的酒瓶已磨掉 77%，精米步合為 23%。這種以「割」「分」表示的十分位、百分位讀法，最容易讓人絆倒。" } },
          { k:{ en:"The formal digits", ja:"大字", zh:"大寫數字" }, jp:"壱弐参",
            v:{ en:"Against forgery", ja:"改竄を防ぐため", zh:"為防竄改" },
            d:{ en:"壱, 弐, 参 for one, two, three appear on formal documents, ceremonial labels and gift wrapping, for the same reason English cheques spell out amounts: 一 is one stroke away from 二. Chinese uses the same system with 壹 貳 參.",
              ja:"一、二、三に代えて壱・弐・参が、公の文書、改まった札、贈答の包みに現れる。英語の小切手が金額を綴るのと同じ理由である。一は二から一画の隔たりしかない。中国語は壹・貳・參で同じ仕組みを用いる。",
              zh:"壹、貳、參用於正式文件、儀式性酒標與禮品包裝，理由與英文支票要把金額拼寫出來相同：「一」離「二」只差一畫。中文使用同一套系統：壹、貳、參。" } },
          { k:{ en:"The era year", ja:"元号", zh:"年號" }, jp:"令和・平成・昭和",
            v:{ en:"Not the Gregorian year", ja:"西暦ではない", zh:"不是西曆年" },
            d:{ en:"Japanese bottles date by imperial era. Reiwa began in 2019, so Reiwa 6 is 2024; Heisei ran 1989 to 2019; Shōwa 1926 to 1989. A brewing year is written 令和六酒造年度 and runs from July to June, not January to December. The first year of an era is written 元年, not 一年.",
              ja:"日本の瓶は元号で日を記す。令和は二〇一九年に始まり、ゆえに令和六年は二〇二四年である。平成は一九八九年から二〇一九年、昭和は一九二六年から一九八九年である。醸造の年は令和六酒造年度と書かれ、一月から十二月ではなく七月から六月までを走る。元号の最初の年は一年ではなく元年と書く。",
              zh:"日本的酒瓶以年號紀年。令和始於二〇一九年，因此令和六年即二〇二四年；平成自一九八九至二〇一九年；昭和自一九二六至一九八九年。釀造年度寫作「令和六酒造年度」，從七月跑到隔年六月，而非一月到十二月。年號的第一年寫作「元年」，不寫「一年」。" } },
          { k:{ en:"Dates", ja:"日付", zh:"日期" }, jp:"年月日",
            v:{ en:"Big to small", ja:"大から小へ", zh:"由大到小" },
            d:{ en:"Always year, month, day, in that order: 令和六年十二月十日, or compressed to 6.12.10 on a back label. A date printed with no label beside it is the bottling date — sake carries no expiry date and is not required to.",
              ja:"必ず年・月・日の順である。令和六年十二月十日、あるいは裏の札で6.12.10と縮められる。何の断りもなく刷られた日付は瓶詰の日である。日本酒に消費の期限はなく、また求められてもいない。",
              zh:"一律依年、月、日的順序：令和六年十二月十日，在背標上也可能壓縮為 6.12.10。若日期旁沒有任何標示，那就是裝瓶日期——清酒沒有有效期限，法規也不要求標示。" } }
        ] }
      ] },

{ t:"section", id:"traps",
      title:{ en:"False friends between Japanese and Chinese", ja:"日本語と中国語のあいだの偽の友", zh:"日文與中文之間的假朋友" }, jp:"同字異義",
      body:[
        { t:"p", text:{
          en:"A reader of Chinese can decode most of a sake label on sight, which is an enormous head start and also a trap: the characters are shared, the meanings are not. These are the ones that actually cause mistakes in a shop.",
          ja:"中国語の読み手は、日本酒の札のほとんどを見ただけで解しうる。それは大きな先んじであり、同時に罠でもある。字は共有されており、意味は共有されていない。以下は、店で実際に誤りを生むものである。",
          zh:"中文讀者可以一眼解讀清酒酒標上的大部分內容——這是極大的先天優勢，同時也是陷阱：字是共有的，意義卻不是。以下這些，是在酒鋪裡真正會造成誤解的字。" } },
        { t:"table",
          caption:{ en:"Same characters, different meanings", ja:"同じ字、異なる意味", zh:"相同的字，不同的意義" },
          cols:[{ en:"On the label", ja:"札の上", zh:"酒標上" }, { en:"In Japanese it means", ja:"日本語での意味", zh:"在日文中的意思" }, { en:"A Chinese reader may expect", ja:"中国語の読み手が期待しうるもの", zh:"中文讀者可能以為的意思" }],
          jpCols:[0], keyCol:0,
          rows:[
            ["辛口", { en:"Dry — that is, not sweet. Nothing to do with heat.", ja:"辛口。すなわち甘くないこと。熱さとは関わりがない。", zh:"辛口＝不甜、偏乾。與辣味毫無關係。" },
             { en:"Spicy or pungent, from 辛 as in 辛辣. This is the single most common misreading of a sake label in Chinese, and it points a drinker at exactly the wrong bottle.", ja:"辛辣の辛から、辛い、刺すようなもの。中国語における日本酒の札の最もよくある誤読であり、飲み手をちょうど逆の瓶へ導く。", zh:"以為是辣或辛辣（如「辛辣」的辛）。這是中文世界對清酒酒標最常見的誤讀，而且會把飲者指向完全相反的一瓶酒。" }],
            ["一升", { en:"1.8039 litres. The big bottle.", ja:"一・八〇三九リットル。大瓶である。", zh:"一點八〇三九公升。即大瓶。" },
             { en:"One litre. The ladder 石斗升合勺 is shared with the Chinese 市制, but the metric values were fixed differently: a Chinese 升 is a litre and a 合 is 100 mL, against 1.8 L and 180 mL in Japan. Every volume on a Japanese bottle is therefore 1.8 times what a Chinese reader assumes.", ja:"一リットル。石斗升合勺の階梯は中国の市制と共有されるが、メートル法への値は異なって定められた。中国の一升はリットルであり一合は百ミリリットルであって、日本の一・八リットルと百八十ミリリットルに対する。ゆえに日本の瓶のあらゆる容量は、中国語の読み手が想定する値の一・八倍である。", zh:"以為是一公升。石斗升合勺這套階梯與中國市制共通，但換算成公制時定得不同：中國的一升是一公升、一合是一百毫升，而日本則是一點八公升與一百八十毫升。因此日本酒瓶上的每一個容量，都是中文讀者所設想的一點八倍。" }],
            ["生", { en:"Unpasteurised, and by extension fresh and fragile. 生酒 is sake that has never been heated.", ja:"火入れをしていないこと、転じて新鮮で脆いこと。生酒は一度も加熱していない酒である。", zh:"未經火入（未加熱殺菌），並引申為新鮮而脆弱。生酒是從未加熱過的酒。" },
             { en:"Raw or uncooked, which is close enough to be dangerous — a Chinese reader may take 生酒 as a quality claim rather than a storage instruction, and leave it out of the refrigerator.", ja:"生の、煮ていないもの。近すぎて危うい。中国語の読み手は生酒を保存の指示ではなく品質の主張と取り、冷蔵の外に置きうる。", zh:"以為是生的、未煮過的——這個距離近到危險：中文讀者可能把「生酒」當成品質標榜而非保存指示，於是把它放在冷藏之外。" }],
            ["冷", { en:"Ambiguous even in Japanese. 冷酒 is chilled; 冷や, confusingly, traditionally means room temperature, because the contrast being drawn is with warmed sake, not with cold.", ja:"日本語においてすら曖昧である。冷酒は冷やしたもの。冷やは紛らわしくも、伝統には常温を意味する。対比されているのが冷たさではなく燗だからである。", zh:"即使在日文中也曖昧。「冷酒」是冰鎮的；而「冷や」令人困惑地在傳統上指常溫——因為它所對比的是燗酒，而不是冰。" },
             { en:"Cold, straightforwardly. Ordering 冷や expecting a chilled glass is a classic disappointment.", ja:"素直に冷たいもの。冷えた杯を期待して冷やを頼むことは、古典的な落胆である。", zh:"直觀地理解為「冷的」。點「冷や」卻期待一杯冰鎮酒，是經典的失望。" }],
            ["湯", { en:"Hot water. 湯煎 is the water bath a tokkuri stands in to be warmed.", ja:"湯。湯煎は徳利を立てて燗をつける湯の風呂である。", zh:"熱水。「湯煎」是把德利立在其中加熱的熱水浴。" },
             { en:"Soup. A brewery notice about 湯 is about water temperature, not lunch.", ja:"羹。湯についての蔵の掲示は、昼食ではなく水の温度についてのものである。", zh:"以為是湯品。酒藏裡關於「湯」的告示，說的是水溫，不是午餐。" }],
            ["酢", { en:"Vinegar.", ja:"酢。", zh:"醋。" },
             { en:"A rare character read <em>zuò</em>, meaning to return a toast. Chinese writes vinegar 醋 — the two characters have effectively swapped duties across the strait of writing systems.", ja:"稀な字であり、返杯を意味する。中国語は酢ではなく醋と書く。二つの字は、書記体系の海峡を隔てて、事実上その務めを取り替えている。", zh:"在中文裡是罕用字，讀作 zuò，意為回敬酒。中文寫醋用「醋」——這兩個字在書寫系統的兩岸之間，實際上交換了職務。" }],
            ["杜氏", { en:"The head brewer. Two traditional etymologies compete: from 杜康, the legendary Chinese originator of wine, or from <em>toji</em> 刀自, an old Japanese word for the woman who ran a household — which would make the title of the most senior man in a brewery a woman's word.", ja:"醸造の長である。二つの伝統的な語源が競う。酒の伝説の始祖である杜康からとするものと、家を切り盛りする女を指す古い日本語である刀自からとするものである。後者であれば、蔵で最も高い地位の男の称は、女の語ということになる。", zh:"首席釀造師。有兩種傳統詞源之說彼此競爭：一說源自傳說中的中國酒祖「杜康」，一說源自古日語「刀自」（toji），意指掌管家務的女性——若是後者，那麼酒藏中最高位男性的頭銜，其實是一個屬於女性的詞。" },
             { en:"The Du family. Read as a surname plus 氏, it looks like a person's name rather than a job.", ja:"杜という姓の家。姓に氏を付したものと読めば、職ではなく人の名に見える。", zh:"以為是「杜家」。把它讀成姓氏加上「氏」，看起來像人名而不是職稱。" }],
            ["蔵", { en:"A storehouse; by extension the brewery itself, and the place where its microflora lives. 蔵元 is the owning house.", ja:"倉である。転じて蔵そのものであり、その微生物相の住まう場所である。蔵元は所有する家を指す。", zh:"倉庫；引申指酒藏本身，以及其微生物相所棲居的場所。「藏元」指擁有酒藏的家族。" },
             { en:"The verb to store or to hide, written 藏 in traditional Chinese. Reading 蔵元 as a verb phrase produces nonsense.", ja:"蓄える、隠すという動詞であり、繁体字では藏と書く。蔵元を動詞の句として読めば意味をなさない。", zh:"作為動詞的「藏」（儲存、隱藏）。把「藏元」當動詞片語來讀，會讀出一堆沒有意義的東西。" }],
            ["割", { en:"Two jobs. In 割水 it means to cut with water; in 三割五分 it means a tenth. Both appear on the same bottle.", ja:"二つの務めがある。割水では水で割ること、三割五分では十分の一を意味する。いずれも同じ瓶の上に現れる。", zh:"兩種職務。在「割水」中意為以水稀釋；在「三割五分」中意為十分之一。兩者會出現在同一瓶酒上。" },
             { en:"To cut or divide, which covers the first sense but not the second — the tenths reading is specific to Japanese.", ja:"切る、分けること。第一の意は覆うが第二は覆わない。十分の一の読みは日本語に固有である。", zh:"切、分——這涵蓋了第一種意思，卻不含第二種；「割＝十分之一」的讀法是日文特有的。" }],
            ["燗", { en:"To warm sake, and nothing else. The whole temperature vocabulary — 日向燗, ぬる燗, 上燗, 熱燗, 飛切燗 — is built on this one character.", ja:"酒を温めること、ただそれのみである。日向燗、ぬる燗、上燗、熱燗、飛切燗という温度の語彙の全体が、この一字の上に建てられている。", zh:"專指溫熱清酒，別無他用。整套溫度語彙——日向燗、溫燗、上燗、熱燗、飛切燗——都建立在這一個字之上。" },
             { en:"Effectively unused in modern Chinese. There is no Chinese word for this, because no other culture warms a rice wine through five named temperature bands.", ja:"現代中国語では事実上用いられない。これに当たる中国語の語はない。ほかのどの文化も、米の酒を名のある五つの温度の帯を通して温めはしないからである。", zh:"在現代中文中幾乎不使用。中文沒有對應的詞，因為沒有別的文化會把米酒加熱到五個各有名稱的溫度區間。" }]
          ] },
        { t:"note", title:{ en:"The one that is not a trap", ja:"罠ではないもの", zh:"唯一不是陷阱的那個" }, text:{
          en:"清酒 means the same thing in both languages and always has: clear, filtered rice wine, as opposed to the cloudy unstrained kind. It is the legal term in Japanese tax law, the ordinary term in Chinese for Japanese sake, and the oldest correct answer to the question of what this drink is called.",
          ja:"清酒は両の言語において同じことを意味し、常にそうであった。濁った漉さぬものに対する、澄んだ、漉された米の酒である。日本の酒税法における法の語であり、中国語において日本酒を指す普通の語であり、この飲み物が何と呼ばれるかという問いへの、最も古い正しい答えである。",
          zh:"「清酒」在兩種語言中意思相同，而且一向如此：澄清、經過濾的米酒，相對於混濁未過濾的那一種。它是日本酒稅法中的法律用語，是中文裡指稱日本清酒的一般用語，也是「這種飲料叫什麼」這個問題最古老而正確的答案。" } }
      ] },

    { t:"section", id:"readings",
      title:{ en:"Why one character has three readings", ja:"一字に三つの読みがある理由", zh:"為何一個字有三種讀法" }, jp:"音と訓",
      body:[
        { t:"p", text:{
          en:"Japanese borrowed the characters from Chinese but kept its own words, so almost every character carries at least two readings: the imported sound, and the native word it was used to write. 酒 is the clearest case in this subject, and it has three.",
          ja:"日本語は字を中国から借りながら自らの語を保った。ゆえにほとんどあらゆる字が少なくとも二つの読みを負う。輸入された音と、それを書くために用いられた土着の語である。この主題において最も明快な例が酒であり、それは三つを持つ。",
          zh:"日語從漢語借來了文字，卻保留了自己的詞，因此幾乎每一個字都帶著至少兩種讀法：外來的音，以及它被用來書寫的本土詞。在本主題中最清楚的例子就是「酒」，而它有三種讀法。" } },
        { t:"table",
          caption:{ en:"The three readings of 酒, and when each appears", ja:"酒の三つの読みと、それぞれが現れるとき", zh:"「酒」的三種讀法，以及各自出現的時機" },
          cols:[{ en:"Reading", ja:"読み", zh:"讀音" }, { en:"Type", ja:"種", zh:"類型" }, { en:"Where it appears", ja:"現れる場所", zh:"出現於何處" }],
          keyCol:0,
          rows:[
            ["さけ · sake", { en:"Native, standing alone", ja:"訓、単独", zh:"訓讀，單獨使用" },
             { en:"The word by itself: 酒 means alcohol, or in context sake. This is the reading the English word borrowed, and English narrowed it in the borrowing — in Japanese it means any alcohol at all.", ja:"語として単独で立つとき。酒は酒類を、文脈によっては日本酒を意味する。英語が借りたのはこの読みであり、英語は借りるにあたってそれを狭めた。日本語においては、それはあらゆる酒類を意味する。", zh:"作為單獨的一個詞：「酒」指酒類，依語境也可指日本酒。英語借去的正是這個讀音，而英語在借用時把它的意思變窄了——在日語中，它指的是任何酒類。" }],
            ["さか · saka", { en:"Native, bound form", ja:"訓、連結の形", zh:"訓讀，複合形" },
             { en:"An older compound form that survives in a small closed set of words: 酒屋 sakaya, a liquor shop; 酒蔵 sakagura, a brewery; 酒盛り sakamori, a drinking party; 酒場 sakaba, a bar. When you see 酒 first in a compound and it is a native word, it is usually <em>saka</em>, and this is a fossil of a sound change a thousand years old.", ja:"より古い連結の形であり、閉じた小さな語群に生き残っている。酒屋、酒蔵、酒盛り、酒場である。複合の先頭に酒があり、それが和語であるとき、たいていそれはさかである。これは千年前の音の変化の化石である。", zh:"一種較古老的複合形，殘存於一小組封閉的詞中：酒屋（酒鋪）、酒蔵（酒藏）、酒盛り（酒宴）、酒場（酒吧）。當「酒」出現在複合詞開頭且該詞為和語時，通常讀作 saka——這是一千年前一次語音變化留下的化石。" }],
            ["シュ · shu", { en:"Imported sound", ja:"音", zh:"音讀" },
             { en:"The Chinese-derived reading, used in compounds built out of Chinese elements: 日本酒 nihonshu, 清酒 seishu, 原酒 genshu, 甘酒 amazake is the exception. As a rule of thumb, if the whole word looks Chinese it is read with Chinese sounds all the way through, and if it looks Japanese it is read with Japanese ones.", ja:"中国由来の読みであり、漢語の要素で組まれた複合に用いられる。日本酒、清酒、原酒である。甘酒は例外である。目安として、語の全体が漢語らしく見えるならば通して漢音で読み、和語らしく見えるならば通して和語で読む。", zh:"源自漢語的讀音，用於以漢語元素構成的複合詞：日本酒、清酒、原酒；而「甘酒」是例外。一個粗略的準則是：若整個詞看起來像漢語詞，就整個以漢音來讀；若看起來像和語詞，就整個以和訓來讀。" }]
          ] },
        { t:"defs", items:[
          { term:{ en:"The voicing rule", ja:"連濁", zh:"連濁" }, jp:"連濁", romaji:"rendaku",
            def:{ en:"When a native Japanese word becomes the second half of a compound, its first consonant often voices: <em>sake</em> becomes <em>zake</em>. Hence 樽酒 <em>taruzake</em>, 冷や酒 <em>hiyazake</em>, 甘酒 <em>amazake</em>, 濁り酒 <em>nigorizake</em>, 地酒 <em>jizake</em>. Compounds built from Chinese readings do not do this — 日本酒 stays <em>nihonshu</em>, never <em>nihonzake</em>. If you can hear whether it is <em>-zake</em> or <em>-shu</em>, you know which kind of word you are looking at before you know what it means.",
              ja:"和語が複合の後半となるとき、その最初の子音はしばしば濁る。さけがざけとなる。ゆえに樽酒、冷や酒、甘酒、濁り酒、地酒である。漢語の読みで組まれた複合はこれを行わない。日本酒は日本酒のままであり、にほんざけとはならない。ざけかしゅかを聞き分けられるなら、意味を知る前に、それがどの種の語かが分かる。",
              zh:"當一個和語詞成為複合詞的後半時，它的首音常會濁化：sake 變成 zake。因此有樽酒 taruzake、冷や酒 hiyazake、甘酒 amazake、濁り酒 nigorizake、地酒 jizake。以漢音構成的複合詞不會這樣——日本酒始終是 nihonshu，絕不會是 nihonzake。如果你能聽出它是 -zake 還是 -shu，那麼在知道意思之前，你就已經知道它是哪一類詞了。" } },
          { term:{ en:"Counting sake", ja:"酒を数える", zh:"清酒的計數" }, jp:"助数詞", romaji:"josūshi",
            def:{ en:"Japanese counts different objects with different words, and sake uses several. Bottles are counted with 本 <em>hon</em>: 一本, 二本, 三本. Cups and glasses of anything liquid use 杯 <em>hai</em>: 一杯 is one cup, and it is also the idiom for a drink in general. Volume uses the old measures directly — 一合, 二合, 一升. And 一献 <em>ikkon</em> is a formal single offered cup, the word you would use inviting someone for a drink in writing rather than in a bar.",
              ja:"日本語は物ごとに異なる語で数え、酒はいくつかを用いる。瓶は本で数える。一本、二本、三本である。液の入った杯や硝子は杯で数える。一杯は一つの杯であり、また一般に一献を指す言い回しでもある。容量は古い尺度をそのまま用いる。一合、二合、一升である。そして一献は改まって差し出される一つの杯であり、酒場においてではなく書面において人を誘うときに用いる語である。",
              zh:"日語以不同的量詞計數不同的物件，而清酒用到好幾個。瓶用「本」：一本、二本、三本。任何液體的杯子則用「杯」：一杯是一個杯子，同時也是泛指「喝一杯」的慣用語。容量則直接沿用舊的度量：一合、二合、一升。而「一獻」是正式奉上的一杯，是你在書面上、而非在酒吧裡邀人喝酒時會用的詞。" } },
          { term:{ en:"When the label is not in kanji", ja:"札が漢字でないとき", zh:"當酒標不是漢字時" }, jp:"仮名", romaji:"kana",
            def:{ en:"Hiragana on a label is a deliberate softening: ひやおろし, しぼりたて, あらばしり, にごり could all be written in kanji and are usually not, because the rounded script reads as informal, seasonal and approachable in a way the characters do not. Katakana marks the foreign and the technical: カップ, アルコール, フルーティー, and every yeast name. A label that mixes all three scripts is not being inconsistent; it is using three registers, and a Japanese reader picks them up without noticing.",
              ja:"札の平仮名は意図された和らげである。ひやおろし、しぼりたて、あらばしり、にごりはいずれも漢字で書きうるが、たいていそうしない。丸い字は、漢字にはできぬ仕方で、くだけて、季節らしく、近づきやすく読めるからである。片仮名は外来と技術を印す。カップ、アルコール、フルーティー、そしてあらゆる酵母の名である。三つの文字を混ぜる札は一貫していないのではない。三つの調子を用いているのであり、日本語の読み手は気づかぬままそれを受け取っている。",
              zh:"酒標上的平假名是一種刻意的柔化：ひやおろし、しぼりたて、あらばしり、にごり 全都可以用漢字書寫，卻通常不這麼寫——因為圓潤的假名讀起來隨性、帶季節感、易於親近，而漢字做不到這一點。片假名則標記外來與技術性事物：カップ、アルコール、フルーティー，以及所有酵母的名稱。一張混用三種文字的酒標並不是前後不一致；它是在使用三種語域，而日語讀者會在毫無察覺的情況下接收到它們。" } }
        ] }
      ] },

    { t:"section", id:"scripts",
      title:{ en:"How the label is written", ja:"札の書かれ方", zh:"酒標是怎麼寫的" }, jp:"書体と旧字",
      body:[
        { t:"p", text:{
          en:"A sake label is one of the last places in ordinary Japanese commerce where a brand name is still routinely brushed by hand rather than set in a typeface. The script chosen carries as much information as the words.",
          ja:"日本酒の札は、日常の日本の商いにおいて、銘柄の名が今なお活字ではなく手で書かれることの常である、最後の場所の一つである。選ばれた書体は、語と同じだけの情報を負う。",
          zh:"清酒酒標，是日本日常商業中最後幾個「品牌名仍慣常以手書、而非以字體排版」的地方之一。所選的書體，承載著與文字本身同樣多的訊息。" } },
        { t:"defs", items:[
          { term:{ en:"Clerical script", ja:"隷書", zh:"隸書" }, jp:"隷書", romaji:"reisho",
            def:{ en:"Broad, flat, horizontally stretched, with flared strokes — a Han-dynasty official hand. It reads as ancient, formal and stable, and it is the most common choice for a brewery that wants to say it has been here a long time.",
              ja:"広く、平たく、横に伸び、払いの開いた、漢の官の手である。古く、改まり、揺るがぬものとして読まれ、長くここにあると言いたい蔵の最も多い選びである。",
              zh:"寬扁、橫向拉伸、筆畫末端張開——漢代官方書體。它讀起來古老、正式而穩重，是想表達「我們在此已久」的酒藏最常見的選擇。" } },
          { term:{ en:"Running script", ja:"行書", zh:"行書" }, jp:"行書", romaji:"gyōsho",
            def:{ en:"Semi-cursive: the strokes connect, the hand moves, and the character stays legible. It reads as alive rather than institutional, and it is what most modern premium brands use when they want warmth without illegibility.",
              ja:"半ば崩したものである。画は連なり、手は動き、字は読める。制度のものではなく生きたものとして読まれ、判じえぬことなく温かさを望む現代の高級の銘柄の多くが用いる。",
              zh:"半草書：筆畫相連、手在移動，而字仍可辨識。它讀起來是活的而非制式的，也是多數當代高級品牌在想要溫度、又不想犧牲可讀性時所採用的書體。" } },
          { term:{ en:"Cursive script", ja:"草書", zh:"草書" }, jp:"草書", romaji:"sōsho",
            def:{ en:"Fully cursive, and often genuinely unreadable to people who read Japanese perfectly well. When a brewery sets its name in sōsho it is making a decision about mood over communication — which is why the same bottle usually repeats the name legibly somewhere smaller.",
              ja:"完全に崩したものであり、日本語をよく読む人にも実際に読めぬことが多い。蔵が名を草書で組むとき、それは伝えることよりも気配を選ぶ決断である。同じ瓶がたいてい、どこか小さな所で名を読めるかたちに繰り返す理由である。",
              zh:"完全的草書，對能流利閱讀日文的人來說往往也真的認不出來。當一家酒藏以草書寫下自己的名字時，它是在「氛圍」與「傳達」之間做出選擇——這也是為什麼同一瓶酒通常會在某個較小的位置，再把名字清楚地寫一次。" } },
          { term:{ en:"Seal script and the seal", ja:"篆書と印", zh:"篆書與印章" }, jp:"篆書・落款", romaji:"tensho, rakkan",
            def:{ en:"The oldest of the standard scripts, now used almost exclusively for carved seals. The small red square stamp on a label is a seal impression, usually the brewery's mark or the head's name, and it functions as a signature: it says a person, not a marketing department, stands behind this bottle.",
              ja:"標準の書体のうち最も古く、今日ではほとんど彫られた印にのみ用いられる。札の上の小さな朱の四角は印影であり、たいてい蔵の印か当主の名であって、署名として働く。売り方の部署ではなく一人の人がこの瓶の後ろに立っていると告げるのである。",
              zh:"標準書體中最古老的一種，如今幾乎只用於篆刻印章。酒標上那個小小的紅色方形是印章鈐印，通常是酒藏的標記或當家的名字，其作用等同簽名：它宣告站在這瓶酒背後的是一個人，而不是一個行銷部門。" } },
          { term:{ en:"Old character forms", ja:"旧字体", zh:"舊字體" }, jp:"旧字体", romaji:"kyūjitai",
            def:{ en:"Japan simplified its characters in 1946; brand names largely did not follow. So labels still carry 醸 as 釀, 沢 as 澤, 国 as 國, 蔵 as 藏, 竜 as 龍, 栄 as 榮. A brewery keeps the old form because the name is older than the reform, and because the older glyph is denser and looks better brushed. For a reader of traditional Chinese this is a gift: the characters on an old sake label are frequently the ones you already use.",
              ja:"日本は昭和二十一年（1946）に字を簡めたが、銘柄の名はおおむね従わなかった。ゆえに札は今も醸を釀、沢を澤、国を國、蔵を藏、竜を龍、栄を榮と負う。蔵が旧い形を保つのは、名が改革より古いからであり、旧い字形の方が密で、筆で書いて美しいからである。繁体字の読み手にとってこれは贈り物である。古い日本酒の札の字は、しばしばすでに用いている字そのものである。",
              zh:"日本在一九四六年簡化了漢字，品牌名卻大多沒有跟進。因此酒標上至今仍寫作釀而非醸、澤而非沢、國而非国、藏而非蔵、龍而非竜、榮而非栄。酒藏保留舊字形，是因為名字比那場改革更古老，也因為舊字形筆畫更密、書寫起來更好看。對繁體中文讀者而言這是一份禮物：老清酒酒標上的字，往往正是你早已在使用的字。" } }
        ] },
        { t:"tiny", text:{
          en:"Related: <a href=\"label.html\">Reading a Label</a> for what the words mean, <a href=\"brands.html\">Brands &amp; Houses</a> for why so many are called 正宗, and <a href=\"glossary.html\">Glossary</a> for the full vocabulary.",
          ja:"関連——語の意味は<a href=\"label.html\">表示の読み方</a>、なぜかくも多くが正宗と名乗るのかは<a href=\"brands.html\">銘柄と蔵元</a>、語彙の全体は<a href=\"glossary.html\">用語集</a>。",
          zh:"相關：字詞的意義見<a href=\"label.html\">酒標判讀</a>；為何如此多品牌名為「正宗」見<a href=\"brands.html\">品牌與酒藏</a>；完整詞彙見<a href=\"glossary.html\">術語表</a>。" } }
      ] },

    { t:"related", items:[
      { href:"label.html", why:{ en:"The same characters where you will actually meet them.", ja:"同じ文字に実際に出会う場所。", zh:"你真正會遇到這些字的地方。" } },
      { href:"words.html", why:{ en:"The words those characters build.", ja:"それらの文字が組み立てる語。", zh:"這些字所組成的詞。" } },
      { href:"glossary.html", why:{ en:"Everything alphabetically, with readings.", ja:"すべてを五十音順に、読み付きで。", zh:"全部依字順排列，附讀音。" } },
      { href:"tables.html", why:{ en:"Era years, units, and the other things printed in kanji.", ja:"元号、単位、そして漢字で刷られる他のもの。", zh:"年號、單位，以及其他以漢字印出的東西。" } }
    ] }
  ]
};


/* ---- -------------------------------------- sustainability */
SAKE.pages["sustainability"] = {
  kicker: { en: "Understanding · 13", ja: "理解 · 13", zh: "理解 · 13" },
  title:  { en: "The Footprint", ja: "酒の足あと", zh: "清酒的足跡" },
  jp: "環境と資源",
  lede: {
    en: "Sake is often described as an inherently gentle product — rice, water, mould, nothing else. Some of that is true and some of it is marketing, and the parts that matter are not the parts usually mentioned. This page sets out where the resources actually go: the water a brewery uses that never touches the mash, the methane that comes off a flooded paddy, the weight of glass, and the refrigerated container crossing an ocean. It also says plainly which of these are large and which are rounding errors.",
    ja: "日本酒はしばしば、それ自体として穏やかな品と語られる。米、水、黴、他に何もない、と。その一部は真であり、一部は売り方であり、そして重いのは、たいてい語られる部分ではない。この頁は、資源が実際にどこへ行くのかを示す。醪に触れることのない蔵の水、湛水した田から出る沼気、硝子の重さ、そして海を渡る冷蔵の貨物である。そのうちどれが大きく、どれが端数であるかも率直に述べる。",
    zh: "清酒常被描述為一種本質上溫和的產品——米、水、黴菌，別無其他。這其中有一部分是真的，有一部分是行銷，而真正要緊的部分，通常不是被提起的那些。本頁攤開資源實際流向何處：酒藏使用卻從未接觸到醪的水、從淹水稻田釋出的甲烷、玻璃的重量，以及橫渡大洋的冷藏貨櫃。它也會直說其中哪些是大項，哪些只是零頭。"
  },
  body: [

    { t:"section", id:"water",
      title:{ en:"Water, and where it actually goes", ja:"水は実際どこへ行くか", zh:"水，以及它究竟去了哪裡" }, jp:"水",
      body:[
        { t:"figure",
          caption:{
            en:"Two accounts a brewery rarely publishes together. The top bar is the water: of the fifty times the rice weight that a brewery draws, the sliver at the left is the part that becomes sake — the part the whole terroir argument is about — and the rest is washing, steam, cooling and cleaning, almost all of which is an engineering problem rather than a compromise. The bottom bars are the field: because polishing throws away the outside of the grain, a deeply polished bottle stands on nearly twice the paddy of a lightly polished one. That is a real environmental cost of daiginjō, and it is almost never named as one.",
            ja:"蔵が同じ頁に並べて出すことの稀な、二つの勘定。上の棒は水である。蔵の汲む米の重さの五十倍のうち、左端の細片が酒になる分であり——風土の議論の全体が問題にしているのはその分である——残りは洗い、蒸気、冷却、掃除であって、そのほとんどは妥協ではなく技術の問題である。下の棒は田である。精米は粒の外側を捨てるのだから、深く磨いた一本は、浅く磨いた一本のおよそ二倍の田の上に立っている。それは大吟醸の実際の環境の費えであり、そしてほとんど決してそう名指されない。",
            zh:"兩份酒藏很少並列公布的帳。上方的長條是水：酒藏取用的水量約為用米重量的五十倍，而左端那道細片才是真正變成酒的部分——整套風土論證所談的正是它——其餘則用於洗米、蒸氣、冷卻與清洗，其中絕大部分是工程問題而非取捨問題。下方的長條是田：因為精米丟掉的是米粒的外層，一支深度精磨的酒，站在將近兩倍於淺磨者的稻田之上。那是大吟釀真實的環境成本，而它幾乎從不被如此指名。" },
          svg: function (lang, L) {
            var W = 760, H = 424, X0 = 60, X1 = 720;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* --- the water --- */
            s += '<text x="' + X0 + '" y="34" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "蔵が汲む水・米の重さの何倍か" : lang === "zh" ? "酒藏取用的水・為用米重量的幾倍" : "THE WATER A BREWERY DRAWS, AS A MULTIPLE OF THE RICE WEIGHT") + '</text>';
            var BY = 74, BH = 42, sliver = 1.3 / 50 * (X1 - X0);
            s += '<rect x="' + X0 + '" y="' + BY + '" width="' + (X1 - X0) + '" height="' + BH + '" fill="#DDE5E8" stroke="#B9C3C8"/>';
            s += '<rect x="' + X0 + '" y="' + BY + '" width="' + sliver.toFixed(1) + '" height="' + BH + '" fill="#7C8E99"/>';
            s += '<line x1="' + (X0 + sliver / 2).toFixed(1) + '" y1="' + BY + '" x2="' + (X0 + sliver / 2).toFixed(1) + '" y2="52" stroke="#7C8E99"/>';
            s += '<text x="' + (X0 + sliver + 12).toFixed(1) + '" y="49" font-size="10.5" fill="#4F6672">' +
                 (lang === "ja" ? "一・三倍——酒になる水。風土の議論はこの細片についてである。"
                  : lang === "zh" ? "一・三倍——變成酒的水。風土之論談的就是這道細片。"
                  : "1.3× — the water that becomes sake. The terroir argument is about this sliver.") + '</text>';
            s += '<text x="' + (X0 + sliver + 16).toFixed(1) + '" y="' + (BY + 26) + '" font-size="11" fill="#4F6672">' +
                 (lang === "ja" ? "残りの四十八・七倍——洗米、浸漬、蒸気、冷却、掃除。ほとんど何一つ酒にならない。"
                  : lang === "zh" ? "其餘的四十八・七倍——洗米、浸漬、蒸氣、冷卻、清洗。幾乎沒有一滴變成酒。"
                  : "the other 48.7× — washing, soaking, steam, cooling, cleaning. Almost none of it becomes sake.") + '</text>';
            var t;
            for (t = 0; t <= 50; t += 10) {
              var tx = X0 + t / 50 * (X1 - X0);
              s += '<line x1="' + tx + '" y1="' + (BY + BH) + '" x2="' + tx + '" y2="' + (BY + BH + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + tx + '" y="' + (BY + BH + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + t + '×</text>';
            }
            s += '<line x1="30" y1="168" x2="' + (W - 30) + '" y2="168" stroke="#DED8CB"/>';
            /* --- the field --- */
            s += '<text x="' + X0 + '" y="196" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一本の四合瓶の背後にある玄米・キログラム" : lang === "zh" ? "一支四合瓶背後的糙米・公斤" : "BROWN RICE BEHIND ONE 720 ML BOTTLE, IN KILOGRAMS") + '</text>';
            var RX = 150, RW = X1 - RX, RY = 216, RH2 = 38, MAXKG = 1.0;
            var rows = [
              { p:"70%", kg:0.45, f:"#E7DFD2", n:{ en:"an ordinary junmai", ja:"ふつうの純米", zh:"一般純米" } },
              { p:"60%", kg:0.52, f:"#DED0B4", n:{ en:"a ginjō", ja:"吟醸", zh:"吟釀" } },
              { p:"50%", kg:0.63, f:"#CDBFA2", n:{ en:"a daiginjō", ja:"大吟醸", zh:"大吟釀" } },
              { p:"35%", kg:0.89, f:"#B09E7C", n:{ en:"a competition daiginjō", ja:"鑑評会の大吟醸", zh:"鑑評會等級大吟釀" } }
            ];
            var i, g;
            for (g = 0.2; g <= 1.001; g += 0.2) {
              var gx = RX + g / MAXKG * RW;
              s += '<line x1="' + gx.toFixed(1) + '" y1="' + (RY - 8) + '" x2="' + gx.toFixed(1) + '" y2="' + (RY + rows.length * RH2 - 8) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + gx.toFixed(1) + '" y="' + (RY + rows.length * RH2 + 8) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g.toFixed(1) + '</text>';
            }
            for (i = 0; i < rows.length; i++) {
              var r = rows[i], y = RY + i * RH2;
              s += '<text x="' + (RX - 14) + '" y="' + (y + 14) + '" text-anchor="end" font-size="12.5" fill="#201E1B">' + r.p + '</text>';
              s += '<text x="' + (RX - 14) + '" y="' + (y + 27) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(r.n) + '</text>';
              s += '<rect x="' + RX + '" y="' + (y + 2) + '" width="' + (r.kg / MAXKG * RW).toFixed(1) + '" height="20" fill="' + r.f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (RX + r.kg / MAXKG * RW + 9).toFixed(1) + '" y="' + (y + 17) + '" font-size="11" fill="#55504A">' + r.kg.toFixed(2) + ' kg</text>';
            }
            s += '<line x1="' + RX + '" y1="' + (RY + rows.length * RH2 - 8) + '" x2="' + X1 + '" y2="' + (RY + rows.length * RH2 - 8) + '" stroke="#B4AC9C"/>';
            s += '<text x="30" y="' + (H - 24) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "玄米の量は、白米一キログラムから酒がおよそ二・三リットル得られるとして、精米歩合で割り戻したものである。"
                  : lang === "zh" ? "糙米量的算法：假設每公斤白米約可得二・三公升清酒，再依精米步合回推。"
                  : "The rice figures assume about 2.3 litres of sake per kilogram of white rice, divided back by the polishing ratio.") + '</text>';
            s += '<text x="30" y="' + (H - 9) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "田の面積はさらに大きく振れる。酒米は飯米より収量が少ない。糠は売られるが、それを育てた田はいずれにせよ瓶に計上される。"
                  : lang === "zh" ? "田地面積的差距更大：酒米單位產量低於飯米。米糠會被賣掉，但種出它的那片田無論如何都算在這瓶酒頭上。"
                  : "Field area swings wider still, since sake rice yields less per hectare, and the paddy is charged to the bottle either way.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"A brewery is commonly said to use around fifty times the weight of its rice in water. The mash itself takes about 1.3 times. Everything else — better than nine parts in ten — is washing, soaking, steam, cooling and cleaning.",
          ja:"蔵は米の重さのおよそ五十倍の水を用いると広く言われる。醪そのものが取るのは一・三倍ほどである。他のすべて——十のうち九を超える——は、洗い、浸し、蒸気、冷却、そして掃除である。",
          zh:"一般說法是，酒藏使用的水量約為其用米重量的五十倍。而醪本身只取用約一點三倍。其餘的一切——超過十分之九——都用於洗米、浸漬、蒸氣、冷卻與清洗。" } },
        { t:"grid", cols:2, cells:[
          { k:{ en:"Into the sake", ja:"酒になる水", zh:"進入酒中的水" }, jp:"仕込水",
            v:{ en:"About 1.3×", ja:"およそ一・三倍", zh:"約 1.3 倍" },
            d:{ en:"The brewing water proper, plus what is already inside the steamed rice. This is the water the whole terroir argument is about, and it is a small fraction of what the building draws.",
              ja:"本来の仕込水と、蒸米の内にすでにある水である。風土の議論の全体が問題にしているのはこの水であり、そしてそれは建物の汲む量のわずかな一部である。",
              zh:"真正的仕込用水，加上蒸米內部已含的水。整套風土論證所談的正是這些水，而它只占這棟建築取水量的一小部分。" } },
          { k:{ en:"Everything else", ja:"その他すべて", zh:"其餘一切" }, jp:"洗浄・冷却",
            v:{ en:"The other 48×", ja:"残りの四十八倍", zh:"其餘的 48 倍" },
            d:{ en:"Rice washing, soaking, boiler feed and blowdown, tank jackets and chillers, hoses, floors, the press, the bottling line. Almost none of it becomes sake and almost all of it can be reduced by engineering rather than by compromise. Recirculating cooling loops instead of once-through, and reusing final-rinse water as first-rinse water, are the two changes that move the number most.",
              ja:"洗米、浸漬、ボイラーの給水と排水、槽の被いと冷凍機、管、床、槽場、瓶詰の生産線。そのほとんどは酒にならず、そしてそのほとんどは、妥協ではなく技術によって減らしうる。一度きりの通水ではなく循環する冷却の環にすること、最後の濯ぎ水を最初の濯ぎ水として使い直すこと。この二つが数を最も動かす。",
              zh:"洗米、浸漬、鍋爐給水與排放、酒槽夾套與冷卻機、管線、地板、壓榨機、裝瓶線。其中幾乎沒有一滴會變成酒，而其中幾乎所有的量都可以靠工程手段、而非靠妥協來削減。把一次通過式冷卻改為循環冷卻迴路，以及把最後一道沖洗水回用作第一道沖洗水，是最能改變這個數字的兩項變更。" } },
          { k:{ en:"Borrowed, not consumed", ja:"消費ではなく借用", zh:"借用，而非消耗" }, jp:"還る水",
            v:{ en:"But not clean", ja:"ただし清らかではない", zh:"但並不乾淨" },
            d:{ en:"Most of that water returns to the watershed, so the honest accounting is about quality rather than quantity. Brewery effluent carries a high organic load — rice starch, yeast, lees traces — and a small brewery discharging untreated would be a significant local polluter. Wastewater treatment is a real and unglamorous cost line, and it is the environmental item breweries are actually regulated on.",
              ja:"その水のほとんどは流域へ還る。ゆえに正直な勘定は量ではなく質についてのものである。蔵の排水は高い有機の負荷を負う。米の澱粉、酵母、粕の名残である。小さな蔵が処理せずに流せば、その土地の相当な汚染源となる。排水の処理は実際の、そして華のない費えの一項であり、蔵が実際に規制を受けている環境の項目はこれである。",
              zh:"這些水大部分會回到流域，因此誠實的計算談的是水質而非水量。酒藏的廢水帶有高有機負荷——米澱粉、酵母、酒粕殘留——一家小酒藏若未經處理就排放，會是當地相當可觀的汙染源。廢水處理是一筆真實而不光鮮的成本項目，也是酒藏在環境面向上真正受到法規約束的那一項。" } },
          { k:{ en:"The long view", ja:"長い目", zh:"長遠來看" }, jp:"水源涵養",
            v:{ en:"Buy the forest", ja:"森を買う", zh:"買下那座森林" },
            d:{ en:"A brewery's well is the output of a watershed whose behaviour is set by land use decades upstream and years earlier. Several houses, and the large drinks companies more systematically, now buy or sponsor forest above their springs and manage it for infiltration. It is the only environmental measure in this industry with a payback measured in generations, and it is the one that most directly protects the product.",
              ja:"蔵の井戸は、数十年上流の土地の使い方と、数年前の出来事によって振舞いの定まる流域の出口である。いくつかの家が、そしてより組織立って大きな飲料の会社が、泉の上の森を買い、あるいは支え、水の浸み込みのために手を入れている。この産業において、報いが世代で測られる唯一の環境の手立てであり、そして品そのものを最も直に守る手立てである。",
              zh:"酒藏的水井，是一個流域的輸出端，而這個流域的行為由數十年前上游的土地利用、以及數年前的降水所決定。有數家酒藏——大型飲料企業則更有系統地——買下或贊助其泉源上方的森林，並以促進入滲為目標加以經營。這是這個產業中唯一一項回報以「世代」為單位計算的環境措施，也是最直接保護產品本身的一項。" } }
        ] }
      ] },

    { t:"section", id:"paddy",
      title:{ en:"The paddy is the biggest item", ja:"最も大きいのは田である", zh:"最大的一項是稻田" }, jp:"水田とメタン",
      body:[
        { t:"p", text:{
          en:"If you build an honest carbon account for a bottle of sake, the largest single line is not the brewery. It is the field. Flooded rice paddies are anaerobic, and anaerobic soil produces methane — a gas with far more warming effect per kilogram than carbon dioxide. Rice is among the most climate-intensive staple crops for exactly this reason, and sake is made of rice.",
          ja:"一本の酒について正直な炭素の勘定を組めば、最も大きな一項は蔵ではない。田である。湛水した水田は嫌気であり、嫌気の土は沼気を生む。一キロあたり二酸化炭素よりはるかに大きな温める力を持つ気体である。米がまさにこの理由で最も気候に重い主食の作物の一つであり、そして日本酒は米でできている。",
          zh:"如果為一瓶清酒建立一份誠實的碳帳，最大的單一項目不是酒藏，而是稻田。淹水的稻田是厭氧環境，而厭氧土壤會產生甲烷——一種每公斤暖化效應遠強於二氧化碳的氣體。稻米正是因此成為氣候負擔最重的主食作物之一，而清酒就是用米做的。" } },
        { t:"defs", items:[
          { term:{ en:"The intervention that works", ja:"効く手立て", zh:"真正有效的介入" }, jp:"中干しの延長", romaji:"nakaboshi no enchō",
            def:{ en:"Japanese rice growing already includes <em>nakaboshi</em>, a mid-season drainage in which the field is drained and allowed to dry for several days. Extending that drainage by about a week interrupts methane production substantially — the agriculture ministry puts the reduction at roughly thirty per cent — and in March 2023 it was approved as a national carbon-credit methodology, so a grower who does it can be paid for it. It costs nothing but scheduling and it does not reduce yield if timed correctly.",
              ja:"日本の稲作にはすでに中干しがある。田の水を落とし、数日のあいだ乾かす中期の落水である。それをおよそ一週間延ばすと沼気の生成が大きく断たれる。農林水産省はその削減をおよそ三割としている。そして令和五年（2023）三月、それは国の炭素の証書の方法論として承認された。ゆえに行う生産者はそれによって支払いを受けうる。要するのは日取りだけであり、時を誤らなければ収量も落ちない。",
              zh:"日本的稻作本來就有「中干」——在生育中期把田水放乾、讓田面乾燥數日。把這段排水期延長約一週，能大幅中斷甲烷的生成——農林水產省將減量幅度估為約三成——而在二〇二三年三月，它被核可為國家碳權方法論，因此執行的農民可以因此獲得報酬。它除了排程之外不花任何成本，而且只要時機拿捏得當，也不會降低產量。" } },
          { term:{ en:"The awkward part", ja:"具合の悪いところ", zh:"尷尬的地方" }, jp:"低収量", romaji:"tei-shūryō",
            def:{ en:"Sake rice yields less per hectare than table rice and is grown with deliberately restrained fertiliser, so a litre of premium sake carries more field-hectares behind it than the same litre of an ordinary one. Polishing makes this worse: a daiginjō at 35% discards two thirds of the grain from the sake's point of view, and although the bran is sold on, the paddy that grew it is charged to the bottle either way. Deep polishing is a genuine environmental cost and it is almost never named as one.",
              ja:"酒米は飯米よりヘクタール当たりの収量が少なく、肥を意図して抑えて育てられる。ゆえに高級な酒一リットルの背後にある田の面積は、普通の一リットルより大きい。精米はそれを悪くする。三十五パーセントの大吟醸は、酒の側から見れば粒の三分の二を捨てている。糠は売られるとはいえ、それを育てた田はいずれにせよ瓶に計上される。深い精米は本当の環境の費えであり、そしてほとんど決してそう名指されない。",
              zh:"酒米每公頃的產量低於飯米，而且是在刻意壓低施肥的條件下栽培的，因此一公升高級清酒背後所承載的田地面積，多於同樣一公升的普通酒。精磨讓情況更糟：一款精磨到 35% 的大吟釀，從酒的角度看等於丟棄了三分之二的米粒；儘管米糠會被賣掉，種出它的那片稻田無論如何都要算在這瓶酒頭上。深度精磨是一項真實的環境成本，而它幾乎從來不被如此指名。" } },
          { term:{ en:"And the counterweight", ja:"そして反対の重り", zh:"以及另一端的砝碼" }, jp:"田を保つ", romaji:"ta wo tamotsu",
            def:{ en:"Against that: a paddy that is farmed is a paddy that is not abandoned, and abandoned terraced fields in mountain Japan collapse, silt the rivers and lose their biodiversity within a decade. Sake rice contracts keep marginal upland fields in production that no table-rice economics would support. Whether that is worth the methane is a real question with a real answer in each valley, and it is not one a label can settle.",
              ja:"それに対して。耕される田は捨てられぬ田である。そして山の日本の捨てられた棚田は、十年のうちに崩れ、川を濁らせ、その生きものの多様さを失う。酒米の契約は、飯米の採算では支ええぬ山あいの縁の田を、生きたまま保つ。それが沼気に見合うか否かは実際の問いであり、谷ごとに実際の答えがある。そしてそれは札の決めうることではない。",
              zh:"與此相對：一塊被耕作的田，就是一塊沒有被廢耕的田；而日本山區被廢棄的梯田，會在十年之內崩塌、使河川淤積，並失去其生物多樣性。酒米的契作，讓那些以飯米經濟根本撐不住的邊際山田得以繼續生產。這是否值得那些甲烷，是一個真實的問題，而且在每一條山谷裡都有各自真實的答案——那不是一張酒標能夠裁決的事。" } }
        ] }
      ] },
    { t:"section", id:"energy",
      title:{ en:"Steam in, cold out", ja:"蒸気を入れ、冷を出す", zh:"蒸氣進來，冷氣出去" }, jp:"熱と電気",
      body:[
        { t:"p", text:{
          en:"Brewing sake is thermally demanding in both directions at the same time, which is unusual and which is why a brewery's energy bill does not resemble a winery's. Rice has to be steamed, which means a boiler; the mash then has to be held cold for a month, which means compressors running continuously. The two demands do not cancel and they are rarely integrated, and the gap between them is the largest single opportunity in a brewery that has already dealt with its bottles.",
          ja:"日本酒の造りは、熱において二つの向きへ同時に要求する。それは珍しいことであり、蔵の電気代が葡萄酒の蔵のそれに似ない理由でもある。米は蒸さねばならず、それは釜を意味する。そののち醪は一月にわたり冷たく保たれねばならず、それは圧縮機が絶えず回ることを意味する。二つの要求は互いを打ち消さず、そして統べられることも稀である。その隙間こそ、瓶の問題をすでに片づけた蔵にとって最大の一つの機会である。",
          zh:"釀清酒在熱的兩個方向上同時提出要求，這相當不尋常，也是酒藏的能源帳單不像葡萄酒莊的原因。米必須蒸，那意味著鍋爐；接著醪必須維持低溫一個月，那意味著壓縮機不停地轉。這兩項需求並不會互相抵銷，而且很少被整合起來；而它們之間的落差，正是一家已經處理完瓶子問題的酒藏最大的單一機會。" } },

        { t:"figure",
          caption:{
            en:"One batch, and the two things the brewery is paying for. The dark marks along the top are rice steamings — each one a boiler run, and a ginjō batch needs several. The line is the temperature the mash has to be held at, which for a ginjō means the high single figures for weeks. Everything between that line and the outside air is work a compressor has to do, and the shaded band is the difference between doing it in January and doing it in August. The whole traditional calendar is a way of not paying for that band, and four-season brewing is the decision to pay for it in exchange for using the building all year.",
            ja:"一仕込みと、蔵が支払っている二つのもの。上に並ぶ濃い印は米を蒸すことであり、その一つ一つが釜を焚くことである。吟醸の仕込みには幾度も要る。線は醪を保たねばならぬ温度であり、吟醸であれば幾週にもわたる一桁の後半を意味する。その線と外の空気とのあいだのすべては、圧縮機がなさねばならぬ仕事である。そして帯が示すのは、それを一月になすことと八月になすことの差である。伝統の暦の全体はその帯を支払わずに済ませる術であり、四季醸造とは、建物を一年を通して使う代わりにそれを支払うという決めである。",
            zh:"一次仕込，以及酒藏正在為之付錢的兩件事。上方那排深色標記是蒸米，每一次都是一次鍋爐運轉，而一批吟釀需要好幾次。那條線是醪必須被維持的溫度——對吟釀而言意味著連續數週停在個位數的高端。那條線與外界空氣之間的一切，都是壓縮機必須做的工作；而陰影帶顯示的，是在一月做這件事與在八月做這件事的差別。整套傳統曆法就是一種「不必支付那條帶」的方法，而四季釀造則是一個決定：付錢買下它，換取整年都能使用這棟建築。" },
          svg: function (lang, L) {
            var W = 760, H = 296, X0 = 80, X1 = 660, Y0 = 56, Y1 = 224;
            function x(d) { return X0 + d / 32 * (X1 - X0); }
            function y(t) { return Y1 - t / 32 * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, g, pts = [[0,12],[2,11],[4,9.5],[6,8.5],[10,8],[16,8],[22,8.5],[26,9.5],[30,10],[32,10]];
            for (g = 0; g <= 32; g += 8) {
              s += '<line x1="' + X0 + '" y1="' + y(g).toFixed(1) + '" x2="' + X1 + '" y2="' + y(g).toFixed(1) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + (X0 - 9) + '" y="' + (y(g) + 3.5).toFixed(1) + '" text-anchor="end" font-size="9" fill="#B4AEA4">' + g + '°</text>';
            }
            var poly = "M" + x(0).toFixed(1) + " " + y(28).toFixed(1) + " L" + x(32).toFixed(1) + " " + y(28).toFixed(1);
            for (i = pts.length - 1; i >= 0; i--) poly += " L" + x(pts[i][0]).toFixed(1) + " " + y(pts[i][1]).toFixed(1);
            s += '<path d="' + poly + ' Z" fill="#EDE9E0"/>';
            s += '<line x1="' + X0 + '" y1="' + y(28).toFixed(1) + '" x2="' + X1 + '" y2="' + y(28).toFixed(1) + '" stroke="#B09E7C" stroke-dasharray="4 3"/>';
            s += '<text x="' + (X1 - 4) + '" y="' + (y(28) - 6).toFixed(1) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "外気・八月ごろ" : lang === "zh" ? "外氣・八月前後" : "outside air, August") + '</text>';
            s += '<line x1="' + X0 + '" y1="' + y(5).toFixed(1) + '" x2="' + X1 + '" y2="' + y(5).toFixed(1) + '" stroke="#C6BCA6" stroke-dasharray="2 3"/>';
            s += '<text x="' + (X1 - 4) + '" y="' + (y(5) + 13).toFixed(1) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "外気・一月ごろ" : lang === "zh" ? "外氣・一月前後" : "outside air, January") + '</text>';
            var d = "";
            for (i = 0; i < pts.length; i++) d += (i ? " L" : "M") + x(pts[i][0]).toFixed(1) + " " + y(pts[i][1]).toFixed(1);
            s += '<path d="' + d + '" fill="none" stroke="#7C6B52" stroke-width="2"/>';
            s += '<text x="' + x(1).toFixed(1) + '" y="' + y(14).toFixed(1) + '" font-size="9.5" fill="#6B655C">' +
                 (lang === "ja" ? "醪の温度・吟醸の仕込み" : lang === "zh" ? "醪的溫度・吟釀的仕込" : "the mash, held where a ginjō needs it") + '</text>';
            s += '<text x="' + x(6).toFixed(1) + '" y="' + (y(22)).toFixed(1) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "この帯のすべてを圧縮機が担う" : lang === "zh" ? "這整條帶都由壓縮機扛下" : "a compressor does all of this band") + '</text>';
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            var steam = [0, 2, 3];
            s += '<text x="' + X0 + '" y="46" font-size="9" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "米を蒸す・そのたびに釜を焚く" : lang === "zh" ? "蒸米・每一次都要燒鍋爐" : "RICE STEAMED — EACH ONE A BOILER RUN") + '</text>';
            for (i = 0; i < steam.length; i++) {
              s += '<rect x="' + (x(steam[i]) - 3).toFixed(1) + '" y="' + Y0 + '" width="6" height="14" fill="#7C6B52"/>';
            }
            for (g = 0; g <= 30; g += 10) {
              s += '<text x="' + x(g).toFixed(1) + '" y="' + (Y1 + 16) + '" text-anchor="middle" font-size="9" fill="#B4AEA4">' +
                   (lang === "en" ? ("day " + g) : (g + (lang === "ja" ? "日目" : "天"))) + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (H - 26) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "図式である。温度と日数は説明のための代表値であり、仕込みごとに異なる。"
                  : lang === "zh" ? "此為示意：溫度與天數是為說明而取的代表值，每一次仕込都不相同。"
                  : "Schematic. The temperatures and days are representative values for illustration; every batch differs.") + '</text>';
            s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "酛の蒸米はこの図より前に来る。上の印は三段仕込みの添・仲・留である。"
                  : lang === "zh" ? "酒母的蒸米發生在本圖之前；上方的標記是三段仕込的添、仲、留。"
                  : "The starter's steaming happens before this chart begins; the marks above are the three additions.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"The boiler", ja:"ボイラー", zh:"鍋爐" }, jp:"ボイラー", romaji:"boirā",
            def:{ en:"Steam for the rice, hot water for washing, and heat for pasteurisation all come from one vessel, and in most Japanese breweries it has historically burned heavy oil or kerosene. The transitions that are actually happening are unglamorous: to city gas where a main exists, to LPG where it does not, and in a small number of houses to a biomass boiler burning rice husk or pressed lees. A boiler swap changes a brewery's emissions more than any decision about its bottles, and it is invisible to the drinker.",
              ja:"米のための蒸気、洗いのための湯、火入れのための熱は、いずれも一つの器から来る。日本のほとんどの蔵において、それは歴史的に重油か灯油を焚いてきた。実際に起きている移りは華やかでない。本管のある所では都市ガスへ、無い所ではLPガスへ、そして少数の家では籾殻や搾った粕を焚く生物質の釜へ。釜の入れ替えは、瓶についてのいかなる決めよりも蔵の排出を変える。そして飲み手からは見えない。",
              zh:"蒸米用的蒸氣、清洗用的熱水、火入用的熱，全都來自同一具容器；而在多數日本酒藏裡，它歷來燒的是重油或煤油。真正在發生的轉換一點也不光鮮：有管線的地方換成天然氣，沒有的地方換成液化石油氣，少數幾家則換成燒稻殼或壓榨後酒粕的生質鍋爐。換一具鍋爐對一家酒藏排放量的改變，大過任何關於瓶子的決定——而飲者完全看不見。" } },
          { term:{ en:"The compressors", ja:"冷凍機", zh:"冷凍機" }, jp:"冷却", romaji:"reikyaku",
            def:{ en:"Tank jackets, the kōji room's air handling, the cold store and the finished-goods chiller run for months at a time and are, in most modern breweries, the largest electrical load in the building. Premium brewing makes this worse in three separate ways: a lower mash temperature, a longer mash, and a finished sake that has to be held cold until it ships. A brewery that moved from futsūshu to ginjō has, without deciding to, roughly reorganised its electricity bill around refrigeration.",
              ja:"タンクの冷却衣、麹室の空調、貯蔵の冷蔵庫、そして製品の冷却機は、一度に幾月も回り、今日のほとんどの蔵において建物のうち最大の電気の負荷である。上位の造りはこれを三つの別々の仕方で重くする。より低い醪の温度、より長い醪、そして出荷まで冷たく保たれねばならぬ製品である。普通酒から吟醸へ移った蔵は、そう決めることなしに、電気代のおおよそを冷やすことの周りに組み直したのである。",
              zh:"酒槽的冷卻夾套、麴室的空調、貯藏冷庫與成品冷卻機，會一次連續運轉好幾個月，而在多數現代酒藏裡，它們是整棟建築最大的電力負載。高階釀造在三個各自獨立的方向上讓情況更糟：更低的醪溫、更長的醪期，以及必須一路冷藏到出貨的成品。一家從普通酒轉向吟釀的酒藏，在沒有做出這個決定的情況下，已經把自己的電費帳單大致重組到「製冷」這件事的周圍。" } },
          { term:{ en:"Heat that is already there", ja:"すでにそこにある熱", zh:"本來就在那裡的熱" }, jp:"熱回収", romaji:"netsu kaishū",
            def:{ en:"The obvious integrations are the ones most breweries have not done, because they were built before anyone costed them: returning steam condensate to the boiler feed rather than to the drain, taking the waste heat off the compressors to preheat wash water, and insulating the steaming vessel, which in many kura is a bare steel cylinder radiating into a cold room that is also being refrigerated. None of this is novel engineering. It is capital expenditure in an industry with thin margins and buildings a century old.",
              ja:"明らかな統合ほど、多くの蔵がなしていない。誰もそれを費用として算じる前に建てられたからである。蒸気の凝縮水を排水ではなく釜の給水へ戻すこと、圧縮機の廃熱を取って洗いの湯を予熱すること、そして甑を断熱すること——多くの蔵において甑は、冷やされてもいる寒い部屋へ向けて熱を放つ、裸の鋼の筒である。いずれも新しい工学ではない。利の薄い産業と、一世紀を経た建物における、資本の支出である。",
              zh:"最顯而易見的整合，恰恰是多數酒藏還沒做的，因為這些建築蓋的時候沒有人把它們算進成本：把蒸氣冷凝水回收到鍋爐給水而不是排掉、把壓縮機的廢熱取出來預熱洗米用水，以及替甑保溫——在許多酒藏裡，甑是一具裸露的鋼筒，朝著一間同時還在被製冷的冷房散熱。這些都不是什麼新工程，而是一個利潤微薄、建築物有百年歷史的產業裡的資本支出。" } },
          { term:{ en:"The cold chain does not stop at the gate", ja:"冷は門で終わらない", zh:"冷鏈不在大門口停下" }, jp:"低温流通", romaji:"teion ryūtsū",
            def:{ en:"A premium sake's refrigeration bill continues after it leaves: chilled truck, chilled warehouse, refrigerated container across an ocean, chilled warehouse again, chilled shelf. Every argument this site makes for keeping sake cold is also an argument for a longer refrigerated chain, and the two cannot be separated. The honest form of the point is that the emissions of a bottle of nama drunk in Europe are dominated by neither the paddy nor the glass but by the months it spent at five degrees on three continents.",
              ja:"上位の酒の冷やす費えは、門を出たのちも続く。冷えた車、冷えた倉、大洋を渡る冷凍の箱、再び冷えた倉、そして冷えた棚。本サイトが日本酒を冷たく保つことについてなすあらゆる論は、同時により長い冷の鎖についての論でもあり、その二つは切り離しえない。この点の正直な形はこうである。欧州で飲まれる生酒一本の排出を支配するのは、田でも硝子でもなく、三つの大陸において五度で過ごした幾月かである。",
              zh:"一支高階清酒的製冷帳單，在它離開大門之後仍在繼續：冷藏卡車、冷藏倉庫、橫越大洋的冷藏貨櫃、再一次冷藏倉庫、冷藏貨架。本站關於「讓清酒保持低溫」的每一個論點，同時也是關於「更長的冷鏈」的論點，兩者無法切開。這一點誠實的說法是：一瓶在歐洲被喝掉的生酒，其排放量的主導項既不是稻田也不是玻璃，而是它在三個大陸上以五度度過的那幾個月。" } }
        ] },

        { t:"note", title:{ en:"The order to do things in", ja:"手をつける順", zh:"該動手的順序" }, text:{
          en:"For a brewery that wants to reduce emissions rather than to talk about reducing them, the order is boringly consistent: the boiler first, because it is the largest combustion source and the swap is a known quantity; then insulation and heat recovery, because they cut both bills at once; then the electricity contract, because a chiller load is the easiest thing in the building to move onto renewable supply; then packaging, which is where almost every brewery starts and where the least is available. The paddy is larger than all of these and is not the brewery's to decide.",
          ja:"排出を減らすことについて語るのではなく減らそうとする蔵にとって、順は退屈なほど一定である。まず釜である。最大の燃焼の源であり、その入れ替えは既知の量だからである。ついで断熱と熱の回収である。二つの勘定を同時に切るからである。ついで電気の契約である。冷却の負荷は、建物のうち再生可能な供給へ移すことの最もたやすいものだからである。ついで包材である。ほとんどすべての蔵がそこから始め、そしてそこに最も少ししか無い。田はこれらのいずれよりも大きく、そして蔵が決めうるものではない。",
          zh:"對於一家想要真正減少排放、而不是談論減少排放的酒藏，順序無聊地一致：先是鍋爐，因為它是最大的燃燒源，而且更換的效果是已知量；接著是保溫與熱回收，因為它們同時砍掉兩筆帳單；再來是電力合約，因為製冷負載是整棟建築裡最容易轉到再生能源供應上的東西；然後才是包材——幾乎每一家酒藏都從這裡開始，而這裡能做的最少。稻田比以上全部都大，而且不是酒藏能決定的。" } }
      ] },


{ t:"section", id:"glass",
      title:{ en:"The weight of the bottle", ja:"瓶の重さ", zh:"瓶子的重量" }, jp:"容器",
      body:[
        { t:"p", text:{
          en:"Glass is the second-largest item in most drinks footprints and sake is no exception. An empty 720 mL bottle weighs roughly as much as half its contents; an empty 1.8 L bottle weighs about a kilogram. Melting silica takes furnaces at 1,500 °C, and moving the result takes fuel.",
          ja:"硝子はほとんどの飲料の足あとにおいて二番目に大きな一項であり、日本酒も例外ではない。空の七百二十ミリリットルの瓶は中身の半ばほどの重さがあり、空の一升瓶はおよそ一キロある。珪砂を溶かすには千五百度の炉を要し、その結果を動かすには燃料を要する。",
          zh:"玻璃是多數飲料碳足跡中第二大的項目，清酒也不例外。一只空的七百二十毫升瓶，重量約為其內容物的一半；一只空的一升瓶約重一公斤。熔化矽砂需要攝氏一千五百度的窯爐，而搬運其成品則需要燃料。" } },
        { t:"table",
          caption:{ en:"Containers ranked by what they cost the atmosphere, roughly and honestly", ja:"大気に対する費えで並べた容器——おおよそ、そして正直に", zh:"依其對大氣的代價排序的容器——粗略，但誠實" },
          cols:[{ en:"Container", ja:"容器", zh:"容器" }, { en:"Verdict", ja:"評", zh:"評斷" }, { en:"Why", ja:"理由", zh:"理由" }],
          keyCol:0,
          rows:[
            [{ en:"Returned isshōbin", ja:"戻る一升瓶", zh:"回收再用的一升瓶" }, { en:"Best by a distance", ja:"群を抜いて最良", zh:"遙遙領先的最佳" },
             { en:"A bottle refilled many times amortises its furnace over all those fillings, and the collection route is short and local. The environmental case for the 1.8 L returnable is stronger than for anything else on this list, and the retail structure that supported it has largely disappeared — which is the single clearest example in this industry of a good system lost for reasons unrelated to its merits.",
               ja:"幾度も詰め直される瓶は、その炉の費えを詰めた回数のすべてに割り振る。そして回収の道筋は短く土地に閉じている。一升の戻る瓶を支持する環境の論はこの一覧のどれよりも強く、そしてそれを支えた小売の構造はおおむね消えた。それは、その良さとは関わりのない理由で良い仕組みが失われた、この産業における最も明快な例である。",
               zh:"一只被反覆填裝多次的瓶子，把它的窯爐成本攤提到所有那些填裝上，而回收路線又短又在地。支持一點八公升可回收瓶的環境論據，強過這份清單上的任何其他選項——而支撐它的零售結構卻大半消失了。這是這個產業中最清楚的一個例子：一套好制度，因與其優點無關的理由而失去。" }],
            [{ en:"Can", ja:"缶", zh:"罐裝" }, { en:"Very good, badly regarded", ja:"きわめて良く、評は悪い", zh:"很好，卻評價不佳" },
             { en:"Light, stackable, lightproof, and recycled at high rates into new cans rather than downcycled. Aluminium smelting is energy-hungry, so the case depends on recycled content — but on shipping weight alone a can beats glass comprehensively. Its problem is entirely perceptual.",
               ja:"軽く、積め、光を通さず、そして格下げされるのではなく高い率で新しい缶へ再生される。アルミの製錬は多くの力を食うので、論は再生の割合に依る。しかし運ぶ重さだけを見れば、缶は硝子を全面的に上回る。その問題はまったく認識の側にある。",
               zh:"輕、可堆疊、完全遮光，而且以高比例被回收成新的罐子，而非降級再利用。鋁的冶煉極耗能，因此論證取決於再生鋁的比例——但單就運輸重量而言，罐裝全面優於玻璃。它的問題完全出在觀感上。" }],
            [{ en:"Paper carton", ja:"紙パック", zh:"紙盒" }, { en:"Good, and unglamorous", ja:"良く、そして華がない", zh:"好，但不光鮮" },
             { en:"Very light, collapsible, and by far the lowest transport burden per litre. The multi-layer construction with a plastic and sometimes foil barrier makes it harder to recycle than a can, but the shipping saving is large enough that it wins on most accountings. Almost all of it is ordinary-grade sake, so it is rarely part of the conversation.",
               ja:"きわめて軽く、畳め、一リットル当たりの運びの負荷は群を抜いて低い。樹脂と時に箔の層を重ねた構えは、缶より再生を難しくするが、運びの節約は多くの勘定でそれを上回るほど大きい。そのほとんどは普通酒であり、ゆえに話に上ることは稀である。",
               zh:"極輕、可壓扁，每公升的運輸負擔遠低於其他選項。它以塑膠、有時加上鋁箔的多層結構，使其比罐裝更難回收；但運輸上省下的量夠大，在多數計算下仍然勝出。它裝的幾乎全是普通酒，因此很少被納入討論。" }],
            [{ en:"One-way 720 mL", ja:"使い捨ての四合瓶", zh:"一次性的四合瓶" }, { en:"The default, and the weakest", ja:"既定であり、最も弱い", zh:"預設值，也是最弱的一項" },
             { en:"Heavy glass that is used once, often boxed, often wrapped, and increasingly shipped across an ocean. Every premium sake sold abroad is in this format, which means the growth end of the industry is also its heaviest packaging. Cullet recycling recovers the material but not the furnace energy of the first melt.",
               ja:"一度きり用いられる重い硝子であり、しばしば箱に入り、しばしば紙に巻かれ、そして次第に海を越えて運ばれる。国外で売られるあらゆる高級酒はこの形であり、それはすなわち、産業の伸びる端が最も重い包装でもあるということである。カレットの再生は材を取り戻すが、最初に溶かした炉の力は取り戻さない。",
               zh:"一次性使用的厚重玻璃，往往還要裝盒、包紙，並且越來越常橫渡大洋運送。所有外銷的高級清酒都是這個規格——也就是說，這個產業成長最快的一端，同時也是包裝最重的一端。碎玻璃回收能取回材料，卻取不回第一次熔製時所耗的窯爐能源。" }]
          ] },
        { t:"note", title:{ en:"And the container nobody counts", ja:"誰も数えぬ容器", zh:"沒有人計算的那個容器" }, text:{
          en:"A refrigerated shipping container running at 5 °C from Japan to Europe or North America burns fuel continuously for four to six weeks. For unpasteurised sake there is no alternative — the alternative is arriving undrinkable — but it is very likely the largest single carbon item in a bottle of nama sold abroad, larger than the glass and larger than the field. Nobody markets this, and any brewery claiming a low-carbon export product without mentioning the reefer is not counting properly.",
          ja:"五度で走る冷蔵の貨物は、日本から欧州や北米まで四週から六週にわたり燃料を焚き続ける。生酒に代わりはない。代わりは、飲めぬ状態で届くことである。しかしそれは、国外で売られる生酒の一本において最も大きな単一の炭素の項目であることがきわめてありそうである。硝子より大きく、田より大きい。誰もこれを売り文句にせず、冷蔵の貨物に触れずに低炭素の輸出の品を謳う蔵は、正しく数えていない。",
          zh:"一只維持在攝氏五度的冷藏貨櫃，從日本到歐洲或北美的四到六週航程中會持續燃燒燃料。對未經火入的生酒而言沒有替代方案——替代方案是「抵達時已不能喝」——但它極可能是一瓶外銷生酒中最大的單一碳項目，大於玻璃，也大於稻田。沒有人拿這件事來行銷；而任何在不提冷藏貨櫃的情況下宣稱自己是低碳出口產品的酒藏，都沒有算對。" } }
      ] },

    { t:"section", id:"waste",
      title:{ en:"What comes out that is not sake", ja:"酒でないもの", zh:"產出中不是酒的部分" }, jp:"副産物",
      body:[
        { t:"grid", cols:3, cells:[
          { k:{ en:"Lees", ja:"酒粕", zh:"酒粕" }, jp:"酒粕",
            v:{ en:"A product, not a waste", ja:"廃棄物ではなく産", zh:"是產品，不是廢棄物" },
            d:{ en:"Between a fifth and half the rice by weight leaves the press as kasu, and essentially all of it is used — as food, as pickling beds, as feed, as fertiliser, distilled into shōchū, or turned into cosmetics. Sake is one of very few fermentation industries whose main solid residue has an established market rather than a disposal cost. See <a href=\"kasu.html\">Sake Lees</a>.",
              ja:"米の重さの五分の一から半ばが粕として槽を出て、その事実上すべてが用いられる。食として、漬け床として、飼料として、肥として、焼酎に蒸留され、あるいは化粧の品となる。日本酒は、主たる固形の残りが処分の費えではなく確立した市場を持つ、きわめて数少ない醸造の産業の一つである。<a href=\"kasu.html\">酒粕</a>を見られたい。",
              zh:"米重的五分之一到一半會以酒粕的形式離開壓榨機，而其中幾乎全部都被使用——作為食物、醃漬床、飼料、肥料，蒸餾成燒酎，或製成化妝品。清酒是極少數「主要固體殘留物擁有成熟市場、而非處置成本」的發酵產業之一。詳見<a href=\"kasu.html\">酒粕</a>。" } },
          { k:{ en:"Bran", ja:"糠", zh:"米糠" }, jp:"白糠",
            v:{ en:"Sold by fraction", ja:"画ごとに売る", zh:"依餾分出售" },
            d:{ en:"Everything removed in polishing is collected in grades and sold — oil pressing, rice crackers, miso, shōchū, confectionery flour, feed. A brewery milling to 35% sells roughly two thirds of the rice it buys, which is both why deep polishing is affordable and why the material is not, in the ordinary sense, wasted.",
              ja:"精米で削り取られたものはすべて等級ごとに集められ売られる。搾油、煎餅、味噌、焼酎、菓子の粉、飼料である。三十五パーセントまで磨く蔵は、買った米のおよそ三分の二を売っている。それが深い精米の成り立つ理由であり、そしてこの材が普通の意味では捨てられていない理由でもある。",
              zh:"精磨過程中削去的一切都會依等級收集並出售——榨油、米果、味噌、燒酎、製菓用米粉、飼料。一家磨到 35% 的酒藏，會把買進的米賣掉約三分之二；這既是深度精磨得以負擔的原因，也是這些材料在一般意義上並未被浪費的原因。" } },
          { k:{ en:"Heat", ja:"熱", zh:"熱" }, jp:"蒸気と冷却",
            v:{ en:"Made and thrown away", ja:"作っては捨てる", zh:"製造出來，又丟掉" },
            d:{ en:"A brewery raises steam to cook rice and then spends energy chilling almost everything else, often in the same building on the same day. Heat recovery from boiler flue and from the pasteuriser is the most obvious efficiency available and is still uncommon in small houses, mostly because capital is scarce rather than because anyone disagrees.",
              ja:"蔵は米を炊くために蒸気を上げ、そののちほとんど他のすべてを冷やすために力を費やす。しばしば同じ建物で同じ日にである。ボイラーの煙道と火入れの機械からの熱の回収は、得られる最も明らかな効率でありながら、小さな家ではなお稀である。誰かが反対しているからではなく、資が乏しいからである。",
              zh:"酒藏升起蒸氣把米蒸熟，接著又耗費能源去冷卻幾乎其他所有東西——往往就在同一棟建築、同一天之內。從鍋爐煙道與火入設備回收熱能，是最顯而易見的效率改善，但在小型酒藏中仍不常見，主因不是有人反對，而是資本稀缺。" } }
        ] }
      ] },

    { t:"section", id:"honest",
      title:{ en:"An honest ranking", ja:"正直な順位", zh:"一份誠實的排序" }, jp:"優先順位",
      body:[
        { t:"p", text:{
          en:"If a brewery, or a drinker, wanted to act on one thing, the order is not the order the marketing suggests.",
          ja:"蔵が、あるいは飲み手が、一つのことに手をつけるとすれば、その順序は売り文句の示す順序ではない。",
          zh:"如果一家酒藏、或一位飲者想要針對某一件事採取行動，其優先順序並不是行銷所暗示的那個順序。" } },
        { t:"ol", items:[
          { en:"<strong>Drink it before it needs a refrigerated ship.</strong> The single largest saving available to a drinker outside Japan is choosing pasteurised sake, which travels in an ordinary container, over nama, which does not. This is also usually the better bottle on arrival.",
            ja:"<strong>冷蔵の船を要する前に飲む。</strong>日本の外の飲み手に得られる最も大きな節約は、冷蔵を要さぬ普通の貨物で運ばれる火入れの酒を、そうではない生酒より選ぶことである。それはまた、届いた時点でたいてい良い方の一本でもある。",
            zh:"<strong>在它需要一艘冷藏船之前就把它喝掉。</strong>對日本以外的飲者而言，最大的一項節省，是選擇能以一般貨櫃運送的火入酒，而非做不到這點的生酒。而且抵達之後，那通常也是比較好的那一瓶。" },
          { en:"<strong>Buy the big bottle if you will finish it.</strong> Per millilitre, the 1.8 L format is less glass, less packaging, less shipping and — where the return system still works — no new glass at all. It only makes sense if the sake is drunk before it tires, which is a question about your household rather than about the sake.",
            ja:"<strong>飲み切れるなら大瓶を買う。</strong>一ミリリットル当たり、一升の形は硝子が少なく、包装が少なく、運びが少なく、そして戻る仕組みのなお働く所では新しい硝子がまったく要らない。それが筋を通すのは、酒が疲れる前に飲まれる場合のみであり、それは酒についてではなくあなたの家についての問いである。",
            zh:"<strong>如果喝得完，就買大瓶。</strong>以每毫升計，一點八公升的規格用的玻璃更少、包裝更少、運輸更少，而在回收體系仍然運作的地方，甚至完全不需要新玻璃。但這只有在酒還沒走味之前被喝完才說得通——而那是關於你家的問題，不是關於酒的問題。" },
          { en:"<strong>Do not treat polishing ratio as a virtue.</strong> A 60% junmai and a 35% daiginjō from the same house use the same paddy differently: the daiginjō carries nearly twice the field behind each bottle. That is not an argument against daiginjō, which is a thing worth making; it is an argument against assuming a lower number is automatically better in any sense at all.",
            ja:"<strong>精米歩合を美徳として扱わない。</strong>同じ家の六十パーセントの純米と三十五パーセントの大吟醸は、同じ田を異なる仕方で用いている。大吟醸は一本ごとにほぼ倍の田を背負う。それは大吟醸に反対する論ではない。それは造る値打ちのあるものである。それは、低い数が自動的に、いかなる意味においても優れていると決めてかかることに反対する論である。",
            zh:"<strong>不要把精米步合當成美德。</strong>同一家酒藏的 60% 純米與 35% 大吟釀，用的是同一片稻田，只是用法不同：大吟釀每一瓶背後所承載的田地面積接近前者的兩倍。這不是反對大吟釀的論證——那是值得被釀造出來的東西——這是反對「預設數字越低就自動在任何意義上更好」的論證。" },
          { en:"<strong>Ask about water rather than about carbon.</strong> For a brewery, the measure that is both large and controllable is water, and the honest questions are what the cooling loop does and where the effluent goes. A house that has thought about those has thought about the rest; a house whose sustainability page is a photograph of a forest has not necessarily.",
            ja:"<strong>炭素ではなく水を問う。</strong>蔵にとって、大きくかつ制しうる尺度は水であり、正直な問いは、冷却の環が何をしているか、そして排水がどこへ行くかである。それらを考えた家は他のことも考えている。持続可能性の頁が森の写真である家は、必ずしもそうではない。",
            zh:"<strong>問水，而不是問碳。</strong>對一家酒藏而言，既龐大又可控的指標是水，而誠實的問題是：冷卻迴路是怎麼運作的，以及廢水去了哪裡。想過這些問題的酒藏，也想過其餘的事；而一家「永續頁面是一張森林照片」的酒藏，未必如此。" }
        ] },
        { t:"tiny", text:{
          en:"Related: <a href=\"packaging.html#returnable\">Bottles, Cans &amp; Barrels</a>, <a href=\"kasu.html\">Sake Lees</a>, <a href=\"ingredients.html#farming\">Rice &amp; Water</a>, <a href=\"future.html\">The Next Twenty Years</a>.",
          ja:"関連——<a href=\"packaging.html#returnable\">瓶・缶・樽</a>、<a href=\"kasu.html\">酒粕</a>、<a href=\"ingredients.html#farming\">米と水</a>、<a href=\"future.html\">これからの二十年</a>。",
          zh:"相關：<a href=\"packaging.html#returnable\">瓶、罐與樽</a>、<a href=\"kasu.html\">酒粕</a>、<a href=\"ingredients.html#farming\">米與水</a>、<a href=\"future.html\">未來二十年</a>。" } }
      ] },

    { t:"related", items:[
      { href:"packaging.html", why:{ en:"The container decisions, in detail.", ja:"容器をめぐる決めごとを、詳しく。", zh:"關於容器的各種決定，詳細版。" } },
      { href:"ricepolicy.html", why:{ en:"Who decides what happens in the paddy.", ja:"田で何が起きるかを決める者。", zh:"決定稻田裡發生什麼事的人。" } },
      { href:"future.html", why:{ en:"The pressures this footprint sits inside.", ja:"この足跡が置かれている、いくつもの圧。", zh:"這個足跡所置身的那些壓力。" } },
      { href:"kasu.html", why:{ en:"The by-product that is already being used.", ja:"すでに用いられている副産物。", zh:"已經在被使用的那項副產物。" } }
    ] }
  ]
};


/* ---- ---------------------------------------------- faults */
SAKE.pages["faults"] = {
  kicker: { en: "Understanding · 14", ja: "理解 · 14", zh: "理解 · 14" },
  title:  { en: "When Sake Goes Wrong", ja: "酒が傷むとき", zh: "當清酒走壞時" },
  jp: "劣化と欠点",
  lede: {
    en: "Every fault in a glass of sake is a record of something that happened to it: a warm shelf, a clear bottle left in a shop window, a bacterium that survived the pasteuriser, an air pocket that sat above the wine for a year. Faults are not mysteries. Each has a molecule behind it, and most of those molecules were identified by name in Japanese laboratories within living memory. This page gives the vocabulary, the chemistry and the history — and, because it is the part that matters most, the place where a fault stops being a fault and becomes a style.",
    ja: "一杯の酒における欠点はすべて、その酒に起きた何ごとかの記録である。温い棚。店先の窓に置かれた透明な瓶。火入れを生き延びた一匹の菌。一年のあいだ酒の上に座っていた空気の隙間。欠点は謎ではない。それぞれの背後には分子があり、その分子のほとんどは、今なお記憶に届く年月のうちに、日本の実験室で名を与えられた。この頁はその語彙と化学と歴史を与える。そして——もっとも大切な部分であるがゆえに——欠点が欠点であることをやめ、個性となる、その境目を示す。",
    zh: "一杯清酒裡的每一項缺點，都是它身上曾發生過某件事的紀錄：一層溫熱的貨架、一支被留在店面櫥窗裡的透明瓶、一株熬過了火入的細菌、一團在酒液上方靜坐了一年的空氣。缺點並不神祕。每一項背後都有一個分子，而其中大多數分子，都是在仍屬於當代人記憶的年月裡，由日本的實驗室一一命名的。本頁提供這套語彙、化學與歷史——並且，因為那才是最要緊的部分——指出缺點在哪裡不再是缺點，而成為風格。"
  },
  body: [

    { t:"section", id:"roads",
      title:{ en:"Three roads to a spoiled bottle", ja:"傷みへ至る三つの道", zh:"走向一瓶壞酒的三條路" }, jp:"劣化の道筋",
      body:[
        { t:"p", text:{
          en:"Almost everything that goes wrong with a finished bottle arrives by one of three routes. Oxygen and time work on the compounds already dissolved in the sake, rearranging them slowly into heavier, duller, more sulphurous things. Micro-organisms — a very short list of them, because sake is a hostile place — get in and eat. Light and heat do not themselves create faults so much as accelerate the other two, and light in particular drives one specific reaction that nothing else does.",
          ja:"仕上がった一本に起こる誤りのほとんどは、三つの道のいずれかを通って来る。酸素と時間は、すでに酒に溶けている物質に働きかけ、それらをゆっくりと、より重く、より鈍く、より硫黄めいたものへ組み替える。微生物——その名簿はきわめて短い。酒とは敵意ある場所だからである——は入り込んで食う。光と熱は、それ自身が欠点を生むというよりは、他の二つを速める。とりわけ光は、他の何ものも起こさぬ一つの反応を駆動する。",
          zh:"一支成品酒出的問題，幾乎都循三條路徑之一而來。氧氣與時間作用於已經溶在酒中的物質，慢慢把它們重組成更重、更鈍、更帶硫味的東西。微生物——名單非常短，因為清酒是個充滿敵意的地方——鑽進來吃。光與熱與其說本身製造缺點，不如說是加速了前兩者；而光尤其會驅動一個別無他物能引發的特定反應。" } },

        { t:"figure",
          caption:{
            en:"The three routes and the named faults each produces, with the responsible compound set beneath each name.",
            ja:"三つの道筋と、それぞれが生む名づけられた欠点。名の下にあるのは、その因となる物質である。",
            zh:"三條路徑，以及各自產生的、有名字的缺點；每個名字下方是造成它的物質。" },
          svg: function (lang, L) {
            var W = 760, H = 392;
            var col = [
              { x: 24, w: 224, fill: "#EADCC1",
                t: { en: "OXYGEN & TIME", ja: "酸素と時間", zh: "氧氣與時間" },
                s: { en: "slow rearrangement", ja: "ゆるやかな組み替え", zh: "緩慢的重組" },
                items: [
                  { n: { en: "Hine-ka 老香", ja: "老香 ひねか", zh: "老香" }, c: "DMTS", hot: 1 },
                  { n: { en: "Nama-hine 生老ね", ja: "生老ね なまひね", zh: "生老（生老香）" }, c: { en: "isovaleraldehyde", ja: "イソバレルアルデヒド", zh: "異戊醛" }, hot: 1 },
                  { n: { en: "Kigayō 木香様臭", ja: "木香様臭 きがようしゅう", zh: "木香樣臭" }, c: { en: "acetaldehyde", ja: "アセトアルデヒド", zh: "乙醛" }, hot: 0 },
                  { n: { en: "Colour deepening", ja: "着色 ちゃくしょく", zh: "著色加深" }, c: { en: "Maillard products", ja: "メイラード生成物", zh: "梅納反應產物" }, hot: 1 }
                ],
                foot: { en: "Headspace air is the fuel; cold is the brake.", ja: "燃料は空隙の空気、制動は冷たさ。", zh: "頂空的空氣是燃料，低溫是煞車。" } },
              { x: 268, w: 224, fill: "#E0E6DB",
                t: { en: "MICRO-ORGANISMS", ja: "微生物", zh: "微生物" },
                s: { en: "something is eating", ja: "何かが食っている", zh: "有東西正在吃" },
                items: [
                  { n: { en: "Hiochi 火落臭", ja: "火落臭 ひおちしゅう", zh: "火落臭" }, c: { en: "lactic acid + haze", ja: "乳酸と濁り", zh: "乳酸與白濁" }, hot: 0 },
                  { n: { en: "Tsuwari-ka つわり香", ja: "つわり香", zh: "孕吐香" }, c: { en: "diacetyl", ja: "ジアセチル", zh: "丁二酮" }, hot: 0 },
                  { n: { en: "Film yeast 産膜酵母", ja: "産膜酵母 さんまくこうぼ", zh: "產膜酵母" }, c: { en: "ethyl acetate", ja: "酢酸エチル", zh: "乙酸乙酯" }, hot: 0 },
                  { n: { en: "Kunsei 燻製臭", ja: "燻製臭 くんせいしゅう", zh: "燻製臭" }, c: "4-VG", hot: 0 }
                ],
                foot: { en: "Rare since the 1970s. A plumbing failure.", ja: "一九七〇年代より稀。配管の失敗である。", zh: "一九七〇年代後已罕見；那是管線的失敗。" } },
              { x: 512, w: 224, fill: "#E9ECEE",
                t: { en: "LIGHT & HEAT", ja: "光と熱", zh: "光與熱" },
                s: { en: "an accelerator with one trick of its own", ja: "固有の一手を持つ促進者", zh: "帶著一項自有絕技的加速器" },
                items: [
                  { n: { en: "Nikk\u014d-sh\u016b 日光臭", ja: "日光臭 にっこうしゅう", zh: "日光臭" }, c: { en: "mercaptans \u2014 hours, not months", ja: "メルカプタン——月ではなく時間", zh: "硫醇——以小時計，非以月計" }, hot: 1 },
                  { n: { en: "Loss of top notes", ja: "香りの痩せ", zh: "香氣的流失" }, c: { en: "ester hydrolysis", ja: "エステルの加水分解", zh: "酯類水解" }, hot: 1 },
                  { n: { en: "Koge 焦げ臭", ja: "焦げ臭 こげしゅう", zh: "焦味" }, c: { en: "furfural", ja: "フルフラール", zh: "糠醛" }, hot: 0 }
                ],
                foot: { en: "Also doubles column one\u2019s rate per 10 \u00b0C.", ja: "十度ごとに第一列の速さを倍にする。", zh: "每升高十度，約使第一欄的速率加倍。" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            for (var i = 0; i < col.length; i++) {
              var c = col[i], x = c.x, w = c.w;
              s += '<rect x="' + x + '" y="12" width="' + w + '" height="52" fill="' + c.fill + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (x + 13) + '" y="34" font-size="10.5" font-weight="600" letter-spacing="1.6" fill="#201E1B">' + L(c.t) + '</text>';
              s += '<text x="' + (x + 13) + '" y="51" font-size="10" fill="#55504A">' + L(c.s) + '</text>';
              var lastY = 80 + (c.items.length - 1) * 62 + 8;
              s += '<line x1="' + (x + 13) + '" y1="64" x2="' + (x + 13) + '" y2="' + lastY + '" stroke="#B4AC9C"/>';
              for (var j = 0; j < c.items.length; j++) {
                var it = c.items[j], y = 80 + j * 62;
                s += '<line x1="' + (x + 13) + '" y1="' + (y + 6) + '" x2="' + (x + 27) + '" y2="' + (y + 6) + '" stroke="#B4AC9C"/>';
                if (it.hot) s += '<rect x="' + (x + 17) + '" y="' + (y + 2) + '" width="8" height="8" fill="#7C6B52" stroke="none"/>';
                s += '<text x="' + (x + 33) + '" y="' + (y + 10) + '" font-size="11.5" fill="#201E1B">' + L(it.n) + '</text>';
                s += '<text x="' + (x + 33) + '" y="' + (y + 26) + '" font-size="9.5" fill="#8B857C">' + L(it.c) + '</text>';
              }
              s += '<line x1="' + x + '" y1="' + (H - 62) + '" x2="' + (x + w) + '" y2="' + (H - 62) + '" stroke="#E1DCD2"/>';
              s += '<text x="' + (x + 13) + '" y="' + (H - 45) + '" font-size="9.5" fill="#8B857C">' + L(c.foot) + '</text>';
            }
            s += '<rect x="26" y="' + (H - 26) + '" width="8" height="8" fill="#7C6B52"/>';
            s += '<text x="42" y="' + (H - 18) + '" font-size="10" fill="#55504A">' +
                 (lang === "ja" ? "飲み手が店や料理屋で実際に出会う見込みの高いもの"
                  : lang === "zh" ? "飲者在商店或餐廳中實際遇上機率較高者"
                  : "the ones a drinker is actually likely to meet in a shop or a restaurant") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"p", text:{
          en:"The three roads are not independent. Heat roughly doubles the rate of most of the chemistry involved for every ten degrees, so a bottle at 25 °C is ageing on the order of four times faster than the same bottle at 5 °C. Light supplies energy that lets reactions run which would otherwise not run at all. And a micro-organism that gets a foothold produces acids and heat-stable enzymes that go on changing the sake even after the organism itself is dead. In practice a badly kept bottle is never suffering from one thing.",
          ja:"三つの道は独立ではない。熱は、関わる化学のほとんどの速さを、十度ごとにおおよそ倍にする。ゆえに二十五度に置かれた一本は、同じ一本を五度に置いた場合のおよそ四倍の速さで老いている。光は、それなくば決して走らぬ反応を走らせる力を与える。そして足場を得た微生物は、酸と、熱に耐える酵素とを生み、それらはその生き物自身が死したのちも酒を変え続ける。実のところ、粗末に扱われた一本が一つのことだけに苦しんでいることはない。",
          zh:"這三條路並不各自獨立。溫度每上升十度，相關化學反應的速率大約加倍；因此一支放在二十五度的酒，其老化速度約為同一支放在五度時的四倍。光提供能量，讓某些原本根本不會發生的反應得以進行。而一旦微生物站穩腳跟，它會產生酸與耐熱的酵素，這些東西即使在那個生物本身死去之後，仍繼續改變著酒。實際上，一支被粗率對待的酒，從來不會只受單一問題所苦。" } },

        { t:"note", label:{ en:"A word on temperature", ja:"温度について一言", zh:"關於溫度的一句話" },
          text:{
            en:"Almost every practical rule on this page reduces to the same sentence: cold is the only universal defence. It slows oxidation, it stops most bacteria, it holds the aroma esters in place, and it costs nothing but electricity. A brewery that has invested in refrigerated storage has bought protection against roughly everything described below at once.",
            ja:"この頁の実用の掟のほとんどは、同じ一文に還る。冷たさこそが唯一普遍の守りである。それは酸化を遅らせ、ほとんどの細菌を止め、香りのエステルをその場に留め、電気のほかに何の代価も要さぬ。冷蔵の貯蔵に投じた蔵は、以下に述べるほとんどすべてに対する守りを、一度に買ったのである。",
            zh:"本頁幾乎每一條實用規則，最後都收束成同一句話：低溫是唯一通用的防禦。它減緩氧化、遏止多數細菌、把香氣酯類留在原位，而且除了電費之外不需付出任何代價。一家投資了冷藏庫的酒藏，等於一次買下了對以下幾乎所有問題的防護。" } }
      ] },

    { t:"section", id:"names",
      title:{ en:"The vocabulary of faults", ja:"欠点の語彙", zh:"缺點的語彙" }, jp:"呼び名",
      body:[
        { t:"p", text:{
          en:"Japanese has an unusually precise vocabulary for these, largely because the National Research Institute of Brewing and the prefectural technical centres have spent a century writing tasting-panel standards. The names are worth learning even in translation, because a brewer will recognise them instantly and an importer's tasting note will use them untranslated.",
          ja:"日本語はこれらについて異例に精密な語彙を持つ。その多くは、酒類総合研究所と各県の技術の場が、一世紀を費やして官能検査の基準を書いてきたことによる。名は、訳を通してでも学ぶ値打ちがある。蔵人は直ちにそれと分かり、輸入業者の利き酒の覚書はそれを訳さぬまま用いるからである。",
          zh:"日文對這些現象擁有異常精確的語彙，很大程度上是因為酒類綜合研究所與各縣的技術中心花了一個世紀在撰寫品評小組的標準。這些名字即使透過翻譯也值得學，因為釀酒人一聽就懂，而進口商的品飲筆記會直接沿用不譯。" } },

        { t:"table",
          caption:{ en:"Named faults, their molecules and their causes", ja:"名づけられた欠点・その分子・その因", zh:"有名字的缺點、其分子與成因" },
          cols:[ { en:"Name", ja:"呼び名", zh:"名稱" },
                 { en:"Reads as", ja:"読み", zh:"讀音" },
                 { en:"What it smells of", ja:"におい", zh:"聞起來像" },
                 { en:"Molecule", ja:"分子", zh:"分子" },
                 { en:"Where it comes from", ja:"由来", zh:"從何而來" } ],
          jpCols:[0],
          rows:[
            [ "老香", "hine-ka",
              { en:"Old pickles, boiled cabbage, drain", ja:"古漬け、煮た菜、排水", zh:"陳漬物、煮過的甘藍、排水口" },
              "DMTS",
              { en:"Storage above about 15 °C; released from a precursor already in the sake", ja:"およそ十五度を超える貯蔵。すでに酒中にある前駆体から放たれる", zh:"貯藏溫度高於約十五度；由酒中既已存在的前驅物釋出" } ],
            [ "生老ね香", "nama-hine-ka",
              { en:"Stale nuts, cardboard, wet paper", ja:"古い木の実、厚紙、濡れた紙", zh:"陳掉的堅果、紙板、濕紙" },
              { en:"isovaleraldehyde", ja:"イソバレルアルデヒド", zh:"異戊醛" },
              { en:"Unpasteurised sake held too long; enzymes oxidise isoamyl alcohol", ja:"生酒を長く置いたとき。酵素がイソアミルアルコールを酸化する", zh:"生酒放置過久；酵素將異戊醇氧化" } ],
            [ "日光臭", "nikkō-shū",
              { en:"Wet animal, struck match, burnt rubber", ja:"濡れた獣、擦った燐寸、焦げた護謨", zh:"濕掉的獸毛、剛劃過的火柴、燒焦的橡膠" },
              { en:"mercaptans (thiols)", ja:"メルカプタン（チオール）", zh:"硫醇" },
              { en:"Ultraviolet light on a clear or green bottle. Hours, not weeks", ja:"透明あるいは緑の瓶に当たる紫外線。週ではなく時間の単位", zh:"紫外線照在透明或綠色瓶上。以小時計，而非以週計" } ],
            [ "火落臭", "hiochi-shū",
              { en:"Sour milk, yoghurt, with visible haze", ja:"酸った乳、ヨーグルト。濁りを伴う", zh:"酸敗的乳、優格，並伴隨可見的白濁" },
              { en:"lactic acid, diacetyl", ja:"乳酸・ジアセチル", zh:"乳酸、丁二酮" },
              { en:"Hiochi bacteria surviving or entering after pasteurisation", ja:"火入れを生き延び、あるいはその後に入った火落菌", zh:"火落菌熬過火入，或在火入之後侵入" } ],
            [ "つわり香", "tsuwari-ka",
              { en:"Buttered popcorn, butterscotch", ja:"バタつけた爆米、バタ飴", zh:"奶油爆米花、奶油糖" },
              { en:"diacetyl", ja:"ジアセチル", zh:"丁二酮" },
              { en:"A stalled or bacterially disturbed fermentation", ja:"停まった、あるいは細菌に乱された醪", zh:"停滯或遭細菌干擾的發酵" } ],
            [ "木香様臭", "kigayō-shū",
              { en:"Green wood, sap, sharp and pricking", ja:"生木、樹液。鋭く刺す", zh:"生木、樹液，尖銳而刺激" },
              { en:"acetaldehyde", ja:"アセトアルデヒド", zh:"乙醛" },
              { en:"Air on a young sake; an unfinished or re-oxidised fermentation", ja:"若い酒に当たる空気。終わりきらぬ、あるいは再び酸化した発酵", zh:"空氣接觸年輕的酒；未完成或再度氧化的發酵" } ],
            [ "硫化臭", "ryūka-shū",
              { en:"Hot spring, struck flint, rotten egg", ja:"温泉、打った火打石、腐った卵", zh:"溫泉、擊打的燧石、壞蛋" },
              { en:"hydrogen sulphide", ja:"硫化水素", zh:"硫化氫" },
              { en:"Ordinary yeast metabolism in the tank; normally gone by pressing", ja:"槽のなかの酵母の常の営み。通常は上槽までに消える", zh:"槽中酵母的日常代謝；通常在上槽前就已消散" } ],
            [ "セメダイン臭", "semedain-shū",
              { en:"Model glue, nail varnish", ja:"模型の膠、爪の塗料", zh:"模型膠水、指甲油" },
              { en:"ethyl acetate", ja:"酢酸エチル", zh:"乙酸乙酯" },
              { en:"Film yeast on a tank surface, or a fermentation out of balance", ja:"槽の面の産膜酵母、あるいは均衡を欠いた発酵", zh:"槽面上的產膜酵母，或失衡的發酵" } ],
            [ "雑巾臭", "zōkin-shū",
              { en:"Damp cloth, cheese rind", ja:"湿った布、乾酪の皮", zh:"潮濕的抹布、乳酪外皮" },
              { en:"caproic acid", ja:"カプロン酸", zh:"己酸" },
              { en:"The free acid left behind when its fragrant ester breaks down", ja:"香り高いエステルが壊れたのちに残る遊離酸", zh:"當芳香的酯類分解後留下的游離酸" } ],
            [ "ぬか臭", "nuka-shū",
              { en:"Bran, vitamin tablet, cereal dust", ja:"糠、錠剤、穀の粉", zh:"米糠、維他命錠、穀粉" },
              { en:"thiamine and fatty-acid breakdown", ja:"チアミンと脂肪酸の分解", zh:"硫胺與脂肪酸的分解" },
              { en:"Poorly washed rice, or too much of the last, heaviest press fraction", ja:"洗いの足りぬ米、あるいは最後の重い責めの取りすぎ", zh:"洗米不足，或取用過多最後那段最重的責" } ],
            [ "焦げ臭", "koge-shū",
              { en:"Caramel, burnt sugar, soy", ja:"カラメル、焦げた糖、醤", zh:"焦糖、燒焦的糖、醬油" },
              { en:"furfural, Maillard products", ja:"フルフラール、メイラード生成物", zh:"糠醛、梅納反應產物" },
              { en:"Over-hot pasteurisation, or long warm storage", ja:"高すぎる火入れ、あるいは長い温い貯蔵", zh:"過高溫的火入，或長期的溫熱貯藏" } ],
            [ "酢酸臭", "sakusan-shū",
              { en:"Vinegar, sharp and volatile", ja:"酢。鋭く揮ける", zh:"醋味，尖銳而易揮發" },
              { en:"acetic acid", ja:"酢酸", zh:"乙酸" },
              { en:"Acetic acid bacteria in an oxygen-rich headspace", ja:"酸素に富む空隙のなかの酢酸菌", zh:"富含氧氣的頂空中的醋酸菌" } ]
          ] },

        { t:"tiny", text:{
          en:"Not every one of these is a fault in every context. Four of them — hydrogen sulphide in the tank, acetaldehyde in a very young sake, diacetyl at trace level, and caproic acid — appear routinely and disappear routinely. The judgement is always about level, timing and whether the drinker was expecting it.",
          ja:"これらのすべてが、あらゆる文脈で欠点であるわけではない。そのうち四つ——槽のなかの硫化水素、ごく若い酒のアセトアルデヒド、微量のジアセチル、そしてカプロン酸——は、常のように現れ、常のように消える。判断はつねに、量と時と、飲み手がそれを予期していたか否かについてのものである。",
          zh:"這些並非在所有情境下都算缺點。其中四項——槽中的硫化氫、極年輕的酒中的乙醛、微量的丁二酮，以及己酸——都會例行出現、也會例行消失。判斷永遠關乎程度、時機，以及飲者是否預期到它。" } }
      ] },

    { t:"section", id:"hineka",
      title:{ en:"Hine-ka: the oldest enemy", ja:"老香——最も古い敵", zh:"老香——最古老的敵人" }, jp:"ひねか",
      body:[
        { t:"p", text:{
          en:"Every brewer in Japan knows the smell, and until recently nobody could say what it was. Sake held warm for a season develops a heavy, faintly vegetal, faintly drain-like note that flattens everything above it. It was named hine-ka — literally the smell of having become old — centuries before anyone had a chemistry to attach to it.",
          ja:"日本のいかなる蔵人もそのにおいを知っている。そして近年に至るまで、それが何であるかを誰も言えなかった。ひと季を温く置かれた酒は、重く、かすかに青菜めき、かすかに排水めいた匂いを帯び、その上にあるすべてを平らにする。それは老香——文字どおり老いてしまったにおい——と名づけられた。誰かがそれに結びつける化学を持つ、幾世紀も前のことである。",
          zh:"日本每一位釀酒人都認得那個氣味，而直到不久之前，沒有人說得出它究竟是什麼。在溫熱環境中放過一季的酒，會發展出一種厚重、略帶青菜味、略帶排水口味的氣息，把它上方的一切都壓平。它被命名為「老香」——字面意思就是「變老了的氣味」——那是在任何人能為它附上一套化學之前好幾個世紀的事。" } },

        { t:"p", text:{
          en:"The answer came from the National Research Institute of Brewing. The dominant carrier of hine-ka is dimethyl trisulphide, DMTS — the same molecule that gives cooked onion, over-boiled brassica and certain washed-rind cheeses their character, and which the human nose detects at concentrations measured in parts per billion. What made it hard to control is that DMTS is not present in fresh sake in any quantity. It is generated during storage, out of a precursor that the sake was carrying all along.",
          ja:"答えは酒類総合研究所から来た。老香を担う主たるものはジメチルトリスルフィド、DMTSである。煮た葱、茹ですぎた菜、ある種の洗い皮の乾酪に、その性格を与えるのと同じ分子であり、人の鼻は十億分率で測られる濃度でこれを捉える。制するのを難しくしていたのは、DMTSが新しい酒のなかにはさしたる量で存在せぬことであった。それは貯蔵のあいだに、酒が初めから携えていた前駆体から生み出される。",
          zh:"答案來自酒類綜合研究所。老香的主要載體是二甲基三硫醚，DMTS——同一個分子賦予了煮過的洋蔥、煮過頭的十字花科蔬菜，以及某些洗浸乳酪它們的個性，而人的鼻子能在以十億分之一計的濃度下察覺它。難以控制之處在於：DMTS 在新鮮的酒中並不存在多少量。它是在貯藏期間，由酒一路帶著的一種前驅物生成的。" } },

        { t:"defs", items:[
          { term:{ en:"DMTS", ja:"DMTS", zh:"DMTS" }, jp:"ジメチルトリスルフィド", romaji:"dimethyl trisulphide",
            def:{ en:"A three-sulphur volatile, CH₃–S–S–S–CH₃. Extremely low odour threshold, so a quantity too small to matter analytically is enough to dominate a glass. It accumulates as a bottle sits, faster the warmer the bottle sits.",
              ja:"硫黄を三つ持つ揮発物、CH₃–S–S–S–CH₃である。匂いの閾がきわめて低く、分析の上では取るに足らぬ量が、一杯を支配するに足る。瓶が置かれるにつれて溜まり、温いほど速く溜まる。",
              zh:"一個帶三個硫的揮發物，CH₃–S–S–S–CH₃。氣味閾值極低，因此在分析上小到不值一提的量，就足以主宰一整杯酒。它隨著瓶子靜置而累積，瓶子放得愈溫，累積得愈快。" } },
          { term:{ en:"DMTS-P1 — the precursor", ja:"DMTS-P1——前駆体", zh:"DMTS-P1——前驅物" }, jp:"前駆物質",
            def:{ en:"1,2-dihydroxy-5-(methylsulphinyl)pentan-3-one, a compound not previously described in the literature when the institute isolated it. Its importance is that it is measurable in fresh sake, before any hine-ka can be smelled. Double the DMTS-P1 in a sample and the DMTS that storage generates roughly doubles too — which turns an unpredictable ageing fault into something a brewery can screen for on the day of bottling.",
              ja:"一・二-ジヒドロキシ-五-（メチルスルフィニル）ペンタン-三-オン。研究所がこれを取り出したとき、文献に記されたことのなかった物質である。その重みは、老香がまだ嗅がれぬうちの、新しい酒において測りうる点にある。試料のDMTS-P1を倍にすれば、貯蔵の生むDMTSもおおよそ倍になる。これは予見しがたい老いの欠点を、蔵が瓶詰の日に選り分けうるものへ変える。",
              zh:"一,二-二羥基-五-（甲基亞磺醯基）戊-三-酮，在研究所將它分離出來時，還未見於文獻。它的重要性在於：它在新鮮的酒裡就可測得，早在任何老香能被聞到之前。把樣品中的 DMTS-P1 加倍，貯藏所生成的 DMTS 也大致加倍——這把一個難以預測的老化缺點，變成酒藏能在裝瓶當天就篩檢的東西。" } },
          { term:{ en:"Nama-hine — the raw-sake version", ja:"生老ね——生酒のそれ", zh:"生老——生酒版本的老化" }, jp:"生老ね香",
            def:{ en:"Unpasteurised sake fails differently. Its enzymes are still alive, and given months they oxidise isoamyl alcohol to isovaleraldehyde, which reads as stale nuts or damp cardboard rather than as pickles. Nama-hine is the specific reason a nama bottle carries a much shorter clock than a pasteurised one, and the reason the cold chain matters more for it than for anything else on a shop shelf.",
              ja:"生酒は異なる仕方で崩れる。その酵素はなお生きており、月を与えられればイソアミルアルコールをイソバレルアルデヒドへ酸化する。それは漬物ではなく、古びた木の実、あるいは湿った厚紙として読まれる。生老ねこそ、生の一本が火入れした一本よりはるかに短い時計を負う理由であり、店の棚のいかなるものにも増して、その冷たさの連なりが重んじられる理由である。",
              zh:"生酒是以另一種方式崩壞的。它的酵素仍然活著，給它幾個月，就會把異戊醇氧化成異戊醛，聞起來像陳掉的堅果或受潮的紙板，而不是漬物。「生老」正是為什麼一支生酒身上的時鐘遠比火入酒短的原因，也是為什麼冷鏈對它比對店裡貨架上任何其他東西都更要緊。" } }
        ] },

        { t:"panel", tint:"amber",
          title:{ en:"What a brewery actually does about it", ja:"蔵が実際にとる手立て", zh:"酒藏實際上會怎麼做" },
          body:[
            { t:"ul", items:[
              { en:"<strong>Store cold.</strong> The single largest lever, and the reason the industry's investment over the last thirty years has gone into refrigerated tanks and refrigerated warehouses rather than into anything more romantic.",
                ja:"<strong>冷たく貯える。</strong>ただ一つ最大の梃子であり、この三十年の業界の投資が、より情趣あるいかなるものでもなく、冷やされた槽と冷やされた蔵へ向かった理由である。",
                zh:"<strong>低溫貯藏。</strong>唯一最大的槓桿，也是這三十年來業界的投資流向冷藏槽與冷藏倉庫、而非任何更浪漫之物的原因。" },
              { en:"<strong>Fill the headspace.</strong> Displacing the air above the sake in tank and bottle with an inert gas removes the oxygen that several of these reactions need.",
                ja:"<strong>空隙を満たす。</strong>槽と瓶において酒の上の空気を不活性の気体で置き換えることは、これらの反応のいくつかが要する酸素を取り除く。",
                zh:"<strong>填滿頂空。</strong>在槽中與瓶中以惰性氣體置換酒液上方的空氣，能移除這些反應中有數個所需要的氧氣。" },
              { en:"<strong>Measure the precursor.</strong> Because DMTS-P1 predicts the fault before it exists, a brewery can decide which tanks to ship first and which to hold — the brewing equivalent of a best-before date it can actually calculate.",
                ja:"<strong>前駆体を測る。</strong>DMTS-P1は欠点がまだ在らぬうちにそれを予告するゆえ、蔵はいずれの槽を先に出し、いずれを留めるかを決められる。実際に計算しうる賞味の期限の、造りにおける等価物である。",
                zh:"<strong>量測前驅物。</strong>由於 DMTS-P1 能在缺點還不存在時就預告它，酒藏可以決定哪些槽先出貨、哪些留著——這相當於一個真的算得出來的賞味期限。" },
              { en:"<strong>Choose the kōji and the rice with it in mind.</strong> Precursor levels are not fixed by fate; they respond to how the kōji was made and how far the rice was polished, which is why research on \"sake that does not go hine\" is a live topic at the institute rather than a solved one.",
                ja:"<strong>それを念頭に麹と米を選ぶ。</strong>前駆体の量は運命に定められてはおらず、麹がいかに造られ、米がいかに磨かれたかに応えて動く。ゆえに「老ねにくい清酒」の研究は、解かれた問いではなく、研究所において今なお生きた主題である。",
                zh:"<strong>帶著這件事去挑麴與米。</strong>前驅物的量並非命定，它會隨著麴怎麼做、米磨到什麼程度而變動——這正是為什麼「不易老化的清酒」在研究所仍是活的課題，而非已解的問題。" }
            ] }
          ] }
      ] },

{ t:"section", id:"hiochi",
      title:{ en:"Hiochi and fuzō: the bacterial faults", ja:"火落ちと腐造——細菌による欠点", zh:"火落與腐造——細菌造成的缺點" }, jp:"火落菌",
      body:[
        { t:"p", text:{
          en:"Sake is a hostile environment. Fifteen to twenty per cent alcohol, a pH near three, almost no free sugar in a dry sake and almost no oxygen in a full tank. The list of organisms that can live in it is therefore very short — but the ones that can are specialists, and for most of the history of Japanese brewing they were the single largest cause of financial ruin.",
          ja:"清酒は敵意ある場所である。十五から二十の百分率の酒精、三に近い酸性度、辛口の酒にはほとんど遊離の糖がなく、満たされた槽にはほとんど酸素がない。ゆえにそこに生きうる生き物の名簿はきわめて短い。だが生きうるものは専門家であり、日本の造りの歴史のほとんどにおいて、それらは財を失う最大にして唯一の因であった。",
          zh:"清酒是個充滿敵意的環境。十五到二十個百分點的酒精、接近三的酸鹼值、辛口酒中幾乎沒有游離糖、滿槽時幾乎沒有氧氣。因此能在其中存活的生物名單極短——但能活下來的都是專家，而在日本釀造史的大部分時間裡，它們是傾家蕩產的最大單一原因。" } },

        { t:"defs", items:[
          { term:{ en:"Fuzō — the mash goes wrong", ja:"腐造——醪が崩れる", zh:"腐造——醪出了問題" }, jp:"腐造", romaji:"fuzō",
            def:{ en:"Spoilage before pressing. Lactic acid bacteria — <em>Lactobacillus casei</em>, <em>L. plantarum</em> and relatives, identified as the culprits around 1961 — outrun the yeast in a mash that has not acidified fast enough. Fermentation slows or stops, sourness and off-odours rise, and a tank representing weeks of work becomes unsellable. Fuzō is the reason the sokujō method's up-front dose of lactic acid was such a decisive invention.",
              ja:"上槽より前の腐り。乳酸菌——<em>ラクトバチルス・カゼイ</em>、<em>プランタルム</em>とその縁者。一九六一年ごろに下手人として同定された——が、十分に速く酸性とならなかった醪において酵母を追い越す。発酵は緩み、あるいは止まり、酸味と異臭が昇り、幾週の労を表す一槽が売れぬものとなる。腐造こそ、速醸の前置きの乳酸の一投が、あれほど決定的な発明であった理由である。",
              zh:"上槽之前的腐敗。乳酸菌——<em>乾酪乳桿菌</em>、<em>植物乳桿菌</em>及其近親，約在一九六一年被指認為元兇——在一缸酸化得不夠快的醪中跑贏了酵母。發酵變慢或停止，酸味與異臭升起，一槽代表數週勞動的酒變得無法出售。腐造正是為什麼速釀法「先下一劑乳酸」是如此決定性的發明。" } },
          { term:{ en:"Hiochi — the finished sake goes cloudy", ja:"火落ち——仕上がった酒が濁る", zh:"火落——成品酒變濁" }, jp:"火落ち", romaji:"hiochi",
            def:{ en:"Spoilage after fermentation, in tank or in bottle. The sake goes hazy, gains a sour yoghurt smell and loses its shape entirely. The name means \"falling after the fire\" — after pasteurisation — and it is the failure mode that pasteurisation exists to prevent.",
              ja:"発酵ののちの、槽あるいは瓶のなかの腐り。酒は霞み、酸ったヨーグルトの匂いを得、その姿をすっかり失う。名は「火のあとに落ちる」——火入れののち——を意味し、火入れがそれを防ぐためにこそ在る、その崩れ方である。",
              zh:"發酵之後、在槽中或瓶中的腐敗。酒變得混濁，帶上酸優格的氣味，完全失去它的形貌。這個名字的意思是「在火之後落下」——在火入之後——而火入的存在，正是為了防止這種崩壞。" } },
          { term:{ en:"True hiochi bacteria", ja:"真性火落菌", zh:"真性火落菌" }, jp:"真性火落菌", romaji:"shinsei hiochi-kin",
            def:{ en:"<em>Fructilactobacillus fructivorans</em> — long known under the names <em>Lactobacillus homohiochii</em> and <em>L. heterohiochii</em>, and reclassified into the present genus by 2020. They tolerate fifteen to eighteen per cent alcohol and a pH around three, which is precisely the envelope in which nothing else grows. They are, in effect, organisms that evolved to live in sake and almost nowhere else.",
              ja:"<em>フルクティラクトバチルス・フルクティボランス</em>。長く<em>ラクトバチルス・ホモヒオキイ</em>および<em>ヘテロヒオキイ</em>の名で知られ、二〇二〇年までに現在の属へ改められた。十五から十八の百分率の酒精と、三ほどの酸性度に耐える。それはまさしく、他の何ものも育たぬ範囲である。実のところ、清酒に住まうべく進化し、ほかのほとんどどこにも住まぬ生き物である。",
              zh:"<em>果糖乳桿菌</em>（<em>Fructilactobacillus fructivorans</em>）——長期以 <em>Lactobacillus homohiochii</em> 與 <em>L. heterohiochii</em> 之名為人所知，並在二〇二〇年前改隸現今的屬。它們耐受十五到十八個百分點的酒精與約為三的酸鹼值，而那正好是別無他物能生長的區間。實際上，它們是演化到專門住在清酒裡、幾乎別處都不住的生物。" } },
          { term:{ en:"Hiochi acid", ja:"火落酸", zh:"火落酸" }, jp:"火落酸（メバロン酸）", romaji:"hiochi-san",
            def:{ en:"Mevalonic acid, identified in 1956 as the growth factor these bacteria absolutely require and cannot make for themselves. Sake supplies it; most other liquids do not. That single dependency explains both why hiochi bacteria are found nowhere else and why the discovery mattered — it gave researchers a way to culture and study an organism that had been effectively invisible.",
              ja:"メバロン酸。一九五六年、これらの菌が絶対に要し、自らは造りえぬ生育因子として同定された。清酒はそれを供し、他のほとんどの液は供さぬ。この一つの依存が、火落菌が他のどこにも見つからぬ理由と、その発見が重んじられた理由の両方を説く。それは、事実上目に見えなかった生き物を培い調べる術を、研究者に与えたのである。",
              zh:"甲羥戊酸，一九五六年被指認為這些細菌絕對需要、卻無法自行製造的生長因子。清酒供給它，多數其他液體不供給。這單一項依賴同時解釋了兩件事：為什麼火落菌在別處找不到，以及為什麼這項發現如此重要——它讓研究者得以培養並研究一種先前形同不可見的生物。" } }
        ] },

        { t:"h3", text:{ en:"A century of countermeasures", ja:"対策の一世紀", zh:"對策的一個世紀" }, id:"counter" },

        { t:"timeline", items:[
          { year:"1876–79", era:{ en:"Meiji", ja:"明治", zh:"明治" }, eraJp:"明治",
            title:{ en:"Salicylic acid enters the brewery", ja:"サリチル酸、蔵に入る", zh:"水楊酸進入酒藏" }, jp:"防腐剤",
            text:{ en:"A chemical preservative is introduced against spoilage and spreads through the industry within a generation. It works. It is also, by later standards, a health question, and it will take almost a century to remove.",
              ja:"腐りに抗する化学の防腐剤が導入され、一世代のうちに業界へ広まる。それは効く。そして後世の基準からすれば、それは健康の問いでもあり、取り除くのに一世紀近くを要することとなる。",
              zh:"一種化學防腐劑被引入以對抗腐敗，並在一個世代之內遍及全業。它有效。而以後世的標準看，它同時也是個健康問題，並且將花上將近一個世紀才被移除。" } },
          { year:"1881", era:{ en:"Meiji", ja:"明治", zh:"明治" }, eraJp:"明治",
            title:{ en:"Atkinson sees the rods", ja:"アトキンソン、桿菌を見る", zh:"阿特金森看見了桿菌" }, jp:"顕微鏡",
            text:{ en:"The British chemist R. W. Atkinson, teaching in Tokyo, examines spoiled sake under a microscope and describes rod-shaped bacteria in it — the first identification of the enemy as an organism rather than a misfortune.",
              ja:"東京で教えていた英国の化学者R・W・アトキンソンが、腐った酒を顕微鏡の下に検め、そのなかの桿状の菌を記す。敵を不運ではなく生き物として捉えた、最初の同定である。",
              zh:"在東京任教的英國化學家阿特金森（R. W. Atkinson）以顯微鏡檢視腐壞的清酒，並描述其中的桿狀細菌——這是首次把敵人指認為一種生物，而非一場不幸。" } },
          { year:"1904", era:{ en:"Meiji", ja:"明治", zh:"明治" }, eraJp:"明治",
            title:{ en:"A national laboratory", ja:"国の実験室", zh:"一座國家實驗室" }, jp:"醸造試験所",
            text:{ en:"The government establishes a brewing research institute. Spoilage is not the only reason — sake tax was funding the state — but it is the most urgent one, and microbiology is where the new institute starts.",
              ja:"政府が醸造の研究の所を設ける。腐りが唯一の理由ではない——酒税は国を賄っていた——が、最も差し迫った理由であり、微生物学こそ新しい所の始めた場所である。",
              zh:"政府設立釀造研究機構。腐敗並非唯一原因——酒稅正在支撐國家財政——但它是最急迫的原因，而微生物學正是這座新機構的起點。" } },
          { year:"1956", era:{ en:"Shōwa", ja:"昭和", zh:"昭和" }, eraJp:"昭和",
            title:{ en:"Mevalonic acid identified", ja:"メバロン酸の同定", zh:"甲羥戊酸被指認" }, jp:"火落酸",
            text:{ en:"The growth factor that hiochi bacteria cannot live without is named. The organisms become culturable, and therefore studyable, and therefore beatable.",
              ja:"火落菌がそれなくして生きえぬ生育因子に名が与えられる。生き物は培いうるものとなり、ゆえに調べうるものとなり、ゆえに破りうるものとなる。",
              zh:"火落菌不可或缺的生長因子被命名。這些生物變得可培養，因而可研究，因而可被擊敗。" } },
          { year:"1969–71", era:{ en:"Shōwa", ja:"昭和", zh:"昭和" }, eraJp:"昭和",
            title:{ en:"Pasteurisation standardised", ja:"火入れの規格化", zh:"火入的標準化" }, jp:"六十五度",
            text:{ en:"Heat treatment settles on the familiar benchmark of around 65 °C held for ten minutes or more, and membrane filtration comes in as a way of reducing the bacterial load before the heat is applied at all.",
              ja:"熱の処理は、六十五度ほどを十分以上保つという馴染みの目安に落ち着き、膜による濾過が、熱を加えるより前に菌の量を減らす術として入ってくる。",
              zh:"熱處理定於熟悉的基準——約六十五度、維持十分鐘以上——而膜過濾則作為在加熱之前先降低菌量的手段被引進。" } },
          { year:"1973", era:{ en:"Shōwa", ja:"昭和", zh:"昭和" }, eraJp:"昭和",
            title:{ en:"Salicylic acid prohibited", ja:"サリチル酸の禁止", zh:"水楊酸遭禁" }, jp:"添加禁止",
            text:{ en:"The preservative is banned. That the industry could give it up at all is a measure of how completely refrigeration, filtration and controlled pasteurisation had replaced it.",
              ja:"防腐剤が禁じられる。業界がそれを手放しえたということ自体が、冷蔵と濾過と制された火入れが、いかに完全にそれを置き換えていたかの尺度である。",
              zh:"這種防腐劑遭禁。業界之所以能夠放棄它，本身就是一把尺，量出冷藏、過濾與受控的火入已經多麼徹底地取代了它。" } },
          { year:{ en:"Today", ja:"現在", zh:"當代" }, era:{ en:"Heisei–Reiwa", ja:"平成〜令和", zh:"平成～令和" }, eraJp:"平成〜令和",
            title:{ en:"Swabs, ATP and PCR", ja:"拭き取り・ATP・PCR", zh:"擦拭採樣、ATP 與 PCR" }, jp:"衛生管理",
            text:{ en:"Hiochi is now rare, and where it appears it is usually in unpasteurised products or in an old kura whose plumbing has a hiding place. The routine defences are surface swabs read for ATP, DNA-based detection of the specific species, and — for the increasing number of breweries shipping nama — an unbroken cold chain from the tank to the customer's refrigerator.",
              ja:"火落ちは今や稀であり、現れるとすればたいてい火入れせぬ品か、配管に隠れ場を持つ古い蔵においてである。常の守りは、ATPで読む面の拭き取り、種を特定するDNAによる検出、そして——生を出す蔵が増えるにつれ——槽から客の冷蔵庫までの、途切れぬ冷たさの連なりである。",
              zh:"火落如今已屬罕見，而它出現時，通常是在未經火入的產品中，或在一座管線裡有藏身處的老酒藏裡。日常的防線是：以 ATP 判讀的表面擦拭採樣、針對特定菌種的 DNA 檢測，以及——隨著出貨生酒的酒藏日益增多——從酒槽到客人冰箱之間不曾中斷的冷鏈。" } }
        ] },

        { t:"note", label:{ en:"Why nama is different", ja:"生がなぜ異なるか", zh:"生酒為何不同" },
          text:{
            en:"Unpasteurised sake has, by definition, given up the main defence. What replaces it is not a substitute chemistry but logistics: sterile filtration where the style permits it, and cold — often below zero — from the moment the bottle is filled. A nama bottle that has spent an afternoon at room temperature has not been ruined, but it has spent part of its life.",
            ja:"生酒は、定義からして主たる守りを手放している。それに代わるのは代わりの化学ではなく、物流である。酒質がそれを許すところでは無菌の濾過、そして瓶が満たされたその時からの冷たさ——しばしば零度を下回る。室の温度で午後を過ごした生の一本は損なわれてはいないが、その生涯の一部を費やしてはいる。",
            zh:"生酒依定義就已放棄了主要的防線。取而代之的不是替代性的化學，而是物流：在酒質允許之處採用無菌過濾，以及自裝瓶那一刻起的低溫——往往在零度以下。一支在室溫下待了一個下午的生酒並未被毀掉，但它已經花掉了自己壽命的一部分。" } }
      ] },

    { t:"section", id:"light",
      title:{ en:"Light: the fastest fault of all", ja:"光——最も速い欠点", zh:"光——所有缺點中最快的一個" }, jp:"日光臭",
      body:[
        { t:"p", text:{
          en:"Every other fault on this page takes weeks or months. Light takes hours. Ultraviolet radiation supplies enough energy to break sulphur-containing compounds apart and let the fragments recombine as mercaptans — volatile thiols with an animal, rubbery, struck-match character that is unmistakable once met. The Japanese name, nikkō-shū, is simply \"sunlight smell\".",
          ja:"この頁の他のいかなる欠点も、週あるいは月を要する。光は時間を要する。紫外の輻射は、硫黄を含む物質を断ち、その断片をメルカプタンとして結び直させるに足る力を与える。獣めき、護謨めき、擦った燐寸めいた性格を持つ揮発するチオールであり、一度出会えば取り違えようがない。日本語の名、日光臭は、そのまま「日の光のにおい」である。",
          zh:"本頁上其他任何缺點都需要數週或數月。光只需要幾小時。紫外輻射提供足夠的能量拆開含硫化合物，並讓碎片重組成硫醇——一類帶著獸味、橡膠味、剛劃過的火柴味的揮發性硫醇，一旦遇過就不會認錯。日文的名字「日光臭」，字面就是「日光的氣味」。" } },

        { t:"grid", cols:3, cells:[
          { k:{ en:"Green glass", ja:"緑の瓶", zh:"綠瓶" }, v:{ en:"Partial", ja:"半ば", zh:"部分" },
            d:{ en:"Blocks some ultraviolet but not enough for a bottle standing in daylight. Common for ginjō because it looks the part.",
              ja:"紫外のいくらかを遮るが、日の光のなかに立つ一本には足りぬ。吟醸に多いのは、それがそれらしく見えるからである。",
              zh:"能擋掉一部分紫外線，但對一支立在日光中的酒瓶而言並不夠。吟釀常用綠瓶，因為它看起來就該是那樣。" } },
          { k:{ en:"Brown glass", ja:"茶の瓶", zh:"茶色瓶" }, v:{ en:"Good", ja:"良", zh:"良好" },
            d:{ en:"The industry standard for a reason. Brown glass absorbs across most of the damaging range, which is why the least glamorous bottle on the shelf is often the best-protected one.",
              ja:"業界の標準であるには理由がある。茶の硝子は害をなす範囲のほとんどを吸うゆえ、棚のうえで最も華のない一本が、しばしば最もよく守られた一本である。",
              zh:"它成為業界標準是有原因的。茶色玻璃能吸收大部分具破壞性的波段，這正是為什麼架上最不起眼的那一瓶，往往是被保護得最好的那一瓶。" } },
          { k:{ en:"Clear glass", ja:"透明の瓶", zh:"透明瓶" }, v:{ en:"Needs a wrap", ja:"包みを要す", zh:"需要包覆" },
            d:{ en:"Chosen when the sake's colour or a decorative label is the selling point. A serious producer ships it in a printed sleeve, a box, or an opaque outer wrap — and means it.",
              ja:"酒の色、あるいは飾りの札が売りであるときに選ばれる。真剣な造り手はそれを刷った袋、箱、あるいは光を通さぬ外包みに入れて出す。そしてそれは本気である。",
              zh:"當酒的顏色或裝飾性的酒標是賣點時才會選用。認真的生產者會用印刷紙套、外盒或不透光的外包裝出貨——而且是認真的。" } }
        ] },

        { t:"panel", tint:"snow",
          title:{ en:"The shop-window test", ja:"店先の窓の試し", zh:"櫥窗測試" },
          body:[
            { t:"p", text:{
              en:"Walk past a liquor shop and look at where the bottles are. A clear or green bottle standing in a south-facing window, or directly under a fluorescent or LED strip at close range, has been receiving a dose all day, every day, for as long as it has been there. It does not matter how good the sake was. This is the single most reliable way to judge a sake retailer from the pavement, and it takes two seconds.",
              ja:"酒屋の前を歩き、瓶がどこに在るかを見よ。南に向いた窓に立つ透明あるいは緑の一本、あるいは近くから蛍光灯や発光素子の帯の真下にある一本は、そこに在るあいだじゅう、毎日、一日じゅう、量を受け続けてきた。その酒がいかに良かったかは関わりがない。これは舗道から酒の小売を判ずる、ただ一つ最も確かな術であり、二秒で済む。",
              zh:"走過一家酒商，看看酒瓶擺在哪裡。一支立在朝南窗邊、或近距離直接位於日光燈或 LED 燈條之下的透明瓶或綠瓶，只要它在那裡，就一直在每天、整天地承受劑量。那支酒本來有多好並不重要。這是從人行道上判斷一家清酒零售商最可靠的單一方法，而且只需兩秒。" } }
          ] }
      ] },

    { t:"section", id:"line",
      title:{ en:"Where the fault line actually is", ja:"欠点の境はどこにあるか", zh:"缺點的界線究竟畫在哪裡" }, jp:"個性と欠点",
      body:[
        { t:"p", text:{
          en:"This is the part that is easy to get wrong, and getting it wrong in either direction does damage. Call every unfamiliar aroma a fault and you will reject kimoto, koshu, kijōshu, most cedar-cask sake and a good deal of what is currently the most interesting brewing in Japan. Call every fault a style and you will defend bottles that have simply been mistreated between the brewery and your glass.",
          ja:"ここは誤りやすい部分であり、いずれの向きに誤っても害をなす。馴染まぬ香りのすべてを欠点と呼べば、生酛、古酒、貴醸酒、樽酒のほとんど、そして今の日本で最も面白い造りのかなりの部分を退けることになる。欠点のすべてを個性と呼べば、蔵から手のなかの杯までのあいだに、ただ粗末に扱われただけの瓶を弁護することになる。",
          zh:"這是最容易弄錯的部分，而往任何一個方向弄錯都會造成傷害。把每一種不熟悉的香氣都叫做缺點，你就會否決生酛、古酒、貴釀酒、大部分的樽酒，以及當今日本最有趣的釀造中的相當一部分。把每一項缺點都叫做風格，你就會替那些只是在酒藏與你的酒杯之間遭到粗率對待的酒瓶辯護。" } },

        { t:"compare", cols:2, items:[
          { title:{ en:"Sounds like a fault, is not", ja:"欠点に聞こえるが、そうではない", zh:"聽起來像缺點，其實不是" }, jp:"個性",
            body:[
              { t:"ul", plain:true, items:[
                { en:"<strong>Lactic tang and yoghurt in a kimoto or yamahai.</strong> The lactic acid is native to the method, built by bacteria the brewer invited in. Hiochi is haze plus sourness in a sake that was never meant to have either.",
                  ja:"<strong>生酛・山廃の乳の酸味とヨーグルト。</strong>その乳酸は工法に固有のものであり、造り手が招き入れた菌が築いたものである。火落ちとは、そのいずれをも持つはずでなかった酒における、濁りと酸味である。",
                  zh:"<strong>生酛或山廢中的乳酸感與優格味。</strong>那乳酸是這套工法固有的，由釀酒人主動邀來的細菌所建立。火落則是在一支本不該有這兩者的酒裡出現的白濁加酸味。" },
                { en:"<strong>Soy, caramel and dried fruit in a koshu.</strong> Maillard chemistry, deliberately run for years. The same notes appearing in a fresh ginjō that should smell of pear are the same chemistry arriving uninvited.",
                  ja:"<strong>古酒の醤、カラメル、干した果実。</strong>年をかけて意図して走らせたメイラードの化学である。梨の匂いを持つべき新しい吟醸に同じ調べが現れるならば、それは招かれずに来た同じ化学である。",
                  zh:"<strong>古酒中的醬油味、焦糖與果乾。</strong>那是刻意運行了數年的梅納化學。同樣的調子若出現在一支本該有梨香的新鮮吟釀裡，那就是同一套化學不請自來。" },
                { en:"<strong>Smoke and clove in a cedar-cask or certain kimoto sake.</strong> 4-vinylguaiacol has a legitimate place; it is the level and the context that decide.",
                  ja:"<strong>樽酒や、ある種の生酛における燻りと丁字。</strong>四-ビニルグアヤコールには正当な居場所がある。決めるのは量と文脈である。",
                  zh:"<strong>樽酒或某些生酛中的煙燻與丁香味。</strong>四-乙烯基癒創木酚有它正當的位置；決定的是濃度與脈絡。" },
                { en:"<strong>Bitterness and grip in a nigori or an unfiltered junmai.</strong> Body from suspended solids, not a defect. Bitterness that arrives late and metallic on a clear sake is a different thing.",
                  ja:"<strong>にごりや無濾過の純米における苦味と引き締まり。</strong>浮かぶ固形からくる厚みであり、瑕ではない。澄んだ酒において遅れて金属めいて現れる苦味は別ものである。",
                  zh:"<strong>濁酒或無過濾純米中的苦味與抓力。</strong>那是懸浮固形物帶來的酒體，不是瑕疵。一支清澈的酒裡遲來而帶金屬味的苦，則是另一回事。" }
              ] }
            ] },
          { title:{ en:"Sounds like a style, is not", ja:"個性に聞こえるが、そうではない", zh:"聽起來像風格，其實不是" }, jp:"欠点",
            body:[
              { t:"ul", plain:true, items:[
                { en:"<strong>\"Umami\" that is actually hine-ka.</strong> If the savoury note is accompanied by a flat, drain-like heaviness and the sake has lost its top end entirely, that is DMTS, not depth.",
                  ja:"<strong>実は老香である「旨み」。</strong>その旨みの調べが、平らで排水めいた重さを伴い、酒がその高みをすっかり失っているならば、それは深さではなくDMTSである。",
                  zh:"<strong>其實是老香的「旨味」。</strong>如果那股鮮味伴隨著扁平、帶排水口感的沉重，而酒完全失去了高音，那是 DMTS，不是深度。" },
                { en:"<strong>\"Aged character\" in a bottle that was never aged.</strong> A two-year-old junmai that smells like a twenty-year-old koshu was not aged; it was stored badly. The tell is that koshu develops sweetness and roundness alongside the colour, while heat damage brings colour and flatness together.",
                  ja:"<strong>熟成させられたことのない瓶における「熟成の趣」。</strong>二十年の古酒のように匂う二年の純米は、熟成させられたのではなく、粗末に貯えられたのである。見分けは、古酒が色とともに甘みと丸みを育むのに対し、熱の害は色と平らさをともに連れてくる点にある。",
                  zh:"<strong>從未熟成過的酒瓶裡的「熟成感」。</strong>一支聞起來像二十年古酒的兩年純米，不是被熟成了，而是被存壞了。判別的關鍵在於：古酒在生出顏色的同時也發展出甜味與圓潤，而熱損傷則是把顏色與扁平一起帶來。" },
                { en:"<strong>\"Minerality\" that is a struck-match thiol.</strong> Flint and gunflint are real descriptors, but if the note strengthens in the glass and turns rubbery, the bottle saw light.",
                  ja:"<strong>擦った燐寸のチオールである「ミネラル感」。</strong>火打石や燧の調べは実在の言葉であるが、その調べが杯のなかで強まり護謨めいてゆくならば、その瓶は光を見たのである。",
                  zh:"<strong>其實是火柴味硫醇的「礦物感」。</strong>燧石與打火石是真實存在的形容詞，但如果那個調子在杯中愈來愈強、並轉為橡膠味，那麼這瓶酒見過光。" },
                { en:"<strong>\"Sparkling\" that is a secondary fermentation nobody planned.</strong> Genuine sparkling sake is either bottle-conditioned on purpose or carbonated on purpose. Fine bubbles in a still sake, with haze, usually mean something is alive in there.",
                  ja:"<strong>誰も企てなかった二次発酵である「発泡」。</strong>真の発泡清酒は、意図しての瓶内発酵か、意図しての炭酸の付加である。静かな酒における細かな泡が濁りを伴うならば、たいていそこで何かが生きている。",
                  zh:"<strong>其實是沒人計畫過的二次發酵的「氣泡」。</strong>真正的氣泡清酒，要嘛是刻意的瓶內發酵，要嘛是刻意的充氣。一支靜態酒裡出現細緻氣泡並伴隨白濁，通常意味著裡面有什麼還活著。" }
              ] }
            ] }
        ] },

        { t:"quote",
          text:{ en:"The question is never \"is this compound present\". It is always present. The question is whether it is where the brewer put it.",
            ja:"問いは決して「この物質が在るか」ではない。それはつねに在る。問いは、それが造り手の置いた場所に在るかどうかである。",
            zh:"問題從來不是「這個化合物存不存在」。它一直都在。問題是：它在不在釀酒人放它的那個位置上。" },
          cite:{ en:"A working principle from the tasting-panel room", ja:"官能検査の部屋の働く原則", zh:"品評室裡的一條工作原則" } }
      ] },

    { t:"section", id:"detect",
      title:{ en:"Finding it before the customer does", ja:"客より先に見つける", zh:"趕在客人之前發現它" }, jp:"検査",
      body:[
        { t:"steps", items:[
          { n:"1", title:{ en:"Nomikiri — opening the tanks", ja:"呑切り——槽を開ける", zh:"呑切——開槽" }, jp:"呑切り", romaji:"nomikiri",
            meta:{ en:"Early summer, once a year at minimum", ja:"初夏。少なくとも年に一度", zh:"初夏，至少一年一次" },
            text:{ en:"The oldest quality gate in Japanese brewing. Once the cold season's sake has been in tank for some months, the brewery draws a sample from every tank and tastes the lot, often with an invited technical officer from the prefecture. Tanks are ranked, blended, held back or shipped first on the strength of what the panel finds. Hine-ka in June is the single most consequential thing that can turn up.",
              ja:"日本の造りにおける最も古い品質の関である。寒の季の酒が槽に幾月か在ったのち、蔵はすべての槽から試料を汲み、しばしば県から招いた技術の官とともに、そのすべてを利く。槽は席次をつけられ、調合され、留められ、あるいは先に出される。すべては利き手の見出したものによる。六月の老香こそ、現れうる最も重い事柄である。",
              zh:"日本釀造史上最古老的品質關卡。當寒造季的酒在槽中放了數個月之後，酒藏會從每一槽取樣並全部品評，往往還會邀請縣裡的技術官員同席。各槽依品評結果排序、調合、扣留或優先出貨。六月出現的老香，是可能冒出來的最要緊的一件事。" } },
          { n:"2", title:{ en:"The sensory panel", ja:"官能検査", zh:"官能品評" }, jp:"官能検査", romaji:"kannō kensa",
            meta:{ en:"Trained noses, standard vocabulary", ja:"訓えられた鼻、定まった語彙", zh:"受訓的鼻子、標準化的語彙" },
            text:{ en:"Japan runs a formal system of tasting qualifications, and the fault vocabulary in the table above is what panellists are trained and tested on. The value of a shared vocabulary is not poetry; it is that two people in different prefectures can agree that a sample has the same defect, which is what makes a national quality standard possible at all.",
              ja:"日本は利き酒の資格の正式な仕組みを持ち、上の表の欠点の語彙こそ、利き手が訓えられ試されるものである。共有された語彙の値打ちは詩ではない。異なる県にある二人が、ある試料が同じ瑕を持つと合意しうるということである。それこそが、国の品質の基準をそもそも可能にするものである。",
              zh:"日本設有正式的品飲資格制度，而上表中的缺點語彙，正是品評員接受訓練與測驗的內容。共享語彙的價值不在詩意，而在於身處不同縣的兩個人能夠同意某個樣品帶有同一項瑕疵——正是這一點，才使全國性的品質標準成為可能。" } },
          { n:"3", title:{ en:"Swabs and ATP", ja:"拭き取りとATP", zh:"擦拭採樣與 ATP" }, jp:"清浄度検査", romaji:"seijōdo kensa",
            meta:{ en:"Hoses, valves, filling heads", ja:"ホース、弁、充填の口", zh:"軟管、閥門、充填頭" },
            text:{ en:"Most hiochi in a modern brewery does not come from the sake; it comes from a fitting. ATP swabs give a numerical reading of living material on a surface within minutes, which turns cleaning from a matter of diligence into a matter of measurement. The suspect list is always the same: hose interiors, valve seats, pump bodies, the filler.",
              ja:"今の蔵における火落ちのほとんどは酒からではなく、継手から来る。ATPの拭き取りは、面の上の生きた物質を数分のうちに数として読ませる。それは掃除を勤勉の問題から測定の問題へ変える。疑わしきものの名簿はつねに同じである。ホースの内、弁の座、ポンプの胴、充填機。",
              zh:"現代酒藏裡的火落大多不是來自酒，而是來自某個接頭。ATP 擦拭採樣能在幾分鐘內給出表面活體物質的數值讀數，把清潔從一件勤勉的事變成一件量測的事。嫌疑名單永遠是同一份：軟管內壁、閥座、幫浦本體、充填機。" } },
          { n:"4", title:{ en:"DNA detection", ja:"DNAによる検出", zh:"DNA 檢測" }, jp:"遺伝子検査", romaji:"idenshi kensa",
            meta:{ en:"Species-specific, hours not days", ja:"種を特定し、日ではなく時間", zh:"針對特定菌種，以小時而非天計" },
            text:{ en:"Because hiochi bacteria grow slowly and need mevalonic acid, culturing them takes a week or more — far too long to hold a bottling line. PCR-based methods look for the organism's DNA directly and answer the same question the same day.",
              ja:"火落菌は育ちが遅く、メバロン酸を要するがゆえ、培うには一週かそれ以上を要する。瓶詰の列を止めておくにはあまりに長い。PCRに拠る術は、その生き物のDNAを直に探し、同じ問いに同じ日のうちに答える。",
              zh:"由於火落菌生長緩慢且需要甲羥戊酸，培養它們要花一週以上——對停下裝瓶線來說實在太久。以 PCR 為基礎的方法直接尋找該生物的 DNA，在當天就能回答同一個問題。" } },
          { n:"5", title:{ en:"Turbidity and colour", ja:"濁度と色", zh:"濁度與色度" }, jp:"数値管理", romaji:"sūchi kanri",
            meta:{ en:"The dumbest instruments, quietly the most useful", ja:"最も愚かな器械が、静かに最も役立つ", zh:"最笨的儀器，安靜地最有用" },
            text:{ en:"A haze reading and an absorbance reading at a fixed wavelength cost almost nothing and track two of the three roads directly. A tank whose colour number is climbing month on month is telling the brewery about its storage temperature more honestly than any thermometer on the wall.",
              ja:"濁りの読みと、定めた波長における吸光の読みは、ほとんど何の代価も要さず、三つの道のうち二つを直に追う。色の数が月ごとに昇ってゆく槽は、壁のいかなる寒暖計よりも正直に、その貯蔵の温度について蔵に語っている。",
              zh:"一個濁度讀數與一個固定波長的吸光度讀數幾乎不花什麼成本，卻能直接追蹤三條路徑中的兩條。一個色度數字逐月攀升的槽，正在比牆上任何一支溫度計都更誠實地，向酒藏訴說它的貯藏溫度。" } }
        ] }
      ] },

    { t:"section", id:"home",
      title:{ en:"Protecting a bottle you already own", ja:"手元の一本を守る", zh:"保護你已經擁有的那一瓶" }, jp:"家での守り",
      body:[
        { t:"ul", plain:true, items:[
          { en:"<strong>Upright, cold, dark.</strong> Sake does not need a cork kept wet, so standing is better — it minimises the surface in contact with the headspace air. A refrigerator is right for anything unpasteurised and right enough for everything else.",
            ja:"<strong>立てて、冷たく、暗く。</strong>清酒は栓を濡らしておく必要がないゆえ、立てるほうが良い。空隙の空気に触れる面を最も小さくする。冷蔵庫は火入れせぬもののすべてにとって正しく、他のすべてにとっても十分に正しい。",
            zh:"<strong>直立、低溫、避光。</strong>清酒不需要保持軟木塞濕潤，所以直立更好——這能把與頂空空氣接觸的面積降到最小。冰箱對所有未經火入的酒都是對的，對其他所有酒也夠對了。" },
          { en:"<strong>The clock starts at opening.</strong> A pasteurised junmai will hold its shape for a week or two in the fridge; a delicate daiginjō is at its best in two or three days; a nama should be treated as a two-day proposition. Decanting the remainder into a smaller, full bottle buys real time by removing the air.",
            ja:"<strong>時計は開栓に始まる。</strong>火入れした純米は冷蔵で一週か二週その姿を保つ。繊細な大吟醸は二日か三日が最良である。生は二日のものと心得るがよい。残りをより小さく、満たされた瓶へ移すことは、空気を取り除くことで実の時を稼ぐ。",
            zh:"<strong>時鐘從開瓶開始走。</strong>一支火入的純米在冰箱裡能維持一到兩週的形貌；纖細的大吟釀在兩三天內最好；生酒應當視為只有兩天。把剩下的酒倒進一支更小、能裝滿的瓶子裡，藉由移除空氣，能真正買到時間。" },
          { en:"<strong>Distrust the shelf, not the label.</strong> The bottling date printed on the back is useful, but it tells you when the clock started, not how fast it has been running. A bottle six months old from a cold shop is in better condition than one three months old from a warm one.",
            ja:"<strong>札ではなく棚を疑え。</strong>裏に刷られた瓶詰の日付は役に立つが、それは時計がいつ始まったかを告げるのみで、いかに速く走ってきたかは告げぬ。冷たい店の六月経った一本は、温い店の三月経った一本より良い状態にある。",
            zh:"<strong>要懷疑的是貨架，不是酒標。</strong>背標上印的裝瓶日期有用，但它只告訴你時鐘何時開始走，而非它跑得多快。一支來自低溫店家、放了六個月的酒，狀態勝過一支來自溫熱店家、只放了三個月的酒。" },
          { en:"<strong>A faulted bottle is not always a waste.</strong> Mild hine-ka mostly disappears under heat and food: warm it, and serve it with something rich and salty. This is not a rescue so much as an acknowledgement that warm sake has always been where the less-than-perfect bottle went.",
            ja:"<strong>傷んだ一本がつねに無駄であるとは限らぬ。</strong>軽い老香は、熱と料理の下でおおむね消える。燗をつけ、濃く塩気のあるものとともに出せばよい。これは救いというよりは、燗こそが、完全ならぬ一本の行く先であり続けたことの認めである。",
            zh:"<strong>一支有缺點的酒未必就是浪費。</strong>輕微的老香在加熱與食物之下大多會消失：把它溫熱，配上濃厚而帶鹹的東西。與其說這是搶救，不如說這是承認——溫酒一直都是那些不夠完美的酒瓶最後的去處。" }
        ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"storage.html\">Buying &amp; Storage</a> for the cold chain and the dates on a label, <a href=\"aging.html\">Aged Sake</a> for the deliberate version of the same chemistry, <a href=\"microbes.html\">The Microbial Cast</a> for the organisms in full, <a href=\"taste.html\">Chemistry of Flavour</a> for the compounds that are supposed to be there.",
          ja:"関連——冷たさの連なりと札の日付は<a href=\"storage.html\">購入と保存</a>、同じ化学の意図された姿は<a href=\"aging.html\">熟成酒</a>、生き物の全容は<a href=\"microbes.html\">微生物の顔ぶれ</a>、在るべき物質は<a href=\"taste.html\">味の科学</a>。",
          zh:"相關：冷鏈與酒標上的日期見<a href=\"storage.html\">選購與保存</a>；同一套化學的刻意版本見<a href=\"aging.html\">熟成酒</a>；生物的全貌見<a href=\"microbes.html\">微生物的角色群</a>；本該存在的化合物見<a href=\"taste.html\">風味的化學</a>。" } }
      ] },

    { t:"related", items:[
      { href:"microbes.html", why:{ en:"The organisms that cause most of them.", ja:"その多くを引き起こす生きもの。", zh:"造成其中大部分問題的那些生物。" } },
      { href:"storage.html", why:{ en:"How most of them are actually prevented.", ja:"その多くが実際にどう防がれるか。", zh:"它們大多實際上是怎麼被預防的。" } },
      { href:"tasting.html", why:{ en:"How to describe what you are smelling, accurately.", ja:"嗅いでいるものを正確に述べる方法。", zh:"如何準確描述你聞到的東西。" } },
      { href:"taste.html", why:{ en:"The same compounds when they are wanted.", ja:"同じ成分が望まれている場合。", zh:"同樣這些化合物被期待出現的時候。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- homebrew */
SAKE.pages["homebrew"] = {
  kicker: { en: "Understanding · 15", ja: "理解 · 15", zh: "理解 · 15" },
  title:  { en: "Making Your Own", ja: "自分で造るということ", zh: "自己動手釀這件事" },
  jp: "自家醸造と法",
  lede: {
    en: "Japan is a country where almost every traditional ferment is still made at home. Miso, pickles, umeboshi, shio-kōji, natto, amazake — all of them ordinary kitchen work. Sake is the exception, and the exception is not cultural but fiscal: since 1899 it has been a criminal offence to brew it in your own house, and the ban has survived a constitutional challenge that went to the Supreme Court. This page is about that line — where it was drawn, why, what it cost, what it still permits, and how differently the rest of the world has answered the same question.",
    ja: "日本は、伝統の醗酵のほとんどが今なお家で営まれる国である。味噌、漬物、梅干し、塩麹、納豆、甘酒——いずれも当たり前の台所の仕事である。酒だけが例外であり、その例外は文化のものではなく財政のものである。一八九九年よりこのかた、自らの家で酒を醸すことは罪であり、その禁は最高裁まで届いた憲法上の争いを生き延びた。この頁が扱うのはその一線である。どこに引かれ、なぜ引かれ、何を代価とし、なお何を許し、そして世界の他の場所が同じ問いにいかに異なる答えを出したか。",
    zh: "日本是一個幾乎所有傳統發酵物仍在家中製作的國家。味噌、漬物、梅干、鹽麴、納豆、甘酒——全都是尋常的廚房工作。清酒是例外，而這個例外不是文化性的，是財政性的：自一八九九年以來，在自家釀酒即屬犯罪，而這道禁令熬過了一場一路打到最高法院的違憲挑戰。本頁談的正是那條界線：它畫在哪裡、為什麼畫、代價是什麼、如今仍允許什麼，以及世界其他地方對同一個問題給出了多麼不同的答案。"
  },
  body: [

    { t:"section", id:"ban",
      title:{ en:"The year the kitchen closed", ja:"台所が閉じられた年", zh:"廚房被關上的那一年" }, jp:"明治三十二年",
      body:[
        { t:"p", text:{
          en:"Before the Meiji tax reforms, brewing at home was ordinary. Farming households made doburoku — unfiltered, cloudy, alive — for the new year, for the rice-planting, for the harvest festival, for a funeral. It was not a hobby and it was not a craft revival; it was what you drank, made from what you had grown, in quantities nobody counted.",
          ja:"明治の税の改めより前、家で醸すことは当たり前であった。農の家はどぶろくを——濾されず、濁り、生きたものを——正月のために、田植えのために、収穫の祭のために、葬いのために造った。それは趣味ではなく、手仕事の復興でもなかった。それは、自ら育てたものから造られ、誰も数えぬ量で、飲まれるものであった。",
          zh:"在明治稅制改革之前，在家釀酒是尋常事。農家釀濁酒——未過濾、混濁、活著的——為了新年、為了插秧、為了收穫祭、為了葬禮。那不是嗜好，也不是工藝復興；那就是你所喝的東西，用你自己種出來的東西做的，數量沒有人在計算。" } },

        { t:"p", text:{
          en:"That ended because the state needed money. Sake tax was becoming the largest single source of national revenue in the years around the Sino-Japanese War, and every litre brewed in a farmhouse was a litre that never passed through a taxed brewery. Home brewing for one's own use was first taxed, then licensed, then in 1899 abolished outright. The self-brewing exemption disappeared, and with it a practice that had no other legal form.",
          ja:"それが終わったのは、国が金を要したからである。日清の戦の前後の年、酒税は国の歳入の最大の単一の源となりつつあり、農家で醸された一リットルは、課された蔵を決して通らぬ一リットルであった。自家用の酒はまず課され、次いで免許を要するものとなり、そして一八九九年、まったく廃された。自家醸造の除外は消え、それとともに、他に合法の形を持たぬ営みが消えた。",
          zh:"這一切之所以終結，是因為國家需要錢。在甲午戰爭前後那幾年，酒稅正成為國家最大的單一稅收來源，而每一公升在農舍裡釀出來的酒，就是一公升永遠不會經過課稅酒藏的酒。自用釀酒先是被課稅，接著被納入許可制，然後在一八九九年被徹底廢止。自家釀造的除外規定消失了，隨之消失的，是一項別無其他合法形式的實踐。" } },

        { t:"panel", tint:"wood",
          title:{ en:"What the tax actually was", ja:"その税が実際にいかなるものであったか", zh:"那筆稅實際上是什麼" },
          body:[
            { t:"p", text:{
              en:"In the decades either side of 1900 the liquor tax repeatedly ranked as Japan's largest or second-largest national tax, at times exceeding the land tax and the income tax combined. Understanding the ban means understanding that sake was not merely a taxed commodity; for a period it was one of the load-bearing columns of the modern Japanese state. That is why the prohibition was enforced with real vigour, and why it has been so hard to reverse: the reasoning that created it was never about drink.",
              ja:"一九〇〇年の前後の数十年、酒税はしばしば国の最大あるいは第二の税に位し、時には地租と所得税の合をも超えた。この禁を理解するとは、酒がただ課された品であったのではなく、ある期間、近代日本国家の荷を負う柱の一つであったと理解することである。それゆえに禁は実の力をもって行われ、それゆえに覆すことがかくも難しかった。それを生んだ理屈は、初めから酒についてのものではなかったのである。",
              zh:"在一九〇〇年前後的數十年間，酒稅屢屢名列日本最大或第二大的國稅，有時甚至超過地租與所得稅的總和。要理解這道禁令，就要理解清酒不只是一項被課稅的商品；有那麼一段時間，它是現代日本國家的承重柱之一。這正是為什麼禁令執行得如此有力，也是為什麼要推翻它如此困難：造就它的那套邏輯，從一開始就不是關於酒的。" } }
          ] },

        { t:"p", text:{
          en:"The cost is easy to state and hard to weigh. Every other fermented food in Japan kept an amateur tradition alongside its professional one, and those amateur traditions are where regional variation, family recipes and low-stakes experiment live. Sake lost that layer in a single legislative stroke, and has spent the century since being made only by people whose livelihoods depend on it — which is a different thing from being made by people who love it, though the two often overlap.",
          ja:"その代価は述べやすく、量りがたい。日本の他のいかなる醗酵の食も、玄人の伝えのかたわらに素人の伝えを保った。地方の差、家の作り方、低い賭けの試みが住まうのは、その素人の伝えのなかである。酒はその層を、一つの立法の一撃で失い、以後の一世紀を、それに生計を負う者のみによって造られて過ごした。それは、それを愛する者によって造られることとは別のことである。両者はしばしば重なるとはいえ。",
          zh:"代價容易陳述，卻難以掂量。日本其他每一種發酵食品，都在專業傳統之外保留了一條業餘傳統，而地方差異、家族配方與低風險的實驗，正住在那條業餘傳統裡。清酒在一次立法揮擊之中失去了那一層，並在其後的一個世紀裡，只由那些生計仰賴它的人來釀造——那和由熱愛它的人來釀造是兩回事，儘管兩者常有重疊。" } }
      ] },

    { t:"section", id:"mitsuzo",
      title:{ en:"A century of illegal brewing", ja:"密造の一世紀", zh:"私釀的一個世紀" }, jp:"密造酒",
      body:[
        { t:"p", text:{
          en:"A law does not end a practice; it moves it. Through the first half of the twentieth century, home brewing continued across rural Japan under the name mitsuzō — secret brewing — with tax inspectors making seasonal rounds and villages developing an unlovely expertise in hiding tanks. In the Tōhoku snow country in particular, doburoku never really stopped; it simply stopped being spoken about to outsiders.",
          ja:"法は営みを終わらせはせぬ。動かすのみである。二十世紀の前半を通じ、家での醸造は密造——ひそかに醸すこと——の名のもとに日本の村々で続き、税の役人は季ごとに巡り、村は槽を隠す美しからぬ熟練を育てた。とりわけ東北の雪の国において、どぶろくは実のところ絶えなかった。ただ、外の者に語られなくなっただけである。",
          zh:"法律不會終結一項實踐，它只會把它挪個位置。整個二十世紀前半，家釀在日本鄉間以「密造」——祕密釀造——之名延續著，稅務人員按季巡查，而村落發展出一套不怎麼優美的藏槽本領。尤其在東北的雪國，濁酒其實從未真正停過；它只是不再對外人提起而已。" } },

        { t:"p", text:{
          en:"The postwar years were worse and stranger. Rice was rationed and legal sake was scarce, diluted and often terrible, so an enormous black market in improvised alcohol appeared: kasutori distilled from lees, and bakudan — \"bomb\" — made from industrial or methylated alcohol. People were blinded and people died. Those deaths are part of why the ban is still defended today, even though they were caused by the absence of legal drink rather than by home brewing as such.",
          ja:"戦後の年はより悪く、より奇であった。米は配給され、合法の酒は乏しく、薄められ、しばしばひどかった。ゆえに間に合わせの酒精の巨大な闇の市が現れた。粕から蒸したカストリと、工業用あるいは変性の酒精から造られたバクダン——爆弾——である。人は目を失い、人は死んだ。それらの死は、今日なおこの禁が擁護される理由の一部である。もっとも、それらを引き起こしたのは、家での醸造そのものというよりは、合法の酒の欠如であったのだが。",
          zh:"戰後那些年更糟，也更離奇。米實施配給，合法的清酒稀少、被稀釋、而且往往難喝，於是一個龐大的臨時酒精黑市出現了：用酒粕蒸餾的「粕取」，以及用工業或變性酒精做的「炸彈」。有人失明，有人死亡。那些死亡至今仍是這道禁令被辯護的理由之一——儘管造成它們的是合法酒的匱乏，而非家釀本身。" } },

        { t:"note", label:{ en:"A distinction worth holding", ja:"保つに値する区別", zh:"值得守住的區別" },
          text:{
            en:"Fermenting rice at home cannot produce methanol poisoning. Distilling badly, or drinking industrial alcohol, can. The two were conflated in the postwar panic and have stayed conflated in the public argument ever since, which does the honest side of the debate no favours.",
            ja:"家で米を醗酵させることは、メタノールの中毒を生みえない。拙く蒸すこと、あるいは工業の酒精を飲むことは生みうる。両者は戦後の恐慌のなかで混ぜられ、以来ずっと公の議論のなかで混ぜられたままである。それは議論の誠実な側を利さない。",
            zh:"在家發酵米不可能造成甲醇中毒。拙劣的蒸餾，或飲用工業酒精，則可能。這兩者在戰後的恐慌中被混為一談，此後在公共辯論中也一直混為一談——這對辯論中誠實的那一方毫無幫助。" } }
      ] },

    { t:"section", id:"trial",
      title:{ en:"The doburoku trial", ja:"どぶろく裁判", zh:"濁酒訴訟" }, jp:"最判平成元年",
      body:[
        { t:"p", text:{
          en:"In the 1980s a man named Maeda Toshihiko decided to test the law directly. He brewed doburoku for his own consumption, said so publicly, and was prosecuted under the Liquor Tax Act, which requires a manufacturing licence from the tax office for anyone producing alcohol. His defence was constitutional: that Article 13 of the Constitution — the right to the pursuit of happiness — protects a person's freedom to make and drink their own rice wine, and that a licence requirement enforced by criminal penalty is a disproportionate intrusion into private life.",
          ja:"一九八〇年代、前田俊彦という人が、法を直に試そうと決めた。彼は自ら飲むためにどぶろくを醸し、それを公に述べ、そして酒税法のもとに起訴された。同法は、酒を造るいかなる者にも税務署の製造の免許を求める。彼の弁は憲法上のものであった。憲法第十三条——幸福を追求する権利——は、人が自らの米の酒を造り飲む自由を守るのであり、刑罰をもって行われる免許の求めは、私の生への釣り合わぬ立ち入りである、と。",
          zh:"一九八〇年代，一位名叫前田俊彥的人決定直接挑戰法律。他為自己飲用而釀了濁酒，公開承認，並依《酒稅法》遭到起訴——該法要求任何製造酒類的人都必須取得稅務署的製造許可。他的辯護是憲法層次的：憲法第十三條——追求幸福的權利——保障一個人製作並飲用自己的米酒的自由，而以刑罰為後盾的許可要求，是對私人生活不成比例的侵入。" } },

        { t:"timeline", items:[
          { year:"1899", era:{ en:"Meiji 32", ja:"明治三十二年", zh:"明治三十二年" }, eraJp:"明治",
            title:{ en:"Home brewing abolished", ja:"自家用酒の廃止", zh:"自用釀酒遭廢止" }, jp:"自家用酒廃止",
            text:{ en:"The exemption for brewing for one's own consumption is removed. From this point, making any alcoholic drink without a licence is an offence.",
              ja:"自ら飲むために醸すことの除外が取り除かれる。この時より、免許を得ずしていかなる酒を造ることも罪となる。",
              zh:"為自己飲用而釀造的除外規定被取消。自此，未經許可製造任何酒類皆屬違法。" } },
          { year:"1986.3", era:{ en:"District court", ja:"地裁", zh:"地方法院" }, eraJp:"千葉地裁",
            title:{ en:"Guilty, ¥300,000", ja:"有罪、三十万円", zh:"有罪，三十萬圓" }, jp:"一審判決",
            text:{ en:"The Chiba District Court convicts and imposes a fine. The constitutional argument is rejected at first instance.",
              ja:"千葉地方裁判所が有罪とし、罰金を科す。憲法上の弁は一審において退けられる。",
              zh:"千葉地方法院判決有罪並科處罰金。憲法上的辯護在一審遭到駁回。" } },
          { year:"1986.9", era:{ en:"High court", ja:"高裁", zh:"高等法院" }, eraJp:"東京高裁",
            title:{ en:"Appeal dismissed", ja:"控訴棄却", zh:"上訴駁回" }, jp:"二審判決",
            text:{ en:"The Tokyo High Court upholds the conviction.",
              ja:"東京高等裁判所が有罪を維持する。",
              zh:"東京高等法院維持原判。" } },
          { year:"1989.12.14", era:{ en:"Supreme Court", ja:"最高裁", zh:"最高法院" }, eraJp:"最高裁判所",
            title:{ en:"The licence requirement is constitutional", ja:"免許制は合憲", zh:"許可制合憲" }, jp:"上告棄却",
            text:{ en:"The Supreme Court dismisses the appeal. Its reasoning is narrow and revealing: securing liquor tax revenue is an important fiscal purpose; a licence requirement is a means the legislature was entitled to choose; the restriction on personal brewing does not exceed the bounds of legislative discretion and is not clearly unreasonable. The court does not say that home brewing is harmful. It says that the tax matters more.",
              ja:"最高裁判所が上告を棄却する。その理由は狭く、そして多くを明かす。酒税の収入を確保することは重要な財政の目的である。免許制は立法者が選びうる手段である。自家醸造への制限は立法の裁量の枠を超えず、明らかに不合理でもない。裁判所は自家醸造が有害であるとは言っていない。税のほうが重いと言っているのである。",
              zh:"最高法院駁回上訴。其理由狹窄，卻極具啟示：確保酒稅收入是重要的財政目的；許可制是立法者有權選擇的手段；對個人釀造的限制未逾越立法裁量的範圍，也並非顯然不合理。法院並未說家釀有害。它說的是：稅更重要。" } }
        ] },

        { t:"quote",
          text:{ en:"The ruling is often summarised as \"you may not brew because it is dangerous\". It says nothing of the kind. It says you may not brew because the state has decided it needs the money, and that this is a decision the courts will not second-guess.",
            ja:"この判決はしばしば「危ういゆえに醸してはならぬ」と要約される。判決はそのようなことを何ら述べていない。国が金を要すると決めたゆえに醸してはならぬ、そしてそれは裁判所が問い直さぬ決定である、と述べているのである。",
            zh:"這份判決常被摘要成「因為危險，所以不准釀」。它完全沒有那樣說。它說的是：因為國家決定它需要這筆錢，所以不准釀；而這是法院不會去二次質疑的決定。" },
          cite:{ en:"On the reasoning of 14 December 1989", ja:"平成元年十二月十四日の理由について", zh:"關於一九八九年十二月十四日的理由" } }
      ] },

{ t:"section", id:"today",
      title:{ en:"What the law says now", ja:"今の法が述べること", zh:"法律現在怎麼說" }, jp:"現行法",
      body:[
        { t:"p", text:{
          en:"The rule is simple and absolute: producing an alcoholic drink requires a manufacturing licence, granted per premises and per category of liquor, and manufacturing without one is a criminal offence carrying up to ten years' imprisonment or a fine of up to one million yen, alongside recovery of the unpaid tax. There is no personal-use exemption, no small-quantity threshold, and no distinction between a demijohn in a kitchen and a commercial tank.",
          ja:"掟は単純であり、絶対である。酒を造るには製造の免許を要し、それは製造場ごと、酒類の区分ごとに与えられる。免許なくして造ることは罪であり、十年以下の懲役あるいは百万円以下の罰金に処せられ、あわせて未納の税が徴される。自家用の除外はなく、少量の閾もなく、台所の甕と商いの槽との間に区別はない。",
          zh:"規則簡單而絕對：製造酒類需要製造許可，該許可依製造場所與酒類類別分別核發；未經許可而製造是刑事犯罪，可處十年以下有期徒刑或一百萬日圓以下罰金，並追繳未納稅款。沒有自用除外規定，沒有少量門檻，廚房裡的一只甕與商業酒槽之間也不作區分。" } },

        { t:"p", text:{
          en:"There is a second barrier behind the first, and for anyone hoping to go legitimately small it is the harder one. A licence carries a minimum annual production quantity — sixty kilolitres a year for seishu, which is roughly eighty-three thousand 720 ml bottles. A licence to make a hundred bottles a year does not exist. Add to that the tax authority's long-standing refusal, on supply-and-demand grounds, to issue new seishu licences for the domestic market, and the practical position is that the only way into brewing sake in Japan is to buy a company that already holds a licence.",
          ja:"第一の壁の背後に第二の壁があり、正しく小さく始めたいと願う者にとっては、そちらのほうが厳しい。免許には最低の製造数量が付され、清酒については年に六十キロリットル——七百二十ミリリットルの瓶にしておよそ八万三千本である。年に百本を造る免許は存在しない。そこへ、需給の調整を理由として国内向けの新たな清酒の免許を長く与えぬという税務当局の姿勢が加わる。実際のところ、日本で酒を醸す道は、すでに免許をもつ会社を買うことのみである。",
          zh:"第一道門檻背後還有第二道，而對任何想要合法地做小規模的人來說，那一道更難。許可附帶最低年產量——清酒為每年六十公秉，約合八萬三千支七百二十毫升的瓶。「一年釀一百瓶」的許可並不存在。再加上稅務當局長期以供需調節為由，不對國內市場核發新的清酒製造許可，實際狀況便是：在日本要釀清酒，唯一的路是買下一家已經持有許可的公司。" } },

        { t:"h3", text:{ en:"The one thing you may make", ja:"造ることを許された唯一のもの", zh:"唯一被允許做的東西" }, id:"umeshu" },

        { t:"p", text:{
          en:"Japanese law does allow one kind of home production, and it is a narrow, carefully drawn window: infusing a tax-paid spirit of at least twenty per cent alcohol with fruit or other flavourings, for consumption by the maker and the people they live with. This is what makes home-made umeshu — plum liqueur, made every June in an enormous number of Japanese households — entirely legal.",
          ja:"日本の法は一種の家での製造を許しており、それは狭く、注意深く引かれた窓である。すなわち、税を納めた二十度以上の酒類に果実その他の香りのものを漬け込むことを、造る者とその同居の家族が飲むために許す。日本のおびただしい数の家で毎年六月に営まれる自家製の梅酒が、まったく合法である理由がこれである。",
          zh:"日本法律確實允許一種家庭製作，而那是一扇狹窄、劃得很仔細的窗：把已完稅、酒精度二十度以上的酒類，浸泡水果或其他增味物，供製作者與同住家人飲用。這正是為什麼在日本無數家庭裡每年六月都會做的自製梅酒，完全合法。" } },

        { t:"defs", items:[
          { term:{ en:"Twenty per cent, and tax already paid", ja:"二十度以上、かつ課税済み", zh:"二十度以上，且已完稅" }, jp:"二十度以上",
            def:{ en:"The base spirit must be at or above 20% alcohol, which is why white liquor — a neutral shōchū sold in Japan specifically for this purpose — dominates the shelves in early summer. It is also why you may not steep plums in sake or in wine: both sit below the line, and the sugar you add could restart a fermentation.",
              ja:"漬け込む酒は二十度以上でなければならず、ゆえにホワイトリカー——まさにこの用のために日本で売られる中性の焼酎——が初夏の棚を占める。清酒や葡萄酒に梅を漬けてはならぬ理由もこれである。いずれも線の下にあり、加えた糖が醗酵を再び始めさせうる。",
              zh:"基酒必須在二十度以上，這正是為什麼「白酒（ホワイトリカー）」——一種在日本專為此用途販售的中性燒酎——會在初夏占滿貨架。這也是為什麼你不可以用清酒或葡萄酒泡梅子：兩者都在那條線以下，而你加進去的糖可能會讓發酵重新開始。" } },
          { term:{ en:"The forbidden ingredient list", ja:"禁じられた材料の表", zh:"被禁止的材料清單" }, jp:"禁止材料",
            def:{ en:"Rice, wheat, barley, millet, maize, sorghum, grapes, wild grapes and starch may not be added. The logic runs through the whole scheme: every item on that list is a fermentable that could push the mixture past the one per cent of newly created alcohol at which the law says you have manufactured a liquor rather than flavoured one. Plums, apricots, citrus peel, ginger, herbs and sugar are all fine.",
              ja:"米、麦、粟、玉蜀黍、高粱、黍、葡萄、山葡萄、澱粉を加えてはならぬ。理屈はこの仕組み全体を貫いている。その表のいずれの品も、混ぜたものを、新たに生じた酒精の百分の一という線の向こうへ押しやりうる醗酵性のものである。その線を越えれば、法は、あなたは酒に香りをつけたのではなく酒を造ったのだと言う。梅、杏、柑橘の皮、生姜、香草、砂糖はいずれも差し支えない。",
              zh:"不得添加米、麥、粟、玉米、高粱、黍、葡萄、山葡萄與澱粉。這套邏輯貫穿整個制度：清單上的每一項都是可發酵物，都可能把混合物推過「新生成酒精百分之一」那條線；越過那條線，法律就會說你不是替酒調味，而是製造了酒。梅、杏、柑橘皮、薑、香草與砂糖則都沒有問題。" } },
          { term:{ en:"For your household only", ja:"自家のためにのみ", zh:"僅供自家" }, jp:"自家消費",
            def:{ en:"The exemption covers consumption by the maker and cohabiting family. Selling it is manufacture for sale and squarely illegal; giving a jar to a neighbour is generally treated as within the spirit of the rule, since nothing is sold. A restaurant infusing its own umeshu to serve to customers needs a licence, and there is a specific one for exactly that situation.",
              ja:"この除外が覆うのは、造る者と同居の家族の飲用である。これを売ることは販売のための製造であり、明白に違法である。隣人に一瓶を分けることは、何も売られていないゆえ、おおむね掟の趣旨の内と扱われる。自ら漬けた梅酒を客に供する料理屋は免許を要し、まさにその場合のための免許が別に設けられている。",
              zh:"這項除外涵蓋的是製作者與同住家人的飲用。販售它就是為販賣而製造，明確違法；分一瓶給鄰居一般被視為在規則的精神之內，因為什麼都沒有賣。若餐廳要浸泡自己的梅酒供應給客人，則需要許可，而確實有一種許可正是為這種情形設立的。" } }
        ] }
      ] },

    { t:"section", id:"tokku",
      title:{ en:"The doburoku special zones", ja:"どぶろく特区", zh:"濁酒特區" }, jp:"構造改革特区",
      body:[
        { t:"p", text:{
          en:"In 2002 Japan created structural reform special zones — a mechanism for suspending a national regulation inside a designated municipality, as an experiment. One of the earliest and most popular uses of it was the doburoku zone, and it is the only crack that has opened in the wall since 1899.",
          ja:"二〇〇二年、日本は構造改革特別区域を設けた。定められた市町村の内において国の規制を止める、試みとしての仕組みである。その最も早く、最も好まれた用いられ方の一つがどぶろく特区であり、それは一八九九年以来この壁に開いた唯一の裂け目である。",
          zh:"二〇〇二年，日本設立了「構造改革特別區域」——一種在指定市町村範圍內暫停某項全國性法規、以作為實驗的機制。它最早、也最受歡迎的用途之一，就是濁酒特區；而那是一八九九年以來這道牆上開出的唯一裂縫。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"A municipality applies", ja:"市町村が申請する", zh:"市町村提出申請" }, jp:"特区認定",
            text:{ en:"A local authority applies to be designated, usually as part of a rural tourism or agricultural revitalisation plan. Hundreds of zones now exist, concentrated in the mountains and the snow country where farm inns are the tourism product.",
              ja:"自治体が、たいていは農村の観光あるいは農業の再興の計の一部として、指定を申請する。今や数百の区域が存し、農家の宿が観光の品である山と雪の国に集まっている。",
              zh:"地方政府提出指定申請，通常是作為鄉村觀光或農業振興計畫的一部分。如今已有數百個特區存在，集中在以農家民宿為觀光產品的山區與雪國。" } },
          { n:"2", title:{ en:"You must be a farmer", ja:"農業者でなければならぬ", zh:"你必須是農民" }, jp:"特定農業者",
            text:{ en:"The licence is available only to a tokutei nōgyōsha — a farmer working land in the designated municipality, or a co-resident family member, or a member of a production cooperative. The rice must be their own.",
              ja:"免許は特定農業者にのみ与えられる。すなわち、指定された市町村において土地を耕す農業者、その同居の親族、あるいは生産の組合の一員である。米は自らのものでなければならぬ。",
              zh:"許可只發給「特定農業者」——在指定市町村耕作土地的農民、其同住親屬，或生產合作社的成員。米必須是他們自己種的。" } },
          { n:"3", title:{ en:"And you must run an inn or a restaurant", ja:"かつ宿か食事処を営まねばならぬ", zh:"而且你必須經營民宿或餐廳" }, jp:"農家民宿",
            text:{ en:"The applicant has to be operating a farm guesthouse or a farm restaurant, and the doburoku may only be served there, to people who have come to the premises. It cannot be bottled and shipped. The scheme is designed to bring visitors to a village, not to create a new drinks business.",
              ja:"申請者は農家の民宿あるいは農家の食事処を営んでいなければならず、どぶろくはそこでのみ、その場に来た人に供されうる。瓶に詰めて送ることはできぬ。この仕組みは、新たな酒の商いを生むためではなく、村に人を呼ぶために設けられている。",
              zh:"申請者必須正在經營農家民宿或農家餐廳，而濁酒只能在那裡、供應給親自前來的人。它不能裝瓶出貨。這套制度的設計目的是把訪客帶進村子，而不是創造一門新的酒生意。" } },
          { n:"4", title:{ en:"The minimum quantity is waived", ja:"最低数量が外される", zh:"最低數量被免除" }, jp:"数量基準の不適用",
            text:{ en:"This is the whole mechanism. The sixty-kilolitre floor simply does not apply inside the zone, so a farmer can hold a real licence and make a few hundred litres a year. Everything else — record-keeping, the tax return, inspection — still applies in full.",
              ja:"仕組みの全てはここにある。六十キロリットルの床は区域の内では単に適用されず、ゆえに農業者は真の免許をもって、年に数百リットルを造りうる。他のすべて——帳簿、申告、検査——はなお完全に適用される。",
              zh:"整套機制的關鍵就在這裡。六十公秉的門檻在特區內單純不予適用，因此農民可以持有一張真正的許可，一年釀個幾百公升。其他一切——帳簿、申報、查核——仍然完整適用。" } }
        ] },

        { t:"p", text:{
          en:"What the zones have produced is worth being clear about. They have not liberalised home brewing: a zone doburoku maker holds a licence, files a tax return and is inspected like any other producer. What they have done is prove that a licence can be issued at a scale of hundreds of litres without the sky falling, and they have given several hundred villages a reason for a traveller to stay the night. For anyone interested in tasting genuinely farmhouse-scale sake, the zones are the only legal route in Japan.",
          ja:"この区域が生んだものについては、はっきりさせておく値打ちがある。それは家での醸造を自由にしたのではない。区域のどぶろくの造り手は免許をもち、申告を行い、他のいかなる造り手とも同じく検査される。それが成し遂げたのは、数百リットルの規模で免許が与えられても天は落ちぬと証したことであり、そして数百の村に、旅人が一夜を過ごす理由を与えたことである。真に農家の規模の酒を味わいたいと願う者にとって、この区域は日本における唯一の合法の道である。",
          zh:"這些特區產生了什麼，值得說清楚。它們並沒有把家釀自由化：特區裡的濁酒製造者持有許可、申報稅務，並像任何其他生產者一樣接受查核。它們所做到的，是證明了以數百公升的規模核發許可並不會天塌下來，並且給了數百個村莊一個讓旅人留宿一晚的理由。對任何想品嘗真正農家規模清酒的人來說，這些特區是日本境內唯一的合法途徑。" } }
      ] },

    { t:"section", id:"world",
      title:{ en:"How everyone else answered", ja:"他の国はいかに答えたか", zh:"別人是怎麼回答的" }, jp:"各国の扱い",
      body:[
        { t:"p", text:{
          en:"Japan's position is unusual among wealthy countries, and the contrast is sharpest with the places whose own drinking cultures were rebuilt from the amateur end. The figures below are not strictly comparable — they cover different drinks, different units and different bases — but the shape of the difference is real.",
          ja:"日本の立ち位置は豊かな国々のなかで異例であり、その対比は、自らの飲みの文化を素人の側から建て直した場所において最も鋭い。以下の数は厳密に比べうるものではなく——覆う酒も、単位も、基準も異なる——が、差の形は実である。",
          zh:"日本的立場在富裕國家中相當特殊，而這種對比在那些從業餘端重建自身飲酒文化的地方最為鮮明。以下數字並不能嚴格互相比較——它們涵蓋不同的酒種、不同的單位、不同的基準——但這個差異的形狀是真實的。" } },

        { t:"figure",
          caption:{
            en:"Roughly how much alcohol a private person may legally make at home for their own use, per year. The categories are not identical from country to country; read the shape, not the decimal.",
            ja:"私人が自ら飲むために、家で合法に造りうる酒の量のおおよそ。年あたり。区分は国ごとに同一ではない。小数ではなく形を読まれたい。",
            zh:"私人為自用而能在家中合法製造的酒量大致有多少，以年計。各國的類別並不相同；請讀它的形狀，而非小數點。" },
          svg: function (lang, L) {
            var W = 700, H = 300, X = 250, RIGHT = W - 96, TOP = 34;
            var rows = [
              { n:{ en:"United Kingdom", ja:"英国", zh:"英國" }, v:-1,
                d:{ en:"beer & wine, no limit, since 1963", ja:"ビールと葡萄酒、上限なし、一九六三年より", zh:"啤酒與葡萄酒，無上限，自一九六三年起" } },
              { n:{ en:"United States", ja:"合衆国", zh:"美國" }, v:757,
                d:{ en:"200 US gal per household, federal, 1978", ja:"一世帯二百ガロン、連邦法、一九七八年", zh:"每戶二百加侖，聯邦法，一九七八年" } },
              { n:{ en:"Germany", ja:"ドイツ", zh:"德國" }, v:200,
                d:{ en:"200 L of beer, duty-free, on notification", ja:"ビール二百リットル、届出により免税", zh:"啤酒二百公升，申報後免稅" } },
              { n:{ en:"Taiwan", ja:"台湾", zh:"臺灣" }, v:100,
                d:{ en:"100 L per household, own use, no sale", ja:"一世帯百リットル、自用、販売不可", zh:"每戶一百公升，自用，不得販售" } },
              { n:{ en:"Japan", ja:"日本", zh:"日本" }, v:0,
                d:{ en:"none — infusions of taxed spirit only", ja:"なし——課税済みの酒への漬け込みのみ", zh:"零——僅限浸泡已完稅的酒" } }
            ];
            var max = 757;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], y = TOP + i * 50;
              s += '<text x="2" y="' + (y + 13) + '" font-size="12.5" fill="#201E1B">' + L(r.n) + '</text>';
              s += '<text x="2" y="' + (y + 29) + '" font-size="9.5" fill="#8B857C">' + L(r.d) + '</text>';
              if (r.v < 0) {
                s += '<rect x="' + X + '" y="' + (y + 2) + '" width="' + (RIGHT - X) + '" height="15" fill="#A08F73"/>';
                s += '<path d="M' + RIGHT + ' ' + (y + 2) + ' L' + (RIGHT + 18) + ' ' + (y + 9.5) + ' L' + RIGHT + ' ' + (y + 17) + ' Z" fill="#A08F73"/>';
                s += '<text x="' + (RIGHT + 24) + '" y="' + (y + 14) + '" font-size="10.5" fill="#55504A">' +
                     (lang === "ja" ? "上限なし" : lang === "zh" ? "無上限" : "no cap") + '</text>';
              } else if (r.v === 0) {
                s += '<line x1="' + X + '" y1="' + (y + 9.5) + '" x2="' + (X + 16) + '" y2="' + (y + 9.5) + '" stroke="#B4AC9C" stroke-width="2"/>';
                s += '<text x="' + (X + 24) + '" y="' + (y + 14) + '" font-size="10.5" fill="#55504A">0 L</text>';
              } else {
                var w = (r.v / max) * (RIGHT - X);
                s += '<rect x="' + X + '" y="' + (y + 2) + '" width="' + w + '" height="15" fill="#C9BCA2"/>';
                s += '<text x="' + (X + w + 9) + '" y="' + (y + 14) + '" font-size="10.5" fill="#55504A">' + r.v + ' L</text>';
              }
            }
            s += '<line x1="' + X + '" y1="' + (TOP - 8) + '" x2="' + X + '" y2="' + (TOP + rows.length * 50 - 16) + '" stroke="#CDC6B9"/>';
            s += '<text x="' + X + '" y="' + (H - 16) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "いずれも蒸留は別扱いであり、たいてい禁じられているか、別の免許を要する。"
                  : lang === "zh" ? "各國的蒸餾都另行處理，通常遭禁或需另一種許可。"
                  : "Distilling is treated separately everywhere, and is usually banned or separately licensed.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"United Kingdom, 1963", ja:"英国、一九六三年", zh:"英國，一九六三年" }, jp:"英国",
            def:{ en:"The requirement to hold a licence for home brewing was abolished, and beer and wine made at home for personal use became free of both licence and duty. The modern British home-brewing hobby, and a good deal of the craft brewing industry that grew out of it, dates from that repeal.",
              ja:"家での醸造に免許を要するとの定めが廃され、自ら飲むために家で造るビールと葡萄酒は、免許からも税からも自由となった。今日の英国の自家醸造の趣味と、そこから育った地ビールの産業のかなりの部分は、この撤廃に始まる。",
              zh:"家釀需持有執照的規定被廢除，為自用而在家製作的啤酒與葡萄酒同時免除執照與稅捐。現代英國的家釀嗜好，以及由此長出的相當一部分精釀產業，都始於這次廢止。" } },
          { term:{ en:"United States, 1978", ja:"合衆国、一九七八年", zh:"美國，一九七八年" }, jp:"合衆国",
            def:{ en:"Home brewing of beer had remained federally illegal for forty-five years after the repeal of Prohibition, apparently through a drafting oversight. A 1978 statute fixed it, with a cap of one hundred gallons per adult and two hundred per household. Distilling stayed illegal. The American craft-beer industry that followed is the single strongest piece of evidence that amateurs feed professionals.",
              ja:"家でのビールの醸造は、禁酒法の撤廃ののちも四十五年にわたり連邦法のもとで違法であり続けた。どうやら条文の書き落としによる。一九七八年の法がそれを直し、成人一人あたり百ガロン、一世帯二百ガロンの上限が置かれた。蒸留は違法のままである。それに続いた合衆国の地ビールの産業は、素人が玄人を養うという最も強い証しである。",
              zh:"在禁酒令廢除之後，家釀啤酒在聯邦法下仍違法了四十五年，顯然是條文漏寫所致。一九七八年的法律修正了它，設定每位成年人一百加侖、每戶二百加侖的上限。蒸餾仍屬違法。隨之而來的美國精釀啤酒產業，是「業餘者餵養專業者」這件事最有力的一項證據。" } },
          { term:{ en:"Taiwan, 100 litres", ja:"台湾、百リットル", zh:"臺灣，一百公升" }, jp:"台湾",
            def:{ en:"Under the Tobacco and Alcohol Administration Act, producing unlicensed liquor is an offence — but where it is for the maker's own use and the quantity does not exceed one hundred litres per household, finished and unfinished combined, no penalty applies. Sale remains prohibited absolutely. It is a quietly pragmatic settlement: the state keeps its monopoly on the trade and declines to police the kitchen.",
              ja:"菸酒管理法のもと、免許なくして酒を造ることは罪である。だが、それが造る者自身の用のためであり、量が完成品と半製品を合わせて一世帯百リットルを超えぬときは、罰は科されない。販売は絶対に禁じられたままである。静かに実際的な収まりである。国は商いの独占を保ち、台所を取り締まることを控える。",
              zh:"依《菸酒管理法》，未經許可產製酒類屬違法——但若係供產製者自用，且成品與半成品合計每戶未逾一百公升，則不罰。販售仍絕對禁止。這是一個安靜而務實的安排：國家保住它對這門生意的管制，同時放棄去管廚房。" } }
        ] }
      ] },

    { t:"section", id:"argument",
      title:{ en:"The argument, fairly put", ja:"議論を公平に置く", zh:"公平地陳述這場爭論" }, jp:"賛否",
      body:[
        { t:"compare", cols:2, items:[
          { title:{ en:"For keeping the ban", ja:"禁を保つ側", zh:"支持維持禁令的一方" }, jp:"存続論",
            body:[
              { t:"ul", plain:true, items:[
                { en:"Liquor tax is levied at the point of manufacture, so any legal home production requires either a new collection mechanism or an accepted revenue loss. Neither is trivial for a tax that still raises well over a trillion yen a year.",
                  ja:"酒税は製造の時点で課されるゆえ、いかなる合法の自家製造も、新たな徴収の仕組みか、あるいは受け入れられた歳入の失いかを要する。年に一兆円をはるかに超えてなお挙げる税にとって、いずれも些細ではない。",
                  zh:"酒稅在製造環節課徵，因此任何合法的家庭製造都需要一套新的徵收機制，或是被接受的稅收損失。對一項每年仍徵收遠超過一兆日圓的稅來說，兩者都不是小事。" },
                { en:"An enforcement line that admits no exceptions is cheap to police. A line at, say, one hundred litres requires someone to measure, and the measuring is where the cost and the argument would live.",
                  ja:"例外を認めぬ執行の線は、取り締まるに安い。たとえば百リットルという線は、誰かが測ることを要し、費用と争いはその測ることのなかに住まうこととなる。",
                  zh:"一條不容例外的執法界線，管起來很便宜。一條畫在比方說一百公升的界線，則需要有人去量，而成本與爭議就會住在「量」這件事裡。" },
                { en:"Licensed producers have built businesses on the current structure. A meaningful liberalisation would be a change to the competitive landscape for the many small breweries that are already struggling.",
                  ja:"免許をもつ造り手は、今の構えの上に商いを築いてきた。意味ある自由化は、すでに苦しむ多くの小さな蔵にとって、競いの地形の変化となろう。",
                  zh:"持照生產者是在現行結構上建立起自己的事業的。一次有意義的自由化，對許多已經在苦撐的小酒藏而言，將是競爭地貌的改變。" }
              ] }
            ] },
          { title:{ en:"For relaxing it", ja:"緩める側", zh:"支持放寬的一方" }, jp:"緩和論",
            body:[
              { t:"ul", plain:true, items:[
                { en:"The revenue argument has weakened enormously. Liquor tax was around a third of national tax revenue in 1900 and is a low single-digit percentage today, while sake itself is a small and shrinking part of that.",
                  ja:"歳入の論はきわめて弱まった。酒税は一九〇〇年には国税収入のおよそ三分の一であったが、今日では一桁の低い百分率であり、そのなかで清酒はさらに小さく、縮みつつある部分である。",
                  zh:"稅收論據已大幅削弱。酒稅在一九〇〇年約占國稅收入的三分之一，今日則是個位數的低百分比，而清酒在其中又只是一小塊、且正在縮小的部分。" },
                { en:"Every other country that legalised amateur brewing saw its professional sector grow, not shrink. Amateurs become customers, then evangelists, then in a small number of cases founders — which is precisely the pipeline sake does not have.",
                  ja:"素人の醸造を合法とした他のいずれの国も、玄人の領域が縮むのではなく育つのを見た。素人は客となり、次いで語り手となり、少数の場合には創業者となる。それこそ、日本酒が持たぬ流れである。",
                  zh:"每一個把業餘釀造合法化的國家，都看見其專業部門成長而非萎縮。業餘者先成為顧客，然後成為傳道者，少數情況下成為創業者——而那正是清酒所缺的那條輸送帶。" },
                { en:"The doburoku zones have already run the experiment at small scale for two decades without incident, which makes the safety case harder to argue with a straight face.",
                  ja:"どぶろく特区は、すでに二十年にわたり小さな規模でその試みを、事故なく走らせてきた。それは安全の論を、真顔で述べることを難しくする。",
                  zh:"濁酒特區已經以小規模跑了二十年這場實驗且未出事，這讓「安全」的論據很難板著臉說出口。" },
                { en:"Japan's food culture treats home fermentation as ordinary knowledge. A generation that has never seen rice ferment has lost something that is not measured in tax receipts.",
                  ja:"日本の食の文化は、家での醗酵を当たり前の知として扱う。米が醗酵するのを一度も見たことのない世代は、税の受領書では測られぬ何かを失っている。",
                  zh:"日本的飲食文化把家庭發酵視為尋常知識。一個從未見過米發酵的世代，失去了某種無法用稅收單據衡量的東西。" }
              ] }
            ] }
        ] },

        { t:"p", text:{
          en:"There is no live legislative proposal to change any of this, and there has not been one for some time. The doburoku zones remain the settlement: a controlled, geographically bounded, agriculturally justified exception that lets a few hundred farmers do legally what their great-grandparents did without thinking about it.",
          ja:"これらのいずれかを変えようという生きた立法の提案はなく、しばらくのあいだ存在していない。どぶろく特区が収まりのままである。すなわち、制され、地理に区切られ、農をもって正当とされる例外であり、数百の農業者に、その曾祖父母が何も考えずに行っていたことを合法に行わせるものである。",
          zh:"目前並沒有任何現行的立法提案要改變這一切，而且已經有一段時間沒有了。濁酒特區仍是那個折衷方案：一個受控的、有地理界線的、以農業為正當理由的例外，讓數百位農民得以合法地做他們的曾祖父母想都不用想就在做的事。" } },

        { t:"tiny", text:{
          en:"Related: <a href=\"standards.html\">Law &amp; Standards</a> for the licence framework in full, <a href=\"styles.html\">Styles &amp; Types</a> for what doburoku actually is, <a href=\"history.html\">History</a> for the Meiji tax reforms, <a href=\"kojifamily.html\">The Kōji Family</a> for the ferments you may legally make in your kitchen tomorrow.",
          ja:"関連——免許の枠組みの全ては<a href=\"standards.html\">法令と基準</a>、どぶろくが実際に何であるかは<a href=\"styles.html\">酒質と種類</a>、明治の税の改めは<a href=\"history.html\">歴史</a>、明日にも台所で合法に造りうる醗酵は<a href=\"kojifamily.html\">麹の一族</a>。",
          zh:"相關：完整的許可架構見<a href=\"standards.html\">法規與標準</a>；濁酒究竟是什麼見<a href=\"styles.html\">酒質與種類</a>；明治稅制改革見<a href=\"history.html\">歷史</a>；明天就能在你廚房裡合法製作的發酵物見<a href=\"kojifamily.html\">麴的家族</a>。" } }
      ] },

    { t:"related", items:[
      { href:"standards.html", why:{ en:"The law, stated plainly, before anything else.", ja:"何よりも先に、法を率直に述べたもの。", zh:"在其他一切之前，把法律直白說清楚。" } },
      { href:"process.html", why:{ en:"What you would be attempting, step by step.", ja:"何を試みることになるのかを、段ごとに。", zh:"你將要嘗試的，是哪些步驟。" } },
      { href:"kojifamily.html", why:{ en:"The kōji you would need, and where it comes from.", ja:"要する麹と、その出どころ。", zh:"你會需要的麴，以及它從哪裡來。" } },
      { href:"faults.html", why:{ en:"What goes wrong, and how to recognise it early.", ja:"何が損なわれ、それを早く見分ける方法。", zh:"會出什麼錯，以及如何及早辨認。" } }
    ] }
  ]
};

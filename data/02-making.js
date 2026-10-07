/* =============================================================
   THE BOOK OF SAKE — Making
   15 page modules, concatenated. Each page is one
   SAKE.pages["key"] assignment; the order here is the order
   they appear in the navigation.
   ============================================================= */


/* ---- ----------------------------------------- ingredients */
SAKE.pages["ingredients"] = {
  kicker: { en: "Making · 01", ja: "造り · 01", zh: "釀造 · 01" },
  title:  { en: "Rice & Water", ja: "米と水", zh: "米與水" },
  jp: "酒米 · 仕込み水",
  lede: {
    en: "By weight, a finished bottle of sake is about four-fifths water. Across the whole process — washing, soaking, steaming, mashing, dilution, cleaning — a brewery uses something on the order of twenty to thirty times the weight of its rice in water. Rice supplies the structure and the flavour; water supplies the medium, the minerals that drive fermentation, and, through what it lacks, the clarity. These are the two variables a brewery cannot change quickly, and they are the reason sake has regional character at all.",
    ja: "完成した一本の日本酒は、重量にしておよそ五分の四が水である。洗米・浸漬・蒸き・仕込み・割水・洗浄を含む全工程では、米の重量の二十倍から三十倍ほどの水を用いる。米は骨格と味を与え、水は媒質と、発酵を駆動するミネラルと、そして「含まないもの」によって清澄さを与える。この二つは蔵が容易には変えられない変数であり、日本酒に地域性が存在する理由そのものである。",
    zh: "以重量計，一瓶成品日本酒約有五分之四是水。綜觀洗米、浸漬、蒸米、仕込、割水與清洗的全部流程，酒藏所用的水約為米重的二十至三十倍。米提供骨架與風味；水提供介質、驅動發酵的礦物質，並藉由它所「不含」之物提供澄澈。這兩者是酒藏無法迅速更換的變數，也正是日本酒之所以具有地域性格的原因。"
  },
  body: [
    { t:"section", id:"sakamai",
      title:{ en:"Why sake rice is not table rice", ja:"酒米が食用米でない理由", zh:"酒米為何不是食用米" }, jp:"酒造好適米",
      body:[
        { t:"p", text:{
          en:"Rice bred for eating is bred to be delicious on its own: sticky, sweet, protein-rich, small-grained. Almost every one of those qualities is a defect in a brewing tank. Rice bred for sake — <em>shuzō-kōtekimai</em>, “rice well-suited to brewing” — inverts them. Around 120 varieties are officially recognised; four of them account for most of the crop.",
          ja:"食用に育てられた米は、それ自体が旨いことを目指す——粘り、甘み、たんぱく質に富み、粒は小さい。そのほとんどすべての性質が、仕込みタンクのなかでは欠点となる。酒のために育てられた米、すなわち酒造好適米は、これらを反転させる。公認品種は約百二十を数えるが、作付の大半は四品種が占める。",
          zh:"為食用而育成的米，目標是本身好吃：黏、甜、富含蛋白質、粒小。這些特質幾乎每一項在發酵槽中都是缺陷。為釀酒而育成的米——酒造好適米，「適於釀造之米」——則將它們一一反轉。官方認定的品種約有一百二十種，但作付量大半集中於四種。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Large grain",ja:"大粒",zh:"大粒"}, jp:"千粒重 26–29 g",
            d:{en:"Table rice runs about 20–22 g per thousand grains; sake rice 26–29 g. A big grain survives being milled to 35% without shattering, and gives the mill more outer layer to remove before it reaches the core.",ja:"食用米は千粒重おおむね20〜22g、酒米は26〜29g。粒が大きければ精米歩合35%まで削っても砕けにくく、心白に達するまでに削るべき外層も厚い。",zh:"食用米千粒重約 20–22 克，酒米則為 26–29 克。大粒在削至 35% 時較不易碎裂，且在觸及心白之前有更厚的外層可供削除。"} },
          { h:{en:"A chalky core",ja:"心白",zh:"心白"}, jp:"心白 · shinpaku",
            d:{en:"An opaque white centre where starch granules are loosely packed with air between them. Steam and kōji hyphae travel into it; a translucent, tightly-packed grain resists both. The shape matters: line-type, dot-type and eye-type cores behave differently under milling and in the kōji room.",ja:"デンプン粒が疎に詰まり、あいだに空隙をもつ白く不透明な中心部。蒸気も麹菌の菌糸もここへ入り込む。透明で緻密な粒はいずれも寄せつけない。形状も重要で、線状・点状・眼状の心白は精米時にも製麹時にも挙動が異なる。",zh:"澱粉粒疏鬆堆積、其間帶有空隙的白色不透明中心。蒸氣與麴菌菌絲皆可深入其中；透明而緻密的米粒則兩者皆難進入。形狀亦有影響：線狀、點狀與眼狀心白在精米與製麴時的表現各不相同。"} },
          { h:{en:"Low protein and lipid",ja:"低たんぱく・低脂質",zh:"低蛋白、低脂質"}, jp:"たんぱく質・脂質",
            d:{en:"Protein becomes amino acids, and past a certain point amino acids read as heaviness and bitterness rather than umami. Lipids suppress the very aroma compounds ginjō brewing is trying to produce. Both concentrate in the outer layers, which is the whole argument for milling.",ja:"たんぱく質はアミノ酸となるが、一定量を超えるとうま味ではなく重さや苦みとして現れる。脂質は、吟醸造りが生み出そうとしている香気成分そのものを抑制する。いずれも外層に集中しており、これが精米の全論拠である。",zh:"蛋白質會轉為胺基酸，超過一定量後便不再是旨味，而讀作厚重與苦澀。脂質則會壓抑吟釀造法正努力生成的那些香氣成分。兩者皆集中於外層——這正是精米的全部理由。"} },
          { h:{en:"Absorbs water readily, dissolves readily",ja:"吸水と溶解のよさ",zh:"吸水與溶解性佳"}, jp:"吸水性・溶解性",
            d:{en:"The grain must take up water fast and evenly during a soak that may be timed to the second, then steam to a texture the brewers describe as <em>gaikō-nainan</em> — firm outside, soft inside — and then dissolve on schedule in the mash. A grain that dissolves too fast makes a heavy, sweet, unbalanced sake.",ja:"米は、秒単位で計られることもある浸漬のあいだに速く均一に吸水し、蒸き上がりは蔵人のいう「外硬内軟」となり、そして醪のなかで予定どおりに溶けなければならない。溶けが速すぎる米は、重く甘く均衡を欠いた酒になる。",zh:"米須在可能以秒計時的浸漬中迅速而均勻地吸水，蒸出藏人所謂「外硬內軟」的質地，並在醪中按預定進度溶解。溶解過快的米，會釀出厚重、甜膩而失衡的酒。"} },
          { h:{en:"Tall, late, difficult",ja:"背が高く、晩生で、作りにくい",zh:"高稈、晚熟、難種"}, jp:"倒伏・晩生",
            d:{en:"Sake rice plants grow tall and ripen late, so they lodge in wind and rain and are harvested in the typhoon window. Yields are lower than table rice and the work is harder — which is why sakamai commands a premium and why the best plots are contracted years ahead.",ja:"酒米は草丈が高く晩生であるため、風雨で倒伏し、台風期に収穫を迎える。収量は食用米より低く、作業は重い。酒米が高値で取引され、優良な圃場が何年も先まで契約で押さえられるのはこのためである。",zh:"酒米植株高、成熟晚，因而在風雨中易倒伏，且收穫期正逢颱風季。產量低於食用米，工作卻更繁重——這正是酒米價格較高、優良田區往往提前數年即被契作鎖定的原因。"} },
          { h:{en:"Never eaten",ja:"食べない米",zh:"不作食用"}, jp:"食味",
            d:{en:"Cook a bowl of Yamada Nishiki and it is watery, bland and disappointing. The qualities that make it the king of sake rice make it poor food. This is the clearest single proof that sake rice is a purpose-built industrial crop, not a luxury version of dinner.",ja:"山田錦を炊けば、水っぽく、味気なく、期待外れである。酒米の王たらしめる性質が、そのまま食べ物としての難点になる。酒米が贅沢な食卓の米ではなく、目的のために設計された作物であることの、最も明快な証左である。",zh:"把山田錦煮成飯，水水的、寡味、令人失望。使它成為酒米之王的那些特質，恰恰讓它成為劣質的食物。這是酒米並非「高級版餐桌米」、而是為特定目的設計之作物的最明確證明。"} }
        ] },
        { t:"figure",
          caption:{ en:"A cross-section of a sake rice grain. Protein and lipid concentrate towards the surface; the chalky shinpaku sits at the centre. Milling removes the outer bands in order — and the numbers on the right are what a designation is measuring.",
                    ja:"酒米の断面。たんぱく質と脂質は表層に向かって集中し、白く粗な心白は中心にある。精米は外側の帯から順に削り取る。右の数値は、特定名称が測っているものそのものである。",
                    zh:"酒米粒的斷面。蛋白質與脂質向表層集中，粗鬆的心白位於中心。精米自外側依序削去各層——右側的數值，正是特定名稱所衡量的對象。" },
          svg: function(lang, L){
            var w = {
              hull:{en:"hull & bran removed first",ja:"糠層——最初に削られる",zh:"糠層——最先削去"},
              prot:{en:"protein · lipid · minerals · vitamins",ja:"たんぱく質・脂質・ミネラル・ビタミン",zh:"蛋白質・脂質・礦物質・維生素"},
              starch:{en:"starch endosperm",ja:"デンプン胚乳",zh:"澱粉胚乳"},
              core:{en:"shinpaku",ja:"心白",zh:"心白"},
              a:{en:"90% — futsūshu",ja:"90% — 普通酒",zh:"90% — 普通酒"},
              b:{en:"70% — honjōzō",ja:"70% — 本醸造",zh:"70% — 本釀造"},
              c:{en:"60% — ginjō",ja:"60% — 吟醸",zh:"60% — 吟釀"},
              d:{en:"50% — daiginjō",ja:"50% — 大吟醸",zh:"50% — 大吟釀"},
              e:{en:"35% and below",ja:"35%以下",zh:"35% 以下"}
            };
            function t(k){ return L(w[k]); }
            var rings = [
              [150,"#E4E0D6"],[128,"#EDEAE2"],[108,"#F0EDE4"],[88,"#F5F3ED"],[64,"#FBFAF7"]
            ];
            var s = '<svg viewBox="0 0 760 340" role="img" aria-label="Rice grain cross-section">';
            s += '<ellipse cx="200" cy="170" rx="150" ry="112" fill="#E4E0D6" stroke="#B4AC9C"/>';
            s += '<ellipse cx="200" cy="170" rx="128" ry="95" fill="#EDEAE2" stroke="#CDC6B9"/>';
            s += '<ellipse cx="200" cy="170" rx="106" ry="79" fill="#F0EDE4" stroke="#CDC6B9"/>';
            s += '<ellipse cx="200" cy="170" rx="84" ry="62" fill="#F7F5F0" stroke="#CDC6B9"/>';
            s += '<ellipse cx="200" cy="170" rx="46" ry="34" fill="#FFFFFF" stroke="#B4AC9C" stroke-dasharray="3 3"/>';
            s += '<text x="200" y="175" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#55504A">'+t("core")+'</text>';
            var ys = [58,96,134,172,210,248];
            var labs = ["hull","prot","starch"];
            s += '<line x1="200" y1="58" x2="200" y2="282" stroke="#B4AC9C" stroke-width="0.75" stroke-dasharray="2 3"/>';
            var marks = [["a",150],["b",128],["c",106],["d",84],["e",46]];
            for (var i=0;i<marks.length;i++){
              var key = marks[i][0], rx = marks[i][1], y = 66 + i*38;
              s += '<line x1="'+(200+rx)+'" y1="170" x2="430" y2="'+y+'" stroke="#CDC6B9" stroke-width="0.75"/>';
              s += '<circle cx="'+(200+rx)+'" cy="170" r="2.5" fill="#7C6B52"/>';
              s += '<text x="438" y="'+(y+4)+'" font-family="system-ui,sans-serif" font-size="12" fill="#201E1B">'+t(key)+'</text>';
            }
            s += '<text x="34" y="30" font-family="Georgia,serif" font-size="13" fill="#55504A" letter-spacing="2">'+
                 (lang==="en"?"SEIMAI-BUAI · WHAT REMAINS":(lang==="ja"?"精米歩合——残るもの":"精米步合——所剩之物"))+'</text>';
            s += '<text x="34" y="316" font-family="system-ui,sans-serif" font-size="11" fill="#8B857C">'+t("prot")+'</text>';
            s += '</svg>';
            return s;
          }
        }
      ]
    },

    { t:"section", id:"grain",
      title:{ en:"Inside the grain", ja:"粒の内側", zh:"米粒的內部" }, jp:"心白と成分",
      body:[
        { t:"p", text:{
          en:"A grain of rice is not uniform. Starch sits at the centre, protein and fat towards the outside, and in a sake rice there is a further structure — an opaque white core where the starch is packed loosely enough to scatter light. Almost every decision on this page follows from where those three things sit.",
          ja:"米の粒は一様ではない。澱粉は中心に、蛋白質と脂質は外側に寄り、そして酒米にはもう一つの構造がある。澱粉が緩く詰まり、光を散らすほどになった白く不透明な芯である。この頁のほとんどあらゆる判断は、その三つがどこに座しているかから導かれる。",
          zh:"一粒米並不均勻。澱粉集中在中心，蛋白質與脂質偏向外側，而在酒米中還多了一層構造——一個不透明的白色核心，那裡的澱粉排列鬆散到足以散射光線。本頁幾乎每一個決定，都源自這三者所在的位置。" } },
        { t:"table",
          caption:{ en:"Shapes of shinpaku, and what each implies", ja:"心白の形と、それぞれが含意するもの", zh:"心白的形狀，以及各自的意涵" },
          cols:[{ en:"Type", ja:"型", zh:"類型" }, { en:"Kanji", ja:"漢字", zh:"漢字" }, { en:"Shape", ja:"形", zh:"形狀" }, { en:"What it does in the brewery", ja:"蔵での働き", zh:"在酒藏中的作用" }],
          jpCols:[1], keyCol:0,
          rows:[
            [{ en:"Linear", ja:"線状", zh:"線狀" }, "線状心白", { en:"A thin line along the grain's axis", ja:"粒の軸に沿った細い線", zh:"沿米粒軸線的一條細線" },
             { en:"Small and central, so the grain survives hard polishing without cracking. Yamada Nishiki's type, and a large part of why it can be taken to 35% and below.", ja:"小さく中心にあり、ゆえに粒は高い精米に割れず耐える。山田錦の型であり、三十五パーセント以下まで削りうる理由の大きな部分である。", zh:"小而居中，因此米粒能承受高度精磨而不裂。這是山田錦的類型，也是它能被磨到 35% 以下的重要原因。" }],
            [{ en:"Eye", ja:"眼状", zh:"眼狀" }, "眼状心白", { en:"A round spot at the centre", ja:"中心の丸い点", zh:"中心的一個圓點" },
             { en:"Generous and visible, giving water a clear path inward and dissolving readily. Omachi's type — which is also why an Omachi mash needs restraining rather than encouraging.", ja:"豊かで目に見え、水に内へ向かう明らかな道を与え、容易に溶ける。雄町の型であり、それはまた、雄町の醪が励ますより抑えることを要する理由でもある。", zh:"寬大而顯眼，為水提供一條明確的向內通道，且容易溶解。這是雄町的類型——這也正是雄町的醪需要被抑制而非鼓勵的原因。" }],
            [{ en:"Belly-white", ja:"腹白", zh:"腹白" }, "腹白", { en:"White towards one flank rather than the centre", ja:"中心ではなく片方の腹に寄った白", zh:"白色偏向一側腹部而非中心" },
             { en:"Off-centre, so hard polishing exposes and then removes it. Common in table rice grown in a poor year, and generally unwanted.", ja:"中心を外れているため、高い精米はそれを露わにし、やがて削り去る。不作の年の飯米に多く、おおむね望まれない。", zh:"偏離中心，因此高度精磨會先讓它外露、繼而被削掉。常見於歉收年份的飯米，一般不受歡迎。" }],
            [{ en:"Dotted", ja:"点状", zh:"點狀" }, "点状", { en:"Scattered small opacities", ja:"散らばった小さな白濁", zh:"散布的小白斑" },
             { en:"Inconsistent between grains, which makes soaking times unreliable. Tolerated in ordinary-grade brewing and avoided at the top.", ja:"粒ごとに揃わず、それが浸漬の時間を頼りなくする。普通酒の造りでは許され、頂においては避けられる。", zh:"粒與粒之間不一致，使浸漬時間難以掌握。在普通酒的釀造中可以容忍，在頂級酒中則會避免。" }]
          ] },
        { t:"grid", cols:3, cells:[
          { k:{ en:"Grain weight", ja:"千粒重", zh:"千粒重" }, jp:"千粒重",
            v:{ en:"25–30 g", ja:"二十五〜三十グラム", zh:"25–30 公克" },
            d:{ en:"Sake rice grains are large — the weight of a thousand brown-rice grains runs around 26 to 30 g against roughly 22 for table rice. Large grains survive polishing better because the ratio of surface to centre is more forgiving, and because the shinpaku can sit further from the edge.",
              ja:"酒米の粒は大きい。玄米千粒の重さは、飯米のおよそ二十二に対して二十六から三十グラムのあたりを走る。大きな粒は精米によく耐える。表と中心の比がより寛容であり、心白が縁からより遠くに座しうるからである。",
              zh:"酒米的米粒偏大——一千粒糙米的重量約在 26 至 30 公克之間，而飯米約為 22 公克。大粒米更能承受精磨，因為表面與中心的比例較為寬容，且心白能位在離邊緣更遠的地方。" } },
          { k:{ en:"Protein", ja:"蛋白質", zh:"蛋白質" }, jp:"蛋白質",
            v:{ en:"Low is better", ja:"低いほど良い", zh:"越低越好" },
            d:{ en:"Protein becomes amino acids in the mash, and amino acids become savoury weight and, past a point, coarseness and colour. Brewers aiming at a clean ginjō want brown rice under roughly 6.5% protein and will reject a lot that tests higher. Nitrogen fertiliser raises protein, which is why sake rice contracts specify how the field is fed.",
              ja:"蛋白質は醪においてアミノ酸となり、アミノ酸は旨みの重みとなり、ある点を越えれば粗さと色となる。清らかな吟醸を目指す造り手は玄米のおよそ六・五パーセント未満の蛋白質を望み、それを超える荷は退ける。窒素の肥は蛋白質を上げる。酒米の契約が田の養い方を定める理由である。",
              zh:"蛋白質在醪中會轉為胺基酸，而胺基酸帶來鮮味的厚度，超過某個界線後則變成粗糙感與顏色。追求乾淨吟釀的釀造者，希望糙米蛋白質低於約 6.5%，並會退掉檢測值更高的批次。氮肥會拉高蛋白質——這正是酒米契約會規定田地如何施肥的原因。" } },
          { k:{ en:"Fat", ja:"脂質", zh:"脂質" }, jp:"脂質",
            v:{ en:"Removed early", ja:"早くに削られる", zh:"很早就被削去" },
            d:{ en:"Lipids sit in the outer layers and suppress the formation of the fruity esters that define ginjō aroma. They are almost entirely gone by 60% polishing, which is the real reason the ginjō threshold sits where it does — the number is not arbitrary, it is where the fat runs out.",
              ja:"脂質は外の層に座し、吟醸の香りを定める果実のエステルの生成を抑える。六十パーセントの精米でほぼ全て失われ、それこそ吟醸の閾がそこにある本当の理由である。この数は恣意ではなく、脂の尽きる場所である。",
              zh:"脂質位於外層，並會抑制界定吟釀香氣的果香酯類生成。精磨到 60% 時它們幾乎已完全消失——這才是吟釀門檻設在此處的真正理由：這個數字並非任意，而是脂質耗盡的位置。" } },
          { k:{ en:"Water uptake", ja:"吸水性", zh:"吸水性" }, jp:"吸水性",
            v:{ en:"Fast and even", ja:"速く均一に", zh:"快速且均勻" },
            d:{ en:"A good sake rice takes water quickly and stops taking it predictably, so a soaking time can be set to the second. A grain that absorbs unevenly steams unevenly and dissolves unevenly five weeks later.",
              ja:"良い酒米は水を速く取り、読みうるかたちで取ることをやめる。ゆえに浸漬の時間を秒に定めうる。むらに吸う粒はむらに蒸され、五週の後にむらに溶ける。",
              zh:"好的酒米吸水快，而且會以可預測的方式停止吸水，因此浸漬時間能精確到秒。吸水不均的米，蒸得不均，五週後也溶得不均。" } },
          { k:{ en:"Cracking", ja:"胴割れ", zh:"胴裂" }, jp:"胴割れ",
            v:{ en:"The invisible defect", ja:"見えぬ欠点", zh:"看不見的缺陷" },
            d:{ en:"A grain dried too fast after harvest develops internal fractures that are invisible until it shatters in the mill or takes on water in seconds rather than a minute. Drying temperature at the farm therefore matters as much as anything the brewery does.",
              ja:"収穫の後に速く乾かしすぎた粒は、精米機で砕けるか、一分でなく数秒で水を吸うまで見えぬ内の割れを生じる。ゆえに農家における乾燥の温度は、蔵のなすいずれとも同じだけ重い。",
              zh:"收穫後乾燥過快的米粒會產生內部裂痕，直到它在精米機中碎裂、或在幾秒而非一分鐘內就吸飽水之前都看不出來。因此農家的乾燥溫度，與酒藏所做的任何一件事同樣重要。" } },
          { k:{ en:"Inspection grade", ja:"検査等級", zh:"檢查等級" }, jp:"等級",
            v:{ en:"3rd or better", ja:"三等以上", zh:"三等以上" },
            d:{ en:"Rice for sale is graded under the agricultural inspection law: 特上, 特等, 一等, 二等, 三等 and 規格外, on appearance, moisture, foreign matter and broken grains. Sake may only be labelled with one of the eight special designations if it is made from rice inspected at grade three or better — a legal hook that ties the whole premium category to a farm-gate inspection most drinkers have never heard of.",
              ja:"売られる米は農産物検査法の下で等級される。見え、水分、異物、砕粒により、特上・特等・一等・二等・三等・規格外に分かれる。清酒が八つの特定名称のいずれかを名乗りうるのは、三等以上に検査された米で造られた場合のみである。高級の区分の全体を、飲み手のほとんどが聞いたこともない農の検査に結び付ける法の掛け金である。",
              zh:"待售的米依農產物檢查法分級：依外觀、水分、雜質與碎粒，分為特上、特等、一等、二等、三等與規格外。清酒唯有以檢查達三等以上的米所釀，才可標示八種特定名稱之一——這是一個法律上的掛鉤，把整個高級酒類別繫在一場多數飲者從未聽聞的產地檢查上。" } }
        ] }
      ] },

    { t:"section", id:"farming",
      title:{ en:"Growing it", ja:"育てること", zh:"種植它" }, jp:"栽培と契約",
      body:[
        { t:"p", text:{
          en:"Sake rice is a worse crop than table rice by every measure a farmer cares about, and it is grown anyway because breweries pay a premium and sign long contracts. Understanding why it is worse explains most of what happens to the supply.",
          ja:"酒米は、農家の気にかけるあらゆる尺度において飯米より劣る作物であり、それでも育てられるのは、蔵が高い値を払い長い契約を結ぶからである。なぜ劣るのかを解することが、供給に起きることのほとんどを説き明かす。",
          zh:"以農民在意的每一項指標來看，酒米都是比飯米更差的作物；它之所以仍被種植，是因為酒藏出得起溢價、並簽下長期契約。理解它「為何較差」，就能解釋供給端所發生的大部分事情。" } },
        { t:"ul", items:[
          { en:"<strong>It falls over.</strong> Yamada Nishiki grows to around 1.2 metres and Omachi to more than 1.5. Tall stalks lodge in wind and heavy rain, and a lodged crop is harder to harvest and worth less. Modern table varieties were bred short for exactly this reason; sake varieties were not, because height came with the grain size and the loose starch that make them useful.",
            ja:"<strong>倒れる。</strong>山田錦は一・二メートルほどに、雄町は一・五を越えて伸びる。丈高い茎は風と豪雨に倒れ、倒れた作は刈りにくく、値も落ちる。現代の飯米の品種はまさにこの理由で短く育てられた。酒米はそうされなかった。丈は、それらを有用にする粒の大きさと緩い澱粉とともに来たからである。",
            zh:"<strong>它會倒。</strong>山田錦可長到約一點二公尺，雄町超過一點五公尺。高稈在強風與豪雨中會倒伏，而倒伏的作物既難收割、價值也較低。現代飯米品種正是為此被育成矮稈；酒米則沒有，因為稈高與「讓它們有用」的大粒與鬆散澱粉是一起來的。" },
          { en:"<strong>It ripens late.</strong> Late maturity means a longer exposure to typhoons and to an autumn that may turn wet, and it pushes the harvest against the deadline of the brewing season that starts immediately afterwards.",
            ja:"<strong>実りが遅い。</strong>晩生であることは、台風と、濡れうる秋への長い曝しを意味し、そして刈り入れを、直後に始まる酒造りの季節の締切へと押しつける。",
            zh:"<strong>它成熟得晚。</strong>晚熟意味著更長時間暴露在颱風與可能轉濕的秋天之下，並把收割時間逼向緊接其後就要開始的釀造季的期限。" },
          { en:"<strong>It yields less.</strong> Fewer kilograms per hectare than a modern table variety, and the grower is asked on top of that to keep nitrogen down, which lowers yield again. The premium has to cover both gaps before a farmer is even level.",
            ja:"<strong>収量が少ない。</strong>現代の飯米の品種よりヘクタール当たりの重さが少なく、その上に窒素を抑えるよう求められ、それがさらに収量を下げる。高い値は、農家が並ぶより前に、この二つの隔たりを埋めねばならない。",
            zh:"<strong>它的產量較低。</strong>每公頃公斤數少於現代飯米品種，而在此之上還被要求控制氮肥，於是產量再降一次。溢價必須先填平這兩道缺口，農民才勉強打平。" },
          { en:"<strong>It cannot be eaten.</strong> Sake rice cooks poorly — low stickiness, coarse texture — so there is no fallback market. If the brewery does not take it, it is animal feed. That asymmetry is the reason the contract, not the price, is the thing farmers negotiate hardest.",
            ja:"<strong>食べられない。</strong>酒米は炊いて旨くない。粘りが乏しく、口当たりが粗い。ゆえに逃げ道の市場がない。蔵が引き取らなければ、それは飼料である。その非対称こそ、農家が最も強く交渉するのが値ではなく契約である理由である。",
            zh:"<strong>它不能吃。</strong>酒米煮飯不好吃——黏性低、口感粗——因此沒有退路市場。若酒藏不收，它就成了飼料。這種不對稱，正是農民談判時最用力爭取的是「契約」而非「價格」的原因。" }
        ] },
        { t:"defs", items:[
          { term:{ en:"Contract growing", ja:"契約栽培", zh:"契作" }, jp:"契約栽培", romaji:"keiyaku saibai",
            def:{ en:"A brewery contracts a named grower or a village co-operative for a fixed tonnage of a named variety from named fields, usually with agreed limits on fertiliser and often with brewery staff present at planting and harvest. It solves the farmer's market risk and the brewery's quality risk in one document, and it is why a bottle can name the district its rice came from.",
              ja:"蔵は、名のある生産者か村の組合と、名のある田から名のある品種を定めた重さで契約する。たいてい肥への取り決めがあり、しばしば蔵の者が田植えと刈り入れに立ち会う。農家の市場の危うさと蔵の品質の危うさを一つの書面で解くものであり、瓶がその米の来た地区の名を記しうる理由である。",
              zh:"酒藏與具名的生產者或村落合作社簽約，就指定田區、指定品種、指定噸數達成協議，通常附帶施肥的約定，並常有酒藏人員在插秧與收割時到場。它以一份文件同時解決農民的市場風險與酒藏的品質風險，也是一瓶酒能標明其米來自哪個地區的原因。" } },
          { term:{ en:"The special-A districts", ja:"特A地区", zh:"特 A 地區" }, jp:"特A地区", romaji:"toku-A chiku",
            def:{ en:"Hyōgo grades its Yamada Nishiki land, and the top tier — a small number of villages in the Miki and Katō area, on heavy clay over a particular geology, in valleys with a wide day-to-night temperature swing — commands prices far above ordinary Yamada Nishiki. It is the closest thing Japanese sake has to a classified vineyard, and the same villages have been supplying the same Nada houses for generations under the <em>murakome</em> system.",
              ja:"兵庫は自らの山田錦の土地を等級し、その最上の層——特定の地質の上の重い粘土に、昼夜の温度差の大きい谷にある、三木と加東のあたりの少数の村——は、並の山田錦をはるかに超える値を得る。日本酒が持つ、格付けされた葡萄畑に最も近いものであり、同じ村が村米の仕組みのもと、代を重ねて同じ灘の家に供してきた。",
              zh:"兵庫縣為自家的山田錦產地分級，而最頂層——位於特定地質之上的重黏土、日夜溫差大的谷地中、三木與加東一帶的少數幾個村落——的價格遠高於一般山田錦。這是日本清酒最接近「分級葡萄園」的東西，而在「村米」制度下，同樣的村落已為同樣的灘之酒藏供米數個世代。" } },
          { term:{ en:"Who is left to grow it", ja:"誰が育て続けるのか", zh:"還有誰在種" }, jp:"担い手", romaji:"ninaite",
            def:{ en:"The average Japanese farmer is now well past sixty, and the tall, lodging-prone, late-ripening, hand-attentive crop is the first thing an ageing grower gives up. Breweries have responded by buying land, by employing farmers directly, by sending brewery staff into the fields, and in a few cases by farming the whole supply themselves. The rice question has quietly become a labour question.",
              ja:"日本の農家の平均の齢は今や六十をよく越えており、丈高く、倒れやすく、晩生で、手のかかる作は、齢を重ねた生産者が最初に手放すものである。蔵はこれに、田を買うこと、農家を直に雇うこと、蔵人を田へ送ること、そしていくつかの場合には供給の全体を自ら耕すことで応じてきた。米の問いは、静かに人手の問いとなった。",
              zh:"日本農民的平均年齡如今已遠超過六十歲，而高稈、易倒伏、晚熟、需要人手照料的作物，是年邁生產者最先放棄的東西。酒藏的回應是：買地、直接僱用農民、把藏人派進田裡，少數情況下甚至自行耕種全部所需。米的問題，已悄悄變成人力的問題。" } }
        ] }
      ] },

    { t:"section", id:"milling",
      title:{ en:"Milling", ja:"精米", zh:"精米" }, jp:"精米",
      body:[
        { t:"p", text:{
          en:"Milling is the slowest step in sake brewing and one of the least visible. A daiginjō polish to 35% can take two to three days of continuous grinding for a single batch of rice, because the mill must be run gently enough that friction does not heat and crack the grain. Modern vertical mills hold the rice against a rotating abrasive roller, removing surface in fractions of a percent at a time and pausing to let heat dissipate.",
          ja:"精米は日本酒造りで最も時間のかかる工程であり、最も目に触れない工程の一つでもある。精米歩合35%の大吟醸用の一仕込み分を削るのに、連続で二日から三日を要することがある。摩擦熱で米が割れないよう、機械を穏やかに回す必要があるからだ。現代の竪型精米機は、回転する砥石に米を当て、コンマ数パーセント単位で表面を削り、熱を逃がすために間を置く。",
          zh:"精米是釀造流程中最耗時、也最不為人所見的步驟之一。將一批米削至精米步合 35% 的大吟釀等級，可能需要連續研磨兩到三天，因為機器必須運轉得夠溫和，以免摩擦生熱使米粒龜裂。現代立式精米機將米壓向旋轉的磨石，一次僅削去零點幾個百分點，並停頓散熱。" } },
        { t:"steps", items:[
          { title:{en:"Shape of the polish",ja:"精米の形",zh:"精米的形狀"}, jp:"原形精米 / 扁平精米 / 球形精米",
            text:{en:"A rice grain is not spherical, so grinding it evenly produces a ball long before it produces a clean core. <em>Genkei-seimai</em> — “original-shape milling” — grinds along the grain's own proportions, so that at 40% the grain is a small ellipse rather than a sphere, and the milled-away material is the part that was actually on the outside. Flat milling and spherical milling are the alternatives, and each gives a measurably different composition at the same nominal ratio.",
                  ja:"米粒は球ではないから、均等に削れば、心白が露わになるはるか手前で球になってしまう。原形精米は粒本来の比率に沿って削るため、精米歩合40%でも球ではなく小さな楕円が残り、削り取られたのは実際に外側にあった部分となる。扁平精米・球形精米はその代替であり、同じ数値でも組成は測定できるほど異なる。",
                  zh:"米粒並非球形，若均勻研磨，早在露出心白之前就會磨成一顆球。原形精米沿著米粒本身的比例研磨，因此在 40% 時留下的是小橢圓而非球體，被削去的正是原本位於外側的部分。扁平精米與球形精米則是替代作法；在相同的名目數值下，三者的成分組成有可測量的差異。"} },
          { title:{en:"Resting the rice",ja:"枯らし",zh:"枯燒（靜置）"}, jp:"枯らし", romaji:"karashi",
            meta:{en:"2–4 weeks",ja:"二〜四週間",zh:"二至四週"},
            text:{en:"Freshly milled rice is hot and abnormally dry — moisture has been driven off at the surface while the interior is still damp, leaving the grain internally stressed and liable to crack on contact with water. It is left in sacks or silos for two to four weeks until moisture equalises at around 13–14%. Skipping this step ruins the soak.",
                  ja:"精米直後の米は熱をもち、異常に乾いている。表層の水分だけが飛んで内部は湿ったままであり、粒の内部に応力が残って、水に触れると割れやすい。袋やサイロで二〜四週間置き、水分が13〜14%程度で均一化するのを待つ。この工程を飛ばすと浸漬が破綻する。",
                  zh:"剛精好的米又熱又異常乾燥——表層水分被逼出，內部仍濕，米粒內部殘留應力，一遇水便易裂。因此裝袋或入倉靜置二至四週，待水分均勻至約 13–14%。省略此步驟，浸漬必然失敗。"} },
          { title:{en:"What the number does not tell you",ja:"数値が語らないこと",zh:"數值未曾說明之事"}, jp:"精米歩合の限界",
            text:{en:"Two sakes at 50% may have been milled on different machines, in different shapes, from different varieties with different core geometry. The ratio is a useful, honest, comparable number — and it is a proxy for a much messier set of realities. A 60% Omachi and a 60% Yamada Nishiki are not the same raw material in any meaningful sense.",
                  ja:"同じ精米歩合50%の二本の酒でも、機械が違い、削り方の形が違い、心白の形状が異なる品種であるかもしれない。この数値は有用で正直で比較可能である——と同時に、はるかに雑然とした現実の代理指標にすぎない。精米歩合60%の雄町と60%の山田錦は、意味のあるどの水準においても同じ原料ではない。",
                  zh:"同為 50% 的兩款酒，可能出自不同機器、以不同形狀研磨、來自心白幾何形狀不同的品種。這個數值有用、誠實且可比較——但它同時只是一組遠為紛雜的現實的代理指標。60% 的雄町與 60% 的山田錦，在任何有意義的層面上都不是相同的原料。"} }
        ] },
        { t:"h3", text:{ en:"The machine, and what it throws away", ja:"機械と、それが捨てるもの", zh:"機器，以及它丟掉的東西" } },
        { t:"defs", items:[
          { term:{ en:"The vertical mill", ja:"竪型精米機", zh:"立式精米機" }, jp:"竪型精米機", romaji:"tategata seimaiki",
            def:{ en:"Before the 1930s rice was polished by water wheel and by horizontal abrasive rollers, which could not go far past 80% without shattering the grain. The vertical friction mill — grains circulating against a rotating carborundum roller inside a fine screen — made deep polishing possible, and the ginjō category as we understand it dates from that machine rather than from any change in taste. It works slowly on purpose: a batch to 35% runs for two to three days, and the limit is heat.",
              ja:"一九三〇年代より前、米は水車と横型の砥石で磨かれ、粒を砕かずに八割をよく越えることはできなかった。竪型の摩擦式の精米機——細かな網の内で回る金剛砂の轆轤に粒を巡らせるもの——が深い精米を可能にし、我々の解する吟醸の区分は、味の変化からではなくこの機械から始まる。それは意図して遅く働く。三十五パーセントまでの一荷は二日から三日を走り、限りとなるのは熱である。",
              zh:"一九三〇年代之前，米靠水車與臥式磨輥精磨，若不打碎米粒就難以推進到 80% 以下。立式摩擦精米機——讓米粒在細篩網內繞著旋轉的金剛砂輥循環——使深度精磨成為可能，而我們今日所理解的吟釀類別，是源自這台機器，而非源自任何口味的改變。它是刻意慢的：一批磨到 35% 要跑上兩到三天，而限制因素是熱。" } },
          { term:{ en:"Flat and shaped polishing", ja:"扁平精米と原形精米", zh:"扁平精米與原形精米" }, jp:"扁平精米・原形精米", romaji:"henpei seimai, genkei seimai",
            def:{ en:"A plain round polish takes a sphere out of an oval grain, so by the time the ends are clean the middle has lost far more than it needed to. Modern computer-controlled mills instead remove material to follow the grain's own shape — flat polishing, or shape-preserving polishing — which strips the protein and fat at the surface while leaving more of the starch core intact. The practical effect is that a 60% shaped polish can behave like a 50% round one, and a brewery quoting a low number is no longer necessarily doing the most work.",
              ja:"素直な丸い精米は、楕円の粒から球を取る。ゆえに端が清らかになる頃には、中央は要した以上をはるかに失っている。現代の計算機に制した精米機は代わりに、粒自身の形に沿って削る——扁平精米、あるいは原形精米である。表の蛋白質と脂質を剥ぎ、澱粉の芯をより多く残す。実際の効きとして、六十パーセントの原形精米は五十パーセントの丸い精米のように振る舞いうる。低い数を掲げる蔵が、必ずしも最も多く働いているとは限らなくなった。",
              zh:"單純的圓形精磨，是從橢圓形的米粒中削出一個球體；因此當兩端磨乾淨時，中段已經損失了遠超過所需的量。現代的電腦控制精米機改為順著米粒自身的形狀削除——即扁平精米或原形精米——它剝去表面的蛋白質與脂質，同時保留更多完整的澱粉核心。實際效果是：60% 的原形精米可以表現得像 50% 的圓形精米，而標示低數字的酒藏，未必就是做了最多工的那一家。" } },
          { term:{ en:"The dust is a product", ja:"糠も産である", zh:"米糠也是產品" }, jp:"白糠", romaji:"shironuka",
            def:{ en:"What comes off is collected in fractions as the polish deepens: the first and coarsest, red bran, carries the germ and the oil and goes to feed and to oil pressing; the middle fraction goes to rice crackers, miso and shochu; the last and whitest, taken from close to the core, is nearly pure starch and is sold as rice flour for confectionery. A brewery polishing to 35% sells roughly two thirds of every grain it buys. That resale is a real part of why deep polishing is affordable at all.",
              ja:"削り出されたものは、精米が深まるにつれ画に分けて集められる。最初の粗いもの、赤糠は胚芽と油を負い、飼料と搾油へ向かう。中の画は煎餅、味噌、焼酎へ。最後の最も白いもの、芯の近くから取られたものはほぼ純粋な澱粉であり、菓子のための米粉として売られる。三十五パーセントまで磨く蔵は、買った粒のおよそ三分の二を売っている。その転売は、深い精米がそもそも成り立つ理由の実際の一部である。",
              zh:"被削下來的東西會隨著精磨加深、分餾收集：最初也最粗的「赤糠」帶著胚芽與油脂，送去做飼料與榨油；中段的部分送往米果、味噌與燒酎；最後、最白、取自靠近核心處的那一部分幾乎是純澱粉，作為製菓用米粉出售。一家精磨到 35% 的酒藏，等於把買進的每一粒米賣掉了約三分之二。這筆轉售，實實在在是深度精磨得以負擔得起的原因之一。" } },
          { term:{ en:"Two numbers that look alike", ja:"似て見える二つの数", zh:"兩個長得很像的數字" }, jp:"精米歩合と精白率", romaji:"seimai-buai, seihaku-ritsu",
            def:{ en:"<em>Seimai-buai</em>, the number on the label, is what remains: 50% means half the grain is left. <em>Seihaku-ritsu</em> is what was taken away, so the same rice is 50% either way but a 35% seimai-buai is a 65% seihaku-ritsu. Japanese labels always use the first. A translated label that says 'polished 65%' has usually got this backwards.",
              ja:"札に載る数である精米歩合は残ったものである。五十パーセントとは粒の半ばが残っていることを意味する。精白率は削られたものであり、ゆえに同じ米はどちらでも五十パーセントだが、精米歩合三十五パーセントは精白率六十五パーセントである。日本の札は必ず前者を用いる。「六十五パーセント精米」と記す訳された札は、たいていこれを逆に取っている。",
              zh:"標籤上的「精米步合」指的是「剩下的」：50% 表示米粒還剩一半。「精白率」指的是「被削掉的」；因此同一批米在 50% 時兩者相同，但精米步合 35% 等於精白率 65%。日文標籤一律使用前者。若翻譯後的標籤寫著「精磨 65%」，通常就是把這件事弄反了。" } }
        ] },
        { t:"scale",
          title:{en:"Where the designations sit",ja:"特定名称の位置",zh:"特定名稱的落點"},
          segs:[
            { w:23, fill:"#EADCC1", label:{en:"7–30% · extreme",ja:"7〜30%・極限",zh:"7–30%・極限"} },
            { w:15, fill:"#EDE5D2", label:{en:"30–45% · daiginjō",ja:"30〜45%・大吟醸",zh:"30–45%・大吟釀"} },
            { w:10, fill:"#F0EDE4", label:{en:"45–55% · ginjō",ja:"45〜55%・吟醸",zh:"45–55%・吟釀"} },
            { w:15, fill:"#F5F3ED", label:{en:"55–70% · honjōzō · junmai",ja:"55〜70%・本醸造・純米",zh:"55–70%・本釀造・純米"} },
            { w:20, fill:"#FBFAF7", label:{en:"70–93% · futsūshu",ja:"70〜93%・普通酒",zh:"70–93%・普通酒"} }
          ],
          ticks:["7 %","30 %","50 %","70 %","93 %"],
          note:{ en:"Milling is not linear in cost. Going from 70% to 60% discards a tenth of the crop; going from 40% to 30% discards a quarter of what remains and takes days. Beyond about 35% the returns are increasingly a matter of statement rather than sensory difference.",
                 ja:"精米は費用に対して直線的ではない。70%から60%へは収穫の一割を捨てることだが、40%から30%へは残りの四分の一を捨て、日数を要する。おおむね35%を超えると、その先の差は官能上の違いというより表明の問題になっていく。",
                 zh:"精米的成本並非線性。自 70% 削至 60% 只捨去收成的十分之一；自 40% 削至 30% 卻要捨去所剩的四分之一，且耗費數日。大約超過 35% 之後，其效益日益成為一種宣示，而非感官上的差異。" } }
      ]
    },

    { t:"section", id:"varieties",
      title:{ en:"The varieties", ja:"品種", zh:"品種" }, jp:"酒造好適米",
      body:[
        { t:"p", text:{
          en:"Four varieties dominate. Behind them sit a long tail of prefectural cultivars bred since the 1980s to give each region a rice of its own, and a small revivalist movement bringing back pre-war heirlooms that are difficult to grow and idiosyncratic to brew.",
          ja:"四品種が全体を支配している。その背後には、一九八〇年代以降、各県が地元の酒に固有の米をもたせるために育成した多数の県産品種があり、さらに、栽培が難しく醸造上も癖のある戦前の在来品種を復活させようとする小さな運動がある。",
          zh:"四個品種主導全局。其後是一長串自 1980 年代以來各縣為讓自身酒款擁有專屬米種而育成的地方品種，另有一場規模不大的復育運動，重新種回那些難栽培、釀造上也各具脾性的戰前在來種。" } },
        { t:"table",
          caption:{en:"Principal sake rice varieties",ja:"主要な酒造好適米",zh:"主要酒造好適米"},
          cols:[{en:"Variety",ja:"品種",zh:"品種"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Origin",ja:"来歴",zh:"來歷"},{en:"Character in the glass",ja:"酒質の傾向",zh:"酒質傾向"}],
          jpCols:[1],
          rows:[
            [{en:"Yamada Nishiki",ja:"山田錦",zh:"山田錦"},"山田錦",
             {en:"Hyōgo, crossed 1923 (Yamada-ho × Tankan Watari-bune), named 1936. About a third of all sake rice grown; Hyōgo alone supplies over half the national crop. The Toku-A plots around Yoshikawa and Tōjō command the highest prices of any rice in Japan.",
              ja:"兵庫。1923年に山田穂×短稈渡船を交配、1936年に命名。全酒米のおよそ三分の一を占め、兵庫だけで全国産の半分以上を供給する。吉川・東条一帯の特A地区は、日本のあらゆる米のなかで最も高値で取引される。",
              zh:"兵庫。1923 年以山田穗 × 短稈渡船雜交，1936 年命名。約占全部酒米的三分之一，僅兵庫一縣即供應全國半數以上。吉川、東條一帶的特 A 地區，是日本所有稻米中價格最高者。"},
             {en:"Broad, elegant, dependable. Absorbs water evenly, takes kōji well, dissolves on schedule. It is the default because it fails less often than anything else — which some brewers hold against it.",
              ja:"広く、端正で、破綻しない。吸水は均一で、麹の乗りがよく、溶けが予定どおりに進む。他のどの米よりも失敗が少ないがゆえの標準であり、まさにその点を欠点と見る造り手もいる。",
              zh:"寬闊、優雅、可靠。吸水均勻、上麴良好、溶解依進度而行。它成為標準，正因為它比任何品種都少出錯——而某些釀造者恰恰對此有意見。"}],
            [{en:"Gohyakumangoku",ja:"五百万石",zh:"五百萬石"},"五百万石",
             {en:"Niigata, registered 1957, named for the province passing five million <em>koku</em> of rice production. The second most-grown sake rice and the backbone of the Hokuriku style.",
              ja:"新潟。1957年に登録。県の米生産が五百万石を超えたことを記念して命名された。作付第二位であり、北陸の酒質を支える柱である。",
              zh:"新潟，1957 年登錄。得名於該縣稻米產量突破五百萬石。作付面積第二，是北陸酒質的支柱。"},
             {en:"Clean, linear, dry. A small, hard shinpaku means it resists deep milling but dissolves crisply, giving a sake that finishes fast and leaves little behind. The <em>tanrei karakuchi</em> style is built on it.",
              ja:"清く、直線的で、辛口。心白が小さく硬いため深い精米には向かないが、溶けは切れがよく、後を引かない酒になる。淡麗辛口はこの米の上に築かれている。",
              zh:"潔淨、線條分明、辛口。心白小而硬，不耐深度精米，但溶解俐落，釀出的酒收尾迅速、不留餘韻。淡麗辛口的風格即建立於此。"}],
            [{en:"Miyama Nishiki",ja:"美山錦",zh:"美山錦"},"美山錦",
             {en:"Nagano, 1978, produced by irradiating Takane Nishiki. Exceptionally cold-hardy, which is why it spread across Tōhoku and the highlands.",
              ja:"長野、1978年。たかね錦への放射線照射により育成。耐寒性が際立って高く、そのため東北と高冷地へ広がった。",
              zh:"長野，1978 年，以高嶺錦經輻射誘變育成。耐寒性極佳，因而擴散至東北與高冷地區。"},
             {en:"Grainy, mildly sweet, restrained in aroma. Gives a sake that tastes recognisably of rice — a virtue or a limitation depending on the brewer's ambition.",
              ja:"穀物的で、やや甘く、香りは控えめ。米の味がそれと分かる酒になる。造り手の志向によって、美点にも制約にもなる。",
              zh:"帶穀物感、微甜、香氣內斂。釀出的酒能明確嚐到米味——依釀造者的企圖不同，這可以是優點，也可以是限制。"}],
            [{en:"Omachi",ja:"雄町",zh:"雄町"},"雄町",
             {en:"Okayama. Found as two stray stalks in 1859 by the farmer Kishimoto Jinzō on his way back from Mount Daisen; pure-line selected in 1922. The only major variety that is a pre-modern landrace rather than a bred cultivar — and the ancestor of most of the others, Yamada Nishiki included. Okayama still grows around 90% of it.",
              ja:"岡山。1859年、農民・岸本甚造が伯耆大山からの帰路に見出した二本の穂に始まり、1922年に純系分離。近代の育成品種ではなく前近代の在来種である唯一の主要品種であり、山田錦を含む多くの品種の祖先でもある。今なお約九割が岡山で作られる。",
              zh:"岡山。1859 年，農民岸本甚造自伯耆大山返途中發現兩株稻穗，1922 年完成純系分離。是唯一屬前近代在來種而非育成品種的主要品種，也是包含山田錦在內多數品種的祖先。至今仍有約九成產自岡山。"},
             {en:"Wild, earthy, herbal, thick. High in amino acids, generous in acidity, difficult to control and prone to over-dissolving. Drinkers who love it — <em>omachisuto</em> — love it precisely for the mess.",
              ja:"野趣があり、土のようで、草の香をもち、厚い。アミノ酸に富み、酸も豊かで、制御が難しく溶け過ぎやすい。これを愛する飲み手——オマチストは、まさにその乱雑さゆえに愛する。",
              zh:"野性、土氣、帶草本感、厚實。胺基酸高、酸度豐沛、難以控制且易溶解過度。鍾愛它的人——「雄町狂」（オマチスト）——愛的正是這份不馴。"}],
            [{en:"Aiyama",ja:"愛山",zh:"愛山"},"愛山",
             {en:"Hyōgo, crossed 1941, released 1949 (Aifune 117 × Yamao 67, with Omachi in its ancestry). Grown in tiny quantity and historically almost monopolised by one brewery.",
              ja:"兵庫。1941年交配、1949年に世に出る（愛船117×山雄67、祖先に雄町をもつ）。作付はごく少なく、歴史的にはほぼ一蔵が独占していた。",
              zh:"兵庫，1941 年雜交、1949 年推出（愛船 117 × 山雄 67，祖系含雄町）。栽培量極小，歷史上幾乎由一家酒藏獨占。"},
             {en:"Very large shinpaku, dissolves fast, gives an unusually dense and sweet mash. Full-bodied, fruit-forward, high acidity. Fashionable and expensive.",
              ja:"心白が非常に大きく、溶けが速く、密度が高く甘い醪になる。厚みがあり果実味が前に出て、酸も高い。流行しており、高価である。",
              zh:"心白極大、溶解快速，形成異常濃稠而甜的醪。酒體飽滿、果味前傾、酸度高。流行且昂貴。"}],
            [{en:"Hattan Nishiki",ja:"八反錦",zh:"八反錦"},"八反錦",
             {en:"Hiroshima, 1970s, from Hattan 35-gō × Akitsuho. The defining rice of Hiroshima's soft-water brewing.",
              ja:"広島、1970年代。八反35号×秋津穂。広島の軟水醸造を規定する米。",
              zh:"廣島，1970 年代，由八反 35 號 × 秋津穗育成。是廣島軟水釀造的代表米種。"},
             {en:"Medium-bodied, soft-textured, gently earthy, with a clean acid line. Sits between the sharpness of Gohyakumangoku and the breadth of Yamada Nishiki.",
              ja:"中程度の厚みと柔らかな質感、穏やかな土の香、清らかな酸の線。五百万石の鋭さと山田錦の広さのあいだに位置する。",
              zh:"中等酒體、質地柔軟、帶溫和土氣，酸線清晰。位於五百萬石的銳利與山田錦的寬闊之間。"}],
            [{en:"Dewasansan",ja:"出羽燦々",zh:"出羽燦燦"},"出羽燦々",
             {en:"Yamagata's flagship, from Hanafubuki × Miyama Nishiki. Part of a deliberate prefectural project — local rice, local yeast, local kōji — to give Yamagata sake a closed regional identity.",
              ja:"山形の看板品種。華吹雪×美山錦。県産米・県産酵母・県産麹菌という、山形の酒に閉じた地域性を与えるための県主導の計画の一部である。",
              zh:"山形的旗艦品種，由華吹雪 × 美山錦育成。這是一項縣層級的刻意計畫——縣產米、縣產酵母、縣產麴菌——藉以賦予山形酒一個自足的地域身分。"},
             {en:"Moderately aromatic, softly sweet, quite complex for a modern cultivar. Reliable at ginjō milling levels.",
              ja:"ほどよく香り、柔らかな甘みをもち、現代の育成品種としては複雑さがある。吟醸領域の精米でも安定している。",
              zh:"香氣適中、甜味柔和，就現代育成品種而言頗具複雜度。在吟釀等級的精米下表現穩定。"}],
            [{en:"Kame no O",ja:"亀の尾",zh:"龜之尾"},"亀の尾",
             {en:"Yamagata, selected around 1893 by the farmer Abe Kameji from three surviving ears in a cold-damaged field. Nearly extinct by the 1970s; revived by a handful of breweries and later by a manga.",
              ja:"山形。1893年頃、冷害の田に残った三本の穂から農民・阿部亀治が選抜した。1970年代にはほぼ絶滅していたが、少数の蔵によって、後には漫画によって復活した。",
              zh:"山形。約 1893 年，農民阿部龜治自遭受冷害的田中僅存的三株稻穗選拔而成。至 1970 年代幾近絕跡，後由少數酒藏復育，並因一部漫畫而廣為人知。"},
             {en:"Citrus-tinged, high acid, firm, slightly austere. Ancestor of Koshihikari and Sasanishiki, and a reminder that the table-rice lineage and the sake-rice lineage were once the same tree.",
              ja:"柑橘を帯び、酸が高く、締まって、やや厳しい。コシヒカリやササニシキの祖先でもあり、食用米の系譜と酒米の系譜がかつて一本の樹であったことを思い出させる。",
              zh:"帶柑橘調、酸度高、結構緊實、略顯嚴峻。它也是越光米與笹錦的祖先，提醒著食用米與酒米的系譜曾是同一棵樹。"}],
            [{en:"Akita Sakekomachi",ja:"秋田酒こまち",zh:"秋田酒小町"},"秋田酒こまち",
             {en:"Akita, 1998. Bred for the prefecture's low-temperature, long-fermentation house style.",
              ja:"秋田、1998年。県の低温長期発酵という造りの型に合わせて育成された。",
              zh:"秋田，1998 年。為配合該縣低溫長期發酵的釀造風格而育成。"},
             {en:"Produces high glucose and a soft, sweet, wide palate. Often paired with aromatic yeasts for a deliberately plush style.",
              ja:"ブドウ糖が多く出て、柔らかく甘い、幅のある味わいになる。高香気酵母と組み合わせ、意図的にふくよかな酒質にすることが多い。",
              zh:"產生較高葡萄糖，形成柔軟、甘甜而寬闊的口感。常與高香氣酵母搭配，刻意營造豐潤的風格。"}],
            [{en:"Ginpū",ja:"吟風",zh:"吟風"},"吟風",
             {en:"Hokkaidō, 2000. Part of the northern breeding programme that made serious sake brewing viable in Hokkaidō for the first time.",
              ja:"北海道、2000年。北海道で本格的な酒造りを初めて成立させた北方育種計画の一部。",
              zh:"北海道，2000 年。屬於使北海道首度得以進行正規釀酒的北方育種計畫之一環。"},
             {en:"Steamed-rice sweetness, moderate body, clean. Hokkaidō sake barely existed as a category thirty years ago; the rice is the reason it does now.",
              ja:"蒸米のような甘みと中庸の厚み、清らかさ。三十年前、北海道の酒はカテゴリーとしてほとんど存在しなかった。いま存在するのは、この米があるからである。",
              zh:"帶蒸米般的甜、中等酒體、潔淨。三十年前北海道酒幾乎不成一個類別；如今它成立，正是因為有了這款米。"}],
            [{en:"Watari-bune",ja:"渡船",zh:"渡船"},"渡船",
             {en:"An Omachi-derived line, effectively extinct for half a century until Ibaraki brewers obtained seed from a national gene bank in the 1980s and grew it out.",
              ja:"雄町から派生した系統。半世紀にわたり事実上絶滅していたが、1980年代に茨城の蔵が国の遺伝資源保存機関から種子を得て復活させた。",
              zh:"源自雄町的系統，實質上絕跡達半世紀，直到 1980 年代茨城的釀酒者自國家種原庫取得種子復育。"},
             {en:"Aromatic, layered, full. One parent of Yamada Nishiki, so tasting it is something close to hearing an earlier draft.",
              ja:"香り高く、層をなし、厚い。山田錦の片親であり、これを味わうことは初期の草稿を聴くことに近い。",
              zh:"香氣鮮明、層次豐富、酒體飽滿。它是山田錦的親本之一，品嚐它近乎聆聽一份更早的草稿。"}],
            [{en:"Koshi Tanrei",ja:"越淡麗",zh:"越淡麗"},"越淡麗",
             {en:"Niigata, 2004, from Yamada Nishiki × Gohyakumangoku — an attempt to give Niigata a rice that would take daiginjō milling without importing Hyōgo grain.",
              ja:"新潟、2004年。山田錦×五百万石。兵庫の米に頼らずに大吟醸の精米に耐える米を新潟に与えようとした試みである。",
              zh:"新潟，2004 年，由山田錦 × 五百萬石育成——意在讓新潟擁有一款能承受大吟釀精米、而不必仰賴兵庫用米的品種。"},
             {en:"Niigata clarity with more mid-palate weight than Gohyakumangoku allows.",
              ja:"新潟らしい清澄さに、五百万石では出せない中盤の厚みが加わる。",
              zh:"具備新潟式的澄澈，卻擁有五百萬石所無法提供的中段厚度。"}],
            [{en:"Table rice varieties",ja:"飯米",zh:"飯米"},"コシヒカリ・ひとめぼれ 等",
             {en:"Around two-thirds of all rice used for sake is ordinary table rice, mostly in futsūshu. A handful of breweries use it deliberately at premium level, arguing that a rice grown for flavour is not obviously the wrong choice.",
              ja:"日本酒に使われる米のおよそ三分の二は普通の飯米であり、その多くは普通酒に向かう。一方、味のために育てられた米を選ぶことが明らかに誤りだとは言えないとして、意図的に上位商品へ用いる蔵も少数ある。",
              zh:"用於釀酒的米約有三分之二是普通食用米，多數用於普通酒。少數酒藏則刻意在高階產品中使用，理由是：為風味而育成的米，未必就是錯誤的選擇。"},
             {en:"Softer, sweeter, less clean; ages differently. Not a defect, but a different intention.",
              ja:"柔らかく、甘く、清澄さは劣る。熟成の仕方も異なる。欠点ではなく、別の意図である。",
              zh:"更柔、更甜、較不潔淨；陳年方式亦不同。這不是缺陷，而是另一種意圖。"}]
          ] }
      ]
    },

    { t:"section", id:"water",
      title:{ en:"Water", ja:"水", zh:"水" }, jp:"仕込み水",
      body:[
        { t:"p", text:{
          en:"Brewing water — <em>shikomi-mizu</em> — must satisfy two contradictory demands. It must carry enough mineral nutrition to keep yeast and kōji working, and it must be almost free of the two metals that destroy sake. Everything a brewery says about its well is a statement about that balance.",
          ja:"仕込み水は、相反する二つの要求を同時に満たさねばならない。酵母と麹を働かせるだけのミネラル栄養を含むこと。そして、日本酒を壊す二つの金属をほとんど含まないこと。蔵が自らの井戸について語ることはすべて、この均衡についての言明である。",
          zh:"仕込水必須同時滿足兩項互相矛盾的要求：既要含有足以維持酵母與麴菌運作的礦物養分，又必須幾乎不含那兩種會毀掉日本酒的金屬。酒藏對自家水井所說的一切，都是關於這個平衡的陳述。" } },
        { t:"compare", cols:2, items:[
          { title:{en:"Wanted",ja:"必要なもの",zh:"所需之物"}, jp:"カリウム・リン・マグネシウム",
            text:{en:"Potassium, phosphorus and magnesium are yeast nutrients; without them fermentation stalls and the mash finishes sweet and underattenuated. Calcium activates kōji enzymes and firms the mash. Hard water therefore ferments vigorously and finishes dry — the Nada profile.",
                  ja:"カリウム・リン・マグネシウムは酵母の栄養であり、これを欠くと発酵が停滞し、醪は甘く未発酵のまま終わる。カルシウムは麹の酵素を活性化し、醪を締める。したがって硬水は発酵が旺盛で辛口に仕上がる——灘の型である。",
                  zh:"鉀、磷、鎂是酵母的養分；缺乏時發酵停滯，醪帶甜而發酵不足。鈣則活化麴菌酵素並使醪結實。因此硬水發酵旺盛、成酒偏辛——即灘的典型。"} },
          { title:{en:"Excluded",ja:"排すべきもの",zh:"須排除之物"}, jp:"鉄・マンガン",
            text:{en:"Iron above roughly 0.02 ppm reacts with a compound produced by kōji to form a reddish-brown pigment: the sake darkens and its aroma turns flat and metallic. Manganese, at similar levels, accelerates light damage. Both limits are far stricter than drinking-water standards, and a brewery whose well develops iron has a genuine crisis.",
                  ja:"鉄が約0.02ppmを超えると、麹が生成する成分と反応して赤褐色の色素を作る。酒は着色し、香りは平板で金属的になる。マンガンも同程度の濃度で光による劣化を早める。いずれの基準も飲料水基準よりはるかに厳しく、井戸に鉄が出た蔵は本当の危機に直面する。",
                  zh:"鐵含量超過約 0.02 ppm 便會與麴菌產生的化合物反應，生成紅褐色色素：酒色變深，香氣變得平板且帶金屬味。錳在相近濃度下會加速光害。兩項限值都遠比飲用水標準嚴格；水井一旦出現鐵質，對酒藏是真正的危機。"} }
        ] },
        { t:"table",
          caption:{en:"Famous brewing waters",ja:"名水",zh:"名水"},
          cols:[{en:"Water",ja:"水",zh:"水"},{en:"Where",ja:"所在",zh:"所在"},{en:"Hardness",ja:"硬度",zh:"硬度"},{en:"Consequence",ja:"帰結",zh:"影響"}],
          numCols:[2],
          rows:[
            [{en:"Miyamizu",ja:"宮水",zh:"宮水"},{en:"Nishinomiya, Hyōgo — Nada",ja:"兵庫県西宮——灘",zh:"兵庫西宮——灘"},"≈ 100 mg/L",
             {en:"Identified in 1840. High in potassium, phosphorus and calcium, unusually low in iron. Ferments hard and fast; the classic <em>otokozake</em> — “men's sake” — dry, firm, with a cutting finish. Still carted by tanker to breweries several kilometres away.",
              ja:"1840年に見出された。カリウム・リン・カルシウムに富み、鉄は異例に少ない。発酵は強く速く、古典的な男酒——辛口で骨格があり、切れのある後味——を生む。今もタンクローリーで数キロ離れた蔵へ運ばれている。",
              zh:"1840 年被辨識出來。富含鉀、磷、鈣，鐵質異常地低。發酵強而快，造就經典的「男酒」——辛口、結構堅實、尾韻俐落。至今仍以槽車運往數公里外的酒藏。"}],
            [{en:"Gokōsui",ja:"御香水",zh:"御香水"},{en:"Fushimi, Kyoto",ja:"京都・伏見",zh:"京都・伏見"},"≈ 80 mg/L",
             {en:"Softer and lower in minerals than Miyamizu. Fermentation is gentler and finishes rounder: the <em>onnazake</em> counterpart — silky, mildly sweet, less angular. Nada and Fushimi are the standing demonstration that water alone can produce two schools.",
              ja:"宮水より軟らかくミネラルが少ない。発酵は穏やかで、仕上がりは丸い——女酒、すなわち滑らかで、やや甘く、角の少ない酒。灘と伏見は、水だけで二つの流派が生まれうることの、いまも生きた証明である。",
              zh:"較宮水更軟、礦物質更少。發酵溫和、成酒圓潤：即相對於男酒的「女酒」——絲滑、微甜、稜角較少。灘與伏見至今仍是「單憑水質即可造就兩個流派」的活證。"}],
            [{en:"Saijō soft water",ja:"西条の軟水",zh:"西條軟水"},{en:"Higashi-Hiroshima",ja:"広島県東広島",zh:"廣島東廣島"},{en:"very soft",ja:"極軟水",zh:"極軟"},
             {en:"So soft that brewing there was long thought impossible — fermentation simply would not start properly. In 1898 Miura Senzaburō published a method built on rigorous temperature control, thorough sterilisation and long low-temperature fermentation. That method is the direct technical ancestor of ginjō brewing.",
              ja:"あまりに軟らかく、この地での酒造りは長らく不可能と考えられていた——発酵がまともに立ち上がらなかったのである。1898年、三浦仙三郎が厳密な温度管理・徹底した殺菌・低温長期発酵に基づく軟水醸造法を発表した。この方法こそ、吟醸造りの直接の技術的祖先である。",
              zh:"水質軟到當地長期被認為無法釀酒——發酵根本無法正常啟動。1898 年，三浦仙三郎發表以嚴格控溫、徹底殺菌與低溫長期發酵為基礎的軟水釀造法。此法正是吟釀造法直接的技術祖先。"}],
            [{en:"Snowmelt",ja:"雪解け水",zh:"雪融水"},{en:"Niigata, Akita, Yamagata, Nagano",ja:"新潟・秋田・山形・長野",zh:"新潟・秋田・山形・長野"},{en:"soft",ja:"軟水",zh:"軟"},
             {en:"Snow filtered slowly through volcanic strata arrives soft, cold and extremely clean. Combined with cold winters and Gohyakumangoku, it produces the light, dry <em>tanrei karakuchi</em> profile that defined Japanese taste in the 1980s.",
              ja:"火山性の地層をゆっくり濾された雪解け水は、軟らかく、冷たく、極めて清らかである。寒冷な冬と五百万石と組み合わさって、1980年代の日本人の嗜好を規定した淡麗辛口を生んだ。",
              zh:"經火山地層緩慢過濾的雪融水，柔軟、冰冷且極為潔淨。結合嚴寒的冬季與五百萬石，造就了 1980 年代主導日本口味的淡麗辛口風格。"}],
            [{en:"Fukuryūsui",ja:"伏流水",zh:"伏流水"},{en:"nationwide",ja:"全国",zh:"全國"},{en:"variable",ja:"様々",zh:"各異"},
             {en:"Sub-surface river flow through gravel beds — the most common source. A brewery on an alluvial fan under a mountain is on a fukuryūsui well, which is why so many kura sit exactly where they do.",
              ja:"砂礫層を流れる地下の伏流——最も一般的な水源である。山の麓の扇状地に立つ蔵は伏流水の井戸の上にある。多くの蔵がまさにその場所にあるのはこのためだ。",
              zh:"流經礫石層的地下伏流——最常見的水源。位於山腳沖積扇上的酒藏，腳下即是伏流水井；許多酒藏之所以恰恰坐落於彼處，原因在此。"}]
          ] },
        { t:"note", label:{en:"Hardness in context",ja:"硬度について",zh:"關於硬度"}, text:{
          en:"By international standards almost all Japanese brewing water is soft to medium. Miyamizu, celebrated for centuries as “hard”, would be classed as moderately hard in Europe and would be unremarkable in Burton-on-Trent. The distinction that matters in sake is a fine one, made between waters that a wine or beer brewer would consider nearly identical — which is a good illustration of how narrow the sensitivities of this process are.",
          ja:"国際的な基準では、日本の仕込み水はほぼすべてが軟水から中硬水にとどまる。何世紀も「硬い」と称えられてきた宮水も、ヨーロッパでは中硬水に分類され、バートン・オン・トレントでは何ら特筆すべきものではない。日本酒において意味をもつ差は、ワインやビールの造り手ならほぼ同一と見なす水のあいだの、きわめて細かな差である。この工程の感度がいかに狭い幅の上にあるかをよく示している。",
          zh:"以國際標準衡量，日本的釀造用水幾乎全屬軟水至中硬水。被讚頌數世紀為「硬水」的宮水，在歐洲只算中等硬度，放在伯頓（Burton-on-Trent）更是平淡無奇。日本酒中真正有意義的差異，存在於葡萄酒或啤酒釀造者眼中幾乎相同的水之間——這正好說明此一製程的敏感度是何等狹窄。" } }
      ]
    },

    { t:"related", items:[
      { href:"rice.html", why:{ en:"The varieties, and why a sake rice is not a table rice.", ja:"品種と、酒米が飯米でない理由。", zh:"品種，以及酒米為何不是飯米。" } },
      { href:"water.html", why:{ en:"The one input that cannot be shipped in.", ja:"運び込むことのできぬ唯一の原料。", zh:"唯一一項無法運進來的原料。" } },
      { href:"koji.html", why:{ en:"The organism that turns the starch into something edible by yeast.", ja:"デンプンを酵母の食べうるものに変える生きもの。", zh:"把澱粉變成酵母吃得下的東西的那個生物。" } },
      { href:"batch.html", why:{ en:"The four ratios that turn these materials into a recipe.", ja:"これらの材料を献立に変える四つの歩合。", zh:"把這些材料變成一張配方的四個步合。" } }
    ] }
  ]
};


/* ---- ------------------------------------------------ rice */
SAKE.pages["rice"] = {
  kicker: { en: "Making · 02", ja: "造り · 02", zh: "釀造 · 02" },
  title:  { en: "Sake Rice", ja: "酒米", zh: "酒米" },
  jp: "酒造好適米のすべて",
  lede: {
    en: "About a quarter of the sake made in Japan is brewed from rice bred specifically for brewing and grown under contract — roughly 88,000 tonnes a year against a national rice crop of some seven million. These varieties are not better eating rice; most of them are worse. They are bred for a large soft grain with a starchy opaque core, low protein, and a particular willingness to dissolve at the right moment and not before. This page covers what a brewing rice is, how the varieties are related to each other, who grows what, and the one place in Japan where rice is graded by village.",
    ja: "日本で造られる酒のおよそ四分の一は、醸造専用に育種され、契約で栽培された米から生まれる。年間およそ八万八千トン——全国の米の作付およそ七百万トンに対する量である。これらの品種は食べて旨い米ではない。むしろ大半は食味で劣る。大きく軟らかい粒、澱粉質で不透明な中心、低いたんぱく質、そして「しかるべき時に溶け、それより前には溶けない」という気質のために育てられている。本頁では、酒造用の米とは何か、品種どうしがどう繋がっているか、どこで誰が何を作っているか、そして日本で唯一、米を村単位で格付けする仕組みを扱う。",
    zh: "日本所釀的酒約有四分之一，來自專為釀造育種、以契作方式栽培的米——一年約八萬八千噸，相對於全國約七百萬噸的稻作。這些品種並非更好吃的米，多數反而更難吃。它們被育成的目標是：大而軟的米粒、澱粉質的不透明核心、低蛋白質，以及一種「在該溶的時候才溶、在此之前不溶」的脾性。本頁說明什麼是釀造用米、各品種之間如何相互關聯、何地何人種植何種米，以及日本唯一以村為單位為米分級的制度。"
  },
  body: [

    { t:"section", id:"what",
      title:{ en:"What makes a rice a brewing rice", ja:"酒造好適米の条件", zh:"何謂酒造好適米" }, jp:"要件",
      body:[
        { t:"p", text:{
          en:"A brewer wants a grain that can be milled hard without shattering, that absorbs water predictably, that steams to a surface that is firm and an interior that is soft (<em>gaikō-nainan</em>, 外硬内軟), that lets kōji mycelium drive inward rather than spreading across the surface, and that dissolves into the mash slowly and on schedule. Five measurable properties deliver most of that.",
          ja:"造り手が望むのは、砕けずに高精白でき、吸水が読め、蒸したときに表面が締まり内部が軟らかく（外硬内軟）、麹菌の菌糸が表面に広がるのではなく内へ向かって伸び、醪のなかへ予定どおりゆっくり溶けていく粒である。その大半は、五つの計測可能な性質によって決まる。",
          zh:"釀造者要的是這樣一種米粒：能高度研磨而不碎裂、吸水表現可預測、蒸後外硬內軟、能讓麴菌菌絲往內部延伸而非只在表面蔓延，並能依預定節奏緩慢溶入醪中。這些要求，大半由五項可量測的性質決定。" } },
        { t:"defs", items:[
          { term:{en:"A starchy white core",ja:"心白",zh:"心白"}, jp:"心白", romaji:"shinpaku",
            def:{en:"An opaque centre of loosely packed starch granules with air between them. It scatters light, which is why it looks white. It gives kōji hyphae a path inward, and it gives the miller a soft target that survives polishing. Between 60% and 80% of grains of a good brewing variety show one; eating rice almost never does.",
              ja:"澱粉粒が粗く詰まり、その間に空隙をもつ不透明な中心部。光を散乱するため白く見える。麹菌の菌糸に内部への通路を与え、精米には削りやすく耐える的を与える。良い酒造好適米では六割から八割の粒に現れるが、飯米にはほとんど現れない。",
              zh:"由鬆散排列的澱粉粒與其間空隙構成的不透明中心。它會散射光線，故呈白色。它為麴菌菌絲提供向內延伸的通道，也為精米提供一個柔軟卻耐磨的標的。優良酒米約六至八成的米粒具備心白，食用米則幾乎沒有。"} },
          { term:{en:"A large grain",ja:"大粒",zh:"大粒"}, jp:"千粒重",
            def:{en:"Measured as thousand-grain weight: brewing varieties run 26–30 g against 20–23 g for eating rice. A big grain survives being reduced by half. Yamada Nishiki is about 28 g; Ōmachi, unusually, is larger still.",
              ja:"千粒重で測る。酒造好適米は26〜30グラム、飯米は20〜23グラムである。大きな粒は、半分に削られても残る。山田錦はおよそ28グラム、雄町は例外的にさらに大きい。",
              zh:"以千粒重衡量：酒米約 26–30 公克，食用米則為 20–23 公克。粒大才禁得起削去一半。山田錦約 28 公克，雄町則罕見地更大。"} },
          { term:{en:"Low protein",ja:"低たんぱく",zh:"低蛋白"}, jp:"蛋白質",
            def:{en:"Protein becomes amino acids in the mash, and amino acids past a certain level read as heaviness and a savoury coarseness (<em>zatsumi</em>). Protein sits mostly in the outer layers, which is the main thing milling is removing. Growers reduce it further by holding back late nitrogen fertiliser.",
              ja:"たんぱく質は醪のなかでアミノ酸に変わり、一定量を超えたアミノ酸は重さと雑味として現れる。たんぱく質は主に外層にあり、精米が取り除いているのは何よりこれである。生産者は、後期の窒素施肥を控えることでさらに減らす。",
              zh:"蛋白質在醪中轉為胺基酸，胺基酸超過一定量便呈現為厚重與雜味。蛋白質主要分布於外層，而精米所削去的正是它。栽培者則以節制後期氮肥進一步降低含量。"} },
          { term:{en:"Low lipid",ja:"低脂質",zh:"低脂質"}, jp:"脂質",
            def:{en:"Fatty acids in the mash suppress the formation of the esters that carry ginjō aroma — the effect is direct and well documented. Lipids concentrate in the germ and the aleurone layer, both removed early in milling.",
              ja:"醪中の脂肪酸は、吟醸香を担うエステルの生成を抑える。この効果は直接的で、よく記録されている。脂質は胚芽と糊粉層に集中しており、いずれも精米の早い段階で除かれる。",
              zh:"醪中的脂肪酸會抑制承載吟釀香的酯類生成，此效應直接且已有充分記錄。脂質集中於胚芽與糊粉層，兩者在精米初期即被削除。"} },
          { term:{en:"Controlled dissolution",ja:"溶け",zh:"溶解性"}, jp:"溶解性",
            def:{en:"The grain must give up its starch on a schedule the brewer sets. A rice that dissolves too readily (<em>yoku tokeru</em>) gives a heavy, amino-rich sake; one that resists (<em>toke-nikui</em>) can leave sugar unused and a thin result. Yamada Nishiki's reputation rests here more than anywhere: it dissolves generously but not suddenly.",
              ja:"粒は、造り手の定めた日程に従って澱粉を手放さねばならない。よく溶ける米は重くアミノ酸の多い酒になり、溶けにくい米は糖を使い残して痩せた酒になりうる。山田錦の評価は、何よりここに拠っている——寛やかに、しかし急激ではなく溶ける。",
              zh:"米粒必須依釀造者設定的節奏釋出澱粉。過易溶解者釀出厚重、胺基酸偏高的酒；難溶者則可能留下未用的糖分而顯得單薄。山田錦的聲譽正建立於此：它溶得慷慨，卻不倉促。"} }
        ] },
        { t:"note", label:{en:"The trade-off nobody escapes",ja:"逃れられない相反",zh:"無人能免的取捨"}, text:{
          en:"Every property above is in tension with agronomy. Brewing varieties are tall, late-ripening and prone to lodging in wind; they yield less per hectare than eating rice and cost the brewer two to three times as much per kilogram. Yamada Nishiki in particular grows to well over a metre and falls over in a typhoon, which is why it is grown where the harvest comes before the storms and the fields are sheltered.",
          ja:"上に挙げた性質は、いずれも農学と衝突する。酒造好適米は背が高く、晩生で、風で倒伏しやすい。反当たりの収量は飯米に劣り、蔵にとっては一キロあたり二倍から三倍の値になる。とりわけ山田錦は一メートルをはるかに超えて伸び、台風で倒れる。だからこそ、収穫が嵐より早く来て、圃場が風から守られている土地で作られる。",
          zh:"上述每一項性質都與農藝相衝突。酒米植株高、晚熟、易因風倒伏，每公頃產量低於食用米，對酒藏而言每公斤要貴上兩三倍。山田錦尤其可長逾一公尺，颱風一來便倒伏；這正是它只種在收穫早於風季、且田區有屏障之處的原因。" } }
      ]
    },

    { t:"section", id:"shinpaku",
      title:{ en:"Reading the shinpaku", ja:"心白を読む", zh:"判讀心白" }, jp:"心白の型",
      body:[
        { t:"p", text:{
          en:"Not all white cores are the same shape, and the shape decides how far the rice can be milled and what it is good for. A core that runs as a thin line along the grain's axis survives aggressive polishing; a wide round core does not, because the mill breaks into it.",
          ja:"心白は形が一様ではなく、その形が、どこまで削れるか、何に向くかを決める。粒の軸に沿って細い線状に走る心白は激しい精米に耐えるが、幅の広い丸い心白は耐えない。削りが心白に達して割れるからである。",
          zh:"心白的形狀並不一致，而形狀決定了這粒米能削到多薄、適合做什麼。沿米粒軸線呈細線狀者能承受高度研磨；寬圓者則不行，因為研磨會切入心白而使米粒破碎。" } },
        { t:"table",
          cols:[{en:"Type",ja:"型",zh:"型"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Shape",ja:"形状",zh:"形狀"},{en:"Consequence",ja:"帰結",zh:"影響"}],
          jpCols:[1],
          rows:[
            [{en:"Linear",ja:"線状",zh:"線狀"},"線状心白",
             {en:"A narrow line along the long axis.",ja:"長軸に沿った細い線。",zh:"沿長軸的細線。"},
             {en:"Mills to 35% and below without breaking. The daiginjō core type; Yamada Nishiki's is close to this.",ja:"35%以下まで割れずに削れる。大吟醸向きの型であり、山田錦はこれに近い。",zh:"可削至 35% 以下而不碎。屬大吟釀型；山田錦即接近此型。"}],
            [{en:"Dotted",ja:"点状",zh:"點狀"},"点状心白",
             {en:"Scattered small opacities near the centre.",ja:"中心付近に散在する小さな不透明部。",zh:"中心附近散布的小型不透明區。"},
             {en:"Very mill-tolerant; kōji penetration is less generous. Common in newer bred varieties.",ja:"精米にはきわめて強いが、麹の食い込みはやや控えめ。近年の育成品種に多い。",zh:"極耐研磨，但麴菌的食入較保守。常見於近年育成的品種。"}],
            [{en:"Eye",ja:"眼状",zh:"眼狀"},"眼状心白",
             {en:"A single round opacity like a pupil.",ja:"瞳のような一つの丸い不透明部。",zh:"如瞳孔般的單一圓形不透明區。"},
             {en:"Excellent for kōji, poor above about 50% milling — the grain cracks. Ōmachi is the type case.",ja:"麹には優れるが、精米歩合およそ50%を超えると割れやすい。雄町がその典型である。",zh:"極利於製麴，但精米步合超過約 50% 便易碎。雄町即為典型。"}],
            [{en:"Belly-white",ja:"腹白",zh:"腹白"},"腹白米",
             {en:"Opacity displaced toward the belly of the grain.",ja:"不透明部が粒の腹側に寄る。",zh:"不透明區偏向米粒腹側。"},
             {en:"A defect rather than a type: usually a sign of poor ripening. Downgraded at inspection.",ja:"型というより欠点であり、通常は登熟不良の徴である。検査で等級を落とす。",zh:"與其說是型態，不如說是缺陷，通常代表登熟不良。檢查時會被降級。"}]
          ] },
        { t:"p", text:{
          en:"A shinpaku is also a liability. The air gaps that make it white make the grain fragile and make it absorb water fast, so a rice with a big core needs shorter, more precisely timed soaking — sometimes measured to the second, with the rice weighed wet. This is why <em>gentei-kyūsui</em>, limited-absorption soaking, exists at all.",
          ja:"心白はまた弱点でもある。白く見せている空隙が粒を脆くし、吸水を速くする。したがって心白の大きな米は、より短く、より精密に計った浸漬を要する——秒単位で計り、濡れた米を秤にかけることさえある。限定吸水という工程が存在するのは、そもそもこのためである。",
          zh:"心白同時也是弱點。使它顯白的空隙讓米粒變脆、吸水加快，因此心白大的米需要更短、計時更精確的浸漬——有時以秒計，並將濕米過秤。「限定吸水」這道工序之所以存在，正是為此。" } }
      ]
    },

    { t:"section", id:"designation",
      title:{ en:"Designation and grading", ja:"指定と等級", zh:"指定與分級" }, jp:"制度",
      body:[
        { t:"p", text:{
          en:"Two separate official systems touch brewing rice, and they are often confused. One decides whether a variety counts as a brewing variety at all; the other grades the physical quality of a particular delivery of grain.",
          ja:"酒米には二つの別個の公的制度が関わっており、しばしば混同される。一つはその品種が酒造好適米に数えられるかを決め、もう一つは、実際に納められた米という物の品質を格付けする。",
          zh:"有兩套彼此獨立的官方制度與酒米相關，且常被混淆。其一決定某品種是否算作酒造好適米；其二則為實際交付的那批穀物評定品質等級。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Variety designation",ja:"品種の指定",zh:"品種指定"}, jp:"酒造好適米",
            body:[{ t:"p", text:{
              en:"<em>Shuzō kōtekimai</em> — literally “rice suited to sake brewing” — is a designation applied at prefectural level to varieties that meet the physical criteria above and are registered for the purpose. It is not a national list handed down from Tokyo; each prefecture designates within its own agricultural statistics, which is why the count of designated varieties has climbed past a hundred as prefectures released their own breeds. There is no legal barrier to brewing sake from ordinary eating rice, and a great deal of sake is.",
              ja:"酒造好適米——文字どおり「酒造りに適した米」——は、上記の物理的条件を満たし、その目的で登録された品種に対し、県の段階で与えられる指定である。東京から下される全国一律の名簿ではなく、各県が自らの農業統計のなかで指定する。県ごとに独自品種を出すにつれ、指定品種の数が百を超えたのはそのためである。飯米で酒を造ることに法的な障壁はなく、実際、多くの酒がそう造られている。",
              zh:"酒造好適米——字面意即「適合釀酒的米」——是由縣級對符合上述物理條件並為此登記的品種所給予的指定。它並非由東京頒布的全國名單，而是各縣在自身農業統計中認定；隨著各縣推出自有品種，指定品種數已逾百種，原因即在於此。以一般食用米釀酒並無法律障礙，事實上為數不少的酒正是如此釀成。" } }] },
          { h:{en:"Inspection grading",ja:"検査の等級",zh:"檢查等級"}, jp:"農産物検査法",
            body:[{ t:"p", text:{
              en:"Under the Agricultural Products Inspection Act, a delivered lot is graded on grain fill, uniformity, moisture and damage: <strong>特上 · 特等 · 一等 · 二等 · 三等 · 規格外</strong>. This matters legally, because a sake may only be labelled as a <em>tokutei meishōshu</em> — junmai, ginjō and the rest — if its rice is graded third class or better. It is the single agricultural fact embedded in Japanese sake law.",
              ja:"農産物検査法に基づき、納入された米は、粒張り・整粒・水分・被害粒によって格付けされる——<strong>特上・特等・一等・二等・三等・規格外</strong>。これは法的に重要である。純米や吟醸をはじめとする特定名称酒を名乗れるのは、原料米が三等以上に格付けされた場合に限られるからである。日本の酒税法規に埋め込まれた、唯一の農学的事実である。",
              zh:"依《農產物檢查法》，交付的批次會依粒實、整齊度、水分與受損粒分級：<strong>特上・特等・一等・二等・三等・規格外</strong>。這在法律上很重要，因為唯有原料米評為三等以上，該酒才能標示為特定名稱酒（純米、吟釀等）。這是嵌入日本清酒法規之中唯一的農學事實。" } }] }
        ] },
        { t:"note", label:{en:"Why some fine sake says nothing about its class",ja:"優れた酒が等級に触れない理由",zh:"某些好酒為何不提等級"}, text:{
          en:"A brewer who buys rice direct from a farmer and skips formal inspection cannot use the special designations, however good the rice is — the grain is legally ungraded. A handful of well-regarded breweries have done exactly this on principle and sell the result as <em>futsūshu</em> or with the designation simply omitted. Read a bare label carefully before assuming it means cheap sake.",
          ja:"農家から直接米を買い、公的検査を経ない蔵は、その米がどれほど良くとも特定名称を用いることができない。法的には無等級だからである。この点を筋として通し、結果を普通酒として、あるいは名称を単に伏せて売る評価の高い蔵がいくつか存在する。素っ気ない酒標を見て安酒と決めつける前に、よく読むこと。",
          zh:"直接向農家購米、未經正式檢查的酒藏，無論米有多好都不能使用特定名稱——因為法律上它是無等級的。有若干備受好評的酒藏正是基於原則如此行事，並將成品以普通酒名義、或索性略去名稱來販售。看到樸素的酒標，先細讀再判斷，別逕自認定它是廉價酒。" } }
      ]
    },

    { t:"section", id:"pedigree",
      title:{ en:"The pedigree", ja:"系譜", zh:"系譜" }, jp:"血統",
      body:[
        { t:"p", text:{
          en:"Modern brewing rice descends from a small number of nineteenth-century landraces found in farmers' fields and propagated by hand. Ōmachi is the deepest root: almost every important variety carries it. What follows is the main line.",
          ja:"現代の酒米は、十九世紀に農家の田で見出され、手作業で殖やされた少数の在来種に由来する。最も深い根は雄町であり、重要な品種のほとんどがその血を引く。以下がその本流である。",
          zh:"現代酒米源自十九世紀在農家田間發現、以人力繁殖的少數在來種。最深的根是雄町，幾乎所有重要品種都帶有它的血統。以下即為主線。" } },
        { t:"figure",
          caption:{ en:"The main line of descent. Solid lines are crosses; dashed lines are mutation selections or lineages whose other parent lies outside the diagram. Dates are the year of naming or registration, not of the first cross.",
            ja:"主たる系譜である。実線は交配、破線は突然変異による選抜、あるいは他方の親がこの図の外にある系統を示す。年は最初の交配ではなく、命名または登録の年である。",
            zh:"主要的血緣譜系。實線代表雜交；虛線代表突變選育，或另一方親本不在本圖之內的系統。年份為命名或登記之年，而非首次雜交之年。" },
          svg: function (lang, L) {
            var N = {
              omachi:   [16, 66,  "雄町", "雄町",   "Omachi", "1859"],
              yamadaho: [16, 148, "山田穂", "山田穗", "Yamada-ho", "19c"],
              kamenoo:  [16, 250, "亀の尾", "龜之尾", "Kame no O", "1893"],
              kokuryo:  [16, 340, "穀良都", "穀良都", "Kokuryōmiyako", "19c"],
              watari:   [190, 100, "短稈渡船", "短稈渡船", "Tankan Watari-bune", "1910s"],
              kikusui:  [190, 196, "菊水", "菊水",   "Kikusui", "1920s"],
              takane:   [190, 300, "高嶺錦", "高嶺錦", "Takane Nishiki", "1952"],
              yamada:   [368, 76,  "山田錦", "山田錦", "Yamada Nishiki", "1936"],
              gohyaku:  [368, 196, "五百万石", "五百萬石", "Gohyakumangoku", "1957"],
              miyama:   [368, 300, "美山錦", "美山錦", "Miyama Nishiki", "1978"],
              koshi:    [546, 44,  "越淡麗", "越淡麗", "Koshi Tanrei", "2004"],
              senbon:   [546, 108, "千本錦", "千本錦", "Senbon Nishiki", "2000"],
              homare:   [546, 172, "誉富士", "譽富士", "Homare Fuji", "2005"],
              dewa:     [546, 300, "出羽燦々", "出羽燦燦", "Dewa Sansan", "1997"],
              saito:    [546, 364, "西都の雫", "西都之雫", "Saito no Shizuku", "2004"]
            };
            var E = [
              ["omachi","watari",0], ["omachi","kikusui",0],
              ["yamadaho","yamada",0,346], ["watari","yamada",0],
              ["kikusui","gohyaku",0],
              ["takane","miyama",1],
              ["yamada","koshi",0,512], ["gohyaku","koshi",0,512],
              ["yamada","senbon",0,526], ["yamada","homare",1,534],
              ["miyama","dewa",0],
              ["kokuryo","saito",0]
            ];
            var BW = 132, BH = 40, W = 700, H = 428;
            var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
            var o = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Pedigree of the main sake rice varieties" style="font-family:var(--sans)">'];

            // edges first
            for (var i = 0; i < E.length; i++) {
              var a = N[E[i][0]], b = N[E[i][1]], dash = E[i][2];
              var x1 = a[0] + BW, y1 = a[1] + BH / 2, x2 = b[0], y2 = b[1] + BH / 2;
              var mx = (E[i].length > 3) ? E[i][3] : (x1 + x2) / 2;
              o.push('<path d="M' + x1 + ' ' + y1 + ' H' + mx + ' V' + y2 + ' H' + x2 + '" fill="none" ' +
                'stroke="var(--rule-3)" stroke-width="1"' + (dash ? ' stroke-dasharray="3 3"' : '') + '/>');
            }
            // nodes
            for (var k in N) {
              var n = N[k], x = n[0], y = n[1];
              var jp = (lang === "zh") ? n[3] : n[2];
              o.push('<rect x="' + x + '" y="' + y + '" width="' + BW + '" height="' + BH +
                '" fill="var(--paper)" stroke="var(--rule-2)" stroke-width="1"/>');
              o.push('<text x="' + (x + 9) + '" y="' + (y + 17) + '" font-size="13" fill="var(--ink)" style="font-family:var(--serif)">' + esc(jp) + '</text>');
              o.push('<text x="' + (x + 9) + '" y="' + (y + 31) + '" font-size="8.5" fill="var(--ink-3)" letter-spacing=".03em">' + esc(n[4]) + '</text>');
              o.push('<text x="' + (x + BW - 8) + '" y="' + (y + 31) + '" text-anchor="end" font-size="8.5" fill="var(--ink-4)">' + n[5] + '</text>');
            }
            // Kame no O aside
            o.push('<path d="M' + (16 + BW) + ' ' + (250 + BH / 2) + ' H' + (16 + BW + 26) + '" fill="none" stroke="var(--rule-3)" stroke-width="1" stroke-dasharray="3 3"/>');
            o.push('<text x="' + (16 + BW + 32) + '" y="' + (250 + BH / 2 - 2) + '" font-size="9.5" fill="var(--ink-3)">' +
              esc(L({ en:"ancestor of the table rices", ja:"飯米の祖", zh:"食用米的祖先" })) + '</text>');
            o.push('<text x="' + (16 + BW + 32) + '" y="' + (250 + BH / 2 + 11) + '" font-size="9.5" fill="var(--ink-4)">Koshihikari · Sasanishiki</text>');

            // column headings
            var HD = [
              [16,   { en:"Landraces", ja:"在来", zh:"在來種" }],
              [190,  { en:"Early crosses", ja:"初期の交配", zh:"早期雜交" }],
              [368,  { en:"The pillars", ja:"三本の柱", zh:"三根支柱" }],
              [546,  { en:"Modern regional", ja:"現代の県産", zh:"當代縣產" }]
            ];
            for (var h = 0; h < HD.length; h++) {
              o.push('<text x="' + HD[h][0] + '" y="26" font-size="9.5" letter-spacing=".16em" fill="var(--ink-4)">' +
                esc(L(HD[h][1]).toUpperCase ? L(HD[h][1]) : L(HD[h][1])) + '</text>');
            }
            return o.join("") + "</svg>";
          } },
        { t:"timeline", items:[
          { year:"1859", era:{en:"Ansei 6",ja:"安政6年",zh:"安政六年"},
            title:{en:"Ōmachi found",ja:"雄町の発見",zh:"雄町的發現"}, jp:"雄町",
            text:{en:"Kishimoto Jinzō, a farmer from Bizen in what is now Okayama, notices two unusually fine ears of rice while returning from a pilgrimage to Mount Daisen and takes them home to propagate. The result is the oldest brewing variety still in commercial cultivation, and the only major one that is not a cross — a pure landrace, unchanged for a century and a half. It grows to a metre and a half, falls over constantly, and is grown anyway because nothing tastes like it: broad, earthy, slightly wild. Devotees call themselves <em>Omachisuto</em>.",
              ja:"備前（現在の岡山）の農民・岸本甚造が、大山への参詣の帰路で二本の見事な稲穂に目をとめ、持ち帰って育てた。これが、いまも商業栽培される最古の酒米であり、交配によらない唯一の主要品種——一世紀半変わらぬ純粋な在来種である。丈は一メートル半に達し、絶えず倒れる。それでも作られるのは、他に同じ味がないからだ。味は広く、土の香があり、わずかに野趣がある。愛好者は自らを「オマチスト」と呼ぶ。",
              zh:"備前（今岡山）農民岸本甚造在自大山參拜返家途中，注意到兩株異常出色的稻穗，帶回家繁殖。其成果是至今仍商業栽培的最古老酒米，也是唯一非雜交而來的主要品種——一個一個半世紀未變的純在來種。它可長至一公尺半，經常倒伏，卻仍有人栽種，因為沒有別的米有這種味道：開闊、帶土氣、略顯野性。愛好者自稱「雄町主義者」。"} },
          { year:"1893", era:{en:"Meiji 26",ja:"明治26年",zh:"明治二十六年"},
            title:{en:"Kame no O selected",ja:"亀の尾の選抜",zh:"龜之尾的選拔"}, jp:"亀の尾",
            text:{en:"Abe Kameji, a farmer in Yamagata, picks three surviving ears from a cold-damaged field and breeds from them. Kame no O became the ancestor of Koshihikari and Sasanishiki — that is, of most Japanese eating rice — and was then abandoned for brewing until Kusumi Shuzō revived it in the 1980s, an episode fictionalised in the manga <em>Natsuko no Sake</em>.",
              ja:"山形の農民・阿部亀治が、冷害に遭った田から生き残った三本の穂を選び、そこから育てた。亀の尾はコシヒカリやササニシキの祖先——つまり日本の飯米の大半の祖先——となり、酒造用としては一度捨てられたのち、一九八〇年代に久須美酒造が復活させた。この経緯は漫画『夏子の酒』に描かれている。",
              zh:"山形農民阿部龜治自受冷害的田中挑出三支倖存稻穗育種。龜之尾成為越光米與笹錦的祖先——亦即日本多數食用米的祖先——其後在釀造上一度被棄用，直到 1980 年代由久須美酒造復育，這段經過被寫進漫畫《夏子的酒》。"} },
          { year:"1923", era:{en:"Taishō 12",ja:"大正12年",zh:"大正十二年"},
            title:{en:"The Yamada Nishiki cross",ja:"山田錦の交配",zh:"山田錦的雜交"}, jp:"山田穂 × 短稈渡船",
            text:{en:"At the Hyōgo prefectural agricultural station, Yamadaho — itself a descendant of Ōmachi — is crossed with Tankan Watari-bune, a short-stalked selection of the Ōmachi-derived Watari-bune. The line is trialled for thirteen years and named Yamada Nishiki in 1936. It is still the reference rice: about a third of all brewing rice grown in Japan, and the majority of what wins gold at the national appraisal.",
              ja:"兵庫県立農事試験場で、雄町の系統である山田穂と、同じく雄町由来の渡船から選抜された短稈渡船とが交配された。この系統は十三年間の試験を経て、一九三六年に山田錦と命名される。いまなお基準の米であり、日本で作られる酒米のおよそ三分の一を占め、全国新酒鑑評会で金賞を得る酒の多くがこれを用いる。",
              zh:"在兵庫縣立農事試驗場，源自雄町的山田穗與同樣源自雄町的渡船所選出的短稈渡船交配。此系統經十三年試驗，於 1936 年命名為山田錦。它至今仍是基準之米：占日本所產酒米約三分之一，全國新酒鑑評會金賞酒亦多半用它。"} },
          { year:"1938", era:{en:"Shōwa 13",ja:"昭和13年",zh:"昭和十三年"},
            title:{en:"Gohyakumangoku's cross",ja:"五百万石の交配",zh:"五百萬石的雜交"}, jp:"菊水 × 新200号",
            text:{en:"Made at the Niigata station, and not named for nearly twenty years. In 1957 Niigata's rice harvest passed five million <em>koku</em>, and the variety was named to mark it. Gohyakumangoku is short, early, reliable, and gives a clean light sake with a hard finish — the technical basis of the entire <em>tanrei karakuchi</em> style. It rarely mills past 50% without breaking.",
              ja:"新潟県の農事試験場で交配され、その後二十年近く命名されなかった。一九五七年、新潟の米の収穫が五百万石を超え、それを記念して品種名が与えられた。五百万石は短稈で早生、安定しており、硬い後口の清らかで軽い酒を生む——淡麗辛口という酒質全体の技術的基盤である。50%を超えて削ると割れやすい。",
              zh:"於新潟縣農事試驗場交配，其後近二十年未予命名。1957 年新潟稻米收穫突破五百萬石，遂以此命名。五百萬石植株短、早熟、穩定，釀出潔淨輕盈、收口硬挺的酒——正是整個「淡麗辛口」酒質的技術基礎。精米超過 50% 便易碎。"} },
          { year:"1978", era:{en:"Shōwa 53",ja:"昭和53年",zh:"昭和五十三年"},
            title:{en:"Miyama Nishiki by irradiation",ja:"美山錦の放射線育種",zh:"美山錦的輻射育種"}, jp:"美山錦",
            text:{en:"Nagano's station exposes seed of Hokuriku No. 12 to gamma radiation and selects a mutant with a larger core and better cold tolerance. Miyama Nishiki brews cleanly with a firm, slightly austere edge and grows where nothing else will — it is the rice of the cold north and the mountain valleys, and the third most planted in Japan.",
              ja:"長野県の試験場が北陸12号の種子にガンマ線を照射し、心白が大きく耐冷性に優れた変異体を選抜した。美山錦は、締まったやや厳しい輪郭をもつ清らかな酒を生み、他の品種が育たない土地で育つ——寒い北国と山間の米であり、日本で三番目に多く作付けされている。",
              zh:"長野縣試驗場以伽瑪射線照射北陸 12 號的種子，選出心白更大、耐寒性更佳的突變體。美山錦釀出潔淨而略帶嚴謹稜角的酒，並能在其他品種無法生長之處生長——它是寒冷北國與山間谷地之米，也是日本種植面積第三大的酒米。"} },
          { year:"1997–2004", era:{en:"Heisei",ja:"平成",zh:"平成"},
            title:{en:"The prefectural wave",ja:"県産品種の波",zh:"縣產品種浪潮"}, jp:"地元品種",
            text:{en:"Yamagata releases Dewasansan (1997), designed so that a modest brewery could make good ginjō from local rice; Niigata crosses Yamada Nishiki with Gohyakumangoku to make Koshi Tanrei (2004); Hokkaidō, Fukushima, Toyama, Hiroshima and almost every other prefecture follow. The point is not that these rices beat Yamada Nishiki. It is that a sake from Yamagata can now be Yamagata all the way down.",
              ja:"山形が出羽燦々を発表し（一九九七年）、規模の小さな蔵でも地元の米で良い吟醸が造れるよう設計した。新潟は山田錦と五百万石を交配して越淡麗を得（二〇〇四年）、北海道・福島・富山・広島をはじめ、ほぼすべての県が続いた。要点は、これらの米が山田錦に勝つということではない。山形の酒が、いまや隅々まで山形でありうるということである。",
              zh:"山形推出出羽燦燦（1997），其設計目標是讓規模不大的酒藏也能以在地米釀出好吟釀；新潟以山田錦與五百萬石雜交育成越淡麗（2004）；北海道、福島、富山、廣島及幾乎所有其他縣份接續跟進。重點不在於這些米勝過山田錦，而在於山形的酒如今可以從頭到尾都是山形的。"} }
        ] }
      ]
    },

    { t:"section", id:"varieties",
      title:{ en:"The varieties in use", ja:"使われている品種", zh:"使用中的品種" }, jp:"品種一覧",
      body:[
        { t:"table",
          caption:{en:"Principal brewing varieties, with home prefecture and character",ja:"主要な酒造好適米——主産地と酒質の傾向",zh:"主要酒米品種、主產地與酒質傾向"},
          cols:[{en:"Variety",ja:"品種",zh:"品種"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Origin",ja:"成立",zh:"成立"},{en:"Home",ja:"主産地",zh:"主產地"},{en:"Character in the glass",ja:"酒質の傾向",zh:"杯中表現"}],
          jpCols:[1],
          rows:[
            ["Yamada Nishiki","山田錦","1936",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},
             {en:"Broad, clean, generous; dissolves well and takes very high milling. The default for competition sake and the benchmark everything else is described against.",ja:"広がりがあり清らかで寛やか。よく溶け、高精白に耐える。鑑評会出品酒の既定であり、他のすべてが比較される基準である。",zh:"開闊、潔淨、寬厚；溶解性佳且能承受極高精米。是鑑評會出品酒的預設選擇，也是其他品種的比較基準。"}],
            ["Gohyakumangoku","五百万石","1957",{en:"Niigata, Fukui, Toyama",ja:"新潟・福井・富山",zh:"新潟、福井、富山"},
             {en:"Light, dry, clean-edged, with less mid-palate weight. Resists dissolving, which is why it finishes so cleanly. The tanrei style in a grain.",ja:"軽く辛く、輪郭が清らかで、中盤の重さが少ない。溶けにくく、それゆえ後口が澄む。淡麗という酒質を一粒に凝縮したような米。",zh:"輕盈、辛口、輪廓潔淨，中段重量較少。難溶，因此收口極為清爽。可謂濃縮於一粒之中的淡麗風格。"}],
            ["Miyama Nishiki","美山錦","1978",{en:"Nagano, Akita, Yamagata",ja:"長野・秋田・山形",zh:"長野、秋田、山形"},
             {en:"Firm, cool, a little austere, with clean acidity. Cold-tolerant enough for the far north. Mills to about 40% comfortably.",ja:"締まっていて冷たく、やや厳しく、酸が清らか。北の果てでも育つ耐冷性をもつ。40%程度までは無理なく削れる。",zh:"結實、清冷、略顯嚴謹，酸度潔淨。耐寒足以應付極北。約可從容削至 40%。"}],
            ["Ōmachi","雄町","1859",{en:"Okayama",ja:"岡山",zh:"岡山"},
             {en:"Wide, earthy, faintly wild, with a texture nothing else gives. Difficult to grow and to mill; a cult rice with its own festival and its own devotees.",ja:"広く、土の香があり、かすかに野趣を帯び、他にない質感をもつ。栽培も精米も難しい。専用の祭と熱心な愛好者をもつ、崇拝される米である。",zh:"開闊、帶土氣、略顯野性，具有其他品種給不出的質地。栽培與研磨皆難；是一款擁有專屬祭典與死忠信徒的崇拜之米。"}],
            ["Hattan Nishiki","八反錦","1984",{en:"Hiroshima",ja:"広島",zh:"廣島"},
             {en:"Soft, gentle, low-acid; bred for Hiroshima's soft water and the round style that came out of it.",ja:"柔らかく穏やかで酸が低い。広島の軟水と、そこから生まれた丸い酒質のために育成された。",zh:"柔軟、溫和、低酸；為廣島的軟水與由此而生的圓潤酒質而育成。"}],
            ["Dewasansan","出羽燦々","1997",{en:"Yamagata",ja:"山形",zh:"山形"},
             {en:"Clean and softly aromatic, deliberately easy to brew well. Used in the prefecture's certified DEWA33 sake with local yeast and local kōji mould.",ja:"清らかで柔らかく香る。良い酒を造りやすいよう意図して設計された。県産酵母・県産麹菌と組み合わせた認証酒「DEWA33」に用いられる。",zh:"潔淨而柔和芬芳，刻意設計成容易釀好。用於搭配縣產酵母與縣產麴菌的認證酒「DEWA33」。"}],
            ["Koshi Tanrei","越淡麗","2004",{en:"Niigata",ja:"新潟",zh:"新潟"},
             {en:"Yamada Nishiki × Gohyakumangoku: milling tolerance from one parent, Niigata's clean finish from the other. Niigata's answer to needing a rice of its own for daiginjō.",ja:"山田錦×五百万石。精米耐性を一方の親から、新潟らしい清らかな後口をもう一方から受け継ぐ。大吟醸のための自前の米という課題への、新潟の回答である。",zh:"山田錦 × 五百萬石：從一方繼承耐研磨性，從另一方繼承新潟式的潔淨收口。這是新潟對「大吟釀需要自有米種」這一課題的答覆。"}],
            ["Aiyama","愛山","1949",{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},
             {en:"Very large-grained and very soluble, giving a thick, sweet, almost syrupy mouthfeel. Grown in tiny quantity; a house style for a handful of breweries.",ja:"粒がきわめて大きくよく溶け、厚く甘く、蜜のような口当たりを生む。生産量はごく少なく、数えるほどの蔵の看板となっている。",zh:"粒極大且極易溶，帶來厚實、甘甜、近乎糖漿般的口感。產量極少，是少數幾家酒藏的招牌。"}],
            ["Kame no O","亀の尾","1893",{en:"Yamagata, Niigata",ja:"山形・新潟",zh:"山形、新潟"},
             {en:"Sharp, mineral, with a distinctive bitter-clean finish. Nearly lost; revived in the 1980s and now a signature of a few houses.",ja:"鋭くミネラルを感じさせ、独特の苦みを伴う清らかな後口をもつ。ほぼ失われかけたが一九八〇年代に復活し、いまでは数蔵の看板となっている。",zh:"銳利、帶礦物感，收口有獨特的苦韻與潔淨感。曾近乎失傳，1980 年代復育，如今是少數酒藏的標誌。"}],
            ["Hitogokochi","ひとごこち","1994",{en:"Nagano",ja:"長野",zh:"長野"},
             {en:"Easy-going and mild, easier to grow than Miyama Nishiki. Widely used for junmai at everyday prices.",ja:"穏やかで扱いやすく、美山錦より育てやすい。日常価格の純米酒に広く使われる。",zh:"溫和易處理，比美山錦好種。廣泛用於日常價位的純米酒。"}],
            [{en:"Ginpū",ja:"吟風",zh:"吟風"},"吟風","2000",{en:"Hokkaidō",ja:"北海道",zh:"北海道"},
             {en:"The variety that made serious Hokkaidō sake possible; clean and cool, with good cold tolerance. Followed by Suisei and Kita-shizuku.",ja:"本格的な北海道の酒を可能にした品種。清らかで冷たく、耐冷性に優れる。彗星、きたしずくが続いた。",zh:"讓正經的北海道清酒成為可能的品種；潔淨清冷、耐寒性佳。其後有彗星與北雫接續。"}],
            ["Senbon Nishiki","千本錦","2000",{en:"Hiroshima",ja:"広島",zh:"廣島"},
             {en:"A Yamada Nishiki cross bred to ripen earlier and stand up in Hiroshima's conditions.",ja:"山田錦の交配種で、より早く登熟し、広島の条件で倒れにくいよう育成された。",zh:"山田錦的雜交種，育成目標是更早成熟並能在廣島條件下不倒伏。"}],
            [{en:"Ōmachi-derived heirlooms",ja:"雄町系の在来種",zh:"雄町系在來種"},"雄町系在来","—",{en:"Various",ja:"各地",zh:"各地"},
             {en:"Watari-bune (Ibaraki), Shinriki (Nara/Hyōgo), Kokuryō-miyako and others: pre-war varieties revived by single breweries as a point of identity.",ja:"渡船（茨城）、神力（奈良・兵庫）、穀良都など。単独の蔵が自らの拠り所として復活させた戦前品種である。",zh:"渡船（茨城）、神力（奈良／兵庫）、穀良都等：由個別酒藏作為身分標誌而復育的戰前品種。"}]
          ] }
      ]
    },

    { t:"section", id:"statistics",
      title:{ en:"Who grows what", ja:"どこで何が作られているか", zh:"何地種何米" }, jp:"生産の実際",
      body:[
        { t:"p", text:{
          en:"The Ministry of Agriculture publishes brewing-rice production every year. The 2023 crop came to about 87,800 tonnes of brown rice nationally. Three varieties account for more than half of it, and one prefecture for nearly a third of the total.",
          ja:"農林水産省は毎年、酒造好適米の生産状況を公表している。令和五年産は全国で玄米およそ八万七千八百トンであった。三品種で半分以上を占め、一つの県が全体の三割近くを占める。",
          zh:"農林水產省每年公布酒造好適米的生產狀況。令和五年產全國約為糙米八萬七千八百噸。三個品種即占其半數以上，而單一縣份便占全國近三成。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"By variety",ja:"品種別",zh:"依品種"}, jp:"令和5年産",
            body:[{ t:"table", keyCol:true,
              cols:[{en:"Variety",ja:"品種",zh:"品種"},{en:"Tonnes",ja:"トン",zh:"公噸"},{en:"Share",ja:"構成比",zh:"占比"}],
              numCols:[1,2],
              rows:[
                ["山田錦","28,270","32%"],
                ["五百万石","13,874","16%"],
                ["美山錦","5,547","6%"],
                ["雄町","3,121","4%"],
                ["ひとごこち","2,592","3%"],
                ["八反錦1号","1,599","2%"],
                ["出羽燦々","1,357","2%"],
                [{en:"All others (100+ varieties)",ja:"その他（百品種以上）",zh:"其他（逾百品種）"},"—","35%"]
              ] }] },
          { h:{en:"By prefecture",ja:"県別",zh:"依縣別"}, jp:"令和5年産",
            body:[{ t:"table", keyCol:true,
              cols:[{en:"Prefecture",ja:"県",zh:"縣"},{en:"Tonnes",ja:"トン",zh:"公噸"},{en:"Mainly",ja:"主な品種",zh:"主要品種"}],
              numCols:[1],
              rows:[
                [{en:"Hyōgo",ja:"兵庫",zh:"兵庫"},"26,015","山田錦"],
                [{en:"Niigata",ja:"新潟",zh:"新潟"},"11,268","五百万石・越淡麗"],
                [{en:"Okayama",ja:"岡山",zh:"岡山"},"6,511","雄町・山田錦"],
                [{en:"Nagano",ja:"長野",zh:"長野"},"4,596","美山錦・ひとごこち"],
                [{en:"Akita",ja:"秋田",zh:"秋田"},"3,931","秋田酒こまち・美山錦"],
                [{en:"Yamagata",ja:"山形",zh:"山形"},"3,390","出羽燦々・雪女神"]
              ] }] }
        ] },
        { t:"tiny", text:{
          en:"Figures: Ministry of Agriculture, Forestry and Fisheries, 2023 crop estimates as of 31 December. Shares are rounded. Volumes move by several per cent a year with weather and contracted demand.",
          ja:"数値は農林水産省、令和五年産・12月31日現在の推計による。構成比は概数。数量は天候と契約需要により毎年数パーセント動く。",
          zh:"數據來源：農林水產省令和五年產、12 月 31 日現在之推估。占比為概數。產量每年因天候與契作需求變動數個百分點。" } },
        { t:"note", label:{en:"The other three quarters",ja:"残り四分の三",zh:"其餘四分之三"}, text:{
          en:"Designated brewing rice is only about a quarter of the rice that goes into sake. The rest is ordinary eating rice — <em>ippanmai</em> — largely used for futsūshu and for the honjōzō end of the market, and increasingly for junmai too as some brewers argue that a well-grown local eating rice beats a mediocre lot of Yamada Nishiki trucked across the country. The argument is not settled and it is not silly.",
          ja:"指定された酒造好適米は、酒に使われる米の四分の一ほどにすぎない。残りは一般米であり、主として普通酒や本醸造の領域に、そして近年は純米にも用いられている。よく育った地元の飯米は、全国を運ばれてきた平凡な山田錦に勝る、と説く造り手が増えているためである。この議論は決着しておらず、また馬鹿げてもいない。",
          zh:"指定酒造好適米僅占入酒之米的約四分之一。其餘為一般米，主要用於普通酒與本釀造區間，近年也愈來愈多用於純米——因為有些釀造者主張，栽培良好的在地食用米勝過長途運來的平庸山田錦。此爭論尚未有定論，也並不荒謬。" } }
      ]
    },

    { t:"section", id:"muramai",
      title:{ en:"The village system: sake's only formal terroir", ja:"村米制度——日本酒で唯一の公式なテロワール", zh:"村米制度——清酒唯一的正式風土分級" }, jp:"村米制度",
      body:[
        { t:"p", text:{
          en:"In 1887 the Nada breweries began contracting directly with individual villages in inland Hyōgo for their rice, cutting out the merchants. The arrangement — <em>mura-mai seido</em>, the village rice system — has run continuously for well over a century, and in the process produced something that exists nowhere else in sake: a ranked geography of fields.",
          ja:"一八八七年、灘の蔵は仲買を通さず、兵庫内陸の村と直接、米の契約を結びはじめた。この仕組み——村米制度——は一世紀をはるかに超えて途切れず続き、その過程で、日本酒の他のどこにも存在しないものを生んだ。すなわち、格付けされた圃場の地理である。",
          zh:"1887 年，灘的酒藏開始越過中盤商，直接與兵庫內陸的個別村莊簽訂米的契約。這套制度——村米制度——連續運作超過一世紀，並在過程中造就了清酒他處不存在的東西：一份分級的田區地理。" } },
        { t:"p", text:{
          en:"Hyōgo grades its Yamada Nishiki land in a hierarchy that runs <strong>特A-a → 特A-b → 特A → A → B → C</strong>, assessed on soil, slope, day-night temperature swing and long records of what the rice from each district actually does in a mash. The heart of the special-A zone lies in the Yoshikawa and Tōjō districts of Miki City and around Kōdera in Himeji — a belt of clay-rich terraces enclosed by hills, with heavy diurnal swings in September. Rice from a 特A-a district can fetch several times the price of the same variety grown elsewhere, and breweries name the district on the label the way a Burgundy producer names a climat.",
          ja:"兵庫は山田錦の産地を<strong>特A-a → 特A-b → 特A → A → B → C</strong>という階層で格付けする。土壌、傾斜、昼夜の温度差、そして各地区の米が醪のなかで実際にどう振る舞うかの長い記録に基づく評価である。特A地区の中心は、三木市の吉川町と東条、そして姫路の香寺の周辺——丘に囲まれ、粘土質の段丘が連なり、九月の昼夜差が大きい一帯である。特A-a地区の米は、同じ品種を他所で作った米の数倍の値がつくことがあり、蔵はブルゴーニュの造り手がクリマを名乗るように、地区名を酒標に記す。",
          zh:"兵庫將山田錦的產地依<strong>特A-a → 特A-b → 特A → A → B → C</strong>分級，評定依據為土壤、坡度、日夜溫差，以及各地區的米在醪中實際表現的長期紀錄。特A地區的核心位於三木市的吉川町與東條，以及姬路的香寺周邊——一片被丘陵環抱、富含黏土的台地，九月日夜溫差極大。特A-a 地區的米，價格可達同品種他處所產的數倍，而酒藏會像勃根地生產者標示 climat 那樣，把地區名寫上酒標。" } },
        { t:"grid", cols:3, cells:[
          { k:{en:"Established",ja:"開始",zh:"創始"}, v:"1887" },
          { k:{en:"Top grade",ja:"最上位",zh:"最高等級"}, v:"特A-a" },
          { k:{en:"Heartland",ja:"中心地",zh:"核心產地"}, v:{en:"Yoshikawa · Tōjō",ja:"吉川・東条",zh:"吉川・東條"} }
        ] },
        { t:"p", text:{
          en:"It is worth being precise about what this proves. It does not show that a drinker can taste the difference between two special-A villages in a finished daiginjō — nobody has demonstrated that. It shows that a century of brewers, buying with their own money, have consistently concluded that some fields make rice that behaves better in a mash than others, and have been willing to pay a large premium for it year after year. That is a weaker claim than wine terroir and a much stronger one than nothing.",
          ja:"これが何を証明しているかは、正確に述べておくに値する。二つの特A地区の村の違いを、仕上がった大吟醸から飲み手が味わい分けられる——それは示されていない。示されているのは、自らの金で米を買う造り手たちが一世紀にわたり、ある圃場の米は醪のなかで他より良く振る舞うと一貫して結論し、年ごとに大きな上乗せを払い続けてきた、という事実である。ワインのテロワールより弱い主張であり、無よりははるかに強い主張である。",
          zh:"值得把這件事證明了什麼講清楚。它並未證明飲者能從成品大吟釀中嚐出兩個特A村莊的差異——沒有人展示過這一點。它證明的是：一個世紀以來，用自己的錢買米的釀造者始終得出「某些田區的米在醪中表現更好」的結論，並年復一年願意為此支付高額溢價。這比葡萄酒的風土主張要弱，卻遠比什麼都沒有要強。" } }
      ]
    },

    { t:"section", id:"growing",
      title:{ en:"Growing and buying", ja:"栽培と調達", zh:"栽培與採購" }, jp:"田から蔵へ",
      body:[
        { t:"steps", items:[
          { title:{en:"Contract before planting",ja:"作付前の契約",zh:"栽植前簽約"}, jp:"契約栽培",
            text:{en:"Brewing rice is almost never bought on an open market. A brewery agrees volume, variety, district and often a specific farmer before the seed goes in, sometimes years ahead. This is why a shortage is felt two seasons late and a glut lasts three.",
              ja:"酒米が自由市場で買われることはまずない。蔵は種を播く前に、数量・品種・地区、しばしば特定の農家まで取り決める。数年先まで結ぶこともある。不足が二作期遅れて効いてきて、過剰が三年続くのはこのためである。",
              zh:"酒米幾乎不會在公開市場上購買。酒藏在播種前便議定數量、品種、地區，常常還指定特定農家，有時提前數年。這正是短缺會延遲兩個作期才顯現、而過剩則會持續三年的原因。"} },
          { title:{en:"Grow for the core, not the yield",ja:"収量ではなく心白のために作る",zh:"為心白而非產量而種"}, jp:"栽培管理",
            text:{en:"Wide spacing, restrained nitrogen — especially late — and deliberate under-fertilising all reduce protein and encourage a well-formed shinpaku. The farmer is being paid to produce a rice they would not want to eat.",
              ja:"疎植、抑えた窒素——とりわけ後期の——そして意図的な減肥は、いずれもたんぱく質を下げ、整った心白を促す。農家は、自分では食べたくない米を作ることで対価を得ている。",
              zh:"疏植、節制氮肥（尤其是後期），以及刻意減量施肥，都能降低蛋白質並促成形狀良好的心白。農家所獲的報酬，是去生產一種他們自己並不想吃的米。"} },
          { title:{en:"Harvest, dry slowly, inspect",ja:"収穫・緩やかな乾燥・検査",zh:"收穫、緩慢乾燥、檢查"}, jp:"収穫と検査",
            text:{en:"Brewing rice is dried gently to about 15% moisture — fast drying cracks the grain along the shinpaku. It is then inspected and graded, and the grade is recorded on the sack. Cracked grains are the enemy: they shatter in the mill and dissolve uncontrollably in the mash.",
              ja:"酒米は水分およそ15%まで緩やかに乾燥させる。急な乾燥は心白に沿って粒を割る。その後、検査を受けて等級がつき、等級は袋に記録される。胴割れ粒は大敵である。精米機で砕け、醪では制御できずに溶ける。",
              zh:"酒米須緩慢乾燥至含水約 15%——快速乾燥會沿心白使米粒龜裂。之後接受檢查並評級，等級記載於米袋上。胴裂粒是大敵：它們會在精米機中碎裂，並在醪中失控溶解。"} },
          { title:{en:"Rest before milling",ja:"精米前の枯らし",zh:"精米前的靜置"}, jp:"枯らし",
            text:{en:"Freshly harvested rice is too moist to mill well. It is stored for months, and after milling it rests again — <em>karashi</em> — for one to three weeks so the heat and moisture gradient left by the mill can equalise. Skipping this produces uneven soaking and uneven kōji.",
              ja:"収穫直後の米は湿りすぎていて精米に向かない。数か月貯蔵し、精米後にもう一度、一週間から三週間ほど「枯らし」をとる。精米機が残した熱と水分の勾配を均すためである。これを省くと、吸水も麹も不均一になる。",
              zh:"剛收穫的米太濕，不宜精米。須貯藏數月，精米後再靜置一至三週——即「枯らし」——好讓精米機留下的熱與水分梯度趨於均勻。省略此步驟會導致吸水不均、製麴不均。"} }
        ] },
        { t:"p", text:{
          en:"The economics are worth stating plainly. Contract Yamada Nishiki from a special-A district can cost three to four times what ordinary table rice costs per kilogram, and daiginjō throws away half of what is bought. A bottle of top daiginjō therefore starts with roughly six to eight times the raw-material cost of a bottle of futsūshu before a single hour of labour. This, not scarcity or mystique, is most of the price on the shelf.",
          ja:"経済の話は率直に述べておく価値がある。特A地区の契約山田錦は、一キロあたり普通の飯米の三倍から四倍することがあり、大吟醸は買ったものの半分を捨てる。したがって上級の大吟醸一本は、労働時間を一時間も数えないうちに、普通酒一本のおよそ六倍から八倍の原料費から始まる。棚に並ぶ価格の大半は、希少性や神秘ではなく、これである。",
          zh:"經濟面值得直說。特A地區的契作山田錦，每公斤可達一般食用米的三至四倍，而大吟釀又要丟掉買來的一半。因此一瓶頂級大吟釀，在還沒計入任何一小時人工之前，原料成本便已約為一瓶普通酒的六到八倍。架上的價格，多半來自於此，而非稀缺或神祕感。" } }
      ]
    }
,

    { t:"related", items:[
      { href:"milling.html", why:{ en:"What is removed from these grains, and how long it takes.", ja:"この粒から何が取り除かれ、どれだけの時がかかるか。", zh:"從這些米粒上被削掉的是什麼，以及要花多久。" } },
      { href:"ricepolicy.html", why:{ en:"Who is allowed to grow them, and who decides.", ja:"誰がそれを育ててよく、誰がそれを決めるのか。", zh:"誰可以種它們，以及誰來決定。" } },
      { href:"terroir.html", why:{ en:"Whether the field a rice grew in can be tasted.", ja:"米の育った田は、味わいうるものか。", zh:"一塊種出這支米的田，究竟嘗不嘗得出來。" } },
      { href:"ingredients.html", why:{ en:"The same rice in the company of the other three inputs.", ja:"同じ米を、他の三つの原料とともに。", zh:"同樣的米，與另外三項原料放在一起。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- milling */
SAKE.pages["milling"] = {
  kicker: { en: "Making · 03", ja: "造り · 03", zh: "釀造 · 03" },
  title:  { en: "Polishing the Grain", ja: "精米", zh: "精米" },
  jp: "精米歩合と、その意味",
  lede: {
    en: "One number appears on almost every bottle of sake and is understood by almost nobody: the polishing ratio. It is not a measure of quality, a measure of depth, or a measure of how much of the grain's outside was removed — it is a weight ratio, and a surprisingly blunt one. This page is about what actually happens in the two to five days a mill runs, where the protein and the lipid really sit inside a grain of rice, the three different shapes you can leave behind while removing exactly the same weight, what becomes of the two thirds that came off, and why the most interesting brewing happening around milling today is happening in the direction of less.",
    ja: "ほとんどあらゆる瓶に現れ、そしてほとんど誰にも解されていない数がある。精米歩合である。それは品質の尺度でも、深さの尺度でも、粒の外側がどれだけ除かれたかの尺度でもない。重さの比であり、しかも驚くほど鈍い比である。この頁が扱うのは、精米機が回る二日から五日のあいだに実際に何が起きるのか、たんぱく質と脂質は米粒のどこに本当に在るのか、まったく同じ重さを削りながら残しうる三つの異なる形、削れた三分の二はどこへ行くのか、そして今日、精米をめぐって最も面白い醸しが、なぜ「より少なく」の方向で起きているのか、である。",
    zh: "有一個數字幾乎出現在每一支清酒瓶上，卻幾乎沒有人真正理解它：精米步合。它不是品質的量度、不是深度的量度，也不是「穀粒外層被削去多少」的量度——它是一個重量比，而且是個出奇粗糙的比。本頁要談的是：精米機運轉的那兩到五天裡究竟發生了什麼；蛋白質與脂質實際上位於米粒的哪個位置；在削去完全相同重量的前提下，你可以留下哪三種不同的形狀；被削下的那三分之二去了哪裡；以及為何今天圍繞精米所發生最有意思的釀造實驗，方向是「更少」。"
  },
  body: [

    { t:"section", id:"what-it-measures",
      title:{ en:"What the number actually measures", ja:"その数が測っているもの", zh:"這個數字究竟在量什麼" }, jp:"精米歩合",
      body:[
        { t:"p", text:{
          en:"<em>Seimai-buai</em> is the weight of the white rice divided by the weight of the brown rice it started as, written as a percentage. A polishing ratio of 50% means half the weight is gone. That is the whole definition, and three things follow from it that most descriptions leave out.",
          ja:"精米歩合とは、白米の重さを、その元であった玄米の重さで割り、百分率で記したものである。精米歩合50%とは、重さの半分が失われたということである。定義はそれですべてであり、そこから三つのことが導かれる。ほとんどの説明が省いていることである。",
          zh:"「精米步合」是白米的重量除以它原本作為糙米時的重量，以百分比表示。精米步合 50%，意思就是有一半的重量不見了。定義就只有這些——而由此可以推出三件事，是大多數說明都略去不談的。" } },

        { t:"ol", items:[
          { en:"<strong>It is a weight, not a depth.</strong> Because a grain of rice is not a sphere, removing half the weight does not remove a uniform half-thickness from the surface. Where that weight comes off depends entirely on the machine and the method, and two sakes at the same stated ratio can have had quite different parts of the grain taken away.",
            ja:"<strong>それは深さではなく重さである。</strong>米粒は球ではないのだから、重さの半分を除くことは、表面から一様に厚みの半分を除くことではない。その重さがどこから削られるかは、機械と方法に完全に依る。同じ歩合と記された二つの酒が、粒のかなり異なる部分を失っていることがありうる。",
            zh:"<strong>它是重量，不是深度。</strong>由於米粒不是球體，削去一半的重量，並不等於從表面均勻削去一半的厚度。那份重量從哪裡被削掉，完全取決於機器與方法；兩支標示同樣步合的酒，失去的可能是穀粒上相當不同的部位。" },
          { en:"<strong>It is not a quality scale.</strong> It is a cost. Every point of polishing is rice bought and thrown away, plus electricity, plus days of machine time, and the price of a bottle tracks it closely for that reason rather than because the sake is proportionally better. Below about 50% the returns diminish sharply and the argument becomes one about style, not refinement.",
            ja:"<strong>それは品質の尺度ではない。</strong>費えである。歩合の一点ごとに、買われて捨てられる米があり、電気があり、機械の日数がある。瓶の値がそれに近く従うのはそのためであって、酒が比例して良いからではない。およそ50%より下では見返りは急に鈍り、議論は精緻さではなく酒質についてのものになる。",
            zh:"<strong>它不是品質量表，而是成本。</strong>每多磨一個百分點，就意味著買來又丟掉的米、電力，以及機器運轉的天數；一瓶酒的價格之所以緊跟著它，原因在此，而不是因為酒有等比例地更好。大約 50% 以下，邊際報酬急遽遞減，爭論的內容也從「精緻度」轉為「風格」。" },
          { en:"<strong>It says nothing about the rice.</strong> A 50% polish of a table variety and a 50% polish of Yamada Nishiki are not comparable, because the two grains have different amounts of protein in them to begin with and different arrangements of starch inside. The number is only meaningful alongside the variety, and a label that gives one without the other is telling you half a fact.",
            ja:"<strong>それは米について何も語らない。</strong>飯米の50%と山田錦の50%は比べられない。二つの粒は、そもそも含むたんぱく質の量が異なり、内の澱粉の並びも異なるからである。この数は品種と並べて初めて意味を持ち、一方だけを記した札は、事実の半分を告げているにすぎない。",
            zh:"<strong>它對「米」本身什麼也沒說。</strong>飯米磨到 50% 與山田錦磨到 50% 並不可比，因為兩種穀粒一開始所含的蛋白質量就不同，內部澱粉的排列也不同。這個數字只有與品種並列時才有意義；只給其中一項的酒標，告訴你的只是一半的事實。" }
        ] },

        { t:"defs", items:[
          { term:{ en:"Seimai-buai", ja:"精米歩合", zh:"精米步合" }, jp:"精米歩合", romaji:"seimai-buai",
            def:{ en:"White rice weight ÷ brown rice weight. The figure on the label, and a legally required statement for any of the eight special designations. It is measured on the batch, not on individual grains, so it is an average across a tonne of rice that has not all behaved identically.",
              ja:"白米の重さ÷玄米の重さ。札に載る数であり、八つの特定名称のいずれにおいても表示が法で求められる。粒ごとではなく仕込みごとに測られるから、まったく同じには振舞っていない一トンの米にわたる平均である。",
              zh:"白米重量÷糙米重量。這是印在酒標上的數字，而且對八種特定名稱中的任何一種都是法定必須標示的事項。它是以一批為單位測量、而非逐粒測量，因此是一整噸並非全都表現一致的米的平均值。" } },
          { term:{ en:"Seihaku-ritsu", ja:"精白率", zh:"精白率" }, jp:"精白率", romaji:"seihaku-ritsu",
            def:{ en:"The same quantity under a different name, used in the rice trade rather than the sake trade. Occasionally you will meet <em>seimai-ritsu</em> used loosely for the proportion removed rather than the proportion remaining, which inverts the number — a 40% figure meaning 60% polished. Context usually resolves it; a bottle never uses it.",
              ja:"同じ量の別の名であり、酒の商いではなく米の商いで用いられる。ときに精米率が、残った割合ではなく除かれた割合の意で緩く使われることがある。数が反転し、40%が精米歩合60%を意味することになる。文脈でたいてい判じうる。瓶がそれを用いることはない。",
              zh:"同一個量的另一個名稱，用於米糧業而非清酒業。偶爾你會遇到「精米率」被寬鬆地用來指「被削去的比例」而非「剩下的比例」，這會讓數字反轉——40% 意味著磨掉了 60%。通常靠上下文就能判斷；酒瓶上絕不會這樣用。" } },
          { term:{ en:"The 15% floor", ja:"十五パーセントの床", zh:"百分之十五的底線" }, jp:"麹米の下限", romaji:"kōjimai no kagen",
            def:{ en:"Unrelated to polishing but constantly confused with it: at least 15% of the total rice in any special-designation sake must be kōji rice. Two different percentages appear on the same label and they measure entirely different things.",
              ja:"精米とは関わらぬが、絶えず混同される。特定名称酒においては、総米の15%以上が麹米でなければならない。同じ札に二つの異なる百分率が現れ、それらはまったく別のものを測っている。",
              zh:"與精米無關，卻不斷被混為一談：在任何特定名稱酒中，麴米至少須占總米量的 15%。同一張酒標上會出現兩個不同的百分比，而它們量的是完全不同的東西。" } }
        ] }
      ] },

    { t:"section", id:"inside-the-grain",
      title:{ en:"Where things sit inside a grain", ja:"粒のどこに何があるか", zh:"米粒內部，什麼在哪裡" }, jp:"粒の断面",
      body:[
        { t:"p", text:{
          en:"The whole practice rests on one fact: starch and the unwanted compounds are not mixed evenly through a grain of rice. Protein, lipid, minerals and vitamins concentrate towards the outside; pure starch sits towards the middle, and in a good sake rice the very middle is the <em>shinpaku</em>, an opaque core of loosely packed starch that kōji hyphae can penetrate. Polishing is an attempt to keep the second thing and discard the first, and every technique on this page is an argument about how to do that with the least waste.",
          ja:"この営みの全体は一つの事実に立つ。澱粉と、望まれぬ成分とは、米粒のなかで均しく混ざってはいない。たんぱく質、脂質、無機質、ビタミンは外側へ寄り、純粋な澱粉は中ほどに在る。そして良い酒米では、その最も中ほどが心白——麹の菌糸が入りうる、疎に詰んだ澱粉の不透明な芯である。精米とは、後者を保ち前者を捨てる試みであり、この頁のあらゆる技術は、それを最も無駄なく行う仕方についての論である。",
          zh:"整套做法立基於一個事實：澱粉與不受歡迎的成分，在米粒中並非均勻混合。蛋白質、脂質、礦物質與維生素集中於外側；純澱粉位於偏中心處，而在一款好的酒米裡，最中心的那一塊就是「心白」——一團結構疏鬆、麴的菌絲能夠穿入的不透明澱粉核。精米就是一場「保住後者、捨棄前者」的嘗試，而本頁上的每一項技術，都是在論證該如何以最少的浪費做到這件事。" } },

        { t:"figure",
          caption:{
            en:"A grain of sake rice in section, with the layers named and the polishing ratios marked as the depths at which they are gone. The point the diagram makes that a list cannot is the shape: the grain is a long ellipse, the protein layer follows the whole of its surface, and a mill that takes weight preferentially off the ends leaves the protein along the sides in place. That single geometric fact is the entire argument behind the flat-polishing methods further down the page.",
            ja:"酒米の粒の断面。層に名を付し、精米歩合を、それらが失われる深さとして記した。一覧にはなしえず図がなしうるのは、形を示すことである。粒は長い楕円であり、たんぱく質の層はその表面の全体に沿い、そして端から優先して重さを削る機械は、側面に沿うたんぱく質をそのままに残す。この一つの幾何の事実が、頁の下方にある扁平精米の論の全体である。",
            zh:"酒米米粒的剖面，標出各層名稱，並把精米步合標示為「這些層在何種深度消失」。這張圖能做到而條列做不到的，是呈現形狀：米粒是一個長橢圓，蛋白質層沿著它的整個表面分布；而一台優先從兩端削去重量的機器，會把沿著側面的蛋白質原封不動地留下。正是這一項幾何事實，構成了本頁下方扁平精米論證的全部。" },
          svg: function (lang, L) {
            var W = 760, H = 336, CX = 250, CY = 160, RX = 190, RY = 78;
            function ell(sx, sy) {
              var d = "", i, n = 48, a, x, y;
              for (i = 0; i <= n; i++) {
                a = i / n * Math.PI * 2;
                x = CX + Math.cos(a) * RX * sx;
                y = CY + Math.sin(a) * RY * sy;
                d += (i ? " L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
              }
              return d + " Z";
            }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var layers = [
              { k:1.00, f:"#B09E7C" },
              { k:0.90, f:"#C7B89A" },
              { k:0.70, f:"#DACFB8" },
              { k:0.50, f:"#EDE5D2" },
              { k:0.35, f:"#F5F1E6" }
            ];
            var i;
            for (i = 0; i < layers.length; i++) {
              s += '<path d="' + ell(Math.sqrt(layers[i].k), Math.sqrt(layers[i].k)) + '" fill="' + layers[i].f + '" stroke="#CDC6B9"/>';
            }
            /* the shinpaku */
            s += '<path d="' + ell(Math.sqrt(0.16), Math.sqrt(0.16)) + '" fill="#FBFAF7" stroke="#CDC6B9"/>';
            s += '<text x="' + CX + '" y="' + (CY + 4) + '" text-anchor="middle" font-size="12" fill="#55504A">心白</text>';
            /* ratio callouts along the top */
            var marks = [
              { k:0.90, c:"#B09E7C", t:"90%", n:{ en:"the bran and germ are gone", ja:"糠と胚芽が落ちる", zh:"糠層與胚芽已去" } },
              { k:0.70, c:"#C7B89A", t:"70%", n:{ en:"honjōzō, most junmai", ja:"本醸造・多くの純米", zh:"本釀造、多數純米" } },
              { k:0.50, c:"#DACFB8", t:"50%", n:{ en:"daiginjō begins here", ja:"ここから大吟醸", zh:"大吟釀自此開始" } },
              { k:0.35, c:"#EDE5D2", t:"35%", n:{ en:"the competition band", ja:"鑑評会の帯", zh:"鑑評會的區間" } }
            ];
            /* the named layers, listed at the right */
            var names = [
              { jp:"果皮・種皮", n:{ en:"hull remnants and seed coat", ja:"かひ・しゅひ", zh:"果皮與種皮" }, f:"#B09E7C" },
              { jp:"糊粉層", n:{ en:"aleurone — protein, lipid, minerals", ja:"こふんそう", zh:"糊粉層——蛋白質、脂質、礦物質" }, f:"#C7B89A" },
              { jp:"外層胚乳", n:{ en:"outer endosperm — still protein-rich", ja:"がいそうはいにゅう", zh:"外層胚乳——仍富含蛋白質" }, f:"#DACFB8" },
              { jp:"内層胚乳", n:{ en:"inner endosperm — starch", ja:"ないそうはいにゅう", zh:"內層胚乳——澱粉" }, f:"#EDE5D2" },
              { jp:"心白", n:{ en:"the opaque core kōji can enter", ja:"しんぱく", zh:"麴能進入的不透明核" }, f:"#FBFAF7" }
            ];
            var NX = 468, NY = 66;
            s += '<text x="' + NX + '" y="' + (NY - 16) + '" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "外から内へ" : lang === "zh" ? "由外而內" : "FROM THE OUTSIDE IN") + '</text>';
            for (i = 0; i < names.length; i++) {
              var ny = NY + i * 30;
              s += '<rect x="' + NX + '" y="' + (ny - 10) + '" width="13" height="13" fill="' + names[i].f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (NX + 21) + '" y="' + ny + '" font-size="11.5" fill="#201E1B">' + names[i].jp + '</text>';
              s += '<text x="' + (NX + 21) + '" y="' + (ny + 13) + '" font-size="8.5" fill="#8B857C">' + L(names[i].n) + '</text>';
            }
            /* ratio key beneath the grain */
            var KY = 268;
            s += '<text x="60" y="' + (KY - 12) + '" font-size="9.5" letter-spacing="1.2" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "その歩合で失われる層" : lang === "zh" ? "該步合下失去的那一層" : "THE LAYER EACH RATIO REMOVES") + '</text>';
            for (i = 0; i < marks.length; i++) {
              var kx = 60 + i * 172;
              s += '<rect x="' + kx + '" y="' + (KY - 9) + '" width="11" height="11" fill="' + marks[i].c + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (kx + 17) + '" y="' + KY + '" font-size="11" fill="#201E1B">' + marks[i].t + '</text>';
              s += '<text x="' + (kx + 17) + '" y="' + (KY + 13) + '" font-size="8.5" fill="#8B857C">' + L(marks[i].n) + '</text>';
            }
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "断面は模式であり、層の厚みは比例していない。心白の大きさと形は品種ごとに大きく異なる。"
                  : lang === "zh" ? "剖面為示意，各層厚度並非按比例；心白的大小與形狀因品種而有很大差異。"
                  : "The section is schematic and the layers are not to scale. The size and shape of the shinpaku vary a great deal between varieties.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"note", text:{
          en:"The germ — the embryo — is the single richest source of lipid in the grain and is gone by about 90%, which is why even the least-polished sake on the market has had some milling done to it. Brown rice sake exists as a curiosity and tastes emphatically of the things polishing exists to remove.",
          ja:"胚芽は粒のうち脂質を最も多く含む部分であり、およそ90%で落ちる。市場にある最も磨かぬ酒でさえ、いくらかの精米を経ている理由がそこにある。玄米の酒は珍奇として存在し、精米が除くために在るところのものの味を、はっきりと持っている。",
          zh:"胚芽是米粒中脂質最豐富的部位，大約在 90% 時就被磨掉了——這正是為何市面上磨得最少的清酒，也仍然經過了一定程度的精米。糙米釀的酒作為一種獵奇之物確實存在，而它嚐起來，正好強烈地就是精米所要去除的那些東西。" } }
      ] },

    { t:"section", id:"the-clock",
      title:{ en:"The machine, and the clock", ja:"機械と、時計", zh:"機器，與那只時鐘" }, jp:"竪型精米機",
      body:[
        { t:"p", text:{
          en:"A modern mill is a vertical cylinder in which the rice circulates against a rotating abrasive roll, grain against stone and grain against grain, for hours or days. The single most important thing about it is that it is slow, and that it must be slow: friction makes heat, heat drives moisture out of the grain unevenly, and a grain that dries unevenly cracks. A cracked grain dissolves too fast in the mash and produces exactly the coarse, heavy flavours the polishing was meant to prevent, so the whole job is a negotiation between the clock and the temperature gauge.",
          ja:"現代の精米機は、回る砥石に対して米が循環する縦の筒であり、粒は石に、そして粒は粒に、何時間も何日も当たり続ける。それについて最も大切なのは、遅いということ、そして遅くなければならぬということである。摩擦は熱を生み、熱は粒から水分を不均一に奪い、不均一に乾いた粒は割れる。割れた粒は醪のなかで速く溶けすぎ、精米が防ぐはずであった粗く重い味をまさに生む。この仕事の全体は、時計と温度計とのあいだの交渉である。",
          zh:"現代精米機是一具直立圓筒，米在其中對著旋轉的磨石循環——粒對石、粒對粒——持續數小時或數日。關於它最重要的一件事是：它很慢，而且必須慢。摩擦生熱，熱會讓穀粒不均勻地失去水分，而不均勻乾燥的米粒會裂。裂開的米粒在醪中溶解得太快，正好產生精米原本要防止的那種粗糙厚重的味道——所以整件工作，就是一場時鐘與溫度計之間的談判。" } },

        { t:"figure",
          caption:{
            en:"How long the mill runs. The curve is not linear and it is not close to linear: the last few points of polishing take longer than the first thirty, because every point removed is a point removed from a smaller grain that is also more fragile and has to be handled more gently. Two figures here are as reported — about twelve hours to seventy per cent, and upwards of a hundred to thirty-five — and the rest of the curve is drawn between and beyond them. The practical consequence is the one nobody mentions on a label: a competition daiginjō occupies a mill for the better part of a week, and a brewery has only so many mills.",
            ja:"精米機がどれだけ回るか。曲線は線形ではなく、線形に近くもない。最後の数点は、最初の三十点よりも長くかかる。削られる一点ごとに、それはより小さく、より脆く、より優しく扱わねばならぬ粒からの一点となるからである。ここで報告されているのは二つの数である——七十パーセントまでおよそ十二時間、三十五パーセントまで百時間を超える——曲線の残りは、その間と、その先に引いたものである。実際の帰結は、札には誰も記さぬものである。鑑評会の大吟醸は一週の大半、精米機を占める。そして蔵の持つ精米機の数には限りがある。",
            zh:"精米機要運轉多久。這條曲線不是線性的，而且離線性很遠：最後那幾個百分點所花的時間，比最前面的三十點還要長——因為每削去一點，都是從一顆更小、也更脆弱、必須更輕柔對待的米粒上削去的。此處有兩個數字來自報導——磨到 70% 約需十二小時，磨到 35% 則超過一百小時——曲線的其餘部分，是在兩者之間與之外描出的。實際後果是酒標上沒有人會提的那一項：一支鑑評會等級的大吟釀，會占用一台精米機將近一週，而一家酒藏的精米機數量有限。" },
          svg: function (lang, L) {
            var W = 760, H = 424, X0 = 88, X1 = 690, Y0 = 56, Y1 = 258, HIGH = 200;
            function px(r) { return X0 + (100 - r) / 78 * (X1 - X0); }
            function py(h) { return Y1 - h / HIGH * (Y1 - Y0); }
            var pts = [[100, 0], [90, 4], [80, 7], [70, 12], [60, 20], [50, 35], [40, 66], [35, 108], [30, 140], [23, 178]];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var g, i, d = "";
            for (g = 0; g <= HIGH; g += 50) {
              s += '<line x1="' + X0 + '" y1="' + py(g) + '" x2="' + X1 + '" y2="' + py(g) + '" stroke="#EFEDE7"/>';
              s += '<text x="' + (X0 - 9) + '" y="' + (py(g) + 3.5) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' + g + '</text>';
            }
            for (g = 100; g >= 30; g -= 10) {
              s += '<line x1="' + px(g).toFixed(1) + '" y1="' + Y0 + '" x2="' + px(g).toFixed(1) + '" y2="' + Y1 + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(g).toFixed(1) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + g + '%</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            for (i = 0; i < pts.length; i++) d += (i ? " L" : "M") + px(pts[i][0]).toFixed(1) + " " + py(pts[i][1]).toFixed(1);
            s += '<path d="' + d + '" fill="none" stroke="#B09E7C" stroke-width="2"/>';
            var reported = { 70:1, 35:1 };
            for (i = 0; i < pts.length; i++) {
              var isRep = reported[pts[i][0]];
              s += '<rect x="' + (px(pts[i][0]) - (isRep ? 4.5 : 2.5)).toFixed(1) + '" y="' + (py(pts[i][1]) - (isRep ? 4.5 : 2.5)).toFixed(1) +
                   '" width="' + (isRep ? 9 : 5) + '" height="' + (isRep ? 9 : 5) + '" fill="' + (isRep ? "#7C6B52" : "#CDC6B9") + '"/>';
            }
            s += '<text x="' + (px(70) - 10).toFixed(1) + '" y="' + (py(12) - 9).toFixed(1) + '" text-anchor="end" font-size="10.5" fill="#7C6B52">70% · ' +
                 (lang === "ja" ? "十二時間ほど" : lang === "zh" ? "約十二小時" : "about 12 hours") + '</text>';
            s += '<text x="' + (px(35) - 10).toFixed(1) + '" y="' + (py(108) + 4).toFixed(1) + '" text-anchor="end" font-size="10.5" fill="#7C6B52">35% · ' +
                 (lang === "ja" ? "百時間を超える" : lang === "zh" ? "超過一百小時" : "over 100 hours") + '</text>';
            s += '<text x="' + (px(23) - 10).toFixed(1) + '" y="' + (py(178) + 4).toFixed(1) + '" text-anchor="end" font-size="9.5" fill="#8B857C">23% · ' +
                 (lang === "ja" ? "一週間ほどと伝えられる" : lang === "zh" ? "據稱約需一週" : "reported at about a week") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 14) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "精米に要する時間・時間" : lang === "zh" ? "精米所需時間・小時" : "HOURS IN THE MILL") + '</text>';
            s += '<text x="' + X0 + '" y="' + (Y1 + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "精米歩合・左ほど磨かず、右ほど磨く" : lang === "zh" ? "精米步合・越往右磨得越多" : "POLISHING RATIO — LESS POLISHED AT THE LEFT") + '</text>';
            /* what the heat does — read left to right under the chart */
            function tw(t, size) { var w = 0, k; for (k = 0; k < t.length; k++) w += (t.charCodeAt(k) > 0x2E80 ? 1.0 : 0.52); return w * size; }
            function wrap(text, isCjk, max) {
              var out = [], k;
              if (isCjk) { for (k = 0; k < text.length; k += max) out.push(text.slice(k, k + max)); return out; }
              var wd = text.split(" "), line = "";
              for (k = 0; k < wd.length; k++) {
                if ((line + " " + wd[k]).replace(/^ /, "").length > max) { out.push(line); line = wd[k]; }
                else line = line ? line + " " + wd[k] : wd[k];
              }
              if (line) out.push(line);
              return out;
            }
            var cjk = (lang !== "en");
            var why = [
              { en:"friction heats", ja:"摩擦が熱を生む", zh:"摩擦生熱" },
              { en:"heat dries unevenly", ja:"熱が偏って乾かす", zh:"熱造成不均勻乾燥" },
              { en:"the grain cracks", ja:"粒が胴割れする", zh:"米粒發生胴裂" },
              { en:"it dissolves too fast", ja:"醪で溶けすぎる", zh:"在醪中溶得太快" },
              { en:"the sake turns coarse", ja:"酒が粗くなる", zh:"酒變得粗糙" }
            ];
            s += '<line x1="30" y1="316" x2="' + (W - 30) + '" y2="316" stroke="#E4E0D6"/>';
            s += '<text x="30" y="338" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "止める理由" : lang === "zh" ? "停機的理由" : "WHY IT STOPS") + '</text>';
            var fs = 10.5, gap = 30, ws = [], wsum = 0;
            for (i = 0; i < why.length; i++) { ws[i] = tw(L(why[i]), fs); wsum += ws[i]; }
            var cx = (W - (wsum + gap * (why.length - 1))) / 2, cy = 366;
            for (i = 0; i < why.length; i++) {
              s += '<text x="' + cx.toFixed(1) + '" y="' + cy + '" font-size="' + fs + '" fill="#6B655C">' + L(why[i]) + '</text>';
              cx += ws[i];
              if (i < why.length - 1) {
                var ax = cx + gap / 2;
                s += '<line x1="' + (ax - 10).toFixed(1) + '" y1="' + (cy - 3.5) + '" x2="' + (ax + 5).toFixed(1) + '" y2="' + (cy - 3.5) + '" stroke="#CDC6B9"/>';
                s += '<path d="M' + (ax + 9).toFixed(1) + ' ' + (cy - 3.5) + ' L' + (ax + 3).toFixed(1) + ' ' + (cy - 7) + ' L' + (ax + 3).toFixed(1) + ' ' + cy + ' Z" fill="#CDC6B9"/>';
                cx += gap;
              }
            }
            var fn = (lang === "ja" ? "大きな蔵は自ら精米し、小さな蔵の多くは委託する。精米機一台が一冬に扱える米の量が、その蔵が造りうる大吟醸の量を決めることがある。"
                      : lang === "zh" ? "大型酒藏自行精米，多數小酒藏則委外。一台精米機一個冬天能處理的米量，有時就決定了那家酒藏能釀多少大吟釀。"
                      : "Large houses mill their own and most small ones send it out. How much rice one mill can handle in a winter sometimes decides how much daiginjō a brewery can make at all.");
            var fl = wrap(fn, cjk, cjk ? 48 : 112);
            for (i = 0; i < fl.length; i++) s += '<text x="30" y="' + (H - 26 + i * 13) + '" font-size="9.5" fill="#8B857C">' + fl[i] + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Dōware", ja:"胴割れ", zh:"胴裂" }, jp:"胴割れ", romaji:"dōware",
            def:{ en:"A crack across the grain, caused by moisture leaving unevenly — in the field, in drying, or in the mill. Cracked grains are invisible in a sack and obvious in a mash, where they disintegrate instead of dissolving slowly, and a batch with many of them produces a heavy, rough sake no amount of later care will fix. Mills are run slowly, stopped to cool, and monitored for exactly this.",
              ja:"粒を横切る割れであり、水分が偏って出ることによる。田で、乾燥で、あるいは精米機のなかで起きる。割れた粒は袋のなかでは見えず、醪のなかでは明らかである。ゆっくり溶けるのではなく崩れるからである。それを多く含む仕込みは、のちのいかなる手当てでも直らぬ重く粗い酒を生む。精米機がゆっくり回され、冷ますために止められ、監視されるのは、まさにこのためである。",
              zh:"橫貫米粒的裂痕，成因是水分不均勻地散失——可能發生在田裡、乾燥過程中，或精米機內。裂開的米粒在米袋中看不出來，在醪中卻一目了然：它們不是緩慢溶解，而是直接崩解。含有大量裂粒的一批米，會釀出厚重粗糙、事後再怎麼補救也救不回來的酒。精米機之所以慢慢轉、停機降溫、全程監控，正是為了這件事。" } },
          { term:{ en:"Karashi", ja:"枯らし", zh:"枯（靜置）" }, jp:"枯らし", romaji:"karashi",
            def:{ en:"The rest after milling. Rice leaves the mill hot and low in moisture, and if it goes straight to washing it absorbs water far too fast and unevenly. So it is bagged and left — typically two to four weeks, sometimes less — until the moisture through the grain has equalised and the temperature has come back to the room's. It is the least visible step in the whole process and one of the few that cannot be shortened by spending money.",
              ja:"精米ののちの休みである。米は熱く、水分を減らして精米機を出る。そのまま洗米へ回せば、水を速すぎ、かつ偏って吸う。ゆえに袋に詰めて置く。おおむね二週から四週、時にそれより短く、粒のなかの水分が均しくなり、温度が室のそれへ戻るまで。工程の全体のなかで最も目に見えぬ一段であり、金をかけて短縮しえぬ数少ない一段でもある。",
              zh:"精米之後的靜置。米離開精米機時是熱的、含水量偏低；若直接送去洗米，它會吸水過快且不均勻。因此要裝袋靜置——通常兩到四週，有時更短——直到穀粒內部的水分達到均衡、溫度也回到室溫為止。這是整個流程中最不顯眼的一步，也是少數幾個無法靠花錢縮短的步驟之一。" } },
          { term:{ en:"Itaku seimai", ja:"委託精米", zh:"委外精米" }, jp:"委託精米", romaji:"itaku seimai",
            def:{ en:"Milling sent out to a specialist. A vertical mill is expensive, takes floor space, needs a dust and noise arrangement, and sits idle for half the year, so a majority of small breweries have never owned one. The consequence is that the polishing ratio on a small brewery's bottle is often a number it bought rather than a number it made, and that the specialist millers are an invisible and rather influential part of the industry.",
              ja:"精米を専門の業者へ出すことである。竪型精米機は高く、床を取り、粉塵と騒音の手当てを要し、年の半ばは遊んでいる。ゆえに小さな蔵の多くは、そもそも持ったことがない。帰結として、小さな蔵の瓶に載る精米歩合は、その蔵が作った数ではなく買った数であることが多い。そして専門の精米業者は、目に見えず、かなり影響力のある産業の一部である。",
              zh:"把精米委託給專業業者。直立式精米機昂貴、占地、需要處理粉塵與噪音，而且一年有半年閒置——因此多數小型酒藏從來沒有擁有過一台。其結果是：小酒藏瓶身上的精米步合，往往是它「買來」的數字，而非它「做出來」的數字；而專業精米業者，則是這個產業中一個看不見、卻相當有影響力的環節。" } }
        ] }
      ] },

    { t:"section", id:"three-shapes",
      title:{ en:"Three shapes, one weight", ja:"同じ重さ、三つの形", zh:"同樣的重量，三種形狀" }, jp:"球形・原形・扁平",
      body:[
        { t:"p", text:{
          en:"Here is the part that most accounts of sake never reach. Take the same grain, remove the same forty per cent of its weight, and you can finish with three quite different objects — and they do not make the same sake. The reason is that a grain tumbling in a mill rotates chaotically about its short axis, so the stone meets the ends far more often than the flanks. The traditional result is a grain ground towards a sphere: the ends are gone, the flanks are barely touched, and the protein along the flanks is still there. Two alternatives correct this, and the newer of the two arrived commercially in the autumn of 2018.",
          ja:"ここから先は、日本酒についてのほとんどの記述が届かぬところである。同じ粒を取り、同じ四十パーセントの重さを除いても、三つのかなり異なるものが残りうる。そしてそれらは同じ酒を作らない。理由は、精米機のなかで転がる粒が短い軸を中心に乱れて回るため、石が端に当たる回数が側面に当たる回数よりはるかに多いことである。伝統の結果は、球へ向かって削られた粒である。端は失われ、側面はほとんど触れられず、側面に沿うたんぱく質はなお其処に在る。二つの代替がこれを正し、そのうち新しいほうは二〇一八年の秋に商いへ出た。",
          zh:"接下來這部分，是多數清酒論述從未觸及的。取同一顆米粒、削去同樣百分之四十的重量，你可以得到三種相當不同的東西——而它們釀不出同一種酒。原因在於：在精米機中翻滾的米粒會繞著短軸雜亂旋轉，因此磨石碰到兩端的次數，遠多於碰到側腹。傳統的結果是一顆被磨向球形的米粒：兩端沒了，側腹幾乎沒被碰到，而沿著側腹的蛋白質依然留在那裡。有兩種替代方案修正了這一點，其中較新的一種在二〇一八年秋季進入商業市場。" } },

        { t:"figure",
          caption:{
            en:"The same grain, the same weight removed, three ways. Spherical polishing is what an unmodified mill does and it is the reason a deeply polished grain looks like a pearl; original-form polishing reduces length, width and thickness in proportion; flat polishing attacks the thickness and leaves the width. The reported claim for the flat method is the striking one: protein removal at sixty per cent equivalent to what spherical polishing achieves at forty, which if it holds means a brewery can stop a mill two days earlier, throw away a fifth less rice, and put a higher number on the label than the sake tastes like.",
            ja:"同じ粒、同じ重さを、三つの仕方で。球形精米は手を加えぬ精米機がなすことであり、深く磨いた粒が真珠のように見える理由である。原形精米は長さと幅と厚みを比例して減らす。扁平精米は厚みを攻め、幅を残す。扁平の法について報じられている主張は際立っている——六十パーセントにおけるたんぱく質の除去が、球形精米の四十パーセントに相当するというのである。それが保たれるならば、蔵は精米機を二日早く止め、米を五分の一少なく捨て、そして酒の味よりも高い数を札に載せうることになる。",
            zh:"同一顆米粒、削去同樣的重量，三種做法。球形精米是一台未經改造的精米機自然會做的事，也是深度精磨的米粒看起來像珍珠的原因；原形精米則按比例縮減長度、寬度與厚度；扁平精米攻擊厚度，保留寬度。關於扁平法所報導的主張相當引人注目：在 60% 時的蛋白質去除量，相當於球形精米在 40% 時所達成的。若此說成立，意味著酒藏可以早兩天停下精米機、少丟掉五分之一的米，並在酒標上印出一個高於這支酒實際口感所對應的數字。" },
          svg: function (lang, L) {
            var W = 760, H = 348;
            function grain(cx, cy, rx, ry, fill, stroke) {
              var d = "", i, n = 40, a, x, y;
              for (i = 0; i <= n; i++) {
                a = i / n * Math.PI * 2;
                x = cx + Math.cos(a) * rx;
                y = cy + Math.sin(a) * ry;
                d += (i ? " L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
              }
              return '<path d="' + d + ' Z" fill="' + fill + '" stroke="' + stroke + '"/>';
            }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var cols = [
              { cx:150, jp:"球形精米", rom:"kyūkei", rx:52, ry:48,
                n:{ en:"spherical", ja:"きゅうけい", zh:"球形" },
                t:{ en:"what an unmodified mill does: the ends go, the flanks stay", ja:"手を加えぬ精米機の仕事。端が落ち、側面は残る", zh:"未改造精米機的做法：兩端被削去，側腹留下" } },
              { cx:380, jp:"原形精米", rom:"genkei", rx:74, ry:34,
                n:{ en:"original form", ja:"げんけい", zh:"原形" },
                t:{ en:"length, width and thickness reduced in proportion", ja:"長さ・幅・厚みを比例して減らす", zh:"長度、寬度與厚度按比例縮減" } },
              { cx:610, jp:"扁平精米", rom:"henpei", rx:88, ry:26,
                n:{ en:"flat", ja:"へんぺい", zh:"扁平" },
                t:{ en:"thickness attacked, width kept — most protein removed", ja:"厚みを攻め、幅を残す。たんぱく質を最も除く", zh:"攻擊厚度、保留寬度——去除最多蛋白質" } }
            ];
            var CY = 118, i;
            for (i = 0; i < cols.length; i++) {
              var c = cols[i];
              s += grain(c.cx, CY, 92, 40, "#F2EFE8", "#DED8CB");
              s += grain(c.cx, CY, c.rx, c.ry, "#C0AF8E", "#A08F73");
              s += '<text x="' + c.cx + '" y="' + (CY + 84) + '" text-anchor="middle" font-size="13.5" fill="#201E1B">' + c.jp + '</text>';
              s += '<text x="' + c.cx + '" y="' + (CY + 98) + '" text-anchor="middle" font-size="9" fill="#ADA79E">' + c.rom + ' · ' + L(c.n) + '</text>';
              var tl = (lang === "en") ? L(c.t).split(":") : [L(c.t)];
              s += '<text x="' + c.cx + '" y="' + (CY + 118) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(c.t) + '</text>';
            }
            s += '<text x="30" y="46" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "同じ粒・同じ重さを除いた結果" : lang === "zh" ? "同一顆米・削去同樣重量後的結果" : "THE SAME GRAIN, THE SAME WEIGHT REMOVED") + '</text>';
            s += '<text x="730" y="46" text-anchor="end" font-size="9.5" fill="#ADA79E">' +
                 (lang === "ja" ? "淡い輪郭は玄米" : lang === "zh" ? "淺色輪廓為糙米" : "the pale outline is the brown grain") + '</text>';
            /* the claim */
            s += '<rect x="30" y="266" width="700" height="46" fill="#EDE5D2" stroke="#DED8CB"/>';
            s += '<text x="44" y="286" font-size="12" fill="#201E1B">' +
                 (lang === "ja" ? "報じられている主張——扁平の60%が、球形の40%に相当する" : lang === "zh" ? "所報導的主張——扁平 60% 相當於球形 40%" : "the reported claim — flat at 60% matches spherical at 40%") + '</text>';
            s += '<text x="44" y="302" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "たんぱく質の除去について。サタケが二〇一八年秋に機械を出し、広島県の試験醸造が醸造特性を調べている。"
                  : lang === "zh" ? "指的是蛋白質的去除。佐竹於二〇一八年秋推出機器，廣島縣的試驗釀造則在檢驗其釀造特性。"
                  : "For protein removal. Satake released the machine in autumn 2018 and Hiroshima's prefectural trial brewing has been examining what it does in the tank.") + '</text>';
            s += '<text x="30" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "図の形は誇張してある。実際の差は目で見えるが、これほど劇的ではない。"
                  : lang === "zh" ? "圖中的形狀有所誇張；實際差異肉眼可見，但沒有這麼戲劇化。"
                  : "The shapes are exaggerated. The real difference is visible to the eye but not this dramatic.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"panel", tint:"rice",
          title:{ en:"Why this matters more than it sounds", ja:"聞こえよりも大切である理由", zh:"為何這比聽起來更重要" },
          body:[
            { t:"p", text:{
              en:"If a method can remove the protein of a forty-per-cent polish while only taking forty per cent — sorry, while leaving sixty per cent — of the grain, then three of sake's least comfortable facts get smaller at once. Less rice is thrown away, which is the environmental cost nobody names; less time is spent in the mill, which is electricity and the bottleneck on how much premium sake a brewery can make; and the price of a daiginjō falls, because most of what you are paying for is the discarded rice. The catch is the label. The polishing ratio is a legal statement of weight, so a flat-polished sake at 60% must say 60% even if it tastes like a 40%, and the designation system will call it a ginjō rather than a daiginjō. The regulation measures the thing that has stopped being the point.",
              ja:"もしある法が、粒の六十パーセントを残しながら四十パーセント精米のたんぱく質を除きうるならば、日本酒の最も居心地の悪い事実のうち三つが、一度に小さくなる。捨てられる米が減る。誰も名指さぬ環境の費えである。精米機のなかの時間が減る。電気であり、蔵が造りうる上等な酒の量を決める隘路である。そして大吟醸の値が下がる。払っているものの多くは、捨てられた米だからである。落とし穴は札である。精米歩合は重さについての法の言明であるから、扁平で磨いた60%の酒は、40%のように味わわれようとも60%と記さねばならず、特定名称の制度はそれを大吟醸ではなく吟醸と呼ぶ。規制は、もはや要点ではなくなったものを測っている。",
              zh:"如果某種方法能在只削去四十％——抱歉，是在留下六十％——的前提下，去除相當於四十％精米的蛋白質，那麼清酒最令人不安的三個事實會同時縮小：被丟掉的米變少了，而那正是沒有人指名的環境成本；待在精米機裡的時間變短了，而那是電力，也是限制一家酒藏能做多少高階酒的瓶頸；大吟釀的價格會下降，因為你付的錢大半就是那些被丟掉的米。問題出在酒標。精米步合是關於重量的法定陳述，因此一支以扁平法磨到 60% 的酒，即使嚐起來像 40%，也必須標示 60%，而特定名稱制度會把它叫做吟釀而非大吟釀。法規所量度的，正是那個已經不再是重點的東西。" } }
          ] }
      ] },

    { t:"section", id:"the-bran",
      title:{ en:"What comes off, and where it goes", ja:"削られたものの行方", zh:"被削下的東西去了哪裡" }, jp:"糠の四つの層",
      body:[
        { t:"p", text:{
          en:"A brewery polishing a tonne of rice to fifty per cent produces half a tonne of bran, and it does not throw it away. The bran comes off in sequence and is collected in fractions, each one different from the last and each with its own market — which is why the honest environmental accounting of polishing is not as bad as the raw figure suggests, and why a brewery's mill is a small by-products business attached to a drinks business.",
          ja:"一トンの米を五十パーセントまで磨く蔵は、半トンの糠を生む。そしてそれを捨てはしない。糠は順に落ち、画分として集められる。それぞれが前のものと異なり、それぞれが自らの市場を持つ。精米についての正直な環境の勘定が、生の数から思われるほど悪くない理由であり、蔵の精米機が、飲みものの商いに付いた小さな副産の商いである理由でもある。",
          zh:"一家把一噸米磨到五十％的酒藏，會產生半噸的糠——而它不會把這些糠丟掉。糠是依序落下的，並分段收集，每一段都與前一段不同，也各自擁有自己的市場。這正是為什麼精米在環境帳上的誠實計算，沒有原始數字看起來那麼糟；也是為什麼一家酒藏的精米機，其實是附掛在酒業之上的一門小型副產品生意。" } },

        { t:"table",
          caption:{ en:"The fractions, in the order they come off", ja:"落ちる順の糠の画分", zh:"依落下順序排列的糠" },
          cols:[{ en:"Fraction", ja:"画分", zh:"分段" }, { en:"Roughly from", ja:"おおよその範囲", zh:"大致範圍" }, { en:"What is in it", ja:"中身", zh:"內容" }, { en:"Where it goes", ja:"行き先", zh:"去向" }],
          jpCols:[0],
          rows:[
            ["赤糠", { en:"100 → about 90%", ja:"100→90%ほど", zh:"100 → 約 90%" },
             { en:"Hull remnants, seed coat, the aleurone layer and the germ. Dark, oily, strongly flavoured, and the richest part of the grain in everything except starch.", ja:"果皮の名残、種皮、糊粉層、そして胚芽。色が濃く、脂を含み、味が強い。澱粉を除くあらゆるものにおいて粒の最も富んだ部分である。", zh:"果皮殘留、種皮、糊粉層與胚芽。色深、含油、味道強烈；除了澱粉之外，它是穀粒中各方面最豐富的部分。" },
             { en:"Pickling beds, fertiliser, animal feed, rice-bran oil. The classic <em>nuka</em> of a Japanese kitchen is this fraction.", ja:"漬け床、肥料、飼料、米油。日本の台所の糠とは、この画分である。", zh:"醃漬床、肥料、飼料、米糠油。日本廚房裡所謂的「糠」，就是這一段。" }],
            ["中糠", { en:"about 90 → 75%", ja:"90→75%ほど", zh:"約 90 → 75%" },
             { en:"Outer endosperm with a good deal of protein still in it. Paler, less oily, less strongly flavoured.", ja:"なおたんぱく質を多く含む外層の胚乳である。色は淡く、脂は少なく、味は弱い。", zh:"仍含相當蛋白質的外層胚乳。色較淺、油脂較少、味道也較弱。" },
             { en:"Rice flour for confectionery, crackers, feed, and industrial starch.", ja:"菓子や煎餅の米粉、飼料、工業用澱粉。", zh:"製作糕點與米果的米粉、飼料，以及工業用澱粉。" }],
            ["白糠", { en:"about 75 → 60%", ja:"75→60%ほど", zh:"約 75 → 60%" },
             { en:"Nearly pure starch with a little protein. Fine, white, and effectively rice flour that has not been ground on purpose.", ja:"わずかなたんぱく質を伴うほぼ純粋な澱粉である。細かく、白く、意図して挽いたのではない米粉である。", zh:"幾乎純粹的澱粉，含少量蛋白質。細緻、潔白，實際上就是一種並非刻意磨出的米粉。" },
             { en:"Confectionery, rice crackers, noodles, and — increasingly — shōchū and amazake made from the by-product of sake.", ja:"菓子、煎餅、麺、そして次第に、日本酒の副産から造る焼酎や甘酒。", zh:"糕點、米果、麵條，以及——愈來愈常見的——以清酒副產品製成的燒酎與甘酒。" }],
            ["特上糠", { en:"below about 60%", ja:"60%より下", zh:"約 60% 以下" },
             { en:"The bran off a ginjō or daiginjō polish: almost entirely inner endosperm starch, and cleaner than most rice flour on sale.", ja:"吟醸や大吟醸の精米から落ちる糠である。ほぼすべてが内層胚乳の澱粉であり、市販の米粉の多くより清らかである。", zh:"從吟釀或大吟釀精米中落下的糠：幾乎全是內層胚乳的澱粉，比市面上多數米粉都更潔淨。" },
             { en:"Premium confectionery, wagashi, and the better grades of rice flour. A brewery that polishes deeply is also, quietly, a supplier to pâtissiers.", ja:"上等の菓子、和菓子、そして良い等級の米粉。深く磨く蔵は、密かに菓子職人への供給者でもある。", zh:"高級糕點、和菓子，以及較好等級的米粉。磨得深的酒藏，也悄悄地是甜點師傅的供應商。" }]
          ] },

        { t:"note", text:{
          en:"None of this makes deep polishing free. The bran fetches far less than the rice cost to grow, the paddy that produced it is charged to the bottle either way, and a brewery does not mill in order to sell flour. But it does mean that the common statement that a 35% daiginjō &#8220;throws away two thirds of the rice&#8221; is wrong in one specific way: the two thirds leaves the building in a sack with a price on it, and ends up in a pickle barrel or a cake.",
          ja:"これによって深い精米が無償になるわけではない。糠は、米を育てた費えよりはるかに安く、それを生んだ田はいずれにせよ瓶に計上され、そして蔵は粉を売るために磨くのではない。だがこれは、35%の大吟醸が「米の三分の二を捨てる」というよく述べられる言い方が、一つの特定の点で誤りであることを意味する。その三分の二は、値の付いた袋に入って建物を出てゆき、漬物樽か菓子のなかに行き着くのである。",
          zh:"這些都不會讓深度精米變成免費的。糠所能換得的價錢遠低於種出這些米的成本，而生產它的稻田無論如何都要算在這瓶酒頭上，酒藏也不是為了賣米粉而精米。但它確實意味著：「一支 35% 的大吟釀丟掉了三分之二的米」這個常見說法，在一個具體的地方是錯的——那三分之二是裝在標了價的袋子裡離開這棟建築的，最後進了醃漬桶或一塊糕點裡。" } }
      ] },

    { t:"section", id:"the-arms-race",
      title:{ en:"The arms race, and the other direction", ja:"軍拡と、その逆", zh:"軍備競賽，以及相反的方向" }, jp:"低精白",
      body:[
        { t:"p", text:{
          en:"Between the 1980s and the 2010s the polishing ratio became a competitive number, and competitive numbers only go one way. Fifty became forty, forty became thirty-five, thirty-five became twenty-three, and a handful of houses have gone to single figures for bottles that exist largely to be the lowest number. The rice thrown away at those levels is enormous, the difference in the glass below about thirty-five per cent is genuinely difficult to find, and a good many of the brewers doing it will say so privately.",
          ja:"一九八〇年代から二〇一〇年代にかけて、精米歩合は競われる数となった。そして競われる数は一つの方へしか行かない。五十が四十となり、四十が三十五となり、三十五が二十三となり、いくつかの蔵は、最も低い数であることをおおむねの存在理由とする瓶のために一桁へ至った。その水準で捨てられる米は膨大であり、およそ三十五パーセントより下では杯のなかの差を見出すことは実に難しく、そしてそれを行う造り手の少なからぬ者が、私的にはそう述べる。",
          zh:"從一九八〇年代到二〇一〇年代，精米步合變成了一個競逐的數字，而競逐的數字只會往一個方向走。五十變成四十、四十變成三十五、三十五變成二十三，而少數幾家酒藏更做到了個位數——那些酒瓶存在的理由，大半就是「擁有最低的那個數字」。在那種水準下被丟棄的米極為龐大，而大約三十五％以下，杯中的差異其實非常難以辨認；不少從事此道的釀造者，私下也會這麼說。" } },

        { t:"figure",
          caption:{
            en:"Every polishing ratio published by the two hundred and twelve houses in the <a href=\"directory.html\">directory</a>, counted once per figure printed on a label. The spikes are not brewing decisions so much as legal ones: fifty, sixty and seventy per cent are the thresholds at which a sake becomes a daiginjō, a ginjō and a honjōzō, and the trade mills to the number rather than through it. Drawn from the directory data, so it changes when the directory does.",
            ja:"<a href=\"directory.html\">名鑑</a>に載る二百十二の蔵が公表している精米歩合のすべてを、酒標に刷られた数ごとに一度数えたもの。突出は造りの判断というより法の判断である。五十、六十、七十パーセントは、その酒が大吟醸・吟醸・本醸造となる境目であり、業界はその数を越えてではなく、その数に合わせて磨く。名鑑の値から描いているため、名鑑が変われば図も変わる。",
            zh:"<a href=\"directory.html\">名鑑</a>中兩百一十二家酒藏所公布的每一個精米步合，依酒標上印出的每個數字各計一次。那些尖峰與其說是釀造的決定，不如說是法律的決定：五十、六十、七十％正是一款酒成為大吟釀、吟釀與本釀造的門檻，而業界是磨到那個數字，而非磨過它。此圖依名鑑資料繪出，名鑑一變，圖也隨之改變。" },
          svg: function (lang, L) {
            var D = (typeof SAKE !== "undefined" && SAKE.MILLDIST) || null;
            var W = 760, H = 384, X0 = 58, X1 = W - 20, Y0 = 30, Y1 = H - 74;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            if (!D || !D.bins || !D.bins.length) {
              return s + '<text x="' + (W / 2) + '" y="' + (H / 2) + '" text-anchor="middle" font-size="12" fill="#8B857C">' +
                     L({ en: "no data", ja: "データなし", zh: "無資料" }) + '</text></svg>';
            }
            var LOW = 18, HIGH = 100, i;
            function px(v) { return X0 + (v - LOW) / (HIGH - LOW) * (X1 - X0); }
            var max = 0;
            for (i = 0; i < D.bins.length; i++) if (D.bins[i].n > max) max = D.bins[i].n;
            var step = 25, top = Math.ceil(max / step) * step;
            function py(n) { return Y1 - (n / top) * (Y1 - Y0); }

            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#FBFAF7" stroke="#CDC6B9"/>';
            for (var g = step; g <= top; g += step) {
              s += '<line x1="' + X0 + '" y1="' + py(g) + '" x2="' + X1 + '" y2="' + py(g) + '" stroke="#EDEAE2"/>';
              s += '<text x="' + (X0 - 8) + '" y="' + (py(g) + 4) + '" text-anchor="end" font-size="9.5" fill="#ADA79E">' + g + '</text>';
            }

            var marks = [
              { v: 70, t: { en: "honjōzō", ja: "本醸造", zh: "本釀造" } },
              { v: 60, t: { en: "ginjō", ja: "吟醸", zh: "吟釀" } },
              { v: 50, t: { en: "daiginjō", ja: "大吟醸", zh: "大吟釀" } }
            ];
            for (i = 0; i < marks.length; i++) {
              var mx = px(marks[i].v);
              s += '<line x1="' + mx + '" y1="' + Y0 + '" x2="' + mx + '" y2="' + Y1 + '" stroke="#A08F73" stroke-dasharray="3 3"/>';
              s += '<text x="' + (mx - 5) + '" y="' + (Y0 + 13) + '" text-anchor="end" font-size="9.5" fill="#7C6B52">' + L(marks[i].t) + '</text>';
            }

            var bw = Math.max(4, (X1 - X0) / (HIGH - LOW) - 1.6);
            for (i = 0; i < D.bins.length; i++) {
              var b = D.bins[i], x = px(b.v) - bw / 2, y = py(b.n);
              s += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) +
                   '" height="' + (Y1 - y).toFixed(1) + '" fill="#EDE5D2" stroke="#B4AC9C" stroke-width="0.8"/>';
              if (b.n >= 40) {
                var tw = String(b.n).length * 6.2 + 5;
                s += '<rect x="' + (px(b.v) - tw / 2).toFixed(1) + '" y="' + (y - 15).toFixed(1) +
                     '" width="' + tw.toFixed(1) + '" height="13" fill="#FBFAF7"/>';
                s += '<text x="' + px(b.v) + '" y="' + (y - 5) + '" text-anchor="middle" font-size="9.5" fill="#55504A">' + b.n + '</text>';
              }
            }

            for (var v = 20; v <= 100; v += 10) {
              s += '<line x1="' + px(v) + '" y1="' + Y1 + '" x2="' + px(v) + '" y2="' + (Y1 + 5) + '" stroke="#CDC6B9"/>';
              s += '<text x="' + px(v) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="10" fill="#8B857C">' + v + '</text>';
            }
            s += '<text x="' + X0 + '" y="' + (Y1 + 36) + '" font-size="10" fill="#8B857C">' +
                 L({ en: "← more milled away", ja: "← より多く削っている", zh: "← 削掉得越多" }) + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 36) + '" text-anchor="end" font-size="10" fill="#8B857C">' +
                 L({ en: "more grain left →", ja: "より多く残している →", zh: "留下得越多 →" }) + '</text>';
            s += '<text x="' + (X0 - 8) + '" y="' + (Y0 - 10) + '" text-anchor="end" font-size="9.5" fill="#ADA79E">' +
                 L({ en: "bottles", ja: "本数", zh: "瓶數" }) + '</text>';

            if (D.low) {
              s += '<line x1="' + px(D.low.v) + '" y1="' + Y1 + '" x2="' + px(D.low.v) + '" y2="' + (Y1 + 44) + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (px(D.low.v) + 4) + '" y="' + (Y1 + 52) + '" font-size="9.5" fill="#7C6B52">' + D.low.v + '% · ' + D.low.jp + '</text>';
            }
            if (D.high) {
              s += '<line x1="' + px(D.high.v) + '" y1="' + Y1 + '" x2="' + px(D.high.v) + '" y2="' + (Y1 + 44) + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (px(D.high.v) - 4) + '" y="' + (Y1 + 52) + '" text-anchor="end" font-size="9.5" fill="#7C6B52">' + D.high.v + '% · ' + D.high.jp + '</text>';
            }
            return s + '<text x="' + X0 + '" y="' + (H - 6) + '" font-size="9" fill="#ADA79E">n = ' + D.n + '</text></svg>';
          } },


        { t:"compare", cols:2, items:[
          { title:{ en:"Downward", ja:"下へ", zh:"往下" }, jp:"磨きの競争",
            text:{ en:"The case for deep polishing is real and it is not only marketing. Below fifty per cent a mash ferments more slowly and more cleanly, the ginjō esters survive better, and the sake genuinely is more precise — up to a point. The technical ceiling arrives somewhere around thirty to thirty-five per cent, after which the brewer is removing starch from starch and paying for the privilege. Everything below that is a statement about the brewery rather than about the sake, which is a legitimate thing for a bottle to be as long as everyone involved knows that is what it is.",
              ja:"深く磨くことの理は本当に在り、宣伝だけのものではない。五十パーセントより下では醪はより緩やかに、より清らかに発酵し、吟醸のエステルはよりよく残り、酒は実に精確になる——或る点までは。技術の天井はおよそ三十から三十五パーセントのあたりに訪れ、そののち造り手は澱粉から澱粉を除き、その特権に金を払っている。それより下のすべては、酒についてではなく蔵についての言明である。関わる誰もがそうと承知している限り、瓶がそうであることは正当である。",
              zh:"深度精磨的理由是真實的，並不只是行銷。低於五十％，醪會發酵得更慢也更潔淨，吟釀酯類保存得更好，酒確實更加精準——但只到某個點為止。技術上的天花板大約落在三十到三十五％之間，過了之後，釀造者就是在從澱粉裡削去澱粉，並為這份特權付錢。再往下的一切，都是關於「酒藏」而非關於「酒」的宣示——只要所有相關的人都清楚那是什麼，一支酒瓶這樣做也完全正當。" } },
          { title:{ en:"Upward", ja:"上へ", zh:"往上" }, jp:"低精白",
            text:{ en:"The more interesting movement of the last decade runs the other way. A growing number of houses are releasing junmai at eighty or ninety per cent — sometimes at ninety-nine, with only the germ removed — and treating the protein and the lipid as ingredients rather than faults. These sakes are broad, savoury, distinctly grainy, usually acidic, and made to be warmed and drunk with food. They also use a third less rice per bottle than a daiginjō, which their makers tend to mention. The category has no legal name; it goes by <em>teiseihaku</em>, low-polish, and the number on the label has become a badge in the opposite direction.",
              ja:"この十年のより面白い動きは、逆へ走っている。八十や九十パーセントの純米を出す蔵が増えており、時に九十九、胚芽のみを除いたものさえある。たんぱく質と脂質を、欠点ではなく原料として扱っている。これらの酒は広く、旨味があり、はっきりと穀物であり、たいてい酸が高く、燗にして料理とともに飲むために造られている。そして一本あたりの米を、大吟醸より三分の一少なく使う。造り手はそれに触れることが多い。この区分に法の名はない。低精白と呼ばれ、札の上の数は、逆の方向における徽章となった。",
              zh:"過去十年更有意思的動向，是往相反方向走的。愈來愈多酒藏推出八十％或九十％的純米——有時甚至到九十九％，只去掉胚芽——並把蛋白質與脂質當作原料而非缺陷。這些酒開闊、帶旨味、明顯有穀物感，通常酸度較高，是為了溫飲、佐餐而釀的。它們每瓶所用的米也比大吟釀少了三分之一，而釀造者往往會提到這一點。這個類別沒有法定名稱，人們稱之為「低精白」；而酒標上的數字，已經成為一枚方向相反的徽章。" } }
        ] },

        { t:"p", text:{
          en:"Both directions are answers to the same question, which is what the outside of a grain of rice is for. The industry spent a century deciding it was for throwing away and has spent about fifteen years discovering that it was an ingredient all along, and the most likely outcome is not that one side wins but that the polishing ratio stops being read as a ranking — which is the single most useful thing that could happen to the number on the label.",
          ja:"いずれの方向も、同じ一つの問いへの答えである。米粒の外側は何のために在るのか、である。産業は一世紀をかけてそれは捨てるためのものであると決め、およそ十五年をかけて、それは初めから原料であったと気づいてきた。最もありうる帰結は、どちらかが勝つことではなく、精米歩合が序列として読まれるのをやめることである。札の上のその数に起こりうる、最も有用な出来事である。",
          zh:"兩個方向都是對同一個問題的回答：米粒的外層究竟是為了什麼而存在。這個產業花了一個世紀斷定它是用來丟掉的，又花了大約十五年發現它其實一直都是原料；而最可能的結局並不是某一方獲勝，而是精米步合不再被當成排名來讀——那將是這個印在酒標上的數字，所能遇到最有用的一件事。" } },

        { t:"tiny", text:{
          en:"Related: <a href=\"rice.html\">Sake Rice</a> for the varieties and the shinpaku, <a href=\"equipment.html\">The Kura &amp; Its Tools</a> for the mill in the building, <a href=\"standards.html\">Law &amp; Standards</a> for what the ratio legally obliges, <a href=\"sustainability.html\">The Footprint</a> for the paddy behind the discarded weight, and <a href=\"value.html\">What Money Buys</a> for where it goes on the price.",
          ja:"関連——品種と心白は<a href=\"rice.html\">酒米</a>、建物のなかの精米機は<a href=\"equipment.html\">蔵と道具</a>、歩合が法において何を義務づけるかは<a href=\"standards.html\">法令と基準</a>、捨てられた重さの背後の田は<a href=\"sustainability.html\">酒の足あと</a>、値のどこに現れるかは<a href=\"value.html\">金が買うもの</a>。",
          zh:"相關：品種與心白見<a href=\"rice.html\">酒米</a>；建築中的精米機見<a href=\"equipment.html\">酒藏與器具</a>；步合在法律上課予什麼義務見<a href=\"standards.html\">法規與標準</a>；被丟棄重量背後的稻田見<a href=\"sustainability.html\">清酒的足跡</a>；它落在價格的哪個位置見<a href=\"value.html\">金錢買到什麼</a>。" } }
      ] },

    { t:"related", items:[
      { href:"rice.html", why:{ en:"The grain before anything is taken off it.", ja:"何も取り除かれる前の粒。", zh:"還沒被削掉任何東西之前的那顆米。" } },
      { href:"classification.html", why:{ en:"The ratios the law attaches names to.", ja:"法が名を結びつける歩合。", zh:"法律替哪些步合安上了名字。" } },
      { href:"value.html", why:{ en:"What the extra polishing actually costs, per bottle.", ja:"余分な精米が一本あたり実際にいくらかかるか。", zh:"多磨掉的那些，換算到每一瓶實際要多少錢。" } },
      { href:"kasu.html", why:{ en:"Where the rice that did not become sake goes.", ja:"酒とならなかった米の行き先。", zh:"沒有變成酒的那些米，去了哪裡。" } }
    ] }
  ]
};


/* ---- ------------------------------------------ ricepolicy */
SAKE.pages["ricepolicy"] = {
  kicker: { en: "Making · 04", ja: "造り · 04", zh: "釀造 · 04" },
  title:  { en: "The Politics of the Grain", ja: "米をめぐる政治", zh: "稻米的政治" },
  jp: "米政策と酒",
  lede: {
    en: "Sake rice is not food, and Japanese law has always known it. It is inspected under a separate standard, grown under contracts that would have been illegal fifty years ago, and it exists in the quantities it does partly because the state spent half a century paying farmers not to grow the other kind. This page follows the grain out of the brewery and into the field, the co-operative and the ministry — because the reason a particular bottle exists usually begins several steps before anyone thought about brewing.",
    ja: "酒米は食糧ではなく、日本の法はつねにそれを知っていた。それは別の基準のもとに検査され、五十年前ならば違法であったであろう契約のもとに育てられ、そして今その量で存在するのは、一つには、国が半世紀を費やしてもう一方の米を作らぬよう農に払ったからである。この頁は、穀を蔵の外へ、田へ、組合へ、そして省へと追う。ある一本の瓶が存在する理由は、たいてい、誰かが造りについて考えるより幾段も前に始まっているからである。",
    zh: "酒米不是糧食，而日本的法律一向清楚這一點。它依另一套標準受檢、在五十年前會屬違法的契約下被栽種，而它之所以有今日的產量，部分原因是國家花了半個世紀付錢請農民不要種另一種米。本頁跟著這顆穀粒走出酒藏，進入田地、農協與省廳——因為某一支酒之所以存在的理由，通常在任何人想到「釀造」之前好幾步就已經開始了。"
  },
  body: [

    { t:"section", id:"two-rices",
      title:{ en:"Two kinds of rice, two kinds of law", ja:"二種の米、二種の法", zh:"兩種米，兩套法" }, jp:"主食用と醸造用",
      body:[
        { t:"p", text:{
          en:"Japan grows staple rice for people to eat and brewing rice for breweries to buy, and the two are separated at every level of the system: different varieties, different agronomy, different inspection standard, different contracts, different prices. A farmer growing Yamada Nishiki is not growing a premium version of the rice in a rice cooker. He is growing a different crop with a different customer.",
          ja:"日本は人が食うための主食の米と、蔵が買うための醸造の米とを育てる。そして両者は、仕組みのあらゆる階において分かたれている。品種が異なり、農法が異なり、検査の基準が異なり、契約が異なり、値が異なる。山田錦を育てる農は、炊飯器のなかの米の上等な版を育てているのではない。異なる客をもつ異なる作物を育てているのである。",
          zh:"日本種植供人食用的主食米，以及供酒藏採購的釀造米，而這兩者在制度的每一個層級上都是分開的：品種不同、農法不同、檢驗標準不同、契約不同、價格不同。一位種山田錦的農民，並不是在種「電鍋裡那種米的高級版」。他種的是一種面對不同客戶的、不同的作物。" } },

        { t:"grid", cols:2, cells:[
          { h:{ en:"What the eater wants", ja:"食う者が望むもの", zh:"吃的人要什麼" }, jp:"主食用米",
            d:{ en:"Small, dense grains with enough protein and fat to taste of something, a sticky texture when cooked, and yields high enough to make the field pay. Koshihikari and its descendants are bred for the mouth.",
              ja:"小さく詰まった粒であり、何かの味をなすに足る蛋白と脂を持ち、炊けば粘り、そして田を採算に合わせるに足る収量を持つ。コシヒカリとその子孫は口のために育てられた。",
              zh:"小而緊實的米粒，帶有足夠的蛋白質與脂肪讓它嘗得出味道，煮熟後有黏性，且產量高到足以讓田地划算。越光及其後代是為了口而育成的。" } },
          { h:{ en:"What the brewer wants", ja:"造る者が望むもの", zh:"釀的人要什麼" }, jp:"酒造好適米",
            d:{ en:"Large grains that survive being polished to half their weight, a soft opaque core for the kōji to grow into, and as little protein and fat as possible, because those become amino acids and off-flavours. Every one of these traits costs yield, and several of them make the plant harder to farm.",
              ja:"重さの半ばまで磨かれて生き延びる大きな粒、麹が伸び入るための柔らかく白い心、そしてできる限り少ない蛋白と脂である。それらはアミノ酸と雑味となるからである。これらの性質のいずれもが収量を減らし、そのいくつかは草を育てにくくする。",
              zh:"能撐過被磨掉一半重量的大顆米粒、供麴菌長入的柔軟白色心白，以及盡可能少的蛋白質與脂肪，因為那些會變成胺基酸與雜味。上述每一項特徵都要犧牲產量，其中好幾項還讓這種稻更難栽種。" } }
        ] },

        { t:"p", text:{
          en:"That divergence is why sake rice needs its own legal category. Under Japan's agricultural inspection law it is classified as jōzōyō genmai — brown rice for brewing — and graded against a standard written for it, not against the standard used for the rice you eat.",
          ja:"その分かれこそ、酒米が自らの法の区分を要する理由である。日本の農産物の検査の法のもと、それは醸造用玄米——醸造のための玄米——として分けられ、それのために書かれた基準に照らして等級づけられる。あなたが食う米に用いられる基準に照らしてではない。",
          zh:"這種分岔，正是酒米需要自己一套法律類別的原因。在日本的農產品檢驗法規下，它被歸類為「釀造用玄米」，並依照專為它撰寫的標準評定等級，而不是依照你吃的那種米所用的標準。" } }
      ] },

    { t:"section", id:"grades",
      title:{ en:"The stamp that makes a daiginjō legal", ja:"大吟醸を合法にする判", zh:"讓大吟釀合法的那個印" }, jp:"農産物検査",
      body:[
        { t:"p", text:{
          en:"Here is a connection that almost nobody outside the trade knows. The labelling rules for tokutei meishōshu — the special designations, from honjōzō up to junmai daiginjō — require that the rice used has been inspected under the agricultural products inspection law and graded third class or better. The grade is not a quality boast on a label. It is the gate. A brewery using ungraded rice, however good, cannot legally call the result a junmai ginjō.",
          ja:"ここに、業界の外のほとんど誰も知らぬ結びつきがある。特定名称酒——本醸造から純米大吟醸に至る特別の呼び名——の表示の定めは、用いられた米が農産物検査法のもとに検査され、三等以上に格づけされていることを求める。等級は札の上の質の誇りではない。門である。検査を受けぬ米を用いる蔵は、それがいかに良かろうと、その成果を純米吟醸と法に適って呼ぶことができない。",
          zh:"這裡有一個業界之外幾乎沒人知道的關聯。「特定名稱酒」——從本釀造到純米大吟釀的各種特別稱謂——的標示規定要求，所用的米必須經過農產品檢驗法的檢驗，並評定為三等以上。等級不是酒標上的品質誇耀，而是一道門。使用未經檢驗之米的酒藏，無論那米有多好，都無法合法地把成果稱為純米吟釀。" } },

        { t:"figure",
          caption:{
            en:"The grading ladder for brewing brown rice. The bar is the minimum share of whole, undamaged grains a lot must reach; the figure at the right is the maximum share of damaged grains allowed. Below third class a lot is ungraded, and sake made from it cannot carry a special designation.",
            ja:"醸造用玄米の等級の梯子。棒は、その一山が達せねばならぬ整粒の最小の割合であり、右の数は許される被害粒の最大の割合である。三等より下は等外であり、それで造られた酒は特定名称を名乗りえない。",
            zh:"釀造用玄米的等級階梯。長條是一批米必須達到的整粒最低比例；右邊的數字是容許的受損粒最高比例。低於三等即為等外，以其釀成的酒不得使用特定名稱。" },
          svg: function (lang, L) {
            var W = 740, H = 322, X = 138, RW = W - X - 128, TOP = 40;
            var rows = [
              { n:{ en:"Tokujō", ja:"特上", zh:"特上" }, jp:"特上", w:90, d:5,  f:"#B09E7C" },
              { n:{ en:"Tokutō", ja:"特等", zh:"特等" }, jp:"特等", w:80, d:10, f:"#BFAF90" },
              { n:{ en:"First class", ja:"一等", zh:"一等" }, jp:"一等", w:70, d:15, f:"#CDBFA2" },
              { n:{ en:"Second class", ja:"二等", zh:"二等" }, jp:"二等", w:60, d:20, f:"#DACFB8" },
              { n:{ en:"Third class", ja:"三等", zh:"三等" }, jp:"三等", w:45, d:30, f:"#E7DFD2" },
              { n:{ en:"Ungraded", ja:"等外", zh:"等外" }, jp:"等外", w:0,  d:0,  f:"#EFEDE7" }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<text x="' + X + '" y="' + (TOP - 16) + '" font-size="9.5" letter-spacing="1.4" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "整粒歩合の下限 %" : lang === "zh" ? "整粒比例下限 %" : "MINIMUM WHOLE-GRAIN SHARE %") + '</text>';
            s += '<text x="' + (W - 118) + '" y="' + (TOP - 16) + '" font-size="9.5" letter-spacing="1.4" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "被害粒 上限" : lang === "zh" ? "受損粒上限" : "DAMAGED, MAX") + '</text>';
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], y = TOP + i * 42 + (i === 5 ? 28 : 0);
              s += '<text x="' + (X - 14) + '" y="' + (y + 15) + '" text-anchor="end" font-size="12" fill="#201E1B">' + L(r.n) + '</text>';
              if (r.w) {
                s += '<rect x="' + X + '" y="' + y + '" width="' + (r.w / 100 * RW) + '" height="21" fill="' + r.f + '" stroke="#CDC6B9"/>';
                s += '<text x="' + (X + r.w / 100 * RW - 8) + '" y="' + (y + 15) + '" text-anchor="end" font-size="11" fill="#55504A">' + r.w + '%</text>';
                s += '<text x="' + (W - 118) + '" y="' + (y + 15) + '" font-size="11" fill="#8B857C">' + r.d + '%</text>';
              } else {
                s += '<rect x="' + X + '" y="' + y + '" width="' + RW + '" height="21" fill="none" stroke="#E1DCD2" stroke-dasharray="3 3"/>';
                s += '<text x="' + (X + 10) + '" y="' + (y + 15) + '" font-size="10.5" fill="#8B857C">' +
                     (lang === "ja" ? "特定名称を名乗れない" : lang === "zh" ? "不得使用特定名稱" : "no special designation permitted") + '</text>';
              }
            }
            var gy = TOP + 5 * 42 + 8;
            s += '<line x1="' + (X - 100) + '" y1="' + gy + '" x2="' + (X + RW + 10) + '" y2="' + gy + '" stroke="#7C6B52" stroke-dasharray="5 3"/>';
            s += '<text x="' + (X - 100) + '" y="' + (gy - 7) + '" font-size="10" font-weight="600" fill="#7C6B52">' +
                 (lang === "ja" ? "この線より上でなければ、純米・吟醸・大吟醸とは名乗れない"
                  : lang === "zh" ? "必須在這條線以上，才能稱為純米、吟釀、大吟釀"
                  : "above this line, and only above it, a bottle may say junmai, ginjō or daiginjō") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Seiryū-buai — the whole-grain share", ja:"整粒歩合", zh:"整粒步合" }, jp:"整粒歩合", romaji:"seiryū-buai",
            def:{ en:"The proportion of a lot that is intact, well-formed grain. It matters to a brewer for a mechanical reason before an aesthetic one: cracked and misshapen grains break up in the polishing machine, absorb water unevenly in the soak, and steam unevenly, so a low share of whole grains makes every subsequent step less controllable.",
              ja:"一山のうち、傷なく形の整った粒の割合である。造り手にとってこれが重んじられるのは、美しさの前に機の理由による。割れ、形の崩れた粒は精米機のなかで砕け、浸漬において不均に水を吸い、蒸しにおいて不均に蒸される。ゆえに整粒の少なさは、その後のあらゆる段を制しにくくする。",
              zh:"一批米之中完整、形狀端正的米粒所占的比例。它對釀酒人之所以重要，機械上的理由先於美學上的：破裂與畸形的米粒在精米機中會碎掉、在浸漬時吸水不均、在蒸米時受熱不均，因此整粒比例低會讓其後每一道工序都更難掌控。" } },
          { term:{ en:"Why the top two grades exist at all", ja:"上の二つの等級がそもそも在る理由", zh:"最上面兩個等級為何存在" }, jp:"特上・特等",
            def:{ en:"Table rice is graded from first class down. Brewing rice has two additional grades above first — tokutō and tokujō — because the differences that matter to a brewery appear above the point where they stop mattering to a cook. A daiginjō polished to thirty-five per cent is a machine's argument with a grain of rice, and the argument goes better if the grain was perfect to begin with.",
              ja:"主食の米は一等から下へ格づけされる。醸造用の米は一等の上に二つの等級——特等と特上——を持つ。蔵にとって重んじられる差が、料理人にとって重んじられなくなる点より上に現れるからである。三十五パーセントまで磨かれる大吟醸とは、機と一粒の米との論であり、その論は、粒が初めから完全であったならば良く運ぶ。",
              zh:"主食米從一等往下分級。釀造米在一等之上還多了兩級——特等與特上——因為對酒藏而言重要的差異，出現在對廚師而言已不再重要的那個點之上。一支磨到百分之三十五的大吟釀，是一台機器與一粒米之間的爭論；而如果那粒米一開始就是完美的，這場爭論會進行得比較順利。" } },
          { term:{ en:"The inspector", ja:"検査する者", zh:"檢驗員" }, jp:"農産物検査員", romaji:"nōsanbutsu kensa-in",
            def:{ en:"Grading is done by registered inspectors, historically through the agricultural co-operatives, on samples drawn from the harvested lot. The stamp on the bag travels with the rice to the brewery and into the brewery's records, which is how the tax office can check a special-designation claim years later.",
              ja:"格づけは登録された検査員により、歴史的には農業の協同組合を通じて、収穫された一山から取られた試料に対して行われる。袋の上の判は米とともに蔵へ渡り、蔵の帳簿へ入る。税務の役所が幾年ののちに特定名称の主張を検めうるのは、そのゆえである。",
              zh:"分級由登記在案的檢驗員執行，歷史上是透過農業協同組合，針對從收穫批次中抽取的樣本進行。米袋上的印記隨著米一路到酒藏、進入酒藏的帳冊——這正是稅務機關得以在數年之後查核某項特定名稱主張的方式。" } }
        ] }
      ] },

    { t:"section", id:"kensa-meigara",
      title:{ en:"The registration that lets a rice name reach a label", ja:"米の名が札に届くための登録", zh:"讓米的名字得以出現在酒標上的那道登錄" }, jp:"産地品種銘柄",
      body:[
        { t:"p", text:{
          en:"A brewery that has grown something remarkable in a contracted field cannot simply say so on the bottle. Between the paddy and the printed word sit four separate legal conditions, three of them belonging to agricultural law rather than to liquor law, and all four have to hold at once. This is the least romantic part of terroir and the part that decides whether any of the rest of it is allowed to be mentioned.",
          ja:"契約した田で目覚ましいものを育てた蔵が、そのまま瓶にそう書けるわけではない。田と刷られた語のあいだには、四つの別々の法の条件が座っており、そのうち三つは酒の法ではなく農の法に属し、四つすべてが同時に成り立たねばならない。風土をめぐるもののうち最も情趣のない部分であり、そして残りのすべてを口にしてよいか否かを決める部分である。",
          zh:"一家酒藏就算在契作田裡種出了了不起的東西，也不能就這樣寫在瓶子上。稻田與印出來的那幾個字之間，坐著四個各自獨立的法律條件，其中三個屬於農業法而非酒稅法，而且四個必須同時成立。這是風土這件事裡最不浪漫的一段，卻也是決定其餘一切能不能被提起的那一段。" } },

        { t:"figure",
          caption:{
            en:"Four gates, and the label is silent unless all four are open. The first two are the ones outsiders never anticipate: a variety must first be designated for that prefecture in the agricultural inspection system, and then an actual crop must be inspected and certified as being that variety. A grower who skips inspection — because it costs money, or because the crop is going straight to one brewery that already knows exactly what it is — puts that brewery in the position of making sake from a named rice it is not allowed to name. The last gate is the liquor-law one, and it is the easiest to satisfy and the most often misread: over half, not half.",
            ja:"四つの門があり、その四つがすべて開かぬ限り札は黙る。外から来た者が思い及ばぬのは初めの二つである。品種はまず、農産物検査の仕組みのなかでその県について定められねばならず、ついで実際の収穫が検査を受け、その品種であると格付けされねばならない。検査を省く作り手は——費えがかかるから、あるいはその収穫が、それが何であるかをすでに正確に知っている一つの蔵へ直に行くから——その蔵を、名のある米から造りながらその名を名乗りえぬ立場に置く。最後の門は酒の法のものであり、満たすのが最もたやすく、そして最も読み違えられる。半分ではなく、半分を超えること、である。",
            zh:"四道門，四道都打開之前，酒標保持沉默。外來者從來料想不到的是前兩道：一個品種必須先在農產物檢查制度中被指定為該縣的品種，接著實際收成還必須經過檢查、被認定就是那個品種。一位省略檢查的種植者——因為要花錢，或因為這批米會直接送到一家早就確切知道它是什麼的酒藏——等於把那家酒藏放到一個位置上：用一個有名字的米釀酒，卻不被允許說出那個名字。最後一道門屬於酒稅法，最容易滿足，也最常被讀錯：是「超過一半」，不是「一半」。" },
          svg: function (lang, L) {
            var W = 760, H = 300, BX = 30, BW = 160, GAP = 174;
            function tw(t, size) { var w = 0, k; for (k = 0; k < t.length; k++) w += (t.charCodeAt(k) > 0x2E80 ? 1.0 : 0.52); return w * size; }
            function wrap(text, isCjk, max) {
              var out = [], k;
              if (isCjk) { for (k = 0; k < text.length; k += max) out.push(text.slice(k, k + max)); return out; }
              var wd = text.split(" "), line = "";
              for (k = 0; k < wd.length; k++) {
                if ((line + " " + wd[k]).replace(/^ /, "").length > max) { out.push(line); line = wd[k]; }
                else line = line ? line + " " + wd[k] : wd[k];
              }
              if (line) out.push(line);
              return out;
            }
            var cjk = (lang !== "en"), per = cjk ? 15 : 30;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i, j;
            var gates = [
              { jp:"産地品種銘柄", t:{ en:"registered", ja:"登録されている", zh:"已登錄" },
                b:{ en:"the variety is a designated origin-and-variety name for that prefecture", ja:"その品種が、その県の産地品種銘柄として定められている", zh:"該品種被指定為該縣的產地品種銘柄" } },
              { jp:"農産物検査", t:{ en:"inspected", ja:"検査を受けている", zh:"已檢查" },
                b:{ en:"the crop is certified as that variety under the Agricultural Products Inspection Act", ja:"農産物検査法により、その品種であると格付けされている", zh:"依《農產物檢查法》被認定為該品種" } },
              { jp:"三等以上", t:{ en:"graded", ja:"三等以上", zh:"三等以上" },
                b:{ en:"third grade or better, which is also the floor for any special designation", ja:"三等以上。特定名称を名乗るための下限でもある", zh:"三等或以上；這也是特定名稱酒的下限" } },
              { jp:"五割超", t:{ en:"more than half", ja:"半分を超える", zh:"超過一半" },
                b:{ en:"the named rice is over 50% of the rice used, and the percentage is printed with the name", ja:"名を挙げる米が全体の五割を超え、その割合も併記される", zh:"被標示的米超過用米總量的五成，且須同時標明比例" } }
            ];
            s += '<text x="' + BX + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "米の品種名を札に記すための四つの条件" : lang === "zh" ? "把米的品種名印上酒標的四個條件" : "FOUR CONDITIONS BEFORE A RICE VARIETY MAY BE PRINTED") + '</text>';
            for (i = 0; i < gates.length; i++) {
              var x = BX + i * GAP;
              s += '<rect x="' + x + '" y="66" width="' + BW + '" height="104" fill="#F8F6F1" stroke="#DED8CB"/>';
              s += '<rect x="' + x + '" y="66" width="' + BW + '" height="4" fill="#B09E7C"/>';
              s += '<text x="' + (x + 12) + '" y="90" font-size="10.5" fill="#201E1B">' + L(gates[i].t) + '</text>';
              s += '<text x="' + (x + BW - 12) + '" y="90" text-anchor="end" font-size="9" fill="#A39C91">' + gates[i].jp + '</text>';
              var ln = wrap(L(gates[i].b), cjk, per);
              for (j = 0; j < ln.length && j < 5; j++) {
                s += '<text x="' + (x + 12) + '" y="' + (108 + j * 12) + '" font-size="8.5" fill="#8B857C">' + ln[j] + '</text>';
              }
              if (i < gates.length - 1) {
                s += '<line x1="' + (x + BW + 2) + '" y1="118" x2="' + (x + BW + 10) + '" y2="118" stroke="#CDC6B9"/>';
                s += '<path d="M' + (x + BW + 13) + ' 118 L' + (x + BW + 7) + ' 114 L' + (x + BW + 7) + ' 122 Z" fill="#CDC6B9"/>';
              }
            }
            s += '<rect x="' + BX + '" y="192" width="' + (GAP * 3 + BW) + '" height="40" fill="#EDE9E0"/>';
            s += '<text x="' + (BX + 16) + '" y="217" font-size="10.5" fill="#4A453D">' +
                 (lang === "ja" ? "そのとき札は品種を、割合とともに記しうる" : lang === "zh" ? "這時酒標才可以印出品種，並附上比例" : "then, and only then, the label may print the variety with its percentage") + '</text>';
            s += '<rect x="' + (BX + GAP * 3 + BW - 132) + '" y="202" width="116" height="20" fill="#F8F6F1" stroke="#B09E7C"/>';
            s += '<text x="' + (BX + GAP * 3 + BW - 74) + '" y="216" text-anchor="middle" font-size="11" fill="#201E1B">山田錦　80%</text>';
            s += '<text x="' + BX + '" y="256" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "一つでも欠ければ、瓶はその米について何も語らない。米がいかに良かろうとも。"
                  : lang === "zh" ? "只要其中一項不成立，這瓶酒就對自己用的米隻字不提——不論那米有多好。"
                  : "If any one of them fails, the bottle says nothing at all about its rice — however good the rice was.") + '</text>';
            s += '<text x="' + BX + '" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "第三と第四の条件は清酒の製法品質表示基準による。第一と第二は農産物検査法による。"
                  : lang === "zh" ? "第三與第四項出自《清酒之製法品質標示基準》；第一與第二項出自《農產物檢查法》。"
                  : "The third and fourth conditions come from the liquor labelling standard; the first two come from agricultural inspection law.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Origin-and-variety name", ja:"産地品種銘柄", zh:"產地品種銘柄" }, jp:"産地品種銘柄", romaji:"sanchi hinshu meigara",
            def:{ en:"The register that says which varieties an inspector in a given prefecture is permitted to certify by name. A variety bred in one prefecture and then planted in another cannot be certified under its own name in the second until it has been added to that prefecture's list, which is an administrative process with a season's lag. This is one reason prefectural sake rices tend to stay in their prefectures long after any agronomic reason has gone: not a rule against moving them, but a delay in being able to say you did.",
              ja:"ある県の検査員が、名をもって格付けしうる品種はどれかを定める登録である。一つの県で育成された品種が他の県に植えられても、その県の一覧に加えられるまでは、第二の県においてその名で格付けされえない。これは一季の遅れを伴う行政の手続きである。県の酒米が、農学上の理由がとうに消えたのちも県のうちに留まりがちな理由の一つがこれである。動かすことを禁ずる則ではなく、動かしたと言えるようになるまでの遅れである。",
              zh:"這份登錄規定了某個縣的檢查員可以「以名字」認定哪些品種。一個在甲縣育成的品種即使種到乙縣，在它被加進乙縣的名單之前，也無法在乙縣以自己的名字被認定；那是一道帶著一季時差的行政程序。這是為什麼縣產酒米在農學上的理由早就消失之後，仍傾向留在自己縣內的原因之一：不是有規則禁止它們移動，而是「說你移動了」這件事會遲到。" } },
          { term:{ en:"The inspection itself", ja:"検査そのもの", zh:"檢查本身" }, jp:"農産物検査法", romaji:"nōsanbutsu kensa-hō",
            def:{ en:"A registered inspector opens sacks from the lot, judges the brown rice by eye against a standard sample, and certifies variety, origin, crop year and grade. It costs money and takes time, and a grower selling everything to one brewery on a contract has, commercially speaking, no reason to pay for it — the buyer already knows what the sack contains. The reason to pay for it anyway is that without the certificate the brewery cannot use the variety's name, cannot make the sake a special designation, and in practice cannot charge for either.",
              ja:"登録された検査員が、その荷から袋を開け、標準の見本に照らして玄米を目で判じ、品種、産地、産年、等級を証する。費えがかかり、時もかかる。契約により一つの蔵へすべてを売る作り手には、商いの上では、それに払う理由がない。買い手は袋の中身をすでに知っているからである。それでも払う理由は、証明がなければ蔵は品種の名を用いえず、その酒を特定名称となしえず、そして実際には、そのいずれについても代を取りえぬことにある。",
              zh:"一位登錄檢查員從該批中開袋取樣，對照標準樣本以目視判定玄米，並證明品種、產地、產年與等級。這要花錢，也要花時間。一位依契約把全部收成賣給單一酒藏的種植者，就商業而言沒有理由付這筆錢——買方早就知道袋子裡是什麼。但仍然要付的理由是：沒有這張證明，酒藏就不能使用該品種的名字、不能把這支酒做成特定名稱酒，而實際上，這兩件事都是不能收錢的。" } },
          { term:{ en:"Over half, and say how much", ja:"五割を超え、そしてどれだけかを言う", zh:"超過一半，而且要說出多少" }, jp:"使用割合", romaji:"shiyō wariai",
            def:{ en:"The liquor labelling standard permits a rice variety name on the front of a bottle when that rice is more than fifty per cent of the rice used, and requires the percentage to appear with it. Exactly half is not enough. The rule is why so many labels carry a figure that looks oddly specific — <em>Yamada Nishiki 70%</em>, <em>Omachi 55%</em> — and why a blend of two named rices in equal parts can name neither.",
              ja:"清酒の表示基準は、その米が用いた米の五割を超えるとき、瓶の表に品種名を掲げることを許し、その割合を併せて記すことを求める。ちょうど半分では足りない。この則ゆえに、多くの札が奇妙なほど具体的な数を負っている——山田錦七十パーセント、雄町五十五パーセント。そして、名のある二つの米を等分に用いた仕込みは、そのいずれをも名乗りえない。",
              zh:"酒類標示基準允許在瓶身正面標出米的品種名，條件是該米超過所用米量的五成，並且必須同時標明比例。恰好一半並不夠。這條規則說明了為什麼那麼多酒標帶著一個看起來精確得有點奇怪的數字——山田錦 70%、雄町 55%——也說明了為什麼一支用兩種有名的米等量混合的酒，兩個名字都不能寫。" } },
          { term:{ en:"Third grade or better", ja:"三等以上", zh:"三等以上" }, jp:"等級要件", romaji:"tōkyū yōken",
            def:{ en:"Any sake calling itself a special designation — junmai, ginjō, honjōzō and everything built on them — must be made from rice graded third or better, or from brown rice judged equivalent. The threshold is low and almost all sake rice clears it easily; its function is not to raise quality but to close the door on rice that was never inspected at all. The grade requirement and the naming requirement are separate rules, and a bottle can satisfy one and fail the other.",
              ja:"特定名称を名乗る酒——純米、吟醸、本醸造、そしてその上に立つすべて——は、三等以上に格付けされた米、またはこれに相当すると判じられた玄米から造られねばならない。閾は低く、酒米のほとんどは容易に越える。その働きは質を上げることではなく、そもそも検査を受けなかった米に戸を閉ざすことにある。等級の要件と品種名の要件とは別の則であり、一方を満たしながら他方を満たさぬ瓶はありうる。",
              zh:"任何自稱特定名稱酒的酒——純米、吟釀、本釀造，以及建立在它們之上的一切——都必須以評為三等或以上的米、或被判定為相當等級的玄米釀成。這道門檻很低，絕大多數酒米輕鬆通過；它的功能不是提高品質，而是把「根本沒送檢的米」擋在門外。等級要件與品種名要件是兩條不同的規則，一瓶酒可能滿足其一而不滿足另一。" } }
        ] },

        { t:"note", title:{ en:"Where this bites", ja:"これが効いてくる所", zh:"這件事會咬人的地方" }, text:{
          en:"It bites hardest on exactly the projects the industry says it wants: a brewery reviving a lost local variety, a grower with two hectares of something nobody else plants, a prefecture's new cross in its first commercial year. In each case the rice may be excellent and the sake may be excellent, and the bottle is legally mute about the one thing that makes it interesting until the paperwork catches up. Several houses have released such sake with the rice described only in a leaflet inside the box, which is legal, and which tells you how much the printed label is worth to them.",
          ja:"最も強く効いてくるのは、まさに業界が望むと言う類の試みにおいてである。失われた地の品種を蘇らせる蔵、誰も植えぬものを二町歩持つ作り手、県の新たな交配のその最初の商いの年。そのいずれにおいても、米は優れ、酒も優れているかもしれない。そして瓶は、それを面白いものとしているまさにその一事について、書類が追いつくまで法の上で口をきけない。いくつもの家が、そうした酒を、米については箱に入れた栞にのみ記して世に出してきた。それは適法であり、そして刷られた札が彼らにとっていかほどの値打ちであるかを告げている。",
          zh:"它咬得最狠的，恰恰是業界口口聲聲說想要的那些計畫：復育一個失落地方品種的酒藏、擁有兩公頃別人都不種的東西的農家、一個縣的新雜交品種在它第一個商業年份。在每一個案例裡，米可能極好、酒也可能極好，而在文書追上來之前，酒瓶對「讓它有意思的那一件事」在法律上是啞的。已有數家酒藏把這樣的酒推出市面，關於米的說明只放在盒內的一張說明紙上——那是合法的，也告訴了你「印在酒標上」對他們而言值多少。" } }
      ] },

{ t:"section", id:"kanri",
      title:{ en:"The half-century when the state owned the rice", ja:"国が米を持っていた半世紀", zh:"國家擁有稻米的那半個世紀" }, jp:"食糧管理制度",
      body:[
        { t:"p", text:{
          en:"From 1942 Japan ran its rice supply through a state control system built for wartime scarcity and kept for fifty years afterwards. In its full form the government was the buyer and the seller: it set the price it paid farmers, set the price at which rice was sold, and licensed the merchants in between. A brewery did not negotiate with a farmer, because there was nothing to negotiate.",
          ja:"一九四二年より、日本は戦時の乏しさのために築かれ、その後五十年にわたり保たれた国の管理の仕組みを通じて米を配した。その完き形において、政府は買い手であり売り手であった。農に払う値を定め、米が売られる値を定め、その間に立つ商人に免許を与えた。蔵は農と交渉しなかった。交渉すべきものが何もなかったからである。",
          zh:"自一九四二年起，日本以一套為戰時匱乏而建、卻在戰後又維持了五十年的國家管理制度來調配稻米。在它最完整的形態下，政府既是買方也是賣方：它訂定付給農民的價格、訂定稻米出售的價格，並對中間的商人核發執照。酒藏不與農民議價，因為根本沒有東西可議。" } },

        { t:"p", text:{
          en:"That system is the reason a great deal of what sake drinkers now consider normal is barely thirty years old. Contract growing, a brewery naming the village its rice came from, a farmer being paid a premium for a difficult variety, a label carrying a producer's name — none of these were possible as ordinary commerce while the state stood between the field and the tank. The food control law gave way to a new food law in 1995, distribution was progressively freed, and within a decade the direct relationship between brewery and grower had become the defining feature of the quality end of the industry.",
          ja:"その仕組みこそ、今日の飲み手が当たり前と思うものの多くが、ようやく三十年ほどしか経ていない理由である。契約栽培、米の来た村の名を挙げる蔵、難しい品種に上乗せを払われる農、生産者の名を載せる札——国が田と槽のあいだに立っているあいだ、これらのいずれも並の商いとしては成り立ちえなかった。食糧管理法は一九九五年に新たな食糧法へ道を譲り、流通は次第に自由とされ、そして十年のうちに、蔵と育て手との直の関わりは、業界の質の側を定める特徴となった。",
          zh:"那套制度正是為什麼今日飲者視為理所當然的許多事，其實才不到三十年。契作栽培、酒藏指名米來自哪個村、農民因種植困難品種而獲得溢價、酒標上載明生產者姓名——當國家還站在田與槽之間時，這些都不可能作為尋常商業存在。糧食管理法在一九九五年讓位給新的糧食法，流通逐步開放，而在十年之內，酒藏與種植者之間的直接關係，已成為業界品質那一端的定義性特徵。" } },

        { t:"note", label:{ en:"Read a modern back label with this in mind", ja:"これを念頭に今の裏の札を読む", zh:"帶著這件事去讀現代的背標" },
          text:{
            en:"\"Yamada Nishiki, Special-A district, Yokawa, Miki City, contract grown by the Nakamura family\" is not marketing decoration. It is a sentence that could not have been written on a Japanese sake label for most of the twentieth century, and its presence tells you the brewery is paying a premium and taking a risk on a specific field.",
            ja:"「山田錦、特A地区、三木市吉川、中村家契約栽培」は売りの飾りではない。それは二十世紀のほとんどを通じ、日本酒の札に書かれえなかった一文であり、その存在は、蔵が上乗せを払い、ある定まった田に賭けていることを告げる。",
            zh:"「山田錦，特 A 地區，三木市吉川，中村家契作」不是行銷裝飾。這是一句在二十世紀大部分時間裡都不可能出現在日本酒標上的話，而它的存在告訴你：這家酒藏正在支付溢價，並為某一塊特定的田承擔風險。" } }
      ] },

    { t:"section", id:"gentan",
      title:{ en:"Paying farmers not to grow rice", ja:"米を作らぬことに払う", zh:"付錢請農民不要種稻" }, jp:"減反政策",
      body:[
        { t:"p", text:{
          en:"By the end of the 1960s Japan was growing more rice than it could eat. Consumption per head had begun a long decline that has never stopped, and the state was buying a surplus it could not sell. The response, from around 1970, was production adjustment — gentan: limits on government purchase, a ban on opening new paddy, and subsidies to convert rice fields to other crops.",
          ja:"一九六〇年代の終わりまでに、日本は食いうるより多くの米を作っていた。一人あたりの消費は、今なお止まぬ長い下りを始めており、国は売りえぬ余りを買っていた。一九七〇年ごろよりの応えが生産調整——減反である。政府の買入の限り、新たな田を開くことの禁、そして田を他の作物へ転ずることへの補助である。",
          zh:"到一九六〇年代末，日本種出的稻米已超過它吃得掉的量。人均消費開始了一段至今未曾停止的長期下滑，而國家正在收購它賣不掉的過剩。約自一九七〇年起的因應之道就是生產調整——減反：限制政府收購、禁止新闢水田，以及補貼把稻田轉作其他作物。" } },

        { t:"timeline", items:[
          { year:"1969", era:{ en:"Peak", ja:"頂", zh:"高峰" }, eraJp:"作付の頂",
            title:{ en:"3.17 million hectares of paddy", ja:"水稲三百十七万ヘクタール", zh:"水稻三百一十七萬公頃" }, jp:"最大作付面積",
            text:{ en:"The largest area of rice Japan ever planted, in a country whose rice consumption had already peaked.",
              ja:"日本がかつて植えた最大の米の面積である。米の消費がすでに頂を越えた国において。",
              zh:"日本歷來種植稻米面積的最大值——而這個國家的稻米消費量其實早已越過高峰。" } },
          { year:"1971", era:{ en:"Policy", ja:"政策", zh:"政策" }, eraJp:"生産調整",
            title:{ en:"Production adjustment begins in earnest", ja:"生産調整が本格に始まる", zh:"生產調整正式展開" }, jp:"減反開始",
            text:{ en:"Government purchase limits, a ban on new paddy development, and conversion subsidies paid to farmers who planted wheat, soy, forage or horticulture instead.",
              ja:"政府の買入の限り、新たな開田の禁、そして代わりに麦、豆、牧草、園芸を植えた農へ払われる転作の奨励金である。",
              zh:"政府收購限額、禁止新闢水田，以及發給改種小麥、大豆、牧草或園藝作物之農民的轉作獎勵金。" } },
          { year:"1975–85", era:{ en:"Contraction", ja:"縮小", zh:"收縮" }, eraJp:"面積の減り",
            title:{ en:"2.72 million, then 2.32 million hectares", ja:"二百七十二万、次いで二百三十二万ヘクタール", zh:"二百七十二萬，接著二百三十二萬公頃" }, jp:"作付の推移",
            text:{ en:"The paddy area falls by a quarter in fifteen years, and keeps falling; from the 2000s it settles at roughly half the 1969 figure.",
              ja:"田の面積は十五年のうちに四分の一を失い、なお減り続ける。二〇〇〇年代よりは一九六九年のおよそ半ばに落ち着く。",
              zh:"水田面積在十五年間減少四分之一，並持續下降；自二〇〇〇年代起穩定在約為一九六九年一半的水準。" } },
          { year:"1995", era:{ en:"Liberalisation", ja:"自由化", zh:"自由化" }, eraJp:"食糧法",
            title:{ en:"The food control law is replaced", ja:"食糧管理法が置き換えられる", zh:"糧食管理法遭取代" }, jp:"流通の自由化",
            text:{ en:"The state stops being the compulsory buyer. Rice distribution opens up, and with it the possibility of a brewery contracting directly with a grower for a named variety from a named place.",
              ja:"国は強いられた買い手であることをやめる。米の流通は開かれ、それとともに、蔵が育て手と直に、名ある土地の名ある品種について契約する道が開かれる。",
              zh:"國家不再是強制性的買方。稻米流通開放，隨之而來的是酒藏得以直接與種植者簽約、取得指名產地的指名品種。" } },
          { year:"2018", era:{ en:"End", ja:"終わり", zh:"終結" }, eraJp:"減反廃止",
            title:{ en:"Production adjustment formally ends", ja:"生産調整の正式な廃止", zh:"生產調整正式廢止" }, jp:"政策の終了",
            text:{ en:"After nearly half a century, the government stops allocating production targets. Rice acreage is now, in principle, a farmer's decision — taken in a countryside with a median farmer age well past sixty and a shrinking market for the staple crop.",
              ja:"半世紀近くののち、政府は生産の目標を配ることをやめる。米の作付は原理として今や農の決めである。農の年齢の中央値が六十をはるかに過ぎ、主食の市が縮みつつある田舎において下される決めである。",
              zh:"將近半個世紀之後，政府停止分配生產目標。稻作面積如今在原則上是農民自己的決定——而做這個決定的鄉間，農民年齡中位數早已遠超六十，主食作物的市場也正在萎縮。" } }
        ] },

        { t:"panel", tint:"moss",
          title:{ en:"What this did for sake", ja:"これが酒に対してなしたこと", zh:"這件事對清酒做了什麼" },
          body:[
            { t:"p", text:{
              en:"A policy designed to reduce the supply of one crop created room for another. Brewing rice was one of the things a farmer could grow on land taken out of staple production, and it had a customer with a reason to pay more: a brewery cannot substitute cheaper rice without changing its product. Over the same decades the tokutei meishōshu categories were codified, ginjō brewing spread, and demand for large-grained, low-protein, difficult varieties rose from a specialist trickle to a real market. Contract growing of Yamada Nishiki, Gohyakumangoku and the prefectural varieties bred alongside them is the direct result.",
              ja:"一つの作物の供を減らすために設けられた政策が、別の作物のための場を生んだ。醸造の米は、主食の生産から外された地で農が育てうるものの一つであり、そしてより多く払う理由をもつ客をもっていた。蔵は、その品を変えずにより安い米へ替えることができぬからである。同じ数十年のうちに特定名称酒の区分が定められ、吟醸の造りが広まり、大粒で蛋白の少ない難しい品種への需は、専門の細流から実の市へと昇った。山田錦、五百万石、そしてそれらとともに育まれた県の品種の契約栽培は、その直の帰結である。",
              zh:"一項為減少某種作物供給而設計的政策，為另一種作物騰出了空間。釀造米是農民能在退出主食生產的土地上種植的作物之一，而它擁有一個有理由付更多錢的客戶：酒藏無法在不改變自己產品的前提下換用更便宜的米。在同樣的數十年間，特定名稱酒的分類被制定、吟釀釀造擴散開來，而對大粒、低蛋白、難種品種的需求，從專業的涓流升為一個真正的市場。山田錦、五百萬石，以及與它們一同育成的各縣品種的契作栽培，正是這件事的直接結果。" } }
          ] }
      ] },

    { t:"section", id:"place",
      title:{ en:"Why a place on a map moves a price", ja:"地図の上の場所がなぜ値を動かすか", zh:"地圖上的一個位置為何會撼動價格" }, jp:"特A地区",
      body:[
        { t:"p", text:{
          en:"Hyōgo produces the great majority of Japan's Yamada Nishiki, and within Hyōgo the growing districts are themselves ranked. The top tier — the Special-A designation, covering particular villages in the Mino, Yokawa and Tōjō areas inland of Kobe — attaches to specific land, and rice from it commands a price several times ordinary table rice. This is the closest thing Japanese brewing has to a Burgundian cru classification, and it works for the same physical reasons: heavy clay soils that hold water, a wide day-to-night temperature swing in the ripening month, and slopes that drain.",
          ja:"兵庫は日本の山田錦の大半を生み、そして兵庫の内において、産地そのものが格づけされている。最も上の層——特A地区の指定であり、神戸の内陸の美嚢、吉川、東条の界隈の定まった村々を覆う——は特定の土地に付き、そこからの米は並の食用米の数倍の値を得る。日本の造りがもつ、ブルゴーニュの畑の格づけに最も近いものであり、そして同じ物理の理由によって働く。水を保つ重い粘土の土、実る月における昼と夜の大きな温度の振れ、そして水を落とす斜面である。",
          zh:"兵庫生產了日本絕大部分的山田錦，而在兵庫之內，各產地本身又被分了等級。最高的一層——「特 A 地區」的指定，涵蓋神戶內陸美囊、吉川、東條一帶的特定村落——是附著在特定土地上的，而來自那裡的米，價格可達一般食用米的數倍。這是日本釀造界最接近勃艮第葡萄園分級的東西，而它之所以有效，理由與後者相同：保水的重黏土、成熟月份中巨大的日夜溫差，以及能排水的坡地。" } },

        { t:"ul", plain:true, items:[
          { en:"<strong>The designation is agricultural, not legal.</strong> Special-A is a classification used by the co-operatives and the trade, not a geographical indication written into law. It has enormous market force and no statutory protection, which is a genuinely odd position for something worth what it is worth.",
            ja:"<strong>その指定は法のものではなく農のものである。</strong>特A地区は組合と業界が用いる分けであり、法に書き込まれた地理的表示ではない。市においては巨きな力を持ち、法においては守りを持たぬ。それだけの値打ちを持つものにとって、真に奇妙な位置である。",
            zh:"<strong>這項指定屬於農業，而非法律。</strong>特 A 地區是合作社與業界所使用的分類，並非寫進法律的地理標示。它在市場上具有巨大力量，在法律上卻沒有任何保護——對一件價值如此之高的東西而言，這是個真正奇特的位置。" },
          { en:"<strong>Allocation follows relationship.</strong> Special-A rice is not simply bought; it is allocated, in much the same way that a scarce sake is allocated to retailers. A brewery's access usually rests on a contract going back decades, and a new brewery cannot simply outbid its way in.",
            ja:"<strong>配分は縁に従う。</strong>特Aの米は単に買われるのではない。稀な酒が小売へ配られるのとほとんど同じ仕方で、配られる。蔵の得る道は、たいてい数十年に遡る契約の上に載っており、新しい蔵は、ただ高く付けることによって入りうるものではない。",
            zh:"<strong>配額依循關係。</strong>特 A 的米不是單純被買走的；它是被分配的，方式與稀有清酒被分配給零售商大同小異。一家酒藏能不能拿到，通常取決於一份可追溯數十年的契約，而新的酒藏無法單靠出高價擠進去。" },
          { en:"<strong>Other prefectures have built their own.</strong> Okayama, Fukuoka, Tokushima and others grow Yamada Nishiki seriously, and several prefectures answered the Hyōgo monopoly by breeding a flagship of their own instead — which is why the map of Japanese brewing rice now has a dozen names on it rather than two.",
            ja:"<strong>他の県も自らのものを築いた。</strong>岡山、福岡、徳島その他は山田錦を真剣に育て、そしていくつもの県は、兵庫の独占に対し、代わりに自らの旗となる品種を育むことをもって答えた。日本の酒米の地図が今、二つではなく十以上の名を持つ理由である。",
            zh:"<strong>其他縣也建立了自己的體系。</strong>岡山、福岡、德島等地都認真栽種山田錦，而好幾個縣則以育成自己的旗艦品種來回應兵庫的壟斷——這正是為什麼日本酒米的地圖上如今有十幾個名字，而不是兩個。" }
        ] }
      ] },

    { t:"section", id:"who",
      title:{ en:"Who breeds a rice", ja:"米を育むのは誰か", zh:"誰在育種" }, jp:"県の育種",
      body:[
        { t:"p", text:{
          en:"Almost every important Japanese brewing rice of the last seventy years was bred by a prefectural agricultural experiment station, working to a brief set by that prefecture's breweries. This is worth stating plainly because it is unusual: the varieties are public-sector work, funded as regional economic policy, and named and registered by the prefecture that made them.",
          ja:"この七十年の重んじられるほとんどあらゆる日本の酒米は、県の農業試験場によって、その県の蔵の出した求めに応じて育まれた。これは平らに述べる値打ちがある。異例だからである。品種は公の領分の仕事であり、地域の経済の政策として賄われ、それを作った県によって名づけられ登録される。",
          zh:"過去七十年間幾乎每一種重要的日本酒米，都是由縣立農業試驗場依照該縣酒藏所提出的需求育成的。這件事值得直白說出來，因為它並不尋常：這些品種是公部門的工作成果，以區域經濟政策的名義獲得資金，並由育成它的那個縣命名與登記。" } },

        { t:"p", text:{
          en:"The logic is straightforward. A prefecture with twenty breweries and a rice-growing hinterland has an interest in those breweries being able to say something true and specific about local material. Breeding a variety that suits the local climate, giving it a local name, and registering it gives every brewery in the prefecture a shared asset, and gives the farms a crop with a guaranteed buyer. The result is a national map on which Nagano, Yamagata, Shizuoka, Yamaguchi, Saga and a dozen others each have a rice of their own — and on which a bottle's rice variety often tells you the prefecture before the label does.",
          ja:"理屈は率直である。二十の蔵と米どころの後背を持つ県は、それらの蔵が土地の材について真であり定かなことを述べうることに利を持つ。土地の気候に適う品種を育み、土地の名を与え、登録することは、県のあらゆる蔵に共有の資産を与え、田に買い手の定まった作物を与える。その結果が、長野、山形、静岡、山口、佐賀、そして十を超える他の県が、それぞれ自らの米を持つ全国の地図である。そしてその上では、瓶の米の品種が、しばしば札より先に県を告げる。",
          zh:"邏輯很直接。一個擁有二十家酒藏與稻作腹地的縣，有利益動機讓那些酒藏能夠針對在地原料說出既真實又具體的話。育成一個適合當地氣候的品種、給它一個在地的名字、並加以登記，就等於給了全縣每一家酒藏一項共享資產，也給了農田一種買家確定的作物。結果就是一張全國地圖，上面長野、山形、靜岡、山口、佐賀等十幾個縣各有自己的米——而在這張圖上，一支酒的米種往往比酒標更早告訴你它來自哪個縣。" } },

        { t:"note", label:{ en:"The pressure now", ja:"今かかっている圧", zh:"當前的壓力" },
          text:{
            en:"Two forces are working on all of this at once. Summers are hot enough that ripening damage — chalky, poorly filled grains — has become a routine risk in districts that never had it, which pushes breeders towards heat-tolerant lines. And the farming population is old: the average rice farmer is well past sixty, and brewing rice is harder to grow than the alternative. A brewery's cost line for the next twenty years will be set less by anything that happens in the kura than by whether somebody's child takes over a field in Hyōgo.",
            ja:"二つの力がこのすべてに一度に働いている。夏は、実りの障り——白く濁り、詰まりの悪い粒——が、かつてそれを知らなかった地においても常の危うさとなるほど暑い。それは育種を暑さに耐える系統へ押しやる。そして農の人口は老いている。米の農の平均は六十をはるかに過ぎ、そして酒米は代わりのものより育てにくい。これからの二十年、蔵の原価の一行を定めるのは、蔵のなかで起こるいかなることよりも、兵庫の一枚の田を誰かの子が継ぐか否かであろう。",
            zh:"有兩股力量正同時作用在這一切之上。夏天熱到讓登熟障礙——白濁、充實不良的米粒——在從未有過這種問題的地區成為家常風險，這把育種推向耐熱系統。而農業人口老化：稻農平均年齡遠超六十，而酒米又比替代作物更難種。未來二十年決定一家酒藏成本那一行的，與其說是酒藏裡發生的任何事，不如說是兵庫某一塊田有沒有人的孩子願意接手。" } },

        { t:"tiny", text:{
          en:"Related: <a href=\"rice.html\">Sake Rice</a> for the varieties and their pedigree, <a href=\"terroir.html\">Terroir</a> for what the land actually contributes, <a href=\"standards.html\">Law &amp; Standards</a> for the labelling rules the grading feeds, <a href=\"gi.html\">Geographical Indications</a> for the protection Special-A does not have, <a href=\"future.html\">The Next Twenty Years</a> for where the pressure leads.",
          ja:"関連——品種とその系譜は<a href=\"rice.html\">酒米</a>、土地が実に与えるものは<a href=\"terroir.html\">風土</a>、等級が支える表示の定めは<a href=\"standards.html\">法令と基準</a>、特A地区がもたぬ守りは<a href=\"gi.html\">地理的表示</a>、この圧の行く先は<a href=\"future.html\">これからの二十年</a>。",
          zh:"相關：品種與其系譜見<a href=\"rice.html\">酒米</a>；土地實際貢獻了什麼見<a href=\"terroir.html\">風土</a>；分級所支撐的標示規則見<a href=\"standards.html\">法規與標準</a>；特 A 地區所缺乏的保護見<a href=\"gi.html\">地理標示</a>；這股壓力的走向見<a href=\"future.html\">未來二十年</a>。" } }
      ] },

    { t:"related", items:[
      { href:"rice.html", why:{ en:"The varieties the policy is about.", ja:"この政策が扱っている品種。", zh:"這套政策所處理的那些品種。" } },
      { href:"gi.html", why:{ en:"The other system that ties a sake to a place, and enforces it.", ja:"酒を土地に結ぶもう一つの仕組みと、その執行。", zh:"另一套把酒繫回土地、而且會執行的制度。" } },
      { href:"terroir.html", why:{ en:"Whether any of this reaches the glass.", ja:"これらのいずれかが杯に届くのか否か。", zh:"這一切究竟有沒有抵達杯子。" } },
      { href:"industry.html", why:{ en:"The same state, seen through the tax rather than the field.", ja:"同じ国家を、田ではなく税を通して見る。", zh:"同一個國家，透過稅、而不是透過田來看。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- water */
SAKE.pages["water"] = {
  kicker: { en: "Making · 05", ja: "造り · 05", zh: "釀造 · 05" },
  title:  { en: "Water", ja: "水", zh: "水" },
  jp: "仕込水と酒造用水",
  lede: {
    en: "Sake is about four-fifths water by volume, and a brewery uses twenty to forty times the weight of its rice in water across a season — washing, soaking, steaming, mashing, diluting, and endlessly cleaning. Water is also the one ingredient that cannot be bought elsewhere and trucked in without changing what the brewery is. Almost every regional style in Japan can be traced back to the mineral content of a particular aquifer, and the two most famous sake districts in the country sit twenty-five kilometres apart precisely because their water is opposite.",
    ja: "日本酒は容量のおよそ五分の四が水である。そして蔵は一造りのあいだに、米の重量の二十倍から四十倍の水を使う——洗い、浸し、蒸し、仕込み、割り、そして果てしなく洗う。水はまた、他所から買って運び入れれば蔵そのものが変わってしまう、唯一の原料でもある。日本の地域様式のほとんどは、ある特定の帯水層のミネラル組成にまで遡ることができ、国内で最も名高い二つの酒どころが二十五キロの距離に並び立つのは、まさにその水が正反対だからである。",
    zh: "日本酒約有五分之四的體積是水，而一家酒藏在一個釀造期中所用的水，達其米重的二十至四十倍——洗米、浸漬、蒸煮、仕込、割水，以及沒完沒了的清洗。水同時也是唯一一種無法從他處購入運來、否則酒藏便不再是同一家酒藏的原料。日本幾乎每一種地域風格，都可回溯到某一特定含水層的礦物組成；而全國最著名的兩大酒鄉之所以相距僅二十五公里，正因為它們的水恰恰相反。"
  },
  body: [

    { t:"section", id:"requirements",
      title:{ en:"What brewing water has to be", ja:"酒造用水の要件", zh:"釀造用水的條件" }, jp:"水質",
      body:[
        { t:"p", text:{
          en:"Brewing water must be potable first, and then it must clear a set of much tighter limits that have nothing to do with drinking safety. Two metals matter more than everything else combined.",
          ja:"酒造用水は、まず飲用に適さねばならず、そのうえで、飲用の安全とは無関係のはるかに厳しい制限を満たさねばならない。二つの金属が、他のすべてを合わせたよりも重要である。",
          zh:"釀造用水首先必須可飲用，其次還得通過一套與飲用安全無關、卻嚴格得多的限制。有兩種金屬的重要性，勝過其餘所有因素的總和。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Iron",ja:"鉄",zh:"鐵"}, jp:"0.02 ppm 以下",
            body:[{ t:"p", text:{
              en:"The single most damaging impurity. Iron binds with <em>deferriferrichrysin</em>, a compound secreted by the kōji mould, to form a rust-coloured complex; the sake browns and takes on a flat, metallic staleness. The industry limit is 0.02 parts per million, roughly a fifth of the drinking-water standard, and good brewing water is usually well below it.",
              ja:"最も有害な不純物である。鉄は、麹菌が分泌するデフェリフェリクリシンと結合して錆色の錯体をつくる。酒は褐変し、平板で金属的なひね香を帯びる。業界の基準は0.02ppm以下——飲料水基準のおよそ五分の一——であり、良い酒造用水はたいていそれを大きく下回る。",
              zh:"最具破壞性的雜質。鐵會與麴菌分泌的 deferriferrichrysin 結合，形成鏽色錯合物；酒因而褐變，並帶上平板的金屬性老化氣味。業界標準為 0.02 ppm 以下，約為飲用水標準的五分之一，而優質釀造用水通常遠低於此。" } }] },
          { h:{en:"Manganese",ja:"マンガン",zh:"錳"}, jp:"0.02 ppm 以下",
            body:[{ t:"p", text:{
              en:"Manganese does not colour the sake by itself, but it catalyses light-driven oxidation: a bottle with manganese in it will discolour and go stale far faster in sunlight. The same 0.02 ppm limit applies. This is one reason sake is bottled in brown or green glass and stored in the dark.",
              ja:"マンガンはそれ自体では酒を着色しないが、光による酸化を触媒する。マンガンを含む酒は、日光の下ではるかに速く変色し、ひねる。同じく0.02ppm以下が基準である。日本酒が茶色や緑の瓶に詰められ、暗所で保管される理由の一つがこれである。",
              zh:"錳本身不會使酒著色，但會催化光導致的氧化：含錳的酒在日照下會更快變色與老化。同樣適用 0.02 ppm 的限值。這也是清酒裝在褐色或綠色玻璃瓶並避光保存的原因之一。" } }] }
        ] },
        { t:"table",
          caption:{en:"What brewers want, and why",ja:"造り手が望む成分と、その理由",zh:"釀造者所求的成分及其理由"},
          cols:[{en:"Component",ja:"成分",zh:"成分"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Wanted?",ja:"要否",zh:"需要？"},{en:"Role in the mash",ja:"醪での働き",zh:"在醪中的作用"}],
          jpCols:[1],
          rows:[
            [{en:"Potassium",ja:"カリウム",zh:"鉀"},"加里",{en:"Yes",ja:"必要",zh:"需要"},
             {en:"A yeast nutrient; supports vigorous, complete fermentation.",ja:"酵母の栄養素。旺盛で完全な発酵を支える。",zh:"酵母的營養素；支持旺盛而完全的發酵。"}],
            [{en:"Phosphorus",ja:"リン",zh:"磷"},"燐",{en:"Yes",ja:"必要",zh:"需要"},
             {en:"Essential to yeast metabolism and enzyme production. Miyamizu's high phosphate is the main reason it ferments so hard.",ja:"酵母の代謝と酵素生成に不可欠。宮水の発酵が力強い最大の理由は、そのリン酸の多さにある。",zh:"為酵母代謝與酵素生成所必需。宮水發酵之所以強勁，主因即其磷酸含量高。"}],
            [{en:"Calcium",ja:"カルシウム",zh:"鈣"},"石灰",{en:"Yes",ja:"必要",zh:"需要"},
             {en:"Stabilises kōji enzymes, especially α-amylase, and helps the mash break down evenly.",ja:"麹の酵素、とくにα-アミラーゼを安定させ、醪を均一に分解させる。",zh:"穩定麴的酵素（尤其是 α-澱粉酶），並幫助醪均勻分解。"}],
            [{en:"Magnesium",ja:"マグネシウム",zh:"鎂"},"苦土",{en:"Yes, modestly",ja:"適度に必要",zh:"適量需要"},
             {en:"Another yeast nutrient; in excess it contributes bitterness.",ja:"これも酵母の栄養素。過剰になると苦味に寄与する。",zh:"同為酵母營養素；過量則帶來苦味。"}],
            [{en:"Chloride",ja:"塩素イオン",zh:"氯離子"},"塩素",{en:"Tolerated",ja:"許容",zh:"可容忍"},
             {en:"Present in coastal aquifers such as Nishinomiya's; small amounts are thought to sharpen the finish.",ja:"西宮のような沿岸の帯水層に含まれる。少量であれば後口を締めると考えられている。",zh:"存在於如西宮這類沿海含水層中；一般認為少量可使收口更俐落。"}],
            [{en:"Iron",ja:"鉄",zh:"鐵"},"鉄",{en:"No",ja:"不可",zh:"不可"},
             {en:"Browning and staling. The limit is absolute in practice.",ja:"褐変とひね。実務上、この制限は絶対である。",zh:"導致褐變與老化。實務上此限值是絕對的。"}],
            [{en:"Manganese",ja:"マンガン",zh:"錳"},"満俺",{en:"No",ja:"不可",zh:"不可"},
             {en:"Light-catalysed deterioration in the bottle.",ja:"瓶内での光による劣化を触媒する。",zh:"催化瓶中因光造成的劣化。"}],
            [{en:"Organic matter",ja:"有機物",zh:"有機物"},"有機物",{en:"No",ja:"不可",zh:"不可"},
             {en:"Feeds contaminating bacteria and clouds the finished sake.",ja:"雑菌を養い、仕上がった酒を濁らせる。",zh:"滋養雜菌，並使成酒混濁。"}],
            [{en:"Ammonia, nitrite",ja:"アンモニア・亜硝酸",zh:"氨、亞硝酸"},"窒素化合物",{en:"No",ja:"不可",zh:"不可"},
             {en:"Signs of contamination, and precursors to off-flavours.",ja:"汚染の徴であり、異臭の前駆体でもある。",zh:"污染的徵兆，也是異味的前驅物。"}]
          ] }
      ]
    },

    { t:"section", id:"hardness",
      title:{ en:"Hard water and soft water", ja:"硬水と軟水", zh:"硬水與軟水" }, jp:"硬度",
      body:[
        { t:"p", text:{
          en:"Hardness is the combined calcium and magnesium content, and in sake it functions as a throttle on fermentation speed. Hard water carries more of the minerals yeast and kōji enzymes need, so the mash ferments fast and hot, converts more sugar, and finishes dry. Soft water starves the mash slightly, so fermentation is slow and cool, more sugar survives, and the sake finishes round and soft. Neither is better; they demand different techniques and produce different traditions.",
          ja:"硬度とはカルシウムとマグネシウムの合計量であり、日本酒においては発酵速度の調節弁として働く。硬水は酵母と麹の酵素が必要とするミネラルを多く含むため、醪は速く高い温度で発酵し、糖をより多く変え、辛口に仕上がる。軟水は醪をわずかに飢えさせるため、発酵は遅く低温で進み、糖がより多く残り、丸く柔らかい酒になる。どちらが優れているのでもない。異なる技術を要求し、異なる伝統を生むのである。",
          zh:"硬度是鈣與鎂含量的總和，在清酒中則扮演發酵速度的節流閥。硬水含有更多酵母與麴酵素所需的礦物質，因此醪發酵快而溫度高，轉化更多糖分，成酒偏辛。軟水則使醪略處於飢餓狀態，發酵緩慢而低溫，殘糖較多，成酒圓潤柔軟。兩者無優劣之分；它們要求不同的技術，也造就不同的傳統。" } },
        { t:"compare", cols:2, items:[
          { title:{en:"Hard water",ja:"硬水",zh:"硬水"}, jp:"男酒",
            text:{en:"Vigorous fermentation, high attenuation, dry and firm; a sake that is often rough young and rewards a year in tank. Nada is the archetype, and the resulting style was nicknamed <em>otokozake</em> — “men's sake” — in the Edo period. Because fermentation runs hot and fast, hard-water brewing is unforgiving of a slow or careless mash schedule.",
              ja:"旺盛な発酵、高い発酵度、辛く締まった酒。若いうちは荒く、一年の貯蔵で応える酒でもある。灘がその原型であり、生まれた酒質は江戸期に「男酒」と呼ばれた。発酵が高温で速く進むため、硬水の造りは、遅く不注意な醪管理を許さない。",
              zh:"發酵旺盛、發酵度高、辛而結實；這種酒年輕時常顯粗糙，經一年貯藏方見回報。灘是其原型，所產酒質在江戶時期被稱為「男酒」。由於發酵溫度高且快速，硬水釀造對緩慢或粗心的醪管理毫不寬容。"} },
          { title:{en:"Soft water",ja:"軟水",zh:"軟水"}, jp:"女酒",
            text:{en:"Slow, cool fermentation; a rounder, softer, slightly sweeter sake that drinks well young. Fushimi is the archetype — <em>onnazake</em>, “women's sake”. Soft water was for centuries considered a handicap, because a sluggish mash is a mash that spoiling organisms can catch up with; the whole of modern soft-water technique exists to solve that problem.",
              ja:"ゆるやかで低温の発酵。丸く柔らかく、わずかに甘い、若いうちから飲みやすい酒になる。伏見が原型であり、「女酒」と呼ばれた。軟水は何世紀ものあいだ不利と見なされてきた。発酵の鈍い醪は、腐造菌に追いつかれる醪だからである。近代の軟水醸造技術のすべては、この問題を解くために存在している。",
              zh:"發酵緩慢而低溫；酒體圓潤柔軟、略帶甘甜，年輕時即好入口。伏見是其原型——「女酒」。軟水數世紀以來被視為不利條件，因為發酵遲緩的醪，正是腐敗菌能夠追上的醪。整套現代軟水釀造技術，都是為解決這個問題而存在。"} }
        ] },
        { t:"scale", title:{en:"Approximate hardness of well-known brewing waters (mg/L as CaCO₃)",ja:"著名な酒造用水の硬度の目安（CaCO₃換算 mg/L）",zh:"知名釀造用水的硬度概值（以 CaCO₃ 計，mg/L）"},
          segs:[
            { label:{en:"Very soft · Hiroshima, Niigata",ja:"極軟水・広島・新潟",zh:"極軟水・廣島・新潟"}, w:30, fill:"var(--h-snow)" },
            { label:{en:"Soft · Fushimi",ja:"軟水・伏見",zh:"軟水・伏見"}, w:25, fill:"var(--h-water)" },
            { label:{en:"Medium",ja:"中硬水",zh:"中硬水"}, w:25, fill:"var(--h-moss)" },
            { label:{en:"Hard · Nada miyamizu",ja:"硬水・灘の宮水",zh:"硬水・灘之宮水"}, w:20, fill:"var(--h-amber)" }
          ],
          ticks:["~20","~60","~100","~180"],
          note:{en:"Japanese brewing water is soft by world standards throughout — even miyamizu would be called moderately hard in Europe. The differences that matter to sake are small in absolute terms and large in effect.",ja:"日本の酒造用水は、世界的な尺度では総じて軟らかい。宮水でさえ、ヨーロッパでは中硬水と呼ばれる程度である。日本酒にとって重要な差は、絶対値としては小さく、効果としては大きい。",zh:"以世界標準衡量，日本的釀造用水整體偏軟——即使是宮水，在歐洲也只稱得上中硬。對清酒而言關鍵的差異，絕對值很小，效果卻很大。"} }
      ]
    },

    { t:"section", id:"miyamizu",
      title:{ en:"Miyamizu, and how it was found", ja:"宮水とその発見", zh:"宮水及其發現" }, jp:"宮水",
      body:[
        { t:"figure",
          caption:{
            en:"Why the wells sit where they do, drawn as a section from Mount Rokkō to Osaka Bay. Three separate underground flows happen to meet beneath a strip of Nishinomiya a few hundred metres across, and each contributes something the others do not: the granite takes the iron out, the river keeps the water moving, the buried shell bed supplies calcium and phosphate, and the bay adds a trace of chloride. Move a kilometre in any direction and one of the four is missing. The section is schematic and vertically exaggerated.",
            ja:"井戸がなぜその場所にあるのかを、六甲山から大阪湾までの断面として描いたもの。三つの別々の地下の流れが、差し渡し数百メートルの西宮の一帯の下で、たまたま出会う。そのそれぞれが、他にはないものをもたらす——花崗岩は鉄を取り除き、川は水を動かし続け、埋もれた貝殻層はカルシウムとリン酸を供給し、湾はわずかな塩素を加える。どちらへ一キロ動いても、四つのうちのどれかが欠ける。断面は模式であり、縦方向は誇張してある。",
            zh:"井為何座落於此——以自六甲山至大阪灣的剖面來說明。三股各自獨立的地下水流，恰好在西宮一條寬僅數百公尺的地帶之下交會，而每一股都提供了其他兩股所沒有的東西：花崗岩濾去鐵質，河川使水保持流動，埋藏的貝層供應鈣與磷酸，海灣則添入微量氯。往任何方向移動一公里，四者之中便會缺其一。此剖面為示意圖，垂直方向有所誇張。" },
          svg: function (lang, L) {
            var W = 760, H = 368;
            function tw(t, size) { var w = 0, i; for (i = 0; i < t.length; i++) w += (t.charCodeAt(i) > 0x2E80 ? 1.0 : 0.52); return w * size; }
            function lab(x, y, an, txt, size, fill, bg) {
              var w = tw(txt, size), bx = (an === "end" ? x - w : an === "middle" ? x - w / 2 : x);
              return '<rect x="' + (bx - 3) + '" y="' + (y - size * 0.84) + '" width="' + (w + 6) + '" height="' + (size * 1.16) + '" fill="' + (bg || "#F8F6F1") + '"/>' +
                     '<text x="' + x + '" y="' + y + '" text-anchor="' + an + '" font-size="' + size + '" fill="' + fill + '">' + txt + '</text>';
            }
            function arrow(x1, y1, x2, y2, col) {
              var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy), ux = dx / len, uy = dy / len;
              var hx = x2 - ux * 9, hy = y2 - uy * 9, pxv = -uy * 4.5, pyv = ux * 4.5;
              return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + hx + '" y2="' + hy + '" stroke="' + col + '" stroke-width="1.8"/>' +
                     '<path d="M' + x2 + ' ' + y2 + ' L' + (hx + pxv) + ' ' + (hy + pyv) + ' L' + (hx - pxv) + ' ' + (hy - pyv) + ' Z" fill="' + col + '"/>';
            }
            function dot(n, x, y) {
              return '<rect x="' + (x - 8) + '" y="' + (y - 8) + '" width="16" height="16" fill="#FBFAF6" stroke="#8B857C"/>' +
                     '<text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#55504A">' + n + '</text>';
            }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<g transform="translate(0,-26)">';
            /* sky */
            s += '<rect x="24" y="64" width="712" height="256" fill="#F8F6F1"/>';
            /* granite basement */
            s += '<path d="M24 96 L120 132 L216 176 L300 240 L330 320 L24 320 Z" fill="#DCD6C8" stroke="#B4AC9C"/>';
            /* alluvial fan */
            s += '<path d="M216 176 L312 206 L400 224 L486 232 L560 236 L604 236 L604 320 L330 320 L300 240 Z" fill="#E7DFD2" stroke="#B4AC9C"/>';
            /* buried shell bed */
            s += '<path d="M340 284 L604 294 L604 305 L340 295 Z" fill="#C7CFC2" stroke="#A9B3A4"/>';
            /* sea */
            s += '<rect x="604" y="236" width="132" height="84" fill="#DDE5E8" stroke="#B9C3C8"/>';
            /* ground line */
            s += '<path d="M24 96 L120 132 L216 176 L312 206 L400 224 L486 232 L560 236 L604 236" fill="none" stroke="#8B857C" stroke-width="1.4"/>';
            /* the Shukugawa, cutting the surface */
            s += '<path d="M330 208 L342 220 L354 211" fill="none" stroke="#8B9BA6" stroke-width="2"/>';
            /* wells */
            var wx = [452, 478, 504], wy = [229, 231, 233], k;
            for (k = 0; k < 3; k++) {
              s += '<rect x="' + (wx[k] - 2.5) + '" y="' + wy[k] + '" width="5" height="' + (292 - wy[k]) + '" fill="#FBFAF6" stroke="#8B857C"/>';
            }
            s += '<line x1="446" y1="216" x2="510" y2="216" stroke="#8B857C"/>';
            s += '<line x1="446" y1="216" x2="446" y2="222" stroke="#8B857C"/>';
            s += '<line x1="510" y1="216" x2="510" y2="222" stroke="#8B857C"/>';
            /* flows */
            s += arrow(150, 186, 296, 258, "#A8A08C");
            s += arrow(348, 224, 442, 272, "#8B9BA6");
            s += arrow(408, 296, 452, 278, "#7E8C78");
            s += arrow(660, 276, 560, 284, "#8B9BA6");
            s += dot("1", 214, 234);
            s += dot("2", 386, 240);
            s += dot("3", 402, 278);
            s += dot("4", 640, 258);
            /* place names */
            s += lab(34, 88, "start", (lang === "ja" ? "六甲山・花崗岩" : lang === "zh" ? "六甲山・花崗岩" : "Mount Rokkō · granite"), 11, "#201E1B");
            s += lab(478, 208, "middle", (lang === "ja" ? "西宮の井戸" : lang === "zh" ? "西宮的水井" : "the Nishinomiya wells"), 11, "#201E1B");
            s += lab(336, 199, "end", (lang === "ja" ? "夙川" : lang === "zh" ? "夙川" : "the Shukugawa"), 10, "#55504A");
            s += lab(728, 228, "end", (lang === "ja" ? "大阪湾" : lang === "zh" ? "大阪灣" : "Osaka Bay"), 11, "#201E1B", "#DDE5E8");
            s += lab(596, 314, "end", (lang === "ja" ? "貝殻層" : lang === "zh" ? "貝層" : "the shell bed"), 9.5, "#55504A", "#E7DFD2");
            s += '</g>';
            /* key */
            var keys = [
              { n:"1", c:"#A8A08C", t:{ en:"granite-filtered groundwater — takes out the iron", ja:"花崗岩に濾された地下水——鉄を除く", zh:"經花崗岩過濾的地下水——濾去鐵質" } },
              { n:"2", c:"#8B9BA6", t:{ en:"the river's subsurface flow — keeps the water moving", ja:"川の伏流水——水を動かし続ける", zh:"河川的伏流水——使水保持流動" } },
              { n:"3", c:"#7E8C78", t:{ en:"seepage through the shell bed — calcium and phosphate", ja:"貝殻層を通る浸透水——カルシウムとリン酸", zh:"穿過貝層的滲流——鈣與磷酸" } },
              { n:"4", c:"#8B9BA6", t:{ en:"a trace of chloride off the bay", ja:"湾からのわずかな塩素", zh:"來自海灣的微量氯" } }
            ];
            var i, kx, ky;
            for (i = 0; i < keys.length; i++) {
              kx = 30 + (i % 2) * 372; ky = 322 + Math.floor(i / 2) * 17;
              s += '<rect x="' + kx + '" y="' + (ky - 9) + '" width="11" height="11" fill="' + keys[i].c + '"/>';
              s += '<text x="' + (kx + 17) + '" y="' + ky + '" font-size="9.5" fill="#8B857C">' + keys[i].n + ' · ' + L(keys[i].t) + '</text>';
            }
            s += '<text x="30" y="' + (H - 6) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "一八四〇年、山邑太左衛門は杜氏を、道具を、米を入れ替えた。違いは建物についてきた。残っていたのは井戸だけであった。"
                  : lang === "zh" ? "一八四〇年，山邑太左衛門換過杜氏、換過器具、換過米。差異卻始終隨著建築而留。剩下的，只有那口井。"
                  : "In 1840 Yamamura Tazaemon swapped the tōji, then the equipment, then the rice. The difference stayed with the building. Only the well was left.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"In 1840 Yamamura Tazaemon, head of the house that brews Sakura Masamune, was running two breweries: one at Uozaki and one at Nishinomiya. The Nishinomiya sake was consistently better. He moved his tōji from one to the other, then the equipment, then the rice, and the difference followed the building rather than the people or the materials. He concluded it was the well, and began carting Nishinomiya water to Uozaki by barrel. Within a generation every serious Nada house had bought or leased a well in the same few streets of Nishinomiya, and they still do — the water is piped or trucked several kilometres east to breweries that have no intention of moving.",
          ja:"一八四〇年、櫻正宗を醸す家の当主・山邑太左衛門は、魚崎と西宮の二つの蔵を営んでいた。西宮の酒のほうが一貫して良かった。杜氏を入れ替え、次いで道具を、さらに米を替えてみたが、違いは人にも原料にもついてこず、建物についてきた。彼は井戸であると結論し、西宮の水を樽で魚崎へ運びはじめた。一世代のうちに、灘の主だった蔵はすべて西宮の同じ数町内に井戸を買うか借りるかしており、それはいまも変わらない。水は数キロ東の、動くつもりのない蔵へ、管で送られ、あるいは車で運ばれている。",
          zh:"1840 年，釀造櫻正宗的山邑太左衛門同時經營魚崎與西宮兩座酒藏。西宮的酒始終比較好。他把杜氏從一邊調到另一邊，接著換設備，再換米，而差異既不隨人走、也不隨原料走，卻隨建築而留。他斷定問題出在井，於是開始以木桶把西宮的水運往魚崎。不到一代人的時間，灘的重要酒藏都已在西宮同樣的那幾條街上買下或租下水井，至今依然如此——水以管線輸送或以車輛運往東邊數公里外、無意搬遷的酒藏。" } },
        { t:"p", text:{
          en:"What makes the water unusual is a coincidence of three underground flows meeting beneath a narrow strip of Nishinomiya: granite-filtered groundwater off Mount Rokkō, the subsurface flow of the Shukugawa river, and seepage through an old buried shell bed that supplies calcium and phosphate. Sea influence from Osaka Bay adds a little chloride. The result is water that is high in phosphorus and potassium, moderately hard, and — because the granite and the sand filter it thoroughly — almost free of iron.",
          ja:"この水を特異なものにしているのは、西宮の細長い一帯の地下で、三つの流れが出会うという偶然である。六甲山からの花崗岩に濾された地下水、夙川の伏流水、そして古い貝殻層を通ってカルシウムとリン酸を供給する浸透水。大阪湾からの海の影響が、わずかな塩素を加える。その結果が、リンとカリウムに富み、適度に硬く、そして——花崗岩と砂が徹底して濾すために——ほとんど鉄を含まない水である。",
          zh:"使這水與眾不同的，是三股地下水流在西宮一條狹長地帶之下交會的巧合：經六甲山花崗岩過濾的地下水、夙川的伏流水，以及穿過古老埋藏貝層、供應鈣與磷酸的滲流水。來自大阪灣的海水影響，再添入少許氯。其結果是一種富含磷與鉀、硬度中等，並且——由於花崗岩與砂層徹底過濾——幾乎不含鐵的水。" } },
        { t:"note", label:{en:"A protected resource",ja:"守られた資源",zh:"受保護的資源"}, text:{
          en:"The miyamizu zone is small — a few hundred metres across — and it has been threatened repeatedly by construction, road-building and the 1995 Kobe earthquake, which changed the flow of several wells. Nishinomiya operates a conservation regime over the aquifer, and the brewers themselves fund monitoring. It is the clearest case in sake of an intangible tradition depending on a specific and fragile piece of ground.",
          ja:"宮水の地帯は狭い——差し渡し数百メートルにすぎない——そして、建設工事、道路整備、そしていくつもの井戸の流れを変えた一九九五年の阪神淡路大震災によって、繰り返し脅かされてきた。西宮市はこの帯水層に保全の仕組みを敷き、蔵元自身が監視の費用を負担している。無形の伝統が、特定の、そして脆い一片の土地に依存していることを、日本酒のなかで最も明瞭に示す例である。",
          zh:"宮水的範圍很小——寬僅數百公尺——並屢次受到建設工程、道路開闢，以及 1995 年阪神大地震（該次地震改變了數口井的水流）的威脅。西宮市對此含水層實施保全制度，酒藏本身則負擔監測費用。這是清酒中最清楚的一個例證：無形的傳統，依賴著一塊特定而脆弱的土地。" } }
      ]
    },

    { t:"section", id:"softwater",
      title:{ en:"The soft-water method", ja:"軟水醸造法", zh:"軟水釀造法" }, jp:"三浦仙三郎",
      body:[
        { t:"p", text:{
          en:"Hiroshima's water is very soft, and until the end of the nineteenth century that made the region's sake unreliable: fermentations stalled, mashes soured, and whole batches were lost. Miura Senzaburō, a brewer from Akitsu, spent two decades on the problem and published his solution in 1898 as <em>Kaijōhō Jissenroku</em>, a practical record of an improved brewing method. It was the first systematic soft-water technique, and it made Hiroshima — and by extension most of the soft-water half of Japan — capable of consistent quality.",
          ja:"広島の水はきわめて軟らかく、十九世紀の終わりまで、そのために当地の酒は当てにならなかった。発酵は停滞し、醪は酸敗し、仕込みが丸ごと失われた。安芸津の造り手・三浦仙三郎は二十年をこの問題に費やし、一八九八年、その解を『改醸法実践録』として世に出した。体系立てられた最初の軟水醸造法であり、これによって広島は——ひいては軟水地帯である日本の半分は——安定した品質を手にした。",
          zh:"廣島的水極軟，直到十九世紀末，這使當地的酒難以倚賴：發酵停滯、醪酸敗，整批酒付諸東流。安藝津的釀造者三浦仙三郎為此耗費二十年，並於 1898 年將其解法寫成《改釀法實踐錄》。這是第一套系統化的軟水釀造法，使廣島——乃至日本軟水地帶的半壁江山——得以達到穩定的品質。" } },
        { t:"steps", items:[
          { title:{en:"Steam harder, wash more",ja:"よく蒸し、よく洗う",zh:"蒸得更透、洗得更淨"}, jp:"洗米・蒸米",
            text:{en:"Rice washed and steamed to a firmer, cleaner condition compensates for the mash's lack of mineral drive, and removes the surface material that spoiling organisms would otherwise feed on.",
              ja:"米をより締まり清らかな状態まで洗い、蒸すことで、醪のミネラル不足による推進力の欠如を補い、腐造菌の餌となる表層の物質を取り除く。",
              zh:"把米洗得更淨、蒸得更結實，可彌補醪因礦物不足而缺乏的推進力，並去除原本會成為腐敗菌養分的表層物質。"} },
          { title:{en:"Build a stronger kōji",ja:"麹を強く造る",zh:"製出更強的麴"}, jp:"突破精",
            text:{en:"With less mineral support for the enzymes, the kōji itself must be more powerful and must have driven deep into the grain. The Hiroshima school's insistence on <em>tsuki-haze</em> kōji — mycelium penetrating the core rather than covering the surface — comes from here.",
              ja:"酵素を支えるミネラルが乏しい以上、麹そのものが強く、粒の奥深くまで食い込んでいなければならない。表面を覆うのではなく中心へ伸びる「突き破精」麹への広島流のこだわりは、ここに由来する。",
              zh:"既然支撐酵素的礦物質不足，麴本身就必須更強，且必須深入米粒內部。廣島流對「突破精」麴——菌絲深入核心而非覆蓋表面——的堅持，即源於此。"} },
          { title:{en:"Ferment low and long",ja:"低温で長く発酵させる",zh:"低溫長時間發酵"}, jp:"低温長期",
            text:{en:"A slow mash held cold is safer than a slow mash held warm, because the organisms that would spoil it are slower still at low temperature. This is the direct ancestor of ginjō technique, which is why Hiroshima is often credited as ginjō's birthplace.",
              ja:"遅い醪は、温かく置くより冷たく置くほうが安全である。腐造をもたらす菌は、低温ではさらに遅くなるからである。これは吟醸造りの直接の祖であり、広島が吟醸の発祥地とされることが多いのはそのためである。",
              zh:"緩慢的醪，維持低溫比維持溫暖更安全，因為造成腐敗的菌在低溫下更加遲緩。這正是吟釀技法的直系祖先，也是廣島常被視為吟釀發祥地的原因。"} },
          { title:{en:"Measure everything, change one thing",ja:"すべてを計り、一つだけ変える",zh:"全面量測，一次只改一項"}, jp:"百試千改",
            text:{en:"Miura's motto — <em>hyakushi senkai</em>, “a hundred trials, a thousand revisions” — is the first clear statement of empirical method in Japanese brewing, and is still quoted in kura today.",
              ja:"三浦の言葉——「百試千改」——は、日本の酒造りにおける経験的方法の最初の明確な表明であり、いまも蔵で引かれている。",
              zh:"三浦的座右銘——「百試千改」——是日本釀酒中經驗方法的第一次明確表述，至今仍為酒藏所引用。"} }
        ] }
      ]
    },

    { t:"section", id:"handling",
      title:{ en:"How water is actually handled", ja:"水の実際の扱い", zh:"水的實際處理" }, jp:"取水と処理",
      body:[
        { t:"defs", items:[
          { term:{en:"Brewing water",ja:"仕込水",zh:"仕込水"}, jp:"仕込水", romaji:"shikomi-mizu",
            def:{en:"The water added to the mash itself. Expressed as <em>kumimizu-buai</em>, a ratio to total rice weight, and typically around 130%. Raising it gives a lighter, more fluid mash; lowering it concentrates everything and raises the risk of the fermentation stopping.",
              ja:"醪そのものに加える水。総米に対する比率である汲水歩合として表され、おおむね130%前後になる。増やせば醪は軽く流動的になり、減らせばすべてが濃縮され、発酵停止の危険が高まる。",
              zh:"加入醪中的水，以相對總米重的「汲水步合」表示，通常約 130%。提高比率使醪更輕盈流動；降低則使一切濃縮，並提高發酵停滯的風險。"} },
          { term:{en:"Rinsing and soaking water",ja:"洗米・浸漬水",zh:"洗米・浸漬用水"}, jp:"洗米水",
            def:{en:"Held to the same purity standard as brewing water, and increasingly chilled to a set temperature, because water temperature is one of the two variables (with time) that control how much water the grain takes up.",
              ja:"仕込水と同じ純度基準で管理され、近年は一定温度に冷やされることが多い。水温は、粒の吸水量を決める二つの変数（もう一つは時間）の一方だからである。",
              zh:"以與仕込水相同的純度標準管理，且近年多冷卻至設定溫度，因為水溫是決定米粒吸水量的兩個變數之一（另一個是時間）。"} },
          { term:{en:"Dilution water",ja:"割水",zh:"割水"}, jp:"割水", romaji:"warimizu",
            def:{en:"Water added after pressing to bring the sake from around 18–20% alcohol down to the 15–16% at which most is sold. It is the same brewing water, sometimes degassed and always temperature-matched; adding it badly gives a flat, watery joint in the palate that tasters can detect.",
              ja:"上槽後に加え、18〜20%ほどの原酒を、多くが売られる15〜16%へ下げるための水。同じ仕込水を用い、脱気することもあり、必ず温度を合わせる。加え方が悪いと、味の中に平坦で水っぽい継ぎ目ができ、利き手はそれを感じ取る。",
              zh:"上槽後加入的水，用以將約 18–20% 的原酒降至多數商品所採的 15–16%。使用的是同一批仕込水，有時經脫氣處理，且必定調至同溫；加得不好，味覺上會出現平板而水感的接縫，品評者能夠察覺。"} },
          { term:{en:"Water treatment",ja:"水処理",zh:"水處理"}, jp:"活性炭・イオン交換",
            def:{en:"Almost universal now. Activated carbon removes organics and chlorine; sand and membrane filtration remove particulates; ion exchange or aeration-and-settling removes iron and manganese. A brewery may also adjust hardness deliberately — adding calcium to a soft water to push a stubborn mash along is legal and quietly common.",
              ja:"現在ではほぼ普遍的である。活性炭が有機物と塩素を除き、砂濾過や膜濾過が粒子を除き、イオン交換または曝気沈殿が鉄とマンガンを除く。硬度を意図的に調整する蔵もある。軟水にカルシウムを加えて頑固な醪を進ませることは合法であり、静かに広く行われている。",
              zh:"如今幾乎是普遍作法。活性碳去除有機物與氯；砂濾與膜濾去除顆粒；離子交換或曝氣沉澱去除鐵與錳。酒藏也可能刻意調整硬度——在軟水中加鈣以推動頑固的醪，既合法，也悄悄地相當常見。"} }
        ] },
        { t:"panel", title:{en:"How much water a brewery uses",ja:"蔵が使う水の量",zh:"酒藏用水量"}, tint:"water",
          body:[
            { t:"ul", items:[
              { en:"<strong>In the mash</strong> — about 1.3 litres per kilogram of rice.",ja:"<strong>醪に</strong>——米一キロあたりおよそ1.3リットル。",zh:"<strong>入醪</strong>——每公斤米約 1.3 公升。" },
              { en:"<strong>Washing and soaking</strong> — several times that again, and it must meet the same standard.",ja:"<strong>洗米と浸漬に</strong>——その数倍。しかも同じ基準を満たさねばならない。",zh:"<strong>洗米與浸漬</strong>——為此數倍，且必須符合同一標準。" },
              { en:"<strong>Cleaning</strong> — by far the largest share. A kura is washed constantly, and most of the season's water goes down the drain.",ja:"<strong>洗浄に</strong>——圧倒的に最大の割合。蔵は絶えず洗われ、一造りの水の大半は排水となる。",zh:"<strong>清洗</strong>——占比遠遠最大。酒藏不斷被沖洗，一季用水多半流入排水。" },
              { en:"<strong>Total</strong> — commonly quoted at twenty to forty times the weight of rice brewed, depending on how the brewery counts.",ja:"<strong>合計</strong>——数え方にもよるが、仕込んだ米の重量の二十倍から四十倍と言われることが多い。",zh:"<strong>合計</strong>——視計算方式而定，一般說法為所釀米重的二十至四十倍。" }
            ] }
          ] },
        { t:"p", text:{
          en:"One consequence is worth noticing: a brewery is a large, seasonal, quality-sensitive consumer of clean groundwater, in a country where groundwater is a shared resource under pressure. Several kura now run their own catchment forestry programmes — buying and managing the woodland above their aquifer — on the reasoning that the water they will brew with in thirty years is falling on those trees now.",
          ja:"一つの帰結は注目に値する。蔵とは、清浄な地下水を、季節ごとに大量に、品質に敏感なかたちで消費する存在である。しかも地下水が圧迫を受けている共有資源である国において、そうなのである。いくつかの蔵は、自らの帯水層の上流にある森林を買い取り管理する涵養林の取り組みを始めている。三十年後に仕込む水は、いまその木々に降っている、という理屈である。",
          zh:"有一項後果值得注意：酒藏是潔淨地下水的大量、季節性且對品質敏感的消費者，而所在的國家，地下水正是一項承受壓力的共享資源。已有數家酒藏推行自有的涵養林計畫——買下並管理含水層上游的林地——其理由是：三十年後用來釀酒的水，此刻正落在那些樹上。" } }
      ]
    },

{ t:"section", id:"spec",
      title:{ en:"The numbers a brewery actually measures", ja:"蔵が実際に測る数値", zh:"酒藏實際會測的數值" }, jp:"醸造用水の基準",
      body:[
        { t:"p", text:{
          en:"Brewing water must first satisfy drinking-water law, because sake is a foodstuff. Beyond that the industry applies its own, much tighter specification, and the tightest limits of all are on two metals that are harmless to drink and ruinous to brew with.",
          ja:"仕込水はまず飲用水の基準を満たさなければならない。酒は食品だからである。そのうえで業界は独自の、はるかに厳しい規格を課す。そして最も厳しい上限が置かれているのは、飲むぶんには無害で、醸すには致命的な二つの金属である。",
          zh:"釀造用水首先必須符合飲用水法規，因為清酒是食品。在此之上，業界另有一套嚴格得多的規格；而其中最嚴的上限，落在兩種喝下去無害、拿來釀酒卻致命的金屬上。" } },

        { t:"table",
          cols:[{en:"Measure",ja:"項目",zh:"項目"},{en:"Japanese",ja:"表記",zh:"日文"},{en:"Target",ja:"目安",zh:"目標值"},{en:"Why it matters",ja:"理由",zh:"為何重要"}],
          jpCols:[1],
          rows:[
            [{en:"Iron",ja:"鉄",zh:"鐵"},"鉄分",
             {en:"below about 0.02 ppm",ja:"およそ0.02ppm以下",zh:"約 0.02 ppm 以下"},
             {en:"The single most damaging impurity. Iron binds to <em>deferriferrichrysin</em>, a compound produced by the kōji mould, and the complex is deep red-brown. Iron-contaminated sake browns quickly and develops a coarse, metallic staleness. Drinking water may legally carry ten times this.",
              ja:"最も有害な不純物である。鉄は麹菌が生産するデフェリフェリクリシンと結合し、その錯体は濃い赤褐色を呈する。鉄を含む酒は速やかに着色し、粗く金属的な老ねを生じる。飲用水はこの十倍を法的に許容する。",
              zh:"最具破壞性的雜質。鐵會與麴菌所產生的 deferriferrichrysin 結合，形成深紅褐色的錯合物；含鐵的酒會迅速褐變，並產生粗糙、帶金屬味的老化氣息。飲用水法規容許的含量可達此值的十倍。"}],
            [{en:"Manganese",ja:"マンガン",zh:"錳"},"マンガン",
             {en:"below about 0.02 ppm",ja:"およそ0.02ppm以下",zh:"約 0.02 ppm 以下"},
             {en:"Catalyses light-induced colouring. A sake made with manganese-bearing water will darken visibly on a shop shelf under fluorescent light within weeks.",
              ja:"光による着色を触媒する。マンガンを含む水で醸した酒は、蛍光灯の下の店頭で、数週のうちに目に見えて濃くなる。",
              zh:"會催化光照導致的著色。以含錳之水釀成的酒，在日光燈下的店頭陳列數週內就會明顯變深。"}],
            [{en:"Potassium",ja:"カリウム",zh:"鉀"},"カリウム",
             {en:"wanted",ja:"必要",zh:"需要"},
             {en:"A yeast nutrient and a driver of vigorous fermentation. Hard-water regions have it in abundance, which is the mechanical basis of the Nada style.",
              ja:"酵母の栄養であり、旺盛な発酵の駆動力である。硬水の産地はこれに富み、それが灘の型の力学的な根拠である。",
              zh:"酵母的養分，也是旺盛發酵的動力。硬水產地含量豐富，這正是灘之風格的力學基礎。"}],
            [{en:"Phosphorus",ja:"リン",zh:"磷"},"リン酸",
             {en:"wanted",ja:"必要",zh:"需要"},
             {en:"Required for yeast growth and for enzyme activity. Its abundance in Miyamizu is the specific reason that water ferments so hard.",
              ja:"酵母の増殖と酵素の働きに要る。宮水にこれが豊富であることが、あの水が力強く発酵する具体的な理由である。",
              zh:"酵母增殖與酵素作用所需。宮水富含磷，正是那口水發酵力如此強勁的具體原因。"}],
            [{en:"Ammonia / nitrite",ja:"アンモニア・亜硝酸",zh:"氨／亞硝酸"},"アンモニア性窒素",
             {en:"effectively none",ja:"実質的に不検出",zh:"實質上不得檢出"},
             {en:"Their presence signals organic contamination of the aquifer — sewage, fertiliser runoff — and predicts microbial trouble.",
              ja:"検出は帯水層の有機汚染——汚水、肥料の流出——を示し、微生物的な事故を予告する。",
              zh:"若檢出，代表含水層受到有機污染——污水、肥料逕流——並預示微生物方面的麻煩。"}],
            [{en:"Organic matter",ja:"有機物",zh:"有機物"},"過マンガン酸カリウム消費量",
             {en:"low",ja:"少ないこと",zh:"越低越好"},
             {en:"Measured as permanganate demand. High values mean surface water is reaching the well, which brings both microbes and seasonal instability.",
              ja:"過マンガン酸カリウム消費量として測る。高い値は、表流水が井戸に達していることを意味し、微生物と季節的な不安定の双方をもたらす。",
              zh:"以高錳酸鉀消耗量測定。數值偏高代表地表水滲入井中，會同時帶來微生物與季節性的不穩定。"}],
            [{en:"Hardness",ja:"硬度",zh:"硬度"},"硬度",
             {en:"2–10 °dH, by intention",ja:"2〜10°dH。意図による",zh:"2–10 °dH，視意圖而定"},
             {en:"Not a pass/fail figure but a choice of style. Miyamizu sits around 8 °dH; Hiroshima's Akitsu water is close to 1. Both make excellent sake by opposite routes.",
              ja:"合否の数値ではなく、様式の選択である。宮水はおよそ8°dH、広島安芸津の水は1に近い。いずれも正反対の道でよい酒を生む。",
              zh:"這不是合格與否的數值，而是風格的抉擇。宮水約 8 °dH，廣島安藝津的水則接近 1；兩者以相反的路徑各自釀出好酒。"}],
            [{en:"Chloride",ja:"塩素イオン",zh:"氯離子"},"塩素イオン",
             {en:"low",ja:"少ないこと",zh:"越低越好"},
             {en:"High chloride suggests seawater intrusion — a live concern in coastal breweries, where over-extraction of groundwater draws salt inland.",
              ja:"高い塩素イオンは海水の侵入を示唆する。海沿いの蔵では現実の懸念であり、地下水の汲み上げすぎが塩を内陸へ引き込む。",
              zh:"氯離子偏高暗示海水入侵——這在沿海酒藏是真實的隱憂：過度抽取地下水會把鹽分引向內陸。"}]
          ] },

        { t:"note", text:{
          en:"Iron is removable and hardness is adjustable, so a modern brewery is not simply at the mercy of its well. Aeration and sand filtration precipitate iron; activated carbon takes out odour and organics; ion exchange or reverse osmosis will move hardness in either direction. What treatment cannot manufacture is the particular combination — high phosphorus and potassium with almost no iron — that makes a water like Miyamizu worth carting across a bay.",
          ja:"鉄は除去でき、硬度は調整できる。ゆえに現代の蔵は、井戸のなすがままではない。曝気と砂濾過は鉄を沈殿させ、活性炭は臭気と有機物を除き、イオン交換や逆浸透は硬度をどちらへも動かす。処理が作り出せないのは、あの特定の組み合わせ——リンとカリウムが高く、鉄がほとんどない——であり、それこそが宮水のような水を湾の向こうへ運ぶ価値のあるものにしている。",
          zh:"鐵可以去除，硬度可以調整，因此現代酒藏並非全然任憑水井擺布。曝氣與砂濾使鐵沉澱，活性碳去除異味與有機物，離子交換或逆滲透可將硬度往任一方向調整。處理無法製造出來的，是那個特定的組合——磷與鉀高，而鐵幾乎沒有——正是它讓宮水這樣的水值得跨過海灣運送。" } }
      ] },

    { t:"section", id:"four-waters",
      title:{ en:"Four different waters in one brewery", ja:"一つの蔵の四種の水", zh:"同一座酒藏裡的四種水" }, jp:"用途別の水",
      body:[
        { t:"p", text:{
          en:"A brewery does not use one water; it uses the same source for several jobs with quite different requirements, and it uses an astonishing quantity of it. Total water consumption runs to something like twenty to thirty times the weight of rice processed — most of it for washing rice and cleaning equipment, not for the mash.",
          ja:"蔵は一つの水を使うのではない。同じ源を、要求のまるで異なるいくつもの用途に使い、そして驚くべき量を使う。総使用量は処理する米の重量のおよそ二十倍から三十倍に及ぶ。その大半は洗米と洗浄であって、醪ではない。",
          zh:"酒藏用的不是「一種水」，而是把同一水源用在要求各異的數項工作上，而且用量驚人。總用水量約為所處理米重的二十至三十倍，其中大部分用於洗米與清洗器具，而非仕込。" } },

        { t:"grid", cols:2, cells:[
          { k:{ en:"Steeping water", ja:"浸漬水", zh:"浸漬水" }, jp:"洗米・浸漬水",
            v:{ en:"Temperature-critical", ja:"温度が命", zh:"溫度是關鍵" },
            d:{ en:"Rice absorbs water fast and then slowly, and for a daiginjō the soak is timed by the second against a target uptake of a few per cent. The water must be held at a known temperature — usually chilled to around 10 °C — because absorption rate is temperature-dependent. This is the step where a brewery's water contacts rice at its most vulnerable.",
              ja:"米は初め速く、のちに緩やかに水を吸う。大吟醸では、数パーセントという目標吸水率に対し、浸漬は秒単位で計られる。吸水速度は温度に依存するため、水は既知の温度——通常10℃前後に冷やして——保たれねばならない。蔵の水が、最も無防備な状態の米に触れる工程である。",
              zh:"米先快後慢地吸水；釀大吟釀時，浸漬以秒計時，對準幾個百分點的目標吸水率。由於吸水速度取決於溫度，水必須維持在已知溫度——通常冷卻至 10 °C 上下。這是酒藏的水接觸到最脆弱狀態之米的一道工序。" } },
          { k:{ en:"Mash water", ja:"仕込水", zh:"仕込水" }, jp:"仕込水",
            v:{ en:"The chemistry that matters", ja:"化学が効くところ", zh:"化學真正起作用之處" },
            d:{ en:"The water that goes into the starter and the three-stage mash, at roughly 130% of total rice weight across the whole ferment. Everything the hardness argument is about happens here: minerals feed the yeast, and the fermentation curve follows.",
              ja:"酒母と三段仕込みに入る水で、全仕込みを通じて総米重量のおよそ130%にあたる。硬度をめぐる議論の一切はここで起こる——ミネラルが酵母を養い、発酵曲線がそれに従う。",
              zh:"進入酒母與三段仕込的水，整個發酵過程約為總米重的 130%。所有關於硬度的爭論都發生在這裡：礦物質餵養酵母，發酵曲線隨之而定。" } },
          { k:{ en:"Blending water", ja:"割水", zh:"割水" }, jp:"割水",
            v:{ en:"Added after pressing", ja:"上槽後に加える", zh:"上槽後加入" },
            d:{ en:"Sake ferments to 17–20% and is normally diluted to 15–16% for bottling. That dilution is a substantial fraction of the finished liquid, so blending water is chosen and treated as carefully as mash water — and a genshu, by declining it, is a bottle with none of this water in it at all.",
              ja:"酒は17〜20%まで発酵し、通常は瓶詰めのために15〜16%へ薄められる。その希釈は最終的な液の相当な割合を占めるから、割水は仕込水と同じだけ丁寧に選ばれ、処理される。原酒とは、これを断ることによって、この水を一滴も含まない瓶である。",
              zh:"酒發酵至 17–20%，裝瓶前通常稀釋至 15–16%。這道稀釋占了成品液體相當的比例，因此割水的選擇與處理和仕込水一樣講究——而原酒，正是因為拒絕了它，成為完全不含這種水的一瓶酒。" } },
          { k:{ en:"Wash water", ja:"洗浄水", zh:"清洗用水" }, jp:"洗浄水",
            v:{ en:"The largest volume", ja:"最大の量", zh:"用量最大" },
            d:{ en:"Tanks, hoses, the press, the bottling line. It never enters the sake, but it is the reason a brewery's water bill and its wastewater permit are serious operational facts — and the reason a brewery in a drought-prone basin is in real trouble in a dry year.",
              ja:"タンク、ホース、槽、瓶詰めライン。酒には入らないが、蔵の水道と排水許可が経営上の重い現実である理由であり、渇水しやすい盆地の蔵が乾いた年に本当に困る理由でもある。",
              zh:"酒槽、管線、壓榨機、裝瓶線。它從不進入酒中，卻是酒藏的水費與排水許可成為嚴肅營運課題的原因，也是位於易旱盆地的酒藏在乾旱年份真正陷入困境的原因。" } }
        ] }
      ] },

    { t:"section", id:"named",
      title:{ en:"Named waters", ja:"名のある水", zh:"有名字的水" }, jp:"銘水",
      body:[
        { t:"p", text:{
          en:"A handful of sources are famous enough to be named on labels and, in several cases, protected as cultural or environmental assets. They are worth knowing not as trivia but because each one anchors a regional style that would otherwise be hard to account for.",
          ja:"いくつかの水源は、ラベルに名を記されるほどに知られ、そのいくつかは文化的・環境的資産として保護されている。雑学としてではなく、それぞれが、そうでなければ説明の難しい地域の型を支えているがゆえに、知る値打ちがある。",
          zh:"有少數水源知名到會被寫上酒標，其中數處更被列為文化或環境資產受到保護。認識它們的價值不在於冷知識，而在於每一處都支撐著一種否則難以解釋的地域風格。" } },

        { t:"table",
          cols:[{en:"Water",ja:"水",zh:"水"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Where",ja:"産地",zh:"所在"},{en:"Character and consequence",ja:"性質と帰結",zh:"性質與結果"}],
          jpCols:[1],
          rows:[
            [{en:"Miyamizu",ja:"宮水",zh:"宮水"},"宮水",
             {en:"Nishinomiya, Hyōgo — Nada",ja:"兵庫県西宮・灘",zh:"兵庫縣西宮・灘"},
             {en:"Medium-hard at roughly 8 °dH, high in potassium and phosphorus, and remarkably low in iron — figures cited around 0.001 ppm against perhaps 0.02 for ordinary groundwater. Three subterranean flows converge here, one of them oxygen-rich enough to oxidise dissolved iron out of the mix. The result ferments hard and fast and yields the dry, firm <em>otokozake</em> of Nada.",
              ja:"およそ8°dHの中硬水で、カリウムとリンに富み、鉄が際立って少ない——0.001ppm程度と引かれ、通常の地下水のおよそ0.02ppmと対比される。三つの伏流がここで合わさり、うち一つは溶存鉄を酸化して落とすほど酸素に富む。結果として強く速く発酵し、灘の辛く硬い男酒を生む。",
              zh:"約 8 °dH 的中硬水，富含鉀與磷，含鐵量卻極低——常被引用為 0.001 ppm 上下，相對於一般地下水約 0.02 ppm。三股伏流在此匯合，其中一股含氧量高到足以把溶解的鐵氧化去除。其結果是發酵強而快，造就灘那種辛口而結實的「男酒」。"}],
            [{en:"Gokō-sui",ja:"御香水",zh:"御香水"},"御香水",
             {en:"Fushimi, Kyoto",ja:"京都・伏見",zh:"京都・伏見"},
             {en:"Soft, gentle, and mineral-poor by comparison with Nada. Fermentation is slower and the sake rounder and sweeter — the <em>onnazake</em> to Nada's otokozake, an opposition Japanese drinkers have used for centuries. The spring is a designated famous water of Japan.",
              ja:"灘に比して軟らかく、穏やかで、ミネラルに乏しい。発酵は緩く、酒は丸く甘い——灘の男酒に対する女酒であり、日本の飲み手が何世紀も用いてきた対比である。この湧水は日本の名水に選ばれている。",
              zh:"相較於灘，水質軟、性格溫和、礦物質偏少。發酵較慢，酒也更圓潤帶甜——相對於灘的「男酒」，這是「女酒」，一組日本飲者沿用了數百年的對照。此泉並獲選為日本名水。"}],
            [{en:"Akitsu water",ja:"安芸津の水",zh:"安藝津之水"},"軟水",
             {en:"Higashi-Hiroshima",ja:"広島県東広島",zh:"廣島縣東廣島"},
             {en:"Extremely soft — close to distilled in mineral terms. It is the water that defeated Miura Senzaburō for thirty years and then, once he had built a method around it, produced the technical basis of ginjō brewing. Soft water is not a handicap; it is a different instrument.",
              ja:"きわめて軟らかい——ミネラルの点では蒸留水に近い。三浦仙三郎を三十年打ち負かし、そして彼がそれに合わせた方法を築いたのち、吟醸造りの技術的基礎を生んだ水である。軟水は不利ではない。別の楽器である。",
              zh:"極軟——就礦物質而言接近蒸餾水。它讓三浦仙三郎受挫三十年，而在他為它量身打造出方法之後，又催生了吟釀釀造的技術基礎。軟水不是缺陷，而是另一件樂器。"}],
            [{en:"Hakusan snowmelt",ja:"白山の伏流水",zh:"白山伏流水"},"白山伏流水",
             {en:"Ishikawa and Fukui",ja:"石川・福井",zh:"石川、福井"},
             {en:"Snowmelt filtered through the volcanic mass of Mount Haku, emerging soft to medium and very clean. It supplies the Noto and Kaga breweries, and the region's rich yamahai style is built on it.",
              ja:"白山の火山体を通って濾された雪解け水で、軟水から中硬水、きわめて清冽な状態で湧く。能登・加賀の蔵を支え、この地の厚みある山廃の型はこの水の上に立つ。",
              zh:"經白山火山體過濾的融雪水，湧出時介於軟水與中硬水之間，且極為潔淨。它供應能登與加賀的酒藏，該地厚實的山廢風格便建立其上。"}],
            [{en:"Fuji groundwater",ja:"富士山の伏流水",zh:"富士山伏流水"},"富士山伏流水",
             {en:"Shizuoka and Yamanashi",ja:"静岡・山梨",zh:"靜岡、山梨"},
             {en:"Basalt-filtered, soft, and famously stable in temperature and volume year-round. Combined with prefectural yeast it underwrites the clean, quiet, food-first Shizuoka style.",
              ja:"玄武岩に濾された軟水で、水温も湧出量も年間を通じて安定していることで知られる。県の酵母と組み合わさって、清らかで静かな、料理を先に立てる静岡の型を支えている。",
              zh:"經玄武岩過濾的軟水，以全年水溫與湧量穩定著稱。與縣酵母結合後，撐起了靜岡那種乾淨、安靜、以佐餐為先的風格。"}],
            [{en:"Zaō and Ōu snowmelt",ja:"蔵王・奥羽の雪解け水",zh:"藏王與奧羽的融雪水"},"雪解け水",
             {en:"Yamagata, Akita, Iwate",ja:"山形・秋田・岩手",zh:"山形、秋田、岩手"},
             {en:"Deep snowpack recharging soft aquifers, and cold enough to matter. The northern soft-water belt is why Tōhoku sake reads rounder and gentler than Niigata despite a similar climate.",
              ja:"厚い積雪が軟らかな帯水層を涵養し、そして意味を持つほどに冷たい。北の軟水地帯こそ、気候の近い新潟に比して東北の酒が丸く穏やかに読まれる理由である。",
              zh:"深厚積雪涵養軟質含水層，且冷得足以產生影響。北方的軟水帶，正是東北清酒儘管氣候與新潟相近、讀來卻更圓潤溫和的原因。"}]
          ] },

        { t:"p", text:{
          en:"Two structural pressures now sit under all of this. Groundwater levels around Nada have been managed and monitored for decades because urban development and over-extraction both threaten the Miyamizu aquifer; and across the snow country, a warming climate is reducing the snowpack that recharges the soft northern aquifers. Water is the one input a brewery cannot relocate, which makes it the input most exposed to what happens to the landscape around it. See <a href=\"terroir.html#channels\">Terroir</a> for where this sits among the other channels, and <a href=\"industry.html\">Industry &amp; Trade</a> for the economics.",
          ja:"この一切の下に、いま二つの構造的な圧力がある。灘周辺の地下水位は数十年にわたり管理・監視されてきた。都市開発と汲み上げすぎが、ともに宮水の帯水層を脅かすからである。そして雪国の全域で、温暖化が北の軟らかな帯水層を涵養する積雪を減らしつつある。水は蔵が移せない唯一の原料であり、それゆえ周囲の景観に起こることに最もさらされた原料でもある。他の経路のなかでの位置づけは<a href=\"terroir.html#channels\">風土</a>、経済については<a href=\"industry.html\">産業と流通</a>を参照。",
          zh:"如今這一切之下有兩股結構性壓力。灘周邊的地下水位數十年來持續受到管理與監測，因為都市開發與過度抽取都威脅著宮水的含水層；而在整個雪國，暖化正在減少涵養北方軟質含水層的積雪。水是酒藏唯一無法搬遷的原料，因此也是最直接暴露於周遭地景變化的原料。它在其他通道中的位置見<a href=\"terroir.html#channels\">風土</a>，經濟面向見<a href=\"industry.html\">產業與貿易</a>。" } }
      ] },

    { t:"related", items:[
      { href:"ingredients.html", why:{ en:"The other three inputs, in proportion.", ja:"他の三つの原料を、比のなかで。", zh:"另外三項原料，以及它們的比例。" } },
      { href:"region-kinki.html", why:{ en:"Miyamizu, and the hard-water tradition it created.", ja:"宮水と、それが生んだ硬水の伝統。", zh:"宮水，以及它所造就的硬水傳統。" } },
      { href:"region-west.html", why:{ en:"The soft-water answer, and why the world brews on it.", ja:"軟水の答えと、なぜ世界がその上で醸すのか。", zh:"軟水的那個答案，以及為何全世界都建立在它之上。" } },
      { href:"sustainability.html", why:{ en:"Where the other forty-eight times the rice weight actually goes.", ja:"米の重さの残る四十八倍が、実際にどこへ行くか。", zh:"米重量的另外四十八倍水，實際上去了哪裡。" } }
    ] }
  ]
};


/* ---- ------------------------------------------------ koji */
SAKE.pages["koji"] = {
  kicker: { en: "Making · 06", ja: "造り · 06", zh: "釀造 · 06" },
  title:  { en: "Kōji & Yeast", ja: "麹と酵母", zh: "麴與酵母" },
  jp: "麹菌 · 酵母 · 乳酸菌",
  lede: {
    en: "Sake is made by three organisms, working in an order the brewer arranges. A mould converts starch to sugar. A yeast converts sugar to alcohol. A bacterium — invited or added — makes the environment acidic enough that nothing else can join in. Understanding sake means understanding what each of the three wants, and where those wants conflict.",
    ja: "日本酒は三つの微生物によって造られる。順序を組むのは造り手である。カビがデンプンを糖に変え、酵母が糖をアルコールに変え、細菌が——招かれるにせよ加えられるにせよ——他の何ものも参加できないほど環境を酸性にする。日本酒を理解するとは、この三者がそれぞれ何を求めているのか、そしてその求めがどこで衝突するのかを理解することである。",
    zh: "日本酒由三種微生物釀成，其先後順序由釀造者安排。黴菌把澱粉變成糖，酵母把糖變成酒精，細菌——無論是被邀請還是被添加——則使環境酸到沒有其他生物能加入。理解日本酒，就是理解這三者各自想要什麼，以及這些需求在何處衝突。"
  },
  body: [
    { t:"section", id:"kojikin",
      title:{ en:"Aspergillus oryzae", ja:"麹菌", zh:"麴菌" }, jp:"ニホンコウジカビ · 国菌",
      body:[
        { t:"p", text:{
          en:"<em>Aspergillus oryzae</em> is a filamentous mould, domesticated in East Asia over more than a thousand years from a wild ancestor, <em>A. flavus</em>, that produces aflatoxins. The domesticated lineage has lost the ability to make them — the relevant genes are present but broken. In 2006 the Brewing Society of Japan designated it the <em>kokkin</em>, the national fungus. No other country has a national micro-organism.",
          ja:"ニホンコウジカビ（Aspergillus oryzae）は糸状菌であり、アフラトキシンを産生する野生種 A. flavus を祖先として、東アジアで千年以上をかけて家畜化された。家畜化された系統はその毒素産生能を失っている——遺伝子は存在するが壊れている。2006年、日本醸造学会はこれを「国菌」と定めた。国の微生物をもつ国は他にない。",
          zh:"米麴菌（Aspergillus oryzae）是一種絲狀真菌，由會產生黃麴毒素的野生祖先 A. flavus 在東亞經千年以上馴化而來。馴化的譜系已失去產毒能力——相關基因仍在，但已損壞。2006 年，日本釀造學會將其定為「國菌」。世上沒有第二個國家擁有國家微生物。" } },
        { t:"p", text:{
          en:"It is not the fungus itself that matters but what it secretes. Grown into steamed rice, it extends hyphae inward and releases a battery of enzymes into the grain. Those enzymes remain active after the mould is killed, and they do the work in the fermentation tank long after the mould's own life is over.",
          ja:"重要なのはカビそのものではなく、それが分泌するものである。蒸米のなかで菌糸を内部へ伸ばし、粒のなかへ一群の酵素を放出する。それらの酵素はカビが死んだ後も活性を保ち、カビ自身の生が終わったずっと後まで、発酵タンクのなかで働き続ける。",
          zh:"重要的不是黴菌本身，而是它所分泌之物。它在蒸米中向內延伸菌絲，向米粒釋放一整組酵素。這些酵素在黴菌死後仍保有活性，並在黴菌自身的生命結束後很久，繼續在發酵槽中工作。" } },
        { t:"table",
          caption:{en:"What the enzymes do",ja:"酵素の働き",zh:"酵素的作用"},
          cols:[{en:"Enzyme",ja:"酵素",zh:"酵素"},{en:"Acts on",ja:"基質",zh:"作用對象"},{en:"Produces",ja:"生成物",zh:"生成物"},{en:"Sensory consequence",ja:"官能上の帰結",zh:"感官結果"}],
          rows:[
            ["α-amylase",{en:"starch chains",ja:"デンプン鎖",zh:"澱粉鏈"},{en:"dextrins",ja:"デキストリン",zh:"糊精"},{en:"liquefies the mash; body and viscosity",ja:"醪を液化する。厚みと粘性",zh:"使醪液化；帶來酒體與黏度"}],
            ["glucoamylase",{en:"dextrins",ja:"デキストリン",zh:"糊精"},{en:"glucose",ja:"ブドウ糖",zh:"葡萄糖"},{en:"the sugar the yeast actually eats; residual glucose is sweetness",ja:"酵母が実際に食べる糖。残った分が甘みとなる",zh:"酵母實際攝取的糖；殘留者即為甜味"}],
            [{en:"acid protease",ja:"酸性プロテアーゼ",zh:"酸性蛋白酶"},{en:"rice protein",ja:"米のたんぱく質",zh:"米蛋白質"},{en:"peptides",ja:"ペプチド",zh:"胜肽"},{en:"umami — and, in excess, bitterness and heaviness",ja:"うま味。過剰であれば苦みと重さ",zh:"旨味；過量則轉為苦澀與厚重"}],
            [{en:"acid carboxypeptidase",ja:"酸性カルボキシペプチダーゼ",zh:"酸性羧肽酶"},{en:"peptides",ja:"ペプチド",zh:"胜肽"},{en:"free amino acids",ja:"遊離アミノ酸",zh:"游離胺基酸"},{en:"the amino-acid figure on a back label; also yeast nutrition",ja:"裏ラベルのアミノ酸度の数値。同時に酵母の栄養",zh:"背標上的胺基酸度數值；同時也是酵母的養分"}],
            [{en:"ferulic acid esterase",ja:"フェルラ酸エステラーゼ",zh:"阿魏酸酯酶"},{en:"cell wall bound acids",ja:"細胞壁結合酸",zh:"細胞壁結合酸"},{en:"ferulic acid → 4-VG",ja:"フェルラ酸 → 4-VG",zh:"阿魏酸 → 4-VG"},{en:"clove/smoke notes; usually a fault in sake, prized in some beers",ja:"丁子や燻香。日本酒では概ね欠点、ビールでは長所とされることもある",zh:"丁香與煙燻氣息；於日本酒中多屬缺陷，某些啤酒卻視為優點"}]
          ] },
        { t:"panel", tint:"koji", title:{en:"Not only sake",ja:"日本酒だけではない",zh:"不只是日本酒"}, body:[
          { t:"p", text:{
            en:"The same organism, in different strains and conditions, makes miso, soy sauce, mirin, rice vinegar and amazake. Two related species do the equivalent job for distilled spirits: <em>A. luchuensis</em> (black kōji) for awamori and <em>A. kawachii</em> (white kōji) for shōchū, both of which produce large amounts of citric acid — an adaptation to subtropical brewing where a naturally acidic mash prevents spoilage. Sake, brewed in the cold, uses the yellow kōji that does not.",
            ja:"同じ菌が、株と条件を変えることで、味噌・醤油・みりん・米酢・甘酒をつくる。蒸留酒については近縁の二種が同じ役割を担う——泡盛の黒麹菌（A. luchuensis）と焼酎の白麹菌（A. kawachii）である。いずれもクエン酸を大量に生成する。亜熱帯の醸造において、酸性の醪が腐敗を防ぐための適応である。寒中に造られる日本酒は、それをしない黄麹を用いる。",
            zh:"同一種微生物，在不同菌株與條件下，製成味噌、醬油、味醂、米醋與甘酒。蒸餾酒則由兩個近緣種擔任相同角色：泡盛用的黑麴菌（A. luchuensis）與燒酎用的白麴菌（A. kawachii），兩者皆大量產生檸檬酸——這是亞熱帶釀造中，以酸性醪防腐的適應。於寒冷中釀造的日本酒，則使用不產檸檬酸的黃麴。" } }
        ] }
      ]
    },

    { t:"section", id:"kojizukuri",
      title:{ en:"Making kōji", ja:"製麹", zh:"製麴" }, jp:"麹造り · 一麹",
      body:[
        { t:"p", text:{
          en:"“First kōji, second the starter, third the mash.” <em>Ichi kōji, ni moto, san tsukuri</em> — the oldest maxim in the trade, and a ranking of where a batch is most easily lost. Kōji-making takes 45 to 50 hours in a sealed cedar-lined room, the <em>kōjimuro</em>, held at around 30 °C and high humidity, and it is the only part of the process that cannot be left alone overnight.",
          ja:"「一麹、二酛、三造り」——この道で最も古い格言であり、一仕込みが最も容易に失われる順序でもある。製麹は、杉板で覆われ密閉された麹室のなかで、およそ三十度・高湿度に保たれて四十五〜五十時間を要し、全工程のなかで唯一、夜通し放置できない部分である。",
          zh:"「一麴、二酛、三造」——業界最古老的格言，同時也是「一批酒最容易在何處失敗」的排序。製麴在密閉的杉木麴室中進行，維持約 30°C 與高濕度，歷時 45 至 50 小時，是整個流程中唯一無法整夜無人看顧的環節。" } },
        { t:"steps", items:[
          { title:{en:"Bringing in",ja:"引き込み",zh:"引入"}, jp:"引込み", romaji:"hikikomi",
            meta:{en:"hour 0 · rice at ≈ 35 °C",ja:"0時間・蒸米 約35℃",zh:"第 0 小時・蒸米約 35°C"},
            text:{en:"Steamed rice is cooled to around body temperature and carried into the kōji room, then heaped on the cedar bed and covered with cloth to hold its warmth and moisture.",ja:"蒸米を人肌ほどに冷まして麹室へ運び入れ、床に積んで布で覆い、温度と水分を保つ。",zh:"蒸米冷卻至體溫左右後搬入麴室，堆在杉木床上，蓋布保溫保濕。"} },
          { title:{en:"Sowing the spores",ja:"種切り",zh:"撒種"}, jp:"種切り", romaji:"tanekiri",
            meta:{en:"hour 0–1 · ≈ 100 g spores per tonne of rice",ja:"0〜1時間・米1トンあたり種麹約100g",zh:"第 0–1 小時・每噸米約 100 克種麴"},
            text:{en:"Kōji spores — <em>tane-kōji</em>, bought from one of a handful of specialist houses, some of them five centuries old — are sifted over the rice through fine cloth and mixed in by hand. The spore supplier is one of the least visible and most consequential choices a brewery makes.",ja:"種麹——五百年の歴史をもつものもある、ごく少数の種麹屋から購入する——を、細かな布で蒸米の上に振るい落とし、手で混ぜ込む。種麹屋の選択は、蔵が下す判断のなかで最も目に見えず、最も影響の大きいものの一つである。",zh:"種麴——購自僅存少數的專業種麴商，其中有些已有五百年歷史——以細布篩落於米上，再以手拌勻。種麴供應商的選擇，是酒藏所做決定中最不可見、卻最具影響力者之一。"} },
          { title:{en:"First turning",ja:"切り返し",zh:"切返"}, jp:"切返し", romaji:"kirikaeshi",
            meta:{en:"hour 10–12 · 31–32 °C",ja:"10〜12時間・31〜32℃",zh:"第 10–12 小時・31–32°C"},
            text:{en:"Germination has begun and the pile is now generating its own heat. Breaking it up and re-forming it evens out temperature and moisture and separates grains that have clumped together.",ja:"発芽が始まり、山は自ら発熱している。これを崩して積み直すことで温度と水分を均一にし、固まった粒をほぐす。",zh:"孢子已萌發，堆體開始自行發熱。將其打散重堆，可均勻溫濕度並分開結塊的米粒。"} },
          { title:{en:"Dividing out",ja:"盛り",zh:"分盛"}, jp:"盛り", romaji:"mori",
            meta:{en:"hour 20–24 · into boxes or trays",ja:"20〜24時間・箱または蓋に小分け",zh:"第 20–24 小時・分裝入箱或麴蓋"},
            text:{en:"The mass is divided into shallow wooden boxes so that heat can escape. From here the brewer controls temperature almost entirely by how the rice is spread — mounded, furrowed, or flattened — and by how the room is ventilated.",ja:"熱を逃がすため、全体を浅い木箱に小分けする。以後、温度の制御はほぼすべて、米をどう広げるか——盛るか、溝を切るか、平らにするか——と、室の換気の仕方によってなされる。",zh:"為使熱能散出，將整體分裝入淺木箱。此後，溫度控制幾乎完全取決於米如何鋪陳——堆高、開溝或攤平——以及麴室的通風方式。"} },
          { title:{en:"Middle work",ja:"仲仕事",zh:"中仕事"}, jp:"仲仕事", romaji:"naka-shigoto",
            meta:{en:"hour 28–32 · 34–36 °C",ja:"28〜32時間・34〜36℃",zh:"第 28–32 小時・34–36°C"},
            text:{en:"The rice is stirred and re-spread to release heat and moisture. Evaporation is now the brewer's main cooling tool: roughly twelve grams of water must leave each kilogram of kōji per hour at peak to hold the temperature.",ja:"熱と水分を逃がすため、米を撹拌して広げ直す。この段階では蒸発が主たる冷却手段であり、最盛期には温度を保つために麹1キログラムあたり毎時およそ12グラムの水を飛ばす必要がある。",zh:"翻拌並重新攤開以釋出熱與水氣。此階段蒸發是主要的降溫手段：於高峰期，每公斤麴每小時約須逸散 12 克水分才能維持溫度。"} },
          { title:{en:"Final work",ja:"仕舞仕事",zh:"仕舞仕事"}, jp:"仕舞仕事", romaji:"shimai-shigoto",
            meta:{en:"hour 34–38 · peak 38–42 °C",ja:"34〜38時間・最高温度38〜42℃",zh:"第 34–38 小時・最高溫 38–42°C"},
            text:{en:"The last intervention. Temperature is allowed to rise to its peak, which is where the enzyme profile is finally decided: hotter and drier favours saccharifying power, cooler and moister favours protease. This single decision separates a clean ginjō kōji from a rich junmai kōji.",ja:"最後の手入れ。ここで温度を最高点まで上げる。酵素の構成が決まるのはこの時点である——高温・低水分は糖化力に、低温・高水分はプロテアーゼに傾く。清冽な吟醸用の麹と、厚みのある純米用の麹を分けるのは、この一つの判断である。",zh:"最後一次介入。此時容許溫度升至峰值，酵素組成也在此定案：偏高溫低濕有利糖化力，偏低溫高濕則有利蛋白酶。清爽的吟釀用麴與厚實的純米用麴，就取決於這一個判斷。"} },
          { title:{en:"Out of the room",ja:"出麹",zh:"出麴"}, jp:"出麹", romaji:"dekōji",
            meta:{en:"hour 45–50 · moisture down to ≈ 17–18%",ja:"45〜50時間・水分 約17〜18%まで低下",zh:"第 45–50 小時・水分降至約 17–18%"},
            text:{en:"Finished kōji is spread out to cool and dry, which halts further growth. It smells of chestnut and dry sweetness, and a grain bitten in half is chalky and sweet all the way through. It must be used or dried within a day.",ja:"出来上がった麹を広げて冷まし乾かすことで、それ以上の生育を止める。栗のような香りと乾いた甘い匂いがし、噛み割れば中まで白く甘い。一日のうちに使うか、乾燥させなければならない。",zh:"完成的麴攤開冷卻乾燥，以停止其繼續生長。它散發栗子與乾爽甜味的香氣，咬開後由外至內皆白而甘。必須在一日內使用或加以乾燥。"} }
        ] },
        { t:"compare", cols:3, items:[
          { title:{en:"Tsuki-haze",ja:"突き破精",zh:"突破精"}, jp:"突き破精",
            text:{en:"Mycelium is sparse on the surface but drives deep into the grain in patches. Less protease, so fewer amino acids; a clean, light, aromatic sake. The kōji of choice for ginjō and daiginjō.",ja:"表面の菌糸は疎らだが、粒の内部へ点状に深く食い込む。プロテアーゼが少なくアミノ酸も少ないため、清く軽く香り高い酒になる。吟醸・大吟醸に選ばれる麹。",zh:"表面菌絲稀疏，卻呈點狀深入米粒內部。蛋白酶少、胺基酸也少，釀出潔淨、輕盈而芳香的酒。吟釀與大吟釀首選之麴。"} },
          { title:{en:"Sō-haze",ja:"総破精",zh:"總破精"}, jp:"総破精",
            text:{en:"Mycelium covers the whole grain and penetrates throughout. Maximum enzyme yield, high amino acids, strong saccharification. The kōji for full-bodied junmai and for kimoto starters, which need enzyme in quantity.",ja:"菌糸が粒全体を覆い、内部まで行き渡る。酵素の生成量が最大となり、アミノ酸が多く、糖化力が強い。厚みのある純米や、酵素量を必要とする生酛の酒母に用いる麹。",zh:"菌絲覆蓋整粒並貫穿其中。酵素產量最大、胺基酸高、糖化力強。用於厚實的純米，以及需要大量酵素的生酛酒母。"} },
          { title:{en:"Baka-haze",ja:"馬鹿破精",zh:"馬鹿破精"}, jp:"馬鹿破精",
            text:{en:"Lush surface growth with little penetration and disappointing enzyme output — the grain looks magnificent and does nothing. Caused by too much surface moisture, which lets the mould feed on free sugar instead of building the enzymes to make it.",ja:"表面ばかりが立派に繁茂し、内部への浸透も酵素の生成も乏しい——見た目は見事で、働かない。表面水分が多すぎて、菌が自ら酵素を作らずとも遊離糖を食べられてしまうために起こる。",zh:"表面繁茂而不深入，酵素產量令人失望——外觀華麗，卻毫無作為。成因是表面水分過多，使黴菌得以直接攝食游離糖，而無須建構產糖的酵素。"} }
        ] },
        { t:"note", label:{en:"How much kōji",ja:"麹歩合",zh:"麴步合"}, text:{
          en:"The <em>kōji-buai</em> — kōji rice as a share of total rice — is legally at least 15% for a designated sake and is usually 20–22% in practice. Higher ratios give more enzyme, more sugar, more amino acid and a fuller sake; lower ratios give a leaner one. It is one of the few levers a brewer can pull that changes almost everything at once.",
          ja:"麹歩合——総米に対する麹米の割合——は、特定名称酒では法定で15%以上、実際には20〜22%とすることが多い。歩合を上げれば酵素も糖もアミノ酸も増え、厚みのある酒になる。下げれば痩せた酒になる。造り手が引ける数少ないレバーのうち、ほぼすべてを一度に変えてしまうものの一つである。",
          zh:"麴步合——麴米占總米量的比例——依法在特定名稱酒中須達 15% 以上，實務上多為 20–22%。比例愈高，酵素、糖分與胺基酸愈多，酒體愈飽滿；比例愈低則愈精瘦。這是釀造者少數能操作、卻幾乎一次改變一切的槓桿之一。" } }
      ]
    },

    { t:"section", id:"seed",
      title:{ en:"Where the mould comes from", ja:"黴はどこから来るか", zh:"黴菌從何而來" }, jp:"種麹ともやし屋",
      body:[
        { t:"p", text:{
          en:"Almost no brewery cultures its own mould. The spores arrive in a paper packet from a specialist firm, are measured out in grams, and are shaken over the steamed rice through a fine cloth sieve. These firms — <em>tane-kōji-ya</em>, or by their older trade name <em>moyashi-ya</em>, 'sprout houses' — are the oldest continuously operating microbiology business in the world, and there are only about seven or ten of them left.",
          ja:"自ら黴を培養する蔵はほとんどない。胞子は専門の商家から紙の包みで届き、グラムで量られ、細かな布の篩を通して蒸米の上に振られる。これらの商家——種麹屋、あるいは古い商いの名でもやし屋——は、世界で最も長く続く微生物の商売であり、今や七軒か十軒ほどしか残っていない。",
          zh:"幾乎沒有酒藏自行培養黴菌。孢子以紙包的形式從專門的商行寄達，以公克為單位量取，再透過細布篩子撒在蒸米上。這些商行——「種麴屋」，或以其更古老的行號稱呼「もやし屋（發芽之家）」——是世界上持續經營最久的微生物生意，而如今只剩下大約七到十家。" } },
        { t:"timeline", items:[
          { year:"1419", era:"応永26", eraJp:"応永二十六年", title:{ en:"A monopoly is granted", ja:"独占が与えられる", zh:"專賣權被授予" }, jp:"北野麹座",
            text:{ en:"The kōji guild attached to Kitano shrine in Kyoto obtained, in exchange for tax payments to the shogunate, the exclusive right to make and sell kōji throughout the capital. Sake brewers were forbidden to make their own and had to buy it. For a quarter of a century, the single most important input in Japanese brewing was controlled by one guild.",
              ja:"京の北野社に属する麹座が、幕府への納金と引き換えに、都の全体で麹を造り売る独占の権を得た。酒屋は自ら造ることを禁じられ、買わねばならなかった。四半世紀にわたり、日本の酒造りの最も重要な一つの入り口は、一つの座に握られていた。",
              zh:"京都北野神社所屬的麴座，以向幕府納稅為交換，取得在整個京城製造與販售麴的獨占權。釀酒者被禁止自行製麴，只能購買。有四分之一個世紀之久，日本釀造中最重要的那一項投入，掌握在單一同業公會手中。" } },
          { year:"1444", era:"文安元", eraJp:"文安元年", title:{ en:"The kōji riot", ja:"麹騒動", zh:"麴騷動" }, jp:"文安の麹騒動",
            text:{ en:"Brewers who built their own kōji rooms had them demolished by shogunate troops. Then the balance of power shifted, the monopoly was revoked, the guild resisted, and in the fourth month of 1444 the deputy shogun sent soldiers against Kitano. There were deaths, and the shrine and the district around it burned. Kōji making in Kyoto never recovered as a separate trade; from the sixteenth century onward it was absorbed into the breweries themselves.",
              ja:"自ら麹室を建てた酒屋は、幕府の兵にそれを悉く打ち壊された。やがて力の均衡が移り、独占は取り消され、座はこれに抗い、文安元年の四月、管領は北野へ兵を差し向けた。死者が出て、社とその一帯が焼けた。京において麹造りは独立した商いとしてついに立ち直らず、十六世紀より後は蔵そのものへと吸い込まれていった。",
              zh:"自行搭建麴室的釀酒者，被幕府軍隊將麴室盡數搗毀。其後權力平衡改變，專賣被撤銷，麴座抗拒，於文安元年四月，管領派兵攻向北野。有人喪生，神社與周邊一帶付之一炬。京都的製麴業從此再未以獨立行業的身分復甦；自十六世紀起，它被吸收進酒藏本身。" } },
          { year:"Edo", era:"江戸", eraJp:"江戸時代", title:{ en:"The sprout houses", ja:"もやし屋", zh:"發芽之家" }, jp:"種麹製造伝書",
            text:{ en:"What survived instead was the making and selling of the spores themselves. Family firms in Kyoto, Osaka and the north cultured mould on rice specifically to sporulate, dried it, and sold it by weight. A manuscript of the period, the <em>Moyashi hōdensho</em>, records the method and names the houses; some of the same names are still trading.",
              ja:"代わりに生き残ったのは、胞子そのものを造り売ることであった。京・大坂・北国の家々が、胞子を結ばせるためにこそ米に黴を培い、乾かし、目方で売った。当時の写本『もやし法伝書』はその法を記し、家の名を挙げている。同じ名のいくつかは今も商いを続けている。",
              zh:"存活下來的，反而是孢子本身的製造與販售。京都、大坂與北國的家族商行，專為使其結孢而在米上培養黴菌，乾燥後按重量出售。當時的抄本《もやし法傳書》記下了做法並列出了各家名號；其中一些名字至今仍在營業。" } },
          { year:"now", era:"現在", eraJp:"現在", title:{ en:"Seven or so firms", ja:"七軒ほど", zh:"約七家" }, jp:"現代の種麹屋",
            text:{ en:"A modern seed-mould house keeps a catalogue of dozens of strains, each with a measured enzyme profile — high glucoamylase for a sweet mash, low acid protease for a clean ginjō, fast or slow penetration, green spores for sake and miso, brown for shochu, white for miso, and separate lines for awamori. A brewery choosing a seed strain is choosing an enzyme balance months before it tastes anything.",
              ja:"現代の種麹屋は数十の株の目録を持ち、それぞれが測られた酵素の姿をもつ——甘い醪のためのグルコアミラーゼの高いもの、清らかな吟醸のための酸性プロテアーゼの低いもの、速く、あるいは遅く食い込むもの、清酒と味噌のための緑の胞子、焼酎のための茶、味噌のための白、そして泡盛のための別の系統である。種の株を選ぶ蔵は、何かを味わう何か月も前に、酵素の均衡を選んでいる。",
              zh:"現代的種麴屋備有數十個菌株的目錄，每一株都有經量測的酵素輪廓——為甜醪而生的高糖化酶株、為乾淨吟釀而生的低酸性蛋白酶株、深入速度快或慢的株、供清酒與味噌用的綠色孢子、供燒酎用的褐色、供味噌用的白色，以及供泡盛用的另一條系統。選擇種麴菌株的酒藏，是在嚐到任何東西的數個月之前，就先選定了一組酵素平衡。" } }
        ] },
        { t:"panel", tint:"moss",
          title:{ en:"Why there is ash in it", ja:"なぜ灰が入るのか", zh:"為什麼裡面有灰" },
          body:[
            { t:"p", text:{
              en:"Traditional seed-mould making mixes wood ash into the rice. It looks like superstition and is not. Ash raises the pH towards alkaline, which <em>A. oryzae</em> tolerates and most competing bacteria and moulds do not, so the culture stays clean without any sterile technique at all. It supplies potassium and other minerals the mould needs to sporulate heavily rather than merely grow. And the particles hold the grains apart, letting air through to an organism that must have oxygen.",
              ja:"伝統の種麹造りは、米に木灰を混ぜる。迷信のように見えるが、そうではない。灰はpHを塩基の側へ傾け、それを麹菌は耐えるが、競う細菌や黴のほとんどは耐えない。ゆえに無菌の技を一切用いずとも培養は清らかに保たれる。灰はまた、黴がただ育つのではなく多くの胞子を結ぶために要するカリウムその他の無機質を供する。そして粒子が米粒を離して保ち、酸素を要する生き物へ空気を通す。",
              zh:"傳統的種麴製作會把木灰拌入米中。這看起來像迷信，其實不是。灰把 pH 推向鹼性，而米麴菌能忍受這樣的環境，多數與之競爭的細菌與黴菌卻不能——於是完全不需要任何無菌技術，培養也能保持乾淨。灰同時供應鉀與其他礦物質，讓黴菌不只是生長，而是大量結孢。而灰的顆粒把米粒撐開，讓空氣通往這個必須有氧的生物。" } },
            { t:"p", text:{
              en:"Three functions — selection, nutrition and aeration — from one cheap material that every pre-modern household had beside the hearth. Some firms have now dropped it in favour of controlled culture rooms, on the grounds that a food product should not contain ash. The knowledge that it worked, and why, is a thousand years older than the microbiology that explains it.",
              ja:"三つの働き——選抜、栄養、通気——が、近代以前のどの家にも竈の傍にあった一つの安い材から得られる。食の品に灰が入るべきではないとして、管理された培養室を選び、これをやめた商家もある。それが効くこと、そしてなぜ効くのかという知は、それを説き明かす微生物学より千年古い。",
              zh:"三種功能——選擇、營養、通氣——全都來自一種每個前現代家庭爐灶邊都有的廉價材料。有些商行如今已改用受控培養室而捨棄它，理由是食品中不該含有灰。「它有效」以及「為何有效」的知識，比解釋它的微生物學早了一千年。" } }
          ] }
      ] },

    { t:"section", id:"muro",
      title:{ en:"The room and the vessels", ja:"室と道具", zh:"麴室與器具" }, jp:"麹室",
      body:[
        { t:"p", text:{
          en:"The kōji room is a building inside a building: cedar-lined, heavily insulated, held near 30 °C and high humidity, with no window and one heavy door. It is the cleanest room in the brewery and the only one that is deliberately kept warm. Everything else in a sake brewery is an argument for cold; this one room is the exception, and the entire process is arranged around protecting it.",
          ja:"麹室は建物の中の建物である。杉に張られ、厚く断たれ、三十度近くと高い湿りに保たれ、窓はなく、重い戸が一枚あるだけである。蔵で最も清らかな部屋であり、意図して暖かく保たれる唯一の部屋である。酒蔵の他のすべては寒さのための論であり、この一室のみが例外であって、工程の全体がそれを守るように組まれている。",
          zh:"麴室是建築中的建築：內襯杉木、厚重隔熱、維持在攝氏三十度上下與高濕度，沒有窗，只有一扇厚重的門。它是酒藏中最乾淨的房間，也是唯一被刻意保持溫暖的房間。酒藏中的其他一切都是為寒冷而立的論證；唯獨這一個房間是例外，而整個製程都圍繞著保護它而安排。" } },
        { t:"compare", cols:3, items:[
          { title:{ en:"Lid method", ja:"蓋麹法", zh:"蓋麴法" }, jp:"蓋麹法 · ふたこうじ",
            text:{ en:"The rice is divided into small wooden trays holding about 1.5 kg each, stacked and restacked through the night so that every tray takes its turn at the warm and cool positions. Forty trays for one small tank. It is the most labour-intensive method by a wide margin and the most precise, because 1.5 kg of rice can be brought to an exact temperature and a large bed cannot. Almost all competition daiginjō is made this way.",
              ja:"米はおよそ一・五キロずつの小さな木の蓋に分けられ、夜を通して積み替えられ、どの蓋も暖かい位置と涼しい位置を順に取る。小さな一本の仕込みに四十枚である。他を大きく引き離して最も手のかかる方法であり、そして最も精密である。一・五キロの米は正確な温度に導きうるが、大きな床はそうではないからである。鑑評会の大吟醸はほとんどすべてこの法で造られる。",
              zh:"米被分裝到每個約一點五公斤的小木蓋中，整夜反覆堆疊調換位置，讓每一個木蓋輪流待在溫暖與較涼的位置。一缸小型仕込就需要四十個木蓋。它遠比其他方法更耗人力，也最為精確——因為一點五公斤的米可以被帶到某個確切的溫度，而一大床米做不到。鑑評會的大吟釀幾乎全都以此法製作。" } },
          { title:{ en:"Box method", ja:"箱麹法", zh:"箱麴法" }, jp:"箱麹法 · はここうじ",
            text:{ en:"Larger wooden or plastic boxes of fifteen to twenty kilograms each. The compromise position: enough division to control temperature reasonably, few enough units to be handled by a normal crew. This is what most premium junmai and ginjō is made in, and what most visitors will actually see stacked in the room.",
              ja:"一箱十五から二十キロの、より大きな木あるいは樹脂の箱である。折衷の位置にある。温度をほどよく制しうるだけの分割があり、通常の蔵人で扱えるだけの数に収まる。ほとんどの高級な純米と吟醸はこれで造られ、訪う者が実際に室に積まれているのを見るのもこれである。",
              zh:"每箱十五至二十公斤的較大木箱或塑膠箱。這是折衷的位置：分割程度足以合理控制溫度，單位數量又少到一般人手可以應付。多數高級純米與吟釀都在此中製成，而參訪者在麴室裡實際看到堆疊著的，通常也是這個。" } },
          { title:{ en:"Bed and machine", ja:"床麹法・製麹機", zh:"床麴法與製麴機" }, jp:"床麹法・製麹機",
            text:{ en:"One large bed on the floor, turned with shovels — the oldest method and still used for ordinary-grade sake — or a mechanical kōji maker: a rotating drum or a bed with forced air, controlled by thermostat, needing one person instead of six. Machines make consistent kōji and are widely used at every grade below the top. What they cannot do is respond to a batch that is behaving unusually, which is the whole reason the lid method survives.",
              ja:"床に一つの大きな床を張り、鋤で切り返す——最も古い法であり、普通酒には今も用いられる——あるいは製麹機である。回る円筒か、送風のある床を寒暖の自動制御で運び、六人でなく一人で足りる。機械は揃った麹を造り、頂の下のあらゆる格で広く用いられる。できぬのは、いつもと違う振舞いをする一枚に応じることであり、それこそ蓋麹法が生き残っている理由の全体である。",
              zh:"地板上鋪成一大床，以木鏟翻拌——這是最古老的方法，普通酒至今仍在使用——或者採用製麴機：旋轉滾筒，或帶強制送風的床，由恆溫裝置控制，只需一人而非六人。機器能做出穩定一致的麴，在頂級以下的各個等級都被廣泛採用。它做不到的，是對一批行為異常的麴做出回應——而這正是蓋麴法之所以存活下來的全部理由。" } }
        ] },
        { t:"defs", items:[
          { term:{ en:"Out of the room", ja:"出麹", zh:"出麴" }, jp:"出麹", romaji:"dekōji",
            def:{ en:"About forty-five hours after the spores went on, the kōji is carried out and spread thin to cool and dry. Growth has to be stopped: left in the warm any longer, the mould would keep going, use up the starch it was supposed to leave for the mash, and start producing the off-flavours of an over-ripe culture. Finished kōji smells of roasted chestnut and is faintly sweet; the grains are covered in a white bloom and break with a dry snap.",
              ja:"種を切っておよそ四十五時間の後、麹は運び出され、薄く広げて冷やし乾かされる。生育は止めねばならない。暖かいままさらに置けば、黴は進み続け、醪のために残すべき澱粉を使い切り、熟れすぎた培養の異臭を生じ始める。出来上がった麹は焼いた栗の匂いがし、かすかに甘い。粒は白い花に覆われ、乾いた音を立てて割れる。",
              zh:"在撒下孢子約四十五小時後，麴被搬出室外，攤薄以冷卻乾燥。生長必須被停止：若繼續留在溫暖中，黴菌會持續前進，用光本該留給醪的澱粉，並開始產生培養過熟的異味。完成的麴帶有炒栗子的香氣，微微發甜；米粒覆著白色的花，折斷時發出乾脆的聲響。" } },
          { term:{ en:"Resting", ja:"枯らし", zh:"枯（乾燥靜置）" }, jp:"枯らし", romaji:"karashi",
            def:{ en:"The dried kōji is then held for a day or two before use. Moisture equalises through the grain, enzyme activity stabilises, and the culture stops changing. Kōji used straight from the room behaves differently in the mash — faster and less predictable — which is why the schedule always leaves this gap.",
              ja:"乾かした麹は、用いる前に一日か二日置かれる。水分は粒の中で均され、酵素の力は落ち着き、培養は変わることをやめる。室から出してすぐに用いた麹は醪で異なる振舞いをする——より速く、より読みにくい——ゆえに日程は必ずこの間を空ける。",
              zh:"乾燥後的麴，在使用前會再靜置一至兩天。水分在米粒內部趨於均勻，酵素活性穩定下來，培養停止變化。直接從麴室取出使用的麴，在醪中的表現會不同——更快、也更難預測——這就是為什麼作業排程總會留下這段空檔。" } },
          { term:{ en:"What it costs", ja:"要する手", zh:"它的代價" }, jp:"手間", romaji:"tema",
            def:{ en:"Two days and two nights of broken sleep per batch, for a step that produces no drinkable product and can only be assessed by touch, smell and a look at the cut grain. A brewery making forty tanks a season does this forty times. When brewers say the year is decided by the kōji, part of what they mean is that it is the step where fatigue does the most damage.",
              ja:"一枚につき二日二晩の断たれた眠りであり、それでいてこの工程は飲みうる物を何も生まず、手触りと匂いと割った粒の見えでしか判じられない。一季に四十本を仕込む蔵は、これを四十度行う。造り手が一年は麹で決まると言うとき、その意味の一部は、疲れが最も害をなす工程がこれだということである。",
              zh:"每一批都要付出兩天兩夜被切斷的睡眠，而這道工序既不產出任何可飲之物，也只能靠觸感、氣味與掰開米粒的樣子來判斷。一季釀四十缸的酒藏，就要做四十次。當釀造者說「一年由麴決定」時，他們的意思有一部分是：這是疲勞造成最大傷害的那道工序。" } }
        ] }
      ] },

    { t:"section", id:"yeast",
      title:{ en:"Yeast", ja:"酵母", zh:"酵母" }, jp:"清酒酵母 · きょうかい酵母",
      body:[
        { t:"p", text:{
          en:"Sake yeast is <em>Saccharomyces cerevisiae</em> — the same species as bread and beer and wine yeast — but sake strains are a distinct domesticated group with two unusual properties: extreme ethanol tolerance, and a capacity to produce aroma esters at concentrations that would be abnormal in any other fermentation. Before 1906 a brewery's yeast was whatever lived in its building. After 1906 it became a catalogue number.",
          ja:"清酒酵母はサッカロミセス・セレビシエ——パンやビールやワインの酵母と同種——であるが、清酒の菌株は明確に異なる家畜化された集団であり、二つの特異な性質をもつ。極端なエタノール耐性と、他のいかなる発酵では異常とされる濃度で香気エステルを生成する能力である。1906年以前、蔵の酵母とはその建物に棲むものだった。1906年以後、それは頒布番号になった。",
          zh:"清酒酵母是釀酒酵母（Saccharomyces cerevisiae）——與麵包、啤酒、葡萄酒同種——但清酒菌株屬於一個明確不同的馴化族群，具備兩項特異性質：極端的乙醇耐受性，以及能產生在任何其他發酵中都屬異常濃度的香氣酯類。1906 年之前，酒藏的酵母就是棲息於其建築中之物；1906 年之後，它成了一個頒布編號。" } },
        { t:"h3", text:{en:"The two aromas",ja:"二つの香り",zh:"兩種香氣"} },
        { t:"compare", cols:2, items:[
          { title:{en:"Isoamyl acetate",ja:"酢酸イソアミル",zh:"乙酸異戊酯"}, jp:"バナナ・洋梨",
            text:{en:"Banana, pear, ripe melon. Produced during a moderately warm ferment and lost relatively quickly with age or heat. Nos. 7, 14 and 1801 are known for it. It is the aroma most people first recognise as “ginjō”.",ja:"バナナ、洋梨、熟したメロン。やや高めの温度の発酵で生成され、熟成や加熱で比較的早く失われる。七号・十四号・1801号が知られる。多くの人が最初に「吟醸香」と認識するのはこの香りである。",zh:"香蕉、洋梨、熟哈密瓜。於稍暖的發酵中生成，隨陳放或受熱而較快散失。以七號、十四號與 1801 號著稱。這是多數人最先辨識為「吟釀香」的氣味。"} },
          { title:{en:"Ethyl caproate",ja:"カプロン酸エチル",zh:"己酸乙酯"}, jp:"青リンゴ・マスカット",
            text:{en:"Green apple, muscat grape, sometimes pineapple. Favoured by very cold, very long fermentation and by cerulenin-resistant strains bred specifically to over-produce it — Nos. 1601, 1801, and most prefectural “high ester” yeasts. More persistent than isoamyl acetate.",ja:"青リンゴ、マスカット、時にパイナップル。極低温・長期の発酵と、これを過剰に生成するよう育種されたセルレニン耐性株——1601号、1801号、多くの県産高エステル酵母——によって強まる。酢酸イソアミルより持続する。",zh:"青蘋果、麝香葡萄，有時是鳳梨。極低溫長時間發酵，以及專為過量產出此物而育成的耐塞魯烯素菌株——1601 號、1801 號與多數縣產高酯酵母——會強化它。比乙酸異戊酯更持久。"} }
        ] },
        { t:"table",
          caption:{en:"Principal Kyōkai (Association) yeasts",ja:"主なきょうかい酵母",zh:"主要協會酵母"},
          cols:[{en:"No.",ja:"番号",zh:"編號"},{en:"Distributed",ja:"頒布",zh:"頒布"},{en:"Source",ja:"由来",zh:"來源"},{en:"Character",ja:"特徴",zh:"特徵"}],
          numCols:[0,1],
          rows:[
            ["No. 6 · 六号","1935",{en:"Aramasa, Akita (isolated 1930)",ja:"新政（秋田）1930年分離",zh:"新政（秋田），1930 年分離"},
             {en:"The oldest strain still in distribution. Strong, steady fermentation at low temperature; restrained aroma, clean and slightly savoury. A brewer's yeast rather than a show yeast.",ja:"現在も頒布される最古の株。低温での強く安定した発酵、控えめな香り、清らかでやや旨味寄り。見せるための酵母ではなく、造るための酵母である。",zh:"至今仍在流通的最古老菌株。低溫下發酵強勁穩定；香氣內斂、潔淨而略帶旨味。是釀造者的酵母，而非展示用的酵母。"}],
            ["No. 7 · 七号","1947",{en:"Miyasaka Jōzō / Masumi, Nagano (isolated 1946)",ja:"宮坂醸造・真澄（長野）1946年分離",zh:"宮坂釀造・真澄（長野），1946 年分離"},
             {en:"The most widely used yeast in the industry for decades. Vigorous, dependable, generous isoamyl aroma. Most later strains descend from it or from No. 9.",ja:"数十年にわたり業界で最も広く用いられてきた酵母。旺盛で確実、酢酸イソアミル系の香りが豊か。後の多くの株はこれか九号の系譜にある。",zh:"數十年來業界使用最廣的酵母。發酵旺盛可靠，乙酸異戊酯系香氣豐沛。後世多數菌株皆源自它或九號。"}],
            ["No. 9 · 九号","1968",{en:"Kumamoto Prefectural Sake Research Institute (isolated early 1950s)",ja:"熊本県酒造研究所 1950年代初頭分離",zh:"熊本縣酒造研究所，1950 年代初分離"},
             {en:"The yeast that made competition ginjō possible: it ferments at very low temperature over a long period and throws a high floral-fruit aroma. For thirty years, almost every gold medal used it.",ja:"鑑評会の吟醸を可能にした酵母。極低温で長期にわたり発酵し、高い花・果実様の香りを出す。三十年にわたり、金賞のほとんどがこれを用いた。",zh:"使鑑評會吟釀成為可能的酵母：能在極低溫下長時間發酵，並釋出高昂的花果香。三十年間，幾乎每一面金賞都用它。"}],
            ["No. 10 · 十号","1977",{en:"“Ogawa yeast”, Tōhoku",ja:"「小川酵母」東北",zh:"「小川酵母」，東北"},
             {en:"Low acid, high aroma, slow. Gives a delicate, quiet, high-toned sake that rewards patience and punishes haste.",ja:"低酸・高香・緩慢。繊細で静かな、高い音域の酒になる。忍耐に報い、性急さを罰する。",zh:"低酸、高香、發酵緩慢。釀出細緻安靜、音域偏高的酒；獎賞耐心，懲罰急躁。"}],
            ["No. 14 · 十四号","1994",{en:"Kanazawa Regional Taxation Bureau",ja:"金沢国税局",zh:"金澤國稅局"},
             {en:"“Kanazawa yeast”. Low acid, strong isoamyl acetate — the banana-and-cream profile. Well behaved at low temperature.",ja:"「金沢酵母」。低酸で酢酸イソアミルが強い——バナナとクリームの印象。低温での挙動が素直である。",zh:"「金澤酵母」。低酸、乙酸異戊酯強勁——香蕉與奶油的調性。低溫下表現溫馴。"}],
            ["No. 1501 · 1501号","1996",{en:"AK-1, Akita",ja:"AK-1（秋田）",zh:"AK-1（秋田）"},
             {en:"High ethyl caproate, low acid, low foaming. Behind a great many of the aromatic Tōhoku daiginjō of the 1990s and 2000s.",ja:"カプロン酸エチルが高く、酸は低く、泡が少ない。1990年代から2000年代の香り高い東北の大吟醸の多くを支えた。",zh:"己酸乙酯高、酸低、低泡。1990 至 2000 年代眾多芳香型東北大吟釀的幕後功臣。"}],
            ["No. 1601 · 1601号","1992",{en:"Brewing Society — cerulenin-resistant mutant",ja:"日本醸造協会・セルレニン耐性変異株",zh:"日本釀造協會・耐塞魯烯素突變株"},
             {en:"Produces three to four times the ethyl caproate of No. 7. The first strain bred explicitly for aroma output rather than selected for it.",ja:"七号の三〜四倍のカプロン酸エチルを生成する。選抜ではなく、香気生成量そのものを目的に育種された最初の株。",zh:"己酸乙酯產量為七號的三至四倍。這是第一個明確為香氣產量而育成、而非篩選而得的菌株。"}],
            ["No. 1801 · 1801号","2006",{en:"cross of No. 1601 × No. 9",ja:"1601号×九号の交配",zh:"1601 號 × 九號雜交"},
             {en:"Very high in both ester families at once, with the lowest isoamyl alcohol of any Kyōkai strain — that is, maximum fruit with minimum solvent. It has dominated national competition entries since its release, and is the reason so many recent gold medals smell alike.",ja:"二系統のエステルを同時に高く生成し、かつ、きょうかい酵母中で最もイソアミルアルコールが少ない——すなわち果実は最大、溶剤臭は最小。頒布以来、全国新酒鑑評会の出品酒を席巻しており、近年の金賞酒の香りが似通う原因でもある。",zh:"同時大量生成兩類酯，且異戊醇為所有協會酵母中最低——亦即果香最大、溶劑感最小。自頒布以來主導全國鑑評會參賽酒，也正是近年金賞酒香氣趨於雷同的原因。"}],
            ["No. 1901 · 1901号","2014",{en:"bred from No. 1801, reduced urea",ja:"1801号からの育種・尿素低減",zh:"自 1801 號育成、降低尿素"},
             {en:"A refinement of 1801 with less urea in the mash — urea can react with ethanol to form ethyl carbamate — and a shifted ester balance towards isoamyl acetate.",ja:"1801号の改良株で、醪中の尿素が少ない——尿素はエタノールと反応してカルバミン酸エチルを生じうる——とともに、エステルの均衡が酢酸イソアミル寄りに移動している。",zh:"1801 號的改良版，醪中尿素較低——尿素可與乙醇反應生成胺基甲酸乙酯——且酯類平衡向乙酸異戊酯偏移。"}],
            ["Foamless strains · 泡なし酵母","1971 —",{en:"non-foaming mutants: 601, 701, 901, 1001, 1401",ja:"泡なし変異株：601・701・901・1001・1401",zh:"無泡突變株：601、701、901、1001、1401"},
             {en:"Ordinary sake yeast throws a thick foam cap that can occupy a third of a tank and must be watched constantly. Mutants lacking the cell-surface protein that traps bubbles ferment identically without the foam, freeing 20–30% of tank volume and removing a night shift.",ja:"通常の清酒酵母はタンクの三分の一を占めうる厚い泡蓋をつくり、絶えず監視を要する。泡を捕捉する細胞表面たんぱく質を欠く変異株は、同じ発酵を泡なしで行い、タンク容積の20〜30%を解放し、夜番を一つ減らす。",zh:"一般清酒酵母會形成可占據槽體三分之一的厚泡蓋，須不斷看顧。缺少捕捉氣泡之細胞表面蛋白的突變株，能以相同方式發酵而不起泡，釋出 20–30% 槽容並省去一班夜勤。"}],
            [{en:"Prefectural and flower yeasts",ja:"県産酵母・花酵母",zh:"縣產酵母與花酵母"},"1990s —",{en:"prefectural research stations; Tokyo University of Agriculture",ja:"各県の研究機関、東京農業大学",zh:"各縣研究機構、東京農業大學"},
             {en:"Yamagata KA, Shizuoka NEW-5, Fukushima Utsukushima Yume, Akita Hana-Ai, Nagano Alps — dozens of house strains bred against local rice and water. Flower-derived yeasts isolated from nadeshiko, begonia, abelia and marigold add a further axis. Their spread is the main reason regional character has strengthened rather than converged since 1990.",ja:"山形KA、静岡NEW-5、ふくしま夢酵母、秋田・華あい、長野アルプス——地元の米と水に合わせて育成された県産株は数十を数える。ナデシコ・ベゴニア・アベリア・マリーゴールドなどから分離された花酵母がさらに一つの軸を加える。1990年以降、地域性が収斂ではなく強化された主たる理由はこの拡がりにある。",zh:"山形 KA、靜岡 NEW-5、福島夢酵母、秋田華藍、長野阿爾卑斯——針對在地米與水育成的縣產菌株數以十計。自撫子、秋海棠、六道木與金盞花分離的花酵母又增添一軸。1990 年以來地域性不減反增，主因正在於此。"}]
          ] }
      ]
    },

    { t:"section", id:"lactic",
      title:{ en:"Lactic acid bacteria", ja:"乳酸菌", zh:"乳酸菌" }, jp:"乳酸菌",
      body:[
        { t:"p", text:{
          en:"The third organism is the one nobody drinks for. A sake mash spends its first days as warm, wet, sugary rice porridge — an ideal medium for almost every spoilage organism in Japan. Lactic acid solves this by dropping the pH to around 3.6–4.0, which sake yeast tolerates comfortably and most competitors do not.",
          ja:"三つ目の微生物は、誰もそれを目当てに飲まないものである。醪は最初の数日、温かく湿った糖の粥として存在する——日本のほぼあらゆる腐敗菌にとって理想的な培地である。乳酸はpHを約3.6〜4.0まで下げてこれを解決する。清酒酵母はこの酸度を難なく耐え、競合菌の大半は耐えられない。",
          zh:"第三種微生物是沒有人為它而飲的那一種。醪最初幾天是溫暖、潮濕、含糖的米粥——對日本幾乎所有腐敗菌而言都是理想培養基。乳酸將 pH 降至約 3.6–4.0，解決了這個問題：清酒酵母能從容耐受，而多數競爭者不能。" } },
        { t:"p", text:{
          en:"There are only two ways to get it there. Wait for wild lactic bacteria to arrive and multiply — kimoto, yamahai and bodaimoto — or add food-grade lactic acid at the start, which is sokujō. The choice is not merely procedural; the wild route also brings in a succession of other organisms whose metabolites survive into the finished sake as complexity, acidity and a particular savoury depth. See <a href=\"starters.html\">Starter Methods</a>.",
          ja:"そこへ至る道は二つしかない。野生の乳酸菌が入り込み増殖するのを待つか——生酛・山廃・菩提酛——、あるいは仕込み時に食品用乳酸を加えるか、すなわち速醸である。この選択は単なる手続きの違いではない。野生の道は他の微生物の遷移をも招き入れ、その代謝産物は複雑さ・酸・独特の滋味の深さとして完成した酒に残る。<a href=\"starters.html\">酒母の型</a>を参照。",
          zh:"抵達那裡只有兩條路。等待野生乳酸菌到來並繁殖——生酛、山廢、菩提酛——或於仕込之初添加食品級乳酸，即速釀。這個選擇不僅是程序差異：野生路徑同時引入一連串其他微生物，其代謝產物會以複雜度、酸度與特殊的旨味厚度留存於成酒之中。參見<a href=\"starters.html\">酒母工法</a>。" } },
        { t:"panel", tint:"snow", title:{en:"Hiochi bacteria",ja:"火落菌",zh:"火落菌"}, body:[
          { t:"p", text:{
            en:"One family of lactic bacteria is the sake brewer's classic enemy: <em>Lactobacillus</em> strains adapted to survive in finished sake, known as <em>hiochi-kin</em>. They tolerate 15–20% alcohol, need mevalonic acid found in sake to grow, and turn a clear bottle cloudy with a sour, diacetyl smell. Pasteurisation exists almost entirely because of them — the word <em>hiochi</em>, “fallen after the fire”, describes sake that spoiled despite being heated.",
            ja:"乳酸菌の一群は、蔵人にとって古典的な敵である。完成した清酒のなかで生き延びるよう適応した乳酸桿菌、すなわち火落菌である。アルコール15〜20%に耐え、清酒中のメバロン酸を要求して増殖し、澄んだ瓶を白濁させ、酸臭とダイアセチル臭を与える。火入れという工程がほぼ全面的に存在するのは、この菌のためである。「火落ち」——火入れの後に落ちる——という語そのものが、加熱したにもかかわらず腐敗した酒を指している。",
            zh:"有一類乳酸菌是釀酒者的典型敵人：適應於成酒中存活的乳酸桿菌，稱為「火落菌」。它們耐受 15–20% 酒精，需要清酒中的甲羥戊酸方能生長，會使澄清的酒液混濁，並帶來酸臭與雙乙醯氣味。火入殺菌這道工序幾乎完全是為它們而存在——「火落」一詞，意即「經火之後仍墜落」，指的正是雖經加熱仍然敗壞的酒。" } }
        ] }
      ]
    },

{ t:"section", id:"curve",
      title:{ en:"Forty-eight hours, drawn", ja:"四十八時間を描く", zh:"畫出四十八小時" }, jp:"製麹の温度曲線",
      body:[
        { t:"p", text:{
          en:"Every step of kōji-making is really an instruction about temperature. The mould generates its own heat as it grows, the pile insulates itself, and the whole craft consists of intervening — turning, spreading, dividing — at the moments when that self-heating would otherwise run away. Drawn as a curve, the named steps stop being a ritual sequence and become what they are: a series of interventions on a rising line.",
          ja:"製麹のどの工程も、実のところ温度についての指示である。菌は生育しながら自ら熱を生み、山は自らを断熱する。技のすべては、その自己発熱が暴走しかねない瞬間に介入すること——切り返し、広げ、分けること——にある。曲線として描けば、名を持つ工程は儀礼の順序であることをやめ、その正体を現す。すなわち、上昇する線への一連の介入である。",
          zh:"製麴的每一道工序，其實都是一則關於溫度的指令。麴菌在生長時自行產熱，米堆又為自己保溫；整門手藝就在於：在那份自體發熱即將失控的時刻進行介入——翻拌、攤開、分堆。畫成曲線後，那些有名字的工序就不再是儀式性的順序，而顯露出它們的本質：對一條上升曲線的一連串介入。" } },

        { t:"figure",
          caption:{
            en:"A typical ginjō kōji cycle. The mould's own metabolic heat drives the line upward; each named step is a physical intervention that flattens it again. The peak, and how long it is held, is what decides whether the kōji dissolves rice gently or hard.",
            ja:"典型的な吟醸麹の一巡。線を押し上げるのは菌自身の代謝熱であり、名を持つ各工程は、それを再び寝かせる物理的な介入である。頂点と、そこに留まる時間が、その麹が米を穏やかに溶かすか強く溶かすかを決める。",
            zh:"一次典型的吟釀麴週期。推升曲線的是麴菌自身的代謝熱，而每一道有名字的工序，都是讓它再度趨平的物理介入。峰值以及在峰值停留多久，決定了這批麴會溫和地還是強力地溶解米。" },
          svg: function(lang, L){
            var W = 900, H = 420, x0 = 74, x1 = 866, y0 = 336, y1 = 106, HMAX = 50, TLO = 28, THI = 44;
            function X(h){ return x0 + h / HMAX * (x1 - x0); }
            function Y(t){ return y0 - (t - TLO) / (THI - TLO) * (y0 - y1); }
            var pts = [[0,32],[4,30],[8,30.5],[11,31.6],[14,31],[18,32],[22,33],[26,35],[30,37],[34,39],[38,41],[41,42],[44,41.2],[46,37],[48,30.5]];
            var marks = [
              { h:0,  t:{ en:"Bringing in", ja:"引込み", zh:"引込" }, jp:"引込み" },
              { h:4,  t:{ en:"Sowing spores", ja:"種切り", zh:"種切" }, jp:"種切り" },
              { h:11, t:{ en:"First turning", ja:"切り返し", zh:"切返" }, jp:"切り返し" },
              { h:22, t:{ en:"Dividing out", ja:"盛り", zh:"盛" }, jp:"盛り" },
              { h:30, t:{ en:"Middle work", ja:"仲仕事", zh:"仲仕事" }, jp:"仲仕事" },
              { h:34, t:{ en:"Final work", ja:"仕舞仕事", zh:"仕舞仕事" }, jp:"仕舞仕事" },
              { h:45, t:{ en:"Out of the room", ja:"出麹", zh:"出麴" }, jp:"出麹" }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit">';
            var tv;
            for (tv = 28; tv <= 44; tv += 4) {
              s += '<line x1="' + x0 + '" y1="' + Y(tv) + '" x2="' + x1 + '" y2="' + Y(tv) + '" stroke="var(--rule)" stroke-width="1"/>';
              s += '<text x="' + (x0 - 10) + '" y="' + (Y(tv) + 4) + '" font-size="11" fill="var(--ink-4)" text-anchor="end">' + tv + '°</text>';
            }
            var hv;
            for (hv = 0; hv <= 48; hv += 12) {
              s += '<text x="' + X(hv) + '" y="' + (y0 + 22) + '" font-size="11" fill="var(--ink-4)" text-anchor="middle">' + hv + 'h</text>';
            }
            s += '<text x="' + X(24) + '" y="' + (y0 + 44) + '" font-size="11" fill="var(--ink-3)" text-anchor="middle" letter-spacing="0.12em">' +
                 L({ en:"HOURS IN THE KŌJI ROOM", ja:"麹室での経過時間", zh:"在麴室中的經過時間" }) + '</text>';
            // band for the working range
            s += '<rect x="' + x0 + '" y="' + Y(42) + '" width="' + (x1 - x0) + '" height="' + (Y(30) - Y(42)) + '" fill="var(--h-koji)" opacity="0.42"/>';
            var d = "", i;
            for (i = 0; i < pts.length; i++) d += (i ? " L" : "M") + X(pts[i][0]) + " " + Y(pts[i][1]);
            s += '<path d="' + d + '" fill="none" stroke="var(--ink)" stroke-width="2"/>';
            for (i = 0; i < marks.length; i++) {
              var m = marks[i], mx = X(m.h);
              var my = Y(pts.reduce(function (a, p) { return Math.abs(p[0] - m.h) < Math.abs(a[0] - m.h) ? p : a; }, pts[0])[1]);
              s += '<line x1="' + mx + '" y1="' + y1 + '" x2="' + mx + '" y2="' + y0 + '" stroke="var(--rule-2)" stroke-width="1" stroke-dasharray="3 3"/>';
              s += '<circle cx="' + mx + '" cy="' + my + '" r="3.5" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.6"/>';
              var ty = (i % 2 === 0) ? 36 : 62;
              var anc = (i === 0) ? 'start' : (i === marks.length - 1 ? 'end' : 'middle');
              s += '<text x="' + mx + '" y="' + ty + '" font-size="11" fill="var(--ink-2)" text-anchor="' + anc + '">' + L(m.t) + '</text>';
              if (lang === "en") s += '<text x="' + mx + '" y="' + (ty + 13) + '" font-size="10" fill="var(--ink-4)" text-anchor="' + anc + '">' + m.jp + '</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"p", text:{
          en:"Three things on the curve carry most of the meaning. The dip after sowing is deliberate — the room is cooled so the spores germinate slowly and evenly rather than racing on the surface. The long climb from around twenty hours is the mould's own heat, and the three named interventions in that stretch are simply the pile being opened up and spread thinner each time it threatens to overheat. And the sharp fall at the end is <em>dekōji</em>: the finished kōji is taken out of the warm room and cooled hard, which stops enzyme production at the point the brewer wanted and prevents the mould from going on to sporulate, which would make it bitter.",
          ja:"曲線のうち三つのものが、意味の大半を担っている。種切りののちの落ち込みは意図されたものである——胞子が表面で走らず、ゆっくりと均一に発芽するよう、室を冷やすのである。二十時間あたりからの長い登りは菌自身の熱であり、その区間にある三つの名を持つ介入は、要するに、過熱しかけるたびに山を開き、より薄く広げているだけである。そして末尾の急な下降が出麹である——出来上がった麹を暖かい室から出して強く冷やす。これにより酵素の生産は造り手の望んだ地点で止まり、菌が胞子形成へ進んで苦味を生むことが防がれる。",
          zh:"曲線上有三處承載了大部分意涵。種切之後的下凹是刻意的——把室溫降下來，讓孢子緩慢而均勻地萌發，而不是在表面上一路狂奔。從約二十小時起的長段爬升，是麴菌自身的熱；而那一段中三道有名字的介入，說穿了就是每當它有過熱之虞時，把米堆打開、攤得更薄。至於末端的陡降就是「出麴」：把完成的麴移出溫暖的麴室並急速冷卻，讓酵素的生產停在釀造者想要的那一點，並防止麴菌繼續走向形成孢子——那會帶來苦味。" } }
      ] },

    { t:"related", items:[
      { href:"kojifamily.html", why:{ en:"The same mould in soy sauce, miso, mirin and shōchū.", ja:"同じ麹を、醤油、味噌、みりん、焼酎において。", zh:"同一種麴，在醬油、味噌、味醂與燒酎裡。" } },
      { href:"microbes.html", why:{ en:"The other organisms in the tank, and the order they arrive in.", ja:"槽のなかの他の生きものと、その現れる順。", zh:"槽裡的其他生物，以及它們登場的順序。" } },
      { href:"process.html", why:{ en:"Where the kōji room sits in the thirty days around it.", ja:"麹室が、その前後三十日のどこに座るか。", zh:"麴室在前後三十天裡的位置。" } },
      { href:"taste.html", why:{ en:"The enzymes' products, tasted rather than named.", ja:"酵素の産物を、名づけるのではなく味わう。", zh:"酵素的產物，用嘗的而不是用叫名字的。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- yeast */
SAKE.pages["yeast"] = {
  kicker: { en: "Making · 07", ja: "造り · 07", zh: "釀造 · 07" },
  title:  { en: "Yeast", ja: "酵母", zh: "酵母" },
  jp: "きょうかい酵母と香りの化学",
  lede: {
    en: "Kōji makes the sugar; yeast decides what the sake smells like. Every commercial sake yeast is a strain of <em>Saccharomyces cerevisiae</em> — the same species as bread and beer — selected over a century for three qualities beer and bread never needed: tolerance of alcohol above eighteen per cent, willingness to work at five degrees, and a particular profile of the esters that make a young ginjō smell of apple, melon and banana. Since 1906 most of those strains have come from a single national collection, which is why sake from opposite ends of Japan can smell like siblings, and why the last twenty years have been a deliberate campaign to undo that.",
    ja: "糖を作るのは麹であり、酒がどう香るかを決めるのは酵母である。市販の清酒酵母はすべて <em>Saccharomyces cerevisiae</em> の株——パンやビールと同じ種——であり、パンやビールが必要としなかった三つの性質のために、一世紀をかけて選抜されてきた。十八パーセントを超えるアルコールへの耐性、五度でも働く意志、そして若い吟醸を林檎や瓜やバナナのように香らせるエステルの、特有の構成である。一九〇六年以来、その株の多くは単一の全国的な保存機関から供給されてきた。日本の両端の酒が兄弟のように香りうるのはそのためであり、この二十年がそれを意図的に解きほぐす運動であったのも、そのためである。",
    zh: "製糖的是麴，決定酒如何飄香的是酵母。所有商用清酒酵母都是 <em>Saccharomyces cerevisiae</em> 的菌株——與麵包和啤酒同種——但經過一世紀的選拔，具備了麵包與啤酒從不需要的三項特質：耐受十八%以上的酒精、願意在五度下工作，以及一套特定的酯類組合，使年輕的吟釀散發蘋果、香瓜與香蕉的氣息。自 1906 年以來，這些菌株多半來自單一的全國性保存機構；這正是日本南北兩端的酒可以聞起來像兄弟的原因，也是過去二十年刻意反其道而行的原因。"
  },
  body: [

    { t:"section", id:"job",
      title:{ en:"What the yeast is actually doing", ja:"酵母が実際にしていること", zh:"酵母實際在做什麼" }, jp:"働き",
      body:[
        { t:"p", text:{
          en:"In the mash the yeast is doing four jobs at once, and only the first is obvious.",
          ja:"醪のなかで酵母は同時に四つの仕事をしており、明らかなのは最初の一つだけである。",
          zh:"在醪中，酵母同時進行四項工作，而其中只有第一項是顯而易見的。" } },
        { t:"ol", items:[
          { en:"<strong>Converting glucose to ethanol and CO₂.</strong> Because kōji releases glucose gradually rather than all at once, the yeast is never exposed to the crushing osmotic pressure a wine yeast meets on day one, and can keep working to unusually high alcohol — 18 to 20% in an undiluted mash, the highest of any traditionally fermented drink.",
            ja:"<strong>ブドウ糖をエタノールと二酸化炭素に変える。</strong>麹が糖を一度にではなく少しずつ放出するため、酵母はワイン酵母が初日に受けるような過酷な浸透圧にさらされることがなく、異例に高いアルコール——原酒で18〜20%——まで働き続けられる。伝統的発酵飲料のなかで最も高い。",
            zh:"<strong>將葡萄糖轉為乙醇與二氧化碳。</strong>由於麴是逐步而非一次釋出葡萄糖，酵母不會像葡萄酒酵母在第一天那樣承受劇烈的滲透壓，因而能持續工作到異常高的酒精度——原酒可達 18–20%，為所有傳統發酵飲品之最。" },
          { en:"<strong>Producing esters.</strong> The fruit and flower aromas of ginjō are made by the yeast, not the rice. Which esters and how many is the single largest difference between one strain and another.",
            ja:"<strong>エステルを生成する。</strong>吟醸の果実や花の香りは、米ではなく酵母が作る。どのエステルをどれだけ作るかが、株どうしの最大の違いである。",
            zh:"<strong>生成酯類。</strong>吟釀的果香與花香由酵母製造，而非來自米。生成哪些酯、生成多少，正是不同菌株之間最大的差別。" },
          { en:"<strong>Producing organic acids.</strong> Mostly succinic, malic and citric — the acidity of sake is largely yeast-made, unlike wine where it comes with the fruit. Some strains are bred specifically to overproduce malic acid for a bright, almost white-wine acidity.",
            ja:"<strong>有機酸を生成する。</strong>主にコハク酸・リンゴ酸・クエン酸である。果実とともに酸が来るワインと異なり、日本酒の酸はおおむね酵母が作る。白ワインのような明るい酸のために、リンゴ酸を多く出すよう育成された株もある。",
            zh:"<strong>生成有機酸。</strong>主要是琥珀酸、蘋果酸與檸檬酸——與酸隨果實而來的葡萄酒不同，清酒的酸多半由酵母製造。有些菌株更是專為大量生成蘋果酸而育成，以取得近似白酒的明亮酸度。" },
          { en:"<strong>Producing higher alcohols and their consequences.</strong> Isoamyl alcohol, isobutanol and the rest are precursors to esters, but in excess they read as solventy heat. Managing that balance is what mash temperature control is for.",
            ja:"<strong>高級アルコールとその帰結を生成する。</strong>イソアミルアルコールやイソブタノールなどはエステルの前駆体だが、過剰になると溶剤のような熱さとして感じられる。醪の温度管理は、この均衡を保つためにある。",
            zh:"<strong>生成高級醇及其後果。</strong>異戊醇、異丁醇等是酯類的前驅物，但過量便呈現為溶劑般的灼熱感。醪的溫度控制，正是為了管理這個平衡。" }
        ] },
        { t:"note", label:{en:"Why sake yeast has to be tough",ja:"清酒酵母が強靭でなければならない理由",zh:"清酒酵母為何必須強韌"}, text:{
          en:"A sake mash is one of the harshest environments in fermentation: near-freezing for weeks, alcohol climbing past eighteen per cent, a thick porridge of solids, and no oxygen after the first days. Bakers' yeast dies in it. The strains in the national collection are the survivors of a hundred years of selection under exactly those conditions.",
          ja:"清酒の醪は、発酵の世界で最も過酷な環境の一つである。何週間も氷点近く、アルコールは十八パーセントを超えて上がり続け、固形物の濃い粥のなかで、最初の数日を過ぎれば酸素もない。パン酵母はここで死ぬ。全国の保存機関にある株は、まさにその条件の下での百年の選抜を生き延びたものたちである。",
          zh:"清酒的醪是發酵世界中最嚴苛的環境之一：連續數週接近冰點、酒精攀升至十八%以上、置身固形物濃稠如粥的介質中，且最初數日之後便無氧。麵包酵母在此會死亡。國家保存機構中的菌株，正是在這樣的條件下歷經百年選拔的倖存者。" } }
      ]
    },

    { t:"section", id:"kyokai",
      title:{ en:"The Kyōkai strains", ja:"きょうかい酵母", zh:"協會酵母" }, jp:"日本醸造協会",
      body:[
        { t:"figure",
          caption:{
            en:"The association strains placed against each other. Positions are relative and qualitative — read off the published descriptions of each strain rather than from any single measurement — but the shape is the story: a century of movement to the right, towards more aroma and less acid, and a recent, deliberate walk back to the left.",
            ja:"協会の株を互いに対して置いたもの。位置は相対のものであり、質のものである。単一の測定からではなく、それぞれの株について公にされた記述から読み取ったものである。だがその形こそが物語である。すなわち、一世紀にわたる右への動き——より多くの香りとより少ない酸へ——そして近年の、意図された左への歩み戻りである。",
            zh:"把協會各菌株彼此對照放置。位置是相對的、質性的——讀自各菌株已公開的描述，而非任何單一測量值——但這個形狀本身就是故事：一個世紀向右的移動，走向更多香氣與更少酸；以及近年來一次刻意的、往左的回走。" },
          svg: function (lang, L) {
            var W = 760, H = 400, X0 = 96, X1 = W - 34, Y0 = 40, Y1 = H - 78;
            function px(v) { return X0 + v * (X1 - X0); }
            function py(v) { return Y1 - v * (Y1 - Y0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<rect x="' + X0 + '" y="' + Y0 + '" width="' + (X1 - X0) + '" height="' + (Y1 - Y0) + '" fill="#FBFAF7" stroke="#CDC6B9"/>';
            /* the drift arrow */
            s += '<path d="M' + px(0.10) + ' ' + py(0.58) + ' C ' + px(0.40) + ' ' + py(0.66) + ', ' + px(0.58) + ' ' + py(0.24) + ', ' + px(0.92) + ' ' + py(0.30) + '" fill="none" stroke="#EFEDE7" stroke-width="18" stroke-linecap="butt"/>';
            var pts = [
              { x:0.10, y:0.58, n:"6",    a:"start", d:{ en:"1930 \u00b7 quiet and savoury", ja:"一九三〇・静かで旨みがある", zh:"一九三〇・安靜而帶旨味" } },
              { x:0.36, y:0.62, n:"7",    a:"start", d:{ en:"1946 \u00b7 the workhorse", ja:"一九四六・働き手", zh:"一九四六・主力" } },
              { x:0.58, y:0.28, n:"9",    a:"end",   d:{ en:"the ginj\u014d yeast", ja:"吟醸の酵母", zh:"吟釀酵母" } },
              { x:0.70, y:0.12, n:"14",   a:"end",   d:{ en:"banana, low acid", ja:"バナナ、低酸", zh:"香蕉味、低酸" } },
              { x:0.80, y:0.16, n:"10",   a:"none",  d:"" },
              { x:0.86, y:0.22, n:"1501", a:"none",  d:"" },
              { x:0.92, y:0.30, n:"1601", a:"none",  d:"" },
              { x:0.80, y:0.44, n:"1801", a:"start", d:{ en:"competition default", ja:"鑑評会の既定", zh:"鑑評會的預設" } }
            ];
            for (var i = 0; i < pts.length; i++) {
              var p = pts[i], X = px(p.x), Y = py(p.y);
              s += '<circle cx="' + X + '" cy="' + Y + '" r="15" fill="#FBFAF7" stroke="#7C6B52"/>';
              s += '<text x="' + X + '" y="' + (Y + 4) + '" text-anchor="middle" font-size="' + (p.n.length > 2 ? 10 : 12.5) + '" fill="#201E1B">' + p.n + '</text>';
              if (p.a !== "none") {
                var tx = p.a === "end" ? X - 21 : X + 21;
                s += '<text x="' + tx + '" y="' + (Y + 4) + '" text-anchor="' + p.a + '" font-size="10" fill="#8B857C">' + L(p.d) + '</text>';
              }
            }
            /* revival note */
            s += '<path d="M' + px(0.26) + ' ' + py(0.82) + ' L' + px(0.12) + ' ' + py(0.66) + '" fill="none" stroke="#B4AC9C"/>';
            s += '<text x="' + px(0.27) + '" y="' + (py(0.82) + 4) + '" font-size="10.5" fill="#55504A">' +
                 (lang === "ja" ? "近年の復権は、この向きへ戻ってゆく" : lang === "zh" ? "近年的復興，是往這個方向回走" : "the current revival is a walk back this way") + '</text>';
            /* axes */
            s += '<text x="' + X0 + '" y="' + (Y1 + 26) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "← 香りが静か　　　　香りの強さ　　　　香りが高い →"
                  : lang === "zh" ? "← 香氣安靜　　　　香氣強度　　　　香氣高揚 →"
                  : "← QUIETER      AROMA      LOUDER →") + '</text>';
            s += '<text x="' + (X0 - 12) + '" y="' + (Y0 - 14) + '" text-anchor="end" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "酸 ↑" : lang === "zh" ? "酸度 ↑" : "ACID ↑") + '</text>';
            s += '<text x="' + X1 + '" y="' + (Y1 + 26) + '" text-anchor="end" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "十号・一五〇一号・一六〇一号は、いずれも同じ高香・低酸の隅にある"
                  : lang === "zh" ? "十號、一五〇一號與一六〇一號都落在同一個高香、低酸的角落"
                  : "10, 1501 and 1601 all sit in the same high-aroma, low-acid corner") + '</text>';
            s += '<text x="' + X0 + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "番号に〇一の付く株——六〇一、七〇一、一四〇一——は同じ酵母の泡なしの変異であり、性格は変わらない。"
                  : lang === "zh" ? "編號帶「〇一」的菌株——六〇一、七〇一、一四〇一——是同一酵母的無泡突變，性格並不改變。"
                  : "Strains numbered with an added 01 — 601, 701, 1401 — are foamless mutants of the same yeast, with the same character.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"From 1906 the Brewing Society of Japan has isolated yeast from breweries whose sake was performing unusually well, purified it, and distributed it by ampoule to any licensed brewery that asks. The numbering runs roughly in order of release. Before this, a brewery relied on whatever lived in its walls and its <em>moto</em> tubs, and a bad year meant a spoiled season. The Kyōkai programme is the single largest cause of the twentieth-century rise in Japanese sake's baseline quality, and equally the single largest cause of its convergence.",
          ja:"一九〇六年以来、日本醸造協会は、とりわけ良い酒を出していた蔵から酵母を分離し、純粋培養して、求めるすべての免許蔵にアンプルで頒布してきた。番号はおおむね頒布の順に振られている。それ以前、蔵は自らの壁と酛桶に棲むものに頼るほかなく、悪い年は一造りを腐らせることを意味した。きょうかい酵母の事業は、二十世紀に日本酒の底辺の品質が上がった最大の原因であり、同時にその収斂をもたらした最大の原因でもある。",
          zh:"自 1906 年起，日本釀造協會便從表現特別出色的酒藏分離酵母，純化後以安瓿形式頒布給任何提出申請的持照酒藏。編號大致依頒布順序排列。在此之前，酒藏只能仰賴棲息於牆壁與酛桶中的菌，遇上壞年頭便意味著整季腐敗。協會酵母事業，是二十世紀日本酒基礎品質提升的最大原因，同時也是其風味趨同的最大原因。" } },
        { t:"table",
          caption:{en:"The strains you will meet on labels",ja:"酒標で出会う主な株",zh:"酒標上會遇見的菌株"},
          cols:[{en:"No.",ja:"番号",zh:"編號"},{en:"Source",ja:"分離元",zh:"分離來源"},{en:"From",ja:"年",zh:"年份"},{en:"Character",ja:"特徴",zh:"特徵"}],
          rows:[
            ["6",{en:"Aramasa, Akita",ja:"新政（秋田）",zh:"新政（秋田）"},"1930",
             {en:"The oldest strain still distributed. Quiet aroma, clean, wide and savoury; ferments reliably at 10–12°C. Enjoying a long revival among brewers who find modern high-ester strains monotonous.",ja:"いまも頒布される最古の株。香りは静かで、清らかに広く、旨味がある。10〜12度で安定して発酵する。現代の高エステル株を単調と見る造り手のあいだで、長い復権を続けている。",zh:"至今仍在頒布的最古老菌株。香氣安靜、潔淨、開闊而帶旨味；能在 10–12°C 穩定發酵。在覺得現代高酯菌株過於單調的釀造者之間，正經歷一場漫長的復興。"}],
            ["7",{en:"Masumi, Nagano",ja:"真澄（長野）",zh:"真澄（長野）"},"1946",
             {en:"The workhorse of postwar Japan and still the most-used strain in the country. Strong fermentation, moderate fruit, dependable in almost any conditions. If a sake has no aroma claim on the label, this is the likeliest yeast.",ja:"戦後日本の働き手であり、いまなお国内で最も使われる株。発酵力が強く、果実味は中庸で、ほとんどどんな条件でも頼りになる。酒標に香りの謳い文句がなければ、まずこの酵母である。",zh:"戰後日本的主力，至今仍是全國使用最廣的菌株。發酵力強、果味中庸，在幾乎任何條件下都可靠。若酒標未特別標榜香氣，多半就是它。"}],
            ["9",{en:"Kōro, Kumamoto",ja:"香露（熊本）",zh:"香露（熊本）"},"1950s",
             {en:"The yeast that made modern ginjō possible: low acid, high aroma, elegant. Isolated at the Kumamoto prefectural research brewery and distributed nationally in 1968; it dominated competition sake for a quarter of a century.",ja:"現代の吟醸を可能にした酵母。低酸、高香、端正。熊本県酒造研究所で分離され、一九六八年に全国頒布された。四半世紀にわたり鑑評会の出品酒を席巻した。",zh:"讓現代吟釀成為可能的酵母：低酸、高香、優雅。於熊本縣酒造研究所分離，1968 年起全國頒布，並主導鑑評會出品酒達四分之一世紀。"}],
            ["10",{en:"Meiri, Ibaraki",ja:"明利酒類（茨城）",zh:"明利酒類（茨城）"},"1952",
             {en:"Known as Ogawa yeast after its isolator. Very low acid, restrained but clear ginjō aroma, best at low temperature over a long mash. Unforgiving of a warm ferment.",ja:"分離者の名から小川酵母と呼ばれる。酸がきわめて低く、控えめだが明瞭な吟醸香をもち、長期低温の醪で最も良い。温度を上げた発酵を許さない。",zh:"以分離者之名稱作小川酵母。酸極低，吟釀香內斂而清晰，最適合長期低溫的醪。對溫度偏高的發酵毫不寬容。"}],
            ["14",{en:"Kanazawa tax bureau",ja:"金沢国税局",zh:"金澤國稅局"},"1996",
             {en:"Kanazawa yeast. Low acid, strong isoamyl acetate — the banana-and-pear register rather than apple. Popular in the Hokuriku region and for softer, rounder ginjō.",ja:"金沢酵母。低酸で酢酸イソアミルが強い——林檎ではなく、バナナと洋梨の音域である。北陸で広く使われ、柔らかく丸い吟醸に向く。",zh:"金澤酵母。低酸、乙酸異戊酯強勁——屬香蕉與洋梨的音域，而非蘋果。在北陸廣受使用，適合較柔軟圓潤的吟釀。"}],
            ["1801",{en:"Bred: 1601 × No. 9",ja:"育成：1601号×9号",zh:"育成：1601 號 × 9 號"},"2006",
             {en:"The competition yeast of the current era. Very high ethyl caproate, low acid, foamless, ferments hard. It is the reason so many gold-medal sake smell alike, and the reason many brewers have gone back to No. 6 and No. 7 for their own bottlings.",ja:"現代の鑑評会酵母。カプロン酸エチルがきわめて高く、酸は低く、泡なしで、力強く発酵する。金賞酒の多くが似た香りを持つ理由であり、多くの造り手が自社の酒では六号や七号に戻った理由でもある。",zh:"當代的鑑評會酵母。己酸乙酯極高、酸低、無泡、發酵強勁。這是眾多金賞酒氣味相似的原因，也是許多釀造者在自家酒款上回頭使用六號與七號的原因。"}],
            ["1901",{en:"Bred from 1801",ja:"1801号から育成",zh:"由 1801 號育成"},"2000s",
             {en:"A urea-non-producing version of 1801, made for export markets where ethyl carbamate limits apply.",ja:"1801号の尿素非生成型。カルバミン酸エチルの規制がある輸出市場のために作られた。",zh:"1801 號的尿素非生成型，專為有胺基甲酸乙酯限制的出口市場而製。"}],
            ["601 · 701 · 901 · 1401",{en:"Foamless mutants",ja:"泡なし株",zh:"無泡株"},"1971–",
             {en:"Non-foaming versions of the corresponding numbers. Chemically the same sake; practically, a tank can be filled about a fifth fuller and nobody has to stand over it scraping foam at three in the morning.",ja:"対応する番号の泡なし型。酒としては化学的に同じだが、実務上はタンクを二割ほど多く仕込め、深夜三時に泡を掻く者もいなくなる。",zh:"對應編號的無泡型。就酒本身而言化學上相同；就實務而言，槽可以多裝約五分之一，且不必有人在凌晨三點守著刮泡。"}]
          ] },
        { t:"note", label:{en:"On reading yeast numbers",ja:"酵母番号の読み方",zh:"酵母編號的讀法"}, text:{
          en:"A four-digit number is a modern bred strain rather than a wild isolate. A number ending in 01 is a foamless mutant of the strain whose number precedes it. A prefix such as KArg marks a urea-non-producing line. And a label saying only “self-cultivated yeast” (<em>jika-baiyō</em>) or “house yeast” (<em>kuratsuki</em>) means the brewery is not using the collection at all.",
          ja:"四桁の番号は、野生からの分離ではなく、近代の育成株である。末尾が01の番号は、その前の番号の株の泡なし変異体である。KArgのような接頭は尿素非生成系統を示す。そして「自家培養酵母」や「蔵付き酵母」とだけ書かれた酒標は、その蔵が頒布株をまったく使っていないことを意味する。",
          zh:"四位數編號代表現代育成株，而非野生分離株。以 01 結尾者，是其前一編號菌株的無泡突變體。KArg 之類的字首標示尿素非生成系統。而僅寫著「自家培養酵母」或「藏付酵母」的酒標，則意味著該酒藏完全未使用頒布菌株。" } }
      ]
    },

    { t:"section", id:"aroma",
      title:{ en:"The chemistry of ginjō aroma", ja:"吟醸香の化学", zh:"吟釀香的化學" }, jp:"香気成分",
      body:[
        { t:"p", text:{
          en:"Almost all of what people mean by “ginjō aroma” comes down to two esters produced by the yeast under cold, slow, slightly starved conditions. Knowing which one a sake leads with tells you a great deal about how it was made.",
          ja:"人が「吟醸香」と呼ぶもののほとんどは、冷たく、遅く、わずかに飢えた条件の下で酵母が生む二つのエステルに帰着する。ある酒がどちらを先に立てているかを知ることは、その造りについて多くを教えてくれる。",
          zh:"人們所謂的「吟釀香」，幾乎全部可歸結為酵母在低溫、緩慢、略處飢餓狀態下所生成的兩種酯。知道一款酒以哪一種為主，便能了解它是如何釀成的。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"Ethyl caproate",ja:"カプロン酸エチル",zh:"己酸乙酯"}, jp:"吟醸香・林檎",
            body:[{ t:"p", text:{
              en:"Green apple, melon, sometimes a faintly waxy pear. Made from fatty-acid metabolism inside the yeast cell, so it is strongly suppressed by lipids in the rice — which is why heavy milling raises it. Strains 1801, 1601 and Akita's AK-1 are selected for it. This is the smell of a modern competition daiginjō, and of most of what the export market buys.",
              ja:"青林檎、瓜、ときにかすかに蝋のような洋梨。酵母細胞内の脂肪酸代謝から生じるため、米に含まれる脂質によって強く抑えられる。高精白がこれを高める理由である。1801号、1601号、秋田のAK-1などがこの性質で選ばれている。現代の鑑評会大吟醸の香りであり、輸出市場が買うものの大半の香りでもある。",
              zh:"青蘋果、香瓜，有時帶一絲蠟質的洋梨。它源自酵母細胞內的脂肪酸代謝，因此會被米中的脂質強烈抑制——這正是高度精米能提升它的原因。1801 號、1601 號與秋田的 AK-1 皆為此性質而選育。這是現代鑑評會大吟釀的氣味，也是出口市場所購買者的主要氣味。" } }] },
          { h:{en:"Isoamyl acetate",ja:"酢酸イソアミル",zh:"乙酸異戊酯"}, jp:"吟醸香・香蕉",
            body:[{ t:"p", text:{
              en:"Banana, ripe pear, a hint of pineapple. Formed by esterifying isoamyl alcohol, so it rises when the mash is fermented cool but not starved. Strain 14 leads with it. Warmer, richer, rounder in effect than caproate, and it fades faster with age.",
              ja:"バナナ、熟した洋梨、わずかなパイナップル。イソアミルアルコールがエステル化して生じるため、醪を低温で、しかし飢えさせずに発酵させると高まる。14号がこれを前面に出す。カプロン酸エチルより温かく、豊かで、丸く感じられ、時間の経過とともに速く褪せる。",
              zh:"香蕉、熟洋梨，一絲鳳梨。由異戊醇酯化而成，因此在醪低溫但未處飢餓時會升高。14 號即以它為主。相較己酸乙酯，其效果更溫暖、豐潤、圓滑，也隨陳放更快消退。" } }] }
        ] },
        { t:"table",
          cols:[{en:"Compound",ja:"成分",zh:"成分"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Smells of",ja:"香りの印象",zh:"氣味印象"},{en:"Note",ja:"注",zh:"備註"}],
          jpCols:[1],
          rows:[
            [{en:"Ethyl caproate",ja:"カプロン酸エチル",zh:"己酸乙酯"},"吟醸香",
             {en:"Green apple, melon",ja:"青林檎、瓜",zh:"青蘋果、香瓜"},
             {en:"Rises with heavy milling and cold ferment; the signature of 1801.",ja:"高精白と低温発酵で高まる。1801号の署名。",zh:"隨高度精米與低溫發酵而升高；1801 號的標誌。"}],
            [{en:"Isoamyl acetate",ja:"酢酸イソアミル",zh:"乙酸異戊酯"},"酢酸イソアミル",
             {en:"Banana, ripe pear",ja:"バナナ、熟した洋梨",zh:"香蕉、熟洋梨"},
             {en:"Cool ferment, well-fed mash; strain 14 and many prefectural strains.",ja:"低温で栄養の足りた醪。14号や多くの県産株。",zh:"低溫且營養充足的醪；14 號與多種縣產菌株。"}],
            [{en:"Ethyl acetate",ja:"酢酸エチル",zh:"乙酸乙酯"},"酢酸エチル",
             {en:"Pear drops, solvent",ja:"洋梨の飴、溶剤",zh:"洋梨糖、溶劑"},
             {en:"Pleasant in trace, a fault in quantity — a sign of a stressed or oxidising ferment.",ja:"微量なら快いが、多ければ欠点。ストレスを受けた醪や酸化の徴である。",zh:"微量宜人，過量則為缺陷——是醪受壓或氧化的徵兆。"}],
            [{en:"Isoamyl alcohol",ja:"イソアミルアルコール",zh:"異戊醇"},"高級アルコール",
             {en:"Warm, spirituous",ja:"温かく、酒精的",zh:"溫熱、酒精感"},
             {en:"An ester precursor; too much reads as heat and coarseness.",ja:"エステルの前駆体。過剰は熱さと粗さとして現れる。",zh:"酯類的前驅物；過量則呈現灼熱與粗糙。"}],
            [{en:"4-vinylguaiacol",ja:"4-ビニルグアヤコール",zh:"4-乙烯基癒創木酚"},"4-VG",
             {en:"Clove, smoke",ja:"丁子、燻",zh:"丁香、煙燻"},
             {en:"Wanted in wheat beer, a defect in sake. Kyōkai strains are selected not to produce it.",ja:"小麦のビールでは求められるが、日本酒では欠点。きょうかい酵母は生成しないものが選ばれている。",zh:"在小麥啤酒中受歡迎，在清酒中屬缺陷。協會菌株即以不生成它為選拔條件。"}],
            [{en:"Dimethyl trisulfide",ja:"ジメチルトリスルフィド",zh:"二甲基三硫"},"DMTS",
             {en:"Boiled cabbage, gas",ja:"煮た菜、ガス臭",zh:"煮甘藍、瓦斯味"},
             {en:"The main compound behind <em>hine-ka</em>, the staling smell of badly stored sake.",ja:"劣化した酒のひね香の主成分。",zh:"劣質保存清酒「老化臭」的主要成分。"}]
          ] },
        { t:"p", text:{
          en:"One practical consequence: a high-caproate sake is at its loudest within a few months of pressing and quietens steadily thereafter, while the acids and amino compounds beneath it do not. A daiginjō bought for its aroma should be drunk; one bought for its structure can wait.",
          ja:"実務上の帰結が一つある。カプロン酸エチルの高い酒は、上槽後の数か月が最も声高で、その後は着実に静かになるが、その下にある酸やアミノ酸はそうではない。香りを目当てに買った大吟醸は飲むべきであり、骨格を目当てに買ったものは待てる。",
          zh:"有一項實務後果：己酸乙酯高的酒，在上槽後數月最為喧鬧，此後便穩定地安靜下來，而其下的酸與胺基酸則不然。為香氣而買的大吟釀應該喝掉；為骨架而買的則可以等。" } }
      ]
    },

    { t:"section", id:"foamless",
      title:{ en:"The foamless mutation", ja:"泡なし酵母", zh:"無泡酵母" }, jp:"泡なし",
      body:[
        { t:"p", text:{
          en:"A fermenting mash throws up a metre of foam, and for most of sake's history somebody had to be there in the small hours knocking it down so the tank did not overflow. In the 1960s researchers found spontaneous mutants that lack the cell-surface protein which makes yeast cells cling to bubbles; the mutant ferments identically but the foam collapses. Foamless versions of the main strains were released from 1971 onward.",
          ja:"発酵中の醪は一メートルの泡を吹き上げ、日本酒の歴史の大半において、タンクが溢れぬよう、誰かが夜半に泡を落としに行かねばならなかった。一九六〇年代、研究者は、酵母細胞を気泡に付着させる細胞表面の蛋白質を欠く自然変異体を見出した。この変異体は同じように発酵するが、泡は崩れる。主要な株の泡なし型は一九七一年以降、順次頒布された。",
          zh:"發酵中的醪會湧起一公尺高的泡沫，而在清酒史的大半時間裡，都得有人在深夜前去消泡，以免酒槽溢出。1960 年代，研究者發現了缺少那種使酵母細胞附著於氣泡之細胞表面蛋白的自發突變株；此突變株發酵表現相同，泡沫卻會潰散。主要菌株的無泡型自 1971 年起陸續頒布。" } },
        { t:"grid", cols:3, cells:[
          { k:{en:"Tank utilisation",ja:"タンク利用率",zh:"酒槽利用率"}, v:{en:"about +20%",ja:"およそ+20%",zh:"約 +20%"} },
          { k:{en:"Night labour",ja:"夜間の作業",zh:"夜間作業"}, v:{en:"largely gone",ja:"ほぼ不要に",zh:"大致消失"} },
          { k:{en:"Difference in the glass",ja:"酒質の差",zh:"杯中差異"}, v:{en:"none demonstrated",ja:"実証されず",zh:"未獲證實"} }
        ] },
        { t:"p", text:{
          en:"It is a small, unglamorous piece of applied genetics with an enormous cumulative effect on the economics of brewing, and it is invisible in the finished sake. A few breweries still use foaming strains deliberately, on the grounds that the foam is the most legible daily reading of how the mash is going — the rising, cresting and falling pattern that brewers have names for at each stage.",
          ja:"これは、酒造りの経済に巨大な累積効果をもたらした、小さく地味な応用遺伝学であり、仕上がった酒には現れない。それでも泡ありの株を意図して使う蔵が少数ある。泡こそが、醪の進み具合を日々最もよく読ませてくれる指標であり——立ち、盛り、落ちるその推移には、段階ごとに造り手の名前がついている——というのがその理由である。",
          zh:"這是一項不起眼的應用遺傳學小成果，卻對釀造經濟產生了巨大的累積影響，且在成酒中無跡可尋。仍有少數酒藏刻意使用有泡菌株，理由是泡沫是每日判讀醪進程最清晰的指標——其升起、堆高、落下的過程，釀造者對每個階段都有專門的名字。" } },
        { t:"chips", items:[
          {text:"筋泡"},{text:"水泡"},{text:"岩泡"},{text:"高泡"},{text:"落泡"},{text:"玉泡"},{text:"地"}
        ] },
        { t:"tiny", text:{
          en:"The stages of foam in a mash: thread foam, water foam, rock foam, high foam, falling foam, bead foam, and the flat surface at the end.",
          ja:"醪における泡の段階——筋泡、水泡、岩泡、高泡、落泡、玉泡、そして最後の平らな地。",
          zh:"醪中泡沫的階段：筋泡、水泡、岩泡、高泡、落泡、玉泡，以及最後平坦的「地」。" } }
      ]
    },

    { t:"section", id:"local",
      title:{ en:"Prefectural, flower and house yeasts", ja:"県産酵母・花酵母・蔵付き酵母", zh:"縣產酵母、花酵母與藏付酵母" }, jp:"多様化",
      body:[
        { t:"p", text:{
          en:"From the 1980s onward the direction of travel reversed. Prefectural research stations began breeding strains against their own rice and water and licensing them only to local breweries, which turned yeast from a force for national uniformity into a regional marker.",
          ja:"一九八〇年代以降、流れは逆向きになった。各県の研究機関が、自らの米と水に合わせて株を育成し、地元の蔵にのみ使用を許すようになったのである。これにより酵母は、全国的な均一化の力から、地域の標識へと転じた。",
          zh:"1980 年代以後，趨勢逆轉。各縣研究機構開始針對自身的米與水育成菌株，並僅授權在地酒藏使用，於是酵母從促成全國一致性的力量，轉為地域的標記。" } },
        { t:"defs", items:[
          { term:{en:"Shizuoka yeasts",ja:"静岡酵母",zh:"靜岡酵母"}, jp:"HD-1 · NEW-5",
            def:{en:"Developed by Kawamura Denbei from the late 1970s. Restrained, clean, low-acid and quietly aromatic — the strains behind Shizuoka's reputation for elegant, food-friendly ginjō, and an early demonstration that a prefecture could have a house style by choosing its own microbes.",
              ja:"一九七〇年代後半から河村伝兵衛が育成した。控えめで清らか、酸が低く、静かに香る——静岡が端正で料理に寄り添う吟醸で名を得た背景にある株であり、県が自らの微生物を選ぶことで独自の酒質を持ちうることを、早くに示した例である。",
              zh:"由河村傳兵衛自 1970 年代後期育成。內斂、潔淨、低酸而香氣安靜——這是靜岡以優雅、宜佐餐的吟釀建立聲譽的背後菌株，也早早證明了一個縣可以藉由選擇自己的微生物而擁有專屬酒質。"} },
          { term:{en:"Akita AK-1",ja:"秋田酵母AK-1",zh:"秋田酵母 AK-1"}, jp:"きょうかい15号",
            def:{en:"Bred in Akita and adopted into the national collection as No. 15. Very high ethyl caproate at low temperature; one of the strains that defined the 1990s competition style.",
              ja:"秋田で育成され、きょうかい15号として全国の保存株に加えられた。低温でカプロン酸エチルがきわめて高く、一九九〇年代の鑑評会の酒質を決めた株の一つである。",
              zh:"於秋田育成，並以協會 15 號納入全國保存菌株。低溫下己酸乙酯極高，是定義 1990 年代鑑評會風格的菌株之一。"} },
          { term:{en:"Yamagata KA / Fukushima F7-01",ja:"山形KA・福島うつくしま夢酵母",zh:"山形 KA・福島夢酵母"}, jp:"県産酵母",
            def:{en:"Two of the most successful prefectural programmes. Fukushima pairs its yeast with a state-run brewing academy for local staff, and the prefecture has taken more gold medals at the national appraisal than any other for a decade at a stretch — a result that is about training as much as about microbiology.",
              ja:"最も成功した県の取り組みのうちの二つ。福島は自県の酵母を、地元の蔵人のための県立の醸造アカデミーと組み合わせており、全国新酒鑑評会の金賞数で十年連続の首位を続けた。これは微生物学と同じくらい、教育の成果である。",
              zh:"最成功的兩個縣級計畫。福島將其酵母與為在地蔵人設立的縣營釀造學院相結合，並在全國新酒鑑評會金賞數上連續十年居冠——這個結果既關乎微生物學，也同樣關乎人才培育。"} },
          { term:{en:"Flower yeasts",ja:"花酵母",zh:"花酵母"}, jp:"花酵母",
            def:{en:"From the 1990s, researchers at Tokyo University of Agriculture isolated fermenting yeasts from the nectar of flowers — nadeshiko, sakura, begonia, marigold, sunflower — and screened them for brewing. They are genuine <em>S. cerevisiae</em> isolates, not a gimmick, and several give aroma profiles the collection strains do not.",
              ja:"一九九〇年代以降、東京農業大学の研究者たちが、撫子、桜、ベゴニア、マリーゴールド、向日葵といった花の蜜から発酵性の酵母を分離し、醸造用に選抜してきた。これらは正真正銘の <em>S. cerevisiae</em> の分離株であり、思いつきの類ではない。頒布株にはない香気構成を示すものもいくつかある。",
              zh:"自 1990 年代起，東京農業大學的研究者從撫子、櫻花、秋海棠、萬壽菊、向日葵等花朵的花蜜中分離出發酵性酵母，並篩選供釀造之用。它們是道地的 <em>S. cerevisiae</em> 分離株，並非噱頭，其中數種呈現頒布菌株所沒有的香氣輪廓。"} },
          { term:{en:"House yeast",ja:"蔵付き酵母",zh:"藏付酵母"}, jp:"蔵付酵母", romaji:"kuratsuki",
            def:{en:"Yeast resident in a brewery's own timbers and tools, allowed to inoculate the starter spontaneously. Risky, slow, and impossible to guarantee — but it is the pre-1906 method, and a small number of breweries have gone back to it as the logical end point of arguing for place.",
              ja:"蔵自身の木材や道具に棲みつき、酛に自然に入ってくる酵母。危険で、遅く、保証のしようがない。しかしこれは一九〇六年以前の方法であり、土地を語ることの論理的な終着点として、少数の蔵がここへ戻ってきている。",
              zh:"棲息於酒藏自身木材與器具中的酵母，任其自然接種於酛。風險高、速度慢、無從保證——但這是 1906 年以前的方法，也是少數酒藏作為「主張地方性」之邏輯終點而回歸的作法。"} }
        ] }
      ]
    },

    { t:"section", id:"other",
      title:{ en:"The other microbes in the building", ja:"蔵にいるほかの微生物", zh:"藏中的其他微生物" }, jp:"共存と敵",
      body:[
        { t:"grid", cols:3, cells:[
          { h:{en:"Lactic acid bacteria",ja:"乳酸菌",zh:"乳酸菌"}, jp:"味方",
            d:{en:"In kimoto and yamahai they arrive on their own, acidify the starter, and hold off everything else until the yeast can take over. Wanted — but only in the starter, and only at the right moment.",ja:"生酛や山廃では自ら現れ、酛を酸性にし、酵母が主役になれるまで他のすべてを退ける。歓迎されるが、酛のなかで、しかるべき時にだけである。",zh:"在生酛與山廢中，它們自行到來、使酛酸化，並在酵母足以接手之前壓制其他一切。是受歡迎的——但僅限於酛之中，也僅限於正確的時刻。"} },
          { h:{en:"Hiochi bacteria",ja:"火落菌",zh:"火落菌"}, jp:"敵",
            d:{en:"Alcohol-tolerant lactobacilli that can survive in finished sake, turning it cloudy and sour with a distinctive stale-butter note. Pasteurisation exists to kill them, and their existence is why sake was pasteurised in Japan three centuries before Pasteur described why it worked.",ja:"仕上がった酒のなかでも生き延びるアルコール耐性の乳酸菌で、酒を濁らせ酸っぱくし、特有の古いバターのような匂いを与える。火入れはこれを殺すために存在する。パスツールがその理由を説明する三世紀前に、日本で酒が加熱されていたのは、この菌がいたからである。",zh:"耐酒精的乳酸桿菌，能在成酒中存活，使其混濁、變酸，並帶有獨特的陳腐奶油味。火入正是為殺滅它們而存在；也正因有此菌，日本早在巴斯德闡明原理的三個世紀前便已將酒加熱。"} },
          { h:{en:"Wild yeasts",ja:"野生酵母",zh:"野生酵母"}, jp:"両義",
            d:{en:"Non-<em>cerevisiae</em> species in the air and on the rice. In a controlled mash they are contaminants producing off-flavours; in bodaimoto and some house-yeast projects they are part of the intended cast. The difference is whether the brewer chose them.",ja:"空気中や米の上にいる <em>cerevisiae</em> 以外の種。管理された醪では異臭を生む汚染菌であり、菩提酛や一部の蔵付き酵母の試みでは、意図された配役の一部である。違いは、造り手が選んだかどうかにある。",zh:"空氣中與米上非 <em>cerevisiae</em> 的種類。在受控的醪中它們是產生異味的污染菌；在菩提酛與部分藏付酵母的嘗試中，它們是預定的角色之一。差別在於釀造者是否選擇了它們。"} }
        ] },
        { t:"note", label:{en:"Urea and ethyl carbamate",ja:"尿素とカルバミン酸エチル",zh:"尿素與胺基甲酸乙酯"}, text:{
          en:"Yeast metabolising arginine releases urea, which can react slowly with ethanol to form ethyl carbamate, a compound regulated as a probable carcinogen in several export markets. The Japanese industry responded from the late 1980s by breeding urea-non-producing strains — the KArg lines and No. 1901 — and by controlling storage temperature, since the reaction is heat-driven. Levels in modern sake are very low; it is a solved problem, but it is solved because someone did the work.",
          ja:"アルギニンを代謝する酵母は尿素を放出し、これがエタノールとゆっくり反応してカルバミン酸エチルを生じうる。いくつかの輸出市場で発がん性が疑われる物質として規制されている化合物である。日本の業界は一九八〇年代後半から、尿素非生成株——KArg系統や1901号——を育成し、また反応が熱によって進むことから貯蔵温度を管理することで応じた。現代の日本酒における濃度はきわめて低い。解決された問題であるが、それは誰かが仕事をしたから解決されたのである。",
          zh:"代謝精胺酸的酵母會釋出尿素，尿素可與乙醇緩慢反應生成胺基甲酸乙酯——一種在數個出口市場中被列為可能致癌物而受管制的化合物。日本業界自 1980 年代後期起，以育成尿素非生成菌株（KArg 系統與 1901 號）並控制貯藏溫度（因該反應由熱驅動）作為因應。現代清酒中的含量極低；這是個已解決的問題，但它之所以解決，是因為有人做了該做的事。" } }
      ]
    },

{ t:"section", id:"breeding",
      title:{ en:"How a yeast is found, bred and distributed", ja:"酵母はどう見出され、育てられ、頒布されるか", zh:"酵母如何被找到、育成與頒布" }, jp:"酵母の育種",
      body:[
        { t:"p", text:{
          en:"The Kyōkai numbers on a brewery's paperwork are not a catalogue of naturally occurring strains. They are a breeding programme, and the two mechanisms behind it — isolation from a brewery that was already doing well, and deliberate selection for a chemical trait — produced almost every aroma most drinkers now associate with sake.",
          ja:"蔵の書類に並ぶきょうかいの番号は、自然に存在する株の目録ではない。それは育種の事業であり、その背後にある二つの仕組み——すでによい酒を出していた蔵からの分離と、化学的形質を狙った意図的な選抜——が、今日の飲み手が日本酒と結びつけるほとんどすべての香りを生んだ。",
          zh:"酒藏文件上的協會編號，並不是一份自然存在菌株的目錄。它是一項育種計畫；而其背後的兩套機制——從本來就釀得好的酒藏中分離，以及針對某項化學性狀的刻意篩選——造就了如今飲者所認知的幾乎所有清酒香氣。" } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Isolation from a good brewery", ja:"よい蔵からの分離", zh:"從優秀酒藏中分離" }, jp:"蔵付きから協会へ", romaji:"kuratsuki kara kyōkai e",
            meta:{ en:"The original method", ja:"最初の方法", zh:"最初的方法" },
            text:{ en:"The early Kyōkai strains were not designed; they were noticed. A brewery would win at the national appraisal repeatedly, the research institute would take a sample of its mash, isolate single colonies, test them, and distribute the best as a numbered strain. No. 6 came from Aramasa in Akita in 1930 and No. 9 from the Kumamoto institute's own brewery in 1952. Both were house yeasts before they were association yeasts, which is direct evidence that a brewery's resident population really can differ from its neighbours'.",
              ja:"初期のきょうかい酵母は設計されたのではなく、気づかれたのである。ある蔵が全国の鑑評会で繰り返し勝つ。研究機関がその醪の試料を取り、単一のコロニーを分離し、試験し、最良のものを番号付きの株として頒布する。6号は昭和五年（1930）に秋田の新政から、9号は昭和二十七年（1952）に熊本の研究所自身の蔵から来た。いずれも協会酵母である前に蔵付きの酵母であった。蔵に住み着いた集団が隣家のそれと実際に異なりうることの、直接の証拠である。",
              zh:"早期的協會酵母不是被設計出來的，而是被注意到的。某家酒藏在全國鑑評會上一再獲勝，研究機構便取其醪的樣品、分離單一菌落、加以測試，並把最好的以編號菌株頒布出去。6 號來自一九三〇年秋田的新政，9 號來自一九五二年熊本研究所自家的酒藏。兩者在成為協會酵母之前，都是藏付酵母——這是「酒藏常駐菌群確實可能與鄰家不同」的直接證據。" } },
          { n:"2", title:{ en:"Selection with a poison", ja:"毒による選抜", zh:"以毒篩選" }, jp:"セルレニン耐性", romaji:"cerulenin taisei",
            meta:{ en:"The modern method, and an elegant one", ja:"現代の方法であり、優美である", zh:"現代的方法，而且相當優雅" },
            text:{ en:"Cerulenin is an antibiotic that blocks fatty acid synthase, so ordinary yeast cannot grow in its presence. But a point mutation in the <em>FAS2</em> gene — a single amino acid substitution in the synthase — confers resistance, and the same mutation makes the enzyme release medium-chain fatty acids early instead of elongating them. Caproic acid is one of those medium-chain products, and caproic acid is the precursor of ethyl caproate, the green-apple ester of modern ginjō. So: grow yeast on cerulenin, and the only survivors are the ones that will also produce a great deal of apple aroma. The resistance and the aroma are the same mutation seen from two sides.",
              ja:"セルレニンは脂肪酸合成酵素を阻害する抗生物質であり、通常の酵母はその存在下で育てない。しかし<em>FAS2</em>遺伝子の点変異——合成酵素における一アミノ酸の置換——が耐性を与え、そして同じ変異が、酵素に中鎖脂肪酸を伸長させずに早く放させる。カプロン酸はその中鎖の産物の一つであり、カプロン酸は現代の吟醸の青林檎のエステル、カプロン酸エチルの前駆体である。ゆえに——セルレニンの上で酵母を育てれば、生き延びるのは、同時に多量の林檎の香りを生む株だけである。耐性と香りは、二つの側から見た同じ変異なのである。",
              zh:"賽路寧（cerulenin）是一種抑制脂肪酸合成酶的抗生素，一般酵母在它存在下無法生長。但 <em>FAS2</em> 基因上的一個點突變——合成酶中的單一胺基酸置換——會賦予抗性；而同一個突變也讓該酵素提早釋放中鏈脂肪酸，而非繼續延長。己酸正是這些中鏈產物之一，而己酸又是己酸乙酯——現代吟釀那股青蘋果酯香——的前驅物。因此：把酵母養在含賽路寧的培養基上，能活下來的，就只有同時會大量產生蘋果香氣的那些。抗性與香氣，是同一個突變的一體兩面。" } },
          { n:"3", title:{ en:"Testing, then a number", ja:"試験、そして番号", zh:"測試，然後給編號" }, jp:"頒布", romaji:"hanpu",
            meta:{ en:"What distribution actually means", ja:"頒布とは実際に何か", zh:"頒布實際上是什麼意思" },
            text:{ en:"A candidate strain is trial-brewed at several scales, checked for fermentation vigour, acid production, aroma output and behaviour at low temperature, and only then given a number and distributed — historically as ampoules of live culture that a brewery propagates up before the season. The association strains go to anyone; prefectural strains generally do not leave the prefecture, which is how a regional yeast becomes a regional style by administrative decision rather than by geography.",
              ja:"候補の株は複数の規模で試験醸造され、発酵の勢い、酸の生成、香りの出方、低温での振る舞いを確かめられ、そのうえで初めて番号を与えられ頒布される。歴史的には、蔵が季の前に培養して増やす、生きた培養のアンプルとしてであった。協会の株は誰にでも渡る。県の株はおおむね県外へ出ない。地域の酵母が、地理ではなく行政の決定によって地域の型となる仕組みである。",
              zh:"候選菌株會在數種規模下進行試釀，檢查發酵力、產酸、香氣產出與低溫下的表現，通過後才給予編號並頒布——歷史上是以活菌培養安瓿的形式，由酒藏在開季前自行擴培。協會菌株人人可得；縣級菌株一般不出縣境——這正是一款地域酵母憑行政決定而非地理條件，成為一種地域風格的機制。" } },
          { n:"4", title:{ en:"And then the foamless versions", ja:"そして泡なしの版", zh:"以及無泡版本" }, jp:"泡なし酵母", romaji:"awanashi kōbo",
            meta:{ en:"A practical mutation, not a flavour one", ja:"味ではなく実務の変異", zh:"實務性的突變，與風味無關" },
            text:{ en:"A fermenting mash throws a thick foam head, and a tank must be left a third empty to accommodate it. Foamless mutants — which lack the cell-surface property that traps bubbles — ferment identically but let a brewery fill the same tank far fuller and skip the labour of managing foam. Most numbered strains now exist in both forms, marked with a suffix. It is the clearest example in the yeast library of a trait selected purely for the economics of the building.",
              ja:"発酵中の醪は厚い泡の頭を立て、タンクは三分の一を空けておかねばならない。泡なし変異株——泡を捕える細胞表面の性質を欠く——は発酵は同じでありながら、同じタンクをはるかに満たすことを許し、泡の管理という労働を省かせる。今日、番号付きの株の多くは両方の形で存在し、記号で区別される。酵母の図書館において、建物の経済のみのために選抜された形質の、最も明快な例である。",
              zh:"發酵中的醪會冒出厚厚一層泡沫頭，酒槽必須空出三分之一來容納它。無泡突變株——缺少那個會困住氣泡的細胞表面性狀——發酵表現完全相同，卻讓酒藏能把同一只槽裝得滿得多，並省去管理泡沫的人力。如今多數編號菌株都同時存在兩種型態，以後綴區分。這是整座酵母圖書館中，純粹為了建築物的經濟性而被篩選之性狀的最清楚例子。" } }
        ] },

        { t:"note", text:{
          en:"Two consequences worth holding on to. First, the aroma of a modern ginjō is a bred trait with a known molecular basis, not a mystery of terroir — which does not make it less impressive, only better understood. Second, because the strains are distributed nationally, a yeast is the one input a brewery in any prefecture can obtain identically, which is precisely why prefectural yeast programmes exist: a strain you cannot buy is the one thing that stays local.",
          ja:"心に留めておくべき帰結が二つある。第一に、現代の吟醸の香りは、分子的な基礎の知られた育種の形質であって、風土の神秘ではない。それは見事さを減じるものではなく、よりよく理解されているというだけである。第二に、株が全国に頒布されるがゆえに、酵母はどの県の蔵も同一に入手しうる唯一の原料である。県の酵母事業が存在する理由はまさにそこにある——買えない株こそが、地域に留まる唯一のものである。",
          zh:"有兩個結論值得記住。第一，現代吟釀的香氣是一項有已知分子基礎的育種性狀，而非風土的神祕——這並不減損它的了不起，只是讓它被理解得更清楚。第二，正因為菌株是全國性頒布的，酵母是任何一縣的酒藏都能取得完全相同版本的唯一原料——這恰恰是縣級酵母計畫存在的理由：買不到的菌株，才是唯一能留在地方的東西。" } }
      ] },

    { t:"related", items:[
      { href:"microbes.html", why:{ en:"Everything else alive in the tank, in sequence.", ja:"槽のなかに生きる他のすべてを、順に。", zh:"槽裡其他所有活著的東西，依序排列。" } },
      { href:"starters.html", why:{ en:"The four ways of building a population of it.", ja:"その集団を築く四つの方法。", zh:"培養出這群酵母的四種方法。" } },
      { href:"taste.html", why:{ en:"The esters it makes, and what each smells of.", ja:"それが生むエステルと、それぞれの香り。", zh:"它造出的酯類，以及各自聞起來像什麼。" } },
      { href:"numbers.html", why:{ en:"The figures a yeast moves, and by how much.", ja:"酵母が動かす数と、その幅。", zh:"酵母會移動哪些數字，以及移動多少。" } }
    ] }
  ]
};


/* ---- --------------------------------------------- process */
SAKE.pages["process"] = {
  kicker: { en: "Making · 08", ja: "造り · 08", zh: "釀造 · 08" },
  title:  { en: "Brewing Process", ja: "製造工程", zh: "釀造流程" },
  jp: "酒造り · from grain to press",
  lede: {
    en: "From milled rice to the press takes between five and eight weeks. The sequence has been essentially unchanged since the sixteenth century: wash, soak, steam, split the steamed rice between kōji and mash, build a starter, then extend that starter into a full tank in three staged additions and let it ferment cold for a month. What follows is each step, what it is for, and what goes wrong.",
    ja: "精米を終えた米から上槽までは、五週間から八週間を要する。その順序は十六世紀以来、本質的に変わっていない——洗い、浸し、蒸し、蒸米を麹用と掛用に分け、酒母を立て、それを三段に分けて仕込むことで一本のタンクへ育て、ひと月のあいだ低温で発酵させる。以下は各工程について、その目的と、何が失敗するのかである。",
    zh: "自精米完成的米到上槽，需時五至八週。其順序自十六世紀以來本質未變：洗、浸、蒸，將蒸米分作麴用與掛米，立起酒母，再以三段投料把酒母擴充為一整槽，並於低溫下發酵一個月。以下逐步說明每個環節的目的，以及可能出錯之處。"
  },
  body: [
    { t:"section", id:"calendar",
      title:{ en:"The season", ja:"酒造年度", zh:"釀造年度" }, jp:"寒造り · BY",
      body:[
        { t:"p", text:{
          en:"The brewing year (<em>BY</em>, <em>brewery year</em>) runs from 1 July to 30 June, so a sake labelled BY R7 was made in the season beginning July 2025. Classical brewing is compressed into the cold half of that year. A large brewery may run a climate-controlled plant all year; a small one still shuts down entirely between April and September.",
          ja:"酒造年度（BY）は七月一日から翌年六月三十日までであり、BY令和7年と記された酒は2025年7月に始まる期の造りである。古典的な酒造りはこの年度の寒い半分に凝縮される。大手は空調設備で通年製造することもあるが、小さな蔵は今も四月から九月まで完全に休む。",
          zh:"釀造年度（BY）自 7 月 1 日至次年 6 月 30 日，故標示 BY 令和 7 年者，即為 2025 年 7 月開始的釀期所造。古典釀造集中於該年度較寒冷的半年。大型酒藏可能以恆溫廠房全年生產；小型酒藏則至今仍在四月至九月間完全歇業。" } },
        { t:"table",
          caption:{en:"A classical brewing season",ja:"古典的な造りの一年",zh:"古典釀造年"},
          cols:[{en:"When",ja:"時期",zh:"時期"},{en:"Japanese",ja:"呼称",zh:"日文"},{en:"What happens",ja:"内容",zh:"內容"}],
          jpCols:[1],
          rows:[
            [{en:"September–October",ja:"九月〜十月",zh:"九月至十月"},"蔵入り · 甑起こし",{en:"The team arrives. Equipment is scrubbed and sterilised, the kōji room is aired and heated, the first rice is milled and rested. <em>Koshiki-okoshi</em> — “raising the steamer” — is the ceremonial first steaming.",ja:"蔵人が入る。道具を洗い殺菌し、麹室を乾かして温め、最初の米を精米して枯らす。「甑起こし」はその年の最初の蒸きを行う儀礼である。",zh:"藏人入藏。清洗殺菌器具，麴室通風加溫，第一批米完成精米與靜置。「甑起」即該年首次蒸米的儀式。"}],
            [{en:"October–November",ja:"十月〜十一月",zh:"十月至十一月"},"荒走り · 新酒",{en:"The first tanks are pressed. New sake is cloudy, sharp, still carrying dissolved CO₂. A cedar ball — <em>sugidama</em> — is hung green above the brewery door to announce it.",ja:"最初のタンクが上槽される。新酒は澱を帯び、鋭く、炭酸を残している。蔵の軒に青い杉玉を吊るしてそれを告げる。",zh:"最初幾槽上槽。新酒帶濁、鋒利，仍含溶解的二氧化碳。酒藏門前掛上翠綠的杉玉以昭告新酒問世。"}],
            [{en:"December–February",ja:"十二月〜二月",zh:"十二月至二月"},"寒仕込み",{en:"The core of the season. Coldest air, cleanest fermentation, and the tanks intended for competition. Everything a brewery is judged on is made in these ten weeks.",ja:"造りの中核。最も寒く、最も清澄な発酵となり、鑑評会出品用のタンクもここで仕込まれる。蔵が評価されるもののすべては、この十週間に造られる。",zh:"釀期核心。空氣最冷、發酵最潔淨，供鑑評會參賽的酒槽亦於此時仕込。酒藏被評判的一切，都在這十週內完成。"}],
            [{en:"March",ja:"三月",zh:"三月"},"皆造 · 甑倒し",{en:"<em>Kaizō</em>: the last tank is pressed and the season closes. <em>Koshiki-daoshi</em> — “laying the steamer down” — is the final steaming, and is celebrated.",ja:"皆造——最後のタンクを搾り、造りが終わる。「甑倒し」はその年最後の蒸きであり、祝われる。",zh:"皆造——最後一槽搾出，釀期結束。「甑倒」是該年最後一次蒸米，並有慶祝。"}],
            [{en:"April–June",ja:"四月〜六月",zh:"四月至六月"},"貯蔵 · 火入れ",{en:"Pasteurising, tank maturation, blending, bottling. Spring sake — <em>haru-zake</em>, nama, shiboritate — reaches the market.",ja:"火入れ、貯蔵、調合、瓶詰。春酒・生酒・しぼりたてが市場に出る。",zh:"火入、貯藏熟成、調和、裝瓶。春酒、生酒、搾立酒進入市場。"}],
            [{en:"September",ja:"九月",zh:"九月"},"ひやおろし",{en:"Sake pasteurised once in spring and rested over the summer is released without a second heating, having softened. The autumn counterpart to the spring nama releases.",ja:"春に一度だけ火入れして夏を越した酒が、二度目の火入れをせず、丸みを得て出荷される。春の生酒に対応する秋の顔である。",zh:"春天火入一次、經一夏靜置的酒，不再第二次火入即出貨，此時已轉圓潤。這是與春季生酒相對應的秋日面貌。"}]
          ] }
      ]
    },

    { t:"section", id:"prep",
      title:{ en:"Preparing the rice", ja:"原料処理", zh:"原料處理" }, jp:"洗米・浸漬・蒸き",
      body:[
        { t:"steps", items:[
          { title:{en:"Washing",ja:"洗米",zh:"洗米"}, jp:"洗米", romaji:"senmai",
            meta:{en:"minutes · cold water",ja:"数分・冷水",zh:"數分鐘・冷水"},
            text:{en:"Milling leaves a coating of white flour on every grain. If it is not removed it dissolves early in the mash and produces coarse, muddy flavour. For daiginjō the rice is washed in ten-kilogram batches by hand or in a small pressurised washer, and the water runs from milky to clear in under a minute.",
                  ja:"精米は粒の表面に白い粉を残す。これを落とさなければ醪の初期に溶け出し、雑で濁った味を生む。大吟醸では十キロ単位の小分けで手洗いするか、小型の加圧洗米機を用いる。水は一分と経たずに白濁から透明へ変わる。",
                  zh:"精米會在每粒米表面留下一層白粉。若不去除，它會在醪的初期溶出，造成粗糙混濁的風味。大吟釀多以十公斤為單位手洗，或使用小型加壓洗米機；水在不到一分鐘內即由乳白轉為澄清。"} },
          { title:{en:"Soaking",ja:"浸漬",zh:"浸漬"}, jp:"浸漬", romaji:"shinseki",
            meta:{en:"seconds to overnight · target 28–33% water uptake",ja:"数秒から一晩・吸水率28〜33%を目標",zh:"數秒至整夜・目標吸水率 28–33%"},
            text:{en:"The single most precisely controlled step in the brewery. Highly milled rice absorbs water very fast — a 35% daiginjō rice may need exactly 47 seconds — and a few seconds either way changes how the grain steams and how it dissolves five weeks later. Brewers weigh the batch before and after and adjust to the second. Less-milled rice may soak for an hour or overnight.",
                  ja:"蔵のなかで最も精密に制御される工程。高精白の米は極めて速く吸水し、精米歩合35%の大吟醸用米では四十七秒ちょうど、ということもある。数秒の差が蒸し上がりを変え、五週間後の溶け方を変える。蔵人は前後の重量を量り、秒単位で調整する。精白の浅い米は一時間、あるいは一晩浸すこともある。",
                  zh:"整個酒藏中控制最精密的一步。高度精米的米吸水極快——35% 的大吟釀用米可能恰好需要 47 秒——前後幾秒之差便會改變蒸米狀態，並在五週後改變其溶解方式。藏人前後秤重，以秒為單位調整。精米較淺者則可能浸一小時或整夜。"} },
          { title:{en:"Steaming",ja:"蒸き",zh:"蒸米"}, jp:"蒸米", romaji:"mushimai",
            meta:{en:"about 60 minutes · steam from below",ja:"約60分・下から蒸気",zh:"約 60 分鐘・蒸氣自下而上"},
            text:{en:"Rice for sake is steamed, never boiled. Dry steam rises through the bed from below in a <em>koshiki</em> — traditionally a wooden vat, now usually a continuous belt steamer — gelatinising the starch without waterlogging the grain. The target texture is <em>gaikō-nainan</em>: firm and separate on the outside, soft in the centre. A grain that is soft outside will dissolve too early and make a heavy sake; one that is hard throughout will resist kōji and never fully convert.",
                  ja:"酒の米は蒸すのであって煮ない。甑——古くは木桶、現在は連続蒸米機が多い——のなかを下から乾いた蒸気が抜け、粒に水を含ませすぎることなくデンプンを糊化させる。目指す状態は「外硬内軟」——外は硬く粒立ち、中は柔らかい。外が柔らかい米は早く溶けて重い酒になり、芯まで硬い米は麹を寄せつけず、最後まで糖化しきらない。",
                  zh:"釀酒的米用蒸，絕不用煮。乾蒸氣自下方穿過甑（傳統為木桶，現多為連續蒸米機）中的米層，使澱粉糊化而不致讓米粒吸飽水。目標質地是「外硬內軟」——外層堅實分明、中心柔軟。外層過軟者會過早溶解，釀出厚重的酒；通體堅硬者則麴菌難以進入，始終無法完全糖化。"} },
          { title:{en:"Cooling and dividing",ja:"放冷と分配",zh:"放冷與分配"}, jp:"放冷", romaji:"hōrei",
            meta:{en:"to 35 °C for kōji · to 10–20 °C for the mash",ja:"麹用は35℃、掛米は10〜20℃へ",zh:"麴用降至 35°C・掛米降至 10–20°C"},
            text:{en:"The steamed rice is now split. Roughly a fifth goes to the kōji room at body temperature; the rest is cooled much further and added to the starter or the mash. In old breweries this was done by spreading rice on cloth in the cold air and turning it with shovels; most now use a cooling conveyor.",
                  ja:"蒸し上がった米はここで分けられる。およそ五分の一を人肌の温度で麹室へ、残りはさらに冷やして酒母や醪へ加える。古い蔵では布の上に広げて寒気にさらし、シャベルで返した。現在は放冷機を用いることが多い。",
                  zh:"蒸好的米在此分道。約五分之一以體溫送入麴室，其餘則冷卻至更低溫度，加入酒母或醪中。老酒藏將米攤在布上迎冷風、以鏟翻動；如今多使用放冷輸送帶。"} }
        ] },
        { t:"note", label:{en:"Proportions",ja:"歩合",zh:"比例"}, text:{
          en:"A typical premium tank uses total rice split roughly 20–22% into kōji and 78–80% into the mash as plain steamed rice (<em>kake-mai</em>). Water is added at 110–140% of the total rice weight — the <em>kumimizu-buai</em>. A high water ratio gives a lighter, cleaner sake; a low one gives density and risk.",
          ja:"上位の酒の一仕込みでは、総米のおよそ20〜22%を麹米、78〜80%を掛米とすることが多い。水は総米重量の110〜140%を加える——汲水歩合である。汲水が多ければ軽く清らかな酒に、少なければ密度と危険が増す。",
          zh:"高階酒的一槽仕込中，總米量約 20–22% 作麴米，78–80% 作掛米。加水量為總米重量的 110–140%，即「汲水步合」。汲水多則酒體輕盈潔淨，汲水少則濃密而風險升高。" } }
      ]
    },

    { t:"section", id:"shubo",
      title:{ en:"The starter", ja:"酒母", zh:"酒母" }, jp:"酒母・酛",
      body:[
        { t:"p", text:{
          en:"The purpose of the starter — <em>shubo</em> or <em>moto</em> — is to build an enormous, pure, acid-protected population of yeast in a small volume before committing to a full tank. A finished starter contains on the order of a hundred million yeast cells per millilitre. It is a few per cent of the eventual tank volume and takes two weeks to a month.",
          ja:"酒母（酛）の目的は、本仕込みに踏み切る前に、小さな容量のなかで、酸に守られた純粋な酵母の膨大な集団を育てることにある。完成した酒母には、一ミリリットルあたり一億個の桁で酵母が存在する。最終的なタンク容量の数パーセントにすぎず、二週間から一か月を要する。",
          zh:"酒母（酛）的目的，是在投入整槽之前，先於小容量中培養出龐大、純淨、受酸保護的酵母族群。完成的酒母每毫升含有一億個數量級的酵母細胞。它僅占最終槽容的百分之幾，卻需時兩週至一個月。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"What has to be true at the end",ja:"完成時に成立すべき条件",zh:"完成時必須成立的條件"},
            d:{en:"Yeast at very high cell count and in active growth; lactic acid at roughly 0.5% so the pH sits near 3.5; no wild yeast, no acetic bacteria, no <em>hiochi</em>; some alcohol already present, typically 10–13%, as a further barrier.",ja:"酵母が極めて高い菌数で活発に増殖していること。乳酸が約0.5%あり、pHが3.5前後にあること。野生酵母・酢酸菌・火落菌が存在しないこと。追加の障壁として、通常10〜13%のアルコールが既に生成していること。",zh:"酵母細胞數極高且處於旺盛增殖；乳酸約 0.5%，pH 約在 3.5；無野生酵母、無醋酸菌、無火落菌；已生成一定酒精（通常 10–13%）作為額外屏障。"} },
          { h:{en:"The four ways to get there",ja:"そこへ至る四つの道",zh:"抵達的四種途徑"},
            d:{en:"<em>Sokujō</em> (add lactic acid, two weeks, ~90% of production), <em>kimoto</em> (wild lactic, pole-ground, a month), <em>yamahai</em> (wild lactic without pole-grinding, a month), <em>bodaimoto</em> (soured water made first, medieval, rare). Each is set out in <a href=\"starters.html\">Starter Methods</a>.",ja:"速醸（乳酸を添加、二週間、生産の約90%）、生酛（野生乳酸、山卸あり、一か月）、山廃（野生乳酸、山卸なし、一か月）、菩提酛（先にそやし水を作る中世の法、稀）。それぞれ<a href=\"starters.html\">酒母の型</a>で詳述する。",zh:"速釀（添加乳酸，兩週，約占產量 90%）、生酛（野生乳酸，行山卸，一個月）、山廢（野生乳酸，不行山卸，一個月）、菩提酛（先製酸水的中世工法，罕見）。各法詳見<a href=\"starters.html\">酒母工法</a>。"} }
        ] }
      ]
    },

    { t:"section", id:"charge",
      title:{ en:"The arithmetic of a charge", ja:"仕込み配合の算術", zh:"一缸投料的算術" }, jp:"仕込み配合",
      body:[
        { t:"p", text:{
          en:"Before any of it happens, the brewer writes a recipe: how much rice in total, what fraction of that rice becomes kōji, how much water, and how the whole is divided between the starter and the three additions. Everything downstream — the fermentation curve, the final alcohol, the sweetness, the texture — is set here, on paper, weeks before anything is tasted.",
          ja:"何が起きるより先に、造り手は配合を書く。総米はいくらか、そのうちどれだけを麹とするか、汲水はいくらか、そして全体を酒母と三度の添えにどう分けるか。以下のすべて——発酵の曲線、最終の度数、甘み、質感——は、何かを味わうより幾週も前に、ここで、紙の上で定まる。",
          zh:"在這一切發生之前，釀造者先寫下配方：總共用多少米、其中多少比例做成麴、用多少水，以及整體如何分配到酒母與三次投料之間。之後的一切——發酵曲線、最終酒精度、甜度、質地——都在這裡、在紙上、在任何東西被嚐到的數週之前就已決定。" } },
        { t:"defs", items:[
          { term:{ en:"Total rice", ja:"総米", zh:"總米" }, jp:"総米", romaji:"sōmai",
            def:{ en:"The white rice weight of the whole tank, counted after milling. A small premium tank is 600–1,500 kg; a large ordinary-grade tank can be 10 tonnes or more. Everything else in the recipe is expressed as a percentage of this number, which is why a brewery can scale a recipe up or down without rethinking it.",
              ja:"精米後に数えた、一本の槽の白米の総重量である。小さな高級の仕込みは六百から千五百キロ、大きな普通酒の仕込みは十トン以上にもなる。配合の他のすべてはこの数の百分率で表され、それゆえ蔵は考え直すことなく配合を大小に写しうる。",
              zh:"整缸的白米重量，於精磨之後計算。小型高級仕込為六百至一千五百公斤；大型普通酒仕込可達十噸以上。配方中的其他一切都以這個數字的百分比表示，這正是酒藏能夠不必重新思考、就把配方按比例放大或縮小的原因。" } },
          { term:{ en:"Kōji ratio", ja:"麹歩合", zh:"麴步合" }, jp:"麹歩合", romaji:"kōji-buai",
            def:{ en:"The share of the total rice that is made into kōji rather than added as plain steamed rice. The legal minimum for <em>tokutei meishōshu</em> is 15%; the practical range is 20–22% for most premium sake, and higher — sometimes 30% or more — for kimoto, for very dry styles, and for anything that needs extra enzyme to keep a stubborn mash moving. More kōji means more enzyme, more amino acids, more body and more risk of coarseness.",
              ja:"総米のうち、ただ蒸した米として加えるのではなく麹とする割合である。特定名称酒の法の下限は十五パーセント、実際の幅はほとんどの高級酒で二十から二十二パーセント、生酛や、きわめて辛い型や、頑固な醪を動かし続けるために酵素を余分に要するものでは、より高く、時に三十パーセント以上になる。麹が多いとは、酵素が多く、アミノ酸が多く、厚みが増し、そして粗くなる危うさも増すということである。",
              zh:"總米中被製成麴、而非以單純蒸米加入的比例。特定名稱酒的法定下限為百分之十五；實務區間在多數高級酒為百分之二十至二十二，而生酛、極辛口的類型，以及任何需要額外酵素來推動頑固之醪的酒，比例更高，有時達百分之三十以上。麴多，意味著酵素多、胺基酸多、酒體更厚，同時變得粗糙的風險也更高。" } },
          { term:{ en:"Water ratio", ja:"汲水歩合", zh:"汲水步合" }, jp:"汲水歩合", romaji:"kumimizu-buai",
            def:{ en:"Brewing water as a percentage of total rice weight. Around 110–120% gives a thick, slow, concentrated mash; 130–140% a looser, faster, lighter one; some modern ginjō run higher still. Note that this counts only the water added to the mash — not the water already inside the steamed rice, which adds roughly another third of the rice weight again.",
              ja:"総米の重さに対する仕込水の百分率である。百十から百二十のあたりは厚く遅く濃い醪を与え、百三十から百四十はより緩く速く軽い醪を与える。現代の吟醸にはさらに高いものもある。これは醪に加えた水のみを数えることに注意されたい。蒸米の内にすでにある水——米の重さのおよそ三分の一をふたたび加えるもの——は含まない。",
              zh:"仕込用水占總米重量的百分比。約百分之一百一十至一百二十會產生厚重、緩慢、濃縮的醪；百分之一百三十至一百四十則較鬆、較快、較輕；某些現代吟釀甚至更高。請注意，這只計算加入醪中的水，不包含蒸米內部已有的水分——那大約又等於米重的三分之一。" } },
          { term:{ en:"Why the shape matters", ja:"形が効く理由", zh:"形狀為何重要" }, jp:"配合と酒質", romaji:"haigō to shushitsu",
            def:{ en:"Two brewers can use the same rice, the same yeast and the same water and produce entirely different sake by changing these three numbers and the temperature schedule. That is the real answer to the question of what a brewer actually does: not a secret ingredient, but a set of ratios and a curve, chosen in advance and defended for thirty days.",
              ja:"二人の造り手が同じ米、同じ酵母、同じ水を用いても、この三つの数と温度の日程を変えることでまったく異なる酒を生む。造り手が実際に何をしているのかという問いへの真の答えはそれである。秘密の材ではなく、あらかじめ選ばれ三十日にわたって守られる、比の一組と一本の曲線である。",
              zh:"兩位釀造者可以使用相同的米、相同的酵母、相同的水，卻僅憑改變這三個數字與溫度計畫，就做出完全不同的酒。「釀造者實際上在做什麼」這個問題的真正答案就在這裡：不是什麼祕密原料，而是一組事先選定、並在三十天裡持續捍衛的比例與一條曲線。" } }
        ] },
        { t:"table",
          caption:{ en:"A worked example — one 1,500 kg tank at 20% kōji and 129% water. Proportions vary by house and by style; the shape does not.", ja:"計算例——総米千五百キロ、麹歩合二十パーセント、汲水歩合百二十九パーセントの一本。割合は蔵と型により異なるが、形は変わらない。", zh:"一個實算範例——總米一千五百公斤、麴步合百分之二十、汲水步合百分之一百二十九的一缸。比例因酒藏與風格而異，但形狀不變。" },
          cols:[{ en:"Stage", ja:"段", zh:"階段" }, { en:"Day", ja:"日", zh:"日" }, { en:"Kōji rice", ja:"麹米", zh:"麴米" }, { en:"Steamed rice", ja:"掛米", zh:"掛米" }, { en:"Water", ja:"汲水", zh:"汲水" }, { en:"Cumulative rice", ja:"累計総米", zh:"累計總米" }],
          numCols:[2,3,4,5], keyCol:0,
          rows:[
            [{ en:"Starter", ja:"酒母", zh:"酒母" }, { en:"−14 to −2", ja:"−14〜−2", zh:"−14 至 −2" }, "35 kg", "70 kg", "110 L", "105 kg"],
            [{ en:"First addition", ja:"初添", zh:"初添" }, "1", "60 kg", "180 kg", "260 L", "345 kg"],
            [{ en:"Dance", ja:"踊", zh:"踊" }, "2", "—", "—", "—", "345 kg"],
            [{ en:"Second addition", ja:"仲添", zh:"仲添" }, "3", "85 kg", "320 kg", "540 L", "750 kg"],
            [{ en:"Third addition", ja:"留添", zh:"留添" }, "4", "120 kg", "630 kg", "1,020 L", "1,500 kg"],
            [{ en:"Total", ja:"合計", zh:"合計" }, "—", "300 kg", "1,200 kg", "1,930 L", "1,500 kg"]
          ] },
        { t:"scale",
          title:{ en:"Share of the total rice, by stage", ja:"段ごとの総米に占める割合", zh:"各階段占總米的比例" },
          segs:[
            { label:{ en:"Starter 7%", ja:"酒母 7%", zh:"酒母 7%" }, w:7, fill:"var(--h-rice)" },
            { label:{ en:"First 16%", ja:"初添 16%", zh:"初添 16%" }, w:16, fill:"var(--h-koji)" },
            { label:{ en:"Second 27%", ja:"仲添 27%", zh:"仲添 27%" }, w:27, fill:"var(--h-plum)" },
            { label:{ en:"Third 50%", ja:"留添 50%", zh:"留添 50%" }, w:50, fill:"var(--h-water)" }
          ],
          note:{ en:"Each addition roughly doubles what is already in the tank. The yeast never has to colonise more than its own volume again, which is why a mash that took two weeks to start can absorb ten times its own weight of rice in four days without stalling.",
            ja:"それぞれの添えは、すでに槽にあるものをおよそ倍にする。酵母は自らの体積を再び超えて広がる必要がなく、それゆえ立ち上がりに二週を要した醪が、四日のうちに自らの十倍の重さの米を、止まることなく受け入れうる。",
            zh:"每一次投料大致都把槽中已有的量翻倍。酵母從不需要一次殖民超過自身體積的空間——這正是為什麼一缸花了兩週才啟動的醪，能在四天內吸收十倍於自身重量的米而不致停滯。" } }
      ] },

    { t:"section", id:"moromi",
      title:{ en:"The main mash", ja:"醪", zh:"醪" }, jp:"三段仕込み · moromi",
      body:[
        { t:"p", text:{
          en:"If the whole tank's worth of rice, kōji and water were added to the starter at once, the yeast would be diluted below the density at which it can dominate, and the acidity that protects it would be diluted with it. The solution, in place since the sixteenth century, is to add the material in three stages over four days, roughly doubling the volume each time so the yeast population always keeps pace.",
          ja:"一本分の米・麹・水を一度に酒母へ加えれば、酵母は優占できない密度まで薄まり、それを守っている酸もともに薄まってしまう。十六世紀以来の解決は、四日をかけて三度に分けて仕込み、そのつど容量をおおむね倍にすることで、酵母の増殖が常に追いつくようにすることである。",
          zh:"若把整槽份的米、麴與水一次投入酒母，酵母會被稀釋到無法取得優勢的密度，保護它的酸度也會一併被稀釋。自十六世紀沿用至今的解法，是在四天內分三次投料，每次約使容量倍增，讓酵母族群始終跟得上。" } },
        { t:"steps", items:[
          { n:"1", title:{en:"First addition",ja:"初添",zh:"初添"}, jp:"添 · 初添", romaji:"soe",
            meta:{en:"day 1 · about ⅙ of total rice · 12–13 °C",ja:"一日目・総米の約六分の一・12〜13℃",zh:"第 1 日・約總米六分之一・12–13°C"},
            text:{en:"Kōji, steamed rice and water are added to the starter in a small tank. The mixture is thick, and the temperature is set a little warm to encourage the yeast to multiply rather than ferment.",ja:"小さなタンクのなかで、酒母に麹・蒸米・水を加える。粥状に濃く、発酵よりも増殖を促すため、温度はやや高めに設定する。",zh:"於小槽中將麴、蒸米與水加入酒母。混合物濃稠，溫度設得稍高，以促使酵母增殖而非發酵。"} },
          { n:"2", title:{en:"The dance",ja:"踊り",zh:"踊"}, jp:"踊", romaji:"odori",
            meta:{en:"day 2 · nothing is added",ja:"二日目・何も加えない",zh:"第 2 日・不投料"},
            text:{en:"A deliberate pause. The yeast count roughly doubles and the surface begins to rise and churn — the “dance” the name refers to. Skipping this day is the classic way to lose a tank.",ja:"意図的な休止。酵母数はおおむね倍増し、表面が盛り上がって波打ち始める——「踊り」の名はこれによる。この一日を省くことは、一本を失う古典的な方法である。",zh:"刻意的停頓。酵母數約增為兩倍，液面開始隆起翻攪——「踊」之名即由此而來。省略這一天，是失去一整槽酒的典型作法。"} },
          { n:"3", title:{en:"Second addition",ja:"仲添",zh:"仲添"}, jp:"仲添", romaji:"nakazoe",
            meta:{en:"day 3 · about ⅓ of total rice · 9–10 °C",ja:"三日目・総米の約三分の一・9〜10℃",zh:"第 3 日・約總米三分之一・9–10°C"},
            text:{en:"The volume roughly doubles again and the mash is moved to the main tank if it was not there already. Temperature is dropped.",ja:"容量が再びおおむね倍になり、まだであれば本タンクへ移す。温度は下げる。",zh:"容量再度約增一倍，若尚未移入正槽則於此時移入。溫度調降。"} },
          { n:"4", title:{en:"Third addition",ja:"留添",zh:"留添"}, jp:"留添", romaji:"tomezoe",
            meta:{en:"day 4 · about ½ of total rice · 7–8 °C",ja:"四日目・総米の約二分の一・7〜8℃",zh:"第 4 日・約總米二分之一・7–8°C"},
            text:{en:"The last and largest addition. From here nothing more goes in, except in a few styles that use a fourth addition (<em>yodan</em>) of rice, kōji or sweetener at the end to adjust sweetness.",ja:"最後にして最大の仕込み。以後は何も加えない。ただし、甘みを調整するために末期に米・麹・糖を加える四段仕込みを行う型もある。",zh:"最後也是最大的一段。此後不再投料，惟少數酒質會在末期以米、麴或糖進行「四段」投料以調整甜度。"} }
        ] },
        { t:"figure",
          caption:{en:"A ginjō fermentation over about thirty days. Baumé (a density reading, proportional to residual sugar) falls as alcohol rises; temperature is held down deliberately, and the peak the brewer permits is what separates a ginjō ferment from an ordinary one.",
                   ja:"およそ三十日の吟醸醪。ボーメ（比重の読み値であり残糖に比例する）は下がり、アルコールは上がる。温度は意図的に抑えられ、造り手が許す最高温度こそが吟醸の醪を通常の醪から分ける。",
                   zh:"約三十天的吟釀醪。波美度（比重讀數，與殘糖成正比）下降，酒精上升；溫度被刻意壓低，而釀造者所允許的峰值，正是吟釀醪與一般醪的分野。"},
          svg: function(lang, L){
            var w = {
              day:{en:"days",ja:"日数",zh:"天數"},
              alc:{en:"alcohol %",ja:"アルコール分 %",zh:"酒精 %"},
              bme:{en:"baumé",ja:"ボーメ",zh:"波美度"},
              tmp:{en:"temperature °C",ja:"品温 ℃",zh:"品溫 °C"},
              add:{en:"three additions",ja:"三段仕込み",zh:"三段仕込"},
              press:{en:"press",ja:"上槽",zh:"上槽"}
            };
            function t(k){ return L(w[k]); }
            var X0=70, X1=650, Y0=40, Y1=230;
            function px(d){ return X0 + (d/34)*(X1-X0); }
            function py(v){ return Y1 - (v/20)*(Y1-Y0); }
            var alc=[[0,0],[4,3],[7,7],[10,10],[14,13],[18,15],[22,16.4],[26,17.2],[30,17.8],[33,18]];
            var bme=[[0,0],[1,11],[4,10],[7,8.5],[10,7],[14,5],[18,3.5],[22,2.4],[26,1.6],[30,1.0],[33,0.7]];
            var tmp=[[0,12],[1,13],[3,10],[4,8],[6,7],[9,8],[12,9.5],[16,10.5],[20,11],[24,11.5],[28,11],[33,10]];
            function path(pts){ var s=""; for(var i=0;i<pts.length;i++){ s += (i?" L":"M")+px(pts[i][0]).toFixed(1)+" "+py(pts[i][1]).toFixed(1);} return s; }
            var s='<svg viewBox="0 0 760 290" role="img" aria-label="Fermentation curve">';
            s+='<rect x="0.5" y="0.5" width="759" height="289" fill="none" stroke="#DFDAD0"/>';
            for(var g=0; g<=20; g+=5){
              s+='<line x1="'+X0+'" y1="'+py(g)+'" x2="'+X1+'" y2="'+py(g)+'" stroke="#E1DCD2" stroke-width="1"/>';
              s+='<text x="'+(X0-8)+'" y="'+(py(g)+4)+'" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" fill="#ADA79E">'+g+'</text>';
            }
            for(var dd=0; dd<=30; dd+=10){
              s+='<text x="'+px(dd)+'" y="'+(Y1+18)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#ADA79E">'+dd+'</text>';
            }
            s+='<rect x="'+px(0)+'" y="'+Y0+'" width="'+(px(4)-px(0))+'" height="'+(Y1-Y0)+'" fill="#EDE5D2" opacity="0.55"/>';
            s+='<text x="'+px(2)+'" y="'+(Y0-8)+'" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#8B857C" letter-spacing="1">'+t("add")+'</text>';
            s+='<line x1="'+px(33)+'" y1="'+Y0+'" x2="'+px(33)+'" y2="'+Y1+'" stroke="#B4AC9C" stroke-dasharray="3 3"/>';
            s+='<text x="'+(px(33)+6)+'" y="'+(Y0+10)+'" font-family="system-ui,sans-serif" font-size="10" fill="#55504A">'+t("press")+'</text>';
            s+='<path d="'+path(alc)+'" fill="none" stroke="#7C6B52" stroke-width="1.8"/>';
            s+='<path d="'+path(bme)+'" fill="none" stroke="#55504A" stroke-width="1.4" stroke-dasharray="5 3"/>';
            s+='<path d="'+path(tmp)+'" fill="none" stroke="#8B857C" stroke-width="1.4" stroke-dasharray="1.5 3"/>';
            s+='<text x="'+(px(33)+6)+'" y="'+(py(18)+4)+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#7C6B52">'+t("alc")+'</text>';
            s+='<text x="'+(px(33)+6)+'" y="'+(py(1.0)+4)+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#55504A">'+t("bme")+'</text>';
            s+='<text x="'+(px(33)+6)+'" y="'+(py(10)+4)+'" font-family="system-ui,sans-serif" font-size="10.5" fill="#8B857C">'+t("tmp")+'</text>';
            s+='<text x="'+X0+'" y="'+(Y1+40)+'" font-family="system-ui,sans-serif" font-size="10" fill="#ADA79E" letter-spacing="1.4">'+t("day").toUpperCase()+'</text>';
            s+='</svg>';
            return s;
          }
        },
        { t:"h3", text:{en:"Running the mash",ja:"醪の管理",zh:"醪的管理"} },
        { t:"defs", items:[
          { term:{en:"Stirring",ja:"櫂入れ",zh:"櫂入"}, jp:"櫂入れ", romaji:"kai-ire",
            def:{en:"A long wooden paddle is worked through the mash to break the cap of rice and CO₂, even out temperature, and keep yeast in suspension. Frequency falls as fermentation slows. Overdoing it strips aroma and bruises the mash.",ja:"長い櫂棒を醪に通し、米と炭酸の層を崩し、温度を均一にし、酵母を懸濁させておく。発酵が緩むにつれ回数を減らす。過度に行えば香りが飛び、醪を傷める。",zh:"以長木槳攪動醪，打散米與二氧化碳形成的浮層、均勻溫度並使酵母保持懸浮。發酵趨緩後次數遞減。過度攪動會逸散香氣並損傷醪。"} },
          { term:{en:"Temperature control",ja:"品温管理",zh:"品溫管理"}, jp:"品温", romaji:"hin'on",
            def:{en:"The single most consequential variable. Ordinary sake ferments at 15–18 °C for 18–22 days; ginjō at 8–12 °C for 30–40 days. Cold fermentation preserves volatile esters, restrains the yeast so it produces cleaner by-products, and lets sugar and alcohol rise in step. It is also expensive, slow and easy to lose.",ja:"最も影響の大きい単一の変数。普通の酒は15〜18℃で18〜22日、吟醸は8〜12℃で30〜40日。低温発酵は揮発性エステルを保ち、酵母を抑制して副生成物を清らかにし、糖とアルコールを歩調を合わせて進ませる。同時に高くつき、遅く、失いやすい。",zh:"最具影響力的單一變數。一般酒於 15–18°C 發酵 18–22 天；吟釀則於 8–12°C 發酵 30–40 天。低溫發酵保留揮發性酯類、抑制酵母使副產物更潔淨，並讓糖與酒精同步變化。同時它昂貴、緩慢且容易失手。"} },
          { term:{en:"Reading the mash",ja:"醪の分析",zh:"醪的判讀"}, jp:"ボーメ・日本酒度・アルコール分",
            def:{en:"A sample is drawn daily. Baumé — a density reading roughly equal to residual sugar — falls from about 11 to under 1; alcohol climbs to 17–19%. The two curves crossing at the right shape is what a brewer means by a good ferment. Sake meter value is simply baumé multiplied by −10.",ja:"毎日サンプルを取る。ボーメ——残糖にほぼ比例する比重の読み値——は約11から1未満へ下がり、アルコールは17〜19%へ上がる。この二本の曲線が正しい形で交わることを、蔵人は良い発酵と呼ぶ。日本酒度はボーメに−10を掛けたものにすぎない。",zh:"每日取樣分析。波美度——大致與殘糖成正比的比重讀數——自約 11 降至 1 以下，酒精則升至 17–19%。這兩條曲線以正確的形狀交會，就是釀造者所謂的好發酵。日本酒度不過是波美度乘以 −10。"} },
          { term:{en:"Deciding to stop",ja:"上槽の判断",zh:"上槽的判斷"}, jp:"上槽の見極め",
            def:{en:"There is no automatic endpoint. The brewer chooses a day, balancing residual sugar against alcohol, acidity against aroma, and knowing that pressing a day early or a day late produces a measurably different sake. This is the decision that most clearly separates breweries from one another.",ja:"自動的な終点は存在しない。残糖とアルコール、酸と香りを秤にかけ、一日早ければ、一日遅ければ、測定できるほど違う酒になると知ったうえで、造り手が日を選ぶ。蔵と蔵とを最も明瞭に分けるのは、この判断である。",zh:"沒有自動的終點。釀造者權衡殘糖與酒精、酸度與香氣，並明白早一天或晚一天上槽會產出可測量差異的酒，然後選定日子。這正是最能清楚區分各家酒藏的決斷。"} }
        ] },
        { t:"panel", tint:"water", title:{en:"Why the alcohol goes so high",ja:"アルコールが高くなる理由",zh:"酒精何以如此之高"}, body:[
          { t:"p", text:{
            en:"A sake mash reaches 18–20% alcohol without fortification — higher than any other naturally fermented drink. The reason is parallel fermentation. In wine, all the sugar is present from the start, so the yeast faces high osmotic pressure at the beginning and high ethanol at the end. In sake, glucose is released only as fast as the yeast consumes it, so the sugar concentration stays low throughout and the yeast is never osmotically stressed. It meets only one hostile condition instead of two, and can therefore go further.",
            ja:"清酒の醪は補強なしで18〜20%に達する——自然発酵する飲み物として他に例がない。理由は並行複発酵にある。ワインでは糖が最初からすべて存在するため、酵母は初めに高い浸透圧を、終わりに高いエタノールを受ける。日本酒ではブドウ糖が酵母の消費速度に見合ってのみ供給されるため、糖濃度は終始低く保たれ、酵母が浸透圧のストレスを受けることがない。二つではなく一つの過酷な条件にしか出会わないから、より遠くまで行ける。",
            zh:"清酒的醪未經強化即可達到 18–20% 酒精，高於任何其他自然發酵飲品。原因在於並行複發酵。葡萄酒的糖分一開始便全數存在，酵母因而先承受高滲透壓、後承受高乙醇。日本酒則是葡萄糖依酵母消耗的速度逐步釋出，糖濃度全程維持低檔，酵母從不承受滲透壓逆境。它只需面對一項而非兩項惡劣條件，因此能走得更遠。" } }
        ] }
      ]
    },

    { t:"section", id:"after",
      title:{ en:"After the mash", ja:"上槽以降", zh:"上槽之後" }, jp:"上槽・調整",
      body:[
        { t:"p", text:{
          en:"Pressing, settling, filtration, pasteurisation, maturation, blending, dilution and bottling are set out in detail in <a href=\"pressing.html\">Pressing &amp; Finishing</a>. In outline: the mash is separated into sake and lees; the sake is left to drop its fine sediment; it may or may not be carbon-filtered; it is heated to about 65 °C to kill enzymes and bacteria; it rests for around six months; it is cut with water from roughly 18% to 15–16%; and it is heated again on the way into the bottle.",
          ja:"上槽・滓引き・濾過・火入れ・熟成・調合・割水・瓶詰については<a href=\"pressing.html\">上槽と調整</a>で詳述する。概略はこうである——醪を酒と粕に分け、酒を静置して澱を落とし、活性炭で濾過する場合としない場合があり、約65℃に加熱して酵素と細菌を止め、半年ほど寝かせ、およそ18%から15〜16%へ加水し、瓶詰の途中でもう一度加熱する。",
          zh:"上槽、澱引、過濾、火入、熟成、調和、割水與裝瓶，詳見<a href=\"pressing.html\">上槽與調整</a>。概略如下：將醪分離為酒與酒粕；靜置使細澱沉降；視情況決定是否以活性碳過濾；加熱至約 65°C 以終止酵素與細菌；靜置約半年；以水自約 18% 稀釋至 15–16%；並在裝瓶途中再加熱一次。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Pressing", ja:"上槽", zh:"上槽" }, jp:"上槽", romaji:"jōsō", meta:{ en:"day 0", ja:"当日", zh:"當日" },
            text:{ en:"The mash is separated into clear sake and pressed lees. Method matters: an accordion press for volume, a boat press for gentleness, a hanging bag for competition sake. The fraction taken changes with the run — the cloudy first, the clear middle, the hard last.",
              ja:"醪は澄んだ酒と搾られた粕とに分けられる。方法が効く。量には自動圧搾機、優しさには槽、鑑評会の酒には袋吊りである。取る画は流れとともに変わる——濁った初め、澄んだ中、硬い終わりである。",
              zh:"醪被分離為澄清的酒與壓榨後的酒粕。方法很重要：講求產量用手風琴式壓榨機，講求輕柔用槽壓，鑑評會用酒則用吊袋。所取的餾分隨流程而變——混濁的最初、澄澈的中段、強硬的最後。" } },
          { n:2, title:{ en:"Settling", ja:"滓引き", zh:"澱引" }, jp:"滓引き", romaji:"origarami", meta:{ en:"3–10 days", ja:"三〜十日", zh:"3–10 天" },
            text:{ en:"Fresh sake is cloudy with fine rice and yeast solids. Left cold and still, they fall; the clear sake is drawn off the top. Bottled before this step, or with the sediment deliberately stirred back, it is <em>orizake</em>.",
              ja:"搾りたての酒は細かな米と酵母の固形分で濁っている。冷たく静かに置けばそれらは沈み、澄んだ酒を上から引く。この工程の前に、あるいは澱を意図して戻して瓶詰すれば、それが澱酒である。",
              zh:"新榨的酒因細微的米質與酵母固形物而混濁。置於低溫靜置，它們會沉降，澄清的酒自上層取出。若在此步驟之前裝瓶，或刻意把沉澱攪回，那就是「澱酒」。" } },
          { n:3, title:{ en:"Filtration", ja:"濾過", zh:"過濾" }, jp:"濾過", romaji:"roka", meta:{ en:"optional", ja:"任意", zh:"視情況" },
            text:{ en:"Powdered activated carbon strips colour, rough aromas and some flavour with it; a paper or membrane pass removes particles only. Sake labelled <em>muroka</em> has skipped the carbon, not the whole step, and is usually faintly gold rather than water-white.",
              ja:"粉末の活性炭は色と粗い香りを、いくらかの味とともに奪う。紙や膜を通すのは粒子のみを除く。無濾過と札に書く酒は炭を省いたのであって工程の全体を省いたのではなく、たいてい水のように白いのではなくかすかに金色である。",
              zh:"粉末活性碳會帶走顏色、粗糙的香氣，連同部分風味；而紙質或薄膜過濾只除去顆粒。標示「無濾過」的酒省略的是活性碳，而非整個步驟，因此通常呈淡淡的金色而非清水般的無色。" } },
          { n:4, title:{ en:"First pasteurisation", ja:"火入れ", zh:"火入" }, jp:"火入れ", romaji:"hiire", meta:{ en:"about 65 °C", ja:"約65℃", zh:"約 65°C" },
            text:{ en:"A brief heating that kills lactic spoilage bacteria and denatures the kōji enzymes, freezing the sake's chemistry in place. Skip it and the sake is <em>namazake</em>: livelier, more fragile, and requiring refrigeration from that moment until the glass.",
              ja:"火落菌を殺し麹の酵素を失活させ、酒の化学をその場に凍らせる短い加熱である。これを省けば生酒となる。より生き生きとし、より脆く、その時から杯に至るまで冷蔵を要する。",
              zh:"短暫加熱，殺死造成腐敗的乳酸菌並使麴的酵素失活，把酒的化學狀態凍結在當下。若省略，便是生酒：更有生氣、更脆弱，並且從那一刻起直到入杯都需要冷藏。" } },
          { n:5, title:{ en:"Maturation", ja:"貯蔵", zh:"貯藏" }, jp:"貯蔵", romaji:"chozō", meta:{ en:"3–12 months", ja:"三〜十二か月", zh:"3–12 個月" },
            text:{ en:"Tank rest, usually through a summer. Harshness settles, the parts integrate, and the sake stops tasting like a new thing. Most sake is a year old when you drink it and does not say so.",
              ja:"槽での休みであり、たいてい一夏を越す。荒さが落ち着き、部分が統べられ、酒は新しい物の味をやめる。ほとんどの酒は飲むとき一歳であり、そうとは書かれていない。",
              zh:"在槽中的靜置，通常會跨過一個夏天。刺激感沉澱下來，各個部分整合起來，酒不再嚐起來像一件新東西。多數清酒在你喝到它時已有一歲，而標籤上不會這麼寫。" } },
          { n:6, title:{ en:"Blending and dilution", ja:"調合・割水", zh:"調和與割水" }, jp:"調合・割水", romaji:"chōgō, warimizu", meta:{ en:"18% → 15–16%", ja:"18%→15〜16%", zh:"18% → 15–16%" },
            text:{ en:"Tanks are blended to a house profile, then cut with water to drinking strength. Sake bottled without this cut is <em>genshu</em>. The water used is the same brewing water, and the cut is as much a flavour decision as a strength one.",
              ja:"槽は蔵の型へと調合され、ついで飲むべき度数へ加水される。この加水を経ずに瓶詰した酒が原酒である。用いる水は同じ仕込水であり、加水は度数の決定であると同じだけ味の決定でもある。",
              zh:"各槽先調和成酒藏的風格輪廓，再以水稀釋至適飲的酒精度。未經此稀釋即裝瓶的酒就是原酒。所用的水就是同一批仕込水，而這道稀釋既是酒精度的決定，也同樣是風味的決定。" } },
          { n:7, title:{ en:"Bottling", ja:"瓶詰", zh:"裝瓶" }, jp:"瓶詰・二度目の火入れ", romaji:"binzume", meta:{ en:"second heating", ja:"二度目の火入れ", zh:"第二次火入" },
            text:{ en:"Most sake is heated a second time on the way into the bottle, or in the bottle immediately after filling. One heating instead of two, at either end, produces the <em>namachozō</em> and <em>namazume</em> categories that confuse everyone.",
              ja:"ほとんどの酒は瓶へ入る途中で、あるいは詰めた直後に瓶の中で、二度目の加熱を受ける。二度ではなく一度を、どちらかの端で行うことが、皆を惑わせる生貯蔵と生詰の区分を生む。",
              zh:"多數清酒在進入酒瓶的途中、或在裝填後立即於瓶中，接受第二次加熱。若只在其中一端加熱一次而非兩次，就產生了讓所有人困惑的「生貯藏」與「生詰」分類。" } }
        ] }
      ]
    },

    { t:"section", id:"foam",
      title:{ en:"Reading the mash by eye", ja:"目で醪を読む", zh:"以眼判讀醪" }, jp:"泡の変化",
      body:[
        { t:"p", text:{
          en:"Long before hydrometers and thermometers, brewers read a fermentation by the foam on its surface. The sequence is reliable enough that it still has a full technical vocabulary, and old brewers can still date a tank to within a day by looking at it. The foam is carbon dioxide held by proteins and by the rice solids; its texture changes as the mash thins and the yeast population peaks and falls.",
          ja:"浮秤や寒暖計のはるか以前、造り手は表面の泡によって発酵を読んだ。その順序は今なお完全な技術の語彙を持つほど確かであり、古い造り手は今も見るだけで一日の内に槽の日を言い当てる。泡は蛋白質と米の固形分に抱えられた炭酸ガスであり、醪が薄まり酵母の数が頂に達して落ちるにつれて、その質感が変わる。",
          zh:"遠在比重計與溫度計之前，釀造者是靠液面上的泡沫來判讀發酵的。這個順序可靠到至今仍有一整套完整的技術語彙，而老釀造者只要看一眼，仍能把一缸酒的日期說到一天之內。泡沫是被蛋白質與米固形物撐住的二氧化碳；隨著醪變稀、酵母族群達到高峰又下降，它的質地也隨之改變。" } },
        { t:"table",
          caption:{ en:"The classical foam sequence, counted from the third addition", ja:"留添からの日で数える、古典的な泡の変化", zh:"自留添起算的古典泡沫序列" },
          cols:[{ en:"Name", ja:"名", zh:"名稱" }, { en:"Kanji", ja:"漢字", zh:"漢字" }, { en:"Roughly", ja:"およその日", zh:"大約時間" }, { en:"What it looks like, and what it means", ja:"見え方と意味", zh:"外觀與意義" }],
          keyCol:0,
          rows:[
            [{ en:"Streak foam", ja:"筋泡", zh:"筋泡" }, "筋泡", { en:"day 1–2", ja:"一〜二日目", zh:"第 1–2 天" },
             { en:"Thin lines of bubbles tracking across an otherwise still surface. Fermentation has begun but is not yet general; the yeast is still multiplying.", ja:"他は静かな表面を横切る、細い泡の筋である。発酵は始まったがまだ全体には及ばず、酵母はなお増えている。", zh:"在原本平靜的液面上出現細細的氣泡線條。發酵已經開始但尚未全面展開，酵母仍在增殖。" }],
            [{ en:"Water foam", ja:"水泡", zh:"水泡" }, "水泡", { en:"day 2–3", ja:"二〜三日目", zh:"第 2–3 天" },
             { en:"A thin, watery, even layer spreading over the whole surface. Gas production is now continuous.", ja:"薄く水っぽい均一な層が表面の全体に広がる。ガスの生成はもはや絶え間ない。", zh:"薄薄的、含水的均勻泡層鋪滿整個液面。氣體生成已轉為持續不斷。" }],
            [{ en:"Rock foam", ja:"岩泡", zh:"岩泡" }, "岩泡", { en:"day 3–5", ja:"三〜五日目", zh:"第 3–5 天" },
             { en:"Thick, uneven, lumpy, standing in ridges like rock. The mash is now vigorous and the surface is being pushed up from below.", ja:"厚く、不揃いで、塊状であり、岩のように稜を立てる。醪は今や勢いを得て、表面は下から押し上げられている。", zh:"厚實、不勻、成塊，像岩石一樣立起稜脊。醪此時正旺盛，液面被由下往上頂起。" }],
            [{ en:"High foam", ja:"高泡", zh:"高泡" }, "高泡", { en:"day 5–9", ja:"五〜九日目", zh:"第 5–9 天" },
             { en:"The peak. Foam rises tens of centimetres above the liquid and can climb out of the tank. A foam collar is fitted, and in the old breweries someone sat up at night to watch it. This is the point of maximum yeast activity and maximum heat.", ja:"頂である。泡は液面より数十センチも立ち上がり、槽から溢れ出ることもある。泡笠を掛け、古い蔵では誰かが夜通し見張った。酵母の活動と発熱の最も盛んな点である。", zh:"高峰。泡沫可高出液面數十公分，甚至能爬出酒槽。此時要加上泡笠，而在舊時的酒藏裡，會有人整夜守著看顧。這是酵母活性與發熱量都最大的時刻。" }],
            [{ en:"Falling foam", ja:"落泡", zh:"落泡" }, "落泡", { en:"day 9–12", ja:"九〜十二日目", zh:"第 9–12 天" },
             { en:"The column collapses back towards the liquid. Sugar is being consumed faster than the kōji can replace it, and the mash begins to thin.", ja:"泡の柱が液面へ向かって崩れる。糖は麹が補いうるより速く消費され、醪は薄まり始める。", zh:"泡柱朝液面塌落。糖被消耗的速度快過麴補充的速度，醪開始變稀。" }],
            [{ en:"Bead foam", ja:"玉泡", zh:"玉泡" }, "玉泡", { en:"day 12–16", ja:"十二〜十六日目", zh:"第 12–16 天" },
             { en:"Discrete round bubbles sitting on a mostly flat surface, like beads. Fermentation is steady and declining.", ja:"ほぼ平らな表面に、玉のような丸い泡が離れて浮かぶ。発酵は安定し、そして衰えつつある。", zh:"在大致平坦的液面上，散落著一顆顆圓形氣泡，如珠玉一般。發酵穩定，並正在衰退。" }],
            [{ en:"Bare ground", ja:"地・坊主", zh:"地・坊主" }, "地", { en:"day 16 onward", ja:"十六日目以降", zh:"第 16 天以後" },
             { en:"The surface goes flat and glossy, with a thin skin of dissolved rice. The mash is close to finished; from here the brewer is choosing when to press, not what to do next.", ja:"表面は平らに、艶やかになり、溶けた米の薄い膜を張る。醪は終わりに近い。ここから先、造り手が選ぶのは次に何をするかではなく、いつ搾るかである。", zh:"液面轉為平坦而有光澤，覆著一層溶解米質的薄膜。醪已接近完成；從此刻起，釀造者要選擇的不是下一步做什麼，而是何時壓榨。" }]
          ] },
        { t:"panel", tint:"yeast",
          title:{ en:"The yeasts that stopped foaming", ja:"泡を立てなくなった酵母", zh:"不再起泡的酵母" },
          body:[
            { t:"p", text:{
              en:"High foam is not free. It occupies as much as a fifth of the tank, it has to be watched so it does not overflow, and it carries yeast cells up out of the liquid where they cannot work. In the 1960s researchers isolated non-foaming mutants of the standard Association yeasts — cells whose surface no longer binds to the rising gas bubbles — and these were released with a <em>01</em> suffix: No. 601, 701, 901, 1001 and so on, each the quiet twin of a familiar strain.",
              ja:"高泡はただではない。槽の五分の一までを占め、溢れぬよう見張らねばならず、酵母の細胞を働けぬ液の外へと運び上げる。一九六〇年代、研究者は標準の協会酵母の泡なしの変異株を分離した。表面がもはや立ち上がる気泡に結びつかぬ細胞である。それらは末尾に〇一を付して世に出された。六〇一号、七〇一号、九〇一号、一〇〇一号など、いずれも馴染みの株の静かな双子である。",
              zh:"高泡並非沒有代價。它可占去多達五分之一的槽容，必須有人看顧以免溢出，而且會把酵母細胞帶到液面之上——在那裡它們無法工作。一九六〇年代，研究者分離出標準協會酵母的不起泡變異株：這些細胞的表面不再與上升的氣泡結合。它們以「01」為字尾發布：六〇一號、七〇一號、九〇一號、一〇〇一號等等，各是某個熟悉菌株的安靜雙胞胎。" } },
            { t:"p", text:{
              en:"The effect was immediate and entirely practical: tanks could be filled roughly a fifth fuller, the night watch disappeared, and cleaning got easier. The cost is that a mash run on a non-foaming strain no longer tells you what day it is by looking. Most breweries decided that was an acceptable trade, and a generation of brewers has now grown up reading gauges instead of foam.",
              ja:"効果は即座であり、まったく実際的であった。槽はおよそ五分の一多く満たしうるようになり、夜の見張りは消え、洗いは楽になった。代償は、泡なしの株で走る醪が、見るだけでは今日が何日目かをもはや教えぬことである。ほとんどの蔵はそれを受け入れうる取引と判じ、いまや一世代の造り手が、泡ではなく計器を読んで育っている。",
              zh:"效果立竿見影，而且完全務實：槽可以多裝約五分之一、夜間看顧消失了、清洗也變得更容易。代價則是：使用不起泡菌株的醪，不再能只憑肉眼告訴你今天是第幾天。多數酒藏認為這是可以接受的交換，而如今已有一整個世代的釀造者，是看著儀表而非泡沫長大的。" } }
          ] },
        { t:"tiny", text:{
          en:"The foam vocabulary is one of the reasons old brewing manuals are readable at all: they describe a process with no instruments in it, using words for things anyone standing at the tank could see.",
          ja:"泡の語彙は、古い酒造りの書がそもそも読めることの理由の一つである。それらは、槽の傍に立つ誰もが見うるものの語をもって、器具を一つも用いぬ工程を記している。",
          zh:"泡沫的語彙，是舊時釀造手冊之所以還讀得懂的理由之一：它們用任何站在槽邊的人都看得見的事物之名，來描述一個完全沒有儀器介入的過程。" } }
      ] },

{ t:"section", id:"analysis",
      title:{ en:"Reading the mash by numbers", ja:"数値で醪を読む", zh:"以數字判讀醪" }, jp:"醪の管理",
      body:[
        { t:"p", text:{
          en:"A mash is sampled every day for the whole of its three-to-five weeks, and the numbers are plotted on a chart that hangs beside the tank. A brewer looking at that chart can see the future of the batch several days out, which is the entire point of taking the measurements.",
          ja:"醪は三週間から五週間のあいだ、毎日汲み取られて分析され、その数値はタンクの脇に掛けられた図に描かれる。造り手はその図を見て、数日先の姿を読む。測るという行為の意味は、まさにそこにある。",
          zh:"醪在整整三到五週間每天都會採樣分析，數據被繪成一張掛在酒槽旁的曲線圖。釀造者看著那張圖，就能預見這批酒數日之後的樣子——量測的全部意義正在於此。" } },
        { t:"table",
          cols:[{en:"Measured",ja:"測るもの",zh:"量測項目"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"What it shows",ja:"読み取れること",zh:"顯示什麼"}],
          jpCols:[1],
          rows:[
            [{en:"Mash temperature",ja:"品温",zh:"品溫"},"品温",
             {en:"Taken at several depths. The single most controlled variable: a ginjō mash may be held between 8 and 12°C for a month, and a two-degree rise on the wrong day changes the aroma profile permanently.",ja:"複数の深さで測る。最も厳しく制御される変数である。吟醸の醪は一か月にわたり8度から12度に保たれ、誤った日の二度の上昇が、香りの構成を取り返しなく変える。",zh:"於數個深度測量。這是控制最嚴格的變數：吟釀之醪可能整整一個月維持在 8 至 12°C，而錯誤日子裡上升兩度，就會永久改變香氣輪廓。"}],
            [{en:"Baumé",ja:"ボーメ",zh:"波美度"},"ボーメ",
             {en:"A density reading that falls as sugar is consumed. Brewers plot it daily; the shape of the falling curve is the mash's signature, and the day it flattens is the day to decide about pressing.",ja:"糖が消費されるにつれて下がる比重の値である。造り手は日ごとに描き、その下降曲線の形が醪の署名となる。曲線が平らになる日が、上槽を決める日である。",zh:"隨糖分被消耗而下降的比重讀數。釀造者每日記錄，下降曲線的形狀即是這批醪的簽名；曲線轉平之日，就是決定上槽之日。"}],
            [{en:"Sake meter value",ja:"日本酒度",zh:"日本酒度"},"日本酒度",
             {en:"The same density on the scale used for finished sake. Roughly, Baumé × −10 gives SMV, which is why brewers can switch between the two in conversation without stopping.",ja:"仕上がった酒に用いる尺度で表した同じ比重である。おおむねボーメ×−10が日本酒度にあたり、造り手が会話のなかで両者を止まらずに行き来できるのはそのためである。",zh:"以成酒所用尺度表示的同一比重。大致上，波美度 × −10 即為日本酒度；這正是釀造者能在對話中毫不停頓地在兩者之間切換的原因。"}],
            [{en:"Alcohol",ja:"アルコール分",zh:"酒精度"},"アルコール",
             {en:"Rises from zero to 18–20% over the run. The rate of rise, read against temperature, tells the brewer whether the yeast is comfortable or struggling.",ja:"仕込みのあいだに零から18〜20%まで上がる。その上昇の速さを温度と併せて読むことで、酵母が快適でいるのか苦しんでいるのかが分かる。",zh:"在整個過程中由零升至 18–20%。將上升速率與溫度對照判讀，釀造者便知道酵母是舒適還是掙扎。"}],
            [{en:"Acidity",ja:"酸度",zh:"酸度"},"酸度",
             {en:"Climbs steadily. A sudden jump means bacterial contamination and is the earliest warning a brewer gets that something has gone wrong.",ja:"着実に上がっていく。急な跳ね上がりは細菌汚染を意味し、何かが誤ったことを造り手が受け取る最も早い警告である。",zh:"穩定上升。若突然躍升，即代表細菌污染，也是釀造者所能收到的最早警訊。"}],
            [{en:"Amino acidity",ja:"アミノ酸度",zh:"胺基酸度"},"アミノ酸度",
             {en:"Tracks how much the rice is dissolving. Rising too fast means the mash is breaking down faster than planned and the sake will be heavy.",ja:"米がどれだけ溶けているかを追う値である。上がるのが速すぎれば、醪は予定より速く崩れており、酒は重くなる。",zh:"追蹤米溶解的程度。上升過快代表醪的分解快於計畫，成酒將顯厚重。"}],
            [{en:"Sugar / glucose",ja:"ブドウ糖",zh:"葡萄糖"},"ブドウ糖",
             {en:"The balance between what kōji releases and what yeast consumes. Glucose accumulating means the yeast is slowing; glucose disappearing means the kōji is running out of work to do.",ja:"麹が放出するものと酵母が消費するものとの均衡である。ブドウ糖が溜まれば酵母が鈍っており、消えていけば麹の仕事が尽きつつある。",zh:"麴所釋出者與酵母所消耗者之間的平衡。葡萄糖累積代表酵母正在放慢；葡萄糖消失則代表麴的工作即將做完。"}]
          ] },
        { t:"note", label:{en:"The chart is the brewer's memory",ja:"図は造り手の記憶である",zh:"曲線圖是釀造者的記憶"}, text:{
          en:"Every tank's daily chart is kept, and a brewery accumulates decades of them. When a season goes unusually well or unusually badly, the chart is the only record precise enough to say why. This is what a modern data-driven brewery is doing at scale, and what an experienced tōji has always been doing on paper.",
          ja:"タンクごとの日々の図は保存され、蔵はそれを何十年分も蓄えていく。ある年がとりわけ良く、あるいは悪かったとき、その理由を語れるだけの精度をもつ記録は、この図だけである。現代のデータに基づく蔵が規模をもって行っていること、そして経験を積んだ杜氏がつねに紙の上で行ってきたことは、これである。",
          zh:"每一槽的每日曲線圖都會被保存，一家酒藏會累積數十年份。當某一季特別好或特別壞時，唯有這張圖精確到足以說明原因。現代以數據為本的酒藏所做的規模化之事，正是資深杜氏一直以來在紙上所做的事。" } }
      ]
    },

    { t:"section", id:"problems",
      title:{ en:"When a mash goes wrong", ja:"醪が崩れるとき", zh:"當醪出錯時" }, jp:"事故と対処",
      body:[
        { t:"defs", items:[
          { term:{en:"Stuck fermentation",ja:"発酵停止",zh:"發酵停滯"}, jp:"もろみが止まる",
            def:{en:"Yeast stops before the sugar is used up, usually because the mash got too cold, too alcoholic, or ran out of nutrient. Options are limited: warm it very slightly, or accept a sweeter, lower-alcohol sake than intended. A mash cannot be restarted the way a wine can, because there is no easy way to add a fresh yeast population into 18% alcohol.",
              ja:"糖を使い切る前に酵母が止まること。多くは、醪が冷えすぎたか、アルコールが上がりすぎたか、栄養が尽きたためである。打つ手は限られる。ごくわずかに温めるか、意図より甘くアルコールの低い酒として受け入れるかである。ワインのように再発酵させることはできない。18%のアルコールのなかへ新しい酵母を入れる容易な方法がないからである。",
              zh:"酵母在糖用盡前停止，多半是因為醪太冷、酒精太高，或養分耗盡。可行選項有限：極輕微地升溫，或接受一款比預期更甜、酒精更低的酒。醪無法像葡萄酒那樣重新啟動，因為沒有簡便的方法把新的酵母族群送進 18% 的酒精之中。"} },
          { term:{en:"Over-dissolution",ja:"溶けすぎ",zh:"過度溶解"}, jp:"溶け過ぎ",
            def:{en:"The rice breaks down faster than planned — usually from over-soaking, over-steaming, or a warm mash — and the sake ends up heavy, high in amino acids and coarse. Almost impossible to correct once it has happened, which is why so much attention goes into the soaking clock.",
              ja:"米が予定より速く崩れること。多くは浸漬のしすぎ、蒸しすぎ、あるいは温かい醪による。酒は重く、アミノ酸が多く、粗くなる。ひとたび起きれば正すことはほぼ不可能であり、浸漬の時計にあれほどの注意が払われる理由がここにある。",
              zh:"米的分解快於計畫——多因浸漬過久、蒸得過頭，或醪溫偏高——成酒因而厚重、胺基酸偏高且粗糙。一旦發生幾乎無法補救，這正是浸漬計時受到如此高度重視的原因。"} },
          { term:{en:"Temperature runaway",ja:"温度の暴走",zh:"溫度失控"}, jp:"過発酵",
            def:{en:"Fermentation is exothermic, and a large mash generates enough heat to accelerate itself. Left alone it spirals: warmer means faster means warmer. Cooling coils, jackets and in extreme cases ice are the answer, and this is the failure mode that made brewing a winter trade for four hundred years.",
              ja:"発酵は発熱を伴い、大きな醪は自らを加速させるだけの熱を生む。放っておけば螺旋を描く——温かければ速く、速ければさらに温かい。冷却管やジャケット、極端な場合には氷が答えである。酒造りが四百年にわたり冬の仕事であったのは、この破綻の型のためである。",
              zh:"發酵會放熱，而大槽的醪產生的熱足以讓自己加速。放任不管便會失控盤旋：越暖越快，越快越暖。冷卻盤管、夾層，極端情況下用冰，就是答案。正是這種失效模式，讓釀酒在四百年間成為冬季的行業。"} },
          { term:{en:"Contamination",ja:"腐造",zh:"腐造"}, jp:"腐造",
            def:{en:"Lactic or acetic bacteria overwhelming the mash, showing first as a sudden rise in acidity and then as an unmistakable smell. Historically this destroyed whole seasons and ended careers; the sokujō starter, pasteurisation and modern cleaning have made it rare enough that most brewers have never seen a serious case.",
              ja:"乳酸菌や酢酸菌が醪を制圧すること。まず酸度の急な上昇として、次いで紛れもない臭いとして現れる。歴史的にはこれが一季を丸ごと滅ぼし、職歴を終わらせた。速醸酛、火入れ、そして現代の洗浄によって、いまではまれとなり、深刻な例を見たことのない造り手がほとんどである。",
              zh:"乳酸菌或醋酸菌壓制整槽醪，先表現為酸度驟升，接著是無可誤認的氣味。歷史上這會毀掉整整一季並終結職涯；速釀酛、火入與現代清洗使它罕見到多數釀造者從未見過嚴重案例。"} }
        ] },
        { t:"p", text:{
          en:"What is worth noticing is how few of these can be fixed. A sake mash is a single, unrepeatable event of three to five weeks, and almost every decision inside it is irreversible. The brewer's skill is therefore less about intervention than about setting conditions so precisely at the start that intervention is never needed — which is a description of most Japanese craft.",
          ja:"注目に値するのは、これらのうち直せるものがいかに少ないかである。清酒の醪は三週間から五週間の、一度きりで繰り返しのきかない出来事であり、そのなかのほとんどすべての判断は取り返しがつかない。したがって造り手の技とは、介入することよりも、介入が要らないほど精密に初めの条件を定めることにある。それは日本の手仕事の多くについての記述でもある。",
          zh:"值得注意的是，其中能夠補救的有多麼少。清酒的醪是一場三到五週、一次性且無法重來的事件，其中幾乎每一個決定都不可逆。因此釀造者的技藝，與其說在於介入，不如說在於一開始就把條件設定得精確到根本不需要介入——而這也正是對日本多數手藝的描述。" } }
      ]
    },

    { t:"related", items:[
      { href:"starters.html", why:{ en:"The two weeks before the thirty days begin.", ja:"三十日が始まる前の二週間。", zh:"三十天開始之前的那兩個星期。" } },
      { href:"batch.html", why:{ en:"The same process expressed entirely as ratios.", ja:"同じ工程を、すべて歩合として表す。", zh:"同一道工序，完全用比例來表達。" } },
      { href:"equipment.html", why:{ en:"The tools each step is carried out with.", ja:"各段が行われる道具。", zh:"每一步所使用的工具。" } },
      { href:"pressing.html", why:{ en:"What happens after the mash is finished.", ja:"醪が終わったのちに起きること。", zh:"醪結束之後發生的事。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- starters */
SAKE.pages["starters"] = {
  kicker: { en: "Making · 09", ja: "造り · 09", zh: "釀造 · 09" },
  title:  { en: "Starter Methods", ja: "酒母の型", zh: "酒母工法" },
  jp: "酛 · shubo",
  lede: {
    en: "Every starter method in the history of sake answers one question: how do you make the mash acidic enough to exclude spoilage organisms <em>before</em> the yeast has produced any alcohol? For the first days a starter is warm, wet, sugary and defenceless. The four methods below are four different bargains between speed, risk and character.",
    ja: "日本酒史上のあらゆる酒母法は、一つの問いに答えている——酵母がまだアルコールを生成していない段階で、いかにして醪を雑菌が生きられないほど酸性にするか。最初の数日、酒母は温かく、湿り、糖に富み、無防備である。以下の四つの方法は、速さ・危険・個性のあいだで結ばれた四つの異なる取引である。",
    zh: "日本酒史上每一種酒母工法都在回答同一個問題：在酵母尚未產生任何酒精<em>之前</em>，如何讓醪酸到足以排除腐敗菌？最初幾天，酒母溫暖、潮濕、含糖且毫無防禦。以下四種方法，是速度、風險與個性之間的四筆不同交易。"
  },
  body: [
    { t:"section", id:"compare",
      title:{ en:"The four methods at a glance", ja:"四法の対照", zh:"四法對照" }, jp:"比較",
      body:[
        { t:"table",
          cols:[{en:"Method",ja:"方法",zh:"工法"},{en:"Acid from",ja:"酸の由来",zh:"酸的來源"},{en:"Days",ja:"日数",zh:"天數"},{en:"Share of production",ja:"生産に占める割合",zh:"產量占比"},{en:"Signature",ja:"特徴",zh:"特徵"}],
          jpCols:[], numCols:[2],
          rows:[
            [{en:"Sokujō",ja:"速醸酛",zh:"速釀酛"},{en:"added food-grade lactic acid",ja:"食品用乳酸の添加",zh:"添加食品級乳酸"},"14",{en:"≈ 90%",ja:"約90%",zh:"約 90%"},
             {en:"Clean, predictable, aroma-forward. The default, and the only realistic method for aromatic daiginjō.",ja:"清く、予測可能で、香りが前に出る。標準であり、香り高い大吟醸には事実上これしかない。",zh:"潔淨、可預測、香氣前傾。是標準作法，也是芳香型大吟釀唯一實際可行的方法。"}],
            [{en:"Kimoto",ja:"生酛",zh:"生酛"},{en:"ambient lactic acid bacteria",ja:"環境中の乳酸菌",zh:"環境中的乳酸菌"},"28–35",{en:"≈ 1%",ja:"約1%",zh:"約 1%"},
             {en:"Dense, savoury, high acid, structured. Ages well and warms well.",ja:"密度が高く、滋味に富み、酸が強く、骨格がある。熟成にも燗にも耐える。",zh:"濃密、鮮味厚實、酸度高、結構分明。耐陳年，也耐溫熱。"}],
            [{en:"Yamahai",ja:"山廃酛",zh:"山廢酛"},{en:"ambient lactic acid bacteria",ja:"環境中の乳酸菌",zh:"環境中的乳酸菌"},"28–35",{en:"≈ 3–5%",ja:"約3〜5%",zh:"約 3–5%"},
             {en:"As kimoto but often wilder and more angular — more lactic tang, more of the barnyard-and-nut register.",ja:"生酛と同系だが、より野性的で角がある——乳酸的な酸味が強く、干し草や木の実の音域が広い。",zh:"與生酛同系，但常更野性、更有稜角——乳酸感更強，帶更多乾草與堅果的音域。"}],
            [{en:"Bodaimoto",ja:"菩提酛",zh:"菩提酛"},{en:"pre-soured water (soyashi-mizu)",ja:"そやし水",zh:"預先酸化的そやし水"},"10–20",{en:"≪ 1%",ja:"1%未満",zh:"不足 1%"},
             {en:"Sharp, wild, faintly yoghurt-like acidity over a broad savoury base. Revived from a medieval method; still rare.",ja:"鋭く野性的で、かすかにヨーグルトを思わせる酸が、広い滋味の上に乗る。中世の技法の復元であり、なお稀である。",zh:"銳利、野性、帶些許優格般的酸度，架於寬闊的旨味基底之上。自中世紀工法復原，至今仍屬罕見。"}]
          ] }
      ]
    },

    { t:"section", id:"sokujo",
      title:{ en:"Sokujō — the fast starter", ja:"速醸酛", zh:"速釀酛" }, jp:"速醸酛 · 1910",
      body:[
        { t:"p", text:{
          en:"Eda Kamajirō's 1910 proposal was disarmingly simple: instead of waiting two weeks for bacteria to make lactic acid, add lactic acid. About 5 mL of 75% food-grade lactic acid per 100 kg of rice brings the pH straight down to where it needs to be. Yeast is pitched immediately, into an environment that is already safe.",
          ja:"一九一〇年の江田鎌治郎の提案は、拍子抜けするほど単純である——乳酸菌が二週間かけて乳酸を作るのを待つ代わりに、乳酸を加えればよい。米百キログラムあたり75%食品用乳酸を約5ミリリットル加えれば、pHは必要な水準まで直ちに下がる。酵母はただちに添加され、すでに安全な環境で立ち上がる。",
          zh:"江田鎌治郎於 1910 年提出的方案簡單得令人意外：與其等乳酸菌花兩週製造乳酸，不如直接加入乳酸。每 100 公斤米約加入 5 毫升 75% 食品級乳酸，即可讓 pH 立刻降到所需水準。酵母隨即投入一個已然安全的環境。" } },
        { t:"steps", items:[
          { title:{en:"Water, lactic acid, kōji",ja:"仕込み水・乳酸・麹",zh:"仕込水、乳酸、麴"},
            meta:{en:"day 1",ja:"一日目",zh:"第 1 日"},
            text:{en:"Water is measured into the starter tub, lactic acid is stirred in, then kōji, and the mixture is left a few hours for the enzymes to begin dissolving.",ja:"酒母タンクに水を量り入れ、乳酸を溶かし込み、麹を加えて数時間置き、酵素の働きを始めさせる。",zh:"於酒母桶中量入水，攪入乳酸，再加麴，靜置數小時讓酵素開始作用。"} },
          { title:{en:"Steamed rice and yeast",ja:"蒸米と酵母",zh:"蒸米與酵母"},
            meta:{en:"day 1, evening · 18–20 °C",ja:"一日目夕・18〜20℃",zh:"第 1 日傍晚・18–20°C"},
            text:{en:"Cooled steamed rice goes in, then the pure yeast culture. Temperature is set warm to get the yeast growing fast.",ja:"冷ました蒸米を加え、続いて純粋培養酵母を添加する。酵母を速く増やすため、温度は高めに設定する。",zh:"加入冷卻的蒸米，隨後投入純粹培養酵母。溫度設得偏高，以促使酵母快速增殖。"} },
          { title:{en:"Warming",ja:"暖気操作",zh:"暖氣操作"}, jp:"暖気樽", romaji:"dakidaru",
            meta:{en:"days 2–7 · rising to about 23 °C",ja:"二〜七日目・23℃前後まで上昇",zh:"第 2–7 日・升至約 23°C"},
            text:{en:"The starter is warmed — traditionally by lowering a sealed metal cask of hot water into it — to a peak around 23 °C, where yeast multiplication is fastest, then held.",ja:"酒母を温める——伝統的には湯を詰めた金属製の暖気樽を沈める——ことで、酵母の増殖が最も速い23℃前後まで上げ、そこで保つ。",zh:"為酒母加溫——傳統上是將裝滿熱水的密封金屬桶沉入其中——升至酵母增殖最快的約 23°C，並維持之。"} },
          { title:{en:"Cooling and holding",ja:"冷却と枯らし",zh:"冷卻與靜置"},
            meta:{en:"days 8–14 · down to 8–10 °C",ja:"八〜十四日目・8〜10℃へ",zh:"第 8–14 日・降至 8–10°C"},
            text:{en:"Temperature is brought down to slow the yeast and let alcohol accumulate. By day 14 the starter is around 10–13% alcohol, pH about 3.5, and ready to be extended into the mash.",ja:"温度を下げて酵母を落ち着かせ、アルコールを蓄積させる。十四日目には、アルコール10〜13%、pH3.5前後となり、醪へ育てる準備が整う。",zh:"降溫以減緩酵母活動並累積酒精。至第 14 天，酒母約達 10–13% 酒精、pH 約 3.5，可供擴充為醪。"} }
        ] },
        { t:"note", label:{en:"Variants",ja:"派生",zh:"變體"}, text:{
          en:"<em>Kōon-tōka moto</em> (高温糖化酒母) shortens the process further by holding the rice and kōji at 55–60 °C for several hours first — hot enough to saccharify quickly and to sterilise — then cooling sharply and pitching yeast. It takes about a week. <em>Chūon sokujō</em> sits between the two. Both are industrial refinements of the same logic: remove the window of vulnerability entirely.",
          ja:"高温糖化酒母は、米と麹をまず55〜60℃で数時間保つ——糖化を速く進め、同時に殺菌する温度である——のち急冷して酵母を添加することで、工程をさらに短縮する。所要はおよそ一週間。中温速醸はその中間にあたる。いずれも同じ論理の工業的な洗練である——脆弱な時間帯そのものを消してしまうこと。",
          zh:"高溫糖化酒母進一步縮短流程：先將米與麴保持在 55–60°C 數小時——此溫度既能快速糖化，也能殺菌——再急速降溫並投入酵母，約需一週。中溫速釀則介於兩者之間。兩者都是同一邏輯的工業化精煉：徹底消除脆弱的時間窗口。" } }
      ]
    },

    { t:"section", id:"kimoto",
      title:{ en:"Kimoto — the classical starter", ja:"生酛", zh:"生酛" }, jp:"生酛 · 山卸",
      body:[
        { t:"p", text:{
          en:"Before 1910, this was simply how sake was made. Kimoto invites the microbes rather than excluding them, and manages the sequence in which they arrive. The result is a succession — a small ecological drama played out over a month in a shallow wooden tub, ending with exactly one survivor.",
          ja:"一九一〇年以前、これが単に「酒の造り方」であった。生酛は微生物を排除するのではなく招き入れ、到来の順序を管理する。そこに生じるのは遷移である——浅い木桶のなかでひと月にわたって演じられる小さな生態劇であり、最後に残るのはただ一種である。",
          zh:"1910 年以前，這就是「釀酒的方式」。生酛不排除微生物，而是邀請它們，並管理其到來的順序。由此產生的是一場演替——在淺木桶中歷時一個月上演的微型生態劇，最終只留下唯一的倖存者。" } },
        { t:"steps", items:[
          { title:{en:"Yamaoroshi — grinding the mash",ja:"山卸",zh:"山卸"}, jp:"山卸", romaji:"yamaoroshi",
            meta:{en:"days 1–2 · three sessions, 2–3 hours each, through the night",ja:"一〜二日目・一回二〜三時間を三度、夜を徹して",zh:"第 1–2 日・每次 2–3 小時、共三回，通宵進行"},
            text:{en:"Rice, kōji and water are divided between several shallow tubs (<em>hangiri</em>) and ground to a paste with wooden poles by teams working in rhythm. The purpose is physical: to break the rice open so kōji enzymes can reach the starch at low temperature. The work is done in the coldest hours, at around 7 °C, and the timing songs — <em>motosuri-uta</em> — survive as a documented musical genre.",
                  ja:"米・麹・水を数個の半切に分け、蔵人が拍子を合わせて櫂棒で摺り潰す。目的は物理的なものである——低温下でも麹の酵素がデンプンに届くよう、米を崩すこと。作業は最も寒い時間帯、およそ7℃のなかで行われ、拍子取りの酛摺唄は記録された歌謡の一ジャンルとして残っている。",
                  zh:"將米、麴與水分裝於數個淺木桶（半切）中，藏人合著節奏以木櫂磨成糊狀。目的是物理性的：搗開米粒，使麴菌酵素在低溫下也能接觸澱粉。此工序在最寒冷的時段、約 7°C 下進行，而用以打拍的「酛摺唄」至今仍作為有紀錄的歌謠類型留存。"} },
          { title:{en:"Nitrate-reducing bacteria",ja:"硝酸還元菌",zh:"硝酸還原菌"},
            meta:{en:"days 2–7",ja:"二〜七日目",zh:"第 2–7 日"},
            text:{en:"The first organisms to dominate are nitrate-reducing bacteria from the water and the air. They convert nitrate to nitrite, which is toxic to wild yeasts — an unplanned but essential first line of defence that clears the field before the lactic bacteria arrive.",
                  ja:"最初に優占するのは、水と空気に由来する硝酸還元菌である。硝酸を亜硝酸に変え、この亜硝酸が野生酵母に対して毒性をもつ。計画されたものではないが不可欠な第一の防衛線であり、乳酸菌が現れる前に場を掃除する。",
                  zh:"最先取得優勢的是來自水與空氣的硝酸還原菌。它們把硝酸轉為亞硝酸，而亞硝酸對野生酵母具毒性——這是一道非人為安排卻不可或缺的第一道防線，在乳酸菌到來之前先清場。"} },
          { title:{en:"Lactic acid bacteria",ja:"乳酸菌",zh:"乳酸菌"},
            meta:{en:"days 7–15 · acidity climbing",ja:"七〜十五日目・酸が上昇",zh:"第 7–15 日・酸度攀升"},
            text:{en:"Lactic bacteria — arriving from the kōji, the tools, the air and the building itself — multiply and acidify the mixture, eventually to around 0.5% lactic acid. As pH falls, they poison their own environment and die off, and the nitrite decomposes. The tub is now sterile except for what can live at pH 3.5.",
                  ja:"麹・道具・空気・そして建物そのものから入り込んだ乳酸菌が増殖し、最終的に乳酸0.5%前後まで酸性化する。pHが下がるにつれ、彼ら自身の環境が毒となって死滅し、亜硝酸も分解される。桶のなかは、pH3.5で生きられるもの以外にとって無菌となる。",
                  zh:"自麴、器具、空氣以及建築本身進入的乳酸菌開始繁殖並使混合物酸化，最終達到約 0.5% 乳酸。隨著 pH 下降，它們自身的環境變成毒藥而死去，亞硝酸也分解。此時桶中除了能在 pH 3.5 存活者之外，已近無菌。"} },
          { title:{en:"Yeast takes over",ja:"酵母の優占",zh:"酵母接手"},
            meta:{en:"days 15–30 · warming, then cooling",ja:"十五〜三十日目・昇温、のち冷却",zh:"第 15–30 日・升溫後降溫"},
            text:{en:"Yeast is pitched, or in the most traditional houses simply allowed to arrive from the brewery's own resident population. It now has an uncontested, acidified, enzyme-rich medium. Warming brings it to a peak, then temperature is dropped and alcohol accumulates. The starter finishes at around 30 days.",
                  ja:"酵母を添加する。最も伝統的な蔵では、蔵付きの菌叢から自然に入るに任せる。酵母は今や、競合のない、酸性化された、酵素に富む培地を手にしている。昇温させて増殖の頂点に導き、その後は温度を下げてアルコールを蓄積させる。酒母は三十日ほどで仕上がる。",
                  zh:"投入酵母；最傳統的酒藏則任其自藏內常駐菌群自然進入。此時酵母擁有無人爭奪、已酸化且富含酵素的培養基。升溫使其達到增殖高峰，隨後降溫累積酒精。酒母約於三十天完成。"} }
        ] },
        { t:"panel", tint:"moss", title:{en:"Why it tastes different",ja:"味が異なる理由",zh:"風味何以不同"}, body:[
          { t:"p", text:{
            en:"Two mechanisms. First, the bacterial succession leaves metabolites behind — a broader spectrum of organic acids than lactic acid alone, plus peptides and amino acids from a longer enzymatic exposure. Second, thirty days of competition selects for hardier yeast, which then ferments the main mash more robustly. Kimoto sake is typically higher in acidity and amino acids, fuller, more savoury, and markedly better at warm temperatures and after several years in bottle.",
            ja:"機序は二つ。第一に、細菌の遷移は代謝産物を残す——乳酸だけでは得られない幅広い有機酸に加え、より長い酵素作用によるペプチドとアミノ酸。第二に、三十日間の競合はより強靭な酵母を選抜し、その酵母が本仕込みでより力強く発酵する。生酛の酒は概して酸度もアミノ酸度も高く、厚みがあり滋味に富み、燗にした場合と数年瓶で置いた場合に、際立ってよくなる。",
            zh:"機制有二。其一，細菌演替留下代謝產物——比單一乳酸更寬廣的有機酸譜系，加上更長時間酵素作用所生的胜肽與胺基酸。其二，三十天的競爭篩選出更強韌的酵母，該酵母隨後在正式仕込中發酵得更為強勁。生酛酒通常酸度與胺基酸度俱高、酒體厚實、旨味豐富，並在溫熱飲用與瓶中陳放數年後表現明顯更佳。" } }
        ] }
      ]
    },

    { t:"section", id:"yamahai",
      title:{ en:"Yamahai — kimoto without the poles", ja:"山廃酛", zh:"山廢酛" }, jp:"山卸廃止酛 · 1909",
      body:[
        { t:"p", text:{
          en:"In 1909 Kagi Kinichirō at the National Research Institute of Brewing demonstrated that the pole-grinding was not doing what everyone assumed. If the kōji is steeped in the water first — <em>mizu-kōji</em> — its enzymes dissolve the rice on their own within a day or two. The name is a contraction of <em>yamaoroshi haishi</em>, “yamaoroshi abolished”.",
          ja:"一九〇九年、醸造試験所の嘉儀金一郎は、山卸が誰もが思っていた働きをしていないことを実証した。麹を先に水に浸けて水麹とすれば、その酵素が一日か二日で米を自ら溶かすのである。名称は「山卸廃止」の略である。",
          zh:"1909 年，釀造試驗所的嘉儀金一郎證明，山卸並未發揮所有人以為的作用。若先將麴浸於水中製成「水麴」，其酵素在一兩天內便會自行溶解米粒。名稱即「山卸廢止」的縮寫。" } },
        { t:"p", text:{
          en:"Everything after that first step is identical to kimoto: the same bacterial succession, the same month, the same acidity. In blind comparison the two are hard to separate reliably, though yamahai is often described as slightly wilder and kimoto as slightly rounder — a difference that may owe as much to which breweries choose which method as to the methods themselves.",
          ja:"その最初の一手以降は生酛とまったく同じである——同じ細菌の遷移、同じひと月、同じ酸度。ブラインドで確実に識別することは難しく、山廃はやや野性的、生酛はやや丸いと語られることが多いが、この差は方法そのものよりも、どの蔵がどちらを選ぶかに由来している可能性がある。",
          zh:"此後的一切與生酛完全相同：同樣的細菌演替、同樣的一個月、同樣的酸度。盲飲之下難以穩定區分；山廢常被形容為稍野，生酛稍圓潤——但這差異或許更多來自「哪些酒藏選擇哪種方法」，而非方法本身。" } },
        { t:"quote",
          text:{en:"“Yamahai is not a shortcut. It removes eight hours of pole work from a thirty-day process; the other twenty-nine days and sixteen hours are unchanged.”",
                ja:"「山廃は近道ではない。三十日の工程から八時間の櫂の労働を取り除いただけであり、残る二十九日と十六時間は何も変わらない。」",
                zh:"「山廢不是捷徑。它從三十天的流程中拿掉八小時的櫂棒勞動；其餘二十九天又十六小時毫無改變。」"},
          cite:{en:"a common formulation among brewers",ja:"蔵人のあいだでよく言われる言い方",zh:"釀造者間常見的說法"} }
      ]
    },

    { t:"section", id:"bodaimoto",
      title:{ en:"Bodaimoto — souring the water first", ja:"菩提酛", zh:"菩提酛" }, jp:"菩提酛 · 水酛 · そやし水",
      body:[
        { t:"p", text:{
          en:"Developed by monks at Bodaisan Shōryakuji in Nara in the mid-Muromachi period, lost by the Taishō era, and reconstructed from the 1990s using bacteria and water from the original temple. It inverts the sequence: instead of building a starter and waiting for it to acidify, the acid water is made first and the starter built into it.",
          ja:"室町中期、奈良・菩提山正暦寺の僧によって確立され、大正期には失われ、一九九〇年代以降、当の寺の水と菌を用いて復元された。順序が逆である——酒母を仕込んでから酸性化を待つのではなく、まず酸性の水を作り、そのなかに酒母を立てる。",
          zh:"由室町中期奈良菩提山正曆寺的僧人所創，至大正時期失傳，1990 年代以後以該寺的水與菌復原。它把順序倒轉：不是先製酒母再等它酸化，而是先製出酸水，再於其中立起酒母。" } },
        { t:"steps", items:[
          { title:{en:"Making the sour water",ja:"そやし水を作る",zh:"製作そやし水"}, jp:"そやし水", romaji:"soyashi-mizu",
            meta:{en:"3 days (Nara method) · 10–20 days (Okayama method)",ja:"三日（奈良方式）・十〜二十日（岡山方式）",zh:"三天（奈良法）・10–20 天（岡山法）"},
            text:{en:"A small quantity of steamed rice is buried in raw rice and submerged in water. Lactic acid bacteria naturally present on the raw grain multiply on the free sugar and acidify the water over about three days. The Okayama variant instead uses kōji and water over a longer period and pasteurises the result.",ja:"少量の蒸米を生米のなかに埋め、水に沈める。生米に付着している乳酸菌が遊離糖を得て増殖し、三日ほどで水を酸性化する。岡山方式では代わりに麹と水を用いてより長く置き、得られた水を火入れする。",zh:"將少量蒸米埋入生米中並浸於水裡。生米上原有的乳酸菌以游離糖增殖，約三天使水酸化。岡山法則改以麴與水、歷時更久，並將所得酸水加以殺菌。"} },
          { title:{en:"Building the starter into it",ja:"そやし水で仕込む",zh:"以酸水立酒母"},
            meta:{en:"about a week",ja:"約一週間",zh:"約一週"},
            text:{en:"The soured water is strained off and used as the brewing water for a starter of steamed rice and kōji. Because the acidity is already in place, the vulnerable window is skipped entirely and the starter finishes fast — closer to sokujō in speed, but with wild rather than added acid.",ja:"そやし水を漉し取り、蒸米と麹による酒母の仕込み水として用いる。酸がすでに整っているため脆弱な時間帯を丸ごと飛ばすことができ、酒母は速く仕上がる——速さは速醸に近く、しかし酸は添加ではなく野生である。",zh:"濾出酸水，用作以蒸米與麴製作酒母的仕込水。由於酸度已然就位，脆弱期被完全略過，酒母得以快速完成——速度接近速釀，但酸來自野生而非添加。"} }
        ] },
        { t:"p", text:{
          en:"Bodaimoto sake is unmistakable: a bright, almost dairy-like acidity sitting on a broad, sweet, savoury base, often with a slight cloudiness and, in the fresher versions, a prickle. It is the closest thing available to tasting what a fifteenth-century Nara monk would have poured.",
          ja:"菩提酛の酒は紛れようがない——明るく、ほとんど乳製品を思わせる酸が、広く甘く滋味のある土台に乗る。わずかな濁りを帯びることが多く、若いものには微かな刺激がある。十五世紀の奈良の僧が注いだであろうものに、現在最も近い味である。",
          zh:"菩提酛的酒無從錯認：明亮、近乎乳製品般的酸度，架在寬闊、甘甜而富旨味的基底之上，常帶些許混濁，較新鮮者尚有微微刺激感。這是現今最接近十五世紀奈良僧人所斟之酒的味道。" } },
        { t:"note", label:{en:"A word on labels",ja:"表示について",zh:"關於標示"}, text:{
          en:"None of the four methods is a legal designation. A brewery may print <em>kimoto</em>, <em>yamahai</em> or <em>bodaimoto</em> because it is a factual claim about production, but there is no inspection regime behind it and no standard form of words. In practice the claim is reliable — the methods are expensive and slow, and there would be little point in claiming one falsely.",
          ja:"四つの方法はいずれも特定名称ではない。蔵が「生酛」「山廃」「菩提酛」と表示できるのは、それが製造に関する事実の記述だからであるが、その背後に検査制度はなく、決まった文言もない。実務上この表示は信頼に足る——いずれも高くつき、時間を要する方法であり、偽って名乗る意味がほとんどないからである。",
          zh:"四種方法皆非法定名稱。酒藏之所以能標示「生酛」「山廢」「菩提酛」，是因為那是關於製程的事實陳述，但其背後並無檢查制度，也無固定用語規範。實務上這類標示是可信的——這些方法既昂貴又費時，謊稱之幾乎沒有意義。" } }
      ]
    },

{ t:"section", id:"chemistry",
      title:{ en:"What actually happens in a kimoto tub", ja:"生酛の桶で実際に起きること", zh:"生酛桶中實際發生的事" }, jp:"微生物の遷移",
      body:[
        { t:"p", text:{
          en:"A kimoto starter is a controlled succession of organisms, each of which creates the conditions for the next and then dies. Nothing is added except rice, kōji and water; everything else arrives from the air, the tools and the building. The sequence takes about four weeks and it is one of the most elegant pieces of pre-scientific microbiology anywhere in food.",
          ja:"生酛の酛は、微生物の管理された遷移である。それぞれが次のものの条件を整え、そして死ぬ。加えるのは米と麹と水だけであり、それ以外はすべて、空気と道具と建物から来る。この連なりはおよそ四週間を要し、食の世界のどこを探しても、科学以前の微生物学として最も優美なものの一つである。",
          zh:"生酛的酒母是一場受控的微生物接力：每一種都為下一種創造條件，然後死去。除了米、麴與水，什麼都不加；其餘一切皆來自空氣、器具與建築。整個過程約需四週，是食物世界中最優雅的前科學微生物學之一。" } },
        { t:"steps", items:[
          { title:{en:"Nitrate-reducing bacteria",ja:"硝酸還元菌",zh:"硝酸還原菌"}, jp:"硝酸還元菌",
            meta:{en:"Days 1–7",ja:"1〜7日目",zh:"第 1–7 天"},
            text:{en:"Bacteria arriving with the water and the air reduce nitrate — naturally present in well water — to nitrite. Nitrite is toxic to wild yeasts and to many bacteria, so this first act clears the field of exactly the organisms that would spoil the batch, while the mash is still too cold and too sweet to defend itself any other way.",
              ja:"水と空気とともに来た菌が、井戸水に自然に含まれる硝酸を亜硝酸へ還元する。亜硝酸は野生酵母や多くの細菌に有毒であり、この最初の働きが、まさに腐造をもたらす微生物を場から一掃する。醪はまだ冷たく甘く、他の方法では自らを守れない段階である。",
              zh:"隨水與空氣而來的細菌，把井水中天然存在的硝酸鹽還原為亞硝酸鹽。亞硝酸鹽對野生酵母與許多細菌有毒，因此這第一幕正好清掉了會敗壞這批酒的微生物；此時醪仍太冷、太甜，無法以其他方式自保。"} },
          { title:{en:"Lactic acid bacteria",ja:"乳酸菌",zh:"乳酸菌"}, jp:"乳酸菌",
            meta:{en:"Days 7–20",ja:"7〜20日目",zh:"第 7–20 天"},
            text:{en:"Lactobacilli, tolerant of nitrite and of cold, take over and acidify the tub. As pH falls the nitrite decomposes and the lactic acid takes on the protective role — permanently, and at a level a sokujō brewer would have to add from a bottle. Along the way the bacteria produce the amino acids and peptides that give kimoto sake its characteristic depth.",
              ja:"亜硝酸にも低温にも耐える乳酸菌が主役となり、桶を酸性にする。pHが下がるにつれて亜硝酸は分解し、乳酸が守りの役を引き継ぐ——恒久的に、そして速醸の造り手なら瓶から加えねばならない量で。その過程で細菌は、生酛の酒に特有の奥行きを与えるアミノ酸とペプチドを生む。",
              zh:"耐亞硝酸鹽也耐低溫的乳酸桿菌接手，使桶內酸化。隨著 pH 下降，亞硝酸鹽分解，乳酸接手保護的角色——而且是永久性的，其量相當於速釀釀造者必須從瓶中添加的份量。過程中，這些細菌也生成了賦予生酛酒特有深度的胺基酸與胜肽。"} },
          { title:{en:"Yeast",ja:"酵母",zh:"酵母"}, jp:"酵母",
            meta:{en:"Days 15–30",ja:"15〜30日目",zh:"第 15–30 天"},
            text:{en:"Only now is the tub acidic enough for sake yeast to dominate. Whether it is pitched from an ampoule or allowed to arrive from the building, it multiplies in an environment where almost nothing else can compete, and reaches a cell density and a stress-hardened robustness that a fast sokujō starter does not achieve. This is why kimoto mashes are known for finishing reliably.",
              ja:"ここに至ってようやく、桶は清酒酵母が優位に立てるだけの酸性となる。アンプルから加えられようと、建物から来るに任されようと、酵母はほとんど何も競合しえない環境で増え、速い速醸の酛では届かない菌数と、ストレスに鍛えられた頑健さを得る。生酛の醪が確実に発酵を終えることで知られるのは、そのためである。",
              zh:"直到此時，桶內才酸到足以讓清酒酵母取得主導。無論它是自安瓿投入，或任其自建築而來，它都在幾乎無物可與之競爭的環境中增殖，達到速釀酒母所無法企及的菌數與經壓力淬鍊的強韌。這正是生酛之醪以「發酵能可靠完成」著稱的原因。"} },
          { title:{en:"Cooling and the pause",ja:"冷却と枯らし",zh:"冷卻與靜置"}, jp:"分け・枯らし",
            meta:{en:"The last days",ja:"最後の数日",zh:"最後數日"},
            text:{en:"The finished starter is cooled and rested before it goes into the main mash — a deliberate stress that selects for the hardiest cells. What goes into the tank is a small, extremely concentrated, extremely tough population that has already survived four weeks of everything the building could throw at it.",
              ja:"仕上がった酛は、本仕込みへ移す前に冷やして休ませる。最も強い細胞を選び取るための、意図されたストレスである。タンクへ入るのは、少量できわめて濃く、きわめて頑健な集団であり、建物が投げつけうるすべてを四週間にわたって生き延びてきたものたちである。",
              zh:"製成的酒母在投入主醪之前先行冷卻靜置——這是一種刻意的壓力，用以篩選出最強韌的細胞。進入酒槽的，是一群數量不多、極度濃縮、極度強韌的族群，它們已在這棟建築所能施加的一切之下存活了四週。"} }
        ] },
        { t:"note", label:{en:"Why sokujō is not simply “the cheap way”",ja:"速醸が単なる「安上がりな方法」ではない理由",zh:"速釀為何不只是「便宜的作法」"}, text:{
          en:"Adding lactic acid directly, as sokujō does, reaches the same protective acidity in a day rather than three weeks, with none of the risk and none of the labour. It is a genuinely excellent piece of engineering, invented in 1910, and it is why the sake you can buy is reliable. What it does not produce is the population of bacteria that generate kimoto's amino acids and peptides along the way — so the difference in the glass is not about acid at all, but about everything else those bacteria left behind.",
          ja:"速醸のように乳酸を直接加えれば、三週間ではなく一日で同じ守りの酸性度に達する。危険もなく、労力もない。一九一〇年に生まれた真に優れた工学であり、いま買える酒が信頼できるのはそのためである。ただしそこでは、生酛のアミノ酸やペプチドを道すがら生み出す細菌の集団は育たない。杯のなかの違いは酸の話ではまったくなく、その細菌が残していった他のすべての話なのである。",
          zh:"如速釀那樣直接添加乳酸，能在一天而非三週內達到相同的保護性酸度，既無風險也無勞力。這是 1910 年發明的、真正出色的工程，也是你今天買得到的酒之所以可靠的原因。它所不會產生的，是沿途生成生酛胺基酸與胜肽的那群細菌——因此杯中的差異根本不在酸，而在那些細菌所留下的其餘一切。" } }
      ]
    },

    { t:"section", id:"variants",
      title:{ en:"The other starters", ja:"そのほかの酒母", zh:"其他酒母" }, jp:"派生と実験",
      body:[
        { t:"defs", items:[
          { term:{en:"High-temperature saccharified starter",ja:"高温糖化酛",zh:"高溫糖化酛"}, jp:"高温糖化酛",
            def:{en:"Rice, kōji and water held at around 55–60°C for several hours to saccharify quickly and sterilise, then cooled, acidified and pitched. Very fast — a week or less — very safe, and used widely for ginjō, where a clean low-nutrient starter suits the aromatic style.",
              ja:"米・麹・水を55〜60度で数時間保ち、速やかに糖化させると同時に殺菌し、冷やして酸を加え、酵母を添加する。きわめて速く——一週間以内——きわめて安全であり、清らかで栄養の少ない酛が香りの高い酒質に合うため、吟醸に広く用いられる。",
              zh:"把米、麴與水維持在約 55–60°C 數小時，快速糖化並同時滅菌，再冷卻、加酸並投入酵母。極快（一週以內）、極安全，並因潔淨低營養的酒母適合芳香型酒質而廣泛用於吟釀。"} },
          { term:{en:"Lactic-acid-free sokujō",ja:"乳酸無添加速醸",zh:"無乳酸添加速釀"}, jp:"無添加速醸",
            def:{en:"A middle path: the speed and tank management of sokujō, but with the acid allowed to arrive from lactic bacteria rather than a bottle. Riskier than sokujō, faster than kimoto, and a common experiment among breweries curious about the traditional methods without wanting a month of pole-mashing.",
              ja:"中道である。速醸の速さとタンク管理を保ちながら、酸は瓶からではなく乳酸菌から得る。速醸より危険で、生酛より速い。一か月の櫂入れは望まないが伝統的な方法に関心のある蔵で、よく行われる試みである。",
              zh:"一條中間路線：保有速釀的速度與槽管理，但讓酸來自乳酸菌而非瓶裝乳酸。比速釀風險高、比生酛快速，是那些對傳統工法感興趣、卻不想耗上一個月搗櫂的酒藏常做的嘗試。"} },
          { term:{en:"Kimoto without the pole-mashing",ja:"櫂を入れない生酛",zh:"不搗櫂的生酛"}, jp:"山廃との関係",
            def:{en:"This is what yamahai is: the 1909 discovery that the <em>yamaoroshi</em> pole-mashing step, the most physically brutal part of kimoto, could be omitted entirely because the kōji dissolves the rice perfectly well on its own. Same microbiology, same result, three fewer hours of work at three in the morning for a crew of six.",
              ja:"山廃とはこれである。一九〇九年、生酛のなかで最も体力を要する山卸の工程は、麹が自ら十分に米を溶かすため、まったく省いてよいと分かった。微生物学も結果も同じで、六人の蔵人にとって、深夜三時の労働が三時間減った。",
              zh:"山廢正是如此：1909 年的發現指出，生酛中體力負擔最重的「山卸」搗櫂步驟可以完全省略，因為麴本身便足以把米溶開。微生物學相同、結果相同，卻讓六人班底在凌晨三點少做三小時的活。"} },
          { term:{en:"Sannai / kōbo-mu-tenka",ja:"酵母無添加",zh:"無添加酵母"}, jp:"蔵付き酵母",
            def:{en:"A kimoto or yamahai starter with no yeast pitched at all, relying entirely on the resident population in the building. The oldest method, the riskiest, and the one that produces the most idiosyncratic results. A handful of breweries do it for their flagship bottles and accept that a batch is occasionally lost.",
              ja:"酵母をまったく添加せず、建物に棲む集団だけに委ねる生酛や山廃の酛。最も古く、最も危険で、最も特異な結果を生む方法である。看板の酒のためにこれを行い、時に一仕込みを失うことを受け入れる蔵が、わずかに存在する。",
              zh:"完全不投入酵母的生酛或山廢酒母，全然仰賴棲息於建築中的菌群。這是最古老、風險最高，也產出最獨特結果的方法。有少數酒藏為其旗艦酒款如此行事，並接受偶爾損失一整批。"} }
        ] },
        { t:"scale", title:{en:"Starter methods by time and risk",ja:"酒母の型——時間と危険",zh:"酒母工法：時間與風險"},
          segs:[
            { label:{en:"High-temp saccharified · 5–7 days",ja:"高温糖化酛・5〜7日",zh:"高溫糖化酛・5–7 天"}, w:7, fill:"var(--h-snow)" },
            { label:{en:"Sokujō · 14 days",ja:"速醸・14日",zh:"速釀・14 天"}, w:14, fill:"var(--h-water)" },
            { label:{en:"Yamahai · 25–30 days",ja:"山廃・25〜30日",zh:"山廢・25–30 天"}, w:27, fill:"var(--h-moss)" },
            { label:{en:"Kimoto · 28–35 days",ja:"生酛・28〜35日",zh:"生酛・28–35 天"}, w:31, fill:"var(--h-wood)" },
            { label:{en:"Bodaimoto · variable",ja:"菩提酛・不定",zh:"菩提酛・不定"}, w:14, fill:"var(--h-amber)" }
          ],
          ticks:["0","2 weeks","4 weeks","6 weeks"],
          note:{en:"Time is only part of the cost. A kimoto also occupies a tank, a room and several people's nights for a month, and can still fail.",ja:"費用は時間だけではない。生酛はさらに、一か月にわたりタンクと部屋と数人の夜を占める。そして、それでも失敗しうる。",zh:"成本不只是時間。生酛還會占用一個酒槽、一個房間，以及數個人一整個月的夜晚——而且仍有可能失敗。"} }
      ]
    },

{ t:"section", id:"timelines",
      title:{ en:"The three starters side by side", ja:"三つの酒母を並べる", zh:"三種酒母並置比較" }, jp:"日程の比較",
      body:[
        { t:"p", text:{
          en:"Drawn on one time axis, the difference between the starter methods stops being a matter of philosophy and becomes a matter of two weeks. Everything the sokujō method removed was time — and the specific work that time was doing.",
          ja:"一つの時間軸の上に描けば、酒母法の違いは思想の問題であることをやめ、二週間の問題になる。速醸が取り去ったものはすべて時間であり——そしてその時間が果たしていた具体的な仕事であった。",
          zh:"畫在同一條時間軸上，酒母工法之間的差異就不再是理念問題，而是兩週的問題。速釀所拿掉的一切都是時間——以及那段時間所承擔的具體工作。" } },

        { t:"figure",
          caption:{
            en:"The three starter methods on one thirty-day axis. Kimoto and yamahai reach the same place by cultivating their own lactic acid bacteria; sokujō adds the acid on day one and skips straight to yeast propagation.",
            ja:"三十日の一つの軸に置いた三つの酒母法。生酛と山廃は自らの乳酸菌を育てて同じ地点に至り、速醸は初日に乳酸を加え、酵母の増殖へ直行する。",
            zh:"置於同一條三十日軸線上的三種酒母工法。生酛與山廢靠培養自身的乳酸菌抵達同一地點；速釀在第一天就加入乳酸，直接跳到酵母增殖。" },
          svg: function(lang, L){
            var W = 900, H = 330, x0 = 118, x1 = 862, DMAX = 32;
            function X(d){ return x0 + d / DMAX * (x1 - x0); }
            var rows = [
              { y: 64, name: { en:"Kimoto", ja:"生酛", zh:"生酛" }, jp:"生酛",
                segs: [
                  { a:0,  b:3,  fill:"var(--h-wood)",  lab:{en:"yamaoroshi",ja:"山卸",zh:"山卸"} },
                  { a:3,  b:11, fill:"var(--h-water)", lab:{en:"cold rest · lactic bacteria",ja:"打瀬・乳酸菌",zh:"打瀨・乳酸菌"} },
                  { a:11, b:20, fill:"var(--h-koji)",  lab:{en:"warming",ja:"暖気入れ",zh:"暖氣入"} },
                  { a:20, b:30, fill:"var(--h-yeast)", lab:{en:"yeast propagation",ja:"酵母増殖",zh:"酵母增殖"} }
                ] },
              { y: 142, name: { en:"Yamahai", ja:"山廃", zh:"山廢" }, jp:"山廃酛",
                segs: [
                  { a:0,  b:2,  fill:"var(--h-rice)",  lab:{en:"water-kōji rest",ja:"水麹",zh:"水麴" } },
                  { a:2,  b:10, fill:"var(--h-water)", lab:{en:"cold rest · lactic bacteria",ja:"打瀬・乳酸菌",zh:"打瀨・乳酸菌"} },
                  { a:10, b:19, fill:"var(--h-koji)",  lab:{en:"warming",ja:"暖気入れ",zh:"暖氣入"} },
                  { a:19, b:28, fill:"var(--h-yeast)", lab:{en:"yeast propagation",ja:"酵母増殖",zh:"酵母增殖"} }
                ] },
              { y: 220, name: { en:"Sokujō", ja:"速醸酛", zh:"速釀酛" }, jp:"速醸酛",
                segs: [
                  { a:0,  b:2,  fill:"var(--h-plum)",  lab:{en:"lactic acid added",ja:"乳酸添加",zh:"添加乳酸"} },
                  { a:2,  b:8,  fill:"var(--h-yeast)", lab:{en:"yeast propagation",ja:"酵母増殖",zh:"酵母增殖"} },
                  { a:8,  b:14, fill:"var(--h-snow)",  lab:{en:"cooling down",ja:"分け・枯らし",zh:"分け・枯らし"} }
                ] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit">';
            // grid
            for (var d = 0; d <= 30; d += 5) {
              s += '<line x1="' + X(d) + '" y1="42" x2="' + X(d) + '" y2="272" stroke="var(--rule)" stroke-width="1"/>';
              s += '<text x="' + X(d) + '" y="292" font-size="11" fill="var(--ink-4)" text-anchor="middle">' + d + '</text>';
            }
            s += '<text x="' + X(15) + '" y="314" font-size="11" fill="var(--ink-3)" text-anchor="middle" letter-spacing="0.12em">' +
                 L({ en:"DAYS FROM START", ja:"仕込みからの日数", zh:"自投料起的天數" }) + '</text>';
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i];
              s += '<text x="12" y="' + (r.y + 22) + '" font-size="13" fill="var(--ink)" font-weight="600">' + L(r.name) + '</text>';
              s += '<text x="12" y="' + (r.y + 39) + '" font-size="11" fill="var(--ink-3)">' + r.jp + '</text>';
              for (var j = 0; j < r.segs.length; j++) {
                var g = r.segs[j], xa = X(g.a), xb = X(g.b);
                s += '<rect x="' + xa + '" y="' + r.y + '" width="' + (xb - xa) + '" height="34" fill="' + g.fill + '" stroke="var(--rule-2)" stroke-width="1"/>';
                if (xb - xa > 74) {
                  s += '<text x="' + ((xa + xb) / 2) + '" y="' + (r.y + 22) + '" font-size="10.5" fill="var(--ink-2)" text-anchor="middle">' + L(g.lab) + '</text>';
                }
              }
              var end = r.segs[r.segs.length - 1].b;
              s += '<line x1="' + X(end) + '" y1="' + (r.y - 6) + '" x2="' + X(end) + '" y2="' + (r.y + 40) + '" stroke="var(--ink-2)" stroke-width="1.5"/>';
              s += '<text x="' + (X(end) + 8) + '" y="' + (r.y + 22) + '" font-size="11" fill="var(--ink-2)">' + end + 'd</text>';
            }
            s += '</svg>';
            return s;
          } },

        { t:"p", text:{
          en:"Two features of the drawing are worth dwelling on. The first is that kimoto and yamahai are almost the same length — the pole-mashing that yamahai abolishes occupied only the first two or three days, and removing it saved labour, not time. The second is that the long middle stretch on both traditional methods is not brewing in any active sense: it is a wait, at low temperature, while a succession of wild organisms rises and dies in turn, leaving an acidified, selectively sterilised medium behind. Sokujō replaces that entire ecological succession with a measured addition of lactic acid, and the argument about what is lost is an argument about whether that succession leaves anything behind besides acid.",
          ja:"図のうち二つの特徴は、立ち止まって見る値打ちがある。第一に、生酛と山廃はほぼ同じ長さであるということ。山廃が廃した山卸は最初の二、三日を占めていたにすぎず、それを除いて節約されたのは労働であって時間ではない。第二に、二つの伝統的な方法における長い中盤は、能動的な意味での酒造りではないということ。それは低温での待機であり、そのあいだに野生の生物が次々に興っては死に、あとに酸性化され、選択的に無菌化された培地を残す。速醸はその生態的遷移のすべてを、計量された乳酸の添加で置き換える。何が失われたのかという議論は、その遷移が酸のほかに何かを残すのかどうかという議論にほかならない。",
          zh:"圖中有兩點值得駐足。第一，生酛與山廢的長度幾乎相同——山廢所廢除的山卸只占最初兩三天，去掉它省下的是勞力，不是時間。第二，兩種傳統工法中間那段漫長的時期，在任何積極的意義上都不是「釀造」：那是低溫下的等待，在此期間一連串野生生物輪番興起又消亡，留下一個被酸化、被選擇性滅菌的培養基。速釀以一次計量的乳酸添加，取代了整段生態演替；而關於「失去了什麼」的爭論，說到底是在爭論那段演替除了酸之外還留下了什麼。" } }
      ] },

    { t:"related", items:[
      { href:"microbes.html", why:{ en:"The succession a kimoto tub actually runs through.", ja:"生酛の桶が実際に辿る遷移。", zh:"生酛的桶裡實際跑過的那一連串演替。" } },
      { href:"yeast.html", why:{ en:"The organism all four methods exist to grow.", ja:"四つの方法のいずれもが育てようとする生きもの。", zh:"這四種方法都是為了培養它而存在的生物。" } },
      { href:"history.html", why:{ en:"When each method appeared, and what it replaced.", ja:"各々の方法が現れた時と、それが何に代わったか。", zh:"每一種方法出現的時間，以及它取代了什麼。" } },
      { href:"taste.html", why:{ en:"What a kimoto tastes of that a sokujō does not.", ja:"速醸にはなく生酛にある味。", zh:"生酛有、而速釀沒有的那些味道。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- pressing */
SAKE.pages["pressing"] = {
  kicker: { en: "Making · 10", ja: "造り · 10", zh: "釀造 · 10" },
  title:  { en: "Pressing & Finishing", ja: "上槽と調整", zh: "上槽與調整" },
  jp: "上槽 · 滓引き · 濾過 · 火入れ · 貯蔵 · 割水",
  lede: {
    en: "When the mash is stopped, the sake inside it is around 18% alcohol, cloudy, harsh and full of live enzymes. Between that and a bottle lie six or seven decisions — how to separate the liquid, which fraction to keep, whether to filter, whether and how often to heat it, how long to rest it, how much water to add. Every one of them is visible in the glass, and every one has a name that can appear on a label.",
    ja: "醪を止めた時点で、そのなかの酒はアルコール分およそ18%、白く濁り、荒く、酵素が生きたままである。そこから瓶までのあいだに、六つか七つの判断がある——どう液体を分けるか、どの部分を採るか、濾過するか、加熱するか何度するか、どれだけ寝かせるか、どれだけ水を加えるか。そのいずれもが杯のなかに現れ、そのいずれもがラベルに現れうる名をもつ。",
    zh: "當醪停止發酵時，其中的酒約有 18% 酒精，混濁、粗糙，且酵素仍然活著。從那裡到一只酒瓶之間，橫亙著六、七個決定——如何分離液體、保留哪一段、是否過濾、是否加熱及加熱幾次、靜置多久、加多少水。每一項都會顯現在杯中，而每一項都有可能出現在酒標上的名稱。"
  },
  body: [
    { t:"section", id:"joso",
      title:{ en:"Separating the liquid", ja:"上槽", zh:"上槽" }, jp:"上槽 · 搾り",
      body:[
        { t:"p", text:{
          en:"Pressing is legally what makes seishu seishu — the Liquor Tax Act's requirement that the product be <em>filtered</em>. What comes out is sake; what stays behind is <em>sakekasu</em>, the lees, which are a food ingredient in their own right and account for roughly a quarter of the rice by weight in a heavily-milled daiginjō.",
          ja:"上槽は、法的に清酒を清酒たらしめる工程である——酒税法が求める「漉す」という要件がこれにあたる。出てくるものが酒であり、残るものが酒粕である。酒粕はそれ自体が食材であり、精米を深く進めた大吟醸では、米の重量のおよそ四分の一に達する。",
          zh:"上槽在法律上正是使清酒成為清酒的環節——即酒稅法所要求的「過濾」。流出者為酒，留下者為酒粕；酒粕本身即是一種食材，在深度精米的大吟釀中，其重量約可達米重的四分之一。" } },
        { t:"compare", cols:3, items:[
          { title:{en:"Assaku-ki",ja:"自動圧搾機",zh:"自動壓搾機"}, jp:"藪田式 · yabuta",
            text:{en:"An accordion of vertical filter panels; the mash is pumped in and air bladders squeeze it. Fast, efficient, closed to air, and gentle enough for premium sake. It is what most of the industry uses, and its brand name — Yabuta — has become the generic term.",ja:"垂直の濾板を蛇腹状に並べ、醪を圧入して空気袋で締める。速く、効率がよく、空気に触れず、上位の酒にも十分に穏やかである。業界の大半が用いており、その商標名「藪田」がそのまま一般名詞になっている。",zh:"以垂直濾板排成手風琴狀，將醪泵入後由氣囊擠壓。快速、高效、隔絕空氣，且對高階酒亦足夠溫和。業界多數使用之，其品牌名「藪田」已成通稱。"} },
          { title:{en:"Fune",ja:"槽",zh:"槽"}, jp:"槽搾り · fune-shibori",
            text:{en:"The mash is ladled into cotton bags stacked in a long wooden or steel trough, and a lid is pressed down on them slowly by weight or hydraulics. Slower, more labour, more air contact — and prized because the pressure is gradual and even. The traditional method, still used for top cuvées.",ja:"醪を木綿の袋に汲み入れ、長い木製または鋼製の槽に積み、上から重石または油圧で蓋をゆっくり押し下げる。遅く、手間がかかり、空気にも触れる——それでも圧が緩やかで均一であるがゆえに尊ばれる。伝統的な方法であり、今も最上位の商品に用いられる。",zh:"將醪舀入棉袋，層層堆疊於長形木槽或鋼槽中，再以重石或油壓緩緩下壓槽蓋。較慢、費工、接觸空氣較多——卻因加壓緩慢均勻而備受推崇。此為傳統作法，至今仍用於頂級品項。"} },
          { title:{en:"Fukuro-zuri",ja:"袋吊り",zh:"袋吊"}, jp:"雫取り · shizuku",
            text:{en:"Bags of mash are hung and nothing is pressed at all; only what drips is collected, into bottles set underneath. Yields are low and the sake is exceptionally clean and aromatic. Reserved for competition entries and the most expensive bottlings, where it is often labelled <em>shizuku</em> — “droplet”.",ja:"醪を入れた袋を吊るし、圧はまったくかけない。滴り落ちるものだけを、下に置いた瓶に受ける。歩留まりは低く、酒は際立って清く香り高い。鑑評会出品酒と最高価格帯に限られ、しばしば「雫」と表示される。",zh:"將裝醪的袋懸吊，完全不加壓，只收集滴落之液，落入下方擺放的瓶中。產量極低，酒質格外潔淨芳香。僅用於鑑評會參賽酒與最高價位品項，常標示為「雫」。"} }
        ] },
        { t:"h3", text:{en:"The three fractions",ja:"三つの部分",zh:"三段酒液"} },
        { t:"table",
          cols:[{en:"Fraction",ja:"部分",zh:"段別"},{en:"Japanese",ja:"呼称",zh:"日文"},{en:"When",ja:"時点",zh:"時點"},{en:"Character",ja:"性格",zh:"性格"}],
          jpCols:[1],
          rows:[
            [{en:"Arabashiri",ja:"荒走り",zh:"荒走"},"荒走り",{en:"first run, no pressure",ja:"最初・無加圧",zh:"最初流出、未加壓"},
             {en:"Cloudy, gassy, aggressive, high-toned. Bottled as a seasonal novelty; loved for its rawness rather than its balance.",ja:"濁り、ガスを含み、荒々しく、音域が高い。季節商品として瓶詰され、均衡よりもその粗さゆえに愛される。",zh:"混濁、帶氣、粗獷、音域偏高。作為季節限定裝瓶，人們愛的是它的生猛而非均衡。"}],
            [{en:"Nakadare / nakagumi",ja:"中垂れ・中汲み",zh:"中取"},"中取り · 中汲み",{en:"middle run, light pressure",ja:"中間・軽い圧",zh:"中段流出、輕壓"},
             {en:"The best of the run: clear, balanced, complete. This is the fraction breweries keep for their own top labels and for competition, and the word on a label is a genuine quality signal.",ja:"最も良い部分——澄み、均衡がとれ、完成している。蔵が自社の最上位商品や鑑評会のために取っておく部分であり、ラベルにこの語があるとき、それは実質的な品質の合図である。",zh:"整段中最佳者：澄澈、均衡、完整。這是酒藏保留給自家頂級品項與鑑評會的部分；標籤上出現此詞時，確實是一項品質訊號。"}],
            [{en:"Seme",ja:"責め",zh:"責"},"責め",{en:"final run, full pressure",ja:"最後・強い圧",zh:"最後流出、全力加壓"},
             {en:"Extracted under force. Higher in amino acids and bitterness, coarser, often blended back in small proportion or diverted to lower grades.",ja:"力を加えて絞り出した部分。アミノ酸と苦みが多く、粗い。少量を戻して調合するか、下位の商品へ回されることが多い。",zh:"以強力壓出者。胺基酸與苦味較高、質地較粗，多以少量回摻調和，或轉入較低階產品。"}]
          ] }
      ]
    },

    { t:"section", id:"clarify",
      title:{ en:"Settling and filtering", ja:"滓引きと濾過", zh:"澱引與過濾" }, jp:"滓引き · 濾過",
      body:[
        { t:"steps", items:[
          { title:{en:"Settling",ja:"滓引き",zh:"澱引"}, jp:"滓引き", romaji:"ori-biki",
            meta:{en:"3–10 days at low temperature",ja:"低温で三〜十日",zh:"低溫下 3–10 天"},
            text:{en:"Fresh-pressed sake is hazy with fine rice and yeast particles. Left cold and still, they fall out and the clear sake is racked off the top. Some breweries stop here and bottle the result as <em>ori-garami</em> — lightly hazy, with the sediment deliberately included.",
                  ja:"搾りたての酒は、細かな米と酵母の粒子で霞んでいる。冷やして静置すればそれらは沈み、上澄みを引き抜く。ここで止めて、滓をあえて残したまま「おりがらみ」として瓶詰する蔵もある。",
                  zh:"剛搾出的酒因細微米粒與酵母而呈霧狀。低溫靜置後它們沉降，再抽取上層清澄之酒。有些酒藏就此打住，刻意保留澱渣裝瓶為「滓がらみ」。"} },
          { title:{en:"Carbon filtration",ja:"活性炭濾過",zh:"活性碳過濾"}, jp:"炭素濾過", romaji:"tanso-roka",
            meta:{en:"optional · powdered activated carbon",ja:"任意・粉末活性炭",zh:"選用・粉末活性碳"},
            text:{en:"Powdered carbon adsorbs colour and off-aromas, and is then filtered out. It reliably produces a paler, cleaner, more uniform sake — and it removes desirable compounds along with the undesirable ones. The reaction against it produced <em>muroka</em>, “unfiltered”, now a common badge on assertive junmai.",
                  ja:"粉末活性炭が色と不快な香りを吸着し、その後濾別される。より淡く、清く、均一な酒が確実に得られる——と同時に、望ましくない成分とともに望ましい成分も除かれる。これへの反動が「無濾過」であり、いまや個性の強い純米酒に一般的な表示となっている。",
                  zh:"粉末活性碳吸附色澤與異味後被濾除。它能穩定地產出更淡、更潔淨、更均一的酒——同時也會連同不良成分一併移除理想成分。對此的反動催生了「無濾過」，如今已是個性鮮明的純米酒常見的標記。"} },
          { title:{en:"Fine filtration",ja:"精密濾過",zh:"精密過濾"},
            meta:{en:"membrane or filter press",ja:"膜または濾過機",zh:"薄膜或濾機"},
            text:{en:"A physical polish to remove remaining haze and, in some cases, to sterilise without heat. Sake filtered rather than pasteurised can be sold as <em>namazake</em> and keeps some of its fresh character with better stability, though purists argue the membrane strips texture.",
                  ja:"残った濁りを除くための物理的な仕上げであり、場合によっては加熱によらない除菌でもある。火入れの代わりに濾過した酒は生酒として売ることができ、新鮮さを保ちながら安定性が増す。ただし、膜が質感を削ぐと主張する向きもある。",
                  zh:"以物理方式做最後澄清，有時亦作為不加熱的除菌手段。以過濾取代火入者可作生酒販售，既保留鮮度又較為穩定；惟純粹主義者主張薄膜會削去口感層次。"} }
        ] }
      ]
    },

    { t:"section", id:"hiire",
      title:{ en:"Pasteurisation", ja:"火入れ", zh:"火入" }, jp:"火入れ · 生酒の系譜",
      body:[
        { t:"p", text:{
          en:"Sake is heated to about 62–65 °C for a few minutes. This does two things: it kills <em>hiochi</em> bacteria, and — at least as importantly — it denatures the kōji enzymes, which would otherwise keep working in the bottle and slowly turn a balanced sake into something sweet and flabby. Standard practice is to heat twice: once before storage, once at bottling.",
          ja:"酒をおよそ62〜65℃で数分間加熱する。これは二つのことを行う——火落菌を殺すこと、そして少なくとも同じくらい重要なこととして、麹の酵素を失活させることである。酵素を残せば瓶のなかで働き続け、均衡のとれた酒をゆっくりと甘くだらしないものに変えてしまう。標準的な手順では二度加熱する——貯蔵前と瓶詰時である。",
          zh:"將酒加熱至約 62–65°C 數分鐘。此舉達成兩件事：殺死火落菌，以及——至少同等重要地——使麴菌酵素失活；否則酵素會在瓶中持續作用，逐漸把一款均衡的酒變得甜膩鬆散。標準作法是加熱兩次：貯藏前一次，裝瓶時一次。" } },
        { t:"html", text:{
          en:'<div class="matrix"><table><caption>The pasteurisation matrix</caption><thead><tr><th class="axis">Before storage &nbsp;↓&nbsp; / &nbsp;At bottling &nbsp;→</th><th>Heated</th><th>Not heated</th></tr></thead><tbody><tr><td class="t-key">Heated</td><td class="mx"><strong>Standard sake</strong><span class="t-jp">二回火入れ</span><span class="mx-d">Two pasteurisations. Stable at room temperature, ages predictably, the default for almost everything on a shelf.</span></td><td class="mx"><strong>Namazume</strong><span class="t-jp">生詰酒</span><span class="mx-d">Heated once after pressing, rested over summer, bottled cold. This is what autumn <em>hiyaoroshi</em> is.</span></td></tr><tr><td class="t-key">Not heated</td><td class="mx"><strong>Nama-chozō</strong><span class="t-jp">生貯蔵酒</span><span class="mx-d">Stored raw and cold, heated once on the way into the bottle. Keeps much of the freshness with far less risk.</span></td><td class="mx"><strong>Namazake</strong><span class="t-jp">生酒</span><span class="mx-d">Never heated at all. Vivid, fragile, sometimes faintly gassy. Must stay refrigerated from brewery to glass, and changes week by week.</span></td></tr></tbody></table></div>',
          ja:'<div class="matrix"><table><caption>火入れの組み合わせ</caption><thead><tr><th class="axis">貯蔵前 ↓ ／ 瓶詰時 →</th><th>火入れする</th><th>火入れしない</th></tr></thead><tbody><tr><td class="t-key">火入れする</td><td class="mx"><strong>一般的な清酒</strong><span class="t-jp">二回火入れ</span><span class="mx-d">二度の火入れ。常温で安定し、熟成も読みやすい。棚に並ぶもののほとんどはこれである。</span></td><td class="mx"><strong>生詰酒</strong><span class="mx-d">上槽後に一度火入れし、夏を越し、冷やして瓶詰する。秋の「ひやおろし」とはこれである。</span></td></tr><tr><td class="t-key">火入れしない</td><td class="mx"><strong>生貯蔵酒</strong><span class="mx-d">生のまま低温貯蔵し、瓶詰の際に一度だけ火入れする。新鮮さを多く残し、危険は格段に小さい。</span></td><td class="mx"><strong>生酒</strong><span class="mx-d">一度も加熱しない。鮮烈で、脆く、時に微発泡。蔵から杯まで冷蔵を要し、週ごとに変わる。</span></td></tr></tbody></table></div>',
          zh:'<div class="matrix"><table><caption>火入的組合</caption><thead><tr><th class="axis">貯藏前 ↓ ／ 裝瓶時 →</th><th>加熱</th><th>不加熱</th></tr></thead><tbody><tr><td class="t-key">加熱</td><td class="mx"><strong>一般清酒</strong><span class="t-jp">二回火入れ</span><span class="mx-d">兩次火入。常溫穩定、陳化可預期，貨架上絕大多數皆屬此類。</span></td><td class="mx"><strong>生詰酒</strong><span class="t-jp">生詰酒</span><span class="mx-d">上槽後火入一次，越夏靜置，低溫裝瓶。秋季的「冷卸」即為此。</span></td></tr><tr><td class="t-key">不加熱</td><td class="mx"><strong>生貯藏酒</strong><span class="t-jp">生貯蔵酒</span><span class="mx-d">以生酒狀態低溫貯藏，裝瓶時才火入一次。保留大量鮮度，風險則小得多。</span></td><td class="mx"><strong>生酒</strong><span class="t-jp">生酒</span><span class="mx-d">完全未加熱。鮮明、脆弱，有時微帶氣泡。自酒藏至酒杯全程須冷藏，且週週在變。</span></td></tr></tbody></table></div>'
        } },
        { t:"defs", items:[
          { term:{en:"Coil pasteurisation",ja:"蛇管火入れ",zh:"蛇管火入"}, jp:"蛇管", romaji:"jakan",
            def:{en:"Sake is pumped through a coiled pipe immersed in hot water, then cooled. Fast and even, and the traditional industrial method.",ja:"湯に沈めた螺旋状の管に酒を通し、その後冷却する。速く均一であり、伝統的な工業的手法である。",zh:"讓酒流經浸於熱水中的螺旋管，隨後冷卻。快速且均勻，是傳統的工業作法。"} },
          { term:{en:"Bottle pasteurisation",ja:"瓶燗火入れ",zh:"瓶燗火入"}, jp:"瓶燗", romaji:"binkan",
            def:{en:"The sake is bottled cold, sealed, then the whole bottle is heated and crash-cooled — often in a water bath, sometimes with the bottle inverted. Slower and more expensive, but nothing is exposed to air after heating, so aroma survives much better. Standard for premium ginjō.",ja:"冷たいまま瓶詰・密栓し、瓶ごと加熱して急冷する——湯煎が多く、瓶を倒立させることもある。遅く高くつくが、加熱後に空気へ触れないため、香りの残り方が格段によい。上位の吟醸では標準である。",zh:"先低溫裝瓶密封，再將整瓶加熱後急速冷卻——多以水浴進行，有時將瓶身倒置。較慢且成本高，但加熱後不接觸空氣，香氣保存明顯更佳。高階吟釀的標準作法。"} },
          { term:{en:"Plate pasteurisation",ja:"プレートヒーター",zh:"板式加熱"},
            def:{en:"A plate heat exchanger raises and drops the temperature within seconds. The gentlest on aroma of the bulk methods, and now widespread.",ja:"プレート式熱交換器により、数秒で昇温と冷却を行う。大量処理の手法のなかでは香りに最も優しく、現在は広く用いられている。",zh:"以板式熱交換器在數秒內完成升溫與降溫。是大量處理手法中對香氣最溫和者，如今應用廣泛。"} }
        ] }
      ]
    },

    { t:"section", id:"maturation",
      title:{ en:"Maturation, blending, dilution", ja:"貯蔵・調合・割水", zh:"貯藏、調和、割水" }, jp:"熟成 · ブレンド · 加水",
      body:[
        { t:"steps", items:[
          { title:{en:"Resting",ja:"貯蔵",zh:"貯藏"}, jp:"貯蔵", romaji:"chozō",
            meta:{en:"typically 6 months, sometimes years",ja:"通常は半年、時に数年",zh:"通常半年，有時數年"},
            text:{en:"Freshly pressed sake is disjointed: sharp acid, raw alcohol, aroma sitting apart from body. A few months at cool temperature lets esterification and slow oxidation knit it together — the process brewers call <em>jukusei</em>. Most sake is released after about six months; the shortest turnaround, <em>shiboritate</em>, goes out within weeks.",
                  ja:"搾りたての酒はばらばらである——酸は鋭く、アルコールは荒く、香りは味と別のところにある。数か月を低温で過ごすことで、エステル化と緩やかな酸化がそれらを縫い合わせる。蔵人が熟成と呼ぶ過程である。多くは半年ほどで出荷され、最も早いしぼりたては数週間で世に出る。",
                  zh:"剛搾出的酒是分裂的：酸銳利、酒精粗糙、香氣與酒體各自為政。在低溫中靜置數月，酯化與緩慢氧化將它們縫合起來——釀造者稱之為熟成。多數酒約在半年後出貨，最快的「搾立」則於數週內問世。"} },
          { title:{en:"Blending",ja:"調合",zh:"調和"}, jp:"調合", romaji:"chōgō",
            meta:{en:"tank by tank",ja:"タンク単位",zh:"以槽為單位"},
            text:{en:"Each tank is different, and a brand must be the same year after year. Blending across tanks — and sometimes across vintages — is how consistency is produced, and it is a serious skill rather than an admission of failure. Only the smallest single-tank bottlings escape it.",
                  ja:"タンクはそれぞれ異なり、銘柄は年ごとに同じでなければならない。タンクを跨ぎ、時には年を跨いで調合することによって恒常性は作られる。これは失敗の告白ではなく、一つの重要な技能である。これを免れるのは、ごく小規模の単一タンク商品だけである。",
                  zh:"每一槽都不同，而一個品牌必須年年一致。跨槽——有時跨年份——的調和，正是一致性的來源；它是一項嚴肅的技藝，而非失敗的自白。唯有規模最小的單槽裝瓶得以豁免。"} },
          { title:{en:"Dilution",ja:"割水",zh:"割水"}, jp:"割水", romaji:"warimizu",
            meta:{en:"from ≈18% to 15–16%",ja:"約18%から15〜16%へ",zh:"自約 18% 降至 15–16%"},
            text:{en:"Brewing water is added to bring the alcohol down to the intended figure. This is not a dilution of quality — the sake was never designed to be drunk at 18% — but it is a real intervention: too much water at once shocks the sake and it needs weeks to reintegrate. Sake sold without this step is <em>genshu</em>.",
                  ja:"仕込み水を加えて、意図した度数までアルコールを下げる。これは品質の希釈ではない——そもそも18%で飲むように設計されていない——が、実質的な介入である。一度に多く加えれば酒は驚き、馴染むまでに数週間を要する。この工程を経ずに売られるものが原酒である。",
                  zh:"加入仕込水，把酒精降至預定數值。這並非品質的稀釋——這款酒本來就不是設計成 18% 飲用的——但確實是一項實質介入：一次加太多水會使酒受驚，需數週才能重新融合。未經此步驟即販售者，即為原酒。"} },
          { title:{en:"Bottling",ja:"瓶詰",zh:"裝瓶"}, jp:"瓶詰",
            meta:{en:"720 mL · 1,800 mL · 300 mL",ja:"四合瓶・一升瓶・三百ミリ",zh:"四合瓶・一升瓶・300 mL"},
            text:{en:"The 1,800 mL <em>isshōbin</em> dates from 1901 and is still the format that best protects sake — thick dark glass, little headspace, slow to be finished. The 720 mL four-<em>gō</em> bottle is now the standard retail unit. Dark green or brown glass matters: ultraviolet light degrades sake within hours, producing a sulphurous smell brewers call <em>nikkōshū</em>, sunlight-odour.",
                  ja:"一升瓶（1,800mL）は一九〇一年に登場し、いまなお酒を最もよく守る規格である——厚く色の濃いガラス、少ないヘッドスペース、飲み切るまでに時間がかかること。四合瓶（720mL）が現在の小売の標準単位である。濃緑や褐色のガラスであることには意味がある。紫外線は数時間で酒を劣化させ、蔵人が日光臭と呼ぶ硫黄様の匂いを生じさせる。",
                  zh:"1,800 mL 的一升瓶始於 1901 年，至今仍是最能保護酒質的規格——厚實深色玻璃、頂隙小、不易一次喝完。720 mL 的四合瓶則是現今零售的標準單位。深綠或褐色玻璃並非無謂：紫外線可在數小時內使酒劣化，產生釀造者稱為「日光臭」的硫味。"} }
        ] },
        { t:"note", label:{en:"Sakekasu",ja:"酒粕",zh:"酒粕"}, text:{
          en:"The pressed lees are 8% alcohol, rich in protein, amino acids and residual starch, and are a food in their own right: dissolved into <em>kasujiru</em> soup, used to cure fish and vegetables (<em>kasuzuke</em>), distilled into <em>kasutori shōchū</em>, or fermented into <em>amazake</em>. A daiginjō may leave 40–50% of its rice weight behind as kasu, which is one reason daiginjō is expensive and one reason the best kasu is sold by the same breweries in winter.",
          ja:"搾り粕はアルコール分8%ほどで、たんぱく質・アミノ酸・残存デンプンに富み、それ自体が食品である——粕汁に溶き、魚や野菜を漬け（粕漬け）、粕取り焼酎に蒸留し、あるいは甘酒に仕立てる。大吟醸では米の重量の40〜50%が粕として残ることもあり、これが大吟醸の高価な理由の一つであり、冬に同じ蔵から最良の酒粕が売られる理由でもある。",
          zh:"搾出的酒粕含約 8% 酒精，富含蛋白質、胺基酸與殘餘澱粉，本身即是食材：可化入粕汁湯、醃漬魚類蔬菜（粕漬）、蒸餾成粕取燒酎，或發酵成甘酒。大吟釀可能有米重的 40–50% 化為酒粕——這既是大吟釀昂貴的原因之一，也是最佳酒粕於冬季由同一批酒藏出售的原因。" } }
      ]
    },

{ t:"section", id:"fractions",
      title:{ en:"The three fractions of a pressing", ja:"上槽の三つの部分", zh:"上槽的三段" }, jp:"あらばしり・中取り・責め",
      body:[
        { t:"figure",
          caption:{
            en:"One pressing, read left to right in the order the liquid comes out. The band shows roughly what share of the run each fraction is; the two lines beneath show what is happening to pressure and to clarity while it does. Proportions vary with the press and the brewer's judgement — the shape does not.",
            ja:"一度の上槽を、液の出る順に左から右へ読む。帯はそれぞれの部分がおおよそ全体のどれほどを占めるかを示し、下の二本の線は、その間に圧と澄みに何が起きているかを示す。割合は槽と造り手の判断により動くが、形は動かない。",
            zh:"一次上槽，依酒液流出的順序由左至右閱讀。色帶顯示每一段大致占整趟的多少比例；下方兩條線顯示在此期間壓力與澄清度發生了什麼。比例會隨壓搾設備與釀酒人的判斷而變動——形狀不會。" },
          svg: function (lang, L) {
            var W = 760, H = 336, X0 = 40, X1 = W - 40, BY = 52, BH = 40;
            var segs = [
              { w: 0.14, f:"#E7DFD2", jp:"荒走り", r:"arabashiri",
                d:{ en:"Comes out under nothing but the weight of the mash. Cloudy, gassy, sharp, high in aroma and slightly rough — bottled on its own by breweries that want exactly that.",
                    ja:"醪の重さのほかに何の力も加わらずに出てくる。濁り、ガスを含み、鋭く、香りに富み、やや荒い。それを望む蔵はこれのみを瓶詰する。",
                    zh:"僅靠醪本身的重量流出。混濁、帶氣、銳利、香氣豐富而略顯粗獷——想要這種調性的酒藏會單獨裝瓶。" } },
              { w: 0.58, f:"#CDBFA2", jp:"中取り", r:"nakadori",
                d:{ en:"The long central stretch: clear, balanced, with the aroma of the first run and none of its roughness. This is the fraction sent to competitions, and what a separately bottled label is almost always drawn from.",
                    ja:"長く続く中ほどの部分であり、澄み、均衡がとれ、荒走りの香りをもちながらその荒さをもたない。鑑評会へ送られるのはこの部分であり、別に瓶詰される札はほとんどつねにここから取られる。",
                    zh:"長長的中段：清澈、平衡，帶著荒走的香氣卻沒有它的粗糙。送去鑑評會的正是這一段，而單獨裝瓶的酒標也幾乎總是從這裡取出。" } },
              { w: 0.28, f:"#B09E7C", jp:"責め", r:"seme",
                d:{ en:"Squeezed out as the press closes. Higher in amino acids, minerals and bitterness, lower in aroma, coarse on its own — but it carries body, and blended back it is what stops a sake being thin.",
                    ja:"槽が締まるにつれて搾り出される。アミノ酸と鉱と苦味に富み、香りに乏しく、それのみでは粗い。だが厚みを担い、戻して調合すれば、酒が痩せることを防ぐ。",
                    zh:"隨著壓搾收緊而被擠出。胺基酸、礦物質與苦味較高、香氣較低，單獨看很粗糙——但它承載酒體，調合回去之後，正是它讓一支酒不至於單薄。" } }
            ];
            function esc(x) { return String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
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
            function xs(i) { var a = 0; for (var k = 0; k < i; k++) a += segs[k].w; return X0 + a * (X1 - X0); }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<text x="' + X0 + '" y="' + (BY - 14) + '" font-size="9.5" letter-spacing="1.4" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "上槽のはじめ →" : lang === "zh" ? "上槽開始 →" : "START OF THE PRESSING →") + '</text>';
            s += '<text x="' + X1 + '" y="' + (BY - 14) + '" text-anchor="end" font-size="9.5" letter-spacing="1.4" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "→ 終わり" : lang === "zh" ? "→ 結束" : "→ END") + '</text>';
            for (var i = 0; i < segs.length; i++) {
              var g = segs[i], x = xs(i), w = g.w * (X1 - X0);
              s += '<rect x="' + x + '" y="' + BY + '" width="' + w + '" height="' + BH + '" fill="' + g.f + '" stroke="#CDC6B9"/>';
              s += '<text x="' + (x + w / 2) + '" y="' + (BY + 20) + '" text-anchor="middle" font-size="14" fill="#201E1B">' + g.jp + '</text>';
              s += '<text x="' + (x + w / 2) + '" y="' + (BY + 34) + '" text-anchor="middle" font-size="9" font-style="italic" fill="#55504A">' + g.r + '</text>';
              s += '<text x="' + (x + w / 2) + '" y="' + (BY + BH + 15) + '" text-anchor="middle" font-size="10" fill="#8B857C">' + Math.round(g.w * 100) + '%</text>';
            }
            var LY0 = BY + BH + 30, LY1 = LY0 + 62;
            function ly(v) { return LY1 - v * (LY1 - LY0); }
            s += '<line x1="' + X0 + '" y1="' + LY1 + '" x2="' + X1 + '" y2="' + LY1 + '" stroke="#E1DCD2"/>';
            var pressure = [[0,0.03],[0.14,0.10],[0.4,0.30],[0.72,0.62],[0.88,0.84],[1,0.95]];
            var clarity  = [[0,0.18],[0.10,0.52],[0.30,0.82],[0.62,0.86],[0.80,0.66],[1,0.40]];
            function path(a) { var d = "", k; for (k = 0; k < a.length; k++) d += (k ? " L" : "M") + (X0 + a[k][0] * (X1 - X0)) + " " + ly(a[k][1]); return d; }
            s += '<path d="' + path(pressure) + '" fill="none" stroke="#7C6B52" stroke-width="1.6"/>';
            s += '<path d="' + path(clarity) + '" fill="none" stroke="#8B9BA6" stroke-width="1.6" stroke-dasharray="4 3"/>';
            s += '<text x="' + (X1 - 4) + '" y="' + (ly(0.95) - 8) + '" text-anchor="end" font-size="10.5" fill="#7C6B52">' +
                 (lang === "ja" ? "圧" : lang === "zh" ? "壓力" : "pressure") + '</text>';
            s += '<text x="' + (X0 + 0.30 * (X1 - X0)) + '" y="' + (ly(0.82) - 8) + '" text-anchor="middle" font-size="10.5" fill="#8B9BA6">' +
                 (lang === "ja" ? "澄み" : lang === "zh" ? "澄清度" : "clarity") + '</text>';
            var cjk = (lang !== "en"), per = cjk ? 21 : 40;
            var CW = (X1 - X0) / 3, TY = LY1 + 28;
            for (i = 0; i < segs.length; i++) {
              var cx2 = X0 + i * CW;
              s += '<line x1="' + cx2 + '" y1="' + (TY - 16) + '" x2="' + (cx2 + CW - 16) + '" y2="' + (TY - 16) + '" stroke="#E1DCD2"/>';
              s += '<text x="' + cx2 + '" y="' + TY + '" font-size="11.5" fill="#201E1B">' + segs[i].jp + '</text>';
              var lines = wrap(L(segs[i].d), cjk, per);
              for (var q = 0; q < lines.length; q++) {
                s += '<text x="' + cx2 + '" y="' + (TY + 17 + q * 13) + '" font-size="9.5" fill="#8B857C">' + esc(lines[q]) + '</text>';
              }
            }
            s += '<text x="' + X0 + '" y="' + (H - 10) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "ほとんどの酒は三つすべてを混ぜて出される。分けて瓶詰されるのは、分けること自体が売りとなる場合のみである。"
                  : lang === "zh" ? "多數清酒是三段混合後出貨。只有在「分開」本身就是賣點時，才會分別裝瓶。"
                  : "Most sake is all three blended back together. A fraction is bottled separately only when the separation is itself the selling point.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"A press does not deliver one liquid. What comes out first, what comes out in the middle and what comes out under full pressure are three noticeably different sakes, and a brewery may bottle them separately, blend them back together, or sell only the middle and use the rest elsewhere.",
          ja:"槽から出てくるのは一つの液体ではない。最初に出るもの、中ほどで出るもの、強い圧の下で出るものは、はっきりと異なる三つの酒である。蔵はそれらを分けて瓶詰めすることも、戻して調合することも、中ほどだけを売って残りを他に回すこともある。",
          zh:"壓榨並不會產出單一一種液體。最先流出的、中段流出的，以及在全壓下擠出的，是三款明顯不同的酒。酒藏可以分別裝瓶、調和回一起，或只賣中段而把其餘用於他處。" } },
        { t:"table",
          cols:[{en:"Fraction",ja:"部分",zh:"段別"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Pressure",ja:"圧",zh:"壓力"},{en:"Character",ja:"性格",zh:"性格"}],
          jpCols:[1],
          rows:[
            [{en:"Arabashiri",ja:"あらばしり",zh:"荒走"},"荒走り",
             {en:"None — free run",ja:"無圧・自然に流れる",zh:"無壓・自然流出"},
             {en:"The first liquid to fall through under its own weight. Slightly cloudy, gassy, sharp and exuberant, with a green edge. Bottled on its own it is a winter product, sold fresh, and it is the closest a bottle gets to standing beside the press.",ja:"自らの重みで最初に落ちる液。わずかに濁り、ガスを含み、鋭く奔放で、青い角をもつ。単独で瓶詰めされれば冬の商品となり、搾りたてで売られる。槽の傍らに立つことに、瓶として最も近づいた姿である。",zh:"憑自身重量最先落下的液體。略帶混濁、含氣、銳利而奔放，帶青澀稜角。若單獨裝瓶便是冬季商品，趁鮮販售；它是酒瓶所能達到、最接近站在酒槽旁的狀態。"}],
            [{en:"Nakadori",ja:"中取り",zh:"中取"},"中取り・中汲み",
             {en:"Light",ja:"軽い圧",zh:"輕壓"},
             {en:"The middle third. Clear, balanced, and the most complete of the three — nothing is missing and nothing is exaggerated. This is what goes to competitions, what a brewery bottles as its flagship, and what the word on the label is claiming.",ja:"中ほどの三分の一。澄み、均衡がとれ、三つのうち最も完成している——欠けたものも、誇張されたものもない。鑑評会に出るのはこれであり、蔵が看板として瓶に詰めるのもこれであり、酒標の語が主張しているのもこれである。",zh:"中間三分之一。清澈、均衡，是三者中最完整的——沒有缺漏，也沒有誇張。送鑑評會的是它，酒藏作為旗艦裝瓶的是它，酒標上那個詞所主張的也是它。"}],
            [{en:"Seme",ja:"責め",zh:"責"},"責め",
             {en:"Full",ja:"強い圧",zh:"全壓"},
             {en:"The last liquid, squeezed out under real pressure. Higher in amino acids and in the compounds from the outer grain, so it is heavier, rougher and more bitter. Rarely bottled alone; it goes into blends, into cheaper lines, or into the cooking-sake trade.",ja:"最後の液であり、実際に圧をかけて絞り出したもの。アミノ酸と外層由来の成分が多く、重く、粗く、苦い。単独で瓶詰めされることはまれで、調合や低価格帯、あるいは料理酒へ回される。",zh:"最後的酒液，在真正的壓力下擠出。胺基酸與來自米外層的成分較多，因而更厚重、粗糙、偏苦。鮮少單獨裝瓶；多用於調和、平價產品線，或料理酒。"}]
          ] },
        { t:"note", label:{en:"What blending is actually for",ja:"調合の本当の役割",zh:"調和真正的用途"}, text:{
          en:"Blending has a poor reputation in English-language sake writing, and it should not. A brewery makes ten or twenty tanks in a season, no two identical, and the job of the finished product is to taste like itself every year. Blending across tanks and across fractions is how that is achieved, and it is a skill in its own right: a tōji tasting fifteen samples and deciding the proportions is doing the same work a Champagne cellarmaster does with base wines. The alternative — bottling each tank as it comes — is a different and equally legitimate choice, and a few breweries do it deliberately and say so on the label.",
          ja:"調合は英語圏の日本酒の文章では評判が悪いが、そうあるべきではない。蔵は一季に十本、二十本のタンクを仕込み、同じものは二つとない。そして仕上がった商品の仕事は、毎年それ自身の味であることである。タンクをまたぎ、部分をまたいで調合することが、それを実現する方法であり、それ自体が技術である。十五の試料を利き、比率を決める杜氏は、シャンパンの醸造長がベースワインに対して行うのと同じ仕事をしている。もう一つの道——タンクごとにそのまま瓶詰めすること——は別の、そして同じく正当な選択であり、それを意図して行い、酒標に記す蔵も少数ある。",
          zh:"調和在英文的清酒書寫中名聲不佳，但不該如此。一家酒藏一季會釀十到二十槽，沒有兩槽相同；而成品的職責，是每年都嚐起來像它自己。跨槽、跨段別的調和正是達成此事的方法，且本身就是一門技藝：杜氏品嚐十五份樣本並決定比例，所做的工作與香檳酒窖主管處理基酒完全相同。另一條路——每一槽照原樣裝瓶——是不同但同樣正當的選擇，也有少數酒藏刻意如此並在酒標上載明。" } }
      ]
    },

    { t:"section", id:"carbon",
      title:{ en:"Carbon filtration, and the case against it", ja:"炭素濾過と、それへの異議", zh:"活性碳過濾及其反對意見" }, jp:"濾過",
      body:[
        { t:"p", text:{
          en:"Powdered activated carbon is stirred into the sake and then filtered out, taking a proportion of the colour and the flavour with it. It is one of the most consequential and least discussed decisions in the whole process, and the modern <em>muroka</em> movement exists entirely as an argument about it.",
          ja:"粉末の活性炭を酒に混ぜ、のちに濾し取る。そのとき色と味の一部が一緒に去る。工程全体のなかで最も結果を左右し、最も論じられない判断の一つであり、現代の無濾過という潮流は、まるごとこれをめぐる議論として存在している。",
          zh:"把粉末活性碳拌入酒中，再過濾除去，同時帶走一部分顏色與風味。這是整個製程中最具決定性、卻最少被討論的判斷之一；而現代的「無濾過」風潮，整個就是圍繞著它而生的爭論。" } },
        { t:"compare", cols:2, items:[
          { title:{en:"What carbon does for you",ja:"炭が与えてくれるもの",zh:"活性碳的貢獻"}, jp:"利点",
            body:[{ t:"ul", plain:true, items:[
              { en:"Removes the yellow-green tint of fresh sake, giving the near-colourless liquid the market expects.",ja:"新酒の黄緑がかった色を取り除き、市場が期待するほぼ無色の液体にする。",zh:"去除新酒的黃綠色調，得到市場所期待的近乎無色酒液。" },
              { en:"Strips rough edges, bitterness and minor off-notes, so a flawed batch becomes a saleable one.",ja:"角、苦味、小さな異臭を削ぎ、欠点のある仕込みを売れるものに変える。",zh:"削去稜角、苦味與輕微異味，使有瑕疵的一批酒變得可售。" },
              { en:"Slows browning in the bottle, because much of what browns has been taken out.",ja:"瓶内での褐変を遅らせる。褐変するものの多くが、すでに取り除かれているためである。",zh:"減緩瓶中褐變，因為會褐變的成分多已被除去。" },
              { en:"Makes a product consistent across tanks and across years.",ja:"タンクをまたぎ、年をまたいで、製品を一定にする。",zh:"使產品在不同槽、不同年份之間保持一致。" }
            ] }] },
          { title:{en:"What carbon takes from you",ja:"炭が奪うもの",zh:"活性碳的代價"}, jp:"代償",
            body:[{ t:"ul", plain:true, items:[
              { en:"Aroma compounds, including the esters that carry ginjō character. It is not selective.",ja:"香気成分。吟醸香を担うエステルも含む。炭は選り好みをしない。",zh:"香氣成分，包括承載吟釀性格的酯類。它並不挑選。" },
              { en:"Body and the sense of texture, along with the colour that came with them.",ja:"厚みと質感、そしてそれらとともにあった色。",zh:"酒體與質地感，連同伴隨它們的顏色。" },
              { en:"Some of what would have developed with a year in the tank.",ja:"タンクで一年を過ごせば育ったはずのものの一部。",zh:"若在槽中放上一年本會發展出的部分風味。" },
              { en:"The individuality of the batch — which is precisely the point for a large producer and precisely the loss for a small one.",ja:"その仕込みの個性。大きな造り手にとってはまさにそれが目的であり、小さな造り手にとってはまさにそれが損失である。",zh:"該批酒的個性——對大型生產者而言這正是目的，對小型生產者而言則正是損失。" }
            ] }] }
        ] },
        { t:"p", text:{
          en:"The dose is the whole argument. A light touch of carbon on a clean sake removes a haze and almost nothing else; a heavy dose on a rough one removes the roughness and much of the character with it. Almost every brewery uses some, most say nothing about it, and a growing minority use none and put <em>muroka</em> on the label in large type. A muroka sake is usually faintly golden, fuller, and more clearly itself — including any flaws it has, which is the deal.",
          ja:"議論のすべては量にある。清らかな酒への軽い炭は、霞を取り去るだけでほとんど何も奪わない。粗い酒への多量の炭は、粗さとともに個性の多くを取り去る。ほとんどの蔵はいくらか用い、その多くは何も語らない。そして用いない蔵が増え、酒標に大きく「無濾過」と記す。無濾過の酒はたいていかすかに金色を帯び、厚く、より明瞭にそれ自身である——欠点も含めて。それがこの取引の条件である。",
          zh:"整場爭論的關鍵在於用量。對一款潔淨的酒輕觸活性碳，只會除去霧感，幾乎不奪走別的；對一款粗糙的酒重手處理，則會連同粗糙一併帶走大半個性。幾乎每家酒藏都會用一些，多數對此隻字不提，而愈來愈多的少數派完全不用，並在酒標上以大字寫下「無濾過」。無濾過的酒通常略帶金色、更飽滿，也更清楚地是它自己——包括它的缺陷在內，這正是這筆交易的條件。" } }
      ]
    },

{ t:"section", id:"press-to-bottle",
      title:{ en:"From press to bottle, day by day", ja:"上槽から瓶詰めまで、日を追って", zh:"從上槽到裝瓶，逐日推進" }, jp:"工程の順序",
      body:[
        { t:"p", text:{
          en:"Pressing is not the end of production; it is the start of a second sequence of decisions, and most of what separates two bottles from the same tank happens here. Each step below is optional or adjustable, and a brewery's choices across the whole sequence are as much a signature as the brewing itself.",
          ja:"上槽は製造の終わりではない。第二の判断の連なりの始まりであり、同じタンクから出た二本を分かつものの大半は、ここで起こる。以下の各段はいずれも省きうるか、加減しうる。この連なり全体にわたる蔵の選択は、造りそのものと同じだけ署名である。",
          zh:"上槽不是生產的終點，而是第二串決策的起點；同一槽酒的兩支成品之所以不同，大半就發生在這裡。以下每一步都可省略或可調整，而一家酒藏在整串流程上的選擇，與釀造本身同樣是一種署名。" } },

        { t:"table",
          cols:[{en:"Step",ja:"工程",zh:"工序"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"When",ja:"時期",zh:"時間"},{en:"The decision",ja:"判断",zh:"這一步的抉擇"}],
          jpCols:[1],
          rows:[
            [{en:"Pressing",ja:"上槽",zh:"上槽"},"上槽",{en:"Day 0",ja:"0日目",zh:"第 0 天"},
             {en:"Machine press, box press or drip. Also when to stop: the last, hardest-pressed fraction is coarse, and abandoning it costs yield.",
              ja:"自動圧搾機か、槽か、雫か。そしていつ止めるか——最後の、最も強く搾られた画分は粗く、それを捨てれば歩留まりを失う。",
              zh:"用機器壓榨、木槽壓榨，還是滴取。以及何時停手：最後那段壓得最重的酒粗糙，捨棄它就要付出產率的代價。"}],
            [{en:"Settling",ja:"滓引き",zh:"滓引"},"滓引き",{en:"Days 3–10",ja:"3〜10日目",zh:"第 3–10 天"},
             {en:"Fine solids sink over about a week and the clear sake is drawn off the top. Bottling before this is complete gives <em>origarami</em> — deliberately hazy sake with the fine lees still in suspension.",
              ja:"細かな滓は一週ほどで沈み、上澄みを引く。これを終える前に詰めれば「おりがらみ」——細かな滓を残した、意図された霞である。",
              zh:"細微固形物約在一週內沉降，再把上層清酒抽出。若在完成前就裝瓶，便是「おりがらみ」——刻意保留細滓、呈懸浮霧狀的酒。"}],
            [{en:"Filtration",ja:"濾過",zh:"過濾"},"濾過",{en:"Days 7–14",ja:"7〜14日目",zh:"第 7–14 天"},
             {en:"Diatomaceous earth for clarity, activated carbon for colour and off-aromas. Carbon is the contested step: it cleans up a flawed sake and it flattens a good one. <em>Muroka</em> means the carbon was skipped, not that no filtration occurred.",
              ja:"清澄には珪藻土、色と雑味には活性炭。争点は炭である——欠点のある酒を整え、よい酒を平板にする。無濾過とは、炭を省いた意味であって、濾過を一切していない意味ではない。",
              zh:"以矽藻土求澄清，以活性碳去色與去雜味。有爭議的是炭：它能修飾有瑕疵的酒，也會磨平一支好酒。「無濾過」指的是略過炭處理，而非完全未經過濾。"}],
            [{en:"First pasteurisation",ja:"一回目の火入れ",zh:"第一次火入"},"火入れ",{en:"Days 10–20",ja:"10〜20日目",zh:"第 10–20 天"},
             {en:"About 62–68 °C, to kill hiochi bacteria and deactivate the kōji enzymes. Skipping it gives a <em>nama</em>, which then needs an unbroken cold chain for the rest of its life.",
              ja:"およそ62〜68℃。火落菌を殺し、麹の酵素を失活させる。これを省けば生酒となり、以後その一生を通じて途切れぬ冷たい流通を要する。",
              zh:"約 62–68 °C，用以殺死火落菌並使麴酵素失活。略過這一步便是「生酒」，此後終其一生都需要不中斷的冷鏈。"}],
            [{en:"Storage",ja:"貯蔵",zh:"貯藏"},"貯蔵",{en:"3–6 months",ja:"三〜六か月",zh:"3–6 個月"},
             {en:"Tank maturation over the summer, where the raw edges of a new sake knit together. Cold storage keeps the sake bright and slows this; cellar temperature deepens it. This single choice separates a fresh-styled house from a matured-styled one.",
              ja:"夏を越すタンクでの熟成。新酒の粗い角がまとまる期間である。低温はきれいさを保ってこれを遅らせ、蔵の温度は深める。この一つの選択が、新鮮さを型とする蔵と熟成を型とする蔵とを分かつ。",
              zh:"在酒槽中度過夏天的熟成，新酒粗糙的稜角在此整合起來。低溫保持明亮並減緩此過程，窖溫則使之加深。單這一個選擇，就區分了走新鮮路線與走熟成路線的酒藏。"}],
            [{en:"Blending",ja:"調合",zh:"調和"},"調合",{en:"Before bottling",ja:"瓶詰め前",zh:"裝瓶前"},
             {en:"Tanks are rarely bottled alone. Blending across tanks gives the consistency a customer expects from a familiar label, and it is the least discussed and most skilled judgement in the whole process.",
              ja:"タンクが単独で詰められることは稀である。タンクをまたいだ調合が、見慣れた銘柄に客が期待する一貫性を与える。工程全体のうち、最も語られず、最も技を要する判断である。",
              zh:"酒槽很少單獨裝瓶。跨槽調和賦予顧客對熟悉品牌所期待的一致性，而這是整個製程中最少被談論、也最需要功力的判斷。"}],
            [{en:"Dilution",ja:"割水",zh:"割水"},"割水",{en:"Before bottling",ja:"瓶詰め前",zh:"裝瓶前"},
             {en:"Sake ferments to 17–20% and is normally brought down to 15–16%. Declining to do this gives a <em>genshu</em>. The dilution is a large fraction of the finished liquid, so the blending water is chosen as carefully as the mash water.",
              ja:"酒は17〜20%まで発酵し、通常は15〜16%まで下げられる。これを断れば原酒である。加水は最終的な液の相当な割合を占めるから、割水は仕込水と同じだけ丁寧に選ばれる。",
              zh:"酒發酵至 17–20%，通常再降到 15–16%。若拒絕這麼做，就是原酒。加水占了成品液體相當的比例，因此割水的挑選與仕込水一樣講究。"}],
            [{en:"Second pasteurisation",ja:"二回目の火入れ",zh:"第二次火入"},"瓶燗",{en:"At bottling",ja:"瓶詰め時",zh:"裝瓶時"},
             {en:"Most sake is pasteurised twice. Skipping the second gives <em>namazume</em>, the autumn hiyaoroshi style; skipping the first but not the second gives <em>nama-chozō</em>. These three permutations are why the vocabulary is confusing and why it matters.",
              ja:"多くの酒は二度火入れされる。二度目を省けば生詰、すなわち秋のひやおろしの型となる。一度目を省いて二度目を行えば生貯蔵酒である。この三つの順列こそが、語彙を紛らわしくし、そして重要にしている。",
              zh:"多數清酒火入兩次。略過第二次即為「生詰」，也就是秋季冷卸的類型；略過第一次而保留第二次則是「生貯藏酒」。正是這三種排列組合，讓相關詞彙既令人混淆、又如此重要。"}],
            [{en:"Bottling",ja:"瓶詰め",zh:"裝瓶"},"瓶詰め",{en:"The last step",ja:"最後の工程",zh:"最後一步"},
             {en:"Bottle colour matters more than most drinkers realise: dark glass or a paper wrap protects against the light damage that can spoil a sake in an afternoon. Cap type, fill level and headspace all affect how the bottle ages afterwards.",
              ja:"瓶の色は多くの飲み手が思うより重要である。濃色の硝子や紙の巻きは、ひと午後で酒を損ないうる光の害から守る。栓の種類、充填の高さ、空間の量は、いずれも以後の熟成に影響する。",
              zh:"瓶身顏色比多數飲者以為的更重要：深色玻璃或紙包能抵擋一個下午就足以毀掉一支酒的光害。瓶蓋型式、充填高度與頂空，也都影響這支酒此後如何熟成。"}]
          ] },

        { t:"panel", title:{ en:"Reading the permutations", ja:"順列を読む", zh:"讀懂這些排列" },
          body:[
            { t:"table",
              cols:[{en:"Term",ja:"用語",zh:"用語"},{en:"Before storage",ja:"貯蔵前",zh:"貯藏前"},{en:"At bottling",ja:"瓶詰め時",zh:"裝瓶時"},{en:"What it tastes like",ja:"味の傾向",zh:"喝起來如何"}],
              rows:[
                [{en:"Standard",ja:"通常",zh:"標準"},{en:"Pasteurised",ja:"火入れ",zh:"火入"},{en:"Pasteurised",ja:"火入れ",zh:"火入"},
                 {en:"Stable, settled, shelf-safe. The default, and the reason most sake needs no refrigeration.",ja:"安定し、落ち着き、常温で持つ。既定であり、多くの酒が冷蔵を要さない理由である。",zh:"穩定、沉靜、可常溫上架。這是預設狀態，也是多數清酒不需冷藏的原因。"}],
                [{en:"Nama-chozō",ja:"生貯蔵酒",zh:"生貯藏酒"},{en:"Not pasteurised",ja:"火入れせず",zh:"不火入"},{en:"Pasteurised",ja:"火入れ",zh:"火入"},
                 {en:"Fresher than standard, still shelf-stable. A compromise, and a common one for summer releases.",ja:"通常より新鮮でありながら、常温で持つ。妥協であり、夏の商品に多い。",zh:"比標準款更鮮活，卻仍能常溫保存。這是一種折衷，也是夏季酒款常見的做法。"}],
                [{en:"Nama-zume",ja:"生詰酒",zh:"生詰酒"},{en:"Pasteurised",ja:"火入れ",zh:"火入"},{en:"Not pasteurised",ja:"火入れせず",zh:"不火入"},
                 {en:"Matured over the summer and then shipped without a second heating. The autumn hiyaoroshi: rounder and deeper than the same sake was in spring.",ja:"夏を越して熟成し、二度目の加熱をせずに出荷される。秋のひやおろしであり、春の同じ酒より丸く深い。",zh:"經過整個夏天熟成，然後不再加熱即出貨。這就是秋季的冷卸：比同一支酒在春天時更圓潤深沉。"}],
                [{en:"Nama-zake",ja:"生酒",zh:"生酒"},{en:"Not pasteurised",ja:"火入れせず",zh:"不火入"},{en:"Not pasteurised",ja:"火入れせず",zh:"不火入"},
                 {en:"Never heated at all. The most alive and the most fragile; needs cold from brewery to glass and does not wait.",ja:"一度も加熱していない。最も生き生きとし、最も脆い。蔵から杯まで冷たさを要し、待ってはくれない。",zh:"從未加熱。最鮮活也最脆弱；從酒藏到酒杯都需要低溫，而且不等人。"}]
              ] }
          ] }
      ] },

    { t:"related", items:[
      { href:"equipment.html", why:{ en:"The three machines, and what each does to the liquid.", ja:"三つの機械と、それぞれが液になすこと。", zh:"三種機器，以及它們各自對液體做了什麼。" } },
      { href:"kasu.html", why:{ en:"What stays behind in the cloth.", ja:"布のなかに残るもの。", zh:"留在濾布裡的東西。" } },
      { href:"storage.html", why:{ en:"The months between pressing and the shop.", ja:"上槽と店とのあいだの数ヶ月。", zh:"上槽與店頭之間的那幾個月。" } },
      { href:"styles.html", why:{ en:"The words on a label that describe this step.", ja:"この段を記す、札の上の語。", zh:"酒標上用來描述這一步的那些詞。" } }
    ] }
  ]
};


/* ---- ------------------------------------------- equipment */
SAKE.pages["equipment"] = {
  kicker: { en: "Making · 11", ja: "造り · 11", zh: "釀造 · 11" },
  title:  { en: "The Kura & Its Tools", ja: "蔵と道具", zh: "酒藏與器具" },
  jp: "建物・設備・道具",
  lede: {
    en: "A sake brewery is a building designed around a temperature curve and a gravity flow. Rice goes in at the top or the far end, and everything after that moves downhill and gets colder. Some of the equipment inside has not changed in three centuries; some of it was invented in the 1930s and changed the industry completely; and the choice between an old tool and a new one is often the most consequential decision a brewery makes, because it decides what kind of sake the building is able to produce.",
    ja: "酒蔵とは、温度の曲線と重力の流れを軸に設計された建物である。米は上階か奥から入り、その後のすべては下へ向かい、冷たくなっていく。なかにある道具の一部は三世紀のあいだ変わらず、一部は一九三〇年代に生まれて業界を一変させた。そして古い道具と新しい道具の選択は、しばしば蔵にとって最も結果を左右する決定である。その建物がどんな酒を造りうるかを、それが決めてしまうからである。",
    zh: "酒藏是一棟圍繞著溫度曲線與重力流動而設計的建築。米自頂層或最深處進入，此後的一切都往下走、也愈來愈冷。其中有些器具三百年來未曾改變，有些則誕生於 1930 年代並徹底改變了整個產業；而在舊器具與新設備之間的取捨，往往是一家酒藏最具決定性的抉擇，因為它決定了這棟建築能釀出什麼樣的酒。"
  },
  body: [

    { t:"section", id:"building",
      title:{ en:"The building", ja:"建物", zh:"建築" }, jp:"蔵の構造",
      body:[
        { t:"figure",
          caption:{
            en:"A traditional kura in section. The plan is a single idea carried through three storeys: rice enters at the top and every stage after that moves it downward, so nothing ever has to be lifted or pumped against gravity. The high roof and its ridge vent exist to take the steam off the rice; the thick walls and small openings hold a stable winter temperature without machinery; the kōji room is a heavily insulated box built inside the building rather than a part of it. Modern breweries are usually single-storey sheds with pumps, and they work — but the shape of the old building is an argument, not a decoration.",
            ja:"伝統的な蔵の断面。その設計は、三層を貫く一つの考えである——米は最上階から入り、その後のあらゆる工程はそれを下へ動かす。ゆえに、重力に逆らって持ち上げたり汲み上げたりする必要が生じない。高い屋根と棟の抜けは、米から立つ蒸気を逃がすために在る。厚い壁と小さな開口は、機械を用いずに冬の温度を一定に保つ。麹室は建物の一部というより、そのなかに建てられた、厚く断熱された箱である。現代の蔵はたいてい平屋の建屋にポンプを備え、それで用は足りる。だが古い建物の形は、装飾ではなく、一つの主張である。",
            zh:"傳統酒藏的剖面。它的配置貫徹著單一個想法：米從最上層進入，之後每一道工序都把它往下送，因此任何東西都不必逆著重力被抬升或泵送。高聳的屋頂與屋脊通風口，是為了帶走米上升起的蒸氣；厚牆與小開口，讓建築不靠機械也能維持穩定的冬季溫度；麴室則是一個蓋在建築「之內」、而非屬於建築一部分的厚重隔熱箱。現代酒藏多半是配有泵浦的單層廠房，而且運作良好——但老建築的形狀不是裝飾，是一個論點。" },
          svg: function (lang, L) {
            var W = 760, H = 442, GND = 330, WL = 120, WR = 620;
            var F3 = 106, F2 = 176, F1 = 250;
            function box(x, y, w, h, f, st, sw) {
              return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + f +
                     '" stroke="' + (st || "#B4AC9C") + '"' + (sw ? ' stroke-width="' + sw + '"' : '') + '/>';
            }
            function num(n, x, y) {
              return '<rect x="' + (x - 8) + '" y="' + (y - 8) + '" width="16" height="16" fill="#FBFAF7" stroke="#8B857C"/>' +
                     '<text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#55504A">' + n + '</text>';
            }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* roof */
            s += '<path d="M108 ' + F3 + ' L370 44 L632 ' + F3 + ' Z" fill="#DCD6C8" stroke="#B4AC9C"/>';
            s += box(346, 22, 48, 22, "#E7DFD2");
            s += '<path d="M338 22 L370 8 L402 22 Z" fill="#DCD6C8" stroke="#B4AC9C"/>';
            /* body and walls */
            s += box(WL, F3, WR - WL, GND - F3, "#FBFAF7");
            s += '<line x1="' + (WL + 9) + '" y1="' + F3 + '" x2="' + (WL + 9) + '" y2="' + GND + '" stroke="#DED8CB"/>';
            s += '<line x1="' + (WR - 9) + '" y1="' + F3 + '" x2="' + (WR - 9) + '" y2="' + GND + '" stroke="#DED8CB"/>';
            s += '<line x1="' + WL + '" y1="' + F2 + '" x2="' + WR + '" y2="' + F2 + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + WL + '" y1="' + F1 + '" x2="' + WR + '" y2="' + F1 + '" stroke="#B4AC9C"/>';
            s += '<line x1="60" y1="' + GND + '" x2="' + (W - 40) + '" y2="' + GND + '" stroke="#8B857C"/>';
            /* third floor: mill, sacks, steaming vat */
            s += box(146, 112, 30, 64, "#E6E4E0");
            s += num("1", 161, 144);
            s += box(196, 148, 26, 28, "#EDE5D2") + box(226, 148, 26, 28, "#EDE5D2") + box(211, 120, 26, 28, "#EDE5D2");
            s += '<path d="M300 176 L312 128 L378 128 L390 176 Z" fill="#E7DFD2" stroke="#B4AC9C"/>';
            s += num("2", 345, 158);
            var st;
            for (st = 0; st < 3; st++) {
              s += '<line x1="' + (322 + st * 23) + '" y1="120" x2="' + (334 + st * 23) + '" y2="' + (74 + st * 6) + '" stroke="#CDC6B9"/>';
            }
            /* second floor: koji room, cooling belt, starter tubs */
            s += box(146, 186, 128, 60, "#EDE5D2", "#A08F73", 2);
            s += '<text x="210" y="220" text-anchor="middle" font-size="13" fill="#55504A">麹室</text>';
            s += num("3", 210, 240);
            s += box(300, 190, 124, 14, "#E6E4E0");
            s += num("4", 362, 216);
            var tb;
            for (tb = 0; tb < 3; tb++) s += box(452 + tb * 50, 212, 38, 34, "#DDE5E8");
            s += num("5", 521, 196);
            /* first floor: mash tanks, press, storage */
            var mt;
            for (mt = 0; mt < 3; mt++) s += box(146 + mt * 68, 258, 56, 72, "#DDE5E8");
            s += num("6", 174, 294);
            s += box(370, 266, 96, 64, "#E2D8C6");
            var sl;
            for (sl = 1; sl < 6; sl++) s += '<line x1="' + (370 + sl * 16) + '" y1="266" x2="' + (370 + sl * 16) + '" y2="330" stroke="#CDC6B9"/>';
            s += num("7", 418, 296);
            s += box(500, 262, 96, 68, "#DDE5E8");
            s += num("8", 548, 296);
            /* sugidama under the eave */
            s += '<line x1="640" y1="' + (F3 + 1) + '" x2="640" y2="110" stroke="#B4AC9C"/>';
            s += box(630, 110, 20, 20, "#DDE1D6", "#A9B3A4");
            s += '<text x="656" y="124" font-size="9.5" fill="#8B857C">杉玉</text>';
            /* floor labels */
            var floors = [
              { y:(F3 + F2) / 2, jp:"三階", n:{ en:"rice comes in", ja:"米はここから入る", zh:"米從這裡進來" } },
              { y:(F2 + F1) / 2, jp:"二階", n:{ en:"kōji and starter", ja:"麹と酒母", zh:"麴與酒母" } },
              { y:(F1 + GND) / 2, jp:"一階", n:{ en:"mash and press", ja:"醪と搾り", zh:"醪與壓榨" } }
            ];
            var i;
            for (i = 0; i < floors.length; i++) {
              s += '<text x="104" y="' + (floors[i].y - 2) + '" text-anchor="end" font-size="12.5" fill="#201E1B">' + floors[i].jp + '</text>';
              s += '<text x="104" y="' + (floors[i].y + 12) + '" text-anchor="end" font-size="9" fill="#8B857C">' + L(floors[i].n) + '</text>';
            }
            /* the descent */
            s += '<line x1="700" y1="' + (F3 + 56) + '" x2="700" y2="' + (GND - 4) + '" stroke="#A08F73" stroke-dasharray="5 4"/>';
            var ay;
            for (ay = 0; ay < 3; ay++) {
              var yy = [F2, F1, GND][ay];
              s += '<path d="M700 ' + yy + ' L694 ' + (yy - 9) + ' L706 ' + (yy - 9) + ' Z" fill="#A08F73"/>';
            }
            s += '<text x="700" y="' + (F3 + 44) + '" text-anchor="middle" font-size="9.5" fill="#7C6B52">' +
                 (lang === "ja" ? "すべては下へ動く" : lang === "zh" ? "一切都往下走" : "all the way down") + '</text>';
            /* key */
            var keys = [
              { n:"1", jp:"竪型精米機", t:{ en:"the vertical rice mill", ja:"米を磨く", zh:"直立式精米機" } },
              { n:"2", jp:"甑", t:{ en:"the steaming vat", ja:"米を蒸す", zh:"蒸米的甑" } },
              { n:"3", jp:"麹室", t:{ en:"the kōji room, a box within the building", ja:"建物のなかに建てた箱", zh:"蓋在建築之內的箱子" } },
              { n:"4", jp:"放冷機", t:{ en:"the cooling belt", ja:"蒸米を冷ます", zh:"放冷輸送帶" } },
              { n:"5", jp:"酛場", t:{ en:"the starter tubs", ja:"酒母を育てる", zh:"培養酒母之處" } },
              { n:"6", jp:"仕込タンク", t:{ en:"the main mash tanks", ja:"醪を仕込む", zh:"仕込醪的槽" } },
              { n:"7", jp:"槽場", t:{ en:"the press room", ja:"酒を搾る", zh:"壓榨室" } },
              { n:"8", jp:"貯蔵タンク", t:{ en:"the storage tanks", ja:"酒を貯える", zh:"貯藏槽" } }
            ];
            var kx, ky;
            for (i = 0; i < keys.length; i++) {
              kx = 30 + (i % 2) * 372; ky = 358 + Math.floor(i / 2) * 17;
              s += '<rect x="' + kx + '" y="' + (ky - 9) + '" width="12" height="12" fill="#FBFAF7" stroke="#ADA79E"/>';
              s += '<text x="' + (kx + 6) + '" y="' + (ky - 0.5) + '" text-anchor="middle" font-size="8.5" fill="#55504A">' + keys[i].n + '</text>';
              s += '<text x="' + (kx + 20) + '" y="' + ky + '" font-size="10" fill="#201E1B">' + keys[i].jp + '</text>';
              s += '<text x="' + (kx + 20 + keys[i].jp.length * 10 + 8) + '" y="' + ky + '" font-size="9" fill="#8B857C">' + L(keys[i].t) + '</text>';
            }
            s += '<text x="30" y="' + (H - 8) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "断面は模式であり、蔵ごとに配置は異なる。変わらぬのは順序である——上から下へ、そして決して逆へは戻らない。"
                  : lang === "zh" ? "剖面為示意，各家酒藏配置不一。不變的是順序：由上而下，且絕不回頭。"
                  : "The section is schematic and every brewery is laid out differently. What does not vary is the order: top to bottom, and never back up.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"A traditional kura is a heavy-walled, thick-timbered structure with small openings, built to hold a stable low temperature through a winter without any machinery. Thick earthen or plaster walls give thermal mass; a high roof lets steam and heat leave the rice-handling area; and the floors are arranged so that material moves downward at each stage and never has to be pumped uphill.",
          ja:"伝統的な蔵は、壁が厚く材が太く、開口の小さい建物であり、機械を用いずに冬のあいだ低く安定した温度を保つために建てられている。厚い土壁や漆喰の壁が熱容量を与え、高い屋根が米を扱う場から蒸気と熱を逃がし、各段階で材料が下へ移り、上へ汲み上げずに済むよう床が配される。",
          zh:"傳統酒藏是牆厚、樑粗、開口小的建築，其設計是為了在不依賴任何機械的情況下，於整個冬季維持穩定的低溫。厚實的土牆或灰泥牆提供熱質量；高聳的屋頂讓蒸氣與熱從處理米的區域散出；樓層的配置則使物料在每個階段都向下移動，無需向上泵送。" } },
        { t:"defs", items:[
          { term:{en:"Kōji-muro",ja:"麹室",zh:"麴室"}, jp:"麹室", romaji:"kōji-muro",
            def:{en:"An insulated room inside the brewery, traditionally lined with cedar, held at 30–35°C and high humidity for the two days of kōji making. It is the warmest and cleanest room in the building and the one place nobody enters casually. Cedar is used because it buffers humidity and resists the mould species you do not want.",
              ja:"蔵のなかに設けられた断熱の部屋で、伝統的には杉板張り。麹造りの二日間、30〜35度と高い湿度に保たれる。建物のなかで最も温かく、最も清浄な部屋であり、誰もが気軽に入る場所ではない。杉が用いられるのは、湿度を緩衝し、望まぬ菌に抗するからである。",
              zh:"設於酒藏內部的隔熱房間，傳統上以杉木板鋪設，在製麴的兩天內維持 30–35°C 與高濕度。它是建築中最溫暖也最潔淨的房間，且無人可隨意進入。使用杉木是因為它能緩衝濕度，並抵禦不受歡迎的黴菌。"} },
          { term:{en:"Sugidama",ja:"杉玉",zh:"杉玉"}, jp:"杉玉・酒林", romaji:"sugidama",
            def:{en:"A ball of cedar branches hung under the eaves when the new sake is pressed. It is green when hung in winter and brown by the following autumn, which makes it a public signal of how the year's sake is maturing. The custom is associated with Ōmiwa Shrine in Nara, which supplies many of them.",
              ja:"新酒を搾ったときに軒下へ吊るす杉の葉の玉。冬に吊るされたときは青く、翌秋には茶に変わる。その年の酒の熟し具合を外に知らせる合図である。この習わしは奈良の大神神社に結びつき、その多くが同社から出ている。",
              zh:"新酒榨出時懸掛於屋簷下的杉葉球。冬天掛上時是綠色，到隔年秋天已轉為褐色，因而成為對外昭示今年之酒熟成到何種程度的訊號。此習俗與奈良的大神神社相關，許多杉玉即出自該社。"} },
          { term:{en:"Yuki-muro",ja:"雪室",zh:"雪室"}, jp:"雪室",
            def:{en:"A snow store: a chamber packed with winter snow that holds a stable 2–5°C at very high humidity through the following summer, with no electricity. Used for maturing sake in Niigata and other snow-country prefectures, and enjoying a revival on energy-cost grounds as much as romantic ones.",
              ja:"雪室。冬の雪を詰めた室で、電気を使わずに翌夏まで2〜5度と非常に高い湿度を保つ。新潟をはじめとする雪国の県で酒の熟成に用いられ、情緒だけでなくエネルギー費用の観点からも見直されている。",
              zh:"雪室：填入冬雪的空間，可在不用電的情況下維持 2–5°C 與極高濕度直到隔年夏天。新潟等雪國縣份用它熟成清酒，如今其復興既出於情懷，也同樣出於能源成本的考量。"} }
        ] }
      ]
    },

    { t:"section", id:"tools",
      title:{ en:"The tools, old and new", ja:"道具——古いものと新しいもの", zh:"器具：新與舊" }, jp:"設備一覧",
      body:[
        { t:"table",
          caption:{en:"What each piece of equipment does, and what replaced it",ja:"それぞれの道具の役割と、その後継",zh:"各項器具的功能，以及取代它的東西"},
          cols:[{en:"Tool",ja:"道具",zh:"器具"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Stage",ja:"工程",zh:"工序"},{en:"What it does",ja:"働き",zh:"作用"}],
          jpCols:[1],
          rows:[
            [{en:"Rice mill",ja:"精米機",zh:"精米機"},"精米機",
             {en:"Milling",ja:"精米",zh:"精米"},
             {en:"Vertical abrasive-roll mills, commercialised by Satake in the 1930s, replaced horizontal mills and water-driven stones. This is the single invention that made daiginjō possible: milling below about 60% was not practical before it, and modern machines reach 20% and beyond. A flat-milling variant removes the outer layers evenly rather than turning the grain into a sphere.",ja:"竪型の研削式精米機は一九三〇年代にサタケが実用化し、横型や水車の石臼に取って代わった。大吟醸を可能にしたのはこの一つの発明である。それ以前、精米歩合60%程度より深く削ることは実用的でなかった。現代の機械は20%やそれ以下にも達する。扁平精米という方式は、粒を球にするのではなく外層を均等に削る。",zh:"1930 年代由佐竹（Satake）商品化的立式研削精米機，取代了臥式精米機與水車石磨。這是讓大吟釀成為可能的唯一一項發明：在此之前，削至精米步合約 60% 以下並不實際，而現代機器可達 20% 甚至更低。「扁平精米」則是均勻削去外層，而非把米粒磨成球形。"}],
            [{en:"Steaming vessel",ja:"甑",zh:"甑"},"甑",
             {en:"Steaming",ja:"蒸し",zh:"蒸米"},
             {en:"A large tub, historically wooden, now usually stainless, that steams rice from below with dry steam rather than boiling it. The rice at the top and bottom of a koshiki cooks differently, and managing that is a real skill. Continuous belt steamers do the same job at volume.",ja:"大きな桶で、かつては木、いまは多くがステンレス。下から乾いた蒸気を通し、茹でるのではなく蒸す。甑の上部と下部では蒸し上がりが異なり、それを御するのは確かな技術である。連続蒸米機は同じ仕事を量産の規模で行う。",zh:"一具大桶，過去為木製，如今多為不鏽鋼。以乾蒸氣自下方蒸米而非水煮。甑中上層與下層的米熟度不同，掌控此事是實實在在的技藝。連續式蒸米機則以量產規模完成同樣的工作。"}],
            [{en:"Cooling belt",ja:"放冷機",zh:"放冷機"},"放冷機",
             {en:"Cooling",ja:"放冷",zh:"冷卻"},
             {en:"Steamed rice must be cooled fast and evenly to the exact temperature each destination needs — different for kōji, starter and each mash addition. Done by hand on cloth for small batches and by air belt for large ones.",ja:"蒸米は、行き先ごとに必要な正確な温度まで、速く均一に冷まさねばならない。麹、酒母、そして各段仕込みでその温度は異なる。少量なら布の上で手作業、大量なら送風のベルトで行う。",zh:"蒸好的米必須快速且均勻地冷卻到各去處所需的精確溫度——製麴、酒母與每一段仕込各不相同。小批量以布上手工進行，大批量則以送風輸送帶完成。"}],
            [{en:"Kōji trays and boxes",ja:"麹蓋・麹箱",zh:"麴蓋・麴箱"},"麹蓋・箱麹",
             {en:"Kōji",ja:"製麹",zh:"製麴"},
             {en:"Small cedar trays holding about 1.5 kg each give the finest control and are still used for competition daiginjō; larger boxes and mechanical <em>seikiku</em> drums trade some control for a great deal of labour. A tray-made kōji batch means someone was awake all night moving trays.",ja:"一枚およそ1.5キロを盛る小さな杉の蓋は最も細かな制御を可能にし、鑑評会用の大吟醸ではいまも使われる。より大きな箱や機械式の製麹機は、制御の一部と引き換えに多くの労力を省く。蓋で造った麹があるということは、誰かが一晩中起きて蓋を積み替えていたということである。",zh:"每片約盛 1.5 公斤的小型杉木麴蓋能提供最精細的控制，鑑評會用大吟釀至今仍在使用；較大的麴箱與機械式製麴機則以部分控制力換取大量勞力的節省。有以麴蓋製成的麴，就意味著有人徹夜未眠在搬動麴蓋。"}],
            [{en:"Starter tub",ja:"酛桶",zh:"酛桶"},"酛桶",
             {en:"Starter",ja:"酒母",zh:"酒母"},
             {en:"A small tank or wooden tub for the yeast starter. In kimoto brewing it is worked with wooden poles (<em>kai</em>) in the yamaoroshi mashing; in sokujō it is simply a small jacketed tank.",ja:"酒母のための小さなタンクまたは木桶。生酛では櫂で山卸を行い、速醸ではジャケット付きの小型タンクにすぎない。",zh:"用於酒母的小型酒槽或木桶。生酛釀造中會以木櫂進行山卸搗磨；速釀則不過是一具附夾層的小槽。"}],
            [{en:"Main tank",ja:"仕込タンク",zh:"仕込槽"},"仕込タンク",
             {en:"Mash",ja:"醪",zh:"醪"},
             {en:"Usually enamel-lined or stainless steel, with a cooling jacket or internal cooling coils. Older breweries had them sunk into the floor so a person could work at the rim. A large brewery's tanks hold tens of thousands of litres; a small one's hold a few thousand.",ja:"多くはホーロー引きかステンレスで、冷却ジャケットや内部の冷却管を備える。古い蔵では床に埋め込まれ、縁に立って作業できるようになっていた。大きな蔵のタンクは数万リットル、小さな蔵のものは数千リットルを容れる。",zh:"多為搪瓷內襯或不鏽鋼製，附冷卻夾層或內置冷卻盤管。老酒藏會將其嵌入地板，使人能站在槽緣工作。大型酒藏的槽可容數萬公升，小型者則為數千公升。"}],
            [{en:"Wooden vat",ja:"木桶",zh:"木桶"},"木桶",
             {en:"Starter or mash",ja:"酒母・醪",zh:"酒母・醪"},
             {en:"Cedar vats bound with bamboo hoops, universal until the 1930s and now a deliberate minority choice. They breathe, host resident microbes, and give a faint woody depth. They also cannot be sterilised, which is exactly the point for some brewers and a disqualifying flaw for others. The coopers who can build them number in the low dozens.",ja:"竹の箍で締めた杉の桶。一九三〇年代まで当たり前だったが、いまは意図された少数派の選択である。呼吸し、蔵付きの微生物を宿し、かすかな木の奥行きを与える。滅菌はできない。それこそが一部の造り手にとっての要点であり、他の造り手にとっては失格の欠点である。これを作れる桶師は数十人の単位でしかいない。",zh:"以竹箍束緊的杉木桶，在 1930 年代之前是常態，如今則是刻意的少數選擇。它會呼吸、承載藏付微生物，並帶來一絲木質的深度。它也無法滅菌——這對某些釀造者正是重點，對另一些人則是致命缺陷。能製作木桶的桶師，數量僅以數十人計。"}],
            [{en:"Fune press",ja:"槽",zh:"槽"},"槽",
             {en:"Pressing",ja:"上槽",zh:"上槽"},
             {en:"A long shallow box in which cloth bags of mash are stacked and pressed slowly under a weighted lid. Gentle, slow, labour-intensive, and it allows the brewer to separate the free-run, the middle and the pressed fractions.",ja:"醪を詰めた酒袋を積み重ね、重しをかけた蓋でゆっくり搾る、長く浅い箱。穏やかで遅く、手間がかかるが、あらばしり・中取り・責めを分けて採ることができる。",zh:"一具長而淺的木箱，將盛裝醪的酒袋層層堆疊，在加重的蓋板下緩慢壓榨。溫和、緩慢、費工，但能讓釀造者分開取得荒走、中取與責的部分。"}],
            [{en:"Yabuta press",ja:"自動圧搾機",zh:"自動壓榨機"},"ヤブタ",
             {en:"Pressing",ja:"上槽",zh:"上槽"},
             {en:"An accordion of inflatable rubber bladders between filter plates, which presses a whole tank in hours with minimal oxygen exposure. Named after its manufacturer and used by the overwhelming majority of breweries, including many that also keep a fune for their best sake.",ja:"濾板のあいだに膨らむゴム膜を並べた蛇腹式の機械で、酸素との接触を最小に抑えながら、タンク一本を数時間で搾る。製造元の名で呼ばれ、圧倒的多数の蔵が用いる。最上の酒のために槽も残している蔵も少なくない。",zh:"在濾板之間排列可充氣橡膠隔膜的手風琴式機械，能以最少的接觸氧氣，在數小時內榨完一整槽。以製造商之名稱之，絕大多數酒藏都在使用，其中不少同時保留木槽以榨最好的酒。"}],
            [{en:"Drip bags",ja:"袋吊り",zh:"袋吊"},"袋吊り・雫取り",
             {en:"Pressing",ja:"上槽",zh:"上槽"},
             {en:"Bags of mash hung to drip under their own weight into a vessel, with no pressure at all. Extremely low yield, exceptionally clean result, used almost exclusively for competition entries and flagship daiginjō.",ja:"醪を詰めた袋を吊るし、自らの重みだけで滴らせて受ける。圧はまったくかけない。歩留まりはきわめて低く、結果は際立って清らかで、ほぼ鑑評会の出品酒と看板の大吟醸にのみ用いられる。",zh:"將盛醪的酒袋懸吊，僅憑自身重量滴入容器，完全不加壓。產出率極低，成果卻格外潔淨，幾乎只用於鑑評會出品酒與旗艦大吟釀。"}],
            [{en:"Plate pasteuriser",ja:"熱交換器",zh:"熱交換器"},"プレートヒーター",
             {en:"Pasteurisation",ja:"火入れ",zh:"火入"},
             {en:"Heats sake to about 65°C in seconds as it flows between plates, then cools it just as fast. Far gentler on aroma than the older method of standing bottles in a hot bath, though bottle pasteurisation is still used where the sake will be sold in that bottle.",ja:"板のあいだを流れる酒を数秒で65度前後まで上げ、同じ速さで冷ます。瓶を湯に立てる旧来の方法より香りへの負担がはるかに少ない。ただし、その瓶のまま売られる酒には瓶火入れがいまも用いられる。",zh:"讓酒在板片之間流過，數秒內升至約 65°C，再以同樣速度冷卻。相較於把瓶子立在熱水中的舊法，對香氣的負擔小得多；不過若酒將以該瓶出售，瓶火入至今仍在使用。"}]
          ] }
      ]
    },

    { t:"section", id:"choices",
      title:{ en:"Where the choice actually matters", ja:"選択が本当に効くところ", zh:"取捨真正關鍵之處" }, jp:"設備と酒質",
      body:[
        { t:"p", text:{
          en:"Most equipment debates in sake are less about romance than about which variable the brewer wants to keep under their own hand. Three cases are worth setting out.",
          ja:"日本酒における設備の議論の多くは、情緒よりも、どの変数を自分の手の内に置いておきたいかという問題である。三つの例を挙げる価値がある。",
          zh:"清酒的器具之爭，多半無關情懷，而在於釀造者想把哪一項變數留在自己手中。有三個例子值得說明。" } },
        { t:"compare", cols:3, items:[
          { title:{en:"Trays vs machine kōji",ja:"麹蓋か機械か",zh:"麴蓋或機械"}, jp:"制御と労力",
            text:{en:"A machine holds temperature and humidity better than a person can and never gets tired. A tray lets the kōji-ya split one batch into forty separate micro-environments and treat each differently. For a uniform product the machine wins; for the last few per cent of quality in a small batch, the trays do.",ja:"機械は人より温度と湿度をよく保ち、決して疲れない。麹蓋は、一つの仕込みを四十の独立した小環境に分け、それぞれを違うように扱うことを許す。均一な製品なら機械が勝ち、少量における最後の数パーセントの質なら蓋が勝つ。",zh:"機械維持溫濕度的能力勝過人，且從不疲倦。麴蓋則讓麴屋能把一批分成四十個獨立的微環境，各自區別對待。要均一的產品，機械勝出；要小批量中最後那幾個百分點的品質，麴蓋勝出。"} },
          { title:{en:"Fune vs Yabuta",ja:"槽かヤブタか",zh:"木槽或藪田"}, jp:"分離と酸化",
            text:{en:"The Yabuta is faster, gives higher yield, and — because it is enclosed — exposes the sake to less oxygen, which matters more than most romantics admit. The fune's advantage is fractional separation and a gentler squeeze at the end. Many breweries use both, on different sake.",ja:"ヤブタは速く歩留まりが高く、密閉されているために酒が触れる酸素も少ない。この点は、情緒を語る人々が認める以上に重要である。槽の利点は、部分ごとの分け取りと、最後の穏やかな搾りにある。多くの蔵は酒によって両方を使い分ける。",zh:"藪田更快、產出率更高，且因為封閉，酒接觸的氧氣更少——這一點比多數懷舊者願意承認的更重要。木槽的優勢在於分段取酒，以及最後階段更溫和的擠壓。許多酒藏會依酒款分別使用兩者。"} },
          { title:{en:"Wood vs steel tanks",ja:"木桶かステンレスか",zh:"木桶或不鏽鋼"}, jp:"再現性と個性",
            text:{en:"Steel is inert, cleanable and gives the same answer every year. Wood contributes microbes and a little aroma, and gives a slightly different answer each year. A brewery choosing wood is choosing variation deliberately, and must be good enough to survive it.",ja:"ステンレスは不活性で洗浄でき、毎年同じ答えを返す。木は微生物とわずかな香りを与え、年ごとに少しずつ違う答えを返す。木桶を選ぶ蔵は、意図して変動を選んでいるのであり、それに耐えられるだけの腕がなければならない。",zh:"不鏽鋼惰性、可徹底清洗，每年給出相同的答案。木材提供微生物與些許香氣，每年給出略微不同的答案。選擇木桶的酒藏，是刻意選擇了變異，而且必須好到足以承受它。"} }
        ] },
        { t:"note", label:{en:"The most important equipment is refrigeration",ja:"最も重要な設備は冷却である",zh:"最重要的設備是冷卻"}, text:{
          en:"Almost every romantic argument about tools is downstream of one unromantic fact: cheap, reliable refrigeration, which arrived in Japanese breweries through the middle of the twentieth century, is what decoupled sake from the calendar and from latitude. It made cold fermentation possible in Kyushu, made year-round brewing possible anywhere, made nama shipping possible at all, and made the modern ginjō style available to breweries that would never have had a cold enough building. No cedar tub has changed sake as much as a compressor did.",
          ja:"道具をめぐる情緒的な議論のほとんどは、情緒のない一つの事実の下流にある。二十世紀の半ばに日本の蔵へ入ってきた、安価で信頼できる冷却設備こそが、日本酒を暦から、そして緯度から切り離したのである。それは九州での低温発酵を可能にし、どこでも四季醸造を可能にし、そもそも生酒の流通を可能にし、十分に寒い建物を持ちえなかった蔵にも現代の吟醸を届けた。どんな杉桶も、コンプレッサーほどには日本酒を変えていない。",
          zh:"幾乎所有關於器具的浪漫論爭，都位於一個毫不浪漫的事實下游：二十世紀中葉進入日本酒藏的廉價可靠冷卻設備，才是把清酒從曆法與緯度中解放出來的東西。它讓九州得以低溫發酵、讓任何地方都能四季釀造、讓生酒的流通首次成為可能，也讓從來不可能擁有足夠寒冷建築的酒藏得以做出現代吟釀。沒有任何一只杉木桶，對清酒的改變比得上一台壓縮機。" } }
      ]
    },

{ t:"section", id:"scale",
      title:{ en:"What a brewery costs to equip", ja:"設備にかかる費用", zh:"設備所需的成本" }, jp:"投資と規模",
      body:[
        { t:"p", text:{
          en:"Sake brewing has an unusual cost structure: the buildings and the tanks are cheap by industrial standards, but the two pieces of equipment that decide what a brewery can make — the mill and the refrigeration — are expensive, and both must be bought before a single bottle is sold.",
          ja:"酒造りの費用構造は変わっている。建物とタンクは工業の基準で見れば安いが、その蔵が何を造りうるかを決める二つの設備——精米機と冷却設備——は高く、しかもどちらも、一本も売れる前に買っておかねばならない。",
          zh:"釀酒的成本結構相當特別：以工業標準衡量，建築與酒槽並不昂貴，但決定一家酒藏能做什麼的兩項設備——精米機與冷卻系統——卻很昂貴，且兩者都必須在賣出第一瓶之前就先買下。" } },
        { t:"defs", items:[
          { term:{en:"The rice mill",ja:"精米機",zh:"精米機"}, jp:"設備投資",
            def:{en:"A vertical mill capable of daiginjō ratios is a major capital item, occupies a building of its own, runs for two to three days per batch, and is used for perhaps two months a year. The economics are so unfavourable at small scale that most breweries do not own one: they send rice to a contract miller, or buy it pre-milled to a specification. Owning your own mill is a statement about control, and it is one of the clearest dividing lines between breweries.",
              ja:"大吟醸の精米歩合に達する竪型の精米機は大きな設備投資であり、専用の建屋を占め、一仕込みに二、三日を要し、年に二か月ほどしか動かない。小規模ではあまりに割が合わないため、多くの蔵はこれを持たない。米を委託精米に出すか、仕様どおりに精米されたものを買う。自前の精米機を持つことは制御についての意思表示であり、蔵を分かつ最も明瞭な線の一つである。",
              zh:"能達到大吟釀步合的立式精米機是一項重大資本支出，需獨占一棟建物，每批運轉兩到三天，而一年大約只用兩個月。小規模下的經濟性極差，因此多數酒藏並不擁有它：他們把米送去委託精米，或直接購入已按規格研磨好的米。擁有自己的精米機是一種對「掌控」的宣示，也是區分酒藏最清晰的界線之一。"} },
          { term:{en:"Refrigeration",ja:"冷却設備",zh:"冷卻設備"}, jp:"冷蔵",
            def:{en:"Tank jackets, a cold room for the ginjō mashes, and a refrigerated warehouse for finished sake. This is the single largest running cost after rice and labour, and it is what allows a brewery in a warm prefecture to make ginjō at all. It is also the reason a small brewery's electricity bill peaks in a Japanese August, when nothing is being brewed.",
              ja:"タンクのジャケット、吟醸の醪のための冷蔵室、仕上がった酒のための冷蔵倉庫。米と人件費に次いで最大の経常費用であり、温暖な県の蔵が吟醸を造りうるのは、そもそもこれがあるからである。何も仕込んでいない八月に、小さな蔵の電気代が頂点に達する理由でもある。",
              zh:"酒槽夾層、供吟釀之醪使用的冷藏室，以及存放成酒的冷藏倉庫。這是僅次於米與人力的最大經常性支出，也是溫暖縣份的酒藏之所以能釀吟釀的根本前提。這同時解釋了為何小酒藏的電費會在什麼都沒釀的日本八月達到高峰。"} },
          { term:{en:"The bottling line",ja:"瓶詰めの設備",zh:"裝瓶產線"}, jp:"充填",
            def:{en:"At small scale, bottling is done by hand with a simple filler and a hand capper, and a season's output can be bottled by four people over a few weeks. At large scale it is a proper line with inert-gas purging and inline pasteurisation. The middle ground — too big for hand, too small for a line — is where a lot of breweries feel the squeeze.",
              ja:"小規模では、簡単な充填機と手押しの打栓機で手作業により瓶詰めし、一季の生産量を四人が数週間で詰め終える。大規模では、不活性ガスによる置換とインラインの火入れを備えた本格的な生産ラインとなる。手作業には大きすぎ、ラインには小さすぎる中間——そこで多くの蔵が苦しさを感じている。",
              zh:"小規模時，裝瓶以簡易充填機與手動封蓋機人工完成，一季的產量由四個人在數週內即可裝完。大規模時，則是配備惰性氣體置換與線上火入的正規產線。而介於兩者之間——對人工而言太大、對產線而言太小——正是許多酒藏感到吃緊之處。"} },
          { term:{en:"What is cheap",ja:"安いもの",zh:"便宜的部分"}, jp:"意外な安さ",
            def:{en:"Tanks are not expensive and last decades; a fune is a wooden box; kōji trays cost very little. A great deal of the equipment in a traditional kura is either simple, old, or both, and much of it is repaired rather than replaced. It is entirely normal to find hundred-year-old tools in daily use next to a stainless tank and a laptop.",
              ja:"タンクは高価ではなく、数十年もつ。槽は木の箱であり、麹蓋はごく安い。伝統的な蔵の道具の多くは、単純であるか、古いか、その両方であり、買い替えるのではなく直して使われる。ステンレスのタンクとノートパソコンの隣で、百年前の道具が日々使われていることは、まったく普通である。",
              zh:"酒槽並不昂貴，且可用數十年；木槽不過是個木箱；麴蓋更是便宜。傳統酒藏中的許多器具不是簡單、就是老舊，或兩者兼具，而且多半是修而不換。在不鏽鋼槽與筆記型電腦旁邊，看見百年老工具仍在日常使用，完全是常態。"} }
        ] },
        { t:"note", label:{en:"Why this shapes what you can buy",ja:"これが商品を形づくる理由",zh:"這如何形塑你買得到的東西"}, text:{
          en:"A brewery that does not own a mill is buying rice milled to standard ratios — 60%, 50%, 40% — because that is what a contract miller stocks. A brewery that owns one can mill to 55% or 48% or whatever a particular rice and a particular plan call for, and can flat-mill. This is why unusual milling ratios on a label are, quietly, a signal about the brewery's equipment and its degree of control.",
          ja:"精米機を持たない蔵は、60%、50%、40%といった標準的な歩合に精米された米を買う。委託精米が在庫として持つのがそれだからである。自前の精米機を持つ蔵は、55%にも48%にも、その米とその設計が求めるどの数値にも削れるし、扁平精米もできる。酒標の変わった精米歩合が、静かに、その蔵の設備と制御の度合いについての合図となっているのは、そのためである。",
          zh:"沒有自有精米機的酒藏，只能購買研磨至標準步合的米——60%、50%、40%——因為那是委託精米業者庫存的規格。擁有精米機的酒藏，則可磨到 55%、48%，或該款米與該套設計所需的任何數值，也能做扁平精米。這正是酒標上不尋常的精米步合，會默默成為關於該藏設備與掌控程度之訊號的原因。" } }
      ]
    },

{ t:"section", id:"walkthrough",
      title:{ en:"The tool list, in order of use", ja:"使う順の道具一覧", zh:"依使用順序的器具清單" }, jp:"工程順",
      body:[
        { t:"p", text:{
          en:"Walking a brewery from the delivery door to the bottling line, this is what stands in the way, in order. Almost every item has a hand version and a machine version, and almost every brewery uses a mixture — the interesting question in any given kura is not whether it is traditional but which three or four steps it has chosen to keep in human hands.",
          ja:"荷受けの扉から瓶詰めラインまで蔵を歩けば、順に立ちはだかるのはこれらである。ほぼすべての道具に手の版と機械の版があり、ほぼすべての蔵が両者を混ぜて使う。ある蔵についての興味深い問いは、伝統的かどうかではなく、どの三つか四つの工程を人の手に残すことを選んだか、である。",
          zh:"從收貨門一路走到裝瓶線，依序擋在路上的就是這些東西。幾乎每一項器具都有手工版與機器版，而幾乎每家酒藏都混用兩者——關於任何一家酒藏，真正有意思的問題不是它傳不傳統，而是它選擇把哪三、四道工序留在人手裡。" } },

        { t:"table",
          cols:[{en:"Stage",ja:"工程",zh:"工序"},{en:"Tool",ja:"道具",zh:"器具"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"What it is",ja:"何であるか",zh:"是什麼"}],
          jpCols:[2],
          rows:[
            [{en:"Polishing",ja:"精米",zh:"精米"},{en:"Vertical mill",ja:"竪型精米機",zh:"直立式精米機"},"竪型精米機",
             {en:"A tall abrasive roll that grinds the grain against a stone while it circulates. Vertical mills displaced horizontal ones in the 1930s and are the reason polishing below 50% became practical at all. A daiginjō mill run takes two to three days and is stopped repeatedly to let the grain cool.",
              ja:"循環する米を砥石に当てて削る、背の高い研削装置。昭和初期に横型を置き換え、精米歩合50%以下がそもそも現実的になった理由である。大吟醸の精米は二、三日を要し、米を冷ますために繰り返し止められる。",
              zh:"高聳的研磨機構，讓循環的米粒與磨石摩擦而被削去。直立式在一九三〇年代取代橫型，也正是 50% 以下精米之所以可行的原因。一趟大吟釀的精米要花兩到三天，並須反覆停機讓米粒降溫。"}],
            [{en:"Washing",ja:"洗米",zh:"洗米"},{en:"Limited-absorption washer",ja:"限定吸水",zh:"限定吸水"},"限定吸水",
             {en:"For everyday grades, a machine. For competition grades, ten-kilogram net bags washed and soaked by hand with a stopwatch, because the target water uptake is specified to within a per cent.",
              ja:"日常の等級には機械。鑑評会の等級には、十キロずつの網袋をストップウォッチで手洗い・手浸けする。目標吸水率が一パーセント以内で指定されるからである。",
              zh:"日常等級用機器；競賽等級則以十公斤網袋、拿著碼錶手洗手浸，因為目標吸水率被規定在一個百分點以內。"}],
            [{en:"Steaming",ja:"蒸し",zh:"蒸米"},{en:"Koshiki",ja:"甑",zh:"甑"},"甑",
             {en:"The steaming vat — historically a giant wooden tub, now usually stainless. Steam rises through the rice bed for around an hour, producing grain that is firm outside and soft inside, <em>gaikō-nainan</em>. Large breweries use a continuous belt steamer instead.",
              ja:"蒸しの桶。かつては巨大な木桶、今は多くがステンレスである。米の層を蒸気が一時間ほど昇り、外硬内軟の米を得る。大手は代わりに連続蒸米機を用いる。",
              zh:"蒸米的桶具，昔為巨大木桶，今多為不鏽鋼。蒸氣穿過米層約一小時，做出「外硬內軟」的蒸米。大型酒藏則改用連續蒸米機。"}],
            [{en:"Cooling",ja:"放冷",zh:"放冷"},{en:"Cooling conveyor",ja:"放冷機",zh:"放冷機"},"放冷機",
             {en:"A blown-air belt that drops steamed rice to its target temperature — different for kōji rice, starter rice and each mash addition. The hand alternative is spreading rice on cloth and turning it, which is where the image of brewers in the steam comes from.",
              ja:"送風のベルトで、蒸米を目標温度まで落とす。麹米、酒母用、各段の添え米で目標は異なる。手作業の代替は布に広げて手で返すことであり、湯気のなかの蔵人という像はここから来る。",
              zh:"送風輸送帶，把蒸米降到目標溫度——麴米、酒母用米與各段添米的目標各不相同。手工替代方式是把米攤在布上翻動，藏人在蒸氣中勞作的形象即源於此。"}],
            [{en:"Kōji",ja:"製麹",zh:"製麴"},{en:"Kōji room",ja:"麹室",zh:"麴室"},"麹室",
             {en:"A cedar-lined insulated room held near 30 °C and high humidity for about 48 hours. Inside it, three levels of container: the <em>toko</em> bed for the first hours, then <em>hako</em> boxes or <em>kōji-buta</em> lidded trays. The tray method is the most laborious and the only one that qualifies a bottle for the label term 手造り.",
              ja:"杉張りの断熱された室で、およそ30℃と高湿度に四十八時間ほど保たれる。中には三段階の器がある——初期の床、次いで箱、あるいは麹蓋。蓋麹は最も手のかかる方法であり、瓶に「手造り」の表示を許す唯一の方法である。",
              zh:"以杉木鋪設的隔熱房間，維持在約 30 °C 與高濕度約四十八小時。室內有三級容器：初期的「床」，其後是「箱」或「麴蓋」。蓋麴法最耗人力，也是唯一能讓酒瓶取得「手造り」標示資格的做法。"}],
            [{en:"Kōji, machine",ja:"製麹（機械）",zh:"製麴（機械）"},{en:"Automatic kōji maker",ja:"自動製麹機",zh:"自動製麴機"},"自動製麹機",
             {en:"A drum or rotating bed that controls temperature, humidity and turning without a person. It produces consistent kōji for volume grades and frees the crew for the work that cannot be automated; almost no brewery uses it for its top range.",
              ja:"温度、湿度、切り返しを人手なしに制御する円筒あるいは回転床。量産の等級に均質な麹を生み、自動化できない仕事に人を回せる。上位の商品にこれを使う蔵はほとんどない。",
              zh:"以滾筒或旋轉床控制溫度、濕度與翻拌，無須人力。它為量產等級生產穩定的麴，並讓人力得以投入無法自動化的工作；幾乎沒有酒藏會把它用在最高階產品上。"}],
            [{en:"Starter",ja:"酒母",zh:"酒母"},{en:"Starter tubs",ja:"酒母タンク・半切",zh:"酒母槽、半切桶"},"半切桶",
             {en:"A kimoto starter begins in shallow wooden half-tubs so that the rice can be worked with poles; a sokujō starter goes straight into a small tank. The starter room is separately temperature-controlled and, in old breweries, is the coldest room in the building.",
              ja:"生酛の酒母は、櫂で摺れるよう浅い半切桶で始まる。速醸酛は小さなタンクに直接仕込む。酒母室は別に温度管理され、古い蔵では建物で最も寒い部屋である。",
              zh:"生酛酒母始於淺的半切木桶，以便用櫂棒研磨；速釀酒母則直接投入小槽。酒母室獨立控溫，在老酒藏裡是整棟建築最冷的房間。"}],
            [{en:"Main mash",ja:"醪",zh:"醪"},{en:"Fermentation tank",ja:"仕込タンク",zh:"仕込槽"},"仕込タンク",
             {en:"Enamel-lined steel is the default: inert, cleanable, cheap. Thermal tanks add a cooling jacket and are what make summer daiginjō possible. Wooden vats are the revivalist choice — porous, alive with resident microflora, and a specialised craft with very few remaining coopers.",
              ja:"ホーロー引きの鋼が既定である——不活性で、洗いやすく、安い。サーマルタンクは冷却ジャケットを備え、夏の大吟醸を可能にする。木桶は復古派の選択であり、多孔質で、住み着いた微生物とともにあり、そして桶屋のほとんど残らぬ専門の職である。",
              zh:"琺瑯內襯的鋼槽是標準配備：惰性、易清潔、便宜。保溫槽加裝冷卻夾層，使夏季釀造大吟釀成為可能。木桶則是復古派的選擇——多孔、住著常在的微生物群，而且是一門幾乎沒有桶匠留存的專門手藝。"}],
            [{en:"Pressing",ja:"上槽",zh:"上槽"},{en:"Press",ja:"薮田式・槽・雫",zh:"藪田式、槽、雫"},"上槽",
             {en:"Three routes. The accordion press (commonly called by the maker's name, Yabuta) is fast, efficient and standard. The <em>fune</em> box press stacks cloth bags under a weighted lid and gives a gentler, three-part separation. <em>Shizuku</em> — bags hung to drip with no pressure at all — is used for competition bottles and wastes a great deal of sake in the lees.",
              ja:"三つの道である。アコーディオン型の自動圧搾機（製造元の名から薮田式と呼ばれることが多い）は速く、効率がよく、標準である。槽は酒袋を積んで上から加圧し、より穏やかに、三つに分けて搾る。雫——袋を吊るし、圧をかけずに滴らせる——は鑑評会用であり、多くの酒を粕に残す。",
              zh:"有三條路。手風琴式自動壓榨機（常以製造商之名稱為「藪田式」）快速、效率高，是業界標準。「槽」把酒袋層層堆疊、自上加壓，分離較溫和且分成三段。「雫」——把袋子吊起、完全不加壓讓其滴落——用於競賽酒，並會把大量的酒留在酒粕裡。"}],
            [{en:"Pressing, modern",ja:"上槽（新式）",zh:"上槽（新式）"},{en:"Centrifuge",ja:"遠心分離機",zh:"離心分離機"},"遠心分離機",
             {en:"Spins the mash instead of squeezing it, separating with no mechanical pressure and therefore no pressed-in bitterness. Very expensive, adopted by a handful of houses for flagship bottles, and controversial mainly on cost.",
              ja:"搾るのではなく回す。機械的な圧をかけずに分離するため、押し込まれた苦味が出ない。きわめて高価で、旗艦の瓶のために数蔵が採用しており、争点は主に費用である。",
              zh:"以旋轉取代擠壓，不施加機械壓力即完成分離，因此不會壓出苦味。造價極高，僅少數酒藏用於旗艦酒款，爭議點主要在成本。"}],
            [{en:"Pasteurising",ja:"火入れ",zh:"火入"},{en:"Coil or plate heater; bottle bath",ja:"蛇管・プレートヒーター・瓶燗",zh:"蛇管、板式加熱、瓶燗"},"火入れ",
             {en:"Sake is held at roughly 60–65 °C to kill yeast and, critically, to deactivate the kōji enzymes that would otherwise keep changing the liquid. Passing it through a coil in hot water is traditional; plate heat exchangers are faster; <em>binkan</em> — heating the sealed bottle and crash-cooling it — is the gentlest and the most labour-intensive.",
              ja:"およそ60〜65℃に保ち、酵母を殺し、そして何より、放置すれば液を変え続ける麹の酵素を失活させる。湯の中の蛇管を通すのが伝統的であり、プレート式熱交換器はより速く、瓶燗——密栓した瓶を加熱し急冷する——は最も穏やかで最も手間がかかる。",
              zh:"將酒維持在約 60–65 °C，殺死酵母，並且——這點更關鍵——使麴的酵素失活，否則它們會繼續改變酒液。讓酒通過熱水中的蛇管是傳統做法；板式熱交換器更快；「瓶燗」——加熱密封的酒瓶再急速冷卻——最溫和，也最耗人力。"}],
            [{en:"Filtering",ja:"濾過",zh:"過濾"},{en:"Diatomaceous earth; carbon",ja:"珪藻土濾過・炭濾過",zh:"矽藻土過濾、炭過濾"},"濾過",
             {en:"Earth filtration clarifies; activated carbon strips colour and off-aromas, and also strips character if overdone. <em>Muroka</em> on a label means the carbon step was skipped, not that no filtration occurred at all.",
              ja:"珪藻土は清澄化し、活性炭は色と雑味を除く。やり過ぎれば個性も除く。ラベルの「無濾過」は炭濾過を省いた意味であって、濾過を一切していないという意味ではない。",
              zh:"矽藻土用於澄清；活性碳去除色澤與雜味，過度使用也會一併除去個性。酒標上的「無濾過」意指略過炭過濾這一步，而非完全未經任何過濾。"}]
          ] }
      ] },

    { t:"section", id:"measurement",
      title:{ en:"Instruments, and what a modern brewer looks at", ja:"計器と、現代の造り手が見るもの", zh:"儀器，以及現代釀造者所看的東西" }, jp:"計測",
      body:[
        { t:"p", text:{
          en:"A brewing season generates a very large number of measurements, and the daily discipline of taking them is older than the instruments themselves — Edo-period brewing records survive that log mash condition day by day in qualitative language. The modern versions are quantitative but serve the same purpose: to catch a fermentation drifting off its intended curve while there is still time to act.",
          ja:"一造りは膨大な数の測定を生む。そして毎日それを取るという規律は、計器そのものより古い。醪の状態を日ごとに定性的な言葉で記した江戸期の酒造帳が残っている。現代の版は定量的だが、目的は同じである——発酵が意図した曲線から外れつつあることを、まだ手を打てるうちに捉えること。",
          zh:"一個釀造季會產生極大量的測量，而每日執行測量的紀律，比儀器本身還要古老——江戶時期的酒造帳留存至今，以定性的語言逐日記錄醪的狀態。現代版本改為定量，目的卻相同：在還來得及處置時，察覺發酵正偏離預定曲線。" } },

        { t:"defs", items:[
          { term:{ en:"Baumé and nihonshu-do", ja:"ボーメと日本酒度", zh:"波美度與日本酒度" }, jp:"ボーメ計", romaji:"bōme-kei",
            def:{ en:"A floating hydrometer reads the density of the mash daily. During fermentation the number falls as sugar becomes alcohol, and the shape of that fall — how fast, how far, when it flattens — is the primary control chart of the whole process. A brewer decides when to press largely from this curve. The same measurement, taken on the finished sake, is what becomes the nihonshu-do printed on the label.",
              ja:"浮ひょうで醪の比重を毎日読む。発酵中、糖がアルコールに変わるにつれ数値は下がり、その下がり方——どれだけ速く、どこまで、いつ寝るか——が全工程の主たる管理図である。いつ搾るかは、おおむねこの曲線から決められる。同じ測定を製品について行ったものが、ラベルに載る日本酒度である。",
              zh:"以浮秤每天測讀醪的比重。發酵過程中，糖轉為酒精，數值隨之下降；而下降的形狀——多快、多低、何時趨緩——就是整個製程最主要的管制圖。何時上槽，大體上就是從這條曲線判斷的。同一項測量用在成酒上，就成了印在酒標上的日本酒度。" } },
          { term:{ en:"Acidity and amino acidity", ja:"酸度とアミノ酸度", zh:"酸度與胺基酸度" }, jp:"滴定", romaji:"tekitei",
            def:{ en:"Both are titrations, done in a small brewery lab with a burette and an indicator. Acidity tracks the organic acids the yeast is producing and is the earliest reliable warning of a contaminated tank; amino acidity tracks protein breakdown and predicts how heavy the finished sake will taste.",
              ja:"いずれも滴定であり、蔵の小さな試験室でビュレットと指示薬を用いて行う。酸度は酵母の生む有機酸を追い、汚染したタンクについて最も早く信頼できる警告となる。アミノ酸度はたんぱく質の分解を追い、出来上がる酒の重さを予告する。",
              zh:"兩者都是滴定，在酒藏的小型試驗室裡用滴定管與指示劑完成。酸度追蹤酵母所產生的有機酸，是酒槽遭污染時最早可靠的警訊；胺基酸度追蹤蛋白質分解，可預測成酒喝起來有多厚重。" } },
          { term:{ en:"Chromatography", ja:"クロマトグラフィー", zh:"層析" }, jp:"分析機器", romaji:"bunseki kiki",
            def:{ en:"Gas chromatography for the aroma esters — ethyl caproate and isoamyl acetate, the apple and banana of ginjō — and liquid chromatography for organic acids and sugars. Very few small breweries own these outright; most send samples to a prefectural research institute, which is one of the quiet reasons those institutes matter so much to regional style.",
              ja:"香気エステル——カプロン酸エチルと酢酸イソアミル、吟醸の林檎とバナナ——にはガスクロマトグラフィー、有機酸と糖には液体クロマトグラフィーを用いる。これらを自前で持つ小さな蔵はごく少なく、多くは県の研究機関に試料を送る。県の機関が地域の型にこれほど効く、目立たぬ理由の一つである。",
              zh:"香氣酯類——己酸乙酯與乙酸異戊酯，也就是吟釀的蘋果與香蕉——用氣相層析；有機酸與糖類則用液相層析。自備這些設備的小酒藏極少，多數把樣品送往縣立研究機構——這正是那些機構之所以對地域風格影響甚深、卻不張揚的原因之一。" } },
          { term:{ en:"Continuous logging", ja:"連続記録", zh:"連續記錄" }, jp:"醸造管理システム", romaji:"jōzō kanri system",
            def:{ en:"Tank probes reporting temperature every few minutes to a screen, with alarms. This is the least romantic and most consequential change of the last thirty years: it lets one person hold more tanks safely, which is what allows a brewery with eight employees to run a range that once needed a seasonal crew of twenty. The instrument did not replace the brewer's judgement; it replaced the brewer's night walk.",
              ja:"タンクのセンサーが数分ごとに温度を画面へ送り、警報を出す。過去三十年で最もロマンに乏しく、最も帰結の大きい変化である。一人がより多くのタンクを安全に受け持てるようになり、かつては二十人の季節労働を要した品揃えを、八人の蔵が回せるようになった。計器が置き換えたのは造り手の判断ではない。造り手の夜回りである。",
              zh:"槽內感測器每隔數分鐘把溫度傳到螢幕，並發出警報。這是過去三十年間最不浪漫、後果卻最重大的變化：它讓一個人能安全照看更多酒槽，於是八名員工的酒藏得以撐起昔日需要二十人季節工班的產品線。儀器取代的不是釀造者的判斷，而是釀造者的夜巡。" } }
        ] },

        { t:"note", text:{
          en:"For what these instruments are measuring, see <a href=\"numbers.html\">Numbers &amp; Chemistry</a> and <a href=\"taste.html\">Chemistry of Flavour</a>. For the human structure that used to do this work by hand and by smell, see <a href=\"toji.html\">Tōji &amp; the Crew</a>.",
          ja:"これらの計器が何を測っているかは<a href=\"numbers.html\">成分と数値</a>と<a href=\"taste.html\">味の科学</a>を、かつてこの仕事を手と鼻で行っていた人の構造については<a href=\"toji.html\">杜氏と蔵人</a>を参照。",
          zh:"這些儀器測的是什麼，見<a href=\"numbers.html\">成分與數值</a>與<a href=\"taste.html\">風味的化學</a>；至於過去以手與鼻完成這些工作的人事結構，見<a href=\"toji.html\">杜氏與藏人</a>。" } }
      ] },
    { t:"section", id:"bench",
      title:{ en:"The analysis bench", ja:"分析の台", zh:"分析台" }, jp:"分析",
      body:[
        { t:"p", text:{
          en:"Every figure quoted elsewhere on this site — the sake meter value, the acidity, the amino acid count — is produced by somebody standing at a bench in a cold building at seven in the morning, and the instruments are simpler than the numbers suggest. Three of them would be recognisable to a brewer of a century ago. What has changed is not the measuring but the frequency: a mash that was once read every few days is now read daily, and the readings are the argument the brewer has with the tank.",
          ja:"本サイトの他所で引かれるあらゆる数値——日本酒度、酸度、アミノ酸度——は、寒い建物のなかで朝七時に台の前に立つ誰かによって生まれる。そして器具は、数値が思わせるよりも簡素である。そのうち三つは、一世紀前の造り手にも見分けがつくであろう。変わったのは測ることではなく、その頻度である。かつて数日おきに読まれた醪は、いまや毎日読まれる。そして読みこそ、造り手が槽と交わす議論である。",
          zh:"本站其他地方引用的每一個數字——日本酒度、酸度、胺基酸度——都是由某個人在清晨七點、站在一棟冷建築裡的檯子前做出來的；而那些器具，比這些數字給人的印象簡單得多。其中三樣，一個世紀前的釀造者也認得出來。改變的不是「測量」，而是頻率：從前每隔幾天讀一次的醪，如今每天讀一次；而這些讀數，就是釀造者與酒槽之間的那場辯論。" } },

        { t:"table",
          caption:{ en:"What is on the bench, and what each reading decides", ja:"台にあるものと、その読みが決めること", zh:"檯上有什麼，以及每個讀數決定了什麼" },
          cols:[ { en:"Instrument", ja:"器具", zh:"器具" }, { en:"Kanji", ja:"表記", zh:"漢字" }, { en:"What it reads", ja:"何を読むか", zh:"讀什麼" }, { en:"What it decides", ja:"何を決めるか", zh:"決定什麼" } ],
          jpCols:[1], keyCol:0,
          rows:[
            [ { en:"Dipstick", ja:"検尺棒", zh:"檢尺棒" }, "検尺",
              { en:"The depth of liquid in a tank, converted to volume through that tank's own calibration table.", ja:"槽のなかの液の深さ。その槽自身の容量表を通して容量へ換える。", zh:"槽中液面的深度，再透過該槽自己的容量對照表換算成體積。" },
              { en:"Everything downstream: the tax return, the dilution arithmetic, how many bottles this tank is.", ja:"以降のすべて。酒税の申告、割水の計算、この槽が何本になるか。", zh:"之後的一切：酒稅申報、割水計算，以及這一槽等於幾瓶。" } ],
            [ { en:"Baumé hydrometer", ja:"ボーメ計", zh:"波美計" }, "ボーメ度",
              { en:"The density of the mash, falling from around twelve at the start to near zero as the sugar is eaten.", ja:"醪の比重。始めのおよそ十二から、糖が食べられるにつれ零近くまで下がる。", zh:"醪的比重，從一開始的約十二，隨著糖被吃掉一路降到接近零。" },
              { en:"When to warm the tank, when to cool it, and — the only irreversible one — when to press.", ja:"いつ温め、いつ冷やし、そして——唯一取り返しのつかない決め——いつ搾るか。", zh:"何時升溫、何時降溫，以及唯一不可逆的那個決定：何時上槽。" } ],
            [ { en:"Sake meter", ja:"日本酒度計", zh:"日本酒度計" }, "日本酒度",
              { en:"The same physics on a different scale, for finished sake: water is zero, denser is negative, lighter is positive.", ja:"仕上がった酒に対する、同じ物理の別の目盛。水が零、重ければ負、軽ければ正である。", zh:"對成品酒使用同一套物理、不同的刻度：水為零，較重為負，較輕為正。" },
              { en:"The number printed on the bottle, and whether to blend this tank with another.", ja:"瓶に刷られる数値と、この槽を他と調合するか否か。", zh:"印在瓶子上的那個數字，以及這一槽要不要與另一槽調合。" } ],
            [ { en:"Burette and alkali", ja:"ビュレットと水酸化ナトリウム", zh:"滴定管與氫氧化鈉" }, "酸度",
              { en:"The millilitres of tenth-normal sodium hydroxide needed to neutralise ten millilitres of sake.", ja:"十ミリリットルの酒を中和するのに要する十分の一規定水酸化ナトリウムのミリリットル数。", zh:"中和十毫升清酒所需的 0.1 當量濃度氫氧化鈉的毫升數。" },
              { en:"How the sake will actually taste against the sake meter value, which on its own predicts very little.", ja:"日本酒度に対して実際にどう味わうか。日本酒度は単独ではほとんど何も予測しない。", zh:"相對於日本酒度，這支酒實際上會怎麼嘗——日本酒度單獨一個數字幾乎預測不了什麼。" } ],
            [ { en:"The same burette, with formalin", ja:"ホルマリンを加えた同じ滴定", zh:"同一套滴定，加入福馬林" }, "アミノ酸度",
              { en:"The same titration run again after formalin is added, which releases the amino groups and lets them be counted.", ja:"ホルマリンを加えたのちに同じ滴定を再び行う。アミノ基が解き放たれ、数えられるようになる。", zh:"加入福馬林之後再跑一次同樣的滴定；胺基被釋出，於是可以被計數。" },
              { en:"How savoury and how heavy the sake reads, and whether the kōji was made too warm.", ja:"酒がどれだけ旨く、どれだけ重く読まれるか。そして麹が温かく造られすぎていないか。", zh:"這支酒讀起來有多鮮、有多重，以及麴是不是做得太溫。" } ],
            [ { en:"Microscope", ja:"顕微鏡", zh:"顯微鏡" }, "鏡検",
              { en:"Yeast cell count and shape in the starter; the presence of anything rod-shaped where it should not be.", ja:"酛の酵母の数と形。あってはならぬ場所の桿状のものの有無。", zh:"酒母中酵母的數量與形態；不該出現桿狀菌的地方有沒有出現。" },
              { en:"Whether the starter is ready to be used, and whether a tank is about to be lost.", ja:"酛が使えるか否か。そして槽が失われかけていないか。", zh:"酒母能不能用，以及某一槽是不是快要毀了。" } ],
            [ { en:"Tasting cup", ja:"利き猪口", zh:"利き猪口（品飲杯）" }, "蛇の目",
              { en:"Colour against the white glaze, and clarity and lustre where the blue meets the white.", ja:"白い釉に対する色。そして藍と白の境における澄みと照り。", zh:"以白釉為底看顏色；在藍與白交界處看澄澈與光澤。" },
              { en:"Everything the instruments cannot read, which is most of what a buyer will notice.", ja:"器具が読めぬすべて。それは買い手が気づくものの大半である。", zh:"所有器具讀不出來的東西——而那正是買家會注意到的大部分。" } ]
          ] },

        { t:"figure",
          caption:{
            en:"The tasting cup, seen from above. It is white porcelain with two concentric blue rings fired into the bottom, it is the same shape and the same pattern in every brewery and every competition hall in Japan, and the standardisation is the whole point: two people in different prefectures looking into the same pattern are making comparable observations. The white ground is a reference against which a faint yellow or amber is obvious; the edge where blue meets white is where haze and lustre show, because a suspended solid blurs that boundary and a bright, clean sake leaves it sharp. It is a measuring instrument that happens to be a cup.",
            ja:"利き猪口を上から見たもの。白磁に二重の藍の輪が底へ焼き付けられている。日本のいずれの蔵、いずれの品評会の場においても同じ形、同じ文様であり、その標準化こそが眼目である。異なる県の二人が同じ文様を覗き込むとき、その観察は比べうるものとなる。白い地は、かすかな黄や琥珀が明らかとなる基準である。藍と白の交わる縁は、濁りと照りが現れる場所である。浮かぶ固形はその境をぼかし、明るく清い酒はそれを鋭いまま残すからである。それは、たまたま杯の形をした測る器具である。",
            zh:"從上方看的利き猪口。白瓷，底部燒上兩圈同心的藍環；在日本任何一家酒藏、任何一個評鑑會場，它都是同樣的形狀與同樣的紋樣，而這份標準化正是重點所在：兩個身在不同縣份的人望進同一個紋樣時，他們的觀察是可以互相比較的。白色的底是一把尺，讓極淡的黃或琥珀無所遁形；藍與白交界的那道邊，則是混濁與光澤現形的地方——懸浮的固形物會把那道邊界糊掉，而明亮潔淨的酒會讓它保持銳利。它是一件剛好長成杯子模樣的量測器具。" },
          svg: function (lang, L) {
            var W = 760, H = 292, CX = 178, CY = 152, R = 92;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<text x="30" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "利き猪口・蛇の目" : lang === "zh" ? "利き猪口・蛇之目" : "THE TASTING CUP, FROM ABOVE") + '</text>';
            s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + R + '" fill="#FCFBF8" stroke="#CDC6B9"/>';
            s += '<circle cx="' + CX + '" cy="' + CY + '" r="' + (R - 10) + '" fill="none" stroke="#EFEDE7"/>';
            s += '<circle cx="' + CX + '" cy="' + CY + '" r="44" fill="none" stroke="#7E8BA0" stroke-width="13"/>';
            s += '<circle cx="' + CX + '" cy="' + CY + '" r="16" fill="#7E8BA0"/>';
            var ann = [
              { y:86, t:{ en:"the white ground", ja:"白い地", zh:"白色的底" },
                d:{ en:"a reference surface; a faint yellow or amber shows against it at once", ja:"基準となる面。かすかな黄や琥珀が直ちに現れる", zh:"作為基準的面；極淡的黃或琥珀會立刻顯現" },
                x1:CX, y1:CY - R + 6 },
              { y:152, t:{ en:"where blue meets white", ja:"藍と白の境", zh:"藍與白的交界" },
                d:{ en:"haze blurs this edge; a clean sake leaves it sharp", ja:"濁りはこの境をぼかし、清い酒は鋭いまま残す", zh:"混濁會把這道邊糊掉，乾淨的酒讓它保持銳利" },
                x1:CX + 50, y1:CY },
              { y:218, t:{ en:"the same everywhere", ja:"いずこも同じ", zh:"到哪裡都一樣" },
                d:{ en:"one pattern, so two observations in two prefectures can be compared", ja:"文様が一つであるがゆえに、二県の二つの観察が比べうる", zh:"只有一種紋樣，所以兩個縣的兩次觀察可以互相比較" },
                x1:CX, y1:CY + R - 6 }
            ];
            var i;
            for (i = 0; i < ann.length; i++) {
              var a = ann[i];
              s += '<line x1="' + a.x1 + '" y1="' + a.y1 + '" x2="' + (a.x1 + 30) + '" y2="' + a.y + '" stroke="#DED8CB"/>';
              s += '<line x1="' + (a.x1 + 30) + '" y1="' + a.y + '" x2="330" y2="' + a.y + '" stroke="#DED8CB"/>';
              s += '<rect x="' + (a.x1 - 2.5) + '" y="' + (a.y1 - 2.5) + '" width="5" height="5" fill="#B09E7C"/>';
              s += '<text x="342" y="' + (a.y - 3) + '" font-size="11" fill="#201E1B">' + L(a.t) + '</text>';
              s += '<text x="342" y="' + (a.y + 12) + '" font-size="9.5" fill="#8B857C">' + L(a.d) + '</text>';
            }
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "蛇の目とは蛇の眼のことであり、文様の名である。標準の一個はおよそ百八十ミリリットル、すなわち一合を容れる。"
                  : lang === "zh" ? "「蛇之目」意為蛇的眼睛，是這個紋樣的名字。標準的一只約可容一百八十毫升，也就是一合。"
                  : "Janome means snake's eye and is the name of the pattern. A standard cup holds about 180 mL — one gō.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"note", title:{ en:"The one number that is not measured", ja:"測られぬ唯一の数", zh:"唯一沒有被量出來的數字" }, text:{
          en:"The polishing ratio. It is calculated, not read: the weight of white rice out, divided by the weight of brown rice in. That makes it the only figure on a label that cannot drift, cannot be mistaken and cannot be argued about — and it is also the only one that says nothing whatever about the liquid. Every other number on the bench describes what is in the tank. This one describes what was thrown away before the tank was filled.",
          ja:"精米歩合である。それは読まれるのではなく算じられる。出てきた白米の重さを、入れた玄米の重さで割る。ゆえにそれは、札の上で漂わず、取り違えられず、争いようのない唯一の数値である。そしてそれはまた、液について何一つ語らぬ唯一の数値でもある。台の上の他のあらゆる数は、槽のなかにあるものを記す。この一つは、槽が満たされる前に捨てられたものを記す。",
          zh:"是精米步合。它不是讀出來的，是算出來的：出來的白米重量，除以進去的玄米重量。這使它成為酒標上唯一不會漂移、不會被誤判、也無從爭論的數字——同時也是唯一一個對「液體本身」隻字未提的數字。檯子上其他每一個數字描述的是槽裡有什麼；只有這一個，描述的是槽被裝滿之前被丟掉的東西。" } }
      ] },


    { t:"related", items:[
      { href:"process.html", why:{ en:"The steps these tools are used for, in order.", ja:"これらの道具が用いられる段を、順に。", zh:"這些工具被用在哪些步驟上，依序排列。" } },
      { href:"toji.html", why:{ en:"The people who used them before the machines.", ja:"機械の前にそれらを使っていた人々。", zh:"在機器出現之前使用它們的那些人。" } },
      { href:"vessels.html", why:{ en:"The other end of the craft: what it is drunk from.", ja:"技のもう一方の端——何から飲まれるか。", zh:"這門技藝的另一端：用什麼來喝。" } },
      { href:"pressing.html", why:{ en:"The one machine that changed the drink most.", ja:"この飲み物を最も変えた一つの機械。", zh:"改變這款酒最多的那一台機器。" } }
    ] }
  ]
};


/* ---- ------------------------------------------------ toji */
SAKE.pages["toji"] = {
  kicker: { en: "Making · 12", ja: "造り · 12", zh: "釀造 · 12" },
  title:  { en: "Tōji & the Brewery Crew", ja: "杜氏と蔵人", zh: "杜氏與藏人" },
  jp: "杜氏集団・蔵人の役割・その変容",
  lede: {
    en: "For most of the last four hundred years the person who owned a sake brewery did not make the sake. Brewing was contracted out each winter to a <em>tōji</em>, a master brewer who arrived in autumn with his own crew, lived in the building until spring, made the entire season's sake, and went home. The tōji belonged to a guild, the guild belonged to a district, and the districts carried distinct techniques that are still legible in regional style today. That system has largely ended within living memory, and understanding what replaced it explains a great deal about modern sake.",
    ja: "過去四百年の大半において、酒蔵を所有する者は酒を造らなかった。造りは毎冬、杜氏に請け負わせるものであった。杜氏は秋に自らの蔵人を率いて到着し、春まで建物に住み込み、その季のすべての酒を造り、そして帰っていった。杜氏は集団に属し、集団は土地に属し、それぞれの土地は固有の技術を担って、その痕跡はいまも地域の酒質に読み取れる。この仕組みは、いま生きている人々の記憶のうちにおおむね終わった。何がそれに取って代わったかを知ることは、現代の日本酒について多くを説明する。",
    zh: "過去四百年的大半時間裡，擁有酒藏的人並不釀酒。釀造每年冬天發包給「杜氏」——一位帶著自己班底於秋天抵達、住進酒藏直到春天、釀完整季的酒然後返鄉的釀造師。杜氏隸屬於某個集團，集團隸屬於某片土地，而各地承載著不同的技法，其痕跡至今仍可在地域酒質中辨讀。這套制度在仍有人記得的年代裡大致告終；理解取代它的是什麼，便能解釋現代清酒的許多面向。"
  },
  body: [

    { t:"section", id:"system",
      title:{ en:"How the system worked", ja:"仕組み", zh:"這套制度如何運作" }, jp:"季節労働",
      body:[
        { t:"p", text:{
          en:"Sake brewing is a winter trade because cold is what makes a slow fermentation safe. Rice farming is a summer trade. The two fit together with almost no overlap, and from the seventeenth century onward farmers and fishermen from poor mountain and coastal districts went to the brewing towns each autumn as <em>dekasegi</em> — seasonal migrant labour — under a tōji they had worked with for years.",
          ja:"酒造りが冬の仕事であるのは、緩やかな発酵を安全にするのが寒さだからである。稲作は夏の仕事である。二つはほとんど重ならずに噛み合い、十七世紀以降、山間や沿岸の貧しい土地の農民や漁民は毎秋、長年ともに働いてきた杜氏のもとで、出稼ぎとして酒どころへ向かった。",
          zh:"釀酒是冬季的行業，因為讓緩慢發酵得以安全進行的正是寒冷。稻作則是夏季的行業。兩者幾乎毫不重疊地契合；自十七世紀起，山間與沿海貧困地區的農民與漁民，每年秋天便以「出稼」——季節性移工——的身分，在共事多年的杜氏帶領下前往釀酒之鄉。" } },
        { t:"grid", cols:2, cells:[
          { h:{en:"What the kuramoto provided",ja:"蔵元が用意したもの",zh:"藏元提供的"},
            body:[{ t:"ul", plain:true, items:[
              { en:"The licence, the building, the tanks and the tools.",ja:"免許、建物、桶、道具。",zh:"執照、建築、酒槽與器具。" },
              { en:"The rice, the water and the working capital.",ja:"米、水、運転資金。",zh:"米、水與營運資金。" },
              { en:"The brand, the customers and the sales network.",ja:"銘柄、得意先、販路。",zh:"品牌、客戶與銷售網絡。" },
              { en:"A target: how much sake, of what character, at what price.",ja:"目標——どれだけの酒を、どんな酒質で、いくらで。",zh:"目標：要多少酒、什麼酒質、什麼價格。" }
            ] }] },
          { h:{en:"What the tōji provided",ja:"杜氏が用意したもの",zh:"杜氏提供的"},
            body:[{ t:"ul", plain:true, items:[
              { en:"The entire technical process, and the judgement behind it.",ja:"製造工程のすべてと、その背後にある判断。",zh:"整套製造工序，以及其背後的判斷。" },
              { en:"The crew — hired, trained and disciplined by him, not by the owner.",ja:"蔵人——所有者ではなく杜氏が雇い、育て、律した。",zh:"班底——由他而非藏元僱用、訓練與管束。" },
              { en:"Responsibility for the result. A spoiled season could end a tōji's career.",ja:"結果への責任。腐造は杜氏の職歴を終わらせえた。",zh:"對結果的責任。一季腐敗足以終結一位杜氏的職涯。" },
              { en:"His guild's accumulated method, which he was not free to give away.",ja:"所属する集団の蓄積した技法。持ち出す自由はなかった。",zh:"其所屬集團累積的技法，而他無權隨意外傳。" }
            ] }] }
        ] },
        { t:"p", text:{
          en:"The relationship was contractual and annual, and it could be ended by either side. A brewery with a poor season might change tōji; a tōji with a better offer might change brewery, and take his crew with him. This is the single most important thing to understand about pre-modern sake: the knowledge did not belong to the building. It walked in every October and walked out every April.",
          ja:"関係は年ごとの契約であり、どちらの側からも解消しえた。造りの悪かった蔵は杜氏を替えることがあり、より良い条件を得た杜氏は蔵を替え、蔵人を連れて移った。近代以前の日本酒について理解すべき最も重要な一点がこれである——技術は建物のものではなかった。それは毎年十月に歩いて入り、毎年四月に歩いて出ていった。",
          zh:"這是逐年締結的契約關係，任一方都可以終止。釀造不順的酒藏可能換掉杜氏；獲得更好條件的杜氏也可能換酒藏，並帶走自己的班底。這是理解前現代清酒最重要的一點：技術並不屬於那棟建築。它每年十月走進來，每年四月走出去。" } }
      ]
    },

    { t:"section", id:"guilds",
      title:{ en:"The guilds", ja:"杜氏集団", zh:"杜氏集團" }, jp:"流派",
      body:[
        { t:"figure",
          caption:{
            en:"Where the guilds came from and where they went. The pale band is the archipelago, running north-east to south-west as Japan does; the circles are guild home districts and the two squares are the brewing districts that bought their labour. Almost every arrow runs from a cold farming province to a warm commercial one.",
            ja:"集団がどこから来て、どこへ行ったか。淡い帯は列島であり、日本がそうであるように北東から南西へ走る。丸は集団の郷であり、二つの四角はその労を買った酒どころである。ほとんどあらゆる矢は、寒い農の国から温かい商いの国へ走っている。",
            zh:"這些集團從哪裡來、又往哪裡去。淡色帶狀是列島，如同日本本身一樣由東北向西南延伸；圓圈是集團的原鄉，兩個方塊則是買下他們勞動力的釀造地。幾乎每一條箭頭，都是從寒冷的農業之國指向溫暖的商業之國。" },
          svg: function (lang, L) {
            var W = 760, H = 352;
            var band = "M690 52 C 640 96, 600 120, 540 136 C 470 156, 420 186, 356 212 C 300 234, 250 250, 196 276";
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            s += '<path d="' + band + '" fill="none" stroke="#F0EDE4" stroke-width="46" stroke-linecap="butt"/>';
            s += '<path d="' + band + '" fill="none" stroke="#E7DFD2" stroke-width="1"/>';
            var dest = [
              { x: 392, y: 262, jp:"灘・伏見", n:{ en:"Nada and Fushimi", ja:"上方の酒どころ", zh:"上方的釀造地" } },
              { x: 604, y: 178, jp:"江戸・関東", n:{ en:"Edo and the east", ja:"江戸と東国", zh:"江戶與東國" } }
            ];
            var guilds = [
              { x: 676, y: 62,  jp:"津軽・山内", a:"start", to:[0,1] },
              { x: 654, y: 92,  jp:"南部", a:"start", to:[0,1] },
              { x: 596, y: 124, jp:"会津", a:"start", to:[1] },
              { x: 540, y: 136, jp:"越後", a:"middle", to:[0,1] },
              { x: 468, y: 166, jp:"能登", a:"middle", to:[0] },
              { x: 434, y: 186, jp:"越前", a:"end", to:[0] },
              { x: 356, y: 212, jp:"丹波・但馬", a:"end", to:[0] },
              { x: 288, y: 238, jp:"備中", a:"end", to:[] },
              { x: 232, y: 262, jp:"広島", a:"end", to:[] },
              { x: 262, y: 202, jp:"出雲", a:"start", to:[] }
            ];
            /* arrows first, under the nodes */
            for (var i = 0; i < guilds.length; i++) {
              var g = guilds[i];
              for (var k = 0; k < g.to.length; k++) {
                var d = dest[g.to[k]];
                var mx = (g.x + d.x) / 2, my = (g.y + d.y) / 2 + 42;
                s += '<path d="M' + g.x + ' ' + g.y + ' Q' + mx + ' ' + my + ' ' + d.x + ' ' + d.y + '" fill="none" stroke="#E1DCD2"/>';
              }
            }
            for (i = 0; i < dest.length; i++) {
              var dd = dest[i];
              s += '<rect x="' + (dd.x - 9) + '" y="' + (dd.y - 9) + '" width="18" height="18" fill="#7C6B52"/>';
              s += '<text x="' + dd.x + '" y="' + (dd.y + 30) + '" text-anchor="middle" font-size="12.5" fill="#201E1B">' + dd.jp + '</text>';
              s += '<text x="' + dd.x + '" y="' + (dd.y + 45) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + L(dd.n) + '</text>';
            }
            for (i = 0; i < guilds.length; i++) {
              var g2 = guilds[i];
              s += '<circle cx="' + g2.x + '" cy="' + g2.y + '" r="6" fill="#FBFAF7" stroke="#7C6B52" stroke-width="1.5"/>';
              var tx = g2.a === "end" ? g2.x - 11 : (g2.a === "start" ? g2.x + 11 : g2.x);
              var ty = g2.a === "middle" ? g2.y - 14 : g2.y + 4;
              s += '<text x="' + tx + '" y="' + ty + '" text-anchor="' + g2.a + '" font-size="12" fill="#201E1B">' + g2.jp + '</text>';
            }
            /* compass ends */
            s += '<text x="700" y="40" text-anchor="end" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "北東・東北" : lang === "zh" ? "東北" : "NORTH-EAST") + '</text>';
            s += '<text x="180" y="300" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "南西・中国地方" : lang === "zh" ? "西南・中國地方" : "SOUTH-WEST") + '</text>';
            s += '<text x="30" y="' + (H - 30) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "備中・広島・出雲は、遠くへ送るより自らの地の蔵を担った。矢のない丸がそれである。"
                  : lang === "zh" ? "備中、廣島、出雲主要供應自己所在地的酒藏，而非遠送；沒有箭頭的圓圈即是。"
                  : "Bitchū, Hiroshima and Izumo largely staffed breweries in their own regions rather than sending men far — the circles with no arrows.") + '</text>';
            s += '<text x="30" y="' + (H - 14) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "これは地図ではなく図式である。位置はおおよそのものである。"
                  : lang === "zh" ? "這是示意圖而非地圖，位置僅為概略。"
                  : "This is a diagram rather than a map; positions are approximate.") + '</text>';
            s += '</svg>';
            return s;
          } },
        { t:"p", text:{
          en:"There have been more than thirty named tōji groups. A handful were large enough to shape national style, and their footprints are still visible: a brewery in Kōchi may be brewing to a method carried down from Iwate. The associations that survive now function as training and certification bodies as much as labour organisations.",
          ja:"名を持つ杜氏集団は三十を超えて存在してきた。そのうちいくつかは全国の酒質を左右するほどの規模を持ち、その足跡はいまも見える——高知の蔵が岩手から伝えられた技法で醸していることがある。現存する組合はいま、労働組織であると同時に、育成と認定の機関として機能している。",
          zh:"具名的杜氏集團曾超過三十個。其中少數規模大到足以形塑全國酒質，其足跡至今可見——高知的酒藏可能正以源自岩手的技法釀酒。現存的組合如今既是勞動組織，也同時是培訓與認證機構。" } },
        { t:"table",
          caption:{en:"The principal tōji groups",ja:"主な杜氏集団",zh:"主要杜氏集團"},
          cols:[{en:"Guild",ja:"集団",zh:"集團"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"Home",ja:"出身地",zh:"出身地"},{en:"Reputation",ja:"特徴",zh:"特徵"}],
          jpCols:[1],
          rows:[
            ["Nanbu","南部杜氏",{en:"Iwate",ja:"岩手",zh:"岩手"},
             {en:"The largest group in Japan, at its peak sending thousands of men across the whole country. Known for balanced, sound, technically rigorous brewing and for an unusually organised training and research programme of its own.",ja:"日本最大の集団であり、最盛期には数千人を全国へ送り出した。均整のとれた健全で技術的に厳密な造りと、独自の組織立った研修・研究の取り組みで知られる。",zh:"日本最大的集團，鼎盛時期派出數千人前往全國各地。以均衡、健全、技術嚴謹的釀造，以及自身異常有組織的培訓與研究計畫聞名。"}],
            ["Echigo","越後杜氏",{en:"Niigata",ja:"新潟",zh:"新潟"},
             {en:"The architects of <em>tanrei karakuchi</em> — light, dry, clean. Cold-country technique built around soft snowmelt water and long low-temperature mashes.",ja:"淡麗辛口——軽く、辛く、清らか——の設計者たち。軟らかい雪解け水と長期低温の醪を軸にした、寒国の技術である。",zh:"「淡麗辛口」——輕盈、辛口、潔淨——的建構者。以柔軟的雪融水與長期低溫醪為核心的寒地技法。"}],
            ["Tanba","丹波杜氏",{en:"Hyōgo (inland)",ja:"兵庫（内陸）",zh:"兵庫（內陸）"},
             {en:"The guild that built Nada. Hard-water technique, vigorous fermentation, firm dry sake — the method behind the biggest brewing district in Japanese history.",ja:"灘を築いた集団。硬水の技術、旺盛な発酵、締まった辛口——日本史上最大の酒どころを支えた方法である。",zh:"打造了灘的集團。硬水技法、旺盛發酵、結實辛口——支撐日本史上最大釀酒區的方法。"}],
            ["Tajima","但馬杜氏",{en:"Hyōgo (north)",ja:"兵庫（北部）",zh:"兵庫（北部）"},
             {en:"Also served Nada and the Kansai trade, alongside and sometimes in competition with Tanba.",ja:"丹波と並び、時に競いながら、灘と関西の商いを支えた。",zh:"與丹波並存、有時競爭，同樣服務於灘與關西的酒業。"}],
            ["Noto","能登杜氏",{en:"Ishikawa",ja:"石川",zh:"石川"},
             {en:"Rich, structured, umami-forward sake with more weight than the Niigata school. Its “four kings”, including Nōguchi Naohiko, became famous individually in a way tōji rarely did.",ja:"新潟流よりも重さのある、豊かで骨格のある旨口の酒。農口尚彦を含む「四天王」は、杜氏としては稀なことに、個人として名を知られた。",zh:"比新潟流更具重量，豐潤、有骨架、旨味在前的酒。其「四天王」（包括農口尚彥）以杜氏而言罕見地，各自成名。"}],
            ["Echizen","越前糠杜氏",{en:"Fukui",ja:"福井",zh:"福井"},
             {en:"A smaller but long-established Hokuriku group, historically supplying Kansai breweries.",ja:"規模は小さいが古くから続く北陸の集団で、歴史的には関西の蔵へ人を送った。",zh:"規模較小但歷史悠久的北陸集團，歷史上向關西酒藏輸送人力。"}],
            ["Bitchū","備中杜氏",{en:"Okayama",ja:"岡山",zh:"岡山"},
             {en:"Ōmachi country. Associated with fuller, rounder sake and with the Setouchi trade.",ja:"雄町の郷。より厚く丸い酒と、瀬戸内の商いに結びつく。",zh:"雄町之鄉。與較飽滿圓潤的酒以及瀨戶內的酒業相連。"}],
            ["Hiroshima","広島杜氏",{en:"Hiroshima",ja:"広島",zh:"廣島"},
             {en:"Heirs to Miura Senzaburō's soft-water method of 1898, and through it the ancestors of ginjō technique.",ja:"一八九八年の三浦仙三郎による軟水醸造法の継承者であり、それを通じて吟醸造りの祖にあたる。",zh:"1898 年三浦仙三郎軟水釀造法的繼承者，並經由此法成為吟釀技法的先驅。"}],
            ["Izumo","出雲杜氏",{en:"Shimane",ja:"島根",zh:"島根"},
             {en:"From the province with the oldest sake mythology in Japan; served the San'in coast and beyond.",ja:"日本で最も古い酒の神話をもつ国から出て、山陰とその先を支えた。",zh:"出自擁有日本最古老酒神話的國度，服務山陰沿岸及更遠地區。"}],
            ["Tsugaru · Yamauchi · Aizu",{en:"Tsugaru · Yamauchi · Aizu",ja:"津軽・山内・会津",zh:"津輕・山內・會津"},"—",
             {en:"Northern groups serving Tōhoku, several of them still active as certification bodies today.",ja:"東北を支えた北の集団。いくつかはいまも認定団体として活動している。",zh:"服務東北的北方集團，其中數個至今仍以認證團體的形式活動。"}]
          ] }
      ]
    },

    { t:"section", id:"crew",
      title:{ en:"The crew and its ranks", ja:"蔵人の役割", zh:"藏人的職級" }, jp:"蔵人",
      body:[
        { t:"p", text:{
          en:"A traditional crew was a strict hierarchy of ten to thirty men living in one building through the winter. The three senior posts below the tōji — <em>kashira</em>, <em>kōji-ya</em> and <em>moto-ya</em> — are collectively the <em>san'yaku</em>, the three offices, and a tōji is normally promoted from among them after many years.",
          ja:"伝統的な蔵人は、冬のあいだ一つの建物に住み込む十人から三十人の厳格な階層であった。杜氏の下の三つの上位職——頭・麹屋・酛屋——は「三役」と総称され、杜氏は通常、長い年月を経てそのなかから昇る。",
          zh:"傳統的班底是十至三十人在整個冬季同住一棟建築中的嚴格階層。杜氏之下的三個高階職位——頭、麴屋、酛屋——合稱「三役」，而杜氏通常是歷經多年後由其中晉升而來。" } },
        { t:"defs", items:[
          { term:{en:"Tōji",ja:"杜氏",zh:"杜氏"}, jp:"杜氏", romaji:"tōji",
            def:{en:"The master brewer. Sets every recipe and schedule, tastes and smells everything daily, and answers for the season. Traditionally did comparatively little physical work — his job was judgement, and being rested enough to exercise it at three in the morning.",
              ja:"造りの長。すべての設計と日程を定め、毎日すべてを利き、その季の責を負う。伝統的に肉体労働は比較的少ない。仕事は判断であり、深夜三時にそれを働かせられるだけ休んでいることであった。",
              zh:"釀造之長。制定所有配方與時程，每日品聞一切，並為整季負責。傳統上體力勞動相對較少——他的工作是判斷，以及保持足夠的休息，好在凌晨三點運用那份判斷。"} },
          { term:{en:"Kashira",ja:"頭",zh:"頭"}, jp:"頭", romaji:"kashira",
            def:{en:"Foreman. Runs the floor, allocates the work, keeps the schedule and the discipline. The tōji decides what happens; the kashira makes it happen.",
              ja:"現場の長。作業を割り振り、日程と規律を保つ。何をするかを決めるのが杜氏であり、それを起こすのが頭である。",
              zh:"現場工頭。統管作業現場、分派工作、維持時程與紀律。決定要做什麼的是杜氏，讓它發生的是頭。"} },
          { term:{en:"Kōji-ya / daishi",ja:"麹屋・大師",zh:"麴屋・大師"}, jp:"麹屋・大師",
            def:{en:"In charge of the kōji room — the most technically demanding and least forgiving job in the building, and the one that most directly decides the character of the sake. Works a broken sleep schedule for the entire season.",
              ja:"麹室を預かる。蔵のなかで最も技術を要し、最も失敗の許されない職であり、酒質を最も直接に決める職でもある。一造りのあいだ、細切れの睡眠で働き続ける。",
              zh:"掌管麴室——藏中技術要求最高、最不容失誤的職務，也是最直接決定酒質的職務。整季都得在被切碎的睡眠中工作。"} },
          { term:{en:"Moto-ya / motomawari",ja:"酛屋・酛廻り",zh:"酛屋・酛迴"}, jp:"酛屋",
            def:{en:"In charge of the yeast starter. In a kimoto house this is the person who leads the <em>yamaoroshi</em> pole-mashing and sings the songs that time it.",
              ja:"酒母を預かる。生酛の蔵では、山卸の櫂入れを率い、それを計る唄をうたう者である。",
              zh:"掌管酒母。在生酛的酒藏中，這是帶領「山卸」搗櫂並唱出計時歌謠的人。"} },
          { term:{en:"Kama-ya",ja:"釜屋",zh:"釜屋"}, jp:"釜屋",
            def:{en:"In charge of the boiler and the steaming vessel: up first, lighting the fire before dawn, and responsible for the quality of every batch of steamed rice.",
              ja:"釜と甑を預かる。誰よりも早く起きて夜明け前に火を入れ、すべての蒸米の出来に責任を負う。",
              zh:"掌管鍋爐與甑：起得最早，天亮前生火，並對每一批蒸米的品質負責。"} },
          { term:{en:"Dōgu-mawashi and the rest",ja:"道具廻し以下",zh:"道具迴以下"}, jp:"蔵人",
            def:{en:"Tool-washing, cleaning, carrying, and every other unglamorous task, done by the newest members. Sake breweries are washed constantly; a first-year kurabito spends most of the season with a brush in his hands, and learns by watching.",
              ja:"道具を洗い、掃除し、運ぶ——華のない仕事のすべてを、新しい者が担う。酒蔵は絶えず洗われている。一年目の蔵人は季の大半を刷毛と共に過ごし、見ることで学ぶ。",
              zh:"洗器具、打掃、搬運，以及其他一切不起眼的活兒，都由最新進的人擔任。酒藏時時刻刻都在清洗；第一年的藏人多半整季手裡拿著刷子，靠著看來學習。"} }
        ] },
        { t:"panel", title:{en:"Songs as timers",ja:"唄という時計",zh:"作為計時器的歌"}, tint:"wood",
          body:[{ t:"p", text:{
            en:"Before clocks were common in breweries, repetitive tasks were timed by singing. The <em>moto-suri uta</em> that accompany kimoto pole-mashing run for a known number of verses, and finishing the song means the mashing is done. Rice-washing songs, steaming songs and pressing songs all existed for the same reason. Many have been collected and a few are still sung, mostly at festivals — but a handful of kimoto breweries have brought them back into the working day on the grounds that they are, in fact, an excellent timer.",
            ja:"蔵に時計が普及する以前、繰り返しの作業は唄で計られた。生酛の櫂入れに伴う酛摺り唄は決まった数の節をもち、唄い終わることが作業の終わりを意味した。洗米の唄も、蒸しの唄も、槽の唄も、同じ理由で存在した。多くは採集され、いくつかは祭のなかでいまも唄われる。そして少数の生酛の蔵は、これは実際に優れた時計であるという理由で、それを日々の仕事に戻している。",
            zh:"在時鐘於酒藏普及之前，重複性作業靠唱歌計時。伴隨生酛搗櫂的「酛摺歌」有固定的段數，唱完即代表作業完成。洗米歌、蒸米歌、上槽歌都基於同樣的理由而存在。多數已被採集，少數仍在祭典中傳唱——而有幾家生酛酒藏，正以「它其實是個絕佳的計時器」為由，把歌謠帶回日常工作之中。" } }] }
      ]
    },

    { t:"section", id:"change",
      title:{ en:"What replaced it", ja:"何が取って代わったか", zh:"取而代之的是什麼" }, jp:"転換",
      body:[
        { t:"p", text:{
          en:"The seasonal system depended on a large supply of men with nothing to do in winter and a reason to leave home. Postwar agricultural mechanisation, rural depopulation, year-round factory employment and rising rural incomes removed all three within about thirty years. The number of working tōji has fallen by a very large margin since the 1970s, and the average age of those remaining is high.",
          ja:"季節労働の仕組みは、冬に仕事がなく、家を離れる理由をもつ大量の男たちの供給に依存していた。戦後の農業機械化、農村の人口流出、通年の工場雇用、そして農村所得の上昇が、およそ三十年のうちにその三つすべてを取り去った。現役の杜氏の数は一九七〇年代から大きく減り、残る者の平均年齢は高い。",
          zh:"季節性制度仰賴大量冬天無事可做、且有理由離鄉的男性供給。戰後農業機械化、農村人口外流、全年制的工廠僱用，以及農村所得提升，在約三十年間把這三項條件全數移除。現役杜氏人數自 1970 年代以來大幅減少，而留下者的平均年齡偏高。" } },
        { t:"compare", cols:3, items:[
          { title:{en:"Kuramoto-tōji",ja:"蔵元杜氏",zh:"藏元杜氏"}, jp:"当主が造る",
            text:{en:"The owner brews. Now extremely common among the small quality-focused breweries, and the structural reason so many of them changed direction so fast in the 1990s: an owner who brews can decide to stop making cheap sake without negotiating with anyone.",ja:"当主自らが造る。品質を志向する小さな蔵ではきわめて一般的になり、一九九〇年代に多くの蔵がこれほど速く方向を変えられた構造的な理由でもある。自ら醸す当主は、誰とも交渉せずに安酒をやめると決められる。",zh:"由藏元親自釀造。如今在注重品質的小型酒藏中極為普遍，也是 1990 年代眾多酒藏能如此迅速轉向的結構性原因：親自釀酒的當家，不必與任何人協商就能決定不再釀廉價酒。"} },
          { title:{en:"Shain-tōji",ja:"社員杜氏",zh:"社員杜氏"}, jp:"社員が造る",
            text:{en:"A salaried employee, working year-round, promoted internally. Removes the annual uncertainty and lets a brewery accumulate its own method rather than renting one — but also ends the cross-pollination the guild system provided.",ja:"通年で働く給与制の社員が、内部で昇進して杜氏となる。年ごとの不確実さがなくなり、蔵は技法を借りるのではなく自ら蓄積できるようになる。ただし、集団制度がもたらしていた技術の交配も終わる。",zh:"領薪的正職員工，全年工作並由內部晉升。消除了逐年的不確定性，讓酒藏得以累積自有技法而非租借他人的——但也終結了集團制度所帶來的技術交流。"} },
          { title:{en:"No tōji at all",ja:"杜氏を置かない",zh:"完全不設杜氏"}, jp:"データで造る",
            text:{en:"A minority position, most visibly at Dassai: no tōji, no seasonal crew, decisions made from measurement and a large body of recorded data by a permanent staff. Controversial, defensible, and demonstrably capable of producing very good sake at scale.",ja:"少数派の立場であり、獺祭に最も明瞭に見られる——杜氏を置かず、季節の蔵人も置かず、常勤の社員が計測と蓄積された記録から判断する。議論を呼ぶが擁護しうる立場であり、規模をもって非常に良い酒を造りうることを実証している。",zh:"少數派立場，以獺祭最為顯著：不設杜氏、不用季節班底，由常設員工依據量測與大量累積的紀錄做決定。具爭議但站得住腳，且已證明能在規模化下產出非常好的酒。"} }
        ] },
        { t:"p", text:{
          en:"Two further changes are worth naming. Women were historically excluded from brewery floors — the taboo was justified with folk beliefs about the brewing deity, and it collapsed completely in the late twentieth century; there are now female tōji at breweries of every size, and women make up a substantial share of new entrants. And formal training has replaced apprenticeship as the usual route in: prefectural brewing schools such as Niigata's, opened in 1984, and Fukushima's Seishu Academy, together with the national <em>sake-zukuri ginōshi</em> skills certification, now do what a decade on the floor used to do.",
          ja:"さらに二つの変化を挙げておきたい。女性は歴史的に蔵の現場から排除されてきた。この禁忌は酒の神をめぐる俗信によって正当化され、二十世紀後半に完全に崩れた。いまやあらゆる規模の蔵に女性の杜氏がおり、新規参入者に占める女性の割合も大きい。そして、正規の教育が徒弟制に代わる通常の入口となった。一九八四年に開校した新潟清酒学校のような県立の醸造学校や福島の清酒アカデミーが、国家資格である酒造技能士とともに、かつて現場での十年が担っていたことを担っている。",
          zh:"還有兩項變化值得一提。女性歷來被排除於酒藏現場之外——這項禁忌以酒神相關的民間信仰為依據，並在二十世紀後期徹底瓦解；如今各種規模的酒藏都有女性杜氏，女性在新進人員中亦占相當比例。此外，正規教育已取代學徒制成為主要入行途徑：如 1984 年開辦的新潟清酒學校等縣立釀造學校、福島的清酒學院，連同國家級的「酒造技能士」技能檢定，如今承擔起過去需在現場歷練十年才能完成的養成。" } },
        { t:"note", label:{en:"Koshiki-taoshi",ja:"甑倒し",zh:"甑倒"}, text:{
          en:"One ritual survives almost everywhere. On the last day of the season that the steaming vessel is used, it is turned over and the crew drink together — <em>koshiki-taoshi</em>, “laying down the steamer”. It marks the end of the rice work, though weeks of mash tending remain, and in the old system it was the first evening in five months on which everybody could relax at the same time.",
          ja:"ひとつの儀礼は、いまもほとんどの蔵に残っている。甑を使う最後の日、それを倒して蔵人がともに飲む——甑倒しである。醪の世話は数週間残るものの、米の仕事の終わりを告げる日であり、かつての仕組みのもとでは、五か月のうちで全員が同時に緩められる最初の晩であった。",
          zh:"有一項儀式幾乎在各處都留存下來。使用甑的最後一天，把它倒放，全體班底一同飲酒——這就是「甑倒」。它標誌著米作業的結束（儘管仍有數週的醪照料待做），而在舊制度下，那是五個月來所有人第一個能同時放鬆的夜晚。" } }
      ]
    },

{ t:"section", id:"day",
      title:{ en:"A day in the season", ja:"造りの一日", zh:"釀造期的一天" }, jp:"一日の流れ",
      body:[
        { t:"p", text:{
          en:"The shape of a brewing day is set by the steamer and the kōji room, both of which start before dawn and neither of which can be rescheduled. What follows is a composite of a small brewery in January; times vary by an hour or two but the order does not.",
          ja:"造りの一日の形は、甑と麹室が決める。どちらも夜明け前に始まり、どちらも予定を動かせない。以下は一月の小さな蔵の、いくつかを重ね合わせた姿である。時刻は一、二時間前後するが、順序は変わらない。",
          zh:"釀造期一天的形狀由甑與麴室決定，兩者都在天亮前開始，且都無法改期。以下是一月間一家小酒藏的綜合寫照；時間會前後一兩小時，順序則不會變。" } },
        { t:"timeline", items:[
          { year:"04:00", era:{en:"Before dawn",ja:"未明",zh:"未明"},
            title:{en:"The boiler",ja:"釜に火を入れる",zh:"生火"}, jp:"釜屋",
            text:{en:"The kama-ya lights the boiler so there is dry steam by five. The rice, washed and soaked and weighed the previous afternoon, is already drained and waiting.",
              ja:"釜屋が火を入れ、五時までに乾いた蒸気を用意する。前日の午後に洗い、浸し、量った米は、すでに水を切って待っている。",
              zh:"釜屋生火，好讓五點前有乾蒸氣可用。前一天下午洗好、浸好、秤好的米，早已瀝乾等待。"} },
          { year:"05:00", era:{en:"Dawn",ja:"夜明け",zh:"破曉"},
            title:{en:"Steaming",ja:"蒸し",zh:"蒸米"}, jp:"蒸米",
            text:{en:"An hour in the koshiki. The crew works in steam and near-darkness, and the smell of steaming rice fills the whole building — the thing every visitor remembers.",
              ja:"甑で一時間。蔵人は蒸気とほとんど暗がりのなかで働き、蒸米の匂いが建物じゅうを満たす。訪れた誰もが覚えているのはこれである。",
              zh:"在甑中蒸一小時。班底在蒸氣與近乎昏暗中工作，蒸米的氣味瀰漫整棟建築——那是每位訪客都記得的東西。"} },
          { year:"06:00", era:{en:"Morning",ja:"朝",zh:"早晨"},
            title:{en:"Cooling and dividing",ja:"放冷と分け",zh:"放冷與分配"}, jp:"放冷",
            text:{en:"The steamed rice is spread and cooled to a different temperature for each destination — hot for the kōji room, cool for the mash. It is carried in cloth by hand, quickly, because it is cooling as it goes.",
              ja:"蒸し上がった米を広げ、行き先ごとに異なる温度まで冷ます——麹室へは熱く、醪へは冷たく。布に包み、手で、素早く運ぶ。運ぶあいだも冷めていくからである。",
              zh:"蒸好的米被攤開冷卻至各去處所需的不同溫度——送麴室的要熱，入醪的要涼。以布包裹、由人手快速搬運，因為它一路上都在降溫。"} },
          { year:"07:00", era:{en:"Morning",ja:"朝",zh:"早晨"},
            title:{en:"Breakfast, and the first mash check",ja:"朝食と醪の見回り",zh:"早餐與巡醪"}, jp:"分析",
            text:{en:"The first proper break. Meanwhile someone samples every active tank, takes temperatures and Baumé, and the numbers go on the chart before the tōji has finished eating.",
              ja:"最初のまともな休みである。そのあいだにも誰かが稼働中の全タンクから汲み、品温とボーメを測る。杜氏が食べ終える前に、数値は図に載っている。",
              zh:"第一次真正的休息。與此同時，有人自每一槽運作中的醪取樣、測量品溫與波美度，而在杜氏吃完之前，數字已經上了曲線圖。"} },
          { year:"10:00", era:{en:"Late morning",ja:"午前",zh:"上午"},
            title:{en:"Kōji room, first turn",ja:"麹室・床もみ",zh:"麴室・首次翻拌"}, jp:"床もみ",
            text:{en:"Spores are sprinkled and the rice is mixed by hand on the cedar bed. From here the kōji-ya is on a clock that will not let go for forty-eight hours.",
              ja:"種を振り、杉の床の上で手で揉み込む。ここから麹屋は、四十八時間放してくれない時計のなかに入る。",
              zh:"撒下種麴，在杉木床上以手翻拌。從此刻起，麴屋便進入一具四十八小時不放人的時鐘之中。"} },
          { year:"13:00", era:{en:"Afternoon",ja:"午後",zh:"下午"},
            title:{en:"Washing, and tomorrow's rice",ja:"洗米と翌日の米",zh:"洗米與明日之米"}, jp:"洗米・浸漬",
            text:{en:"Tomorrow's batch is washed in cold water and soaked to the second, weighed wet, and drained. For a ginjō this is done in small nets, by hand, with a stopwatch, and it is the quietest and most exacting hour of the day.",
              ja:"翌日の米を冷水で洗い、秒単位で浸し、濡れたまま量り、水を切る。吟醸では小さな網に分け、手で、秒針を見ながら行う。一日のうちで最も静かで、最も厳密な一時間である。",
              zh:"明天要用的米以冷水洗淨、以秒計時浸漬、濕重過秤，再瀝乾。若是吟釀，則分裝小網、以手工進行、看著碼表操作——這是一天中最安靜也最一絲不苟的一小時。"} },
          { year:"16:00", era:{en:"Evening",ja:"夕",zh:"傍晚"},
            title:{en:"Cleaning",ja:"洗浄",zh:"清洗"}, jp:"洗い",
            text:{en:"Everything used that day is washed, and then washed again. This is the single largest use of time and water in a brewery, and the reason a working kura smells of nothing but rice and steam.",
              ja:"その日に使ったすべてを洗い、そしてもう一度洗う。蔵において時間と水を最も多く費やす仕事であり、稼働中の蔵が米と蒸気のほかに何の匂いもしない理由である。",
              zh:"當天用過的一切都要洗，然後再洗一次。這是酒藏中耗費時間與用水最多的工作，也是運作中的酒藏除了米與蒸氣之外別無其他氣味的原因。"} },
          { year:"22:00 · 02:00", era:{en:"Night",ja:"夜半",zh:"夜半"},
            title:{en:"The kōji turns",ja:"仲仕事・仕舞仕事",zh:"中作業・收尾作業"}, jp:"手入れ",
            text:{en:"The kōji is turned two or three more times through the night, at fixed intervals, to control temperature and moisture. Somebody sets an alarm, gets up, walks into a 32°C room, works for twenty minutes, and goes back to bed. This is the part of brewing that no machine and no romance has ever made comfortable.",
              ja:"夜のあいだ、麹は決まった間隔でさらに二度、三度と手入れされる。温度と水分を御するためである。誰かが目覚ましをかけ、起き、三十二度の部屋へ入り、二十分働き、また寝る。機械も情緒も、いまだかつて快適にしたことのない部分である。",
              zh:"整夜之間，麴還要依固定間隔翻動兩到三次，以控制溫度與水分。有人設好鬧鐘、起身、走進 32°C 的房間、工作二十分鐘，然後回去睡。這是釀酒中從未被任何機械或任何浪漫想像變得舒適的部分。"} }
        ] },
        { t:"note", label:{en:"Why the hours are the way they are",ja:"時間がこの形である理由",zh:"工時何以如此"}, text:{
          en:"None of this is tradition for its own sake. Kōji has a two-day life cycle that does not align with a working day, steamed rice cools whether or not anyone is ready for it, and a mash's temperature does not wait until morning. Every attempt to make brewing fit an eight-hour shift has run into the same wall, and the modern answer has been more staff on rotation rather than a shorter process.",
          ja:"これらのいずれも、伝統のための伝統ではない。麹は勤務時間と噛み合わない二日の周期をもち、蒸米は誰の都合も待たずに冷め、醪の温度は朝まで待たない。造りを八時間の勤務に収めようとする試みは、いずれも同じ壁に突き当たってきた。現代の答えは、工程を短くすることではなく、交代する人手を増やすことであった。",
          zh:"這一切都不是為傳統而傳統。麴有一個與上班時間無法對齊的兩日週期；蒸米不會等任何人準備好才降溫；醪的溫度也不會等到早晨。所有試圖把釀造塞進八小時輪班的努力，都撞上同一堵牆；而現代的答案，是增加輪班人手，而非縮短工序。" } }
      ]
    },

{ t:"section", id:"decisions",
      title:{ en:"What a tōji is actually deciding", ja:"杜氏が実際に決めていること", zh:"杜氏實際上在決定什麼" }, jp:"判断",
      body:[
        { t:"p", text:{
          en:"The romantic account of a tōji is of intuition and long experience. The accurate account is of a person making a specific, listable set of judgement calls, most of them under time pressure, each of which propagates through everything that follows. There are perhaps a dozen that matter, and they are the same dozen in every brewery.",
          ja:"杜氏についての情緒的な語りは、勘と長い経験の話である。正確な語りは、具体的で列挙可能な一組の判断を、その多くを時間に追われながら下す人間の話である。そのいずれもが、以後のすべてに波及する。効くものはおそらく十数、そしてそれはどの蔵でも同じ十数である。",
          zh:"關於杜氏的浪漫敘述，講的是直覺與長年經驗。準確的敘述則是：一個人做出一組具體、可列舉的判斷，其中多數是在時間壓力下做出的，而每一項都會沿著後續的一切傳遞下去。真正要緊的大概有十來項，而且在每一家酒藏都是同樣的那十來項。" } },

        { t:"table",
          cols:[{en:"Decision",ja:"判断",zh:"判斷"},{en:"When",ja:"時点",zh:"時點"},{en:"What it commits",ja:"何を決定づけるか",zh:"它決定了什麼"}],
          rows:[
            [{en:"How long to soak the rice",ja:"浸漬の秒数",zh:"浸漬幾秒"},{en:"Before dawn, each batch",ja:"未明、仕込みごと",zh:"每一批，天亮前"},
             {en:"Water uptake decides how the grain steams and therefore how the kōji grows into it. For a daiginjō the window is measured with a stopwatch and a scale, and there is no correcting it later.",
              ja:"吸水率が蒸し上がりを決め、ゆえに麹の食い込み方を決める。大吟醸ではストップウォッチと秤で計られ、あとから直す術はない。",
              zh:"吸水率決定米如何被蒸熟，進而決定麴如何長進去。釀大吟釀時要用碼錶與磅秤計量，而且事後無從補救。"}],
            [{en:"When to stop the steaming",ja:"蒸しを止める時",zh:"何時停止蒸米"},{en:"Each morning",ja:"毎朝",zh:"每天早上"},
             {en:"Firm outside, soft inside is the target; over-steamed rice dissolves too fast in the mash and gives a heavy, sweet sake. Judged by hand — a pinch of rice worked into a flat disc tells an experienced person everything.",
              ja:"外硬内軟が目標である。蒸しすぎた米は醪で溶けすぎ、重く甘い酒を生む。判じるのは手である——ひねり餅にすれば、慣れた者にはすべてが分かる。",
              zh:"目標是外硬內軟；蒸過頭的米在醪中溶得太快，會做出沉重偏甜的酒。憑手判斷——把一撮米搓成扁餅，有經驗的人便一目了然。"}],
            [{en:"The kōji temperature curve",ja:"製麹の温度曲線",zh:"製麴的溫度曲線"},{en:"Over 48 hours",ja:"四十八時間",zh:"四十八小時"},
             {en:"How high to let the mould's own heat climb, and how long to hold it. This sets the balance between saccharifying and protein-breaking enzymes — that is, between a clean sake and a savoury one.",
              ja:"菌自身の熱をどこまで上げさせ、どれだけ保つか。糖化酵素とたんぱく質分解酵素との均衡、すなわち清らかな酒と旨味の酒との別を、ここで決める。",
              zh:"讓麴菌自身的熱升到多高、維持多久。這設定了糖化酵素與蛋白分解酵素之間的平衡——也就是「乾淨的酒」與「旨味的酒」之間的分野。"}],
            [{en:"When the starter is ready",ja:"酒母の使い時",zh:"酒母何時可用"},{en:"Day 14–30",ja:"14〜30日目",zh:"第 14–30 天"},
             {en:"Too early and the yeast population is too small to outcompete anything else; too late and the yeast is stressed and slow. Read from acidity, density and how the surface behaves.",
              ja:"早すぎれば酵母の数が足らず他を制せず、遅すぎれば酵母が疲れて鈍る。酸度と比重、そして表面の様子から読む。",
              zh:"太早，酵母數量不足以壓過其他菌；太晚，酵母已受壓而遲鈍。從酸度、比重與液面的樣態判讀。"}],
            [{en:"The temperature of each addition",ja:"三段仕込みの各段の温度",zh:"三段仕込各段的溫度"},{en:"Days 1–4 of the mash",ja:"醪の1〜4日目",zh:"醪的第 1–4 天"},
             {en:"Each stage is added at a chosen temperature, and the choices together set the shape of the whole fermentation curve. Cold and slow gives ginjō character; warmer and faster gives body and yield.",
              ja:"各段は選ばれた温度で加えられ、その選択の総和が発酵曲線全体の形を決める。低く遅ければ吟醸の性格を、高く速ければ厚みと歩留まりを与える。",
              zh:"每一段都在選定的溫度下加入，而這些選擇的總和決定了整條發酵曲線的形狀。低溫緩慢者得吟釀性格，較溫較快者得酒體與產率。"}],
            [{en:"How hard to chase the peak",ja:"最高温度をどこまで許すか",zh:"允許峰溫到多高"},{en:"Days 8–14",ja:"8〜14日目",zh:"第 8–14 天"},
             {en:"The mash generates heat and the tōji decides how much to permit. A degree or two either way over several days is the difference between a ginjō and an ordinary sake made from the same rice.",
              ja:"醪は熱を生み、それをどこまで許すかを杜氏が決める。数日にわたる一、二度の差が、同じ米から吟醸を生むか普通の酒を生むかを分ける。",
              zh:"醪會產熱，而由杜氏決定容許多少。連續數天一兩度的差別，就是同一批米做出吟釀還是普通酒的分野。"}],
            [{en:"When to press",ja:"上槽の日",zh:"何時上槽"},{en:"Day 20–40",ja:"20〜40日目",zh:"第 20–40 天"},
             {en:"The single most consequential call. Press early for freshness and higher residual sugar; press late for dryness, alcohol and yield — and risk the mash going tired or bitter. Read from the density curve, the smell and the taste of the mash.",
              ja:"最も帰結の大きい一つの判断である。早く搾れば新鮮さと残糖を、遅く搾れば辛さとアルコールと歩留まりを得る——そして醪が疲れ、苦くなる危険を負う。比重の曲線、香り、醪の味から読む。",
              zh:"這是後果最重大的一項判斷。早搾得到鮮度與較高殘糖；晚搾得到乾爽、酒精與產率——但也冒著醪變疲、變苦的風險。從比重曲線、氣味與醪的味道判讀。"}],
            [{en:"Where to stop the press",ja:"搾りをどこで止めるか",zh:"壓榨在哪裡停"},{en:"Pressing day",ja:"上槽当日",zh:"上槽當天"},
             {en:"The last fraction is coarse and bitter, and it is also several per cent of the year's revenue. Every brewery draws this line somewhere, and where it draws it is a statement about what it is for.",
              ja:"最後の画分は粗く苦く、そして年の売上の数パーセントでもある。どの蔵もどこかにこの線を引き、どこに引くかが、その蔵が何のためにあるかの表明となる。",
              zh:"最後那一段粗糙而苦，卻也占了全年營收的好幾個百分點。每家酒藏都在某處畫下這條線，而畫在哪裡，就是它「為何而存在」的表態。"}],
            [{en:"Which tanks to blend",ja:"どのタンクを合わせるか",zh:"哪幾槽要調和"},{en:"Before bottling",ja:"瓶詰め前",zh:"裝瓶前"},
             {en:"Twenty tanks become five products. This is the least visible skill in the building and arguably the one that most determines whether a customer recognises the brand next year.",
              ja:"二十のタンクが五つの商品になる。建物のうち最も目に見えない技であり、来年その銘柄を客が同じものと認めるかを最も左右する技でもある。",
              zh:"二十只酒槽變成五款產品。這是整棟建築裡最看不見的技藝，也可說是最能決定顧客明年是否還認得出這個品牌的技藝。"}]
          ] }
      ] },

    { t:"section", id:"transmission",
      title:{ en:"How the knowledge moves now", ja:"技は今どう伝わるか", zh:"技藝如今如何傳遞" }, jp:"継承",
      body:[
        { t:"p", text:{
          en:"Under the guild system, learning was a ladder: a decade or more moving up through the ranks under one tōji, in one brewery, one season at a time, with almost nothing written down. That mechanism has largely gone, and three things have taken its place — none of which reproduces it exactly.",
          ja:"組の制度において、学びは梯子であった。一人の杜氏のもと、一つの蔵で、一季ずつ、役を上がりながら十年以上を過ごす。ほとんど何も書かれることはなかった。その仕組みはおおむね消え、三つのものがその席に着いた。いずれもそれを正確には再現しない。",
          zh:"在行會制度下，學習是一道階梯：在一位杜氏手下、在一家酒藏裡，一季一季地往上升，歷時十年以上，而且幾乎什麼都不寫下來。這套機制大體上已經消失，取而代之的有三樣東西——沒有一樣能完全複製它。" } },

        { t:"compare", cols:3, items:[
          { title:{ en:"Written procedure", ja:"文書化された手順", zh:"書面化的工序" }, jp:"マニュアル化",
            text:{ en:"What Dassai did.", ja:"獺祭が行ったこと。", zh:"獺祭所做的事。" },
            body:[
              { t:"p", text:{
                en:"Reduce the season to documented steps and continuous measurement, and train salaried staff to execute them. It works, it scales, it survives a person leaving, and it produces very consistent sake. What it does not do is generate the judgement to handle a season that behaves unlike any previous one — for that the brewery falls back on data and on whoever is reading it.",
                ja:"一季を文書化された手順と継続的な計測に還元し、通年の社員にそれを実行させる。機能し、規模を得られ、人が去っても残り、きわめて均質な酒を生む。生まないのは、前例のない季に対処する判断である。そのとき蔵が頼るのはデータと、それを読む者である。",
                zh:"把一整季化約為有紀錄的步驟與連續測量，並訓練受薪員工照做。它有效、可規模化、能在人員離職後留存，並產出高度穩定的酒。它做不到的，是生成應對「與過往任何一季都不同」的判斷力；那時酒藏只能回頭倚賴數據，以及讀數據的那個人。" } }
            ] },
          { title:{ en:"Institutional training", ja:"公的な訓練", zh:"機構性訓練" }, jp:"講習と資格",
            text:{ en:"Prefectures and the research institute.", ja:"県と研究機関。", zh:"各縣與研究機構。" },
            body:[
              { t:"p", text:{
                en:"Prefectural institutes run courses, the national brewing research institute runs longer ones, and there is a national trade skill certification for sake brewing. These transmit the science efficiently and the craft only partially — you can be taught what a kōji temperature curve should look like far faster than you can be taught to feel that a batch is going wrong at two in the morning.",
                ja:"県の機関は講習を、国の醸造研究機関はより長い課程を持ち、酒造りには国家の技能検定もある。これらは科学を効率よく伝え、技を部分的にしか伝えない。麹の温度曲線がどうあるべきかは、午前二時にこの一枚がおかしいと感じられるようになるより、はるかに速く教えられる。",
                zh:"各縣的研究機構開設講習，國家級的釀造研究機構開設更長的課程，而釀酒也有國家技能檢定。這些能有效傳遞科學，卻只能部分傳遞技藝——教會你「麴的溫度曲線該長什麼樣」，遠比教會你「在凌晨兩點感覺到這一批不對勁」要快得多。" } }
            ] },
          { title:{ en:"The owner-brewer", ja:"蔵元杜氏", zh:"藏元杜氏" }, jp:"当主が醸す",
            text:{ en:"The commonest answer now.", ja:"今日最も多い答え。", zh:"如今最常見的答案。" },
            body:[
              { t:"p", text:{
                en:"A successor returns, often after a science degree and a few years elsewhere, trains under a departing tōji or at an institute, and takes the role themselves. This is the pattern behind most of the celebrated small breweries of the last twenty years. Its weakness is obvious: it depends on there being a successor, and the industry's closures are mostly cases where there was not.",
                ja:"後継者が戻る。多くは理系の学位と他所での数年を経てである。去りゆく杜氏のもと、あるいは研究機関で学び、自らその職に就く。この二十年に名を成した小さな蔵の多くは、この型である。弱点は明らかである——後継者がいることに依存しており、業界の廃業の多くは、いなかった場合である。",
                zh:"後繼者回來——往往是在取得理工學位、在外歷練幾年之後；他在即將離職的杜氏手下或在研究機構學習，然後自己接下這個職位。過去二十年間備受讚譽的小酒藏，多半屬於這個模式。它的弱點很明顯：這仰賴「有後繼者」，而產業中的歇業多半正是沒有後繼者的情況。" } }
            ] }
        ] },

        { t:"note", text:{
          en:"None of the three is the old system, and it is worth being honest that something was lost with it — a body of tacit knowledge held collectively by a guild, transmitted by working alongside, and never written down anywhere. What has been gained is that a person with no family brewery can now learn to brew. See <a href=\"people.html#guilds\">People</a> and <a href=\"women.html\">Women and Sake</a>.",
          ja:"三つのいずれも旧来の制度ではなく、それとともに何かが失われたことは正直に認めるべきである——組が集団として保ち、共に働くことで伝え、どこにも書かれることのなかった暗黙の知の体系である。得られたのは、家に蔵を持たぬ者が醸すことを学びうるようになったことである。<a href=\"people.html#guilds\">人物</a>および<a href=\"women.html\">女性と日本酒</a>を参照。",
          zh:"這三者都不是舊制度，而且該誠實承認：隨著它，有些東西失去了——一整套由行會集體持有、透過並肩工作傳遞、從未被寫下的默會知識。而得到的是：一個家裡沒有酒藏的人，如今也能學會釀酒。見<a href=\"people.html#guilds\">人物</a>與<a href=\"women.html\">女性與日本酒</a>。" } }
      ] },

    { t:"related", items:[
      { href:"people.html", why:{ en:"The individuals the guilds produced.", ja:"組が生んだ個々の人々。", zh:"這些行會所造就的具體人物。" } },
      { href:"women.html", why:{ en:"Who the guild system kept out, and for how long.", ja:"組の仕組みが誰を、どれだけの間、締め出したか。", zh:"行會制度把誰擋在外面，擋了多久。" } },
      { href:"calendar.html", why:{ en:"The season the guild year was built around.", ja:"組の一年が沿って組まれていた季節。", zh:"杜氏之年所圍繞的那個季節。" } },
      { href:"industry.html", why:{ en:"What replaced the seasonal crew, and what it costs.", ja:"季節の組に代わったものと、その費え。", zh:"取代季節性班底的東西，以及它的代價。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- calendar */
SAKE.pages["calendar"] = {
  kicker: { en: "Making · 13", ja: "造り · 13", zh: "釀造 · 13" },
  title:  { en: "The Brewing Year", ja: "酒造の一年", zh: "釀造的一年" },
  jp: "酒造年度と季節",
  lede: {
    en: "A brewery does not run at a constant rate. Its year has a shape — a quiet summer of repairs and shipping, an autumn of arriving rice and gathering crews, a winter of continuous work in the cold, and a spring that ends in a single ceremonial last steaming. That shape governs when sake is made, what is on the shelf in any given month, why a cedar ball hangs over the door and what colour it is, and even how the tax year is counted. This page is the calendar: the official brewing year, the work in each season, the seasonal releases, and what changed when refrigeration made all of it optional.",
    ja: "蔵は一定の速さで動くのではない。その一年には形がある——修繕と出荷の静かな夏、新米が届き蔵人が集まる秋、寒さのなかで途切れなく働く冬、そして一度きりの儀礼的な最後の蒸しで終わる春。その形が、いつ酒が造られるかを、どの月に何が棚に並ぶかを、なぜ軒に杉の玉が吊られ、それが何色であるかを、そして税の年度の数え方までを支配している。このページはその暦である——公式の酒造年度、季節ごとの仕事、季節の酒、そして冷却設備がそのすべてを任意にしたときに何が変わったか。",
    zh: "酒藏並非以恆定的速度運轉。它的一年有一個形狀——修繕與出貨的安靜夏季、新米抵達與工班集結的秋季、在寒冷中連續工作的冬季，以及以一次儀式性的最後蒸米作結的春季。這個形狀決定了酒何時被釀造、任一月份架上有什麼、為何門楣掛著一顆杉球以及它是什麼顏色，甚至決定了稅務年度怎麼算。本頁就是那份曆：官方的酒造年度、各季節的工作、季節限定的酒，以及當冷卻設備讓這一切都變成可選項之後，發生了什麼改變。"
  },
  body: [

    { t:"section", id:"by",
      title:{ en:"The brewing year is not the calendar year", ja:"酒造年度は暦年ではない", zh:"酒造年度不是日曆年" }, jp:"酒造年度",
      body:[
        { t:"p", text:{
          en:"Japan's official <em>brewery year</em> — <em>shuzō nendo</em>, abbreviated BY — runs from 1 July to 30 June. It is a tax and statistics convention, but it maps onto the physical reality of brewing better than a January-to-December year would: it starts in the dead season, so that a single brewing campaign falls entirely inside one accounting period instead of being split across the New Year.",
          ja:"日本の公式の酒造年度（BY）は、七月一日から翌年六月三十日までである。税と統計の取り決めであるが、一月から十二月までの年よりも酒造りの物理的な現実によく対応している——閑期に始まるため、一つの造りの季節が正月をまたいで分断されることなく、まるごと一つの会計期間に収まるのである。",
          zh:"日本官方的「酒造年度」（BY）自七月一日起至翌年六月三十日止。這是稅務與統計上的約定，但它比一月到十二月的年度更貼合釀造的物理現實：它從淡季開始，因此一整個釀造季完整落在同一個會計期間內，而不會被跨年切成兩半。" } },

        { t:"grid", cols:3, cells:[
          { k:{ en:"Brewery year", ja:"酒造年度", zh:"酒造年度" }, jp:"BY",
            v:{ en:"1 Jul – 30 Jun", ja:"7月1日〜6月30日", zh:"7月1日–6月30日" },
            d:{ en:"Written on labels and in statistics as, for example, R7BY or 令和7酒造年度. A bottle marked 6BY was brewed in the season that began in July of that year.",
              ja:"ラベルや統計に、たとえばR7BY、令和7酒造年度のように記される。6BYと記された瓶は、その年の七月に始まった季に醸されたものである。",
              zh:"在酒標與統計上寫作例如 R7BY 或「令和 7 酒造年度」。標示 6BY 的酒瓶，是在該年七月開始的那一季所釀。" } },
          { k:{ en:"Rice year", ja:"米穀年度", zh:"米穀年度" }, jp:"11月から",
            v:{ en:"1 Nov – 31 Oct", ja:"11月1日〜10月31日", zh:"11月1日–10月31日" },
            d:{ en:"Rice is counted on its own year, beginning after the harvest. The two calendars overlap awkwardly, which is why the first month or two of a brewing season sometimes uses the previous year's rice.",
              ja:"米は収穫後に始まる独自の年度で数えられる。二つの暦は噛み合わせが悪く、造りの季の最初の一、二か月に前年の米が使われることがあるのはそのためである。",
              zh:"稻米以自己的年度計算，起算於收成之後。兩套曆對不太齊，因此釀造季最初的一兩個月，有時仍在使用前一年的米。" } },
          { k:{ en:"Tax year", ja:"会計年度", zh:"會計年度" }, jp:"4月から",
            v:{ en:"1 Apr – 31 Mar", ja:"4月1日〜3月31日", zh:"4月1日–3月31日" },
            d:{ en:"Japan's fiscal year, on which liquor tax rates and law changes take effect. A brewery therefore lives inside three different year-counts at once, which is one reason its paperwork is heavy.",
              ja:"日本の会計年度であり、酒税率や法令の改正はこれに従って効力を持つ。蔵は同時に三つの異なる年度のなかを生きることになり、書類仕事が重い理由の一つである。",
              zh:"日本的財政年度，酒稅稅率與法令修改依此生效。因此一家酒藏同時活在三種不同的年度計算之中——這也是它文書工作繁重的原因之一。" } }
        ] }
      ] },

    { t:"section", id:"seasons",
      title:{ en:"The four seasons of a kura", ja:"蔵の四季", zh:"酒藏的四季" }, jp:"季節の仕事",
      body:[
        { t:"steps", items:[
          { n:"夏", title:{ en:"Summer — the empty months", ja:"夏——空の季節", zh:"夏——空著的月份" }, jp:"閑期", romaji:"kanki",
            meta:{ en:"July to September · no brewing", ja:"七月から九月・仕込みなし", zh:"七月至九月・不釀造" },
            text:{ en:"The tanks are washed and left open, the kōji room is dried out and sterilised, the press is stripped and repaired, and the building's roof and walls are put right before the typhoon season. This is also when the brewery does everything that is not brewing: bottling and shipping stored sake, sales trips, hosting visitors, and negotiating the coming season's rice contracts, which are settled well before the crop is in. Under the old seasonal system, the crew were not here at all — they were farming at home. In a modern brewery the same people are doing office work.",
              ja:"タンクは洗われて開け放たれ、麹室は乾かして殺菌され、圧搾機は分解して修理され、台風の季節の前に屋根と壁が直される。この時期はまた、蔵が造り以外のすべてを行うときでもある——貯蔵した酒の瓶詰めと出荷、営業、来客の応対、そして収穫のはるか前に決まる翌季の米の契約の交渉。かつての季節労働の制度では、蔵人はここにいなかった——郷で田を作っていたのである。現代の蔵では、同じ人々が事務をしている。",
              zh:"酒槽被洗淨後敞開，麴室烘乾並殺菌，壓榨機拆解修理，建物的屋頂與牆面則趕在颱風季前修好。這也是酒藏處理一切「非釀造事務」的時候：貯藏酒的裝瓶出貨、業務出差、接待訪客，以及洽談來季的稻米契約——那遠在收成之前就得談定。在舊的季節工制度下，藏人根本不在這裡，他們回鄉種田去了。在現代酒藏，同一批人在做行政工作。" } },
          { n:"秋", title:{ en:"Autumn — the season opens", ja:"秋——季が開く", zh:"秋——開季" }, jp:"蔵入り", romaji:"kura-iri",
            meta:{ en:"October to November · rice arrives, crews gather", ja:"十月から十一月・新米が届き、蔵人が集まる", zh:"十月至十一月・新米抵達，工班集結" },
            text:{ en:"New rice comes in and is tested, milled and rested — polished rice is hot and dry and must sit for days or weeks before it can be washed. The crew arrives and the brewery holds its safe-brewing prayer, often at or through one of the brewing shrines. Then comes <em>koshiki-okoshi</em>, the raising of the steaming vat: the first steaming of the year, and the formal start of work. Meanwhile the sake pressed the previous winter, which has spent the summer maturing in tank, is released as <em>hiyaoroshi</em> or <em>akiagari</em> — the autumn shipping is of last year's work, even as this year's begins.",
              ja:"新米が入り、検査され、精米され、そして枯らされる——磨いた米は熱く乾いており、洗う前に数日から数週を置かねばならない。蔵人が入り、蔵は醸造安全の祈願を行う。しばしば酒の神を祀る社を通じて行われる。そして甑起こし——その年の初蒸しであり、仕事の正式な始まりである。かたわらで、前の冬に搾られ、夏をタンクで越した酒が、ひやおろし、秋あがりとして出される。秋の出荷は昨季の仕事のものであり、今季の仕事はまさに今始まっている。",
              zh:"新米入庫、檢驗、碾磨，然後靜置——剛磨好的米又熱又乾，必須放上數日至數週才能洗。藏人進駐，酒藏舉行釀造平安的祈願，往往透過供奉酒神的神社進行。接著是「甑起こし」——當年的第一次蒸米，也是工作的正式開始。與此同時，去年冬天壓榨、在酒槽中度過整個夏天的酒，以「冷卸」或「秋上」之名出貨——秋天出的是去年的成果，而今年的工作才剛開始。" } },
          { n:"冬", title:{ en:"Winter — continuous work", ja:"冬——絶え間ない仕事", zh:"冬——不間斷的工作" }, jp:"寒造り", romaji:"kanzukuri",
            meta:{ en:"December to February · the season proper", ja:"十二月から二月・本番", zh:"十二月至二月・正季" },
            text:{ en:"Tank after tank, on a rolling schedule: a starter every few days, each one followed twenty days later by a three-stage mash, each mash followed a month later by a pressing. Everything overlaps, and the calendar is a wall chart. The kōji room runs day and night. The first pressing of the year yields <em>shiboritate</em>, the raw new sake, and a brewery that sells to the public will hold a <em>kurabiraki</em> — an open day — to sell it. This is also when the cedar ball at the door is replaced with a fresh green one to announce that the new sake is out.",
              ja:"タンクまたタンクと、流れる日程で進む——数日おきに酒母を立て、その二十日後に三段仕込みが続き、その一か月後に上槽が続く。すべてが重なり合い、暦は壁の一覧表となる。麹室は昼夜を分かたず動く。その年の初搾りは搾りたて、すなわち生まれたばかりの新酒であり、一般に売る蔵は蔵開きを催してこれを売る。軒の杉玉が新しい緑のものに掛け替えられ、新酒の出来たことを告げるのもこの時期である。",
              zh:"一槽接著一槽，以滾動的排程推進：每隔幾天立一批酒母，二十天後接三段仕込，再一個月後接上槽。一切彼此重疊，行事曆成了牆上的大表。麴室日夜運轉。當年的第一次壓榨產出「搾りたて」，也就是剛誕生的新酒；有零售的酒藏會舉辦「藏開き」開放日來販售它。門口的杉球也在此時換上新的綠色，宣告新酒已出。" } },
          { n:"春", title:{ en:"Spring — the last steaming", ja:"春——最後の蒸し", zh:"春——最後一次蒸米" }, jp:"甑倒し・皆造", romaji:"koshiki-daoshi / kaijō",
            meta:{ en:"March to May · the season closes", ja:"三月から五月・季が閉じる", zh:"三月至五月・收季" },
            text:{ en:"<em>Koshiki-daoshi</em> — laying down the steaming vat — is the last steaming of the season, and it is marked. The vat is turned over, the crew drinks together, and from that day no more rice is steamed. Pressing continues for another month or so until <em>kaijō</em>, the completion of all brewing. Then the entries go to the national appraisal, judged in spring, and under the old system the crew went home to plant rice. What they had made stays in tank through the summer, to be shipped in autumn as hiyaoroshi — and the cycle closes.",
              ja:"甑倒し——甑を伏せること——は、その季の最後の蒸しであり、節目とされる。甑は伏せられ、蔵人はともに飲み、その日を最後に米は蒸されない。上槽はさらに一か月ほど続き、やがて皆造、すなわち造りのすべての完了に至る。そして出品酒は春に審査される全国の鑑評会へ送られ、旧来の制度では蔵人は田を植えに郷へ帰った。彼らが造ったものは夏のあいだタンクに留まり、秋にひやおろしとして出荷される——こうして環は閉じる。",
              zh:"「甑倒し」——把蒸米的甑倒放——是該季最後一次蒸米，並被鄭重標記。甑被翻倒，藏人一同飲酒；自那天起不再蒸米。壓榨還會再持續一個月左右，直到「皆造」，即所有釀造工作完成。接著出品酒送往春季評審的全國鑑評會；在舊制度下，藏人則返鄉插秧。他們釀成的酒在酒槽中度過夏天，秋天以冷卸出貨——循環於是閉合。" } }
        ] }
      ] },

    { t:"section", id:"why-winter",
      title:{ en:"Why winter, and why that no longer holds", ja:"なぜ冬か、そしてなぜそれはもう成り立たないか", zh:"為何是冬天，以及為何這已不再成立" }, jp:"寒造り",
      body:[
        { t:"p", text:{
          en:"Four separate pressures converged on winter, and only one of them was about flavour.",
          ja:"四つの別々の圧力が冬に収束した。そしてそのうち味に関わるものは一つだけであった。",
          zh:"有四股各自獨立的壓力匯聚到了冬天，而其中只有一股與風味有關。" } },

        { t:"ol", items:[
          { en:"<strong>Microbial load.</strong> A brewery in August is full of airborne wild yeast and lactic bacteria; in January it is not. Before pure cultures and sterile technique, cold air was the only workable defence against a spoiled tank, and a spoiled tank could ruin a house.",
            ja:"<strong>雑菌の量。</strong>八月の蔵は空中の野生酵母と乳酸菌に満ちている。一月にはそうではない。純粋培養と無菌の技術以前、冷たい空気こそが腐造への唯一の実際的な防御であり、そして一本の腐造は一軒の家を潰しえた。",
            zh:"<strong>微生物負荷。</strong>八月的酒藏充滿空氣中的野生酵母與乳酸菌，一月則不然。在純粹培養與無菌技術出現之前，冷空氣是防止腐造的唯一可行手段——而一槽腐造足以毀掉一個家業。" },
          { en:"<strong>Fermentation control.</strong> The parallel fermentation of sake generates heat, and a large tank has a poor surface-to-volume ratio. Without cooling equipment, ambient cold was the only brake, and it is the reason a long, low, slow ferment — the basis of ginjō — was physically possible only in a cold building.",
            ja:"<strong>発酵の制御。</strong>並行複発酵は熱を生み、大きなタンクは表面積と容積の比が悪い。冷却設備なしには外気の寒さだけが制動であり、長く低く緩やかな発酵——吟醸の基礎——が寒い建物のなかでのみ物理的に可能であった理由である。",
            zh:"<strong>發酵控制。</strong>並行複發酵會產熱，而大槽的表面積與體積比很差。沒有冷卻設備時，外界的低溫是唯一的煞車；這也是為何長時間、低溫、緩慢的發酵——吟釀的基礎——只有在寒冷的建築裡才物理上可行。" },
          { en:"<strong>Labour.</strong> The crews were farmers. Winter was the only season in which several dozen skilled men could leave their villages for three months, and the whole guild system depended on that.",
            ja:"<strong>労働。</strong>蔵人は農民であった。数十人の熟練が三か月にわたり村を離れうる季節は冬だけであり、杜氏集団の制度全体がそれに依存していた。",
            zh:"<strong>勞動力。</strong>藏人本是農民。冬天是唯一能讓數十名熟練工離村三個月的季節，而整套杜氏行會制度都建立在這一點之上。" },
          { en:"<strong>Law.</strong> From the seventeenth century the shogunate repeatedly restricted brewing to the winter season, chiefly to control how much rice went into sake rather than into food. What began as a rice-supply measure hardened into a technical tradition, and by the time the restriction lapsed nobody wanted to brew in summer anyway.",
            ja:"<strong>法。</strong>十七世紀以降、幕府は繰り返し酒造りを冬に限った。主として、食ではなく酒へ回る米の量を制御するためである。米の需給の措置として始まったものが技術の伝統へと固まり、制限が消えるころには、そもそも夏に醸したい者はいなかった。",
            zh:"<strong>法令。</strong>自十七世紀起，幕府一再把釀酒限制在冬季，主要是為了控制有多少米流向酒而非食用。原本作為稻米供應措施而生的規定，硬化成了技術傳統；等到限制失效時，也已經沒有人想在夏天釀酒了。" }
        ] },

        { t:"p", text:{
          en:"Refrigeration dissolved the first two of those and the collapse of the farming-village labour supply dissolved the third. <em>Shiki jōzō</em> — four-season brewing — puts the mash in a temperature-controlled room and runs the brewery all year, and the largest producers have done so since the mid-twentieth century. It gives even output, salaried year-round staff, and fresher sake reaching shops in months when there would otherwise be none. What it removes is the annual rhythm: no last steaming, no crew going home, no single moment when the year's work is done. Most small breweries still brew only in winter, and increasingly they say so on the label, because the constraint has become a claim.",
          ja:"冷却設備が最初の二つを溶かし、農村の労働供給の崩壊が三つ目を溶かした。四季醸造は醪を温度管理された室に置き、蔵を通年で動かす。最大手は二十世紀半ばからそうしてきた。それは均された生産、通年雇用の社員、そして本来なら何もない月に店へ届く新しい酒をもたらす。取り去られるのは一年の律動である——最後の蒸しはなく、郷へ帰る蔵人もなく、その年の仕事が終わる一つの瞬間もない。小さな蔵の多くは今も冬にしか醸さず、そしてますますそれをラベルに記す。制約が主張になったからである。",
          zh:"冷卻設備溶解了前兩項，農村勞動供給的崩解溶解了第三項。「四季釀造」把醪放進控溫的房間，讓酒藏全年運轉；最大的生產者自二十世紀中葉起便如此。它帶來均衡的產出、全年受薪的員工，以及在原本空無一物的月份仍能送達店頭的新鮮酒。它取走的是一年的節律：沒有最後一次蒸米，沒有藏人返鄉，也沒有一年工作完成的那個單一時刻。多數小酒藏至今仍只在冬天釀酒，而且越來越常把這件事寫在酒標上——因為限制已經變成了一種主張。" } }
      ] },

    { t:"section", id:"rites",
      title:{ en:"The days that have names", ja:"名を持つ日", zh:"有名字的日子" }, jp:"酒造りの歳時記",
      body:[
        { t:"p", text:{
          en:"A brewing season is punctuated by a handful of days that are not tasks but markers, each with its own word. They are worth knowing because they are the vocabulary a brewery uses to describe its own year — and because two of them are, in effect, examinations.",
          ja:"酒造りの一季は、仕事ではなく節目である幾つかの日によって区切られ、そのそれぞれが自らの語を持つ。知っておく値打ちがある。それらは蔵が自らの一年を語るための語彙だからであり、そしてそのうち二つは、実のところ試験だからである。",
          zh:"一個釀造季由幾個日子劃分開來——它們不是工作，而是標記，各自擁有自己的名字。值得認識，因為它們是一家酒藏用來描述自己這一年的語彙；也因為其中兩個，實質上就是考試。" } },
        { t:"steps", items:[
          { n:1, title:{ en:"Setting the steamer up", ja:"甑を立てる", zh:"立起甑" }, jp:"甑起こし・甑立て", romaji:"koshiki-okoshi", meta:{ en:"October", ja:"十月", zh:"十月" },
            text:{ en:"The first steaming of the season. The koshiki — the vessel the rice is steamed in, and the oldest tool in the building — is raised, and from that morning the brewery does not stop. Many houses mark it with a Shinto rite and a first cup poured for the kami of the brewery.",
              ja:"その季の最初の蒸しである。甑——米を蒸す器であり、建物のうち最も古い道具——が立てられ、その朝より蔵は止まらない。多くの家がこれを神事と、蔵の神へ注ぐ最初の一杯とをもって印す。",
              zh:"這一季的第一次蒸米。甑——蒸米所用的器具，也是這棟建築裡最古老的工具——被立起，而從那個早晨起，酒藏就不再停下。許多酒藏會以一場神事、以及為藏中之神斟上的第一杯酒來標記它。" } },
          { n:2, title:{ en:"Laying the steamer down", ja:"甑を倒す", zh:"把甑放倒" }, jp:"甑倒し", romaji:"koshiki-taoshi", meta:{ en:"March–April", ja:"三月〜四月", zh:"三月至四月" },
            text:{ en:"The last steaming. After perhaps two hundred continuous days the koshiki is laid on its side, and no more rice will be cooked this year. Nothing is finished — the last tanks are still fermenting — but the hardest and most relentless part of the work has stopped, and the mood of the day is relief rather than ceremony. Breweries mark it with a meal and a count: everyone got through the season, and nobody was hurt.",
              ja:"最後の蒸しである。おそらく二百日の連なりののち、甑は横に倒され、今年もう米が炊かれることはない。何も終わってはいない。最後の槽はなお醗酵している。しかし仕事の最も硬く容赦のない部分が止まったのであり、その日の気分は儀式よりも安堵である。蔵はこれを食事と、一つの数え上げとをもって印す。皆が季を通り抜け、誰も怪我をしなかったという数えである。",
              zh:"最後一次蒸米。在大約兩百個連續的日子之後，甑被橫放下來，今年不會再蒸任何米。什麼都還沒結束——最後幾槽仍在發酵——但工作中最艱難、最不容喘息的部分已經停止，而這一天的氣氛與其說是儀式，不如說是鬆一口氣。酒藏會以一頓飯與一次清點來標記它：所有人都撐過了這一季，而且沒有人受傷。" } },
          { n:3, title:{ en:"All brewing complete", ja:"すべて造り終える", zh:"全部釀造完成" }, jp:"皆造", romaji:"kaizō", meta:{ en:"April–May", ja:"四月〜五月", zh:"四月至五月" },
            text:{ en:"The last tank is pressed. Between koshiki-taoshi and kaizō the brewery is emptying rather than filling — mash after mash goes to the press, the tanks come free, and the building gets quieter every day. Kaizō is the true end of the season, the crew's contracts end around it, and in a guild brewery it is when the seasonal workers go home.",
              ja:"最後の槽が搾られる。甑倒しから皆造までの間、蔵は満たすのではなく空けている。醪が次々と槽へ向かい、タンクが空き、建物は日ごとに静かになる。皆造は季の真の終わりであり、蔵人の契約はその頃に終わり、杜氏集団の蔵においては、季節の者が家へ帰るときである。",
              zh:"最後一槽被壓榨。從甑倒到皆造之間，酒藏是在清空而非填裝——一缸接一缸的醪送去壓榨，酒槽逐一空出，建築一天比一天安靜。皆造是這一季真正的終點，藏人的契約在此前後結束；在杜氏集團制的酒藏裡，這也是季節性工人返家的時候。" } },
          { n:4, title:{ en:"The summer opening", ja:"夏の呑切り", zh:"夏日的開栓" }, jp:"初呑切り", romaji:"hatsu-nomikiri", meta:{ en:"June–August", ja:"六月〜八月", zh:"六月至八月" },
            text:{ en:"The tanks have been sitting through the first heat, and now the spigots — the <em>nomi</em> — are opened for the first time since storage began. Every tank is drawn and tasted for colour, for the aromas of ageing, and for anything going wrong. The head brewer tastes; often the owner and the technical staff taste; and in many regions an assessor from the regional tax bureau attends and tastes with them, because the tax office has been the industry's technical inspectorate since the Meiji period. What comes out of that morning decides which tanks are blended with which, which are released now, and which are held.",
              ja:"槽は最初の暑さを越して座しており、今、貯蔵が始まってから初めて呑——栓——が開かれる。槽ごとに汲み出し、色を、熟成の香りを、そして何かが狂っていないかを利く。杜氏が利き、しばしば蔵元と技術の者も利く。そして多くの地方では国税局の鑑定官が立ち会い、共に利く。税務の役所は明治より産業の技術の監督であったからである。その朝から出てくるものが、どの槽をどれと調合するか、どれを今出すか、どれを留め置くかを決める。",
              zh:"酒槽已經熬過了第一波暑熱，此刻，自入庫以來第一次打開「呑」——出酒栓。每一槽都被取出品評：看顏色、聞熟成的香氣，並確認有沒有哪裡出了問題。杜氏要品；通常藏元與技術人員也要品；而在許多地區，還會有國稅局的鑑定官到場一同品評——因為自明治以來，稅務機關一直是這個產業的技術監理者。那個早晨得出的結論，決定了哪些槽與哪些槽調和、哪些現在出貨、哪些繼續留存。" } }
        ] },
        { t:"note", title:{ en:"Why the tax office is at the tasting", ja:"税の役所が利き酒にいる理由", zh:"為何稅務機關會出現在品酒場合" }, text:{
          en:"It reads oddly to a Western drinker, and it is one of the most important structural facts about Japanese sake. Because alcohol was for decades the state's largest single source of revenue, the tax authority built and staffed the country's brewing science: the research institute, the national competition, the analytical standards, and a corps of qualified assessors who visit breweries and taste. The regulator is also the technical service, and a brewery's relationship with it is closer to a laboratory's with its accreditation body than to a taxpayer's with a collector.",
          ja:"西の飲み手には奇妙に読めるが、これは日本酒についての最も重要な構造の事実の一つである。酒が数十年にわたり国家の最大の単一の歳入であったがゆえに、税の当局はこの国の醸造の科学を築き、そこに人を置いた。研究所、全国の鑑評会、分析の基準、そして蔵を訪ね利き酒をする資格ある鑑定官の一団である。規制する者が同時に技術の役務であり、蔵とその関係は、納税者と徴収人の関係よりも、試験所とその認定機関の関係に近い。",
          zh:"對西方飲者而言這讀起來很奇怪，而它是關於日本清酒最重要的結構性事實之一。由於酒類數十年來一直是國家最大的單一稅收來源，稅務當局建立並配置了這個國家的釀造科學：研究所、全國鑑評會、分析標準，以及一支會走訪酒藏、親自品評的合格鑑定官隊伍。監理者同時也是技術服務單位，而酒藏與它的關係，比較接近一間實驗室與其認證機構，而非納稅人與稽徵人員。" } }
      ] },

    { t:"section", id:"fourseason",
      title:{ en:"Brewing all year", ja:"四季を通じて醸す", zh:"全年釀造" }, jp:"四季醸造",
      body:[
        { t:"p", text:{
          en:"Everything above describes a winter season. A significant and growing share of Japanese sake is not made that way at all, and the arguments for and against are worth setting out plainly rather than assuming that older is better.",
          ja:"上に記したすべては冬の季を述べている。日本酒の少なからぬ、そして増えつつある部分は、まったくそのようには造られていない。賛否の論は、古い方が良いと決めてかからず、率直に並べておく値打ちがある。",
          zh:"上述一切描述的都是冬季的釀造季。日本清酒中有相當一部分、且比例仍在增加的酒，完全不是那樣做出來的；正反雙方的論點值得平鋪直敘地攤開，而不是預設「越古老越好」。" } },
        { t:"compare", cols:2, items:[
          { title:{ en:"The case for year-round", ja:"通年の側の論", zh:"支持全年釀造的一方" }, jp:"四季醸造の利",
            text:{ en:"A refrigerated brewhouse holds any temperature you ask of it, in July as in January, so the brewer controls the variable instead of negotiating with it. Staff can be employed permanently rather than seasonally, which is the only way to offer a career rather than a winter job — and the single biggest cause of lost knowledge in this industry has been seasonal crews who never came back. Tanks turn over more times a year, so capital is used efficiently and fresh sake reaches the market continuously. Quality is not the argument against it; every large brewery and several excellent small ones work this way.",
              ja:"冷やされた蔵は、七月も一月と同じく、求めるいかなる温度をも保つ。ゆえに造り手は変数と交渉するのではなく制する。人を季節ではなく常に雇いうる。それは冬の仕事ではなく職を与えうる唯一の道であり——この産業において知が失われた最大の原因は、戻ってこなかった季節の蔵人であった。槽は年に幾度も回るので資は効率よく使われ、新しい酒が絶えず市場に届く。品質はこれに反対する論ではない。あらゆる大きな蔵と、いくつもの優れた小さな蔵がこのように働いている。",
              zh:"一座冷藏化的釀造場，無論七月或一月，都能維持你所要求的任何溫度；於是釀造者是在控制這個變數，而不是與它談判。人員可以長期聘用而非季節性聘用——這是「提供一份職業而非一份冬季打工」的唯一途徑，而這個產業中知識流失最大的原因，正是那些一去不回的季節性藏人。酒槽一年周轉更多次，資本因而被有效運用，新酒也能持續進入市場。品質不是反對它的理由：所有大型酒藏、以及數家優秀的小酒藏，都是這樣工作的。" } },
          { title:{ en:"The case for the season", ja:"季の側の論", zh:"支持季節釀造的一方" }, jp:"寒造りの利",
            text:{ en:"Refrigeration costs money and carbon, and a cold building is free. More than that, a season is a discipline: the whole crew is pointed at one thing for six months, the rice is this year's, the water table is where the snow left it, and the sake is legible as the product of a year. A brewery that runs continuously loses the annual reckoning — no kaizō, no summer to store through, no single vintage to be judged on — and with it a good deal of what makes sake a farm product rather than a factory one. It also loses the arithmetic that makes rice contracts, hiyaoroshi, and the whole seasonal shelf make sense.",
              ja:"冷却は金と炭素を要し、寒い建物はただである。それ以上に、季とは規律である。蔵人の全体が半年にわたり一つのことへ向けられ、米は今年のものであり、地下水は雪の残した所にあり、そして酒は一年の産として読める。絶えず走る蔵は年の勘定を失う。皆造もなく、越すべき夏もなく、判じられるべき一つの年もない。そしてそれとともに、日本酒を工場の産ではなく農の産たらしめているものの少なからぬ部分を失う。米の契約と、ひやおろしと、季節の棚の全体を筋の通ったものにしている算術もまた失われる。",
              zh:"冷藏要花錢、也要排碳，而一棟寒冷的建築是免費的。更重要的是，一個「季」本身就是一種紀律：全體人員在半年之內只朝著一件事，米是今年的，地下水位停在雪留下的位置，而酒可以被讀作某一年的產物。持續運轉的酒藏失去了年度的結算——沒有皆造、沒有必須熬過的夏天、沒有一個可供評斷的年份——連同失去的，還有讓清酒成為農產品而非工廠產品的很大一部分。它同時也失去了讓米的契作、冷卸酒與整個季節性貨架都說得通的那套算術。" } }
        ] },
        { t:"tiny", text:{
          en:"Most breweries now sit somewhere between: a winter season for the premium tanks, with cooling jackets to hold them steady, and a shoulder or two outside it. The pure cases at either end are rarer than the argument suggests.",
          ja:"今日ほとんどの蔵はその間のどこかに座している。高級の槽のためには冬の季を置き、それを安らせるために冷却の被いを用い、その外に一つ二つの肩を持つ。両の端の純粋な例は、議論が思わせるより稀である。",
          zh:"如今多數酒藏都落在兩者之間：為高級酒款保留一個冬季釀造季，並以冷卻夾套維持穩定，另外在季外多做一兩個「肩檔」。兩端的純粹案例，比這場爭論所暗示的更為罕見。" } }
      ] },

    { t:"section", id:"sugidama",
      title:{ en:"The cedar ball as a public clock", ja:"公の時計としての杉玉", zh:"作為公共時鐘的杉球" }, jp:"杉玉",
      body:[
        { t:"p", text:{
          en:"A <em>sugidama</em> — also called a <em>sakabayashi</em> — is a sphere of cedar sprigs, sometimes a metre across, hung under the eaves of a brewery or a sake shop. It is usually explained as an offering to the brewing deity, and it is that, but it is also a piece of public signage that tells passers-by the state of the sake inside.",
          ja:"杉玉——酒林ともいう——は、杉の葉を球に束ねたもので、時に一メートルに及び、蔵や酒屋の軒に吊るされる。酒の神への捧げものと説明されるのが通例であり、実際そうでもあるが、同時にそれは、中の酒の状態を通りがかりの者に告げる公の標識でもある。",
          zh:"「杉玉」——又稱「酒林」——是把杉葉紮成的球體，有時直徑達一公尺，掛在酒藏或酒鋪的屋簷下。通常被解釋為獻給酒神的供物，它確實是；但它同時也是一塊公共標示，向路過的人說明裡頭那些酒的狀態。" } },

        { t:"timeline", items:[
          { year:{ en:"Green", ja:"青", zh:"青綠" }, era:{ en:"Winter", ja:"冬", zh:"冬" }, eraJp:"新酒",
            title:{ en:"A new ball is hung", ja:"新しい玉を吊る", zh:"掛上新球" }, jp:"搾りたて",
            text:{ en:"Fresh cedar, bright green and fragrant, goes up when the first sake of the season has been pressed. The message is simply: the new sake is ready.",
              ja:"鮮やかな緑の、香る新しい杉が、その季の初めの酒が搾られたときに掲げられる。伝えることはただ一つ——新酒ができた。",
              zh:"鮮綠而帶香氣的新杉葉，在該季第一批酒壓榨完成時掛上。訊息只有一句：新酒好了。" } },
          { year:{ en:"Fading", ja:"薄れる", zh:"轉淡" }, era:{ en:"Spring", ja:"春", zh:"春" }, eraJp:"熟成のはじまり",
            title:{ en:"The green goes out of it", ja:"緑が抜ける", zh:"綠色褪去" }, jp:"春の酒",
            text:{ en:"By spring the needles have dulled toward olive. The sake inside has lost its first raw edge and begun to knit together.",
              ja:"春には葉はくすんでオリーブ色へ向かう。中の酒は初めの粗さを失い、まとまり始めている。",
              zh:"到了春天，杉葉轉為黯淡的橄欖色。裡頭的酒已褪去最初的生澀，開始整合起來。" } },
          { year:{ en:"Brown", ja:"茶", zh:"褐色" }, era:{ en:"Summer", ja:"夏", zh:"夏" }, eraJp:"貯蔵",
            title:{ en:"Fully browned", ja:"茶に変わる", zh:"完全轉褐" }, jp:"夏越し",
            text:{ en:"Mid-brown by high summer. The sake has been in tank for months and is maturing; nothing new is being made.",
              ja:"盛夏には茶に染まる。酒は数か月タンクにあって熟しつつあり、新しいものは何も造られていない。",
              zh:"盛夏時已成中褐色。酒在槽中放了數月正在熟成，而沒有任何新酒在釀。" } },
          { year:{ en:"Dark", ja:"深い茶", zh:"深褐" }, era:{ en:"Autumn", ja:"秋", zh:"秋" }, eraJp:"ひやおろし",
            title:{ en:"Ready to be replaced", ja:"掛け替えを待つ", zh:"等待更換" }, jp:"秋あがり",
            text:{ en:"Deep brown, and the autumn hiyaoroshi is going out. In a few weeks the crew will be back, the first rice will be steamed, and a new green ball will go up.",
              ja:"深い茶となり、秋のひやおろしが出て行く。あと数週で蔵人が戻り、初蒸しが行われ、新しい緑の玉が掲げられる。",
              zh:"轉為深褐，秋季的冷卸正在出貨。再過幾週藏人就會回來、第一批米將被蒸熟，而一顆新的綠球會被掛上去。" } }
        ] },

        { t:"note", text:{
          en:"A brown ball on a shop is therefore not neglect; it is the correct state for that time of year. A shop with a green ball in September has either just replaced it decoratively or is not paying attention — which is, in a small way, a useful signal.",
          ja:"ゆえに、店先の茶色い玉は放置ではない。その時季における正しい状態である。九月に緑の玉を吊る店は、装飾として掛け替えたか、あるいは気にかけていないかのいずれかである。ささやかながら、これは有用な合図である。",
          zh:"因此，店家門口褐色的杉球不是疏於照料，而是那個時節的正確狀態。九月還掛著綠球的店，不是把它當裝飾換了新的，就是沒在留意——這在小處，是個有用的訊號。" } }
      ] },

    { t:"section", id:"releases",
      title:{ en:"What is on the shelf, month by month", ja:"月ごとに棚にあるもの", zh:"逐月看架上有什麼" }, jp:"季節の酒",
      body:[
        { t:"table",
          cols:[{en:"Season",ja:"時季",zh:"時節"},{en:"Release",ja:"酒",zh:"酒款"},{en:"Kanji",ja:"漢字",zh:"漢字"},{en:"What it is",ja:"何であるか",zh:"這是什麼"}],
          jpCols:[2],
          rows:[
            [{en:"Dec–Feb",ja:"十二月〜二月",zh:"12–2月"},{en:"Shiboritate",ja:"搾りたて",zh:"搾りたて"},"搾りたて",
             {en:"The season's first pressing, usually unpasteurised and undiluted. Loud, fresh, slightly rough and often faintly gassy — a sake that tastes of the week it was made.",
              ja:"その季の初搾りであり、多くは生の原酒である。賑やかで、新しく、やや粗く、しばしば微かに発泡する——造られた週の味がする酒である。",
              zh:"該季的第一次壓榨，多為未經火入的原酒。喧鬧、新鮮、略帶粗糙，常帶微微氣感——一支嚐得出它是哪一週釀成的酒。"}],
            [{en:"Dec–Feb",ja:"十二月〜二月",zh:"12–2月"},{en:"Arabashiri, nakadori, seme",ja:"あらばしり・中取り・責め",zh:"荒走、中取、責"},"あらばしり",
             {en:"The three fractions of a single pressing, sometimes bottled separately. The free-run first fraction is cloudy and lively; the middle is the balanced one every brewery keeps for its best bottles; the last, pressed hard, is coarse and strong.",
              ja:"一度の上槽を三つに分けたもので、別々に瓶詰めされることがある。自然に流れる最初の部分は濁って賑やかであり、中取りは均衡が取れ、どの蔵も最上の瓶のために取っておく。最後の責めは強く押した部分で、粗く力強い。",
              zh:"同一次壓榨的三個分段，有時分別裝瓶。自然流出的第一段混濁而活潑；中段最為均衡，各家酒藏都會留給自己最好的酒款；最後的「責」是重壓所得，粗獷而強勁。"}],
            [{en:"Feb",ja:"二月",zh:"2月"},{en:"Risshun asa-shibori",ja:"立春朝搾り",zh:"立春朝搾"},"立春朝搾り",
             {en:"A modern ritual: a sake pressed in the small hours of the first day of spring, blessed, and delivered to shops the same day. Wholly a marketing invention and genuinely delightful.",
              ja:"現代の儀礼である。立春の未明に搾り、祈祷を受け、その日のうちに店へ届けられる酒。まったく商いの発明であり、そして本当に楽しい。",
              zh:"一項現代儀式：在立春當日凌晨壓榨、經過祈福，並在同一天送達店家的酒。完全是行銷的發明，而且確實令人愉快。"}],
            [{en:"Mar–Apr",ja:"三月〜四月",zh:"3–4月"},{en:"Hanami-zake",ja:"花見酒",zh:"花見酒"},"花見酒",
             {en:"Not a style but an occasion — sake drunk under the cherry blossom. Breweries release light, faintly sweet, often pink-labelled bottles for it, and some tint them with red-fleshed rice rather than colouring.",
              ja:"様式ではなく場である——桜の下で飲む酒。蔵はこれに合わせて軽くほのかに甘い、多くは桜色のラベルの酒を出す。着色ではなく赤い米で色を得るものもある。",
              zh:"這不是一種類型，而是一個場合——在櫻花下喝的酒。酒藏會為此推出輕盈、微甜、常配粉色酒標的酒款；有些是以紅色米著色，而非添加色素。"}],
            [{en:"Jun–Aug",ja:"六月〜八月",zh:"6–8月"},{en:"Natsu-zake",ja:"夏酒",zh:"夏酒"},"夏酒",
             {en:"A recent category: lower alcohol, higher acidity, sometimes sparkling, designed to be drunk cold or over ice in a season when sake sales traditionally collapse. Blue bottles and glass motifs, invariably.",
              ja:"近年の区分である。低めのアルコール、高めの酸、時に発泡。日本酒の売れ行きが伝統的に落ち込む季節に、冷やして、あるいは氷で割って飲むために設計されている。ラベルは必ず青と硝子の意匠である。",
              zh:"晚近的類別：較低酒精、較高酸度，有時帶氣泡，專為清酒銷售傳統上崩跌的季節而設計，供冰鎮或加冰飲用。酒標必定是藍色與玻璃意象。"}],
            [{en:"Sep–Nov",ja:"九月〜十一月",zh:"9–11月"},{en:"Hiyaoroshi / akiagari",ja:"ひやおろし・秋あがり",zh:"冷卸／秋上"},"冷卸し",
             {en:"Last winter's sake, pasteurised once before storage and shipped without a second pasteurisation after a summer in tank. Rounder, deeper and more integrated than the same sake was in spring. The clearest demonstration on the shelf that time does something.",
              ja:"前の冬の酒であり、貯蔵前に一度だけ火入れし、夏をタンクで越したのち、二度目の火入れをせずに出荷される。春の同じ酒より丸く、深く、まとまっている。時間が何かをすることの、棚の上での最も明快な証明である。",
              zh:"去年冬天的酒，貯藏前只火入一次，在槽中度過夏天後不再火入即出貨。比同一支酒在春天時更圓潤、更深沉、更整合。這是酒架上最清楚的示範：時間確實做了些什麼。"}],
            [{en:"Nov–Dec",ja:"十一月〜十二月",zh:"11–12月"},{en:"Shinshu",ja:"新酒",zh:"新酒"},"新酒",
             {en:"The first bottles of the new brewing year reaching shops, and the point at which the cedar balls turn green again. In warm years the very first releases now appear before the end of October.",
              ja:"新しい酒造年度の最初の瓶が店に届くときであり、杉玉が再び緑になる時点である。暖かい年には、ごく初めの出荷が十月の終わりを待たずに現れる。",
              zh:"新酒造年度的第一批酒抵達店頭之時，也是杉球再度轉綠的時點。暖冬的年份，最早的出貨如今在十月底前就會出現。"}]
          ] },

        { t:"note", text:{
          en:"For the pressing fractions in technical detail see <a href=\"pressing.html\">Pressing &amp; Finishing</a>; for the ritual side of the year see <a href=\"culture.html\">Culture &amp; Ritual</a>; for what a summer in tank actually does to a sake see <a href=\"aging.html\">Aged Sake</a>.",
          ja:"上槽の三段の技術的な詳細は<a href=\"pressing.html\">上槽と調整</a>、一年の儀礼の側面は<a href=\"culture.html\">文化と儀礼</a>、タンクでの夏が酒に実際に何をするかは<a href=\"aging.html\">熟成酒</a>を参照。",
          zh:"壓榨三段的技術細節見<a href=\"pressing.html\">上槽與調整</a>；一年中的儀禮面向見<a href=\"culture.html\">文化與儀禮</a>；在酒槽裡過一個夏天究竟對酒做了什麼，見<a href=\"aging.html\">熟成酒</a>。" } }
      ] },

{ t:"section", id:"wheel",
      title:{ en:"The year as a wheel", ja:"環としての一年", zh:"作為圓環的一年" }, jp:"酒造年度の図",
      body:[
        { t:"figure",
          caption:{
            en:"The brewing year read clockwise from July. Under four-season brewing the ring is continuous instead — but every seasonal release still refers to this shape, which is why a bottle labelled hiyaoroshi means something specific in September and nothing at all in March.",
            ja:"七月から時計回りに読む酒造年度。四季醸造のもとでは環は途切れず一続きになる——それでも季節の酒はすべてこの形を参照している。ひやおろしと記された瓶が九月には具体的な何かを意味し、三月には何も意味しないのはそのためである。",
            zh:"從七月開始順時針閱讀的酒造年度。在四季釀造之下，這個環會變成連續不斷的——但所有季節限定酒仍以這個形狀為參照，這正是為何標示「冷卸」的酒瓶在九月有具體意義，在三月則什麼也不是。" },
          svg: function(lang, L){
            var cx = 320, cy = 292, ro = 196, ri = 116, W = 640, H = 660;
            var months = [
              { m:{en:"Jul",ja:"七月",zh:"七月"}, p:0 }, { m:{en:"Aug",ja:"八月",zh:"八月"}, p:0 }, { m:{en:"Sep",ja:"九月",zh:"九月"}, p:0 },
              { m:{en:"Oct",ja:"十月",zh:"十月"}, p:1 }, { m:{en:"Nov",ja:"十一月",zh:"十一月"}, p:1 },
              { m:{en:"Dec",ja:"十二月",zh:"十二月"}, p:2 }, { m:{en:"Jan",ja:"一月",zh:"一月"}, p:2 }, { m:{en:"Feb",ja:"二月",zh:"二月"}, p:2 },
              { m:{en:"Mar",ja:"三月",zh:"三月"}, p:3 }, { m:{en:"Apr",ja:"四月",zh:"四月"}, p:3 },
              { m:{en:"May",ja:"五月",zh:"五月"}, p:4 }, { m:{en:"Jun",ja:"六月",zh:"六月"}, p:4 }
            ];
            var phases = [
              { fill:"var(--h-snow)",  lab:{en:"Quiet season · repairs and shipping",ja:"閑期・修繕と出荷",zh:"淡季・修繕與出貨"} },
              { fill:"var(--h-rice)",  lab:{en:"Rice arrives · crews gather",ja:"新米入荷・蔵入り",zh:"新米入庫・藏人進駐"} },
              { fill:"var(--h-amber)", lab:{en:"Cold brewing, at full rate",ja:"寒造り最盛",zh:"寒造盛期"} },
              { fill:"var(--h-plum)",  lab:{en:"Last steaming · all brewing ends",ja:"甑倒し・皆造",zh:"甑倒・皆造"} },
              { fill:"var(--h-moss)",  lab:{en:"Maturing in tank",ja:"貯蔵・熟成",zh:"槽中熟成"} }
            ];
            function pt(r, deg){ var a = (deg - 90) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
            function f(n){ return Math.round(n * 100) / 100; }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit">';
            var i;
            for (i = 0; i < 12; i++) {
              var a0 = i * 30, a1 = a0 + 30;
              var o0 = pt(ro, a0), o1 = pt(ro, a1), i1 = pt(ri, a1), i0 = pt(ri, a0);
              var dd = "M" + f(o0[0]) + " " + f(o0[1]) +
                       " A" + ro + " " + ro + " 0 0 1 " + f(o1[0]) + " " + f(o1[1]) +
                       " L" + f(i1[0]) + " " + f(i1[1]) +
                       " A" + ri + " " + ri + " 0 0 0 " + f(i0[0]) + " " + f(i0[1]) + " Z";
              s += '<path d="' + dd + '" fill="' + phases[months[i].p].fill + '" stroke="var(--paper)" stroke-width="2"/>';
              var lp = pt((ro + ri) / 2, a0 + 15);
              s += '<text x="' + f(lp[0]) + '" y="' + f(lp[1] + 4) + '" font-size="12" fill="var(--ink-2)" text-anchor="middle">' + L(months[i].m) + '</text>';
            }
            // events on the rim
            var events = [
              { a: 105, t:{en:"First steaming",ja:"甑起こし",zh:"甑起"} },
              { a: 195, t:{en:"New sake · open day",ja:"新酒・蔵開き",zh:"新酒・藏開"} },
              { a: 285, t:{en:"Last steaming",ja:"甑倒し",zh:"甑倒"} },
              { a: 315, t:{en:"All brewing done",ja:"皆造",zh:"皆造"} },
              { a:  75, t:{en:"Hiyaoroshi ships",ja:"ひやおろし出荷",zh:"冷卸出貨"} }
            ];
            for (i = 0; i < events.length; i++) {
              var e = events[i], p1 = pt(ro, e.a), p2 = pt(ro + 16, e.a), p3 = pt(ro + 24, e.a);
              s += '<line x1="' + f(p1[0]) + '" y1="' + f(p1[1]) + '" x2="' + f(p2[0]) + '" y2="' + f(p2[1]) + '" stroke="var(--ink-2)" stroke-width="1.5"/>';
              var anc = p3[0] > cx + 6 ? "start" : (p3[0] < cx - 6 ? "end" : "middle");
              var dx = anc === "start" ? 4 : (anc === "end" ? -4 : 0);
              s += '<text x="' + f(p3[0] + dx) + '" y="' + f(p3[1] + 4) + '" font-size="11.5" fill="var(--ink)" text-anchor="' + anc + '">' + L(e.t) + '</text>';
            }
            // hub
            s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (ri - 6) + '" fill="var(--paper)" stroke="var(--rule)" stroke-width="1"/>';
            s += '<text x="' + cx + '" y="' + (cy - 8) + '" font-size="14" fill="var(--ink)" text-anchor="middle">' +
                 L({ en:"Brewery year", ja:"酒造年度", zh:"酒造年度" }) + '</text>';
            s += '<text x="' + cx + '" y="' + (cy + 14) + '" font-size="12" fill="var(--ink-3)" text-anchor="middle">' +
                 L({ en:"1 Jul – 30 Jun", ja:"七月一日〜六月三十日", zh:"7月1日–6月30日" }) + '</text>';
            // legend
            for (i = 0; i < phases.length; i++) {
              s += '<rect x="30" y="' + (566 + i * 17) + '" width="10" height="10" fill="' + phases[i].fill + '" stroke="var(--rule-2)"/>';
              s += '<text x="48" y="' + (575 + i * 17) + '" font-size="11.5" fill="var(--ink-2)">' + L(phases[i].lab) + '</text>';
            }
            s += '</svg>';
            return s;
          } }
      ] },

    { t:"related", items:[
      { href:"process.html", why:{ en:"What is happening inside the building in each of those months.", ja:"その各月に、建物のなかで何が起きているか。", zh:"那幾個月裡，建築物內部正在發生什麼。" } },
      { href:"styles.html", why:{ en:"The seasonal bottles the year produces, and when.", ja:"一年が生む季節の一本と、その時期。", zh:"這一年所產出的季節限定酒，以及它們的時間點。" } },
      { href:"itineraries.html", why:{ en:"When to go, if the point of the trip is the brewing.", ja:"造りが旅の眼目であるなら、いつ行くか。", zh:"如果這趟旅行的重點是釀造，那該什麼時候去。" } },
      { href:"toji.html", why:{ en:"The people whose working year this is.", ja:"これがその働きの一年である人々。", zh:"這是誰的工作之年。" } }
    ] }
  ]
};


/* ---- ----------------------------------------------- batch */
SAKE.pages["batch"] = {
  kicker: { en: "Making · 14", ja: "造り · 14", zh: "釀造 · 14" },
  title:  { en: "The Arithmetic of a Batch", ja: "一仕込みの算術", zh: "一次仕込的算術" },
  jp: "仕込み配合",
  lede: {
    en: "A brewery's recipe is not a list of ingredients. It is a short table of ratios — how much of the rice is made into kōji, how much water goes in per kilogram of rice, how the rice is split across the three additions — and almost every stylistic decision a brewer makes shows up somewhere in that table. This page takes one tank of one thousand kilograms and follows it all the way through: what goes in, what is lost, what comes out, and which number to change if you want a different sake.",
    ja: "蔵の造り方は材料の表ではない。それは短い比の表である。米のうちどれだけを麹とするか、米一キログラムあたり幾らの水を入れるか、米を三度の添えにいかに分けるか。そして造り手の下すほとんどあらゆる酒質の決めは、その表のどこかに現れる。この頁は千キログラムの一槽を取り、それを最後まで追う。何が入り、何が失われ、何が出てくるか。そして異なる酒を望むならば、いずれの数を動かすべきか。",
    zh: "一家酒藏的配方不是一張材料清單。它是一張簡短的比例表——米有多少做成麴、每公斤米加多少水、米如何分配到三段添加之中——而釀酒人所做的幾乎每一個風格決定，都會在那張表的某處現形。本頁取一槽一千公斤的仕込，一路追到底：什麼進去、什麼流失、什麼出來，以及若想要一支不同的酒，該去動哪一個數字。"
  },
  body: [

    { t:"section", id:"ratios",
      title:{ en:"The four ratios that are the recipe", ja:"造り方であるところの四つの比", zh:"就是配方本身的那四個比例" }, jp:"配合の数",
      body:[
        { t:"p", text:{
          en:"Japanese brewing expresses almost everything as a percentage of the total rice. This is a genuinely elegant convention: it makes a two-hundred-kilogram experimental batch and a ten-tonne production tank directly comparable, and it means a brewer can describe a whole recipe in one line of figures.",
          ja:"日本の造りは、ほとんどすべてを総米に対する百分率で表す。これは真に優雅な約束である。二百キログラムの試みの仕込みと十トンの生産の槽とを直に比べうるものとし、そして造り手が造り方の全てを一行の数で述べうるものとする。",
          zh:"日本的釀造幾乎把所有東西都表達為總米的百分比。這是一個真正優雅的慣例：它讓兩百公斤的實驗批次與十公噸的量產槽可以直接比較，也意味著釀酒人能用一行數字描述一整份配方。" } },

        { t:"defs", items:[
          { term:{ en:"Sōmai — the total rice", ja:"総米", zh:"總米" }, jp:"総米", romaji:"sōmai",
            def:{ en:"The denominator for everything else: the combined weight of all the rice in the batch, counted as polished white rice, including both the rice that becomes kōji and the rice that is simply steamed. It is quoted before any water is added and before anything ferments, so it is the one figure that never moves.",
              ja:"他のすべての分母である。仕込みにおけるすべての米の重さの合であり、白米に換算して数える。麹となる米も、ただ蒸される米も含む。水が加えられる前、何かが醗酵する前に述べられるゆえ、決して動かぬ唯一の数である。",
              zh:"其他一切的分母：這一批所有米的重量總和，以精米後的白米計，同時包含要做成麴的米與只是蒸熟的米。它是在加水之前、在任何東西發酵之前就報出的，因此是唯一永遠不會變動的數字。" } },
          { term:{ en:"Kōji-buai — the kōji share", ja:"麹歩合", zh:"麴步合" }, jp:"麹歩合", romaji:"kōji-buai",
            def:{ en:"The proportion of the total rice that is made into kōji rather than steamed and used plain. Fifteen per cent is the floor for any special designation — plain futsūshu has no floor at all — and the working norm is around twenty; a rich, savoury, old-fashioned style may go to twenty-two or higher. More kōji means more enzyme, more amino acids and a broader, heavier sake; less means a lighter, cleaner one.",
              ja:"総米のうち、蒸して掛米とするのではなく麹とされる割合である。特定名称を名乗るための下限が十五パーセントであり——普通酒には下限がない——実務の常は二十ほど、厚く旨みのある古風な酒質では二十二かそれ以上に至ることもある。麹が多ければ酵素が多く、アミノ酸が多く、酒は広く重くなる。少なければ軽く清くなる。",
              zh:"總米之中做成麴、而非單純蒸熟使用的比例。特定名稱酒的法定下限是百分之十五——普通酒則沒有下限——實務常態約在二十；厚實、鮮味足、老派風格可能到二十二或更高。麴多意味著酵素多、胺基酸多，酒體更寬更重；麴少則更輕更乾淨。" } },
          { term:{ en:"Kumimizu-buai — the water share", ja:"汲水歩合", zh:"汲水步合" }, jp:"汲水歩合", romaji:"kumimizu-buai",
            def:{ en:"Litres of brewing water per hundred kilograms of total rice, written as a percentage. One hundred and twenty to one hundred and thirty is the ordinary range. More water means a thinner mash, a faster and more complete fermentation, and a drier, crisper sake; less water means a dense mash that ferments slowly and finishes fuller. This is the single most direct lever on dryness.",
              ja:"総米百キログラムあたりの仕込み水のリットル数であり、百分率で書かれる。百二十から百三十が並の範囲である。水が多ければ醪は薄く、醗酵は速く完全に進み、酒は辛く切れる。水が少なければ醪は濃く、醗酵は遅く、仕上がりは厚い。辛さに対する最も直の梃子がこれである。",
              zh:"每一百公斤總米所用的釀造用水公升數，以百分比書寫。一百二十到一百三十是尋常區間。水多，醪較稀，發酵更快更徹底，酒更辛口更俐落；水少，醪稠密，發酵緩慢，收尾更厚實。這是對「辛口與否」最直接的槓桿。" } },
          { term:{ en:"Shubo-buai — the starter share", ja:"酒母歩合", zh:"酒母步合" }, jp:"酒母歩合", romaji:"shubo-buai",
            def:{ en:"The share of the total rice that goes into the yeast starter. Around seven or eight per cent for an ordinary sake, five or six for a ginjō — a smaller starter means fewer yeast cells at the beginning, a slower, colder, longer fermentation, and the aromatic esters that come with it.",
              ja:"総米のうち酒母に入る割合である。並の酒でおよそ七か八パーセント、吟醸で五か六。酒母が小さければ始まりの酵母は少なく、醗酵は遅く、冷たく、長くなり、それに伴う香りのエステルが生まれる。",
              zh:"總米之中進入酒母的比例。一般清酒約百分之七或八，吟釀則是五或六——酒母較小意味著起始的酵母數較少，發酵更慢、更冷、更長，以及隨之而生的芳香酯類。" } }
        ] },

        { t:"note", label:{ en:"Why percentages and not weights", ja:"なぜ重さではなく百分率か", zh:"為什麼用百分比而不用重量" },
          text:{
            en:"Because the tank size is the least interesting thing about a recipe. Two breweries that both brew at 20% kōji and 130% water are making recognisably related sake whether the tank holds a tonne or fifteen; two breweries at 20% and 110% are not, even if the tanks are identical. The ratios carry the intent; the weights only carry the scale.",
            ja:"槽の大きさこそ、造り方について最も面白くないものだからである。麹歩合二十、汲水百三十で醸す二つの蔵は、槽が一トンであれ十五トンであれ、互いに通じる酒を造っている。二十と百十の二つの蔵は、槽が同じであってもそうではない。比が意図を担い、重さは規模を担うのみである。",
            zh:"因為槽的大小是一份配方裡最不有趣的部分。兩家都以麴步合二十、汲水一百三十釀造的酒藏，不論槽是一噸還是十五噸，做出的酒都彼此可辨地相關；兩家分別是二十／一百三十與二十／一百一十的酒藏則不然，即使槽一模一樣。比例承載意圖，重量只承載規模。" } }
      ] },

    { t:"section", id:"worked",
      title:{ en:"One tank, followed through", ja:"一つの槽を最後まで追う", zh:"追著一槽走到底" }, jp:"実例",
      body:[
        { t:"p", text:{
          en:"Take a junmai batch of one thousand kilograms of total rice, polished to sixty per cent, at twenty per cent kōji and one hundred and thirty per cent water. Everything below follows from those four numbers. The figures are indicative — every brewery's yields differ, and a ginjō pressed early will lose more — but the shape is what a working brewer would recognise.",
          ja:"総米千キログラム、精米歩合六十、麹歩合二十、汲水歩合百三十の純米の仕込みを取る。以下のすべては、その四つの数から従う。数は目安である——蔵ごとに歩留まりは異なり、早く搾る吟醸はより多くを失う——が、その形は働く造り手が見て頷くものである。",
          zh:"取一批純米：總米一千公斤、精米步合六十、麴步合二十、汲水步合一百三十。以下的一切都是從這四個數字推導出來的。這些數字是示意性的——每家酒藏的收得率都不同，早搾的吟釀會流失更多——但這個形狀是一位執業釀酒人一看就認得的。" } },

        { t:"figure",
          caption:{
            en:"The mass balance of a one-tonne junmai batch, with every bar on the same scale. Two things are easy to miss and both are on the chart. The rice arrives at the tank carrying about 350 kg of water it took up in soaking and steaming, which is not counted in the brewing-water ratio and is nonetheless in the tank. And the carbon dioxide that leaves during fermentation weighs almost exactly what the alcohol that stays behind weighs — the two come out of the same molecule of sugar, one in the glass and one in the air. Of the 1,667 kg of brown rice bought at the start, 667 kg never reaches the tank at all.",
            ja:"総米一トンの純米仕込みの物質収支。すべての棒が同じ縮尺である。見落としやすいことが二つあり、いずれも図の上にある。米は、浸漬と蒸しで吸った三百五十キログラムほどの水を負って槽へ来る。それは汲水歩合には数えられず、それでも槽のなかにある。そして醗酵のあいだに去る炭酸ガスは、残るアルコールとほぼ正確に同じだけ重い。二つは同じ一つの糖の分子から出る。一方は杯に、一方は空に。初めに買った玄米千六百六十七キログラムのうち、六百六十七キログラムは、そもそも槽へ届かない。",
            zh:"一公噸純米仕込的物料平衡，所有長條使用同一比例尺。有兩件事很容易被忽略，而它們都在圖上。米抵達酒槽時，帶著浸漬與蒸米過程中吸收的約三百五十公斤水——這些水不計入汲水步合，卻確確實實在槽裡。而發酵期間逸出的二氧化碳，重量幾乎恰好等於留下來的酒精：兩者出自同一個糖分子，一個進了杯子，一個進了空氣。最初買進的一千六百六十七公斤糙米當中，有六百六十七公斤根本沒有抵達酒槽。" },
          svg: function (lang, L) {
            var W = 760, H = 420, X = 150, RW = W - X - 30, TOP = 30;
            var MAX = 2700;
            function w(v) { return v / MAX * RW; }
            var rows = [
              { lab:{ en:"Brown rice bought", ja:"買った玄米", zh:"買進的糙米" },
                segs:[ { v:1000, f:"#C9BCA2", t:{ en:"white rice 1,000 kg", ja:"白米 1,000 kg", zh:"白米 1,000 kg" } },
                       { v:667,  f:"#E7DFD2", t:{ en:"bran 667 kg", ja:"糠 667 kg", zh:"米糠 667 kg" } } ] },
              { lab:{ en:"Charged to the tank", ja:"槽に仕込む", zh:"投入槽中" },
                segs:[ { v:1000, f:"#C9BCA2", t:{ en:"rice 1,000 kg", ja:"米 1,000 kg", zh:"米 1,000 kg" } },
                       { v:350,  f:"#E8EEF0", t:{ en:"+350 kg", ja:"+350 kg", zh:"+350 kg" } },
                       { v:1300, f:"#DDE5E8", t:{ en:"brewing water 1,300 L", ja:"汲水 1,300 L", zh:"汲水 1,300 L" } } ] },
              { lab:{ en:"After fermenting", ja:"醗酵ののち", zh:"發酵之後" },
                segs:[ { v:2360, f:"#DCD3BF", t:{ en:"mash ≈ 2,360 kg", ja:"醪 約2,360 kg", zh:"醪 約 2,360 kg" } },
                       { v:290,  f:"#EFEDE7", t:{ en:"CO₂ ≈ 290 kg", ja:"炭酸ガス 約290 kg", zh:"二氧化碳 約 290 kg" } } ] },
              { lab:{ en:"After pressing", ja:"上槽ののち", zh:"上槽之後" },
                segs:[ { v:2100, f:"#B9A98A", t:{ en:"undiluted sake ≈ 2,100 L at about 17%", ja:"原酒 約2,100 L・約17度", zh:"原酒 約 2,100 L・約 17 度" } },
                       { v:280,  f:"#E7DFD2", t:{ en:"lees 280 kg", ja:"酒粕 280 kg", zh:"酒粕 280 kg" } } ] },
              { lab:{ en:"Bottled at 15%", ja:"十五度で瓶詰", zh:"以十五度裝瓶" },
                segs:[ { v:2100, f:"#B9A98A", t:{ en:"≈ 2,380 L — about 3,300 bottles of 720 mL", ja:"約2,380 L——720 mLで約3,300本", zh:"約 2,380 L——720 mL 約 3,300 支" } },
                       { v:280,  f:"#DDE5E8", t:{ en:"", ja:"", zh:"" } } ] }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            for (var i = 0; i < rows.length; i++) {
              var r = rows[i], y = TOP + i * 74, acc = 0;
              s += '<text x="' + (X - 14) + '" y="' + (y + 15) + '" text-anchor="end" font-size="11.5" fill="#201E1B">' + L(r.lab) + '</text>';
              for (var j = 0; j < r.segs.length; j++) {
                var g = r.segs[j], bx = X + w(acc), bw = w(g.v);
                s += '<rect x="' + bx + '" y="' + y + '" width="' + bw + '" height="22" fill="' + g.f + '" stroke="#CDC6B9"/>';
                acc += g.v;
              }
              /* segment captions on the line below the bar */
              acc = 0;
              for (j = 0; j < r.segs.length; j++) {
                var g2 = r.segs[j], tx = X + w(acc) + 4;
                if (L(g2.t)) s += '<text x="' + tx + '" y="' + (y + 38) + '" font-size="10" fill="#55504A">' + L(g2.t) + '</text>';
                acc += g2.v;
              }
            }
            /* scale rule */
            var yb = TOP + rows.length * 74 - 22;
            s += '<line x1="' + X + '" y1="' + yb + '" x2="' + (X + w(2000)) + '" y2="' + yb + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + X + '" y1="' + (yb - 4) + '" x2="' + X + '" y2="' + (yb + 4) + '" stroke="#B4AC9C"/>';
            s += '<line x1="' + (X + w(2000)) + '" y1="' + (yb - 4) + '" x2="' + (X + w(2000)) + '" y2="' + (yb + 4) + '" stroke="#B4AC9C"/>';
            s += '<text x="' + (X + w(2000) + 8) + '" y="' + (yb + 4) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "縮尺 2,000 kg / L" : lang === "zh" ? "比例尺 2,000 kg／L" : "scale: 2,000 kg or L") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "＋350 kg は浸漬と蒸しで米が吸った水である。汲水歩合には数えないが、槽のなかにはある。"
                  : lang === "zh" ? "＋350 kg 是米在浸漬與蒸煮時吸收的水：不計入汲水步合，但確實在槽裡。"
                  : "The +350 kg is water the rice took up in soaking and steaming: not counted in the water ratio, but in the tank.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"table",
          caption:{ en:"The same batch as a brewery would write it", ja:"同じ仕込みを蔵が書くとき", zh:"同一批仕込，酒藏會怎麼寫" },
          cols:[ { en:"Line", ja:"項", zh:"項目" }, "",
                 { en:"Figure", ja:"数", zh:"數值" },
                 { en:"Where it comes from", ja:"由来", zh:"從何而來" } ],
          jpCols:[1], numCols:[2],
          rows:[
            [ { en:"Total rice", ja:"総米", zh:"總米" }, "総米", "1,000 kg",
              { en:"Chosen. Everything below is a percentage of it.", ja:"選ばれた数。以下はすべてこれに対する百分率である。", zh:"由人決定。以下一切都是它的百分比。" } ],
            [ { en:"Polishing ratio", ja:"精米歩合", zh:"精米步合" }, "精米歩合", "60%",
              { en:"So 1,667 kg of brown rice had to be bought to yield 1,000 kg of white.", ja:"ゆえに白米千キログラムを得るには玄米千六百六十七キログラムを買わねばならなかった。", zh:"因此為了得到一千公斤白米，必須買進一千六百六十七公斤糙米。" } ],
            [ { en:"Kōji rice", ja:"麹米", zh:"麴米" }, "麹米", "200 kg",
              { en:"20% of the total rice. The remaining 800 kg is steamed and added plain.", ja:"総米の二十パーセント。残る八百キログラムは蒸されて掛米となる。", zh:"總米的百分之二十。其餘八百公斤蒸熟後作為掛米加入。" } ],
            [ { en:"Brewing water", ja:"汲水", zh:"汲水" }, "汲水", "1,300 L",
              { en:"130% of the total rice. Does not include the water absorbed during soaking and steaming.", ja:"総米の百三十パーセント。浸漬と蒸しで吸われた水は含まない。", zh:"總米的百分之一百三十。不包含浸漬與蒸米過程中吸收的水。" } ],
            [ { en:"Starter", ja:"酒母", zh:"酒母" }, "酒母", "70 kg",
              { en:"7% of the total rice, prepared two to four weeks ahead depending on method.", ja:"総米の七パーセント。工法により二週から四週前に仕込まれる。", zh:"總米的百分之七，依工法不同，在兩到四週前先行製作。" } ],
            [ { en:"Three additions", ja:"三段の配分", zh:"三段的分配" }, "添・仲・留", "145 / 275 / 510 kg",
              { en:"The remaining 930 kg, split roughly 1 : 2 : 3.5 across days one, three and four.", ja:"残る九百三十キログラムを、初日・三日目・四日目におよそ一対二対三・五で分ける。", zh:"其餘九百三十公斤，在第一、三、四天以大約一比二比三點五分配。" } ],
            [ { en:"Mash days", ja:"醪日数", zh:"醪天數" }, "醪日数", "25",
              { en:"Longer and colder for a ginjō, shorter and warmer for an everyday sake.", ja:"吟醸ではより長く冷たく、日常の酒ではより短く温かい。", zh:"吟釀更長更冷，日常酒更短更溫。" } ],
            [ { en:"Lees ratio", ja:"粕歩合", zh:"粕步合" }, "粕歩合", "28%",
              { en:"280 kg of lees against 1,000 kg of rice. The national average across all sake was 27.4% in 2022; a hand-pressed daiginjō can exceed 40%.", ja:"米千キログラムに対し粕二百八十キログラム。二〇二二年の全清酒の全国平均は二七・四パーセントであり、手で搾る大吟醸は四十パーセントを超えうる。", zh:"相對於一千公斤米，有二百八十公斤酒粕。二〇二二年全日本清酒的平均為 27.4%，手工壓榨的大吟釀可超過 40%。" } ],
            [ { en:"Finished volume", ja:"製成数量", zh:"製成數量" }, "製成数量", "≈2,380 L",
              { en:"After bringing 2,100 L of about 17% undiluted sake down to 15%. About 3,300 bottles of 720 mL, or 1,320 of 1.8 L.", ja:"およそ十七度の原酒二千百リットルを十五度に割ったのち。七百二十ミリリットル瓶でおよそ三千三百本、一升瓶で千三百二十本である。", zh:"把約 17 度的原酒 2,100 公升調降到 15 度之後。約 3,300 支 720 毫升瓶，或 1,320 支一升瓶。" } ],
            [ { en:"Liquor tax on the batch", ja:"この仕込みの酒税", zh:"這一批的酒稅" }, "酒税", "≈¥238,000",
              { en:"At ¥100,000 per kilolitre for seishu — about ¥72 on each 720 mL bottle, regardless of what the bottle sells for.", ja:"清酒は一キロリットルあたり十万円であり、七百二十ミリリットル瓶一本あたりおよそ七十二円である。その瓶がいくらで売られようと変わらない。", zh:"清酒每公秉課徵十萬日圓——換算下來每支 720 毫升約 72 日圓，不論這瓶酒賣多少錢。" } ]
          ] }
      ] },

{ t:"section", id:"stages",
      title:{ en:"Why the rice goes in three times", ja:"米をなぜ三度に分けるか", zh:"為什麼米要分三次下" }, jp:"三段仕込み",
      body:[
        { t:"p", text:{
          en:"Everything about sake fermentation is a race between the yeast you want and the bacteria you do not, and the weapon is acidity. A small, sour, alcoholic starter is a fortress; the moment you dilute it with fresh rice and water you lower its walls. Adding the rice in three steps, each roughly double the last, keeps the mash acidic and alcoholic enough to defend itself at every point while the yeast population catches up.",
          ja:"清酒の醗酵についてのすべては、望む酵母と望まぬ細菌との競走であり、武器は酸である。小さく、酸く、酒精を帯びた酒母は城である。新しい米と水でそれを薄めた瞬間、城壁は低くなる。米を三度に分け、それぞれをおおよそ前の倍とすることは、酵母の数が追いつくまでのあらゆる時点において、醪が自らを守るに足る酸と酒精を保たせる。",
          zh:"清酒發酵的一切，都是你想要的酵母與你不想要的細菌之間的一場賽跑，而武器是酸。一份小而酸、帶著酒精的酒母是一座堡壘；當你用新鮮的米與水稀釋它的那一刻，你就降低了它的城牆。把米分三步加入、每一步大約是前一步的兩倍，能讓醪在酵母族群趕上來之前的每一個時間點，都保有足以自衛的酸度與酒精。" } },

        { t:"steps", items:[
          { n:{ en:"Day 1", ja:"一日目", zh:"第一天" }, title:{ en:"Hatsuzoe — the first addition", ja:"初添", zh:"初添" }, jp:"初添", romaji:"hatsuzoe",
            meta:{ en:"about 15% of the rice, into the starter", ja:"米のおよそ十五パーセント、酒母へ", zh:"約百分之十五的米，加入酒母" },
            text:{ en:"The smallest addition, made into the starter tank itself or into a small tank. The mash roughly doubles in volume and its acidity roughly halves — which is as far as you can safely go in one step. Temperature is deliberately low.",
              ja:"最も小さな添えであり、酒母の槽そのもの、あるいは小さな槽へ行われる。醪はおおよそ倍の嵩となり、その酸はおおよそ半ばとなる。それが一歩で安んじて行きうる限りである。温度は意図して低く保たれる。",
              zh:"最小的一次添加，加進酒母槽本身或一個小槽裡。醪的體積大致加倍，酸度大致減半——那已經是單一步驟裡能安全走到的極限。溫度刻意壓低。" } },
          { n:{ en:"Day 2", ja:"二日目", zh:"第二天" }, title:{ en:"Odori — the dance", ja:"踊", zh:"踊" }, jp:"踊", romaji:"odori",
            meta:{ en:"nothing is added", ja:"何も加えぬ", zh:"什麼都不加" },
            text:{ en:"A full day in which nothing happens except that the yeast multiplies back to strength. The name comes from the visible churning of the surface as the population takes off. Skipping it is the classic way to lose a tank.",
              ja:"酵母がふたたび力を取り戻す以外、何も起こらぬ丸一日である。名は、その数が伸びてゆくときの面の目に見える揺らぎに由来する。これを飛ばすことは、一槽を失う古典の道である。",
              zh:"整整一天，除了酵母繁殖回到強盛之外什麼也不發生。這個名字來自族群起飛時液面可見的翻攪。跳過它，是弄丟一整槽的經典方法。" } },
          { n:{ en:"Day 3", ja:"三日目", zh:"第三天" }, title:{ en:"Nakazoe — the middle addition", ja:"仲添", zh:"仲添" }, jp:"仲添", romaji:"nakazoe",
            meta:{ en:"about twice the first", ja:"初添のおよそ倍", zh:"約為初添的兩倍" },
            text:{ en:"Roughly double the first addition, and by now the yeast can absorb the dilution without losing control. If the tank is being moved to its final vessel, this is usually when.",
              ja:"初添のおよそ倍であり、この時までに酵母は、制を失わずに薄まりを受け入れうる。最後の槽へ移すならば、たいていはこの時である。",
              zh:"大約是初添的兩倍，而到此時酵母已能承受稀釋而不失控。若要移入最終的槽，通常就在這時。" } },
          { n:{ en:"Day 4", ja:"四日目", zh:"第四天" }, title:{ en:"Tomezoe — the final addition", ja:"留添", zh:"留添" }, jp:"留添", romaji:"tomezoe",
            meta:{ en:"the remaining half or more", ja:"残る半ばかそれ以上", zh:"其餘的一半或更多" },
            text:{ en:"The largest addition by a distance, and the moment the batch reaches its final volume. From here nothing more goes in; the next three to four weeks are only temperature, patience and measurement.",
              ja:"群を抜いて最大の添えであり、仕込みが最後の嵩に達する時である。ここより先、何も入らぬ。続く三週から四週は、温度と忍耐と測定のみである。",
              zh:"份量遙遙領先的最大一次添加，也是這一批達到最終體積的時刻。從此不再有東西加入；接下來的三到四週只有溫度、耐心與量測。" } }
        ] },

        { t:"note", label:{ en:"The alternative that proves the rule", ja:"掟を証する例外", zh:"證明規則的那個例外" },
          text:{
            en:"Some breweries add a fourth or even fifth stage for a very large or very cold batch, and a few deliberately use a single addition to make a heavy, sweet, unusual sake. Both are departures from a norm that exists for one reason only: to keep a hostile environment hostile while the yeast is still outnumbered.",
            ja:"きわめて大きな、あるいはきわめて冷たい仕込みのために四段、五段を加える蔵もあり、重く甘く風変わりな酒を造るために意図して一段で仕込む蔵も少数ある。いずれも、ただ一つの理由のために在る常からの逸れである。すなわち、酵母がなお数で劣るあいだ、敵意ある場所を敵意あるままに保つことである。",
            zh:"有些酒藏會為極大或極冷的批次加入第四段甚至第五段，也有少數酒藏刻意只用一段來釀出厚重、甜美、不尋常的酒。兩者都是對某個常規的偏離，而那個常規存在的理由只有一個：在酵母仍居數量劣勢時，讓一個充滿敵意的環境保持敵意。" } }
      ] },

    { t:"section", id:"curve",
      title:{ en:"What the numbers do over twenty-five days", ja:"二十五日のあいだ数がすること", zh:"這二十五天裡數字在做什麼" }, jp:"醪の経過",
      body:[
        { t:"p", text:{
          en:"Once the final addition is in, a brewer takes a sample every morning and writes down three things: the temperature, the density of the mash, and — increasingly — the alcohol. Plotted against each other these three lines are the whole story of a fermentation, and an experienced tōji can read a problem off them days before it can be tasted.",
          ja:"留添が済めば、造り手は毎朝試料を取り、三つを書きつける。温度、醪の比重、そして——ますます——酒精度である。互いに対して描かれたこの三本の線こそ醗酵の物語のすべてであり、経た杜氏は、味に現れる幾日も前に、そこから問いを読み取る。",
          zh:"留添完成之後，釀酒人每天早上取樣，並記下三件事：溫度、醪的比重，以及——愈來愈普遍地——酒精度。把這三條線相互對照畫出來，就是一場發酵的全部故事；一位有經驗的杜氏能在問題嘗得出來的好幾天前，就從線上把它讀出來。" } },

        { t:"figure",
          caption:{
            en:"A schematic mash curve for a junmai ginjō. Shapes are typical rather than measured: what matters is that density falls as alcohol rises, that the temperature is walked up deliberately and then held, and that the brewer decides when to stop rather than waiting for the yeast to.",
            ja:"純米吟醸の醪経過の模式図。形は測られたものではなく典型である。要は、比重が下がるにつれ酒精が上がること、温度が意図して引き上げられたのち保たれること、そして止める時を決めるのは酵母ではなく造り手であることである。",
            zh:"一支純米吟釀的醪經過示意圖。曲線形狀是典型而非實測：重點在於比重下降的同時酒精上升、溫度是被刻意逐步拉高再維持住的，以及決定何時停止的是釀酒人，而不是酵母。" },
          svg: function (lang, L) {
            var W = 720, H = 340, X0 = 56, X1 = W - 130, Y0 = 28, Y1 = H - 52;
            var DAYS = 25;
            function px(d) { return X0 + d / DAYS * (X1 - X0); }
            function py(f) { return Y1 - f * (Y1 - Y0); }
            /* series as [day, fraction-of-plot-height] */
            var baume = [[0,.92],[2,.90],[4,.84],[6,.74],[8,.62],[10,.50],[13,.36],[16,.24],[19,.15],[22,.09],[25,.06]];
            var alc   = [[0,.02],[2,.10],[4,.22],[6,.34],[8,.45],[10,.55],[13,.68],[16,.77],[19,.84],[22,.88],[25,.90]];
            var temp  = [[0,.10],[2,.16],[4,.26],[6,.36],[8,.44],[10,.48],[13,.50],[16,.48],[19,.42],[22,.34],[25,.28]];
            function path(a) {
              var d = "", i;
              for (i = 0; i < a.length; i++) d += (i ? " L" : "M") + px(a[i][0]) + " " + py(a[i][1]);
              return d;
            }
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* grid */
            for (var d = 0; d <= DAYS; d += 5) {
              s += '<line x1="' + px(d) + '" y1="' + Y0 + '" x2="' + px(d) + '" y2="' + Y1 + '" stroke="#EFEDE7"/>';
              s += '<text x="' + px(d) + '" y="' + (Y1 + 18) + '" text-anchor="middle" font-size="10" fill="#8B857C">' + d + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (H - 14) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "留添からの日数" : lang === "zh" ? "自留添起的天數" : "days from the final addition") + '</text>';
            /* series */
            s += '<path d="' + path(baume) + '" fill="none" stroke="#7C6B52" stroke-width="1.6"/>';
            s += '<path d="' + path(alc) + '" fill="none" stroke="#8B9BA6" stroke-width="1.6"/>';
            s += '<path d="' + path(temp) + '" fill="none" stroke="#B9A98A" stroke-width="1.6" stroke-dasharray="4 3"/>';
            var labs = [
              { y:.06, c:"#7C6B52", t:{ en:"density (Baumé)", ja:"比重（ボーメ）", zh:"比重（波美）" }, v:{ en:"9° → ~0°", ja:"九度 → 約〇度", zh:"九度 → 約〇度" } },
              { y:.90, c:"#8B9BA6", t:{ en:"alcohol", ja:"アルコール", zh:"酒精" }, v:{ en:"0 → 17–18%", ja:"〇 → 十七〜十八度", zh:"〇 → 十七～十八度" } },
              { y:.28, c:"#B9A98A", t:{ en:"temperature", ja:"品温", zh:"品溫" }, v:{ en:"7 → 12 → 9 °C", ja:"七 → 十二 → 九度", zh:"七 → 十二 → 九度" } }
            ];
            for (var i = 0; i < labs.length; i++) {
              var lb = labs[i];
              s += '<line x1="' + X1 + '" y1="' + py(lb.y) + '" x2="' + (X1 + 10) + '" y2="' + py(lb.y) + '" stroke="' + lb.c + '"/>';
              s += '<text x="' + (X1 + 15) + '" y="' + (py(lb.y) - 1) + '" font-size="10.5" fill="#201E1B">' + L(lb.t) + '</text>';
              s += '<text x="' + (X1 + 15) + '" y="' + (py(lb.y) + 12) + '" font-size="9.5" fill="#8B857C">' + L(lb.v) + '</text>';
            }
            /* the decision marker */
            s += '<line x1="' + px(25) + '" y1="' + Y0 + '" x2="' + px(25) + '" y2="' + Y1 + '" stroke="#B4AC9C" stroke-dasharray="3 3"/>';
            s += '<text x="' + (px(25) - 6) + '" y="' + (Y0 + 10) + '" text-anchor="end" font-size="10" fill="#55504A">' +
                 (lang === "ja" ? "上槽の判断" : lang === "zh" ? "上槽的判斷" : "the call to press") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"defs", items:[
          { term:{ en:"Baumé, and why brewers still use it", ja:"ボーメ、そしてなおそれが使われる理由", zh:"波美度，以及釀酒人為何仍在用它" }, jp:"ボーメ",
            def:{ en:"A hydrometer scale that reads roughly the percentage of dissolved sugar. It starts around 9 or 10 after the final addition and falls towards zero as the sugar is eaten. Baumé is a live measurement a brewer can take in thirty seconds at the tank, which is why it survived alongside the laboratory figures; the sake meter value on a finished bottle is the same physical quantity read on a different scale.",
              ja:"溶けた糖の百分率にほぼ相当する浮秤の目盛りである。留添ののち九か十のあたりに始まり、糖が食われるにつれ零へ向かって落ちる。ボーメは、造り手が槽の前で三十秒のうちに取りうる生の測りであり、ゆえに実験室の数のかたわらに生き延びた。仕上がった瓶の日本酒度は、異なる目盛りで読まれた同じ物理の量である。",
              zh:"一種比重計刻度，讀數大致相當於溶解糖的百分比。留添之後從九或十左右開始，隨著糖被吃掉而朝零下降。波美是釀酒人能在槽前三十秒內完成的活量測，這正是它得以與實驗室數據並存至今的原因；成品瓶上的日本酒度，是同一個物理量以不同刻度讀出的結果。" } },
          { term:{ en:"The heat you have to remove", ja:"取り除かねばならぬ熱", zh:"你必須帶走的熱" }, jp:"品温管理",
            def:{ en:"Fermentation is exothermic, and a tonne of rice generates real heat. The brewer's temperature line is therefore not a record of what happened but of what was allowed to happen — cooling jackets, tank coolers, buckets of ice, or in the old way an unheated room in January. A ginjō is defined more by that line than by any other single choice.",
              ja:"醗酵は熱を出し、一トンの米は実の熱を生む。ゆえに造り手の温度の線は、起きたことの記録ではなく、起こることを許されたものの記録である。冷却の被い、槽の冷やし、氷の桶、あるいは古い仕方では一月の暖のない部屋。吟醸は、他のいかなる一つの選びよりも、その線によって定められる。",
              zh:"發酵會放熱，而一公噸的米會產生實實在在的熱。因此釀酒人的溫度曲線記錄的不是「發生了什麼」，而是「什麼被允許發生」——冷卻夾套、槽用冷卻器、一桶桶的冰，或者以老方法：一月裡一間不生火的房間。吟釀之所以是吟釀，取決於那條線的程度，勝過任何其他單一選擇。" } },
          { term:{ en:"When to stop", ja:"いつ止めるか", zh:"何時停下" }, jp:"上槽の判断",
            def:{ en:"Yeast will keep going until the alcohol kills it, which produces a thin, hot, sugarless sake. Almost every interesting sake is pressed before that point, and the day chosen is one of the most consequential decisions of the year: a day early leaves sweetness and aroma, a day late gains dryness and body. There is no instrument for it. The brewer tastes, looks at the curve, and calls it.",
              ja:"酵母は酒精が自らを殺すまで進み続け、それは薄く、熱く、糖のない酒を生む。面白いと呼びうるほとんどの酒はその点より前に搾られ、選ばれた日は年のうち最も重い決めの一つである。一日早ければ甘みと香りが残り、一日遅ければ辛さと厚みを得る。それを測る器はない。造り手は味わい、線を見て、そして決める。",
              zh:"酵母會一直走到酒精把它殺死為止，而那會產出一支單薄、辛辣、毫無糖分的酒。幾乎所有有意思的酒都在那一點之前就被搾了，而選定的那一天是一年裡後果最重的決定之一：早一天，留下甜味與香氣；晚一天，換來辛口與酒體。這件事沒有儀器可測。釀酒人品嘗、看線，然後下判斷。" } }
        ] }
      ] },
    { t:"section", id:"yield",
      title:{ en:"The most alcohol a kilogram of rice can possibly give", ja:"米一キログラムが与えうる最大のアルコール", zh:"一公斤米最多能給出多少酒精" }, jp:"理論収得量",
      body:[
        { t:"p", text:{
          en:"There is a ceiling on this, it is fixed by chemistry rather than by skill, and it is worth knowing because it lets you check any claim about yield in about thirty seconds. Two conversions stand between rice and alcohol, and both have exact mass ratios.",
          ja:"これには天井があり、それは技ではなく化学によって定められている。知る値打ちがあるのは、歩留まりについてのいかなる主張も三十秒ほどで検めうるようになるからである。米とアルコールのあいだには二つの変換が立ち、そのいずれもが正確な質量比を持っている。",
          zh:"這件事有一個上限，它由化學、而不是由技術決定；值得知道，因為它讓你能在大約三十秒內檢查任何關於收得率的說法。米與酒精之間隔著兩道轉換，而這兩道都有精確的質量比。" } },

        { t:"figure",
          caption:{
            en:"Rice to alcohol, by mass, with the two exact steps in the middle. Starch takes on water as it is cut into glucose, so a kilogram of starch becomes slightly more than a kilogram of sugar. Then each molecule of glucose splits into two of ethanol and two of carbon dioxide, which is why a little over half the sugar's weight ends up as alcohol and almost all the rest leaves as gas. The ceiling for a kilogram of white rice is about 426 grams of ethanol. A working brewery gets around seven tenths of that, and the gap is not waste — it is the starch that never dissolved, the sugar the mould and the yeast used to build themselves, and the sweetness deliberately left in the sake.",
            ja:"米からアルコールまでを質量で追い、その中ほどに正確な二段を置いたもの。デンプンはブドウ糖へ切られるときに水を取り込む。ゆえに一キログラムのデンプンは、一キログラムをわずかに超える糖となる。ついでブドウ糖の一分子が、エタノール二分子と炭酸ガス二分子とに分かれる。糖の重さの半ばを少し超えるものがアルコールとなり、残りのほとんどが気体として去るのはこのためである。白米一キログラムの天井は、およそ四百二十六グラムのエタノールである。働く蔵が得るのはその七割ほどであり、その差は無駄ではない。溶けきらなかったデンプンであり、麹菌と酵母が自らを築くために用いた糖であり、そして酒のなかに意図して残された甘さである。",
            zh:"從米到酒精，以質量追蹤，中間放進兩個精確的步驟。澱粉在被切成葡萄糖時會吸進水，所以一公斤澱粉會變成略多於一公斤的糖。接著每一個葡萄糖分子裂成兩個乙醇與兩個二氧化碳——這就是為什麼糖的重量有略多於一半變成酒精，而其餘幾乎全部以氣體離開。一公斤白米的上限，大約是四百二十六公克乙醇。一家實際運作的酒藏拿到的大約是它的七成，而這道差距並不是浪費：那是沒能溶解的澱粉、是麴菌與酵母用來建造自身的糖，以及刻意留在酒裡的甜。" },
          svg: function (lang, L) {
            var W = 760, H = 296, BX = 30, BW = 160, GAP = 178;
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            var i;
            s += '<text x="' + BX + '" y="44" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "白米一キログラムから" : lang === "zh" ? "從一公斤白米開始" : "FROM ONE KILOGRAM OF WHITE RICE") + '</text>';
            var box = [
              { big:"1,000 g", sm:{ en:"white rice", ja:"白米", zh:"白米" }, arrow:{ en:"× 0.75 — the starch in it", ja:"×0.75 そのうちのデンプン", zh:"×0.75 其中的澱粉" } },
              { big:"750 g", sm:{ en:"starch", ja:"デンプン", zh:"澱粉" }, arrow:{ en:"× 1.111 — water is taken on", ja:"×1.111 水を取り込む", zh:"×1.111 吸進水" } },
              { big:"833 g", sm:{ en:"glucose", ja:"ブドウ糖", zh:"葡萄糖" }, arrow:{ en:"× 0.511 / × 0.489", ja:"×0.511 ／ ×0.489", zh:"×0.511 ／ ×0.489" } },
              { big:"426 g", sm:{ en:"ethanol, plus 407 g of CO₂", ja:"エタノール、および炭酸ガス407 g", zh:"乙醇，另加 407 g 二氧化碳" }, arrow:null }
            ];
            for (i = 0; i < box.length; i++) {
              var x = BX + i * GAP;
              s += '<rect x="' + x + '" y="66" width="' + BW + '" height="52" fill="' + (i === 3 ? "#DED8CB" : "#F8F6F1") + '" stroke="#DED8CB"/>';
              s += '<text x="' + (x + BW / 2) + '" y="92" text-anchor="middle" font-size="15" fill="#201E1B">' + box[i].big + '</text>';
              s += '<text x="' + (x + BW / 2) + '" y="108" text-anchor="middle" font-size="8.5" fill="#8B857C">' + L(box[i].sm) + '</text>';
              if (box[i].arrow) {
                s += '<line x1="' + (x + BW + 2) + '" y1="92" x2="' + (x + GAP - 6) + '" y2="92" stroke="#CDC6B9"/>';
                s += '<path d="M' + (x + GAP - 2) + ' 92 L' + (x + GAP - 9) + ' 88 L' + (x + GAP - 9) + ' 96 Z" fill="#CDC6B9"/>';
                s += '<text x="' + (x + BW + (GAP - BW) / 2) + '" y="58" text-anchor="middle" font-size="8.5" fill="#A39C91">' + L(box[i].arrow) + '</text>';
              }
            }
            var X0 = 210, X1 = 690, MAX = 500;
            s += '<text x="' + BX + '" y="156" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "天井と、実際" : lang === "zh" ? "上限，以及實際" : "THE CEILING, AND THE REALITY") + '</text>';
            var bars = [
              { v:426, c:"#7C6B52", n:{ en:"the chemical ceiling", ja:"化学の天井", zh:"化學上限" }, d:{ en:"if every last gram converted", ja:"すべてが余さず変われば", zh:"若一克不剩全部轉換" } },
              { v:300, c:"#B09E7C", n:{ en:"what a brewery actually gets", ja:"蔵が実際に得るもの", zh:"酒藏實際拿到的" }, d:{ en:"about seven tenths of it", ja:"そのおよそ七割", zh:"大約是它的七成" } }
            ];
            for (i = 0; i < bars.length; i++) {
              var by = 190 + i * 44;
              s += '<rect x="' + X0 + '" y="' + (by - 9) + '" width="' + ((X1 - X0) * bars[i].v / MAX).toFixed(1) + '" height="18" fill="' + bars[i].c + '"/>';
              s += '<text x="' + (X0 + (X1 - X0) * bars[i].v / MAX + 8).toFixed(1) + '" y="' + (by + 4) + '" font-size="10" fill="#6B655C">' + bars[i].v + ' g</text>';
              s += '<text x="' + BX + '" y="' + (by - 1) + '" font-size="10.5" fill="#201E1B">' + L(bars[i].n) + '</text>';
              s += '<text x="' + BX + '" y="' + (by + 11) + '" font-size="8.5" fill="#A39C91">' + L(bars[i].d) + '</text>';
            }
            s += '<text x="' + BX + '" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "デンプンの含量は白米の七十五パーセントとした。品種と精米歩合により七十三から七十七のあいだで動く。"
                  : lang === "zh" ? "澱粉含量以白米的百分之七十五計；依品種與精米步合，實際落在七十三到七十七之間。"
                  : "Starch is taken as 75% of white rice; by variety and polishing ratio it runs between about 73 and 77.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"note", title:{ en:"A check anyone can run", ja:"誰にでもできる検算", zh:"任何人都能做的驗算" }, text:{
          en:"Take the finished volume of a batch, multiply by the alcohol by volume, multiply by 0.789 to turn litres of ethanol into kilograms, and divide by the kilograms of white rice used. A junmai will land somewhere around 0.28 to 0.33. If the answer is above 0.426 then the rice cannot have produced it and alcohol was added — which is not a scandal, it is simply what honjōzō and futsūshu are, and the number is the fastest way to see it in a set of published figures.",
          ja:"仕込みの製成数量を取り、アルコール度数を掛け、〇・七八九を掛けてリットルをキログラムに直し、用いた白米のキログラムで割る。純米であれば、〇・二八から〇・三三のあたりに落ちる。答えが〇・四二六を超えるならば、米がそれを生みえたはずはなく、アルコールが加えられている。それは醜聞ではない。本醸造と普通酒とはまさにそういうものであり、この数は、公表された数字の組のなかにそれを見つける最も速い道である。",
          zh:"取一批酒的製成數量，乘以酒精度，再乘以 0.789 把公升換成公斤，然後除以所用白米的公斤數。純米會落在大約 0.28 到 0.33 之間。如果答案超過 0.426，那麼米不可能生出這麼多，必然添加了酒精——這並不是醜聞，本釀造與普通酒本來就是這樣；而這個數字，是在一組公開數據裡看出這件事最快的方法。" } }
      ] },

    { t:"section", id:"aruten",
      title:{ en:"The arithmetic of added alcohol", ja:"アルコール添加の算術", zh:"添加酒精的算術" }, jp:"アル添",
      body:[
        { t:"p", text:{
          en:"More argument has been spent on this one line of a recipe than on any other, and most of it has been conducted without the numbers. The numbers are short. The labelling standard sets a ceiling for the special designations: the added alcohol, counted as pure ethanol, may not exceed ten per cent of the weight of the white rice used. Everything else follows from comparing that ceiling with what the rice produced on its own.",
          ja:"献立のこの一行には、他のいずれよりも多くの論が費やされてきた。そしてそのほとんどは、数を伴わずに行われてきた。数は短い。表示基準は特定名称酒に天井を定める。加えるアルコールは、純エタノールとして数え、用いた白米の重量の十パーセントを超えてはならない。他のすべては、その天井を、米が自ら生んだものと比べることから従う。",
          zh:"在一張配方的這一行上，人們花掉的爭論比任何其他一行都多，而其中絕大部分都是在沒有數字的情況下進行的。數字很短。標示基準為特定名稱酒設下一個上限：所添加的酒精，以純乙醇計，不得超過所用白米重量的百分之十。其餘的一切，都來自把這個上限拿去和「米自己生出了多少」比較。" } },

        { t:"table",
          caption:{ en:"The same one-tonne batch, with and without", ja:"同じ総米一トンの仕込み、加える場合と加えぬ場合", zh:"同樣的一公噸仕込，加與不加" },
          cols:[ { en:"Case", ja:"場合", zh:"情況" }, { en:"Alcohol added", ja:"添加量", zh:"添加量" }, { en:"Finished at 15%", ja:"十五度での製成", zh:"以 15 度計的製成量" }, { en:"Against the rice alone", ja:"米のみの場合に対して", zh:"相對於只用米" } ],
          keyCol:0, numCols:[1,2,3],
          rows:[
            [ { en:"Junmai", ja:"純米", zh:"純米" }, { en:"none", ja:"なし", zh:"無" }, "≈ 2,380 L", "—" ],
            [ { en:"Honjōzō, a light hand", ja:"本醸造・控えめ", zh:"本釀造・下手輕" }, "30 kg", "≈ 2,630 L", "+11%" ],
            [ { en:"Honjōzō, typical", ja:"本醸造・通例", zh:"本釀造・常見" }, "50 kg", "≈ 2,800 L", "+18%" ],
            [ { en:"At the legal ceiling", ja:"法定の上限", zh:"法定上限" }, "100 kg", "≈ 3,220 L", "+36%" ],
            [ { en:"The rice's own output, for scale", ja:"参考・米が生んだ量", zh:"參照・米自己生出的量" }, "≈ 300 kg", "—", { en:"three times the ceiling", ja:"上限の三倍", zh:"上限的三倍" } ]
          ] },

        { t:"defs", items:[
          { term:{ en:"Ten per cent of the rice, not of the sake", ja:"酒の十パーセントではなく、米の十パーセント", zh:"是米的百分之十，不是酒的百分之十" }, jp:"白米重量の10%", romaji:"hakumai jūryō no jippāsento",
            def:{ en:"The ceiling is expressed against the weight of white rice, which is why it reads as generous and is not. For a one-tonne batch it permits a hundred kilograms of pure ethanol — a third of what the rice itself produced, and enough to raise the saleable volume by over a third. Almost no honjōzō goes near it. The figure quoted by brewers for a considered addition is usually between three and seven per cent of the rice weight, which is a tenth to a fifth of the sake's own alcohol.",
              ja:"天井は白米の重量に対して述べられる。それが気前よく読めて、実はそうでない理由である。総米一トンの仕込みに対し、純エタノール百キログラムを許す。米自らが生んだものの三分の一であり、売りうる量を三分の一以上増やすに足りる。この線に近づく本醸造はほとんどない。考え抜かれた添加として造り手が挙げる数は、たいてい米重量の三から七パーセントであり、それは酒自身のアルコールの十分の一から五分の一にあたる。",
              zh:"這個上限是相對於白米重量來表述的——這正是它讀起來很寬鬆、實際上並不的原因。對一公噸的仕込而言，它允許一百公斤純乙醇：那是米自己生出的量的三分之一，足以讓可販售的量增加三分之一以上。幾乎沒有本釀造會接近這條線。釀造者提到「經過考慮的添加」時所說的數字，通常是米重量的百分之三到七，也就是酒本身酒精的十分之一到五分之一。" } },
          { term:{ en:"When it goes in, and why then", ja:"いつ入れるか、そしてなぜその時か", zh:"什麼時候加，以及為什麼是那時" }, jp:"上槽前", romaji:"jōsō mae",
            def:{ en:"Almost always into the finished mash a day or so before pressing, diluted to around thirty per cent so it does not shock the tank. At that moment it does three things that adding it later to the sake would not. It pulls aromatic compounds out of the solids and into the liquid, so a honjōzō presses more aromatic than it otherwise would. It lowers the lees ratio, because less flavour stays behind in the cake. And it raises the alcohol in the tank at exactly the point where spoilage organisms are the greatest risk.",
              ja:"ほとんど常に、搾りの一日ほど前、仕上がった醪へ、槽を驚かせぬよう三十度ほどに割って入れる。その一瞬において、のちに酒へ加えるのでは果たしえぬ三つのことをなす。香りの成分を固形から液へ引き出す。ゆえに本醸造は、さもなくばそうであったよりも香り高く搾れる。粕歩合を下げる。味が粕に残る分が減るからである。そして、腐敗の菌が最も危うくなるまさにその時点で、槽のアルコールを上げる。",
              zh:"幾乎總是在壓榨前一天左右加進已完成的醪裡，並先稀釋到約三十度，以免讓整槽受到衝擊。在那個時刻，它做了三件「之後才加進酒裡」做不到的事：它把香氣成分從固形物中拉進液體，所以本釀造壓出來會比原本更香；它降低粕步合，因為留在酒粕裡的風味變少了；而且它正好在腐敗菌風險最高的那個時點，提高了槽裡的酒精濃度。" } },
          { term:{ en:"Outside the designations", ja:"特定名称の外", zh:"在特定名稱之外" }, jp:"普通酒", romaji:"futsūshu",
            def:{ en:"A sake that does not claim a special designation is not bound by the ten per cent line, and the volume of alcohol and of added sugars and acids can be very much larger. This is the surviving end of the wartime <em>sanbai zōjō</em> technique, which tripled volume by adding alcohol, glucose and acid to a mash, and which kept the industry supplied through rice shortage and then outlived the shortage by fifty years. Modern futsūshu is a far milder descendant, but the line on the label that says nothing is the line that tells you the ceiling does not apply.",
              ja:"特定名称を名乗らぬ酒は十パーセントの線に縛られず、加えるアルコールと糖類・酸味料の量ははるかに大きくなりうる。これは戦時の三倍増醸の生き残った端である。醪にアルコールと葡萄糖と酸を加えて量を三倍にし、米の不足を通じて産業に供給を保たせ、そして不足を五十年生き延びた技である。今日の普通酒ははるかに穏やかな末裔であるが、札の上で何も言わぬ一行こそ、天井が当てはまらぬことを告げる一行である。",
              zh:"一支不宣稱特定名稱的酒，不受百分之十這條線的約束，添加的酒精以及糖類與酸味料的量可以大得多。這是戰時「三倍增釀」技術殘存的那一端：往醪裡加酒精、葡萄糖與酸，把量變成三倍，讓產業在米荒中維持供給，然後又比那場米荒多活了五十年。今天的普通酒是遠為溫和的後裔；但酒標上那一行什麼也沒說的字，正是告訴你「上限不適用」的那一行。" } }
        ] },

        { t:"note", title:{ en:"What the arithmetic does not settle", ja:"算術が決めぬこと", zh:"算術解決不了的事" }, text:{
          en:"Whether a honjōzō is better or worse than the junmai beside it. The numbers show what the addition costs and what it buys in volume; they say nothing about whether the resulting sake is more enjoyable, and blind panels have been finding for decades that the answer depends entirely on the house and the bottle rather than on the category. The arithmetic is worth knowing because it removes the two bad arguments — that added alcohol is always cheapening, and that it is never cheapening — and leaves the only good one, which is to taste them side by side.",
          ja:"本醸造が、その傍らの純米より良いか悪いか、である。数は、添加が何を費やし、量において何を買うかを示す。その結果の酒がより楽しいか否かについては何も言わない。目隠しの利き酒は数十年にわたり、答えは区分ではなく、その家とその一本にまったく依るという判定を下し続けてきた。算術を知る値打ちは、二つの悪しき論——添加は常に安くする策であるというもの、決してそうではないというもの——を取り除き、ただ一つの良い論、すなわち並べて味わうことを残す点にある。",
          zh:"它解決不了的是：一支本釀造究竟比旁邊那支純米好還是壞。數字顯示這項添加花了什麼、又在量上買到了什麼；它們對「做出來的酒是不是更好喝」隻字未提，而盲飲評審數十年來一再得出同一個結論：答案完全取決於哪一家、哪一瓶，而不是取決於類別。知道這道算術的價值，在於它拿掉了兩個糟糕的論點——「添加酒精一定是偷工」與「添加酒精絕不是偷工」——只留下唯一一個好論點：並排喝喝看。" } }
      ] },


    { t:"section", id:"levers",
      title:{ en:"Which number to move", ja:"いずれの数を動かすか", zh:"該動哪一個數字" }, jp:"配合と酒質",
      body:[
        { t:"p", text:{
          en:"The practical value of the recipe table is that it is a control panel. Each figure moves the finished sake in a fairly predictable direction, and a brewery's house style is largely a settled position on these four dials plus the choice of rice, yeast and water.",
          ja:"配合の表の実の値打ちは、それが操作の盤であることにある。いずれの数も、仕上がりの酒をかなり見通しうる方へ動かす。そして蔵の家の酒質とは、おおむね、この四つの目盛りの上の定まった位置に、米と酵母と水の選びを加えたものである。",
          zh:"配方表的實用價值在於它是一個控制面板。每一個數字都會把成品酒推往一個相當可預測的方向；而一家酒藏的家風，大致上就是這四個旋鈕上一個固定下來的位置，再加上米、酵母與水的選擇。" } },

        { t:"table",
          caption:{ en:"Turn this up, and this happens", ja:"これを上げれば、こうなる", zh:"把這個調高，就會這樣" },
          cols:[ { en:"Dial", ja:"目盛り", zh:"旋鈕" },
                 { en:"Turned up", ja:"上げると", zh:"調高" },
                 { en:"Turned down", ja:"下げると", zh:"調低" },
                 { en:"The cost of moving it", ja:"動かす代価", zh:"移動它的代價" } ],
          rows:[
            [ { en:"Kōji ratio", ja:"麹歩合", zh:"麴步合" },
              { en:"More enzyme, more amino acids, more umami and body; the sake tastes broader and older", ja:"酵素が増え、アミノ酸が増え、旨みと厚みが増す。酒は広く、古びた味となる", zh:"酵素更多、胺基酸更多、旨味與酒體更足；酒嘗起來更寬、更老成" },
              { en:"Cleaner, lighter, more transparent; risks a thin, incomplete fermentation", ja:"清く、軽く、透ける。薄く、終わりきらぬ醗酵の危うさがある", zh:"更乾淨、更輕、更透明；但有稀薄、發酵不完全的風險" },
              { en:"Kōji is the most labour-intensive step in the brewery. More kōji means more nights on the kōji-room floor.", ja:"麹は蔵で最も手のかかる工程である。麹が増えるとは、麹室での夜が増えるということである。", zh:"製麴是酒藏裡最耗人力的工序。麴多，就意味著麴室裡的夜晚更多。" } ],
            [ { en:"Water ratio", ja:"汲水歩合", zh:"汲水步合" },
              { en:"Faster, more complete fermentation; drier, crisper, lower in residual sugar", ja:"醗酵は速く完全となる。辛く、切れ、残る糖は少ない", zh:"發酵更快更完全；更辛口、更俐落、殘糖更低" },
              { en:"Slow, dense fermentation; fuller, sweeter, more viscous", ja:"醗酵は遅く濃い。厚く、甘く、粘る", zh:"發酵緩慢而稠密；更厚實、更甜、更黏稠" },
              { en:"Volume. Less water is less sake from the same rice, which is why concentrated styles cost more.", ja:"嵩である。水が少なければ同じ米からの酒は少ない。濃い酒質が高い理由である。", zh:"體積。水少，同樣的米出的酒就少——這正是濃厚風格更貴的原因。" } ],
            [ { en:"Starter ratio", ja:"酒母歩合", zh:"酒母步合" },
              { en:"A safer, faster, warmer fermentation; more reliable, less aromatic", ja:"より安んじられ、速く、温かい醗酵。確かであり、香りは少ない", zh:"更安全、更快、更溫暖的發酵；更可靠，但香氣較少" },
              { en:"A slow cold start, more ester formation, ginjō aroma; and more chance of losing the tank", ja:"遅く冷たい始まり、エステルの生成、吟醸の香り。そして槽を失う見込みも増す", zh:"緩慢而低溫的起步、更多酯類生成、吟釀香；同時弄丟整槽的機率也上升" },
              { en:"Risk, straightforwardly. This is the dial that separates confident breweries from careful ones.", ja:"端的に危うさである。自信ある蔵と慎重な蔵とを分かつ目盛りがこれである。", zh:"直白地說就是風險。這個旋鈕分開了有把握的酒藏與謹慎的酒藏。" } ],
            [ { en:"Polishing ratio", ja:"精米歩合", zh:"精米步合" },
              { en:"Polishing further removes protein and fat; cleaner, more aromatic, less savoury", ja:"さらに磨けば蛋白と脂が去る。清く、香り高く、旨みは減る", zh:"磨得更深會去掉蛋白質與脂肪；更乾淨、更芳香、鮮味更少" },
              { en:"More of the grain stays; more amino acids, more character, more risk of coarseness", ja:"粒はより多く残る。アミノ酸が増え、性格が増し、粗さの危うさも増す", zh:"米粒留下更多；胺基酸更多、個性更強，粗糙的風險也更大" },
              { en:"Rice, directly. Polishing to 40% means buying two and a half kilograms of brown rice for every kilogram brewed.", ja:"端的に米である。四十パーセントまで磨くとは、醸す一キログラムごとに玄米二・五キログラムを買うということである。", zh:"直接就是米。磨到百分之四十，意味著每釀一公斤就得買進兩公斤半的糙米。" } ]
          ] },

        { t:"panel", tint:"koji",
          title:{ en:"Reading a brewery's published numbers", ja:"蔵が公にする数を読む", zh:"讀懂酒藏公布的數字" },
          body:[
            { t:"p", text:{
              en:"A small but growing number of breweries publish their recipe figures on the back label or on a spec sheet: rice and its origin, polishing ratio, kōji ratio, yeast, mash days, sake meter value, acidity, amino acid content, alcohol. Read as a set, these tell you more than any tasting note. Kōji at 22% with amino acidity above 1.5 promises a savoury sake whatever the front label says; a mash of forty days with a low starter ratio and a 1801-series yeast is a competition daiginjō whether or not the word appears.",
              ja:"数は少ないが増えつつある蔵が、その配合の数を裏の札や仕様の書きに載せている。米とその産地、精米歩合、麹歩合、酵母、醪日数、日本酒度、酸度、アミノ酸度、アルコール分である。一組として読めば、これらはいかなる利き酒の覚書よりも多くを告げる。麹歩合二十二にアミノ酸度一・五超は、表の札が何と述べようと旨みの酒を約束する。四十日の醪に低い酒母歩合と一八〇一系の酵母は、その語が現れるか否かによらず、鑑評会の大吟醸である。",
              zh:"有少數但正在增加的酒藏，會把配方數字印在背標或規格表上：米與產地、精米步合、麴步合、酵母、醪天數、日本酒度、酸度、胺基酸度、酒精度。把它們當成一組來讀，會比任何品飲筆記告訴你更多。麴步合二十二加上胺基酸度高於一・五，不論正標寫什麼，都在承諾一支鮮味型的酒；四十天的醪配上低酒母步合與一八〇一系酵母，不論那個詞有沒有出現，都是一支鑑評會取向的大吟釀。" } }
          ] },

        { t:"tiny", text:{
          en:"Related: <a href=\"process.html\">Brewing Process</a> for the steps themselves, <a href=\"starters.html\">Starter Methods</a> for how the shubo is built, <a href=\"numbers.html\">Numbers &amp; Chemistry</a> for what the finished figures mean, <a href=\"koji.html\">Kōji</a> for the two days that set the kōji ratio's value.",
          ja:"関連——工程そのものは<a href=\"process.html\">製造工程</a>、酒母の建て方は<a href=\"starters.html\">酒母の型</a>、仕上がりの数の意味は<a href=\"numbers.html\">成分と数値</a>、麹歩合の値打ちを定める二日間は<a href=\"koji.html\">麹</a>。",
          zh:"相關：工序本身見<a href=\"process.html\">釀造流程</a>；酒母如何建立見<a href=\"starters.html\">酒母工法</a>；成品數值的意義見<a href=\"numbers.html\">成分與數值</a>；決定麴步合價值的那兩天見<a href=\"koji.html\">麴</a>。" } }
      ] },

    { t:"related", items:[
      { href:"process.html", why:{ en:"The same thirty days told as events rather than numbers.", ja:"同じ三十日を、数ではなく出来事として。", zh:"同樣的三十天，用事件而不是數字來說。" } },
      { href:"numbers.html", why:{ en:"The figures on a back label, and how to read them.", ja:"裏ラベルの数字と、その読み方。", zh:"背標上的數字，以及怎麼讀它們。" } },
      { href:"kasu.html", why:{ en:"The two hundred and eighty kilograms that leave as lees.", ja:"粕として去る二百八十キログラム。", zh:"以酒粕形式離開的那兩百八十公斤。" } },
      { href:"classification.html", why:{ en:"The ten per cent line, and the names either side of it.", ja:"十パーセントの線と、その両側の名。", zh:"百分之十那條線，以及線兩邊的名字。" } }
    ] }
  ]
};


/* ---- -------------------------------------------- microbes */
SAKE.pages["microbes"] = {
  kicker: { en: "Making · 15", ja: "造り · 15", zh: "釀造 · 15" },
  title:  { en: "The Microbial Cast", ja: "微生物の顔ぶれ", zh: "微生物的角色群" },
  jp: "蔵の微生物生態",
  lede: {
    en: "Two organisms make sake and perhaps a dozen more decide whether it survives. A brewery is a managed ecology: a mould is cultivated deliberately, a yeast is introduced deliberately, several bacteria are cultivated deliberately in the traditional starters and then killed by their own products, and a handful of others are fought continuously for five months. This page is the full cast — what each one does, in what order, and what happens when the order breaks.",
    ja: "日本酒を造るのは二つの生物であり、それが生き延びるかどうかを決めるのは、おそらくもう十数の生物である。蔵とは管理された生態系である——カビが意図して培養され、酵母が意図して導入され、いくつかの細菌が伝統的な酒母において意図して培養されたのち自らの産物によって死に、そして他のいくつかとは五か月にわたり戦い続ける。このページはその顔ぶれの全体である——それぞれが何をし、どの順で現れ、そして順序が崩れたとき何が起こるのか。",
    zh: "釀成清酒的是兩種生物，而決定它能否存活的，大概還有十幾種。酒藏是一個被管理的生態系：一種黴菌被刻意培養，一種酵母被刻意引入，數種細菌在傳統酒母中被刻意培養、最後又死於自身的產物，還有另外幾種則要被持續對抗五個月。本頁就是這整份角色表——每一種做什麼、依什麼順序出場，以及當順序被打亂時會發生什麼。"
  },
  body: [

    { t:"section", id:"cast",
      title:{ en:"Who is in the building", ja:"蔵にいるもの", zh:"酒藏裡有誰" }, jp:"生物の一覧",
      body:[
        { t:"table",
          cols:[{en:"Organism",ja:"生物",zh:"生物"},{en:"Japanese",ja:"和名",zh:"日文"},{en:"Role",ja:"役割",zh:"角色"},{en:"What it does",ja:"働き",zh:"作用"}],
          jpCols:[1],
          rows:[
            [{en:"Aspergillus oryzae",ja:"ニホンコウジカビ",zh:"米麴菌"},"黄麹菌",
             {en:"Cultivated",ja:"培養する",zh:"刻意培養"},
             {en:"The saccharifying mould. Secretes amylases that convert rice starch to glucose and proteases that release amino acids. Japan's national fungus, and the only member of the cast that is grown as a crop in its own room.",
              ja:"糖化のカビである。米の澱粉をブドウ糖に変える糖化酵素と、アミノ酸を放つたんぱく質分解酵素を分泌する。日本の国菌であり、専用の室で作物として育てられる唯一の登場人物である。",
              zh:"負責糖化的黴菌。分泌把米澱粉轉為葡萄糖的澱粉酶，以及釋出胺基酸的蛋白酶。它是日本的「國菌」，也是全場唯一被當成作物、在專屬房間裡栽培的角色。"}],
            [{en:"Saccharomyces cerevisiae",ja:"清酒酵母",zh:"清酒酵母"},"清酒酵母",
             {en:"Introduced",ja:"添加する",zh:"刻意添加"},
             {en:"The fermenting yeast. Sake strains are unusually alcohol-tolerant, reaching close to twenty per cent, and are selected for their aroma output as much as for their fermentation. The Kyōkai series is a library of them.",
              ja:"発酵の酵母である。清酒の株は異例なほどアルコールに耐え、二十パーセント近くに達する。そして発酵の力と同じくらい、香りの生産によって選抜されている。きょうかい酵母はその図書館である。",
              zh:"負責發酵的酵母。清酒酵母株對酒精的耐受度異常地高，可達近二十個百分點；其選育著眼於香氣產出的程度，不亞於發酵能力。協會酵母就是這樣一座菌株圖書館。"}],
            [{en:"Nitrate-reducing bacteria",ja:"硝酸還元菌",zh:"硝酸還原菌"},"硝酸還元菌",
             {en:"Tolerated, then eliminated",ja:"許し、のちに排する",zh:"先容許，後排除"},
             {en:"Arrive with the water and the rice. In a kimoto they reduce nitrate in the brewing water to nitrite, which suppresses wild yeasts during the vulnerable first days. They are then killed by the acid they helped create.",
              ja:"水と米とともに現れる。生酛では仕込水中の硝酸を亜硝酸へ還元し、それが最も脆い初期の数日、野生酵母を抑える。そののち、自らが生むのを助けた酸によって死ぬ。",
              zh:"隨水與米一同進入。在生酛中，它們把釀造用水中的硝酸鹽還原為亞硝酸鹽，在最脆弱的頭幾天壓制野生酵母；隨後，它們死於自己協助生成的酸。"}],
            [{en:"Leuconostoc and early lactic bacteria",ja:"球菌型の乳酸菌",zh:"腸膜明串珠菌等早期乳酸菌"},"乳酸球菌",
             {en:"Cultivated in kimoto",ja:"生酛で育てる",zh:"生酛中培養"},
             {en:"The first wave of lactic acid bacteria. They begin acidifying the starter, and are then displaced by more acid-tolerant rod-shaped species as the pH falls.",
              ja:"乳酸菌の第一波である。酒母の酸性化を始め、pHが下がるにつれ、より酸に強い桿菌型の種に取って代わられる。",
              zh:"乳酸菌的第一波。它們開始把酒母酸化，隨後在 pH 下降時，被更耐酸的桿狀菌種取代。"}],
            [{en:"Lactobacillus sakei and relatives",ja:"乳酸桿菌",zh:"清酒乳桿菌等"},"乳酸桿菌",
             {en:"Cultivated in kimoto",ja:"生酛で育てる",zh:"生酛中培養"},
             {en:"The second wave, and the ones that do most of the acidification, dropping the starter's pH to around 3.5. That acidity is what makes the tank inhospitable to everything except sake yeast — and eventually to the lactic bacteria themselves.",
              ja:"第二波であり、酸性化の大半を担い、酒母のpHを3.5前後まで下げる。その酸こそが、清酒酵母以外のあらゆるものにとって——そしてやがては乳酸菌自身にとっても——この槽を住みにくい場所にする。",
              zh:"第二波，承擔大部分酸化工作，把酒母的 pH 降到約 3.5。正是那份酸度，讓這只槽對清酒酵母以外的一切——最終也包括乳酸菌自己——變得無法居住。"}],
            [{en:"Wild yeasts",ja:"野生酵母",zh:"野生酵母"},"野生酵母",
             {en:"Fought",ja:"排する",zh:"要排除"},
             {en:"Pichia, Hansenula and other non-Saccharomyces genera arriving on rice and in air. They ferment weakly, tolerate little alcohol, and produce esters and acids that read as rough or solvent-like. They are what the nitrite and the acid in a kimoto exist to remove.",
              ja:"米や空気とともに現れるピキア、ハンゼヌラなどの非サッカロミセス属である。発酵は弱く、アルコールにも耐えず、粗さや溶剤めいた香りとして読まれるエステルと酸を生む。生酛における亜硝酸と酸は、これらを除くために存在する。",
              zh:"隨米與空氣進入的畢赤酵母、漢遜酵母等非釀酒酵母屬。它們發酵力弱、耐酒精能力差，並產生讀來粗糙或帶溶劑感的酯與酸。生酛中的亞硝酸與酸，存在的目的正是清除它們。"}],
            [{en:"Hiochi bacteria",ja:"火落菌",zh:"火落菌"},"火落菌",
             {en:"Fought",ja:"排する",zh:"要排除"},
             {en:"Alcohol-tolerant lactobacilli — <em>Lactobacillus fructivorans</em>, <em>L. hilgardii</em> and relatives. Uniquely among spoilage organisms they grow happily in finished sake, and pasteurisation exists specifically to kill them. See below.",
              ja:"アルコールに耐える乳酸桿菌——Lactobacillus fructivorans、L. hilgardiiとその近縁である。腐敗を起こす生物のなかで唯一、完成した酒のなかで喜んで育つ。火入れは、まさにこれを殺すために存在する。後述する。",
              zh:"耐酒精的乳桿菌——Lactobacillus fructivorans、L. hilgardii 及其近親。在所有腐敗菌中，唯有它們能在成品清酒中愉快生長；火入（加熱殺菌）正是為了殺死它們而存在。詳見下文。"}],
            [{en:"Film yeasts",ja:"産膜酵母",zh:"產膜酵母"},"産膜酵母",
             {en:"Fought",ja:"排する",zh:"要排除"},
             {en:"Oxidative yeasts that form a wrinkled white film on a still surface exposed to air, consuming alcohol and producing acetaldehyde. A tank left partly empty and open is where they appear.",
              ja:"空気に触れた静かな液面に、皺のある白い膜を張る酸化性の酵母である。アルコールを消費し、アセトアルデヒドを生む。中途半端に空いた、開いたままのタンクが、これの現れる場所である。",
              zh:"氧化性酵母，會在接觸空氣的靜止液面上形成起皺的白膜，消耗酒精並產生乙醛。半空又敞開的酒槽，正是它們出現的地方。"}],
            [{en:"Acetic acid bacteria",ja:"酢酸菌",zh:"醋酸菌"},"酢酸菌",
             {en:"Fought",ja:"排する",zh:"要排除"},
             {en:"Convert alcohol to acetic acid in the presence of oxygen. Rarely a problem in a well-run brewery because they need air, but the reason an opened bottle left half full for months eventually smells of vinegar.",
              ja:"酸素があればアルコールを酢酸に変える。空気を要するため、よく管理された蔵で問題になることは稀である。しかし、半分残したまま何か月も置かれた瓶が、やがて酢の匂いを放つ理由はこれである。",
              zh:"在有氧條件下把酒精轉為醋酸。因為需要空氣，在管理良好的酒藏中鮮少造成問題；但一支只喝一半、放了幾個月的酒最終會有醋味，原因就是它們。"}]
          ] }
      ] },

    { t:"section", id:"succession",
      title:{ en:"The succession in a kimoto", ja:"生酛における遷移", zh:"生酛中的演替" }, jp:"微生物の交代",
      body:[
        { t:"p", text:{
          en:"The traditional starter is not a culture of one organism but a controlled ecological succession — a sequence in which each population creates the conditions that destroy it and favour the next. It is one of the more elegant things in food microbiology, and it was worked out empirically, over centuries, by people who had never seen a cell.",
          ja:"伝統的な酒母は一つの生物の培養ではなく、制御された生態的遷移である——各々の集団が、自らを滅ぼし次の集団を利する条件を作り出してゆく連鎖である。食品微生物学のなかでも優美な部類に属し、そしてそれは、細胞を見たことのない人々によって、数世紀をかけて経験的に導き出された。",
          zh:"傳統酒母不是單一生物的培養，而是一場受控的生態演替——每一個族群都創造出毀滅自己、卻有利於下一族群的條件。這是食品微生物學中相當優雅的事情之一；而它是由一群從未見過細胞的人，歷經數個世紀以經驗推導出來的。" } },
        { t:"figure",
          caption:{
            en:"The succession in a kimoto, drawn as populations over a month. The vertical scale is logarithmic, so each gridline is a tenfold change; the curves are schematic rather than measured, but their order, their timing and the sizes of the gaps between them are the ones the literature reports. The numbered bands are the four stages described below. The strip underneath is the pH of the same tub, which is the single number that drives everything above it.",
            ja:"生酛における遷移を、一月にわたる集団の変化として描いたもの。縦の目盛りは対数であり、線一本ごとに十倍である。曲線は測られたものではなく模式であるが、その順序、時期、そして互いの隔たりの大きさは、文献の報ずるとおりである。番号のついた帯は、下に述べる四つの段階である。下の細い帯は同じ桶のpHであり、それが、その上のすべてを動かしているただ一つの数である。",
            zh:"生酛中的演替，畫成一個月裡的族群消長。縱軸為對數刻度，因此每一條格線代表十倍的變化；曲線是示意而非實測，但它們的先後、時機與彼此之間的落差，都依文獻所載。編號色帶對應下文所述的四個階段。下方細帶是同一只桶的 pH——那是驅動其上一切的唯一數字。" },
          svg: function (lang, L) {
            var W = 760, H = 420, X0 = 76, X1 = 570, Y0 = 54, Y1 = 268;
            var PT = 300, PB = 346, DAYS = 30;
            function px(d) { return X0 + d / DAYS * (X1 - X0); }
            function py(v) { return Y1 - (v - 2) / 7 * (Y1 - Y0); }
            function ph(v) { return PB - (v - 3) / 4 * (PB - PT); }
            function poly(pts, f) {
              var d = "", i;
              for (i = 0; i < pts.length; i++) d += (i ? " L" : "M") + px(pts[i][0]) + " " + f(pts[i][1]);
              return d;
            }
            var series = [
              { c:"#A8A08C", dash:"", p:[[0,3.0],[2,4.5],[4,6.3],[6,7.0],[8,6.6],[10,5.2],[12,3.4],[14,2.2],[16,2.0]],
                n:{ en:"Nitrate reducers", ja:"硝酸還元菌", zh:"硝酸還原菌" },
                s:{ en:"makes the nitrite", ja:"亜硝酸を作る", zh:"製造亞硝酸" } },
              { c:"#C7BFAE", dash:"4 3", p:[[0,4.0],[2,4.4],[4,3.9],[6,3.0],[8,2.4],[10,2.0]],
                n:{ en:"Wild yeasts", ja:"野生酵母", zh:"野生酵母" },
                s:{ en:"killed by nitrite", ja:"亜硝酸に殺される", zh:"被亞硝酸殺死" } },
              { c:"#9FB0A6", dash:"", p:[[2,2.6],[4,3.5],[6,5.2],[8,6.6],[10,7.0],[12,6.6],[14,5.6],[16,4.4],[18,3.2],[20,2.4]],
                n:{ en:"Lactic cocci", ja:"乳酸球菌", zh:"乳酸球菌" },
                s:{ en:"first acid wave", ja:"酸の第一波", zh:"酸的第一波" } },
              { c:"#8B9BA6", dash:"", p:[[4,2.4],[6,3.2],[8,4.6],[10,6.0],[12,7.2],[14,7.9],[16,8.1],[18,7.9],[20,7.2],[24,5.8],[28,4.4],[30,3.9]],
                n:{ en:"Lactic rods", ja:"乳酸桿菌", zh:"乳酸桿菌" },
                s:{ en:"takes pH to 3.5", ja:"pHを三・五へ", zh:"把 pH 帶到三・五" } },
              { c:"#B09E7C", dash:"", p:[[0,3.0],[4,3.1],[8,3.4],[10,3.8],[12,4.8],[14,6.0],[16,7.0],[18,7.8],[20,8.2],[24,8.4],[28,8.3],[30,8.2]],
                n:{ en:"Sake yeast", ja:"清酒酵母", zh:"清酒酵母" },
                s:{ en:"inherits the tub", ja:"桶を受け継ぐ", zh:"繼承整只桶" } }
            ];
            var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" font-family="system-ui,-apple-system,sans-serif">';
            /* stage bands */
            var bands = [[0,2],[2,7],[7,15],[15,30]], fills = ["#F2EFE8","#F8F6F1","#F2EFE8","#F8F6F1"], bi;
            for (bi = 0; bi < bands.length; bi++) {
              s += '<rect x="' + px(bands[bi][0]) + '" y="' + Y0 + '" width="' + (px(bands[bi][1]) - px(bands[bi][0])) +
                   '" height="' + (Y1 - Y0) + '" fill="' + fills[bi] + '"/>';
              s += '<rect x="' + px(bands[bi][0]) + '" y="' + (Y0 - 21) + '" width="15" height="15" fill="#DDD7C9"/>';
              s += '<text x="' + (px(bands[bi][0]) + 7.5) + '" y="' + (Y0 - 10) + '" text-anchor="middle" font-size="10" font-weight="600" fill="#55504A">' + (bi + 1) + '</text>';
            }
            /* log gridlines */
            var g;
            for (g = 2; g <= 9; g++) {
              s += '<line x1="' + X0 + '" y1="' + py(g) + '" x2="' + X1 + '" y2="' + py(g) + '" stroke="#E6E2D9"/>';
              s += '<text x="' + (X0 - 8) + '" y="' + (py(g) + 3.5) + '" text-anchor="end" font-size="9" fill="#ADA79E">10' +
                   '<tspan font-size="7" dy="-4">' + g + '</tspan></text>';
            }
            s += '<line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (Y0 - 30) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "一ミリリットルあたりの細胞数" : lang === "zh" ? "每毫升細胞數" : "CELLS PER MILLILITRE") + '</text>';
            /* curves */
            var i;
            for (i = 0; i < series.length; i++) {
              s += '<path d="' + poly(series[i].p, py) + '" fill="none" stroke="' + series[i].c +
                   '" stroke-width="1.9"' + (series[i].dash ? ' stroke-dasharray="' + series[i].dash + '"' : '') + '/>';
            }
            /* legend in the right gutter */
            var LX = X1 + 18, ly = Y0 + 8;
            for (i = 0; i < series.length; i++) {
              s += '<line x1="' + LX + '" y1="' + (ly - 4) + '" x2="' + (LX + 20) + '" y2="' + (ly - 4) + '" stroke="' + series[i].c +
                   '" stroke-width="2.4"' + (series[i].dash ? ' stroke-dasharray="' + series[i].dash + '"' : '') + '/>';
              s += '<text x="' + (LX + 26) + '" y="' + ly + '" font-size="11" fill="#201E1B">' + L(series[i].n) + '</text>';
              s += '<text x="' + (LX + 26) + '" y="' + (ly + 13) + '" font-size="9" fill="#8B857C">' + L(series[i].s) + '</text>';
              ly += 36;
            }
            /* pH strip */
            s += '<rect x="' + X0 + '" y="' + PT + '" width="' + (X1 - X0) + '" height="' + (PB - PT) + '" fill="#F8F6F1"/>';
            var phline = [[0,6.4],[2,6.2],[4,5.8],[6,5.2],[8,4.6],[10,4.2],[12,3.9],[14,3.7],[16,3.55],[20,3.45],[25,3.4],[30,3.4]];
            s += '<path d="' + poly(phline, ph) + '" fill="none" stroke="#7C6B52" stroke-width="1.9"/>';
            var pv;
            for (pv = 3; pv <= 7; pv += 2) {
              s += '<line x1="' + X0 + '" y1="' + ph(pv) + '" x2="' + X1 + '" y2="' + ph(pv) + '" stroke="#E6E2D9"/>';
              s += '<text x="' + (X0 - 8) + '" y="' + (ph(pv) + 3.5) + '" text-anchor="end" font-size="9" fill="#ADA79E">' + pv + '</text>';
            }
            s += '<text x="' + (X1 + 18) + '" y="' + (PT + 16) + '" font-size="11" fill="#201E1B">pH</text>';
            s += '<text x="' + (X1 + 18) + '" y="' + (PT + 29) + '" font-size="9" fill="#8B857C">' +
                 (lang === "ja" ? "六・四から三・五へ" : lang === "zh" ? "自六・四降至三・五" : "6.4 down to 3.5") + '</text>';
            /* day axis */
            var d2;
            for (d2 = 0; d2 <= DAYS; d2 += 5) {
              s += '<line x1="' + px(d2) + '" y1="' + PB + '" x2="' + px(d2) + '" y2="' + (PB + 5) + '" stroke="#B4AC9C"/>';
              s += '<text x="' + px(d2) + '" y="' + (PB + 18) + '" text-anchor="middle" font-size="9.5" fill="#8B857C">' + d2 + '</text>';
            }
            s += '<line x1="' + X0 + '" y1="' + PB + '" x2="' + X1 + '" y2="' + PB + '" stroke="#B4AC9C"/>';
            s += '<text x="' + X0 + '" y="' + (PB + 38) + '" font-size="9.5" letter-spacing="1.3" font-weight="600" fill="#ADA79E">' +
                 (lang === "ja" ? "仕込みからの日数" : lang === "zh" ? "自投料起的天數" : "DAYS FROM MIXING") + '</text>';
            s += '<text x="30" y="' + (H - 12) + '" font-size="9.5" fill="#8B857C">' +
                 (lang === "ja" ? "速醸酛には二番目と三番目の帯がない。初日に乳酸を加えるからである。残るのは酵母の曲線のみで、およそ二週間へ縮む。"
                  : lang === "zh" ? "速釀酛沒有第二與第三段色帶，因為第一天就加了乳酸；留下的只有酵母那條曲線，壓縮成大約兩週。"
                  : "A sokujō starter has no second or third band: lactic acid is added on day one. Only the yeast curve remains, compressed into a fortnight.") + '</text>';
            s += '</svg>';
            return s;
          } },

        { t:"steps", items:[
          { n:"1", title:{ en:"Everything arrives at once", ja:"すべてが同時に来る", zh:"一切同時到來" }, jp:"仕込み直後", romaji:"shikomi",
            meta:{ en:"Day 0–2 · about 7 °C", ja:"0〜2日目・7℃前後", zh:"第 0–2 天・約 7 °C" },
            text:{ en:"Rice, kōji and water go into a shallow tub. With them comes everything that was on the rice, in the water and in the room: nitrate-reducing bacteria, several kinds of lactic acid bacteria, wild yeasts, and a small population of the house sake yeast living in the building. Nothing has been sterilised. The cold is the only control, and it is holding everything back roughly equally.",
              ja:"米、麹、水が浅い桶に入る。ともに入るのは、米に、水に、室にあったすべてである——硝酸還元菌、数種の乳酸菌、野生酵母、そして建物に住み着いた蔵付きの清酒酵母の小さな集団。何一つ殺菌されていない。制御は寒さのみであり、それはすべてをおおむね等しく押し留めている。",
              zh:"米、麴與水投入淺桶。隨之而來的是米上、水中與室內的一切：硝酸還原菌、數種乳酸菌、野生酵母，以及棲息於建物中的少量藏付清酒酵母。什麼都沒有滅菌。唯一的控制手段是低溫，而它大致上均等地壓制著一切。" } },
          { n:"2", title:{ en:"Nitrite clears the ground", ja:"亜硝酸が地を均す", zh:"亞硝酸清出空地" }, jp:"亜硝酸反応期", romaji:"ashōsan",
            meta:{ en:"Day 2–7", ja:"2〜7日目", zh:"第 2–7 天" },
            text:{ en:"Nitrate-reducing bacteria multiply first and convert the nitrate naturally present in the brewing water into nitrite. Nitrite is toxic to the wild yeasts and to some bacteria, and in combination with the low temperature it removes most of the unwanted population during precisely the window when the wanted ones are too few to compete. This is why brewing water chemistry matters in ways that have nothing to do with flavour.",
              ja:"硝酸還元菌が最初に増え、仕込水に自然に含まれる硝酸を亜硝酸へ変える。亜硝酸は野生酵母と一部の細菌に毒であり、低温と相まって、望まぬ集団の大半を除く。それは、望む側がまだ競うには少なすぎる、まさにその窓においてである。仕込水の化学が、風味とはまったく関わらぬ仕方で重要である理由がこれである。",
              zh:"硝酸還原菌率先增殖，把釀造用水中天然存在的硝酸鹽轉為亞硝酸鹽。亞硝酸鹽對野生酵母與部分細菌具毒性，配合低溫，正好在「想要的菌還太少、無力競爭」的那個窗口中清除掉大部分不想要的族群。這正是為何釀造用水的化學在與風味毫無關係的面向上，依然舉足輕重。" } },
          { n:"3", title:{ en:"Lactic acid takes over", ja:"乳酸が支配する", zh:"乳酸接手" }, jp:"乳酸生成期", romaji:"nyūsan",
            meta:{ en:"Day 7–15 · warming", ja:"7〜15日目・暖気入れ", zh:"第 7–15 天・逐步升溫" },
            text:{ en:"As the tub is warmed with the <em>dakidaru</em>, lactic acid bacteria multiply, first cocci and then more acid-tolerant rods. The pH falls steadily toward 3.5. Acid at that level destroys the nitrite, kills the nitrate-reducing bacteria that made it, and finishes off any wild yeast that survived. What is left is a sterile-enough, acidified sugar solution — and the sake yeast, which tolerates this pH easily.",
              ja:"暖気樽で桶が温められるにつれ、乳酸菌が増える。初めは球菌、次いでより酸に強い桿菌である。pHは3.5へ向けて着実に下がる。その水準の酸は亜硝酸を壊し、それを作った硝酸還元菌を殺し、生き残っていた野生酵母を仕留める。あとに残るのは、十分に無菌に近い、酸性化された糖の液——そして、このpHを難なく耐える清酒酵母である。",
              zh:"隨著以「暖氣樽」為桶加溫，乳酸菌開始增殖，先是球菌，接著是更耐酸的桿菌。pH 穩定地朝 3.5 下降。這個程度的酸會破壞亞硝酸鹽、殺死製造它的硝酸還原菌，並了結任何倖存的野生酵母。留下的，是一鍋夠無菌、且已酸化的糖液——以及輕鬆耐受這個 pH 的清酒酵母。" } },
          { n:"4", title:{ en:"The yeast inherits everything", ja:"酵母がすべてを受け継ぐ", zh:"酵母繼承一切" }, jp:"酵母増殖期", romaji:"kōbo zōshoku",
            meta:{ en:"Day 15–30", ja:"15〜30日目", zh:"第 15–30 天" },
            text:{ en:"With competitors removed and sugar abundant, the yeast population rises steeply — to something on the order of a hundred million cells per millilitre. As alcohol accumulates it kills the lactic acid bacteria that cleared the way for it. The finished starter is a dense, acidic, alcoholic yeast culture that can safely be poured into a much larger tank of unprotected mash.",
              ja:"競合が除かれ、糖が潤沢であるなか、酵母の集団は急峻に立ち上がる——一ミリリットルあたり一億個の桁に達する。アルコールが蓄積するにつれ、それは道を空けてくれた乳酸菌を殺す。出来上がった酒母は、濃く、酸性で、アルコールを含む酵母の培養であり、はるかに大きな、無防備な醪の槽へ安全に注ぎ込むことができる。",
              zh:"競爭者被清除、糖分充裕，酵母族群陡然上升——達到每毫升約一億個細胞的量級。隨著酒精累積，它殺死了為它清出道路的乳酸菌。完成的酒母是一份濃稠、酸性、含酒精的酵母培養液，能安全地倒入一只大得多、且毫無防護的醪槽中。" } }
        ] },

        { t:"note", text:{
          en:"The sokujō method compresses this to a single step: lactic acid is added on day one, so stages two and three are skipped entirely and the yeast can be pitched immediately. Nothing in the succession is reproduced, and the argument about what a kimoto tastes of is an argument about whether those intermediate populations leave anything behind — peptides, minor acids, cell-wall material — beyond the pH they were cultivated to produce. See <a href=\"starters.html\">Starter Methods</a>.",
          ja:"速醸法はこれを一段に圧縮する——初日に乳酸を加えるため、第二段と第三段はまるごと省かれ、酵母を直ちに入れられる。遷移は何一つ再現されない。生酛が何の味であるのかという議論は、それらの中間の集団が、育てられた目的であるpHのほかに何か——ペプチド、微量の酸、菌体の成分——を残すのかどうかという議論である。<a href=\"starters.html\">酒母の型</a>を参照。",
          zh:"速釀法把這一切壓縮成單一步驟：第一天就加入乳酸，於是第二、三階段被完全略過，酵母可以立即投入。演替過程完全沒有被重現。而關於「生酛嚐起來是什麼」的爭論，其實是在爭論那些中間族群，除了它們被培養出來所要產生的 pH 之外，是否還留下了別的東西——胜肽、微量的酸、菌體細胞壁物質。見<a href=\"starters.html\">酒母工法</a>。" } }
      ] },

    { t:"section", id:"hiochi",
      title:{ en:"Hiochi, and why sake is pasteurised", ja:"火落ちと、火入れの理由", zh:"火落，以及清酒為何要火入" }, jp:"火落菌",
      body:[
        { t:"p", text:{
          en:"Almost nothing grows in finished sake. It is acidic, nutritionally odd, and around fifteen per cent alcohol. One group of organisms is the exception, and the entire practice of pasteurisation exists because of them.",
          ja:"完成した酒のなかで育つものはほとんどない。酸性で、栄養の組成が変わっており、そしておよそ十五パーセントのアルコールを含む。ただ一群の生物が例外であり、火入れという営みの全体は、それゆえに存在する。",
          zh:"幾乎沒有什麼能在成品清酒中生長。它是酸性的、營養組成古怪，且含約十五個百分點的酒精。只有一群生物是例外——而整套火入的做法，正是因它們而存在。" } },

        { t:"defs", items:[
          { term:{ en:"What they are", ja:"何であるか", zh:"它們是什麼" }, jp:"火落菌", romaji:"hiochi-kin",
            def:{ en:"Alcohol-tolerant lactic acid bacteria, chiefly <em>Lactobacillus fructivorans</em> and <em>L. hilgardii</em> with several relatives. They grow best at around six per cent alcohol but remain viable at concentrations far higher — reported up to about twenty-five per cent — which puts every ordinary sake comfortably inside their range.",
              ja:"アルコールに耐える乳酸菌であり、主にLactobacillus fructivoransとL. hilgardii、およびその近縁である。最もよく育つのはアルコール六パーセント前後だが、はるかに高い濃度でも生存する——およそ二十五パーセントまでと報告されている——ゆえに、あらゆる普通の日本酒は、その生育域のうちに悠々と収まってしまう。",
              zh:"耐酒精的乳酸菌，主要是 Lactobacillus fructivorans 與 L. hilgardii 及其數種近親。它們在約 6% 酒精濃度下生長最好，但在遠更高的濃度下仍能存活——有報告指出可達約 25%——這意味著任何一支普通清酒都舒舒服服地落在它們的生存範圍內。" } },
          { term:{ en:"Hiochic acid", ja:"火落酸", zh:"火落酸" }, jp:"火落酸", romaji:"hiochi-san",
            def:{ en:"Hiochi bacteria need a growth factor that ordinary media do not supply, and identifying it was a substantial piece of Japanese biochemistry. Work on the problem began at Tokyo Imperial University in 1906; in 1956 Tamura Gakuzō identified the factor as mevalonic acid, provisionally named <em>hiochic acid</em> in Japan. Mevalonic acid turned out to be the central precursor of the entire isoprenoid pathway — cholesterol, steroids, terpenes — so a question about spoiled sake led directly into one of the main highways of metabolism.",
              ja:"火落菌は、通常の培地が供給しない生育因子を要する。その同定は、日本の生化学における相当な仕事であった。この問題への取り組みは明治三十九年（1906）に東京帝国大学で始まり、昭和三十一年（1956）に田村学造がその因子をメバロン酸と同定した。日本では暫定的に火落酸と名づけられていたものである。メバロン酸は、コレステロール、ステロイド、テルペンといったイソプレノイド経路全体の中心的な前駆体であることが判明した。腐った酒についての問いが、代謝の主要な幹線道路の一つへ直結したのである。",
              zh:"火落菌需要一種普通培養基不提供的生長因子，而鑑定它是日本生化學上一項相當可觀的工作。相關研究於一九〇六年始於東京帝國大學；一九五六年，田村学造鑑定出該因子即甲羥戊酸（mevalonic acid），在日本曾暫名為「火落酸」。甲羥戊酸後來被證實是整條類異戊二烯途徑——膽固醇、類固醇、萜類——的核心前驅物。一個關於壞掉的酒的問題，就這樣直通代謝的主幹道之一。" } },
          { term:{ en:"What the damage looks like", ja:"被害の見え方", zh:"損害的樣貌" }, jp:"白濁・酸敗", romaji:"hakudaku / sanpai",
            def:{ en:"A hiochi infection turns clear sake cloudy white, raises its acidity sharply, and produces a stale, faintly rancid aroma. In an advanced case the sake resembles vinegar. Historically this was catastrophic: a brewery could lose a whole season's production in tank, and the word for total spoilage, <em>fuzō</em>, describes a business failure as much as a technical one.",
              ja:"火落ちに侵された酒は白く濁り、酸度が鋭く上がり、古びた、僅かに脂の傷んだような香りを帯びる。進めば酢に似る。歴史的にこれは破滅的であった——蔵は一季の生産をタンクごと失いえたのであり、腐造という語は、技術上の失敗であると同じくらい、商いの破綻を語っている。",
              zh:"遭火落菌感染的酒會轉為白濁、酸度陡增，並產生陳腐、略帶油耗味的氣息。嚴重時近似醋。歷史上這是毀滅性的：一家酒藏可能整槽失去一整季的產量；而「腐造」這個詞所描述的，既是技術上的失敗，也同樣是生意上的破產。" } },
          { term:{ en:"Why 62–68 °C", ja:"なぜ62〜68℃か", zh:"為何是 62–68 °C" }, jp:"火入れ", romaji:"hi-ire",
            def:{ en:"Sake is pasteurised at roughly 62 to 68 °C — well below boiling, and lower than most Western pasteurisation. That is enough to kill hiochi bacteria and to denature the kōji enzymes, which would otherwise go on modifying the sake in the bottle, while doing minimal damage to the aromatics. Records of heating sake for preservation go back to the Muromachi period, three centuries before Pasteur described why it works.",
              ja:"日本酒はおよそ62から68℃で火入れされる。沸点よりはるかに低く、西洋の低温殺菌の多くよりも低い。それは火落菌を殺し、放置すれば瓶のなかで酒を変え続ける麹の酵素を失活させるに足り、しかも香りへの損傷は最小である。保存のために酒を加熱した記録は室町時代に遡る。パストゥールがその理由を記述する三世紀前である。",
              zh:"清酒的火入約在 62 至 68 °C——遠低於沸點，也低於多數西方的巴氏殺菌。這足以殺死火落菌，並使麴的酵素失活（否則它們會在瓶中持續改變酒質），同時對香氣的損傷降到最低。為保存而加熱清酒的紀錄可追溯至室町時代，比巴斯德闡明其原理早了三個世紀。" } }
        ] },

        { t:"panel", title:{ en:"Which is why nama is different", ja:"生酒が別物である理由", zh:"這正是生酒不同之處" },
          body:[
            { t:"p", text:{
              en:"An unpasteurised sake still contains live yeast, active kōji enzymes and whatever bacteria survived filtration. Refrigeration is not a nicety for these bottles, it is the only remaining control — and it explains everything else about them: the short shelf life, the cold chain from brewery to shop, the warning on the neck label, and the particular fresh, slightly unstable quality that makes them worth the trouble.",
              ja:"火入れをしていない酒は、なお生きた酵母と働く麹の酵素、そして濾過を生き延びた細菌を含む。これらの瓶にとって冷蔵は気配りではなく、残された唯一の制御である。それが他のすべてを説明する——短い賞味の期間、蔵から店までの冷たい流通、首かけの注意書き、そして手間をかけるに値する、あの新鮮でわずかに不安定な質を。",
              zh:"未經火入的清酒仍含有活酵母、仍在作用的麴酵素，以及任何通過過濾倖存下來的細菌。對這些酒瓶而言，冷藏不是講究，而是僅存的控制手段——這也解釋了其餘的一切：短暫的賞味期、從酒藏到店家的冷鏈、瓶頸標籤上的警語，以及那份鮮活而略微不穩定、值得為之費心的特質。" } }
          ] }
      ] },

    { t:"section", id:"spoilage",
      title:{ en:"Everything else that can grow in it", ja:"そこに育ちうる他のすべて", zh:"還有什麼會在裡面生長" }, jp:"腐造と汚染",
      body:[
        { t:"p", text:{
          en:"Hiochi bacteria are the famous problem because they attack finished sake. Several other organisms attack it earlier, and before the twentieth century they routinely destroyed whole seasons. The word for that — <em>fuzō</em>, a spoiled brewing — is one every brewer knows and almost none has experienced, which is the clearest single measure of what microbiology did for this industry.",
          ja:"火落菌が名高い問題であるのは、それが仕上がった酒を襲うからである。他のいくつかの生き物はより早くにそれを襲い、二十世紀より前には、一季の全体を常のごとく壊した。それを指す語——腐造——は、あらゆる造り手が知り、そしてほとんど誰も経験したことのない語である。微生物学がこの産業のために何をなしたかの、最も明快な一つの尺度である。",
          zh:"火落菌之所以是著名的問題，是因為它攻擊已完成的酒。另外幾種生物則更早出手，而在二十世紀之前，它們經常摧毀整整一季。指稱這件事的詞——「腐造」——是每一位釀造者都知道、卻幾乎沒有人親身經歷過的詞。這是微生物學為這個產業做了什麼，最清楚的一項量度。" } },
        { t:"table",
          caption:{ en:"The unwanted organisms, and what each leaves behind", ja:"望まれぬ生き物と、それぞれが残すもの", zh:"不受歡迎的微生物，以及各自留下的東西" },
          cols:[{ en:"Organism", ja:"生き物", zh:"生物" }, { en:"Where it strikes", ja:"襲う場所", zh:"下手之處" }, { en:"What you smell or see", ja:"匂いと見え", zh:"聞到或看到什麼" }, { en:"What stops it", ja:"止めるもの", zh:"如何阻止" }],
          keyCol:0,
          rows:[
            [{ en:"Hiochi bacteria", ja:"火落菌", zh:"火落菌" }, { en:"Finished, stored sake", ja:"仕上がり貯蔵された酒", zh:"已完成、入庫貯藏的酒" },
             { en:"A silky haze, then a lactic-diacetyl smell of buttermilk turning to something sour and stale. The sake goes cloudy and does not come back.", ja:"絹のような濁り、ついで酪酸のような、乳のバターに似た匂いが酸っぱく古びたものへ変わる。酒は濁り、戻らない。", zh:"先是絲綢般的霧濁，接著出現乳酸—雙乙醯的酪乳氣味，並轉為酸而陳腐的味道。酒變混濁，而且回不來。" },
             { en:"Pasteurisation at 62–68 °C, and cold storage. Uniquely, these bacteria require mevalonic acid to grow, which is why a laboratory can select for them specifically.", ja:"六十二度から六十八度の火入れと、冷蔵である。この細菌はメバロン酸を要して育つという点で独特であり、それゆえ実験室はこれを狙って選抜しうる。", zh:"以攝氏 62–68 度火入，並冷藏。這類細菌獨特之處在於必須有甲羥戊酸才能生長，因此實驗室可以專門針對它們進行選擇性培養。" }],
            [{ en:"Film yeast", ja:"産膜酵母", zh:"產膜酵母" }, { en:"Any surface exposed to air — an open tank, a half-empty bottle", ja:"空気に触れるあらゆる面——開いた槽、半ば空いた瓶", zh:"任何接觸空氣的液面——敞開的酒槽、半空的酒瓶" },
             { en:"A wrinkled white film on the surface and a sharp solvent-and-glue smell of acetaldehyde. It is aerobic, so it only grows where there is air.", ja:"表面の皺の寄った白い膜と、アセトアルデヒドの鋭い溶剤と糊の匂いである。好気であり、ゆえに空気のある所にのみ育つ。", zh:"液面上一層皺褶的白膜，以及乙醛帶來的刺鼻溶劑與膠水味。它是好氧的，因此只在有空氣的地方生長。" },
             { en:"Keeping tanks full and topped, keeping bottles closed and cold, and finishing an opened bottle. It is the commonest fault in a bottle a drinker has left too long.", ja:"槽を満たし継ぎ足しておくこと、瓶を閉じて冷やしておくこと、そして開けた瓶を飲み切ることである。飲み手が長く置きすぎた瓶において最もよくある欠点である。", zh:"讓酒槽保持滿並隨時補滿、讓瓶子關緊並冷藏，以及把開過的瓶子喝完。這是飲者放太久的酒瓶中最常見的缺陷。" }],
            [{ en:"Wild phenolic yeasts", ja:"野生酵母（フェノール性）", zh:"野生酚類酵母" }, { en:"The starter and the early mash", ja:"酒母と醪の初め", zh:"酒母與醪的初期" },
             { en:"A medicinal, clove-and-smoke note — 4-vinylguaiacol, the same compound that is a defining virtue in a German wheat beer and a defining fault here.", ja:"薬のような、丁字と煙の香り——4-ビニルグアイアコールであり、独逸の小麦の麦酒においては定義となる美点、ここにおいては定義となる欠点である、同じ化合物である。", zh:"一種藥味、丁香與煙燻的調性——4-乙烯基癒創木酚，同一個化合物在德國小麥啤酒中是決定性的優點，在這裡則是決定性的缺陷。" },
             { en:"A clean building, an early acid drop, and a strong pitch of a domesticated yeast. Association yeasts are all selected to be non-phenolic, which is one of the things 'selected' means.", ja:"清らかな建物と、早い酸の投入と、飼い慣らされた酵母の強い添加である。協会酵母はいずれもフェノールを生じぬよう選ばれており、選抜されたという語が意味することの一つがそれである。", zh:"乾淨的建築、及早把酸度壓下去，以及大量投入馴化過的酵母。協會酵母全都經選育為不產生酚味——這正是「經過選育」所包含的意義之一。" }],
            [{ en:"Butyric bacteria", ja:"酪酸菌", zh:"酪酸菌" }, { en:"A stalled or warm starter", ja:"止まった、あるいは暖かい酒母", zh:"停滯或溫度偏高的酒母" },
             { en:"Butyric acid: rancid butter, vomit, cheese left out. Unmistakable, and the tank is finished.", ja:"酪酸である。腐れたバター、吐瀉、放置された乾酪。紛れようがなく、その槽は終わりである。", zh:"丁酸：酸敗的奶油、嘔吐物、放到壞掉的乳酪。無從誤認，而那一槽就報廢了。" },
             { en:"Acidity, early and sufficient. This is precisely the organism the nitrite step and the lactic acid in a starter exist to exclude.", ja:"早く十分な酸である。亜硝酸の段と酒母の乳酸とが排除するために存在するのは、まさにこの生き物である。", zh:"及早且足夠的酸度。亞硝酸這一步與酒母中的乳酸之所以存在，要排除的正是這種生物。" }],
            [{ en:"Wild lactic bacteria", ja:"野生の乳酸菌", zh:"野生乳酸菌" }, { en:"Anywhere, and sometimes on purpose", ja:"至る所。時には意図して", zh:"任何地方，有時是刻意的" },
             { en:"In a kimoto they are the point; in a sokujō mash they are a contaminant that pushes acidity past the intended figure and can stall the yeast. The same family, entirely different verdict depending on which tank it is in.", ja:"生酛においてそれは目的であり、速醸の醪においては意図した数値を越えて酸を押し上げ、酵母を止めうる汚染である。同じ一族が、どの槽にいるかによってまったく異なる判定を受ける。", zh:"在生酛中它們正是目的；在速釀的醪中，它們是把酸度推過預定數值、甚至可能讓酵母停擺的汙染。同一個菌族，端看它在哪一槽裡，得到的判決完全不同。" },
             { en:"Nothing, if you want them. Sanitation and a fast, strong fermentation, if you do not.", ja:"望むのであれば何もしない。望まぬのであれば、清潔と、速く強い発酵である。", zh:"若你要它們，什麼也不必做。若你不要，就靠清潔以及一場快速而強勁的發酵。" }]
          ] }
      ] },

    { t:"section", id:"detecting",
      title:{ en:"How a brewery knows", ja:"蔵はいかにして知るか", zh:"酒藏如何得知" }, jp:"検査",
      body:[
        { t:"p", text:{
          en:"None of these organisms announce themselves early enough to be caught by taste. A working brewery therefore runs a small microbiology bench, and the equipment on it has barely changed in seventy years because it does not need to.",
          ja:"これらの生き物のいずれも、味で捉えうるほど早く自らを告げはしない。ゆえに稼働する蔵は小さな微生物の実験台を営み、その上の器具は七十年ほとんど変わっていない。変わる必要がないからである。",
          zh:"這些生物沒有一種會早到能被味覺捕捉時就自報身分。因此一家運作中的酒藏會設一張小小的微生物工作檯，而檯面上的器材七十年來幾乎沒有改變——因為它不需要改變。" } },
        { t:"defs", items:[
          { term:{ en:"Counting the yeast", ja:"酵母を数える", zh:"計數酵母" }, jp:"血球計算板", romaji:"kekkyū keisanban",
            def:{ en:"A drop of mash under a microscope on a ruled counting chamber, and the cells in a known volume are counted by eye. It gives a yeast population per millilitre and, just as usefully, the proportion of cells that are budding — which says whether the population is still growing or has stopped. It is the single most informative five minutes in a brewery's day and it uses a piece of glass invented for counting blood cells.",
              ja:"目盛りを刻んだ計算室の上に置いた醪の一滴を顕微鏡で見、既知の体積のうちの細胞を目で数える。一ミリリットル当たりの酵母の数を与え、そして同じだけ有用なこととして、出芽している細胞の割合を与える。それは群れがなお増えているのか止まったのかを告げる。蔵の一日のうち最も多くを教える五分間であり、血の細胞を数えるために発明された一片の硝子を用いる。",
              zh:"取一滴醪，置於刻有格線的計數室上以顯微鏡觀察，用肉眼數出已知體積內的細胞數。它給出每毫升的酵母數量，同樣有用的是，還給出正在出芽的細胞比例——這說明族群仍在增長還是已經停止。這是酒藏一天當中資訊量最大的五分鐘，而它使用的是一片為計數血球而發明的玻璃。" } },
          { term:{ en:"Culturing the enemy", ja:"敵を培う", zh:"培養敵人" }, jp:"火落菌用培地", romaji:"hiochi-kin-yō baichi",
            def:{ en:"Hiochi bacteria cannot be grown on an ordinary plate: they require mevalonic acid, a growth factor most laboratory media do not contain. That requirement, discovered in the 1950s, is also the tool — a medium made with sake and mevalonic acid grows hiochi bacteria and almost nothing else, so a brewery can plate a sample from a storage tank and know within days whether anything is living in it. A pathogen defined by its appetite is a pathogen you can trap.",
              ja:"火落菌は並の平板では育たない。ほとんどの培地が含まぬ生育の因子であるメバロン酸を要するからである。一九五〇年代に見出されたその要求は、同時に道具でもある。酒とメバロン酸で作った培地は火落菌を育て、他のほとんどを育てない。ゆえに蔵は貯蔵の槽から一検体を播き、数日のうちにそこに何かが生きているか否かを知りうる。食欲によって定義される病原は、罠にかけうる病原である。",
              zh:"火落菌無法在一般培養基上生長：它們需要甲羥戊酸，而多數實驗室培養基並不含這種生長因子。這項在一九五〇年代被發現的需求，同時也是工具——以清酒加甲羥戊酸製成的培養基能長出火落菌，而幾乎長不出別的東西；於是酒藏可以從貯藏槽取樣塗盤，數日之內就知道裡面是否有活物。一個由食慾所定義的病原體，是一個抓得到的病原體。" } },
          { term:{ en:"The surfaces", ja:"面", zh:"表面" }, jp:"拭き取り検査", romaji:"fukitori kensa",
            def:{ en:"Hoses, valves, pump heads, the filler, the inside of a bottling line: swabs are taken and either plated or read with an ATP luminometer that gives a number in seconds. Most contamination of finished sake does not come from the mash at all; it comes from a fitting between the tank and the bottle, and it is found by someone with a cotton bud rather than by anyone tasting.",
              ja:"管、弁、ポンプの頭、充填機、瓶詰の生産線の内側。拭き取りが行われ、播かれるか、あるいは数秒で数値を返すATPの発光計で読まれる。仕上がった酒の汚染のほとんどは醪から来るのではない。槽と瓶のあいだの継手から来るのであり、それは利き酒をする誰かによってではなく、綿棒を持つ誰かによって見つけられる。",
              zh:"軟管、閥門、泵頭、填充機、裝瓶線的內部：以棉棒採樣，再送去塗盤，或用能在數秒內給出數值的 ATP 發光儀判讀。成品酒的汙染大多根本不是來自醪，而是來自酒槽與瓶子之間的某個接頭——而找到它的，是拿著棉棒的人，不是品酒的人。" } },
          { term:{ en:"And the nose, still", ja:"そしてなお、鼻", zh:"以及，依然是鼻子" }, jp:"利き酒", romaji:"kikizake",
            def:{ en:"Every one of these instruments confirms something a good brewer has usually already suspected. The daily tasting of every tank is not ceremonial: acetaldehyde, diacetyl and 4-vinylguaiacol are all detectable by nose at concentrations well below what a quick assay will show, and the reason a tōji smells forty tanks every morning is that a nose is a faster detector than a plate.",
              ja:"これらの器具のいずれもが、良い造り手のたいていすでに疑っていたことを裏づける。日々の槽ごとの利き酒は儀礼ではない。アセトアルデヒドも、ジアセチルも、4-ビニルグアイアコールも、手早い測定が示すよりはるかに低い濃度で鼻に捉えられる。杜氏が毎朝四十の槽を嗅ぐ理由は、鼻が平板よりも速い検出器だからである。",
              zh:"這些儀器所做的每一件事，都只是確認一位好釀造者通常早已懷疑的東西。每天逐槽的品評不是儀式：乙醛、雙乙醯與 4-乙烯基癒創木酚，都能在遠低於快速檢測所能顯示的濃度下被鼻子捕捉到；杜氏之所以每天早上嗅過四十槽，是因為鼻子是比培養皿更快的偵測器。" } }
        ] }
      ] },

    { t:"section", id:"house",
      title:{ en:"The building as a habitat", ja:"棲み処としての建物", zh:"作為棲地的建築" }, jp:"蔵付き",
      body:[
        { t:"p", text:{
          en:"A brewery that has operated for two centuries has a resident microflora — in the cedar of the kōji room, in the wooden tools, in the air, and in any wooden vessels. The term for it is <em>kurazuke</em>, the house population, and the modern argument about it is one of the sharpest in sake.",
          ja:"二世紀にわたり操業してきた蔵は、住み着いた微生物相を持つ——麹室の杉に、木の道具に、空気に、そして木の器があればそこに。これを蔵付きという。これをめぐる現代の議論は、日本酒における最も鋭い論争の一つである。",
          zh:"一座營運了兩個世紀的酒藏，擁有常駐的微生物相——在麴室的杉木裡、在木製器具裡、在空氣裡，以及若有木製容器，也在其中。這被稱為「藏付き」；而圍繞它的現代爭論，是清酒界最尖銳的論爭之一。" } },

        { t:"compare", cols:2, items:[
          { title:{ en:"The case for the house population", ja:"蔵付きを擁する側", zh:"支持藏付的一方" }, jp:"復古の側",
            text:{ en:"Terroir lives here, or nowhere.", ja:"風土が宿るならここである。", zh:"風土若有所寄，就寄於此。" },
            body:[
              { t:"p", text:{
                en:"If a brewery's identity is anywhere physical, it is in the organisms living in the building rather than in the rice, which can be bought, or the yeast, which can be ordered by post. Breweries reviving wooden vats and traditional starters argue that the resident population contributes complexity that no single pure culture reproduces, and that a century of continuous operation has selected a community adapted specifically to that site. Kyōkai No. 6 and No. 9 were both originally house yeasts, isolated because a particular brewery kept producing unusually good sake — which is evidence that house populations really can differ, and really can matter.",
                ja:"蔵の輪郭がどこか物理的な場所にあるとすれば、それは買える米でも、郵送で注文できる酵母でもなく、建物に住む生物のうちにある。木桶と伝統的な酒母を復活させる蔵は、住み着いた集団が、いかなる単一の純粋培養も再現しえない複雑さを寄与すると論じ、また一世紀の連続した操業が、その場所に固有に適応した群集を選抜してきたと論じる。きょうかい6号も9号も、もとは蔵付きの酵母であった。ある蔵が異様によい酒を出し続けたがゆえに分離されたのである——それは、蔵付きの集団が実際に異なりうること、そして実際に効きうることの証拠である。",
                zh:"如果一家酒藏的身分有任何物理上的所在，那不在可以買到的米，也不在可以郵購的酵母，而在住於建築中的那些生物。復興木桶與傳統酒母的酒藏主張：常駐族群貢獻了任何單一純粹培養都無法重現的複雜度，而一個世紀不間斷的營運，已篩選出專門適應該場址的群落。協會 6 號與 9 號原本都是藏付酵母——正因為某家酒藏持續產出異常好的酒才被分離出來。這正是「藏付族群確實可能不同、也確實可能有影響」的證據。" } }
            ] },
          { title:{ en:"The case against relying on it", ja:"それに頼ることへの反論", zh:"反對倚賴它的一方" }, jp:"管理の側",
            text:{ en:"An uncontrolled variable is still a variable.", ja:"制御されない変数も、変数である。", zh:"未受控的變因，仍然是變因。" },
            body:[
              { t:"p", text:{
                en:"The counter-argument is that a resident population is not a signature but a risk. It is unmeasured, it changes with renovations and weather, it includes the spoilage organisms as well as the useful ones, and the historical record of brewing before pure cultures is a record of frequent, expensive failure. Breweries built around measurement point out that consistency is not the opposite of quality: a customer who buys the same bottle twice is entitled to the same sake. Both positions are held by serious, successful producers, which is a good sign that the honest answer is that it depends on how much variability a brewery can afford.",
                ja:"反論はこうである——住み着いた集団は署名ではなく危険である。それは測られておらず、改修や天候で変わり、有用なものとともに腐敗を起こすものをも含む。そして純粋培養以前の酒造りの記録は、頻繁で高くつく失敗の記録である。計測を軸に組み立てられた蔵は、均質さは品質の反対ではないと指摘する——同じ瓶を二度買う客には、同じ酒を受け取る権利がある。いずれの立場も真剣で成功した作り手が取っており、それは、正直な答えが「その蔵がどれだけの振れ幅を許容できるかによる」であることのよい徴である。",
                zh:"反方的論點是：常駐族群不是署名，而是風險。它未經測量，會隨整修與天候改變，且既包含有用的菌，也包含腐敗菌；而純粹培養問世前的釀造史，正是一部頻繁而昂貴的失敗史。以測量為核心建構的酒藏指出，穩定並非品質的反面：一位買了同一支酒兩次的顧客，有權得到同樣的酒。兩種立場都有認真而成功的生產者持守——這正好說明，誠實的答案是：這取決於一家酒藏能負擔多大的變異。" } }
            ] }
        ] },

        { t:"note", text:{
          en:"For the organisms individually see <a href=\"koji.html\">Kōji</a> and <a href=\"yeast.html\">Yeast</a>; for the starters that manage them see <a href=\"starters.html\">Starter Methods</a>; for the wider family of kōji-fermented foods see <a href=\"kojifamily.html\">The Kōji Family</a>.",
          ja:"個々の生物については<a href=\"koji.html\">麹</a>と<a href=\"yeast.html\">酵母</a>、それらを御する酒母については<a href=\"starters.html\">酒母の型</a>、麹による発酵食品の広い一族については<a href=\"kojifamily.html\">麹の一族</a>を参照。",
          zh:"個別生物見<a href=\"koji.html\">麴</a>與<a href=\"yeast.html\">酵母</a>；管理它們的酒母見<a href=\"starters.html\">酒母工法</a>；以麴發酵之食品的廣大家族見<a href=\"kojifamily.html\">麴的家族</a>。" } }
      ] }
,

    { t:"related", items:[
      { href:"koji.html", why:{ en:"The first organism, and the only one deliberately farmed.", ja:"最初の生きものであり、意図して育てられる唯一のもの。", zh:"第一個生物，也是唯一被刻意栽培的那一個。" } },
      { href:"starters.html", why:{ en:"The tub where the succession is allowed to run.", ja:"遷移が走ることを許される桶。", zh:"那個被允許讓演替跑完的桶子。" } },
      { href:"faults.html", why:{ en:"What happens when the wrong organism wins.", ja:"誤った生きものが勝ったときに起きること。", zh:"當錯誤的那個生物贏了，會發生什麼。" } },
      { href:"compare.html", why:{ en:"The same cast in beer, wine and the Chinese starters.", ja:"麦酒、葡萄酒、そして中国の麹における同じ顔ぶれ。", zh:"啤酒、葡萄酒與中國酒麴裡的同一批角色。" } }
    ] }
  ]
};

/* 고1 Vol.3 — 아직 공개하지 않는다.
   이 파일은 어느 페이지에도 <script>로 걸려 있지 않아, 지금은 앱에 전혀 나타나지 않는다.
   공개하려면 reading.html과 index.html 양쪽에서 이 파일을 가리키는
   주석 처리된 <script> 한 줄씩만 풀면 된다. 한쪽만 풀면 허브의 지문 수가 어긋난다.

   모두 창작 지문이며 형식과 규칙은 exam/data/h1.js 머리말 그대로다.
   반드시 뒤에 붙일 것 — 중간에 끼우면 이미 푼 지문의 번호가 밀린다. */

EXAM_SETS_H1.push(
{
  id: "h1-021",
  title: "바꾸지 못하는 자판",
  passage: "The letters on your keyboard sit in an order nobody would choose today. The arrangement dates from the 1870s, when a typewriter struck the page through metal arms that jammed if two neighbouring arms swung together. Separating common pairs of letters kept the machine running. The story that the layout was designed to slow typists down is a simplification, but the point survives: the order solved a problem that no longer exists. Faster arrangements have been proposed and tested since, and none has spread. The reason is not that typists are stubborn. It is that a keyboard is only useful if other people can use it too, so the cost of switching falls on whoever moves first while the benefit arrives only if everyone follows. Economists call this path dependence, and keyboards are its gentlest example. Harder ones include the rails a country laid first and the language its offices happened to adopt.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how the first typewriters were manufactured",
        "why typing speed matters less than accuracy",
        "why an outdated keyboard layout has never been replaced",
        "the difficulty of learning to type as an adult",
        "how letters were chosen for the earliest alphabets"
      ],
      answer: 2,
      explain: "글은 자판 배열이 사라진 문제를 풀기 위해 만들어졌는데도 바뀌지 않는 이유를 설명하고, 그것을 경로 의존성의 예로 든다. 따라서 주제는 ③. ①은 배경일 뿐이고 ②·④·⑤는 지문에 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "A faster layout fails to spread because the cost of switching ______.",
      choices: [
        "falls on the first person to move while the gain needs everyone",
        "is higher for schools than for offices",
        "has risen steadily since the 1870s",
        "cannot be measured in money at all",
        "is paid by the makers of keyboards"
      ],
      answer: 0,
      explain: "지문은 자판이 남들도 쓸 수 있어야 쓸모가 있기 때문에, 비용은 먼저 옮기는 사람이 치르고 이득은 모두가 따라와야 생긴다고 했다. 따라서 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 stubborn과 의미가 가장 가까운 것은?",
      target: "stubborn",
      choices: [
        "careless",
        "skilled",
        "tired",
        "unwilling to change",
        "poorly trained"
      ],
      answer: 3,
      explain: "stubborn은 \"고집스러운\"이라는 뜻이다. 더 빠른 배열이 안 퍼지는 것이 타자수의 고집 때문은 아니라는 맥락이므로 unwilling to change가 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "초기 타자기는 이웃한 금속 팔이 함께 움직이면 엉켰다.",
        "지금의 자판 배열은 타자 속도를 올리려고 설계되었다.",
        "더 빠른 배열들이 제안되고 시험되었지만 퍼지지 않았다.",
        "경제학자들은 이런 현상을 경로 의존성이라고 부른다.",
        "글쓴이는 자판을 경로 의존성의 가장 가벼운 예로 든다."
      ],
      answer: 1,
      explain: "배열은 속도를 올리려는 것이 아니라 글쇠가 엉키지 않게 자주 붙어 다니는 글자를 떼어 놓으려는 것이었다. 따라서 ②가 일치하지 않는다."
    }
  ],
  translation: "당신의 자판에 있는 글자들은 오늘날이라면 아무도 고르지 않을 순서로 놓여 있다. 그 배열은 1870년대에서 비롯되었는데, 당시 타자기는 금속 팔로 종이를 때렸고 이웃한 두 팔이 함께 움직이면 엉켜 버렸다. 자주 붙어 다니는 글자 쌍을 떼어 놓는 것이 기계를 굴러가게 했다. 그 배열이 타자수를 느리게 하려고 설계되었다는 이야기는 단순화한 설명이지만, 요점은 그대로 남는다. 그 순서는 이제 존재하지 않는 문제를 푼 것이다. 그 뒤로 더 빠른 배열들이 제안되고 시험되었지만 어느 것도 퍼지지 않았다. 이유는 타자수들이 고집스러워서가 아니다. 자판은 다른 사람들도 쓸 수 있어야만 쓸모가 있어서, 바꾸는 비용은 먼저 움직이는 사람에게 돌아가고 이득은 모두가 따라올 때에야 온다는 데 있다. 경제학자들은 이것을 경로 의존성이라 부르며, 자판은 그중 가장 순한 예다. 더 고약한 예로는 한 나라가 처음 깔아 놓은 철로와, 그 나라 사무실들이 어쩌다 쓰게 된 언어 같은 것들이 있다.",
  words: [
    { w: "arrangement", pos: "명사", mean: "배열, 배치",
      ex: "The arrangement of the desks changed every term.",
      ko: "책상 배치는 학기마다 바뀌었다." },
    { w: "jam", pos: "동사", mean: "엉키다, 걸려서 멈추다",
      ex: "The printer jams whenever the paper is damp.",
      ko: "그 프린터는 종이가 눅눅하면 걸려서 멈춘다." },
    { w: "simplification", pos: "명사", mean: "단순화한 설명",
      ex: "That summary is a simplification, but a fair one.",
      ko: "그 요약은 단순화한 설명이지만 공정한 편이다." },
    { w: "adopt", pos: "동사", mean: "채택하다, 받아들여 쓰다",
      ex: "The school adopted the new textbook without discussion.",
      ko: "그 학교는 논의도 없이 새 교과서를 채택했다." }
  ],
  idioms: [
    { w: "date from", mean: "~에서 비롯되다, ~까지 거슬러 올라가다",
      ex: "The custom dates from a time when letters took weeks.",
      ko: "그 관습은 편지가 몇 주씩 걸리던 시절에서 비롯되었다." },
    { w: "fall on", mean: "(부담이) ~에게 돌아가다",
      ex: "The cost of the repair fell on the tenant.",
      ko: "수리 비용은 세입자에게 돌아갔다." }
  ]
},
{
  id: "h1-022",
  title: "감자가 바꾼 것",
  passage: "When Spanish ships carried the potato out of the Andes in the sixteenth century, Europe was slow to take it. The plant was strange, it grew underground, and no scripture mentioned it. A century of suspicion passed before hunger settled the argument. What finally mattered was arithmetic: an acre of potatoes fed far more people than an acre of grain, and the crop survived cold summers that ruined wheat. Economists comparing regions suited to the potato with regions that were not have estimated that the crop accounts for roughly a quarter of the population growth of the Old World between 1700 and 1900. The same arithmetic carried a risk. Ireland leaned on a single variety, and when a disease reached it in 1845 there was nothing behind it. A crop that can feed a continent can also teach the continent to depend on one thing.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why Spanish ships sailed to South America",
        "the farming methods once used in the Andes",
        "how plant diseases spread among European crops",
        "why wheat remains the world's main grain",
        "how the potato fed Europe and what that dependence cost"
      ],
      answer: 4,
      explain: "앞부분은 감자가 유럽 인구를 어떻게 떠받쳤는지를, 뒷부분은 한 작물에 기댄 대가를 말한다. 두 축을 모두 담은 ⑤가 주제다. ①·②·④는 지문의 중심이 아니고 ③도 아일랜드 한 대목에 그친다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Europe finally accepted the potato because ______.",
      choices: [
        "religious leaders came to approve of the plant",
        "it could be stored for longer than grain",
        "an acre of it fed far more people than grain did",
        "Spanish ships brought it in very large amounts",
        "it was easier to cook than wheat"
      ],
      answer: 2,
      explain: "지문은 \"결국 중요했던 것은 산수였다\"라고 한 뒤, 같은 넓이에서 훨씬 많은 사람을 먹인다는 점을 든다. 따라서 ③이 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 suspicion과 의미가 가장 가까운 것은?",
      target: "suspicion",
      choices: [
        "distrust",
        "hunger",
        "delay",
        "curiosity",
        "custom"
      ],
      answer: 0,
      explain: "suspicion은 \"의심, 미심쩍어함\"이라는 뜻이다. 낯설고 땅속에서 자라며 경전에도 없다는 앞 문장을 받으므로 distrust가 가장 가깝다. ④ curiosity(호기심)는 오히려 반대쪽이다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "감자는 16세기에 안데스에서 유럽으로 건너갔다.",
        "감자는 밀을 망치는 서늘한 여름도 견뎌 냈다.",
        "경제학자들은 감자가 1700~1900년 구대륙 인구 증가의 약 4분의 1을 설명한다고 추정했다.",
        "아일랜드는 여러 품종을 고루 심어 1845년의 병을 견뎌 냈다.",
        "유럽은 처음에는 감자를 받아들이는 데 더뎠다."
      ],
      answer: 3,
      explain: "지문은 아일랜드가 한 품종에 기댔고, 병이 닥쳤을 때 \"그 뒤에 아무것도 없었다\"라고 했다. 따라서 ④가 일치하지 않는다."
    }
  ],
  translation: "16세기에 에스파냐 배들이 안데스에서 감자를 실어 냈을 때, 유럽은 그것을 받아들이는 데 더뎠다. 그 식물은 낯설었고, 땅속에서 자랐으며, 어떤 경전에도 나오지 않았다. 배고픔이 그 논쟁을 끝내기까지 한 세기의 의심이 흘렀다. 결국 중요했던 것은 산수였다. 1에이커의 감자는 1에이커의 곡물보다 훨씬 많은 사람을 먹였고, 그 작물은 밀을 망치는 서늘한 여름도 견뎌 냈다. 감자가 잘 자라는 지역과 그렇지 않은 지역을 견준 경제학자들은, 이 작물이 1700년에서 1900년 사이 구대륙 인구 증가의 약 4분의 1을 설명한다고 추정해 왔다. 같은 산수에는 위험도 따라왔다. 아일랜드는 한 품종에 기댔고, 1845년에 병이 그곳에 닿았을 때 그 뒤에는 아무것도 없었다. 한 대륙을 먹일 수 있는 작물은, 그 대륙에게 한 가지에 기대는 법을 가르칠 수도 있다.",
  words: [
    { w: "acre", pos: "명사", mean: "에이커(넓이 단위)",
      ex: "They cleared two acres before the rain came.",
      ko: "그들은 비가 오기 전에 2에이커를 갈아 놓았다." },
    { w: "ruin", pos: "동사", mean: "망치다, 못 쓰게 만들다",
      ex: "One cold week ruined the whole harvest.",
      ko: "추웠던 한 주가 수확 전체를 망쳤다." },
    { w: "estimate", pos: "동사", mean: "추정하다, 어림잡다",
      ex: "Researchers estimate the number at about forty thousand.",
      ko: "연구자들은 그 수를 4만 정도로 추정한다." },
    { w: "variety", pos: "명사", mean: "품종, 종류",
      ex: "This variety ripens two weeks earlier than the others.",
      ko: "이 품종은 다른 것들보다 2주 일찍 익는다." }
  ],
  idioms: [
    { w: "lean on", mean: "~에 기대다, ~에 의존하다",
      ex: "A town that leans on one factory is fragile.",
      ko: "공장 하나에 기대는 도시는 위태롭다." },
    { w: "account for", mean: "~을 설명하다, ~의 비중을 차지하다",
      ex: "Travel accounts for half of the company's costs.",
      ko: "출장비가 그 회사 비용의 절반을 차지한다." }
  ]
},
{
  id: "h1-023",
  title: "얼룩말의 줄무늬",
  passage: "Why a zebra wears stripes has been argued over for a century. Camouflage was the old favourite, though lions hunt well at dusk and a striped animal in open grass is not hard to see. Others proposed that the pattern confuses a chasing predator, or that it cools the body. Then biologists tried something plainer: they put striped coats on ordinary horses and counted the flies. Horseflies approached the striped horses as often as the bare ones but failed to land, sweeping past or bumping into them as if they could not judge the final distance. The same animals, in bare coats, were landed on freely. Stripes, it seems, are a defence against insects that carry disease, which also explains why the boldest patterns appear where biting flies are worst. A century of elegant guesses lost to an experiment anyone could have run with a horse and a blanket.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how lions choose which animal to chase",
        "what a simple experiment revealed about zebra stripes",
        "why horseflies carry so many diseases",
        "the difficulty of studying animals in the wild",
        "how zebras keep cool in hot grassland"
      ],
      answer: 1,
      explain: "글은 오래된 가설들을 늘어놓은 뒤, 덮개를 씌워 파리를 세어 본 간단한 실험이 답을 내놓았다고 말한다. 따라서 주제는 ②. ⑤는 기각된 가설 중 하나일 뿐이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The experiment suggested that stripes protect a zebra by ______.",
      choices: [
        "hiding it from lions at dusk",
        "lowering the temperature of its skin",
        "making the herd look like one large animal",
        "warning other zebras of danger",
        "stopping biting flies from landing on it"
      ],
      answer: 4,
      explain: "등에는 줄무늬 말에도 똑같이 다가왔지만 내려앉지 못하고 지나치거나 부딪혔다. 즉 줄무늬는 질병을 옮기는 곤충을 막는 방어 수단이므로 ⑤가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 plainer와 의미가 가장 가까운 것은?",
      target: "plainer",
      choices: [
        "louder",
        "older",
        "simpler",
        "safer",
        "newer"
      ],
      answer: 2,
      explain: "plain은 \"무늬 없는\"이라는 뜻도 있지만 여기서는 \"단순한, 꾸밈없는\"이라는 뜻이다. 우아한 가설들과 대비되는 소박한 방법이라는 맥락이므로 simpler가 가장 가깝다. 같은 글 안에서 두 가지 뜻으로 쓰이는 낱말이다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "등에는 줄무늬를 두른 말에게는 평소보다 적게 다가왔다.",
        "생물학자들은 무늬 없는 말에 줄무늬 덮개를 씌워 보았다.",
        "등에는 줄무늬 말에 내려앉지 못하고 지나치거나 부딪혔다.",
        "무늬가 가장 뚜렷한 곳은 무는 파리가 가장 심한 지역이다.",
        "위장설은 오래전부터 가장 인기 있는 설명이었다."
      ],
      answer: 0,
      explain: "지문은 등에가 줄무늬 말에게도 \"똑같이 자주(as often as)\" 다가왔다고 했다. 달랐던 것은 다가온 횟수가 아니라 내려앉지 못했다는 점이므로 ①이 일치하지 않는다."
    }
  ],
  translation: "얼룩말이 왜 줄무늬를 두르고 있는지는 백 년 동안 논쟁거리였다. 위장설이 오래된 인기 설명이었지만, 사자는 땅거미 속에서도 잘 사냥하고 탁 트인 풀밭의 줄무늬 짐승은 알아보기 어렵지 않다. 다른 이들은 그 무늬가 쫓아오는 포식자를 혼란스럽게 한다거나 몸을 식혀 준다고 주장했다. 그러다 생물학자들이 더 단순한 것을 해 보았다. 보통 말에게 줄무늬 덮개를 씌우고 파리를 센 것이다. 등에는 줄무늬를 두른 말에게도 맨몸의 말만큼 자주 다가왔지만 내려앉지는 못했고, 마지막 거리를 가늠하지 못하는 듯 옆으로 휙 지나가거나 몸에 부딪혔다. 같은 말들이 맨몸일 때는 마음껏 내려앉혔다. 줄무늬는 병을 옮기는 곤충에 대한 방어로 보이며, 이는 무는 파리가 가장 심한 곳에서 가장 뚜렷한 무늬가 나타나는 이유도 설명해 준다. 백 년에 걸친 우아한 추측들이, 말 한 마리와 담요 한 장이면 누구나 해 볼 수 있었던 실험에 졌다.",
  words: [
    { w: "camouflage", pos: "명사", mean: "위장, 보호색",
      ex: "The moth's camouflage fails on a painted wall.",
      ko: "그 나방의 보호색은 칠한 벽에서는 통하지 않는다." },
    { w: "dusk", pos: "명사", mean: "땅거미, 해 질 무렵",
      ex: "The birds return to the trees at dusk.",
      ko: "새들은 해 질 무렵이면 나무로 돌아온다." },
    { w: "sweep", pos: "동사", mean: "휙 지나가다, 스쳐 지나가다",
      ex: "A gull swept past the window and was gone.",
      ko: "갈매기 한 마리가 창문을 휙 스쳐 지나가더니 사라졌다." },
    { w: "bold", pos: "형용사", mean: "뚜렷한, 선명한",
      ex: "The sign used bold black letters on white.",
      ko: "그 간판은 흰 바탕에 뚜렷한 검은 글자를 썼다." }
  ],
  idioms: [
    { w: "argue over", mean: "~을 두고 논쟁하다",
      ex: "Historians still argue over the date.",
      ko: "역사학자들은 아직도 그 날짜를 두고 논쟁한다." },
    { w: "bump into", mean: "~에 부딪히다; 우연히 마주치다",
      ex: "He bumped into the table in the dark.",
      ko: "그는 어둠 속에서 탁자에 부딪혔다." }
  ]
},
{
  id: "h1-024",
  title: "소금이 그린 지도",
  passage: "Before refrigeration, salt was the surest way to keep food from rotting, and that single fact shaped maps. Fishing fleets could sail further because the catch could be salted on board. Armies could march because meat travelled with them. Towns rose beside salt springs and mines, and roads were cut to reach them long before anyone needed roads for anything else. Governments noticed. A substance that everyone must buy and nobody can make at home is almost perfectly designed to be taxed, and salt taxes funded states for centuries, from medieval France to British India. They also provoked them: Gandhi chose a march to the sea and a handful of salt as the clearest way to refuse a government. It is hard now to look at a shaker on a table and see any of this. The cheapest thing in the kitchen was once the reason the kitchen could be stocked at all.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why salted food keeps its flavour longer",
        "how refrigeration changed the way we cook",
        "the health risks of eating too much salt",
        "how salt shaped trade, towns and taxes before refrigeration",
        "why Gandhi became a political leader"
      ],
      answer: 3,
      explain: "글은 소금이 항해와 행군을 가능하게 하고 마을과 길을 만들었으며 세금의 대상이자 저항의 상징이 되었다고 늘어놓는다. 이를 아우르는 ④가 주제다. ⑤는 마지막 예시 하나일 뿐이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Salt was almost perfectly designed to be taxed because it was something ______.",
      choices: [
        "only rich households could afford",
        "everyone had to buy and nobody could make",
        "that spoiled quickly once it was opened",
        "produced in only a few countries",
        "that governments themselves consumed"
      ],
      answer: 1,
      explain: "빈칸 문장은 지문의 표현을 그대로 옮긴 자리다. everyone must buy and nobody can make at home이라고 했으므로 ②가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 provoked와 의미가 가장 가까운 것은?",
      target: "provoked",
      choices: [
        "funded",
        "replaced",
        "measured",
        "delayed",
        "stirred up"
      ],
      answer: 4,
      explain: "provoke는 \"불러일으키다, 자극하다\"라는 뜻이다. 앞 문장의 funded(지탱했다)와 대비되어 \"국가를 자극하기도 했다\"로 이어지고 간디의 행진이 그 예이므로 stirred up이 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "배 위에서 생선을 절일 수 있어 어선이 더 멀리 나갈 수 있었다.",
        "소금 샘과 광산 옆에 마을이 생겨났다.",
        "소금을 얻기 위한 길은 다른 용도의 길이 먼저 생긴 뒤에야 뚫렸다.",
        "소금세는 중세 프랑스부터 영국령 인도까지 국가를 지탱했다.",
        "간디는 바다로 향하는 행진과 소금 한 줌을 저항의 방법으로 골랐다."
      ],
      answer: 2,
      explain: "지문은 소금을 얻으려는 길이 \"다른 어떤 일로도 길이 필요해지기 훨씬 전에\" 뚫렸다고 했다. 순서가 뒤집힌 ③이 일치하지 않는다."
    }
  ],
  translation: "냉장이 있기 전, 소금은 음식이 썩지 않게 하는 가장 확실한 방법이었고, 그 하나의 사실이 지도의 모양을 바꾸었다. 잡은 것을 배 위에서 절일 수 있었기에 어선은 더 멀리 나갈 수 있었다. 고기가 함께 움직일 수 있었기에 군대는 행군할 수 있었다. 소금 샘과 광산 옆에 마을이 들어섰고, 다른 어떤 일로도 길이 필요해지기 훨씬 전에 그곳에 닿는 길이 뚫렸다. 정부가 이를 알아차렸다. 모두가 사야 하고 아무도 집에서 만들 수 없는 물질은 세금을 매기기에 거의 완벽하게 설계된 것이어서, 소금세는 중세 프랑스부터 영국령 인도에 이르기까지 수백 년 동안 국가를 지탱했다. 소금세는 국가를 자극하기도 했다. 간디는 바다로 향하는 행진과 소금 한 줌을, 한 정부를 거부하는 가장 분명한 방법으로 골랐다. 지금 식탁 위의 양념통을 보면서 이 가운데 어떤 것도 떠올리기는 어렵다. 부엌에서 가장 싼 그것이 한때는 부엌을 채울 수 있게 해 준 이유였다.",
  words: [
    { w: "refrigeration", pos: "명사", mean: "냉장, 냉동 보관",
      ex: "Without refrigeration the milk lasted a single day.",
      ko: "냉장이 없으면 우유는 하루밖에 가지 않았다." },
    { w: "rot", pos: "동사", mean: "썩다, 상하다",
      ex: "The fruit rots within hours in this heat.",
      ko: "이런 더위에서는 과일이 몇 시간 만에 상한다." },
    { w: "fleet", pos: "명사", mean: "선단, 함대",
      ex: "The whole fleet returned empty that winter.",
      ko: "그해 겨울 선단 전체가 빈 배로 돌아왔다." },
    { w: "shaker", pos: "명사", mean: "(소금·후추를 담는) 양념통",
      ex: "The shaker had been refilled that morning.",
      ko: "그 양념통은 그날 아침에 채워져 있었다." }
  ],
  idioms: [
    { w: "keep ~ from -ing", mean: "~이 …하지 못하게 하다",
      ex: "A cold cellar keeps apples from spoiling.",
      ko: "서늘한 지하 저장고는 사과가 상하지 않게 해 준다." },
    { w: "a handful of", mean: "한 줌의, 얼마 안 되는",
      ex: "A handful of villagers refused to move.",
      ko: "얼마 안 되는 마을 사람들이 떠나기를 거부했다." }
  ]
},
{
  id: "h1-025",
  title: "잡초라는 이름",
  passage: "A weed is not a kind of plant. It is a plant growing where somebody does not want it, which means the category moves. The dandelion was carried to North America on purpose, planted in gardens for its leaves and its early flowers, and it became a weed only when lawns grew fashionable and a lawn admits one species. Wheat coming up by itself in a bean field is a weed that week. Gardeners know this and still find it hard to accept, because the word feels like a description of the plant rather than a description of our plans for the ground. The habit is worth noticing beyond the garden. A great deal of what we treat as a property of a thing turns out, on inspection, to be a property of the arrangement we have put it in, and the word hides the difference.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how the idea of a weed depends on us rather than the plant",
        "which plants are hardest to remove from a lawn",
        "why the dandelion was brought to North America",
        "the best way to keep a vegetable garden tidy",
        "how gardeners decide which species to plant"
      ],
      answer: 0,
      explain: "첫 두 문장이 주제를 그대로 적어 두었다. 잡초는 식물의 종류가 아니라 \"누군가 원하지 않는 자리에 자란 식물\"이라는 것이다. 따라서 ①. ③은 예시이고 ②·④·⑤는 지문에 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The dandelion became a weed only when ______.",
      choices: [
        "it stopped being useful as food",
        "it spread faster than gardeners had expected",
        "farmers found a cheaper leaf to grow",
        "lawns grew fashionable and allowed one species",
        "its flowers began to appear later in the year"
      ],
      answer: 3,
      explain: "민들레 자체는 달라지지 않았고, 달라진 것은 잔디밭이 유행하면서 한 종만 받아들이게 된 사정이다. 따라서 ④가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 admits와 의미가 가장 가까운 것은?",
      target: "admits",
      choices: [
        "rejects",
        "allows in",
        "measures",
        "feeds",
        "hides"
      ],
      answer: 1,
      explain: "admit은 \"인정하다\" 말고 \"들이다, 받아들이다\"라는 뜻으로도 쓰인다. 잔디밭이 한 종만 들인다는 맥락이므로 allows in이 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "민들레는 일부러 북아메리카로 옮겨졌다.",
        "민들레는 잎과 이른 꽃 때문에 정원에 심겼다.",
        "콩밭에 저절로 올라온 밀은 그 주에는 잡초다.",
        "글쓴이는 잡초라는 말이 식물보다 우리 계획을 가리킨다고 본다.",
        "잡초는 식물의 한 갈래를 가리키는 이름이다."
      ],
      answer: 4,
      explain: "첫 문장이 \"잡초는 식물의 한 갈래가 아니다\"라고 못 박는다. 따라서 ⑤가 일치하지 않는다."
    }
  ],
  translation: "잡초는 식물의 한 갈래가 아니다. 그것은 누군가 원하지 않는 자리에서 자라는 식물이며, 그래서 그 범주는 움직인다. 민들레는 일부러 북아메리카로 옮겨졌고 잎과 이른 꽃 때문에 정원에 심겼으며, 잔디밭이 유행하고 잔디밭이 한 종만 들이게 되고 나서야 비로소 잡초가 되었다. 콩밭에 저절로 올라온 밀은 그 주에는 잡초다. 정원사들은 이것을 알면서도 받아들이기 어려워하는데, 그 말이 땅에 대한 우리의 계획이 아니라 식물 자체를 설명하는 말처럼 느껴지기 때문이다. 이 버릇은 정원 바깥에서도 눈여겨볼 만하다. 우리가 어떤 사물의 속성이라고 여기는 것 가운데 상당수는, 들여다보면 우리가 그것을 놓아둔 배치의 속성으로 드러나고, 그 낱말이 바로 그 차이를 가린다.",
  words: [
    { w: "category", pos: "명사", mean: "범주, 갈래",
      ex: "The category was invented long after the thing itself.",
      ko: "그 범주는 대상 자체보다 한참 뒤에 만들어졌다." },
    { w: "fashionable", pos: "형용사", mean: "유행하는",
      ex: "Narrow windows were fashionable for about a decade.",
      ko: "좁은 창은 십 년쯤 유행했다." },
    { w: "description", pos: "명사", mean: "설명, 묘사",
      ex: "His description of the room left out the smell.",
      ko: "그 방에 대한 그의 묘사에는 냄새가 빠져 있었다." },
    { w: "inspection", pos: "명사", mean: "살펴봄, 자세히 들여다봄",
      ex: "On inspection the crack ran the whole length.",
      ko: "들여다보니 금이 전체 길이로 나 있었다." }
  ],
  idioms: [
    { w: "on purpose", mean: "일부러, 고의로",
      ex: "She left the door open on purpose.",
      ko: "그녀는 일부러 문을 열어 두었다." },
    { w: "a great deal of", mean: "상당히 많은 ~",
      ex: "A great deal of the work is waiting and watching.",
      ko: "그 일의 상당 부분은 기다리며 지켜보는 것이다." }
  ]
},
{
  id: "h1-026",
  title: "접는 공학",
  passage: "Engineers have begun borrowing from origami, and not as decoration. A sheet that folds along a fixed pattern can be flat and wide when open, small and stiff when closed, and it moves between the two states without hinges, motors or loose parts. The most used pattern was worked out by a Japanese space engineer who wanted a solar panel that a satellite could carry folded and open with one pull. Folding designs of this kind now appear in space telescopes whose mirrors are wider than any rocket, in airbags that must inflate in a set order, and in tubes thin enough to travel inside a blood vessel and then hold an artery open. What makes the method powerful is that the behaviour lives in the crease pattern rather than in the material. Draw the folds correctly and a sheet of almost anything will move the way you intend.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how origami is taught in Japanese schools",
        "why satellites need ever larger solar panels",
        "how folding patterns borrowed from origami solve engineering problems",
        "the materials used in modern space telescopes",
        "why paper is stronger than most people think"
      ],
      answer: 2,
      explain: "글은 접는 무늬가 위성 태양전지판, 우주망원경, 에어백, 혈관 속 관까지 쓰인다는 것을 늘어놓고 그 힘이 어디서 오는지 설명한다. 따라서 주제는 ③. ①·⑤는 지문에 없고 ②·④는 예시의 일부다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The method is powerful because the behaviour of a folded sheet depends on ______.",
      choices: [
        "the pattern of creases rather than the material",
        "the thickness of the paper being used",
        "the number of motors attached to it",
        "how quickly the sheet is opened",
        "the temperature at which it is folded"
      ],
      answer: 0,
      explain: "지문은 \"움직임이 재료가 아니라 접힌 자국의 무늬에 들어 있다\"라고 했고, 바로 뒤에서 거의 어떤 재료의 판이든 된다고 덧붙인다. 따라서 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 stiff와 의미가 가장 가까운 것은?",
      target: "stiff",
      choices: [
        "smooth",
        "heavy",
        "warm",
        "cheap",
        "rigid"
      ],
      answer: 4,
      explain: "stiff는 \"뻣뻣한, 잘 휘지 않는\"이라는 뜻이다. 펼치면 넓고 접으면 작고 단단해진다는 대비이므로 rigid가 가장 가깝다. ② heavy(무거운)와는 다르다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "접힌 판은 펼치면 넓고 접으면 작고 뻣뻣해진다.",
        "가장 많이 쓰이는 무늬는 한 일본 우주 공학자가 고안했다.",
        "에어백은 정해진 순서로 부풀어야 한다.",
        "이 방식이 움직이려면 경첩과 모터가 반드시 있어야 한다.",
        "혈관 속을 지날 만큼 가는 관이 동맥을 열어 두는 데 쓰인다."
      ],
      answer: 3,
      explain: "지문은 경첩도 모터도 헐거운 부품도 없이 두 상태를 오간다고 분명히 적어 두었다. 따라서 ④가 일치하지 않는다."
    }
  ],
  translation: "공학자들이 종이접기에서 빌려 오기 시작했는데, 장식으로 쓰려는 것이 아니다. 정해진 무늬를 따라 접히는 판은 펼치면 평평하고 넓으며 접으면 작고 뻣뻣해지고, 경첩도 모터도 헐거운 부품도 없이 두 상태 사이를 오간다. 가장 많이 쓰이는 무늬는, 위성이 접은 채로 싣고 가서 한 번 잡아당기면 펼쳐지는 태양전지판을 원했던 한 일본 우주 공학자가 고안했다. 이런 식의 접는 설계가 이제는 어떤 로켓보다 거울이 넓은 우주망원경에, 정해진 순서로 부풀어야 하는 에어백에, 그리고 혈관 속을 지날 만큼 가늘면서 동맥을 열어 두는 관에 쓰인다. 이 방식을 강력하게 만드는 것은 그 움직임이 재료가 아니라 접힌 자국의 무늬에 들어 있다는 점이다. 접는 선을 제대로 그리기만 하면 거의 어떤 재료의 판이든 당신이 뜻하는 대로 움직인다.",
  words: [
    { w: "hinge", pos: "명사", mean: "경첩",
      ex: "The gate swung badly because one hinge was loose.",
      ko: "경첩 하나가 헐거워서 그 문은 잘 안 움직였다." },
    { w: "satellite", pos: "명사", mean: "인공위성",
      ex: "The satellite sent its first image after six days.",
      ko: "그 위성은 엿새 만에 첫 영상을 보내왔다." },
    { w: "inflate", pos: "동사", mean: "부풀다, 부풀리다",
      ex: "The raft inflates in under ten seconds.",
      ko: "그 보트는 10초도 안 되어 부풀어 오른다." },
    { w: "crease", pos: "명사", mean: "접힌 자국, 주름",
      ex: "A single crease made the map fold flat.",
      ko: "접힌 자국 하나 덕분에 지도가 납작하게 접혔다." }
  ],
  idioms: [
    { w: "work out", mean: "고안해 내다, 알아내다",
      ex: "It took her a year to work out the right shape.",
      ko: "알맞은 모양을 알아내는 데 그녀는 1년이 걸렸다." },
    { w: "borrow from", mean: "~에서 빌려 오다",
      ex: "Modern design borrows from tools nobody uses now.",
      ko: "현대 디자인은 이제 아무도 쓰지 않는 도구들에서 빌려 온다." }
  ]
},
{
  id: "h1-027",
  title: "함께 쓰는 약",
  passage: "An antibiotic does not make a bacterium weak. It kills the ones it can and leaves the rest, and the rest multiply. Any population of bacteria contains a few individuals that happen to survive a given drug, so every course of treatment is a small selection event, breeding the survivors. This is ordinary evolution, running at a speed we can watch. What turns a natural process into a crisis is scale. Antibiotics are given to farm animals that are not ill, prescribed for infections no drug can touch, and sold without a prescription in much of the world. Each use looks reasonable to whoever makes it and costly to everyone else, because resistance moves between species of bacteria as easily as between hosts. The drugs are a shared resource that behaves like a pasture, and we are grazing it the way pastures have always been grazed.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how the first antibiotics were discovered",
        "which infections are the most dangerous today",
        "why farm animals need more medicine than people",
        "how doctors decide which drug to prescribe",
        "why antibiotic resistance grows and why it is everyone's problem"
      ],
      answer: 4,
      explain: "앞부분은 내성이 생기는 원리를, 뒷부분은 저마다 합리적인 사용이 모두에게 손해가 되는 구조를 설명한다. 두 축을 담은 ⑤가 주제다. ③은 사례일 뿐이고 ①·②·④는 지문에 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Resistance grows because every course of treatment ______.",
      choices: [
        "weakens the patient's own defences",
        "breeds the bacteria that happened to survive it",
        "is shorter than the doctor intended",
        "costs more than the one before it",
        "kills a different species each time"
      ],
      answer: 1,
      explain: "지문은 모든 치료가 \"살아남은 것들을 번식시키는 작은 선택 사건\"이라고 했다. 약은 세균을 약하게 만드는 것이 아니라 못 죽인 것들을 남기는 것이므로 ②가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 pasture와 의미가 가장 가까운 것은?",
      target: "pasture",
      choices: [
        "harvest",
        "market",
        "machine",
        "grazing land",
        "medicine"
      ],
      answer: 3,
      explain: "pasture는 \"가축을 풀어 먹이는 풀밭\"이다. 바로 뒤에 우리가 그것을 \"뜯어 먹고 있다\"는 말이 이어지므로 grazing land가 가장 가깝다. 모두가 함께 쓰는 자원이라는 비유다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "항생제는 세균을 약하게 만들어 죽인다.",
        "살아남은 세균이 번식해 수가 늘어난다.",
        "병에 걸리지 않은 가축에게도 항생제가 쓰인다.",
        "세계 많은 곳에서 처방전 없이 항생제를 살 수 있다.",
        "내성은 세균의 종과 종 사이에서도 옮겨 간다."
      ],
      answer: 0,
      explain: "첫 문장이 \"항생제는 세균을 약하게 만들지 않는다\"라고 못 박는다. 죽일 수 있는 것만 죽이고 나머지를 남길 뿐이므로 ①이 일치하지 않는다."
    }
  ],
  translation: "항생제는 세균을 약하게 만들지 않는다. 죽일 수 있는 것들을 죽이고 나머지는 남겨 두며, 그 나머지가 번식한다. 어떤 세균 집단에도 주어진 약에서 어쩌다 살아남는 개체가 몇은 있기 때문에, 모든 치료 한 차례는 살아남은 것들을 번식시키는 작은 선택 사건이 된다. 이것은 우리가 눈으로 볼 수 있는 속도로 일어나는 평범한 진화다. 자연스러운 과정을 위기로 바꾸는 것은 규모다. 항생제는 아프지도 않은 가축에게 투여되고, 어떤 약도 듣지 않는 감염에 처방되며, 세계의 많은 곳에서 처방전 없이 팔린다. 그 사용 하나하나는 그렇게 하는 사람에게는 합리적으로 보이지만 나머지 모두에게는 비용이 되는데, 내성이 숙주와 숙주 사이로 옮겨 가는 것만큼이나 쉽게 세균의 종과 종 사이로도 옮겨 가기 때문이다. 그 약들은 풀밭처럼 작동하는 공유 자원이고, 우리는 풀밭이 늘 그래 왔던 방식 그대로 그것을 뜯어 먹고 있다.",
  words: [
    { w: "bacterium", pos: "명사", mean: "세균 (복수형 bacteria)",
      ex: "A single bacterium can divide every twenty minutes.",
      ko: "세균 한 마리가 20분마다 분열할 수 있다." },
    { w: "multiply", pos: "동사", mean: "번식하다, 수가 불어나다",
      ex: "Left warm, the cells multiply overnight.",
      ko: "따뜻하게 두면 그 세포들은 하룻밤 사이에 불어난다." },
    { w: "prescription", pos: "명사", mean: "처방, 처방전",
      ex: "The pharmacy refused to sell it without a prescription.",
      ko: "약국은 처방전 없이는 그것을 팔지 않았다." },
    { w: "resistance", pos: "명사", mean: "내성, 저항",
      ex: "Resistance appeared within two years of first use.",
      ko: "내성은 처음 쓴 지 2년 안에 나타났다." }
  ],
  idioms: [
    { w: "turn into", mean: "~을 …으로 바꾸다, ~이 …이 되다",
      ex: "Scale turns a small habit into a public problem.",
      ko: "규모가 작은 습관 하나를 공공의 문제로 바꾼다." },
    { w: "happen to", mean: "어쩌다 ~하다, 우연히 ~하다",
      ex: "The ones that happen to survive are the ones we meet next.",
      ko: "어쩌다 살아남은 것들이 바로 우리가 다음에 마주칠 것들이다." }
  ]
},
{
  id: "h1-028",
  title: "소리를 계산하다",
  passage: "In 1895 a young physicist at Harvard was handed a problem nobody thought was physics. A new lecture hall was unusable: a speaker's words hung in the air so long that each sentence smeared into the next. Wallace Sabine spent nights carrying seat cushions in and out of the room, timing with a stopwatch how long an organ pipe's note took to fade. From hundreds of such nights he drew a single relation between a room's volume, the material on its surfaces and the time a sound lingers. Acoustics stopped being a matter of opinion. Five years later Boston opened a concert hall built from his numbers, the first in history designed to sound a particular way rather than merely hoped to, and it is still ranked among the finest anywhere. The lesson is less about sound than about measurement: a quality everyone could hear became manageable the moment somebody found a way to count it.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why old concert halls sound better than new ones",
        "how measurement made the sound of a room something you can design",
        "the instruments used to test musical pitch",
        "why physics students prefer to work at night",
        "how organs came to be placed in lecture halls"
      ],
      answer: 1,
      explain: "마지막 문장이 주제를 짚어 준다. 이 글은 소리보다 측정에 관한 것이며, 셀 방법을 찾는 순간 다룰 수 있게 되었다고 했다. 따라서 ②. ①은 지문과 어긋나고 ③·④·⑤는 곁가지다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Acoustics stopped being a matter of opinion once Sabine ______.",
      choices: [
        "replaced the seats with softer material",
        "persuaded architects to study physics",
        "found a way to put the quality into numbers",
        "moved the lecture hall to a quieter street",
        "recorded the notes of a church organ"
      ],
      answer: 2,
      explain: "세이빈은 방의 부피, 표면 재질, 소리가 남는 시간 사이의 \"하나의 관계\"를 끌어냈다. 즉 귀로만 알던 것을 숫자로 바꾼 것이므로 ③이 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 lingers와 의미가 가장 가까운 것은?",
      target: "lingers",
      choices: [
        "stays on",
        "grows louder",
        "changes pitch",
        "disappears",
        "repeats"
      ],
      answer: 0,
      explain: "linger는 \"오래 남다, 머물다\"라는 뜻이다. 소리가 사라지기까지 걸리는 시간을 쟀다는 앞 문장과 이어지므로 stays on이 가장 가깝다. ④ disappears는 정반대다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "새 강의실은 말소리가 너무 오래 남아 쓸 수 없었다.",
        "세이빈은 방석을 옮겨 가며 소리가 사라지는 시간을 쟀다.",
        "그는 방의 부피와 표면 재질, 소리가 남는 시간 사이의 관계를 끌어냈다.",
        "보스턴의 공연장은 그의 계산을 바탕으로 지어졌다.",
        "그 공연장은 지은 지 얼마 지나지 않아 평판을 잃었다."
      ],
      answer: 4,
      explain: "지문은 그 공연장이 \"여전히 세계에서 가장 훌륭한 축에 꼽힌다\"라고 했다. 따라서 ⑤가 일치하지 않는다."
    }
  ],
  translation: "1895년, 하버드의 한 젊은 물리학자가 아무도 물리학이라고 여기지 않던 문제를 떠맡았다. 새로 지은 강의실을 쓸 수가 없었던 것이다. 말하는 사람의 말이 공기 중에 너무 오래 매달려서 문장마다 다음 문장으로 번졌다. 월리스 세이빈은 여러 밤을 들여 좌석 방석을 방 안팎으로 나르며, 오르간 파이프의 한 음이 사라지기까지 걸리는 시간을 초시계로 쟀다. 그런 수백 번의 밤에서 그는 방의 부피와 표면의 재질, 그리고 소리가 남아 있는 시간 사이의 하나의 관계를 끌어냈다. 음향은 더 이상 취향의 문제가 아니게 되었다. 5년 뒤 보스턴은 그의 숫자를 바탕으로 지은 공연장을 열었는데, 그저 그렇게 되기를 바란 것이 아니라 특정한 소리가 나도록 설계된 역사상 최초의 공연장이었고, 지금도 세계에서 가장 훌륭한 축에 꼽힌다. 이 이야기의 교훈은 소리보다 측정에 관한 것이다. 모두가 귀로 듣던 성질이, 누군가 그것을 셀 방법을 찾아낸 바로 그 순간 다룰 수 있는 것이 되었다.",
  words: [
    { w: "acoustics", pos: "명사", mean: "음향, 음향학",
      ex: "The acoustics of the old church surprised everyone.",
      ko: "그 오래된 교회의 음향은 모두를 놀라게 했다." },
    { w: "fade", pos: "동사", mean: "잦아들다, 희미해지다",
      ex: "The last note faded before anyone clapped.",
      ko: "마지막 음이 잦아든 뒤에야 누군가 박수를 쳤다." },
    { w: "relation", pos: "명사", mean: "(수학적) 관계, 상관관계",
      ex: "He found a simple relation between the two numbers.",
      ko: "그는 두 수 사이의 단순한 관계를 찾아냈다." },
    { w: "manageable", pos: "형용사", mean: "다룰 수 있는, 감당할 만한",
      ex: "Broken into weeks, the task became manageable.",
      ko: "주 단위로 쪼개니 그 일은 감당할 만해졌다." }
  ],
  idioms: [
    { w: "rank among", mean: "~ 가운데 꼽히다",
      ex: "The bridge ranks among the oldest still in use.",
      ko: "그 다리는 아직 쓰이는 것들 가운데 가장 오래된 축에 꼽힌다." },
    { w: "in and out of", mean: "~에 넣었다 뺐다 하며, ~을 드나들며",
      ex: "He moved the boxes in and out of the van all afternoon.",
      ko: "그는 오후 내내 상자를 승합차에 넣었다 뺐다 했다." }
  ]
},
{
  id: "h1-029",
  title: "먼저 알아차린 사람",
  passage: "Long before vaccines, people in China, the Ottoman empire and West Africa practised a dangerous kind of protection: they took a little matter from a smallpox sore and worked it into a scratch on a healthy person. Most who were treated this way caught a mild case and were safe for life. A few died. The practice reached England in the 1720s and was used, cautiously, for seventy years. What Edward Jenner added in 1796 was not the idea of deliberate exposure but a safer source for it. Country people had long said that milkmaids who caught cowpox never caught smallpox, and Jenner tested the claim, published it, and gave the method a name from the Latin word for cow. He was not the first to notice. He was the first to make the observation travel, which is a different kind of achievement and often the rarer one.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how smallpox spread through eighteenth-century Europe",
        "why cows matter to modern medicine",
        "the dangers of treating illness without a doctor",
        "what Jenner actually added to a much older practice",
        "how Latin words entered the language of science"
      ],
      answer: 3,
      explain: "글은 제너 이전에도 일부러 감염시키는 방법이 있었음을 길게 설명한 뒤, 그가 더한 것은 \"더 안전한 재료와, 그것을 퍼뜨린 일\"이라고 정리한다. 따라서 주제는 ④."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Jenner's contribution was not the idea of deliberate exposure but ______.",
      choices: [
        "a cure for those who were already ill",
        "a way of keeping the practice secret",
        "the first use of a Latin name in medicine",
        "a law requiring everyone to be treated",
        "a safer source for it, tested and published"
      ],
      answer: 4,
      explain: "지문이 \"not the idea of deliberate exposure but a safer source for it\"이라고 직접 밝히고, 이어서 그가 시험하고 발표했다고 덧붙인다. 따라서 ⑤가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 deliberate와 의미가 가장 가까운 것은?",
      target: "deliberate",
      choices: [
        "sudden",
        "repeated",
        "intentional",
        "harmless",
        "secret"
      ],
      answer: 2,
      explain: "deliberate는 \"의도적인, 일부러 하는\"이라는 뜻이다. 일부러 병에 노출시키는 방법을 가리키므로 intentional이 가장 가깝다. ④ harmless(해롭지 않은)는 오히려 지문과 어긋난다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "천연두 고름을 긁힌 상처에 넣는 방법이 제너 이전부터 있었다.",
        "그 옛 방법으로 치료받은 사람 가운데 죽은 사람은 없었다.",
        "그 방법은 1720년대에 잉글랜드에 들어왔다.",
        "시골 사람들은 우두를 앓은 소젖 짜는 여인이 천연두에 걸리지 않는다고 말해 왔다.",
        "제너는 그 이야기를 시험해 보고 발표했다."
      ],
      answer: 1,
      explain: "지문에 A few died(몇몇은 죽었다)라고 짧게, 그러나 분명히 적혀 있다. 따라서 ②가 일치하지 않는다."
    }
  ],
  translation: "백신이 있기 훨씬 전에, 중국과 오스만 제국과 서아프리카 사람들은 위험한 방식의 예방법을 쓰고 있었다. 천연두 종기에서 조금 떼어 낸 것을 건강한 사람의 긁힌 상처에 밀어 넣는 것이었다. 이렇게 처치받은 사람들 대부분은 가볍게 앓고 평생 안전해졌다. 몇몇은 죽었다. 이 방법은 1720년대에 잉글랜드에 들어와 조심스럽게 70년 동안 쓰였다. 1796년에 에드워드 제너가 더한 것은 일부러 노출시킨다는 발상이 아니라, 그 발상을 위한 더 안전한 재료였다. 시골 사람들은 우두를 앓은 소젖 짜는 여인들은 천연두에 걸리지 않는다고 오래전부터 말해 왔는데, 제너는 그 이야기를 시험하고 발표했으며, 그 방법에 소를 뜻하는 라틴어에서 따온 이름을 붙였다. 그는 그것을 처음 알아차린 사람이 아니었다. 그는 그 관찰이 퍼져 나가게 만든 첫 사람이었고, 그것은 다른 종류의 업적이며 흔히 더 드문 쪽이다.",
  words: [
    { w: "smallpox", pos: "명사", mean: "천연두",
      ex: "Smallpox was declared gone from the world in 1980.",
      ko: "천연두는 1980년에 세상에서 사라졌다고 선언되었다." },
    { w: "scratch", pos: "명사", mean: "긁힌 자국, 생채기",
      ex: "A scratch on his arm was the only mark.",
      ko: "팔에 난 긁힌 자국 하나가 유일한 흔적이었다." },
    { w: "mild", pos: "형용사", mean: "가벼운, 심하지 않은",
      ex: "She had a mild fever for two days.",
      ko: "그녀는 이틀 동안 가벼운 열이 있었다." },
    { w: "achievement", pos: "명사", mean: "업적, 이뤄 낸 일",
      ex: "Finishing was an achievement in itself that year.",
      ko: "그해에는 완주하는 것 자체가 하나의 업적이었다." }
  ],
  idioms: [
    { w: "work into", mean: "~ 안으로 밀어 넣다, 비벼 넣다",
      ex: "He worked the oil into the dry wood.",
      ko: "그는 마른 나무에 기름을 비벼 넣었다." },
    { w: "long before", mean: "~보다 훨씬 전에",
      ex: "The road existed long before the town did.",
      ko: "그 길은 마을보다 훨씬 전부터 있었다." }
  ]
},
{
  id: "h1-030",
  title: "사막의 모래",
  passage: "The world is running short of sand, which sounds absurd on a planet with deserts the size of continents. Concrete, though, cannot use desert sand. Grains blown by wind for thousands of years are rubbed round and smooth, and round grains slide past one another instead of locking together, so the mixture never sets into anything you would stand under. What concrete needs is the angular sand that water makes, dragged along riverbeds and coastlines where grains break rather than polish. That sand is limited, slow to form and gathered in exactly the places people already live. Rivers have been dug out until bridges lost their footings, and some cities now import sand across oceans while dunes sit unused an hour's drive away. The shortage is a useful reminder that a resource is never just a substance. It is a substance in a particular shape, in a particular place.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why a world full of deserts can still run short of sand",
        "how concrete is mixed on a building site",
        "the damage caused by building too many bridges",
        "how deserts were formed over thousands of years",
        "which countries export the most building material"
      ],
      answer: 0,
      explain: "글은 사막이 널렸는데도 모래가 모자란다는 역설에서 출발해 그 이유를 설명하고, 자원이란 \"특정한 모양으로 특정한 자리에 있는 물질\"이라고 맺는다. 따라서 주제는 ①."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Desert sand is useless for concrete because its grains ______.",
      choices: [
        "contain too much salt from the sea air",
        "are far smaller than river grains",
        "hold water instead of releasing it",
        "are too round to lock together",
        "were formed much more recently"
      ],
      answer: 3,
      explain: "바람에 오래 깎인 알갱이는 둥글고 매끄러워져서 서로 맞물리지 않고 미끄러진다고 했다. 따라서 ④가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 angular와 의미가 가장 가까운 것은?",
      target: "angular",
      choices: [
        "damp",
        "sharp-edged",
        "pale",
        "heavy",
        "rare"
      ],
      answer: 1,
      explain: "angular는 \"모난, 각진\"이라는 뜻이다. 물이 만든 모래는 깎여 둥글어지는 대신 부서진다고 했으니 sharp-edged가 가장 가깝다. 둥근 사막 모래와 정반대다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "바람에 깎인 모래알은 둥글고 매끄럽다.",
        "콘크리트에는 물이 만들어 낸 모래가 필요하다.",
        "사막 모래는 값이 너무 비싸서 쓰이지 않는다.",
        "강을 파내다가 다리가 기초를 잃기도 했다.",
        "어떤 도시들은 바다 건너에서 모래를 들여온다."
      ],
      answer: 2,
      explain: "사막 모래를 못 쓰는 이유는 값이 아니라 알갱이의 모양이다. 지문에 값 이야기는 나오지 않으므로 ③이 일치하지 않는다."
    }
  ],
  translation: "세계는 모래가 모자라 가고 있는데, 대륙만 한 사막이 있는 행성에서 이 말은 터무니없게 들린다. 그러나 콘크리트는 사막 모래를 쓸 수 없다. 수천 년 동안 바람에 날린 알갱이는 문질러져 둥글고 매끄러워지는데, 둥근 알갱이는 서로 맞물리지 않고 미끄러져 지나가기 때문에 그 반죽은 사람이 그 아래 서 있을 만한 무언가로 굳지 않는다. 콘크리트에 필요한 것은 물이 만들어 내는 모난 모래, 곧 알갱이가 닳기보다 부서지는 강바닥과 해안을 따라 끌려다닌 모래다. 그 모래는 한정되어 있고, 만들어지는 데 오래 걸리며, 하필 사람들이 이미 사는 바로 그곳에 모여 있다. 다리가 기초를 잃을 때까지 강을 파낸 일도 있었고, 어떤 도시들은 차로 한 시간 거리에 모래언덕을 놀려 둔 채 바다 건너에서 모래를 들여온다. 이 부족은 자원이란 결코 물질 그 자체가 아님을 일깨워 준다. 자원은 특정한 모양으로, 특정한 자리에 있는 물질이다.",
  words: [
    { w: "concrete", pos: "명사", mean: "콘크리트",
      ex: "The concrete took a week to harden fully.",
      ko: "그 콘크리트는 완전히 굳는 데 일주일이 걸렸다." },
    { w: "grain", pos: "명사", mean: "알갱이, 낟알",
      ex: "Each grain is smaller than a grain of salt.",
      ko: "알갱이 하나하나가 소금 알갱이보다 작다." },
    { w: "polish", pos: "동사", mean: "닳아 매끄러워지다, 윤을 내다",
      ex: "Years of hands had polished the railing smooth.",
      ko: "여러 해 동안 손을 탄 난간이 반들반들하게 닳아 있었다." },
    { w: "footing", pos: "명사", mean: "(건축물의) 기초, 발판",
      ex: "The tower lost its footing in the soft ground.",
      ko: "그 탑은 무른 땅에서 기초를 잃었다." }
  ],
  idioms: [
    { w: "run short of", mean: "~이 모자라게 되다",
      ex: "The kitchen ran short of flour by Friday.",
      ko: "그 주방은 금요일이 되자 밀가루가 모자랐다." },
    { w: "lock together", mean: "서로 맞물리다",
      ex: "The bricks lock together without any glue.",
      ko: "그 벽돌들은 접착제 없이도 서로 맞물린다." }
  ]
}
);

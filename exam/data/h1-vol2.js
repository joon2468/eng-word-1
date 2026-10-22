/* 고1 Vol.2 — h1.js의 배열 뒤에 이어 붙인다. 모두 창작 지문입니다.
   형식과 규칙은 exam/data/h1.js 머리말 그대로입니다.
   반드시 뒤에 붙일 것 — 중간에 끼우면 이미 푼 지문의 번호가 밀린다. */

EXAM_SETS_H1.push(
{
  id: "h1-011",
  title: "페니 대학",
  passage: "In seventeenth-century London, a penny bought a cup of coffee and, with it, a seat at a table where anyone might speak. These coffeehouses gathered merchants, sailors, poets and scientists into the same room, and the mixing was the point. A man who paid his penny was expected to join whatever conversation he found, regardless of the rank of the person beside him. Newspapers were read aloud for those who could not read them. Londoners called the places penny universities, and the name was only half a joke: the shipping notices exchanged in one coffeehouse later became an insurance market, and the arguments in another helped shape a scientific society. What made them powerful was not the coffee. It was a rule, rarely written down but widely kept, that status stopped at the door. Taverns served drink to people who already knew each other; coffeehouses served conversation to people who did not.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the economic reasons coffee replaced beer in England",
        "how newspapers were first printed and sold in cities",
        "why London coffeehouses mattered beyond the drink they sold",
        "the difficulty of starting a business in old London",
        "the part sailors played in carrying news between ports"
      ],
      answer: 2,
      explain: "글은 커피하우스의 힘이 커피가 아니라 \"신분은 문 앞에서 멈춘다\"는 규칙에서 나왔고, 그 덕에 보험 시장과 과학 단체까지 자라났다고 말한다. 따라서 주제는 ③. ①은 맥주와 커피의 경제, ②는 신문 인쇄, ④는 창업의 어려움, ⑤는 선원의 역할로 모두 글의 중심이 아니다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "What gave the coffeehouses their power was not the coffee but a widely kept rule that ______.",
      choices: [
        "only educated men were allowed to speak",
        "every customer had to buy more than one cup",
        "news could be discussed but never written down",
        "each table belonged to a single trade",
        "a person's rank counted for nothing inside"
      ],
      answer: 4,
      explain: "빈칸 문장은 지문의 \"status stopped at the door(신분은 문 앞에서 멈췄다)\"를 바꿔 쓴 것이다. 옆자리 사람의 신분과 상관없이 대화에 끼는 것이 당연했다고 했으므로 ⑤가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 rank와 의미가 가장 가까운 것은?",
      target: "rank",
      choices: [
        "age",
        "social position",
        "accent",
        "income",
        "duty"
      ],
      answer: 1,
      explain: "rank는 \"지위, 신분\"이라는 뜻이다. 뒤에 나오는 status(신분)와 같은 것을 가리키므로 social position이 가장 가깝다. ④ income(수입)은 신분과 겹치는 데가 있지만 지문이 말하는 것은 돈이 아니라 자리다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "글을 읽지 못하는 사람들을 위해 신문을 소리 내어 읽어 주었다.",
        "한 커피하우스에서 오가던 해운 정보는 뒤에 보험 시장이 되었다.",
        "런던 사람들은 그곳을 \"페니 대학\"이라고 불렀다.",
        "선술집은 서로 모르는 사람들에게 대화를 팔았다.",
        "값을 치른 사람은 옆자리의 신분과 상관없이 대화에 끼는 것이 당연했다."
      ],
      answer: 3,
      explain: "마지막 문장이 정반대다. 선술집은 \"이미 서로 아는 사람들\"에게 술을 팔았고, 모르는 사람들에게 대화를 판 쪽은 커피하우스다. 따라서 ④가 일치하지 않는다."
    }
  ],
  translation: "17세기 런던에서는 1페니로 커피 한 잔과, 그와 함께 누구든 말할 수 있는 탁자의 자리 하나를 살 수 있었다. 이 커피하우스들은 상인과 선원, 시인과 과학자를 같은 방으로 불러 모았고, 그렇게 섞이는 것이 바로 핵심이었다. 1페니를 낸 사람은 옆자리에 앉은 사람의 신분과 상관없이 마주친 대화에 끼는 것이 당연하게 여겨졌다. 신문은 글을 읽지 못하는 사람들을 위해 소리 내어 읽혔다. 런던 사람들은 그곳을 \"페니 대학\"이라 불렀는데, 그 이름은 절반만 농담이었다. 한 커피하우스에서 오가던 해운 정보는 뒤에 보험 시장이 되었고, 다른 곳에서 벌어진 논쟁은 한 과학 단체를 만드는 데 보탬이 되었다. 그곳들을 강력하게 만든 것은 커피가 아니었다. 그것은 좀처럼 글로 적히지 않았지만 널리 지켜진 하나의 규칙, 곧 신분은 문 앞에서 멈춘다는 규칙이었다. 선술집은 이미 서로 아는 사람들에게 술을 팔았고, 커피하우스는 서로 모르는 사람들에게 대화를 팔았다.",
  words: [
    { w: "merchant", pos: "명사", mean: "상인",
      ex: "The merchant kept a shop near the harbour.",
      ko: "그 상인은 항구 근처에 가게를 두고 있었다." },
    { w: "tavern", pos: "명사", mean: "선술집, 주점",
      ex: "They argued in the tavern until the candles burned out.",
      ko: "그들은 촛불이 다 탈 때까지 선술집에서 논쟁했다." },
    { w: "notice", pos: "명사", mean: "공고, 알림",
      ex: "A notice on the door listed the ships leaving that week.",
      ko: "문에 붙은 공고가 그 주에 떠나는 배들을 적어 두고 있었다." },
    { w: "shape", pos: "동사", mean: "형성하다, 만들어 내다",
      ex: "A few conversations shaped the whole project.",
      ko: "몇 번의 대화가 그 계획 전체를 만들어 냈다." }
  ],
  idioms: [
    { w: "regardless of", mean: "~에 상관없이",
      ex: "Anyone could speak, regardless of how little they owned.",
      ko: "가진 것이 얼마나 적든 상관없이 누구나 말할 수 있었다." },
    { w: "read aloud", mean: "소리 내어 읽다",
      ex: "He read the letter aloud so that everyone could hear.",
      ko: "그는 모두가 들을 수 있도록 편지를 소리 내어 읽었다." }
  ]
},
{
  id: "h1-012",
  title: "길을 넓히면 차가 는다",
  passage: "When a city highway jams every morning, the obvious answer is to add a lane. Traffic engineers have been testing that answer for decades, and the results are consistent: the new lane fills up. Within a few years the commute is as slow as before, sometimes slower. The reason is that road space is not a fixed demand waiting to be served but a price being set. A faster road tempts drivers who used to leave earlier, take a quieter route, or ride the bus; it also tempts people to move further out, since the drive no longer seems long. Each of those decisions puts another car on the lane that was built to relieve them. Economists call this induced demand. The uncomfortable implication is that a city cannot build its way out of congestion, and that the measures which actually shorten commutes, such as charging for road space and running better buses, are the ones drivers resist most.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how engineers measure the speed of traffic",
        "the environmental cost of building new highways",
        "why buses are cheaper to run than trains",
        "the history of city planning in the last century",
        "why adding lanes fails to cure traffic congestion"
      ],
      answer: 4,
      explain: "글은 차로를 더해도 금세 다시 막힌다는 관찰에서 시작해 그 이유(유발 수요)를 설명하고, 건설만으로는 정체에서 벗어날 수 없다고 못 박는다. 따라서 주제는 ⑤. ②와 ③은 지문에 없고, ①과 ④도 중심이 아니다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "A new lane fills up because a faster road ______.",
      choices: [
        "is more expensive for the city to maintain",
        "draws in drivers who had been travelling another way",
        "wears out sooner than the old surface",
        "is harder for buses to share",
        "forces engineers to redraw the whole network"
      ],
      answer: 1,
      explain: "지문은 빨라진 도로가 일찍 떠나던 사람, 다른 길로 가던 사람, 버스를 타던 사람을 끌어들이고 더 멀리 이사까지 부추긴다고 했다. 즉 다른 방식으로 다니던 사람들이 몰려오는 것이므로 ②가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 relieve와 의미가 가장 가까운 것은?",
      target: "relieve",
      choices: [
        "measure",
        "widen",
        "replace",
        "ease",
        "delay"
      ],
      answer: 3,
      explain: "relieve는 \"덜어 주다, 완화하다\"라는 뜻이다. 정체를 덜어 주려고 만든 차로라는 맥락이므로 ease가 가장 가깝다. ② widen(넓히다)은 그 차로를 만드는 방법이지 relieve의 뜻이 아니다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "새 차로를 더하면 통근 시간이 몇 년에 걸쳐 꾸준히 짧아진다.",
        "빨라진 도로는 사람들이 더 멀리 이사하도록 부추기기도 한다.",
        "경제학자들은 이 현상을 유발 수요라고 부른다.",
        "글쓴이는 도시가 건설만으로 정체에서 벗어날 수 없다고 본다.",
        "통근 시간을 실제로 줄이는 대책들은 운전자들이 가장 반대하는 것들이다."
      ],
      answer: 0,
      explain: "지문은 몇 해 안에 통근이 예전만큼 느려지고 때로는 더 느려진다고 했다. 꾸준히 짧아진다는 ①이 정반대다."
    }
  ],
  translation: "도시의 고속도로가 아침마다 막히면, 뻔한 답은 차로를 하나 더 만드는 것이다. 교통 공학자들은 수십 년 동안 그 답을 시험해 왔고 결과는 한결같다. 새 차로는 가득 찬다. 몇 해 안에 통근 시간은 예전만큼 느려지고, 때로는 더 느려진다. 이유는 도로 공간이 채워 주기만 하면 되는 고정된 수요가 아니라, 하나의 가격이기 때문이다. 빨라진 도로는 예전에는 더 일찍 나서거나, 한산한 길로 돌아가거나, 버스를 타던 운전자들을 끌어들인다. 또 운전이 더는 길게 느껴지지 않으니 사람들이 더 멀리 이사하도록 부추기기도 한다. 그 결정 하나하나가, 바로 그 부담을 덜어 주려고 만든 차로 위에 차를 한 대씩 더 올려놓는다. 경제학자들은 이것을 유발 수요라고 부른다. 불편한 결론은, 도시가 건설만으로는 정체에서 벗어날 수 없다는 것, 그리고 통근 시간을 실제로 줄여 주는 대책들, 이를테면 도로 공간에 요금을 매기는 일이나 버스를 더 잘 굴리는 일이야말로 운전자들이 가장 반대하는 것들이라는 점이다.",
  words: [
    { w: "commute", pos: "명사", mean: "통근, 통근길",
      ex: "His commute takes fifty minutes each way.",
      ko: "그의 통근길은 편도로 50분이 걸린다." },
    { w: "tempt", pos: "동사", mean: "부추기다, ~하고 싶게 만들다",
      ex: "Cheap parking tempts people to drive downtown.",
      ko: "싼 주차비는 사람들이 시내까지 차를 몰고 오게 부추긴다." },
    { w: "congestion", pos: "명사", mean: "(교통) 정체, 혼잡",
      ex: "Congestion gets worse every September.",
      ko: "교통 정체는 해마다 9월이면 더 나빠진다." },
    { w: "implication", pos: "명사", mean: "함의, 뒤따르는 결론",
      ex: "The implication of the data was hard to accept.",
      ko: "그 자료가 뜻하는 결론은 받아들이기 어려웠다." }
  ],
  idioms: [
    { w: "fill up", mean: "가득 차다",
      ex: "The car park fills up before nine every weekday.",
      ko: "그 주차장은 평일마다 아홉 시 전에 가득 찬다." },
    { w: "used to", mean: "예전에는 ~했다 (지금은 아니다)",
      ex: "She used to take the bus before the new road opened.",
      ko: "그녀는 새 도로가 뚫리기 전에는 버스를 탔다." }
  ]
},
{
  id: "h1-013",
  title: "손으로 쓰는 필기",
  passage: "Students who take notes on a laptop record more words than students writing by hand, and for a long time that looked like an advantage. Then researchers began testing what the two groups actually understood. On questions asking for facts, the groups scored about the same. On questions asking students to explain ideas, the handwriting group did clearly better, and they had written less. The explanation is speed. A keyboard is fast enough to let a student transcribe a lecture without thinking about it, while a pen forces constant choices about what deserves the next line. Those choices are a first pass at understanding, made while the material is still arriving. The finding is not an argument against keyboards, which are faster, searchable and kinder to the wrist. It is a reminder that a tool shapes the work done with it, and that the slower tool is sometimes doing something the faster one skips.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how lecture halls should be arranged for note-taking",
        "why writing notes by hand can deepen understanding",
        "the health problems caused by long typing sessions",
        "which subjects are best learned without any notes",
        "how students can be trained to type more accurately"
      ],
      answer: 1,
      explain: "글은 손으로 쓴 집단이 적게 쓰고도 설명 문제에서 더 나았다는 실험을 들고, 그 이유를 \"펜이 무엇을 쓸지 고르게 만들기 때문\"이라고 설명한다. 따라서 주제는 ②. ③은 지나가듯 언급된 손목 이야기뿐이고 ①·④·⑤는 지문에 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Writing by hand helps understanding because a pen forces a student to ______.",
      choices: [
        "copy the lecture word for word",
        "review the material a second time",
        "sit closer to the speaker",
        "decide what is worth writing down",
        "memorize the facts before the class ends"
      ],
      answer: 3,
      explain: "지문은 펜이 \"다음 줄에 무엇이 들어갈 자격이 있는지\"를 끊임없이 고르게 만들고, 그 선택이 곧 첫 번째 이해라고 했다. 따라서 ④가 적절하다. ①은 오히려 키보드 쪽 이야기다."
    },
    {
      type: "vocab",
      prompt: "윗글의 transcribe와 의미가 가장 가까운 것은?",
      target: "transcribe",
      choices: [
        "shorten",
        "translate",
        "question",
        "illustrate",
        "copy down"
      ],
      answer: 4,
      explain: "transcribe는 \"들은 대로 받아 적다\"라는 뜻이다. 생각하지 않고도 강의를 그대로 옮겨 적을 만큼 키보드가 빠르다는 맥락이므로 copy down이 가장 가깝다. ② translate(번역하다)와는 다르다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "노트북으로 필기한 학생들이 손으로 쓴 학생들보다 더 많은 단어를 적었다.",
        "사실을 묻는 문제에서는 두 집단의 점수가 비슷했다.",
        "손으로 쓴 학생들은 더 많이 적었고 설명 문제에서도 더 잘했다.",
        "글쓴이는 이 결과가 키보드를 반대하는 근거는 아니라고 말한다.",
        "키보드는 더 빠르고 검색하기 쉬우며 손목에도 덜 부담이 된다."
      ],
      answer: 2,
      explain: "손으로 쓴 집단은 더 적게 썼는데도(they had written less) 설명 문제에서 더 나았다는 것이 이 글의 핵심이다. 더 많이 적었다는 ③이 일치하지 않는다."
    }
  ],
  translation: "노트북으로 필기하는 학생은 손으로 쓰는 학생보다 더 많은 단어를 적고, 오랫동안 그것은 장점으로 보였다. 그러다 연구자들이 두 집단이 실제로 무엇을 이해했는지를 시험해 보기 시작했다. 사실을 묻는 문제에서는 두 집단의 점수가 비슷했다. 생각을 설명하라는 문제에서는 손으로 쓴 집단이 분명히 더 나았는데, 그들은 더 적게 썼다. 설명은 속도에 있다. 키보드는 학생이 생각하지 않고도 강의를 받아 적을 만큼 빠르지만, 펜은 다음 줄에 무엇이 들어갈 자격이 있는지를 끊임없이 고르게 만든다. 그 선택들이야말로 자료가 아직 도착하는 중에 이루어지는, 이해를 향한 첫 번째 손질이다. 이 발견은 키보드를 반대하는 근거가 아니다. 키보드는 더 빠르고, 검색할 수 있고, 손목에도 덜 부담이 된다. 이것은 도구가 그것으로 하는 일의 모양을 바꾼다는 것, 그리고 느린 도구가 때로는 빠른 도구가 건너뛰는 무언가를 하고 있다는 것을 일깨워 줄 뿐이다.",
  words: [
    { w: "lecture", pos: "명사", mean: "강의",
      ex: "The lecture ran twenty minutes over.",
      ko: "그 강의는 20분을 넘겨 진행되었다." },
    { w: "constant", pos: "형용사", mean: "끊임없는, 계속되는",
      ex: "Learning a language takes constant practice.",
      ko: "언어를 배우는 데는 끊임없는 연습이 필요하다." },
    { w: "deserve", pos: "동사", mean: "~할 만하다, ~을 받을 자격이 있다",
      ex: "Only a few of these sentences deserve a second reading.",
      ko: "이 문장들 가운데 다시 읽을 만한 것은 몇 개뿐이다." },
    { w: "reminder", pos: "명사", mean: "일깨워 주는 것, 상기시키는 것",
      ex: "The scar was a reminder of a careless afternoon.",
      ko: "그 흉터는 부주의했던 어느 오후를 일깨워 주는 것이었다." }
  ],
  idioms: [
    { w: "take notes", mean: "필기하다, 메모하다",
      ex: "He takes notes even when the slides are shared.",
      ko: "그는 자료가 공유될 때도 필기를 한다." },
    { w: "argument against", mean: "~에 반대하는 근거",
      ex: "None of this is an argument against using a computer.",
      ko: "이 가운데 어느 것도 컴퓨터를 쓰지 말라는 근거는 아니다." }
  ]
},
{
  id: "h1-014",
  title: "강철 상자 하나",
  passage: "Before 1956, loading a ship was slow and dangerous work. Cargo arrived in barrels, sacks and crates of every size, and gangs of dockworkers packed it by hand, a process that could keep a vessel in port for a week. Then a trucking owner named Malcom McLean asked a simple question: why unload the truck at all? His answer was a steel box of a fixed size that could be lifted straight from a chassis onto a deck. The box itself was not clever. What mattered was that everyone agreed on its dimensions, so that a crane in Rotterdam could handle a container packed in Busan. The cost of loading a ship fell by more than ninety percent, and goods that had never travelled began to cross oceans. Whole industries moved. The lesson is easy to miss, because the invention looks like nothing: the value lay not in the object but in the agreement about it.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the dangers faced by dockworkers in the 1950s",
        "why steel replaced wood in cargo handling",
        "how trucking companies grew into shipping firms",
        "how a shared standard, not a clever object, remade shipping",
        "the reasons port cities declined in the last century"
      ],
      answer: 3,
      explain: "마지막 문장이 곧 답이다. \"가치는 물건이 아니라 그것에 대한 합의에 있었다\"라고 했으므로 ④가 주제다. ①은 배경 설명이고 ②·③·⑤는 글의 중심이 아니다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The container remade shipping because everyone ______.",
      choices: [
        "accepted the same measurements for the box",
        "began building larger and faster vessels",
        "hired fewer workers to load each ship",
        "started shipping goods in smaller amounts",
        "agreed to lower the price of steel"
      ],
      answer: 0,
      explain: "지문은 \"상자 자체는 영리하지 않았다. 중요한 것은 모두가 그 치수에 합의했다는 점이다\"라고 했다. 부산에서 실은 것을 로테르담의 크레인이 다룰 수 있었던 이유도 그것이므로 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 dimensions와 의미가 가장 가까운 것은?",
      target: "dimensions",
      choices: [
        "weights",
        "materials",
        "measurements",
        "contents",
        "costs"
      ],
      answer: 2,
      explain: "dimensions는 \"치수, 크기\"라는 뜻이다. 정해진 크기(a fixed size)의 상자라는 앞 문장과 이어지므로 measurements가 가장 가깝다. ④ contents(내용물)는 오히려 상자마다 다른 쪽이다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "1956년 이전에는 배 한 척이 일주일씩 항구에 묶여 있기도 했다.",
        "맥린은 트럭의 짐을 내리지 않는 방법을 떠올렸다.",
        "배에 짐을 싣는 비용은 90퍼센트가 넘게 떨어졌다.",
        "부산에서 실은 컨테이너를 로테르담의 크레인이 다룰 수 있었다.",
        "강철 상자 자체가 기술적으로 뛰어났다는 점이 변화의 핵심이었다."
      ],
      answer: 4,
      explain: "지문은 \"그 상자 자체는 영리하지 않았다\"라고 분명히 말하고, 가치는 물건이 아니라 합의에 있었다고 끝맺는다. 따라서 ⑤가 일치하지 않는다."
    }
  ],
  translation: "1956년 이전에 배에 짐을 싣는 일은 느리고 위험했다. 화물은 온갖 크기의 통과 자루와 나무 상자에 담겨 도착했고, 부두 노동자 무리가 그것을 손으로 쌓았는데, 그 과정 때문에 배 한 척이 일주일씩 항구에 묶여 있기도 했다. 그때 맬컴 맥린이라는 트럭 회사 주인이 단순한 질문을 던졌다. 애초에 트럭에서 짐을 왜 내리는가? 그의 답은 섀시에서 갑판으로 곧바로 들어 올릴 수 있는, 정해진 크기의 강철 상자였다. 그 상자 자체는 영리하지 않았다. 중요한 것은 모두가 그 치수에 합의했다는 점, 그래서 부산에서 실은 컨테이너를 로테르담의 크레인이 다룰 수 있었다는 점이다. 배에 짐을 싣는 비용은 90퍼센트 넘게 떨어졌고, 한 번도 바다를 건넌 적 없던 물건들이 대양을 오가기 시작했다. 산업 전체가 옮겨 다녔다. 발명이 아무것도 아닌 것처럼 보이기 때문에 이 교훈은 놓치기 쉽다. 가치는 그 물건이 아니라 그것에 대한 합의에 있었다.",
  words: [
    { w: "cargo", pos: "명사", mean: "화물",
      ex: "The cargo was checked twice before loading.",
      ko: "그 화물은 싣기 전에 두 번 점검되었다." },
    { w: "vessel", pos: "명사", mean: "선박, 배",
      ex: "Three vessels were waiting outside the harbour.",
      ko: "배 세 척이 항구 밖에서 기다리고 있었다." },
    { w: "crate", pos: "명사", mean: "(나무로 된) 운반용 상자",
      ex: "The apples travelled in wooden crates.",
      ko: "그 사과들은 나무 상자에 담겨 옮겨졌다." },
    { w: "agreement", pos: "명사", mean: "합의, 약속",
      ex: "The agreement was never written down, and it held for years.",
      ko: "그 합의는 끝내 글로 적히지 않았지만 여러 해 동안 지켜졌다." }
  ],
  idioms: [
    { w: "by hand", mean: "손으로, 기계를 쓰지 않고",
      ex: "Every label was still attached by hand.",
      ko: "상표는 여전히 하나하나 손으로 붙여졌다." },
    { w: "not A but B", mean: "A가 아니라 B",
      ex: "The problem was not the machine but the rule behind it.",
      ko: "문제는 기계가 아니라 그 뒤에 있는 규칙이었다." }
  ]
},
{
  id: "h1-015",
  title: "혀의 지도",
  passage: "Most of us learned that the tongue is divided into zones: sweet at the tip, bitter at the back, sour and salty along the sides. The diagram appears in textbooks all over the world, and it is wrong. It began as a German study from 1901 that merely noted slight differences in sensitivity across the tongue. An American textbook redrew those small differences as sharp borders, and a tidy picture is hard to kill. In fact every taste bud responds to every basic taste, and a drop of sugar placed at the back of the tongue tastes perfectly sweet. Anyone can test this in a kitchen in about a minute, which is the strange part. The map survived not because it resisted checking but because nobody bothered. A claim that is simple, useful-looking and printed in a textbook rarely gets the one minute that would overturn it.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why a false diagram of the tongue has lasted so long",
        "how the sense of taste changes as people grow older",
        "how often science textbooks are rewritten",
        "which foods work best for testing sensitivity",
        "how taste buds renew themselves over time"
      ],
      answer: 0,
      explain: "글은 혀 지도가 틀렸다는 사실보다 \"1분이면 확인할 수 있는데도 아무도 수고하지 않아 살아남았다\"는 쪽에 무게를 둔다. 따라서 주제는 ①. ③은 교과서가 계기였다는 한 문장일 뿐이고 ②·④·⑤는 지문에 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The tongue map survived mainly because ______.",
      choices: [
        "the original study was never published",
        "taste buds are too small to examine",
        "no one took the minute needed to check it",
        "scientists disagreed about the basic tastes",
        "textbooks are revised only once a century"
      ],
      answer: 2,
      explain: "지문은 \"확인을 견뎌 내서가 아니라 아무도 수고하지 않아서(nobody bothered)\" 살아남았다고 했다. 따라서 ③이 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 overturn과 의미가 가장 가까운 것은?",
      target: "overturn",
      choices: [
        "repeat",
        "explain",
        "shorten",
        "publish",
        "disprove"
      ],
      answer: 4,
      explain: "overturn은 \"뒤엎다\"라는 뜻으로, 여기서는 그 주장을 무너뜨린다는 말이다. 1분이면 틀렸음을 보일 수 있다는 맥락이므로 disprove가 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "혀 지도는 1901년의 독일 연구에서 비롯되었다.",
        "그 독일 연구는 혀의 부위마다 맛이 뚜렷하게 나뉜다고 밝혔다.",
        "미국의 한 교과서가 작은 차이를 뚜렷한 경계로 다시 그렸다.",
        "혀 뒤쪽에 설탕을 떨어뜨려도 단맛이 제대로 느껴진다.",
        "누구나 부엌에서 1분이면 이것을 확인해 볼 수 있다."
      ],
      answer: 1,
      explain: "그 독일 연구는 부위별 민감도에 \"약간의 차이\"가 있다고 적었을 뿐이다. 뚜렷한 경계로 바꾼 것은 뒤의 영어 번역이므로 ②가 일치하지 않는다."
    }
  ],
  translation: "우리 대부분은 혀가 구역으로 나뉘어 있다고 배웠다. 끝에서는 단맛, 안쪽에서는 쓴맛, 양옆을 따라서는 신맛과 짠맛이라고 말이다. 그 그림은 전 세계의 교과서에 실려 있고, 그리고 틀렸다. 그것은 혀의 부위마다 민감도에 약간의 차이가 있다고 적었을 뿐인 1901년의 한 독일 연구에서 시작되었다. 미국의 한 교과서가 그 작은 차이들을 뚜렷한 경계로 다시 그렸고, 깔끔한 그림은 좀처럼 사라지지 않는다. 실제로는 모든 미뢰가 모든 기본 맛에 반응하며, 혀 안쪽에 떨어뜨린 설탕 한 방울도 완벽하게 달게 느껴진다. 누구나 부엌에서 1분이면 이것을 확인할 수 있다는 점이 이상한 대목이다. 그 지도는 확인을 견뎌 내서 살아남은 것이 아니라, 아무도 수고하지 않아서 살아남았다. 단순하고 쓸모 있어 보이며 교과서에 인쇄된 주장은, 그것을 뒤엎을 그 1분을 좀처럼 얻지 못한다.",
  words: [
    { w: "sensitivity", pos: "명사", mean: "민감도, 예민함",
      ex: "Sensitivity to cold varies from person to person.",
      ko: "추위에 대한 민감도는 사람마다 다르다." },
    { w: "taste bud", pos: "명사", mean: "미뢰, 맛봉오리",
      ex: "A child has more taste buds than an adult.",
      ko: "아이는 어른보다 미뢰가 더 많다." },
    { w: "sharp", pos: "형용사", mean: "뚜렷한, 또렷한",
      ex: "There is no sharp line between the two groups.",
      ko: "두 집단 사이에 뚜렷한 선은 없다." },
    { w: "bother", pos: "동사", mean: "수고를 들이다, 애써 ~하다",
      ex: "Nobody bothered to read the last page.",
      ko: "아무도 마지막 쪽을 애써 읽지 않았다." }
  ],
  idioms: [
    { w: "divided into", mean: "~로 나뉘다",
      ex: "The test is divided into three short parts.",
      ko: "그 시험은 짧은 세 부분으로 나뉜다." },
    { w: "hard to kill", mean: "좀처럼 사라지지 않는",
      ex: "A simple story is hard to kill, even a false one.",
      ko: "단순한 이야기는 거짓이라도 좀처럼 사라지지 않는다." }
  ]
},
{
  id: "h1-016",
  title: "밤을 돌려주는 일",
  passage: "A third of humanity can no longer see the Milky Way from where they live. Street lamps, signs and security lights throw far more light upward than any task requires, and the glow scatters in the air until the sky itself seems to shine. Astronomers noticed first, but the costs reach much further. Newly hatched sea turtles crawl toward the brightest horizon, which used to be the sea and is now a car park. Moths circle a lamp until they drop, and the plants that depend on them go unpollinated. Migrating birds, which steer by stars, collide with lit towers in large numbers. What makes light pollution unusual among environmental problems is how quickly it can be undone. A shield that aims a lamp at the ground, and a switch that turns it off after midnight, restore the dark that same night. Almost nothing else we have broken repairs itself so fast.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how astronomers choose sites for new telescopes",
        "the rising cost of lighting city streets at night",
        "the harm done by excess light and how easily it is reversed",
        "why some animals are active only after dark",
        "how electric lighting spread across the world"
      ],
      answer: 2,
      explain: "앞부분은 지나친 빛이 사람과 동물에 끼치는 해를 늘어놓고, 뒷부분은 그것이 다른 환경 문제와 달리 하룻밤이면 되돌려진다고 말한다. 두 축을 모두 담은 ③이 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Light pollution is unusual among environmental problems because it ______.",
      choices: [
        "affects only a few species of animal",
        "grows worse in winter than in summer",
        "cannot be measured with any accuracy",
        "disappears the night the lights are changed",
        "has no effect on people's health"
      ],
      answer: 3,
      explain: "지문은 가리개를 씌우고 자정 뒤에 끄기만 해도 \"그날 밤 바로\" 어둠이 돌아온다고 했다. 따라서 ④가 적절하다. ①은 거북·나방·철새가 모두 나오므로 틀렸다."
    },
    {
      type: "vocab",
      prompt: "윗글의 undone과 의미가 가장 가까운 것은?",
      target: "undone",
      choices: [
        "reversed",
        "ignored",
        "measured",
        "delayed",
        "repeated"
      ],
      answer: 0,
      explain: "undone은 undo(되돌리다, 원래대로 하다)의 과거분사다. 바로 뒤 문장이 가리개와 스위치로 어둠이 돌아온다는 이야기이므로 reversed가 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "인류의 3분의 1은 사는 곳에서 은하수를 볼 수 없다.",
        "갓 부화한 바다거북은 가장 밝은 쪽을 향해 기어간다.",
        "별을 보고 길을 찾는 철새들이 불 켜진 탑에 부딪힌다.",
        "등을 땅 쪽으로 향하게 가리개를 씌우면 그날 밤 어둠이 돌아온다.",
        "빛 공해도 다른 환경 문제들처럼 되돌리는 데 오랜 시간이 걸린다."
      ],
      answer: 4,
      explain: "빛 공해가 다른 환경 문제와 다른 점이 바로 \"얼마나 빨리 되돌릴 수 있는가\"라고 했고, 우리가 망가뜨린 것 중 이만큼 빨리 회복되는 것은 거의 없다고 끝맺는다. 따라서 ⑤가 일치하지 않는다."
    }
  ],
  translation: "인류의 3분의 1은 자기가 사는 곳에서 더는 은하수를 볼 수 없다. 가로등과 간판과 방범등은 어떤 일에 필요한 것보다 훨씬 많은 빛을 위쪽으로 쏘아 올리고, 그 빛무리가 공기 중에 흩어져 하늘 자체가 빛나는 것처럼 보이게 만든다. 천문학자들이 먼저 알아차렸지만, 그 대가는 훨씬 멀리까지 미친다. 갓 부화한 바다거북은 가장 밝은 지평선을 향해 기어가는데, 예전에는 그쪽이 바다였고 지금은 주차장이다. 나방은 쓰러질 때까지 등 주위를 맴돌고, 그 나방에 기대던 식물들은 수분되지 못한 채로 남는다. 별을 보고 방향을 잡는 철새들은 불 켜진 탑에 떼로 부딪힌다. 빛 공해를 여러 환경 문제 가운데 유별나게 만드는 것은 그것이 얼마나 빨리 되돌려질 수 있는가 하는 점이다. 등을 땅 쪽으로 향하게 하는 가리개 하나, 자정이 지나면 꺼 주는 스위치 하나면 바로 그날 밤 어둠이 돌아온다. 우리가 망가뜨린 것 가운데 이만큼 빨리 스스로 회복되는 것은 거의 없다.",
  words: [
    { w: "scatter", pos: "동사", mean: "흩어지다, 흩뿌리다",
      ex: "Dust in the air scatters the headlights.",
      ko: "공기 중의 먼지가 전조등 빛을 흩어 놓는다." },
    { w: "hatch", pos: "동사", mean: "부화하다, 알에서 깨어나다",
      ex: "The chicks hatched three days early.",
      ko: "새끼들은 사흘 일찍 알에서 깨어났다." },
    { w: "collide", pos: "동사", mean: "충돌하다, 부딪치다",
      ex: "Two boats collided in the fog.",
      ko: "배 두 척이 안개 속에서 충돌했다." },
    { w: "shield", pos: "명사", mean: "가리개, 막아 주는 것",
      ex: "A paper shield was enough to block the glare.",
      ko: "종이 가리개 하나로 눈부심을 막기에 충분했다." }
  ],
  idioms: [
    { w: "steer by", mean: "~을 보고 방향을 잡다",
      ex: "Sailors once steered by the North Star alone.",
      ko: "뱃사람들은 한때 북극성 하나만 보고 방향을 잡았다." },
    { w: "go unpollinated", mean: "수분되지 못한 채로 남다 (go + 과거분사: ~된 채로 남다)",
      ex: "Most small errors go unnoticed until the very end.",
      ko: "작은 실수들은 대부분 맨 끝까지 눈에 띄지 않고 지나간다." }
  ]
},
{
  id: "h1-017",
  title: "기다림의 길이",
  passage: "An American airport once faced a flood of complaints about how long bags took to reach the carousel. Managers added staff, and the average wait fell to eight minutes, a good figure by industry standards. The complaints continued. Then someone measured the walk: passengers reached the baggage hall in one minute and then waited seven. The airport moved the arrival gates further away, so the walk took seven minutes and the waiting took one. Total time barely changed. Complaints nearly vanished. The story is often told as a trick, but it points at something real about how people judge waiting. Occupied time feels shorter than unoccupied time, and a wait nobody explains feels longest of all. This is why lifts have mirrors, and why a queue that crawls is easier to bear than one that stops. The problem was never the eight minutes. It was the seven of them spent doing nothing.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why airports should hire more baggage handlers",
        "the best way to lay out an airport building",
        "how airlines reduce the number of lost bags",
        "why passengers prefer short flights to long ones",
        "how waiting is judged by more than its length"
      ],
      answer: 4,
      explain: "공항 일화는 예시일 뿐이고, 글이 말하려는 것은 \"무엇을 하며 보낸 시간은 짧게 느껴진다\"는 원리다. 승강기 거울과 줄 이야기까지 같은 원리의 예로 이어지므로 ⑤가 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The complaints stopped because the passengers' waiting time was ______.",
      choices: [
        "cut almost in half by the extra staff",
        "explained to them on a screen",
        "filled with walking instead of standing",
        "shared among several carousels",
        "paid for by the airline"
      ],
      answer: 2,
      explain: "전체 시간은 거의 그대로였고 바뀐 것은 7분이 서 있기에서 걷기로 옮겨 갔다는 점뿐이다. 따라서 ③이 적절하다. ①은 직원을 늘렸을 때의 이야기이고, 그때는 불평이 그치지 않았다."
    },
    {
      type: "vocab",
      prompt: "윗글의 bear와 의미가 가장 가까운 것은?",
      target: "bear",
      choices: [
        "notice",
        "shorten",
        "avoid",
        "put up with",
        "measure"
      ],
      answer: 3,
      explain: "여기서 bear는 \"견디다, 참다\"라는 뜻이다. 느리게라도 움직이는 줄이 멈춘 줄보다 견디기 쉽다는 맥락이므로 put up with가 가장 가깝다. 동물 \"곰\"이나 \"낳다\"와 헷갈리기 쉬운 낱말이다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "직원을 늘리자 평균 대기 시간은 8분까지 줄었다.",
        "탑승구를 옮긴 뒤 전체 소요 시간이 크게 줄었다.",
        "승객들은 수하물 찾는 곳까지 1분 만에 도착해 7분을 기다렸다.",
        "공항은 도착 탑승구를 수하물 찾는 곳에서 더 멀리 옮겼다.",
        "무엇인가 하며 보내는 시간은 그냥 기다리는 시간보다 짧게 느껴진다."
      ],
      answer: 1,
      explain: "지문에 Total time barely changed(전체 시간은 거의 달라지지 않았다)라고 분명히 나온다. 줄어든 것은 불평이지 시간이 아니므로 ②가 일치하지 않는다."
    }
  ],
  translation: "한 미국 공항이 가방이 수하물 컨베이어에 도착하기까지 너무 오래 걸린다는 불평에 시달린 적이 있다. 관리자들은 직원을 늘렸고 평균 대기 시간은 8분까지 떨어졌는데, 업계 기준으로는 좋은 숫자였다. 불평은 계속되었다. 그때 누군가 걷는 시간을 재 보았다. 승객들은 1분 만에 수하물 찾는 곳에 닿았고, 그다음 7분을 기다렸다. 공항은 도착 탑승구를 더 멀리 옮겼고, 그래서 걷는 데 7분, 기다리는 데 1분이 걸리게 되었다. 전체 시간은 거의 달라지지 않았다. 불평은 거의 사라졌다. 이 이야기는 흔히 눈속임처럼 전해지지만, 사람이 기다림을 어떻게 가늠하는지에 대해 진짜인 무언가를 가리킨다. 무엇인가 하며 보내는 시간은 그냥 보내는 시간보다 짧게 느껴지고, 아무도 설명해 주지 않는 기다림은 그중에서도 가장 길게 느껴진다. 승강기에 거울이 달려 있는 이유, 그리고 느리게라도 움직이는 줄이 멈춰 선 줄보다 견디기 쉬운 이유가 이것이다. 문제는 애초에 8분이 아니었다. 아무것도 하지 않은 채 보낸 그중의 7분이었다.",
  words: [
    { w: "complaint", pos: "명사", mean: "불평, 항의",
      ex: "The shop answers every complaint within a day.",
      ko: "그 가게는 모든 항의에 하루 안에 답한다." },
    { w: "carousel", pos: "명사", mean: "(공항의) 수하물 컨베이어",
      ex: "Her suitcase was the last one off the carousel.",
      ko: "그녀의 가방이 컨베이어에서 가장 마지막으로 나왔다." },
    { w: "occupied", pos: "형용사", mean: "무언가로 채워진, 바쁜",
      ex: "An occupied mind does not notice the clock.",
      ko: "무언가에 빠져 있는 머리는 시계를 보지 않는다." },
    { w: "queue", pos: "명사", mean: "줄, 대기 행렬",
      ex: "The queue bent twice around the hall.",
      ko: "그 줄은 홀을 두 번 돌아 굽어 있었다." }
  ],
  idioms: [
    { w: "a flood of", mean: "빗발치는 ~, 쏟아지는 ~",
      ex: "One short post brought a flood of questions.",
      ko: "짧은 글 하나가 빗발치는 질문을 불러왔다." },
    { w: "point at", mean: "~을 가리키다, ~을 짚어 보이다",
      ex: "The numbers point at a problem nobody wants to name.",
      ko: "그 숫자들은 아무도 입에 올리고 싶어 하지 않는 문제를 가리킨다." }
  ]
},
{
  id: "h1-018",
  title: "다윈의 지렁이",
  passage: "Charles Darwin spent the last years of his life on earthworms. He weighed the soil they pushed to the surface, had a bassoon played at them to test their hearing, and kept pots of them in his study for decades. Friends found the subject beneath him. The book he produced in 1881 argued that worms had, over long stretches of time, passed most of the soil of England through their bodies, burying stones, ruins and whole fields in the process. A Roman villa in southern England had sunk under worm castings, not under any flood. Critics thought the claim absurd; later measurements showed he had been too cautious. The work is now read as a companion to his famous theory rather than a hobby, because it makes the same argument in miniature: a force too small to notice, given enough time, rearranges the world. Darwin's worms were his last picture of what patience can build.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how earthworms improve the soil of a garden",
        "what Darwin's study of worms shows about small forces",
        "why Roman ruins are found beneath English fields",
        "the hobbies famous scientists took up in old age",
        "how hearing was first tested in animals"
      ],
      answer: 1,
      explain: "마지막 세 문장이 답을 짚어 준다. 지렁이 연구가 그의 유명한 이론과 같은 주장을 축소판으로 편다는 것, 곧 \"알아차리지 못할 만큼 작은 힘도 시간이 충분하면 세상을 바꾼다\"는 것이다. 따라서 ②. ④는 친구들의 오해일 뿐이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The book on worms is read as a companion to Darwin's famous theory because it shows that ______.",
      choices: [
        "worms can hear low sounds after all",
        "England's soil is richer than its neighbours'",
        "ruins should be dug out more carefully",
        "scientists work best outside the laboratory",
        "a tiny force given enough time reshapes the world"
      ],
      answer: 4,
      explain: "지문이 \"같은 주장을 축소판으로 편다\"라고 한 뒤 그 주장을 그대로 적어 두었다. a force too small to notice, given enough time, rearranges the world이므로 ⑤가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 absurd와 의미가 가장 가까운 것은?",
      target: "absurd",
      choices: [
        "familiar",
        "costly",
        "ridiculous",
        "modest",
        "urgent"
      ],
      answer: 2,
      explain: "absurd는 \"터무니없는, 말도 안 되는\"이라는 뜻이다. 비평가들이 그 주장을 비웃었다는 맥락이므로 ridiculous가 가장 가깝다. 바로 뒤에서 오히려 다윈이 너무 조심스러웠다고 밝혀지면서 그 비웃음이 뒤집힌다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "뒤의 측정은 다윈이 지렁이의 역할을 지나치게 크게 봤다고 밝혔다.",
        "다윈은 지렁이의 청각을 시험하려고 바순을 불게 해 보았다.",
        "친구들은 그 주제가 그에게 격이 떨어진다고 여겼다.",
        "잉글랜드 남부의 로마 시대 별장이 지렁이 똥 아래로 가라앉았다.",
        "그 책은 1881년에 나왔다."
      ],
      answer: 0,
      explain: "지문은 뒤의 측정이 그가 \"너무 조심스러웠음(too cautious)\"을 보여 주었다고 했다. 즉 지렁이의 역할은 그가 말한 것보다 오히려 컸으므로 ①이 일치하지 않는다."
    }
  ],
  translation: "찰스 다윈은 생의 마지막 몇 해를 지렁이에 썼다. 그는 지렁이가 땅 위로 밀어 올린 흙의 무게를 재고, 청각을 시험하려고 그들 앞에서 바순을 불게 했으며, 수십 년 동안 서재에 지렁이 화분을 두었다. 친구들은 그 주제가 그에게 격이 떨어진다고 여겼다. 1881년에 내놓은 그 책은, 지렁이들이 아주 긴 시간에 걸쳐 잉글랜드 흙의 대부분을 제 몸으로 통과시켰고 그 과정에서 돌과 유적과 들판 전체를 묻어 버렸다고 주장했다. 잉글랜드 남부의 한 로마 시대 별장은 어떤 홍수가 아니라 지렁이 똥 아래로 가라앉은 것이었다. 비평가들은 그 주장을 터무니없다고 여겼지만, 뒤의 측정들은 그가 오히려 너무 조심스러웠음을 보여 주었다. 이 연구는 이제 취미가 아니라 그의 유명한 이론의 짝으로 읽히는데, 같은 주장을 축소판으로 펴고 있기 때문이다. 알아차리지 못할 만큼 작은 힘도 시간이 충분히 주어지면 세상을 다시 배치한다는 주장이다. 다윈의 지렁이는 인내가 무엇을 쌓을 수 있는지를 보여 준 그의 마지막 그림이었다.",
  words: [
    { w: "bury", pos: "동사", mean: "묻다, 덮어 가리다",
      ex: "Sand had buried the lower half of the fence.",
      ko: "모래가 울타리의 아래쪽 절반을 묻어 버렸다." },
    { w: "ruins", pos: "명사", mean: "유적, 폐허",
      ex: "The ruins lay under a field of wheat.",
      ko: "그 유적은 밀밭 아래에 놓여 있었다." },
    { w: "cautious", pos: "형용사", mean: "조심스러운, 신중한",
      ex: "His estimate was cautious, and still too high.",
      ko: "그의 추정치는 신중했는데도 여전히 너무 높았다." },
    { w: "rearrange", pos: "동사", mean: "다시 배치하다, 재배열하다",
      ex: "A single new fact rearranged the whole argument.",
      ko: "새로운 사실 하나가 논증 전체를 다시 배치했다." }
  ],
  idioms: [
    { w: "pass through", mean: "~을 통과시키다, ~을 지나가다",
      ex: "Every drop passes through the same filter.",
      ko: "모든 물방울이 같은 거름망을 통과한다." },
    { w: "in miniature", mean: "축소판으로, 작게 줄인 모습으로",
      ex: "The model shows the whole harbour in miniature.",
      ko: "그 모형은 항구 전체를 축소판으로 보여 준다." }
  ]
},
{
  id: "h1-019",
  title: "나무가 적어 둔 것",
  passage: "Cut across a trunk and you find a record nobody set out to keep. Each ring is one year of growth, wide in a wet season and narrow in a dry one, so a single tree carries a weather diary as long as its life. The useful part is that trees in one region share the same pattern of fat and thin years. Match the outer rings of a living tree to the inner rings of an old beam, and that beam's rings to those of a buried log, and the record stretches back thousands of years. Dates come with it: a timber in a cathedral roof can be traced to the winter its tree was felled. The method has settled arguments that documents could not, including when certain famous buildings were raised. It works because a tree, unlike a witness, has no reason to remember a year one way rather than another.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why some trees live far longer than others",
        "how a forest recovers after a dry season",
        "the best season for cutting building timber",
        "how tree rings give us a dated record of the past",
        "why old documents are often unreliable"
      ],
      answer: 3,
      explain: "글은 나이테가 어떻게 연도까지 붙은 기록이 되는지를 차례로 설명하고, 그것이 문서로 풀지 못한 논쟁을 해결했다고 맺는다. 따라서 주제는 ④. ⑤는 마지막 문장의 대비일 뿐 글의 중심이 아니다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Tree rings can date an old beam because trees in one region ______.",
      choices: [
        "grow at exactly the same speed",
        "share the same pattern of good and bad years",
        "are usually felled in the same winter",
        "contain the same number of rings",
        "were planted by the same people"
      ],
      answer: 1,
      explain: "지문은 \"한 지역의 나무들이 살찐 해와 여윈 해의 같은 무늬를 공유한다\"는 점을 유용한 대목으로 꼽고, 그래서 살아 있는 나무와 들보의 무늬를 이어 붙일 수 있다고 했다. 따라서 ②가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 felled와 의미가 가장 가까운 것은?",
      target: "felled",
      choices: [
        "cut down",
        "planted",
        "measured",
        "carried",
        "dried"
      ],
      answer: 0,
      explain: "fell은 \"(나무를) 베어 넘어뜨리다\"라는 뜻의 동사이고 felled는 그 과거분사다. 나무가 베인 겨울까지 추적할 수 있다는 맥락이므로 cut down이 가장 가깝다. fall(떨어지다)의 과거형 fell과 모양이 같아 헷갈리기 쉽다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "나이테 하나는 한 해의 성장을 나타낸다.",
        "비가 많은 해에는 나이테가 넓다.",
        "같은 지역의 나무들은 저마다 전혀 다른 나이테 무늬를 가진다.",
        "살아 있는 나무와 오래된 들보, 묻힌 통나무의 나이테를 이어 붙일 수 있다.",
        "이 방법은 문서로 풀지 못한 논쟁을 해결한 적이 있다."
      ],
      answer: 2,
      explain: "이 방법이 성립하는 까닭이 바로 한 지역의 나무들이 같은 무늬를 공유한다는 데 있다. 저마다 전혀 다르다는 ③이 정반대다."
    }
  ],
  translation: "나무줄기를 가로로 잘라 보면 아무도 남기려 하지 않았던 기록이 나온다. 나이테 하나는 한 해의 성장이고, 비가 많은 해에는 넓고 가문 해에는 좁다. 그래서 나무 한 그루는 제 수명만큼 긴 날씨 일기를 지니고 있다. 쓸모 있는 대목은 한 지역의 나무들이 살찐 해와 여윈 해의 같은 무늬를 공유한다는 점이다. 살아 있는 나무의 바깥쪽 나이테를 오래된 들보의 안쪽 나이테에 맞추고, 그 들보의 나이테를 다시 땅에 묻힌 통나무의 것에 맞추면, 그 기록은 수천 년 전까지 거슬러 올라간다. 연도도 함께 따라온다. 대성당 지붕에 쓰인 목재 하나를, 그 나무가 베인 겨울까지 추적할 수 있는 것이다. 이 방법은 문서로는 풀지 못한 논쟁들을 해결해 왔는데, 어떤 유명한 건물들이 언제 세워졌는가 하는 문제도 거기에 들어간다. 이 방법이 통하는 이유는, 나무가 증인과 달리 어떤 해를 이런 식이 아니라 저런 식으로 기억할 이유가 없기 때문이다.",
  words: [
    { w: "trunk", pos: "명사", mean: "나무줄기",
      ex: "The trunk was wider than two people could reach around.",
      ko: "그 줄기는 두 사람이 팔로 감쌀 수 있는 것보다 굵었다." },
    { w: "beam", pos: "명사", mean: "들보, 대들보",
      ex: "The oak beams had held the roof for four centuries.",
      ko: "그 떡갈나무 들보들이 400년 동안 지붕을 떠받쳐 왔다." },
    { w: "timber", pos: "명사", mean: "목재, 건축용 나무",
      ex: "The timber came from a forest fifty miles away.",
      ko: "그 목재는 50마일 떨어진 숲에서 왔다." },
    { w: "trace", pos: "동사", mean: "추적하다, 거슬러 올라가 밝히다",
      ex: "The recipe can be traced to a single village.",
      ko: "그 조리법은 한 마을까지 거슬러 올라가 밝힐 수 있다." }
  ],
  idioms: [
    { w: "set out to", mean: "~하려고 나서다, ~하는 것을 목표로 삼다",
      ex: "She never set out to write a book.",
      ko: "그녀는 애초에 책을 쓰려고 나섰던 것이 아니다." },
    { w: "stretch back", mean: "(시간이) 거슬러 올라가다",
      ex: "The family's records stretch back to 1640.",
      ko: "그 집안의 기록은 1640년까지 거슬러 올라간다." }
  ]
},
{
  id: "h1-020",
  title: "하품이 옮는 이유",
  passage: "Read the word yawn and there is a fair chance you will yawn. The reflex spreads between people within seconds, passes through a telephone, and appears to work on dogs that watch their owners do it. Why one body should copy another this way is not settled, but the pattern of who catches it is suggestive. Contagious yawning is strongest between family members, weaker between friends, weaker still between strangers, which is the same ladder that other measures of empathy climb. Children do not catch yawns until about the age of four, around the time they begin to understand that other people have minds of their own. The habit, in other words, seems to ride on the machinery we use to feel what someone else feels. That does not make a yawn meaningful. It makes it a small, visible sign of a system that usually works out of sight.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "what contagious yawning suggests about our link to others",
        "how much sleep children need at different ages",
        "why dogs copy the behaviour of their owners",
        "the medical causes of frequent yawning",
        "how reflexes develop in the first year of life"
      ],
      answer: 0,
      explain: "글은 하품이 누구 사이에서 잘 옮는지, 몇 살부터 옮는지를 들어, 그것이 공감의 장치에 얹혀 있는 것 같다고 말한다. 따라서 주제는 ①. ③은 예시 하나일 뿐이고 ②·④·⑤는 지문에 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The way yawns spread suggests that the reflex rides on ______.",
      choices: [
        "how tired the people in a room are",
        "whether a person has slept well",
        "the size of the group watching",
        "how often a yawn is repeated",
        "the same capacity that lets us share others' feelings"
      ],
      answer: 4,
      explain: "가족에게 가장 강하고 낯선 사람에게 가장 약하다는 사다리가 공감을 재는 다른 척도와 같고, 남에게도 마음이 있음을 알기 시작하는 네 살 무렵부터 옮기 시작한다고 했다. 둘 다 공감 능력을 가리키므로 ⑤가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 suggestive와 의미가 가장 가까운 것은?",
      target: "suggestive",
      choices: [
        "doubtful",
        "revealing",
        "amusing",
        "harmless",
        "confusing"
      ],
      answer: 1,
      explain: "suggestive는 \"무언가를 시사하는, 짐작하게 하는\"이라는 뜻이다. 까닭은 아직 모르지만 누구 사이에서 옮는지의 무늬가 실마리를 준다는 맥락이므로 revealing이 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "하품은 전화를 통해서도 옮는다.",
        "하품 전염은 가족 사이에서 가장 강하다.",
        "개는 주인이 하품하는 것을 보고 따라 하기도 한다.",
        "아이들은 태어날 때부터 하품이 옮는다.",
        "글쓴이는 하품 자체에 의미가 담겨 있는 것은 아니라고 본다."
      ],
      answer: 3,
      explain: "지문은 아이들이 네 살 무렵까지는 하품이 옮지 않는다고 했다. 태어날 때부터라는 ④가 일치하지 않는다."
    }
  ],
  translation: "하품이라는 낱말을 읽기만 해도 당신이 하품할 가능성이 꽤 있다. 이 반사 작용은 사람들 사이에 몇 초 만에 퍼지고, 전화를 통해서도 옮으며, 주인이 하품하는 것을 지켜보는 개에게도 통하는 것으로 보인다. 왜 한 몸이 다른 몸을 이런 식으로 따라 해야 하는지는 아직 결론이 나 있지 않지만, 누구에게서 누구로 옮는가 하는 무늬는 무언가를 짐작하게 한다. 하품의 전염은 가족 사이에서 가장 강하고, 친구 사이에서는 그보다 약하며, 낯선 사람 사이에서는 더 약한데, 이는 공감을 재는 다른 척도들이 오르는 것과 똑같은 사다리다. 아이들은 네 살 무렵까지는 하품이 옮지 않는데, 그 시기는 다른 사람에게도 저마다의 마음이 있다는 것을 이해하기 시작하는 때와 대략 겹친다. 다시 말해 이 버릇은 우리가 남이 느끼는 것을 느끼는 데 쓰는 장치에 얹혀 있는 것으로 보인다. 그렇다고 해서 하품에 의미가 담기는 것은 아니다. 다만 하품은, 평소에는 보이지 않는 곳에서 돌아가는 한 장치의 작고 눈에 보이는 표시가 된다.",
  words: [
    { w: "reflex", pos: "명사", mean: "반사 작용, 반사적인 반응",
      ex: "Blinking at a bright light is a reflex.",
      ko: "밝은 빛에 눈을 깜박이는 것은 반사 작용이다." },
    { w: "contagious", pos: "형용사", mean: "전염되는, 옮는",
      ex: "Her laugh was contagious across the whole room.",
      ko: "그녀의 웃음은 방 전체로 옮았다." },
    { w: "empathy", pos: "명사", mean: "공감, 감정이입",
      ex: "Empathy is not the same thing as agreement.",
      ko: "공감은 동의와 같은 것이 아니다." },
    { w: "settled", pos: "형용사", mean: "결론이 난, 매듭지어진",
      ex: "The question is far from settled among researchers.",
      ko: "그 물음은 연구자들 사이에서 결론이 나려면 한참 멀었다." }
  ],
  idioms: [
    { w: "ride on", mean: "~에 얹혀 있다, ~에 기대어 움직이다",
      ex: "The whole plan rides on one uncertain number.",
      ko: "그 계획 전체가 불확실한 숫자 하나에 얹혀 있다." },
    { w: "out of sight", mean: "보이지 않는 곳에서",
      ex: "Most of the work happens out of sight.",
      ko: "그 일의 대부분은 보이지 않는 곳에서 일어난다." }
  ]
}
);

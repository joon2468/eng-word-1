/* 수능 독해 세트 — 모두 창작 지문입니다. 실제 기출·EBS 지문이 아닙니다.
   한 세트 = 지문 1개 + 문항 6개(주제 / 빈칸추론 / 함축의미 / 어휘 / 요약문 / 내용일치) + 해설 + 해석.
   형식은 exam/data/h1.js와 같습니다. implicit(함축의미)과 vocab(어휘)의 target은
   지문에서 그대로 찾아 표시하므로 지문에 있는 그대로 적어야 합니다. */

const EXAM_SETS_SN = [
{
  id: "sn-001",
  title: "반복이 만드는 진실",
  passage: "A claim repeated often enough begins to feel true, even to people who know better. Psychologists call this the illusory truth effect, and its mechanism is unglamorous: the brain uses the ease with which something comes to mind as a rough guide to whether it is correct. A familiar statement is processed quickly, and that fluency is misread as a signal of accuracy. The effect survives warnings. In experiments, participants told in advance that some statements were false still rated the repeated falsehoods as more believable than unrepeated truths. What makes this more than a laboratory curiosity is that modern information systems are, by design, repetition machines. A claim that travels well is shown again, and each showing makes the next encounter smoother. Correction does not simply undo this, because a correction must restate the original claim in order to deny it, and the restatement feeds the very familiarity it was meant to defeat. The practical conclusion is uncomfortable: the strongest defence is not to argue with a falsehood after it spreads, but to deny it the repetition it needs in the first place.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why repetition makes a false claim feel true",
        "how news organizations verify their sources",
        "how psychologists design laboratory experiments",
        "the speed at which the brain processes language",
        "why people forget the warnings they are given"
      ],
      answer: 0,
      explain: "반복 → 처리의 수월함 → 정확성으로 오인이라는 기제를 설명하고, 정정조차 반복을 보태므로 애초에 반복을 끊어야 한다는 결론으로 간다. 따라서 ①."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Correction cannot simply undo the effect, because denying a claim requires ______.",
      choices: [
        "proving that the speaker acted deliberately",
        "restating the claim itself",
        "using simpler words than the original",
        "finding the person who first made it",
        "waiting until the claim has spread"
      ],
      answer: 1,
      explain: "a correction must restate the original claim in order to deny it을 묻는 문항이다. 부정하려면 원래 주장을 다시 말해야 하고, 그 되풀이가 바로 물리치려던 익숙함을 키운다."
    },
    {
      type: "implicit",
      prompt: "윗글의 repetition machines가 의미하는 바로 가장 적절한 것은?",
      target: "repetition machines",
      choices: [
        "tools that check whether a statement is accurate",
        "archives that store every version of a story",
        "networks built to deliver news faster than rivals do",
        "systems that keep showing a claim that travels well",
        "devices that record what each user has already read"
      ],
      answer: 3,
      explain: "바로 다음 문장이 뜻을 풀어 준다. 잘 퍼지는 주장은 다시 노출되고 노출될수록 다음 만남이 매끄러워진다고 했으므로, 반복 기계란 잘 퍼지는 주장을 계속 다시 보여 주는 구조를 말한다."
    },
    {
      type: "vocab",
      prompt: "윗글의 fluency와 의미가 가장 가까운 것은?",
      target: "fluency",
      choices: [
        "speech",
        "variety",
        "accuracy",
        "honesty",
        "ease"
      ],
      answer: 4,
      explain: "fluency는 흔히 \"유창성\"으로 외우지만, 여기서는 앞 문장의 the ease with which something comes to mind를 받아 \"처리의 수월함\"을 뜻한다. 따라서 ease가 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Because the brain treats (A) ______ as a sign of truth, the better defence against a falsehood is to cut off its (B) ______ rather than to argue with it afterwards.",
      choices: [
        "(A) emotional appeal … (B) correction",
        "(A) easy processing … (B) correction",
        "(A) careful reasoning … (B) repetition",
        "(A) careful reasoning … (B) publication",
        "(A) easy processing … (B) repetition"
      ],
      answer: 4,
      explain: "뇌가 정확성의 단서로 쓰는 것은 신중한 추론이 아니라 \"쉽게 처리되는 느낌\"이므로 (A)는 easy processing이다. 마지막 문장이 반복을 끊는 쪽을 권하므로 (B)는 repetition."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "잘 퍼지는 주장은 다시 노출되고, 노출될수록 다음 만남이 매끄러워진다.",
        "거짓이 섞여 있다고 미리 들은 참가자도 반복된 거짓을 더 믿을 만하다고 평가했다.",
        "심리학자들은 이 현상을 환상 진리 효과라고 부른다.",
        "뇌는 어떤 내용이 떠오르는 수월함을 정확성의 대략적인 단서로 쓴다.",
        "글쓴이는 거짓이 퍼진 뒤에 반박하는 것이 가장 강력한 방어라고 본다."
      ],
      answer: 4,
      explain: "마지막 문장은 the strongest defence is not to argue with a falsehood after it spreads, but to deny it the repetition이라고 했다. 사후 반박이 아니라 반복을 끊는 쪽이므로 ⑤가 일치하지 않는다."
    }
  ],
  translation: "충분히 자주 되풀이된 주장은, 그것이 사실이 아님을 아는 사람에게조차 사실처럼 느껴지기 시작한다. 심리학자들은 이를 환상 진리 효과라고 부르는데, 그 작동 원리는 전혀 멋있지 않다. 뇌는 무언가가 떠오르는 수월함을 그것이 옳은지 아닌지를 가늠하는 대략적인 잣대로 쓴다. 익숙한 진술은 빠르게 처리되고, 그 수월함이 정확성의 신호로 잘못 읽히는 것이다. 이 효과는 경고를 받고도 살아남는다. 실험에서, 일부 진술이 거짓이라고 미리 들은 참가자들조차 되풀이된 거짓을 되풀이되지 않은 사실보다 더 믿을 만하다고 평가했다. 이것이 실험실의 신기한 이야기에 그치지 않는 이유는, 오늘날의 정보 시스템이 설계상 반복 기계이기 때문이다. 잘 퍼지는 주장은 다시 노출되고, 노출될 때마다 다음 만남은 한층 매끄러워진다. 정정은 이것을 그냥 되돌려 주지 않는다. 어떤 주장을 부정하려면 그 주장을 다시 말해야 하고, 그 되풀이가 바로 물리치려던 익숙함을 먹여 살리기 때문이다. 실천적 결론은 불편하다. 가장 강력한 방어는 거짓이 퍼진 뒤에 그것과 다투는 것이 아니라, 애초에 그것이 필요로 하는 반복을 주지 않는 것이다."
},
{
  id: "sn-002",
  title: "늑대가 돌아온 뒤",
  passage: "When wolves were returned to Yellowstone in 1995, the changes that followed reached further than anyone had predicted. Elk, no longer free to graze the valleys without watching, stopped lingering on open riverbanks. Willow and aspen, browsed to stubs for decades, grew back. Beavers, which need willow, returned and built dams; the dams held water, and the pools supported fish and amphibians. Even the shape of the rivers altered, as stabilized banks stopped collapsing. Ecologists call this a trophic cascade — an effect that travels down through a food web from the top. The story is often told as proof that restoring a predator repairs an ecosystem, but researchers who have examined the Yellowstone data closely are more cautious. Elk numbers were falling for several reasons at once, including drought and human hunting, and some valleys recovered while others did not. The cascade is real; its simplicity is not. What the case actually demonstrates is subtler and more useful: that the pieces of an ecosystem are linked in ways we rarely see until one of them is gone, and that we are far better at taking pieces out than at predicting what will follow.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why beavers prefer to build dams in shallow rivers",
        "the best methods for counting elk in national parks",
        "how a long drought changed the climate of Yellowstone",
        "the history of hunting laws in the American west",
        "what the Yellowstone wolves reveal about ecological links"
      ],
      answer: 4,
      explain: "늑대 재도입이 강의 모양까지 바꾼 연쇄를 보여 주되, 그 단순한 영웅담을 경계하며 \"생태계의 조각들이 보이지 않게 얽혀 있다\"는 교훈으로 맺는다. 따라서 ⑤."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Researchers are cautious because elk numbers were already falling ______.",
      choices: [
        "according to counts that were never published",
        "only in the years before the wolves arrived",
        "in the valleys where no wolves were released",
        "faster than the willows could grow back",
        "for several reasons at the same time"
      ],
      answer: 4,
      explain: "Elk numbers were falling for several reasons at once, including drought and human hunting을 묻는 문항이다. 원인이 겹쳐 있었기 때문에 늑대만의 공으로 돌리기 어렵다는 것이다."
    },
    {
      type: "implicit",
      prompt: "윗글의 its simplicity is not이 의미하는 바로 가장 적절한 것은?",
      target: "its simplicity is not",
      choices: [
        "the cascade took far longer to appear than expected",
        "ecologists still disagree about what a cascade is",
        "the wolves changed only one valley out of many",
        "the available data were too limited to prove anything",
        "the cascade had more causes than the usual story admits"
      ],
      answer: 4,
      explain: "The cascade is real; its simplicity is not은 \"연쇄는 실재하지만 그 단순함은 실재하지 않는다\"는 뜻이다. 바로 앞에서 가뭄과 사냥 등 원인이 겹쳐 있었다고 했으므로 ⑤이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 browsed와 의미가 가장 가까운 것은?",
      target: "browsed",
      choices: [
        "damaged",
        "grazed",
        "planted",
        "searched",
        "scanned"
      ],
      answer: 1,
      explain: "browse는 \"둘러보다, 검색하다\"로 익숙하지만, 동물이 주어이거나 식물이 목적어일 때는 \"뜯어 먹다\"라는 뜻이다. 버드나무가 수십 년 동안 그루터기만 남도록 뜯긴 상황이므로 grazed가 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "The returning wolves set off changes that reached even the rivers, yet the case works less as proof that predators (A) ______ an ecosystem than as a reminder that its parts are (B) ______ than we notice.",
      choices: [
        "(A) repair … (B) more independent",
        "(A) replace … (B) more independent",
        "(A) threaten … (B) harder to count",
        "(A) repair … (B) more tightly linked",
        "(A) threaten … (B) more tightly linked"
      ],
      answer: 3,
      explain: "글은 restoring a predator repairs an ecosystem이라는 통상의 이야기를 인용한 뒤 거리를 두므로 (A)는 repair다. 결론이 조각들이 보이지 않게 얽혀 있다는 것이므로 (B)는 more tightly linked."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "늑대는 1995년에 옐로스톤으로 다시 들어왔다.",
        "비버는 버드나무를 필요로 하며, 돌아와서 댐을 지었다.",
        "연구자들은 모든 계곡이 똑같이 회복되었다고 밝혔다.",
        "글쓴이는 우리가 조각을 빼내는 데는 능하지만 그 결과를 예측하는 데는 서툴다고 본다.",
        "생태학자들은 이런 효과를 영양 단계 연쇄라고 부른다."
      ],
      answer: 2,
      explain: "지문은 some valleys recovered while others did not이라고 했다. 회복된 계곡과 그렇지 않은 계곡이 갈렸으므로 ③이 일치하지 않는다."
    }
  ],
  translation: "1995년 늑대가 옐로스톤으로 돌아왔을 때, 뒤따른 변화는 누가 예상했던 것보다 멀리까지 미쳤다. 더 이상 주위를 살피지 않고 계곡을 뜯어 먹을 수 없게 된 엘크는 트인 강둑에 머무르기를 그만두었다. 수십 년 동안 그루터기만 남도록 뜯겼던 버드나무와 사시나무가 다시 자랐다. 버드나무를 필요로 하는 비버가 돌아와 댐을 지었고, 그 댐이 물을 가두자 생긴 웅덩이가 물고기와 양서류를 먹여 살렸다. 단단해진 둑이 무너지기를 멈추면서 강의 모양까지 달라졌다. 생태학자들은 이것을 영양 단계 연쇄, 즉 먹이 그물의 꼭대기에서 아래로 타고 내려가는 효과라고 부른다. 이 이야기는 흔히 포식자를 되돌리면 생태계가 복원된다는 증거로 이야기되지만, 옐로스톤의 자료를 꼼꼼히 들여다본 연구자들은 더 조심스럽다. 엘크의 수는 가뭄과 인간의 사냥을 포함해 여러 이유로 동시에 줄고 있었고, 어떤 계곡은 회복되었지만 어떤 계곡은 그러지 않았다. 연쇄는 실재한다. 다만 그 단순함은 실재하지 않는다. 이 사례가 실제로 보여 주는 것은 더 미묘하고 더 쓸모가 있다. 생태계의 조각들은 그중 하나가 사라지기 전까지는 좀처럼 보이지 않는 방식으로 얽혀 있다는 것, 그리고 우리는 조각을 빼내는 데는 훨씬 능하지만 그 뒤에 무슨 일이 벌어질지 예측하는 데는 서툴다는 것이다."
},
{
  id: "sn-003",
  title: "떠올릴 때마다 고쳐지는 기억",
  passage: "We speak of memories as if they were stored items, retrieved intact whenever we need them. The evidence points to something less comfortable. Each act of recall appears to rebuild a memory out of fragments, and the rebuilt version — shaped by what we now know, expect, and feel — is what gets stored again. A memory you have revisited often is therefore not the best preserved; it is the most edited. Researchers have demonstrated this by feeding participants small pieces of false information between recalls. The inventions migrate into the account, and participants report them with the same confidence as the parts that actually happened. Confidence, it turns out, tracks how vividly a scene comes to mind rather than how faithfully it matches the original. This has consequences wherever testimony carries weight, which is why many courts now treat an eyewitness's certainty with the caution once reserved for an obvious motive to lie. The unsettling part is not that memory fails. It is that it fails without any signal that it has, leaving the rememberer with a clear and detailed picture that no longer corresponds to what took place.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how daily practice can improve a weak memory",
        "how courts select reliable expert witnesses",
        "the brain regions in which information is stored",
        "why recalling a memory also changes it",
        "why some people remember faces better than names"
      ],
      answer: 3,
      explain: "회상이 기억을 \"꺼내는\" 것이 아니라 \"다시 짓는\" 일이며, 그래서 자주 떠올린 기억일수록 많이 고쳐져 있다는 것이 글 전체의 논지다. 따라서 ④."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The unsettling part is not that memory fails, but that it fails ______.",
      choices: [
        "unless the account is written down at once",
        "only when the event was unimportant",
        "far more often in older than in younger people",
        "without giving any signal that it has",
        "whenever the rememberer is under pressure"
      ],
      answer: 3,
      explain: "마지막 문장이 그대로 답이다. 기억이 실패한다는 사실이 아니라, 실패했다는 신호조차 없이 선명하고 상세한 그림만 남긴다는 점이 불안하다고 했다."
    },
    {
      type: "implicit",
      prompt: "윗글의 the most edited가 의미하는 바로 가장 적절한 것은?",
      target: "the most edited",
      choices: [
        "stored in a different region of the brain",
        "described in unusually careful language",
        "checked repeatedly against written records",
        "altered a little further with every recall",
        "shared with more listeners than other memories"
      ],
      answer: 3,
      explain: "앞 문장에서 회상할 때마다 기억이 다시 지어지고 그 판본이 다시 저장된다고 했다. 그러므로 자주 떠올린 기억은 가장 잘 보존된 것이 아니라 회상할 때마다 조금씩 더 고쳐진 것이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 migrate와 의미가 가장 가까운 것은?",
      target: "migrate",
      choices: [
        "grow louder",
        "break apart",
        "fly south",
        "move in",
        "disappear"
      ],
      answer: 3,
      explain: "migrate는 \"철새가 이동하다\"로 익숙하지만, 여기서는 꾸며 낸 정보가 진술 안으로 옮겨 들어간다는 뜻이다. 따라서 move in이 맞다. fly south는 사전 뜻에 끌린 선택지다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Because recall (A) ______ a memory instead of simply retrieving it, a witness's confidence reflects how (B) ______ the scene feels rather than how accurate it is.",
      choices: [
        "(A) rebuilds … (B) recent",
        "(A) erases … (B) recent",
        "(A) protects … (B) vivid",
        "(A) rebuilds … (B) vivid",
        "(A) protects … (B) complete"
      ],
      answer: 3,
      explain: "Each act of recall appears to rebuild a memory이므로 (A)는 rebuilds다. Confidence ... tracks how vividly a scene comes to mind라고 했으므로 (B)는 vivid."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "연구자들은 회상과 회상 사이에 거짓 정보를 끼워 넣어 이를 보였다.",
        "참가자들은 꾸며진 부분도 실제 있었던 부분과 같은 확신으로 말했다.",
        "자주 떠올린 기억일수록 가장 잘 보존된 기억이다.",
        "많은 법정이 목격자의 확신을 조심스럽게 다룬다.",
        "기억은 떠올릴 때마다 조각들로부터 다시 지어진다."
      ],
      answer: 2,
      explain: "지문은 A memory you have revisited often is therefore not the best preserved; it is the most edited라고 했다. 자주 떠올린 기억일수록 가장 많이 고쳐진 것이므로 ③이 일치하지 않는다."
    }
  ],
  translation: "우리는 기억을 마치 저장된 물건처럼, 필요할 때마다 손상 없이 꺼내 오는 것처럼 말한다. 증거는 그보다 덜 편안한 쪽을 가리킨다. 회상이라는 행위는 그때마다 기억을 조각들로부터 다시 지어내는 것처럼 보이며, 지금 우리가 아는 것과 기대하는 것과 느끼는 것에 의해 빚어진 그 새 판본이 다시 저장된다. 그러므로 자주 떠올린 기억은 가장 잘 보존된 기억이 아니라 가장 많이 고쳐진 기억이다. 연구자들은 회상과 회상 사이에 참가자들에게 거짓 정보를 조금씩 흘려 넣는 방식으로 이를 입증했다. 꾸며진 내용이 진술 속으로 옮겨 들어가고, 참가자들은 실제로 있었던 부분과 똑같은 확신을 가지고 그것을 이야기한다. 알고 보니 확신은 그 장면이 원래와 얼마나 충실하게 들어맞는가가 아니라 얼마나 선명하게 떠오르는가를 따라간다. 이는 증언이 무게를 갖는 모든 곳에 영향을 미치며, 많은 법정이 이제 목격자의 확신을 한때 명백한 거짓말의 동기에나 쓰던 조심스러움으로 다루는 이유도 여기에 있다. 불안한 대목은 기억이 실패한다는 사실이 아니다. 실패했다는 어떤 신호도 없이 실패하여, 기억하는 사람에게 더는 실제 일어난 일과 들어맞지 않는 선명하고 상세한 그림만을 남긴다는 점이다."
},
{
  id: "sn-004",
  title: "시간은 누가 정했나",
  passage: "Before the railways, every town kept its own clock, set by the sun at local noon. The difference between neighbouring towns was a matter of minutes, and nobody minded, because nothing moved fast enough for minutes to matter. Trains changed that. A timetable printed in one city was unusable in another, and a few seconds of disagreement between stations could put two engines on the same track. The railway companies, not governments, imposed the solution: a single standard time, carried along the lines and announced by telegraph. Towns resisted. Local time felt natural, and a clock set by a distant office felt like an intrusion — which, in a sense, it was. What the episode illustrates is how thoroughly a convention can come to seem like a fact of nature. Standard time is now so embedded that the arbitrary part has become invisible; we experience eight o'clock as something the world does rather than something we agreed to. Most of the structures we treat as given have this shape. They were once contested, the contest was settled, and the settlement became the air we breathe.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why telegraph lines were laid beside railway tracks",
        "how sundials were used in small country towns",
        "the role of governments in setting public policy",
        "how an agreed convention comes to feel like nature",
        "the engineering problems of early railway travel"
      ],
      answer: 3,
      explain: "표준시가 철도 회사의 편의에서 나온 약속이었는데도 이제는 자연의 사실처럼 느껴진다는 점, 그리고 당연해 보이는 구조들 대부분이 그런 모양을 하고 있다는 것이 논지다. 따라서 ④."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Standard time is now so embedded that ______.",
      choices: [
        "the arbitrary part of it has become invisible",
        "historians have forgotten its original purpose",
        "local clocks have begun to return to use",
        "the railway companies still control it today",
        "no two countries are able to agree on it"
      ],
      answer: 0,
      explain: "지문에 the arbitrary part has become invisible이라고 나온다. 여덟 시를 우리가 합의한 것이 아니라 세상이 하는 일처럼 겪는다는 다음 문장이 이를 풀어 준다."
    },
    {
      type: "implicit",
      prompt: "윗글의 the air we breathe가 의미하는 바로 가장 적절한 것은?",
      target: "the air we breathe",
      choices: [
        "a rule enforced by a central authority",
        "something we no longer notice or question",
        "an agreement that must be renewed each year",
        "a resource that everyone has to pay to use",
        "a problem that keeps growing worse over time"
      ],
      answer: 1,
      explain: "한때 다툼의 대상이던 것이 결론이 나고 나면 \"우리가 숨 쉬는 공기\"가 된다는 비유다. 공기처럼 늘 거기 있어 의식조차 되지 않는 상태를 가리키므로 ②이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 imposed와 의미가 가장 가까운 것은?",
      target: "imposed",
      choices: [
        "suggested",
        "delayed",
        "abandoned",
        "explained",
        "enforced"
      ],
      answer: 4,
      explain: "impose는 \"부과하다, 강제로 시행하다\"라는 뜻이다. 바로 다음에 Towns resisted(마을들이 저항했다)가 이어지는 것으로 보아 권하는 정도가 아니라 밀어붙인 것이므로 enforced가 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Standard time was (A) ______ to solve a practical railway problem, yet it now feels like a fact of nature because the original (B) ______ has been forgotten.",
      choices: [
        "(A) rejected … (B) timetable",
        "(A) agreed on … (B) dispute",
        "(A) agreed on … (B) timetable",
        "(A) discovered … (B) dispute",
        "(A) discovered … (B) technology"
      ],
      answer: 1,
      explain: "표준시는 발견된 것이 아니라 합의된 것이므로 (A)는 agreed on이다. 마을들이 저항했다는 다툼이 잊혔기 때문에 자연의 사실처럼 느껴지는 것이므로 (B)는 dispute."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "마을들은 표준시를 반갑게 받아들였다.",
        "글쓴이는 당연하게 여겨지는 구조들 대부분이 한때 다툼의 대상이었다고 본다.",
        "철도가 놓이기 전에는 마을마다 해를 기준으로 제 시계를 맞췄다.",
        "표준시를 밀어붙인 것은 정부가 아니라 철도 회사들이었다.",
        "이웃한 두 마을의 시간 차이는 몇 분 정도였다."
      ],
      answer: 0,
      explain: "지문은 Towns resisted라고 한 문장으로 못 박고, 먼 사무실이 맞춘 시계가 침범처럼 느껴졌다고 덧붙인다. 따라서 ①이 일치하지 않는다."
    }
  ],
  translation: "철도가 놓이기 전에는 모든 마을이 제 시계를 가지고 있었고, 그 시계는 그 고장의 정오에 뜬 해에 맞춰져 있었다. 이웃한 마을 사이의 차이는 몇 분 정도였고 아무도 개의치 않았다. 분 단위가 문제가 될 만큼 빨리 움직이는 것이 없었기 때문이다. 기차가 그것을 바꿔 놓았다. 한 도시에서 인쇄한 시간표는 다른 도시에서는 쓸 수 없었고, 역과 역 사이의 몇 초 차이가 기관차 두 대를 같은 선로에 올려놓을 수도 있었다. 해법을 밀어붙인 것은 정부가 아니라 철도 회사들이었다. 선로를 따라 실려 가고 전신으로 알려지는 단 하나의 표준시였다. 마을들은 저항했다. 그 고장의 시간은 자연스럽게 느껴졌고, 멀리 있는 사무실이 맞춰 주는 시계는 침범처럼 느껴졌다. 어떤 의미에서는 실제로 그러했다. 이 일화가 보여 주는 것은 하나의 약속이 얼마나 철저하게 자연의 사실처럼 보이게 되는가다. 표준시는 이제 너무 깊이 박혀 있어서 그 임의적인 부분이 보이지 않게 되었다. 우리는 여덟 시를 우리가 합의한 무엇이 아니라 세상이 하는 무엇으로 겪는다. 우리가 주어진 것으로 여기는 구조들 대부분이 이런 모양을 하고 있다. 그것들은 한때 다툼의 대상이었고, 다툼은 결론이 났으며, 그 결론은 우리가 숨 쉬는 공기가 되었다."
},
{
  id: "sn-005",
  title: "만 시간의 조건",
  passage: "Ten thousand hours of practice is said to make an expert, but the figure hides a condition that matters more than the number. Practice builds skill only where the world answers back quickly and consistently. A chess player sees the consequence of a move within the same game; a surgeon learns from outcomes that follow within days. Under those conditions, repetition sharpens judgment. Where feedback is slow, noisy, or absent, experience produces confidence without accuracy. Studies of long-range political forecasters, and of clinicians predicting which patients will relapse, find that practitioners with decades of experience perform little better than novices — and rate themselves far higher. The difference is not effort or intelligence; it is whether the environment permits learning at all. This reframes a familiar piece of advice. Asking how many hours someone has worked in a field tells you less than asking what that field taught them, and how soon it told them they were wrong. Expertise, on this view, is less a property of a person than of the relationship between a person and a world willing to correct them.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the history of the ten-thousand-hour rule",
        "what conditions turn long experience into real expertise",
        "how to choose a reliable political forecaster",
        "why novices usually outperform experienced workers",
        "why chess players practise more hours than surgeons"
      ],
      answer: 1,
      explain: "만 시간이라는 숫자보다 \"환경이 빠르고 일관되게 되돌려 주는가\"라는 조건이 더 중요하다는 것이 논지다. 따라서 ②. ④는 지문의 little better than novices를 과장한 것이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Where feedback is slow, noisy, or absent, experience produces ______.",
      choices: [
        "a steady decline in effort over time",
        "faster decisions and fewer errors",
        "confidence without accuracy",
        "accuracy without confidence",
        "neither skill nor lasting interest"
      ],
      answer: 2,
      explain: "지문 문장을 그대로 묻는 문항이다. 뒤이어 수십 년 경력자가 초심자보다 낫지 않으면서 스스로는 훨씬 높게 평가한다는 연구가 이를 뒷받침한다."
    },
    {
      type: "implicit",
      prompt: "윗글의 a world willing to correct them이 의미하는 바로 가장 적절한 것은?",
      target: "a world willing to correct them",
      choices: [
        "a career that allows frequent changes of direction",
        "a job that comes with clearly written instructions",
        "a field that rewards long years of service",
        "colleagues who offer constant encouragement",
        "an environment that shows mistakes quickly and clearly"
      ],
      answer: 4,
      explain: "앞에서 전문성의 조건으로 the world answers back quickly and consistently를 들었다. 바로잡아 줄 용의가 있는 세계란 틀렸다는 사실을 빨리, 분명히 알려 주는 환경을 말한다."
    },
    {
      type: "vocab",
      prompt: "윗글의 noisy와 의미가 가장 가까운 것은?",
      target: "noisy",
      choices: [
        "urgent",
        "unreliable",
        "public",
        "crowded",
        "loud"
      ],
      answer: 1,
      explain: "noisy는 \"시끄러운\"이 기본 뜻이지만, 신호나 자료를 두고 쓰면 \"잡음이 섞여 믿기 어려운\"이라는 뜻이 된다. slow, absent와 나란히 놓인 자리이므로 unreliable이 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Hours of practice build expertise only where the environment returns (A) ______ feedback; otherwise long experience raises (B) ______ instead of skill.",
      choices: [
        "(A) prompt and clear … (B) curiosity",
        "(A) prompt and clear … (B) self-assurance",
        "(A) rare and delayed … (B) self-assurance",
        "(A) rare and delayed … (B) accuracy",
        "(A) gentle and kind … (B) curiosity"
      ],
      answer: 1,
      explain: "조건은 the world answers back quickly and consistently이므로 (A)는 prompt and clear다. 그렇지 않으면 confidence without accuracy가 쌓인다고 했으므로 (B)는 self-assurance."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "그들은 자신을 초심자보다 낮게 평가했다.",
        "글쓴이는 전문성을 사람의 속성이라기보다 사람과 환경의 관계로 본다.",
        "체스 선수는 한 수의 결과를 같은 대국 안에서 확인한다.",
        "외과의는 며칠 안에 따라오는 결과로부터 배운다.",
        "수십 년 경력의 장기 정치 예측가들은 초심자보다 크게 낫지 않았다."
      ],
      answer: 0,
      explain: "지문은 and rate themselves far higher라고 했다. 성과는 초심자와 크게 다르지 않으면서 자기 평가만 훨씬 높았으므로 ①이 뒤집힌 진술이다."
    }
  ],
  translation: "만 시간의 연습이 전문가를 만든다고들 하지만, 그 숫자는 숫자보다 더 중요한 조건 하나를 감추고 있다. 연습이 실력을 쌓아 주는 것은 세계가 빠르고 일관되게 대답해 주는 곳에서뿐이다. 체스 선수는 한 수의 결과를 같은 대국 안에서 본다. 외과의는 며칠 안에 따라오는 결과로부터 배운다. 그런 조건에서는 되풀이가 판단을 날카롭게 만든다. 피드백이 느리거나 잡음이 많거나 아예 없는 곳에서는, 경험이 정확성 없는 확신을 만들어 낸다. 장기 정치 예측가들과, 어떤 환자가 재발할지를 예측하는 임상의들을 조사한 연구들은 수십 년 경력의 전문가가 초심자보다 조금 나을 뿐이면서 자신에 대한 평가는 훨씬 높다는 것을 발견한다. 차이는 노력이나 지능이 아니다. 그 환경이 애초에 배움을 허락하는가 하는 것이다. 이는 익숙한 조언 하나를 다시 짜게 만든다. 어떤 사람이 그 분야에서 몇 시간을 일했는지 묻는 것은, 그 분야가 그에게 무엇을 가르쳤는지, 그리고 그가 틀렸다는 것을 얼마나 일찍 알려 주었는지를 묻는 것보다 덜 알려 준다. 이런 관점에서 보면 전문성은 한 사람의 속성이라기보다, 그 사람과 그를 기꺼이 바로잡아 주는 세계 사이의 관계에 가깝다."
}
];

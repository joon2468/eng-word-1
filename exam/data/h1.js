/* 고1 독해 세트 — 모두 창작 지문입니다. 실제 기출·EBS 지문이 아닙니다.
   한 세트 = 지문 1개 + 문항 4개(주제 / 빈칸추론 / 어휘 / 내용일치) + 해설 + 해석 + 낱말.

   question.type : 'theme' | 'blank' | 'vocab' | 'detail'
   question.target : vocab 문항에서 지문 안에 표시할 낱말 (지문에 그대로 등장해야 함)
   question.sentence : blank 문항에서 보여 줄 빈칸 문장
   question.answer : choices 배열의 0부터 시작하는 번호

   words : 제출한 뒤 결과 화면에서 보여 줄 어려운 낱말.
     { w 낱말, pos 품사, mean 뜻, ex 예문, ko 예문 해석 }
   - 교과서 Read 꼭지 분량에 맞춰 세트당 고1은 4개, 고2·수능은 5개만 담는다.
   - 예문은 지문에서 베끼지 않고 새로 쓴다. 지문 문장을 그대로 두면 해석을 미리 주는 셈이다.
   - 어휘(vocab)·함축의미(implicit) 문항의 target은 넣지 않는다. 그 낱말의 뜻이 곧 답이다.
   - 낱말은 제출 전에는 화면에 그리지도 않는다 (reading.html의 renderWords 참고). */

const EXAM_SETS_H1 = [
{
  id: "h1-001",
  title: "잠과 기억",
  passage: "When you learn something new, your brain does not finish the job while you are awake. Much of the work happens hours later, while you sleep. During deep sleep, the brain replays the patterns of activity that occurred during learning, strengthening the connections between neurons. Researchers who asked volunteers to memorize word pairs found that those who slept for eight hours afterward recalled far more pairs than those who stayed awake for the same period. The sleeping group had not studied any longer; their brains had simply been given time to file the information away. This is why cramming through the night before an exam often backfires. Students may feel that they are gaining extra study hours, but they are taking away the very process that turns fragile new memories into lasting ones. Sleep, in other words, is not a pause in learning. It is the final stage of it.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the best time of day for studying new material",
        "how stress interferes with long-term memory",
        "why some students need more sleep than others",
        "the danger of relying on memory tricks in exams",
        "the role of sleep in making new memories last"
      ],
      answer: 4,
      explain: "글은 깊은 수면 중 뇌가 학습 당시의 활동을 재생하며 기억을 굳힌다는 점을 실험으로 뒷받침하고, 마지막에 \"수면은 학습의 마지막 단계\"라고 못 박는다. 따라서 주제는 ⑤. ①은 공부 시간대, ②는 스트레스, ④는 암기 요령 이야기로 지문에 없고, ③ 개인차도 언급되지 않는다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Students who cram all night may feel they are gaining study hours, but in fact they are ______.",
      choices: [
        "learning more words than they could in daytime",
        "improving their ability to focus under pressure",
        "reducing the amount of material they must review",
        "removing the process that makes memories last",
        "repeating material they have already mastered"
      ],
      answer: 3,
      explain: "빈칸 문장은 \"공부 시간을 버는 것처럼 느끼지만 사실은 ~\"이라는 대조 구조다. 지문은 밤샘이 \"약한 새 기억을 오래가는 기억으로 바꾸는 바로 그 과정\", 즉 잠을 없애 버린다고 했으므로 ④가 적절하다."
    },
    {
      type: "vocab",
      prompt: "윗글의 fragile과 의미가 가장 가까운 것은?",
      target: "fragile",
      choices: [
        "familiar",
        "obvious",
        "useful",
        "complex",
        "delicate"
      ],
      answer: 4,
      explain: "fragile은 \"깨지기 쉬운, 불안정한\"이라는 뜻이다. 여기서는 갓 만들어진 기억이 아직 약하다는 의미이므로 delicate(연약한)가 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "시험 전날 밤을 새우는 공부는 오히려 역효과를 내는 경우가 많다.",
        "잠을 잔 집단은 깨어 있던 집단보다 공부한 시간이 더 길었다.",
        "실험에서 잠을 잔 집단이 깨어 있던 집단보다 더 많은 단어 쌍을 기억해 냈다.",
        "글쓴이는 수면을 학습이 끝난 뒤의 휴식이 아니라 학습의 마지막 단계로 본다.",
        "깊은 수면 중에 뇌는 학습할 때 일어났던 활동 패턴을 다시 재생한다."
      ],
      answer: 1,
      explain: "지문에 The sleeping group had not studied any longer(잠을 잔 집단이 더 오래 공부한 것은 아니었다)라고 분명히 나온다. 두 집단의 공부량은 같았고 차이는 잠뿐이었으므로 ②가 일치하지 않는다."
    }
  ],
  translation: "새로운 것을 배울 때, 뇌는 당신이 깨어 있는 동안에 그 일을 끝내지 않는다. 그 작업의 상당 부분은 몇 시간 뒤, 당신이 자는 동안에 일어난다. 깊은 잠에 빠져 있는 동안 뇌는 학습할 때 일어났던 활동 패턴을 다시 재생하면서 신경세포 사이의 연결을 강화한다. 참가자들에게 단어 쌍을 외우게 한 연구자들은, 그 뒤 여덟 시간을 잔 사람들이 같은 시간 동안 깨어 있던 사람들보다 훨씬 많은 단어 쌍을 기억해 낸다는 것을 발견했다. 잠을 잔 집단이 더 오래 공부한 것은 아니었다. 그들의 뇌는 그저 정보를 정리해 넣을 시간을 얻었을 뿐이다. 시험 전날 밤을 새워 벼락치기를 하는 것이 자주 역효과를 내는 이유가 바로 이것이다. 학생들은 공부 시간을 더 버는 것처럼 느낄지 모르지만, 실은 약한 새 기억을 오래가는 기억으로 바꿔 주는 바로 그 과정을 없애고 있는 것이다. 다시 말해 잠은 학습의 중단이 아니다. 그것은 학습의 마지막 단계다.",
  words: [
    { w: "strengthen", pos: "동사", mean: "강화하다, 튼튼하게 하다",
      ex: "Reading aloud every day strengthened her pronunciation.",
      ko: "매일 소리 내어 읽은 것이 그녀의 발음을 다져 주었다." },
    { w: "recall", pos: "동사", mean: "기억해 내다, 떠올리다",
      ex: "I can recall his face but not his name.",
      ko: "그의 얼굴은 떠오르는데 이름은 생각이 나지 않는다." },
    { w: "cram", pos: "동사", mean: "벼락치기로 공부하다; 밀어 넣다",
      ex: "He crammed for the test and forgot everything by Friday.",
      ko: "그는 시험을 벼락치기로 준비했고 금요일이 되자 다 잊어버렸다." },
    { w: "backfire", pos: "동사", mean: "역효과를 내다",
      ex: "The strict rule backfired and made the students noisier.",
      ko: "그 엄격한 규칙은 역효과를 내서 학생들을 더 떠들게 만들었다." }
  ]
},
{
  id: "h1-002",
  title: "재활용의 한계",
  passage: "Most people drop a plastic bottle into a recycling bin and assume the problem is solved. The reality is more complicated. Plastic cannot be recycled endlessly the way glass or aluminum can. Each time plastic is melted and reshaped, its molecular chains grow shorter, and the material becomes weaker. A bottle may be turned into fibre for clothing, and that fibre may later become stuffing for a cushion, but after two or three cycles the material is usually no longer useful and ends up in a landfill. Recycling, therefore, does not close the loop; it merely slows the journey to the dump. Environmental scientists argue that this limitation is precisely why the familiar slogan lists \"reduce\" before \"recycle.\" Cutting the amount of plastic produced in the first place addresses the cause, while recycling only manages the symptom. Treating the bin as a solution may even do harm, by making careless consumption feel responsible.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why glass is gradually replacing plastic in packaging",
        "the health risks of reusing plastic containers",
        "how new technology is making plastic easier to recycle",
        "the rising cost of running city recycling programs",
        "why recycling alone cannot solve the plastic problem"
      ],
      answer: 4,
      explain: "글 전체가 \"플라스틱 재활용에는 물리적 한계가 있으므로 재활용만으로는 문제가 해결되지 않는다\"는 한 가지 논지를 편다. ③은 오히려 지문과 반대이고, ②·④·①은 언급되지 않았다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Because its chains shorten with every cycle, recycling plastic does not close the loop but only ______.",
      choices: [
        "improves the strength of the product",
        "raises the price of new materials",
        "delays its arrival at a landfill",
        "removes the need to sort the waste",
        "increases the demand for clothing fibre"
      ],
      answer: 2,
      explain: "지문의 it merely slows the journey to the dump(쓰레기 매립지로 가는 여정을 늦출 뿐이다)를 바꿔 쓴 문장이다. 따라서 ③이 정답이다. ①은 분자 사슬이 짧아져 약해진다는 내용과 정반대다."
    },
    {
      type: "vocab",
      prompt: "윗글의 limitation과 의미가 가장 가까운 것은?",
      target: "limitation",
      choices: [
        "standard",
        "purpose",
        "tradition",
        "expense",
        "drawback"
      ],
      answer: 4,
      explain: "limitation은 여기서 \"재활용이 안고 있는 한계·약점\"을 가리키므로 drawback(결점, 단점)이 가장 가깝다. expense(비용)는 글에서 다루지 않은 측면이다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "병이 옷의 섬유가 되고 그 섬유가 쿠션 충전재가 되는 식으로 재활용될 수 있다.",
        "플라스틱도 유리나 알루미늄처럼 끝없이 재활용할 수 있다.",
        "글쓴이는 재활용함을 해결책으로 여기는 태도가 해로울 수 있다고 본다.",
        "환경 과학자들은 구호에서 reduce가 recycle보다 앞에 오는 이유를 이 한계에서 찾는다.",
        "플라스틱은 녹여서 다시 만들 때마다 분자 사슬이 짧아진다."
      ],
      answer: 1,
      explain: "지문은 Plastic cannot be recycled endlessly the way glass or aluminum can이라고 하여, 유리·알루미늄과 달리 플라스틱은 무한 재활용이 불가능하다고 분명히 밝힌다. 따라서 ②가 일치하지 않는다."
    }
  ],
  translation: "대부분의 사람은 플라스틱 병을 재활용함에 넣고는 문제가 해결되었다고 여긴다. 현실은 그보다 복잡하다. 플라스틱은 유리나 알루미늄처럼 끝없이 재활용할 수 있는 것이 아니다. 플라스틱을 녹여 다시 모양을 만들 때마다 분자 사슬은 점점 짧아지고 재료는 약해진다. 병 하나가 옷을 만드는 섬유가 되고, 그 섬유가 나중에 쿠션의 충전재가 될 수는 있지만, 두세 번의 순환을 거치고 나면 그 재료는 대개 더는 쓸모가 없어져 매립지로 간다. 그러므로 재활용은 순환의 고리를 닫아 주지 않는다. 그저 쓰레기장으로 가는 여정을 늦출 뿐이다. 환경 과학자들은 바로 이 한계 때문에 익숙한 구호가 \"재활용(recycle)\"보다 \"줄이기(reduce)\"를 앞에 둔다고 말한다. 애초에 생산되는 플라스틱의 양을 줄이는 것은 원인을 다루는 일이지만, 재활용은 증상을 관리할 뿐이다. 재활용함을 해결책으로 여기는 태도는 무심한 소비를 책임 있는 행동처럼 느끼게 만들어 오히려 해가 될 수도 있다.",
  words: [
    { w: "assume", pos: "동사", mean: "당연히 ~라고 여기다, 가정하다",
      ex: "Do not assume that silence means agreement.",
      ko: "침묵이 동의라고 당연하게 여기지는 마라." },
    { w: "landfill", pos: "명사", mean: "쓰레기 매립지",
      ex: "Half of the city's waste still goes to a landfill.",
      ko: "그 도시 쓰레기의 절반은 여전히 매립지로 간다." },
    { w: "address", pos: "동사", mean: "(문제를) 다루다, 해결에 나서다",
      ex: "The new law addresses the cause, not just the damage.",
      ko: "그 새 법은 피해만이 아니라 원인을 다룬다." },
    { w: "consumption", pos: "명사", mean: "소비, 소비량",
      ex: "Water consumption rises sharply every July.",
      ko: "물 소비량은 해마다 7월에 급격히 늘어난다." }
  ]
},
{
  id: "h1-003",
  title: "도시의 가로수",
  passage: "City planners once treated street trees as decoration — pleasant, but the first thing to cut when budgets tightened. Recent studies have changed that view. A row of mature trees can lower the temperature of a street by several degrees on a summer afternoon, since leaves block sunlight and release water vapour as they cool themselves. In neighbourhoods with dense tree cover, residents use noticeably less electricity for air conditioning. Trees also catch rainwater that would otherwise rush into drains, reducing the floods that follow heavy storms. Perhaps the most surprising finding concerns health: patients in hospital rooms facing trees recover faster and request less pain medication than those facing a brick wall. None of this means that planting trees can replace other measures. But it does mean that a tree is not merely an ornament on a street. It is a piece of the city's infrastructure, as real as a pipe or a power line.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the practical functions that trees serve in a city",
        "the difficulty of keeping street trees alive",
        "the history of public parks in modern cities",
        "why cities should limit electricity use in summer",
        "how hospitals are redesigning patient rooms"
      ],
      answer: 0,
      explain: "글은 가로수가 기온을 낮추고, 전기 사용을 줄이고, 홍수를 완화하고, 환자의 회복을 돕는다는 \"실질적 기능\"을 차례로 들며 나무를 도시 기반시설로 봐야 한다고 결론짓는다. 따라서 ①이 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The author concludes that a street tree should be understood not as decoration but as ______.",
      choices: [
        "a source of seasonal maintenance work",
        "a substitute for large public parks",
        "a symbol of a neighbourhood's wealth",
        "part of the city's infrastructure",
        "the cheapest way to cool a building"
      ],
      answer: 3,
      explain: "마지막 두 문장이 그대로 답을 준다. 나무는 장식(ornament)이 아니라 \"배관이나 전선만큼이나 실재하는 도시의 기반시설\"이라고 했으므로 ④이다. 지문은 나무가 다른 대책을 대신할 수 없다고 했으므로 ②는 오답이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 ornament와 의미가 가장 가까운 것은?",
      target: "ornament",
      choices: [
        "landmark",
        "decoration",
        "obstacle",
        "shelter",
        "investment"
      ],
      answer: 1,
      explain: "ornament는 \"장식(품)\"이라는 뜻으로, 첫 문장의 decoration과 짝을 이루며 글의 처음과 끝을 연결한다. 따라서 decoration이 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "나무가 빽빽한 동네의 주민들은 냉방 전기를 눈에 띄게 적게 쓴다.",
        "글쓴이는 나무 심기가 다른 대책을 대신할 수 있다고 보지는 않는다.",
        "나무가 보이는 병실의 환자들은 진통제를 더 많이 요구했다.",
        "나무는 빗물을 받아 폭우 뒤에 오는 홍수를 줄여 준다.",
        "다 자란 가로수들은 여름 오후 거리의 기온을 몇 도 낮출 수 있다."
      ],
      answer: 2,
      explain: "지문은 request less pain medication, 즉 진통제를 \"덜\" 요구한다고 했다. ③은 more/less를 뒤집은 진술이므로 일치하지 않는다."
    }
  ],
  translation: "도시 계획가들은 한때 가로수를 장식으로 여겼다. 보기에 좋지만 예산이 빠듯해지면 가장 먼저 잘라 내는 항목이었다. 최근의 연구들은 그런 시각을 바꾸어 놓았다. 다 자란 나무들이 늘어선 거리는 여름 오후에 기온이 몇 도 낮아질 수 있는데, 잎이 햇빛을 막고 스스로를 식히면서 수증기를 내보내기 때문이다. 나무가 빽빽한 동네에서는 주민들이 냉방에 쓰는 전기가 눈에 띄게 적다. 나무는 또한 그대로라면 배수구로 쏟아져 들어갔을 빗물을 붙잡아, 폭우 뒤에 뒤따르는 홍수를 줄여 준다. 아마 가장 놀라운 발견은 건강과 관련된 것이다. 나무가 보이는 병실의 환자들은 벽돌 벽을 마주한 환자들보다 더 빨리 회복하고 진통제를 덜 요구한다. 이 가운데 어느 것도 나무를 심는 일이 다른 대책들을 대신할 수 있다는 뜻은 아니다. 하지만 이는 나무가 거리에 놓인 한낱 장식물이 아니라는 뜻이기는 하다. 나무는 배관이나 전선만큼이나 실재하는, 도시 기반시설의 한 부분이다.",
  words: [
    { w: "mature", pos: "형용사", mean: "다 자란, 성숙한",
      ex: "A mature oak can shade an entire yard.",
      ko: "다 자란 떡갈나무 한 그루는 마당 전체에 그늘을 드리울 수 있다." },
    { w: "dense", pos: "형용사", mean: "빽빽한, 밀집한",
      ex: "The path disappeared into dense forest.",
      ko: "그 길은 빽빽한 숲 속으로 사라졌다." },
    { w: "drain", pos: "명사", mean: "배수구, 하수구",
      ex: "Leaves had blocked the drain, so the street flooded.",
      ko: "낙엽이 배수구를 막아서 거리가 물에 잠겼다." },
    { w: "infrastructure", pos: "명사", mean: "기반시설",
      ex: "Roads, pipes, and power lines are basic infrastructure.",
      ko: "도로, 배관, 전선은 기본적인 기반시설이다." }
  ]
},
{
  id: "h1-004",
  title: "생산적 실패",
  passage: "In a well-known classroom experiment, two groups of students were given a set of difficult physics problems. The first group was told to study a worked solution before trying the problems. The second group was told to struggle with the problems first, even though they would almost certainly fail, and only afterward were they shown the solution. On the test that followed, the second group performed better — not slightly, but substantially. Researchers call this \"productive failure.\" The act of wrestling with a problem, even unsuccessfully, forces learners to notice exactly where their understanding breaks down. When the explanation finally arrives, it lands on a mind that has already formed questions, and so it sticks. The lesson is uncomfortable for schools built around smooth, error-free instruction. Learning that feels easy often is easy — and shallow. The struggle that students and teachers instinctively try to avoid may be the part that does the actual teaching.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how test anxiety lowers student performance",
        "why struggling before instruction improves learning",
        "why teachers should assign fewer problems",
        "the best order for teaching difficult physics topics",
        "the advantages of studying in small groups"
      ],
      answer: 1,
      explain: "실험 결과와 \"생산적 실패\"라는 개념을 통해, 설명을 듣기 전에 스스로 씨름하는 과정이 학습을 더 깊게 만든다는 점을 일관되게 주장한다. 물리는 소재일 뿐이므로 ④는 주제가 될 수 없다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "According to the passage, an explanation sticks best when it reaches a learner who has already ______.",
      choices: [
        "received praise for an earlier success",
        "memorized the steps of a worked solution",
        "discussed the topic with several classmates",
        "formed questions by struggling with the problem",
        "read the same material more than once"
      ],
      answer: 3,
      explain: "it lands on a mind that has already formed questions, and so it sticks를 바꿔 쓴 문장이다. 질문이 생긴 머리에 설명이 내려앉아야 오래 남는다고 했으므로 ④이다. ②는 첫 번째 집단의 방식으로, 성적이 더 낮았다."
    },
    {
      type: "vocab",
      prompt: "윗글의 substantially와 의미가 가장 가까운 것은?",
      target: "substantially",
      choices: [
        "considerably",
        "equally",
        "briefly",
        "rarely",
        "temporarily"
      ],
      answer: 0,
      explain: "not slightly, but substantially는 \"조금이 아니라 상당히\"라는 대조다. slightly의 반대말 자리이므로 considerably(상당히)가 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "뒤이어 치른 시험에서는 두 번째 집단의 성적이 더 좋았다.",
        "두 번째 집단은 실패할 것이 거의 확실한데도 문제와 먼저 씨름했다.",
        "연구자들은 이런 현상을 \"생산적 실패\"라고 부른다.",
        "글쓴이는 쉽게 느껴지는 학습일수록 내용이 깊다고 본다.",
        "첫 번째 집단은 문제를 풀기 전에 모범 풀이를 먼저 공부했다."
      ],
      answer: 3,
      explain: "지문은 Learning that feels easy often is easy — and shallow, 즉 쉽게 느껴지는 학습은 실제로 쉽고 얕은 경우가 많다고 했다. ④는 이를 정반대로 뒤집었다."
    }
  ],
  translation: "잘 알려진 한 교실 실험에서 두 집단의 학생들에게 어려운 물리 문제 묶음이 주어졌다. 첫 번째 집단은 문제를 풀어 보기 전에 모범 풀이를 공부하라는 지시를 받았다. 두 번째 집단은 거의 틀림없이 실패할 텐데도 문제와 먼저 씨름하라는 지시를 받았고, 풀이는 그 뒤에야 보여 주었다. 이어서 치른 시험에서 두 번째 집단의 성적이 더 좋았다. 조금 더 나은 정도가 아니라 상당히 더 좋았다. 연구자들은 이것을 \"생산적 실패\"라고 부른다. 문제와 씨름하는 행위는, 설령 성공하지 못하더라도, 학습자가 자기 이해가 정확히 어디에서 무너지는지 알아차리게 만든다. 마침내 설명이 도착할 때, 그 설명은 이미 질문이 생겨난 머리 위에 내려앉고, 그래서 오래 남는다. 이 교훈은 매끄럽고 오류 없는 수업을 중심으로 세워진 학교에는 불편한 것이다. 쉽게 느껴지는 학습은 실제로도 쉬운 경우가 많다. 그리고 얕다. 학생도 교사도 본능적으로 피하려 하는 그 씨름이야말로 실제로 가르치는 역할을 하는 부분일지도 모른다.",
  words: [
    { w: "struggle", pos: "동사", mean: "씨름하다, 힘들여 애쓰다",
      ex: "She struggled with the problem for an hour before asking.",
      ko: "그녀는 묻기 전에 한 시간 동안 그 문제와 씨름했다." },
    { w: "instruction", pos: "명사", mean: "수업, 교육; 지시",
      ex: "Good instruction leaves room for mistakes.",
      ko: "좋은 수업은 실수할 여지를 남겨 둔다." },
    { w: "shallow", pos: "형용사", mean: "얕은, 깊이가 없는",
      ex: "His answer was quick but shallow.",
      ko: "그의 대답은 빨랐지만 깊이가 없었다." },
    { w: "instinctively", pos: "부사", mean: "본능적으로",
      ex: "We instinctively avoid whatever feels difficult.",
      ko: "우리는 어렵게 느껴지는 것이면 본능적으로 피한다." }
  ]
},
{
  id: "h1-005",
  title: "추천 알고리즘",
  passage: "Every time you watch a video to the end, skip one after five seconds, or pause to read a comment, a recommendation system records the choice. From millions of such signals it builds a model of what will hold your attention, and it feeds you more of the same. The design is not sinister; it is simply optimized for one goal — keeping you on the platform. The side effect, however, is that the range of what you see slowly narrows. Opinions you already hold are repeated back to you, while views you might disagree with appear less and less often. Users rarely notice this narrowing, because the feed still feels full of variety. Nothing has been hidden from you; it has merely been reordered until the unfamiliar sinks out of reach. The remedy is not to abandon such services but to seek out, deliberately, the sources an algorithm would never choose for you.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how advertisers decide which videos to sponsor",
        "how recommendation systems quietly narrow what users see",
        "why users are spending less time online than before",
        "the technical difficulty of building a video platform",
        "the legal limits on collecting personal information"
      ],
      answer: 1,
      explain: "추천 시스템이 체류 시간을 늘리도록 최적화된 결과, 이용자가 보는 범위가 모르는 사이에 좁아진다는 것이 글의 중심 내용이다. 따라서 ②가 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The narrowing goes unnoticed because nothing is hidden — the unfamiliar is simply ______.",
      choices: [
        "pushed down until it is out of reach",
        "replaced with paid advertisements",
        "deleted from the platform's records",
        "labelled as unreliable by the system",
        "shown only to a small group of users"
      ],
      answer: 0,
      explain: "it has merely been reordered until the unfamiliar sinks out of reach를 바꿔 쓴 문장이다. 숨겨진 것이 아니라 순서가 밀려 손이 닿지 않는 곳으로 가라앉았다는 것이므로 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 sinister와 의미가 가장 가까운 것은?",
      target: "sinister",
      choices: [
        "costly",
        "secret",
        "recent",
        "complex",
        "evil"
      ],
      answer: 4,
      explain: "sinister는 \"악의적인, 불길한\"이라는 뜻이다. \"그 설계는 악의적인 것이 아니라 단지 한 가지 목표에 최적화되어 있을 뿐\"이라는 맥락이므로 evil이 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "추천 시스템은 이용자를 플랫폼에 오래 머물게 하는 데 최적화되어 있다.",
        "동의하지 않을 법한 관점은 점점 더 드물게 나타난다.",
        "이용자들은 보이는 범위가 좁아지는 것을 좀처럼 알아차리지 못한다.",
        "글쓴이는 그런 서비스를 끊는 것이 해법이라고 주장한다.",
        "영상을 끝까지 보는 것도, 5초 만에 넘기는 것도 모두 신호로 기록된다."
      ],
      answer: 3,
      explain: "마지막 문장에서 The remedy is not to abandon such services but to seek out ... deliberately라고 했다. 해법은 서비스를 끊는 것이 아니라 알고리즘이 고르지 않을 출처를 의도적으로 찾아 나서는 것이므로 ④가 일치하지 않는다."
    }
  ],
  translation: "당신이 영상을 끝까지 볼 때마다, 5초 만에 다음으로 넘길 때마다, 혹은 댓글을 읽으려고 멈출 때마다, 추천 시스템은 그 선택을 기록한다. 수백만 개의 그런 신호로부터 시스템은 무엇이 당신의 주의를 붙잡아 둘지에 대한 모형을 만들고, 당신에게 같은 종류를 더 많이 먹인다. 그 설계가 악의적인 것은 아니다. 그저 한 가지 목표, 즉 당신을 플랫폼에 머무르게 하는 데 최적화되어 있을 뿐이다. 그러나 부작용은 당신이 보는 것의 폭이 서서히 좁아진다는 점이다. 이미 가지고 있는 의견은 당신에게 되돌아와 반복되고, 당신이 동의하지 않을 법한 관점은 점점 더 드물게 나타난다. 이용자들은 이 좁아짐을 좀처럼 알아차리지 못하는데, 피드가 여전히 다양함으로 가득 차 있는 것처럼 느껴지기 때문이다. 당신에게서 무언가가 숨겨진 것은 아니다. 다만 낯선 것이 손이 닿지 않는 곳으로 가라앉을 때까지 순서가 바뀌었을 뿐이다. 해법은 그런 서비스를 끊는 것이 아니라, 알고리즘이라면 결코 당신에게 골라 주지 않을 출처를 의도적으로 찾아 나서는 것이다.",
  words: [
    { w: "optimize", pos: "동사", mean: "최적화하다, ~에 맞게 최대로 맞추다",
      ex: "The app is optimized for speed, not for accuracy.",
      ko: "그 앱은 정확성이 아니라 속도에 맞춰 최적화되어 있다." },
    { w: "remedy", pos: "명사", mean: "해법, 해결책; 치료제",
      ex: "The remedy is simple, but nobody likes it.",
      ko: "해법은 간단하지만 아무도 그것을 좋아하지 않는다." },
    { w: "abandon", pos: "동사", mean: "버리다, 그만두다",
      ex: "He abandoned the plan after the first failure.",
      ko: "그는 첫 실패 뒤에 그 계획을 버렸다." },
    { w: "deliberately", pos: "부사", mean: "의도적으로, 일부러",
      ex: "She deliberately chose a book she would disagree with.",
      ko: "그녀는 자기가 동의하지 않을 책을 일부러 골랐다." }
  ]
},
{
  id: "h1-006",
  title: "멀티태스킹의 착각",
  passage: "Students often insist that they study better with several tabs open and a chat window blinking in the corner. Laboratory research tells a different story. The brain does not actually attend to two demanding tasks at once; it switches between them, and each switch carries a cost. Rebuilding the mental context of an essay after glancing at a message takes, on average, far longer than the glance itself. In one study, participants who worked with interruptions needed about forty percent more time to finish the same assignment, and made more errors while doing it. What makes the habit so persistent is that it feels efficient. Switching tasks produces a small burst of novelty, which the brain rewards, so busyness is mistaken for productivity. The remedy recommended by researchers is unglamorous: work in protected blocks of time, with notifications off, and let the messages wait.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "why doing several things at once slows work down",
        "the best way to organize a weekly study timetable",
        "why laboratory research is hard to apply at school",
        "how chatting with friends improves a student’s mood",
        "the amount of sleep students need before an exam"
      ],
      answer: 0,
      explain: "뇌는 두 과제를 동시에 하지 못하고 전환하며, 그 전환마다 시간과 오류라는 비용이 든다는 것이 글의 중심이다. 따라서 ①. ②는 해결책 한 줄에서만 스치듯 나오고, ④·③·⑤는 언급되지 않는다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Switching tasks gives a small burst of novelty, and that is why busyness is ______.",
      choices: [
        "shared with other students",
        "forgotten within a few seconds",
        "limited to short assignments",
        "mistaken for productivity",
        "rewarded with better grades"
      ],
      answer: 3,
      explain: "so busyness is mistaken for productivity를 그대로 묻는 문항이다. 전환이 주는 새로움을 뇌가 보상하기 때문에 \"바쁨\"이 \"생산성\"으로 오인된다고 했다."
    },
    {
      type: "vocab",
      prompt: "윗글의 persistent와 의미가 가장 가까운 것은?",
      target: "persistent",
      choices: [
        "popular",
        "enduring",
        "sudden",
        "costly",
        "harmful"
      ],
      answer: 1,
      explain: "persistent는 \"좀처럼 사라지지 않는, 끈질긴\"이라는 뜻이다. 그 습관이 왜 이토록 오래 이어지는가를 설명하는 자리이므로 enduring이 가장 가깝다. 해로운 것은 사실이지만 harmful은 단어 자체의 뜻이 아니다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "방해를 받은 참가자들은 시간만 더 걸렸을 뿐 실수가 늘지는 않았다.",
        "뇌는 까다로운 두 과제를 동시에 처리하는 대신 둘 사이를 오간다.",
        "과제를 전환할 때마다 비용이 따른다.",
        "한 연구에서 방해를 받은 참가자들은 같은 과제를 끝내는 데 약 40% 더 걸렸다.",
        "연구자들이 권하는 해법은 알림을 끄고 보호된 시간 블록에서 일하는 것이다."
      ],
      answer: 0,
      explain: "지문은 needed about forty percent more time ... and made more errors while doing it이라고 했다. 시간도 더 걸렸고 실수도 더 많았으므로 ①이 일치하지 않는다."
    }
  ],
  translation: "학생들은 탭을 여러 개 열어 두고 구석에서 채팅 창이 깜빡이는 상태에서 공부가 더 잘된다고 우기곤 한다. 실험실 연구는 다른 이야기를 들려준다. 뇌는 실제로는 까다로운 두 과제에 동시에 주의를 기울이지 못한다. 뇌는 그 둘 사이를 오가며, 전환할 때마다 비용이 따른다. 메시지를 힐끗 본 뒤 쓰던 글의 맥락을 머릿속에 다시 세우는 데는 평균적으로 그 힐끗 보는 시간보다 훨씬 오래 걸린다. 한 연구에서 방해를 받으며 일한 참가자들은 같은 과제를 끝내는 데 약 40퍼센트 더 많은 시간이 필요했고, 그러면서 실수도 더 많이 했다. 이 습관을 그토록 끈질기게 만드는 것은 그것이 효율적으로 \"느껴진다\"는 점이다. 과제를 바꾸는 일은 작은 새로움의 분출을 만들어 내고 뇌는 그것에 보상을 주기 때문에, 바쁨이 생산성으로 오인된다. 연구자들이 권하는 해법은 전혀 멋있지 않다. 알림을 꺼 둔 채 보호된 시간 덩어리 안에서 일하고, 메시지는 기다리게 두라는 것이다.",
  words: [
    { w: "insist", pos: "동사", mean: "우기다, 강하게 주장하다",
      ex: "He insists that music helps him concentrate.",
      ko: "그는 음악이 집중에 도움이 된다고 우긴다." },
    { w: "demanding", pos: "형용사", mean: "많은 것을 요구하는, 까다로운",
      ex: "Translation is more demanding than it looks.",
      ko: "번역은 보기보다 더 많은 것을 요구하는 일이다." },
    { w: "interruption", pos: "명사", mean: "방해, 중단",
      ex: "One interruption can cost ten minutes of focus.",
      ko: "방해 한 번이 집중한 시간 10분을 앗아갈 수 있다." },
    { w: "novelty", pos: "명사", mean: "새로움, 신기함",
      ex: "The novelty of the new app wore off in a week.",
      ko: "그 새 앱의 신기함은 일주일 만에 사라졌다." }
  ]
},
{
  id: "h1-007",
  title: "꿀벌만의 문제가 아니다",
  passage: "About a third of the food on a typical dinner table depends on insect pollination, and honeybees do much of that work. Yet honeybees are not the only pollinators, nor always the best. Wild bees, which live alone rather than in hives, often visit flowers that honeybees ignore, and some crops are pollinated far more effectively by them. This matters because conservation campaigns have focused almost entirely on the honeybee, an animal that is, after all, a managed farm species. Its numbers rise and fall with the beekeeping industry. Wild bees receive far less attention, though many of their populations are shrinking for reasons that would be easier to fix: the loss of hedgerows, of bare ground for nesting, and of flowering plants between crop seasons. Protecting pollination, then, is less about saving one famous insect than about leaving messy, flowering corners in a landscape that farming has made uniform.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how beekeepers increase the size of their hives",
        "why wild bees deserve as much attention as honeybees",
        "why honeybees travel farther than other insects",
        "the history of farming in flat, open landscapes",
        "the kinds of crops that need no pollination at all"
      ],
      answer: 1,
      explain: "글은 보호 운동이 꿀벌에만 쏠려 있다는 점을 지적하고, 정작 손보기 쉬운 이유로 줄어드는 야생벌에 주목해야 한다고 말한다. 따라서 ②가 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The author argues that protecting pollination depends less on saving one famous insect than on ______.",
      choices: [
        "importing pollinators from other regions",
        "increasing the number of managed hives",
        "planting a single crop over a wide area",
        "teaching farmers to identify bee species",
        "leaving untidy, flowering corners in farmland"
      ],
      answer: 4,
      explain: "마지막 문장을 바꿔 쓴 문항이다. 농업이 획일적으로 만들어 버린 땅에 \"지저분하고 꽃이 피는 구석\"을 남겨 두는 일이 핵심이라고 했으므로 ⑤이다. ③은 획일화를 더 심하게 만드는 선택지다."
    },
    {
      type: "vocab",
      prompt: "윗글의 uniform과 의미가 가장 가까운 것은?",
      target: "uniform",
      choices: [
        "temporary",
        "crowded",
        "identical",
        "ancient",
        "fertile"
      ],
      answer: 2,
      explain: "여기서 uniform은 \"어디나 똑같은, 획일적인\"이라는 형용사다. 울타리 덤불도 맨땅도 사라진 단조로운 농지를 가리키므로 identical이 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "보호 캠페인은 그동안 야생벌에 거의 집중되어 왔다.",
        "야생벌은 벌집을 이루지 않고 홀로 산다.",
        "어떤 작물은 꿀벌보다 야생벌이 훨씬 효과적으로 수분한다.",
        "꿀벌의 개체 수는 양봉 산업의 사정에 따라 오르내린다.",
        "일반적인 식탁에 오르는 음식의 약 3분의 1이 곤충의 수분에 의존한다."
      ],
      answer: 0,
      explain: "지문은 conservation campaigns have focused almost entirely on the honeybee라고 했다. 관심이 쏠린 쪽은 꿀벌이고 야생벌은 far less attention을 받았으므로 ①이 뒤집힌 진술이다."
    }
  ],
  translation: "일반적인 저녁 식탁에 오르는 음식의 약 3분의 1은 곤충의 수분에 의존하며, 그 일의 상당 부분을 꿀벌이 한다. 그러나 꿀벌이 유일한 수분 매개자도 아니고, 언제나 최고인 것도 아니다. 벌집을 이루지 않고 홀로 사는 야생벌은 꿀벌이 거들떠보지 않는 꽃을 자주 찾고, 어떤 작물은 야생벌이 훨씬 효과적으로 수분한다. 이것이 중요한 이유는 보호 캠페인이 거의 전적으로 꿀벌에만 집중해 왔기 때문이다. 꿀벌은 따지고 보면 사람이 관리하는 가축에 가까운 종이다. 그 개체 수는 양봉 산업의 사정에 따라 오르내린다. 야생벌은 훨씬 적은 관심을 받지만, 그들 중 많은 개체군은 오히려 손보기 더 쉬운 이유들 때문에 줄어들고 있다. 울타리 덤불이 사라지고, 둥지를 틀 맨땅이 사라지고, 작물 재배기 사이사이에 피던 꽃들이 사라진 것이다. 그러므로 수분을 지키는 일은 유명한 곤충 한 종을 구하는 문제라기보다, 농업이 획일적으로 만들어 놓은 땅에 지저분하게 꽃이 피는 구석들을 남겨 두는 문제에 가깝다.",
  words: [
    { w: "pollination", pos: "명사", mean: "수분(꽃가루받이)",
      ex: "Without pollination, the apple trees bear no fruit.",
      ko: "수분이 없으면 사과나무는 열매를 맺지 못한다." },
    { w: "hive", pos: "명사", mean: "벌집, 벌 떼",
      ex: "A single hive can hold tens of thousands of bees.",
      ko: "벌집 하나에 수만 마리의 벌이 들어갈 수 있다." },
    { w: "conservation", pos: "명사", mean: "(자연) 보호, 보존",
      ex: "The group spends most of its budget on conservation.",
      ko: "그 단체는 예산의 대부분을 자연 보호에 쓴다." },
    { w: "shrink", pos: "동사", mean: "줄어들다, 작아지다",
      ex: "The lake has shrunk to half its former size.",
      ko: "그 호수는 예전 크기의 절반으로 줄어들었다." }
  ]
},
{
  id: "h1-008",
  title: "정직한 지도는 없다",
  passage: "Every flat map of the world tells a lie, because the surface of a sphere cannot be spread onto a rectangle without stretching something. The familiar Mercator projection, drawn in 1569 for sailors, keeps compass directions accurate — an enormous practical virtue for navigation — but it pays for this by enlarging whatever lies far from the equator. On such a map Greenland appears roughly the size of Africa, though Africa is about fourteen times larger. Generations of students have absorbed that distortion without ever being told it was there. Other projections correct the areas but bend the shapes, or keep the shapes but tear the oceans apart. None is simply correct, and asking which map is true is the wrong question. The right one is which distortion a particular map is willing to accept, and whether that choice suits the purpose the map will be used for.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the reasons Africa is larger than people assume",
        "why schools should stop using world maps",
        "why every flat world map must distort something",
        "the process of printing maps in the 16th century",
        "how sailors navigated before modern instruments"
      ],
      answer: 2,
      explain: "구를 평면에 펼치면 무언가는 반드시 늘어난다는 전제에서 출발해, 도법마다 받아들이는 왜곡이 다를 뿐 \"맞는 지도\"는 없다고 결론짓는다. 아프리카 크기는 그 왜곡을 보여 주는 예시이므로 ①은 주제가 아니다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The author says the right question about a map is not whether it is true, but ______.",
      choices: [
        "which distortion it accepts, and why",
        "whether sailors still rely on it",
        "how many colours it uses",
        "how old its projection happens to be",
        "who first drew it, and where"
      ],
      answer: 0,
      explain: "마지막 문장이 곧 답이다. 올바른 질문은 \"그 지도가 어떤 왜곡을 감수하기로 했는가, 그 선택이 용도에 맞는가\"라고 했으므로 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 virtue와 의미가 가장 가까운 것은?",
      target: "virtue",
      choices: [
        "mistake",
        "symbol",
        "duty",
        "advantage",
        "habit"
      ],
      answer: 3,
      explain: "virtue는 흔히 \"미덕\"으로 외우지만 여기서는 \"장점, 이점\"이라는 뜻이다. 항해에 쓸모가 큰 실용적 장점이라는 맥락이므로 advantage가 가장 가깝다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "메르카토르 도법은 나침반 방향을 정확하게 유지해 준다.",
        "면적을 바로잡는 다른 도법들은 대신 모양을 일그러뜨린다.",
        "메르카토르 지도에서 그린란드는 아프리카와 비슷한 크기로 보인다.",
        "메르카토르 도법은 1569년에 뱃사람들을 위해 그려졌다.",
        "실제로는 그린란드가 아프리카보다 약 열네 배 크다."
      ],
      answer: 4,
      explain: "지문은 though Africa is about fourteen times larger라고 했다. 실제로 약 14배 큰 쪽은 아프리카이므로 ⑤는 두 대상을 뒤바꾼 진술이다."
    }
  ],
  translation: "세계를 담은 모든 평면 지도는 거짓말을 한다. 구의 표면은 무언가를 늘리지 않고서는 직사각형 위에 펼쳐질 수 없기 때문이다. 1569년에 뱃사람들을 위해 그려진 익숙한 메르카토르 도법은 나침반 방향을 정확하게 유지해 주는데, 이는 항해에서 대단히 큰 실용적 장점이다. 그러나 그 대가로 적도에서 먼 곳에 있는 것은 무엇이든 크게 부풀린다. 그런 지도에서 그린란드는 아프리카와 거의 같은 크기로 보이지만, 실제로는 아프리카가 약 열네 배 크다. 여러 세대의 학생들이 그런 왜곡이 거기 있다는 말을 한 번도 듣지 못한 채 그것을 받아들였다. 다른 도법들은 면적을 바로잡는 대신 모양을 구부리거나, 모양을 지키는 대신 바다를 찢어 놓는다. 그저 올바른 지도란 없으며, 어느 지도가 참이냐고 묻는 것은 잘못된 질문이다. 올바른 질문은 특정한 지도가 어떤 왜곡을 감수하기로 했는가, 그리고 그 선택이 그 지도가 쓰일 목적에 맞는가 하는 것이다.",
  words: [
    { w: "sphere", pos: "명사", mean: "구(球), 공 모양의 물체",
      ex: "You cannot flatten a sphere without tearing it.",
      ko: "구를 찢지 않고 평평하게 펼 수는 없다." },
    { w: "projection", pos: "명사", mean: "(지도의) 도법, 투영",
      ex: "Every projection sacrifices something.",
      ko: "모든 도법은 무언가를 희생한다." },
    { w: "equator", pos: "명사", mean: "적도",
      ex: "Singapore lies almost exactly on the equator.",
      ko: "싱가포르는 거의 정확히 적도 위에 있다." },
    { w: "distortion", pos: "명사", mean: "왜곡, 뒤틀림",
      ex: "The distortion is largest near the poles.",
      ko: "그 왜곡은 극지방 근처에서 가장 크다." }
  ]
},
{
  id: "h1-009",
  title: "걷기와 뇌",
  passage: "Exercise is usually sold as a way to shape the body, but some of its clearest effects are on the brain. Moderate aerobic activity increases blood flow to the hippocampus, a region central to memory, and raises levels of a protein that helps neurons survive and form new connections. In trials with older adults, those who walked briskly three times a week for a year showed measurable growth in that region, while a stretching group showed the usual age-related shrinkage. The effect is not limited to the elderly. Children who are physically active perform better on tasks requiring attention and self-control, even when such skills are not what the training was aimed at. What is striking is how modest the requirement is. The benefit appears at the level of ordinary walking, not athletic training — which means that the main obstacle is not fitness but sitting still.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "how moderate regular exercise benefits the brain",
        "the link between diet and performance at school",
        "how schools can raise their average test scores",
        "the best training programs for competitive athletes",
        "why older adults lose their memory as they age"
      ],
      answer: 0,
      explain: "해마의 혈류와 단백질, 노인 실험, 아이들의 주의력까지 모두 \"가벼운 운동이 뇌에 주는 이득\"이라는 한 줄기로 모인다. 따라서 ①이 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Since the benefit appears at the level of ordinary walking, the main obstacle is not fitness but ______.",
      choices: [
        "the cost of a gym membership",
        "the shortage of trained coaches",
        "staying seated",
        "a lack of scientific evidence",
        "the difficulty of the exercises"
      ],
      answer: 2,
      explain: "마지막 문장의 the main obstacle is not fitness but sitting still을 바꿔 쓴 것이다. 요구 조건이 보통 걷기 수준으로 낮으니 문제는 체력이 아니라 앉아만 있는 것이라는 뜻이므로 ③이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 modest와 의미가 가장 가까운 것은?",
      target: "modest",
      choices: [
        "small",
        "temporary",
        "expensive",
        "unusual",
        "strict"
      ],
      answer: 0,
      explain: "modest는 사람에게 쓰면 \"겸손한\"이지만, 양이나 조건에 쓰면 \"많지 않은, 대단찮은\"이라는 뜻이다. 바로 뒤에서 운동선수 훈련이 아니라 보통 걷기면 된다고 했으므로 small이 맞다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "운동이 뇌에 주는 이런 효과는 노인에게만 나타난다.",
        "스트레칭을 한 집단에서는 나이에 따른 위축이 나타났다.",
        "일 년간 빠르게 걸은 노인들은 해마 부위에서 측정 가능한 성장을 보였다.",
        "신체 활동이 활발한 아이들은 주의력과 자기 조절이 필요한 과제를 더 잘 해낸다.",
        "중간 강도의 유산소 운동은 해마로 가는 혈류를 늘린다."
      ],
      answer: 0,
      explain: "지문에 The effect is not limited to the elderly라고 분명히 나오고, 곧이어 아이들의 사례가 이어진다. 따라서 ①이 일치하지 않는다."
    }
  ],
  translation: "운동은 보통 몸매를 가꾸는 방법으로 홍보되지만, 그 효과 가운데 가장 분명한 것 몇 가지는 뇌에 나타난다. 중간 강도의 유산소 활동은 기억의 중심 부위인 해마로 가는 혈류를 늘리고, 신경세포가 살아남아 새로운 연결을 만들도록 돕는 단백질의 수치를 높인다. 노인을 대상으로 한 실험에서, 일 년 동안 일주일에 세 번 빠르게 걸은 사람들은 그 부위에서 측정 가능한 성장을 보인 반면, 스트레칭을 한 집단에서는 나이에 따른 흔한 위축이 나타났다. 이 효과는 노인에게만 한정되지 않는다. 신체 활동이 활발한 아이들은 주의력과 자기 조절이 필요한 과제를 더 잘 해내는데, 그런 능력이 훈련의 목표가 아니었을 때조차 그렇다. 놀라운 점은 요구되는 조건이 얼마나 대단찮은가 하는 것이다. 그 이득은 선수의 훈련이 아니라 보통 걷기 수준에서 나타난다. 다시 말해 가장 큰 장애물은 체력이 아니라 가만히 앉아 있는 것이다.",
  words: [
    { w: "moderate", pos: "형용사", mean: "중간 정도의, 적당한",
      ex: "Thirty minutes of moderate exercise is enough.",
      ko: "중간 강도의 운동 30분으로 충분하다." },
    { w: "trial", pos: "명사", mean: "(과학) 실험, 시험",
      ex: "The drug failed in its second trial.",
      ko: "그 약은 두 번째 실험에서 실패했다." },
    { w: "briskly", pos: "부사", mean: "빠르게, 활발하게",
      ex: "He walks briskly to the station every morning.",
      ko: "그는 매일 아침 역까지 빠르게 걷는다." },
    { w: "obstacle", pos: "명사", mean: "장애물, 걸림돌",
      ex: "The main obstacle was not money but habit.",
      ko: "가장 큰 걸림돌은 돈이 아니라 습관이었다." }
  ]
},
{
  id: "h1-010",
  title: "알렉산드리아 도서관",
  passage: "The Library of Alexandria is remembered for how it ended: one great fire that supposedly erased the learning of the ancient world in a single night. Historians now doubt almost every part of that image. There was no single catastrophe. The library declined over centuries, through cuts in royal funding, the expulsion of foreign scholars, neglect of the papyrus rolls that needed constant recopying, and a series of smaller fires and wars. What destroyed it, in other words, was not one dramatic event but the slow withdrawal of the support that had kept it alive. The story survives in its simpler form because a single villain and a single night make a better tale than two hundred years of budget decisions. Yet the duller version carries the more useful warning, since institutions in our own time are far more likely to disappear the second way than the first.",
  questions: [
    {
      type: "theme",
      prompt: "윗글의 주제로 가장 적절한 것은?",
      choices: [
        "the military history of the city of Alexandria",
        "why the library's slow decline matters more than the fire story",
        "why modern libraries should hold larger collections",
        "the kinds of books that ancient libraries collected",
        "how papyrus rolls were made and copied by hand"
      ],
      answer: 1,
      explain: "글은 \"하룻밤의 대화재\"라는 통념을 반박하고, 수백 년에 걸친 지원 철회가 진짜 원인이며 그 밋밋한 설명이 오늘날 더 쓸모 있는 경고라고 말한다. 따라서 ②가 주제다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "Historians now hold that the library was destroyed less by one dramatic event than by ______.",
      choices: [
        "the gradual withdrawal of its support",
        "a sudden change in the written language",
        "competition from newer libraries",
        "an earthquake that damaged the building",
        "the theft of its most valuable rolls"
      ],
      answer: 0,
      explain: "the slow withdrawal of the support that had kept it alive를 바꿔 쓴 문장이다. 자금 삭감, 학자 추방, 두루마리 방치가 모두 \"지원이 서서히 걷힌\" 모습이므로 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 neglect와 의미가 가장 가까운 것은?",
      target: "neglect",
      choices: [
        "storage",
        "disregard",
        "purchase",
        "repair",
        "display"
      ],
      answer: 1,
      explain: "neglect는 \"방치, 소홀히 함\"이라는 뜻의 명사로 쓰였다. 계속 베껴 써야 하는 두루마리를 돌보지 않았다는 맥락이므로 disregard(등한시)가 가장 가깝다. repair(수리)는 정반대다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "파피루스 두루마리는 끊임없이 다시 베껴 써야 하는 것이었다.",
        "역사학자들은 단 한 번의 대재앙이 있었다는 설명을 의심한다.",
        "왕실 지원 삭감과 외국 학자 추방도 쇠퇴의 원인이었다.",
        "단순한 화재 이야기가 살아남은 것은 그것이 사실에 더 가깝기 때문이다.",
        "글쓴이는 오늘날의 기관도 첫 번째보다 두 번째 방식으로 사라질 가능성이 크다고 본다."
      ],
      answer: 3,
      explain: "지문은 because a single villain and a single night make a better tale라고 했다. 단순한 이야기가 남은 이유는 사실이어서가 아니라 더 재미있는 이야기가 되기 때문이므로 ④가 일치하지 않는다."
    }
  ],
  translation: "알렉산드리아 도서관은 그 최후로 기억된다. 하룻밤 사이에 고대 세계의 학문을 지워 버렸다는 한 번의 큰 화재 말이다. 오늘날 역사학자들은 그 그림의 거의 모든 부분을 의심한다. 단 한 번의 대재앙 같은 것은 없었다. 도서관은 수백 년에 걸쳐 쇠퇴했다. 왕실 지원의 삭감, 외국 학자들의 추방, 끊임없이 다시 베껴 써야 했던 파피루스 두루마리에 대한 방치, 그리고 잇따른 작은 화재와 전쟁을 거치면서였다. 다시 말해 도서관을 무너뜨린 것은 한 번의 극적인 사건이 아니라, 그것을 살아 있게 해 주던 지원이 서서히 걷혀 간 일이었다. 그 이야기가 더 단순한 형태로 살아남은 것은, 하나의 악당과 하룻밤이 이백 년에 걸친 예산 결정보다 더 그럴듯한 이야기가 되기 때문이다. 그러나 더 밋밋한 쪽 이야기가 더 쓸모 있는 경고를 담고 있다. 우리 시대의 기관들도 첫 번째보다는 두 번째 방식으로 사라질 가능성이 훨씬 크기 때문이다.",
  words: [
    { w: "supposedly", pos: "부사", mean: "아마, ~라고들 하는",
      ex: "The painting was supposedly lost in the war.",
      ko: "그 그림은 전쟁 중에 사라졌다고들 한다." },
    { w: "catastrophe", pos: "명사", mean: "대재앙, 큰 재난",
      ex: "The flood was the worst catastrophe in the town's history.",
      ko: "그 홍수는 마을 역사상 최악의 재난이었다." },
    { w: "decline", pos: "동사", mean: "쇠퇴하다, 줄어들다",
      ex: "Letter writing declined slowly, not suddenly.",
      ko: "편지 쓰기는 갑자기가 아니라 서서히 쇠퇴했다." },
    { w: "institution", pos: "명사", mean: "기관, 제도",
      ex: "Libraries are among the oldest public institutions.",
      ko: "도서관은 가장 오래된 공공 기관 가운데 하나다." }
  ]
}
];

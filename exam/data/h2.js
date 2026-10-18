/* 고2 독해 세트 — 모두 창작 지문입니다. 실제 기출·EBS 지문이 아닙니다.
   한 세트 = 지문 1개 + 문항 5개(제목 / 빈칸추론 / 어휘 / 요약문 / 내용일치) + 해설 + 해석.
   형식은 exam/data/h1.js와 같습니다. */

const EXAM_SETS_H2 = [
{
  id: "h2-001",
  title: "지표가 목표가 될 때",
  passage: "When a hospital is judged by how many patients survive surgery, something predictable happens: surgeons begin declining the riskiest cases. The survival rate climbs, the ranking improves, and the patients who most needed an operation are quietly turned away. Economists call this Goodhart's law — when a measure becomes a target, it stops being a good measure. The problem is not dishonesty. Most of the people involved are responding sensibly to the rules they have been given; they simply optimize for the number rather than the thing the number was meant to represent. Schools judged by test scores narrow their teaching to the test. Call centres judged by call length hang up on difficult customers. The usual response is to add more measures, but each new target invites a distortion of its own. What actually helps is keeping the measure in the hands of people who understand the work, using it to start conversations rather than to settle them, and accepting that some of what matters most will never fit neatly into a number.",
  questions: [
    {
      type: "title",
      prompt: "윗글의 제목으로 가장 적절한 것은?",
      choices: [
        "How Public Rankings Improved Schools and Clinics",
        "Why Good Measures Go Bad Once They Become Targets",
        "The Rise of Data in Modern Hospital Management",
        "Why Numbers Are More Honest Than Opinions",
        "Teaching to the Test: A Guide for New Teachers"
      ],
      answer: 1,
      explain: "수술 생존율, 시험 점수, 통화 시간이라는 세 가지 예가 모두 \"측정값이 목표가 되는 순간 그 측정값이 망가진다\"는 하나의 법칙을 보여 준다. 따라서 제목은 ②."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The author says the trouble is not dishonesty: people simply ______.",
      choices: [
        "distrust every ranking published by outsiders",
        "refuse to collect any data about their own work",
        "optimize for the number instead of what it stands for",
        "change the rules whenever the results look bad",
        "measure too few outcomes for the data to be useful"
      ],
      answer: 2,
      explain: "they simply optimize for the number rather than the thing the number was meant to represent를 바꿔 쓴 문장이다. 사람들이 부정직해서가 아니라 주어진 규칙에 합리적으로 반응할 뿐이라고 했으므로 ③이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 declining과 의미가 가장 가까운 것은?",
      target: "declining",
      choices: [
        "refusing",
        "delaying",
        "reviewing",
        "reducing",
        "reporting"
      ],
      answer: 0,
      explain: "decline은 \"줄어들다\"와 \"거절하다\" 두 뜻을 가진 다의어다. 여기서는 외과의가 위험한 수술 건을 맡지 않는다는 맥락이므로 refusing이 맞다. 흔히 외우는 reducing을 고르기 쉬운 자리다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Once a measure is used as a target, people (A) ______ the number itself, and adding further targets only (B) ______ the distortion.",
      choices: [
        "(A) chase … (B) spreads",
        "(A) chase … (B) removes",
        "(A) question … (B) delays",
        "(A) ignore … (B) removes",
        "(A) ignore … (B) spreads"
      ],
      answer: 0,
      explain: "사람들은 지표가 가리키던 실체가 아니라 숫자 자체를 좇게 되므로 (A)는 chase다. 또 each new target invites a distortion of its own이라고 했으니 지표를 더하면 왜곡도 함께 번진다. 따라서 (B)는 spreads."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "수술 생존율로 평가받는 병원에서는 외과의가 위험한 환자를 받지 않게 된다.",
        "경제학자들은 이 현상을 굿하트의 법칙이라고 부른다.",
        "통화 시간으로 평가받는 콜센터는 까다로운 고객의 전화를 끊어 버린다.",
        "글쓴이는 지표를 결론을 내리는 수단이 아니라 대화를 여는 수단으로 쓰자고 한다.",
        "글쓴이는 이 문제의 원인이 관련자들의 부정직함에 있다고 본다."
      ],
      answer: 4,
      explain: "지문은 The problem is not dishonesty라고 못 박고, 대부분은 주어진 규칙에 합리적으로 반응하는 것뿐이라고 했다. 따라서 ⑤가 일치하지 않는다."
    }
  ],
  translation: "병원이 수술받은 환자 가운데 몇 명이 살아남았는가로 평가받으면 뻔한 일이 벌어진다. 외과의들이 가장 위험한 환자를 받지 않기 시작하는 것이다. 생존율은 올라가고 순위는 좋아지지만, 수술이 가장 절실했던 환자들은 조용히 돌려보내진다. 경제학자들은 이것을 굿하트의 법칙이라고 부른다. 어떤 측정값이 목표가 되는 순간, 그것은 좋은 측정값이기를 그만둔다는 것이다. 문제는 부정직함이 아니다. 관련된 사람들 대부분은 자신에게 주어진 규칙에 합리적으로 반응하고 있을 뿐이다. 그들은 단지 그 숫자가 대신 나타내기로 되어 있던 실체가 아니라 숫자 자체에 맞춰 최적화할 뿐이다. 시험 점수로 평가받는 학교는 수업을 시험에 맞춰 좁힌다. 통화 시간으로 평가받는 콜센터는 까다로운 고객의 전화를 끊어 버린다. 흔한 대응은 측정 지표를 더 늘리는 것이지만, 새로 생긴 목표는 저마다의 왜곡을 불러들인다. 실제로 도움이 되는 것은 그 지표를 그 일을 아는 사람들의 손에 남겨 두는 것, 지표를 결론을 내리는 수단이 아니라 대화를 여는 수단으로 쓰는 것, 그리고 가장 중요한 것들 가운데 일부는 결코 숫자에 깔끔하게 담기지 않는다는 사실을 받아들이는 것이다."
},
{
  id: "h2-002",
  title: "발명은 혼자 오지 않는다",
  passage: "The light bulb, the telephone, the theory of natural selection — each is remembered as the achievement of a single name, yet each was arrived at by several people within a few years of one another. Historians of science have catalogued hundreds of such simultaneous discoveries. The pattern suggests that inventions are less the product of lone genius than of a moment becoming ready for them. By the time Edison built his bulb, the vacuum pump, cheap glass, and generated electricity all existed; the idea was, in a sense, lying in the open, waiting for someone to assemble it. This does not diminish the inventors. Assembling what lies in the open still takes extraordinary persistence, and the person who finishes first is usually the one who failed most productively beforehand. But it does change what we should learn from them. If timing matters this much, the useful question is not how to become a genius but how to stand where the pieces are already gathering.",
  questions: [
    {
      type: "title",
      prompt: "윗글의 제목으로 가장 적절한 것은?",
      choices: [
        "Inventions Arrive When Their Time Is Ready",
        "The Forgotten Inventors of the Telephone",
        "How Cheap Glass Transformed Ordinary Homes",
        "Edison and the Race to Light the World",
        "Why the Lone Genius Still Matters Most"
      ],
      answer: 0,
      explain: "동시 발견이 수백 건이라는 사실에서 출발해, 발명은 천재 한 사람보다 \"때가 무르익는 것\"의 산물이라고 말한다. 따라서 제목은 ①. ⑤는 글이 반박하는 쪽이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "If timing matters this much, the useful question is not how to become a genius but how to ______.",
      choices: [
        "stand where the pieces are already gathering",
        "avoid any field where others are already working",
        "protect an idea before anyone else sees it",
        "repeat the experiments of earlier inventors",
        "work alone for as long as you possibly can"
      ],
      answer: 0,
      explain: "마지막 문장을 그대로 묻는 문항이다. 때가 그만큼 중요하다면 조각들이 이미 모이고 있는 자리에 서 있는 법을 묻는 것이 쓸모 있다고 했으므로 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 diminish와 의미가 가장 가까운 것은?",
      target: "diminish",
      choices: [
        "confirm",
        "delay",
        "replace",
        "describe",
        "belittle"
      ],
      answer: 4,
      explain: "diminish는 \"줄이다\"이지만 사람을 목적어로 쓰면 \"깎아내리다\"가 된다. 동시 발견이라는 사실이 발명가들의 공로를 깎아내리지는 않는다는 맥락이므로 belittle이 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Simultaneous discoveries suggest that an invention depends less on (A) ______ than on a moment when the necessary pieces are (B) ______.",
      choices: [
        "(A) individual brilliance … (B) already available",
        "(A) careful funding … (B) already available",
        "(A) careful funding … (B) kept secret",
        "(A) public demand … (B) still missing",
        "(A) individual brilliance … (B) still missing"
      ],
      answer: 0,
      explain: "글은 lone genius(개인의 천재성)보다 a moment becoming ready(조각들이 이미 갖춰진 때)가 중요하다고 했다. 에디슨 때 진공 펌프·값싼 유리·전기가 모두 있었다는 예가 (B)를 뒷받침한다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "과학사학자들은 동시 발견 사례를 수백 건 정리해 두었다.",
        "에디슨이 전구를 만들 무렵 진공 펌프와 값싼 유리, 발전된 전기가 이미 있었다.",
        "전구와 전화, 자연선택 이론은 모두 여러 사람이 몇 해 사이에 도달한 것이다.",
        "가장 먼저 완성하는 사람은 대개 그전에 가장 생산적으로 실패한 사람이다.",
        "글쓴이는 동시 발견이라는 사실이 발명가들의 공로를 깎아내린다고 본다."
      ],
      answer: 4,
      explain: "지문에 This does not diminish the inventors라고 분명히 나온다. 열려 있는 것을 조립하는 데도 비범한 끈기가 필요하다고 덧붙이므로 ⑤가 일치하지 않는다."
    }
  ],
  translation: "전구, 전화, 자연선택 이론 — 각각은 한 사람의 이름이 이룬 업적으로 기억되지만, 사실 저마다 여러 사람이 몇 해 사이에 도달한 것이었다. 과학사학자들은 그런 동시 발견 사례를 수백 건 정리해 두었다. 이 양상은 발명이 고독한 천재의 산물이라기보다 어떤 때가 그 발명을 받아들일 준비가 되어 가는 일의 산물임을 시사한다. 에디슨이 전구를 만들 무렵에는 진공 펌프와 값싼 유리와 발전된 전기가 모두 있었다. 말하자면 그 착상은 누군가 조립해 주기를 기다리며 훤히 열린 채 놓여 있었던 셈이다. 그렇다고 이것이 발명가들을 깎아내리지는 않는다. 열린 채 놓여 있는 것을 조립하는 데에도 비범한 끈기가 필요하며, 가장 먼저 끝내는 사람은 대개 그전에 가장 생산적으로 실패한 사람이다. 다만 이것은 우리가 그들에게서 무엇을 배워야 하는지를 바꾼다. 때가 그렇게까지 중요하다면, 쓸모 있는 질문은 어떻게 천재가 되느냐가 아니라 조각들이 이미 모이고 있는 자리에 어떻게 서 있느냐다."
},
{
  id: "h2-003",
  title: "통증은 어디서 만들어지는가",
  passage: "Pain feels like a message sent from an injured body part to the brain, but that is not how it works. The brain does not receive pain; it produces it. Signals arrive from damaged tissue, and the brain weighs them against everything else it knows — where you are, what you expect, whether you are safe — before deciding how much pain to generate. This is why soldiers have walked off battlefields with severe wounds barely noticing them, and why a paper cut can feel unbearable during an anxious week. It also explains the strangest cases, in which pain persists for years in a limb that was amputated long ago. If pain were simply a reading taken from the body, such pain would be impossible. Understanding this does not make pain imaginary; a constructed experience is still an experience. But it opens treatments that a purely mechanical view overlooks, such as working on fear and expectation alongside the tissue itself.",
  questions: [
    {
      type: "title",
      prompt: "윗글의 제목으로 가장 적절한 것은?",
      choices: [
        "Why a Few People Feel No Pain at All",
        "How Soldiers Are Trained to Endure Injury",
        "New Drugs for the Treatment of Chronic Pain",
        "Measuring a Patient’s Pain Level Accurately",
        "Pain Is Built by the Brain, Not Delivered to It"
      ],
      answer: 4,
      explain: "\"뇌는 통증을 받는 것이 아니라 만들어 낸다\"는 한 문장이 글 전체를 끌고 간다. 군인과 환상통은 그 주장을 뒷받침하는 사례이므로 ⑤가 제목이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The author insists that calling pain constructed does not make it ______.",
      choices: [
        "measurable",
        "treatable",
        "dangerous",
        "permanent",
        "imaginary"
      ],
      answer: 4,
      explain: "Understanding this does not make pain imaginary; a constructed experience is still an experience를 묻는 문항이다. 구성된 경험도 엄연한 경험이라고 했으므로 ⑤이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 weighs와 의미가 가장 가까운 것은?",
      target: "weighs",
      choices: [
        "ignores",
        "evaluates",
        "records",
        "carries",
        "increases"
      ],
      answer: 1,
      explain: "weigh는 \"무게를 재다\"에서 나아가 \"견주어 헤아리다\"라는 뜻으로 자주 쓰인다. 뇌가 신호를 다른 정보들과 견주어 본 뒤 통증의 양을 정한다는 맥락이므로 evaluates가 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Because the brain (A) ______ pain after judging the whole situation, treatment can also work on expectation and fear, not only on the (B) ______.",
      choices: [
        "(A) generates … (B) memory of injury",
        "(A) receives … (B) injured tissue",
        "(A) generates … (B) injured tissue",
        "(A) blocks … (B) injured tissue",
        "(A) receives … (B) nervous system"
      ],
      answer: 2,
      explain: "글의 핵심은 뇌가 통증을 \"받는\" 것이 아니라 \"만들어 낸다\"는 것이므로 (A)는 generates다. 마지막 문장이 조직뿐 아니라 두려움과 기대까지 다루는 치료를 말하므로 (B)는 injured tissue."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "뇌는 손상된 조직에서 온 신호를 다른 정보와 견준 뒤 통증의 정도를 정한다.",
        "글쓴이는 통증이 뇌가 구성한 것이므로 실재하지 않는다고 본다.",
        "불안한 시기에는 종이에 벤 상처조차 견디기 어렵게 느껴질 수 있다.",
        "심한 상처를 입고도 거의 느끼지 못한 채 전장을 걸어 나온 군인들이 있었다.",
        "오래전 절단된 팔다리에서 수년 동안 통증이 이어지는 경우가 있다."
      ],
      answer: 1,
      explain: "지문은 a constructed experience is still an experience라고 하여, 구성된 것이라고 해서 통증이 가짜가 되는 것은 아니라고 분명히 밝힌다. 따라서 ②가 일치하지 않는다."
    }
  ],
  translation: "통증은 다친 신체 부위가 뇌로 보내는 메시지처럼 느껴지지만, 실제로는 그렇게 작동하지 않는다. 뇌는 통증을 받는 것이 아니라 만들어 낸다. 손상된 조직에서 신호가 도착하면, 뇌는 그 신호를 자신이 아는 다른 모든 것 — 당신이 어디에 있는지, 무엇을 예상하고 있는지, 안전한지 — 과 견주어 본 뒤에 통증을 얼마나 만들어 낼지 정한다. 심한 상처를 입고도 거의 알아차리지 못한 채 전장을 걸어 나온 군인들이 있었던 이유, 그리고 불안한 한 주에는 종이에 벤 상처조차 견딜 수 없게 느껴지는 이유가 여기에 있다. 이것은 가장 기이한 사례, 즉 오래전에 절단된 팔다리에서 수년 동안 통증이 이어지는 경우도 설명해 준다. 통증이 단지 몸에서 읽어 낸 수치일 뿐이라면 그런 통증은 있을 수 없을 것이다. 이 사실을 이해한다고 해서 통증이 상상 속의 것이 되지는 않는다. 구성된 경험도 여전히 경험이다. 다만 이 이해는 순전히 기계적인 관점이 놓치는 치료법, 이를테면 조직과 더불어 두려움과 기대를 함께 다루는 길을 열어 준다."
},
{
  id: "h2-004",
  title: "색을 가르는 말",
  passage: "Languages carve up the colour spectrum differently. Russian has no single word covering the range English calls blue; it has separate basic terms for the lighter and darker shades, much as English treats red and pink as two colours rather than two kinds of one. Experiments show that Russian speakers are measurably faster at telling apart two blues that fall on opposite sides of that boundary, and the advantage disappears when they are asked to repeat numbers while looking, which suggests that the words themselves are doing the work. It is tempting to conclude that language determines what we are able to see, but the evidence does not reach that far. Russian speakers do not perceive colours that English speakers cannot; they sort them faster. The honest summary is narrower, and more interesting: language does not build the world we perceive, but it lays down paths through it, and a well-worn path is quicker to travel.",
  questions: [
    {
      type: "title",
      prompt: "윗글의 제목으로 가장 적절한 것은?",
      choices: [
        "Language Decides Everything That We Can See",
        "The Biology Behind Colour Blindness Explained",
        "How Painters Learn to Mix Their Own Palettes",
        "What Colour Words Do — and What They Do Not",
        "Why Russian Is Harder to Learn Than English"
      ],
      answer: 3,
      explain: "언어가 색 구별 \"속도\"에는 영향을 주지만 \"보이는 것\" 자체를 바꾸지는 않는다는, 할 수 있는 말과 할 수 없는 말을 가르는 글이다. 따라서 ④. ①은 글이 명시적으로 선을 긋는 주장이다."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The words themselves seem to be doing the work, because the advantage vanishes when speakers must ______ while looking.",
      choices: [
        "name the colours aloud",
        "compare more than two shades",
        "repeat numbers",
        "judge the colours from memory",
        "sit in a darkened room"
      ],
      answer: 2,
      explain: "지문은 the advantage disappears when they are asked to repeat numbers while looking이라고 했다. 말을 쓰는 통로를 막으면 이점이 사라지므로 그 이점이 낱말에서 온다는 근거가 된다."
    },
    {
      type: "vocab",
      prompt: "윗글의 tempting과 의미가 가장 가까운 것은?",
      target: "tempting",
      choices: [
        "obvious",
        "appealing",
        "rare",
        "careless",
        "sudden"
      ],
      answer: 1,
      explain: "It is tempting to conclude ~는 \"~라고 결론짓고 싶어진다\"는 뜻으로, 그렇게 끌리지만 사실은 지나치다는 신호다. 따라서 appealing이 가장 가깝다. obvious(명백한)를 고르면 글의 반박 구조가 깨진다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Colour words do not change what speakers are able to (A) ______, but they make certain distinctions (B) ______ to make.",
      choices: [
        "(A) remember … (B) impossible",
        "(A) name … (B) harder",
        "(A) see … (B) harder",
        "(A) remember … (B) quicker",
        "(A) see … (B) quicker"
      ],
      answer: 4,
      explain: "Russian speakers do not perceive colours English speakers cannot; they sort them faster가 그대로 답을 준다. 보이는 것은 같고 가르는 속도가 빠른 것이므로 (A) see, (B) quicker다."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "숫자를 따라 말하게 하면 그 구별 속도의 이점이 사라진다.",
        "러시아어에는 영어의 blue 범위를 통째로 덮는 단어가 없다.",
        "러시아어 화자는 경계를 사이에 둔 두 파랑을 더 빨리 구별한다.",
        "글쓴이는 언어가 세계를 만들지는 않아도 그 안에 길을 낸다고 본다.",
        "러시아어 화자는 영어 화자가 보지 못하는 색을 본다."
      ],
      answer: 4,
      explain: "지문은 Russian speakers do not perceive colours English speakers cannot라고 분명히 선을 긋는다. 다르게 보이는 것이 아니라 더 빨리 가를 뿐이므로 ⑤가 일치하지 않는다."
    }
  ],
  translation: "언어마다 색의 스펙트럼을 가르는 방식이 다르다. 러시아어에는 영어가 blue라고 부르는 범위를 하나로 덮는 단어가 없다. 밝은 쪽과 어두운 쪽에 각각 기본 단어가 따로 있는데, 이는 영어가 빨강과 분홍을 한 색의 두 종류가 아니라 서로 다른 두 색으로 다루는 것과 비슷하다. 실험에 따르면 러시아어 화자는 그 경계를 사이에 둔 두 파랑을 가려내는 속도가 측정 가능할 만큼 빠르며, 보면서 숫자를 따라 말하게 하면 그 이점이 사라진다. 이는 낱말 자체가 일을 하고 있다는 것을 시사한다. 여기서 언어가 우리가 볼 수 있는 것을 결정한다고 결론짓고 싶어지지만, 증거는 거기까지 가지 않는다. 러시아어 화자가 영어 화자는 보지 못하는 색을 지각하는 것이 아니다. 그들은 더 빨리 분류할 뿐이다. 정직한 요약은 더 좁고, 그래서 더 흥미롭다. 언어는 우리가 지각하는 세계를 만들어 내지는 않지만 그 세계를 가로지르는 길을 내며, 많이 다져진 길은 더 빨리 지날 수 있다."
},
{
  id: "h2-005",
  title: "도시의 새는 다르게 노래한다",
  passage: "Birds that live in cities sing differently from their country relatives. In noisy districts, great tits raise the pitch of their songs, lifting the notes above the low rumble of traffic so that the message still reaches a listener. Researchers who recorded the same species across a single city found that song pitch tracked traffic volume street by street. At first this looks like a tidy success story: the birds adapt, and the city makes room for them. The complication appears when those males return to quieter woodland and sing their high city songs to females raised on the lower version. The song that works in traffic works less well among the trees. Adaptation, in other words, is not the same thing as improvement. An animal that solves the problem in front of it may be building a difference that sets it apart from its own kind — which is, over long enough stretches of time, exactly how new species begin.",
  questions: [
    {
      type: "title",
      prompt: "윗글의 제목으로 가장 적절한 것은?",
      choices: [
        "Teaching Birds to Sing Inside the Laboratory",
        "City Songs: Adapting Is Not the Same as Improving",
        "The Quietest Streets Make the Finest Habitats",
        "Why Great Tits Are Vanishing from Our Cities",
        "How Traffic Noise Is Harming Urban Wildlife"
      ],
      answer: 1,
      explain: "도시 박새가 음높이를 올려 적응했지만 그 노래가 숲에서는 덜 통한다는 사례로 \"적응은 개선이 아니다\"라는 결론에 이른다. 따라서 제목은 ②."
    },
    {
      type: "blank",
      prompt: "다음 빈칸에 들어갈 말로 가장 적절한 것은?",
      sentence: "The passage warns that an animal solving the problem in front of it may end up ______.",
      choices: [
        "set apart from its own kind",
        "returning to the same nest every year",
        "singing far more quietly than before",
        "unable to hear any sound at all",
        "copying the songs of other species"
      ],
      answer: 0,
      explain: "may be building a difference that sets it apart from its own kind를 바꿔 쓴 문장이다. 눈앞의 문제를 푼 결과가 제 무리와의 거리를 만든다는 뜻이므로 ①이다."
    },
    {
      type: "vocab",
      prompt: "윗글의 tidy와 의미가 가장 가까운 것은?",
      target: "tidy",
      choices: [
        "famous",
        "neat",
        "ancient",
        "painful",
        "sudden"
      ],
      answer: 1,
      explain: "tidy는 \"정돈된\"에서 나아가 \"깔끔하게 맞아떨어지는\"이라는 뜻으로 쓰인다. 처음에는 깔끔한 성공담처럼 보인다는 맥락이므로 neat가 맞다."
    },
    {
      type: "summary",
      prompt: "다음 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
      sentence: "Urban great tits sing (A) ______ so as to be heard over traffic, but the same song (B) ______ once they return to quiet woodland.",
      choices: [
        "(A) higher … (B) works even better",
        "(A) more often … (B) works even better",
        "(A) louder … (B) works less well",
        "(A) louder … (B) goes unnoticed",
        "(A) higher … (B) works less well"
      ],
      answer: 4,
      explain: "지문은 raise the pitch, 즉 음높이를 올린다고 했지 소리를 키운다고 하지 않았으므로 (A)는 higher다. 그리고 The song that works in traffic works less well among the trees이므로 (B)는 works less well."
    },
    {
      type: "detail",
      prompt: "윗글의 내용과 일치하지 않는 것은?",
      choices: [
        "시끄러운 지역의 박새는 노랫소리의 음높이를 올린다.",
        "글쓴이는 적응이 곧 개선은 아니라고 본다.",
        "도시에서 쓰던 높은 노래는 조용한 숲에서 더 잘 통한다.",
        "한 도시 안에서도 거리마다 음높이가 교통량을 따라갔다.",
        "조용한 숲의 암컷들은 낮은 음높이의 노래를 들으며 자랐다."
      ],
      answer: 2,
      explain: "지문은 The song that works in traffic works less well among the trees라고 했다. 도시에서 통하던 노래가 숲에서는 덜 통하므로 ③이 일치하지 않는다."
    }
  ],
  translation: "도시에 사는 새들은 시골의 친척들과 다르게 노래한다. 소음이 심한 지역의 박새는 노랫소리의 음높이를 올려, 교통의 낮게 깔린 소음 위로 음을 띄워 보낸다. 그래야 메시지가 듣는 쪽에 가 닿기 때문이다. 한 도시 안에서 같은 종을 녹음한 연구자들은 노래의 음높이가 거리마다 교통량을 따라간다는 것을 발견했다. 처음에는 이것이 깔끔한 성공담처럼 보인다. 새는 적응하고 도시는 그들에게 자리를 내준다는 이야기 말이다. 문제는 그 수컷들이 더 조용한 숲으로 돌아가, 낮은 음높이의 노래를 들으며 자란 암컷들에게 도시에서 쓰던 높은 노래를 부를 때 드러난다. 차 소리 속에서 통하던 노래는 나무들 사이에서는 덜 통한다. 다시 말해 적응은 개선과 같은 것이 아니다. 눈앞의 문제를 풀어낸 동물은 제 무리와 자신을 갈라놓는 차이를 쌓아 가고 있는 것일 수도 있다. 그리고 그것이야말로, 충분히 긴 시간에 걸쳐 보면, 새로운 종이 시작되는 바로 그 방식이다."
}
];

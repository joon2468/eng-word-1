# 개발 규칙 (Claude용)

## 프로젝트 개요
아들의 중학 고급 영단어 학습을 위한 순수 HTML/CSS/JS 웹앱.
서버 없음, 빌드 없음 — 브라우저에서 파일을 직접 열어 사용.

---

## 파일 구조
```
data.js       단어 데이터 (CHAPTERS 배열)
index.html    전체 단어 목록 + 모드 지정
quiz.html     랜덤 퀴즈표 생성 + 인쇄
style.css     공통 스타일 (모든 페이지 공유)
```

---

## 데이터 규칙 (data.js)
- `CHAPTERS` 배열, 챕터당 30단어
- 단어 순서: 열(column) 우선 — 1열 10개 → 2열 10개 → 3열 10개 (CSV 원본 기준)
- 단어 모드는 data.js가 아닌 localStorage(`word_modes`)에 저장
  - 키: `${chapter.id}-${wordIndex}` (예: `"01-0"`)
  - 값: `"basic"` | `"focus"` | `"more"`
  - 미지정 단어는 `"basic"`으로 간주

---

## CSS 규칙 (style.css)
- 모든 색상은 `:root` 변수 사용 (`--color-primary`, `--color-focus` 등)
- nav는 `position: fixed` → body에 `padding-top: 52px` 보정
- 퀴즈 테이블 셀은 `.quiz-table td`에 `padding: 0` 이므로,
  개별 셀 클래스(`.num-cell`, `.word-cell` 등)는 반드시 `.quiz-table td.셀명` 형태로 작성 (specificity 확보)
- 버튼 클래스: `.btn-primary` / `.btn-secondary` / `.btn-toggle-meaning` / `.btn-top` / `.select-btns button`
  - 모두 공통 스타일 적용 (font-family, font-weight, border-radius, transition)
- `@media print` 에서 `print-color-adjust`는 블록 밖 전역에 선언
- `@media print` 블록은 파일 맨 아래에 위치 유지
- 모바일 분기: `@media (max-width: 767px)`

---

## 인쇄 규칙 (quiz.html)

### 인쇄 방식
- **PC**: `<iframe id="print-frame">` 에 내용을 write 후 `iframe.contentWindow.print()` 호출
- **모바일**: `window.open('', '_blank')` 새 창에 내용을 write 후 `win.print()` 호출, `afterprint` 이벤트로 자동 닫기
- 분기 기준: `window.innerWidth < 768`
- ⚠️ 모바일에서 `@media print` + body 클래스 방식은 동작 불안정 (프린터 선택 시 클래스 소실) — 절대 사용 금지
- ⚠️ 모바일에서 iframe 방식은 페이지 전체가 인쇄되는 오류 발생 — 사용 금지

### 인쇄 전용 페이지 구조
- 인쇄 창은 별도 HTML 문서로 구성: `<body class="print-page">`
- style.css를 link로 불러오고, `body.print-page` 기반 스타일로 인쇄 레이아웃 적용
- 인쇄 테이블은 문제용(`buildQuestionPrintHTML`)과 정답용(`buildAnswerPrintHTML`) 별도 함수로 생성
  - 문제용: `#`, `영단어`, `쓰기(빈 td)` — input 요소 없음, placeholder 없음
  - 정답용: `#`, `영단어`, `한글 뜻`
  - 두 테이블 모두 항상 2단 구성 (col-divider 포함)
- 인쇄 창 상단에 `.print-chapter-info` 표시 (단원 번호만, 단원명 제외 — 한 줄 유지)
- 모바일 인쇄 시 테이블에 `print-mobile` 클래스 추가 → 셀 높이만 축소 (`26px`)

### 인쇄 시 th/td 높이
- 기본: `32px` 고정, th padding `0 8px`
- 모바일(`print-mobile`): `26px`

### 기타
- 모바일에서 인쇄 버튼(`.btn-secondary`) 숨김

---

## 퀴즈 로직 (quiz.html)
- 단어 유형 필터: 체크박스 3개 (basic/focus/more) 독립 토글, "전체" 체크박스로 일괄 선택/해제
- 필터 체크가 하나도 없으면 생성 불가
- 셔플: Fisher-Yates, 셔플 후 앞 N개 슬라이스
- 퀴즈표: 데스크탑 2단 구성 (단어 2개씩 한 행, 중간에 `.col-divider` 셀) / 모바일 1단
  - `window.innerWidth < 768` 기준으로 생성 시점에 분기 (resize 대응 없음)
- 단원 체크박스 기본값: 전체 해제

---

## index.html 규칙
- DOM 렌더링: `innerHTML`로 일괄 생성 (createElement 개별 반복 금지 — 성능)
- 이벤트: container에 단일 이벤트 위임 (카드별 리스너 등록 금지)
- 단어 카드 모드 필터: 체크박스 3개 (basic/focus/more) + 전체, 선택된 모드만 카드 표시
- 챕터 이동 select: `#chapter-jump`, 선택 후 자동 리셋, nav 높이(58px) 오프셋 적용
- 챕터 타이틀 옆 `↑ 맨 위` 버튼: `data-top` 속성으로 이벤트 위임 처리

---

## 주의사항
- 외부 라이브러리, CDN 사용 금지 — 순수 HTML/CSS/JS만 사용
- `data.js`의 `CHAPTERS`는 전역 변수로 `<script src="data.js">` 로드 후 사용
- CSS specificity 충돌 주의: `.quiz-table td`가 단순 클래스 선택자보다 우선함

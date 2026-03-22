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
- 문제 인쇄 (`print-question`): 한글 뜻 열 숨김, 입력칸 빈 칸 유지
- 정답 인쇄 (`print-answer`): 입력 열 숨김, 한글 뜻 표시
- `document.body.classList` + `afterprint` 이벤트로 인쇄 모드 클래스 관리
- 인쇄 시 숨길 요소: `nav`, `.quiz-controls`, `.result-meta`, `.page-header`
- 인쇄 시 th/td 높이: `32px` 고정, th padding `0 8px`
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

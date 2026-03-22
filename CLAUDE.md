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
- 버튼은 모두 공통 스타일 적용 (font-family, font-weight, border-radius, box-shadow, transition)
  - `.btn-primary` / `.btn-secondary` / `.select-btns button` / `.btn-toggle-meaning`
- `@media print` 에서 `print-color-adjust`는 블록 밖 전역에 선언

## 인쇄 규칙
- 문제 인쇄 (`print-question`): 한글 뜻 열 숨김, 입력칸 빈 칸 유지
- 정답 인쇄 (`print-answer`): 입력 열 숨김, 한글 뜻 표시
- `document.body.classList` + `afterprint` 이벤트로 인쇄 모드 클래스 관리
- 인쇄 시 숨길 요소: `nav`, `.quiz-controls`, `.result-meta`, `.page-header`
- 인쇄 시 th/td 높이: `32px` 고정, th padding `0 8px`

---

## 퀴즈 로직 (quiz.html)
- 단어 유형 필터: 체크박스 3개 (basic/focus/more) 독립 토글, "전체" 체크박스로 일괄 선택/해제
- 필터 체크가 하나도 없으면 생성 불가
- 셔플: Fisher-Yates, 셔플 후 앞 N개 슬라이스
- 퀴즈표: 2단 구성 (단어 2개씩 한 행, 중간에 `.col-divider` 셀)
- 단원 체크박스 기본값: 전체 해제

---

## 주의사항
- 외부 라이브러리, CDN 사용 금지 — 순수 HTML/CSS/JS만 사용
- `data.js`의 `CHAPTERS`는 전역 변수로 `<script src="data.js">` 로드 후 사용
- `style.css` 수정 시 `@media print` 블록이 파일 맨 아래에 위치하도록 유지
- CSS specificity 충돌 주의: `.quiz-table td`가 단순 클래스 선택자보다 우선함

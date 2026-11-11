# 기본 웹사이트 프레임

- 모든 페이지 콘텐츠의 기본 레이아웃으로 `Base.astro`를 사용한다. 페이지별 콘텐츠는 레이아웃의 `<slot />`에 넣는다.
- 기본 프레임은 사이드바와 메인 콘텐츠 영역으로 구성한다.
- 넓은 화면에서는 사이드바를 왼쪽에 고정하고 메인 콘텐츠를 오른쪽에 둔다.
- 화면 너비가 1023px 이하일 때는 사이드바를 숨기고 삼선 버튼으로 열고 닫는다.
- 메인 콘텐츠 영역은 독립적으로 세로 스크롤하고 스크롤바는 감춘다.
- CSS 초기화에는 `reset-css`를 사용한다.
- 기본 텍스트에는 `public/fonts/NanumSquareRound-Regular.woff2`의 나눔스퀘어라운드 웹폰트를 사용한다.
- `pre`, `code`, `kbd`, `samp`에는 `public/fonts/D2Coding-Regular.woff2`의 D2Coding 웹폰트를 사용한다.
- 두 웹폰트는 `font-display: block`으로 등록한다.
- 페이지 콘텐츠를 감싸는 기본 레이아웃은 `src/layouts/Base.astro`에서 관리한다.

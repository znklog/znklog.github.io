# 포스트 컴포넌트

- 이 폴더의 컴포넌트는 `markdowns` 폴더의 마크다운 콘텐츠를 포스트 형태로 표시하기 위한 용도로 만든다.
- 포스트의 구조와 표현 방식은 이 폴더의 컴포넌트에서 관리한다.

## Post.astro

포스트를 웹페이지로 만들 때 다음 요소를 사용한다.

- 원본 마크다운 파일은 루트의 `markdowns` 폴더에 둔다.
- `src/content.config.ts`에서 Astro Content Collections와 `glob()` 로더로 `markdowns`의 포스트 파일을 수집한다. 파일명과 폴더명이 `[<순서>]<slug>` 형식인 마크다운만 수집한다.
- 포스트 마크다운의 프론트매터에는 `title`, `description`, `updated`를 반드시 포함한다. 세 필드는 모두 문자열이며 `updated`는 유효한 `yyyy-mm-dd` 날짜 문자열이어야 한다. 필드가 없거나 형식이 맞지 않으면 컬렉션 검증에서 오류가 나야 한다.
- `src/components/post/Post.astro`는 포스트 컬렉션 항목이나 Astro Markdown 레이아웃의 콘텐츠를 HTML로 표시한다. 제목, 설명, 수정일 메타데이터와 본문을 렌더링하고 `src/layouts/Base.astro`를 기본 레이아웃으로 사용한다.
- `src/pages/post/[slug].astro`는 컬렉션 항목마다 정적 포스트 경로를 생성한다. 실제 주소는 `도메인/post/slug` 형태로 만든다.

### 마크다운 경로와 slug 규칙

- 기본 경로 구조는 `markdowns/<카테고리>/[<순서>]<slug>.md` 형태로 한다. 카테고리와 그 하위에는 폴더가 있을 수 있으므로 `markdowns`를 재귀적으로 탐색한다.
- `<순서>`는 파일과 폴더의 정렬 순서를 정하기 위한 접두사이며, 대괄호 안에 둔다. 예를 들어 `[0010]something-good.md`의 slug는 `something-good`이다.
- 파일명에 `[<순서>]` 접두사가 없는 마크다운 파일은 파싱하지 않고 건너뛴다.
- 폴더도 `[<순서>]<slug>` 형태로 만들 수 있다. 예를 들어 `markdowns/hobby/[0010]something-good/`은 slug가 `something-good`인 포스트 폴더다.
- 포스트 폴더는 그 안에 `index.md`가 있을 때만 포스트로 파싱한다. 폴더명에 순서 접두사가 없거나 `index.md`가 없으면 해당 폴더를 포스트로 만들지 않는다.
- 폴더형 포스트의 이미지 등 리소스는 마크다운 파일과 같은 폴더에 둘 수 있다. 마크다운에서 `./image01.png`처럼 상대 경로로 참조한 리소스는 Astro가 처리하고 빌드 결과물에 포함하도록 한다.
- 같은 slug를 가진 마크다운이 여러 개 있어도 별도로 탐지하거나 오류를 내지 않는다. 충돌 처리는 Astro의 기본 동작에 맡기며, 어느 항목이 최종 결과가 되는지는 보장하지 않는다.

### 라우트와 정적 빌드

- 파일형 및 폴더형 포스트를 모두 `/post/<slug>` 경로로 만든다. 라우트 파일은 `src/pages/post/[slug].astro`에 둔다.
- `trailingSlash: "never"`와 `build.format: "file"` 설정으로 정적 빌드 시 `/post/<slug>.html` 파일을 생성한다. 배포 환경은 `/post/<slug>` 요청을 해당 파일에 연결해야 한다.

### 홈페이지

- 홈페이지는 `src/pages/index.md`로 작성하고 `Post.astro`를 Markdown 레이아웃으로 사용한다.
- 홈페이지 프론트매터에도 `title`, `description`, `updated`를 포함한다.

### 확장

- 다른 Astro 파일이나 포스트 관련 컴포넌트가 이 폴더에 추가될 수 있다. 파일별 역할과 지침은 해당 컴포넌트의 목적에 맞게 이 문서에 보완한다.

# 페이지와 라우팅

- Astro 페이지와 URL 라우팅은 `pages/`에서 관리한다.
- 홈페이지는 `pages/index.md`로 작성하며 `components/post/Post.astro`를 Markdown 레이아웃으로 사용한다.
- 포스트 상세 페이지는 `pages/post/[slug].astro`에서 구현하고, 포스트 렌더링은 `components/post/Post.astro`에 위임한다.
- 포스트 콘텐츠의 파일 규칙과 메타데이터는 `../markdowns/AGENTS.md` 및 `components/post/AGENTS.md`를 따른다.
- 정적 출력은 `/post/<slug>.html` 형식이며, 배포 호스트가 확장자가 없는 `/post/<slug>` 요청을 대응하는 파일로 제공해야 한다.

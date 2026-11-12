import { defineConfig } from "astro/config";

export default defineConfig({
  trailingSlash: "never",
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  build: {
    format: "file",
  },
});

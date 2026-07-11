import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://minsu5452.github.io",
  integrations: [mdx(), sitemap()],
  // 구 노트 URL은 아티클 허브로 이전했다.
  redirects: {
    "/notes/": "/articles/",
    "/notes/rag-retrieval-strategy-eval/": "/articles/rag-retrieval-strategy-eval/",
    "/notes/marine-case-crossover/": "/articles/marine-case-crossover/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
});

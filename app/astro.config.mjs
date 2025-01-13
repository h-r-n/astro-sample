import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import remarkDirective from "remark-directive";
import config from "./src/config/config.json";
import { rehypeTableWrap } from './src/plugins/rehypeTableWrap'
import { remarkReadingTime } from "./src/plugins/remarkReadingTime";
import { remarkParseDirective } from "./src/plugins/remarkParseDirective";
import { AdmonitionComponent } from "./src/plugins/rehypeComponentAdmonition.mjs";
import rehypeComponents from "rehype-components";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Conversation",
        "@/shortcodes/FaqWrapper",
        "@/shortcodes/Faq",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkDirective,
      remarkParseDirective,
      remarkToc,
      remarkReadingTime,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    rehypePlugins: [
      rehypeTableWrap,
      [
        rehypeComponents,
        {
          components: {
            note: (x, y) => AdmonitionComponent(x, y, "note"),
            tip: (x, y) => AdmonitionComponent(x, y, "tip"),
            important: (x, y) => AdmonitionComponent(x, y, "important"),
            caution: (x, y) => AdmonitionComponent(x, y, "caution"),
            warning: (x, y) => AdmonitionComponent(x, y, "warning"),
          },
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});

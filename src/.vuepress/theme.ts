import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar/index.js";
import sidebar from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.dearxiaojie.top",

  author: {
    name: "Koresamuel",
    url: "https://dearxiaojie.top",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "KoreSamuel/potential",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/KoreSamuel",
      Twitter: "https://twitter.com/dearxiaojie"
    },
  },
  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "",

  displayFooter: true,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "KoreSamuel/potential",
      repoId: "R_kgDOIb-4Mg",
      category: "Announcements",
      categoryId: "DIC_kwDOIb-4Ms4CSkIR",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});

import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Koresamuel",
      description: "一个前端开发者",
    },
  },
  theme,
  shouldPrefetch: false,
});

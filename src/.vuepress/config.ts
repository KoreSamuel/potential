import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/potential/",
  lang: 'zh-CN',
  theme,
  shouldPrefetch: false,
});

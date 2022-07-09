import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  lang: "zh-CN",
  title: "DokiYolo",
  description: "DokiYolo的博客,编程,Java,技术,开发,容器化,云原生,微服务,SpringCloud",

  base: "/",

  theme,

  // alias: {
  //   "@theme-hope/components/HomeHero": path.resolve(
  //     __dirname,
  //     "./components/HomeHero/HomeHero"
  //   )
  // },

  plugins: [

  ]
});

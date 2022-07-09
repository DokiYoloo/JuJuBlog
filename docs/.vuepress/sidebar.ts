import { sidebar } from "vuepress-theme-hope";

// 多条件控制
export default sidebar({
  // 博客的侧边栏 没想好放什么 先走结构自动生成吧
  "/post/": "structure",
  "/notes/": [
    {
      text: "概览",
      icon: "note",
      link: "/notes/",
    }
  ],
  "/worthsee/backend/java": [
    "/worthsee/backend/java/"
  ]
});

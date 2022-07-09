import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博客",
    icon: "home",
    link: "/"
  },
  {
    text: "笔记",
    icon: 'write',
    link: '/home'
  },
  {
    text: "值得一看",
    icon: 'light',
    prefix: '/worthsee',
    children: [
      {
        text: '后端开发',
        icon: 'semantic',
        prefix: '/backend',
        children: [
          { text: 'Java', icon: 'operate', link: '/java' }  // Java全局文章
        ]
      }
    ]
  }
]);

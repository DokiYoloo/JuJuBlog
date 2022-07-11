import { Page } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://blog.ofpp.cn",

  author: {
    name: "DokiYolo",
    url: "https://ofpp.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "dokiyoloo/jujublog",
  repoDisplay: false,

  docsDir: "/docs",

  fullscreen: true,
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  // navbar
  navbar: navbar,

  // 是否显示编辑此页内容
  editLink: false,

  // sidebar
  sidebar: sidebar,

  breadcrumb: true,

  footer: "DokiYolo",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Word", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "会\"一点点\"的编程",
    intro: "/",
    medias: {
      Email: "mailto:857815116@qq.com",
      Gitee: "https://gitee.com/dokiyoloo",
      GitHub: "https://github.com/DokiYoloo",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/posts/testEncrypt.html": ["DokiYolo"],
    },
  },

  plugins: {
    activeHeaderLinks: true,

    copyCode: {
      showInMobile: true
    },

    // 版权插件 复制文案时生效
    copyright: {
      // 如果不是全局启用 那么需要 frontmatter 中设置 copy: true 手动开启
      global: false,
      triggerWords: 1,
      author: "DokiYolo",
    },


    blog: {
      autoExcerpt: true,
      filter: (page: Page) => {
        return !page.frontmatter.home && page.path.startsWith('/post');
      }
    },

    // 如果不需要评论，可以直接删除 comment 配置，
    comment: {
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

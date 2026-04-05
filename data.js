// 书签数据 - 修改这个文件来管理书签
const BOOKMARKS = [
  {
    "id": 1,
    "name": "百度",
    "url": "https://www.baidu.com",
    "category": "常用工具",
    "icon": "https://www.baidu.com/favicon.ico",
    "desc": "百度搜索"
  },
  {
    "id": 2,
    "name": "Google",
    "url": "https://www.google.com",
    "category": "常用工具",
    "icon": "https://www.google.com/favicon.ico",
    "desc": "Google 搜索"
  },
  {
    "id": 3,
    "name": "GitHub",
    "url": "https://github.com",
    "category": "开发",
    "icon": "https://github.com/favicon.ico",
    "desc": "代码托管平台"
  },
  {
    "id": 4,
    "name": "Stack Overflow",
    "url": "https://stackoverflow.com",
    "category": "开发",
    "icon": "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico",
    "desc": "程序员问答社区"
  },
  {
    "id": 5,
    "name": "Bilibili",
    "url": "https://www.bilibili.com",
    "category": "娱乐",
    "icon": "https://www.bilibili.com/favicon.ico",
    "desc": "视频弹幕网站"
  },
  {
    "id": 6,
    "name": "知乎",
    "url": "https://www.zhihu.com",
    "category": "学习",
    "icon": "https://static.zhihu.com/heifetz/favicon.ico",
    "desc": "问答社区"
  },
  {
    "id": 7,
    "name": "MDN Web Docs",
    "url": "https://developer.mozilla.org",
    "category": "开发",
    "icon": "https://developer.mozilla.org/favicon.ico",
    "desc": "Web 开发文档"
  },
  {
    "id": 8,
    "name": "Node.js",
    "url": "https://nodejs.org",
    "category": "开发",
    "icon": "https://nodejs.org/static/images/favicons/favicon.ico",
    "desc": "JavaScript 运行时"
  },
  {
    "id": 9,
    "name": "npm",
    "url": "https://www.npmjs.com",
    "category": "开发",
    "icon": "https://static.npmjs.com/58a196020a1d5d6fef40cc1d2c0e5c09.png",
    "desc": "Node 包管理器"
  },
  {
    "id": 10,
    "name": "Vite",
    "url": "https://vitejs.dev",
    "category": "开发",
    "icon": "https://vitejs.dev/logo.svg",
    "desc": "下一代前端构建工具"
  },
  {
    "id": 11,
    "name": "Tailwind CSS",
    "url": "https://tailwindcss.com",
    "category": "开发",
    "icon": "https://tailwindcss.com/favicon.ico",
    "desc": "实用优先的 CSS 框架"
  },
  {
    "id": 12,
    "name": "ChatGPT",
    "url": "https://chat.openai.com",
    "category": "AI",
    "icon": "https://chat.openai.com/favicon.ico",
    "desc": "OpenAI GPT 对话"
  },
  {
    "id": 13,
    "name": "Claude",
    "url": "https://claude.ai",
    "category": "AI",
    "icon": "https://claude.ai/favicon.ico",
    "desc": "Anthropic AI 助手"
  },
  {
    "id": 14,
    "name": "DeepSeek",
    "url": "https://chat.deepseek.com",
    "category": "AI",
    "icon": "https://chat.deepseek.com/favicon.ico",
    "desc": "深度求索 AI"
  },
  {
    "id": 15,
    "name": "Kimi",
    "url": "https://kimi.moonshot.cn",
    "category": "AI",
    "icon": "https://kimi.moonshot.cn/favicon.ico",
    "desc": "月之暗面 AI"
  },
  {
    "id": 16,
    "name": "菜鸟教程",
    "url": "https://www.runoob.com",
    "category": "学习",
    "icon": "https://static.runoob.com/images/favicon.ico",
    "desc": "编程学习网站"
  },
  {
    "id": 17,
    "name": "廖雪峰的博客",
    "url": "https://www.liaoxuefeng.com",
    "category": "学习",
    "icon": "",
    "desc": "Python/JavaScript 教程"
  },
  {
    "id": 18,
    "name": "LeetCode",
    "url": "https://leetcode.cn",
    "category": "学习",
    "icon": "https://static.leetcode.cn/cn-mono-assets/production/assets/favicon.ico",
    "desc": "算法刷题平台"
  },
  {
    "id": 19,
    "name": "YouTube",
    "url": "https://www.youtube.com",
    "category": "娱乐",
    "icon": "https://www.youtube.com/s/desktop/favicon.ico",
    "desc": "视频网站"
  },
  {
    "id": 20,
    "name": "微博",
    "url": "https://weibo.com",
    "category": "娱乐",
    "icon": "https://weibo.com/favicon.ico",
    "desc": "社交媒体"
  }
];

// 后台管理密码
const ADMIN_PASSWORD = "Shu2026#xK9$mN2";

// 默认图标
const DEFAULT_ICON = "";

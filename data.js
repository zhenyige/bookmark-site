// 书签数据 - 修改这个文件来管理书签
// icon 字段已废弃，图标由名称首字母自动生成彩色方块
const BOOKMARKS = [
  // ===== 常用工具 =====
  {
    id: 1,
    name: "百度",
    url: "https://www.baidu.com",
    category: "常用工具",
    desc: "百度搜索"
  },
  {
    id: 2,
    name: "Google",
    url: "https://www.google.com",
    category: "常用工具",
    desc: "Google 搜索"
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com",
    category: "开发",
    desc: "代码托管平台"
  },
  {
    id: 4,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    category: "开发",
    desc: "程序员问答社区"
  },
  {
    id: 5,
    name: "Bilibili",
    url: "https://www.bilibili.com",
    category: "娱乐",
    desc: "视频弹幕网站"
  },
  {
    id: 6,
    name: "知乎",
    url: "https://www.zhihu.com",
    category: "学习",
    desc: "问答社区"
  },

  // ===== 开发 =====
  {
    id: 7,
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    category: "开发",
    desc: "Web 开发文档"
  },
  {
    id: 8,
    name: "Node.js",
    url: "https://nodejs.org",
    category: "开发",
    desc: "JavaScript 运行时"
  },
  {
    id: 9,
    name: "npm",
    url: "https://www.npmjs.com",
    category: "开发",
    desc: "Node 包管理器"
  },
  {
    id: 10,
    name: "Vite",
    url: "https://vitejs.dev",
    category: "开发",
    desc: "下一代前端构建工具"
  },
  {
    id: 11,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    category: "开发",
    desc: "实用优先的 CSS 框架"
  },

  // ===== AI =====
  {
    id: 12,
    name: "ChatGPT",
    url: "https://chat.openai.com",
    category: "AI",
    desc: "OpenAI GPT 对话"
  },
  {
    id: 13,
    name: "Claude",
    url: "https://claude.ai",
    category: "AI",
    desc: "Anthropic AI 助手"
  },
  {
    id: 14,
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    category: "AI",
    desc: "深度求索 AI"
  },
  {
    id: 15,
    name: "Kimi",
    url: "https://kimi.moonshot.cn",
    category: "AI",
    desc: "月之暗面 AI"
  },

  // ===== 学习 =====
  {
    id: 16,
    name: "菜鸟教程",
    url: "https://www.runoob.com",
    category: "学习",
    desc: "编程学习网站"
  },
  {
    id: 17,
    name: "廖雪峰",
    url: "https://www.liaoxuefeng.com",
    category: "学习",
    desc: "Python/JavaScript 教程"
  },
  {
    id: 18,
    name: "LeetCode",
    url: "https://leetcode.cn",
    category: "学习",
    desc: "算法刷题平台"
  },

  // ===== 娱乐 =====
  {
    id: 19,
    name: "YouTube",
    url: "https://www.youtube.com",
    category: "娱乐",
    desc: "视频网站"
  },
  {
    id: 20,
    name: "微博",
    url: "https://weibo.com",
    category: "娱乐",
    desc: "社交媒体"
  }
];

// 后台管理密码
const ADMIN_PASSWORD = "Shu2026#xK9$mN2";

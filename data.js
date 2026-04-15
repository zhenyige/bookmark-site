// 书签数据
// 图标由名称首字母自动生成彩色方块，无需手动配置
const BOOKMARKS = [

  // ===== 我的 =====

  {
    id: 1,
    name: "我的博客",
    url: "https://blog.1g6.top",
    category: "我的",
    desc: "真一格的博客"
  },
  {
    id: 2,
    name: "真一格书签",
    url: "https://zhenyige.github.io/bookmark-site",
    category: "我的",
    desc: "个人书签导航"
  },

  // ===== AI =====

  {
    id: 10,
    name: "ChatGPT",
    url: "https://chat.openai.com",
    category: "AI",
    desc: "OpenAI GPT-4 对话"
  },
  {
    id: 11,
    name: "Claude",
    url: "https://claude.ai",
    category: "AI",
    desc: "Anthropic AI 助手"
  },
  {
    id: 12,
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    category: "AI",
    desc: "深度求索大模型"
  },
  {
    id: 13,
    name: "Kimi",
    url: "https://kimi.moonshot.cn",
    category: "AI",
    desc: "月之暗面 AI"
  },
  {
    id: 14,
    name: "豆包",
    url: "https://www.doubao.com",
    category: "AI",
    desc: "字节跳动 AI 助手"
  },
  {
    id: 15,
    name: "文心一言",
    url: "https://yiyan.baidu.com",
    category: "AI",
    desc: "百度文心大模型"
  },
  {
    id: 16,
    name: "通义千问",
    url: "https://tongyi.aliyun.com",
    category: "AI",
    desc: "阿里云 AI"
  },
  {
    id: 17,
    name: "智谱清言",
    url: "https://www.zhipuai.cn",
    category: "AI",
    desc: "智谱 AI"
  },
  {
    id: 18,
    name: "讯飞星火",
    url: "https://xinghuo.xfyun.cn",
    category: "AI",
    desc: "科大讯飞 AI"
  },
  {
    id: 19,
    name: "Google Gemini",
    url: "https://gemini.google.com",
    category: "AI",
    desc: "Google AI 助手"
  },
  {
    id: 20,
    name: "Copilot",
    url: "https://copilot.microsoft.com",
    category: "AI",
    desc: "微软 AI 助手"
  },
  {
    id: 21,
    name: "Grok",
    url: "https://x.com/i/grok",
    category: "AI",
    desc: "xAI Grok"
  },
  {
    id: 22,
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    category: "AI",
    desc: "AI 搜索引擎"
  },
  {
    id: 23,
    name: "Phind",
    url: "https://www.phind.com",
    category: "AI",
    desc: "开发者 AI 搜索"
  },
  {
    id: 24,
    name: "Hugging Face",
    url: "https://huggingface.co",
    category: "AI",
    desc: "AI 模型社区"
  },
  {
    id: 25,
    name: "Replicate",
    url: "https://replicate.com",
    category: "AI",
    desc: "AI 模型运行平台"
  },
  {
    id: 26,
    name: "OpenRouter",
    url: "https://openrouter.ai",
    category: "AI",
    desc: "聚合多模型 API 平台"
  },
  {
    id: 27,
    name: "Together AI",
    url: "https://together.ai",
    category: "AI",
    desc: "开源模型 API"
  },
  {
    id: 28,
    name: "Groq",
    url: "https://console.groq.com",
    category: "AI",
    desc: "极速 AI 推理平台"
  },
  {
    id: 29,
    name: "Anthropic API",
    url: "https://console.anthropic.com",
    category: "AI",
    desc: "Claude API"
  },
  {
    id: 30,
    name: "OpenAI API",
    url: "https://platform.openai.com",
    category: "AI",
    desc: "GPT API 控制台"
  },

  // ===== AI 图像 =====

  {
    id: 40,
    name: "Midjourney",
    url: "https://www.midjourney.com",
    category: "AI图像",
    desc: "AI 绘画工具"
  },
  {
    id: 41,
    name: "DALL·E",
    url: "https://openai.com/dall-e-3",
    category: "AI图像",
    desc: "OpenAI 图像生成"
  },
  {
    id: 42,
    name: "Stable Diffusion",
    url: "https://stability.ai",
    category: "AI图像",
    desc: "开源 AI 图像模型"
  },
  {
    id: 43,
    name: "Ideogram",
    url: "https://ideogram.ai",
    category: "AI图像",
    desc: "AI 图像生成"
  },
  {
    id: 44,
    name: "Flux",
    url: "https://blackforestlabs.ai",
    category: "AI图像",
    desc: "Flux AI 图像模型"
  },
  {
    id: 45,
    name: "Leonardo.ai",
    url: "https://leonardo.ai",
    category: "AI图像",
    desc: "AI 游戏资产生成"
  },
  {
    id: 46,
    name: "Civitai",
    url: "https://civitai.com",
    category: "AI图像",
    desc: "AI 图像模型分享"
  },
  {
    id: 47,
    name: "LiblibAI",
    url: "https://www.liblib.ai",
    category: "AI图像",
    desc: "国内 AI 图像平台"
  },
  {
    id: 48,
    name: "通义万相",
    url: "https://tongyi.aliyun.com/wanxiang",
    category: "AI图像",
    desc: "阿里 AI 绘图"
  },
  {
    id: 49,
    name: "秒画",
    url: "https://miaohua.sensetime.com",
    category: "AI图像",
    desc: "商汤 AI 绘画"
  },
  {
    id: 50,
    name: "堆友",
    url: "https://d.design",
    category: "AI图像",
    desc: "阿里 AI 设计工具"
  },
  {
    id: 51,
    name: "标小智",
    url: "https://biaoxiaozhi.com",
    category: "AI图像",
    desc: "AI 生成 LOGO"
  },

  // ===== AI 效率 =====

  {
    id: 60,
    name: "Notion AI",
    url: "https://notion.so",
    category: "AI效率",
    desc: "AI 笔记与文档"
  },
  {
    id: 61,
    name: "秘塔写作猫",
    url: "https://xiezuocat.com",
    category: "AI效率",
    desc: "AI 写作辅助"
  },
  {
    id: 62,
    name: "火山写作",
    url: "https://write.volcengine.com",
    category: "AI效率",
    desc: "字节 AI 写作"
  },
  {
    id: 63,
    name: "讯飞听见",
    url: "https://www.iflyrec.com",
    category: "AI效率",
    desc: "语音转文字"
  },
  {
    id: 64,
    name: "腾讯智影",
    url: "https://zenvideo.qq.com",
    category: "AI效率",
    desc: "AI 视频剪辑"
  },
  {
    id: 65,
    name: "Codeium",
    url: "https://codeium.com",
    category: "AI效率",
    desc: "AI 代码补全（免费）"
  },
  {
    id: 66,
    name: "Cursor",
    url: "https://cursor.sh",
    category: "AI效率",
    desc: "AI 代码编辑器"
  },
  {
    id: 67,
    name: "Windsurf",
    url: "https://codeium.com/windsurf",
    category: "AI效率",
    desc: "AI 代码编辑器"
  },
  {
    id: 68,
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    category: "AI效率",
    desc: "AI 编程助手"
  },
  {
    id: 69,
    name: "Devin",
    url: "https://devin.ai",
    category: "AI效率",
    desc: "AI 软件工程师"
  },
  {
    id: 70,
    name: "V0",
    url: "https://v0.dev",
    category: "AI效率",
    desc: "Vercel AI 生成 UI"
  },
  {
    id: 71,
    name: "Bolt",
    url: "https://bolt.new",
    category: "AI效率",
    desc: "StackBlitz AI 全栈开发"
  },
  {
    id: 72,
    name: "Lovable",
    url: "https://lovable.dev",
    category: "AI效率",
    desc: "AI 应用构建平台"
  },

  // ===== 学习 =====

  {
    id: 80,
    name: "菜鸟教程",
    url: "https://www.runoob.com",
    category: "学习",
    desc: "编程入门教程"
  },
  {
    id: 81,
    name: "廖雪峰",
    url: "https://www.liaoxuefeng.com",
    category: "学习",
    desc: "Python/JavaScript 教程"
  },
  {
    id: 82,
    name: "LeetCode",
    url: "https://leetcode.cn",
    category: "学习",
    desc: "算法刷题平台"
  },
  {
    id: 83,
    name: "LeetCode 英文",
    url: "https://leetcode.com",
    category: "学习",
    desc: "力扣国际版"
  },
  {
    id: 84,
    name: "Bilibili",
    url: "https://www.bilibili.com",
    category: "学习",
    desc: "B站学习资源"
  },
  {
    id: 85,
    name: "中国大学MOOC",
    url: "https://icourse163.org",
    category: "学习",
    desc: "高校在线课程"
  },
  {
    id: 86,
    name: "学堂在线",
    url: "https://xuetangx.com",
    category: "学习",
    desc: "清华大学慕课平台"
  },
  {
    id: 87,
    name: "网易公开课",
    url: "https://open.163.com",
    category: "学习",
    desc: "TED/名校公开课"
  },
  {
    id: 88,
    name: "知乎",
    url: "https://www.zhihu.com",
    category: "学习",
    desc: "问答知识社区"
  },
  {
    id: 89,
    name: "简书",
    url: "https://www.jianshu.com",
    category: "学习",
    desc: "创作分享平台"
  },
  {
    id: 90,
    name: "CSDN",
    url: "https://www.csdn.net",
    category: "学习",
    desc: "程序员社区"
  },
  {
    id: 91,
    name: "SegmentFault",
    url: "https://segmentfault.com",
    category: "学习",
    desc: "技术问答社区"
  },
  {
    id: 92,
    name: "掘金",
    url: "https://juejin.cn",
    category: "学习",
    desc: "字节技术社区"
  },
  {
    id: 93,
    name: "开源中国",
    url: "https://www.oschina.net",
    category: "学习",
    desc: "开源技术社区"
  },
  {
    id: 94,
    name: "V2EX",
    url: "https://www.v2ex.com",
    category: "学习",
    desc: "程序员社区"
  },
  {
    id: 95,
    name: "极客时间",
    url: "https://time.geekbang.org",
    category: "学习",
    desc: "IT 技术专栏"
  },
  {
    id: 96,
    name: "拉勾教育",
    url: "https://edu.lagou.com",
    category: "学习",
    desc: "职业技能课程"
  },
  {
    id: 97,
    name: "网易云课堂",
    url: "https://study.163.com",
    category: "学习",
    desc: "综合在线学习"
  },
  {
    id: 98,
    name: "腾讯课堂",
    url: "https://ke.qq.com",
    category: "学习",
    desc: "在线职业技能学习"
  },
  {
    id: 99,
    name: "Coursera",
    url: "https://www.coursera.org",
    category: "学习",
    desc: "国际名校在线课程"
  },
  {
    id: 100,
    name: "edX",
    url: "https://www.edx.org",
    category: "学习",
    desc: "MIT/Harvard 课程"
  },
  {
    id: 101,
    name: "Udacity",
    url: "https://www.udacity.com",
    category: "学习",
    desc: "硅谷技术课程"
  },
  {
    id: 102,
    name: "Codecademy",
    url: "https://www.codecademy.com",
    category: "学习",
    desc: "互动编程学习"
  },
  {
    id: 103,
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    category: "学习",
    desc: "免费编程训练营"
  },
  {
    id: 104,
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    category: "学习",
    desc: "Web 开发权威文档"
  },
  {
    id: 105,
    name: "W3School",
    url: "https://www.w3school.com.cn",
    category: "学习",
    desc: "Web 入门教程"
  },
  {
    id: 106,
    name: "实验楼",
    url: "https://www.lanqiao.cn",
    category: "学习",
    desc: "IT 动手实验平台"
  },
  {
    id: 107,
    name: "鱼C工作室",
    url: "https://fishc.com.cn",
    category: "学习",
    desc: "零基础学编程"
  },
  {
    id: 108,
    name: "Python123",
    url: "https://python123.io",
    category: "学习",
    desc: "Python 编程学习"
  },
  {
    id: 109,
    name: "我要自学网",
    url: "https://www.51zxw.net",
    category: "学习",
    desc: "职业技能自学"
  },

  // ===== 开发 =====

  {
    id: 120,
    name: "GitHub",
    url: "https://github.com",
    category: "开发",
    desc: "代码托管平台"
  },
  {
    id: 121,
    name: "GitLab",
    url: "https://gitlab.com",
    category: "开发",
    desc: "代码仓库"
  },
  {
    id: 122,
    name: "Gitee",
    url: "https://gitee.com",
    category: "开发",
    desc: "国内代码托管"
  },
  {
    id: 123,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    category: "开发",
    desc: "程序员问答社区"
  },
  {
    id: 124,
    name: "Node.js",
    url: "https://nodejs.org",
    category: "开发",
    desc: "JavaScript 运行时"
  },
  {
    id: 125,
    name: "npm",
    url: "https://www.npmjs.com",
    category: "开发",
    desc: "Node 包管理器"
  },
  {
    id: 126,
    name: "pnpm",
    url: "https://pnpm.io",
    category: "开发",
    desc: "快速 Node 包管理"
  },
  {
    id: 127,
    name: "Vite",
    url: "https://vitejs.dev",
    category: "开发",
    desc: "下一代前端构建工具"
  },
  {
    id: 128,
    name: "Webpack",
    url: "https://webpack.js.org",
    category: "开发",
    desc: "模块打包工具"
  },
  {
    id: 129,
    name: "esbuild",
    url: "https://esbuild.github.io",
    category: "开发",
    desc: "极速 JS 打包压缩"
  },
  {
    id: 130,
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    category: "开发",
    desc: "实用优先 CSS 框架"
  },
  {
    id: 131,
    name: "Bootstrap",
    url: "https://getbootstrap.com",
    category: "开发",
    desc: "前端 CSS 框架"
  },
  {
    id: 132,
    name: "Ant Design",
    url: "https://ant.design",
    category: "开发",
    desc: "阿里 React UI 组件库"
  },
  {
    id: 133,
    name: "Element Plus",
    url: "https://element-plus.org",
    category: "开发",
    desc: "Vue3 UI 组件库"
  },
  {
    id: 134,
    name: "Vue",
    url: "https://vuejs.org",
    category: "开发",
    desc: "渐进式 JavaScript 框架"
  },
  {
    id: 135,
    name: "React",
    url: "https://react.dev",
    category: "开发",
    desc: "构建 UI 的库"
  },
  {
    id: 136,
    name: "Next.js",
    url: "https://nextjs.org",
    category: "开发",
    desc: "React 全栈框架"
  },
  {
    id: 137,
    name: "Nuxt",
    url: "https://nuxt.com",
    category: "开发",
    desc: "Vue 全栈框架"
  },
  {
    id: 138,
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    category: "开发",
    desc: "JavaScript 超集"
  },
  {
    id: 139,
    name: "Python",
    url: "https://www.python.org",
    category: "开发",
    desc: "Python 官网"
  },
  {
    id: 140,
    name: "Go",
    url: "https://go.dev",
    category: "开发",
    desc: "Go 语言官网"
  },
  {
    id: 141,
    name: "Rust",
    url: "https://www.rust-lang.org",
    category: "开发",
    desc: "Rust 语言官网"
  },
  {
    id: 142,
    name: "Docker",
    url: "https://www.docker.com",
    category: "开发",
    desc: "容器化平台"
  },
  {
    id: 143,
    name: "Kubernetes",
    url: "https://kubernetes.io",
    category: "开发",
    desc: "容器编排系统"
  },
  {
    id: 144,
    name: "Postman",
    url: "https://www.postman.com",
    category: "开发",
    desc: "API 测试工具"
  },
  {
    id: 145,
    name: "Insomnia",
    url: "https://insomnia.rest",
    category: "开发",
    desc: "开源 API 测试工具"
  },
  {
    id: 146,
    name: "JSONPlaceholder",
    url: "https://jsonplaceholder.typicode.com",
    category: "开发",
    desc: "免费 REST API 测试"
  },
  {
    id: 147,
    name: "Can I Use",
    url: "https://caniuse.com",
    category: "开发",
    desc: "Web 技术兼容性查询"
  },
  {
    id: 148,
    name: "Regex101",
    url: "https://regex101.com",
    category: "开发",
    desc: "正则表达式测试"
  },
  {
    id: 149,
    name: "CodePen",
    url: "https://codepen.io",
    category: "开发",
    desc: "前端代码试验场"
  },
  {
    id: 150,
    name: "StackBlitz",
    url: "https://stackblitz.com",
    category: "开发",
    desc: "在线 IDE"
  },
  {
    id: 151,
    name: "GitHub Actions",
    url: "https://github.com/features/actions",
    category: "开发",
    desc: "CI/CD 自动化"
  },
  {
    id: 152,
    name: "Vercel",
    url: "https://vercel.com",
    category: "开发",
    desc: "前端部署平台"
  },
  {
    id: 153,
    name: "Netlify",
    url: "https://www.netlify.com",
    category: "开发",
    desc: "静态网站托管"
  },
  {
    id: 154,
    name: "Railway",
    url: "https://railway.app",
    category: "开发",
    desc: "云端部署平台"
  },
  {
    id: 155,
    name: "Render",
    url: "https://render.com",
    category: "开发",
    desc: "全栈云托管"
  },
  {
    id: 156,
    name: "Supabase",
    url: "https://supabase.com",
    category: "开发",
    desc: "开源 Firebase 替代"
  },
  {
    id: 157,
    name: "Cloudflare",
    url: "https://dash.cloudflare.com",
    category: "开发",
    desc: "CDN/域名/DNS"
  },
  {
    id: 158,
    name: "bun",
    url: "https://bun.sh",
    category: "开发",
    desc: "JavaScript 运行时/工具链"
  },
  {
    id: 159,
    name: "Deno",
    url: "https://deno.land",
    category: "开发",
    desc: "现代 JavaScript 运行时"
  },
  {
    id: 160,
    name: "FastAPI",
    url: "https://fastapi.tiangolo.com",
    category: "开发",
    desc: "Python 现代 Web 框架"
  },
  {
    id: 161,
    name: "Prisma",
    url: "https://prisma.io",
    category: "开发",
    desc: "Node/TS ORM"
  },

  // ===== 常用工具 =====

  {
    id: 180,
    name: "百度",
    url: "https://www.baidu.com",
    category: "常用工具",
    desc: "百度搜索"
  },
  {
    id: 181,
    name: "Google",
    url: "https://www.google.com",
    category: "常用工具",
    desc: "Google 搜索"
  },
  {
    id: 182,
    name: "Bing",
    url: "https://www.bing.com",
    category: "常用工具",
    desc: "微软搜索"
  },
  {
    id: 183,
    name: "夸克",
    url: "https://www.quark.cn",
    category: "常用工具",
    desc: "阿里浏览器/搜索"
  },
  {
    id: 184,
    name: "必应",
    url: "https://cn.bing.com",
    category: "常用工具",
    desc: "国内版 Bing"
  },
  {
    id: 185,
    name: "微信",
    url: "https://weixin.qq.com",
    category: "常用工具",
    desc: "微信官网"
  },
  {
    id: 186,
    name: "QQ",
    url: "https://im.qq.com",
    category: "常用工具",
    desc: "腾讯 QQ"
  },
  {
    id: 187,
    name: "Telegram",
    url: "https://telegram.org",
    category: "常用工具",
    desc: "加密通讯"
  },
  {
    id: 188,
    name: "Discord",
    url: "https://discord.com",
    category: "常用工具",
    desc: "社区/游戏通讯"
  },
  {
    id: 189,
    name: "飞书",
    url: "https://www.feishu.cn",
    category: "常用工具",
    desc: "字节企业协作"
  },
  {
    id: 190,
    name: "钉钉",
    url: "https://www.dingtalk.com",
    category: "常用工具",
    desc: "阿里企业协作"
  },
  {
    id: 191,
    name: "企业微信",
    url: "https://work.weixin.qq.com",
    category: "常用工具",
    desc: "腾讯企业协作"
  },
  {
    id: 192,
    name: "Notion",
    url: "https://www.notion.so",
    category: "常用工具",
    desc: "笔记与知识管理"
  },
  {
    id: 193,
    name: "Obsidian",
    url: "https://obsidian.md",
    category: "常用工具",
    desc: "本地笔记软件"
  },
  {
    id: 194,
    name: "印象笔记",
    url: "https://www.yinxiang.com",
    category: "常用工具",
    desc: "Evernote 中国版"
  },
  {
    id: 195,
    name: "有道云笔记",
    url: "https://note.youdao.com",
    category: "常用工具",
    desc: "网易笔记"
  },
  {
    id: 196,
    name: "OneDrive",
    url: "https://www.microsoft.com/microsoft-365/onedrive",
    category: "常用工具",
    desc: "微软云盘"
  },
  {
    id: 197,
    name: "百度网盘",
    url: "https://pan.baidu.com",
    category: "常用工具",
    desc: "百度云盘"
  },
  {
    id: 198,
    name: "阿里云盘",
    url: "https://www.aliyundrive.com",
    category: "常用工具",
    desc: "阿里云盘"
  },
  {
    id: 199,
    name: "夸克网盘",
    url: "https://pan.quark.cn",
    category: "常用工具",
    desc: "夸克云盘"
  },
  {
    id: 200,
    name: "Google Drive",
    url: "https://drive.google.com",
    category: "常用工具",
    desc: "谷歌云盘"
  },
  {
    id: 201,
    name: "Dropbox",
    url: "https://www.dropbox.com",
    category: "常用工具",
    desc: "云存储服务"
  },
  {
    id: 202,
    name: "腾讯文档",
    url: "https://docs.qq.com",
    category: "常用工具",
    desc: "在线协作文档"
  },
  {
    id: 203,
    name: "金山文档",
    url: "https://www.kdocs.cn",
    category: "常用工具",
    desc: "WPS 在线版"
  },
  {
    id: 204,
    name: "石墨文档",
    url: "https://shimo.im",
    category: "常用工具",
    desc: "在线协作文档"
  },
  {
    id: 205,
    name: "语雀",
    url: "https://www.yuque.com",
    category: "常用工具",
    desc: "阿里知识库"
  },
  {
    id: 206,
    name: "DeepL",
    url: "https://www.deepl.com/translator",
    category: "常用工具",
    desc: "AI 翻译工具"
  },
  {
    id: 207,
    name: "Google 翻译",
    url: "https://translate.google.com",
    category: "常用工具",
    desc: "谷歌翻译"
  },
  {
    id: 208,
    name: "Grammarly",
    url: "https://www.grammarly.com",
    category: "常用工具",
    desc: "英语写作检查"
  },
  {
    id: 209,
    name: "Canva",
    url: "https://www.canva.com",
    category: "常用工具",
    desc: "在线设计工具"
  },
  {
    id: 210,
    name: "创客贴",
    url: "https://www.chuangkit.com",
    category: "常用工具",
    desc: "在线图片设计"
  },
  {
    id: 211,
    name: "Figma",
    url: "https://www.figma.com",
    category: "常用工具",
    desc: "在线 UI 设计"
  },
  {
    id: 212,
    name: "蓝湖",
    url: "https://lanhuapp.com",
    category: "常用工具",
    desc: "产品设计协作"
  },
  {
    id: 213,
    name: "幕布",
    url: "https://mubu.com",
    category: "常用工具",
    desc: "思维导图/大纲"
  },
  {
    id: 214,
    name: "ProcessOn",
    url: "https://www.processon.com",
    category: "常用工具",
    desc: "在线流程图"
  },
  {
    id: 215,
    name: "Excalidraw",
    url: "https://excalidraw.com",
    category: "常用工具",
    desc: "手绘风格图表"
  },
  {
    id: 216,
    name: "Miro",
    url: "https://miro.com",
    category: "常用工具",
    desc: "在线白板协作"
  },

  // ===== 视频 =====

  {
    id: 240,
    name: "YouTube",
    url: "https://www.youtube.com",
    category: "视频",
    desc: "全球最大视频平台"
  },
  {
    id: 241,
    name: "哔哩哔哩",
    url: "https://www.bilibili.com",
    category: "视频",
    desc: "B站弹幕视频"
  },
  {
    id: 242,
    name: "抖音",
    url: "https://www.douyin.com",
    category: "视频",
    desc: "字节短视频"
  },
  {
    id: 243,
    name: "快手",
    url: "https://www.kuaishou.com",
    category: "视频",
    desc: "快手短视频"
  },
  {
    id: 244,
    name: "西瓜视频",
    url: "https://www.ixigua.com",
    category: "视频",
    desc: "字节中长视频"
  },
  {
    id: 245,
    name: "爱奇艺",
    url: "https://www.iqiyi.com",
    category: "视频",
    desc: "长视频网站"
  },
  {
    id: 246,
    name: "优酷",
    url: "https://www.youku.com",
    category: "视频",
    desc: "阿里视频平台"
  },
  {
    id: 247,
    name: "腾讯视频",
    url: "https://v.qq.com",
    category: "视频",
    desc: "腾讯视频平台"
  },
  {
    id: 248,
    name: "芒果TV",
    url: "https://www.mgtv.com",
    category: "视频",
    desc: "湖南卫视在线"
  },
  {
    id: 249,
    name: "Netflix",
    url: "https://www.netflix.com",
    category: "视频",
    desc: "全球流媒体"
  },
  {
    id: 250,
    name: "Disney+",
    url: "https://www.disneyplus.com",
    category: "视频",
    desc: "迪士尼流媒体"
  },
  {
    id: 251,
    name: "YouTube Shorts",
    url: "https://www.youtube.com/shorts",
    category: "视频",
    desc: "YouTube 短视频"
  },
  {
    id: 252,
    name: "Vimeo",
    url: "https://vimeo.com",
    category: "视频",
    desc: "专业视频平台"
  },
  {
    id: 253,
    name: "直播吧",
    url: "https://www.zhibo8.cc",
    category: "视频",
    desc: "体育赛事直播"
  },

  // ===== 音乐 =====

  {
    id: 260,
    name: "QQ音乐",
    url: "https://y.qq.com",
    category: "音乐",
    desc: "腾讯音乐"
  },
  {
    id: 261,
    name: "网易云音乐",
    url: "https://music.163.com",
    category: "音乐",
    desc: "网易云音乐"
  },
  {
    id: 262,
    name: "酷狗音乐",
    url: "https://www.kugou.com",
    category: "音乐",
    desc: "酷狗音乐"
  },
  {
    id: 263,
    name: "酷我音乐",
    url: "https://www.kuwo.cn",
    category: "音乐",
    desc: "酷我音乐"
  },
  {
    id: 264,
    name: "Spotify",
    url: "https://www.spotify.com",
    category: "音乐",
    desc: "全球音乐流媒体"
  },
  {
    id: 265,
    name: "Apple Music",
    url: "https://music.apple.com",
    category: "音乐",
    desc: "苹果音乐"
  },
  {
    id: 266,
    name: "SoundCloud",
    url: "https://soundcloud.com",
    category: "音乐",
    desc: "音乐分享平台"
  },
  {
    id: 267,
    name: "Bandcamp",
    url: "https://bandcamp.com",
    category: "音乐",
    desc: "独立音乐市场"
  },

  // ===== 设计 =====

  {
    id: 280,
    name: "Dribbble",
    url: "https://dribbble.com",
    category: "设计",
    desc: "设计师社区"
  },
  {
    id: 281,
    name: "Behance",
    url: "https://www.behance.net",
    category: "设计",
    desc: "Adobe 设计社区"
  },
  {
    id: 282,
    name: "Pinterest",
    url: "https://pinterest.com",
    category: "设计",
    desc: "图片灵感收藏"
  },
  {
    id: 283,
    name: "Unsplash",
    url: "https://unsplash.com",
    category: "设计",
    desc: "免费高清图片"
  },
  {
    id: 284,
    name: "Pexels",
    url: "https://www.pexels.com",
    category: "设计",
    desc: "免费图片素材"
  },
  {
    id: 285,
    name: "Pixabay",
    url: "https://pixabay.com",
    category: "设计",
    desc: "免费图片/视频"
  },
  {
    id: 286,
    name: "花瓣网",
    url: "https://huaban.com",
    category: "设计",
    desc: "国内图片采集"
  },
  {
    id: 287,
    name: "站酷",
    url: "https://www.zcool.com.cn",
    category: "设计",
    desc: "设计师互动社区"
  },
  {
    id: 288,
    name: "优设",
    url: "https://www.uisdc.com",
    category: "设计",
    desc: "设计师资源平台"
  },
  {
    id: 289,
    name: "Iconify",
    url: "https://icon-sets.iconify.design",
    category: "设计",
    desc: "图标库聚合"
  },
  {
    id: 290,
    name: "Font Awesome",
    url: "https://fontawesome.com",
    category: "设计",
    desc: "图标字体"
  },
  {
    id: 291,
    name: "Google Fonts",
    url: "https://fonts.google.com",
    category: "设计",
    desc: "开源字体库"
  },
  {
    id: 292,
    name: "Remove.bg",
    url: "https://www.remove.bg",
    category: "设计",
    desc: "AI 抠图去背景"
  },
  {
    id: 293,
    name: "Bigjpg",
    url: "https://bigjpg.com",
    category: "设计",
    desc: "AI 图片放大"
  },
  {
    id: 294,
    name: "TinyPNG",
    url: "https://tinypng.com",
    category: "设计",
    desc: "图片压缩"
  },
  {
    id: 295,
    name: "Squoosh",
    url: "https://squoosh.app",
    category: "设计",
    desc: "Google 图片压缩"
  },

  // ===== 金融 =====

  {
    id: 320,
    name: "CoinMarketCap",
    url: "https://coinmarketcap.com",
    category: "金融",
    desc: "加密货币行情"
  },
  {
    id: 321,
    name: "CoinGecko",
    url: "https://www.coingecko.com",
    category: "金融",
    desc: "加密货币数据"
  },
  {
    id: 322,
    name: "币安",
    url: "https://www.binance.com",
    category: "金融",
    desc: "加密货币交易所"
  },
  {
    id: 323,
    name: "OKX",
    url: "https://www.okx.com",
    category: "金融",
    desc: "OKX 交易所"
  },
  {
    id: 324,
    name: "Bybit",
    url: "https://www.bybit.com",
    category: "金融",
    desc: "Bybit 交易所"
  },
  {
    id: 325,
    name: "Gate.io",
    url: "https://www.gate.io",
    category: "金融",
    desc: "Gate 交易所"
  },
  {
    id: 326,
    name: "Aave",
    url: "https://aave.com",
    category: "金融",
    desc: "DeFi 借贷协议"
  },
  {
    id: 327,
    name: "Uniswap",
    url: "https://uniswap.org",
    category: "金融",
    desc: "DEX 去中心化交易"
  },
  {
    id: 328,
    name: "DEXScreener",
    url: "https://dexscreener.com",
    category: "金融",
    desc: "DEX 行情追踪"
  },
  {
    id: 329,
    name: "TradingView",
    url: "https://www.tradingview.com",
    category: "金融",
    desc: "金融图表分析"
  },
  {
    id: 330,
    name: "东方财富",
    url: "https://www.eastmoney.com",
    category: "金融",
    desc: "财经资讯/行情"
  },
  {
    id: 331,
    name: "雪球",
    url: "https://xueqiu.com",
    category: "金融",
    desc: "投资社区"
  },

  // ===== 资讯 =====

  {
    id: 350,
    name: "知乎热榜",
    url: "https://www.zhihu.com/hot",
    category: "资讯",
    desc: "知乎热门话题"
  },
  {
    id: 351,
    name: "微博热搜",
    url: "https://s.weibo.com/top/summary",
    category: "资讯",
    desc: "微博热门话题"
  },
  {
    id: 352,
    name: "36氪",
    url: "https://36kr.com",
    category: "资讯",
    desc: "科技创业媒体"
  },
  {
    id: 353,
    name: "虎嗅",
    url: "https://www.huxiu.com",
    category: "资讯",
    desc: "科技商业资讯"
  },
  {
    id: 354,
    name: "钛媒体",
    url: "https://www.tmtpost.com",
    category: "资讯",
    desc: "科技财经媒体"
  },
  {
    id: 355,
    name: "极客公园",
    url: "https://www.geekpark.net",
    category: "资讯",
    desc: "科技新闻"
  },
  {
    id: 356,
    name: "少数派",
    url: "https://sspai.com",
    category: "资讯",
    desc: "数字生活指南"
  },
  {
    id: 357,
    name: "爱范儿",
    url: "https://www.ifanr.com",
    category: "资讯",
    desc: "科技生活方式"
  },
  {
    id: 358,
    name: "品玩",
    url: "https://www.pingwest.com",
    category: "资讯",
    desc: "科技中文媒体"
  },
  {
    id: 359,
    name: "Solidot",
    url: "https://www.solidot.org",
    category: "资讯",
    desc: "奇客资讯"
  },
  {
    id: 360,
    name: "Hacker News",
    url: "https://news.ycombinator.com",
    category: "资讯",
    desc: "YC 技术新闻"
  },
  {
    id: 361,
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    category: "资讯",
    desc: "新产品发布平台"
  },
  {
    id: 362,
    name: "TechCrunch",
    url: "https://techcrunch.com",
    category: "资讯",
    desc: "美国科技媒体"
  },
  {
    id: 363,
    name: "The Verge",
    url: "https://www.theverge.com",
    category: "资讯",
    desc: "美国科技媒体"
  },

  // ===== 社交 =====

  {
    id: 380,
    name: "Twitter/X",
    url: "https://x.com",
    category: "社交",
    desc: "社交媒体平台"
  },
  {
    id: 381,
    name: "微博",
    url: "https://weibo.com",
    category: "社交",
    desc: "中国社交媒体"
  },
  {
    id: 382,
    name: "小红书",
    url: "https://www.xiaohongshu.com",
    category: "社交",
    desc: "生活方式分享"
  },
  {
    id: 383,
    name: "豆瓣",
    url: "https://www.douban.com",
    category: "社交",
    desc: "书影音评分社区"
  },
  {
    id: 384,
    name: "Reddit",
    url: "https://www.reddit.com",
    category: "社交",
    desc: "美国社区论坛"
  },
  {
    id: 385,
    name: "Quora",
    url: "https://www.quora.com",
    category: "社交",
    desc: "问答社区"
  },
  {
    id: 386,
    name: "Threads",
    url: "https://www.threads.net",
    category: "社交",
    desc: "Meta 文字社交"
  },
  {
    id: 387,
    name: "Mastodon",
    url: "https://mastodon.social",
    category: "社交",
    desc: "去中心化社交"
  },
  {
    id: 388,
    name: "Bluesky",
    url: "https://bsky.app",
    category: "社交",
    desc: "去中心化社交平台"
  },

  // ===== 工具网站 =====

  {
    id: 400,
    name: "AIHub",
    url: "https://aihub.cn",
    category: "工具网站",
    desc: "国内 AI 工具导航"
  },
  {
    id: 401,
    name: "Future Tools",
    url: "https://www.futuretools.io",
    category: "工具网站",
    desc: "AI 工具收藏"
  },
  {
    id: 402,
    name: "There's an AI for That",
    url: "https://theresanaiforthat.com",
    category: "工具网站",
    desc: "AI 工具搜索引擎"
  },
  {
    id: 403,
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    category: "工具网站",
    desc: "新产品发现"
  },
  {
    id: 404,
    name: "小众软件",
    url: "https://www.appinn.com",
    category: "工具网站",
    desc: "有趣软件推荐"
  },
  {
    id: 405,
    name: "异次元",
    url: "https://www.iplaysoft.com",
    category: "工具网站",
    desc: "正版软件推荐"
  },
  {
    id: 406,
    name: "Topbook",
    url: "https://topbook.cc",
    category: "工具网站",
    desc: "效率工具视频"
  },
  {
    id: 407,
    name: "知犀思维导图",
    url: "https://www.zhixi.com",
    category: "工具网站",
    desc: "免费思维导图"
  },
  {
    id: 408,
    name: "秘塔搜索",
    url: "https://metaso.cn",
    category: "工具网站",
    desc: "AI 搜索引擎"
  },
  {
    id: 409,
    name: "Kimi 探索版",
    url: "https://kimi.moonshot.cn/explore",
    category: "工具网站",
    desc: "Kimi 深度搜索"
  },
  {
    id: 410,
    name: "知乎直答",
    url: "https://www.zhihu.com/answer",
    category: "工具网站",
    desc: "知乎 AI 问答"
  }
];

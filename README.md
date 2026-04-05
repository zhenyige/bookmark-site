# 书签导航系统

一个简洁美观的 Web 书签导航系统，支持分类管理、搜索、后台管理。

## 功能特点

- 🎨 **简洁美观** - 现代化卡片式设计
- 📂 **分类管理** - 支持多分类筛选
- 🔍 **快速搜索** - 支持名称、描述、URL 搜索
- 🔐 **后台管理** - 添加、编辑、删除书签
- 📱 **响应式** - 适配手机和电脑
- 🚀 **快速部署** - 纯静态页面，托管免费

## 访问地址

- GitHub Pages: https://[username].github.io/[repo]/
- 自定义域名: https://shu.1g6.top

## 使用方法

### 前台 - 浏览书签
1. 打开 `index.html`
2. 点击分类标签筛选
3. 使用搜索框搜索

### 后台 - 管理书签
1. 打开 `admin.html`
2. 输入密码登录（默认密码：`admin123`）
3. 添加/编辑/删除书签
4. 点击"导出数据"下载新的 `data.js`
5. 用下载的 `data.js` 替换网站根目录的文件

## 部署到 GitHub Pages

1. 创建 GitHub 仓库
2. 上传所有文件
3. Settings → Pages → Source: main branch
4. 自定义域名：添加 `shu.1g6.top`

## 自定义域名配置

需要在域名商处添加 DNS 记录：
- 类型: CNAME
- 名称: shu
- 值: [username].github.io

## 修改默认密码

编辑 `data.js`，修改 `ADMIN_PASSWORD` 的值。

## 技术栈

- HTML5 + CSS3 + JavaScript
- Font Awesome 图标库
- 纯前端，无需后端

## License

MIT

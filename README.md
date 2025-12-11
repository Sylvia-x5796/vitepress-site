# VitePress 个人网站 - 肖息

基于 VitePress 构建的现代化个人技术博客网站。

## ✨ 特性

- 🚀 基于 Vite 构建，开发体验极佳
- 📝 支持 Markdown 写作，语法高亮
- 🎨 响应式设计，支持暗黑模式
- 🔍 内置全文搜索功能
- 📱 移动端友好
- ⚡ 静态生成，部署简单

## 🛠️ 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Vite](https://vitejs.dev/) - 构建工具

## 📦 安装

```bash
# 克隆项目
git clone https://gitee.com/sylviaxiao/xiao-xis-personal-homepage.git
cd vitepress-site

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

## 🚀 使用

### 开发

```bash
# 启动开发服务器 (访问 http://localhost:5173/)
npm run docs:dev
```

### 构建

```bash
# 构建生产版本
npm run docs:build
```

### 预览

```bash
# 预览构建结果
npm run docs:preview
```

### 部署

```bash
# 手动部署到 Gitee Pages
npm run deploy

# 构建并部署（一键部署）
npm run build:deploy
```

## 📁 项目结构

```
├── docs/                   # 文档目录
│   ├── .vitepress/        # VitePress 配置
│   │   ├── config.mts     # 站点配置
│   │   └── theme/         # 主题定制
│   ├── public/            # 静态资源
│   ├── blog/              # 博客文章
│   ├── docs/              # 文档页面
│   └── index.md           # 首页
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 🚀 部署到 Gitee Pages

### 方式一：一键部署（推荐）

```bash
# 构建并部署
npm run build:deploy
```

### 方式二：手动部署

1. **推送代码到 Gitee**
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin master
   ```

2. **启用 Gitee Pages**
   - 进入 [Gitee 仓库页面](https://gitee.com/sylviaxiao/xiao-xis-personal-homepage)
   - 点击 "服务" → "Gitee Pages"
   - 选择部署分支为 `gh-pages`
   - 点击 "启动" 或 "更新"

3. **访问网站**
   - 部署完成后，网站将在 `https://sylviaxiao.gitee.io/xiao-xis-personal-homepage` 可访问

### 部署注意事项

- **Gitee Pages 限制**: 免费版需要手动更新，Pro 版支持自动更新
- **分支管理**: 源码在 `master` 分支，构建结果推送到 `gh-pages` 分支
- **静态资源**: 确保所有图片和资源文件都放在 `docs/public/` 目录下
- **开发服务器**: 本地开发访问 `http://localhost:5173/`

## 👤 作者信息

- **姓名**: 肖息
- **学号**: 222023321062059
- **学校**: 西南大学
- **邮箱**: 410676208@qq.com
- **Gitee**: https://gitee.com/sylviaxiao

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

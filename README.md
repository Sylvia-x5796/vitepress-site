# VitePress 个人网站

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
git clone <your-repo-url>
cd vitepress-site

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

## 🚀 使用

### 开发

```bash
# 启动开发服务器
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
# 手动部署到 GitHub Pages
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

## 📝 写作

### 添加博客文章

1. 在 `docs/blog/` 目录下创建新的 `.md` 文件
2. 添加 frontmatter 元数据：

```yaml
---
title: 文章标题
description: 文章描述
date: 2025-01-15
tags:
  - 标签1
  - 标签2
---
```

### 添加文档页面

1. 在 `docs/docs/` 目录下创建相应的 `.md` 文件
2. 在 `docs/.vitepress/config.mts` 中更新侧边栏配置

## 🚀 部署

### 方式一：GitHub Actions 自动部署（推荐）

1. **启用 GitHub Pages**
   - 进入 GitHub 仓库设置页面
   - 找到 "Pages" 选项
   - Source 选择 "GitHub Actions"

2. **推送代码触发部署**
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

3. **查看部署状态**
   - 在 GitHub 仓库的 "Actions" 标签页查看部署进度
   - 部署完成后，网站将在 `https://yourusername.github.io/repository-name` 可访问

### 方式二：手动部署

1. **使用 gh-pages 工具**
   ```bash
   # 构建并部署
   npm run build:deploy
   
   # 或分步执行
   npm run docs:build
   npm run deploy
   ```

2. **首次部署设置**
   ```bash
   # 安装 gh-pages（如果还没安装）
   npm install -D gh-pages
   
   # 确保有 gh-pages 分支的推送权限
   git remote -v
   ```

### 方式三：Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run docs:build`
3. 设置输出目录：`docs/.vitepress/dist`
4. 部署完成后获得 Vercel 域名

### 部署注意事项

- **Base Path**: 如果部署到子路径，需要在 `docs/.vitepress/config.mts` 中设置 `base` 选项
- **静态资源**: 确保所有图片和资源文件都放在 `docs/public/` 目录下
- **环境变量**: 生产环境的配置可能需要调整

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系

- 邮箱：410676208@qq.com
- GitHub：[你的GitHub用户名]
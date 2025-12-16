# GitHub Pages 部署指南

## 🚀 快速部署到 GitHub Pages

### 一键部署

```bash
npm run build:deploy:github
```

这个命令会：
1. 使用 GitHub 配置构建网站
2. 自动部署到 GitHub Pages

### 分步部署

```bash
# 1. 使用 GitHub 配置构建
npm run docs:build:github

# 2. 部署到 GitHub
npm run deploy:github
```

## 📋 首次配置

### 1. 在 GitHub 上启用 Pages

1. 访问你的 GitHub 仓库：https://github.com/Sylvia-x5796/vitepress-site
2. 点击 "Settings" → "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 `gh-pages` 分支，目录选择 `/ (root)`
5. 点击 "Save"

### 2. 等待部署

- 首次部署需要 2-5 分钟
- 可以在 "Actions" 标签查看部署状态
- 部署成功后会显示网站地址

### 3. 访问网站

部署成功后，访问：

**https://sylvia-x5796.github.io/vitepress-site/**

## 🔧 配置说明

### 为什么需要单独的配置？

GitHub Pages 和 Gitee Pages 的路径不同：

- **Gitee**: `https://sylviaxiao.gitee.io/vite-press_-sylviax/`
  - base: `/vite-press_-sylviax/`
  
- **GitHub**: `https://sylvia-x5796.github.io/vitepress-site/`
  - base: `/vitepress-site/`

所以需要两个配置文件：
- `config.mts` - Gitee Pages 配置
- `config.github.mts` - GitHub Pages 配置

### 配置文件对比

| 配置项 | Gitee | GitHub |
|--------|-------|--------|
| base | `/vite-press_-sylviax/` | `/vitepress-site/` |
| hostname | `sylviaxiao.gitee.io` | `sylvia-x5796.github.io` |
| 仓库地址 | gitee.com/sylviaxiao/... | github.com/Sylvia-x5796/... |

## 📝 更新网站

每次修改内容后：

```bash
# 部署到 GitHub
npm run build:deploy:github

# 或部署到 Gitee
npm run build:deploy:gitee
```

## 🔄 同时部署到两个平台

```bash
# 部署到 Gitee
npm run build:deploy:gitee

# 部署到 GitHub
npm run build:deploy:github
```

## ⚠️ 注意事项

### 1. 构建配置

- 部署到 GitHub 必须使用 `npm run docs:build:github`
- 部署到 Gitee 使用 `npm run docs:build`

### 2. 资源路径

所有资源路径会自动根据 base 配置调整，无需手动修改。

### 3. 更新时间

- GitHub Pages 通常 1-2 分钟完成部署
- Gitee Pages 免费版需要手动点击"更新"

### 4. 自定义域名

如果使用自定义域名，将 base 设置为 `/`：

```typescript
export default defineConfig({
  base: '/',
  // ...
})
```

## 🎯 常见问题

### Q: 部署后样式混乱？

A: 检查是否使用了正确的构建命令：
- GitHub: `npm run docs:build:github`
- Gitee: `npm run docs:build`

### Q: 404 错误？

A: 确保：
1. GitHub Pages 已启用
2. 选择了 `gh-pages` 分支
3. 等待部署完成（查看 Actions）

### Q: 如何查看部署状态？

A: 访问仓库的 "Actions" 标签，查看 "pages build and deployment" 工作流。

### Q: 可以自动部署吗？

A: 可以！创建 GitHub Actions 工作流：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build:deploy:github
```

## 📊 部署对比

| 特性 | GitHub Pages | Gitee Pages |
|------|--------------|-------------|
| 速度 | 快 | 中等 |
| 自动部署 | 支持 | 免费版不支持 |
| 自定义域名 | 免费 | Pro版 |
| 访问速度（国内） | 较慢 | 快 |
| 访问速度（国外） | 快 | 较慢 |

## 🎉 完成

现在你可以同时在两个平台部署你的网站了！

- **GitHub**: https://sylvia-x5796.github.io/vitepress-site/
- **Gitee**: https://sylviaxiao.gitee.io/vite-press_-sylviax/

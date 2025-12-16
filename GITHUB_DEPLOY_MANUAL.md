# GitHub Pages 手动部署指南

## 问题说明

由于网络连接问题，无法直接推送到 GitHub。有以下几种解决方案：

## 方案 1：使用 GitHub Actions 自动部署（推荐）

### 步骤 1：创建 GitHub Actions 工作流

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master  # 或 main，根据你的主分支名称

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build with GitHub config
        run: npm run docs:build:github

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          cname: # 如果有自定义域名，在这里填写
```

### 步骤 2：推送代码

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin master
```

### 步骤 3：启用 GitHub Pages

1. 访问 https://github.com/Sylvia-x5796/vitepress-site/settings/pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 `gh-pages`
4. 点击 Save

### 步骤 4：等待部署

- 访问 https://github.com/Sylvia-x5796/vitepress-site/actions
- 查看部署进度
- 部署成功后访问 https://sylvia-x5796.github.io/vitepress-site/

## 方案 2：本地构建后手动上传

### 步骤 1：本地构建

```bash
npm run docs:build:github
```

### 步骤 2：进入构建目录

```bash
cd docs/.vitepress/dist
```

### 步骤 3：初始化 Git 并推送

```bash
git init
git add -A
git commit -m 'deploy'
git branch -M gh-pages
git remote add origin https://github.com/Sylvia-x5796/vitepress-site.git
git push -f origin gh-pages
```

### 步骤 4：返回项目根目录

```bash
cd ../../..
```

## 方案 3：使用 GitHub Desktop

1. 下载安装 GitHub Desktop
2. 克隆仓库
3. 运行 `npm run docs:build:github`
4. 使用 GitHub Desktop 提交并推送更改
5. 在 GitHub 网页上手动创建 gh-pages 分支并上传 dist 目录内容

## 方案 4：配置代理

如果有代理，可以配置 Git 代理：

```bash
# HTTP 代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890

# SOCKS5 代理
git config --global http.proxy socks5://127.0.0.1:7890
git config --global https.proxy socks5://127.0.0.1:7890

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

然后重新运行：

```bash
npm run build:deploy:github
```

## 验证部署

部署成功后，访问：

**https://sylvia-x5796.github.io/vitepress-site/**

如果看到正常的网站（不是混乱的），说明部署成功！

## 对比两个平台

现在你有两个部署地址：

| 平台 | 地址 | base 配置 |
|------|------|-----------|
| GitHub | https://sylvia-x5796.github.io/vitepress-site/ | `/vitepress-site/` |
| Gitee | https://sylviaxiao.gitee.io/vite-press_-sylviax/ | `/vite-press_-sylviax/` |

## 推荐方案

**强烈推荐使用方案 1（GitHub Actions）**，因为：

1. ✅ 自动化部署，推送代码即可
2. ✅ 不需要本地构建
3. ✅ 不需要手动推送 gh-pages 分支
4. ✅ 有完整的部署日志
5. ✅ 支持回滚

## 下一步

1. 选择一个方案完成部署
2. 验证网站是否正常显示
3. 如果使用 GitHub Actions，以后只需 `git push` 即可自动部署

## 需要帮助？

如果遇到问题，可以：
1. 查看 GitHub Actions 日志
2. 检查 GitHub Pages 设置
3. 确认 base 配置是否正确

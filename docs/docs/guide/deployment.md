# 部署指南

本指南将帮助你将 VitePress 网站部署到各种平台。

## 🚀 Gitee Pages 部署

### 前提条件

- 已有 Gitee 账号
- 已创建 Gitee 仓库
- 本地已安装 Node.js 和 npm

### 部署步骤

#### 1. 安装依赖

```bash
npm install
```

#### 2. 构建网站

```bash
npm run docs:build
```

构建后的文件将生成在 `docs/.vitepress/dist` 目录。

#### 3. 部署到 Gitee

```bash
npm run deploy
```

或者一键构建并部署：

```bash
npm run build:deploy
```

#### 4. 启用 Gitee Pages

1. 访问你的 Gitee 仓库页面
2. 点击 "服务" → "Gitee Pages"
3. 选择 `gh-pages` 分支
4. 点击 "启动" 或 "更新" 按钮
5. 等待部署完成

### 访问网站

部署成功后，你的网站将通过以下地址访问：

```
https://你的用户名.gitee.io/仓库名/
```

## 📦 其他部署平台

### GitHub Pages

1. 修改 `package.json` 中的仓库地址为 GitHub 仓库
2. 运行 `npm run build:deploy`
3. 在 GitHub 仓库设置中启用 Pages 服务

### Vercel

1. 在 Vercel 导入你的 Git 仓库
2. 构建命令：`npm run docs:build`
3. 输出目录：`docs/.vitepress/dist`
4. 点击部署

### Netlify

1. 在 Netlify 导入你的 Git 仓库
2. 构建命令：`npm run docs:build`
3. 发布目录：`docs/.vitepress/dist`
4. 点击部署

## ⚙️ 配置说明

### Base 路径配置

如果部署在子路径下，需要在 `docs/.vitepress/config.mts` 中配置 `base`：

```typescript
export default defineConfig({
  base: '/仓库名/',  // 注意前后都有斜杠
  // ...
})
```

### 自定义域名

如果使用自定义域名，将 `base` 设置为 `/`：

```typescript
export default defineConfig({
  base: '/',
  // ...
})
```

## 🔧 常见问题

### 1. 部署后样式丢失

检查 `base` 配置是否正确。

### 2. 404 错误

确保：
- 选择了正确的分支（`gh-pages`）
- `base` 路径配置正确
- 等待部署完成

### 3. 更新不生效

- Gitee Pages 免费版需要手动点击"更新"
- 清除浏览器缓存
- 使用无痕模式访问

## 📝 自动化部署

### GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy

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
      - run: npm run docs:build
      - run: npm run deploy
```

## 📞 获取帮助

如果遇到部署问题：

1. 查看 [VitePress 官方文档](https://vitepress.dev/guide/deploy)
2. 查看平台的部署文档
3. 检查浏览器控制台错误
4. 发送邮件到 410676208@qq.com

---

**提示：** 每次更新内容后，记得重新构建并部署！

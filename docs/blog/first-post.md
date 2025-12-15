---
title: 从零开始搭建VitePress个人博客：从入门到部署
description: 记录我使用VitePress搭建个人博客的全过程，包括环境配置、内容编写、主题定制和服务器部署的核心步骤。
date: 2025-01-15
tags:
  - VitePress
  - 静态网站
  - 前端开发
  - 个人博客
categories:
  - 技术教程
cover: /images/vitepress-blog-cover.png
---

---
title: 从零开始搭建VitePress个人博客：从入门到部署
description: 完整记录使用VitePress搭建个人技术博客的全过程，包括环境配置、主题定制、部署上线等核心步骤
date: 2025-01-15
author: 肖息
keywords: VitePress, 个人博客, 静态网站, 前端开发
---

# 从零开始搭建VitePress个人博客：从入门到部署

大家好！今天想和大家分享我使用 VitePress 搭建个人技术博客的全过程。作为一名前端开发者，我尝试过很多博客搭建工具（Hexo、VuePress、Next.js），最终选择 VitePress 是因为它足够轻量、快速，且原生支持 Markdown 和 Vue 组件扩展，非常适合技术博客的需求。

## 为什么选择 VitePress？

在开始实操前，先聊聊我选择 VitePress 的核心原因：

1. **极致的速度**：基于 Vite 构建，开发时热更新秒级响应，构建静态文件也比传统工具快数倍；
2. **Markdown 友好**：原生支持 GitHub Flavored Markdown（GFM），还扩展了自定义容器、代码高亮等功能；
3. **Vue 生态兼容**：可直接在 Markdown 中嵌入 Vue 组件，扩展能力极强；
4. **零配置起步**：基础功能无需复杂配置，开箱即用，进阶需求也有完善的配置项；
5. **静态生成**：最终输出纯静态 HTML/CSS/JS，部署简单，访问速度快，SEO 友好。

对比其他工具：
- Hexo：配置繁琐，插件生态老旧；
- VuePress 1.x：基于 Webpack，构建速度慢；
- Next.js：偏重应用开发，博客场景略显冗余。

## 环境准备：核心依赖安装

首先确保你的电脑安装了 Node.js（推荐 v18+），验证方式：
```bash
# 检查 Node.js 版本
node -v # 输出 v18.18.0 及以上即可
npm -v  # 输出 9.x 及以上
```

## 项目初始化：从零开始

### 1. 创建项目目录

```bash
# 创建项目文件夹
mkdir my-vitepress-blog
cd my-vitepress-blog

# 初始化 npm 项目
npm init -y
```

### 2. 安装 VitePress

```bash
# 安装 VitePress 作为开发依赖
npm install -D vitepress

# 或使用 yarn
yarn add -D vitepress

# 或使用 pnpm（推荐，速度更快）
pnpm add -D vitepress
```

### 3. 创建基础目录结构

```bash
# 创建文档目录
mkdir docs

# 创建首页文件
echo "# Hello VitePress" > docs/index.md
```

### 4. 配置 package.json 脚本

在 `package.json` 中添加启动脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 配置文件详解：让网站更个性化

### 创建配置文件

在 `docs/.vitepress/` 目录下创建 `config.mts` 文件：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站基本信息
  title: '我的技术博客',
  description: '记录前端开发的点点滴滴',
  lang: 'zh-CN',
  
  // 网站头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '你的名字' }],
    ['meta', { name: 'keywords', content: 'VitePress,博客,前端' }]
  ],

  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/blog/': [
        {
          text: '最新文章',
          items: [
            { text: 'VitePress 入门', link: '/blog/vitepress-guide' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Your Name'
    }
  }
})
```

## 内容创作：Markdown 进阶技巧

### 1. 文章 Frontmatter

每篇文章开头添加元数据：

```yaml
---
title: 文章标题
description: 文章描述
date: 2025-01-15
tags:
  - VitePress
  - 前端
author: 你的名字
---
```

### 2. 代码高亮

VitePress 支持多种编程语言的语法高亮：

```javascript
// JavaScript 示例
function greet(name) {
  console.log(`Hello, ${name}!`)
}
```

```vue
<!-- Vue 组件示例 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
const msg = 'Hello VitePress!'
</script>
```

### 3. 自定义容器

```markdown
::: tip 提示
这是一个提示容器
:::

::: warning 警告
这是一个警告容器
:::

::: danger 危险
这是一个危险提示容器
:::
```

## 主题定制：打造独特风格

### 1. 自定义 CSS

创建 `docs/.vitepress/theme/custom.css`：

```css
/* 自定义主色调 */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}

/* 自定义字体 */
.VPDoc {
  font-family: 'Inter', sans-serif;
}

/* 代码块样式 */
.vp-code-group .tabs {
  border-radius: 8px 8px 0 0;
}
```

### 2. 扩展默认主题

创建 `docs/.vitepress/theme/index.ts`：

```typescript
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件或插件
  }
}
```

## 部署上线：多平台选择

### 1. GitHub Pages 部署

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
      
      - run: npm ci
      - run: npm run docs:build
      
      - uses: actions/deploy-pages@v2
        with:
          artifact_name: github-pages
          path: docs/.vitepress/dist
```

### 2. Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 设置构建命令：`npm run docs:build`
3. 设置输出目录：`docs/.vitepress/dist`
4. 一键部署完成

### 3. Netlify 部署

1. 拖拽 `docs/.vitepress/dist` 文件夹到 Netlify
2. 或连接 Git 仓库自动部署

## 性能优化：提升访问体验

### 1. 图片优化

```markdown
<!-- 使用 WebP 格式 -->
![示例图片](/images/example.webp)

<!-- 添加 loading="lazy" -->
<img src="/images/large.jpg" loading="lazy" alt="大图片">
```

### 2. 代码分割

```typescript
// config.mts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue']
        }
      }
    }
  }
})
```

## 实用插件推荐

### 1. 搜索功能

```typescript
// config.mts
export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

### 2. 评论系统

可以集成 Giscus、Gitalk 等评论系统。

## 总结与展望

通过这篇文章，我们完整地走过了 VitePress 博客搭建的全流程：

1. ✅ **环境准备**：Node.js 安装与项目初始化
2. ✅ **基础配置**：网站信息、导航、侧边栏设置
3. ✅ **内容创作**：Markdown 语法与 Frontmatter 使用
4. ✅ **主题定制**：CSS 样式与组件扩展
5. ✅ **部署上线**：多平台部署方案
6. ✅ **性能优化**：图片、代码分割等优化技巧

VitePress 的优势在于简单易用，同时保持了足够的扩展性。无论你是技术博客新手还是有经验的开发者，都能快速上手并打造出专业的个人网站。

### 下一步计划

- 📝 添加更多技术文章
- 🎨 进一步优化主题样式
- 🔍 集成更强大的搜索功能
- 📊 添加访问统计分析

希望这篇文章对你有帮助！如果在搭建过程中遇到问题，欢迎在评论区交流讨论。

---

**相关链接：**
- [VitePress 官方文档](https://vitepress.dev/)
- [项目源码](https://github.com/yourusername/vitepress-blog)
- [在线预览](https://your-blog-url.com)

*本文首发于个人博客，转载请注明出处。*
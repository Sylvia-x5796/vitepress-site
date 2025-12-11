---
title: 配置
description: VitePress配置指南
---

# 配置

VitePress的配置文件位于`docs/.vitepress/config.mts`，使用TypeScript编写。你可以在这个文件中配置网站的标题、描述、主题等。

## 基本配置

### 网站元数据

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的网站',
  description: '这是我的网站描述',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
})
```

### 主题配置

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs' }
    ],
    sidebar: {
      '/docs/': [
        { text: '快速开始', link: '/docs/guide/getting-started' },
        { text: '配置', link: '/docs/guide/configuration' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/example' }
    ]
  }
})
```

## 高级配置

### 构建配置

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: false
  }
})
```

### Markdown配置

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  markdown: {
    theme: 'github-dark',
    lineNumbers: false,
    config: (md) => {
      // 自定义Markdown配置
    }
  }
})
```

### 服务器配置

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
    host: '0.0.0.0'
  }
})
```

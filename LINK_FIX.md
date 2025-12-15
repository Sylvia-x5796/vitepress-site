# 链接修复说明

## 问题原因

当网站部署在子路径（如 `/vite-press_-sylviax/`）时，使用绝对路径 `/about` 会导致 404 错误，因为实际路径应该是 `/vite-press_-sylviax/about`。

## 解决方案

### ✅ 正确的链接写法

在 Markdown 文件中使用**相对路径**：

```markdown
<!-- ✅ 正确 - 使用相对路径 -->
<a href="./about">关于我</a>
<a href="./blog/">博客</a>
<a href="./blog/first-post">文章</a>

<!-- ❌ 错误 - 使用绝对路径 -->
<a href="/about">关于我</a>
<a href="/blog/">博客</a>
```

### VitePress 导航配置

在 `config.mts` 中的导航配置会自动处理 base 路径，无需修改：

```typescript
nav: [
  { text: '首页', link: '/' },        // ✅ 自动处理
  { text: '关于', link: '/about' },   // ✅ 自动处理
  { text: '博客', link: '/blog/' }    // ✅ 自动处理
]
```

## 已修复的链接

### docs/index.md

修复了以下链接：

1. **底部按钮**
   - `href="/about"` → `href="./about"`
   - `href="/blog/"` → `href="./blog/"`

2. **博客卡片**
   - `href="/blog/first-post"` → `href="./blog/first-post"`
   - `href="/blog/project-review"` → `href="./blog/project-review"`
   - `href="/blog/tech-learning"` → `href="./blog/tech-learning"`

3. **查看更多链接**
   - `href="/blog/"` → `href="./blog/"`

## 验证

部署后访问以下链接确认修复：

- https://sylviaxiao.gitee.io/vite-press_-sylviax/
- 点击 "了解更多关于我" 按钮
- 点击 "查看全部博客" 按钮
- 点击博客卡片链接

所有链接应该正常跳转，不再出现 404。

## 注意事项

### 在 HTML 中使用链接

如果在 Markdown 中使用 HTML 标签写链接，使用相对路径：

```html
<!-- ✅ 正确 -->
<a href="./about">关于</a>

<!-- ❌ 错误 -->
<a href="/about">关于</a>
```

### 在 Vue 组件中使用链接

如果在 Vue 组件中，使用 VitePress 的 `withBase` 辅助函数：

```vue
<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <a :href="withBase('/about')">关于</a>
</template>
```

或者使用 Vue Router 的 `<router-link>`：

```vue
<router-link to="/about">关于</router-link>
```

## 部署状态

✅ 已修复并重新部署

记得在 Gitee Pages 管理页面点击"更新"按钮！

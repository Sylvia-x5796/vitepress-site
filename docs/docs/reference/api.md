---
title: API
description: VitePress API参考
---

# API

## defineConfig

用于定义VitePress配置的函数。

### 类型

```typescript
function defineConfig(config: UserConfig): UserConfig
```

### 参数

- `config`: 用户配置对象

### 返回值

返回配置对象。

### 示例

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的网站',
  description: '网站描述'
})
```

## defineTheme

用于定义VitePress主题的函数。

### 类型

```typescript
function defineTheme(theme: Theme): Theme
```

### 参数

- `theme`: 主题配置对象

### 返回值

返回主题对象。

### 示例

```typescript
import { defineTheme } from 'vitepress'

export default defineTheme({
  enhanceApp({ app, router, siteData }) {
    // 增强应用
  }
})
```

## useData

用于在组件中获取站点数据的组合式API。

### 类型

```typescript
function useData(): SiteData
```

### 返回值

返回站点数据对象。

### 示例

```vue
<script setup>
import { useData } from 'vitepress'

const { site, page, theme } = useData()
</script>

<template>
  <h1>{{ site.value.title }}</h1>
</template>
```

## useRoute

用于在组件中获取路由信息的组合式API。

### 类型

```typescript
function useRoute(): Route
```

### 返回值

返回路由对象。

### 示例

```vue
<script setup>
import { useRoute } from 'vitepress'

const route = useRoute()
</script>

<template>
  <p>当前路径: {{ route.path }}</p>
</template>
```

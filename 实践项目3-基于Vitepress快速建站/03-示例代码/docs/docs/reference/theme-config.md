---
title: 主题配置
description: VitePress主题配置参考
---

# 主题配置

## 导航栏配置

### 基本导航

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '文档', link: '/docs' },
    { text: 'GitHub', link: 'https://github.com/example', target: '_blank' }
  ]
}
```

### 带下拉菜单的导航

```typescript
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    {
      text: '文档',
      items: [
        { text: '快速开始', link: '/docs/guide/getting-started' },
        { text: '配置', link: '/docs/guide/configuration' },
        { text: 'API', link: '/docs/reference/api' }
      ]
    }
  ]
}
```

## 侧边栏配置

### 基本侧边栏

```typescript
themeConfig: {
  sidebar: {
    '/docs/': [
      { text: '快速开始', link: '/docs/guide/getting-started' },
      { text: '配置', link: '/docs/guide/configuration' }
    ]
  }
}
```

### 分组侧边栏

```typescript
themeConfig: {
  sidebar: {
    '/docs/': [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/docs/guide/getting-started' },
          { text: '配置', link: '/docs/guide/configuration' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: 'API', link: '/docs/reference/api' },
          { text: '主题配置', link: '/docs/reference/theme-config' }
        ]
      }
    ]
  }
}
```

### 折叠侧边栏

```typescript
themeConfig: {
  sidebar: {
    '/docs/': [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/docs/guide/getting-started' },
          { text: '配置', link: '/docs/guide/configuration' }
        ]
      }
    ]
  }
}
```

## 社交链接配置

```typescript
themeConfig: {
  socialLinks: [
    { icon: 'github', link: 'https://github.com/example' },
    { icon: 'twitter', link: 'https://twitter.com/example' },
    { icon: 'linkedin', link: 'https://linkedin.com/in/example' },
    { icon: 'discord', link: 'https://discord.gg/example' }
  ]
}
```

## 页脚配置

```typescript
themeConfig: {
  footer: {
    message: 'MIT Licensed',
    copyright: 'Copyright © 2025-present Example'
  }
}
```

## 搜索配置

```typescript
themeConfig: {
  search: {
    provider: 'local',
    options: {
      locales: {
        zh: {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索'
            },
            modal: {
              noResultsText: '没有找到结果',
              resetButtonTitle: '清除查询',
              footer: {
                selectText: '选择',
                navigateText: '切换'
              }
            }
          }
        }
      }
    }
  }
}
```

## 自定义logo

```typescript
themeConfig: {
  logo: '/logo.png'
}
```

## 深色模式

```typescript
themeConfig: {
  darkModeSwitchLabel: '切换主题',
  lightModeSwitchTitle: '切换到浅色模式',
  darkModeSwitchTitle: '切换到深色模式'
}
```

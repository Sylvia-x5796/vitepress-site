---
title: 项目复盘：Vue3组件库开发实践
description: 分享最近参与的Vue3组件库项目的开发经验，包括组件设计、API设计、文档编写等方面的思考
date: 2025-01-10
tags:
  - Vue3
  - 组件库
  - 项目复盘
  - 前端工程化
categories:
  - 项目实战
cover: /images/vue3-component-library.png
---

---
title: 项目复盘：Vue3组件库开发实践
description: 分享Vue3组件库项目的开发经验，包括组件设计、API设计、测试策略和发布流程等方面的思考
date: 2025-01-10
author: 肖息
keywords: Vue3, 组件库, 项目复盘, 前端开发
---

# 项目复盘：Vue3组件库开发实践

最近参与了一个Vue3组件库的开发项目，从零开始搭建了一套适用于中后台系统的UI组件库。在这个过程中积累了不少经验，也踩了一些坑，今天想和大家分享一下整个开发过程中的思考和收获。

## 🎯 项目背景

### 项目需求
- 为公司内部多个中后台系统提供统一的UI组件
- 基于Vue3 + TypeScript开发
- 支持按需引入，减少打包体积
- 提供完善的文档和示例

### 技术选型
- **框架**: Vue 3.3+ (Composition API)
- **语言**: TypeScript 4.9+
- **构建工具**: Vite 4.0+
- **文档**: VitePress
- **测试**: Vitest + Vue Test Utils
- **代码规范**: ESLint + Prettier

## 🏗️ 项目架构设计

### 目录结构
```
vue3-ui-library/
├── packages/
│   ├── components/          # 组件源码
│   │   ├── button/
│   │   ├── input/
│   │   └── ...
│   ├── theme/              # 主题样式
│   ├── utils/              # 工具函数
│   └── types/              # 类型定义
├── docs/                   # 文档站点
├── playground/             # 开发调试
├── scripts/                # 构建脚本
└── tests/                  # 测试用例
```

### 组件设计原则

1. **单一职责**: 每个组件只负责一个功能
2. **可组合性**: 组件之间可以灵活组合使用
3. **一致性**: 统一的API设计和交互模式
4. **可扩展性**: 支持自定义样式和行为

## 💡 核心组件开发

### Button 组件实现

```vue
<!-- packages/components/button/src/button.vue -->
<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
  >
    <Icon v-if="loading" name="loading" class="btn-loading" />
    <Icon v-else-if="icon" :name="icon" />
    <span v-if="$slots.default" class="btn-text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '../../icon'
import type { ButtonProps, ButtonEmits } from './button'

defineOptions({
  name: 'UiButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  nativeType: 'button',
  disabled: false,
  loading: false,
  round: false,
  circle: false
})

const emit = defineEmits<ButtonEmits>()

// 计算按钮样式类
const buttonClass = computed(() => [
  'ui-button',
  `ui-button--${props.type}`,
  `ui-button--${props.size}`,
  {
    'is-disabled': props.disabled,
    'is-loading': props.loading,
    'is-round': props.round,
    'is-circle': props.circle
  }
])

// 点击事件处理
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>
```

### 类型定义

```typescript
// packages/components/button/src/button.ts
export interface ButtonProps {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'large' | 'medium' | 'small' | 'mini'
  icon?: string
  nativeType?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  round?: boolean
  circle?: boolean
}

export interface ButtonEmits {
  click: [event: MouseEvent]
}

export type ButtonInstance = InstanceType<typeof Button>
```

## 🎨 主题系统设计

### CSS变量系统

```scss
// packages/theme/src/common/var.scss
:root {
  // 主色调
  --ui-color-primary: #409eff;
  --ui-color-success: #67c23a;
  --ui-color-warning: #e6a23c;
  --ui-color-danger: #f56c6c;
  --ui-color-info: #909399;

  // 字体
  --ui-font-size-extra-large: 20px;
  --ui-font-size-large: 18px;
  --ui-font-size-medium: 16px;
  --ui-font-size-base: 14px;
  --ui-font-size-small: 13px;
  --ui-font-size-extra-small: 12px;

  // 间距
  --ui-spacing-large: 24px;
  --ui-spacing-medium: 20px;
  --ui-spacing-base: 16px;
  --ui-spacing-small: 12px;
  --ui-spacing-extra-small: 8px;

  // 圆角
  --ui-border-radius-base: 4px;
  --ui-border-radius-small: 2px;
  --ui-border-radius-round: 20px;
  --ui-border-radius-circle: 100%;

  // 阴影
  --ui-box-shadow-light: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  --ui-box-shadow-base: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
  --ui-box-shadow-dark: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.24);
}
```

### 暗黑模式支持

```scss
// packages/theme/src/dark/var.scss
html.dark {
  --ui-color-primary: #409eff;
  --ui-color-success: #67c23a;
  --ui-color-warning: #e6a23c;
  --ui-color-danger: #f56c6c;
  --ui-color-info: #909399;

  --ui-bg-color: #141414;
  --ui-bg-color-page: #0a0a0a;
  --ui-bg-color-overlay: #1d1e1f;
  
  --ui-text-color-primary: #e5eaf3;
  --ui-text-color-regular: #cfd3dc;
  --ui-text-color-secondary: #a3a6ad;
  --ui-text-color-placeholder: #8d9095;
  --ui-text-color-disabled: #6c6e72;

  --ui-border-color: #4c4d4f;
  --ui-border-color-light: #414243;
  --ui-border-color-lighter: #363637;
  --ui-border-color-extra-light: #2b2b2c;
  --ui-border-color-dark: #58585b;
  --ui-border-color-darker: #636466;

  --ui-fill-color: #303133;
  --ui-fill-color-light: #262727;
  --ui-fill-color-lighter: #1d1d1d;
  --ui-fill-color-extra-light: #191919;
  --ui-fill-color-dark: #39393a;
  --ui-fill-color-darker: #424243;
  --ui-fill-color-blank: transparent;
}
```

## 🔧 构建配置优化

### Vite配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
      skipDiagnostics: false,
      tsConfigFilePath: './tsconfig.build.json'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'Vue3UI',
      fileName: (format) => `vue3-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'packages')
    }
  }
})
```

### 按需引入配置

```typescript
// packages/resolver.ts
import type { ComponentResolver } from 'unplugin-vue-components'

export function Vue3UIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Ui')) {
        const componentName = name.slice(2).toLowerCase()
        return {
          name,
          from: `vue3-ui/es/components/${componentName}`,
          sideEffects: `vue3-ui/es/components/${componentName}/style/css`
        }
      }
    }
  }
}
```

## 📚 文档系统建设

### 组件文档模板

```markdown
# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

```vue
<template>
  <div class="button-demo">
    <ui-button>默认按钮</ui-button>
    <ui-button type="primary">主要按钮</ui-button>
    <ui-button type="success">成功按钮</ui-button>
    <ui-button type="info">信息按钮</ui-button>
    <ui-button type="warning">警告按钮</ui-button>
    <ui-button type="danger">危险按钮</ui-button>
  </div>
</template>
```
:::

## API

### Button Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| size | 尺寸 | string | large / small / mini | — |
| disabled | 是否禁用状态 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |

### Button Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| click | 点击时触发 | (event: MouseEvent) |
```

## 🧪 测试策略

### 单元测试

```typescript
// tests/components/button.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '@/components/button'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Hello World'
      }
    })
    expect(wrapper.text()).toContain('Hello World')
  })

  it('emits click event', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('should be disabled when disabled prop is true', () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.element.disabled).toBe(true)
  })

  it('should show loading icon when loading prop is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.btn-loading').exists()).toBe(true)
  })
})
```

## 📦 发布流程

### 自动化发布脚本

```json
{
  "scripts": {
    "build": "vite build",
    "build:theme": "gulp build --gulpfile packages/theme/gulpfile.ts",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "lint": "eslint packages --ext .vue,.js,.ts",
    "type-check": "vue-tsc --noEmit",
    "release": "release-it",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
  }
}
```

### GitHub Actions配置

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          registry-url: https://registry.npmjs.org/

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test

      - name: Build
        run: npm run build

      - name: Publish to NPM
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

## 🤔 踩坑记录

### 1. TypeScript类型导出问题

**问题**: 组件类型定义在构建后丢失

**解决方案**: 
```typescript
// packages/index.ts
export * from './components'
export * from './types'

// 确保类型文件正确导出
export type { ButtonProps, ButtonInstance } from './components/button'
```

### 2. 样式隔离问题

**问题**: 组件样式相互污染

**解决方案**: 
- 使用BEM命名规范
- 添加组件前缀
- 使用CSS Modules或scoped样式

### 3. 按需引入配置复杂

**问题**: 用户配置按需引入比较复杂

**解决方案**: 
- 提供unplugin-vue-components解析器
- 编写详细的配置文档
- 提供CLI工具自动生成配置

## 📈 性能优化

### 1. 打包体积优化
- Tree Shaking支持
- 按需引入
- 样式分离

### 2. 运行时性能
- 使用Composition API
- 避免不必要的响应式
- 合理使用v-memo

### 3. 开发体验优化
- 完善的TypeScript支持
- 详细的错误提示
- 丰富的开发工具

## 🎯 总结与反思

### 收获
1. **架构设计**: 学会了如何设计可扩展的组件库架构
2. **工程化**: 掌握了现代前端工程化的最佳实践
3. **测试**: 建立了完善的测试体系
4. **文档**: 重视文档的重要性，好的文档是成功的一半

### 不足
1. **性能监控**: 缺少运行时性能监控
2. **国际化**: 没有考虑多语言支持
3. **无障碍**: 可访问性支持不够完善

### 下一步计划
1. 添加更多实用组件
2. 完善主题定制系统
3. 提供可视化主题编辑器
4. 建设组件库生态

## 🔗 相关资源

- [项目源码](https://gitee.com/sylviaxiao/vue3-ui-library)
- [在线文档](https://vue3-ui-library.example.com)
- [NPM包](https://www.npmjs.com/package/vue3-ui-library)

---

这次组件库开发让我对Vue3生态有了更深入的理解，也积累了宝贵的工程化经验。希望这些经验能对正在或准备开发组件库的同学有所帮助！

*如果你有任何问题或建议，欢迎在评论区交流讨论。*
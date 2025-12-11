// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件或插件
    // 例如：app.component('MyComponent', MyComponent)
  },
  setup() {
    // 可以在这里添加全局状态管理或其他设置
  }
}

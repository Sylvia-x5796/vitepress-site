import DefaultTheme from 'vitepress/theme'
import './custom.css'
import type { Theme } from 'vitepress'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 全局组件注册
    // app.component('CustomComponent', CustomComponent)
    
    // 路由守卫
    if (router.onBeforeRouteChange) {
      router.onBeforeRouteChange = (to) => {
        // 页面切换时的逻辑
        console.log('Navigating to:', to)
      }
    }
    
    // 全局属性
    app.config.globalProperties.$site = siteData
  }
}

export default theme
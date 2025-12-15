import DefaultTheme from 'vitepress/theme'
import './custom.css'
import GiscusComment from './components/GiscusComment.vue'
import GoogleAnalytics from './components/GoogleAnalytics.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('GiscusComment', GiscusComment)
    app.component('GoogleAnalytics', GoogleAnalytics)
  }
}
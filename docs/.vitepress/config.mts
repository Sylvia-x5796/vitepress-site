import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '肖息的个人网站',
  description: '肖息的前端技术个人站点 | 专注Web开发、技术分享与学习成长',
  lang: 'zh-CN',
  base: '/',
  
  // 网站头部配置
  head: [
    // Favicon 配置
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon_io/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon_io/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon_io/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/favicon_io/site.webmanifest' }],
    
    // Meta 标签
    ['meta', { name: 'author', content: '肖息' }],
    ['meta', { name: 'keywords', content: 'VitePress,个人网站,前端开发,Vue,JavaScript,肖息' }],
    ['meta', { property: 'og:title', content: '肖息的个人网站' }],
    ['meta', { property: 'og:description', content: '肖息的前端技术个人站点，专注Web开发、技术分享与学习成长' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }]
  ],

  // Markdown 配置
  markdown: {
    lineNumbers: false,
    html: true, // 允许在Markdown中使用HTML
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: '肖息的个人网站',
    
    // 导航栏配置
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '👨‍💻 关于我', link: '/about' },
      { text: '📝 博客', link: '/blog/' },
      { text: '📚 文档', link: '/docs/' },
      { 
        text: '🔗 链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/Sylvia-x5796' },
          { text: 'Gitee', link: 'https://gitee.com/sylviaxiao' },
          { text: '西南大学', link: 'https://www.swu.edu.cn/' }
        ]
      }
    ],

    // 侧边栏配置
    sidebar: {
      '/blog/': [
        {
          text: '📝 最新文章',
          collapsed: false,
          items: [
            { text: 'VitePress博客搭建指南', link: '/blog/first-post' },
            { text: '项目复盘与思考', link: '/blog/project-review' },
            { text: '前端学习路径分享', link: '/blog/tech-learning' }
          ]
        },
        {
          text: '📂 文章分类',
          collapsed: true,
          items: [
            { text: '技术教程', link: '/blog/category/tutorial' },
            { text: '学习笔记', link: '/blog/category/notes' },
            { text: '项目实战', link: '/blog/category/projects' }
          ]
        }
      ],
      '/docs/': [
        {
          text: '📖 使用指南',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/docs/guide/getting-started' },
            { text: '配置说明', link: '/docs/guide/configuration' },
            { text: '部署指南', link: '/docs/guide/deployment' },
            { text: '常见问题', link: '/docs/guide/faq' }
          ]
        },
        {
          text: '📋 参考文档',
          collapsed: false,
          items: [
            { text: 'API 参考', link: '/docs/reference/api' },
            { text: '主题配置', link: '/docs/reference/theme-config' },
            { text: '最佳实践', link: '/docs/reference/best-practices' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sylvia-x5796' },
      { 
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        }, 
        link: 'https://gitee.com/sylviaxiao' 
      }
    ],

    // 页脚配置
    footer: {
      message: '基于 VitePress 构建 | 用 ❤️ 制作',
      copyright: 'Copyright © 2025 肖息 | 西南大学软件工程专业'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Sylvia-x5796/vitepress-site/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲配置
    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    // 暗黑模式切换
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 移动端配置
    externalLinkIcon: true
  },

  // 构建配置
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },

  // 开发服务器配置
  server: {
    port: 5173,
    open: true
  }
})
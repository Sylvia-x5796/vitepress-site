// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的个人网站',
  description: '使用VitePress搭建的个人网站',
  lang: 'zh-CN',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '张三' }],
    ['meta', { name: 'keywords', content: 'VitePress,个人网站,前端开发' }]
  ],
  markdown: {
    lineNumbers: false,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    codeTransformers: [
      (code, id) => {
        if (id.endsWith('.vue')) {
          // 可以在这里添加自定义代码转换逻辑
        }
        return code
      }
    ]
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '博客', link: '/blog/' },
      { text: '文档', link: '/docs/' },
      { text: 'GitHub', link: 'https://github.com/example', target: '_blank' }
    ],
    sidebar: {
      '/blog/': [
        {
          text: '博客文章',
          collapsed: false,
          items: [
            { text: '我的第一篇博客', link: '/blog/first-post' }
          ]
        }
      ],
      '/docs/': [
        {
          text: '指南',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/docs/guide/getting-started' },
            { text: '配置', link: '/docs/guide/configuration' }
          ]
        },
        {
          text: '参考',
          collapsed: false,
          items: [
            { text: 'API', link: '/docs/reference/api' },
            { text: '主题配置', link: '/docs/reference/theme-config' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/example' },
      { icon: 'twitter', link: 'https://twitter.com/example' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/example' },
      { icon: 'discord', link: 'https://discord.gg/example' }
    ],
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2025-present 张三'
    },
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
    },
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    outline: {
      label: '目录',
      level: [2, 3]
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    editLink: {
      pattern: 'https://github.com/example/vitepress-site/edit/main/docs/:path',
      text: '编辑此页'
    }
  }
})

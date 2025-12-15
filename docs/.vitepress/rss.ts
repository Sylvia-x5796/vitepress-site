import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = 'https://sylviaxiao.gitee.io/vite-press_-sylviax'

export async function generateRssFeed(config: SiteConfig) {
  const feed = new Feed({
    title: '肖息的个人网站',
    description: '肖息的前端技术个人站点 | 专注Web开发、技术分享与学习成长',
    id: baseUrl,
    link: baseUrl,
    language: 'zh-CN',
    image: `${baseUrl}/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: 'Copyright © 2025 肖息',
    author: {
      name: '肖息',
      email: '410676208@qq.com',
      link: baseUrl
    }
  })

  // 加载所有博客文章
  const posts = await createContentLoader('blog/*.md', {
    excerpt: true,
    render: true
  }).load()

  // 按日期排序
  posts.sort((a, b) => {
    return +new Date(b.frontmatter.date || b.url) - +new Date(a.frontmatter.date || a.url)
  })

  // 添加文章到 feed
  for (const { url, excerpt, frontmatter, html } of posts) {
    // 跳过索引页
    if (url === '/blog/' || url === '/blog/index') continue

    feed.addItem({
      title: frontmatter.title || '无标题',
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt || frontmatter.description || '',
      content: html || '',
      author: [
        {
          name: '肖息',
          email: '410676208@qq.com',
          link: baseUrl
        }
      ],
      date: frontmatter.date ? new Date(frontmatter.date) : new Date()
    })
  }

  // 写入 RSS 文件
  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
  writeFileSync(path.join(config.outDir, 'feed.atom'), feed.atom1())
  writeFileSync(path.join(config.outDir, 'feed.json'), feed.json1())
}

# 功能配置指南

本文档说明如何配置新添加的功能。

## 📝 已实现的功能

- ✅ Giscus 评论系统
- ✅ Google Analytics 统计
- ✅ RSS 订阅功能
- ✅ SEO 优化
- ✅ 多语言支持框架
- ✅ 性能优化

## 🔧 配置步骤

### 1. Giscus 评论系统配置

#### 步骤 1：创建 GitHub 仓库用于评论

1. 在 GitHub 创建一个公开仓库（如 `vitepress-comments`）
2. 启用 Discussions 功能：
   - 进入仓库 Settings
   - 勾选 "Discussions"

#### 步骤 2：安装 Giscus App

访问：https://github.com/apps/giscus

点击 "Install" 并选择你的评论仓库

#### 步骤 3：获取配置信息

访问：https://giscus.app/zh-CN

填写信息：
- 仓库：`你的用户名/vitepress-comments`
- 页面 ↔️ discussion 映射关系：选择 `pathname`
- Discussion 分类：选择 `Announcements`

复制生成的配置信息

#### 步骤 4：更新配置

编辑 `docs/.vitepress/theme/components/GiscusComment.vue`：

```typescript
script.setAttribute('data-repo', 'Sylvia-x5796/vitepress-comments') // 改为你的仓库
script.setAttribute('data-repo-id', 'R_xxxxx') // 从 giscus.app 获取
script.setAttribute('data-category-id', 'DIC_xxxxx') // 从 giscus.app 获取
```

#### 控制评论显示

在文章的 frontmatter 中添加：

```yaml
---
title: 文章标题
comment: false  # 设置为 false 禁用评论
---
```

默认情况下，博客文章会显示评论，首页和文档页不显示。

---

### 2. Google Analytics 配置

#### 步骤 1：创建 GA4 账号

1. 访问：https://analytics.google.com/
2. 创建账号和媒体资源
3. 获取测量 ID（格式：G-XXXXXXXXXX）

#### 步骤 2：更新配置

编辑 `docs/.vitepress/theme/Layout.vue`：

```vue
<GoogleAnalytics id="G-XXXXXXXXXX" />  <!-- 替换为你的测量 ID -->
```

#### 验证

部署后访问 Google Analytics 实时报告，查看是否有数据。

---

### 3. RSS 订阅配置

RSS 功能已自动配置，构建时会生成以下文件：

- `/feed.rss` - RSS 2.0 格式
- `/feed.atom` - Atom 格式
- `/feed.json` - JSON Feed 格式

#### 在文章中添加日期

在博客文章的 frontmatter 中添加日期：

```yaml
---
title: 文章标题
date: 2025-01-15
description: 文章描述
---
```

#### 订阅地址

- RSS: `https://sylviaxiao.gitee.io/vite-press_-sylviax/feed.rss`
- Atom: `https://sylviaxiao.gitee.io/vite-press_-sylviax/feed.atom`
- JSON: `https://sylviaxiao.gitee.io/vite-press_-sylviax/feed.json`

#### 添加 RSS 订阅按钮

可以在导航栏或页脚添加订阅链接。

---

### 4. SEO 优化说明

已添加的 SEO 优化：

#### Meta 标签
- ✅ 作者信息
- ✅ 关键词
- ✅ Open Graph 标签（社交媒体分享）
- ✅ Twitter Card 标签
- ✅ 移动端优化标签

#### 性能优化
- ✅ DNS 预解析
- ✅ 清理 URL（移除 .html 后缀）
- ✅ 自动生成 sitemap

#### 为每篇文章添加 SEO 信息

在文章 frontmatter 中添加：

```yaml
---
title: 文章标题
description: 文章描述（用于搜索引擎）
keywords: 关键词1, 关键词2, 关键词3
date: 2025-01-15
author: 肖息
---
```

---

### 5. 多语言支持

#### 当前状态

已配置中文（简体）作为默认语言。

#### 添加英文版本

1. 创建英文内容目录：

```
docs/
├── en/
│   ├── index.md
│   ├── about.md
│   └── blog/
```

2. 取消 `config.mts` 中英文配置的注释

3. 更新导航栏和侧边栏配置

---

## 📦 安装依赖

运行以下命令安装新增的依赖：

```bash
npm install
```

新增的包：
- `giscus` - 评论系统
- `feed` - RSS 生成（需要手动安装）

手动安装 feed：

```bash
npm install feed --save-dev
```

---

## 🚀 构建和部署

```bash
# 本地开发
npm run docs:dev

# 构建（会自动生成 RSS）
npm run docs:build

# 部署
npm run build:deploy
```

---

## 📊 性能优化建议

### 1. 图片优化

- 使用 WebP 格式
- 添加图片懒加载
- 压缩图片大小

### 2. 代码分割

VitePress 已自动处理代码分割。

### 3. 缓存策略

在 Gitee Pages 或服务器上配置缓存头。

### 4. CDN 加速

考虑使用 CDN 加速静态资源。

---

## 🔍 验证功能

### 验证 SEO

使用工具：
- Google Search Console
- Bing Webmaster Tools
- https://www.seobility.net/en/seocheck/

### 验证 RSS

使用 RSS 阅读器测试：
- Feedly
- Inoreader
- RSS 验证器：https://validator.w3.org/feed/

### 验证性能

使用工具：
- Google PageSpeed Insights
- Lighthouse
- WebPageTest

---

## 📝 待办事项

完成以下配置后，所有功能即可正常使用：

- [ ] 配置 Giscus（需要 GitHub 仓库）
- [ ] 配置 Google Analytics（需要 GA 账号）
- [ ] 为博客文章添加日期和描述
- [ ] 测试 RSS 订阅
- [ ] 提交网站到搜索引擎
- [ ] 性能测试和优化

---

## 🆘 常见问题

### Q: 评论不显示？

A: 检查：
1. Giscus 配置是否正确
2. GitHub 仓库是否公开
3. Discussions 是否启用
4. 浏览器控制台是否有错误

### Q: Google Analytics 没有数据？

A: 检查：
1. 测量 ID 是否正确
2. 是否在正确的环境（生产环境）
3. 浏览器是否屏蔽了追踪脚本
4. 等待 24-48 小时数据可能才会显示

### Q: RSS 订阅链接 404？

A: 确保：
1. 已运行 `npm run docs:build`
2. RSS 文件已生成在 dist 目录
3. 已部署到服务器

---

## 📞 获取帮助

如有问题，请：
1. 查看浏览器控制台错误
2. 查看构建日志
3. 参考官方文档
4. 发送邮件到 410676208@qq.com

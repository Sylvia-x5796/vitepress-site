# ⚡ 快速配置指南

## 🎯 5分钟快速配置

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 Giscus 评论（可选）

如果需要评论功能：

1. 访问 https://giscus.app/zh-CN
2. 填写你的 GitHub 仓库信息
3. 复制生成的配置
4. 编辑 `docs/.vitepress/theme/components/GiscusComment.vue`
5. 替换以下三行：

```typescript
script.setAttribute('data-repo', '你的用户名/仓库名')
script.setAttribute('data-repo-id', '从giscus获取')
script.setAttribute('data-category-id', '从giscus获取')
```

### 3. 配置 Google Analytics（可选）

如果需要统计功能：

1. 获取 GA 测量 ID（格式：G-XXXXXXXXXX）
2. 编辑 `docs/.vitepress/theme/Layout.vue`
3. 替换：

```vue
<GoogleAnalytics id="G-XXXXXXXXXX" />
```

### 4. 测试

```bash
# 本地开发
npm run docs:dev

# 构建测试
npm run docs:build
```

### 5. 部署

```bash
npm run build:deploy
```

## ✅ 功能清单

- [x] RSS 订阅（自动生成）
- [x] SEO 优化（已配置）
- [x] 性能优化（已配置）
- [ ] Giscus 评论（需要配置）
- [ ] Google Analytics（需要配置）

## 📝 注意事项

1. **Giscus 和 Google Analytics 是可选的**
   - 不配置也不影响网站正常运行
   - 只是评论和统计功能不可用

2. **RSS 自动生成**
   - 每次构建时自动生成
   - 订阅地址：`/feed.rss`

3. **SEO 已优化**
   - Meta 标签已配置
   - Sitemap 自动生成
   - 只需提交到搜索引擎

## 🚀 立即开始

```bash
# 1. 安装
npm install

# 2. 开发
npm run docs:dev

# 3. 部署
npm run build:deploy
```

完成！🎉

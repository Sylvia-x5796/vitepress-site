# 🚀 双平台部署完整指南

## 📋 问题解决

### 原问题
GitHub Pages 网站混乱是因为 `base` 路径配置错误。

### 解决方案
创建了两个独立的配置文件，分别用于 GitHub 和 Gitee 部署。

## 📁 项目结构

```
vitepress-site/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 自动部署
├── docs/
│   └── .vitepress/
│       ├── config.mts              # Gitee 配置
│       └── config.github.mts       # GitHub 配置
├── package.json                    # 包含双平台部署脚本
├── DEPLOY_GITHUB.md               # GitHub 部署指南
└── GITHUB_DEPLOY_MANUAL.md        # 手动部署指南
```

## 🎯 部署命令

### Gitee Pages

```bash
# 构建并部署到 Gitee
npm run build:deploy:gitee

# 或分步执行
npm run docs:build
npm run deploy:gitee
```

### GitHub Pages

```bash
# 构建并部署到 GitHub
npm run build:deploy:github

# 或分步执行
npm run docs:build:github
npm run deploy:github
```

## 🔧 配置对比

| 配置项 | Gitee | GitHub |
|--------|-------|--------|
| **配置文件** | `config.mts` | `config.github.mts` |
| **base 路径** | `/vite-press_-sylviax/` | `/vitepress-site/` |
| **网站地址** | sylviaxiao.gitee.io | sylvia-x5796.github.io |
| **仓库路径** | vite-press_-sylviax | vitepress-site |
| **构建命令** | `docs:build` | `docs:build:github` |
| **部署命令** | `deploy:gitee` | `deploy:github` |

## 🌐 访问地址

### Gitee Pages
**https://sylviaxiao.gitee.io/vite-press_-sylviax/**

- 国内访问速度快
- 需要手动点击"更新"
- 免费版有限制

### GitHub Pages
**https://sylvia-x5796.github.io/vitepress-site/**

- 国际访问速度快
- 支持自动部署（GitHub Actions）
- 完全免费

## 🤖 自动化部署

### GitHub Actions（推荐）

已配置 GitHub Actions，只需：

```bash
git add .
git commit -m "Update content"
git push origin master
```

GitHub 会自动：
1. 检测到代码推送
2. 运行构建
3. 部署到 GitHub Pages

查看部署状态：
https://github.com/Sylvia-x5796/vitepress-site/actions

### Gitee 自动部署

Gitee Pages 免费版不支持自动部署，需要：
1. 运行 `npm run build:deploy:gitee`
2. 访问 Gitee Pages 管理页面
3. 手动点击"更新"按钮

## 📝 工作流程

### 日常更新流程

1. **修改内容**
   ```bash
   # 编辑 Markdown 文件
   vim docs/blog/new-post.md
   ```

2. **本地预览**
   ```bash
   npm run docs:dev
   ```

3. **部署到 Gitee**
   ```bash
   npm run build:deploy:gitee
   # 然后在 Gitee 页面点击"更新"
   ```

4. **部署到 GitHub**
   ```bash
   git add .
   git commit -m "Add new post"
   git push origin master
   # GitHub Actions 自动部署
   ```

### 快速部署到两个平台

```bash
# 1. 部署到 Gitee
npm run build:deploy:gitee

# 2. 提交代码（触发 GitHub Actions）
git add .
git commit -m "Update content"
git push origin master

# 3. 在 Gitee 页面点击"更新"
```

## ⚙️ 配置说明

### 为什么需要两个配置？

因为两个平台的路径不同：

```typescript
// Gitee 配置 (config.mts)
base: '/vite-press_-sylviax/'

// GitHub 配置 (config.github.mts)
base: '/vitepress-site/'
```

如果使用错误的配置，会导致：
- ❌ CSS 样式无法加载
- ❌ JavaScript 无法执行
- ❌ 图片无法显示
- ❌ 链接跳转错误

### 如何切换配置？

通过不同的构建命令自动切换：

```bash
# 使用 Gitee 配置
npm run docs:build

# 使用 GitHub 配置
npm run docs:build:github
```

## 🎨 自定义域名

如果你有自定义域名：

1. **修改配置**
   ```typescript
   export default defineConfig({
     base: '/',  // 改为根路径
     sitemap: {
       hostname: 'https://your-domain.com'
     }
   })
   ```

2. **配置 DNS**
   - 添加 CNAME 记录指向 GitHub/Gitee Pages

3. **配置平台**
   - GitHub: 在 Settings → Pages 中设置自定义域名
   - Gitee: 需要 Pro 版本

## 🔍 故障排查

### GitHub Pages 显示混乱

✅ **已解决**：使用正确的配置文件 `config.github.mts`

### Gitee Pages 不更新

**原因**：免费版需要手动更新

**解决**：访问 Gitee Pages 管理页面点击"更新"

### 部署失败

**检查清单**：
- [ ] 网络连接正常
- [ ] Git 仓库地址正确
- [ ] 有推送权限
- [ ] 构建命令正确
- [ ] 配置文件无误

### 404 错误

**检查**：
- [ ] base 路径配置正确
- [ ] 使用了正确的构建命令
- [ ] 等待部署完成
- [ ] 清除浏览器缓存

## 📊 性能对比

| 指标 | Gitee Pages | GitHub Pages |
|------|-------------|--------------|
| 国内访问速度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 国外访问速度 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 自动部署 | ❌ | ✅ |
| 自定义域名 | Pro版 | 免费 |
| 构建速度 | 快 | 快 |
| 稳定性 | 高 | 高 |

## 🎉 完成

现在你的网站可以在两个平台正常访问了！

- ✅ GitHub Pages 配置正确
- ✅ Gitee Pages 配置正确
- ✅ 自动化部署已配置
- ✅ 双平台独立管理

## 📞 获取帮助

如果遇到问题：

1. 查看 [DEPLOY_GITHUB.md](./DEPLOY_GITHUB.md) - GitHub 部署详细指南
2. 查看 [GITHUB_DEPLOY_MANUAL.md](./GITHUB_DEPLOY_MANUAL.md) - 手动部署方案
3. 查看 [GITEE_DEPLOY.md](./GITEE_DEPLOY.md) - Gitee 部署指南
4. 检查 GitHub Actions 日志
5. 发送邮件到 410676208@qq.com

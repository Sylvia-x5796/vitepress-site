# 🚀 部署完全指南

## 📋 快速参考

### 部署命令

```bash
# Gitee Pages
npm run build:deploy:gitee
# 然后访问 Gitee 页面点击"更新"

# GitHub Pages（自动）
git push origin master
# GitHub Actions 自动部署

# GitHub Pages（手动）
npm run build:deploy:github
```

### 访问地址

- **Gitee**: https://sylviaxiao.gitee.io/vite-press_-sylviax/
- **GitHub**: https://sylvia-x5796.github.io/vitepress-site/

## 🎯 核心配置

### 环境变量方案

使用一个配置文件 + 环境变量支持双平台：

```typescript
// docs/.vitepress/config.mts
const base = process.env.VITE_BASE_PATH || '/vite-press_-sylviax/'
const hostname = process.env.VITE_HOSTNAME || 'https://sylviaxiao.gitee.io/vite-press_-sylviax'
```

### 构建命令

```json
{
  "docs:build": "vitepress build docs",
  "docs:build:github": "cross-env VITE_BASE_PATH=/vitepress-site/ VITE_HOSTNAME=https://sylvia-x5796.github.io/vitepress-site vitepress build docs"
}
```

## 📁 文件结构

```
.github/
└── workflows/
    └── main.yml              # GitHub Actions（已整合，使用正确配置）

docs/
└── .vitepress/
    ├── config.mts            # 主配置（支持环境变量）
    └── config.github.mts     # 备用（不再使用）

package.json                  # 包含双平台部署脚本
```

## ✅ 已解决的问题

### 1. GitHub Pages 显示混乱
- **原因**: base 路径配置错误
- **解决**: 使用环境变量动态配置

### 2. 配置文件切换不生效
- **原因**: VitePress --config 参数不可靠
- **解决**: 改用环境变量方案

### 3. 两个工作流冲突
- **原因**: main.yml 和 deploy.yml 都监听 master 分支
- **解决**: 整合到 main.yml，删除 deploy.yml

### 4. 需要手动配置 PAT
- **原因**: 使用了 secrets.GH_PAT
- **解决**: 改用 GITHUB_TOKEN（自动提供）

## 🔧 GitHub Actions 配置

### 关键改动

```yaml
# ✅ 使用 GitHub 配置构建
- name: 使用 GitHub 配置构建 VitePress 站点
  run: npm run docs:build:github

# ✅ 使用自动提供的 Token
- name: 部署到 GitHub Pages
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

### 工作流程

1. 推送代码到 master
2. GitHub Actions 自动触发
3. 使用 GitHub 配置构建
4. 验证构建结果
5. 部署到 gh-pages 分支
6. GitHub Pages 自动发布

## 📝 日常工作流程

### 更新内容

```bash
# 1. 编辑内容
vim docs/blog/new-post.md

# 2. 本地预览
npm run docs:dev

# 3. 提交代码
git add .
git commit -m "Add new post"

# 4. 推送（触发自动部署）
git push origin master
```

### 部署到 Gitee

```bash
# 构建并部署
npm run build:deploy:gitee

# 访问 Gitee Pages 管理页面
# https://gitee.com/sylviaxiao/vite-press_-sylviax/pages
# 点击"更新"按钮
```

## 🔍 验证部署

### 检查构建路径

```bash
# Gitee 构建
npm run docs:build
grep -o 'href="/[^"]*"' docs/.vitepress/dist/index.html | head -1
# 应该看到: href="/vite-press_-sylviax/...

# GitHub 构建
npm run docs:build:github
grep -o 'href="/[^"]*"' docs/.vitepress/dist/index.html | head -1
# 应该看到: href="/vitepress-site/...
```

### 查看部署状态

- **GitHub**: https://github.com/Sylvia-x5796/vitepress-site/actions
- **Gitee**: https://gitee.com/sylviaxiao/vite-press_-sylviax/pages

## 📚 相关文档

| 文档 | 说明 |
|------|------|
| [FINAL_SOLUTION.md](./FINAL_SOLUTION.md) | 最终解决方案详解 |
| [GITHUB_ACTIONS_GUIDE.md](./GITHUB_ACTIONS_GUIDE.md) | GitHub Actions 详细指南 |
| [DUAL_PLATFORM_DEPLOY.md](./DUAL_PLATFORM_DEPLOY.md) | 双平台部署完整指南 |
| [DEPLOY_GITHUB.md](./DEPLOY_GITHUB.md) | GitHub 部署指南 |
| [GITEE_DEPLOY.md](./GITEE_DEPLOY.md) | Gitee 部署指南 |

## 🎯 下一步

### 立即执行

1. **推送代码触发 GitHub Actions**
   ```bash
   git add .
   git commit -m "Fix GitHub Actions configuration"
   git push origin master
   ```

2. **查看部署状态**
   - 访问 https://github.com/Sylvia-x5796/vitepress-site/actions
   - 等待部署完成（约 2-3 分钟）

3. **更新 Gitee Pages**
   - 访问 https://gitee.com/sylviaxiao/vite-press_-sylviax/pages
   - 点击"更新"按钮

4. **验证网站**
   - GitHub: https://sylvia-x5796.github.io/vitepress-site/
   - Gitee: https://sylviaxiao.gitee.io/vite-press_-sylviax/

## ⚠️ 重要提示

### GitHub Pages
- ✅ 自动部署（推送即可）
- ✅ 无需手动配置 Token
- ✅ 有详细的部署日志
- ⏱️ 部署时间：2-3 分钟

### Gitee Pages
- ⚠️ 需要手动点击"更新"
- ⚠️ 免费版有限制
- ✅ 国内访问速度快
- ⏱️ 更新时间：2-3 分钟

## 🎉 完成

现在你的部署配置已经完全优化：

- ✅ 一个配置文件支持双平台
- ✅ GitHub Actions 自动部署
- ✅ 无需手动配置 Token
- ✅ 有完整的验证机制
- ✅ 详细的文档说明

只需 `git push`，GitHub 自动部署！
Gitee 只需点击"更新"按钮！

---

**最后更新**: 2025-01-15
**维护者**: 肖息
**联系方式**: 410676208@qq.com

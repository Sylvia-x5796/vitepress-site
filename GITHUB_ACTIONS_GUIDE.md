# GitHub Actions 部署指南

## 📋 工作流说明

### 文件位置
`.github/workflows/main.yml`

### 触发条件
- 推送到 `master` 分支时自动运行
- 可以手动触发（workflow_dispatch）

### 关键改动

#### ✅ 已修复的问题

1. **使用正确的构建命令**
   ```yaml
   # ❌ 错误（使用默认配置，base 路径错误）
   run: vitepress build docs
   
   # ✅ 正确（使用 GitHub 配置）
   run: npm run docs:build:github
   ```

2. **使用 GITHUB_TOKEN**
   ```yaml
   # ❌ 旧配置（需要手动创建 PAT）
   github_token: ${{ secrets.GH_PAT }}
   
   # ✅ 新配置（自动提供，无需配置）
   github_token: ${{ secrets.GITHUB_TOKEN }}
   ```

3. **添加权限声明**
   ```yaml
   permissions:
     contents: write
   ```

4. **添加构建验证**
   ```yaml
   - name: 检查打包文件是否生成
     run: |
       echo "查看打包目录文件列表："
       ls -l ./docs/.vitepress/dist
       echo "检查 base 路径配置："
       grep -o 'href="/[^"]*"' ./docs/.vitepress/dist/index.html | head -3
   ```

## 🚀 使用方法

### 自动部署

只需推送代码：

```bash
git add .
git commit -m "Update content"
git push origin master
```

GitHub Actions 会自动：
1. 检测到代码推送
2. 使用 GitHub 配置构建网站
3. 部署到 `gh-pages` 分支
4. GitHub Pages 自动发布

### 手动触发

1. 访问 https://github.com/Sylvia-x5796/vitepress-site/actions
2. 选择 "Deploy VitePress to GitHub Pages" 工作流
3. 点击 "Run workflow"
4. 选择 `master` 分支
5. 点击 "Run workflow" 按钮

## 📊 查看部署状态

### 方法 1：Actions 页面

访问：https://github.com/Sylvia-x5796/vitepress-site/actions

可以看到：
- ✅ 成功的部署（绿色勾）
- ❌ 失败的部署（红色叉）
- 🟡 进行中的部署（黄色圆圈）

点击任意工作流可以查看详细日志。

### 方法 2：提交页面

在提交记录旁边会显示部署状态图标。

### 方法 3：Pages 设置

访问：https://github.com/Sylvia-x5796/vitepress-site/settings/pages

可以看到最新的部署状态和访问地址。

## 🔧 配置说明

### 环境变量

工作流使用 `npm run docs:build:github`，该命令会设置：

```bash
VITE_BASE_PATH=/vitepress-site/
VITE_HOSTNAME=https://sylvia-x5796.github.io/vitepress-site
```

这些环境变量会被 `docs/.vitepress/config.mts` 读取，动态设置 base 路径。

### 构建命令对比

| 命令 | 用途 | base 路径 |
|------|------|-----------|
| `npm run docs:build` | Gitee Pages | `/vite-press_-sylviax/` |
| `npm run docs:build:github` | GitHub Pages | `/vitepress-site/` |

### 部署分支

- **源代码分支**: `master`
- **部署分支**: `gh-pages`（自动创建和更新）

## ⚠️ 注意事项

### 1. 不要手动修改 gh-pages 分支

`gh-pages` 分支由 GitHub Actions 自动管理，手动修改会被覆盖。

### 2. 确保 GitHub Pages 设置正确

访问：https://github.com/Sylvia-x5796/vitepress-site/settings/pages

确认：
- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

### 3. 首次部署可能需要几分钟

首次部署或大量更改时，可能需要 3-5 分钟才能看到更新。

### 4. 不需要 GH_PAT

新配置使用 `GITHUB_TOKEN`，这是 GitHub 自动提供的，不需要手动创建 Personal Access Token。

## 🔍 故障排查

### 部署失败

1. **查看 Actions 日志**
   - 访问 Actions 页面
   - 点击失败的工作流
   - 查看红色的步骤
   - 展开查看详细错误信息

2. **常见错误**

   **错误：权限不足**
   ```
   Error: Resource not accessible by integration
   ```
   解决：确保工作流文件中有 `permissions: contents: write`

   **错误：构建失败**
   ```
   Error: Command failed: npm run docs:build:github
   ```
   解决：本地运行 `npm run docs:build:github` 检查错误

   **错误：找不到文件**
   ```
   Error: No such file or directory: docs/.vitepress/dist
   ```
   解决：检查构建命令是否正确执行

### 网站显示混乱

1. **检查 base 路径**
   
   在 Actions 日志中查找 "检查 base 路径配置" 步骤，应该看到：
   ```
   href="/vitepress-site/...
   ```

2. **清除缓存**
   
   使用无痕模式访问或清除浏览器缓存。

3. **等待部署完成**
   
   确保 Actions 显示绿色勾（成功），并等待 1-2 分钟。

## 📝 工作流程图

```
推送代码到 master
    ↓
触发 GitHub Actions
    ↓
拉取代码
    ↓
安装依赖
    ↓
使用 GitHub 配置构建
    ↓
验证构建结果
    ↓
部署到 gh-pages 分支
    ↓
GitHub Pages 自动发布
    ↓
网站更新完成
```

## 🎯 最佳实践

### 1. 本地测试后再推送

```bash
# 本地测试
npm run docs:dev

# 测试构建
npm run docs:build:github
npm run docs:preview

# 确认无误后推送
git push origin master
```

### 2. 使用有意义的提交信息

```bash
# ✅ 好的提交信息
git commit -m "Add new blog post about VitePress"
git commit -m "Fix navigation links"
git commit -m "Update about page"

# ❌ 不好的提交信息
git commit -m "update"
git commit -m "fix"
```

### 3. 定期检查 Actions 状态

即使部署成功，也建议偶尔查看 Actions 日志，确保没有警告。

## 🆚 对比：main.yml vs deploy.yml

| 特性 | main.yml（当前） | deploy.yml（已删除） |
|------|------------------|---------------------|
| 构建命令 | ✅ `npm run docs:build:github` | ❌ `npm run docs:build` |
| Token | ✅ `GITHUB_TOKEN`（自动） | ❌ `GH_PAT`（需手动配置） |
| 权限 | ✅ 已声明 | ❌ 未声明 |
| 验证 | ✅ 检查 base 路径 | ❌ 无验证 |
| 状态 | ✅ 使用中 | ❌ 已删除 |

## 🎉 完成

现在你只有一个工作流文件 `main.yml`，它会：

- ✅ 使用正确的 GitHub 配置构建
- ✅ 自动部署到 GitHub Pages
- ✅ 验证构建结果
- ✅ 无需手动配置 Token

只需 `git push`，一切自动完成！

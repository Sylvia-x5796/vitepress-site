# Gitee Pages 部署指南

本项目使用 Gitee Pages 进行部署，以下是详细的部署步骤。

## 🚀 快速部署

### 1. 推送代码到 Gitee

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "Update website content"

# 推送到 Gitee
git push origin master
```

### 2. 构建并部署

```bash
# 一键构建并部署
npm run build:deploy
```

### 3. 更新 Gitee Pages

1. 访问 [Gitee 仓库页面](https://gitee.com/sylviaxiao/xiao-xis-personal-homepage)
2. 点击 "服务" → "Gitee Pages"
3. 点击 "更新" 按钮
4. 等待部署完成

## 📋 详细步骤

### 首次设置

1. **确保 Git 仓库已连接**
   ```bash
   git remote -v
   # 应该显示：
   # origin  https://gitee.com/sylviaxiao/xiao-xis-personal-homepage.git (fetch)
   # origin  https://gitee.com/sylviaxiao/xiao-xis-personal-homepage.git (push)
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **测试构建**
   ```bash
   npm run docs:build
   ```

### 部署流程

1. **本地开发**
   ```bash
   npm run docs:dev
   ```

2. **构建项目**
   ```bash
   npm run docs:build
   ```

3. **部署到 gh-pages 分支**
   ```bash
   npm run deploy
   ```

4. **在 Gitee 上更新 Pages**
   - 进入仓库页面
   - 服务 → Gitee Pages
   - 选择 `gh-pages` 分支
   - 点击 "更新"

## 🔧 故障排除

### 常见问题

1. **部署失败：没有 Git 仓库**
   ```bash
   git init
   git remote add origin https://gitee.com/sylviaxiao/xiao-xis-personal-homepage.git
   ```

2. **推送权限问题**
   - 确保已登录 Git
   - 检查 SSH 密钥或使用 HTTPS 认证

3. **Gitee Pages 不更新**
   - 手动点击 "更新" 按钮
   - 检查 `gh-pages` 分支是否有新内容
   - 考虑升级到 Gitee Pages Pro

### 分支说明

- `master`: 源代码分支
- `gh-pages`: 构建后的静态文件分支（用于 Gitee Pages）

## 🌐 访问地址

部署成功后，网站可通过以下地址访问：

**主要地址**: https://sylviaxiao.gitee.io/xiao-xis-personal-homepage

## 📝 注意事项

1. **免费版限制**: Gitee Pages 免费版需要手动更新
2. **构建时间**: 每次部署需要等待 Gitee Pages 构建完成
3. **缓存问题**: 如果更新没有生效，可能需要清除浏览器缓存
4. **文件大小**: 注意静态文件大小，避免超出 Gitee 限制

## 🔄 自动化部署（可选）

如果需要自动化部署，可以考虑：

1. **Gitee Pages Pro**: 支持自动更新
2. **第三方 CI/CD**: 如 GitHub Actions + 同步到 Gitee
3. **Webhook**: 配置 Webhook 触发自动更新

## 📞 支持

如果遇到部署问题，可以：

1. 查看 [Gitee Pages 官方文档](https://gitee.com/help/articles/4136)
2. 在仓库中提交 Issue
3. 发送邮件到 410676208@qq.com
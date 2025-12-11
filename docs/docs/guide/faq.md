---
title: 常见问题
description: VitePress 使用过程中的常见问题解答
---

# 常见问题

## 🚀 安装和配置

### Q: 如何安装 VitePress？

A: 你可以使用以下命令安装 VitePress：

```bash
npm install -D vitepress
# 或
yarn add -D vitepress
# 或
pnpm add -D vitepress
```

### Q: 如何初始化一个新的 VitePress 项目？

A: 创建基本的目录结构：

```bash
mkdir docs
echo "# Hello VitePress" > docs/index.md
```

然后在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 📝 内容编写

### Q: 如何添加新页面？

A: 在 `docs` 目录下创建新的 `.md` 文件，VitePress 会自动生成对应的路由。

### Q: 如何配置导航和侧边栏？

A: 在 `docs/.vitepress/config.mts` 文件中配置：

```typescript
export default defineConfig({
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        { text: '快速开始', link: '/guide/getting-started' }
      ]
    }
  }
})
```

## 🎨 主题定制

### Q: 如何自定义样式？

A: 创建 `docs/.vitepress/theme/custom.css` 文件并在主题入口文件中引入：

```typescript
// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default DefaultTheme
```

### Q: 如何修改主色调？

A: 在自定义 CSS 中覆盖 CSS 变量：

```css
:root {
  --vp-c-brand: #3b82f6;
  --vp-c-brand-light: #60a5fa;
}
```

## 🚀 部署

### Q: 如何部署到 GitHub Pages？

A: 1. 在项目根目录创建 `.github/workflows/deploy.yml`
2. 配置 GitHub Actions 工作流
3. 推送代码到 GitHub
4. 在仓库设置中启用 GitHub Pages

### Q: 构建时出现 "dead link" 错误怎么办？

A: 检查所有的内部链接是否指向存在的文件。如果链接是故意的，可以在配置中忽略：

```typescript
export default defineConfig({
  ignoreDeadLinks: true
  // 或者忽略特定模式
  // ignoreDeadLinks: [/^https?:\/\/localhost/]
})
```

## 🔧 故障排除

### Q: 开发服务器启动失败？

A: 常见解决方案：
1. 检查 Node.js 版本（推荐 v18+）
2. 清除 node_modules 并重新安装
3. 检查端口是否被占用

### Q: 图片不显示？

A: 确保图片放在 `docs/public` 目录下，并使用正确的路径引用：

```markdown
![图片描述](/images/example.jpg)
```

### Q: 样式不生效？

A: 检查：
1. CSS 文件路径是否正确
2. 是否正确引入了自定义样式
3. 浏览器缓存问题（尝试硬刷新）

## 📚 更多资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue.js 官方文档](https://vuejs.org/)
- [Markdown 语法指南](https://www.markdownguide.org/)

---

如果你的问题没有在这里找到答案，欢迎：
- 📧 发送邮件到 [410676208@qq.com](mailto:410676208@qq.com)
- 💬 在 GitHub Issues 中提问
- 🔍 使用页面顶部的搜索功能查找相关内容
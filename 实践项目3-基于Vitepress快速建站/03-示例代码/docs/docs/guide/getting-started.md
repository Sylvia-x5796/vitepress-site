---
title: 快速开始
description: 快速开始使用VitePress
---

# 快速开始

## 安装

首先，你需要安装VitePress。你可以使用npm、yarn或pnpm来安装：

```bash
# 使用npm
npm install vitepress@latest

# 使用yarn
yarn add vitepress@latest

# 使用pnpm
pnpm add vitepress@latest
```

## 创建项目结构

创建一个基本的VitePress项目结构：

```bash
# 创建docs目录
mkdir docs

# 创建基本的Markdown文件
touch docs/index.md
```

## 配置package.json

在package.json中添加VitePress的脚本命令：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 启动开发服务器

运行以下命令启动开发服务器：

```bash
npm run docs:dev
```

然后打开浏览器访问本地开发服务器地址查看效果。

## 构建网站

当你完成网站开发后，可以运行以下命令构建静态网站：

```bash
npm run docs:build
```

构建完成后，静态文件将生成在docs/.vitepress/dist目录中。

## 预览构建结果

你可以使用以下命令预览构建后的网站：

```bash
npm run docs:preview
```

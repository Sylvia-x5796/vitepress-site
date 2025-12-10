---
title: 博客
description: 我的博客文章列表
---

# 博客

这里是我所有的博客文章。

<div class="card-group">
  <div class="card">
    <div class="card-title">
      <a href="/blog/first-post">我的第一篇博客</a>
    </div>
    <div class="card-description">
      这是我使用VitePress创建的第一篇博客文章，介绍了如何使用VitePress搭建个人网站和博客。
    </div>
    <div class="card-footer">
      <span class="card-meta">2025-01-01</span>
    </div>
  </div>
</div>

<style scoped>
.card-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.card {
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.card-footer {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>
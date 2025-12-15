<template>
  <div class="giscus-wrapper">
    <div id="giscus-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()

const loadGiscus = () => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'Sylvia-x5796/vitepress-comments') // 替换为你的 GitHub 仓库
  script.setAttribute('data-repo-id', 'YOUR_REPO_ID') // 需要配置
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID') // 需要配置
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  const container = document.getElementById('giscus-container')
  if (container) {
    container.innerHTML = ''
    container.appendChild(script)
  }
}

onMounted(() => {
  loadGiscus()
})

// 监听主题变化
watch(isDark, () => {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  if (iframe) {
    iframe.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: isDark.value ? 'dark' : 'light'
          }
        }
      },
      'https://giscus.app'
    )
  }
})

// 监听路由变化
watch(() => route.path, () => {
  loadGiscus()
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

#giscus-container {
  min-height: 200px;
}
</style>

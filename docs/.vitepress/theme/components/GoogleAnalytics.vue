<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const props = defineProps<{
  id: string
}>()

const router = useRouter()

onMounted(() => {
  // 加载 Google Analytics
  if (typeof window !== 'undefined' && props.id) {
    // 添加 gtag.js 脚本
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${props.id}`
    document.head.appendChild(script1)

    // 初始化 gtag
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${props.id}');
    `
    document.head.appendChild(script2)

    // 监听路由变化
    router.onAfterRouteChanged = (to) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', props.id, {
          page_path: to
        })
      }
    }
  }
})
</script>

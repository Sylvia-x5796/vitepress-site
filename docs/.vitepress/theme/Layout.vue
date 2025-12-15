<template>
  <Layout>
    <!-- Google Analytics -->
    <template #layout-top>
      <GoogleAnalytics id="G-XXXXXXXXXX" />
    </template>
    
    <!-- 在文档内容后添加评论 -->
    <template #doc-after>
      <div v-if="showComment" class="comment-section">
        <GiscusComment />
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import GiscusComment from './components/GiscusComment.vue'
import GoogleAnalytics from './components/GoogleAnalytics.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
const route = useRoute()

// 判断是否显示评论（博客文章显示，首页和文档页不显示）
const showComment = computed(() => {
  // 可以通过 frontmatter 控制
  if (frontmatter.value.comment === false) {
    return false
  }
  
  // 博客文章显示评论
  return route.path.startsWith('/blog/') && route.path !== '/blog/' && route.path !== '/blog/index'
})
</script>

<style scoped>
.comment-section {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 960px) {
  .comment-section {
    padding: 0 64px;
  }
}
</style>

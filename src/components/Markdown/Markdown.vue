// /components/Markdown.vue
<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts" setup>
// 传入的md文件
const {content} = defineProps<{ content: string }>()
</script>

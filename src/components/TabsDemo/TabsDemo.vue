<template>
  <div>Tabs 示例</div>
  <h2>示例1</h2>
  <PTabs v-model:selected="x">
    <PTab title="导航1">内容1</PTab>
    <PTab title="导航2">内容2</PTab>
    <PTab title="导航33333333333">内容3</PTab>
    <PTab title="导航4">内容4</PTab>
  </PTabs>
</template>

<script lang='ts' setup>

import PTabs from '@/lib/Tabs/PTabs.vue'
import PTab from '@/lib/Tab/PTab.vue'

const x = ref('导航1')
</script>

<style lang="scss" scoped>

</style>

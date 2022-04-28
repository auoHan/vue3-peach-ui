<template>
  <p>Dialog 示例</p>
  <h2>示例1</h2>
  <PButton @click="onVisible">toggle</PButton>
  <PDialog v-model:visible="visible" :cancel="cancel" :ok="ok">
    <template #title>
      <strong>标题</strong>
    </template>
    <p>hi!</p>
    <p>hello!</p>
  </PDialog>
</template>

<script lang='ts' setup>

import PDialog from '@/lib/Dialog/PDialog.vue'
import PButton from '@/lib/Button/PButton.vue'

const visible = ref(false)
const onVisible = () => {
  visible.value = true
}

const ok = () => {
  console.log('ok')
  return false
}
const cancel = () => {
  console.log('cancel')
}
</script>

<style lang="scss" scoped>

</style>

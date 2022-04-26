<template>
  <p>Dialog 示例</p>
  <h2>示例1</h2>
  <Button @click="onVisible">toggle</Button>
  <Dialog v-model:visible="visible" :cancel="cancel" :ok="ok">
    <p>hi!</p>
    <p>hello!</p>
  </Dialog>
</template>

<script lang='ts' setup>

import Dialog from '@/lib/Dialog/Dialog.vue'
import Button from '@/lib/Button/Button.vue'

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

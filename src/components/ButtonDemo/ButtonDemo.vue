<template>
  <p>button示例</p>
  <h2>示例1</h2>
  <Button size="small" @click="onClick" @focus="onClick" @mouseover="onClick">
    你好
  </Button>
</template>

<script lang='ts' setup>

import Button from '@/lib/Button/Button.vue'

const onClick = () => {
  console.log('onClick')
}
</script>

<style lang="scss" scoped>

</style>

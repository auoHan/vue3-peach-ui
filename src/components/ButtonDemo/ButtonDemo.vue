<template>
  <p>button示例</p>
  <h2>示例1</h2>
  <div>
    <PButton @click="onClick">你好</PButton>
    <PButton theme="button">你好</PButton>
    <PButton theme="link">你好</PButton>
    <PButton theme="text">你好</PButton>
  </div>
  <h2>示例2</h2>
  <div>
    <div>
      <PButton size="big">大大大</PButton>
      <PButton>普普通通</PButton>
      <PButton size="small">小小小</PButton>
    </div>
    <div>
      <PButton size="big" theme="link">大大大</PButton>
      <PButton theme="link">普普通通</PButton>
      <PButton size="small" theme="link">小小小</PButton>
    </div>
    <div>
      <PButton size="big" theme="text">大大大</PButton>
      <PButton theme="text">普普通通</PButton>
      <PButton size="small" theme="text">小小小</PButton>
    </div>
  </div>
  <h2>示例3</h2>
  <div>
    <div>
      <PButton level="main">主要按钮</PButton>
      <PButton>普通按钮</PButton>
      <PButton level="danger">危险按钮</PButton>
    </div>
    <div>
      <PButton level="main" theme="link">主要链接按钮</PButton>
      <PButton theme="link">普通链接按钮</PButton>
      <PButton level="danger" theme="link">危险链接按钮</PButton>
    </div>
    <div>
      <PButton level="main" theme="text">主要文字按钮</PButton>
      <PButton theme="text">普通文字按钮</PButton>
      <PButton level="danger" theme="text">危险文字按钮</PButton>
    </div>
  </div>
  <h2>示例4</h2>
  <div>
    <PButton disabled>禁用按钮</PButton>
    <PButton disabled theme="link">禁用链接按钮</PButton>
    <PButton disabled theme="text">禁用按钮</PButton>
  </div>
  <h2>示例5</h2>
  <div>
    <PButton loading>加载中</PButton>
    <PButton>加载完毕</PButton>
  </div>
</template>

<script lang='ts' setup>

import PButton from '@/lib/Button/PButton.vue'

const onClick = () => {
  console.log('onClick~~~')
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <p>button示例</p>
  <h2>示例1</h2>
  <div>
    <Button @click="onClick">你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h2>示例2</h2>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>普普通通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="link">大大大</Button>
      <Button theme="link">普普通通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
  <h2>示例3</h2>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button level="main" theme="link">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button level="danger" theme="link">危险链接按钮</Button>
    </div>
    <div>
      <Button level="main" theme="text">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button level="danger" theme="text">危险文字按钮</Button>
    </div>
  </div>
  <h2>示例4</h2>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button disabled theme="link">禁用链接按钮</Button>
    <Button disabled theme="text">禁用按钮</Button>
  </div>
  <h2>示例5</h2>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang='ts' setup>

import Button from '@/lib/Button/Button.vue'

const onClick = () => {
  console.log('onClick~~~')
}
</script>

<style lang="scss" scoped>

</style>

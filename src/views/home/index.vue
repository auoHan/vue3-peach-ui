<template>
  <TopNav/>
  <div class="banner">
    <h1>水蜜桃UI</h1>
    <h2>一个简洁的 UI 框架</h2>
    <p class="actions">
      <a href="https://github.com/auoHan/vue3-peach-ui">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>

<script setup lang='ts'>

import TopNav from '@/components/TopNav/TopNav.vue'</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      height: $home-h;
      line-height: $home-h;
      border-radius: calc(#{$home-h} / 2);
      padding: 0 8px;
    }
  }
}
</style>

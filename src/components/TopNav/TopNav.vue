<template>
  <div class="top-nav">
    <div class="logo" @click.prevent="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script setup lang='ts'>

import {Ref} from 'vue'

const asideVisible = inject<Ref<boolean>>('asideVisible', ref(true))
const toggleMenu = () => {
  asideVisible.value = !asideVisible.value
}
</script>

<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 20;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>

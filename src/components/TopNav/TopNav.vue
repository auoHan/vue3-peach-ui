<template>
  <div class="top-nav">
    <span class="logo" @click.prevent="toggleLogo">
      <SvgIcon name="水蜜桃" class="icon-logo"/>
    </span>
    <span @click.prevent="toggleAside">
      <SvgIcon name="menu" color="#ec9bad" class="icon-menu"/>
    </span>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script setup lang='ts'>

import {Ref} from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

const router = useRouter()
const asideVisible = inject<Ref<boolean>>('asideVisible', ref(true))
const toggleAside = () => {
  asideVisible.value = !asideVisible.value
}
const toggleLogo = () => {
  router.push('/')
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

  > span {
    > .icon-menu {
      width: 32px;
      height: 32px;
    }

    > .icon-logo {
      width: 32px;
      height: 32px;
    }
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

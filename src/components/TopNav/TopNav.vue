<template>
  <div ref="topNavRef" class="top-nav">
    <span class="logo" @click.prevent="toggleLogo">
      <SvgIcon class="icon" name="水蜜桃"/>
    </span>
    <span class="toggleAside" @click.prevent="toggleAside">
      <SvgIcon class="icon" color="#ec9bad" name="menu"/>
    </span>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>

import {Ref} from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import {useClickOutside} from '@/hooks/useClickOutside'

const router = useRouter()
const asideVisible = inject<Ref<boolean>>('asideVisible', ref(true))
const topNavRef = ref<null | HTMLElement>(null)
const isClickOutAside = useClickOutside(topNavRef)
const toggleAside = () => {
  asideVisible.value = !asideVisible.value
}
const toggleLogo = () => {
  router.push('/')
}
watch(isClickOutAside, () => {
  if (asideVisible.value && isClickOutAside.value) {
    asideVisible.value = false
  }
})
</script>

<style lang="scss" scoped>
.top-nav {
  color: white;
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  z-index: 20;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}

.icon {
  width: 32px;
  height: 32px;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
  }
}
</style>

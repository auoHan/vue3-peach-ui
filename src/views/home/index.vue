<template>
  <div>
    <div class="topNavAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>水蜜桃UI</h1>
        <h2>一个简洁的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/auoHan/vue3-peach-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <SvgIcon class="icon" name="vue"/>
      <SvgIcon class="icon" name="ts"/>
      <SvgIcon class="icon" name="灯泡"/>
    </div>
  </div>

</template>

<script setup lang='ts'>

import TopNav from '@/components/TopNav/TopNav.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'</script>

<style lang="scss" scoped>
$pink: #fd7474;
$border-radius: 4px;
$color: #fd5454;
.topNavAndBanner {
  background: linear-gradient(145deg, rgba(251, 217, 217, 1) 0%, rgba(237, 157, 178, 1) 100%);
}

.features {
  > .icon {
    width: 64px;
    height: 64px;
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $pink;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }
  }
}
</style>

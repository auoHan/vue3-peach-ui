<template>
  <div class="peach-tabs">
    <div class="peach-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" class="peach-tabs-nav-item">{{ t }}</div>
    </div>
    <div class="peach-tabs-content">
      <component :is="v" v-for="(v,index) in defaults" :key="index" class="peach-tabs-content-item"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Tab from '@/lib/Tab/Tab.vue'

const slots = useSlots()
console.log(slots.default?.())
const defaults = slots.default?.()
defaults?.forEach(tag => {
  if (tag.type !== Tab) {
    throw new Error('不是Tab标签')
  }
})
const titles = defaults?.map(tag => tag.props?.title)
</script>

<style lang="scss">
$color: #333;
$border-color: #d9d9d9;
.peach-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $theme-color;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>

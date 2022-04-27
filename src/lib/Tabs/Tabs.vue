<template>
  <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
  <component :is="v" v-for="(v,index) in defaults" :key="index"/>
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

</style>

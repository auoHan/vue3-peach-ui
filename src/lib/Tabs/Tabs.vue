<template>
  <component :is="vnode" v-for="vnode in deault"/>
</template>

<script lang='ts' setup>
import Tab from '@/lib/Tab/Tab.vue'

const slots = useSlots()
console.log(slots.default?.())
const deault = slots.default?.()
deault?.forEach(slot => {
  if (slot.type !== Tab) {
    throw new Error('不是Tab标签')
  }
})
</script>

<style lang="scss">

</style>

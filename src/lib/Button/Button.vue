<template>
  <button v-bind="$attrs">
    <slot/>
  </button>
</template>

<script lang='ts' setup>

</script>
<script lang='ts'>
// 使用一个简单的 <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<style lang="scss" scoped>

</style>

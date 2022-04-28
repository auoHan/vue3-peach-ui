<template>
  <PSwitch v-model:value="bool" disabled/>
</template>

<script lang='ts' setup>

import PSwitch from '@/lib/Switch/PSwitch.vue'

const bool = ref(false)
</script>

<style lang="scss" scoped>

</style>

<template>
  <PSwitch v-model:checked="checked"/>
</template>

<script lang='ts' setup>

import PSwitch from '@/lib/Switch/PSwitch.vue'

const checked = ref(false)
</script>

<style lang="scss" scoped>

</style>

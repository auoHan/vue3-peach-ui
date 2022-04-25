<template>
  <Switch v-model:checked="checked"/>
</template>

<script lang='ts' setup>

import Switch from '@/lib/Switch/Switch.vue'

const checked = ref(false)
</script>

<style lang="scss" scoped>

</style>

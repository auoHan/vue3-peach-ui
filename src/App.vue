<template>
  <router-view/>
</template>

<script setup lang="ts">
const asideVisible = ref(true)
provide('asideVisible', asideVisible)
</script>

<style>

</style>

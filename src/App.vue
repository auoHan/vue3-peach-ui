<template>
  <router-view/>
</template>

<script setup lang="ts">
const width = document.documentElement.clientWidth
const asideVisible = ref(width > 500)
provide('asideVisible', asideVisible)
</script>

<style>

</style>

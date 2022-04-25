<template>
  <router-view/>
</template>

<script setup lang="ts">
import router from '@/router'

const width = document.documentElement.clientWidth
const asideVisible = ref(width > 500)
provide('asideVisible', asideVisible)
router.afterEach(() => {
  if (width < 500) {
    asideVisible.value = false
  }
})
</script>

<style>

</style>

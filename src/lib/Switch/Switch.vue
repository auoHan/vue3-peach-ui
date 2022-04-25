<template>
  <button :class="{checked}" @click="toggle"><span></span></button>
</template>

<script lang='ts' setup>
import Button from '@/lib/Button/Button.vue'

const checked = ref(false)
const toggle = () => {
  checked.value = !checked.value
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h*2;
  border: none;
  background: #dcdfe6;
  border-radius: calc(#{$h} / 2);
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: calc(#{$h2} / 2);
  transition: left .4s;
}

button.checked {
  background: $theme-color;

  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
</style>

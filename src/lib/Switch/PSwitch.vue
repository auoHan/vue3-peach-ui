<template>
  <button :class="{'peach-checked':checked}" class="peach-switch" @click="toggle"><span></span></button>
</template>

<script lang='ts' setup>

const props = defineProps<{ checked: boolean }>()
const emit = defineEmits<{
  (e: 'update:checked', checked: boolean): void
}>()

const toggle = () => {
  emit('update:checked', !props.checked)
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.peach-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #dcdfe6;
  border-radius: calc(#{$h} / 2);
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc(#{$h2} / 2);
    transition: left .4s;
  }

  &.peach-checked {
    background: $theme-color;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>

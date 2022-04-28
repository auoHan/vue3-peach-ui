<template>
  <button :class="classes" :disabled="props.disabled" class="peach-button">
    <span v-if="props.loading" class="peach-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang='ts' setup>

interface Props {
  theme?: string
  size?: string
  level?: string
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'button',
  size: 'normal',
  level: 'normal',
  disabled: false,
  loading: false
})

const classes = computed(() => {
  return `peach-theme-${props.theme} peach-size-${props.size} peach-level-${props.level}`
})
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$red: red;
$grey: grey;
.peach-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  margin-bottom: 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background .4s;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $theme-color;
    border-color: $theme-color;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.peach-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $theme-color;

    &:hover,
    &:focus {
      color: lighten($theme-color, 10%);
    }
  }

  &.peach-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.peach-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.peach-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.peach-theme-button {
    &.peach-level-main {
      background: $theme-color;
      color: white;
      border-color: $theme-color;

      &:hover,
      &:focus {
        background: darken($theme-color, 10%);
        border-color: darken($theme-color, 10%);
      }
    }

    &.peach-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.peach-theme-link {
    &.peach-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.peach-theme-text {
    &.peach-level-main {
      color: $theme-color;

      &:hover,
      &:focus {
        color: darken($theme-color, 10%);
      }
    }

    &.peach-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.peach-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.peach-theme-link, &.peach-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .peach-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $theme-color $theme-color $theme-color transparent;
    border-style: solid;
    border-width: 2px;
    animation: peach-spin 1s infinite linear;
  }
}

@keyframes peach-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>

<template>
  <div class="peach-tabs">
    <div class="peach-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" :class="{'selected' : props.selected === t}"
           class="peach-tabs-nav-item"
           @click="select(t)">{{ t }}
      </div>
    </div>
    <div class="peach-tabs-content">
      <component :is="current" :key="current.props.title"
                 class="peach-tabs-content-item"/>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Tab from '@/lib/Tab/Tab.vue'

interface Props {
  selected?: string
}

const slots = useSlots()
const defaults = slots.default?.()
defaults?.forEach(tag => {
  if (tag.type !== Tab) {
    throw new Error('不是Tab标签')
  }
})
const titles = defaults?.map(tag => tag.props?.title)
const props = withDefaults(defineProps<Props>(), {
  selected: '导航1'
})
const emit = defineEmits<{
  (e: 'update:selected', selected: string): void
}>()
const select = (title: string) => {
  emit('update:selected', title)
}
const current = computed(() => {
  return defaults?.find(tag => tag.props?.title === props.selected)
})
</script>

<style lang="scss">
$color: #333;
$border-color: #d9d9d9;
.peach-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $theme-color;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>

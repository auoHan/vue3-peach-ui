<template>
  <div class="peach-tabs">
    <div ref="navRef" class="peach-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" :class="{'selected' : props.selected === t}"
           class="peach-tabs-nav-item"
           ref="titleRefs"
           @click="select(t)">{{ t }}
      </div>
      <div ref="indicatorRef" class="peach-tabs-nav-indicator"></div>
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
const titleRefs = ref<HTMLDivElement[]>([])
const indicatorRef = ref<null | HTMLDivElement>(null)
const navRef = ref<null | HTMLDivElement>(null)
// 解决watchEffect在onMounted之前就执行的问题
onMounted(() => {
  watchEffect(() => {
    const divs = titleRefs.value
    const result = divs.find(div => div.classList.contains('selected'))
    const {width, left: left1} = result?.getBoundingClientRect() as DOMRect
    const {left: left2} = navRef.value?.getBoundingClientRect() as DOMRect
    const left = left1 - left2
    ;(indicatorRef.value as HTMLDivElement).style.width = width + 'px'
    ;(indicatorRef.value as HTMLDivElement).style.left = left + 'px'
  })
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $theme-color;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all .4s;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>

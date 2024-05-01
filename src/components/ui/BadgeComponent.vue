<template>
  <div :class="className">
    <dot-icon :class="iconClass" />
    <span class="capitalize">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import type { BadgeVariant } from '@/types'
import clsx from 'clsx'
import { computed, defineComponent, ref, type PropType } from 'vue'

export default defineComponent({
  name: 'BadgeComponent',
  props: {
    class: {
      type: String as PropType<string>
    },
    text: {
      type: String as PropType<string>
    },
    variant: {
      type: String as PropType<BadgeVariant>
    },
    bg: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup(props) {
    const colors = ref({
      green: {
        text: 'text-green',
        bg: 'bg-light-green'
      },
      orange: {
        text: 'text-orange',
        bg: 'bg-light-orange'
      },
      yellow: {
        text: 'text-yellow',
        bg: 'bg-light-yellow'
      },
      purple: {
        text: 'text-purple',
        bg: 'bg-light-purple'
      },
      red: {
        text: 'text-red',
        bg: 'bg-light-red'
      }
    })
      const color = ref(colors.value[props.variant ?? 'green'])
    const className = computed(() => {
      return clsx(
        'flex items-center justify-center w-fit pr-3 rounded-lg text-sm',
        props.class,
        color.value.text,
        props.bg && color.value.bg
      )
    })
    const iconClass = computed(() => {
      return clsx('w-6 h-6', color.value.text)
    })

    return { className, iconClass }
  }
})
</script>

<style scoped></style>

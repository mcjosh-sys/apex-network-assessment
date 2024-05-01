<template>
  <ul :class="containerClass">
    <li>
      <button
        @click="$emit('page-changed', currentPage - 1)"
        :class="itemClass"
        :disabled="currentPage === 1"
      >
        <i class="pi pi-chevron-left" />
      </button>
    </li>
    <li
      v-for="(item, index) in paginationRange"
      :key="index"
      :class="clsx(itemClass, item === currentPage && selectedClass)"
    >
      <span v-if="item === '...'">{{ item }}</span>
      <button v-else @click="$emit('page-changed', item)">
        {{ item }}
      </button>
    </li>
    <li>
      <button
        @click="$emit('page-changed', currentPage + 1)"
        :class="clsx(itemClass, { disabled: currentPage === lastPage })"
        :disabled="currentPage === lastPage"
      >
        <i class="pi pi-chevron-right" />
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { usePagination } from '@/hooks'
import type { ClassType } from '@/types'
import clsx from 'clsx'
import { computed, defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    totalCount: {
      type: Number as PropType<number>,
      required: true
    },
    siblingCount: {
      type: Number as PropType<number>,
      default() {
        return 1
      }
    },
    currentPage: {
      type: Number as PropType<number>,
      required: true
    },
    pageSize: {
      type: Number as PropType<number>,
      required: true
    },
    className: Object as PropType<ClassType>
  },
  setup(props) {
    const paginationRange = usePagination({ ...props })
    const shouldShow = !(props.currentPage === 0 || paginationRange.value.length < 2)
    const lastPage = paginationRange.value.slice(-1)[0]

    const containerClass = computed(() => clsx('', props.className?.container))
    const itemClass = computed(() => clsx('', props.className?.item))
    const selectedClass = computed(() => clsx('', props.className?.selected))
    
    return { paginationRange, shouldShow, lastPage, containerClass, itemClass, selectedClass, clsx }
  }
})
</script>

<style scoped></style>

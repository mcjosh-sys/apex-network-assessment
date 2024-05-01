<template>
  <span :class="className">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-dot"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  </span>
</template>

<script lang="ts">
import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    class: {
      type: String
    }
  },

  setup(props) {
    const className = computed(() => clsx('', props.class))

    return { className }
  }
})
</script>

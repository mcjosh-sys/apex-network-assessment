<template>
  <div :class="className" @click="handleClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, type ComputedRef, type PropType } from 'vue'

export default defineComponent({
  props: {
    class: String as PropType<string>,
    value: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
      const className = props.class
    const injected = inject('state') as {value: ComputedRef<string>, updateValue: (v: string) => void}
    const handleClick = () => {
      injected.updateValue(props.value)
    }
    return { className, handleClick }
  }
})
</script>

<style scoped></style>

<template>
  <div :class="clsx('rounded-full overflow-hidden flex items-center justify-center border w-5 aspect-square text-white font-bold text-xs', className, isChecked && 'bg-green')" @click="toggle">
    <i v-if="isChecked" class="pi pi-check font-bold text-xs" style="font-weight: 700"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import clsx from 'clsx'

export default defineComponent({
  props: {
    checked: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    class: String as PropType<string>,
    checkedClass: String as PropType<string>
  },
  setup(props, {emit}) {
    const isChecked = ref<boolean>(false)
    const className = props.class
    const toggle = () => {
        isChecked.value = !isChecked.value
      emit('change', isChecked.value)
    }
    return { isChecked, className, toggle, clsx }
  }
})
</script>

<style scoped></style>

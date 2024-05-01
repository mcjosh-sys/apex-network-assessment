<template>
  <div class="w-full relative">
    <div class="" @click="toggle" v-click-away="away">
      <slot name="trigger" />
    </div>
    <div
      v-if="open"
      class="absolute top-[100%] bg-white w-full cursor-default shadow-md rounded-xl z-10"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, watch } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const open = ref<boolean>(false)
    const value = ref<string>('')

    const updateValue = (v: string) => {
      value.value = v
    }

    provide('isOpen', open.value)
    provide('state', { value: computed(() => value.value), updateValue })

    watch(value, () => {
      emit('changed', value.value)
    })

    const toggle = () => {
      open.value = !open.value
    }
    const away = () => {
      open.value = false
    }
    return { open, value, toggle, away }
  }
})
</script>

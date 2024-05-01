<template>
    <div class="w-full">
        <slot :value="value" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, type ComputedRef } from 'vue';

export default defineComponent({
  setup() {
    const injectedValue = inject('state') as {value: ComputedRef<string>, updateValue: (v: string) => void}
    const value = computed(()=>injectedValue.value.value)

    // watch(injectedValue.value, () => {
    //   value.value = injectedValue.value.value
    //   console.log(value.value)
    // });

    return {value }
  }
})
</script>

<style scoped></style>

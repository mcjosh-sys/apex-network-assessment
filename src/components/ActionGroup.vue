<template>
  <div class="relative">
    <button @click="setOpen" class="tracking-widest font-semibold text-[#A0AEC0]">...</button>
    <div v-if="open" class="bg-white shadow-md w-[154px] h-fit absolute z-10 rounded-md right-[50%]">
      <button class="absolute left-[94%] bottom-[90%] border rounded-full p-[2px] bg-white h-4 aspect-square flex items-center justify-center" @click="setClose">
        <i
          class="pi pi-times text-[8px] text-primary rotate-[33deg]"
          style="font-weight: 600"
        />
      </button>
      <div class="flex flex-col cursor-default p-1 gap-2 text-sm">
        <span class="hover:bg-light-green pl-2 rounded-md">Edit</span>
        <span class="hover:bg-light-green pl-2 rounded-md">View Profile</span>
        <span class="border-t pt-1 text-red hover:bg-light-green pl-2 rounded-md">Delete</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const open = ref<boolean>(false)
    const setOpen = () => {
      open.value = true
    }
    const setClose = () => {
      open.value = false
    }
    return { open, setOpen, setClose }
  }
})
</script>

<style scoped></style>

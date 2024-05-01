<template>
  <div class="h-[96px] bg-white flex items-center justify-between px-[53px]">
    <p class="font-bold text-2xl">{{ title }}</p>
    <div class="flex gap-3 items-center">
      <img :src="avatarUrl" alt="avatar" class="w-[48px] aspect-square rounded-full" />
      <div class="flex flex-col gap-1">
        <p class="font-bold text-[1rem]">{{name}}</p>
        <span class="text-xs leading-6">{{company}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  company: {
    required: true,
    type: String
  },
  avatarUrl: {
    type: String
  }
})
</script>

<style scoped></style>

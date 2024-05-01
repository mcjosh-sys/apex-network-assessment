<template>
    <div :class="tabClass">
        <slot />
    </div>
</template>

<script lang="ts">
import clsx from 'clsx'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: "TabComponent",
    props: {
        class: {
            type: String
        }
    },
    setup (props) {
        const tabClass = computed(() => {
            return clsx('',props.class)
        })

        return {tabClass}
    }
})
</script>

<style scoped>

</style>
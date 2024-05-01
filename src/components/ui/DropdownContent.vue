<template>
    <div :class="className">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
    props: {
        class: String as PropType<string>
    },
    setup(props) {
        const className = props.class
        return {className}
    }
})
</script>

<style scoped>

</style>
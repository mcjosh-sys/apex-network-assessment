<template>
    <div v-show="isActive" :class="tabContentClass">
        <slot />
    </div>
</template>

<script lang="ts">
import clsx from 'clsx';
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: {
            type: String
        },
        isActive: {
            type: Boolean
        },
        class: {
            type: String
        }
    },
    setup(props) {

        const tabContentClass = computed(()=>clsx('',props.class))
        

        return {tabContentClass}
    }
})
</script>

<style scoped>

</style>
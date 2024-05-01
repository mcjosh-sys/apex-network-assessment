<template>
    <div @click="selectTab" :class="tabTriggerClass">
        <slot />
    </div>
</template>

<script lang="ts">
import clsx from 'clsx';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: "TabTrigger",
    props: {
        name: {
            type: String
        },
        selected: {
            type: Boolean
        },
        class: {
            type: String
        }
    },
    setup(props, { emit }) {
        const tabTriggerClass = computed(() => clsx('',props.class, {
            'text-primary border-b-2 border-primary': props.selected,
            'text-muted-foreground': !props.selected,
        }))
         const selectTab = () => {
         emit('tab-selected' ,props.name);
        };

        return {tabTriggerClass, selectTab}
    }
})
</script>

<style scoped>

</style>
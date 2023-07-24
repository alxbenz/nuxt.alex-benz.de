<template>
    <div class="quare w-0 h-0 border-[8px] rounded-sm transition-all" :class="classes"
        :style="{ transitionDelay: delay + 'ms' }"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
    delay?: number,
    filled: boolean
}>()

const classes = computed(() => ({
    'border-gray-300': !props.filled,
    'border-orange-400': props.filled,
}))

// TODO add animation

</script>
<template>
    <h2 class="font-display text-4xl/tight font-extralight tracking-wide" :class="color">
        <span v-html="replacedContent" />
    </h2>
</template>

<script setup lang="ts">
const props = defineProps<{
    content: string;
    type: 'orange' | 'purple' | 'gray';
}>();

const color = computed(() => {
    switch (props.type) {
        case "orange":
            return "from-yellow-400 to-orange-400";
        case "purple":
            return "from-purple-600 to-violet-800 dark:from-purple-500 dark:to-violet-500";
        case "gray":
            return "from-zinc-500 to-slate-600";
    }
});

const replacedContent = props.content.replace(
    /<span>/,
    `<span class="bg-gradient-to-tr bg-clip-text font-normal text-transparent ${color}">`
);
</script>
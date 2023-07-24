<template>
    <div class="dark:text-slate-300 relative">
        <div class="flex flex-col items-start">
            <button type="button" @click="show = !show" :aria-label="aL">
                <slot name="label" />
            </button>

            <template v-if="show">
                <div
                    class="h-4 w-full bg-purple-950 dark:bg-yellow-300 animate-fade-in absolute right-0 top-0 -translate-y-full" />
                <div
                    class="animate-fade-in-up absolute top-full right-0 dark:bg-yellow-300 dark:text-slate-950 bg-purple-950 text-white p-4 rounded-l rounded-br">
                    <slot name="content" />
                </div>
            </template>

        </div>
    </div>
</template>

<script setup lang="ts">
const show = ref(false);

defineProps<{ aL: string }>();
</script>
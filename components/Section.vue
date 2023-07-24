<template>
    <section class="py-12">
        <div class="mx-6 md:mx-12 lg:mx-16">

            <Headline v-if="h2" :content="$t(h2)" type="purple" />


            <p v-if="sub" class="font-semibold mt-6 text-slate-700 dark:text-slate-300">
                {{ $t(sub) }}
            </p>

            <template v-if="p">
                <p v-for="paragraph in p" class="mt-3 text-slate-700 dark:text-slate-300">
                    {{ $t(paragraph) }}
                </p>
            </template>

        </div>

        <div class="mx-6 mt-12 md:mx-12 lg:mx-16">
            <slot name="content" />
        </div>

    </section>
</template>

<script setup lang="ts">
defineProps<{
    h2?: string,
    sub?: string,
    p?: string[]
}>()
</script>
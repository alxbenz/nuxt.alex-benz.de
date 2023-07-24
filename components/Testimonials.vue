<template>
    <div class="">

        <div v-for="testimonial in testimonials"
            class="relative flex justify-start flex-wrap mt-6 flex-col bg-slate-100 p-4 rounded dark:bg-slate-800">
            <IconsReview class="text-yellow-300 absolute top-0 left-0 w-12 h-12 dark:text-yellow-500" />

            <div class="italic z-10 mt-4">
                <template v-if="!!testimonial.statement">


                    <p v-for="statement in testimonial.statement" class="mt-1">
                        {{ $t(statement) }}
                    </p>

                </template>
            </div>
            <div class="mt-4">
                <span class="font-semibold mr-4">
                    {{ testimonial.name }}
                </span>
                {{ testimonial.company }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { Content, TestimonialsEntity } from 'types';
interface ContentData extends ParsedContent, Content { }

const { data } = await useAsyncData(
    async () => queryContent<ContentData>('/content').findOne()
)

const testimonials = data.value?.testimonials as TestimonialsEntity[];
</script>
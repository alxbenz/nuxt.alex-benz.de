<template>
    <Navigation />

    <div class="relative text-sm/6 min-h-screen">
        <ContentSplit>
            <template v-slot:left>
                <Intro />
            </template>
            <template v-slot:right>
                <Section v-if="skillSection" :h2="skillSection?.h2" :sub="skillSection?.sub" :p="skillSection?.p">
                    <template v-slot:content>
                        <Skills />
                    </template>
                </Section>
                <Section v-if="testimonialsSection" :h2="testimonialsSection?.h2" :sub="testimonialsSection?.sub"
                    :p="testimonialsSection?.p">
                    <template v-slot:content>
                        <Testimonials />
                    </template>
                </Section>
                <Section v-if="contactSection" :h2="contactSection?.h2" :sub="contactSection?.sub" :p="contactSection?.p">
                    <template v-slot:content>
                        <Contact />
                    </template>
                </Section>
            </template>
        </ContentSplit>
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Content } from 'types';

interface ContentData extends ParsedContent, Content { }

const { data } = await useAsyncData(
    async () => queryContent<ContentData>('/content').findOne()
)

const skillSection = data.value?.sections.find(s => s.id === 'skills');
const testimonialsSection = data.value?.sections.find(s => s.id === 'testimonials');
const contactSection = data.value?.sections.find(s => s.id === 'contact');
</script>
<template>
    <Navigation />

    <div class="relative min-h-screen text-sm/6">
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
                <Section
                    v-if="testimonialsSection"
                    :h2="testimonialsSection?.h2"
                    :sub="testimonialsSection?.sub"
                    :p="testimonialsSection?.p"
                >
                    <template v-slot:content>
                        <Testimonials />
                    </template>
                </Section>
                <Section
                    v-if="contactSection"
                    :h2="contactSection?.h2"
                    :sub="contactSection?.sub"
                    :p="contactSection?.p"
                >
                    <template v-slot:content>
                        <Contact />
                    </template>
                </Section>
            </template>
        </ContentSplit>
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Content, Meta } from "types";
const { locale } = useI18n();

interface ContentData extends ParsedContent, Content, Meta {}

const { data } = await useAsyncData(async () =>
    queryContent<ContentData>("/")
        .where({ _path: { $in: ["/content", "/meta"] } })
        .find()
);
const content = data.value?.find((d) => d._path === "/content");
const meta = data.value?.find((d) => d._path === "/meta");

if (!content) throw new Error("No content data found");
if (!meta) throw new Error("No meta data found");

const title = meta.home[locale.value].title + " - nuxt.alex-benz.de - " + locale.value.toUpperCase();
const description = meta.home[locale.value].description;

useHead({
    title,
    meta: [{ name: "description", content: description }],
    htmlAttrs: {
        lang: locale.value,
    },
});

const skillSection = content.sections.find((s) => s.id === "skills");
const testimonialsSection = content.sections.find((s) => s.id === "testimonials");
const contactSection = content.sections.find((s) => s.id === "contact");
</script>

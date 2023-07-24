<template>
    <Navigation />

    <div class="relative min-h-screen text-sm/6">
        <ContentSplit>
            <template v-slot:left> </template>
            <template v-slot:right>
                <Section :h2="title" :p="address" :sub="sub" />
                <Section :sub="liability" :p="[disclaimer]" />
                <Section :h2="privacyTitle" :p="privacy" />
            </template>
        </ContentSplit>
    </div>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { Meta } from "types";

const { messages, locale } = useI18n();

interface MetaData extends ParsedContent, Meta {}

const { data } = await useAsyncData(async () => queryContent<MetaData>("/meta").findOne());

const metaTitle = data.value?.imprint[locale.value].title + " - nuxt.alex-benz.de - " + locale.value.toUpperCase();

useHead({
    title: metaTitle,
    htmlAttrs: {
        lang: locale.value,
    },
});

const title = messages.value[locale.value]["imprint.title"] as string;
const address = messages.value[locale.value]["imprint.address"] as string[];
const sub = messages.value[locale.value]["imprint.sub"] as string;

const liability = messages.value[locale.value]["imprint.liability"] as string;
const disclaimer = messages.value[locale.value]["imprint.disclaimer"] as string;

const privacyTitle = messages.value[locale.value]["privacy.title"] as string;
const privacy = messages.value[locale.value]["privacy.content"] as string[];
</script>

<template>
    <Navigation />

    <div class="relative text-sm/6 min-h-screen">
        <ContentSplit>
            <template v-slot:left>
            </template>
            <template v-slot:right>
                <Section :h2="title" :p="address" :sub="sub" />
                <Section :sub="liability" :p="[disclaimer]" />
                <Section :h2="privacyTitle" :p="privacy" />
            </template>
        </ContentSplit>
    </div>
</template>

<script setup lang="ts">
const { messages, locale } = useI18n();

const title = (messages.value[locale.value]['imprint.title']) as string;
const address = (messages.value[locale.value]['imprint.address']) as string[];
const sub = (messages.value[locale.value]['imprint.sub']) as string;

const liability = (messages.value[locale.value]['imprint.liability']) as string;
const disclaimer = (messages.value[locale.value]['imprint.disclaimer']) as string;

const privacyTitle = (messages.value[locale.value]['privacy.title']) as string;
const privacy = (messages.value[locale.value]['privacy.content']) as string[];
</script>
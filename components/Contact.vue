<template>
    <div class="">
        <a class="underline hover:no-underline block" :href="'tel:' + information.contact.phone">
            {{ information.contact.phone }}
        </a>
        <a class="underline hover:no-underline block mt-4" :href="'mailto:' + information.contact.mail">
            {{ information.contact.mail }}
        </a>
        <template v-for="link in  information.links ">
            <a v-if="link.usage.indexOf('contact') !== -1" class="underline hover:no-underline block mt-4" :href="link.url">
                {{ link.id }}
            </a>
        </template>
    </div>
</template>

<script setup lang="ts">

import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { Information } from 'types';
interface InformationData extends ParsedContent, Information { }

const { data } = await useAsyncData(
    async () => queryContent<InformationData>('/information').findOne()
)

const information = data.value as Information;

if (!information) throw new Error('No information data found');
</script>

<template>
    <Headline :content="$t(intro.h2)" type="orange" class="mt-16" />

    <h3 class="mt-8 font-light ">{{ $t(intro.p[0]) }}</h3>

    <div class="mt-8 flex flex-wrap justify-center items-center">
        <a v-for="link in information.links" :href="link.url" :key="link.id"
            class="flex items-center underline hover:no-underline mx-2">

            <IconsGitHub class="w-5 h-5 mr-1 fill-white opacity-50" v-if="link.id === 'GitHub'" />
            <IconsLinkedIn class="w-5 h-5 mr-1 fill-white opacity-50" v-if="link.id === 'LinkedIn'" />
            <IconsXing class="w-5 h-5 mr-1 fill-white opacity-50" v-if="link.id === 'Xing'" />
            <IconsMail class="w-5 h-5 mr-1 fill-white opacity-50" v-if="link.id === 'Mail'" />

            {{ link.id }}
        </a>
    </div>
    <div class="mt-16 text-center text-xs opacity-50">
        powered by nuxt, vue, tailwindcss, typescript
    </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Content, Information } from 'types';

interface ContentInformationData extends ParsedContent, Content, Information { }

const { data } = await useAsyncData(
    async () => queryContent<ContentInformationData>('/').where({ '_path': { $in: ['/content', '/information'] } }).find()
)

const intro = data.value?.find(d => d._path === '/content')?.intro;
const information = data.value?.find(d => d._path === '/information');

if (!intro) throw new Error('No intro data found');
if (!information) throw new Error('No information data found');

</script>

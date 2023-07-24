<template>
    <ModalMenu :aL="'TODO'">
        <template v-slot:label>
            <div class="bg-white dark:bg-slate-900 rounded p-2">
                <IconsGlobe class="w-4 h-4 fill-purple-600 dark:fill-yellow-300 " />
            </div>
        </template>
        <template v-slot:content>
            <div class="whitespace-nowrap">
                <template v-for="loc in locales">
                    <NuxtLink v-if="(loc as LocaleObject).code !== locale" :key="(loc as LocaleObject).code"
                        :to="switchLocalePath((loc as LocaleObject).code)" class="underline hover:no-underline block my-1">
                        {{ (loc as LocaleObject).name }}
                    </NuxtLink>
                    <span v-else class="block my-1">
                        {{ (loc as LocaleObject).name }}
                    </span>
                </template>
            </div>
        </template>
    </ModalMenu>
</template>

<script setup lang="ts">
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';


const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()



</script>
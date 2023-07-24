<template>
    <ModalMenu :aL="$t('toggle.language')">
        <template v-slot:label>
            <span class="block rounded bg-white p-2 dark:bg-slate-900">
                <IconsGlobe class="h-4 w-4 fill-purple-600 dark:fill-yellow-300" />
            </span>
        </template>
        <template v-slot:content>
            <div class="whitespace-nowrap">
                <template v-for="loc in locales">
                    <NuxtLink
                        v-if="(loc as LocaleObject).code !== locale"
                        :key="(loc as LocaleObject).code"
                        :to="switchLocalePath((loc as LocaleObject).code)"
                        class="my-1 block underline hover:no-underline"
                    >
                        {{ (loc as LocaleObject).name }}
                    </NuxtLink>
                    <span v-else class="my-1 block">
                        {{ (loc as LocaleObject).name }}
                    </span>
                </template>
            </div>
        </template>
    </ModalMenu>
</template>

<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

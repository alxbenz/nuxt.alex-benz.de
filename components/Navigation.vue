<template>
    <nav class="z-10 flex justify-end fixed w-full text-sm/6">
        <div class="flex px-6 py-2 items-center bg-slate-50 dark:bg-slate-950 rounded rounded-tr-none">
            <NuxtLink :to="localePath('index')" class="dark:text-slate-300 mr-4">
                {{ $t('home') }}
            </NuxtLink>
            <NuxtLink :to="localePath('imprint')" class="dark:text-slate-300 mr-4">
                {{ $t('imprint') }}
            </NuxtLink>

            <ThemeToggle class="mr-4" />

            <LanguageMenu />
        </div>
    </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>
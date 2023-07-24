<template>
    <div>
        <button v-if="theme === 'light'" class="bg-white rounded p-2" @click="setTheme('dark')"
            :aria-label="$t('toggle.darkMode')">
            <IconsLightMode class="w-4 h-4 fill-purple-600" />
        </button>

        <button v-if="theme === 'dark'" class="dark:bg-slate-900 rounded p-2" @click="setTheme('light')"
            :aria-label="$t('toggle.lightMode')">
            <IconsDarkMode class="w-4 h-4 dark:fill-yellow-300 transition-all" />
        </button>
    </div>
</template>

<script setup lang="ts">
const theme = ref("light");

const setTheme = (selectedTheme: string) => {
    const root = window.document.documentElement;

    root.classList.remove("dark", "light", "system");
    root.classList.add(selectedTheme);

    localStorage.setItem("theme", selectedTheme);
    theme.value = selectedTheme;
}

onBeforeMount(() => {
    const savedTheme = localStorage.getItem("theme");
    !!savedTheme && setTheme(savedTheme);
});
</script>

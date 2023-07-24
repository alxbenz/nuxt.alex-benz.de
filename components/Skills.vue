<template>
    <div class="">
        <template v-for="skill in skills">
            <div v-if="skill.top" :key="skill.label" class="flex justify-between flex-wrap items-center mt-6">
                <div class="w-[100%] font-bold mb-1">
                    {{ $t(skill.label) }}
                </div>

                <div v-if="!!skill.percentage" class="w-[33%] flex [&>*+*]:ml-1">
                    <Square :filled="skill.percentage >= 0" />
                    <Square :filled="skill.percentage >= 20" :delay="50" />
                    <Square :filled="skill.percentage >= 40" :delay="100" />
                    <Square :filled="skill.percentage >= 60" :delay="150" />
                    <Square :filled="skill.percentage >= 80" :delay="200" />
                </div>

                <div v-if="skill.level" class="w-[33%]">
                    {{ $t(skill.level) }}
                </div>
                <div v-if="skill.period" class="w-[34%]">
                    {{ skill.period }} {{ $t("skill.period.year", skill.period) }}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { Content, SkillsEntity } from 'types';
interface ContentData extends ParsedContent, Content { }

const { data } = await useAsyncData(
    async () => queryContent<ContentData>('/content').findOne()
)

const skills = data.value?.skills as SkillsEntity[];


</script>

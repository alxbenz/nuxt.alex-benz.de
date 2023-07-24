<template>
    <div class="absolute -translate-x-20 pl-20 h-full overflow-hidden z-10 left-0">
        <template v-for="(contributions, index) in mergedContributions">
            <div v-if="index % 90 === 0" class="text-slate-500 text-[8px] -translate-x-[120%] h-0">
                {{ contributions.date }}
            </div>
            <div class="h-1 md:h-2 rounded-r-sm" :class="classes(contributions)"
                :title="contributions.date + ' - ' + contributions.contributions">
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

import githubContributions from "../contributions/github-contributions-23-07-20.json";
import giteaContributions from "../contributions/gitea-contributions-23-07-05.json";
import gitlabContributions from "../contributions/gitlab-contributions-23-07-05.json";

const transformedGithubData = githubTransformation(githubContributions.data.allGithubData.nodes[0].data.user.contributionsCollection.contributionCalendar);
const transformedGiteaData = giteaTransformation(giteaContributions);
const transformedGitlabData = gitlabTransformation(gitlabContributions);

const mergedContributions = mergeContributions(transformedGithubData, transformedGiteaData, transformedGitlabData);


// TODO Type
function classes(contributions: any) {
    switch (true) {
        case contributions.contributions === 0:
            return 'bg-gray-200 dark:bg-slate-600 w-[2px] md:w-[3px] lg:w-[4px]';
        case contributions.contributions > 0 && contributions.contributions <= 2:
            return 'bg-purple-300 w-[3px] md:w-[4px] lg:w-[6px]';
        case contributions.contributions > 2 && contributions.contributions <= 4:
            return 'bg-purple-400 w-[4px] md:w-[5px] lg:w-[8px]';
        case contributions.contributions > 4 && contributions.contributions <= 6:
            return 'bg-purple-500 w-[5px] md:w-[6px] lg:w-[10px]';

    }
    return '';
};

</script>
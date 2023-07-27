<template>
    <FrameworkSelection />
    <div
        class="relative flex items-center justify-center overflow-hidden text-white md:fixed md:h-screen md:w-1/2 md:justify-end"
    >
        <div class="background absolute -z-20 h-full w-full bg-gradient-to-br from-stone-800 to-slate-900" />
        <div class="absolute h-full w-full">
            <GradientBall />
            <div class="absolute left-0 top-0 h-full w-full animate-pulse-weak bg-pattern bg-repeat opacity-20" />
        </div>
        <aside
            class="relative min-h-[16rem] w-full max-w-lg overflow-auto px-6 pb-6 pt-20 md:max-h-screen lg:mr-16 xl:mr-24 lg:max-w-sm"
        >
            <div class="flex items-center justify-start">
                <div class="h-16 w-16">
                    <Logo />
                </div>
                <span class="tracking-wid mb-4 ml-6 text-lg font-semibold"> alexbenz.dev </span>
            </div>
            <slot name="left"></slot>
        </aside>
    </div>
    <div
        class="relative flex h-full justify-center dark:bg-slate-900 dark:text-white md:left-1/2 md:min-h-screen md:w-1/2 md:justify-start"
    >
        <Contributions />
        <main
            class="relative flex max-w-lg flex-col justify-center [&>section+section]:border-t-2 [&>section+section]:border-yellow-200 [&>section+section]:dark:border-slate-800"
        >
            <slot name="right"></slot>
        </main>
    </div>
</template>

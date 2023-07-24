<template>
    <div
        class="relative text-white md:w-1/2 md:fixed md:h-screen flex items-center justify-center md:justify-end overflow-hidden">
        <div class="background bg-gradient-to-br from-stone-800 to-slate-900 absolute w-full h-full -z-20" />
        <div class="absolute h-full w-full">
            <GradientBall />
            <Background class="absolute left-0 top-0 w-auto h-screen animate-pulse-weak opacity-20 text-sky-600" />

        </div>
        <aside
            class="px-6 max-w-lg lg:max-w-sm w-full relative lg:mr-24 pt-20 pb-6 min-h-[16rem] md:max-h-screen overflow-auto">
            <div class="flex justify-start items-center">
                <div class="h-16 w-16">
                    <Logo />
                </div>
                <span class="ml-6 font-semibold text-lg mb-4 tracking-wid">
                    alexbenz.dev
                </span>
            </div>
            <slot name="left"></slot>
        </aside>
    </div>
    <div
        class="relative md:w-1/2 md:left-1/2 flex justify-center md:justify-start dark:bg-slate-900 dark:text-white md:min-h-screen h-full">
        <Contributions />
        <main
            class="relative max-w-lg [&>section+section]:border-t-2 [&>section+section]:border-yellow-200 [&>section+section]:dark:border-slate-800 flex flex-col justify-center">
            <slot name="right"></slot>
        </main>
    </div>
</template>
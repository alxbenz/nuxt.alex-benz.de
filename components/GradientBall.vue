<template>
    <svg class="absolute bottom-0 left-0 h-[200%] w-[200%] -z-10 md:w-full md:-bottom-1/2" aria-hidden="true">
        <defs>
            <radialGradient id=":R1d6:-desktop" cx="100%">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
            </radialGradient>
            <radialGradient id=":R1d6:-mobile" cy="100%">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
                <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
                <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
            </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#:R1d6:-desktop)" class="hidden md:block"></rect>
        <rect width="100%" height="100%" fill="url(#:R1d6:-mobile)" class="md:hidden"></rect>
    </svg>
</template>
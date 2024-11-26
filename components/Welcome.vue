<template>
    <div class="flex">
        <div
            data-aos="fade-up"
            class="m-auto color-white flex items-center text-shadow-sm text-6xl"
        >
            <span ref="titleRef" class="font-bold" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Typed from "typed.js";

const titleRef = ref<HTMLElement | null>(null);
let typed: Typed | null = null;
onMounted(() => {
    if (titleRef.value) {
        typed = new Typed(titleRef.value, {
            strings: ["Welcome to Yuzu Tea!!!!!"],
            startDelay: 1000,
            typeSpeed: 50,
        });
    }
});
onUnmounted(() => {
    typed?.destroy();
});
</script>

<template>
    <div class="flex">
        <div ref="containerRef" />
    </div>
</template>

<script setup lang="ts">
import Typed from "typed.js";

const {
    text,
    startDelay = 1000,
    typeSpeed = 50,
} = defineProps<{
    text: string;
    startDelay?: number;
    typeSpeed?: number;
}>();
let typed: Typed | null = null;
const containerRef = ref<HTMLDivElement | null>(null);
onMounted(() => {
    if (containerRef.value) {
        typed = new Typed(containerRef.value, {
            strings: [text],
            startDelay,
            typeSpeed,
        });
    }
});
onUnmounted(() => {
    typed?.destroy();
});
</script>

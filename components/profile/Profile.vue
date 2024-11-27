<template>
    <div class="p-5">
        <PostCard data-aos="fade-right" class="ml-50" />
        <GameCard data-aos="flip-left" class="relative -top-15 ml-auto mr-25" />
        <AnimCard data-aos="flip-right" class="ml-50 relative -top-25" />
        <MusicCard
            data-aos="flip-right"
            class="ml-auto mr-50 relative -top-25"
        />
        <TechCard data-aos="flip-left" class="w-125 relative -top-15 ml-50" />
    </div>
</template>

<script setup lang="ts">
import AnimCard from "./AnimCard.vue";
import GameCard from "./GameCard.vue";
import MusicCard from "./MusicCard.vue";
import PostCard from "./PostCard.vue";
import TechCard from "./TechCard.vue";
</script>

<template>
    <div class="p-5">
        <PostCard />
        <GameCard class="relative -top-50" />
        <!-- <TechCard class="relative -top-90" /> -->
    </div>
</template>

<script setup lang="ts">
import GameCard from "./GameCard.vue";
import PostCard from "./PostCard.vue";
import TechCard from "./TechCard.vue";
</script>

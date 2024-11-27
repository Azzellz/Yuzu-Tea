<template>
    <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Azzellz&layout=donut"
        alt="Stats"
    />
</template>

<script setup lang="ts">
const techList = [
    {
        key: "vue",
        name: "Vuejs",
        description: "Great modern web front-end framework!",
    },
];
const currentTechKey = ref("vue");
const currentTech = computed(() => {
    return techList.find((game) => game.key === currentTechKey.value);
});
const currentBackground = computed(
    () => `/img/tech/${currentTechKey.value}/background.png`
);
const count = ref(0);
function handleSwitch(key: string) {
    if (currentTechKey.value !== key) {
        currentTechKey.value = key;
        count.value++;
    }
}
</script>

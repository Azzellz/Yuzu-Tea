<template>
    <div class="w-150 min-h-50">
        <div class="text-4xl mb-5 color-white">Game?</div>
        <div class="shadow-lg flex flex-col rounded-md bg-slate-50">
            <!-- 游戏背景图 -->
            <div class="flex-2/5">
                <Transition
                    mode="out-in"
                    enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                >
                    <img
                        :key="count"
                        :src="currentGameBackground"
                        class="rounded-t-md"
                        alt="Background"
                    />
                </Transition>
            </div>
            <!-- 游戏描述与选择 -->
            <div class="flex-2/5 flex gap-5 p-5">
                <div
                    v-for="game in gameList"
                    :key="game.key"
                    class="flex gap-3"
                    @click="handleSwitch(game.key)"
                >
                    <!-- 头像区 -->
                    <img
                        class="h-12 rounded-full shadow-md cursor-pointer hover:scale-110 transition-all"
                        :src="`/img/game/${game.key}/icon.png`"
                        alt="Avatar"
                    />
                </div>
            </div>

            <!-- 介绍区 -->
            <div class="flex-1/5 px-5 pb-5 flex flex-col">
                <h1 class="font-bold">{{ currentGame?.name }}</h1>
                <p class="text-gray-500">
                    {{ currentGame?.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const gameList = [
    {
        key: "rimworld",
        name: "RimWorld",
        description: "A Great Story Generator!",
    },
    {
        key: "bangdream",
        name: "BanG Dream! 少女乐团派对！",
        description: "Music Rhythm Game",
    },
];
const currentGameKey = ref("rimworld");
const currentGame = computed(() => {
    return gameList.find((game) => game.key === currentGameKey.value);
});
const currentGameBackground = computed(
    () => `/img/game/${currentGameKey.value}/background.png`
);
const count = ref(0);
function handleSwitch(key: string) {
    if (currentGameKey.value !== key) {
        currentGameKey.value = key;
        count.value++;
    }
}
</script>

<template>
    <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        class="ml-50 w-120 min-h-50 shadow-lg flex flex-col rounded-md bg-slate-50"
    >
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
        <div class="flex-3/5 flex gap-5 p-5">
            <div
                v-for="game in gameList"
                :key="game.key"
                class="flex gap-3"
                @click="handleSwitchGame(game.key)"
            >
                <!-- 头像区 -->
                <img
                    class="h-12 rounded-full shadow-md cursor-pointer hover:scale-110 transition-all"
                    :src="`/img/game/${game.key}/icon.png`"
                    alt="Avatar"
                />
                <!-- 介绍区 -->
                <div v-show="game.key === currentGameKey" class="flex flex-col">
                    <h1 class="font-bold">{{ currentGame?.name }}</h1>
                    <p class="text-gray-500">
                        {{ currentGame?.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const gameList = [
    {
        key: "rimworld",
        name: "RimWorld",
        description: "Amazing Game.",
    },
    {
        key: "bangdream",
        name: "BanG Dream!",
        description: "Amazing Game.",
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
function handleSwitchGame(key: string) {
    currentGameKey.value = key;
    count.value++;
}
</script>

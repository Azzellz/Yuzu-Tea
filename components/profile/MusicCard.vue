<template>
    <div
        class="ml-50 w-150 min-h-50 shadow-lg flex flex-col rounded-md bg-slate-50"
    >
        <!-- 背景图 -->
        <div class="flex-2/5">
            <Transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
            >
                <img
                    :key="count"
                    :src="currentBackground"
                    class="rounded-t-md"
                    alt="Background"
                />
            </Transition>
        </div>
        <!-- 播放区 -->
        <div class="flex-2/5 flex items-center gap-5 p-5">
            <!-- 头像区 -->
            <img
                class="h-12 rounded-full shadow-md cursor-pointer hover:scale-110 transition-all"
                :src="`/music/${currentMusic?.key}/icon.png`"
                alt="Icon"
            />
            <!-- 介绍区 -->
            <div
                v-show="currentMusic?.key === currentMusicKey"
                class="flex flex-col"
            >
                <h1 class="font-bold">{{ currentMusic?.name }}</h1>
                <p class="text-gray-500">
                    {{ currentMusic?.description }}
                </p>
            </div>
            <!-- 播放区 -->
            <div class="ml-auto">
                <audio
                    :src="`/music/${currentMusic?.key}/music.mp3`"
                    controls
                />
            </div>
        </div>
        <!-- 选择区 -->
        <div class="flex-1/5 flex gap-5 px-5 pb-5">
            <img
                v-for="music in musicList.filter(
                    (music) => music.key !== currentMusicKey
                )"
                :key="music.key"
                @click="handleSwitch(music.key)"
                class="h-12 rounded-full shadow-md cursor-pointer hover:scale-110 transition-all"
                :src="`/music/${music.key}/icon.png`"
                alt="Icon"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const musicList = [
    {
        key: "rimworld/01",
        name: "P-Music/Serenity",
        description: "The great serenity",
    },
    {
        key: "roselia/01",
        name: "FIRE BIRD",
        description: "The Immortal Bird of Fire",
    },
    {
        key: "mygo/01",
        name: "春日影",
        description: "Shadows of the Past",
    },
];
const currentMusicKey = ref("rimworld/01");
const currentMusic = computed(() => {
    return musicList.find((music) => music.key === currentMusicKey.value);
});
const currentBackground = computed(
    () => `/music/${currentMusicKey.value}/background.png`
);

const count = ref(0);
function handleSwitch(key: string) {
    if (currentMusicKey.value !== key) {
        currentMusicKey.value = key;
        count.value++;
    }
}
</script>

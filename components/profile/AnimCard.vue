<template>
    <div class="w-120 min-h-50">
        <div class="text-4xl mb-5 color-white">Anim?</div>
        <div class="shadow-lg flex flex-col rounded-md bg-slate-50">
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
            <!-- 描述与选择 -->
            <div class="flex-2/5 flex gap-5 p-5">
                <!-- 头像区 -->
                <img
                    v-for="anim in animList"
                    :key="anim.key"
                    @click="handleSwitch(anim.key)"
                    class="h-12 p-2 rounded shadow-md cursor-pointer hover:scale-110 transition-all"
                    :src="`/img/anim/${anim.key}/icon.png`"
                    alt="Avatar"
                />
            </div>
            <!-- 介绍区 -->
            <div class="flex-1/5 px-5 pb-5 flex flex-col">
                <h1 class="font-bold">{{ currentAnim?.name }}</h1>
                <p class="text-gray-500">
                    {{ currentAnim?.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const animList = [
    {
        key: "bangdream/tv",
        name: "BanG Dream!",
        description: "Girls Band Party.",
    },
    {
        key: "bangdream/mygo",
        name: "BanG Dream! It's MyGO!!!!!",
        description: "Amazing Anim.",
    },
    {
        key: "starlight",
        name: "少女☆歌剧 Revue Starlight",
        description: "Amazing Anim.",
    },
];
const currentAnimKey = ref("bangdream/mygo");
const currentAnim = computed(() => {
    return animList.find((anim) => anim.key === currentAnimKey.value);
});
const currentBackground = computed(
    () => `/img/anim/${currentAnimKey.value}/background.png`
);
const count = ref(0);
function handleSwitch(key: string) {
    if (currentAnimKey.value !== key) {
        currentAnimKey.value = key;
        count.value++;
    }
}
</script>

<template>
    <div
        class="w-100 min-h-50 shadow-lg flex flex-col rounded-md bg-slate-50"
    >
        <div class="flex-2/5">
            <img class="rounded-t-md" src="/img/ksm.png" />
        </div>
        <div class="flex-2/5 flex gap-5 p-5">
            <!-- 头像区 -->
            <img class="h-12 rounded-full" src="/img/avatar.png" alt="Avatar" />
            <!-- 介绍区 -->
            <div class="flex flex-col">
                <h1 class="font-bold">Yuzu Tea</h1>
                <p class="text-gray-500">A Web Developer.</p>
            </div>
            <!-- 链接区 -->
            <div class="flex ml-auto gap-1">
                <Icon
                    name="uil:github"
                    class="cursor-pointer"
                    size="28"
                    @click="() => jumpTo('https://github.com/Azzellz')"
                />
                <Icon
                    name="material-symbols:book-2"
                    class="cursor-pointer"
                    size="28"
                    @click="() => jumpTo('https://azzellz.github.io')"
                />
            </div>
        </div>
        <!-- <div class="flex-1/5 flex flex-col gap-2 px-5">
            Two snowflakes, two towers
        </div> -->
    </div>
</template>

<script setup lang="ts">
function jumpTo(href: string) {
    window.location.href = href;
}
</script>

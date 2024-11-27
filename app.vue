<script setup lang="ts">
import Welcome from "./components/Welcome.vue";
import Profile from "./components/profile/Profile.vue";
import AOS from "aos";
import "aos/dist/aos.css";
const totalHeight = ref("100%");
const unitStyle = reactive({ height: "100%" });
onMounted(() => {
    AOS.init({
        mirror: true, // whether elements should animate out while scrolling past them
    });
    totalHeight.value = `${window.innerHeight * 5}px`;
    unitStyle.height = `${window.innerHeight}px`;
});
</script>

<template>
    <div id="app" :style="{ height: totalHeight }">
        <Welcome :style="unitStyle" />
        <Profile :style="unitStyle" />
    </div>
</template>

<style scoped>
#app::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1; /* 将背景置于底层 */
    background-image: url("/img/background02.png");
    background-repeat: no-repeat; /* 设置背景图片不重复 */
    background-attachment: fixed; /* 背景图片固定 */
    background-size: cover; /* 背景图片自动拉伸以覆盖整个视口 */
    filter: blur(3px); /* 应用高斯模糊 */
}
#app {
    position: relative;
    background-color: rgba(31, 33, 41, 0.4);
}
</style>

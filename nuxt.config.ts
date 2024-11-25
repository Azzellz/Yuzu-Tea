// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    nitro: {
        output: {
            dir: "dist", // 自定义输出目录
        },
    },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    css: ["~/assets/css/main.css"],
    nitro: {
        output: {
            dir: "dist", // 自定义输出目录
        },
    },

    modules: ["@nuxt/fonts", "@nuxt/icon", "@unocss/nuxt", "@nuxtjs/i18n", "@nuxt/ui"],
    i18n: {
        vueI18n: "./i18n.config.ts",
        locales: ["zh", "en", "jp", "fr"],
        defaultLocale: "zh",
    },
});
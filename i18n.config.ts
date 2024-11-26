export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        zh: {
            welcome: "欢迎",
            "yuzu-tea": "柚子茶",
        },
        jp: {
            welcome: "いらっしゃいませ",
            "yuzu-tea": "ユズチャ",
        },
        en: {
            welcome: "Welcome, This is Yuzu Tea!",
            "yuzu-tea": "Yuzu Tea",
        },
        fr: {
            welcome: "Bienvenue",
        },
    },
}));

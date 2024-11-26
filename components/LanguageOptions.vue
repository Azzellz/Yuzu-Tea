<template>
    <div>
        <button @click="setLocale('zh')">zh</button>
        <button @click="setLocale('en')">en</button>
        <button @click="setLocale('jp')">jp</button>
        <button @click="setLocale('fr')">fr</button>
        <p>{{ $t("welcome") }}</p>
    </div>
</template>

<script setup lang="ts">
const { setLocale } = useI18n();
</script>

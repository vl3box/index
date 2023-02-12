<template>
    <div class="about-detail-wrapper">
        <div class="detail-title">{{ $route.meta.title }}</div>
        <div class="detail-content-wrap detail-text-wrap">
            <AboutText></AboutText>
        </div>
    </div>
</template>

<script>
import AboutText from "./components/AboutText.vue";
export default {
    name: "Privacy",
    components: { AboutText },
};
</script>


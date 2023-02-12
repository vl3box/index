<template>
    <div class="about-detail-wrapper">
        <div class="detail-title-list">
            <div
                class="title-item special-title-item hvr-grow"
                :class="active === item.type && 'title-active'"
                v-for="item in list"
                :key="item.type"
                @click="active = item.type"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="detail-content-wrap detail-text-wrap">
            <AboutText :customType="active"></AboutText>
        </div>
    </div>
</template>

<script>
import AboutText from "./components/AboutText.vue";
export default {
    name: "Creation",
    components: { AboutText },
    data() {
        return {
            active: "treaty",
            list: [
                {
                    title: "创作公约",
                    type: "treaty",
                },
                {
                    title: "创作激励",
                    type: "incentives",
                },
            ],
        };
    },
};
</script>


<template>
    <!-- 专题页 -->
    <div class="p-topic" :class="theme_cls">
        <Header :overlayEnable="true"></Header>
        <div class="p-topic-container">
            <TopicCommon />
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import { theme } from "../../setting.json";
import TopicCommon from "@/views/TopicCommon.vue";
export default {
    name: "Topic",
    props: [],
    components: {
        TopicCommon,
    },
    data: function () {
        return {};
    },
    computed: {
        theme_cls: function () {
            return "theme-" + theme;
        },
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../assets/css/kv/common.less";
@import "../assets/css/topic/common.less";
</style>
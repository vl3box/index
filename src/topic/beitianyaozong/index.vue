<template>
    <!-- 专题页 -->
    <div class="p-topic" :class="theme_cls">
        <Header :overlayEnable="true"></Header>
        <div class="p-topic-container">
            <div class="m-topic-box">
                <!-- 首屏 -->
                <!-- <div>
                    <slider type="beitianyaozong" subtype="top_slider"></slider>
                </div>
                <div class="m-topic">
                    <tools></tools>
                    <top-event></top-event>
                </div> -->
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import { theme } from "../../../setting.json";
// import top_slider from "./top_slider.vue";
// import top_tools from "./top_tools.vue";
// import top_event from "./top_event.vue";
export default {
    name: "Topic",
    props: [],
    components: {
        // slider: top_slider,
        // tools: top_tools,
        // "top-event": top_event,
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
@import "../../assets/css/kv/common.less";
@import "../../assets/css/topic/common.less";
</style>
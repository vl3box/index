<template>
    <div class="m-topic-box">
        <!-- 首屏 -->
        <slider type="beitianyaozong" subtype="top_slider"></slider>
        <tools></tools>
        <top-event></top-event>
    </div>
</template>
<script>
import top_slider from "@/components/topic/top_slider.vue";
import top_tools from "@/components/topic/top_tools.vue";
import top_event from "@/components/topic/top_event.vue";
export default {
    name: "TopicCommon",
    props: [],
    components: {
        slider: top_slider,
        tools: top_tools,
        "top-event": top_event,
    },
    data() {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>
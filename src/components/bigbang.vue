<template>
    <div
        class="m-slider"
        v-if="data && data.length && !player_status"
        id="m-home-slider"
    >
        <div
            class="u-slider"
            v-for="(item, i) in data"
            :key="i"
            :style="{ backgroundColor: item.bgcolor }"
        >
            <a class="u-pic" :href="item.link" :target="target">
                <img :src="item.img" />
            </a>
        </div>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getNews } from "@/service/index";

export default {
    name: "bigbang",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {
        target: function() {
            return buildTarget();
        },
        player_status: function() {
            return (
                ~~this.$store.state.config.index_live_status ||
                ~~this.$store.state.config.index_video_status
            );
        },
    },
    methods: {},
    created: function() {
        getNews("slider", 10).then((data) => {
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data;
        }).then(() => {
            $("#m-home-slider").slick({
                infinite: true,
                autoplay: true,
                dots: true,
            });
        })
    },
    updated: function() {
        
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/slider.less";
</style>

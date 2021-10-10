<template>
    <div class="m-slider" v-if="ready" id="m-home-slider">
        <div
            class="u-slider"
            v-for="(item, i) in data"
            :key="i"
            :style="{ backgroundColor: item.bgcolor }"
        >
            <a class="u-pic" :href="item.link" :target="target">
                <img :src="item.img | resolveImagePath" />
            </a>
        </div>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getSliders } from "@/service/cms";
export default {
    name: "slider",
    props: [],
    data: function () {
        return {
            data: [],
        };
    },
    computed: {
        ready: function () {
            return this.data && this.data.length && !this.player_status;
        },
        player_status: function () {
            return (
                ~~this.$store.state.config.index_live_status ||
                ~~this.$store.state.config.index_video_status
            );
        },
        client: function () {
            return this.$store.state.client;
        },
        target: function () {
            return buildTarget();
        },
    },
    methods: {
        renderSlider: function () {
            $("#m-home-slider").slick({
                infinite: true,
                autoplay: true,
                dots: true,
            });
        },
        loadData: function () {
            return getSliders("slider", this.client, 10).then((res) => {
                this.data = res.data.data;
            });
        },
        init : function (){
            this.loadData().then(()=>{
                this.renderSlider();
            })
        }
    },
    mounted: function () {
        this.init()
    },
    filters: { resolveImagePath },
};
</script>

<style lang="less">
@import "../../assets/css/index/slider.less";
</style>

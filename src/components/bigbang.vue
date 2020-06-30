<template>
    <VueSlickCarousel v-bind="settings" class="m-slider" v-if="data.length">
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
    </VueSlickCarousel>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getNews } from "../service/index";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    name: "bigbang",
    props: [],
    data: function() {
        return {
            data: [],
            settings: {
                dots: true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.5,
                infinite: true,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            },
        };
    },
    computed: {
        target: function() {
            return buildTarget();
        },
    },
    methods: {},
    beforeCreate: function() {
        getNews("slider", 10).then((data) => {
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data;
        });
    },
    mounted: function() {},
    components: {
        VueSlickCarousel,
    },
};
</script>

<style lang="less">
@import "../assets/css/slider.less";
</style>

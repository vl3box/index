<template>
    <div class="m-slider" v-if="data.length" id="m-home-slider">
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
import { getNews } from "../service/index";

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
    updated: function() {
        $("#m-home-slider").slick({
            infinite: true,
            autoplay: true,
            dots: true,
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/slider.less";
</style>

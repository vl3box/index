<template>
    <div class="m-event">
        <el-carousel
            v-if="data.length"
            trigger="click"
            height="160px"
            indicator-position="none"
            :interval="6000"
        >
            <el-carousel-item v-for="(item, i) in data" :key="i">
                <a
                    :href="item.link"
                    rel="noopener noreferrer"
                    target="_blank"
                    :style="{ backgroundColor: item.bgcolor }"
                    ><img :src="item.img"
                /></a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getNews } from "../service/index";
export default {
    name: "event",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    beforeCreate: function() {
        getNews("event").then((data) => {
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/event.less";
</style>

<template>
    <div class="m-joke">
        <h3 class="u-label">
            <img class="u-icon" :src="icon" />今日骚话
        </h3>
        <div class="u-content">
            <el-carousel height="20px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="(item,i) in data" :key="i">
                    <a class="u-item" :href="getLink(item.id)" target="_blank">
                        <div class="u-content" v-html="item.html"></div>
                        <span class="u-author">@{{item.author}}</span>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import lodash from 'lodash';
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getLink } from "@jx3box/jx3box-common/js/utils";
import { getJokes } from "@/service/index";
import JX3_EMOTION from "@jx3box/jx3box-emotion";

export default {
    name: "joke",
    props: [],
    components: {},
    data: function () {
        return {
            data: [],
            icon: __imgPath + "image/box/joke.svg",
        };
    },
    computed: {},
    methods: {
        getLink,
        init: function () {
            getJokes().then((res) => {
                this.data = res.data.data.list;
                this.render();
            });
        },
        render: function () {
            this.data.forEach((item) => {
                const ins = new JX3_EMOTION(item.content)
                item.html = ins.code
            })
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        this.init()
    },
};
</script>

<style lang="less">
@import "../assets/css/joke.less";
</style>
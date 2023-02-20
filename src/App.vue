<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-left m-sidebar">
                <welcome />
                <news />
                <jx3world />
                <jx3code />
                <feedback />
            </div>
            <div class="m-primary">
                <live />
                <slider />
                <box />
                <face />

                <joke />
                <posts />
                <emotion />
                <wiki />
            </div>
        </div>
        <festival />
        <Footer darkMode></Footer>
    </div>
</template>

<script>
// 左侧
import welcome from "@/components/v3/welcome.vue";
import news from "@/components/v3/news.vue";
import jx3world from "@/components/v3/jx3world.vue";
import jx3code from "@/components/v3/jx3code.vue";

import feedback from "@/components/v2/feedback.vue";

// 首屏
import live from "@/components/index/live.vue";
import slider from "@/components/v3/slider.vue";

import box from "@/components/index/box.vue";

import posts from "@/components/v2/posts.vue";
import emotion from "@/components/v2/emotion.vue";
import wiki from "@/components/v2/wiki.vue";
import joke from "@/components/index/joke.vue";

import face from "@/components/v3/face.vue";

// 系统
import festival from "@/components/festival/index.vue";
import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";
import _ from "lodash";
import "animate.css";

export default {
    name: "App",
    props: [],
    data: function () {
        return {
            isMobile: window.innerWidth < 1280,
        };
    },
    computed: {
        versions() {
            return "v2";
        },
    },
    components: {
        // 左侧
        welcome,
        news,
        jx3world,
        jx3code,

        feedback,

        // 右侧
        live,
        slider,

        box,

        face,

        joke,
        posts,
        emotion,
        wiki,

        festival,
    },
    methods: {},
    created: function () {
        if (User.isLogin()) {
            getProfile().then((data) => {
                if (data) {
                    this.$store.state.server = data.jx3_server;
                }
            });
        }

        getConfig().then((res) => {
            let data = res.data.data;
            let _data = {};
            if (data) {
                data.forEach((item) => {
                    _data[item.key] = item.val;
                });
            }
            this.$store.state.config = _data;
        });
    },
    mounted() {},
};
</script>

<style lang="less">
@import "./assets/css/v3/app.less";
</style>

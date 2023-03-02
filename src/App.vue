<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-left m-sidebar">
                <!-- <welcome /> -->
                <banner />
                <news />
                <jx3code />
                <jx3world />
            </div>
            <div class="m-primary">
                <live />
                <slider />
                <box />

                <!-- <joke /> -->
                <posts />
                <Footer></Footer>
            </div>
        </div>
        <festival />
    </div>
</template>

<script>
// 左侧
// import welcome from "@/components/v3/welcome.vue";
import news from "@/components/v3/news.vue";
import jx3world from "@/components/v3/jx3world.vue";
import jx3code from "@/components/v3/jx3code.vue";
import banner from "@/components/v3/banner.vue";

// 首屏
import live from "@/components/index/live.vue";
import slider from "@/components/v3/slider.vue";

import box from "@/components/index/box.vue";
// import joke from "@/components/index/joke.vue";
import posts from "@/components/v3/posts.vue";
// import emotion from "@/components/v2/emotion.vue";

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
        // welcome,
        news,
        jx3world,
        jx3code,
        banner,

        // 右侧
        live,
        slider,
        box,
        // joke,
        posts,

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
    mounted() {
        if (window.innerWidth <= 1133) {
            const main = document.querySelector(".m-main");
            const footer = document.querySelector(".c-footer");
            main.appendChild(footer);
        }
    },
};
</script>

<style lang="less">
@import "./assets/css/v3/app.less";
</style>

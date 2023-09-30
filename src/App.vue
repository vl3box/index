<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-left m-sidebar">
                <welcome />
                <news />
                <jx3code />
                <jx3servers />
                <!-- <jx3world /> -->
                <feedback />
                <banner />
            </div>
            <div class="m-primary">
                <live />
                <slider />
                <box />

                <jx3world />
                <!-- <joke /> -->
                <face />
                <posts />
                <Footer></Footer>
            </div>
        </div>
        <festival />

        <forceAlert />
    </div>
</template>

<script>
// 左侧
import welcome from "@/components/v3/welcome.vue";
import news from "@/components/v3/news.vue";
import jx3world from "@/components/v4/jx3world.vue";
import jx3code from "@/components/v3/jx3code.vue";
import jx3servers from "@/components/v3/jx3servers.vue";
import banner from "@/components/v3/banner.vue";
import feedback from "@/components/v3/feedback.vue";

// 首屏
import live from "@/components/v3/live.vue";
import slider from "@/components/v3/slider.vue";
import box from "@/components/v3/box.vue";
import posts from "@/components/v3/posts.vue";
import face from "@/components/v3/face.vue";
import festival from "@/components/festival/index.vue";
import forceAlert from "@/components/index/force_alert.vue"

// 系统
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
        jx3servers,
        banner,
        feedback,

        // 右侧
        live,
        slider,
        box,
        // joke,
        face,
        posts,

        festival,
        forceAlert
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
@import "~@/assets/css/v3/app.less";
</style>

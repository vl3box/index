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
                <qrcode />
            </div>
            <div class="m-primary">
                <live />
                <slider />
                <div class="m-content">
                    <div class="m-section">
                        <div class="m-center">
                            <box style="margin-bottom: 20px" />
                            <event />
                            <joke />
                            <posts />
                            <emotion />
                            <wiki />
                        </div>
                        <div class="m-right">
                            <database />
                            <banner />
                            <!-- <servers /> -->
                            <!-- <servers2 /> -->
                            <!-- <activity /> -->
                            <!-- <celebrity /> -->
                            <price />
                            <transaction />
                            <face />
                        </div>
                    </div>
                </div>
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

// import servers2 from "@/components/index/servers2.vue";
import feedback from "@/components/v2/feedback.vue";
import qrcode from "@/components/v2/qrcode.vue";

// 首屏
import live from "@/components/index/live.vue";
import slider from "@/components/v2/slider.vue";
import box from "@/components/index/box.vue";
import event from "@/components/v2/event.vue";
import posts from "@/components/v2/posts.vue";
import emotion from "@/components/v2/emotion.vue";
import wiki from "@/components/v2/wiki.vue";
import joke from "@/components/index/joke.vue";
import face from "@/components/index/face.vue";

// v2 右侧
import banner from "@/components/v2/banner.vue";
// import activity from "@/components/v2/activity.vue";
// import celebrity from "@/components/v2/celebrity.vue";
import price from "@/components/index/price.vue";
import transaction from "@/components/index/transaction_mini.vue";
import database from "@/components/index/database.vue";

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

        // servers,
        // servers2,

        feedback,
        qrcode,

        // 首屏
        live,
        slider,
        box,
        event,
        posts,
        emotion,
        wiki,
        face,

        // 右侧
        banner,
        // activity,
        // celebrity,
        database,
        price,
        transaction,
        joke,
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

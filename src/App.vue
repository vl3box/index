<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-primary">
                <live />
                <slider />
                <box />
                <div class="m-content">
                    <div class="m-center">
                        <event />
                        <posts />
                        <wiki />
                    </div>
                    <div class="m-right">
                        <banner />
                        <price />
                        <transaction />
                    </div>
                </div>
            </div>
            <div class="m-left m-sidebar">
                <assistant />
                <calendar />
                <jx3code />
                <gamenews />
                <servers />
                <notice />
                <div :class="isFixed?'m-fixed':''" :style="`top:${top}px`" ref="fixed">
                    <feedback />
                    <qrcode />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// 左侧
import assistant from "@/components/v2/assistant.vue";
import calendar from "@/components/v2/calendar.vue";
import jx3code from "@/components/index/jx3code.vue";
import gamenews from "@/components/index/gamenews.vue";
import servers from "@/components/index/servers.vue";
import notice from "@/components/index/notice.vue";
import feedback from "@/components/v2/feedback.vue";
import qrcode from "@/components/v2/qrcode.vue";

// 首屏
import live from "@/components/index/live.vue";
import slider from "@/components/v2/slider.vue";
import box from "@/components/index/box.vue";
import event from "@/components/v2/event.vue";
import posts from "@/components/v2/posts.vue";
import wiki from "@/components/v2/wiki.vue";

// v2 右侧
import banner from "@/components/v2/banner.vue";
import price from "@/components/index/price.vue";
import transaction from "@/components/index/transaction_mini.vue";
// import festival from "@/components/index/festival.vue";

import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";

export default {
    name: "App",
    props: [],
    data: function () {
        return {
            isMobile: window.innerWidth < 768,
            isFixed: false,
            top: 0,
        };
    },
    computed: {
        versions() {
            return "v2";
        },
    },
    components: {
        // 左侧
        assistant,
        calendar,
        jx3code,
        gamenews,
        servers,
        notice,
        feedback,
        qrcode,

        // 首屏
        live,
        slider,
        box,
        event,
        posts,
        wiki,

        // 右侧
        banner,
        price,
        transaction,
        // festival,
    },
    methods: {
        handleScroll() {
            if (this.$refs.fixed.getBoundingClientRect().top < 80) {
                this.isFixed = true;
                this.top = window.pageYOffset;
            } else {
                this.isFixed = false;
            }
        },
    },
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
        window.addEventListener("scroll", this.handleScroll, true);
    },
};
</script>

<style lang="less">
    @import "./assets/css/v2/app.less";
</style>

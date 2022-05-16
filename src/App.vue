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
                    </div>
                </div>
            </div>
            <div class="m-left m-sidebar">
                <assistant />
                <jx3code />
                <gamenews />
                <servers />
                <price />
                <transaction />
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// v2 左侧
import assistant from "@/components/v2/assistant.vue";
// v2 中间内容
import event from "@/components/v2/event.vue";
import posts from "@/components/v2/posts.vue";
import wiki from "@/components/v2/wiki.vue";
// v2 右侧
import banner from "@/components/v2/banner.vue";

// 左侧
import jx3code from "@/components/index/jx3code.vue";
import gamenews from "@/components/index/gamenews.vue";
import servers from "@/components/index/servers.vue";
import price from "@/components/index/price.vue";
import transaction from "@/components/index/transaction_mini.vue";
// import festival from "@/components/index/festival.vue";

// 首屏
import live from "@/components/index/live.vue";
import slider from "@/components/index/slider.vue";
import box from "@/components/index/box.vue";

// import notice from "@/components/index/notice.vue";

import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";

export default {
    name: "App",
    props: [],
    data: function () {
        return {
            isMobile: window.innerWidth < 768,
        };
    },
    computed: {
        versions() {
            return "v2";
        },
    },
    methods: {},
    components: {
        // 左侧
        assistant,
        jx3code,
        gamenews,
        servers,
        price,
        transaction,

        // 首屏
        live,
        slider,
        box,
        event,

        // 右侧
        // notice,
        wiki,
        posts,
        banner,
        // festival,
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
};
</script>

<style lang="less">
    @import "./assets/css/v2/app.less";
</style>

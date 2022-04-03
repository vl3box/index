<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-primary">
                <div class="m-content">
                    <live />
                    <slider />
                    <box />
                    <posts />
                    <!-- <festival/> -->
                </div>

                <div class="m-left m-sidebar">
                    <daily />

                    <jx3code />
                    <gamenews />
                    <servers />
                    <price />
                    <transaction />
                </div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
// 左侧
import daily from "@/components/index/daily.vue";
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
// import event from "@/components/index/event.vue";
import posts from "@/components/index/posts.vue";
// import notice from "@/components/index/notice.vue";

import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";

export default {
    name: "App",
    props: [],
    data: function() {
        return {
            isMobile: window.innerWidth < 768,
        };
    },
    computed: {},
    methods: {},
    components: {
        // 左侧
        daily,
        jx3code,
        gamenews,
        servers,
        price,
        transaction,

        // 首屏
        live,
        slider,
        box,
        // event,

        // 右侧
        // notice,
        posts,
        // festival,
    },
    created: function() {
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
@import "./assets/css/index/app.less";
</style>

<template>
    <div id="app">
        <Header></Header>
        <div class="m-main">
            <div class="m-primary">
                <slider />
                <box />
                <servers />
                <flower />
                <price />

                <div class="m-extend">
                    <daily />
                    <gamenews />
                    <activity />
                    <notice />
                    <contact />
                </div>

                <div class="m-misc">
                    <Nav />
                    <macrorank />
                    <jx3datrank />
                    <p class="u-pi">没有美工我瞎撸的啊，兄弟别催，明天有想法了再优化这半边，灵魂画手请直接PO图Q群2471800 <span>—— 又当产品又当设计又当编辑的苦逼开发</span></p>
                </div>

                <Footer></Footer>

            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import gamenews from "@/components/gamenews.vue";
import slider from "@/components/slider.vue";
import activity from "@/components/activity.vue";
import notice from "@/components/notice.vue";
import box from "@/components/box.vue";
import daily from "@/components/daily.vue";
import servers from "@/components/servers.vue";
import price from "@/components/price.vue";
import flower from "@/components/flower.vue";
import contact from "@/components/contact.vue";
import macrorank from "@/components/macrorank.vue";
import jx3datrank from "@/components/jx3datrank.vue";
import { getProfile } from "./service/profile";
export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    components: {
        Nav,
        activity,
        gamenews,
        notice,
        slider,
        box,
        daily,
        servers,
        price,
        flower,
        contact,
        macrorank,
        jx3datrank,
    },
    created: function() {
        getProfile().then((data) => {
            if (data) {
                this.$store.state.isLogin = true;
                this.$store.state.profile = data;
            }
        });
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>

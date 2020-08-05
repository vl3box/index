<template>
    <div id="app">
        <Header></Header>
        <div class="m-main">
            <div class="m-primary">
                <bigbang />
                <box />
                <flower />
                <newpost />
                <guide />

                <div class="m-left">
                    <gamenews />
                    <servers />
                    <price />
                    <daily />
                </div>

                <div class="m-right">
                    <!-- <Nav /> -->
                    <activity />
                    <notice />
                    <macrorank/>
                    <jx3datrank/>
                    <contact />
                </div>

                <Footer></Footer>

            </div>
        </div>
    </div>
</template>

<script>
// import Nav from "@/components/Nav.vue";
import gamenews from "@/components/gamenews.vue";
import bigbang from "@/components/bigbang.vue";
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
import newpost from "@/components/newpost.vue";
import guide from "@/components/guide.vue";
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
        // Nav,
        activity,
        gamenews,
        notice,
        bigbang,
        box,
        daily,
        servers,
        price,
        flower,
        contact,
        macrorank,
        jx3datrank,
        newpost,
        guide
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

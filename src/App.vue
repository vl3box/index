<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-primary">
                <bigbang />
                <box />
                <event />
                <flower />
                <newpost />
                <team />
                <!-- <guide /> -->

                <div class="m-left">
                    <gamenews />
                    <servers />
                    <price />
                    <daily />
                    <ad />
                </div>

                <div class="m-right">
                    <!-- <Nav /> -->
                    <activity />
                    <notice />
                    <contact />
                    <wikirank/>
                    <macrorank/>
                    <jx3datrank/>
                    <examrank/>
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
import ad from "@/components/ad.vue";
import servers from "@/components/servers.vue";
import price from "@/components/price.vue";
import event from "@/components/event.vue";
import flower from "@/components/flower.vue";
import contact from "@/components/contact.vue";
import macrorank from "@/components/macrorank.vue";
import jx3datrank from "@/components/jx3datrank.vue";
import wikirank from "@/components/wikirank.vue";
import examrank from "@/components/examrank.vue";
import newpost from "@/components/newpost.vue";
import team from "@/components/team.vue";
// import guide from "@/components/guide.vue";
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
        ad,
        servers,
        price,
        flower,
        contact,
        macrorank,
        jx3datrank,
        examrank,
        wikirank,
        newpost,
        event,
        team
        // guide
    },
    created: function() {
        getProfile().then((data) => {
            if (data) {
                this.$store.state.isLogin = true;
                this.$store.state.profile = {
                    server : data.jx3_server
                };
            }
        });
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>

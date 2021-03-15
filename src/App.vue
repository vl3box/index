<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-primary">
                <live />
                <bigbang />
                <event />
                <box />
                <guide />
                <!-- TODO:沙雕表情 -->
                <newpost />
                <!-- TODO:剑三直播 -->
                <team />

                <div class="m-left">
                    <daily />
                    <gamenews />
                    <servers />
                    <price />
                    <flower />
                    <!-- TODO:账号同步工具 -->
                    <!-- TODO:APP下载 -->
                </div>

                <div class="m-right">
                    <notice />
                    <cjrank />
                    <macrorank />
                    <jx3datrank />
                    <!-- TODO:DPS天梯 -->
                    <wikirank />
                    <collectionrank />
                    <namespace/>
                    <examrank />
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
// import ad from "@/components/ad.vue";
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
import guide from "@/components/guide.vue";
import live from "@/components/live.vue";
import cjrank from "@/components/cjrank.vue";
import collectionrank from "@/components/collectionrank.vue";
import namespace from '@/components/namespace.vue';
import { getProfile } from "./service/profile";
import User from "@jx3box/jx3box-common/js/user";
import { getConfig } from "@/service/index.js";
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
        // activity,
        gamenews,
        notice,
        bigbang,
        box,
        daily,
        // ad,
        servers,
        price,
        flower,
        contact,
        macrorank,
        jx3datrank,
        namespace,
        examrank,
        wikirank,
        newpost,
        event,
        team,
        guide,
        cjrank,
        live,
        collectionrank
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
            let data = res.data.data
            let _data = {}
            if(data){
                data.forEach((item) => {
                    _data[item.key] = item.val
                })
            }
            this.$store.state.config = _data
        })

        
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>

<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-primary">
                <live />
                <slider />
                <event />
                <box />

                <div class="m-center">
                    <joke />
                    <transaction />

                    <guide />
                    <!-- TODO:剑三直播 -->

                    <face />
                    <newpost />

                    <!-- TODO:表情 -->
                    <team />
                </div>

                <div class="m-left">
                    <daily />
                    <jx3code />
                    <gamenews />
                    <servers />
                    <price />
                    <!-- TODO:账号同步工具 -->
                    <!-- TODO:APP下载 -->
                </div>

                <div class="m-right">
                    <notice />
                    <gossip />
                    <cjrank />
                    <macrorank />
                    <jx3datrank />
                    <wikirank />
                    <collectionrank />
                    <examrank />
                    <contact />
                </div>

                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import box from "@/components/box.vue";
import notice from "@/components/notice.vue";
import gossip from "@/components/gossip.vue";
import slider from "@/components/slider.vue";
import event from "@/components/event.vue";
import live from "@/components/live.vue";
import contact from "@/components/contact.vue";
// import activity from "@/components/activity.vue";

import daily from "@/components/daily.vue";
import jx3code from "@/components/jx3code.vue";
import gamenews from "@/components/gamenews.vue";
import servers from "@/components/servers.vue";
import price from "@/components/price.vue";

import macrorank from "@/components/rank_macro.vue";
import jx3datrank from "@/components/rank_jx3dat.vue";
import examrank from "@/components/rank_exam.vue";
import wikirank from "@/components/rank_knowledges.vue";
import cjrank from "@/components/rank_achievements.vue";
import collectionrank from "@/components/rank_collections.vue";
import namespacerank from "@/components/rank_namespaces.vue";

import newpost from "@/components/newpost.vue";
import team from "@/components/team.vue";
import guide from "@/components/guide.vue";
import joke from "@/components/joke.vue";
import face from "@/components/face.vue";
import transaction from "@/components/transaction.vue";

import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";
export default {
    name: "App",
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
    components: {
        box,
        notice,
        gossip,
        slider,
        event,
        live,
        contact,

        daily,
        jx3code,
        gamenews,
        servers,
        price,

        cjrank,
        macrorank,
        jx3datrank,
        wikirank,
        collectionrank,
        examrank,
        // namespacerank,

        newpost,
        team,
        guide,
        joke,
        face,
        transaction,
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

        if (
            location.hostname != "localhost" &&
            location.hostname != "www.jx3box.com"
        ) {
            location.href = "https://www.jx3box.com/index";
        }
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>

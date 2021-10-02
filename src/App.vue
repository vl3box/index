<template>
    <div id="app">
        <Header :overlayEnable="true"></Header>
        <div class="m-main">
            <div class="m-primary">

                <div class="m-left">
                    <daily />
                    <jx3code />
                    <gamenews />
                    <servers />
                    <price />
                </div>

                <!-- <live />
                <slider />
                <event />
                <box /> -->

                <div class="m-center">
                    <!-- <joke />
                    <transaction />
                    <guide />
                    <face />
                    <newpost />
                    <team /> -->
                </div>

                <div class="m-right">
                    <!-- <notice />
                    <gossip />
                    <cjrank />
                    <macrorank />
                    <jx3datrank />
                    <collectionrank />
                    <examrank />
                    <wikirank />
                    <contact />
                    <feedback v-if="isMobile"/> -->
                </div>

                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import daily from "@/components/index/daily.vue";
import jx3code from "@/components/index/jx3code.vue";
import gamenews from "@/components/index/gamenews.vue";
import servers from "@/components/index/servers.vue";
import price from "@/components/index/price.vue";
import feedback from "@/components/index/feedback.vue";

// import box from "@/components/index/box.vue";
// import notice from "@/components/index/notice.vue";
// import gossip from "@/components/index/gossip.vue";
// import slider from "@/components/index/slider.vue";
// import event from "@/components/index/event.vue";
// import live from "@/components/index/live.vue";
// import contact from "@/components/index/contact.vue";
// import activity from "@/components/index/activity.vue";


// import macrorank from "@/components/index/rank_macro.vue";
// import jx3datrank from "@/components/index/rank_jx3dat.vue";
// import examrank from "@/components/index/rank_exam.vue";
// import wikirank from "@/components/index/rank_knowledges.vue";
// import cjrank from "@/components/index/rank_achievements.vue";
// import collectionrank from "@/components/index/rank_collections.vue";
// import namespacerank from "@/components/index/rank_namespaces.vue";

// import newpost from "@/components/index/newpost.vue";
// import team from "@/components/index/team.vue";
// import guide from "@/components/index/guide.vue";
// import joke from "@/components/index/joke.vue";
// import face from "@/components/index/face.vue";
// import transaction from "@/components/index/transaction.vue";

import User from "@jx3box/jx3box-common/js/user";
import { getProfile } from "@/service/user";
import { getConfig } from "@/service/setting.js";
export default {
    name: "App",
    props: [],
    data: function () {
        return {
            isMobile : window.innerWidth < 768
        };
    },
    computed: {},
    methods: {},
    components: {
        daily,
        jx3code,
        gamenews,
        servers,
        price,
        // feedback,

        // box,
        // notice,
        // gossip,
        // slider,
        // event,
        // live,
        // contact,

        

        // cjrank,
        // macrorank,
        // jx3datrank,
        // wikirank,
        // collectionrank,
        // examrank,
        // namespacerank,

        // newpost,
        // team,
        // guide,
        // joke,
        // face,
        // transaction,
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

        // if (
        //     location.hostname != "localhost" &&
        //     location.hostname != "www.jx3box.com"
        // ) {
        //     location.href = "https://www.jx3box.com/index";
        // }
    },
};
</script>

<style lang="less">
@import "./assets/css/index/app.less";
</style>

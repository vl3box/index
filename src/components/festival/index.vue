<template>
    <div class="m-index-popup" v-if="success" v-show="visible" @click="close">
        <!-- 贺卡 -->
        <!-- <midAutumn :fontCount="count" @checked="checked" @close="close" /> -->
        <iframe class="m-holiday-iframe" :style="eventStyle" :src="url" frameborder="0"></iframe>
    </div>
</template>

<script>
import { __imgPath, __Root } from "@jx3box/jx3box-common/data/jx3box.json";
import { getBoxCoin, getEventDetail } from "@/service/index";
import User from "@jx3box/jx3box-common/js/user";
// import midAutumn from "@/components/festival/midAutumn.vue";
export default {
    name: "Festival",
    data: function () {
        return {
            success: false,
            visible: true,
            count: 20,
            data: {},
            done: sessionStorage.getItem("festival_id"),
            check: false,

            record_id: 0,
        };
    },
    // components: { midAutumn },
    computed: {
        event_id() {
            return ~~this.$store.state.config.festival_id;
        },
        event_status() {
            return !!~~this.$store.state.config.festival_enable;
        },
        event_test() {
            return !!~~this.$store.state.config.festival_test;
        },
        url() {
            let url = __Root + "author/" + User.getInfo().uid + `/holiday-card/${this.event_id}`
            if (this.record_id) {
                url += `?id=${this.record_id}`
            }
            return url
        },
        eventStyle() {
            return {
                width: this.data.meta?.width || "720px",
                height: this.data.meta?.height || "671px",
            };
        },
    },
    methods: {
        closePop() {
            this.visible = false;
        },
        checked() {
            this.check = true;
        },
        close() {
            this.visible = false;
        },
        async init() {
            if ((this.event_status && this.event_id) || (this.event_test && User.isSuperAdmin())) {
                console.log("尝试触发贺卡事件");
                const res = await getEventDetail(this.event_id);
                this.data = res.data.data;
                if (!this.done) {
                    getBoxCoin(this.event_id)
                        .then((res) => {
                            console.log("成功触发贺卡事件");
                            this.data = res.data?.data;
                            this.count = res.data?.data?.boxcoin || res.data?.data?.points || 0;
                            this.success = true;
                            sessionStorage.setItem("festival_id", this.event_id);

                            this.record_id = res.data?.data?.id || 0;
                        })
                        .catch((err) => {
                            console.log("贺卡触发失败", err);
                        });
                }
            }
        },
    },
    watch: {
        "$store.state.config": {
            handler(val, oldVal) {
                this.init();
            },
            deep: true,
        },
    },

    mounted() {
        if (User.isLogin()) {
            this.init();
        }
    },
};
</script>

<style lang="less">
@import "../../assets/css/index/popup.less";

.m-holiday-iframe {
    border: none;
}
</style>

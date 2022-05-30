<template>
    <div class="m-index-popup" v-show="visible" v-if="success && event_id" @click="closePop">
        <div class="m-card animation a-zoomInDown" :class="key" @click.stop>
            <img :src="imgLink" />
            <span class="u-count">{{ fontCount }}</span>
            <span class="u-user">{{ username }}</span>
            <span class="u-close" @click="closePop"><i class="el-icon-close"></i> <span>关闭</span></span>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getBoxCoin } from "@/service/index";
import font from "@/assets/data/font.json";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "Festival",
    props: [],
    data: function () {
        return {
            success: false,
            visible: true,
            count: 28,

            font,
            data: {},
        };
    },
    computed: {
        imgLink: function ({ event_id }) {
            return __imgPath + `topic/festival/${event_id}.png`;
        },
        fontCount() {
            let str = this.count + "";
            return str
                .split("")
                .map((item) => this.font[item])
                .join("");
        },
        username() {
            return User.getInfo().name;
        },
        key({ event_slug }) {
            return `m-` + (event_slug || "duanwu");
        },
        event_id() {
            return ~~this.$store.state.config.festival_id;
        },
        event_status(){
            return !!~~this.$store.state.config.festival_enable
        },
        event_test(){
            return !!~~this.$store.state.config.festival_test
        }
    },
    methods: {
        closePop() {
            this.visible = false;
        },
        init() {
            if ((this.event_status && this.event_id) || (this.event_test && User.isSuperAdmin())) {
                getBoxCoin(this.event_id)
                    .then((res) => {
                        this.data = res.data?.data;
                        let boxcoin = res.data?.data?.boxcoin;
                        if (boxcoin > 0) {
                            this.count = boxcoin;
                            this.success = true;
                        }
                    })
                    .catch((err) => {
                        console.log("getBoxCoin_ERROR:", err);
                    });
            }
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
</style>

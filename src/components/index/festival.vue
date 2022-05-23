<template>
    <div class="m-index-popup" v-show="visible" v-if="success" @click="closePop">
        <div class="m-card animation a-zoomInDown" :class="key" @click.stop>
            <img :src="imgLink" :alt="imgTxt" />
            <span class="u-count">{{fontCount}}</span>
            <span class="u-user">{{user}}</span>
            <span class="u-close" @click="closePop"><i class="el-icon-close"></i> <span>关闭</span></span>
        </div>
    </div>
</template>

<script>
const KEY = "duanwu";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getBoxCoin } from "@/service/index";
import font from "@/assets/data/font.json";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "popup",
    props: [],
    data: function () {
        return {
            success: false,
            visible: true,
            count: 28,

            event_id: 2, //2022端午活动
            font,
        };
    },
    computed: {
        imgLink: function () {
            return __imgPath + `topic/festival/${KEY}.png`;
        },
        imgTxt: function () {
            return "祝侠士2022新春快乐！";
        },
        fontCount() {
            let str = this.count + "";
            return str
                .split("")
                .map((item) => this.font[item])
                .join("");
        },
        user() {
            console.log(User.getInfo());
            return User.getInfo().name;
        },
        key() {
            return `m-${KEY}`;
        },
    },
    methods: {
        closePop() {
            this.visible = false;
        },
    },
    mounted() {
        if (user.isLogin())
            getBoxCoin(this.event_id)
                .then((res) => {
                    let boxcoin = res.data?.data?.boxcoin;
                    if (boxcoin > 0) {
                        this.count = boxcoin;
                        this.success = true;
                    }
                })
                .catch((err) => {
                    console.log("getBoxCoin_ERROR:", err);
                });
    },
};
</script>

<style lang="less">
    @import "../../assets/css/index/popup.less";
</style>

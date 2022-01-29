<template>
    <div class="m-index-popup" v-show="visible" v-if="success" @click="closePop">
        <div class="m-card animation a-zoomInDown" @click.stop>
            <img :src="imgLink" :alt="imgTxt" />
            <span class="u-count">{{count}}</span>
            <span class="u-close" @click="closePop"><i class="el-icon-close"></i> <span>关闭</span></span>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getBoxCoin } from "@/service/index";
export default {
    name: "popup",
    props: [],
    data: function() {
        return {
            success : false,
            visible: true,
            count : 128,

            event_id : 1,   //2022新春活动
        };
    },
    computed: {
        imgLink: function() {
            return __imgPath + "image/event/new2022.png";
        },
        imgTxt: function() {
            return "祝侠士2022新春快乐！";
        },
    },
    methods: {
        closePop() {
            this.visible = false;
        },
    },
    mounted() {
        getBoxCoin(this.event_id)
            .then((res) => {
                let boxcoin = res.data?.data?.boxcoin
                if (boxcoin > 0){
                    this.boxcoin = boxcoin;
                    this.success = true
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

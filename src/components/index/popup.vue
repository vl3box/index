<template>
    <div class="m-index-popup" v-if="show">
        <div class="m-content animation a-zoomInDown">
            <span class="u-close" v-if="countdown">{{ countdown }}秒后自动关闭</span>
            <img :src="imgLink" :alt="imgTxt" />
        </div>
        <div class="u-mark"></div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "popup",
    props: [],
    data: function() {
        return {
            show: true,
            countdown: 0,
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
            this.timer = setInterval(() => {
                this.countdown--;
                if (this.countdown === 0) {
                    this.show = false;
                    clearInterval(this.timer);
                }
            }, 1000);
        },
    },
    created() {
        setTimeout(() => {
            this.countdown = 3;
            this.closePop();
        }, 2000);
    },
};
</script>

<style lang="less">
@import "../../assets/css/index/popup.less";
</style>

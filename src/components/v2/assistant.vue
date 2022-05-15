<template>
    <div class="m-assistant m-sideblock">
        <div class="m-assistant-header m-sideblock-header" :style="{backgroundImage:bg}">
            <div class="u-time">{{ year }}年{{ month }}月{{ date }}日</div>
            <div class="u-assistant">
                <span class="u-btn"><i class="el-icon-download"></i>魔盒助手</span>
                <span class="u-desc">魔盒助手v.1.2323</span>
            </div>
            <div class="u-list">
                <span class="u-weibo u-item">
                    <img svg-inline src="../../assets/img/weibo.svg" />
                    <em>官方微博：</em>
                    <a href="https://weibo.com/jx3box" target="_blank">
                        <b>JX3BOX魔盒</b>
                    </a>
                </span>
                <span class="u-weixin u-item">
                    <img svg-inline src="../../assets/img/wechat.svg" />
                    <em>微信公众号：</em>
                    <b>剑三魔盒</b>
                </span>
            </div>
        </div>
        <div>
            <calendar></calendar>
        </div>
    </div>
</template>

<script>
import { theme } from "../../../setting.json";
import calendar from "../index/calendar.vue";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "assistant",
    components: { calendar },
    data: function () {
        return {
            year: "",
            month: "",
            date: "",
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        theme: function () {
            return theme[this.client];
        },
        bg: function () {
            return `url(${__imgPath}topic/${this.theme}/daily.png)`;
        },
    },

    methods: {
        initDate: function () {
            let dt = new Date();
            this.year = dt.getFullYear();
            this.month = dt.getMonth() + 1;
            this.date = dt.getDate();
        },
    },
    mounted: function () {
        this.initDate();
    },
};
</script>

<style lang="less">
    @import "../../assets/css/v2/assistant.less";
</style>

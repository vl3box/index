<template>
    <div class="m-assistant m-sideblock">
        <div class="m-assistant-header m-sideblock-header" :style="{ backgroundImage: bg }">
            <div class="u-assistant">
                <a href="" target="_blank" class="u-btn"><i class="el-icon-download"></i>魔盒助手</a>
                <span class="u-desc">魔盒助手v.1.2323</span>
            </div>
        </div>
    </div>
</template>

<script>
import { theme } from "../../../setting.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "assistant",
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

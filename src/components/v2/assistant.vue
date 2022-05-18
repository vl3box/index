<template>
    <div class="m-assistant" :style="{ backgroundImage: bg }">
        <div class="u-assistant">
            <a :href="link" target="_blank" class="u-btn button button-3d button-primary button-rounded"><i class="el-icon-download"></i>魔盒助手</a>
            <span class="u-label">{{ label }}</span>
        </div>
    </div>
</template>

<script>
import { theme } from "../../../setting.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getMenus } from "@/service/cms.js";
export default {
    name: "assistant",
    data: function () {
        return {
            label: "",
            link: "",
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
        loadData: function () {
            return getMenus("assistant").then((res) => {
                let data = res.data.data.val?.[0];
                this.label = data.label;
                this.link = data.link;
            });
        },
    },
    mounted: function () {
        this.loadData();
    },
};
</script>

<style lang="less">
@import "../../assets/css/v2/assistant.less";
</style>

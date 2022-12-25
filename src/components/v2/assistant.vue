<template>
    <div class="m-welcome" :style="{ backgroundImage: bg }">
        <div class="m-assistant">
            <div class="u-assistant">
                <a href="/tool/39410" target="_blank" class="u-btn button button-3d button-primary button-rounded"
                    ><i class="el-icon-download"></i>魔盒助手</a
                >
                <span class="u-label">{{ label }}</span>
            </div>
        </div>
        <calendar></calendar>
    </div>
</template>

<script>
import calendar from "@/components/v2/calendar.vue";
import { theme } from "../../../setting.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getEventV2 } from "@/service/cms.js";
import { getBreadcrumb } from "@jx3box/jx3box-common/js/api_misc";
import { resolveImagePath } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "assistant",
    components: {
        calendar,
    },
    data: function () {
        return {
            label: "",
            link: "",
            bg: "",
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        theme: function () {
            return theme[this.client];
        },
    },

    methods: {
        loadData: function () {
            return getBreadcrumb("index_jba").then((data) => {
                this.label = data;
            });
        },
        loadBackGround: function () {
            getEventV2({
                type: "common",
                subtype: "jba",
                status: 1,
                client: this.client,
            }).then((res) => {
                const url = resolveImagePath(res.data.data.list[0]?.img);
                if (url) this.bg = `url(${url})`;
            });
        },
    },
    mounted: function () {
        this.loadData();
        this.loadBackGround();
    },
};
</script>

<style lang="less">
@import "../../assets/css/v2/assistant.less";
</style>

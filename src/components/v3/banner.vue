<!--
 * @Author: iRuxu
 * @Date: 2022-05-20 17:38:03
 * @LastEditTime: 2022-07-17 21:08:47
 * @Description:
-->
<template>
    <div class="m-banner" v-if="data && data.length">
        <el-carousel class="m-banner-box" trigger="click" height="180px" v-loading="loading">
            <el-carousel-item v-for="(item, index) in data" :key="index">
                <a :href="item.link" target="_blank" @click="handleClick(item, $event)"
                    ><img :src="showBanner(item.img)"
                /></a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import { getEventV2 } from "@/service/cms";
import { getThumbnail } from "@jx3box/jx3box-common/js/utils";
import { recordBannerClick } from "@/service/setting";
export default {
    name: "banner",

    data: function () {
        return {
            loading: false,
            data: [],
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        params: function () {
            return {
                client: this.client,
                type: "common",
                subtype: "banner",
                per: 5,
                status: 1,
            };
        },
    },
    watch: {},
    methods: {
        loadData: function () {
            this.loading = true;
            return getEventV2(this.params)
                .then((res) => {
                    this.data = res.data.data.list || [];
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        showBanner: function (url) {
            return getThumbnail(url, [320 * 2, 180 * 2]);
        },
        handleClick(item, e) {
            recordBannerClick({
                a: item.ID, //  广告id
                t: "jd", //  广告类型
                p: "index_banner", //  广告在页面的区域位置，如 banner, slider 之类的。
                x: e.clientX, //用户点击的屏幕的x坐标
                y: e.clientY, // 用户点击的屏幕的y坐标
                r: `${window.screen.width}*${window.screen.height}`, // 用户屏幕的分辨率
                d: "pc",
            });
        },
    },
    mounted: function () {
        this.loadData();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/v3/banner.less";
</style>

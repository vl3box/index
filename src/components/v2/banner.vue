<template>
    <div class="m-banner-wrapper m-v2-banner" v-loading="loading">
        <el-carousel class="m-banner" trigger="click">
            <el-carousel-item v-for="(item, index) in data" :key="index">
                <img :src="item.img" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import { getEventV2 } from "@/service/cms";
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
                type:"common",
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
    },
    mounted: function () {
        this.loadData();
    },
};
</script>
<style lang="less">
@import "../../assets/css/v2/banner.less";
</style>

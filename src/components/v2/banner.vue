<template>
    <div class="m-v2-banner">
        <el-carousel trigger="click">
            <el-carousel-item v-for="(item,index) in list" :key="index">
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
            list: [],
        };
    },
    computed: {},
    watch: {},
    methods: {
        loadData: function () {
            let params = {
                client: this.client,
                type: "event",
                per: 4,
                status: 1,
            };
            return getEventV2(params).then((res) => {
                this.list = res.data.data.list;
            });
        },
    },
    created: function () {},
    mounted: function () {
        this.loadData();
    },
};
</script>
<style lang='less'>
    @import "../../assets/css/v2/banner.less";
</style>
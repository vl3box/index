<template>
    <div class="m-price m-sideblock">
        <div class="m-price-header m-sideblock-header">
            <i class="el-icon-s-marketing"></i
            ><span class="u-title">金价走势</span>
            <a href="/app/price" class="u-more">查看全部 &raquo;</a>
        </div>
        <div class="m-price-content">
            
        </div>
    </div>
</template>

<script>
// import { zone_dict } from "@jx3box/jx3box-data/data/server/server.json";
import { getServers } from "../service/spider";
export default {
    name: "price",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    mounted: function() {
        getServers().then((data) => {
            data.forEach((item) => {
                if (item.serverName == item.mainServer) {
                    this.data.push(item);
                    console.log(this)
                }
            });
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/price.less";
</style>

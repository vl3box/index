<template>
    <div class="m-servers m-sideblock">
        <div class="m-servers-header m-sideblock-header">
            <i class="el-icon-s-platform"></i
            ><span class="u-title">开服状态</span>
            <a href="/app/servers" class="u-more">查看全部 &raquo;</a>
        </div>
        <div class="m-servers-content">
            <div class="u-list" v-if="data.length">
                <div
                    class="u-item"
                    v-for="(item, i) in data"
                    :key="i"
                >
                    <span class="u-status" :class="{on:item.connectState}"></span>
                    <span class="u-name">{{item.serverName}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { zone_dict } from "@jx3box/jx3box-data/data/server/server.json";
import { getServers } from "../service/spider";
export default {
    name: "servers",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {},
    mounted: function() {
        // for (let key in zone_dict) {
        //     this.data[zone_dict[key]] = [];
        // }
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
@import "../assets/css/servers.less";
</style>

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
                    <span class="u-myserver" v-if="server == item.serverName"><i class="el-icon-star-on"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getServers } from "../service/spider";
export default {
    name: "servers",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {
        server: function() {
            if (this.$store.state.isLogin) {
                return this.$store.state.profile.server;
            } else {
                return "";
            }
        },
    },
    methods: {},
    mounted: function() {
        getServers().then((data) => {
            data.forEach((item) => {
                if (item.serverName == item.mainServer) {
                    this.data.push(item);
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

<template>
    <div class="m-servers m-sideblock">
        <div class="m-servers-header m-sideblock-header">
            <i class="el-icon-s-platform"></i
            ><a class="u-title" href="/app/servers" target="_blank">开服状态</a>
            <a
                href="/app/servers"
                class="u-more"
                title="查看更多"
                target="_blank"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <div class="m-servers-content">
            <div class="u-list" v-if="data.length">
                <div class="u-item" v-for="(item, i) in data" :key="i" v-show="!isOriginServer(item)">
                    <el-tooltip
                        class="item"
                        effect="dark"
                        :content="item.serverName"
                        placement="top"
                    >
                        <span
                            class="u-status"
                            :class="{ on: item.connectState }"
                        ></span>
                    </el-tooltip>

                    <span class="u-name">{{ item.serverName }}</span>
                    <!-- <span class="u-myserver" v-if="server == item.serverName"><i class="el-icon-star-on"></i></span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getServers } from "@/service/spider";
import servers from '@jx3box/jx3box-data/data/server/server_origin.json'
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
    methods: {
        isOriginServer : function (item){
            return servers.includes(item.serverName)
        }
    },
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

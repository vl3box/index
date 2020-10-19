<template>
    <div class="m-index-recruit m-sideblock">
        <div class="m-index-recruit-header m-sideblock-header">
            <h2 class="u-title">
                <i class="el-icon-data-analysis"></i> 团队招募
            </h2>
            <el-select
                class="u-server u-select"
                v-model="server"
                placeholder="选择服务器"
                size="mini"
                filterable
            >
                <el-option key="all" label="全部" value=""> </el-option>
                <el-option
                    v-for="item in servers"
                    :key="item"
                    :label="item"
                    :value="item"
                >
                </el-option>
            </el-select>
            <el-input
                class="u-name"
                v-model="name"
                placeholder="查找团队"
                size="mini"
                ><i
                    class="el-icon-search"
                    slot="append"
                    @click="loadData"
                ></i
            ></el-input>
            <a href="/team/#/org/setting" class="u-more" target="_blank" rel="noopener noreferrer"><i class="el-icon-edit"></i> 发布招募</a>
        </div>
        <div class="u-list" v-if="data && data.length">
            <a
                class="u-item"
                :href="'/team/#/org/view/' + item.ID"
                v-for="(item, i) in data"
                :key="i"
                target="_blank"
            >
                <span class="u-pic">
                    <img :src="item.logo | showLogo" />
                </span>
                <span class="u-name">
                    {{ item.name }}
                    <i class="u-status" v-if="item.status" title="已认证"
                        ><img svg-inline src="../assets/img/center/verify.svg"
                    /></i>
                    <span class="u-meta u-server">
                        <em>{{ item.server }}</em>
                    </span>
                </span>
                <span class="u-time">
                    <i class="el-icon-refresh"></i>
                    {{ item.updated_at | showTime }}
                </span>
                <span class="u-recruit">{{
                    item.recruit || item.desc
                }}</span>
            </a>
        </div>
        <a class="u-all" href="/team" target="_blank"><i class="el-icon-d-arrow-right"></i> 查看更多</a>
    </div>
</template>

<script>
import {
    authorLink,
    publishLink,
    showAvatar,
    resolveImagePath,
    getThumbnail
} from "@jx3box/jx3box-common/js/utils";
import { __ossMirror } from "@jx3box/jx3box-common/js/jx3box.json";
import lodash from "lodash";
import { showTime,showRecently } from "@/utils/moment.js";
import { getTeams } from "@/service/team.js";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
export default {
    name: "Team",
    props: [],
    data: function() {
        return {
            per: 10,
            page: 1,
            total: 1,
            pages: 1,
            data: [
                // {
                //     ID: 13,
                //     status: 1,
                //     super: 6314,
                //     admin: "",
                //     server: "服务器名",
                //     name: "团队名字",
                //     desc: "",
                //     logo: "",
                //     recruit: "招2个七秀",
                //     found: "",
                //     time: "",
                //     contact: "",
                //     tv: "",
                //     created_at: "2020-10-06T16:29:17+08:00",
                //     updated_at: "2020-10-06T16:29:17+08:00",
                //     deleted_at: "0001-01-01T00:00:00Z",
                // },
            ],
            loading: false,
            name: "",
            server: "",
            servers,
        };
    },
    computed: {
        params: function() {
            return {
                pageIndex: this.page,
                pageSize: this.per,
                recruit: 1,     //有招募的
                server: this.server,
                name: this.name,
            };
        },
    },
    methods: {
        loadData: function() {
            this.loading = true;
            getTeams(this.params)
                .then((res) => {
                    this.total = res.data.data.page.total;
                    this.pages = res.data.data.page.pageTotal;
                    this.data = res.data.data.list;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
    filters: {
        showTime: showRecently,
        showLogo: function (val){
            return getThumbnail(val,42,true)
        },
    },
    watch: {
        params: function(newparams) {
            this.loadData();
        },
    },
    mounted: function() {
        this.loadData();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/team.less";
</style>

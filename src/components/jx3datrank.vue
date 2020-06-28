<template>
    <div class="m-rank-jx3dat m-rank">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <span class="u-title">团控数据热榜</span>
            <a href="/jx3dat/#/rank" class="u-more">更多&raquo;</a>
        </div>
        <ul class="u-list">
            <li v-for="(item, j) in data" :key="j">
                <a class="u-link" :href="item.pid | postLink">
                    <span class="u-order" :class="highlight(j)">{{
                        j + 1
                    }}</span>
                    <span class="u-name"
                        >{{ item.author
                        }}<span v-if="item.v != '默认版'"
                            >#{{ item.v }}</span
                        ></span
                    >
                    <span class="u-per">
                        <em class="u-count">+ {{ item["7days"] }}</em>
                        <!-- <i
                        class="el-icon-top u-trending"
                        v-if="trending(item) > 0"
                        >{{ (trending(item) * 100).toFixed(2) + "%" }}</i
                    >
                    <i
                        class="el-icon-bottom u-trending"
                        v-if="trending(item) < 0"
                        >{{ (trending(item) * 100).toFixed(2) + "%" }}</i
                    >
                    <span
                        class="u-trending u-trending-keep"
                        v-if="trending(item) == 0"
                        >-</span
                    > -->
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getJx3datRank } from "../service/next";
export default {
    name: "jx3datrank",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {},
    methods: {
        highlight: function(i) {
            if (i == 0) {
                return "t1";
            } else if (i == 1) {
                return "t2";
            } else if (i == 2) {
                return "t3";
            }
        },
    },
    filters: {
        postLink: function(pid) {
            return "/jx3dat?pid=" + pid;
        },
    },
    created: function() {
        getJx3datRank(10).then((data) => {
            this.data = data.slice(0, 10);
        });
    },
    components: {},
};
</script>

<style lang="less">
// @import "../assets/css/rank.less";
</style>

<template>
    <div class="m-rank-exam m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <span class="u-title">题库试卷热榜</span>
            <a href="/exam/" class="u-more" title="查看更多"><i class="el-icon-more"></i></a>
        </div>
        <ul class="u-list">
            <li v-for="(item, i) in data" :key="i">
                <a class="u-link" :href="item.id | postLink" target="_blank">
                    <span class="u-order" :class="highlight(i)">{{
                        i + 1
                    }}</span>
                    <span class="u-name">{{ item.title }}</span>
                    <span class="u-per">
                        <em class="u-count">+ {{ views[i] }}</em>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getExamRank,getPaperList } from "../service/next";
export default {
    name: "examrank",
    props: [],
    data: function() {
        return {
            data: [],
            views : []
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
            return "/exam/#/paper/" + pid;
        },
    },
    created: function() {
        getExamRank().then((res) => {
            let result = res.data;
            let list = [];
            result.forEach((item) => {
                if (item.name.startsWith("paper")) {
                    let id = item.name.split("-").pop();
                    if(!isNaN(id) && item.status == 1) list.push(id);
                    this.views.push(item.value["7days"]);
                }
            });
            getPaperList(list.join(",")).then((res) => {
                this.data = res.data.data;
            });
        });
    },
    components: {},
};
</script>

<style lang="less">
// @import "../assets/css/rank.less";
</style>

<template>
    <div class="m-rank-macro m-rank">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <span class="u-title">云端宏热榜</span>
            <a href="/macro/#/rank" class="u-more">更多&raquo;</a>
        </div>
        <ul class="u-list">
            <li v-for="(item, j) in data" :key="j">
                <a class="u-link" :href="item.pid | postLink">
                    <span class="u-order" :class="highlight(j)">{{
                        j + 1
                    }}</span>
                    <span class="u-name">{{ item.author }}#{{ item.v }}</span>
                    <span class="u-per">
                        <em class="u-count">+ {{ item["7days"] }}</em>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getMacroRank } from "../service/next";
export default {
    name: "macrorank",
    props: [],
    data: function() {
        return {
            data : []
        };
    },
    computed: {},
    methods: {
        highlight : function (i){
            if(i == 0){
                return 't1'
            }else if(i == 1){
                return 't2'
            }else if(i == 2) {
                return 't3'
            }
        },
    },
    filters : {
        postLink : function (pid){
            return '/macro?pid=' + pid
        },
    },
    created: function() {
        getMacroRank(10).then((data) => {
            this.data = data.slice(0, 10);
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/rank.less";
</style>

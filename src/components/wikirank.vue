<template>
    <div class="m-rank-wiki m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <span class="u-title">百科词条热榜</span>
            <a href="/wiki" class="u-more" title="查看更多"><i class="el-icon-more"></i></a>
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
import { getWikiRank,getWikiList } from "@/service/wiki";
import highlight from '@/utils/highlight'
import { getLink } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "wikirank",
    props: [],
    data: function() {
        return {
            data : [],
            views : []
        };
    },
    computed: {},
    methods: {
        highlight,
    },
    filters : {
        postLink : function (pid){
            return getLink('wiki',pid)
        },
    },
    created: function() {
        getWikiRank().then((res) => {
            let result = res.data;
            let list = [];
            result.forEach((item) => {
                if (item.name.startsWith("wiki")) {
                    let id = item.name.split("-").pop();
                    list.push(id);
                    this.views.push(item.value["7days"]);
                }
            });
            return list.join(",")
        }).then((list) => {
            getWikiList(list).then((res) => {
                this.data = res.data.data.data;
            });
        })
    },
    components: {},
};
</script>

// <style lang="less">
// @import "../assets/css/rank.less";
// </style>

<template>
    <div class="m-rank-exam m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <a class="u-title" href="/exam" target="_blank">题库试卷热榜</a>
            <a href="/exam/" class="u-more" title="查看更多" target="_blank"><i class="el-icon-more"></i></a>
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
import { getExamRank,getPaperList } from "@/service/exam";
import highlight from '@/utils/highlight'
import { getLink } from "@jx3box/jx3box-common/js/utils";
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
        highlight,
    },
    filters: {
        postLink: function(pid) {
            return getLink('paper',pid)
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
            return list.join(",")
        }).then((list) => {
            getPaperList(list).then((res) => {
                this.data = res.data.data;
            });
        })
    },
    components: {},
};
</script>


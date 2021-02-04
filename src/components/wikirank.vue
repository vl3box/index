<template>
    <div class="m-rank-wiki m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <a class="u-title" href="/wiki" target="_blank">百科词条热榜</a>
            <a href="/wiki" class="u-more" title="查看更多" target="_blank"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <ul class="u-list">
            <li v-for="(item, i) in data" :key="i">
                <a class="u-link" :href="item.id | postLink" target="_blank">
                    <span class="u-order" :class="highlight(i)">{{
                        i + 1
                    }}</span>
                    <span class="u-name">{{ item.name }}</span>
                    <span class="u-per">
                        <em class="u-count">+ {{ item.views }}</em>
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getWikiList } from "@/service/wiki";
import { getStatRank } from "@jx3box/jx3box-common/js/stat";
import highlight from "@/utils/highlight";
import { getLink } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "wikirank",
    props: [],
    data: function() {
        return {
            data: [],
            views: [],
        };
    },
    computed: {},
    methods: {
        highlight,
    },
    filters: {
        postLink: function(pid) {
            return getLink("knowledge", pid);
        },
    },
    created: function() {
        getStatRank('knowledge')
            .then((res) => {
                let result = res.data;
                let list = [];
                result.forEach((item) => {
                    if (item.name.startsWith("knowledge")) {
                        let id = item.name.split("-").pop();
                        list.push(id);
                        this.views.push(item.value["7days"]);
                    }
                });
                return list//.join(",");
            })
            .then((list) => {
                getWikiList({
                    ids : list
                }).then((res) => {
                    let data = res.data.data.data;
                    data.forEach((item,i) => {
                        if(item){
                            item.views = this.views[i]
                            this.data.push(item)
                        }
                    })
                });
            });
    },
    components: {},
};
</script>

<template>
    <div class="m-rank-collection m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <a class="u-title" href="/collection" target="_blank"
                >剑三小册热榜</a
            >
            <a
                href="/collection"
                class="u-more"
                title="查看更多"
                target="_blank"
                ><i class="el-icon-more"></i
            ></a>
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
import { getStatRank } from "@jx3box/jx3box-common/js/stat.js";
import { getLink } from "@jx3box/jx3box-common/js/utils";
import { __imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import { getCollections } from "@/service/collection.js";
import highlight from '@/utils/highlight'
export default {
    name: "collectionrank",
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
        postLink: function(id) {
            return getLink("collection", id);
        },
    },
    created: function() {
        getStatRank("collection")
            .then((res) => {
                let result = res.data;
                let list = [];
                result.forEach((item) => {
                    let id = item.name;
                    if(id.includes('collection')){
                        list.push(id.slice('collection-'.length,id.length));
                        this.views.push(item.value["7days"]);
                    }
                });
                return list
            })
            .then((list) => {
                getCollections({ ids: list, limit: 10 }).then((res) => {
                    let data = []
                    res.data.data.data.forEach((item) => {
                        if(item){
                            data.push(item)
                        }
                    })
                    this.data = data
                });
            });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/rank.less";
</style>

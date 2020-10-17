<template>
    <div class="m-rank-cj m-rank m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-s-data"></i>
            <span class="u-title">热门成就榜</span>
            <a href="/cj" class="u-more" title="查看更多"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <ul class="u-list" v-if="data && data.length">
            <li v-for="(item, j) in data" :key="j">
                <a class="u-link" :href="item.link" target="_blank">
                    <img class="u-icon" :src="item.icon | showIcon">
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
import { getRank } from "../service/next";
import { getCjList } from "../service/cj";
import { getLink } from "@jx3box/jx3box-common/js/utils";
import {__iconPath} from '@jx3box/jx3box-common/js/jx3box.json'
export default {
    name: "cjrank",
    props: [],
    data: function() {
        return {
            data: [],
            achievements : []
        };
    },
    computed: {},
    methods: {},
    filters: {
        postLink: function(pid) {
            return getLink("cj", pid);
        },
        showIcon : function (iconid){
            let id = iconid || 'undefined'
            return __iconPath + 'icon/' + id + '.png'
        }
    },
    created: function() {
        getRank("cj").then((res) => {
            let list = res.data.slice(0, 10);
            let ids = []
            list.forEach((item) => {
                let id = item.name.split('-').pop()
                ids.push(id)
                this.data.push({
                    id : id,
                    views : item.value['30days'],
                    name : '-'
                })
            })
            return ids
        }).then((ids) => {
            getCjList(ids).then((res) => {
                this.achievements = res.data.data.achievements
                this.achievements.forEach((item,i) => {
                    this.data[i]['name'] = item.Name;
                    this.data[i]['icon'] = item.IconID;
                    this.data[i]['link'] = item.Link;
                })
            })
        })
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/rank.less";
</style>

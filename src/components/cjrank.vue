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
                <a class="u-link" :href="item.ID | postLink" target="_blank">
                    <img class="u-icon" :src="item.IconID | showIcon">
                    <span class="u-name">{{ item.Name }}</span>
                    <span class="u-per">
                        <em class="u-count">+ {{ item.rank }}</em>
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
            ranks: [],
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
            this.ranks = [];
            list.forEach((item) => {
                let id = item.name.split('-').pop()
                ids.push(id)
                this.ranks[id] = item.value['30days'];
            })
            return ids
        }).then((ids) => {
            getCjList({ids: ids, limit: ids.length}).then((res) => {
                let data = res.data;
                if (data.code === 200) {
                    data = data.data.achievements;

                    // 使用ID作为键值
                    let achievements = {};
                    for (let i in data) if(data[i]) achievements[data[i].ID] = data[i];

                    // 数据填充保持原有排序
                    let output = [];
                    for (let i in ids) {
                        let id = ids[i];
                        let achievement = achievements[id];
                        if (achievement) {
                            achievement.rank = this.ranks[id];
                            output.push(achievement);
                        } else {
                            console.log(`找不到成就${id}`);
                        }
                    }
                    this.data = output;
                }
            })
        })
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/rank.less";
</style>

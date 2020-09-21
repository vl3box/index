<template>
    <div class="m-gamenews m-sideblock">
        <div class="m-sideblock-header">
            <i class="el-icon-message-solid"></i
            ><span class="u-title">游戏更新</span>
            <a href="https://jx3.xoyo.com/allnews/" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部"><i class="el-icon-more"></i></a>
        </div>
        <ul class="m-sideblock-list u-list" v-if="data.length">
            <li v-for="(item,i) in data" :key="i">
                <em>{{item.time | dateFormat}}</em>
                <a
                    :href="item.url | linkFormat"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{item.title}}</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { getGameNews } from "../service/spider";
export default {
    name: "gamenews",
    props: [],
    data: function() {
        return {
            data : []
        };
    },
    computed: {},
    methods: {},
    filters:{
        dateFormat : function (val){
            return val.replace('/','-')
        },
        linkFormat : function (val){
            if(val.startsWith('/')){
                return 'https://jx3.xoyo.com' + val
            }else{
                return val
            }
        }
    },
    beforeCreate: function() {
        getGameNews().then((data) => {
            this.data = data.slice(0,5)
        })
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/gamenews.less";
</style>

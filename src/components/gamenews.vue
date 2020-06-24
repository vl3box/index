<template>
    <div class="m-navlist m-gamenews">
        <h2 class="u-title">
            <i class="el-icon-collection-tag"></i>游戏更新
            <a class="u-more" href="https://jx3.xoyo.com/allnews/" target="_blank" rel="noopener noreferrer">查看更多 &raquo;</a>
        </h2>
        <ul class="u-list" v-if="data.length">
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

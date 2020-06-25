<template>
    <div class="m-navlist m-notice">
        <h2 class="u-title"><i class="el-icon-message-solid"></i>更新动态</h2>
        <ul class="u-list" v-if="data.length">
            <li v-for="(item,i) in data" :key="i">
                <em>{{item.updated_at | simpledate}}</em>
                <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    :style="{color:item.color}"
                    >{{item.title}}</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { getNews } from "../service/index";
import {simpledate} from '../utils/simpledate'
export default {
    name: "notice",
    props: [],
    data: function() {
        return {
            data : []
        };
    },
    computed: {},
    methods: {},
    filters : {
        simpledate : function (val){
            return simpledate(val)            
        }
    },
    beforeCreate: function() {
        getNews('news',5).then((data) => {
            this.data = data
        })
    },
    components: {},
};
</script>

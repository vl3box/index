<template>
    <div class="m-sideblock m-notice">
        <div class="m-sideblock-header">
            <i class="el-icon-s-opportunity"></i
            ><span class="u-title">站内动态</span>
            <span class="u-more u-admin" v-if="isSuper">
                <a href="/admin" target="_blank" rel="noopener noreferrer">管理面板</a> | 
                <a href="https://os.jx3box.com/admin/user/login" target="_blank" rel="noopener noreferrer">百科审核</a>
            </span>
        </div>
        <ul class="m-sideblock-list u-list" v-if="data.length">
            <li v-for="(item, i) in data" :key="i">
                <em>{{ item.updated_at | simpledate }}</em>
                <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    :style="{ color: item.color }"
                    >{{ item.title }}</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { getNews } from "../service/index";
import { simpledate } from "../utils/simpledate";
import User from '@jx3box/jx3box-common/js/user'
export default {
    name: "notice",
    props: [],
    data: function() {
        return {
            data: [],
            isSuper : false
        };
    },
    computed: {},
    methods: {},
    filters: {
        simpledate: function(val) {
            return simpledate(val);
        },
    },
    beforeCreate: function() {
        getNews("news", 5).then((data) => {
            this.data = data;
        });
    },
    created : function (){
        this.isSuper = !!(User.getInfo().group > 60)  
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/notice.less";
</style>

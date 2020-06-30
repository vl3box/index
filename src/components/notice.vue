<template>
    <div class="m-sideblock m-notice">
        <div class="m-sideblock-header">
            <i class="el-icon-s-opportunity"></i
            ><span class="u-title">站内动态</span>
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
export default {
    name: "notice",
    props: [],
    data: function() {
        return {
            data: [],
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
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/notice.less";
</style>

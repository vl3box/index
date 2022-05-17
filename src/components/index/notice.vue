<template>
    <div class="m-sideblock m-notice">
        <div class="m-sideblock-header">
            <i class="el-icon-s-opportunity"></i>
            <span class="u-title">站内动态</span>
            <span class="u-more u-admin">
                <template v-if="isAdmin">
                    <a href="/admin" target="_blank" rel="noopener noreferrer">海报管理</a>
                    <span>|</span>
                    <a href="https://os.jx3box.com/admin/admin/login" target="_blank" rel="noopener noreferrer">后台管理</a>
                </template>
                <a v-else href="/bbs/#/notice" class="u-help">
                    <img svg-inline src="../../assets/img/right/feedback.svg" />
                </a>
            </span>
        </div>
        <ul class="m-sideblock-list u-list" v-if="data.length">
            <li v-for="(item, i) in data" :key="i">
                <em>{{ simpledate(item.post_modified) }}</em>
                <a :href="item.link" target="_blank" rel="noopener noreferrer" :style="{ color: item.color }" :class="{ isHighlight: !!item.color }">{{ item.post_title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { getPosts } from "@/service/index";
import { simpledate } from "@/utils/simpledate";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "notice",
    props: [],
    data: function () {
        return {
            data: [],
            isAdmin: User.isAdmin(),
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
    },
    methods: {
        simpledate: function (val) {
            return simpledate(val);
        },
    },
    created: function () {
        getPosts(this.client, "notice", 5,3).then((res) => {
            console.log(this.data);
            this.data = res.data.data.list;
        });
    },
    components: {},
};
</script>

<style lang="less">
    @import "../../assets/css/index/notice.less";
</style>

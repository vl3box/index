<template>
    <div class="m-v2-post m-sideblock">
        <div class="m-guide-header m-sideblock-header">
            <div class="u-left">
                <i class="u-icon el-icon-s-management"></i>
                <span class="u-title">最新讨论</span>
                <mini-bread class="u-bread" name="index_topics" />
            </div>
            <div class="u-right">
                <a :href="more_link" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部">
                    <i class="el-icon-more"></i>
                </a>
            </div>
        </div>
        <div class="m-v2-post-box">
            <div class="m-v2-post-header">
                <el-tabs v-model="category">
                    <el-tab-pane name="all">
                        <span slot="label">全部</span>
                    </el-tab-pane>
                    <el-tab-pane
                        :label="item.name"
                        :name="item.name"
                        v-for="(item, i) in categoryList"
                        :key="i"
                    ></el-tab-pane>
                </el-tabs>
            </div>
            <div class="m-v2-post-wrapper" v-loading="loading">
                <div class="m-v2-post-content">
                    <a
                        class="u-post"
                        v-for="(item, i) in data"
                        :key="i"
                        :href="getLink(appKey, item.id)"
                        :target="target"
                        v-reporter="{
                            data: {
                                href: reportLink(getLink(appKey, item.id)),
                                category: appKey,
                                aggregate: aggregate,
                            },
                            caller: 'index_lastest_artwork_click',
                        }"
                    >
                        <el-image
                            class="u-avatar"
                            :src="showPostAvatar(item)"
                            fit="cover"
                            :alt="item.author_info && item.author_info.display_name"
                        ></el-image>
                        <div class="u-info">
                            <i class="el-icon-collection-tag"></i>
                            <span class="u-type" target="_blank">{{ item.category }}</span>
                            ／
                            <span class="u-author" :href="authorLink(item.ext_user_info.id)" target="_blank">{{
                                (item.ext_user_info && item.ext_user_info.display_name) || "匿名"
                            }}</span>
                            <span class="u-date">
                                <i class="el-icon-refresh"></i>
                                {{ dateFormat(item.created_at) }}
                            </span>
                        </div>
                        <span class="u-title">
                            <i class="el-icon-reading"></i>
                            {{ item.title || "无标题" }}
                        </span>
                    </a>
                </div>
            </div>
            <div class="m-v2-post-more">
                <a
                    :href="more_link"
                    class="u-more"
                    v-reporter="{
                        data: {
                            href: report_link,
                        },
                        caller: 'index_lastest_artwork_more',
                    }"
                    >查看更多&raquo;</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { getTopicList, getTopicBucket } from "@/service/community";
import { buildTarget, authorLink, showAvatar, getLink } from "@jx3box/jx3box-common/js/utils";
import { showRecently } from "@/utils/moment";
import Mini_bread from "../content/mini_bread.vue";
export default {
    name: "community",
    props: [],
    data: function () {
        return {
            appKey: "community",
            data: [],
            categoryList: [],
            target: buildTarget(),
            category: "all",
            length: 7,
            loading: false,
            aggregate: [],
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        more_link: function () {
            return "/community";
        },
        report_link: function () {
            const prefix = this.client == "std" ? "www" : "origin";
            return `${prefix}:${this.more_link}`;
        },
    },
    methods: {
        // 获取分类
        getCategoryList() {
            getTopicBucket({ type: "community" }).then((res) => {
                this.categoryList = res.data.data;
            });
        },
        loadData: function () {
            this.loading = true;
            const category = this.category === "all" ? "" : this.category;
            getTopicList({
                category,
                pageSize: this.length,
            })
                .then((res) => {
                    this.data = res.data.data.list || [];
                    this.aggregate = this.data.map((item) => this.reportLink(getLink(this.appKey, item.id)));
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        dateFormat: function (val) {
            return showRecently(val);
        },
        showPostAvatar: function (item) {
            let val = item.ext_user_info && item.ext_user_info.avatar;
            return showAvatar(val);
        },
        reportLink(link) {
            const prefix = this.client == "std" ? "www" : "origin";
            return `${prefix}:${link}`;
        },
        getLink,
        authorLink,
    },
    watch: {
        category: function () {
            this.loadData();
        },
    },
    mounted: function () {
        this.getCategoryList();
        this.loadData();
    },
    components: {
        "mini-bread": Mini_bread,
    },
};
</script>

<style lang="less">
@import "../../assets/css/v2/posts.less";
</style>

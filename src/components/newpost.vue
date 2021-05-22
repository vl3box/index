<template>
    <div class="m-newpost m-sideblock">
        <div class="m-newpost-header m-sideblock-header">
            <el-tabs v-model="type" type="card">
                <el-tab-pane name="all">
                    <span slot="label">
                        <i class="el-icon-s-management"></i>最新作品
                    </span>
                </el-tab-pane>
                <el-tab-pane
                    :label="item.label"
                    :name="item.slug"
                    v-for="(item, i) in links"
                    :key="i"
                ></el-tab-pane>
            </el-tabs>
        </div>
        <div class="m-newpost-content" v-loading="loading">
            <a
                class="u-post"
                v-for="(item, i) in data"
                :key="i"
                :href="getLink(item.post_type,item.ID)"
                :target="target"
            >
                <el-image
                    class="u-avatar"
                    :src="item.author_info.user_avatar | showAvatar"
                    fit="cover"
                    :alt="item.author_info.display_name"
                ></el-image>
                <div class="u-info">
                    <i class="el-icon-collection-tag"></i>
                    <span
                        class="u-type"
                        target="_blank"
                    >{{ item.post_type | formatTypeName }}</span>
                    ／
                    <span
                        class="u-author"
                        :href="authorLink(item.post_author)"
                        target="_blank"
                    >{{ item.author_info.display_name }}</span>
                    <span class="u-date">
                        <i class="el-icon-refresh"></i>
                        {{ item.post_modified | dateFormat }}
                    </span>
                </div>
                <span class="u-title">
                    <i class="el-icon-reading"></i>
                    {{ item.post_title || "无标题" }}
                </span>
            </a>
        </div>
    </div>
</template>

<script>
import { getPosts } from "@/service/index";
import {
    buildTarget,
    authorLink,
    showAvatar,
    getThumbnail,
    getLink
} from "@jx3box/jx3box-common/js/utils";
import {
    __postType,
    default_avatar,
} from "@jx3box/jx3box-common/data/jx3box.json";
import { showRecently } from "../utils/moment";
export default {
    name: "newpost",
    props: [],
    data: function () {
        return {
            data: [],
            target: buildTarget(),
            type: "all",
            links: [
                {
                    label: "宏库",
                    slug: "macro",
                },
                {
                    label: "插件",
                    slug: "jx3dat",
                },
                {
                    label: "副本",
                    slug: "fb",
                },
                {
                    label: "职业",
                    slug: "bps",
                },
                {
                    label: "工具",
                    slug: "tool",
                },
                {
                    label: "茶馆",
                    slug: "bbs",
                },
            ],
            loading : false
        };
    },
    computed: {},
    methods: {
        loadData: function () {
            let type = this.type == 'all' ? '' : this.type
            this.loading = true
            getPosts(type).then((res) => {
                this.data = res.data.data.list;
            }).finally(() => {
                this.loading = false
            })
        },
        getLink,
        authorLink,
    },
    filters: {
        formatTypeName: function (type) {
            return __postType[type];
        },
        dateFormat: function (val) {
            return showRecently(val);
        },
        showAvatar: function (val) {
            let avatar = val || default_avatar;
            return getThumbnail(avatar, 24, true);
        },
    },
    watch: {
        type: function () {
            this.loadData();
        },
    },
    mounted: function () {
        this.loadData()
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/newpost.less";
</style>

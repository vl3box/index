<template>
    <div class="m-newpost m-sideblock">
        <div class="m-newpost-header m-sideblock-header">
            <i class="el-icon-s-management"></i>
            <span class="u-title">最新作品</span>
            <span class="u-links">
                <a
                    :href="'/' + item.slug"
                    target="_blank"
                    v-for="(item, i) in links"
                    :key="i"
                    >{{ item.label }}</a
                >
            </span>
            <a
                href="https://www.jx3box.com/dashboard/publish/#/"
                class="u-more"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="el-icon-edit"></i> 发布作品</a
            >
        </div>
        <div class="m-newpost-content">
            <a
                class="u-post"
                v-for="(item, i) in data"
                :key="i"
                :href="postLink(item.post.post_type, item.post.ID)"
                :target="target"
            >
                <img
                    class="u-avatar"
                    :src="item.author.avatar | showAvatar"
                    :alt="item.author.name"
                />
                <div class="u-info">
                    <i class="el-icon-collection-tag"></i>
                    <span
                        class="u-type"
                        :href="'/' + item.post.post_type"
                        target="_blank"
                        >{{ item.post.post_type | formatTypeName }}</span
                    >
                    ／
                    <span
                        class="u-author"
                        :href="authorLink(item.author.uid)"
                        target="_blank"
                    >
                        {{ item.author.name }}
                    </span>
                    <span class="u-date"
                        ><i class="el-icon-refresh"></i>
                        {{ item.post.post_modified | dateFormat }}</span
                    >
                </div>
                <span class="u-title">
                    <i class="el-icon-reading"></i>
                    {{ item.post.post_title || "无标题" }}</span
                >
            </a>
        </div>
    </div>
</template>

<script>
import { getPosts } from "../service/post";
import {
    postLink,
    buildTarget,
    authorLink,
    showAvatar,
    getThumbnail
} from "@jx3box/jx3box-common/js/utils";
import { __postType,default_avatar } from "@jx3box/jx3box-common/data/jx3box.json";
import { showRecently } from "../utils/moment";
export default {
    name: "newpost",
    props: [],
    data: function() {
        return {
            data: [],
            postLink,
            target: buildTarget(),
            authorLink,
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
                    label: "成就",
                    slug: "cj",
                },
                {
                    label: "物品",
                    slug: "item",
                },
                // {
                //     label: "任务",
                //     slug: "quest",
                // },
                {
                    label: "百科",
                    slug: "knowledge",
                },
                // {
                //     label: "家园",
                //     slug: "house",
                // },
                // {
                //     label: "捏脸",
                //     slug: "share",
                // },
                // {
                //     label : '表情',
                //     slug : 'emotion'
                // },
                {
                    label: "工具",
                    slug: "tool",
                },
                {
                    label: "茶馆",
                    slug: "bbs",
                },
            ],
        };
    },
    computed: {},
    methods: {},
    filters: {
        formatTypeName: function(type) {
            return __postType[type];
        },
        dateFormat: function(val) {
            return showRecently(val);
        },
        showAvatar : function (val){
            let avatar = val || default_avatar
            return getThumbnail(avatar,24,true)
        }
    },
    mounted: function() {
        getPosts().then((res) => {
            this.data = res.data.data.list;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/newpost.less";
</style>

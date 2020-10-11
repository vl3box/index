<template>
    <div class="m-newpost m-sideblock">
        <div class="m-newpost-header m-sideblock-header">
            <i class="el-icon-s-management"></i>
            <span class="u-title">最新作品</span>
            <a href="https://www.jx3box.com/dashboard/publish/#/" class="u-more" target="_blank" rel="noopener noreferrer"><i class="el-icon-edit"></i> 发布作品</a>
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
                    :src="showAvatar(item.author.avatar)"
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
                        ><i class="el-icon-refresh"></i> {{ item.post.post_modified | dateFormat }}</span
                    >
                </div>
                <span class="u-title">
                    <i class="el-icon-reading"></i>
                    {{ item.post.post_title || "无标题" }}</span
                >
                <!-- <div class="u-desc">
                    {{
                        item.post.post_excerpt ||
                            item.post.post_title ||
                            "作者很懒,什么也没有留下"
                    }}
                </div> -->
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
} from "@jx3box/jx3box-common/js/utils";
import { __postType } from "@jx3box/jx3box-common/js/jx3box.json";
import {showRecently} from "../utils/moment";
export default {
    name: "newpost",
    props: [],
    data: function() {
        return {
            data: [],
            postLink,
            target: buildTarget(),
            authorLink,
            showAvatar,
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
    },
    mounted: function() {
        getPosts(this).then((data) => {
            // console.log(data);
            this.data = data;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/newpost.less";
</style>

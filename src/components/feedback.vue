<!-- 反馈 -->
<template>
    <div class="m-feedback m-sideblock">
        <div class="m-feedback-header m-sideblock-header">
            <i class="el-icon-chat-dot-square">
            </i><a class="u-title">反馈交流</a>
            <a href="/bbs/#/forum/5" class="u-more" title="查看更多" target="_blank"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <div class="m-feedback-content">
            <el-input class="m-feedback-input" :rows="4" v-model="post.post_content" type="textarea"></el-input>
            <el-button class="m-feedback-btn" @click="publish" size="mini" :disabled="processing">提交</el-button>
        </div>
    </div>
</template>

<script>
import { push } from "@/service/cms.js";
import { getLink } from "@jx3box/jx3box-common/js/utils";
export default {
    name: 'feedback',
    data() {
        return {
            // 内容
            post: {
                // 文章ID
                ID: "",
                // 状态：publish公开、private私有、draft草稿、dustbin删除
                post_status: "publish",
                // 类型
                post_type: "bbs",

                // 标题
                post_title: "快速反馈",
                // 子类型：心法、副本名等
                post_subtype: "5",
                // 自定义字段
                post_meta: {},
                // 内容
                post_content: "",
                // 编辑模式(会影响文章详情页渲染规则)
                post_mode: "tinymce",

                // 是否原创
                original: 0,
                // 客户端：std正式服、origin怀旧服
                client: "std",
                // 语言：cn简体、tr繁体
                lang: "cn",
                // 资料片
                zlp: "",

                // 摘要
                post_excerpt: "",
                // 海报
                post_banner: "",
                // 小册
                post_collection: "",

                // 评论开关（0开启|默认，1关闭）
                comment: 0,

                // 阅读权限（0公开，1仅自己，2亲友，3密码，4付费，5粉丝）
                visible: 0,
            },
            processing: false
        }
    },
    methods: {
        // 发布
        publish: function () {
            if (!this.post.post_content) return
            this.processing = true;
            push(this.post)
                .then((res) => {
                    let result = res.data.data;
                    this.done(result);
                    this.post.post_content = '';
                })
                .finally(() => {
                    this.processing = false;
                });
        },
        done: function(result) {
            // 提醒
            this.$message({
                message: '反馈提交成功',
                type: 'success'
            });
            // 跳转
            setTimeout(() => {
                location.href = getLink(result.post_type, result.ID);
            }, 500);
        },
    }
}
</script>

<style lang="less">
@import "../assets/css/feedback.less";
</style>
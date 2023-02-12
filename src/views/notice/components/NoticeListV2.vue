<template>
    <div class="m-notice-box">
        <NoticeToolbar @update="update" />
        <div class="m-notice-list" v-loading="loading">
            <span>{{ data }}</span>
            <el-pagination
                class="m-archive-pages"
                background
                layout="prev, pager, next"
                :current-page.sync="page"
                :page-size="per"
                :total="total"
                :hide-on-single-page="true"
            ></el-pagination>
        </div>
    </div>
</template>
<script>
import User from "@jx3box/jx3box-common/js/user";
import { getPosts } from "@/service/cms";
import { getRelativeTime } from "@/utils/dateFormat";
import notice_types from "@/assets/data/notice_types.json";
export default {
    name: "NoticeList",
    props: [],
    components: {},
    data: function () {
        return {
            loading: false, //加载状态

            data: [], //数据列表
            page: 1, //当前页数
            total: 1, //总条目数
            pages: 1, //总页数
            per: 10, //每页条目

            search: "",
            client: this.$store.state.client, //版本选择
            isAdmin: false,
            notice_types,
            subtype: "",
        };
    },
    computed: {
        params: function () {
            let params = {
                per: this.per,
                page: ~~this.page || 1,
                sticky: 1,
                type: "notice",
            };
            let optionalParams = ["search", "client", "subtype"];
            optionalParams.forEach((item) => {
                if (this[item]) {
                    params[item] = this[item];
                }
            });
            return params;
        },
    },
    methods: {
        loadPosts: function () {
            this.loading = true;
            getPosts(this.params, this)
                .then((res) => {
                    this.data = res.data.data.list;
                    this.total = res.data.data.total;
                    this.pages = res.data.data.pages;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        update() {},
    },

    watch: {
        params: {
            deep: true,
            immediate: true,
            handler: function (val) {
                this.loadPosts();
            },
        },
    },
};
</script>

<style lang="less">
@import "../../../assets/css/notice/list.less";
</style>

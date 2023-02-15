<template>
    <div class="m-notice-content">
        <NoticeToolbar @update="update" />
        <div class="m-notice-box">
            <div class="m-notice-list" v-loading="loading">
                <div
                    class="u-list"
                    v-for="(item, i) in list"
                    :key="i"
                    :class="showIcons(item.post_subtype)"
                    @click="toDetail(item.ID)"
                >
                    {{ item.post_title }}
                </div>
            </div>
            <div class="p-notice-pagination">
                <el-pagination
                    class="m-pagination"
                    layout="pager"
                    :current-page.sync="page"
                    :page-size="per"
                    :total="total"
                    :hide-on-single-page="true"
                />
                <div class="m-jump">
                    <el-input v-model="index" class="u-input" size="mini"></el-input>
                    <span class="u-jump" @click="tuJump">跳转</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getPosts } from "@/service/cms";
import notice_types from "@/assets/data/notice_types.json";
import NoticeToolbar from "./NoticeToolbar.vue";
export default {
    name: "NoticeList",
    components: { NoticeToolbar },
    data: function () {
        return {
            loading: false, //加载状态

            list: [], //数据列表
            page: 1, //当前页数
            total: 1, //总条目数
            pages: 1, //总页数
            per: 10, //每页条目
            index: "", // 跳转页面

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
                    this.list = res.data.data.list;
                    this.total = res.data.data.total;
                    this.pages = res.data.data.pages;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        // 公告icon
        showIcons(i) {
            return i == 2 ? "post" : "up";
        },
        // 去详情页
        toDetail(id) {
            this.$router.push({ name: "single", params: { id } });
        },
        // 跳转
        tuJump() {
            const index = this.index.replace(/\D/g, "");
            let _index = index;
            if (index > this.pages) _index = this.pages;
            if (index < 1) _index = 1;
            this.page = ~~_index;
            this.index = "";
        },
        // 搜索
        update({ search, subtype }) {
            if (search) this.search = search;
            if (subtype) this.subtype = subtype;
        },
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
.m-notice-list {
    .flex;
    flex-direction: column;
    gap: 20px;
    .u-list {
        .pointer;
        .color(#282c31);
        .size(100%,42px);
        .lh(42px);
        .break(1);
        .r(20px);
        box-sizing: border-box;
        padding: 0 68px;
        letter-spacing: 1px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
        &.post {
            background: url("~@/assets/img/notice/post.svg") 10px -3px #fff no-repeat;
        }
        &.up {
            background: url("~@/assets/img/notice/up.svg") 10px -3px #fff no-repeat;
        }
        &:hover {
            background-color: #fff;
        }
    }
}
// 分页
.p-notice-pagination {
    .flex;
    gap: 10px;
    padding: 20px 0;
    justify-content: flex-end;
    .el-pager {
        .flex;
        gap: 10px;
        li {
            .size(42px);
            .r(100%);
            .lh(42px);
            background-color: #fff;
            color: #282c31;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
            &:hover,
            &.active {
                background-color: #282c31;
                color: #fff;
            }
        }
    }
    // 跳转
    .m-jump {
        .flex;
        .size(auto,42px);
        .r(20px);
        .lh(42px);
        align-items: center;
        padding: 0 12px;
        gap: 10px;
        background-color: #fff;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
        .u-input {
            .w(98px);
        }
        .u-jump {
            .r(20px);
            .fz(14px,28px);
            .h(28px);
            .pointer;
            .bold;
            color: #fff;
            padding: 0 12px;
            background-color: #282c31;
        }
        .el-input__inner {
            .r(20px);
            box-sizing: border-box;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
        }
    }
}
</style>

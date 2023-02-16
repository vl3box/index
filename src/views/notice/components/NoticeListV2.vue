<template>
    <div class="m-notice-content">
        <NoticeToolbar @update="update" />
        <div class="m-notice-box">
            <div class="m-notice-list" v-loading="loading">
                <div class="m-list" v-for="(item, i) in list" :key="i" @click="toDetail(item.ID)">
                    <img
                        class="u-icon"
                        svg-inline
                        src="../../../assets/img/notice/post.svg"
                        v-if="item.post_subtype == 2"
                    />
                    <img class="u-icon" svg-inline src="../../../assets/img/notice/up.svg" v-else />
                    <span class="u-title"> {{ item.post_title }}</span>
                </div>
            </div>
            <div class="p-notice-pagination" v-if="pages > 1">
                <el-pagination
                    class="m-pagination"
                    layout="pager"
                    :current-page.sync="page"
                    :page-size="per"
                    :total="total"
                    @current-change="changePage"
                    :hide-on-single-page="true"
                />
                <div class="m-jump">
                    <el-input
                        v-model="index"
                        type="number"
                        class="u-input"
                        size="mini"
                        @keyup.enter.native="toJump"
                    ></el-input>
                    <span class="u-jump" @click="toJump">跳转</span>
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
        // 去详情页
        toDetail(id) {
            this.$router.push({ name: "single", params: { id } });
        },
        changePage(i) {
            this.page = ~~i;
        },
        // 跳转
        toJump() {
            if (this.index > this.pages) this.index = this.pages;
            if (this.index < 1) this.index = 1;
            this.changePage(this.index);
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
    gap: 27px;
    .m-list {
        .pointer;
        .color(#282c31);
        .size(100%,43px);
        .lh(43px);
        .r(20px);
        position: relative;
        box-sizing: border-box;
        padding: 0 68px;
        letter-spacing: 1px;
        background-color: #fff;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);

        &:hover {
            color: #fff;
            background-color: #282c31;
            .u-icon path {
                fill: #fff;
            }
        }
        .u-title {
            .db;
            .break(1);
        }
        .u-icon {
            .pa;
            .lt(10px, -2px);
            path {
                fill: #282c31;
            }
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
.m-notice-content {
    .pt(84px + @header-height);
    .flex;
    flex-direction: column;
    gap: 24px;
}
</style>

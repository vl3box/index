<template>
    <div class="p-tv" @click="closeFilter">
        <Header :overlayEnable="true"></Header>
        <!-- 列表 -->
        <List :data="list" />
        <!-- 操作条 -->
        <Toolbar @update="update" />
        <!-- 盒子娘 -->
        <div class="m-jx3box">
            <img class="u-img" src="@/assets/img/tv/box2.png" alt="盒子娘" />
        </div>
        <!-- 底部 -->
        <Footer darkMode></Footer>
    </div>
</template>

<script>
import List from "./components/List.vue";
import Toolbar from "./components/Toolbar.vue";
import { resolveImagePath } from "@jx3box/jx3box-common/js/utils.js";
import { getHistoryHeadlines } from "@/service/cms";
import { __postType, __wikiType, __appType, __gameType } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "TV",
    components: { List, Toolbar },
    data: function () {
        return {
            list: [],
            source_type: "all",

            pageIndex: 1,
            pageSize: 10,
            total: 0,
            pages: 0,

            filter: false,
            jump: false,
            mark: false,
            index: "",

            loading: false,
        };
    },
    computed: {
        nav() {
            return {
                all: "全部",
                post: {
                    name: "常用",
                    list: { ...__postType },
                },
                wiki: {
                    name: "百科",
                    list: { ...__wikiType },
                },
                pvx: {
                    name: "PVX",
                    list: { ...__gameType },
                },
                app: {
                    name: "其他",
                    list: { ...__appType },
                },
            };
        },
        client() {
            return this.$store.state.client;
        },
        params() {
            const _params = {
                client: this.client,
                type: "slider",
                status: 0,
                per: this.pageSize,
                page: this.pageIndex,
            };
            if (this.source_type !== "all") _params.source_type = this.source_type;
            return _params;
        },
    },
    watch: {
        params: {
            deep: true,
            handler: function () {
                this.load();
            },
        },
    },
    methods: {
        load() {
            this.loading = true;
            getHistoryHeadlines(this.params)
                .then((res) => {
                    this.list = res.data.data.list || [];
                    this.total = res.data.data.total;
                    this.pages = res.data.data.pages;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        update() {},
        // 筛选
        change(i) {
            this.source_type = i;
            this.pageIndex = 1;
            this.filter = false;

            this.$refs["banner-list"].scrollTo(0, 0);
        },
        // element切换页面
        changePage(i) {
            this.pageIndex = i;

            this.$refs["banner-list"].scrollTo(0, 0);
        },
        // 跳转页面
        toJump() {
            const index = this.index.replace(/\D/g, "");
            let _index = index;
            if (index > this.pages) _index = this.pages;
            if (index < 1) _index = 1;
            this.changePage(~~_index);
            this.jump = false;
            this.index = "";
        },
        // 上下翻页
        turnPages(key) {
            let index = 1;
            if (key == "next") index = this.pageIndex < this.pages ? this.pageIndex + 1 : this.pages;
            if (key == "per") index = this.pageIndex > 1 ? this.pageIndex - 1 : 1;
            // console.log(key, index, this.pages);
            this.changePage(~~index);
        },
        open(key) {
            this[key] = !this[key];
            this.mark = true;
        },
        hide() {
            this.filter = false;
            this.jump = false;
        },
        resolveImagePath,
        closeFilter() {
            this.filter = false;
        },
    },
    mounted() {
        this.load();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/tv/index.less";
</style>

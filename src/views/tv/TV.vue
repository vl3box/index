<template>
    <div class="p-tv">
        <Header :overlayEnable="true"></Header>
        <div class="m-tv-main" v-loading="loading">
            <div class="m-tv-title"></div>
            <div class="m-tv-content">
                <!-- 头图列表 -->
                <div class="wp">
                    <template v-if="list && list.length">
                        <a :href="item.link" class="m-box" v-for="(item, i) in list" :key="i" target="_blank">
                            <el-image class="u-img" :src="item.img" fit="cover"></el-image>
                        </a>
                    </template>
                    <div class="m-no-list" v-else>~ 暂无对应头条 ~</div>
                </div>
                <!-- 盒子娘 -->
                <img src="@/assets/img/tv/box2.png" alt="盒子娘" class="m-jx3box" />
            </div>
            <!-- 筛选和跳转 -->
            <div class="m-tv-nav">
                <div class="m-nav-box">
                    <span class="u-label">筛选</span>
                    <span class="u-filter" @click="open('filter')">ALL全部</span>
                    <div class="m-nav-show" v-show="filter">
                        <div class="m-nav" v-for="(item, i) in nav" :key="i" :class="{ active: source_type == i }">
                            <template v-if="!item.list">
                                <span
                                    class="u-title u-all"
                                    @click="change(i)"
                                    :class="{ active: source_type == 'all' }"
                                >
                                    {{ item }}</span
                                >
                            </template>
                            <div class="m-nav-box" v-else>
                                <span class="u-title">{{ item.name }}</span>
                                <span
                                    v-for="(child, k) in item.list"
                                    :key="k"
                                    @click="change(k)"
                                    class="u-nav"
                                    :class="k == source_type ? 'active' : ''"
                                >
                                    {{ child }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-nav-box m-nav-pagination" v-show="list.length">
                    <span class="u-turn u-per" @click="turnPages('per')">上一页</span>
                    <span class="u-turn u-next" @click="turnPages('next')">下一页</span>
                    <span class="u-label u-jump" @click="open('jump')">页面跳转</span>
                    <el-pagination
                        class="m-tv-pagination"
                        :current-page="pageIndex"
                        :page-size.sync="pageSize"
                        @current-change="changePage"
                        :pager-count="9"
                        layout="pager"
                        :total="total"
                    >
                    </el-pagination>
                    <div class="m-nav-show m-nav-jump" v-show="jump">
                        <span class="u-label">跳转页数</span>
                        <el-pagination
                            class="m-tv-pagination"
                            :current-page="pageIndex"
                            :page-size.sync="pageSize"
                            @current-change="changePage"
                            :pager-count="5"
                            layout="pager"
                            :total="total"
                        >
                        </el-pagination>
                        <el-input v-model="index" size="mini" />
                        <span class="u-button" @click="toJump">确认</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer darkMode></Footer>
        <div class="m-mark" v-show="mark" @click="hide"></div>
    </div>
</template>

<script>
import { getHistoryHeadlines } from "@/service/cms";
import { __postType, __wikiType, __appType, __gameType } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "TV",
    props: [],
    components: {},
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
        // 筛选
        change(i) {
            this.source_type = i;
            this.pageIndex = 1;
            this.filter = false;
        },
        // element切换页面
        changePage(i) {
            this.pageIndex = i;
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
    },
    mounted() {
        this.load();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/tv/index.less";
</style>

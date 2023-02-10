<template>
    <div class="p-tv">
        <Header :overlayEnable="true"></Header>
        <div class="m-tv-main">
            <div class="m-tv-content">
                <div class="m-tv-nav">
                    <div class="m-nav-box">
                        <span
                            v-for="(item, i) in nav"
                            :key="i"
                            class="u-nav"
                            :class="{ active: source_type == i }"
                            @click="change(i)"
                        >
                            {{ item }}
                        </span>
                    </div>
                </div>
                <div class="wp">
                    <template v-if="list && list.length">
                        <a :href="item.link" class="m-box" v-for="(item, i) in list" :key="i" target="_blank">
                            <el-image class="u-img" :src="item.img" fit="cover"></el-image>
                        </a>
                    </template>
                    <div class="m-no-list" v-else>~ 暂无对应头条 ~</div>
                </div>
                <el-pagination
                    class="m-tv-pagination"
                    background
                    :hide-on-single-page="true"
                    :current-page="pageIndex"
                    :page-size.sync="pageSize"
                    @current-change="changePage"
                    layout="total, prev, pager, next, jumper"
                    :total="total"
                >
                </el-pagination>
                <img src="@/assets/img/tv/box.png" alt="盒子娘" class="m-jx3box" />
            </div>
        </div>
        <Footer darkMode></Footer>
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
        };
    },
    computed: {
        nav() {
            return {
                all: "全部",
                ...__postType,
                ...__wikiType,
                ...__appType,
                ...__gameType,
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
            getHistoryHeadlines(this.params).then((res) => {
                this.list = res.data.data.list || [];
                this.total = res.data.data.total;
            });
        },
        change(i) {
            this.source_type = i;
        },
        changePage(i) {
            this.pageIndex = i;
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

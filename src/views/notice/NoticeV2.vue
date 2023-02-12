<template>
    <div class="p-notice-v2" :class="theme_cls">
        <Header :overlayEnable="true"></Header>
        <div class="p-notice-container wp">
            <router-view></router-view>
        </div>
        <div class="p-notice-footer">
            <div class="wp">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
// import NoticeList from "@/views/notice/components/NoticeList.vue";
// import NoticeSingle from "@/views/notice/components/NoticeSingle.vue";
// 左侧
// import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Notice",
    props: [],
    components: {},
    data: function () {
        return {};
    },
    computed: {
        theme_cls() {
            return "";
        },
    },
    watch: {},
    methods: {},
    mounted() {},
};
</script>

<style lang="less">
@import "~@/assets/css/notice/index.less";
</style>

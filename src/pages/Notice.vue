<template>
    <div class="p-notice" :class="theme_cls">
        <Header :overlayEnable="true"></Header>
        <div class="p-notice-container">
            <NoticeSingle v-if="id"></NoticeSingle>
            <NoticeList v-else></NoticeList>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import { theme } from "../../setting.json";
import NoticeList from "@/views/NoticeList.vue";
import NoticeSingle from "@/views/NoticeSingle.vue";
export default {
    name: "Notice",
    props: [],
    components: {
        NoticeList,
        NoticeSingle,
    },
    data: function () {
        return {};
    },
    computed: {
        id: function () {
            let _list = location.pathname.split("/");
            if (_list.length > 2) {
                return ~~_list[2];
            }
            return false;
        },
        theme_cls: function () {
            return "theme-" + theme;
        },
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../assets/css/theme/kv.less";
@import "../assets/css/notice/common.less";
</style>
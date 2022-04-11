<template>
    <div class="p-notice" :class="theme_cls" :style="{backgroundImage:bg}">
        <Header :overlayEnable="true"></Header>
        <div class="p-notice-container wp">
            <NoticeSingle v-if="id"></NoticeSingle>
            <NoticeList v-else></NoticeList>
        </div>
        <div class="p-notice-footer">
            <div class="wp">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import { theme } from "../../setting.json";
import NoticeList from "@/views/NoticeList.vue";
import NoticeSingle from "@/views/NoticeSingle.vue";
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
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
        client : function (){
            return this.$store.state.client
        },
        theme_cls: function () {
            return "theme-" + theme[this.client];
        },
        bg : function (){
            return `url(${__imgPath}topic/${theme[this.client]}/kv.jpg)`
        }
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../assets/css/kv.less";
@import "../assets/css/notice/common.less";
</style>

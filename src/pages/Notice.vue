<template>
    <div class="c-notice">
        <NoticeSingle v-if="id"></NoticeSingle>
        <NoticeList v-else></NoticeList>
    </div>
</template>

<script>
import NoticeList from "@/views/NoticeList.vue";
import NoticeSingle from "@/views/NoticeSingle.vue";
export default {
    name: "Notice",
    props: [],
    components: {
        NoticeList,
        NoticeSingle
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
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style lang="less">
@import "../assets/css/notice/common.less";
</style>
<template>
    <div class="m-notice-list">公告列表</div>
</template>

<script>
export default {
    name: "NoticeList",
    props: [],
    inject: [],
    components: {},
    data: function () {
        return {};
    },
    computed: {},
    provide() {
        return {
            //父组件传递给子组件的全部
        };
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>


<style lang="less">
@import "../assets/css/notice/list.less";
</style>
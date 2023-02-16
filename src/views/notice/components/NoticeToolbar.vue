<template>
    <div class="m-notice-toolbar">
        <div class="m-buttons">
            <span
                class="u-button"
                v-for="(item, i) in buttons"
                :key="i"
                @click="change(item.value)"
                :class="[{ active: subtype == item.value }, item.key]"
            >
                {{ item.name }}
            </span>
        </div>
        <el-input class="u-search" v-model="search" placeholder="请输入关键词搜索" clearable></el-input>
    </div>
</template>
<script>
export default {
    name: "NoticeToolbar",
    data: function () {
        return {
            buttons: [
                // {
                //     name: "游戏资讯",
                //     key: "information",
                //     value: 1,
                // },
                {
                    name: "魔盒公告",
                    key: "notice",
                    value: 2,
                },
                {
                    name: "功能更新",
                    key: "update",
                    value: 3,
                },
                {
                    name: "兑换通知",
                    key: "message",
                    value: 4,
                },
            ],
            search: "",
            subtype: 2,
        };
    },
    computed: {
        params() {
            return {
                subtype: this.subtype,
                search: this.search,
            };
        },
    },
    watch: {
        params: {
            deep: true,
            handler: function (obj) {
                this.$emit("update", obj);
            },
        },
    },
    methods: {
        change(value) {
            this.subtype = value;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/notice/toolbar.less";
</style>

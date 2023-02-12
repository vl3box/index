<template>
    <div class="m-notice-toolbar">
        <div class="m-buttons">
            <span class="u-button" v-for="(item, i) in buttons" :key="i" @click="change(item.value)" :class="item.key">
                {{ item.name }}
            </span>
        </div>
        <el-input class="u-search" v-model="search" placeholder="请输入关键词搜索"></el-input>
    </div>
</template>
<script>
export default {
    name: "NoticeToolbar",
    data: function () {
        return {
            buttons: [
                {
                    name: "功能更新",
                    key: "update",
                    value: 3,
                },
                {
                    name: "魔盒公告",
                    key: "notice",
                    value: 2,
                },
                {
                    name: "兑换通知",
                    key: "message",
                    value: 4,
                },
            ],
            search: "",
            subtype: 0,
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
.m-notice-toolbar {
    .flex;
    justify-content: space-between;
    align-items: center;
    .m-buttons {
        .flex;
        gap: 10px;
        .u-button {
            .size(100%,42px);
            .lh(42px);
            .r(20px);
            .bold;
            .pointer;
            box-shadow: 0 0 8px #ddd;
            color: #fff;
            padding: 0 20px;
            letter-spacing: 2px;
            &.update {
                background-color: #c92888;
            }
            &.notice {
                background-color: #277ccc;
            }
            &.message {
                background-color: #fff;
                color: #888;
            }
        }
    }
    .u-search {
        .w(380px);
        .el-input__inner {
            .r(20px);
        }
    }
}
</style>

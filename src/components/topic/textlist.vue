<template>
    <div class="u-textlist">
        <cellbox class="u-item" v-for="(item, i) in list" :key="i">
            <a :href="item.link" target="_blank">{{ item.title }}</a>
            <span v-if="showTime">{{ item.time }}</span>
        </cellbox>
    </div>
</template>

<script>
import cellbox from "./cellbox.vue";
export default {
    name: "textlist",
    components: { cellbox },
    props: {
        urlParam: {
            type: String,
            default: "",
        },
        showTime: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            list: [],
        };
    },
    methods: {
        loadList: function () {
            this.list = [
                {
                    link: "",
                    title: "【工具】第一个新闻新闻新闻新新闻新闻新新闻新闻新新闻新闻新闻新闻新",
                    time: "2020-20-20",
                },
                {
                    link: "",
                    title: "【工具】第一个新闻新闻新闻新闻新闻新……",
                    time: "2020-20-20",
                },
                {
                    link: "",
                    title: "【工具】第一个新闻新闻新闻新闻新闻新……",
                    time: "2020-20-20",
                },
            ];
        },
    },
    watch: {
        urlParam: {
            immediate: true,
            handler: function () {
                this.loadList();
            },
        },
    },
};
</script>

<style lang="less" scoped>
.u-textlist {
}
</style>
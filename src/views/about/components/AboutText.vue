<template>
    <div class="m-about-text" :class="'m-about-' + type" v-loading="loading">
        <!-- <h1>{{ label }}</h1> -->
        <div class="m-about-meta">
            <a :href="'/notice/' + id" target="_blank" v-if="isSuperAdmin">编辑</a>
        </div>
        <div v-html="data"></div>
    </div>
</template>

<script>
import { getConfig, getArticle } from "@/service/about.js";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "AboutText",
    props: {
        customType: {
            type: String,
            default: "",
        },
    },
    data: function () {
        return {
            data: "",
            loading: false,
            id: 0,
            isSuperAdmin: User.isSuperAdmin(),
        };
    },
    computed: {
        type: function () {
            return this.customType || this.$route.path.split("/")[1];
        },
        // label: function () {
        //     return this.$route.meta.title;
        // },
    },
    methods: {
        loadData: function () {
            this.loading = true;
            this.data = "";
            getConfig(this.type)
                .then((id) => {
                    this.id = id;
                    id &&
                        getArticle(id).then((data) => {
                            this.data = data;
                        });
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
    watch: {
        type: {
            immediate: true,
            handler: function (type) {
                type && this.loadData();
            },
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/about/text.less";
</style>

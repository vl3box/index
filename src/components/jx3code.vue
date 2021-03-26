<template>
    <div class="m-jx3code m-sideblock" v-if="code">
        <div class="m-sideblock-header">
            <i class="el-icon-s-ticket"></i
            ><span class="u-title">今日福利</span>
        </div>
        <div class="m-jx3code-content">
            <div class="u-codebox">
                <div
                    class="u-code"
                    v-clipboard:copy="code"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    :style="{color:color}"
                >
                    {{ code }}
                </div>
                <div class="u-desc">{{ desc }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCode } from "@/service/cms";
export default {
    props: [],
    data: function() {
        return {
            code: "",
            desc: "",
            color:'#f98003',
        };
    },
    computed: {},
    methods: {
        onCopy: function(val) {
            this.$notify({
                title: "复制成功",
                message: "复制内容 : " + val.text,
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
    },
    created: function() {
        getCode().then((res) => {
            let data = res.data.data && res.data.data[0];
            this.code = data.title;
            this.desc = data.desc;
            this.color = data.color || '#f98003';
        });
    },
    components: {},
};
</script>
<style lang="less">
@import "../assets/css/jx3code.less";
</style>

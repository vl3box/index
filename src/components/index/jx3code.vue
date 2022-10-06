<template>
    <div class="m-jx3code m-sideblock" v-if="data && data.length">
        <div class="m-sideblock-header">
            <i class="el-icon-s-ticket"></i
            ><span class="u-title">今日福利</span>
        </div>
        <div class="m-jx3code-content">
            <div class="u-codebox" v-for="(item,i) in data" :key="i">
                <div
                    class="u-code"
                    v-clipboard:copy="item.title"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                    :style="{color:item.color || '#f98003'}"
                >
                    {{ item.title }}
                </div>
                <div class="u-desc">{{ item.desc }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCode } from "@/service/helper";
export default {
    props: [],
    data: function() {
        return {
            data : [],
        };
    },
    computed: {
        client : function (){
            return this.$store.state.client
        }
    },
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
        getCode(this.client).then((res) => {
            this.data = res.data.data;
        });
    },
    components: {},
};
</script>
<style lang="less">
@import "../../assets/css/index/jx3code.less";
</style>

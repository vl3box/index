<!-- 数据库版本的组件 -->
<template>
    <div class="m-database m-sideblock">
        <div class="m-database-header m-sideblock-header">
            <i class="el-icon-s-grid"></i><a class="u-title" href="/app/database" target="_blank">数据库版本</a>
            <a href="/app/database" class="u-more" title="访问数据库" target="_blank"><i class="el-icon-more"></i></a>
        </div>
        <div class="m-database-content">
            <div class="u-empty" v-if="version.length == 0">数据加载中...</div>
            <div class="u-list">
                <el-tooltip placement="top" v-for="_type in all_types" :key="_type" :enterable="true">
                    <div slot="content" class="m-database-content__popover">
                        <p v-for="data in version.filter((v) => v.type == _type)" :key="data.name">
                            <span class="u-detail-label">{{ data.label }}</span>&nbsp;&nbsp;
                            <span class="u-detail-time">更新于{{ showFromNowTime(data.time) }}</span>
                            <br />
                        </p>
                    </div>
                    <div class="u-item">
                        <span class="u-item-type">{{ _type }}</span>
                        <span class="u-item-time">{{ showDisplayTime(_type) }}</span>
                    </div>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
import { getDatabaseStat } from "@/service/node";
import { cloneDeep, uniq } from "lodash";
import { moment } from "@jx3box/jx3box-common/js/moment";
export default {
    name: "database",
    data: function () {
        return {
            count: {},
            version: [],
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        all_types: function () {
            return uniq(this.version.map((item) => item.type));
        },
    },
    methods: {
        showDisplayTime: function (type) {
            let time = this.version
                .filter((item) => item.type == type)
                .sort((a, b) => b.time.getTime() > a.time.getTime())[0].time;
            let display = moment(time).format("YYYY-MM-DD");
            return display;
        },
        showFromNowTime: function (time) {
            return moment(time).fromNow();
        },
    },
    mounted() {
        getDatabaseStat({ client: this.client }).then((res) => {
            let data = res.data;
            this.version = cloneDeep(data.version).map((item) => {
                item.time = new Date(item.time); //moment(item.time).format("YYYY-MM-DD");
                return item;
            }).sort((a, b) => a.label.length - b.label.length);
            delete data.version;
            this.$set(this, "count", data);
        });
    },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/index/database.less";
</style>

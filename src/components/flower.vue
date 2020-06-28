<template>
    <div class="m-flower m-sideblock">
        <div class="m-flower-header m-sideblock-header">
            <i class="u-icon">✿</i>
            <span class="u-title">实时花价</span>
            <el-select
                class="m-flower-select"
                v-model="current_server"
                filterable
                placeholder="选择服务器"
                size="mini"
                @change="changeServer"
            >
                <el-option
                    v-for="item in servers"
                    :key="item"
                    :label="item"
                    :value="item"
                >
                </el-option>
            </el-select>
            <a href="/house/#/flower" class="u-more" target="_blank">查看全部 &raquo;</a>
        </div>
        <div class="m-flower-content" v-if="data.length">
            <el-row :gutter="40">
                <el-col :span="12" class="u-flower" v-for="(item, i) in data" :key="i">
                    <span class="u-title">
                        <span class="u-name">{{ item.name }}</span>
                        <span class="u-icons">
                            <i
                                class="u-icon"
                                v-for="(icon, key) in types[item.name]"
                                :key="key"
                            >
                                <el-tooltip
                                    effect="dark"
                                    :content="icon.color"
                                    placement="top"
                                >
                                    <img
                                        :src="icon.icon | iconURL"
                                        :alt="icon.color"
                                    />
                                </el-tooltip>
                            </i>
                        </span>
                    </span>
                    <div class="u-desc">
                        <span class="u-line"
                            >当前最高分线 : <b>{{ item.line }}</b></span
                        >
                        <span class="u-price">价格 : {{ item.price }}园宅币</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>

<script>
import { getFlowerRank } from "../service/next";
import types from "../assets/data/flower.json";
import { __iconPath } from "@jx3box/jx3box-common/js/jx3box.json";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
export default {
    name: "flower",
    props: [],
    data: function() {
        return {
            data: [],
            types,
            current_server : '蝶恋花',
            servers
        };
    },
    computed: {
        server: function() {
            if (this.$store.state.isLogin) {
                return this.$store.state.profile.server;
            } else {
                return localStorage.getItem("flower_server") || "蝶恋花";
            }
        },
    },
    watch: {
        server: function(newdata) {
            this.current_server = newdata
            this.loadData(this.server);
        },
    },
    methods: {
        loadData: function(server) {
            if(server){
                getFlowerRank(server).then((data) => {
                    let list = [];
                    for (let name in types) {
                        list.push({
                            name,
                            line: data[name]["line"],
                            price: ~~data[name]["price"],
                        });
                    }
                    this.data = list;
                });
            }
        },
        changeServer : function (){
            this.loadData(this.current_server)
        }
    },
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
    },
    created: function() {
        this.loadData(this.server);
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/flower.less";
</style>

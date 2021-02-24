<template>
    <div class="m-flower m-sideblock">
        <div class="m-flower-header m-sideblock-header">
            <i class="u-icon">✿</i>
            <a class="u-title" href="/app/flower" target="_blank">实时花价</a>
            <a href="/app/flower" class="u-more" target="_blank"
                ><i class="el-icon-more"></i
            ></a>
        </div>
        <div class="m-flower-content m-flower-side">
            <!-- <a href="/tool/?pid=20274#/" target="_blank">❤️ 游戏内查询花价</a> | 
            <a href="/app/flower" target="_blank">网站查询</a> -->
            <a href="https://www.jx3box.com/tool/20274/"><img :src="flower_banner"></a>
        </div>
    </div>
</template>

<script>
import User from "@jx3box/jx3box-common/js/user";
import { getFlowerRank } from "../service/next";
import types from "../assets/data/flower.json";
import { __iconPath, __ossMirror,__imgPath } from "@jx3box/jx3box-common/js/jx3box.json";
import servers from "@jx3box/jx3box-data/data/server/flower_server.json";
// 繁體
import traditional_servers from "@jx3box/jx3box-data/data/server/server_international.json";
import dict from "@/assets/data/flower_dict.json";
import maps from "@/assets/data/flower_maps.json";
export default {
    name: "flower",
    props: [],
    data: function() {
        return {
            data: [],
            types,
            servers,
            isLogin: User.isLogin(),
            current_server: "",
            current_map: "广陵邑",
            flower_banner : __imgPath + 'image/index/flower.png'
        };
    },
    computed: {
        default_server: function() {
            return this.$store.state.server;
        },
        server: function() {
            if (this.isLogin) {
                return this.$store.state.server || "蝶恋花";
            } else {
                return localStorage.getItem("flower_server") || "蝶恋花";
            }
        },
        isTraditional: function() {
            return traditional_servers.includes(this.current_server);
        },
        maps: function() {
            if (this.isTraditional) {
                return maps["tr"];
            }
            return maps["cn"];
        },
        map: function() {
            return this.maps[0] || "广陵邑";
        },
    },
    watch: {
        server: function(newdata) {
            this.current_server = newdata;
        },
        current_server: function() {
            this.loadData();
        },
        map: function(newdata) {
            this.current_map = newdata;
        },
        current_map: function() {
            this.loadData();
        },
    },
    methods: {
        loadData: function() {
            getFlowerRank({
                server: this.current_server,
                map: this.current_map,
            }).then((data) => {
                if (this.isTraditional) {
                    data = this.transformData(data);
                }

                let list = [];
                for (let name in types) {
                    let lines = data[name]
                        ? data[name]["maxLine"]["length"] &&
                          data[name]["maxLine"].slice(0, 3)
                        : [];
                    lines.forEach((item, i) => {
                        lines[i] = item && item.replace(" 线", "");
                    });

                    let max = data[name] ? ~~data[name]["max"] : "-";
                    list.push({
                        name,
                        line: lines,
                        price: max,
                    });
                }
                this.data = list;
            });
        },
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
        transformData: function(data) {
            let _data = JSON.stringify(data);
            dict.tr.forEach((key, i) => {
                let re = new RegExp(key, "g");
                _data = _data.replace(re, dict.cn[i]);
            });
            return JSON.parse(_data);
        },
    },
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
    },
    mounted: function() {
        this.current_server = this.server;
        this.loadData();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/flower.less";
</style>

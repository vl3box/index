<template>
    <div class="m-box">
        <div class="m-sideblock-header">
            <i class="el-icon-box"></i>
            <span class="u-title">魔盒矩阵</span>
        </div>
        <draggable
            class="u-list"
            :class="{ isEditMode: !options.disabled }"
            element="ul"
            v-model="data"
            @change="update"
            :options="options"
        >
            <li
                v-for="(item, key) in data"
                :key="key"
                class="u-item-wrapper"
                :class="{
                    'u-lf': isLF(item.uuid),
                    hidden: !canSee(item.uuid),
                }"
            >
                <el-tooltip
                    class="item"
                    effect="dark"
                    :content="item.name"
                    :disabled="options.disabled"
                    placement="top"
                    :open-delay="50"
                >
                    <a
                        :href="!options.disabled ? '' : item.href"
                        :target="item.skip ? '_blank' : target"
                        class="u-item"
                        :class="{ 'u-doing': !item.status }"
                    >
                        <img
                            class="u-pic"
                            :src="item.img | getBoxIcon"
                            :class="{ hidden: !canSee(item.uuid) }"
                        />
                        <img
                            class="u-pic-hover"
                            svg-inline
                            :src="item.hover | getBoxIcon"
                        />
                        <span class="u-txt">
                            {{ showAbbr ? item.abbr : item.name }}
                        </span>
                        <i
                            v-if="item.hasMark"
                            class="u-mark"
                            :class="item.markcls"
                            >{{ item.mark }}</i
                        >
                        <span class="u-control">
                            <i
                                class="u-break el-icon-scissors"
                                title="换行"
                                :class="{ on: isLF(item.uuid) }"
                                @click.prevent="cut(item.uuid)"
                            ></i>
                            <i
                                class="u-hide el-icon-delete"
                                title="隐藏"
                                v-if="canSee(item.uuid)"
                                @click.prevent="hideIt(item.uuid)"
                            ></i>
                            <i
                                class="u-show el-icon-view"
                                title="显示"
                                v-if="!canSee(item.uuid)"
                                @click.prevent="showIt(item.uuid)"
                            ></i>
                        </span>
                        <i class="u-pop" v-if="isAdmin && pop[item.uuid]"></i>
                    </a>
                </el-tooltip>
            </li>
        </draggable>
        <div class="m-box-op">
            <el-button
                plain
                class="u-reset"
                size="mini"
                icon="el-icon-refresh-left"
                v-if="defined"
                @click="reset"
                >恢复默认</el-button
            >
            <el-button
                plain
                class="u-reset"
                size="mini"
                icon="el-icon-download"
                @click="downBoxSetting"
                v-if="isLogin"
                >重新同步</el-button
            >
            <el-button
                plain
                class="u-custom"
                size="mini"
                icon="el-icon-setting"
                @click="active"
                v-if="!!options.disabled"
                >自定义</el-button
            >
            <el-button
                plain
                class="u-custom"
                size="mini"
                icon="el-icon-check"
                @click="save"
                v-if="!options.disabled"
                >保存</el-button
            >
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import origin from "@jx3box/jx3box-data/data/box/box.json";
const KEY = "boxmatrix";
const default_data = [];
_.each(origin, (val, uuid) => {
    default_data.push(origin[uuid]);
});
const default_lf = ["database", "team", "j3pz"];
let default_order = [];
_.each(default_data, (item) => {
    default_order.push(item.uuid);
});
import { buildTarget } from "@jx3box/jx3box-common/js/utils";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import draggable from "vuedraggable";
import User from "@jx3box/jx3box-common/js/user";

import { getMeta, setMeta } from "@/service/user.js";
import { getWikiPnt } from "@/service/setting.js";

export default {
    name: "box",
    props: [],
    data: function() {
        return {
            origin: origin,
            data: default_data,
            order: [],
            lf: default_lf,
            hide: [],
            options: {
                disabled: true,
                animation: 150,
            },
            showAbbr: window.innerWidth < 370,
            isLogin: User.isLogin(),
            defined: false,
            isAdmin: User.isAdmin(),
            pop: {
                cj: false,
                knowledge: false,
                item: false,
            },
        };
    },
    computed: {
        target: function() {
            return buildTarget();
        },
        custom: function() {
            return {
                order: this.order,
                hide: this.hide,
                lf: this.lf,
            };
        },
        setting: function() {
            return JSON.stringify(this.custom);
        },
    },
    methods: {
        initData: function() {
            // 不管登录与否，默认都优先从本地获取配置
            this.getBoxSetting();
        },
        getBoxSetting: function() {
            let val = localStorage.getItem(KEY);
            if (val) {
                try {
                    let data = JSON.parse(val);
                    this.buildData(data);
                } catch (e) {
                    console.log("[getBoxSetting]本地设置数据解析异常", e);
                }
            }
        },
        downBoxSetting: function() {
            // 手动从服务器读取
            getMeta(KEY).then((res) => {
                let val = res.data.data.value;
                if (val) {
                    try {
                        let data = JSON.parse(val);
                        this.buildData(data);
                        localStorage.setItem(KEY, this.setting);

                        this.$notify({
                            title: "成功",
                            message: "远程数据同步至本地",
                            type: "success",
                        });
                    } catch (e) {
                        console.log("[downBoxSetting]远程设置数据解析异常", e);
                    }
                } else {
                    this.$notify({
                        title: "消息",
                        message: "服务器上没有保存相关设置",
                        type: "info",
                    });
                }
            });
        },
        buildData: function(data) {
            if (data["order"] && data["order"]["length"]) {
                this.defined = true;

                // 对比新旧的长度,补充新加项目
                if (data["order"]["length"] != default_order.length) {
                    let diff = _.difference(default_order, data["order"]);
                    this.order = data["order"].concat(diff);
                } else {
                    this.order = data["order"];
                }

                let custom_data = [];
                data["order"].forEach((uuid, i) => {
                    // 自动移除已经删除的项
                    if (this.origin[uuid]) {
                        custom_data.push(this.origin[uuid]);
                    }
                });
                this.data = custom_data;
            }
            if (data["hide"] && data["hide"]["length"]) {
                this.hide = data["hide"];
                this.defined = true;
            }
            if (data["lf"] && data["lf"]["length"]) {
                this.lf = data["lf"];
                this.defined = true;
            }
        },
        active: function() {
            this.options.disabled = false;
        },
        update: function(val) {
            let order = [];
            this.data.forEach((item, i) => {
                order.push(item.uuid);
            });
            this.order = order;
            this.defined = true;
        },
        save: function() {
            this.options.disabled = true;
            if (this.defined) {
                // 本地
                localStorage.setItem(KEY, this.setting);
                // 远程,如果是登录用户还需要远程保存
                if (this.isLogin) {
                    setMeta(KEY, this.setting);
                }
            }
        },
        reset: function() {
            this.$alert("确定重置为默认排序吗？", "消息", {
                confirmButtonText: "确定",
                callback: (action) => {
                    if (action == "confirm") {
                        // 当前
                        this.data = default_data;
                        this.order = [];
                        this.lf = default_lf;
                        this.hide = [];
                        this.defined = false;

                        // 本地
                        localStorage.removeItem(KEY);
                        // 远程,如果是登录用户还需要远程清空
                        if (this.isLogin) {
                            setMeta(KEY, "");
                        }

                        this.$forceUpdate();

                        this.$notify({
                            title: "成功",
                            message: "魔盒矩阵已重置为默认状态",
                            type: "success",
                        });
                    }
                },
            });
        },
        canSee: function(uuid) {
            return !this.hide.includes(uuid);
        },
        hideIt: function(uuid) {
            this.hide.push(uuid);
            this.defined = true;
        },
        showIt: function(uuid) {
            let i = this.hide.indexOf(uuid);
            this.hide.splice(i, 1);
            this.defined = true;
        },
        isLF: function(uuid) {
            return this.lf.includes(uuid);
        },
        cut: function(uuid) {
            if (this.isLF(uuid)) {
                let i = this.lf.indexOf(uuid);
                this.lf.splice(i, 1);
            } else {
                this.lf.push(uuid);
            }
            this.defined = true;
        },
        getPop: function() {
            getWikiPnt("knowledge").then((res) => {
                this.pop.knowledge = !!res.data.data.total;
            });
            getWikiPnt("achievement").then((res) => {
                this.pop.cj = !!res.data.data.total;
            });
            getWikiPnt("item").then((res) => {
                this.pop.item = !!res.data.data.total;
            });
        },
    },
    watch: {
        // order: {
        //     deep: true,
        //     handler: function(val) {
        //     },
        // },
    },
    mounted: function() {
        this.initData();
        if (this.isAdmin) this.getPop();
    },
    filters: {
        getBoxIcon: function(val) {
            return __imgPath + "image" + val;
        },
    },
    components: {
        draggable,
    },
};
</script>

<style lang="less">
@import "../assets/css/box.less";
</style>

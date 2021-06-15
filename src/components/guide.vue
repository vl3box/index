<template>
    <div class="m-guide m-sideblock">
        <div class="m-guide-header m-sideblock-header">
            <i class="el-icon-discover"></i>
            <span class="u-title">游戏指南</span>
            <a href="/bps" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部">
                <i class="el-icon-more"></i>
            </a>
        </div>
        <div class="m-guide-content">
            <el-row>
                <el-col :span="16">
                    <div class="u-guide-block u-guide-bps">
                        <!-- 110级 - 全门派指南 -->
                        <template v-if="menu_groups['guide-bps-kungfu']">
                            <h5 class="u-title">{{ menu_groups["guide-bps-kungfu"].label }}</h5>
                            <div class="u-list">
                                <a
                                    v-for="(menu, key) in menu_groups[
                                        'guide-bps-kungfu'
                                    ].menus"
                                    :key="key"
                                    :href="menu.link"
                                    target="_blank"
                                    v-html="menu.label"
                                ></a>
                            </div>
                        </template>

                        <!-- 特效武器大全 -->
                        <template v-if="menu_groups['guide-bps-weapon']">
                            <h5 class="u-title">{{ menu_groups["guide-bps-weapon"].label }}</h5>
                            <div class="u-list">
                                <a
                                    v-for="(menu, key) in menu_groups[
                                        'guide-bps-weapon'
                                    ].menus"
                                    :key="key"
                                    :href="menu.link"
                                    target="_blank"
                                    v-html="menu.label"
                                ></a>
                            </div>
                        </template>
                    </div>
                </el-col>
            </el-row>
            <!-- 通用 -->
            <template v-if="menu_groups['guide-other']">
                <h5 class="u-title">{{ menu_groups["guide-other"].label }}</h5>
                <div class="u-list">
                    <a
                        v-for="(menu, key) in menu_groups[
                                        'guide-other'
                                    ].menus"
                        :key="key"
                        :href="menu.link"
                        target="_blank"
                        v-html="menu.label"
                        :style="{color:menu.color}"
                    ></a>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { getMenuGroups } from "@/service/setting";

export default {
    name: "guide",
    props: [],
    data: function () {
        return {
            menu_groups: {},
        };
    },
    computed: {},
    methods: {},
    mounted() {
        getMenuGroups({
            names: [
                "guide-bps-kungfu",
                "guide-bps-weapon",
                "guide-other",
            ],
        }).then((res) => {
            let data = res.data;
            if (data.code === 200) {
                let output = {};
                for (let i in data.data.data) {
                    let group = data.data.data[i];
                    output[group.name] = group;
                }
                this.menu_groups = output;
            }
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/guide.less";
</style>

<template>
    <div class="m-guide m-sideblock">
        <div class="m-guide-header m-sideblock-header">
            <i class="el-icon-guide"></i>
            <span class="u-title">游戏指南</span>
        </div>
        <div class="m-guide-content">
            <el-row>
                <el-col :span="8">
                    <div class="u-guide-block u-guide-pve">
                        <h5 class="u-title">PVE</h5>
                        <div class="u-list">
                            <a href="/wiki/?pid=78#/" target="_blank">大战</a>
                            <a href="/wiki/?pid=86#/" target="_blank">武林通鉴</a>
                            <a href="/wiki/?pid=107#/" target="_blank">团队副本</a>
                            <a href="/wiki/?pid=79#/" target="_blank">茶馆</a>
                            <a href="/wiki/?pid=94#/" target="_blank">浪客行</a>
                            <a href="/fb/?pid=18336#/" target="_blank">浪客行血量表</a>
                            <a href="/wiki/?pid=82#/" target="_blank">勤修不辍</a>
                            <a href="/wiki/?pid=95#/" target="_blank">试炼之地</a>
                            <a href="/fb/?pid=13597#/" target="_blank">试炼之地血量表</a>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="u-guide-block u-guide-pve">
                        <h5 class="u-title">PVX</h5>
                        <div class="u-list">
                            <a href="/wiki/?pid=89#/" target="_blank">采草日常</a>
                            <a href="/wiki/?pid=83#/" target="_blank">寻龙</a>
                            <a href="/wiki/?pid=91#/" target="_blank">美人图</a>
                            
                            <a href="/wiki/?pid=88#/" target="_blank">公共任务</a>
                            <a href="/wiki/?pid=92#/" target="_blank">帮会钓鱼</a>
                            <a href="/wiki/?pid=100#/" target="_blank">江湖百态</a>

                            <a href="/wiki/?pid=81#/" target="_blank">挖宝</a>
                            <a href="/wiki/?pid=90#/" target="_blank">科举</a>
                            <a href="/wiki/?pid=80#/" target="_blank">园宅会</a>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="u-guide-block u-guide-pvp">
                        <h5 class="u-title">PVP</h5>
                        <div class="u-list">
                            <a href="/wiki/?pid=101#/" target="_blank">矿跑</a>
                            <a href="/wiki/?pid=103#/" target="_blank">战场</a>
                            <a href="/wiki/?pid=96#/" target="_blank">JJC<span>(竞技场)</span></a>
                            <a href="/wiki/?pid=97#/" target="_blank">吃鸡<span>(绝境战场)</span></a>
                            <a href="/wiki/?pid=104#/" target="_blank">JOJ<span>(列星虚境)</span></a>
                            <a href="/wiki/?pid=102#/" target="_blank">攻防</a>
                            <a href="/wiki/?pid=93#/" target="_blank">世界BOSS</a>
                            <a href="/wiki/?pid=105#/" target="_blank">帮会大跑商</a>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="16">
                    <div class="u-guide-block u-guide-bps">
                        <h5 class="u-title">门派指南</h5>
                        <div class="u-list">
                            <a href="/bps/?pid=18308#/" target="_blank">110属性变化探讨</a>
                            <a href="/bps/?pid=18327#/" target="_blank">110防御心法变化</a>
                            <a href="/bps/?pid=18030" target="_blank">110技能属性及变化</a>
                            <a href="/bps/?pid=5556" target="_blank">全职业属性/技能机制</a>
                            
                            <a href="/bps/?pid=18257#/" target="_blank">110 PVE输出配装</a>
                            <a href="/bps/?pid=7694#/" target="_blank">110气纯白皮书</a>
                            <a href="/bps/?pid=18374#/" target="_blank">110丐帮进阶攻略</a>
                            <a href="/bps/?pid=18375#/" target="_blank">110苍云输出指南</a>

                            <a href="">-</a>
                            <a href="">-</a>
                            <a href="">-</a>
                            <a href="">-</a>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="u-guide-block u-guide-other">
                        <h5 class="u-title">通用</h5>
                        <div class="u-list">

                            <a href="/bps/?pid=5443#/" target="_blank">坦克全知识点</a>
                            <a href="/bps/?pid=13980#/" target="_blank">仇恨系数表</a>
                            <a href="/bps/?pid=11744#/" target="_blank">全职业打断一览</a>
                            <a href="/bps/?pid=799#/" target="_blank">Buff类型一览</a>

                            <a href="/bps/?pid=12752#/" target="_blank">伤害精确算法</a>
                            <a href="/bps/?pid=14786#/" target="_blank">BOSS伤害精确算法</a>
                            <a href="/bps/?pid=7609#/" target="_blank">无视防御叠加</a>
                            <a href="/bps/?pid=14194#/" target="_blank">AOE减伤机制</a>

                            <a href="/wiki/?pid=108#/" target="_blank">宏指南<span>(小白必看)</span></a>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "guide",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/guide.less";
</style>

<template>
    <div class="m-box">
        <div class="m-sideblock-header">
            <i class="el-icon-box"></i>
            <span class="u-title">魔盒矩阵</span>
        </div>
        <ul class="u-list">
            <li>
                <a class="u-item" href="/macro" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/macro.svg"
                    />
                    <span class="u-txt">云端宏</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/jx3dat" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/jx3dat.svg"
                    />
                    <span class="u-txt">插件数据</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/fb" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/fb.svg"
                    />
                    <span class="u-txt">副本专栏</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/bps" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/bps.svg"
                    />
                    <span class="u-txt">职业专栏</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/cj" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/cj.svg"
                    />
                    <span class="u-txt">成就百科</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/item" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/item.svg"
                    />
                    <span class="u-txt">物品百科</span>
                    <!-- <i class="u-mark isbeta">BETA</i> -->
                </a>
            </li>
            <li>
                <a class="u-item" href="/house" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/house.svg"
                    />
                    <span class="u-txt">家园分享</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/share" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/face.svg"
                    />
                    <span class="u-txt">捏脸分享</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/tool" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/tool.svg"
                    />
                    <span class="u-txt">工具教程</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/bbs" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/bbs.svg"
                    />
                    <span class="u-txt">茶馆交流</span>
                </a>
            </li>
            <li>
                <a class="u-item u-doing" href="/emotion" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/pig.svg"
                    />
                    <span class="u-txt">沙雕表情</span>
                    <!-- <i class="u-mark isdoing">ING</i> -->
                </a>
            </li>
            <li>
                <a class="u-item" href="/wiki" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/wiki.svg"
                    />
                    <span class="u-txt">剑三百科</span>
                    <i class="u-mark isnew">NEW</i>
                </a>
            </li>


        <!-- </ul> -->
        <!-- <h2 class="u-title">
            <span class="u-title-label"
                ><i class="el-icon-box"></i> 应用矩阵</span
            >
        </h2>
        <ul class="u-list"> -->

            <li class="u-app-start">
                <a class="u-item" href="/app/database" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/database.svg"
                    />
                    <span class="u-txt">数据库</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/talent" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/talent.svg"
                    />
                    <span class="u-txt">奇穴模拟</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/icons" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/icons.svg"
                    />
                    <span class="u-txt">图标大全</span>
                    <!-- <i class="u-mark ishot">HOT</i> -->
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/macroeditor" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/macroeditor.svg"
                    />
                    <span class="u-txt">宏编辑器</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/servers" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/servers.svg"
                    />
                    <span class="u-txt">开服监控</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/price" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/price.svg"
                    />
                    <span class="u-txt">金价走势</span>
                </a>
            </li>
            <li>
                <a class="u-item u-doing" href="/shop" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/shop.svg"
                    />
                    <span class="u-txt">交易行</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/facedata" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/mirror.svg"
                    />
                    <span class="u-txt">妆容解析</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/furniture" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/furniture.svg"
                    />
                    <span class="u-txt">家具大全</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/flower" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/flower.svg"
                    />
                    <span class="u-txt">实时花价</span>
                    <i class="u-mark ishot">HOT</i>
                </a>
            </li>

            <li class="u-app-start">
                <a class="u-item" href="/fb/#/rank" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/trophy2.svg"
                    />
                    <span class="u-txt">百强排行</span>
                    <!-- <i class="u-mark ishot">HOT</i> -->
                </a>
            </li>
            <li>
                <a class="u-item" href="/fb/#/skill" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/skull.svg"
                    />
                    <span class="u-txt">副本数据</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/fb/#/drop" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/drop.svg"
                    />
                    <span class="u-txt">副本掉落</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/fb/#/gem" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/gem.svg"
                    />
                    <span class="u-txt">瑰石查询</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/dbm" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/jx3datbuilder.svg"
                    />
                    <span class="u-txt">数据构建</span>
                    <i class="u-mark isdoing">ING</i>
                </a>
            </li>
            <!-- <li>
                <a class="u-item u-doing" href="/app/flog" :target="target" title="即将上线">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/flog.svg"
                    />
                    <span class="u-txt">战斗分析</span>
                </a>
            </li> -->
            <li>
                <a class="u-item u-doing" href="/app/team" :target="target" title="即将上线">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/oa.svg"
                    />
                    <span class="u-txt">团队OA</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="/exam" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/100.svg"
                    />
                    <span class="u-txt">趣味题库</span>
                    <i class="u-mark isnew">NEW</i>
                </a>
            </li>
            <li>
                <a class="u-item" href="/app/translator" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/translator.svg"
                    />
                    <span class="u-txt">繁体转换</span>
                </a>
            </li>

            <li class="u-app-start">
                <a class="u-item" href="https://www.j3pz.com/" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/j3pz.svg"
                    />
                    <span class="u-txt">在线配装</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="https://www.j3pz.com/tools/haste/" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/speed.svg"
                    />
                    <span class="u-txt">急速阈值</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="http://minamistudio.online/jx3simulator/index.html" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/minami.svg"
                    />
                    <span class="u-txt">DPS模拟</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="http://j3dps.com/fightlog" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/flog.svg"
                    />
                    <span class="u-txt">战斗复盘</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="https://j3cx.com/exam/" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/keju.svg"
                    />
                    <span class="u-txt">科举题库</span>
                </a>
            </li>
            <li>
                <a class="u-item" href="https://j3cx.com/serendipity" :target="target">
                    <img
                        class="u-pic"
                        svg-inline
                        src="../assets/img/box/qiyu.svg"
                    />
                    <span class="u-txt">奇遇查询</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import {buildTarget} from '@jx3box/jx3box-common/js/utils'
export default {
    name: "box",
    props: [],
    data: function() {
        return {};
    },
    computed: {
        target : function (){
            return buildTarget()
        }
    },
    methods: {},
    mounted: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/box.less";
</style>

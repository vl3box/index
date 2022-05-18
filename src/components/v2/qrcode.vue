<!-- 反馈 -->
<template>
    <div class="m-qrcode m-sideblock">
        <div class="m-qrcode-header m-sideblock-header">
            <i class="el-icon-full-screen"> </i><a class="u-title">二维码矩阵</a>
        </div>
        <div class="m-qrcode-content">
            <div class="u-code" v-for="(item,index) in codes" :key="index">
                <span class="u-title"><img :src="item.svg" />{{item.name}}</span>
                <img :src="item.src" :alt="item.name">
            </div>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "qrcode",
    data() {
        return {
            codes: [
                {
                    name: "魔盒微博",
                    svg: `${__imgPath}image/connect/weibo.svg`,
                    src: `${__imgPath}image/other/weibo.jpg`,
                },
                {
                    name: "魔盒公众号",
                    svg: `${__imgPath}image/connect/wechat.svg`,
                    src: `${__imgPath}image/other/gzh.jpg`,
                },
            ],
        };
    },
    computed: {},
    methods: {},
    mounted: function () {},
};
</script>

<style lang="less" scoped>
    .m-qrcode-content {
        .flex;
        flex-wrap: wrap;
        .u-code {
            .flex;
            .size(50%);
            padding: 10px 20px 20px 20px;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            .u-title {
                .flex;
                align-items: center;
                .fz(14px,2.5);
                img {
                    .size(14px);
                    .mr(5px);
                }
            }
        }
    }
</style>

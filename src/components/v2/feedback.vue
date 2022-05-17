<!-- 反馈 -->
<template>
    <div class="m-feedback m-sideblock">
        <div class="m-feedback-header m-sideblock-header">
            <i class="el-icon-info">
            </i><a class="u-title">反馈建议</a>
        </div>
        <a class="m-nav-feedback" :href="feedback" target="_blank">
            <img :src="img" alt="盒子娘" />
            <span class="u-info">
                <b><i class="el-icon-message"></i> 反馈建议</b>
                <span>admin@jx3box.com</span>
            </span>
        </a>
    </div>
</template>

<script>
import { __imgPath, feedback } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "feedback",
    data() {
        return { feedback };
    },
    computed: {
        img() {
            return __imgPath + "image/other/hzn.png";
        },
    },
    methods: {},
    mounted: function () {},
};
</script>

<style lang="less" scoped>
    .m-nav-feedback {
        .flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;

        img {
            fill: #3d454d;
        }
        .u-info {
            .flex;
            flex-direction: column;
            padding: 0 30px;
            .fz(14px,2);
            color: #999;
            span {
                .fz(12px);
            }
        }
    }
</style>
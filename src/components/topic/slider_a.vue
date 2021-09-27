<template>
    <div class="m-topic-slider m-topic-slider-a" :style="{height:height}">
        <!-- 带文本切换slider -->
        <el-carousel
            :height="height"
            indicator-position="none"
            @change="changeImg"
            ref="elcarousel"
        >
            <el-carousel-item v-for="(item, i) in list" :key="i">
                <a class="u-img" :href="item.link" target="_blank">
                    <img :src="item.img | resolveImagePath" :alt="item.title" />
                </a>
            </el-carousel-item>
        </el-carousel>
        <div class="u-titles">
            <div
                class="u-title"
                v-for="(item, i) in list"
                :key="i"
                :class="i == index ? 'active' : ''"
                @click="checkImg(i)"
            >{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopicSliderA",
    props: ["data", "height"],
    components: {},
    data: function () {
        return {
            index: 0,
        };
    },
    computed: {
        list: function () {
            return this.data || [];
        },
    },
    methods: {
        changeImg: function (e) {
            this.index = e;
        },
        checkImg: function (index) {
            this.$refs.elcarousel.setActiveItem(index);
        },
    },
};
</script>

<style lang="less">
.m-topic-slider-a {
    .u-img {
        .db;
        .size(100%);
        overflow: hidden;
        img {
            .db;
        }
    }
    .pr;
    .u-titles {
        .w(100%);
        .pa;
        .lb(0);
        .z(20);
        .fz(18px);
        .lh(46px);
        .bold;
        display: flex;
        justify-content: space-between;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.6);
        user-select: none;
        cursor: pointer;

        .u-title {
            .nobreak;
            .w(20%);
        }

        transition: 0.2s ease-in-out;
        .active {
            background-color: #fff;
        }
    }
}
</style>
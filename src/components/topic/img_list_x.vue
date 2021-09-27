<template>
    <div class="m-topic-imglist m-topic-imglist-x" :style="{ 'grid-row-gap': `${gap}px` }">
        <!-- 横向排列图片组 -->
        <a class="u-img" :href="item.link" target="_blank" :key="item.id" v-for="item in list">
            <img :src="item.img | resolveImagePath" />
        </a>
    </div>
</template>

<script>
export default {
    name: "ImgListX",
    props: ["data", "gap"],
    components: {},
    computed: {
        list: function () {
            return this.data || [];
        },
    },
};
</script>

<style lang="less">
.m-topic-imglist-x {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .u-img {
        .db;
        img {
            .db;
            .size(100%);
        }
    }
}
</style>
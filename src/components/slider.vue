<template>
    <el-carousel :interval="5000" arrow="always" class="m-slider">
        <el-carousel-item v-for="(item,i) in data" :key="i">
            <a class="u-pic" :href="item.link" :style="{backgroundColor:item.bgcolor}"><img :src="item.img"></a>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: "slider",
    props: [],
    data: function() {
        return {
            data: [
                {
                    title: "标题",
                    desc: "描述",
                    author: "作者",
                    link: "https://v2.jx3box.com/bps/?pid=15318",
                    img: "https://console.cnyixun.com/2020/06/%E4%B8%83%E7%A7%80.jpg",
                    bgcolor:"#f67683"
                },
                {
                    title: "标题",
                    desc: "描述",
                    author: "作者",
                    link: "https://www.jx3box.com/tool/14671/",
                    img: "https://console.cnyixun.com/2020/06/56%E6%8E%A8%E6%A0%8F%E5%90%88%E4%BD%9C%E8%8A%B1%E4%BB%B7%EF%BC%88ffdb61%EF%BC%891.jpg",
                    bgcolor:"#ffdb61"
                },
            ],
        };
    },
    computed: {},
    methods: {},
    mounted: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/slider.less";
</style>
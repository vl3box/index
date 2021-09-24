<template>
    <cellbox class="m-topic-swiperbox">
        <slider :list="silderList"></slider>
        <cellbox dir="column" class="u-box-xl">
            <cellbox class="u-box-l">
                <a class="u-img-l u-pezhuang" href="" target="_blank"></a>
                <cellbox dir="column" class="u-box-m">
                    <a class="u-img-m u-jigai" href="" target="_blank"></a>
                    <cellbox class="u-box-s">
                        <a
                            class="u-img-s u-tuandui"
                            href=""
                            target="_blank"
                        ></a>
                        <a class="u-img-s u-fenxi" href="" target="_blank"></a>
                    </cellbox>
                </cellbox>
            </cellbox>
            <a class="u-img-xl u-baiqiang" href="" target="_blank"></a>
        </cellbox>
    </cellbox>
</template>


<script>
import slider from "./slider.vue";
import cellbox from "./cellbox.vue";
export default {
    name: "Swiperbox",
    props: [],
    components: {},
    data: function () {
        return {
            silderList: [
                {
                    link: "",
                    img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
                    title: "我是第一张的标题你看可以吗",
                },
                {
                    link: "",
                    img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
                    title: "我是第二张的标题",
                },
                {
                    link: "",
                    img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
                    title: "我是第三张的标题",
                },
                {
                    link: "",
                    img: "https://console.cnyixun.com/upload/post/2021/9/8/4011_8916025.png",
                    title: "我是第二四张的标题",
                },
                {
                    link: "",
                    img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
                    title: "我是第五张的标题",
                },
            ],
        };
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
    components: {
        slider,
        cellbox,
    },
};
</script>

<style lang="less">
@import "../../assets/css/topic/swiperbox.less";
</style>
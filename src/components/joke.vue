<template>
    <div class="m-joke">
        <h3 class="u-label"><img class="u-icon" :src="icon">今日骚话</h3>
        <div class="u-content">
            <el-carousel height="20px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="(item,i) in data" :key="i">
                    <a class="u-item" :href="getLink(item.id)" target="_blank">{{ item.content }}<span class="u-author">@{{item.author}}</span></a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
import {getLink} from '@jx3box/jx3box-common/js/utils'
export default {
    name: "joke",
    props: [],
    components: {},
    data: function () {
        return {
            data: [
                { id:1,content: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容", author: "名字", avatar: "头像" },
                { id:2,content: "内容", author: "名字", avatar: "头像" },
                { id:3,content: "内容", author: "名字", avatar: "头像" },
            ],
            icon : __imgPath + 'image/box/joke.svg'
        };
    },
    computed: {},
    methods: {
        getLink
    },
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style scoped lang="less">
@import "../assets/css/joke.less";
</style>
<template>
    <el-carousel :interval="5000" arrow="always" class="m-slider" v-if="data.length">
        <el-carousel-item v-for="(item,i) in data" :key="i">
            <a class="u-pic" :href="item.link" :style="{backgroundColor:item.bgcolor}" :target="target"><img :src="item.img"></a>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import {buildTarget,resolveImagePath} from '@jx3box/jx3box-common/js/utils'
import { getNews } from "../service/index";
export default {
    name: "slider",
    props: [],
    data: function() {
        return {
            data: [
            ],
        };
    },
    computed: {
        target : function (){
            return buildTarget()
        }
    },
    methods: {},
    beforeCreate: function() {
        getNews("slider",10).then((data) => {
            data.forEach((item) => {
                item.img = resolveImagePath(item.img)
            })
            this.data = data;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/slider.less";
</style>
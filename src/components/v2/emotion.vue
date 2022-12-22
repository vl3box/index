<template>
    <div class="emotion m-sideblock">
        <div class="emotion-header m-sideblock-header">
            <i class="el-icon-sugar"></i>
            <span class="u-title">推荐趣图</span>
            <a :href="more_link" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部">
                <i class="el-icon-more"></i>
            </a>
        </div>
        <div class="emotion-list">
            <a v-for="(item, index) in emotionsArr" :key="index" class="emotion-list__link"
                :href="`${more_link}/${item.ID}`">
                <img class="emotion-list__img" :src="item.url" alt="" />
            </a>
        </div>
        <div class="emotion-more">
            <a :href="more_link" class="u-more">查看更多&raquo;</a>
        </div>
    </div>
</template>

<script>
import { getEmotions } from "@/service/index";
export default {
    name: 'emotion',
    data() {
        return {
            more_link: '/emotion',
            emotionsArr: []
        }
    },
    methods: {
        add_list() {
            getEmotions().then(res => {
                this.emotionsArr = res.data.data
            })
        }
    },
    mounted() {
        this.add_list()
    }
}
</script>

<style lang="less">
@import "../../assets/css/v2/emotion.less";
</style>
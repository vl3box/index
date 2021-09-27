<template>
    <div class="m-topic-slider">
        <el-carousel
            height="480px"
            indicator-position="none"
            @change="changeImg"
            ref="elcarousel"
        >
            <el-carousel-item v-for="(item, i) in list" :key="i">
                <a class="u-img" :href="item.link" target="_blank"
                    ><img :src="item.img" :alt="item.title"
                /></a>
            </el-carousel-item>
        </el-carousel>
        <div class="u-slider-title">
            <div
                class="u-title"
                v-for="(item, i) in list"
                :key="i"
                :class="i == index ? 'active' : ''"
                @click="checkImg(i)"
            >
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
import { getTopic } from '@/service/topic'
export default {
    name: "TopicSlider",
    props: ['subtype', 'type'],
    components: {},
    data: function () {
        return {
            list: [],
            index: 0
        };
    },
    computed: {
        titleW: function () {
            const i = this.list.length;
            return 100 / i;
        },
    },
    methods: {
        changeImg: function (e) {
            this.index = e;
        },
        checkImg: function (index) {
            this.$refs.elcarousel.setActiveItem(index);
        },
        loadTopic: function() {
            getTopic({ type: this.type, subtype: this.subtype })
            .then(res => {
                this.list = res.data.data.list
            })
        }
    },
    mounted() {
        this.loadTopic()
    }
};
</script>

<style lang="less">
@import "../../assets/css/topic/top_slider.less";
</style>
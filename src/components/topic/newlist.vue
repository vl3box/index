<template>
    <div class="m-topic-list">
        <div class="u-title">
            <span
                v-for="(item, i) in tabs"
                :key="i"
                :class="[active === item.key ? 'active' : '', line ? 'u-line' : '']"
                :style="{ width: width / tabs.length + 'px' }"
                @click="changeTab(item)"
                >{{ item.name }}</span
            >
        </div>
        <div
            class="u-list"
            :style="{ width: width + 'px', height: height + 'px' }"
        >
            <textlist :urlParam="active" />
        </div>
    </div>
</template>



<script>
import cellbox from "./cellbox.vue";
import textlist from './textlist.vue'
export default {
    name: "newlist",
    props: ["tabs", "width", "height", "line", 'showTime'],
    data: function () {
        return {
            active: 'news',
        };
    },
    methods: {
        changeTab: function (item) {
            this.active = item.key;
        },
    },
    components: { textlist },
};
</script>

<style lang="less">
@import "../../assets/css/topic/sect.less";
</style>
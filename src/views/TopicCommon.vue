<template>
    <div class="m-topic-common">
        <div class="m-topic-main">
            <swiperbox class="u-swiperbox" />
            <cellbox dir="column" class="m-topic-sect">
                <cellbox class="u-tabbox">
                    <infotab />
                    <newlist />
                </cellbox>
                <sectmap />
            </cellbox>
        </div>
    </div>
</template>

<script>
import swiperbox from "@/components/topic/swiperbox.vue";
import newlist from "@/components/topic/newlist.vue";
import infotab from "@/components/topic/infotab.vue";
import Newlist from "@/components/topic/newlist.vue";
import cellbox from "@/components/topic/cellbox.vue";
import sectmap from "@/components/topic/sectmap.vue";
export default {
    name: "TopicCommon",
    props: [],
    components: {},
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
    components: {
        swiperbox,
        newlist,
        infotab,
        cellbox,
        sectmap,
    },
};
Newlist;
</script>

<style lang="less">
@import "../assets/css/topic/common.less";
</style>
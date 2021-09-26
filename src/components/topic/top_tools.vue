<template>
    <div class="m-top-tools" :style="{ columnGap: `${imgListX}px` }">
        <template v-for="item in list">
            <a class="u-img" :href="item.link" target="_blank" :key="item.id">
                <img :src="item.img" />
            </a>
        </template>
    </div>
</template>

<script>
import { getTopic } from '@/service/topic'
export default {
    name: 'top_tools',
    props: {
        type: {
            type: String,
            default: 'beitianyaozong'
        },
        subtype: {
            type: String,
            default: 'top_tools'
        },
        imgListX: {
            type: Number,
            default: 8
        }
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        loadTopic: function() {
            getTopic(this.type, { subtype: this.subtype })
            .then(res => {
                this.list = res.data.data.list
            })
        }
    },
    mounted() {
        this.loadTopic()
    }
}
</script>

<style lang="less">
@import '../../assets/css/topic/top_tools.less';
</style>
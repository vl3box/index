<template>
    <div class="m-tool-event">
        <template v-for="item in list">
            <a class="u-img" :style="{ width: `${width}px`, height: `${height}px` }" :href="item.link" target="_blank" :key="item.id">
                <img :src="item.img" />
            </a>
        </template>
    </div>
</template>

<script>
import { getTopic } from '@/service/topic'
export default {
    name: 'top_event',
    props: {
        type: {
            type: String,
            default: 'beitianyaozong'
        },
        subtype: {
            type: String,
            default: 'top_event'
        },
        width: {
            type: String,
            default: ''
        },
        height: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            list: []
        }
    },
    computed: {
        styleObj: function (){
            return {}
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
@import '../../assets/css/topic/top_event.less';
</style>
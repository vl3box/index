<template>
    <div class="u-infobox" :class="isRow ? 'row' : 'column'">
        <template v-for="(item, index) in list">
            <a :href="item.url" :key="index" class="u-infobox-item">
                <img :width="width" :height="height" :src="item.imgUrl" alt="">
            </a>
        </template>
    </div>
</template>

<script>
export default {
    name: 'imglist',
    props: {
        direction: {
            type: String,
            default: 'row'
        },
        urlParams: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '180px'
        },
        height: {
            type: String,
            default: '60px'
        }
    },
    data() {
        return {
            list: []
        }
    },
    computed: {
        isRow: function (){
            return this.direction === 'row'
        }
    },
    methods: {
        loadList: function (){
            this.list = [
                { name: "《药宗宏库》", link: "" },
                { name: "《药宗攻略》", link: "" },
                { name: "《输出精品》", link: "" },
                { name: "《治疗精品》", link: "" },
            ]
        }
    },
    mounted() {
        this.loadList()
    }
}
</script>

<style lang="less" scoped>
.u-infobox {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    
    &.row {
        flex-direction: row;
    }
    &.column {
        flex-direction: column;
    }
}
</style>
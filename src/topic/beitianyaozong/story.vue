<template>
    <div class="m-yaozong-story">
        <div class="u-item">
            <img :src="story" class="p-animation fadeInDown" />
            <img :src="storyText" class="p-animation fadeInRight" />
        </div>
        <span class="u-prev" @click="turn()" v-show="index > 1"></span>
        <span class="u-next" @click="turn(true)" v-show="index < len"></span>
    </div>
</template>

<script>
export default {
    name: "story",
    props: ['img_root'],
    components: {},
    data: function () {
        return {
            len : 5,
            index : 1,
        };
    },
    computed: {
        story() {
            return this.img_root + `story` + this.index + `.png`;
        },
        storyText() {
            return this.img_root + `story` + this.index + `-text.png`;
        },
    },
    watch: {},
    methods: {
        turn : function (direction){
            if(direction){
                this.index++
            }else{
                this.index--
            }
        }
    },
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>
<template>
    <div class="christmas" @click.stop>
        <img v-if="!show" :src="`${imgLink}/christmas/cover.jpg`" alt="圣诞节快乐">
        <span v-if="!show" @click="change" class="christmas-card__open"></span>
        <img v-if="show" @click="close" class="animation christmas-card__content" :class="show? 'flipInY' : ''"
            :src="`${imgLink}/christmas/${fontCount || 0}.png`" alt="圣诞节快乐">
    </div>
</template>
<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: 'christmas',
    props: ['fontCount'],
    computed: {
        imgLink() {
            return __imgPath + `topic/festival/`;
        },
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        change() {
            console.log(this.fontCount);
            this.show = true;
        },
        close() {
            this.$emit("close");
        },
    },
}
</script>

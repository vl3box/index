<template>
    <div class="christmas" @click.stop>
        <div class="christmas-card" @click="change">
            <img v-if="!show" class="christmas-card__img" :src="`${imgLink}/christmas/cover.jpg`" alt="圣诞节快乐">
            <img v-if="!show" class="christmas-card__open" :src="`${imgLink}/christmas/button.png`" alt="圣诞节快乐">
            <img v-if="show" @click.stop="close" class="animation christmas-card__content christmas-card__img"
                :class="show? 'flipInY' : ''" :src="`${imgLink}/christmas/${fontCount || 0}.png`" alt="圣诞节快乐">
        </div>

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

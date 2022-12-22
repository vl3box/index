<template>
    <div class="newYearsDay">
        <img v-if="!show" :src="`${imgLink}/newYearsDay/P1-BG.jpg`" alt="元旦节快乐">
        <img v-else :src="`${imgLink}/newYearsDay/p2-01.jpg`" alt="元旦节快乐">
        <img class="newYearsDay-card__click" v-if="!show" :src="`${imgLink}/newYearsDay/ClickButton-1.png`" alt="">
        <img class="newYearsDay-card__close" v-else :src="`${imgLink}/newYearsDay/CloseButton-1.png`" alt="">
    </div>
</template>
<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: 'newYearsDay',
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
}
</script>

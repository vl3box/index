<template>
    <div class="m-springFestival" :class="closeType ? 'u-card-close' : ''" @click.stop>
        <div class="u-springFestival-card" :class="show ? 'u-card-on' : 'u-card-off'" @click="change">
            <img class="u-card-bg" :src="`${imgLink}/springFestival/BG.jpg`" :alt="$t('新年快乐')" />
            <img class="u-card-cover" :src="`${imgLink}/springFestival/cover.png`" :alt="$t('新年快乐')" />
            <img class="u-card-button" :src="`${imgLink}/springFestival/button.png`" :alt="$t('新年快乐')" />
            <img class="u-card-content" :src="`${imgLink}/springFestival/${fontCount}.png`" :alt="$t('新年快乐')" />
        </div>
    </div>
</template>
<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "springFestival",
    props: ["fontCount"],
    computed: {
        imgLink() {
            return __imgPath + `topic/festival/`;
        },
    },
    data() {
        return {
            show: false,
            closeType: false,
        };
    },
    methods: {
        change() {
            if (this.show) {
                this.closeType = true;
                setTimeout(() => {
                    this.$emit("close");
                }, 1000);
            }
            this.show = !this.show;
        },
    },
};
</script>

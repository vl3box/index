<template>
    <div class="m-calendar-item" :class="slogan ? slogan.style : ''" :style="sloganStyle">
        <span
            class="u-date-text"
            :style="{ backgroundColor: isToday && themeColor, color: isToday && themeColor && '#fff' }"
            >{{ data.date }}</span
        >
        <div v-if="data.type === 'normal'" class="u-links">
            <!-- <div
                class="u-link"
                :class="linkClassName(item)"
                :style="{
                    color: item.bgcolor && '#fff',
                    //fontWeight: !item.bgcolor && item.color && 'bold',
                    backgroundImage: `url(${resolveImagePath(item.img)})`,
                    backgroundColor: item.bgcolor || 'rgba(255,255,255,0.6)',
                }"
                v-for="item in links"
                :key="item.id"
            >
                {{ item.title || item.desc }}
            </div> -->
            {{ slogan && slogan.title }}
        </div>
    </div>
</template>

<script>
import { resolveImagePath } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "calendar-item",
    props: {
        data: {
            type: Object,
            default: null,
        },
        slogans: {
            type: Array,
            default: () => [],
        },
        pageSlogan: {
            type: Object,
            default: () => {},
        },
        isToday: {
            type: Boolean,
        },
    },
    computed: {
        links() {
            const events = this.data?.children.filter((child) => child.type == 1);
            const activities = this.data?.children.filter((child) => child.type == 2);

            return [...events, ...activities].slice(0, 3);
        },
        slogan() {
            const { data } = this;
            return this.slogans.find((d) => d.year == data.year && d.month == data.month && d.date == data.date);
        },
        sloganStyle() {
            return {
                backgroundColor: this.slogan?.bgcolor,
                backgroundImage: `url(${resolveImagePath(this.slogan?.banner)})`,
            };
        },
        themeColor() {
            return this.pageSlogan?.color;
        },
    },
    methods: {
        linkClassName({ type }) {
            if (type === 1) {
                return "is-event";
            }
            return "is-activity";
        },
        resolveImagePath,
    },
};
</script>

<style lang="less">
@import "~@/assets/css/calendar/calendar_item.less";
</style>

<template>
    <div class="m-calendar">
        <div class="m-calendar-content">
            <a
                class="m-calendar-item"
                :class="{ current: isToday(item) }"
                v-for="(item, index) in data"
                :key="index"
                :href="`/calendar/archive/${item.year}/${item.month}/${item.date}`"
                target="_blank"
            >
                <div class="u-week">{{ item.week }}</div>
                <div class="u-date">{{ item.date }}</div>
            </a>
        </div>
        <div class="m-calendar-event">
            <template v-for="(item, index) in list">
                <calendar-item :key="index" :data="item"></calendar-item>
            </template>
        </div>
    </div>
</template>

<script>
import calendar_item from "./calendar_item.vue";
import { getRangeCalendar } from "@/service/cms.js";
import dayjs from "dayjs";
export default {
    name: "calendar",
    components: {
        "calendar-item": calendar_item,
    },
    data() {
        return {
            data: [],
            list: [],
            weeks: ["日", "一", "二", "三", "四", "五", "六"],
            current: {
                year: "",
                month: "",
                date: "",
            },
        };
    },
    computed: {
        dateRange() {
            let dataRange = [];

            for (let i = 0; i < 7; i++) {
                const date = dayjs().add(i, "day").format("YYYY-MM-DD");
                dataRange.push(date);
            }

            return dataRange;
        },
        params() {
            return {
                dateRange: this.dateRange.join(","),
                client: this.$store.state.client,
            };
        },
    },
    watch: {
        dateRange: {
            deep: true,
            immediate: true,
            handler(val) {
                this.initCalendar();
            },
        },
    },
    mounted() {
        const today = new Date();
        this.current = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            date: today.getDate(),
        };
    },
    methods: {
        initCalendar() {
            this.dateRange.forEach((date) => {
                const year = ~~date.split("-")[0];
                const month = ~~date.split("-")[1];
                const day = ~~date.split("-")[2];
                this.data.push({
                    year,
                    month,
                    date: day,
                    isToday: this.isToday({ year, month, date: day }),
                    week: "周" + this.weeks[new Date(year, month - 1, day).getDay()],
                    children: [],
                });
            });

            this.loadRangeCalendar();
        },
        loadRangeCalendar() {
            getRangeCalendar(this.params).then((res) => {
                const { data } = res.data;
                this.list = data || [];
                if (data) {
                    data?.forEach((item) => {
                        const index = this.data.findIndex(
                            (v) => v.year === item.year && v.month === item.month && v.date === item.date
                        );

                        index && this.data[index].children.push(item);
                    });
                }
            });
        },
        // 判断是否为今日
        isToday({ year, month, date }) {
            const dateObj = new Date();

            return dateObj.getFullYear() === year && dateObj.getMonth() + 1 === month && dateObj.getDate() === date;
        },
    },
};
</script>

<style lang="less" scoped>
.m-calendar {
    .mt(10px);
    &-content {
        display: flex;

        .m-calendar-item {
            flex: auto;
            text-align: center;
            font-size: 14px;
            color: #ccc;

            &.current {
                color: #3d454d;

                .u-date {
                    margin: 0 auto;
                    color: #fff;
                    background: #3d454d;
                    border-radius: 50%;
                    .size(20px);
                }
            }

            .u-week {
                .mb(5px);
            }
        }
    }
    &-event {
        .mt(10px);
    }
}
</style>

<template>
    <div class="m-celebrity-wrap">
        <el-divider content-position="left">名望 · 楚天社</el-divider>
        <div class="m-celebrity-content">
            <div class="u-table-header">
                <div class="u-row">
                    <div class="u-item">时间</div>
                    <div class="u-item">地点</div>
                    <div class="u-item">阶段</div>
                </div>
            </div>
            <div v-if="list.length" class="u-table-body">
                <el-tooltip v-for="(item, i) in list" :key="i" placement="top" popper-class="celebrity-notice-tooltip">
                    <div slot="content">
                        <div>{{ item.desc }}</div>
                    </div>
                    <div class="u-row" :class="!i && 'current-item'">
                        <div class="u-item">
                            <i v-if="!i" class="u-icon"></i>
                            <span>{{ item.timeFormat }}</span>
                        </div>
                        <div class="u-item">{{ item.map + "·" + item.site }}</div>
                        <div class="u-item">
                            <span
                                ><img :src="require(`@/assets/img/icon/minimap_${item.icon || 6}.png`)" />{{
                                    item.stage
                                }}</span
                            >
                        </div>
                    </div>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>
<script>
// import { getCelebrities } from "@/service/node";
import { getCelebrities } from "@/service/cms";
import dayjs from "@/utils/day";
export default {
    name: "celebrity",
    data: function () {
        return {
            loading: false,
            list: [],
            showNum: 3,
            celebrityList: [],
            currentDate: {
                h: dayjs.tz().hour(),
                m: dayjs.tz().minute(),
            },
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
    },
    methods: {
        loadData: function () {
            this.loading = true;
            return getCelebrities()
                .then((res) => {
                    const data = res.data?.data || [];
                    this.celebrityList = data.map((item) => {
                        item.icon = Number(item.icon);
                        item.time = Number(item.time);
                        return item;
                    });
                })
                .finally(() => {
                    this.getList(this.currentDate);
                    this.loading = false;
                })
                .catch(() => {
                    this.loading = false;
                });
        },
        toFormatTime(h, m) {
            if (h >= 24) {
                const day = Math.floor(h / 24);
                h = h - 24 * day;
            }
            const formatM = m.toString().padStart(2, "00");
            return `${h}:${formatM}`.padStart(5, "00:00");
        },
        getList(date) {
            const currentKey = "c" + (date.h % 2 === 0 ? "0" : "1") + (date.m < 30 ? "0" : "1");
            const isEqualMinute = this.celebrityList.findIndex((item) => {
                return item.key === currentKey && item.time === date.m;
            });
            let index = 0;
            if (isEqualMinute !== -1) {
                // 包含当前时间
                index = isEqualMinute;
            } else {
                // 不包含
                const nIndex = this.celebrityList.findIndex((item) => {
                    return item.key === currentKey && item.time > date.m;
                });
                if (nIndex === -1) {
                    // 当前key中最后一个
                    index = this.celebrityList.findLastIndex((item) => {
                        return item.key === currentKey;
                    });
                } else {
                    index = nIndex - 1;
                }
            }
            // 13: 57
            let list = this.celebrityList.slice(index, index + this.showNum);
            let newList = [];
            if (list.length < this.showNum) {
                newList = list.concat(this.celebrityList.slice(0, this.showNum - list.length));
            } else {
                newList = [].concat(list);
            }
            this.list = newList.map((item) => {
                // 当前时间
                let h = this.currentDate.h;
                // "双数整点 c00 双数半点 c01 单数整点 c10 单数半点 c11" "烂柯山 晟江 百溪 楚州"
                // 烂柯山 晟江/烂柯山 晟江 不变
                // 晟江 百溪/晟江 百溪 加1
                // 百溪 楚州/百溪 楚州 不变
                // 楚州 烂柯山/楚州 烂柯山 加1
                if (currentKey === "c01" && item.key === "c10") {
                    h = h + 1;
                }
                if (currentKey === "c11" && item.key === "c00") {
                    h = h + 1;
                }
                item.h = h;
                item.timeFormat = this.toFormatTime(h, item.time);
                return item;
            });
        },
    },
    watch: {
        currentDate: {
            immediate: true,
            deep: true,
            handler(date) {
                if (this.list.length) {
                    this.getList(date);
                }
            },
        },
    },
    created() {
        this.loadData();
    },
    mounted() {
        setInterval(() => {
            if (this.currentDate.h !== dayjs.tz().hour() || this.currentDate.m !== dayjs.tz().minute()) {
                this.currentDate = {
                    h: dayjs.tz().hour(),
                    m: dayjs.tz().minute(),
                };
            }
        }, 1000);
    },
};
</script>
<style lang="less">
@import "~@/assets/css/v4/world/celebrity.less";
</style>

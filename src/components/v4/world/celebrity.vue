<template>
    <div class="m-celebrity-wrap">
        <el-divider content-position="left">
            名望&nbsp;·&nbsp;
            <el-select v-model="type" @change="typeChange">
                <el-option v-for="type in types" :key="type.value" :label="type.label" :value="type.value"></el-option>
            </el-select>
        </el-divider>
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
                        <div class="u-item" v-if="type === '1'">
                            <template v-if="item.key === 'y8'"> 特殊事件 · </template>
                            {{ item.site }}
                        </div>
                        <div class="u-item" v-else>{{ item.map + "·" + item.site }}</div>
                        <div class="u-item">
                            <span><img :src="`${iconPath}/minimap_${item.icon}.png`" />{{ item.stage }}</span>
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
import { sortBy } from "@/utils/index";
const JX3BOX = require("@jx3box/jx3box-common/data/jx3box.json");
export default {
    name: "celebrity",
    data: function () {
        return {
            loading: false,
            list: [],
            showNum: 3,
            celebrityList: [],
            currentDate: {
                // h: dayjs.tz().hour(),
                // m: dayjs.tz().minute(),
                h: 18,
                m: 40,
            },
            type: "1",
            types: [
                {
                    label: "云从社",
                    value: "1",
                },
                {
                    label: "楚天社",
                    value: "0",
                },
            ],
            iconPath: JX3BOX.__imgPath + "pve/minimap",
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
    },
    methods: {
        typeChange(type) {
            this.type = type;
            this.loadData();
        },
        loadData() {
            this.loading = true;
            return getCelebrities({ type: this.type })
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
        // 处理楚天社
        getChu(date) {
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
        // 处理云从社
        getYun(date) {
            // 循环事件
            const circleList = this.celebrityList.filter((item) => item.key !== "y8");
            const currentKey = "y" + (date.h % 2 === 0 ? "0" : "1");
            const isEqualMinute = circleList.findIndex((item) => {
                return item.key === currentKey && item.time === date.m;
            });
            let index = 0;
            if (isEqualMinute !== -1) {
                // 包含当前时间
                index = isEqualMinute;
            } else {
                // 不包含
                const nIndex = circleList.findIndex((item) => {
                    return item.key === currentKey && item.time > date.m;
                });
                if (nIndex === -1) {
                    // 当前key中最后一个
                    index = circleList.findLastIndex((item) => {
                        return item.key === currentKey;
                    });
                } else {
                    index = nIndex - 1;
                }
            }
            let list = circleList.slice(index, index + this.showNum);
            let newList = [];
            if (list.length < this.showNum) {
                newList = list.concat(circleList.slice(0, this.showNum - list.length));
            } else {
                newList = [].concat(list);
            }

            // 8小时cd事件
            const y8List = this.celebrityList.filter((item) => item.key === "y8");
            const y8FormatList = [];
            for (let i = 0; i < 24; i += 8) {
                y8List.forEach((item) => {
                    y8FormatList.push({
                        ...item,
                        id: item.id + "" + item.hour + i,
                        timeFormat: `${item.hour + i < 24 ? item.hour + i : item.hour + i - 24}:${item.time}`,
                        h: item.hour + i < 24 ? item.hour + i : item.hour + i - 24,
                        m: item.time,
                    });
                });
            }
            const sortY8FormatList = y8FormatList.sort(sortBy("h", "m"));
            // 将要发生的最近的8小时CD事件
            const latelyY8 = sortY8FormatList
                .filter((item) => {
                    return item.h >= date.h;
                })
                .find((item) => item.h > date.h || item.m >= date.m);
            const circleFormatList = newList.map((item) => {
                // 当前时间
                let h = this.currentDate.h;
                if (currentKey !== item.key) {
                    h = h + 1;
                }
                item.h = h;
                item.timeFormat = this.toFormatTime(h, item.time);
                return item;
            });
            // 最近8小时事件在显示循环中的时间位置
            let y8InIndex = -1;
            if (latelyY8) {
                y8InIndex = newList
                    .filter((item) => item.h === latelyY8.h)
                    .findIndex((item) => {
                        return latelyY8.m > item.time;
                    });
            }
            console.log(sortY8FormatList);
            console.log(newList, latelyY8);
            if (y8InIndex !== -1) {
                circleFormatList.splice(y8InIndex, 1, latelyY8);
            }
            console.log(y8InIndex);
            this.list = circleFormatList;
        },
        getList(date) {
            if (this.type === "0") {
                this.getChu(date);
            } else {
                this.getYun(date);
            }
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
        // setInterval(() => {
        //     if (this.currentDate.h !== dayjs.tz().hour() || this.currentDate.m !== dayjs.tz().minute()) {
        //         this.currentDate = {
        //             h: dayjs.tz().hour(),
        //             m: dayjs.tz().minute(),
        //         };
        //     }
        // }, 1000);
    },
};
</script>
<style lang="less">
@import "~@/assets/css/v4/world/celebrity.less";
</style>

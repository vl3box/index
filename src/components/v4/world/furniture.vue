<template>
    <div class="m-world-block m-world-furniture">
        <el-divider content-position="left">园宅会赛</el-divider>
        <div class="u-title">本期</div>
        <div class="u-item">
            <div>加分属性</div>
            <div class="u-furniture">
                {{ furnitureProperty && furnitureProperty.content }}
            </div>
        </div>
        <div class="u-item">
            <div>评审分类</div>
            <div class="u-furniture">
                <a href="/furniture?match=1" target="_blank">{{
                    formatContent(furnitureCategory && furnitureCategory.content)
                }}</a>
            </div>
        </div>
        <div class="u-title">下期</div>
        <div class="u-item">
            <div>加分属性</div>
            <div class="u-furniture">
                {{ nextCategory }}
            </div>
        </div>
        <div class="u-item">
            <div>评审分类</div>
            <div class="u-furniture">
                <a href="/furniture?match=1" target="_blank">
                    {{ nextProperty }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);
import { getFurniture } from "@/service/spider";
export default {
    name: "furniture",
    props: {
        date: {
            type: String,
            default: dayjs().format("YYYY-MM-DD"),
        },
        client: {
            type: String,
            default: "std",
        },
    },
    data() {
        return {
            furniture: [],
        };
    },
    computed: {
        // 园宅会赛显示text
        furnitureCategory: function () {
            return this.furniture?.find((item) => item?.subtype === "category");
        },
        // 园宅会赛类型
        furnitureProperty: function () {
            return this.furniture?.find((item) => item?.subtype === "property");
        },
        furnitureNextMatch: function () {
            return this.furniture?.find((item) => item?.subtype === "next_match");
        },
        nextCategory: function () {
            const content = this.furnitureNextMatch?.content || "";
            let str = "";
            if (content) {
                str = content.split("\n")?.[0];
                if (str) {
                    str = str.split("：")?.[1];
                }
            }
            return str;
        },
        nextProperty: function () {
            const content = this.furnitureNextMatch?.content || "";
            let str = "";
            if (content) {
                str = content.split("\n")?.[1];
                if (str) {
                    str = str.split("：")?.[1];
                }
            }
            return str;
        },
    },
    watch: {
        date: {
            immediate: true,
            handler() {
                if (this.client === "std") this.loadFurniture();
            },
        },
    },
    methods: {
        // 园宅会赛
        setFurniture(res) {
            let data = res.data.data;

            try {
                this.furniture = data;
            } catch (e) {
                this.furniture = [];
            }
        },
        loadFurniture: function () {
            try {
                let furniture = sessionStorage.getItem("furniture");

                furniture = furniture && JSON.parse(furniture);

                if (furniture) {
                    this.setFurniture(furniture);
                } else {
                    const params = {
                        subtypes: "category,property,next_match",
                        start: dayjs().startOf("isoWeek").format("YYYY-MM-DD"),
                        end: dayjs().endOf("isoWeek").format("YYYY-MM-DD"),
                    };
                    getFurniture(params).then((res) => {
                        this.setFurniture(res);

                        // 当家园会赛数据不存在时，不存储
                        if (res.data?.data?.length && res.data.data.every((item) => item)) {
                            sessionStorage.setItem("furniture", JSON.stringify(res));
                        }
                    });
                }
            } catch (e) {
                console.error(e);
                this.furniture = [];
            }
        },
        nl2br(str) {
            return str ? this.formatContent(str.replace(/\\n|\n/g, "<br>")) : "";
        },
        formatContent(str) {
            return str ? str.replace("+", "") : "";
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/v4/world/furniture.less";
</style>

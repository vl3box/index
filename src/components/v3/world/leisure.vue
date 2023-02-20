<template>
    <div class="m-world-leisure">
        <div class="m-leisure-content">
            <table>
                <thead>
                    <tr>
                        <th>活动</th>
                        <th>区服</th>
                        <th>项目</th>
                    </tr>
                </thead>
                <tbody>
                    <lucky-pet :date="date" :client="client"></lucky-pet>
                    <furniture v-if="isCurrentWeek" :date="date" :client="client"></furniture>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import luckyPet from "./lucky_pet";
import furniture from "./furniture";
dayjs.extend(isoWeek);
export default {
    name: "Leisure",
    components: {
        luckyPet,
        furniture,
    },
    data: function () {
        return {};
    },
    computed: {
        date() {
            // 当7点以前，请求前面一天的日常 当7~24点，请求当天的日常
            const hour = dayjs().get("hours");
            return 0 <= hour && hour < 7
                ? dayjs().subtract(1, "day").format("YYYY-MM-DD")
                : dayjs().format("YYYY-MM-DD");
        },
        client() {
            return this.$store.state.client;
        },
        isCurrentWeek() {
            let week = dayjs(this.date).isoWeek();
            let currentWeek = dayjs().isoWeek();
            return week === currentWeek;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/v3/world/leisure.less";
</style>

<template>
    <div class="m-daily m-sideblock">
        <!-- <div class="m-daily-header">
            <div class="u-month"><span>{{month}}</span><span>月</span></div>
            <div class="u-date">{{date}}</div>
        </div> -->
        <!-- <div class="m-daily-header m-sideblock-header">
            <i class="el-icon-s-order"></i
            ><span class="u-title">今日日常</span>
        </div>
        <div class="m-daily-content">
            <el-row>
                <el-col :span="8"
                    ><div class="u-block">
                        <h2 class="u-title u-pve">PVE</h2>
                        <ul>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                        </ul>
                    </div></el-col
                >
                <el-col :span="8"
                    ><div class="u-block">
                        <h2 class="u-title u-pvp">PVP</h2>
                        <ul>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                        </ul>
                    </div></el-col
                >
                <el-col :span="8"
                    ><div class="u-block">
                        <h2 class="u-title u-pvx">其它</h2>
                        <ul>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                        </ul>
                    </div></el-col
                >
            </el-row>
            <p class="u-tip">♥ 愿等一接口,白首不相离</p>
        </div> -->
    </div>
</template>

<script>
const number_map = {
    "1":"一",
    "2":"二",
    "3":"三",
    "4":"四",
    "5":"五",
    "6":"六",
    "7":"七",
    "8":"八",
    "9":"九",
    "10":"十",
    "11":"十一",
    "12":"十二",
}
export default {
    name: "daily",
    props: [],
    data: function() {
        return {
            month : '',
            date : ''
        };
    },
    computed: {
    },
    methods: {},
    created: function() {
        let dt = new Date()
        this.month = number_map[dt.getMonth() + 1]
        this.date = dt.getDate()
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/daily.less";
</style>

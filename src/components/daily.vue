<template>
    <div class="m-daily">
        <div class="m-daily-header">
            <div class="u-month"><span>六</span><span>月</span></div>
            <div class="u-date">26</div>
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
        </div>
    </div>
</template>

<script>
export default {
    name: "daily",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {},
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/daily.less";
</style>

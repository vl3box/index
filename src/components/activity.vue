<template>
    <div class="m-activity">
        <el-carousel
            trigger="click"
            height="60px"
            indicator-position="none"
            :interval="6000"
        >
            <el-carousel-item v-for="item in 4" :key="item">
                <a
                    class="u-feedback"
                    href="https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=o8LHzsrN48nbkMHM243AzM4"
                    ><img src="../assets/img/left/feedback.png" alt=""
                /></a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name : 'activity',
        props:[],
        data : function(){
            return {
                
            }
        },
        computed:{},
        methods:{},
        mounted:function(){},
        components : {
        }
    }
</script>

<style lang="less">
@import "../assets/css/activity.less";
</style>

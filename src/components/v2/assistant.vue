<template>
    <div class="m-welcome" :style="{ backgroundImage: bg }">
        <div class="m-assistant">
            <div class="u-assistant">
                <a href="/tool/39410" target="_blank" class="u-btn button button-3d button-primary button-rounded"
                    ><i class="el-icon-download"></i>魔盒助手</a
                >
                <span class="u-label">{{ label }}</span>
            </div>
        </div>
        <calendar></calendar>
    </div>
</template>

<script>
import calendar from "@/components/v2/calendar.vue";
import { theme } from "../../../setting.json";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getEventV2,getDecoration} from "@/service/cms.js";
import { getBreadcrumb } from "@jx3box/jx3box-common/js/api_misc";
import { resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "assistant",
    components: {
        calendar,
    },
    data: function () {
        return {
            label: "",
            link: "",
            bg: "",
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        theme: function () {
            return theme[this.client];
        },
    },

    methods: {
        loadData: function () {
            return getBreadcrumb("index_jba").then((data) => {
                this.label = data;
            });
        },
        loadBackGround: function () {
            getEventV2({
                type: "common",
                subtype: "jba",
                status: 1,
                client: this.client,
            }).then((res) => {
                const url = resolveImagePath(res.data.data.list[0]?.img);
                if (url){
                    this.bg = `url(${url})`;
                }else{
                    if(User.isLogin()){
                        this.getDecoration()
                    }else{
                        this.setDefaultCalendar()
                    }
                }
            });
        },
        showDecoration:function(val,type){
            return __imgPath + `decoration/images/${val}/${type}.png`;
        },
        setDefaultCalendar(){
            this.bg=`url(https://img.jx3box.com/decoration/images/0_TESTSAMPLE/calendar.png)`
        },
        getDecoration(){
            let decoration_calendar=sessionStorage.getItem('decoration_calendar')
            if(decoration_calendar == 'no'){
                this.setDefaultCalendar()
                return;
            }
            //已有缓存，读取解析
            if(decoration_calendar){
                this.setDecoration(JSON.parse(decoration_calendar))
                return;
            }
            getDecoration({using:1,type:'calendar'}).then(data=>{
                let res=data.data.data
                if(res.length==0){
                //空 则为无主题，不再加载接口，界面设No
                    sessionStorage.setItem('decoration_calendar','no')
                    //设置默认背景图
                    this.setDefaultCalendar()
                    return;
                }
                sessionStorage.setItem('decoration_calendar',JSON.stringify(res[0]))
                this.setDecoration(res[0])
            })
            },
            setDecoration(decoration_calendar){
                this.bg = `url(${this.showDecoration(decoration_calendar.val,'calendar')})`;
            }
    },
    mounted: function () {
        this.loadData();
        this.loadBackGround();
    },
};
</script>

<style lang="less">
@import "../../assets/css/v2/assistant.less";
</style>

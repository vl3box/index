<template>
    <div class="m-topic-text-list m-topic-text-list-y">
        <ul class="u-list" v-if="list && list.length">
            <li class="u-item" v-for="(item,i) in list" :key="i">
                <a class="u-link" :href="item.link" target="_blank">
                    <span class="u-title" :style="{color:item.color}">{{item.title}}</span>
                    <!-- <span class="u-date">{{item.created_at}}</span> -->
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   name : 'TopicTextListY',
   props:['data','withData','length'],
   components : {},
   data : function(){
       return {
           
       }
   },
   computed:{
       list : function (){
           return this.data?.slice(0,this.length) || []
       }
   },
   watch:{},
   methods:{},
   filters:{},
   created:function(){},
   mounted:function(){},
}
</script>

<style scoped lang="less">
    .m-topic-text-list{
        .u-list{
            list-style: none;
            margin:0;
            padding:0 20px;
        }
        .u-item{
            border-bottom:1px solid #eee;
            &:last-child{
                border-bottom:none;
            }
        }
        .u-link{
            .db;
            .nobreak;
            .fz(15px,2.1);
            color:@color;
            padding:2px 0;
            &:hover{
                color:#c00;
            }
        }
    }
</style>
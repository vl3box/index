<template>
    <div class="u-skill">
        <!-- <div class="u-tab">
                            <img :src="zslogo" class="u-logo" />
                            <span
                                v-for="item in 3"
                                :key="item"
                                :class="[`zhaoshi` + item, item == contNum ? 'active' : '']"
                                @click="changeCont(item)"
                            ></span>
                        </div>
                        <div class="u-cont">
                            <div class="u-arr">
                                <span class="left" v-if="arrNum > 1" @click="changeArr(3, 'left')"></span>
                                <span class="right" v-if="arrNum < 3" @click="changeArr(3)"></span>
                            </div>
                            <img :src="zhaoshiImg" />
        </div>-->
    </div>
</template>

<script>
export default {
   name : '',
   props:[],
   components : {},
   data : function(){
       return {
           
       }
   },
   computed:{},
   watch:{},
   methods:{},
   filters:{},
   created:function(){},
   mounted:function(){},
}
</script>
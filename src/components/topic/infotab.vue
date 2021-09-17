<template>
  <div class="m-topic-infotab">
    <div class="u-title">
      <img class="u-yaozong" src="../../assets/img/topic/yaozong.png" />
      <span
        v-for="(item, i) in 4"
        :key="i"
        :class="['u-icon' + (i + 1), index == i ? 'active' : '']"
        @click="changeIcon(i)"
      ></span>
    </div>
    <div class="u-info">
      <span class="u-arr" :class="arrClass"></span>
    </div>
    <div class="u-btn">
      <a :href="item.link" target="_blank" v-for="(item, i) in btn" :key="i">{{
        item.name
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "infotab",
  props: [],
  data: function () {
    return {
      index: 0,
      arrClass: "",
      btn: [
        { name: "《药宗宏库》", link: "" },
        { name: "《药宗攻略》", link: "" },
        { name: "《输出精品》", link: "" },
        { name: "《治疗精品》", link: "" },
      ],
    };
  },
  computed: {},
  methods: {
    changeIcon: function (i) {
      this.index = i;
    },
  },
  components: {},
  watch: {
    index: {
      handler(val) {
        this.arrClass = "u-arr" + (val + 1);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>


<style lang="less">
@import "../../assets/css/topic/sect.less";
</style>
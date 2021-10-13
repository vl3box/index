<template>
  <div class="p-yaozong">
    <div class="p-yaozong-container wp">
      <div class="p-yaozong-menu">
        <span
          v-for="item in 6"
          :key="item"
          :class="[`u-menu` + item, item == menuIndex ? 'acetive' : '']"
          @click="changeMenu(item)"
        ></span>
      </div>
      <div class="p-yaozong-intro">

          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Yaozong",
  props: [],
  components: {},
  data: function () {
    return {
      menuIndex: 1,
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeMenu(i) {
      this.menuIndex = i;
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {},
};
</script>
 
 <style lang="less">
@import "../../assets/css/topic/beitianyaozongSect.less";
</style>
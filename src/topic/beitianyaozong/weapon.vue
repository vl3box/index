<template>
  <div class="m-yaozong-weapon">
    <span class="u-next" @click="turn"></span>
    <div class="u-cont" @click="show = !show">
      <div class="u-btn"></div>
      <img
        class="u-title"
        :class="animation ? 'p-animation fadeInRight' : ''"
        :src="weaponText"
      />
      <img
        class="u-text"
        :src="img_root + `wuqi-text.png`"
        :class="animation ? 'p-animation fadeInDown' : ''"
      />
    </div>
    <div class="u-showImg" :class="`wuqi` + weaponIndex" v-if="show">
      <img
        :src="weaponImg"
        :class="animation ? 'p-animation fadeInLeftBig' : ''"
      />
      <div class="u-close" @click="show = !show"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weapon",
  props: ["img_root", "index"],
  components: {},
  data: function () {
    return {
      animation: true,
      show: false,
      weaponIndex: this.index,
      len: 4,
    };
  },
  computed: {
    weaponText: function () {
      return this.img_root + `wuqi` + this.weaponIndex + `-text.png`;
    },
    weaponImg: function () {
      return this.img_root + `wuqi` + this.weaponIndex + `.png`;
    },
  },
  watch: {},
  methods: {
    turn: function () {
      this.animation = false;
      setTimeout(() => {
        this.animation = true;
      }, 10);
      this.weaponIndex++;
      if (this.weaponIndex > this.len) {
        this.weaponIndex = 1;
      }
      this.$emit("changeBg", this.weaponIndex, "weapon");
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {},
};
</script>
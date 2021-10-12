<template>
  <!-- 专题页 -->
  <div class="p-topic">
    <Header :overlayEnable="true"></Header>
    <div class="p-topic-container">
      <div class="wp">
        <div class="m-topic-leaf"></div>
        <div class="m-topic-header">
          <div class="u-txt"></div>
        </div>
        <div class="m-topic-box">
          <div class="m-topic-video">
            <!-- <video :src="video"></video> -->
          </div>
          <div class="m-topic-info">
            <div class="u-txt"></div>
            <div class="u-box">
              <a
                v-for="(item, i) in yaozong"
                :href="item.link"
                target="_blank"
                :key="i"
                class="u-btn"
                :class="`u-btn` + i"
              ></a>
            </div>
          </div>
          <div class="m-topic-box m-topic-one">
            <div class="u-title"></div>
            <div class="u-cont">
              <div class="u-tab">
                <span class="leiyu active"></span>
                <span class="wushi"></span>
              </div>
              <div class="u-box">
                <div class="u-img">
                  <img
                    src="https://jx3.xoyo.com/uploadfile/2020/0320/20200320051105710.jpg"
                  />
                  <a href="http://" class="u-more"></a>
                </div>
                <div class="u-news">
                  <a
                    href
                    target="_blank"
                    class="u-line"
                    v-for="item in 9"
                    :key="item"
                  >
                    <span>是攻略我是攻略是攻略我是攻略{{ item }}</span>
                    <span>yunmoer</span>
                  </a>
                </div>
                <div class="u-btnbox">
                  <a
                    v-for="(item, i) in fb"
                    :key="i"
                    :href="item.link"
                    class="u-btn"
                    :class="`u-btn` + i"
                    target="_blank"
                  ></a>
                </div>
              </div>
            </div>
            <a class="u-sword" href="http://" target="_blank"></a>
          </div>
          <div class="m-topic-box m-topic-two">
            <div class="u-title"></div>
            <div class="u-cont">
              <a
                class="u-img"
                :href="item.link"
                target="_blank"
                v-for="(item, i) in pvp"
                :key="i"
              >
                <img :src="item.img" />
                <div class="u-box">
                  <div class="u-name">{{ item.title }}</div>
                  <div class="u-desc">{{ item.desc }}</div>
                </div>
              </a>
            </div>
          </div>
          <div class="m-topic-box m-topic-three">
            <div class="u-title"></div>
            <div class="u-cont">
              <img
                src="https://jx3.xoyo.com/zt/2021/04/15/ziliaopian/assets/img/img-d4a75dab.png.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-topic-footer">
      <div class="wp">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
const KEY = "beitianyaozong";
import { getTopic } from "@/service/topic";
export default {
  name: "Topic",
  props: [],
  components: {},
  data: function () {
    return {
      raw: [],
      yaozong: [
        { name: "药宗武学", link: "" },
        { name: "药宗宏库", link: "" },
        { name: "药宗配装", link: "" },
        { name: "五方攻略", link: "" },
        { name: "灵素攻略", link: "" },
        { name: "更多", link: "" },
      ],
      fb: [
        { name: "新配装器", link: "" },
        { name: "副本掉落", link: "" },
        { name: "战斗分析", link: "" },
        { name: "团队工具", link: "" },
      ],
      pvp: [
        {
          title: "第二届名剑杯比赛",
          img: "https://jx3.xoyo.com/zt/2021/04/15/ziliaopian/assets/img/boxImg1-e4a10e1d.jpg.webp",
          link: "",
          desc: "剑三一般指剑侠情缘网络版叁。《剑侠情缘网络版叁》（简称《剑网3》）是由是由金山软件公司西山居工作室开发的一款3D武侠",
        },
        {
          title: "第五届名剑杯比赛",
          img: "https://jx3.xoyo.com/zt/2021/04/15/ziliaopian/assets/img/boxImg2-661b2ecc.jpg.webp",
          link: "",
        },
        {
          title: "第四届名剑杯比赛",
          img: "https://jx3.xoyo.com/zt/2021/04/15/ziliaopian/assets/img/boxImg3-5a18a2f1.jpg.webp",
          link: "",
        },
        {
          title: "第三届名剑杯比赛",
          img: "https://jx3.xoyo.com/zt/2021/04/15/ziliaopian/assets/img/boxImg4-b688ebda.jpg.webp",
          link: "",
        },
      ],
      video: "",
    };
  },
  computed: {
    data: function () {
      let _data = {};
      this.raw.forEach((item) => {
        if (!_data[item.subtype]) {
          _data[item.subtype] = [];
        }
        _data[item.subtype].push(item);
      });
      return _data;
    },
  },
  watch: {},
  methods: {
    init: function () {
      getTopic(KEY).then((res) => {
        this.raw = res.data.data;
        this.video = this.data.new_video[0]["link"];
      });
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {
    this.init();
  },
};
</script>

<style lang="less">
@import "../../assets/css/theme/kv.less";
@import "../../assets/css/topic/common.less";
// @import "../../assets/css/theme/beitianyaozong.less";
@import "../../assets/css/topic/beitianyaozongNew.less";
</style>
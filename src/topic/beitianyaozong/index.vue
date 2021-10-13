<template>
  <!-- 专题页 -->
  <div class="p-topic">
    <div class="p-topic-container">
      <div class="wp shadow">
        <!-- 叶子 -->
        <div class="m-topic-leaf"></div>
        <!-- 第一屏 -->
        <div class="m-topic-header">
          <img class="u-textImg" :src="btyz + `yaozong.png`" />
        </div>
        <!-- 专题内容 -->
        <div class="m-topic-content">
          <!-- 视频 -->
          <div class="m-topic-video">
            <img class="u-textImg" :src="btyz + `txtr.png`" />
            <div class="u-sleeve"></div>
            <video :src="video"></video>
          </div>
          <!-- 药宗介绍和链接 -->
          <div class="m-topic-info">
            <img class="u-textImg" :src="btyz + `txt.png`" />
            <div class="u-btnbox">
              <a
                v-for="(item, i) in yaozong"
                :href="item.link"
                :key="i"
                class="u-btn"
                :class="`u-btn` + i"
                target="_blank"
              ></a>
            </div>
          </div>
          <!-- pve -->
          <div class="m-topic-block m-topic-pve">
            <img class="u-title" :src="btyz + `one.png`" />
            <div class="u-cont">
              <!-- 切换tab -->
              <div class="u-tab">
                <span
                  v-for="(item, i) in tab"
                  :key="i"
                  :class="[item, i == tabIndex ? 'active' : '']"
                  @click="changeTab(i)"
                ></span>
              </div>
              <div class="u-tab-block">
                <!-- BOSS图片 -->
                <div class="u-img">
                  <img :src="tabImg" />
                  <a :href="tabImgLink" class="u-more"></a>
                </div>
                <!-- 新闻 -->
                <div class="u-news">
                  <a
                    :href="item.link"
                    target="_blank"
                    class="u-line"
                    v-for="item in pve"
                    :key="item.id"
                  >
                    <span class="u-name">{{ item.title }}</span>
                    <span class="u-author">{{ item.author }}</span>
                  </a>
                </div>
                <!-- 按钮 -->
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
              <a class="u-sword" href="#/yaozong" target="_blank"></a>
            </div>
          </div>
          <!-- pvp -->
          <div class="m-topic-block m-topic-pvp">
            <img class="u-title" :src="btyz + `two.png`" />
            <div class="u-cont">
              <a
                class="u-img"
                :href="item.link"
                target="_blank"
                v-for="(item, i) in pvp"
                :key="i"
              >
                <img :src="item.img" />
              </a>
            </div>
          </div>
          <!-- pvx -->
          <div class="m-topic-block m-topic-pvx">
            <img class="u-title" :src="btyz + `three.png`" />
            <div class="u-cont">
              <div class="u-swiper">
                <el-carousel height="480px">
                  <el-carousel-item v-for="item in pvx" :key="item">
                    <a :href="item.link" target="_blank">
                      <img :src="item.img" alt="" />
                    </a>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <!-- 二维码 -->
          <div class="m-topic-qrcode">
            <img
              src="https://jx3.xoyo.com/assets/2018/11/26/assets/images/qrcode/qrcode_index.png"
              alt
            />
          </div>
        </div>
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
      btyz: "https://img.jx3box.com/topic/beitianyaozong/new/",
      tab: ["leiyu", "wushi"],
      tabIndex: 0,
      raw: [],
      yaozong: [
        {
          name: "药宗武学",
          link: "/bps/#/raw?subtype=%E6%97%A0%E6%96%B9",
        },
        { name: "药宗宏库", link: "/macro/#/?subtype=无方" },
        { name: "药宗配装", link: "/pz/#/public?mount=10627" },
        { name: "无方攻略", link: "/bps/#/?subtype=无方" },
        { name: "灵素攻略", link: "/bps/#/?subtype=灵素" },
        { name: "更多", link: "#/yaozong" },
      ],
      fb: [
        { name: "新配装器", link: "/pz" },
        {
          name: "副本掉落",
          link: "/fb/#/drop?fb_name=雷域大泽&fb_zlp=奉天证道",
        },
        { name: "战斗分析", link: "/battle" },
        { name: "团队工具", link: "/team" },
      ],
      pvp: [],
      pve: [],
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
        this.pve = this.data.new_pve;
        this.pvebanner = this.data.new_pve_banner;
        this.pvp = this.data.new_pvp;
        this.pvx = this.data.new_pvx;

        this.tabImg = this.pvebanner[0].img;
        this.tabImgLink = this.pvebanner[0].link;
      });
    },
    changeTab(i) {
      this.tabIndex = i;
      this.tabImg = this.pvebanner[i].img;
      this.tabImgLink = this.pvebanner[i].link;
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {
    this.init();
  },
};
</script>

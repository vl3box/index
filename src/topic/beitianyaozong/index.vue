<template>
  <!-- 专题页 -->
  <div class="p-topic">
    <div class="p-topic-container">
      <div class="wp shadow">
        <!-- 叶子 -->
        <div class="m-topic-leaf"></div>
        <!-- 第一屏 -->
        <div class="m-topic-header">
          <img
            class="u-textImg p-animation fadeInRight"
            :src="btyz + `yaozong.png`"
          />
        </div>
        <!-- 专题内容 -->
        <div class="m-topic-content" ref="scrollShow">
          <!-- 视频 -->
          <div
            class="m-topic-video p-animation fadeInDown"
            :class="infinite ? 'infinite' : ''"
          >
            <img
              class="u-textImg p-animation fadeInRight"
              :src="btyz + `txtr.png`"
            />
            <div class="u-sleeve"></div>
            <video :src="video"></video>
          </div>
          <!-- 药宗介绍和链接 -->
          <div class="m-topic-info" :class="infinite ? 'infinite' : ''">
            <img
              class="u-textImg p-animation fadeInDown"
              :src="btyz + `txt.png`"
            />
            <div class="u-btnbox">
              <a
                v-for="(item, i) in yaozong"
                :href="item.link"
                :key="i"
                class="u-btn p-animations fadeInUp"
                :class="`u-btn` + i"
                target="_blank"
              ></a>
            </div>
          </div>
          <!-- pve -->
          <div
            class="m-topic-block m-topic-pve"
            :class="infinite ? 'infinite' : ''"
          >
            <img
              class="u-title p-animation fadeInDown"
              :src="btyz + `one.png`"
            />
            <div class="u-cont p-animation fadeInDown">
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
                    v-for="(item, i) in pve"
                    :key="i"
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
              <a
                class="u-sword p-animations fadeInRightBig"
                href=""
                target="_blank"
              ></a>
            </div>
          </div>
          <!-- pvp -->
          <div class="m-topic-block m-topic-pvp">
            <img
              class="u-title p-animation fadeInDown"
              :src="btyz + `two.png`"
            />
            <div class="u-cont">
              <a
                class="u-img p-animations bounceIn"
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
            <img
              class="u-title p-animation fadeInDown"
              :src="btyz + `three.png`"
            />
            <div class="u-cont p-animation fadeInDown">
              <div class="u-swiper">
                <el-carousel height="480px">
                  <el-carousel-item v-for="(item, i) in pvx" :key="i">
                    <a :href="item.link" target="_blank">
                      <img :src="item.img" alt="" />
                    </a>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
          <!-- 二维码 -->
          <div class="m-topic-qrcode" ref="footer">
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
      infinite: false,
      btyz: "https://img.jx3box.com/topic/beitianyaozong/new/",
      tab: ["leiyu", "wushi"],
      tabIndex: 0,
      raw: [],
      tabImg: "",
      tabImgLink: "",
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
      pvx: [],
      video: "",
      offAnimation: false,
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
    handleMouse(e) {
      let direction = e.deltaY > 0 ? "down" : "up";
      if (direction == "down") this.showAnimation();
    },
    showAnimation() {
      let documentClientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      let dom = this.$refs.scrollShow;

      for (let i = 0; i < dom.children.length; i++) {
        if (
          dom.children[i].getBoundingClientRect().top - documentClientHeight >
          -100
        ) {
          dom.children[i].style.display = "none";
          setTimeout(() => {
            dom.children[i].style.display = "block";
          }, 10);
        }
      }
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {
    this.init();
    window.addEventListener("mousewheel", this.handleMouse) ||
      window.addEventListener("DOMMouseScroll", this.handleMouse);
  },
};
</script>

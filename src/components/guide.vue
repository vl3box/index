<template>
  <div class="m-guide m-sideblock">
    <div class="m-guide-header m-sideblock-header">
      <i class="el-icon-guide"></i>
      <span class="u-title">游戏指南</span>
      <a href="/bps" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部"><i class="el-icon-more"></i></a>
    </div>
    <div class="m-guide-content">
      <el-row>
        <el-col :span="8">
          <div class="u-guide-block u-guide-pve">
            <!-- PVE -->
            <template v-if="menu_groups['guide-pve']">
              <h5 class="u-title">{{menu_groups['guide-pve'].label}}</h5>
              <div class="u-list">
                <a
                    v-for="(menu, key) in menu_groups['guide-pve'].menus"
                    :key="key"
                    :href="menu.link"
                    target="_blank"
                    v-html="menu.label"
                ></a>
              </div>
            </template>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="u-guide-block u-guide-pve">
            <!-- PVX -->
            <template v-if="menu_groups['guide-pvx']">
              <h5 class="u-title">{{menu_groups['guide-pvx'].label}}</h5>
              <div class="u-list">
                <a
                    v-for="(menu, key) in menu_groups['guide-pvx'].menus"
                    :key="key"
                    :href="menu.link"
                    target="_blank"
                    v-html="menu.label"
                ></a>
              </div>
            </template>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="u-guide-block u-guide-pvp">
            <!-- PVP -->
            <template v-if="menu_groups['guide-pvp']">
              <h5 class="u-title">{{menu_groups['guide-pvp'].label}}</h5>
              <div class="u-list">
                <a
                    v-for="(menu, key) in menu_groups['guide-pvp'].menus"
                    :key="key"
                    :href="menu.link"
                    target="_blank"
                    v-html="menu.label"
                ></a>
              </div>
            </template>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <div class="u-guide-block u-guide-bps">
            <!-- 110级 - 全门派指南 -->
            <template v-if="menu_groups['guide-bps-kungfu']">
              <h5 class="u-title">{{menu_groups['guide-bps-kungfu'].label}}</h5>
              <div class="u-list">
                <a
                    v-for="(menu, key) in menu_groups['guide-bps-kungfu'].menus"
                    :key="key"
                    :href="menu.link"
                    target="_blank"
                    v-html="menu.label"
                ></a>
              </div>
            </template>

            <!-- 特效武器大全 -->
            <template v-if="menu_groups['guide-bps-weapon']">
              <h5 class="u-title">{{menu_groups['guide-bps-weapon'].label}} <img src="../assets/img/new2.gif"></h5>
              <div class="u-list">
                <a
                    v-for="(menu, key) in menu_groups['guide-bps-weapon'].menus"
                    :key="key"
                    :href="menu.link"
                    target="_blank"
                    v-html="menu.label"
                ></a>
              </div>
            </template>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="u-guide-block u-guide-other">
            <!-- 通用 -->
            <template v-if="menu_groups['guide-other']">
              <h5 class="u-title">{{menu_groups['guide-other'].label}}</h5>
              <div class="u-list">
                <a
                    v-for="(menu, key) in menu_groups['guide-other'].menus"
                    :key="key"
                    :href="menu.link"
                    target="_blank"
                    v-html="menu.label"
                ></a>
              </div>
            </template>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {getMenuGroups} from '../service/menu_group'

  export default {
    name: "guide",
    props: [],
    data: function () {
      return {
        menu_groups: {},
      };
    },
    computed: {},
    methods: {},
    mounted() {
      getMenuGroups({
        names: [
          'guide-pve',
          'guide-pvx',
          'guide-pvp',
          'guide-bps-kungfu',
          'guide-bps-weapon',
          'guide-other',
        ]
      }).then(
        (res) => {
          let data = res.data;
          if (data.code === 200) {
            let output = {};
            for (let i in data.data.data) {
              let group = data.data.data[i];
              output[group.name] = group;
            }
            this.menu_groups = output;
          }
        }
      )
    },
    components: {},
  };
</script>

<style lang="less">
  @import "../assets/css/guide.less";
</style>

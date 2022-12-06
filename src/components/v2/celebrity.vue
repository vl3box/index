<template>
  <div
    class="m-celebrity m-sideblock"
    v-if="client == 'std'"
  >
    <div class="m-sideblock-header celebrity-header">
      <span class="u-title"> <i class="el-icon-s-help"></i> 名望·楚天社
      </span>
      <div class="desc">
        <el-tooltip
          placement="top"
          popper-class="celebrity-notice-tooltip"
        >
          <div slot="content">
            <div>{{currentMap.map}}奖励：名望({{currentMap.totalRewards[0]}}),楚天四合令({{currentMap.totalRewards[1]}}),侠行点({{currentMap.totalRewards[2]}})。</div>
            <div>任务数量：{{currentMap.tasks}}个。</div>
            <div>任务流程：<span
                v-for="(item, index) in currentMap.stages"
                :key="index"
              ><i
                  v-if="index"
                  class="el-icon-right"
                ></i>{{item.stage}}({{item.site}})</span></div>
          </div>
          <span class="map">{{currentMap.map}}({{currentMap.tasks}})</span>
        </el-tooltip>
        <i class="el-icon-right"></i>

        <el-tooltip
          placement="top"
          popper-class="celebrity-notice-tooltip"
        >
          <div slot="content">
            <div>{{nextMap.map}}奖励：名望({{nextMap.totalRewards[0]}}),楚天四合令({{nextMap.totalRewards[1]}}),侠行点({{nextMap.totalRewards[2]}})。</div>
            <div>任务数量：{{nextMap.tasks}}个。</div>
            <div>任务流程：<span
                v-for="(item, index) in nextMap.stages"
                :key="index"
              ><i
                  v-if="index"
                  class="el-icon-right"
                ></i>{{item.stage}}({{item.site}})</span></div>
          </div>
          <span>{{nextMap.map}}({{nextMap.tasks}})</span>
        </el-tooltip>

        <el-tooltip
          placement="top"
          popper-class="celebrity-notice-tooltip"
        >
          <div slot="content">
            <div>奖励(4图)：名望({{globalInfo.rewards[0]}}),楚天四合令({{globalInfo.rewards[1]}}),侠行点({{globalInfo.rewards[2]}})。</div>
            <div></div>
            <div>注意事项：{{globalInfo.attention}}</div>
          </div>
          <i class="el-icon-info"></i>
        </el-tooltip>
      </div>
    </div>
    <div class="m-celebrity-content">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>时间</th>
            <th>地图</th>
            <th>地点</th>
            <th>阶段</th>
          </tr>
        </thead>
        <tbody>
          <tr class="pre-item">
            <td></td>
            <td>{{ list[0].timeFormat }}</td>
            <td>{{ list[0].map }}</td>
            <td><span>{{ list[0].site }}<img :src="require(`@/assets/img/icon/minimap_${list[0].icon || 6}.png`)" /></span></td>
            <td>{{ list[0].stage }}</td>
          </tr>
          <el-tooltip
            placement="top"
            popper-class="celebrity-notice-tooltip"
          >
            <div slot="content">
              <div>任务描述：{{list[1].desc}}</div>
              <div>结算条件：{{list[1].condition}}</div>
              <div v-if="list[1].tip">友情提示：{{list[1].tip}}</div>
              <div>数值奖励：名望({{list[1].rewards[0]}}),楚天四合令({{list[1].rewards[1]}}),侠行点({{list[1].rewards[2]}})。</div>
            </div>
            <tr class="current-item">
              <td>
                <i class="el-icon-caret-right"></i>
              </td>
              <td>{{ list[1].timeFormat }}</td>
              <td>{{ list[1].map }}</td>
              <td><span>{{ list[1].site }}<img :src="require(`@/assets/img/icon/minimap_${list[1].icon || 6}.png`)" /></span></td>
              <td>{{ list[1].stage }}</td>
            </tr>
          </el-tooltip>
          <el-tooltip
            placement="bottom"
            popper-class="celebrity-notice-tooltip"
          >
            <div slot="content">
              <div>任务描述：{{list[2].desc}}</div>
              <div>结算条件：{{list[2].condition}}</div>
              <div v-if="list[2].tip">友情提示：{{list[2].tip}}</div>
              <div>数值奖励：名望({{list[2].rewards[0]}}),楚天四合令({{list[2].rewards[1]}}),侠行点({{list[2].rewards[2]}})。</div>
            </div>
            <tr>
              <td></td>
              <td>{{ list[2].timeFormat }}</td>
              <td>{{ list[2].map }}</td>
              <td><span>{{ list[2].site }}<img :src="require(`@/assets/img/icon/minimap_${list[2].icon || 6}.png`)" /></span></td>
              <td>{{ list[2].stage }}</td>
            </tr>
          </el-tooltip>
          <!-- <tr
            v-for="(item, i) in list"
            :key="i"
            :class="[(i===1)&&'current-item', (i===0)&&'pre-item']"
          >
            <td>
              <i
                v-if="(i===1)"
                class="el-icon-caret-right"
              ></i>
            </td>
            <td>{{ item.timeFormat }}</td>
            <td>{{ item.map }}</td>
            <td>{{ item.site }}</td>
            <td>{{ item.stage }}</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import celebrityData from "@/assets/data/celebrity.json";
// const currentTime = new Date("2022-12-07 00:01")
export default {
  name: "celebrity",
  components: {
  },
  data: function () {
    return {
      globalInfo: celebrityData.global,
      currentMap: {},
      nextMap: {},
      list: [],
      currentDate: {
        h: new Date().getHours(),
        m: new Date().getMinutes()
      }
    };
  },
  computed: {
    client () {
      return this.$store.state.client;
    }
  },
  methods: {
    toFormatTime (h, m) {
      const hF = h < 0 ? '23' : h < 10 ? '0' + h : h > 23 ? '00' : h
      const hM = m < 10 ? '0' + m : m
      return hF + ':' + hM
    },
    getList (date) {
      const key = 'c' + (date.h % 2 === 0 ? '0' : '1') + (date.m < 30 ? '0' : '1')
      const preDate = new Date(new Date().getTime() - 30 * 60 * 1000)
      const nextDate = new Date(new Date().getTime() + 30 * 60 * 1000)
      const preKey = 'c' + (preDate.getHours() % 2 === 0 ? '0' : '1') + (preDate.getMinutes() < 30 ? '0' : '1')
      const nextKey = 'c' + (nextDate.getHours() % 2 === 0 ? '0' : '1') + (nextDate.getMinutes() < 30 ? '0' : '1')
      this.currentMap = celebrityData[key]
      this.nextMap = celebrityData[nextKey]
      let currentIndex = 0
      const stages = this.currentMap.stages
      const stageLen = stages.length
      if (stages.find(item => item.time === date.m) > -1) {
        // 当前时间等于阶段内的某个时间
        currentIndex = stages.findIndex(item => item.time === date.m)
      } else {
        // 当前时间不等于阶段内的时间
        const index = stages.findIndex(item => item.time > date.m)
        currentIndex = index > -1 ? index - 1 : stageLen - 1
      }
      let currentStage = {}
      let preStage = {}
      let nextStage = {}
      const h = date.h
      const m = date.m
      if (currentIndex > 0 && currentIndex < stageLen - 1) {
        // 当前阶段位于当前地图的中间
        preStage = Object.assign(stages[currentIndex - 1], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[currentIndex - 1].time)
        })
        currentStage = Object.assign(stages[currentIndex], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[currentIndex].time)
        })
        nextStage = Object.assign(stages[currentIndex + 1], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[currentIndex + 1].time)
        })
      } else if (currentIndex === 0) {
        // 当前阶段位于当前地图的第一个
        preStage = Object.assign(celebrityData[preKey].stages[celebrityData[preKey].stages.length - 1], {
          map: celebrityData[preKey].map,
          // 当前时间为0 或者当前时间大于0且小于30时但是未到下一个时间
          timeFormat: this.toFormatTime(m === 0 || (m < stages[1].time && m < 30) ? h - 1 : h, celebrityData[preKey].stages[celebrityData[preKey].stages.length - 1].time)
        })
        currentStage = Object.assign(stages[0], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[0].time)
        })
        nextStage = Object.assign(stages[1], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[1].time)
        })
      } else if (currentIndex === stageLen - 1) {
        // 当前阶段位于当前地图的最后一个
        preStage = Object.assign(stages[stageLen - 2], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[stageLen - 2].time)
        })
        currentStage = Object.assign(stages[stageLen - 1], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[stageLen - 1].time)
        })
        nextStage = Object.assign(celebrityData[nextKey].stages[0], {
          map: celebrityData[nextKey].map,
          timeFormat: this.toFormatTime(m > 30 ? h + 1 : h, celebrityData[nextKey].stages[0].time)
        })
      } else {
        // 找不到当前阶段取上个地图的最后一个阶段 currentIndex = -1
        // 例如：当前时间为30，但是当前地图的第一个阶段为31时，目前不存在
        // 当前为0， 当前地图的第一个阶段为1时
        preStage = Object.assign(celebrityData[preKey].stages[celebrityData[preKey].stages.length - 2], {
          map: celebrityData[preKey].map,
          timeFormat: this.toFormatTime(m === 0 || m < (stages[1].time && m < 30) ? h - 1 : h, celebrityData[preKey].stages[celebrityData[preKey].stages.length - 2].time)
        })
        currentStage = Object.assign(celebrityData[preKey].stages[celebrityData[preKey].stages.length - 1], {
          map: celebrityData[preKey].map,
          timeFormat: this.toFormatTime(m === 0 || m < (stages[1].time && m < 30) ? h - 1 : h, celebrityData[preKey].stages[celebrityData[preKey].stages.length - 1])
        })
        nextStage = Object.assign(stages[0], {
          map: celebrityData[key].map,
          timeFormat: this.toFormatTime(h, stages[0].time)
        })
      }
      this.list = [preStage, currentStage, nextStage]
    }
  },
  watch: {
    currentDate: {
      immediate: true,
      deep: true,
      handler (date) {
        this.getList(date)
      }
    }
  },
  mounted () {
    setInterval(() => {
      if (this.currentDate.h !== new Date().getHours()
        || this.currentDate.m !== new Date().getMinutes()) {
        this.currentDate = {
          h: new Date().getHours(),
          m: new Date().getMinutes()
        }
      }
    }, 1000)
  }
};
</script>
<style lang="less">
@import "~@/assets/css/v2/celebrity.less";
</style>

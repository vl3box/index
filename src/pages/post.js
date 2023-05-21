Vue.config.productionTip = false;

// 第三方UI组件
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

// 通用UI模块
import JX3BOX_UI from "@jx3box/jx3box-common-ui";
import "@jx3box/jx3box-common/css/element.css";
import "@jx3box/jx3box-common/css/normalize.css";
Vue.use(JX3BOX_UI);

// 数据与路由
import store from "@/store";

// utils
import utils from "@/utils/index";
Vue.prototype.$utils = utils;

import App from "@/views/Post.vue";
new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = {
    state: {
        profile : {
            server : '蝶恋花'
        },
        isLogin : false
    },
    mutations: {
    },
    getters: {
    },
    actions: {},
    modules: {}
};

export default new Vuex.Store(store);

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = {
    state: {
        profile : {
            server : '蝶恋花'
        },
        server : '蝶恋花'
    },
    mutations: {
    },
    getters: {
    },
    actions: {},
    modules: {}
};

export default new Vuex.Store(store);

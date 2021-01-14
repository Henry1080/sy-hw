import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 购物车数量
        cartNumber: '',
        // 是否登录
        isdenglu: false,
    },
    mutations: {},
    actions: {},
    modules: {},
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 购物车数量
        cartNumber: '',
        // 是否登录
        isdenglu: false,
        // 动态组件名
        componentName: 'mains',
        // 顶部app横幅是否显示
        ispullapp: true,
    },
    mutations: {
        btnClick(state, item) {
            state.componentName = item;
        },
        // 关闭顶部app横幅
        closeapp(state) {
            state.ispullapp = false;
        },
    },
    actions: {},
    modules: {},
});

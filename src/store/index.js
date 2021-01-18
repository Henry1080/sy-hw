import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 购物车数量
        cartNumber: '',
        // 购物车
        shopcart: [],
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
        add(state, item) {
            let index = -1;
            for (let i = 0; i < state.shopcart.length; i++) {
                if (item.name == state.shopcart[i].name) {
                    index = i;
                }
            }
            if (index > -1) {
                state.shopcart[index].number++;
            } else {
                state.shopcart.push({
                    name: item.name,
                    price: item.price,
                    number: 1,
                    color: item.color,
                    banben: item.banben,
                    xiangou: item.xiangou,
                    img: item.img,
                });
            }
        },
    },
    actions: {},
    modules: {},
});

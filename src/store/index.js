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
        allchecked: true,
        // 勾选数量
        cartNumber2: 0,
        // 总价
        subprice: 0,
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
                if (state.shopcart[index].number < state.shopcart[index].xiangou) {
                    state.shopcart[index].number++;
                    let price = 0;
                    let num = 0;
                    state.shopcart.forEach((item) => {
                        if (item.flag == true) {
                            price += item.number * item.price;
                            num += item.number;
                            state.subprice = price;
                            state.cartNumber2 = num;
                            state.cartNumber = state.cartNumber2;
                        }
                    });
                }
            } else {
                state.shopcart.push({
                    name: item.name,
                    price: item.price,
                    number: 1,
                    color: item.color,
                    banben: item.banben,
                    xiangou: item.xiangou,
                    img: item.img,
                    flag: true,
                });
                state.cartNumber++;
                // console.log(state.cartNumber);
            }
        },
        //增加
        addItem(state, index) {
            if (state.shopcart[index].number < state.shopcart[index].xiangou) {
                state.shopcart[index].number++;
                state.cartNumber++;
                let price = 0;
                let num = 0;
                state.shopcart.forEach((item) => {
                    if (item.flag == true) {
                        price += item.number * item.price;
                        num += item.number;
                        state.subprice = price;
                        state.cartNumber2 = num;
                    }
                });
                console.log(state.shopcart);
            }
        },
        //减少
        reduceItem(state, index) {
            if (state.shopcart[index].number > 1) {
                state.shopcart[index].number--;
                state.cartNumber--;
                let price = 0;
                let num = 0;
                state.shopcart.forEach((item) => {
                    if (item.flag == true) {
                        price += item.number * item.price;
                        num += item.number;
                        state.subprice = price;
                        state.cartNumber2 = num;
                    }
                });
            }
        },
        gouxuan(state, index) {
            state.shopcart[index].flag = !state.shopcart[index].flag;
            let arrTrue = []; // 定义两个空数组 当子选项是选中的状态则放入arrTrue数组中反之放进arrFalse里
            let arrFalse = [];
            let price = 0;
            let num = 0;
            state.shopcart.forEach((item) => {
                if (item.flag == true) {
                    price += item.number * item.price;
                    num += item.number;
                    state.subprice = price;
                    state.cartNumber2 = num;
                    arrTrue.push(item.flag);
                } else {
                    state.subprice = price;
                    state.cartNumber2 = num;
                    arrFalse.push(item.flag);
                }
            });
            state.cartNumber2 = arrTrue.length;

            // 当arrTrue长度等于购物车列表的数组的长度时，说明全部选中
            if (arrTrue.length == state.shopcart.length) {
                state.allchecked = true;
            }
            // 当arrFalse 长度大于0时 说明其中有 没有勾选的子选项
            if (arrFalse.length > 0) {
                state.allchecked = false;
            }
        },
        delgoods(state) {
            let price = 0;
            let num = 0;
            state.shopcart = state.shopcart.filter(function(item) {
                return item.flag == false;
            });
            state.shopcart.forEach((item) => {
                num += item.number;
                state.cartNumber2 = num;
                if (state.cartNumber2 > 0) {
                    state.cartNumber = state.cartNumber2;
                } else if (state.cartNumber2 == 0) {
                    state.cartNumber = '';
                }
            });
        },
    },
    actions: {},
    modules: {},
});

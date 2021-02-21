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
        // 是否全选
        allchecked: false,
        // 勾选数量
        cartNumber2: 0,
        // 总价
        subprice: 0,
    },
    mutations: {
        // tab切换
        btnClick(state, item) {
            state.componentName = item;
        },
        // 关闭顶部app横幅
        closeapp(state) {
            state.ispullapp = false;
        },
        // 本地存储
        memory(state) {
            localStorage.setItem('shopcart', JSON.stringify(state.shopcart));
        },
        // 更新购物车
        updatemessage(state) {
            // 勾选总价
            let price = 0;
            // 勾选数
            let num = 0;
            // 购物车总数
            let num2 = 0;
            if (state.shopcart.length > 0) {
                state.shopcart.forEach((item) => {
                    num2 += item.number;
                    if (num2 > 0) {
                        state.cartNumber = num2;
                    }
                    if (item.flag == true) {
                        price += item.number * item.price;
                        num += item.number;
                        state.subprice = price;
                        state.cartNumber2 = num;
                    }
                    if (state.cartNumber2 != 0 && state.cartNumber != 0) {
                        if (state.cartNumber2 == state.cartNumber) {
                            state.allchecked = true;
                        } else {
                            state.allchecked = false;
                        }
                    }
                    if (state.cartNumber == '') {
                        state.allchecked = false;
                    }
                });
            } else {
                state.cartNumber = '';
                state.allchecked = false;
            }
        },
        // 更新购物车
        updatemessage2(state) {
            // 勾选总价
            let price = 0;
            // 勾选数
            let num = 0;
            // 购物车总数
            let num2 = 0;
            if (state.shopcart.length > 0) {
                state.shopcart.forEach((item) => {
                    item.flag = true;
                    num2 += item.number;
                    if (num2 > 0) {
                        state.cartNumber = num2;
                    }
                    if (item.flag == true) {
                        price += item.number * item.price;
                        num += item.number;
                        state.subprice = price;
                        state.cartNumber2 = num;
                    }
                    if (state.cartNumber2 != 0 && state.cartNumber != 0) {
                        if (state.cartNumber2 == state.cartNumber) {
                            state.allchecked = true;
                        } else {
                            state.allchecked = false;
                        }
                    }
                    if (state.cartNumber == '') {
                        state.allchecked = false;
                    }
                });
            } else {
                state.cartNumber = '';
                state.allchecked = false;
            }
        },
        // 点击添加商品
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
                    this.commit('updatemessage');
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
                this.commit('updatemessage');
            }
            this.commit('memory');
        },
        //增加
        addItem(state, index) {
            if (state.shopcart[index].number < state.shopcart[index].xiangou) {
                state.shopcart[index].number++;
                this.commit('updatemessage');
            }
            this.commit('memory');
        },
        //减少
        reduceItem(state, index) {
            if (state.shopcart[index].number > 1) {
                state.shopcart[index].number--;
                this.commit('updatemessage');
            }
            this.commit('memory');
        },
        // 勾选
        gouxuan(state, index) {
            state.shopcart[index].flag = !state.shopcart[index].flag;
            let arrTrue = [];
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
                    arrFalse.push(item.flag);
                }
            });
            if (arrTrue.length == state.shopcart.length) {
                state.allchecked = true;
            }
            if (arrFalse.length > 0) {
                state.allchecked = false;
            }
            this.commit('memory');
        },
        // 全选/全不选
        taballchecked(state) {
            if (state.allchecked == false) {
                let price = 0;
                let num = 0;
                for (let i = 0; i <state.shopcart.length; i++) {
                    let item =state.shopcart[i];
                    item.flag = true;
                    price += item.number * item.price;
                    num += item.number;
                    state.subprice = price;
                    state.cartNumber2 = num;
                }
            } else {
                //取消全选
                for (let i = 0; i <state.shopcart.length; i++) {
                    let item = state.shopcart[i];
                    item.flag = false;
                    state.cartNumber2 = 0;
                    state.subprice = 0;
                }
            }
            state.allchecked = !state.allchecked;
            this.commit('memory');
        },
        // 删除商品
        delgoods(state) {
            state.shopcart = state.shopcart.filter(function (item) {
                return item.flag == false;
            });
            this.commit('updatemessage');
            this.commit('memory');
        },
        // 退出登录
        exitdenglu(state) {
            state.isdenglu = false;
        },
    },
    actions: {},
    modules: {},
});

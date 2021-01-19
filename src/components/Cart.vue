<template>
    <div class="container">
        <div class="title">
            <span>购物车</span>
            <div v-if="shopcart.length > 0" class="bianji" @click="btnbianji">
                <span v-if="isbianji == false">编辑</span>
                <span v-else>完成</span>
            </div>
        </div>
        <div class="cart-goods">
            <!-- 购物车有商品 -->
            <div class="cart-goods-detail" v-if="shopcart.length > 0">
                <!-- 购物车商品列表 -->
                <ul class="sc-list">
                    <li class="sc-item" v-for="(item, index) in shopcart" :key="item.name">
                        <div class="pro-panels">
                            <label class="checkbox">
                                <input />
                                <i :class="{ active: item.flag == false }" @click="danxuan(index)"></i>
                            </label>
                            <div class="sc-pro-href">
                                <div class="sc-pro-href-imgbox">
                                    <img :src="item.img" alt="" />
                                </div>
                                <div class="sc-pro-info">
                                    <p class="sc-pro-info-name">
                                        <span>{{ item.name }}</span>
                                    </p>
                                    <p class="sc-pro-info-guige">
                                        <span>{{ item.color }}，{{ item.banben }}</span>
                                    </p>
                                    <p class="sc-pro-info-youhui">
                                        <span>分期免息</span>
                                    </p>
                                    <div class="sc-pro-info-price-line">
                                        <div class="danjia">
                                            ￥
                                            <span>{{ item.price }}</span>
                                        </div>
                                        <div class="goodsnum">
                                            <i class="jian" :class="{ active: item.number == 1 }" @click="reduceItem(index)"></i>
                                            <span>{{ item.number }}</span>
                                            <i class="jia" :class="{ active: item.number == item.xiangou }" @click="addItem(index)"></i>
                                        </div>
                                    </div>
                                    <p class="sc-pro-info-xiangou">
                                        <span>限购{{ item.xiangou }}件</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 底部操作 -->
                <div class="sc-total">
                    <!-- 清算状态 -->
                    <div class="putong" v-if="isbianji == false">
                        <!-- 全选 -->
                        <label class="checkbox">
                            <input />
                            <em @click="taballchecked">
                                <i :class="{ active: allchecked == false }"></i>
                                <span>全选</span>
                            </em>
                        </label>
                        <div class="right">
                            <!-- 总价 -->
                            <div class="subprice">
                                <p>
                                    总计：
                                    <span>￥{{ subprice }}</span>
                                </p>
                            </div>
                            <!-- 结算 -->
                            <div class="action-right">
                                <p>
                                    <span>结算({{ cartNumber2 }})</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 编辑状态 -->
                    <div class="bianjistatus" v-else>
                        <!-- 全选 -->
                        <label class="checkbox2">
                            <input />
                            <em @click="taballchecked2">
                                <!-- 默认不勾选 -->
                                <i :class="{ active: allchecked2 == false }"></i>
                                <span>全选</span>
                            </em>
                        </label>
                        <div class="right">
                            <p class="action-right" @click="tabisdel">删除</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 购物车为空 -->
            <div class="cart-goods-none" v-else>
                <section class="empty-cart">
                    <header class="h">
                        <i class="icon-cart-empty"></i>
                        <p class="vm-systemempty-title">
                            <span>您的购物车没有商品</span>
                        </p>
                    </header>
                    <footer class="f">
                        <!-- 去首页 -->
                        <div class="tomains" @click="btnClick('mains')">
                            <span>去购物</span>
                        </div>
                    </footer>
                </section>
                <!-- 下部列表 -->
                <section class="system-pro-list">
                    <header class="h">
                        <span>热销推荐</span>
                    </header>
                    <div class="b">
                        <ul>
                            <li v-for="(item, index) in goodslist" :key="item.id">
                                <div @click="togoodsdetail(index)">
                                    <p class="p-img">
                                        <img :src="item.img" alt="" />
                                    </p>
                                    <p class="p-name">
                                        <span>{{ item.name }}</span>
                                    </p>
                                    <p class="p-price">
                                        <span class="danwei">￥</span>
                                        <span class="price">{{ item.price }}</span>
                                        <del v-if="item.price2"> ￥{{ item.price2 }}</del>
                                    </p>
                                </div>
                                <i class="icon-addToCart" @click.self="add(goodsdetail, index)"></i>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <div class="del-box" v-show="isdel">
            <div class="del">
                <header>
                    <span>确定要删除所选商品吗？</span>
                </header>
                <footer>
                    <div class="channel">
                        <span>取消</span>
                    </div>
                    <div class="sure" @click="delgoods">
                        <span>确定</span>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isbianji: false,
            goodslist: [],
            goodsdetail: {
                img: '',
                name: '',
                price: '',
                color: '',
                banben: '',
                xiangou: '',
            },
            // 商品详情数据
            list: [],
            allchecked2: false,
            isdel: false,
        };
    },
    computed: {
        cartNumber() {
            return this.$store.state.cartNumber;
        },
        shopcart() {
            return this.$store.state.shopcart;
        },
        allchecked() {
            return this.$store.state.allchecked;
        },
        cartNumber2() {
            return this.$store.state.cartNumber2;
        },
        subprice() {
            return this.$store.state.subprice;
        },
    },
    methods: {
        tabisdel(){
            this.isdel=! this.isdel;
        },
        btnClick(item) {
            this.$store.commit('btnClick', item);
        },
        getData() {
            let that = this;
            let url = 'http://localhost:8080/data/goodslist.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.goodslist = response.data.goodslist;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getData2() {
            let that = this;
            let url = 'http://localhost:8080/data/goodsdetail.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.list = response.data.goodsdetaillist;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        btnbianji() {
            if (this.isbianji == false) {
                for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                    let item = this.$store.state.shopcart[i];
                    item.flag = false;
                }
            } else {
                for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                    let item = this.$store.state.shopcart[i];
                    item.flag = true;
                }
            }
            this.isbianji = !this.isbianji;
            let price = 0;
            let num = 0;
            for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                let item = this.$store.state.shopcart[i];
                price += item.number * item.price;
                num += item.number;
                this.$store.state.subprice = price;
                this.$store.state.cartNumber2 = num;
            }
            this.$store.state.allchecked = true;
        },
        togoodsdetail(index) {
            this.$router.push({
                path: '/todetail',
                query: {
                    id: index,
                },
            });
        },
        getData3(index) {
            this.goodsdetail.img = this.list[index].swiperlist[0].imgs;
            this.goodsdetail.color = this.list[index].color[0].c1;
            this.goodsdetail.banben = this.list[index].banben[0].b1;
            this.goodsdetail.name = this.list[index].namedetail;
            this.goodsdetail.xiangou = this.list[index].xiangou;
            this.goodsdetail.price = this.list[index].price;
        },
        add(item, index) {
            this.getData3(index);
            this.$store.commit('add', item);
            // console.log(this.$store.state.shopcart);
        },
        addItem(index) {
            this.$store.commit('addItem', index);
        },
        reduceItem(index) {
            this.$store.commit('reduceItem', index);
        },
        danxuan(index) {
            this.$store.commit('gouxuan', index);
        },
        taballchecked() {
            if (this.$store.state.allchecked == false) {
                let price = 0;
                let num = 0;
                for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                    let item = this.$store.state.shopcart[i];
                    item.flag = true;
                    price += item.number * item.price;
                    num += item.number;
                    this.$store.state.subprice = price;
                    this.$store.state.cartNumber2 = num;
                }
            } else {
                //取消全选
                for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                    let item = this.$store.state.shopcart[i];
                    item.flag = false;
                    this.$store.state.cartNumber2 = 0;
                    this.$store.state.subprice = 0;
                }
            }
            this.$store.state.allchecked = !this.$store.state.allchecked;
        },
        taballchecked2() {
            if (this.allchecked2 == false) {
                for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                    let item = this.$store.state.shopcart[i];
                    item.flag = true;
                }
            } else {
                for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                    let item = this.$store.state.shopcart[i];
                    item.flag = false;
                }
            }
            this.allchecked2 = !this.allchecked2;
        },
        begin() {
            let price = 0;
            let num = 0;
            for (let i = 0; i < this.$store.state.shopcart.length; i++) {
                let item = this.$store.state.shopcart[i];
                price += item.number * item.price;
                num += item.number;
                this.$store.state.subprice = price;
                this.$store.state.cartNumber2 = num;
            }
        },
        delgoods() {
            this.$store.commit('delgoods');
            this.isdel=! this.isdel;
        },
    },
    activated() {
        this.begin();
    },
    created() {
        this.getData();
        this.getData2();
        let abc = JSON.parse(localStorage.getItem('shopcart'));
        if (abc) {
            this.$store.state.shopcart = abc;
        }
    },
    watch: {
        // 监听购物车变化本地存储
        shopcart(newVal) {
            localStorage.setItem('shopcart', JSON.stringify(newVal));
        },
    },
};
</script>

<style scoped>
.container {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
}
.title {
    flex-shrink: 0;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.9rem;
    color: #191919;
    background-color: #fff;
    position: relative;
}
.bianji {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    margin-top: -0.6rem;
    line-height: 1.72;
    padding: 0 0.4rem;
    text-align: center;
    font-size: 0.75rem;
    color: #888;
}
.cart-goods {
    flex-grow: 1;
    width: 100%;
    height: 0;
    overflow: auto;
}
.cart-goods-none {
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
}
.empty-cart {
    padding: 1.6rem 0 0.8rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
}
.empty-cart > .h > .icon-cart-empty {
    background: url(https://res.vmallres.com/nwap/20201115/staticm/img/new-cart-empty.cc2a5c0.png);
    height: 5rem;
    width: 5rem;
    display: block;
    margin: 0 auto;
    background-size: 100% auto;
}
.empty-cart > .h > p {
    padding-top: 0.4rem;
}
.empty-cart > .h > p > span {
    font-size: 0.7rem;
    color: #999;
    display: block;
    line-height: 1rem;
}
.empty-cart > .f {
    padding: 0.4rem 4rem 0;
}
.empty-cart > .f > .tomains {
    border: 1px solid rgba(51, 51, 51, 0.3);
    color: #333;
    padding: 0 1rem;
    border-radius: 1rem;
    min-width: 4.5rem;
    height: 1.5rem;
    text-align: center;
    font-size: 0.65rem;
    line-height: 1.5rem;
}
.system-pro-list > .h {
    padding: 0.8rem;
    text-align: center;
}
.system-pro-list > .h > span {
    font-size: 0.8rem;
    color: #333333;
    font-weight: bold;
}
.system-pro-list > .b {
    overflow: hidden;
    padding: 0 0.4rem;
    font-style: normal;
}
.system-pro-list > .b > ul {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
}
.system-pro-list > .b > ul > li {
    width: 50%;
    position: relative;
}
.system-pro-list > .b > ul > li > div {
    box-sizing: content-box;
    margin: 0 0 0.3rem 0.3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    padding: 0.75rem 0.4rem 0.5rem;
    text-align: center;
    display: block;
    position: relative;
    height: 10rem;
}
.system-pro-list > .b > ul > li:nth-child(2n + 1) > div {
    margin-left: 0;
}
.system-pro-list > .b > ul > li > div > .p-img {
    color: #333;
    height: 6.5rem;
    width: 6.5rem;
    margin: 0 auto;
}
.system-pro-list > .b > ul > li > div > .p-img > img {
    width: 100%;
    height: 100%;
}
.system-pro-list > .b > ul > li > div > .p-name {
    text-align: center;
    padding: 0.75rem 0 0.3rem;
    margin: 0 auto;
    display: table;
    white-space: normal;
    font-size: 0.6rem;
    color: #333;
}
.system-pro-list > .b > ul > li > div > .p-name > span {
    line-height: 1.2;
    max-height: 1.35rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.system-pro-list > .b > ul > li > div > .p-price {
    font-size: 0.75rem;
    color: #ca141d;
    line-height: 1.2;
    font-weight: bold;
}
.system-pro-list > .b > ul > li > div > .p-price > .danwei {
    color: #ca141d;
    line-height: 1.2;
    font-weight: bold;
}
.system-pro-list > .b > ul > li > div > .p-price > del {
    font-size: 0.5rem;
    color: #999;
    position: relative;
    font-weight: normal;
    margin-left: 0.2rem;
}
.icon-addToCart {
    background-image: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    overflow: hidden;
    top: 0.3rem;
    right: 0.3rem;
}
/* 购物车有商品时 */
.sc-list {
    width: 100%;
    padding: 0.4rem 0.6rem 3rem 0.6rem;
    overflow: auto;
}
.sc-list > .sc-item {
    overflow: hidden;
    margin-bottom: 0.4rem;
    padding: 0.65rem 0 0.8rem 0;
    background-color: #fff;
    border-radius: 0.5rem;
}
.sc-list > .sc-item > .pro-panels {
    position: relative;
    padding: 0.3rem 0.4rem 0.5rem 1.8rem;
}
.sc-list > .sc-item > .pro-panels > .checkbox {
    display: block;
    position: absolute;
    padding: 1.8rem 0.3rem 1.5rem 0.5rem;
    left: 0;
    top: 0;
    z-index: 2;
}
.sc-list > .sc-item > .pro-panels > .checkbox > input {
    display: none;
}
.sc-list > .sc-item > .pro-panels > .checkbox > i {
    display: block;
    width: 1rem;
    height: 1rem;
    appearance: none;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACQCAMAAACcXt03AAAAzFBMVEUAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKExwAAADKEx0AAADLExzLEhrKExzSExTKExzKExzLERwAAADKFBzKFB3KFBzLEhvLER3KExzKExzJExzKExzLERrKExzKExvKExzKExzLEhvKEhvJEhvKExzKERrJExzJEh3KFB3////LFyDvurzutLftrbHxv8LqoKPhd3zRMzr66On54uT219jjgIXbXmTTOkLQLTX88vPyxMbrqKzomZ3mkJXkh4vea3DZVVyuP0odAAAAK3RSTlMATARDOyYTHjAZ2gvxNT8mTw26kEcIwajQiVizooN4Luxg08hxVDhpHPKYXgw8tQAABBJJREFUaN6smNuu6yAMRBnbYCOUx/z/r560qhQpPmEDZl6qKmQxDHK4pJ5a1WzCAItlrS2tiEpmPMS5zFKq4ZJcNko7ic5WLnOCS1ZpnKMM4FByfD0AsA5iKgNS6c2rAFwHMEUAKd0W7Fp4kd399T0bdTkC1oEwSQHptGvsHve6bK+Dd930SXgJSgFLEzJAX/zkNKX8X0/t5syQXE7EkDQtAZOfBJoHkZvmAzjTghpgj6DLAsa/ychpURl8/1GAVkEE6B0ZNC1LweTczcjnQkCJgCpAP0OSQhLk32+NgSrkNzIKUG7ChxfQPSaDRkH5WyeuypYq7lMsnMJilK+tsAz5AuU46AOxPSBLB2ocVHEkQYmDCiQxWhzUwAmgOIiAbaBtQ9sW9r7pN2gcpLB9JaJ7ila/OYUlKFs+bCfwsxXP+jd1QR2o25ajXQvkziU7vokoAKUdlhh500YL5DZdk/Iu4pvRO6+2xmmPmbLFwZ0Mex4hZIzkXvOZHStFxrT7mBU/+HkpIDSVD/S1aPgcn69OibbeQ99p69u1kQsE8zH4Fsj0ByZjoL/Cf92O1E+LkQSUO3dXJbO7QepbB6w83FMxYGDo7uoKEMtaGlErmk0Ad9E1xBI43ZRJVrZDmAFmOSxflEX9a8XumhOFwTAMv+NhhgEER0FE6kfV7hPUalur7W7b3f//n7bWcSIGyAdeRx7dB3khJC78eToI2MPDOBikc39BVmZphCtROiND94M7lLob+CYZhhrsnvS4ERQmHVLLutAQZKSQQlNKddoJtCVtquQxGGCLylV2YOTOpVJTGJtSiQ4sdEjiObDgeNK8GKywq9m1AlhKqOAXrIWFwaMBl4QuGuiKjg+h0TMwRiPRudNHQ306YWiInTpzmNmu1nsUjeioByMb/u0VBb1jp+XAxJr/+IdLjvFbn6/5yQsKjt+70KSz4mdvuBSLmRl23qW5eRYdebXh0ciqs4T0AAy1O0vRecxxZVi21vn+dZ+bdRCWPI5PO8757mDUQU/eivLdaSyHqs4yh6wrT3/LT56fLjqPig4YObiy4qKk3YEjhz65KKk7IsSktX7nZy9vP53forPKUY7Ji409L5S0OuiW7UZ/L0t6HfQoRG3peSd+r3NUCstfkS0vsUaNYcVLuzXsYEQe1CV1B17lxvbFC/6gFqvZaj8NOojrNv8P/Q5mtZ+jzbmzgYKj+EBuNDvoqc4QX2Kfr9VXHiIOm48DlMa3Otb44uTXyKTxWVQ+jQZoICAhQwMZXYhhLaaCBJaCG19qml+zbn/xE4YwNqRSvgMjjnuj67pHldoBtAXSvOyuknGL6rkTaJi4pOaPoRB1SE+foQbr3+qvMTMtN2a4wmK3RTbamT8Nk8hxoiSc+lntvP8DPtC2J82CjnEAAAAASUVORK5CYII=) no-repeat;
    background-position: bottom;
    background-size: 100% 200%;
}
.sc-list > .sc-item > .pro-panels > .checkbox > i.active {
    background-position: 0 0;
}
.sc-pro-href {
    cursor: pointer;
    display: flex;
}
.sc-pro-href-imgbox {
    flex-shrink: 0;
    height: 4rem;
    width: 4rem;
}
.sc-pro-href-imgbox > img {
    width: 100%;
    height: 100%;
}
.sc-pro-info {
    margin-left: 0.3rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.sc-pro-info-name {
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.65rem;
}
.sc-pro-info-guige {
    margin-top: 0.3rem;
    line-height: normal;
    font-size: 0.55rem;
    word-break: break-all;
    color: #666;
}
.sc-pro-info-youhui {
    margin-top: 0.5rem;
}
.sc-pro-info-youhui > span {
    display: inline-block;
    padding: 0 0.3rem;
    margin-right: 0.2rem;
    height: 0.7rem;
    line-height: 0.7rem;
    margin-bottom: 0.2rem;
    font-size: 0.5rem;
    color: #ef5a62;
    border-radius: 0.45rem;
    border: solid 1px rgba(202, 20, 29, 0.3);
}
.sc-pro-info-price-line {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sc-pro-info-price-line > .danjia {
    font-size: 0.55rem;
    color: #ca141d;
    font-weight: bold;
}
.sc-pro-info-price-line > .danjia > span {
    font-size: 0.75rem;
}
.sc-pro-info-price-line > .goodsnum {
    display: flex;
    align-items: center;
}
.sc-pro-info-price-line > .goodsnum > span {
    width: 1.65rem;
    height: 100%;
    line-height: 100%;
    font-size: 0.65em;
    text-align: center;
}
.goodsnum > i {
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    cursor: pointer;
    font-weight: 400;
    border-radius: 1.2rem;
}
.jian {
    background: url(https://res.vmallres.com/nwap/20201115/staticm/img/input_number_minus.8442302.png) no-repeat;
    background-size: 200% 100%;
}

.jia {
    background: url(https://res.vmallres.com/nwap/20201115/staticm/img/input_number_add.8ccfc56.png) no-repeat;
    background-size: 200% 100%;
}
.jia.active,
.jian.active {
    background-position: 100%;
}
.sc-pro-info-xiangou {
    margin-top: 0.25rem;
    display: flex;
    justify-content: flex-end;
    color: #ca141d;
    font-size: 0.5rem;
    word-break: break-all;
    line-height: normal;
}
.sc-total {
    width: 100%;
    max-width: 720px;
    position: fixed;
    bottom: 2.5rem;
    right: 0;
    left: 0;
    z-index: 50;
    background-color: #fff;
}
.sc-total > .putong {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.1rem 0 1.1rem;
}
.sc-total > .putong > .checkbox {
    display: flex;
    align-items: center;
}
.sc-total > .putong > .checkbox > input {
    display: none;
}
.sc-total > .putong > .checkbox > em {
    display: flex;
    align-items: center;
}
.sc-total > .putong > .checkbox > em > i {
    display: block;
    width: 1rem;
    height: 1rem;
    appearance: none;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACQCAMAAACcXt03AAAAzFBMVEUAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKExwAAADKEx0AAADLExzLEhrKExzSExTKExzKExzLERwAAADKFBzKFB3KFBzLEhvLER3KExzKExzJExzKExzLERrKExzKExvKExzKExzLEhvKEhvJEhvKExzKERrJExzJEh3KFB3////LFyDvurzutLftrbHxv8LqoKPhd3zRMzr66On54uT219jjgIXbXmTTOkLQLTX88vPyxMbrqKzomZ3mkJXkh4vea3DZVVyuP0odAAAAK3RSTlMATARDOyYTHjAZ2gvxNT8mTw26kEcIwajQiVizooN4Luxg08hxVDhpHPKYXgw8tQAABBJJREFUaN6smNuu6yAMRBnbYCOUx/z/r560qhQpPmEDZl6qKmQxDHK4pJ5a1WzCAItlrS2tiEpmPMS5zFKq4ZJcNko7ic5WLnOCS1ZpnKMM4FByfD0AsA5iKgNS6c2rAFwHMEUAKd0W7Fp4kd399T0bdTkC1oEwSQHptGvsHve6bK+Dd930SXgJSgFLEzJAX/zkNKX8X0/t5syQXE7EkDQtAZOfBJoHkZvmAzjTghpgj6DLAsa/ychpURl8/1GAVkEE6B0ZNC1LweTczcjnQkCJgCpAP0OSQhLk32+NgSrkNzIKUG7ChxfQPSaDRkH5WyeuypYq7lMsnMJilK+tsAz5AuU46AOxPSBLB2ocVHEkQYmDCiQxWhzUwAmgOIiAbaBtQ9sW9r7pN2gcpLB9JaJ7ila/OYUlKFs+bCfwsxXP+jd1QR2o25ajXQvkziU7vokoAKUdlhh500YL5DZdk/Iu4pvRO6+2xmmPmbLFwZ0Mex4hZIzkXvOZHStFxrT7mBU/+HkpIDSVD/S1aPgcn69OibbeQ99p69u1kQsE8zH4Fsj0ByZjoL/Cf92O1E+LkQSUO3dXJbO7QepbB6w83FMxYGDo7uoKEMtaGlErmk0Ad9E1xBI43ZRJVrZDmAFmOSxflEX9a8XumhOFwTAMv+NhhgEER0FE6kfV7hPUalur7W7b3f//n7bWcSIGyAdeRx7dB3khJC78eToI2MPDOBikc39BVmZphCtROiND94M7lLob+CYZhhrsnvS4ERQmHVLLutAQZKSQQlNKddoJtCVtquQxGGCLylV2YOTOpVJTGJtSiQ4sdEjiObDgeNK8GKywq9m1AlhKqOAXrIWFwaMBl4QuGuiKjg+h0TMwRiPRudNHQ306YWiInTpzmNmu1nsUjeioByMb/u0VBb1jp+XAxJr/+IdLjvFbn6/5yQsKjt+70KSz4mdvuBSLmRl23qW5eRYdebXh0ciqs4T0AAy1O0vRecxxZVi21vn+dZ+bdRCWPI5PO8757mDUQU/eivLdaSyHqs4yh6wrT3/LT56fLjqPig4YObiy4qKk3YEjhz65KKk7IsSktX7nZy9vP53forPKUY7Ji409L5S0OuiW7UZ/L0t6HfQoRG3peSd+r3NUCstfkS0vsUaNYcVLuzXsYEQe1CV1B17lxvbFC/6gFqvZaj8NOojrNv8P/Q5mtZ+jzbmzgYKj+EBuNDvoqc4QX2Kfr9VXHiIOm48DlMa3Otb44uTXyKTxWVQ+jQZoICAhQwMZXYhhLaaCBJaCG19qml+zbn/xE4YwNqRSvgMjjnuj67pHldoBtAXSvOyuknGL6rkTaJi4pOaPoRB1SE+foQbr3+qvMTMtN2a4wmK3RTbamT8Nk8hxoiSc+lntvP8DPtC2J82CjnEAAAAASUVORK5CYII=) no-repeat;
    background-position: bottom;
    background-size: 100% 200%;
}
.sc-total > .putong > .checkbox > em > i.active {
    background-position: 0 0;
}
.sc-total > .putong > .checkbox > em > span {
    font-size: 0.65rem;
    color: #999;
    padding-left: 0.4rem;
}
.sc-total > .putong > .right {
    display: flex;
    align-items: center;
}
.sc-total > .putong > .right > .subprice {
    height: 2.4rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
}
.sc-total > .putong > .right > .subprice span {
    color: #ca141d;
    font-size: 0.85rem;
    font-weight: bold;
    font-style: normal;
}
.sc-total > .putong > .right > .action-right {
    padding: 0.275rem 0.4rem 0.275rem 0.6rem;
}
.sc-total > .putong > .right > .action-right > p {
    width: 4.5rem;
    padding: 0 0.4rem;
    background-image: linear-gradient(90deg, #e43e2d, #ca141d);
    color: #fff;
    height: 1.85rem;
    line-height: 1.85rem;
    text-align: center;
    font-size: 0.75rem;
    border-radius: 1rem;
    min-width: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bianjistatus {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.1rem 0 1.1rem;
}
.sc-total > .bianjistatus > .checkbox2 {
    display: flex;
    align-items: center;
}
.sc-total > .bianjistatus > .checkbox2 > input {
    display: none;
}
.sc-total > .bianjistatus > .checkbox2 > em {
    display: flex;
    align-items: center;
}
.sc-total > .bianjistatus > .checkbox2 > em > i {
    display: block;
    width: 1rem;
    height: 1rem;
    appearance: none;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACQCAMAAACcXt03AAAAzFBMVEUAAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKExwAAADKEx0AAADLExzLEhrKExzSExTKExzKExzLERwAAADKFBzKFB3KFBzLEhvLER3KExzKExzJExzKExzLERrKExzKExvKExzKExzLEhvKEhvJEhvKExzKERrJExzJEh3KFB3////LFyDvurzutLftrbHxv8LqoKPhd3zRMzr66On54uT219jjgIXbXmTTOkLQLTX88vPyxMbrqKzomZ3mkJXkh4vea3DZVVyuP0odAAAAK3RSTlMATARDOyYTHjAZ2gvxNT8mTw26kEcIwajQiVizooN4Luxg08hxVDhpHPKYXgw8tQAABBJJREFUaN6smNuu6yAMRBnbYCOUx/z/r560qhQpPmEDZl6qKmQxDHK4pJ5a1WzCAItlrS2tiEpmPMS5zFKq4ZJcNko7ic5WLnOCS1ZpnKMM4FByfD0AsA5iKgNS6c2rAFwHMEUAKd0W7Fp4kd399T0bdTkC1oEwSQHptGvsHve6bK+Dd930SXgJSgFLEzJAX/zkNKX8X0/t5syQXE7EkDQtAZOfBJoHkZvmAzjTghpgj6DLAsa/ychpURl8/1GAVkEE6B0ZNC1LweTczcjnQkCJgCpAP0OSQhLk32+NgSrkNzIKUG7ChxfQPSaDRkH5WyeuypYq7lMsnMJilK+tsAz5AuU46AOxPSBLB2ocVHEkQYmDCiQxWhzUwAmgOIiAbaBtQ9sW9r7pN2gcpLB9JaJ7ila/OYUlKFs+bCfwsxXP+jd1QR2o25ajXQvkziU7vokoAKUdlhh500YL5DZdk/Iu4pvRO6+2xmmPmbLFwZ0Mex4hZIzkXvOZHStFxrT7mBU/+HkpIDSVD/S1aPgcn69OibbeQ99p69u1kQsE8zH4Fsj0ByZjoL/Cf92O1E+LkQSUO3dXJbO7QepbB6w83FMxYGDo7uoKEMtaGlErmk0Ad9E1xBI43ZRJVrZDmAFmOSxflEX9a8XumhOFwTAMv+NhhgEER0FE6kfV7hPUalur7W7b3f//n7bWcSIGyAdeRx7dB3khJC78eToI2MPDOBikc39BVmZphCtROiND94M7lLob+CYZhhrsnvS4ERQmHVLLutAQZKSQQlNKddoJtCVtquQxGGCLylV2YOTOpVJTGJtSiQ4sdEjiObDgeNK8GKywq9m1AlhKqOAXrIWFwaMBl4QuGuiKjg+h0TMwRiPRudNHQ306YWiInTpzmNmu1nsUjeioByMb/u0VBb1jp+XAxJr/+IdLjvFbn6/5yQsKjt+70KSz4mdvuBSLmRl23qW5eRYdebXh0ciqs4T0AAy1O0vRecxxZVi21vn+dZ+bdRCWPI5PO8757mDUQU/eivLdaSyHqs4yh6wrT3/LT56fLjqPig4YObiy4qKk3YEjhz65KKk7IsSktX7nZy9vP53forPKUY7Ji409L5S0OuiW7UZ/L0t6HfQoRG3peSd+r3NUCstfkS0vsUaNYcVLuzXsYEQe1CV1B17lxvbFC/6gFqvZaj8NOojrNv8P/Q5mtZ+jzbmzgYKj+EBuNDvoqc4QX2Kfr9VXHiIOm48DlMa3Otb44uTXyKTxWVQ+jQZoICAhQwMZXYhhLaaCBJaCG19qml+zbn/xE4YwNqRSvgMjjnuj67pHldoBtAXSvOyuknGL6rkTaJi4pOaPoRB1SE+foQbr3+qvMTMtN2a4wmK3RTbamT8Nk8hxoiSc+lntvP8DPtC2J82CjnEAAAAASUVORK5CYII=) no-repeat;
    background-position: bottom;
    background-size: 100% 200%;
}
.sc-total > .bianjistatus > .checkbox2 > em > i.active {
    background-position: 0 0;
}
.sc-total > .bianjistatus > .checkbox2 > em > span {
    font-size: 0.65rem;
    color: #999;
    padding-left: 0.4rem;
}

.bianjistatus > .right {
    height: 2.4rem;
    font-size: 0.75rem;
    padding: 0.275rem 0.4rem 0.275rem 0.6rem;
}
.bianjistatus > .right > .action-right {
    width: 4.5rem;
    padding: 0 0.4rem;
    height: 1.85rem;
    line-height: 1.85rem;
    text-align: center;
    font-size: 0.75rem;
    border: 1px solid rgba(51, 51, 51, 0.3);
    color: #333;
    border-radius: 1rem;
    min-width: 4.5rem;
}
.del-box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    visibility: visible;
    min-height: 100%;
    z-index: 99;
}
.del-box > .del {
    position: fixed;
    z-index: 1000;
    border-radius: 0.4rem;
    left: 0.8rem;
    bottom: 1.2rem;
    width: -webkit-calc(100vw - 1.6rem);
    background-color: #fff;
    overflow: hidden;
    padding-top: 1.2rem;
}

.del-box > .del > header {
    padding: 0 1rem 0.4rem;
    max-height: 13.5rem;
    overflow: auto;
    text-align: center;
    font-size: 0.7rem;
    color: #333;
}
.del-box > .del > footer {
    border-radius: 0 0 0.4rem 0.4rem;
    overflow: hidden;
    padding: 0.75rem 0;
    height: 2.8rem;
    display: flex;
}
.del-box > .del > footer > .channel,
.del-box > .del > footer > .sure {
    flex: 1;
    padding: 0 0.75rem;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
    font-size: 0.7rem;
    color: grey;
}
.del-box > .del > footer > .sure {
    border-left: 1px solid #eaeaea;
    color: #ca141d;
}
</style>

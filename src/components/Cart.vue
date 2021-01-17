<template>
    <div class="container">
        <div class="title">
            <span>购物车</span>
            <div v-if="cartNumber > 0" class="bianji" @click="btnbianji">
                <span v-if="isbianji == false">编辑</span>
                <span v-else>完成</span>
            </div>
        </div>
        <div class="cart-goods">
            <!-- 购物车有商品 -->
            <div class="cart-goods-detail" v-if="cartNumber > 0"></div>
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
                            <li v-for="(item, index) in goodslist" :key="item.id" @click="togoodsdetail(index)">
                                <div>
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
                                <i class="icon-addToCart"></i>
                            </li>
                        </ul>
                    </div>
                </section>
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
        };
    },
    computed: {
        cartNumber() {
            return this.$store.state.cartNumber;
        },
    },
    methods: {
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
        btnbianji() {
            this.isbianji = !this.isbianji;
        },
        togoodsdetail(index) {
            this.$router.push({
                path: '/todetail',
                query: {
                    id: index,
                },
            });
        },
    },
    created() {
        this.getData();
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
</style>

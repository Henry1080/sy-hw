<template>
    <div class="container">
        <!-- 头部 -->
        <div class="top-bar">
            <transition mode="out-in">
                <!-- 顶部app横幅 -->
                <div v-if="ispullapp2" class="header-pullapp-wrap">
                    <div class="header-pullapp" v-if="ispullapp" key="bbb">
                        <div class="header-pullapp-close" @click="closeapp">
                            <span></span>
                        </div>
                        <div class="header-pullapp-img">
                            <img src="https://res.vmallres.com/pimages//pages/cdnImages/qUMT0pIBGQN3boCKtSqN.png" alt="" />
                        </div>
                        <div class="header-pullapp-txtbox">
                            <div class="header-pullapp-txtbox-title">来华为商城APP</div>
                            <div class="header-pullapp-txtbox-txt">立即领取新人专享见面礼</div>
                        </div>
                        <a href="https://m.vmall.com/app/open?type=1&cid=93436" class="header-pullapp-btnbox">打开App</a>
                    </div>
                </div>
                <div class="header-title-wrap" v-else key="aaa">
                    <div class="back" @click="goback"></div>
                    <ul class="header-title-text">
                        <li :class="{ active: num == index }" v-for="(item, index) in titlelist" :key="item" @click="btnTitleText(index)">{{ item }}</li>
                    </ul>
                    <div class="morechoice" @click="tabmorechoice">
                        <ul class="morechoice-box" v-show="ismorechoice">
                            <li class="morechoice-content" @click="toHome('mains')">
                                <i class="i1"></i>
                                <span>首页</span>
                            </li>
                            <li class="morechoice-content" @click="tosearch">
                                <i class="i2"></i>
                                <span>搜索</span>
                            </li>
                            <li class="morechoice-content" @click="toHome('sort')">
                                <i class="i3"></i>
                                <span>分类</span>
                            </li>
                            <li class="morechoice-content" @click="toHome('cart')">
                                <i class="i4"></i>
                                <span>购物车</span>
                            </li>
                            <li class="morechoice-content" @click="toHome('my')">
                                <i class="i5"></i>
                                <span>我的</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <div class="goodsdetail-wrap" ref="wrap" @scroll="getDistance">
            <!-- 轮播图 -->
            <div class="swiper-box">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in goodsdetaillist.swiperlist" :key="item.id">
                        <div class="img-box">
                            <img :src="item.imgs" alt="" />
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="space-gap"></div>
                <div class="swiper-title-wrap">
                    <div class="back" @click="goback"></div>
                    <div class="morechoice" @click="tabmorechoice">
                        <ul class="morechoice-box2" v-show="ismorechoice">
                            <li class="morechoice-content" @click="toHome('mains')">
                                <i class="i1"></i>
                                <span>首页</span>
                            </li>
                            <li class="morechoice-content" @click="tosearch">
                                <i class="i2"></i>
                                <span>搜索</span>
                            </li>
                            <li class="morechoice-content" @click="toHome('sort')">
                                <i class="i3"></i>
                                <span>分类</span>
                            </li>
                            <li class="morechoice-content" @click="toHome('cart')">
                                <i class="i4"></i>
                                <span>购物车</span>
                            </li>
                            <li class="morechoice-content" @click="toHome('my')">
                                <i class="i5"></i>
                                <span>我的</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 商品名称和价格 -->
            <div class="price-name-box">
                <p class="p-price">
                    <span>
                        <em>￥</em>
                        <i>{{ goodsdetaillist.price }}</i>
                    </span>
                    <del v-if="goodsdetaillist.price2">{{ goodsdetaillist.price2 }}</del>
                </p>
                <div class="p-name">
                    <h1>
                        <span>{{ goodsdetaillist.namedetail }}</span>
                    </h1>
                </div>
                <div class="moreactivity">
                    <span>【享3期分期免息】点击了解更多产品 》》》</span>
                </div>
            </div>
            <!-- 促销 -->
            <div class="cuxiao">
                <label>促销</label>
                <ul>
                    <li>
                        <div>一站式换新</div>
                        <p>以旧换新最高补贴500元</p>
                    </li>
                    <li>
                        <div>分期免息</div>
                        <p>花呗、掌上生活、工行、农行、银联、工行融e购分期支付可享免息</p>
                    </li>
                    <li>
                        <div>赠送积分</div>
                        <p>购买即赠商城积分，积分可抵现</p>
                    </li>
                </ul>
                <i></i>
            </div>
            <!-- 参数信息 -->
            <div class="pro-meta-sku-content">
                <!-- 配置 -->
                <div class="peizhi" v-if="goodsdetaillist.peizhi">
                    <div class="title">配置</div>
                    <ul class="list">
                        <li class="item" :class="{ active: num2 == index }" v-for="(item, index) in goodsdetaillist.peizhi" :key="item.id" @click="btnTitleText2(index)">{{ item.p1 }}</li>
                    </ul>
                </div>
                <!-- 颜色 -->
                <div class="color">
                    <div class="title">颜色</div>
                    <ul class="list">
                        <li class="item" :class="{ active: num3 == index }" v-for="(item, index) in goodsdetaillist.color" :key="item.id" @click="btnTitleText3(index)">{{ item.c1 }}</li>
                    </ul>
                </div>
                <!-- 版本 -->
                <div class="banben">
                    <div class="title">版本</div>
                    <ul class="list">
                        <li class="item" :class="{ active: num4 == index }" v-for="(item, index) in goodsdetaillist.banben" :key="item.id" @click="btnTitleText4(index)">{{ item.b1 }}</li>
                    </ul>
                </div>
            </div>
            <!-- 评价 -->
            <div class="evaluate-box">
                <div class="evaluate-header">
                    <span class="evaluate-num">用户评价 （{{ goodsdetaillist.pingjianum }}）</span>
                    <span class="evaluate-pre">98%</span>
                    <span class="evaluate-series">好评</span>
                    <span class="evaluate-more"></span>
                </div>
                <div class="evaluate-content">
                    <div class="evaluate-content-left">
                        <div class="head-img-box">
                            <div class="head-img">
                                <img :src="goodsdetaillist.headerimg" alt="" />
                            </div>
                            <div class="evaluate-name-box">
                                <div class="evaluate-name">{{ goodsdetaillist.pingjianame }}</div>
                                <div class="evaluate-dengji"></div>
                            </div>
                        </div>
                        <div class="evaluate-content-txt">{{ goodsdetaillist.pingjiatxt }}</div>
                    </div>
                    <div class="evaluate-content-right">
                        <img :src="goodsdetaillist.pingjiaimg" alt="" />
                    </div>
                </div>
                <div class="consult-area">
                    <p>查看全部评价</p>
                    <p>购买咨询(34)</p>
                </div>
            </div>
            <div class="loading-action">
                <i></i>
            </div>
            <!-- 懒加载图片 -->
            <div class="demo-image__lazy">
                <el-image v-for="item in goodsdetaillist.adsimg" :key="item.id" :src="item.imga" lazy></el-image>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            // 商品详情列表
            goodsdetaillist: '',
            //滚动条滚动广告显示或隐藏
            ispullapp2: true,
            // 滚动条高度
            distance: 0,
            // 其它选项是否显示
            ismorechoice: false,
            titlelist: ['商品', '评价', '参数', '详情'],
            num: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            swiperOptions: {
                loop: true,
                autoplay: true,
            },
        };
    },
    computed: {
        ispullapp() {
            return this.$store.state.ispullapp;
        },
        componentName() {
            return this.$store.state.componentName;
        },
        ispullapp() {
            return this.$store.state.ispullapp;
        },
    },
    methods: {
        // 关闭顶部app横幅
        closeapp() {
            this.$store.commit('closeapp');
            let sub = 0;
            for (let i = 0; i < arr.length; i++) {}
        },
        getDate() {
            let that = this;
            let id = this.$route.query.id;
            let url = 'http://localhost:8080/data/goodsdetail.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.goodsdetaillist = response.data.goodsdetaillist[id];
                    console.log(that.goodsdetaillist);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 得到滚动条高度
        getDistance() {
            this.distance = this.$refs.wrap.scrollTop;
            // console.log(this.distance);
        },
        goback() {
            this.$router.go(-1);
        },
        // 其它选项显示切换
        tabmorechoice() {
            this.ismorechoice = !this.ismorechoice;
        },
        btnTitleText(index) {
            this.num = index;
        },
        btnTitleText2(index) {
            this.num2 = index;
        },
        btnTitleText3(index) {
            this.num3 = index;
        },
        btnTitleText4(index) {
            this.num4 = index;
        },
        toHome(name) {
            this.$router.push({
                path: '/',
            });
            this.$store.commit('btnClick', name);
            this.ismorechoice = false;
        },
        // 去搜索页面
        tosearch() {
            this.$router.push({
                path: '/search',
            });
            this.ismorechoice = false;
        },
    },
    activated() {
        this.getDate();
    },
    watch: {
        // 监听滚动条高度判断app横幅是否显示
        distance(newVal) {
            if (this.ispullapp) {
                if (newVal != 0) {
                    this.ispullapp2 = false;
                } else {
                    this.ispullapp2 = true;
                }
            } else {
                if (newVal != 0) {
                    this.ispullapp2 = false;
                } else {
                    this.ispullapp2 = true;
                }
            }
        },
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
}
.top-bar {
    width: 100%;
    flex-shrink: 0;
}
.header-pullapp-wrap {
    width: 100%;
}
.header-pullapp {
    width: 100%;
    height: 2.7rem;
    background-color: #333;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 4;
}
.header-pullapp-close {
    width: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}
.header-pullapp-close > span {
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon-app-close.png) no-repeat;
    background-size: 0.85rem 0.85rem;
}
.header-pullapp-img {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
}
.header-pullapp-txtbox {
    margin-left: 0.5rem;
    flex-grow: 1;
}
.header-pullapp-txtbox-title {
    font-size: 0.65rem;
    height: 0.93rem;
    line-height: 0.93rem;
    color: #fff;
}
.header-pullapp-txtbox-txt {
    font-size: 0.55rem;
    margin-top: 0.1rem;
    height: 0.786rem;
    line-height: 0.786rem;
    color: rgba(255, 255, 255, 0.6);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}
.header-pullapp-btnbox {
    display: block;
    font-size: 0.55rem;
    margin-right: 0.6rem;
    height: 1.1rem;
    line-height: 1.1rem;
    color: #333;
    max-width: 2.9rem;
    overflow: hidden;
    background: #fff;
    padding: 0 0.4rem;
    border-radius: 0.15rem;
    flex-shrink: 0;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s;
}
.v-enter,
.v-leave-to {
    opacity: 0;
}
.header-title-wrap {
    padding: 0 0.8rem;
    width: 100%;
    height: 2rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-title-wrap > .back {
    flex-shrink: 0;
    width: 1.2rem;
    height: 1.2rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_black_1.png);
    background-size: cover;
}
.header-title-text {
    flex: 1;
    height: 1.5rem;
    margin: 0 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-title-text > li {
    height: 100%;
    color: #191919;
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-title-text > li.active {
    position: relative;
    color: #ca141d;
}
.header-title-text > li.active::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 1.2rem;
    height: 0.1rem;
    border-radius: 0.05rem;
    background-color: #ca141d;
}
.header-title-wrap > .morechoice {
    width: 1.2rem;
    height: 1.2rem;
    background: transparent url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_header_nav.png) scroll no-repeat;
    background-size: cover;
}
.morechoice-box {
    width: 5.2rem;
    position: fixed;
    top: 2.3rem;
    right: 0.5rem;
    border-radius: 0.25rem;
    background-color: #fff;
    box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
    opacity: 0.9;
}
.morechoice-content {
    height: 2rem;
    border-bottom: 1px solid rgba(213, 213, 213, 0.5);
    padding: 0 0 0 0.7rem;
    display: flex;
    align-items: center;
}
.morechoice-content > i {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
}
.morechoice-content > .i1 {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon-home-black.png) no-repeat center;
    background-size: 1.2rem 1.2rem;
}
.morechoice-content > .i2 {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_search_black.png) no-repeat center;
    background-size: 1.2rem 1.2rem;
}
.morechoice-content > .i3 {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_menu_category_black.png) no-repeat center;
    background-size: 1.2rem 1.2rem;
}
.morechoice-content > .i4 {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_cart_black.png) no-repeat center;
    background-size: 1.2rem 1.2rem;
}
.morechoice-content > .i5 {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_person_black.png) no-repeat center;
    background-size: 1.2rem 1.2rem;
}
.morechoice-content > span {
    padding-left: 0.4rem;
    font-size: 0.7rem;
    line-height: normal;
    color: #333;
}
.goodsdetail-wrap {
    width: 100%;
    flex-grow: 1;
    overflow: auto;
    background-color: #f9f9f9;
}
.swiper-box {
    height: 94.44vw;
    background-color: #fff;
    position: relative;
    padding: 0 0.5rem;
}
.swiper-box .img-box {
    width: 100%;
}
.swiper-box .img-box > img {
    width: 100%;
}
.space-gap {
    width: 100%;
    height: 0.5rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_mask_img.png) no-repeat center;
    background-size: contain;
}
.swiper-title-wrap {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 0.8rem;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
}
.swiper-title-wrap > .back {
    flex-shrink: 0;
    width: 1.2rem;
    height: 1.2rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_back_grey.png);
    background-size: cover;
}
.swiper-title-wrap > .morechoice {
    width: 1.2rem;
    height: 1.2rem;
    background: transparent url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_more_grey.png) scroll no-repeat;
    background-size: cover;
}
.morechoice-box2 {
    width: 5.2rem;
    position: absolute;
    top: 2.3rem;
    right: 0.5rem;
    border-radius: 0.25rem;
    background-color: #fff;
    box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
    opacity: 0.9;
}
.price-name-box {
    width: 100%;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(234, 234, 234, 0.5);
}
.p-price {
    color: #e01d20;
    padding: 0 0 0.3em;
    font-size: 1rem;
}
.p-price > span {
    margin-right: 0.4rem;
    font-weight: bold;
}
.p-price > span > em {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
}
.p-price > span > i {
    font-style: normal;
}
.p-price > del {
    font-size: 0.6rem;
    color: #999;
    font-style: normal;
    font-weight: 400;
}
.p-name {
    background-color: #fff;
    padding-bottom: 0.4rem;
    line-height: 1.2;
}
.p-name > h1 {
    font-size: 0.75em;
    line-height: 1.3em;
    font-weight: bold;
    max-height: 2.6em;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: 0.1em;
}
.moreactivity {
    max-height: 1.4em;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding-right: 0.7em;
    font-size: 0.55em;
    color: #888;
    line-height: 1.2em;
    word-break: break-all;
}
.moreactivity > span {
    color: #ca141d;
    /* border-bottom:.5rem solid #ca141d ; */
    border-bottom: 1px solid #ca141d;
}
.cuxiao {
    width: 100%;
    padding: 0.55rem 0.8rem 0.55rem 0.8rem;
    background-color: #fff;
    display: flex;
    margin-bottom: 0.5rem;
}
.cuxiao > label {
    flex-shrink: 0;
    margin-top: -0.15rem;
    height: 1rem;
    min-width: 2.4rem;
    font-size: 0.6rem;
    line-height: normal;
    color: #333;
    font-weight: bold;
}
.cuxiao > ul {
    flex-grow: 1;
}
.cuxiao > ul > li {
    margin-bottom: 0.23rem;
    display: flex;
}
.cuxiao > ul > li:nth-child(3n) {
    margin-bottom: 0;
}
.cuxiao > ul > li > div {
    flex-shrink: 0;
    padding: 0 0.3rem;
    margin-right: 0.3rem;
    min-width: 2rem;
    height: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(239, 90, 98, 0.5);
    font-size: 0.5rem;
    color: #ef5a62;
    line-height: 0.8rem;
}
.cuxiao > ul > li > p {
    font-size: 0.55rem;
    color: #333;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    margin-bottom: 0.05rem;
}
.cuxiao > i {
    flex-grow: 1;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon-more-right.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 0.25rem;
}
.pro-meta-sku-content {
    width: 100%;
    background-color: #fff;
    padding: 0 0.8rem;
    margin-bottom: 0.5rem;
}
.peizhi,
.color,
.banben {
    padding: 0.3em 0;
    display: flex;
}
.pro-meta-sku-content .title {
    flex-shrink: 0;
    width: 2.4rem;
    font-size: 0.6rem;
    line-height: 1.4;
    color: #333;
    display: block;
    font-weight: bold;
    padding-right: 0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.pro-meta-sku-content .list {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
}
.pro-meta-sku-content .item {
    max-width: 100%;
    min-width: 1em;
    font-size: 0.6em;
    height: 1.95em;
    line-height: 1.95em;
    padding: 0 1em;
    border-radius: 1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: text-bottom;
    border: 1px solid rgba(178, 178, 178, 0.5);
    margin: 0.3em 0.5em 0.3em 0;
    background-color: #fff;
}
.pro-meta-sku-content .item.active {
    border-color: #ca151e;
    color: #ca151e;
}
.evaluate-box {
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.5rem;
}
.evaluate-header {
    width: 100%;
    padding: 0.8rem 0.8rem 0;
    display: flex;
    align-items: center;
}
.evaluate-num {
    flex-grow: 1;
    font-size: 0.7rem;
    color: #333;
    font-weight: bold;
}
.evaluate-pre {
    flex-shrink: 0;
    font-size: 0.65rem;
    color: #ca141d;
}
.evaluate-series {
    flex-shrink: 0;
    margin-left: 0.1rem;
    font-size: 0.65rem;
    color: #666;
}
.evaluate-more {
    flex-shrink: 0;
    display: block;
    margin-left: 0.2rem;
    width: 0.6rem;
    height: 1.2rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon-more-arrow-1.png) no-repeat center;
    background-size: contain;
}
.evaluate-content {
    width: 100%;
    padding: 0.6rem 1.2rem;
    box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
}
.evaluate-content-right {
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
    margin-left: 0.7rem;
}
.evaluate-content-right > img {
    width: 100%;
    height: 100%;
}
.evaluate-content-left {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.evaluate-content-left > .head-img-box {
    width: 100%;
    display: flex;
}
.evaluate-content-left > .head-img-box > .head-img {
    margin-right: 0.4rem;
    width: 1.2rem;
    height: 1.2rem;
}
.evaluate-content-left > .head-img-box > .head-img > img {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
}
.evaluate-name-box {
    display: flex;
    flex-direction: column;
}
.evaluate-name {
    font-size: 0.55rem;
    color: #666;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-style: normal;
    font-weight: 400;
}
.evaluate-dengji {
    width: 3.3rem;
    height: 0.5rem;
    background: transparent url(https://res.vmallres.com/nwap/20201115/images/echannelWap/star/star6.png) repeat-x;
    background-size: 3.5rem 1rem;
    background-position: 0 bottom;
}

.evaluate-content-left > .evaluate-content-txt {
    font-size: 0.6rem;
    color: #333;
    margin-top: 0.6rem;
    line-height: normal;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.consult-area {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.consult-area > p {
    width: 6rem;
    height: 1.5rem;
    line-height: 1.55rem;
    border-radius: 1rem;
    border: 1px solid #e0e0e0;
    text-align: center;
    font-size: 0.65rem;
    margin: 0.8rem 0;
    margin-right: 0.3rem;
}
.loading-action {
    text-align: center;
    padding: 0.15rem 0 0.75rem 0;
    height: 0.3rem;
}
.loading-action > i {
    display: block;
    background-image: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon-line.png);
    width: calc(100% - 150px);
    height: 0.3rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: auto;
}
</style>

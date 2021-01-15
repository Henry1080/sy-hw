<template>
    <div class="container">
        <!-- 顶部app横幅 -->
        <div class="header-pullapp" v-if="ispullapp" v-show="ispullapp2">
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
        <!-- 搜索框 -->
        <header class="header-serch">
            <div class="header-search-log">
                <img src="https://res.vmallres.com/nwap/20201115/images/echannelWap/logo/logo_vmall.png" alt="" />
            </div>
            <div class="search" @click="tosearch">
                <div class="search-content">Mate40 系列</div>
            </div>
            <div class="shortcut">
                <div class="message"></div>
                <div class="denglu">
                    <!-- 未登录 -->
                    <div class="nodenglu" v-if="isdenglu == false">登录</div>
                    <!-- 已登录 -->
                    <div class="yidenglu" v-else></div>
                </div>
            </div>
        </header>
        <!-- 其他页面导航 -->
        <div class="other-page">
            <!-- 默认隐藏 -->
            <div class="hide" v-if="isotherpage == false">
                <div class="detail">
                    <span>
                        <span>推荐</span>
                    </span>
                    <span>
                        <a href="https://msale.vmall.com/huaweizone.html">华为专区</a>
                    </span>
                    <span>
                        <a href="https://msale.vmall.com/mossel.html">莫塞尔专区</a>
                    </span>
                    <span>
                        <a href="https://msale.vmall.com/smarthome.html">智能家居</a>
                    </span>
                    <span>
                        <a href="https://msale.vmall.com/pseries.html">P40系列</a>
                    </span>
                    <span>
                        <a href="https://msale.vmall.com/ptpd.html">拼团</a>
                    </span>
                </div>
                <div class="jiantou-box" @click="isotherpagebtn">
                    <div class="jiantou"></div>
                </div>
            </div>
            <!-- 点击张开 -->
            <div class="appear" v-else>
                <h3>
                    <span>全部</span>
                    <div class="jiantou2-box">
                        <div class="jiantou2" @click="isotherpagebtn"></div>
                    </div>
                </h3>
                <ul class="channel-list">
                    <li>
                        <div class="active">
                            <a class="active">推荐</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://msale.vmall.com/huaweizone.html">华为专区</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://msale.vmall.com/mossel.html">莫塞尔专区</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://msale.vmall.com/smarthome.html">智能家居</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://msale.vmall.com/pseries.html">P40系列</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="https://msale.vmall.com/ptpd.html">拼团</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mask" v-show="isotherpage"></div>
        </div>
        <!-- 主要内容 -->
        <div class="wrap" ref="wrap" @scroll="fun1">
            <!-- 轮播图 -->
            <div class="swiper-box">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in swiperlist" :key="item.id">
                        <div class="img-box">
                            <img :src="item.img" alt="" />
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!-- 首页焦点 -->
            <div class="backpic-squared">
                <div class="backpic-squared-box">
                    <swiper ref="mySwiper" :options="swiperOptions2" class="swiperBox2">
                        <swiper-slide class="swiper2">
                            <a href="https://m.vmall.com/member/privilege">
                                <div class="swiper2-img swiper2-img1"></div>
                                <p>会员领券</p>
                            </a>
                            <a href="https://msale.vmall.com/hwsmh.html">
                                <div class="swiper2-img swiper2-img2"></div>
                                <p>华为数码</p>
                            </a>
                            <a href="https://msale.vmall.com/education.html">
                                <div class="swiper2-img swiper2-img3"></div>
                                <p>华为智慧屏</p>
                            </a>
                            <a href="https://msale.vmall.com/smarthome2020.html">
                                <div class="swiper2-img swiper2-img4"></div>
                                <p>好物注册</p>
                            </a>
                            <a href="https://vmall-m.aihuishou.com/">
                                <div class="swiper2-img swiper2-img5"></div>
                                <p>以旧换新</p>
                            </a>
                        </swiper-slide>
                        <swiper-slide class="swiper2">
                            <a href="https://m.vmall.com/member/inviteGift">
                                <div class="swiper2-img swiper2-img6"></div>
                                <p>邀请有礼</p>
                            </a>
                            <a href="https://m.vmall.com/openTest">
                                <div class="swiper2-img  swiper2-img7"></div>
                                <p>智慧生活</p>
                            </a>
                            <a href="https://m.vmall.com/live/home">
                                <div class="swiper2-img swiper2-img8"></div>
                                <p>直播频道</p>
                            </a>
                            <a href="https://msale.vmall.com/points.html">
                                <div class="swiper2-img swiper2-img9"></div>
                                <p>积分商城</p>
                            </a>
                            <a href="https://msale.vmall.com/smarthome.html">
                                <div class="swiper2-img swiper2-img10"></div>
                                <p>精选特卖</p>
                            </a>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="home-head-more">
                        <a href="https://m.vmall.com/content/category" class="home-head-more-left">
                            <img src="https://res.vmallres.com/nwap/20200715/images/echannelWap/logo/logo_wapHeadNews.png" alt />
                        </a>
                        <a href="https://m.vmall.com/newContent/detail?contentId=5ff2f0cf4be4143fadc56692" class="home-head-more-mid">【0元试用】雷士照明护眼台灯新品试用中，等你来</a>
                        <a href="https://m.vmall.com/content/index" class="home-head-more-right">更多</a>
                    </div>
                </div>
            </div>
            <!-- 限时购 -->
            <div class="seckill">
                <div class="home-head-sale">
                    <span class="home-head-sale-title">限时购</span>
                    <span class="sale-icon"></span>
                    <span class="home-head-sale-time">{{ hour }}:{{ min }}:{{ sec }}</span>
                    <span class="tip-name">后结束</span>
                </div>
                <div class="home-mid-tab">
                    <div class="home-mid-tab-box">
                        <div class="home-mid-tab2" v-for="item in seckilllist" :key="item.id">
                            <a :href="item.href">
                                <!-- 图片区域 -->
                                <div class="img-area">
                                    <div class="img-box">
                                        <img :src="item.img" alt />
                                    </div>
                                    <!-- 标题 -->
                                    <p class="home-mid-title">{{ item.title }}</p>
                                </div>
                                <!-- 优惠 -->
                                <p class="home-mid-price">{{ item.discount }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 广告投放区 -->
            <div class="channel-ads">
                <div class="home-mid-content">
                    <ul class="home-mid-ul">
                        <li class="home-mid-li1">
                            <div class="home-mid-li1-img">
                                <a href="https://msale.vmall.com/nova.html">
                                    <img src="https://res.vmallres.com/pimages//pages/picImages/76141046401614014167.jpg" alt />
                                </a>
                            </div>
                        </li>
                        <li class="home-mid-li2">
                            <div>
                                <a href="https://m.vmall.com/product/10086269031277.html">
                                    <img class="home-mid-content-img" src="https://res.vmallres.com/pimages//pages/picImages/10233980501618933201.png" alt />
                                </a>
                            </div>
                            <div>
                                <a href="https://m.vmall.com/product/10086882694240.html">
                                    <img class="home-mid-content-img" src="https://res.vmallres.com/pimages//pages/picImages/44464625501612646444.jpg" alt />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="home-mid-content2">
                    <ul class="home-mid-ul2">
                        <li class="home-mid-li3">
                            <a href="https://m.vmall.com/product/10086593188778.html">
                                <img src="https://res.vmallres.com/pimages//pages/picImages/64169590201619596146.jpg" alt />
                            </a>
                        </li>
                        <li class="home-mid-li3">
                            <a href="https://m.vmall.com/openTest">
                                <img src="https://res.vmallres.com/pimages//pages/picImages/63192778501617729136.png" alt />
                            </a>
                        </li>
                    </ul>
                    <ul class="home-mid-ul2">
                        <li class="home-mid-li3">
                            <a href="https://msale.vmall.com/mate.html">
                                <img src="https://res.vmallres.com/pimages//pages/picImages/04730067980616003740.png" alt />
                            </a>
                        </li>
                        <li class="home-mid-li3">
                            <a href="https://msale.vmall.com/ptpd.html">
                                <img src="https://res.vmallres.com/pimages//pages/picImages/05945572501617554950.png" alt />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="channel-floor-list3">
                    <ul class="home-mid-ul3">
                        <li class="home-mid-li4" v-for="item in adslist" :key="item.id">
                            <a href="#">
                                <div class="channel-floor-img">
                                    <img :src="item.img" alt />
                                </div>
                                <p class="channel-floor-title">{{ item.title }}</p>
                                <p class="channel-floor-data">{{ item.data }}</p>
                                <span class="channel-floor-price">{{ item.price1 }}</span>
                                <span class="channel-floor-price2" v-if="item.price2">{{ item.price2 }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 商品推荐 -->
            <div class="goodsRecommend">
                <div class="h">
                    <h2>精品推荐</h2>
                </div>
                <div class="goods-list">
                    <div class="goods-item" v-for="item in goodslist" :key="item.id">
                        <a href="#">
                            <div class="goods-item-img">
                                <div class="goods-item-img-box">
                                    <img :src="item.img" alt="" />
                                </div>
                                <div class="goods-item-discount">{{ item.discount }}</div>
                            </div>
                            <p class="goods-item-name">{{ item.name }}</p>
                            <p class="goods-item-price">
                                <span class="now-price">{{ item.price }}</span>
                                <span class="gone-price" v-if="item.price2">{{ item.price2 }}</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="home-bottom-line"></div>
            <!-- 商品分类 -->
            <div class="goods-sort">
                <div class="sort-list" v-for="item in sortlist" :key="item.id">
                    <div class="sort-list-title">{{ item.title }}</div>
                    <!-- 二级数据上方大的 -->
                    <div class="sort-item-box">
                        <div class="sort-item-box2">
                            <div class="sort-item" v-for="item2 in item.itemlist2" :key="item2.id">
                                <div class="sort-item-img">
                                    <div class="sort-item-img-box">
                                        <img :src="item2.img" alt="" />
                                    </div>
                                    <div class="sort-item-discount">{{ item2.discount }}</div>
                                </div>
                                <div class="sort-item-name">{{ item2.name }}</div>
                                <div class="sort-item-price">
                                    <div class="sort-item-price-now">{{ item2.price }}</div>
                                    <div class="sort-item-price-gone" v-if="item2.price2">{{ item2.price2 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 下侧小的 -->
                    <div class="sort-item2" v-if="item.itemlist3">
                        <div class="goods-item" v-for="item3 in item.itemlist3" :key="item3.id">
                            <a href="#">
                                <div class="goods-item-img">
                                    <div class="goods-item-img-box">
                                        <img :src="item3.img" alt="" />
                                    </div>
                                    <div class="goods-item-discount">{{ item3.discount }}</div>
                                </div>
                                <p class="goods-item-name">{{ item3.name }}</p>
                                <p class="goods-item-price">
                                    <span class="now-price">{{ item3.price }}</span>
                                    <span class="gone-price" v-if="item3.price2">{{ item3.price2 }}</span>
                                </p>
                            </a>
                        </div>
                    </div>
                    <footer class="sort-more">
                        <a :href="item.href">
                            <span class="sort-more-txt">{{ item.more }}</span>
                        </a>
                    </footer>
                </div>
            </div>
            <!-- 底部区域 -->
            <div class="bottom-area">
                <div class="login">
                    <!-- 登录/退出 -->
                    <div class="loginbtn">
                        <p v-if="isdenglu == false">登录</p>
                        <p v-else>退出</p>
                    </div>
                    <!-- 反馈 -->
                    <a href="http://club.huawei.com/thread-1144534-1-1.html">反馈</a>
                </div>
                <div class="touch">
                    <a href="https://m.vmall.com/app/download" class="ke">
                        <i></i>
                        <span>客户端</span>
                    </a>
                    <a href="#" class="chu">
                        <i></i>
                        <span>触屏版</span>
                    </a>
                    <a href="https://www.vmall.com/?validated=true&themeName=huawei&loginChannel=26000000&reqClientType=26&lang=zh-cn" class="dian">
                        <i></i>
                        <span>电脑版</span>
                    </a>
                </div>
                <div class="copyright">
                    <a href="https://consumer.huawei.com/minisite/cloudservice/vmall/privacy-statement.htm?country=CN&language=zh_CN">隐私政策</a>
                    <a href="https://consumer.huawei.com/minisite/cloudservice/vmall/terms.htm?country=CN&language=zh_CN">用户协议</a>
                    <a href="https://consumer.huawei.com/minisite/cloudservice/vmall/cookies.htm?country=CN&language=zh_CN">关于Cookie</a>
                    <br />
                    <span> Copyright 2012-2021 VMALL.COM 版权所有</span>
                    <br />
                    <a href="https://res.vmallres.com/pimages///sale/2019-04/Vhy8y3yxVJXg0FE74dh0.png">营业执照</a>
                    <span> 备案主体编号：44201919072182</span>
                    <br />
                    <a href="https://beian.miit.gov.cn/#/home">粤ICP备19015064号</a>
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44190002003939">粤公网安备 44190002003939号</a>
                    <br />
                    <span>增值电信业务经营许可证：粤B2-20190762</span>
                </div>
            </div>
            <el-backtop target=".wrap" class="backtop" :bottom="70" :right="11.4">
                <span></span>
            </el-backtop>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            // 顶部app横幅是否显示
            ispullapp: true,
            //滚动条滚动显示或隐藏
            ispullapp2: true,
            // 其他页面隐藏张开
            isotherpage: false,
            swiperlist: [],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                },
                loop: true,
                autoplay: true,
            },
            swiperOptions2: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'my-bullet2',
                    bulletActiveClass: 'my-bullet-active2',
                },
            },
            hour: '00',
            min: '00',
            sec: '00',
            // 秒杀列表
            seckilllist: [],
            // 广告列表
            adslist: [],
            // 精品推荐商品列表
            goodslist: [],
            // 商品分类列表
            sortlist: [],
            // 滚动条高度
            distance: 0,
        };
    },
    computed: {
        isdenglu() {
            return this.$store.state.isdenglu;
        },
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {
        // 关闭顶部app横幅
        closeapp() {
            this.ispullapp = false;
        },
        // 隐藏页面切换
        isotherpagebtn() {
            this.isotherpage = !this.isotherpage;
        },
        time() {
            var that = this;
            var interval = setInterval(function timestampToTime() {
                var date = new Date('2021-01-23 00:00:00') - new Date();
                //new Date当前的时间戳，也可以换成自定义的时间戳
                if (date > 0) {
                    let time = date / 1000;
                    // 获取时、分、秒,毫秒
                    that.hour = parseInt((time % (60 * 60 * 24)) / 3600) < 10 ? '0' + parseInt((time % (60 * 60 * 24)) / 3600) : parseInt((time % (60 * 60 * 24)) / 3600);
                    that.min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10 ? '0' + parseInt(((time % (60 * 60 * 24)) % 3600) / 60) : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
                    that.sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10 ? '0' + parseInt(((time % (60 * 60 * 24)) % 3600) % 60) : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
                } else {
                    //活动已结束，全部设置为'00'
                    // console.log("aaa")
                    (that.hour = '00'), (that.min = '00'), (that.sec = '00');
                }
            }, 100);
            
        },
        fun1() {
            this.distance = this.$refs.wrap.scrollTop;
            // console.log(this.distance);
        },
        // 去搜索页面
        tosearch() {
            this.$router.push({
                path: '/search',
            });
        },
        // 获取数据
        getData() {
            let that = this;
            let url = 'http://localhost:8080/data/swiperlist.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.swiperlist = response.data.list;
                    that.seckilllist = response.data.list2;
                    that.adslist = response.data.adslist;
                    that.goodslist = response.data.goodslist;
                    that.sortlist = response.data.sortlist;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.time(), 
        this.getData();
    },
    activated() {
        // 切入组件回到原来的滚动条高度
        this.$refs.wrap.scrollTop = this.distance;
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
                this.ispullapp2 = false;
            }
        },
    },
    // mounted() {
    //     console.log('Current Swiper instance object', this.swiper);
    //     this.swiper.slideTo(3, 1000, false);
    // },
};
</script>

<style scoped>
.container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
}
.header-pullapp {
    flex-shrink: 0;
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
.header-serch {
    flex-shrink: 0;
    width: 100%;
    height: 2rem;
    background: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 4;
}
.header-search-log {
    flex-shrink: 0;
    width: 3.05rem;
    height: 0.65rem;
    margin-left: 0.4rem;
}
.search {
    flex-grow: 1;
    height: 1.6rem;
    margin-left: 0.4rem;
    border-radius: 0.8rem;
    overflow: hidden;
}
.search-content {
    width: 100%;
    height: 1.6rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_search.png) no-repeat 0.4rem center;
    background-size: 0.7rem 0.7rem;
    background-color: rgba(155, 155, 155, 0.1);
    font-size: 0.65rem;
    color: #b3b3b3;
    height: 1.6rem;
    line-height: 2.6;
    padding: 0 0.4rem 0 1.6rem;
}

.shortcut {
    flex-shrink: 0;
    padding: 0 0.4rem;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.message {
    padding: 0.6rem;
    margin: 0 0.3rem;
    background: transparent url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_message_black.png) scroll no-repeat;
    background-size: 1.2rem 1.2rem;
    background-position: center;
}
.denglu {
    padding: 0.3rem;
}
.nodenglu {
    font-size: 0.65rem;
    color: #4c4c4c;
}
.yidenglu {
    padding: 0.6rem;
    margin: 0 0.3rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon_personal.png);
    background-size: 1.2rem 1.2rem;
    background-position: center;
}
.other-page {
    width: 100%;
    flex-shrink: 0;
    position: relative;
}
.other-page > .hide {
    width: 100%;
    height: 1.7rem;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.other-page > .hide > .detail {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    font-size: 0.7rem;
    white-space: nowrap;
}
.other-page > .hide > .detail > span {
    padding: 0 0.75rem;
}
.other-page > .hide > .detail > span > span {
    padding: 0 0 0.1rem 0;
    color: #cc0e11;
    border-bottom: 0.1rem solid #cc0e11;
}
.other-page > .hide > .detail > span > a {
    color: #777;
}
.other-page > .hide > .jiantou-box {
    flex-shrink: 0;
    margin-right: 0.4rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.other-page > .hide > .jiantou-box > .jiantou {
    width: 0.5rem;
    height: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/more_down.png);
}
.other-page > .appear {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
}
.other-page > .appear > h3 {
    font-size: 0.7rem;
    height: 1.5rem;
    padding: 0 0.4rem 0 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.other-page > .appear > h3 > .jiantou2-box {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.other-page > .appear > h3 > .jiantou2-box > .jiantou2 {
    width: 0.5rem;
    height: 0.5rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/more_up.png);
}
.other-page > .appear > .channel-list {
    padding: 0.8rem 0.9rem 0 0.9rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #fff;
}
.other-page > .appear > .channel-list > li {
    width: 5rem;
    height: 2.3rem;
    text-align: center;
}
.other-page > .appear > .channel-list > li > div {
    border: 0.035rem solid #eaeaea;
    border-radius: 0.75rem;
    height: 1.5rem;
    text-align: center;
}
.other-page > .appear > .channel-list > li > div.active {
    border-color: #ca141d;
}
.other-page > .appear > .channel-list > li > div > a {
    display: block;
    font-size: 0.65rem;
    font-family: HYQiHei-EES;
    color: #333;
    width: 3.8rem;
    height: 1.5rem;
    margin: 0 auto;
    line-height: 1.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.other-page > .appear > .channel-list > li > div > a.active {
    color: #ca141d;
}
.wrap {
    width: 100%;
    flex-grow: 1;
    overflow: auto;
}

.mask {
    position: fixed;
    z-index: 3;
    background: rgba(0, 0, 0, 0.27);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.swiper-box {
    width: 100%;
    height: 7.35rem;
    padding-top: 0.2rem;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.img-box {
    height: 100%;
    padding: 0 0.3rem;
}
.swiper-box img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
}
.swiper-pagination /deep/.my-bullet {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: none;
    border: 0.025rem solid #fff;
    opacity: 1;
    margin: 0 4px;
}
.swiper-pagination /deep/.my-bullet-active {
    background-color: #fff;
}
.backpic-squared {
    width: 100%;
    height: 159.13px;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/bg/bg-home-squard.png);
    background-position: top center;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
}
.backpic-squared-box {
    height: 100%;
    padding: 0 0.2rem;
    overflow: hidden;
}

.swiper2 {
    padding-top: 1.8rem;
}
.swiper2 > a {
    display: inline-block;
    width: 20%;
    height: 100%;
    text-align: center;
    color: black;
    font-size: 0.55rem;
}

.swiper2-img {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    background: url(https://res.vmallres.com/pimages//squaredInfo/icon/8/713ae64f736b10003ab9f9092059185b.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.swiper2-img1 {
    background-position-x: 0%;
}
.swiper2-img2 {
    background-position-x: 11.11%;
}
.swiper2-img3 {
    background-position-x: 22.22%;
}
.swiper2-img4 {
    background-position-x: 33.33%;
}
.swiper2-img5 {
    background-position-x: 44.44%;
}
.swiper2-img6 {
    background-position-x: 55.56%;
}
.swiper2-img7 {
    background-position-x: 66.67%;
}
.swiper2-img8 {
    background-position-x: 77.78%;
}
.swiper2-img9 {
    background-position-x: 88.89%;
}
.swiper2-img10 {
    background-position-x: 100%;
}
.swiper2 p {
    padding-top: 8px;
}
.swiper-pagination /deep/.my-bullet2 {
    width: 0.4rem;
    height: 0.1rem;
    margin: 0 0.1rem;
    background-color: #fff;
    border-radius: 0.1rem;
    display: inline-block;
}
.swiper-pagination /deep/.my-bullet-active2 {
    background-color: #777;
}
.home-head-more {
    width: 100%;
    height: 2rem;
    display: flex;
    margin-top: 0.5rem;
}

.home-head-more-left {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-head-more-left > img {
    width: auto;
    height: 0.6rem;
}

.home-head-more-mid {
    width: 65%;
    color: #4d4d4d;
    font-size: 0.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.home-head-more-right {
    width: 15%;
    color: #999;
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.seckill {
    width: 100%;
    text-align: center;
    background-image: linear-gradient(-180deg, #f9f9f9 0%, #ffffff 100%);
}
.home-head-sale {
    width: 100%;
    padding: 0.7rem 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.home-head-sale-title {
    font-size: 0.8rem;
    display: block;
    color: #4d4d4d;
}
.sale-icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAzlJREFUSIm9lk9oHGUYxn/vzO7MBCn0IHjqQU1rS5sEia34B6EEtEWqYAkY8ChUPXnpQa8eglRa8c9FPYm9iqBgRA8WF7WWVEkb02Qlih56KQhF2szszPd42NnNbLLZnUmj7+XbmV2e3z7v93zvjLGN0smx+zKzJQNJJAaJpMTMEieXeHgJUixITJz3P7vy3kaN2rbAZh8YBBIYhJIwDDnh4dG+BsR1L7n9cT+NyuD05PgJOaa6MKn9Z8hXOWjfl2Qz9uVvN+8YrOOjoRPvF6EG5Oz8g4GE4Gz98ysXttKqBHbhyGll2tNm5M5yp91FwoOr/oheH6RlZaF69tCeDGsCYdFZEZqvSZp549HcwvIgvdKOM8c5UJgHqt3mPNY9bUevRXNXB0KhpOPWMwcfM1mDDXvZZ68v1OYWj9p6D7Ysb9gPND3tk9lHygQOlAkEcp3Vda5v1uRmykChRKvdraVXkfb3OHOFdnfuixft66XrZaAwpNU6se/utFVfBXZ1A8XmQEmcD7759YWyUBjiuNWqn/VglwakWPBXvZ68UgUKAxwnxw4eNqefegJlmwIlZTwafLv0446ABZY+eeAXZONdaNdx78QySCXFJosdin3aq4lYIkb6JGgsv7OR0bfVrakDL5Mxvvm8tidWz4wWNaAm6S4D3PqsBuPtemP53X6MvmBDEdgZyUUeFjlHCEQ4RYZFwh0xbLd6J1axM0I6FXy/8mE//TajYmnq0D2tVvoHUlQMXGGirfnypms/XPtikE7lx2IrSd/YCEUdB7phmXesdvHa/DCdSo5vP/HAvV5G08DvTbchtOr89OhIY/XPMlqVHPsps2yCgqSLQT08bo2Vv8tqlXYcP7J/zHAL63vZ+UafBv8EM7a4mFQxUd6x3JtFaO70rfBS83QVYKfKPRYf3ve4k74rBMoZ9lJwaevjMqxKOXbOnQOvA70lp+fCy82vtgstBV6b3Ps04iHkEHbDlE5Fl39fuBMolHgRMDSLE8CKyCbDHYAOBccP7p2RY0zOGgHuyMh8uTNaprYMl6bx4+Zo00w/B97u521+vrVT0IG1NnH/qXhidPZ/gXVKk5P1tYnRp/5Lxr/6zfGm+6zJFgAAAABJRU5ErkJggg==);
    background-size: cover;
}
.home-head-sale-time {
    font-size: 0.9rem;
    color: #4d4d4d;
}
.tip-name {
    font-size: 0.5rem;
    color: #9b9b9b;
    margin-left: 0.1rem;
    line-height: 0.75rem;
}

.home-mid-tab {
    width: 100%;
    height: 118px;
    background-color: #fafafa;
    overflow: hidden;
}
.home-mid-tab-box {
    display: flex;
    overflow: auto;
    overflow-y: hidden;
}
.home-mid-tab-box::-webkit-scrollbar {
    display: none;
}
.home-mid-tab2 {
    width: 4.09rem;
    height: 5.15rem;
    flex-shrink: 0;
}
.home-mid-tab2 > a {
    display: block;
    margin-left: 0.3rem;
    height: 100%;
}
.home-mid-tab2 > a > .img-area {
    padding-top: 0.2rem;
    padding-bottom: 0.15rem;
    background: #fff;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    border-radius: 0.5rem;
}
.home-mid-tab2 > a > .img-area > .img-box {
    width: 3.05rem;
    height: 3.05rem;
    margin: 0 auto;
    word-break: break-all;
    overflow: hidden;
    max-width: 100%;
    font-size: 0;
}
.home-mid-tab2 > a > .img-area > .img-box > img {
    width: 100%;
    height: 100%;
}
.home-mid-title {
    font-size: 0.45rem;
    color: #999;
    height: 0.7rem;
    line-height: 0.7rem;
    padding: 0.2rem 0 0;
    margin: 0 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.home-mid-tab2 > a > .home-mid-price {
    font-size: 0.525rem;
    color: #ca141d;
    line-height: 1.2rem;
}

.channel-ads {
    background-color: #fff;
    padding: 0.2rem 0.3rem 0.5rem;
}
.home-mid-ul {
    display: flex;
    margin-top: 0.1em;
    width: 100%;
}

.home-mid-content2 {
    width: 100%;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    flex-direction: row;
}

.home-mid-ul2 {
    width: 50%;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    flex-direction: row;
}

.home-mid-li3 {
    width: 100%;
}

.channel-floor-list3 {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    margin-top: 0.1rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
}

.home-mid-ul3 {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    flex-direction: row;
    background-color: #fff;
}

.home-mid-li4 {
    width: 33.3%;
    background: #f9f9f9;
    margin-left: 0.1rem;
    text-align: center;
    padding: 0 0.5rem;
}

.channel-floor-img {
    width: 3.6em;
    height: 3.6em;
    padding: 0.45rem;
    margin: 0 auto;
}
.channel-floor-title {
    padding-top: 0.4rem;
    font-weight: 400;
    font-size: 0.6rem;
}
.channel-floor-price {
    font-size: 0.6rem;
}

.channel-floor-data {
    padding: 0.2rem 0 0.15rem;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    bottom: 1rem;
    background: none;
    color: #9b9b9b;
    font-size: 0.55rem;
    text-overflow: ellipsis;
    line-height: 1.2;
}
.channel-floor-price2 {
    font-size: 0.6rem;
    padding-left: 0.05rem;
    color: #999;
    text-decoration: line-through;
}

.channel-floor-data,
.channel-floor-title {
    color: #9b9b9b;
}

.channel-floor-data {
    padding: 0.2rem 0 0.15rem;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    bottom: 1rem;
    text-overflow: ellipsis;
    line-height: 1.2;
}
.goodsRecommend {
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: #fff;
    overflow: hidden;
}
.goodsRecommend > .h {
    padding: 1rem 0 0.7rem;
}
.goodsRecommend > .h > h2 {
    font-size: 0.9rem;
    color: #444;
    text-align: center;
}
.goods-list {
    padding: 0 0 0.85rem;
    display: flex;
    flex-flow: row nowrap;
    overflow: auto;
}
.goods-list::-webkit-scrollbar {
    display: none;
}
.goods-item {
    flex-shrink: 0;
    margin-left: 0.3rem;
    width: 6.2rem;
    height: 100%;
}
.goods-item-img {
    height: 6.4rem;
    background: #f9f9f9;
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
}
.goods-item-img-box {
    width: 4.2rem;
    height: 4.2rem;
    margin: 1.05rem auto 0;
}
.goods-item-img-box > img {
    width: 100%;
    height: 100%;
}
.goods-item-discount {
    width: 100%;
    height: 1rem;
    line-height: 2;
    color: #9b9b9b;
    background: rgba(155, 155, 155, 0.1);
    font-size: 0.55rem;
    padding: 0 0.55rem 0;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.goods-item-name {
    padding: 0.45rem 0.35rem 0;
    font-weight: 400;
    color: #333;
    font-size: 0.6rem;
    text-align: center;
}
.goods-item-price {
    padding: 0.3rem 0 0.8rem;
    text-align: center;
}
.now-price {
    font-size: 0.65rem;
    color: #ca141d;
}
.gone-price {
    padding-left: 0.05rem;
    color: #999;
    font-size: 0.65rem;
    text-decoration: line-through;
}
.home-bottom-line {
    width: 100%;
    height: 0.5rem;
    background-color: #f9f9f9;
}
.goods-sort {
    width: 100%;
    overflow: hidden;
    background-color: #f9f9f9;
}
.sort-list {
    background-color: #fff;
    text-align: center;
    margin-bottom: 0.5rem;
}
.sort-list-title {
    padding: 1rem 0 0.7rem;
    font-size: 0.9rem;
    color: #444;
}
.sort-item-box {
    margin: 0.3rem 0.3rem 0.2rem 0.3rem;
    text-align: center;
}
.sort-item-box2 {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
}
.sort-item-box2 > .sort-item:nth-child(2n) {
    margin-left: 0.3rem;
}
.sort-item {
    flex: 1;
    max-width: 50%;
}
.sort-item-img {
    width: 100%;
    height: 8.55rem;
    background: #f9f9f9;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
}
.sort-item-img-box {
    width: 100%;
    height: 8.55rem;
}
.sort-item-img-box > img {
    height: 6.1rem;
    width: 6.1rem;
    margin: 1.05rem auto 0;
    max-width: initial;
}
.sort-item-discount {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1.2rem;
    color: #9b9b9b;
    font-size: 0.55rem;
    background: rgba(155, 155, 155, 0.1);
    box-sizing: border-box;
    line-height: 2.3;
    padding: 0 0.55rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.sort-item-name {
    max-width: 8.55rem;
    padding: 0.4rem 0.6rem 0 0.5rem;
    margin: 0 auto;
    white-space: normal;
    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    max-height: initial;
    white-space: normal;
    font-size: 0.65rem;
    line-height: 1.4;
}
.sort-item-price {
    font-size: 0;
    padding: 0.2rem 0 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sort-item-price-now {
    font-size: 0.65rem;
    color: #ca141d;
}
.sort-item-price-gone {
    padding-left: 0.05rem;
    color: #999;
    font-size: 0.65rem;
    text-decoration: line-through;
}
.sort-more {
    padding-bottom: 0.3rem;
}
.sort-more > a {
    padding: 0.55rem;
    display: table;
    margin: 0 auto;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/arrow_right.png) no-repeat right center;
    background-size: 0.4rem 0.6rem;
}
.sort-more > a > span {
    font-size: 0.7rem;
    color: #4a4a4a;
    display: table-cell;
}
.sort-item2 {
    padding: 0 0 0.85rem;
    display: flex;
    flex-flow: row nowrap;
    overflow: auto;
}
.sort-item2::-webkit-scrollbar {
    display: none;
}
.bottom-area {
    width: 100%;
    background-color: #fff;
    margin-top: 0.4rem;
    padding: 0 0.3rem;
    overflow: hidden;
}
.login {
    max-width: 100%;
    padding: 0.25rem 0;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginbtn {
    display: block;
    width: 3.7rem;
    font-size: 0.7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
    text-align: center;
}
.loginbtn > p::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.25rem;
    height: 0.5rem;
    width: 0;
    border-right: 1px solid #eaeaea;
}
.login > a {
    display: block;
    width: 3.7rem;
    font-size: 0.7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
    text-align: center;
}
.touch {
    padding: 0.5rem 0;
    height: 2.45rem;
    border-top: 0.5px solid #eaeaea;
    text-align: center;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
}

.touch > a {
    display: block;
    margin-left: 1.8rem;
    color: #9b9b9b;
}
.touch > a:first-child {
    margin-left: 0;
}
.touch a i {
    display: block;
    height: 1.8rem;
    width: 1.8rem;
}
.touch > a:nth-child(2) {
    color: #4d4d4d;
}
.touch a i:first-child {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/bg/bg-client.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
.touch a:nth-child(2) i {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/bg/bg-touch.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
.touch a:last-child i {
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/bg/bg-pc.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
.touch a span {
    display: block;
    font-size: 0.6rem;
    line-height: 1.3;
}
.copyright {
    padding: 0.25rem 0 0.9rem;
    line-height: 0.7;
    text-align: center;
}
.bottom-area > .copyright > a:first-child,
.bottom-area > .copyright > a:nth-child(2),
.bottom-area > .copyright > a:nth-child(3) {
    padding: 0 0.5rem;
    font-size: 0.6rem;
    line-height: 1.5;
}
.bottom-area > .copyright a:first-child:before,
.bottom-area > .copyright a:nth-child(2):before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.25rem;
    height: 0.5rem;
    width: 0;
    border-right: 1px solid #eaeaea;
}
.bottom-area > .copyright a,
.bottom-area > .copyright span {
    font-size: 0.5rem;
    color: #9b9b9b;
    position: relative;
    padding: 0 0.2rem;
}
.backtop {
    width: 2.5rem !important;
    height: 2.5rem !important;
    bottom: calc(57px + 0.4rem) !important;
    right: 0.4rem !important;
}
.backtop > span {
    width: 2.5rem;
    height: 2.5rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/button-top.png) no-repeat center;
    display: inline-block;
    border-radius: 50%;
    background-size: 120% 120%;
    cursor: pointer;
}
</style>

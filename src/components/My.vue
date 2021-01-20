<template>
    <div class="container">
        <!-- 头部的头像显示状态 -->
        <header class="title">
            <!-- 左侧头像，名字 -->
            <transition-group name="fade" tag="div">
                <div key="aaa"></div>
                <!-- <div v-if="istouxiang == false"></div> -->
                <div class="touxiang" v-if="istouxiang" key="bbb">
                    <!-- 未登录 -->
                    <div class="nodenglu" v-if="isdenglu == false" @click="tologin">
                        <div class="header-img-box">
                            <img src="https://res.vmallres.com/nwap/20201115/staticm/img/personal/defaultface_user_after.png" alt="" />
                        </div>
                        <p class="header-name">
                            <span>登录/注册</span>
                        </p>
                    </div>
                    <!-- 已经登录 -->
                    <div class="yidenglu" v-else>
                        <div class="header-img-box">
                            <img src="https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0080086000148735612.20180817190414.24179636358783267547447144739106.1000.7E3B0622EF4D888BC93103DA2C98BAD29434B9809585EF962D3066CEAEB0970A.jpg" alt="" />
                        </div>
                        <p class="header-name">
                            <span>Henry</span>
                        </p>
                    </div>
                </div>
            </transition-group>
            <!-- 右侧操作 -->
            <div class="right-action">
                <div class="setting-box">
                    <i class="setting"></i>
                </div>
                <div class="message-box">
                    <i class="message"></i>
                </div>
            </div>
        </header>
        <!-- 详细信息 -->
        <div class="content" ref="wrap" @scroll="getdistance">
            <!-- 登录处 -->
            <div class="denglu-box" ref="a1">
                <div class="denglu">
                    <!-- 未登录 -->
                    <div class="nodenglu" v-if="isdenglu == false" @click="tologin">
                        <div class="box">
                            <div class="header-img-box">
                                <img src="https://res.vmallres.com/nwap/20201115/staticm/img/personal/defaultface_user_after.png" alt="" />
                            </div>
                            <div class="header-name-box">
                                <span>登录/注册</span>
                                <div class="qiandao-box">
                                    <span class="qiandao">
                                        <i></i>
                                        签到领积分
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 已经登录 -->
                    <div class="yidenglu" v-else>
                        <div class="box">
                            <div class="header-img-box">
                                <img src="https://upfile-drcn.platform.hicloud.com/FileServer/image/b.0080086000148735612.20180817190414.24179636358783267547447144739106.1000.7E3B0622EF4D888BC93103DA2C98BAD29434B9809585EF962D3066CEAEB0970A.jpg" alt="" />
                            </div>
                            <div class="header-name-box">
                                <span>Henry</span>
                                <div class="qiandao-box">
                                    <div class="vip-box">
                                        <i></i>
                                    </div>
                                    <div class="qiandao">
                                        <i></i>
                                        <span>签到领积分</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="quanyi">
                            <img src="https://res.vmallres.com/pimages//pages/adsImages/oqypn1fumnZ2OBsZh8EY.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 我的信息 -->
            <div class="m-property">
                <ul class="m-property-list">
                    <li class="property-item" v-for="item in propertyList" :key="item.id">
                        <div class="m-num-box">
                            <p class="wu" v-if="isdenglu == false">{{ item.m1 }}</p>
                            <p class="shuju" v-else>{{ item.m2 }}</p>
                        </div>
                        <p class="m-title">{{ item.text }}</p>
                    </li>
                </ul>
            </div>
            <!-- 我的订单 -->
            <div class="m-order">
                <header class="m-order-title">
                    <div class="h1" @click="btnClick('cart')">
                        <span>我的订单</span>
                    </div>
                    <div class="h2" @click="btnClick('cart')">
                        <span>全部订单</span>
                    </div>
                </header>
                <ul class="my-row">
                    <li class="row-item" v-for="item in rowlist" :key="item.id">
                        <p>
                            <i :style="'background-position:' + item.img + ';'"></i>
                        </p>
                        <div class="row-title">
                            <span>{{ item.text }}</span>
                        </div>
                    </li>
                </ul>
                <div class="adver-box">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="item in swiperlist" :key="item.id">
                            <div class="img-box">
                                <img :src="item.img" alt="" />
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <!-- 会员专享 -->
            <div class="m-vip">
                <header class="m-vip-title">
                    <div class="h1" @click="btnClick('cart')">
                        <span>会员专享</span>
                    </div>
                    <div class="h2" @click="btnClick('cart')">
                        <span>更多会员权益</span>
                    </div>
                </header>
                <div class="coupon-box">
                    <ul class="coupon-list">
                        <li class="coupon-item" v-for="item in viplist" :key="item.id">
                            <div class="list-left">
                                <div class="vip-price">
                                    ￥
                                    <span>{{ item.num1 }}</span>
                                </div>
                                <div class="vip-content">
                                    <span class="vip-content-jifen">{{ item.num2 }}</span>
                                    <span class="vip-content-text">{{ item.text }}</span>
                                </div>
                            </div>
                            <div class="list-right">
                                <span>兑换</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 我的订单 -->
            <div class="m-vmall">
                <header class="m-vmall-title">
                    <div class="h1">
                        <span>我的VMALL</span>
                    </div>
                </header>
                <ul class="my-row2">
                    <li class="row2-item" v-for="item in rowlist2" :key="item.id">
                        <p>
                            <i :style="'background-image: url(' + item.img + ')'"></i>
                        </p>
                        <div class="row2-title">
                            <span>{{ item.txt }}</span>
                        </div>
                    </li>
                </ul>
                <ul class="my-row2">
                    <li class="row2-item" v-for="item in rowlist22" :key="item.id">
                        <p>
                            <i :style="'background-image: url(' + item.img + ')'"></i>
                        </p>
                        <div class="row2-title">
                            <span>{{ item.txt }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 我的服务 -->
            <div class="m-vmall">
                <header class="m-vmall-title">
                    <div class="h1">
                        <span>我的服务</span>
                    </div>
                    <div class="h2">
                        <span>联系客服</span>
                    </div>
                </header>
                <ul class="my-row2">
                    <li class="row2-item" v-for="item in rowlist3" :key="item.id">
                        <p>
                            <i :style="'background-image: url(' + item.img + ')'"></i>
                        </p>
                        <div class="row2-title">
                            <span>{{ item.txt }}</span>
                        </div>
                    </li>
                </ul>
                <ul class="my-row2">
                    <li class="row2-item" v-for="item in rowlist33" :key="item.id">
                        <p>
                            <i :style="'background-image: url(' + item.img + ')'"></i>
                        </p>
                        <div class="row2-title">
                            <span>{{ item.txt }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 华为生活 -->
            <div class="m-vmall m-life">
                <header class="m-vmall-title">
                    <div class="h1">
                        <span>华为生活</span>
                    </div>
                </header>
                <div class="life-box">
                    <ul class="life-list">
                        <li>
                            <div>
                                <img src="https://res.vmallres.com/pimages//sale/2019-01/vbWjbV8qDpMZAEfVG6Rr.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://res.vmallres.com/pimages//sale/2019-01/SsPo08I0eVbYcxkbU6tP.png" alt="" />
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="https://res.vmallres.com/pimages//sale/2019-01/P4QEfc9ja3ryXeUhWskN.png" alt="" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 为您推荐 -->
            <div class="recommed">
                <h3>为您推荐</h3>
                <div class="menu">
                    <ul>
                        <li>
                            <div class="d1"></div>
                        </li>
                        <li>
                            <div class="d2"></div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 底部区域 -->
            <div class="bottom-area">
                <div class="login">
                    <!-- 登录/退出 -->
                    <div class="loginbtn">
                        <p v-if="isdenglu == false" @click="tologin">登录</p>
                        <p v-else @click="exitdenglu">退出</p>
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
            <el-backtop target=".content" class="backtop" :bottom="70" :right="11.4">
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
            // 头部的头像显示状态
            istouxiang: false, //默认为flase,试验为true
            distance: 0,
            // 我的信息列表
            propertyList: [],
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
            // 轮播图列表
            swiperlist: [],
            // row列表
            rowlist: [],
            // vip列表
            viplist: [],
            rowlist2: [],
            rowlist22: [],
            rowlist3: [],
            rowlist33: [],
        };
    },
    methods: {
        getdistance() {
            this.distance = this.$refs.wrap.scrollTop;
        },
        getDate() {
            let that = this;
            let url = 'http://localhost:8080/data/propertylist.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.propertyList = response.data.list;
                    that.swiperlist = response.data.swiperlist;
                    that.rowlist = response.data.rowlist;
                    that.rowlist2 = response.data.rowlist2;
                    that.rowlist22 = response.data.rowlist22;
                    that.rowlist3 = response.data.rowlist3;
                    that.rowlist33 = response.data.rowlist33;
                    that.viplist = response.data.viplist;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        btnClick(item) {
            this.$store.commit('btnClick', item);
        },
        tologin(){
            this.$router.push({
                path:"/login"
            })
        },
        exitdenglu(){
            this.$store.commit("exitdenglu")
        }
    },
    computed: {
        isdenglu() {
            return this.$store.state.isdenglu;
        },
    },
    activated() {
        this.getDate();
    },
    watch: {
        distance(newVal) {
            if (newVal >= this.$refs.a1.scrollHeight) {
                this.istouxiang = true;
            } else {
                this.istouxiang = false;
            }
        },
    },
};
</script>

<style scoped>
.container {
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    background-color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.container > .title {
    flex-shrink: 0;
    width: 100%;
    max-width: 720px;
    height: 2rem;
    background-image: linear-gradient(180deg, rgba(255, 59, 48, 0.1) 0%, rgba(255, 0, 103, 0.1) 100%), linear-gradient(rgba(202, 20, 29, 0.4), rgba(202, 20, 29, 0.4)), linear-gradient(143deg, #e41f2b 0%, #ff7346 100%);
    background-blend-mode: normal, normal, normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container > .title > div > .touxiang > .nodenglu,
.container > .title > div > .touxiang > .yidenglu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.container > .title > div > .touxiang .header-img-box {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.9rem;
    margin-right: 0.5rem;
    overflow: hidden;
    border-radius: 50%;
}
.container > .title > div > .touxiang .header-img-box > img {
    width: 100%;
    height: 100%;
}
.container > .title > div > .touxiang .header-name {
    height: 100%;
    color: #fff;
    font-size: 0.8rem;
    line-height: 2rem;
}
.container > .title > .right-action {
    height: 100%;
    display: flex;
    align-items: center;
}
.container > .title > .right-action > .setting-box {
    padding: 0.4rem 0;
}
.container > .title > .right-action > .message-box {
    padding: 0.4rem 0.5rem;
    margin: 0 0.3rem;
}
.container > .title > .right-action > .setting-box > .setting {
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    background: transparent url(https://res.vmallres.com/nwap/20201115/staticm/img/icon_setting.3e822f4.png) scroll no-repeat;
    background-size: 1.2rem 1.2rem;
    background-position: center;
}
.container > .title > .right-action > .message-box > .message {
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMAPeay+gTx9XoNNCkT7d85CNmTjxrTvJZFyGfpw7Sch3ZP44FcWEoiHq6gYVQvzXC3pBeKwE/EJ40AAAOBSURBVGje7djZlqIwEAbgHwVp2dzARtt9X9q1p97/1WbmJGGaMRggOhdz/O7oVkhSVakgXl7+G83Gfn7ptWa+afqzVu8y3zeaj7v5tNMz6YbZ60wf8JD6YmtTJnu7qEOH266RQq3toqxGl3LpNlDGoUq5VQ/F1/6dUj6G437shp5leaEb98fDD0p5LxiL1SwVyv0aN9b7VPhnK+RnfR/+cNrMTuDh90lYyCns/cmR8QZ3bcZ/8qwXIhcnWV77y4OS92UngXKQg5EM6ccGuWx+JBM2oBSL8ZgT5DYxxZxj5fqI+0eHQkUTiScoVmkt1r/dLLgjtkUc1nfLq0XMBIVNiGndK7kdMX2U0Cdmh0yfqfGXnsMnMlx9vv4oicfBv0KObxADCyVZA75pQMo1WbFsUNqGFanpQoZvXAtoWPD+IJ0A37Gghe+TbnaEGtDSyMyTOlu+MzSdWSBvq23JHr2CphW7zxJ/u7A6hza221xuUpgV2RjaxqzYLKQ56RDrh9lB2p49Fw/A1mKPtA47o+EB2Hmwo/irBvlYI2kfMKqVStVQXUv7QoS0mWwnf2PxelNdy7rKDGmsjuP0+Ikzcl0LMatlpJmSLK0SV1VdS/LURNqHZKOoEFdRXUtm4EsLfKH/ABGDQLqPn8oukTqLhmwb1w+yaO1DpH3Rb8dHpOlAum1OWeib+oVm1aQNIRST1RZndOUZP9Foa/NC/tuI1V8TmqxKxkgN0Us1LTJ7e8DzSNORlZ6FG3P9KSTZSHPZudJkJW5pRaDF0j2UdiJRNuWJ0htBxuNH4wZKc9gq2OHdxwd1lCRe8eaK/1etkgE4ixEqZkgXlDIi5RpPSOMtrUPM/P6hiRlZhddnR0z37le9iJiBh0JCMbSorvhgQEzgoIBPX7TnDRTWopWb42bu9Nwl7d+FkhsQ18pZckbyjWCNHLwBceYUas6QhGNYICHEpqWwqlJil79bnexcP4u4bwElzD4KWHd5topJ3ST3dfrVom8GLoo5sd+v8Muh80FU6b6flivDORjx56ldDSil1kdRDtt4AW9EKvbYQ2EGP4QvfFKoda7lz0+2cvhRv176+KEWzQ8o65Re5drtzUf7tfbLqLDz4DnLyft2cDwOztvR29KpQ9OWEpUYTxCRcPbwDDYpOqCmUCT5FM/h8Q3exVOIt8LeFU9TH/l+p4mXl5eXf+Enk8lDGcgVm28AAAAASUVORK5CYII=) scroll no-repeat;
    background-size: 1.2rem 1.2rem;
    background-position: center;
}
.container > .content {
    width: 100%;
    flex-grow: 1;
    height: 0;
    overflow-x: auto;
    background-color: #f9f9f9;
}
.content > .denglu-box {
    width: 100%;
    height: 7.75rem;
    background-image: linear-gradient(180deg, rgba(255, 59, 48, 0.1) 0%, rgba(255, 0, 103, 0.1) 100%), linear-gradient(rgba(202, 20, 29, 0.4), rgba(202, 20, 29, 0.4)), linear-gradient(143deg, #e41f2b 0%, #ff7346 100%);
    background-blend-mode: normal, normal, normal;
    border-bottom-right-radius: 9%;
    border-bottom-left-radius: 9%;
}
.content > .denglu-box > .denglu {
    padding-left: 0.9rem;
    height: 3rem;
    width: 100%;
}
.content > .denglu-box > .denglu > .nodenglu,
.content > .denglu-box > .denglu > .yidenglu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.content > .denglu-box > .denglu .box {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
}
.content > .denglu-box > .denglu .box > .header-img-box {
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    border-radius: 50%;
}
.content > .denglu-box > .denglu .box > .header-img-box > img {
    width: 100%;
    height: 100%;
}
.content > .denglu-box > .denglu .box > .header-name-box {
    font-size: 1rem;
    margin-left: 0.45rem;
    display: flex;
    flex-direction: column;
    color: #fff;
}
.content > .denglu-box > .denglu .box > .header-name-box > .qiandao-box {
    font: 0.6rem / normal normal;
    margin-top: 0.3rem;
    color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
}
.content > .denglu-box > .denglu .box > .header-name-box > .qiandao-box > .vip-box > i {
    display: block;
    width: 1rem;
    height: 1rem;
    background: url(https://res.vmallres.com/nwap/20201115/staticm/img/V3.469d6d9.gif) no-repeat;
    background-size: 100%;
}
.content > .denglu-box > .denglu .box > .header-name-box > .qiandao-box > .qiandao {
    height: 1rem;
    padding: 0.15rem 0.25rem 0.15rem 0.3rem;
    margin-left: 0.4rem;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
}
.content > .denglu-box > .denglu .box > .header-name-box > .qiandao-box > .qiandao > i {
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABwCAMAAAB8U0MtAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMA9vzw2xDeDdXBkAfz4q1XKevPl4k+CsrFZ2IVNAS4tLFQTUW7p0gsJeVwX6CCfi8uHh111AfAAAAB0ElEQVRYw+3X626jMBAFYCAJmHsWCAQScm96Sbu77Xn/d6vHTasW0hhTVWoqnz+jjPVJFjZEY+j8ztxEy//N3l3AxlLoAqzRmlnAlRT+AdBojXnL/Q746Lm2bVsA7I8JecvktUivT7l1AGnMsu2eBugQa96CGTolOnUMqBzHoYfjfMyct6a8bnm1W3DIuyPJUx0A1qcwAcLGUs6BJ4VzNtw21yaR50jg57kUuN/3gv4KSHtAfwEgUIf5DjwLZZi75NhMCvdhuH7XdqbkEnISGPLF+K07enG0IIO3vFqHV1eQK4STwbVFshK9WUJuOup2AWKSKN+c63S9OWsh74wZEy7vfuU2JokH4Xa5yl3dkxRZ+GqXfHuUS1/17ZgE5CJyalDIqO7zPo6zsr7ET8c5OOVwc979s4DbVtcDj3k24Fm14A315ZkYrVRd5F/jRK6vhubZ2NHE0NHRuYTouUPPHXru+E7oZyErRbWTSgWm4Dkca6wAAwK7Y10owEFf6BGIe2zVf2DFgWo2TKqffY6/Fm5Wy5h+xwXLfAUYg6fknmqqAAtA/HmsqJp1d8gA8dFZqsKMgHfc8r3CVv3UNO9pgitZ6OVKx1HXeu7Qc4fOl/IMGP3M8KZ8O7sAAAAASUVORK5CYII=) no-repeat bottom center;
    background-size: 100%;
    margin-right: 0.1rem;
}
.content > .denglu-box > .denglu .quanyi {
    width: 4.6rem;
    height: 100%;
    display: flex;
    align-items: flex-end;
}
.content > .denglu-box > .denglu .quanyi > img {
    width: 100%;
    height: 1.6rem;
}
.m-property {
    height: 3.4rem;
    margin: -2.65rem 0.45rem;
    text-align: center;
    box-shadow: 0px 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.04);
    background: #fff;
    border-radius: 0.5rem;
    margin: -2.65rem 0.45rem 0.4rem;
    padding: 0 0.5rem;
    overflow: hidden;
}
.m-property-list {
    padding: 0.7rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.property-item {
    flex: 1;
    position: relative;
    text-align: center;
}
.m-property-list > li:nth-child(2)::after,
.m-property-list > li:first-child::after {
    content: '';
    width: 1px;
    height: 1rem;
    background-color: #eaeaea;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.35rem;
}
.m-num-box {
    color: #444;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
}
.m-title {
    color: #666;
    font-size: 0.55rem;
}
.m-order {
    background: #fff;
    border-radius: 0.5rem;
    margin: 0 0.45rem 0.4rem;
    padding: 0.5rem 0.5rem 0;
    overflow: hidden;
}
.m-order-title {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.m-order-title > .h1 {
    font: 0.7rem/2rem normal;
    font-weight: bold;
}
.m-order-title > .h2 {
    display: block;
    font: 0.7rem/2rem normal;
    font-size: 0.6rem;
    color: #666;
    padding-right: 0.55rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAKlBMVEUAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjMhp1AAAAADXRSTlMALOvkeLIkbpfWuDYi6+LGFwAAADdJREFUKM9joDNgbMQiyHFJAFOQx1YRi9JkbErZRpLStdcxxVjvOmAKxl4Z5grZsSnkns4wEAAAow8dCTFVaTcAAAAASUVORK5CYII=) no-repeat right center;
    background-size: 0.55rem 0.55rem;
}
.my-row {
    width: 100%;
    display: flex;
}
.row-item {
    width: 25%;
}
.row-item > p {
    width: 2rem;
    height: 2rem;
    text-align: center;
    margin: 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
}
.row-item > p > i {
    display: block;
    height: 2rem;
    width: 2rem;
    background: url(data:image/png;base64,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)
        no-repeat right center;
    background-size: 100% auto;
}
.row-title {
    margin-top: 0.2rem;
}
.row-title > span {
    display: block;
    text-align: center;
    font-size: 0.6rem;
    color: #666;
    line-height: 0.75rem;
    transform: scale(0.91667);
}
.adver-box {
    width: calc(100% + 1rem);
    height: 4.5rem;
    margin-top: 0.4rem;
    margin-left: -0.5rem;
    /* border-radius: 0.25rem; */
}
.adver-box .img-box {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    overflow: hidden;
}
.adver-box .img-box > img {
    width: 100%;
    height: 100%;
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
.m-vip {
    background: #fff;
    border-radius: 0.5rem;
    margin: 0 0.45rem 0.4rem;
    padding-left: 0.5rem;
    overflow: hidden;
}
.m-vip-title {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.5rem;
}
.m-vip-title > .h1 {
    font: 0.7rem/2rem normal;
    font-weight: bold;
}
.m-vip-title > .h2 {
    display: block;
    font: 0.7rem/2rem normal;
    font-size: 0.6rem;
    color: #666;
    padding-right: 0.55rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAKlBMVEUAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjMhp1AAAAADXRSTlMALOvkeLIkbpfWuDYi6+LGFwAAADdJREFUKM9joDNgbMQiyHFJAFOQx1YRi9JkbErZRpLStdcxxVjvOmAKxl4Z5grZsSnkns4wEAAAow8dCTFVaTcAAAAASUVORK5CYII=) no-repeat right center;
    background-size: 0.55rem 0.55rem;
}
.coupon-box {
    width: calc(100% + 0.5rem);
    overflow-x: scroll;
    padding-bottom: 0.4rem;
    margin-left: -0.5rem;
}
.coupon-box::-webkit-scrollbar {
    display: none;
}
.coupon-list {
    display: flex;
}
.coupon-item {
    flex-shrink: 0;
    width: 8.2rem;
    height: 5.3rem;
    position: relative;
    background-image: url(https://res.vmallres.com/nwap/20201115/staticm/img/vip_1.455bad2.png);
    padding: 0.4rem 0.25rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    display: flex;
}
.coupon-item > .list-left {
    width: 5.8rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.coupon-item > .list-left > .vip-price {
    font-weight: bold;
    margin-left: 0.5rem;
    letter-spacing: -0.02rem;
    color: #ca141d;
    font-size: 0.75rem;
}
.coupon-item > .list-left > .vip-price > span {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.75rem;
}
.vip-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #666;
    width: 5.05rem;
    margin-left: 0.5rem;
    padding: 0.01rem 0;
    font: 0.5rem/1.5 normal;
    margin-top: 0.3rem;
}
.vip-content > .vip-content-jifen {
    border-radius: 0.35rem;
    font: 0.45rem/1.2 normal;
    border-width: 0.5px;
    border-style: solid;
    background-color: #fff !important;
    border-color: rgba(202, 20, 29, 0.6);
    padding: 0 0.15rem;
    color: #ca141d;
}
.coupon-item > .list-right {
    height: 100%;
    width: 1.7rem;
    color: #fff;
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.m-vmall {
    background: #fff;
    border-radius: 0.5rem;
    margin: 0 0.45rem 0.4rem;
    padding: 0.5rem 0.5rem 0;
    overflow: hidden;
}
.m-vmall-title {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.m-vmall-title > .h1 {
    font: 0.7rem/2rem normal;
    font-weight: bold;
}
.m-vmall-title > .h2 {
    display: block;
    font: 0.7rem/2rem normal;
    font-size: 0.6rem;
    color: #666;
    padding-right: 0.55rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAKlBMVEUAAACIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjMhp1AAAAADXRSTlMALOvkeLIkbpfWuDYi6+LGFwAAADdJREFUKM9joDNgbMQiyHFJAFOQx1YRi9JkbErZRpLStdcxxVjvOmAKxl4Z5grZsSnkns4wEAAAow8dCTFVaTcAAAAASUVORK5CYII=) no-repeat right center;
    background-size: 0.55rem 0.55rem;
}
.my-row2 {
    display: flex;
    justify-content: space-between;
}
.my-row2 > .row2-item {
    margin-top: 0.3rem;
    width: 2.95rem;
    height: 3.6rem;
}
.my-row2 > .row2-item > p > i {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
}
.my-row2 > .row2-item > .row2-title {
    display: block;
    text-align: center;
    margin-top: 0.2rem;
    width: 3rem;
    max-height: 1.5rem;
    overflow: hidden;
    font-size: 0.6rem;
    color: #666;
    line-height: 0.75rem;
}
.m-life {
    background: #fff;
    border-radius: 0.5rem;
    margin-left: 0.45rem;
    margin-right: 0.45rem;
    padding: 0 0.5rem;
    overflow: hidden;
    padding-right: 0;
    margin-bottom: 0;
}
.life-box {
    margin-left: -0.5rem;
    width: calc(100% + 0.5rem);
    overflow-x: scroll;
}
.life-box::-webkit-scrollbar {
    display: none;
}
.life-box > .life-list {
    color: #fff;
    height: 5.3rem;
    width: 100%;
    margin-bottom: 0.8rem;
    display: flex;
}
.life-box > .life-list > li {
    flex-shrink: 0;
    margin-left: 0.5rem;
    width: 7.8rem;
    height: 100%;
    border-radius: 0.28rem;
    overflow: hidden;
}
.life-box > .life-list > li > div {
    width: 100%;
    height: 100%;
}
.recommed > h3 {
    text-align: center;
    color: #333;
    height: 2.5rem;
    font-size: 0.8rem;
    font-weight: bold;
}
.recommed > .menu {
    border-radius: 0.5rem;
    margin-bottom: 0.4rem;
    margin-left: 0.45rem;
    margin-right: 0.45rem;
    padding: 0 0.5rem;
    overflow: hidden;
    background-color: #fff;
}
.recommed > .menu > ul {
    width: 16.2rem;
}
.recommed > .menu > ul > li {
    width: 100%;
    padding: 0.5rem 0;
}
.recommed > .menu > ul > li > .d1 {
    width: 100%;
    height: 4.5rem;
    background-image: url(https://res.vmallres.com/pimages/pages/dynamicMsg/97332367480616323379.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.recommed > .menu > ul > li > .d2 {
    width: 100%;
    height: 4.5rem;
    background-image: url(https://res.vmallres.com/pimages/pages/dynamicMsg/67870872011617807876.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
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

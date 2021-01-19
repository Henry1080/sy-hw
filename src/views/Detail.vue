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
                        <li :class="{ active: num == index }" v-for="(item, index) in titlelist" :key="item" @click="btnTitleText(index)">
                            {{ item }}
                        </li>
                    </ul>
                    <div class="morechoice" @click="tabmorechoice">
                        <ul class="morechoice-box" v-if="ismorechoice">
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
                    <div class="morechoice" @click="tabmorechoice2">
                        <ul class="morechoice-box2" v-if="ismorechoice2">
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
            <!-- 参数信息 -->
            <div class="canshu">
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
                            <li class="item" :class="{ active: num2 == index }" v-for="(item, index) in goodsdetaillist.peizhi" :key="item.id" @click="btnTitleText2(index)">
                                {{ item.p1 }}
                            </li>
                        </ul>
                    </div>
                    <!-- 颜色 -->
                    <div class="color">
                        <div class="title">颜色</div>
                        <ul class="list">
                            <li class="item" :class="{ active: num3 == index }" v-for="(item, index) in goodsdetaillist.color" :key="item.id" @click="btnTitleText3(index)">
                                {{ item.c1 }}
                            </li>
                        </ul>
                    </div>
                    <!-- 版本 -->
                    <div class="banben">
                        <div class="title">版本</div>
                        <ul class="list">
                            <li class="item" :class="{ active: num4 == index }" v-for="(item, index) in goodsdetaillist.banben" :key="item.id" @click="btnTitleText4(index)">
                                {{ item.b1 }}
                            </li>
                        </ul>
                    </div>
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
                <div class="loading-action">
                    <i></i>
                </div>
            </div>
            <!-- 懒加载图片 -->
            <div class="demo-image__lazy">
                <el-image v-for="item in goodsdetaillist.adsimg" :key="item.id" :src="item.imga" lazy></el-image>
            </div>
            <!-- 回到顶部 -->
            <el-backtop target=".goodsdetail-wrap" class="backtop" :bottom="70" :right="11.4">
                <span></span>
            </el-backtop>
            <!-- 底部 -->
            <div class="specify">
                <header class="specify-header">售后服务</header>
                <div class="specify-content">
                    <p>本产品全国联保，享受三包服务，保修期：1年</p>
                    <p>如因质量问题或性能故障，凭华为客户服务中心出具的质量检测证明，享受7日内退货，15日内换货，15日以上在保修期内可享受免费维修等三包服务</p>
                    <p>华为消费者服务热线：950800</p>
                    <p>华为官方服务软件：服务App</p>
                    <p>华为消费者业务官网-服务与支持：https://consumer.huawei.com/cn/support/</p>
                </div>
            </div>
            <div class="specify">
                <header class="specify-header">特别提醒</header>
                <div class="specify-content">
                    <p>以上页面中的产品图片及屏幕内容仅作示意，实物产品效果（包括但不仅限于外观、颜色、尺寸）和屏幕显示内容（包括但不仅限于背景、UI、配图）可能略有差异，请以实物为准。</p>
                    <p>以上页面中的数据为理论值，均来自华为内部实验室，于特定测试环境下所得（请见各项具体说明），实际使用中可能因产品个体差异、软件版本、使用条件和环境因素不同略有不同，请以实际使用的情况为准。</p>
                    <p>为提供尽可能准确的产品信息、规格参数、产品特性，华为或荣耀可能实时调整和修订以上页面中的文字描述、图片效果等内容，以求与实际产品性能、规格、指数、零部件等信息相匹配，由于产品批次和生产供应因素实时变化，如遇确有进行上述修改和调整必要的情形，恕不专门通知。</p>
                </div>
            </div>
            <div class="bottom-logo"></div>
            <div class="yixuanze" v-show="isyixuan">
                <span class="yixuan">已选</span>
                <span class="yixuancolor">{{ color }}</span>
                <span class="yixuanbanben"> {{ banben }}</span>
                <span class="yixuanshulaing">X1</span>
            </div>
        </div>
        <div class="goumai-wrap">
            <div class="goumai-box">
                <ul class="ohterpage">
                    <li @click="toHome('mains')">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPVSURBVGhD7ZjLK3RxGMffv8Ml9/slNaXkXoSN7ERJkpXm2FiyEFtNIjsLFlJuM7klZKNcStMpNiiF5M2Qu1y/r+eZMxrHvMO5eP28nW/9FnPO75yez++5nvmF/0QWiGiyQETTl4Hc39/j8PAQAwMDmJ2dxfX1NZ6fn5W75utLQG5ubuB0OpGXl4eEhAQkJSWhrq4OOzs7eHh4UHaZK1NB6MTPz8/R3d2NlJQU2Gw2dHZ2or6+HrGxscjPz8fa2hpub2+VJ8yTaSBPT084OTlBVVUV4uPjkZOTg42NDTw+PrLhPT09DEOAIyMj7DUzQ80UEDJ2c3MTJSUliIyMRENDA3Z3d5W7XpHRlCtpaWmIi4tDa2urqXljGISSenp6GhkZGYiOjkZHRweHVyAD6dr29jYqKioQERHB3tvb21PuGpMhEDK4t7eXTzg1NZVDhsIo2CmT987OziBJEocaHcDKygqHphHpAiFDj46OOIkpH7Kzs+F2u9k7nwkVMppg+vv7kZycjPT0dPT19X14CMGkGYTK5/r6OsrLy5GYmPiaD1oNoP2U8DMzM8jNzeV3tbS0cMHQ4x3NINTksrKyOGnb2to4vIyIDoaqG+UNhVpTU5Ou8qwZZH9/H4WFhRgeHsbx8bHhnkCnf3FxgYODA/au3W7naqZVunKEEnZpaYl7xdDQkHJVn+ggampqUFtba6i36AIhTU5OcqI6HA7lij7R6VP/KSsr0+UJnyyQj0Du7u6wtbWF9vZ2Lq1UbgNVI6FByOD5+XlkZmZyn6EJuLKykg1V54DQIOSNxsZGHhCp6VHjDA0NxeLiIhcKfwkNcnV1herqah7bPR4PRkdHERISgsHBQe7+/hIehAbCgoIC7tRjY2PigkxMTHwIQo1TeJDl5WUGKS0t5e8MSm7forG+qKjoHQjNUuq9NDHTpzCBG5kSdIPQ6TU3N/N8RN8h/isqKgrh4eEoLi7m8WNqagphYWH8DaLeGxMTwwPj3Nzcu0KgRbpBqMSenp5iYWEB4+PjfOr+i66trq7yUHh5eck5pd5Dy+VyQZZl3qd3PCHpBhFNFohoskBEkwXC+u2EZJPg/K38fpHHJcFmc0BWfpPkLhv/ffqZ5XArD2mUDhAPnPbARgRaksujPOcvGQ4VrFGZFFovhtmdL4h/l9dTgWG9661ntUo3iFbDaH9g73gld30jSLB4VhumBlE//60ggT3hWz8IxIhH1Pd/qEeoagkEosUj/qK+Irnk1zIe7D2f1T/zCMvt4Htvq5evLwnvEb8G2hWsBb4PNy3SDSKaLBDRZIGIJeAPxVyi32610NUAAAAASUVORK5CYII=" alt="" />
                    </li>
                    <li>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARfSURBVGhD7ZjZK7R9GMffv8O+71maEGULB5QjSo6k5ACPLClbcojU4IBEFDkTg2PCmcg0RxTKzpOx7+v3dV1zD2PcT8/c92+Yed/mW79m7m26Pr9rvecf/E/kAnE2uUCcTd8CcnNzg/X1dfT19aG0tBS5ubkoKChAQ0MDpqencXJygsfHR+lu+8huIK+vr3h4eMDc3BxKSkoQFRWF0NBQhIWFfVohISFISUlBa2srtra28PT0JP2CmOwC8vLygsvLS3R2diI4OBjh4eHIy8tjj+j1ehweHmJ7exszMzNoampCWloa35eRkYHFxUXeAFEJg5Anrq+vUVlZCW9vbyQkJMBgMOD29pavWYvOnZ6eoq2tDYGBgew5gqXNEJEwCO1mb28vfH19ORf29vZsMopCampqCkFBQYiOjsba2posuK0SBllZWeEwIU8QhBJjCGZsbAz+/v4oKioSyhchEAqfuro63tXZ2VnFO0r3X1xcID8/n8NyYWEBz8/P0lVlEgKhqhMTE8PeuLq6ks4qExm+uroKHx8fVFVV4f7+XrqiTEIg4+Pj7I3m5macnZ1xb1DiFcol8ur+/j6SkpK4ilEPUiMhkI6ODg6JiIgIJCcnc7m9u7uzCYYgNjY2UFZWhsjISM4T6jFqPSsEQj3Bw8MDAQEBbISnpycmJiZsSlryRHFxMYcUNU76dHd3536kRkIgjY2NDLG0tMS76+bmhvLycvbK32Q0GrnsUjjRyEJQDgWh0ntwcMBNkUBoPLEF5Pj4mCeA7OxsTvCampr/LgjlVlZWFoNUV1c7DqS9vZ1Dq7u7G8PDwwxSX19v0+xEVS4xMRGxsbE80pBnaDpwSLLTWJGamsowVIbj4uK4J9jS1AiWNoCKBD3v5eWFzMxMx5Rf6hsE09LSwr2ExhUlnZnCaGRkhL1BYWWrN+UkBCIq6jc0CROIn58flpeXHTOiiIggKMkHBga4GdJ4ohaC5DAQappDQ0MMER8fj52dHUXjjbV+HISM3dzcRG1tLYcTVS7RdxHSt4JQPxkcHOQSS9Wtv78fhYWF3D/o7TAnJwe7u7tC7yFmfSsIldL09HTuL1SVqETTXEXJPTo6iqOjI6G8sNS3glAppT8c6OWLSmtPTw/m5+dxfn5uFy9YymHJbm+5QJxNLhBnk91AjJMV0HQZpKOvMnRpoNFIi+7Taz+OLZZWLz2gUCpBjND9+mqE7JLgDF0V0P1++/JbhwoJpGLSyNfMos1wAIgWkonQaszfrWQ2+k22gJDXfhhE0h/Cw7QkwyXJhRaDEJj5/C/d2xapk2oQs2HaSTLE0iPkIY3Mbv/dIyKyU7KbjDftuHyYyYG8e8hiqYVTBcIV6pMBXz3ycc0EIB9aOmgtwslhOfIVyHJZ54h8aL0bT+cdkSMkAvlTKLwbzqIqJw/y4cHP4Er1Mx6x3G1rEDqWnlGbH6Sf8YhktBmcn3k7ZwL+yC9THqnzjBCIM8kF4mxygTiXgH8Bi9eRUHbhOp8AAAAASUVORK5CYII=" alt="" />
                    </li>
                    <li @click="toHome('cart')">
                        <el-badge :value="cartNumber">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAASMSURBVGhD7Ve5SytfFP79He77ghsYUFw6UbBQwULRysZGeGkUQbDTQlQMgmChnaKNSiIuhViJhaKEIOKCqIhbNI377vnlOzOTTBZN7mQe5r2XD44zzr135nznfOfcm//oL0GESLghQiTc8O8SeX9/p76+Pmpubqbu7m46ODigt7c3efTnIEzk4eGBysrKKCsri9LT06m0tJRWVlbo8/NTnvEzECYCh6+vr2lnZ4eGhoYoOzubSkpK6Pb21jUO+/j4ELZQghFSjTw+PlJHRwdlZmbS9vY2O2K322l/f5/29vaEDGtOT08545CvKEIiAsenpqYoJSWFLBYLZwqSi42N1WRxcXFUU1NDZ2dnwtkJiQiwvr5OGRkZ1NbWxvIYHx+n/v5+6u3tFbaWlhaKj4+nrq4uen5+lr8QHEImAjnk5eVRYWEhE0EHe319pZeXF2E7Ojqi5ORkamhoYImJIGQi9/f3VF9fT0lJSXR8fKy5YLFubW2N3/MjGUEkR0ZGKCEhgRYWFjgrWoB1k5OTlJiYSEtLS8IFHzIROLC7u8uSgM61bo5wvLOzk+sNHUwUIRMB0HINBgM1NjZyfWgBAlBdXU0FBQV0fn4uPw0euhC5ubmhyspKbr1PT0/yUzGg1tDGKyoq+H2i0IUInG9tbaXo6Giy2WzCdYL5GxsbvJe0t7drCoYuRCCL2dlZioqKouHhYWF5Yf7o6CjFxMTwe7TUmS5E0DodDgdvZk1NTXx0EQEyYDQaef3V1ZWmFq4LEQDO4HiRm5tLMzMzdHFxweQCGRrF8vIyN4vy8nLhjVCBbkTQPhcXFyk/P59bKAo/JycnoOH0jEMnrhMTE5q7nm5EABTt1tYWy6u4uJiPLYGsqKiI6urqaHV1VfMeBOhKBNrG0QI1gsgG0jrG4TzmY52W2lCgGxE4Ac3X1tbyftDT0xOwjcL5gYEBSk1NpaqqKrq8vNRMRtcamZ6e5jMX2jD0f3h4KI/6x8nJCTcHzMdvkbGxMc3y0o0I6gO/9FDoaKPIzN3dnTzqH9jNUR8gkZaWxvUlupkq0LVGkBWr1Upzc3N8Xgp0gsU45DQ/P0+bm5sB538HXYn8JCJEwg0RIuGGf4iI1cQnU5cN2pwPHWT+ZSSzXZriD7ZB1TjewesCwUYmg8n5VxxBETFaHNK93UxGOISrmhyb7Lg8X03ENmggk1W6/xZBE/ZFkERsUgasIGL2mw3FcYfF6EUEUfYm7Uncd8yffZ8pcSJ46S8zOeTIK1AcR/TVDhid63ienE0QRXY8pAeEkA1AgIgzIoq0nPB0RKkZXKXISePObIA0ZnhkyrvGvGoD35HXBQuNRJwfxtX1v+zYtidRE4xrw5uomzCPOkmqs+hratL+oYmIIg/JQcUx5WO4lxxwSU+RjQdxNxEf/JaMMKSClRxzO6qYyepLyCU9OCXLxt29vKTkjd9FxF2gqigrUGdMfgT41AKy4nJOqR3foHxnPt9WITARj+ioHPOAb4RdGQFAQqSY9c+IIhk/YMl8Ha2vpKXMlyT2BfQn8ucgQiTc8JcQIfofzqFn/l1BHA0AAAAASUVORK5CYII=" alt="" />
                        </el-badge>
                    </li>
                </ul>
                <div class="buy-box">
                    <div class="join" @click="add(goodsdetail)">加入购物车</div>
                    <div class="buyatonce">立即购买</div>
                </div>
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
            ismorechoice2: false,
            titlelist: ['商品', '参数', '评价', '详情'],
            num: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            swiperOptions: {
                loop: true,
                autoplay: true,
            },
            isyixuan: false,
            color: '',
            banben: '',
            goodsdetail: {
                img: '',
                name: '',
                price: '',
                color: '',
                banben: '',
                xiangou: '',
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
        shopcart() {
            return this.$store.state.shopcart;
        },
        cartNumber(){
            return this.$store.state.cartNumber
        }
    },
    methods: {
        // 关闭顶部app横幅
        closeapp() {
            this.$store.commit('closeapp');
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
                    // console.log(that.goodsdetaillist);
                    // 获取存储的信息
                    let n3 = JSON.parse(localStorage.getItem('num3'));
                    if (n3) {
                        that.num3 = n3;
                        that.color = that.goodsdetaillist.color[n3].c1;
                    } else {
                        that.color = that.goodsdetaillist.color[that.num3].c1;
                    }

                    let n4 = JSON.parse(localStorage.getItem('num4'));
                    if (n4) {
                        that.num4 = n4;
                        that.banben = that.goodsdetaillist.banben[n4].b1;
                    } else {
                        that.banben = that.goodsdetaillist.banben[that.num4].b1;
                    }
                    that.goodsdetail.img = that.goodsdetaillist.swiperlist[0].imgs;
                    that.goodsdetail.color = that.goodsdetaillist.color[0].c1;
                    that.goodsdetail.banben = that.goodsdetaillist.banben[0].b1;
                    that.goodsdetail.name = that.goodsdetaillist.namedetail;
                    that.goodsdetail.xiangou = that.goodsdetaillist.xiangou;
                    that.goodsdetail.price = that.goodsdetaillist.price;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 得到滚动条高度
        getDistance() {
            this.distance = this.$refs.wrap.scrollTop;
            // console.log(this.distance);
            let sum = 0;
            let sum2 = 0;
            for (let i = 0; i < this.$refs.wrap.children.length; i++) {
                sum += this.$refs.wrap.children[i].scrollHeight;
                sum2 = this.$refs.wrap.children[0].scrollHeight + this.$refs.wrap.children[1].scrollHeight + this.$refs.wrap.children[2].scrollHeight;
                if (this.distance >= sum) {
                    if (i < 3) {
                        this.num = i + 1;
                    }
                }
            }
        },
        goback() {
            this.$router.go(-1);
        },
        // 其它选项显示切换
        tabmorechoice() {
            this.ismorechoice = !this.ismorechoice;
        },
        tabmorechoice2() {
            this.ismorechoice2 = !this.ismorechoice2;
        },
        btnTitleText(index) {
            this.num = index;
            let sum = 0;
            for (let i = 0; i < this.$refs.wrap.children.length; i++) {
                sum += this.$refs.wrap.children[i].scrollHeight;
                if (this.num == i + 1) {
                    this.$refs.wrap.scrollTop = sum;
                }
                if (this.num == 0) {
                    this.$refs.wrap.scrollTop = 0;
                }
            }
        },
        btnTitleText2(index) {
            this.num2 = index;
        },
        btnTitleText3(index) {
            this.num3 = index;
            // 记住颜色选项
            localStorage.setItem('num3', JSON.stringify(this.num3));
            this.color = this.goodsdetaillist.color[this.num3].c1;
        },
        btnTitleText4(index) {
            this.num4 = index;
            // 记住版本选项
            localStorage.setItem('num4', JSON.stringify(this.num4));
            this.banben = this.goodsdetaillist.banben[this.num4].b1;
        },
        toHome(name) {
            if (this.ismorechoice) {
                this.ismorechoice = !this.ismorechoice;
            }
            if (this.ismorechoice2) {
                this.ismorechoice2 = !this.ismorechoice2;
            }
            this.$router.push({
                path: '/',
            });
            this.$store.commit('btnClick', name);
        },
        // 去搜索页面
        tosearch() {
            this.ismorechoice = !this.ismorechoice;
            this.ismorechoice = !this.ismorechoice;
            this.$router.push({
                path: '/search',
            });
        },
        // 添加购物车
        add(item) {
            this.$store.commit('add', item);
            // console.log(this.$store.state.shopcart);
            // this.$router.push({
            //     path: '/',
            // });
            // this.$store.commit('btnClick', name);
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
            if (newVal >= 400) {
                this.isyixuan = true;
            } else {
                this.isyixuan = false;
            }
        },
        shopcart(newVal) {
            localStorage.setItem('shopcart', JSON.stringify(newVal));
        }
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
    z-index: 999;
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
    padding-bottom: 0.5rem;
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
    background-color: #f9f9f9;
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
.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}
.backtop {
    width: 2.5rem !important;
    height: 2.5rem !important;
    bottom: calc(57px + 1.2rem) !important;
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
.specify {
    padding: 0 0.8em;
    background-color: #fff;
}
.specify-header {
    line-height: 1.2;
    padding-top: 0.8rem;
    font-size: 0.65rem;
    color: #333;
    font-weight: bold;
}
.specify-content {
    padding: 0.8rem 0 0.8rem;
    background-color: #fff;
}
.specify-content > p {
    margin-bottom: 0.6rem;
    font-size: 0.6rem;
    line-height: 1.45;
    padding-left: 0.55rem;
    position: relative;
    word-break: break-all;
}
.specify-content > p::before {
    content: '';
    display: block;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 0.3rem;
    background-color: #999;
    transform: scale(0.5);
    position: absolute;
    left: 0;
    top: 0.25rem;
}
.bottom-logo {
    padding: 1rem 0;
    text-align: center;
    width: 6rem;
    height: 0.9rem;
    background: url(https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/icon-bottom-logo.png) no-repeat center;
    background-size: contain;
    margin: 0 auto;
}
.yixuanze {
    position: fixed;
    bottom: 2.4rem;
    width: 100%;
    max-width: 720px;
    height: 1.25rem;
    line-height: 1.25rem;
    padding: 0 0.8em;
    background-color: rgba(255, 238, 228, 0.9);
    z-index: 101;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}

.yixuanze > .yixuan {
    font-size: 0.6rem;
    vertical-align: text-bottom;
    color: #666;
    margin-right: 0.8rem;
    display: inline-block;
    padding-top: 0.1rem;
    font-style: normal;
    font-weight: 400;
}
.yixuanze > .yixuancolor {
    font-size: 0.6rem;
    color: #000;
    white-space: nowrap;
}
.yixuanze > .yixuanbanben {
    font-size: 0.6rem;
    color: #000;
    white-space: nowrap;
    margin-left: 0.2rem;
}
.yixuanze > .yixuanshulaing {
    font-size: 0.6rem;
    color: #000;
    white-space: nowrap;
    margin-left: 0.4rem;
}
.goumai-wrap {
    flex-shrink: 0;
    width: 100%;
    height: 3.6rem;
    display: flex;
    align-items: flex-end;
    padding-right: 0.5rem;
}
.goumai-wrap > .goumai-box {
    width: 100%;
    height: 2.4rem;
    width: 100%;
    max-width: 720px;
    background-color: #fff;
    display: flex;
}
.goumai-wrap > .goumai-box > ul {
    flex-shrink: 0;
    display: flex;
    align-items: center;
}
.goumai-wrap > .goumai-box > ul > li {
    width: 2.5rem;
}
.goumai-wrap > .goumai-box > ul > li > img {
    width: 100%;
}
.goumai-wrap > .goumai-box > .buy-box {
    flex-grow: 1;
    display: flex;
    align-items: center;
}
.goumai-wrap > .goumai-box > .buy-box > .join {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.85rem;
    font-size: 0.75rem;
    color: #fff;
    background-image: linear-gradient(90deg, #ff814a 0%, #f45333 100%);
    border-radius: 0.93rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.goumai-wrap > .goumai-box > .buy-box > .buyatonce {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.93rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 1.85rem;
    font-size: 0.75rem;
    color: #fff;
    background-image: linear-gradient(90deg, #e43e2d 0%, #ca141d 100%);
}
.canshu {
    width: 100%;
}
</style>

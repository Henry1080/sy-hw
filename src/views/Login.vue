<template>
    <div class="container">
        <div class="verify" v-if="ismima == false">
            <div class="verify-box">
                <div class="header">
                    <div class="logo">
                        <i></i>
                    </div>
                    <div class="title">
                        <p>华为账号</p>
                    </div>
                    <div class="txt">
                        <p>登录帐号以使用云空间、应用市场及更多服务</p>
                    </div>
                </div>
                <div class="content">
                    <!-- 国家地区 -->
                    <div class="area">
                        <div class="area-place">国家/地区</div>
                        <div class="area-box">
                            <span>中国 +86</span>
                            <i></i>
                        </div>
                    </div>
                    <!-- 手机号 -->
                    <div class="mobile" :class="{ active: xianshi1 == true }">
                        <input type="number" placeholder="手机号" v-model="mobile" @focus="xianshi1 = true" />
                    </div>
                    <!-- 验证码 -->
                    <div class="num" :class="{ active: xianshi1 == false }">
                        <input type="number" placeholder="短信验证码" v-model="password" @focus="xianshi1 = false" />
                        <div class="huoqu" :class="{ active: mobile.length > 0 }" @click="getyanzm">获取验证码</div>
                    </div>
                    <div class="failed" v-if="isfailed">短信验证码错误</div>
                    <!-- 登录 -->
                    <div class="denglu" @click="yanzheng('my')">
                        <p :class="{ active: password.length > 0 }">登录/注册</p>
                    </div>
                    <!-- 账号密码登录 -->
                    <div class="mimadenglu" @click="tabmiam">
                        <span>密码登录</span>
                    </div>
                </div>
            </div>
            <div class="other">
                <div class="other-title">其他登录方式</div>
                <div class="other-img">
                    <img src="https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/wap_qq_emui9.png?cas20191101" alt="" />
                </div>
                <div class="oter-last">
                    <a href="https://id1.cloud.huawei.com/AMW/encounterProblems/index.html?reqClientType=26&loginChannel=26000002&countryCode=cn&loginUrl=https%3A%2F%2Fid1.cloud.huawei.com%2FCAS%2Fmobile%2Fstandard%2FwapLogin.html&lang=zh-cn&themeName=huawei&service=https%3A%2F%2Fm.vmall.com%2Faccount%2Fcaslogin%3Furl%3Dhttps%253A%252F%252Fm.vmall.com%252Fpersonal">遇到问题</a>
                    <span></span>
                    <a target="_blank" href="https://id1.cloud.huawei.com/AMW/portal/agreements/accPrivacyStatement/zh-cn_accPrivacyStatement.html?version=china&reqClientType=26&loginChannel=26000002">隐私声明</a>
                </div>
            </div>
        </div>
        <div class="password" v-else>
            <div class="p-wrap">
                <div class="header2">
                    <div class="logo">
                        <i></i>
                    </div>
                    <div class="title">华为账号</div>
                    <div class="text">登录帐号以使用云空间、应用市场及更多服务</div>
                </div>
                <div class="content2">
                    <!-- 账号 -->
                    <div class="c1" :class="{ active: xianshi2 == true }">
                        <input type="text" placeholder="手机号/邮件地址/帐号名 " @focus="xianshi2 = true" v-model="mobile"/>
                    </div>
                    <!-- 密码 -->
                    <div class="c2" :class="{ active: xianshi2 == false }">
                        <input :type="type" placeholder="密码" @focus="xianshi2 = false" v-model="password"/>
                        <div class="img-box">
                            <img src="https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/eyeoff_wap_ui9.png?cas20191101" alt="" v-if="tupian" @click="tabtype" />
                            <img src="https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/eyeon_wap_ui9.png?cas20191101" alt="" v-else @click="tabtype" />
                        </div>
                    </div>
                    <div class="failed" v-show="isfailed == true">账号或密码错误</div>
                    <!-- 短信登录 -->
                    <div class="c3">
                        <p @click="tabmiam">短信验证登录</p>
                        <p>忘记密码</p>
                    </div>
                    <!-- 登录 -->
                    <div class="c4" @click="yanzheng('my')" :class="{active:(mobile.length>0&&password.length>0)}">
                        <p>登录</p>
                    </div>
                    <!-- 注册账号 -->
                    <div class="c5">
                        <p>注册账号</p>
                    </div>
                </div>
            </div>
            <div class="other2">
                <p class="p1">遇到问题</p>
                <p class="p2">其他登录方式</p>
                <div class="img-box">
                    <img src="https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/wap_qq_emui9.png?cas20191101" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ismima: false,
            type: 'password',
            mobile: '',
            password: '',
            xianshi1: null,
            xianshi2: null,
            isfailed: false,
            tupian: true,
        };
    },
    computed: {
        isdenglu() {
            return this.$store.state.isdenglu;
        },
    },
    methods: {
        // 登录方式切换
        tabmiam() {
            this.ismima = !this.ismima;
            this.mobile="";
            this.password=""
        },
        yanzheng(name) {
            if (this.mobile !== '' && this.password !== '') {
                if (this.mobile == '17354987582' && this.password == '123456') {
                    this.$store.state.isdenglu = true;
                    this.mobile = '';
                    this.password = '';
                    this.$router.push({
                        path: '/',
                    });
                    this.$store.commit('btnClick', name);
                } else {
                    this.isfailed = true;
                }
            }
        },
        getyanzm() {
            alert('验证码为123456');
        },
        tabtype() {
            if (this.type == 'password') {
                this.type = 'text';
            } else {
                this.type = 'password';
            }
            this.tupian = !this.tupian;
        },
    },
    watch: {
        password(newVal) {
            if (newVal.length == 0) {
                this.isfailed = false;
            }
        },
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.verify,
.password {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.verify .header {
    padding: 16px 0 50px;
    margin: 0 24px;
    line-height: 1.3;
}
.verify .header > .logo {
    text-align: center;
    display: flex;
    justify-content: center;
}
.verify .header > .logo > i {
    display: block;
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
    background-image: url(https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/ic_huaweiid_security_logo40.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
}
.verify .header > .title {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
}
.verify .header > .txt {
    text-align: center;
    font-size: 14px;
    margin-top: 4px;
    color: rgba(0, 0, 0, 0.5);
}

.verify .content {
    width: 100%;
    padding: 0 24px;
}
.verify .content > .area {
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
}
.verify .content > .area > .area-place {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin: 0;
}
.verify .content > .area > .area-box {
    color: rgba(0, 0, 0, 0.5);
    margin-left: 8px;
    margin-right: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
}
.verify .content > .area > .area-box > i {
    display: block;
    width: 16px;
    height: 40px;
    line-height: 40px;
    background: url(https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/ic_public_arrow_right.png) 100% no-repeat;
    background-size: 12px 24px;
    color: rgba(0, 0, 0, 0.5);
}
.verify .content > .mobile {
    margin-top: 16px;
    border-bottom: 1px solid #e5e5e5;
}
.verify .content > .mobile.active {
    border-bottom-color: #000;
}
.verify .content > .mobile > input {
    border: none;
    outline: none;
    width: 100%;
    height: 36px;
    background: transparent;
    color: #191919;
    line-height: 1;
    text-align: left;
}

.verify .content > .num {
    margin-top: 16px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
}
.verify .content > .num.active {
    border-bottom-color: #000;
}
.verify .content > .num > input {
    border: none;
    outline: none;
    flex-grow: 1;
    height: 40px;
    background: transparent;
    color: #191919;
    line-height: 1;
    text-align: left;
    margin-right: 6px;
}
.verify .content > .num > .huoqu {
    padding-left: 16px;
    height: 39px;
    color: #007dff;
    opacity: 0.38;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
}
.verify .content > .num > .huoqu.active {
    opacity: 1;
}
.verify .content > .denglu {
    margin-top: 40px;
    width: 100%;
}
.verify .content > .denglu > p {
    background: #007dff;
    color: #fff;
    opacity: 0.38;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 18px !important;
    height: 36px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.verify .content > .denglu > p.active {
    opacity: 1;
}
.verify .content > .mimadenglu {
    margin: 16px 0 24px;
    color: #007dff;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
}
.verify .other {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.verify .other > .other-title {
    font-size: 14px;
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
}
.verify .other > .other-img {
    text-align: center;
    margin-bottom: 24px;
}
.verify .other > .other-img > img {
    text-align: center;
    width: 40px;
    height: 40px;
}
.verify .other > .oter-last {
    margin-top: -8px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.verify .other > .oter-last > a {
    padding: 0 16px;
    color: #007dff;
    font-size: 14px;
    font-weight: 700 !important;
}
.verify .other > .oter-last > span {
    line-height: 1.3;
    height: 14px;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
}
.verify .failed,
.password .failed {
    color: #fa2a2d;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 16px;
}

.error-tips-EMUI5 {
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 16px;
}
.password > .p-wrap {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
}
.password > .p-wrap > .header2 {
    padding: 12px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.password > .p-wrap > .header2 > .logo > i {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto 16px;
    background-image: url(https://id1.cloud.huawei.com/CAS/up/idmw_rss_66/css/mobile/images/ic_huaweiid_security_logo40.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
}
.password > .p-wrap > .header2 > .title {
    font-weight: 700;
    font-size: 24px;
}
.password > .p-wrap > .header2 > .text {
    font-size: 14px;
    margin-top: 4px;
    color: rgba(0, 0, 0, 0.5);
}
.password > .p-wrap > .content2 {
    width: 100%;
}
.password > .p-wrap > .content2 > .c1 {
    width: 100%;
    margin-bottom: 8px;
    border-bottom: 1px solid #e5e5e5;
}
.password > .p-wrap > .content2 > .c1.active {
    border-bottom-color: #000;
}
.password > .p-wrap > .content2 > .c1 > input {
    border: none;
    outline: none;
    font-size: 16px;
    height: 36px;
    width: 100%;
    padding: 0;
    text-align: left;
}
.password > .p-wrap > .content2 > .c2 {
    width: 100%;
    margin-bottom: 8px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
}
.password > .p-wrap > .content2 > .c2.active {
    border-bottom-color: #000;
}
.password > .p-wrap > .content2 > .c2 > input {
    border: none;
    outline: none;
    font-size: 16px;
    height: 36px;
    width: 100%;
    padding: 0;
    text-align: left;
}
.password > .p-wrap > .content2 > .c2 > .img-box > img {
    width: 24px;
    height: 24px;
    margin-top: 7px;
}

.password > .p-wrap > .content2 > .c3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: #007dff;
    margin: 16px 0;
}
.password > .p-wrap > .content2 > .c4 {
    margin: 40px 0 16px;
    background: #007dff;
    color: #fff;
    opacity: 0.38;
    font-size: 16px;
    font-weight: 700;
    border-radius: 18px;
    text-align: center;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.password > .p-wrap > .content2 > .c4.active {
    opacity: 1;
}
.password > .p-wrap > .content2 > .c5 {
    margin: 16px 0 40px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 18px;
    text-align: center;
    height: 36px;
    color: #007dff;
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
}
.password > .other2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.password > .other2 > .p1 {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 700 !important;
    color: #007dff;
    cursor: pointer;
}
.password > .other2 > .p2 {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    margin-bottom: 12px;
}
.password > .other2 > .img-box {
    margin-bottom: 24px;
}
.password > .other2 > .img-box > img {
    width: 40px;
    height: 40px;
}
</style>

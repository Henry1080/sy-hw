<template>
    <div class="page">
        <!-- 上部动态组件 -->
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <!-- 底部切换按钮 -->
        <div class="botton-bar">
            <!-- 主页 -->
            <div class="mains" @click="btnClick('mains')">
                <div v-if="componentName == 'mains'">
                    <img class="imgs" src="https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/home_active.png" alt="" />
                </div>
                <div v-else>
                    <img class="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAABNJJREFUaAXtmGnIplMYxx/bNChrQiRvdkaUKBFJxkwoYiSa0IgZ21hL5IMkuxi7lLGNYrLNh+GDeosiCl80ZS1LUfZ9Fsvv/8y57q77POfcz7nf95533g/PVf/nXOu5zn7O/fR6BbRFyufRSLl400hh4oE5Q88brDqVyyy0sZSnRVWOe1Rcr3eL4wfZzZxK1fwLPpFuE/1Acd0XrVenf2en1XWtarijrupnmRnpBlLHdsm7gCXeELf3DG+E79v9kHu7jMvBKV65cfm9culTfVD7Z4C7wIJcoOnjkRrDEOv6vlvlDKGmWpDWzc3B0FTUgoaNd2VPdVpZDgdJW1KJ8wHgYTBAuYAfBjyDwjaKRN+pF5DnBR8rGjePOU196bswLLt27rbO6W74j52cZIcl0GxcESIvpVzrapkPfzT4E1zp9DU2l+BevLYE4+A50EQ6Ch8KDo9QfuCdfQIttguCcRGlzsy2dCoBc4F6qh7XaHOkHcANNW07YSDeL+x11HUU8PdEu+oT8Wp1KV2H45hzXgj/n5OTrO9B0sEpVfkKYDvuZGfLsnGC74KnxjJFfuL9AjHfw4wZldNnBLTN29AJOGth/FgalFoJqdi9UV7rDL/BX+PkLFuS4DyijwS/g6vBfuAqILoMrOlzmZ9hCe4hbmvwNlgKjPRCfiAISyg/MkNc5hLoCXhfcNZF81kcGOTbKbcDH4LkLZ5KcAjOFwORyn/6XP7nTEzHg9Xg8tgtTqAxnQX0TLg+dm6Qd8d2Y7Brfv4wX5/gfpR61r0OXjSHFqWWrw3TE/Dv+FhdkXq37OqVE+RvCnXFB2m/Ot1muZO0JJ/FV/dMnEW3mW61iZLF63bsU5zA9J2VbRKo22cDvT6KqRqrIRFqyIPB51hKrfvbgtxYlPZgTqhF9/E4GAvy0KI0gc4eIx16xVSawG/I4srlmEqQehmUJLD9Yy+TfkPiSV6GVitFuzpHdvjlfN7NBY70oxGYliNQsn3aNlwfuueCg6LAVchPgp8i/aTELjtwHC2ZB+yxq2+r94BKXSB2JukLZjl4A0yaJtuBHWnBQqB72OhLGD1d4tf39ujkuycw+hpGvt+bom050Q6cSKLTgMXrcH0ejIMSOgans4CfrVeRVwLNWDFZA0oCdsZpEfDvvk+RHwO/gInQNgRdCPZxwd/Ca1ZUDqVhHdC61af8Sa6mtfDPAn2NdElHUNl8MMNV+hr8K0D7Jkm5DuyGt0Z7Jxe1Cv5x0Oq54uJLWX2qLQD+FNN3imblK1CjuAOzsZ7uPFbDLwXvO91UsoeS7Hww0yV9GX6lyfFrSKeKNqT+znsG/AU2JumbdTFQB84BegqqjRXFM1AZYOYAnTSil4DW41RSUX67XFIN8890z6d8N4TO5/R8LVdTB2qO01WI90AX7dSnxyVA/1h4+gZB/yH86pWT5buegX1p0K1AjV8HdFroHBevo/lOMAY6o65nYH/XMm36FUHWk0EXomgW+KLPdfDT9Qz4+rK3ZwftrqrwCStlgrFHV8JUU/ljudWjrFbLesHnzNbVtITepB7dzHqbzA2gKKZcUi0lW04lla3B6a2co+9l7PM3Cm3Cz4FOFr1RmjqMuSL9+aG/Qe0m/xn+YKA6Ski5lfdp8BSQPKLRCGyIEfgfPZKtWKDIK+YAAAAASUVORK5CYII=" alt="" />
                    <p class="botton-title" :class="{ active: componentName == 'mains' }">首页</p>
                </div>
            </div>
            <!-- 分类 -->
            <div class="sort" @click="btnClick('sort')">
                <img class="img" v-if="componentName != 'sort'" src="https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/category.png" alt="" />
                <img class="img" v-else src="https://res.vmallres.com/nwap/20201115/staticm/img/category_active.d935077.png" alt="" />
                <p class="botton-title" :class="{ active: componentName == 'sort' }">分类</p>
            </div>
            <!-- 发现 -->
            <a class="find" href="https://m.vmall.com/content/index">
                <img class="img" v-if="componentName != 'find'" src="https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/find.png" alt="" />
                <img class="img" v-else src="https://res.vmallres.com/nwap/20201115/staticm/img/find_active.9f755fd.png" alt="" />
                <p class="botton-title">发现</p>
            </a>
            <!-- 购物车 -->
            <div class="cart" @click="btnClick('cart')">
                <el-badge :value="cartNumber">
                    <img class="img" v-if="componentName != 'cart'" src="https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/cart.png" alt="" />
                    <img
                        class="img"
                        v-else
                        src="data:image/png;base64,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"
                        alt=""
                    />
                    <p class="botton-title" :class="{ active: componentName == 'cart' }">购物车</p>
                </el-badge>
            </div>
            <!-- 我的 -->
            <div class="my" @click="btnClick('my')">
                <img class="img" v-if="componentName != 'my'" src="https://res.vmallres.com/nwap/20201115/images/echannelWap/icon/personal.png" alt="" />
                <img class="img" v-else src="data:image/png;base64,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" alt="" />
                <p class="botton-title" :class="{ active: componentName == 'my' }">我的</p>
            </div>
        </div>
    </div>
</template>

<script>
import Mains from './Mains.vue';
import Sort from './Sort.vue';
import Cart from './Cart.vue';
import My from './My.vue';
export default {
    data() {
        return {};
    },
    components: {
        mains: Mains,
        sort: Sort,
        cart: Cart,
        my: My,
    },
    computed: {
        cartNumber() {
            return this.$store.state.cartNumber;
        },
        componentName() {
            return this.$store.state.componentName;
        },
    },
    methods: {
        btnClick(item) {
            this.$store.commit('btnClick', item);
        },
        updatemessage(){
            this.$store.commit('updatemessage');
        }
    },
    created() {
        let abc = JSON.parse(localStorage.getItem('shopcart'));
        if (abc) {
            this.$store.state.shopcart = abc;
            this.updatemessage()
        }
    },
};
</script>

<style scoped>
.page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.botton-bar {
    flex-shrink: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: #f9f9f9;
    text-align: center;
    height: 13.888vw;
}
.mains,
.sort,
.find,
.cart,
.my {
    width: 20%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.imgs {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 0.75rem;
    line-height: 2.5rem;
}
/* tab切换图标 */
.img {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: 0.2rem;
}
/* tab切换文字 */
.botton-title {
    height: 0.5rem;
    font-family: HYQiHei-FES;
    font-size: 0.5rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 0.5rem;
    letter-spacing: 0;
    color: #787878;
}
.active {
    color: #ca141d;
}
</style>

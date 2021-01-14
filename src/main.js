import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
Vue.use(VueAwesomeSwiper);
import 'swiper/swiper-bundle.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

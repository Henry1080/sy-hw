import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Detail from "../views/Detail.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue'),
    },
    {
        path: '/todetail',
        name: 'Detail',
        component: () => import('../views/Detail.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;

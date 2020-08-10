import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import List from '../views/List.vue'
import Cart from '../views/Cart.vue'
import Orderlist from '../views/Orderlist.vue'
import Addlist from '../views/Addlist.vue'
import Reset from '../views/Reset.vue'
import Payment from '../views/Payment.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/payment',
        name: 'Payment',
        component: Payment
    }, {
        path: '/reset',
        name: 'Reset',
        component: Reset
    }, {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/index',
        name: Index,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Index.vue')
    }, {
        path: '/list',
        name: List,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/List.vue')
    }, {
        path: '/cart',
        name: Cart,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Cart.vue')
    }, {
        path: '/orderlist',
        name: Orderlist,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Orderlist.vue')
    }, {
        path: '/addlist',
        name: Addlist,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Addlist.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
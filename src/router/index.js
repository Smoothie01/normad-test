import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('@/pages/home')
    },{
        path:'/cart',
        name:'Cart',
        component:()=>import('@/pages/cart')
    },{
        path:'/product/:id',
        name:'ProductPage',
        component:()=>import('@/pages/productPage')
    },{
        path:'/check',
        name:'Check',
        component:()=>import('@/pages/result')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

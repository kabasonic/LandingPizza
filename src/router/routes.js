import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/view/Home";
import Menu from "@/view/Menu";
import About from "@/view/About";
import News from "@/view/News";
import PricingDelivery from "@/view/PricingDelivery";
import Reviews from "@/view/Reviews";
import Contacts from "@/view/Contacts";


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shop/all',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/pricing-delivery',
        name: 'Pricing & Delivery',
        component: PricingDelivery
    },

    {
        path: '/news',
        name: 'News',
        component: News
    },

    {
        path: '/reviews',
        name: 'Reviews',
        component: Reviews
    },

    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router


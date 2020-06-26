import Vue from 'vue'
import Router from 'vue-router'
import Cards from './components/Cards'
import Services from './components/Services'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import LoginCheck from './components/LoginCheck'
import LoginNewKey from './components/LoginNewKey'
import MyServices from './components/MyServices'
import Simulation from './components/Simulator'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/home',
            name: 'home',
            component: Home
        },
        {
            path:'/profile',
            name: 'profile',
            component: Profile
        },
        {
            path:'/cards',
            name: 'cards',
            component: Cards
        },
        {
            path:'/services',
            name: 'services',
            component: Services
        },
        {
            path:'/services/my',
            name: 'services_my',
            component: MyServices
        },
        {
            path:'/login',
            name: 'login',
            component: Login
        },
        {
            path:'/login/check',
            name: 'check',
            component: LoginCheck
        },
        {
            path:'/login/check/new',
            name: 'new_check',
            component: LoginNewKey
        },
        {
            path:'/simulation',
            name: 'simulation',
            component: Simulation
        }
    ]
})

export default router;
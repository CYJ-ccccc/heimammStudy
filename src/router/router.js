import Vue from 'vue'
import vueRouter from 'vue-router'
import home from '../components/home.vue'
import login from '../views/login/index.vue'
Vue.use(vueRouter)
const router = new vueRouter({
    routes: [{
            path: '/',
            component: home
        },
        {
            path: '/login',
            component: login
        },
    ]
})
export default router
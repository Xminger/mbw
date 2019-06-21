import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('./views/home.vue')
        },
        {
            path: '/my',
            name: '我的',
            component: () => import('./views/my.vue')
        },
        {
            path: '/classification',
            name: '分类',
            component: () => import('./views/classification.vue')
        },
        {
            path: '/favorite',
            name: '收藏',
            component: () => import('./views/favorite.vue')
        }

    ]
})

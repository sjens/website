import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../pages/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '*',
    name: '404',
    component: () => import('../layouts/404.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/words',
    name: 'Words',
    component: () => import('../pages/Words.vue')
  },
  {
    path: '/words/:articleId',
    component: () => import('../layouts/Article.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

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
    path: '*',
    name: '404',
    component: () => import('../pages/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

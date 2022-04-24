import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('@/views/doc/index.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router

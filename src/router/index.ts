import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('@/views/doc/index.vue'),
    children: [
      {
        path: 'switch',
        name: 'switch',
        component: () => import('@/components/Switch/SwitchDemo.vue')
      }
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router

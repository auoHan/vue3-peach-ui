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
        path: '',
        component: () => import('@/components/DocDemo/DocDemo.vue')
      },
      {
        path: 'switch',
        name: 'switch',
        component: () => import('@/components/SwitchDemo/SwitchDemo.vue')
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('@/components/ButtonDemo/ButtonDemo.vue')
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: () => import('@/components/DialogDemo/DialogDemo.vue')
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: () => import('@/components/TabsDemo/TabsDemo.vue')
      }
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router

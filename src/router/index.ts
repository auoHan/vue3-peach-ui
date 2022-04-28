import {h} from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Markdown from '@/components/Markdown/Markdown.vue'
// @ts-ignore
import {html as Intro} from '@/markdown/intro.md'
// @ts-ignore
import {html as Install} from '@/markdown/install.md'
// @ts-ignore
import {html as GetStarted} from '@/markdown/get-started.md'

const md = (filename: any) => h(Markdown, {content: filename, key: filename})

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
      {path: 'intro', component: md(Intro)},
      {path: 'install', component: md(Install)},
      {path: 'get-started', component: md(GetStarted)},
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

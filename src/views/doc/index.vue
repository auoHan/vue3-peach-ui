<template>
  <div class="layout">
    <TopNav class="nav" toggleMenuButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script setup lang='ts'>

import TopNav from '@/components/TopNav/TopNav.vue'
import {Ref} from 'vue'

const asideVisible = inject<Ref<boolean>>('asideVisible', ref(true))
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      flex-shrink: 0;
      background: #fbd9d9;
      width: 150px;
      position: fixed;
      top: 0;
      left: 0;
      padding: 70px 0 16px;
      height: 100%;

      > h2 {
        margin-bottom: 4px;
        padding: 0 16px;
      }

      > ol {
        > li {
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;
          }

          .router-link-active {
            background: white;
          }
        }
      }

    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: lightgreen;
      overflow: auto;
    }
  }

}
</style>

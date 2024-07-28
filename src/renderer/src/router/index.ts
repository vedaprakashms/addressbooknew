import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from '@renderer/pages/about.vue'
import display from '@renderer/pages/display.vue'
import HomeView from '@renderer/pages/home.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/display', component: display }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

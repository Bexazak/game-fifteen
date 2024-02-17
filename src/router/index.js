import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Results from '@/views/Results.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'GameLayout'
    }
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHashHistory('/game-fifteen/'),
  routes
})

export default router
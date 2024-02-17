import { createRouter, createWebHistory } from 'vue-router'

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
  }
]

const router = createRouter({
  base: '/game-fifteen/',
  history: createWebHistory('/game-fifteen/'),
  routes
})

export default router
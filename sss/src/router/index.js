import { createRouter, createWebHistory } from 'vue-router'
import SofiaView from '../views/SofiaView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory('sss'),
  routes: [
    {
      path: '/',
      redirect: {name: 'sofia-status'}
    },
    {
      path: '/character',
      redirect: {name: 'sofia-status'}
    },
    {
      path: '/character/sofia',
      redirect: {name: 'sofia-status'}
    },
    {
      path: '/character/sofia/status',
      name: 'sofia-status',
      component: SofiaView
    },
  ]
})

export default router

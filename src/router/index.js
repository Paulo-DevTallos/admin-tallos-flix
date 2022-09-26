import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Overview from '../views/Overview.vue'
import DashboardLayout from '../components/layout/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/admin',
      name: 'Overview',
      component: DashboardLayout,
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview,
        }
      ]
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Overview from '../views/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
			redirect: '/login',
      name: 'Home',
    },
		{
			path: '/login',
			name: 'Login',
      component: Login,
		},
    {
      path: '/admin',
      name: 'Overview',
      component: () => import('../components/layout/DashboardLayout.vue'),
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview,
        },
				{
					path: 'users',
					name: 'User',
					component: () => import('../views/UserReports/index.vue'),
				},
				{
					path: 'movies',
					name: 'Movies',
					component: () => import('../views/MoviesReports/index.vue'),
				},
				{
					path: 'comments',
					name: 'Comments',
					component: () => import('../views/CommentsReports/index.vue'),
				},
				{
					path: 'sessions',
					name: 'Sessions',
					component: () => import('../views/Sessions/index.vue'),
				}
      ]
    }
  ]
})

export default router

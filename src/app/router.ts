import { createRouter, createWebHistory } from 'vue-router'
import PageLogin from '../pages/PageLogin.vue'
import PageBooks from '../pages/PageBooks.vue'
import PageUsers from '@/pages/PageUsers.vue'
import { Route } from '@/shared/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Route.LOGIN,
      component: PageLogin
    },
    {
      path: Route.BOOKS,
      component: PageBooks
    },
    {
      path: Route.USERS,
      component: PageUsers
    }
  ]
})

export default router

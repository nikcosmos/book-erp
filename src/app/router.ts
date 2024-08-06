import { createRouter, createWebHistory } from 'vue-router'
import PageLogin from '../pages/PageLogin.vue'
import PageBooks from '../pages/PageBooks.vue'
import PageUsers from '@/pages/PageUsers.vue'
import { ROUTE } from '@/shared/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTE.LOGIN,
      component: PageLogin
    },
    {
      path: ROUTE.BOOKS,
      component: PageBooks
    },
    {
      path: ROUTE.USERS,
      component: PageUsers
    }
  ]
})

export default router

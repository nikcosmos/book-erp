import { createRouter, createWebHistory } from 'vue-router'
import PageLogin from '../pages/PageLogin.vue'
import PageBooks from '../pages/PageBooks.vue'
import PageUsers from '@/pages/PageUsers.vue'
import { Route } from '@/shared/routes'
import { useAuthStore } from '@/shared/store/auth'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: Route.LOGIN,
      component: PageLogin,
      meta: { authPage: true }
    },
    {
      path: Route.BOOKS,
      component: PageBooks,
      meta: { requiresAuth: true }
    },
    {
      path: Route.USERS,
      component: PageUsers,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  const { isAuth } = storeToRefs(authStore)

  if (to.matched.some((record) => record.meta.authPage)) {
    isAuth.value ? next({ path: Route.BOOKS }) : next()
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    isAuth.value ? next() : next({ path: Route.LOGIN })
  }
})

export default router

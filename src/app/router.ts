import { createRouter, createWebHistory } from 'vue-router'
import PageLogin from '../pages/PageLogin.vue'
import PageBooks from '../pages/PageBooks.vue'
import PageUsers from '@/pages/PageUsers.vue'
import { Route } from '@/shared/routes'
import { useAuthStore } from '@/shared/store/auth'
import { UserRole } from '@/shared/consts/user'

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
      meta: { auth: true }
    },
    {
      path: Route.USERS,
      component: PageUsers,
      meta: { auth: true, admin: true }
    }
  ]
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()

  if (to.matched.some((record) => record.meta.authPage)) {
    return authStore.isAuth ? next({ path: Route.BOOKS }) : next()
  }

  if (to.matched.some((record) => record.meta.auth)) {
    return authStore.isAuth ? next() : next({ path: Route.LOGIN })
  }

  if (to.matched.some((record) => record.meta.admin)) {
    return authStore.userInfo?.role === UserRole.ADMIN ? next() : next({ path: Route.BOOKS })
  }
})

export default router

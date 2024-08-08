import { defineStore } from 'pinia'
import { ref, watchEffect, type Ref } from 'vue'
import { userInfoService } from '../services/auth/api'
import { type UserInfo } from '../services/auth/model'
import { useRouter } from 'vue-router'
import { Route } from '../routes'

interface AuthStore {
  isAuth: Ref<boolean>
  userInfo: Ref<UserInfo | null>
  setIsAuth: (val: boolean) => void
  signOut: () => void
}

export const useAuthStore = defineStore('user', (): AuthStore => {
  const router = useRouter()
  const isAuth = ref<boolean>(false)
  const userInfo = ref<UserInfo | null>(null)

  const access = localStorage.getItem('access')
  if (access) isAuth.value = true

  watchEffect(async () => {
    if (!userInfo.value && isAuth.value) {
      try {
        const res = await userInfoService()
        userInfo.value = res
      } catch (error) {
        console.log('UserInfoError')
      }
    }
  })

  const setIsAuth = (val: boolean) => (isAuth.value = val)

  const signOut = () => {
    localStorage.removeItem('access')
    isAuth.value = false
    userInfo.value = null
    router.replace({ path: Route.LOGIN })
  }

  return { isAuth, userInfo, setIsAuth, signOut }
})

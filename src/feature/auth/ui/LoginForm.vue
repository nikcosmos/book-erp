<script lang="ts" setup>
import { Route } from '@/shared/routes'
import { loginService } from '@/shared/services/auth/api'
import { useAuthStore } from '@/shared/store/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const login = ref<string>('admin')
const password = ref<string>('admin')

const { setIsAuth } = useAuthStore()
async function submitLogin() {
  try {
    const res = await loginService(login.value, password.value)
    localStorage.setItem('access', res.access)
    setIsAuth(true)
    router.push(Route.BOOKS)
  } catch (error) {
    console.log('Login Error')
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="submitLogin">
    <input class="login-form__input" type="text" name="login" v-model="login" />
    <input class="login-form__input" type="password" name="password" v-model="password" />
    <button class="login-form__button" type="submit">Login</button>
  </form>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin: auto;
  &__input {
  }

  &__button {
  }
}
</style>

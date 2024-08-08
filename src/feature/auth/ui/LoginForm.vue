<script lang="ts" setup>
import { Route } from '@/shared/routes'
import { loginService } from '@/shared/services/auth/api'
import { useAuthStore } from '@/shared/store/auth'
import UIButton from '@/shared/ui/UIButton.vue'
import UIInput from '@/shared/ui/UIInput.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const login = ref<string>('admin')
const password = ref<string>('admin')

const authStore = useAuthStore()
async function submitLogin() {
  try {
    const res = await loginService(login.value, password.value)
    localStorage.setItem('access', res.access)
    authStore.setIsAuth(true)
    router.push(Route.BOOKS)
  } catch (error) {
    console.log('Login Error')
  }
}
</script>

<template>
  <div class="login">
    <h1 class="login__title">Login</h1>
    <form class="login__form" @submit.prevent="submitLogin">
      <UIInput type="text" name="login" v-model="login" />
      <UIInput type="password" name="password" v-model="password" />
      <UIButton type="submit">Enter</UIButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  max-width: 500px;
  margin: auto;
  &__title {
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>

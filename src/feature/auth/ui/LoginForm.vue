<script lang="ts" setup>
import { Route } from '@/shared/routes'
import { loginService } from '@/shared/services/auth/api'
import { useAuthStore } from '@/shared/store/auth'
import { UIButton, UIInput } from '@/shared/ui'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const login = ref<string>('')
const password = ref<string>('')

const isError = ref<boolean>(false)

const authStore = useAuthStore()
async function submitLogin() {
  try {
    const res = await loginService(login.value, password.value)
    localStorage.setItem('access', res.access)
    authStore.setIsAuth(true)
    router.push(Route.BOOKS)
  } catch (error) {
    isError.value = true
  }
}

watch([login, password], () => (isError.value = false))
</script>

<template>
  <div class="login">
    <h1 class="login__title">Login</h1>
    <form class="login__form" @submit.prevent="submitLogin">
      <UIInput required type="text" name="login" placeholder="Login" v-model="login" />
      <UIInput required type="password" name="password" placeholder="Password" v-model="password" />
      <UIButton type="submit">Enter</UIButton>
    </form>
    <p v-if="isError" class="login__error">Incorrect login or password</p>

    <div class="mock">
      <div class="mock__item">
        <span>Login: admin</span>
        <span>Pass: admin</span>
      </div>
      <div class="mock__item">
        <span>Login: mentor</span>
        <span>Pass: mentor</span>
      </div>
      <div class="mock__item">
        <span>Login: user</span>
        <span>Pass: user</span>
      </div>
    </div>
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

  &__error {
    font-size: 14px;
    margin-top: 20px;
    color: red;
  }
}

.mock {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.mock {
}
</style>

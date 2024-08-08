<script lang="ts" setup>
import { UserRole } from '@/shared/consts/user'
import { ref } from 'vue'
import { useUserStore } from '../store'

const userStore = useUserStore()

const login = ref<string>('')
const password = ref<string>('')
const role = ref<UserRole>(UserRole.USER)

function submitHandler() {
  const payload = {
    login: login.value,
    password: password.value,
    role: role.value
  }
  userStore.addUser(payload, resetForm)
}

function resetForm() {
  login.value = ''
  password.value = ''
  role.value = UserRole.USER
}
</script>

<template>
  <form class="form" @submit.prevent="submitHandler">
    <input type="text" placeholder="login" name="login" v-model="login" />
    <input type="text" placeholder="password" name="password" v-model="password" />
    <div>
      <h3>Role</h3>
      <label>
        <span>User</span>
        <input type="radio" name="role" :value="UserRole.USER" v-model="role" />
      </label>
      <label>
        <span>Mentor</span>
        <input type="radio" name="role" :value="UserRole.MENTOR" v-model="role" />
      </label>
      <label>
        <span>Admin</span>
        <input type="radio" name="role" :value="UserRole.ADMIN" v-model="role" />
      </label>
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

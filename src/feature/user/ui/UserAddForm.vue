<script lang="ts" setup>
import { UserRole } from '@/shared/consts/user'
import { ref } from 'vue'
import { useUserStore } from '../store'
import { UIButton, UIInput, UIModal, UIRadio } from '@/shared/ui'

const isOpen = ref<boolean>(false)

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
  <UIButton type="button" @click="isOpen = true">Add User</UIButton>
  <UIModal class="add-modal" :is-open="isOpen" @onClose="isOpen = false">
    <div class="add-modal__top">
      <h4 class="add-modal__top-title">Add User</h4>
      <UIButton type="button" @click="isOpen = false">Close</UIButton>
    </div>
    <form class="add-modal__form" @submit.prevent="submitHandler">
      <UIInput required type="text" placeholder="Login" name="login" v-model="login" />
      <UIInput required type="text" placeholder="Password" name="password" v-model="password" />
      <div class="add-modal__role">
        <h3 class="add-modal__role-title">Role:</h3>
        <div class="add-modal__role-list">
          <UIRadio required name="role" :value="UserRole.USER" v-model="role"> User </UIRadio>
          <UIRadio required name="role" :value="UserRole.MENTOR" v-model="role">Mentor</UIRadio>
          <UIRadio required name="role" :value="UserRole.ADMIN" v-model="role">Admin</UIRadio>
        </div>
      </div>
      <UIButton type="submit">Add</UIButton>
    </form>
  </UIModal>
</template>

<style lang="scss" scoped>
.add-modal {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__top-title {
    font-size: 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__role {
    display: flex;
    gap: 12px;
    align-items: center;
    @media (max-width: 767.98px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__role-title {
    font-size: 18px;
  }

  &__role-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
}
</style>

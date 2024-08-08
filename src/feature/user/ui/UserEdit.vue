<script lang="ts" setup>
import UIModal from '@/shared/ui/UIModal.vue'
import { ref } from 'vue'
import { useUserStore } from '../store'
import type { UserItem } from '@/shared/services/user/model'
import { UserRole } from '@/shared/consts/user'
import { UIButton, UIInput, UIRadio } from '@/shared/ui'

const props = defineProps<{ user: UserItem }>()
const userStore = useUserStore()

const isOpen = ref<boolean>(false)

const login = ref<string>(props.user.login)
const role = ref<UserRole>(props.user.role)

function submitHandler() {
  const payload = {
    id: props.user.id,
    login: login.value,
    role: role.value
  }
  userStore.editUser(payload, () => (isOpen.value = false))
}
</script>

<template>
  <UIButton type="button" @click="isOpen = true">Edit</UIButton>
  <UIModal class="edit-modal" :is-open="isOpen" @onClose="isOpen = false">
    <div class="edit-modal__top">
      <h4 class="edit-modal__top-title">Edit User</h4>
      <UIButton type="button" @click="isOpen = false">Close</UIButton>
    </div>
    <form class="edit-modal__form" @submit.prevent="submitHandler">
      <UIInput required type="text" placeholder="Login" name="title" v-model="login" />
      <div class="edit-modal__role">
        <h3 class="edit-modal__role-title">Role:</h3>
        <div class="edit-modal__role-list">
          <UIRadio required name="role" :value="UserRole.USER" v-model="role"> User </UIRadio>
          <UIRadio required name="role" :value="UserRole.MENTOR" v-model="role">Mentor</UIRadio>
          <UIRadio required name="role" :value="UserRole.ADMIN" v-model="role">Admin</UIRadio>
        </div>
      </div>
      <UIButton type="submit">Edit</UIButton>
    </form>
  </UIModal>
</template>

<style lang="scss" scoped>
.edit-modal {
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

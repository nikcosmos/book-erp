<script lang="ts" setup>
import UIModal from '@/shared/ui/UIModal.vue'
import { ref } from 'vue'
import { useUserStore } from '../store'
import type { UserItem } from '@/shared/services/user/model'
import { UserRole } from '@/shared/consts/user'

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
  <button type="button" @click="isOpen = true">Edit</button>
  <UIModal class="edit-modal" :is-open="isOpen" @onClose="isOpen = false">
    <form class="edit-modal__form" @submit.prevent="submitHandler">
      <input type="text" placeholder="login" name="title" v-model="login" />
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
      <button type="submit">Edit</button>
    </form>
  </UIModal>
</template>

<style lang="scss" scoped>
.edit-modal {
  color: var(--black);
  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>

<script lang="ts" setup>
import type { UserItem } from '@/shared/services/user/model'
import UserEdit from './UserEdit.vue'
import { useUserStore } from '../store'

const props = defineProps<{ user: UserItem }>()

const userStore = useUserStore()
</script>

<template>
  <div class="card">
    <div class="card__content">
      <h3>{{ props.user.login }}</h3>
      <span>{{ props.user.role }}</span>
    </div>
    <div class="card__actions">
      <UserEdit :user="props.user" />
      <button type="button" @click="userStore.deleteUser(props.user.id)">Delete</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 12px;
  &__content {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>

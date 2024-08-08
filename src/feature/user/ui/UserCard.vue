<script lang="ts" setup>
import type { UserItem } from '@/shared/services/user/model'
import UserEdit from './UserEdit.vue'
import { useUserStore } from '../store'
import useUserPerms from '../perms'
import { UIButton } from '@/shared/ui'

const props = defineProps<{ user: UserItem }>()

const userStore = useUserStore()

const { isCanEdit, isCanDelete } = useUserPerms()
</script>

<template>
  <div class="card">
    <div class="card__content">
      <h3>Login: {{ props.user.login }}</h3>
      <span>Role: {{ props.user.role }}</span>
    </div>
    <div class="card__actions">
      <UserEdit v-if="isCanEdit(props.user.role)" :user="props.user" />
      <UIButton
        v-if="isCanDelete(props.user.role)"
        type="button"
        @click="userStore.deleteUser(props.user.id)"
      >
        Delete
      </UIButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 12px;
  &__content {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }

  &__actions {
    display: flex;
    gap: 8px;
    @media (max-width: 767.98px) {
      flex-direction: column;
    }
  }
}
</style>

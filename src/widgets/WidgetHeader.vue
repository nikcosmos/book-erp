<script lang="ts" setup>
import { UserRole } from '@/shared/consts/user'
import { Route } from '@/shared/routes'
import { useAuthStore } from '@/shared/store/auth'
import { UIButton, UIChip } from '@/shared/ui'
import UiContainer from '@/shared/ui/UiContainer.vue'

const authStore = useAuthStore()
</script>

<template>
  <header class="header">
    <UiContainer>
      <div v-if="authStore.isAuth" class="header__content">
        <div class="header__link">
          <UIButton :to="{ path: Route.BOOKS }"> Books </UIButton>
          <UIButton v-if="authStore.userInfo?.role === UserRole.ADMIN" :to="{ path: Route.USERS }">
            Users
          </UIButton>
        </div>
        <div class="header__action">
          <UIChip>{{ authStore.userInfo?.role }}</UIChip>
          <UIButton type="button" @click="authStore.signOut()">Sign Out</UIButton>
        </div>
      </div>
    </UiContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px 0px;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;
    .router-link-active {
      color: var(--black);
      box-shadow: 0 0 5px var(--primary);
    }
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>

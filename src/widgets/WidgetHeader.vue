<script lang="ts" setup>
import { UserRole } from '@/shared/consts/user'
import { Route } from '@/shared/routes'
import { useAuthStore } from '@/shared/store/auth'
import UiContainer from '@/shared/ui/UiContainer.vue'
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()
</script>

<template>
  <header class="header">
    <UiContainer>
      <div v-if="authStore.isAuth" class="header__content">
        <div class="header__link">
          <RouterLink :to="{ path: Route.BOOKS }">Books</RouterLink>
          <RouterLink v-if="authStore.userInfo?.role === UserRole.ADMIN" :to="{ path: Route.USERS }"
            >Users</RouterLink
          >
        </div>
        <div class="header__action">
          <div>Hello,{{ authStore.userInfo?.login }}</div>
          <div>Role:{{ authStore.userInfo?.role }}</div>
          <button type="button" @click="authStore.signOut()">Sign Out</button>
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
  }

  &__link {
    display: flex;
    gap: 12px;
  }

  &__action {
    display: flex;
    gap: 10px;
  }
}
</style>

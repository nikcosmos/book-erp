<script lang="ts" setup>
import { Route } from '@/shared/routes'
import { useAuthStore } from '@/shared/store/auth'
import UiContainer from '@/shared/ui/UiContainer.vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()
const { signOut } = authStore
const { isAuth } = storeToRefs(authStore)
</script>

<template>
  <header class="header">
    <UiContainer>
      <div v-if="isAuth" class="header__content">
        <div class="header__link">
          <RouterLink :to="{ path: Route.BOOKS }">Books</RouterLink>
          <RouterLink :to="{ path: Route.USERS }">Users</RouterLink>
        </div>
        <div class="header__action">
          <button type="button" @click="signOut">Sign Out</button>
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
  }
}
</style>

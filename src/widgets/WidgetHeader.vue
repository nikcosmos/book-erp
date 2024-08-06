<script lang="ts" setup>
import { ROUTE } from '@/shared/routes'
import UiContainer from '@/shared/ui/UiContainer.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <UiContainer>
      <div class="header__content">
        <RouterLink :to="{ path: ROUTE.LOGIN }">Login</RouterLink>
        <RouterLink :to="{ path: ROUTE.BOOKS }">Books</RouterLink>
        <RouterLink :to="{ path: ROUTE.USERS }">Users</RouterLink>
      </div>
    </UiContainer>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 20px 0px;
  &__content {
    display: flex;
    gap: 12px;
  }
}
</style>

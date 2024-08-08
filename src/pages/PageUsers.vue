<script lang="ts" setup>
import UserAddForm from '@/feature/user/ui/UserAddForm.vue'
import UserList from '@/feature/user/ui/UserList.vue'
import UiContainer from '@/shared/ui/UiContainer.vue'
</script>

<template>
  <UiContainer>
    <div class="user-page">
      <div class="user-page__head">
        <h1 class="user-page__title">Users</h1>
        <UserAddForm />
      </div>
      <UserList />
    </div>
  </UiContainer>
</template>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 24px;
  }
}
</style>

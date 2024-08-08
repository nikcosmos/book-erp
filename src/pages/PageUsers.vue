<script lang="ts" setup>
import UserAddForm from '@/feature/user/ui/UserAddForm.vue'
import UserList from '@/feature/user/ui/UserList.vue'
import UiContainer from '@/shared/ui/UiContainer.vue'
</script>

<template>
  <UiContainer>
    <div class="user-page">
      <UserAddForm />
      <UserList />
    </div>
  </UiContainer>
</template>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

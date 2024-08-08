<script lang="ts" setup>
import { onMounted } from 'vue'
import UserCard from './UserCard.vue'
import { useUserStore } from '../store'

const userStore = useUserStore()

onMounted(() => userStore.getList())
</script>

<template>
  <div class="list">
    <UserCard v-for="user in userStore.userList" :key="user.id" :user="user" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

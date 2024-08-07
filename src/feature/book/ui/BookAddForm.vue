<script lang="ts" setup>
import { UserRole } from '@/shared/consts/user'
import { useAuthStore } from '@/shared/store/auth'
import { ref } from 'vue'
import { useBookStore } from '../store'

const authStore = useAuthStore()
const bookStore = useBookStore()

const title = ref<string>('')
const description = ref<string>('')
const author = ref<string>('')
const data = ref<string>('')

function submitHandler() {
  const payload = {
    title: title.value,
    description: description.value,
    author: author.value,
    data: data.value,
    creator: authStore.userInfo?.role ?? UserRole.USER
  }
  bookStore.addBook(payload, resetForm)
}

function resetForm() {
  title.value = ''
  description.value = ''
  author.value = ''
  data.value = ''
}
</script>

<template>
  <form class="form" @submit.prevent="submitHandler">
    <input type="text" name="title" v-model="title" />
    <input type="text" name="description" v-model="description" />
    <input type="text" name="author" v-model="author" />
    <input type="date" name="data" v-model="data" />
    <button type="submit">Add</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

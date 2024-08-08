<script lang="ts" setup>
import { UserRole } from '@/shared/consts/user'
import { useAuthStore } from '@/shared/store/auth'
import { ref } from 'vue'
import { useBookStore } from '../store'
import { UIInput, UIButton, UITextArea, UIModal } from '@/shared/ui'

const isOpen = ref<boolean>(false)

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

  isOpen.value = false
}
</script>

<template>
  <UIButton type="button" @click="isOpen = true">Add Book</UIButton>
  <UIModal :is-open="isOpen" @onClose="isOpen = false">
    <form class="form" @submit.prevent="submitHandler">
      <UIInput type="text" name="title" placeholder="Name" v-model="title" />
      <UIInput type="text" name="author" placeholder="Author" v-model="author" />
      <UIInput type="date" name="data" placeholder="Data" v-model="data" />
      <UITextArea name="description" placeholder="Description" v-model="description" />
      <UIButton type="submit">Add</UIButton>
    </form>
  </UIModal>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

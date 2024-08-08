<script lang="ts" setup>
import { BookItem } from '@/shared/services/book/model'
import { ref } from 'vue'
import { useBookStore } from '../store'
import { UIButton, UIInput, UIModal, UITextArea } from '@/shared/ui'

const props = defineProps<{ book: BookItem }>()

const bookStore = useBookStore()

const isOpen = ref<boolean>(false)

const title = ref<string>(props.book.title)
const description = ref<string>(props.book.description)
const author = ref<string>(props.book.author)
const data = ref<string>(props.book.data)

function submitHandler() {
  const payload = {
    id: props.book.id,
    title: title.value,
    description: description.value,
    author: author.value,
    data: data.value,
    creator: props.book.creator
  }
  bookStore.editBook(payload, () => (isOpen.value = false))
}
</script>

<template>
  <UIButton type="button" @click="isOpen = true">Edit</UIButton>
  <UIModal class="edit-modal" :is-open="isOpen" @onClose="isOpen = false">
    <div class="edit-modal__top">
      <h4 class="edit-modal__top-title">Edit Book</h4>
      <UIButton type="button" @click="isOpen = false">Close</UIButton>
    </div>
    <form class="edit-modal__form" @submit.prevent="submitHandler">
      <UIInput required type="text" name="title" v-model="title" />
      <UIInput required type="text" name="author" v-model="author" />
      <UIInput required type="date" name="data" v-model="data" />
      <UITextArea required type="text" name="description" v-model="description" />
      <UIButton type="submit">Edit</UIButton>
    </form>
  </UIModal>
</template>

<style lang="scss" scoped>
.edit-modal {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__top-title {
    font-size: 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>

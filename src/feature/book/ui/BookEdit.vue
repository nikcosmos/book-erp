<script lang="ts" setup>
import { BookItem } from '@/shared/services/book/model'
import UIModal from '@/shared/ui/UIModal.vue'
import { ref } from 'vue'
import { useBookStore } from '../store'

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
  <button type="button" @click="isOpen = true">Edit</button>
  <UIModal class="edit-modal" :is-open="isOpen" @onClose="isOpen = false">
    <form class="edit-modal__form" @submit.prevent="submitHandler">
      <input type="text" name="title" v-model="title" />
      <input type="text" name="description" v-model="description" />
      <input type="text" name="author" v-model="author" />
      <input type="date" name="data" v-model="data" />
      <button type="submit">Edit</button>
    </form>
  </UIModal>
</template>

<style lang="scss" scoped>
.edit-modal {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>

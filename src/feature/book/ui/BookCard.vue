<script lang="ts" setup>
import type { BookItem } from '@/shared/services/book/model.ts'
import { useBookStore } from '../store'
import BookEdit from './BookEdit.vue'
import useBookPerms from '../perms'

const props = defineProps<{ book: BookItem }>()

const bookStore = useBookStore()

const { isCanEdit, isCanDelete } = useBookPerms()
</script>

<template>
  <div class="card">
    <div class="card__content">
      <h3>{{ props.book.title }}</h3>
      <span>{{ props.book.description }}</span>
      <span>{{ props.book.author }}</span>
      <span>{{ props.book.data }}</span>
    </div>
    <div class="card__actions">
      <BookEdit v-if="isCanEdit(props.book.creator)" :book="props.book" />
      <button
        v-if="isCanDelete(props.book.creator)"
        type="button"
        @click="bookStore.deleteBook(props.book.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 12px;
  &__content {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>

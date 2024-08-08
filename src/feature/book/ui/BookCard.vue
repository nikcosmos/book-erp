<script lang="ts" setup>
import type { BookItem } from '@/shared/services/book/model.ts'
import { useBookStore } from '../store'
import BookEdit from './BookEdit.vue'
import useBookPerms from '../perms'
import { UIButton } from '@/shared/ui'

const props = defineProps<{ book: BookItem }>()

const bookStore = useBookStore()

const { isCanEdit, isCanDelete } = useBookPerms()
</script>

<template>
  <div class="card">
    <div class="card__top">
      <div class="card__info">
        <h3>Name: {{ props.book.title }}</h3>
        <span>Author: {{ props.book.author }}</span>
        <span>Data: {{ props.book.data }}</span>
      </div>
      <div class="card__actions">
        <BookEdit v-if="isCanEdit(props.book.creator)" :book="props.book" />
        <UIButton
          v-if="isCanDelete(props.book.creator)"
          type="button"
          @click="bookStore.deleteBook(props.book.id)"
        >
          Delete
        </UIButton>
      </div>
    </div>
    <div class="card__descr">
      <h4 class="card__descr-title">About</h4>
      <p class="card__descr-text">{{ props.book.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid teal;
  border-radius: 12px;
  padding: 12px;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 12px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__actions {
    display: flex;
    gap: 8px;
    @media (max-width: 767.98px) {
      flex-direction: column;
    }
  }

  &__descr {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__descr-title {
    font-size: 18px;
  }

  &__descr-text {
    font-size: 14px;
  }
}
</style>

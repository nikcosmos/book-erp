<script lang="ts" setup>
import BookCard from './BookCard.vue'
import { useBookStore } from '../store'

const bookStore = useBookStore()
</script>

<template>
  <div class="list">
    <p v-if="!bookStore.bookList.length" class="list__empty">Nothing found</p>
    <BookCard v-for="book in bookStore.bookList" :book="book" :key="book.id" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__empty {
    margin-top: 30px;
    font-size: 20px;
    text-align: center;
  }
}
</style>

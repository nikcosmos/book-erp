<script lang="ts" setup>
import BookCard from './BookCard.vue'
import { useBookStore } from '../store'

const bookStore = useBookStore()
</script>

<template>
  <div class="list">
    <BookCard v-for="book in bookStore.bookList" :book="book" :key="book.id" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

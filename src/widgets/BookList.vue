<script lang="ts" setup>
import { BookList } from '@/shared/services/book/model'
import { onMounted, ref } from 'vue'
import BookCard from './BookCard.vue'
import { bookListService } from '@/shared/services/book/api'

const bookList = ref<BookList>([])

async function getList() {
  try {
    const res = await bookListService()
    bookList.value = res
  } catch (error) {
    console.log('Get Book List Error')
  }
}

onMounted(() => getList())
</script>

<template>
  <div class="list">
    <BookCard v-for="book in bookList" :book="book" :key="book.id" />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

<script lang="ts" setup>
import UiContainer from '@/shared/ui/UiContainer.vue'
import BookAddForm from '@/feature/book/ui/BookAddForm.vue'
import BookList from '@/feature/book/ui/BookList.vue'
import BookSearch from '@/feature/book/ui/BookSearch.vue'
import BookSorting from '@/feature/book/ui/BookSorting.vue'
</script>

<template>
  <UiContainer>
    <div class="book-page">
      <BookAddForm />
      <div class="book-page__actions">
        <BookSearch />
        <BookSorting />
      </div>
      <BookList />
    </div>
  </UiContainer>
</template>

<style lang="scss" scoped>
.book-page {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>

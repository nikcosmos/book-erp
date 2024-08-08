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
      <div class="book-page__head">
        <h1 class="book-page__title">Books</h1>
        <BookAddForm />
      </div>
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

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 24px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }
}
</style>

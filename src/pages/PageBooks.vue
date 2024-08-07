<script lang="ts" setup>
import UiContainer from '@/shared/ui/UiContainer.vue'
import BookAddForm from '@/feature/book/ui/BookAddForm.vue'
import BookList from '@/feature/book/ui/BookList.vue'
</script>

<template>
  <UiContainer>
    <BookAddForm class="book-form" />
    <BookList />
  </UiContainer>
</template>

<style lang="scss" scoped>
.book-form {
  margin-bottom: 20px;
}
</style>

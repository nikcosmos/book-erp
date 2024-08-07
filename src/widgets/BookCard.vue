<script lang="ts" setup>
import type { BookItem } from '@/shared/services/book/model.ts'
const props = defineProps<{ book: BookItem }>()
</script>

<template>
  <div class="card">
    <h3>{{ props.book.title }}</h3>
    <span>{{ props.book.description }}</span>
    <span>{{ props.book.author }}</span>
    <span>{{ props.book.data }}</span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>

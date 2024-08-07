<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { SortingBy } from '../const'
const router = useRouter()

function sortHandler(val: SortingBy) {
  router.replace({
    query: {
      sort: val
    }
  })
}
</script>

<template>
  <div class="sorting">
    <button type="button" @click="sortHandler(SortingBy.TITLE)">Title</button>
    <button type="button" @click="sortHandler(SortingBy.ID)">Id</button>
  </div>
</template>

<style lang="scss" scoped>
.sorting {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { SortingBy } from '../const'
import { UIButton } from '@/shared/ui'

const route = useRoute()
const router = useRouter()

function sortHandler(val: SortingBy) {
  router.replace({
    query: {
      ...route.query,
      sort: val
    }
  })
}
</script>

<template>
  <div class="sorting">
    <UIButton
      type="button"
      :class="['sorting__button', { active: route.query.sort === SortingBy.TITLE }]"
      @click="sortHandler(SortingBy.TITLE)"
    >
      Title
    </UIButton>
    <UIButton
      type="button"
      :class="['sorting__button', { active: route.query.sort === SortingBy.ID }]"
      @click="sortHandler(SortingBy.ID)"
      >Id</UIButton
    >
  </div>
</template>

<style lang="scss" scoped>
.sorting {
  display: flex;
  gap: 8px;
  align-items: center;
  &__button {
    border: 2px solid transparent;
    &.active {
      border-color: var(--white);
    }
  }
}
</style>

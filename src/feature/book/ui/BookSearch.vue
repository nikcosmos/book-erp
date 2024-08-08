<script lang="ts" setup>
import { UIInput } from '@/shared/ui'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { debounce } from 'lodash'
const route = useRoute()
const router = useRouter()

const search = ref<string>('')
if (route.query.search) search.value = String(route.query.search)

const changeHandler = () =>
  router.replace({
    query: { ...route.query, search: search.value || undefined }
  })
const debouncedChangeHandler = debounce(changeHandler, 500)
watch(search, debouncedChangeHandler)
</script>

<template>
  <label class="search">
    <UIInput type="search" placeholder="Search" v-model="search" />
  </label>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>

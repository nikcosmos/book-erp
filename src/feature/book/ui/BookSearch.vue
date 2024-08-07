<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const search = ref('')
if (route.query.search) search.value = String(route.query.search)
const changeHandler = () =>
  router.replace({
    query: { search: search.value || undefined }
  })
</script>

<template>
  <input type="search" v-model="search" @input="changeHandler" />
</template>

<style></style>

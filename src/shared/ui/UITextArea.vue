<script lang="ts" setup>
const model = defineModel<string>()
</script>

<template>
  <textarea class="textarea" v-model="model"></textarea>
</template>

<style lang="scss" scoped>
.textarea {
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  color: var(--white);
  background: var(--black);
  resize: vertical;
  &:focus-within {
    box-shadow: 0 0 3px var(--primary);
  }
}
</style>

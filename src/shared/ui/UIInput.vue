<script lang="ts" setup>
const model = defineModel()
</script>

<template>
  <input class="input" v-model="model" />
</template>

<style lang="scss" scoped>
.input {
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  color: var(--white);
  background: var(--black);
  &:focus-within {
    box-shadow: 0 0 3px var(--primary);
  }
}
</style>

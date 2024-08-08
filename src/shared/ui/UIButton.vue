<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

interface CustomLinkButtonProps {
  to?: string | object
  customProp?: string
  [key: string]: any
}
const props = defineProps<CustomLinkButtonProps>()
</script>

<template>
  <component :is="props.to ? RouterLink : 'button'" v-bind="props" class="button">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.button {
  text-align: center;
  padding: 8px;
  background: var(--primary);
  border-radius: 8px;
  transition: opacity 0.2s ease 0s;
  color: var(--white);
  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
  &:active {
    opacity: 0.6;
  }
}
</style>

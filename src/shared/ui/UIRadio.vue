<script lang="ts" setup>
import { useAttrs } from 'vue'

const model = defineModel()
const attrs = useAttrs()
</script>

<template>
  <label class="radio">
    <input class="radio__input" v-model="model" type="radio" v-bind="attrs" />
    <span class="radio__style"></span>
    <slot />
  </label>
</template>

<style lang="scss" scoped>
.radio {
  position: relative;
  display: flex;
  gap: 4px;
  cursor: pointer;
  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  &__style {
    display: block;
    width: 16px;
    height: 16px;
    border: 2px solid var(--primary);
    position: relative;
    border-radius: 50%;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      scale: 0;
      width: 8px;
      height: 8px;
      background: var(--primary);
      border-radius: 50px;
      transition: scale 0.2s ease 0s;
    }
    .radio__input:checked ~ &::after {
      scale: 1;
      transition: scale 0.2s ease 0s;
    }
  }
}
</style>

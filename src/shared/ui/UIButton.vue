<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
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

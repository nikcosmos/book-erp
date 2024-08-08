<template>
  <span class="chip">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.chip {
  padding: 8px;
  border: 2px solid var(--primary);
  border-radius: 8px;
}
</style>

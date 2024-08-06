<script setup lang="ts">
import WidgetFooter from '@/widgets/WidgetFooter.vue'
import WidgetHeader from '@/widgets/WidgetHeader.vue'
</script>

<template>
  <div class="wrapper">
    <WidgetHeader />
    <main class="main">
      <slot />
    </main>
    <WidgetFooter />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
.main {
  flex: 1 1 auto;
}
</style>

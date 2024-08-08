<script lang="ts" setup>
import { watch } from 'vue'

const props = defineProps<{ isOpen: boolean }>()
defineEmits(['onClose'])

watch(
  () => props.isOpen,
  (isOpen) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
)
</script>

<template>
  <div :class="['modal', { 'modal-open': props.isOpen }]" @click.self="$emit('onClose')">
    <div class="modal__body" @click.self="$emit('onClose')">
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 80px 15px;
  overflow: auto;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease 0s;
  &.modal-open {
    transition: all 0.3s ease 0s;
    opacity: 1;
    visibility: visible;
  }
  &__body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    width: 100%;
  }
  &__content {
    max-width: 690px;
    width: 100%;
    padding: 30px;
    transform: scale(0);
    transition: all 0.3s ease 0s;
    background: var(--black);
    border-radius: 12px;
    @media (max-width: 767.98px) {
      padding: 20px 12px;
    }
    .modal-open & {
      transform: scale(1);
      transition: all 0.3s ease 0s;
    }
  }
}
</style>

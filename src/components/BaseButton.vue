<template>
  <button
    class="base-button"
    :class="[variant, { loading }]"
    :disabled="disabled || loading"
  >
    <span v-if="loading">…</span>
    <span v-else><slot /></span>
  </button>
  
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  disabled: false,
  loading: false,
});
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
}
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.primary { background: #2563eb; color: #fff; }
.secondary { background: #111827; color: #fff; }
.ghost { background: transparent; border-color: #d1d5db; color: #111827; }
</style>



<template>
  <footer id="footer" class="app-footer">
    <div class="container">
      <small>© {{ year }} MonProjet. Tous droits réservés.</small>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const year = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  margin-top: 48px;
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
  color: #6b7280;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>



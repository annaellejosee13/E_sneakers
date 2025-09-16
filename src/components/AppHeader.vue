<template>
  <header class="app-header">
    <div class="container">
      <AppNav />
    </div>
  </header>
</template>

<script setup lang="ts">
import AppNav from './AppNav.vue';
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffffcc;
  backdrop-filter: saturate(180%) blur(8px);
  border-bottom: 1px solid #e5e7eb;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>



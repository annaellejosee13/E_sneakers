<template>
  <div id="app">
    <AppHeader />
    <main class="main">
      <RouterView />
    </main>
    <AppFooter />
    <GoToTop />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import GoToTop from './components/GoToTop.vue'
</script>

<style>
.main { 
  min-height: calc(100vh - 56px - 80px); 
}

/* Transitions globales */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
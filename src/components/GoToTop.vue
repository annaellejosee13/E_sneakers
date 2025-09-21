<template>
  <a 
    href="#top" 
    class="go-top-btn" 
    data-go-top 
    :class="{ active: appStore.isScrolled }" 
    aria-label="Aller en haut"
  >
    <ion-icon name="arrow-up-outline"></ion-icon>
  </a>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()
</script>

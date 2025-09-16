<template>
  <section class="page">
    <h1>Page non trouvée</h1>
    <p>La page demandée n'existe pas.</p>
    <RouterLink to="/">Retour à l'accueil</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.page { max-width: 1024px; margin: 24px auto; padding: 0 16px; }
</style>



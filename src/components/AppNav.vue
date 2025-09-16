<template>
  <nav class="app-nav">
    <RouterLink class="brand" to="/">
      <img class="logo" src="/assets/images/logo.svg" alt="Logo" />
      <span>MonProjet</span>
    </RouterLink>
    <ul>
      <li><RouterLink to="/">Accueil</RouterLink></li>
      <li><RouterLink to="/products">Produits</RouterLink></li>
      <li><RouterLink to="/#footer">À propos</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.app-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}
.brand {
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.logo { width: 28px; height: 28px; }
ul {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: #111827;
  text-decoration: none;
}
a.router-link-active {
  color: #2563eb;
}
</style>



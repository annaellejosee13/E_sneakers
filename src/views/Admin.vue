<template>
    <section class="home">
      <h1>Bienvenue</h1>
      <p>Ceci est la page de connexion de l'application.</p>
    </section>
  </template>
  
 

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToAdmin() {
  router.push('/admin')
}
</script>

  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 20px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #4b5563;
  }
  </style>
<template>
  <div class="logout-container">
    <div class="logout-icon">
      <i class="fa-solid fa-right-from-bracket"></i>
    </div>
    <div class="logout-title">Déconnexion réussie</div>
    <div class="logout-text">
      Vous avez été déconnecté avec succès.<br>
      Merci d'avoir utilisé Sneaker Store !
    </div>
    <router-link to="/" class="btn-main">Retour à l'accueil</router-link>
    <router-link to="/login" class="btn-main" style="margin-top:16px;display:inline-block;">S'inscrire / Se connecter</router-link>
  </div>
</template>

<script setup lang="ts">
// Pas de logique spécifique ici
</script>

<style scoped>
.logout-container {
  max-width: 400px;
  margin: 80px auto;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 40px 32px;
  text-align: center;
}
.logout-icon {
  background: #ff6b6b;
  color: #fff;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 24px auto;
}
.logout-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
}
.logout-text {
  color: #222;
  font-size: 1.1rem;
  margin-bottom: 32px;
}
.btn-main {
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
}
.btn-main:hover {
  background: #ee5a6f;
}
</style>

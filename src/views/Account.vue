<template>
  <div class="account-page">
    <section class="section">
      <div class="container">
        <h1 class="h1 section-title">Mon Compte</h1>
        
        <div class="account-content">
          <div class="account-menu">
            <h3>Mon Profil</h3>
            <ul>
              <li><router-link to="/commandes">Mes Commandes</router-link></li>
              <li><router-link to="/favoris">Mes Favoris</router-link></li>
              <li><router-link to="/compte">Informations Personnelles</router-link></li>
              <li><a href="#">Déconnexion</a></li>
            </ul>
          </div>
          
          <div class="account-details">
            <h2>Informations Personnelles</h2>
            <form class="account-form">
              <div class="form-group">
                <label for="firstName">Prénom</label>
                <input type="text" id="firstName" v-model="user.firstName">
              </div>
              
              <div class="form-group">
                <label for="lastName">Nom</label>
                <input type="text" id="lastName" v-model="user.lastName">
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="user.email">
              </div>
              
              <div class="form-group">
                <label for="phone">Téléphone</label>
                <input type="tel" id="phone" v-model="user.phone">
              </div>
              
              <button type="submit" class="btn btn-primary">Mettre à jour</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+33 1 23 45 67 89'
})
</script>

<style scoped>
.account-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.account-menu {
  background: var(--cultured);
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
}

.account-menu ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.account-menu li {
  margin-bottom: 0.5rem;
}

.account-menu a {
  color: var(--onyx);
  text-decoration: none;
  padding: 0.5rem;
  display: block;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.account-menu a:hover {
  background-color: var(--gainsboro);
}

.account-form {
  max-width: 500px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: var(--fw-500);
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gainsboro);
  border-radius: 4px;
  font-size: var(--fs-6);
}

@media (max-width: 768px) {
  .account-content {
    grid-template-columns: 1fr;
  }
}
</style>

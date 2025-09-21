<template>
  <div class="account-page">
    <section class="section">
      <div class="container">
        <h1 class="h1 section-title">Mon Compte</h1>

        <div class="account-content">
          <aside class="account-menu">
            <h3>Mon Profil</h3>
            <ul>
              <li><router-link to="/commandes">Mes Commandes</router-link></li>
              <li><router-link to="/favoris">Mes Favoris</router-link></li>
              <li><router-link to="/compte">Informations Personnelles</router-link></li>
              <li><a href="#" @click.prevent="logout">Déconnexion</a></li>
            </ul>
          </aside>

          <main class="account-details">
            <h2>Informations Personnelles</h2>
            <form class="account-form" @submit.prevent="updateProfile">
              <div class="form-group">
                <label for="firstName">Prénom</label>
                <input type="text" id="firstName" v-model="user.firstName" />
              </div>

              <div class="form-group">
                <label for="lastName">Nom</label>
                <input type="text" id="lastName" v-model="user.lastName" />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="user.email" />
              </div>

              <div class="form-group">
                <label for="phone">Téléphone</label>
                <input type="tel" id="phone" v-model="user.phone" />
              </div>

              <button type="submit" class="btn btn-primary">Mettre à jour</button>
            </form>
          </main>
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

function updateProfile() {
  // ici tu peux appeler ton API ou gérer la validation
  console.log('Mise à jour du profil :', user.value)
  alert('Profil mis à jour !')
}

function logout() {
  // placeholder logout
  console.log('Déconnexion')
  alert('Déconnecté')
}
</script>

<!-- Style GLOBAL (pas scoped) pour éviter les problèmes de portée -->
<style>
/* Définition des variables globales si elles n'existent pas encore.
   Tu peux déplacer ça dans ton fichier global (main.css) si tu préfères. */
:root{
  --cultured: #f5f6f7;
  --onyx: #111827;
  --gainsboro: #e6e6e6;
  --fw-500: 600;
  --fs-6: 14px;
  --primary: #FF4B2B;
}

/* Structure */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem;
}
.section-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
}

/* Grid */
.account-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

/* Menu (aside) */
.account-menu {
  background: var(--cultured);
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
}
.account-menu h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
}
.account-menu ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}
.account-menu li {
  margin-bottom: 0.5rem;
}
.account-menu a,
.account-menu a.router-link-active {
  color: var(--onyx);
  text-decoration: none;
  padding: 0.45rem 0.5rem;
  display: block;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}
.account-menu a:hover,
.account-menu a.router-link-active {
  background-color: var(--gainsboro);
}

/* Details (main) */
.account-details h2 {
  margin-top: 0;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.account-form {
  max-width: 600px;
}

/* Form */
.form-group {
  margin-bottom: 1.25rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: var(--fw-500);
  font-size: 0.95rem;
}
.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--gainsboro);
  border-radius: 6px;
  font-size: var(--fs-6);
  background: #fff;
  box-sizing: border-box;
}
.form-group input:focus {
  outline: none;
  border-color: rgba(255,75,43,0.8);
  box-shadow: 0 0 0 4px rgba(255,75,43,0.06);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  border: none;
  font-weight: 600;
}
.btn-primary {
  background: var(--primary);
  color: #fff;
}

/* Responsiveness */
@media (max-width: 768px) {
  .account-content {
    grid-template-columns: 1fr;
  }
  .account-menu {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    overflow-x: auto;
  }
  .account-menu ul { display: flex; gap: 0.75rem; align-items: center; margin: 0; }
  .account-menu li { margin: 0; }
  .account-menu a { padding: 0.5rem 0.75rem; white-space: nowrap; }
}
</style>

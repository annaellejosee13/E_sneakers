<template>
  <div class="auth-container">
    <div class="auth-header">
      <div class="auth-title">
        <i class="fa-solid fa-user-shield"></i> Authentification
      </div>
    </div>

    <div class="auth-tabs">
      <button :class="{ active: activeTab === 'login' }" @click="activeTab = 'login'">Se connecter</button>
      <button :class="{ active: activeTab === 'register' }" @click="activeTab = 'register'">S’inscrire</button>
    </div>

    <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="auth-form">
      <input v-model="login.email" placeholder="Email" />
      <input v-model="login.password" type="password" placeholder="Mot de passe" />
      <button type="submit">Connexion</button>
    </form>

    <form v-else @submit.prevent="handleRegister" class="auth-form">
      <input v-model="register.firstname" placeholder="Prénom" />
      <input v-model="register.lastname" placeholder="Nom" />
      <input v-model="register.email" placeholder="Email" />
      <input v-model="register.password" type="password" placeholder="Mot de passe" />
      <input v-model="register.password2" type="password" placeholder="Confirmer" />
      <button type="submit">Inscription</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref("login");

const login = ref({ email: "", password: "", remember: false });
const register = ref({ firstname: "", lastname: "", email: "", password: "", password2: "", cgu: false });

function handleLogin() {
  if (!login.value.email || !login.value.password) {
    alert("Veuillez remplir tous les champs.");
    return;
  }
  console.log("Connexion :", login.value);
}

function handleRegister() {
  if (register.value.password !== register.value.password2) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }
  console.log("Inscription :", register.value);
}
</script>

<!-- NOTE: style SANS 'scoped' pour permettre les sélecteurs globaux (body, etc.) -->
<style>
/* Optionnel : ajoute ce lien dans index.html pour Montserrat :
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800" rel="stylesheet">
*/
* { box-sizing: border-box; }

/* Body (global) — si tu veux que ce style s'applique, garde le ici (global) */
body.login-bg {
  background: #f6f5f7 !important;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  margin: 0;
}

/* Wrapper principal (correspond au template) */
.auth-container{
  width: 480px;
  max-width: 95%;
  margin: 50px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.08);
  overflow: hidden;
}

/* header */
.auth-header {
  background: linear-gradient(90deg, #ff4b2b, #ff416c);
  color: #fff;
  padding: 18px 20px;
}
.auth-title {
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* tabs */
.auth-tabs {
  display:flex;
  gap:8px;
  padding:12px;
  background: #fafafa;
}
.auth-tabs button {
  flex:1;
  padding:10px;
  border-radius:8px;
  border: none;
  background: transparent;
  cursor:pointer;
  font-weight:600;
  color:#666;
}
.auth-tabs button.active {
  background:#fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  color:#111;
}

/* forms */
.auth-form {
  padding: 24px;
  display:flex;
  flex-direction:column;
  gap:10px;
}
.auth-form input {
  background-color: #f1f1f1;
  border: 1px solid #e6e6e6;
  padding: 12px 14px;
  border-radius: 8px;
  width:100%;
  font-size:14px;
}
.auth-form input:focus {
  outline: none;
  border-color: #ff7a63;
  box-shadow: 0 0 0 3px rgba(255,74,43,0.08);
}

/* buttons */
.auth-form button {
  border-radius: 999px;
  border: 1px solid #FF4B2B;
  background-color: #FF4B2B;
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 20px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  cursor:pointer;
  transition: transform 120ms ease;
}
.auth-form button:active { transform: scale(0.98); }

/* small responsive tweak */
@media (max-width:520px){
  .auth-container { width: 92%; margin: 20px auto; }
  .auth-title { font-size: 16px; }
}
</style>

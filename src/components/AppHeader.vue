<template>
  <header class="header" data-header :class="{ active: appStore.isScrolled }">
    <div class="container">
      <div class="overlay" data-overlay :class="{ active: appStore.isNavOpen }" @click="appStore.closeNav"></div>

      <router-link to="/" class="logo">
        <img src="/logo-shoes.svg" width="160" height="50" alt="Sneaker Store">
      </router-link>

      <button class="nav-open-btn" data-nav-open-btn aria-label="Open Menu" @click="appStore.toggleNav">
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav class="navbar" data-navbar :class="{ active: appStore.isNavOpen }">
        <button class="nav-close-btn" data-nav-close-btn aria-label="Close Menu" @click="appStore.closeNav">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <router-link to="/" class="logo">
          <img src="/logo-shoes.svg" width="220" height="170" alt="Sneaker Store">
        </router-link>

        <ul class="navbar-list">
          <li class="navbar-item">
            <router-link to="/" class="navbar-link">Accueil</router-link>
          </li>
          <li class="navbar-item">
            <a href="#service" class="navbar-link">A propos</a>
          </li>
          <li class="navbar-item">
            <div class="dropdown">
              <button class="navbar-link" @click="toggleCategoryMenu">Catégories</button>
              <ul v-show="showCategoryMenu" class="dropdown-menu" style="position: absolute; z-index: 1000;">
                <li><a href="#categories" class="dropdown-link">Toutes les categories</a></li>
                <li><router-link to="/hommes" class="dropdown-link">Hommes</router-link></li>
                <li><router-link to="/femmes" class="dropdown-link">Femmes</router-link></li>
                <li><router-link to="/enfants" class="dropdown-link">Enfants</router-link></li>
                <li><router-link to="/sports" class="dropdown-link">Sports</router-link></li>
              </ul>
            </div>
          </li>
          <li class="navbar-item">
            <a href="#footer" class="navbar-link">Contact</a>
          </li>
        </ul>

        <ul class="nav-action-list">
          <li>
            <button class="nav-action-btn">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
              <span class="nav-action-text">Recherche</span>
            </button>
          </li>

          <li>
            <div class="dropdown">
              <button class="nav-action-btn" @click="toggleUserMenu" style="display: flex; align-items: center; gap: 8px;">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                <span class="nav-action-text">Se connecter / S'inscrire</span>
              </button>
              <ul v-show="showUserMenu" class="dropdown-menu" style="background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-top: 8px; padding: 8px 0; min-width: 180px; position: absolute; z-index: 1000;">
               <li><router-link to="/login" class="dropdown-link" style="padding: 8px 16px; display: block; color: #1a1a2e;">Connexion</router-link></li>
                <li><router-link to="/compte" class="dropdown-link" style="padding: 8px 16px; display: block; color: #1a1a2e;">Mon compte</router-link></li>
                <li><router-link to="/commandes" class="dropdown-link" style="padding: 8px 16px; display: block; color: #1a1a2e;">Mes commandes</router-link></li>
                <li><router-link to="/logout" class="dropdown-link" style="padding: 8px 16px; display: block; color: #1a1a2e;">Déconnexion</router-link></li>
              </ul>
            </div>
          </li>

          <li>
            <router-link to="/favoris" class="nav-action-btn" style="text-decoration:none; color:inherit; display:flex; align-items:center; gap:8px;">
              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              <span class="nav-action-text">Favoris</span>
              <data class="nav-action-badge" :value="productStore.favoritesCount" aria-hidden="true">{{ productStore.favoritesCount }}</data>
            </router-link>
          </li>

          <li>
            <router-link to="/panier" class="nav-action-btn" style="text-decoration:none; color:inherit; display:flex; align-items:center; gap:8px;">
              <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
              <data class="nav-action-text" :value="productStore.cartTotal">Basket: <strong>¤{{ productStore.cartTotal.toFixed(2) }}</strong></data>
              <data class="nav-action-badge" :value="productStore.cartCount" aria-hidden="true">{{ productStore.cartCount }}</data>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { useProductStore } from '@/stores/productStore'

const appStore = useAppStore()
const productStore = useProductStore()
const showUserMenu = ref(false)
const showCategoryMenu = ref(false)
import { useRouter } from 'vue-router'
const router = useRouter()

function handleLogout() {
  // Ajoute ici la suppression des données de session si besoin
  router.push({ path: '/logout' })
}

const handleScroll = () => {
  appStore.setScrolled(window.scrollY >= 80)
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
  showCategoryMenu.value = false
}

const toggleCategoryMenu = () => {
  showCategoryMenu.value = !showCategoryMenu.value
  showUserMenu.value = false
}

// Fermer le menu en cliquant ailleurs
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.dropdown')) {
    showUserMenu.value = false
    showCategoryMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar-link, .nav-action-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
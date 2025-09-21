<template>
  <div id="top">
    <!-- Hero Section -->
    <section class="section hero" style="background-image: url('/banner.png')">
      <div class="container">
        <h2 class="h1 hero-title">
          Nouveautés <strong>Sneakers Collection</strong>
        </h2>
        <p class="hero-text">
          Avec Sneakers – Marchez avec style, chaque pas devient une déclaration de mode
        </p>
      </div>
    </section>

    <!-- Collection Section -->
    <section class="section collection">
      <div class="container">
        <ul class="collection-list has-scrollbar">
          <li>
            <div id="homme" class="collection-card" style="background-image: url('/collection-1.jpg')">
              <h3 class="h4 card-title">Collections Hommes</h3>
              <router-link to="/hommes" class="btn btn-secondary">
                <span>Explorez tout</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </router-link>
            </div>
          </li>

          <li>
            <div id="femme" class="collection-card" style="background-image: url('/collection-2.jpg')">
              <h3 class="h4 card-title">Collections Femmes</h3>
              <router-link to="/femmes" class="btn btn-secondary">
                <span>Explorez tout</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </router-link>
            </div>
          </li>

          <li>
            <div id="enfant" class="collection-card" style="background-image: url('/collection-3.jpg')">
              <h3 class="h4 card-title">Collections Enfants</h3>
              <router-link to="/enfants" class="btn btn-secondary">
                <span>Explorez tout</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </router-link>
            </div>
          </li>

          <li>
            <div id="sport" class="collection-card" style="background-image: url('/collection-3.jpg')">
              <h3 class="h4 card-title">Collections Sports</h3>
              <router-link to="/sports" class="btn btn-secondary">
                <span>Explorez tout</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Products Section -->
    <section id="categories" class="section product">
      <div class="container">
        <h2 class="h2 section-title">Bestsellers Products</h2>
        
        <FilterButtons />
        
        <TransitionGroup name="product-list" tag="ul" class="product-list">
          <ProductCard 
            v-for="product in productStore.filteredProducts" 
            :key="product.id" 
            :product="product"
          />
        </TransitionGroup>
      </div>
    </section>

    <!-- Services Section -->
    <section id="service" class="section service">
      <div class="container">
        <ul class="service-list">
          <li class="service-item">
            <div class="service-card">
              <div class="card-icon">
                <img src="/service-1.png" width="53" height="28" loading="lazy" alt="Service icon">
              </div>
              <div>
                <h3 class="h4 card-title">Livraison Gratuite</h3>
                <p class="card-text">
                  Toutes les commandes supérieures à <span>150€</span>
                </p>
              </div>
            </div>
          </li>

          <li class="service-item">
            <div class="service-card">
              <div class="card-icon">
                <img src="/service-2.png" width="43" height="35" loading="lazy" alt="Service icon">
              </div>
              <div>
                <h3 class="h4 card-title">Paiement rapide</h3>
                <p class="card-text">
                  Paiement 100% sécurisé
                </p>
              </div>
            </div>
          </li>

          <li class="service-item">
            <div class="service-card">
              <div class="card-icon">
                <img src="/service-3.png" width="40" height="40" loading="lazy" alt="Service icon">
              </div>
              <div>
                <h3 class="h4 card-title">Retours gratuits</h3>
                <p class="card-text">
                  Remboursement sous 30 jours
                </p>
              </div>
            </div>
          </li>

          <li class="service-item">
            <div class="service-card">
              <div class="card-icon">
                <img src="/service-4.png" width="40" height="40" loading="lazy" alt="Service icon">
              </div>
              <div>
                <h3 class="h4 card-title">24/7 Support</h3>
                <p class="card-text">
                  Obtenez un support rapide
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import FilterButtons from '@/components/FilterButtons.vue'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()
</script>

<style scoped>
.product-list-move,
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.3s ease;
}

.product-list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.product-list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.product-list-leave-active {
  position: absolute;
}
</style>
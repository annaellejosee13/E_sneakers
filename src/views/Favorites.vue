<template>
  <div class="favorites-page">
    <section class="section">
      <div class="container">
        <h1 class="h1 section-title">Mes Favoris</h1>
        
        <div v-if="productStore.favoritesCount === 0" class="empty-favorites">
          <ion-icon name="heart-outline" size="large"></ion-icon>
          <h2>Vous n'avez pas encore de favoris</h2>
          <p>Ajoutez des produits à vos favoris pour les retrouver facilement</p>
          <router-link to="/" class="btn btn-primary">Découvrir nos produits</router-link>
        </div>

        <div v-else class="favorites-content">
          <div class="favorites-grid">
            <ProductCard 
              v-for="product in productStore.favorites" 
              :key="product.id" 
              :product="product"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()
</script>

<style scoped>
.empty-favorites {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-favorites ion-icon {
  font-size: 4rem;
  color: var(--gray-x-11-gray);
  margin-bottom: 1rem;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .favorites-grid {
    grid-template-columns: 1fr;
  }
}
</style>

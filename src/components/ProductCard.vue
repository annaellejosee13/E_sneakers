<template>
  <li class="product-item" :data-brand="product.brand">
    <div class="product-card" tabindex="0">
      <figure class="card-banner">
        <img :src="product.image" width="312" height="350" loading="lazy" :alt="product.alt" class="image-contain">
        
        <div v-if="product.badge" class="card-badge">{{ product.badge }}</div>
        
        <ul class="card-action-list">
          <li class="card-action-item">
            <button class="card-action-btn" title="Ajouter au panier" @click="addToCart">
              <ion-icon name="bag-outline"></ion-icon>
            </button>
            <div class="card-action-tooltip">Ajouter au panier</div>
          </li>
          
          <li class="card-action-item">
            <button 
              class="card-action-btn" 
              :class="{ 'favorited': isInFavorites }"
              title="Ajouter aux favoris" 
              @click="toggleFavorite"
            >
              <ion-icon :name="isInFavorites ? 'heart' : 'heart-outline'"></ion-icon>
            </button>
            <div class="card-action-tooltip">
              {{ isInFavorites ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
            </div>
          </li>
          
          <li class="card-action-item">
            <button class="card-action-btn" title="Voir les détails" @click="viewDetails">
              <ion-icon name="eye-outline"></ion-icon>
            </button>
            <div class="card-action-tooltip">Voir les détails</div>
          </li>
        </ul>
      </figure>

      <div class="card-content">
        <div class="card-cat">
          <span v-for="(category, index) in product.category" :key="category">
            <router-link to="#" class="card-cat-link">{{ category }}</router-link>
            <span v-if="index < product.category.length - 1"> / </span>
          </span>
        </div>

        <h3 class="h3 card-title">
          <router-link to="#">{{ product.name }}</router-link>
        </h3>

        <data class="card-price" :value="product.price">
          {{ product.price.toFixed(2) }}€
          <del v-if="product.originalPrice">{{ product.originalPrice.toFixed(2) }}€</del>
        </data>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore, type Product } from '@/stores/productStore'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const router = useRouter()
const productStore = useProductStore()

const isInFavorites = computed(() => productStore.isInFavorites(props.product.id))

const addToCart = () => {
  productStore.addToCart(props.product)
}

const toggleFavorite = () => {
  if (isInFavorites.value) {
    productStore.removeFromFavorites(props.product.id)
  } else {
    productStore.addToFavorites(props.product)
  }
}

const viewDetails = () => {
  router.push(`/product/${props.product.id}`)
}
</script>

<style scoped>
.favorited {
  color: var(--bittersweet) !important;
}
</style>

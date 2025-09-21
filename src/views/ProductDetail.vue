<!-- <template>
  <div class="product-detail-page">
    <div v-if="product" class="container">
      <h1>{{ product.name }}</h1>
      <p>Marque: {{ product.brand }}</p>
      <p>Prix: {{ product.price }}€</p>
    </div>
    <div v-else>
      <h1>Produit non trouvé</h1>
    </div>
  </div>
</template>



<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/productStore'

const route = useRoute()
const productStore = useProductStore()

const product = computed(() => {
  const id = parseInt(route.params.id as string)
  return productStore.products.find(p => p.id === id)
})
</script> -->
<template>
  <div class="product-detail-page">
    <div v-if="product" class="details-container">
      <div class="details-title">
        <i class="fa-solid fa-shoe-prints"></i> Détails du Sneaker
      </div>
      <div class="details-main">
        <img :src="selectedImage" :alt="product.name" class="details-img" />
        <div class="details-info">
          <h2>{{ product.name }}</h2>
          <p>Prix : {{ product.price }}€</p>
          <p>Marque : {{ product.brand }}</p>
          
          <!-- Sélection des tailles -->
          <div class="sizes-list">
            <button 
              v-for="size in availableSizes" 
              :key="size"
              class="size-btn"
              :class="{ selected: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
          
          <!-- Sélection des couleurs -->
          <div class="colors-list">
            <button 
              v-for="color in availableColors" 
              :key="color.name"
              class="color-btn"
              :class="{ selected: selectedColor === color.name }"
              :style="{ background: color.value }"
              @click="selectColor(color)"
            ></button>
          </div>
          
          <!-- Contrôle de quantité -->
          <div class="quantity-control">
            <button class="quantity-btn" @click="decreaseQuantity">-</button>
            <span class="quantity-value">{{ quantity }}</span>
            <button class="quantity-btn" @click="increaseQuantity">+</button>
          </div>
          
          <!-- Actions -->
          <div class="details-actions">
            <router-link to="/panier">              
              <i class="fa-solid fa-cart-plus"></i> Ajouter au panier
            </router-link>
            <router-link to="/" class="btn-details">
              <i class="fa-solid fa-house"></i> Accueil
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="details-container">
      <div class="details-title">Produit non trouvé</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/productStore'

const route = useRoute()
const productStore = useProductStore()

const product = computed(() => {
  const id = parseInt(route.params.id as string)
  return productStore.products.find(p => p.id === id)
})

// États réactifs pour les sélections
const selectedSize = ref('39')
const selectedColor = ref('blanc')
const selectedImage = ref('./assets/images/product-1.jpg')
const quantity = ref(1)

// Données des tailles disponibles
const availableSizes = ['39', '40', '41', '42', '43']

// Données des couleurs disponibles
const availableColors = [
  { name: 'blanc', value: '#fff', image: './assets/images/product-1.jpg' },
  { name: 'rouge', value: '#ff6b6b', image: './assets/images/product-2.jpg' },
  { name: 'noir', value: '#1a1a2e', image: './assets/images/product-3.jpg' }
]

// Méthodes
const selectColor = (color: { name: string; value: string; image: string }) => {
  selectedColor.value = color.name
  selectedImage.value = color.image
}

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  // Logique d'ajout au panier
  console.log('Ajout au panier:', {
    product: product.value,
    size: selectedSize.value,
    color: selectedColor.value,
    quantity: quantity.value
  })
}
</script>

<style>
body {
  background: #fff;
  font-family: 'Josefin Sans', 'Roboto', sans-serif;
}

.product-detail-page {
  min-height: 100vh;
  padding: 20px;
}

.details-container {
  max-width: 700px;
  margin: 60px auto;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 40px 32px;
}

.details-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
  text-align: center;
}

.details-main {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 32px;
}

.details-img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.08);
}

.details-info {
  flex: 1;
}

.details-info h2 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1a1a2e;
}

.details-info p {
  margin: 0 0 8px 0;
  color: #444;
}

.sizes-list {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.size-btn {
  background: #fff;
  border: 2px solid #ff6b6b;
  color: #1a1a2e;
  border-radius: 8px;
  padding: 8px 18px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.size-btn.selected {
  background: #ff6b6b;
  color: #fff;
}

.colors-list {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.color-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #eee;
  cursor: pointer;
  transition: border 0.2s;
  outline: none;
}

.color-btn.selected {
  border: 2px solid #ff6b6b;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.quantity-btn {
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.quantity-btn:hover {
  background: #ee5a6f;
}

.quantity-value {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  min-width: 32px;
  text-align: center;
}

.details-actions {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.btn-details {
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.btn-details:hover {
  background: #ee5a6f;
}

@media (max-width: 768px) {
  .details-main {
    flex-direction: column;
    align-items: center;
  }
  
  .details-container {
    margin: 20px auto;
    padding: 24px 20px;
  }
  
  .details-actions {
    flex-direction: column;
  }
}
</style>
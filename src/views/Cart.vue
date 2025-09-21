<template>
  <div class="cart-page">
    <section class="section">
      <div class="container">
        <h1 class="h1 section-title">Mon Panier</h1>
        
        <div v-if="productStore.cartCount === 0" class="empty-cart">
          <ion-icon name="bag-outline" size="large"></ion-icon>
          <h2>Votre panier est vide</h2>
          <p>Découvrez nos produits et ajoutez-les à votre panier</p>
          <router-link to="/" class="btn btn-primary">Continuer mes achats</router-link>
        </div>

        <div v-else class="cart-content">
          <div class="cart-items">
            <div 
              v-for="item in productStore.cart" 
              :key="item.id" 
              class="cart-item"
            >
              <img :src="item.image" :alt="item.alt" class="cart-item-image">
              
              <div class="cart-item-details">
                <h3 class="cart-item-name">{{ item.name }}</h3>
                <p class="cart-item-brand">{{ item.brand }}</p>
                <div class="cart-item-categories">
                  <span v-for="category in item.category" :key="category" class="category-tag">
                    {{ category }}
                  </span>
                </div>
              </div>

              <div class="cart-item-price">
                <span class="price">{{ item.price.toFixed(2) }}€</span>
              </div>

              <button 
                class="remove-btn" 
                @click="productStore.removeFromCart(item.id)"
                title="Retirer du panier"
              >
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div class="cart-summary">
            <div class="summary-card">
              <h3>Résumé de la commande</h3>
              
              <div class="summary-line">
                <span>Sous-total</span>
                <span>{{ productStore.cartTotal.toFixed(2) }}€</span>
              </div>
              
              <div class="summary-line">
                <span>Livraison</span>
                <span>{{ deliveryCost === 0 ? 'Gratuite' : deliveryCost.toFixed(2) + '€' }}</span>
              </div>
              
              <div class="summary-line total">
                <span>Total</span>
                <span>{{ totalWithDelivery.toFixed(2) }}€</span>
              </div>

              <router-link to="/checkout" class="btn btn-primary checkout-btn">
                Procéder au paiement
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

const deliveryCost = computed(() => {
  return productStore.cartTotal >= 150 ? 0 : 9.99
})

const totalWithDelivery = computed(() => {
  return productStore.cartTotal + deliveryCost.value
})
</script>

<style scoped>
.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-cart ion-icon {
  font-size: 4rem;
  color: var(--gray-x-11-gray);
  margin-bottom: 1rem;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  margin-top: 2rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--gainsboro);
  border-radius: 8px;
  margin-bottom: 1rem;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-size: var(--fs-6);
  font-weight: var(--fw-600);
  margin-bottom: 0.5rem;
}

.cart-item-brand {
  color: var(--onyx);
  margin-bottom: 0.5rem;
}

.category-tag {
  display: inline-block;
  background: var(--cultured);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: var(--fs-8);
  margin-right: 0.5rem;
}

.cart-item-price .price {
  font-size: var(--fs-5);
  font-weight: var(--fw-600);
  color: var(--bittersweet);
}

.remove-btn {
  background: none;
  border: none;
  color: var(--bittersweet);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
}

.summary-card {
  background: var(--cultured);
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
}

.summary-card h3 {
  margin-bottom: 1.5rem;
  font-size: var(--fs-5);
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--gainsboro);
}

.summary-line.total {
  border-bottom: none;
  font-weight: var(--fw-600);
  font-size: var(--fs-6);
}

.checkout-btn {
  width: 100%;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
  
  .cart-item {
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto auto;
  }
  
  .cart-item-image {
    width: 80px;
    height: 80px;
  }
}
</style>

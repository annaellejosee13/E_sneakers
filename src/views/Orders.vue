<template>
  <div class="orders-page">
    <section class="section">
      <div class="container">
        <h1 class="h1 section-title">Mes Commandes</h1>
        
        <div v-if="orders.length === 0" class="empty-orders">
          <ion-icon name="receipt-outline" size="large"></ion-icon>
          <h2>Vous n'avez pas encore passé de commande</h2>
          <p>Découvrez nos produits et passez votre première commande</p>
          <router-link to="/" class="btn btn-primary">Découvrir nos produits</router-link>
        </div>

        <div v-else class="orders-list">
          <div 
            v-for="order in orders" 
            :key="order.id" 
            class="order-card"
          >
            <div class="order-header">
              <div class="order-info">
                <h3>Commande #{{ order.id }}</h3>
                <p class="order-date">Passée le {{ formatDate(order.date) }}</p>
              </div>
              <div class="order-status" :class="order.status">
                {{ getStatusText(order.status) }}
              </div>
            </div>
            
            <div class="order-items">
              <div 
                v-for="item in order.items" 
                :key="item.id" 
                class="order-item"
              >
                <img :src="item.image" :alt="item.name" class="order-item-image">
                <div class="order-item-details">
                  <h4>{{ item.name }}</h4>
                  <p>{{ item.brand }} - Taille {{ item.size }}</p>
                  <span class="order-item-price">{{ item.price.toFixed(2) }}€</span>
                </div>
              </div>
            </div>
            
            <div class="order-footer">
              <div class="order-total">
                Total: <strong>{{ order.total.toFixed(2) }}€</strong>
              </div>
              <div class="order-actions">
                <button class="btn btn-secondary">Suivre la commande</button>
                <button class="btn btn-primary">Commander à nouveau</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface OrderItem {
  id: number
  name: string
  brand: string
  size: string
  price: number
  image: string
}

interface Order {
  id: number
  date: Date
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled'
  items: OrderItem[]
  total: number
}

const orders = ref<Order[]>([
  {
    id: 1001,
    date: new Date('2024-01-15'),
    status: 'delivered',
    items: [
      {
        id: 1,
        name: 'Nike Air Max 270 SE',
        brand: 'Nike',
        size: '42',
        price: 120.85,
        image: '/product-5.jpg'
      }
    ],
    total: 120.85
  },
  {
    id: 1002,
    date: new Date('2024-01-10'),
    status: 'shipped',
    items: [
      {
        id: 2,
        name: 'Adidas Sneakers Shoes',
        brand: 'Adidas',
        size: '41',
        price: 100.85,
        image: '/product-6.jpg'
      },
      {
        id: 3,
        name: 'Chaussure en tissu simple',
        brand: 'Bata',
        size: '40',
        price: 100.85,
        image: '/product-8.jpg'
      }
    ],
    total: 201.70
  }
])

const formatDate = (date: Date) => {
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getStatusText = (status: string) => {
  const statusMap = {
    pending: 'En attente',
    shipped: 'Expédiée',
    delivered: 'Livrée',
    cancelled: 'Annulée'
  }
  return statusMap[status as keyof typeof statusMap] || status
}
</script>

<style scoped>
.empty-orders {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-orders ion-icon {
  font-size: 4rem;
  color: var(--gray-x-11-gray);
  margin-bottom: 1rem;
}

.orders-list {
  margin-top: 2rem;
}

.order-card {
  background: white;
  border: 1px solid var(--gainsboro);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gainsboro);
}

.order-date {
  color: var(--onyx);
  font-size: var(--fs-7);
}

.order-status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: var(--fs-8);
  font-weight: var(--fw-500);
}

.order-status.pending {
  background: #fff3cd;
  color: #856404;
}

.order-status.shipped {
  background: #d1ecf1;
  color: #0c5460;
}

.order-status.delivered {
  background: #d4edda;
  color: #155724;
}

.order-status.cancelled {
  background: #f8d7da;
  color: #721c24;
}

.order-items {
  margin-bottom: 1rem;
}

.order-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gainsboro);
}

.order-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.order-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.order-item-details h4 {
  font-size: var(--fs-6);
  margin-bottom: 0.25rem;
}

.order-item-details p {
  color: var(--onyx);
  font-size: var(--fs-7);
  margin-bottom: 0.25rem;
}

.order-item-price {
  font-weight: var(--fw-600);
  color: var(--bittersweet);
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--gainsboro);
}

.order-total {
  font-size: var(--fs-6);
}

.order-actions {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .order-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .order-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .order-actions {
    flex-direction: column;
  }
}
</style>

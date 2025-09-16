<template>
  <section class="page">
    <h1>Produits</h1>
    <ul class="grid">
      <li v-for="product in products" :key="product.id" class="card">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price.toFixed(2) }} €</p>
        <BaseButton @click="addToCart(product)">Ajouter</BaseButton>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

interface Product { id: number; name: string; price: number; image: string }

const products = ref<Product[]>([
  { id: 1, name: 'Chaussure 1', price: 69.99, image: '/assets/images/product-1.jpg' },
  { id: 2, name: 'Chaussure 2', price: 79.99, image: '/assets/images/product-2.jpg' },
  { id: 3, name: 'Chaussure 3', price: 89.99, image: '/assets/images/product-3.jpg' },
]);

function addToCart(product: Product) {
  console.log('Add to cart', product.id);
}
</script>

<style scoped>
.page { max-width: 1024px; margin: 24px auto; padding: 0 16px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; padding: 0; list-style: none; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 12px; }
img { width: 100%; height: 160px; object-fit: cover; border-radius: 8px; }
</style>



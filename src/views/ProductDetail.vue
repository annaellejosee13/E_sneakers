<template>
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
</script>

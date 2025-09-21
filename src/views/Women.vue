<template>
  <div class="women-page">
    <section class="section hero" style="background-image: url('/collection-2.jpg')">
      <div class="container">
        <h1 class="h1 hero-title">Collections Femmes</h1>
        <p class="hero-text">Découvrez notre collection de sneakers pour femmes</p>
      </div>
    </section>

    <section class="section product">
      <div class="container">
        <FilterButtons />
        <TransitionGroup name="product-list" tag="ul" class="product-list">
          <ProductCard 
            v-for="product in womenProducts" 
            :key="product.id" 
            :product="product"
          />
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import FilterButtons from '@/components/FilterButtons.vue'
import ProductCard from '@/components/ProductCard.vue'

const productStore = useProductStore()

const womenProducts = computed(() => {
  return productStore.filteredProducts.filter(product => 
    product.category.includes('Femmes')
  )
})
</script>

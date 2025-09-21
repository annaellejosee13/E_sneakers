<template>
  <div class="kids-page">
    <section class="section hero" style="background-image: url('/collection-3.jpg')">
      <div class="container">
        <h1 class="h1 hero-title">Collections Enfants</h1>
        <p class="hero-text">Découvrez notre collection de sneakers pour enfants</p>
      </div>
    </section>

    <section class="section product">
      <div class="container">
        <FilterButtons />
        <TransitionGroup name="product-list" tag="ul" class="product-list">
          <ProductCard 
            v-for="product in kidsProducts" 
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

const kidsProducts = computed(() => {
  return productStore.filteredProducts.filter(product => 
    product.category.includes('Enfants')
  )
})
</script>

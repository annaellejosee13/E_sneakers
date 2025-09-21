<template>
  <ul class="filter-list">
    <li v-for="brand in productStore.availableBrands" :key="brand">
      <button 
        class="filter-btn" 
        :class="{ active: productStore.selectedBrand === brand }"
        @click="productStore.setSelectedBrand(brand)"
      >
        {{ brand }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
</script>

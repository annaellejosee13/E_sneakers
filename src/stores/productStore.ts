// stores/productStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Product {
  id: number
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  category: string[]
  badge?: string
  alt: string
  size?: number   // 👈 on ajoute une taille
}

export const useProductStore = defineStore('products', () => {
  // State
  const products = ref<Product[]>([])   // 👈 vide au départ
  const selectedBrand = ref<string>('Tout')
  const selectedCategory = ref<string>('Tout') // 👈 nouvelle catégorie (Homme/Femme/Enfant)
  const cart = ref<Product[]>([])
  const favorites = ref<Product[]>([])

  // Actions
  async function loadProducts() {
    try {
      const res = await fetch('/products.csv')
      const text = await res.text()

      const lines = text.split('\n').slice(1) // on enlève l'entête
      products.value = lines
        .filter(line => line.trim() !== '')
        .map((line, index) => {
          const [id, name, brand, category, price, image] = line.split(',')

          // 👇 on donne une taille aléatoire pour le moment
          const randomSize = Math.floor(Math.random() * (48 - 20 + 1)) + 20

          return {
            id: Number(id) || index,
            name: name.replace(/"/g, ''),
            brand: brand.replace(/"/g, ''),
            price: parseFloat(price),
            image: image,
            category: category ? [category.replace(/"/g, '')] : [],
            alt: name.replace(/"/g, ''),
            size: randomSize, // 👈 nouvelle propriété
          }
        })
    } catch (err) {
      console.error('Erreur de chargement des produits:', err)
    }
  }

  // Getters
  const filteredProducts = computed(() => {
    if (selectedBrand.value === 'Tout') {
      return products.value
    }
    return products.value.filter(product => product.brand === selectedBrand.value)
  })

  // 👇 Nouveau : filtrage par catégorie en fonction des tailles
  const filteredProductsByCategory = computed(() => {
    if (selectedCategory.value === 'Tout') {
      return filteredProducts.value
    }

    if (selectedCategory.value === 'Enfant') {
      return filteredProducts.value.filter(p => p.size && p.size >= 20 && p.size <= 34)
    }

    if (selectedCategory.value === 'Femme') {
      return filteredProducts.value.filter(p => p.size && p.size >= 35 && p.size <= 42)
    }

    if (selectedCategory.value === 'Homme') {
      return filteredProducts.value.filter(p => p.size && p.size >= 39 && p.size <= 48)
    }

    return filteredProducts.value
  })

  const availableBrands = computed(() => {
    const brands = ['Tout', ...new Set(products.value.map(p => p.brand))]
    return brands
  })

  const cartCount = computed(() => cart.value.length)
  const favoritesCount = computed(() => favorites.value.length)
  const cartTotal = computed(() =>
    cart.value.reduce((total, product) => total + product.price, 0)
  )

  // Actions setters
  const setSelectedBrand = (brand: string) => {
    selectedBrand.value = brand
  }

  const setSelectedCategory = (category: string) => {
    selectedCategory.value = category
  }

  const addToCart = (product: Product) => {
    cart.value.push(product)
  }

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter(p => p.id !== productId)
  }

  const addToFavorites = (product: Product) => {
    if (!favorites.value.find(p => p.id === product.id)) {
      favorites.value.push(product)
    }
  }

  const removeFromFavorites = (productId: number) => {
    favorites.value = favorites.value.filter(p => p.id !== productId)
  }

  const isInFavorites = (productId: number) => {
    return favorites.value.some(p => p.id === productId)
  }

  return {
    products,
    selectedBrand,
    selectedCategory, // 👈 exposé
    cart,
    favorites,
    loadProducts,
    filteredProducts,
    filteredProductsByCategory, // 👈 exposé
    availableBrands,
    cartCount,
    favoritesCount,
    cartTotal,
    setSelectedBrand,
    setSelectedCategory, // 👈 exposé
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    isInFavorites,
  }
})

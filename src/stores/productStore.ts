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
}

export const useProductStore = defineStore('products', () => {
  // State
  const products = ref<Product[]>([
    {
      id: 1,
      name: "Chaussures de course",
      brand: "Nike",
      price: 180.85,
      image: "/product-1.jpg",
      category: ["Hommes", "Femmes"],
      badge: "Nouveaux",
      alt: "Chaussures de course"
    },
    {
      id: 2,
      name: "Chaussons en cuir pour hommes",
      brand: "Adidas",
      price: 190.85,
      image: "/product-2.jpg",
      category: ["Hommes", "Sports"],
      alt: "Chaussons en cuir pour hommes"
    },
    {
      id: 3,
      name: "Chaussure en tissu simple",
      brand: "Puma",
      price: 160.85,
      image: "/product-3.jpg",
      category: ["Hommes", "Femmes"],
      badge: "Nouveaux",
      alt: "Simple Fabric Shoe"
    },
    {
      id: 4,
      name: "Air Jordan 7 Retro",
      brand: "Nike",
      price: 170.85,
      originalPrice: 200.21,
      image: "/product-4.jpg",
      category: ["Hommes", "Sports"],
      badge: "-25%",
      alt: "Air Jordan 7 Retro"
    },
    {
      id: 5,
      name: "Nike Air Max 270 SE",
      brand: "Nike",
      price: 120.85,
      image: "/product-5.jpg",
      category: ["Hommes", "Femmes"],
      badge: "Nouveaux",
      alt: "Nike Air Max 270 SE"
    },
    {
      id: 6,
      name: "Adidas Sneakers Shoes",
      brand: "Adidas",
      price: 100.85,
      image: "/product-6.jpg",
      category: ["Hommes", "Femmes"],
      alt: "Adidas Sneakers Shoes"
    },
    {
      id: 7,
      name: "Nike Basketball shoes",
      brand: "Nike",
      price: 120.85,
      image: "/product-7.jpg",
      category: ["Hommes", "Sports"],
      alt: "Nike Basketball shoes"
    },
    {
      id: 8,
      name: "Chaussure en tissu simple",
      brand: "Bata",
      price: 100.85,
      image: "/product-8.jpg",
      category: ["Hommes", "Femmes"],
      alt: "Simple Fabric Shoe"
    }
  ])

  const selectedBrand = ref<string>('Tout')
  const cart = ref<Product[]>([])
  const favorites = ref<Product[]>([])

  // Getters
  const filteredProducts = computed(() => {
    if (selectedBrand.value === 'Tout') {
      return products.value
    }
    return products.value.filter(product => product.brand === selectedBrand.value)
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

  // Actions
  const setSelectedBrand = (brand: string) => {
    selectedBrand.value = brand
  }

  const addToCart = (product: Product) => {
    cart.value.push(product)
  }

  const removeFromCart = (productId: number) => {
    const index = cart.value.findIndex(p => p.id === productId)
    if (index > -1) {
      cart.value.splice(index, 1)
    }
  }

  const addToFavorites = (product: Product) => {
    if (!favorites.value.find(p => p.id === product.id)) {
      favorites.value.push(product)
    }
  }

  const removeFromFavorites = (productId: number) => {
    const index = favorites.value.findIndex(p => p.id === productId)
    if (index > -1) {
      favorites.value.splice(index, 1)
    }
  }

  const isInFavorites = (productId: number) => {
    return favorites.value.some(p => p.id === productId)
  }

  return {
    // State
    products,
    selectedBrand,
    cart,
    favorites,
    
    // Getters
    filteredProducts,
    availableBrands,
    cartCount,
    favoritesCount,
    cartTotal,
    
    // Actions
    setSelectedBrand,
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    isInFavorites
  }
})

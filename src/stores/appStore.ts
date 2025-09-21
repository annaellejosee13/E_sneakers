import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isScrolled = ref(false)
  const isNavOpen = ref(false)

  // Actions
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }

  const closeNav = () => {
    isNavOpen.value = false
  }

  const setScrolled = (scrolled: boolean) => {
    isScrolled.value = scrolled
  }

  return {
    // State
    isScrolled,
    isNavOpen,
    
    // Actions
    toggleNav,
    closeNav,
    setScrolled
  }
})

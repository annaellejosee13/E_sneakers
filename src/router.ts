import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import Favorites from './views/Favorites.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import DashboardAdmin from './views/DashboardAdmin.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/panier', name: 'Cart', component: Cart },
  { path: '/favoris', name: 'Favorites', component: Favorites },
  { path: '/compte', name: 'Account', component: () => import('./views/Account.vue') },
  { path: '/commandes', name: 'Orders', component: () => import('./views/Orders.vue') },
  { path: '/hommes', name: 'Men', component: () => import('./views/Men.vue') },
  { path: '/femmes', name: 'Women', component: () => import('./views/Women.vue') },
  { path: '/enfants', name: 'Kids', component: () => import('./views/Kids.vue') },
  { path: '/sports', name: 'Sports', component: () => import('./views/Sports.vue') },
  { path: '/product/:id', name: 'ProductDetail', component: () => import('./views/ProductDetail.vue') },
  { path: '/checkout', name: 'Checkout', component: () => import('./views/Checkout.vue') },
  { path: '/login', name: 'Login', component: Login },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/dashboardadmin', name: 'DashboardAdmin', component: DashboardAdmin },
  // Keep catch-all LAST
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router



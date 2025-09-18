import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Categorie from './views/Categorie.vue';
import NotFound from './views/NotFound.vue';
import Login from './views/Login.vue';
import Admin from './views/Admin.vue';
import DashboardAdmin from './views/DashboardAdmin.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/categorie', name: 'Categorie', component: Categorie },
  { path: '/login', name: 'Login', component: Login },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/dashboardadmin', name: 'DashboardAdmin', component: DashboardAdmin },
  // Keep catch-all LAST
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;



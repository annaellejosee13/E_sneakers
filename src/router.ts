import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Categorie from './views/Categorie.vue';
import NotFound from './views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/categorie', name: 'Categorie', component: Categorie },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const target = document.querySelector(to.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return false as unknown as any;
      }
      return { el: to.hash } as any;
    }
    return { top: 0 };
  },
});

export default router;



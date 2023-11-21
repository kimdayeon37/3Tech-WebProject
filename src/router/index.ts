import HomeViewVue from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from "../layouts/MainLayout.vue";
import ListView from "../views/ListView.vue";
import AlgorithmView from "../views/AlgorithmView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '',
          component: HomeViewVue,
          name: 'images'
        },
        { path: '/list', component: ListView, name: 'list' },
        { path: '/algorithm', component: AlgorithmView, name: 'algorithm' },
        { path: '/contact', component: ContactView, name: 'contact' },
      ]
    }
  ]
})

export default router
import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Landing
    {
      path: '/',
      name: 'landing',
      component: import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: true,
          component: import('@/modules/pokemon/pages/PokemonPage.vue'),
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' },
      name: 'auth',
      component: import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      component: import('@/modules/common/pages/NotFound404.vue'),
    },
  ],
})

export default router

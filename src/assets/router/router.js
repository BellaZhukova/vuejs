import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(''),
    routes: [
            {
            path: '/',
            name: 'main',
            component: () => import('@/pages/main/MainPage.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('@/pages/auth/AuthPage.vue')
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('@/pages/catalog/CatalogPage.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/pages/cart/CartPage.vue')
        },

        {
            path: '/completed',
            name: 'completed',
            component: () => import('@/pages/completed-orders/CompletedOrderPage.vue')
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import('@/pages/registration/RegistrationPage.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('@/pages/order/OrderPage.vue')
        }
    ],
})

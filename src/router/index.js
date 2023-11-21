import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/', 
        component: () => import('../pages/HomePage.vue'),
        meta: { showCart: true } 
    },
    { 
        path: '/cart', 
        component: () => import('../pages/CartPage.vue'),
        meta: { showCart: false } 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
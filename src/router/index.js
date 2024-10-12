import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/about', component: () => import('../pages/About.vue') },
    { path: '/dashboard', component: () => import('../pages/Dashboard.vue'), name: 'dashboard' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }
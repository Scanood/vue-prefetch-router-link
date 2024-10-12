import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/about', component: () => import('../pages/About.vue'), name: "about" },
    { path: '/dashboard', component: () => import('../pages/Dashboard.vue'), name: 'dashboard' },
    { path: '/panel', component: () => import('../pages/Panel.vue'), name: 'panel' },
    { path: '/admin', component: () => import('../pages/Admin.vue'), name: 'admin' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }
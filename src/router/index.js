import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('../pages/Home.vue') },
    { path: '/about', component: () => import('../pages/About.vue'), name: "about" },
    { path: '/dashboard', component: () => import('../pages/Dashboard.vue'), name: 'dashboard' },
    { path: '/panel', component: () => import('../pages/Panel.vue'), name: 'panel' },
    { path: '/admin', component: () => import('../pages/Admin.vue'), name: 'admin' },
    {
        path: '/father',
        component: () => import('../pages/father.vue'),
        children: [
            { path: 'son1', component: () => import('../pages/son1.vue'), name: "son1" },
            { path: 'son2', component: () => import('../pages/son2.vue'), name: 'son2' }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }
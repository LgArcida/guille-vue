import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Login from '../components/Login.vue';

const routes = [
    { path: '/', component: HelloWorld, meta: { requiresAuth: true } },
    { path: '/login', component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (user && user.username === 'user1') {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
});

export default router;

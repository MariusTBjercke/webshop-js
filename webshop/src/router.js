import { getAuth, onAuthStateChanged } from "firebase/auth";
import Vue from 'vue';
import Router from 'vue-router';
import router from './router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import Admin from './views/Admin.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            params: true,
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            props: true,
            params: true,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            params: true,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

let uid = false;
onAuthStateChanged(getAuth(), (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;
        // ...
    } else {
        // User is signed out
        uid = false;
        // ...
    }
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    let currentUser = uid;

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
})
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import AdminProfile from './pages/AdminProfile.vue';
import UserProfile from './pages/UserProfile.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Products from './pages/Products.vue';
import Oils from './pages/Oils.vue';
import Soaps from './pages/Soaps.vue';
import Balms from './pages/Balms.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/contact', component: Contact },
	{ path: '/adminProfile', component: AdminProfile },
	{ path: '/userProfile', component: UserProfile },
	{ path: '/products', component: Products },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/oils', component: Oils },
	{ path: '/soaps', component: Soaps },
	{ path: '/balms', component: Balms },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { router } from './router.js';
import { store } from './store';

// const token = localStorage.getItem('token');
// if(token != null){
//     const expiresIn = localStorage.getItem('expiresIn');
//     const now = new Date().getTime();
// }
// if(Number(expiresIn) < now){
//     localStorage.removeItem('token');
// }

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

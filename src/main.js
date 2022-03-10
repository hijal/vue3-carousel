import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import 'vue3-carousel/dist/carousel.css';

import App from './App.vue';
import BaseCard from './components/Card/BaseCard.vue';

import router from './router';

const app = createApp(App);



app.use(router);

app.component('base-card', BaseCard);
app.mount('#app');

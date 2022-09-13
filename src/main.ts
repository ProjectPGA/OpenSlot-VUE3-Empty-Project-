import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';

import router from './routes/router';
import i18n from './localization';

import './styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');

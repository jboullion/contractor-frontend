import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import axios from 'axios';
import AuthService from './services/AuthService';
import JobService from './services/JobService';

import './index.css'; // Tailwind

import { registerSW } from 'virtual:pwa-register';

const swIntervalMS = 60 * 60 * 1000;

const $axios = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const authService = new AuthService($axios);
const jobService = new JobService($axios);

const app = createApp(App);

app.use(router).mount('#app');

app.provide('axios', $axios);
app.provide('authService', authService);
app.provide('jobService', jobService);

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, swIntervalMS);
  },
  onNeedRefresh() {},
  onOfflineReady() {},
  //onRegisterError(error) {}
});

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import axios from 'axios';

import './index.css';
import { registerSW } from 'virtual:pwa-register';
import JobService from './services/JobsService';

const swIntervalMS = 60 * 60 * 1000;

const $axios = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const jobsService = new JobService($axios);

const app = createApp(App);

app.use(router).mount('#app');

app.provide('axios', $axios);
app.provide('jobsService', jobsService);

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

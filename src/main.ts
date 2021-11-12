import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';
import { registerSW } from 'virtual:pwa-register';

const app = createApp(App);

app.use(router).mount('#app');

const intervalMS = 60 * 60 * 1000;

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
  onNeedRefresh() {},
  onOfflineReady() {},
  //onRegisterError(error) {}
});

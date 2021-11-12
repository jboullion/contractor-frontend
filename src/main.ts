import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { registerSW } from 'virtual:pwa-register'

createApp(App).mount('#app')

const intervalMS = 60 * 60 * 1000

const updateSW = registerSW({
  onRegistered(r) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  },
  onNeedRefresh() {},
  onOfflineReady() { },
  //onRegisterError(error) {}
})
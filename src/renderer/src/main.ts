import Toast, { PluginOptions, POSITION } from 'vue-toastification'
import './assets/main.css'
// Import the CSS or use your own!
import VueQrcodeReader from 'vue-qrcode-reader'
import 'vue-toastification/dist/index.css'
import { router } from './router'

import { createApp } from 'vue'
import App from './App.vue'
const options: PluginOptions = {
  // You can set your default options here
  timeout: 5000,
  closeOnClick: true,
  maxToasts: 5,
  position: POSITION.TOP_RIGHT
}

createApp(App).use(router).use(Toast, options).use(VueQrcodeReader).mount('#app')

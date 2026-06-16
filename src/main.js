import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

/* UNIFIED NOIR GLOBAL THEME SYSTEM */
import { initializeTheme } from './composables/useTheme'

// Initialize theme on app load
initializeTheme()

createApp(App)
  .use(router)
  .mount('#app')

import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { register } from './layouts/register.js'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
register(app)
app.mount('#app')

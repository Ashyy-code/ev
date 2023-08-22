import './assets/global.scss'
import '@formkit/themes/genesis'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(plugin, defaultConfig)

app.mount('#app')

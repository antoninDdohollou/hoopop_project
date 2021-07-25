import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'



createApp(App).use(store).use(router).mount('#app')

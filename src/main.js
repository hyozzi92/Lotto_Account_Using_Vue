import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App).mount('#app')
createApp(App).use(VueSmoothScroll)

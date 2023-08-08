import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/index.vue"
import InputComponent from "./pages/input.vue"

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

const Home = { template: '<div>Home</div>' }
const Input = { template: '<div>Input</div>' }

const routes = [
  { path: '/', component: MainComponent },
  { path: '/input', component: InputComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
// const vuetify = createVuetify({
//   components,
//   directives,
// })

// createApp(App).use(router).use(vuetify).mount("#app") 
createApp(App).use(router).mount("#app") 
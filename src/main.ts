// FILE: main.js
import { createApp } from 'vue'
import { Quasar, Loading } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import { createPinia } from "pinia";
import router from './router';

const myApp = createApp(App)

myApp.use(createPinia())
myApp.use(router)


myApp.use(Quasar, {
  plugins: { Loading }, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
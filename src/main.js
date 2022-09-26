import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)

library.add( fas, far )

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

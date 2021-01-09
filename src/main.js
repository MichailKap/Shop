import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import 'normalize.css'
import './styles/main.scss'
import './styles/variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

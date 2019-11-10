import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueAxios } from './utils/http'
import '@/style/base.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles


Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '../components/App.vue'
import router from '../pages'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})

Vue.use(VueAxios, axios)

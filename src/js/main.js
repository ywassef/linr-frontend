import Vue from 'vue'
import App from '../components/App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../components/router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})

Vue.use(VueAxios, axios)

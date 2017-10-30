import Vue from 'vue'
import App from '../components/App.vue'
import Axios from 'axios'
import router from '../components/router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})

Vue.prototype.$http = Axios

import Vue from 'vue'
import App from '../components/App.vue'
import router from '../components/router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})

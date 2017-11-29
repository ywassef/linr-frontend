import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from '../components/App.vue'
import router from '../pages'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})

Vue.use(VueAxios, axios)

/**
 * Calculates user snowflake considering date, fingerprint, restaurant and client type.
 * @param {Number} restaurantid - DB id
 * @param {Number} userid - 0 if regular user, 1+ for restaurant registering
 * @return {Number} Snowflake
 */
Vue.prototype.$CalculateSnowflake = function (restaurantid, userid) {

    const pad = function (n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };

    const cljs = new ClientJS();
    const d = new Date();

    return pad(cljs.getFingerprint(), 10) + d.getFullYear() + pad(d.getMonth(),2) + pad(d.getDay(), 2) + pad(restaurantid, 3) + pad(userid, 3);

};


function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
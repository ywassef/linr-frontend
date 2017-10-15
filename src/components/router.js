import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './Cadastro.vue'
import Entrarnafila from './Entrarnafila.vue'
import Login from './Login.vue'
import InsercaoManual from './InsercaoManual.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entrarnafila',
      component: Entrarnafila,
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'InsercaoManual',
      component: InsercaoManual,
    },
  ],
})

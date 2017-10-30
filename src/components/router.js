import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './Cadastro.vue'
import Entrarnafila from './Entrarnafila.vue'
import Login from './Login.vue'
import InsercaoManual from './InsercaoManual.vue'
import Home from './Home.vue'
import Outback12 from './Outback12.vue'
import Confirmado from './Confirmado.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/entrarnafila',
      name: 'EntrarnaFila',
      component: Entrarnafila
    },
    {
      path: '/outback12',
      name: 'FilaOutback12',
      component: Outback12
    },
    {
      path: '/confirmado',
      name: 'Confirmado',
      component: Confirmado
    },
    {
      path: '/admin',
      name: 'InsercaoManual',
      component: InsercaoManual
    }
  ]
})

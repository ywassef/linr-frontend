import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './Cadastro.vue'
import Entrarnafila from './Entrarnafila.vue'
import Login from './Login.vue'
import Home from './Home.vue'
import FilaRestaurante from './FilaRestaurante.vue'
import MeuRestaurante from './MeuRestaurante.vue'
import CadastroAdmin from './CadastroAdmin.vue'
import LoginAdmin from './LoginAdmin.vue'
import Admin from './Admin.vue'

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
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/filaRestaurante',
      name: 'FilaRestaurante',
      component: FilaRestaurante,
    },
    {
      path: '/meuRestaurante',
      name: 'MeuRestaurante',
      component: MeuRestaurante,
    },
    {
      path: '/cadastroAdmin',
      name: 'CadastroAdmin',
      component: CadastroAdmin,
    },
    {
      path: '/loginAdmin',
      name: 'LoginAdmin',
      component: LoginAdmin,
    },
  ],
})

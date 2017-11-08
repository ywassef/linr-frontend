import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home.vue'
import Cadastro from './Cadastro.vue'
import Login from './Login.vue'
import Restaurantes from './Restaurantes.vue'

import {
  AlterarDados,
  Dashboard,
  Historico,
  UserSpace,
} from './usuario'

import {
  Admin,
  CadastroRestaurante,
  EditarConta,
  LoginAdmin,
  MeuRestaurante,
} from './admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
      path: '/restaurantes',
      name: 'Restaurantes',
      component: Restaurantes,
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: UserSpace,
      children: [
        {
          path: '',
          redirect: {name: 'Dashboard'},
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'config',
          name: 'Configuracao',
          component: AlterarDados,
        },
        {
          path: 'historico',
          name: 'Historico',
          component: Historico,
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '',
          redirect: {name: 'MeuRestaurante'},
        },
        {
          path: 'login',
          name: 'AdminLogin',
          component: LoginAdmin,
        },
        {
          path: 'config',
          name: 'EditarConta',
          component: EditarConta,
        },
        {
          path: 'restaurante',
          name: 'MeuRestaurante',
          component: MeuRestaurante,
        },
        {
          path: 'cadastro',
          name: 'CadastroRestaurante',
          component: CadastroRestaurante,
        },
      ],
    },
  ],
})

import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home.vue'

import {
  AlterarDados,
  Cadastro,
  Dashboard,
  Historico,
  Login,
  Restaurantes,
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
      path: '/usuario',
      component: UserSpace,
      children: [
        {
          name: 'Usuario',
          path: '',
          redirect: {name: 'Dashboard'},
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
        {
          path: 'cadastro',
          name: 'Cadastro',
          component: Cadastro,
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
          path: 'restaurantes',
          name: 'Restaurantes',
          component: Restaurantes,
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
      component: Admin,
      children: [
        {
          name: 'Admin',
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

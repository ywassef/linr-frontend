import Vue from 'vue'
import Router from 'vue-router'
import Entrarnafila from '../components/EntrarNaFila.vue'
import Home from './Home.vue'
import Cadastro from './Cadastro.vue'
import Login from './Login.vue'
import Restaurantes from './Restaurantes.vue'
import NaFila from '../components/NaFila.vue'

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
  mode: 'history',
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
      path: '/nafila',
      name: 'NaFila',
      component: NaFila,
    },
    {
      path: '/usuario',
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
      path: '/r/:id',
      name: 'Entrarnafila',
      component: Entrarnafila,
    },
    {
      path: '/admin',
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

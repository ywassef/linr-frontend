import Vue from 'vue'
import Router from 'vue-router'
import Entrarnafila from './EntrarNaFila.vue'
import Home from './Home.vue'
import Cadastro from './Cadastro.vue'
import Login from './Login.vue'
import Restaurantes from './Restaurantes.vue'
import NaFila from '../components/NaFila.vue'
import Index from './Index.vue'
import PerfilRestaurante from './PerfilRestaurante.vue'
import AvaliarRestaurante from './AvaliarRestaurante.vue'

import { AlterarDados, Dashboard, Historico, Logout} from './usuario'

import { Admin, CadastroRestaurante, EditarConta, EditarFunc, LoginAdmin, Mesas, Filas, MeuRestaurante } from './admin'

Vue.use(Router)

export default new Router({
  //mode: 'history',
	routes: [
	{
	  path: '/',
	  component: Index,
	  children: [
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
        path: '/restaurantes/:r_id',
        name: 'PerfilRestaurante',
        component: PerfilRestaurante,
			},
      {
        path: '/restaurantes/:r_id/avaliar',
        name: 'AvaliarRestaurante',
        component: AvaliarRestaurante,
      },
	    {
		  path: '/nafila/:id_fila',
		  name: 'NaFila',
		  component: NaFila,
		},
      {
        path: '/usuario',
        component: Dashboard,
        children: [
          {
            name: 'Usuario',
            path: '',
            redirect: {name: 'Dashboard'},
          }
        ]
      },
      {
        path: '/usuario/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/usuario/config',
        name: 'Configuracao',
        component: AlterarDados,
      },
      {
        path: '/usuario/logout',
        name: 'Logout',
        component: Logout,
      },
      {
        path: '/usuario/historico',
        name: 'Historico',
        component: Historico,
	    },
	    {
	      path: '/r/:id_fila',
	      redirect: {name: 'Entrarnafila'},
	    },
	    {
	      path: '/restaurante/:id_fila',
	      name: 'Entrarnafila',
	      component: Entrarnafila,
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
        {
          path: 'mesas',
          name: 'Mesas',
          component: Mesas,
        },
        {
          path: 'filas',
          name: 'Filas',
          component: Filas,
        },
        {
          path: 'editarFunc',
          name: 'EditarFunc',
          component: EditarFunc,
        },
      ],
    },
  ],
})

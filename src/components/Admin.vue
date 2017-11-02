<template>
  <div>
    <nav class="level is-mobile" id="barra">
      <div class="level-item has-text-centered">
        <div>
          <router-link to="/meuRestaurante">
            <p class="title"><img id='imagemfila' class="imagem" :src="fila" alt="Fila"/>
            <p class="heading">Gerenciar Fila</p>
          </router-link>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <router-link to="/meuRestaurante">
            <p class="title"><img class="imagem" :src="mesa" alt="Mesa"/></p>
            <p class="heading">Editar Mesas</p>
          </router-link>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <router-link to="/cadastroRestaurante">
            <p class="title"><img class="imagem" :src="restaurante" alt="Restaurante"/></p>
            <p class="heading">Editar Informações Restaurantes</p>
          </router-link>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <router-link to="/editarConta">
            <p class="title"><img class="imagem" :src="usuario" alt="Usuario"/></p>
            <p class="heading">Editar Conta</p>
          </router-link>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title"><img class="imagem" :src="usuario" alt="Usuario"/></p>
          <p class="heading">Editar Usuários</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Fila from '../img/fila.png'
  import Mesa from '../img/mesa.jpg'
  import Restaurante from '../img/restaurante.png'
  import Usuario from '../img/usuario.png'

  export default {
    name: 'Admin',
    components: {},
    methods: {},
    data () {
      return {
        'fila': Fila,
        'mesa': Mesa,
        'restaurante': Restaurante,
        'usuario': Usuario,
      }
    },
  }
</script>

<style>

  #navbar {
    background-color: black;
  }

  #barra {
    padding-top: 100px;
  }

  .imagem {
    height: 96px;
    width: 96px;
    position: relative;
    margin-bottom: 20px;
  }

  #imagemfila {
    filter: grayscale(100%);
  }
</style>

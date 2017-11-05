<template>
  <section class="section">
    <section class="columns">
      <router-link to="restaurante" class="column">
        <figure>
          <img class="imagem" :src="fila" alt="Fila"/>
          <figcaption>
            Gerenciar Fila
          </figcaption>
        </figure>
      </router-link>
      <router-link to="restaurante" class="column">
        <figure>
          <img class="imagem" :src="mesa" alt="Mesa"/>
          <figcaption>
            Editar Mesas
          </figcaption>
        </figure>
      </router-link>
      <router-link to="cadastro" class="column">
        <figure>
          <img class="imagem" :src="restaurante" alt="Restaurante"/>
          <figcaption>
            Editar Informações Restaurantes
          </figcaption>
        </figure>
      </router-link>
      <router-link to="config" class="column">
        <figure>
          <img class="imagem" :src="usuario" alt="Usuario"/>
          <figcaption>
            Editar Conta
          </figcaption>
        </figure>
      </router-link>
      <router-link to="config" class="column">
        <figure>
          <img class="imagem" :src="usuario" alt="Usuario"/>
          <figcaption>
            Editar Usuários
          </figcaption>
        </figure>
      </router-link>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
  import Fila from '../../img/fila.png'
  import Mesa from '../../img/mesa.jpg'
  import Restaurante from '../../img/restaurante.png'
  import Usuario from '../../img/usuario.png'

  export default {
    name: 'Admin',
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

  .imagem {
    height: 96px;
    width: 96px;
    position: relative;
    margin-bottom: 20px;
  }
</style>

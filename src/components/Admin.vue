<template>
  <nav class="level is-mobile" id="barra">
    <div class="level-item has-text-centered">
      <div>
        <a class="title" href="#/meuRestaurante"><img src="../img/fila.png"
                                                      alt="Fila"></a>
        <p class="heading">Gerenciar Fila</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title"><img src="../img/mesa.jpg" alt="Mesa"></p>
        <p class="heading">Editar Mesas</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title"><img src="../img/restaurante.png" alt="Restaurante">
        </p>
        <p class="heading">Editar Informações Restaurantes</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title"><img src="../img/usuario.png" alt="Usuario"></p>
        <p class="heading">Editar Usuários</p>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    name: 'Admin',
    components: {},
    methods: {},
    data () {
      return {}
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
</style>

<template>
  <div>
    <nav class="level is-mobile" id="barra">
      <div class="level-item has-text-centered">
        <div>
          <a class="title" href="#/meuRestaurante">
            <img id='imagemfila' class="imagem" src="../img/fila.png" alt="Fila">
            <p class="heading">Gerenciar Fila</p>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a class="title" href="#/meuRestaurante">
            <p class="title"><img class="imagem" src="../img/mesa.jpg" alt="Mesa"></p>
            <p class="heading">Editar Mesas</p>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a class="title" href="#/cadastroRestaurante">
            <p class="title"><img class="imagem" src="../img/restaurante.png" alt="Restaurante"></p>
            <p class="heading">Editar Informações Restaurantes</p>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <a class="title" href="#/editarConta">
            <p class="title"><img class="imagem" src="../img/usuario.png" alt="Usuario"></p>
            <p class="heading">Editar Conta</p>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title"><img class="imagem" src="../img/usuario.png" alt="Usuario"></p>
          <p class="heading">Editar Usuários</p>
        </div>
      </div>
    </nav>
  </div>
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

  .imagem {
    height: 96px;
    width: 96px;
    position: relative;
    margin-bottom: 20px;
  }

  #imagemfila {
    filter: grayscale(100%);
  }

  .heading {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

</style>

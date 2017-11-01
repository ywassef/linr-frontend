<template>
  <section class="section">
    <div class="columns is-multiline is-mobile is-centered">
      <div v-for="rest in restaurantes">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                {{rest.nome}}
              </p>
              <p class="subtitle">
                {{rest.descricao}}
              </p>
              <p class="subtitle">
                {{rest.local}}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                          <span>
                            <a href="#">Informações</a>
                          </span>
              </p>
              <p class="card-footer-item">
                          <span>
                              <BEntrar></BEntrar>
                          </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import EntrarFila from './EntrarFilaCadastrado.vue'
  export default {
    name: 'Home',
    components: {
      "BEntrar": EntrarFila
    },
    methods: {},
    data() {
      return {
        restaurantes: [
          {nome: 'Outback Steakhouse', descricao: 'Australiano', local: 'Shopping CenterVale'},
        ]
      }
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #navbar {
    background-color: #c40000;
  }

</style>
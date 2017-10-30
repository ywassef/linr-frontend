<template>

  <section>
    <div class="content">
      <h1>{{Restaurante.nome}}</h1>

      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Data</p>
            <p class="title">{{Restaurante.data}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Pessoas Atendidas</p>
            <p class="title">{{Restaurante.pa}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tempo Médio Espera</p>
            <p class="title">{{Restaurante.tme}}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Previsão Próximo Atendimento</p>
            <p class="title">{{Restaurante.ppa}}</p>
          </div>
        </div>
      </nav>

      <div class="columns">
        <div class="column is-three-quarters">
          <h2 id="tituloFila">Fila Restaurante</h2>
          <fila></fila>
        </div>
        <div class="column is-one-quarter">
          <h2 id="tituloFila2">Inserção Manual</h2>
          <inserir></inserir>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  import FilaRestaurante from './FilaRestaurante.vue'
  import InsercaoManual from './InsercaoManual.vue'
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'MeuRestaurante',
    components: {
      'fila': FilaRestaurante,
      'inserir': InsercaoManual,
    },
    methods: {},
    data () {
      return {
        Restaurante: {
          nome: 'Outback',
          data: '30/10/2017',
          pa: '150',
          tme: '00:40',
          ppa: '00:23',
        },
      }
    },
  }
</script>

<style lang="scss">
  @import "../scss/style";

  #navbar {
    background-color: black;
  }

  div.content h1 {
    font-size: 42px;
    color: darkred;
  }

  div.content nav.level {
    padding-top: 40px;
    padding-bottom: 50px;
  }

  #tituloFila {
    margin-bottom: -10px;
    position: relative;
    text-align: center;
  }

  #tituloFila2 {
    margin-bottom: -10px;
    position: relative;
    text-align: center;
  }

  fila {
    position: relative;
    border-bottom: 300px;
  }
</style>

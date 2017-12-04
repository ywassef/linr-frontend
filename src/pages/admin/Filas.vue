<template>
  <section>
    <h1 class="title" align="center">Controle Filas</h1>
    <div class="columns">
      <div class="column is-three-quarters">
        <h2 id="tituloFila">Editar Filas</h2>
        <editar id="editar"></editar>
      </div>
      <div class="column is-one-quarter">
        <h2 id="tituloFila2">Inserção Fila</h2>
        <inserir></inserir>
      </div>
    </div>
  </section>
</template>

<script>
  import EditarFila from '../../components/EditarFila.vue'
  import InserirFila from '../../components/InserirFila.vue'
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'Filas',
    components: {
      'editar': EditarFila,
      'inserir': InserirFila,
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  section {
    h1 {
      font-size: 42px;
      color: darkred;
    }
    h2 {
      padding-top: 25px;
      font-size: 32px;
      text-align: center;
    }
  }

  #editar {
    padding-top: 20px;
    margin-top: 20px;
  }
</style>

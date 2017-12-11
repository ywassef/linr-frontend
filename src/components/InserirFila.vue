<template>
  <section class="section">
    <form  onsubmit="return false">

      <label class="label">ID FILA</label>
      <div class="control">
        <input class="input" name="idFila" type="text" placeholder="Ex: 2">
      </div>
      <div class="field">
        <label class="label">Descricao</label>
        <div class="control">
          <input class="input" name="descricao" type="text" placeholder="Ex: Delivery">
        </div>
      </div>
      <div class="field">
        <label class="label">Hora Funcionamento Início</label>
        <div class="control">
          <input class="input" name="hfi" type="text" placeholder="Ex: 08:00">
        </div>
      </div>
      <div class="field">
        <label class="label">Hora Funcionamento Fim</label>
        <div class="control">
          <input class="input" name="hff" type="text" placeholder="Ex: 20:00">
        </div>
      </div>
      <div class="field">
        <label class="label">Tempo Médio Inicial</label>
        <div class="control">
          <input class="input" name="tm" type="text" placeholder="Ex: 25">
        </div>
      </div>
      <br>
      <button class="button is-primary is-outlined" v-on:click="cadastrar">
        Inserir
      </button>
    </form>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { api } from '../js/environment'

  const id_rest = 1;

  export default {
    name: 'InserirFila',
    methods: {
      cadastrar () {
        const [form] = document.getElementsByTagName('form')

        console.log(form.idFila.value)
        this.$http.post(api('/filas'), {
          id: form.idFila.value,
          descricao: form.descricao.value,
          id_restaurante: id_rest,
          hora_funcionamento_inicio: form.hfi.value,
          hora_funcionamento_fim: form.hff.value,
          tempo_medio_inicial: form.tm.value,
        })
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
          })
          .catch(err => {
            alert('Inserir fila com ID que não existe!')
            console.log(`Error: ${err}`)
            return false
          })
      }
    },
    data () {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  button {
    position: relative;
  }
</style>

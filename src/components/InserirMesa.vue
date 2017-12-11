<template>
  <section class="section">
    <form  onsubmit="return false">
      <div class="field">
        <label class="label">ID MESA</label>
        <div class="control">
          <input class="input" name="idMesa" type="text">
        </div>
      </div>
      <div class="field">
        <label class="label">Capacidade</label>
        <div class="control">
          <input class="input" name="qtd" type="text">
        </div>
      </div>
      <button class="button is-primary is-outlined" v-on:click="cadastrar">
        Inserir
      </button>
    </form>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { api } from '../js/environment'

  const idr = 1

  export default {
    name: 'InserirMesa',
    methods: {
      cadastrar () {
        const [form] = document.getElementsByTagName('form')

        this.$http.post(api('/restaurantes/' + idr + '/mesas'), {
          id_mesa: form.idMesa.value,
          capacidade: form.qtd.value,
          id_restaurante: idr,
        })
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
          })
          .catch(err => {
            alert('Inserir mesa com ID que não existe!')
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

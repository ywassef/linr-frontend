<template>
  <section class="section">
    <label class="label">ID MESA</label>
    <div class="control">
      <input class="input" id="idMesa" type="text">
    </div>
    <br>
    <div class="field">
      <label class="label">Capacidade</label>
      <div class="control">
        <input class="input" id="qtd" type="text">
      </div>
    </div>
    <br>
    <button class="button is-primary is-outlined" v-on:click="insertmanual">
      Inserir
    </button>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'InserirMesa',
    methods: {
      insertmanual (event) {
        const cljs = new ClientJS()
        alert(document.getElementById('NameField').value + '\n'
          + document.getElementById('TelephoneField').value + '\n'
          + 'ID do usuário: ' + cljs.getFingerprint())
        console.log(event)
      },
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

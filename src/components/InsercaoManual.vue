<template>
  <section class="section">
    <label class="label">Nome</label>
    <div class="control">
      <input class="input" id="NameField" type="text"
             placeholder="Ex: Ivan Alves">
    </div>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" id="NameField" type="text"
               placeholder="Ex: Ivan Alves">
      </div>
    </div>
    <div class="field">
      <label class="label">Telefone</label>
      <div class="control">
        <input class="input" id="TelephoneField" type="tel"
               placeholder="(11) 11111-1111">
      </div>
    </div>
    </div>
    </div>
    <div class="hero-foot">
      <div class="container has-text-centered">
        <button class="button is-large is-primary"
                v-on:click="insertmanual">Inserir
        </button>
      </div>
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
    name: 'InsercaoManual',
    methods: {
      insertmanual: function (event) {
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
</style>

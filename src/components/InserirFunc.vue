<template>
  <section class="section">
    <div class="field">
      <label class="label">Permissão</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Gerente</option>
            <option>Funcionário</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" id="idMesa" type="text">
      </div>
    </div>
    <div class="field">
      <label class="label">E-mail</label>
      <div class="control">
        <input class="input" id="email" type="text">
      </div>
    </div>
    <div class="field">
      <label class="label">Senha</label>
      <div class="control">
        <input class="input" id="PasswordField" type="password"
               placeholder="Deve conter pelo menos 6 caracteres">
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
    name: 'InserirFunc',
    methods: {
      insertmanual(event) {
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

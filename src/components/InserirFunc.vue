<template>
  <section class="section">
    <form  onsubmit="return false">
      <div class="field">
        <label class="label">Permissão</label>
        <div class="control">
          <div class="select" id="TypeField">
            <select>
              <option>dono</option>
              <option>garcom</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input class="input" id="NameField" type="text">
        </div>
      </div>
      <div class="field">
        <label class="label">E-mail</label>
        <div class="control">
          <input class="input" id="EmailField" type="text">
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
      <button class="button is-primary is-outlined" v-on:click="cadastrar">
        Inserir
      </button>
    </form>
  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { api } from '../js/environment'

  const id_rest = 1

  export default {
    name: 'InserirFunc',
    methods: {
      insertmanual (event) {
        const cljs = new ClientJS()
        alert(document.getElementById('NameField').value + '\n'
          + document.getElementById('TelephoneField').value + '\n'
          + 'ID do usuário: ' + cljs.getFingerprint())
        console.log(event)
      },
      cadastrar () {
        const [form] = document.getElementsByTagName('form')

        console.log(form.idFila.value)
        this.$http.post(api('/Admin'), {
          id_restaurante: id_rest,
          nome: form.NameField.value,
          email: form.EmailField.value,
          tipo: form.TypeField.value,
          senha: form.PasswordField.value,
        })
          .then(response => {
            console.log(`Response: ${response}`)
            // TODO add session to cookies
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      }
    },
    data () {
      return {}
    }
    ,
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  button {
    position: relative;
  }
</style>

<template>

  <section class="section">

    <div class="container has-text-centered">
      <h1 class="title">Cadastro Empresa</h1>
    </div>

    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column is-one-third has-text-centered">

              <div class="field">
                <label class="label">Nome</label>
                <div class="control">
                  <input class="input" id="NameField" type="text"
                         placeholder="Ex: Ivan Alves">
                </div>
              </div>

              <div class="field">
                <label class="label">Telefone 1</label>
                <div class="control">
                  <input class="input" id="TelephoneField1" type="tel"
                         placeholder="(11) 11111-1111">
                </div>
              </div>

              <div class="field">
                <label class="label">Telefone 2</label>
                <div class="control">
                  <input class="input" id="TelephoneField2" type="tel"
                         placeholder="(11) 11111-1111">
                </div>
              </div>


              <div class="field">
                <label class="label">Site</label>
                <div class="control">
                  <input class="input" id="SiteField" type="text"
                         placeholder="Ex: www.google.com">
                </div>
              </div>

              <div class="field">
                <label class="label">Endereço</label>
                <div class="control">
                  <input class="input" id="EnderecoField" type="text"
                         placeholder="Ex: Rua 21 de Abril, 154 - SJC - SP">
                </div>
              </div>


              <div class="field">
                <label class="label">Descrição</label>
                <div class="control">
                  <textarea class="textarea"
                            placeholder="e.g. Hello world"></textarea>
                </div>
              </div>

              <div class="field">
                <label class="label">Senha</label>
                <div class="control">
                  <input class="input" id="PasswordField" type="password"
                         placeholder="Deve conter pelo menos 6 caracteres">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" id="Termos">
                    Concordo com os  <a href="#">Termos e Condições de Uso</a>
                  </label>
                </div>
              </div>

            </div>
          </div>
          <div class="hero-foot">
            <div class="container has-text-centered">
              <a class="button is-large is-primary" v-on:click="cadastrar"
                 href="#/loginAdmin">Cadastrar</a>
            </div>
          </div>

        </div>
      </section>
    </div>

  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'Cadastro',
    methods: {
      cadastrar: function (event) {
        if (document.getElementById('Termos').checked) {
          alert(document.getElementById('NameField').value + '\n'
            + document.getElementById('EmailField').value + '\n'
            + document.getElementById('PasswordField').value + '\n'
            + document.getElementById('TelephoneField').value + '\n'
            + 'Cadastro realizado com sucesso!')
          console.log(event)
        }
        else {
          alert('Você deve aceitar os Termos e Condições de Uso para fazer o cadastro!')
          console.log(event)
        }
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

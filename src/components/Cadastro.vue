<template>

  <section class="section">

    <div class="container has-text-centered">
      <h1 class="title">Cadastro de Usuário</h1>
    </div>

    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered">

              <div class="field">
                <label class="label">Nome</label>
                <div class="control">
                  <input class="input" id="NameField" type="text" placeholder="Ex: Ivan Alves">
                </div>
              </div>

              <div class="field">
                <label class="label">Celular</label>
                <div class="control">
                  <input class="input" id="MobileField" type="tel" placeholder="(11) 11111-1111">
                </div>
              </div>


              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" id="EmailField" type="email" placeholder="Ex: ivanalves@gmail.com">
                </div>
              </div>

              <div class="field">
                <label class="label">Senha</label>
                <div class="control">
                  <input class="input" id="PasswordField" type="password" placeholder="Deve conter pelo menos 6 caracteres">
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
              <button class="button is-large is-primary" v-on:click="cadastrar">Cadastrar</button>
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
      cadastrar: function(event) {

        if (document.getElementById('Termos').checked) {
          alert(document.getElementById('NameField').value +'\n'
            + document.getElementById('EmailField').value +'\n'
            + document.getElementById('PasswordField').value +'\n'
            + document.getElementById('MobileField').value +'\n'
            + 'Cadastro realizado com sucesso!');
          console.log(event)
        }
        else {
          alert('Você deve aceitar os Termos e Condições de Uso para fazer o cadastro!');
          console.log(event)
        }
      }
    },
    data() {
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
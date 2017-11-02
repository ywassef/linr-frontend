<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">INFORMAÇÕES RESTAURANTES</h1>
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
                <label class="label">Categoria</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Pizzaria</option>
                      <option>Lanchonete</option>
                      <option>Comida Mexicana</option>
                      <option>Comida Japonesa</option>
                    </select>
                  </div>
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
                <label class="label">Forma Pagamento</label>
                <div class="control">
                  <textarea class="textarea"
                            placeholder="e.g. Hello world"></textarea>
                </div>
              </div>

              <div class="field">
                <label class="label">Dia Funcionamento</label>
                <div class="control">
                  <textarea class="textarea"
                            placeholder="e.g. Hello world"></textarea>
                </div>
              </div>

            </div>
          </div>
          <div class="hero-foot">
            <div class="container has-text-centered">
              <a class="button is-outlined is-primary" v-on:click="atualizar"
                 href="#/admin">Atualizar</a>
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
      atualizar: function (event) {
        alert(document.getElementById('NameField').value + '\n'
          + document.getElementById('TelephoneField1').value + '\n'
          + document.getElementById('TelephoneField2').value + '\n'
          + document.getElementById('SiteField').value + '\n'
          + document.getElementById('EnderecoField').value + '\n'
          + 'Cadastro realizado com sucesso!')
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

  #navbar {
    background-color: black;
  }
</style>

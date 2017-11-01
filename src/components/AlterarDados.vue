<template>
  <section class="section">
    <div class="container is-mobile has-text-centered">
      <h1 class="title">Alterar Dados Cadastrais</h1>
    </div>
    <div class="content">
      <section class="hero">
        <form>
          <div class="hero-body">
            <div class="columns is-mobile is-centered">
              <div class="column has-text-centered is-one-third-desktop">
                <div class="columns is-mobile is-centered">
                  <div class="column has-text-centered">
                    <label class="label has-text-left" style="font-size: 20px">Senha antiga: </label>
                    <div class="control">
                      <input class="input" name="old_password" type="password">
                    </div>

                    <div class="tile notification is-info is-mobile">
                      Preencha apenas os dados que devem ser alterados!
                    </div>

                    <label class="label has-text-left" style="font-size: 20px">Nome: </label>
                    <div class="control">
                      <input class="input" name="name" type="text">
                    </div>
                    <label class="label has-text-left" style="font-size: 20px">Senha: </label>
                    <div class="control">
                      <input class="input" name="new_password" type="password">
                    </div>
                    <label class="label has-text-left" style="font-size: 20px">Celular: </label>
                    <div class="control">
                      <input class="input" name="celular" type="tel">
                    </div>
                    <label class="label has-text-left" style="font-size: 20px">Email: </label>
                    <div class="control">
                      <input class="input" name="email" type="email">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero-foot">
              <div class="container has-text-centered">
                <button type="submit" class="button is-large is-primary"
                        v-on:click="salvar">
                  Salvar Dados
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'AlterarDados',
    methods: {
      salvar: function(event) {
        alert('Dados alterados com sucesso!')
        this.$router.push({ path: '/espaco_usuario'});
      }
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
    background-color: $primary;
  }

  .tile {
    padding: 10px;
    border-radius: 10px;
  }

  .input {
    margin-bottom: 20px;
  }

  #navbar {
    background-color: #c40000;
  }

</style>

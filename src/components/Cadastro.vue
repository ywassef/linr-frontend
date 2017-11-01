<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">Cadastro de Usuário</h1>
    </div>
    <div class="content">
      <section class="hero">
        <form>
          <div class="hero-body">
            <div class="columns is-mobile is-centered">
              <div class="column has-text-centered is-one-third-desktop">
                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input class="input" name="nome" type="text"
                           placeholder="Ex: Ivan Alves">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Telefone</label>
                  <div class="control">
                    <input class="input" name="telefone" type="tel"
                           placeholder="(11) 11111-1111">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" name="email" type="email"
                           placeholder="Ex: ivanalves@gmail.com">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Senha</label>
                  <div class="control">
                    <input class="input" name="senha" type="password"
                           placeholder="Deve conter pelo menos 6 caracteres">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox" name="termos">
                      Concordo com os  <a href="#">Termos e Condições de Uso</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="hero-foot">
              <div class="container has-text-centered">
                <button type="submit" class="button is-large is-primary"
                        v-on:click="cadastrar">
                  Cadastrar
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
  function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  export default {
    name: 'Cadastro',
    methods: {
      cadastrar: function () {
        const form = document.getElementsByTagName('form')[0]
        if (!form.termos.checked) {
          alert('Você deve aceitar os Termos e Condições para fazer o cadastro!')
          return
        }
        console.log(this.axios)
        this.axios.post('http://localhost:8080/api/auth/new', {
          id: getRandomInt(0, 10000000),
          nome: form.name.value,
          telefone: form.telefone.value,
          email: form.email.value,
          senha: form.senha.value,
        }).then(response => {
          console.log(`Response: ${response}`)
        })
          .catch(err => {
            console.log(`Error: ${err}`)
          })
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
    background-color: #c40000;
  }
</style>

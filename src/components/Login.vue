<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">Login</h1>
    </div>
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" id="EmailField" type="email"
                         placeholder="Ex: ivanalves@gmail.com">
                </div>
              </div>

              <div class="field">
                <label class="label">Senha</label>
                <div class="control">
                  <input class="input" id="PasswordField" type="password"
                         placeholder="Deve conter pelo menos 6 caracteres">
                </div>
              </div>

            </div>
          </div>
          <div class="hero-foot">
            <div class="container has-text-centered">
              <button class="button is-large is-primary" v-on:click="logar">
                Entrar
              </button>
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
    name: 'Login',
    methods: {
      logar: function (event) {
        alert(document.getElementById('EmailField').value + '\n'
          + document.getElementById('PasswordField').value + '\n'
          + 'Login realizado com sucesso!')
        console.log(event)
      },
    },
    data () {
      return {}
    },
  }
</script>

</style lang="scss">
=======

  #navbar {
    background-color: $primary;
  }
</style>

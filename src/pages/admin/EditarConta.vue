<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">INFORMAÇÕES CONTA</h1>
    </div>
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column is-one-third has-text-centered">
              <div class="field">
                <label class="label">E-mail</label>
                <div class="control">
                  <input class="input" id="Email" type="text"
                         placeholder="Ex: Ivan Alves">
                </div>
              </div>
              <div class="field">
                <label class="label">Senha Atual</label>
                <div class="control">
                  <input class="input" id="PasswordField" type="password">
                </div>
              </div>
              <div class="field">
                <label class="label">Senha Nova</label>
                <div class="control">
                  <input class="input" id="PasswordFieldNew" type="password"
                         placeholder="Deve conter pelo menos 6 caracteres">
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
  export default {
    name: 'EditarConta',
    methods: {
      atualizar: function (event) {
        alert('Atualizado!')
        this.$router.push({name: 'MeuRestaurante'})
      },
      preencher(){
        document.getElementById('Email').value = 'Denis Taveira'
      }
    },
    mounted () {
      this.preencher()

    }
  }
</script>

<style lang="scss" scoped>
  #navbar {
    background-color: black;
  }
</style>

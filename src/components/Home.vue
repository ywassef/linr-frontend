<template>
  <section class="section">
    <img src="../img/logo_big.png" style="width: 400px; height: auto"/>
    <div class="content">
      <section class="hero">
        <div class="hero-body">
          <div class="columns is-mobile is-centered">
            <div class="column has-text-centered is-one-third-desktop">
              <div class="field">
                <label class="label">Código do Restaurante</label>
                <div class="control">
                  <input class="input" id="RestID" type="email" placeholder="Ex: outback12">
                </div>
              </div>

            </div>
          </div>
          <div class="hero-foot">
            <div class="container has-text-centered">
              <button class="button is-large is-primary" v-on:click="entrar_na_fila">ENTRAR NA FILA</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      entrar_na_fila: function(event) {
        if (document.getElementById('RestID').value === 'outback12') {
          this.$router.push({ path: 'outback12' });
          console.log(event)
        }
        else {
          alert('Código inválido');
          console.log(event)
        }
      },
    }
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

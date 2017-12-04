<template>
  <section>
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <h2><strong>Nome Restaurante</strong></h2>
          </div>
          <div class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <h3 class="subtitle"><i class="fa fa-users" aria-hidden="true"></i>
                15
                </h3>
              </a>
              <a class="level-item">
                <h3 class="subtitle"  style='margin-left:1.0rem'><i class="fa fa-star" aria-hidden="true"></i>
                4
              </h3>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="box has-text-left">
      <strong>Descrição:</strong>
      <p style="text-align:justify "><small>
        Informação adicional. By clicking Create Account, you agree to our Terms and that you have read our Data Policy, including our Cookie Use. You may receive SMS Notifications from Facebook and can opt out at any time.
      </small></p>
    </div>

    <div class="box has-text-left">
      <strong>Endereço:</strong>
      <p><small>
        Shopping CenterVale
      </small></p>
    </div>

    <div class="box has-text-left">
      <strong>Contato:</strong>
      <p><small>
        <strong>Telefone:</strong> (11) 11111-1111
      </small></p>
      <p><small>
        <strong>Site:</strong> <a href="https://www.w3schools.com/html/">www.restaurante.com.br</a>
      </small></p>
    </div>

    <div class="box has-text-left">
      <strong>Horários de funcionamento:</strong>
      <p><small>
        <span v-html="hora_funcionamento"></span>
      </small></p>
      <div class="has-text-right">
        <button class="button is-outlined" v-on:click="hora_func" >
          <i :class="botao_icon" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="box has-text-left">
      <strong>Formas de pagamento:</strong>
      <p><small>
        Cartão de crédito<br>Cartão de débito<br>Dinheiro
      </small></p>
    </div>

  </section>
</template>

<script>

  var data = {
    hora_funcionamento: '',
    botao_icon: ''
  }

  import MaskedInput from 'vue-masked-input'
  import EntrarFila from '../components/EntrarFilaCadastrado.vue'
  import api from '../js/environment.js'

  export default {
    name: 'PerfilRestaurantes',
    data () {
      return data
    },
    methods: {
      load_hora_func() {
        data.hora_funcionamento = '<strong>Hoje:</strong> 10h às 19h'
        data.botao_icon = 'fa fa-angle-down'
      },
      hora_func () {
        if(data.botao_icon === 'fa fa-angle-down') {
          data.hora_funcionamento = '<strong>Segunda:</strong> 10h às 19h<br><strong>Terça:</strong> 10h às 19h'
          data.botao_icon = 'fa fa-angle-up'
        }
        else {
          this.load_hora_func()
        }
      },
    },
    mounted () {
      this.load_hora_func()
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

</style>

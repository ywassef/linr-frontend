<template>
  <section>
    <div v-if="this.$session.exists()">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <h2><strong>{{nome}}</strong></h2>
            </div>
            <div class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <h3 class="subtitle"><i class="fa fa-star" aria-hidden="true"></i>
                    {{avaliacao_average}}
                  </h3>
                  <h3  v-if="avaliacao_user_exists === true" class="subtitle" style="padding-left: 1rem"><b>Sua nota: </b>
                    {{avaliacao_user}}
                  </h3>
                </a>
              </div>
            </div>
            <!--<div class="level is-mobile">
              <div class="level-left">
                <a class="level-item" style="padding-left: 1rem">
                  <h3 class="subtitle"><b>Sua nota: </b>
                    {{avaliacao_user}}
                  </h3>
                </a>
              </div>
            </div>-->
          </div>
        </article>
      </div>

      <div class="box has-text-left">
        <strong>Filas:</strong>
        <p><small>
          <span v-html="filas"></span>
        </small></p>
      </div>

      <div class="box has-text-left">
        <strong>Descrição:</strong>
        <p style="text-align:justify "><small>
          {{informacao_adicional}}
        </small></p>
      </div>

      <div class="box has-text-left">
        <strong>Endereço:</strong>
        <p><small>
          {{endereco}}
        </small></p>
      </div>

      <div class="box has-text-left">
        <strong>Contato:</strong>
        <p><small>
          <strong>Telefone:</strong> {{telefone}}
        </small></p>
        <p><small>
          <strong>Site:</strong> <a v-bind:href="'http://' + site">{{site}}</a>
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
          <span v-html="pagamento"></span>
        </small></p>
      </div>

      <div class="hero-body">
        <button class="button is-medium is-primary is-outlined"
                v-on:click="avaliar">Avalie esse restaurante!
        </button>
      </div>

      <div class="hero-body">
        <button class="button is-large is-primary"
                v-on:click="entrar_na_fila">ENTRAR NA FILA
        </button>
      </div>
    </div>
    <div v-else>
      <div class="content">
      <section class="hero">
        <div class="hero-body">
          <h2 class="title"><b>Não autorizado</b></h2>
        </div>
      </section>
      </div>
    </div>
  </section>
</template>

<script>

  var hora_func_full = ''
  var hora_func_short = ''

  var data = {
    nome: '',
    avaliacao_average: 'placeholder',
    avaliacao_user: '',
    avaliacao_user_exists: false,
    filas: '',
    informacao_adicional: '',
    endereco: '',
    telefone: '',
    site: '',
    hora_funcionamento: '',
    botao_icon: '',
    pagamento: ''
  }

  import MaskedInput from 'vue-masked-input'
  import EntrarFila from '../components/EntrarFilaCadastrado.vue'
  import { api } from '../js/environment.js'
  import Vue from 'vue'
  import VueSession from 'vue-session'
  Vue.use(VueSession)

  export default {
    name: 'PerfilRestaurantes',
    data () {
      return data
    },
    methods: {
      entrar_na_fila() {
        this.$router.push('/')
      },
      avaliar() {
        this.$router.push('/restaurantes/' + this.$route.params.r_id + '/avaliar')
      },
      loadPagina() {
        hora_func_full = ''
        hora_func_short = ''
        const rest_id = this.$route.params.r_id
        var filas = ''
        data.filas = ''
        data.pagamento = ''
        data.avaliacao_user_exists = false
        const vm = this

        vm.$http
          .get(api(`/restaurantes/${rest_id}`))
          .then(function (response) {
            const dados = response.data.data;
            data.nome = dados.nome
            data.informacao_adicional = dados.informacao_adicional
            data.endereco = dados.endereco
            data.telefone = dados.telefone
            data.site = dados.site
            if(dados.forma_pagamento !== null) {
              for (var i = 0; i < dados.forma_pagamento.length ; i++) {
                data.pagamento = data.pagamento + dados.forma_pagamento[0] + '<br>'
              }
            }

            const d = new Date()
            const func_ini = dados.hora_funcionamento_inicio
            const func_fim = dados.hora_funcionamento_fim
            hora_func_short = '<strong>Hoje: </strong>'
            switch (d.getDay()) {
              case 0:
                if(func_ini[0] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[0].slice(0, -3) + ' às ' + func_fim[0].slice(0, -3)
                }
                break
              case 1:
                if(func_ini[1] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[1].slice(0, -3) + ' às ' + func_fim[1].slice(0, -3)
                }
                break
              case 2:
                if(func_ini[2] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[2].slice(0, -3) + ' às ' + func_fim[2].slice(0, -3)
                }
                break
              case 3:
                if(func_ini[3] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[3].slice(0, -3) + ' às ' + func_fim[3].slice(0, -3)
                }
                break
              case 4:
                if(func_ini[4] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[4].slice(0, -3) + ' às ' + func_fim[4].slice(0, -3)
                }
                break
              case 5:
                if(func_ini[5] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[5].slice(0, -3) + ' às ' + func_fim[5].slice(0, -3)
                }
                break
              case 6:
                if(func_ini[6] === null) {
                  hora_func_short = 'Não abre hoje'
                }
                else {
                  hora_func_short = hora_func_short + func_ini[6].slice(0, -3) + ' às ' + func_fim[6].slice(0, -3)
                }
                break
              default:
                break
            }

            for (var i = 0; i < 7; i++) {
              switch(i) {
                case 0:
                  hora_func_full = hora_func_full + '<strong>Domingo: </strong>'
                  if(func_ini[0] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[0].slice(0, -3) + ' às ' + func_fim[0].slice(0, -3) + '<br>'
                  }
                  break
                case 1:
                  hora_func_full = hora_func_full + '<strong>Segunda: </strong>'
                  if(func_ini[1] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[1].slice(0, -3) + ' às ' + func_fim[1].slice(0, -3) + '<br>'
                  }
                  break
                case 2:
                  hora_func_full = hora_func_full + '<strong>Terça: </strong>'
                  if(func_ini[2] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[2].slice(0, -3) + ' às ' + func_fim[2].slice(0, -3) + '<br>'
                  }
                  break
                case 3:
                  hora_func_full = hora_func_full + '<strong>Quarta: </strong>'
                  if(func_ini[3] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[3].slice(0, -3) + ' às ' + func_fim[3].slice(0, -3) + '<br>'
                  }
                  break
                case 4:
                  hora_func_full = hora_func_full + '<strong>Quinta: </strong>'
                  if(func_ini[4] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[4].slice(0, -3) + ' às ' + func_fim[4].slice(0, -3) + '<br>'
                  }
                  break
                case 5:
                  hora_func_full = hora_func_full + '<strong>Sexta: </strong>'
                  if(func_ini[5] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[5].slice(0, -3) + ' às ' + func_fim[5].slice(0, -3) + '<br>'
                  }
                  break
                case 6:
                  hora_func_full = hora_func_full + '<strong>Sábado: </strong>'
                  if(func_ini[6] === null) {
                    hora_func_full = hora_func_full + 'Não abre' + '<br>'
                  }
                  else {
                    hora_func_full = hora_func_full + func_ini[6].slice(0, -3) + ' às ' + func_fim[6].slice(0, -3) + '<br>'
                  }
                  break
                default:
                  break
              }
            }

            data.hora_funcionamento = hora_func_short
            data.botao_icon = 'fa fa-angle-down'

            filas = dados.filas
            for(var i = 0; i< filas.length; i++) {
              vm.$http
                .get(api(`/filas/${filas[i]}`))
                .then(function (response) {
                  data.filas = data.filas + '<strong>Fila ' + response.data.data.id + ':</strong>' + '&ensp;'
                  data.filas = data.filas + response.data.data.descricao + '&ensp;'
                  data.filas = data.filas + '<i class="fa fa-users" aria-hidden="true"></i> &nbsp;'
                  if(response.data.data.usuarios_na_fila === null) {
                    data.filas = data.filas + 0 + '<br>'
                  }
                  else {
                    data.filas = data.filas + response.data.data.usuarios_na_fila.length + '<br>';
                  }
                })
            }

            const id_user = vm.$session.getAll().usuario.id
            vm.$http
              .get(api(`/restaurantes/${rest_id}/avaliacao/${id_user}`))
              .then(function (response) {
                if(response.data.data.avaliacao_usuario) {
                  data.avaliacao_user_exists = true
                  data.avaliacao_user = response.data.data.avaliacao_usuario.valor
                }
                data.avaliacao_average = parseFloat(response.data.data.avaliacao_media.avg).toFixed(1)

              })

          })
          .catch(function (err) {
            console.log(`Error: ${err}`)
            return false
          })
      },
      hora_func () {
        if(data.botao_icon === 'fa fa-angle-down') {
          data.hora_funcionamento = hora_func_full
          data.botao_icon = 'fa fa-angle-up'
        }
        else {
          data.hora_funcionamento = hora_func_short
          data.botao_icon = 'fa fa-angle-down'
        }
      },
    },
    mounted () {
      this.loadPagina()
    },
  }
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .hero-body {
    padding: 0rem 3rem 3rem 3rem;
  }

</style>

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
              <form  onsubmit="return false">

                <div class="field">
                  <label class="label">Nome</label>
                  <div class="control">
                    <input class="input" name="NameField" type="text"
                           placeholder="Ex: Ivan Alves">
                  </div>
                </div>

                <!--<div class="field">
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
                </div>-->

                <div class="field">
                  <label class="label">Telefone 1</label>
                  <div class="control">
                    <input class="input" name="TelephoneField1" type="tel"
                           placeholder="(11) 11111-1111">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Site</label>
                  <div class="control">
                    <input class="input" name="SiteField" type="text"
                           placeholder="Ex: www.google.com">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Endereço</label>
                  <div class="control">
                    <input class="input" name="EnderecoField" type="text"
                           placeholder="Ex: Rua 21 de Abril, 154 - SJC - SP">
                  </div>
                </div>


                <div class="field">
                  <label class="label">Descrição</label>
                  <div class="control">
                    <input class="textarea"
                           placeholder="e.g. Hello world" name="DescricaoField">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Forma Pagamento</label>
                  <div class="control">
                  <textarea class="textarea"
                            placeholder="e.g. Hello world" name="FormaPagamento"></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Dia Funcionamento</label>
                  <div class="control">
                  <textarea class="textarea"
                            placeholder="e.g. Hello world" name="DiaFuncionamento"></textarea>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Informação Adicional</label>
                  <div class="control">
                  <textarea class="textarea"
                            placeholder="e.g. Hello world" name="InformacaoAdicional"></textarea>
                  </div>
                </div>

              </form>
            </div>
          </div>


          <div class="hero-foot">
            <div class="container has-text-centered">
              <a class="button is-outlined is-primary" v-on:click="atualizar">Atualizar</a>
            </div>
          </div>

        </div>
      </section>
    </div>

  </section>
</template>

<script>
  import MaskedInput from 'vue-masked-input'
  import { api } from '../../js/environment'

  const id_rest = 1

  export default {
    name: 'Cadastro',
    methods: {
      atualizar () {
        const [form] = document.getElementsByTagName('form')

        this.$http.put(api('/restaurantes/' + id_rest), {
          nome: form.NameField.value,
          endereco: form.EnderecoField.value,
          descricao: form.DescricaoField.value,
          site: form.SiteField.value,
          telefone :form.TelephoneField1.value,
          informacao_adicional: form.InformacaoAdicional.value,
        })
          .then(response => {
            console.log(`Response: ${response}`)
            alert('Atualizado!')
            this.$router.push({name: 'MeuRestaurante'})
            // TODO add session to cookies
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
      consultarRestaurante () {
        const vm = this
        this.$http
          .get(api('/restaurantes/' + id_rest))
          .then(response => {
            vm.restaurante = response.data.data
            vm.preencherRestaurante()
          })
          .catch(err => {
            console.log(`Error: ${err}`)
            return false
          })
      },
      preencherRestaurante () {
        const [form] = document.getElementsByTagName('form')

        form.NameField.value = this.restaurante.nome
        form.TelephoneField1.value = this.restaurante.telefone
        form.SiteField.value = this.restaurante.site
        form.EnderecoField.value = this.restaurante.endereco
        form.DescricaoField.value = this.restaurante.descricao
        form.FormaPagamento.value = this.restaurante.forma_pagamento
        form.InformacaoAdicional.value = this.restaurante.informacao_adicional
        form.DiaFuncionamento.value = this.restaurante.hora_funcionamento_inicio
          + '\t' + this.restaurante[0].hora_funcionamento_fim
      }
    },
    data () {
      return {
        restaurante: [],
      }
    },
    mounted () {
      this.consultarRestaurante()

    }
  }
</script>

<style lang="scss" scoped>
</style>

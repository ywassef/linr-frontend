<template>
    <section>
        <div class="content">
            <h1>Lista Restaurante 1</h1>
            <p></p>
            <div class="columns">
                <div class="column">
                    <abbr title="Posição">Pos</abbr>
                </div>
                <div class="column">
                    Nome
                </div>
                <div class="column">
                    Telefone
                </div>
                <div class="column">
                    <abbr title="Hora Entrada Fila">HEF</abbr>
                </div>
                <div class="column">
                    <abbr title="Hora Saida Fila">HSF</abbr>
                </div>
                <div class="column">
                    <abbr title="Hora Prevista Atendimento">HPA</abbr>
                </div>
                <div class="column">
                    <abbr title="Quantidade Pessoas">QP</abbr>
                </div>
                <div class="column">
                    <abbr title="Tem Reserva">R</abbr>
                </div>
                <div class="column">
                    Obs
                </div>
                <div class="column">
                    <abbr title="Retirar da Fila">RF</abbr>
                </div>
            </div>

            <div class="columns" v-for="user in Usuarios">
                <div class="column">
                    {{user.posicao}}
                </div>
                <div class="column">
                    {{user.nome}}
                </div>
                <div class="column">
                    {{user.telefone}}
                </div>
                <div class="column">
                    {{user.hef}}
                </div>
                <div class="column">
                    {{user.hsf}}
                </div>
                <div class="column">
                    {{user.hpa}}
                </div>
                <div class="column">
                    {{user.qp}}
                </div>
                <div class="column">
                    {{user.r}}
                </div>
                <div class="column">
                    {{user.obs}}
                </div>
                <div class="column">
                    <a class="button is-danger">Danger</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MaskedInput from 'vue-masked-input'

    export default {
        name: 'FilaRestaurante',
        methods: {},
        data() {
            return {
                Usuarios: [
                    {posicao: 1, nome: 'Denis Taveira', telefone: '12982054061', hef: '14:30', hsf: '14:50', hpa: '14:40', qp: 2, r:'N', obs:'-'},
                    {posicao: 2, nome: 'Igor', telefone: '12982054061', hef: '14:30', hsf: '14:50', hpa: '14:40', qp: 2, r:'N', obs:'-'},
                    {posicao: 3, nome: 'Ivan', telefone: '12982054061', hef: '14:30', hsf: '14:50', hpa: '14:40', qp: 2, r:'N', obs:'-'},
                    {posicao: 4, nome: 'Yasmin', telefone: '12982054061', hef: '14:30', hsf: '14:50', hpa: '14:40', qp: 2, r:'N', obs:'-'},
                    {posicao: 5, nome: 'Alex', telefone: '12982054061', hef: '14:30', hsf: '14:50', hpa: '14:40', qp: 2, r:'N', obs:'-'}
                ]
            }
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

    .content {
        position: relative;
        top: 40px;
    }
</style>
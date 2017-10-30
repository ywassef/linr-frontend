<template>
  <section class="section">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent is-mobile">
        <div class="tile is-child notification is-primary">
          <h2 class="title">Código do restaurante: {{this.$rest_id}}</h2>
        </div>
        <div class="tile is-child">
          <div class="tile is-parent is-mobile">
            <div class="tile is-child notification">
              <h3 class="subtitle">Nome: {{this.$name}}</h3>
            </div>

            <div class="tile is-child notification">
              <h3 class="subtitle">Grupo de: {{this.$num_people}}</h3>
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <div class="tile is-parent is-mobile">
            <div class="tile is-child notification is-">


              <h3 class="title">30 min</h3>
            </div>

            <div class="tile is-child notification">
              <h3 class="title">15 pessoas na fila</h3>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<template>
  <div>
    <div id="restaurantID" style="visibility: hidden; height: 0px; width: 0px">outback12</div>
    <FormFilaView></FormFilaView>
  </div>

</template>

<script>

  import EntrarFila from './Entrarnafila.vue'

  export default {
    name: 'FilaOutback12',
    components: {
      "FormFilaView": EntrarFila
    },
  }
</script>

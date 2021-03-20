<template>
    <v-container>
    <v-row>
      <v-col class="contenedor" md="12">
        <div class="jumbo">
          <h2>Vitrina</h2>
        </div>
        <div>
          <h2>Bienvenido</h2>
          <p>Bienvenido al sistema de gestión de Órdenes e inventario de ClassicModels</p>
        </div>
      </v-col>
    </v-row>
    </v-container>
   
</template>

<script>
export default {
    name: 'jumbo-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
     .jumbo{
    height: 200px;
    background: #f3f3f3;
    color: #7c7c7c;
    text-align:center;
    padding-top:80px;
  }
  .contenedor{
    border: 1px solid #d9dcdc;
    padding: 5px;
  } 
</style>
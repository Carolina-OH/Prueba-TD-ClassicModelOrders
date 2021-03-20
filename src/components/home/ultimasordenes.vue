<template>
     <div>
    <h2>Últimas Órdenes</h2>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              N° Orden
            </th>
            <th class="text-left">
              Cliente
            </th>
            <th class="text-left">
              Fecha de entrega
            </th>
            <th class="text-left">
              Estado
            </th>
            <th class="text-left">
              
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="orden in ordenes" :key="orden.num_orden">
            <td>{{ orden.num_orden }}</td>
            <td>{{ orden.cliente }}</td>
            <td>{{ orden.fecha_entrega }}</td>
            <td>{{ orden.estado }}</td>
            <td><v-btn x-small color="info">Ver detalles</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ultimas-ordenes",
  // props: {},
  data: function() {
    return {
        ordenes:[],
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchordenes(){
      axios.get('http://localhost:8080/api/ultimasordenes.json')
        .then(resp=>{
          console.log(resp.data)
            this.ordenes = resp.data;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  created(){
    this.fetchordenes();
  }
  // components: {},
};
</script>

<style scoped>
    
</style>
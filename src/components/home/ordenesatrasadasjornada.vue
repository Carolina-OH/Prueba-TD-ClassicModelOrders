<template>
    <v-container class="contenido">
    <v-row>
      <v-col>
        <h3 class="titulo">Órdenes Atrasadas Jornada</h3>
      </v-col>
    </v-row>
    <v-row class="informacion">
      <v-col>
        <div class="valor">{{porcentaje}}%</div>
        <div class="detalle_valor"><a href="">Ver detalles</a></div>
      </v-col>
      <v-col>
        <div class="valor">{{totales}}</div>
        <div class="detalle_valor">Órdenes Entregadas</div>
      </v-col>
      <v-col>
        <div class="valor">{{atrasadas}}</div>
        <div class="detalle_valor">Clientes Pendientes</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ordenes-atrasadas-jornada',
  // props: {},
  data: function(){
    return {
      totales:0,
      atrasadas:0,
    }
  },
    computed: {
        porcentaje(){
            let resultado = 0;
            if(this.totales>0){
            resultado =  ((parseInt(this.atrasadas))/(parseInt(this.totales))) *100;
            }
            return resultado;
           
        }
  },
    methods: {
            fetchOrdenes(){
      axios.get('http://localhost:8080/api/kpis.json')
        .then(resp=>{
          console.log(resp.data[1]);             
          let orden = resp.data[1]
          this.totales = orden.totales;
          this.atrasadas = orden.atrasadas;
        })
        .catch(error=>{
          console.log(error)
        })
        }
    },
     created(){
         this.fetchOrdenes();
        }
    
    // components: {},
}
</script>

<style scoped>
     .titulo{
    text-align:center;
    font-weight: bolder;
  }
  .informacion{
    padding: 0 30px;
  }
  .valor{
    text-align: center;
    font-size:20px;
  }
  .detalle_valor{
    text-align: center;
    font-weight: bolder;
  }
  .contenido{
    border: 1px solid grey; 
  }
</style>
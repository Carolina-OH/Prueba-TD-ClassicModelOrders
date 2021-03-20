<template>
     <div>
    <NavBarAdmin></NavBarAdmin>
    <v-container>
      <h2>Orden N° {{id}}</h2>
      <v-row>
        <v-col :md="8">
          <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
            <v-tab>
              General
            </v-tab>
            <v-tab>
              Datos del Cliente
            </v-tab>
            <v-tab>
              Productos
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item >
              <v-card color="basil" flat>
                <v-card-text>
                  <General :orden="general"></General>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item >
              <v-card color="basil" flat>
                <v-card-text>
                  <Datoscliente :clientes="datos"></Datoscliente>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item >
              <v-card color="basil" flat>
                <v-card-text>
                  <Productos :productos="productos"></Productos>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import General from '@/components/orden/General.vue'
import Datoscliente from '@/components/orden/Datoscliente.vue'
import Productos from '@/components/orden/Productos.vue'
import NavBarAdmin from '@/components/AdminNavbar.vue'
import axios from 'axios';
export default {
  name: "Orden",
  props: ["id"],

  data: function() {
    return {
      tab: null,
      general:{},
      datos: {},
      productos:[],
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchInfoorden(){
      axios.get('http://localhost:8080/api/detalle_orden.json')
        .then(resp=>{
          console.log(resp)
           this.general = resp.data.orden;
           this.datos = resp.data.cliente;
           this.productos = resp.data.productos;
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  components: {
   General,
   Datoscliente,
   Productos,
  NavBarAdmin,
  },
  created(){
    this.fetchInfoorden();
  }
};
</script>

<style scoped>
    
</style>
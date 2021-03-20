<template>
<div>
    <NavBarAdmin></NavBarAdmin>
    <v-container>
      <h1>Monitor de Ordenes</h1>
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
                Monto de Orden
              </th>
              <th class="text-left">
                Cant. Productos
              </th>
              <th class="text-left">
                Fecha de entrega
              </th>
              <th class="text-left">
                Avance preparación
              </th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="orden in ordenes" :key="orden.num_orden">
              <td>{{ orden.num_orden }}</td>
              <td>{{ orden.cliente }}</td>
              <td>{{ orden.monto }}</td>
              <td>{{ orden.cant_productos }}</td>
              <td>{{ orden.fecha_entrega }}</td>
              <td>
                <v-progress-linear
                  :value="porcentaje(orden.avance_preparacion)"
                  color="blue-grey"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
              </td>
              <td>
                <v-btn
                  x-small
                  color="info"
                  @click="redirect(orden.num_orden)"
                  >Ver detalle</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
      v-model="page"
      :length="total_page"
    ></v-pagination>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import NavBarAdmin from '@/components/AdminNavbar.vue'
export default {
  name: "Ordenes",
  // props: {},
  data: function() {
    return {
      ordenes: [],
      page: 1,
      total_page: 1,
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    fetchOrdenes() {
      axios
        .get("http://localhost:8080/api/ordenes.json")
        .then((resp) => {
          console.log(resp);
          this.ordenes = resp.data.ordenes;
          this.page = resp.data.pagedResult.page;
          this.total_page = resp.data.pagedResult.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    porcentaje(avance) {
      return (avance * 100);
    },
    redirect(id){
      this.$router.push(`/Orden/${id}`)
    }
  },
  components: {
    NavBarAdmin,
  },
  created() {
    this.fetchOrdenes();
  },
};
</script>

<style scoped>
    
</style>
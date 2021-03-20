<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Código Producto
          </th>
          <th class="text-left">
            Descripción
          </th>
          <th class="text-left">
            Precio Unitario
          </th>
          <th class="text-left">
           Cantidad de pedido
          </th>
          <th class="text-left">
           Cantidad de Pickeado
          </th>
          <th class="text-left">
           Cumplimiento
          </th>
       
        </tr>
      </thead>
      <tbody>
        <tr v-for="productos in productos" :key="productos.cod_prod">
          <td>{{ productos.cod_prod }}</td>
          <td>{{ productos.descripcion }}</td>
          <td>{{ productos.precio_unit }}</td>
          <td>{{ productos.cant_pedido}}</td>
          <td>{{ productos.cant_pickeado}}</td>
           <td>
                <v-progress-linear
                  :value="porcentaje(productos.cant_pedido, productos.cant_pickeado)"
                  color="blue-grey"
                  height="25"
                >
                  <template v-slot:default="{ value }">
                    <strong>{{ Math.ceil(value) }}%</strong>
                  </template>
                </v-progress-linear>
            </td>
      
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "Productos",
  props: {
    productos: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
     
    };
  },
  // computed: {},
  methods: {
    // -- Metodos
    porcentaje(cant_pedido, cant_pickeado){
      
      return (parseInt(cant_pickeado)/parseInt(cant_pedido));
    }
    },
  }
  // components: {},

</script>

<style scoped></style>
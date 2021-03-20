<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre cliente
          </th>
          <th class="text-left">
            RUT
          </th>
          <th class="text-left">
            Dirección entrega
          </th>
          <th class="text-left">
            Contacto
          </th>
          <th class="text-left">
            Fono
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="clientes in cliente" :key="clientes.nombre">
          <td>{{ clientes.nombre }}</td>
          <td>{{ clientes.rut_n }}-{{clientes.rut_dv}}</td>
          <td>{{ clientes.direccion_entrega }}</td>
          <td>{{ clientes.contacto }}</td>
          <td>{{ clientes.fono }}</td>
          <td>{{ clientes.email }}</td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "Datoscliente",
  props: {
    clientes: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return {};
  },
  // computed: {},
  methods: {
    // -- Metodos
   
    }
  }
  // components: {},

</script>

<style scoped></style>
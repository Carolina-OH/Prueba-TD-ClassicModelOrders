<template>

<div class="grilla">
    <div class="labels">Número de orden</div>
    <div class="labels">{{ clientes.nombre }}</div>
    <div class="labels">Monto</div>
    <div class="labels">{{ clientes.rut_n }}-{{clientes.rut_dv}}</div>
    <div class="labels">Cant. Productos</div>
    <div class="labels">{{ clientes.direccion_entrega }}</div>
    <div class="labels">Fecha Entrega</div>
    <div class="labels">{{ clientes.contacto }}</div>
    <div class="labels">Vendedor</div>
    <div class="labels">{{ clientes.fono }}</div>
    <div class="labels">Estado</div>
    <div class="labels">{{ clientes.email }}</div>
  </div>
  
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

<style scoped>

 .grilla{
    display:grid;
    grid-template-columns: .5fr 2fr;
    margin-top:20px;
  }
  .labels{
    color:rgb(71, 71, 71);
    padding: 8px;
    font-size: 1.1rem;
  }
</style>
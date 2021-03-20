<template>

<div class="grilla">
    <div class="labels">Nombre</div>
    <div class="labels">{{ clientes.nombre }}</div>
    <div class="labels">RUT</div>
    <div class="labels">{{ clientes.rut_n }}-{{clientes.rut_dv}}</div>
    <div class="labels">Direccion entrega</div>
    <div class="labels">{{ clientes.direccion_entrega }}</div>
    <div class="labels">Contacto</div>
    <div class="labels">{{ clientes.contacto }}</div>
    <div class="labels">Fono</div>
    <div class="labels">{{ clientes.fono }}</div>
    <div class="labels">Email</div>
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
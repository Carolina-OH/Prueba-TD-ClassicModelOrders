<template>
  <div class="grilla">
    <div class="labels">Número de orden</div>
    <div class="labels">{{orden.num_orden}}</div>
    <div class="labels">Monto</div>
    <div class="labels">{{orden.monto}}</div>
    <div class="labels">Cant. Productos</div>
    <div class="labels">{{orden.cant_productos}}</div>
    <div class="labels">Fecha Entrega</div>
    <div class="labels">{{orden.fecha_entrega}}</div>
    <div class="labels">Vendedor</div>
    <div class="labels">{{orden.vendedor}}</div>
    <div class="labels">Estado</div>
    <div class="labels">{{orden.estado}}</div>
  </div>
</template>

<script>
export default {
  name: 'General-orden',
  props: {
    orden:{
      type: Object,
      required: true,
    },
  },
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
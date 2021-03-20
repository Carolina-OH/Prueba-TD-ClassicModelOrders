<template>
  <div>
  <NavBarAdmin> </NavBarAdmin>
   <h3>home</h3>
   <v-container>
      <v-row>
        <v-col>
          <Jumbo></Jumbo>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <cumplimientodiarioordenes></cumplimientodiarioordenes>
        </v-col>
        <v-col>
          <Ordenesatrasadasjornada></Ordenesatrasadasjornada>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Ultimasordenes></Ultimasordenes>
        </v-col>
        <v-col>
          <Ultimasdevoluciones></Ultimasdevoluciones>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Jumbo from '@/components/home/Jumbo.vue'
import cumplimientodiarioordenes from '@/components/home/cumplimientodiarioordenes.vue'
import Ordenesatrasadasjornada from '@/components/home/ordenesatrasadasjornada.vue'
import Ultimasordenes from '@/components/home/ultimasordenes.vue'
import Ultimasdevoluciones from '@/components/home/ultimasdevoluciones.vue'
import NavBarAdmin from '@/components/AdminNavbar.vue'
export default {
  name: 'Home',
  components: {
    Jumbo,
    cumplimientodiarioordenes,
    Ordenesatrasadasjornada,
    Ultimasordenes,
    Ultimasdevoluciones,
    NavBarAdmin,
  }
}
</script>

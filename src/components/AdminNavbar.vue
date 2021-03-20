<template>
 <v-toolbar dense :dark="true">
    

    <v-toolbar-title>Company</v-toolbar-title>
    <v-btn depressed color="default" @click="$router.push('/')">
      Home
    </v-btn>
    <v-btn depressed color="default" @click="$router.push('/Ordenes')">
      Ordenes
    </v-btn>
    <v-btn depressed color="default" @click="$router.push('/')">
      Inventario
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn depressed color="default" @click="logout">
      Profile
    </v-btn>

    <v-btn depressed color="default" @click="logout">
      Cerrar Sesión
    </v-btn>
  </v-toolbar>
</template>

<script>
//import firebase from 'firebase'
export default {
  name: "Navbar-Admin",
  methods: {
    logout() {
     // firebase
      
       //   this.$router.push('/')
        
    
    },
  },
};
</script>

<style>
.v-toolbar-title{
margin-right:2em;
vertical-align:center;
font-size:0.875rem;
font-weight: 500;
letter-spacing: 0.0892857143em;
text-indent: 0.0892857143em;
white-space: nowrap;
}
.v-btn{
text-transform: none;
}
</style>

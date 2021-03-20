<template>
  <v-container>
    <div class="logo"> 
     <div class="logoimg"><img src="../assets/engranaje.png"><span>Logo Empresa</span></div>
    <v-row justify="center">
      <v-col md="6" class="td">
      <div id="credenciales">
        <h1>Login</h1>
        <h2>user: user@user.cl</h2>
        <h2>pass: 123456</h2>
      </div>
        <v-card class="td center" >
          <v-form ref="form" v-model="valid" lazy-validation>
        
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>

           <v-text-field
            v-model="pass"
            :rules="[(v) => !!v || 'Contraseña requerida']"
            label="Contraseña"
            type="password"
            required
          ></v-text-field>

      

          <v-btn 
            :disabled="!valid"
            color="blue"
            class="mr-4 botonc  white--text"
            @click="submit"
          >
            Ingresar
          </v-btn>
    
         <!--  <v-btn color="error" class="mr-4" @click="reset">
            Limpiar
          </v-btn>  -->

        </v-form><br>
        <v-spacer class="mt-5"></v-spacer>
        <v-alert v-if="!userFind" type="warning">
          No estas registrado en el sistema
        </v-alert>
        </v-card>
        
      </v-col>
    </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import {mapActions} from 'vuex';
export default {
  name: "LoginComponent",
  data: function(){
    return{
      valid: true,
      email:"",
      pass: "",
      emailRules: [
        v => !!v || 'Correo requerido',
        v => /.+@.+\..+/.test(v) || 'Correo no valido',
      ],
      userFind:true,
    }
  },
  methods:{
      ...mapActions(['setUserData']),

    validate () {
        return this.$refs.form.validate()
    },
    reset () {
        this.$refs.form.reset()
    },
    submit(){
      //guardia
      if(this.validate() === false) return

     
      axios.get('http://localhost:8080/api/login.json')
      .then(resp=>{
        console.log(resp.data)
        let user = resp.data;
        if (user.email == this.email && user.pass == this.pass){
          this.setUserData(user);
          this.$router.push('/');
          this.userFind = true;
        }
        else{
          this.userFind = false;
        }
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
};
</script>

<style>
.td{
  margin-top:5%;
  display:grid;
  justify-content:center;
  width:20em;
  padding:3em;
  margin-left:auto;
  margin-right:auto;
}
   .logo{
        display:grid;
        height:8em;
        border:1px solid black;
        margin:0rem 2rem 0rem 2rem;
        margin-top:0;
        
    }

    .logoimg{
        width:15em;
        border: 1px solid black;
        border-radius: 15px;
        margin:1em;
        
    }
    .logoimg img{
        max-width:5em;
        float:left;
        display:flex;
        box-sizing:border-box;
        padding: 0.5em
    }
    .logoimg span{
        float:left;
    }
    .container{
    max-width: 100%;
    }
    .botonc{
    width:95%;
  
    }
    #credenciales{
    display:none}
</style>

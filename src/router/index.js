import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import store from '../store'
import Orden from '@/views/orden.vue'
import Ordenes from '@/views/ordenes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      autenticado:true
    }
  },
  {
    path: '/Ordenes',
    name: 'Ordenes',
    component: Ordenes,
    meta:{
      autenticado:true
    }
  },
  {
    path: '/Orden/:id',
    name: 'Orden',
    component: Orden,
    props:true,
    meta:{
      autenticado:true
    }
  }, 
  {
    path: '/login',
    name: "Login",
    component: Login,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let user = store.state.token;
  console.log(to)
  let private_rute = to.matched.some(record=> record.meta.autenticado)

  if(private_rute && !user){
    next('/login')
  }
  else if(!private_rute && user){
    next('/home')
  }
  else{
    next();
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/producto/ListarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/producto/insertar',
      name: 'producto_insertar',
      component: () => import('../views/producto/InsertarView.vue')
    }  
    ,
    {
      path: '/producto/actualizar/:id',
      name: 'producto_actualizar',
      component: () => import('../views/producto/ActualizarView.vue')
    }         
  ]
})

export default router

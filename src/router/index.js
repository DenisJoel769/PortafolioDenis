import { createRouter, createWebHashHistory } from 'vue-router'
//import Vista from '../views/Vista.vue'
import About from '../views/About.vue'
import Curriculum from '../views/Curriculum.vue'
import VistaPrincipal from '../views/VistaPrincipal.vue'
import Inicio from '../views/Inicio.vue'
const routes = [
  {
    path: '/',
    name: 'vista',
    component: VistaPrincipal,
      children: [
        {
          path: '/',
          name: 'inicio',
          component: Inicio
        },
        {
          path: '/about',
          name: 'contacto',
          component: About
        },   
        {
          path: '/curriculum',
          name: 'curriculum',
          component: Curriculum
        }
      ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

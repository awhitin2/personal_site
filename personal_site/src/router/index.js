import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  }  
]

const router = new VueRouter({
  routes
})

export default router

// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: function () {
//     return import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// }
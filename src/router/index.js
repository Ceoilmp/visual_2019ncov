import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const worldMap = () => import('views/mapView/mapRouter/worldMap.vue')
const chinaMap = () => import('views/mapView/mapRouter/chinaMap.vue')

const routes = [
  {
    path:'',
    redirect:'/worldMap'
  },
  {
    path:'/worldMap',
    component:worldMap
  },
  {
    path:'/chinaMap',
    component:chinaMap
  }
]

const router = new VueRouter({
  routes
})

export default router

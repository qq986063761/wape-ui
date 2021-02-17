import Vue from 'vue'
import VueRouter from 'vue-router'
import textEllipsis from '../views/textEllipsis'
import sticky from '../views/sticky'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    redirect: '/textEllipsis'
  },
  {
    path: '/textEllipsis',
    name: 'textEllipsis',
    component: textEllipsis
  },
  {
    path: '/sticky',
    name: 'sticky',
    component: sticky
  }
]

const router = new VueRouter({
  routes
})

export default router

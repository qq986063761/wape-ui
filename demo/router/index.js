import Vue from 'vue'
import VueRouter from 'vue-router'
import textEllipsis from '../views/components/textEllipsis'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/textEllipsis' },
  {
    path: '/textEllipsis',
    name: 'textEllipsis',
    component: textEllipsis
  }
]

const router = new VueRouter({
  routes
})

export default router

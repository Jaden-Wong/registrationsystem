import Vue from 'vue'
import VueRouter from 'vue-router'
const Competition = () => import(/* webpackChunkName: "competition" */ '@/views/competition/Competition')
const Center = () => import(/* webpackChunkName: "center" */ '@/views/center/Center')
const My = () => import(/* webpackChunkName: "my" */ '@/views/my/My')

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/competition'
  },
  {
    path: '/competition',
    component: Competition
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/my',
    component: My
  }
]

const router = new VueRouter({
  routes
})

export default router

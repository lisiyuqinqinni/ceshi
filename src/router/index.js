import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Document from '@/components/document'
import noFind from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: Home,
      component: Home
    },
    {
      path: '/about',
      name: About,
      component: About
    },
    {
      path: '/document',
      component: Document
    },
    {
      path: '*',
      // component: noFind
      // redirect: '/home'
      // redirect: { name: Home }
      redirect: (to) => {
        console.log(to)
      }
    }
  ]
})

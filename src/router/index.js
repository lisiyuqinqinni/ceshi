import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import about from '@/components/about'
import document from '@/components/document'
import home from '@/components/home'
import noFind from '@/components/404'
import about1 from '@/components/about1'
import about2 from '@/components/about2'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      children: [
        {
          path: '/about/',
          component: about1
        },
        {
          path: '/about/about2',
          component: about2
        }
      ]
    },
    {
      path: '/document',
      name: 'document',
      components: {
        default: document,
        noFind: noFind
      }
    },
    {
      path: '*',
      redirect: (to) => {
        console.log(to)
        return '/home'
      }
    }
  ]
})

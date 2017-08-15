// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, form, next) => {
  next()
})
router.afterEach((to, form) => {
  console.log(to.meta.title)
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'lisiyu'
  }
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

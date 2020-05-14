import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './helpers/router'
import { isAuthenticated } from './helpers/config'
Vue.config.productionTip = false

Vue.use(VueRouter)

router.beforeEach((to,from,next) => {
  
  if ((to.name !== 'Login') && (!isAuthenticated())) {
    console.log('Redirecionando')
    next({name: 'Login'})
  }
  else {
    next()
  }
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')